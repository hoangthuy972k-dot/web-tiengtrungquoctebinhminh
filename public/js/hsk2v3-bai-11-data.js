// HSK 2 (3.0 Mới) · Bài 11 · 我最喜欢吃中国菜
// Nguồn: Giáo trình New HSK 2 (bản Trung - Việt), bài 11, trang 093-102.

var vocabData = [
  {
    "n": 1,
    "zh": "头",
    "py": "tóu",
    "pos": "Danh từ",
    "vn": "đầu",
    "hv": "đầu",
    "em": "🙆",
    "img": "/images/hsk2v3-bai-11/tou.jpg",
    "lesson": 1,
    "ex_zh": "我头疼，不太舒服。",
    "ex_py": "Wǒ tóu téng, bú tài shūfu.",
    "ex_vn": "Em bị đau đầu, không được khoẻ lắm.",
    "exList": [
      {
        "zh": "我头疼，不太舒服。",
        "py": "Wǒ tóu téng, bú tài shūfu.",
        "vn": "Em bị đau đầu, không được khoẻ lắm."
      },
      {
        "zh": "现在头没那么疼了。",
        "py": "Xiànzài tóu méi nàme téng le.",
        "vn": "Bây giờ đầu em không còn đau như vừa nãy nữa."
      }
    ],
    "hanzi": [
      {
        "c": "头",
        "p": "tóu",
        "type": "象形字 · Chữ tượng hình",
        "st": 5,
        "ord": "丶 → 丶 → 大",
        "rad": "大 (đại)",
        "mean": "đầu",
        "tip": "头疼 là câu có cụm chủ vị làm vị ngữ (ôn bài 10): 我头疼。",
        "cf": "",
        "w": "头 / 头疼 / 一头"
      }
    ],
    "colloFull": [
      {
        "zh": "头疼",
        "py": "tóu téng",
        "vn": "đau đầu"
      },
      {
        "zh": "我的头",
        "py": "wǒ de tóu",
        "vn": "đầu tôi"
      },
      {
        "zh": "经常头疼",
        "py": "jīngcháng tóu téng",
        "vn": "hay đau đầu"
      },
      {
        "zh": "头不舒服",
        "py": "tóu bù shūfu",
        "vn": "đầu khó chịu"
      }
    ],
    "patterns": [
      {
        "s": "头 + 疼",
        "m": "Đau đầu — nói về chỗ nào đau thì đặt chỗ đó trước"
      },
      {
        "s": "头 là chữ tượng hình — hai chấm trên là tóc"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Hôm nay tôi đau đầu, không đi học được.",
        "answer": "今天我头疼，不能上课。",
        "answerPy": "Jīntiān wǒ tóuténg, bù néng shàngkè.",
        "note": "Chỗ nào đau thì đặt chỗ đó trước.",
        "pair": "不能 + V"
      },
      {
        "promptLang": "vi",
        "prompt": "Tuy đầu tôi hơi khó chịu nhưng không nặng lắm.",
        "answer": "虽然我的头有点儿不舒服，但是不太疼。",
        "answerPy": "Suīrán wǒ de tóu yǒudiǎnr bù shūfu, dànshì bú tài téng.",
        "note": "有点儿 mang ý không thoải mái.",
        "pair": "虽然……但是……"
      }
    ]
  },
  {
    "n": 2,
    "zh": "疼",
    "py": "téng",
    "pos": "Tính từ",
    "vn": "đau, nhức",
    "hv": "đông",
    "em": "🤕",
    "img": "/images/hsk2v3-bai-11/teng.jpg",
    "lesson": 1,
    "ex_zh": "现在不能动，一动就疼。",
    "ex_py": "Xiànzài bù néng dòng, yí dòng jiù téng.",
    "ex_vn": "Bây giờ không cử động được, cứ động là đau.",
    "exList": [
      {
        "zh": "现在不能动，一动就疼。",
        "py": "Xiànzài bù néng dòng, yí dòng jiù téng.",
        "vn": "Bây giờ không cử động được, cứ động là đau."
      },
      {
        "zh": "不那么疼了。医生开了一些药。",
        "py": "Bú nàme téng le. Yīshēng kāile yìxiē yào.",
        "vn": "Không đau như trước nữa rồi. Bác sĩ đã kê một ít thuốc."
      }
    ],
    "hanzi": [
      {
        "c": "疼",
        "p": "téng",
        "type": "形声字 · Chữ hình thanh",
        "st": 10,
        "ord": "疒 → 冬",
        "rad": "疒 (nạch – bệnh)",
        "mean": "đau",
        "tip": "Bộ 疒 gợi bệnh tật: 疼、病、瘦.",
        "cf": "",
        "w": "疼 / 头疼 / 不疼了"
      }
    ],
    "colloFull": [
      {
        "zh": "头疼",
        "py": "tóu téng",
        "vn": "đau đầu"
      },
      {
        "zh": "很疼",
        "py": "hěn téng",
        "vn": "rất đau"
      },
      {
        "zh": "不疼",
        "py": "bù téng",
        "vn": "không đau"
      },
      {
        "zh": "疼得很",
        "py": "téng de hěn",
        "vn": "đau lắm"
      }
    ],
    "patterns": [
      {
        "s": "bộ phận + 疼",
        "m": "Chỗ nào đau: 头疼 · 手疼"
      },
      {
        "s": "疼 có bộ 疒 (bệnh) bao ngoài — chữ chỉ bệnh đều có bộ này"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Chỗ nào của bạn đau?",
        "answer": "你哪里疼？",
        "answerPy": "Nǐ nǎli téng?",
        "note": "bộ phận + 疼 — chỗ nào đau.",
        "pair": "哪里……？"
      },
      {
        "promptLang": "vi",
        "prompt": "Vì hôm qua chơi bóng rổ nên hôm nay tay tôi rất đau.",
        "answer": "因为昨天打篮球，所以今天我的手很疼。",
        "answerPy": "Yīnwèi zuótiān dǎ lánqiú, suǒyǐ jīntiān wǒ de shǒu hěn téng.",
        "note": "疼 có bộ 疒 (bệnh) bao ngoài.",
        "pair": "因为……所以……"
      }
    ]
  },
  {
    "n": 3,
    "zh": "经常",
    "py": "jīngcháng",
    "pos": "Phó từ",
    "vn": "thường xuyên",
    "hv": "kinh thường",
    "em": "🔁",
    "lesson": 1,
    "ex_zh": "你这几天经常头疼，去医院看看吧。",
    "ex_py": "Nǐ zhè jǐ tiān jīngcháng tóu téng, qù yīyuàn kànkan ba.",
    "ex_vn": "Mấy ngày nay em thường xuyên đau đầu, hay là đi bệnh viện khám thử xem.",
    "exList": [
      {
        "zh": "你这几天经常头疼，去医院看看吧。",
        "py": "Nǐ zhè jǐ tiān jīngcháng tóu téng, qù yīyuàn kànkan ba.",
        "vn": "Mấy ngày nay em thường xuyên đau đầu, hay là đi bệnh viện khám thử xem."
      },
      {
        "zh": "我经常跟朋友去踢足球。",
        "py": "Wǒ jīngcháng gēn péngyou qù tī zúqiú.",
        "vn": "Tôi thường xuyên đi đá bóng cùng bạn bè."
      }
    ],
    "hanzi": [
      {
        "c": "经",
        "p": "jīng",
        "type": "左右结构 · Trái-phải",
        "st": 8,
        "ord": "纟(mịch) trái → 巛+ 工 phải",
        "rad": "纟(mịch – tơ, sợi)",
        "mean": "trải qua, kinh",
        "tip": "纟(sợi tơ) + phần chỉ âm — vốn là sợi dọc trên khung cửi, chạy suốt từ đầu đến cuối → TRẢI QUA (已经 = đã), THƯỜNG XUYÊN (经常).",
        "cf": "径 (jìng – \"con đường\", bộ 彳)",
        "w": "经常 / 已经 / 经理"
      },
      {
        "c": "常",
        "p": "cháng",
        "type": "形声字 · Chữ hình thanh",
        "st": 11,
        "ord": "⺌ → 冖 → 口 → 巾",
        "rad": "巾 (cân – khăn)",
        "mean": "thường, luôn",
        "tip": "Cùng chữ 常 trong 非常 (rất, phi thường).",
        "cf": "非常 (fēicháng)",
        "w": "经常 / 常常 / 非常"
      }
    ],
    "colloFull": [
      {
        "zh": "经常去",
        "py": "jīngcháng qù",
        "vn": "thường đi"
      },
      {
        "zh": "经常运动",
        "py": "jīngcháng yùndòng",
        "vn": "thường tập thể thao"
      },
      {
        "zh": "经常头疼",
        "py": "jīngcháng tóu téng",
        "vn": "hay đau đầu"
      },
      {
        "zh": "不经常",
        "py": "bù jīngcháng",
        "vn": "không thường xuyên"
      }
    ],
    "patterns": [
      {
        "s": "Sub + 经常 + động từ",
        "m": "Ai đó thường xuyên làm gì"
      },
      {
        "s": "经常 đứng SAU chủ ngữ, TRƯỚC động từ"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Ông tôi thường xuyên tập thể thao.",
        "answer": "我爷爷经常运动。",
        "answerPy": "Wǒ yéye jīngcháng yùndòng.",
        "note": "经常 đứng sau chủ ngữ, trước động từ.",
        "pair": "经常 + V"
      },
      {
        "promptLang": "vi",
        "prompt": "Dạo này tôi hay đau đầu, muốn đi bệnh viện khám.",
        "answer": "我经常头疼，想去医院看病。",
        "answerPy": "Wǒ jīngcháng tóuténg, xiǎng qù yīyuàn kànbìng.",
        "note": "去医院看病 — đi bệnh viện khám.",
        "pair": "想 + V"
      }
    ]
  },
  {
    "n": 4,
    "zh": "动",
    "py": "dòng",
    "pos": "Động từ",
    "vn": "cử động, di chuyển",
    "hv": "động",
    "em": "🤸",
    "img": "/images/hsk2v3-bai-11/dong.jpg",
    "lesson": 1,
    "ex_zh": "现在不能动，一动就疼。",
    "ex_py": "Xiànzài bù néng dòng, yí dòng jiù téng.",
    "ex_vn": "Bây giờ không cử động được, cứ động là đau.",
    "exList": [
      {
        "zh": "现在不能动，一动就疼。",
        "py": "Xiànzài bù néng dòng, yí dòng jiù téng.",
        "vn": "Bây giờ không cử động được, cứ động là đau."
      },
      {
        "zh": "我一有时间就去运动。",
        "py": "Wǒ yì yǒu shíjiān jiù qù yùndòng.",
        "vn": "Hễ có thời gian là tôi lại đi tập thể thao."
      }
    ],
    "hanzi": [
      {
        "c": "动",
        "p": "dòng",
        "type": "形声字 · Chữ hình thanh",
        "st": 6,
        "ord": "云 → 力",
        "rad": "力 (lực – sức)",
        "mean": "động, cử động",
        "tip": "Ôn 一……就…… (bài 7): 一动就疼。",
        "cf": "",
        "w": "动 / 运动 / 不能动"
      }
    ],
    "colloFull": [
      {
        "zh": "动一动",
        "py": "dòng yí dòng",
        "vn": "cử động một chút"
      },
      {
        "zh": "别动",
        "py": "bié dòng",
        "vn": "đừng cử động"
      },
      {
        "zh": "多动",
        "py": "duō dòng",
        "vn": "vận động nhiều"
      },
      {
        "zh": "运动",
        "py": "yùndòng",
        "vn": "vận động"
      }
    ],
    "patterns": [
      {
        "s": "动 + 一 + 动",
        "m": "Cử động một chút — dạng lặp động từ"
      },
      {
        "s": "动 nằm trong 运动 — cùng một chữ"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Bạn đừng cử động, bác sĩ đang khám cho bạn.",
        "answer": "你别动，医生正在给你看病。",
        "answerPy": "Nǐ bié dòng, yīshēng zhèngzài gěi nǐ kànbìng.",
        "note": "别动 — đừng cử động.",
        "pair": "别 + V"
      },
      {
        "promptLang": "vi",
        "prompt": "Bác sĩ nói tôi phải vận động nhiều hơn.",
        "answer": "医生说我要多动。",
        "answerPy": "Yīshēng shuō wǒ yào duō dòng.",
        "note": "动 nằm trong 运动.",
        "pair": "要 + V"
      }
    ]
  },
  {
    "n": 5,
    "zh": "着",
    "py": "zhe",
    "pos": "Trợ từ",
    "vn": "trợ từ chỉ sự duy trì của động tác/trạng thái",
    "hv": "trứ",
    "em": "⏸️",
    "lesson": 1,
    "ex_zh": "那你在这儿坐着，我去开车。",
    "ex_py": "Nà nǐ zài zhèr zuòzhe, wǒ qù kāichē.",
    "ex_vn": "Vậy em cứ ngồi ở đây nhé, cô đi lấy xe.",
    "exList": [
      {
        "zh": "那你在这儿坐着，我去开车。",
        "py": "Nà nǐ zài zhèr zuòzhe, wǒ qù kāichē.",
        "vn": "Vậy em cứ ngồi ở đây nhé, cô đi lấy xe."
      },
      {
        "zh": "教室的门开着。",
        "py": "Jiàoshì de mén kāizhe.",
        "vn": "Cửa lớp học đang mở."
      }
    ],
    "hanzi": [
      {
        "c": "着",
        "p": "zhe",
        "type": "形声字 · Chữ hình thanh",
        "st": 11,
        "ord": "⺷ → 目",
        "rad": "目 (mục – mắt)",
        "mean": "trợ từ động thái",
        "tip": "了 (hoàn thành) · 过 (từng) · 着 (đang duy trì).",
        "cf": "了 (le) · 过 (guo)",
        "w": "坐着 / 开着 / 下着雪"
      }
    ],
    "colloFull": [
      {
        "zh": "坐着",
        "py": "zuò zhe",
        "vn": "đang ngồi"
      },
      {
        "zh": "笑着说",
        "py": "xiào zhe shuō",
        "vn": "vừa cười vừa nói"
      },
      {
        "zh": "拿着",
        "py": "ná zhe",
        "vn": "đang cầm"
      },
      {
        "zh": "站着",
        "py": "zhàn zhe",
        "vn": "đang đứng"
      }
    ],
    "patterns": [
      {
        "s": "động từ + 着",
        "m": "Trạng thái đang duy trì: 他坐着看书"
      },
      {
        "s": "V1 + 着 + V2",
        "m": "Vừa làm A vừa làm B: 笑着说"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Ông tôi đang ngồi đọc sách.",
        "answer": "我爷爷坐着看书。",
        "answerPy": "Wǒ yéye zuòzhe kàn shū.",
        "note": "động từ + 着 — trạng thái đang duy trì.",
        "pair": "V + 着 + V"
      },
      {
        "promptLang": "vi",
        "prompt": "Thầy vừa cười vừa nói: các em làm khá tốt!",
        "answer": "老师笑着说：你们做得不错！",
        "answerPy": "Lǎoshī xiàozhe shuō: nǐmen zuò de búcuò!",
        "note": "V1 + 着 + V2 — vừa làm A vừa làm B.",
        "pair": "V + 着 + V"
      }
    ]
  },
  {
    "n": 6,
    "zh": "路上",
    "py": "lùshang",
    "pos": "Danh từ",
    "vn": "trên đường",
    "hv": "lộ thượng",
    "em": "🛣️",
    "img": "/images/hsk2v3-bai-11/lushang.jpg",
    "lesson": 2,
    "ex_zh": "现在路上车多，还下着雪，我开慢一点儿。",
    "ex_py": "Xiànzài lùshang chē duō, hái xiàzhe xuě, wǒ kāi màn yìdiǎnr.",
    "ex_vn": "Bây giờ rất nhiều xe cộ trên đường, lại còn đang có tuyết rơi nên cô lái chậm một chút.",
    "exList": [
      {
        "zh": "现在路上车多，还下着雪，我开慢一点儿。",
        "py": "Xiànzài lùshang chē duō, hái xiàzhe xuě, wǒ kāi màn yìdiǎnr.",
        "vn": "Bây giờ rất nhiều xe cộ trên đường, lại còn đang có tuyết rơi nên cô lái chậm một chút."
      },
      {
        "zh": "路上要小心。",
        "py": "Lùshang yào xiǎoxīn.",
        "vn": "Trên đường phải cẩn thận nhé."
      }
    ],
    "hanzi": [
      {
        "c": "路",
        "p": "lù",
        "type": "形声字 · Chữ hình thanh",
        "st": 13,
        "ord": "⻊ → 各",
        "rad": "⻊ (túc – chân)",
        "mean": "đường",
        "tip": "Ôn 走路 (bài 9) — đi bộ.",
        "cf": "",
        "w": "路上 / 走路 / 路口"
      },
      {
        "c": "上",
        "p": "shàng",
        "type": "独体字 · Chữ đơn",
        "st": 3,
        "ord": "丨(sổ) → 一(ngang ngắn) → 一(ngang dài)",
        "rad": "一 (nhất – nét ngang)",
        "mean": "lên, trên",
        "tip": "Một vật được đặt phía TRÊN một đường ngang (mặt đất) → chỉ vị trí Ở TRÊN, hướng đi LÊN.",
        "cf": "下 (xià – \"xuống\", trái nghĩa, dễ nhầm vì hình đối xứng)",
        "w": "路上 / 上车 / 上学"
      }
    ],
    "colloFull": [
      {
        "zh": "在路上",
        "py": "zài lùshang",
        "vn": "trên đường"
      },
      {
        "zh": "路上的人",
        "py": "lùshang de rén",
        "vn": "người trên đường"
      },
      {
        "zh": "回家的路上",
        "py": "huí jiā de lùshang",
        "vn": "trên đường về nhà"
      },
      {
        "zh": "路上小心",
        "py": "lùshang xiǎoxīn",
        "vn": "đi đường cẩn thận"
      }
    ],
    "patterns": [
      {
        "s": "在 + 路上",
        "m": "Trên đường — lúc đang đi"
      },
      {
        "s": "路 + 上",
        "m": "Trên (上) đường (路) — 上 đứng sau danh từ"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Trên đường về nhà tôi mua một ít thuốc.",
        "answer": "回家的路上我买了一些药。",
        "answerPy": "Huí jiā de lùshang wǒ mǎile yìxiē yào.",
        "note": "在路上 — trên đường, lúc đang đi.",
        "pair": "……的路上"
      },
      {
        "promptLang": "vi",
        "prompt": "Trời mưa rồi, bạn đi đường cẩn thận nhé.",
        "answer": "下雨了，你路上小心。",
        "answerPy": "Xià yǔ le, nǐ lùshang xiǎoxīn.",
        "note": "路上小心 — câu dặn dò rất hay dùng.",
        "pair": "……了"
      }
    ]
  },
  {
    "n": 7,
    "zh": "慢",
    "py": "màn",
    "pos": "Tính từ",
    "vn": "chậm",
    "hv": "mạn",
    "em": "🐢",
    "img": "/images/hsk2v3-bai-11/man.jpg",
    "lesson": 2,
    "ex_zh": "我开慢一点儿。",
    "ex_py": "Wǒ kāi màn yìdiǎnr.",
    "ex_vn": "Cô lái chậm một chút.",
    "exList": [
      {
        "zh": "我开慢一点儿。",
        "py": "Wǒ kāi màn yìdiǎnr.",
        "vn": "Cô lái chậm một chút."
      },
      {
        "zh": "他跑得比我慢。",
        "py": "Tā pǎo de bǐ wǒ màn.",
        "vn": "Cậu ấy chạy chậm hơn tôi."
      }
    ],
    "hanzi": [
      {
        "c": "慢",
        "p": "màn",
        "type": "形声字 · Chữ hình thanh",
        "st": 14,
        "ord": "忄 → 曼",
        "rad": "忄 (tâm)",
        "mean": "chậm",
        "tip": "Trái nghĩa với 快 (kuài); 慢一点儿 = chậm một chút.",
        "cf": "快 (kuài – nhanh)",
        "w": "慢 / 慢一点儿 / 很慢"
      }
    ],
    "colloFull": [
      {
        "zh": "很慢",
        "py": "hěn màn",
        "vn": "rất chậm"
      },
      {
        "zh": "慢一点儿",
        "py": "màn yìdiǎnr",
        "vn": "chậm hơn chút"
      },
      {
        "zh": "走得很慢",
        "py": "zǒu de hěn màn",
        "vn": "đi rất chậm"
      },
      {
        "zh": "慢慢地吃",
        "py": "mànmàn de chī",
        "vn": "ăn từ từ"
      }
    ],
    "patterns": [
      {
        "s": "động từ + 得 + 慢",
        "m": "Làm gì đó chậm: 他走得很慢"
      },
      {
        "s": "慢 ↔ 快",
        "m": "Chậm ↔ nhanh"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Thầy nói rất chậm, tôi đều nghe hiểu.",
        "answer": "老师说得很慢，我都听懂了。",
        "answerPy": "Lǎoshī shuō de hěn màn, wǒ dōu tīngdǒng le.",
        "note": "慢 ↔ 快 — chậm và nhanh.",
        "pair": "V + 得 + Adj"
      },
      {
        "promptLang": "vi",
        "prompt": "Bạn ăn từ từ thôi, đừng nhanh quá.",
        "answer": "你慢慢地吃，别太快。",
        "answerPy": "Nǐ mànmàn de chī, bié tài kuài.",
        "note": "tính từ + 地 + động từ.",
        "pair": "Adj + 地 + V"
      }
    ]
  },
  {
    "n": 8,
    "zh": "进",
    "py": "jìn",
    "pos": "Động từ",
    "vn": "vào",
    "hv": "tiến",
    "em": "🚶‍♂️",
    "img": "/images/hsk2v3-bai-11/jin.jpg",
    "lesson": 3,
    "ex_zh": "李文，快请进！",
    "ex_py": "Lǐ Wén, kuài qǐng jìn!",
    "ex_vn": "Lý Văn, mau vào đi!",
    "exList": [
      {
        "zh": "李文，快请进！",
        "py": "Lǐ Wén, kuài qǐng jìn!",
        "vn": "Lý Văn, mau vào đi!"
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
        "mean": "vào, tiến vào",
        "tip": "Ôn bổ ngữ xu hướng (bài 5): 进来 / 进去.",
        "cf": "出 (chū – ra)",
        "w": "进 / 请进 / 进来"
      }
    ],
    "colloFull": [
      {
        "zh": "进来",
        "py": "jìnlái",
        "vn": "vào đây"
      },
      {
        "zh": "进去",
        "py": "jìnqù",
        "vn": "vào đó"
      },
      {
        "zh": "进教室",
        "py": "jìn jiàoshì",
        "vn": "vào phòng học"
      },
      {
        "zh": "请进",
        "py": "qǐng jìn",
        "vn": "mời vào"
      }
    ],
    "patterns": [
      {
        "s": "请 + 进",
        "m": "Mời vào — câu lịch sự đón khách"
      },
      {
        "s": "进来 (gần mình) ↔ 进去 (xa mình)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Mời vào, mời ngồi ạ.",
        "answer": "请进，请坐。",
        "answerPy": "Qǐng jìn, qǐng zuò.",
        "note": "Câu lịch sự đón khách.",
        "pair": "请 + V"
      },
      {
        "promptLang": "vi",
        "prompt": "Thầy đang trong tiết học, chúng ta đừng vào.",
        "answer": "老师正在上课，我们别进去。",
        "answerPy": "Lǎoshī zhèngzài shàngkè, wǒmen bié jìnqu.",
        "note": "进来 (gần mình) ↔ 进去 (xa mình).",
        "pair": "别 + V"
      }
    ]
  },
  {
    "n": 9,
    "zh": "药",
    "py": "yào",
    "pos": "Danh từ",
    "vn": "thuốc",
    "hv": "dược",
    "em": "💊",
    "img": "/images/hsk2v3-bai-11/yao.jpg",
    "lesson": 3,
    "ex_zh": "医生开了一些药，吃完就好多了。",
    "ex_py": "Yīshēng kāile yìxiē yào, chīwán jiù hǎoduō le.",
    "ex_vn": "Bác sĩ đã kê một ít thuốc, uống xong thấy khoẻ hơn nhiều rồi.",
    "exList": [
      {
        "zh": "医生开了一些药，吃完就好多了。",
        "py": "Yīshēng kāile yìxiē yào, chīwán jiù hǎoduō le.",
        "vn": "Bác sĩ đã kê một ít thuốc, uống xong thấy khoẻ hơn nhiều rồi."
      },
      {
        "zh": "从药店买了点儿药，没去医院。",
        "py": "Cóng yàodiàn mǎile diǎnr yào, méi qù yīyuàn.",
        "vn": "Tôi mua một ít thuốc ở hiệu thuốc, không đi bệnh viện."
      }
    ],
    "hanzi": [
      {
        "c": "药",
        "p": "yào",
        "type": "形声字 · Chữ hình thanh",
        "st": 9,
        "ord": "艹 → 约",
        "rad": "艹 (thảo – cỏ)",
        "mean": "thuốc",
        "tip": "Ở đây 开 nghĩa là \"kê (đơn thuốc)\": 开药.",
        "cf": "",
        "w": "药 / 吃药 / 药店"
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
        "zh": "药店的药",
        "py": "yàodiàn de yào",
        "vn": "thuốc của hiệu thuốc"
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
        "prompt": "Uống thuốc xong rồi bạn nghỉ một lát đi.",
        "answer": "吃完药你休息一会儿吧。",
        "answerPy": "Chīwán yào nǐ xiūxi yíhuìr ba.",
        "note": "Tiếng Trung nói 吃药, không nói 喝药.",
        "pair": "V + 完"
      },
      {
        "promptLang": "vi",
        "prompt": "Tôi muốn đi hiệu thuốc mua một ít thuốc.",
        "answer": "我想去药店买一些药。",
        "answerPy": "Wǒ xiǎng qù yàodiàn mǎi yìxiē yào.",
        "note": "一些药 — một ít thuốc.",
        "pair": "想 + V"
      }
    ]
  },
  {
    "n": 10,
    "zh": "身体",
    "py": "shēntǐ",
    "pos": "Danh từ",
    "vn": "cơ thể, sức khoẻ",
    "hv": "thân thể",
    "em": "💪",
    "img": "/images/hsk2v3-bai-11/shenti.jpg",
    "lesson": 3,
    "ex_zh": "身体不舒服时更要好好吃饭。",
    "ex_py": "Shēntǐ bù shūfu shí gèng yào hǎohāo chīfàn.",
    "ex_vn": "Khi cơ thể không khoẻ thì càng phải ăn uống đầy đủ.",
    "exList": [
      {
        "zh": "身体不舒服时更要好好吃饭。",
        "py": "Shēntǐ bù shūfu shí gèng yào hǎohāo chīfàn.",
        "vn": "Khi cơ thể không khoẻ thì càng phải ăn uống đầy đủ."
      },
      {
        "zh": "我一有时间就去运动，身体比以前好多了。",
        "py": "Wǒ yì yǒu shíjiān jiù qù yùndòng, shēntǐ bǐ yǐqián hǎoduō le.",
        "vn": "Hễ có thời gian là tôi đi tập, sức khoẻ tốt hơn trước nhiều."
      }
    ],
    "hanzi": [
      {
        "c": "身",
        "p": "shēn",
        "type": "象形字 · Chữ tượng hình",
        "st": 7,
        "ord": "丿 → 冂 → 三 → 丿",
        "rad": "身 (thân)",
        "mean": "thân thể",
        "tip": "Ôn 舒服 (bài 6): 身体不舒服 = người không khoẻ.",
        "cf": "",
        "w": "身体 / 身体好 / 身上"
      },
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
      }
    ],
    "colloFull": [
      {
        "zh": "好身体",
        "py": "hǎo shēntǐ",
        "vn": "sức khoẻ tốt"
      },
      {
        "zh": "身体不舒服",
        "py": "shēntǐ bù shūfu",
        "vn": "người khó chịu"
      },
      {
        "zh": "我的身体",
        "py": "wǒ de shēntǐ",
        "vn": "sức khoẻ của tôi"
      },
      {
        "zh": "爷爷的身体",
        "py": "yéye de shēntǐ",
        "vn": "sức khoẻ của ông"
      }
    ],
    "patterns": [
      {
        "s": "ai + 身体 + 怎么样？",
        "m": "Hỏi thăm sức khoẻ: 你爸爸身体怎么样？"
      },
      {
        "s": "身 + 体",
        "m": "Thân (身) thể (体) — hai chữ cùng nghĩa ghép lại"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Sức khoẻ ông bạn thế nào?",
        "answer": "你爷爷身体怎么样？",
        "answerPy": "Nǐ yéye shēntǐ zěnmeyàng?",
        "note": "Câu hỏi thăm sức khoẻ rất hay dùng.",
        "pair": "怎么样？"
      },
      {
        "promptLang": "vi",
        "prompt": "Vì ngày nào ông tôi cũng tập thể thao nên sức khoẻ rất tốt.",
        "answer": "因为我爷爷每天都运动，所以身体很好。",
        "answerPy": "Yīnwèi wǒ yéye měi tiān dōu yùndòng, suǒyǐ shēntǐ hěn hǎo.",
        "note": "每 hay đi với 都 ở vế sau.",
        "pair": "因为……所以……"
      }
    ]
  },
  {
    "n": 11,
    "zh": "时",
    "py": "shí",
    "pos": "Danh từ",
    "vn": "khi, lúc",
    "hv": "thời",
    "em": "🕐",
    "lesson": 3,
    "ex_zh": "身体不舒服时更要好好吃饭。",
    "ex_py": "Shēntǐ bù shūfu shí gèng yào hǎohāo chīfàn.",
    "ex_vn": "Khi cơ thể không khoẻ thì càng phải ăn uống đầy đủ.",
    "exList": [
      {
        "zh": "身体不舒服时更要好好吃饭。",
        "py": "Shēntǐ bù shūfu shí gèng yào hǎohāo chīfàn.",
        "vn": "Khi cơ thể không khoẻ thì càng phải ăn uống đầy đủ."
      },
      {
        "zh": "考试时别忘了带笔。",
        "py": "Kǎoshì shí bié wàngle dài bǐ.",
        "vn": "Khi thi đừng quên mang bút."
      }
    ],
    "hanzi": [
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
    "colloFull": [
      {
        "zh": "小时",
        "py": "xiǎoshí",
        "vn": "tiếng đồng hồ"
      },
      {
        "zh": "有时",
        "py": "yǒushí",
        "vn": "có lúc"
      },
      {
        "zh": "上课时",
        "py": "shàngkè shí",
        "vn": "lúc học"
      },
      {
        "zh": "吃饭时",
        "py": "chī fàn shí",
        "vn": "lúc ăn cơm"
      }
    ],
    "patterns": [
      {
        "s": "động từ + 时",
        "m": "Lúc làm gì — cách nói ngắn của 的时候"
      },
      {
        "s": "时 nằm trong 小时 · 有时 · 时候 — cùng một chữ"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Lúc ăn cơm đừng xem tivi.",
        "answer": "吃饭时别看电视。",
        "answerPy": "Chī fàn shí bié kàn diànshì.",
        "note": "động từ + 时 — cách nói ngắn của 的时候.",
        "pair": "……时"
      },
      {
        "promptLang": "vi",
        "prompt": "Từ đây đến sân bay mất hai tiếng.",
        "answer": "从这里到机场要两个小时。",
        "answerPy": "Cóng zhèli dào jīchǎng yào liǎng ge xiǎoshí.",
        "note": "时 nằm trong 小时 · 有时 · 时候.",
        "pair": "从……到……"
      }
    ]
  },
  {
    "n": 12,
    "zh": "最",
    "py": "zuì",
    "pos": "Phó từ",
    "vn": "nhất",
    "hv": "tối",
    "em": "🥇",
    "lesson": 3,
    "ex_zh": "你最喜欢吃中国菜，我做几个中国菜吧。",
    "ex_py": "Nǐ zuì xǐhuan chī Zhōngguó cài, wǒ zuò jǐ ge Zhōngguó cài ba.",
    "ex_vn": "Em thích ăn món Trung Quốc nhất, cô nấu mấy món Trung Quốc nhé.",
    "exList": [
      {
        "zh": "你最喜欢吃中国菜，我做几个中国菜吧。",
        "py": "Nǐ zuì xǐhuan chī Zhōngguó cài, wǒ zuò jǐ ge Zhōngguó cài ba.",
        "vn": "Em thích ăn món Trung Quốc nhất, cô nấu mấy món Trung Quốc nhé."
      },
      {
        "zh": "在我们家，爸爸最高。",
        "py": "Zài wǒmen jiā, bàba zuì gāo.",
        "vn": "Trong nhà tôi, bố cao nhất."
      }
    ],
    "hanzi": [
      {
        "c": "最",
        "p": "zuì",
        "type": "会意字 · Chữ hội ý",
        "st": 12,
        "ord": "曰 → 取",
        "rad": "曰 (viết)",
        "mean": "nhất",
        "tip": "最 đứng trước tính từ hoặc động từ chỉ tâm lý: 最高、最喜欢.",
        "cf": "更 (gèng – hơn)",
        "w": "最 / 最好 / 最喜欢"
      }
    ],
    "colloFull": [
      {
        "zh": "最好",
        "py": "zuìhǎo",
        "vn": "tốt nhất"
      },
      {
        "zh": "最喜欢",
        "py": "zuì xǐhuan",
        "vn": "thích nhất"
      },
      {
        "zh": "最贵",
        "py": "zuì guì",
        "vn": "đắt nhất"
      },
      {
        "zh": "最近的药店",
        "py": "zuìjìn de yàodiàn",
        "vn": "hiệu thuốc gần nhất"
      }
    ],
    "patterns": [
      {
        "s": "最 + tính từ / động từ",
        "m": "Nhất — mức cao nhất: 我最喜欢中国菜"
      },
      {
        "s": "很 < 非常 < 最 — ba mức từ thấp lên cao"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tôi thích nhất là món Trung Quốc.",
        "answer": "我最喜欢中国菜。",
        "answerPy": "Wǒ zuì xǐhuan Zhōngguó cài.",
        "note": "很 < 非常 < 最 — ba mức từ thấp lên cao.",
        "pair": "最 + V"
      },
      {
        "promptLang": "vi",
        "prompt": "Xin hỏi, hiệu thuốc gần nhất ở đâu ạ?",
        "answer": "请问，最近的药店在哪里？",
        "answerPy": "Qǐngwèn, zuì jìn de yàodiàn zài nǎli?",
        "note": "最 + tính từ — mức cao nhất.",
        "pair": "在哪里？"
      }
    ]
  },
  {
    "n": 13,
    "zh": "药店",
    "py": "yàodiàn",
    "pos": "Danh từ",
    "vn": "hiệu thuốc, nhà thuốc",
    "hv": "dược điếm",
    "em": "🏥",
    "img": "/images/hsk2v3-bai-11/yaodian.jpg",
    "lesson": 4,
    "ex_zh": "从药店买了点儿药，没去医院。",
    "ex_py": "Cóng yàodiàn mǎile diǎnr yào, méi qù yīyuàn.",
    "ex_vn": "Tôi mua một ít thuốc ở hiệu thuốc, không đi bệnh viện.",
    "exList": [
      {
        "zh": "从药店买了点儿药，没去医院。",
        "py": "Cóng yàodiàn mǎile diǎnr yào, méi qù yīyuàn.",
        "vn": "Tôi mua một ít thuốc ở hiệu thuốc, không đi bệnh viện."
      },
      {
        "zh": "药店就在医院旁边。",
        "py": "Yàodiàn jiù zài yīyuàn pángbiān.",
        "vn": "Hiệu thuốc ở ngay cạnh bệnh viện."
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
        "w": "药店 / 吃药 / 一点儿药"
      },
      {
        "c": "店",
        "p": "diàn",
        "type": "形声字 · Chữ hình thanh",
        "st": 8,
        "ord": "广 → 占",
        "rad": "广 (nghiễm – mái nhà)",
        "mean": "cửa hàng, quán",
        "tip": "Cùng nhóm: 商店、咖啡店、奶茶店、药店.",
        "cf": "",
        "w": "药店 / 商店 / 咖啡店"
      }
    ],
    "colloFull": [
      {
        "zh": "去药店",
        "py": "qù yàodiàn",
        "vn": "đi hiệu thuốc"
      },
      {
        "zh": "在药店买药",
        "py": "zài yàodiàn mǎi yào",
        "vn": "mua thuốc ở hiệu thuốc"
      },
      {
        "zh": "最近的药店",
        "py": "zuìjìn de yàodiàn",
        "vn": "hiệu thuốc gần nhất"
      },
      {
        "zh": "药店门口",
        "py": "yàodiàn ménkǒu",
        "vn": "cổng hiệu thuốc"
      }
    ],
    "patterns": [
      {
        "s": "去 / 在 + 药店",
        "m": "Đi, ở hiệu thuốc"
      },
      {
        "s": "药 + 店",
        "m": "Tiệm (店) bán thuốc (药) — cùng kiểu 书店 · 饭店"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Hiệu thuốc ở bên cạnh bệnh viện.",
        "answer": "药店在医院旁边。",
        "answerPy": "Yàodiàn zài yīyuàn pángbiān.",
        "note": "药 + 店 — tiệm bán thuốc.",
        "pair": "在……旁边"
      },
      {
        "promptLang": "vi",
        "prompt": "Trên đường về nhà tôi ghé hiệu thuốc mua thuốc.",
        "answer": "回家的路上我去药店买药。",
        "answerPy": "Huí jiā de lùshang wǒ qù yàodiàn mǎi yào.",
        "note": "去药店买药 — đi hiệu thuốc mua thuốc.",
        "pair": "……的路上"
      }
    ]
  }
];

