// HSK 4 (3.0) · Bai 2 — sinh boi tools/hsk4v3/gan.js tu tools/hsk4v3/bai-2/ (dung sua tay).
var vocabData = [
 {
  "n": 1,
  "zh": "房东",
  "py": "fángdōng",
  "pos": "Danh từ",
  "vn": "chủ nhà (cho thuê)",
  "hv": "phòng đông",
  "em": "🧑‍💼",
  "lesson": 1,
  "explain": [
   "Người có nhà và cho người khác thuê nhà / phòng của mình."
  ],
  "usage": "房东 + 出租 / 介绍 · 给房东打电话 · 跟房东谈房租.",
  "collo": [
   "找房东",
   "给房东打电话",
   "房东太太",
   "热情的房东"
  ],
  "colloFull": [
   {
    "zh": "找房东",
    "py": "Zhǎo fángdōng",
    "vn": "tìm chủ nhà"
   },
   {
    "zh": "给房东打电话",
    "py": "Gěi fángdōng dǎdiànhuà",
    "vn": "gọi điện cho chủ nhà"
   },
   {
    "zh": "房东太太",
    "py": "Fángdōng tàitài",
    "vn": "bà chủ nhà"
   },
   {
    "zh": "热情的房东",
    "py": "Rèqíng de fángdōng",
    "vn": "chủ nhà nhiệt tình"
   }
  ],
  "patterns": [
   {
    "s": "房东 ↔ 租房人 / 房客",
    "m": "Chủ nhà ↔ người thuê nhà"
   },
   {
    "s": "东 ở đây = chủ (东家), không phải “phía đông”",
    "m": "Bẫy: 房东 không phải “phòng phía đông”"
   }
  ],
  "ex_zh": "请进！我给你们介绍一下，这个房子有两个房间，那个大房间出租。",
  "ex_py": "Qǐng jìn! Wǒ gěi nǐmen jièshào yíxià, zhège fángzi yǒu liǎng gè fángjiān, nàge dà fángjiān chūzū.",
  "ex_vn": "Mời vào! Tôi giới thiệu với hai bạn một chút, căn nhà này có hai phòng, phòng lớn kia cho thuê.",
  "exList": [
   {
    "zh": "请进！我给你们介绍一下，这个房子有两个房间，那个大房间出租。",
    "py": "Qǐng jìn! Wǒ gěi nǐmen jièshào yíxià, zhège fángzi yǒu liǎng gè fángjiān, nàge dà fángjiān chūzū.",
    "vn": "Mời vào! Tôi giới thiệu với hai bạn một chút, căn nhà này có hai phòng, phòng lớn kia cho thuê."
   },
   {
    "zh": "我们的房东很热情，有任何问题都可以找他。",
    "py": "Wǒmen de fángdōng hěn rèqíng, yǒu rènhé wèntí dōu kěyǐ zhǎo tā.",
    "vn": "Chủ nhà của chúng tôi rất nhiệt tình, có bất kỳ vấn đề gì đều có thể tìm ông ấy."
   }
  ],
  "hanzi": [
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
   },
   {
    "c": "东",
    "p": "dōng",
    "type": "独体字 · Chữ đơn thể",
    "st": 5,
    "ord": "一 → 𠃋 → 小",
    "rad": "一 (nhất)",
    "mean": "đông; chủ",
    "tip": "Giản thể của 東 → phương ĐÔNG; nghĩa mở rộng CHỦ (chủ ngồi phía đông). 房东 = chủ nhà; 东西.",
    "cf": "车 (chē – xe)",
    "w": "房东 / 东西 / 东边"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Chủ nhà nói nếu có bất kỳ vấn đề gì đều có thể gọi điện cho ông ấy.",
    "answer": "房东说，有任何问题都可以给他打电话。",
    "answerPy": "Fángdōng shuō, yǒu rènhé wèntí dōu kěyǐ gěi tā dǎdiànhuà.",
    "note": "Ôn 任何……都…… (Bài 1 · điểm 1).",
    "pair": "任何……都……"
   },
   {
    "promptLang": "vi",
    "prompt": "Nếu chủ nhà đồng ý thì chúng tôi chuyển vào ngay hôm nay.",
    "answer": "要是房东同意，我们今天就搬进去。",
    "answerPy": "Yàoshi fángdōng tóngyì, wǒmen jīntiān jiù bān jìnqù.",
    "note": "Ôn 要是……就…… (Bài 1 · điểm 2).",
    "pair": "要是……就……"
   }
  ]
 },
 {
  "n": 2,
  "zh": "出租",
  "py": "chūzū",
  "pos": "Động từ",
  "vn": "cho thuê",
  "hv": "xuất tô",
  "em": "🏷️",
  "lesson": 1,
  "explain": [
   "Đem nhà, xe, đồ vật… cho người khác dùng và thu tiền. Chiều “đưa ra ngoài” (出) — người làm là chủ."
  ],
  "usage": "出租房子 · 房间出租 · 出租车 (taxi) · 出租信息.",
  "collo": [
   "出租房子",
   "出租信息",
   "房间出租",
   "出租车"
  ],
  "colloFull": [
   {
    "zh": "出租房子",
    "py": "Chūzū fángzi",
    "vn": "cho thuê nhà"
   },
   {
    "zh": "出租信息",
    "py": "Chūzū xìnxī",
    "vn": "tin cho thuê"
   },
   {
    "zh": "房间出租",
    "py": "Fángjiān chūzū",
    "vn": "phòng cho thuê"
   },
   {
    "zh": "出租车",
    "py": "Chūzūchē",
    "vn": "xe taxi"
   }
  ],
  "patterns": [
   {
    "s": "Chủ nhà + 出租 + nhà / phòng",
    "m": "出租 = cho thuê (chủ làm)"
   },
   {
    "s": "出租 ≠ 租",
    "m": "租 = thuê (người đi thuê) / cũng có thể là cho thuê"
   }
  ],
  "ex_zh": "这个房子有两个房间，那个大房间出租，房租每月5500元。",
  "ex_py": "Zhège fángzi yǒu liǎng gè fángjiān, nàge dà fángjiān chūzū, fángzū měi yuè 5 5 0 0 yuán.",
  "ex_vn": "Căn nhà này có hai phòng, phòng lớn kia cho thuê, tiền thuê mỗi tháng 5500 tệ.",
  "exList": [
   {
    "zh": "这个房子有两个房间，那个大房间出租，房租每月5500元。",
    "py": "Zhège fángzi yǒu liǎng gè fángjiān, nàge dà fángjiān chūzū, fángzū měi yuè 5 5 0 0 yuán.",
    "vn": "Căn nhà này có hai phòng, phòng lớn kia cho thuê, tiền thuê mỗi tháng 5500 tệ."
   },
   {
    "zh": "她在网上查找到一条出租信息。",
    "py": "Tā zài wǎngshàng cházhǎo dào yì tiáo chūzū xìnxī.",
    "vn": "Cô ấy tìm thấy trên mạng một tin cho thuê nhà."
   }
  ],
  "hanzi": [
   {
    "c": "出",
    "p": "chū",
    "type": "独体字 · Chữ đơn",
    "st": 5,
    "ord": "凵 → 凵 chồng",
    "rad": "凵 (khảm)",
    "mean": "ra",
    "tip": "Chữ tượng hình bàn chân bước RA khỏi hang → RA, kết hợp 演 thành 演出 = DIỄN RA trước khán giả.",
    "cf": "山 (shān – \"núi\", tự dạng gần giống)",
    "w": "演出 / 出来 / 出发"
   },
   {
    "c": "租",
    "p": "zū",
    "type": "左右结构 · Trái-phải",
    "st": 10,
    "ord": "禾 trái → 且 phải",
    "rad": "禾 (hòa)",
    "mean": "thuê",
    "tip": "Lúa 禾 + 且 → nộp lúa để thuê đất → THUÊ, TÔ. 租房, 出租车, 房租.",
    "cf": "粗 (cū – thô, Bài 15)",
    "w": "租 / 租房 / 出租车 / 房租"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Căn phòng lớn này cho thuê, mỗi tháng 3000 tệ.",
    "answer": "这个大房间出租，每月三千元。",
    "answerPy": "Zhège dà fángjiān chūzū, měi yuè sān qiān yuán.",
    "note": "出租 — người nói là chủ nhà.",
    "pair": "N + 出租"
   },
   {
    "promptLang": "vi",
    "prompt": "Cùng với số sinh viên ngày càng nhiều, nhà cho thuê gần trường cũng ngày càng đắt.",
    "answer": "随着学生越来越多，学校附近出租的房子也越来越贵。",
    "answerPy": "Suízhe xuésheng yuèláiyuè duō, xuéxiào fùjìn chūzū de fángzi yě yuèláiyuè guì.",
    "note": "Ôn 随着 (Bài 1 · điểm 3).",
    "pair": "随着……，越来越……"
   }
  ]
 },
 {
  "n": 3,
  "zh": "房租",
  "py": "fángzū",
  "pos": "Danh từ",
  "vn": "tiền thuê nhà",
  "hv": "phòng tô",
  "em": "💴",
  "lesson": 1,
  "explain": [
   "Số tiền người thuê trả cho chủ nhà (thường tính theo tháng)."
  ],
  "usage": "房租每月…元 · 交房租 · 房租不高 / 很贵.",
  "collo": [
   "交房租",
   "房租不高",
   "房租太贵",
   "每月房租"
  ],
  "colloFull": [
   {
    "zh": "交房租",
    "py": "Jiāo fángzū",
    "vn": "nộp tiền thuê nhà"
   },
   {
    "zh": "房租不高",
    "py": "Fángzū bù gāo",
    "vn": "tiền thuê không cao"
   },
   {
    "zh": "房租太贵",
    "py": "Fángzū tài guì",
    "vn": "tiền thuê quá đắt"
   },
   {
    "zh": "每月房租",
    "py": "Měi yuè fángzū",
    "vn": "tiền thuê hằng tháng"
   }
  ],
  "patterns": [
   {
    "s": "房租 + 高 / 低 / 贵 / 便宜",
    "m": "Nói mức tiền thuê"
   },
   {
    "s": "交 + 房租",
    "m": "✗ 给房租 → ✓ 交房租"
   }
  ],
  "ex_zh": "那个大房间出租，房租每月5500元。",
  "ex_py": "Nàge dà fángjiān chūzū, fángzū měi yuè 5 5 0 0 yuán.",
  "ex_vn": "Phòng lớn kia cho thuê, tiền thuê mỗi tháng 5500 tệ.",
  "exList": [
   {
    "zh": "那个大房间出租，房租每月5500元。",
    "py": "Nàge dà fángjiān chūzū, fángzū měi yuè 5 5 0 0 yuán.",
    "vn": "Phòng lớn kia cho thuê, tiền thuê mỗi tháng 5500 tệ."
   },
   {
    "zh": "这个小区环境好，房租也不高，一个月才5000元。",
    "py": "Zhège xiǎoqū huánjìng hǎo, fángzū yě bù gāo, yí gè yuè cái 5 0 0 0 yuán.",
    "vn": "Khu chung cư này môi trường tốt, tiền thuê cũng không cao, một tháng chỉ 5000 tệ."
   }
  ],
  "hanzi": [
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
   },
   {
    "c": "租",
    "p": "zū",
    "type": "左右结构 · Trái-phải",
    "st": 10,
    "ord": "禾 trái → 且 phải",
    "rad": "禾 (hòa)",
    "mean": "thuê",
    "tip": "Lúa 禾 + 且 → nộp lúa để thuê đất → THUÊ, TÔ. 租房, 出租车, 房租.",
    "cf": "粗 (cū – thô, Bài 15)",
    "w": "租 / 租房 / 出租车 / 房租"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Tiền thuê nhà ở đây một tháng chỉ 2000 tệ, rẻ thật!",
    "answer": "这里的房租一个月才两千元，真便宜！",
    "answerPy": "Zhèli de fángzū yí gè yuè cái liǎng qiān yuán, zhēn piányi!",
    "note": "Ôn 才 = chỉ (ít) (HSK 3).",
    "pair": "才 + số lượng"
   },
   {
    "promptLang": "vi",
    "prompt": "Nếu tiền thuê không cao thì tôi thuê căn này.",
    "answer": "要是房租不高，我就租这个房子。",
    "answerPy": "Yàoshi fángzū bù gāo, wǒ jiù zū zhège fángzi.",
    "note": "Ôn 要是……就…… (Bài 1 · điểm 2).",
    "pair": "要是……就……"
   }
  ]
 },
 {
  "n": 4,
  "zh": "收拾",
  "py": "shōushi",
  "pos": "Động từ",
  "vn": "dọn dẹp, thu dọn, sắp xếp",
  "hv": "thu thập",
  "em": "🧹",
  "lesson": 1,
  "explain": [
   "Dọn cho gọn gàng, sạch sẽ (phòng, đồ đạc, bàn ăn…). Bẫy Hán Việt: “thu thập” nhưng nghĩa là DỌN DẸP; “thu thập (thông tin)” là 收集."
  ],
  "usage": "收拾房间 · 收拾好了 · 收拾得干干净净 · 收拾东西.",
  "collo": [
   "收拾房间",
   "收拾东西",
   "收拾好了",
   "收拾厨房"
  ],
  "colloFull": [
   {
    "zh": "收拾房间",
    "py": "Shōushi fángjiān",
    "vn": "dọn phòng"
   },
   {
    "zh": "收拾东西",
    "py": "Shōushi dōngxi",
    "vn": "thu dọn đồ đạc"
   },
   {
    "zh": "收拾好了",
    "py": "Shōushi hǎo le",
    "vn": "dọn xong rồi"
   },
   {
    "zh": "收拾厨房",
    "py": "Shōushi chúfáng",
    "vn": "dọn bếp"
   }
  ],
  "patterns": [
   {
    "s": "把 + N + 收拾 + 得 + Adj",
    "m": "Câu chữ 把 + bổ ngữ trạng thái (HSK 3)"
   },
   {
    "s": "收拾 + 好 / 干净",
    "m": "Bổ ngữ kết quả: dọn xong / sạch"
   }
  ],
  "ex_zh": "现在已经收拾好了，想租的话，今天就可以搬进来。",
  "ex_py": "Xiànzài yǐjīng shōushi hǎo le, xiǎng zū dehuà, jīntiān jiù kěyǐ bān jìnlái.",
  "ex_vn": "Bây giờ đã dọn dẹp xong rồi, muốn thuê thì hôm nay có thể dọn vào luôn.",
  "exList": [
   {
    "zh": "现在已经收拾好了，想租的话，今天就可以搬进来。",
    "py": "Xiànzài yǐjīng shōushi hǎo le, xiǎng zū dehuà, jīntiān jiù kěyǐ bān jìnlái.",
    "vn": "Bây giờ đã dọn dẹp xong rồi, muốn thuê thì hôm nay có thể dọn vào luôn."
   },
   {
    "zh": "搬家以前，我们要先把东西收拾好。",
    "py": "Bānjiā yǐqián, wǒmen yào xiān bǎ dōngxi shōushi hǎo.",
    "vn": "Trước khi chuyển nhà, chúng ta phải thu dọn đồ đạc xong đã."
   }
  ],
  "hanzi": [
   {
    "c": "收",
    "p": "shōu",
    "type": "左右结构 · Trái-phải",
    "st": 6,
    "ord": "丩 trái → 攵 phải",
    "rad": "攵 (phộc)",
    "mean": "thu, nhận",
    "tip": "丩 + 攵 → gom lại → THU, NHẬN. 收到, 收入 (Bài 10), 收拾, 收回.",
    "cf": "放 (fàng – thả, đối lập)",
    "w": "收 / 收到 / 收入 / 收拾"
   },
   {
    "c": "拾",
    "p": "shí",
    "type": "左右结构 · Trái-phải",
    "st": 9,
    "ord": "扌 trái → 合 phải",
    "rad": "扌 (thủ)",
    "mean": "nhặt",
    "tip": "Tay 扌 + 合 → tay gom lại → NHẶT, THẬP. 收拾 = thu nhặt = dọn dẹp. Cũng là số 10 viết kép.",
    "cf": "合 (hé – hợp)",
    "w": "收拾 / 拾"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Ngày nào tôi cũng dọn phòng sạch sẽ.",
    "answer": "我每天都把房间收拾干净。",
    "answerPy": "Wǒ měi tiān dōu bǎ fángjiān shōushi gānjìng.",
    "note": "Ôn câu chữ 把 + bổ ngữ kết quả 干净 (HSK 3).",
    "pair": "把……收拾干净"
   },
   {
    "promptLang": "vi",
    "prompt": "Ăn cơm xong tôi dọn bếp rồi mới đi công viên chạy bộ.",
    "answer": "我吃完饭并收拾好厨房后，才去公园跑步。",
    "answerPy": "Wǒ chī wán fàn bìng shōushi hǎo chúfáng hòu, cái qù gōngyuán pǎobù.",
    "note": "Đáp án gợi ý của sách (Bài 2 · điểm 3).",
    "pair": "并 + V"
   }
  ]
 },
 {
  "n": 5,
  "zh": "租",
  "py": "zū",
  "pos": "Động từ",
  "vn": "thuê; cho thuê",
  "hv": "tô",
  "em": "🔑",
  "lesson": 1,
  "explain": [
   "Trả tiền để dùng nhà, xe… của người khác một thời gian (thuê). Khi chủ ngữ là chủ nhà thì là “cho thuê”."
  ],
  "usage": "租房子 · 租到 · 租下来 · 租给 + ai.",
  "collo": [
   "租房子",
   "租到房子",
   "租下来",
   "租给别人"
  ],
  "colloFull": [
   {
    "zh": "租房子",
    "py": "Zū fángzi",
    "vn": "thuê nhà"
   },
   {
    "zh": "租到房子",
    "py": "Zū dào fángzi",
    "vn": "thuê được nhà"
   },
   {
    "zh": "租下来",
    "py": "Zū xiàlái",
    "vn": "thuê luôn (chốt thuê)"
   },
   {
    "zh": "租给别人",
    "py": "Zū gěi biérén",
    "vn": "cho người khác thuê"
   }
  ],
  "patterns": [
   {
    "s": "租 + 到 / 下来",
    "m": "Bổ ngữ kết quả / xu hướng: thuê được, chốt thuê"
   },
   {
    "s": "A + 把房子 + 租给 + B",
    "m": "A cho B thuê nhà"
   }
  ],
  "ex_zh": "如果决定租了，告诉我就是了。",
  "ex_py": "Rúguǒ juédìng zū le, gàosu wǒ jiùshì le.",
  "ex_vn": "Nếu quyết định thuê thì cứ báo tôi là được.",
  "exList": [
   {
    "zh": "如果决定租了，告诉我就是了。",
    "py": "Rúguǒ juédìng zū le, gàosu wǒ jiùshì le.",
    "vn": "Nếu quyết định thuê thì cứ báo tôi là được."
   },
   {
    "zh": "要租一个好房子也不容易，需要多多比较。",
    "py": "Yào zū yí gè hǎo fángzi yě bù róngyì, xūyào duō duō bǐjiào.",
    "vn": "Muốn thuê được một căn nhà tốt cũng không dễ, cần so sánh nhiều."
   }
  ],
  "hanzi": [
   {
    "c": "租",
    "p": "zū",
    "type": "左右结构 · Trái-phải",
    "st": 10,
    "ord": "禾 trái → 且 phải",
    "rad": "禾 (hòa)",
    "mean": "thuê",
    "tip": "Lúa 禾 + 且 → nộp lúa để thuê đất → THUÊ, TÔ. 租房, 出租车, 房租.",
    "cf": "粗 (cū – thô, Bài 15)",
    "w": "租 / 租房 / 出租车 / 房租"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Bạn thấy hài lòng thì cứ thuê luôn là được.",
    "answer": "你要是满意，租下来就是了。",
    "answerPy": "Nǐ yàoshi mǎnyì, zū xiàlái jiùshì le.",
    "note": "Đáp án gợi ý của sách (Bài 2 · điểm 1) + 要是 (Bài 1).",
    "pair": "要是……，V就是了"
   },
   {
    "promptLang": "vi",
    "prompt": "Muốn thuê được nhà tốt, một mặt phải xem giá, mặt khác phải xem môi trường.",
    "answer": "要租到好房子，一方面要看价格，另一方面要看环境。",
    "answerPy": "Yào zū dào hǎo fángzi, yìfāngmiàn yào kàn jiàgé, lìngyìfāngmiàn yào kàn huánjìng.",
    "note": "Ôn 一方面……另一方面…… (Bài 1 · điểm 4).",
    "pair": "一方面……另一方面……"
   }
  ]
 },
 {
  "n": 6,
  "zh": "嗯",
  "py": "ǹg",
  "pos": "Thán từ",
  "vn": "ừ, ừm, vâng (đồng ý)",
  "hv": "ân",
  "em": "🙂",
  "lesson": 1,
  "explain": [
   "Tiếng đáp lại tỏ ý đồng ý / đã nghe (đọc thanh 4 ǹg). Rất hay dùng trong khẩu ngữ."
  ],
  "usage": "嗯，好的 · 嗯，我知道了 · 嗯，……",
  "collo": [
   "嗯，好的",
   "嗯，知道了",
   "嗯，没错",
   "嗯，我同意"
  ],
  "colloFull": [
   {
    "zh": "嗯，好的",
    "py": "Ǹg, hǎo de",
    "vn": "ừ, được"
   },
   {
    "zh": "嗯，知道了",
    "py": "Ǹg, zhīdao le",
    "vn": "ừ, biết rồi"
   },
   {
    "zh": "嗯，没错",
    "py": "Ǹg, méicuò",
    "vn": "ừ, đúng thế"
   },
   {
    "zh": "嗯，我同意",
    "py": "Ǹg, wǒ tóngyì",
    "vn": "ừm, tôi đồng ý"
   }
  ],
  "patterns": [
   {
    "s": "嗯，+ câu đáp",
    "m": "Đứng đầu câu trả lời, tỏ ý đồng ý"
   }
  ],
  "ex_zh": "嗯，这个房间真不小，还挺亮。",
  "ex_py": "Ǹg, zhège fángjiān zhēn bù xiǎo, hái tǐng liàng.",
  "ex_vn": "Ừm, căn phòng này rộng thật đấy, lại còn khá sáng.",
  "exList": [
   {
    "zh": "嗯，这个房间真不小，还挺亮。",
    "py": "Ǹg, zhège fángjiān zhēn bù xiǎo, hái tǐng liàng.",
    "vn": "Ừm, căn phòng này rộng thật đấy, lại còn khá sáng."
   },
   {
    "zh": "嗯，我知道了，明天一定准时到。",
    "py": "Ǹg, wǒ zhīdao le, míngtiān yídìng zhǔnshí dào.",
    "vn": "Vâng, em biết rồi, mai nhất định đến đúng giờ."
   }
  ],
  "hanzi": [
   {
    "c": "嗯",
    "p": "ǹg",
    "type": "形声字 · Chữ hình thanh",
    "st": 13,
    "ord": "口 → 因 → 心",
    "rad": "口 (khẩu – miệng)",
    "mean": "ừ, ừm (tiếng đáp, tỏ ý đồng ý)",
    "tip": "Bộ 口 (miệng phát ra tiếng) + 恩 ēn (chỉ âm): tiếng “ừm” bật ra từ miệng khi đồng ý.",
    "cf": "恩 ēn (ân huệ) — không có bộ 口",
    "w": "嗯 / 嗯嗯"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Ừ, khu chung cư này cách trường mình cũng không xa.",
    "answer": "嗯，这个小区离我们学校也不远。",
    "answerPy": "Ǹg, zhège xiǎoqū lí wǒmen xuéxiào yě bù yuǎn.",
    "note": "Ôn câu 离 chỉ khoảng cách (HSK 2/3).",
    "pair": "A 离 B 不远"
   },
   {
    "promptLang": "vi",
    "prompt": "Ừm, tớ cũng thấy căn này khá sáng.",
    "answer": "嗯，我也觉得这个房子挺亮的。",
    "answerPy": "Ǹg, wǒ yě juéde zhège fángzi tǐng liàng de.",
    "note": "挺……的 = khá … (HSK 3).",
    "pair": "挺……的"
   }
  ]
 },
 {
  "n": 7,
  "zh": "亮",
  "py": "liàng",
  "pos": "Tính từ / Động từ",
  "vn": "sáng; sáng lên, bật sáng",
  "hv": "lượng",
  "em": "💡",
  "lesson": 1,
  "explain": [
   "Tính từ: có nhiều ánh sáng.",
   "Động từ: (đèn, trời) sáng lên."
  ],
  "usage": "房间很亮 · 挺亮 · 天亮了 · 灯亮了.",
  "collo": [
   "很亮",
   "天亮了",
   "灯亮了",
   "又大又亮"
  ],
  "colloFull": [
   {
    "zh": "很亮",
    "py": "Hěn liàng",
    "vn": "rất sáng"
   },
   {
    "zh": "天亮了",
    "py": "Tiān liàng le",
    "vn": "trời sáng rồi"
   },
   {
    "zh": "灯亮了",
    "py": "Dēng liàng le",
    "vn": "đèn sáng rồi"
   },
   {
    "zh": "又大又亮",
    "py": "Yòu dà yòu liàng",
    "vn": "vừa rộng vừa sáng"
   }
  ],
  "patterns": [
   {
    "s": "N + 很 / 挺 + 亮",
    "m": "Tính từ"
   },
   {
    "s": "天 / 灯 + 亮了",
    "m": "Động từ: sáng lên"
   }
  ],
  "ex_zh": "嗯，这个房间真不小，还挺亮。",
  "ex_py": "Ǹg, zhège fángjiān zhēn bù xiǎo, hái tǐng liàng.",
  "ex_vn": "Ừm, căn phòng này rộng thật đấy, lại còn khá sáng.",
  "exList": [
   {
    "zh": "嗯，这个房间真不小，还挺亮。",
    "py": "Ǹg, zhège fángjiān zhēn bù xiǎo, hái tǐng liàng.",
    "vn": "Ừm, căn phòng này rộng thật đấy, lại còn khá sáng."
   },
   {
    "zh": "天还没亮，妈妈就起床做早饭了。",
    "py": "Tiān hái méi liàng, māma jiù qǐchuáng zuò zǎofàn le.",
    "vn": "Trời còn chưa sáng, mẹ đã dậy nấu bữa sáng rồi."
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
    "prompt": "Phòng khách vừa rộng vừa sáng, tôi rất thích.",
    "answer": "客厅又大又亮，我很喜欢。",
    "answerPy": "Kètīng yòu dà yòu liàng, wǒ hěn xǐhuan.",
    "note": "Ôn 又……又…… (HSK 3).",
    "pair": "又……又……"
   },
   {
    "promptLang": "vi",
    "prompt": "Căn phòng này khá sáng, không quá thì giá hơi đắt.",
    "answer": "这个房间挺亮，不过价格有点儿贵。",
    "answerPy": "Zhège fángjiān tǐng liàng, búguò jiàgé yǒudiǎnr guì.",
    "note": "Kết hợp 不过 (Bài 2 · điểm 2).",
    "pair": "……，不过……"
   }
  ]
 },
 {
  "n": 8,
  "zh": "就是",
  "py": "jiùshì",
  "pos": "Trợ từ",
  "vn": "(cứ…) là được; thôi mà (đặt cuối câu, đi với 了)",
  "hv": "tựu thị",
  "em": "👌",
  "lesson": 1,
  "explain": [
   "Đặt cuối câu thành 「……就是了」, khẳng định chắc chắn, làm người nghe yên tâm: “cứ … là được”."
  ],
  "usage": "告诉我就是了 · 你放心就是了 · 下次努力就是了.",
  "collo": [
   "告诉我就是了",
   "放心就是了",
   "努力就是了",
   "买下来就是了"
  ],
  "colloFull": [
   {
    "zh": "告诉我就是了",
    "py": "Gàosu wǒ jiùshì le",
    "vn": "cứ báo tôi là được"
   },
   {
    "zh": "放心就是了",
    "py": "Fàngxīn jiùshì le",
    "vn": "cứ yên tâm"
   },
   {
    "zh": "努力就是了",
    "py": "Nǔlì jiùshì le",
    "vn": "cố gắng là được"
   },
   {
    "zh": "买下来就是了",
    "py": "Mǎi xiàlái jiùshì le",
    "vn": "cứ mua luôn đi"
   }
  ],
  "patterns": [
   {
    "s": "V + (O) + 就是了",
    "m": "Bài 2 · điểm ngữ pháp 1"
   },
   {
    "s": "就是了 ≠ 就是 (chính là)",
    "m": "就是 giữa câu = chính là; cuối câu + 了 = là được"
   }
  ],
  "ex_zh": "如果决定租了，告诉我就是了。",
  "ex_py": "Rúguǒ juédìng zū le, gàosu wǒ jiùshì le.",
  "ex_vn": "Nếu quyết định thuê thì cứ báo tôi là được.",
  "exList": [
   {
    "zh": "如果决定租了，告诉我就是了。",
    "py": "Rúguǒ juédìng zū le, gàosu wǒ jiùshì le.",
    "vn": "Nếu quyết định thuê thì cứ báo tôi là được."
   },
   {
    "zh": "我一定能办到，您放心就是了。",
    "py": "Wǒ yídìng néng bàn dào, nín fàngxīn jiùshì le.",
    "vn": "Tôi nhất định làm được, ông cứ yên tâm là được."
   }
  ],
  "hanzi": [
   {
    "c": "就",
    "p": "jiù",
    "type": "会意字 · Chữ hội ý",
    "st": 12,
    "ord": "京 → 尤",
    "rad": "尤 (vưu) · bộ 亠 (đầu)",
    "mean": "thì, liền, ngay; chính là",
    "tip": "京 (kinh đô, nơi cao) + 尤 (nổi bật): đến chỗ cao mà ở → “tựu” (tới, liền). Hay gặp: 就是了, 就是, 就要……了.",
    "cf": "京 jīng (kinh đô) — thiếu 尤 bên phải",
    "w": "就是 / 就是了 / 成就"
   },
   {
    "c": "是",
    "p": "shì",
    "type": "上下结构 · Trên-dưới",
    "st": 9,
    "ord": "日(nhật) trên → 疋(sơ biến thể) dưới",
    "rad": "日 (nhật – mặt trời)",
    "mean": "là, đúng",
    "tip": "日(mặt trời) luôn ĐÚNG giờ mọc → mở rộng thành nghĩa \"ĐÚNG, LÀ\".",
    "cf": "定 (dìng – \"quyết định\")",
    "w": "还是 / 是学生 / 不是"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Không biết làm cũng không sao, tôi dạy bạn là được.",
    "answer": "不会做没关系，我教你就是了。",
    "answerPy": "Bú huì zuò méiguānxì, wǒ jiào nǐ jiùshì le.",
    "note": "V + 就是了 trấn an người nghe (Bài 2 · điểm 1).",
    "pair": "……就是了"
   },
   {
    "promptLang": "vi",
    "prompt": "Nếu bạn không biết đi thế nào thì cứ bắt taxi là được.",
    "answer": "要是你不知道怎么去，打车就是了。",
    "answerPy": "Yàoshi nǐ bù zhīdao zěnme qù, dǎchē jiùshì le.",
    "note": "Ôn 要是 (Bài 1 · điểm 2).",
    "pair": "要是……，V就是了"
   }
  ]
 },
 {
  "n": 9,
  "zh": "种",
  "py": "zhòng",
  "pos": "Động từ",
  "vn": "trồng (cây, hoa)",
  "hv": "chủng",
  "em": "🌱",
  "lesson": 2,
  "explain": [
   "Đặt hạt giống, cây con xuống đất cho mọc lên. Lưu ý: đọc zhòng (trồng); đọc zhǒng là lượng từ “loại” (一种)."
  ],
  "usage": "种树 · 种花 · 种了不少树.",
  "collo": [
   "种树",
   "种花",
   "种菜",
   "种了不少树"
  ],
  "colloFull": [
   {
    "zh": "种树",
    "py": "Zhòng shù",
    "vn": "trồng cây"
   },
   {
    "zh": "种花",
    "py": "Zhòng huā",
    "vn": "trồng hoa"
   },
   {
    "zh": "种菜",
    "py": "Zhòng cài",
    "vn": "trồng rau"
   },
   {
    "zh": "种了不少树",
    "py": "Zhòng le bù shǎo shù",
    "vn": "trồng không ít cây"
   }
  ],
  "patterns": [
   {
    "s": "种 zhòng (trồng) ≠ 种 zhǒng (loại)",
    "m": "种树 / 一种水果"
   },
   {
    "s": "nơi + 种了 + N",
    "m": "Câu tồn hiện: nơi nào trồng cái gì"
   }
  ],
  "ex_zh": "这个小区到处是花，还种了不少树。",
  "ex_py": "Zhège xiǎoqū dàochù shì huā, hái zhòng le bù shǎo shù.",
  "ex_vn": "Khu chung cư này đâu đâu cũng có hoa, còn trồng không ít cây.",
  "exList": [
   {
    "zh": "这个小区到处是花，还种了不少树。",
    "py": "Zhège xiǎoqū dàochù shì huā, hái zhòng le bù shǎo shù.",
    "vn": "Khu chung cư này đâu đâu cũng có hoa, còn trồng không ít cây."
   },
   {
    "zh": "爷爷在院子里种了很多菜。",
    "py": "Yéye zài yuàn zi lǐ zhòng le hěn duō cài.",
    "vn": "Ông nội trồng rất nhiều rau trong sân."
   }
  ],
  "hanzi": [
   {
    "c": "种",
    "p": "zhǒng",
    "type": "形声字 · Chữ hình thanh",
    "st": 9,
    "ord": "禾 → 中",
    "rad": "禾 (hoà – lúa)",
    "mean": "hạt giống; loại",
    "tip": "禾 (cây lúa) + 中 (chỉ âm): hạt giống của lúa → giống, loại.",
    "cf": "和 hé — bên phải là 口",
    "w": "一种 / 这种 / 几种"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Trước nhà tôi trồng hai cây to.",
    "answer": "我家门前种了两棵大树。",
    "answerPy": "Wǒ jiā mén qián zhòng le liǎng kē dà shù.",
    "note": "Câu tồn hiện: nơi + V了 + số lượng + N (HSK 3).",
    "pair": "nơi + V了 + N"
   },
   {
    "promptLang": "vi",
    "prompt": "Cùng với thời tiết ấm dần lên, rất nhiều người ra ngoài trồng cây.",
    "answer": "随着天气越来越暖和，很多人都出去种树。",
    "answerPy": "Suízhe tiānqì yuèláiyuè nuǎnhuo, hěn duō rén dōu chūqù zhòng shù.",
    "note": "Ôn 随着 (Bài 1 · điểm 3).",
    "pair": "随着……"
   }
  ]
 },
 {
  "n": 10,
  "zh": "周围",
  "py": "zhōuwéi",
  "pos": "Danh từ",
  "vn": "xung quanh, chung quanh",
  "hv": "chu vi",
  "em": "🏘️",
  "lesson": 2,
  "explain": [
   "Khu vực bao quanh một nơi / một người. Bẫy Hán Việt: “chu vi” trong toán là 周长; 周围 là “xung quanh”."
  ],
  "usage": "周围的环境 · 小区周围 · 周围很安静.",
  "collo": [
   "周围的环境",
   "小区周围",
   "周围的人",
   "看看周围"
  ],
  "colloFull": [
   {
    "zh": "周围的环境",
    "py": "Zhōuwéi de huánjìng",
    "vn": "môi trường xung quanh"
   },
   {
    "zh": "小区周围",
    "py": "Xiǎoqū zhōuwéi",
    "vn": "xung quanh khu chung cư"
   },
   {
    "zh": "周围的人",
    "py": "Zhōuwéi de rén",
    "vn": "những người xung quanh"
   },
   {
    "zh": "看看周围",
    "py": "Kàn kàn zhōuwéi",
    "vn": "nhìn xung quanh"
   }
  ],
  "patterns": [
   {
    "s": "N + 周围",
    "m": "Xung quanh nơi nào"
   },
   {
    "s": "周围的 + N",
    "m": "Định ngữ: … ở xung quanh"
   }
  ],
  "ex_zh": "这个小区到处是花，还种了不少树，周围也很安静。",
  "ex_py": "Zhège xiǎoqū dàochù shì huā, hái zhòng le bù shǎo shù, zhōuwéi yě hěn ānjìng.",
  "ex_vn": "Khu chung cư này đâu đâu cũng có hoa, còn trồng không ít cây, xung quanh cũng rất yên tĩnh.",
  "exList": [
   {
    "zh": "这个小区到处是花，还种了不少树，周围也很安静。",
    "py": "Zhège xiǎoqū dàochù shì huā, hái zhòng le bù shǎo shù, zhōuwéi yě hěn ānjìng.",
    "vn": "Khu chung cư này đâu đâu cũng có hoa, còn trồng không ít cây, xung quanh cũng rất yên tĩnh."
   },
   {
    "zh": "听说小区周围有很多公司，很多年轻人都租住在附近。",
    "py": "Tīngshuō xiǎoqū zhōuwéi yǒu hěn duō gōngsī, hěn duō niánqīngrén dōu zū zhù zài fùjìn.",
    "vn": "Nghe nói xung quanh khu chung cư có nhiều công ty, nhiều người trẻ thuê nhà ở gần đây."
   }
  ],
  "hanzi": [
   {
    "c": "周",
    "p": "zhōu",
    "type": "会意字 · Chữ hội ý",
    "st": 8,
    "ord": "冂 → 土 → 口",
    "rad": "口 (khẩu)",
    "mean": "tuần; vòng quanh",
    "tip": "这周 / 上周 / 下周 — dùng như 星期.",
    "cf": "星期 (xīngqī)",
    "w": "周 / 这周 / 周末"
   },
   {
    "c": "围",
    "p": "wéi",
    "type": "半包围结构 · Bán bao vây (giản thể)",
    "st": 7,
    "ord": "囗 bao ngoài → 韦 trong",
    "rad": "囗 (vi – bao quanh)",
    "mean": "vây quanh",
    "tip": "Bộ 囗(khung bao quanh) + 韦(biểu âm) → BAO QUANH một khu vực, kết hợp 周(vòng) thành 周围 = XUNG QUANH.",
    "cf": "围 dễ nhầm với 因 (yīn – \"nguyên nhân\", bộ 囗 khác)",
    "w": "周围 / 围绕 / 包围"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Môi trường xung quanh nhà rất tốt, lại còn yên tĩnh.",
    "answer": "房子周围的环境很好，还很安静。",
    "answerPy": "Fángzi zhōuwéi de huánjìng hěn hǎo, hái hěn ānjìng.",
    "note": "周围的 + 环境.",
    "pair": "周围的环境"
   },
   {
    "promptLang": "vi",
    "prompt": "Xung quanh trường có bất kỳ thứ gì bạn cần: siêu thị, nhà ăn, ngân hàng…",
    "answer": "学校周围有你需要的任何东西：超市、饭馆、银行……",
    "answerPy": "Xuéxiào zhōuwéi yǒu nǐ xūyào de rènhé dōngxi: chāoshì, fànguǎn, yínháng……",
    "note": "Ôn 任何 (Bài 1 · điểm 1).",
    "pair": "任何 + N"
   }
  ]
 },
 {
  "n": 11,
  "zh": "不过",
  "py": "búguò",
  "pos": "Liên từ",
  "vn": "nhưng, có điều, có điều là",
  "hv": "bất quá",
  "em": "↪️",
  "lesson": 2,
  "explain": [
   "Đứng đầu vế sau, nêu ý chuyển ngoặt nhẹ (nhẹ hơn 但是, hay dùng trong khẩu ngữ): “… có điều …”."
  ],
  "usage": "……，不过…… · 好是好，不过……",
  "collo": [
   "不过我听说",
   "不过有点儿贵",
   "不过没关系",
   "不过很快就……"
  ],
  "colloFull": [
   {
    "zh": "不过我听说",
    "py": "Búguò wǒ tīngshuō",
    "vn": "có điều tôi nghe nói"
   },
   {
    "zh": "不过有点儿贵",
    "py": "Búguò yǒudiǎnr guì",
    "vn": "có điều hơi đắt"
   },
   {
    "zh": "不过没关系",
    "py": "Búguò méiguānxì",
    "vn": "nhưng không sao"
   },
   {
    "zh": "不过很快就……",
    "py": "Búguò hěn kuài jiù……",
    "vn": "nhưng rất nhanh đã …"
   }
  ],
  "patterns": [
   {
    "s": "Vế 1，不过 + vế 2",
    "m": "Bài 2 · điểm ngữ pháp 2"
   },
   {
    "s": "不过 nhẹ hơn 但是; không đi với 虽然 ở vế đầu như 但是",
    "m": "✓ 虽然……，但是…… thông dụng hơn"
   }
  ],
  "ex_zh": "这个小区的环境真不错，不过我听说，附近有十几家公司。",
  "ex_py": "Zhègè xiǎoqū de huánjìng zhēn búcuò, búguò wǒ tīngshuō, fùjìn yǒu shí jǐ jiā gōngsī.",
  "ex_vn": "Môi trường khu chung cư này đẹp thật, có điều tôi nghe nói gần đây có mười mấy công ty.",
  "exList": [
   {
    "zh": "这个小区的环境真不错，不过我听说，附近有十几家公司。",
    "py": "Zhègè xiǎoqū de huánjìng zhēn búcuò, búguò wǒ tīngshuō, fùjìn yǒu shí jǐ jiā gōngsī.",
    "vn": "Môi trường khu chung cư này đẹp thật, có điều tôi nghe nói gần đây có mười mấy công ty."
   },
   {
    "zh": "我们在动物园看见了很多动物，不过没看见大熊猫。",
    "py": "Wǒmen zài dòngwùyuán kànjiàn le hěn duō dòngwù, búguò méi kànjiàn dàxióngmāo.",
    "vn": "Chúng tôi thấy rất nhiều động vật ở sở thú, có điều không thấy gấu trúc."
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
    "prompt": "Chiếc điện thoại này cũng được, có điều hơi đắt.",
    "answer": "这个手机还可以，不过有点儿贵。",
    "answerPy": "Zhège shǒujī hái kěyǐ, búguò yǒudiǎnr guì.",
    "note": "Đáp án gợi ý của sách (Bài 2 · điểm 2).",
    "pair": "……，不过……"
   },
   {
    "promptLang": "vi",
    "prompt": "Mới đến Bắc Kinh tôi chưa quen thời tiết, có điều rất nhanh đã thích nghi.",
    "answer": "我刚来北京时还不太习惯这里的天气，不过很快就适应了。",
    "answerPy": "Wǒ gāng lái Běijīng shí hái bú tài xíguàn zhèli de tiānqì, búguò hěn kuài jiù shìyìng le.",
    "note": "Ví dụ của sách; ôn 适应 (Bài 1 · từ mới).",
    "pair": "不过很快就……"
   }
  ]
 },
 {
  "n": 12,
  "zh": "毕业",
  "py": "bìyè",
  "pos": "Động từ",
  "vn": "tốt nghiệp",
  "hv": "tất nghiệp",
  "em": "🎓",
  "lesson": 2,
  "explain": [
   "Học xong một bậc học ở trường. Là động từ ly hợp: KHÔNG mang tân ngữ trực tiếp (✗ 毕业北京大学 → ✓ 从北京大学毕业 / 北京大学毕业)."
  ],
  "usage": "刚毕业 · 大学毕业 · 毕业以后 · 毕业了三年.",
  "collo": [
   "刚毕业",
   "大学毕业",
   "毕业以后",
   "毕业生"
  ],
  "colloFull": [
   {
    "zh": "刚毕业",
    "py": "Gāng bìyè",
    "vn": "mới tốt nghiệp"
   },
   {
    "zh": "大学毕业",
    "py": "Dàxué bìyè",
    "vn": "tốt nghiệp đại học"
   },
   {
    "zh": "毕业以后",
    "py": "Bìyè yǐhòu",
    "vn": "sau khi tốt nghiệp"
   },
   {
    "zh": "毕业生",
    "py": "Bìyè shēng",
    "vn": "sinh viên tốt nghiệp"
   }
  ],
  "patterns": [
   {
    "s": "从 + trường + 毕业",
    "m": "✗ 毕业大学"
   },
   {
    "s": "毕业 + 了 + thời gian",
    "m": "Đã tốt nghiệp được bao lâu"
   }
  ],
  "ex_zh": "附近有十几家公司，很多刚毕业的学生都租住在这里。",
  "ex_py": "Fùjìn yǒu shí jǐ jiā gōngsī, hěn duō gāng bìyè de xuésheng dōu zū zhù zài zhèli.",
  "ex_vn": "Gần đây có mười mấy công ty, nhiều sinh viên mới tốt nghiệp đều thuê nhà ở đây.",
  "exList": [
   {
    "zh": "附近有十几家公司，很多刚毕业的学生都租住在这里。",
    "py": "Fùjìn yǒu shí jǐ jiā gōngsī, hěn duō gāng bìyè de xuésheng dōu zū zhù zài zhèli.",
    "vn": "Gần đây có mười mấy công ty, nhiều sinh viên mới tốt nghiệp đều thuê nhà ở đây."
   },
   {
    "zh": "他毕业后来到北京工作，并在公司附近租了个房子。",
    "py": "Tā bìyè hòulái dào Běijīng gōngzuò, bìng zài gōngsī fùjìn zū le gè fángzi.",
    "vn": "Anh ấy tốt nghiệp xong đến Bắc Kinh làm việc, và thuê một căn nhà gần công ty."
   }
  ],
  "hanzi": [
   {
    "c": "毕",
    "p": "bì",
    "type": "独体字 · Chữ đơn (giản thể)",
    "st": 6,
    "ord": "nét liền",
    "rad": "比 (tỷ, biến thể)",
    "mean": "xong, hết",
    "tip": "Chữ giản thể mang nghĩa HOÀN TẤT, KẾT THÚC (một quá trình) → 毕业 = KẾT THÚC việc học, TỐT NGHIỆP.",
    "cf": "毕 dễ nhầm với 华 (huá – \"Trung Hoa\", không liên quan nghĩa)",
    "w": "毕业 / 完毕"
   },
   {
    "c": "业",
    "p": "yè",
    "type": "独体字 · Chữ đơn (giản thể)",
    "st": 5,
    "ord": "nét liền",
    "rad": "一 (nhất)",
    "mean": "nghề nghiệp; công việc",
    "tip": "Chữ giản thể mô phỏng hình cái giá gỗ để treo chuông khánh thời cổ, nơi thực hiện công việc → mở rộng thành CÔNG VIỆC, BÀI VỞ.",
    "cf": "亚 (yà – \"châu Á\", hình dáng gần giống\")",
    "w": "作业 / 工作 / 毕业"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Sau khi tốt nghiệp đại học, anh ấy muốn học tiếp thạc sĩ.",
    "answer": "本科毕业以后，他想继续读硕士。",
    "answerPy": "Běnkē bìyè yǐhòu, tā xiǎng jìxù dú shuòshì.",
    "note": "Ôn 本科, 硕士 (Bài 1 · từ mới).",
    "pair": "……毕业以后"
   },
   {
    "promptLang": "vi",
    "prompt": "Nếu xin được học bổng, tốt nghiệp xong tôi sẽ đến Trung Quốc học.",
    "answer": "要是能申请到奖学金，毕业以后我就去中国学习。",
    "answerPy": "Yàoshi néng shēnqǐng dào jiǎng xué jīn, bìyè yǐhòu wǒ jiù qù Zhōngguó xuéxí.",
    "note": "Ôn 要是……就…… (Bài 1 · điểm 2).",
    "pair": "要是……就……"
   }
  ]
 },
 {
  "n": 13,
  "zh": "恐怕",
  "py": "kǒngpà",
  "pos": "Phó từ",
  "vn": "e rằng, sợ rằng, có lẽ",
  "hv": "khủng phạ",
  "em": "😟",
  "lesson": 2,
  "explain": [
   "Nói một sự phỏng đoán (thường là điều không mong muốn), giọng lo lắng: “e là …”."
  ],
  "usage": "恐怕 + 会 / 不 + V · 恐怕来不及了.",
  "collo": [
   "恐怕会……",
   "恐怕不行",
   "恐怕来不及",
   "恐怕要下雨"
  ],
  "colloFull": [
   {
    "zh": "恐怕会……",
    "py": "Kǒngpà huì……",
    "vn": "e là sẽ …"
   },
   {
    "zh": "恐怕不行",
    "py": "Kǒngpà bùxíng",
    "vn": "e là không được"
   },
   {
    "zh": "恐怕来不及",
    "py": "Kǒngpà láibùjí",
    "vn": "e là không kịp"
   },
   {
    "zh": "恐怕要下雨",
    "py": "Kǒngpà yào xiàyǔ",
    "vn": "sợ là sắp mưa"
   }
  ],
  "patterns": [
   {
    "s": "(Sub) + 恐怕 + 会 / 不 / 要 + V",
    "m": "Phỏng đoán có chút lo lắng"
   },
   {
    "s": "恐怕 ≠ 怕 (sợ)",
    "m": "我怕狗 (sợ chó) — không dùng 恐怕"
   }
  ],
  "ex_zh": "周末他们可能会玩到很晚，恐怕会影响你休息。",
  "ex_py": "Zhōumò tāmen kěnéng huì wán dào hěn wǎn, kǒngpà huì yǐngxiǎng nǐ xiūxi.",
  "ex_vn": "Cuối tuần họ có thể chơi đến rất muộn, e là sẽ ảnh hưởng đến việc nghỉ ngơi của cậu.",
  "exList": [
   {
    "zh": "周末他们可能会玩到很晚，恐怕会影响你休息。",
    "py": "Zhōumò tāmen kěnéng huì wán dào hěn wǎn, kǒngpà huì yǐngxiǎng nǐ xiūxi.",
    "vn": "Cuối tuần họ có thể chơi đến rất muộn, e là sẽ ảnh hưởng đến việc nghỉ ngơi của cậu."
   },
   {
    "zh": "外边下大雨了，我们恐怕去不了公园了。",
    "py": "Wàibian xià dà yǔ le, wǒmen kǒngpà qù bù liǎo gōngyuán le.",
    "vn": "Bên ngoài mưa to rồi, e là chúng ta không đi công viên được rồi."
   }
  ],
  "hanzi": [
   {
    "c": "恐",
    "p": "kǒng",
    "type": "上下结构 · Trên-dưới",
    "st": 10,
    "ord": "巩 trên → 心 dưới",
    "rad": "心 (tâm)",
    "mean": "sợ",
    "tip": "巩 + 心(tim) → trong lòng SỢ HÃI → KHỦNG. 恐怕 = sợ rằng = e rằng.",
    "cf": "巩 (gǒng – củng cố)",
    "w": "恐怕 / 恐怖"
   },
   {
    "c": "怕",
    "p": "pà",
    "type": "形声字 · Chữ hình thanh",
    "st": 8,
    "ord": "忄 → 白",
    "rad": "忄 (tâm đứng – lòng)",
    "mean": "sợ",
    "tip": "忄 (lòng) + 白 (chỉ âm): trong lòng thấy sợ.",
    "cf": "拍 pāi (拍照 – HSK3 Bài 5) — bộ 扌",
    "w": "怕 / 不怕 / 怕冷"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Đã 8 giờ rồi, e là không kịp nữa.",
    "answer": "已经八点了，恐怕来不及了。",
    "answerPy": "Yǐjīng bā diǎn le, kǒngpà láibùjí le.",
    "note": "Ôn bổ ngữ khả năng 来不及 (HSK 3).",
    "pair": "恐怕 + V不……"
   },
   {
    "promptLang": "vi",
    "prompt": "Gần đây có nhiều công ty, e là cuối tuần sẽ rất ồn.",
    "answer": "附近有很多公司，恐怕周末会很热闹。",
    "answerPy": "Fùjìn yǒu hěn duō gōngsī, kǒngpà zhōumò huì hěn rènao.",
    "note": "恐怕 + 会.",
    "pair": "恐怕会……"
   }
  ]
 },
 {
  "n": 14,
  "zh": "热闹",
  "py": "rènao",
  "pos": "Động từ / Tính từ / Danh từ",
  "vn": "náo nhiệt, nhộn nhịp; vui vẻ cùng nhau",
  "hv": "nhiệt náo",
  "em": "🎊",
  "lesson": 2,
  "explain": [
   "Tính từ: đông vui, nhộn nhịp. Động từ: làm cho vui vẻ (lặp lại 热闹热闹). Hán Việt “nhiệt náo” — tiếng Việt nói ngược thành “náo nhiệt”."
  ],
  "usage": "很热闹 · 热闹热闹 · 看热闹.",
  "collo": [
   "很热闹",
   "热闹热闹",
   "看热闹",
   "热闹的街道"
  ],
  "colloFull": [
   {
    "zh": "很热闹",
    "py": "Hěn rènao",
    "vn": "rất náo nhiệt"
   },
   {
    "zh": "热闹热闹",
    "py": "Rènao rènao",
    "vn": "vui vẻ một chút"
   },
   {
    "zh": "看热闹",
    "py": "Kàn rènao",
    "vn": "xem náo nhiệt"
   },
   {
    "zh": "热闹的街道",
    "py": "Rènao de jiēdào",
    "vn": "con phố nhộn nhịp"
   }
  ],
  "patterns": [
   {
    "s": "ABAB: 热闹热闹",
    "m": "Lặp động từ hai âm tiết: vui vẻ một chút"
   },
   {
    "s": "nơi + 很 / 特别 + 热闹",
    "m": "Tính từ"
   }
  ],
  "ex_zh": "是呢，大家可以一起热闹热闹。",
  "ex_py": "Shì ne, dàjiā kěyǐ yìqǐ rènao rènao.",
  "ex_vn": "Đúng thế, mọi người có thể cùng nhau vui vẻ một chút.",
  "exList": [
   {
    "zh": "是呢，大家可以一起热闹热闹。",
    "py": "Shì ne, dàjiā kěyǐ yìqǐ rènao rènao.",
    "vn": "Đúng thế, mọi người có thể cùng nhau vui vẻ một chút."
   },
   {
    "zh": "春节的时候，街上特别热闹。",
    "py": "Chūn jié de shíhou, jiē shàng tèbié rènao.",
    "vn": "Dịp Tết, ngoài phố đặc biệt náo nhiệt."
   }
  ],
  "hanzi": [
   {
    "c": "热",
    "p": "rè",
    "type": "上下结构 · Trên-dưới",
    "st": 10,
    "ord": "埶 trên → 灬 dưới",
    "rad": "灬 (hỏa – lửa)",
    "mean": "nóng; nhiệt tình",
    "tip": "灬(lửa) ở dưới → mang nghĩa NÓNG, mở rộng thành NHIỆT TÌNH (nóng lòng quan tâm người khác).",
    "cf": "势 (shì – \"thế lực\", cũng có phần 埶\")",
    "w": "热情 / 很热 / 热心"
   },
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
    "prompt": "Nghe nói xung quanh có nhiều công ty, nên cuối tuần đặc biệt náo nhiệt.",
    "answer": "听说周围有很多公司，所以周末时特别热闹。",
    "answerPy": "Tīngshuō zhōuwéi yǒu hěn duō gōngsī, suǒyǐ zhōumò shí tèbié rènao.",
    "note": "Câu bài tập chọn từ của sách.",
    "pair": "所以……特别热闹"
   },
   {
    "promptLang": "vi",
    "prompt": "Cuối tuần gọi bạn bè đến nhà vui vẻ một chút nhé!",
    "answer": "周末叫朋友们来家里热闹热闹吧！",
    "answerPy": "Zhōumò jiào péngyou men lái jiā lǐ rènao rènao ba!",
    "note": "热闹 làm động từ, lặp ABAB.",
    "pair": "ABAB"
   }
  ]
 },
 {
  "n": 15,
  "zh": "入住",
  "py": "rùzhù",
  "pos": "Động từ",
  "vn": "dọn vào ở; nhận phòng (khách sạn)",
  "hv": "nhập trú",
  "em": "🏨",
  "lesson": 2,
  "explain": [
   "Bắt đầu vào ở một nơi mới: nhà mới, khách sạn, ký túc xá. Trang trọng hơn 住进去 / 搬进去."
  ],
  "usage": "入住新家 · 入住宾馆 · 入住手续.",
  "collo": [
   "入住新家",
   "入住宾馆",
   "办理入住",
   "明天入住"
  ],
  "colloFull": [
   {
    "zh": "入住新家",
    "py": "Rùzhù xīn jiā",
    "vn": "dọn vào nhà mới"
   },
   {
    "zh": "入住宾馆",
    "py": "Rùzhù bīnguǎn",
    "vn": "nhận phòng khách sạn"
   },
   {
    "zh": "办理入住",
    "py": "Bànlǐ rùzhù",
    "vn": "làm thủ tục nhận phòng"
   },
   {
    "zh": "明天入住",
    "py": "Míngtiān rùzhù",
    "vn": "mai dọn vào"
   }
  ],
  "patterns": [
   {
    "s": "入住 + nơi ở",
    "m": "入住新家 / 入住酒店"
   },
   {
    "s": "办理 + 入住 + 手续",
    "m": "Làm thủ tục nhận phòng"
   }
  ],
  "ex_zh": "所以我决定租这个房子了，明天就入住新家。",
  "ex_py": "Suǒyǐ wǒ juédìng zū zhège fángzi le, míngtiān jiù rùzhù xīn jiā.",
  "ex_vn": "Vì vậy tôi quyết định thuê căn nhà này, ngày mai dọn vào nhà mới luôn.",
  "exList": [
   {
    "zh": "所以我决定租这个房子了，明天就入住新家。",
    "py": "Suǒyǐ wǒ juédìng zū zhège fángzi le, míngtiān jiù rùzhù xīn jiā.",
    "vn": "Vì vậy tôi quyết định thuê căn nhà này, ngày mai dọn vào nhà mới luôn."
   },
   {
    "zh": "入住后我发现，宾馆房间的灯是坏的。",
    "py": "Rùzhù hòu wǒ fāxiàn, bīnguǎn fángjiān de dēng shì huài de.",
    "vn": "Nhận phòng xong tôi mới phát hiện đèn phòng khách sạn bị hỏng."
   }
  ],
  "hanzi": [
   {
    "c": "入",
    "p": "rù",
    "type": "独体字 · Chữ đơn thể",
    "st": 2,
    "ord": "丿 → 乀",
    "rad": "入 (nhập)",
    "mean": "vào",
    "tip": "Hình mũi tên đi VÀO. Phân biệt 入 (nét phải dài hơn) với 人 (nét trái dài). 入口 = cổng vào; 收入 = thu nhập (Bài 10).",
    "cf": "人 (rén – người)",
    "w": "入口 / 收入 / 进入"
   },
   {
    "c": "住",
    "p": "zhù",
    "type": "左右结构 · Trái-phải",
    "st": 7,
    "ord": "亻(nhân) trái → 主(chủ) phải",
    "rad": "亻 (nhân – người)",
    "mean": "ở, trú ngụ",
    "tip": "亻(người) + 主(làm chủ) → người làm chủ một nơi để Ở, TRÚ NGỤ.",
    "cf": "往 (wǎng – \"hướng về\")",
    "w": "住我家 / 住在"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Cô ấy không hề muốn dọn vào khu này, ở đây đông người quá.",
    "answer": "她并不想入住这个小区，这里人太多。",
    "answerPy": "Tā bìng bù xiǎng rùzhù zhège xiǎoqū, zhèli rén tài duō.",
    "note": "Đáp án gợi ý của sách (Bài 2 · điểm 3).",
    "pair": "并不……"
   },
   {
    "promptLang": "vi",
    "prompt": "Làm xong thủ tục nhận phòng, chúng ta đi ăn nhé.",
    "answer": "办好了入住手续，我们就去吃饭吧。",
    "answerPy": "Bàn hǎo le rùzhù shǒuxù, wǒmen jiù qù chīfàn ba.",
    "note": "Ôn 办好…… (Bài 1 · từ 入学).",
    "pair": "办好……就……"
   }
  ]
 },
 {
  "n": 16,
  "zh": "日记",
  "py": "rìjì",
  "pos": "Danh từ",
  "vn": "nhật ký",
  "hv": "nhật ký",
  "em": "📔",
  "lesson": 3,
  "explain": [
   "Những gì viết lại về việc trong ngày; lượng từ: 篇 / 本."
  ],
  "usage": "写日记 · 一篇日记 · 日记本.",
  "collo": [
   "写日记",
   "一篇日记",
   "日记本",
   "中文日记"
  ],
  "colloFull": [
   {
    "zh": "写日记",
    "py": "Xiě rìjì",
    "vn": "viết nhật ký"
   },
   {
    "zh": "一篇日记",
    "py": "Yì piān rìjì",
    "vn": "một bài nhật ký"
   },
   {
    "zh": "日记本",
    "py": "Rìjì běn",
    "vn": "cuốn nhật ký"
   },
   {
    "zh": "中文日记",
    "py": "Zhōngwén rìjì",
    "vn": "nhật ký tiếng Trung"
   }
  ],
  "patterns": [
   {
    "s": "写 + 日记",
    "m": "✗ 做日记"
   },
   {
    "s": "一篇 / 一本 + 日记",
    "m": "Lượng từ"
   }
  ],
  "ex_zh": "搬进新家后，白家月很开心，写了一篇日记。",
  "ex_py": "Bān jìn xīn jiā hòu, Bái Jiāyuè hěn kāixīn, xiě le yì piān rìjì.",
  "ex_vn": "Dọn vào nhà mới, Bạch Gia Nguyệt rất vui, viết một bài nhật ký.",
  "exList": [
   {
    "zh": "搬进新家后，白家月很开心，写了一篇日记。",
    "py": "Bān jìn xīn jiā hòu, Bái Jiāyuè hěn kāixīn, xiě le yì piān rìjì.",
    "vn": "Dọn vào nhà mới, Bạch Gia Nguyệt rất vui, viết một bài nhật ký."
   },
   {
    "zh": "我每天睡觉前都用中文写日记。",
    "py": "Wǒ měi tiān shuìjiào qián dōu yòng Zhōngwén xiě rìjì.",
    "vn": "Ngày nào trước khi ngủ tôi cũng viết nhật ký bằng tiếng Trung."
   }
  ],
  "hanzi": [
   {
    "c": "日",
    "p": "rì",
    "type": "象形字 · Chữ tượng hình",
    "st": 4,
    "ord": "sổ → ngang gập → ngang → ngang",
    "rad": "日 (nhật – mặt trời)",
    "mean": "mặt trời; ngày",
    "tip": "Hình mặt trời có chấm ở giữa → mặt trời, ngày. Ôn: 日 (HSK1 Bài 5), 生日 (HSK2 Bài 6). 工作日 = ngày đi làm.",
    "cf": "目 mù (mắt) — có 2 nét ngang ở giữa",
    "w": "工作日 / 生日 / 星期日"
   },
   {
    "c": "记",
    "p": "jì",
    "type": "左右结构 · Trái-phải",
    "st": 5,
    "ord": "讠 trái → 己 phải",
    "rad": "讠 (ngôn)",
    "mean": "ghi",
    "tip": "Lời 讠 + 己(mình) → ghi lời của mình → GHI, NHỚ. 日记 = ghi hằng ngày; 记者 (Bài 16); 记得; 忘记.",
    "cf": "纪 (jì – kỷ)",
    "w": "日记 / 记者 / 记得 / 忘记"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Dùng tiếng Trung viết nhật ký một mặt luyện chữ Hán, mặt khác luyện viết đoạn văn.",
    "answer": "用中文写日记，一方面能练习汉字，另一方面能练习写短文。",
    "answerPy": "Yòng Zhōngwén xiě rìjì, yìfāngmiàn néng liànxí hànzì, lìngyìfāngmiàn néng liànxí xiě duǎn wén.",
    "note": "Ôn 一方面……另一方面…… (Bài 1 · điểm 4).",
    "pair": "一方面……另一方面……"
   },
   {
    "promptLang": "vi",
    "prompt": "Cùng với trình độ tiếng Trung nâng cao, nhật ký của tôi ngày càng dài.",
    "answer": "随着中文水平的提高，我的日记越写越长。",
    "answerPy": "Suízhe Zhōngwén shuǐpíng de tígāo, wǒ de rìjì yuè xiě yuè cháng.",
    "note": "Ôn 随着 (Bài 1) + 越……越…… (HSK 3).",
    "pair": "随着……，越V越……"
   }
  ]
 },
 {
  "n": 17,
  "zh": "顺利",
  "py": "shùnlì",
  "pos": "Tính từ",
  "vn": "thuận lợi, suôn sẻ",
  "hv": "thuận lợi",
  "em": "✨",
  "lesson": 3,
  "explain": [
   "Mọi việc diễn ra trôi chảy, không gặp khó khăn. Hay làm trạng ngữ: 顺利地 + V."
  ],
  "usage": "顺利租到 · 很顺利 · 一切顺利 · 顺利完成.",
  "collo": [
   "一切顺利",
   "顺利完成",
   "很顺利",
   "顺利毕业"
  ],
  "colloFull": [
   {
    "zh": "一切顺利",
    "py": "Yíqiè shùnlì",
    "vn": "mọi việc thuận lợi"
   },
   {
    "zh": "顺利完成",
    "py": "Shùnlì wánchéng",
    "vn": "hoàn thành suôn sẻ"
   },
   {
    "zh": "很顺利",
    "py": "Hěn shùnlì",
    "vn": "rất suôn sẻ"
   },
   {
    "zh": "顺利毕业",
    "py": "Shùnlì bìyè",
    "vn": "tốt nghiệp suôn sẻ"
   }
  ],
  "patterns": [
   {
    "s": "顺利 + (地) + V",
    "m": "Trạng ngữ: một cách suôn sẻ"
   },
   {
    "s": "祝 + ai + N + 顺利",
    "m": "Câu chúc"
   }
  ],
  "ex_zh": "昨天我顺利租到了合适的房子。",
  "ex_py": "Zuótiān wǒ shùnlì zū dào le héshì de fángzi.",
  "ex_vn": "Hôm qua tôi đã thuê được căn nhà vừa ý một cách suôn sẻ.",
  "exList": [
   {
    "zh": "昨天我顺利租到了合适的房子。",
    "py": "Zuótiān wǒ shùnlì zū dào le héshì de fángzi.",
    "vn": "Hôm qua tôi đã thuê được căn nhà vừa ý một cách suôn sẻ."
   },
   {
    "zh": "祝你考试顺利！",
    "py": "Zhù nǐ kǎoshì shùnlì!",
    "vn": "Chúc bạn thi cử suôn sẻ!"
   }
  ],
  "hanzi": [
   {
    "c": "顺",
    "p": "shùn",
    "type": "左右结构 · Trái-phải (giản thể)",
    "st": 9,
    "ord": "川 (xuyên) trái → 页 (hiệt) phải",
    "rad": "页 (hiệt – đầu)",
    "mean": "thuận theo, suôn sẻ",
    "tip": "Bộ 页(đầu, hướng) + 川(dòng sông chảy xuôi) → theo DÒNG CHẢY THUẬN, mở rộng thành THUẬN LỢI.",
    "cf": "须 (xū – \"cần phải\", cũng có 页\")",
    "w": "顺利 / 顺便 / 顺序"
   },
   {
    "c": "利",
    "p": "lì",
    "type": "会意字 · Chữ hội ý",
    "st": 7,
    "ord": "禾 → 刂",
    "rad": "刂 (đao đứng – dao)",
    "mean": "sắc bén; thuận lợi; lợi ích",
    "tip": "禾 (lúa) + 刂 (dao): cầm dao sắc gặt lúa thì nhanh, thuận lợi → 顺利, 利用.",
    "cf": "和 hé (và) — bên phải là 口; 种 zhòng — bên phải là 中",
    "w": "顺利 / 利用 / 便利"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Chúc bạn mọi việc thuận lợi!",
    "answer": "祝你一切顺利！",
    "answerPy": "Zhù nǐ yíqiè shùnlì!",
    "note": "Câu chúc thường dùng.",
    "pair": "祝……顺利"
   },
   {
    "promptLang": "vi",
    "prompt": "Nhờ có sự giúp đỡ của mọi người, chúng tôi hoàn thành công việc rất suôn sẻ.",
    "answer": "由于大家的帮助，我们顺利完成了工作。",
    "answerPy": "Yóuyú dàjiā de bāngzhù, wǒmen shùnlì wánchéng le gōngzuò.",
    "note": "Kết hợp 由于 (Bài 2 · điểm 4).",
    "pair": "由于……"
   }
  ]
 },
 {
  "n": 18,
  "zh": "并",
  "py": "bìng",
  "pos": "Liên từ / Phó từ",
  "vn": "và, đồng thời; (並不) hoàn toàn không, chẳng hề",
  "hv": "tịnh",
  "em": "➕",
  "lesson": 3,
  "explain": [
   "Liên từ: nối hai động từ / cụm động từ, nghĩa “và còn”, thường dùng trong văn viết.",
   "Phó từ: đứng trước 不 / 没, nhấn mạnh “thực ra không phải như (người ta) nghĩ”."
  ],
  "usage": "V1……，并 + V2…… · 并不 + Adj · 并没有 + V.",
  "collo": [
   "并告诉",
   "并不容易",
   "并没有",
   "并不难"
  ],
  "colloFull": [
   {
    "zh": "并告诉",
    "py": "Bìng gàosu",
    "vn": "và nói cho"
   },
   {
    "zh": "并不容易",
    "py": "Bìng bù róngyì",
    "vn": "chẳng hề dễ"
   },
   {
    "zh": "并没有",
    "py": "Bìng méiyǒu",
    "vn": "hoàn toàn không có"
   },
   {
    "zh": "并不难",
    "py": "Bìng bù nán",
    "vn": "không khó chút nào"
   }
  ],
  "patterns": [
   {
    "s": "V1 + O1，并 + V2 + O2",
    "m": "Liên từ: nối hai hành động (Bài 2 · điểm 3)"
   },
   {
    "s": "并 + 不 / 没(有) + V / Adj",
    "m": "Phó từ: phủ định mạnh, phản bác suy nghĩ khác"
   }
  ],
  "ex_zh": "房东又向我介绍了一下房子里的东西，并告诉我这些东西怎么用。",
  "ex_py": "Fángdōng yòu xiàng wǒ jièshào le yíxià fángzi lǐ de dōngxi, bìng gàosu wǒ zhèxiē dōngxi zěnme yòng.",
  "ex_vn": "Chủ nhà lại giới thiệu cho tôi đồ đạc trong nhà, và chỉ cho tôi cách dùng.",
  "exList": [
   {
    "zh": "房东又向我介绍了一下房子里的东西，并告诉我这些东西怎么用。",
    "py": "Fángdōng yòu xiàng wǒ jièshào le yíxià fángzi lǐ de dōngxi, bìng gàosu wǒ zhèxiē dōngxi zěnme yòng.",
    "vn": "Chủ nhà lại giới thiệu cho tôi đồ đạc trong nhà, và chỉ cho tôi cách dùng."
   },
   {
    "zh": "对白家月来说，这次租房并不容易。",
    "py": "Duì Bái Jiāyuè láishuō, zhè cì zū fáng bìng bù róngyì.",
    "vn": "Đối với Bạch Gia Nguyệt, lần thuê nhà này chẳng hề dễ dàng."
   }
  ],
  "hanzi": [
   {
    "c": "并",
    "p": "bìng",
    "type": "上下结构 · Trên-dưới",
    "st": 6,
    "ord": "丷 trên → 开 dưới",
    "rad": "一 (nhất)",
    "mean": "gộp, cùng",
    "tip": "Chữ hội ý hai người đứng SÁT NHAU → GỘP LẠI, CÙNG, kết hợp 且(và) thành 并且 = VÀ, ĐỒNG THỜI.",
    "cf": "开 (kāi – \"mở\", phần dưới)",
    "w": "并且 / 并 / 合并"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Cô ấy thi đỗ Đại học Bắc Kinh và xin được học bổng.",
    "answer": "她考上了北京大学并申请到了奖学金。",
    "answerPy": "Tā kǎo shàng le běijīngdàxué bìng shēnqǐng dào le jiǎng xué jīn.",
    "note": "Ví dụ của sách; ôn 申请到 + 奖学金 (Bài 1).",
    "pair": "并 + V"
   },
   {
    "promptLang": "vi",
    "prompt": "Tôi hoàn toàn không đồng ý thuê căn nhà này, tôi còn phải nghĩ thêm.",
    "answer": "我并没有答应你就租这个房子，我还要再想想。",
    "answerPy": "Wǒ bìng méiyǒu dāying nǐ jiù zū zhège fángzi, wǒ hái yào zài xiǎng xiǎng.",
    "note": "Ví dụ của sách; 答应 dāying = đồng ý, hứa.",
    "pair": "并没有……"
   }
  ]
 },
 {
  "n": 19,
  "zh": "客厅",
  "py": "kètīng",
  "pos": "Danh từ",
  "vn": "phòng khách",
  "hv": "khách sảnh",
  "em": "🛋️",
  "lesson": 3,
  "explain": [
   "Phòng để tiếp khách, cả nhà ngồi xem tivi, nói chuyện."
  ],
  "usage": "客厅里有…… · 在客厅看电视 · 客厅很大.",
  "collo": [
   "在客厅",
   "客厅很大",
   "客厅里",
   "大客厅"
  ],
  "colloFull": [
   {
    "zh": "在客厅",
    "py": "Zài kètīng",
    "vn": "ở phòng khách"
   },
   {
    "zh": "客厅很大",
    "py": "Kètīng hěn dà",
    "vn": "phòng khách rất rộng"
   },
   {
    "zh": "客厅里",
    "py": "Kètīng lǐ",
    "vn": "trong phòng khách"
   },
   {
    "zh": "大客厅",
    "py": "Dà kètīng",
    "vn": "phòng khách lớn"
   }
  ],
  "patterns": [
   {
    "s": "客厅 / 厨房 / 卧室 / 洗手间",
    "m": "Các phòng trong nhà"
   },
   {
    "s": "客厅里 + 有 + N",
    "m": "Câu tồn hiện (HSK 3)"
   }
  ],
  "ex_zh": "客厅里有椅子、沙发，还有一台大电视。",
  "ex_py": "Kètīng lǐ yǒu yǐzi, shāfā, hái yǒu yì tái dà diànshì.",
  "ex_vn": "Trong phòng khách có ghế, sofa, còn có một chiếc tivi to.",
  "exList": [
   {
    "zh": "客厅里有椅子、沙发，还有一台大电视。",
    "py": "Kètīng lǐ yǒu yǐzi, shāfā, hái yǒu yì tái dà diànshì.",
    "vn": "Trong phòng khách có ghế, sofa, còn có một chiếc tivi to."
   },
   {
    "zh": "这个房子很大，客厅也大，里边除了沙发以外，还有一台大电视。",
    "py": "Zhège fángzi hěn dà, kètīng yě dà, lǐbian chúle shāfā yǐwài, hái yǒu yì tái dà diànshì.",
    "vn": "Căn nhà này rất rộng, phòng khách cũng rộng, bên trong ngoài sofa ra còn có một chiếc tivi to."
   }
  ],
  "hanzi": [
   {
    "c": "客",
    "p": "kè",
    "type": "形声字 · Chữ hình thanh",
    "st": 9,
    "ord": "宀 → 各",
    "rad": "宀 (miên – mái nhà)",
    "mean": "khách",
    "tip": "宀 (mái nhà) + 各 (gè – chỉ âm): người từ nơi khác đến dưới mái nhà mình → khách. Ôn: 客气 (HSK3 Bài 2), 不客气 (HSK1 Bài 1).",
    "cf": "各 gè — không có 宀 ở trên",
    "w": "客人 / 请客 / 做客 / 客气"
   },
   {
    "c": "厅",
    "p": "tīng",
    "type": "半包围结构 · Bán bao vây (giản thể)",
    "st": 4,
    "ord": "厂 bao ngoài → 丁 trong",
    "rad": "厂 (hán – mái nhà)",
    "mean": "sảnh, phòng lớn",
    "tip": "Bộ mái nhà 厂 + 丁(biểu âm) → căn PHÒNG LỚN dưới mái nhà, kết hợp 客(khách) thành 客厅 = PHÒNG KHÁCH.",
    "cf": "听 (tīng – \"nghe\", cùng âm, bộ 口)",
    "w": "客厅 / 餐厅 / 大厅"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Phòng khách ngoài sofa ra còn có một chiếc tivi to.",
    "answer": "客厅里除了沙发以外，还有一台大电视。",
    "answerPy": "Kètīng lǐ chúle shāfā yǐwài, hái yǒu yì tái dà diànshì.",
    "note": "Ôn 除了……以外，还…… (HSK 3).",
    "pair": "除了……以外，还……"
   },
   {
    "promptLang": "vi",
    "prompt": "Phòng khách vừa rộng vừa sáng, có điều tiền thuê hơi cao.",
    "answer": "客厅又大又亮，不过房租有点儿高。",
    "answerPy": "Kètīng yòu dà yòu liàng, búguò fángzū yǒudiǎnr gāo.",
    "note": "不过 (Bài 2 · điểm 2) + 又……又…….",
    "pair": "……，不过……"
   }
  ]
 },
 {
  "n": 20,
  "zh": "台",
  "py": "tái",
  "pos": "Lượng từ",
  "vn": "chiếc, cái (máy móc, thiết bị)",
  "hv": "đài",
  "em": "📺",
  "lesson": 3,
  "explain": [
   "Lượng từ cho máy móc, đồ điện: tivi, máy điều hòa, máy tính, tủ lạnh…"
  ],
  "usage": "一台电视 · 一台空调 · 一台电脑 · 一台冰箱.",
  "collo": [
   "一台电视",
   "一台空调",
   "一台电脑",
   "一台冰箱"
  ],
  "colloFull": [
   {
    "zh": "一台电视",
    "py": "Yì tái diànshì",
    "vn": "một chiếc tivi"
   },
   {
    "zh": "一台空调",
    "py": "Yì tái kōngtiáo",
    "vn": "một chiếc điều hòa"
   },
   {
    "zh": "一台电脑",
    "py": "Yì tái diànnǎo",
    "vn": "một chiếc máy tính"
   },
   {
    "zh": "一台冰箱",
    "py": "Yì tái bīngxiāng",
    "vn": "một chiếc tủ lạnh"
   }
  ],
  "patterns": [
   {
    "s": "一 + 台 + máy móc",
    "m": "Văn chuẩn dùng 台: 一台空调 / 一台电脑 (không nói 一张电视)"
   },
   {
    "s": "张 (giường, bàn) · 把 (ghế) · 条 (khăn) · 台 (máy)",
    "m": "Phân biệt lượng từ trong bài khoá 3"
   }
  ],
  "ex_zh": "客厅里有椅子、沙发，还有一台大电视。",
  "ex_py": "Kètīng lǐ yǒu yǐzi, shāfā, hái yǒu yì tái dà diànshì.",
  "ex_vn": "Trong phòng khách có ghế, sofa, còn có một chiếc tivi to.",
  "exList": [
   {
    "zh": "客厅里有椅子、沙发，还有一台大电视。",
    "py": "Kètīng lǐ yǒu yǐzi, shāfā, hái yǒu yì tái dà diànshì.",
    "vn": "Trong phòng khách có ghế, sofa, còn có một chiếc tivi to."
   },
   {
    "zh": "我租的房间里，除了一张床以外，还有一台空调。",
    "py": "Wǒ zū de fángjiān lǐ, chúle yì zhāng chuáng yǐwài, hái yǒu yì tái kōngtiáo.",
    "vn": "Trong phòng tôi thuê, ngoài một chiếc giường ra còn có một chiếc điều hòa."
   }
  ],
  "hanzi": [
   {
    "c": "台",
    "p": "tái",
    "type": "上下结构 · Trên-dưới (giản thể)",
    "st": 5,
    "ord": "厶 trên → 口 dưới",
    "rad": "口 (khẩu)",
    "mean": "đài, bệ; lượng từ máy móc",
    "tip": "Chữ giản thể mô phỏng cái ĐÀI/BỆ cao → mở rộng thành lượng từ đếm MÁY MÓC đặt trên bệ (tivi, tủ lạnh, máy tính).",
    "cf": "台 dễ nhầm với 苔 (tái – \"rêu\", bộ 艹\")",
    "w": "一台 / 电台 / 台风"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Nhà tôi có hai chiếc máy tính.",
    "answer": "我家有两台电脑。",
    "answerPy": "Wǒ jiā yǒu liǎng tái diànnǎo.",
    "note": "两 + 台.",
    "pair": "两台 + N"
   },
   {
    "promptLang": "vi",
    "prompt": "Phòng nóng quá, e là phải mua thêm một chiếc điều hòa.",
    "answer": "房间太热了，恐怕要再买一台空调。",
    "answerPy": "Fángjiān tài rè le, kǒngpà yào zài mǎi yì tái kōngtiáo.",
    "note": "Kết hợp 恐怕 (Bài 2 · từ mới).",
    "pair": "恐怕要……"
   }
  ]
 },
 {
  "n": 21,
  "zh": "厨房",
  "py": "chúfáng",
  "pos": "Danh từ",
  "vn": "nhà bếp, phòng bếp",
  "hv": "trù phòng",
  "em": "🍳",
  "lesson": 3,
  "explain": [
   "Phòng để nấu nướng."
  ],
  "usage": "厨房里 · 在厨房做饭 · 收拾厨房.",
  "collo": [
   "在厨房做饭",
   "收拾厨房",
   "厨房很干净",
   "厨房用品"
  ],
  "colloFull": [
   {
    "zh": "在厨房做饭",
    "py": "Zài chúfáng zuòfàn",
    "vn": "nấu cơm trong bếp"
   },
   {
    "zh": "收拾厨房",
    "py": "Shōushi chúfáng",
    "vn": "dọn bếp"
   },
   {
    "zh": "厨房很干净",
    "py": "Chúfáng hěn gānjìng",
    "vn": "bếp rất sạch"
   },
   {
    "zh": "厨房用品",
    "py": "Chúfáng yòng pǐn",
    "vn": "đồ dùng nhà bếp"
   }
  ],
  "patterns": [
   {
    "s": "在 + 厨房 + V",
    "m": "Làm gì trong bếp"
   }
  ],
  "ex_zh": "厨房里有冰箱和一些做饭用的东西。",
  "ex_py": "Chúfáng lǐ yǒu bīngxiāng hé yìxiē zuòfàn yòng de dōngxi.",
  "ex_vn": "Trong bếp có tủ lạnh và một số đồ dùng để nấu ăn.",
  "exList": [
   {
    "zh": "厨房里有冰箱和一些做饭用的东西。",
    "py": "Chúfáng lǐ yǒu bīngxiāng hé yìxiē zuòfàn yòng de dōngxi.",
    "vn": "Trong bếp có tủ lạnh và một số đồ dùng để nấu ăn."
   },
   {
    "zh": "我吃完饭并收拾好厨房后，才去公园跑步。",
    "py": "Wǒ chī wán fàn bìng shōushi hǎo chúfáng hòu, cái qù gōngyuán pǎobù.",
    "vn": "Tôi ăn xong và dọn dẹp bếp xong rồi mới đi công viên chạy bộ."
   }
  ],
  "hanzi": [
   {
    "c": "厨",
    "p": "chú",
    "type": "半包围结构 · Nửa bao quanh",
    "st": 12,
    "ord": "厂 bao → 豆寸 trong",
    "rad": "厂 (hán)",
    "mean": "bếp",
    "tip": "Mái 厂 + 豆(đồ đựng) + 寸(tay) → nơi nấu nướng → BẾP. 厨房 = nhà bếp; 厨师 = đầu bếp.",
    "cf": "橱 (chú – tủ)",
    "w": "厨房 / 厨师"
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
    "prompt": "Mẹ đang nấu cơm trong bếp.",
    "answer": "妈妈正在厨房做饭。",
    "answerPy": "Māma zhèngzài chúfáng zuòfàn.",
    "note": "Ôn 正在 + V (HSK 2/3).",
    "pair": "正在……"
   },
   {
    "promptLang": "vi",
    "prompt": "Bếp tuy không lớn nhưng rất sạch sẽ.",
    "answer": "厨房虽然不大，但是很干净。",
    "answerPy": "Chúfáng suīrán bú dà, dànshì hěn gānjìng.",
    "note": "Ôn 虽然……但是…… (HSK 3).",
    "pair": "虽然……但是……"
   }
  ]
 },
 {
  "n": 22,
  "zh": "平常",
  "py": "píngcháng",
  "pos": "Danh từ / Tính từ",
  "vn": "ngày thường, thường ngày; bình thường",
  "hv": "bình thường",
  "em": "📅",
  "lesson": 3,
  "explain": [
   "Danh từ: những ngày bình thường (≈ 平时). Tính từ: bình thường, không có gì đặc biệt."
  ],
  "usage": "平常 + V · 我平常…… · 很平常.",
  "collo": [
   "平常的日子",
   "平常很忙",
   "很平常",
   "跟平常一样"
  ],
  "colloFull": [
   {
    "zh": "平常的日子",
    "py": "Píngcháng de rìzi",
    "vn": "ngày thường"
   },
   {
    "zh": "平常很忙",
    "py": "Píngcháng hěn máng",
    "vn": "ngày thường rất bận"
   },
   {
    "zh": "很平常",
    "py": "Hěn píngcháng",
    "vn": "rất bình thường"
   },
   {
    "zh": "跟平常一样",
    "py": "Gēn píngcháng yíyàng",
    "vn": "như mọi khi"
   }
  ],
  "patterns": [
   {
    "s": "Sub + 平常 + V",
    "m": "Thói quen ngày thường"
   },
   {
    "s": "跟平常一样 / 比平常 + Adj",
    "m": "So với mọi ngày"
   }
  ],
  "ex_zh": "不过，我平常主要在学校食堂吃，基本上不做饭。",
  "ex_py": "Búguò, wǒ píngcháng zhǔyào zài xuéxiào shí táng chī, jīběnshàng bú zuòfàn.",
  "ex_vn": "Có điều, ngày thường tôi chủ yếu ăn ở nhà ăn của trường, hầu như không nấu cơm.",
  "exList": [
   {
    "zh": "不过，我平常主要在学校食堂吃，基本上不做饭。",
    "py": "Búguò, wǒ píngcháng zhǔyào zài xuéxiào shí táng chī, jīběnshàng bú zuòfàn.",
    "vn": "Có điều, ngày thường tôi chủ yếu ăn ở nhà ăn của trường, hầu như không nấu cơm."
   },
   {
    "zh": "我平常七点起床，周末八点起床。",
    "py": "Wǒ píngcháng qī diǎn qǐchuáng, zhōumò bā diǎn qǐchuáng.",
    "vn": "Ngày thường tôi dậy lúc bảy giờ, cuối tuần tám giờ mới dậy."
   }
  ],
  "hanzi": [
   {
    "c": "平",
    "p": "píng",
    "type": "独体字 · Chữ đơn",
    "st": 5,
    "ord": "nét liền",
    "rad": "干 (can)",
    "mean": "bằng phẳng, thường",
    "tip": "Hình tượng mặt nước phẳng lặng → BẰNG PHẲNG, mở rộng thành BÌNH THƯỜNG, THÔNG THƯỜNG (平时 = lúc bình thường).",
    "cf": "评 (píng – \"bình luận\", thêm bộ 讠\")",
    "w": "平时 / 平常 / 公平"
   },
   {
    "c": "常",
    "p": "cháng",
    "type": "上下结构 · Trên-dưới",
    "st": 11,
    "ord": "尚 trên → 巾 dưới",
    "rad": "巾 (cân – khăn)",
    "mean": "thường",
    "tip": "Bộ khăn 巾 + 尚 → nghĩa gốc là tấm vải dài, mượn nghĩa THƯỜNG XUYÊN, kết hợp 正 thành 正常 = BÌNH THƯỜNG.",
    "cf": "党 (dǎng – \"đảng\", phần trên giống)",
    "w": "正常 / 经常 / 常见"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Ngày thường bạn chủ yếu ăn cơm ở đâu?",
    "answer": "你平常主要在哪里吃饭？",
    "answerPy": "Nǐ píngcháng zhǔyào zài nǎlǐ chīfàn?",
    "note": "Câu hỏi nghe hiểu bài khoá 3.",
    "pair": "平常主要……"
   },
   {
    "promptLang": "vi",
    "prompt": "Hôm nay anh ấy dậy sớm hơn mọi ngày một tiếng.",
    "answer": "今天他比平常早起了一个小时。",
    "answerPy": "Jīntiān tā bǐ píngcháng zǎo qǐ le yí gè xiǎoshí.",
    "note": "Ôn câu so sánh 比 + số lượng (HSK 3).",
    "pair": "比平常 + V + số lượng"
   }
  ]
 },
 {
  "n": 23,
  "zh": "基本上",
  "py": "jīběnshàng",
  "pos": "Phó từ",
  "vn": "về cơ bản, hầu như",
  "hv": "cơ bản thượng",
  "em": "📊",
  "lesson": 3,
  "explain": [
   "Nói phần lớn trường hợp / phần chính là như vậy: “gần như, về cơ bản”."
  ],
  "usage": "基本上 + 不 / 都 + V · 基本上完成了.",
  "collo": [
   "基本上不……",
   "基本上都……",
   "基本上完成了",
   "基本上同意"
  ],
  "colloFull": [
   {
    "zh": "基本上不……",
    "py": "Jīběnshàng bù……",
    "vn": "hầu như không …"
   },
   {
    "zh": "基本上都……",
    "py": "Jīběnshàng dōu……",
    "vn": "về cơ bản đều …"
   },
   {
    "zh": "基本上完成了",
    "py": "Jīběnshàng wánchéng le",
    "vn": "về cơ bản đã xong"
   },
   {
    "zh": "基本上同意",
    "py": "Jīběnshàng tóngyì",
    "vn": "về cơ bản đồng ý"
   }
  ],
  "patterns": [
   {
    "s": "基本上 + 不 / 没 + V",
    "m": "Hầu như không"
   },
   {
    "s": "基本上 + 都 + V",
    "m": "Gần như đều"
   }
  ],
  "ex_zh": "我平常主要在学校食堂吃，基本上不做饭。",
  "ex_py": "Wǒ píngcháng zhǔyào zài xuéxiào shí táng chī, jīběnshàng bú zuòfàn.",
  "ex_vn": "Ngày thường tôi chủ yếu ăn ở nhà ăn trường, hầu như không nấu cơm.",
  "exList": [
   {
    "zh": "我平常主要在学校食堂吃，基本上不做饭。",
    "py": "Wǒ píngcháng zhǔyào zài xuéxiào shí táng chī, jīběnshàng bú zuòfàn.",
    "vn": "Ngày thường tôi chủ yếu ăn ở nhà ăn trường, hầu như không nấu cơm."
   },
   {
    "zh": "这本书的内容，我基本上都看懂了。",
    "py": "Zhè běn shū de nèiróng, wǒ jīběnshàng dōu kàn dǒng le.",
    "vn": "Nội dung cuốn sách này về cơ bản tôi đã đọc hiểu hết."
   }
  ],
  "hanzi": [
   {
    "c": "基",
    "p": "jī",
    "type": "形声字 · Chữ hình thanh",
    "st": 11,
    "ord": "其 → 土",
    "rad": "土 (thổ – đất)",
    "mean": "nền móng, cơ sở",
    "tip": "其 qí (chỉ âm) đặt trên 土 (đất): nền đất đặt móng nhà → cơ bản, nền tảng (基本上).",
    "cf": "期 qī (kỳ hạn) — bên phải là 月; 甚 shèn",
    "w": "基本 / 基本上 / 基础"
   },
   {
    "c": "本",
    "p": "běn",
    "type": "独体字 · Chữ đơn",
    "st": 5,
    "ord": "nét liền",
    "rad": "木 (mộc)",
    "mean": "gốc, vốn dĩ",
    "tip": "Chữ 木 (cây) thêm một nét ngang ở GỐC rễ → chỉ PHẦN GỐC, mở rộng thành VỐN DĨ, BAN ĐẦU (本来).",
    "cf": "木 (mù – \"cây\", không có nét ngang dưới)",
    "w": "本来 / 本子 / 根本"
   },
   {
    "c": "上",
    "p": "shàng",
    "type": "指事字 · Chữ chỉ sự",
    "st": 3,
    "ord": "Nét sổ → nét ngang ngắn → nét ngang dài",
    "rad": "一 (nhất)",
    "mean": "trên; lên",
    "tip": "Nét ngang dài làm mốc, nét sổ và nét ngắn chỉ phía trên mốc → ở trên. 以上 = lấy mức đó làm mốc trở lên. Đối: 以下 (trở xuống).",
    "cf": "下 xià — nét sổ và chấm ở dưới nét ngang",
    "w": "以上 / 上面 / 马上"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Bài tập hôm nay về cơ bản tôi làm xong rồi.",
    "answer": "今天的作业我基本上做完了。",
    "answerPy": "Jīntiān de zuòyè wǒ jīběnshàng zuò wán le.",
    "note": "基本上 + V完.",
    "pair": "基本上 + V了"
   },
   {
    "promptLang": "vi",
    "prompt": "Ở trường cái gì cũng có, hầu như không cần ra ngoài mua đồ.",
    "answer": "学校里什么都有，基本上不用出去买东西。",
    "answerPy": "Xuéxiào lǐ shénme dōu yǒu, jīběnshàng búyòng chūqù mǎi dōngxi.",
    "note": "Ôn đại từ nghi vấn phiếm chỉ 什么都 (HSK 3).",
    "pair": "什么都……"
   }
  ]
 },
 {
  "n": 24,
  "zh": "整个",
  "py": "zhěnggè",
  "pos": "Tính từ",
  "vn": "cả, toàn bộ",
  "hv": "chỉnh cá",
  "em": "🏠",
  "lesson": 3,
  "explain": [
   "Toàn bộ, trọn vẹn một vật / một khoảng thời gian; đứng trước danh từ."
  ],
  "usage": "整个房子 · 整个上午 · 整个城市.",
  "collo": [
   "整个房子",
   "整个上午",
   "整个城市",
   "整个假期"
  ],
  "colloFull": [
   {
    "zh": "整个房子",
    "py": "Zhěnggè fángzi",
    "vn": "cả căn nhà"
   },
   {
    "zh": "整个上午",
    "py": "Zhěnggè shàngwǔ",
    "vn": "cả buổi sáng"
   },
   {
    "zh": "整个城市",
    "py": "Zhěnggè chéngshì",
    "vn": "cả thành phố"
   },
   {
    "zh": "整个假期",
    "py": "Zhěnggè jiàqī",
    "vn": "cả kỳ nghỉ"
   }
  ],
  "patterns": [
   {
    "s": "整个 + N + 都 + V",
    "m": "Cả … đều …"
   },
   {
    "s": "整个 ≠ 每个",
    "m": "整个 = cả một khối; 每个 = mỗi cái"
   }
  ],
  "ex_zh": "看完整个房子后，我准备再去买几条毛巾。",
  "ex_py": "Kànwán zhěnggè fángzi hòu, wǒ zhǔnbèi zài qù mǎi jǐ tiáo máojīn.",
  "ex_vn": "Xem xong cả căn nhà, tôi định đi mua thêm mấy chiếc khăn mặt.",
  "exList": [
   {
    "zh": "看完整个房子后，我准备再去买几条毛巾。",
    "py": "Kànwán zhěnggè fángzi hòu, wǒ zhǔnbèi zài qù mǎi jǐ tiáo máojīn.",
    "vn": "Xem xong cả căn nhà, tôi định đi mua thêm mấy chiếc khăn mặt."
   },
   {
    "zh": "他整个上午都在图书馆学习。",
    "py": "Tā zhěnggè shàngwǔ dōu zài túshūguǎn xuéxí.",
    "vn": "Cả buổi sáng anh ấy đều học ở thư viện."
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
   },
   {
    "c": "个",
    "p": "gè",
    "type": "独体字 · Chữ đơn",
    "st": 3,
    "ord": "nét liền",
    "rad": "人 (nhân – người)",
    "mean": "cái, chiếc (lượng từ)",
    "tip": "Chữ tượng hình mô phỏng hình một người/vật đơn lẻ → LƯỢNG TỪ đếm đơn vị; 个子 = \"cái khung\" của thân thể = VÓC DÁNG.",
    "cf": "介 (jiè – \"giới thiệu, ở giữa\", nét gần giống\")",
    "w": "个子 / 一个 / 那个"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Cả kỳ nghỉ tôi đều ở nhà học tiếng Trung.",
    "answer": "整个假期我都在家学习中文。",
    "answerPy": "Zhěnggè jiàqī wǒ dōu zài jiā xuéxí Zhōngwén.",
    "note": "整个 + N + 都.",
    "pair": "整个……都……"
   },
   {
    "promptLang": "vi",
    "prompt": "Cùng với kinh tế phát triển, cả thành phố đã thay đổi rất nhiều.",
    "answer": "随着经济的发展，整个城市都发生了很大的变化。",
    "answerPy": "Suízhe jīngjì de fāzhǎn, zhěnggè chéngshì dōu fāshēng le hěn dà de biànhuà.",
    "note": "Ôn 随着 (Bài 1 · điểm 3).",
    "pair": "随着……"
   }
  ]
 },
 {
  "n": 25,
  "zh": "毛巾",
  "py": "máojīn",
  "pos": "Danh từ",
  "vn": "khăn mặt, khăn tắm",
  "hv": "mao cân",
  "em": "🧺",
  "lesson": 3,
  "explain": [
   "Khăn bằng vải bông dùng để lau mặt, lau người. Lượng từ: 条."
  ],
  "usage": "一条毛巾 · 买毛巾 · 新毛巾.",
  "collo": [
   "一条毛巾",
   "买毛巾",
   "洗脸毛巾",
   "新毛巾"
  ],
  "colloFull": [
   {
    "zh": "一条毛巾",
    "py": "Yì tiáo máojīn",
    "vn": "một chiếc khăn"
   },
   {
    "zh": "买毛巾",
    "py": "Mǎi máojīn",
    "vn": "mua khăn"
   },
   {
    "zh": "洗脸毛巾",
    "py": "Xǐ liǎn máojīn",
    "vn": "khăn rửa mặt"
   },
   {
    "zh": "新毛巾",
    "py": "Xīn máojīn",
    "vn": "khăn mới"
   }
  ],
  "patterns": [
   {
    "s": "一 / 几 + 条 + 毛巾",
    "m": "Lượng từ 条 cho vật dài, mềm"
   }
  ],
  "ex_zh": "看完整个房子后，我准备再去买几条毛巾。",
  "ex_py": "Kànwán zhěnggè fángzi hòu, wǒ zhǔnbèi zài qù mǎi jǐ tiáo máojīn.",
  "ex_vn": "Xem xong cả căn nhà, tôi định đi mua thêm mấy chiếc khăn.",
  "exList": [
   {
    "zh": "看完整个房子后，我准备再去买几条毛巾。",
    "py": "Kànwán zhěnggè fángzi hòu, wǒ zhǔnbèi zài qù mǎi jǐ tiáo máojīn.",
    "vn": "Xem xong cả căn nhà, tôi định đi mua thêm mấy chiếc khăn."
   },
   {
    "zh": "商店里有很多毛巾。",
    "py": "Shāngdiàn lǐ yǒu hěn duō máojīn.",
    "vn": "Trong cửa hàng có rất nhiều khăn."
   }
  ],
  "hanzi": [
   {
    "c": "毛",
    "p": "máo",
    "type": "独体字 · Chữ đơn thể",
    "st": 4,
    "ord": "丿 → 一 → 一 → 乚",
    "rad": "毛 (mao)",
    "mean": "lông",
    "tip": "Tượng hình túm LÔNG. 毛巾 (Bài 14), 毛衣 (áo len), 一毛钱 (hào), 毛病.",
    "cf": "手 (shǒu – tay)",
    "w": "毛 / 毛巾 / 毛衣 / 毛病"
   },
   {
    "c": "巾",
    "p": "jīn",
    "type": "独体字 · Chữ đơn thể",
    "st": 3,
    "ord": "丨 → 冂 → 丨",
    "rad": "巾 (cân)",
    "mean": "khăn",
    "tip": "Tượng hình chiếc KHĂN treo xuống. Ghép 毛(lông) + 巾(khăn) = KHĂN BÔNG. Là bộ thủ trong 帽 (mũ), 带 (đai).",
    "cf": "币 (bì – tiền tệ)",
    "w": "毛巾 / 纸巾 / 围巾"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Trong cửa hàng có rất nhiều khăn.",
    "answer": "商店里有很多毛巾。",
    "answerPy": "Shāngdiàn lǐ yǒu hěn duō máojīn.",
    "note": "Đáp án gợi ý bài nhìn tranh đặt câu của sách.",
    "pair": "nơi + 有 + N"
   },
   {
    "promptLang": "vi",
    "prompt": "Ngoài khăn ra, những thứ khác tạm thời chưa cần.",
    "answer": "除了毛巾以外，其他东西还不需要。",
    "answerPy": "Chúle máojīn yǐwài, qítā dōngxi hái bù xūyào.",
    "note": "Ôn 除了……以外 (HSK 3).",
    "pair": "除了……以外"
   }
  ]
 },
 {
  "n": 26,
  "zh": "建议",
  "py": "jiànyì",
  "pos": "Danh từ / Động từ",
  "vn": "lời khuyên, gợi ý; đề nghị, khuyên",
  "hv": "kiến nghị",
  "em": "💬",
  "lesson": 4,
  "explain": [
   "Đưa ra ý kiến để người khác tham khảo / làm theo. Bẫy Hán Việt: “kiến nghị” trong tiếng Việt khá trang trọng; 建议 dùng hằng ngày = gợi ý, khuyên."
  ],
  "usage": "根据……的建议 · 建议 + ai + V · 好建议.",
  "collo": [
   "提建议",
   "好建议",
   "根据……的建议",
   "建议你……"
  ],
  "colloFull": [
   {
    "zh": "提建议",
    "py": "Tí jiànyì",
    "vn": "đưa ra gợi ý"
   },
   {
    "zh": "好建议",
    "py": "Hǎo jiànyì",
    "vn": "lời khuyên hay"
   },
   {
    "zh": "根据……的建议",
    "py": "Gēnjù…… de jiànyì",
    "vn": "theo gợi ý của …"
   },
   {
    "zh": "建议你……",
    "py": "Jiànyì nǐ……",
    "vn": "khuyên bạn …"
   }
  ],
  "patterns": [
   {
    "s": "建议 + ai + V",
    "m": "Động từ: khuyên ai làm gì"
   },
   {
    "s": "提 / 有 + 建议",
    "m": "Danh từ"
   }
  ],
  "ex_zh": "根据李文的建议，她先在租房网站和App上查看有关信息。",
  "ex_py": "Gēnjù Lǐ Wén de jiànyì, tā xiān zài zū fáng wǎngzhàn hé A p p shàng chákàn yǒuguān xìnxī.",
  "ex_vn": "Theo gợi ý của Lý Văn, trước tiên cô ấy xem thông tin liên quan trên trang web và App thuê nhà.",
  "exList": [
   {
    "zh": "根据李文的建议，她先在租房网站和App上查看有关信息。",
    "py": "Gēnjù Lǐ Wén de jiànyì, tā xiān zài zū fáng wǎngzhàn hé A p p shàng chákàn yǒuguān xìnxī.",
    "vn": "Theo gợi ý của Lý Văn, trước tiên cô ấy xem thông tin liên quan trên trang web và App thuê nhà."
   },
   {
    "zh": "接着，房东又建议小张过去看看。",
    "py": "Jiēzhe, fángdōng yòu jiànyì xiǎo zhāng guòqù kàn kàn.",
    "vn": "Tiếp đó, chủ nhà lại đề nghị Tiểu Trương qua xem thử."
   }
  ],
  "hanzi": [
   {
    "c": "建",
    "p": "jiàn",
    "type": "形声字 · Chữ hình thanh",
    "st": 8,
    "ord": "聿 → 廴 (viết 聿 trước, nét 廴 bao dưới viết sau)",
    "rad": "廴 (dẫn – bước dài)",
    "mean": "xây dựng; đề xuất",
    "tip": "廴 (bước dài) + 聿 (cây bút): cầm bút vẽ bản thiết kế rồi xây dựng; đưa ra ý kiến → 建议.",
    "cf": "健 jiàn (健康) — thêm 亻 bên trái",
    "w": "建议 / 建设 / 建立"
   },
   {
    "c": "议",
    "p": "yì",
    "type": "左右结构 · Trái-phải (giản thể)",
    "st": 5,
    "ord": "讠 (ngôn) trái → 义 (nghĩa) phải",
    "rad": "讠 (ngôn – lời nói)",
    "mean": "bàn bạc, ý kiến",
    "tip": "Bộ lời nói 讠 + 义(chính nghĩa, biểu âm) → BÀN BẠC LỜI phải trái, kết hợp 建(đưa ra) thành 建议 = KIẾN NGHỊ, ĐỀ NGHỊ.",
    "cf": "仪 (yí – \"nghi lễ\", bộ 亻\")",
    "w": "建议 / 议论 / 会议"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Về chuyện thuê nhà như thế nào là hợp, bạn còn gợi ý gì hay không?",
    "answer": "关于租什么样的房子合适，你还有什么好建议？",
    "answerPy": "Guānyú zū shénme yàng de fángzi héshì, nǐ hái yǒu shénme hǎo jiànyì?",
    "note": "Câu bài tập chọn từ của sách.",
    "pair": "有什么好建议"
   },
   {
    "promptLang": "vi",
    "prompt": "Bác sĩ khuyên anh ấy một mặt nghỉ ngơi nhiều, mặt khác tập thể dục nhiều.",
    "answer": "医生建议他一方面多休息，另一方面多运动。",
    "answerPy": "Yīshēng jiànyì tā yìfāngmiàn duō xiūxi, lìngyìfāngmiàn duō yùndòng.",
    "note": "Ôn 一方面……另一方面…… (Bài 1 · điểm 4).",
    "pair": "建议 + ai + V"
   }
  ]
 },
 {
  "n": 27,
  "zh": "查看",
  "py": "chákàn",
  "pos": "Động từ",
  "vn": "xem, kiểm tra, tra xem",
  "hv": "tra khán",
  "em": "🔍",
  "lesson": 4,
  "explain": [
   "Xem kỹ để nắm tình hình / kiểm tra: thông tin, email, tình trạng phòng…"
  ],
  "usage": "查看信息 · 查看邮件 · 查看一下.",
  "collo": [
   "查看信息",
   "查看邮件",
   "注意查看",
   "查看情况"
  ],
  "colloFull": [
   {
    "zh": "查看信息",
    "py": "Chákàn xìnxī",
    "vn": "xem thông tin"
   },
   {
    "zh": "查看邮件",
    "py": "Chákàn yóujiàn",
    "vn": "kiểm tra email"
   },
   {
    "zh": "注意查看",
    "py": "Zhùyì chákàn",
    "vn": "chú ý kiểm tra"
   },
   {
    "zh": "查看情况",
    "py": "Chákàn qíngkuàng",
    "vn": "xem tình hình"
   }
  ],
  "patterns": [
   {
    "s": "查看 + 信息 / 邮件 / 情况",
    "m": "Xem để nắm tình hình"
   },
   {
    "s": "查看 ≠ 查找",
    "m": "查看 = xem cái đã có; 查找 = tìm cái chưa thấy"
   }
  ],
  "ex_zh": "她先在租房网站和App上查看有关信息。",
  "ex_py": "Tā xiān zài zū fáng wǎngzhàn hé A p p shàng chákàn yǒuguān xìnxī.",
  "ex_vn": "Trước tiên cô ấy xem thông tin liên quan trên trang web và App thuê nhà.",
  "exList": [
   {
    "zh": "她先在租房网站和App上查看有关信息。",
    "py": "Tā xiān zài zū fáng wǎngzhàn hé A p p shàng chákàn yǒuguān xìnxī.",
    "vn": "Trước tiên cô ấy xem thông tin liên quan trên trang web và App thuê nhà."
   },
   {
    "zh": "这次比赛的通知已经发到大家的邮箱了，请注意查看。",
    "py": "Zhè cì bǐsài de tōngzhī yǐjīng fā dào dàjiā de yóuxiāng le, qǐng zhùyì chákàn.",
    "vn": "Thông báo cuộc thi lần này đã gửi vào hộp thư mọi người, xin chú ý kiểm tra."
   }
  ],
  "hanzi": [
   {
    "c": "查",
    "p": "chá",
    "type": "会意字 · Chữ hội ý",
    "st": 9,
    "ord": "木 → 旦 (日 + nét ngang)",
    "rad": "木 (mộc – cây)",
    "mean": "tra xét, kiểm tra",
    "tip": "木 (gỗ, bè gỗ) ở trên + 旦: xưa đi bè gỗ xem xét dòng nước → xem xét, tra. 查词典 = tra từ điển; 检查 = kiểm tra (HSK3 Bài 6).",
    "cf": "香 xiāng (香蕉 – HSK3 Bài 7) — trên là 禾, dưới là 日",
    "w": "查 / 检查 / 查词典"
   },
   {
    "c": "看",
    "p": "kàn",
    "type": "会意字 · Chữ hội ý",
    "st": 9,
    "ord": "phần 手 biến thể (phẩy → ngang → ngang → phẩy) → 目",
    "rad": "目 (mục – mắt)",
    "mean": "nhìn, xem",
    "tip": "Bàn tay 手 đặt trên mắt 目 để che nắng nhìn xa → nhìn. 看来 = nhìn tình hình mà rút ra kết luận. Ôn: 看见 (HSK1 Bài 8), 看上去 (HSK3 Bài 1).",
    "cf": "着 zhe — phần trên giống 羊",
    "w": "看来 / 看上去 / 看起来"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Có bất kỳ thông báo nào, tôi đều sẽ kiểm tra ngay.",
    "answer": "有任何通知，我都会第一时间查看。",
    "answerPy": "Yǒu rènhé tōngzhī, wǒ dōu huì dì yī shíjiān chákàn.",
    "note": "Ôn 任何……都…… (Bài 1 · điểm 1).",
    "pair": "任何……都……"
   },
   {
    "promptLang": "vi",
    "prompt": "Trước khi thuê nhà nhất định phải xem kỹ môi trường xung quanh.",
    "answer": "租房以前一定要查看周围的环境。",
    "answerPy": "Zū fáng yǐqián yídìng yào chákàn zhōuwéi de huánjìng.",
    "note": "查看 + 环境.",
    "pair": "查看 + N"
   }
  ]
 },
 {
  "n": 28,
  "zh": "信息",
  "py": "xìnxī",
  "pos": "Danh từ",
  "vn": "thông tin; tin nhắn",
  "hv": "tín tức",
  "em": "ℹ️",
  "lesson": 4,
  "explain": [
   "Thông tin, tin tức nói chung; cũng chỉ tin nhắn điện thoại (短信)."
  ],
  "usage": "有关信息 · 出租信息 · 租房信息 · 发信息.",
  "collo": [
   "有关信息",
   "租房信息",
   "发信息",
   "一条信息"
  ],
  "colloFull": [
   {
    "zh": "有关信息",
    "py": "Yǒuguān xìnxī",
    "vn": "thông tin liên quan"
   },
   {
    "zh": "租房信息",
    "py": "Zū fáng xìnxī",
    "vn": "thông tin thuê nhà"
   },
   {
    "zh": "发信息",
    "py": "Fā xìnxī",
    "vn": "gửi tin nhắn"
   },
   {
    "zh": "一条信息",
    "py": "Yì tiáo xìnxī",
    "vn": "một tin (nhắn)"
   }
  ],
  "patterns": [
   {
    "s": "一条 + 信息",
    "m": "Lượng từ 条"
   },
   {
    "s": "查看 / 查找 / 发 + 信息",
    "m": "Động từ hay đi kèm"
   }
  ],
  "ex_zh": "她先在租房网站和App上查看有关信息。",
  "ex_py": "Tā xiān zài zū fáng wǎngzhàn hé A p p shàng chákàn yǒuguān xìnxī.",
  "ex_vn": "Trước tiên cô ấy xem thông tin liên quan trên trang web và App thuê nhà.",
  "exList": [
   {
    "zh": "她先在租房网站和App上查看有关信息。",
    "py": "Tā xiān zài zū fáng wǎngzhàn hé A p p shàng chákàn yǒuguān xìnxī.",
    "vn": "Trước tiên cô ấy xem thông tin liên quan trên trang web và App thuê nhà."
   },
   {
    "zh": "那你上网查找租房信息时，一定要小心，不要只看价格。",
    "py": "Nà nǐ shàngwǎng cházhǎo zū fáng xìnxī shí, yídìng yào xiǎoxīn, búyào zhī kàn jiàgé.",
    "vn": "Vậy khi bạn lên mạng tìm thông tin thuê nhà, nhất định phải cẩn thận, đừng chỉ xem giá."
   }
  ],
  "hanzi": [
   {
    "c": "信",
    "p": "xìn",
    "type": "左右结构 · Trái-phải",
    "st": 9,
    "ord": "亻 trái → 言 phải",
    "rad": "亻 (nhân)",
    "mean": "tin",
    "tip": "Người 亻 + lời 言 → lời người nói đáng TIN → TÍN. 自信 = tự tin; 相信 (Bài 4); 信心 (Bài 9); 信 = thư.",
    "cf": "言 (yán – lời)",
    "w": "自信 / 相信 / 信心 / 信"
   },
   {
    "c": "息",
    "p": "xī",
    "type": "上下结构 · Trên-dưới",
    "st": 10,
    "ord": "自 trên → 心 dưới",
    "rad": "心 (tâm)",
    "mean": "tin; nghỉ",
    "tip": "自(mũi) + 心(tim) → hơi thở → TIN TỨC (信息), NGHỈ (休息). 消息 (Bài 9).",
    "cf": "自 (zì – tự)",
    "w": "信息 / 消息 / 休息"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Cô ấy tìm thấy trên mạng một tin cho thuê nhà.",
    "answer": "她在网上查找到一条出租信息。",
    "answerPy": "Tā zài wǎngshàng cházhǎo dào yì tiáo chūzū xìnxī.",
    "note": "Câu trong bài tập hoàn thành đoạn văn của sách.",
    "pair": "一条信息"
   },
   {
    "promptLang": "vi",
    "prompt": "Nếu có thông tin mới thì gửi tin nhắn cho tôi nhé.",
    "answer": "要是有新信息，就给我发信息吧。",
    "answerPy": "Yàoshi yǒu xīn xìnxī, jiù gěi wǒ fā xìnxī ba.",
    "note": "Ôn 要是……就…… (Bài 1 · điểm 2).",
    "pair": "要是……就……"
   }
  ]
 },
 {
  "n": 29,
  "zh": "查找",
  "py": "cházhǎo",
  "pos": "Động từ",
  "vn": "tìm kiếm, tra tìm",
  "hv": "tra trảo",
  "em": "🔎",
  "lesson": 4,
  "explain": [
   "Tìm kỹ để ra thứ mình cần (thông tin, tài liệu, nhà…)."
  ],
  "usage": "查找信息 · 查找合适的房子 · 查找资料.",
  "collo": [
   "查找信息",
   "查找房子",
   "上网查找",
   "查找到"
  ],
  "colloFull": [
   {
    "zh": "查找信息",
    "py": "Cházhǎo xìnxī",
    "vn": "tìm thông tin"
   },
   {
    "zh": "查找房子",
    "py": "Cházhǎo fángzi",
    "vn": "tìm nhà"
   },
   {
    "zh": "上网查找",
    "py": "Shàngwǎng cházhǎo",
    "vn": "lên mạng tìm"
   },
   {
    "zh": "查找到",
    "py": "Cházhǎo dào",
    "vn": "tìm thấy"
   }
  ],
  "patterns": [
   {
    "s": "查找 + 到 + N",
    "m": "Tìm thấy (có kết quả)"
   },
   {
    "s": "上网 + 查找 + N",
    "m": "Lên mạng tìm"
   }
  ],
  "ex_zh": "她先在租房网站和App上查看有关信息，查找合适的房子。",
  "ex_py": "Tā xiān zài zū fáng wǎngzhàn hé A p p shàng chákàn yǒuguān xìnxī, cházhǎo héshì de fángzi.",
  "ex_vn": "Trước tiên cô ấy xem thông tin trên trang web và App thuê nhà, tìm căn nhà phù hợp.",
  "exList": [
   {
    "zh": "她先在租房网站和App上查看有关信息，查找合适的房子。",
    "py": "Tā xiān zài zū fáng wǎngzhàn hé A p p shàng chákàn yǒuguān xìnxī, cházhǎo héshì de fángzi.",
    "vn": "Trước tiên cô ấy xem thông tin trên trang web và App thuê nhà, tìm căn nhà phù hợp."
   },
   {
    "zh": "那你上网查找租房信息时，一定要小心，不要只看价格。",
    "py": "Nà nǐ shàngwǎng cházhǎo zū fáng xìnxī shí, yídìng yào xiǎoxīn, búyào zhī kàn jiàgé.",
    "vn": "Khi bạn lên mạng tìm thông tin thuê nhà, nhất định phải cẩn thận, đừng chỉ xem giá."
   }
  ],
  "hanzi": [
   {
    "c": "查",
    "p": "chá",
    "type": "会意字 · Chữ hội ý",
    "st": 9,
    "ord": "木 → 旦 (日 + nét ngang)",
    "rad": "木 (mộc – cây)",
    "mean": "tra xét, kiểm tra",
    "tip": "木 (gỗ, bè gỗ) ở trên + 旦: xưa đi bè gỗ xem xét dòng nước → xem xét, tra. 查词典 = tra từ điển; 检查 = kiểm tra (HSK3 Bài 6).",
    "cf": "香 xiāng (香蕉 – HSK3 Bài 7) — trên là 禾, dưới là 日",
    "w": "查 / 检查 / 查词典"
   },
   {
    "c": "找",
    "p": "zhǎo",
    "type": "左右结构 · Trái-phải",
    "st": 7,
    "ord": "扌(thủ) trái → 戈(qua) phải",
    "rad": "扌 (thủ – tay)",
    "mean": "tìm, kiếm",
    "tip": "Bộ 扌(tay) → dùng tay lục lọi, TÌM KIẾM vật gì đó.",
    "cf": "我 (wǒ – \"tôi\", cùng chứa 戈)",
    "w": "找到 / 正在找"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Thông qua mạng internet, tôi tìm được rất nhiều tài liệu học tiếng Trung.",
    "answer": "通过网络，我查找到了很多学中文的材料。",
    "answerPy": "Tōngguò wǎngluò, wǒ cházhǎo dào le hěn duō xué Zhōngwén de cáiliào.",
    "note": "Ôn 通过 (Bài 1 · từ mới).",
    "pair": "通过……"
   },
   {
    "promptLang": "vi",
    "prompt": "Tôi tìm mãi ba ngày mới thấy căn nhà phù hợp.",
    "answer": "我查找了三天，才找到合适的房子。",
    "answerPy": "Wǒ cházhǎo le sān tiān, cái zhǎo dào héshì de fángzi.",
    "note": "Ôn 才 (muộn, khó) (HSK 3).",
    "pair": "……才……"
   }
  ]
 },
 {
  "n": 30,
  "zh": "接着",
  "py": "jiēzhe",
  "pos": "Phó từ / Động từ",
  "vn": "tiếp đó, sau đó; tiếp tục",
  "hv": "tiếp trước",
  "em": "⏭️",
  "lesson": 4,
  "explain": [
   "Phó từ: ngay sau việc trước (thứ tự hành động): 先……，接着…….",
   "Động từ: tiếp tục làm việc đang dở."
  ],
  "usage": "先……，接着…… · 接着说 · 接着做.",
  "collo": [
   "接着说",
   "接着做",
   "接着又……",
   "先……接着……"
  ],
  "colloFull": [
   {
    "zh": "接着说",
    "py": "Jiēzhe shuō",
    "vn": "nói tiếp"
   },
   {
    "zh": "接着做",
    "py": "Jiēzhe zuò",
    "vn": "làm tiếp"
   },
   {
    "zh": "接着又……",
    "py": "Jiēzhe yòu……",
    "vn": "tiếp đó lại …"
   },
   {
    "zh": "先……接着……",
    "py": "Xiān…… jiēzhe……",
    "vn": "trước … tiếp đó …"
   }
  ],
  "patterns": [
   {
    "s": "先 + V1，接着 + (又) + V2",
    "m": "Kể việc theo thứ tự"
   },
   {
    "s": "接着 + V",
    "m": "Tiếp tục (động từ)"
   }
  ],
  "ex_zh": "查找合适的房子，接着又去看了看房子。",
  "ex_py": "Cházhǎo héshì de fángzi, jiēzhe yòu qù kàn le kàn fángzi.",
  "ex_vn": "Tìm căn nhà phù hợp, tiếp đó lại đi xem nhà.",
  "exList": [
   {
    "zh": "查找合适的房子，接着又去看了看房子。",
    "py": "Cházhǎo héshì de fángzi, jiēzhe yòu qù kàn le kàn fángzi.",
    "vn": "Tìm căn nhà phù hợp, tiếp đó lại đi xem nhà."
   },
   {
    "zh": "我要先回家住几天，接着跟朋友去上海玩。",
    "py": "Wǒ yào xiān huí jiā zhù jǐ tiān, jiēzhe gēn péngyou qù Shànghǎi wán.",
    "vn": "Tôi sẽ về nhà ở mấy hôm trước, sau đó cùng bạn đi Thượng Hải chơi."
   }
  ],
  "hanzi": [
   {
    "c": "接",
    "p": "jiē",
    "type": "左右结构 · Trái-phải",
    "st": 11,
    "ord": "扌 trái → 妾 phải",
    "rad": "扌 (thủ)",
    "mean": "nối, đón",
    "tip": "Tay 扌 + 妾 → tay TIẾP nhận, nối tiếp. 接着 = tiếp theo; 接受 (Bài 6); 接 (đón, nhận điện thoại Bài 4).",
    "cf": "妾 (qiè)",
    "w": "接着 / 接受 / 接电话 / 直接"
   },
   {
    "c": "着",
    "p": "zhe",
    "type": "上下结构 · Trên-dưới",
    "st": 11,
    "ord": "羊(biến thể) trên → 目 dưới",
    "rad": "目 (mục – mắt)",
    "mean": "đạt được, trúng",
    "tip": "Khi đọc \"zháo\", 着 mang nghĩa ĐẠT ĐƯỢC kết quả mong muốn — 睡着 = đạt được trạng thái NGỦ.",
    "cf": "着 (zhe – \"đang\", cùng chữ nhưng khác âm và nghĩa\")",
    "w": "睡着 / 找着 / 着急"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Anh nói tiếp đi, tôi đang nghe.",
    "answer": "你接着说，我在听呢。",
    "answerPy": "Nǐ jiēzhe shuō, wǒ zài tīng ne.",
    "note": "接着 = tiếp tục.",
    "pair": "接着 + V"
   },
   {
    "promptLang": "vi",
    "prompt": "Tôi đọc sách trước, tiếp đó viết nhật ký.",
    "answer": "我先看书，接着写日记。",
    "answerPy": "Wǒ xiān kàn shū, jiēzhe xiě rìjì.",
    "note": "先……，接着…….",
    "pair": "先……，接着……"
   }
  ]
 },
 {
  "n": 31,
  "zh": "同时",
  "py": "tóngshí",
  "pos": "Liên từ / Danh từ",
  "vn": "đồng thời, cùng lúc",
  "hv": "đồng thời",
  "em": "⏱️",
  "lesson": 4,
  "explain": [
   "Danh từ: cùng một lúc.",
   "Liên từ: nối thêm ý — “đồng thời, ngoài ra”."
  ],
  "usage": "……，同时…… · 在……的同时 · 同时进行.",
  "collo": [
   "同时了解",
   "在……的同时",
   "同时进行",
   "同时到达"
  ],
  "colloFull": [
   {
    "zh": "同时了解",
    "py": "Tóngshí liǎojiě",
    "vn": "đồng thời tìm hiểu"
   },
   {
    "zh": "在……的同时",
    "py": "Zài…… de tóngshí",
    "vn": "trong khi …"
   },
   {
    "zh": "同时进行",
    "py": "Tóngshí jìnxíng",
    "vn": "tiến hành cùng lúc"
   },
   {
    "zh": "同时到达",
    "py": "Tóngshí dàodá",
    "vn": "đến cùng lúc"
   }
  ],
  "patterns": [
   {
    "s": "V1……，同时 + V2……",
    "m": "Liên từ: đồng thời"
   },
   {
    "s": "在 + V + 的同时，……",
    "m": "Trong lúc …"
   }
  ],
  "ex_zh": "接着又去看了看房子，同时了解房子周围的环境。",
  "ex_py": "Jiēzhe yòu qù kàn le kàn fángzi, tóngshí liǎojiě fángzi zhōuwéi de huánjìng.",
  "ex_vn": "Tiếp đó lại đi xem nhà, đồng thời tìm hiểu môi trường xung quanh căn nhà.",
  "exList": [
   {
    "zh": "接着又去看了看房子，同时了解房子周围的环境。",
    "py": "Jiēzhe yòu qù kàn le kàn fángzi, tóngshí liǎojiě fángzi zhōuwéi de huánjìng.",
    "vn": "Tiếp đó lại đi xem nhà, đồng thời tìm hiểu môi trường xung quanh căn nhà."
   },
   {
    "zh": "学中文的同时，我也在了解中国文化。",
    "py": "Xué Zhōngwén de tóngshí, wǒ yě zài liǎojiě Zhōngguó wénhuà.",
    "vn": "Trong khi học tiếng Trung, tôi cũng đang tìm hiểu văn hóa Trung Quốc."
   }
  ],
  "hanzi": [
   {
    "c": "同",
    "p": "tóng",
    "type": "半包围结构 · Bán bao vây",
    "st": 6,
    "ord": "冂 bao ngoài → 一+口 trong",
    "rad": "口 (khẩu)",
    "mean": "cùng, giống",
    "tip": "Chữ hội ý nhiều miệng 口 nói CÙNG một ý dưới một mái 冂 → CÙNG, GIỐNG, kết hợp 时(thời gian) thành 同时 = CÙNG LÚC.",
    "cf": "向 (xiàng – \"hướng về\", tự dạng gần giống)",
    "w": "同时 / 同意 / 相同 / 共同"
   },
   {
    "c": "时",
    "p": "shí",
    "type": "形声字 · Chữ hình thanh",
    "st": 7,
    "ord": "日 → 寸",
    "rad": "日 (nhật – mặt trời)",
    "mean": "thời, lúc",
    "tip": "……时 là cách nói gọn của ……的时候.",
    "cf": "的时候 (de shíhou)",
    "w": "时 / 时间 / 小时"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Đi làm thêm vừa kiếm được tiền, đồng thời còn hiểu thêm về xã hội.",
    "answer": "打工能挣钱，同时还能了解社会。",
    "answerPy": "Dǎgōng néng zhèng qián, tóngshí hái néng liǎojiě shèhuì.",
    "note": "同时 + 还.",
    "pair": "……，同时还……"
   },
   {
    "promptLang": "vi",
    "prompt": "Hai chúng tôi cùng lúc đến trường.",
    "answer": "我们两个人同时到了学校。",
    "answerPy": "Wǒmen liǎng gèrén tóngshí dào le xuéxiào.",
    "note": "同时 làm trạng ngữ thời gian.",
    "pair": "同时 + V"
   }
  ]
 },
 {
  "n": 32,
  "zh": "位置",
  "py": "wèizhì",
  "pos": "Danh từ",
  "vn": "vị trí",
  "hv": "vị trí",
  "em": "📍",
  "lesson": 4,
  "explain": [
   "Chỗ, nơi một vật / tòa nhà nằm. Khi thuê nhà: gần ga tàu, gần công ty… là 位置好."
  ],
  "usage": "位置好 · 位置方便 · 房子的位置.",
  "collo": [
   "位置好",
   "位置方便",
   "房子的位置",
   "地理位置"
  ],
  "colloFull": [
   {
    "zh": "位置好",
    "py": "Wèizhì hǎo",
    "vn": "vị trí tốt"
   },
   {
    "zh": "位置方便",
    "py": "Wèizhì fāngbiàn",
    "vn": "vị trí thuận tiện"
   },
   {
    "zh": "房子的位置",
    "py": "Fángzi de wèizhì",
    "vn": "vị trí căn nhà"
   },
   {
    "zh": "地理位置",
    "py": "Dìlǐ wèizhì",
    "vn": "vị trí địa lý"
   }
  ],
  "patterns": [
   {
    "s": "N + 的位置 + 很 + Adj",
    "m": "Đánh giá vị trí"
   }
  ],
  "ex_zh": "才找到一个位置、环境和价格都合适的。",
  "ex_py": "Cái zhǎo dào yí gè wèizhì, huánjìng hé jiàgé dōu héshì de.",
  "ex_vn": "Mới tìm được một căn vị trí, môi trường và giá cả đều phù hợp.",
  "exList": [
   {
    "zh": "才找到一个位置、环境和价格都合适的。",
    "py": "Cái zhǎo dào yí gè wèizhì, huánjìng hé jiàgé dōu héshì de.",
    "vn": "Mới tìm được một căn vị trí, môi trường và giá cả đều phù hợp."
   },
   {
    "zh": "房租不高，位置也比较好。",
    "py": "Fángzū bù gāo, wèizhì yě bǐjiào hǎo.",
    "vn": "Tiền thuê không cao, vị trí cũng khá tốt."
   }
  ],
  "hanzi": [
   {
    "c": "位",
    "p": "wèi",
    "type": "左右结构 · Trái-phải",
    "st": 7,
    "ord": "亻 trái → 立 phải",
    "rad": "亻 (nhân)",
    "mean": "vị trí",
    "tip": "Người 亻 + 立(đứng) → chỗ người đứng → VỊ TRÍ. 座位, 位置, lượng từ kính trọng 一位.",
    "cf": "立 (lì – đứng)",
    "w": "座位 / 位置 / 一位"
   },
   {
    "c": "置",
    "p": "zhì",
    "type": "形声字 · Chữ hình thanh",
    "st": 13,
    "ord": "罒 → 直",
    "rad": "罒 (võng – cái lưới)",
    "mean": "đặt, để; sắm sửa",
    "tip": "罒 (lưới) ở trên + 直 zhí (chỉ âm): giăng lưới đặt đúng chỗ → vị trí (位置), bố trí (布置).",
    "cf": "直 zhí (thẳng) — không có 罒; 真 zhēn (thật)",
    "w": "位置 / 布置 / 设置"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Căn nhà này vị trí tốt, cách tàu điện ngầm rất gần.",
    "answer": "这个房子位置很好，离地铁站很近。",
    "answerPy": "Zhège fángzi wèizhì hěn hǎo, lí dìtiě zhàn hěn jìn.",
    "note": "Ôn 离 (HSK 2/3).",
    "pair": "离……很近"
   },
   {
    "promptLang": "vi",
    "prompt": "Vị trí tuy tốt nhưng tiền thuê hơi đắt.",
    "answer": "位置虽然很好，不过房租有点儿贵。",
    "answerPy": "Wèizhì suīrán hěn hǎo, búguò fángzū yǒudiǎnr guì.",
    "note": "不过 (Bài 2 · điểm 2).",
    "pair": "……，不过……"
   }
  ]
 },
 {
  "n": 33,
  "zh": "价格",
  "py": "jiàgé",
  "pos": "Danh từ",
  "vn": "giá cả, giá",
  "hv": "giá cách",
  "em": "🏷️",
  "lesson": 4,
  "explain": [
   "Số tiền phải trả để mua / thuê một thứ."
  ],
  "usage": "价格不高 · 价格合适 · 只看价格.",
  "collo": [
   "价格不高",
   "价格合适",
   "价格便宜",
   "只看价格"
  ],
  "colloFull": [
   {
    "zh": "价格不高",
    "py": "Jiàgé bù gāo",
    "vn": "giá không cao"
   },
   {
    "zh": "价格合适",
    "py": "Jiàgé héshì",
    "vn": "giá phù hợp"
   },
   {
    "zh": "价格便宜",
    "py": "Jiàgé piányi",
    "vn": "giá rẻ"
   },
   {
    "zh": "只看价格",
    "py": "Zhī kàn jiàgé",
    "vn": "chỉ nhìn giá"
   }
  ],
  "patterns": [
   {
    "s": "价格 + 高 / 低 / 合适",
    "m": "Nói giá: 价格不高 chuẩn hơn 价格不贵"
   },
   {
    "s": "N + 的价格",
    "m": "Giá của cái gì"
   }
  ],
  "ex_zh": "才找到一个位置、环境和价格都合适的。",
  "ex_py": "Cái zhǎo dào yí gè wèizhì, huánjìng hé jiàgé dōu héshì de.",
  "ex_vn": "Mới tìm được một căn vị trí, môi trường và giá cả đều phù hợp.",
  "exList": [
   {
    "zh": "才找到一个位置、环境和价格都合适的。",
    "py": "Cái zhǎo dào yí gè wèizhì, huánjìng hé jiàgé dōu héshì de.",
    "vn": "Mới tìm được một căn vị trí, môi trường và giá cả đều phù hợp."
   },
   {
    "zh": "由于这个小区很安静，房子价格也不高，因此，很多人都喜欢在这里租房子。",
    "py": "Yóuyú zhège xiǎoqū hěn ānjìng, fángzi jiàgé yě bù gāo, yīncǐ, hěn duō rén dōu xǐhuan zài zhèli zū fángzi.",
    "vn": "Vì khu chung cư này rất yên tĩnh, giá nhà cũng không cao, do đó nhiều người thích thuê nhà ở đây."
   }
  ],
  "hanzi": [
   {
    "c": "价",
    "p": "jià",
    "type": "形声字 · Chữ hình thanh",
    "st": 6,
    "ord": "亻 → 介",
    "rad": "亻 (nhân đứng – người)",
    "mean": "giá, giá trị",
    "tip": "亻 (người) + 介 jiè (chỉ âm, “giới” — ở giữa): người đứng giữa mua bán nói giá → 价格, 价钱.",
    "cf": "介 jiè (介绍) — thiếu bộ 亻",
    "w": "价格 / 价钱 / 降价"
   },
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
    "prompt": "Bạn lên mạng tìm thông tin thuê nhà thì đừng chỉ nhìn giá.",
    "answer": "你上网查找租房信息时，不要只看价格。",
    "answerPy": "Nǐ shàngwǎng cházhǎo zū fáng xìnxī shí, búyào zhī kàn jiàgé.",
    "note": "Câu bài tập chọn từ của sách.",
    "pair": "不要只……"
   },
   {
    "promptLang": "vi",
    "prompt": "Cùng với kinh tế phát triển, giá nhà ngày càng cao.",
    "answer": "随着经济的发展，房子的价格越来越高。",
    "answerPy": "Suízhe jīngjì de fāzhǎn, fángzi de jiàgé yuèláiyuè gāo.",
    "note": "Ôn 随着 (Bài 1 · điểm 3).",
    "pair": "随着……，越来越……"
   }
  ]
 },
 {
  "n": 34,
  "zh": "理想",
  "py": "lǐxiǎng",
  "pos": "Tính từ / Danh từ",
  "vn": "lý tưởng; ước mơ, hoài bão",
  "hv": "lý tưởng",
  "em": "🌈",
  "lesson": 4,
  "explain": [
   "Tính từ: đúng như mong muốn, rất vừa ý.",
   "Danh từ: ước mơ, mục tiêu lớn trong đời."
  ],
  "usage": "理想的房子 · 比较理想 · 我的理想是…….",
  "collo": [
   "理想的房子",
   "比较理想",
   "实现理想",
   "我的理想"
  ],
  "colloFull": [
   {
    "zh": "理想的房子",
    "py": "Lǐxiǎng de fángzi",
    "vn": "căn nhà lý tưởng"
   },
   {
    "zh": "比较理想",
    "py": "Bǐjiào lǐxiǎng",
    "vn": "khá lý tưởng"
   },
   {
    "zh": "实现理想",
    "py": "Shíxiàn lǐxiǎng",
    "vn": "thực hiện ước mơ"
   },
   {
    "zh": "我的理想",
    "py": "Wǒ de lǐxiǎng",
    "vn": "ước mơ của tôi"
   }
  ],
  "patterns": [
   {
    "s": "理想的 + N",
    "m": "Tính từ làm định ngữ"
   },
   {
    "s": "Sub + 的理想 + 是 + V/N",
    "m": "Danh từ: ước mơ"
   }
  ],
  "ex_zh": "最后顺利租到了理想的房子。",
  "ex_py": "Zuìhòu shùnlì zū dào le lǐxiǎng de fángzi.",
  "ex_vn": "Cuối cùng đã thuê được căn nhà lý tưởng một cách suôn sẻ.",
  "exList": [
   {
    "zh": "最后顺利租到了理想的房子。",
    "py": "Zuìhòu shùnlì zū dào le lǐxiǎng de fángzi.",
    "vn": "Cuối cùng đã thuê được căn nhà lý tưởng một cách suôn sẻ."
   },
   {
    "zh": "我理想的大学是北京大学。",
    "py": "Wǒ lǐxiǎng de dàxué shì běijīngdàxué.",
    "vn": "Trường đại học mơ ước của tôi là Đại học Bắc Kinh."
   }
  ],
  "hanzi": [
   {
    "c": "理",
    "p": "lǐ",
    "type": "左右结构 · Trái-phải",
    "st": 11,
    "ord": "王 trái → 里 phải",
    "rad": "王 (ngọc)",
    "mean": "sửa, lý",
    "tip": "Ngọc 王 + 里 → mài ngọc theo vân → SỬA SANG, LÝ. 理发 = sửa tóc; 整理 (Bài 15); 管理 (Bài 15); 理解 (Bài 8).",
    "cf": "里 (lǐ – trong)",
    "w": "理发 / 整理 / 管理 / 理解"
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
    "prompt": "Trường đại học mơ ước của tôi là Đại học Bắc Kinh.",
    "answer": "我理想的大学是北京大学。",
    "answerPy": "Wǒ lǐxiǎng de dàxué shì běijīngdàxué.",
    "note": "Đáp án gợi ý bài nhìn tranh đặt câu của sách.",
    "pair": "理想的 + N"
   },
   {
    "promptLang": "vi",
    "prompt": "Ước mơ của tôi là sau này trở thành một giáo viên tiếng Trung.",
    "answer": "我的理想是将来成为一名中文老师。",
    "answerPy": "Wǒ de lǐxiǎng shì jiānglái chéngwéi yì míng Zhōngwén lǎoshī.",
    "note": "Ôn 将来, 成为 (Bài 1 · từ mới).",
    "pair": "理想是……"
   }
  ]
 },
 {
  "n": 35,
  "zh": "由于",
  "py": "yóuyú",
  "pos": "Liên từ / Giới từ",
  "vn": "do, bởi vì, vì",
  "hv": "do vu",
  "em": "🔗",
  "lesson": 4,
  "explain": [
   "Liên từ: đầu vế trước nêu nguyên nhân, vế sau thường có 所以 / 因此.",
   "Giới từ: 由于 + danh từ = do … (nguyên nhân, lý do). Trang trọng hơn 因为."
  ],
  "usage": "由于……，所以 / 因此…… · 由于 + N，……",
  "collo": [
   "由于……所以……",
   "由于……因此……",
   "由于天气原因",
   "由于大家的努力"
  ],
  "colloFull": [
   {
    "zh": "由于……所以……",
    "py": "Yóuyú…… suǒyǐ……",
    "vn": "do … nên …"
   },
   {
    "zh": "由于……因此……",
    "py": "Yóuyú…… yīncǐ……",
    "vn": "do … vì vậy …"
   },
   {
    "zh": "由于天气原因",
    "py": "Yóuyú tiānqì yuányīn",
    "vn": "do thời tiết"
   },
   {
    "zh": "由于大家的努力",
    "py": "Yóuyú dàjiā de nǔlì",
    "vn": "nhờ sự nỗ lực của mọi người"
   }
  ],
  "patterns": [
   {
    "s": "由于 + nguyên nhân，所以 / 因此 + kết quả",
    "m": "Liên từ (Bài 2 · điểm 4)"
   },
   {
    "s": "由于 + N，+ kết quả",
    "m": "Giới từ"
   }
  ],
  "ex_zh": "在中国，由于很多刚工作的年轻人工资还不太高，所以他们一开始也不买房。",
  "ex_py": "Zài Zhōngguó, yóuyú hěn duō gāng gōngzuò de niánqīngrén gōngzī hái bú tài gāo, suǒyǐ tāmen yì kāishǐ yě bù mǎi fáng.",
  "ex_vn": "Ở Trung Quốc, do nhiều người trẻ mới đi làm lương còn chưa cao lắm, nên lúc đầu họ cũng không mua nhà.",
  "exList": [
   {
    "zh": "在中国，由于很多刚工作的年轻人工资还不太高，所以他们一开始也不买房。",
    "py": "Zài Zhōngguó, yóuyú hěn duō gāng gōngzuò de niánqīngrén gōngzī hái bú tài gāo, suǒyǐ tāmen yì kāishǐ yě bù mǎi fáng.",
    "vn": "Ở Trung Quốc, do nhiều người trẻ mới đi làm lương còn chưa cao lắm, nên lúc đầu họ cũng không mua nhà."
   },
   {
    "zh": "由于大家的努力，这次运动会我们班获得了第一名。",
    "py": "Yóuyú dàjiā de nǔlì, zhè cì yùndònghuì wǒmen bān huòdé le dì yī míng.",
    "vn": "Nhờ sự cố gắng của mọi người, đại hội thể thao lần này lớp ta giành giải nhất."
   }
  ],
  "hanzi": [
   {
    "c": "由",
    "p": "yóu",
    "type": "独体字 · Chữ đơn",
    "st": 5,
    "ord": "nét liền",
    "rad": "田 (điền, biến thể)",
    "mean": "từ, do",
    "tip": "Chữ tượng hình quả trên cành → mở rộng nghĩa NGUỒN GỐC, TỪ ĐÂU MÀ RA, kết hợp 于(ở) thành 由于 = DO, VÌ (bắt nguồn từ nguyên nhân nào đó).",
    "cf": "甲 (jiǎ – \"giáp, thứ nhất\", tự dạng gần giống)",
    "w": "由于 / 理由 / 自由"
   },
   {
    "c": "于",
    "p": "yú",
    "type": "独体字 · Chữ đơn",
    "st": 3,
    "ord": "一 → 一 → 亅",
    "rad": "二 (nhị)",
    "mean": "ở, đối với",
    "tip": "Giới từ cổ nghĩa Ở/ĐỐI VỚI, kết hợp 对 thành 对于 = ĐỐI VỚI (nêu đối tượng).",
    "cf": "干 (gān – \"khô\", tự dạng gần giống)",
    "w": "对于 / 由于 / 关于"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Do điện thoại hết pin nên cô ấy không có cách nào gọi điện.",
    "answer": "由于手机没电了，她没有办法打电话。",
    "answerPy": "Yóuyú shǒujī méi diàn le, tā méiyǒu bànfǎ dǎdiànhuà.",
    "note": "Đáp án gợi ý của sách (Bài 2 · điểm 4).",
    "pair": "由于……，……"
   },
   {
    "promptLang": "vi",
    "prompt": "Do trời mưa to suốt nên chúng tôi quyết định không leo núi nữa.",
    "answer": "由于一直下大雨，所以我们决定不爬山了。",
    "answerPy": "Yóuyú yìzhí xià dà yǔ, suǒyǐ wǒmen juédìng bù páshān le.",
    "note": "Ví dụ của sách; ôn 决定 (HSK 3).",
    "pair": "由于……，所以……"
   }
  ]
 },
 {
  "n": 36,
  "zh": "工资",
  "py": "gōngzī",
  "pos": "Danh từ",
  "vn": "tiền lương",
  "hv": "công tư",
  "em": "💰",
  "lesson": 4,
  "explain": [
   "Tiền được trả hằng tháng khi đi làm."
  ],
  "usage": "工资高 / 不高 · 发工资 · 一个月的工资.",
  "collo": [
   "工资不高",
   "发工资",
   "涨工资",
   "一个月的工资"
  ],
  "colloFull": [
   {
    "zh": "工资不高",
    "py": "Gōngzī bù gāo",
    "vn": "lương không cao"
   },
   {
    "zh": "发工资",
    "py": "Fā gōngzī",
    "vn": "phát lương"
   },
   {
    "zh": "涨工资",
    "py": "Zhǎng gōngzī",
    "vn": "tăng lương"
   },
   {
    "zh": "一个月的工资",
    "py": "Yí gè yuè de gōngzī",
    "vn": "lương một tháng"
   }
  ],
  "patterns": [
   {
    "s": "工资 + 高 / 低",
    "m": "Nói mức lương: 工资很高 / 工资不太高"
   },
   {
    "s": "发 / 涨 + 工资",
    "m": "Động từ hay đi kèm"
   }
  ],
  "ex_zh": "由于很多刚工作的年轻人工资还不太高，所以他们一开始也不买房。",
  "ex_py": "Yóuyú hěn duō gāng gōngzuò de niánqīngrén gōngzī hái bú tài gāo, suǒyǐ tāmen yì kāishǐ yě bù mǎi fáng.",
  "ex_vn": "Do nhiều người trẻ mới đi làm lương còn chưa cao lắm, nên lúc đầu họ cũng không mua nhà.",
  "exList": [
   {
    "zh": "由于很多刚工作的年轻人工资还不太高，所以他们一开始也不买房。",
    "py": "Yóuyú hěn duō gāng gōngzuò de niánqīngrén gōngzī hái bú tài gāo, suǒyǐ tāmen yì kāishǐ yě bù mǎi fáng.",
    "vn": "Do nhiều người trẻ mới đi làm lương còn chưa cao lắm, nên lúc đầu họ cũng không mua nhà."
   },
   {
    "zh": "这个工作工资不高，不过离家很近。",
    "py": "Zhège gōngzuò gōngzī bù gāo, búguò lí jiā hěn jìn.",
    "vn": "Công việc này lương không cao, có điều gần nhà."
   }
  ],
  "hanzi": [
   {
    "c": "工",
    "p": "gōng",
    "type": "独体字 · Chữ đơn",
    "st": 3,
    "ord": "横(ngang trên) → 竖(sổ giữa) → 横(ngang dưới)",
    "rad": "工 (công – tự thành bộ, nghĩa: công cụ, thợ)",
    "mean": "công việc, thợ, công cụ",
    "tip": "Hình vẽ giống cây THƯỚC THỢ (dụng cụ xây dựng) với hai đầu ngang và một trục dọc → tượng trưng cho LAO ĐỘNG, CÔNG VIỆC.",
    "cf": "土 (tǔ – \"đất\", nét ngang dưới ngắn hơn thay vì dài bằng, hình dáng gần giống 工\")",
    "w": "工作 / 工人"
   },
   {
    "c": "资",
    "p": "zī",
    "type": "上下结构 · Trên-dưới",
    "st": 10,
    "ord": "次 trên → 贝 (bối) dưới",
    "rad": "贝 (bối – tiền của)",
    "mean": "tiền của, vốn liếng",
    "tip": "Bộ 贝(tiền của) + 次(thứ tự, biểu âm) → khoản TIỀN được cấp theo kỳ, kết hợp 工(công việc) thành 工资 = TIỀN LƯƠNG.",
    "cf": "姿 (zī – \"dáng vẻ\", bộ 女\")",
    "w": "工资 / 资料 / 投资"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Lương tuy không cao nhưng công việc rất thú vị.",
    "answer": "工资虽然不高，但是工作很有意思。",
    "answerPy": "Gōngzī suīrán bù gāo, dànshì gōngzuò hěn yǒuyìsī.",
    "note": "Ôn 虽然……但是…… (HSK 3).",
    "pair": "虽然……但是……"
   },
   {
    "promptLang": "vi",
    "prompt": "Nếu được tăng lương thì tôi sẽ thuê một căn nhà lớn hơn.",
    "answer": "要是涨工资了，我就租一个大一些的房子。",
    "answerPy": "Yàoshi zhǎng gōngzī le, wǒ jiù zū yí gè dà yìxiē de fángzi.",
    "note": "Ôn 要是……就…… (Bài 1 · điểm 2).",
    "pair": "要是……就……"
   }
  ]
 },
 {
  "n": 37,
  "zh": "感",
  "py": "gǎn",
  "pos": "Hậu tố",
  "vn": "cảm giác, cảm (hậu tố tạo từ)",
  "hv": "cảm",
  "em": "💗",
  "lesson": 4,
  "explain": [
   "Đứng sau từ khác để chỉ một loại cảm giác: 安全感 (cảm giác an toàn), 幸福感 (cảm giác hạnh phúc), 责任感 (tinh thần trách nhiệm)."
  ],
  "usage": "安全感 · 幸福感 · 有……感.",
  "collo": [
   "安全感",
   "幸福感",
   "责任感",
   "有安全感"
  ],
  "colloFull": [
   {
    "zh": "安全感",
    "py": "Ānquán gǎn",
    "vn": "cảm giác an toàn"
   },
   {
    "zh": "幸福感",
    "py": "Xìngfú gǎn",
    "vn": "cảm giác hạnh phúc"
   },
   {
    "zh": "责任感",
    "py": "Zérèn gǎn",
    "vn": "tinh thần trách nhiệm"
   },
   {
    "zh": "有安全感",
    "py": "Yǒu ānquán gǎn",
    "vn": "có cảm giác an toàn"
   }
  ],
  "patterns": [
   {
    "s": "N / Adj + 感",
    "m": "Tạo danh từ chỉ cảm giác"
   },
   {
    "s": "有 / 没有 + ……感",
    "m": "有安全感 / 没有安全感"
   }
  ],
  "ex_zh": "有自己的房子会更有安全感。",
  "ex_py": "Yǒu zìjǐ de fángzi huì gèng yǒu ānquán gǎn.",
  "ex_vn": "Có nhà của riêng mình sẽ có cảm giác an toàn hơn.",
  "exList": [
   {
    "zh": "有自己的房子会更有安全感。",
    "py": "Yǒu zìjǐ de fángzi huì gèng yǒu ānquán gǎn.",
    "vn": "Có nhà của riêng mình sẽ có cảm giác an toàn hơn."
   },
   {
    "zh": "和家人在一起，我觉得很有幸福感。",
    "py": "Hé jiārén zài yìqǐ, wǒ juéde hěn yǒu xìngfú gǎn.",
    "vn": "Ở bên gia đình, tôi thấy rất hạnh phúc."
   }
  ],
  "hanzi": [
   {
    "c": "感",
    "p": "gǎn",
    "type": "形声字 · Chữ hình thanh",
    "st": 13,
    "ord": "咸 → 心",
    "rad": "心 (tâm – tim)",
    "mean": "cảm thấy, cảm",
    "tip": "咸 (chỉ âm) + 心 (lòng): trong lòng có cảm giác → cảm. Đã gặp trong 感兴趣 (HSK3 Bài 5).",
    "cf": "咸 xián (mặn) — không có 心",
    "w": "感冒 / 感兴趣"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Rất nhiều người Trung Quốc cho rằng có nhà mới có nhà (tổ ấm), có nhà riêng sẽ an tâm hơn.",
    "answer": "很多中国人觉得，有房才有家，有自己的房子会更有安全感。",
    "answerPy": "Hěn duō zhōngguórén juéde, yǒu fáng cái yǒu jiā, yǒu zìjǐ de fángzi huì gèng yǒu ānquán gǎn.",
    "note": "Câu trong bài khoá 4; ôn 才 nhấn mạnh điều kiện.",
    "pair": "有……才……"
   },
   {
    "promptLang": "vi",
    "prompt": "Một mặt anh ấy rất có trách nhiệm, mặt khác cũng rất nhiệt tình.",
    "answer": "他一方面很有责任感，另一方面也很热情。",
    "answerPy": "Tā yìfāngmiàn hěn yǒu zérèn gǎn, lìngyìfāngmiàn yě hěn rèqíng.",
    "note": "Ôn 一方面……另一方面…… (Bài 1 · điểm 4).",
    "pair": "一方面……另一方面……"
   }
  ]
 }
];
var wuData = [
 {
  "img": "/images/hsk4v3/bai-2/wu-A.webp",
  "label": "客厅",
  "py": "kètīng",
  "letter": "A"
 },
 {
  "img": "/images/hsk4v3/bai-2/wu-B.webp",
  "label": "种",
  "py": "zhòng",
  "letter": "B"
 },
 {
  "img": "/images/hsk4v3/bai-2/wu-C.webp",
  "label": "收拾",
  "py": "shōushi",
  "letter": "C"
 },
 {
  "img": "/images/hsk4v3/bai-2/wu-D.webp",
  "label": "毕业",
  "py": "bìyè",
  "letter": "D"
 },
 {
  "img": "/images/hsk4v3/bai-2/wu-E.webp",
  "label": "厨房",
  "py": "chúfáng",
  "letter": "E"
 },
 {
  "img": "/images/hsk4v3/bai-2/wu-F.webp",
  "label": "价格",
  "py": "jiàgé",
  "letter": "F"
 }
];
var dialogData = [
 {
  "scene": "在房东家 · Ở nhà chủ nhà (Bạch Gia Nguyệt muốn thuê nhà, Lý Văn đi cùng cô ấy xem phòng)",
  "anh": "/images/hsk4v3/bai-2/kv-1.webp",
  "nguoi": [
   {
    "ten": "房东",
    "anh": "/images/hsk4v3/bai-2/fangdong.webp"
   },
   {
    "ten": "白家月",
    "anh": "/images/hsk4v3/nv/bai.webp"
   }
  ],
  "preQuiz": [
   {
    "q": "白家月在看的房子每个月房租是多少？",
    "opts": [
     "3500元",
     "5000元",
     "5500元",
     "6500元"
    ],
    "ans": 2
   },
   {
    "q": "白家月在看的房子离哪里近？",
    "opts": [
     "公司",
     "地铁站",
     "公交站",
     "大超市"
    ],
    "ans": 1
   }
  ],
  "lines": [
   {
    "sp": 0,
    "zh": "请进！我给你们介绍一下，这个房子有两个房间，那个大房间出租，房租每月5500元。现在已经收拾好了，想租的话，今天就可以搬进来。",
    "py": "Qǐng jìn! Wǒ gěi nǐmen jièshào yíxià, zhège fángzi yǒu liǎng gè fángjiān, nàge dà fángjiān chūzū, fángzū měi yuè 5 5 0 0 yuán. Xiànzài yǐjīng shōushi hǎo le, xiǎng zū dehuà, jīntiān jiù kěyǐ bān jìnlái.",
    "vn": "Mời vào! Tôi giới thiệu với hai bạn một chút: căn nhà này có hai phòng, phòng lớn kia cho thuê, tiền thuê mỗi tháng 5500 tệ. Bây giờ đã dọn dẹp xong rồi, muốn thuê thì hôm nay có thể dọn vào luôn."
   },
   {
    "sp": 1,
    "zh": "嗯，这个房间真不小，还挺亮。小区离我们学校也不远。",
    "py": "Ǹg, zhège fángjiān zhēn bù xiǎo, hái tǐng liàng. Xiǎoqū lí wǒmen xuéxiào yě bù yuǎn.",
    "vn": "Ừm, căn phòng này rộng thật đấy, lại còn khá sáng. Khu chung cư cách trường chúng cháu cũng không xa."
   },
   {
    "sp": 0,
    "zh": "是的，我们小区离地铁站也很近，生活上很方便。如果决定租了，告诉我就是了。",
    "py": "Shì de, wǒmen xiǎoqū lí dìtiě zhàn yě hěn jìn, shēnghuó shàng hěn fāngbiàn. Rúguǒ juédìng zū le, gàosu wǒ jiùshì le.",
    "vn": "Đúng vậy, khu chung cư của chúng tôi cách ga tàu điện ngầm cũng rất gần, sinh hoạt rất tiện. Nếu quyết định thuê thì cứ báo tôi là được."
   },
   {
    "sp": 1,
    "zh": "好的，我们再去看看外边的环境。",
    "py": "Hǎo de, wǒmen zài qù kàn kàn wàibian de huánjìng.",
    "vn": "Vâng ạ, chúng cháu đi xem thêm môi trường bên ngoài đã."
   }
  ]
 },
 {
  "scene": "在小区里 · Trong khu chung cư (Bạch Gia Nguyệt và Lý Văn tiếp tục xem môi trường xung quanh)",
  "anh": "/images/hsk4v3/bai-2/kv-2.webp",
  "nguoi": [
   {
    "ten": "李文",
    "anh": "/images/hsk4v3/nv/liwen.webp"
   },
   {
    "ten": "白家月",
    "anh": "/images/hsk4v3/nv/bai.webp"
   }
  ],
  "preQuiz": [
   {
    "q": "白家月觉得小区的环境怎么样？",
    "opts": [
     "树太少",
     "不太好",
     "很安静",
     "很干净"
    ],
    "ans": 2
   },
   {
    "q": "白家月想什么时候搬进新房子？",
    "opts": [
     "今天",
     "明天",
     "后天下午",
     "后天晚上"
    ],
    "ans": 1
   }
  ],
  "lines": [
   {
    "sp": 0,
    "zh": "家月，你看，那边还有个小花园。",
    "py": "Jiāyuè, nǐ kàn, nàbiān hái yǒu gè xiǎo huāyuán.",
    "vn": "Gia Nguyệt, cậu xem, bên kia còn có một khu vườn nhỏ."
   },
   {
    "sp": 1,
    "zh": "嗯，这个小区到处是花，还种了不少树，周围也很安静。",
    "py": "Ǹg, zhège xiǎoqū dàochù shì huā, hái zhòng le bù shǎo shù, zhōuwéi yě hěn ānjìng.",
    "vn": "Ừ, khu chung cư này đâu đâu cũng có hoa, còn trồng không ít cây, xung quanh cũng rất yên tĩnh."
   },
   {
    "sp": 0,
    "zh": "是啊！这个小区的环境真不错，不过我听说，附近有十几家公司，很多刚毕业的学生都租住在这里。周末他们可能会玩到很晚，恐怕会影响你休息。",
    "py": "Shì a! Zhège xiǎoqū de huánjìng zhēn búcuò, búguò wǒ tīngshuō, fùjìn yǒu shí jǐ jiā gōngsī, hěn duō gāng bìyè de xuésheng dōu zū zhù zài zhèli. Zhōumò tāmen kěnéng huì wán dào hěn wǎn, kǒngpà huì yǐngxiǎng nǐ xiūxi.",
    "vn": "Đúng thế! Môi trường khu này đẹp thật, có điều tớ nghe nói gần đây có mười mấy công ty, nhiều sinh viên mới tốt nghiệp đều thuê nhà ở đây. Cuối tuần họ có thể chơi đến rất muộn, e là sẽ ảnh hưởng đến việc nghỉ ngơi của cậu."
   },
   {
    "sp": 1,
    "zh": "没关系，我还想多认识一些朋友，和他们一起玩呢。",
    "py": "Méiguānxì, wǒ hái xiǎng duō rènshi yìxiē péngyou, hé tāmen yìqǐ wán ne.",
    "vn": "Không sao, tớ còn muốn quen thêm bạn bè, chơi cùng họ nữa ấy chứ."
   },
   {
    "sp": 0,
    "zh": "是呢，大家可以一起热闹热闹。",
    "py": "Shì ne, dàjiā kěyǐ yìqǐ rènao rènao.",
    "vn": "Cũng phải, mọi người có thể cùng nhau vui vẻ một chút."
   },
   {
    "sp": 1,
    "zh": "这里房租合适，环境很好，而且房东也热情，所以我决定租这个房子了，明天就入住新家。",
    "py": "Zhèli fángzū héshì, huánjìng hěn hǎo, érqiě fángdōng yě rèqíng, suǒyǐ wǒ juédìng zū zhège fángzi le, míngtiān jiù rùzhù xīn jiā.",
    "vn": "Ở đây tiền thuê hợp lý, môi trường tốt, hơn nữa chủ nhà cũng nhiệt tình, nên tớ quyết định thuê căn này rồi, ngày mai dọn vào nhà mới luôn."
   }
  ]
 },
 {
  "scene": "白家月的日记 · Nhật ký của Bạch Gia Nguyệt sau khi dọn vào nhà mới",
  "anh": "/images/hsk4v3/bai-2/kv-3.webp",
  "nguoi": [
   {
    "ten": "白家月",
    "anh": "/images/hsk4v3/nv/bai.webp"
   }
  ],
  "preQuiz": [
   {
    "q": "白家月租的房子，客厅里都有什么？",
    "opts": [
     "椅子、沙发和电视",
     "椅子、空调和书桌",
     "冰箱、电视和空调",
     "书桌、椅子和沙发"
    ],
    "ans": 0
   },
   {
    "q": "白家月平常主要在哪儿吃饭？",
    "opts": [
     "家里",
     "饭馆",
     "邻居家",
     "学校食堂"
    ],
    "ans": 3
   }
  ],
  "lines": [
   {
    "sp": 0,
    "zh": "8月25日，晴",
    "py": "8 Yuè 2 5 rì, qíng",
    "vn": "Ngày 25 tháng 8, trời nắng"
   },
   {
    "sp": 0,
    "zh": "昨天我顺利租到了合适的房子，今天李文帮我搬家。",
    "py": "Zuótiān wǒ shùnlì zū dào le héshì de fángzi, jīntiān Lǐ Wén bāng wǒ bānjiā.",
    "vn": "Hôm qua tôi đã thuận lợi thuê được căn nhà vừa ý, hôm nay Lý Văn giúp tôi chuyển nhà."
   },
   {
    "sp": 0,
    "zh": "搬进去的时候，房东又向我介绍了一下房子里的东西，并告诉我这些东西怎么用。",
    "py": "Bān jìnqù de shíhou, fángdōng yòu xiàng wǒ jièshào le yíxià fángzi lǐ de dōngxi, bìng gàosu wǒ zhèxiē dōngxi zěnme yòng.",
    "vn": "Lúc dọn vào, chủ nhà lại giới thiệu cho tôi đồ đạc trong nhà, và chỉ cho tôi cách dùng những thứ đó."
   },
   {
    "sp": 0,
    "zh": "我看了一下，客厅里有椅子、沙发，还有一台大电视；厨房里有冰箱和一些做饭用的东西，不过，我平常主要在学校食堂吃，基本上不做饭。",
    "py": "Wǒ kàn le yíxià, kètīng lǐ yǒu yǐzi, shāfā, hái yǒu yì tái dà diànshì; chúfáng lǐ yǒu bīngxiāng hé yìxiē zuòfàn yòng de dōngxi, búguò, wǒ píngcháng zhǔyào zài xuéxiào shí táng chī, jīběnshàng bú zuòfàn.",
    "vn": "Tôi xem qua một lượt: phòng khách có ghế, sofa, còn có một chiếc tivi to; trong bếp có tủ lạnh và một số đồ dùng nấu ăn, có điều ngày thường tôi chủ yếu ăn ở nhà ăn của trường, hầu như không nấu cơm."
   },
   {
    "sp": 0,
    "zh": "我租的房间里，除了一张床以外，还有一台空调、一张书桌和一把椅子。",
    "py": "Wǒ zū de fángjiān lǐ, chúle yì zhāng chuáng yǐwài, hái yǒu yì tái kōngtiáo, yì zhāng shū zhuō hé yì bǎ yǐzi.",
    "vn": "Trong phòng tôi thuê, ngoài một chiếc giường ra, còn có một chiếc điều hòa, một cái bàn học và một chiếc ghế."
   },
   {
    "sp": 0,
    "zh": "看完整个房子后，我准备再去买几条毛巾，其他东西还不需要。",
    "py": "Kànwán zhěnggè fángzi hòu, wǒ zhǔnbèi zài qù mǎi jǐ tiáo máojīn, qítā dōngxi hái bù xūyào.",
    "vn": "Xem xong cả căn nhà, tôi định đi mua thêm mấy chiếc khăn, những thứ khác thì chưa cần."
   }
  ],
  "doan": true
 },
 {
  "scene": "怎样租到合适的房子 · Làm thế nào để thuê được căn nhà phù hợp",
  "anh": "/images/hsk4v3/bai-2/kv-4.webp",
  "nguoi": [
   {
    "ten": "小语",
    "anh": "/images/hsk4v3/nv/xiaoyu.webp"
   }
  ],
  "preQuiz": [
   {
    "q": "白家月觉得这次租房怎么样？",
    "opts": [
     "很简单",
     "不容易",
     "不理想",
     "有意思"
    ],
    "ans": 1
   },
   {
    "q": "根据课文，很多刚工作的年轻人为什么选择租房？",
    "opts": [
     "更有安全感",
     "不喜欢买房",
     "喜欢租房子住",
     "工资还不太高"
    ],
    "ans": 3
   }
  ],
  "lines": [
   {
    "sp": 0,
    "zh": "在李文的帮助下，白家月租到了合适的房子。",
    "py": "Zài Lǐ Wén de bāngzhù xià, Bái Jiāyuè zū dào le héshì de fángzi.",
    "vn": "Với sự giúp đỡ của Lý Văn, Bạch Gia Nguyệt đã thuê được căn nhà vừa ý."
   },
   {
    "sp": 0,
    "zh": "对白家月来说，这次租房并不容易。",
    "py": "Duì Bái Jiāyuè láishuō, zhè cì zū fáng bìng bù róngyì.",
    "vn": "Đối với Bạch Gia Nguyệt, lần thuê nhà này chẳng hề dễ dàng."
   },
   {
    "sp": 0,
    "zh": "根据李文的建议，她先在租房网站和App上查看有关信息，查找合适的房子，接着又去看了看房子，同时了解房子周围的环境。",
    "py": "Gēnjù Lǐ Wén de jiànyì, tā xiān zài zū fáng wǎngzhàn hé A p p shàng chákàn yǒuguān xìnxī, cházhǎo héshì de fángzi, jiēzhe yòu qù kàn le kàn fángzi, tóngshí liǎojiě fángzi zhōuwéi de huánjìng.",
    "vn": "Theo gợi ý của Lý Văn, trước tiên cô ấy xem thông tin liên quan trên các trang web và App thuê nhà, tìm căn nhà phù hợp, tiếp đó lại đến xem nhà, đồng thời tìm hiểu môi trường xung quanh."
   },
   {
    "sp": 0,
    "zh": "她看了好几个房子，才找到一个位置、环境和价格都合适的，最后顺利租到了理想的房子。",
    "py": "Tā kàn le hǎo jǐ gè fángzi, cái zhǎo dào yí gè wèizhì, huánjìng hé jiàgé dōu héshì de, zuìhòu shùnlì zū dào le lǐxiǎng de fángzi.",
    "vn": "Cô ấy xem mấy căn liền mới tìm được một căn vị trí, môi trường và giá cả đều phù hợp, cuối cùng đã thuận lợi thuê được căn nhà lý tưởng."
   },
   {
    "sp": 0,
    "zh": "租房的时候，李文告诉白家月，在中国，由于很多刚工作的年轻人工资还不太高，所以他们一开始也不买房，都选择租房。",
    "py": "Zū fáng de shíhou, Lǐ Wén gàosu Bái Jiāyuè, zài Zhōngguó, yóuyú hěn duō gāng gōngzuò de niánqīngrén gōngzī hái bú tài gāo, suǒyǐ tāmen yì kāishǐ yě bù mǎi fáng, dōu xuǎnzé zū fáng.",
    "vn": "Lúc thuê nhà, Lý Văn nói với Bạch Gia Nguyệt rằng ở Trung Quốc, do nhiều người trẻ mới đi làm lương còn chưa cao lắm, nên lúc đầu họ cũng không mua nhà mà đều chọn thuê nhà."
   },
   {
    "sp": 0,
    "zh": "工作几年后，不少人就会买房，因为大家一直觉得，有房才有家，有自己的房子会更有安全感。",
    "py": "Gōngzuò jǐ nián hòu, bù shǎo rén jiù huì mǎi fáng, yīnwèi dàjiā yìzhí juéde, yǒu fáng cái yǒu jiā, yǒu zìjǐ de fángzi huì gèng yǒu ānquán gǎn.",
    "vn": "Đi làm vài năm, không ít người sẽ mua nhà, vì mọi người luôn cho rằng có nhà mới có tổ ấm, có nhà của riêng mình sẽ thấy an tâm hơn."
   }
  ],
  "doan": true
 }
];
var listenData = [
 {
  "audio": "你好，我在网上看到了你们的出租信息，那个房子还在吗？在，一室一厅，房租每月三千元。离地铁站远吗？不远，走路五分钟就到了。周围环境怎么样？小区里种了很多树，挺安静的，不过附近没有大超市。那我明天下午过去看看。好，到了给我打电话就是了。",
  "questions": [
   {
    "q": "这个房子每个月房租是多少？",
    "opts": [
     "两千元",
     "三千元",
     "五千元"
    ],
    "ans": 1
   },
   {
    "q": "这个小区有什么不好？",
    "opts": [
     "离地铁站很远",
     "附近没有大超市",
     "周围不太安静"
    ],
    "ans": 1
   }
  ]
 },
 {
  "audio": "小林，听说你搬家了？是啊，上周末入住新家的。新家怎么样？客厅很大，也很亮，厨房里冰箱什么的都有。不过我平常工作太忙，基本上不做饭。那你周末请我们去热闹热闹吧！没问题，我先把房间收拾一下。",
  "questions": [
   {
    "q": "小林的新家怎么样？",
    "opts": [
     "客厅又大又亮",
     "厨房里什么都没有",
     "离公司很远"
    ],
    "ans": 0
   },
   {
    "q": "小林为什么基本上不做饭？",
    "opts": [
     "不会做饭",
     "平常工作太忙",
     "厨房太小"
    ],
    "ans": 1
   }
  ]
 },
 {
  "audio": "由于房租越来越贵，我打算跟朋友一起租房子。一起租好啊，一方面能减轻经济压力，另一方面两个人住也热闹。你们想租什么样的房子？位置要好，离公司近，价格也不能太高。要是需要帮忙，告诉我就是了。",
  "questions": [
   {
    "q": "说话人为什么打算跟朋友一起租房子？",
    "opts": [
     "房租越来越贵",
     "工资越来越高",
     "朋友要来北京工作"
    ],
    "ans": 0
   },
   {
    "q": "他们想租什么样的房子？",
    "opts": [
     "很大很亮的",
     "位置好、价格不太高的",
     "周围很热闹的"
    ],
    "ans": 1
   }
  ]
 }
];
var matchData = [
 {
  "left": "收拾",
  "right": "房间"
 },
 {
  "left": "查看",
  "right": "有关信息"
 },
 {
  "left": "租到",
  "right": "理想的房子"
 },
 {
  "left": "入住",
  "right": "新家"
 },
 {
  "left": "一台",
  "right": "空调"
 },
 {
  "left": "几条",
  "right": "毛巾"
 },
 {
  "left": "种了",
  "right": "不少树"
 },
 {
  "left": "更有",
  "right": "安全感"
 },
 {
  "left": "由于……",
  "right": "所以……"
 }
];
var fillData = [
 {
  "pre": "如果决定租了，告诉我",
  "blank": "就是了",
  "post": "。",
  "hint": "(… là được)",
  "ans": "就是了",
  "exp": "V + 就是了: khẳng định, trấn an."
 },
 {
  "pre": "这个房子有两个房间，那个大房间",
  "blank": "出租",
  "post": "。",
  "hint": "(cho thuê)",
  "ans": "出租",
  "exp": "Chủ nhà nói → 出租."
 },
 {
  "pre": "现在已经",
  "blank": "收拾",
  "post": "好了，今天就可以搬进来。",
  "hint": "(dọn dẹp)",
  "ans": "收拾",
  "exp": "收拾好了 = dọn xong."
 },
 {
  "pre": "这个小区的环境真不错，",
  "blank": "不过",
  "post": "附近有十几家公司。",
  "hint": "(có điều)",
  "ans": "不过",
  "exp": "……，不过…… chuyển ngoặt nhẹ."
 },
 {
  "pre": "周末他们可能会玩到很晚，",
  "blank": "恐怕",
  "post": "会影响你休息。",
  "hint": "(e là)",
  "ans": "恐怕",
  "exp": "恐怕 + 会: phỏng đoán có lo lắng."
 },
 {
  "pre": "房东向我介绍了房子里的东西，",
  "blank": "并",
  "post": "告诉我这些东西怎么用。",
  "hint": "(và)",
  "ans": "并",
  "exp": "Liên từ 并 nối hai hành động."
 },
 {
  "pre": "对白家月来说，这次租房",
  "blank": "并",
  "post": "不容易。",
  "hint": "(chẳng hề)",
  "ans": "并",
  "exp": "并不 + Adj."
 },
 {
  "pre": "客厅里有椅子、沙发，还有一",
  "blank": "台",
  "post": "大电视。",
  "hint": "(lượng từ máy móc)",
  "ans": "台",
  "exp": "一台电视 / 一台空调."
 },
 {
  "pre": "",
  "blank": "由于",
  "post": "很多刚工作的年轻人工资还不太高，所以他们都选择租房。",
  "hint": "(do)",
  "ans": "由于",
  "exp": "由于……，所以……"
 },
 {
  "pre": "她看了好几个房子，才找到一个位置、环境和",
  "blank": "价格",
  "post": "都合适的。",
  "hint": "(giá cả)",
  "ans": "价格",
  "exp": "价格合适 = giá phù hợp."
 }
];
var sortData = [
 {
  "words": [
   "如果",
   "决定",
   "租了",
   "，",
   "告诉我",
   "就是了",
   "。"
  ],
  "ans": "如果决定租了，告诉我就是了。",
  "audio": "如果决定租了，告诉我就是了。"
 },
 {
  "words": [
   "这个小区",
   "环境",
   "不错",
   "，",
   "不过",
   "附近",
   "有很多公司",
   "。"
  ],
  "ans": "这个小区环境不错，不过附近有很多公司。",
  "audio": "这个小区环境不错，不过附近有很多公司。"
 },
 {
  "words": [
   "房东",
   "向我",
   "介绍了",
   "房子里的东西",
   "，",
   "并",
   "告诉我",
   "怎么用",
   "。"
  ],
  "ans": "房东向我介绍了房子里的东西，并告诉我怎么用。",
  "audio": "房东向我介绍了房子里的东西，并告诉我怎么用。"
 },
 {
  "words": [
   "由于",
   "工资",
   "不太高",
   "，",
   "所以",
   "他们",
   "都选择",
   "租房",
   "。"
  ],
  "ans": "由于工资不太高，所以他们都选择租房。",
  "audio": "由于工资不太高，所以他们都选择租房。"
 },
 {
  "words": [
   "我",
   "平常",
   "主要",
   "在学校食堂",
   "吃",
   "，",
   "基本上",
   "不做饭",
   "。"
  ],
  "ans": "我平常主要在学校食堂吃，基本上不做饭。",
  "audio": "我平常主要在学校食堂吃，基本上不做饭。"
 },
 {
  "words": [
   "有自己的房子",
   "会",
   "更",
   "有",
   "安全感",
   "。"
  ],
  "ans": "有自己的房子会更有安全感。",
  "audio": "有自己的房子会更有安全感。"
 }
];
var mcData = [
 {
  "q": "如果决定租了，告诉我＿＿。",
  "opts": [
   "就是了",
   "就是",
   "是了",
   "就好吗"
  ],
  "ans": 0,
  "exp": "Cấu trúc cố định 「×就是了」 phải có 了, đặt cuối câu."
 },
 {
  "q": "这个房子很漂亮，＿＿房租有点儿贵。",
  "opts": [
   "不过",
   "所以",
   "而且",
   "并"
  ],
  "ans": 0,
  "exp": "Khen trước, góp ý sau → 不过."
 },
 {
  "q": "她考上了北京大学＿＿申请到了奖学金。",
  "opts": [
   "并",
   "和",
   "跟",
   "但"
  ],
  "ans": 0,
  "exp": "Liên từ 并 nối hai cụm động từ; 和 nối danh từ."
 },
 {
  "q": "其实，在大城市租房子＿＿不便宜。",
  "opts": [
   "并",
   "也就",
   "很",
   "还是"
  ],
  "ans": 0,
  "exp": "并不 + Adj: phủ định mạnh, phản bác."
 },
 {
  "q": "＿＿一直下大雨，所以我们决定不爬山了。",
  "opts": [
   "由于",
   "虽然",
   "要是",
   "随着"
  ],
  "ans": 0,
  "exp": "由于……，所以…… nêu nguyên nhân."
 },
 {
  "q": "这个小区＿＿是花，还种了不少树。",
  "opts": [
   "到处",
   "周围",
   "位置",
   "附近"
  ],
  "ans": 0,
  "exp": "到处是 + N = đâu đâu cũng là …"
 },
 {
  "q": "客厅里有一＿＿大电视，房间里还有一＿＿空调。",
  "opts": [
   "台，台",
   "张，把",
   "条，台",
   "个，张"
  ],
  "ans": 0,
  "exp": "Máy móc dùng lượng từ 台."
 },
 {
  "q": "她先查看有关信息，＿＿又去看了看房子。",
  "opts": [
   "接着",
   "同时",
   "由于",
   "不过"
  ],
  "ans": 0,
  "exp": "先……，接着…… kể việc theo thứ tự."
 },
 {
  "q": "他每天都把房间＿＿得干干净净的。",
  "opts": [
   "收拾",
   "出租",
   "入住",
   "查找"
  ],
  "ans": 0,
  "exp": "把 + N + 收拾得 + Adj."
 },
 {
  "q": "很多人觉得，有房才有家，有自己的房子会更有安全＿＿。",
  "opts": [
   "感",
   "心",
   "意",
   "情"
  ],
  "ans": 0,
  "exp": "安全感 = cảm giác an toàn; 感 là hậu tố."
 }
];
var speakingData = {
 "intro": "Nhấn nút loa nghe câu hỏi (câu hỏi phần Khởi động, câu hỏi đọc hiểu của 4 bài khoá, kể lại bài khoá và đóng vai), rồi tự ghi âm câu trả lời — cố dùng từ mới và 4 điểm ngữ pháp của bài.",
 "questions": [
  {
   "q_zh": "你觉得租房子好，还是买房子好？为什么？",
   "q_vn": "Bạn thấy thuê nhà tốt hay mua nhà tốt? Vì sao?",
   "hint": "我觉得……好，一方面……，另一方面……。不过……",
   "sample": "我觉得刚工作的时候租房子好。一方面工资还不太高，买房压力太大；另一方面租房子比较自由，换工作的时候也可以换地方住。不过工作几年以后，我也想买一个自己的房子，因为有自己的房子会更有安全感。",
   "sample_vn": "Tôi thấy lúc mới đi làm thì thuê nhà tốt hơn. Một mặt lương chưa cao, mua nhà áp lực quá lớn; mặt khác thuê nhà khá tự do, đổi việc thì cũng có thể đổi chỗ ở. Có điều đi làm vài năm, tôi cũng muốn mua một căn nhà của riêng mình, vì có nhà riêng sẽ an tâm hơn.",
   "note": "Câu hỏi phần Khởi động của sách; ôn 一方面……另一方面…… (Bài 1) + 不过 (điểm 2)."
  },
  {
   "q_zh": "如果租房子，你喜欢租什么样的房子？",
   "q_vn": "Nếu thuê nhà, bạn thích thuê căn nhà như thế nào?",
   "hint": "我喜欢……的房子，房间要……，周围……，价格……",
   "sample": "我喜欢租离学校近、周围安静的房子。房间不用太大，不过一定要亮，最好有一台空调和一张书桌。价格不要太高，每月两千元左右就行。",
   "sample_vn": "Tôi thích thuê căn nhà gần trường, xung quanh yên tĩnh. Phòng không cần quá to, có điều nhất định phải sáng, tốt nhất có một chiếc điều hòa và một cái bàn học. Giá đừng quá cao, khoảng hai nghìn tệ một tháng là được.",
   "note": "Câu hỏi phần Khởi động của sách."
  },
  {
   "q_zh": "房东要出租哪个房间？那个房间怎么样？",
   "q_vn": "Chủ nhà muốn cho thuê phòng nào? Phòng đó thế nào?",
   "hint": "房东要出租……。那个房间……，还……",
   "sample": "房东要出租那个大房间。那个房间真不小，还挺亮，现在已经收拾好了，今天就可以搬进去。",
   "sample_vn": "Chủ nhà muốn cho thuê căn phòng lớn. Phòng đó rộng thật, lại khá sáng, giờ đã dọn dẹp xong, hôm nay có thể dọn vào luôn.",
   "note": "Câu hỏi bài khoá 1."
  },
  {
   "q_zh": "请根据提示复述课文一。",
   "q_vn": "Dựa vào gợi ý, kể lại bài khoá 1.",
   "hint": "李文和白家月到房东家看房子。房东要出租的是……，房租……。房东告诉白家月，……。这个房间……。小区离……不远，离地铁站……。",
   "sample": "李文和白家月到房东家看房子。房东要出租的是那个大房间，房租每月5500元。房东告诉白家月，要出租的房间现在已经收拾好了，想租的话，今天就可以搬进来。这个房间真不小，还挺亮。小区离白家月的学校不远，离地铁站也很近，生活上很方便。白家月比较满意，他们决定再去看看外边的环境。",
   "sample_vn": "Lý Văn và Bạch Gia Nguyệt đến nhà chủ nhà xem phòng. Chủ nhà cho thuê căn phòng lớn, tiền thuê 5500 tệ/tháng… Bạch Gia Nguyệt khá hài lòng, họ quyết định đi xem thêm môi trường bên ngoài.",
   "note": "Bài tập 复述 của sách (trang 14)."
  },
  {
   "q_zh": "李文为什么担心周末白家月休息不好？白家月为什么还是决定租那个房子？",
   "q_vn": "Vì sao Lý Văn lo cuối tuần Bạch Gia Nguyệt nghỉ ngơi không tốt? Vì sao cô ấy vẫn quyết định thuê căn nhà đó?",
   "hint": "因为附近……，恐怕……。不过白家月觉得……，所以……",
   "sample": "因为附近有十几家公司，很多刚毕业的学生都租住在那里，周末他们可能会玩到很晚，恐怕会影响她休息。不过白家月想多认识一些朋友，而且那里房租合适，环境很好，房东也热情，所以她决定租那个房子。",
   "sample_vn": "Vì gần đó có mười mấy công ty, nhiều sinh viên mới tốt nghiệp thuê nhà ở đó, cuối tuần họ có thể chơi đến khuya, e là ảnh hưởng đến việc nghỉ ngơi của cô ấy. Có điều Bạch Gia Nguyệt muốn quen thêm bạn, hơn nữa tiền thuê hợp lý, môi trường tốt, chủ nhà cũng nhiệt tình, nên cô ấy quyết định thuê.",
   "note": "Câu hỏi bài khoá 2; dùng 恐怕 + 不过."
  },
  {
   "q_zh": "白家月租的房间里都有什么？她准备去买什么？",
   "q_vn": "Trong phòng Bạch Gia Nguyệt thuê có những gì? Cô ấy định đi mua gì?",
   "hint": "除了……以外，还有……。她准备再去买……",
   "sample": "她租的房间里，除了一张床以外，还有一台空调、一张书桌和一把椅子。她准备再去买几条毛巾，其他东西还不需要。",
   "sample_vn": "Trong phòng cô ấy thuê, ngoài một chiếc giường ra còn có một chiếc điều hòa, một bàn học và một chiếc ghế. Cô ấy định đi mua thêm mấy chiếc khăn, những thứ khác chưa cần.",
   "note": "Câu hỏi bài khoá 3."
  },
  {
   "q_zh": "请根据提示复述课文三。",
   "q_vn": "Dựa vào gợi ý, kể lại bài khoá 3.",
   "hint": "昨天白家月顺利……，今天李文帮她……。搬进去的时候，房东又……，并……。客厅里有……；厨房里有……，不过……。",
   "sample": "昨天白家月顺利租到了合适的房子，今天李文帮她搬家。搬进去的时候，房东又向白家月介绍了一下房子里的东西，并告诉她这些东西怎么用。白家月看到，客厅里有椅子、沙发，还有一台大电视；厨房里有冰箱和一些做饭用的东西，不过，白家月平常主要在学校食堂吃，基本上不做饭。白家月租的房间里，除了一张床以外，还有一台空调、一张书桌和一把椅子。看完整个房子后，她觉得再去买几条毛巾就行了。",
   "sample_vn": "Hôm qua Bạch Gia Nguyệt đã thuê được căn nhà vừa ý, hôm nay Lý Văn giúp cô ấy chuyển nhà… Xem xong cả căn nhà, cô ấy thấy chỉ cần đi mua thêm mấy chiếc khăn là được.",
   "note": "Bài tập 复述 của sách (trang 17–18)."
  },
  {
   "q_zh": "白家月是怎么租到合适的房子的？",
   "q_vn": "Bạch Gia Nguyệt đã thuê được căn nhà phù hợp như thế nào?",
   "hint": "她先……，查找……，接着……，同时……。她看了好几个房子，才……",
   "sample": "根据李文的建议，她先在租房网站和App上查看有关信息，查找合适的房子，接着又去看了看房子，同时了解房子周围的环境。她看了好几个房子，才找到一个位置、环境和价格都合适的。",
   "sample_vn": "Theo gợi ý của Lý Văn, trước tiên cô ấy xem thông tin trên web và App thuê nhà, tìm nhà phù hợp, tiếp đó đến xem nhà, đồng thời tìm hiểu môi trường xung quanh. Cô ấy xem mấy căn liền mới tìm được căn vị trí, môi trường và giá cả đều phù hợp.",
   "note": "Câu hỏi bài khoá 4; dùng 先……，接着……，同时……"
  },
  {
   "q_zh": "在中国，为什么很多刚工作的年轻人选择租房？为什么不少人工作几年后会买房？",
   "q_vn": "Ở Trung Quốc, vì sao nhiều người trẻ mới đi làm chọn thuê nhà? Vì sao không ít người đi làm vài năm thì mua nhà?",
   "hint": "由于……，所以……。因为大家觉得，有房才……",
   "sample": "由于很多刚工作的年轻人工资还不太高，所以他们一开始不买房，都选择租房。工作几年后，不少人会买房，因为大家一直觉得，有房才有家，有自己的房子会更有安全感。",
   "sample_vn": "Do nhiều người trẻ mới đi làm lương chưa cao, nên lúc đầu họ không mua mà chọn thuê nhà. Đi làm vài năm, không ít người mua nhà, vì mọi người luôn cho rằng có nhà mới có tổ ấm, có nhà riêng sẽ an tâm hơn.",
   "note": "Câu hỏi bài khoá 4; dùng 由于……，所以…… (điểm 4)."
  },
  {
   "q_zh": "角色扮演：一个人扮演租房人，另一个人扮演房东。租房人到房东那儿看房子，询问租房价格、房屋情况及周围环境等，房东一一向租房人介绍。",
   "q_vn": "Đóng vai: một người làm người thuê nhà, một người làm chủ nhà. Người thuê đến chỗ chủ nhà xem nhà, hỏi về giá thuê, tình trạng căn nhà và môi trường xung quanh…; chủ nhà lần lượt giới thiệu từng mục.",
   "hint": "租房人：请问房租……？房间里有……吗？周围……？ 房东：……。由于……，所以……。不过……。要是……，告诉我就是了。",
   "sample": "租房人：您好，我在网上看到了您的出租信息，想来看看房子。房东：请进！这个房子是一室一厅，客厅很大，也很亮。租房人：房间里都有什么？房东：除了一张床以外，还有一台空调、一张书桌和一把椅子。厨房里有冰箱，做饭也很方便。租房人：房租每个月多少钱？房东：每月三千元。由于离地铁站很近，所以价格比旁边的小区高一点儿。租房人：周围的环境怎么样？房东：小区里种了很多树，周围很安静，附近还有超市和饭馆。不过周末楼下有点儿热闹。租房人：嗯，房子我挺满意的，我想再考虑一下。房东：没问题，要是决定租了，告诉我就是了。",
   "sample_vn": "Người thuê: Chào chú, cháu thấy tin cho thuê của chú trên mạng, muốn đến xem nhà. Chủ nhà: Mời vào! Căn này một phòng ngủ một phòng khách, phòng khách rộng, lại sáng… Do gần ga tàu điện nên giá cao hơn khu bên cạnh một chút… Có điều cuối tuần dưới nhà hơi ồn. Người thuê: Vâng, cháu khá hài lòng, cháu muốn cân nhắc thêm. Chủ nhà: Không sao, nếu quyết định thuê thì cứ báo chú là được.",
   "note": "Hoạt động 角色扮演 (đóng vai) của sách, trang 21 — dùng đủ 4 điểm ngữ pháp: 就是了, 不过, 并, 由于."
  }
 ]
};
var translateData = [
 {
  "vi": "Nếu quyết định thuê thì cứ báo tôi là được.",
  "zh": "如果决定租了，告诉我就是了。",
  "py": "Rúguǒ juédìng zū le, gàosu wǒ jiùshì le."
 },
 {
  "vi": "Môi trường khu chung cư này đẹp thật, có điều gần đây có mười mấy công ty.",
  "zh": "这个小区的环境真不错，不过附近有十几家公司。",
  "py": "Zhège xiǎoqū de huánjìng zhēn búcuò, búguò fùjìn yǒu shí jǐ jiā gōngsī."
 },
 {
  "vi": "Chủ nhà giới thiệu đồ đạc trong nhà và chỉ cho tôi cách dùng.",
  "zh": "房东介绍了一下房子里的东西，并告诉我这些东西怎么用。",
  "py": "Fángdōng jièshào le yíxià fángzi lǐ de dōngxi, bìng gàosu wǒ zhèxiē dōngxi zěnme yòng."
 },
 {
  "vi": "Đối với Bạch Gia Nguyệt, lần thuê nhà này chẳng hề dễ dàng.",
  "zh": "对白家月来说，这次租房并不容易。",
  "py": "Duì Bái Jiāyuè láishuō, zhè cì zū fáng bìng bù róngyì."
 },
 {
  "vi": "Do lương còn chưa cao nên nhiều người trẻ chọn thuê nhà.",
  "zh": "由于工资还不太高，所以很多年轻人选择租房。",
  "py": "Yóuyú gōngzī hái bú tài gāo, suǒyǐ hěn duō niánqīngrén xuǎnzé zū fáng."
 },
 {
  "vi": "Có nhà của riêng mình sẽ có cảm giác an toàn hơn.",
  "zh": "有自己的房子会更有安全感。",
  "py": "Yǒu zìjǐ de fángzi huì gèng yǒu ānquán gǎn."
 }
];
var translateDataRev = [
 {
  "vi": "Căn nhà này có hai phòng, phòng lớn kia cho thuê, tiền thuê mỗi tháng 5500 tệ.",
  "zh": "这个房子有两个房间，那个大房间出租，房租每月5500元。",
  "py": "Zhège fángzi yǒu liǎng gè fángjiān, nàge dà fángjiān chūzū, fángzū měi yuè 5 5 0 0 yuán."
 },
 {
  "vi": "Cuối tuần họ có thể chơi đến rất muộn, e là sẽ ảnh hưởng đến việc nghỉ ngơi của cậu.",
  "zh": "周末他们可能会玩到很晚，恐怕会影响你休息。",
  "py": "Zhōumò tāmen kěnéng huì wán dào hěn wǎn, kǒngpà huì yǐngxiǎng nǐ xiūxi."
 },
 {
  "vi": "Ngày thường tôi chủ yếu ăn ở nhà ăn của trường, hầu như không nấu cơm.",
  "zh": "我平常主要在学校食堂吃，基本上不做饭。",
  "py": "Wǒ píngcháng zhǔyào zài xuéxiào shí táng chī, jīběnshàng bú zuòfàn."
 },
 {
  "vi": "Cô ấy xem mấy căn liền mới tìm được một căn vị trí, môi trường và giá cả đều phù hợp.",
  "zh": "她看了好几个房子，才找到一个位置、环境和价格都合适的。",
  "py": "Tā kàn le hǎo jǐ gè fángzi, cái zhǎo dào yí gè wèizhì, huánjìng hé jiàgé dōu héshì de."
 },
 {
  "vi": "Xem xong cả căn nhà, tôi định đi mua thêm mấy chiếc khăn.",
  "zh": "看完整个房子后，我准备再去买几条毛巾。",
  "py": "Kànwán zhěnggè fángzi hòu, wǒ zhǔnbèi zài qù mǎi jǐ tiáo máojīn."
 }
];
var sgkData = [
 {
  "kieu": "kho",
  "de": "选词填空（一）· 综合练习",
  "vn": "Chọn từ thích hợp điền vào chỗ trống (Bài tập tổng hợp, sách trang 20).",
  "dapSgk": true,
  "tu": [
   "收拾",
   "房租",
   "入住",
   "租",
   "查看"
  ],
  "cau": [
   {
    "s": "这个小区环境好，＿＿也不高，一个月才5000元。",
    "dap": [
     "房租"
    ]
   },
   {
    "s": "要＿＿一个好房子也不容易，需要多多比较。",
    "dap": [
     "租"
    ]
   },
   {
    "s": "我女儿每天都把房间＿＿得干干净净的。",
    "dap": [
     "收拾"
    ]
   },
   {
    "s": "这次比赛的通知已经发到大家的邮箱了，请注意＿＿。",
    "dap": [
     "查看"
    ]
   },
   {
    "s": "＿＿后我发现，宾馆房间的灯是坏的。",
    "dap": [
     "入住"
    ]
   }
  ]
 },
 {
  "kieu": "kho",
  "de": "选词填空（二）· 综合练习",
  "vn": "Chọn từ thích hợp điền vào chỗ trống (hội thoại, sách trang 20–21).",
  "dapSgk": true,
  "tu": [
   "周围",
   "建议",
   "查找",
   "客厅",
   "接着"
  ],
  "cau": [
   {
    "s": "A：我最近打算在公司附近租个房子。　B：那你上网＿＿租房信息时，一定要小心，不要只看价格。",
    "dap": [
     "查找"
    ]
   },
   {
    "s": "A：你假期打算做什么？　B：我要先回家住几天，＿＿跟朋友去上海玩。",
    "dap": [
     "接着"
    ]
   },
   {
    "s": "A：听说小区＿＿有很多公司，很多年轻人都租住在附近。　B：是的，所以周末时特别热闹。",
    "dap": [
     "周围"
    ]
   },
   {
    "s": "A：这个房子怎么样？　B：很大，＿＿也大，里边除了沙发以外，还有一台大电视。",
    "dap": [
     "客厅"
    ]
   },
   {
    "s": "A：关于租什么样的房子合适，你还有什么好＿＿？　B：除了离公司近以外，我觉得生活上方便也很重要。",
    "dap": [
     "建议"
    ]
   }
  ]
 },
 {
  "kieu": "kho",
  "de": "选择合适的内容完成短文",
  "vn": "Chọn nội dung thích hợp (A–D) hoàn thành đoạn văn (sách trang 21).",
  "dapSgk": true,
  "tu": [
   "就给房东打了电话",
   "觉得房子很不错",
   "她决定在公司附近租个房子",
   "但是很干净"
  ],
  "cau": [
   {
    "s": "小张最近换了一个比较理想的工作。由于新公司离她现在住的地方比较远，＿＿。她在网上查找到一条出租信息，＿＿。房东说，小张要租的房子不太大，＿＿，房租不高，位置也比较好。接着，房东又建议小张过去看看。小张看了以后，＿＿，就租了下来。",
    "dap": [
     "她决定在公司附近租个房子",
     "就给房东打了电话",
     "但是很干净",
     "觉得房子很不错"
    ]
   }
  ]
 },
 {
  "kieu": "gx",
  "de": "看图，用词语造句",
  "vn": "Nhìn tranh, đặt câu với từ cho sẵn (đáp án của sách chỉ là gợi ý — câu của em đúng ngữ pháp, hợp tranh là đạt).",
  "cau": [
   {
    "anh": "/images/hsk4v3/bai-2/bt-1.webp",
    "s": "",
    "tu": "房东",
    "dap": "房东向他们介绍了一下房子里的东西。",
    "giai": "向 + ai + 介绍 (giới thiệu với ai); V + 一下 làm nhẹ động tác — giống câu trong bài khoá 3."
   },
   {
    "anh": "/images/hsk4v3/bai-2/bt-2.webp",
    "s": "",
    "tu": "毛巾",
    "dap": "商店里有很多毛巾。",
    "giai": "Câu tồn hiện: nơi chốn + 有 + N; lượng từ của 毛巾 là 条."
   },
   {
    "anh": "/images/hsk4v3/bai-2/bt-3.webp",
    "s": "",
    "tu": "理想",
    "dap": "我理想的大学是北京大学。",
    "giai": "理想 làm định ngữ: 理想的 + N (nơi / thứ mơ ước)."
   }
  ]
 }
];
var writingData = {
 "kieu": "sgk",
 "soChu": 120,
 "tieuDe": "写作 — viết theo đề của sách (ít nhất 120 chữ)",
 "nhanDe": "写作",
 "huongDan": {
  "tieuDe": "Viết tin tìm thuê nhà (写作)",
  "gioiThieu": "Đề 写作 của sách HSK 4 (3.0) yêu cầu viết một đoạn văn ngắn (ít nhất 120 chữ) dựa trên nội dung đã học — lần này là một “tin tìm thuê nhà” (租房需求信息) đăng lên mạng, giống phần 书写 của đề thi HSK 4 mới.",
  "buoc": [
   "Đọc kỹ đề: em là sinh viên MỚI TỐT NGHIỆP, viết tin đăng để CHỦ NHÀ đọc — nói rõ mình là ai và cần căn nhà thế nào.",
   "Lập dàn ý theo các câu hỏi gợi ý: mỗi câu hỏi là một ý, viết 1–2 câu cho mỗi ý (vì sao thuê, vị trí, phòng ốc – đồ đạc, môi trường xung quanh, giá thuê, cách liên hệ).",
   "Dùng từ mới và 4 điểm ngữ pháp của bài (khung “Từ, cấu trúc nên dùng”): 由于……所以……, ……不过……, 并, ……就是了.",
   "Nối các ý bằng từ nối: 首先 / 接着 / 同时 / 除了……还…… / 要是……就……",
   "Câu mở giới thiệu bản thân, câu kết là cách liên hệ + lời cảm ơn; tự soát số chữ (≥ 120) và lỗi chữ Hán trước khi nộp."
  ]
 },
 "de": "假如你是一个刚毕业的大学生，想要租房子。请你写一段租房需求信息，不少于120字。",
 "prompt": "Giả sử em là một sinh viên vừa tốt nghiệp đại học, muốn thuê nhà. Hãy viết một đoạn tin đăng về nhu cầu thuê nhà, không ít hơn 120 chữ.",
 "dan": [
  {
   "hoi": "你是谁？为什么要租房子？",
   "goiY": "我今年刚毕业，在……工作。由于公司离……比较远，所以……"
  },
  {
   "hoi": "你想租在哪儿？位置有什么要求？",
   "goiY": "最好在公司附近 / 离地铁站近，生活上方便"
  },
  {
   "hoi": "房子要多大？房间里要有什么？",
   "goiY": "一室一厅就行，房间要亮，有一张床、一台空调……"
  },
  {
   "hoi": "周围环境和房租有什么要求？",
   "goiY": "周围要安静……，不过……；房租每月不超过……元"
  },
  {
   "hoi": "怎么联系你？",
   "goiY": "要是你有合适的房子，给我打电话 / 发信息就是了"
  }
 ],
 "tuNen": [
  "租",
  "房租",
  "房东",
  "出租",
  "客厅",
  "厨房",
  "台",
  "周围",
  "位置",
  "价格",
  "理想",
  "信息",
  "收拾",
  "入住"
 ],
 "cauTruc": [
  {
   "ten": "由于……，所以……",
   "nhan": "由于",
   "vd": "由于公司离我现在住的地方比较远，所以我想在公司附近租一个房子。",
   "khi": "Câu MỞ: nêu lý do thuê nhà."
  },
  {
   "ten": "……，不过……",
   "nhan": "不过",
   "vd": "房间不用太大，不过一定要亮。",
   "khi": "Nói yêu cầu: điều không cần — điều nhất định cần."
  },
  {
   "ten": "……，并……",
   "nhan": "并",
   "vd": "我会按时交房租，并把房子收拾干净。",
   "khi": "Cam kết của người thuê (hai việc nối tiếp)."
  },
  {
   "ten": "除了……以外，还……",
   "nhan": "除了",
   "vd": "房间里除了一张床以外，最好还有一台空调和一张书桌。",
   "khi": "Liệt kê đồ đạc cần có."
  },
  {
   "ten": "要是……，……就是了",
   "nhan": "就是了",
   "vd": "要是你有合适的房子出租，给我打电话就是了。",
   "khi": "Câu KẾT: cách liên hệ."
  }
 ],
 "checklist": [
  "Đủ ít nhất 120 chữ Hán chưa?",
  "Đã nói đủ các ý: em là ai, vì sao thuê, vị trí, phòng ốc – đồ đạc, môi trường xung quanh, giá thuê, cách liên hệ chưa?",
  "Đã dùng ít nhất 3 trong 4 điểm ngữ pháp của bài (就是了、不过、并、由于) chưa?",
  "Đã dùng ít nhất 6 từ mới của bài chưa?",
  "Tin đăng có câu mở (giới thiệu bản thân) và câu kết (liên hệ, cảm ơn), người đọc là chủ nhà chưa?"
 ],
 "model": {
  "zh": "大家好！我今年刚从大学毕业，在北京的一家公司工作。由于公司离我现在住的地方比较远，所以我想在公司附近租一个房子。我理想的房子是一室一厅，客厅不用太大，不过房间一定要亮，里边除了一张床以外，最好还有一台空调和一张书桌。我平常工作比较忙，基本上不做饭，所以厨房小一些也没关系。我希望小区周围的环境比较安静，离地铁站近一些，生活上方便。刚工作的时候工资还不太高，房租最好每月不超过三千元。我会按时交房租，并把房子收拾干净。要是你有合适的房子出租，给我打电话或者发信息就是了，我随时都可以去看房。谢谢！",
  "py": "Dàjiā hǎo! Wǒ jīnnián gāng cóng dàxué bìyè, zài Běijīng de yì jiā gōngsī gōngzuò. Yóuyú gōngsī lí wǒ xiànzài zhù de dìfang bǐjiào yuǎn, suǒyǐ wǒ xiǎng zài gōngsī fùjìn zū yí gè fángzi. Wǒ lǐxiǎng de fángzi shì yí shì yì tīng, kètīng búyòng tài dà, búguò fángjiān yídìng yào liàng, lǐbian chúle yì zhāng chuáng yǐwài, zuìhǎo hái yǒu yì tái kōng tiáohé yì zhāng shū zhuō. Wǒ píngcháng gōngzuò bǐjiào máng, jīběnshàng bú zuòfàn, suǒyǐ chúfáng xiǎo yìxiē yě méiguānxì. Wǒ xīwàng xiǎoqū zhōuwéi de huánjìng bǐjiào ānjìng, lí dìtiě zhàn jìn yìxiē, shēnghuó shàng fāngbiàn. Gāng gōngzuò de shíhou gōngzī hái bú tài gāo, fángzū zuìhǎo měi yuè bù chāoguò sān qiān yuán. Wǒ huì ànshí jiāo fángzū, bìng bǎ fángzi shōushi gānjìng. Yàoshi nǐ yǒu héshì de fángzi chūzū, gěi wǒ dǎdiànhuà huòzhě fā xìnxī jiùshì le, wǒ suíshí dōu kěyǐ qù kàn fáng. Xièxiè!"
 }
};
