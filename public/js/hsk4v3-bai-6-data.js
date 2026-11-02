// HSK 4 (3.0) · Bai 6 — sinh boi tools/hsk4v3/gan.js tu tools/hsk4v3/bai-6/ (dung sua tay).
var vocabData = [
 {
  "n": 1,
  "zh": "咳嗽",
  "py": "késou",
  "pos": "Động từ",
  "vn": "ho",
  "hv": "khái thấu",
  "em": "🤧",
  "lesson": 1,
  "explain": [
   "Ho thành tiếng nhiều lần, thường do cảm lạnh, viêm họng."
  ],
  "usage": "一直咳嗽 · 有点儿咳嗽 · 咳嗽得很厉害.",
  "collo": [
   "一直咳嗽",
   "有点儿咳嗽",
   "咳嗽得很厉害",
   "咳嗽药"
  ],
  "colloFull": [
   {
    "zh": "一直咳嗽",
    "py": "Yìzhí késou",
    "vn": "ho suốt"
   },
   {
    "zh": "有点儿咳嗽",
    "py": "Yǒudiǎnr késou",
    "vn": "hơi ho"
   },
   {
    "zh": "咳嗽得很厉害",
    "py": "Késou de hěn lìhai",
    "vn": "ho rất dữ"
   },
   {
    "zh": "咳嗽药",
    "py": "Késou yào",
    "vn": "thuốc ho"
   }
  ],
  "patterns": [
   {
    "s": "咳嗽 + 得 + 很厉害",
    "m": "Ho rất dữ (Bài 6 · điểm 1)"
   },
   {
    "s": "一直 / 有点儿 + 咳嗽",
    "m": "Ho suốt / hơi ho"
   }
  ],
  "ex_zh": "对，我还发烧，一直咳嗽，咳得很厉害。",
  "ex_py": "Duì, wǒ hái fāshāo, yìzhí késou, ké de hěn lìhai.",
  "ex_vn": "Ừ, tớ còn sốt nữa, ho suốt, ho dữ lắm.",
  "exList": [
   {
    "zh": "对，我还发烧，一直咳嗽，咳得很厉害。",
    "py": "Duì, wǒ hái fāshāo, yìzhí késou, ké de hěn lìhai.",
    "vn": "Ừ, tớ còn sốt nữa, ho suốt, ho dữ lắm."
   },
   {
    "zh": "他咳嗽了好几天了，至少应该去医院看看。",
    "py": "Tā késou le hǎo jǐ tiān le, zhìshǎo yīnggāi qù yīyuàn kàn kàn.",
    "vn": "Anh ấy ho mấy ngày rồi, ít nhất cũng nên đi bệnh viện khám xem sao."
   }
  ],
  "hanzi": [
   {
    "c": "咳",
    "p": "ké",
    "type": "左右结构 · Trái-phải",
    "st": 9,
    "ord": "口 (khẩu) trái → 亥 (hợi) phải",
    "rad": "口 (khẩu – miệng)",
    "mean": "ho",
    "tip": "Bộ miệng 口 (âm thanh phát ra) + 亥(biểu âm) → âm thanh HO từ miệng, kết hợp 嗽(cũng liên quan họng) thành 咳嗽 = HO.",
    "cf": "孩 (hái – \"trẻ con\", bộ 子\")",
    "w": "咳嗽 / 咳血"
   },
   {
    "c": "嗽",
    "p": "sou",
    "type": "形声字 · Chữ hình thanh",
    "st": 14,
    "ord": "口 → 敕 (束 → 欠)",
    "rad": "口 (khẩu – miệng)",
    "mean": "ho",
    "tip": "Bộ 口 (miệng) + 敕 (chỉ âm): tiếng phát ra từ miệng khi ho. Hầu như chỉ gặp trong 咳嗽, đọc nhẹ sou.",
    "cf": "漱 shù (súc miệng) — bên trái là 氵",
    "w": "咳嗽 / 咳嗽药"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Hai hôm nay tôi hơi ho, không biết có phải bị cảm không.",
    "answer": "我这两天有点儿咳嗽，不知道是不是感冒了。",
    "answerPy": "Wǒ zhè liǎng tiān yǒudiǎnr késou, bù zhīdao shì bu shì gǎnmào le.",
    "note": "Bài tập chọn từ của sách (câu 2).",
    "pair": "有点儿 + 咳嗽"
   },
   {
    "promptLang": "vi",
    "prompt": "Anh ấy không những ho mà còn sốt nữa.",
    "answer": "他不仅咳嗽，而且还发烧。",
    "answerPy": "Tā bùjǐn késou, érqiě hái fāshāo.",
    "note": "Ôn 不仅……而且…… (Bài 3 · điểm 2).",
    "pair": "不仅……而且……"
   }
  ]
 },
 {
  "n": 2,
  "zh": "咳",
  "py": "ké",
  "pos": "Động từ",
  "vn": "ho (khục khục)",
  "hv": "khái",
  "em": "😷",
  "lesson": 1,
  "explain": [
   "Ho. Khi phía sau có bổ ngữ 得 / số lần, người Trung Quốc hay dùng một chữ 咳: 咳得很厉害, 咳了几声."
  ],
  "usage": "咳得很厉害 · 咳了几声 · 咳了一夜.",
  "collo": [
   "咳得很厉害",
   "咳了几声",
   "咳了一夜",
   "咳出来"
  ],
  "colloFull": [
   {
    "zh": "咳得很厉害",
    "py": "Ké de hěn lìhai",
    "vn": "ho rất dữ"
   },
   {
    "zh": "咳了几声",
    "py": "Ké le jǐ shēng",
    "vn": "ho mấy tiếng"
   },
   {
    "zh": "咳了一夜",
    "py": "Ké le yí yè",
    "vn": "ho cả đêm"
   },
   {
    "zh": "咳出来",
    "py": "Ké chū lái",
    "vn": "ho ra"
   }
  ],
  "patterns": [
   {
    "s": "咳嗽，咳 + 得 + 很厉害",
    "m": "Lặp động từ: lần sau chỉ cần một chữ 咳"
   },
   {
    "s": "咳 + 了 + 一夜 / 几声",
    "m": "Thời lượng / số lần"
   }
  ],
  "ex_zh": "对，我还发烧，一直咳嗽，咳得很厉害。",
  "ex_py": "Duì, wǒ hái fāshāo, yìzhí késou, ké de hěn lìhai.",
  "ex_vn": "Ừ, tớ còn sốt nữa, ho suốt, ho dữ lắm.",
  "exList": [
   {
    "zh": "对，我还发烧，一直咳嗽，咳得很厉害。",
    "py": "Duì, wǒ hái fāshāo, yìzhí késou, ké de hěn lìhai.",
    "vn": "Ừ, tớ còn sốt nữa, ho suốt, ho dữ lắm."
   },
   {
    "zh": "他昨天晚上咳了一夜，一点儿都没睡好。",
    "py": "Tā zuótiān wǎnshang ké le yí yè, yìdiǎnr dōu méi shuì hǎo.",
    "vn": "Tối qua anh ấy ho cả đêm, chẳng ngủ được chút nào."
   }
  ],
  "hanzi": [
   {
    "c": "咳",
    "p": "hāi",
    "type": "左右结构 · Trái-phải",
    "st": 9,
    "ord": "口 (khẩu) trái → 亥 (hợi) phải",
    "rad": "口 (khẩu – miệng)",
    "mean": "ho",
    "tip": "Bộ miệng 口 (âm thanh phát ra) + 亥(biểu âm) → âm thanh HO từ miệng, kết hợp 嗽(cũng liên quan họng) thành 咳嗽 = HO.",
    "cf": "孩 (hái – \"trẻ con\", bộ 子\")",
    "w": "咳嗽 / 咳血"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Cô ấy ho rất dữ, giọng cũng khàn đi rồi.",
    "answer": "她咳得很厉害，声音都变了。",
    "answerPy": "Tā ké de hěn lìhai, shēngyīn dōu biàn le.",
    "note": "咳 + 得 + 厉害 (Bài 6 · điểm 1).",
    "pair": "V得很厉害"
   },
   {
    "promptLang": "vi",
    "prompt": "Ho dữ như thế, e là không đi làm nổi rồi.",
    "answer": "咳得这么厉害，恐怕上不了班了。",
    "answerPy": "Ké de zhème lìhai, kǒngpà shàng bù liǎo bān le.",
    "note": "Ôn bổ ngữ khả năng V不了 (Bài 4 · điểm 1).",
    "pair": "V不了"
   }
  ]
 },
 {
  "n": 3,
  "zh": "厉害",
  "py": "lìhai",
  "pos": "Tính từ",
  "vn": "dữ dội, ghê gớm, kinh khủng; (khẩu ngữ) giỏi, “đỉnh”",
  "hv": "lệ hại",
  "em": "🔥",
  "lesson": 1,
  "explain": [
   "Mức độ rất cao (đau, ho, cay, gió…); hay đứng sau 得 làm bổ ngữ.",
   "Khẩu ngữ: rất giỏi, rất “đỉnh” — 你真厉害！"
  ],
  "usage": "疼得厉害 · 咳得很厉害 · 辣得厉害 · 你真厉害！",
  "collo": [
   "疼得厉害",
   "病得很厉害",
   "辣得厉害",
   "真厉害"
  ],
  "colloFull": [
   {
    "zh": "疼得厉害",
    "py": "Téng de lìhai",
    "vn": "đau dữ dội"
   },
   {
    "zh": "病得很厉害",
    "py": "Bìng de hěn lìhai",
    "vn": "ốm nặng"
   },
   {
    "zh": "辣得厉害",
    "py": "Là de lìhai",
    "vn": "cay kinh khủng"
   },
   {
    "zh": "真厉害",
    "py": "Zhēn lìhai",
    "vn": "giỏi thật"
   }
  ],
  "patterns": [
   {
    "s": "V / Adj + 得 + (很) + 厉害",
    "m": "Mức độ rất cao (Bài 6 · điểm 1)"
   },
   {
    "s": "厉害 (lệ hại) ≠ 利害 (lợi hại)",
    "m": "Tiếng Việt “lợi hại” dễ làm em viết nhầm 利 — đúng là 厉"
   }
  ],
  "ex_zh": "对，我还发烧，一直咳嗽，咳得很厉害。",
  "ex_py": "Duì, wǒ hái fāshāo, yìzhí késou, ké de hěn lìhai.",
  "ex_vn": "Ừ, tớ còn sốt nữa, ho suốt, ho dữ lắm.",
  "exList": [
   {
    "zh": "对，我还发烧，一直咳嗽，咳得很厉害。",
    "py": "Duì, wǒ hái fāshāo, yìzhí késou, ké de hěn lìhai.",
    "vn": "Ừ, tớ còn sốt nữa, ho suốt, ho dữ lắm."
   },
   {
    "zh": "他才学了一年中文，就能当翻译了，真厉害！",
    "py": "Tā cái xué le yì nián Zhōngwén, jiù néng dāng fānyì le, zhēn lìhai!",
    "vn": "Cậu ấy mới học tiếng Trung một năm mà đã làm phiên dịch được rồi, giỏi thật!"
   }
  ],
  "hanzi": [
   {
    "c": "厉",
    "p": "lì",
    "type": "半包围结构 · Bán bao vây (giản thể)",
    "st": 5,
    "ord": "厂 bao ngoài → 万 trong",
    "rad": "厂 (hán)",
    "mean": "nghiêm khắc, mãnh liệt",
    "tip": "Chữ giản thể mang nghĩa MÃNH LIỆT, NGHIÊM KHẮC, kết hợp 害(hại, mức độ) thành 厉害 = LỢI HẠI, mức độ vượt trội đáng nể.",
    "cf": "历 (lì – \"trải qua\", tự dạng gần giống)",
    "w": "厉害 / 严厉 / 厉声"
   },
   {
    "c": "害",
    "p": "hài",
    "type": "形声字 · Chữ hình thanh",
    "st": 10,
    "ord": "宀 → 丰 → 口",
    "rad": "宀 (miên – mái nhà)",
    "mean": "hại, làm hại; mắc (bệnh)",
    "tip": "Mái nhà 宀 + 丰 + 口 (miệng): lời nói (口) trong nhà gây ra điều hại. 厉害 = dữ dội; 害怕 = sợ.",
    "cf": "割 gē (cắt) — thêm 刂 bên phải; 宽 kuān (rộng) — cũng bộ 宀",
    "w": "厉害 / 害怕 / 伤害"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Hôm qua tôi chạy bộ nhiều quá, hôm nay chân đau dữ lắm.",
    "answer": "我昨天跑步跑多了，今天腿疼得厉害。",
    "answerPy": "Wǒ zuótiān pǎobù pǎo duō le, jīntiān tuǐ téng de lìhai.",
    "note": "Ví dụ của sách (Bài 6 · điểm 1).",
    "pair": "Adj + 得 + 厉害"
   },
   {
    "promptLang": "vi",
    "prompt": "Gió to quá, đợi gió nhỏ rồi chúng ta hãy đi.",
    "answer": "风刮得很厉害，等风小了咱们再走吧。",
    "answerPy": "Fēng guā de hěn lìhai, děng fēng xiǎo le zánmen zài zǒu ba.",
    "note": "Ôn 等……再…… (Bài 5 · điểm 4).",
    "pair": "等……再……"
   }
  ]
 },
 {
  "n": 4,
  "zh": "严重",
  "py": "yánzhòng",
  "pos": "Tính từ",
  "vn": "nghiêm trọng, nặng",
  "hv": "nghiêm trọng",
  "em": "⚠️",
  "lesson": 1,
  "explain": [
   "Tình hình xấu, nguy hiểm, ảnh hưởng lớn: bệnh nặng, vấn đề nghiêm trọng."
  ],
  "usage": "很严重 · 严重的问题 · 病得很严重 · 不太严重.",
  "collo": [
   "很严重",
   "严重的问题",
   "病得很严重",
   "不太严重"
  ],
  "colloFull": [
   {
    "zh": "很严重",
    "py": "Hěn yánzhòng",
    "vn": "rất nghiêm trọng"
   },
   {
    "zh": "严重的问题",
    "py": "Yánzhòng de wèntí",
    "vn": "vấn đề nghiêm trọng"
   },
   {
    "zh": "病得很严重",
    "py": "Bìng de hěn yánzhòng",
    "vn": "ốm rất nặng"
   },
   {
    "zh": "不太严重",
    "py": "Bú tài yánzhòng",
    "vn": "không nặng lắm"
   }
  ],
  "patterns": [
   {
    "s": "病 / 问题 / 情况 + 很严重",
    "m": "严重 dùng cho bệnh, vấn đề, hậu quả (nghĩa xấu)"
   },
   {
    "s": "严重 ≠ 厉害",
    "m": "严重 chỉ nói chuyện xấu; 厉害 còn có nghĩa “giỏi”"
   }
  ],
  "ex_zh": "那挺严重的，最好赶快去医院检查一下。",
  "ex_py": "Nà tǐng yánzhòng de, zuìhǎo gǎnkuài qù yīyuàn jiǎnchá yíxià.",
  "ex_vn": "Thế thì khá nặng đấy, tốt nhất mau đi bệnh viện khám đi.",
  "exList": [
   {
    "zh": "那挺严重的，最好赶快去医院检查一下。",
    "py": "Nà tǐng yánzhòng de, zuìhǎo gǎnkuài qù yīyuàn jiǎnchá yíxià.",
    "vn": "Thế thì khá nặng đấy, tốt nhất mau đi bệnh viện khám đi."
   },
   {
    "zh": "他的病并不严重，休息几天就好了。",
    "py": "Tā de bìng bìng bù yánzhòng, xiūxi jǐ tiān jiù hǎo le.",
    "vn": "Bệnh của anh ấy thật ra không nặng, nghỉ mấy hôm là khỏi."
   }
  ],
  "hanzi": [
   {
    "c": "严",
    "p": "yán",
    "type": "上下结构 · Trên-dưới",
    "st": 7,
    "ord": "一 → 业 → 厂",
    "rad": "一 (nhất)",
    "mean": "nghiêm",
    "tip": "Giản thể của 嚴 → NGHIÊM. 严格 = nghiêm ngặt; 严重 = nghiêm trọng (Bài 8).",
    "cf": "亚 (yà – Á)",
    "w": "严格 / 严重"
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
    "prompt": "Vấn đề này rất nghiêm trọng, chúng ta phải nghĩ cách giải quyết ngay.",
    "answer": "这个问题很严重，我们必须马上想办法解决。",
    "answerPy": "Zhège wèntí hěn yánzhòng, wǒmen bìxū mǎshàng xiǎng bànfǎ jiějué.",
    "note": "Bài tập chọn từ của sách (câu 4).",
    "pair": "很严重"
   },
   {
    "promptLang": "vi",
    "prompt": "Bệnh của cô ấy thật ra không nặng, uống thuốc mấy hôm là khỏi.",
    "answer": "她的病并不严重，吃几天药就好了。",
    "answerPy": "Tā de bìng bìng bù yánzhòng, chī jǐ tiān yào jiù hǎo le.",
    "note": "Ôn 并 + 不 nhấn mạnh phủ định (Bài 2 · điểm 3).",
    "pair": "并不……"
   }
  ]
 },
 {
  "n": 5,
  "zh": "赶快",
  "py": "gǎnkuài",
  "pos": "Phó từ",
  "vn": "mau, nhanh lên, ngay",
  "hv": "cản khoái",
  "em": "🏃",
  "lesson": 1,
  "explain": [
   "Làm ngay, không chần chừ; đứng trước động từ, hay dùng khi khuyên hoặc giục ai."
  ],
  "usage": "赶快 + V · 最好赶快去医院 · 赶快走吧.",
  "collo": [
   "赶快去",
   "赶快回家",
   "赶快吃药",
   "赶快告诉他"
  ],
  "colloFull": [
   {
    "zh": "赶快去",
    "py": "Gǎnkuài qù",
    "vn": "mau đi"
   },
   {
    "zh": "赶快回家",
    "py": "Gǎnkuài huí jiā",
    "vn": "mau về nhà"
   },
   {
    "zh": "赶快吃药",
    "py": "Gǎnkuài chī yào",
    "vn": "mau uống thuốc"
   },
   {
    "zh": "赶快告诉他",
    "py": "Gǎnkuài gàosu tā",
    "vn": "mau báo cho anh ấy"
   }
  ],
  "patterns": [
   {
    "s": "(最好) + 赶快 + V",
    "m": "Khuyên / giục làm ngay"
   },
   {
    "s": "赶快 ≈ 快 (khẩu ngữ)",
    "m": "赶快去吧 = 快去吧"
   }
  ],
  "ex_zh": "那挺严重的，最好赶快去医院检查一下。",
  "ex_py": "Nà tǐng yánzhòng de, zuìhǎo gǎnkuài qù yīyuàn jiǎnchá yíxià.",
  "ex_vn": "Thế thì khá nặng đấy, tốt nhất mau đi bệnh viện khám đi.",
  "exList": [
   {
    "zh": "那挺严重的，最好赶快去医院检查一下。",
    "py": "Nà tǐng yánzhòng de, zuìhǎo gǎnkuài qù yīyuàn jiǎnchá yíxià.",
    "vn": "Thế thì khá nặng đấy, tốt nhất mau đi bệnh viện khám đi."
   },
   {
    "zh": "要下雨了，我们赶快回家吧，不然就来不及了。",
    "py": "Yào xiàyǔ le, wǒmen gǎnkuài huí jiā ba, bùrán jiù láibùjí le.",
    "vn": "Sắp mưa rồi, mình mau về nhà thôi, không thì không kịp mất."
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
   },
   {
    "c": "快",
    "p": "kuài",
    "type": "形声字 · Chữ hình thanh",
    "st": 7,
    "ord": "忄 → 夬",
    "rad": "忄 (tâm)",
    "mean": "nhanh; sắp",
    "tip": "快要……了 / 就要……了 — luôn có 了 ở cuối câu.",
    "cf": "就要 (jiù yào)",
    "w": "快要 / 快要……了 / 很快"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Bạn sốt mấy hôm rồi, mau đi bệnh viện khám đi.",
    "answer": "你都发烧好几天了，赶快去医院检查一下吧。",
    "answerPy": "Nǐ dōu fāshāo hǎo jǐ tiān le, gǎnkuài qù yīyuàn jiǎnchá yíxià ba.",
    "note": "Bài tập chọn từ của sách (câu 5).",
    "pair": "赶快 + V"
   },
   {
    "promptLang": "vi",
    "prompt": "Phim sắp chiếu rồi, mau đi thôi, không thì không kịp.",
    "answer": "电影快开始了，赶快走吧，要不就来不及了。",
    "answerPy": "Diànyǐng kuài kāishǐ le, gǎnkuài zǒu ba, yàobú jiù láibùjí le.",
    "note": "Ôn 来不及 (Bài 4 · điểm 4).",
    "pair": "来不及"
   }
  ]
 },
 {
  "n": 6,
  "zh": "陪",
  "py": "péi",
  "pos": "Động từ",
  "vn": "đi cùng, ở bên, đưa (ai) đi",
  "hv": "bồi",
  "em": "🤝",
  "lesson": 1,
  "explain": [
   "Đi cùng / ở cùng ai để giúp đỡ, chăm sóc hoặc cho người đó đỡ buồn."
  ],
  "usage": "陪 + ai + (一起) + V · 陪你去看病 · 有你陪着.",
  "collo": [
   "陪你去",
   "陪朋友看病",
   "陪家人",
   "有你陪着"
  ],
  "colloFull": [
   {
    "zh": "陪你去",
    "py": "Péi nǐ qù",
    "vn": "đi cùng bạn"
   },
   {
    "zh": "陪朋友看病",
    "py": "Péi péngyou kànbìng",
    "vn": "đưa bạn đi khám bệnh"
   },
   {
    "zh": "陪家人",
    "py": "Péi jiārén",
    "vn": "ở bên gia đình"
   },
   {
    "zh": "有你陪着",
    "py": "Yǒu nǐ péi zhe",
    "vn": "có bạn ở bên"
   }
  ],
  "patterns": [
   {
    "s": "A + 陪 + B + (一起) + V",
    "m": "A đi cùng B làm gì (B là người được giúp)"
   },
   {
    "s": "有 + ai + 陪着，……就……",
    "m": "Có ai ở bên thì …"
   }
  ],
  "ex_zh": "没关系，我陪你一起去，还能帮你翻译。",
  "ex_py": "Méiguānxì, wǒ péi nǐ yìqǐ qù, hái néng bāng nǐ fānyì.",
  "ex_vn": "Không sao, tớ đi cùng cậu, còn phiên dịch giúp cậu được nữa.",
  "exList": [
   {
    "zh": "没关系，我陪你一起去，还能帮你翻译。",
    "py": "Méiguānxì, wǒ péi nǐ yìqǐ qù, hái néng bāng nǐ fānyì.",
    "vn": "Không sao, tớ đi cùng cậu, còn phiên dịch giúp cậu được nữa."
   },
   {
    "zh": "周末我要在家陪父母，不能跟你们出去玩了。",
    "py": "Zhōumò wǒ yào zài jiā péi fù mǔ, bù néng gēn nǐmen chūqù wán le.",
    "vn": "Cuối tuần tôi phải ở nhà với bố mẹ, không đi chơi với các bạn được."
   }
  ],
  "hanzi": [
   {
    "c": "陪",
    "p": "péi",
    "type": "左右结构 · Trái-phải",
    "st": 10,
    "ord": "阝 (phụ) trái → 咅 phải",
    "rad": "阝 (phụ – gò đất)",
    "mean": "đi cùng, tháp tùng",
    "tip": "Bộ 阝(gò đất, biểu thị đi theo địa hình) + 咅(biểu âm) → ĐI CÙNG, THEO SÁT bên cạnh ai đó.",
    "cf": "陪 dễ nhầm với 部 (bù – \"bộ phận\", bộ 阝 bên phải)",
    "w": "陪 / 陪伴 / 陪同"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Không sao, tôi đi cùng bạn, còn có thể phiên dịch giúp bạn.",
    "answer": "没关系，我陪你一起去，还能帮你翻译。",
    "answerPy": "Méiguānxì, wǒ péi nǐ yìqǐ qù, hái néng bāng nǐ fānyì.",
    "note": "Câu trong bài khoá 1.",
    "pair": "陪 + ai + 去"
   },
   {
    "promptLang": "vi",
    "prompt": "Bạn dám xem phim này một mình không? Tôi xem cùng bạn nhé.",
    "answer": "你敢一个人看这个电影吗？我陪你一起看吧。",
    "answerPy": "Nǐ gǎn yí gèrén kàn zhège diànyǐng ma? Wǒ péi nǐ yìqǐ kàn ba.",
    "note": "Bài tập SGK; ôn 敢 (từ mới Bài 5).",
    "pair": "陪 + ai + 一起 + V"
   }
  ]
 },
 {
  "n": 7,
  "zh": "翻译",
  "py": "fānyì",
  "pos": "Động từ / Danh từ",
  "vn": "phiên dịch, dịch; người phiên dịch",
  "hv": "phiên dịch",
  "em": "🔤",
  "lesson": 1,
  "explain": [
   "Động từ: dịch (nói hoặc viết) từ tiếng này sang tiếng khác.",
   "Danh từ: người phiên dịch."
  ],
  "usage": "帮 + ai + 翻译 · 翻译成中文 · 当翻译.",
  "collo": [
   "帮你翻译",
   "翻译成中文",
   "当翻译",
   "一名翻译"
  ],
  "colloFull": [
   {
    "zh": "帮你翻译",
    "py": "Bāng nǐ fānyì",
    "vn": "dịch giúp bạn"
   },
   {
    "zh": "翻译成中文",
    "py": "Fānyì chéng Zhōngwén",
    "vn": "dịch sang tiếng Trung"
   },
   {
    "zh": "当翻译",
    "py": "Dāng fānyì",
    "vn": "làm phiên dịch"
   },
   {
    "zh": "一名翻译",
    "py": "Yì míng fānyì",
    "vn": "một phiên dịch viên"
   }
  ],
  "patterns": [
   {
    "s": "把 + A + 翻译成 + ngôn ngữ",
    "m": "Dịch A sang tiếng …"
   },
   {
    "s": "当 / 找 + 翻译",
    "m": "翻译 là danh từ (người phiên dịch)"
   }
  ],
  "ex_zh": "没关系，我陪你一起去，还能帮你翻译。",
  "ex_py": "Méiguānxì, wǒ péi nǐ yìqǐ qù, hái néng bāng nǐ fānyì.",
  "ex_vn": "Không sao, tớ đi cùng cậu, còn phiên dịch giúp cậu được nữa.",
  "exList": [
   {
    "zh": "没关系，我陪你一起去，还能帮你翻译。",
    "py": "Méiguānxì, wǒ péi nǐ yìqǐ qù, hái néng bāng nǐ fānyì.",
    "vn": "Không sao, tớ đi cùng cậu, còn phiên dịch giúp cậu được nữa."
   },
   {
    "zh": "请把这句话翻译成越南语。",
    "py": "Qǐng bǎ zhè jù huà fānyì chéng Yuènán yǔ.",
    "vn": "Hãy dịch câu này sang tiếng Việt."
   }
  ],
  "hanzi": [
   {
    "c": "翻",
    "p": "fān",
    "type": "形声字 · Chữ hình thanh",
    "st": 18,
    "ord": "番 → 羽",
    "rad": "羽 (vũ – lông vũ)",
    "mean": "lật, trở; dịch (từ tiếng này sang tiếng khác)",
    "tip": "番 fān (chỉ âm) + 羽 (cánh chim): chim vỗ cánh lật qua lật lại — 翻书 (lật sách), 翻译 (lật từ tiếng này sang tiếng kia).",
    "cf": "番 fān (lần, lượt) — không có 羽",
    "w": "翻译 / 翻书 / 翻开"
   },
   {
    "c": "译",
    "p": "yì",
    "type": "左右结构 · Trái-phải (giản thể)",
    "st": 7,
    "ord": "讠 (ngôn) trái → 尺(biến thể) phải",
    "rad": "讠 (ngôn – lời nói)",
    "mean": "dịch",
    "tip": "Bộ lời nói 讠 + 尺(biểu âm) → chuyển đổi LỜI NÓI sang ngôn ngữ khác, kết hợp 翻(lật, chuyển) thành 翻译 = PHIÊN DỊCH.",
    "cf": "泽 (zé – \"ân trạch/đầm\", bộ 氵\")",
    "w": "翻译 / 口译 / 笔译"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Nếu sợ nghe không hiểu bác sĩ nói thì có thể tìm một người phiên dịch.",
    "answer": "要是怕听不懂医生说的话，就可以找个翻译。",
    "answerPy": "Yàoshi pà tīng bù dǒng yīshēng shuō dehuà, jiù kěyǐ zhǎo gè fānyì.",
    "note": "Ôn 要是……就…… (Bài 1 · điểm 2).",
    "pair": "要是……就……"
   },
   {
    "promptLang": "vi",
    "prompt": "Cô ấy vừa biết tiếng Anh vừa biết tiếng Trung, đã làm phiên dịch ở công ty ba năm.",
    "answer": "她既会英文又会中文，在公司当了三年翻译。",
    "answerPy": "Tā jì huì yīng wén yòu huì Zhōngwén, zài gōngsī dāng le sān nián fānyì.",
    "note": "Ôn 既……又…… (Bài 4 · điểm 3).",
    "pair": "既……又……"
   }
  ]
 },
 {
  "n": 8,
  "zh": "护士",
  "py": "hùshi",
  "pos": "Danh từ",
  "vn": "y tá, điều dưỡng",
  "hv": "hộ sĩ",
  "em": "👩‍⚕️",
  "lesson": 2,
  "explain": [
   "Người làm ở bệnh viện, chăm sóc bệnh nhân và hỗ trợ bác sĩ. Hán Việt “hộ sĩ” — không phải bác sĩ (医生)."
  ],
  "usage": "问护士 · 一名护士 · 当护士.",
  "collo": [
   "问护士",
   "一名护士",
   "当护士",
   "护士站"
  ],
  "colloFull": [
   {
    "zh": "问护士",
    "py": "Wèn hùshi",
    "vn": "hỏi y tá"
   },
   {
    "zh": "一名护士",
    "py": "Yì míng hùshi",
    "vn": "một y tá"
   },
   {
    "zh": "当护士",
    "py": "Dāng hùshi",
    "vn": "làm y tá"
   },
   {
    "zh": "护士站",
    "py": "Hùshi zhàn",
    "vn": "phòng trực y tá"
   }
  ],
  "patterns": [
   {
    "s": "护士 ≠ 医生",
    "m": "护士 chăm sóc, tiêm, đo nhiệt độ; 医生 khám, chẩn đoán, kê đơn"
   }
  ],
  "ex_zh": "护士，您好，我的这位外国朋友生病了，第一次来这里看病，需要怎么做？",
  "ex_py": "Hùshi, nín hǎo, wǒ de zhè wèi wàiguó péngyou shēngbìng le, dì yī cì lái zhèli kànbìng, xūyào zěnme zuò?",
  "ex_vn": "Chào chị y tá, người bạn nước ngoài này của tôi bị ốm, lần đầu đến đây khám, cần làm thế nào ạ?",
  "exList": [
   {
    "zh": "护士，您好，我的这位外国朋友生病了，第一次来这里看病，需要怎么做？",
    "py": "Hùshi, nín hǎo, wǒ de zhè wèi wàiguó péngyou shēngbìng le, dì yī cì lái zhèli kànbìng, xūyào zěnme zuò?",
    "vn": "Chào chị y tá, người bạn nước ngoài này của tôi bị ốm, lần đầu đến đây khám, cần làm thế nào ạ?"
   },
   {
    "zh": "她妈妈是一名护士，每天工作都很忙。",
    "py": "Tā māma shì yì míng hùshi, měi tiān gōngzuò dōu hěn máng.",
    "vn": "Mẹ cô ấy là y tá, ngày nào cũng làm việc rất bận."
   }
  ],
  "hanzi": [
   {
    "c": "护",
    "p": "hù",
    "type": "左右结构 · Trái-phải (giản thể)",
    "st": 7,
    "ord": "扌 (thủ) trái → 户 phải",
    "rad": "扌 (thủ – tay)",
    "mean": "che chở",
    "tip": "Bộ tay 扌 + 户(cửa) → dùng tay CHE CHỞ cửa nhà, kết hợp 保(giữ) thành 保护 = BẢO VỆ.",
    "cf": "护 cùng nhóm 同字词: 护照 / 保护 / 护士",
    "w": "保护 / 护照 / 护士"
   },
   {
    "c": "士",
    "p": "shì",
    "type": "独体字 · Chữ đơn",
    "st": 3,
    "ord": "一(nét ngang dài) trên → 十 dưới",
    "rad": "士 (sĩ – tự thành bộ)",
    "mean": "người có học vấn/địa vị, chiến sĩ, học vị",
    "tip": "Nét ngang trên DÀI hơn nét dưới, tượng trưng người có ĐỊA VỊ vững vàng, đứng thẳng → dùng làm kính ngữ như trong 女士, tương tự 先生.",
    "cf": "土 (tǔ – \"đất\", nét ngang trên NGẮN hơn nét dưới, ngược với 士\")",
    "w": "女士 / 士兵 / 博士"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Chúng ta qua hỏi y tá xem khám răng phải lên tầng mấy.",
    "answer": "咱们过去问问护士，看牙应该去几楼。",
    "answerPy": "Zánmen guòqù wèn wèn hùshi, kàn yá yīnggāi qù jǐ lóu.",
    "note": "Bài tập chọn từ của sách (câu 1).",
    "pair": "问问 + ai"
   },
   {
    "promptLang": "vi",
    "prompt": "Y tá ở bệnh viện này không những nhiệt tình mà còn rất kiên nhẫn.",
    "answer": "这家医院的护士不仅很热情，而且很有耐心。",
    "answerPy": "Zhè jiā yīyuàn de hùshi bùjǐn hěn rèqíng, érqiě hěn yǒu nàixīn.",
    "note": "Ôn 不仅……而且…… (Bài 3 · điểm 2).",
    "pair": "不仅……而且……"
   }
  ]
 },
 {
  "n": 9,
  "zh": "表",
  "py": "biǎo",
  "pos": "Danh từ",
  "vn": "tờ khai, mẫu đơn, bảng (biểu)",
  "hv": "biểu",
  "em": "📋",
  "lesson": 2,
  "explain": [
   "Tờ giấy kẻ ô để điền thông tin: tờ khai, bảng biểu. Lưu ý: 表 còn là đồng hồ đeo tay (手表) — nghĩa trong bài là tờ khai."
  ],
  "usage": "这张表 · 填表 · 在表上写上…….",
  "collo": [
   "一张表",
   "填表",
   "在表上写",
   "报名表"
  ],
  "colloFull": [
   {
    "zh": "一张表",
    "py": "Yì zhāng biǎo",
    "vn": "một tờ khai"
   },
   {
    "zh": "填表",
    "py": "Tián biǎo",
    "vn": "điền tờ khai"
   },
   {
    "zh": "在表上写",
    "py": "Zài biǎo shàng xiě",
    "vn": "viết vào tờ khai"
   },
   {
    "zh": "报名表",
    "py": "Bàomíng biǎo",
    "vn": "phiếu đăng ký"
   }
  ],
  "patterns": [
   {
    "s": "在 + 表 + 上 + 写上 / 填上……",
    "m": "Viết / điền vào tờ khai"
   },
   {
    "s": "一张 + 表",
    "m": "Lượng từ 张"
   }
  ],
  "ex_zh": "请在这张表上写上病人的姓名、性别、国籍、年龄、电话号码和家庭地址。",
  "ex_py": "Qǐng zài zhè zhāng biǎo shàng xiě shàng bìngrén de xìngmíng, xìngbié, guójí, niánlíng, diànhuà hàomǎ hé jiātíng dìzhǐ.",
  "ex_vn": "Mời anh viết vào tờ khai này họ tên, giới tính, quốc tịch, tuổi, số điện thoại và địa chỉ nhà của bệnh nhân.",
  "exList": [
   {
    "zh": "请在这张表上写上病人的姓名、性别、国籍、年龄、电话号码和家庭地址。",
    "py": "Qǐng zài zhè zhāng biǎo shàng xiě shàng bìngrén de xìngmíng, xìngbié, guójí, niánlíng, diànhuà hàomǎ hé jiātíng dìzhǐ.",
    "vn": "Mời anh viết vào tờ khai này họ tên, giới tính, quốc tịch, tuổi, số điện thoại và địa chỉ nhà của bệnh nhân."
   },
   {
    "zh": "办签证的时候要先填一张表。",
    "py": "Bàn qiānzhèng de shíhou yào xiān tián yì zhāng biǎo.",
    "vn": "Khi làm visa phải điền một tờ khai trước."
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
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Mời viết họ tên, tuổi và số điện thoại vào tờ khai này.",
    "answer": "请在这张表上写上姓名、年龄和电话号码。",
    "answerPy": "Qǐng zài zhè zhāng biǎo shàng xiě shàng xìngmíng, niánlíng hé diànhuà hàomǎ.",
    "note": "Câu gần bài khoá 2.",
    "pair": "在……上写上……"
   },
   {
    "promptLang": "vi",
    "prompt": "Đến bệnh viện, trước hết điền một tờ khai, sau đó đi lấy số.",
    "answer": "到了医院，先填一张表，然后去挂号。",
    "answerPy": "Dào le yīyuàn, xiān tián yì zhāng biǎo, ránhòu qù guàhào.",
    "note": "Ôn 先……然后…… (HSK 3).",
    "pair": "先……然后……"
   }
  ]
 },
 {
  "n": 10,
  "zh": "性别",
  "py": "xìngbié",
  "pos": "Danh từ",
  "vn": "giới tính",
  "hv": "tính biệt",
  "em": "⚧️",
  "lesson": 2,
  "explain": [
   "Nam hay nữ; hay gặp trong tờ khai, hồ sơ."
  ],
  "usage": "性别：男 / 女 · 写上性别.",
  "collo": [
   "写上性别",
   "性别：男",
   "性别：女",
   "性别不同"
  ],
  "colloFull": [
   {
    "zh": "写上性别",
    "py": "Xiě shàng xìngbié",
    "vn": "ghi giới tính"
   },
   {
    "zh": "性别：男",
    "py": "Xìngbié: nán",
    "vn": "giới tính: nam"
   },
   {
    "zh": "性别：女",
    "py": "Xìngbié: nǚ",
    "vn": "giới tính: nữ"
   },
   {
    "zh": "性别不同",
    "py": "Xìngbié bùtóng",
    "vn": "khác giới tính"
   }
  ],
  "patterns": [
   {
    "s": "姓名 · 性别 · 国籍 · 年龄 · 地址",
    "m": "Các mục thường gặp trên tờ khai"
   }
  ],
  "ex_zh": "请在这张表上写上病人的姓名、性别、国籍、年龄、电话号码和家庭地址。",
  "ex_py": "Qǐng zài zhè zhāng biǎo shàng xiě shàng bìngrén de xìngmíng, xìngbié, guójí, niánlíng, diànhuà hàomǎ hé jiātíng dìzhǐ.",
  "ex_vn": "Mời anh viết vào tờ khai này họ tên, giới tính, quốc tịch, tuổi, số điện thoại và địa chỉ nhà của bệnh nhân.",
  "exList": [
   {
    "zh": "请在这张表上写上病人的姓名、性别、国籍、年龄、电话号码和家庭地址。",
    "py": "Qǐng zài zhè zhāng biǎo shàng xiě shàng bìngrén de xìngmíng, xìngbié, guójí, niánlíng, diànhuà hàomǎ hé jiātíng dìzhǐ.",
    "vn": "Mời anh viết vào tờ khai này họ tên, giới tính, quốc tịch, tuổi, số điện thoại và địa chỉ nhà của bệnh nhân."
   },
   {
    "zh": "报名的时候，性别和年龄都要写清楚。",
    "py": "Bàomíng de shíhou, xìngbié hé niánlíng dōu yào xiě qīngchu.",
    "vn": "Khi đăng ký, giới tính và tuổi đều phải ghi rõ."
   }
  ],
  "hanzi": [
   {
    "c": "性",
    "p": "xìng",
    "type": "左右结构 · Trái-phải",
    "st": 8,
    "ord": "忄 trái → 生 phải",
    "rad": "忄 (tâm)",
    "mean": "tính",
    "tip": "Tâm 忄 + 生(sinh) → bản tính sinh ra → TÍNH. 性别 = giới tính; 性格 (Bài 8); 积极性 (Bài 15).",
    "cf": "姓 (xìng – họ, bộ 女)",
    "w": "性别 / 性格 / 积极性"
   },
   {
    "c": "别",
    "p": "bié",
    "type": "左右结构 · Trái-phải",
    "st": 7,
    "ord": "另 trái → 刂 (đao) phải",
    "rad": "刂 (đao – dao)",
    "mean": "khác biệt, chia tách",
    "tip": "Bộ dao 刂 (cắt tách ra) + 另(khác) → CHIA TÁCH RA thành cái KHÁC, kết hợp 区(khu vực) thành 区别 = SỰ KHÁC BIỆT (phân chia rạch ròi).",
    "cf": "到 (dào – \"đến\", bộ 刂 khác vị trí)",
    "w": "区别 / 区分 / 别的"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Trên tờ khai phải viết họ tên, giới tính và quốc tịch.",
    "answer": "表上要写上姓名、性别和国籍。",
    "answerPy": "Biǎo shàng yào xiě shàng xìngmíng, xìngbié hé guójí.",
    "note": "Câu gần bài khoá 2.",
    "pair": "写上……"
   },
   {
    "promptLang": "vi",
    "prompt": "Cuộc thi này không yêu cầu giới tính, bất kỳ ai cũng có thể đăng ký.",
    "answer": "这个比赛对性别没有要求，任何人都可以报名。",
    "answerPy": "Zhège bǐsài duì xìngbié méiyǒu yāoqiú, rènhé rén dōu kěyǐ bàomíng.",
    "note": "Ôn 任何……都…… (Bài 1 · điểm 1).",
    "pair": "任何……都……"
   }
  ]
 },
 {
  "n": 11,
  "zh": "国籍",
  "py": "guójí",
  "pos": "Danh từ",
  "vn": "quốc tịch",
  "hv": "quốc tịch",
  "em": "🏳️",
  "lesson": 2,
  "explain": [
   "Là công dân của nước nào."
  ],
  "usage": "国籍：越南 · 什么国籍 · 国籍不同.",
  "collo": [
   "什么国籍",
   "越南国籍",
   "国籍不同",
   "写上国籍"
  ],
  "colloFull": [
   {
    "zh": "什么国籍",
    "py": "Shénme guójí",
    "vn": "quốc tịch gì"
   },
   {
    "zh": "越南国籍",
    "py": "Yuènán guójí",
    "vn": "quốc tịch Việt Nam"
   },
   {
    "zh": "国籍不同",
    "py": "Guójí bùtóng",
    "vn": "khác quốc tịch"
   },
   {
    "zh": "写上国籍",
    "py": "Xiě shàng guójí",
    "vn": "ghi quốc tịch"
   }
  ],
  "patterns": [
   {
    "s": "Sub + 的国籍是 + tên nước",
    "m": "Nói quốc tịch"
   }
  ],
  "ex_zh": "请在这张表上写上病人的姓名、性别、国籍、年龄、电话号码和家庭地址。",
  "ex_py": "Qǐng zài zhè zhāng biǎo shàng xiě shàng bìngrén de xìngmíng, xìngbié, guójí, niánlíng, diànhuà hàomǎ hé jiātíng dìzhǐ.",
  "ex_vn": "Mời anh viết vào tờ khai này họ tên, giới tính, quốc tịch, tuổi, số điện thoại và địa chỉ nhà của bệnh nhân.",
  "exList": [
   {
    "zh": "请在这张表上写上病人的姓名、性别、国籍、年龄、电话号码和家庭地址。",
    "py": "Qǐng zài zhè zhāng biǎo shàng xiě shàng bìngrén de xìngmíng, xìngbié, guójí, niánlíng, diànhuà hàomǎ hé jiātíng dìzhǐ.",
    "vn": "Mời anh viết vào tờ khai này họ tên, giới tính, quốc tịch, tuổi, số điện thoại và địa chỉ nhà của bệnh nhân."
   },
   {
    "zh": "我们班的同学来自十几个国家，国籍都不一样。",
    "py": "Wǒmen bān de tóngxué láizì shí jǐ gè guójiā, guójí dōu bù yíyàng.",
    "vn": "Các bạn lớp tôi đến từ hơn mười nước, quốc tịch đều khác nhau."
   }
  ],
  "hanzi": [
   {
    "c": "国",
    "p": "guó",
    "type": "会意字 · Chữ hội ý",
    "st": 8,
    "ord": "囗 (nét sổ, nét ngang gập) → 玉 ở bên trong → nét ngang đóng khung viết cuối",
    "rad": "囗 (vi – vây quanh)",
    "mean": "nước, quốc gia",
    "tip": "囗 (bờ cõi bao quanh) + 玉 (ngọc – của quý): bờ cõi bảo vệ của quý → đất nước. Ôn: 中国 (HSK1 Bài 3), 外国 (HSK2 Bài 2), 出国 (HSK2 Bài 15).",
    "cf": "图 tú (图书馆 – HSK3 Bài 14) — trong 囗 là 冬",
    "w": "国家 / 中国 / 外国"
   },
   {
    "c": "籍",
    "p": "jí",
    "type": "上下结构 · Trên-dưới",
    "st": 20,
    "ord": "⺮ trên → 耤 dưới",
    "rad": "⺮ (trúc)",
    "mean": "sổ sách, tịch",
    "tip": "Trúc ⺮ + 耤 → sổ sách bằng thẻ tre → TỊCH (hộ tịch, quốc tịch). Chữ 20 nét!",
    "cf": "藉 (jiè)",
    "w": "国籍 / 书籍"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Quốc tịch của tôi là Việt Nam, có điều tôi đang sống ở Trung Quốc.",
    "answer": "我的国籍是越南，不过我住在中国。",
    "answerPy": "Wǒ de guójí shì Yuènán, búguò wǒ zhù zài Zhōngguó.",
    "note": "Ôn 不过 (Bài 2 · điểm 2).",
    "pair": "……，不过……"
   },
   {
    "promptLang": "vi",
    "prompt": "Bạn bè quốc tịch khác nhau, ai về nước nấy đón Tết.",
    "answer": "国籍不同的朋友们，各回各的国家过新年。",
    "answerPy": "Guójí bùtóng de péngyou men, gè huí gè de guójiā guò xīnnián.",
    "note": "Ôn 各V各的 (Bài 5 · điểm 3).",
    "pair": "各V各的"
   }
  ]
 },
 {
  "n": 12,
  "zh": "家庭",
  "py": "jiātíng",
  "pos": "Danh từ",
  "vn": "gia đình",
  "hv": "gia đình",
  "em": "👨‍👩‍👧",
  "lesson": 2,
  "explain": [
   "Gia đình (cha mẹ, con cái…). Hay làm định ngữ: 家庭地址, 家庭生活. Khẩu ngữ hằng ngày thường nói 家."
  ],
  "usage": "家庭地址 · 家庭生活 · 幸福的家庭.",
  "collo": [
   "家庭地址",
   "家庭生活",
   "幸福的家庭",
   "家庭作业"
  ],
  "colloFull": [
   {
    "zh": "家庭地址",
    "py": "Jiātíng dìzhǐ",
    "vn": "địa chỉ nhà"
   },
   {
    "zh": "家庭生活",
    "py": "Jiātíng shēnghuó",
    "vn": "cuộc sống gia đình"
   },
   {
    "zh": "幸福的家庭",
    "py": "Xìngfú de jiātíng",
    "vn": "gia đình hạnh phúc"
   },
   {
    "zh": "家庭作业",
    "py": "Jiātíng zuòyè",
    "vn": "bài tập về nhà"
   }
  ],
  "patterns": [
   {
    "s": "家庭 + 地址 / 生活 / 作业",
    "m": "Làm định ngữ"
   },
   {
    "s": "家庭 (trang trọng) ≈ 家 (khẩu ngữ)",
    "m": "我家 / 我的家庭"
   }
  ],
  "ex_zh": "请在这张表上写上病人的姓名、性别、国籍、年龄、电话号码和家庭地址。",
  "ex_py": "Qǐng zài zhè zhāng biǎo shàng xiě shàng bìngrén de xìngmíng, xìngbié, guójí, niánlíng, diànhuà hàomǎ hé jiātíng dìzhǐ.",
  "ex_vn": "Mời anh viết vào tờ khai này họ tên, giới tính, quốc tịch, tuổi, số điện thoại và địa chỉ nhà của bệnh nhân.",
  "exList": [
   {
    "zh": "请在这张表上写上病人的姓名、性别、国籍、年龄、电话号码和家庭地址。",
    "py": "Qǐng zài zhè zhāng biǎo shàng xiě shàng bìngrén de xìngmíng, xìngbié, guójí, niánlíng, diànhuà hàomǎ hé jiātíng dìzhǐ.",
    "vn": "Mời anh viết vào tờ khai này họ tên, giới tính, quốc tịch, tuổi, số điện thoại và địa chỉ nhà của bệnh nhân."
   },
   {
    "zh": "她有一个幸福的家庭。",
    "py": "Tā yǒu yí gè xìngfú de jiātíng.",
    "vn": "Cô ấy có một gia đình hạnh phúc."
   }
  ],
  "hanzi": [
   {
    "c": "家",
    "p": "jiā",
    "type": "上下结构 · Trên-dưới",
    "st": 10,
    "ord": "宀 (miên) trên → 豕 dưới",
    "rad": "宀 (miên – mái nhà)",
    "mean": "nhà, chuyên gia",
    "tip": "Bộ mái nhà 宀 → NHÀ, mở rộng thành hậu tố chỉ CHUYÊN GIA trong một lĩnh vực, kết hợp 作(sáng tác) thành 作家 = NHÀ VĂN.",
    "cf": "冢 (zhǒng – \"mộ phần\", ít dùng)",
    "w": "作家 / 画家 / 科学家"
   },
   {
    "c": "庭",
    "p": "tíng",
    "type": "形声字 · Chữ hình thanh",
    "st": 9,
    "ord": "广 → 廷 (壬 → 廴)",
    "rad": "广 (nghiễm – mái hiên)",
    "mean": "sân, gian nhà chính",
    "tip": "Mái nhà 广 + 廷 tíng (chỉ âm): khoảng sân, gian chính trong nhà nơi cả nhà quây quần — 家庭.",
    "cf": "挺 tǐng (khá, rất) — bên trái là 扌; 廷 tíng (triều đình) — không có 广",
    "w": "家庭 / 法庭 / 家庭地址"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Cô ấy có một gia đình hạnh phúc.",
    "answer": "她有一个幸福的家庭。",
    "answerPy": "Tā yǒu yí gè xìngfú de jiātíng.",
    "note": "一个 + ……的家庭.",
    "pair": "一个……的家庭"
   },
   {
    "promptLang": "vi",
    "prompt": "Nếu địa chỉ nhà thay đổi thì nhớ báo cho nhà trường.",
    "answer": "要是家庭地址变了，就记得通知学校。",
    "answerPy": "Yàoshi jiātíng dìzhǐ biàn le, jiù jìde tōngzhī xuéxiào.",
    "note": "Ôn 要是……就…… (Bài 1 · điểm 2) + 通知 (Bài 1).",
    "pair": "要是……就……"
   }
  ]
 },
 {
  "n": 13,
  "zh": "地址",
  "py": "dìzhǐ",
  "pos": "Danh từ",
  "vn": "địa chỉ",
  "hv": "địa chỉ",
  "em": "📍",
  "lesson": 2,
  "explain": [
   "Nơi ở / nơi làm việc ghi bằng tên đường, số nhà…"
  ],
  "usage": "家庭地址 · 写地址 · 新地址.",
  "collo": [
   "家庭地址",
   "写地址",
   "新地址",
   "留地址"
  ],
  "colloFull": [
   {
    "zh": "家庭地址",
    "py": "Jiātíng dìzhǐ",
    "vn": "địa chỉ nhà"
   },
   {
    "zh": "写地址",
    "py": "Xiě dìzhǐ",
    "vn": "viết địa chỉ"
   },
   {
    "zh": "新地址",
    "py": "Xīn dìzhǐ",
    "vn": "địa chỉ mới"
   },
   {
    "zh": "留地址",
    "py": "Liú dìzhǐ",
    "vn": "để lại địa chỉ"
   }
  ],
  "patterns": [
   {
    "s": "把 + 地址 + 给 / 告诉 + ai",
    "m": "Đưa / cho ai địa chỉ"
   }
  ],
  "ex_zh": "请在这张表上写上病人的姓名、性别、国籍、年龄、电话号码和家庭地址。",
  "ex_py": "Qǐng zài zhè zhāng biǎo shàng xiě shàng bìngrén de xìngmíng, xìngbié, guójí, niánlíng, diànhuà hàomǎ hé jiātíng dìzhǐ.",
  "ex_vn": "Mời anh viết vào tờ khai này họ tên, giới tính, quốc tịch, tuổi, số điện thoại và địa chỉ nhà của bệnh nhân.",
  "exList": [
   {
    "zh": "请在这张表上写上病人的姓名、性别、国籍、年龄、电话号码和家庭地址。",
    "py": "Qǐng zài zhè zhāng biǎo shàng xiě shàng bìngrén de xìngmíng, xìngbié, guójí, niánlíng, diànhuà hàomǎ hé jiātíng dìzhǐ.",
    "vn": "Mời anh viết vào tờ khai này họ tên, giới tính, quốc tịch, tuổi, số điện thoại và địa chỉ nhà của bệnh nhân."
   },
   {
    "zh": "你家的地址是什么？我明天去看你。",
    "py": "Nǐ jiā de dìzhǐ shì shénme? Wǒ míngtiān qù kàn nǐ.",
    "vn": "Địa chỉ nhà bạn là gì? Mai tôi đến thăm bạn."
   }
  ],
  "hanzi": [
   {
    "c": "地",
    "p": "dì",
    "type": "形声字 · Chữ hình thanh",
    "st": 6,
    "ord": "土 → 也",
    "rad": "土 (thổ – đất)",
    "mean": "đất, mặt đất; nơi, vùng",
    "tip": "土 (đất) + 也 (yě, chỉ âm) → mặt đất, vùng đất. 外地 = vùng đất bên ngoài → nơi khác. Ôn: 地方 (HSK2), 地铁 (HSK2 Bài 12).",
    "cf": "他 tā, 她 tā — cùng phần 也 bên phải",
    "w": "外地 / 地方 / 草地"
   },
   {
    "c": "址",
    "p": "zhǐ",
    "type": "左右结构 · Trái-phải",
    "st": 7,
    "ord": "土 trái → 止 phải",
    "rad": "土 (thổ)",
    "mean": "nền, chỗ",
    "tip": "Đất 土 + 止(dừng) → chỗ đất dừng chân → CHỈ (địa chỉ). 地址 = địa chỉ; 网址 = địa chỉ web.",
    "cf": "止 (zhǐ – dừng)",
    "w": "地址 / 网址"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Đưa tôi địa chỉ của bạn đi, tôi gửi cho bạn ít đồ.",
    "answer": "把你的地址给我吧，我给你寄点儿东西。",
    "answerPy": "Bǎ nǐ de dìzhǐ gěi wǒ ba, wǒ gěi nǐ jì diǎnr dōngxi.",
    "note": "Bài tập chọn từ của sách (câu 3); câu chữ 把.",
    "pair": "把……给我"
   },
   {
    "promptLang": "vi",
    "prompt": "Địa chỉ mới của bạn ít nhất phải ghi rõ số phòng.",
    "answer": "你的新地址至少要写清楚房间号。",
    "answerPy": "Nǐ de xīn dìzhǐ zhìshǎo yào xiě qīngchu fángjiān hào.",
    "note": "Ôn 至少 (Bài 5 · điểm 1).",
    "pair": "至少……"
   }
  ]
 },
 {
  "n": 14,
  "zh": "挂号",
  "py": "guàhào",
  "pos": "Động từ",
  "vn": "lấy số, đăng ký khám (ở bệnh viện)",
  "hv": "quải hiệu",
  "em": "🎟️",
  "lesson": 2,
  "explain": [
   "Đăng ký, lấy số thứ tự trước khi khám bệnh. Là động từ li hợp: 挂了号, 挂个号, 挂好号."
  ],
  "usage": "去挂号 · 排队挂号 · 网上挂号 · 挂好号.",
  "collo": [
   "去挂号",
   "排队挂号",
   "网上挂号",
   "挂好号"
  ],
  "colloFull": [
   {
    "zh": "去挂号",
    "py": "Qù guàhào",
    "vn": "đi lấy số"
   },
   {
    "zh": "排队挂号",
    "py": "Páiduì guàhào",
    "vn": "xếp hàng lấy số"
   },
   {
    "zh": "网上挂号",
    "py": "Wǎngshàng guàhào",
    "vn": "lấy số trên mạng"
   },
   {
    "zh": "挂好号",
    "py": "Guà hǎo hào",
    "vn": "lấy số xong"
   }
  ],
  "patterns": [
   {
    "s": "挂 + 了 / 个 / 好 + 号",
    "m": "Li hợp: ✗ 挂号了医生 → ✓ 挂了号"
   },
   {
    "s": "先挂号，然后再看病",
    "m": "Thứ tự khám bệnh ở Trung Quốc"
   }
  ],
  "ex_zh": "没问题，您拿着病人的护照去挂号吧。",
  "ex_py": "Méi wèntí, nín ná zhe bìngrén de hùzhào qù guàhào ba.",
  "ex_vn": "Được rồi, anh cầm hộ chiếu của bệnh nhân đi lấy số nhé.",
  "exList": [
   {
    "zh": "没问题，您拿着病人的护照去挂号吧。",
    "py": "Méi wèntí, nín ná zhe bìngrén de hùzhào qù guàhào ba.",
    "vn": "Được rồi, anh cầm hộ chiếu của bệnh nhân đi lấy số nhé."
   },
   {
    "zh": "现在很多医院都可以在网上挂号，非常方便。",
    "py": "Xiànzài hěn duō yīyuàn dōu kěyǐ zài wǎngshàng guàhào, fēicháng fāngbiàn.",
    "vn": "Bây giờ nhiều bệnh viện có thể lấy số trên mạng, rất tiện."
   }
  ],
  "hanzi": [
   {
    "c": "挂",
    "p": "guà",
    "type": "左右结构 · Trái-phải",
    "st": 9,
    "ord": "扌 trái → 圭 phải",
    "rad": "扌 (thủ)",
    "mean": "treo",
    "tip": "Tay 扌 + 圭(hai chữ 土 chồng lên) → dùng tay TREO lên. 挂号 = lấy số khám bệnh.",
    "cf": "桂 (guì – quế)",
    "w": "挂 / 挂号 / 挂电话"
   },
   {
    "c": "号",
    "p": "hào",
    "type": "上下结构 · Trên-dưới",
    "st": 5,
    "ord": "口 (khẩu - miệng) trên → 丂 (biến thể) dưới",
    "rad": "口 (khẩu – miệng)",
    "mean": "số, ngày (trong tháng), hiệu, tên gọi",
    "tip": "口 (miệng) hô to phía trên, 丂 (hơi vang) phía dưới → hình ảnh miệng HÔ, GỌI to số hiệu → nghĩa SỐ, NGÀY, TÊN HIỆU.",
    "cf": "亏 (kuī – \"thiệt hại, thua lỗ\", phần dưới giống nhau nhưng không có bộ 口 phía trên)",
    "w": "号码 / 几号 / 8号"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Khám bệnh ở Trung Quốc phải lấy số trước, rồi mới đi gặp bác sĩ.",
    "answer": "在中国看病要先挂号，然后再去找医生。",
    "answerPy": "Zài Zhōngguó kànbìng yào xiān guàhào, ránhòu zài qù zhǎo yīshēng.",
    "note": "Câu trong bài khoá 4.",
    "pair": "先……然后再……"
   },
   {
    "promptLang": "vi",
    "prompt": "Bệnh viện đông quá, đợi tôi lấy số xong sẽ gọi cho bạn.",
    "answer": "医院人太多了，等我挂好号就给你打电话。",
    "answerPy": "Yīyuàn rén tài duō le, děng wǒ guà hǎo hào jiù gěi nǐ dǎdiànhuà.",
    "note": "Ôn 等……就…… (Bài 5 · điểm 4).",
    "pair": "等……就……"
   }
  ]
 },
 {
  "n": 15,
  "zh": "排队",
  "py": "páiduì",
  "pos": "Động từ",
  "vn": "xếp hàng",
  "hv": "bài đội",
  "em": "🚶",
  "lesson": 2,
  "explain": [
   "Đứng thành hàng, đợi đến lượt. Động từ li hợp: 排了半个小时（的）队."
  ],
  "usage": "排队挂号 · 排队买票 · 排了很长时间的队.",
  "collo": [
   "排队挂号",
   "排队买票",
   "排长队",
   "请排队"
  ],
  "colloFull": [
   {
    "zh": "排队挂号",
    "py": "Páiduì guàhào",
    "vn": "xếp hàng lấy số"
   },
   {
    "zh": "排队买票",
    "py": "Páiduì mǎi piào",
    "vn": "xếp hàng mua vé"
   },
   {
    "zh": "排长队",
    "py": "Pái zhǎng duì",
    "vn": "xếp hàng dài"
   },
   {
    "zh": "请排队",
    "py": "Qǐng páiduì",
    "vn": "xin mời xếp hàng"
   }
  ],
  "patterns": [
   {
    "s": "排队 + V (mục đích)",
    "m": "Xếp hàng để làm gì: 排队买票"
   },
   {
    "s": "排了 + thời gian + 的队",
    "m": "Li hợp: 排了一个小时的队"
   }
  ],
  "ex_zh": "家月，我去排队挂号，你先在大厅休息，别着急。",
  "ex_py": "Jiāyuè, wǒ qù páiduì guàhào, nǐ xiān zài dàtīng xiūxi, bié zháojí.",
  "ex_vn": "Gia Nguyệt, tớ đi xếp hàng lấy số, cậu ngồi nghỉ ở sảnh trước, đừng sốt ruột.",
  "exList": [
   {
    "zh": "家月，我去排队挂号，你先在大厅休息，别着急。",
    "py": "Jiāyuè, wǒ qù páiduì guàhào, nǐ xiān zài dàtīng xiūxi, bié zháojí.",
    "vn": "Gia Nguyệt, tớ đi xếp hàng lấy số, cậu ngồi nghỉ ở sảnh trước, đừng sốt ruột."
   },
   {
    "zh": "这家饭馆特别有名，每天都有很多人排队。",
    "py": "Zhè jiā fànguǎn tèbié yǒumíng, měi tiān dōu yǒu hěn duō rén páiduì.",
    "vn": "Quán này rất nổi tiếng, ngày nào cũng có nhiều người xếp hàng."
   }
  ],
  "hanzi": [
   {
    "c": "排",
    "p": "pái",
    "type": "左右结构 · Trái-phải",
    "st": 11,
    "ord": "扌 trái → 非 phải",
    "rad": "扌 (thủ)",
    "mean": "xếp",
    "tip": "Tay 扌 + 非(hai hàng đối nhau) → XẾP thành hàng. 排队 = xếp hàng; 排列 = sắp xếp; 安排 = sắp đặt (Bài 6).",
    "cf": "非 (fēi – không)",
    "w": "排队 / 排列 / 安排"
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
    "prompt": "Họ đang xếp hàng làm thủ tục nhận phòng.",
    "answer": "他们正在排队办入住。",
    "answerPy": "Tāmen zhèngzài páiduì bàn rù zhù.",
    "note": "Đáp án gợi ý bài nhìn tranh của sách.",
    "pair": "正在 + 排队"
   },
   {
    "promptLang": "vi",
    "prompt": "Hàng dài thế này, ít nhất cũng phải đợi nửa tiếng.",
    "answer": "排这么长的队，至少要等半个小时。",
    "answerPy": "Pái zhème cháng de duì, zhìshǎo yào děng bàn gè xiǎoshí.",
    "note": "Ôn 至少 (Bài 5 · điểm 1).",
    "pair": "至少……"
   }
  ]
 },
 {
  "n": 16,
  "zh": "大厅",
  "py": "dàtīng",
  "pos": "Danh từ",
  "vn": "đại sảnh, sảnh",
  "hv": "đại sảnh",
  "em": "🏛️",
  "lesson": 2,
  "explain": [
   "Gian phòng lớn ở tầng trệt của bệnh viện, khách sạn, ngân hàng… nơi mọi người chờ, làm thủ tục."
  ],
  "usage": "医院大厅 · 在大厅休息 · 酒店大厅.",
  "collo": [
   "医院大厅",
   "在大厅休息",
   "酒店大厅",
   "大厅里"
  ],
  "colloFull": [
   {
    "zh": "医院大厅",
    "py": "Yīyuàn dàtīng",
    "vn": "sảnh bệnh viện"
   },
   {
    "zh": "在大厅休息",
    "py": "Zài dàtīng xiūxi",
    "vn": "nghỉ ở sảnh"
   },
   {
    "zh": "酒店大厅",
    "py": "Jiǔdiàn dàtīng",
    "vn": "sảnh khách sạn"
   },
   {
    "zh": "大厅里",
    "py": "Dàtīng lǐ",
    "vn": "trong sảnh"
   }
  ],
  "patterns": [
   {
    "s": "在 + 大厅 + V",
    "m": "Ở sảnh làm gì"
   }
  ],
  "ex_zh": "家月，我去排队挂号，你先在大厅休息，别着急。",
  "ex_py": "Jiāyuè, wǒ qù páiduì guàhào, nǐ xiān zài dàtīng xiūxi, bié zháojí.",
  "ex_vn": "Gia Nguyệt, tớ đi xếp hàng lấy số, cậu ngồi nghỉ ở sảnh trước, đừng sốt ruột.",
  "exList": [
   {
    "zh": "家月，我去排队挂号，你先在大厅休息，别着急。",
    "py": "Jiāyuè, wǒ qù páiduì guàhào, nǐ xiān zài dàtīng xiūxi, bié zháojí.",
    "vn": "Gia Nguyệt, tớ đi xếp hàng lấy số, cậu ngồi nghỉ ở sảnh trước, đừng sốt ruột."
   },
   {
    "zh": "我在酒店大厅等你，你到了给我打电话。",
    "py": "Wǒ zài jiǔdiàn dàtīng děng nǐ, nǐ dào le gěi wǒ dǎdiànhuà.",
    "vn": "Tôi đợi bạn ở sảnh khách sạn, bạn đến thì gọi cho tôi."
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
    "prompt": "Bạn ngồi nghỉ ở sảnh trước, đừng sốt ruột.",
    "answer": "你先在大厅休息，别着急。",
    "answerPy": "Nǐ xiān zài dàtīng xiūxi, bié zháojí.",
    "note": "Câu trong bài khoá 2.",
    "pair": "先……，别着急"
   },
   {
    "promptLang": "vi",
    "prompt": "Sảnh bệnh viện vừa rộng vừa sạch sẽ.",
    "answer": "医院的大厅既大又干净。",
    "answerPy": "Yīyuàn de dàtīng jì dà yòu gānjìng.",
    "note": "Ôn 既……又…… (Bài 4 · điểm 3).",
    "pair": "既……又……"
   }
  ]
 },
 {
  "n": 17,
  "zh": "偶尔",
  "py": "ǒu'ěr",
  "pos": "Phó từ / Tính từ",
  "vn": "thỉnh thoảng, đôi khi, lâu lâu",
  "hv": "ngẫu nhĩ",
  "em": "🎲",
  "lesson": 3,
  "explain": [
   "Số lần rất ít, lâu lâu mới một lần. Trái nghĩa: 经常 / 常常. Hay đi với 才 / 会 / 也."
  ],
  "usage": "偶尔 + (才 / 会 / 也) + V · 偶尔的机会.",
  "collo": [
   "偶尔生病",
   "偶尔去一次",
   "偶尔也会",
   "偶尔的机会"
  ],
  "colloFull": [
   {
    "zh": "偶尔生病",
    "py": "Ǒu'ěr shēngbìng",
    "vn": "thỉnh thoảng ốm"
   },
   {
    "zh": "偶尔去一次",
    "py": "Ǒu'ěr qù yí cì",
    "vn": "thỉnh thoảng đi một lần"
   },
   {
    "zh": "偶尔也会",
    "py": "Ǒu'ěr yě huì",
    "vn": "đôi khi cũng"
   },
   {
    "zh": "偶尔的机会",
    "py": "Ǒu'ěr de jīhuì",
    "vn": "một dịp tình cờ"
   }
  ],
  "patterns": [
   {
    "s": "一般 / 经常……，偶尔（才）……",
    "m": "Bài 6 · điểm 3"
   },
   {
    "s": "经常 > 有时候 > 偶尔",
    "m": "偶尔 còn ít hơn 有时候"
   }
  ],
  "ex_zh": "下午白家月去看病了，她告诉医生，自己平时身体不错，偶尔才会生一次病。",
  "ex_py": "Xiàwǔ Bái Jiāyuè qù kànbìng le, tā gàosu yīshēng, zìjǐ píngshí shēntǐ búcuò, ǒu'ěr cái huì shēng yí cì bìng.",
  "ex_vn": "Buổi chiều Bạch Gia Nguyệt đi khám bệnh, cô ấy nói với bác sĩ rằng bình thường mình khỏe, lâu lâu mới ốm một lần.",
  "exList": [
   {
    "zh": "下午白家月去看病了，她告诉医生，自己平时身体不错，偶尔才会生一次病。",
    "py": "Xiàwǔ Bái Jiāyuè qù kànbìng le, tā gàosu yīshēng, zìjǐ píngshí shēntǐ búcuò, ǒu'ěr cái huì shēng yí cì bìng.",
    "vn": "Buổi chiều Bạch Gia Nguyệt đi khám bệnh, cô ấy nói với bác sĩ rằng bình thường mình khỏe, lâu lâu mới ốm một lần."
   },
   {
    "zh": "我平时不喝咖啡，偶尔工作太累了才喝一杯。",
    "py": "Wǒ píngshí bù hē kāfēi, ǒu'ěr gōngzuò tài lèi le cái hē yì bēi.",
    "vn": "Bình thường tôi không uống cà phê, thỉnh thoảng làm việc mệt quá mới uống một cốc."
   }
  ],
  "hanzi": [
   {
    "c": "偶",
    "p": "ǒu",
    "type": "左右结构 · Trái-phải",
    "st": 11,
    "ord": "亻 (nhân) trái → 禺 phải",
    "rad": "亻 (nhân)",
    "mean": "ngẫu nhiên, tượng gỗ",
    "tip": "Bộ người 亻 + 禺 → nghĩa gốc là TƯỢNG NGƯỜI, mượn nghĩa NGẪU NHIÊN, kết hợp 尔 thành 偶尔 = THỈNH THOẢNG.",
    "cf": "遇 (yù – \"gặp\", bộ 辶)",
    "w": "偶尔 / 偶然 / 偶像"
   },
   {
    "c": "尔",
    "p": "ěr",
    "type": "象形字 · Chữ tượng hình",
    "st": 5,
    "ord": "丿 → 𠃌 → 小",
    "rad": "小 (tiểu – nhỏ) · bộ 丿",
    "mean": "(hậu tố, văn cổ) như thế; ngươi",
    "tip": "Chữ cổ chỉ “ngươi / như thế”; nay hay gặp làm hậu tố: 偶尔 (thỉnh thoảng), 尔后. Là phần bên phải của 你 (亻+尔).",
    "cf": "你 nǐ (bạn) — thêm 亻; 东 dōng (đông) — nét khác hẳn",
    "w": "偶尔 / 你 / 尔后"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Anh ấy hay xem phim ở nhà, thỉnh thoảng mới ra rạp xem.",
    "answer": "他经常在家看电影，偶尔才去电影院看。",
    "answerPy": "Tā jīngcháng zài jiā kàn diànyǐng, ǒu'ěr cái qù diànyǐngyuàn kàn.",
    "note": "Ví dụ của sách (Bài 6 · điểm 3).",
    "pair": "经常……，偶尔才……"
   },
   {
    "promptLang": "vi",
    "prompt": "Tôi thích ăn cay, có điều thỉnh thoảng cũng muốn ăn chút đồ ngọt.",
    "answer": "我喜欢吃辣的菜，不过偶尔也想吃点儿甜的。",
    "answerPy": "Wǒ xǐhuan chī là de cài, búguò ǒu'ěr yě xiǎng chī diǎnr tián de.",
    "note": "Đáp án gợi ý của sách; ôn 不过 (Bài 2 · điểm 2).",
    "pair": "不过偶尔也……"
   }
  ]
 },
 {
  "n": 18,
  "zh": "身",
  "py": "shēn",
  "pos": "Danh từ / Lượng từ",
  "vn": "thân, người; (lượng từ) một bộ, khắp người",
  "hv": "thân",
  "em": "🧍",
  "lesson": 3,
  "explain": [
   "Danh từ: thân thể, người (身上 = trên người).",
   "Lượng từ: 一身 — khắp cả người / một bộ (quần áo): 出了一身汗, 一身新衣服."
  ],
  "usage": "身上 · 出了一身汗 · 一身衣服.",
  "collo": [
   "出了一身汗",
   "一身衣服",
   "身上",
   "全身"
  ],
  "colloFull": [
   {
    "zh": "出了一身汗",
    "py": "Chū le yì shēn hàn",
    "vn": "toát mồ hôi khắp người"
   },
   {
    "zh": "一身衣服",
    "py": "Yì shēn yīfu",
    "vn": "một bộ quần áo"
   },
   {
    "zh": "身上",
    "py": "Shēn shàng",
    "vn": "trên người"
   },
   {
    "zh": "全身",
    "py": "Quán shēn",
    "vn": "toàn thân"
   }
  ],
  "patterns": [
   {
    "s": "出 + 了 + 一身 + 汗",
    "m": "Toát mồ hôi đầm đìa"
   },
   {
    "s": "身上 + 一点儿力气都没有",
    "m": "Người không còn chút sức nào"
   }
  ],
  "ex_zh": "晚上，白家月睡觉时出了一身汗。",
  "ex_py": "Wǎnshang, Bái Jiāyuè shuìjiào shí chū le yì shēn hàn.",
  "ex_vn": "Buổi tối, Bạch Gia Nguyệt ngủ toát mồ hôi khắp người.",
  "exList": [
   {
    "zh": "晚上，白家月睡觉时出了一身汗。",
    "py": "Wǎnshang, Bái Jiāyuè shuìjiào shí chū le yì shēn hàn.",
    "vn": "Buổi tối, Bạch Gia Nguyệt ngủ toát mồ hôi khắp người."
   },
   {
    "zh": "他今天穿了一身新衣服，看起来很精神。",
    "py": "Tā jīntiān chuān le yì shēn xīn yīfu, kàn qǐlái hěn jīngshén.",
    "vn": "Hôm nay anh ấy mặc một bộ đồ mới, trông rất tươi tỉnh."
   }
  ],
  "hanzi": [
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
    "prompt": "Tối qua cô ấy ngủ toát mồ hôi khắp người.",
    "answer": "她昨天晚上睡觉时出了一身汗。",
    "answerPy": "Tā zuótiān wǎnshang shuìjiào shí chū le yì shēn hàn.",
    "note": "Câu gần bài khoá 3.",
    "pair": "出了一身汗"
   },
   {
    "promptLang": "vi",
    "prompt": "Chạy bộ xong người tôi toàn mồ hôi, đợi tắm xong rồi hãy ăn cơm.",
    "answer": "跑完步我身上都是汗，等洗完澡再吃饭。",
    "answerPy": "Pǎo wán bù wǒ shēn shàng dōu shì hàn, děng xǐ wán zǎo zài chīfàn.",
    "note": "身上 = trên người; ôn 等……再…… (Bài 5 · điểm 4).",
    "pair": "等……再……"
   }
  ]
 },
 {
  "n": 19,
  "zh": "结果",
  "py": "jiéguǒ",
  "pos": "Danh từ / Liên từ",
  "vn": "kết quả; kết quả là, rốt cuộc",
  "hv": "kết quả",
  "em": "📊",
  "lesson": 3,
  "explain": [
   "Danh từ: kết quả (khám, xét nghiệm, thi…).",
   "Liên từ: đứng đầu vế sau, nói kết quả cuối cùng (thường ngoài mong đợi)."
  ],
  "usage": "检查结果 · 考试结果 · ……，结果…….",
  "collo": [
   "检查结果",
   "考试结果",
   "结果出来了",
   "好结果"
  ],
  "colloFull": [
   {
    "zh": "检查结果",
    "py": "Jiǎnchá jiéguǒ",
    "vn": "kết quả kiểm tra"
   },
   {
    "zh": "考试结果",
    "py": "Kǎoshì jiéguǒ",
    "vn": "kết quả thi"
   },
   {
    "zh": "结果出来了",
    "py": "Jiéguǒ chū lái le",
    "vn": "có kết quả rồi"
   },
   {
    "zh": "好结果",
    "py": "Hǎo jiéguǒ",
    "vn": "kết quả tốt"
   }
  ],
  "patterns": [
   {
    "s": "N + 的 + 结果 + 出来了",
    "m": "Có kết quả"
   },
   {
    "s": "……，结果 + kết quả",
    "m": "Liên từ: kết quả là, rốt cuộc"
   }
  ],
  "ex_zh": "医生给她做了检查，检查结果出来后，发现她得了比较严重的流行性感冒。",
  "ex_py": "Yīshēng gěi tā zuò le jiǎnchá, jiǎnchá jiéguǒ chū lái hòu, fāxiàn tā dé le bǐjiào yánzhòng de liúxíngxìng gǎnmào.",
  "ex_vn": "Bác sĩ khám cho cô ấy, sau khi có kết quả kiểm tra thì phát hiện cô ấy bị cúm khá nặng.",
  "exList": [
   {
    "zh": "医生给她做了检查，检查结果出来后，发现她得了比较严重的流行性感冒。",
    "py": "Yīshēng gěi tā zuò le jiǎnchá, jiǎnchá jiéguǒ chū lái hòu, fāxiàn tā dé le bǐjiào yánzhòng de liúxíngxìng gǎnmào.",
    "vn": "Bác sĩ khám cho cô ấy, sau khi có kết quả kiểm tra thì phát hiện cô ấy bị cúm khá nặng."
   },
   {
    "zh": "我以为他会来，结果他没来。",
    "py": "Wǒ yǐwéi tā huì lái, jiéguǒ tā méi lái.",
    "vn": "Tôi tưởng anh ấy sẽ đến, rốt cuộc anh ấy không đến."
   }
  ],
  "hanzi": [
   {
    "c": "结",
    "p": "jié",
    "type": "形声字 · Chữ hình thanh",
    "st": 9,
    "ord": "纟 → 吉",
    "rad": "纟 (mịch – sợi tơ)",
    "mean": "thắt, buộc; kết",
    "tip": "纟 (sợi tơ) + 吉 (chỉ âm): thắt nút sợi dây lại → kết. 结束 = thắt lại, buộc lại → kết thúc.",
    "cf": "给 gěi — bên phải là 合",
    "w": "结束"
   },
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
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Kết quả kiểm tra có rồi, may là không nặng lắm.",
    "answer": "检查结果出来了，还好不太严重。",
    "answerPy": "Jiǎnchá jiéguǒ chū lái le, hái hǎo bú tài yánzhòng.",
    "note": "结果 làm danh từ.",
    "pair": "结果出来了"
   },
   {
    "promptLang": "vi",
    "prompt": "Anh ấy thấy mình khỏe nên không mặc áo khoác, kết quả là bị cảm.",
    "answer": "他觉得自己身体不错，于是没穿外套，结果感冒了。",
    "answerPy": "Tā juéde zìjǐ shēntǐ búcuò, yúshì méi chuān wài tào, jiéguǒ gǎnmào le.",
    "note": "Ôn 于是 (Bài 3 · điểm 4); 结果 làm liên từ.",
    "pair": "于是……，结果……"
   }
  ]
 },
 {
  "n": 20,
  "zh": "性",
  "py": "xìng",
  "pos": "Hậu tố",
  "vn": "tính (chỉ tính chất, phạm vi)",
  "hv": "tính",
  "em": "🧬",
  "lesson": 3,
  "explain": [
   "Đứng sau danh từ / động từ / tính từ để tạo từ chỉ tính chất: 流行性 (có tính lây lan), 重要性 (tầm quan trọng), 可能性 (khả năng)."
  ],
  "usage": "流行性感冒 · 重要性 · 可能性.",
  "collo": [
   "流行性感冒",
   "重要性",
   "可能性",
   "积极性"
  ],
  "colloFull": [
   {
    "zh": "流行性感冒",
    "py": "Liúxíngxìng gǎnmào",
    "vn": "cúm (cảm lây lan)"
   },
   {
    "zh": "重要性",
    "py": "Zhòngyào xìng",
    "vn": "tầm quan trọng"
   },
   {
    "zh": "可能性",
    "py": "Kěnéng xìng",
    "vn": "khả năng"
   },
   {
    "zh": "积极性",
    "py": "Jījí xìng",
    "vn": "tính tích cực"
   }
  ],
  "patterns": [
   {
    "s": "N / V / Adj + 性",
    "m": "Tạo từ chỉ tính chất"
   },
   {
    "s": "Hán Việt: “… tính”",
    "m": "重要性 = tính quan trọng"
   }
  ],
  "ex_zh": "检查结果出来后，发现她得了比较严重的流行性感冒。",
  "ex_py": "Jiǎnchá jiéguǒ chū lái hòu, fāxiàn tā dé le bǐjiào yánzhòng de liúxíngxìng gǎnmào.",
  "ex_vn": "Sau khi có kết quả kiểm tra, phát hiện cô ấy bị cúm khá nặng.",
  "exList": [
   {
    "zh": "检查结果出来后，发现她得了比较严重的流行性感冒。",
    "py": "Jiǎnchá jiéguǒ chū lái hòu, fāxiàn tā dé le bǐjiào yánzhòng de liúxíngxìng gǎnmào.",
    "vn": "Sau khi có kết quả kiểm tra, phát hiện cô ấy bị cúm khá nặng."
   },
   {
    "zh": "学好中文的重要性，大家都知道。",
    "py": "Xué hǎo Zhōngwén de zhòngyào xìng, dàjiā dōu zhīdao.",
    "vn": "Tầm quan trọng của việc học giỏi tiếng Trung thì ai cũng biết."
   }
  ],
  "hanzi": [
   {
    "c": "性",
    "p": "xìng",
    "type": "左右结构 · Trái-phải",
    "st": 8,
    "ord": "忄 trái → 生 phải",
    "rad": "忄 (tâm)",
    "mean": "tính",
    "tip": "Tâm 忄 + 生(sinh) → bản tính sinh ra → TÍNH. 性别 = giới tính; 性格 (Bài 8); 积极性 (Bài 15).",
    "cf": "姓 (xìng – họ, bộ 女)",
    "w": "性别 / 性格 / 积极性"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Cô ấy bị cúm khá nặng.",
    "answer": "她得了比较严重的流行性感冒。",
    "answerPy": "Tā dé le bǐjiào yánzhòng de liúxíngxìng gǎnmào.",
    "note": "Câu trong bài khoá 3.",
    "pair": "流行性感冒"
   },
   {
    "promptLang": "vi",
    "prompt": "Chiều nay khả năng mưa rất cao, ít nhất phải mang theo một chiếc ô.",
    "answer": "今天下午下雨的可能性很大，至少要带一把伞。",
    "answerPy": "Jīntiān xiàwǔ xiàyǔ de kěnéng xìng hěn dà, zhìshǎo yào dài yì bǎ sǎn.",
    "note": "Ôn 至少 (Bài 5 · điểm 1).",
    "pair": "至少……"
   }
  ]
 },
 {
  "n": 21,
  "zh": "体温",
  "py": "tǐwēn",
  "pos": "Danh từ",
  "vn": "nhiệt độ cơ thể, thân nhiệt",
  "hv": "thể ôn",
  "em": "🌡️",
  "lesson": 3,
  "explain": [
   "Nhiệt độ của cơ thể; người khỏe khoảng 36–37 độ."
  ],
  "usage": "量体温 · 体温很高 · 把体温降下来.",
  "collo": [
   "量体温",
   "体温很高",
   "体温降下来",
   "体温正常"
  ],
  "colloFull": [
   {
    "zh": "量体温",
    "py": "Liáng tǐwēn",
    "vn": "đo nhiệt độ"
   },
   {
    "zh": "体温很高",
    "py": "Tǐwēn hěn gāo",
    "vn": "sốt cao"
   },
   {
    "zh": "体温降下来",
    "py": "Tǐwēn jiàng xiàlái",
    "vn": "hạ nhiệt"
   },
   {
    "zh": "体温正常",
    "py": "Tǐwēn zhèngcháng",
    "vn": "nhiệt độ bình thường"
   }
  ],
  "patterns": [
   {
    "s": "量 + 体温",
    "m": "Đo nhiệt độ"
   },
   {
    "s": "体温 + 高 / 低 / 正常",
    "m": "✗ 体温很热 → ✓ 体温很高"
   }
  ],
  "ex_zh": "医生告诉她，现在需要把体温降下来，光吃药恐怕不够，打针会更有效。",
  "ex_py": "Yīshēng gàosu tā, xiànzài xūyào bǎ tǐwēn jiàng xiàlái, guāng chī yào kǒngpà bú gòu, dǎzhēn huì gèng yǒuxiào.",
  "ex_vn": "Bác sĩ bảo cô ấy bây giờ cần hạ nhiệt độ xuống, chỉ uống thuốc e là không đủ, tiêm sẽ hiệu quả hơn.",
  "exList": [
   {
    "zh": "医生告诉她，现在需要把体温降下来，光吃药恐怕不够，打针会更有效。",
    "py": "Yīshēng gàosu tā, xiànzài xūyào bǎ tǐwēn jiàng xiàlái, guāng chī yào kǒngpà bú gòu, dǎzhēn huì gèng yǒuxiào.",
    "vn": "Bác sĩ bảo cô ấy bây giờ cần hạ nhiệt độ xuống, chỉ uống thuốc e là không đủ, tiêm sẽ hiệu quả hơn."
   },
   {
    "zh": "他发烧了，体温有三十九度。",
    "py": "Tā fāshāo le, tǐwēn yǒu sān shí jiǔ dù.",
    "vn": "Anh ấy sốt rồi, nhiệt độ lên tới 39 độ."
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
    "c": "温",
    "p": "wēn",
    "type": "左右结构 · Trái-phải",
    "st": 12,
    "ord": "氵 trái → 昷 phải",
    "rad": "氵 (thủy)",
    "mean": "ấm",
    "tip": "Nước 氵 + 昷(hơi nóng bốc lên từ đồ đựng) → nước ẤM → ÔN. 温度 = nhiệt độ, 温暖 = ấm áp.",
    "cf": "湿 (shī – ẩm)",
    "w": "温度 / 温暖 / 体温"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Bác sĩ muốn xem nhiệt độ của cô ấy là bao nhiêu.",
    "answer": "医生想看看她的体温是多少。",
    "answerPy": "Yīshēng xiǎng kàn kàn tā de tǐwēn shì duōshǎo.",
    "note": "Đáp án gợi ý bài nhìn tranh của sách.",
    "pair": "看看……是多少"
   },
   {
    "promptLang": "vi",
    "prompt": "Sốt tới 39 độ, nhiệt độ cao như vậy phải mau đi bệnh viện.",
    "answer": "发烧到三十九度，体温这么高，要赶快去医院。",
    "answerPy": "Fāshāo dào sān shí jiǔ dù, tǐwēn zhème gāo, yào gǎnkuài qù yīyuàn.",
    "note": "Kết hợp 赶快 (từ mới 5).",
    "pair": "赶快 + V"
   }
  ]
 },
 {
  "n": 22,
  "zh": "降",
  "py": "jiàng",
  "pos": "Động từ",
  "vn": "hạ, giảm xuống",
  "hv": "giáng",
  "em": "📉",
  "lesson": 3,
  "explain": [
   "Từ cao xuống thấp: nhiệt độ, giá cả, máy bay hạ cánh. Hay đi với bổ ngữ 下来: 降下来."
  ],
  "usage": "把体温降下来 · 降温 · 降价.",
  "collo": [
   "降下来",
   "降温",
   "降价",
   "体温降了"
  ],
  "colloFull": [
   {
    "zh": "降下来",
    "py": "Jiàng xiàlái",
    "vn": "hạ xuống"
   },
   {
    "zh": "降温",
    "py": "Jiàng wēn",
    "vn": "hạ nhiệt; trời trở lạnh"
   },
   {
    "zh": "降价",
    "py": "Jiàng jià",
    "vn": "giảm giá"
   },
   {
    "zh": "体温降了",
    "py": "Tǐwēn jiàng le",
    "vn": "nhiệt độ hạ rồi"
   }
  ],
  "patterns": [
   {
    "s": "把 + N + 降下来",
    "m": "Câu chữ 把 + bổ ngữ xu hướng"
   },
   {
    "s": "降 ↔ 升",
    "m": "Hạ ↔ lên"
   }
  ],
  "ex_zh": "医生告诉她，现在需要把体温降下来，光吃药恐怕不够，打针会更有效。",
  "ex_py": "Yīshēng gàosu tā, xiànzài xūyào bǎ tǐwēn jiàng xiàlái, guāng chī yào kǒngpà bú gòu, dǎzhēn huì gèng yǒuxiào.",
  "ex_vn": "Bác sĩ bảo cô ấy bây giờ cần hạ nhiệt độ xuống, chỉ uống thuốc e là không đủ, tiêm sẽ hiệu quả hơn.",
  "exList": [
   {
    "zh": "医生告诉她，现在需要把体温降下来，光吃药恐怕不够，打针会更有效。",
    "py": "Yīshēng gàosu tā, xiànzài xūyào bǎ tǐwēn jiàng xiàlái, guāng chī yào kǒngpà bú gòu, dǎzhēn huì gèng yǒuxiào.",
    "vn": "Bác sĩ bảo cô ấy bây giờ cần hạ nhiệt độ xuống, chỉ uống thuốc e là không đủ, tiêm sẽ hiệu quả hơn."
   },
   {
    "zh": "明天要降温了，多穿点儿衣服。",
    "py": "Míngtiān yào jiàng wēn le, duō chuān diǎnr yīfu.",
    "vn": "Mai trời trở lạnh, mặc thêm áo vào nhé."
   }
  ],
  "hanzi": [
   {
    "c": "降",
    "p": "jiàng",
    "type": "左右结构 · Trái-phải",
    "st": 8,
    "ord": "阝(phụ) trái → 夅 phải",
    "rad": "阝 (phụ – gò đất)",
    "mean": "hạ xuống",
    "tip": "Bộ 阝(gò đất, ngọn đồi) + 夅(biểu âm) → đi XUỐNG từ trên gò đất, mở rộng thành HẠ XUỐNG, kết hợp 低(thấp) thành 降低 = GIẢM, HẠ.",
    "cf": "洚 (jiàng – ít dùng)",
    "w": "降低 / 下降 / 降落"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Bây giờ cần hạ nhiệt độ cơ thể xuống.",
    "answer": "现在需要把体温降下来。",
    "answerPy": "Xiànzài xūyào bǎ tǐwēn jiàng xiàlái.",
    "note": "Câu trong bài khoá 3.",
    "pair": "把……降下来"
   },
   {
    "promptLang": "vi",
    "prompt": "Uống thuốc rồi mà nhiệt độ vẫn không hạ xuống được, vẫn nên đi tiêm thôi.",
    "answer": "吃了药体温也降不下来，还是去打针吧。",
    "answerPy": "Chī le yào tǐwēn yě jiàng bú xiàlái, háishì qù dǎzhēn ba.",
    "note": "Ôn bổ ngữ khả năng (Bài 4 · điểm 1): 降不下来.",
    "pair": "V不下来"
   }
  ]
 },
 {
  "n": 23,
  "zh": "光",
  "py": "guāng",
  "pos": "Phó từ",
  "vn": "chỉ, chỉ có",
  "hv": "quang",
  "em": "☝️",
  "lesson": 3,
  "explain": [
   "Chỉ (một việc / một thứ, không có cái khác) — khẩu ngữ, ≈ 只. Chú ý: 光 còn là danh từ “ánh sáng”; trong bài là phó từ “chỉ”."
  ],
  "usage": "光 + V · 光吃药不够 · 光喝水.",
  "collo": [
   "光吃药",
   "光喝水",
   "光说不做",
   "光看书"
  ],
  "colloFull": [
   {
    "zh": "光吃药",
    "py": "Guāng chī yào",
    "vn": "chỉ uống thuốc"
   },
   {
    "zh": "光喝水",
    "py": "Guāng hē shuǐ",
    "vn": "chỉ uống nước"
   },
   {
    "zh": "光说不做",
    "py": "Guāng shuō bú zuò",
    "vn": "chỉ nói không làm"
   },
   {
    "zh": "光看书",
    "py": "Guāng kàn shū",
    "vn": "chỉ đọc sách"
   }
  ],
  "patterns": [
   {
    "s": "光 + V + (恐怕) 不够 / 不行",
    "m": "Chỉ … thì không đủ / không được"
   },
   {
    "s": "光 ≈ 只 (khẩu ngữ)",
    "m": "光喝了点儿水 = 只喝了点儿水"
   }
  ],
  "ex_zh": "现在需要把体温降下来，光吃药恐怕不够，打针会更有效。",
  "ex_py": "Xiànzài xūyào bǎ tǐwēn jiàng xiàlái, guāng chī yào kǒngpà bú gòu, dǎzhēn huì gèng yǒuxiào.",
  "ex_vn": "Bây giờ cần hạ nhiệt độ xuống, chỉ uống thuốc e là không đủ, tiêm sẽ hiệu quả hơn.",
  "exList": [
   {
    "zh": "现在需要把体温降下来，光吃药恐怕不够，打针会更有效。",
    "py": "Xiànzài xūyào bǎ tǐwēn jiàng xiàlái, guāng chī yào kǒngpà bú gòu, dǎzhēn huì gèng yǒuxiào.",
    "vn": "Bây giờ cần hạ nhiệt độ xuống, chỉ uống thuốc e là không đủ, tiêm sẽ hiệu quả hơn."
   },
   {
    "zh": "学中文光看书不行，还要多说多练。",
    "py": "Xué Zhōngwén guāng kàn shū bùxíng, hái yào duō shuō duō liàn.",
    "vn": "Học tiếng Trung chỉ đọc sách thì không được, còn phải nói nhiều luyện nhiều."
   }
  ],
  "hanzi": [
   {
    "c": "光",
    "p": "guāng",
    "type": "上下结构 · Trên-dưới",
    "st": 6,
    "ord": "⺌ trên → 儿 dưới",
    "rad": "儿 (nhân, biến thể)",
    "mean": "ánh sáng; chỉ, riêng",
    "tip": "Chữ tượng hình ÁNH SÁNG tỏa ra từ một điểm → mở rộng nghĩa CHỈ MỘT ĐIỂM DUY NHẤT, mượn làm phó từ CHỈ, RIÊNG.",
    "cf": "光 dễ nhầm với 先 (xiān – \"trước\")",
    "w": "光……就…… / 阳光 / 光是"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Ban ngày bận quá, chỉ uống chút nước, một miếng cơm cũng chưa ăn.",
    "answer": "白天太忙了，光喝了点儿水，一口饭都没吃。",
    "answerPy": "Báitiān tài máng le, guāng hē le diǎnr shuǐ, yì kǒu fàn dōu méi chī.",
    "note": "Bài tập chọn từ của sách (câu 7).",
    "pair": "光 + V"
   },
   {
    "promptLang": "vi",
    "prompt": "Học tiếng Trung không thể chỉ đọc sách, không những phải nghe nhiều mà còn phải nói nhiều.",
    "answer": "学中文不能光看书，不仅要多听，而且要多说。",
    "answerPy": "Xué Zhōngwén bù néng guāng kàn shū, bùjǐn yào duō tīng, érqiě yào duō shuō.",
    "note": "Ôn 不仅……而且…… (Bài 3 · điểm 2).",
    "pair": "不仅……而且……"
   }
  ]
 },
 {
  "n": 24,
  "zh": "打针",
  "py": "dǎzhēn",
  "pos": "Động từ",
  "vn": "tiêm, chích",
  "hv": "đả châm",
  "em": "💉",
  "lesson": 3,
  "explain": [
   "Tiêm thuốc. Động từ li hợp: 打了一针, 打两针."
  ],
  "usage": "打针 · 给 + ai + 打针 · 打了一针.",
  "collo": [
   "打针吃药",
   "给他打针",
   "打了一针",
   "怕打针"
  ],
  "colloFull": [
   {
    "zh": "打针吃药",
    "py": "Dǎzhēn chī yào",
    "vn": "tiêm thuốc, uống thuốc"
   },
   {
    "zh": "给他打针",
    "py": "Gěi tā dǎzhēn",
    "vn": "tiêm cho anh ấy"
   },
   {
    "zh": "打了一针",
    "py": "Dǎ le yì zhēn",
    "vn": "tiêm một mũi"
   },
   {
    "zh": "怕打针",
    "py": "Pà dǎzhēn",
    "vn": "sợ tiêm"
   }
  ],
  "patterns": [
   {
    "s": "打 + 了 + 一 + 针",
    "m": "Li hợp: số lần chen vào giữa"
   },
   {
    "s": "给 + ai + 打针",
    "m": "Tiêm cho ai"
   }
  ],
  "ex_zh": "现在需要把体温降下来，光吃药恐怕不够，打针会更有效。",
  "ex_py": "Xiànzài xūyào bǎ tǐwēn jiàng xiàlái, guāng chī yào kǒngpà bú gòu, dǎzhēn huì gèng yǒuxiào.",
  "ex_vn": "Bây giờ cần hạ nhiệt độ xuống, chỉ uống thuốc e là không đủ, tiêm sẽ hiệu quả hơn.",
  "exList": [
   {
    "zh": "现在需要把体温降下来，光吃药恐怕不够，打针会更有效。",
    "py": "Xiànzài xūyào bǎ tǐwēn jiàng xiàlái, guāng chī yào kǒngpà bú gòu, dǎzhēn huì gèng yǒuxiào.",
    "vn": "Bây giờ cần hạ nhiệt độ xuống, chỉ uống thuốc e là không đủ, tiêm sẽ hiệu quả hơn."
   },
   {
    "zh": "小孩子一听到打针就哭。",
    "py": "Xiǎo háizi yì tīng dào dǎzhēn jiù kū.",
    "vn": "Trẻ con cứ nghe đến tiêm là khóc."
   }
  ],
  "hanzi": [
   {
    "c": "打",
    "p": "dǎ",
    "type": "形声字 · Chữ hình thanh",
    "st": 5,
    "ord": "扌 → 丁",
    "rad": "扌 (thủ – tay)",
    "mean": "đánh; chơi; gọi",
    "tip": "Môn thể thao dùng tay thì đi với 打 (打篮球), dùng chân thì đi với 踢 (踢足球).",
    "cf": "踢 (tī – đá)",
    "w": "打篮球 / 打电话 / 打开"
   },
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
    "prompt": "Y tá đang tiêm cho anh ấy.",
    "answer": "护士正在给他打针。",
    "answerPy": "Hùshi zhèngzài gěi tā dǎzhēn.",
    "note": "给 + ai + 打针.",
    "pair": "给……打针"
   },
   {
    "promptLang": "vi",
    "prompt": "Cậu bé sợ tiêm ghê lắm, vừa thấy y tá là khóc.",
    "answer": "他怕打针怕得厉害，一看见护士就哭。",
    "answerPy": "Tā pà dǎzhēn pà de lìhai, yí kànjiàn hùshi jiù kū.",
    "note": "Kết hợp V得厉害 (Bài 6 · điểm 1) + 一……就…… (HSK 3).",
    "pair": "一……就……"
   }
  ]
 },
 {
  "n": 25,
  "zh": "有效",
  "py": "yǒuxiào",
  "pos": "Động từ",
  "vn": "có hiệu quả, có tác dụng; có hiệu lực",
  "hv": "hữu hiệu",
  "em": "👍",
  "lesson": 3,
  "explain": [
   "Có tác dụng, mang lại kết quả tốt (phương pháp, thuốc). Cũng là “còn hiệu lực” (vé, hộ chiếu)."
  ],
  "usage": "很有效 · 更有效 · 有效的方法.",
  "collo": [
   "很有效",
   "更有效",
   "有效的方法",
   "有效时间"
  ],
  "colloFull": [
   {
    "zh": "很有效",
    "py": "Hěn yǒuxiào",
    "vn": "rất hiệu quả"
   },
   {
    "zh": "更有效",
    "py": "Gèng yǒuxiào",
    "vn": "hiệu quả hơn"
   },
   {
    "zh": "有效的方法",
    "py": "Yǒuxiào de fāngfǎ",
    "vn": "phương pháp hiệu quả"
   },
   {
    "zh": "有效时间",
    "py": "Yǒuxiào shíjiān",
    "vn": "thời hạn hiệu lực"
   }
  ],
  "patterns": [
   {
    "s": "A + 对 + B + 很有效",
    "m": "A có tác dụng với B"
   },
   {
    "s": "有效 + 的 + 方法 / 办法",
    "m": "Làm định ngữ"
   }
  ],
  "ex_zh": "现在需要把体温降下来，光吃药恐怕不够，打针会更有效。",
  "ex_py": "Xiànzài xūyào bǎ tǐwēn jiàng xiàlái, guāng chī yào kǒngpà bú gòu, dǎzhēn huì gèng yǒuxiào.",
  "ex_vn": "Bây giờ cần hạ nhiệt độ xuống, chỉ uống thuốc e là không đủ, tiêm sẽ hiệu quả hơn.",
  "exList": [
   {
    "zh": "现在需要把体温降下来，光吃药恐怕不够，打针会更有效。",
    "py": "Xiànzài xūyào bǎ tǐwēn jiàng xiàlái, guāng chī yào kǒngpà bú gòu, dǎzhēn huì gèng yǒuxiào.",
    "vn": "Bây giờ cần hạ nhiệt độ xuống, chỉ uống thuốc e là không đủ, tiêm sẽ hiệu quả hơn."
   },
   {
    "zh": "感冒的时候，多喝水、多休息很有效。",
    "py": "Gǎnmào de shíhou, duō hē shuǐ, duō xiūxi hěn yǒuxiào.",
    "vn": "Khi bị cảm, uống nhiều nước, nghỉ ngơi nhiều rất có hiệu quả."
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
    "w": "有时 / 有点儿 / 没有"
   },
   {
    "c": "效",
    "p": "xiào",
    "type": "左右结构 · Trái-phải",
    "st": 10,
    "ord": "交 (giao) trái → 攵 (phốc) phải",
    "rad": "攵 (phốc – hành động)",
    "mean": "kết quả, hiệu lực",
    "tip": "Bộ 攵(hành động) + 交(giao thoa, tương tác) → hành động tạo ra KẾT QUẢ, kết hợp 果(quả, kết quả) thành 效果 = HIỆU QUẢ.",
    "cf": "郊 (jiāo – \"ngoại ô\", bộ 阝\")",
    "w": "效果 / 有效 / 效率"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Tôi thấy cách này rất hiệu quả, không những học được ngôn ngữ mà còn hiểu được văn hóa Trung Quốc.",
    "answer": "我觉得这种方法很有效，不但能学语言，还能了解中国文化。",
    "answerPy": "Wǒ juéde zhè zhǒng fāngfǎ hěn yǒuxiào, búdàn néng xué yǔyán, hái néng liǎojiě Zhōngguó wénhuà.",
    "note": "Bài tập chọn từ của sách (câu 10).",
    "pair": "不但……还……"
   },
   {
    "promptLang": "vi",
    "prompt": "Loại thuốc này vừa rẻ vừa hiệu quả.",
    "answer": "这种药既便宜又有效。",
    "answerPy": "Zhè zhǒng yào jì piányi yòu yǒuxiào.",
    "note": "Ôn 既……又…… (Bài 4 · điểm 3).",
    "pair": "既……又……"
   }
  ]
 },
 {
  "n": 26,
  "zh": "按时",
  "py": "ànshí",
  "pos": "Phó từ",
  "vn": "đúng giờ, đúng hạn",
  "hv": "án thời",
  "em": "⏰",
  "lesson": 3,
  "explain": [
   "Theo đúng thời gian đã quy định (uống thuốc, nộp bài, đi làm…)."
  ],
  "usage": "按时吃药 · 按时上班 · 按时完成.",
  "collo": [
   "按时吃药",
   "按时上班",
   "按时完成",
   "按时交作业"
  ],
  "colloFull": [
   {
    "zh": "按时吃药",
    "py": "Ànshí chī yào",
    "vn": "uống thuốc đúng giờ"
   },
   {
    "zh": "按时上班",
    "py": "Ànshí shàngbān",
    "vn": "đi làm đúng giờ"
   },
   {
    "zh": "按时完成",
    "py": "Ànshí wánchéng",
    "vn": "hoàn thành đúng hạn"
   },
   {
    "zh": "按时交作业",
    "py": "Ànshí jiāo zuòyè",
    "vn": "nộp bài đúng hạn"
   }
  ],
  "patterns": [
   {
    "s": "按时 + V",
    "m": "Đứng trước động từ: ✗ 吃药按时"
   },
   {
    "s": "按时 ≈ 准时",
    "m": "按时 = theo giờ quy định; 准时 = đúng giờ hẹn, không trễ"
   }
  ],
  "ex_zh": "医生还让她回家以后按时吃药，多喝水，多休息。",
  "ex_py": "Yīshēng huán ràng tā huí jiā yǐhòu ànshí chī yào, duō hē shuǐ, duō xiūxi.",
  "ex_vn": "Bác sĩ còn dặn cô ấy về nhà uống thuốc đúng giờ, uống nhiều nước, nghỉ ngơi nhiều.",
  "exList": [
   {
    "zh": "医生还让她回家以后按时吃药，多喝水，多休息。",
    "py": "Yīshēng huán ràng tā huí jiā yǐhòu ànshí chī yào, duō hē shuǐ, duō xiūxi.",
    "vn": "Bác sĩ còn dặn cô ấy về nhà uống thuốc đúng giờ, uống nhiều nước, nghỉ ngơi nhiều."
   },
   {
    "zh": "这个作业你一定要按时交。",
    "py": "Zhège zuòyè nǐ yídìng yào ànshí jiāo.",
    "vn": "Bài tập này em nhất định phải nộp đúng hạn."
   }
  ],
  "hanzi": [
   {
    "c": "按",
    "p": "àn",
    "type": "左右结构 · Trái-phải",
    "st": 9,
    "ord": "扌 (thủ) trái → 安 (an) phải",
    "rad": "扌 (thủ – tay)",
    "mean": "theo, ấn",
    "tip": "Bộ tay 扌 + 安(yên ổn) → dùng TAY giữ cho YÊN, mở rộng thành TUÂN THEO, kết hợp 时(thời gian) thành 按时 = ĐÚNG GIỜ, ĐÚNG HẠN.",
    "cf": "安 (ān – \"yên\", không có bộ 扌\")",
    "w": "按时 / 按照 / 按不住"
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
    "prompt": "Bác sĩ dặn cô ấy về nhà phải uống thuốc đúng giờ.",
    "answer": "医生让她回家以后按时吃药。",
    "answerPy": "Yīshēng ràng tā huí jiā yǐhòu ànshí chī yào.",
    "note": "Câu trong bài khoá 3.",
    "pair": "让 + ai + 按时 + V"
   },
   {
    "promptLang": "vi",
    "prompt": "Chỉ cần uống thuốc đúng giờ, nghỉ ngơi nhiều, ít nhất ba ngày là đỡ.",
    "answer": "只要按时吃药、多休息，至少三天就会好一些。",
    "answerPy": "Zhǐyào ànshí chī yào, duō xiūxi, zhìshǎo sān tiān jiù huì hǎo yìxiē.",
    "note": "Ôn 至少 (Bài 5 · điểm 1) + 只要……就…… (HSK 3).",
    "pair": "只要……就……"
   }
  ]
 },
 {
  "n": 27,
  "zh": "汗",
  "py": "hàn",
  "pos": "Danh từ",
  "vn": "mồ hôi",
  "hv": "hãn",
  "em": "💦",
  "lesson": 3,
  "explain": [
   "Nước tiết ra từ da khi nóng, vận động hoặc khi sốt."
  ],
  "usage": "出汗 · 一身汗 · 满头大汗.",
  "collo": [
   "出汗",
   "一身汗",
   "满头大汗",
   "擦汗"
  ],
  "colloFull": [
   {
    "zh": "出汗",
    "py": "Chū hàn",
    "vn": "ra mồ hôi"
   },
   {
    "zh": "一身汗",
    "py": "Yì shēn hàn",
    "vn": "mồ hôi khắp người"
   },
   {
    "zh": "满头大汗",
    "py": "Mǎn tóu dà hàn",
    "vn": "mồ hôi đầm đìa"
   },
   {
    "zh": "擦汗",
    "py": "Cā hàn",
    "vn": "lau mồ hôi"
   }
  ],
  "patterns": [
   {
    "s": "出 + 汗",
    "m": "Ra mồ hôi: ✗ 流汗水 → ✓ 出汗"
   }
  ],
  "ex_zh": "晚上，白家月睡觉时出了一身汗。",
  "ex_py": "Wǎnshang, Bái Jiāyuè shuìjiào shí chū le yì shēn hàn.",
  "ex_vn": "Buổi tối, Bạch Gia Nguyệt ngủ toát mồ hôi khắp người.",
  "exList": [
   {
    "zh": "晚上，白家月睡觉时出了一身汗。",
    "py": "Wǎnshang, Bái Jiāyuè shuìjiào shí chū le yì shēn hàn.",
    "vn": "Buổi tối, Bạch Gia Nguyệt ngủ toát mồ hôi khắp người."
   },
   {
    "zh": "天气太热了，我一出门就出汗。",
    "py": "Tiānqì tài rè le, wǒ yì chūmén jiù chū hàn.",
    "vn": "Trời nóng quá, tôi vừa ra khỏi nhà là toát mồ hôi."
   }
  ],
  "hanzi": [
   {
    "c": "汗",
    "p": "hàn",
    "type": "左右结构 · Trái-phải",
    "st": 6,
    "ord": "氵 (thủy) trái → 干 (can) phải",
    "rad": "氵 (thủy – nước)",
    "mean": "mồ hôi",
    "tip": "Bộ nước 氵 (chất lỏng) + 干(khô, biểu âm) → chất lỏng tiết ra rồi KHÔ đi trên da, mở rộng thành MỒ HÔI.",
    "cf": "汉 (hàn – \"người Hán\", cùng bộ 氵\")",
    "w": "汗 / 出汗 / 汗水"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Trời nóng quá, tôi vừa ra khỏi nhà là toát mồ hôi.",
    "answer": "天气太热了，我一出门就出汗。",
    "answerPy": "Tiānqì tài rè le, wǒ yì chūmén jiù chū hàn.",
    "note": "Ôn 一……就…… (HSK 3).",
    "pair": "一……就……"
   },
   {
    "promptLang": "vi",
    "prompt": "Ra mồ hôi rồi thì nhiệt độ sẽ hạ xuống.",
    "answer": "出了汗，体温就会降下来。",
    "answerPy": "Chū le hàn, tǐwēn jiù huì jiàng xiàlái.",
    "note": "出汗 + 降下来.",
    "pair": "出了汗，就……"
   }
  ]
 },
 {
  "n": 28,
  "zh": "醒",
  "py": "xǐng",
  "pos": "Động từ",
  "vn": "tỉnh (giấc), thức dậy",
  "hv": "tỉnh",
  "em": "🌅",
  "lesson": 3,
  "explain": [
   "Hết ngủ, mở mắt ra. Khác 起床 (rời giường): đã 醒 nhưng chưa chắc đã 起床."
  ],
  "usage": "醒来 · 醒了 · 叫醒.",
  "collo": [
   "醒来",
   "叫醒",
   "睡醒",
   "还没醒"
  ],
  "colloFull": [
   {
    "zh": "醒来",
    "py": "Xǐng lái",
    "vn": "tỉnh dậy"
   },
   {
    "zh": "叫醒",
    "py": "Jiào xǐng",
    "vn": "gọi dậy"
   },
   {
    "zh": "睡醒",
    "py": "Shuì xǐng",
    "vn": "ngủ dậy"
   },
   {
    "zh": "还没醒",
    "py": "Hái méi xǐng",
    "vn": "vẫn chưa tỉnh"
   }
  ],
  "patterns": [
   {
    "s": "醒 ≠ 起床",
    "m": "醒 = tỉnh giấc; 起床 = rời giường"
   },
   {
    "s": "叫醒 + ai",
    "m": "Đánh thức ai"
   }
  ],
  "ex_zh": "第二天醒来时，她感觉头不那么疼了。",
  "ex_py": "Dì èr tiān xǐng lái shí, tā gǎnjué tóu bú nàme téng le.",
  "ex_vn": "Hôm sau lúc tỉnh dậy, cô ấy thấy đầu không đau như trước nữa.",
  "exList": [
   {
    "zh": "第二天醒来时，她感觉头不那么疼了。",
    "py": "Dì èr tiān xǐng lái shí, tā gǎnjué tóu bú nàme téng le.",
    "vn": "Hôm sau lúc tỉnh dậy, cô ấy thấy đầu không đau như trước nữa."
   },
   {
    "zh": "我早上六点就醒了，可是八点才起床。",
    "py": "Wǒ zǎoshang liù diǎn jiù xǐng le, kěshì bā diǎn cái qǐchuáng.",
    "vn": "Sáng tôi 6 giờ đã tỉnh rồi, nhưng 8 giờ mới dậy khỏi giường."
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
    "prompt": "Hôm qua ngủ muộn quá, hôm nay 10 giờ mới dậy.",
    "answer": "昨天睡得太晚了，今天10点才醒。",
    "answerPy": "Zuótiān shuì de tài wǎn le, jīntiān 1 0 diǎn cái xǐng.",
    "note": "Bài tập chọn từ của sách (câu 9).",
    "pair": "……才醒"
   },
   {
    "promptLang": "vi",
    "prompt": "Đợi em bé tỉnh rồi chúng ta hãy đi.",
    "answer": "等孩子醒了，我们再走。",
    "answerPy": "Děng háizi xǐng le, wǒmen zài zǒu.",
    "note": "Ôn 等……再…… (Bài 5 · điểm 4).",
    "pair": "等……再……"
   }
  ]
 },
 {
  "n": 29,
  "zh": "感觉",
  "py": "gǎnjué",
  "pos": "Động từ / Danh từ",
  "vn": "cảm thấy; cảm giác",
  "hv": "cảm giác",
  "em": "💭",
  "lesson": 3,
  "explain": [
   "Động từ: cảm thấy (về cơ thể hoặc suy nghĩ), gần nghĩa 觉得.",
   "Danh từ: cảm giác, ấn tượng."
  ],
  "usage": "感觉 + câu · 感觉好多了 · 我的感觉.",
  "collo": [
   "感觉好多了",
   "感觉不舒服",
   "我的感觉",
   "感觉怎么样"
  ],
  "colloFull": [
   {
    "zh": "感觉好多了",
    "py": "Gǎnjué hǎoduō le",
    "vn": "thấy đỡ nhiều"
   },
   {
    "zh": "感觉不舒服",
    "py": "Gǎnjué bù shūfu",
    "vn": "thấy không khỏe"
   },
   {
    "zh": "我的感觉",
    "py": "Wǒ de gǎnjué",
    "vn": "cảm giác của tôi"
   },
   {
    "zh": "感觉怎么样",
    "py": "Gǎnjué zěnmeyàng",
    "vn": "thấy thế nào"
   }
  ],
  "patterns": [
   {
    "s": "Sub + 感觉 + câu",
    "m": "≈ 觉得, thiên về cảm nhận cơ thể"
   },
   {
    "s": "Sub + 的感觉 + 是……",
    "m": "感觉 làm danh từ"
   }
  ],
  "ex_zh": "第二天醒来时，她感觉头不那么疼了，体温也低了一些，身体不那么难受了。",
  "ex_py": "Dì èr tiān xǐng lái shí, tā gǎnjué tóu bú nàme téng le, tǐwēn yě dī le yìxiē, shēntǐ bú nàme nánshòu le.",
  "ex_vn": "Hôm sau lúc tỉnh dậy, cô ấy thấy đầu không đau như trước, nhiệt độ cũng hạ đi một chút, người không còn khó chịu như trước nữa.",
  "exList": [
   {
    "zh": "第二天醒来时，她感觉头不那么疼了，体温也低了一些，身体不那么难受了。",
    "py": "Dì èr tiān xǐng lái shí, tā gǎnjué tóu bú nàme téng le, tǐwēn yě dī le yìxiē, shēntǐ bú nàme nánshòu le.",
    "vn": "Hôm sau lúc tỉnh dậy, cô ấy thấy đầu không đau như trước, nhiệt độ cũng hạ đi một chút, người không còn khó chịu như trước nữa."
   },
   {
    "zh": "第一次在中国看病，我的感觉是比我想的简单。",
    "py": "Dì yī cì zài Zhōngguó kànbìng, wǒ de gǎnjué shì bǐ wǒ xiǎng de jiǎndān.",
    "vn": "Lần đầu khám bệnh ở Trung Quốc, cảm giác của tôi là đơn giản hơn tôi nghĩ."
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
   },
   {
    "c": "觉",
    "p": "jué",
    "type": "半包围结构 · Bán bao vây (giản thể)",
    "st": 9,
    "ord": "⺍ trên → 见 (kiến) dưới",
    "rad": "见 (kiến – nhìn thấy)",
    "mean": "cảm thấy, nhận biết",
    "tip": "Bộ 见 (nhìn thấy, nhận biết) → NHẬN BIẾT được bằng giác quan, kết hợp 感(cảm) thành 感觉 = CẢM GIÁC, CẢM THẤY.",
    "cf": "觉 khi đọc \"jiào\" nghĩa là \"giấc ngủ\" (睡觉)",
    "w": "感觉 / 觉得 / 视觉"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Nếu cảm thấy người không khỏe thì tốt nhất mau đi bệnh viện khám.",
    "answer": "如果感觉身体不舒服，最好赶快去医院看看。",
    "answerPy": "Rúguǒ gǎnjué shēntǐ bù shūfu, zuìhǎo gǎnkuài qù yīyuàn kàn kàn.",
    "note": "Bài tập hoàn thành đoạn văn của sách.",
    "pair": "如果……最好……"
   },
   {
    "promptLang": "vi",
    "prompt": "Uống thuốc xong tôi thấy đỡ nhiều rồi.",
    "answer": "吃了药以后，我感觉好多了。",
    "answerPy": "Chī le yào yǐhòu, wǒ gǎnjué hǎoduō le.",
    "note": "Adj + 多了 (so sánh với trước).",
    "pair": "感觉好多了"
   }
  ]
 },
 {
  "n": 30,
  "zh": "低",
  "py": "dī",
  "pos": "Tính từ",
  "vn": "thấp",
  "hv": "đê",
  "em": "⬇️",
  "lesson": 3,
  "explain": [
   "Thấp (nhiệt độ, giá cả, giọng nói, vị trí). Trái nghĩa 高."
  ],
  "usage": "体温低 · 价格低 · 低了一些.",
  "collo": [
   "体温低",
   "温度很低",
   "低了一些",
   "价格低"
  ],
  "colloFull": [
   {
    "zh": "体温低",
    "py": "Tǐwēn dī",
    "vn": "thân nhiệt thấp"
   },
   {
    "zh": "温度很低",
    "py": "Wēndù hěn dī",
    "vn": "nhiệt độ rất thấp"
   },
   {
    "zh": "低了一些",
    "py": "Dī le yìxiē",
    "vn": "thấp đi một chút"
   },
   {
    "zh": "价格低",
    "py": "Jiàgé dī",
    "vn": "giá thấp"
   }
  ],
  "patterns": [
   {
    "s": "Adj + 了 + 一些",
    "m": "Thấp đi một chút (có thay đổi)"
   },
   {
    "s": "低 ↔ 高",
    "m": "Người thấp thì nói 矮: ✗ 个子低 → ✓ 个子矮"
   }
  ],
  "ex_zh": "第二天醒来时，她感觉头不那么疼了，体温也低了一些。",
  "ex_py": "Dì èr tiān xǐng lái shí, tā gǎnjué tóu bú nàme téng le, tǐwēn yě dī le yìxiē.",
  "ex_vn": "Hôm sau lúc tỉnh dậy, cô ấy thấy đầu không đau như trước, nhiệt độ cũng hạ đi một chút.",
  "exList": [
   {
    "zh": "第二天醒来时，她感觉头不那么疼了，体温也低了一些。",
    "py": "Dì èr tiān xǐng lái shí, tā gǎnjué tóu bú nàme téng le, tǐwēn yě dī le yìxiē.",
    "vn": "Hôm sau lúc tỉnh dậy, cô ấy thấy đầu không đau như trước, nhiệt độ cũng hạ đi một chút."
   },
   {
    "zh": "这里冬天的温度很低，你至少要带一件厚衣服。",
    "py": "Zhèli dōngtiān de wēndù hěn dī, nǐ zhìshǎo yào dài yí jiàn hòu yīfu.",
    "vn": "Mùa đông ở đây nhiệt độ rất thấp, bạn ít nhất phải mang một chiếc áo dày."
   }
  ],
  "hanzi": [
   {
    "c": "低",
    "p": "dī",
    "type": "左右结构 · Trái-phải",
    "st": 7,
    "ord": "亻 (nhân) trái → 氐 phải",
    "rad": "亻 (nhân – người)",
    "mean": "thấp",
    "tip": "Bộ người 亻 + 氐(biểu âm, gốc rễ ở dưới thấp) → NGƯỜI Ở VỊ TRÍ THẤP, mở rộng thành THẤP (đối lập với cao).",
    "cf": "底 (dǐ – \"đáy\", bộ 广\")",
    "w": "低 / 高低 / 降低"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Nhiệt độ cơ thể cũng thấp đi một chút rồi.",
    "answer": "体温也低了一些。",
    "answerPy": "Tǐwēn yě dī le yìxiē.",
    "note": "Câu trong bài khoá 3.",
    "pair": "低了一些"
   },
   {
    "promptLang": "vi",
    "prompt": "Do giá thấp nên đồ ở cửa hàng này bán rất chạy.",
    "answer": "由于价格低，这家商店的东西卖得特别好。",
    "answerPy": "Yóuyú jiàgé dī, zhè jiā shāngdiàn de dōngxi mài de tèbié hǎo.",
    "note": "Ôn 由于 (Bài 2 · điểm 4).",
    "pair": "由于……"
   }
  ]
 },
 {
  "n": 31,
  "zh": "难受",
  "py": "nánshòu",
  "pos": "Tính từ",
  "vn": "khó chịu (trong người); buồn",
  "hv": "nan thụ",
  "em": "😣",
  "lesson": 3,
  "explain": [
   "Cơ thể khó chịu (ốm, mệt) hoặc trong lòng buồn khổ."
  ],
  "usage": "很难受 · 身体难受 · 心里难受.",
  "collo": [
   "很难受",
   "身体难受",
   "心里难受",
   "难受极了"
  ],
  "colloFull": [
   {
    "zh": "很难受",
    "py": "Hěn nánshòu",
    "vn": "rất khó chịu"
   },
   {
    "zh": "身体难受",
    "py": "Shēntǐ nánshòu",
    "vn": "người khó chịu"
   },
   {
    "zh": "心里难受",
    "py": "Xīnlǐ nánshòu",
    "vn": "buồn trong lòng"
   },
   {
    "zh": "难受极了",
    "py": "Nánshòu jí le",
    "vn": "khó chịu vô cùng"
   }
  ],
  "patterns": [
   {
    "s": "身体 / 心里 + 难受",
    "m": "Khó chịu trong người / buồn trong lòng"
   }
  ],
  "ex_zh": "第二天醒来时，她感觉头不那么疼了，体温也低了一些，身体不那么难受了。",
  "ex_py": "Dì èr tiān xǐng lái shí, tā gǎnjué tóu bú nàme téng le, tǐwēn yě dī le yìxiē, shēntǐ bú nàme nánshòu le.",
  "ex_vn": "Hôm sau lúc tỉnh dậy, cô ấy thấy đầu không đau như trước, nhiệt độ cũng hạ đi một chút, người không còn khó chịu như trước nữa.",
  "exList": [
   {
    "zh": "第二天醒来时，她感觉头不那么疼了，体温也低了一些，身体不那么难受了。",
    "py": "Dì èr tiān xǐng lái shí, tā gǎnjué tóu bú nàme téng le, tǐwēn yě dī le yìxiē, shēntǐ bú nàme nánshòu le.",
    "vn": "Hôm sau lúc tỉnh dậy, cô ấy thấy đầu không đau như trước, nhiệt độ cũng hạ đi một chút, người không còn khó chịu như trước nữa."
   },
   {
    "zh": "听到这个消息，她心里很难受。",
    "py": "Tīng dào zhège xiāoxi, tā xīnlǐ hěn nánshòu.",
    "vn": "Nghe tin này, trong lòng cô ấy rất buồn."
   }
  ],
  "hanzi": [
   {
    "c": "难",
    "p": "nán",
    "type": "左右结构 · Trái-phải (giản thể)",
    "st": 10,
    "ord": "又 trái → 隹 (chuy) phải",
    "rad": "又 (hựu)",
    "mean": "khó",
    "tip": "难 (khó) + 道(nói, đường) → khó mà NÓI RẰNG không phải vậy, mở rộng thành phó từ phản vấn CHẲNG LẼ.",
    "cf": "滩 (tān – \"bãi cát\", bộ 氵\")",
    "w": "难道 / 难过 / 困难"
   },
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
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Ông bị ốm rồi, rất khó chịu.",
    "answer": "爷爷生病了，非常难受。",
    "answerPy": "Yéye shēngbìng le, fēicháng nánshòu.",
    "note": "Đáp án gợi ý bài nhìn tranh của sách.",
    "pair": "非常难受"
   },
   {
    "promptLang": "vi",
    "prompt": "Bụng tôi đau dữ quá, khó chịu đến mức không ngủ được.",
    "answer": "我肚子疼得厉害，难受得睡不着觉。",
    "answerPy": "Wǒ dùzi téng de lìhai, nánshòu de shuì bù zhe jué.",
    "note": "Ôn 肚子 (từ mới Bài 5) + V得厉害 (Bài 6 · điểm 1).",
    "pair": "Adj + 得 + 厉害"
   }
  ]
 },
 {
  "n": 32,
  "zh": "通",
  "py": "tōng",
  "pos": "Động từ",
  "vn": "thông, hiểu (ngôn ngữ); thông suốt",
  "hv": "thông",
  "em": "🔗",
  "lesson": 4,
  "explain": [
   "Trong bài: hiểu, thông (ngôn ngữ) — 语言不通 = bất đồng ngôn ngữ. Nghĩa khác: thông suốt (đường), gọi được (điện thoại): 电话打不通."
  ],
  "usage": "语言不通 · 打不通 · 想不通.",
  "collo": [
   "语言不通",
   "打不通",
   "想不通",
   "路不通"
  ],
  "colloFull": [
   {
    "zh": "语言不通",
    "py": "Yǔyán bù tōng",
    "vn": "bất đồng ngôn ngữ"
   },
   {
    "zh": "打不通",
    "py": "Dǎ bù tōng",
    "vn": "gọi không được"
   },
   {
    "zh": "想不通",
    "py": "Xiǎng bù tōng",
    "vn": "nghĩ không thông"
   },
   {
    "zh": "路不通",
    "py": "Lù bù tōng",
    "vn": "đường không thông"
   }
  ],
  "patterns": [
   {
    "s": "语言 + 不通",
    "m": "Bất đồng ngôn ngữ"
   },
   {
    "s": "V + 不通",
    "m": "Bổ ngữ khả năng: 打不通 / 想不通"
   }
  ],
  "ex_zh": "外国人第一次在中国看病，可能会担心语言不通。",
  "ex_py": "Wàiguó rén dì yī cì zài Zhōngguó kànbìng, kěnéng huì dānxīn yǔyán bù tōng.",
  "ex_vn": "Người nước ngoài lần đầu khám bệnh ở Trung Quốc có thể sẽ lo bất đồng ngôn ngữ.",
  "exList": [
   {
    "zh": "外国人第一次在中国看病，可能会担心语言不通。",
    "py": "Wàiguó rén dì yī cì zài Zhōngguó kànbìng, kěnéng huì dānxīn yǔyán bù tōng.",
    "vn": "Người nước ngoài lần đầu khám bệnh ở Trung Quốc có thể sẽ lo bất đồng ngôn ngữ."
   },
   {
    "zh": "我给他打了好几次电话，都打不通。",
    "py": "Wǒ gěi tā dǎ le hǎo jǐ cì diànhuà, dōu dǎ bù tōng.",
    "vn": "Tôi gọi cho anh ấy mấy lần rồi mà đều không được."
   }
  ],
  "hanzi": [
   {
    "c": "通",
    "p": "tōng",
    "type": "半包围结构 · Nửa bao quanh",
    "st": 10,
    "ord": "甬 trong → 辶 bao",
    "rad": "辶 (sước)",
    "mean": "thông",
    "tip": "Đi 辶 + 甬 → đường đi THÔNG suốt. 交通 = giao thông; 通过 (Bài 9); 通知 (Bài 4); 普通话 (Bài 12).",
    "cf": "桶 (tǒng – thùng, Bài 14)",
    "w": "交通 / 通过 / 通知 / 普通"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Lần đầu khám bệnh ở Trung Quốc, có thể sẽ lo bất đồng ngôn ngữ.",
    "answer": "第一次在中国看病，可能会担心语言不通。",
    "answerPy": "Dì yī cì zài Zhōngguó kànbìng, kěnéng huì dānxīn yǔyán bù tōng.",
    "note": "Câu trong bài khoá 4.",
    "pair": "语言不通"
   },
   {
    "promptLang": "vi",
    "prompt": "Tuy bất đồng ngôn ngữ, có điều có bạn ở bên nên tôi yên tâm hơn nhiều.",
    "answer": "虽然语言不通，不过有你陪着，我就放心多了。",
    "answerPy": "Suīrán yǔyán bù tōng, búguò yǒu nǐ péi zhe, wǒ jiù fàngxīn duō le.",
    "note": "Ôn 不过 (Bài 2 · điểm 2) + 陪.",
    "pair": "虽然……不过……"
   }
  ]
 },
 {
  "n": 33,
  "zh": "过程",
  "py": "guòchéng",
  "pos": "Danh từ",
  "vn": "quá trình, các bước (của một việc)",
  "hv": "quá trình",
  "em": "➡️",
  "lesson": 4,
  "explain": [
   "Toàn bộ các bước diễn ra của một việc từ đầu đến cuối."
  ],
  "usage": "看病的过程 · 做菜的过程 · 在……的过程中.",
  "collo": [
   "看病的过程",
   "做菜的过程",
   "学习过程",
   "在……的过程中"
  ],
  "colloFull": [
   {
    "zh": "看病的过程",
    "py": "Kànbìng de guòchéng",
    "vn": "quy trình khám bệnh"
   },
   {
    "zh": "做菜的过程",
    "py": "Zuò cài de guòchéng",
    "vn": "các bước nấu món ăn"
   },
   {
    "zh": "学习过程",
    "py": "Xuéxí guòchéng",
    "vn": "quá trình học"
   },
   {
    "zh": "在……的过程中",
    "py": "Zài…… de guòchéng zhōng",
    "vn": "trong quá trình …"
   }
  ],
  "patterns": [
   {
    "s": "V + 的过程",
    "m": "Quá trình làm gì"
   },
   {
    "s": "在 + ……的过程中",
    "m": "Trong quá trình …"
   }
  ],
  "ex_zh": "外国人第一次在中国看病，可能会担心语言不通，或者觉得看病的过程和自己的国家不同。",
  "ex_py": "Wàiguó rén dì yī cì zài Zhōngguó kànbìng, kěnéng huì dānxīn yǔyán bù tōng, huòzhě juéde kànbìng de guòchéng hé zìjǐ de guójiā bùtóng.",
  "ex_vn": "Người nước ngoài lần đầu khám bệnh ở Trung Quốc có thể lo bất đồng ngôn ngữ, hoặc thấy quy trình khám bệnh khác với nước mình.",
  "exList": [
   {
    "zh": "外国人第一次在中国看病，可能会担心语言不通，或者觉得看病的过程和自己的国家不同。",
    "py": "Wàiguó rén dì yī cì zài Zhōngguó kànbìng, kěnéng huì dānxīn yǔyán bù tōng, huòzhě juéde kànbìng de guòchéng hé zìjǐ de guójiā bùtóng.",
    "vn": "Người nước ngoài lần đầu khám bệnh ở Trung Quốc có thể lo bất đồng ngôn ngữ, hoặc thấy quy trình khám bệnh khác với nước mình."
   },
   {
    "zh": "在学习中文的过程中，我认识了很多中国朋友。",
    "py": "Zài xuéxí Zhōngwén de guòchéng zhōng, wǒ rènshi le hěn duō Zhōngguó péngyou.",
    "vn": "Trong quá trình học tiếng Trung, tôi đã quen nhiều bạn Trung Quốc."
   }
  ],
  "hanzi": [
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
   },
   {
    "c": "程",
    "p": "chéng",
    "type": "左右结构 · Trái-phải",
    "st": 12,
    "ord": "禾 (hòa) trái → 呈 (trình) phải",
    "rad": "禾 (hòa – lúa)",
    "mean": "trình tự, chặng đường",
    "tip": "Bộ lúa 禾 (đo lường mùa vụ theo trình tự) + 呈(biểu âm) → TRÌNH TỰ, kết hợp 过(trải qua) thành 过程 = QUÁ TRÌNH.",
    "cf": "呈 (chéng – \"trình bày\", không có bộ 禾\")",
    "w": "过程 / 过程中 / 工程"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Lần sau tôi quay lại các bước nấu món này rồi gửi cho bạn.",
    "answer": "下次我把做菜的过程拍下来发给你。",
    "answerPy": "Xià cì wǒ bǎ zuò cài de guòchéng pāi xiàlái fā gěi nǐ.",
    "note": "Bài tập chọn từ của sách (câu 6).",
    "pair": "把……拍下来"
   },
   {
    "promptLang": "vi",
    "prompt": "Trong quá trình khám bệnh bạn có gặp vấn đề gì không?",
    "answer": "看病的过程中，你有没有遇到什么问题？",
    "answerPy": "Kànbìng de guòchéng zhōng, nǐ yǒu méiyǒu yùdào shénme wèntí?",
    "note": "Câu hỏi phần Khởi động của sách.",
    "pair": "……的过程中"
   }
  ]
 },
 {
  "n": 34,
  "zh": "部",
  "py": "bù",
  "pos": "Danh từ",
  "vn": "bộ phận, khu, khoa, phòng (ban)",
  "hv": "bộ",
  "em": "🏢",
  "lesson": 4,
  "explain": [
   "Một bộ phận / khu của bệnh viện, công ty, cơ quan: 国际部, 普通部, 市场部. (Còn là lượng từ cho phim, điện thoại: 一部电影.)"
  ],
  "usage": "国际部 · 普通部 · 市场部.",
  "collo": [
   "国际部",
   "普通部",
   "市场部",
   "一部电影"
  ],
  "colloFull": [
   {
    "zh": "国际部",
    "py": "Guójì bù",
    "vn": "khu quốc tế"
   },
   {
    "zh": "普通部",
    "py": "Pǔ tōng bù",
    "vn": "khu thường"
   },
   {
    "zh": "市场部",
    "py": "Shìchǎng bù",
    "vn": "phòng thị trường"
   },
   {
    "zh": "一部电影",
    "py": "Yí bù diànyǐng",
    "vn": "một bộ phim"
   }
  ],
  "patterns": [
   {
    "s": "N + 部",
    "m": "Bộ phận / khu …"
   }
  ],
  "ex_zh": "有的医院有国际部，那里的医生一般会说英文。",
  "ex_py": "Yǒude yīyuàn yǒu guójì bù, nàli de yīshēng yìbān huì shuō yīng wén.",
  "ex_vn": "Có bệnh viện có khu quốc tế, bác sĩ ở đó thường biết nói tiếng Anh.",
  "exList": [
   {
    "zh": "有的医院有国际部，那里的医生一般会说英文。",
    "py": "Yǒude yīyuàn yǒu guójì bù, nàli de yīshēng yìbān huì shuō yīng wén.",
    "vn": "Có bệnh viện có khu quốc tế, bác sĩ ở đó thường biết nói tiếng Anh."
   },
   {
    "zh": "我在公司的市场部工作。",
    "py": "Wǒ zài gōngsī de shìchǎng bù gōngzuò.",
    "vn": "Tôi làm ở phòng thị trường của công ty."
   }
  ],
  "hanzi": [
   {
    "c": "部",
    "p": "bù",
    "type": "左右结构 · Trái-phải",
    "st": 10,
    "ord": "咅 trái → 阝 phải",
    "rad": "阝 (ấp – vùng)",
    "mean": "bộ, phần",
    "tip": "Bộ 阝(vùng đất) + 咅 → nghĩa gốc là VÙNG, mở rộng thành BỘ PHẬN, kết hợp 分 thành 部分 = PHẦN.",
    "cf": "陪 (péi – \"cùng\", bộ 阝 bên trái)",
    "w": "部分 / 全部 / 大部分"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Phí ở khu quốc tế khá cao.",
    "answer": "国际部的收费比较高。",
    "answerPy": "Guójì bù de shōufèi bǐjiào gāo.",
    "note": "Câu trong bài khoá 4.",
    "pair": "……的收费"
   },
   {
    "promptLang": "vi",
    "prompt": "Nếu không có nhu cầu đặc biệt thì có thể chọn khu thường.",
    "answer": "要是没有特别需要，就可以选择普通部。",
    "answerPy": "Yàoshi méiyǒu tèbié xūyào, jiù kěyǐ xuǎnzé pǔ tōng bù.",
    "note": "Ôn 要是……就…… (Bài 1 · điểm 2).",
    "pair": "要是……就……"
   }
  ]
 },
 {
  "n": 35,
  "zh": "收费",
  "py": "shōufèi",
  "pos": "Động từ",
  "vn": "thu phí; mức phí",
  "hv": "thu phí",
  "em": "💰",
  "lesson": 4,
  "explain": [
   "Thu tiền (cho một dịch vụ). Cũng dùng như danh từ: 收费比较高 = mức phí khá cao."
  ],
  "usage": "收费高 / 低 · 不收费 · 怎么收费.",
  "collo": [
   "收费很高",
   "不收费",
   "怎么收费",
   "收费处"
  ],
  "colloFull": [
   {
    "zh": "收费很高",
    "py": "Shōufèi hěn gāo",
    "vn": "phí rất cao"
   },
   {
    "zh": "不收费",
    "py": "Bù shōufèi",
    "vn": "miễn phí"
   },
   {
    "zh": "怎么收费",
    "py": "Zěnme shōufèi",
    "vn": "tính phí thế nào"
   },
   {
    "zh": "收费处",
    "py": "Shōufèi chù",
    "vn": "quầy thu phí"
   }
  ],
  "patterns": [
   {
    "s": "N + 的收费 + 高 / 低",
    "m": "Mức phí cao / thấp"
   },
   {
    "s": "不 + 收费",
    "m": "Miễn phí"
   }
  ],
  "ex_zh": "有的医院有国际部，那里的医生一般会说英文，交流比较方便，但是国际部的收费比较高。",
  "ex_py": "Yǒude yīyuàn yǒu guójì bù, nàli de yīshēng yìbān huì shuō yīng wén, jiāoliú bǐjiào fāngbiàn, dànshì guójì bù de shōufèi bǐjiào gāo.",
  "ex_vn": "Có bệnh viện có khu quốc tế, bác sĩ ở đó thường biết tiếng Anh, giao tiếp khá thuận tiện, nhưng phí ở khu quốc tế khá cao.",
  "exList": [
   {
    "zh": "有的医院有国际部，那里的医生一般会说英文，交流比较方便，但是国际部的收费比较高。",
    "py": "Yǒude yīyuàn yǒu guójì bù, nàli de yīshēng yìbān huì shuō yīng wén, jiāoliú bǐjiào fāngbiàn, dànshì guójì bù de shōufèi bǐjiào gāo.",
    "vn": "Có bệnh viện có khu quốc tế, bác sĩ ở đó thường biết tiếng Anh, giao tiếp khá thuận tiện, nhưng phí ở khu quốc tế khá cao."
   },
   {
    "zh": "这个博物馆不收费，任何人都可以进去参观。",
    "py": "Zhège bó wù guǎn bù shōufèi, rènhé rén dōu kěyǐ jìnqù cānguān.",
    "vn": "Bảo tàng này không thu phí, bất kỳ ai cũng có thể vào tham quan."
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
    "c": "费",
    "p": "fèi",
    "type": "形声字 · Chữ hình thanh",
    "st": 9,
    "ord": "弗 → 贝",
    "rad": "贝 (bối – vỏ sò, tiền)",
    "mean": "phí, tiền phải trả; tốn",
    "tip": "Trên là 弗 fú (chỉ âm), dưới là 贝 (tiền): khoản tiền phải bỏ ra — 收费, 学费, 浪费.",
    "cf": "贵 guì (đắt) — trên là 中 + 一",
    "w": "收费 / 学费 / 浪费"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Bảo tàng này không thu phí, bất kỳ ai cũng có thể vào tham quan.",
    "answer": "这个博物馆不收费，任何人都可以进去参观。",
    "answerPy": "Zhège bó wù guǎn bù shōufèi, rènhé rén dōu kěyǐ jìnqù cānguān.",
    "note": "Ôn 任何……都…… (Bài 1 · điểm 1).",
    "pair": "任何……都……"
   },
   {
    "promptLang": "vi",
    "prompt": "Khu quốc tế tuy giao tiếp tiện, có điều phí khá cao.",
    "answer": "国际部交流虽然方便，不过收费比较高。",
    "answerPy": "Guójì bù jiāoliú suīrán fāngbiàn, búguò shōufèi bǐjiào gāo.",
    "note": "Ôn 不过 (Bài 2 · điểm 2).",
    "pair": "虽然……不过……"
   }
  ]
 },
 {
  "n": 36,
  "zh": "情况",
  "py": "qíngkuàng",
  "pos": "Danh từ",
  "vn": "tình hình, tình trạng",
  "hv": "tình huống",
  "em": "📝",
  "lesson": 4,
  "explain": [
   "Tình hình, trạng thái của người hoặc sự việc (sức khỏe, công việc…). Hán Việt “tình huống” nhưng thường dịch là “tình hình”."
  ],
  "usage": "了解情况 · 病人的情况 · 工作情况.",
  "collo": [
   "了解情况",
   "病人的情况",
   "工作情况",
   "身体情况"
  ],
  "colloFull": [
   {
    "zh": "了解情况",
    "py": "Liǎojiě qíngkuàng",
    "vn": "tìm hiểu tình hình"
   },
   {
    "zh": "病人的情况",
    "py": "Bìngrén de qíngkuàng",
    "vn": "tình trạng bệnh nhân"
   },
   {
    "zh": "工作情况",
    "py": "Gōngzuò qíngkuàng",
    "vn": "tình hình công việc"
   },
   {
    "zh": "身体情况",
    "py": "Shēntǐ qíngkuàng",
    "vn": "tình hình sức khỏe"
   }
  ],
  "patterns": [
   {
    "s": "了解 / 问 + 情况",
    "m": "Tìm hiểu / hỏi tình hình"
   },
   {
    "s": "N + 的 + 情况",
    "m": "Tình hình của …"
   }
  ],
  "ex_zh": "医生会问病人的情况，有时还会做一些检查。",
  "ex_py": "Yīshēng huì wèn bìngrén de qíngkuàng, yǒushí hái huì zuò yìxiē jiǎnchá.",
  "ex_vn": "Bác sĩ sẽ hỏi tình hình bệnh nhân, có lúc còn làm một số xét nghiệm.",
  "exList": [
   {
    "zh": "医生会问病人的情况，有时还会做一些检查。",
    "py": "Yīshēng huì wèn bìngrén de qíngkuàng, yǒushí hái huì zuò yìxiē jiǎnchá.",
    "vn": "Bác sĩ sẽ hỏi tình hình bệnh nhân, có lúc còn làm một số xét nghiệm."
   },
   {
    "zh": "最近公司的情况怎么样？",
    "py": "Zuìjìn gōngsī de qíngkuàng zěnmeyàng?",
    "vn": "Dạo này tình hình công ty thế nào?"
   }
  ],
  "hanzi": [
   {
    "c": "情",
    "p": "qíng",
    "type": "左右结构 · Trái-phải",
    "st": 11,
    "ord": "忄 (tâm) trái → 青 (thanh) phải",
    "rad": "忄 (tâm – trái tim, đứng)",
    "mean": "tình cảm",
    "tip": "Bộ tâm 忄 (cảm xúc trong lòng) + 青 (trong trẻo, biểu âm) → cảm xúc TRONG SÁNG, CHÂN THẬT trong lòng = TÌNH CẢM.",
    "cf": "请 (qǐng – \"mời\", cũng có 青\" nhưng bộ 讠 khác)",
    "w": "爱情 / 感情 / 心情"
   },
   {
    "c": "况",
    "p": "kuàng",
    "type": "左右结构 · Trái-phải",
    "st": 7,
    "ord": "氵 (thủy) trái → 兄 (huynh) phải",
    "rad": "氵 (thủy – nước)",
    "mean": "tình trạng",
    "tip": "Bộ nước 氵 (như dòng chảy biến đổi) + 兄(biểu âm) → mở rộng thành TÌNH TRẠNG, kết hợp 情(tình huống) thành 情况 = TÌNH HÌNH.",
    "cf": "况 dễ nhầm với 沉 (chén – \"chìm\")",
    "w": "情况 / 情形 / 何况"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Giám đốc gọi bạn qua, muốn tìm hiểu tình hình công việc gần đây.",
    "answer": "经理叫你过去，要了解一下最近的工作情况。",
    "answerPy": "Jīnglǐ jiào nǐ guòqù, yào liǎojiě yíxià zuìjìn de gōngzuò qíngkuàng.",
    "note": "Bài tập chọn từ của sách (câu 8).",
    "pair": "了解……情况"
   },
   {
    "promptLang": "vi",
    "prompt": "Bác sĩ hỏi tình trạng bệnh nhân, thậm chí còn hỏi cả chuyện ăn uống của cô ấy.",
    "answer": "医生问了病人的情况，甚至还问了她吃饭的情况。",
    "answerPy": "Yīshēng wèn le bìngrén de qíngkuàng, shènzhì hái wèn le tā chīfàn de qíngkuàng.",
    "note": "Ôn 甚至 (Bài 3 · điểm 3).",
    "pair": "甚至……"
   }
  ]
 },
 {
  "n": 37,
  "zh": "好",
  "py": "hǎo",
  "pos": "Động từ",
  "vn": "để (dễ / tiện) làm gì",
  "hv": "hảo",
  "em": "🎯",
  "lesson": 4,
  "explain": [
   "Đứng ở vế sau của câu mục đích 「……，好……」: làm việc ở vế trước ĐỂ việc ở vế sau dễ / có thể thực hiện. Khác hẳn nghĩa “tốt” quen thuộc!"
  ],
  "usage": "……，好 + V · ……，(Sub) + 好 + V.",
  "collo": [
   "好联系",
   "好做决定",
   "好让他放心",
   "好早点儿走"
  ],
  "colloFull": [
   {
    "zh": "好联系",
    "py": "Hǎo liánxì",
    "vn": "để tiện liên lạc"
   },
   {
    "zh": "好做决定",
    "py": "Hǎo zuò juédìng",
    "vn": "để dễ quyết định"
   },
   {
    "zh": "好让他放心",
    "py": "Hǎo ràng tā fàngxīn",
    "vn": "để anh ấy yên tâm"
   },
   {
    "zh": "好早点儿走",
    "py": "Hǎo zǎo diǎnr zǒu",
    "vn": "để đi sớm được"
   }
  ],
  "patterns": [
   {
    "s": "Việc làm，(Sub) + 好 + mục đích",
    "m": "Bài 6 · điểm 4"
   },
   {
    "s": "好 (để) ≠ 好 (tốt)",
    "m": "好 ở vế sau, trước động từ = “để”"
   }
  ],
  "ex_zh": "医生会问病人的情况，有时还会做一些检查，好给出合适的治疗方法。",
  "ex_py": "Yīshēng huì wèn bìngrén de qíngkuàng, yǒushí hái huì zuò yìxiē jiǎnchá, hǎo gěi chū héshì de zhìliáo fāngfǎ.",
  "ex_vn": "Bác sĩ sẽ hỏi tình hình bệnh nhân, có lúc còn làm một số xét nghiệm, để đưa ra cách điều trị phù hợp.",
  "exList": [
   {
    "zh": "医生会问病人的情况，有时还会做一些检查，好给出合适的治疗方法。",
    "py": "Yīshēng huì wèn bìngrén de qíngkuàng, yǒushí hái huì zuò yìxiē jiǎnchá, hǎo gěi chū héshì de zhìliáo fāngfǎ.",
    "vn": "Bác sĩ sẽ hỏi tình hình bệnh nhân, có lúc còn làm một số xét nghiệm, để đưa ra cách điều trị phù hợp."
   },
   {
    "zh": "你早点儿睡，明天好早点儿起床。",
    "py": "Nǐ zǎo diǎnr shuì, míngtiān hǎo zǎo diǎnr qǐchuáng.",
    "vn": "Bạn ngủ sớm đi, để mai còn dậy sớm."
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
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Ngày nào tôi cũng gọi điện cho gia đình để họ yên tâm.",
    "answer": "我每天都给家人打电话，好让他们放心。",
    "answerPy": "Wǒ měi tiān dōu gěi jiārén dǎdiànhuà, hǎo ràng tāmen fàngxīn.",
    "note": "Đáp án gợi ý của sách (Bài 6 · điểm 4).",
    "pair": "……，好……"
   },
   {
    "promptLang": "vi",
    "prompt": "Hôm nay tôi làm xong việc luôn, để mai đi chơi với bạn.",
    "answer": "我今天就把工作做完，明天好陪你出去玩。",
    "answerPy": "Wǒ jīntiān jiù bǎ gōngzuò zuò wán, míngtiān hǎo péi nǐ chūqù wán.",
    "note": "Đáp án gợi ý của sách; câu chữ 把.",
    "pair": "……，明天好……"
   }
  ]
 },
 {
  "n": 38,
  "zh": "治疗",
  "py": "zhìliáo",
  "pos": "Động từ",
  "vn": "điều trị, chữa trị",
  "hv": "trị liệu",
  "em": "🩺",
  "lesson": 4,
  "explain": [
   "Dùng thuốc, tiêm, phẫu thuật… để chữa bệnh. Có thể làm danh từ: 得到治疗, 治疗方法."
  ],
  "usage": "治疗方法 · 得到治疗 · 住院治疗.",
  "collo": [
   "治疗方法",
   "得到治疗",
   "住院治疗",
   "治疗方案"
  ],
  "colloFull": [
   {
    "zh": "治疗方法",
    "py": "Zhìliáo fāngfǎ",
    "vn": "cách điều trị"
   },
   {
    "zh": "得到治疗",
    "py": "Dédào zhìliáo",
    "vn": "được điều trị"
   },
   {
    "zh": "住院治疗",
    "py": "Zhùyuàn zhìliáo",
    "vn": "nằm viện điều trị"
   },
   {
    "zh": "治疗方案",
    "py": "Zhìliáo fāng'àn",
    "vn": "phác đồ điều trị"
   }
  ],
  "patterns": [
   {
    "s": "得到 + 治疗",
    "m": "Được điều trị"
   },
   {
    "s": "治疗 + 的 + 方法 / 方案",
    "m": "Làm định ngữ"
   }
  ],
  "ex_zh": "只要按照医生说的一步一步来，一般都可以顺利得到治疗。",
  "ex_py": "Zhīyào ànzhào yīshēng shuō de yí bù yi bù lái, yìbān dōu kěyǐ shùnlì dédào zhìliáo.",
  "ex_vn": "Chỉ cần làm từng bước theo lời bác sĩ, thường đều được điều trị suôn sẻ.",
  "exList": [
   {
    "zh": "只要按照医生说的一步一步来，一般都可以顺利得到治疗。",
    "py": "Zhīyào ànzhào yīshēng shuō de yí bù yi bù lái, yìbān dōu kěyǐ shùnlì dédào zhìliáo.",
    "vn": "Chỉ cần làm từng bước theo lời bác sĩ, thường đều được điều trị suôn sẻ."
   },
   {
    "zh": "他的病需要住院治疗一个月。",
    "py": "Tā de bìng xūyào zhùyuàn zhìliáo yí gè yuè.",
    "vn": "Bệnh của anh ấy cần nằm viện điều trị một tháng."
   }
  ],
  "hanzi": [
   {
    "c": "治",
    "p": "zhì",
    "type": "形声字 · Chữ hình thanh",
    "st": 8,
    "ord": "氵 → 台",
    "rad": "氵 (thủy – nước)",
    "mean": "chữa (bệnh); trị, cai quản",
    "tip": "Bộ 氵 (nước) + 台 (chỉ âm): ngày xưa trị thủy (chế ngự lũ) là việc lớn nhất — sau thành “trị”: 治疗 (chữa bệnh), 政治.",
    "cf": "始 shǐ (bắt đầu) — bên trái là 女; 抬 tái (nâng) — bên trái là 扌",
    "w": "治疗 / 治病 / 政治"
   },
   {
    "c": "疗",
    "p": "liáo",
    "type": "形声字 · Chữ hình thanh",
    "st": 7,
    "ord": "疒 → 了",
    "rad": "疒 (nạch – bệnh tật)",
    "mean": "chữa bệnh",
    "tip": "Bộ 疒 (giường bệnh) + 了 liǎo (chỉ âm, cũng gợi “xong”): chữa cho bệnh “xong” — 治疗.",
    "cf": "疼 téng (đau) — trong là 冬; 病 bìng (bệnh) — trong là 丙",
    "w": "治疗 / 医疗 / 疗效"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Chỉ cần làm từng bước theo lời bác sĩ, thường đều được điều trị suôn sẻ.",
    "answer": "只要按照医生说的一步一步来，一般都可以顺利得到治疗。",
    "answerPy": "Zhīyào ànzhào yīshēng shuō de yí bù yi bù lái, yìbān dōu kěyǐ shùnlì dédào zhìliáo.",
    "note": "Câu trong bài khoá 4.",
    "pair": "只要……都……"
   },
   {
    "promptLang": "vi",
    "prompt": "Bệnh của anh ấy cần nằm viện điều trị ít nhất một tuần.",
    "answer": "他的病至少需要住院治疗一个星期。",
    "answerPy": "Tā de bìng zhìshǎo xūyào zhùyuàn zhìliáo yí gè xīngqī.",
    "note": "Ôn 至少 (Bài 5 · điểm 1).",
    "pair": "至少……"
   }
  ]
 },
 {
  "n": 39,
  "zh": "步",
  "py": "bù",
  "pos": "Danh từ",
  "vn": "bước",
  "hv": "bộ",
  "em": "👣",
  "lesson": 4,
  "explain": [
   "Bước chân; cũng là bước (giai đoạn) của một việc: 第一步, 一步一步来."
  ],
  "usage": "一步一步 · 第一步 · 走几步.",
  "collo": [
   "一步一步来",
   "第一步",
   "走几步",
   "下一步"
  ],
  "colloFull": [
   {
    "zh": "一步一步来",
    "py": "Yí bù yi bù lái",
    "vn": "làm từng bước"
   },
   {
    "zh": "第一步",
    "py": "Dì yī bù",
    "vn": "bước đầu tiên"
   },
   {
    "zh": "走几步",
    "py": "Zǒu jǐ bù",
    "vn": "đi vài bước"
   },
   {
    "zh": "下一步",
    "py": "Xià yí bù",
    "vn": "bước tiếp theo"
   }
  ],
  "patterns": [
   {
    "s": "一步一步 + V / 来",
    "m": "Từng bước một"
   },
   {
    "s": "第 + số + 步",
    "m": "Bước thứ …"
   }
  ],
  "ex_zh": "只要按照医生说的一步一步来，一般都可以顺利得到治疗。",
  "ex_py": "Zhīyào ànzhào yīshēng shuō de yí bù yi bù lái, yìbān dōu kěyǐ shùnlì dédào zhìliáo.",
  "ex_vn": "Chỉ cần làm từng bước theo lời bác sĩ, thường đều được điều trị suôn sẻ.",
  "exList": [
   {
    "zh": "只要按照医生说的一步一步来，一般都可以顺利得到治疗。",
    "py": "Zhīyào ànzhào yīshēng shuō de yí bù yi bù lái, yìbān dōu kěyǐ shùnlì dédào zhìliáo.",
    "vn": "Chỉ cần làm từng bước theo lời bác sĩ, thường đều được điều trị suôn sẻ."
   },
   {
    "zh": "学中文的第一步是学好拼音。",
    "py": "Xué Zhōngwén de dì yī bù shì xué hǎo pīn yīn.",
    "vn": "Bước đầu tiên của việc học tiếng Trung là học tốt pinyin."
   }
  ],
  "hanzi": [
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
    "prompt": "Khám bệnh ở Trung Quốc, bước đầu tiên là lấy số.",
    "answer": "在中国看病，第一步是挂号。",
    "answerPy": "Zài Zhōngguó kànbìng, dì yī bù shì guàhào.",
    "note": "第一步是…….",
    "pair": "第一步是……"
   },
   {
    "promptLang": "vi",
    "prompt": "Đừng sốt ruột, cứ làm từng bước, vẫn kịp mà.",
    "answer": "别着急，一步一步来，来得及。",
    "answerPy": "Bié zháojí, yí bù yi bù lái, láidejí.",
    "note": "Ôn 来得及 (Bài 4 · điểm 4).",
    "pair": "来得及"
   }
  ]
 }
];
var wuData = [
 {
  "img": "/images/hsk4v3/bai-6/wu-A.webp",
  "label": "汗",
  "py": "hàn",
  "letter": "A"
 },
 {
  "img": "/images/hsk4v3/bai-6/wu-B.webp",
  "label": "醒",
  "py": "xǐng",
  "letter": "B"
 },
 {
  "img": "/images/hsk4v3/bai-6/wu-C.webp",
  "label": "护士",
  "py": "hùshi",
  "letter": "C"
 },
 {
  "img": "/images/hsk4v3/bai-6/wu-D.webp",
  "label": "打针",
  "py": "dǎzhēn",
  "letter": "D"
 },
 {
  "img": "/images/hsk4v3/bai-6/wu-E.webp",
  "label": "咳嗽",
  "py": "késou",
  "letter": "E"
 },
 {
  "img": "/images/hsk4v3/bai-6/wu-F.webp",
  "label": "大厅",
  "py": "dàtīng",
  "letter": "F"
 }
];
var dialogData = [
 {
  "scene": "在家里 · Ở nhà (Bạch Gia Nguyệt nằm trên giường gọi điện cho Lý Văn)",
  "anh": "/images/hsk4v3/bai-6/kv-1.webp",
  "nguoi": [
   {
    "ten": "白家月",
    "anh": "/images/hsk4v3/nv/bai.webp"
   },
   {
    "ten": "李文",
    "anh": "/images/hsk4v3/nv/liwen.webp"
   }
  ],
  "preQuiz": [
   {
    "q": "李文让白家月做什么？",
    "opts": [
     "在家休息",
     "陪他去医院",
     "去医院检查",
     "给他当翻译"
    ],
    "ans": 2
   },
   {
    "q": "白家月担心什么？",
    "opts": [
     "不知道吃什么药",
     "不知道怎么看病",
     "不知道哪家医院好",
     "身体越来越不舒服"
    ],
    "ans": 1
   }
  ],
  "lines": [
   {
    "sp": 0,
    "zh": "喂，李文，我身体不舒服。",
    "py": "Wèi, Lǐ Wén, wǒ shēntǐ bù shūfu.",
    "vn": "A lô, Lý Văn à, tớ thấy trong người không khỏe."
   },
   {
    "sp": 1,
    "zh": "你怎么了？听你的声音，好像感冒了。",
    "py": "Nǐ zěnme le? Tīng nǐ de shēngyīn, hǎoxiàng gǎnmào le.",
    "vn": "Cậu sao thế? Nghe giọng cậu hình như bị cảm rồi."
   },
   {
    "sp": 0,
    "zh": "对，我还发烧，一直咳嗽，咳得很厉害。",
    "py": "Duì, wǒ hái fāshāo, yìzhí késou, ké de hěn lìhai.",
    "vn": "Ừ, tớ còn sốt nữa, ho suốt, ho dữ lắm."
   },
   {
    "sp": 1,
    "zh": "那挺严重的，最好赶快去医院检查一下。",
    "py": "Nà tǐng yánzhòng de, zuìhǎo gǎnkuài qù yīyuàn jiǎnchá yíxià.",
    "vn": "Thế thì khá nặng đấy, tốt nhất cậu mau đi bệnh viện khám đi."
   },
   {
    "sp": 0,
    "zh": "我也这么想，不过我来中国后还没去过医院，不知道怎么在中国的医院看病。",
    "py": "Wǒ yě zhème xiǎng, búguò wǒ lái Zhōngguó hòu hái méi qù guò yīyuàn, bù zhīdao zěnme zài Zhōngguó de yīyuàn kànbìng.",
    "vn": "Tớ cũng nghĩ vậy, có điều từ khi sang Trung Quốc tớ chưa đi bệnh viện lần nào, không biết khám bệnh ở bệnh viện Trung Quốc thế nào."
   },
   {
    "sp": 1,
    "zh": "没关系，我陪你一起去，还能帮你翻译。你在家等一下，我现在就去接你。",
    "py": "Méiguānxì, wǒ péi nǐ yìqǐ qù, hái néng bāng nǐ fānyì. Nǐ zài jiā děng yíxià, wǒ xiànzài jiù qù jiē nǐ.",
    "vn": "Không sao, tớ đi cùng cậu, còn phiên dịch giúp cậu được nữa. Cậu ở nhà đợi chút, tớ qua đón cậu ngay đây."
   },
   {
    "sp": 0,
    "zh": "太好了！有你陪着，我就放心多了。",
    "py": "Tài hǎo le! Yǒu nǐ péi zhe, wǒ jiù fàngxīn duō le.",
    "vn": "Tốt quá! Có cậu đi cùng, tớ yên tâm hơn nhiều rồi."
   }
  ]
 },
 {
  "scene": "在医院大厅 · Ở sảnh bệnh viện (Lý Văn giúp Bạch Gia Nguyệt làm thủ tục khám bệnh)",
  "anh": "/images/hsk4v3/bai-6/kv-2.webp",
  "nguoi": [
   {
    "ten": "李文",
    "anh": "/images/hsk4v3/nv/liwen.webp"
   },
   {
    "ten": "护士",
    "anh": "/images/hsk4v3/bai-6/hushi.webp"
   },
   {
    "ten": "白家月",
    "anh": "/images/hsk4v3/nv/bai.webp"
   }
  ],
  "preQuiz": [
   {
    "q": "护士让李文做什么？",
    "opts": [
     "排队等医生",
     "在大厅休息",
     "把护照交给她",
     "在表上写病人的信息"
    ],
    "ans": 3
   },
   {
    "q": "李文要去做什么？",
    "opts": [
     "挂号",
     "买药",
     "办护照",
     "找医生"
    ],
    "ans": 0
   }
  ],
  "lines": [
   {
    "sp": 0,
    "zh": "护士，您好，我的这位外国朋友生病了，第一次来这里看病，需要怎么做？",
    "py": "Hùshi, nín hǎo, wǒ de zhè wèi wàiguó péngyou shēngbìng le, dì yī cì lái zhèli kànbìng, xūyào zěnme zuò?",
    "vn": "Chào chị y tá, người bạn nước ngoài này của tôi bị ốm, lần đầu đến đây khám bệnh, cần làm thế nào ạ?"
   },
   {
    "sp": 1,
    "zh": "请在这张表上写上病人的姓名、性别、国籍、年龄、电话号码和家庭地址。",
    "py": "Qǐng zài zhè zhāng biǎo shàng xiě shàng bìngrén de xìngmíng, xìngbié, guójí, niánlíng, diànhuà hàomǎ hé jiātíng dìzhǐ.",
    "vn": "Anh viết vào tờ khai này họ tên, giới tính, quốc tịch, tuổi, số điện thoại và địa chỉ nhà của bệnh nhân nhé."
   },
   {
    "sp": 0,
    "zh": "我写好了，您看看，这样可以吗？",
    "py": "Wǒ xiě hǎo le, nín kàn kàn, zhèyàng kěyǐ ma?",
    "vn": "Tôi viết xong rồi, chị xem giúp, thế này được chưa ạ?"
   },
   {
    "sp": 1,
    "zh": "没问题，您拿着病人的护照去挂号吧。",
    "py": "Méi wèntí, nín ná zhe bìngrén de hùzhào qù guàhào ba.",
    "vn": "Được rồi, anh cầm hộ chiếu của bệnh nhân đi lấy số nhé."
   },
   {
    "sp": 0,
    "zh": "家月，我去排队挂号，你先在大厅休息，别着急。",
    "py": "Jiāyuè, wǒ qù páiduì guàhào, nǐ xiān zài dàtīng xiūxi, bié zháojí.",
    "vn": "Gia Nguyệt, tớ đi xếp hàng lấy số, cậu ngồi nghỉ ở sảnh trước, đừng sốt ruột nhé."
   },
   {
    "sp": 2,
    "zh": "好的，真是太谢谢你了！",
    "py": "Hǎo de, zhēn shì tài xièxiè nǐ le!",
    "vn": "Ừ, thật sự cảm ơn cậu nhiều lắm!"
   },
   {
    "sp": 0,
    "zh": "你跟我有什么好客气的。",
    "py": "Nǐ gēn wǒ yǒu shénme hǎo kèqi de.",
    "vn": "Cậu với tớ thì có gì mà phải khách sáo."
   }
  ]
 },
 {
  "scene": "一次看病的经历 · Một lần đi khám bệnh (Bạch Gia Nguyệt bị cúm)",
  "anh": "/images/hsk4v3/bai-6/kv-3.webp",
  "nguoi": [
   {
    "ten": "小语",
    "anh": "/images/hsk4v3/nv/xiaoyu.webp"
   }
  ],
  "preQuiz": [
   {
    "q": "白家月告诉医生什么了？",
    "opts": [
     "她总出汗",
     "她吃过药了",
     "她体温很低",
     "她一直头疼"
    ],
    "ans": 3
   },
   {
    "q": "第二天，白家月怎么样了？",
    "opts": [
     "头更疼了",
     "更不舒服了",
     "体温变高了",
     "不那么难受了"
    ],
    "ans": 3
   }
  ],
  "lines": [
   {
    "sp": 0,
    "zh": "下午白家月去看病了，她告诉医生，自己平时身体不错，偶尔才会生一次病。",
    "py": "Xiàwǔ Bái Jiāyuè qù kànbìng le, tā gàosu yīshēng, zìjǐ píngshí shēntǐ búcuò, ǒu'ěr cái huì shēng yí cì bìng.",
    "vn": "Buổi chiều Bạch Gia Nguyệt đi khám bệnh, cô ấy nói với bác sĩ rằng bình thường mình khá khỏe, lâu lâu mới ốm một lần."
   },
   {
    "sp": 0,
    "zh": "这次她病得很厉害，头也一直疼，身上一点儿力气都没有。",
    "py": "Zhè cì tā bìng de hěn lìhai, tóu yě yìzhí téng, shēn shàng yìdiǎnr lìqi dōu méiyǒu.",
    "vn": "Lần này cô ấy ốm rất nặng, đầu cũng đau suốt, người chẳng còn chút sức lực nào."
   },
   {
    "sp": 0,
    "zh": "医生给她做了检查，检查结果出来后，发现她得了比较严重的流行性感冒。",
    "py": "Yīshēng gěi tā zuò le jiǎnchá, jiǎnchá jiéguǒ chū lái hòu, fāxiàn tā dé le bǐjiào yánzhòng de liúxíngxìng gǎnmào.",
    "vn": "Bác sĩ khám cho cô ấy, sau khi có kết quả kiểm tra thì phát hiện cô ấy bị cúm khá nặng."
   },
   {
    "sp": 0,
    "zh": "医生告诉她，现在需要把体温降下来，光吃药恐怕不够，打针会更有效。",
    "py": "Yīshēng gàosu tā, xiànzài xūyào bǎ tǐwēn jiàng xiàlái, guāng chī yào kǒngpà bú gòu, dǎzhēn huì gèng yǒuxiào.",
    "vn": "Bác sĩ nói với cô ấy rằng bây giờ cần hạ nhiệt độ xuống, chỉ uống thuốc e là không đủ, tiêm sẽ hiệu quả hơn."
   },
   {
    "sp": 0,
    "zh": "医生还让她回家以后按时吃药，多喝水，多休息。",
    "py": "Yīshēng huán ràng tā huí jiā yǐhòu ànshí chī yào, duō hē shuǐ, duō xiūxi.",
    "vn": "Bác sĩ còn dặn cô ấy về nhà uống thuốc đúng giờ, uống nhiều nước, nghỉ ngơi nhiều."
   },
   {
    "sp": 0,
    "zh": "晚上，白家月睡觉时出了一身汗。",
    "py": "Wǎnshang, Bái Jiāyuè shuìjiào shí chū le yì shēn hàn.",
    "vn": "Buổi tối, Bạch Gia Nguyệt ngủ toát mồ hôi khắp người."
   },
   {
    "sp": 0,
    "zh": "第二天醒来时，她感觉头不那么疼了，体温也低了一些，身体不那么难受了。",
    "py": "Dì èr tiān xǐng lái shí, tā gǎnjué tóu bú nàme téng le, tǐwēn yě dī le yìxiē, shēntǐ bú nàme nánshòu le.",
    "vn": "Hôm sau lúc tỉnh dậy, cô ấy thấy đầu không còn đau như trước, nhiệt độ cũng hạ đi một chút, người không còn khó chịu như trước nữa."
   }
  ],
  "doan": true
 },
 {
  "scene": "怎么在中国看病 · Đi khám bệnh ở Trung Quốc như thế nào",
  "anh": "/images/hsk4v3/bai-6/kv-4.webp",
  "nguoi": [
   {
    "ten": "小语",
    "anh": "/images/hsk4v3/nv/xiaoyu.webp"
   }
  ],
  "preQuiz": [
   {
    "q": "关于国际部里的医生，下列哪项正确？",
    "opts": [
     "更专业",
     "是外国医生",
     "年龄比较大",
     "一般会说英文"
    ],
    "ans": 3
   },
   {
    "q": "根据课文，在中国看病，怎么做能顺利得到治疗？",
    "opts": [
     "找一个翻译",
     "去国际部看病",
     "按照医生说的做",
     "跟中国朋友一起去"
    ],
    "ans": 2
   }
  ],
  "lines": [
   {
    "sp": 0,
    "zh": "外国人第一次在中国看病，可能会担心语言不通，或者觉得看病的过程和自己的国家不同。",
    "py": "Wàiguó rén dì yī cì zài Zhōngguó kànbìng, kěnéng huì dānxīn yǔyán bù tōng, huòzhě juéde kànbìng de guòchéng hé zìjǐ de guójiā bùtóng.",
    "vn": "Người nước ngoài lần đầu đi khám bệnh ở Trung Quốc có thể sẽ lo bất đồng ngôn ngữ, hoặc thấy quy trình khám bệnh khác với nước mình."
   },
   {
    "sp": 0,
    "zh": "其实，这些问题都有办法解决。",
    "py": "Qíshí, zhèxiē wèntí dōu yǒu bànfǎ jiějué.",
    "vn": "Thật ra, những vấn đề này đều có cách giải quyết."
   },
   {
    "sp": 0,
    "zh": "有的医院有国际部，那里的医生一般会说英文，交流比较方便，但是国际部的收费比较高。",
    "py": "Yǒude yīyuàn yǒu guójì bù, nàli de yīshēng yìbān huì shuō yīng wén, jiāoliú bǐjiào fāngbiàn, dànshì guójì bù de shōufèi bǐjiào gāo.",
    "vn": "Có bệnh viện có khu quốc tế, bác sĩ ở đó thường biết nói tiếng Anh, giao tiếp khá thuận tiện, nhưng phí ở khu quốc tế khá cao."
   },
   {
    "sp": 0,
    "zh": "如果没有特别需要，可以选择普通部，用简单的中文和医生交流。",
    "py": "Rúguǒ méiyǒu tèbié xūyào, kěyǐ xuǎnzé pǔ tōng bù, yòng jiǎndān de Zhōngwén hé yīshēng jiāoliú.",
    "vn": "Nếu không có nhu cầu đặc biệt, có thể chọn khu thường, dùng tiếng Trung đơn giản để nói chuyện với bác sĩ."
   },
   {
    "sp": 0,
    "zh": "在中国看病要先挂号，然后再去找医生。",
    "py": "Zài Zhōngguó kànbìng yào xiān guàhào, ránhòu zài qù zhǎo yīshēng.",
    "vn": "Khám bệnh ở Trung Quốc phải lấy số trước, rồi mới đi gặp bác sĩ."
   },
   {
    "sp": 0,
    "zh": "医生会问病人的情况，有时还会做一些检查，好给出合适的治疗方法。",
    "py": "Yīshēng huì wèn bìngrén de qíngkuàng, yǒushí hái huì zuò yìxiē jiǎnchá, hǎo gěi chū héshì de zhìliáo fāngfǎ.",
    "vn": "Bác sĩ sẽ hỏi tình hình của bệnh nhân, có khi còn làm một số xét nghiệm, để đưa ra cách điều trị phù hợp."
   },
   {
    "sp": 0,
    "zh": "只要按照医生说的一步一步来，一般都可以顺利得到治疗。",
    "py": "Zhīyào ànzhào yīshēng shuō de yí bù yi bù lái, yìbān dōu kěyǐ shùnlì dédào zhìliáo.",
    "vn": "Chỉ cần làm từng bước theo lời bác sĩ, thường đều được điều trị suôn sẻ."
   }
  ],
  "doan": true
 }
];
var listenData = [
 {
  "audio": "护士，您好，请问在哪儿挂号？在一楼大厅。你先在这张表上写上姓名、性别和电话号码。写好了，然后呢？然后去那边排队挂号，挂好号以后去三楼找医生。人怎么这么多啊！别着急，现在也可以在网上挂号，下次你就不用排队了。",
  "questions": [
   {
    "q": "挂号以前要做什么？",
    "opts": [
     "在表上写信息",
     "去三楼找医生",
     "在网上买药"
    ],
    "ans": 0
   },
   {
    "q": "下次怎么做可以不排队？",
    "opts": [
     "早点儿来医院",
     "在网上挂号",
     "请朋友帮忙"
    ],
    "ans": 1
   }
  ]
 },
 {
  "audio": "小王，你怎么了？声音都变了。我这两天一直咳嗽，昨天晚上咳得特别厉害，一夜都没睡好。发烧吗？体温有点儿高，三十八度。那你赶快去医院吧，光吃药恐怕不够。好，我下午就去。你能陪我一起去吗？没问题，咱们有什么好客气的。",
  "questions": [
   {
    "q": "小王怎么了？",
    "opts": [
     "一直咳嗽，有点儿发烧",
     "肚子疼得厉害",
     "头疼，但是没发烧"
    ],
    "ans": 0
   },
   {
    "q": "朋友建议小王做什么？",
    "opts": [
     "在家多休息",
     "多喝点儿水",
     "赶快去医院"
    ],
    "ans": 2
   }
  ]
 },
 {
  "audio": "医生，我吃了三天药，现在感觉好多了。我看看……体温已经降下来了，不过你还要按时吃药，多喝水。我平时身体不错，偶尔才生一次病，没想到这次病得这么厉害。所以你要每天出去运动运动，好让身体更健康。",
  "questions": [
   {
    "q": "病人现在怎么样？",
    "opts": [
     "感觉好多了",
     "比以前更难受",
     "体温还很高"
    ],
    "ans": 0
   },
   {
    "q": "医生让病人做什么？",
    "opts": [
     "再去打针",
     "按时吃药，多喝水",
     "马上住院治疗"
    ],
    "ans": 1
   }
  ]
 }
];
var matchData = [
 {
  "left": "排队",
  "right": "挂号"
 },
 {
  "left": "按时",
  "right": "吃药"
 },
 {
  "left": "把体温",
  "right": "降下来"
 },
 {
  "left": "语言",
  "right": "不通"
 },
 {
  "left": "出了一身",
  "right": "汗"
 },
 {
  "left": "检查",
  "right": "结果"
 },
 {
  "left": "治疗",
  "right": "方法"
 },
 {
  "left": "流行性",
  "right": "感冒"
 },
 {
  "left": "一步一步",
  "right": "来"
 }
];
var fillData = [
 {
  "pre": "我还发烧，一直咳嗽，咳得很",
  "blank": "厉害",
  "post": "。",
  "hint": "(dữ dội)",
  "ans": "厉害",
  "exp": "V + 得 + 很 + 厉害."
 },
 {
  "pre": "那挺严重的，最好",
  "blank": "赶快",
  "post": "去医院检查一下。",
  "hint": "(mau, ngay)",
  "ans": "赶快",
  "exp": "赶快 + V."
 },
 {
  "pre": "没关系，我",
  "blank": "陪",
  "post": "你一起去，还能帮你翻译。",
  "hint": "(đi cùng)",
  "ans": "陪",
  "exp": "陪 + ai + 一起 + V."
 },
 {
  "pre": "您拿着病人的护照去",
  "blank": "挂号",
  "post": "吧。",
  "hint": "(lấy số khám bệnh)",
  "ans": "挂号",
  "exp": "去挂号."
 },
 {
  "pre": "你跟我有什么好",
  "blank": "客气",
  "post": "的。",
  "hint": "(khách sáo)",
  "ans": "客气",
  "exp": "有什么好 + V + 的."
 },
 {
  "pre": "她平时身体不错，",
  "blank": "偶尔",
  "post": "才会生一次病。",
  "hint": "(thỉnh thoảng)",
  "ans": "偶尔",
  "exp": "偶尔才 + V."
 },
 {
  "pre": "现在需要把",
  "blank": "体温",
  "post": "降下来。",
  "hint": "(nhiệt độ cơ thể)",
  "ans": "体温",
  "exp": "把体温降下来."
 },
 {
  "pre": "光吃药恐怕不够，打针会更",
  "blank": "有效",
  "post": "。",
  "hint": "(hiệu quả)",
  "ans": "有效",
  "exp": "更有效."
 },
 {
  "pre": "医生还让她回家以后",
  "blank": "按时",
  "post": "吃药，多喝水，多休息。",
  "hint": "(đúng giờ)",
  "ans": "按时",
  "exp": "按时 + V."
 },
 {
  "pre": "医生会问病人的情况，有时还会做一些检查，",
  "blank": "好",
  "post": "给出合适的治疗方法。",
  "hint": "(để)",
  "ans": "好",
  "exp": "……，好 + V: mục đích."
 }
];
var sortData = [
 {
  "words": [
   "我",
   "还",
   "发烧",
   "，",
   "一直",
   "咳嗽",
   "，",
   "咳得",
   "很厉害",
   "。"
  ],
  "ans": "我还发烧，一直咳嗽，咳得很厉害。",
  "audio": "我还发烧，一直咳嗽，咳得很厉害。"
 },
 {
  "words": [
   "有你",
   "陪着",
   "，",
   "我",
   "就",
   "放心",
   "多了",
   "。"
  ],
  "ans": "有你陪着，我就放心多了。",
  "audio": "有你陪着，我就放心多了。"
 },
 {
  "words": [
   "你",
   "跟我",
   "有什么",
   "好",
   "客气",
   "的",
   "。"
  ],
  "ans": "你跟我有什么好客气的。",
  "audio": "你跟我有什么好客气的。"
 },
 {
  "words": [
   "她",
   "平时",
   "身体不错",
   "，",
   "偶尔",
   "才会",
   "生一次病",
   "。"
  ],
  "ans": "她平时身体不错，偶尔才会生一次病。",
  "audio": "她平时身体不错，偶尔才会生一次病。"
 },
 {
  "words": [
   "在中国",
   "看病",
   "要",
   "先",
   "挂号",
   "，",
   "然后",
   "再去找医生",
   "。"
  ],
  "ans": "在中国看病要先挂号，然后再去找医生。",
  "audio": "在中国看病要先挂号，然后再去找医生。"
 },
 {
  "words": [
   "医生",
   "会",
   "做一些检查",
   "，",
   "好",
   "给出",
   "合适的",
   "治疗方法",
   "。"
  ],
  "ans": "医生会做一些检查，好给出合适的治疗方法。",
  "audio": "医生会做一些检查，好给出合适的治疗方法。"
 }
];
var mcData = [
 {
  "q": "我昨天跑步跑多了，今天腿疼得＿＿。",
  "opts": [
   "厉害",
   "严重",
   "有效",
   "难受"
  ],
  "ans": 0,
  "exp": "V / Adj + 得 + 厉害: mức độ rất cao."
 },
 {
  "q": "你跟我有什么好客气＿＿。",
  "opts": [
   "的",
   "了",
   "吗",
   "呢"
  ],
  "ans": 0,
  "exp": "(没)有什么(好)×的 — bắt buộc có 的."
 },
 {
  "q": "他经常在家看电影，＿＿才去电影院看。",
  "opts": [
   "偶尔",
   "经常",
   "一直",
   "按时"
  ],
  "ans": 0,
  "exp": "经常……，偶尔才……"
 },
 {
  "q": "我把电话号码告诉你，以后有什么事＿＿联系我。",
  "opts": [
   "好",
   "就",
   "再",
   "才"
  ],
  "ans": 0,
  "exp": "……，好 + V: để tiện làm gì."
 },
 {
  "q": "请在这张表上写上病人的姓名、＿＿、国籍和年龄。",
  "opts": [
   "性别",
   "结果",
   "过程",
   "体温"
  ],
  "ans": 0,
  "exp": "Các mục trên tờ khai: 姓名、性别、国籍、年龄."
 },
 {
  "q": "家月，我去排队＿＿，你先在大厅休息。",
  "opts": [
   "挂号",
   "打针",
   "收费",
   "治疗"
  ],
  "ans": 0,
  "exp": "排队挂号 = xếp hàng lấy số."
 },
 {
  "q": "现在需要把体温＿＿下来。",
  "opts": [
   "降",
   "低",
   "醒",
   "通"
  ],
  "ans": 0,
  "exp": "把……降下来: hạ xuống. 低 là tính từ, không đi với 下来 như vậy."
 },
 {
  "q": "外国人第一次在中国看病，可能会担心语言不＿＿。",
  "opts": [
   "通",
   "好",
   "过",
   "懂"
  ],
  "ans": 0,
  "exp": "语言不通 = bất đồng ngôn ngữ."
 },
 {
  "q": "国际部交流比较方便，但是＿＿比较高。",
  "opts": [
   "收费",
   "情况",
   "步",
   "部"
  ],
  "ans": 0,
  "exp": "收费比较高 = phí khá cao."
 },
 {
  "q": "只要按照医生说的一步一步来，一般都可以顺利得到＿＿。",
  "opts": [
   "治疗",
   "挂号",
   "检查",
   "结果"
  ],
  "ans": 0,
  "exp": "得到治疗 = được điều trị."
 }
];
var speakingData = {
 "intro": "Nhấn nút loa nghe câu hỏi (câu hỏi phần Khởi động, câu hỏi đọc hiểu của 4 bài khoá, kể lại bài khoá, đóng vai và thảo luận nhóm), rồi tự ghi âm câu trả lời — cố dùng từ mới và 4 điểm ngữ pháp của bài.",
 "questions": [
  {
   "q_zh": "你在中国生过病吗？生病后，你是怎么做的？",
   "q_vn": "Bạn đã từng bị ốm ở Trung Quốc (hoặc khi ở xa nhà) chưa? Ốm rồi bạn đã làm gì?",
   "hint": "我生过一次病，……得很厉害。我先……，然后……",
   "sample": "我生过一次病。那次我感冒了，咳嗽咳得很厉害，还发烧。我先在家吃了一点儿药，可是体温降不下来，于是我的中国朋友陪我去了医院。医生给我打了针，让我按时吃药，多喝水，多休息。三天以后我就好多了。",
   "sample_vn": "Tôi từng ốm một lần. Lần đó tôi bị cảm, ho rất dữ, còn sốt nữa. Tôi uống chút thuốc ở nhà trước, nhưng nhiệt độ không hạ, thế là bạn Trung Quốc đưa tôi đi bệnh viện. Bác sĩ tiêm cho tôi, dặn uống thuốc đúng giờ, uống nhiều nước, nghỉ ngơi nhiều. Ba ngày sau tôi đỡ nhiều rồi.",
   "note": "Câu hỏi phần Khởi động của sách; ôn 于是 (Bài 3), V不下来 (Bài 4)."
  },
  {
   "q_zh": "你在中国的医院看过病吗？看病的过程中有没有遇到什么问题？",
   "q_vn": "Bạn đã đi khám ở bệnh viện Trung Quốc chưa? Trong quá trình khám có gặp vấn đề gì không?",
   "hint": "我看过……。最大的问题是……，不过……",
   "sample": "我看过一次病。最大的问题是语言不通，我听不懂医生说的一些话，也不知道应该先挂号。不过护士很热情，一步一步地告诉我怎么做，我的朋友还帮我翻译，所以最后没有什么好担心的。",
   "sample_vn": "Tôi đã khám một lần. Vấn đề lớn nhất là bất đồng ngôn ngữ, tôi nghe không hiểu một số câu bác sĩ nói, cũng không biết phải lấy số trước. Có điều y tá rất nhiệt tình, chỉ tôi từng bước, bạn tôi còn phiên dịch giúp, nên cuối cùng chẳng có gì phải lo.",
   "note": "Câu hỏi phần Khởi động; ôn 不过 (Bài 2), dùng 没有什么好……的 (điểm 2)."
  },
  {
   "q_zh": "白家月怎么了？李文为什么要陪白家月去医院？",
   "q_vn": "Bạch Gia Nguyệt bị làm sao? Vì sao Lý Văn muốn đưa cô ấy đi bệnh viện?",
   "hint": "她……，咳得……。因为她来中国后……，李文还能帮她……",
   "sample": "白家月感冒了，还发烧，一直咳嗽，咳得很厉害。因为她来中国后还没去过医院，不知道怎么在中国的医院看病，李文陪她去还能帮她翻译。",
   "sample_vn": "Bạch Gia Nguyệt bị cảm, còn sốt, ho suốt, ho rất dữ. Vì từ khi sang Trung Quốc cô ấy chưa đi bệnh viện, không biết khám bệnh ở Trung Quốc thế nào, Lý Văn đi cùng còn phiên dịch giúp được.",
   "note": "Câu hỏi đọc hiểu bài khoá 1."
  },
  {
   "q_zh": "请根据提示复述课文一。",
   "q_vn": "Dựa vào gợi ý, kể lại bài khoá 1.",
   "hint": "白家月给李文打电话，告诉他自己……，发烧，一直……。李文觉得她病得……，建议她……",
   "sample": "白家月给李文打电话，告诉他自己身体不舒服，发烧，一直咳嗽，还咳得很厉害。李文觉得她病得挺严重的，建议她赶快去医院检查一下。不过，白家月来中国后还没去过医院，不知道怎么在中国的医院看病。李文让她在家等一下，说马上去接她，陪她一起去医院，还能帮她翻译。白家月觉得，有李文陪着，她就放心多了。",
   "sample_vn": "Bạch Gia Nguyệt gọi điện cho Lý Văn, nói mình không khỏe, sốt, ho suốt, ho rất dữ. Lý Văn thấy cô ấy ốm khá nặng, khuyên cô mau đi bệnh viện khám. Có điều từ khi sang Trung Quốc cô chưa đi bệnh viện, không biết khám thế nào. Lý Văn bảo cô ở nhà đợi, nói sẽ qua đón ngay, đưa cô đi bệnh viện, còn phiên dịch giúp. Bạch Gia Nguyệt thấy có Lý Văn đi cùng thì yên tâm hơn nhiều.",
   "note": "Bài tập 复述 của sách (trang 61)."
  },
  {
   "q_zh": "李文要在表上写什么？李文让白家月做什么？",
   "q_vn": "Lý Văn phải viết gì vào tờ khai? Lý Văn bảo Bạch Gia Nguyệt làm gì?",
   "hint": "他要在表上写上……。李文让白家月……",
   "sample": "他要在表上写上病人的姓名、性别、国籍、年龄、电话号码和家庭地址。李文去排队挂号，让白家月先在大厅休息，别着急。",
   "sample_vn": "Anh ấy phải viết vào tờ khai họ tên, giới tính, quốc tịch, tuổi, số điện thoại và địa chỉ nhà của bệnh nhân. Lý Văn đi xếp hàng lấy số, bảo Bạch Gia Nguyệt ngồi nghỉ ở sảnh trước, đừng sốt ruột.",
   "note": "Câu hỏi đọc hiểu bài khoá 2."
  },
  {
   "q_zh": "白家月得了什么病？医生让白家月做什么？",
   "q_vn": "Bạch Gia Nguyệt bị bệnh gì? Bác sĩ bảo cô ấy làm gì?",
   "hint": "她得了……。医生让她……，还让她回家以后……",
   "sample": "她得了比较严重的流行性感冒。医生让她打针，因为光吃药恐怕不够，打针会更有效。医生还让她回家以后按时吃药，多喝水，多休息。",
   "sample_vn": "Cô ấy bị cúm khá nặng. Bác sĩ cho cô ấy tiêm, vì chỉ uống thuốc e là không đủ, tiêm hiệu quả hơn. Bác sĩ còn dặn cô về nhà uống thuốc đúng giờ, uống nhiều nước, nghỉ ngơi nhiều.",
   "note": "Câu hỏi đọc hiểu bài khoá 3."
  },
  {
   "q_zh": "请根据提示复述课文三。",
   "q_vn": "Dựa vào gợi ý, kể lại bài khoá 3.",
   "hint": "下午白家月去看病了，她告诉医生，自己……，偶尔……。这次她……",
   "sample": "下午白家月去看病了，她告诉医生，自己平时身体不错，偶尔才会生一次病。这次她病得很厉害，头也一直疼，身上一点儿力气都没有。医生给她做了检查，检查结果出来后，发现她得了比较严重的流行性感冒。医生建议她打针，因为那样会更有效。医生还让她回家以后按时吃药，多喝水，多休息。晚上，白家月睡觉时出了一身汗。第二天醒来时，她感觉头不那么疼了，体温也低了一些，身体不那么难受了。",
   "sample_vn": "Buổi chiều Bạch Gia Nguyệt đi khám bệnh… Bác sĩ khuyên cô tiêm vì hiệu quả hơn, dặn về nhà uống thuốc đúng giờ, uống nhiều nước, nghỉ ngơi nhiều. Tối cô toát mồ hôi khắp người; hôm sau tỉnh dậy, đầu bớt đau, nhiệt độ hạ, người không còn khó chịu như trước.",
   "note": "Bài tập 复述 của sách (trang 64–65)."
  },
  {
   "q_zh": "外国人第一次在中国看病，可能会担心什么问题？在中国的医院，看病的过程是怎样的？",
   "q_vn": "Người nước ngoài lần đầu khám bệnh ở Trung Quốc có thể lo vấn đề gì? Quy trình khám bệnh ở bệnh viện Trung Quốc như thế nào?",
   "hint": "可能会担心……，或者……。看病要先……，然后再……。医生会……，好……",
   "sample": "外国人可能会担心语言不通，或者觉得看病的过程和自己的国家不同。在中国看病要先挂号，然后再去找医生。医生会问病人的情况，有时还会做一些检查，好给出合适的治疗方法。只要按照医生说的一步一步来，就可以顺利得到治疗。",
   "sample_vn": "Người nước ngoài có thể lo bất đồng ngôn ngữ, hoặc thấy quy trình khám khác nước mình. Ở Trung Quốc phải lấy số trước, rồi mới gặp bác sĩ. Bác sĩ hỏi tình hình, có khi làm xét nghiệm để đưa ra cách điều trị phù hợp. Chỉ cần làm từng bước theo lời bác sĩ là được điều trị suôn sẻ.",
   "note": "Câu hỏi đọc hiểu bài khoá 4; dùng ……，好…… (điểm 4)."
  },
  {
   "q_zh": "角色扮演：你的朋友生病了，你陪他/她去医院。一个人演病人，一个人演朋友，一个人演护士/医生。",
   "q_vn": "Đóng vai: Bạn của em bị ốm, em đưa bạn đi bệnh viện. Một người đóng bệnh nhân, một người đóng bạn, một người đóng y tá / bác sĩ.",
   "hint": "病人：我……得很厉害。朋友：别着急，我陪你……。护士：请在这张表上写上……。医生：你哪儿不舒服？……好……",
   "sample": "朋友：护士，您好，我的朋友病了，第一次来这里看病，需要怎么做？护士：请在这张表上写上病人的姓名、性别、年龄和电话号码，然后去那边排队挂号。朋友：好的。你先在大厅休息，我去挂号。病人：真是太谢谢你了！朋友：咱们有什么好客气的。医生：你哪儿不舒服？病人：我头疼得厉害，还一直咳嗽。我平时身体不错，偶尔才感冒一次。医生：我先给你量一下体温……三十八度五，有点儿高。你先去做个检查，好看看是不是流行性感冒。病人：需要打针吗？医生：先打一针，好把体温降下来。回家以后要按时吃药，多喝水，多休息，没有什么好担心的。",
   "sample_vn": "Bạn: Chào chị y tá, bạn tôi bị ốm, lần đầu đến khám, cần làm thế nào ạ? Y tá: Mời điền họ tên, giới tính, tuổi, số điện thoại vào tờ khai, rồi qua kia xếp hàng lấy số… Bác sĩ: Bạn khó chịu ở đâu? Bệnh nhân: Tôi đau đầu dữ lắm, còn ho suốt… Bác sĩ: Tiêm một mũi trước để hạ nhiệt; về nhà uống thuốc đúng giờ, uống nhiều nước, nghỉ ngơi, chẳng có gì phải lo.",
   "note": "Hoạt động 分角色朗读 / đóng vai mở rộng từ bài khoá 1–2; dùng đủ 4 điểm ngữ pháp."
  },
  {
   "q_zh": "小组讨论：介绍一下你们国家的医疗情况，比如医疗体系、看病流程以及常见病的处理方式。",
   "q_vn": "Thảo luận nhóm: Giới thiệu tình hình y tế của nước em, ví dụ hệ thống y tế, quy trình khám bệnh và cách xử lý các bệnh thường gặp.",
   "hint": "在越南，……。看病的时候，先……，然后……。要是只是小感冒，就……；要是病得很厉害，最好赶快……",
   "sample": "我给大家介绍一下越南的医疗情况。在越南，有公立医院，也有私立医院和国际医院。公立医院收费比较低，但是人很多，有时候要排很长时间的队；国际医院的医生一般会说英文，不过收费比较高。看病的时候，先要挂号，在表上写上姓名、年龄和地址，然后再去找医生。医生会问病人的情况，有时还会做一些检查，好给出合适的治疗方法。要是只是小感冒，很多越南人就在药店买点儿药，多喝水，多休息，没有什么好担心的；要是发烧发得很厉害，或者咳嗽好几天还不好，最好赶快去医院。现在很多医院也可以在网上挂号，既方便又能节省时间。",
   "sample_vn": "Mình xin giới thiệu tình hình y tế ở Việt Nam. Ở Việt Nam có bệnh viện công, bệnh viện tư và bệnh viện quốc tế. Bệnh viện công phí thấp nhưng đông, có lúc phải xếp hàng rất lâu; bệnh viện quốc tế bác sĩ thường nói tiếng Anh, có điều phí khá cao. Khi khám phải lấy số, điền họ tên, tuổi, địa chỉ vào tờ khai rồi mới gặp bác sĩ… Nếu chỉ cảm nhẹ, nhiều người Việt mua ít thuốc ở hiệu thuốc, uống nhiều nước, nghỉ ngơi, chẳng có gì phải lo; nếu sốt cao hoặc ho mấy ngày không khỏi thì tốt nhất mau đi bệnh viện. Bây giờ nhiều bệnh viện cho lấy số trên mạng, vừa tiện vừa tiết kiệm thời gian.",
   "note": "Hoạt động 小组讨论 (任务活动) của sách, trang 68; ôn 既……又…… (Bài 4), 要是……就…… (Bài 1)."
  }
 ]
};
var translateData = [
 {
  "vi": "Tớ còn sốt nữa, ho suốt, ho dữ lắm.",
  "zh": "我还发烧，一直咳嗽，咳得很厉害。",
  "py": "Wǒ hái fāshāo, yìzhí késou, ké de hěn lìhai."
 },
 {
  "vi": "Không sao, tớ đi cùng cậu, còn phiên dịch giúp cậu được nữa.",
  "zh": "没关系，我陪你一起去，还能帮你翻译。",
  "py": "Méiguānxì, wǒ péi nǐ yìqǐ qù, hái néng bāng nǐ fānyì."
 },
 {
  "vi": "Cậu với tớ thì có gì mà phải khách sáo.",
  "zh": "你跟我有什么好客气的。",
  "py": "Nǐ gēn wǒ yǒu shénme hǎo kèqi de."
 },
 {
  "vi": "Bình thường cô ấy khá khỏe, lâu lâu mới ốm một lần.",
  "zh": "她平时身体不错，偶尔才会生一次病。",
  "py": "Tā píngshí shēntǐ búcuò, ǒu'ěr cái huì shēng yí cì bìng."
 },
 {
  "vi": "Chỉ uống thuốc e là không đủ, tiêm sẽ hiệu quả hơn.",
  "zh": "光吃药恐怕不够，打针会更有效。",
  "py": "Guāng chī yào kǒngpà bú gòu, dǎzhēn huì gèng yǒuxiào."
 },
 {
  "vi": "Bác sĩ sẽ làm một số xét nghiệm, để đưa ra cách điều trị phù hợp.",
  "zh": "医生会做一些检查，好给出合适的治疗方法。",
  "py": "Yīshēng huì zuò yìxiē jiǎnchá, hǎo gěi chū héshì de zhìliáo fāngfǎ."
 }
];
var translateDataRev = [
 {
  "vi": "Mời viết vào tờ khai này họ tên, giới tính, quốc tịch, tuổi, số điện thoại và địa chỉ nhà của bệnh nhân.",
  "zh": "请在这张表上写上病人的姓名、性别、国籍、年龄、电话号码和家庭地址。",
  "py": "Qǐng zài zhè zhāng biǎo shàng xiě shàng bìngrén de xìngmíng, xìngbié, guójí, niánlíng, diànhuà hàomǎ hé jiātíng dìzhǐ."
 },
 {
  "vi": "Tớ đi xếp hàng lấy số, cậu ngồi nghỉ ở sảnh trước, đừng sốt ruột.",
  "zh": "我去排队挂号，你先在大厅休息，别着急。",
  "py": "Wǒ qù páiduì guàhào, nǐ xiān zài dàtīng xiūxi, bié zháojí."
 },
 {
  "vi": "Bác sĩ dặn cô ấy về nhà uống thuốc đúng giờ, uống nhiều nước, nghỉ ngơi nhiều.",
  "zh": "医生让她回家以后按时吃药，多喝水，多休息。",
  "py": "Yīshēng ràng tā huí jiā yǐhòu ànshí chī yào, duō hē shuǐ, duō xiūxi."
 },
 {
  "vi": "Khu quốc tế giao tiếp khá thuận tiện, nhưng phí khá cao.",
  "zh": "国际部交流比较方便，但是收费比较高。",
  "py": "Guójì bù jiāoliú bǐjiào fāngbiàn, dànshì shōufèi bǐjiào gāo."
 },
 {
  "vi": "Khám bệnh ở Trung Quốc phải lấy số trước, rồi mới đi gặp bác sĩ.",
  "zh": "在中国看病要先挂号，然后再去找医生。",
  "py": "Zài Zhōngguó kànbìng yào xiān guàhào, ránhòu zài qù zhǎo yīshēng."
 }
];
var sgkData = [
 {
  "kieu": "kho",
  "de": "选词填空（一）· 综合练习",
  "vn": "Chọn từ thích hợp điền vào chỗ trống (Bài tập tổng hợp, sách trang 67).",
  "dapSgk": true,
  "tu": [
   "地址",
   "咳嗽",
   "赶快",
   "护士",
   "严重"
  ],
  "cau": [
   {
    "s": "咱们过去问问＿＿，看牙应该去几楼。",
    "dap": [
     "护士"
    ]
   },
   {
    "s": "我这两天有点儿＿＿，不知道是不是感冒了。",
    "dap": [
     "咳嗽"
    ]
   },
   {
    "s": "把你的＿＿给我吧，我给你寄点儿东西。",
    "dap": [
     "地址"
    ]
   },
   {
    "s": "这个问题很＿＿，我们必须马上想办法解决。",
    "dap": [
     "严重"
    ]
   },
   {
    "s": "你都发烧好几天了，＿＿去医院检查一下吧。",
    "dap": [
     "赶快"
    ]
   }
  ]
 },
 {
  "kieu": "kho",
  "de": "选词填空（二）· 综合练习",
  "vn": "Chọn từ thích hợp điền vào chỗ trống (hội thoại).",
  "dapSgk": true,
  "tu": [
   "光",
   "醒",
   "有效",
   "过程",
   "情况"
  ],
  "cau": [
   {
    "s": "A：这道菜是怎么做的？　B：下次我把做菜的＿＿拍下来发给你。",
    "dap": [
     "过程"
    ]
   },
   {
    "s": "A：你今天怎么这么饿？　B：白天太忙了，＿＿喝了点儿水，一口饭都没吃。",
    "dap": [
     "光"
    ]
   },
   {
    "s": "A：经理叫你过去，要了解一下最近的工作＿＿。　B：好的，我现在就去他的办公室。",
    "dap": [
     "情况"
    ]
   },
   {
    "s": "A：我早上给你打电话，你怎么没接啊？　B：昨天睡得太晚了，今天10点才＿＿。",
    "dap": [
     "醒"
    ]
   },
   {
    "s": "A：你觉得看电影学中文怎么样？　B：我觉得这种方法很＿＿，不但能学语言，还能了解中国文化。",
    "dap": [
     "有效"
    ]
   }
  ]
 },
 {
  "kieu": "kho",
  "de": "选择合适的内容完成短文",
  "vn": "Chọn nội dung thích hợp (A–D) hoàn thành đoạn văn (sách trang 68).",
  "dapSgk": true,
  "tu": [
   "按时吃药",
   "帮你翻译",
   "如果感觉身体不舒服",
   "检查结果出来以后"
  ],
  "cau": [
   {
    "s": "＿＿，最好赶快去医院看看。第一次在中国的医院看病，可以先问护士应该怎么做。一般来说，顺序是先挂号，然后去找医生看病。要是怕听不懂医生说的话，可以找个中国朋友陪你一起去医院，＿＿。看病时，医生会先问你哪儿不舒服，然后给你做一些检查。＿＿，医生会给出治疗的方法。按照医生说的做，＿＿，多休息，病就会好得更快。",
    "dap": [
     "如果感觉身体不舒服",
     "帮你翻译",
     "检查结果出来以后",
     "按时吃药"
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
    "anh": "/images/hsk4v3/bai-6/bt-1.webp",
    "s": "",
    "tu": "排队",
    "dap": "他们正在排队办入住。",
    "giai": "正在 + 排队 + V: xếp hàng để làm gì (办入住 = làm thủ tục nhận phòng)."
   },
   {
    "anh": "/images/hsk4v3/bai-6/bt-2.webp",
    "s": "",
    "tu": "体温",
    "dap": "医生想看看她的体温是多少。",
    "giai": "体温是多少 — hỏi nhiệt độ cơ thể; cũng có thể nói 护士在给他量体温。"
   },
   {
    "anh": "/images/hsk4v3/bai-6/bt-3.webp",
    "s": "",
    "tu": "难受",
    "dap": "爷爷生病了，非常难受。",
    "giai": "难受 là tính từ, đi với 很 / 非常; ✗ 难受极 thiếu 了."
   }
  ]
 }
];
var writingData = {
 "kieu": "sgk",
 "soChu": 120,
 "tieuDe": "写作 — trả lời tin nhắn WeChat của bạn (ít nhất 120 chữ)",
 "nhanDe": "写作",
 "huongDan": {
  "tieuDe": "Viết tin nhắn trả lời (写作)",
  "gioiThieu": "Đề 写作 của sách HSK 4 (3.0) yêu cầu viết một đoạn văn ngắn (ít nhất 120 chữ) dựa trên nội dung đã học và đã thảo luận — ở bài này là tin nhắn WeChat trả lời người bạn Trung Quốc bị ốm khi đang du lịch ở nước em, chỉ cho bạn cách đi khám bệnh.",
  "buoc": [
   "Đọc kỹ đề: người đọc là bạn Trung Quốc đang ốm; mục đích là chỉ cách đi khám bệnh ở nước em (Việt Nam).",
   "Lập dàn ý theo 5 câu hỏi gợi ý: hỏi thăm + khuyên đi khám → thủ tục ở bệnh viện → bác sĩ khám thế nào → lưu ý (khu quốc tế, phí, ngôn ngữ) → dặn dò sau khi khám.",
   "Dùng từ mới (挂号, 排队, 护士, 表, 体温, 治疗, 按时…) và 4 điểm ngữ pháp: 厉害, 没有什么好……的, 偶尔, ……，好…….",
   "Nối ý bằng: 先……然后再…… / 要是……就…… / 不过 / 再说 — giọng thân mật, như đang nhắn tin với bạn.",
   "Mở đầu bằng lời hỏi thăm, kết thúc bằng lời chúc mau khỏe; tự soát số chữ (≥ 120) và lỗi chữ Hán trước khi nộp."
  ]
 },
 "de": "你的一个中国朋友正在你的国家旅行。他/她最近生病了，给你发微信，询问如何在医院看病。请你根据上面讨论的内容，给他/她写回复，不少于120字。",
 "prompt": "Một người bạn Trung Quốc của em đang du lịch ở nước em. Gần đây bạn ấy bị ốm, nhắn WeChat hỏi em cách đi khám ở bệnh viện. Dựa vào nội dung đã thảo luận ở trên, hãy viết tin nhắn trả lời bạn ấy, không ít hơn 120 chữ.",
 "dan": [
  {
   "hoi": "朋友怎么了？你有什么建议？",
   "goiY": "你……得这么厉害，最好赶快去医院检查一下。"
  },
  {
   "hoi": "到了医院先做什么？",
   "goiY": "先找护士，在表上写上……，然后拿着护照去排队挂号。"
  },
  {
   "hoi": "看病的过程是怎样的？",
   "goiY": "医生会问你的情况，给你量体温，有时还会做一些检查，好……"
  },
  {
   "hoi": "有什么要注意的？（国际部、收费、语言）",
   "goiY": "有的医院有国际部……，不过收费……；要是你怕语言不通，我就陪你去……"
  },
  {
   "hoi": "看完病以后要做什么？",
   "goiY": "按时吃药，多喝水，多休息；没有什么好担心的。"
  }
 ],
 "tuNen": [
  "厉害",
  "严重",
  "赶快",
  "陪",
  "翻译",
  "护士",
  "表",
  "挂号",
  "排队",
  "体温",
  "检查",
  "结果",
  "治疗",
  "按时",
  "情况",
  "收费"
 ],
 "cauTruc": [
  {
   "ten": "V / Adj + 得 + 很厉害",
   "nhan": "厉害",
   "vd": "你咳嗽咳得这么厉害，最好赶快去医院检查一下。",
   "khi": "Câu MỞ: hỏi thăm, nói bệnh nặng, khuyên đi khám."
  },
  {
   "ten": "先……，然后再……",
   "nhan": "先",
   "vd": "到了医院，先在表上写上你的信息，然后再去排队挂号。",
   "khi": "Kể thủ tục theo thứ tự."
  },
  {
   "ten": "……，好……",
   "nhan": "好",
   "vd": "医生有时还会做一些检查，好给出合适的治疗方法。",
   "khi": "Giải thích vì sao bác sĩ làm xét nghiệm."
  },
  {
   "ten": "要是……，就……",
   "nhan": "要是",
   "vd": "要是你怕语言不通，我就陪你一起去，还能帮你翻译。",
   "khi": "Đề nghị giúp đỡ (ôn Bài 1)."
  },
  {
   "ten": "没有什么好担心的",
   "nhan": "没有什么",
   "vd": "只要按时吃药，多休息，没有什么好担心的。",
   "khi": "Câu KẾT: an ủi bạn."
  }
 ],
 "checklist": [
  "Đủ ít nhất 120 chữ Hán chưa?",
  "Đã có lời hỏi thăm, lời khuyên, thủ tục ở bệnh viện, quá trình khám, lưu ý và lời dặn sau khi khám chưa?",
  "Đã dùng ít nhất 3 trong 4 điểm ngữ pháp của bài (厉害、（没）有什么（好）×的、偶尔、……，好……) chưa?",
  "Đã dùng ít nhất 6 từ mới của bài chưa?",
  "Giọng văn có thân mật như tin nhắn cho bạn, có câu mở (hỏi thăm) và câu kết (chúc mau khỏe) chưa?"
 ],
 "model": {
  "zh": "小林，你好！看到你的微信，我很担心。你咳嗽咳得这么厉害，还发烧，最好赶快去医院检查一下。在越南看病其实不难，没有什么好担心的。到了医院以后，先找护士，在表上写上你的姓名、性别、国籍和电话号码，然后拿着护照去排队挂号。挂好号以后再去找医生，医生会问你的情况，给你量体温，有时还会做一些检查，好给出合适的治疗方法。有的大医院有国际部，医生会说英文，不过收费比较高。要是你怕语言不通，我明天上午就陪你一起去，还能帮你翻译。看完病以后，一定要按时吃药，多喝水，多休息。你平时身体那么好，偶尔生一次病，很快就会好的。希望你早点儿好起来！",
  "py": "Xiǎo lín, nǐhǎo! Kàn dào nǐ de wēixìn, wǒ hěn dānxīn. Nǐ késou ké de zhème lìhai, hái fāshāo, zuìhǎo gǎnkuài qù yīyuàn jiǎnchá yíxià. Zài Yuènán kànbìng qíshí bù nán, méiyǒu shénme hǎo dānxīn de. Dào le yīyuàn yǐhòu, xiān zhǎo hùshi, zài biǎo shàng xiě shàng nǐ de xìngmíng, xìngbié, guójí hé diànhuà hàomǎ, ránhòu ná zhe hùzhào qù páiduì guàhào. Guà hǎo hào yǐhòu zài qù zhǎo yīshēng, yīshēng huì wèn nǐ de qíngkuàng, gěi nǐ liáng tǐwēn, yǒushí hái huì zuò yìxiē jiǎnchá, hǎo gěi chū héshì de zhìliáo fāngfǎ. Yǒude dà yīyuàn yǒu guójì bù, yīshēng huì shuō yīng wén, búguò shōufèi bǐjiào gāo. Yàoshi nǐ pà yǔyán bù tōng, wǒ míngtiān shàngwǔ jiù péi nǐ yìqǐ qù, hái néng bāng nǐ fānyì. Kànwán bìng yǐhòu, yídìng yào ànshí chī yào, duō hē shuǐ, duō xiūxi. Nǐ píngshí shēntǐ nàme hǎo, ǒu'ěr shēng yí cì bìng, hěn kuài jiù huì hǎo de. Xīwàng nǐ zǎo diǎnr hǎo qǐlái!"
 }
};