var wuData = [
  { img: '🤕', label: '头疼', py: 'tóu téng', letter: 'A' },
  { img: '💊', label: '药', py: 'yào', letter: 'B' },
  { img: '🏥', label: '药店', py: 'yàodiàn', letter: 'C' },
  { img: '🛣️', label: '路上', py: 'lùshang', letter: 'D' },
  { img: '💪', label: '身体', py: 'shēntǐ', letter: 'E' },
  { img: '🐢', label: '慢', py: 'màn', letter: 'F' }
];

var dialogData = [
  {
    scene: '在教室 · Trong lớp học (Bạch Gia Nguyệt bị đau đầu)',
    preQuiz: [
      { q: '白家月现在在哪儿？', opts: ['医院', '家里', '教室'], ans: 2 },
      { q: '王一飞现在去做什么？', opts: ['开车', '回家', '找医生'], ans: 0 }
    ],
    lines: [
      { sp: 0, zh: '家月，都下课了，你怎么还不回家？', py: 'Jiāyuè, dōu xiàkè le, nǐ zěnme hái bù huí jiā?', vn: 'Gia Nguyệt, đã tan học rồi, sao em vẫn chưa về nhà?' },
      { sp: 1, zh: '我头疼，不太舒服。', py: 'Wǒ tóu téng, bú tài shūfu.', vn: 'Em bị đau đầu, không được khoẻ lắm.' },
      { sp: 0, zh: '你这几天经常头疼，去医院看看吧。', py: 'Nǐ zhè jǐ tiān jīngcháng tóu téng, qù yīyuàn kànkan ba.', vn: 'Mấy ngày nay em thường xuyên đau đầu, hay là đi bệnh viện khám thử xem.' },
      { sp: 1, zh: '我想休息一下，现在不能动，一动就疼。', py: 'Wǒ xiǎng xiūxi yíxià, xiànzài bù néng dòng, yí dòng jiù téng.', vn: 'Em muốn nghỉ ngơi một lát, bây giờ không cử động được, cứ động là đau.' },
      { sp: 0, zh: '那你在这儿坐着，我去开车，一会儿送你去医院。', py: 'Nà nǐ zài zhèr zuòzhe, wǒ qù kāichē, yíhuìr sòng nǐ qù yīyuàn.', vn: 'Vậy em cứ ngồi ở đây nhé, cô đi lấy xe, lát nữa sẽ đưa em đến bệnh viện.' },
      { sp: 1, zh: '谢谢王老师。', py: 'Xièxie Wáng lǎoshī.', vn: 'Cảm ơn cô Vương ạ.' }
    ]
  },
  {
    scene: '在车里 · Trong xe (Lý Văn gọi điện đến)',
    preQuiz: [
      { q: '王一飞在做什么？', opts: ['开车', '看病', '接电话'], ans: 0 },
      { q: '今天天气怎么样？', opts: ['很好', '下雨', '下雪'], ans: 2 }
    ],
    lines: [
      { sp: 0, zh: '现在路上车多，还下着雪，我开慢一点儿。', py: 'Xiànzài lùshang chē duō, hái xiàzhe xuě, wǒ kāi màn yìdiǎnr.', vn: 'Bây giờ rất nhiều xe cộ trên đường, lại còn đang có tuyết rơi nên cô lái chậm một chút.' },
      { sp: 1, zh: '没问题，现在头没那么疼了。', py: 'Méi wèntí, xiànzài tóu méi nàme téng le.', vn: 'Không sao đâu ạ, bây giờ đầu em không còn đau như vừa nãy nữa rồi.' },
      { sp: 0, zh: '好。李文来电话了，你帮我接一下。', py: 'Hǎo. Lǐ Wén lái diànhuà le, nǐ bāng wǒ jiē yíxià.', vn: 'Được rồi. Lý Văn gọi điện thoại đến kia, em nghe máy hộ cô một chút.' },
      { sp: 1, zh: '喂，李文，王老师开着车呢，你找她有事吗？', py: 'Wèi, Lǐ Wén, Wáng lǎoshī kāizhe chē ne, nǐ zhǎo tā yǒu shì ma?', vn: 'A lô, Lý Văn à, cô Vương đang lái xe, bạn tìm cô có việc gì không?' },
      { sp: 2, zh: '没什么事。今天雪这么大，你们开车去哪儿啊？', py: 'Méi shénme shì. Jīntiān xuě zhème dà, nǐmen kāichē qù nǎr a?', vn: 'Không có việc gì quan trọng đâu. Hôm nay tuyết rơi dày thế này, hai người lái xe đi đâu vậy?' },
      { sp: 1, zh: '去医院，我头有点儿疼。', py: 'Qù yīyuàn, wǒ tóu yǒudiǎnr téng.', vn: 'Đi bệnh viện, mình hơi đau đầu.' },
      { sp: 2, zh: '那我一会儿去看看你。', py: 'Nà wǒ yíhuìr qù kànkan nǐ.', vn: 'Vậy lát nữa mình sẽ đi thăm bạn.' }
    ]
  },
  {
    scene: '在房间 · Trong phòng (Lý Văn đến thăm)',
    preQuiz: [
      { q: '白家月现在怎么样了？', opts: ['不想吃饭', '身体不舒服', '头不那么疼了'], ans: 2 },
      { q: '王一飞现在要做什么？', opts: ['去买药', '找医生', '去做菜'], ans: 2 }
    ],
    lines: [
      { sp: 1, zh: '李文，快请进！', py: 'Lǐ Wén, kuài qǐng jìn!', vn: 'Lý Văn, mau vào đi!' },
      { sp: 2, zh: '家月，你怎么样了？头还疼吗？', py: 'Jiāyuè, nǐ zěnmeyàng le? Tóu hái téng ma?', vn: 'Gia Nguyệt, bạn thế nào rồi? Còn đau đầu không?' },
      { sp: 1, zh: '不那么疼了。医生开了一些药，吃完就好多了。', py: 'Bú nàme téng le. Yīshēng kāile yìxiē yào, chīwán jiù hǎoduō le.', vn: 'Không đau như trước nữa rồi. Bác sĩ đã kê một ít thuốc, uống xong thấy khoẻ hơn nhiều rồi.' },
      { sp: 2, zh: '那就好！', py: 'Nà jiù hǎo!', vn: 'Vậy thì tốt rồi!' },
      { sp: 0, zh: '家月，你想不想吃点儿东西？', py: 'Jiāyuè, nǐ xiǎng bu xiǎng chī diǎnr dōngxi?', vn: 'Gia Nguyệt, em có muốn ăn chút gì không?' },
      { sp: 2, zh: '吃点儿吧，身体不舒服时更要好好吃饭。', py: 'Chī diǎnr ba, shēntǐ bù shūfu shí gèng yào hǎohāo chīfàn.', vn: 'Ăn một chút đi, khi cơ thể không khoẻ thì càng phải ăn uống đầy đủ.' },
      { sp: 1, zh: '吃点儿什么呢？', py: 'Chī diǎnr shénme ne?', vn: 'Ăn chút gì bây giờ ạ?' },
      { sp: 0, zh: '你最喜欢吃中国菜，我做几个中国菜吧。', py: 'Nǐ zuì xǐhuan chī Zhōngguó cài, wǒ zuò jǐ ge Zhōngguó cài ba.', vn: 'Em thích ăn món Trung Quốc nhất, cô nấu mấy món Trung Quốc nhé.' },
      { sp: 1, zh: '好的，谢谢王老师。', py: 'Hǎo de, xièxie Wáng lǎoshī.', vn: 'Vâng ạ, cảm ơn cô Vương.' }
    ]
  },
  {
    scene: '在房间 · Trong phòng (Bạch Gia Nguyệt viết nhật ký)',
    preQuiz: [
      { q: '白家月今天自己去医院了吗？', opts: ['是的，自己去的', '没有，王老师送她去的', '没去医院'], ans: 1 },
      { q: '这几天她从哪儿买的药？', opts: ['药店', '医院', '商场'], ans: 0 }
    ],
    lines: [
      { sp: 0, zh: '我这几天经常头疼，从药店买了点儿药，没去医院。', py: 'Wǒ zhè jǐ tiān jīngcháng tóu téng, cóng yàodiàn mǎile diǎnr yào, méi qù yīyuàn.', vn: 'Mấy ngày nay tôi thường xuyên bị đau đầu, đã mua một ít thuốc từ hiệu thuốc về mà không đi bệnh viện.' },
      { sp: 0, zh: '今天下课后，王老师看我不舒服，就送我去医院了。', py: 'Jīntiān xiàkè hòu, Wáng lǎoshī kàn wǒ bù shūfu, jiù sòng wǒ qù yīyuàn le.', vn: 'Hôm nay sau khi tan học, cô Vương thấy tôi không được khoẻ nên đã đưa tôi đến bệnh viện.' },
      { sp: 0, zh: '从医院回来，李文也来看我了。', py: 'Cóng yīyuàn huílái, Lǐ Wén yě lái kàn wǒ le.', vn: 'Sau khi từ bệnh viện về, Lý Văn cũng đến thăm tôi.' },
      { sp: 0, zh: '现在他们都回去了，我也要睡觉了。', py: 'Xiànzài tāmen dōu huíqù le, wǒ yě yào shuìjiào le.', vn: 'Bây giờ họ đều về cả rồi, tôi cũng phải đi ngủ đây.' }
    ]
  }
];

