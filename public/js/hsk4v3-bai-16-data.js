// HSK 4 (3.0) · Bai 16 — sinh boi tools/hsk4v3/gan.js tu tools/hsk4v3/bai-16/ (dung sua tay).
var vocabData = [
 {
  "n": 1,
  "zh": "本来",
  "py": "běnlái",
  "pos": "Phó từ / Tính từ",
  "vn": "vốn dĩ, lúc đầu; vốn có, ban đầu",
  "hv": "bản lai",
  "em": "🔙",
  "lesson": 1,
  "explain": [
   "Phó từ: “vốn dĩ, lúc đầu” — nói dự định / tình hình BAN ĐẦU; vế sau thường có 可是 / 但是 / 却 cho biết sau đó đã thay đổi.",
   "Tính từ: “vốn có, ban đầu” — làm định ngữ: 本来的计划 (kế hoạch ban đầu). Còn nghĩa “lẽ ra, đương nhiên”: 本来就应该这样 (vốn dĩ phải như vậy)."
  ],
  "usage": "本来 + 打算 / 计划 / 想……，可是…… · 本来的 + N · 本来就…… (vốn dĩ đã …).",
  "collo": [
   "本来打算",
   "本来的计划",
   "本来就……",
   "坚持本来的计划"
  ],
  "colloFull": [
   {
    "zh": "本来打算",
    "py": "Běnlái dǎsuàn",
    "vn": "vốn định"
   },
   {
    "zh": "本来的计划",
    "py": "Běnlái de jìhuà",
    "vn": "kế hoạch ban đầu"
   },
   {
    "zh": "本来就……",
    "py": "Běnlái jiù……",
    "vn": "vốn dĩ đã …"
   },
   {
    "zh": "坚持本来的计划",
    "py": "Jiānchí běnlái de jìhuà",
    "vn": "giữ nguyên kế hoạch ban đầu"
   }
  ],
  "patterns": [
   {
    "s": "本来 + V……，可是 / 但是 / 却……",
    "m": "Vốn định … nhưng (sau đó thay đổi)"
   },
   {
    "s": "本来 vs 原来",
    "m": "原来 còn nghĩa “hóa ra” (原来是你！); 本来 còn nghĩa “lẽ ra, đương nhiên” (本来就该这样)"
   }
  ],
  "ex_zh": "本来都计划好了，可是昨天突然接到通知，下周学校要安排一次考试。",
  "ex_py": "Běnlái dōu jìhuà hǎo le, kěshì zuótiān tūrán jiēdào tōngzhī, xià zhōu xuéxiào yào ānpái yí cì kǎoshì.",
  "ex_vn": "Vốn dĩ đã lên kế hoạch xong xuôi rồi, nhưng hôm qua đột nhiên nhận được thông báo, tuần sau trường sắp xếp một kỳ thi.",
  "exList": [
   {
    "zh": "本来都计划好了，可是昨天突然接到通知，下周学校要安排一次考试。",
    "py": "Běnlái dōu jìhuà hǎo le, kěshì zuótiān tūrán jiēdào tōngzhī, xià zhōu xuéxiào yào ānpái yí cì kǎoshì.",
    "vn": "Vốn dĩ đã lên kế hoạch xong xuôi rồi, nhưng hôm qua đột nhiên nhận được thông báo, tuần sau trường sắp xếp một kỳ thi."
   },
   {
    "zh": "我本来想周末去看电影，可是后来有事，就没去成。",
    "py": "Wǒ běnlái xiǎng zhōumò qù kàn diànyǐng, kěshì hòulái yǒu shì, jiù méi qùchéng.",
    "vn": "Tôi vốn định cuối tuần đi xem phim, nhưng sau đó có việc nên không đi được."
   }
  ],
  "hanzi": [
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
    "c": "来",
    "p": "lái",
    "type": "独体字 · Tượng hình",
    "st": 7,
    "ord": "一→丨→㇏→丿→丶→一",
    "rad": "木 (mộc, biến thể)",
    "mean": "đến, tới",
    "tip": "Hình bông lúa mạch từ xa mang ĐẾN → ĐẾN, TỚI.",
    "cf": "米 (mǐ – \"gạo\")",
    "w": "过来 / 来公司 / 回来"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Tôi vốn định đi Nam Kinh, nhưng đột nhiên phải tăng ca, đành phải hoãn lại.",
    "answer": "我本来打算去南京，可是突然要加班，只好推迟了。",
    "answerPy": "Wǒ běnlái dǎsuàn qù Nánjīng, kěshì tūrán yào jiābān, zhǐhǎo tuīchí le.",
    "note": "本来……可是……; 只好, 推迟 (bài này).",
    "pair": "本来……，可是……"
   },
   {
    "promptLang": "vi",
    "prompt": "Do thời tiết không tốt, kế hoạch ban đầu đành phải thay đổi.",
    "answer": "由于天气不好，本来的计划只好改变了。",
    "answerPy": "Yóuyú tiānqì bù hǎo, běnlái de jìhuà zhǐhǎo gǎibiàn le.",
    "note": "本来 làm định ngữ; ôn 由于 (Bài 2 · điểm 4).",
    "pair": "由于……，本来的 + N……"
   }
  ]
 },
 {
  "n": 2,
  "zh": "只好",
  "py": "zhǐhǎo",
  "pos": "Phó từ",
  "vn": "đành phải, đành",
  "hv": "chỉ hảo",
  "em": "🤷",
  "lesson": 1,
  "explain": [
   "Không còn cách nào khác nên đành làm việc này (thường không phải điều mình muốn). Đứng sau chủ ngữ, trước động từ; vế trước thường nêu nguyên nhân."
  ],
  "usage": "(因为)……，(所以) + Sub + 只好 + V (+ 了).",
  "collo": [
   "只好在家复习",
   "只好推迟",
   "只好取消",
   "只好等着"
  ],
  "colloFull": [
   {
    "zh": "只好在家复习",
    "py": "Zhǐhǎo zài jiā fùxí",
    "vn": "đành ở nhà ôn bài"
   },
   {
    "zh": "只好推迟",
    "py": "Zhǐhǎo tuīchí",
    "vn": "đành hoãn lại"
   },
   {
    "zh": "只好取消",
    "py": "Zhǐhǎo qǔxiāo",
    "vn": "đành hủy"
   },
   {
    "zh": "只好等着",
    "py": "Zhǐhǎo děng zhe",
    "vn": "đành ngồi chờ"
   }
  ],
  "patterns": [
   {
    "s": "……，Sub + 只好 + V",
    "m": "Bất đắc dĩ phải làm"
   },
   {
    "s": "只好 vs 不得不",
    "m": "不得不 (bài khoá 4) nhấn mạnh “buộc phải”, mạnh hơn; 只好 nhẹ nhàng: “đành vậy”"
   }
  ],
  "ex_zh": "下周学校要安排一次考试，所以周末只好在家复习了。",
  "ex_py": "Xià zhōu xuéxiào yào ānpái yí cì kǎoshì, suǒyǐ zhōumò zhǐhǎo zài jiā fùxí le.",
  "ex_vn": "Tuần sau trường sắp xếp một kỳ thi, nên cuối tuần đành phải ở nhà ôn bài thôi.",
  "exList": [
   {
    "zh": "下周学校要安排一次考试，所以周末只好在家复习了。",
    "py": "Xià zhōu xuéxiào yào ānpái yí cì kǎoshì, suǒyǐ zhōumò zhǐhǎo zài jiā fùxí le.",
    "vn": "Tuần sau trường sắp xếp một kỳ thi, nên cuối tuần đành phải ở nhà ôn bài thôi."
   },
   {
    "zh": "最后一班车已经走了，我们只好打车回家。",
    "py": "Zuìhòu yì bān chē yǐjīng zǒu le, wǒmen zhǐhǎo dǎchē huíjiā.",
    "vn": "Chuyến xe cuối cùng đã chạy rồi, chúng tôi đành bắt taxi về nhà."
   }
  ],
  "hanzi": [
   {
    "c": "只",
    "p": "zhǐ",
    "type": "独体字 · Chữ đơn",
    "st": 5,
    "ord": "nét liền",
    "rad": "口 (khẩu)",
    "mean": "chỉ, chỉ có",
    "tip": "Chữ mang nghĩa CHỈ, DUY NHẤT, kết hợp 好(tốt, đành) thành 只好 = ĐÀNH PHẢI (chỉ còn cách này là tốt nhất).",
    "cf": "另 (lìng – \"khác\", tự dạng gần giống)",
    "w": "只好 / 只是 / 只有"
   },
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
    "prompt": "Trời mưa to, trận đấu đành phải hủy.",
    "answer": "下大雨了，比赛只好取消了。",
    "answerPy": "Xià dàyǔ le, bǐsài zhǐhǎo qǔxiāo le.",
    "note": "只好 + V; 了 cuối câu báo sự thay đổi.",
    "pair": "只好 + V + 了"
   },
   {
    "promptLang": "vi",
    "prompt": "Cho dù không muốn, anh ấy cũng đành đồng ý.",
    "answer": "即使不愿意，他也只好同意了。",
    "answerPy": "Jíshǐ bú yuànyì, tā yě zhǐhǎo tóngyì le.",
    "note": "Ôn 即使……也…… (Bài 11 · điểm 1).",
    "pair": "即使……，也只好……"
   }
  ]
 },
 {
  "n": 3,
  "zh": "赶上",
  "py": "gǎnshàng",
  "pos": "Động từ",
  "vn": "đuổi kịp, theo kịp; kịp (chuyến xe …)",
  "hv": "cản thượng",
  "em": "🏃",
  "lesson": 1,
  "explain": [
   "Đuổi theo cho kịp người / sự việc ở phía trước: 赶上他, 赶上变化; hoặc kịp lúc: 赶上火车 (kịp tàu).",
   "Dạng bổ ngữ khả năng: 赶得上 (theo kịp) / 赶不上 (không theo kịp) — tên bài 计划赶不上变化 = kế hoạch không theo kịp thay đổi."
  ],
  "usage": "赶上 + N · 赶得上 / 赶不上 · 赶上了 / 没赶上.",
  "collo": [
   "赶上火车",
   "赶不上变化",
   "赶上同学",
   "没赶上"
  ],
  "colloFull": [
   {
    "zh": "赶上火车",
    "py": "Gǎnshàng huǒchē",
    "vn": "kịp chuyến tàu"
   },
   {
    "zh": "赶不上变化",
    "py": "Gǎn bu shàng biànhuà",
    "vn": "không theo kịp thay đổi"
   },
   {
    "zh": "赶上同学",
    "py": "Gǎnshàng tóngxué",
    "vn": "đuổi kịp bạn cùng lớp"
   },
   {
    "zh": "没赶上",
    "py": "Méi gǎnshàng",
    "vn": "không kịp"
   }
  ],
  "patterns": [
   {
    "s": "赶得上 / 赶不上",
    "m": "Bổ ngữ khả năng (ôn Bài 4 · điểm 1: V + 得/不 + bổ ngữ)"
   },
   {
    "s": "赶上 + 了 / 没赶上",
    "m": "Đã kịp / không kịp"
   }
  ],
  "ex_zh": "真是计划赶不上变化啊！",
  "ex_py": "Zhēnshì jìhuà gǎn bu shàng biànhuà a!",
  "ex_vn": "Đúng là kế hoạch không theo kịp thay đổi!",
  "exList": [
   {
    "zh": "真是计划赶不上变化啊！",
    "py": "Zhēnshì jìhuà gǎn bu shàng biànhuà a!",
    "vn": "Đúng là kế hoạch không theo kịp thay đổi!"
   },
   {
    "zh": "我跑得很快，终于赶上了最后一班车。",
    "py": "Wǒ pǎo de hěn kuài, zhōngyú gǎnshàng le zuìhòu yì bān chē.",
    "vn": "Tôi chạy rất nhanh, cuối cùng cũng kịp chuyến xe cuối cùng."
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
    "prompt": "Chúng ta đi nhanh lên, nếu không sẽ không kịp tàu.",
    "answer": "我们快点儿走吧，否则就赶不上火车了。",
    "answerPy": "Wǒmen kuài diǎnr zǒu ba, fǒuzé jiù gǎn bu shàng huǒchē le.",
    "note": "Ôn 否则 (Bài 8 · điểm 2).",
    "pair": "……，否则……赶不上……"
   },
   {
    "promptLang": "vi",
    "prompt": "Chỉ cần mỗi ngày kiên trì ôn tập, bạn nhất định sẽ đuổi kịp các bạn khác.",
    "answer": "只要每天坚持复习，你一定能赶上别的同学。",
    "answerPy": "Zhǐyào měitiān jiānchí fùxí, nǐ yídìng néng gǎnshàng biéde tóngxué.",
    "note": "只要……就 / 一定…… (HSK 3).",
    "pair": "只要……，一定能赶上……"
   }
  ]
 },
 {
  "n": 4,
  "zh": "旅行",
  "py": "lǚxíng",
  "pos": "Động từ",
  "vn": "đi du lịch, đi chơi xa",
  "hv": "lữ hành",
  "em": "🧳",
  "lesson": 1,
  "explain": [
   "Đi đến nơi xa để chơi, tham quan. Gần nghĩa 旅游 (HSK 2); 旅行 nhấn mạnh “chuyến đi” và hay làm định ngữ / danh từ: 旅行计划, 一次旅行."
  ],
  "usage": "去 + nơi + 旅行 · 出去旅行 · 旅行计划 · 没去成旅行.",
  "collo": [
   "出去旅行",
   "旅行计划",
   "一次旅行",
   "没去成旅行"
  ],
  "colloFull": [
   {
    "zh": "出去旅行",
    "py": "Chūqu lǚxíng",
    "vn": "đi du lịch"
   },
   {
    "zh": "旅行计划",
    "py": "Lǚxíng jìhuà",
    "vn": "kế hoạch du lịch"
   },
   {
    "zh": "一次旅行",
    "py": "Yí cì lǚxíng",
    "vn": "một chuyến du lịch"
   },
   {
    "zh": "没去成旅行",
    "py": "Méi qùchéng lǚxíng",
    "vn": "không đi du lịch được"
   }
  ],
  "patterns": [
   {
    "s": "去 + nơi + 旅行",
    "m": "✗ 旅行北京 → ✓ 去北京旅行"
   },
   {
    "s": "旅行 vs 旅游",
    "m": "旅行 nghiêng về “chuyến đi”; 旅游 nghiêng về “du ngoạn, tham quan”"
   }
  ],
  "ex_zh": "看来你的旅行计划只能推迟了。",
  "ex_py": "Kànlái nǐ de lǚxíng jìhuà zhǐnéng tuīchí le.",
  "ex_vn": "Xem ra kế hoạch du lịch của em chỉ có thể hoãn lại rồi.",
  "exList": [
   {
    "zh": "看来你的旅行计划只能推迟了。",
    "py": "Kànlái nǐ de lǚxíng jìhuà zhǐnéng tuīchí le.",
    "vn": "Xem ra kế hoạch du lịch của em chỉ có thể hoãn lại rồi."
   },
   {
    "zh": "暑假我打算和朋友去云南旅行。",
    "py": "Shǔjià wǒ dǎsuàn hé péngyou qù Yúnnán lǚxíng.",
    "vn": "Kỳ nghỉ hè tôi định cùng bạn đi du lịch Vân Nam."
   }
  ],
  "hanzi": [
   {
    "c": "旅",
    "p": "lǚ",
    "type": "左右结构 · Trái-phải",
    "st": 10,
    "ord": "方 trái → 𠂉氏 phải",
    "rad": "方 (phương)",
    "mean": "lữ hành",
    "tip": "Cờ 方 + đoàn người → đoàn đi xa → LỮ. 旅行, 旅游 (Bài 1), 旅馆.",
    "cf": "族 (zú – tộc, cùng bộ)",
    "w": "旅行 / 旅游 / 旅馆"
   },
   {
    "c": "行",
    "p": "xíng",
    "type": "左右结构 · Trái-phải",
    "st": 6,
    "ord": "彳 trái → 亍 phải",
    "rad": "行 (hành)",
    "mean": "được; đi",
    "tip": "Tượng hình NGÃ TƯ đường → ĐI, HÀNH; mở rộng thành \"được, ổn\" (xíng). Đọc háng = hàng, ngành (银行).",
    "cf": "街 (jiē – phố, có 行 bao ngoài)",
    "w": "行 / 不行 / 还行 / 银行 (háng)"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Vì có việc, kế hoạch du lịch của tôi đành phải hủy.",
    "answer": "因为有事，我的旅行计划只好取消了。",
    "answerPy": "Yīnwèi yǒu shì, wǒ de lǚxíng jìhuà zhǐhǎo qǔxiāo le.",
    "note": "只好 + V; 取消 (bài này).",
    "pair": "……只好取消了"
   },
   {
    "promptLang": "vi",
    "prompt": "Đi du lịch không chỉ có thể thư giãn, mà còn có thể hiểu thêm văn hóa các nơi.",
    "answer": "旅行不仅能放松，还能多了解各地的文化。",
    "answerPy": "Lǚxíng bùjǐn néng fàngsōng, hái néng duō liǎojiě gèdì de wénhuà.",
    "note": "Ôn 不仅……还…… (Bài 3 · điểm 2).",
    "pair": "不仅……，还……"
   }
  ]
 },
 {
  "n": 5,
  "zh": "推迟",
  "py": "tuīchí",
  "pos": "Động từ",
  "vn": "hoãn, lùi lại (thời gian)",
  "hv": "thôi trì",
  "em": "⏳",
  "lesson": 1,
  "explain": [
   "Dời thời gian làm việc gì về sau: 推迟会议, 推迟出发, 推迟一周. Trái nghĩa: 提前 (làm sớm hơn). Khác 取消 (hủy hẳn)."
  ],
  "usage": "推迟 + N (会议 / 计划) · 推迟 + thời lượng (推迟一个星期) · 推迟到 + thời điểm.",
  "collo": [
   "推迟会议",
   "推迟出发",
   "推迟一周",
   "推迟到明天"
  ],
  "colloFull": [
   {
    "zh": "推迟会议",
    "py": "Tuīchí huìyì",
    "vn": "hoãn cuộc họp"
   },
   {
    "zh": "推迟出发",
    "py": "Tuīchí chūfā",
    "vn": "hoãn xuất phát"
   },
   {
    "zh": "推迟一周",
    "py": "Tuīchí yì zhōu",
    "vn": "lùi một tuần"
   },
   {
    "zh": "推迟到明天",
    "py": "Tuīchí dào míngtiān",
    "vn": "hoãn đến ngày mai"
   }
  ],
  "patterns": [
   {
    "s": "推迟 + 到 + thời điểm / 推迟 + thời lượng",
    "m": "Hoãn đến lúc nào / hoãn bao lâu"
   },
   {
    "s": "推迟 ↔ 提前",
    "m": "hoãn lại ↔ làm sớm hơn"
   }
  ],
  "ex_zh": "看来你的旅行计划只能推迟了。",
  "ex_py": "Kànlái nǐ de lǚxíng jìhuà zhǐnéng tuīchí le.",
  "ex_vn": "Xem ra kế hoạch du lịch của em chỉ có thể hoãn lại rồi.",
  "exList": [
   {
    "zh": "看来你的旅行计划只能推迟了。",
    "py": "Kànlái nǐ de lǚxíng jìhuà zhǐnéng tuīchí le.",
    "vn": "Xem ra kế hoạch du lịch của em chỉ có thể hoãn lại rồi."
   },
   {
    "zh": "因为天气不好，比赛推迟到下周举行。",
    "py": "Yīnwèi tiānqì bù hǎo, bǐsài tuīchí dào xià zhōu jǔxíng.",
    "vn": "Vì thời tiết không tốt, trận đấu được hoãn đến tuần sau mới tổ chức."
   }
  ],
  "hanzi": [
   {
    "c": "推",
    "p": "tuī",
    "type": "左右结构 · Trái-phải",
    "st": 11,
    "ord": "扌 trái → 隹 phải",
    "rad": "扌 (thủ)",
    "mean": "đẩy",
    "tip": "Tay 扌 + 隹(chim) → dùng tay ĐẨY. 推迟 = hoãn; 推出 = tung ra; 推荐 = giới thiệu.",
    "cf": "堆 (duī – đống)",
    "w": "推 / 推迟 / 推出 / 推荐"
   },
   {
    "c": "迟",
    "p": "chí",
    "type": "半包围结构 · Nửa bao quanh",
    "st": 7,
    "ord": "尺 trong → 辶 bao",
    "rad": "辶 (sước)",
    "mean": "muộn",
    "tip": "Đi 辶 + 尺 → đi chậm → MUỘN, TRỄ. 推迟 = đẩy lùi; 迟到 = đến muộn.",
    "cf": "尺 (chǐ – thước)",
    "w": "推迟 / 迟到 / 迟"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Cuộc họp hoãn đến thứ Tư tuần sau rồi.",
    "answer": "会议推迟到下周三了。",
    "answerPy": "Huìyì tuīchí dào xià zhōusān le.",
    "note": "推迟到 + thời gian.",
    "pair": "推迟到……"
   },
   {
    "promptLang": "vi",
    "prompt": "Bất kể thời tiết thế nào, kế hoạch cũng không thể hoãn nữa.",
    "answer": "不管天气怎么样，计划都不能再推迟了。",
    "answerPy": "Bùguǎn tiānqì zěnmeyàng, jìhuà dōu bù néng zài tuīchí le.",
    "note": "Ôn 不管……都…… (Bài 8 · điểm 1).",
    "pair": "不管……，都……"
   }
  ]
 },
 {
  "n": 6,
  "zh": "取消",
  "py": "qǔxiāo",
  "pos": "Động từ",
  "vn": "hủy, hủy bỏ",
  "hv": "thủ tiêu",
  "em": "❌",
  "lesson": 1,
  "explain": [
   "Hủy việc đã định / đã đặt: 取消计划, 取消航班, 取消订单. ⚠ Bẫy Hán Việt: 取消 đọc “thủ tiêu” nhưng KHÔNG có nghĩa “giết, thủ tiêu” — chỉ là “hủy bỏ”."
  ],
  "usage": "取消 + N · 把 + N + 取消了 · 被取消了.",
  "collo": [
   "取消机票",
   "取消计划",
   "取消会议",
   "取消订单"
  ],
  "colloFull": [
   {
    "zh": "取消机票",
    "py": "Qǔxiāo jīpiào",
    "vn": "hủy vé máy bay"
   },
   {
    "zh": "取消计划",
    "py": "Qǔxiāo jìhuà",
    "vn": "hủy kế hoạch"
   },
   {
    "zh": "取消会议",
    "py": "Qǔxiāo huìyì",
    "vn": "hủy cuộc họp"
   },
   {
    "zh": "取消订单",
    "py": "Qǔxiāo dìngdān",
    "vn": "hủy đơn hàng"
   }
  ],
  "patterns": [
   {
    "s": "把 + N + 取消了",
    "m": "Câu chữ 把 (Bài 16 · điểm 1)"
   },
   {
    "s": "取消 vs 推迟",
    "m": "取消: hủy hẳn; 推迟: chỉ lùi thời gian"
   }
  ],
  "ex_zh": "是的，我已经把机票和酒店取消了。",
  "ex_py": "Shì de, wǒ yǐjīng bǎ jīpiào hé jiǔdiàn qǔxiāo le.",
  "ex_vn": "Vâng, em đã hủy vé máy bay và khách sạn rồi.",
  "exList": [
   {
    "zh": "是的，我已经把机票和酒店取消了。",
    "py": "Shì de, wǒ yǐjīng bǎ jīpiào hé jiǔdiàn qǔxiāo le.",
    "vn": "Vâng, em đã hủy vé máy bay và khách sạn rồi."
   },
   {
    "zh": "因为下大雨，今天的航班都取消了。",
    "py": "Yīnwèi xià dàyǔ, jīntiān de hángbān dōu qǔxiāo le.",
    "vn": "Vì mưa to, các chuyến bay hôm nay đều bị hủy."
   }
  ],
  "hanzi": [
   {
    "c": "取",
    "p": "qǔ",
    "type": "左右结构 · Trái-phải",
    "st": 8,
    "ord": "耳 (nhĩ) trái → 又 phải",
    "rad": "又 (hựu – tay phải)",
    "mean": "lấy",
    "tip": "Chữ tượng hình bàn tay 又 cầm lấy TAI 耳 (tục cổ đại cắt tai chiến lợi phẩm) → nghĩa gốc là LẤY, mở rộng thành ĐẠT ĐƯỢC.",
    "cf": "职 (zhí – \"chức vụ\", bộ 耳\")",
    "w": "取 / 取得 / 获取"
   },
   {
    "c": "消",
    "p": "xiāo",
    "type": "形声字 · Chữ hình thanh",
    "st": 10,
    "ord": "氵 → 肖",
    "rad": "氵 (thủy – nước)",
    "mean": "tan biến, mất đi; tiêu (dùng); tin tức (消息)",
    "tip": "Nước (氵) làm vật nhỏ dần (肖, cũng chỉ âm xiāo) rồi tan mất → tiêu tan — 消失; tin truyền đi rồi tan vào tai người nghe → 消息 (tin tức).",
    "cf": "销 xiāo (bán, tiêu thụ) — bên trái là 钅; 削 xiāo (gọt) — bên phải là 刂",
    "w": "消息 / 消失 / 取消"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Tôi đã hủy khách sạn đã đặt rồi.",
    "answer": "我已经把订好的酒店取消了。",
    "answerPy": "Wǒ yǐjīng bǎ dìnghǎo de jiǔdiàn qǔxiāo le.",
    "note": "Câu 把 + V + 了 (Bài 16 · điểm 1).",
    "pair": "把……取消了"
   },
   {
    "promptLang": "vi",
    "prompt": "Hoạt động lần này không phải là hoãn, mà là hủy rồi.",
    "answer": "这次活动不是推迟了，而是取消了。",
    "answerPy": "Zhè cì huódòng bú shì tuīchí le, érshì qǔxiāo le.",
    "note": "Ôn 不是……而是…… (Bài 11 · điểm 3).",
    "pair": "不是……，而是……"
   }
  ]
 },
 {
  "n": 7,
  "zh": "可惜",
  "py": "kěxī",
  "pos": "Tính từ",
  "vn": "đáng tiếc, tiếc",
  "hv": "khả tích",
  "em": "😕",
  "lesson": 1,
  "explain": [
   "Cảm thấy tiếc vì mất cơ hội, việc tốt không thành. Hay dùng: 真可惜, 太可惜了, 有点儿可惜; cũng đứng đầu vế câu: 可惜…… (tiếc là …)."
  ],
  "usage": "真 / 太 + 可惜 (+ 了) · 可惜 + câu · 觉得很可惜.",
  "collo": [
   "真可惜",
   "太可惜了",
   "有点儿可惜",
   "可惜的是"
  ],
  "colloFull": [
   {
    "zh": "真可惜",
    "py": "Zhēn kěxī",
    "vn": "thật đáng tiếc"
   },
   {
    "zh": "太可惜了",
    "py": "Tài kěxī le",
    "vn": "tiếc quá"
   },
   {
    "zh": "有点儿可惜",
    "py": "Yǒudiǎnr kěxī",
    "vn": "hơi tiếc"
   },
   {
    "zh": "可惜的是",
    "py": "Kěxī de shì",
    "vn": "điều đáng tiếc là"
   }
  ],
  "patterns": [
   {
    "s": "……，可惜 + câu",
    "m": "Tiếc là …: 电影很好看，可惜你没来"
   },
   {
    "s": "真 / 太 + 可惜 + 了",
    "m": "Cảm thán"
   }
  ],
  "ex_zh": "虽然有点儿可惜，但学习更重要。",
  "ex_py": "Suīrán yǒudiǎnr kěxī, dàn xuéxí gèng zhòngyào.",
  "ex_vn": "Tuy hơi tiếc, nhưng việc học quan trọng hơn.",
  "exList": [
   {
    "zh": "虽然有点儿可惜，但学习更重要。",
    "py": "Suīrán yǒudiǎnr kěxī, dàn xuéxí gèng zhòngyào.",
    "vn": "Tuy hơi tiếc, nhưng việc học quan trọng hơn."
   },
   {
    "zh": "这么好的机会，你不去真可惜。",
    "py": "Zhème hǎo de jīhuì, nǐ bú qù zhēn kěxī.",
    "vn": "Cơ hội tốt thế này, bạn không đi thì thật đáng tiếc."
   }
  ],
  "hanzi": [
   {
    "c": "可",
    "p": "kě",
    "type": "半包围结构 · Bán bao vây",
    "st": 5,
    "ord": "丁 trong → 口 (khẩu) ngoài",
    "rad": "口 (khẩu – miệng)",
    "mean": "có thể, nhưng",
    "tip": "可 mang nghĩa CÓ THỂ, kết hợp 是(là) thành 可是 = NHƯNG (chuyển ý nhẹ nhàng, khẩu ngữ hơn 但是).",
    "cf": "何 (hé – \"sao, gì\", bộ 亻\")",
    "w": "可是 / 可以 / 但是"
   },
   {
    "c": "惜",
    "p": "xī",
    "type": "左右结构 · Trái-phải",
    "st": 11,
    "ord": "忄 (tâm) trái → 昔 phải",
    "rad": "忄 (tâm – trái tim)",
    "mean": "tiếc, quý",
    "tip": "Bộ tim 忄 + 昔(xưa) → lòng nhớ tiếc chuyện xưa → TIẾC, kết hợp 可 thành 可惜 = ĐÁNG TIẾC.",
    "cf": "借 (jiè – \"mượn\", bộ 亻)",
    "w": "可惜 / 珍惜 / 爱惜"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Bộ phim này rất hay, tiếc là bạn không xem.",
    "answer": "这部电影很有意思，可惜你没看。",
    "answerPy": "Zhè bù diànyǐng hěn yǒu yìsi, kěxī nǐ méi kàn.",
    "note": "可惜 + câu; lượng từ 部 (bài này).",
    "pair": "……，可惜……"
   },
   {
    "promptLang": "vi",
    "prompt": "Tuy hơi tiếc, nhưng sức khỏe quan trọng hơn.",
    "answer": "虽然有点儿可惜，但身体更重要。",
    "answerPy": "Suīrán yǒudiǎnr kěxī, dàn shēntǐ gèng zhòngyào.",
    "note": "虽然……但…… (HSK 3).",
    "pair": "虽然……，但……"
   }
  ]
 },
 {
  "n": 8,
  "zh": "确实",
  "py": "quèshí",
  "pos": "Phó từ",
  "vn": "quả thật, đúng là, thật sự",
  "hv": "xác thực",
  "em": "✅",
  "lesson": 1,
  "explain": [
   "Khẳng định một điều là đúng, là thật — hay dùng khi ĐỒNG Ý với ý kiến người khác: 学习确实很重要. Đứng trước động từ / tính từ; trả lời ngắn: 确实。(Đúng thật.)"
  ],
  "usage": "确实 + V / Adj · 确实是…… · 他确实说得对.",
  "collo": [
   "确实很重要",
   "确实不错",
   "确实是这样",
   "确实说得对"
  ],
  "colloFull": [
   {
    "zh": "确实很重要",
    "py": "Quèshí hěn zhòngyào",
    "vn": "thật sự rất quan trọng"
   },
   {
    "zh": "确实不错",
    "py": "Quèshí búcuò",
    "vn": "quả thật không tồi"
   },
   {
    "zh": "确实是这样",
    "py": "Quèshí shì zhèyàng",
    "vn": "đúng là như vậy"
   },
   {
    "zh": "确实说得对",
    "py": "Quèshí shuō de duì",
    "vn": "nói quả thật đúng"
   }
  ],
  "patterns": [
   {
    "s": "确实 + Adj / V",
    "m": "Khẳng định mạnh"
   },
   {
    "s": "A：……　B：确实。",
    "m": "Đồng ý: Đúng thật."
   }
  ],
  "ex_zh": "学习确实要放在第一位。",
  "ex_py": "Xuéxí quèshí yào fàngzài dì yí wèi.",
  "ex_vn": "Việc học đúng là phải đặt lên hàng đầu.",
  "exList": [
   {
    "zh": "学习确实要放在第一位。",
    "py": "Xuéxí quèshí yào fàngzài dì yí wèi.",
    "vn": "Việc học đúng là phải đặt lên hàng đầu."
   },
   {
    "zh": "这个办法确实不错，我们试试吧。",
    "py": "Zhège bànfǎ quèshí búcuò, wǒmen shìshi ba.",
    "vn": "Cách này quả thật không tồi, chúng ta thử xem."
   }
  ],
  "hanzi": [
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
   },
   {
    "c": "实",
    "p": "shí",
    "type": "上下结构 · Trên-dưới (giản thể)",
    "st": 8,
    "ord": "宀 (miên) trên → 头 (đầu) dưới",
    "rad": "宀 (miên – mái nhà)",
    "mean": "thực tế, chân thật",
    "tip": "Bộ mái nhà 宀 (nơi cất giữ của cải THỰC) → mở rộng thành THỰC TẾ, CHÂN THẬT, kết hợp 在(tồn tại) thành 实在 = KỲ THỰC, QUẢ THỰC.",
    "cf": "实 dễ nhầm với 买 (mǎi – \"mua\")",
    "w": "实在 / 现实 / 事实"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Anh ấy nói quả thật rất đúng, tôi cũng đồng ý với quan điểm của anh ấy.",
    "answer": "他确实说得很对，我也同意他的看法。",
    "answerPy": "Tā quèshí shuō de hěn duì, wǒ yě tóngyì tā de kànfǎ.",
    "note": "确实 + V; 同意……的看法.",
    "pair": "确实……"
   },
   {
    "promptLang": "vi",
    "prompt": "Kế hoạch đúng là không theo kịp thay đổi, xem ra chúng ta phải điều chỉnh lại.",
    "answer": "计划确实赶不上变化，看来我们得重新调整一下。",
    "answerPy": "Jìhuà quèshí gǎn bu shàng biànhuà, kànlái wǒmen děi chóngxīn tiáozhěng yíxià.",
    "note": "Ôn 重新 (Bài 11); 得 (děi) = phải.",
    "pair": "确实……，看来……"
   }
  ]
 },
 {
  "n": 9,
  "zh": "等到",
  "py": "děngdào",
  "pos": "Giới từ",
  "vn": "đợi đến khi, chờ đến lúc",
  "hv": "đẳng đáo",
  "em": "⌛",
  "lesson": 1,
  "explain": [
   "Đứng đầu câu, dẫn ra một thời điểm / sự việc trong tương lai: “đợi đến khi … thì …”. Vế sau thường có 再 / 就 / 才."
  ],
  "usage": "等到 + sự việc / thời điểm (+ 的时候 / 以后 / 后)，(Sub) + 再 / 就……",
  "collo": [
   "等到考试结束后",
   "等到明年",
   "等到他回来",
   "等到天晴了"
  ],
  "colloFull": [
   {
    "zh": "等到考试结束后",
    "py": "Děngdào kǎoshì jiéshù hòu",
    "vn": "đợi thi xong"
   },
   {
    "zh": "等到明年",
    "py": "Děngdào míngnián",
    "vn": "đợi đến sang năm"
   },
   {
    "zh": "等到他回来",
    "py": "Děngdào tā huílai",
    "vn": "đợi anh ấy về"
   },
   {
    "zh": "等到天晴了",
    "py": "Děngdào tiān qíng le",
    "vn": "đợi trời tạnh"
   }
  ],
  "patterns": [
   {
    "s": "等到……(以后 / 后)，再……",
    "m": "Đợi đến khi … rồi hãy …"
   }
  ],
  "ex_zh": "等到考试结束后，你再找个时间去。",
  "ex_py": "Děngdào kǎoshì jiéshù hòu, nǐ zài zhǎo gè shíjiān qù.",
  "ex_vn": "Đợi thi xong, em hãy tìm lúc khác đi.",
  "exList": [
   {
    "zh": "等到考试结束后，你再找个时间去。",
    "py": "Děngdào kǎoshì jiéshù hòu, nǐ zài zhǎo gè shíjiān qù.",
    "vn": "Đợi thi xong, em hãy tìm lúc khác đi."
   },
   {
    "zh": "等到工作不那么忙了，我想和家人去海边玩儿几天。",
    "py": "Děngdào gōngzuò bú nàme máng le, wǒ xiǎng hé jiārén qù hǎibiān wánr jǐ tiān.",
    "vn": "Đợi đến khi công việc không bận như thế nữa, tôi muốn cùng gia đình ra biển chơi mấy ngày."
   }
  ],
  "hanzi": [
   {
    "c": "等",
    "p": "děng",
    "type": "上下结构 · Trên-dưới",
    "st": 12,
    "ord": "竹(biến thể) trên → 寺 dưới",
    "rad": "竹 (trúc – tre)",
    "mean": "chờ, đẳng cấp, vân vân",
    "tip": "Bộ tre 竹 (thẻ tre xếp theo thứ tự) + 寺(biểu âm) → SẮP XẾP THEO THỨ TỰ, mở rộng thành trợ từ liệt kê VÂN VÂN (còn nhiều điều khác cùng loại).",
    "cf": "等 khi làm động từ nghĩa là CHỜ ĐỢI (等一下)",
    "w": "等 / 等等 / 平等"
   },
   {
    "c": "到",
    "p": "dào",
    "type": "形声字 · Chữ hình thanh",
    "st": 8,
    "ord": "至 → 刂",
    "rad": "刂 (đao – dao)",
    "mean": "đến; được (bổ ngữ kết quả)",
    "tip": "至 (đến nơi) + 刂 (chỉ âm): đi tới nơi. Làm bổ ngữ kết quả: 得到 / 收到 (HSK3 Bài 5) / 找到 = làm và đạt được kết quả.",
    "cf": "至 zhì — không có 刂",
    "w": "得到 / 收到 / 找到"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Đợi tốt nghiệp đại học xong, tôi muốn đi Trung Quốc du lịch.",
    "answer": "等到大学毕业以后，我想去中国旅行。",
    "answerPy": "Děngdào dàxué bìyè yǐhòu, wǒ xiǎng qù Zhōngguó lǚxíng.",
    "note": "等到……以后.",
    "pair": "等到……以后，……"
   },
   {
    "promptLang": "vi",
    "prompt": "Đợi trời tạnh rồi chúng ta hãy đi leo núi, nếu không gặp mưa sẽ không an toàn.",
    "answer": "等到天晴了我们再去爬山吧，否则下雨太不安全了。",
    "answerPy": "Děngdào tiān qíng le wǒmen zài qù páshān ba, fǒuzé xiàyǔ tài bù ānquán le.",
    "note": "Ôn 否则 (Bài 8 · điểm 2).",
    "pair": "等到……再……，否则……"
   }
  ]
 },
 {
  "n": 10,
  "zh": "早晨",
  "py": "zǎochen",
  "pos": "Danh từ",
  "vn": "sáng sớm, buổi sáng",
  "hv": "tảo thần",
  "em": "🌅",
  "lesson": 2,
  "explain": [
   "Khoảng thời gian từ lúc trời sáng đến khoảng 8–9 giờ sáng; gần nghĩa 早上 nhưng hơi văn viết hơn. Theo sách, 晨 đọc nhẹ: zǎochen."
  ],
  "usage": "明天早晨 · 每天早晨 · 早晨六点 · 周六早晨.",
  "collo": [
   "明天早晨",
   "每天早晨",
   "早晨的空气",
   "周六早晨"
  ],
  "colloFull": [
   {
    "zh": "明天早晨",
    "py": "Míngtiān zǎochen",
    "vn": "sáng sớm mai"
   },
   {
    "zh": "每天早晨",
    "py": "Měitiān zǎochen",
    "vn": "mỗi sáng"
   },
   {
    "zh": "早晨的空气",
    "py": "Zǎochen de kōngqì",
    "vn": "không khí buổi sáng"
   },
   {
    "zh": "周六早晨",
    "py": "Zhōuliù zǎochen",
    "vn": "sáng thứ Bảy"
   }
  ],
  "patterns": [
   {
    "s": "早晨 ≈ 早上",
    "m": "早晨 hơi văn viết; 早上 khẩu ngữ hơn"
   }
  ],
  "ex_zh": "刚接到通知，明天早晨的会议，时间改到下周了。",
  "ex_py": "Gāng jiēdào tōngzhī, míngtiān zǎochen de huìyì, shíjiān gǎidào xià zhōu le.",
  "ex_vn": "Vừa nhận được thông báo, cuộc họp sáng sớm mai đổi sang tuần sau rồi.",
  "exList": [
   {
    "zh": "刚接到通知，明天早晨的会议，时间改到下周了。",
    "py": "Gāng jiēdào tōngzhī, míngtiān zǎochen de huìyì, shíjiān gǎidào xià zhōu le.",
    "vn": "Vừa nhận được thông báo, cuộc họp sáng sớm mai đổi sang tuần sau rồi."
   },
   {
    "zh": "每天早晨，爷爷都去公园打太极拳。",
    "py": "Měitiān zǎochen, yéye dōu qù gōngyuán dǎ tàijíquán.",
    "vn": "Sáng sớm nào ông cũng ra công viên đánh Thái Cực quyền."
   }
  ],
  "hanzi": [
   {
    "c": "早",
    "p": "zǎo",
    "type": "上下结构 · Trên-dưới",
    "st": 6,
    "ord": "日(nhật) trên → 十(thập) dưới",
    "rad": "日 (nhật – mặt trời)",
    "mean": "sớm, buổi sáng",
    "tip": "日(mặt trời) mọc lên trên đầu ngọn cây/vạch 十 → chỉ thời điểm SỚM trong ngày.",
    "cf": "旱 (hàn – \"hạn hán\", dưới là 干 chứ không phải 十\")",
    "w": "早饭 / 早上 / 早安"
   },
   {
    "c": "晨",
    "p": "chén",
    "type": "形声字 · Chữ hình thanh",
    "st": 11,
    "ord": "日 → 辰",
    "rad": "日 (nhật – mặt trời)",
    "mean": "buổi sáng sớm",
    "tip": "Mặt trời (日) ở trên + 辰 (chén, gợi âm): lúc mặt trời vừa mọc → sáng sớm; 早晨 = buổi sáng, 晨练 = tập thể dục buổi sáng.",
    "cf": "震 zhèn (rung động) — trên là 雨; 唇 chún (môi) — dưới là 口",
    "w": "早晨 / 清晨 / 晨练"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Sáng thứ Bảy, trời đột nhiên chuyển âm u.",
    "answer": "周六早晨，天气忽然变阴了。",
    "answerPy": "Zhōuliù zǎochen, tiānqì hūrán biàn yīn le.",
    "note": "忽然 + V (bài này); 变 + Adj.",
    "pair": "早晨，……忽然……"
   },
   {
    "promptLang": "vi",
    "prompt": "Sáng sớm nào anh ấy cũng chạy bộ ít nhất nửa tiếng.",
    "answer": "他每天早晨至少跑半个小时步。",
    "answerPy": "Tā měitiān zǎochen zhìshǎo pǎo bàn gè xiǎoshí bù.",
    "note": "Ôn 至少 (Bài 5 · điểm 1); 跑步 là động từ li hợp.",
    "pair": "至少 + V + thời lượng"
   }
  ]
 },
 {
  "n": 11,
  "zh": "忽然",
  "py": "hūrán",
  "pos": "Phó từ",
  "vn": "bỗng nhiên, đột nhiên, chợt",
  "hv": "hốt nhiên",
  "em": "⚡",
  "lesson": 2,
  "explain": [
   "Sự việc xảy ra rất nhanh, không ngờ tới. Gần nghĩa 突然 (HSK 3) — nhưng 突然 còn là tính từ (很突然, 突然的消息); 忽然 CHỈ là phó từ, không nói ✗很忽然."
  ],
  "usage": "Sub + 忽然 + V · 忽然 + Sub + V.",
  "collo": [
   "忽然下雨了",
   "忽然想起",
   "忽然变阴了",
   "忽然要改时间"
  ],
  "colloFull": [
   {
    "zh": "忽然下雨了",
    "py": "Hūrán xiàyǔ le",
    "vn": "bỗng trời mưa"
   },
   {
    "zh": "忽然想起",
    "py": "Hūrán xiǎngqǐ",
    "vn": "chợt nhớ ra"
   },
   {
    "zh": "忽然变阴了",
    "py": "Hūrán biàn yīn le",
    "vn": "bỗng chuyển âm u"
   },
   {
    "zh": "忽然要改时间",
    "py": "Hūrán yào gǎi shíjiān",
    "vn": "đột nhiên phải đổi giờ"
   }
  ],
  "patterns": [
   {
    "s": "忽然 vs 突然",
    "m": "突然: phó từ + tính từ (这个消息太突然了); 忽然: chỉ là phó từ"
   }
  ],
  "ex_zh": "是啊，没想到忽然要改时间。",
  "ex_py": "Shì a, méi xiǎngdào hūrán yào gǎi shíjiān.",
  "ex_vn": "Đúng vậy, không ngờ đột nhiên phải đổi thời gian.",
  "exList": [
   {
    "zh": "是啊，没想到忽然要改时间。",
    "py": "Shì a, méi xiǎngdào hūrán yào gǎi shíjiān.",
    "vn": "Đúng vậy, không ngờ đột nhiên phải đổi thời gian."
   },
   {
    "zh": "我们正在上课，外面忽然下起了大雨。",
    "py": "Wǒmen zhèngzài shàngkè, wàimian hūrán xiàqǐ le dàyǔ.",
    "vn": "Chúng tôi đang học thì bên ngoài bỗng đổ mưa to."
   }
  ],
  "hanzi": [
   {
    "c": "忽",
    "p": "hū",
    "type": "形声字 · Chữ hình thanh",
    "st": 8,
    "ord": "勿 → 心",
    "rad": "心 (tâm – tim)",
    "mean": "bỗng nhiên; lơ là, sơ ý",
    "tip": "勿 (wù, gợi âm) ở trên + tim (心) ở dưới: lòng không để ý (勿 = đừng, không) → chợt, bỗng nhiên chẳng kịp để ý; 忽然 = bỗng nhiên, 忽视 = xem nhẹ.",
    "cf": "匆 cōng (vội vàng) — bên trong 勿 có thêm một chấm; 总 zǒng (luôn) — trên là 丷 + 口",
    "w": "忽然 / 忽视 / 忽冷忽热"
   },
   {
    "c": "然",
    "p": "rán",
    "type": "上下结构 · Trên-dưới",
    "st": 12,
    "ord": "月+犬 trên → 灬 dưới",
    "rad": "灬 (hỏa – lửa)",
    "mean": "như vậy, đúng vậy",
    "tip": "Bộ lửa 灬 (đốt thịt 月+犬) vốn nghĩa gốc là \"đốt cháy\", mượn âm để chỉ Ý NHƯ VẬY, ĐÚNG LÀ VẬY, mở rộng thành TỰ NHIÊN.",
    "cf": "燃 (rán – \"cháy\", thêm bộ 火\" bên trái, giữ nghĩa gốc)",
    "w": "自然 / 然后 / 突然"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Tôi đang định ra ngoài thì chợt nhớ ra là chưa tắt đèn.",
    "answer": "我正要出门，忽然想起来还没关灯。",
    "answerPy": "Wǒ zhèng yào chūmén, hūrán xiǎng qǐlai hái méi guān dēng.",
    "note": "忽然 + V; 正要…… (đang định).",
    "pair": "正要……，忽然……"
   },
   {
    "promptLang": "vi",
    "prompt": "Mặc dù đã chuẩn bị rất lâu, nhưng thời gian họp bỗng nhiên thay đổi.",
    "answer": "尽管准备了很久，可是会议时间忽然变了。",
    "answerPy": "Jǐnguǎn zhǔnbèi le hěn jiǔ, kěshì huìyì shíjiān hūrán biàn le.",
    "note": "Ôn 尽管 (Bài 9 · điểm 2).",
    "pair": "尽管……，可是……忽然……"
   }
  ]
 },
 {
  "n": 12,
  "zh": "增加",
  "py": "zēngjiā",
  "pos": "Động từ",
  "vn": "tăng, tăng thêm, thêm",
  "hv": "tăng gia",
  "em": "📈",
  "lesson": 2,
  "explain": [
   "Làm cho số lượng nhiều hơn: 增加例子, 增加内容; hoặc tự tăng lên: 收入增加了. Trái nghĩa: 减少 (giảm)."
  ],
  "usage": "增加 + N · N + 增加了 + 很多 / 一倍 · 增加的 + N.",
  "collo": [
   "增加例子",
   "增加内容",
   "收入增加",
   "增加了一倍"
  ],
  "colloFull": [
   {
    "zh": "增加例子",
    "py": "Zēngjiā lìzi",
    "vn": "thêm ví dụ"
   },
   {
    "zh": "增加内容",
    "py": "Zēngjiā nèiróng",
    "vn": "thêm nội dung"
   },
   {
    "zh": "收入增加",
    "py": "Shōurù zēngjiā",
    "vn": "thu nhập tăng"
   },
   {
    "zh": "增加了一倍",
    "py": "Zēngjiā le yí bèi",
    "vn": "tăng gấp đôi"
   }
  ],
  "patterns": [
   {
    "s": "增加 ↔ 减少",
    "m": "tăng ↔ giảm"
   },
   {
    "s": "N + 增加了 + 一倍 / 很多",
    "m": "Tăng bao nhiêu"
   }
  ],
  "ex_zh": "好吧，那再看看有没有新的安排，或者增加的会议内容。",
  "ex_py": "Hǎo ba, nà zài kànkan yǒu méiyǒu xīn de ānpái, huòzhě zēngjiā de huìyì nèiróng.",
  "ex_vn": "Thôi được, vậy xem lại xem có sắp xếp gì mới, hoặc nội dung họp được thêm vào không.",
  "exList": [
   {
    "zh": "好吧，那再看看有没有新的安排，或者增加的会议内容。",
    "py": "Hǎo ba, nà zài kànkan yǒu méiyǒu xīn de ānpái, huòzhě zēngjiā de huìyì nèiróng.",
    "vn": "Thôi được, vậy xem lại xem có sắp xếp gì mới, hoặc nội dung họp được thêm vào không."
   },
   {
    "zh": "这两年，来越南旅游的中国人增加了很多。",
    "py": "Zhè liǎng nián, lái Yuènán lǚyóu de Zhōngguórén zēngjiā le hěn duō.",
    "vn": "Hai năm nay, người Trung Quốc đến Việt Nam du lịch tăng lên rất nhiều."
   }
  ],
  "hanzi": [
   {
    "c": "增",
    "p": "zēng",
    "type": "左右结构 · Trái-phải",
    "st": 15,
    "ord": "土 (thổ) trái → 曾 phải",
    "rad": "土 (thổ – đất)",
    "mean": "tăng thêm",
    "tip": "Bộ đất 土 (đắp thêm đất) + 曾(biểu âm) → ĐẮP THÊM, kết hợp 加(cộng thêm) thành 增加 = TĂNG THÊM.",
    "cf": "赠 (zèng – \"tặng\", bộ 贝)",
    "w": "增加 / 增长 / 增多"
   },
   {
    "c": "加",
    "p": "jiā",
    "type": "会意字 · Chữ hội ý",
    "st": 5,
    "ord": "力 → 口",
    "rad": "力 (lực – sức)",
    "mean": "thêm, cộng vào",
    "tip": "力 (sức) + 口 (miệng): vừa ra sức vừa hô hào cổ vũ → thêm vào. 参加 = tham gia, góp mặt vào.",
    "cf": "如 rú (如果) — bên trái là 女",
    "w": "参加"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Bạn thử thêm vài ví dụ, mọi người sẽ dễ hiểu hơn.",
    "answer": "你试着增加几个例子，大家就更容易理解了。",
    "answerPy": "Nǐ shì zhe zēngjiā jǐ gè lìzi, dàjiā jiù gèng róngyì lǐjiě le.",
    "note": "试着 + V (thử làm); 增加 + N.",
    "pair": "试着增加……"
   },
   {
    "promptLang": "vi",
    "prompt": "Cùng với sự phát triển của kinh tế, thu nhập của mọi người tăng lên không ít.",
    "answer": "随着经济的发展，人们的收入增加了不少。",
    "answerPy": "Suízhe jīngjì de fāzhǎn, rénmen de shōurù zēngjiā le bùshǎo.",
    "note": "Ôn 随着 (Bài 1 · điểm 3).",
    "pair": "随着……，……增加了……"
   }
  ]
 },
 {
  "n": 13,
  "zh": "调整",
  "py": "tiáozhěng",
  "pos": "Động từ",
  "vn": "điều chỉnh",
  "hv": "điều chỉnh",
  "em": "🔧",
  "lesson": 2,
  "explain": [
   "Sửa đổi một chút cho phù hợp với tình hình mới: 调整计划, 调整时间, 调整心情. ⚠ 调 ở đây đọc tiáo; trong 调查 (điều tra) đọc diào."
  ],
  "usage": "调整 + N · 调整一下 · 灵活调整 · 根据……调整…….",
  "collo": [
   "调整计划",
   "调整时间",
   "灵活调整",
   "调整心情"
  ],
  "colloFull": [
   {
    "zh": "调整计划",
    "py": "Tiáozhěng jìhuà",
    "vn": "điều chỉnh kế hoạch"
   },
   {
    "zh": "调整时间",
    "py": "Tiáozhěng shíjiān",
    "vn": "điều chỉnh thời gian"
   },
   {
    "zh": "灵活调整",
    "py": "Línghuó tiáozhěng",
    "vn": "điều chỉnh linh hoạt"
   },
   {
    "zh": "调整心情",
    "py": "Tiáozhěng xīnqíng",
    "vn": "điều chỉnh tâm trạng"
   }
  ],
  "patterns": [
   {
    "s": "调整 + 一下",
    "m": "Điều chỉnh một chút"
   },
   {
    "s": "根据 + N + 调整……",
    "m": "Điều chỉnh theo …"
   }
  ],
  "ex_zh": "好的。会议材料还需要调整吗？",
  "ex_py": "Hǎo de. Huìyì cáiliào hái xūyào tiáozhěng ma?",
  "ex_vn": "Được ạ. Tài liệu họp còn cần điều chỉnh không?",
  "exList": [
   {
    "zh": "好的。会议材料还需要调整吗？",
    "py": "Hǎo de. Huìyì cáiliào hái xūyào tiáozhěng ma?",
    "vn": "Được ạ. Tài liệu họp còn cần điều chỉnh không?"
   },
   {
    "zh": "考试推迟了，我得调整一下复习计划。",
    "py": "Kǎoshì tuīchí le, wǒ děi tiáozhěng yíxià fùxí jìhuà.",
    "vn": "Kỳ thi bị hoãn, tôi phải điều chỉnh lại kế hoạch ôn tập."
   }
  ],
  "hanzi": [
   {
    "c": "调",
    "p": "tiáo",
    "type": "左右结构 · Trái-phải",
    "st": 10,
    "ord": "讠 (ngôn) trái → 周 (chu) phải",
    "rad": "讠 (ngôn – lời nói)",
    "mean": "điều tra, phối hợp",
    "tip": "Bộ lời nói 讠 + 周 (khắp, đầy đủ) → HỎI KHẮP để tìm hiểu, kết hợp 查 (tra xét) thành 调查 = ĐIỀU TRA.",
    "cf": "调 khi đọc \"tiáo\" nghĩa là \"điều chỉnh\" (调整)",
    "w": "调查 / 空调 / 调整"
   },
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
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Chúng ta nên điều chỉnh kế hoạch theo tình hình.",
    "answer": "我们应该根据情况调整计划。",
    "answerPy": "Wǒmen yīnggāi gēnjù qíngkuàng tiáozhěng jìhuà.",
    "note": "根据 + N + V.",
    "pair": "根据……调整……"
   },
   {
    "promptLang": "vi",
    "prompt": "Cho dù kế hoạch có thay đổi cũng đừng lo, kịp thời điều chỉnh là được.",
    "answer": "即使计划有变化也别担心，及时调整就是了。",
    "answerPy": "Jíshǐ jìhuà yǒu biànhuà yě bié dānxīn, jíshí tiáozhěng jiùshì le.",
    "note": "Ôn ×就是了 (Bài 2 · điểm 1) + 即使……也…… (Bài 11).",
    "pair": "……，……就是了"
   }
  ]
 },
 {
  "n": 14,
  "zh": "错误",
  "py": "cuòwù",
  "pos": "Danh từ / Tính từ",
  "vn": "lỗi, sai lầm; sai",
  "hv": "thác ngộ",
  "em": "⚠️",
  "lesson": 2,
  "explain": [
   "Danh từ: lỗi, sai sót (犯错误, 细节上的错误). Tính từ: sai, không đúng (错误的想法). Trang trọng hơn 错 (HSK 2)."
  ],
  "usage": "有错误 · 犯错误 · 改错误 · 错误的 + N.",
  "collo": [
   "犯错误",
   "细节上的错误",
   "改错误",
   "错误的想法"
  ],
  "colloFull": [
   {
    "zh": "犯错误",
    "py": "Fàn cuòwù",
    "vn": "mắc lỗi"
   },
   {
    "zh": "细节上的错误",
    "py": "Xìjié shàng de cuòwù",
    "vn": "lỗi ở chi tiết"
   },
   {
    "zh": "改错误",
    "py": "Gǎi cuòwù",
    "vn": "sửa lỗi"
   },
   {
    "zh": "错误的想法",
    "py": "Cuòwù de xiǎngfǎ",
    "vn": "suy nghĩ sai lầm"
   }
  ],
  "patterns": [
   {
    "s": "犯 + 错误",
    "m": "Mắc lỗi (✗ 做错误)"
   },
   {
    "s": "错误 vs 错",
    "m": "Làm bổ ngữ dùng 错: 写错了 (✗ 写错误了)"
   }
  ],
  "ex_zh": "再检查一下有没有细节上的错误。",
  "ex_py": "Zài jiǎnchá yíxià yǒu méiyǒu xìjié shàng de cuòwù.",
  "ex_vn": "Kiểm tra lại xem có lỗi ở chi tiết không.",
  "exList": [
   {
    "zh": "再检查一下有没有细节上的错误。",
    "py": "Zài jiǎnchá yíxià yǒu méiyǒu xìjié shàng de cuòwù.",
    "vn": "Kiểm tra lại xem có lỗi ở chi tiết không."
   },
   {
    "zh": "每个人都会犯错误，关键是要及时改。",
    "py": "Měi gè rén dōu huì fàn cuòwù, guānjiàn shì yào jíshí gǎi.",
    "vn": "Ai cũng sẽ mắc sai lầm, then chốt là phải kịp thời sửa."
   }
  ],
  "hanzi": [
   {
    "c": "错",
    "p": "cuò",
    "type": "左右结构 · Trái-phải (giản thể)",
    "st": 13,
    "ord": "钅(kim) trái → 昔 phải",
    "rad": "钅 (kim)",
    "mean": "sai, lẫn",
    "tip": "Bộ kim 钅 + 昔 → nghĩa gốc là mạ vàng đan xen, mượn nghĩa LẪN LỘN → SAI, kết hợp 误 thành 错误 = SAI LẦM (ôn lại 误会 Bài 12).",
    "cf": "借 (jiè – \"mượn\", bộ 亻 + 昔)",
    "w": "错误 / 错 / 误会"
   },
   {
    "c": "误",
    "p": "wù",
    "type": "左右结构 · Trái-phải (giản thể)",
    "st": 9,
    "ord": "讠 (ngôn) trái → 吴 phải",
    "rad": "讠 (ngôn)",
    "mean": "sai, lầm",
    "tip": "Bộ lời nói 讠 + 吴(biểu âm) → LỜI SAI, kết hợp 会(hiểu) thành 误会 = HIỂU LẦM.",
    "cf": "娱 (yú – \"vui\", bộ 女)",
    "w": "误会 / 错误 / 耽误"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Tài liệu này có mấy lỗi, bạn sửa chúng đi.",
    "answer": "这份材料有几个错误，你把它们改了吧。",
    "answerPy": "Zhè fèn cáiliào yǒu jǐ gè cuòwù, nǐ bǎ tāmen gǎi le ba.",
    "note": "Câu 把 + V + 了 (Bài 16 · điểm 1).",
    "pair": "把……改了"
   },
   {
    "promptLang": "vi",
    "prompt": "Mắc lỗi thì chẳng có gì phải sợ, sửa là được.",
    "answer": "犯了错误没什么好怕的，改了就是了。",
    "answerPy": "Fàn le cuòwù méi shénme hǎo pà de, gǎi le jiùshì le.",
    "note": "Ôn 没什么好×的 (Bài 6 · điểm 2) + ×就是了 (Bài 2 · điểm 1).",
    "pair": "没什么好……的"
   }
  ]
 },
 {
  "n": 15,
  "zh": "并且",
  "py": "bìngqiě",
  "pos": "Liên từ",
  "vn": "và, hơn nữa, đồng thời",
  "hv": "tịnh thả",
  "em": "➕",
  "lesson": 2,
  "explain": [
   "Nối hai động từ / hai vế câu, vế sau bổ sung, tiến thêm một bước (Bài 16 · điểm 2). Văn viết hơn 而且; KHÔNG nối hai danh từ (danh từ dùng 和)."
  ],
  "usage": "V1……，并且 + V2…… · Adj1，并且 + Adj2 · ……，并且还 / 也…….",
  "collo": [
   "……，并且……",
   "讨论并且通过",
   "并且做得很好",
   "并且还……"
  ],
  "colloFull": [
   {
    "zh": "……，并且……",
    "py": "……, Bìngqiě……",
    "vn": "…, hơn nữa …"
   },
   {
    "zh": "讨论并且通过",
    "py": "Tǎolùn bìngqiě tōngguò",
    "vn": "thảo luận và thông qua"
   },
   {
    "zh": "并且做得很好",
    "py": "Bìngqiě zuò de hěn hǎo",
    "vn": "hơn nữa làm rất tốt"
   },
   {
    "zh": "并且还……",
    "py": "Bìngqiě hái……",
    "vn": "hơn nữa còn …"
   }
  ],
  "patterns": [
   {
    "s": "并且 vs 和",
    "m": "和 nối danh từ (苹果和香蕉); 并且 nối động từ / vế câu"
   },
   {
    "s": "并且 vs 并 (Bài 2 · điểm 3)",
    "m": "并 là dạng rút gọn, văn viết, nối hai động từ"
   }
  ],
  "ex_zh": "再检查一下有没有细节上的错误，并且试着增加一些例子。",
  "ex_py": "Zài jiǎnchá yíxià yǒu méiyǒu xìjié shàng de cuòwù, bìngqiě shì zhe zēngjiā yìxiē lìzi.",
  "ex_vn": "Kiểm tra lại xem có lỗi ở chi tiết không, đồng thời thử thêm một vài ví dụ.",
  "exList": [
   {
    "zh": "再检查一下有没有细节上的错误，并且试着增加一些例子。",
    "py": "Zài jiǎnchá yíxià yǒu méiyǒu xìjié shàng de cuòwù, bìngqiě shì zhe zēngjiā yìxiē lìzi.",
    "vn": "Kiểm tra lại xem có lỗi ở chi tiết không, đồng thời thử thêm một vài ví dụ."
   },
   {
    "zh": "他学习很努力，并且经常帮助同学。",
    "py": "Tā xuéxí hěn nǔlì, bìngqiě jīngcháng bāngzhù tóngxué.",
    "vn": "Cậu ấy học rất chăm, hơn nữa còn thường giúp đỡ bạn bè."
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
   },
   {
    "c": "且",
    "p": "qiě",
    "type": "象形字 · Chữ tượng hình",
    "st": 5,
    "ord": "冂 (hai nét) → 二 (hai ngang bên trong) → 一 (ngang đáy)",
    "rad": "一 (nhất – một)",
    "mean": "hơn nữa, vả lại; tạm thời",
    "tip": "Giống hình cái bàn thờ / cái kệ có nhiều tầng chồng lên nhau → “chồng thêm” → hơn nữa: 而且, 并且 (chồng thêm một ý). Đếm 5 nét, ngang đáy viết sau cùng và dài nhất.",
    "cf": "目 mù (mắt) — kín đáy và có 3 khoảng; 旦 dàn (sáng sớm) — 日 trên một nét ngang",
    "w": "而且 / 并且 / 况且"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Anh ấy đã hoàn thành nhiệm vụ đúng hạn, hơn nữa làm rất tốt.",
    "answer": "他按时完成了任务，并且做得很好。",
    "answerPy": "Tā ànshí wánchéng le rènwu, bìngqiě zuò de hěn hǎo.",
    "note": "Câu ví dụ của sách (điểm 2).",
    "pair": "……，并且……"
   },
   {
    "promptLang": "vi",
    "prompt": "Không chỉ tôi, các bạn trong lớp đều đồng ý, hơn nữa đều muốn tham gia.",
    "answer": "不光是我，班里的同学都同意了，并且都想参加。",
    "answerPy": "Bùguāng shì wǒ, bān lǐ de tóngxué dōu tóngyì le, bìngqiě dōu xiǎng cānjiā.",
    "note": "Ôn 不光 (Bài 3 · điểm 2).",
    "pair": "不光……，并且……"
   }
  ]
 },
 {
  "n": 16,
  "zh": "例子",
  "py": "lìzi",
  "pos": "Danh từ",
  "vn": "ví dụ",
  "hv": "lệ tử",
  "em": "💡",
  "lesson": 2,
  "explain": [
   "Sự việc / câu cụ thể dùng để giải thích, chứng minh cho một ý. Lượng từ: 个. Động từ đi kèm: 举 (举个例子 = nêu một ví dụ). 比如 (HSK 3) là “ví dụ như” đứng trước nội dung ví dụ."
  ],
  "usage": "举例子 / 举个例子 · 增加一些例子 · 用例子说明.",
  "collo": [
   "举个例子",
   "增加例子",
   "用例子说明",
   "一个好例子"
  ],
  "colloFull": [
   {
    "zh": "举个例子",
    "py": "Jǔ gè lìzi",
    "vn": "nêu một ví dụ"
   },
   {
    "zh": "增加例子",
    "py": "Zēngjiā lìzi",
    "vn": "thêm ví dụ"
   },
   {
    "zh": "用例子说明",
    "py": "Yòng lìzi shuōmíng",
    "vn": "dùng ví dụ để giải thích"
   },
   {
    "zh": "一个好例子",
    "py": "Yí gè hǎo lìzi",
    "vn": "một ví dụ hay"
   }
  ],
  "patterns": [
   {
    "s": "举 + (个) + 例子",
    "m": "Nêu ví dụ"
   },
   {
    "s": "例子 vs 比如",
    "m": "例子 là danh từ; 比如 đứng trước ví dụ: 比如……"
   }
  ],
  "ex_zh": "再检查一下有没有细节上的错误，并且试着增加一些例子。",
  "ex_py": "Zài jiǎnchá yíxià yǒu méiyǒu xìjié shàng de cuòwù, bìngqiě shì zhe zēngjiā yìxiē lìzi.",
  "ex_vn": "Kiểm tra lại xem có lỗi ở chi tiết không, đồng thời thử thêm một vài ví dụ.",
  "exList": [
   {
    "zh": "再检查一下有没有细节上的错误，并且试着增加一些例子。",
    "py": "Zài jiǎnchá yíxià yǒu méiyǒu xìjié shàng de cuòwù, bìngqiě shì zhe zēngjiā yìxiē lìzi.",
    "vn": "Kiểm tra lại xem có lỗi ở chi tiết không, đồng thời thử thêm một vài ví dụ."
   },
   {
    "zh": "你能举个例子吗？我还不太明白。",
    "py": "Nǐ néng jǔ gè lìzi ma? Wǒ hái bú tài míngbai.",
    "vn": "Bạn có thể nêu một ví dụ không? Tôi vẫn chưa hiểu lắm."
   }
  ],
  "hanzi": [
   {
    "c": "例",
    "p": "lì",
    "type": "左右结构 · Trái-phải",
    "st": 8,
    "ord": "亻 (nhân) trái → 列 (liệt) phải",
    "rad": "亻 (nhân – người)",
    "mean": "ví dụ, trường hợp",
    "tip": "Bộ người 亻 + 列(sắp xếp) → một TRƯỜNG HỢP được sắp xếp ra để minh họa, kết hợp 如(như) thành 例如 = VÍ DỤ NHƯ.",
    "cf": "列 (liè – \"hàng, dãy\", không có bộ 亻\")",
    "w": "例如 / 例子 / 举例"
   },
   {
    "c": "子",
    "p": "zǐ",
    "type": "象形字 · Chữ tượng hình",
    "st": 3,
    "ord": "ngang gập → sổ móc → ngang (hất)",
    "rad": "子 (tử – con)",
    "mean": "con; hậu tố danh từ",
    "tip": "Hình đứa bé quấn tã. Trong 句子、本子、箱子 là hậu tố, đọc nhẹ \"zi\".",
    "cf": "字 zì (chữ) — thêm 宀 ở trên",
    "w": "句子 / 本子 / 箱子"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Thầy giáo nêu một ví dụ, chúng tôi lập tức hiểu ra.",
    "answer": "老师举了一个例子，我们马上就明白了。",
    "answerPy": "Lǎoshī jǔ le yí gè lìzi, wǒmen mǎshàng jiù míngbai le.",
    "note": "举例子.",
    "pair": "举了一个例子"
   },
   {
    "promptLang": "vi",
    "prompt": "Viết văn không chỉ phải có quan điểm, mà còn phải có ví dụ.",
    "answer": "写作文不仅要有观点，还要有例子。",
    "answerPy": "Xiě zuòwén bùjǐn yào yǒu guāndiǎn, hái yào yǒu lìzi.",
    "note": "Ôn 不仅……还…… (Bài 3 · điểm 2).",
    "pair": "不仅……，还……"
   }
  ]
 },
 {
  "n": 17,
  "zh": "关键",
  "py": "guānjiàn",
  "pos": "Danh từ / Tính từ",
  "vn": "then chốt, mấu chốt; quan trọng nhất",
  "hv": "quan kiện",
  "em": "🔑",
  "lesson": 2,
  "explain": [
   "Danh từ: phần quan trọng nhất, quyết định kết quả (问题的关键). Tính từ: then chốt (关键的问题, 很关键). Mẫu rất hay dùng: ……，关键是…… (điều mấu chốt là …)."
  ],
  "usage": "关键是…… · ……的关键 · 很关键 · 关键时候.",
  "collo": [
   "关键是……",
   "问题的关键",
   "关键时候",
   "非常关键"
  ],
  "colloFull": [
   {
    "zh": "关键是……",
    "py": "Guānjiàn shì……",
    "vn": "then chốt là …"
   },
   {
    "zh": "问题的关键",
    "py": "Wèntí de guānjiàn",
    "vn": "mấu chốt của vấn đề"
   },
   {
    "zh": "关键时候",
    "py": "Guānjiàn shíhou",
    "vn": "thời khắc then chốt"
   },
   {
    "zh": "非常关键",
    "py": "Fēicháng guānjiàn",
    "vn": "vô cùng then chốt"
   }
  ],
  "patterns": [
   {
    "s": "……，关键是……",
    "m": "Mấu chốt là … (nêu điều quan trọng nhất)"
   },
   {
    "s": "……的关键是……",
    "m": "Then chốt của … là …"
   }
  ],
  "ex_zh": "看来有时候变化不一定是坏事，关键是我们怎么去适应变化。",
  "ex_py": "Kànlái yǒushíhou biànhuà bùyídìng shì huàishì, guānjiàn shì wǒmen zěnme qù shìyìng biànhuà.",
  "ex_vn": "Xem ra có lúc thay đổi chưa chắc là chuyện xấu, then chốt là chúng ta thích nghi với thay đổi thế nào.",
  "exList": [
   {
    "zh": "看来有时候变化不一定是坏事，关键是我们怎么去适应变化。",
    "py": "Kànlái yǒushíhou biànhuà bùyídìng shì huàishì, guānjiàn shì wǒmen zěnme qù shìyìng biànhuà.",
    "vn": "Xem ra có lúc thay đổi chưa chắc là chuyện xấu, then chốt là chúng ta thích nghi với thay đổi thế nào."
   },
   {
    "zh": "学好外语的关键是多听多说。",
    "py": "Xuéhǎo wàiyǔ de guānjiàn shì duō tīng duō shuō.",
    "vn": "Mấu chốt để học giỏi ngoại ngữ là nghe nhiều nói nhiều."
   }
  ],
  "hanzi": [
   {
    "c": "关",
    "p": "guān",
    "type": "形声字 · Chữ hình thanh",
    "st": 6,
    "ord": "Chấm, phẩy (hai nét nhỏ trên) → ngang → ngang → phẩy → mác",
    "rad": "八 (bát; biến thể ở trên)",
    "mean": "đóng; liên quan",
    "tip": "Phồn thể 關 có 门 (cửa) bao ngoài: then cài cửa → đóng (关门、关灯 – HSK3 Bài 3); then nối hai cánh cửa → liên quan (关系 – HSK3 Bài 15, 关心 – HSK3 Bài 8). 关于 = liên quan tới → về.",
    "cf": "天 tiān — không có hai nét chấm, phẩy ở trên",
    "w": "关于 / 关系 / 关门"
   },
   {
    "c": "键",
    "p": "jiàn",
    "type": "左右结构 · Trái-phải (giản thể)",
    "st": 13,
    "ord": "钅(kim) trái → 建 (kiến) phải",
    "rad": "钅 (kim – kim loại)",
    "mean": "chốt, phím",
    "tip": "Bộ kim loại 钅 (chốt kim loại) + 建(dựng lên, biểu âm) → CHỐT quan trọng để khóa/mở, kết hợp 关(then chốt) thành 关键 = ĐIỂM MẤU CHỐT.",
    "cf": "健 (jiàn – \"khỏe mạnh\", bộ 亻\")",
    "w": "关键 / 键盘 / 关键词"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Muốn nâng cao thành tích, then chốt là kiên trì ôn tập mỗi ngày.",
    "answer": "要想提高成绩，关键是坚持每天复习。",
    "answerPy": "Yào xiǎng tígāo chéngjì, guānjiàn shì jiānchí měitiān fùxí.",
    "note": "Câu bài tập tổng hợp của sách.",
    "pair": "……，关键是……"
   },
   {
    "promptLang": "vi",
    "prompt": "Làm công việc gì cũng được, then chốt là phải có hứng thú.",
    "answer": "做什么工作都行，关键是要感兴趣。",
    "answerPy": "Zuò shénme gōngzuò dōu xíng, guānjiàn shì yào gǎnxìngqù.",
    "note": "Đại từ nghi vấn phiếm chỉ 什么……都…… (HSK 3).",
    "pair": "……，关键是……"
   }
  ]
 },
 {
  "n": 18,
  "zh": "详细",
  "py": "xiángxì",
  "pos": "Tính từ",
  "vn": "chi tiết, tỉ mỉ",
  "hv": "tường tế",
  "em": "🔍",
  "lesson": 3,
  "explain": [
   "Đầy đủ từng chi tiết, cụ thể: 详细的计划, 讲得很详细. Làm trạng ngữ thêm 地: 详细地介绍."
  ],
  "usage": "详细的 + N · V + 得 + 很详细 · 详细地 + V.",
  "collo": [
   "详细的计划",
   "详细地介绍",
   "讲得很详细",
   "详细情况"
  ],
  "colloFull": [
   {
    "zh": "详细的计划",
    "py": "Xiángxì de jìhuà",
    "vn": "kế hoạch chi tiết"
   },
   {
    "zh": "详细地介绍",
    "py": "Xiángxì de jièshào",
    "vn": "giới thiệu chi tiết"
   },
   {
    "zh": "讲得很详细",
    "py": "Jiǎng de hěn xiángxì",
    "vn": "giảng rất chi tiết"
   },
   {
    "zh": "详细情况",
    "py": "Xiángxì qíngkuàng",
    "vn": "tình hình cụ thể"
   }
  ],
  "patterns": [
   {
    "s": "V + 得 + (很 / 再) + 详细 (+ 一点儿)",
    "m": "Bổ ngữ trình độ"
   },
   {
    "s": "详细地 + V",
    "m": "Trạng ngữ"
   }
  ],
  "ex_zh": "然后按照详细的时间表去完成任务。",
  "ex_py": "Ránhòu ànzhào xiángxì de shíjiānbiǎo qù wánchéng rènwu.",
  "ex_vn": "Sau đó làm theo thời gian biểu chi tiết để hoàn thành nhiệm vụ.",
  "exList": [
   {
    "zh": "然后按照详细的时间表去完成任务。",
    "py": "Ránhòu ànzhào xiángxì de shíjiānbiǎo qù wánchéng rènwu.",
    "vn": "Sau đó làm theo thời gian biểu chi tiết để hoàn thành nhiệm vụ."
   },
   {
    "zh": "老师，这个问题可以讲得再详细一点儿吗？",
    "py": "Lǎoshī, zhège wèntí kěyǐ jiǎng de zài xiángxì yìdiǎnr ma?",
    "vn": "Thưa thầy, vấn đề này thầy có thể giảng chi tiết hơn một chút không ạ?"
   }
  ],
  "hanzi": [
   {
    "c": "详",
    "p": "xiáng",
    "type": "左右结构 · Trái-phải (giản thể)",
    "st": 8,
    "ord": "讠 (ngôn) trái → 羊 phải",
    "rad": "讠 (ngôn)",
    "mean": "rõ ràng, tường tận",
    "tip": "Bộ lời nói 讠 + 羊(biểu âm) → nói TƯỜNG TẬN, kết hợp 细(tỉ mỉ) thành 详细 = CHI TIẾT.",
    "cf": "样 (yàng – \"dạng\", bộ 木)",
    "w": "详细 / 详情 / 细心"
   },
   {
    "c": "细",
    "p": "xì",
    "type": "形声字 · Chữ hình thanh",
    "st": 8,
    "ord": "纟 → 田",
    "rad": "纟 (mịch – sợi tơ)",
    "mean": "nhỏ, mảnh; tỉ mỉ, kỹ",
    "tip": "Sợi tơ (纟) vốn rất mảnh + 田: sợi chỉ nhỏ → nhỏ, mảnh; làm việc nhỏ nhặt từng li → tỉ mỉ — 细心, 仔细, 详细.",
    "cf": "组 zǔ (tổ) — bên phải là 且; 绍 shào — bên phải là 召",
    "w": "细心 / 仔细 / 详细"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Bạn có thể giới thiệu chi tiết tình hình công ty không?",
    "answer": "你能详细地介绍一下公司的情况吗？",
    "answerPy": "Nǐ néng xiángxì de jièshào yíxià gōngsī de qíngkuàng ma?",
    "note": "详细地 + V.",
    "pair": "详细地介绍"
   },
   {
    "promptLang": "vi",
    "prompt": "Kế hoạch càng chi tiết, làm việc càng nắm chắc.",
    "answer": "计划越详细，做事越有把握。",
    "answerPy": "Jìhuà yuè xiángxì, zuòshì yuè yǒu bǎwò.",
    "note": "越……越…… (HSK 3); 有把握 (bài này).",
    "pair": "越……越……"
   }
  ]
 },
 {
  "n": 19,
  "zh": "时间表",
  "py": "shíjiānbiǎo",
  "pos": "Danh từ",
  "vn": "thời gian biểu, lịch trình",
  "hv": "thời gian biểu",
  "em": "🗓️",
  "lesson": 3,
  "explain": [
   "Bảng ghi giờ giấc làm từng việc. Hán Việt “thời gian biểu” trùng nghĩa với tiếng Việt — rất dễ nhớ."
  ],
  "usage": "做时间表 · 按照时间表 + V · 一份时间表.",
  "collo": [
   "做时间表",
   "按照时间表",
   "复习时间表",
   "火车时间表"
  ],
  "colloFull": [
   {
    "zh": "做时间表",
    "py": "Zuò shíjiānbiǎo",
    "vn": "lập thời gian biểu"
   },
   {
    "zh": "按照时间表",
    "py": "Ànzhào shíjiānbiǎo",
    "vn": "theo thời gian biểu"
   },
   {
    "zh": "复习时间表",
    "py": "Fùxí shíjiānbiǎo",
    "vn": "lịch ôn tập"
   },
   {
    "zh": "火车时间表",
    "py": "Huǒchē shíjiānbiǎo",
    "vn": "bảng giờ tàu"
   }
  ],
  "patterns": [
   {
    "s": "按照 + 时间表 + V",
    "m": "Làm theo thời gian biểu"
   }
  ],
  "ex_zh": "然后按照详细的时间表去完成任务。",
  "ex_py": "Ránhòu ànzhào xiángxì de shíjiānbiǎo qù wánchéng rènwu.",
  "ex_vn": "Sau đó làm theo thời gian biểu chi tiết để hoàn thành nhiệm vụ.",
  "exList": [
   {
    "zh": "然后按照详细的时间表去完成任务。",
    "py": "Ránhòu ànzhào xiángxì de shíjiānbiǎo qù wánchéng rènwu.",
    "vn": "Sau đó làm theo thời gian biểu chi tiết để hoàn thành nhiệm vụ."
   },
   {
    "zh": "考试前，我给自己做了一份复习时间表。",
    "py": "Kǎoshì qián, wǒ gěi zìjǐ zuò le yí fèn fùxí shíjiānbiǎo.",
    "vn": "Trước kỳ thi, tôi lập cho mình một thời gian biểu ôn tập."
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
   },
   {
    "c": "间",
    "p": "jiān",
    "type": "会意字 · Chữ hội ý",
    "st": 7,
    "ord": "门 → 日",
    "rad": "门 (môn – cửa)",
    "mean": "khoảng giữa, gian",
    "tip": "Ánh mặt trời 日 lọt qua khe cửa 门 → khoảng giữa. Đã gặp trong 时间, 房间.",
    "cf": "问 wèn (hỏi) — trong 门 là 口",
    "w": "中间 / 时间 / 房间"
   },
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
    "prompt": "Mỗi ngày anh ấy đều làm việc nghiêm ngặt theo thời gian biểu.",
    "answer": "他每天都严格按照时间表做事。",
    "answerPy": "Tā měitiān dōu yángé ànzhào shíjiānbiǎo zuòshì.",
    "note": "严格按照…… (bài khoá 3).",
    "pair": "严格按照……"
   },
   {
    "promptLang": "vi",
    "prompt": "Có thời gian biểu rồi, tôi mới không quên những việc quan trọng.",
    "answer": "有了时间表，我才不会忘了重要的事情。",
    "answerPy": "Yǒu le shíjiānbiǎo, wǒ cái bú huì wàng le zhòngyào de shìqing.",
    "note": "才 = mới (HSK 3).",
    "pair": "有了……，才……"
   }
  ]
 },
 {
  "n": 20,
  "zh": "把握",
  "py": "bǎwò",
  "pos": "Danh từ",
  "vn": "sự nắm chắc, phần chắc chắn",
  "hv": "bả ác",
  "em": "🎯",
  "lesson": 3,
  "explain": [
   "Danh từ: sự chắc chắn, tự tin sẽ làm được: 有把握 (nắm chắc), 没有把握, 有几分把握. Còn làm động từ: 把握机会 (nắm bắt cơ hội). ⚠ 把 ở đây là “nắm”, không phải 把 trong câu chữ 把."
  ],
  "usage": "有 / 没有 + 把握 · 很有把握 · 有把握 + V · 把握机会.",
  "collo": [
   "有把握",
   "没有把握",
   "更有把握",
   "把握机会"
  ],
  "colloFull": [
   {
    "zh": "有把握",
    "py": "Yǒu bǎwò",
    "vn": "nắm chắc"
   },
   {
    "zh": "没有把握",
    "py": "Méiyǒu bǎwò",
    "vn": "không chắc"
   },
   {
    "zh": "更有把握",
    "py": "Gèng yǒu bǎwò",
    "vn": "chắc chắn hơn"
   },
   {
    "zh": "把握机会",
    "py": "Bǎwò jīhuì",
    "vn": "nắm bắt cơ hội"
   }
  ],
  "patterns": [
   {
    "s": "(很 / 更) 有把握 (+ V)",
    "m": "Chắc chắn sẽ làm được"
   },
   {
    "s": "没 (有) 把握",
    "m": "Không chắc"
   }
  ],
  "ex_zh": "觉得这样做更有把握。",
  "ex_py": "Juéde zhèyàng zuò gèng yǒu bǎwò.",
  "ex_vn": "…cảm thấy làm như vậy nắm chắc hơn.",
  "exList": [
   {
    "zh": "觉得这样做更有把握。",
    "py": "Juéde zhèyàng zuò gèng yǒu bǎwò.",
    "vn": "…cảm thấy làm như vậy nắm chắc hơn."
   },
   {
    "zh": "这次考试我复习得很认真，很有把握。",
    "py": "Zhè cì kǎoshì wǒ fùxí de hěn rènzhēn, hěn yǒu bǎwò.",
    "vn": "Kỳ thi này tôi ôn rất kỹ, rất nắm chắc."
   }
  ],
  "hanzi": [
   {
    "c": "把",
    "p": "bǎ",
    "type": "形声字 · Chữ hình thanh",
    "st": 7,
    "ord": "扌 → 巴",
    "rad": "扌 (thủ – tay)",
    "mean": "nắm, cầm; (giới từ) đem",
    "tip": "扌 (tay) + 巴 (chỉ âm): tay nắm lấy vật → \"đem\" vật ra xử lý. Câu chữ 把 = cầm vật lên rồi làm gì với nó.",
    "cf": "爸 bà (爸爸), 吧 ba, 爬 pá (HSK3 Bài 5) — cùng phần 巴",
    "w": "把书 / 把作业 / 把礼物"
   },
   {
    "c": "握",
    "p": "wò",
    "type": "形声字 · Chữ hình thanh",
    "st": 12,
    "ord": "扌 → 屋",
    "rad": "扌 (thủ – tay)",
    "mean": "nắm, cầm chặt",
    "tip": "Tay (扌) + 屋 (wū, nhà, gợi âm wò): bàn tay khép lại như mái nhà úp xuống → nắm chặt; 握手 = bắt tay, 把握 = nắm chắc.",
    "cf": "屋 wū (nhà) — không có 扌; 渥 wò — bộ 氵",
    "w": "握手 / 把握 / 掌握"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Việc này tôi không chắc lắm, để tôi thử trước đã.",
    "answer": "这件事我没有太大把握，我先试试吧。",
    "answerPy": "Zhè jiàn shì wǒ méiyǒu tài dà bǎwò, wǒ xiān shìshi ba.",
    "note": "没有把握; VV = thử.",
    "pair": "没有……把握"
   },
   {
    "promptLang": "vi",
    "prompt": "Tôi không phải không muốn tham gia, mà là không nắm chắc.",
    "answer": "我不是不想参加，而是没有把握。",
    "answerPy": "Wǒ bú shì bù xiǎng cānjiā, érshì méiyǒu bǎwò.",
    "note": "Ôn 不是……而是…… (Bài 11 · điểm 3).",
    "pair": "不是……，而是……"
   }
  ]
 },
 {
  "n": 21,
  "zh": "相反",
  "py": "xiāngfǎn",
  "pos": "Liên từ / Tính từ",
  "vn": "ngược lại; trái ngược",
  "hv": "tương phản",
  "em": "🔃",
  "lesson": 3,
  "explain": [
   "Liên từ: đứng đầu câu sau (thường có dấu phẩy) — “ngược lại”, nêu ý trái với câu trước. Tính từ: trái ngược nhau (意见相反, 相反的方向). ⚠ Hán Việt “tương phản”, nhưng nghĩa hay gặp nhất là “ngược lại”."
  ],
  "usage": "……。相反，…… · A 和 B 相反 · 正好相反 · 相反的 + N.",
  "collo": [
   "正好相反",
   "相反的方向",
   "意见相反",
   "相反，……"
  ],
  "colloFull": [
   {
    "zh": "正好相反",
    "py": "Zhènghǎo xiāngfǎn",
    "vn": "hoàn toàn ngược lại"
   },
   {
    "zh": "相反的方向",
    "py": "Xiāngfǎn de fāngxiàng",
    "vn": "hướng ngược lại"
   },
   {
    "zh": "意见相反",
    "py": "Yìjiàn xiāngfǎn",
    "vn": "ý kiến trái ngược"
   },
   {
    "zh": "相反，……",
    "py": "Xiāngfǎn,……",
    "vn": "ngược lại, …"
   }
  ],
  "patterns": [
   {
    "s": "……。相反，……",
    "m": "Liên từ đầu câu"
   },
   {
    "s": "A 和 / 跟 B + 相反",
    "m": "Tính từ làm vị ngữ"
   }
  ],
  "ex_zh": "相反，也有一部分人不爱做计划。",
  "ex_py": "Xiāngfǎn, yě yǒu yí bùfen rén bú ài zuò jìhuà.",
  "ex_vn": "Ngược lại, cũng có một bộ phận người không thích lập kế hoạch.",
  "exList": [
   {
    "zh": "相反，也有一部分人不爱做计划。",
    "py": "Xiāngfǎn, yě yǒu yí bùfen rén bú ài zuò jìhuà.",
    "vn": "Ngược lại, cũng có một bộ phận người không thích lập kế hoạch."
   },
   {
    "zh": "我们俩的看法正好相反。",
    "py": "Wǒmen liǎ de kànfǎ zhènghǎo xiāngfǎn.",
    "vn": "Quan điểm của hai chúng tôi hoàn toàn trái ngược."
   }
  ],
  "hanzi": [
   {
    "c": "相",
    "p": "xiāng",
    "type": "左右结构 · Trái-phải",
    "st": 9,
    "ord": "木 (mộc) trái → 目 (mục) phải",
    "rad": "目 (mục – mắt)",
    "mean": "lẫn nhau",
    "tip": "Chữ hội ý mắt 目 nhìn cây 木 → QUAN SÁT, mở rộng thành LẪN NHAU, kết hợp 同(giống) thành 相同 = GIỐNG NHAU.",
    "cf": "想 (xiǎng – \"nghĩ\", thêm bộ 心)",
    "w": "相同 / 相信 / 互相"
   },
   {
    "c": "反",
    "p": "fǎn",
    "type": "半包围结构 · Bán bao vây",
    "st": 4,
    "ord": "厂 → 又",
    "rad": "又 (hựu – tay)",
    "mean": "ngược, lật",
    "tip": "Chữ hội ý bàn tay 又 LẬT NGƯỢC dưới vách 厂 → NGƯỢC, kết hợp 相 thành 相反 = TRÁI NGƯỢC.",
    "cf": "友 (yǒu – \"bạn\", tự dạng gần giống)",
    "w": "相反 / 反对 / 反映"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Anh ấy không tức giận, ngược lại còn cảm ơn tôi.",
    "answer": "他没有生气，相反，还谢谢了我。",
    "answerPy": "Tā méiyǒu shēngqì, xiāngfǎn, hái xièxie le wǒ.",
    "note": "相反 làm liên từ.",
    "pair": "……，相反，……"
   },
   {
    "promptLang": "vi",
    "prompt": "Anh ấy thích ở nhà nghỉ ngơi, em gái thì ngược lại, thích ra ngoài dạo phố.",
    "answer": "他喜欢在家里休息，妹妹却相反，喜欢出去逛街。",
    "answerPy": "Tā xǐhuan zài jiāli xiūxi, mèimei què xiāngfǎn, xǐhuan chūqu guàngjiē.",
    "note": "Kết hợp 却 (Bài 16 · điểm 4); 逛街 (bài này).",
    "pair": "……，……却相反"
   }
  ]
 },
 {
  "n": 22,
  "zh": "部分",
  "py": "bùfen",
  "pos": "Danh từ",
  "vn": "phần, bộ phận",
  "hv": "bộ phận",
  "em": "🧩",
  "lesson": 3,
  "explain": [
   "Một phần trong tổng thể: 一部分人 (một bộ phận người), 大部分 (phần lớn). 分 đọc nhẹ: bùfen."
  ],
  "usage": "一部分 + N · 大部分 · 这部分 · 分成几个部分.",
  "collo": [
   "一部分人",
   "大部分",
   "这部分内容",
   "分成三个部分"
  ],
  "colloFull": [
   {
    "zh": "一部分人",
    "py": "Yí bùfen rén",
    "vn": "một bộ phận người"
   },
   {
    "zh": "大部分",
    "py": "Dà bùfen",
    "vn": "phần lớn"
   },
   {
    "zh": "这部分内容",
    "py": "Zhè bùfen nèiróng",
    "vn": "phần nội dung này"
   },
   {
    "zh": "分成三个部分",
    "py": "Fēnchéng sān gè bùfen",
    "vn": "chia làm ba phần"
   }
  ],
  "patterns": [
   {
    "s": "一部分……，一部分……",
    "m": "Một phần … một phần …"
   },
   {
    "s": "大部分 + N + 都……",
    "m": "Phần lớn đều …"
   }
  ],
  "ex_zh": "相反，也有一部分人不爱做计划。",
  "ex_py": "Xiāngfǎn, yě yǒu yí bùfen rén bú ài zuò jìhuà.",
  "ex_vn": "Ngược lại, cũng có một bộ phận người không thích lập kế hoạch.",
  "exList": [
   {
    "zh": "相反，也有一部分人不爱做计划。",
    "py": "Xiāngfǎn, yě yǒu yí bùfen rén bú ài zuò jìhuà.",
    "vn": "Ngược lại, cũng có một bộ phận người không thích lập kế hoạch."
   },
   {
    "zh": "这篇文章可以分成三个部分。",
    "py": "Zhè piān wénzhāng kěyǐ fēnchéng sān gè bùfen.",
    "vn": "Bài văn này có thể chia thành ba phần."
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
   },
   {
    "c": "分",
    "p": "fen",
    "type": "上下结构 · Trên-dưới",
    "st": 4,
    "ord": "八 trên → 刀 dưới",
    "rad": "刀 (đao)",
    "mean": "chia, phần",
    "tip": "Chữ hội ý dao 刀 CHIA đôi 八 → PHẦN; 十分 = mười phần (trọn vẹn) → RẤT.",
    "cf": "公 (gōng – \"công\", tự dạng gần giống)",
    "w": "十分 / 分钟 / 部分"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Phần lớn các bạn đều thích học trên mạng.",
    "answer": "大部分同学都喜欢在网上上课。",
    "answerPy": "Dà bùfen tóngxué dōu xǐhuan zài wǎngshang shàngkè.",
    "note": "大部分 + N + 都; ôn 网上 (Bài 11).",
    "pair": "大部分……都……"
   },
   {
    "promptLang": "vi",
    "prompt": "Một bộ phận người thích lập kế hoạch, một bộ phận người lại thích tùy hứng hơn.",
    "answer": "一部分人喜欢做计划，一部分人却更喜欢随意一些。",
    "answerPy": "Yí bùfen rén xǐhuan zuò jìhuà, yí bùfen rén què gèng xǐhuan suíyì yìxiē.",
    "note": "Kết hợp 却 (Bài 16 · điểm 4).",
    "pair": "一部分……，一部分……却……"
   }
  ]
 },
 {
  "n": 23,
  "zh": "轻松",
  "py": "qīngsōng",
  "pos": "Tính từ",
  "vn": "thoải mái, nhẹ nhõm, nhàn",
  "hv": "khinh tùng",
  "em": "😌",
  "lesson": 3,
  "explain": [
   "Không căng thẳng, không vất vả: 工作很轻松, 心情轻松. Có thể lặp ABAB: 轻松轻松 (thư giãn một chút). Trái nghĩa: 紧张, 辛苦."
  ],
  "usage": "很 / 比较 + 轻松 · 轻松地 + V · 让 + ai + 轻松 · 轻松一下.",
  "collo": [
   "比较轻松",
   "工作轻松",
   "轻松一下",
   "心情轻松"
  ],
  "colloFull": [
   {
    "zh": "比较轻松",
    "py": "Bǐjiào qīngsōng",
    "vn": "khá thoải mái"
   },
   {
    "zh": "工作轻松",
    "py": "Gōngzuò qīngsōng",
    "vn": "công việc nhàn"
   },
   {
    "zh": "轻松一下",
    "py": "Qīngsōng yíxià",
    "vn": "thư giãn một chút"
   },
   {
    "zh": "心情轻松",
    "py": "Xīnqíng qīngsōng",
    "vn": "tâm trạng nhẹ nhõm"
   }
  ],
  "patterns": [
   {
    "s": "轻松轻松 (ABAB)",
    "m": "Thư giãn một chút"
   },
   {
    "s": "轻松 ↔ 紧张 / 辛苦",
    "m": "thoải mái ↔ căng thẳng / vất vả"
   }
  ],
  "ex_zh": "想到什么就去做什么，感觉这样比较轻松。",
  "ex_py": "Xiǎngdào shénme jiù qù zuò shénme, gǎnjué zhèyàng bǐjiào qīngsōng.",
  "ex_vn": "Nghĩ đến gì thì làm nấy, cảm thấy như vậy khá thoải mái.",
  "exList": [
   {
    "zh": "想到什么就去做什么，感觉这样比较轻松。",
    "py": "Xiǎngdào shénme jiù qù zuò shénme, gǎnjué zhèyàng bǐjiào qīngsōng.",
    "vn": "Nghĩ đến gì thì làm nấy, cảm thấy như vậy khá thoải mái."
   },
   {
    "zh": "考完试了，周末好好儿轻松轻松吧。",
    "py": "Kǎowán shì le, zhōumò hǎohāor qīngsōng qīngsōng ba.",
    "vn": "Thi xong rồi, cuối tuần thư giãn cho thoải mái đi."
   }
  ],
  "hanzi": [
   {
    "c": "轻",
    "p": "qīng",
    "type": "左右结构 · Trái-phải (giản thể)",
    "st": 9,
    "ord": "车 (xa) trái → 圣(biến thể) phải",
    "rad": "车 (xa – xe)",
    "mean": "nhẹ",
    "tip": "Bộ xe 车 (xe nhẹ, dễ di chuyển) + 圣(biểu âm) → mở rộng thành NHẸ (trọng lượng).",
    "cf": "经 (jīng – \"trải qua\", bộ 纟\")",
    "w": "轻 / 年轻 / 轻松"
   },
   {
    "c": "松",
    "p": "sōng",
    "type": "左右结构 · Trái-phải (giản thể)",
    "st": 8,
    "ord": "木 (mộc) trái → 公 (công) phải",
    "rad": "木 (mộc – cây)",
    "mean": "lỏng lẻo, thư giãn",
    "tip": "Bộ cây 木 (cây thông, cành lá thưa lỏng) → mở rộng thành LỎNG LẺO, THƯ GIÃN, kết hợp 放(buông) thành 放松 = THẢ LỎNG.",
    "cf": "松 dễ nhầm với 桧 (guì – tên loài cây)",
    "w": "放松 / 轻松 / 松开"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Công việc này tuy lương không cao, nhưng rất nhẹ nhàng.",
    "answer": "这份工作工资虽然不高，但是很轻松。",
    "answerPy": "Zhè fèn gōngzuò gōngzī suīrán bù gāo, dànshì hěn qīngsōng.",
    "note": "虽然……但是…… (HSK 3).",
    "pair": "虽然……，但是……"
   },
   {
    "promptLang": "vi",
    "prompt": "Tôi thấy làm theo kế hoạch không thoải mái bằng làm tùy hứng một chút.",
    "answer": "我觉得按计划做事不如随意一些轻松。",
    "answerPy": "Wǒ juéde àn jìhuà zuòshì bùrú suíyì yìxiē qīngsōng.",
    "note": "Ôn A不如B + Adj (Bài 15 · điểm 4).",
    "pair": "A不如B + 轻松"
   }
  ]
 },
 {
  "n": 24,
  "zh": "标准",
  "py": "biāozhǔn",
  "pos": "Tính từ / Danh từ",
  "vn": "chuẩn; tiêu chuẩn",
  "hv": "tiêu chuẩn",
  "em": "📏",
  "lesson": 3,
  "explain": [
   "Danh từ: tiêu chuẩn, chuẩn mực (标准答案, 招聘的标准). Tính từ: chuẩn (发音很标准 — phát âm rất chuẩn)."
  ],
  "usage": "……的标准 · 标准答案 · 很标准 · 达到标准.",
  "collo": [
   "标准答案",
   "发音标准",
   "招聘标准",
   "达到标准"
  ],
  "colloFull": [
   {
    "zh": "标准答案",
    "py": "Biāozhǔn dá'àn",
    "vn": "đáp án chuẩn"
   },
   {
    "zh": "发音标准",
    "py": "Fāyīn biāozhǔn",
    "vn": "phát âm chuẩn"
   },
   {
    "zh": "招聘标准",
    "py": "Zhāopìn biāozhǔn",
    "vn": "tiêu chuẩn tuyển dụng"
   },
   {
    "zh": "达到标准",
    "py": "Dádào biāozhǔn",
    "vn": "đạt tiêu chuẩn"
   }
  ],
  "patterns": [
   {
    "s": "……的标准是……",
    "m": "Tiêu chuẩn của … là …"
   },
   {
    "s": "V + 得 + 很标准",
    "m": "Làm rất chuẩn"
   }
  ],
  "ex_zh": "其实，事前做计划是好是坏没有标准答案。",
  "ex_py": "Qíshí, shì qián zuò jìhuà shì hǎo shì huài méiyǒu biāozhǔn dá'àn.",
  "ex_vn": "Thật ra, lập kế hoạch trước là tốt hay xấu không có đáp án chuẩn.",
  "exList": [
   {
    "zh": "其实，事前做计划是好是坏没有标准答案。",
    "py": "Qíshí, shì qián zuò jìhuà shì hǎo shì huài méiyǒu biāozhǔn dá'àn.",
    "vn": "Thật ra, lập kế hoạch trước là tốt hay xấu không có đáp án chuẩn."
   },
   {
    "zh": "她的普通话说得非常标准。",
    "py": "Tā de pǔtōnghuà shuō de fēicháng biāozhǔn.",
    "vn": "Tiếng phổ thông của cô ấy nói rất chuẩn."
   }
  ],
  "hanzi": [
   {
    "c": "标",
    "p": "biāo",
    "type": "形声字 · Chữ hình thanh",
    "st": 9,
    "ord": "木 → 示 (hai nét ngang, nét sổ móc, phẩy, chấm)",
    "rad": "木 (mộc – cây)",
    "mean": "ngọn cây; cột mốc, dấu hiệu",
    "tip": "木 (cây) + 示 (chỉ âm; phồn thể 標): ngọn cây cao làm mốc để nhìn → cột mốc, dấu hiệu. 目标 = cái mốc mà mắt 目 nhắm tới → mục tiêu.",
    "cf": "票 piào (门票 – HSK2 Bài 15) — cũng có 示 nhưng đặt ở dưới",
    "w": "目标 / 完成目标"
   },
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
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Tiêu chuẩn tuyển dụng của công ty là có ít nhất ba năm kinh nghiệm làm việc.",
    "answer": "公司招聘的标准是至少有三年的工作经验。",
    "answerPy": "Gōngsī zhāopìn de biāozhǔn shì zhìshǎo yǒu sān nián de gōngzuò jīngyàn.",
    "note": "Ôn 至少 (Bài 5 · điểm 1).",
    "pair": "……的标准是……"
   },
   {
    "promptLang": "vi",
    "prompt": "Tốt hay xấu không có đáp án chuẩn, then chốt là có phù hợp với mình không.",
    "answer": "好不好没有标准答案，关键是适不适合自己。",
    "answerPy": "Hǎo bu hǎo méiyǒu biāozhǔn dá'àn, guānjiàn shì shì bu shìhé zìjǐ.",
    "note": "关键是 (bài này).",
    "pair": "没有标准答案，关键是……"
   }
  ]
 },
 {
  "n": 25,
  "zh": "严格",
  "py": "yángé",
  "pos": "Tính từ / Động từ",
  "vn": "nghiêm khắc, nghiêm ngặt, chặt chẽ",
  "hv": "nghiêm cách",
  "em": "📐",
  "lesson": 3,
  "explain": [
   "Tính từ: nghiêm, chặt chẽ, tuân thủ đúng quy định: 严格的老师, 要求很严格; làm trạng ngữ: 严格按照……. Động từ: 严格要求自己 (yêu cầu bản thân nghiêm ngặt)."
  ],
  "usage": "对 + ai + 很严格 · 严格 (地) 按照……做 · 严格要求.",
  "collo": [
   "严格按照",
   "要求严格",
   "严格要求自己",
   "严格的老师"
  ],
  "colloFull": [
   {
    "zh": "严格按照",
    "py": "Yángé ànzhào",
    "vn": "nghiêm ngặt theo"
   },
   {
    "zh": "要求严格",
    "py": "Yāoqiú yángé",
    "vn": "yêu cầu nghiêm"
   },
   {
    "zh": "严格要求自己",
    "py": "Yángé yāoqiú zìjǐ",
    "vn": "nghiêm khắc với bản thân"
   },
   {
    "zh": "严格的老师",
    "py": "Yángé de lǎoshī",
    "vn": "người thầy nghiêm khắc"
   }
  ],
  "patterns": [
   {
    "s": "对 + ai + (要求) + 很严格",
    "m": "Nghiêm khắc với ai"
   },
   {
    "s": "严格 + 按照 / 要求……",
    "m": "Trạng ngữ / động từ"
   }
  ],
  "ex_zh": "严格按照计划做事，常常能取得不错的效果。",
  "ex_py": "Yángé ànzhào jìhuà zuòshì, chángcháng néng qǔdé búcuò de xiàoguǒ.",
  "ex_vn": "Làm việc nghiêm ngặt theo kế hoạch thường đạt được hiệu quả khá tốt.",
  "exList": [
   {
    "zh": "严格按照计划做事，常常能取得不错的效果。",
    "py": "Yángé ànzhào jìhuà zuòshì, chángcháng néng qǔdé búcuò de xiàoguǒ.",
    "vn": "Làm việc nghiêm ngặt theo kế hoạch thường đạt được hiệu quả khá tốt."
   },
   {
    "zh": "我们老师对学生要求很严格。",
    "py": "Wǒmen lǎoshī duì xuésheng yāoqiú hěn yángé.",
    "vn": "Thầy giáo chúng tôi yêu cầu học sinh rất nghiêm."
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
    "prompt": "Mẹ tôi rất nghiêm khắc với tôi, ngày nào cũng bắt tôi làm xong bài tập mới được chơi.",
    "answer": "我妈妈对我很严格，每天都让我做完作业才能玩儿。",
    "answerPy": "Wǒ māma duì wǒ hěn yángé, měitiān dōu ràng wǒ zuòwán zuòyè cáinéng wánr.",
    "note": "对……很严格; câu kiêm ngữ 让.",
    "pair": "对……很严格"
   },
   {
    "promptLang": "vi",
    "prompt": "Dù gặp khó khăn gì, anh ấy cũng làm việc nghiêm ngặt theo kế hoạch.",
    "answer": "无论遇到什么困难，他都严格按照计划做事。",
    "answerPy": "Wúlùn yùdào shénme kùnnan, tā dōu yángé ànzhào jìhuà zuòshì.",
    "note": "Ôn 无论……都…… (Bài 12 · điểm 3).",
    "pair": "无论……，都……"
   }
  ]
 },
 {
  "n": 26,
  "zh": "取得",
  "py": "qǔdé",
  "pos": "Động từ",
  "vn": "đạt được, giành được",
  "hv": "thủ đắc",
  "em": "🏆",
  "lesson": 3,
  "explain": [
   "Đạt được kết quả tốt sau khi cố gắng: 取得成绩, 取得效果, 取得成功. Tân ngữ thường là danh từ trừu tượng mang nghĩa tốt."
  ],
  "usage": "取得 + 成绩 / 效果 / 成功 / 进步.",
  "collo": [
   "取得成绩",
   "取得效果",
   "取得成功",
   "取得进步"
  ],
  "colloFull": [
   {
    "zh": "取得成绩",
    "py": "Qǔdé chéngjì",
    "vn": "đạt thành tích"
   },
   {
    "zh": "取得效果",
    "py": "Qǔdé xiàoguǒ",
    "vn": "đạt hiệu quả"
   },
   {
    "zh": "取得成功",
    "py": "Qǔdé chénggōng",
    "vn": "giành thành công"
   },
   {
    "zh": "取得进步",
    "py": "Qǔdé jìnbù",
    "vn": "có tiến bộ"
   }
  ],
  "patterns": [
   {
    "s": "取得 + 了 + (Adj) + 成绩 / 效果",
    "m": "Đạt được kết quả …"
   },
   {
    "s": "取得 vs 获得",
    "m": "获得 dùng rộng hơn (获得帮助, 获得奖); 取得 thiên về thành tích, kết quả"
   }
  ],
  "ex_zh": "严格按照计划做事，常常能取得不错的效果。",
  "ex_py": "Yángé ànzhào jìhuà zuòshì, chángcháng néng qǔdé búcuò de xiàoguǒ.",
  "ex_vn": "Làm việc nghiêm ngặt theo kế hoạch thường đạt được hiệu quả khá tốt.",
  "exList": [
   {
    "zh": "严格按照计划做事，常常能取得不错的效果。",
    "py": "Yángé ànzhào jìhuà zuòshì, chángcháng néng qǔdé búcuò de xiàoguǒ.",
    "vn": "Làm việc nghiêm ngặt theo kế hoạch thường đạt được hiệu quả khá tốt."
   },
   {
    "zh": "经过一年的努力，他终于取得了好成绩。",
    "py": "Jīngguò yì nián de nǔlì, tā zhōngyú qǔdé le hǎo chéngjì.",
    "vn": "Trải qua một năm nỗ lực, cuối cùng anh ấy đã đạt được thành tích tốt."
   }
  ],
  "hanzi": [
   {
    "c": "取",
    "p": "qǔ",
    "type": "左右结构 · Trái-phải",
    "st": 8,
    "ord": "耳 (nhĩ) trái → 又 phải",
    "rad": "又 (hựu – tay phải)",
    "mean": "lấy",
    "tip": "Chữ tượng hình bàn tay 又 cầm lấy TAI 耳 (tục cổ đại cắt tai chiến lợi phẩm) → nghĩa gốc là LẤY, mở rộng thành ĐẠT ĐƯỢC.",
    "cf": "职 (zhí – \"chức vụ\", bộ 耳\")",
    "w": "取 / 取得 / 获取"
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
    "prompt": "Chỉ cần kiên trì, bạn nhất định sẽ đạt thành tích tốt.",
    "answer": "只要坚持下去，你一定能取得好成绩。",
    "answerPy": "Zhǐyào jiānchí xiàqu, nǐ yídìng néng qǔdé hǎo chéngjì.",
    "note": "只要……一定…… (HSK 3).",
    "pair": "只要……，一定能取得……"
   },
   {
    "promptLang": "vi",
    "prompt": "Chúng tôi đã điều chỉnh kế hoạch để đạt được hiệu quả tốt hơn.",
    "answer": "我们为了取得更好的效果而调整了计划。",
    "answerPy": "Wǒmen wèile qǔdé gèng hǎo de xiàoguǒ ér tiáozhěng le jìhuà.",
    "note": "Ôn 为了……而…… (Bài 12 · điểm 4).",
    "pair": "为了……而……"
   }
  ]
 },
 {
  "n": 27,
  "zh": "说不定",
  "py": "shuōbudìng",
  "pos": "Phó từ",
  "vn": "không chừng, biết đâu, có khi",
  "hv": "thuyết bất định",
  "em": "🤔",
  "lesson": 3,
  "explain": [
   "Phỏng đoán một khả năng có thể xảy ra (Bài 16 · điểm 3): “không chừng, biết đâu”. 不 đọc nhẹ: shuōbudìng. Còn làm vị ngữ: ……还说不定 (còn chưa chắc)."
  ],
  "usage": "说不定 + 会 / 就 / 已经…… · 说不定 + Sub + V · ……还说不定.",
  "collo": [
   "说不定会下雨",
   "说不定就成功了",
   "还说不定",
   "说不定他已经走了"
  ],
  "colloFull": [
   {
    "zh": "说不定会下雨",
    "py": "Shuōbudìng huì xiàyǔ",
    "vn": "không chừng sẽ mưa"
   },
   {
    "zh": "说不定就成功了",
    "py": "Shuōbudìng jiù chénggōng le",
    "vn": "biết đâu lại thành công"
   },
   {
    "zh": "还说不定",
    "py": "Hái shuōbudìng",
    "vn": "còn chưa chắc"
   },
   {
    "zh": "说不定他已经走了",
    "py": "Shuōbudìng tā yǐjīng zǒu le",
    "vn": "có khi anh ấy đi rồi"
   }
  ],
  "patterns": [
   {
    "s": "说不定 + (会 / 就 / 已经) + V",
    "m": "Phỏng đoán"
   },
   {
    "s": "……还说不定",
    "m": "Còn chưa chắc (làm vị ngữ)"
   }
  ],
  "ex_zh": "而不做计划，说不定也会带来新的发现。",
  "ex_py": "Ér bú zuò jìhuà, shuōbudìng yě huì dàilái xīn de fāxiàn.",
  "ex_vn": "Còn không lập kế hoạch, không chừng cũng sẽ mang lại những phát hiện mới.",
  "exList": [
   {
    "zh": "而不做计划，说不定也会带来新的发现。",
    "py": "Ér bú zuò jìhuà, shuōbudìng yě huì dàilái xīn de fāxiàn.",
    "vn": "Còn không lập kế hoạch, không chừng cũng sẽ mang lại những phát hiện mới."
   },
   {
    "zh": "带上伞吧，说不定下午会下雨。",
    "py": "Dàishàng sǎn ba, shuōbudìng xiàwǔ huì xiàyǔ.",
    "vn": "Mang ô theo đi, không chừng chiều nay sẽ mưa."
   }
  ],
  "hanzi": [
   {
    "c": "说",
    "p": "shuō",
    "type": "左右结构 · Trái-phải (giản thể)",
    "st": 9,
    "ord": "讠 (ngôn) trái → 兑 (đoài) phải",
    "rad": "讠 (ngôn – lời nói)",
    "mean": "nói, kể",
    "tip": "Bộ lời nói 讠 (kể chuyện) + 兑(biểu âm) → KỂ LẠI câu chuyện, kết hợp 小(nhỏ, vụn vặt) thành 小说 = TIỂU THUYẾT (chuyện kể).",
    "cf": "脱 (tuō – \"cởi bỏ\", bộ 月\")",
    "w": "小说 / 说话 / 小说家"
   },
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
    "c": "定",
    "p": "dìng",
    "type": "形声字 · Chữ hình thanh",
    "st": 8,
    "ord": "宀 → 正 (biến thể: nét cuối là mác)",
    "rad": "宀 (miên – mái nhà)",
    "mean": "định, ổn định",
    "tip": "宀 (mái nhà) + 正 (ngay ngắn, biến thể): nhà cửa ngay ngắn, yên ổn → định. 一定 = đã định rồi → chắc chắn.",
    "cf": "走 zǒu — phần dưới giống nhưng không có mái 宀",
    "w": "一定 / 不一定"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Anh ấy không nghe điện thoại, không chừng đang họp.",
    "answer": "他不接电话，说不定在开会。",
    "answerPy": "Tā bù jiē diànhuà, shuōbudìng zài kāihuì.",
    "note": "说不定 + V.",
    "pair": "说不定……"
   },
   {
    "promptLang": "vi",
    "prompt": "Lần này không thành công cũng không sao, lần sau biết đâu sẽ thành công.",
    "answer": "就是这次没成功也没关系，下次说不定就成功了。",
    "answerPy": "Jiùshì zhè cì méi chénggōng yě méiguānxì, xià cì shuōbudìng jiù chénggōng le.",
    "note": "Ôn 就是……也…… (Bài 11 · điểm 2).",
    "pair": "说不定就……了"
   }
  ]
 },
 {
  "n": 28,
  "zh": "灵活",
  "py": "línghuó",
  "pos": "Tính từ",
  "vn": "linh hoạt",
  "hv": "linh hoạt",
  "em": "🤸",
  "lesson": 3,
  "explain": [
   "Biết thay đổi theo tình hình, không cứng nhắc: 灵活调整, 时间很灵活. Hán Việt “linh hoạt” trùng nghĩa."
  ],
  "usage": "灵活 + V · 很灵活 · 灵活地 + V · 灵活的方法.",
  "collo": [
   "灵活调整",
   "时间灵活",
   "灵活的方法",
   "头脑灵活"
  ],
  "colloFull": [
   {
    "zh": "灵活调整",
    "py": "Línghuó tiáozhěng",
    "vn": "điều chỉnh linh hoạt"
   },
   {
    "zh": "时间灵活",
    "py": "Shíjiān línghuó",
    "vn": "thời gian linh hoạt"
   },
   {
    "zh": "灵活的方法",
    "py": "Línghuó de fāngfǎ",
    "vn": "cách làm linh hoạt"
   },
   {
    "zh": "头脑灵活",
    "py": "Tóunǎo línghuó",
    "vn": "đầu óc nhanh nhạy"
   }
  ],
  "patterns": [
   {
    "s": "根据情况 + 灵活 + V",
    "m": "Linh hoạt theo tình hình"
   }
  ],
  "ex_zh": "只要既能按时完成任务，又能根据情况灵活调整，就是适合自己的方式。",
  "ex_py": "Zhǐyào jì néng ànshí wánchéng rènwu, yòu néng gēnjù qíngkuàng línghuó tiáozhěng, jiùshì shìhé zìjǐ de fāngshì.",
  "ex_vn": "Chỉ cần vừa hoàn thành nhiệm vụ đúng hạn, vừa điều chỉnh linh hoạt theo tình hình, thì đó là cách phù hợp với mình.",
  "exList": [
   {
    "zh": "只要既能按时完成任务，又能根据情况灵活调整，就是适合自己的方式。",
    "py": "Zhǐyào jì néng ànshí wánchéng rènwu, yòu néng gēnjù qíngkuàng línghuó tiáozhěng, jiùshì shìhé zìjǐ de fāngshì.",
    "vn": "Chỉ cần vừa hoàn thành nhiệm vụ đúng hạn, vừa điều chỉnh linh hoạt theo tình hình, thì đó là cách phù hợp với mình."
   },
   {
    "zh": "这份工作的时间很灵活，我可以自己安排。",
    "py": "Zhè fèn gōngzuò de shíjiān hěn línghuó, wǒ kěyǐ zìjǐ ānpái.",
    "vn": "Thời gian làm công việc này rất linh hoạt, tôi có thể tự sắp xếp."
   }
  ],
  "hanzi": [
   {
    "c": "灵",
    "p": "líng",
    "type": "会意字 · Chữ hội ý",
    "st": 7,
    "ord": "彐 → 火",
    "rad": "火 (hỏa – lửa)",
    "mean": "nhanh nhạy, linh hoạt; linh hồn",
    "tip": "Bàn tay (彐) ở trên + lửa (火) ở dưới: tay cầm ngọn lửa sáng, nhảy nhót không ngừng → nhanh nhạy, linh hoạt; 灵活 = linh hoạt, 灵感 = cảm hứng.",
    "cf": "录 lù (ghi) — dưới là 水 biến thể; 炎 yán (nóng) — hai chữ 火",
    "w": "灵活 / 灵感 / 心灵"
   },
   {
    "c": "活",
    "p": "huó",
    "type": "左右结构 · Trái-phải",
    "st": 9,
    "ord": "氵 (thủy) trái → 舌 (thiệt) phải",
    "rad": "氵 (thủy – nước)",
    "mean": "sống, hoạt động",
    "tip": "Bộ nước 氵 (nguồn sống) + 舌 (lưỡi, biểu âm) → có NƯỚC để duy trì sự SỐNG, mở rộng thành SINH HOẠT, CUỘC SỐNG.",
    "cf": "话 (huà – \"lời nói\", cũng có 舌\" nhưng bộ 讠 khác)",
    "w": "生活 / 活动 / 干活"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Gặp thay đổi, chúng ta phải điều chỉnh kế hoạch linh hoạt.",
    "answer": "遇到变化，我们要灵活地调整计划。",
    "answerPy": "Yùdào biànhuà, wǒmen yào línghuó de tiáozhěng jìhuà.",
    "note": "灵活地 + V.",
    "pair": "灵活地调整……"
   },
   {
    "promptLang": "vi",
    "prompt": "Anh ấy vừa có thể hoàn thành nhiệm vụ đúng hạn, vừa có thể giải quyết vấn đề linh hoạt.",
    "answer": "他既能按时完成任务，又能灵活地解决问题。",
    "answerPy": "Tā jì néng ànshí wánchéng rènwu, yòu néng línghuó de jiějué wèntí.",
    "note": "Ôn 既……又…… (Bài 4 · điểm 3).",
    "pair": "既……，又……"
   }
  ]
 },
 {
  "n": 29,
  "zh": "一切",
  "py": "yíqiè",
  "pos": "Đại từ",
  "vn": "tất cả, mọi thứ, hết thảy",
  "hv": "nhất thiết",
  "em": "🌐",
  "lesson": 4,
  "explain": [
   "Toàn bộ, mọi thứ: 准备好了一切, 一切都很顺利. ⚠ Bẫy Hán Việt: “nhất thiết” trong tiếng Việt là “bắt buộc”, nhưng 一切 nghĩa là “tất cả”. 一 đọc yí (biến điệu trước thanh 4)."
  ],
  "usage": "一切 + 都…… · 一切 + N (一切问题) · V + 一切.",
  "collo": [
   "一切顺利",
   "准备好一切",
   "一切都很好",
   "一切问题"
  ],
  "colloFull": [
   {
    "zh": "一切顺利",
    "py": "Yíqiè shùnlì",
    "vn": "mọi việc thuận lợi"
   },
   {
    "zh": "准备好一切",
    "py": "Zhǔnbèi hǎo yíqiè",
    "vn": "chuẩn bị xong mọi thứ"
   },
   {
    "zh": "一切都很好",
    "py": "Yíqiè dōu hěn hǎo",
    "vn": "mọi thứ đều tốt"
   },
   {
    "zh": "一切问题",
    "py": "Yíqiè wèntí",
    "vn": "mọi vấn đề"
   }
  ],
  "patterns": [
   {
    "s": "一切 + 都 + ……",
    "m": "Tất cả đều …"
   },
   {
    "s": "祝你一切顺利！",
    "m": "Chúc bạn mọi điều thuận lợi!"
   }
  ],
  "ex_zh": "有时候，你准备好了一切，却突然出现了新情况。",
  "ex_py": "Yǒushíhou, nǐ zhǔnbèi hǎo le yíqiè, què tūrán chūxiàn le xīn qíngkuàng.",
  "ex_vn": "Có lúc bạn đã chuẩn bị xong mọi thứ, nhưng lại đột nhiên xuất hiện tình huống mới.",
  "exList": [
   {
    "zh": "有时候，你准备好了一切，却突然出现了新情况。",
    "py": "Yǒushíhou, nǐ zhǔnbèi hǎo le yíqiè, què tūrán chūxiàn le xīn qíngkuàng.",
    "vn": "Có lúc bạn đã chuẩn bị xong mọi thứ, nhưng lại đột nhiên xuất hiện tình huống mới."
   },
   {
    "zh": "别担心，一切都会好起来的。",
    "py": "Bié dānxīn, yíqiè dōu huì hǎoqǐlai de.",
    "vn": "Đừng lo, mọi thứ rồi sẽ tốt đẹp thôi."
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
    "c": "切",
    "p": "qiè",
    "type": "左右结构 · Trái-phải",
    "st": 4,
    "ord": "七 trái → 刀 (đao) phải",
    "rad": "刀 (đao – dao)",
    "mean": "cắt, toàn bộ",
    "tip": "Bộ dao 刀 (cắt) + 七(biểu âm) → CẮT ra từng phần, kết hợp 一(một, toàn bộ) thành 一切 = TẤT CẢ (mọi phần).",
    "cf": "切 khi đọc \"qiē\" nghĩa là hành động cắt (切菜)",
    "w": "一切 / 亲切 / 迫切"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Lâu rồi không gặp, dạo này mọi việc đều thuận lợi chứ?",
    "answer": "好久不见，最近一切都顺利吗？",
    "answerPy": "Hǎojiǔ bújiàn, zuìjìn yíqiè dōu shùnlì ma?",
    "note": "一切都…….",
    "pair": "一切都……"
   },
   {
    "promptLang": "vi",
    "prompt": "Mặc dù đã chuẩn bị xong mọi thứ, kế hoạch vẫn bị thay đổi.",
    "answer": "尽管准备好了一切，计划还是变了。",
    "answerPy": "Jǐnguǎn zhǔnbèi hǎo le yíqiè, jìhuà háishi biàn le.",
    "note": "Ôn 尽管 (Bài 9 · điểm 2).",
    "pair": "尽管……，还是……"
   }
  ]
 },
 {
  "n": 30,
  "zh": "却",
  "py": "què",
  "pos": "Phó từ",
  "vn": "lại, nhưng lại, mà lại",
  "hv": "khước",
  "em": "↩️",
  "lesson": 4,
  "explain": [
   "Phó từ chuyển ý: điều nói ở vế sau TRÁI với điều mong đợi ở vế trước (Bài 16 · điểm 4). Đứng SAU chủ ngữ, trước vị ngữ — khác 但是 / 可是 đứng đầu vế."
  ],
  "usage": "……，(Sub +) 却 + V/Adj · 虽然……，Sub + 却…….",
  "collo": [
   "却没来",
   "却很高兴",
   "却完全不同",
   "性格却……"
  ],
  "colloFull": [
   {
    "zh": "却没来",
    "py": "Què méi lái",
    "vn": "lại không đến"
   },
   {
    "zh": "却很高兴",
    "py": "Què hěn gāoxìng",
    "vn": "lại rất vui"
   },
   {
    "zh": "却完全不同",
    "py": "Què wánquán bùtóng",
    "vn": "lại hoàn toàn khác"
   },
   {
    "zh": "性格却……",
    "py": "Xìnggé què……",
    "vn": "tính cách lại …"
   }
  ],
  "patterns": [
   {
    "s": "Sub + 却 + V",
    "m": "却 đứng sau chủ ngữ (✗ 却他……)"
   },
   {
    "s": "却 vs 但是",
    "m": "但是 là liên từ đầu vế; 却 là phó từ trong vế, giọng nhẹ hơn"
   }
  ],
  "ex_zh": "你准备好了一切，却突然出现了新情况。",
  "ex_py": "Nǐ zhǔnbèi hǎo le yíqiè, què tūrán chūxiàn le xīn qíngkuàng.",
  "ex_vn": "Bạn đã chuẩn bị xong mọi thứ, nhưng lại đột nhiên xuất hiện tình huống mới.",
  "exList": [
   {
    "zh": "你准备好了一切，却突然出现了新情况。",
    "py": "Nǐ zhǔnbèi hǎo le yíqiè, què tūrán chūxiàn le xīn qíngkuàng.",
    "vn": "Bạn đã chuẩn bị xong mọi thứ, nhưng lại đột nhiên xuất hiện tình huống mới."
   },
   {
    "zh": "我叫了他好几次，他却没听见。",
    "py": "Wǒ jiào le tā hǎojǐ cì, tā què méi tīngjiàn.",
    "vn": "Tôi gọi anh ấy mấy lần liền, anh ấy lại không nghe thấy."
   }
  ],
  "hanzi": [
   {
    "c": "却",
    "p": "què",
    "type": "左右结构 · Trái-phải",
    "st": 7,
    "ord": "去 (khứ) trái → 卩 (tiết) phải",
    "rad": "卩 (tiết – quỳ gối)",
    "mean": "lùi lại, nhưng",
    "tip": "Bộ 去(rời đi) + 卩(người) → người LÙI LẠI so với hướng đi ban đầu, mở rộng thành ý nghĩa CHUYỂN Ý, TƯƠNG PHẢN NHẸ.",
    "cf": "却 dễ nhầm với 脚 (jiǎo – \"chân\", thêm bộ 月\")",
    "w": "却 / 但却 / 忘却"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Bên ngoài rất lạnh, trong phòng lại rất ấm.",
    "answer": "外面很冷，房间里却很暖和。",
    "answerPy": "Wàimian hěn lěng, fángjiān lǐ què hěn nuǎnhuo.",
    "note": "却 sau chủ ngữ 房间里.",
    "pair": "Sub + 却……"
   },
   {
    "promptLang": "vi",
    "prompt": "Tuy anh ấy là người miền Bắc, lại rất thích ăn đồ ngọt.",
    "answer": "虽然他是北方人，却很喜欢吃甜的。",
    "answerPy": "Suīrán tā shì běifāngrén, què hěn xǐhuan chī tián de.",
    "note": "虽然……，却…… (HSK 3 + điểm 4).",
    "pair": "虽然……，却……"
   }
  ]
 },
 {
  "n": 31,
  "zh": "不得不",
  "py": "bùdébù",
  "pos": "Phó từ",
  "vn": "không thể không, buộc phải",
  "hv": "bất đắc bất",
  "em": "😣",
  "lesson": 4,
  "explain": [
   "Hai lần phủ định = khẳng định mạnh: buộc phải làm, không còn lựa chọn (ôn 双重否定 – Bài 12 · điểm 2). Mạnh hơn 只好."
  ],
  "usage": "Sub + 不得不 + V · 让 / 使 + ai + 不得不 + V.",
  "collo": [
   "不得不改变计划",
   "不得不放弃",
   "不得不承认",
   "不得不加班"
  ],
  "colloFull": [
   {
    "zh": "不得不改变计划",
    "py": "Bùdébù gǎibiàn jìhuà",
    "vn": "buộc phải thay đổi kế hoạch"
   },
   {
    "zh": "不得不放弃",
    "py": "Bùdébù fàngqì",
    "vn": "buộc phải bỏ cuộc"
   },
   {
    "zh": "不得不承认",
    "py": "Bùdébù chéngrèn",
    "vn": "không thể không thừa nhận"
   },
   {
    "zh": "不得不加班",
    "py": "Bùdébù jiābān",
    "vn": "buộc phải tăng ca"
   }
  ],
  "patterns": [
   {
    "s": "让 / 使 + ai + 不得不 + V",
    "m": "Khiến ai buộc phải …"
   },
   {
    "s": "不得不 vs 只好",
    "m": "不得不 nhấn mạnh sự ép buộc; 只好 = đành"
   }
  ],
  "ex_zh": "却突然出现了新情况，让你不得不改变计划。",
  "ex_py": "Què tūrán chūxiàn le xīn qíngkuàng, ràng nǐ bùdébù gǎibiàn jìhuà.",
  "ex_vn": "…nhưng lại đột nhiên xuất hiện tình huống mới, khiến bạn buộc phải thay đổi kế hoạch.",
  "exList": [
   {
    "zh": "却突然出现了新情况，让你不得不改变计划。",
    "py": "Què tūrán chūxiàn le xīn qíngkuàng, ràng nǐ bùdébù gǎibiàn jìhuà.",
    "vn": "…nhưng lại đột nhiên xuất hiện tình huống mới, khiến bạn buộc phải thay đổi kế hoạch."
   },
   {
    "zh": "因为生病，他不得不在家休息了一个星期。",
    "py": "Yīnwèi shēngbìng, tā bùdébù zài jiā xiūxi le yí gè xīngqī.",
    "vn": "Vì ốm, anh ấy buộc phải nghỉ ở nhà một tuần."
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
   },
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
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Lô hàng này ngày mai phải gửi cho khách hàng, hôm nay chúng tôi buộc phải tăng ca.",
    "answer": "这批货明天必须发给客户，我们今天不得不加班。",
    "answerPy": "Zhè pī huò míngtiān bìxū fāgěi kèhù, wǒmen jīntiān bùdébù jiābān.",
    "note": "不得不 + V.",
    "pair": "不得不 + V"
   },
   {
    "promptLang": "vi",
    "prompt": "Tin này khiến anh ấy buộc phải thay đổi kế hoạch.",
    "answer": "这个消息使他不得不改变了计划。",
    "answerPy": "Zhège xiāoxi shǐ tā bùdébù gǎibiàn le jìhuà.",
    "note": "Ôn câu kiêm ngữ 使 (Bài 7 · điểm 4).",
    "pair": "使 + ai + 不得不……"
   }
  ]
 },
 {
  "n": 32,
  "zh": "约",
  "py": "yuē",
  "pos": "Động từ / Phó từ",
  "vn": "hẹn; khoảng chừng",
  "hv": "ước",
  "em": "🤝",
  "lesson": 4,
  "explain": [
   "Động từ: hẹn (gặp), rủ: 约朋友, 约好了, 约他喝咖啡. Phó từ (văn viết): khoảng (= 大约, Bài 13 · điểm 3): 约三十人."
  ],
  "usage": "约 + ai + V · 约好 + (thời gian / việc) · 约个时间 · 约 + số lượng.",
  "collo": [
   "约朋友",
   "约好了",
   "约个时间",
   "约三百人"
  ],
  "colloFull": [
   {
    "zh": "约朋友",
    "py": "Yuē péngyou",
    "vn": "hẹn bạn"
   },
   {
    "zh": "约好了",
    "py": "Yuēhǎo le",
    "vn": "đã hẹn xong"
   },
   {
    "zh": "约个时间",
    "py": "Yuē gè shíjiān",
    "vn": "hẹn một thời gian"
   },
   {
    "zh": "约三百人",
    "py": "Yuē sānbǎi rén",
    "vn": "khoảng ba trăm người"
   }
  ],
  "patterns": [
   {
    "s": "约 + ai + V",
    "m": "Hẹn ai làm gì"
   },
   {
    "s": "约 (phó từ) = 大约",
    "m": "Văn viết: khoảng"
   }
  ],
  "ex_zh": "约好见朋友，可能因为天气不好而推迟。",
  "ex_py": "Yuēhǎo jiàn péngyou, kěnéng yīnwèi tiānqì bù hǎo ér tuīchí.",
  "ex_vn": "Hẹn gặp bạn rồi, có thể vì thời tiết xấu mà phải hoãn.",
  "exList": [
   {
    "zh": "约好见朋友，可能因为天气不好而推迟。",
    "py": "Yuēhǎo jiàn péngyou, kěnéng yīnwèi tiānqì bù hǎo ér tuīchí.",
    "vn": "Hẹn gặp bạn rồi, có thể vì thời tiết xấu mà phải hoãn."
   },
   {
    "zh": "我约了几个朋友周末一起去爬山。",
    "py": "Wǒ yuē le jǐ gè péngyou zhōumò yìqǐ qù páshān.",
    "vn": "Tôi đã hẹn mấy người bạn cuối tuần cùng đi leo núi."
   }
  ],
  "hanzi": [
   {
    "c": "约",
    "p": "yuē",
    "type": "左右结构 · Trái-phải (giản thể)",
    "st": 6,
    "ord": "纟 (mịch) trái → 勺 phải",
    "rad": "纟 (mịch – sợi tơ)",
    "mean": "buộc, hạn chế",
    "tip": "Bộ sợi 纟 + 勺 → BUỘC LẠI, HẠN CHẾ, kết hợp 节(tiết) thành 节约 = TIẾT KIỆM.",
    "cf": "勺 (sháo – \"muôi\", phần bên phải)",
    "w": "节约 / 约会 / 大约"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Chúng ta hẹn một thời gian rồi cùng nhau bàn bạc nhé.",
    "answer": "咱们约个时间一起商量一下吧。",
    "answerPy": "Zánmen yuē gè shíjiān yìqǐ shāngliang yíxià ba.",
    "note": "约个时间.",
    "pair": "约个时间……"
   },
   {
    "promptLang": "vi",
    "prompt": "Hội trường có khoảng hai trăm người, không đông bằng năm ngoái.",
    "answer": "会场里约有两百人，没有去年多。",
    "answerPy": "Huìchǎng lǐ yuē yǒu liǎngbǎi rén, méiyǒu qùnián duō.",
    "note": "约 = 大约 (Bài 13 · điểm 3); 没有 + B + Adj (HSK 3).",
    "pair": "约有 + số"
   }
  ]
 },
 {
  "n": 33,
  "zh": "不便",
  "py": "búbiàn",
  "pos": "Tính từ / Động từ",
  "vn": "bất tiện; không tiện (làm gì)",
  "hv": "bất tiện",
  "em": "🚧",
  "lesson": 4,
  "explain": [
   "Tính từ: không thuận tiện, gây khó khăn: 带来不便, 交通不便. Động từ: không tiện (làm gì): 不便说. Văn viết hơn 不方便. 便 ở đây đọc biàn (không phải pián như 便宜)."
  ],
  "usage": "给 + ai + 带来不便 · 交通不便 · 不便 + V.",
  "collo": [
   "带来不便",
   "交通不便",
   "行动不便",
   "不便说"
  ],
  "colloFull": [
   {
    "zh": "带来不便",
    "py": "Dàilái búbiàn",
    "vn": "gây bất tiện"
   },
   {
    "zh": "交通不便",
    "py": "Jiāotōng búbiàn",
    "vn": "giao thông bất tiện"
   },
   {
    "zh": "行动不便",
    "py": "Xíngdòng búbiàn",
    "vn": "đi lại khó khăn"
   },
   {
    "zh": "不便说",
    "py": "Búbiàn shuō",
    "vn": "không tiện nói"
   }
  ],
  "patterns": [
   {
    "s": "给 + ai + 带来不便",
    "m": "Gây bất tiện cho ai (câu xin lỗi trang trọng)"
   }
  ],
  "ex_zh": "虽然变化经常打乱计划，给我们带来不便，甚至让人感到失望……",
  "ex_py": "Suīrán biànhuà jīngcháng dǎluàn jìhuà, gěi wǒmen dàilái búbiàn, shènzhì ràng rén gǎndào shīwàng……",
  "ex_vn": "Tuy thay đổi thường làm rối kế hoạch, mang lại cho chúng ta sự bất tiện, thậm chí khiến người ta thất vọng…",
  "exList": [
   {
    "zh": "虽然变化经常打乱计划，给我们带来不便，甚至让人感到失望……",
    "py": "Suīrán biànhuà jīngcháng dǎluàn jìhuà, gěi wǒmen dàilái búbiàn, shènzhì ràng rén gǎndào shīwàng……",
    "vn": "Tuy thay đổi thường làm rối kế hoạch, mang lại cho chúng ta sự bất tiện, thậm chí khiến người ta thất vọng…"
   },
   {
    "zh": "这里交通不便，去市中心要两个多小时。",
    "py": "Zhèli jiāotōng búbiàn, qù shì zhōngxīn yào liǎng gè duō xiǎoshí.",
    "vn": "Ở đây đi lại bất tiện, đến trung tâm thành phố mất hơn hai tiếng."
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
    "c": "便",
    "p": "biàn",
    "type": "会意字 · Chữ hội ý",
    "st": 9,
    "ord": "亻 → 更",
    "rad": "亻 (nhân đứng – người)",
    "mean": "tiện",
    "tip": "亻 (người) + 更 (đổi): người biết thay đổi cho hợp → tiện. Đọc biàn trong 方便; đọc pián trong 便宜 (HSK1 Bài 10).",
    "cf": "更 gèng (càng, HSK2 Bài 4) — không có 亻",
    "w": "方便 / 便宜"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Xin lỗi, đã gây bất tiện cho mọi người.",
    "answer": "对不起，给大家带来了不便。",
    "answerPy": "Duìbuqǐ, gěi dàjiā dàilái le búbiàn.",
    "note": "给……带来不便.",
    "pair": "给……带来不便"
   },
   {
    "promptLang": "vi",
    "prompt": "Ông nội tuổi đã cao, đi lại bất tiện, nhưng ngày nào cũng kiên trì đi dạo.",
    "answer": "爷爷年龄大了，行动不便，却每天都坚持散步。",
    "answerPy": "Yéye niánlíng dà le, xíngdòng búbiàn, què měitiān dōu jiānchí sànbù.",
    "note": "却 (điểm 4) + 散步 (Bài 11).",
    "pair": "……，却……"
   }
  ]
 },
 {
  "n": 34,
  "zh": "失望",
  "py": "shīwàng",
  "pos": "Tính từ / Động từ",
  "vn": "thất vọng",
  "hv": "thất vọng",
  "em": "😞",
  "lesson": 4,
  "explain": [
   "Không đạt điều mong đợi nên buồn, mất hy vọng: 很失望, 让人失望, 对……失望. Hán Việt trùng nghĩa."
  ],
  "usage": "对 + ai/việc + 很失望 · 让 / 使 + ai + 失望 · 感到失望.",
  "collo": [
   "感到失望",
   "让人失望",
   "对……很失望",
   "有点儿失望"
  ],
  "colloFull": [
   {
    "zh": "感到失望",
    "py": "Gǎndào shīwàng",
    "vn": "cảm thấy thất vọng"
   },
   {
    "zh": "让人失望",
    "py": "Ràng rén shīwàng",
    "vn": "khiến người ta thất vọng"
   },
   {
    "zh": "对……很失望",
    "py": "Duì…… hěn shīwàng",
    "vn": "thất vọng về …"
   },
   {
    "zh": "有点儿失望",
    "py": "Yǒudiǎnr shīwàng",
    "vn": "hơi thất vọng"
   }
  ],
  "patterns": [
   {
    "s": "对 + N + 失望",
    "m": "Thất vọng về …"
   },
   {
    "s": "让 / 使 + ai + 失望",
    "m": "Làm ai thất vọng"
   }
  ],
  "ex_zh": "甚至让人感到失望，但这些变化也许会给生活带来新的可能。",
  "ex_py": "Shènzhì ràng rén gǎndào shīwàng, dàn zhèxiē biànhuà yěxǔ huì gěi shēnghuó dàilái xīn de kěnéng.",
  "ex_vn": "…thậm chí khiến người ta cảm thấy thất vọng, nhưng những thay đổi này có lẽ sẽ mang lại khả năng mới cho cuộc sống.",
  "exList": [
   {
    "zh": "甚至让人感到失望，但这些变化也许会给生活带来新的可能。",
    "py": "Shènzhì ràng rén gǎndào shīwàng, dàn zhèxiē biànhuà yěxǔ huì gěi shēnghuó dàilái xīn de kěnéng.",
    "vn": "…thậm chí khiến người ta cảm thấy thất vọng, nhưng những thay đổi này có lẽ sẽ mang lại khả năng mới cho cuộc sống."
   },
   {
    "zh": "你一定能做好，别让大家失望。",
    "py": "Nǐ yídìng néng zuòhǎo, bié ràng dàjiā shīwàng.",
    "vn": "Bạn nhất định làm tốt được, đừng để mọi người thất vọng."
   }
  ],
  "hanzi": [
   {
    "c": "失",
    "p": "shī",
    "type": "指事字 · Chữ chỉ sự",
    "st": 5,
    "ord": "丿 → 一 → 一 → 丿 → 乀",
    "rad": "丿 (phiệt – nét phẩy)",
    "mean": "mất, đánh mất",
    "tip": "Giống chữ 夫 nhưng nét phẩy trên đầu thò ra như đồ vật tuột khỏi tay → mất — 失去, 失望.",
    "cf": "夫 fū (chồng) — không có nét phẩy thò lên; 矢 shǐ (mũi tên) — đầu là 𠂉",
    "w": "失去 / 失望 / 失败"
   },
   {
    "c": "望",
    "p": "wàng",
    "type": "上下结构 · Trên-dưới",
    "st": 11,
    "ord": "亡月 trên → 王 dưới",
    "rad": "月 (nguyệt)",
    "mean": "trông mong",
    "tip": "亡 + 月(trăng) + 王 → người đứng trông trăng → TRÔNG MONG, VỌNG. 失望 = mất hy vọng; 希望 = hy vọng.",
    "cf": "忘 (wàng – quên)",
    "w": "失望 / 希望 / 愿望"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Kết quả thi khiến cậu ấy hơi thất vọng.",
    "answer": "考试结果让他有点儿失望。",
    "answerPy": "Kǎoshì jiéguǒ ràng tā yǒudiǎnr shīwàng.",
    "note": "让 + ai + 失望.",
    "pair": "让……失望"
   },
   {
    "promptLang": "vi",
    "prompt": "Thất bại lần này khiến anh ấy rất thất vọng, thậm chí không muốn thử lại nữa.",
    "answer": "这次失败让他很失望，甚至不想再试了。",
    "answerPy": "Zhè cì shībài ràng tā hěn shīwàng, shènzhì bù xiǎng zài shì le.",
    "note": "Ôn 甚至 (Bài 3 · điểm 3).",
    "pair": "……，甚至……"
   }
  ]
 },
 {
  "n": 35,
  "zh": "也许",
  "py": "yěxǔ",
  "pos": "Phó từ",
  "vn": "có lẽ, có thể",
  "hv": "dã hứa",
  "em": "🌤️",
  "lesson": 4,
  "explain": [
   "Phỏng đoán, không chắc chắn: “có lẽ”. Gần nghĩa 可能 / 说不定; 也许 có thể đứng một mình để trả lời: 也许吧 (có lẽ vậy)."
  ],
  "usage": "也许 + V / câu · Sub + 也许 + V · 也许吧.",
  "collo": [
   "也许会",
   "也许吧",
   "也许不是",
   "也许明天"
  ],
  "colloFull": [
   {
    "zh": "也许会",
    "py": "Yěxǔ huì",
    "vn": "có lẽ sẽ"
   },
   {
    "zh": "也许吧",
    "py": "Yěxǔ ba",
    "vn": "có lẽ vậy"
   },
   {
    "zh": "也许不是",
    "py": "Yěxǔ bú shì",
    "vn": "có lẽ không phải"
   },
   {
    "zh": "也许明天",
    "py": "Yěxǔ míngtiān",
    "vn": "có lẽ ngày mai"
   }
  ],
  "patterns": [
   {
    "s": "也许 vs 说不定",
    "m": "也许 trung tính; 说不定 khẩu ngữ hơn, hàm ý “biết đâu (bất ngờ)”"
   }
  ],
  "ex_zh": "但这些变化也许会给生活带来新的可能。",
  "ex_py": "Dàn zhèxiē biànhuà yěxǔ huì gěi shēnghuó dàilái xīn de kěnéng.",
  "ex_vn": "Nhưng những thay đổi này có lẽ sẽ mang lại khả năng mới cho cuộc sống.",
  "exList": [
   {
    "zh": "但这些变化也许会给生活带来新的可能。",
    "py": "Dàn zhèxiē biànhuà yěxǔ huì gěi shēnghuó dàilái xīn de kěnéng.",
    "vn": "Nhưng những thay đổi này có lẽ sẽ mang lại khả năng mới cho cuộc sống."
   },
   {
    "zh": "他还没回消息，也许在忙吧。",
    "py": "Tā hái méi huí xiāoxi, yěxǔ zài máng ba.",
    "vn": "Anh ấy vẫn chưa trả lời tin nhắn, có lẽ đang bận."
   }
  ],
  "hanzi": [
   {
    "c": "也",
    "p": "yě",
    "type": "独体字 · Chữ đơn",
    "st": 3,
    "ord": "nét gập liền mạch 3 nét, không tách bộ phận",
    "rad": "乙 (ất – tự thành bộ)",
    "mean": "cũng",
    "tip": "也 là hình vẽ đơn giản với nét gập liền mạch, không tách rời → dùng làm phó từ CŨNG, tiếp nối ý đã nói trước đó.",
    "cf": "已 (yǐ – \"đã, rồi\", hình dáng rất gần giống 也\")",
    "w": "也是 / 也很 / 也好"
   },
   {
    "c": "许",
    "p": "xǔ",
    "type": "左右结构 · Trái-phải (giản thể)",
    "st": 6,
    "ord": "讠 (ngôn) trái → 午 phải",
    "rad": "讠 (ngôn)",
    "mean": "cho phép, có lẽ",
    "tip": "Bộ lời nói 讠 + 午(biểu âm) → nghĩa gốc là CHO PHÉP (bằng lời), kết hợp 也 thành 也许 = CÓ LẼ.",
    "cf": "午 (wǔ – \"trưa\", phần bên phải)",
    "w": "也许 / 允许 / 许多"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Có lẽ ngày mai anh ấy sẽ đến.",
    "answer": "他也许明天会来。",
    "answerPy": "Tā yěxǔ míngtiān huì lái.",
    "note": "也许 + thời gian + 会 + V.",
    "pair": "也许……会……"
   },
   {
    "promptLang": "vi",
    "prompt": "Thay đổi chưa chắc là chuyện xấu, có lẽ sẽ mang lại cơ hội mới.",
    "answer": "变化不一定是坏事，也许会带来新的机会。",
    "answerPy": "Biànhuà bùyídìng shì huàishì, yěxǔ huì dàilái xīn de jīhuì.",
    "note": "不一定 (HSK 3).",
    "pair": "……，也许会……"
   }
  ]
 },
 {
  "n": 36,
  "zh": "逛",
  "py": "guàng",
  "pos": "Động từ",
  "vn": "dạo, đi dạo (xem), đi chơi",
  "hv": "cuống",
  "em": "🛍️",
  "lesson": 4,
  "explain": [
   "Đi dạo xem cho vui (phố, công viên, cửa hàng): 逛街 (dạo phố), 逛商场, 逛公园. Hay lặp lại: 逛逛 / 逛了逛."
  ],
  "usage": "逛 + nơi · 逛逛 · 逛了逛 · 去 + nơi + 逛逛.",
  "collo": [
   "逛街",
   "逛商场",
   "逛公园",
   "逛了逛"
  ],
  "colloFull": [
   {
    "zh": "逛街",
    "py": "Guàngjiē",
    "vn": "dạo phố"
   },
   {
    "zh": "逛商场",
    "py": "Guàng shāngchǎng",
    "vn": "dạo trung tâm thương mại"
   },
   {
    "zh": "逛公园",
    "py": "Guàng gōngyuán",
    "vn": "dạo công viên"
   },
   {
    "zh": "逛了逛",
    "py": "Guàng le guàng",
    "vn": "dạo một vòng"
   }
  ],
  "patterns": [
   {
    "s": "逛 vs 散步",
    "m": "散步 không mang tân ngữ nơi chốn; 逛 mang trực tiếp: 逛公园"
   },
   {
    "s": "V了V: 逛了逛",
    "m": "Đã dạo qua một chút (ôn Bài 15 · điểm 3)"
   }
  ],
  "ex_zh": "比如没去成旅行，于是在家门口的小公园逛了逛。",
  "ex_py": "Bǐrú méi qùchéng lǚxíng, yúshì zài jiā ménkǒu de xiǎo gōngyuán guàng le guàng.",
  "ex_vn": "Ví dụ không đi du lịch được, thế là đi dạo một vòng công viên nhỏ trước cửa nhà.",
  "exList": [
   {
    "zh": "比如没去成旅行，于是在家门口的小公园逛了逛。",
    "py": "Bǐrú méi qùchéng lǚxíng, yúshì zài jiā ménkǒu de xiǎo gōngyuán guàng le guàng.",
    "vn": "Ví dụ không đi du lịch được, thế là đi dạo một vòng công viên nhỏ trước cửa nhà."
   },
   {
    "zh": "周末我常和妈妈去商场逛逛。",
    "py": "Zhōumò wǒ cháng hé māma qù shāngchǎng guàngguang.",
    "vn": "Cuối tuần tôi hay cùng mẹ đi dạo trung tâm thương mại."
   }
  ],
  "hanzi": [
   {
    "c": "逛",
    "p": "guàng",
    "type": "半包围结构 · Bán bao vây",
    "st": 10,
    "ord": "辶 bao ngoài → 狂 trong",
    "rad": "辶 (sước – đi)",
    "mean": "đi dạo, dạo chơi",
    "tip": "Bộ 辶 (đi) + 狂 (buông thả tự do) → ĐI LẠI TỰ DO, thong thả không mục đích = ĐI DẠO.",
    "cf": "狂 (kuáng – \"cuồng nhiệt\", chỉ khác không có bộ 辶\")",
    "w": "逛街 / 逛公园 / 闲逛"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Cuối tuần chúng tôi dạo trung tâm thương mại một vòng, mua không ít quần áo.",
    "answer": "周末我们逛了逛商场，买了不少衣服。",
    "answerPy": "Zhōumò wǒmen guàng le guàng shāngchǎng, mǎi le bùshǎo yīfu.",
    "note": "V了V (Bài 15 · điểm 3).",
    "pair": "逛了逛……"
   },
   {
    "promptLang": "vi",
    "prompt": "Không đi du lịch được thì dạo quanh nhà, có khi cũng rất thú vị.",
    "answer": "没去成旅行，就在家附近逛逛，说不定也很有趣。",
    "answerPy": "Méi qùchéng lǚxíng, jiù zài jiā fùjìn guàngguang, shuōbudìng yě hěn yǒuqù.",
    "note": "说不定 (điểm 3).",
    "pair": "……，说不定……"
   }
  ]
 },
 {
  "n": 37,
  "zh": "有趣",
  "py": "yǒuqù",
  "pos": "Tính từ",
  "vn": "thú vị, hay",
  "hv": "hữu thú",
  "em": "😄",
  "lesson": 4,
  "explain": [
   "Gây hứng thú, khiến người ta thích: 很有趣, 有趣的故事. Gần nghĩa 有意思 (khẩu ngữ hơn); 有趣 hơi văn viết."
  ],
  "usage": "很有趣 · 有趣的 + N · 觉得……很有趣.",
  "collo": [
   "很有趣",
   "有趣的故事",
   "有趣的人",
   "越来越有趣"
  ],
  "colloFull": [
   {
    "zh": "很有趣",
    "py": "Hěn yǒuqù",
    "vn": "rất thú vị"
   },
   {
    "zh": "有趣的故事",
    "py": "Yǒuqù de gùshi",
    "vn": "câu chuyện thú vị"
   },
   {
    "zh": "有趣的人",
    "py": "Yǒuqù de rén",
    "vn": "người thú vị"
   },
   {
    "zh": "越来越有趣",
    "py": "Yuèláiyuè yǒuqù",
    "vn": "ngày càng thú vị"
   }
  ],
  "patterns": [
   {
    "s": "有趣 ≈ 有意思",
    "m": "有意思 khẩu ngữ; 有趣 văn viết hơn"
   }
  ],
  "ex_zh": "发现那里也很有趣。",
  "ex_py": "Fāxiàn nàli yě hěn yǒuqù.",
  "ex_vn": "…phát hiện ở đó cũng rất thú vị.",
  "exList": [
   {
    "zh": "发现那里也很有趣。",
    "py": "Fāxiàn nàli yě hěn yǒuqù.",
    "vn": "…phát hiện ở đó cũng rất thú vị."
   },
   {
    "zh": "这本书里有很多有趣的故事。",
    "py": "Zhè běn shū lǐ yǒu hěn duō yǒuqù de gùshi.",
    "vn": "Cuốn sách này có rất nhiều câu chuyện thú vị."
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
    "c": "趣",
    "p": "qù",
    "type": "半包围结构 · Bán bao vây",
    "st": 15,
    "ord": "走 bao → 取 trong",
    "rad": "走 (tẩu – đi)",
    "mean": "thú vị",
    "tip": "Bộ đi 走 + 取(lấy) → chạy đến LẤY (điều mình thích) → HỨNG THÚ, kết hợp 有 thành 有趣 = THÚ VỊ.",
    "cf": "取 (qǔ – \"lấy\", phần trong)",
    "w": "有趣 / 兴趣 / 有意思"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Tôi thấy bộ phim này rất thú vị, bạn tôi lại thấy rất chán.",
    "answer": "我觉得这部电影很有趣，我朋友却觉得没意思。",
    "answerPy": "Wǒ juéde zhè bù diànyǐng hěn yǒuqù, wǒ péngyou què juéde méi yìsi.",
    "note": "却 (điểm 4).",
    "pair": "……，……却……"
   },
   {
    "promptLang": "vi",
    "prompt": "Cô giáo nêu một ví dụ thú vị, để mọi người dễ hiểu hơn.",
    "answer": "老师举了一个有趣的例子，好让大家更容易理解。",
    "answerPy": "Lǎoshī jǔ le yí gè yǒuqù de lìzi, hǎo ràng dàjiā gèng róngyì lǐjiě.",
    "note": "Ôn ……，好…… (Bài 6 · điểm 4).",
    "pair": "……，好……"
   }
  ]
 },
 {
  "n": 38,
  "zh": "观看",
  "py": "guānkàn",
  "pos": "Động từ",
  "vn": "xem, theo dõi (phim, biểu diễn, thi đấu)",
  "hv": "quan khán",
  "em": "📺",
  "lesson": 4,
  "explain": [
   "Xem một cách chăm chú (phim, biểu diễn, thi đấu); văn viết hơn 看. Tân ngữ thường là 电影, 比赛, 演出, 节目 — không dùng cho 看书 / 看病."
  ],
  "usage": "观看 + 电影 / 比赛 / 演出 · 在线观看.",
  "collo": [
   "观看电影",
   "观看比赛",
   "观看演出",
   "在线观看"
  ],
  "colloFull": [
   {
    "zh": "观看电影",
    "py": "Guānkàn diànyǐng",
    "vn": "xem phim"
   },
   {
    "zh": "观看比赛",
    "py": "Guānkàn bǐsài",
    "vn": "xem thi đấu"
   },
   {
    "zh": "观看演出",
    "py": "Guānkàn yǎnchū",
    "vn": "xem biểu diễn"
   },
   {
    "zh": "在线观看",
    "py": "Zàixiàn guānkàn",
    "vn": "xem trực tuyến"
   }
  ],
  "patterns": [
   {
    "s": "观看 vs 看",
    "m": "观看 trang trọng; không nói ✗观看书 / ✗观看病"
   }
  ],
  "ex_zh": "没见到朋友，于是在家观看了一部电影，心情也变得很愉快。",
  "ex_py": "Méi jiàndào péngyou, yúshì zài jiā guānkàn le yí bù diànyǐng, xīnqíng yě biànde hěn yúkuài.",
  "ex_vn": "Không gặp được bạn, thế là ở nhà xem một bộ phim, tâm trạng cũng trở nên rất vui vẻ.",
  "exList": [
   {
    "zh": "没见到朋友，于是在家观看了一部电影，心情也变得很愉快。",
    "py": "Méi jiàndào péngyou, yúshì zài jiā guānkàn le yí bù diànyǐng, xīnqíng yě biànde hěn yúkuài.",
    "vn": "Không gặp được bạn, thế là ở nhà xem một bộ phim, tâm trạng cũng trở nên rất vui vẻ."
   },
   {
    "zh": "很多人来到体育馆观看足球比赛。",
    "py": "Hěn duō rén láidào tǐyùguǎn guānkàn zúqiú bǐsài.",
    "vn": "Rất nhiều người đến sân vận động xem trận đấu bóng đá."
   }
  ],
  "hanzi": [
   {
    "c": "观",
    "p": "guān",
    "type": "左右结构 · Trái-phải",
    "st": 6,
    "ord": "又 trái → 见 phải",
    "rad": "见 (kiến)",
    "mean": "xem",
    "tip": "又 + 见(nhìn) → NHÌN, QUAN SÁT. 参观 = tham quan; 观众 = khán giả (Bài 13).",
    "cf": "现 (xiàn – hiện)",
    "w": "参观 / 观众 / 观点"
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
    "prompt": "Tối qua chúng tôi xem một buổi biểu diễn ở nhà hát.",
    "answer": "昨天晚上我们在剧院观看了一场演出。",
    "answerPy": "Zuótiān wǎnshang wǒmen zài jùyuàn guānkàn le yì chǎng yǎnchū.",
    "note": "观看 + 演出; lượng từ 场.",
    "pair": "观看了一场……"
   },
   {
    "promptLang": "vi",
    "prompt": "Cho dù không đến được hiện trường, bạn cũng có thể xem trận đấu trực tuyến.",
    "answer": "即使不能去现场，你也可以在网上观看比赛。",
    "answerPy": "Jíshǐ bù néng qù xiànchǎng, nǐ yě kěyǐ zài wǎngshang guānkàn bǐsài.",
    "note": "Ôn 即使……也…… (Bài 11 · điểm 1).",
    "pair": "即使……，也……"
   }
  ]
 },
 {
  "n": 39,
  "zh": "部",
  "py": "bù",
  "pos": "Lượng từ",
  "vn": "bộ, cuốn (phim, sách, tác phẩm)",
  "hv": "bộ",
  "em": "🎬",
  "lesson": 4,
  "explain": [
   "Lượng từ cho phim, tác phẩm, sách dài: 一部电影, 一部小说. Cũng dùng cho máy móc: 一部手机."
  ],
  "usage": "一部电影 · 这部小说 · 几部作品.",
  "collo": [
   "一部电影",
   "一部小说",
   "这部作品",
   "一部手机"
  ],
  "colloFull": [
   {
    "zh": "一部电影",
    "py": "Yí bù diànyǐng",
    "vn": "một bộ phim"
   },
   {
    "zh": "一部小说",
    "py": "Yí bù xiǎoshuō",
    "vn": "một cuốn tiểu thuyết"
   },
   {
    "zh": "这部作品",
    "py": "Zhè bù zuòpǐn",
    "vn": "tác phẩm này"
   },
   {
    "zh": "一部手机",
    "py": "Yí bù shǒujī",
    "vn": "một chiếc điện thoại"
   }
  ],
  "patterns": [
   {
    "s": "số + 部 + 电影 / 小说 / 作品",
    "m": "Lượng từ"
   }
  ],
  "ex_zh": "没见到朋友，于是在家观看了一部电影。",
  "ex_py": "Méi jiàndào péngyou, yúshì zài jiā guānkàn le yí bù diànyǐng.",
  "ex_vn": "Không gặp được bạn, thế là ở nhà xem một bộ phim.",
  "exList": [
   {
    "zh": "没见到朋友，于是在家观看了一部电影。",
    "py": "Méi jiàndào péngyou, yúshì zài jiā guānkàn le yí bù diànyǐng.",
    "vn": "Không gặp được bạn, thế là ở nhà xem một bộ phim."
   },
   {
    "zh": "这部小说我看了三遍，每一遍都有新的发现。",
    "py": "Zhè bù xiǎoshuō wǒ kàn le sān biàn, měi yí biàn dōu yǒu xīn de fāxiàn.",
    "vn": "Cuốn tiểu thuyết này tôi đọc ba lần, lần nào cũng có phát hiện mới."
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
    "prompt": "Bộ phim này tôi đã xem hai lần rồi.",
    "answer": "这部电影我已经看了两遍了。",
    "answerPy": "Zhè bù diànyǐng wǒ yǐjīng kàn le liǎng biàn le.",
    "note": "Lượng từ 部; động lượng 遍.",
    "pair": "这部……"
   },
   {
    "promptLang": "vi",
    "prompt": "Bộ phim này hay hơn bộ trước nhiều.",
    "answer": "这部电影比上一部有意思多了。",
    "answerPy": "Zhè bù diànyǐng bǐ shàng yí bù yǒu yìsi duō le.",
    "note": "So sánh 比……多了 (HSK 3).",
    "pair": "比……多了"
   }
  ]
 },
 {
  "n": 40,
  "zh": "无法",
  "py": "wúfǎ",
  "pos": "Động từ",
  "vn": "không thể, không có cách nào",
  "hv": "vô pháp",
  "em": "🚫",
  "lesson": 4,
  "explain": [
   "Không có cách nào làm được: 无法 + động từ (thường hai âm tiết). Văn viết hơn 没办法 / 不能: 无法参加, 无法提前知道."
  ],
  "usage": "无法 + V (2 âm tiết) · 无法提前知道 · 无法参加.",
  "collo": [
   "无法参加",
   "无法完成",
   "无法想象",
   "无法联系"
  ],
  "colloFull": [
   {
    "zh": "无法参加",
    "py": "Wúfǎ cānjiā",
    "vn": "không thể tham gia"
   },
   {
    "zh": "无法完成",
    "py": "Wúfǎ wánchéng",
    "vn": "không thể hoàn thành"
   },
   {
    "zh": "无法想象",
    "py": "Wúfǎ xiǎngxiàng",
    "vn": "không thể tưởng tượng"
   },
   {
    "zh": "无法联系",
    "py": "Wúfǎ liánxì",
    "vn": "không liên lạc được"
   }
  ],
  "patterns": [
   {
    "s": "无法 + V (2 âm tiết)",
    "m": "Văn viết của 没办法 / 不能"
   }
  ],
  "ex_zh": "生活中很多变化是无法提前知道的。",
  "ex_py": "Shēnghuó zhōng hěn duō biànhuà shì wúfǎ tíqián zhīdao de.",
  "ex_vn": "Nhiều thay đổi trong cuộc sống là không thể biết trước được.",
  "exList": [
   {
    "zh": "生活中很多变化是无法提前知道的。",
    "py": "Shēnghuó zhōng hěn duō biànhuà shì wúfǎ tíqián zhīdao de.",
    "vn": "Nhiều thay đổi trong cuộc sống là không thể biết trước được."
   },
   {
    "zh": "雨太大了，我们无法按时出发。",
    "py": "Yǔ tài dà le, wǒmen wúfǎ ànshí chūfā.",
    "vn": "Mưa to quá, chúng tôi không thể xuất phát đúng giờ."
   }
  ],
  "hanzi": [
   {
    "c": "无",
    "p": "wú",
    "type": "独体字 · Chữ đơn (giản thể)",
    "st": 4,
    "ord": "一 → 一 → 丿 → 乚",
    "rad": "一 (nhất)",
    "mean": "không có",
    "tip": "Chữ giản thể của 無, nghĩa KHÔNG CÓ, kết hợp 法(cách) thành 无法 = KHÔNG CÓ CÁCH.",
    "cf": "天 (tiān – \"trời\", tự dạng gần giống)",
    "w": "无法 / 无论 / 无处不在"
   },
   {
    "c": "法",
    "p": "fǎ",
    "type": "左右结构 · Trái-phải",
    "st": 8,
    "ord": "氵 (thủy) trái → 去 phải",
    "rad": "氵 (thủy – nước)",
    "mean": "phép tắc, quy tắc",
    "tip": "Bộ nước 氵 (công bằng như nước) → mở rộng nghĩa PHÁP LUẬT, QUY TẮC, kết hợp 语(lời nói) thành 语法 = NGỮ PHÁP (quy tắc của lời nói).",
    "cf": "去 (qù – \"đi\", không có bộ 氵\")",
    "w": "语法 / 方法 / 法律"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Tôi gọi điện mấy lần mà vẫn không liên lạc được với anh ấy.",
    "answer": "我打了好几次电话，却一直无法联系到他。",
    "answerPy": "Wǒ dǎ le hǎojǐ cì diànhuà, què yìzhí wúfǎ liánxì dào tā.",
    "note": "却 (điểm 4) + 无法.",
    "pair": "却……无法……"
   },
   {
    "promptLang": "vi",
    "prompt": "Bất kể khó khăn đến đâu, cũng không thể khiến cô ấy từ bỏ.",
    "answer": "无论有多困难，也无法让她放弃。",
    "answerPy": "Wúlùn yǒu duō kùnnan, yě wúfǎ ràng tā fàngqì.",
    "note": "Ôn 无论……也…… (Bài 12 · điểm 3).",
    "pair": "无论……，也无法……"
   }
  ]
 },
 {
  "n": 41,
  "zh": "接受",
  "py": "jiēshòu",
  "pos": "Động từ",
  "vn": "tiếp nhận, chấp nhận, nhận",
  "hv": "tiếp thụ",
  "em": "🙌",
  "lesson": 4,
  "explain": [
   "Đồng ý nhận (lời mời, ý kiến, công việc) hoặc chấp nhận sự thật: 接受变化, 接受意见, 接受邀请. Phân biệt 收到 (nhận được đồ, thư — chỉ kết quả)."
  ],
  "usage": "接受 + 变化 / 意见 / 邀请 / 任务 · 无法接受 · 愿意接受.",
  "collo": [
   "接受变化",
   "接受意见",
   "接受邀请",
   "接受任务"
  ],
  "colloFull": [
   {
    "zh": "接受变化",
    "py": "Jiēshòu biànhuà",
    "vn": "chấp nhận thay đổi"
   },
   {
    "zh": "接受意见",
    "py": "Jiēshòu yìjiàn",
    "vn": "tiếp thu ý kiến"
   },
   {
    "zh": "接受邀请",
    "py": "Jiēshòu yāoqǐng",
    "vn": "nhận lời mời"
   },
   {
    "zh": "接受任务",
    "py": "Jiēshòu rènwu",
    "vn": "nhận nhiệm vụ"
   }
  ],
  "patterns": [
   {
    "s": "接受 vs 收到",
    "m": "收到礼物: đã nhận được đồ; 接受礼物: đồng ý nhận; 接受意见 = tiếp thu ý kiến"
   }
  ],
  "ex_zh": "我们要做的就是学会接受变化、适应变化。",
  "ex_py": "Wǒmen yào zuò de jiùshì xuéhuì jiēshòu biànhuà, shìyìng biànhuà.",
  "ex_vn": "Điều chúng ta cần làm là học cách chấp nhận thay đổi, thích nghi với thay đổi.",
  "exList": [
   {
    "zh": "我们要做的就是学会接受变化、适应变化。",
    "py": "Wǒmen yào zuò de jiùshì xuéhuì jiēshòu biànhuà, shìyìng biànhuà.",
    "vn": "Điều chúng ta cần làm là học cách chấp nhận thay đổi, thích nghi với thay đổi."
   },
   {
    "zh": "他很愿意接受别人的意见。",
    "py": "Tā hěn yuànyì jiēshòu biérén de yìjiàn.",
    "vn": "Anh ấy rất sẵn lòng tiếp thu ý kiến của người khác."
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
    "prompt": "Ông ấy đã nhận lời mời của chúng tôi, ngày mai sẽ đến phát biểu.",
    "answer": "他接受了我们的邀请，明天会来讲话。",
    "answerPy": "Tā jiēshòu le wǒmen de yāoqǐng, míngtiān huì lái jiǎnghuà.",
    "note": "接受 + 邀请.",
    "pair": "接受了……的邀请"
   },
   {
    "promptLang": "vi",
    "prompt": "Đối với thay đổi, điều chúng ta cần làm là chấp nhận và thích nghi.",
    "answer": "对于变化，我们要做的就是接受并适应。",
    "answerPy": "Duìyú biànhuà, wǒmen yào zuò de jiùshì jiēshòu bìng shìyìng.",
    "note": "Ôn 对于 (Bài 14 · điểm 4) + 并 (Bài 2 · điểm 3).",
    "pair": "对于……，……"
   }
  ]
 }
];
var wuData = [
 {
  "img": "/images/hsk4v3/bai-16/wu-A.webp",
  "label": "时间表",
  "py": "shíjiānbiǎo",
  "letter": "A"
 },
 {
  "img": "/images/hsk4v3/bai-16/wu-B.webp",
  "label": "观看",
  "py": "guānkàn",
  "letter": "B"
 },
 {
  "img": "/images/hsk4v3/bai-16/wu-C.webp",
  "label": "增加",
  "py": "zēngjiā",
  "letter": "C"
 },
 {
  "img": "/images/hsk4v3/bai-16/wu-D.webp",
  "label": "早晨",
  "py": "zǎochen",
  "letter": "D"
 },
 {
  "img": "/images/hsk4v3/bai-16/wu-E.webp",
  "label": "旅行",
  "py": "lǚxíng",
  "letter": "E"
 },
 {
  "img": "/images/hsk4v3/bai-16/wu-F.webp",
  "label": "失望",
  "py": "shīwàng",
  "letter": "F"
 }
];
var dialogData = [
 {
  "scene": "在王一雪家 · Ở nhà Vương Nhất Tuyết (Vương Nhất Tuyết và Bạch Gia Nguyệt trò chuyện)",
  "anh": "/images/hsk4v3/bai-16/kv-1.webp",
  "nguoi": [
   {
    "ten": "王一雪",
    "anh": "/images/hsk4v3/nv/yixue.webp"
   },
   {
    "ten": "白家月",
    "anh": "/images/hsk4v3/nv/bai.webp"
   }
  ],
  "preQuiz": [
   {
    "q": "白家月本来计划周末做什么？",
    "opts": [
     "去旅游",
     "买机票",
     "订酒店",
     "在家复习"
    ],
    "ans": 0
   },
   {
    "q": "王一雪建议白家月什么时候去旅游？",
    "opts": [
     "明天",
     "这个周末",
     "下个周末",
     "考试结束后"
    ],
    "ans": 3
   }
  ],
  "lines": [
   {
    "sp": 0,
    "zh": "家月，周末你还打算去南京旅游吗？我去年去过那里，可以给你介绍一下。",
    "py": "Jiāyuè, zhōumò nǐ hái dǎsuàn qù Nánjīng lǚyóu ma? Wǒ qùnián qù guò nàli, kěyǐ gěi nǐ jièshào yíxià.",
    "vn": "Gia Nguyệt, cuối tuần em vẫn định đi Nam Kinh du lịch à? Năm ngoái chị đến đó rồi, có thể giới thiệu cho em một chút."
   },
   {
    "sp": 1,
    "zh": "本来都计划好了，可是昨天突然接到通知，下周学校要安排一次考试，所以周末只好在家复习了。",
    "py": "Běnlái dōu jìhuà hǎo le, kěshì zuótiān tūrán jiēdào tōngzhī, xià zhōu xuéxiào yào ānpái yí cì kǎoshì, suǒyǐ zhōumò zhǐhǎo zài jiā fùxí le.",
    "vn": "Vốn dĩ đã lên kế hoạch xong xuôi rồi, nhưng hôm qua đột nhiên nhận được thông báo, tuần sau trường sắp xếp một kỳ thi, nên cuối tuần em đành ở nhà ôn bài thôi."
   },
   {
    "sp": 0,
    "zh": "真是计划赶不上变化啊！看来你的旅行计划只能推迟了。",
    "py": "Zhēnshì jìhuà gǎn bu shàng biànhuà a! Kànlái nǐ de lǚxíng jìhuà zhǐnéng tuīchí le.",
    "vn": "Đúng là kế hoạch không theo kịp thay đổi! Xem ra kế hoạch du lịch của em chỉ có thể hoãn lại rồi."
   },
   {
    "sp": 1,
    "zh": "是的，我已经把机票和酒店取消了。虽然有点儿可惜，但学习更重要。",
    "py": "Shì de, wǒ yǐjīng bǎ jīpiào hé jiǔdiàn qǔxiāo le. Suīrán yǒudiǎnr kěxī, dàn xuéxí gèng zhòngyào.",
    "vn": "Vâng, em đã hủy vé máy bay và khách sạn rồi. Tuy hơi tiếc, nhưng việc học quan trọng hơn."
   },
   {
    "sp": 0,
    "zh": "学习确实要放在第一位。等到考试结束后，你再找个时间去。",
    "py": "Xuéxí quèshí yào fàngzài dì yí wèi. Děngdào kǎoshì jiéshù hòu, nǐ zài zhǎo gè shíjiān qù.",
    "vn": "Việc học đúng là phải đặt lên hàng đầu. Đợi thi xong, em hãy tìm dịp khác mà đi."
   },
   {
    "sp": 1,
    "zh": "我也是这么想的，以后肯定还有很多机会。",
    "py": "Wǒ yě shì zhème xiǎng de, yǐhòu kěndìng hái yǒu hěn duō jīhuì.",
    "vn": "Em cũng nghĩ vậy, sau này chắc chắn còn nhiều cơ hội."
   }
  ]
 },
 {
  "scene": "在公司 · Ở công ty (Vương Nhất Tuyết và Dương Đồng Lạc bàn công việc)",
  "anh": "/images/hsk4v3/bai-16/kv-2.webp",
  "nguoi": [
   {
    "ten": "杨同乐",
    "anh": "/images/hsk4v3/nv/tongle.webp"
   },
   {
    "ten": "王一雪",
    "anh": "/images/hsk4v3/nv/yixue.webp"
   }
  ],
  "preQuiz": [
   {
    "q": "杨同乐接到了什么通知？",
    "opts": [
     "会议时间变化了",
     "会议材料要调整",
     "会议地点变化了",
     "会议内容增加了"
    ],
    "ans": 0
   },
   {
    "q": "王一雪让杨同乐做什么？",
    "opts": [
     "检查细节问题",
     "重新准备材料",
     "通知会议地点",
     "安排会议时间"
    ],
    "ans": 0
   }
  ],
  "lines": [
   {
    "sp": 0,
    "zh": "刚接到通知，明天早晨的会议，时间改到下周了。",
    "py": "Gāng jiēdào tōngzhī, míngtiān zǎochen de huìyì, shíjiān gǎidào xià zhōu le.",
    "vn": "Vừa nhận được thông báo, cuộc họp sáng sớm mai đổi sang tuần sau rồi."
   },
   {
    "sp": 1,
    "zh": "啊？时间都安排好了，怎么说变就变了？",
    "py": "A? Shíjiān dōu ānpái hǎo le, zěnme shuō biàn jiù biàn le?",
    "vn": "Hả? Thời gian đã sắp xếp xong cả rồi, sao nói đổi là đổi luôn vậy?"
   },
   {
    "sp": 0,
    "zh": "是啊，没想到忽然要改时间。",
    "py": "Shì a, méi xiǎngdào hūrán yào gǎi shíjiān.",
    "vn": "Đúng vậy, không ngờ đột nhiên phải đổi thời gian."
   },
   {
    "sp": 1,
    "zh": "好吧，那再看看有没有新的安排，或者增加的会议内容。",
    "py": "Hǎo ba, nà zài kànkan yǒu méiyǒu xīn de ānpái, huòzhě zēngjiā de huìyì nèiróng.",
    "vn": "Thôi được, vậy xem lại xem có sắp xếp gì mới, hoặc có nội dung họp nào được thêm vào không."
   },
   {
    "sp": 0,
    "zh": "好的。会议材料还需要调整吗？",
    "py": "Hǎo de. Huìyì cáiliào hái xūyào tiáozhěng ma?",
    "vn": "Vâng. Tài liệu họp còn cần điều chỉnh không chị?"
   },
   {
    "sp": 1,
    "zh": "再检查一下有没有细节上的错误，并且试着增加一些例子，把内容准备得更全一些。",
    "py": "Zài jiǎnchá yíxià yǒu méiyǒu xìjié shàng de cuòwù, bìngqiě shì zhe zēngjiā yìxiē lìzi, bǎ nèiróng zhǔnbèi de gèng quán yìxiē.",
    "vn": "Kiểm tra lại xem có lỗi ở chi tiết nào không, đồng thời thử thêm một vài ví dụ, chuẩn bị nội dung đầy đủ hơn một chút."
   },
   {
    "sp": 0,
    "zh": "没问题，这样效果肯定会更好。",
    "py": "Méi wèntí, zhèyàng xiàoguǒ kěndìng huì gèng hǎo.",
    "vn": "Không vấn đề gì, như vậy hiệu quả chắc chắn sẽ tốt hơn."
   },
   {
    "sp": 1,
    "zh": "看来有时候变化不一定是坏事，关键是我们怎么去适应变化。",
    "py": "Kànlái yǒushíhou biànhuà bùyídìng shì huàishì, guānjiàn shì wǒmen zěnme qù shìyìng biànhuà.",
    "vn": "Xem ra có lúc thay đổi chưa chắc đã là chuyện xấu, then chốt là chúng ta thích nghi với thay đổi như thế nào."
   }
  ]
 },
 {
  "scene": "在课堂上 · Trên lớp (Bạch Gia Nguyệt trình bày quan điểm của mình về việc lập kế hoạch)",
  "anh": "/images/hsk4v3/bai-16/kv-3.webp",
  "nguoi": [
   {
    "ten": "白家月",
    "anh": "/images/hsk4v3/nv/bai.webp"
   }
  ],
  "preQuiz": [
   {
    "q": "有的人为什么喜欢做计划？",
    "opts": [
     "可以省钱",
     "可以省时间",
     "做事更有把握",
     "感觉比较轻松"
    ],
    "ans": 2
   },
   {
    "q": "根据课文，不做计划可能会有什么结果？",
    "opts": [
     "带来新的发现",
     "让任务变简单",
     "提前完成任务",
     "增加工作压力"
    ],
    "ans": 0
   }
  ],
  "lines": [
   {
    "sp": 0,
    "zh": "在生活和工作中，有的人喜欢做计划，他们会提前安排好每天要做的事情，然后按照详细的时间表去完成任务，觉得这样做更有把握。",
    "py": "Zài shēnghuó hé gōngzuò zhōng, yǒude rén xǐhuan zuò jìhuà, tāmen huì tíqián ānpái hǎo měitiān yào zuò de shìqing, ránhòu ànzhào xiángxì de shíjiānbiǎo qù wánchéng rènwu, juéde zhèyàng zuò gèng yǒu bǎwò.",
    "vn": "Trong cuộc sống và công việc, có người thích lập kế hoạch, họ sẽ sắp xếp trước những việc phải làm mỗi ngày, sau đó làm theo thời gian biểu chi tiết để hoàn thành nhiệm vụ, cảm thấy làm như vậy nắm chắc hơn."
   },
   {
    "sp": 0,
    "zh": "相反，也有一部分人不爱做计划，他们认为随意一些也很好，想到什么就去做什么，感觉这样比较轻松。",
    "py": "Xiāngfǎn, yě yǒu yí bùfen rén bú ài zuò jìhuà, tāmen rènwéi suíyì yìxiē yě hěn hǎo, xiǎngdào shénme jiù qù zuò shénme, gǎnjué zhèyàng bǐjiào qīngsōng.",
    "vn": "Ngược lại, cũng có một bộ phận người không thích lập kế hoạch, họ cho rằng tùy hứng một chút cũng rất tốt, nghĩ đến gì thì làm nấy, cảm thấy như vậy khá thoải mái."
   },
   {
    "sp": 0,
    "zh": "其实，事前做计划是好是坏没有标准答案。",
    "py": "Qíshí, shì qián zuò jìhuà shì hǎo shì huài méiyǒu biāozhǔn dá'àn.",
    "vn": "Thật ra, lập kế hoạch từ trước là tốt hay xấu không có đáp án chuẩn."
   },
   {
    "sp": 0,
    "zh": "严格按照计划做事，常常能取得不错的效果；而不做计划，说不定也会带来新的发现。",
    "py": "Yángé ànzhào jìhuà zuòshì, chángcháng néng qǔdé búcuò de xiàoguǒ; ér bú zuò jìhuà, shuōbudìng yě huì dàilái xīn de fāxiàn.",
    "vn": "Làm việc nghiêm ngặt theo kế hoạch thường đạt được hiệu quả khá tốt; còn không lập kế hoạch, không chừng cũng sẽ mang lại những phát hiện mới."
   },
   {
    "sp": 0,
    "zh": "无论做不做计划，只要既能按时完成任务，又能根据情况灵活调整，就是适合自己的方式。",
    "py": "Wúlùn zuò bu zuò jìhuà, zhǐyào jì néng ànshí wánchéng rènwu, yòu néng gēnjù qíngkuàng línghuó tiáozhěng, jiùshì shìhé zìjǐ de fāngshì.",
    "vn": "Dù có lập kế hoạch hay không, chỉ cần vừa hoàn thành nhiệm vụ đúng hạn, vừa điều chỉnh linh hoạt theo tình hình, thì đó chính là cách phù hợp với mình."
   }
  ],
  "doan": true
 },
 {
  "scene": "计划与变化 · Kế hoạch và thay đổi",
  "anh": "",
  "nguoi": [
   {
    "ten": "小语",
    "anh": "/images/hsk4v3/nv/xiaoyu.webp"
   }
  ],
  "preQuiz": [
   {
    "q": "根据课文，变化可能会带来什么影响？",
    "opts": [
     "心情变得更加愉快",
     "以后不用再做计划",
     "让事情更容易完成",
     "给生活带来新可能"
    ],
    "ans": 3
   },
   {
    "q": "面对变化，人们应该怎么做？",
    "opts": [
     "随意地安排计划",
     "坚持本来的计划",
     "发现并解决问题",
     "接受并适应变化"
    ],
    "ans": 3
   }
  ],
  "lines": [
   {
    "sp": 0,
    "zh": "人们常说“计划赶不上变化”。",
    "py": "Rénmen cháng shuō “jìhuà gǎn bu shàng biànhuà”.",
    "vn": "Người ta thường nói “kế hoạch không theo kịp thay đổi”."
   },
   {
    "sp": 0,
    "zh": "有时候，你准备好了一切，却突然出现了新情况，让你不得不改变计划。",
    "py": "Yǒushíhou, nǐ zhǔnbèi hǎo le yíqiè, què tūrán chūxiàn le xīn qíngkuàng, ràng nǐ bùdébù gǎibiàn jìhuà.",
    "vn": "Có lúc bạn đã chuẩn bị xong mọi thứ, nhưng lại đột nhiên xuất hiện tình huống mới, khiến bạn buộc phải thay đổi kế hoạch."
   },
   {
    "sp": 0,
    "zh": "比如准备出去旅行，可能因为有事而取消；约好见朋友，可能因为天气不好而推迟。",
    "py": "Bǐrú zhǔnbèi chūqu lǚxíng, kěnéng yīnwèi yǒu shì ér qǔxiāo; yuēhǎo jiàn péngyou, kěnéng yīnwèi tiānqì bù hǎo ér tuīchí.",
    "vn": "Chẳng hạn định đi du lịch, có thể vì có việc mà phải hủy; hẹn gặp bạn rồi, có thể vì thời tiết xấu mà phải hoãn."
   },
   {
    "sp": 0,
    "zh": "虽然变化经常打乱计划，给我们带来不便，甚至让人感到失望，但这些变化也许会给生活带来新的可能。",
    "py": "Suīrán biànhuà jīngcháng dǎluàn jìhuà, gěi wǒmen dàilái búbiàn, shènzhì ràng rén gǎndào shīwàng, dàn zhèxiē biànhuà yěxǔ huì gěi shēnghuó dàilái xīn de kěnéng.",
    "vn": "Tuy thay đổi thường làm rối kế hoạch, gây bất tiện cho chúng ta, thậm chí khiến người ta cảm thấy thất vọng, nhưng những thay đổi này có lẽ sẽ mang lại những khả năng mới cho cuộc sống."
   },
   {
    "sp": 0,
    "zh": "比如没去成旅行，于是在家门口的小公园逛了逛，发现那里也很有趣；没见到朋友，于是在家观看了一部电影，心情也变得很愉快。",
    "py": "Bǐrú méi qùchéng lǚxíng, yúshì zài jiā ménkǒu de xiǎo gōngyuán guàng le guàng, fāxiàn nàli yě hěn yǒuqù; méi jiàndào péngyou, yúshì zài jiā guānkàn le yí bù diànyǐng, xīnqíng yě biànde hěn yúkuài.",
    "vn": "Chẳng hạn không đi du lịch được, thế là đi dạo một vòng công viên nhỏ trước cửa nhà, phát hiện ở đó cũng rất thú vị; không gặp được bạn, thế là ở nhà xem một bộ phim, tâm trạng cũng trở nên rất vui vẻ."
   },
   {
    "sp": 0,
    "zh": "生活中很多变化是无法提前知道的，我们要做的就是学会接受变化、适应变化，在变化中找到新的解决办法。",
    "py": "Shēnghuó zhōng hěn duō biànhuà shì wúfǎ tíqián zhīdao de, wǒmen yào zuò de jiùshì xuéhuì jiēshòu biànhuà, shìyìng biànhuà, zài biànhuà zhōng zhǎodào xīn de jiějué bànfǎ.",
    "vn": "Nhiều thay đổi trong cuộc sống là không thể biết trước được, điều chúng ta cần làm là học cách chấp nhận thay đổi, thích nghi với thay đổi, tìm ra cách giải quyết mới trong sự thay đổi."
   },
   {
    "sp": 0,
    "zh": "这样不仅能锻炼自己在面对不同情况时解决问题的能力，也能让我们的生活更轻松。",
    "py": "Zhèyàng bùjǐn néng duànliàn zìjǐ zài miànduì bùtóng qíngkuàng shí jiějué wèntí de nénglì, yě néng ràng wǒmen de shēnghuó gèng qīngsōng.",
    "vn": "Như vậy không chỉ rèn luyện được khả năng giải quyết vấn đề của bản thân khi đối mặt với những tình huống khác nhau, mà còn giúp cuộc sống của chúng ta thoải mái hơn."
   }
  ],
  "doan": true
 }
];
var listenData = [
 {
  "audio": "小林，你们的旅行怎么样？别提了，本来打算昨天出发，飞机却因为天气不好推迟了，最后航班取消了。真可惜！那你们怎么办？我们只好把酒店也取消了，等到下个月再去。",
  "questions": [
   {
    "q": "小林的旅行为什么没去成？",
    "opts": [
     "航班取消了",
     "酒店没有房间了",
     "他生病了"
    ],
    "ans": 0
   },
   {
    "q": "他们打算什么时候再去？",
    "opts": [
     "下个月",
     "明天",
     "下个周末"
    ],
    "ans": 0
   }
  ]
 },
 {
  "audio": "王经理，明天早晨的会议还按时开吗？时间没变，不过会议内容增加了一项。你把材料再调整一下，并且多加几个例子。好的，我今天下午就把材料改好。",
  "questions": [
   {
    "q": "明天的会议有什么变化？",
    "opts": [
     "时间推迟了",
     "内容增加了",
     "地点变了"
    ],
    "ans": 1
   },
   {
    "q": "经理让他做什么？",
    "opts": [
     "调整材料并增加例子",
     "通知大家开会",
     "取消会议"
    ],
    "ans": 0
   }
  ]
 },
 {
  "audio": "你每天都做详细的时间表吗？是啊，不做计划，我做事心里没把握。我却正好相反，喜欢想到什么就做什么，觉得这样比较轻松。那你不怕完不成任务吗？不怕，不做计划，说不定还会有新的发现呢。",
  "questions": [
   {
    "q": "喜欢做时间表的人为什么做计划？",
    "opts": [
     "不做计划心里没把握",
     "老师要求的",
     "工作太忙了"
    ],
    "ans": 0
   },
   {
    "q": "不爱做计划的人觉得随意一些怎么样？",
    "opts": [
     "比较轻松",
     "很没意思",
     "很累"
    ],
    "ans": 0
   }
  ]
 }
];
var matchData = [
 {
  "left": "取消",
  "right": "机票和酒店"
 },
 {
  "left": "推迟",
  "right": "旅行计划"
 },
 {
  "left": "调整",
  "right": "会议材料"
 },
 {
  "left": "增加",
  "right": "一些例子"
 },
 {
  "left": "取得",
  "right": "不错的效果"
 },
 {
  "left": "详细的",
  "right": "时间表"
 },
 {
  "left": "观看",
  "right": "一部电影"
 },
 {
  "left": "接受",
  "right": "新的情况"
 },
 {
  "left": "灵活",
  "right": "调整计划"
 },
 {
  "left": "逛",
  "right": "商场"
 }
];
var fillData = [
 {
  "pre": "",
  "blank": "本来",
  "post": "都计划好了，可是昨天突然接到通知。",
  "hint": "(vốn dĩ)",
  "ans": "本来",
  "exp": "本来……，可是…… = vốn định … nhưng."
 },
 {
  "pre": "下周学校要安排一次考试，所以周末",
  "blank": "只好",
  "post": "在家复习了。",
  "hint": "(đành phải)",
  "ans": "只好",
  "exp": "只好 + V = đành."
 },
 {
  "pre": "看来你的旅行计划只能",
  "blank": "推迟",
  "post": "了。",
  "hint": "(hoãn lại)",
  "ans": "推迟",
  "exp": "推迟 = lùi thời gian."
 },
 {
  "pre": "虽然有点儿",
  "blank": "可惜",
  "post": "，但学习更重要。",
  "hint": "(đáng tiếc)",
  "ans": "可惜",
  "exp": "有点儿可惜 = hơi tiếc."
 },
 {
  "pre": "学习",
  "blank": "确实",
  "post": "要放在第一位。",
  "hint": "(quả thật)",
  "ans": "确实",
  "exp": "确实 + V: khẳng định, đồng ý."
 },
 {
  "pre": "是啊，没想到",
  "blank": "忽然",
  "post": "要改时间。",
  "hint": "(đột nhiên)",
  "ans": "忽然",
  "exp": "忽然 chỉ là phó từ."
 },
 {
  "pre": "有时候变化不一定是坏事，",
  "blank": "关键",
  "post": "是我们怎么去适应变化。",
  "hint": "(then chốt)",
  "ans": "关键",
  "exp": "关键是…… = mấu chốt là."
 },
 {
  "pre": "他们会提前安排好每天要做的事情，然后按照详细的",
  "blank": "时间表",
  "post": "去完成任务。",
  "hint": "(thời gian biểu)",
  "ans": "时间表",
  "exp": "按照时间表 + V."
 },
 {
  "pre": "严格按照计划做事，常常能",
  "blank": "取得",
  "post": "不错的效果。",
  "hint": "(đạt được)",
  "ans": "取得",
  "exp": "取得 + 效果 / 成绩."
 },
 {
  "pre": "你准备好了一切，却突然出现了新情况，让你",
  "blank": "不得不",
  "post": "改变计划。",
  "hint": "(buộc phải)",
  "ans": "不得不",
  "exp": "让 + ai + 不得不 + V."
 }
];
var sortData = [
 {
  "words": [
   "我",
   "已经",
   "把",
   "机票和酒店",
   "取消",
   "了",
   "。"
  ],
  "ans": "我已经把机票和酒店取消了。",
  "audio": "我已经把机票和酒店取消了。"
 },
 {
  "words": [
   "再检查一下",
   "有没有",
   "细节上的错误",
   "，",
   "并且",
   "试着",
   "增加一些例子",
   "。"
  ],
  "ans": "再检查一下有没有细节上的错误，并且试着增加一些例子。",
  "audio": "再检查一下有没有细节上的错误，并且试着增加一些例子。"
 },
 {
  "words": [
   "不做计划",
   "，",
   "说不定",
   "也会",
   "带来",
   "新的发现",
   "。"
  ],
  "ans": "不做计划，说不定也会带来新的发现。",
  "audio": "不做计划，说不定也会带来新的发现。"
 },
 {
  "words": [
   "你",
   "准备好了",
   "一切",
   "，",
   "却",
   "突然出现了",
   "新情况",
   "。"
  ],
  "ans": "你准备好了一切，却突然出现了新情况。",
  "audio": "你准备好了一切，却突然出现了新情况。"
 },
 {
  "words": [
   "学习",
   "确实",
   "要",
   "放在",
   "第一位",
   "。"
  ],
  "ans": "学习确实要放在第一位。",
  "audio": "学习确实要放在第一位。"
 },
 {
  "words": [
   "生活中",
   "很多变化",
   "是",
   "无法",
   "提前知道",
   "的",
   "。"
  ],
  "ans": "生活中很多变化是无法提前知道的。",
  "audio": "生活中很多变化是无法提前知道的。"
 }
];
var mcData = [
 {
  "q": "我已经＿＿机票和酒店取消了。",
  "opts": [
   "把",
   "被",
   "给",
   "对"
  ],
  "ans": 0,
  "exp": "Câu 把: Chủ ngữ + 把 + O + V + 了."
 },
 {
  "q": "他按时完成了任务，＿＿做得很好。",
  "opts": [
   "并且",
   "但是",
   "所以",
   "或者"
  ],
  "ans": 0,
  "exp": "Vế sau bổ sung, tiến thêm một bước → 并且."
 },
 {
  "q": "今天这么阴，＿＿会下雨。",
  "opts": [
   "说不定",
   "不得不",
   "只好",
   "本来"
  ],
  "ans": 0,
  "exp": "Phỏng đoán khả năng → 说不定."
 },
 {
  "q": "她长得很像她姐姐，性格＿＿完全不同。",
  "opts": [
   "却",
   "就",
   "才",
   "并且"
  ],
  "ans": 0,
  "exp": "Vế sau trái với mong đợi; 却 sau chủ ngữ 性格."
 },
 {
  "q": "时间都安排好了，怎么说变＿＿变了？",
  "opts": [
   "就",
   "才",
   "却",
   "也"
  ],
  "ans": 0,
  "exp": "说 + V + 就 + V: thay đổi rất nhanh, bất ngờ (mẹo của Tiểu Ngữ, bài khoá 2)."
 },
 {
  "q": "下周学校要安排一次考试，所以周末我＿＿在家复习了。",
  "opts": [
   "只好",
   "确实",
   "忽然",
   "也许"
  ],
  "ans": 0,
  "exp": "只好 = đành phải (không còn cách nào khác)."
 },
 {
  "q": "要想提高成绩，＿＿是坚持每天复习。",
  "opts": [
   "关键",
   "例子",
   "标准",
   "部分"
  ],
  "ans": 0,
  "exp": "……，关键是…… = mấu chốt là."
 },
 {
  "q": "生活中很多变化是＿＿提前知道的。",
  "opts": [
   "无法",
   "不便",
   "不得不",
   "相反"
  ],
  "ans": 0,
  "exp": "无法 + V = không thể."
 },
 {
  "q": "我们要做的就是学会＿＿变化、适应变化。",
  "opts": [
   "接受",
   "取得",
   "观看",
   "增加"
  ],
  "ans": 0,
  "exp": "接受变化 = chấp nhận thay đổi."
 },
 {
  "q": "没见到朋友，于是在家＿＿了一部电影。",
  "opts": [
   "观看",
   "逛",
   "约",
   "取消"
  ],
  "ans": 0,
  "exp": "观看 + 电影 / 比赛; lượng từ 部."
 }
];
var speakingData = {
 "intro": "Nhấn nút loa nghe câu hỏi (câu hỏi phần Khởi động, câu hỏi đọc hiểu của 4 bài khoá, kể lại bài khoá và tranh luận nhóm), rồi tự ghi âm câu trả lời — cố dùng từ mới và 4 điểm ngữ pháp của bài.",
 "questions": [
  {
   "q_zh": "你平时经常做计划吗？一般会做哪些计划？",
   "q_vn": "Bình thường bạn có hay lập kế hoạch không? Thường lập những kế hoạch gì?",
   "hint": "我平时……做计划。每天早晨，我会……，并且……。放假的时候……。不过计划常常赶不上变化……",
   "sample": "我平时经常做计划。每天早晨，我会做一个简单的时间表，把今天要做的事情写下来，并且把最重要的事情放在第一位。每个星期，我还会做一个学习计划，比如每天记二十个生词、练习半个小时口语。放假的时候，我会提前做旅行计划，订好机票和酒店。不过计划常常赶不上变化，所以我也会根据情况灵活调整。",
   "sample_vn": "Bình thường tôi hay lập kế hoạch. Sáng nào tôi cũng lập một thời gian biểu đơn giản, ghi lại những việc cần làm hôm nay, đồng thời đặt việc quan trọng nhất lên hàng đầu. Mỗi tuần tôi còn lập một kế hoạch học tập, ví dụ mỗi ngày nhớ hai mươi từ mới, luyện nói nửa tiếng. Khi được nghỉ, tôi lập kế hoạch du lịch từ trước, đặt sẵn vé máy bay và khách sạn. Có điều kế hoạch thường không theo kịp thay đổi, nên tôi cũng điều chỉnh linh hoạt theo tình hình.",
   "note": "Câu hỏi phần Khởi động của sách; dùng 并且 (điểm 2) + từ mới 时间表, 灵活, 调整."
  },
  {
   "q_zh": "你觉得做计划重要吗？为什么？",
   "q_vn": "Bạn thấy lập kế hoạch có quan trọng không? Vì sao?",
   "hint": "我觉得……。有了计划，……更有把握，并且……。如果不做计划，……不得不……。当然，……关键是……",
   "sample": "我觉得做计划很重要。有了计划，我就知道每天先做什么、后做什么，做事更有把握，并且能节约很多时间。如果不做计划，我常常会忘了重要的事情，最后不得不熬夜完成任务。当然，计划不能太严格，遇到变化时要灵活调整，关键是能按时完成任务。",
   "sample_vn": "Tôi thấy lập kế hoạch rất quan trọng. Có kế hoạch rồi, tôi biết mỗi ngày làm gì trước, làm gì sau, làm việc nắm chắc hơn, hơn nữa tiết kiệm được nhiều thời gian. Nếu không lập kế hoạch, tôi hay quên những việc quan trọng, cuối cùng buộc phải thức khuya để hoàn thành nhiệm vụ. Tất nhiên kế hoạch không thể quá cứng nhắc, gặp thay đổi phải điều chỉnh linh hoạt, mấu chốt là hoàn thành nhiệm vụ đúng hạn.",
   "note": "Câu hỏi phần Khởi động của sách; dùng 并且 (điểm 2), 不得不, 关键是."
  },
  {
   "q_zh": "白家月为什么周末不能去南京了？旅行计划推迟后，白家月做什么了？",
   "q_vn": "Vì sao cuối tuần Bạch Gia Nguyệt không đi Nam Kinh được nữa? Sau khi hoãn kế hoạch du lịch, Bạch Gia Nguyệt đã làm gì?",
   "hint": "因为昨天她突然……，下周学校要……，所以……只好……。她已经把……取消了，打算等到……",
   "sample": "因为昨天她突然接到通知，下周学校要安排一次考试，所以周末她只好在家复习。旅行计划推迟后，她已经把机票和酒店取消了。虽然有点儿可惜，但她觉得学习更重要，打算等到考试结束后再找个时间去。",
   "sample_vn": "Vì hôm qua cô ấy đột nhiên nhận được thông báo, tuần sau trường sắp xếp một kỳ thi, nên cuối tuần cô ấy đành ở nhà ôn bài. Sau khi hoãn kế hoạch du lịch, cô ấy đã hủy vé máy bay và khách sạn. Tuy hơi tiếc nhưng cô ấy thấy việc học quan trọng hơn, định đợi thi xong sẽ tìm dịp khác đi.",
   "note": "Câu hỏi bài khoá 1; dùng câu chữ 把 (điểm 1)."
  },
  {
   "q_zh": "请根据提示复述课文一。",
   "q_vn": "Dựa vào gợi ý, kể lại bài khoá 1.",
   "hint": "白家月本来计划……，可是昨天突然……，下周学校要……。她周末需要……，旅游计划……。她已经把……，虽然……，但学习……。她打算……后，找个时间……。",
   "sample": "白家月本来计划周末去南京旅游，可是昨天突然接到通知，下周学校要安排一次考试。她周末需要在家复习，旅游计划只能推迟了。她已经把机票和酒店取消了，虽然有点儿可惜，但学习更重要。她打算等到考试结束后，找个时间再去。",
   "sample_vn": "Bạch Gia Nguyệt vốn định cuối tuần đi Nam Kinh du lịch, nhưng hôm qua đột nhiên nhận được thông báo tuần sau trường sắp xếp một kỳ thi. Cuối tuần cô ấy cần ở nhà ôn bài, kế hoạch du lịch chỉ có thể hoãn lại. Cô ấy đã hủy vé máy bay và khách sạn, tuy hơi tiếc nhưng việc học quan trọng hơn. Cô ấy định đợi thi xong sẽ tìm dịp khác đi.",
   "note": "Bài tập 复述 của sách (trang 64)."
  },
  {
   "q_zh": "王一雪建议怎么调整会议材料？对于变化，王一雪是怎么看的？",
   "q_vn": "Vương Nhất Tuyết đề nghị điều chỉnh tài liệu họp thế nào? Vương Nhất Tuyết nhìn nhận sự thay đổi ra sao?",
   "hint": "她建议再检查一下……，并且……，把内容……。她觉得有时候变化……，关键是……",
   "sample": "王一雪建议再检查一下有没有细节上的错误，并且试着增加一些例子，把内容准备得更全一些。对于变化，她觉得有时候变化不一定是坏事，关键是我们怎么去适应变化。",
   "sample_vn": "Vương Nhất Tuyết đề nghị kiểm tra lại xem có lỗi chi tiết nào không, đồng thời thử thêm vài ví dụ, chuẩn bị nội dung đầy đủ hơn. Về sự thay đổi, chị ấy cho rằng có lúc thay đổi chưa chắc là chuyện xấu, mấu chốt là chúng ta thích nghi với thay đổi thế nào.",
   "note": "Câu hỏi bài khoá 2; dùng 并且 (điểm 2) + ôn 对于 (Bài 14 · điểm 4)."
  },
  {
   "q_zh": "喜欢做计划的人一般是怎么安排事情的？事前做计划是好是坏？为什么？",
   "q_vn": "Người thích lập kế hoạch thường sắp xếp công việc thế nào? Lập kế hoạch từ trước là tốt hay xấu? Vì sao?",
   "hint": "他们会提前……，然后按照……。事前做计划是好是坏没有……。严格按照计划做事，常常能……；而不做计划，说不定……",
   "sample": "喜欢做计划的人会提前安排好每天要做的事情，然后按照详细的时间表去完成任务。事前做计划是好是坏没有标准答案。严格按照计划做事，常常能取得不错的效果；而不做计划，说不定也会带来新的发现。",
   "sample_vn": "Người thích lập kế hoạch sẽ sắp xếp trước những việc phải làm mỗi ngày, rồi làm theo thời gian biểu chi tiết để hoàn thành nhiệm vụ. Lập kế hoạch từ trước tốt hay xấu không có đáp án chuẩn. Làm nghiêm túc theo kế hoạch thường đạt hiệu quả khá tốt; còn không lập kế hoạch, không chừng cũng mang lại phát hiện mới.",
   "note": "Câu hỏi bài khoá 3; dùng 说不定 (điểm 3)."
  },
  {
   "q_zh": "请根据提示复述课文三。",
   "q_vn": "Dựa vào gợi ý, kể lại bài khoá 3.",
   "hint": "在生活和工作中，有的人喜欢做计划，他们会……，然后按照……。相反，也有一部分人……。其实，事前做计划是好是坏……。严格按照计划做事，常常能……；而不做计划，说不定……。无论做不做计划，只要既能……，又能……，就是……。",
   "sample": "在生活和工作中，有的人喜欢做计划，他们会提前安排好每天要做的事情，然后按照详细的时间表去完成任务，觉得这样做更有把握。相反，也有一部分人不爱做计划，他们认为随意一些也很好，想到什么就去做什么，感觉这样比较轻松。其实，事前做计划是好是坏没有标准答案。严格按照计划做事，常常能取得不错的效果；而不做计划，说不定也会带来新的发现。无论做不做计划，只要既能按时完成任务，又能根据情况灵活调整，就是适合自己的方式。",
   "sample_vn": "Trong cuộc sống và công việc, có người thích lập kế hoạch… Dù có lập kế hoạch hay không, chỉ cần vừa hoàn thành nhiệm vụ đúng hạn, vừa điều chỉnh linh hoạt theo tình hình, thì đó là cách phù hợp với mình.",
   "note": "Bài tập 复述 của sách (trang 68); ôn 无论 (Bài 12) + 既……又…… (Bài 4)."
  },
  {
   "q_zh": "“计划赶不上变化”是什么意思？我们为什么应该积极适应变化？",
   "q_vn": "“Kế hoạch không theo kịp thay đổi” nghĩa là gì? Vì sao chúng ta nên tích cực thích nghi với thay đổi?",
   "hint": "意思是你准备好了一切，却……，让你不得不……。因为生活中很多变化是……；学会接受变化、适应变化，不仅能……，也能……",
   "sample": "“计划赶不上变化”的意思是，有时候你准备好了一切，却突然出现了新情况，让你不得不改变计划。我们应该积极适应变化，因为生活中很多变化是无法提前知道的。学会接受变化、适应变化，不仅能锻炼自己解决问题的能力，也能让我们的生活更轻松。",
   "sample_vn": "“Kế hoạch không theo kịp thay đổi” nghĩa là có lúc bạn đã chuẩn bị xong mọi thứ, nhưng lại đột nhiên xuất hiện tình huống mới, khiến bạn buộc phải thay đổi kế hoạch. Chúng ta nên tích cực thích nghi với thay đổi, vì nhiều thay đổi trong cuộc sống không thể biết trước. Học cách chấp nhận và thích nghi với thay đổi không chỉ rèn luyện khả năng giải quyết vấn đề, mà còn giúp cuộc sống thoải mái hơn.",
   "note": "Câu hỏi bài khoá 4; dùng 却 (điểm 4) + ôn 不仅……也…… (Bài 3)."
  },
  {
   "q_zh": "小组辩论（正方）：全班分成两组，以“做计划是好是坏”为主题进行辩论。正方的观点是：做计划更好。请说说你们的观点和理由。",
   "q_vn": "Tranh luận nhóm (phe ủng hộ): Cả lớp chia làm hai nhóm, tranh luận với chủ đề “Lập kế hoạch là tốt hay xấu”. Quan điểm phe ủng hộ: lập kế hoạch thì tốt hơn. Hãy nêu quan điểm và lý do của nhóm.",
   "hint": "我们认为做计划更好。第一，……更有把握，并且……。第二，严格按照计划做事……。第三，计划赶不上变化，但……灵活调整。相反，如果不做计划，……却……，最后不得不……",
   "sample": "我们认为做计划更好。第一，做计划能让我们提前安排好每天要做的事情，按照详细的时间表去完成任务，做事更有把握，并且能节约很多时间。第二，严格按照计划做事，常常能取得不错的效果。比如考试前，我做了一份复习时间表，每天复习一部分内容，最后考得很好。第三，当然，计划常常赶不上变化，但有了计划，遇到变化时我们也知道哪些事情最重要，可以灵活调整。相反，如果不做计划，想到什么就做什么，看起来很轻松，却很容易忘了重要的事情，最后不得不加班完成任务。所以，我们认为做计划更好。",
   "sample_vn": "Chúng tôi cho rằng lập kế hoạch thì tốt hơn. Thứ nhất, lập kế hoạch giúp chúng ta sắp xếp trước những việc phải làm mỗi ngày, làm theo thời gian biểu chi tiết, làm việc nắm chắc hơn, hơn nữa tiết kiệm được nhiều thời gian. Thứ hai, làm nghiêm túc theo kế hoạch thường đạt hiệu quả khá tốt. Ví dụ trước kỳ thi, tôi lập một thời gian biểu ôn tập, mỗi ngày ôn một phần nội dung, cuối cùng thi rất tốt. Thứ ba, tất nhiên kế hoạch thường không theo kịp thay đổi, nhưng có kế hoạch rồi thì khi gặp thay đổi ta cũng biết việc gì quan trọng nhất, có thể điều chỉnh linh hoạt. Ngược lại, nếu không lập kế hoạch, nghĩ gì làm nấy, trông thì thoải mái nhưng lại rất dễ quên việc quan trọng, cuối cùng buộc phải tăng ca để hoàn thành nhiệm vụ. Vì vậy, chúng tôi cho rằng lập kế hoạch thì tốt hơn.",
   "note": "Hoạt động 任务活动 · 小组辩论 (tranh luận nhóm) của sách, trang 72 — phe ủng hộ (正方); dùng 并且, 却, 相反, 不得不."
  },
  {
   "q_zh": "小组辩论（反方）：反方的观点是：随意些更好。请说说你们的观点和理由。",
   "q_vn": "Tranh luận nhóm (phe phản đối): Quan điểm phe phản đối: tùy hứng một chút thì tốt hơn. Hãy nêu quan điểm và lý do của nhóm.",
   "hint": "我们认为随意些更好。首先，生活中很多变化是无法……，你准备好了一切，却……。其次，随意一些……比较轻松……，说不定……。比如……。最后，我们不是说……，而是……",
   "sample": "我们认为随意些更好。首先，生活中很多变化是无法提前知道的，你准备好了一切，却常常会突然出现新情况。计划做得再详细，也赶不上变化，这样反而会让人感到失望。其次，随意一些，想到什么就做什么，感觉比较轻松，压力也小，并且不做计划，说不定还会带来新的发现。比如有一次，我本来打算去旅行，后来没去成，于是在家门口的小公园逛了逛，发现那里也很有趣。最后，我们不是说什么都不准备，而是觉得不用把每件事都安排得那么严格，只要能按时完成任务就好。所以，我们认为随意些更好。",
   "sample_vn": "Chúng tôi cho rằng tùy hứng một chút thì tốt hơn. Trước hết, nhiều thay đổi trong cuộc sống là không thể biết trước, bạn chuẩn bị xong mọi thứ nhưng lại thường đột nhiên xuất hiện tình huống mới. Kế hoạch có chi tiết đến đâu cũng không theo kịp thay đổi, như vậy lại càng khiến người ta thất vọng. Thứ hai, tùy hứng một chút, nghĩ gì làm nấy, cảm thấy khá thoải mái, áp lực cũng nhỏ, hơn nữa không lập kế hoạch, biết đâu còn mang lại phát hiện mới. Ví dụ có lần tôi vốn định đi du lịch, sau đó không đi được, thế là đi dạo công viên nhỏ trước cửa nhà, phát hiện ở đó cũng rất thú vị. Cuối cùng, chúng tôi không phải nói là không chuẩn bị gì cả, mà là thấy không cần sắp xếp mọi việc quá cứng nhắc, chỉ cần hoàn thành nhiệm vụ đúng hạn là được. Vì vậy, chúng tôi cho rằng tùy hứng một chút thì tốt hơn.",
   "note": "Hoạt động 任务活动 · 小组辩论 của sách, trang 72 — phe phản đối (反方); dùng 却, 说不定, 并且, ôn 首先……其次…… (Bài 14) + 不是……而是…… (Bài 11)."
  }
 ]
};
var translateData = [
 {
  "vi": "Em đã hủy vé máy bay và khách sạn rồi. Tuy hơi tiếc, nhưng việc học quan trọng hơn.",
  "zh": "我已经把机票和酒店取消了。虽然有点儿可惜，但学习更重要。",
  "py": "Wǒ yǐjīng bǎ jīpiào hé jiǔdiàn qǔxiāo le. Suīrán yǒudiǎnr kěxī, dàn xuéxí gèng zhòngyào."
 },
 {
  "vi": "Kiểm tra lại xem có lỗi ở chi tiết không, đồng thời thử thêm một vài ví dụ.",
  "zh": "再检查一下有没有细节上的错误，并且试着增加一些例子。",
  "py": "Zài jiǎnchá yíxià yǒu méiyǒu xìjié shàng de cuòwù, bìngqiě shì zhe zēngjiā yìxiē lìzi."
 },
 {
  "vi": "Không lập kế hoạch, không chừng cũng sẽ mang lại những phát hiện mới.",
  "zh": "不做计划，说不定也会带来新的发现。",
  "py": "Bú zuò jìhuà, shuōbudìng yě huì dàilái xīn de fāxiàn."
 },
 {
  "vi": "Bạn đã chuẩn bị xong mọi thứ, nhưng lại đột nhiên xuất hiện tình huống mới.",
  "zh": "你准备好了一切，却突然出现了新情况。",
  "py": "Nǐ zhǔnbèi hǎo le yíqiè, què tūrán chūxiàn le xīn qíngkuàng."
 },
 {
  "vi": "Đợi thi xong, em hãy tìm dịp khác mà đi.",
  "zh": "等到考试结束后，你再找个时间去。",
  "py": "Děngdào kǎoshì jiéshù hòu, nǐ zài zhǎo gè shíjiān qù."
 },
 {
  "vi": "Có lúc thay đổi chưa chắc là chuyện xấu, then chốt là chúng ta thích nghi với thay đổi thế nào.",
  "zh": "有时候变化不一定是坏事，关键是我们怎么去适应变化。",
  "py": "Yǒushíhou biànhuà bùyídìng shì huàishì, guānjiàn shì wǒmen zěnme qù shìyìng biànhuà."
 }
];
var translateDataRev = [
 {
  "vi": "Đúng là kế hoạch không theo kịp thay đổi!",
  "zh": "真是计划赶不上变化啊！",
  "py": "Zhēnshì jìhuà gǎn bu shàng biànhuà a!"
 },
 {
  "vi": "Thời gian đã sắp xếp xong cả rồi, sao nói đổi là đổi luôn vậy?",
  "zh": "时间都安排好了，怎么说变就变了？",
  "py": "Shíjiān dōu ānpái hǎo le, zěnme shuō biàn jiù biàn le?"
 },
 {
  "vi": "Làm việc nghiêm ngặt theo kế hoạch thường đạt được hiệu quả khá tốt.",
  "zh": "严格按照计划做事，常常能取得不错的效果。",
  "py": "Yángé ànzhào jìhuà zuòshì, chángcháng néng qǔdé búcuò de xiàoguǒ."
 },
 {
  "vi": "Không gặp được bạn, thế là ở nhà xem một bộ phim, tâm trạng cũng trở nên rất vui vẻ.",
  "zh": "没见到朋友，于是在家观看了一部电影，心情也变得很愉快。",
  "py": "Méi jiàndào péngyou, yúshì zài jiā guānkàn le yí bù diànyǐng, xīnqíng yě biànde hěn yúkuài."
 },
 {
  "vi": "Điều chúng ta cần làm là học cách chấp nhận thay đổi, thích nghi với thay đổi.",
  "zh": "我们要做的就是学会接受变化、适应变化。",
  "py": "Wǒmen yào zuò de jiùshì xuéhuì jiēshòu biànhuà, shìyìng biànhuà."
 }
];
var sgkData = [
 {
  "kieu": "kho",
  "de": "选词填空（一）· 综合练习",
  "vn": "Chọn từ thích hợp điền vào chỗ trống (Bài tập tổng hợp, sách trang 71). Sách 4下 chưa có đáp án — đây là đáp án tham khảo.",
  "dapSgk": false,
  "tu": [
   "等到",
   "关键",
   "例子",
   "本来",
   "确实",
   "可惜"
  ],
  "cau": [
   {
    "s": "要想提高成绩，＿＿是坚持每天复习。",
    "dap": [
     "关键"
    ]
   },
   {
    "s": "他＿＿说得很对，我也同意他的看法。",
    "dap": [
     "确实"
    ]
   },
   {
    "s": "你没能参加文化节活动，真是太＿＿了。",
    "dap": [
     "可惜"
    ]
   },
   {
    "s": "＿＿工作不那么忙了，我想和家人去旅游。",
    "dap": [
     "等到"
    ]
   },
   {
    "s": "我＿＿打算周末出去玩，可是后来有事，就没去成。",
    "dap": [
     "本来"
    ]
   },
   {
    "s": "王老师讲课时常常会用一些＿＿，帮助学生们更好地理解。",
    "dap": [
     "例子"
    ]
   }
  ]
 },
 {
  "kieu": "kho",
  "de": "选词填空（二）· 综合练习",
  "vn": "Chọn từ thích hợp điền vào chỗ trống (hội thoại, sách trang 71). Đáp án tham khảo.",
  "dapSgk": false,
  "tu": [
   "约",
   "标准",
   "相反",
   "详细",
   "无法",
   "一切"
  ],
  "cau": [
   {
    "s": "A：这次公司招聘的＿＿是什么？　B：至少有五年的工作经验，并且有较强的个人工作能力。",
    "dap": [
     "标准"
    ]
   },
   {
    "s": "A：老师，这个问题可以讲得再＿＿一点儿吗？　B：好的，我再给你讲一遍。",
    "dap": [
     "详细"
    ]
   },
   {
    "s": "A：很久没有见到你了，你最近过得怎么样？　B：还不错，＿＿都很顺利。",
    "dap": [
     "一切"
    ]
   },
   {
    "s": "A：我以为他会同意，没想到结果正好＿＿。　B：是啊，看来他还是不太愿意参加。",
    "dap": [
     "相反"
    ]
   },
   {
    "s": "A：你什么时候有时间？我想＿＿你喝杯咖啡。　B：好啊，我也正想跟你聊聊呢。明天中午怎么样？",
    "dap": [
     "约"
    ]
   },
   {
    "s": "A：经理，我明天有事，＿＿参加会议，想跟您请假。　B：好的，那你提前把工作安排好吧。",
    "dap": [
     "无法"
    ]
   }
  ]
 },
 {
  "kieu": "kho",
  "de": "选择合适的内容完成短文",
  "vn": "Chọn nội dung thích hợp (A–D) hoàn thành đoạn văn (sách trang 71). Đáp án tham khảo.",
  "dapSgk": false,
  "tu": [
   "虽然有点儿失望",
   "天气忽然变阴了",
   "他只好取消了爬山的计划",
   "需要学会接受新的情况"
  ],
  "cau": [
   {
    "s": "小李周末本来计划和朋友去爬山，还提前准备好了水和食物。可是周六早晨，＿＿，看起来可能会下雨。为了安全，＿＿。＿＿，但小李重新做了计划，用原来爬山的时间完成了一些学习任务。周末结束后，他觉得这样安排也不错。这次经历让他明白，遇到变化时，＿＿。只要灵活调整计划，就能把事情安排好，让自己过得轻松、愉快。",
    "dap": [
     "天气忽然变阴了",
     "他只好取消了爬山的计划",
     "虽然有点儿失望",
     "需要学会接受新的情况"
    ]
   }
  ]
 },
 {
  "kieu": "gx",
  "de": "看图，用词语造句",
  "vn": "Nhìn tranh, đặt câu với từ cho sẵn (sách trang 72; câu dưới đây là câu mẫu tham khảo — câu của em đúng ngữ pháp, hợp tranh là đạt).",
  "cau": [
   {
    "anh": "/images/hsk4v3/bai-16/bt-1.webp",
    "s": "",
    "tu": "逛",
    "dap": "周末，他们俩一起去商场逛了逛，买了不少东西。",
    "giai": "逛 + nơi chốn (逛商场, 逛街); V了V = dạo một vòng (ôn Bài 15 · điểm 3)."
   },
   {
    "anh": "/images/hsk4v3/bai-16/bt-2.webp",
    "s": "",
    "tu": "有趣",
    "dap": "妈妈给孩子讲了一个很有趣的故事，孩子听得特别开心。",
    "giai": "有趣 làm định ngữ (有趣的故事); bổ ngữ trình độ 听得特别开心."
   },
   {
    "anh": "/images/hsk4v3/bai-16/bt-3.webp",
    "s": "",
    "tu": "错误",
    "dap": "经理发现材料里有几个错误，让他把这些错误改了。",
    "giai": "有错误 / 改错误; kết hợp câu 把 + O + V + 了 (điểm 1)."
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
  "tieuDe": "Viết lời khuyên cho người bạn hay không hoàn thành nhiệm vụ (写作)",
  "gioiThieu": "Đề 写作 của sách HSK 4 (3.0) yêu cầu viết một đoạn văn ngắn (ít nhất 140 chữ) — lần này là viết lời khuyên cho một người bạn dạo này luôn không hoàn thành nhiệm vụ, dựa vào nội dung buổi tranh luận “lập kế hoạch tốt hay xấu”, giống phần 书写 của đề thi HSK 4 mới.",
  "buoc": [
   "Đọc kỹ đề: viết cho MỘT người bạn, nội dung là LỜI KHUYÊN (建议), dựa vào ý kiến của cả hai phe trong buổi tranh luận (làm kế hoạch / linh hoạt).",
   "Lập dàn ý theo các câu hỏi gợi ý: vấn đề của bạn → cách lập kế hoạch → cách làm theo kế hoạch → khi gặp thay đổi → lời động viên.",
   "Dùng từ mới và 4 điểm ngữ pháp của bài (khung “Từ, cấu trúc nên dùng”): 把……了, 并且, 说不定, 却.",
   "Sắp xếp lời khuyên bằng 首先 / 其次 / 另外 / 最后 (ôn Bài 14), giọng thân mật như nói với bạn (你……吧).",
   "Mở đầu bằng lời chào và nêu vấn đề, kết bằng lời động viên (说不定……); tự soát số chữ (≥ 140) và lỗi chữ Hán trước khi nộp."
  ]
 },
 "de": "你的一个朋友最近总是完不成任务。请你根据上面辩论的内容，给他/她写一份建议，不少于140字。",
 "prompt": "Một người bạn của em dạo này luôn không hoàn thành được nhiệm vụ. Hãy dựa vào nội dung buổi tranh luận ở trên, viết cho bạn ấy một bản lời khuyên, không ít hơn 140 chữ.",
 "dan": [
  {
   "hoi": "你的朋友遇到了什么问题？",
   "goiY": "听说你最近总是完不成任务，压力很大……"
  },
  {
   "hoi": "你建议他/她怎样做计划？",
   "goiY": "首先，每天早晨做一个详细的时间表，并且……"
  },
  {
   "hoi": "按照计划做事时要注意什么？",
   "goiY": "其次，要严格按照计划做事，别想到什么就做什么……"
  },
  {
   "hoi": "遇到变化时应该怎么办？",
   "goiY": "计划常常赶不上变化，……这时候不要失望，关键是灵活调整"
  },
  {
   "hoi": "最后你想对他/她说什么？",
   "goiY": "只要你既能……，又能……，说不定……"
  }
 ],
 "tuNen": [
  "计划",
  "时间表",
  "详细",
  "严格",
  "把握",
  "调整",
  "灵活",
  "关键",
  "增加",
  "推迟",
  "取消",
  "接受",
  "失望",
  "轻松",
  "一切",
  "不得不"
 ],
 "cauTruc": [
  {
   "ten": "……，并且……",
   "nhan": "并且",
   "vd": "每天早晨做一个详细的时间表，并且把最重要的事情放在第一位。",
   "khi": "Nêu lời khuyên thứ nhất và bổ sung thêm (điểm 2)."
  },
  {
   "ten": "把 + O + V + 了",
   "nhan": "把",
   "vd": "每完成一件事，就把它从时间表上删了。",
   "khi": "Gợi ý một cách làm cụ thể (câu chữ 把, điểm 1)."
  },
  {
   "ten": "……，却……",
   "nhan": "却",
   "vd": "有时候你准备好了一切，计划却忽然变了。",
   "khi": "Nói về thay đổi bất ngờ (điểm 4)."
  },
  {
   "ten": "首先……，其次……",
   "nhan": "首先",
   "vd": "首先，要做好计划；其次，要严格按照计划做事。",
   "khi": "Sắp xếp các lời khuyên theo thứ tự (ôn Bài 14 · điểm 2)."
  },
  {
   "ten": "说不定……",
   "nhan": "说不定",
   "vd": "只要坚持下去，说不定下个月你就能按时完成所有任务了。",
   "khi": "Câu KẾT: động viên bạn (điểm 3)."
  }
 ],
 "checklist": [
  "Đủ ít nhất 140 chữ Hán chưa?",
  "Đã viết đúng dạng LỜI KHUYÊN cho một người bạn (có lời chào, nêu vấn đề, lời khuyên cụ thể, lời động viên) chưa?",
  "Đã dùng ý của cả hai phe tranh luận (lập kế hoạch + điều chỉnh linh hoạt) chưa?",
  "Đã dùng ít nhất 3 trong 4 điểm ngữ pháp của bài (把……了、并且、说不定、却) và ít nhất 6 từ mới chưa?",
  "Các lời khuyên có được sắp xếp rõ ràng bằng 首先 / 其次 / 另外 / 最后 chưa?"
 ],
 "model": {
  "zh": "小林，你好！听说你最近总是不能按时完成任务，压力很大，我想给你提几个建议。首先，每天早晨花十分钟做一个详细的时间表，并且把最重要的事情放在第一位，给每件事都留出足够的时间。其次，要尽量按照计划做事，别想到什么就做什么，这样做事才更有把握。不过，计划常常赶不上变化，有时候你准备好了一切，却忽然增加了新的任务，或者会议时间推迟了。这时候不要失望，也不用着急，关键是根据情况灵活调整计划。另外，每完成一件事，就把它从时间表上删了，你会觉得越来越轻松。最后，我相信只要你既能坚持计划，又能接受变化，说不定下个月你就能按时完成所有任务了。加油！",
  "py": "Xiǎo Lín, nǐhǎo! Tīngshuō nǐ zuìjìn zǒngshì bù néng ànshí wánchéng rènwu, yālì hěn dà, wǒ xiǎng gěi nǐ tí jǐ gè jiànyì. Shǒuxiān, měitiān zǎochen huā shí fēnzhōng zuò yí gè xiángxì de shíjiānbiǎo, bìngqiě bǎ zuì zhòngyào de shìqing fàngzài dì yí wèi, gěi měi jiàn shì dōu liúchū zúgòu de shíjiān. Qícì, yào jǐnliàng ànzhào jìhuà zuòshì, bié xiǎngdào shénme jiù zuò shénme, zhèyàng zuòshì cái gèng yǒu bǎwò. Búguò, jìhuà chángcháng gǎn bu shàng biànhuà, yǒushíhou nǐ zhǔnbèi hǎo le yíqiè, què hūrán zēngjiā le xīn de rènwu, huòzhě huìyì shíjiān tuīchí le. Zhè shíhou búyào shīwàng, yě búyòng zháojí, guānjiàn shì gēnjù qíngkuàng línghuó tiáozhěng jìhuà. Lìngwài, měi wánchéng yí jiàn shì, jiù bǎ tā cóng shíjiānbiǎo shàng shān le, nǐ huì juéde yuèláiyuè qīngsōng. Zuìhòu, wǒ xiāngxìn zhǐyào nǐ jì néng jiānchí jìhuà, yòu néng jiēshòu biànhuà, shuōbudìng xià gè yuè nǐ jiù néng ànshí wánchéng suǒyǒu rènwu le. Jiāyóu!"
 }
};
