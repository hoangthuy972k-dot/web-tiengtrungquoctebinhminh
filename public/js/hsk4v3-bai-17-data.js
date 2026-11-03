// HSK 4 (3.0) · Bai 17 — sinh boi tools/hsk4v3/gan.js tu tools/hsk4v3/bai-17/ (dung sua tay).
var vocabData = [
 {
  "n": 1,
  "zh": "路过",
  "py": "lùguò",
  "pos": "Động từ",
  "vn": "đi ngang qua, đi qua",
  "hv": "lộ quá",
  "em": "🛣️",
  "lesson": 1,
  "explain": [
   "Đi ngang qua một nơi nào đó trên đường đi (không dừng lại lâu, hoặc tiện ghé vào); sau 路过 là tân ngữ chỉ nơi chốn."
  ],
  "usage": "路过 + nơi chốn · 正好路过 · 路过……的时候 · 在回家的路上路过…….",
  "collo": [
   "路过这里",
   "正好路过",
   "路过超市",
   "路过的人"
  ],
  "colloFull": [
   {
    "zh": "路过这里",
    "py": "Lùguò zhèli",
    "vn": "đi ngang qua đây"
   },
   {
    "zh": "正好路过",
    "py": "Zhènghǎo lùguò",
    "vn": "tiện đi ngang qua"
   },
   {
    "zh": "路过超市",
    "py": "Lùguò chāoshì",
    "vn": "đi ngang qua siêu thị"
   },
   {
    "zh": "路过的人",
    "py": "Lùguò de rén",
    "vn": "người đi ngang qua"
   }
  ],
  "patterns": [
   {
    "s": "路过 + nơi chốn",
    "m": "Tân ngữ là nơi chốn, đứng ngay sau 路过 (✗ 从超市路过 → ✓ 路过超市)"
   },
   {
    "s": "路过……的时候，正好……",
    "m": "Khi đi ngang qua … thì tiện …"
   }
  ],
  "ex_zh": "下班了！同乐，我今天正好要路过你们家那边，用不用我开车送你？",
  "ex_py": "Xiàbān le! Tónglè, wǒ jīntiān zhènghǎo yào lùguò nǐmen jiā nàbiān, yòng búyòng wǒ kāichē sòng nǐ?",
  "ex_vn": "Tan làm rồi! Đồng Lạc, hôm nay chị tiện đi ngang qua bên nhà em, có cần chị lái xe đưa em về không?",
  "exList": [
   {
    "zh": "下班了！同乐，我今天正好要路过你们家那边，用不用我开车送你？",
    "py": "Xiàbān le! Tónglè, wǒ jīntiān zhènghǎo yào lùguò nǐmen jiā nàbiān, yòng búyòng wǒ kāichē sòng nǐ?",
    "vn": "Tan làm rồi! Đồng Lạc, hôm nay chị tiện đi ngang qua bên nhà em, có cần chị lái xe đưa em về không?"
   },
   {
    "zh": "昨天我在回家的路上路过了一家新开的咖啡店。",
    "py": "Zuótiān wǒ zài huíjiā de lùshang lùguò le yì jiā xīn kāi de kāfēidiàn.",
    "vn": "Hôm qua trên đường về nhà tôi đi ngang qua một quán cà phê mới mở."
   }
  ],
  "hanzi": [
   {
    "c": "路",
    "p": "lù",
    "type": "左右结构 · Trái-phải",
    "st": 13,
    "ord": "足 trái → 各 phải",
    "rad": "足 (túc)",
    "mean": "đường",
    "tip": "Chân 足 + 各 → nơi chân đi → ĐƯỜNG. 公路 = đường công cộng; 路口 (Bài 2); 迷路 (Bài 18); 马路 (Bài 19).",
    "cf": "各 (gè – mỗi)",
    "w": "高速公路 / 路口 / 迷路 / 马路"
   },
   {
    "c": "过",
    "p": "guò",
    "type": "半包围结构 · Bán bao vây (giản thể)",
    "st": 6,
    "ord": "讠(biến thể) trái → 寸 phải",
    "rad": "辶 (sước – đi)",
    "mean": "qua, vượt quá",
    "tip": "Bộ đi 辶 + 寸(biểu âm) → hành động ĐI QUA, VƯỢT QUA, kết hợp 不(không) thành 不过 = KHÔNG QUA, mở rộng thành NHƯNG (chuyển ý) hoặc CHỈ (không vượt quá mức).",
    "cf": "讨 (tǎo – \"thảo luận\", bộ 讠\")",
    "w": "不过 / 经过 / 通过"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Lúc tan làm tôi đi ngang qua siêu thị, tiện mua ít sữa chua.",
    "answer": "下班的时候我路过超市，正好买了点儿酸奶。",
    "answerPy": "Xiàbān de shíhou wǒ lùguò chāoshì, zhènghǎo mǎi le diǎnr suānnǎi.",
    "note": "路过 + nơi chốn; từ mới 酸奶.",
    "pair": "路过 + nơi"
   },
   {
    "promptLang": "vi",
    "prompt": "Cho dù đi ngang qua tiệm bánh, cô ấy cũng không vào mua bánh quy.",
    "answer": "即使路过面包店，她也不进去买饼干。",
    "answerPy": "Jíshǐ lùguò miànbāo diàn, tā yě bú jìnqu mǎi bǐnggān.",
    "note": "Ôn 即使……也…… (Bài 11 · điểm 1).",
    "pair": "即使……也……"
   }
  ]
 },
 {
  "n": 2,
  "zh": "趟",
  "py": "tàng",
  "pos": "Lượng từ",
  "vn": "chuyến, lượt (đi – về)",
  "hv": "thảng",
  "em": "🔁",
  "lesson": 1,
  "explain": [
   "Lượng từ chỉ số lần đi – về (một chuyến đi lại); đứng sau các động từ 去 / 来 / 回 / 跑: 去一趟, 跑一趟.",
   "Cũng dùng cho chuyến xe, chuyến tàu: 这趟车, 下一趟火车."
  ],
  "usage": "去一趟 + nơi · 去 + nơi + 一趟 · 跑一趟 · 这趟车.",
  "collo": [
   "去一趟",
   "跑一趟",
   "回一趟家",
   "下一趟车"
  ],
  "colloFull": [
   {
    "zh": "去一趟",
    "py": "Qù yí tàng",
    "vn": "đi một chuyến"
   },
   {
    "zh": "跑一趟",
    "py": "Pǎo yí tàng",
    "vn": "chạy đi một chuyến"
   },
   {
    "zh": "回一趟家",
    "py": "Huí yí tàng jiā",
    "vn": "về nhà một chuyến"
   },
   {
    "zh": "下一趟车",
    "py": "Xià yí tàng chē",
    "vn": "chuyến xe sau"
   }
  ],
  "patterns": [
   {
    "s": "去一趟 + nơi / 去 + nơi + 一趟",
    "m": "Hai vị trí đều đúng"
   },
   {
    "s": "趟 ≠ 次",
    "m": "次: số lần nói chung; 趟: một chuyến đi – về"
   }
  ],
  "ex_zh": "谢谢一雪姐，不过您走您的吧，我一会儿还要去一趟健身房。",
  "ex_py": "Xièxie Yīxuě jiě, búguò nín zǒu nín de ba, wǒ yíhuìr hái yào qù yí tàng jiànshēnfáng.",
  "ex_vn": "Cảm ơn chị Nhất Tuyết, nhưng chị cứ về trước đi ạ, lát nữa em còn phải đến phòng gym một chuyến.",
  "exList": [
   {
    "zh": "谢谢一雪姐，不过您走您的吧，我一会儿还要去一趟健身房。",
    "py": "Xièxie Yīxuě jiě, búguò nín zǒu nín de ba, wǒ yíhuìr hái yào qù yí tàng jiànshēnfáng.",
    "vn": "Cảm ơn chị Nhất Tuyết, nhưng chị cứ về trước đi ạ, lát nữa em còn phải đến phòng gym một chuyến."
   },
   {
    "zh": "明天我要去一趟上海，咱们下周再约时间见面吧。",
    "py": "Míngtiān wǒ yào qù yí tàng Shànghǎi, zánmen xià zhōu zài yuē shíjiān jiànmiàn ba.",
    "vn": "Mai tôi phải đi Thượng Hải một chuyến, tuần sau chúng ta hẹn thời gian gặp nhau nhé."
   }
  ],
  "hanzi": [
   {
    "c": "趟",
    "p": "tàng",
    "type": "半包围结构 · Nửa bao quanh",
    "st": 15,
    "ord": "走 bao → 尚 trong",
    "rad": "走 (tẩu)",
    "mean": "chuyến",
    "tip": "Bộ chạy 走 + 尚 → CHUYẾN đi. Lượng từ cho hành động đi-về (去/来/回 + 一趟).",
    "cf": "尚 (shàng – còn)",
    "w": "一趟 / 去一趟 / 回一趟家"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Chiều nay tôi phải về nhà một chuyến để lấy tài liệu.",
    "answer": "今天下午我得回一趟家拿资料。",
    "answerPy": "Jīntiān xiàwǔ wǒ děi huí yí tàng jiā ná zīliào.",
    "note": "趟 sau động từ; 得 (děi) = phải; ôn 资料 (Bài 11).",
    "pair": "回一趟 + nơi"
   },
   {
    "promptLang": "vi",
    "prompt": "Cho dù bận đến mấy, cuối tuần tôi cũng phải về thăm bố mẹ một chuyến.",
    "answer": "就是再忙，周末我也要回一趟家看父母。",
    "answerPy": "Jiùshì zài máng, zhōumò wǒ yě yào huí yí tàng jiā kàn fùmǔ.",
    "note": "Ôn 就是……也…… (Bài 11 · điểm 2).",
    "pair": "就是……也……"
   }
  ]
 },
 {
  "n": 3,
  "zh": "健身房",
  "py": "jiànshēnfáng",
  "pos": "Danh từ",
  "vn": "phòng tập thể hình, phòng gym",
  "hv": "kiện thân phòng",
  "em": "🏋️",
  "lesson": 1,
  "explain": [
   "Nơi có máy móc, thiết bị và huấn luyện viên để mọi người tập luyện sức khoẻ (phòng gym)."
  ],
  "usage": "去健身房 · 在健身房健身 · 新开了一家健身房 · 健身房的会员卡.",
  "collo": [
   "去健身房",
   "一家健身房",
   "健身房的教练",
   "健身房会员卡"
  ],
  "colloFull": [
   {
    "zh": "去健身房",
    "py": "Qù jiànshēnfáng",
    "vn": "đi phòng gym"
   },
   {
    "zh": "一家健身房",
    "py": "Yì jiā jiànshēnfáng",
    "vn": "một phòng gym"
   },
   {
    "zh": "健身房的教练",
    "py": "Jiànshēnfáng de jiàoliàn",
    "vn": "huấn luyện viên phòng gym"
   },
   {
    "zh": "健身房会员卡",
    "py": "Jiànshēnfáng huìyuánkǎ",
    "vn": "thẻ hội viên phòng gym"
   }
  ],
  "patterns": [
   {
    "s": "一家 + 健身房",
    "m": "Lượng từ 家 cho cửa hàng, cơ sở kinh doanh"
   },
   {
    "s": "去健身房 + 健身 / 锻炼",
    "m": "Câu liên động: đến phòng gym để tập"
   }
  ],
  "ex_zh": "我上个星期发现单位旁边新开了一家健身房。",
  "ex_py": "Wǒ shàng gè xīngqī fāxiàn dānwèi pángbiān xīn kāi le yì jiā jiànshēnfáng.",
  "ex_vn": "Tuần trước em phát hiện bên cạnh cơ quan mới mở một phòng gym.",
  "exList": [
   {
    "zh": "我上个星期发现单位旁边新开了一家健身房。",
    "py": "Wǒ shàng gè xīngqī fāxiàn dānwèi pángbiān xīn kāi le yì jiā jiànshēnfáng.",
    "vn": "Tuần trước em phát hiện bên cạnh cơ quan mới mở một phòng gym."
   },
   {
    "zh": "这家健身房环境好、设备全，所以会员特别多。",
    "py": "Zhè jiā jiànshēnfáng huánjìng hǎo, shèbèi quán, suǒyǐ huìyuán tèbié duō.",
    "vn": "Phòng gym này môi trường tốt, thiết bị đầy đủ, nên hội viên rất đông."
   }
  ],
  "hanzi": [
   {
    "c": "健",
    "p": "jiàn",
    "type": "形声字 · Chữ hình thanh",
    "st": 10,
    "ord": "亻 → 建",
    "rad": "亻 (nhân đứng – người)",
    "mean": "khoẻ",
    "tip": "亻 (người) + 建 (xây dựng, chỉ âm): người có thân thể vững chắc → khoẻ.",
    "cf": "建 jiàn — không có bộ 亻",
    "w": "健康 / 不健康"
   },
   {
    "c": "身",
    "p": "shēn",
    "type": "独体字 · Tượng hình",
    "st": 7,
    "ord": "丿→𠃌→一→一→一→一→丨",
    "rad": "身 (thân – tự thành bộ)",
    "mean": "thân thể, cơ thể",
    "tip": "Hình dáng người mang thai bụng to → THÂN THỂ, mở rộng nghĩa \"bản thân, cơ thể\".",
    "cf": "躬 (gōng – \"cúi mình\")",
    "w": "身体"
   },
   {
    "c": "房",
    "p": "fáng",
    "type": "形声字 · Chữ hình thanh",
    "st": 8,
    "ord": "户 (chấm → ngang gập → ngang → phẩy) → 方",
    "rad": "户 (hộ – cửa)",
    "mean": "phòng, nhà",
    "tip": "户 (cánh cửa) + 方 (chỉ âm): nơi có cửa ra vào → phòng, nhà. Ôn: 房间 (HSK1 Bài 8), 房子 (HSK2 Bài 14).",
    "cf": "方 fāng (方便 – HSK3 Bài 2) — 房 có thêm 户 ở trên",
    "w": "房子 / 房间"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Phòng gym gần nhà tôi rất nhỏ, không bằng phòng gym cạnh công ty.",
    "answer": "我家附近的健身房很小，不如公司旁边的那家。",
    "answerPy": "Wǒ jiā fùjìn de jiànshēnfáng hěn xiǎo, bùrú gōngsī pángbiān de nà jiā.",
    "note": "Ôn A不如B (Bài 15 · điểm 4).",
    "pair": "A不如B"
   },
   {
    "promptLang": "vi",
    "prompt": "Anh ấy mỗi tuần đi phòng gym ít nhất ba lần.",
    "answer": "他每周至少去三次健身房。",
    "answerPy": "Tā měi zhōu zhìshǎo qù sān cì jiànshēnfáng.",
    "note": "Ôn 至少 (Bài 5 · điểm 1).",
    "pair": "至少 + V + số lần"
   }
  ]
 },
 {
  "n": 4,
  "zh": "健身",
  "py": "jiànshēn",
  "pos": "Động từ",
  "vn": "tập thể hình, rèn luyện sức khoẻ",
  "hv": "kiện thân",
  "em": "💪",
  "lesson": 1,
  "explain": [
   "Rèn luyện cơ thể cho khoẻ mạnh, thường là tập ở phòng gym; là động từ không mang tân ngữ (✗ 健身身体)."
  ],
  "usage": "去健身 · 开始健身 · 坚持健身 · 健身方式 / 健身习惯.",
  "collo": [
   "开始健身",
   "坚持健身",
   "健身方式",
   "健身习惯"
  ],
  "colloFull": [
   {
    "zh": "开始健身",
    "py": "Kāishǐ jiànshēn",
    "vn": "bắt đầu tập luyện"
   },
   {
    "zh": "坚持健身",
    "py": "Jiānchí jiànshēn",
    "vn": "kiên trì tập luyện"
   },
   {
    "zh": "健身方式",
    "py": "Jiànshēn fāngshì",
    "vn": "cách tập luyện"
   },
   {
    "zh": "健身习惯",
    "py": "Jiànshēn xíguàn",
    "vn": "thói quen tập luyện"
   }
  ],
  "patterns": [
   {
    "s": "……是什么时候开始健身的？",
    "m": "Câu 是……的 hỏi thời gian (HSK 3)"
   },
   {
    "s": "坚持 + 健身",
    "m": "Kiên trì tập luyện"
   }
  ],
  "ex_zh": "去健身房？你什么时候开始健身的？",
  "ex_py": "Qù jiànshēnfáng? Nǐ shénme shíhou kāishǐ jiànshēn de?",
  "ex_vn": "Đi phòng gym á? Em bắt đầu tập từ khi nào thế?",
  "exList": [
   {
    "zh": "去健身房？你什么时候开始健身的？",
    "py": "Qù jiànshēnfáng? Nǐ shénme shíhou kāishǐ jiànshēn de?",
    "vn": "Đi phòng gym á? Em bắt đầu tập từ khi nào thế?"
   },
   {
    "zh": "他每天下班以后都去健身，已经坚持一年了。",
    "py": "Tā měitiān xiàbān yǐhòu dōu qù jiànshēn, yǐjīng jiānchí yì nián le.",
    "vn": "Ngày nào tan làm anh ấy cũng đi tập, đã kiên trì được một năm rồi."
   }
  ],
  "hanzi": [
   {
    "c": "健",
    "p": "jiàn",
    "type": "形声字 · Chữ hình thanh",
    "st": 10,
    "ord": "亻 → 建",
    "rad": "亻 (nhân đứng – người)",
    "mean": "khoẻ",
    "tip": "亻 (người) + 建 (xây dựng, chỉ âm): người có thân thể vững chắc → khoẻ.",
    "cf": "建 jiàn — không có bộ 亻",
    "w": "健康 / 不健康"
   },
   {
    "c": "身",
    "p": "shēn",
    "type": "独体字 · Tượng hình",
    "st": 7,
    "ord": "丿→𠃌→一→一→一→一→丨",
    "rad": "身 (thân – tự thành bộ)",
    "mean": "thân thể, cơ thể",
    "tip": "Hình dáng người mang thai bụng to → THÂN THỂ, mở rộng nghĩa \"bản thân, cơ thể\".",
    "cf": "躬 (gōng – \"cúi mình\")",
    "w": "身体"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Anh bắt đầu tập gym từ khi nào?",
    "answer": "你是什么时候开始健身的？",
    "answerPy": "Nǐ shì shénme shíhou kāishǐ jiànshēn de?",
    "note": "Ôn câu 是……的 nhấn mạnh thời gian (HSK 3).",
    "pair": "是……的"
   },
   {
    "promptLang": "vi",
    "prompt": "Cho dù tuổi đã cao, ông tôi vẫn kiên trì tập luyện.",
    "answer": "即使年龄大了，我爷爷也坚持健身。",
    "answerPy": "Jíshǐ niánlíng dà le, wǒ yéye yě jiānchí jiànshēn.",
    "note": "Ôn 即使……也…… (Bài 11 · điểm 1).",
    "pair": "即使……也……"
   }
  ]
 },
 {
  "n": 5,
  "zh": "体重",
  "py": "tǐzhòng",
  "pos": "Danh từ",
  "vn": "cân nặng",
  "hv": "thể trọng",
  "em": "⚖️",
  "lesson": 1,
  "explain": [
   "Trọng lượng cơ thể, cân nặng. ⚠ Tiếng Việt có “thể trọng” nhưng ít dùng; nói thường là “cân nặng”."
  ],
  "usage": "体重增加 / 减少 · 体重是……公斤 · 保持体重.",
  "collo": [
   "体重增加",
   "体重减少",
   "保持体重",
   "标准体重"
  ],
  "colloFull": [
   {
    "zh": "体重增加",
    "py": "Tǐzhòng zēngjiā",
    "vn": "cân nặng tăng"
   },
   {
    "zh": "体重减少",
    "py": "Tǐzhòng jiǎnshǎo",
    "vn": "cân nặng giảm"
   },
   {
    "zh": "保持体重",
    "py": "Bǎochí tǐzhòng",
    "vn": "giữ cân nặng"
   },
   {
    "zh": "标准体重",
    "py": "Biāozhǔn tǐzhòng",
    "vn": "cân nặng chuẩn"
   }
  ],
  "patterns": [
   {
    "s": "体重 + 增加 / 减少 + 了 + số lượng",
    "m": "Nói cân nặng thay đổi"
   },
   {
    "s": "体重是 + số + 公斤",
    "m": "Nói số cân"
   }
  ],
  "ex_zh": "我最近体重增加了不少，正好想运动一下，就进去看了看。",
  "ex_py": "Wǒ zuìjìn tǐzhòng zēngjiā le bùshǎo, zhènghǎo xiǎng yùndòng yíxià, jiù jìnqu kàn le kàn.",
  "ex_vn": "Dạo này cân nặng của em tăng lên không ít, đúng lúc muốn vận động một chút, nên vào xem thử.",
  "exList": [
   {
    "zh": "我最近体重增加了不少，正好想运动一下，就进去看了看。",
    "py": "Wǒ zuìjìn tǐzhòng zēngjiā le bùshǎo, zhènghǎo xiǎng yùndòng yíxià, jiù jìnqu kàn le kàn.",
    "vn": "Dạo này cân nặng của em tăng lên không ít, đúng lúc muốn vận động một chút, nên vào xem thử."
   },
   {
    "zh": "时间长了，他感觉自己的身体越来越差，体重也一直增加。",
    "py": "Shíjiān cháng le, tā gǎnjué zìjǐ de shēntǐ yuèláiyuè chà, tǐzhòng yě yìzhí zēngjiā.",
    "vn": "Lâu dần, anh ấy cảm thấy sức khoẻ của mình ngày càng kém, cân nặng cũng tăng mãi."
   }
  ],
  "hanzi": [
   {
    "c": "体",
    "p": "tǐ",
    "type": "左右结构 · Trái-phải",
    "st": 7,
    "ord": "亻 (nhân) trái → 本 (bản) phải",
    "rad": "亻 (nhân – người)",
    "mean": "cơ thể",
    "tip": "Người 亻 + 本 (gốc rễ) → cái GỐC của một con người = cơ thể.",
    "cf": "休 (xiū – khác phần phải)",
    "w": "身体 / 体育 / 体重"
   },
   {
    "c": "重",
    "p": "zhòng",
    "type": "独体字 · Chữ đơn thể",
    "st": 9,
    "ord": "丿 → 一 → 日 → 土",
    "rad": "里 (lý)",
    "mean": "nặng",
    "tip": "Hình người đứng trên đất 土 vác túi nặng → NẶNG. Đa âm: zhòng (nặng, quan trọng 重要) / chóng (lặp lại 重新).",
    "cf": "童 (tóng – trẻ con)",
    "w": "重 / 严重 / 重要 / 重新"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Một tháng nay cân nặng của tôi giảm hai cân.",
    "answer": "这一个月我的体重减少了两公斤。",
    "answerPy": "Zhè yí gè yuè wǒ de tǐzhòng jiǎnshǎo le liǎng gōngjīn.",
    "note": "体重 + 减少 + số lượng.",
    "pair": "体重减少了……"
   },
   {
    "promptLang": "vi",
    "prompt": "Cùng với cân nặng không ngừng tăng, anh ấy ngày càng không thích vận động.",
    "answer": "随着体重不断增加，他越来越不爱运动了。",
    "answerPy": "Suízhe tǐzhòng búduàn zēngjiā, tā yuèláiyuè bú ài yùndòng le.",
    "note": "Ôn 随着 (Bài 1 · điểm 3) + từ mới 不断.",
    "pair": "随着……，……越来越……"
   }
  ]
 },
 {
  "n": 6,
  "zh": "会员",
  "py": "huìyuán",
  "pos": "Danh từ",
  "vn": "hội viên, thành viên",
  "hv": "hội viên",
  "em": "💳",
  "lesson": 1,
  "explain": [
   "Thành viên của một tổ chức, câu lạc bộ, cửa hàng…; làm 会员卡 (thẻ hội viên) thường được giảm giá, ưu đãi."
  ],
  "usage": "办会员卡 · 成为会员 · 会员价 · 健身房的会员.",
  "collo": [
   "会员卡",
   "办会员卡",
   "会员价",
   "成为会员"
  ],
  "colloFull": [
   {
    "zh": "会员卡",
    "py": "Huìyuánkǎ",
    "vn": "thẻ hội viên"
   },
   {
    "zh": "办会员卡",
    "py": "Bàn huìyuánkǎ",
    "vn": "làm thẻ hội viên"
   },
   {
    "zh": "会员价",
    "py": "Huìyuán jià",
    "vn": "giá hội viên"
   },
   {
    "zh": "成为会员",
    "py": "Chéngwéi huìyuán",
    "vn": "trở thành hội viên"
   }
  ],
  "patterns": [
   {
    "s": "办 + 一张 + 会员卡",
    "m": "Lượng từ 张 cho thẻ"
   },
   {
    "s": "会员 + 卡 / 价 / 活动",
    "m": "Làm định ngữ, không cần 的"
   }
  ],
  "ex_zh": "当时正好有打折活动，我就办了一张会员卡。",
  "ex_py": "Dāngshí zhènghǎo yǒu dǎzhé huódòng, wǒ jiù bàn le yì zhāng huìyuánkǎ.",
  "ex_vn": "Lúc đó đúng dịp có chương trình giảm giá, em liền làm một thẻ hội viên.",
  "exList": [
   {
    "zh": "当时正好有打折活动，我就办了一张会员卡。",
    "py": "Dāngshí zhènghǎo yǒu dǎzhé huódòng, wǒ jiù bàn le yì zhāng huìyuánkǎ.",
    "vn": "Lúc đó đúng dịp có chương trình giảm giá, em liền làm một thẻ hội viên."
   },
   {
    "zh": "楼下新开了一家超市，正在做活动，办会员还送小礼物。",
    "py": "Lóuxià xīn kāi le yì jiā chāoshì, zhèngzài zuò huódòng, bàn huìyuán hái sòng xiǎo lǐwù.",
    "vn": "Dưới nhà mới mở một siêu thị, đang có chương trình, làm hội viên còn được tặng quà nhỏ."
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
    "mean": "họp, tụ lại; biết; sẽ",
    "tip": "Phía trên như mái che 人, phía dưới là 云: mọi người tụ lại dưới một mái → họp. Ôn: 会 (biết – HSK1 Bài 5), 一会儿 (HSK2 Bài 5).",
    "cf": "合 hé (合适 – HSK3 Bài 7) — phía dưới là 一 + 口",
    "w": "开会 / 会议 / 一会儿"
   },
   {
    "c": "员",
    "p": "yuán",
    "type": "会意字 · Chữ hội ý",
    "st": 7,
    "ord": "口 → 贝",
    "rad": "口 (khẩu – miệng)",
    "mean": "người, viên (người làm việc)",
    "tip": "Trên 口, dưới 贝 (tiền): người làm việc nhận tiền công → nhân viên. Luôn đứng sau từ khác: 服务员, 售货员 (HSK1 Bài 10).",
    "cf": "贝 bèi — không có 口 ở trên",
    "w": "服务员 / 售货员"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Làm thẻ hội viên rồi thì mỗi lần mua đồ đều được giảm giá.",
    "answer": "办了会员卡，每次买东西都能打折。",
    "answerPy": "Bàn le huìyuánkǎ, měi cì mǎi dōngxi dōu néng dǎzhé.",
    "note": "Ôn 打折 (Bài 12).",
    "pair": "办会员卡"
   },
   {
    "promptLang": "vi",
    "prompt": "Bạn làm một thẻ hội viên đi, nếu không lần nào cũng phải trả giá gốc.",
    "answer": "你办张会员卡吧，否则每次都得按原价付钱。",
    "answerPy": "Nǐ bàn zhāng huìyuánkǎ ba, fǒuzé měi cì dōu děi àn yuán jià fùqián.",
    "note": "Ôn 否则 (Bài 8 · điểm 2).",
    "pair": "……，否则……"
   }
  ]
 },
 {
  "n": 7,
  "zh": "饼干",
  "py": "bǐnggān",
  "pos": "Danh từ",
  "vn": "bánh quy",
  "hv": "bính can",
  "em": "🍪",
  "lesson": 2,
  "explain": [
   "Bánh nướng khô, giòn, nhỏ (bánh quy); hay dùng để ăn lót dạ."
  ],
  "usage": "一块 / 一包饼干 · 吃饼干 · 带饼干.",
  "collo": [
   "一包饼干",
   "一块饼干",
   "吃饼干",
   "巧克力饼干"
  ],
  "colloFull": [
   {
    "zh": "一包饼干",
    "py": "Yì bāo bǐnggān",
    "vn": "một gói bánh quy"
   },
   {
    "zh": "一块饼干",
    "py": "Yí kuài bǐnggān",
    "vn": "một cái bánh quy"
   },
   {
    "zh": "吃饼干",
    "py": "Chī bǐnggān",
    "vn": "ăn bánh quy"
   },
   {
    "zh": "巧克力饼干",
    "py": "Qiǎokèlì bǐnggān",
    "vn": "bánh quy sô-cô-la"
   }
  ],
  "patterns": [
   {
    "s": "一包 / 一盒 / 一块 + 饼干",
    "m": "Lượng từ đi với 饼干"
   }
  ],
  "ex_zh": "我带了饼干、酸奶和果汁，一会儿吃完了再去。",
  "ex_py": "Wǒ dài le bǐnggān, suānnǎi hé guǒzhī, yíhuìr chīwán le zài qù.",
  "ex_vn": "Em mang bánh quy, sữa chua và nước ép rồi, lát nữa ăn xong rồi đi.",
  "exList": [
   {
    "zh": "我带了饼干、酸奶和果汁，一会儿吃完了再去。",
    "py": "Wǒ dài le bǐnggān, suānnǎi hé guǒzhī, yíhuìr chīwán le zài qù.",
    "vn": "Em mang bánh quy, sữa chua và nước ép rồi, lát nữa ăn xong rồi đi."
   },
   {
    "zh": "孩子饿了，我给他拿了几块饼干。",
    "py": "Háizi è le, wǒ gěi tā ná le jǐ kuài bǐnggān.",
    "vn": "Con đói rồi, tôi lấy cho nó mấy cái bánh quy."
   }
  ],
  "hanzi": [
   {
    "c": "饼",
    "p": "bǐng",
    "type": "左右结构 · Trái-phải (giản thể)",
    "st": 9,
    "ord": "饣 (thực) trái → 并 (tịnh) phải",
    "rad": "饣 (thực – ăn)",
    "mean": "bánh",
    "tip": "Bộ ăn 饣 + 并(biểu âm) → loại thực phẩm dạng BÁNH, kết hợp 干(khô) thành 饼干 = BÁNH QUY (bánh khô).",
    "cf": "并 (bìng – \"cùng\", không có bộ 饣\")",
    "w": "饼干 / 大饼 / 月饼"
   },
   {
    "c": "干",
    "p": "gān",
    "type": "独体字 · Chữ đơn thể",
    "st": 3,
    "ord": "一 → 一 → 丨",
    "rad": "干 (can)",
    "mean": "làm; khô",
    "tip": "Chữ 3 nét. Đọc gàn = LÀM (干活儿, 干杯); đọc gān = KHÔ (干净, 擦干, 饼干). Đa âm quan trọng!",
    "cf": "千 (qiān – nghìn)",
    "w": "干 (gàn) / 干净 (gān) / 饼干 / 干杯"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Loại bánh quy này ngọt quá, không có lợi cho sức khoẻ.",
    "answer": "这种饼干太甜了，对身体没有好处。",
    "answerPy": "Zhè zhǒng bǐnggān tài tián le, duì shēntǐ méiyǒu hǎochù.",
    "note": "Từ mới 好处 (bài này).",
    "pair": "对……没有好处"
   },
   {
    "promptLang": "vi",
    "prompt": "Trước khi đi phòng gym, tôi ăn mấy cái bánh quy, nếu không sẽ bị đói.",
    "answer": "去健身房以前，我先吃几块饼干，否则会饿。",
    "answerPy": "Qù jiànshēnfáng yǐqián, wǒ xiān chī jǐ kuài bǐnggān, fǒuzé huì è.",
    "note": "Ôn 否则 (Bài 8 · điểm 2).",
    "pair": "……，否则……"
   }
  ]
 },
 {
  "n": 8,
  "zh": "酸奶",
  "py": "suānnǎi",
  "pos": "Danh từ",
  "vn": "sữa chua",
  "hv": "toan nãi",
  "em": "🥛",
  "lesson": 2,
  "explain": [
   "Sữa lên men có vị chua nhẹ; 酸 = chua, 奶 = sữa → “sữa chua”, ghép chữ rất dễ nhớ.",
   "⚠ Người Trung nói 喝酸奶 (uống sữa chua), không nói 吃 như tiếng Việt “ăn sữa chua”."
  ],
  "usage": "喝酸奶 · 一杯 / 一瓶 / 一盒酸奶.",
  "collo": [
   "喝酸奶",
   "一杯酸奶",
   "一盒酸奶",
   "水果酸奶"
  ],
  "colloFull": [
   {
    "zh": "喝酸奶",
    "py": "Hē suānnǎi",
    "vn": "ăn (uống) sữa chua"
   },
   {
    "zh": "一杯酸奶",
    "py": "Yì bēi suānnǎi",
    "vn": "một cốc sữa chua"
   },
   {
    "zh": "一盒酸奶",
    "py": "Yì hé suānnǎi",
    "vn": "một hộp sữa chua"
   },
   {
    "zh": "水果酸奶",
    "py": "Shuǐguǒ suānnǎi",
    "vn": "sữa chua trái cây"
   }
  ],
  "patterns": [
   {
    "s": "喝 + 酸奶",
    "m": "Dùng 喝, không dùng 吃 như tiếng Việt"
   }
  ],
  "ex_zh": "我带了饼干、酸奶和果汁，一会儿吃完了再去。",
  "ex_py": "Wǒ dài le bǐnggān, suānnǎi hé guǒzhī, yíhuìr chīwán le zài qù.",
  "ex_vn": "Em mang bánh quy, sữa chua và nước ép rồi, lát nữa ăn xong rồi đi.",
  "exList": [
   {
    "zh": "我带了饼干、酸奶和果汁，一会儿吃完了再去。",
    "py": "Wǒ dài le bǐnggān, suānnǎi hé guǒzhī, yíhuìr chīwán le zài qù.",
    "vn": "Em mang bánh quy, sữa chua và nước ép rồi, lát nữa ăn xong rồi đi."
   },
   {
    "zh": "她早上一般都会喝杯酸奶，觉得这样对身体有好处。",
    "py": "Tā zǎoshang yìbān dōu huì hē bēi suānnǎi, juéde zhèyàng duì shēntǐ yǒu hǎochù.",
    "vn": "Buổi sáng cô ấy thường ăn một hộp sữa chua, thấy như vậy tốt cho sức khoẻ."
   }
  ],
  "hanzi": [
   {
    "c": "酸",
    "p": "suān",
    "type": "左右结构 · Trái-phải",
    "st": 14,
    "ord": "酉 trái → 夋 phải",
    "rad": "酉 (dậu)",
    "mean": "chua",
    "tip": "Bộ 酉 (rượu, lên men) + 夋 → vị lên men → CHUA. 醒 (Bài 15) cũng bộ 酉.",
    "cf": "醒 (xǐng – tỉnh)",
    "w": "酸 / 酸辣 / 酸奶"
   },
   {
    "c": "奶",
    "p": "nǎi",
    "type": "左右结构 · Trái-phải",
    "st": 5,
    "ord": "女 trái → 乃 phải",
    "rad": "女 (nữ)",
    "mean": "bà, sữa",
    "tip": "女(nữ) + 乃(bèn, mới, ý chỉ nuôi dưỡng) → người PHỤ NỮ nuôi dưỡng con cháu = BÀ; mở rộng nghĩa SỮA.",
    "cf": "奴 (nú – \"nô lệ\", có 又 thay vì 乃\")",
    "w": "奶奶 / 牛奶"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Sáng nào tôi cũng ăn một hộp sữa chua.",
    "answer": "我每天早上都喝一盒酸奶。",
    "answerPy": "Wǒ měitiān zǎoshang dōu hē yì hé suānnǎi.",
    "note": "Người Trung dùng 喝 cho 酸奶.",
    "pair": "喝酸奶"
   },
   {
    "promptLang": "vi",
    "prompt": "Sữa chua không những ngon mà còn tốt cho sức khoẻ.",
    "answer": "酸奶不仅好喝，而且对身体有好处。",
    "answerPy": "Suānnǎi bùjǐn hǎohē, érqiě duì shēntǐ yǒu hǎochù.",
    "note": "Ôn 不仅……而且…… (Bài 3 · điểm 2).",
    "pair": "不仅……而且……"
   }
  ]
 },
 {
  "n": 9,
  "zh": "果汁",
  "py": "guǒzhī",
  "pos": "Danh từ",
  "vn": "nước ép trái cây",
  "hv": "quả trấp",
  "em": "🧃",
  "lesson": 2,
  "explain": [
   "Nước ép từ trái cây; 果 = quả, 汁 = nước cốt: 橙汁 (nước cam), 苹果汁 (nước táo)."
  ],
  "usage": "一杯果汁 · 喝果汁 · 新鲜果汁 · 橙汁.",
  "collo": [
   "一杯果汁",
   "喝果汁",
   "新鲜果汁",
   "橙汁"
  ],
  "colloFull": [
   {
    "zh": "一杯果汁",
    "py": "Yì bēi guǒzhī",
    "vn": "một cốc nước ép"
   },
   {
    "zh": "喝果汁",
    "py": "Hē guǒzhī",
    "vn": "uống nước ép"
   },
   {
    "zh": "新鲜果汁",
    "py": "Xīnxiān guǒzhī",
    "vn": "nước ép tươi"
   },
   {
    "zh": "橙汁",
    "py": "Chéng zhī",
    "vn": "nước cam"
   }
  ],
  "patterns": [
   {
    "s": "水果 + 汁 → 果汁 · 橙 + 汁 → 橙汁",
    "m": "汁 = nước cốt, nước ép"
   }
  ],
  "ex_zh": "我带了饼干、酸奶和果汁，一会儿吃完了再去。",
  "ex_py": "Wǒ dài le bǐnggān, suānnǎi hé guǒzhī, yíhuìr chīwán le zài qù.",
  "ex_vn": "Em mang bánh quy, sữa chua và nước ép rồi, lát nữa ăn xong rồi đi.",
  "exList": [
   {
    "zh": "我带了饼干、酸奶和果汁，一会儿吃完了再去。",
    "py": "Wǒ dài le bǐnggān, suānnǎi hé guǒzhī, yíhuìr chīwán le zài qù.",
    "vn": "Em mang bánh quy, sữa chua và nước ép rồi, lát nữa ăn xong rồi đi."
   },
   {
    "zh": "跟可乐相比，新鲜的果汁对身体更有好处。",
    "py": "Gēn kělè xiāngbǐ, xīnxiān de guǒzhī duì shēntǐ gèng yǒu hǎochù.",
    "vn": "So với cô-ca, nước ép tươi tốt cho sức khoẻ hơn."
   }
  ],
  "hanzi": [
   {
    "c": "果",
    "p": "guǒ",
    "type": "独体字 · Chữ đơn",
    "st": 8,
    "ord": "田 trên → 木 dưới",
    "rad": "木 (mộc – cây)",
    "mean": "quả, kết quả",
    "tip": "Chữ tượng hình QUẢ trên cây → mở rộng thành KẾT QUẢ (thành quả cuối cùng), kết hợp 结(kết thành) thành 结果 = KẾT QUẢ.",
    "cf": "东 (dōng – \"phương đông\", không liên quan)",
    "w": "结果 / 效果 / 成果"
   },
   {
    "c": "汁",
    "p": "zhī",
    "type": "左右结构 · Trái-phải",
    "st": 5,
    "ord": "氵 (thủy) trái → 十 phải",
    "rad": "氵 (thủy – nước)",
    "mean": "nước ép, chất lỏng",
    "tip": "Bộ nước 氵 + 十(biểu âm) → CHẤT LỎNG ép ra từ vật gì đó, kết hợp 果(quả) thành 果汁 = NƯỚC TRÁI CÂY.",
    "cf": "汗 (hàn – \"mồ hôi\", bộ 氵 + 干\")",
    "w": "果汁 / 汁水 / 豆汁"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Cho tôi một cốc nước ép, cảm ơn.",
    "answer": "请给我一杯果汁，谢谢。",
    "answerPy": "Qǐng gěi wǒ yì bēi guǒzhī, xièxie.",
    "note": "Lượng từ 杯.",
    "pair": "一杯果汁"
   },
   {
    "promptLang": "vi",
    "prompt": "So với cà phê, buổi sáng tôi thích uống nước ép hơn.",
    "answer": "跟咖啡相比，早上我更喜欢喝果汁。",
    "answerPy": "Gēn kāfēi xiāngbǐ, zǎoshang wǒ gèng xǐhuan hē guǒzhī.",
    "note": "Ôn 跟……相比 (Bài 8 · điểm 3).",
    "pair": "跟……相比"
   }
  ]
 },
 {
  "n": 10,
  "zh": "教练",
  "py": "jiàoliàn",
  "pos": "Danh từ",
  "vn": "huấn luyện viên",
  "hv": "giáo luyện",
  "em": "🧢",
  "lesson": 2,
  "explain": [
   "Người hướng dẫn, huấn luyện thể thao, lái xe… (huấn luyện viên). ⚠ Bẫy Hán Việt: không dịch “giáo luyện”; 教练 = HLV, còn 训练 (bài khoá 4) = huấn luyện (động từ)."
  ],
  "usage": "健身教练 · 专业教练 · 足球教练 · 教练 + 表扬 / 鼓励 + ai.",
  "collo": [
   "健身教练",
   "专业教练",
   "足球教练",
   "教练员"
  ],
  "colloFull": [
   {
    "zh": "健身教练",
    "py": "Jiànshēn jiàoliàn",
    "vn": "huấn luyện viên thể hình"
   },
   {
    "zh": "专业教练",
    "py": "Zhuānyè jiàoliàn",
    "vn": "huấn luyện viên chuyên nghiệp"
   },
   {
    "zh": "足球教练",
    "py": "Zúqiú jiàoliàn",
    "vn": "huấn luyện viên bóng đá"
   },
   {
    "zh": "教练员",
    "py": "Jiàoliànyuán",
    "vn": "huấn luyện viên"
   }
  ],
  "patterns": [
   {
    "s": "(专业的) + 教练 + V",
    "m": "Làm chủ ngữ"
   },
   {
    "s": "教练 + 表扬 / 批评 + ai + ……",
    "m": "Câu kiêm ngữ của bài (điểm 3)"
   }
  ],
  "ex_zh": "教练很热情，也非常专业，动作讲得很清楚。",
  "ex_py": "Jiàoliàn hěn rèqíng, yě fēicháng zhuānyè, dòngzuò jiǎng de hěn qīngchu.",
  "ex_vn": "Huấn luyện viên rất nhiệt tình, cũng rất chuyên nghiệp, giảng động tác rất rõ ràng.",
  "exList": [
   {
    "zh": "教练很热情，也非常专业，动作讲得很清楚。",
    "py": "Jiàoliàn hěn rèqíng, yě fēicháng zhuānyè, dòngzuò jiǎng de hěn qīngchu.",
    "vn": "Huấn luyện viên rất nhiệt tình, cũng rất chuyên nghiệp, giảng động tác rất rõ ràng."
   },
   {
    "zh": "健身房里一般还有专业教练，能帮助大家把动作做准确。",
    "py": "Jiànshēnfáng lǐ yìbān hái yǒu zhuānyè jiàoliàn, néng bāngzhù dàjiā bǎ dòngzuò zuò zhǔnquè.",
    "vn": "Trong phòng gym thường còn có huấn luyện viên chuyên nghiệp, giúp mọi người tập động tác cho chuẩn."
   }
  ],
  "hanzi": [
   {
    "c": "教",
    "p": "jiào",
    "type": "左右结构 · Trái-phải",
    "st": 11,
    "ord": "孝 trái → 攵 phải",
    "rad": "攵 (phốc – gõ nhẹ)",
    "mean": "dạy dỗ",
    "tip": "孝(hiếu thảo, học theo bậc trên) + 攵(tác động, chỉ dạy) → truyền đạt điều hay lẽ phải cho con cháu = DẠY DỖ.",
    "cf": "孝 (xiào – \"hiếu thảo\", không có bộ 攵\")",
    "w": "教 / 教书 / 教学生"
   },
   {
    "c": "练",
    "p": "liàn",
    "type": "形声字 · Chữ hình thanh",
    "st": 8,
    "ord": "纟 → phần bên phải (giống 东 nhưng nét cuối khác)",
    "rad": "纟 (mịch – sợi tơ)",
    "mean": "luyện, tập",
    "tip": "纟 (sợi tơ) + phần chỉ âm: ngày xưa luộc tơ cho trắng mềm phải làm đi làm lại → luyện tập. 练 và 炼 (锻炼 – HSK3 Bài 5) cùng đọc liàn.",
    "cf": "炼 liàn (锻炼) — bên trái là 火",
    "w": "练 / 练习 / 练球"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Huấn luyện viên khen tôi làm động tác rất chuẩn.",
    "answer": "教练表扬我动作做得很准确。",
    "answerPy": "Jiàoliàn biǎoyáng wǒ dòngzuò zuò de hěn zhǔnquè.",
    "note": "Dùng 表扬 + O1 + V + O2 (Bài 17 · điểm 3).",
    "pair": "表扬 + ai + ……"
   },
   {
    "promptLang": "vi",
    "prompt": "Vị huấn luyện viên này không những chuyên nghiệp mà còn rất nhiệt tình.",
    "answer": "这位教练不光很专业，还很热情。",
    "answerPy": "Zhè wèi jiàoliàn bùguāng hěn zhuānyè, hái hěn rèqíng.",
    "note": "Ôn 不光……还…… (Bài 3 · điểm 2).",
    "pair": "不光……还……"
   }
  ]
 },
 {
  "n": 11,
  "zh": "动作",
  "py": "dòngzuò",
  "pos": "Danh từ",
  "vn": "động tác",
  "hv": "động tác",
  "em": "🤸",
  "lesson": 2,
  "explain": [
   "Cử động của cơ thể (tay chân…); các động tác khi tập thể thao, nhảy múa. Hán Việt “động tác” — nghĩa giống tiếng Việt."
  ],
  "usage": "动作标准 · 做动作 · 讲动作 · 把动作做准确.",
  "collo": [
   "动作标准",
   "做动作",
   "动作准确",
   "简单的动作"
  ],
  "colloFull": [
   {
    "zh": "动作标准",
    "py": "Dòngzuò biāozhǔn",
    "vn": "động tác chuẩn"
   },
   {
    "zh": "做动作",
    "py": "Zuò dòngzuò",
    "vn": "làm động tác"
   },
   {
    "zh": "动作准确",
    "py": "Dòngzuò zhǔnquè",
    "vn": "động tác chính xác"
   },
   {
    "zh": "简单的动作",
    "py": "Jiǎndān de dòngzuò",
    "vn": "động tác đơn giản"
   }
  ],
  "patterns": [
   {
    "s": "把 + 动作 + 做 + 准确 / 标准",
    "m": "Câu 把 + bổ ngữ kết quả"
   },
   {
    "s": "动作 + 讲得 + 很清楚",
    "m": "Bổ ngữ trạng thái"
   }
  ],
  "ex_zh": "我现在都是在家看着视频练，动作不一定标准。",
  "ex_py": "Wǒ xiànzài dōu shì zài jiā kànzhe shìpín liàn, dòngzuò bùyídìng biāozhǔn.",
  "ex_vn": "Bây giờ chị toàn ở nhà xem video tập theo, động tác chưa chắc đã chuẩn.",
  "exList": [
   {
    "zh": "我现在都是在家看着视频练，动作不一定标准。",
    "py": "Wǒ xiànzài dōu shì zài jiā kànzhe shìpín liàn, dòngzuò bùyídìng biāozhǔn.",
    "vn": "Bây giờ chị toàn ở nhà xem video tập theo, động tác chưa chắc đã chuẩn."
   },
   {
    "zh": "教练先教了他一些最简单的动作。",
    "py": "Jiàoliàn xiān jiào le tā yìxiē zuì jiǎndān de dòngzuò.",
    "vn": "Huấn luyện viên dạy anh ấy vài động tác đơn giản nhất trước."
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
   },
   {
    "c": "作",
    "p": "zuò",
    "type": "左右结构 · Trái-phải",
    "st": 7,
    "ord": "亻 trái → 乍 phải",
    "rad": "亻 (nhân)",
    "mean": "làm, sáng tác",
    "tip": "Người 亻 + 乍 → LÀM, SÁNG TÁC. 作者 = người sáng tác; 作用 (Bài 12); 工作; 作业.",
    "cf": "做 (zuò – làm cụ thể)",
    "w": "作者 / 作用 / 工作 / 作业"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Khi tập phải làm động tác cho chuẩn, nếu không dễ bị thương.",
    "answer": "练习的时候要把动作做标准，否则容易受伤。",
    "answerPy": "Liànxí de shíhou yào bǎ dòngzuò zuò biāozhǔn, fǒuzé róngyì shòushāng.",
    "note": "Ôn 否则 (Bài 8 · điểm 2) + câu 把.",
    "pair": "把动作做标准"
   },
   {
    "promptLang": "vi",
    "prompt": "Những động tác này tôi đã học rồi, thế mà lại quên mất.",
    "answer": "这些动作我学过，却又忘了。",
    "answerPy": "Zhèxiē dòngzuò wǒ xué guò, què yòu wàng le.",
    "note": "Ôn 却 (Bài 16 · điểm 4).",
    "pair": "……，却……"
   }
  ]
 },
 {
  "n": 12,
  "zh": "科学",
  "py": "kēxué",
  "pos": "Tính từ / Danh từ",
  "vn": "khoa học, hợp lý; (môn) khoa học",
  "hv": "khoa học",
  "em": "🔬",
  "lesson": 2,
  "explain": [
   "Tính từ (nghĩa trong bài): đúng quy luật, hợp lý, có phương pháp — 锻炼要科学 = tập luyện phải khoa học.",
   "Danh từ: khoa học (科学家, 科学的发展)."
  ],
  "usage": "锻炼要科学 · 方法科学 · 不科学 · 科学的发展.",
  "collo": [
   "方法科学",
   "不科学",
   "科学的发展",
   "科学家"
  ],
  "colloFull": [
   {
    "zh": "方法科学",
    "py": "Fāngfǎ kēxué",
    "vn": "phương pháp khoa học"
   },
   {
    "zh": "不科学",
    "py": "Bù kēxué",
    "vn": "không khoa học"
   },
   {
    "zh": "科学的发展",
    "py": "Kēxué de fāzhǎn",
    "vn": "sự phát triển của khoa học"
   },
   {
    "zh": "科学家",
    "py": "Kēxuéjiā",
    "vn": "nhà khoa học"
   }
  ],
  "patterns": [
   {
    "s": "……要科学 / 很科学",
    "m": "Tính từ làm vị ngữ"
   },
   {
    "s": "科学 + 的 + 方法",
    "m": "Làm định ngữ"
   }
  ],
  "ex_zh": "好啊，那您也来吧。锻炼要科学，否则容易受伤。",
  "ex_py": "Hǎo a, nà nín yě lái ba. Duànliàn yào kēxué, fǒuzé róngyì shòushāng.",
  "ex_vn": "Hay quá, vậy chị cũng đến đi. Tập luyện phải khoa học, nếu không dễ bị thương.",
  "exList": [
   {
    "zh": "好啊，那您也来吧。锻炼要科学，否则容易受伤。",
    "py": "Hǎo a, nà nín yě lái ba. Duànliàn yào kēxué, fǒuzé róngyì shòushāng.",
    "vn": "Hay quá, vậy chị cũng đến đi. Tập luyện phải khoa học, nếu không dễ bị thương."
   },
   {
    "zh": "随着科学的发展，人们的生活方式发生了很大的变化。",
    "py": "Suízhe kēxué de fāzhǎn, rénmen de shēnghuó fāngshì fāshēng le hěn dà de biànhuà.",
    "vn": "Cùng với sự phát triển của khoa học, cách sống của con người đã thay đổi rất lớn."
   }
  ],
  "hanzi": [
   {
    "c": "科",
    "p": "kē",
    "type": "左右结构 · Trái-phải",
    "st": 9,
    "ord": "禾 (hòa) trái → 斗 (đấu) phải",
    "rad": "禾 (hòa – lúa)",
    "mean": "môn học, khoa",
    "tip": "Bộ lúa 禾 (phân loại nông sản) + 斗(đong đo) → PHÂN LOẠI có hệ thống, mở rộng thành MÔN HỌC, kết hợp 学(học) thành 科学 = KHOA HỌC.",
    "cf": "料 (liào – \"nguyên liệu\", bộ 米\")",
    "w": "科学 / 科学家 / 学科"
   },
   {
    "c": "学",
    "p": "xué",
    "type": "上下结构 · Trên-dưới (giản thể)",
    "st": 8,
    "ord": "⺍ → 冖 → 子",
    "rad": "子 (tử – con)",
    "mean": "học",
    "tip": "Đứa trẻ 子 ngồi dưới mái nhà 冖 để tiếp thu kiến thức → HỌC.",
    "cf": "字 (zì – \"chữ\", cũng có 子\")",
    "w": "学生 / 学习"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Chỉ cần phương pháp khoa học thì nhất định sẽ có hiệu quả.",
    "answer": "只要方法科学，就一定会有效果。",
    "answerPy": "Zhǐyào fāngfǎ kēxué, jiù yídìng huì yǒu xiàoguǒ.",
    "note": "Ôn 只要……就…… (HSK 3); câu trong bài tập SGK.",
    "pair": "只要……就……"
   },
   {
    "promptLang": "vi",
    "prompt": "Không ăn tối đã đi tập, cách làm này không khoa học.",
    "answer": "不吃晚饭就去健身，这种做法不科学。",
    "answerPy": "Bù chī wǎnfàn jiù qù jiànshēn, zhè zhǒng zuòfǎ bù kēxué.",
    "note": "Ôn từ 做法 (Bài 11).",
    "pair": "……不科学"
   }
  ]
 },
 {
  "n": 13,
  "zh": "受伤",
  "py": "shòushāng",
  "pos": "Động từ",
  "vn": "bị thương",
  "hv": "thụ thương",
  "em": "🤕",
  "lesson": 2,
  "explain": [
   "Bị thương (cơ thể bị tổn thương); là động từ li hợp: 受了伤, 受过伤. Bộ phận bị thương đặt trước: 腿受伤了."
  ],
  "usage": "容易受伤 · 受了伤 · 腿受伤了 · 受伤以后.",
  "collo": [
   "容易受伤",
   "受了伤",
   "腿受伤了",
   "受伤的队员"
  ],
  "colloFull": [
   {
    "zh": "容易受伤",
    "py": "Róngyì shòushāng",
    "vn": "dễ bị thương"
   },
   {
    "zh": "受了伤",
    "py": "Shòu le shāng",
    "vn": "bị thương rồi"
   },
   {
    "zh": "腿受伤了",
    "py": "Tuǐ shòushāng le",
    "vn": "chân bị thương"
   },
   {
    "zh": "受伤的队员",
    "py": "Shòushāng de duìyuán",
    "vn": "đội viên bị thương"
   }
  ],
  "patterns": [
   {
    "s": "Bộ phận cơ thể + 受伤了",
    "m": "Chân / tay bị thương"
   },
   {
    "s": "受了 / 过 + 伤",
    "m": "Li hợp: chèn 了 / 过 vào giữa"
   }
  ],
  "ex_zh": "好啊，那您也来吧。锻炼要科学，否则容易受伤。",
  "ex_py": "Hǎo a, nà nín yě lái ba. Duànliàn yào kēxué, fǒuzé róngyì shòushāng.",
  "ex_vn": "Hay quá, vậy chị cũng đến đi. Tập luyện phải khoa học, nếu không dễ bị thương.",
  "exList": [
   {
    "zh": "好啊，那您也来吧。锻炼要科学，否则容易受伤。",
    "py": "Hǎo a, nà nín yě lái ba. Duànliàn yào kēxué, fǒuzé róngyì shòushāng.",
    "vn": "Hay quá, vậy chị cũng đến đi. Tập luyện phải khoa học, nếu không dễ bị thương."
   },
   {
    "zh": "受伤以后，他连走路都困难，更不能去健身房锻炼了。",
    "py": "Shòushāng yǐhòu, tā lián zǒulù dōu kùnnan, gèng bù néng qù jiànshēnfáng duànliàn le.",
    "vn": "Sau khi bị thương, anh ấy đến đi bộ còn khó khăn, càng không thể đến phòng gym tập luyện."
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
   },
   {
    "c": "伤",
    "p": "shāng",
    "type": "左右结构 · Trái-phải (giản thể)",
    "st": 6,
    "ord": "亻 (nhân) trái → 伤(biến thể) phải",
    "rad": "亻 (nhân – người)",
    "mean": "tổn thương",
    "tip": "Bộ người 亻 (chỉ con người) → chỉ sự TỔN THƯƠNG của người, kết hợp 心(lòng, tâm) thành 伤心 = TỔN THƯƠNG TRONG LÒNG, ĐAU LÒNG.",
    "cf": "场 (chǎng – \"sân bãi\", bộ 土\")",
    "w": "伤心 / 受伤 / 伤害"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Hôm qua anh ấy chơi bóng bị thương ở chân.",
    "answer": "昨天他打球的时候腿受伤了。",
    "answerPy": "Zuótiān tā dǎqiú de shíhou tuǐ shòushāng le.",
    "note": "Bộ phận + 受伤.",
    "pair": "腿受伤了"
   },
   {
    "promptLang": "vi",
    "prompt": "Cẩn thận một chút, nói không chừng sẽ bị thương đấy.",
    "answer": "小心点儿，说不定会受伤的。",
    "answerPy": "Xiǎoxīn diǎnr, shuōbudìng huì shòushāng de.",
    "note": "Ôn 说不定 (Bài 16 · điểm 3).",
    "pair": "说不定……"
   }
  ]
 },
 {
  "n": 14,
  "zh": "操场",
  "py": "cāochǎng",
  "pos": "Danh từ",
  "vn": "sân tập, sân thể thao (của trường)",
  "hv": "thao trường",
  "em": "🏟️",
  "lesson": 3,
  "explain": [
   "Sân rộng (thường trong trường học) để tập thể dục, chạy bộ, chơi bóng. ⚠ Không hiểu theo “thao trường” (bãi tập quân sự) trong tiếng Việt."
  ],
  "usage": "在操场跑步 · 学校的操场 · 操场上.",
  "collo": [
   "在操场跑步",
   "学校操场",
   "操场上",
   "大操场"
  ],
  "colloFull": [
   {
    "zh": "在操场跑步",
    "py": "Zài cāochǎng pǎobù",
    "vn": "chạy bộ ở sân tập"
   },
   {
    "zh": "学校操场",
    "py": "Xuéxiào cāochǎng",
    "vn": "sân trường"
   },
   {
    "zh": "操场上",
    "py": "Cāochǎng shàng",
    "vn": "trên sân"
   },
   {
    "zh": "大操场",
    "py": "Dà cāochǎng",
    "vn": "sân tập lớn"
   }
  ],
  "patterns": [
   {
    "s": "在 + 操场(上) + V",
    "m": "Nơi chốn đứng trước động từ"
   }
  ],
  "ex_zh": "有人爱在操场跑步，有人喜欢通过打球锻炼身体。",
  "ex_py": "Yǒurén ài zài cāochǎng pǎobù, yǒurén xǐhuan tōngguò dǎqiú duànliàn shēntǐ.",
  "ex_vn": "Có người thích chạy bộ ở sân tập, có người thích rèn luyện thân thể bằng cách chơi bóng.",
  "exList": [
   {
    "zh": "有人爱在操场跑步，有人喜欢通过打球锻炼身体。",
    "py": "Yǒurén ài zài cāochǎng pǎobù, yǒurén xǐhuan tōngguò dǎqiú duànliàn shēntǐ.",
    "vn": "Có người thích chạy bộ ở sân tập, có người thích rèn luyện thân thể bằng cách chơi bóng."
   },
   {
    "zh": "放学以后，很多学生在操场上踢足球。",
    "py": "Fàngxué yǐhòu, hěn duō xuésheng zài cāochǎng shàng tī zúqiú.",
    "vn": "Tan học, nhiều học sinh đá bóng trên sân."
   }
  ],
  "hanzi": [
   {
    "c": "操",
    "p": "cāo",
    "type": "形声字 · Chữ hình thanh",
    "st": 16,
    "ord": "扌 → 品 (ba chữ 口) → 木",
    "rad": "扌 (thủ – tay)",
    "mean": "cầm, nắm; luyện tập, thể dục",
    "tip": "Tay (扌) + 喿 (zào, gợi âm cāo — trên ba cái miệng 口, dưới cây 木): tay nắm chắc mà luyện tập → 操场 (sân tập), 体操 (thể dục dụng cụ).",
    "cf": "澡 zǎo (tắm) — bên trái là 氵; 燥 zào (khô) — bên trái là 火",
    "w": "操场 / 体操 / 做操"
   },
   {
    "c": "场",
    "p": "chǎng",
    "type": "左右结构 · Trái-phải",
    "st": 6,
    "ord": "土 trái → 𠃓 phải",
    "rad": "土 (thổ)",
    "mean": "sân; trận",
    "tip": "Đất 土 + 𠃓 → khoảng đất rộng → SÂN (广场, 停车场); lượng từ cho sự kiện diễn ra trên sân → TRẬN. 扬 (Bài 15) cùng bộ phải.",
    "cf": "扬 (yáng – 表扬)",
    "w": "一场 / 广场 / 停车场 / 场所"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Tối nào bố tôi cũng chạy mấy vòng ở sân trường.",
    "answer": "我爸爸每天晚上都在学校的操场跑几圈。",
    "answerPy": "Wǒ bàba měitiān wǎnshang dōu zài xuéxiào de cāochǎng pǎo jǐ quān.",
    "note": "圈 = vòng; nơi chốn đứng trước động từ.",
    "pair": "在操场 + V"
   },
   {
    "promptLang": "vi",
    "prompt": "Cho dù trời mưa, trên sân vẫn có người chạy bộ.",
    "answer": "就是下雨，操场上也有人跑步。",
    "answerPy": "Jiùshì xiàyǔ, cāochǎng shàng yě yǒurén pǎobù.",
    "note": "Ôn 就是……也…… (Bài 11 · điểm 2).",
    "pair": "就是……也……"
   }
  ]
 },
 {
  "n": 15,
  "zh": "其中",
  "py": "qízhōng",
  "pos": "Danh từ",
  "vn": "trong đó, trong số đó",
  "hv": "kỳ trung",
  "em": "🎯",
  "lesson": 3,
  "explain": [
   "Chỉ “trong số đó” — bên trong phạm vi vừa nói đến ở câu trước; thường đứng đầu vế sau hoặc trong cụm 其中之一 (một trong số đó)."
  ],
  "usage": "其中之一 · 其中有…… · ……，其中…….",
  "collo": [
   "其中之一",
   "其中一个",
   "其中有",
   "其中的原因"
  ],
  "colloFull": [
   {
    "zh": "其中之一",
    "py": "Qízhōng zhīyī",
    "vn": "một trong số đó"
   },
   {
    "zh": "其中一个",
    "py": "Qízhōng yí gè",
    "vn": "một cái trong số đó"
   },
   {
    "zh": "其中有",
    "py": "Qízhōng yǒu",
    "vn": "trong đó có"
   },
   {
    "zh": "其中的原因",
    "py": "Qízhōng de yuányīn",
    "vn": "nguyên nhân trong đó"
   }
  ],
  "patterns": [
   {
    "s": "A + 是 + 其中之一",
    "m": "A là một trong số đó"
   },
   {
    "s": "……，其中 + ……",
    "m": "Vế sau nói về một phần của nhóm vừa kể"
   }
  ],
  "ex_zh": "还有一部分人愿意去健身房健身，杨同乐就是其中之一。",
  "ex_py": "Hái yǒu yí bùfen rén yuànyì qù jiànshēnfáng jiànshēn, Yáng Tónglè jiùshì qízhōng zhīyī.",
  "ex_vn": "Còn một bộ phận người thích đến phòng gym tập luyện, Dương Đồng Lạc chính là một trong số đó.",
  "exList": [
   {
    "zh": "还有一部分人愿意去健身房健身，杨同乐就是其中之一。",
    "py": "Hái yǒu yí bùfen rén yuànyì qù jiànshēnfáng jiànshēn, Yáng Tónglè jiùshì qízhōng zhīyī.",
    "vn": "Còn một bộ phận người thích đến phòng gym tập luyện, Dương Đồng Lạc chính là một trong số đó."
   },
   {
    "zh": "挺多的，其中还有几个水平很高的。",
    "py": "Tǐng duō de, qízhōng hái yǒu jǐ gè shuǐpíng hěn gāo de.",
    "vn": "Khá nhiều, trong đó còn có mấy người trình độ rất cao."
   }
  ],
  "hanzi": [
   {
    "c": "其",
    "p": "qí",
    "type": "独体字 · Chữ đơn",
    "st": 8,
    "ord": "nét liền",
    "rad": "八 (bát, biến thể)",
    "mean": "cái đó, của nó",
    "tip": "其 là đại từ chỉ định (cái đó, của nó), kết hợp 中(giữa, trong) thành 其中 = TRONG ĐÓ, TRONG SỐ ĐÓ.",
    "cf": "期 (qī – \"kỳ hạn\", bộ 月\")",
    "w": "其中 / 其他 / 其次"
   },
   {
    "c": "中",
    "p": "zhōng",
    "type": "指事字 · Chữ chỉ sự",
    "st": 4,
    "ord": "丨 → 口 → 丨",
    "rad": "丨 (cổn)",
    "mean": "giữa, trung",
    "tip": "小学 → 中学 (初中/高中) → 大学.",
    "cf": "大学 (dàxué)",
    "w": "高中 / 中学 / 中文"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Lớp chúng tôi có hai mươi người, trong đó tám người là nam.",
    "answer": "我们班有二十个人，其中八个是男生。",
    "answerPy": "Wǒmen bān yǒu èrshí gè rén, qízhōng bā gè shì nánshēng.",
    "note": "其中 đứng đầu vế sau.",
    "pair": "……，其中……"
   },
   {
    "promptLang": "vi",
    "prompt": "Có rất nhiều môn thể thao tôi thích, bóng bàn là một trong số đó.",
    "answer": "我喜欢的运动很多，乒乓球就是其中之一。",
    "answerPy": "Wǒ xǐhuan de yùndòng hěn duō, pīngpāngqiú jiùshì qízhōng zhīyī.",
    "note": "其中之一.",
    "pair": "……是其中之一"
   }
  ]
 },
 {
  "n": 16,
  "zh": "之",
  "py": "zhī",
  "pos": "Trợ từ",
  "vn": "(trợ từ văn viết) của, giống 的",
  "hv": "chi",
  "em": "🔗",
  "lesson": 3,
  "explain": [
   "Trợ từ mang màu văn viết, nối định ngữ với trung tâm ngữ, nghĩa như 的: 梦之队 = 梦的队 (đội trong mơ).",
   "Gặp nhiều trong cụm cố định: ……之一 (một trong …), 其中之一, 三分之一 (một phần ba), 之前 / 之后."
  ],
  "usage": "……之一 · 其中之一 · 梦之队 · ×分之×.",
  "collo": [
   "其中之一",
   "……之一",
   "梦之队",
   "三分之一"
  ],
  "colloFull": [
   {
    "zh": "其中之一",
    "py": "Qízhōng zhīyī",
    "vn": "một trong số đó"
   },
   {
    "zh": "……之一",
    "py": "…… Zhīyī",
    "vn": "một trong …"
   },
   {
    "zh": "梦之队",
    "py": "Mèng zhī duì",
    "vn": "đội trong mơ"
   },
   {
    "zh": "三分之一",
    "py": "Sānfēnzhī yī",
    "vn": "một phần ba"
   }
  ],
  "patterns": [
   {
    "s": "最 + Adj + 的 + N + 之一",
    "m": "Một trong những … nhất"
   },
   {
    "s": "A之B ≈ A的B",
    "m": "Văn viết, cụm cố định"
   }
  ],
  "ex_zh": "还有一部分人愿意去健身房健身，杨同乐就是其中之一。",
  "ex_py": "Hái yǒu yí bùfen rén yuànyì qù jiànshēnfáng jiànshēn, Yáng Tónglè jiùshì qízhōng zhīyī.",
  "ex_vn": "Còn một bộ phận người thích đến phòng gym tập luyện, Dương Đồng Lạc chính là một trong số đó.",
  "exList": [
   {
    "zh": "还有一部分人愿意去健身房健身，杨同乐就是其中之一。",
    "py": "Hái yǒu yí bùfen rén yuànyì qù jiànshēnfáng jiànshēn, Yáng Tónglè jiùshì qízhōng zhīyī.",
    "vn": "Còn một bộ phận người thích đến phòng gym tập luyện, Dương Đồng Lạc chính là một trong số đó."
   },
   {
    "zh": "可以说，乒乓球是中国人生活中最常见的运动之一。",
    "py": "Kěyǐ shuō, pīngpāngqiú shì Zhōngguórén shēnghuó zhōng zuì chángjiàn de yùndòng zhīyī.",
    "vn": "Có thể nói, bóng bàn là một trong những môn thể thao phổ biến nhất trong đời sống người Trung Quốc."
   }
  ],
  "hanzi": [
   {
    "c": "之",
    "p": "zhī",
    "type": "独体字 · Chữ đơn",
    "st": 3,
    "ord": "丶 → 𠃋 → 乀",
    "rad": "丶 (chủ)",
    "mean": "của, đi",
    "tip": "Chữ tượng hình bàn chân bước đi khỏi vạch (nghĩa gốc là ĐI), sau mượn làm trợ từ CỦA trong văn viết (之后 = sau đó).",
    "cf": "乏 (fá – \"thiếu\", tự dạng gần giống)",
    "w": "之后 / 之一 / 之间"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Hà Nội là một trong những thành phố tôi thích nhất.",
    "answer": "河内是我最喜欢的城市之一。",
    "answerPy": "Hénèi shì wǒ zuì xǐhuan de chéngshì zhīyī.",
    "note": "……之一.",
    "pair": "最……的……之一"
   },
   {
    "promptLang": "vi",
    "prompt": "Một phần ba học sinh lớp tôi thích chơi bóng bàn.",
    "answer": "我们班三分之一的学生喜欢打乒乓球。",
    "answerPy": "Wǒmen bān sānfēnzhī yì de xuésheng xǐhuan dǎ pīngpāngqiú.",
    "note": "Phân số: 三分之一.",
    "pair": "×分之×"
   }
  ]
 },
 {
  "n": 17,
  "zh": "火",
  "py": "huǒ",
  "pos": "Tính từ / Danh từ",
  "vn": "hot, đắt khách, thịnh hành; lửa",
  "hv": "hỏa",
  "em": "🔥",
  "lesson": 3,
  "explain": [
   "Tính từ (khẩu ngữ, nghĩa trong bài): rất hút khách, rất thịnh hành, “hot” — 火起来 = trở nên hot.",
   "Danh từ: lửa (火很大 = lửa rất to)."
  ],
  "usage": "很火 · 火起来 · 特别火 · 生意很火.",
  "collo": [
   "火起来",
   "特别火",
   "生意很火",
   "火很大"
  ],
  "colloFull": [
   {
    "zh": "火起来",
    "py": "Huǒ qǐlai",
    "vn": "trở nên hot"
   },
   {
    "zh": "特别火",
    "py": "Tèbié huǒ",
    "vn": "cực kỳ hot"
   },
   {
    "zh": "生意很火",
    "py": "Shēngyi hěn huǒ",
    "vn": "làm ăn rất phát đạt"
   },
   {
    "zh": "火很大",
    "py": "Huǒ hěn dà",
    "vn": "lửa rất to"
   }
  ],
  "patterns": [
   {
    "s": "N + 火起来了",
    "m": "起来 chỉ bắt đầu và phát triển (bổ ngữ xu hướng mở rộng)"
   },
   {
    "s": "……很火 / 特别火",
    "m": "Khẩu ngữ: rất hot"
   }
  ],
  "ex_zh": "杨同乐认为健身房火起来是因为它有很多好处。",
  "ex_py": "Yáng Tónglè rènwéi jiànshēnfáng huǒ qǐlai shì yīnwèi tā yǒu hěn duō hǎochù.",
  "ex_vn": "Dương Đồng Lạc cho rằng phòng gym trở nên hot là vì nó có nhiều lợi ích.",
  "exList": [
   {
    "zh": "杨同乐认为健身房火起来是因为它有很多好处。",
    "py": "Yáng Tónglè rènwéi jiànshēnfáng huǒ qǐlai shì yīnwèi tā yǒu hěn duō hǎochù.",
    "vn": "Dương Đồng Lạc cho rằng phòng gym trở nên hot là vì nó có nhiều lợi ích."
   },
   {
    "zh": "这家饭馆最近特别火，每天都有很多人排队。",
    "py": "Zhè jiā fànguǎn zuìjìn tèbié huǒ, měitiān dōu yǒu hěn duō rén páiduì.",
    "vn": "Quán ăn này dạo gần đây rất hot, ngày nào cũng có nhiều người xếp hàng."
   }
  ],
  "hanzi": [
   {
    "c": "火",
    "p": "huǒ",
    "type": "独体字 · Chữ đơn thể",
    "st": 4,
    "ord": "丶 → 丿 → 人",
    "rad": "火 (hỏa)",
    "mean": "lửa",
    "tip": "Tượng hình ngọn LỬA. Nghĩa mở rộng: nóng, hot, bán chạy. 火车 (tàu hỏa), 着火 (cháy), 发火 (nổi giận).",
    "cf": "灭 (miè – tắt)",
    "w": "火 / 火车 / 着火 / 很火"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Bóng bàn ở Trung Quốc vẫn luôn rất được ưa chuộng.",
    "answer": "乒乓球在中国一直很火。",
    "answerPy": "Pīngpāngqiú zài Zhōngguó yìzhí hěn huǒ.",
    "note": "火 làm vị ngữ.",
    "pair": "……很火"
   },
   {
    "promptLang": "vi",
    "prompt": "Phòng gym trở nên hot không phải vì rẻ, mà vì có nhiều lợi ích.",
    "answer": "健身房火起来不是因为便宜，而是因为有很多好处。",
    "answerPy": "Jiànshēnfáng huǒ qǐlai bú shì yīnwèi piányi, érshì yīnwèi yǒu hěn duō hǎochù.",
    "note": "Ôn 不是……而是…… (Bài 11 · điểm 3).",
    "pair": "不是……而是……"
   }
  ]
 },
 {
  "n": 18,
  "zh": "好处",
  "py": "hǎochù",
  "pos": "Danh từ",
  "vn": "lợi ích, điều tốt",
  "hv": "hảo xứ",
  "em": "👍",
  "lesson": 3,
  "explain": [
   "Điều có lợi, mặt tốt. Trái nghĩa: 坏处 (tác hại). Sách phiên âm hǎochù."
  ],
  "usage": "有很多好处 · 对……有好处 · ……的好处.",
  "collo": [
   "有好处",
   "对身体有好处",
   "很多好处",
   "好处和坏处"
  ],
  "colloFull": [
   {
    "zh": "有好处",
    "py": "Yǒu hǎochù",
    "vn": "có lợi"
   },
   {
    "zh": "对身体有好处",
    "py": "Duì shēntǐ yǒu hǎochù",
    "vn": "có lợi cho sức khoẻ"
   },
   {
    "zh": "很多好处",
    "py": "Hěn duō hǎochù",
    "vn": "nhiều lợi ích"
   },
   {
    "zh": "好处和坏处",
    "py": "Hǎochù hé huàichù",
    "vn": "lợi ích và tác hại"
   }
  ],
  "patterns": [
   {
    "s": "对 + N + 有好处",
    "m": "Có lợi cho …"
   },
   {
    "s": "……的好处是……",
    "m": "Lợi ích của … là …"
   }
  ],
  "ex_zh": "杨同乐认为健身房火起来是因为它有很多好处——环境好、设备全，可以锻炼全身。",
  "ex_py": "Yáng Tónglè rènwéi jiànshēnfáng huǒ qǐlai shì yīnwèi tā yǒu hěn duō hǎochù — huánjìng hǎo, shèbèi quán, kěyǐ duànliàn quánshēn.",
  "ex_vn": "Dương Đồng Lạc cho rằng phòng gym trở nên hot là vì nó có nhiều lợi ích — môi trường tốt, thiết bị đầy đủ, có thể rèn luyện toàn thân.",
  "exList": [
   {
    "zh": "杨同乐认为健身房火起来是因为它有很多好处——环境好、设备全，可以锻炼全身。",
    "py": "Yáng Tónglè rènwéi jiànshēnfáng huǒ qǐlai shì yīnwèi tā yǒu hěn duō hǎochù — huánjìng hǎo, shèbèi quán, kěyǐ duànliàn quánshēn.",
    "vn": "Dương Đồng Lạc cho rằng phòng gym trở nên hot là vì nó có nhiều lợi ích — môi trường tốt, thiết bị đầy đủ, có thể rèn luyện toàn thân."
   },
   {
    "zh": "她早上一般都会喝杯酸奶，觉得这样对身体有好处。",
    "py": "Tā zǎoshang yìbān dōu huì hē bēi suānnǎi, juéde zhèyàng duì shēntǐ yǒu hǎochù.",
    "vn": "Buổi sáng cô ấy thường ăn một hộp sữa chua, thấy như vậy tốt cho sức khoẻ."
   }
  ],
  "hanzi": [
   {
    "c": "好",
    "p": "hǎo",
    "type": "左右结构 · Trái-phải",
    "st": 6,
    "ord": "女 (nữ) trái → 子 (tử) phải",
    "rad": "女 (nữ – phụ nữ)",
    "mean": "tốt, vừa",
    "tip": "Bộ 女(mẹ) + 子(con) → hình ảnh MẸ CON quây quần, biểu trưng cho điều TỐT ĐẸP; kết hợp 正 (ngay, đúng) thành 正好 = ĐÚNG VỪA VẶN.",
    "cf": "子 đứng một mình nghĩa là \"con\", kết hợp 女 mới thành 好",
    "w": "正好 / 好像 / 只好"
   },
   {
    "c": "处",
    "p": "chù",
    "type": "独体字 · Chữ đơn (giản thể)",
    "st": 5,
    "ord": "夂 trên → 卜 dưới",
    "rad": "夊 (biến thể)",
    "mean": "chỗ, nơi",
    "tip": "Chữ mang nghĩa NƠI CHỐN, mở rộng thành PHƯƠNG DIỆN/ĐIỂM (tốt), kết hợp 好(tốt) thành 好处 = LỢI ÍCH, ĐIỂM TỐT.",
    "cf": "处 khi đọc \"chǔ\" nghĩa là XỬ LÝ (处理)",
    "w": "好处 / 到处 / 处理"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Đi dạo sau bữa ăn có lợi cho sức khoẻ.",
    "answer": "饭后散步对身体有好处。",
    "answerPy": "Fàn hòu sànbù duì shēntǐ yǒu hǎochù.",
    "note": "对……有好处; ôn 散步 (Bài 11).",
    "pair": "对……有好处"
   },
   {
    "promptLang": "vi",
    "prompt": "Tập thể thao một mặt có lợi cho sức khoẻ, mặt khác còn làm tâm trạng tốt hơn.",
    "answer": "运动一方面对身体有好处，另一方面还能让心情变好。",
    "answerPy": "Yùndòng yìfāngmiàn duì shēntǐ yǒu hǎochù, lìngyìfāngmiàn hái néng ràng xīnqíng biànhǎo.",
    "note": "Ôn 一方面……另一方面…… (Bài 1 · điểm 4).",
    "pair": "一方面……另一方面……"
   }
  ]
 },
 {
  "n": 19,
  "zh": "设备",
  "py": "shèbèi",
  "pos": "Danh từ",
  "vn": "thiết bị",
  "hv": "thiết bị",
  "em": "🛠️",
  "lesson": 3,
  "explain": [
   "Máy móc, đồ dùng được lắp đặt để phục vụ một công việc: thiết bị phòng gym, thiết bị lớp học. Hán Việt “thiết bị” — nghĩa giống tiếng Việt."
  ],
  "usage": "设备全 · 设备很新 · 健身设备 · 买设备.",
  "collo": [
   "设备全",
   "健身设备",
   "设备很新",
   "买设备"
  ],
  "colloFull": [
   {
    "zh": "设备全",
    "py": "Shèbèi quán",
    "vn": "thiết bị đầy đủ"
   },
   {
    "zh": "健身设备",
    "py": "Jiànshēn shèbèi",
    "vn": "thiết bị tập luyện"
   },
   {
    "zh": "设备很新",
    "py": "Shèbèi hěn xīn",
    "vn": "thiết bị rất mới"
   },
   {
    "zh": "买设备",
    "py": "Mǎi shèbèi",
    "vn": "mua thiết bị"
   }
  ],
  "patterns": [
   {
    "s": "设备 + 全 / 新 / 好",
    "m": "Đánh giá thiết bị"
   }
  ],
  "ex_zh": "杨同乐认为健身房火起来是因为它有很多好处——环境好、设备全，可以锻炼全身。",
  "ex_py": "Yáng Tónglè rènwéi jiànshēnfáng huǒ qǐlai shì yīnwèi tā yǒu hěn duō hǎochù — huánjìng hǎo, shèbèi quán, kěyǐ duànliàn quánshēn.",
  "ex_vn": "Dương Đồng Lạc cho rằng phòng gym trở nên hot là vì nó có nhiều lợi ích — môi trường tốt, thiết bị đầy đủ, có thể rèn luyện toàn thân.",
  "exList": [
   {
    "zh": "杨同乐认为健身房火起来是因为它有很多好处——环境好、设备全，可以锻炼全身。",
    "py": "Yáng Tónglè rènwéi jiànshēnfáng huǒ qǐlai shì yīnwèi tā yǒu hěn duō hǎochù — huánjìng hǎo, shèbèi quán, kěyǐ duànliàn quánshēn.",
    "vn": "Dương Đồng Lạc cho rằng phòng gym trở nên hot là vì nó có nhiều lợi ích — môi trường tốt, thiết bị đầy đủ, có thể rèn luyện toàn thân."
   },
   {
    "zh": "我们学校数字教室的设备都很新。",
    "py": "Wǒmen xuéxiào shùzì jiàoshì de shèbèi dōu hěn xīn.",
    "vn": "Thiết bị của lớp học số ở trường chúng tôi đều rất mới."
   }
  ],
  "hanzi": [
   {
    "c": "设",
    "p": "shè",
    "type": "会意字 · Chữ hội ý",
    "st": 6,
    "ord": "讠 → 殳 (几 + 又)",
    "rad": "讠 (ngôn – lời nói)",
    "mean": "bày đặt, sắp đặt; thiết lập",
    "tip": "Lời nói (讠) + 殳 (shū, cầm công cụ làm việc): vừa nói vừa bắt tay sắp đặt → 设备 (thiết bị), 设计 (thiết kế).",
    "cf": "没 méi (không có) — bên trái là 氵; 段 duàn (đoạn) — bên trái khác hẳn",
    "w": "设备 / 设计 / 建设"
   },
   {
    "c": "备",
    "p": "bèi",
    "type": "独体字 · Chữ đơn",
    "st": 8,
    "ord": "夂→田→丨",
    "rad": "夂",
    "mean": "chuẩn bị, đầy đủ",
    "tip": "准 (chuẩn xác) + 备 (đầy đủ) = sắp xếp đầy đủ, sẵn sàng = CHUẨN BỊ.",
    "cf": "各 (gè – \"mỗi\")",
    "w": "准备 / 设备 / 备用"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Thiết bị của phòng gym này vừa mới vừa đầy đủ.",
    "answer": "这家健身房的设备既新又全。",
    "answerPy": "Zhè jiā jiànshēnfáng de shèbèi jì xīn yòu quán.",
    "note": "Ôn 既……又…… (Bài 4 · điểm 3).",
    "pair": "既……又……"
   },
   {
    "promptLang": "vi",
    "prompt": "Trong lớp học số có những thiết bị gì?",
    "answer": "数字教室里有什么设备？",
    "answerPy": "Shùzì jiàoshì lǐ yǒu shénme shèbèi?",
    "note": "Ôn từ 数字 (Bài 11).",
    "pair": "有什么设备"
   }
  ]
 },
 {
  "n": 20,
  "zh": "全身",
  "py": "quánshēn",
  "pos": "Danh từ",
  "vn": "toàn thân, khắp người",
  "hv": "toàn thân",
  "em": "🧍",
  "lesson": 3,
  "explain": [
   "Toàn bộ cơ thể: 锻炼全身 = rèn luyện toàn thân; 全身都疼 = đau khắp người."
  ],
  "usage": "锻炼全身 · 全身都疼 · 全身是汗.",
  "collo": [
   "锻炼全身",
   "全身都疼",
   "全身是汗",
   "全身运动"
  ],
  "colloFull": [
   {
    "zh": "锻炼全身",
    "py": "Duànliàn quánshēn",
    "vn": "rèn luyện toàn thân"
   },
   {
    "zh": "全身都疼",
    "py": "Quánshēn dōu téng",
    "vn": "đau khắp người"
   },
   {
    "zh": "全身是汗",
    "py": "Quánshēn shì hàn",
    "vn": "người đầy mồ hôi"
   },
   {
    "zh": "全身运动",
    "py": "Quánshēn yùndòng",
    "vn": "vận động toàn thân"
   }
  ],
  "patterns": [
   {
    "s": "全身 + 都 + V / Adj",
    "m": "Khắp người đều …"
   }
  ],
  "ex_zh": "杨同乐认为健身房火起来是因为它有很多好处——环境好、设备全，可以锻炼全身。",
  "ex_py": "Yáng Tónglè rènwéi jiànshēnfáng huǒ qǐlai shì yīnwèi tā yǒu hěn duō hǎochù — huánjìng hǎo, shèbèi quán, kěyǐ duànliàn quánshēn.",
  "ex_vn": "Dương Đồng Lạc cho rằng phòng gym trở nên hot là vì nó có nhiều lợi ích — môi trường tốt, thiết bị đầy đủ, có thể rèn luyện toàn thân.",
  "exList": [
   {
    "zh": "杨同乐认为健身房火起来是因为它有很多好处——环境好、设备全，可以锻炼全身。",
    "py": "Yáng Tónglè rènwéi jiànshēnfáng huǒ qǐlai shì yīnwèi tā yǒu hěn duō hǎochù — huánjìng hǎo, shèbèi quán, kěyǐ duànliàn quánshēn.",
    "vn": "Dương Đồng Lạc cho rằng phòng gym trở nên hot là vì nó có nhiều lợi ích — môi trường tốt, thiết bị đầy đủ, có thể rèn luyện toàn thân."
   },
   {
    "zh": "第一次健身以后，我第二天全身都疼。",
    "py": "Dì yí cì jiànshēn yǐhòu, wǒ dì èr tiān quánshēn dōu téng.",
    "vn": "Lần đầu tập gym xong, hôm sau tôi đau khắp người."
   }
  ],
  "hanzi": [
   {
    "c": "全",
    "p": "quán",
    "type": "上下结构 · Trên-dưới",
    "st": 6,
    "ord": "人 trên → 王 dưới",
    "rad": "人 (nhân)",
    "mean": "toàn vẹn",
    "tip": "Chữ hội ý ngọc 王 được cất TRỌN VẸN dưới mái 人 → TOÀN VẸN, kết hợp 部(phần) thành 全部 = TOÀN BỘ.",
    "cf": "金 (jīn – \"vàng\", tự dạng gần giống)",
    "w": "全部 / 完全 / 安全"
   },
   {
    "c": "身",
    "p": "shēn",
    "type": "独体字 · Tượng hình",
    "st": 7,
    "ord": "丿→𠃌→一→一→一→一→丨",
    "rad": "身 (thân – tự thành bộ)",
    "mean": "thân thể, cơ thể",
    "tip": "Hình dáng người mang thai bụng to → THÂN THỂ, mở rộng nghĩa \"bản thân, cơ thể\".",
    "cf": "躬 (gōng – \"cúi mình\")",
    "w": "身体"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Bơi lội có thể rèn luyện toàn thân.",
    "answer": "游泳可以锻炼全身。",
    "answerPy": "Yóuyǒng kěyǐ duànliàn quánshēn.",
    "note": "锻炼 + 全身.",
    "pair": "锻炼全身"
   },
   {
    "promptLang": "vi",
    "prompt": "Hôm qua tập nhiều quá, hôm nay đau khắp người, ngay cả đi bộ cũng khó.",
    "answer": "昨天练得太多了，今天全身都疼，连走路都困难。",
    "answerPy": "Zuótiān liàn de tài duō le, jīntiān quánshēn dōu téng, lián zǒulù dōu kùnnan.",
    "note": "连……都…… (Bài 17 · điểm 4).",
    "pair": "连……都……"
   }
  ]
 },
 {
  "n": 21,
  "zh": "准确",
  "py": "zhǔnquè",
  "pos": "Tính từ",
  "vn": "chính xác, chuẩn",
  "hv": "chuẩn xác",
  "em": "✅",
  "lesson": 3,
  "explain": [
   "Đúng hoàn toàn, không sai lệch: động tác chuẩn, câu trả lời chính xác, thời gian chính xác.",
   "Phân biệt: 标准 (đúng chuẩn mực, mẫu mực — 普通话很标准); 准确 (chính xác, không sai — 回答准确)."
  ],
  "usage": "做准确 · 很准确 · 准确的时间 · 不太准确.",
  "collo": [
   "动作准确",
   "回答准确",
   "准确的时间",
   "不太准确"
  ],
  "colloFull": [
   {
    "zh": "动作准确",
    "py": "Dòngzuò zhǔnquè",
    "vn": "động tác chuẩn"
   },
   {
    "zh": "回答准确",
    "py": "Huídá zhǔnquè",
    "vn": "trả lời chính xác"
   },
   {
    "zh": "准确的时间",
    "py": "Zhǔnquè de shíjiān",
    "vn": "thời gian chính xác"
   },
   {
    "zh": "不太准确",
    "py": "Bú tài zhǔnquè",
    "vn": "chưa chính xác lắm"
   }
  ],
  "patterns": [
   {
    "s": "把 + O + V + 准确",
    "m": "Câu 把 + bổ ngữ kết quả"
   },
   {
    "s": "V + 得 + 很准确",
    "m": "Bổ ngữ trạng thái"
   }
  ],
  "ex_zh": "健身房里一般还有专业教练，能帮助大家把动作做准确，练习的效果也更好。",
  "ex_py": "Jiànshēnfáng lǐ yìbān hái yǒu zhuānyè jiàoliàn, néng bāngzhù dàjiā bǎ dòngzuò zuò zhǔnquè, liànxí de xiàoguǒ yě gèng hǎo.",
  "ex_vn": "Trong phòng gym thường còn có huấn luyện viên chuyên nghiệp, giúp mọi người làm động tác cho chuẩn, hiệu quả luyện tập cũng tốt hơn.",
  "exList": [
   {
    "zh": "健身房里一般还有专业教练，能帮助大家把动作做准确，练习的效果也更好。",
    "py": "Jiànshēnfáng lǐ yìbān hái yǒu zhuānyè jiàoliàn, néng bāngzhù dàjiā bǎ dòngzuò zuò zhǔnquè, liànxí de xiàoguǒ yě gèng hǎo.",
    "vn": "Trong phòng gym thường còn có huấn luyện viên chuyên nghiệp, giúp mọi người làm động tác cho chuẩn, hiệu quả luyện tập cũng tốt hơn."
   },
   {
    "zh": "A：您看我这个句子写得对吗？B：不太准确，你再检查一下吧。",
    "py": "A: nín kàn wǒ zhège jùzi xiě de duì ma? B: bú tài zhǔnquè, nǐ zài jiǎnchá yíxià ba.",
    "vn": "A: Thầy xem câu này em viết đúng chưa ạ? B: Chưa chính xác lắm, em kiểm tra lại đi."
   }
  ],
  "hanzi": [
   {
    "c": "准",
    "p": "zhǔn",
    "type": "左右结构 · Trái-phải (giản thể)",
    "st": 10,
    "ord": "冫 (băng) trái → 隹 (chuy) phải",
    "rad": "冫 (băng – nước đá)",
    "mean": "chuẩn xác, đúng",
    "tip": "Bộ 冫(bằng phẳng như mặt băng) + 隹(chim, biểu âm) → CHUẨN XÁC, ĐÚNG MỰC, kết hợp 时(giờ) thành 准时 = ĐÚNG GIỜ.",
    "cf": "准 dễ nhầm với 淮 (huái – \"sông Hoài\")",
    "w": "准时 / 准备 / 标准"
   },
   {
    "c": "确",
    "p": "què",
    "type": "左右结构 · Trái-phải (giản thể)",
    "st": 12,
    "ord": "石 (thạch) trái → 角(biến thể) phải",
    "rad": "石 (thạch – đá)",
    "mean": "chắc chắn",
    "tip": "Bộ đá 石 (vững chắc như đá) → CHẮC CHẮN, kết hợp 实(chân thực) thành 确实 = THỰC SỰ, QUẢ THỰC.",
    "cf": "确 dễ nhầm với 碗 (wǎn – \"cái bát\")",
    "w": "确实 / 正确 / 确定"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Anh ấy lúc nào cũng trả lời rất chính xác.",
    "answer": "他总是回答得很准确。",
    "answerPy": "Tā zǒngshì huídá de hěn zhǔnquè.",
    "note": "V得 + 准确.",
    "pair": "V得很准确"
   },
   {
    "promptLang": "vi",
    "prompt": "Câu này em viết chưa chính xác, sửa lại một chút đi.",
    "answer": "这个句子你写得不太准确，把它改一下吧。",
    "answerPy": "Zhège jùzi nǐ xiě de bú tài zhǔnquè, bǎ tā gǎi yíxià ba.",
    "note": "Ôn câu 把 (Bài 15 · điểm 3).",
    "pair": "把……改一下"
   }
  ]
 },
 {
  "n": 22,
  "zh": "仅仅",
  "py": "jǐnjǐn",
  "pos": "Phó từ",
  "vn": "chỉ, vẻn vẹn, chỉ mới",
  "hv": "cận cận",
  "em": "☝️",
  "lesson": 3,
  "explain": [
   "Phó từ: chỉ, vẻn vẹn — nhấn mạnh số lượng ít, thời gian ngắn, phạm vi hẹp; mạnh hơn 只. Hay đi với 就: 仅仅……就…… (chỉ mới … đã …)."
  ],
  "usage": "仅仅 + số lượng · 仅仅……就…… · 不仅仅是…….",
  "collo": [
   "仅仅一个月",
   "仅仅……就……",
   "不仅仅",
   "仅仅是开始"
  ],
  "colloFull": [
   {
    "zh": "仅仅一个月",
    "py": "Jǐnjǐn yí gè yuè",
    "vn": "chỉ một tháng"
   },
   {
    "zh": "仅仅……就……",
    "py": "Jǐnjǐn…… jiù……",
    "vn": "chỉ mới … đã …"
   },
   {
    "zh": "不仅仅",
    "py": "Bù jǐnjǐn",
    "vn": "không chỉ"
   },
   {
    "zh": "仅仅是开始",
    "py": "Jǐnjǐn shì kāishǐ",
    "vn": "mới chỉ là bắt đầu"
   }
  ],
  "patterns": [
   {
    "s": "仅仅 + thời gian / số lượng + 就……",
    "m": "Chỉ mới … đã …"
   },
   {
    "s": "不仅仅是……，还……",
    "m": "Không chỉ là … mà còn …"
   }
  ],
  "ex_zh": "仅仅经过一个月左右的锻炼，杨同乐就感觉自己的身体比以前更健康了。",
  "ex_py": "Jǐnjǐn jīngguò yí gè yuè zuǒyòu de duànliàn, Yáng Tónglè jiù gǎnjué zìjǐ de shēntǐ bǐ yǐqián gèng jiànkāng le.",
  "ex_vn": "Chỉ sau khoảng một tháng tập luyện, Dương Đồng Lạc đã cảm thấy cơ thể mình khoẻ mạnh hơn trước.",
  "exList": [
   {
    "zh": "仅仅经过一个月左右的锻炼，杨同乐就感觉自己的身体比以前更健康了。",
    "py": "Jǐnjǐn jīngguò yí gè yuè zuǒyòu de duànliàn, Yáng Tónglè jiù gǎnjué zìjǐ de shēntǐ bǐ yǐqián gèng jiànkāng le.",
    "vn": "Chỉ sau khoảng một tháng tập luyện, Dương Đồng Lạc đã cảm thấy cơ thể mình khoẻ mạnh hơn trước."
   },
   {
    "zh": "他仅仅用了十分钟就做完了作业。",
    "py": "Tā jǐnjǐn yòng le shí fēnzhōng jiù zuòwán le zuòyè.",
    "vn": "Cậu ấy chỉ mất mười phút đã làm xong bài tập."
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
   },
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
    "prompt": "Chỉ mới học hai tháng, tiếng Trung của cô ấy đã nói rất lưu loát.",
    "answer": "仅仅学了两个月，她的中文就说得很流利了。",
    "answerPy": "Jǐnjǐn xué le liǎng gè yuè, tā de Zhōngwén jiù shuō de hěn liúlì le.",
    "note": "仅仅……就…….",
    "pair": "仅仅……就……"
   },
   {
    "promptLang": "vi",
    "prompt": "Tập luyện không chỉ để giảm cân, mà còn để khoẻ mạnh hơn.",
    "answer": "锻炼不仅仅是为了减肥，还是为了更健康。",
    "answerPy": "Duànliàn bù jǐnjǐn shì wèile jiǎnféi, háishi wèile gèng jiànkāng.",
    "note": "Ôn 不仅……还…… (Bài 3 · điểm 2).",
    "pair": "不仅仅……还……"
   }
  ]
 },
 {
  "n": 23,
  "zh": "表扬",
  "py": "biǎoyáng",
  "pos": "Động từ",
  "vn": "khen ngợi, biểu dương",
  "hv": "biểu dương",
  "em": "👏",
  "lesson": 3,
  "explain": [
   "Khen ngợi (thường là người trên khen người dưới: thầy khen trò, sếp khen nhân viên, HLV khen đội viên). Trái nghĩa: 批评 (phê bình, trách).",
   "Mẫu câu kiêm ngữ của bài: Chủ ngữ + 表扬 + ai + V + O."
  ],
  "usage": "表扬 + ai · 表扬 + ai + V…… · 受到 / 得到表扬.",
  "collo": [
   "表扬学生",
   "受到表扬",
   "得到老师的表扬",
   "表扬和批评"
  ],
  "colloFull": [
   {
    "zh": "表扬学生",
    "py": "Biǎoyáng xuésheng",
    "vn": "khen học sinh"
   },
   {
    "zh": "受到表扬",
    "py": "Shòudào biǎoyáng",
    "vn": "được khen"
   },
   {
    "zh": "得到老师的表扬",
    "py": "Dédào lǎoshī de biǎoyáng",
    "vn": "được thầy cô khen"
   },
   {
    "zh": "表扬和批评",
    "py": "Biǎoyáng hé pīpíng",
    "vn": "khen và phê bình"
   }
  ],
  "patterns": [
   {
    "s": "表扬 + ai + V + O",
    "m": "Khen ai (đã) làm gì — câu kiêm ngữ"
   },
   {
    "s": "受到 / 得到 + (ai 的) + 表扬",
    "m": "Được khen"
   }
  ],
  "ex_zh": "教练也表扬他取得了很大的进步，并鼓励他坚持下去。",
  "ex_py": "Jiàoliàn yě biǎoyáng tā qǔdé le hěn dà de jìnbù, bìng gǔlì tā jiānchí xiàqu.",
  "ex_vn": "Huấn luyện viên cũng khen anh ấy đã có tiến bộ rất lớn, và động viên anh ấy kiên trì tiếp.",
  "exList": [
   {
    "zh": "教练也表扬他取得了很大的进步，并鼓励他坚持下去。",
    "py": "Jiàoliàn yě biǎoyáng tā qǔdé le hěn dà de jìnbù, bìng gǔlì tā jiānchí xiàqu.",
    "vn": "Huấn luyện viên cũng khen anh ấy đã có tiến bộ rất lớn, và động viên anh ấy kiên trì tiếp."
   },
   {
    "zh": "老师表扬白家月坚持每天学习中文。",
    "py": "Lǎoshī biǎoyáng Bái Jiāyuè jiānchí měitiān xuéxí Zhōngwén.",
    "vn": "Cô giáo khen Bạch Gia Nguyệt kiên trì học tiếng Trung mỗi ngày."
   }
  ],
  "hanzi": [
   {
    "c": "表",
    "p": "biǎo",
    "type": "上下结构 · Trên-dưới",
    "st": 8,
    "ord": "龶 trên → 𧘇 dưới",
    "rad": "衣 (y – áo, biến thể)",
    "mean": "bề ngoài, biểu lộ",
    "tip": "Chữ hội ý áo lông 衣+毛 mặc bên NGOÀI → BỀ MẶT, mở rộng thành BIỂU LỘ ra ngoài, kết hợp 示(cho thấy) thành 表示 = BIỂU THỊ.",
    "cf": "麦 (mài – \"lúa mạch\", phần trên gần giống)",
    "w": "表示 / 表演 / 表格 / 手表"
   },
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
    "prompt": "Giám đốc khen anh ấy làm việc rất cẩn thận.",
    "answer": "经理表扬他工作很细心。",
    "answerPy": "Jīnglǐ biǎoyáng tā gōngzuò hěn xìxīn.",
    "note": "Câu kiêm ngữ (Bài 17 · điểm 3).",
    "pair": "表扬 + ai + ……"
   },
   {
    "promptLang": "vi",
    "prompt": "Vì đã giúp đỡ bạn học, cô ấy được cô giáo khen.",
    "answer": "因为帮助了同学，她得到了老师的表扬。",
    "answerPy": "Yīnwèi bāngzhù le tóngxué, tā dédào le lǎoshī de biǎoyáng.",
    "note": "得到 + ……的表扬.",
    "pair": "得到……的表扬"
   }
  ]
 },
 {
  "n": 24,
  "zh": "进步",
  "py": "jìnbù",
  "pos": "Động từ / Tính từ",
  "vn": "tiến bộ",
  "hv": "tiến bộ",
  "em": "📈",
  "lesson": 3,
  "explain": [
   "Động từ: tiến bộ, khá lên (他进步了, 进步很快); dùng như danh từ trong cụm 取得进步 (đạt được tiến bộ).",
   "Tính từ: tiến bộ, tiên tiến (进步的思想)."
  ],
  "usage": "取得进步 · 进步很大 / 很快 · 有进步.",
  "collo": [
   "取得进步",
   "进步很快",
   "有进步",
   "很大的进步"
  ],
  "colloFull": [
   {
    "zh": "取得进步",
    "py": "Qǔdé jìnbù",
    "vn": "đạt được tiến bộ"
   },
   {
    "zh": "进步很快",
    "py": "Jìnbù hěn kuài",
    "vn": "tiến bộ rất nhanh"
   },
   {
    "zh": "有进步",
    "py": "Yǒu jìnbù",
    "vn": "có tiến bộ"
   },
   {
    "zh": "很大的进步",
    "py": "Hěn dà de jìnbù",
    "vn": "tiến bộ rất lớn"
   }
  ],
  "patterns": [
   {
    "s": "取得 + (很大的) + 进步",
    "m": "Đạt được tiến bộ"
   },
   {
    "s": "……进步了 / 进步很快",
    "m": "Làm vị ngữ"
   }
  ],
  "ex_zh": "教练也表扬他取得了很大的进步，并鼓励他坚持下去。",
  "ex_py": "Jiàoliàn yě biǎoyáng tā qǔdé le hěn dà de jìnbù, bìng gǔlì tā jiānchí xiàqu.",
  "ex_vn": "Huấn luyện viên cũng khen anh ấy đã có tiến bộ rất lớn, và động viên anh ấy kiên trì tiếp.",
  "exList": [
   {
    "zh": "教练也表扬他取得了很大的进步，并鼓励他坚持下去。",
    "py": "Jiàoliàn yě biǎoyáng tā qǔdé le hěn dà de jìnbù, bìng gǔlì tā jiānchí xiàqu.",
    "vn": "Huấn luyện viên cũng khen anh ấy đã có tiến bộ rất lớn, và động viên anh ấy kiên trì tiếp."
   },
   {
    "zh": "仅仅半年，你的中文就进步了这么多！",
    "py": "Jǐnjǐn bàn nián, nǐ de Zhōngwén jiù jìnbù le zhème duō!",
    "vn": "Chỉ nửa năm mà tiếng Trung của bạn đã tiến bộ nhiều thế này!"
   }
  ],
  "hanzi": [
   {
    "c": "进",
    "p": "jìn",
    "type": "半包围结构 · Bán bao vây (giản thể)",
    "st": 7,
    "ord": "井 trong → 辶 bao",
    "rad": "辶 (sước – đi)",
    "mean": "tiến, vào",
    "tip": "Bộ đi 辶 + 井 → ĐI VÀO, TIẾN, kết hợp 行(làm) thành 进行 = TIẾN HÀNH.",
    "cf": "近 (jìn – \"gần\", cũng bộ 辶)",
    "w": "进行 / 进步 / 进入"
   },
   {
    "c": "步",
    "p": "bù",
    "type": "会意字 · Chữ hội ý",
    "st": 7,
    "ord": "止 → 丨 → 丿 → 丿 (phần dưới)",
    "rad": "止 (chỉ – bàn chân, dừng)",
    "mean": "bước; bước (giai đoạn)",
    "tip": "Hai bàn chân (止 trên, chân kia dưới) nối tiếp nhau = bước đi. Phần dưới KHÔNG phải 少: không có nét chấm 丶 bên phải — học sinh rất hay viết thừa nét này!",
    "cf": "少 shǎo (ít) — có nét chấm 丶 bên phải; 涉 shè (lội qua) — thêm 氵",
    "w": "一步一步 / 跑步 / 散步"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Học kỳ này con tôi tiến bộ rất nhiều.",
    "answer": "这个学期我孩子进步了很多。",
    "answerPy": "Zhège xuéqī wǒ háizi jìnbù le hěn duō.",
    "note": "进步 + 了 + 很多.",
    "pair": "进步了很多"
   },
   {
    "promptLang": "vi",
    "prompt": "Khẩu ngữ của anh ấy ngày một tốt hơn, tiến bộ rất nhanh.",
    "answer": "他的口语一天比一天好，进步很快。",
    "answerPy": "Tā de kǒuyǔ yì tiān bǐ yì tiān hǎo, jìnbù hěn kuài.",
    "note": "Ôn 一+量词+比+一+量词 (Bài 13 · điểm 2).",
    "pair": "一天比一天……"
   }
  ]
 },
 {
  "n": 25,
  "zh": "鼓励",
  "py": "gǔlì",
  "pos": "Động từ",
  "vn": "khích lệ, động viên, cổ vũ",
  "hv": "cổ lệ",
  "em": "🙌",
  "lesson": 3,
  "explain": [
   "Động viên, khích lệ để người khác thêm tự tin, cố gắng; hay dùng kiêm ngữ: 鼓励 + ai + V (động viên ai làm gì)."
  ],
  "usage": "鼓励 + ai + V · 互相鼓励 · 得到鼓励.",
  "collo": [
   "鼓励孩子",
   "互相鼓励",
   "鼓励他坚持下去",
   "得到鼓励"
  ],
  "colloFull": [
   {
    "zh": "鼓励孩子",
    "py": "Gǔlì háizi",
    "vn": "động viên con"
   },
   {
    "zh": "互相鼓励",
    "py": "Hùxiāng gǔlì",
    "vn": "động viên lẫn nhau"
   },
   {
    "zh": "鼓励他坚持下去",
    "py": "Gǔlì tā jiānchí xiàqu",
    "vn": "động viên anh ấy kiên trì tiếp"
   },
   {
    "zh": "得到鼓励",
    "py": "Dédào gǔlì",
    "vn": "được khích lệ"
   }
  ],
  "patterns": [
   {
    "s": "鼓励 + ai + V",
    "m": "Động viên ai làm gì (kiêm ngữ)"
   }
  ],
  "ex_zh": "教练也表扬他取得了很大的进步，并鼓励他坚持下去。",
  "ex_py": "Jiàoliàn yě biǎoyáng tā qǔdé le hěn dà de jìnbù, bìng gǔlì tā jiānchí xiàqu.",
  "ex_vn": "Huấn luyện viên cũng khen anh ấy đã có tiến bộ rất lớn, và động viên anh ấy kiên trì tiếp.",
  "exList": [
   {
    "zh": "教练也表扬他取得了很大的进步，并鼓励他坚持下去。",
    "py": "Jiàoliàn yě biǎoyáng tā qǔdé le hěn dà de jìnbù, bìng gǔlì tā jiānchí xiàqu.",
    "vn": "Huấn luyện viên cũng khen anh ấy đã có tiến bộ rất lớn, và động viên anh ấy kiên trì tiếp."
   },
   {
    "zh": "妈妈总是鼓励我多交朋友、多运动。",
    "py": "Māma zǒngshì gǔlì wǒ duō jiāo péngyou, duō yùndòng.",
    "vn": "Mẹ luôn động viên tôi kết bạn nhiều, vận động nhiều."
   }
  ],
  "hanzi": [
   {
    "c": "鼓",
    "p": "gǔ",
    "type": "左右结构 · Trái-phải",
    "st": 13,
    "ord": "壴 trái → 支 phải",
    "rad": "鼓 (cổ)",
    "mean": "trống",
    "tip": "壴(cái trống) + 支(tay cầm dùi) → ĐÁNH TRỐNG cổ vũ → 鼓励 = KHUYẾN KHÍCH, 鼓掌 = vỗ tay.",
    "cf": "支 (zhī – cành, chi)",
    "w": "鼓励 / 鼓掌"
   },
   {
    "c": "励",
    "p": "lì",
    "type": "形声字 · Chữ hình thanh",
    "st": 7,
    "ord": "厂 → 万 → 力",
    "rad": "力 (lực – sức)",
    "mean": "khích lệ, cổ vũ",
    "tip": "厉 (lì, gợi âm) + 力 (sức): tiếp thêm sức cho người khác → 鼓励 (khích lệ), 奖励 (khen thưởng).",
    "cf": "厉 lì (厉害 — lợi hại) — không có 力 bên phải; 历 lì (lịch sử) — trong 厂 là 力",
    "w": "鼓励 / 奖励 / 励志"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Bạn bè động viên tôi tham gia cuộc thi.",
    "answer": "朋友们鼓励我参加比赛。",
    "answerPy": "Péngyoumen gǔlì wǒ cānjiā bǐsài.",
    "note": "鼓励 + ai + V.",
    "pair": "鼓励 + ai + V"
   },
   {
    "promptLang": "vi",
    "prompt": "Thầy giáo không phải phê bình cậu ấy, mà là động viên cậu ấy lần sau cố gắng hơn.",
    "answer": "老师不是批评他，而是鼓励他下次更努力一些。",
    "answerPy": "Lǎoshī bú shì pīpíng tā, érshì gǔlì tā xià cì gèng nǔlì yìxiē.",
    "note": "Ôn 不是……而是…… (Bài 11 · điểm 3).",
    "pair": "不是……而是……"
   }
  ]
 },
 {
  "n": 26,
  "zh": "帅",
  "py": "shuài",
  "pos": "Tính từ",
  "vn": "đẹp trai, phong độ, ngầu",
  "hv": "soái",
  "em": "😎",
  "lesson": 3,
  "explain": [
   "(Nam giới) đẹp trai, phong độ; khẩu ngữ còn dùng khen động tác đẹp, ngầu: 这个球打得真帅!"
  ],
  "usage": "很帅 · 长得帅 · 看起来很帅 · 帅哥.",
  "collo": [
   "长得帅",
   "很帅",
   "看起来更帅",
   "帅哥"
  ],
  "colloFull": [
   {
    "zh": "长得帅",
    "py": "Zhǎng de shuài",
    "vn": "đẹp trai"
   },
   {
    "zh": "很帅",
    "py": "Hěn shuài",
    "vn": "rất đẹp trai"
   },
   {
    "zh": "看起来更帅",
    "py": "Kànqǐlai gèng shuài",
    "vn": "trông đẹp trai hơn"
   },
   {
    "zh": "帅哥",
    "py": "Shuàigē",
    "vn": "anh đẹp trai"
   }
  ],
  "patterns": [
   {
    "s": "看起来 + 很 / 更 + 帅",
    "m": "Trông …"
   }
  ],
  "ex_zh": "教练也表扬他取得了很大的进步，并鼓励他坚持下去，还说随着身体越来越好，人看起来也会更帅。",
  "ex_py": "Jiàoliàn yě biǎoyáng tā qǔdé le hěn dà de jìnbù, bìng gǔlì tā jiānchí xiàqu, hái shuō suízhe shēntǐ yuèláiyuè hǎo, rén kànqǐlai yě huì gèng shuài.",
  "ex_vn": "Huấn luyện viên cũng khen anh ấy tiến bộ rất lớn, động viên anh ấy kiên trì tiếp, còn nói rằng cùng với sức khoẻ ngày càng tốt, trông người cũng sẽ đẹp trai hơn.",
  "exList": [
   {
    "zh": "教练也表扬他取得了很大的进步，并鼓励他坚持下去，还说随着身体越来越好，人看起来也会更帅。",
    "py": "Jiàoliàn yě biǎoyáng tā qǔdé le hěn dà de jìnbù, bìng gǔlì tā jiānchí xiàqu, hái shuō suízhe shēntǐ yuèláiyuè hǎo, rén kànqǐlai yě huì gèng shuài.",
    "vn": "Huấn luyện viên cũng khen anh ấy tiến bộ rất lớn, động viên anh ấy kiên trì tiếp, còn nói rằng cùng với sức khoẻ ngày càng tốt, trông người cũng sẽ đẹp trai hơn."
   },
   {
    "zh": "你哥哥长得真帅！",
    "py": "Nǐ gēge zhǎng de zhēn shuài!",
    "vn": "Anh trai bạn đẹp trai thật!"
   }
  ],
  "hanzi": [
   {
    "c": "帅",
    "p": "shuài",
    "type": "左右结构 · Trái-phải (giản thể)",
    "st": 5,
    "ord": "巾 (cân) trái → 卩(biến thể) phải",
    "rad": "巾 (cân – khăn)",
    "mean": "đẹp, chỉ huy",
    "tip": "Bộ khăn 巾 (liên quan trang phục) → mở rộng thành PHONG THÁI ĐẸP, NGẦU (ăn mặc chỉnh tề, phong độ).",
    "cf": "师 (shī – \"thầy\", cũng bộ 巾\")",
    "w": "帅 / 帅气 / 元帅"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Anh ấy mặc bộ này trông đẹp trai hơn hẳn.",
    "answer": "他穿这件衣服看起来帅多了。",
    "answerPy": "Tā chuān zhè jiàn yīfu kànqǐlai shuài duō le.",
    "note": "Adj + 多了.",
    "pair": "帅多了"
   },
   {
    "promptLang": "vi",
    "prompt": "Bạn tôi không những đẹp trai mà bóng bàn cũng chơi rất hay.",
    "answer": "我朋友不光长得帅，乒乓球也打得特别好。",
    "answerPy": "Wǒ péngyou bùguāng zhǎng de shuài, pīngpāngqiú yě dǎ de tèbié hǎo.",
    "note": "Ôn 不光……也…… (Bài 3 · điểm 2).",
    "pair": "不光……也……"
   }
  ]
 },
 {
  "n": 27,
  "zh": "乒乓球",
  "py": "pīngpāngqiú",
  "pos": "Danh từ",
  "vn": "bóng bàn",
  "hv": "binh bang cầu",
  "em": "🏓",
  "lesson": 4,
  "explain": [
   "Môn bóng bàn; cũng chỉ quả bóng bàn. Được gọi là “quốc cầu” (国球) của Trung Quốc. Chơi bóng bàn dùng động từ 打."
  ],
  "usage": "打乒乓球 · 乒乓球队 · 乒乓球比赛 · 乒乓球运动员.",
  "collo": [
   "打乒乓球",
   "乒乓球队",
   "乒乓球比赛",
   "乒乓球运动员"
  ],
  "colloFull": [
   {
    "zh": "打乒乓球",
    "py": "Dǎ pīngpāngqiú",
    "vn": "chơi bóng bàn"
   },
   {
    "zh": "乒乓球队",
    "py": "Pīngpāngqiú duì",
    "vn": "đội bóng bàn"
   },
   {
    "zh": "乒乓球比赛",
    "py": "Pīngpāngqiú bǐsài",
    "vn": "trận đấu bóng bàn"
   },
   {
    "zh": "乒乓球运动员",
    "py": "Pīngpāngqiú yùndòngyuán",
    "vn": "vận động viên bóng bàn"
   }
  ],
  "patterns": [
   {
    "s": "打 + 乒乓球",
    "m": "Chơi bóng bàn dùng 打 (✗ 玩乒乓球 kém tự nhiên)"
   }
  ],
  "ex_zh": "中国乒乓球队非常有名，常在各项比赛中赢得第一名，被叫作“梦之队”。",
  "ex_py": "Zhōngguó pīngpāngqiú duì fēicháng yǒumíng, cháng zài gè xiàng bǐsài zhōng yíngdé dì yì míng, bèi jiàozuò “mèng zhī duì”.",
  "ex_vn": "Đội tuyển bóng bàn Trung Quốc rất nổi tiếng, thường giành hạng nhất trong các giải đấu, được gọi là “đội trong mơ”.",
  "exList": [
   {
    "zh": "中国乒乓球队非常有名，常在各项比赛中赢得第一名，被叫作“梦之队”。",
    "py": "Zhōngguó pīngpāngqiú duì fēicháng yǒumíng, cháng zài gè xiàng bǐsài zhōng yíngdé dì yì míng, bèi jiàozuò “mèng zhī duì”.",
    "vn": "Đội tuyển bóng bàn Trung Quốc rất nổi tiếng, thường giành hạng nhất trong các giải đấu, được gọi là “đội trong mơ”."
   },
   {
    "zh": "周末我常和爸爸一起打乒乓球。",
    "py": "Zhōumò wǒ cháng hé bàba yìqǐ dǎ pīngpāngqiú.",
    "vn": "Cuối tuần tôi hay chơi bóng bàn cùng bố."
   }
  ],
  "hanzi": [
   {
    "c": "乒",
    "p": "pīng",
    "type": "独体字 · Chữ đơn thể",
    "st": 6,
    "ord": "丘 + 丿",
    "rad": "丿 (phiệt)",
    "mean": "(tiếng) bốp",
    "tip": "Chữ tượng thanh: 兵 bỏ nét phải → 乒 (pīng), bỏ nét trái → 乓 (pāng). Tiếng bóng bàn \"ping-pong\".",
    "cf": "乓 (pāng)",
    "w": "乒乓球 / 乒乓"
   },
   {
    "c": "乓",
    "p": "pāng",
    "type": "指事字 · Chữ chỉ sự (biến từ 兵, mô phỏng âm thanh)",
    "st": 6,
    "ord": "丘 → 丶 (chấm bên phải)",
    "rad": "丿 (phiệt – nét phẩy)",
    "mean": "tiếng “bang” (trong 乒乓)",
    "tip": "Chữ 丘 bỏ bớt nét, thêm một chấm bên PHẢI → 乓; còn 乒 chấm bên TRÁI. Hai chữ như hai bên bàn bóng bàn đánh qua đánh lại: 乒乓 pīngpāng.",
    "cf": "乒 pīng — nét chấm/phẩy ở bên trái; 兵 bīng (lính) — dưới có hai chấm",
    "w": "乒乓球 / 乒乓"
   },
   {
    "c": "球",
    "p": "qiú",
    "type": "左右结构 · Trái-phải",
    "st": 11,
    "ord": "王 trái → 求 phải",
    "rad": "王 (ngọc)",
    "mean": "quả cầu",
    "tip": "Bộ ngọc 王 + 求(biểu âm) → viên ngọc tròn → QUẢ CẦU, BÓNG. 地球 = quả cầu đất = TRÁI ĐẤT.",
    "cf": "求 (qiú – cầu xin)",
    "w": "地球 / 足球 / 篮球"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Tôi chơi bóng bàn không giỏi bằng anh trai.",
    "answer": "我打乒乓球不如我哥哥打得好。",
    "answerPy": "Wǒ dǎ pīngpāngqiú bùrú wǒ gēge dǎ de hǎo.",
    "note": "Ôn A不如B (Bài 15 · điểm 4).",
    "pair": "A不如B"
   },
   {
    "promptLang": "vi",
    "prompt": "Cho dù đã về hưu, ông tôi vẫn ngày nào cũng chơi bóng bàn.",
    "answer": "即使退休了，爷爷也每天打乒乓球。",
    "answerPy": "Jíshǐ tuìxiū le, yéye yě měitiān dǎ pīngpāngqiú.",
    "note": "Ôn 即使……也…… (Bài 11 · điểm 1).",
    "pair": "即使……也……"
   }
  ]
 },
 {
  "n": 28,
  "zh": "队",
  "py": "duì",
  "pos": "Danh từ",
  "vn": "đội; hàng",
  "hv": "đội",
  "em": "👥",
  "lesson": 4,
  "explain": [
   "Đội, tập thể có tổ chức: 球队, 国家队, 乒乓球队. Còn có nghĩa là hàng người (排队 = xếp hàng)."
  ],
  "usage": "进入……队 · 国家队 · 校队 · 排队.",
  "collo": [
   "国家队",
   "乒乓球队",
   "进入……队",
   "排队"
  ],
  "colloFull": [
   {
    "zh": "国家队",
    "py": "Guójiāduì",
    "vn": "đội tuyển quốc gia"
   },
   {
    "zh": "乒乓球队",
    "py": "Pīngpāngqiú duì",
    "vn": "đội bóng bàn"
   },
   {
    "zh": "进入……队",
    "py": "Jìnrù…… duì",
    "vn": "vào đội …"
   },
   {
    "zh": "排队",
    "py": "Páiduì",
    "vn": "xếp hàng"
   }
  ],
  "patterns": [
   {
    "s": "Tên môn + 队",
    "m": "乒乓球队 / 足球队"
   },
   {
    "s": "进入 / 参加 + ……队",
    "m": "Vào đội"
   }
  ],
  "ex_zh": "许多年轻的乒乓球运动员都有一个梦想，那就是进入国家队，参加世界大赛，为球队赢下比赛。",
  "ex_py": "Xǔduō niánqīng de pīngpāngqiú yùndòngyuán dōu yǒu yí gè mèngxiǎng, nà jiùshì jìnrù guójiāduì, cānjiā shìjiè dàsài, wèi qiúduì yíng xià bǐsài.",
  "ex_vn": "Nhiều vận động viên bóng bàn trẻ đều có một ước mơ, đó là vào đội tuyển quốc gia, tham gia các giải đấu lớn thế giới, thắng trận vì đội.",
  "exList": [
   {
    "zh": "许多年轻的乒乓球运动员都有一个梦想，那就是进入国家队，参加世界大赛，为球队赢下比赛。",
    "py": "Xǔduō niánqīng de pīngpāngqiú yùndòngyuán dōu yǒu yí gè mèngxiǎng, nà jiùshì jìnrù guójiāduì, cānjiā shìjiè dàsài, wèi qiúduì yíng xià bǐsài.",
    "vn": "Nhiều vận động viên bóng bàn trẻ đều có một ước mơ, đó là vào đội tuyển quốc gia, tham gia các giải đấu lớn thế giới, thắng trận vì đội."
   },
   {
    "zh": "A：听说你进入了学校的乒乓球队？B：没错，我很喜欢打乒乓球，而且打得很好。",
    "py": "A: tīngshuō nǐ jìnrù le xuéxiào de pīngpāngqiú duì? B: méicuò, wǒ hěn xǐhuan dǎ pīngpāngqiú, érqiě dǎ de hěn hǎo.",
    "vn": "A: Nghe nói cậu vào đội bóng bàn của trường rồi à? B: Đúng vậy, mình rất thích chơi bóng bàn, mà còn chơi rất giỏi."
   }
  ],
  "hanzi": [
   {
    "c": "队",
    "p": "duì",
    "type": "左右结构 · Trái-phải",
    "st": 4,
    "ord": "阝 trái → 人 phải",
    "rad": "阝 (phụ)",
    "mean": "đội, hàng",
    "tip": "Giản thể của 隊 → ĐỘI, HÀNG. 排队, 队员 (thành viên đội), 足球队.",
    "cf": "认 (rèn – nhận)",
    "w": "排队 / 队员 / 球队"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Cậu ấy vừa vào đội bóng rổ của trường.",
    "answer": "他刚进入学校的篮球队。",
    "answerPy": "Tā gāng jìnrù xuéxiào de lánqiúduì.",
    "note": "进入 + ……队.",
    "pair": "进入……队"
   },
   {
    "promptLang": "vi",
    "prompt": "Quán ăn này rất hot, ngày nào cũng phải xếp hàng.",
    "answer": "这家饭馆很火，每天都得排队。",
    "answerPy": "Zhè jiā fànguǎn hěn huǒ, měitiān dōu děi páiduì.",
    "note": "火 (bài này) + 排队.",
    "pair": "排队"
   }
  ]
 },
 {
  "n": 29,
  "zh": "项",
  "py": "xiàng",
  "pos": "Lượng từ",
  "vn": "hạng mục, môn (lượng từ cho hạng mục, nhiệm vụ, môn thi đấu)",
  "hv": "hạng",
  "em": "📋",
  "lesson": 4,
  "explain": [
   "Lượng từ cho các hạng mục, công việc, nhiệm vụ, môn thi đấu, quy định: 一项任务, 一项运动, 各项比赛 (các môn / các giải thi đấu)."
  ],
  "usage": "各项比赛 · 一项任务 · 一项运动 · 这项工作.",
  "collo": [
   "各项比赛",
   "一项任务",
   "这项运动",
   "一项工作"
  ],
  "colloFull": [
   {
    "zh": "各项比赛",
    "py": "Gè xiàng bǐsài",
    "vn": "các giải đấu, các môn thi"
   },
   {
    "zh": "一项任务",
    "py": "Yí xiàng rènwu",
    "vn": "một nhiệm vụ"
   },
   {
    "zh": "这项运动",
    "py": "Zhè xiàng yùndòng",
    "vn": "môn thể thao này"
   },
   {
    "zh": "一项工作",
    "py": "Yí xiàng gōngzuò",
    "vn": "một công việc"
   }
  ],
  "patterns": [
   {
    "s": "一 / 这 / 各 + 项 + N",
    "m": "Lượng từ cho hạng mục, nhiệm vụ"
   }
  ],
  "ex_zh": "中国乒乓球队非常有名，常在各项比赛中赢得第一名，被叫作“梦之队”。",
  "ex_py": "Zhōngguó pīngpāngqiú duì fēicháng yǒumíng, cháng zài gè xiàng bǐsài zhōng yíngdé dì yì míng, bèi jiàozuò “mèng zhī duì”.",
  "ex_vn": "Đội tuyển bóng bàn Trung Quốc rất nổi tiếng, thường giành hạng nhất trong các giải đấu, được gọi là “đội trong mơ”.",
  "exList": [
   {
    "zh": "中国乒乓球队非常有名，常在各项比赛中赢得第一名，被叫作“梦之队”。",
    "py": "Zhōngguó pīngpāngqiú duì fēicháng yǒumíng, cháng zài gè xiàng bǐsài zhōng yíngdé dì yì míng, bèi jiàozuò “mèng zhī duì”.",
    "vn": "Đội tuyển bóng bàn Trung Quốc rất nổi tiếng, thường giành hạng nhất trong các giải đấu, được gọi là “đội trong mơ”."
   },
   {
    "zh": "这项任务很重要，你一定要按时完成。",
    "py": "Zhè xiàng rènwu hěn zhòngyào, nǐ yídìng yào ànshí wánchéng.",
    "vn": "Nhiệm vụ này rất quan trọng, em nhất định phải hoàn thành đúng hạn."
   }
  ],
  "hanzi": [
   {
    "c": "项",
    "p": "xiàng",
    "type": "形声字 · Chữ hình thanh",
    "st": 9,
    "ord": "工 → 页",
    "rad": "页 (hiệt – cái đầu)",
    "mean": "gáy; hạng mục, khoản",
    "tip": "工 gōng (chỉ âm) + 页 (cái đầu): nghĩa gốc là gáy cổ; nay dùng chỉ “hạng mục, khoản” — 项目 (dự án).",
    "cf": "顶 dǐng (đỉnh) — bên trái là 丁; 须 xū — bên trái là 彡",
    "w": "项目 / 一项工作"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Bơi lội là môn thể thao tôi thích nhất.",
    "answer": "游泳是我最喜欢的一项运动。",
    "answerPy": "Yóuyǒng shì wǒ zuì xǐhuan de yí xiàng yùndòng.",
    "note": "一项运动.",
    "pair": "一项 + N"
   },
   {
    "promptLang": "vi",
    "prompt": "Nhiệm vụ này dù khó đến mấy, chúng ta cũng phải hoàn thành.",
    "answer": "这项任务无论多难，我们都要完成。",
    "answerPy": "Zhè xiàng rènwu wúlùn duō nán, wǒmen dōu yào wánchéng.",
    "note": "Ôn 无论……都…… (Bài 12 · điểm 3).",
    "pair": "无论……都……"
   }
  ]
 },
 {
  "n": 30,
  "zh": "赢得",
  "py": "yíngdé",
  "pos": "Động từ",
  "vn": "giành được, đạt được",
  "hv": "doanh đắc",
  "em": "🏆",
  "lesson": 4,
  "explain": [
   "Giành được nhờ cố gắng; tân ngữ thường là thành tích hoặc danh từ trừu tượng: 赢得比赛, 赢得第一名, 赢得大家的喜爱.",
   "Khác 赢: 赢 có thể đứng một mình (我们赢了); 赢得 bắt buộc có tân ngữ."
  ],
  "usage": "赢得比赛 · 赢得第一名 · 赢得……的喜爱.",
  "collo": [
   "赢得比赛",
   "赢得第一名",
   "赢得喜爱",
   "赢得尊重"
  ],
  "colloFull": [
   {
    "zh": "赢得比赛",
    "py": "Yíngdé bǐsài",
    "vn": "thắng trận đấu"
   },
   {
    "zh": "赢得第一名",
    "py": "Yíngdé dì yì míng",
    "vn": "giành hạng nhất"
   },
   {
    "zh": "赢得喜爱",
    "py": "Yíngdé xǐ'ài",
    "vn": "giành được sự yêu mến"
   },
   {
    "zh": "赢得尊重",
    "py": "Yíngdé zūnzhòng",
    "vn": "giành được sự tôn trọng"
   }
  ],
  "patterns": [
   {
    "s": "赢得 + 第一名 / 比赛 / 喜爱",
    "m": "Luôn có tân ngữ"
   }
  ],
  "ex_zh": "中国乒乓球队非常有名，常在各项比赛中赢得第一名，被叫作“梦之队”。",
  "ex_py": "Zhōngguó pīngpāngqiú duì fēicháng yǒumíng, cháng zài gè xiàng bǐsài zhōng yíngdé dì yì míng, bèi jiàozuò “mèng zhī duì”.",
  "ex_vn": "Đội tuyển bóng bàn Trung Quốc rất nổi tiếng, thường giành hạng nhất trong các giải đấu, được gọi là “đội trong mơ”.",
  "exList": [
   {
    "zh": "中国乒乓球队非常有名，常在各项比赛中赢得第一名，被叫作“梦之队”。",
    "py": "Zhōngguó pīngpāngqiú duì fēicháng yǒumíng, cháng zài gè xiàng bǐsài zhōng yíngdé dì yì míng, bèi jiàozuò “mèng zhī duì”.",
    "vn": "Đội tuyển bóng bàn Trung Quốc rất nổi tiếng, thường giành hạng nhất trong các giải đấu, được gọi là “đội trong mơ”."
   },
   {
    "zh": "这位歌手赢得了很多年轻人的喜爱。",
    "py": "Zhè wèi gēshǒu yíngdé le hěn duō niánqīngrén de xǐ'ài.",
    "vn": "Ca sĩ này đã giành được sự yêu mến của rất nhiều người trẻ."
   }
  ],
  "hanzi": [
   {
    "c": "赢",
    "p": "yíng",
    "type": "上下结构 · Trên-dưới",
    "st": 17,
    "ord": "亡+口+月 trên → 贝+凡 dưới",
    "rad": "贝 (bối – tiền của)",
    "mean": "thắng",
    "tip": "Chữ phức tạp kết hợp nhiều bộ, liên quan đến việc GIÀNH ĐƯỢC lợi ích (贝 tiền của) → mở rộng thành THẮNG (trong thi đấu/cạnh tranh).",
    "cf": "嬴 (yíng – họ, tự dạng gần giống nhưng có bộ 女\")",
    "w": "赢 / 赢了 / 输赢"
   },
   {
    "c": "得",
    "p": "dé",
    "type": "左右结构 · Trái-phải",
    "st": 11,
    "ord": "彳 (xích) trái → 旦+寸 phải",
    "rad": "彳 (xích – bước chân)",
    "mean": "được, phải",
    "tip": "Cụm cố định 不得不 (không được không) = PHẢI, BẤT ĐẮC DĨ — hai lần phủ định tạo thành ý khẳng định mạnh về sự bắt buộc.",
    "cf": "待 (dài – \"chờ đợi\", cũng có bộ 彳\")",
    "w": "不得不 / 得到 / 舍不得"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Đội của họ đã giành hạng nhất trong cuộc thi lần này.",
    "answer": "他们队在这次比赛中赢得了第一名。",
    "answerPy": "Tāmen duì zài zhè cì bǐsài zhōng yíngdé le dì yì míng.",
    "note": "在……中 + 赢得.",
    "pair": "赢得第一名"
   },
   {
    "promptLang": "vi",
    "prompt": "Cô ấy đã giành được sự tôn trọng của mọi người nhờ sự cố gắng.",
    "answer": "她通过努力赢得了大家的尊重。",
    "answerPy": "Tā tōngguò nǔlì yíngdé le dàjiā de zūnzhòng.",
    "note": "通过 + cách thức (HSK 4).",
    "pair": "赢得……的尊重"
   }
  ]
 },
 {
  "n": 31,
  "zh": "叫作",
  "py": "jiàozuò",
  "pos": "Động từ",
  "vn": "gọi là, được gọi là",
  "hv": "khiếu tác",
  "em": "🏷️",
  "lesson": 4,
  "explain": [
   "Gọi là, được gọi là — đưa ra tên gọi của sự vật; hay dùng bị động 被叫作 hoặc câu 把: 把 A 叫作 B."
  ],
  "usage": "被叫作…… · 把……叫作…… · 这种……叫作…….",
  "collo": [
   "被叫作",
   "叫作“梦之队”",
   "这种……叫作……",
   "人们把它叫作……"
  ],
  "colloFull": [
   {
    "zh": "被叫作",
    "py": "Bèi jiàozuò",
    "vn": "được gọi là"
   },
   {
    "zh": "叫作“梦之队”",
    "py": "Jiàozuò “mèng zhī duì”",
    "vn": "gọi là “đội trong mơ”"
   },
   {
    "zh": "这种……叫作……",
    "py": "Zhè zhǒng…… jiàozuò……",
    "vn": "loại … này gọi là …"
   },
   {
    "zh": "人们把它叫作……",
    "py": "Rénmen bǎ tā jiàozuò……",
    "vn": "người ta gọi nó là …"
   }
  ],
  "patterns": [
   {
    "s": "A + 被 + 叫作 + B",
    "m": "A được gọi là B"
   },
   {
    "s": "把 + A + 叫作 + B",
    "m": "Gọi A là B"
   }
  ],
  "ex_zh": "中国乒乓球队非常有名，常在各项比赛中赢得第一名，被叫作“梦之队”。",
  "ex_py": "Zhōngguó pīngpāngqiú duì fēicháng yǒumíng, cháng zài gè xiàng bǐsài zhōng yíngdé dì yì míng, bèi jiàozuò “mèng zhī duì”.",
  "ex_vn": "Đội tuyển bóng bàn Trung Quốc rất nổi tiếng, thường giành hạng nhất trong các giải đấu, được gọi là “đội trong mơ”.",
  "exList": [
   {
    "zh": "中国乒乓球队非常有名，常在各项比赛中赢得第一名，被叫作“梦之队”。",
    "py": "Zhōngguó pīngpāngqiú duì fēicháng yǒumíng, cháng zài gè xiàng bǐsài zhōng yíngdé dì yì míng, bèi jiàozuò “mèng zhī duì”.",
    "vn": "Đội tuyển bóng bàn Trung Quốc rất nổi tiếng, thường giành hạng nhất trong các giải đấu, được gọi là “đội trong mơ”."
   },
   {
    "zh": "这种运动叫作太极拳。",
    "py": "Zhè zhǒng yùndòng jiàozuò tàijíquán.",
    "vn": "Môn thể thao này gọi là Thái Cực quyền."
   }
  ],
  "hanzi": [
   {
    "c": "叫",
    "p": "jiào",
    "type": "左右结构 · Trái-phải",
    "st": 5,
    "ord": "口(khẩu) trái → 니(biến thể) phải",
    "rad": "口 (khẩu – miệng)",
    "mean": "gọi, kêu",
    "tip": "Bộ 口(miệng) → hành động phát ra tiếng để GỌI TÊN ai đó.",
    "cf": "叶 (yè – \"lá cây\", cũng bộ 口\")",
    "w": "叫什么 / 叫做"
   },
   {
    "c": "作",
    "p": "zuò",
    "type": "左右结构 · Trái-phải",
    "st": 7,
    "ord": "亻 trái → 乍 phải",
    "rad": "亻 (nhân)",
    "mean": "làm, sáng tác",
    "tip": "Người 亻 + 乍 → LÀM, SÁNG TÁC. 作者 = người sáng tác; 作用 (Bài 12); 工作; 作业.",
    "cf": "做 (zuò – làm cụ thể)",
    "w": "作者 / 作用 / 工作 / 作业"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Bóng bàn được gọi là “quốc cầu” của Trung Quốc.",
    "answer": "乒乓球被叫作中国的“国球”。",
    "answerPy": "Pīngpāngqiú bèi jiàozuò Zhōngguó de “guó qiú”.",
    "note": "被叫作.",
    "pair": "被叫作……"
   },
   {
    "promptLang": "vi",
    "prompt": "Người ta gọi những người rất mê bóng đá là “fan bóng đá”.",
    "answer": "人们把特别喜欢足球的人叫作“球迷”。",
    "answerPy": "Rénmen bǎ tèbié xǐhuan zúqiú de rén jiàozuò “qiúmí”.",
    "note": "把 + A + 叫作 + B.",
    "pair": "把……叫作……"
   }
  ]
 },
 {
  "n": 32,
  "zh": "梦",
  "py": "mèng",
  "pos": "Danh từ / Động từ",
  "vn": "giấc mơ; mơ, nằm mơ",
  "hv": "mộng",
  "em": "💭",
  "lesson": 4,
  "explain": [
   "Danh từ: giấc mơ (做梦 = nằm mơ); cũng ví điều mong ước. Động từ: mơ thấy (梦见).",
   "梦之队 = “đội trong mơ” — đội mạnh tới mức như trong mơ."
  ],
  "usage": "做梦 · 一个梦 · 梦见…… · 梦之队.",
  "collo": [
   "做梦",
   "一个梦",
   "梦之队",
   "梦见"
  ],
  "colloFull": [
   {
    "zh": "做梦",
    "py": "Zuòmèng",
    "vn": "nằm mơ"
   },
   {
    "zh": "一个梦",
    "py": "Yí gè mèng",
    "vn": "một giấc mơ"
   },
   {
    "zh": "梦之队",
    "py": "Mèng zhī duì",
    "vn": "đội trong mơ"
   },
   {
    "zh": "梦见",
    "py": "Mèngjiàn",
    "vn": "mơ thấy"
   }
  ],
  "patterns": [
   {
    "s": "做 + (一个) + 梦",
    "m": "Nằm mơ"
   },
   {
    "s": "梦见 + ai / gì",
    "m": "Mơ thấy"
   }
  ],
  "ex_zh": "中国乒乓球队非常有名，常在各项比赛中赢得第一名，被叫作“梦之队”。",
  "ex_py": "Zhōngguó pīngpāngqiú duì fēicháng yǒumíng, cháng zài gè xiàng bǐsài zhōng yíngdé dì yì míng, bèi jiàozuò “mèng zhī duì”.",
  "ex_vn": "Đội tuyển bóng bàn Trung Quốc rất nổi tiếng, thường giành hạng nhất trong các giải đấu, được gọi là “đội trong mơ”.",
  "exList": [
   {
    "zh": "中国乒乓球队非常有名，常在各项比赛中赢得第一名，被叫作“梦之队”。",
    "py": "Zhōngguó pīngpāngqiú duì fēicháng yǒumíng, cháng zài gè xiàng bǐsài zhōng yíngdé dì yì míng, bèi jiàozuò “mèng zhī duì”.",
    "vn": "Đội tuyển bóng bàn Trung Quốc rất nổi tiếng, thường giành hạng nhất trong các giải đấu, được gọi là “đội trong mơ”."
   },
   {
    "zh": "昨天晚上我做了一个梦，梦见自己成了乒乓球运动员。",
    "py": "Zuótiān wǎnshang wǒ zuò le yí gè mèng, mèngjiàn zìjǐ chéng le pīngpāngqiú yùndòngyuán.",
    "vn": "Đêm qua tôi nằm mơ, mơ thấy mình trở thành vận động viên bóng bàn."
   }
  ],
  "hanzi": [
   {
    "c": "梦",
    "p": "mèng",
    "type": "上下结构 · Trên-dưới",
    "st": 11,
    "ord": "林 trên → 夕 dưới",
    "rad": "夕 (tịch)",
    "mean": "mơ",
    "tip": "Rừng 林 + đêm 夕 → ban đêm thấy cảnh rừng mờ ảo → MỘNG, MƠ. 做梦, 梦想.",
    "cf": "林 (lín – rừng)",
    "w": "梦 / 做梦 / 梦想 / 梦见"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Đêm qua tôi mơ thấy mình về nhà.",
    "answer": "昨天晚上我梦见自己回家了。",
    "answerPy": "Zuótiān wǎnshang wǒ mèngjiàn zìjǐ huíjiā le.",
    "note": "梦见 + sự việc.",
    "pair": "梦见……"
   },
   {
    "promptLang": "vi",
    "prompt": "Đội này mạnh như vậy, hèn chi được gọi là “đội trong mơ”.",
    "answer": "这个队这么厉害，难怪被叫作“梦之队”。",
    "answerPy": "Zhège duì zhème lìhai, nánguài bèi jiàozuò “mèng zhī duì”.",
    "note": "Ôn 厉害 (Bài 6 · điểm 1).",
    "pair": "难怪……"
   }
  ]
 },
 {
  "n": 33,
  "zh": "不断",
  "py": "búduàn",
  "pos": "Phó từ / Động từ",
  "vn": "không ngừng, liên tục",
  "hv": "bất đoạn",
  "em": "🔄",
  "lesson": 4,
  "explain": [
   "Phó từ: không ngừng, liên tục — 不断 + động từ (thường hai âm tiết): 不断提高, 不断增加, 不断进步.",
   "Động từ: không dứt (笑声不断 = tiếng cười không dứt). 不 đọc thanh 2 vì đứng trước thanh 4 (断 duàn)."
  ],
  "usage": "不断提高 · 不断增加 · 不断进步 · 不断努力.",
  "collo": [
   "不断提高",
   "不断增加",
   "不断进步",
   "不断努力"
  ],
  "colloFull": [
   {
    "zh": "不断提高",
    "py": "Búduàn tígāo",
    "vn": "không ngừng nâng cao"
   },
   {
    "zh": "不断增加",
    "py": "Búduàn zēngjiā",
    "vn": "liên tục tăng"
   },
   {
    "zh": "不断进步",
    "py": "Búduàn jìnbù",
    "vn": "không ngừng tiến bộ"
   },
   {
    "zh": "不断努力",
    "py": "Búduàn nǔlì",
    "vn": "không ngừng cố gắng"
   }
  ],
  "patterns": [
   {
    "s": "不断 + V (hai âm tiết)",
    "m": "不断提高 / 不断发展"
   }
  ],
  "ex_zh": "为了不断提高自己的水平，队员们每天都要进行严格的训练。",
  "ex_py": "Wèile búduàn tígāo zìjǐ de shuǐpíng, duìyuánmen měitiān dōu yào jìnxíng yángé de xùnliàn.",
  "ex_vn": "Để không ngừng nâng cao trình độ của mình, các đội viên ngày nào cũng phải tập luyện nghiêm ngặt.",
  "exList": [
   {
    "zh": "为了不断提高自己的水平，队员们每天都要进行严格的训练。",
    "py": "Wèile búduàn tígāo zìjǐ de shuǐpíng, duìyuánmen měitiān dōu yào jìnxíng yángé de xùnliàn.",
    "vn": "Để không ngừng nâng cao trình độ của mình, các đội viên ngày nào cũng phải tập luyện nghiêm ngặt."
   },
   {
    "zh": "公司给我们的任务不断增加，我们越来越忙了。",
    "py": "Gōngsī gěi wǒmen de rènwu búduàn zēngjiā, wǒmen yuèláiyuè máng le.",
    "vn": "Nhiệm vụ công ty giao cho chúng tôi không ngừng tăng lên, chúng tôi ngày càng bận."
   }
  ],
  "hanzi": [
   {
    "c": "不",
    "p": "bù",
    "type": "象形字 · Chữ tượng hình",
    "st": 4,
    "ord": "ngang → phẩy → sổ → chấm",
    "rad": "一 (nhất)",
    "mean": "không",
    "tip": "Hình rễ cây còn nằm dưới mặt đất, chưa mọc lên → \"không\". Trong 不用, 不 đọc bú (đứng trước thanh 4).",
    "cf": "下 xià — nét cuối là chấm, không có nét phẩy",
    "w": "不用 / 不客气"
   },
   {
    "c": "断",
    "p": "duàn",
    "type": "左右结构 · Trái-phải (giản thể)",
    "st": 11,
    "ord": "米+断 (biến thể)",
    "rad": "斤 (cân – rìu)",
    "mean": "cắt, quyết định",
    "tip": "Bộ 斤 (rìu, dùng để CẮT ĐỨT) → hành động CẮT DỨT KHOÁT, mở rộng thành QUYẾT ĐOÁN, ĐÁNH GIÁ (phán 判 + 断 = phân định rõ ràng).",
    "cf": "断 dễ nhầm với 继 (jì – \"tiếp tục\")",
    "w": "判断 / 断定 / 不断"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Chúng ta phải không ngừng học kiến thức mới.",
    "answer": "我们要不断学习新知识。",
    "answerPy": "Wǒmen yào búduàn xuéxí xīn zhīshi.",
    "note": "不断 + V.",
    "pair": "不断 + V"
   },
   {
    "promptLang": "vi",
    "prompt": "Anh ấy vì không ngừng nâng cao trình độ mà ngày nào cũng kiên trì tập luyện.",
    "answer": "他为了不断提高水平而每天坚持训练。",
    "answerPy": "Tā wèile búduàn tígāo shuǐpíng ér měitiān jiānchí xùnliàn.",
    "note": "Ôn 为了……而…… (Bài 12 · điểm 4).",
    "pair": "为了……而……"
   }
  ]
 },
 {
  "n": 34,
  "zh": "队员",
  "py": "duìyuán",
  "pos": "Danh từ",
  "vn": "đội viên, thành viên đội",
  "hv": "đội viên",
  "em": "🧑‍🤝‍🧑",
  "lesson": 4,
  "explain": [
   "Thành viên của một đội (đội bóng, đội tuyển…); số nhiều: 队员们."
  ],
  "usage": "队员们 · 新队员 · 老队员 · 十二名队员.",
  "collo": [
   "队员们",
   "新队员",
   "老队员",
   "乒乓球队员"
  ],
  "colloFull": [
   {
    "zh": "队员们",
    "py": "Duìyuánmen",
    "vn": "các đội viên"
   },
   {
    "zh": "新队员",
    "py": "Xīn duìyuán",
    "vn": "đội viên mới"
   },
   {
    "zh": "老队员",
    "py": "Lǎo duìyuán",
    "vn": "đội viên lâu năm"
   },
   {
    "zh": "乒乓球队员",
    "py": "Pīngpāngqiú duìyuán",
    "vn": "đội viên bóng bàn"
   }
  ],
  "patterns": [
   {
    "s": "Số + 名 / 个 + 队员",
    "m": "Lượng từ 名 trang trọng hơn"
   }
  ],
  "ex_zh": "为了不断提高自己的水平，队员们每天都要进行严格的训练。",
  "ex_py": "Wèile búduàn tígāo zìjǐ de shuǐpíng, duìyuánmen měitiān dōu yào jìnxíng yángé de xùnliàn.",
  "ex_vn": "Để không ngừng nâng cao trình độ của mình, các đội viên ngày nào cũng phải tập luyện nghiêm ngặt.",
  "exList": [
   {
    "zh": "为了不断提高自己的水平，队员们每天都要进行严格的训练。",
    "py": "Wèile búduàn tígāo zìjǐ de shuǐpíng, duìyuánmen měitiān dōu yào jìnxíng yángé de xùnliàn.",
    "vn": "Để không ngừng nâng cao trình độ của mình, các đội viên ngày nào cũng phải tập luyện nghiêm ngặt."
   },
   {
    "zh": "我们队一共有十二名队员。",
    "py": "Wǒmen duì yígòng yǒu shí èr míng duìyuán.",
    "vn": "Đội chúng tôi có tổng cộng mười hai đội viên."
   }
  ],
  "hanzi": [
   {
    "c": "队",
    "p": "duì",
    "type": "左右结构 · Trái-phải",
    "st": 4,
    "ord": "阝 trái → 人 phải",
    "rad": "阝 (phụ)",
    "mean": "đội, hàng",
    "tip": "Giản thể của 隊 → ĐỘI, HÀNG. 排队, 队员 (thành viên đội), 足球队.",
    "cf": "认 (rèn – nhận)",
    "w": "排队 / 队员 / 球队"
   },
   {
    "c": "员",
    "p": "yuán",
    "type": "会意字 · Chữ hội ý",
    "st": 7,
    "ord": "口 → 贝",
    "rad": "口 (khẩu – miệng)",
    "mean": "người, viên (người làm việc)",
    "tip": "Trên 口, dưới 贝 (tiền): người làm việc nhận tiền công → nhân viên. Luôn đứng sau từ khác: 服务员, 售货员 (HSK1 Bài 10).",
    "cf": "贝 bèi — không có 口 ở trên",
    "w": "服务员 / 售货员"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Các đội viên giúp đỡ lẫn nhau.",
    "answer": "队员们互相帮助。",
    "answerPy": "Duìyuánmen hùxiāng bāngzhù.",
    "note": "队员们 + V.",
    "pair": "队员们……"
   },
   {
    "promptLang": "vi",
    "prompt": "Huấn luyện viên khen đội viên mới chơi rất tốt.",
    "answer": "教练表扬新队员打得很好。",
    "answerPy": "Jiàoliàn biǎoyáng xīn duìyuán dǎ de hěn hǎo.",
    "note": "Câu kiêm ngữ 表扬 (Bài 17 · điểm 3).",
    "pair": "表扬 + ai + ……"
   }
  ]
 },
 {
  "n": 35,
  "zh": "训练",
  "py": "xùnliàn",
  "pos": "Động từ",
  "vn": "huấn luyện, tập luyện",
  "hv": "huấn luyện",
  "em": "⏱️",
  "lesson": 4,
  "explain": [
   "Huấn luyện, luyện tập có kế hoạch, có hệ thống (thể thao, quân đội…); hay dùng 进行 + 训练. So với 练习 (luyện tập nói chung), 训练 chuyên nghiệp, nghiêm ngặt hơn."
  ],
  "usage": "进行训练 · 严格的训练 · 训练队员 · 每天训练.",
  "collo": [
   "严格的训练",
   "进行训练",
   "训练队员",
   "每天训练"
  ],
  "colloFull": [
   {
    "zh": "严格的训练",
    "py": "Yángé de xùnliàn",
    "vn": "sự huấn luyện nghiêm ngặt"
   },
   {
    "zh": "进行训练",
    "py": "Jìnxíng xùnliàn",
    "vn": "tiến hành huấn luyện"
   },
   {
    "zh": "训练队员",
    "py": "Xùnliàn duìyuán",
    "vn": "huấn luyện đội viên"
   },
   {
    "zh": "每天训练",
    "py": "Měitiān xùnliàn",
    "vn": "tập luyện mỗi ngày"
   }
  ],
  "patterns": [
   {
    "s": "进行 + (严格的) + 训练",
    "m": "Cách nói trang trọng"
   },
   {
    "s": "训练 + ai",
    "m": "Huấn luyện ai"
   }
  ],
  "ex_zh": "为了不断提高自己的水平，队员们每天都要进行严格的训练。",
  "ex_py": "Wèile búduàn tígāo zìjǐ de shuǐpíng, duìyuánmen měitiān dōu yào jìnxíng yángé de xùnliàn.",
  "ex_vn": "Để không ngừng nâng cao trình độ của mình, các đội viên ngày nào cũng phải tập luyện nghiêm ngặt.",
  "exList": [
   {
    "zh": "为了不断提高自己的水平，队员们每天都要进行严格的训练。",
    "py": "Wèile búduàn tígāo zìjǐ de shuǐpíng, duìyuánmen měitiān dōu yào jìnxíng yángé de xùnliàn.",
    "vn": "Để không ngừng nâng cao trình độ của mình, các đội viên ngày nào cũng phải tập luyện nghiêm ngặt."
   },
   {
    "zh": "运动员每天早上六点就开始训练。",
    "py": "Yùndòngyuán měitiān zǎoshang liù diǎn jiù kāishǐ xùnliàn.",
    "vn": "Vận động viên sáng nào cũng bắt đầu tập luyện từ sáu giờ."
   }
  ],
  "hanzi": [
   {
    "c": "训",
    "p": "xùn",
    "type": "形声字 · Chữ hình thanh",
    "st": 5,
    "ord": "讠 → 川",
    "rad": "讠 (ngôn – lời nói)",
    "mean": "dạy bảo, huấn luyện",
    "tip": "Lời nói (讠) + 川 (chuān, sông — gợi âm): lời dạy chảy đều như dòng sông, uốn nắn người học → 训练 (huấn luyện), 培训 (đào tạo).",
    "cf": "川 chuān (sông) — không có 讠; 顺 shùn (thuận) — bên phải là 页",
    "w": "训练 / 培训 / 教训"
   },
   {
    "c": "练",
    "p": "liàn",
    "type": "形声字 · Chữ hình thanh",
    "st": 8,
    "ord": "纟 → phần bên phải (giống 东 nhưng nét cuối khác)",
    "rad": "纟 (mịch – sợi tơ)",
    "mean": "luyện, tập",
    "tip": "纟 (sợi tơ) + phần chỉ âm: ngày xưa luộc tơ cho trắng mềm phải làm đi làm lại → luyện tập. 练 và 炼 (锻炼 – HSK3 Bài 5) cùng đọc liàn.",
    "cf": "炼 liàn (锻炼) — bên trái là 火",
    "w": "练 / 练习 / 练球"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Huấn luyện viên huấn luyện đội viên rất nghiêm khắc.",
    "answer": "教练训练队员非常严格。",
    "answerPy": "Jiàoliàn xùnliàn duìyuán fēicháng yángé.",
    "note": "训练 + ai.",
    "pair": "训练 + ai"
   },
   {
    "promptLang": "vi",
    "prompt": "Cho dù trời nóng đến mấy, các đội viên cũng kiên trì tập luyện.",
    "answer": "就是天气再热，队员们也坚持训练。",
    "answerPy": "Jiùshì tiānqì zài rè, duìyuánmen yě jiānchí xùnliàn.",
    "note": "Ôn 就是……也…… (Bài 11 · điểm 2).",
    "pair": "就是再……也……"
   }
  ]
 },
 {
  "n": 36,
  "zh": "球队",
  "py": "qiúduì",
  "pos": "Danh từ",
  "vn": "đội bóng",
  "hv": "cầu đội",
  "em": "⚽",
  "lesson": 4,
  "explain": [
   "Đội chơi các môn bóng (bóng đá, bóng rổ, bóng bàn…)."
  ],
  "usage": "一支球队 · 喜欢的球队 · 为球队赢下比赛.",
  "collo": [
   "我们球队",
   "喜欢的球队",
   "足球队",
   "为球队赢下比赛"
  ],
  "colloFull": [
   {
    "zh": "我们球队",
    "py": "Wǒmen qiúduì",
    "vn": "đội bóng chúng tôi"
   },
   {
    "zh": "喜欢的球队",
    "py": "Xǐhuan de qiúduì",
    "vn": "đội bóng yêu thích"
   },
   {
    "zh": "足球队",
    "py": "Zú qiúduì",
    "vn": "đội bóng đá"
   },
   {
    "zh": "为球队赢下比赛",
    "py": "Wèi qiúduì yíng xià bǐsài",
    "vn": "thắng trận vì đội"
   }
  ],
  "patterns": [
   {
    "s": "为 + 球队 + V",
    "m": "Vì đội bóng mà …"
   }
  ],
  "ex_zh": "正因为这样，球队才能在比赛中取得更好的成绩，获得更多球迷的喜爱。",
  "ex_py": "Zhèng yīnwèi zhèyàng, qiúduì cáinéng zài bǐsài zhōng qǔdé gèng hǎo de chéngjì, huòdé gèng duō qiúmí de xǐ'ài.",
  "ex_vn": "Chính vì vậy, đội mới có thể đạt thành tích tốt hơn trong thi đấu, nhận được sự yêu mến của nhiều người hâm mộ hơn.",
  "exList": [
   {
    "zh": "正因为这样，球队才能在比赛中取得更好的成绩，获得更多球迷的喜爱。",
    "py": "Zhèng yīnwèi zhèyàng, qiúduì cáinéng zài bǐsài zhōng qǔdé gèng hǎo de chéngjì, huòdé gèng duō qiúmí de xǐ'ài.",
    "vn": "Chính vì vậy, đội mới có thể đạt thành tích tốt hơn trong thi đấu, nhận được sự yêu mến của nhiều người hâm mộ hơn."
   },
   {
    "zh": "A：昨天的比赛结果怎么样？B：三比二，我们球队最后赢了。",
    "py": "A: zuótiān de bǐsài jiéguǒ zěnmeyàng? B: sān bǐ èr, wǒmen qiúduì zuìhòu yíng le.",
    "vn": "A: Kết quả trận đấu hôm qua thế nào? B: Ba – hai, cuối cùng đội chúng tôi thắng."
   }
  ],
  "hanzi": [
   {
    "c": "球",
    "p": "qiú",
    "type": "左右结构 · Trái-phải",
    "st": 11,
    "ord": "王 trái → 求 phải",
    "rad": "王 (ngọc)",
    "mean": "quả cầu",
    "tip": "Bộ ngọc 王 + 求(biểu âm) → viên ngọc tròn → QUẢ CẦU, BÓNG. 地球 = quả cầu đất = TRÁI ĐẤT.",
    "cf": "求 (qiú – cầu xin)",
    "w": "地球 / 足球 / 篮球"
   },
   {
    "c": "队",
    "p": "duì",
    "type": "左右结构 · Trái-phải",
    "st": 4,
    "ord": "阝 trái → 人 phải",
    "rad": "阝 (phụ)",
    "mean": "đội, hàng",
    "tip": "Giản thể của 隊 → ĐỘI, HÀNG. 排队, 队员 (thành viên đội), 足球队.",
    "cf": "认 (rèn – nhận)",
    "w": "排队 / 队员 / 球队"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Đội bóng bạn thích nhất là đội nào?",
    "answer": "你最喜欢的球队是哪个？",
    "answerPy": "Nǐ zuì xǐhuan de qiúduì shì nǎge?",
    "note": "Câu hỏi với 哪个.",
    "pair": "最喜欢的球队"
   },
   {
    "promptLang": "vi",
    "prompt": "Đội bóng của chúng tôi thua rồi, thế mà người hâm mộ vẫn rất ủng hộ.",
    "answer": "我们球队输了，球迷们却还是很支持。",
    "answerPy": "Wǒmen qiúduì shū le, qiúmímen què háishi hěn zhīchí.",
    "note": "Ôn 却 (Bài 16 · điểm 4).",
    "pair": "……，却……"
   }
  ]
 },
 {
  "n": 37,
  "zh": "球迷",
  "py": "qiúmí",
  "pos": "Danh từ",
  "vn": "người hâm mộ (môn bóng), fan bóng",
  "hv": "cầu mê",
  "em": "📣",
  "lesson": 4,
  "explain": [
   "Người say mê xem các môn bóng (bóng đá, bóng rổ, bóng bàn…); 迷 = say mê: 歌迷 (fan ca nhạc), 影迷 (fan điện ảnh)."
  ],
  "usage": "足球迷 · 球迷们 · 获得球迷的喜爱.",
  "collo": [
   "足球迷",
   "球迷们",
   "球迷的喜爱",
   "老球迷"
  ],
  "colloFull": [
   {
    "zh": "足球迷",
    "py": "Zúqiúmí",
    "vn": "fan bóng đá"
   },
   {
    "zh": "球迷们",
    "py": "Qiúmímen",
    "vn": "các fan"
   },
   {
    "zh": "球迷的喜爱",
    "py": "Qiúmí de xǐ'ài",
    "vn": "sự yêu mến của người hâm mộ"
   },
   {
    "zh": "老球迷",
    "py": "Lǎo qiúmí",
    "vn": "fan lâu năm"
   }
  ],
  "patterns": [
   {
    "s": "Môn + 迷",
    "m": "足球迷 / 篮球迷"
   }
  ],
  "ex_zh": "正因为这样，球队才能在比赛中取得更好的成绩，获得更多球迷的喜爱。",
  "ex_py": "Zhèng yīnwèi zhèyàng, qiúduì cáinéng zài bǐsài zhōng qǔdé gèng hǎo de chéngjì, huòdé gèng duō qiúmí de xǐ'ài.",
  "ex_vn": "Chính vì vậy, đội mới có thể đạt thành tích tốt hơn trong thi đấu, nhận được sự yêu mến của nhiều người hâm mộ hơn.",
  "exList": [
   {
    "zh": "正因为这样，球队才能在比赛中取得更好的成绩，获得更多球迷的喜爱。",
    "py": "Zhèng yīnwèi zhèyàng, qiúduì cáinéng zài bǐsài zhōng qǔdé gèng hǎo de chéngjì, huòdé gèng duō qiúmí de xǐ'ài.",
    "vn": "Chính vì vậy, đội mới có thể đạt thành tích tốt hơn trong thi đấu, nhận được sự yêu mến của nhiều người hâm mộ hơn."
   },
   {
    "zh": "我爸爸是个足球迷，每场比赛都要看。",
    "py": "Wǒ bàba shì gè zúqiúmí, měi chǎng bǐsài dōu yào kàn.",
    "vn": "Bố tôi là fan bóng đá, trận nào cũng phải xem."
   }
  ],
  "hanzi": [
   {
    "c": "球",
    "p": "qiú",
    "type": "左右结构 · Trái-phải",
    "st": 11,
    "ord": "王 trái → 求 phải",
    "rad": "王 (ngọc)",
    "mean": "quả cầu",
    "tip": "Bộ ngọc 王 + 求(biểu âm) → viên ngọc tròn → QUẢ CẦU, BÓNG. 地球 = quả cầu đất = TRÁI ĐẤT.",
    "cf": "求 (qiú – cầu xin)",
    "w": "地球 / 足球 / 篮球"
   },
   {
    "c": "迷",
    "p": "mí",
    "type": "半包围结构 · Nửa bao quanh",
    "st": 9,
    "ord": "米 trong → 辶 bao",
    "rad": "辶 (sước)",
    "mean": "lạc, mê",
    "tip": "Đi 辶 + 米 (hạt gạo rải khắp nơi) → không biết đi hướng nào → LẠC, MÊ. 迷路 = lạc đường; 球迷 = fan bóng đá.",
    "cf": "米 (mǐ – gạo, mét)",
    "w": "迷路 / 球迷 / 迷人"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Người hâm mộ trên khán đài đều rất phấn khích.",
    "answer": "看台上的球迷们都很激动。",
    "answerPy": "Kàntái shàng de qiúmímen dōu hěn jīdòng.",
    "note": "球迷们 + 都…….",
    "pair": "球迷们"
   },
   {
    "promptLang": "vi",
    "prompt": "Ngay cả bà tôi cũng là fan bóng đá, ông tôi thì càng khỏi phải nói.",
    "answer": "连我奶奶都是足球迷，我爷爷就更不用说了。",
    "answerPy": "Lián wǒ nǎinai dōu shì zúqiúmí, wǒ yéye jiù gèng búyòng shuō le.",
    "note": "连……都……，……更…… (Bài 17 · điểm 4).",
    "pair": "连……都……，……更……"
   }
  ]
 },
 {
  "n": 38,
  "zh": "梦想",
  "py": "mèngxiǎng",
  "pos": "Danh từ / Động từ",
  "vn": "ước mơ; mơ ước",
  "hv": "mộng tưởng",
  "em": "🌟",
  "lesson": 4,
  "explain": [
   "Danh từ: ước mơ, hoài bão (nghĩa tích cực). Động từ: mơ ước (梦想成为……). ⚠ Không hiểu theo “mộng tưởng” (ảo tưởng) trong tiếng Việt."
  ],
  "usage": "有一个梦想 · ……的梦想是…… · 实现梦想.",
  "collo": [
   "有一个梦想",
   "实现梦想",
   "我的梦想",
   "梦想成为……"
  ],
  "colloFull": [
   {
    "zh": "有一个梦想",
    "py": "Yǒu yí gè mèngxiǎng",
    "vn": "có một ước mơ"
   },
   {
    "zh": "实现梦想",
    "py": "Shíxiàn mèngxiǎng",
    "vn": "thực hiện ước mơ"
   },
   {
    "zh": "我的梦想",
    "py": "Wǒ de mèngxiǎng",
    "vn": "ước mơ của tôi"
   },
   {
    "zh": "梦想成为……",
    "py": "Mèngxiǎng chéngwéi……",
    "vn": "mơ ước trở thành …"
   }
  ],
  "patterns": [
   {
    "s": "……的梦想是 + V",
    "m": "Ước mơ của … là …"
   },
   {
    "s": "有一个梦想，那就是……",
    "m": "Có một ước mơ, đó là …"
   }
  ],
  "ex_zh": "许多年轻的乒乓球运动员都有一个梦想，那就是进入国家队，参加世界大赛，为球队赢下比赛。",
  "ex_py": "Xǔduō niánqīng de pīngpāngqiú yùndòngyuán dōu yǒu yí gè mèngxiǎng, nà jiùshì jìnrù guójiāduì, cānjiā shìjiè dàsài, wèi qiúduì yíng xià bǐsài.",
  "ex_vn": "Nhiều vận động viên bóng bàn trẻ đều có một ước mơ, đó là vào đội tuyển quốc gia, tham gia các giải đấu lớn thế giới, thắng trận vì đội.",
  "exList": [
   {
    "zh": "许多年轻的乒乓球运动员都有一个梦想，那就是进入国家队，参加世界大赛，为球队赢下比赛。",
    "py": "Xǔduō niánqīng de pīngpāngqiú yùndòngyuán dōu yǒu yí gè mèngxiǎng, nà jiùshì jìnrù guójiāduì, cānjiā shìjiè dàsài, wèi qiúduì yíng xià bǐsài.",
    "vn": "Nhiều vận động viên bóng bàn trẻ đều có một ước mơ, đó là vào đội tuyển quốc gia, tham gia các giải đấu lớn thế giới, thắng trận vì đội."
   },
   {
    "zh": "A：你儿子以后想做什么工作？B：他的梦想是当一名医生。",
    "py": "A: nǐ érzi yǐhòu xiǎng zuò shénme gōngzuò? B: tā de mèngxiǎng shì dāng yì míng yīshēng.",
    "vn": "A: Con trai chị sau này muốn làm nghề gì? B: Ước mơ của nó là làm bác sĩ."
   }
  ],
  "hanzi": [
   {
    "c": "梦",
    "p": "mèng",
    "type": "上下结构 · Trên-dưới",
    "st": 11,
    "ord": "林 trên → 夕 dưới",
    "rad": "夕 (tịch)",
    "mean": "mơ",
    "tip": "Rừng 林 + đêm 夕 → ban đêm thấy cảnh rừng mờ ảo → MỘNG, MƠ. 做梦, 梦想.",
    "cf": "林 (lín – rừng)",
    "w": "梦 / 做梦 / 梦想 / 梦见"
   },
   {
    "c": "想",
    "p": "xiǎng",
    "type": "上下结构 · Trên-dưới",
    "st": 13,
    "ord": "相 trên → 心 dưới",
    "rad": "心 (tâm)",
    "mean": "nghĩ, mong muốn",
    "tip": "Bộ tâm 心 (suy nghĩ trong lòng) + 相(biểu âm) → NGHĨ TỚI, MONG MUỐN, kết hợp 理(lý lẽ, đạo lý) thành 理想 = LÝ TƯỞNG (điều mong muốn hợp lý lẽ).",
    "cf": "相 (xiàng – \"tướng mạo\", không có bộ 心\")",
    "w": "理想 / 思想 / 梦想"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Ước mơ của tôi là đi du lịch khắp thế giới.",
    "answer": "我的梦想是去世界各地旅游。",
    "answerPy": "Wǒ de mèngxiǎng shì qù shìjiè gèdì lǚyóu.",
    "note": "……的梦想是…….",
    "pair": "……的梦想是……"
   },
   {
    "promptLang": "vi",
    "prompt": "Vì ước mơ, cô ấy ngày nào cũng kiên trì tập luyện.",
    "answer": "为了梦想，她每天坚持训练。",
    "answerPy": "Wèile mèngxiǎng, tā měitiān jiānchí xùnliàn.",
    "note": "为了 + mục đích (HSK 3).",
    "pair": "为了……"
   }
  ]
 },
 {
  "n": 39,
  "zh": "大赛",
  "py": "dàsài",
  "pos": "Danh từ",
  "vn": "giải đấu lớn, cuộc thi lớn",
  "hv": "đại tái",
  "em": "🥇",
  "lesson": 4,
  "explain": [
   "Cuộc thi, giải đấu lớn và quan trọng (cấp quốc gia, thế giới): 世界大赛, 国际大赛."
  ],
  "usage": "参加大赛 · 世界大赛 · 在大赛中…….",
  "collo": [
   "世界大赛",
   "参加大赛",
   "国际大赛",
   "在大赛中"
  ],
  "colloFull": [
   {
    "zh": "世界大赛",
    "py": "Shìjiè dàsài",
    "vn": "giải đấu thế giới"
   },
   {
    "zh": "参加大赛",
    "py": "Cānjiā dàsài",
    "vn": "tham gia giải đấu lớn"
   },
   {
    "zh": "国际大赛",
    "py": "Guójì dàsài",
    "vn": "giải đấu quốc tế"
   },
   {
    "zh": "在大赛中",
    "py": "Zài dàsài zhōng",
    "vn": "trong giải đấu lớn"
   }
  ],
  "patterns": [
   {
    "s": "在 + 大赛 + 中 + V",
    "m": "Trong giải đấu lớn …"
   }
  ],
  "ex_zh": "许多年轻的乒乓球运动员都有一个梦想，那就是进入国家队，参加世界大赛，为球队赢下比赛。",
  "ex_py": "Xǔduō niánqīng de pīngpāngqiú yùndòngyuán dōu yǒu yí gè mèngxiǎng, nà jiùshì jìnrù guójiāduì, cānjiā shìjiè dàsài, wèi qiúduì yíng xià bǐsài.",
  "ex_vn": "Nhiều vận động viên bóng bàn trẻ đều có một ước mơ, đó là vào đội tuyển quốc gia, tham gia các giải đấu lớn thế giới, thắng trận vì đội.",
  "exList": [
   {
    "zh": "许多年轻的乒乓球运动员都有一个梦想，那就是进入国家队，参加世界大赛，为球队赢下比赛。",
    "py": "Xǔduō niánqīng de pīngpāngqiú yùndòngyuán dōu yǒu yí gè mèngxiǎng, nà jiùshì jìnrù guójiāduì, cānjiā shìjiè dàsài, wèi qiúduì yíng xià bǐsài.",
    "vn": "Nhiều vận động viên bóng bàn trẻ đều có một ước mơ, đó là vào đội tuyển quốc gia, tham gia các giải đấu lớn thế giới, thắng trận vì đội."
   },
   {
    "zh": "参加世界大赛以前，队员们训练得更努力了。",
    "py": "Cānjiā shìjiè dàsài yǐqián, duìyuánmen xùnliàn de gèng nǔlì le.",
    "vn": "Trước khi tham gia giải đấu thế giới, các đội viên tập luyện càng chăm chỉ hơn."
   }
  ],
  "hanzi": [
   {
    "c": "大",
    "p": "dà",
    "type": "独体字 · Chữ đơn",
    "st": 3,
    "ord": "nét liền",
    "rad": "大 (đại)",
    "mean": "lớn (đọc \"dài\" trong 大夫)",
    "tip": "大 thường đọc \"dà\" (lớn), nhưng riêng trong từ 大夫 (bác sĩ) đọc là \"dài\" — một trường hợp đặc biệt cần ghi nhớ.",
    "cf": "大 (dà – \"lớn\", đọc khác trong đa số trường hợp)",
    "w": "大夫 / 大人 / 大夫（专指医生）"
   },
   {
    "c": "赛",
    "p": "sài",
    "type": "上下结构 · Trên-dưới",
    "st": 14,
    "ord": "宀+夫 trên → 贝 dưới",
    "rad": "贝 (bối – tiền của, vật quý)",
    "mean": "thi đấu, đua tài",
    "tip": "宀(mái nhà) trên + 贝(vật quý) dưới → tổ chức trong nhà để giành phần thưởng quý giá = THI ĐẤU.",
    "cf": "塞 (sāi – \"nhét, lấp\", cũng có 宀 trên\")",
    "w": "比赛 / 参加比赛"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Anh ấy từng tham gia nhiều giải đấu lớn.",
    "answer": "他参加过很多次大赛。",
    "answerPy": "Tā cānjiā guò hěn duō cì dàsài.",
    "note": "V + 过 + số lần.",
    "pair": "参加过……大赛"
   },
   {
    "promptLang": "vi",
    "prompt": "Trong giải đấu lớn lần này, cô ấy giành được hạng nhì.",
    "answer": "在这次大赛中，她赢得了第二名。",
    "answerPy": "Zài zhè cì dàsài zhōng, tā yíngdé le dì èr míng.",
    "note": "在……中 + 赢得.",
    "pair": "在……大赛中"
   }
  ]
 },
 {
  "n": 40,
  "zh": "赢",
  "py": "yíng",
  "pos": "Động từ",
  "vn": "thắng",
  "hv": "doanh",
  "em": "✌️",
  "lesson": 4,
  "explain": [
   "Thắng (trong thi đấu, trò chơi, cá cược); trái nghĩa 输 (thua). 赢 + 比赛 / đối thủ; 赢下比赛 = thắng trận."
  ],
  "usage": "赢了 · 赢下比赛 · A 赢了 B · 输赢.",
  "collo": [
   "赢了",
   "赢下比赛",
   "赢了对手",
   "输赢"
  ],
  "colloFull": [
   {
    "zh": "赢了",
    "py": "Yíng le",
    "vn": "thắng rồi"
   },
   {
    "zh": "赢下比赛",
    "py": "Yíng xià bǐsài",
    "vn": "thắng trận"
   },
   {
    "zh": "赢了对手",
    "py": "Yíng le duìshǒu",
    "vn": "thắng đối thủ"
   },
   {
    "zh": "输赢",
    "py": "Shūyíng",
    "vn": "thắng thua"
   }
  ],
  "patterns": [
   {
    "s": "A + 赢了 + B",
    "m": "A thắng B"
   },
   {
    "s": "赢 ↔ 输",
    "m": "Thắng ↔ thua"
   }
  ],
  "ex_zh": "许多年轻的乒乓球运动员都有一个梦想，那就是进入国家队，参加世界大赛，为球队赢下比赛。",
  "ex_py": "Xǔduō niánqīng de pīngpāngqiú yùndòngyuán dōu yǒu yí gè mèngxiǎng, nà jiùshì jìnrù guójiāduì, cānjiā shìjiè dàsài, wèi qiúduì yíng xià bǐsài.",
  "ex_vn": "Nhiều vận động viên bóng bàn trẻ đều có một ước mơ, đó là vào đội tuyển quốc gia, tham gia các giải đấu lớn thế giới, thắng trận vì đội.",
  "exList": [
   {
    "zh": "许多年轻的乒乓球运动员都有一个梦想，那就是进入国家队，参加世界大赛，为球队赢下比赛。",
    "py": "Xǔduō niánqīng de pīngpāngqiú yùndòngyuán dōu yǒu yí gè mèngxiǎng, nà jiùshì jìnrù guójiāduì, cānjiā shìjiè dàsài, wèi qiúduì yíng xià bǐsài.",
    "vn": "Nhiều vận động viên bóng bàn trẻ đều có một ước mơ, đó là vào đội tuyển quốc gia, tham gia các giải đấu lớn thế giới, thắng trận vì đội."
   },
   {
    "zh": "三比二，我们球队最后赢了。",
    "py": "Sān bǐ èr, wǒmen qiúduì zuìhòu yíng le.",
    "vn": "Ba – hai, cuối cùng đội chúng tôi thắng."
   }
  ],
  "hanzi": [
   {
    "c": "赢",
    "p": "yíng",
    "type": "上下结构 · Trên-dưới",
    "st": 17,
    "ord": "亡+口+月 trên → 贝+凡 dưới",
    "rad": "贝 (bối – tiền của)",
    "mean": "thắng",
    "tip": "Chữ phức tạp kết hợp nhiều bộ, liên quan đến việc GIÀNH ĐƯỢC lợi ích (贝 tiền của) → mở rộng thành THẮNG (trong thi đấu/cạnh tranh).",
    "cf": "嬴 (yíng – họ, tự dạng gần giống nhưng có bộ 女\")",
    "w": "赢 / 赢了 / 输赢"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Trận đấu hôm qua chúng tôi thắng ba – một.",
    "answer": "昨天的比赛我们三比一赢了。",
    "answerPy": "Zuótiān de bǐsài wǒmen sān bǐ yì yíng le.",
    "note": "Tỉ số: 三比一.",
    "pair": "三比一赢了"
   },
   {
    "promptLang": "vi",
    "prompt": "Bất kể thắng hay thua, mọi người đều rất vui.",
    "answer": "不管赢还是输，大家都很开心。",
    "answerPy": "Bùguǎn yíng háishi shū, dàjiā dōu hěn kāixīn.",
    "note": "Ôn 不管……都…… (Bài 8 · điểm 1).",
    "pair": "不管……都……"
   }
  ]
 },
 {
  "n": 41,
  "zh": "连",
  "py": "lián",
  "pos": "Giới từ",
  "vn": "ngay cả, đến cả",
  "hv": "liên",
  "em": "‼️",
  "lesson": 4,
  "explain": [
   "Giới từ: ngay cả, đến cả — nêu một ví dụ cực đoan, phía sau bắt buộc có 也 / 都: 连老人都坚持打球.",
   "(Động từ 连 = nối liền: 连在一起 — nghĩa khác.)"
  ],
  "usage": "连……也…… · 连……都…… · 连饭都没吃 · 连一句话也不说.",
  "collo": [
   "连……也……",
   "连……都……",
   "连饭都没吃",
   "连一句话也不说"
  ],
  "colloFull": [
   {
    "zh": "连……也……",
    "py": "Lián…… yě……",
    "vn": "ngay cả … cũng …"
   },
   {
    "zh": "连……都……",
    "py": "Lián…… dōu……",
    "vn": "đến cả … đều …"
   },
   {
    "zh": "连饭都没吃",
    "py": "Lián fàn dōu méi chī",
    "vn": "đến cơm cũng chưa ăn"
   },
   {
    "zh": "连一句话也不说",
    "py": "Lián yí jù huà yě bù shuō",
    "vn": "đến một câu cũng không nói"
   }
  ],
  "patterns": [
   {
    "s": "连 + N / V + 也 / 都 + ……",
    "m": "Ngay cả … cũng …"
   }
  ],
  "ex_zh": "连一些年龄比较大的老人都坚持打球，年轻人更是把它作为一种日常锻炼的方式。",
  "ex_py": "Lián yìxiē niánlíng bǐjiào dà de lǎorén dōu jiānchí dǎqiú, niánqīngrén gèng shì bǎ tā zuòwéi yì zhǒng rìcháng duànliàn de fāngshì.",
  "ex_vn": "Ngay cả một số người già lớn tuổi cũng kiên trì chơi bóng, người trẻ thì càng coi nó là một cách rèn luyện hằng ngày.",
  "exList": [
   {
    "zh": "连一些年龄比较大的老人都坚持打球，年轻人更是把它作为一种日常锻炼的方式。",
    "py": "Lián yìxiē niánlíng bǐjiào dà de lǎorén dōu jiānchí dǎqiú, niánqīngrén gèng shì bǎ tā zuòwéi yì zhǒng rìcháng duànliàn de fāngshì.",
    "vn": "Ngay cả một số người già lớn tuổi cũng kiên trì chơi bóng, người trẻ thì càng coi nó là một cách rèn luyện hằng ngày."
   },
   {
    "zh": "今天早上他连脸都没来得及洗，更没有时间准备早饭了。",
    "py": "Jīntiān zǎoshang tā lián liǎn dōu méi láidejí xǐ, gèng méiyǒu shíjiān zhǔnbèi zǎofàn le.",
    "vn": "Sáng nay cậu ấy đến mặt còn không kịp rửa, càng không có thời gian chuẩn bị bữa sáng."
   }
  ],
  "hanzi": [
   {
    "c": "连",
    "p": "lián",
    "type": "半包围结构 · Bán bao vây",
    "st": 7,
    "ord": "辶 bao ngoài → 车 trong",
    "rad": "辶 (sước – đi)",
    "mean": "liên tục, ngay cả",
    "tip": "Bộ đi 辶 + 车(xe, biểu ý nối tiếp nhau) → LIÊN TỤC, KẾT NỐI, mở rộng thành giới từ NGAY CẢ (nhấn mạnh trường hợp cực đoan).",
    "cf": "莲 (lián – \"hoa sen\", bộ 艹\")",
    "w": "连……都/也…… / 连接 / 连忙"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Câu hỏi này đến trẻ con cũng biết.",
    "answer": "这个问题连孩子都知道。",
    "answerPy": "Zhège wèntí lián háizi dōu zhīdao.",
    "note": "连 + chủ ngữ + 都.",
    "pair": "连……都……"
   },
   {
    "promptLang": "vi",
    "prompt": "Anh ấy bận đến mức ngay cả cơm trưa cũng không có thời gian ăn.",
    "answer": "他忙得连午饭都没时间吃。",
    "answerPy": "Tā máng de lián wǔfàn dōu méi shíjiān chī.",
    "note": "Ôn bổ ngữ trạng thái 得 (HSK 3).",
    "pair": "V得 + 连……都……"
   }
  ]
 }
];
var wuData = [
 {
  "img": "/images/hsk4v3/bai-17/wu-A.webp",
  "label": "酸奶",
  "py": "suānnǎi",
  "letter": "A"
 },
 {
  "img": "/images/hsk4v3/bai-17/wu-B.webp",
  "label": "饼干",
  "py": "bǐnggān",
  "letter": "B"
 },
 {
  "img": "/images/hsk4v3/bai-17/wu-C.webp",
  "label": "果汁",
  "py": "guǒzhī",
  "letter": "C"
 },
 {
  "img": "/images/hsk4v3/bai-17/wu-D.webp",
  "label": "教练",
  "py": "jiàoliàn",
  "letter": "D"
 },
 {
  "img": "/images/hsk4v3/bai-17/wu-E.webp",
  "label": "操场",
  "py": "cāochǎng",
  "letter": "E"
 },
 {
  "img": "/images/hsk4v3/bai-17/wu-F.webp",
  "label": "健身房",
  "py": "jiànshēnfáng",
  "letter": "F"
 }
];
var dialogData = [
 {
  "scene": "在公司 · Ở công ty (Vương Nhất Tuyết chuẩn bị tan làm, chào Dương Đồng Lạc)",
  "anh": "/images/hsk4v3/bai-17/kv-1.webp",
  "nguoi": [
   {
    "ten": "王一雪",
    "anh": "/images/hsk4v3/nv/yixue.webp"
   },
   {
    "ten": "杨同乐",
    "anh": "/images/hsk4v3/nv/tongle.webp"
   }
  ],
  "preQuiz": [
   {
    "q": "杨同乐一会儿要做什么？",
    "opts": [
     "加班",
     "去健身",
     "办会员卡",
     "开车送王一雪回家"
    ],
    "ans": 1
   },
   {
    "q": "关于那家健身房，下列哪项正确？",
    "opts": [
     "是新开的",
     "非常便宜",
     "离单位比较远",
     "总有打折活动"
    ],
    "ans": 0
   }
  ],
  "lines": [
   {
    "sp": 0,
    "zh": "下班了！同乐，我今天正好要路过你们家那边，用不用我开车送你？",
    "py": "Xiàbān le! Tónglè, wǒ jīntiān zhènghǎo yào lùguò nǐmen jiā nàbiān, yòng búyòng wǒ kāichē sòng nǐ?",
    "vn": "Tan làm rồi! Đồng Lạc, hôm nay chị tiện đi ngang qua bên nhà em, có cần chị lái xe đưa em về không?"
   },
   {
    "sp": 1,
    "zh": "谢谢一雪姐，不过您走您的吧，我一会儿还要去一趟健身房。",
    "py": "Xièxie Yīxuě jiě, búguò nín zǒu nín de ba, wǒ yíhuìr hái yào qù yí tàng jiànshēnfáng.",
    "vn": "Cảm ơn chị Nhất Tuyết, nhưng chị cứ về trước đi ạ, lát nữa em còn phải đến phòng gym một chuyến."
   },
   {
    "sp": 0,
    "zh": "去健身房？你什么时候开始健身的？",
    "py": "Qù jiànshēnfáng? Nǐ shénme shíhou kāishǐ jiànshēn de?",
    "vn": "Đi phòng gym á? Em bắt đầu tập từ khi nào thế?"
   },
   {
    "sp": 1,
    "zh": "我上个星期发现单位旁边新开了一家健身房。我最近体重增加了不少，正好想运动一下，就进去看了看。",
    "py": "Wǒ shàng gè xīngqī fāxiàn dānwèi pángbiān xīn kāi le yì jiā jiànshēnfáng. Wǒ zuìjìn tǐzhòng zēngjiā le bùshǎo, zhènghǎo xiǎng yùndòng yíxià, jiù jìnqu kàn le kàn.",
    "vn": "Tuần trước em phát hiện bên cạnh cơ quan mới mở một phòng gym. Dạo này em tăng cân khá nhiều, đúng lúc đang muốn vận động một chút, nên vào xem thử."
   },
   {
    "sp": 0,
    "zh": "感觉怎么样？",
    "py": "Gǎnjué zěnmeyàng?",
    "vn": "Cảm thấy thế nào?"
   },
   {
    "sp": 1,
    "zh": "挺不错的。当时正好有打折活动，我就办了一张会员卡。",
    "py": "Tǐng búcuò de. Dāngshí zhènghǎo yǒu dǎzhé huódòng, wǒ jiù bàn le yì zhāng huìyuánkǎ.",
    "vn": "Khá ổn ạ. Lúc đó đúng dịp có chương trình giảm giá, em liền làm luôn một thẻ hội viên."
   }
  ]
 },
 {
  "scene": "在公司 · Ở công ty (Vương Nhất Tuyết và Dương Đồng Lạc trò chuyện sau giờ làm)",
  "anh": "/images/hsk4v3/bai-17/kv-2.webp",
  "nguoi": [
   {
    "ten": "王一雪",
    "anh": "/images/hsk4v3/nv/yixue.webp"
   },
   {
    "ten": "杨同乐",
    "anh": "/images/hsk4v3/nv/tongle.webp"
   }
  ],
  "preQuiz": [
   {
    "q": "杨同乐为什么不去家附近的健身房？",
    "opts": [
     "太贵了",
     "没有教练",
     "环境不好",
     "要花不少时间"
    ],
    "ans": 3
   },
   {
    "q": "公司附近那家健身房的教练怎么样？",
    "opts": [
     "很专业",
     "力气大",
     "讲得不清楚",
     "动作不标准"
    ],
    "ans": 0
   }
  ],
  "lines": [
   {
    "sp": 0,
    "zh": "同乐，你晚上不吃饭就去健身，不会饿吗？",
    "py": "Tónglè, nǐ wǎnshang bù chīfàn jiù qù jiànshēn, bú huì è ma?",
    "vn": "Đồng Lạc, buổi tối em không ăn cơm đã đi tập, không đói à?"
   },
   {
    "sp": 1,
    "zh": "我带了饼干、酸奶和果汁，一会儿吃完了再去。",
    "py": "Wǒ dài le bǐnggān, suānnǎi hé guǒzhī, yíhuìr chīwán le zài qù.",
    "vn": "Em mang bánh quy, sữa chua và nước ép rồi, lát nữa ăn xong rồi mới đi."
   },
   {
    "sp": 0,
    "zh": "那你为什么不在家附近找健身房？吃完晚饭，休息一下再去，不是更好吗？",
    "py": "Nà nǐ wèishénme bú zài jiā fùjìn zhǎo jiànshēnfáng? Chīwán wǎnfàn, xiūxi yíxià zài qù, bú shì gèng hǎo ma?",
    "vn": "Thế sao em không tìm phòng gym gần nhà? Ăn tối xong, nghỉ ngơi một lát rồi đi, chẳng phải tốt hơn sao?"
   },
   {
    "sp": 1,
    "zh": "离我家最近的健身房也要坐两站公交车，一来一回得半个小时，太浪费时间了。",
    "py": "Lí wǒ jiā zuìjìn de jiànshēnfáng yě yào zuò liǎng zhàn gōngjiāochē, yì lái yì huí děi bàn gè xiǎoshí, tài làngfèi shíjiān le.",
    "vn": "Phòng gym gần nhà em nhất cũng phải đi xe buýt hai bến, cả đi lẫn về mất nửa tiếng, phí thời gian quá."
   },
   {
    "sp": 0,
    "zh": "确实。那这家健身房的教练怎么样？",
    "py": "Quèshí. Nà zhè jiā jiànshēnfáng de jiàoliàn zěnmeyàng?",
    "vn": "Đúng thật. Thế huấn luyện viên ở phòng gym này thế nào?"
   },
   {
    "sp": 1,
    "zh": "教练很热情，也非常专业，动作讲得很清楚。",
    "py": "Jiàoliàn hěn rèqíng, yě fēicháng zhuānyè, dòngzuò jiǎng de hěn qīngchu.",
    "vn": "Huấn luyện viên rất nhiệt tình, cũng rất chuyên nghiệp, giảng động tác rất rõ ràng."
   },
   {
    "sp": 0,
    "zh": "听你这么一说，我也想试试了。我现在都是在家看着视频练，动作不一定标准。",
    "py": "Tīng nǐ zhème yì shuō, wǒ yě xiǎng shìshi le. Wǒ xiànzài dōu shì zài jiā kànzhe shìpín liàn, dòngzuò bùyídìng biāozhǔn.",
    "vn": "Nghe em nói vậy, chị cũng muốn thử rồi. Bây giờ chị toàn ở nhà xem video tập theo, động tác chưa chắc đã chuẩn."
   },
   {
    "sp": 1,
    "zh": "好啊，那您也来吧。锻炼要科学，否则容易受伤。",
    "py": "Hǎo a, nà nín yě lái ba. Duànliàn yào kēxué, fǒuzé róngyì shòushāng.",
    "vn": "Hay quá, vậy chị cũng đến đi. Tập luyện phải khoa học, nếu không dễ bị thương."
   }
  ]
 },
 {
  "scene": "杨同乐的健身情况 · Chuyện tập gym của Dương Đồng Lạc",
  "anh": "/images/hsk4v3/bai-17/kv-3.webp",
  "nguoi": [
   {
    "ten": "小语",
    "anh": "/images/hsk4v3/nv/xiaoyu.webp"
   }
  ],
  "preQuiz": [
   {
    "q": "杨同乐喜欢用什么方式锻炼？",
    "opts": [
     "打球",
     "游泳",
     "去操场跑步",
     "去健身房健身"
    ],
    "ans": 3
   },
   {
    "q": "关于杨同乐，下列哪项正确？",
    "opts": [
     "身体更健康了",
     "觉得课程简单",
     "不喜欢他的教练",
     "不想坚持健身了"
    ],
    "ans": 0
   }
  ],
  "lines": [
   {
    "sp": 0,
    "zh": "有人爱在操场跑步，有人喜欢通过打球锻炼身体，还有一部分人愿意去健身房健身，杨同乐就是其中之一。",
    "py": "Yǒurén ài zài cāochǎng pǎobù, yǒurén xǐhuan tōngguò dǎqiú duànliàn shēntǐ, hái yǒu yí bùfen rén yuànyì qù jiànshēnfáng jiànshēn, Yáng Tónglè jiùshì qízhōng zhīyī.",
    "vn": "Có người thích chạy bộ ở sân tập, có người thích rèn luyện thân thể bằng cách chơi bóng, còn một bộ phận người thích đến phòng gym tập luyện — Dương Đồng Lạc chính là một trong số đó."
   },
   {
    "sp": 0,
    "zh": "杨同乐认为健身房火起来是因为它有很多好处——环境好、设备全，可以锻炼全身。",
    "py": "Yáng Tónglè rènwéi jiànshēnfáng huǒ qǐlai shì yīnwèi tā yǒu hěn duō hǎochù — huánjìng hǎo, shèbèi quán, kěyǐ duànliàn quánshēn.",
    "vn": "Dương Đồng Lạc cho rằng phòng gym trở nên “hot” là vì nó có nhiều lợi ích — môi trường tốt, thiết bị đầy đủ, có thể rèn luyện toàn thân."
   },
   {
    "sp": 0,
    "zh": "另外，健身房里一般还有专业教练，能帮助大家把动作做准确，练习的效果也更好。",
    "py": "Lìngwài, jiànshēnfáng lǐ yìbān hái yǒu zhuānyè jiàoliàn, néng bāngzhù dàjiā bǎ dòngzuò zuò zhǔnquè, liànxí de xiàoguǒ yě gèng hǎo.",
    "vn": "Ngoài ra, trong phòng gym thường còn có huấn luyện viên chuyên nghiệp, giúp mọi người làm động tác cho chuẩn, hiệu quả luyện tập cũng tốt hơn."
   },
   {
    "sp": 0,
    "zh": "仅仅经过一个月左右的锻炼，杨同乐就感觉自己的身体比以前更健康了。",
    "py": "Jǐnjǐn jīngguò yí gè yuè zuǒyòu de duànliàn, Yáng Tónglè jiù gǎnjué zìjǐ de shēntǐ bǐ yǐqián gèng jiànkāng le.",
    "vn": "Chỉ sau khoảng một tháng tập luyện, Dương Đồng Lạc đã cảm thấy cơ thể mình khoẻ mạnh hơn trước."
   },
   {
    "sp": 0,
    "zh": "教练也表扬他取得了很大的进步，并鼓励他坚持下去，还说随着身体越来越好，人看起来也会更帅。",
    "py": "Jiàoliàn yě biǎoyáng tā qǔdé le hěn dà de jìnbù, bìng gǔlì tā jiānchí xiàqu, hái shuō suízhe shēntǐ yuèláiyuè hǎo, rén kànqǐlai yě huì gèng shuài.",
    "vn": "Huấn luyện viên cũng khen anh ấy đã có tiến bộ rất lớn, động viên anh kiên trì tiếp, còn nói rằng cùng với sức khoẻ ngày càng tốt, trông người cũng sẽ đẹp trai hơn."
   }
  ],
  "doan": true
 },
 {
  "scene": "中国的“国球” · Bóng bàn — “quốc cầu” của Trung Quốc",
  "anh": "/images/hsk4v3/bai-17/kv-4.webp",
  "nguoi": [
   {
    "ten": "小语",
    "anh": "/images/hsk4v3/nv/xiaoyu.webp"
   }
  ],
  "preQuiz": [
   {
    "q": "中国乒乓球队为什么被叫作“梦之队”？",
    "opts": [
     "队员很多",
     "队员很年轻",
     "经常赢得比赛",
     "训练时间很长"
    ],
    "ans": 2
   },
   {
    "q": "关于乒乓球在中国的情况，下列哪项正确？",
    "opts": [
     "老人最喜欢打乒乓球",
     "只有运动员打乒乓球",
     "年轻人不喜欢打乒乓球",
     "乒乓球是最常见的运动之一"
    ],
    "ans": 3
   }
  ],
  "lines": [
   {
    "sp": 0,
    "zh": "中国乒乓球队非常有名，常在各项比赛中赢得第一名，被叫作“梦之队”。",
    "py": "Zhōngguó pīngpāngqiú duì fēicháng yǒumíng, cháng zài gè xiàng bǐsài zhōng yíngdé dì yì míng, bèi jiàozuò “mèng zhī duì”.",
    "vn": "Đội tuyển bóng bàn Trung Quốc rất nổi tiếng, thường giành hạng nhất trong các giải đấu, được gọi là “đội trong mơ”."
   },
   {
    "sp": 0,
    "zh": "为了不断提高自己的水平，队员们每天都要进行严格的训练。",
    "py": "Wèile búduàn tígāo zìjǐ de shuǐpíng, duìyuánmen měitiān dōu yào jìnxíng yángé de xùnliàn.",
    "vn": "Để không ngừng nâng cao trình độ của mình, các đội viên ngày nào cũng phải tập luyện nghiêm ngặt."
   },
   {
    "sp": 0,
    "zh": "正因为这样，球队才能在比赛中取得更好的成绩，获得更多球迷的喜爱。",
    "py": "Zhèng yīnwèi zhèyàng, qiúduì cáinéng zài bǐsài zhōng qǔdé gèng hǎo de chéngjì, huòdé gèng duō qiúmí de xǐ'ài.",
    "vn": "Chính vì vậy, đội mới có thể đạt thành tích tốt hơn trong thi đấu, nhận được sự yêu mến của nhiều người hâm mộ hơn."
   },
   {
    "sp": 0,
    "zh": "许多年轻的乒乓球运动员都有一个梦想，那就是进入国家队，参加世界大赛，为球队赢下比赛。",
    "py": "Xǔduō niánqīng de pīngpāngqiú yùndòngyuán dōu yǒu yí gè mèngxiǎng, nà jiùshì jìnrù guójiāduì, cānjiā shìjiè dàsài, wèi qiúduì yíng xià bǐsài.",
    "vn": "Nhiều vận động viên bóng bàn trẻ đều có một ước mơ, đó là vào đội tuyển quốc gia, tham gia các giải đấu lớn thế giới, thắng trận vì đội."
   },
   {
    "sp": 0,
    "zh": "在中国，除了专业运动员，喜欢打乒乓球的普通人也特别多。",
    "py": "Zài Zhōngguó, chúle zhuānyè yùndòngyuán, xǐhuan dǎ pīngpāngqiú de pǔtōngrén yě tèbié duō.",
    "vn": "Ở Trung Quốc, ngoài vận động viên chuyên nghiệp, người bình thường thích chơi bóng bàn cũng rất nhiều."
   },
   {
    "sp": 0,
    "zh": "连一些年龄比较大的老人都坚持打球，年轻人更是把它作为一种日常锻炼的方式。",
    "py": "Lián yìxiē niánlíng bǐjiào dà de lǎorén dōu jiānchí dǎqiú, niánqīngrén gèng shì bǎ tā zuòwéi yì zhǒng rìcháng duànliàn de fāngshì.",
    "vn": "Ngay cả một số người già lớn tuổi cũng kiên trì chơi bóng, người trẻ thì càng coi nó là một cách rèn luyện hằng ngày."
   },
   {
    "sp": 0,
    "zh": "可以说，乒乓球是中国人生活中最常见的运动之一。",
    "py": "Kěyǐ shuō, pīngpāngqiú shì Zhōngguórén shēnghuó zhōng zuì chángjiàn de yùndòng zhīyī.",
    "vn": "Có thể nói, bóng bàn là một trong những môn thể thao phổ biến nhất trong đời sống của người Trung Quốc."
   }
  ],
  "doan": true
 }
];
var listenData = [
 {
  "audio": "你好，我想了解一下你们健身房。欢迎！我们这儿环境好、设备全，还有专业教练。现在办会员卡打八折。一年多少钱？原价三千，打完折两千四。那挺合适的，我先办一张吧。",
  "questions": [
   {
    "q": "这家健身房现在有什么活动？",
    "opts": [
     "送饼干和果汁",
     "办会员卡打八折",
     "免费请教练"
    ],
    "ans": 1
   },
   {
    "q": "打折以后，一年的会员卡多少钱？",
    "opts": [
     "两千四",
     "三千",
     "两千"
    ],
    "ans": 0
   }
  ]
 },
 {
  "audio": "小李，你的腿怎么了？昨天在健身房受伤了。你没跟教练练吗？没有，我自己看着视频练的，动作不太准确。锻炼要科学，否则容易受伤。你现在连走路都困难，更不能去打球了，好好儿休息吧。",
  "questions": [
   {
    "q": "小李是怎么受伤的？",
    "opts": [
     "打球的时候",
     "在操场跑步的时候",
     "在健身房自己练的时候"
    ],
    "ans": 2
   },
   {
    "q": "说话人认为锻炼应该怎么样？",
    "opts": [
     "要科学",
     "要每天练",
     "要看视频"
    ],
    "ans": 0
   }
  ]
 },
 {
  "audio": "妈妈，今天我们学校的乒乓球比赛，我们班三比一赢了！真棒！你打得怎么样？教练表扬我动作很标准，还鼓励我参加市里的大赛。那你要不断练习啊。我知道，我的梦想就是进入国家队！",
  "questions": [
   {
    "q": "比赛结果怎么样？",
    "opts": [
     "二比二",
     "三比一赢了",
     "三比一输了"
    ],
    "ans": 1
   },
   {
    "q": "孩子的梦想是什么？",
    "opts": [
     "当教练",
     "当球迷",
     "进入国家队"
    ],
    "ans": 2
   }
  ]
 }
];
var matchData = [
 {
  "left": "路过",
  "right": "你们家那边"
 },
 {
  "left": "办一张",
  "right": "会员卡"
 },
 {
  "left": "去一趟",
  "right": "健身房"
 },
 {
  "left": "把动作",
  "right": "做准确"
 },
 {
  "left": "锻炼",
  "right": "全身"
 },
 {
  "left": "取得了很大的",
  "right": "进步"
 },
 {
  "left": "赢得",
  "right": "第一名"
 },
 {
  "left": "进行严格的",
  "right": "训练"
 },
 {
  "left": "您走",
  "right": "您的吧"
 },
 {
  "left": "连……也/都……",
  "right": "……更……"
 }
];
var fillData = [
 {
  "pre": "同乐，我今天正好要",
  "blank": "路过",
  "post": "你们家那边，用不用我开车送你？",
  "hint": "(đi ngang qua)",
  "ans": "路过",
  "exp": "路过 + nơi chốn."
 },
 {
  "pre": "我一会儿还要去一",
  "blank": "趟",
  "post": "健身房。",
  "hint": "(chuyến)",
  "ans": "趟",
  "exp": "去一趟 + nơi."
 },
 {
  "pre": "我最近",
  "blank": "体重",
  "post": "增加了不少，正好想运动一下。",
  "hint": "(cân nặng)",
  "ans": "体重",
  "exp": "体重增加 = tăng cân."
 },
 {
  "pre": "当时正好有打折活动，我就办了一张",
  "blank": "会员",
  "post": "卡。",
  "hint": "(hội viên)",
  "ans": "会员",
  "exp": "会员卡 = thẻ hội viên."
 },
 {
  "pre": "教练很热情，也非常专业，",
  "blank": "动作",
  "post": "讲得很清楚。",
  "hint": "(động tác)",
  "ans": "动作",
  "exp": "动作讲得很清楚."
 },
 {
  "pre": "锻炼要科学，否则容易",
  "blank": "受伤",
  "post": "。",
  "hint": "(bị thương)",
  "ans": "受伤",
  "exp": "容易受伤."
 },
 {
  "pre": "还有一部分人愿意去健身房健身，杨同乐就是",
  "blank": "其中",
  "post": "之一。",
  "hint": "(trong số đó)",
  "ans": "其中",
  "exp": "其中之一 = một trong số đó."
 },
 {
  "pre": "健身房能帮助大家把动作做",
  "blank": "准确",
  "post": "，练习的效果也更好。",
  "hint": "(chính xác)",
  "ans": "准确",
  "exp": "把 + O + 做准确."
 },
 {
  "pre": "教练也表扬他取得了很大的进步，并",
  "blank": "鼓励",
  "post": "他坚持下去。",
  "hint": "(động viên)",
  "ans": "鼓励",
  "exp": "鼓励 + ai + V."
 },
 {
  "pre": "为了",
  "blank": "不断",
  "post": "提高自己的水平，队员们每天都要进行严格的训练。",
  "hint": "(không ngừng)",
  "ans": "不断",
  "exp": "不断 + V."
 }
];
var sortData = [
 {
  "words": [
   "您",
   "走",
   "您的吧",
   "，",
   "我",
   "一会儿",
   "还要去",
   "一趟健身房",
   "。"
  ],
  "ans": "您走您的吧，我一会儿还要去一趟健身房。",
  "audio": "您走您的吧，我一会儿还要去一趟健身房。"
 },
 {
  "words": [
   "一来一回",
   "得",
   "半个小时",
   "，",
   "太",
   "浪费时间了",
   "。"
  ],
  "ans": "一来一回得半个小时，太浪费时间了。",
  "audio": "一来一回得半个小时，太浪费时间了。"
 },
 {
  "words": [
   "教练",
   "也",
   "表扬",
   "他",
   "取得了",
   "很大的进步",
   "。"
  ],
  "ans": "教练也表扬他取得了很大的进步。",
  "audio": "教练也表扬他取得了很大的进步。"
 },
 {
  "words": [
   "连",
   "一些老人",
   "都",
   "坚持打球",
   "，",
   "年轻人",
   "更",
   "喜欢打",
   "。"
  ],
  "ans": "连一些老人都坚持打球，年轻人更喜欢打。",
  "audio": "连一些老人都坚持打球，年轻人更喜欢打。"
 },
 {
  "words": [
   "锻炼",
   "要",
   "科学",
   "，",
   "否则",
   "容易",
   "受伤",
   "。"
  ],
  "ans": "锻炼要科学，否则容易受伤。",
  "audio": "锻炼要科学，否则容易受伤。"
 },
 {
  "words": [
   "乒乓球",
   "是",
   "中国人",
   "最常见的",
   "运动",
   "之一",
   "。"
  ],
  "ans": "乒乓球是中国人最常见的运动之一。",
  "audio": "乒乓球是中国人最常见的运动之一。"
 }
];
var mcData = [
 {
  "q": "谢谢一雪姐，不过您走＿＿吧，我一会儿还要去健身房。",
  "opts": [
   "您的",
   "你的",
   "我的",
   "他的"
  ],
  "ans": 0,
  "exp": "您走您的吧: hai đại từ phải giống nhau."
 },
 {
  "q": "离我家最近的健身房也要坐两站公交车，一来一＿＿得半个小时。",
  "opts": [
   "回",
   "去",
   "到",
   "走"
  ],
  "ans": 0,
  "exp": "一来一回 = cả đi lẫn về."
 },
 {
  "q": "教练也＿＿他取得了很大的进步。",
  "opts": [
   "表扬",
   "批评",
   "受伤",
   "路过"
  ],
  "ans": 0,
  "exp": "Tiến bộ → khen: 表扬 + ai + V + O."
 },
 {
  "q": "＿＿一些年龄比较大的老人都坚持打球，年轻人更是把它作为一种日常锻炼的方式。",
  "opts": [
   "连",
   "就",
   "才",
   "把"
  ],
  "ans": 0,
  "exp": "连……都……，……更……"
 },
 {
  "q": "我有时候连老师说的话也听不懂，听广播就＿＿难了。",
  "opts": [
   "更",
   "最",
   "太",
   "还"
  ],
  "ans": 0,
  "exp": "Vế 2 dùng 更 (càng)."
 },
 {
  "q": "中国乒乓球队常在各项比赛中＿＿第一名。",
  "opts": [
   "赢得",
   "赢",
   "获取",
   "进步"
  ],
  "ans": 0,
  "exp": "赢得 + tân ngữ (第一名); 赢 thường không mang 第一名."
 },
 {
  "q": "中国乒乓球队非常有名，被＿＿“梦之队”。",
  "opts": [
   "叫作",
   "表扬",
   "训练",
   "鼓励"
  ],
  "ans": 0,
  "exp": "被叫作 = được gọi là."
 },
 {
  "q": "仅仅经过一个月左右的锻炼，杨同乐＿＿感觉自己的身体比以前更健康了。",
  "opts": [
   "就",
   "才",
   "也",
   "都"
  ],
  "ans": 0,
  "exp": "仅仅……就…… = chỉ mới … đã …"
 },
 {
  "q": "健身房环境好、＿＿全，可以锻炼全身。",
  "opts": [
   "设备",
   "好处",
   "动作",
   "会员"
  ],
  "ans": 0,
  "exp": "设备全 = thiết bị đầy đủ."
 },
 {
  "q": "她早上一般都会喝杯＿＿，觉得这样对身体有好处。",
  "opts": [
   "酸奶",
   "饼干",
   "乒乓球",
   "操场"
  ],
  "ans": 0,
  "exp": "喝 + 酸奶 (người Trung “uống” sữa chua)."
 }
];
var speakingData = {
 "intro": "Nhấn nút loa nghe câu hỏi (câu hỏi phần Khởi động, câu hỏi đọc hiểu của 4 bài khoá, kể lại bài khoá và hoạt động điều tra), rồi tự ghi âm câu trả lời — cố dùng từ mới và 4 điểm ngữ pháp của bài.",
 "questions": [
  {
   "q_zh": "你去过健身房吗？你喜欢去健身房锻炼身体吗？",
   "q_vn": "Bạn đã từng đến phòng gym chưa? Bạn có thích đến phòng gym rèn luyện thân thể không?",
   "hint": "我去过……。我觉得健身房……，不过……。我更喜欢……",
   "sample": "我去过健身房，去年还办了一张会员卡。健身房环境好、设备全，还有专业教练，能帮我把动作做准确。不过，离我家最近的健身房也很远，一来一回要一个小时，所以后来我去得越来越少了。现在我更喜欢晚饭后在操场跑步，又方便又不用花钱。",
   "sample_vn": "Tôi từng đến phòng gym, năm ngoái còn làm một thẻ hội viên. Phòng gym môi trường tốt, thiết bị đầy đủ, còn có HLV chuyên nghiệp giúp tôi tập động tác cho chuẩn. Có điều phòng gym gần nhà tôi nhất cũng rất xa, cả đi lẫn về mất một tiếng, nên về sau tôi đi ngày càng ít. Bây giờ tôi thích chạy bộ ở sân tập sau bữa tối hơn, vừa tiện vừa không tốn tiền.",
   "note": "Câu hỏi phần Khởi động của sách; dùng 一来一回 (điểm 2) + ôn 既……又…… / 又……又……"
  },
  {
   "q_zh": "你喜欢看什么体育比赛？你有喜欢的运动员或球队吗？",
   "q_vn": "Bạn thích xem các trận đấu thể thao nào? Bạn có vận động viên hay đội bóng yêu thích không?",
   "hint": "我最喜欢看……比赛。我是……迷。我最喜欢的球队是……，因为……",
   "sample": "我最喜欢看足球比赛，我是一个老球迷了。我最喜欢的球队是越南国家队。队员们每天都进行严格的训练，水平不断提高，这几年在东南亚的比赛中常常赢得第一名。每次比赛的时候，连我奶奶都会和我们一起看电视，我爸爸就更激动了。",
   "sample_vn": "Tôi thích xem bóng đá nhất, tôi là fan lâu năm rồi. Đội bóng tôi thích nhất là đội tuyển quốc gia Việt Nam. Các cầu thủ ngày nào cũng tập luyện nghiêm ngặt, trình độ không ngừng nâng cao, mấy năm nay thường giành chức vô địch các giải Đông Nam Á. Mỗi lần có trận đấu, đến bà tôi cũng xem tivi cùng cả nhà, bố tôi thì càng phấn khích hơn.",
   "note": "Câu hỏi phần Khởi động của sách; dùng 连……都……，……更…… (điểm 4) + từ 球迷, 队员, 训练, 不断, 赢得."
  },
  {
   "q_zh": "杨同乐为什么想健身？他为什么办了会员卡？",
   "q_vn": "Vì sao Dương Đồng Lạc muốn tập luyện? Vì sao anh ấy làm thẻ hội viên?",
   "hint": "因为他最近……，正好想……。因为那家健身房……，当时正好……",
   "sample": "杨同乐想健身，是因为他最近体重增加了不少，正好想运动一下。他上个星期发现单位旁边新开了一家健身房，进去看了看，觉得挺不错的，当时正好有打折活动，所以他就办了一张会员卡。",
   "sample_vn": "Dương Đồng Lạc muốn tập luyện vì dạo này anh tăng cân khá nhiều, đúng lúc muốn vận động một chút. Tuần trước anh phát hiện bên cạnh cơ quan mới mở một phòng gym, vào xem thấy khá ổn, lúc đó đúng dịp có khuyến mãi nên anh làm luôn một thẻ hội viên.",
   "note": "Câu hỏi bài khoá 1."
  },
  {
   "q_zh": "请根据提示复述课文一。",
   "q_vn": "Dựa vào gợi ý, kể lại bài khoá 1.",
   "hint": "下班时，王一雪问杨同乐……，因为她今天开车会……。不过，杨同乐不回家，他要先……。他上个星期发现……，就进去……。他最近……，正好想……。那家健身房……，当时……，他就……。",
   "sample": "下班时，王一雪问杨同乐用不用她开车送他，因为她今天开车会路过他们家那边。不过，杨同乐不回家，他要先去一趟健身房。他上个星期发现单位旁边新开了一家健身房，就进去看了看。他最近体重增加了不少，正好想运动一下。那家健身房挺不错的，当时正好有打折活动，他就办了一张会员卡。",
   "sample_vn": "Lúc tan làm, Vương Nhất Tuyết hỏi Dương Đồng Lạc có cần chị lái xe đưa về không, vì hôm nay chị lái xe sẽ đi ngang qua bên nhà anh. Nhưng Dương Đồng Lạc không về nhà, anh phải đến phòng gym một chuyến trước. Tuần trước anh phát hiện bên cạnh cơ quan mới mở một phòng gym nên vào xem thử. Dạo này anh tăng cân khá nhiều, đúng lúc muốn vận động. Phòng gym đó khá ổn, lúc ấy đúng dịp giảm giá, anh liền làm một thẻ hội viên.",
   "note": "Bài tập 复述 của sách (trang 76)."
  },
  {
   "q_zh": "杨同乐去健身房前要做什么？王一雪为什么也想去健身房锻炼？",
   "q_vn": "Trước khi đến phòng gym Dương Đồng Lạc phải làm gì? Vì sao Vương Nhất Tuyết cũng muốn đến phòng gym tập?",
   "hint": "他要先把……吃完。因为杨同乐说那里的教练……；而王一雪现在都是……，动作……",
   "sample": "杨同乐去健身房以前，要先把带来的饼干、酸奶和果汁吃完。王一雪也想去健身房锻炼，因为杨同乐说那里的教练很热情，也非常专业，动作讲得很清楚；而她现在都是在家看着视频练，动作不一定标准。杨同乐还提醒她，锻炼要科学，否则容易受伤。",
   "sample_vn": "Trước khi đến phòng gym, Dương Đồng Lạc phải ăn hết bánh quy, sữa chua và nước ép mang theo. Vương Nhất Tuyết cũng muốn đến phòng gym tập vì Đồng Lạc nói HLV ở đó rất nhiệt tình, chuyên nghiệp, giảng động tác rất rõ; còn chị bây giờ toàn ở nhà xem video tập theo, động tác chưa chắc đã chuẩn. Đồng Lạc còn nhắc chị tập luyện phải khoa học, nếu không dễ bị thương.",
   "note": "Câu hỏi bài khoá 2; ôn 否则 (Bài 8 · điểm 2) + câu 把."
  },
  {
   "q_zh": "健身房为什么会火起来？教练为什么表扬杨同乐？",
   "q_vn": "Vì sao phòng gym trở nên “hot”? Vì sao huấn luyện viên khen Dương Đồng Lạc?",
   "hint": "因为它有很多好处——……。另外，……。教练表扬他……，因为仅仅经过……，他就……",
   "sample": "健身房火起来，是因为它有很多好处——环境好、设备全，可以锻炼全身。另外，健身房里一般还有专业教练，能帮助大家把动作做准确，练习的效果也更好。教练表扬杨同乐取得了很大的进步，因为仅仅经过一个月左右的锻炼，他的身体就比以前更健康了。",
   "sample_vn": "Phòng gym trở nên “hot” vì nó có nhiều lợi ích — môi trường tốt, thiết bị đầy đủ, rèn luyện được toàn thân. Ngoài ra, phòng gym thường có HLV chuyên nghiệp giúp mọi người làm động tác cho chuẩn, hiệu quả tập luyện cũng tốt hơn. HLV khen Dương Đồng Lạc đã tiến bộ rất lớn, vì chỉ sau khoảng một tháng tập, sức khoẻ của anh đã tốt hơn trước.",
   "note": "Câu hỏi bài khoá 3; dùng câu kiêm ngữ 表扬 (điểm 3) + 仅仅……就……"
  },
  {
   "q_zh": "请根据提示复述课文三。",
   "q_vn": "Dựa vào gợi ý, kể lại bài khoá 3.",
   "hint": "有人爱……，有人喜欢……，还有一部分人……，杨同乐就是……。杨同乐认为健身房……是因为……。另外，……。仅仅经过……，杨同乐就……。教练也表扬他……，并鼓励……，还说随着……，人看起来也会……。",
   "sample": "有人爱在操场跑步，有人喜欢通过打球锻炼身体，还有一部分人愿意去健身房健身，杨同乐就是其中之一。杨同乐认为健身房火起来是因为它有很多好处——环境好、设备全，可以锻炼全身。另外，健身房里一般还有专业教练，能帮助大家把动作做准确，练习的效果也更好。仅仅经过一个月左右的锻炼，杨同乐就感觉自己的身体比以前更健康了。教练也表扬他取得了很大的进步，并鼓励他坚持下去，还说随着身体越来越好，人看起来也会更帅。",
   "sample_vn": "Có người thích chạy bộ ở sân tập, có người thích rèn luyện bằng cách chơi bóng, còn một bộ phận người thích đến phòng gym, Dương Đồng Lạc là một trong số đó… HLV cũng khen anh tiến bộ rất lớn, động viên anh kiên trì tiếp, còn nói cùng với sức khoẻ ngày càng tốt, trông người cũng sẽ đẹp trai hơn.",
   "note": "Bài tập 复述 của sách (trang 80)."
  },
  {
   "q_zh": "乒乓球队为什么每天都要进行严格的训练？许多年轻的乒乓球运动员有什么梦想？",
   "q_vn": "Vì sao đội bóng bàn ngày nào cũng phải tập luyện nghiêm ngặt? Nhiều vận động viên bóng bàn trẻ có ước mơ gì?",
   "hint": "为了不断提高……。正因为这样，……。他们的梦想是……，参加……，为……",
   "sample": "中国乒乓球队每天都要进行严格的训练，是为了不断提高自己的水平。正因为这样，球队才能在比赛中取得更好的成绩，获得更多球迷的喜爱。许多年轻的乒乓球运动员都有一个梦想，那就是进入国家队，参加世界大赛，为球队赢下比赛。",
   "sample_vn": "Đội tuyển bóng bàn Trung Quốc ngày nào cũng tập luyện nghiêm ngặt là để không ngừng nâng cao trình độ. Chính vì thế, đội mới đạt thành tích tốt hơn trong thi đấu, được nhiều người hâm mộ yêu mến hơn. Nhiều VĐV bóng bàn trẻ đều có một ước mơ, đó là vào đội tuyển quốc gia, dự các giải đấu lớn thế giới, thắng trận vì đội.",
   "note": "Câu hỏi bài khoá 4; từ mới 不断, 训练, 球迷, 梦想, 大赛, 赢."
  },
  {
   "q_zh": "调查：请在班级中做一个调查，了解同学们的运动情况，包括是否有锻炼的习惯、锻炼的方式、选择这种方式的原因、每周锻炼的次数以及每次多长时间等等。调查后，向全班介绍调查结果。",
   "q_vn": "Điều tra: Hãy làm một cuộc khảo sát trong lớp, tìm hiểu tình hình vận động của các bạn, gồm: có thói quen rèn luyện không, rèn luyện bằng cách nào, vì sao chọn cách đó, mỗi tuần tập mấy lần và mỗi lần bao lâu… (bảng: 姓名 · 是否有锻炼的习惯 · 锻炼方式 · 原因 · 每周锻炼的次数和时长). Sau đó trình bày kết quả trước lớp.",
   "hint": "你有锻炼的习惯吗？你一般怎么锻炼？为什么？每周锻炼几次？每次多长时间？ → 我一共问了……位同学，其中……；有人……，有人……；……连……都……，更……",
   "sample": "（采访）A：你有锻炼的习惯吗？B：有，我每周去三次健身房。A：为什么选择去健身房？B：因为健身房设备全，还有专业教练，能帮我把动作做准确。A：每次锻炼多长时间？B：一个小时左右。（报告）大家好！我在班里一共问了八位同学，其中六位有锻炼的习惯。有人爱在操场跑步，有人喜欢打乒乓球，还有两位同学去健身房健身。他们每周锻炼两到三次，每次一个小时左右。另外两位同学不太运动，因为学习太忙，有时候连周末都要上课，更没有时间锻炼了。我觉得，大家应该互相鼓励，一起锻炼，让身体更健康。",
   "sample_vn": "(Phỏng vấn) A: Bạn có thói quen tập luyện không? B: Có, mỗi tuần mình đến phòng gym ba lần. A: Sao bạn chọn phòng gym? B: Vì phòng gym thiết bị đầy đủ, có HLV chuyên nghiệp giúp mình tập động tác cho chuẩn. A: Mỗi lần tập bao lâu? B: Khoảng một tiếng. (Báo cáo) Chào cả lớp! Mình hỏi tổng cộng tám bạn, trong đó sáu bạn có thói quen tập luyện. Có người thích chạy bộ ở sân tập, có người thích chơi bóng bàn, còn hai bạn đến phòng gym. Các bạn tập mỗi tuần hai đến ba lần, mỗi lần khoảng một tiếng. Hai bạn còn lại ít vận động vì học quá bận, có khi đến cuối tuần cũng phải đi học, càng không có thời gian tập. Mình nghĩ mọi người nên động viên nhau cùng tập luyện để khoẻ mạnh hơn.",
   "note": "Hoạt động 任务活动 · 调查 (điều tra) của sách, trang 84 — dùng 其中, 左右 (Bài 13 · điểm 3), 连……都……，……更…… (điểm 4), 鼓励."
  }
 ]
};
var translateData = [
 {
  "vi": "Cảm ơn chị, nhưng chị cứ về trước đi, lát nữa em còn phải đến phòng gym một chuyến.",
  "zh": "谢谢您，不过您走您的吧，我一会儿还要去一趟健身房。",
  "py": "Xièxie nín, búguò nín zǒu nín de ba, wǒ yíhuìr hái yào qù yí tàng jiànshēnfáng."
 },
 {
  "vi": "Phòng gym gần nhà tôi nhất cũng phải đi xe buýt hai bến, cả đi lẫn về mất nửa tiếng.",
  "zh": "离我家最近的健身房也要坐两站公交车，一来一回得半个小时。",
  "py": "Lí wǒ jiā zuìjìn de jiànshēnfáng yě yào zuò liǎng zhàn gōngjiāochē, yì lái yì huí děi bàn gè xiǎoshí."
 },
 {
  "vi": "Huấn luyện viên khen anh ấy đã có tiến bộ rất lớn, và động viên anh ấy kiên trì tiếp.",
  "zh": "教练表扬他取得了很大的进步，并鼓励他坚持下去。",
  "py": "Jiàoliàn biǎoyáng tā qǔdé le hěn dà de jìnbù, bìng gǔlì tā jiānchí xiàqu."
 },
 {
  "vi": "Ngay cả một số người già cũng kiên trì chơi bóng bàn, người trẻ thì càng thích hơn.",
  "zh": "连一些老人都坚持打乒乓球，年轻人就更喜欢了。",
  "py": "Lián yìxiē lǎorén dōu jiānchí dǎ pīngpāngqiú, niánqīngrén jiù gèng xǐhuan le."
 },
 {
  "vi": "Tập luyện phải khoa học, nếu không dễ bị thương.",
  "zh": "锻炼要科学，否则容易受伤。",
  "py": "Duànliàn yào kēxué, fǒuzé róngyì shòushāng."
 },
 {
  "vi": "Bóng bàn là một trong những môn thể thao phổ biến nhất trong đời sống người Trung Quốc.",
  "zh": "乒乓球是中国人生活中最常见的运动之一。",
  "py": "Pīngpāngqiú shì Zhōngguórén shēnghuó zhōng zuì chángjiàn de yùndòng zhīyī."
 }
];
var translateDataRev = [
 {
  "vi": "Dạo này cân nặng của tôi tăng không ít, đúng lúc muốn vận động một chút.",
  "zh": "我最近体重增加了不少，正好想运动一下。",
  "py": "Wǒ zuìjìn tǐzhòng zēngjiā le bùshǎo, zhènghǎo xiǎng yùndòng yíxià."
 },
 {
  "vi": "Lúc đó đúng dịp có khuyến mãi giảm giá, tôi liền làm một thẻ hội viên.",
  "zh": "当时正好有打折活动，我就办了一张会员卡。",
  "py": "Dāngshí zhènghǎo yǒu dǎzhé huódòng, wǒ jiù bàn le yì zhāng huìyuánkǎ."
 },
 {
  "vi": "Phòng gym có nhiều lợi ích: môi trường tốt, thiết bị đầy đủ, có thể rèn luyện toàn thân.",
  "zh": "健身房有很多好处：环境好、设备全，可以锻炼全身。",
  "py": "Jiànshēnfáng yǒu hěn duō hǎochù: huánjìng hǎo, shèbèi quán, kěyǐ duànliàn quánshēn."
 },
 {
  "vi": "Chỉ sau khoảng một tháng tập luyện, anh ấy đã thấy cơ thể khoẻ mạnh hơn trước.",
  "zh": "仅仅经过一个月左右的锻炼，他就感觉身体比以前更健康了。",
  "py": "Jǐnjǐn jīngguò yí gè yuè zuǒyòu de duànliàn, tā jiù gǎnjué shēntǐ bǐ yǐqián gèng jiànkāng le."
 },
 {
  "vi": "Để không ngừng nâng cao trình độ, các đội viên ngày nào cũng tập luyện nghiêm ngặt.",
  "zh": "为了不断提高水平，队员们每天都要进行严格的训练。",
  "py": "Wèile búduàn tígāo shuǐpíng, duìyuánmen měitiān dōu yào jìnxíng yángé de xùnliàn."
 }
];
var sgkData = [
 {
  "kieu": "kho",
  "de": "选词填空（一）· 综合练习",
  "vn": "Chọn từ thích hợp điền vào chỗ trống (Bài tập tổng hợp, sách trang 82). Sách 4下 chưa có đáp án — đây là đáp án tham khảo.",
  "dapSgk": false,
  "tu": [
   "趟",
   "科学",
   "路过",
   "会员",
   "酸奶",
   "健身"
  ],
  "cau": [
   {
    "s": "随着＿＿的发展，人们的生活方式发生了很大的变化。",
    "dap": [
     "科学"
    ]
   },
   {
    "s": "昨天我在回家的路上＿＿了一家新开的咖啡店。",
    "dap": [
     "路过"
    ]
   },
   {
    "s": "我吃完晚饭后都会去＿＿，已经坚持两年多了。",
    "dap": [
     "健身"
    ]
   },
   {
    "s": "她早上一般都会喝杯＿＿，觉得这样对身体有好处。",
    "dap": [
     "酸奶"
    ]
   },
   {
    "s": "明天我要去一＿＿上海，咱们下周再约时间见面吧。",
    "dap": [
     "趟"
    ]
   },
   {
    "s": "楼下新开了一家超市，正在做活动，办＿＿还送小礼物。",
    "dap": [
     "会员"
    ]
   }
  ]
 },
 {
  "kieu": "kho",
  "de": "选词填空（二）· 综合练习",
  "vn": "Chọn từ thích hợp điền vào chỗ trống (hội thoại, sách trang 83). Đáp án tham khảo.",
  "dapSgk": false,
  "tu": [
   "队",
   "赢",
   "准确",
   "梦想",
   "其中",
   "不断"
  ],
  "cau": [
   {
    "s": "A：昨天的比赛结果怎么样？　B：三比二，我们球队最后＿＿了。",
    "dap": [
     "赢"
    ]
   },
   {
    "s": "A：你儿子以后想做什么工作？　B：他的＿＿是当一名医生。",
    "dap": [
     "梦想"
    ]
   },
   {
    "s": "A：您看我这个句子写得对吗？　B：不太＿＿，你再检查一下吧。",
    "dap": [
     "准确"
    ]
   },
   {
    "s": "A：你最近工作怎么样？　B：公司给我们的任务＿＿增加，我们越来越忙了。",
    "dap": [
     "不断"
    ]
   },
   {
    "s": "A：他们班参加羽毛球比赛的人多吗？　B：挺多的，＿＿还有几个水平很高的。",
    "dap": [
     "其中"
    ]
   },
   {
    "s": "A：听说你进入了学校的乒乓球＿＿？　B：没错，我很喜欢打乒乓球，而且打得很好。",
    "dap": [
     "队"
    ]
   }
  ]
 },
 {
  "kieu": "kho",
  "de": "选择合适的内容完成短文",
  "vn": "Chọn nội dung thích hợp (A–D) hoàn thành đoạn văn (sách trang 83). Đáp án tham khảo.",
  "dapSgk": false,
  "tu": [
   "只要方法科学",
   "体重也一直增加",
   "他决定去健身房锻炼",
   "虽然他刚开始做得还不太标准"
  ],
  "cau": [
   {
    "s": "小张以前不太爱运动，下班以后常常在家看电视或玩手机，很少锻炼身体。时间长了，他感觉自己的身体越来越差，＿＿，工作的时候还容易觉得累。后来在朋友的建议下，＿＿。教练先教了他一些最简单的动作。＿＿，但他慢慢练、慢慢改，最后还是坚持了下来。现在，小张已经养成了运动的习惯。他觉得，＿＿，并且坚持锻炼，就一定能取得不错的效果。",
    "dap": [
     "体重也一直增加",
     "他决定去健身房锻炼",
     "虽然他刚开始做得还不太标准",
     "只要方法科学"
    ]
   }
  ]
 },
 {
  "kieu": "gx",
  "de": "看图，用词语造句",
  "vn": "Nhìn tranh, đặt câu với từ cho sẵn (câu dưới đây là câu mẫu tham khảo — câu của em đúng ngữ pháp, hợp tranh là đạt).",
  "cau": [
   {
    "anh": "/images/hsk4v3/bai-17/bt-1.webp",
    "s": "",
    "tu": "赢得",
    "dap": "女儿在网球比赛中赢得了第一名，妈妈特别高兴。",
    "giai": "在……比赛中 + 赢得 + 第一名; tranh: cô bé đeo huy chương, cầm cúp và vợt tennis (网球)."
   },
   {
    "anh": "/images/hsk4v3/bai-17/bt-2.webp",
    "s": "",
    "tu": "受伤",
    "dap": "她跑步的时候不小心腿受伤了，医生正在帮她看。",
    "giai": "Bộ phận + 受伤了; 不小心 = không cẩn thận; ôn 正在 + V."
   },
   {
    "anh": "/images/hsk4v3/bai-17/bt-3.webp",
    "s": "",
    "tu": "球迷",
    "dap": "自己喜欢的球队赢了，球迷们都高兴得跳了起来。",
    "giai": "球迷们 + Adj + 得 + bổ ngữ trạng thái; 跳了起来 = nhảy cẫng lên."
   }
  ]
 }
];
var writingData = {
 "kieu": "sgk",
 "soChu": 140,
 "tieuDe": "写作 — viết theo đề của sách (ít nhất 140 chữ)",
 "nhanDe": "写作",
 "huongDan": {
  "tieuDe": "Viết báo cáo điều tra: tình hình vận động của các bạn trong lớp (写作)",
  "gioiThieu": "Đề 写作 của sách HSK 4 (3.0) yêu cầu dựa vào kết quả cuộc điều tra trong phần 任务活动 để viết một BẢN BÁO CÁO ĐIỀU TRA (调查报告) ngắn, ít nhất 140 chữ — giống phần 书写 của đề thi HSK 4 mới. Báo cáo phải có số liệu (bao nhiêu người, mấy lần một tuần, bao lâu), cách tập, lý do và kết luận / đề xuất.",
  "buoc": [
   "Đọc kỹ đề: bối cảnh là đại hội thể thao của trường sắp diễn ra, thầy cô muốn biết tình hình vận động của học sinh → viết báo cáo dựa vào bảng điều tra (姓名, 是否有锻炼的习惯, 锻炼方式, 原因, 每周锻炼的次数和时长).",
   "Lập dàn ý theo 5 câu hỏi gợi ý: mục đích + đối tượng điều tra → bao nhiêu người có thói quen tập → cách tập và lý do → số lần, thời gian → nhóm không tập và lý do → kết luận, đề xuất.",
   "Dùng từ mới (健身房, 操场, 教练, 设备, 好处, 全身, 体重, 坚持, 鼓励, 进步, 乒乓球…) và ngữ pháp của bài: 其中, 连……都……，……更……, 表扬 + ai + V, 一A一B.",
   "Nối ý bằng từ nối của báo cáo: 为了…… / 调查发现 / 其中 / 另外 / 总的来说 / 我认为; ôn 左右 (Bài 13), 不如 (Bài 15), 并且 (Bài 16).",
   "Câu mở nêu mục đích và phạm vi điều tra, câu kết nêu đề xuất trước đại hội thể thao; tự soát số chữ (≥ 140) và lỗi chữ Hán."
  ]
 },
 "de": "学校运动会就要到了，老师希望了解同学们的运动情况。请你根据上面调查的内容，写一份调查报告，不少于140字。",
 "prompt": "Đại hội thể thao của trường sắp diễn ra, thầy cô muốn tìm hiểu tình hình vận động của các bạn học sinh. Hãy dựa vào nội dung điều tra ở trên, viết một bản báo cáo điều tra, không ít hơn 140 chữ.",
 "dan": [
  {
   "hoi": "你为什么做这个调查？一共调查了多少人？",
   "goiY": "为了了解同学们的运动情况，我在班里做了一个调查，一共问了……位同学。"
  },
  {
   "hoi": "有多少人有锻炼的习惯？",
   "goiY": "调查发现，其中……位同学有锻炼的习惯。"
  },
  {
   "hoi": "大家都用什么方式锻炼？为什么？",
   "goiY": "有人爱在操场跑步，有人喜欢……，还有人去健身房，因为……"
  },
  {
   "hoi": "每周锻炼几次？每次多长时间？没有锻炼习惯的同学是什么原因？",
   "goiY": "他们每周锻炼……次，每次……左右。另外……位同学……，连……都……，更……"
  },
  {
   "hoi": "你有什么结论和建议？",
   "goiY": "我认为，运动会就要到了，……只要方法科学，并且坚持下去，……"
  }
 ],
 "tuNen": [
  "健身房",
  "操场",
  "乒乓球",
  "教练",
  "设备",
  "好处",
  "全身",
  "体重",
  "动作",
  "科学",
  "坚持",
  "鼓励",
  "进步",
  "表扬",
  "其中"
 ],
 "cauTruc": [
  {
   "ten": "……，其中……",
   "nhan": "其中",
   "vd": "我一共问了十位同学，其中七位有锻炼的习惯。",
   "khi": "Đưa số liệu tổng và một phần trong đó."
  },
  {
   "ten": "有人……，有人……，还有人……",
   "nhan": "有人",
   "vd": "有人爱在操场跑步，有人喜欢打乒乓球，还有人去健身房健身。",
   "khi": "Liệt kê các cách tập luyện khác nhau (theo mẫu bài khoá 3)."
  },
  {
   "ten": "连……都……，……更……",
   "nhan": "连",
   "vd": "有的同学学习太忙，连周末都要上课，更没有时间锻炼了。",
   "khi": "Giải thích lý do một số bạn không tập."
  },
  {
   "ten": "主语 + 表扬 + ai + V……",
   "nhan": "表扬",
   "vd": "体育老师还表扬他取得了很大的进步。",
   "khi": "Nêu một ví dụ cụ thể, sinh động trong báo cáo."
  },
  {
   "ten": "只要……，并且……，就……",
   "nhan": "只要",
   "vd": "只要方法科学，并且坚持下去，就一定能取得不错的效果。",
   "khi": "Câu KẾT: đề xuất, lời khuyên (ôn 并且 – Bài 16)."
  }
 ],
 "checklist": [
  "Đủ ít nhất 140 chữ Hán chưa?",
  "Báo cáo đã có: mục đích + số người điều tra, có thói quen tập hay không, cách tập + lý do, số lần + thời gian mỗi lần, kết luận / đề xuất chưa?",
  "Đã dùng ít nhất 2 điểm ngữ pháp của bài (连……都……，……更……、表扬 + ai + V、一A一B、你×你的吧) và 其中 chưa?",
  "Đã dùng ít nhất 6 từ mới của bài chưa?",
  "Có câu mở nêu mục đích điều tra và câu kết nêu đề xuất trước đại hội thể thao chưa?"
 ],
 "model": {
  "zh": "为了了解同学们的运动情况，我在班里做了一个调查，一共问了十位同学。调查发现，其中七位同学有锻炼的习惯，他们每周锻炼三次左右，每次一个小时左右。大家的锻炼方式不太一样：有人爱在操场跑步，有人喜欢打乒乓球，还有两位同学办了健身房的会员卡。他们说，健身房环境好、设备全，还有专业教练，能帮助大家把动作做准确。另外三位同学几乎不运动，原因是学习太忙，有时候连周末都要上课，更没有时间锻炼了。小王告诉我，他以前体重增加了不少，后来坚持每天跑步，仅仅两个月就瘦了五公斤，体育老师还表扬他取得了很大的进步。我认为，运动会就要到了，同学们应该互相鼓励，一起参加锻炼。只要方法科学，并且不断坚持，我们的身体就一定会越来越健康。",
  "py": "Wèile liǎojiě tóngxuémen de yùndòng qíngkuàng, wǒ zài bān lǐ zuò le yí gè diàochá, yígòng wèn le shí wèi tóngxué. Diàochá fāxiàn, qízhōng qī wèi tóngxué yǒu duànliàn de xíguàn, tāmen měi zhōu duànliàn sān cì zuǒyòu, měi cì yí gè xiǎoshí zuǒyòu. Dàjiā de duànliàn fāngshì bú tài yíyàng: yǒurén ài zài cāochǎng pǎobù, yǒurén xǐhuan dǎ pīngpāngqiú, hái yǒu liǎng wèi tóngxué bàn le jiànshēnfáng de huìyuánkǎ. Tāmen shuō, jiànshēnfáng huánjìng hǎo, shèbèi quán, hái yǒu zhuānyè jiàoliàn, néng bāngzhù dàjiā bǎ dòngzuò zuò zhǔnquè. Lìngwài sān wèi tóngxué jīhū bú yùndòng, yuányīn shì xuéxí tài máng, yǒushíhou lián zhōumò dōu yào shàngkè, gèng méiyǒu shíjiān duànliàn le. Xiǎo Wáng gàosu wǒ, tā yǐqián tǐzhòng zēngjiā le bùshǎo, hòulái jiānchí měitiān pǎobù, jǐnjǐn liǎng gè yuè jiù shòu le wǔ gōngjīn, tǐyù lǎoshī hái biǎoyáng tā qǔdé le hěn dà de jìnbù. Wǒ rènwéi, yùndònghuì jiù yào dào le, tóngxuémen yīnggāi hùxiāng gǔlì, yìqǐ cānjiā duànliàn. Zhǐyào fāngfǎ kēxué, bìngqiě búduàn jiānchí, wǒmen de shēntǐ jiù yídìng huì yuèláiyuè jiànkāng."
 }
};