var listenData = [
  {
    audio: '今天下着大雨，路上车很多，我们还是打车去吧。',
    questions: [
      { q: 'Hôm nay thời tiết thế nào?', opts: ['Đang mưa to', 'Đang có tuyết', 'Trời nắng đẹp'], ans: 0, exp: '下着大雨 = đang mưa to; V + 着 chỉ trạng thái đang kéo dài.' },
      { q: 'Họ định đi bằng gì?', opts: ['Xe buýt', 'Taxi', 'Đi bộ'], ans: 1, exp: '还是打车去吧 = tốt hơn là đi taxi; 还是……吧 = đề nghị phương án tốt hơn.' }
    ]
  },
  {
    audio: '我这两天头疼，医生说要多喝热水，早点儿睡觉。',
    questions: [
      { q: 'Bác sĩ dặn người nói làm gì?', opts: ['Uống thuốc mỗi ngày', 'Đi bệnh viện khám lại', 'Uống nhiều nước nóng, ngủ sớm'], ans: 2, exp: '多喝热水 = uống nhiều nước nóng; 早点儿睡觉 = đi ngủ sớm một chút.' }
    ]
  },
  {
    audio: '药店离这儿不远，往前走五分钟就到了。',
    questions: [
      { q: 'Hiệu thuốc cách đây bao xa?', opts: ['Rất xa, phải đi xe', 'Đi bộ khoảng 5 phút', 'Ở ngay cạnh trường'], ans: 1, exp: '离这儿不远 = cách đây không xa; 往前走五分钟就到了 = đi thẳng 5 phút là tới.' }
    ]
  },
  {
    audio: '在我们家，爷爷最喜欢运动，他每天早上都去跑步。',
    questions: [
      { q: 'Trong nhà, ai thích vận động nhất?', opts: ['Bà', 'Ông', 'Bố'], ans: 1, exp: '爷爷最喜欢运动 = ông thích vận động nhất; 最 + động từ tâm lý = … nhất.' },
      { q: 'Mỗi sáng ông làm gì?', opts: ['Đi bơi', 'Đánh bóng rổ', 'Chạy bộ'], ans: 2, exp: '每天早上都去跑步 = sáng nào cũng đi chạy bộ.' }
    ]
  },
  {
    audio: '王老师开着车呢，不能接电话，你一会儿再打吧。',
    questions: [
      { q: 'Vì sao cô Vương không nghe máy được?', opts: ['Cô đang ngủ', 'Cô đang lên lớp', 'Cô đang lái xe'], ans: 2, exp: '开着车呢 = đang lái xe (việc đang kéo dài); 着 + tân ngữ + 呢.' }
    ]
  },
  {
    audio: '我姐姐穿着白色的衣服，在门口等我们呢。',
    questions: [
      { q: 'Chị gái mặc áo màu gì?', opts: ['Màu đỏ', 'Màu trắng', 'Màu đen'], ans: 1, exp: '穿着白色的衣服 = đang mặc áo màu trắng.' },
      { q: 'Chị ấy đang ở đâu?', opts: ['Ở cửa', 'Trong lớp học', 'Ở bệnh viện'], ans: 0, exp: '在门口等我们 = đợi chúng tôi ở cửa.' }
    ]
  }
];

var matchData = [
  { left: '吃', right: '药' },
  { left: '头有点儿', right: '疼' },
  { left: '穿着', right: '白色的裤子' },
  { left: '手里拿着', right: '一杯咖啡' },
  { left: '外边下着', right: '大雪' },
  { left: '快请', right: '进' },
  { left: '去药店', right: '买药' },
  { left: '一动', right: '就疼' }
];

var fillData = [
  { pre: 'Trời lạnh mà cửa phòng vẫn mở, bạn kêu lên: “房间的门还开', blank: '着', post: '呢，好冷啊！”', hint: '(trạng thái vẫn duy trì)', ans: '着', exp: 'V + 着 = trạng thái đang được giữ nguyên: 门开着 = cửa đang mở.' },
  { pre: '“电视还开着', blank: '没有', post: '？” — “开着呢，爸爸在看足球。”', hint: '(… chưa / không? — hỏi trạng thái)', ans: '没有', exp: 'Hỏi trạng thái với 着: V + 着 + 没有？ (hoặc V着吗？); trả lời 开着呢 / 没开着.' },
  { pre: '“我给小明打了三次电话，他都没接。” — “他的手机', blank: '没', post: '开着，他在考试呢。”', hint: '(phủ định của 着)', ans: '没', exp: 'Phủ định trạng thái V + 着 dùng 没: 没开着; không nói 不开着.' },
  { pre: 'Lần đầu hẹn gặp, bạn nhắn tin: “我穿', blank: '着', post: '一条黑色的裤子，你一看就知道了。”', hint: '(đang mặc — trạng thái)', ans: '着', exp: '穿着 + tân ngữ = đang mặc (trạng thái lúc gặp); 穿了 chỉ việc mặc đã xong.' },
  { pre: '“你们三个人里，谁跑得', blank: '最', post: '快？” — “刘明。”', hint: '(nhất)', ans: '最', exp: 'So sánh trong một nhóm (三个人里) dùng 最 + tính từ: 跑得最快 = chạy nhanh nhất.' },
  { pre: 'Bạn nói với cô giáo: “我头', blank: '疼', post: '得不能看书。”', hint: '(đau)', ans: '疼', exp: '头疼 = đau đầu; 疼得不能看书 = đau đến mức không đọc sách được.' },
  { pre: '爸爸的公司离家很远，他', blank: '经常', post: '晚上十点多回家。', hint: '(thường xuyên)', ans: '经常', exp: '经常 đứng trước cụm động từ: 经常……回家 = thường xuyên … mới về nhà.' },
  { pre: '他走得太', blank: '慢', post: '了，我们等了他二十分钟。', hint: '(chậm)', ans: '慢', exp: '走得太慢了 = đi chậm quá; 慢 ngược nghĩa với 快.' },
  { pre: 'Bạn đến muộn, đứng ở cửa lớp hỏi: “老师，我可以', blank: '进', post: '教室吗？”', hint: '(vào)', ans: '进', exp: '进 + nơi chốn = vào đâu: 进教室 = vào lớp.' },
  { pre: '睡觉', blank: '时', post: '别玩手机，对身体不好。', hint: '(khi, lúc)', ans: '时', exp: '……时 = ……的时候 (khi …), đứng SAU sự việc: 睡觉时.' },
  { pre: 'Bác sĩ khám chân cho bạn: “别', blank: '动', post: '，我看看这儿疼不疼。”', hint: '(cử động)', ans: '动', exp: '别动 = đừng cử động; 别 + động từ = đừng ….' },
  { pre: '“你到哪儿了？” — “我在', blank: '路上', post: '呢，十分钟就到。”', hint: '(trên đường)', ans: '路上', exp: '在路上 = đang trên đường (đi tới).' }
];

var sortData = [
  { words: ['他', '穿', '着', '一件', '绿色', '的', '衣服', '。'], ans: '他穿着一件绿色的衣服。', audio: '他穿着一件绿色的衣服。' },
  { words: ['他', '是', '我们', '学校', '个子', '最', '高', '的', '男孩儿', '。'], ans: '他是我们学校个子最高的男孩儿。', audio: '他是我们学校个子最高的男孩儿。', alt: ['我们学校个子最高的男孩儿是他。'] },
  { words: ['你', '身体', '不', '舒服', '，', '今天', '就', '别', '去', '上课', '了', '。'], ans: '你身体不舒服，今天就别去上课了。', audio: '你身体不舒服，今天就别去上课了。' },
  { words: ['我', '经常', '在', '这家', '药店', '买', '药', '。'], ans: '我经常在这家药店买药。', audio: '我经常在这家药店买药。' },
  { words: ['他', '每天', '都', '听', '着', '歌', '跑步', '。'], ans: '他每天都听着歌跑步。', audio: '他每天都听着歌跑步。' },
  { words: ['王老师', '在', '门口', '等', '着', '你', '呢', '。'], ans: '王老师在门口等着你呢。', audio: '王老师在门口等着你呢。' },
  { words: ['路上', '车', '太', '多', '了', '，', '我们', '走', '得', '很', '慢', '。'], ans: '路上车太多了，我们走得很慢。', audio: '路上车太多了，我们走得很慢。' },
  { words: ['医生', '让', '我', '一天', '吃', '三', '次', '药', '。'], ans: '医生让我一天吃三次药。', audio: '医生让我一天吃三次药。' }
];

var mcData = [
  { q: 'Bạn tả bố trong ảnh: “Bố tôi tay đang cầm một cốc trà.”', opts: ['我爸爸手里拿着一杯茶。', '我爸爸手里拿一杯着茶。', '我爸爸拿着手里一杯茶。', '我爸爸手里着拿一杯茶。'], ans: 0, exp: '着 đứng ngay sau động từ 拿, tân ngữ 一杯茶 ở sau 着; 手里 (trong tay) đặt trước động từ.' },
  { q: 'A: “药店的门开着没有？” — Cửa hiệu thuốc đang đóng, B đáp:', opts: ['没开着，我们明天再来吧。', '不开着，我们明天再来吧。', '没开着了，我们明天再来吧。', '开着没，我们明天再来吧。'], ans: 0, exp: 'Phủ định trạng thái 着 dùng 没 + V + 着; không dùng 不, không thêm 了.' },
  { q: 'Bạn muốn nói: “Hiệu thuốc này gần nhà tôi nhất.”', opts: ['这家药店离我家最近。', '这家药店最离我家近。', '这家药店离我家近最。', '这家药店是最离我家近。'], ans: 0, exp: '最 đứng ngay trước tính từ (近): 离我家最近; không đặt 最 trước 离 hay sau tính từ.' },
  { q: 'Lý Văn cao 1m75, Thiên Trung 1m80, Nhất Phi 1m85. Bạn nói: “一飞＿＿高。”', opts: ['最', '比', '很', '还是'], ans: 0, exp: 'So trong cả nhóm ba người, người cao nhất dùng 最; 比 phải có đối tượng so sánh (A 比 B 高).' },
  { q: 'Câu nào SAI?', opts: ['她不穿着白色的衣服。', '外边还下着雨呢。', '你的电脑还开着呢。', '大家都在教室里坐着呢。'], ans: 0, exp: 'Phủ định V + 着 dùng 没, không dùng 不: 她没穿着白色的衣服.' },
  { q: 'A: “你最喜欢什么颜色？” — B đáp:', opts: ['我最喜欢绿色。', '我喜欢最绿色。', '我最喜欢是绿色。', '我是最喜欢绿色。'], ans: 0, exp: '最 đứng trước động từ tâm lý: 最喜欢 + tân ngữ; không chèn 是 vào giữa.' },
  { q: 'Cô giáo hỏi bạn bị làm sao. Bạn hơi đau đầu, bạn đáp:', opts: ['我头有点儿疼。', '我头一点儿疼。', '我头疼一点儿。', '我是头有点儿疼。'], ans: 0, exp: '“Hơi đau” = 有点儿 + tính từ: 有点儿疼; 一点儿 không đứng trước tính từ, không thêm 是.' },
  { q: 'Bạn muốn nói: “Tôi thường xuyên đi bơi với bố.”', opts: ['我经常跟爸爸去游泳。', '我跟爸爸去游泳经常。', '我经常跟爸爸去游泳了。', '我跟爸爸经常去了游泳。'], ans: 0, exp: '经常 đứng trước cụm giới từ / động từ; việc lặp lại thường xuyên không dùng 了.' },
  { q: 'Có người gõ cửa phòng bạn, bạn nói:', opts: ['请进！', '请来进！', '进请！', '请进去！'], ans: 0, exp: 'Mời khách vào phòng mình nói 请进; người nói ở trong phòng nên không dùng 进去.' },
  { q: 'Bạn muốn nói: “Lúc bị ốm, tôi chẳng muốn ăn gì.”', opts: ['生病时，我什么都不想吃。', '时生病，我什么都不想吃。', '生病时，我不想吃什么都。', '在生病，我什么都不想吃。'], ans: 0, exp: '时 (= 的时候) đứng SAU sự việc: 生病时; “gì cũng không” = 什么都不 + động từ.' },
  { q: 'Bố chuẩn bị lái xe đi làm, ngoài trời tuyết rơi dày. Bạn dặn bố:', opts: ['雪很大，您开慢一点儿。', '雪很大，您开一点儿慢。', '雪很大，您一点儿慢开。', '雪很大，您开得慢一点儿了。'], ans: 0, exp: 'Động từ + tính từ + 一点儿: 开慢一点儿 = lái chậm một chút; 一点儿 đứng sau tính từ.' },
  { q: 'Bạn bị đau đầu, muốn mua thuốc, bạn hỏi người đi đường:', opts: ['请问，药店在哪儿？', '请问，药店哪儿在？', '请问，哪儿在药店？', '请问，在药店哪儿？'], ans: 0, exp: 'Hỏi vị trí: nơi chốn + 在 + 哪儿？; không đảo 哪儿 lên trước 在.' }
];

var speakingData = {
  intro: 'Nhấn nút loa nghe câu hỏi / tình huống, rồi tự ghi âm câu trả lời — hãy nói về chính bạn, dùng 着, 最, 经常 và ……时.',
  questions: [
    {
      q_zh: '你现在穿着什么颜色的衣服？',
      q_vn: 'Bây giờ bạn đang mặc quần áo màu gì? Hãy tả.',
      hint: '我穿着……',
      sample: '我穿着一件白色的衣服和一条黑色的裤子。',
      sample_vn: 'Mình đang mặc một chiếc áo màu trắng và một chiếc quần màu đen.',
      note: 'V + 着 + tân ngữ: tả trạng thái lúc nói (穿着, 拿着).'
    },
    {
      q_zh: '你们家谁做饭做得最好吃？',
      q_vn: 'Trong nhà bạn, ai nấu ăn ngon nhất?',
      hint: '我们家……做饭做得最好吃。',
      sample: '我妈妈做饭做得最好吃，她做的鱼和肉大家都爱吃。',
      sample_vn: 'Mẹ mình nấu ăn ngon nhất, sủi cảo cá và thịt mẹ làm ai cũng thích.',
      note: '最 + tính từ; ôn V + O + V + 得 (bài 7).'
    },
    {
      q_zh: '你身体不舒服时会做什么？',
      q_vn: 'Khi không khoẻ, bạn thường làm gì?',
      hint: '我……时会……',
      sample: '我头疼时会去药店买点儿药，在家休息一天。',
      sample_vn: 'Khi đau đầu, mình sẽ ra hiệu thuốc mua ít thuốc, ở nhà nghỉ một ngày.',
      note: '……时 = khi …, đứng sau sự việc.'
    },
    {
      q_zh: '你经常做什么运动？',
      q_vn: 'Bạn thường chơi môn thể thao nào? Môn nào bạn thích nhất?',
      hint: '我经常……，最喜欢的是……',
      sample: '我经常和朋友打篮球，有时也去游泳，最喜欢的是打篮球。',
      sample_vn: 'Mình hay chơi bóng rổ với bạn, có lúc đi bơi, thích nhất vẫn là bóng rổ.',
      note: '经常 đứng trước động từ; 最喜欢的是…… = thứ thích nhất là ….'
    },
    {
      q_zh: '朋友生病了，你给他打电话，你会说什么？',
      q_vn: 'Bạn của bạn bị ốm, bạn gọi điện hỏi thăm. Bạn sẽ nói gì?',
      hint: '你身体……？吃药了没有？',
      sample: '你身体好点儿了吗？吃药了没有？我一会儿去看你。',
      sample_vn: 'Bạn đỡ hơn chút nào chưa? Uống thuốc chưa? Lát nữa mình đến thăm bạn.',
      note: 'Hỏi thăm người ốm: 好点儿了吗？/ ……了没有？'
    }
  ]
};

var translateData = [
  { vi: 'Ngoài trời đang có tuyết, hôm nay chúng ta đừng ra ngoài nữa.', zh: '外边下着雪，我们今天别出去了。', py: 'Wàibian xiàzhe xuě, wǒmen jīntiān bié chūqu le.' },
  { vi: 'Tôi thường xuyên đau đầu, bác sĩ bảo tôi nghỉ ngơi nhiều hơn.', zh: '我经常头疼，医生让我多休息。', py: 'Wǒ jīngcháng tóuténg, yīshēng ràng wǒ duō xiūxi.' },
  { vi: 'Em gái tôi đang ngồi ở cửa đợi mẹ về.', zh: '妹妹在门口坐着等妈妈回来。', py: 'Mèimei zài ménkǒu zuòzhe děng māma huílai.' },
  { vi: 'Ở nhà tôi, tôi là người đi ngủ muộn nhất.', zh: '在我家，我睡觉睡得最晚。', py: 'Zài wǒ jiā, wǒ shuìjiào shuì de zuì wǎn.' },
  { vi: 'Lúc tan học về nhà, tôi ghé hiệu thuốc mua thuốc cho bà.', zh: '下课回家时，我去药店给奶奶买了药。', py: 'Xiàkè huí jiā shí, wǒ qù yàodiàn gěi nǎinai mǎile yào.' }
];

var translateDataRev = [
  { vi: 'Anh ấy tay cầm hai cốc trà sữa, đang đợi bạn ở bến xe.', zh: '他手里拿着两杯奶茶，在车站等你呢。', py: 'Tā shǒu li názhe liǎng bēi nǎichá, zài chēzhàn děng nǐ ne.' },
  { vi: 'Đây là phòng học lớn nhất trường chúng tôi.', zh: '这是我们学校最大的教室。', py: 'Zhè shì wǒmen xuéxiào zuì dà de jiàoshì.' },
  { vi: 'Người lái xe trên đường đều lái rất chậm, vì tuyết to quá.', zh: '路上开车的人都开得很慢，因为雪太大了。', py: 'Lùshang kāichē de rén dōu kāi de hěn màn, yīnwèi xuě tài dà le.' },
  { vi: 'Bà rất khoẻ, ngày nào cũng ra ngoài đi bộ một lát.', zh: '奶奶身体很好，每天都去外边走走。', py: 'Nǎinai shēntǐ hěn hǎo, měi tiān dōu qù wàibian zǒuzou.' }
];

// ══════════════════════════════════════════
// LUYỆN TẬP SÁCH BÀI TẬP (新HSK教程2 学练手册, Bài 11: Hán tự + Từ mới + Mô phỏng đề thi)
// ══════════════════════════════════════════
var wbData = {
  sections: [
    { title: 'Hán tự & từ mới', blocks: [
      { type: 'table', caption: 'Bộ thủ (偏旁) — tên gọi và chữ ví dụ', headers: ['Tên gọi', 'Bộ thủ', 'Chữ ví dụ'], rows: [
        ['单人旁', '亻', '他 (anh ấy) · 体 (thân thể)'],
        ['病字头', '疒', '病 (bệnh, ốm) · 疼 (đau)']
      ] },
      { type: 'table', caption: 'Tập viết (摹写) — chữ → từ → câu', headers: ['Chữ', 'Từ', 'Câu'], rows: [
        ['他', '他们 — họ, các anh ấy', '他们穿着黑色的衣服。— Họ đang mặc quần áo màu đen.'],
        ['体', '身体 — cơ thể, sức khỏe', '爷爷身体很好。— Sức khỏe của ông rất tốt.'],
        ['病', '生病 — bị ốm', '你生病了，坐着吧。— Bạn đang ốm, cứ ngồi đi.'],
        ['疼', '头疼 — đau đầu', '我头疼，不能动，一动就疼。— Tôi đau đầu, không cử động được, hễ cử động là đau.']
      ],
        note: 'Luyện viết tay từng nét theo mẫu trong sách (bấm vào chữ ở phần Từ vựng để xem nét viết).' },
      { type: 'table', caption: 'Từ ghép mới (学一学)', headers: ['Từ đã biết', 'Từ mới', 'Nghĩa'], rows: [
        ['身体 · 旁边', '身旁', 'bên cạnh (mình)'],
        ['水果 · 药店', '水果店', 'cửa hàng hoa quả'],
        ['游泳 · 裤子', '泳裤', 'quần bơi']
      ] },
      { type: 'blankdrill', caption: 'Điền từ mới vào chỗ trống (做一做)', hint: 'Gõ từ mới (chữ Hán) vào ô trống rồi bấm "Xem đáp án" để đối chiếu.', maxlength: 4,
        items: [
          { before: '妈妈给小明买了一条黑色的', after: '，他很喜欢。', answer: '泳裤' },
          { before: '我', after: '的那个男孩儿就是你男朋友吧？', answer: '身旁' },
          { before: '我们问问前边那个人吧，看看去', after: '要往哪边走。', answer: '水果店' }
        ] }
    ]},
    { title: 'Mô phỏng đề thi', audio: '/audio/hsk2v3-bai-11/wb-mocktest.mp3', blocks: [
      { type: 'mocktest',
        listening: [
          { n: 1, part: 'Phần 1 · Nghe một câu, chọn tranh đúng', options: [
            { key: 'A', img: '/images/hsk2v3-bai-11-wb/q1a.jpg' },
            { key: 'B', img: '/images/hsk2v3-bai-11-wb/q1b.jpg' },
            { key: 'C', img: '/images/hsk2v3-bai-11-wb/q1c.jpg' }
          ], answer: 'B',
            script: '从昨天开始，她的头就很疼。', vn: 'Từ hôm qua đến giờ cô ấy đau đầu lắm. (Tranh B: cô gái ôm đầu)' },
          { n: 2, options: [
            { key: 'A', img: '/images/hsk2v3-bai-11-wb/q2a.jpg' },
            { key: 'B', img: '/images/hsk2v3-bai-11-wb/q2b.jpg' },
            { key: 'C', img: '/images/hsk2v3-bai-11-wb/q2c.jpg' }
          ], answer: 'B',
            script: '因为下着大雪，所以他走得很慢。', vn: 'Vì tuyết đang rơi dày nên anh ấy đi rất chậm.' },
          { n: 3, options: [
            { key: 'A', img: '/images/hsk2v3-bai-11-wb/q3a.jpg' },
            { key: 'B', img: '/images/hsk2v3-bai-11-wb/q3b.jpg' },
            { key: 'C', img: '/images/hsk2v3-bai-11-wb/q3c.jpg' }
          ], answer: 'C',
            script: '跑步、游泳什么的我都喜欢，但我最喜欢踢球。', vn: 'Chạy bộ, bơi lội… mình đều thích, nhưng mình thích nhất là đá bóng.' },
          { n: 4, part: 'Phần 2 · Nghe hội thoại, chọn tranh phù hợp', bank: [
            { key: 'A', img: '/images/hsk2v3-bai-11-wb/q4to6_a.jpg' },
            { key: 'B', img: '/images/hsk2v3-bai-11-wb/q4to6_b.jpg' },
            { key: 'C', img: '/images/hsk2v3-bai-11-wb/q4to6_c.jpg' },
            { key: 'D', img: '/images/hsk2v3-bai-11-wb/q4to6_d.jpg' }
          ], letters: ['A', 'B', 'C', 'D'], answer: 'B',
            script: '女：外边下着雨，你还去跑步吗？\n男：雨不大，可以去跑步。', vn: 'Nữ: Bên ngoài đang mưa, anh vẫn đi chạy bộ à?\nNam: Mưa không to, vẫn chạy được.' },
          { n: 5, letters: ['A', 'B', 'C', 'D'], answer: 'C',
            script: '男：我的药你看见了吗？\n女：在桌子上，你快去吃吧。', vn: 'Nam: Em có thấy thuốc của anh đâu không?\nNữ: Ở trên bàn ấy, anh mau đi uống đi. (Tranh C: hộp thuốc)' },
          { n: 6, letters: ['A', 'B', 'C', 'D'], answer: 'A',
            script: '女：下课了，你别在这儿坐着，出去运动运动。\n男：老师，我不太舒服，想休息一下。', vn: 'Nữ: Tan học rồi, em đừng ngồi mãi ở đây, ra ngoài vận động chút đi.\nNam: Thưa cô, em thấy hơi mệt, muốn nghỉ một lát. (Tranh A: cậu học sinh mệt mỏi trong lớp)' },
          { n: 7, part: 'Phần 3 · Nghe hội thoại, chọn đáp án đúng', options: [
            { key: 'A', text: '看电视' },
            { key: 'B', text: '洗水果' },
            { key: 'C', text: '去吃饭' }
          ], answer: 'B',
            script: '女：爸，你也过来看电视吧。\n男：你们看着，我去洗点儿水果。\n问：男的要去做什么？', vn: 'Nữ: Bố ơi, bố cũng qua xem tivi đi.\nNam: Mọi người cứ xem đi, bố đi rửa ít hoa quả.\nHỏi: Người đàn ông định đi làm gì? → Rửa hoa quả.' },
          { n: 8, options: [
            { key: 'A', text: '开车' },
            { key: 'B', text: '看病' },
            { key: 'C', text: '休息' }
          ], answer: 'A',
            script: '男：天气不好，你慢点儿开。\n女：没问题。你身体不舒服，就好好休息吧。\n问：女的在做什么？', vn: 'Nam: Thời tiết xấu, em lái chậm thôi nhé.\nNữ: Không sao đâu. Anh không khỏe thì cứ nghỉ ngơi cho tốt.\nHỏi: Người phụ nữ đang làm gì? → Lái xe ("你慢点儿开"; người nghỉ ngơi là anh).' },
          { n: 9, options: [
            { key: 'A', text: '家里' },
            { key: 'B', text: '公司' },
            { key: 'C', text: '医院' }
          ], answer: 'C',
            script: '女：医生，我这几天经常头疼。\n男：晚上睡觉睡得怎么样？\n女：睡得不好。\n男：我给你开点儿药，吃药后睡个好觉，头就不疼了。\n问：女的现在在哪儿？', vn: 'Nữ: Bác sĩ ơi, mấy hôm nay tôi hay bị đau đầu.\nNam: Buổi tối chị ngủ thế nào?\nNữ: Ngủ không ngon.\nNam: Tôi kê cho chị ít thuốc, uống thuốc rồi ngủ một giấc thật ngon là hết đau đầu.\nHỏi: Bây giờ người phụ nữ đang ở đâu? → Bệnh viện (đang khám bác sĩ).' },
          { n: 10, options: [
            { key: 'A', text: '白色' },
            { key: 'B', text: '黑色' },
            { key: 'C', text: '红色' }
          ], answer: 'A',
            script: '男：陈雪，你好！我是李文的朋友，我叫李明。\n女：李明，你好！我已经到了，穿着红色的衣服，你一出来就能看见我。\n男：太好了！我穿着一条白色的裤子，现在往外走呢。\n女：我看见你了，你往前走吧。\n问：李明穿着什么颜色的裤子？', vn: 'Nam: Chào Trần Tuyết! Mình là bạn của Lý Văn, mình tên là Lý Minh.\nNữ: Chào Lý Minh! Mình đến rồi, mình mặc áo đỏ, bạn vừa ra là thấy mình ngay.\nNam: Tốt quá! Mình mặc quần trắng, đang đi ra đây.\nNữ: Mình thấy bạn rồi, bạn cứ đi thẳng tới đi.\nHỏi: Lý Minh mặc quần màu gì? → Màu trắng (màu đỏ là áo của Trần Tuyết).' }
        ],
        reading: [
          { n: 11, part: 'Phần 1 · Chọn tranh phù hợp với câu', bank: [
            { key: 'A', img: '/images/hsk2v3-bai-11-wb/q11to13_a.jpg' },
            { key: 'B', img: '/images/hsk2v3-bai-11-wb/q11to13_b.jpg' },
            { key: 'C', img: '/images/hsk2v3-bai-11-wb/q11to13_c.jpg' },
            { key: 'D', img: '/images/hsk2v3-bai-11-wb/q11to13_d.jpg' }
          ], letters: ['A', 'B', 'C', 'D'], prompt: '这是我们店里最贵的手表。', answer: 'C',
            vn: 'Đây là chiếc đồng hồ đeo tay đắt nhất trong cửa hàng chúng tôi. — tranh C: đồng hồ đeo tay.' },
          { n: 12, letters: ['A', 'B', 'C', 'D'], prompt: '下雪时，路上的车都开得很慢。', answer: 'A',
            vn: 'Khi tuyết rơi, xe trên đường đều chạy rất chậm. — tranh A: ô tô chạy trên con đường phủ tuyết.' },
          { n: 13, letters: ['A', 'B', 'C', 'D'], prompt: '虽然吃了药，但她还是觉得疼。', answer: 'B',
            vn: 'Tuy đã uống thuốc nhưng cô ấy vẫn thấy đau. — tranh B: cô gái ôm má, nhăn mặt vì đau.' },
          { n: 14, part: 'Phần 2 · Chọn từ điền vào chỗ trống', bank: [
            { key: 'A', text: '药店' },
            { key: 'B', text: '疼' },
            { key: 'C', text: '最' },
            { key: 'D', text: '进' },
            { key: 'E', text: '完' }
          ], letters: ['A', 'B', 'C', 'D', 'E'], prompt: '我一（　）门就看见爷爷在那儿坐着。', answer: 'D',
            vn: 'Tôi vừa bước vào cửa đã thấy ông đang ngồi ở đó. — 进门: vào cửa; 一……就……: vừa… là….' },
          { n: 15, letters: ['A', 'B', 'C', 'D', 'E'], prompt: '我儿子是学校里个子（　）高的男孩儿。', answer: 'C',
            vn: 'Con trai tôi là cậu bé cao nhất trường. — 最 + tính từ: … nhất.' },
          { n: 16, letters: ['A', 'B', 'C', 'D', 'E'], prompt: '女：你怎么了？\n男：这几天我晚上没睡好，现在头很（　）。', answer: 'B',
            vn: 'Nữ: Anh sao thế? Nam: Mấy hôm nay tối nào anh cũng ngủ không ngon, giờ đầu đau lắm. — 头很疼: rất đau đầu.' },
          { n: 17, letters: ['A', 'B', 'C', 'D', 'E'], prompt: '男：请问，这儿有（　）吗？\n女：有一个，从这儿往右走，十分钟就到了。', answer: 'A',
            vn: 'Nam: Xin hỏi, ở đây có hiệu thuốc không? Nữ: Có một hiệu, từ đây đi về bên phải, mười phút là tới. — cần danh từ chỉ nơi chốn: 药店.' },
          { n: 18, part: 'Phần 3 · Ghép câu hỏi với câu trả lời', bank: [
            { key: 'A', text: '你打电话时，我正在上课呢。' },
            { key: 'B', text: '没事，我慢点儿开。' },
            { key: 'C', text: '好的，我会跟他说的。' },
            { key: 'D', text: '现在没有昨天那么疼了。' },
            { key: 'E', text: '他出去了，一会儿就回来。' }
          ], letters: ['A', 'B', 'C', 'D', 'E'], prompt: '你怎么没接电话？', answer: 'A',
            vn: 'Sao bạn không nghe điện thoại? — A: Lúc bạn gọi, mình đang trong giờ học.' },
          { n: 19, letters: ['A', 'B', 'C', 'D', 'E'], prompt: '外边下着雪，你别开车了。', answer: 'B',
            vn: 'Bên ngoài đang có tuyết, bạn đừng lái xe nữa. — B: Không sao, mình lái chậm một chút.' },
          { n: 20, letters: ['A', 'B', 'C', 'D', 'E'], prompt: '你现在动一动手，看看还疼不疼。', answer: 'D',
            vn: 'Giờ bạn cử động tay thử xem còn đau không. — D: Bây giờ không đau như hôm qua nữa.' },
          { n: 21, letters: ['A', 'B', 'C', 'D', 'E'], prompt: '爷爷身体不好，你记得让他吃药。', answer: 'C',
            vn: 'Ông sức khỏe không tốt, bạn nhớ nhắc ông uống thuốc nhé. — C: Được, mình sẽ nói với ông.' },
          { n: 22, part: 'Phần 4 · Đọc đoạn văn, chọn đáp án đúng', prompt: '女儿生病了，医生开了很多药。白色的药一天三次，绿色的药一天两次，红色的药一天一次。\n★白色的药怎么吃？', options: [
            { key: 'A', text: '一天一次' },
            { key: 'B', text: '一天两次' },
            { key: 'C', text: '一天三次' }
          ], answer: 'C',
            vn: 'Con gái bị ốm, bác sĩ kê rất nhiều thuốc. Thuốc trắng ngày ba lần, thuốc xanh lá ngày hai lần, thuốc đỏ ngày một lần. — "白色的药一天三次" → C.' },
          { n: 23, prompt: '上小学时，爷爷经常走路送我上学。上中学后，爷爷就没送过我了，学校离家远，我都是自己坐车去。\n★上小学时，爷爷是怎么送他的？', options: [
            { key: 'A', text: '开车' },
            { key: 'B', text: '坐车' },
            { key: 'C', text: '走路' }
          ], answer: 'C',
            vn: 'Hồi học tiểu học, ông thường đi bộ đưa tôi đến trường. Lên trung học thì ông không đưa tôi nữa, trường xa nhà nên tôi toàn tự đi xe. — Hồi tiểu học: "走路送我" → C (坐车 là chuyện hồi trung học).' },
          { n: 24, prompt: '我经常早早地到公司。但是今天早上我头疼，路上我开得很慢，是最晚到公司的。\n★他今天：', options: [
            { key: 'A', text: '头疼' },
            { key: 'B', text: '起床晚了' },
            { key: 'C', text: '没休息好' }
          ], answer: 'A',
            vn: 'Tôi thường đến công ty rất sớm. Nhưng sáng nay tôi đau đầu, trên đường lái xe rất chậm nên là người đến công ty muộn nhất. — "今天早上我头疼" → A (bài không nói dậy muộn hay nghỉ ngơi không đủ).' }
        ],
        writing: [
          { n: 25, part: 'Viết · Phần 1 · Chọn bộ phận ghép thành chữ', bank: [
            { key: 'A', text: '纟' },
            { key: 'B', text: '艹' },
            { key: 'C', text: '疒' },
            { key: 'D', text: '十' }
          ], letters: ['A', 'B', 'C', 'D'], prompt: '头（冬）— tóu téng', answer: 'C', vn: '疼 = 疒 + 冬 → 头疼 (đau đầu)' },
          { n: 26, letters: ['A', 'B', 'C', 'D'], prompt: '（经 còn thiếu phần bên trái）常 — jīng cháng', answer: 'A', vn: '经 = 纟 + phần bên phải (又 trên, 工 dưới) → 经常 (thường xuyên)' },
          { n: 27, letters: ['A', 'B', 'C', 'D'], prompt: '（约）店 — yào diàn', answer: 'B', vn: '药 = 艹 + 约 → 药店 (hiệu thuốc)' },
          { n: 28, part: 'Viết · Phần 2 · Viết chữ Hán theo pinyin', input: true, prompt: '李爷爷，您请（ jìn ）。', answer: '进', vn: 'Ông Lý ơi, mời ông vào ạ. — 请进: mời vào.' },
          { n: 29, input: true, prompt: '我到家（ shí ），妈妈已经做好了饭菜。', answer: '时', vn: 'Lúc tôi về đến nhà, mẹ đã nấu xong cơm nước rồi. — ……时: lúc….' },
          { n: 30, input: true, prompt: '我每天都去跑步，但是跑得很（ màn ）。', answer: '慢', vn: 'Ngày nào tôi cũng đi chạy bộ, nhưng chạy rất chậm. — V + 得 + 很慢.' }
        ] }
    ]}
  ]
};
