// HSK 4 (3.0) · Bai 8 — sinh boi tools/hsk4v3/gan.js tu tools/hsk4v3/bai-8/ (dung sua tay).
var vocabData = [
 {
  "n": 1,
  "zh": "紧张",
  "py": "jǐnzhāng",
  "pos": "Tính từ",
  "vn": "căng thẳng, hồi hộp; (công việc) dồn dập; khan hiếm",
  "hv": "khẩn trương",
  "em": "😰",
  "lesson": 1,
  "explain": [
   "Chỉ trạng thái tinh thần căng thẳng, hồi hộp (考试前很紧张), hoặc công việc / học tập dồn dập, nhiều việc, không có thời gian nghỉ (学习太紧张了).",
   "Bẫy Hán Việt: 紧张 đọc là “khẩn trương” nhưng KHÔNG có nghĩa “nhanh lên, gấp gáp” như tiếng Việt — muốn nói “khẩn trương lên” thì dùng 快点儿 / 抓紧时间."
  ],
  "usage": "学习 / 工作 + 很紧张 · 感到紧张 · 别紧张 · 紧张的气氛.",
  "collo": [
   "学习紧张",
   "别紧张",
   "感到紧张",
   "时间很紧张"
  ],
  "colloFull": [
   {
    "zh": "学习紧张",
    "py": "Xuéxí jǐnzhāng",
    "vn": "học hành căng thẳng"
   },
   {
    "zh": "别紧张",
    "py": "Bié jǐnzhāng",
    "vn": "đừng căng thẳng"
   },
   {
    "zh": "感到紧张",
    "py": "Gǎndào jǐnzhāng",
    "vn": "cảm thấy hồi hộp"
   },
   {
    "zh": "时间很紧张",
    "py": "Shíjiān hěn jǐnzhāng",
    "vn": "thời gian rất gấp"
   }
  ],
  "patterns": [
   {
    "s": "Sub + 很 / 太 + 紧张",
    "m": "Tính từ làm vị ngữ"
   },
   {
    "s": "紧张 ≠ “khẩn trương” (vội)",
    "m": "Bẫy Hán Việt: 紧张 = căng thẳng, hồi hộp"
   }
  ],
  "ex_zh": "家月，最近学习太紧张了，咱们明天出去放松放松吧。",
  "ex_py": "Jiāyuè, zuìjìn xuéxí tài jǐnzhāng le, zánmen míngtiān chūqù fàngsōng fàngsōng ba.",
  "ex_vn": "Gia Nguyệt, dạo này học hành căng thẳng quá, ngày mai chúng mình ra ngoài thư giãn chút đi.",
  "exList": [
   {
    "zh": "家月，最近学习太紧张了，咱们明天出去放松放松吧。",
    "py": "Jiāyuè, zuìjìn xuéxí tài jǐnzhāng le, zánmen míngtiān chūqù fàngsōng fàngsōng ba.",
    "vn": "Gia Nguyệt, dạo này học hành căng thẳng quá, ngày mai chúng mình ra ngoài thư giãn chút đi."
   },
   {
    "zh": "第一次参加比赛，他紧张得说不出话来。",
    "py": "Dì yī cì cānjiā bǐsài, tā jǐnzhāng de shuō bù chū huà lái.",
    "vn": "Lần đầu tham gia thi đấu, cậu ấy hồi hộp đến mức không nói nên lời."
   }
  ],
  "hanzi": [
   {
    "c": "紧",
    "p": "jǐn",
    "type": "上下结构 · Trên-dưới (giản thể)",
    "st": 10,
    "ord": "nét liền",
    "rad": "糸 (mịch, biến thể)",
    "mean": "chặt, căng",
    "tip": "Chữ mô phỏng sợi dây bị KÉO CĂNG, THẮT CHẶT → mở rộng thành trạng thái tâm lý CĂNG THẲNG.",
    "cf": "紧 dễ nhầm với 坚 (jiān – \"kiên cố\")",
    "w": "紧张 / 要紧 / 抓紧"
   },
   {
    "c": "张",
    "p": "zhāng",
    "type": "形声字 · Chữ hình thanh",
    "st": 7,
    "ord": "弓 (ngang gập, ngang, sổ gập gập móc) → 长 (phẩy, ngang, sổ hất, mác)",
    "rad": "弓 (cung – cái cung)",
    "mean": "giương, mở ra; tờ, tấm",
    "tip": "弓 (cái cung) + 长 (chỉ âm): kéo căng dây cung → giương ra, mở ra. 张嘴 = há miệng. Ôn: 张 lượng từ “tấm, tờ” (HSK3 Bài 2), 紧张 (HSK3 Bài 9).",
    "cf": "长 zhǎng (长得 – HSK3 Bài 1) — không có 弓",
    "w": "张嘴 / 一张照片 / 紧张"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Công việc dạo này căng thẳng quá, tôi ngay cả thời gian ăn cơm cũng không có.",
    "answer": "最近工作太紧张了，我甚至连吃饭的时间都没有。",
    "answerPy": "Zuìjìn gōngzuò tài jǐnzhāng le, wǒ shènzhì lián chīfàn de shíjiān dōu méiyǒu.",
    "note": "Ôn 甚至 (Bài 3 · điểm 3).",
    "pair": "甚至连……都……"
   },
   {
    "promptLang": "vi",
    "prompt": "Nếu bạn căng thẳng thì hít thở sâu vài cái là được.",
    "answer": "要是你紧张，深呼吸几次就是了。",
    "answerPy": "Yàoshi nǐ jǐnzhāng, shēn hūxī jǐ cì jiù shì le.",
    "note": "Ôn 要是……就…… (Bài 1) + ×就是了 (Bài 2 · điểm 1).",
    "pair": "要是……，×就是了"
   }
  ]
 },
 {
  "n": 2,
  "zh": "放松",
  "py": "fàngsōng",
  "pos": "Động từ",
  "vn": "thư giãn, thả lỏng",
  "hv": "phóng tùng",
  "em": "🧘",
  "lesson": 1,
  "explain": [
   "Làm cho tinh thần hoặc cơ thể bớt căng, nghỉ ngơi cho thoải mái. Hay lặp lại thành 放松放松 (thư giãn một chút) — kiểu lặp ABAB của động từ hai âm tiết."
  ],
  "usage": "放松一下 / 放松放松 · 放松自己 · 放松心情 · 该放松时就放松.",
  "collo": [
   "放松放松",
   "放松自己",
   "放松心情",
   "好好放松"
  ],
  "colloFull": [
   {
    "zh": "放松放松",
    "py": "Fàngsōng fàngsōng",
    "vn": "thư giãn một chút"
   },
   {
    "zh": "放松自己",
    "py": "Fàngsōng zìjǐ",
    "vn": "thả lỏng bản thân"
   },
   {
    "zh": "放松心情",
    "py": "Fàngsōng xīnqíng",
    "vn": "thư thái tinh thần"
   },
   {
    "zh": "好好放松",
    "py": "Hǎo hǎo fàngsōng",
    "vn": "thư giãn cho thoả"
   }
  ],
  "patterns": [
   {
    "s": "放松 + 一下 / 放松放松",
    "m": "Lặp ABAB: làm nhẹ, “… một chút”"
   },
   {
    "s": "紧张 ↔ 放松",
    "m": "Cặp trái nghĩa: căng thẳng ↔ thư giãn"
   }
  ],
  "ex_zh": "家月，最近学习太紧张了，咱们明天出去放松放松吧。",
  "ex_py": "Jiāyuè, zuìjìn xuéxí tài jǐnzhāng le, zánmen míngtiān chūqù fàngsōng fàngsōng ba.",
  "ex_vn": "Gia Nguyệt, dạo này học căng thẳng quá, ngày mai mình ra ngoài thư giãn chút đi.",
  "exList": [
   {
    "zh": "家月，最近学习太紧张了，咱们明天出去放松放松吧。",
    "py": "Jiāyuè, zuìjìn xuéxí tài jǐnzhāng le, zánmen míngtiān chūqù fàngsōng fàngsōng ba.",
    "vn": "Gia Nguyệt, dạo này học căng thẳng quá, ngày mai mình ra ngoài thư giãn chút đi."
   },
   {
    "zh": "工作了一整天，晚上听听音乐放松一下。",
    "py": "Gōngzuò le yì zhěng tiān, wǎnshang tīng tīng yīnyuè fàngsōng yíxià.",
    "vn": "Làm việc cả ngày, buổi tối nghe nhạc thư giãn một chút."
   }
  ],
  "hanzi": [
   {
    "c": "放",
    "p": "fàng",
    "type": "形声字 · Chữ hình thanh",
    "st": 8,
    "ord": "方 → 攵",
    "rad": "攵 (phộc – đánh nhẹ)",
    "mean": "thả, đặt, để",
    "tip": "攵 (tay cầm roi) + 方 (chỉ âm): xua đi, thả ra → buông, đặt xuống. Ôn: 放假 (HSK3 Bài 6).",
    "cf": "房 fáng (房间 – HSK1 Bài 8) — cùng phần 方",
    "w": "放 / 放心 / 放假"
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
    "prompt": "Thi xong rồi, cuối tuần này chúng ta đi ngoại ô thư giãn một chút đi.",
    "answer": "考完试了，这个周末咱们去郊区放松放松吧。",
    "answerPy": "Kǎo wán shì le, zhège zhōumò zánmen qù jiāoqū fàngsōng fàngsōng ba.",
    "note": "Lặp ABAB của động từ hai âm tiết.",
    "pair": "V V (ABAB)"
   },
   {
    "promptLang": "vi",
    "prompt": "Cứ đến cuối tuần, anh ấy hoặc đi leo núi hoặc ở nhà xem sách, như thế mới thư giãn được.",
    "answer": "一到周末，他不是去爬山就是在家看书，这样才能放松。",
    "answerPy": "Yí dào zhōumò, tā bú shì qù páshān jiù shì zài jiā kàn shū, zhèyàng cái néng fàngsōng.",
    "note": "Ôn 不是A就是B (HSK 3) + 一……就……",
    "pair": "一……就……"
   }
  ]
 },
 {
  "n": 3,
  "zh": "呀",
  "py": "yā",
  "pos": "Thán từ",
  "vn": "ôi, a, chà (tỏ ý ngạc nhiên)",
  "hv": "nha",
  "em": "😮",
  "lesson": 1,
  "explain": [
   "Thán từ đứng ĐẦU câu, đọc thanh 1 (yā), biểu thị ngạc nhiên, bất ngờ — giống tiếng Việt “Ôi!”, “A!”. Khi đứng CUỐI câu thì là trợ từ ngữ khí, đọc nhẹ ya (= 啊), ví dụ 是呀, 好呀."
  ],
  "usage": "呀，…… (đầu câu) · 是呀 / 好呀 / 对呀 (cuối câu, đọc nhẹ).",
  "collo": [
   "呀，下雨了",
   "呀，是你啊",
   "好呀",
   "是呀"
  ],
  "colloFull": [
   {
    "zh": "呀，下雨了",
    "py": "Yā, xiàyǔ le",
    "vn": "ôi, mưa rồi"
   },
   {
    "zh": "呀，是你啊",
    "py": "Yā, shì nǐ a",
    "vn": "a, là cậu à"
   },
   {
    "zh": "好呀",
    "py": "Hǎo yā",
    "vn": "được chứ (cuối câu)"
   },
   {
    "zh": "是呀",
    "py": "Shì yā",
    "vn": "đúng thế (cuối câu)"
   }
  ],
  "patterns": [
   {
    "s": "呀，+ câu cảm thán",
    "m": "Đầu câu: ngạc nhiên, đọc yā"
   },
   {
    "s": "Câu + 呀",
    "m": "Cuối câu: ngữ khí, đọc nhẹ ya"
   }
  ],
  "ex_zh": "呀，正好我也想出去呢。",
  "ex_py": "Yā, zhènghǎo wǒ yě xiǎng chūqù ne.",
  "ex_vn": "Ôi, vừa hay tớ cũng đang muốn ra ngoài đây.",
  "exList": [
   {
    "zh": "呀，正好我也想出去呢。",
    "py": "Yā, zhènghǎo wǒ yě xiǎng chūqù ne.",
    "vn": "Ôi, vừa hay tớ cũng đang muốn ra ngoài đây."
   },
   {
    "zh": "呀，下雪了！外边真漂亮。",
    "py": "Yā, xià xuě le! Wàibian zhēn piàoliang.",
    "vn": "A, tuyết rơi rồi! Bên ngoài đẹp quá."
   }
  ],
  "hanzi": [
   {
    "c": "呀",
    "p": "ya",
    "type": "左右结构 · Trái-phải",
    "st": 7,
    "ord": "口 trái → 牙 phải",
    "rad": "口 (khẩu)",
    "mean": "trợ từ",
    "tip": "Miệng 口 + 牙(biểu âm) → tiếng thốt ra \"ya\". 啊 → 呀 khi âm trước kết thúc bằng a/e/i/o/ü (的呀, 谁呀).",
    "cf": "牙 (yá – răng)",
    "w": "呀 / 哎呀"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Ôi, đã 11 giờ rồi, muộn thế này tôi về không kịp mất.",
    "answer": "呀，已经十一点了，这么晚了，我回不去了。",
    "answerPy": "Yā, yǐjīng shí yī diǎn le, zhème wǎn le, wǒ huí bú qù le.",
    "note": "Ôn V不了 (Bài 4 · điểm 1) — ở đây dùng 回不去 (bổ ngữ khả năng).",
    "pair": "呀，……"
   },
   {
    "promptLang": "vi",
    "prompt": "Ôi, cậu đến rồi! Đồ cứ để ở đây là được, đừng khách sáo.",
    "answer": "呀，你来了！东西放这儿就是了，别客气。",
    "answerPy": "Yā, nǐ lái le! Dōngxi fàng zhèr jiù shì le, bié kèqi.",
    "note": "Ôn ×就是了 (Bài 2 · điểm 1).",
    "pair": "×就是了"
   }
  ]
 },
 {
  "n": 4,
  "zh": "不管",
  "py": "bùguǎn",
  "pos": "Liên từ",
  "vn": "bất kể, cho dù, dù … (thế nào) đi nữa",
  "hv": "bất quản",
  "em": "🔄",
  "lesson": 1,
  "explain": [
   "Liên từ mở đầu câu điều kiện: dù điều kiện thay đổi thế nào, kết quả vẫn KHÔNG đổi. Sau 不管 phải là một câu có từ để hỏi (哪儿, 什么, 谁, 多……) hoặc dạng lựa chọn (A还是B, 大不大); vế sau có 都 / 也."
  ],
  "usage": "不管 + 谁 / 什么 / 哪儿 / 多…… / A还是B，(Sub) + 都 / 也 + ……",
  "collo": [
   "不管去哪儿",
   "不管多忙",
   "不管是谁",
   "不管怎么样"
  ],
  "colloFull": [
   {
    "zh": "不管去哪儿",
    "py": "Bùguǎn qù nǎr",
    "vn": "bất kể đi đâu"
   },
   {
    "zh": "不管多忙",
    "py": "Bùguǎn duō máng",
    "vn": "dù bận thế nào"
   },
   {
    "zh": "不管是谁",
    "py": "Bùguǎn shì shuí",
    "vn": "bất kể là ai"
   },
   {
    "zh": "不管怎么样",
    "py": "Bùguǎn zěnmeyàng",
    "vn": "dù sao đi nữa"
   }
  ],
  "patterns": [
   {
    "s": "不管 + từ để hỏi / A还是B，都 / 也……",
    "m": "Điều kiện bất kỳ — kết quả không đổi"
   },
   {
    "s": "不管 ≠ 虽然",
    "m": "虽然 + sự thật cụ thể; 不管 + điều kiện chưa xác định"
   }
  ],
  "ex_zh": "不管去哪儿，能放松的地方都行。",
  "ex_py": "Bùguǎn qù nǎr, néng fàngsōng de dìfang dōu xíng.",
  "ex_vn": "Đi đâu cũng được, miễn là nơi có thể thư giãn.",
  "exList": [
   {
    "zh": "不管去哪儿，能放松的地方都行。",
    "py": "Bùguǎn qù nǎr, néng fàngsōng de dìfang dōu xíng.",
    "vn": "Đi đâu cũng được, miễn là nơi có thể thư giãn."
   },
   {
    "zh": "不管天气好不好，他每天都去跑步。",
    "py": "Bùguǎn tiānqì hǎo bu hǎo, tā měi tiān dōu qù pǎobù.",
    "vn": "Bất kể thời tiết tốt hay không, ngày nào anh ấy cũng đi chạy bộ."
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
    "c": "管",
    "p": "guǎn",
    "type": "上下结构 · Trên-dưới",
    "st": 14,
    "ord": "⺮ trên → 官 dưới",
    "rad": "⺮ (trúc)",
    "mean": "ống; quản",
    "tip": "Trúc ⺮ + 官(quan) → ống trúc; quan cầm ống → QUẢN LÝ. 不管 (Bài 3) = bất kể.",
    "cf": "官 (guān – quan)",
    "w": "管理 / 不管 / 管"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Bất kể gặp phải vấn đề gì, cứ gọi điện cho tôi là được.",
    "answer": "不管遇到什么问题，给我打电话就是了。",
    "answerPy": "Bùguǎn yùdào shénme wèntí, gěi wǒ dǎdiànhuà jiù shì le.",
    "note": "Ôn ×就是了 (Bài 2 · điểm 1).",
    "pair": "不管……，×就是了"
   },
   {
    "promptLang": "vi",
    "prompt": "Dù bận đến đâu, mỗi tuần tôi cũng phải tập thể dục ít nhất hai lần.",
    "answer": "不管多忙，我每个星期也要至少锻炼两次。",
    "answerPy": "Bùguǎn duō máng, wǒ měi gè xīngqī yě yào zhìshǎo duànliàn liǎng cì.",
    "note": "Ôn 至少 (Bài 5 · điểm 1).",
    "pair": "不管多……，也……"
   }
  ]
 },
 {
  "n": 5,
  "zh": "郊区",
  "py": "jiāoqū",
  "pos": "Danh từ",
  "vn": "vùng ngoại ô, ngoại thành",
  "hv": "giao khu",
  "em": "🏡",
  "lesson": 1,
  "explain": [
   "Khu vực nằm xung quanh thành phố, ngoài nội thành — ít nhà cao tầng, nhiều núi, sông, cây cối. Trái nghĩa với 市区 (nội thành, học ở Bài khoá 4)."
  ],
  "usage": "去郊区游玩 · 住在郊区 · 郊区的空气 · 北京郊区.",
  "collo": [
   "去郊区",
   "住在郊区",
   "北京郊区",
   "郊区和市区"
  ],
  "colloFull": [
   {
    "zh": "去郊区",
    "py": "Qù jiāoqū",
    "vn": "đi ngoại ô"
   },
   {
    "zh": "住在郊区",
    "py": "Zhù zài jiāoqū",
    "vn": "sống ở ngoại ô"
   },
   {
    "zh": "北京郊区",
    "py": "Běijīng jiāoqū",
    "vn": "ngoại ô Bắc Kinh"
   },
   {
    "zh": "郊区和市区",
    "py": "Jiāoqū hé shìqū",
    "vn": "ngoại ô và nội thành"
   }
  ],
  "patterns": [
   {
    "s": "郊区 ↔ 市区",
    "m": "ngoại ô ↔ nội thành"
   },
   {
    "s": "去 + 郊区 + V",
    "m": "đi ngoại ô làm gì"
   }
  ],
  "ex_zh": "天中说，下周王老师要带咱们去郊区游玩呢。",
  "ex_py": "Tiānzhōng shuō, xià zhōu Wáng lǎoshī yào dài zánmen qù jiāoqū yóuwán ne.",
  "ex_vn": "Thiên Trung nói tuần sau thầy Vương sẽ dẫn chúng mình đi chơi ngoại ô đấy.",
  "exList": [
   {
    "zh": "天中说，下周王老师要带咱们去郊区游玩呢。",
    "py": "Tiānzhōng shuō, xià zhōu Wáng lǎoshī yào dài zánmen qù jiāoqū yóuwán ne.",
    "vn": "Thiên Trung nói tuần sau thầy Vương sẽ dẫn chúng mình đi chơi ngoại ô đấy."
   },
   {
    "zh": "郊区的空气比市区新鲜多了。",
    "py": "Jiāoqū de kōngqì bǐ shìqū xīnxiān duō le.",
    "vn": "Không khí ở ngoại ô trong lành hơn nội thành nhiều."
   }
  ],
  "hanzi": [
   {
    "c": "郊",
    "p": "jiāo",
    "type": "左右结构 · Trái-phải",
    "st": 8,
    "ord": "交 trái → 阝 phải",
    "rad": "阝 (ấp)",
    "mean": "ngoại ô",
    "tip": "交(giao) + 阝(ấp, thành) → nơi giao giữa thành và nông thôn → NGOẠI Ô (giao). Phân biệt 阝 phải = ấp, 阝 trái = phụ (núi).",
    "cf": "较 (jiào – so sánh)",
    "w": "郊区 / 郊外"
   },
   {
    "c": "区",
    "p": "qū",
    "type": "会意字 · Chữ hội ý",
    "st": 4,
    "ord": "匚 (nét ngang trên) → 乂 → nét gập dưới",
    "rad": "匚 (phương – cái hộp, khung)",
    "mean": "khu, vùng",
    "tip": "Khung 匚 bao quanh chữ 乂: một khoảng đất được khoanh vùng lại → khu vực — 郊区, 市区, 小区.",
    "cf": "巨 jù (to lớn) — trong là コ; 匹 pǐ — trong là 儿",
    "w": "郊区 / 市区 / 小区"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Nhà ở ngoại ô vừa rộng vừa rẻ, chỉ có điều giao thông không tiện lắm.",
    "answer": "郊区的房子又大又便宜，不过交通不太方便。",
    "answerPy": "Jiāoqū de fángzi yòu dà yòu piányi, búguò jiāotōng bú tài fāngbiàn.",
    "note": "Ôn 不过 (Bài 2 · điểm 2).",
    "pair": "……，不过……"
   },
   {
    "promptLang": "vi",
    "prompt": "Cùng với việc ô tô ngày càng nhiều, càng ngày càng nhiều người thích lái xe đi ngoại ô chơi.",
    "answer": "随着汽车越来越多，越来越多的人喜欢开车去郊区玩。",
    "answerPy": "Suízhe qì chē yuèláiyuè duō, yuèláiyuè duō de rén xǐhuan kāichē qù jiāoqū wán.",
    "note": "Ôn 随着 (Bài 1 · điểm 3).",
    "pair": "随着……"
   }
  ]
 },
 {
  "n": 6,
  "zh": "游玩",
  "py": "yóuwán",
  "pos": "Động từ",
  "vn": "đi chơi, du ngoạn, vui chơi",
  "hv": "du ngoạn",
  "em": "🎒",
  "lesson": 1,
  "explain": [
   "Đi đến một nơi để ngắm cảnh, vui chơi, thư giãn. Thường đi sau 去 / 来 / 外出 + nơi chốn; hơi trang trọng hơn 玩 một chút."
  ],
  "usage": "去 + nơi + 游玩 · 外出游玩 · 游玩的地方.",
  "collo": [
   "外出游玩",
   "去郊区游玩",
   "游玩的地方",
   "游玩了一天"
  ],
  "colloFull": [
   {
    "zh": "外出游玩",
    "py": "Wàichū yóuwán",
    "vn": "ra ngoài đi chơi"
   },
   {
    "zh": "去郊区游玩",
    "py": "Qù jiāoqū yóuwán",
    "vn": "đi chơi ngoại ô"
   },
   {
    "zh": "游玩的地方",
    "py": "Yóuwán de dìfang",
    "vn": "chỗ vui chơi"
   },
   {
    "zh": "游玩了一天",
    "py": "Yóuwán le yì tiān",
    "vn": "đi chơi một ngày"
   }
  ],
  "patterns": [
   {
    "s": "去 / 到 + nơi chốn + 游玩",
    "m": "Đi đến đâu chơi"
   },
   {
    "s": "游玩 ≈ 玩",
    "m": "游玩 có ý “đi chơi xa, ngắm cảnh”"
   }
  ],
  "ex_zh": "周末，李文、杨同乐等人去郊区游玩。",
  "ex_py": "Zhōumò, Lǐ Wén, Yáng Tónglè děng rén qù jiāoqū yóuwán.",
  "ex_vn": "Cuối tuần, Lý Văn, Dương Đồng Lạc và mấy người nữa đi chơi ở ngoại ô.",
  "exList": [
   {
    "zh": "周末，李文、杨同乐等人去郊区游玩。",
    "py": "Zhōumò, Lǐ Wén, Yáng Tónglè děng rén qù jiāoqū yóuwán.",
    "vn": "Cuối tuần, Lý Văn, Dương Đồng Lạc và mấy người nữa đi chơi ở ngoại ô."
   },
   {
    "zh": "一到假期，很多人都会外出游玩。",
    "py": "Yí dào jiàqī, hěn duō rén dōu huì wàichū yóuwán.",
    "vn": "Cứ đến kỳ nghỉ, rất nhiều người đều đi chơi xa."
   }
  ],
  "hanzi": [
   {
    "c": "游",
    "p": "yóu",
    "type": "形声字 · Chữ hình thanh",
    "st": 12,
    "ord": "氵 → 方 → 𠂉 → 子",
    "rad": "氵 (thủy – nước, ba chấm)",
    "mean": "bơi; đi chơi, du ngoạn",
    "tip": "Ba chấm thủy 氵 (nước) + phần 斿 yóu (chỉ âm): bơi trong nước, rồi mở rộng thành “đi chơi, du ngoạn” — 游泳, 旅游, 游玩.",
    "cf": "旅 lǚ (du lịch) — không có 氵, bên phải là 𠂉 + 𧘇",
    "w": "游泳 / 旅游 / 游玩"
   },
   {
    "c": "玩",
    "p": "wán",
    "type": "左右结构 · Trái-phải",
    "st": 8,
    "ord": "王 (vương) trái → 元 (nguyên) phải",
    "rad": "王 (vương – bộ ngọc)",
    "mean": "chơi, đùa",
    "tip": "Bộ ngọc 王 (đồ chơi quý) + 元 → cầm ĐỒ QUÝ để CHƠI ĐÙA, mở rộng thành mọi hoạt động vui chơi, nói đùa.",
    "cf": "顽 (wán – \"ngoan cố\", cũng đọc gần giống\")",
    "w": "玩笑 / 玩儿 / 好玩"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Lần này đi chơi ở Hàng Châu, chúng tôi vừa ngắm cảnh lại vừa ăn được đồ ngon.",
    "answer": "这次去杭州游玩，我们既看了风景，又吃到了好吃的。",
    "answerPy": "Zhè cì qù háng zhōu yóuwán, wǒmen jì kàn le fēngjǐng, yòu chī dào le hǎochī de.",
    "note": "Ôn 既……又…… (Bài 4 · điểm 3).",
    "pair": "既……又……"
   },
   {
    "promptLang": "vi",
    "prompt": "Đi chơi xong về nhà, mỗi người tự dọn đồ của mình.",
    "answer": "游玩回来以后，大家各收拾各的东西。",
    "answerPy": "Yóuwán huílái yǐhòu, dàjiā gè shōushi gè de dōngxi.",
    "note": "Ôn 各×各的 (Bài 5 · điểm 3).",
    "pair": "各V各的"
   }
  ]
 },
 {
  "n": 7,
  "zh": "主意",
  "py": "zhǔyi",
  "pos": "Danh từ",
  "vn": "ý kiến, ý tưởng, cách (giải quyết)",
  "hv": "chủ ý",
  "em": "💡",
  "lesson": 1,
  "explain": [
   "Ý tưởng, cách làm nghĩ ra để giải quyết việc gì. Chữ 意 đọc nhẹ (zhǔyi). Câu khen rất hay dùng: 好主意! (Ý hay đấy!). Lưu ý: tiếng Việt “chủ ý” = cố ý, định ý; còn 主意 chủ yếu = ý tưởng, cách."
  ],
  "usage": "好主意 · 出主意 · 想个主意 · 改变主意 (đổi ý) · 拿主意 (quyết định).",
  "collo": [
   "好主意",
   "出主意",
   "想个主意",
   "改变主意"
  ],
  "colloFull": [
   {
    "zh": "好主意",
    "py": "Hǎo zhǔyi",
    "vn": "ý hay"
   },
   {
    "zh": "出主意",
    "py": "Chū zhǔyi",
    "vn": "góp ý, bày cách"
   },
   {
    "zh": "想个主意",
    "py": "Xiǎng gè zhǔyi",
    "vn": "nghĩ ra một cách"
   },
   {
    "zh": "改变主意",
    "py": "Gǎibiàn zhǔyi",
    "vn": "đổi ý"
   }
  ],
  "patterns": [
   {
    "s": "好主意！",
    "m": "Câu khen khi đồng ý với đề nghị"
   },
   {
    "s": "给 + ai + 出主意",
    "m": "bày cách cho ai"
   }
  ],
  "ex_zh": "好主意！不过明天是个大晴天，外出记得戴帽子。",
  "ex_py": "Hǎo zhǔyi! Búguò míngtiān shì gè dà qíng tiān, wàichū jìde dài màozi.",
  "ex_vn": "Ý hay đấy! Có điều mai trời nắng to, ra ngoài nhớ đội mũ nhé.",
  "exList": [
   {
    "zh": "好主意！不过明天是个大晴天，外出记得戴帽子。",
    "py": "Hǎo zhǔyi! Búguò míngtiān shì gè dà qíng tiān, wàichū jìde dài màozi.",
    "vn": "Ý hay đấy! Có điều mai trời nắng to, ra ngoài nhớ đội mũ nhé."
   },
   {
    "zh": "你主意多，帮我想想怎么办吧。",
    "py": "Nǐ zhǔyi duō, bāng wǒ xiǎng xiǎng zěnmebàn ba.",
    "vn": "Cậu nhiều ý tưởng, nghĩ giúp tớ xem nên làm thế nào đi."
   }
  ],
  "hanzi": [
   {
    "c": "主",
    "p": "zhǔ",
    "type": "象形字 · Chữ tượng hình",
    "st": 5,
    "ord": "chấm → ngang → ngang → sổ → ngang",
    "rad": "丶 (chủ – nét chấm)",
    "mean": "chủ, chính",
    "tip": "Hình cây đèn dầu, nét chấm trên là ngọn lửa. 主意 = ý chính trong đầu → ý tưởng. Trong 主意, 意 đọc nhẹ \"yi\".",
    "cf": "王 wáng (王老师) — 主 có thêm nét chấm ở trên",
    "w": "主意 / 好主意"
   },
   {
    "c": "意",
    "p": "yì",
    "type": "上下结构 · Trên-dưới",
    "st": 13,
    "ord": "音 trên → 心 dưới",
    "rad": "心 (tâm)",
    "mean": "ý nghĩ",
    "tip": "Chữ hội ý 音(tiếng) + 心(tim) → tiếng lòng → Ý NGHĨ, kết hợp 见 thành 意见 = Ý KIẾN.",
    "cf": "音 (yīn – \"âm thanh\", phần trên)",
    "w": "意见 / 意思 / 同意"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Ý hay! Nếu ngày mai không mưa thì chúng ta đi leo Trường Thành.",
    "answer": "好主意！要是明天不下雨，我们就去爬长城。",
    "answerPy": "Hǎo zhǔyi! Yàoshi míngtiān bú xiàyǔ, wǒmen jiù qù pá Chángchéng.",
    "note": "Ôn 要是……就…… (Bài 1 · điểm 2).",
    "pair": "要是……就……"
   },
   {
    "promptLang": "vi",
    "prompt": "Nếu cậu đã có ý tưởng hay rồi thì nói ra cho mọi người nghe đi.",
    "answer": "既然你有好主意，就说出来让大家听听吧。",
    "answerPy": "Jìrán nǐ yǒu hǎo zhǔyi, jiù shuō chū lái ràng dàjiā tīng tīng ba.",
    "note": "Ôn 既然……就…… (Bài 7 · điểm 2).",
    "pair": "既然……就……"
   }
  ]
 },
 {
  "n": 8,
  "zh": "外出",
  "py": "wàichū",
  "pos": "Động từ",
  "vn": "ra ngoài, đi ra ngoài, đi xa",
  "hv": "ngoại xuất",
  "em": "🚶",
  "lesson": 1,
  "explain": [
   "Rời nhà / nơi làm việc để đi đâu đó (đi chơi, đi công tác…). Hơi trang trọng hơn 出去, hay dùng trong thông báo, lời nhắc."
  ],
  "usage": "外出游玩 · 外出旅游 · 外出时 / 外出记得…… · 外出办事.",
  "collo": [
   "外出游玩",
   "外出旅游",
   "外出办事",
   "外出时"
  ],
  "colloFull": [
   {
    "zh": "外出游玩",
    "py": "Wàichū yóuwán",
    "vn": "ra ngoài đi chơi"
   },
   {
    "zh": "外出旅游",
    "py": "Wàichū lǚyóu",
    "vn": "đi du lịch"
   },
   {
    "zh": "外出办事",
    "py": "Wàichū bàn shì",
    "vn": "ra ngoài làm việc"
   },
   {
    "zh": "外出时",
    "py": "Wàichū shí",
    "vn": "khi ra ngoài"
   }
  ],
  "patterns": [
   {
    "s": "外出 + V (mục đích)",
    "m": "Ra ngoài để làm gì"
   },
   {
    "s": "外出时，记得……",
    "m": "Lời nhắc khi ra ngoài"
   }
  ],
  "ex_zh": "不过明天是个大晴天，外出记得戴帽子。",
  "ex_py": "Búguò míngtiān shì gè dà qíng tiān, wàichū jìde dài màozi.",
  "ex_vn": "Có điều mai trời nắng to, ra ngoài nhớ đội mũ.",
  "exList": [
   {
    "zh": "不过明天是个大晴天，外出记得戴帽子。",
    "py": "Búguò míngtiān shì gè dà qíng tiān, wàichū jìde dài màozi.",
    "vn": "Có điều mai trời nắng to, ra ngoài nhớ đội mũ."
   },
   {
    "zh": "经理外出了，下午才回来。",
    "py": "Jīnglǐ wàichū le, xiàwǔ cái huílái.",
    "vn": "Giám đốc ra ngoài rồi, chiều mới về."
   }
  ],
  "hanzi": [
   {
    "c": "外",
    "p": "wài",
    "type": "会意字 · Chữ hội ý",
    "st": 5,
    "ord": "夕 → 卜",
    "rad": "夕 (tịch – buổi tối)",
    "mean": "ngoài",
    "tip": "夕 (buổi tối) + 卜 (bói): bói buổi tối là việc ngoài lệ thường → ngoài. Ôn 外国 (HSK2 Bài 2), 外面 (HSK2 Bài 12).",
    "cf": "处 chù — phần phải khác",
    "w": "以外 / 外面 / 外国"
   },
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
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Khi ra ngoài đi chơi, ít nhất phải mang theo một chai nước.",
    "answer": "外出游玩时，至少要带一瓶水。",
    "answerPy": "Wàichū yóuwán shí, zhìshǎo yào dài yì píng shuǐ.",
    "note": "Ôn 至少 (Bài 5 · điểm 1).",
    "pair": "至少"
   },
   {
    "promptLang": "vi",
    "prompt": "Mưa to quá, chúng ta không ra ngoài được rồi, ở nhà xem sách vậy.",
    "answer": "雨下得太大了，我们出不去了，就在家看书吧。",
    "answerPy": "Yǔ xià de tài dà le, wǒmen chū bú qù le, jiù zài jiā kàn shū ba.",
    "note": "Ôn V不了 / bổ ngữ khả năng (Bài 4).",
    "pair": "V不……"
   }
  ]
 },
 {
  "n": 9,
  "zh": "戴",
  "py": "dài",
  "pos": "Động từ",
  "vn": "đội, đeo (mũ, kính, đồng hồ, khẩu trang…)",
  "hv": "đái",
  "em": "🧢",
  "lesson": 1,
  "explain": [
   "Đội / đeo những thứ ở đầu, mặt, cổ, tay: 帽子, 眼镜, 手表, 口罩. Phân biệt với 穿 (mặc quần áo, đi giày). Đừng nhầm chữ 戴 (đeo) với 带 dài (mang theo) — cùng âm, khác chữ!"
  ],
  "usage": "戴 + 帽子 / 眼镜 / 手表 / 口罩 · 戴着 · 戴上.",
  "collo": [
   "戴帽子",
   "戴眼镜",
   "戴手表",
   "戴口罩"
  ],
  "colloFull": [
   {
    "zh": "戴帽子",
    "py": "Dài màozi",
    "vn": "đội mũ"
   },
   {
    "zh": "戴眼镜",
    "py": "Dài yǎnjìng",
    "vn": "đeo kính"
   },
   {
    "zh": "戴手表",
    "py": "Dài shǒubiǎo",
    "vn": "đeo đồng hồ"
   },
   {
    "zh": "戴口罩",
    "py": "Dài kǒu zhào",
    "vn": "đeo khẩu trang"
   }
  ],
  "patterns": [
   {
    "s": "戴 (đội / đeo) ↔ 穿 (mặc / đi)",
    "m": "戴帽子 nhưng 穿衣服 / 穿鞋"
   },
   {
    "s": "戴 ≠ 带",
    "m": "带 = mang theo: 带雨伞"
   }
  ],
  "ex_zh": "不过明天是个大晴天，外出记得戴帽子。",
  "ex_py": "Búguò míngtiān shì gè dà qíng tiān, wàichū jìde dài màozi.",
  "ex_vn": "Có điều mai trời nắng to, ra ngoài nhớ đội mũ.",
  "exList": [
   {
    "zh": "不过明天是个大晴天，外出记得戴帽子。",
    "py": "Búguò míngtiān shì gè dà qíng tiān, wàichū jìde dài màozi.",
    "vn": "Có điều mai trời nắng to, ra ngoài nhớ đội mũ."
   },
   {
    "zh": "夏天出汗多，所以我一般不戴手表。",
    "py": "Xiàtiān chū hàn duō, suǒyǐ wǒ yìbān bú dài shǒubiǎo.",
    "vn": "Mùa hè ra nhiều mồ hôi, nên tôi thường không đeo đồng hồ."
   }
  ],
  "hanzi": [
   {
    "c": "戴",
    "p": "dài",
    "type": "半包围结构 · Nửa bao quanh",
    "st": 17,
    "ord": "十 → 田 → 共 → 戈",
    "rad": "戈 (qua)",
    "mean": "đeo",
    "tip": "Chữ phức tạp 17 nét → ĐEO, ĐỘI (kính, mũ, đồng hồ). Phân biệt với 穿 (mặc, đi giày).",
    "cf": "代 (dài – thay)",
    "w": "戴眼镜 / 戴帽子 / 戴手表"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Hôm nay nắng to, ra ngoài nhớ đội mũ, nếu không sẽ đau đầu đấy.",
    "answer": "今天太阳很大，外出记得戴帽子，否则会头疼的。",
    "answerPy": "Jīntiān tàiyang hěn dà, wàichū jìde dài màozi, fǒuzé huì tóu téng de.",
    "note": "Dùng 否则 (điểm ngữ pháp 2 bài này).",
    "pair": "……，否则……"
   },
   {
    "promptLang": "vi",
    "prompt": "Ông ấy đeo kính rồi mà vẫn không nhìn rõ chữ trên bảng.",
    "answer": "他戴上眼镜了，还是看不清楚黑板上的字。",
    "answerPy": "Tā dài shàng yǎnjìng le, háishì kàn bù qīngchu hēibǎn shàng de zì.",
    "note": "Ôn bổ ngữ khả năng 看不清楚 (Bài 4).",
    "pair": "V不清楚"
   }
  ]
 },
 {
  "n": 10,
  "zh": "帽子",
  "py": "màozi",
  "pos": "Danh từ",
  "vn": "mũ, nón",
  "hv": "mạo tử",
  "em": "👒",
  "lesson": 1,
  "explain": [
   "Đồ đội trên đầu để che nắng, giữ ấm. Lượng từ: 顶 (dǐng) hoặc 个. Động từ đi kèm là 戴 (đội), cởi ra là 摘 (zhāi)."
  ],
  "usage": "一顶帽子 · 戴帽子 · 摘帽子 · 帽子店.",
  "collo": [
   "一顶帽子",
   "戴帽子",
   "摘帽子",
   "太阳帽"
  ],
  "colloFull": [
   {
    "zh": "一顶帽子",
    "py": "Yì dǐng màozi",
    "vn": "một cái mũ"
   },
   {
    "zh": "戴帽子",
    "py": "Dài màozi",
    "vn": "đội mũ"
   },
   {
    "zh": "摘帽子",
    "py": "Zhāi màozi",
    "vn": "bỏ mũ ra"
   },
   {
    "zh": "太阳帽",
    "py": "Tàiyang mào",
    "vn": "mũ che nắng"
   }
  ],
  "patterns": [
   {
    "s": "一顶 + 帽子",
    "m": "Lượng từ 顶 cho mũ"
   },
   {
    "s": "戴 + 帽子",
    "m": "Không nói ✗ 穿帽子"
   }
  ],
  "ex_zh": "不过明天是个大晴天，外出记得戴帽子。",
  "ex_py": "Búguò míngtiān shì gè dà qíng tiān, wàichū jìde dài màozi.",
  "ex_vn": "Có điều mai trời nắng to, ra ngoài nhớ đội mũ.",
  "exList": [
   {
    "zh": "不过明天是个大晴天，外出记得戴帽子。",
    "py": "Búguò míngtiān shì gè dà qíng tiān, wàichū jìde dài màozi.",
    "vn": "Có điều mai trời nắng to, ra ngoài nhớ đội mũ."
   },
   {
    "zh": "这顶帽子又好看又便宜，我买下来了。",
    "py": "Zhè dǐng màozi yòu hǎokàn yòu piányi, wǒ mǎi xiàlái le.",
    "vn": "Cái mũ này vừa đẹp vừa rẻ, tôi mua luôn rồi."
   }
  ],
  "hanzi": [
   {
    "c": "帽",
    "p": "mào",
    "type": "左右结构 · Trái-phải",
    "st": 12,
    "ord": "巾 trái → 冒 phải",
    "rad": "巾 (cân – khăn, vải)",
    "mean": "mũ, nón",
    "tip": "巾(vải, khăn) + 冒(che trên đầu) → tấm vải CHE lên đầu = MŨ, NÓN.",
    "cf": "冒 (mào – \"liều lĩnh\", không có bộ 巾\")",
    "w": "帽子 / 戴帽子"
   },
   {
    "c": "子",
    "p": "zi",
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
    "prompt": "Cái mũ này hơi nhỏ, tôi đội không vừa.",
    "answer": "这顶帽子有点儿小，我戴不了。",
    "answerPy": "Zhè dǐng màozi yǒudiǎnr xiǎo, wǒ dài bù liǎo.",
    "note": "Ôn V不了 (Bài 4 · điểm 1).",
    "pair": "V不了"
   },
   {
    "promptLang": "vi",
    "prompt": "Mỗi người đội mũ của mình, đừng lấy nhầm.",
    "answer": "大家各戴各的帽子，别拿错了。",
    "answerPy": "Dàjiā gè dài gè de màozi, bié ná cuò le.",
    "note": "Ôn 各×各的 (Bài 5 · điểm 3).",
    "pair": "各V各的"
   }
  ]
 },
 {
  "n": 11,
  "zh": "长城",
  "py": "Chángchéng",
  "pos": "Danh từ riêng",
  "vn": "Vạn Lý Trường Thành",
  "hv": "Trường Thành",
  "em": "🏯",
  "lesson": 1,
  "explain": [
   "Công trình phòng thủ dài hàng nghìn cây số ở miền bắc Trung Quốc, biểu tượng của Trung Quốc. Ở Bắc Kinh, đoạn nổi tiếng nhất là 八达岭 (Bādálǐng). Câu nói quen thuộc: “不到长城非好汉” — chưa lên Trường Thành chưa phải là hảo hán (小语助力 của sách)."
  ],
  "usage": "爬长城 · 去长城 · 八达岭长城 · 不到长城非好汉.",
  "collo": [
   "爬长城",
   "万里长城",
   "八达岭长城",
   "长城上"
  ],
  "colloFull": [
   {
    "zh": "爬长城",
    "py": "Pá Chángchéng",
    "vn": "leo Trường Thành"
   },
   {
    "zh": "万里长城",
    "py": "Wàn lǐ Chángchéng",
    "vn": "Vạn Lý Trường Thành"
   },
   {
    "zh": "八达岭长城",
    "py": "Bā dá lǐng Chángchéng",
    "vn": "Trường Thành Bát Đạt Lĩnh"
   },
   {
    "zh": "长城上",
    "py": "Chángchéng shàng",
    "vn": "trên Trường Thành"
   }
  ],
  "patterns": [
   {
    "s": "不到长城非好汉",
    "m": "Thành ngữ: chưa lên Trường Thành chưa phải hảo hán"
   },
   {
    "s": "爬 + 长城 / 山",
    "m": "Leo Trường Thành dùng 爬 (giống leo núi)"
   }
  ],
  "ex_zh": "那咱们明天去爬长城吧，不是说“不到长城非好汉”吗？",
  "ex_py": "Nà zánmen míngtiān qù pá Chángchéng ba, bú shì shuō “bú dào Chángchéng fēi hǎo hàn” ma?",
  "ex_vn": "Vậy mai chúng mình đi leo Trường Thành đi, chẳng phải người ta nói “chưa đến Trường Thành chưa phải hảo hán” sao?",
  "exList": [
   {
    "zh": "那咱们明天去爬长城吧，不是说“不到长城非好汉”吗？",
    "py": "Nà zánmen míngtiān qù pá Chángchéng ba, bú shì shuō “bú dào Chángchéng fēi hǎo hàn” ma?",
    "vn": "Vậy mai chúng mình đi leo Trường Thành đi, chẳng phải người ta nói “chưa đến Trường Thành chưa phải hảo hán” sao?"
   },
   {
    "zh": "很多外国人来北京，第一个想去的地方就是长城。",
    "py": "Hěn duō wàiguó rén lái Běijīng, dì yī gè xiǎng qù de dìfang jiù shì Chángchéng.",
    "vn": "Nhiều người nước ngoài đến Bắc Kinh, nơi đầu tiên muốn đến chính là Trường Thành."
   }
  ],
  "hanzi": [
   {
    "c": "长",
    "p": "cháng",
    "type": "象形字 · Chữ tượng hình",
    "st": 4,
    "ord": "phẩy → ngang → sổ hất → mác",
    "rad": "长 (trường – dài)",
    "mean": "dài (cháng); lớn lên (zhǎng)",
    "tip": "Hình người già tóc dài. Đọc cháng = dài (HSK2 Bài 6), đọc zhǎng = lớn lên, có vẻ ngoài.",
    "cf": "长 cháng (dài) ≠ 长 zhǎng (lớn lên)",
    "w": "长得 / 长大 / 很长"
   },
   {
    "c": "城",
    "p": "chéng",
    "type": "形声字 · Chữ hình thanh",
    "st": 9,
    "ord": "土 → 成",
    "rad": "土 (thổ – đất)",
    "mean": "thành, tường thành",
    "tip": "土 (đất) + 成 (chỉ âm): tường đất bao quanh → thành, thành phố. 成 đã gặp trong 成绩 (HSK3 Bài 9).",
    "cf": "成 chéng — không có 土",
    "w": "城市 / 长城"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Lần này đến Bắc Kinh, tôi nhất định phải đi leo Trường Thành.",
    "answer": "这次来北京，我一定要去爬长城。",
    "answerPy": "Zhè cì lái Běijīng, wǒ yídìng yào qù pá Chángchéng.",
    "note": "Câu đơn — 爬长城.",
    "pair": "去 + 爬长城"
   },
   {
    "promptLang": "vi",
    "prompt": "Leo Trường Thành tuy mệt nhưng phong cảnh đẹp vô cùng, rất đáng đi.",
    "answer": "爬长城累是累，不过风景特别美，非常值得去。",
    "answerPy": "Pá Chángchéng lèi shì lèi, búguò fēngjǐng tèbié měi, fēicháng zhídé qù.",
    "note": "Ôn ×是×，不过…… (Bài 3 · điểm 1).",
    "pair": "A是A，不过……"
   }
  ]
 },
 {
  "n": 12,
  "zh": "项目",
  "py": "xiàngmù",
  "pos": "Danh từ",
  "vn": "dự án; hạng mục",
  "hv": "hạng mục",
  "em": "📁",
  "lesson": 2,
  "explain": [
   "Một phần việc / một kế hoạch có mục tiêu riêng trong công ty, trường học… Trong bài: dự án của công ty. Cũng có nghĩa “môn” trong thể thao (比赛项目 = môn thi đấu)."
  ],
  "usage": "参加项目 · 接项目 · 做项目 · 项目经理 · 一个项目.",
  "collo": [
   "参加项目",
   "接项目",
   "项目经理",
   "比赛项目"
  ],
  "colloFull": [
   {
    "zh": "参加项目",
    "py": "Cānjiā xiàngmù",
    "vn": "tham gia dự án"
   },
   {
    "zh": "接项目",
    "py": "Jiē xiàngmù",
    "vn": "nhận dự án"
   },
   {
    "zh": "项目经理",
    "py": "Xiàngmù jīnglǐ",
    "vn": "giám đốc dự án"
   },
   {
    "zh": "比赛项目",
    "py": "Bǐsài xiàngmù",
    "vn": "môn thi đấu"
   }
  ],
  "patterns": [
   {
    "s": "参加 / 接 / 完成 + 项目",
    "m": "Các động từ hay đi với 项目"
   },
   {
    "s": "项目 ≠ “hạng mục” thuần",
    "m": "Trong công việc: dự án"
   }
  ],
  "ex_zh": "以前我总觉得年轻时要多学多干，所以参加了公司里的很多项目。",
  "ex_py": "Yǐqián wǒ zǒng juéde niánqīng shí yào duō xué duō gàn, suǒyǐ cānjiā le gōngsī lǐ de hěn duō xiàngmù.",
  "ex_vn": "Trước đây tôi luôn nghĩ lúc còn trẻ phải học nhiều làm nhiều, nên đã tham gia rất nhiều dự án của công ty.",
  "exList": [
   {
    "zh": "以前我总觉得年轻时要多学多干，所以参加了公司里的很多项目。",
    "py": "Yǐqián wǒ zǒng juéde niánqīng shí yào duō xué duō gàn, suǒyǐ cānjiā le gōngsī lǐ de hěn duō xiàngmù.",
    "vn": "Trước đây tôi luôn nghĩ lúc còn trẻ phải học nhiều làm nhiều, nên đã tham gia rất nhiều dự án của công ty."
   },
   {
    "zh": "这个项目很重要，我们至少要准备三个月。",
    "py": "Zhège xiàngmù hěn zhòngyào, wǒmen zhìshǎo yào zhǔnbèi sān gè yuè.",
    "vn": "Dự án này rất quan trọng, chúng ta ít nhất phải chuẩn bị ba tháng."
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
   },
   {
    "c": "目",
    "p": "mù",
    "type": "独体字 · Chữ đơn thể",
    "st": 5,
    "ord": "丨 → 𠃍 → 一 → 一 → 一",
    "rad": "目 (mục)",
    "mean": "mắt",
    "tip": "Tượng hình con MẮT dựng đứng. Mắt nhìn vào đích → 目的 = MỤC ĐÍCH. Chú ý 的 ở đây đọc dì.",
    "cf": "日 (rì – mặt trời, 4 nét)",
    "w": "目的 / 节目 / 题目"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Dự án này quá nhiều việc, một mình tôi làm không xuể.",
    "answer": "这个项目工作太多了，我一个人做不了。",
    "answerPy": "Zhège xiàngmù gōngzuò tài duō le, wǒ yí gè rén zuò bù liǎo.",
    "note": "Ôn V不了 (Bài 4 · điểm 1).",
    "pair": "V不了"
   },
   {
    "promptLang": "vi",
    "prompt": "Về mặt kinh nghiệm, anh ấy mạnh hơn tôi, vì vậy dự án này để anh ấy phụ trách.",
    "answer": "在经验方面，他比我强，因此这个项目让他负责。",
    "answerPy": "Zài jīngyàn fāngmiàn, tā bǐ wǒ qiáng, yīncǐ zhège xiàngmù ràng tā fùzé.",
    "note": "Ôn 在……方面 (Bài 7 · điểm 1) + 因此 (từ mới).",
    "pair": "在……方面"
   }
  ]
 },
 {
  "n": 13,
  "zh": "加班",
  "py": "jiābān",
  "pos": "Động từ",
  "vn": "tăng ca, làm thêm giờ",
  "hv": "gia ban",
  "em": "🌃",
  "lesson": 2,
  "explain": [
   "Làm việc thêm ngoài giờ quy định (buổi tối, cuối tuần). 加班 là động từ ly hợp: có thể chen vào giữa — 加了三个小时班 (tăng ca ba tiếng)."
  ],
  "usage": "经常加班 · 加班到很晚 · 周末加班 · 加了两个小时班.",
  "collo": [
   "经常加班",
   "加班到十点",
   "周末加班",
   "加班费"
  ],
  "colloFull": [
   {
    "zh": "经常加班",
    "py": "Jīngcháng jiābān",
    "vn": "thường xuyên tăng ca"
   },
   {
    "zh": "加班到十点",
    "py": "Jiābān dào shí diǎn",
    "vn": "tăng ca đến 10 giờ"
   },
   {
    "zh": "周末加班",
    "py": "Zhōumò jiābān",
    "vn": "tăng ca cuối tuần"
   },
   {
    "zh": "加班费",
    "py": "Jiābān fèi",
    "vn": "tiền làm thêm giờ"
   }
  ],
  "patterns": [
   {
    "s": "加 + (thời gian) + 班",
    "m": "Động từ ly hợp: 加了两个小时班"
   },
   {
    "s": "加班、熬夜",
    "m": "Cặp từ hay đi cùng nhau"
   }
  ],
  "ex_zh": "所以参加了公司里的很多项目，经常加班、熬夜，身体也亮起了红灯。",
  "ex_py": "Suǒyǐ cānjiā le gōngsī lǐ de hěn duō xiàngmù, jīngcháng jiābān, áoyè, shēntǐ yě liàng qǐ le hóng dēng.",
  "ex_vn": "Nên đã tham gia nhiều dự án của công ty, thường xuyên tăng ca, thức khuya, sức khỏe cũng báo động đỏ.",
  "exList": [
   {
    "zh": "所以参加了公司里的很多项目，经常加班、熬夜，身体也亮起了红灯。",
    "py": "Suǒyǐ cānjiā le gōngsī lǐ de hěn duō xiàngmù, jīngcháng jiābān, áoyè, shēntǐ yě liàng qǐ le hóng dēng.",
    "vn": "Nên đã tham gia nhiều dự án của công ty, thường xuyên tăng ca, thức khuya, sức khỏe cũng báo động đỏ."
   },
   {
    "zh": "今天又要加班，我恐怕来不及回家吃晚饭了。",
    "py": "Jīntiān yòu yào jiābān, wǒ kǒngpà láibùjí huí jiā chī wǎnfàn le.",
    "vn": "Hôm nay lại phải tăng ca, e là tôi không kịp về nhà ăn tối rồi."
   }
  ],
  "hanzi": [
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
   },
   {
    "c": "班",
    "p": "bān",
    "type": "左右结构 · Trái-phải",
    "st": 10,
    "ord": "王 trái → 刂 → 王 (biến thể lặp)",
    "rad": "王 (vương – bộ ngọc)",
    "mean": "ca làm việc, lớp",
    "tip": "Hai bộ 王 (ngọc) được 刂 (dao) CHIA thành từng phần đều nhau → chia thành từng NHÓM, từng CA làm việc.",
    "cf": "班 dễ nhầm với 斑 (bān – \"đốm, vằn\")",
    "w": "加班 / 上班 / 班级"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Dạo này tuần nào anh ấy cũng tăng ca, thậm chí cuối tuần cũng không nghỉ.",
    "answer": "最近他每个星期都加班，甚至周末也不休息。",
    "answerPy": "Zuìjìn tā měi gè xīngqī dōu jiābān, shènzhì zhōumò yě bù xiūxi.",
    "note": "Ôn 甚至 (Bài 3 · điểm 3).",
    "pair": "甚至"
   },
   {
    "promptLang": "vi",
    "prompt": "Tăng ca thì không sao, có điều phải chú ý nghỉ ngơi.",
    "answer": "加班倒没什么，不过要注意休息。",
    "answerPy": "Jiābān dǎo méi shénme, búguò yào zhùyì xiūxi.",
    "note": "Ôn 没什么 (Bài 6 · điểm 2) + 不过 (Bài 2).",
    "pair": "……，不过……"
   }
  ]
 },
 {
  "n": 14,
  "zh": "熬夜",
  "py": "áoyè",
  "pos": "Động từ",
  "vn": "thức khuya, thức đêm",
  "hv": "ngao dạ",
  "em": "🦉",
  "lesson": 2,
  "explain": [
   "Không ngủ hoặc ngủ rất muộn để làm việc, học bài, chơi… 熬 nghĩa gốc là “ninh, hầm lâu” → “chịu đựng”; 熬夜 = cố chịu qua đêm. Cũng là động từ ly hợp: 熬了一夜."
  ],
  "usage": "经常熬夜 · 熬夜学习 / 工作 · 别熬夜了 · 熬了一个晚上.",
  "collo": [
   "经常熬夜",
   "熬夜学习",
   "别熬夜",
   "熬了一夜"
  ],
  "colloFull": [
   {
    "zh": "经常熬夜",
    "py": "Jīngcháng áoyè",
    "vn": "hay thức khuya"
   },
   {
    "zh": "熬夜学习",
    "py": "Áoyè xuéxí",
    "vn": "thức khuya học bài"
   },
   {
    "zh": "别熬夜",
    "py": "Bié áoyè",
    "vn": "đừng thức khuya"
   },
   {
    "zh": "熬了一夜",
    "py": "Áo le yí yè",
    "vn": "thức cả đêm"
   }
  ],
  "patterns": [
   {
    "s": "熬夜 + V",
    "m": "Thức khuya để làm gì"
   },
   {
    "s": "熬 + (thời gian) + 夜",
    "m": "Ly hợp: 熬了一夜"
   }
  ],
  "ex_zh": "经常加班、熬夜，身体也亮起了红灯。",
  "ex_py": "Jīngcháng jiābān, áoyè, shēntǐ yě liàng qǐ le hóng dēng.",
  "ex_vn": "Thường xuyên tăng ca, thức khuya, sức khỏe cũng báo động đỏ.",
  "exList": [
   {
    "zh": "经常加班、熬夜，身体也亮起了红灯。",
    "py": "Jīngcháng jiābān, áoyè, shēntǐ yě liàng qǐ le hóng dēng.",
    "vn": "Thường xuyên tăng ca, thức khuya, sức khỏe cũng báo động đỏ."
   },
   {
    "zh": "为了准备考试，他熬了好几个晚上。",
    "py": "Wèile zhǔnbèi kǎoshì, tā áo le hǎo jǐ gè wǎnshang.",
    "vn": "Để chuẩn bị thi, cậu ấy đã thức trắng mấy đêm liền."
   }
  ],
  "hanzi": [
   {
    "c": "熬",
    "p": "áo",
    "type": "形声字 · Chữ hình thanh",
    "st": 14,
    "ord": "敖 → 灬",
    "rad": "灬 (hỏa – lửa, bốn chấm)",
    "mean": "ninh, nấu lâu; chịu đựng, cố chịu",
    "tip": "敖 áo (chỉ âm) đặt trên 灬 (lửa): nấu lâu trên lửa → ninh, hầm; mở rộng “cố chịu đựng qua” — 熬夜 = cố thức qua đêm.",
    "cf": "傲 ào (kiêu ngạo) — có bộ 亻, không có lửa",
    "w": "熬夜 / 熬汤 / 熬粥"
   },
   {
    "c": "夜",
    "p": "yè",
    "type": "形声字 · Chữ hình thanh",
    "st": 8,
    "ord": "亠 → 亻 → 夕 (có thêm nét chấm)",
    "rad": "夕 (tịch – buổi chiều tối)",
    "mean": "đêm, ban đêm",
    "tip": "Bên trong có 夕 (trăng lúc chiều tối) núp dưới mái 亠 cạnh người 亻: trời tối, người vào nhà nghỉ → ban đêm — 夜里, 熬夜.",
    "cf": "液 yè (chất lỏng) — thêm 氵 bên trái",
    "w": "夜里 / 熬夜 / 半夜"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Đừng thức khuya nữa, nếu không ngày mai sẽ không dậy nổi đâu.",
    "answer": "别熬夜了，否则明天会起不来的。",
    "answerPy": "Bié áoyè le, fǒuzé míngtiān huì qǐ bù lái de.",
    "note": "Dùng 否则 (điểm 2) + 起不来 (bổ ngữ khả năng, Bài 4).",
    "pair": "……，否则……"
   },
   {
    "promptLang": "vi",
    "prompt": "Thức khuya không những có hại cho sức khỏe, mà còn khiến hiệu suất học tập giảm sút.",
    "answer": "熬夜不仅对身体不好，而且会使学习效率下降。",
    "answerPy": "Áoyè bùjǐn duì shēntǐ bù hǎo, érqiě huì shǐ xuéxí xiàolǜ xiàjiàng.",
    "note": "Ôn 不仅……而且…… (Bài 3) + 使 (Bài 7 · điểm 4).",
    "pair": "不仅……而且……；使"
   }
  ]
 },
 {
  "n": 15,
  "zh": "否则",
  "py": "fǒuzé",
  "pos": "Liên từ",
  "vn": "nếu không thì, bằng không",
  "hv": "phủ tắc",
  "em": "⚠️",
  "lesson": 2,
  "explain": [
   "Liên từ đứng ĐẦU vế sau: nếu yêu cầu / lời khuyên ở vế trước KHÔNG được thực hiện thì sẽ có hậu quả ở vế sau. 否 = không, 则 = thì. Khẩu ngữ hay dùng 要不 / 要不然 với nghĩa tương tự."
  ],
  "usage": "(lời khuyên / yêu cầu)，否则 + (hậu quả xấu) · 否则的话.",
  "collo": [
   "否则的话",
   "……，否则会……",
   "……，否则就……",
   "要不然"
  ],
  "colloFull": [
   {
    "zh": "否则的话",
    "py": "Fǒuzé dehuà",
    "vn": "nếu không thì"
   },
   {
    "zh": "……，否则会……",
    "py": "……, Fǒuzé huì……",
    "vn": "nếu không sẽ …"
   },
   {
    "zh": "……，否则就……",
    "py": "……, Fǒuzé jiù……",
    "vn": "bằng không thì …"
   },
   {
    "zh": "要不然",
    "py": "Yào bùrán",
    "vn": "(khẩu ngữ) không thì"
   }
  ],
  "patterns": [
   {
    "s": "Lời khuyên，否则 + hậu quả",
    "m": "Vế sau là kết quả xấu"
   },
   {
    "s": "否则 = 如果不……，就……",
    "m": "Ý nghĩa giả thiết ngược"
   }
  ],
  "ex_zh": "还是别给自己太大压力，否则，失去健康就不值得了。",
  "ex_py": "Háishì bié gěi zìjǐ tài dà yālì, fǒuzé, shīqù jiànkāng jiù bù zhídé le.",
  "ex_vn": "Tốt hơn hết đừng tự tạo áp lực quá lớn cho mình, nếu không mất sức khỏe thì chẳng đáng.",
  "exList": [
   {
    "zh": "还是别给自己太大压力，否则，失去健康就不值得了。",
    "py": "Háishì bié gěi zìjǐ tài dà yālì, fǒuzé, shīqù jiànkāng jiù bù zhídé le.",
    "vn": "Tốt hơn hết đừng tự tạo áp lực quá lớn cho mình, nếu không mất sức khỏe thì chẳng đáng."
   },
   {
    "zh": "快走吧，否则我们就来不及了。",
    "py": "Kuài zǒu ba, fǒuzé wǒmen jiù láibùjí le.",
    "vn": "Đi nhanh lên, không thì chúng ta không kịp mất."
   }
  ],
  "hanzi": [
   {
    "c": "否",
    "p": "fǒu",
    "type": "上下结构 · Trên-dưới",
    "st": 7,
    "ord": "不 trên → 口 dưới",
    "rad": "口 (khẩu)",
    "mean": "không, phủ định",
    "tip": "Chữ mang nghĩa PHỦ ĐỊNH, KHÔNG, kết hợp 则(thì, quy tắc) thành 否则 = NẾU KHÔNG THÌ.",
    "cf": "吝 (lìn – \"keo kiệt\", tự dạng khác)",
    "w": "否则 / 是否 / 否认"
   },
   {
    "c": "则",
    "p": "zé",
    "type": "会意字 · Chữ hội ý",
    "st": 6,
    "ord": "贝 → 刂",
    "rad": "刂 (đao – con dao đứng)",
    "mean": "quy tắc; thì (liên từ)",
    "tip": "贝 (vật quý, đồ đồng) + 刂 (dao): khắc luật lệ lên đồ đồng → quy tắc; trong văn viết dùng như liên từ “thì” — 否则 = nếu không thì.",
    "cf": "测 cè (đo) — thêm 氵; 侧 cè (bên cạnh) — thêm 亻",
    "w": "否则 / 规则 / 原则"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Mang ô theo đi, nếu không lát nữa mưa thì phiền lắm.",
    "answer": "带上雨伞吧，否则一会儿下雨就麻烦了。",
    "answerPy": "Dài shàng yǔ sǎn ba, fǒuzé yíhuìr xiàyǔ jiù máfan le.",
    "note": "Mẫu cơ bản của 否则.",
    "pair": "……，否则……"
   },
   {
    "promptLang": "vi",
    "prompt": "Nên đi ngủ sớm, nếu không cậu ít nhất cũng phải mệt cả ngày mai.",
    "answer": "早点儿睡吧，否则你明天至少要累一整天。",
    "answerPy": "Zǎo diǎnr shuì ba, fǒuzé nǐ míngtiān zhìshǎo yào lèi yì zhěng tiān.",
    "note": "Ôn 至少 (Bài 5 · điểm 1).",
    "pair": "否则 + 至少"
   }
  ]
 },
 {
  "n": 16,
  "zh": "失去",
  "py": "shīqù",
  "pos": "Động từ",
  "vn": "mất, đánh mất, mất đi",
  "hv": "thất khứ",
  "em": "💔",
  "lesson": 2,
  "explain": [
   "Mất đi thứ vốn có (thường là thứ trừu tượng, quý giá): 健康, 机会, 信心, 工作, 朋友. Đồ vật cụ thể bị mất thì thường dùng 丢 (丢了钱包)."
  ],
  "usage": "失去 + 健康 / 机会 / 信心 / 工作 / 兴趣.",
  "collo": [
   "失去健康",
   "失去机会",
   "失去信心",
   "失去兴趣"
  ],
  "colloFull": [
   {
    "zh": "失去健康",
    "py": "Shīqù jiànkāng",
    "vn": "mất sức khỏe"
   },
   {
    "zh": "失去机会",
    "py": "Shīqù jīhuì",
    "vn": "mất cơ hội"
   },
   {
    "zh": "失去信心",
    "py": "Shīqù xìnxīn",
    "vn": "mất tự tin"
   },
   {
    "zh": "失去兴趣",
    "py": "Shīqù xìngqù",
    "vn": "mất hứng thú"
   }
  ],
  "patterns": [
   {
    "s": "失去 + danh từ trừu tượng",
    "m": "Mất sức khỏe, cơ hội, niềm tin…"
   },
   {
    "s": "失去 ≠ 丢",
    "m": "丢 dùng cho đồ vật bị rơi mất"
   }
  ],
  "ex_zh": "还是别给自己太大压力，否则，失去健康就不值得了。",
  "ex_py": "Háishì bié gěi zìjǐ tài dà yālì, fǒuzé, shīqù jiànkāng jiù bù zhídé le.",
  "ex_vn": "Đừng tự tạo áp lực quá lớn, nếu không mất sức khỏe thì chẳng đáng.",
  "exList": [
   {
    "zh": "还是别给自己太大压力，否则，失去健康就不值得了。",
    "py": "Háishì bié gěi zìjǐ tài dà yālì, fǒuzé, shīqù jiànkāng jiù bù zhídé le.",
    "vn": "Đừng tự tạo áp lực quá lớn, nếu không mất sức khỏe thì chẳng đáng."
   },
   {
    "zh": "他因为总是迟到，失去了这个工作机会。",
    "py": "Tā yīnwèi zǒngshì chídào, shīqù le zhège gōngzuò jīhuì.",
    "vn": "Vì cứ đi muộn mãi, anh ấy đã mất cơ hội việc làm này."
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
    "c": "去",
    "p": "qù",
    "type": "会意字 · Chữ hội ý",
    "st": 5,
    "ord": "土 → 厶",
    "rad": "厶 (khư)",
    "mean": "đi; đã qua",
    "tip": "Phần trên vốn là hình người, phần dưới là cửa hang: người rời khỏi chỗ ở → đi; việc đã đi qua → 过去 = quá khứ. Phân biệt: 过去 (guòqu – bổ ngữ xu hướng “đi qua”, HSK2 Bài 4).",
    "cf": "丢 diū (HSK3 Bài 1) — có thêm nét phẩy ở trên",
    "w": "过去 / 去年 / 出去"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Đã lỡ mất cơ hội này rồi thì đừng nghĩ nữa, chuẩn bị cho lần sau là được.",
    "answer": "既然已经失去了这个机会，就别再想了，准备下次就是了。",
    "answerPy": "Jìrán yǐjīng shīqù le zhège jīhuì, jiù bié zài xiǎng le, zhǔnbèi xià cì jiù shì le.",
    "note": "Ôn 既然……就…… (Bài 7) + 就是了 (Bài 2).",
    "pair": "既然……就……"
   },
   {
    "promptLang": "vi",
    "prompt": "Nếu chuyện gì cũng không có hứng thú, con người sẽ mất đi rất nhiều niềm vui.",
    "answer": "要是对什么都没兴趣，人就会失去很多快乐。",
    "answerPy": "Yàoshi duì shénme dōu méi xìngqù, rén jiù huì shīqù hěn duō kuàilè.",
    "note": "Ôn 要是……就…… (Bài 1 · điểm 2).",
    "pair": "要是……就……"
   }
  ]
 },
 {
  "n": 17,
  "zh": "值得",
  "py": "zhídé",
  "pos": "Động từ",
  "vn": "đáng, đáng giá, xứng đáng",
  "hv": "trị đắc",
  "em": "💎",
  "lesson": 2,
  "explain": [
   "Có giá trị, bỏ ra công sức / tiền bạc là xứng. Hai cách dùng: 值得 + động từ (值得去, 值得学习 = đáng đi, đáng học) và làm vị ngữ (很值得 / 不值得 = rất đáng / không đáng)."
  ],
  "usage": "值得 + V · 很值得 / 不值得 · 值得一看 · 值得学习.",
  "collo": [
   "值得去",
   "值得学习",
   "很值得",
   "不值得"
  ],
  "colloFull": [
   {
    "zh": "值得去",
    "py": "Zhídé qù",
    "vn": "đáng đi"
   },
   {
    "zh": "值得学习",
    "py": "Zhídé xuéxí",
    "vn": "đáng học hỏi"
   },
   {
    "zh": "很值得",
    "py": "Hěn zhídé",
    "vn": "rất đáng"
   },
   {
    "zh": "不值得",
    "py": "Bù zhídé",
    "vn": "không đáng"
   }
  ],
  "patterns": [
   {
    "s": "值得 + V",
    "m": "đáng làm gì"
   },
   {
    "s": "(这样做) + 很 / 不 + 值得",
    "m": "Đánh giá: đáng / không đáng"
   }
  ],
  "ex_zh": "还是别给自己太大压力，否则，失去健康就不值得了。",
  "ex_py": "Háishì bié gěi zìjǐ tài dà yālì, fǒuzé, shīqù jiànkāng jiù bù zhídé le.",
  "ex_vn": "Đừng tự tạo áp lực quá lớn, nếu không mất sức khỏe thì chẳng đáng.",
  "exList": [
   {
    "zh": "还是别给自己太大压力，否则，失去健康就不值得了。",
    "py": "Háishì bié gěi zìjǐ tài dà yālì, fǒuzé, shīqù jiànkāng jiù bù zhídé le.",
    "vn": "Đừng tự tạo áp lực quá lớn, nếu không mất sức khỏe thì chẳng đáng."
   },
   {
    "zh": "故宫很值得参观，你来北京一定要去看看。",
    "py": "Gùgōng hěn zhídé cānguān, nǐ lái Běijīng yídìng yào qù kàn kàn.",
    "vn": "Cố Cung rất đáng tham quan, bạn đến Bắc Kinh nhất định phải đi xem."
   }
  ],
  "hanzi": [
   {
    "c": "值",
    "p": "zhí",
    "type": "左右结构 · Trái-phải",
    "st": 10,
    "ord": "亻 (nhân) trái → 直 (trực) phải",
    "rad": "亻 (nhân – người)",
    "mean": "giá trị",
    "tip": "Bộ người 亻 + 直(thẳng, xứng đáng) → NGƯỜI đánh giá đúng GIÁ TRỊ, kết hợp 得(được) thành 值得 = ĐÁNG (giá), XỨNG ĐÁNG.",
    "cf": "植 (zhí – \"trồng cây\", bộ 木\")",
    "w": "值得 / 价值 / 值班"
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
    "prompt": "Cuốn sách này đọc rất hay, nếu bạn có thời gian thì đáng đọc lắm.",
    "answer": "这本书写得很好，要是你有时间，很值得一看。",
    "answerPy": "Zhè běn shū xiě de hěn hǎo, yàoshi nǐ yǒu shíjiān, hěn zhídé yí kàn.",
    "note": "Ôn 要是 (Bài 1).",
    "pair": "值得 + V"
   },
   {
    "promptLang": "vi",
    "prompt": "Vì chút chuyện nhỏ mà cãi nhau thì không đáng, có gì đáng giận đâu.",
    "answer": "为了一点儿小事吵架不值得，有什么好生气的？",
    "answerPy": "Wèile yìdiǎnr xiǎoshì chǎojià bù zhídé, yǒu shénme hǎo shēngqì de?",
    "note": "Ôn (没)有什么好×的 (Bài 6 · điểm 2).",
    "pair": "有什么好×的"
   }
  ]
 },
 {
  "n": 18,
  "zh": "暂停",
  "py": "zàntíng",
  "pos": "Động từ",
  "vn": "tạm dừng, tạm ngừng",
  "hv": "tạm đình",
  "em": "⏸️",
  "lesson": 2,
  "explain": [
   "Dừng lại một thời gian ngắn rồi sẽ tiếp tục. 暂 = tạm thời, 停 = dừng. Hay gặp: 暂停下来, 暂停一下, 比赛暂停, 暂停营业 (tạm ngừng kinh doanh)."
  ],
  "usage": "暂停下来 · 暂停一下 · 暂停营业 · 比赛暂停.",
  "collo": [
   "暂停下来",
   "暂停一下",
   "暂停营业",
   "比赛暂停"
  ],
  "colloFull": [
   {
    "zh": "暂停下来",
    "py": "Zàntíng xiàlái",
    "vn": "tạm dừng lại"
   },
   {
    "zh": "暂停一下",
    "py": "Zàntíng yíxià",
    "vn": "dừng một chút"
   },
   {
    "zh": "暂停营业",
    "py": "Zàntíng yíngyè",
    "vn": "tạm ngừng kinh doanh"
   },
   {
    "zh": "比赛暂停",
    "py": "Bǐsài zàntíng",
    "vn": "trận đấu tạm dừng"
   }
  ],
  "patterns": [
   {
    "s": "暂停 + 下来 / 一下",
    "m": "Bổ ngữ xu hướng / làm nhẹ động tác"
   },
   {
    "s": "暂停 ≠ 停止",
    "m": "停止 = dừng hẳn"
   }
  ],
  "ex_zh": "我发现暂停下来、好好休息之后，我能把工作做得更快更好。",
  "ex_py": "Wǒ fāxiàn zàntíng xiàlái, hǎo hǎo xiūxi zhīhòu, wǒ néng bǎ gōngzuò zuò de gèng kuài gèng hǎo.",
  "ex_vn": "Tôi nhận ra sau khi tạm dừng lại, nghỉ ngơi cho tốt, tôi có thể làm việc nhanh hơn và tốt hơn.",
  "exList": [
   {
    "zh": "我发现暂停下来、好好休息之后，我能把工作做得更快更好。",
    "py": "Wǒ fāxiàn zàntíng xiàlái, hǎo hǎo xiūxi zhīhòu, wǒ néng bǎ gōngzuò zuò de gèng kuài gèng hǎo.",
    "vn": "Tôi nhận ra sau khi tạm dừng lại, nghỉ ngơi cho tốt, tôi có thể làm việc nhanh hơn và tốt hơn."
   },
   {
    "zh": "由于下大雨，比赛暂停了半个小时。",
    "py": "Yóuyú xià dà yǔ, bǐsài zàntíng le bàn gè xiǎoshí.",
    "vn": "Do mưa to, trận đấu tạm dừng nửa tiếng."
   }
  ],
  "hanzi": [
   {
    "c": "暂",
    "p": "zàn",
    "type": "上下结构 · Trên-dưới (giản thể)",
    "st": 12,
    "ord": "斩(biến thể) trên → 日 dưới",
    "rad": "日 (nhật – mặt trời)",
    "mean": "ngắn ngủi",
    "tip": "Bộ mặt trời 日 (thời gian) + 斩(biểu âm) → khoảng THỜI GIAN NGẮN NGỦI, kết hợp 时(thời gian) thành 暂时 = TẠM THỜI.",
    "cf": "斩 (zhǎn – \"chém\", bộ 斤\")",
    "w": "暂时 / 暂停 / 暂且"
   },
   {
    "c": "停",
    "p": "tíng",
    "type": "左右结构 · Trái-phải",
    "st": 11,
    "ord": "亻 trái → 亭 phải",
    "rad": "亻 (nhân)",
    "mean": "dừng",
    "tip": "Người 亻 + 亭(đình, nhà nghỉ chân) → người DỪNG lại nghỉ ở đình → DỪNG, NGỪNG.",
    "cf": "亭 (tíng – đình)",
    "w": "停 / 停电 / 停车 / 不停"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Học mệt rồi thì tạm dừng một chút, đi ra ngoài đi dạo cho đỡ.",
    "answer": "学累了就暂停一下，出去走走，好放松放松。",
    "answerPy": "Xué lèi le jiù zàntíng yíxià, chūqù zǒu zǒu, hǎo fàngsōng fàngsōng.",
    "note": "Ôn ……，好…… (Bài 6 · điểm 4).",
    "pair": "……，好……"
   },
   {
    "promptLang": "vi",
    "prompt": "Do thời tiết không tốt, công viên tạm ngừng mở cửa hai ngày.",
    "answer": "由于天气不好，公园暂停开放两天。",
    "answerPy": "Yóuyú tiānqì bù hǎo, gōngyuán zàntíng kāifàng liǎng tiān.",
    "note": "Ôn 由于 (Bài 2 · điểm 4).",
    "pair": "由于……"
   }
  ]
 },
 {
  "n": 19,
  "zh": "之后",
  "py": "zhīhòu",
  "pos": "Danh từ",
  "vn": "sau, sau khi, về sau",
  "hv": "chi hậu",
  "em": "⏭️",
  "lesson": 2,
  "explain": [
   "Danh từ chỉ thời gian, đứng SAU động từ / sự việc: “sau khi …”. Nghĩa giống 以后 nhưng 之后 hơi văn viết hơn. Cũng có thể đứng đầu câu: 之后 = sau đó."
  ],
  "usage": "V / sự việc + 之后 · ……之后，(Sub) + V · 从那之后.",
  "collo": [
   "毕业之后",
   "休息之后",
   "从那之后",
   "三天之后"
  ],
  "colloFull": [
   {
    "zh": "毕业之后",
    "py": "Bìyè zhīhòu",
    "vn": "sau khi tốt nghiệp"
   },
   {
    "zh": "休息之后",
    "py": "Xiūxi zhīhòu",
    "vn": "sau khi nghỉ ngơi"
   },
   {
    "zh": "从那之后",
    "py": "Cóng nà zhīhòu",
    "vn": "kể từ đó"
   },
   {
    "zh": "三天之后",
    "py": "Sān tiān zhīhòu",
    "vn": "ba ngày sau"
   }
  ],
  "patterns": [
   {
    "s": "V / sự việc + 之后",
    "m": "Sau khi …"
   },
   {
    "s": "之后 ≈ 以后",
    "m": "之后 trang trọng hơn một chút"
   }
  ],
  "ex_zh": "我发现暂停下来、好好休息之后，我能把工作做得更快更好。",
  "ex_py": "Wǒ fāxiàn zàntíng xiàlái, hǎo hǎo xiūxi zhīhòu, wǒ néng bǎ gōngzuò zuò de gèng kuài gèng hǎo.",
  "ex_vn": "Tôi nhận ra sau khi tạm dừng, nghỉ ngơi tử tế, tôi có thể làm việc nhanh hơn và tốt hơn.",
  "exList": [
   {
    "zh": "我发现暂停下来、好好休息之后，我能把工作做得更快更好。",
    "py": "Wǒ fāxiàn zàntíng xiàlái, hǎo hǎo xiūxi zhīhòu, wǒ néng bǎ gōngzuò zuò de gèng kuài gèng hǎo.",
    "vn": "Tôi nhận ra sau khi tạm dừng, nghỉ ngơi tử tế, tôi có thể làm việc nhanh hơn và tốt hơn."
   },
   {
    "zh": "毕业之后，她留在北京工作了。",
    "py": "Bìyè zhīhòu, tā liú zài Běijīng gōngzuò le.",
    "vn": "Sau khi tốt nghiệp, cô ấy ở lại Bắc Kinh làm việc."
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
   },
   {
    "c": "后",
    "p": "hòu",
    "type": "半包围结构 · Bán bao vây",
    "st": 6,
    "ord": "尸 ngoài → 口 trong (giản thể)",
    "rad": "尸 (thi)",
    "mean": "sau, phía sau",
    "tip": "Chữ giản thể mô phỏng hình người bước CHẬM lại phía SAU đoàn người → SAU, PHÍA SAU; 后(sau)+来(đến) = SAU NÀY.",
    "cf": "厚 (hòu – \"dày\", có 厂 thay vì 尸\")",
    "w": "后来 / 以后 / 后边"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Sau khi về đến nhà, tôi mới phát hiện mình để quên điện thoại ở công ty.",
    "answer": "回到家之后，我才发现手机忘在公司了。",
    "answerPy": "Huí dào jiā zhīhòu, wǒ cái fāxiàn shǒujī wàng zài gōngsī le.",
    "note": "之后 + 才.",
    "pair": "……之后，才……"
   },
   {
    "promptLang": "vi",
    "prompt": "Sau khi đến Trung Quốc, theo trình độ tiếng Trung nâng cao, cô ấy ngày càng thích nơi này.",
    "answer": "来中国之后，随着汉语水平的提高，她越来越喜欢这里了。",
    "answerPy": "Lái Zhōngguó zhīhòu, suízhe Hànyǔ shuǐpíng de tígāo, tā yuèláiyuè xǐhuan zhèli le.",
    "note": "Ôn 随着 (Bài 1 · điểm 3).",
    "pair": "随着……"
   }
  ]
 },
 {
  "n": 20,
  "zh": "风景",
  "py": "fēngjǐng",
  "pos": "Danh từ",
  "vn": "phong cảnh, cảnh vật",
  "hv": "phong cảnh",
  "em": "🏞️",
  "lesson": 2,
  "explain": [
   "Cảnh thiên nhiên (núi, sông, cây cỏ) hoặc cảnh đẹp nói chung để ngắm. Gần nghĩa với 景色 (Bài khoá 3) và 美景 (Bài khoá 4). Động từ hay đi kèm: 看风景."
  ],
  "usage": "看风景 · 风景很美 · 好山好水好风景 · 风景区.",
  "collo": [
   "看风景",
   "风景很美",
   "风景区",
   "好风景"
  ],
  "colloFull": [
   {
    "zh": "看风景",
    "py": "Kàn fēngjǐng",
    "vn": "ngắm cảnh"
   },
   {
    "zh": "风景很美",
    "py": "Fēngjǐng hěn měi",
    "vn": "phong cảnh rất đẹp"
   },
   {
    "zh": "风景区",
    "py": "Fēngjǐng qū",
    "vn": "khu thắng cảnh"
   },
   {
    "zh": "好风景",
    "py": "Hǎo fēngjǐng",
    "vn": "cảnh đẹp"
   }
  ],
  "patterns": [
   {
    "s": "看 + 风景",
    "m": "Ngắm cảnh dùng 看"
   },
   {
    "s": "风景 ≈ 景色",
    "m": "风景 dùng rộng hơn, khẩu ngữ hơn"
   }
  ],
  "ex_zh": "现在我周末常来郊区，在好山好水好风景中放松自己。",
  "ex_py": "Xiànzài wǒ zhōumò cháng lái jiāoqū, zài hǎo shān hǎo shuǐ hǎo fēngjǐng zhōng fàngsōng zìjǐ.",
  "ex_vn": "Bây giờ cuối tuần tôi hay đến ngoại ô, thư giãn giữa non xanh nước biếc, phong cảnh đẹp.",
  "exList": [
   {
    "zh": "现在我周末常来郊区，在好山好水好风景中放松自己。",
    "py": "Xiànzài wǒ zhōumò cháng lái jiāoqū, zài hǎo shān hǎo shuǐ hǎo fēngjǐng zhōng fàngsōng zìjǐ.",
    "vn": "Bây giờ cuối tuần tôi hay đến ngoại ô, thư giãn giữa non xanh nước biếc, phong cảnh đẹp."
   },
   {
    "zh": "坐火车可以一路看风景，所以我不太喜欢坐飞机。",
    "py": "Zuò huǒchē kěyǐ yí lù kàn fēngjǐng, suǒyǐ wǒ bú tài xǐhuan zuò fēijī.",
    "vn": "Đi tàu hỏa có thể ngắm cảnh suốt đường, nên tôi không thích đi máy bay lắm."
   }
  ],
  "hanzi": [
   {
    "c": "风",
    "p": "fēng",
    "type": "形声字 · Chữ hình thanh",
    "st": 4,
    "ord": "phẩy → ngang nghiêng móc → phẩy → chấm",
    "rad": "风 (phong – gió)",
    "mean": "gió",
    "tip": "Phồn thể 風 = 凡 (chỉ âm) + 虫 (sâu bọ: người xưa cho rằng gió thổi thì sâu bọ sinh sôi). Giản thể giữ khung 几, thay phần trong bằng hai nét chéo → 风.",
    "cf": "凤 fèng (phượng) — bên trong là 又",
    "w": "风 / 刮风 / 风很大"
   },
   {
    "c": "景",
    "p": "jǐng",
    "type": "上下结构 · Trên-dưới",
    "st": 12,
    "ord": "日 (nhật) trên → 京 (kinh) dưới",
    "rad": "日 (nhật – mặt trời)",
    "mean": "cảnh sắc",
    "tip": "Bộ mặt trời 日 (ánh sáng chiếu cảnh vật) + 京(biểu âm) → CẢNH SẮC dưới ánh sáng, kết hợp 色(màu sắc, vẻ) thành 景色 = PHONG CẢNH.",
    "cf": "京 (jīng – \"kinh đô\", không có bộ 日\")",
    "w": "景色 / 风景 / 景点"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Phong cảnh ở đây vừa đẹp vừa yên tĩnh, rất đáng đến.",
    "answer": "这里的风景既美丽又安静，非常值得来。",
    "answerPy": "Zhèli de fēngjǐng jì měilì yòu ānjìng, fēicháng zhídé lái.",
    "note": "Ôn 既……又…… (Bài 4 · điểm 3).",
    "pair": "既……又……"
   },
   {
    "promptLang": "vi",
    "prompt": "Lấy Quế Lâm làm ví dụ, phong cảnh ở đó đẹp vô cùng.",
    "answer": "拿桂林来说，那里的风景十分美丽。",
    "answerPy": "Ná guì lín láishuō, nàli de fēngjǐng shífēn měilì.",
    "note": "Ôn 拿……来说 (Bài 7 · điểm 3).",
    "pair": "拿……来说"
   }
  ]
 },
 {
  "n": 21,
  "zh": "效率",
  "py": "xiàolǜ",
  "pos": "Danh từ",
  "vn": "hiệu suất, năng suất",
  "hv": "hiệu suất",
  "em": "⚡",
  "lesson": 3,
  "explain": [
   "Lượng công việc làm được trong một khoảng thời gian — làm nhanh, tốt thì 效率高. Lưu ý chữ 率 đọc lǜ (thanh 4, u có hai chấm). Phân biệt: 效率 = hiệu suất (nhanh / chậm), 效果 = hiệu quả (kết quả tốt / xấu)."
  ],
  "usage": "工作 / 学习 + 效率 · 效率高 / 低 · 提高效率 · 效率下降.",
  "collo": [
   "工作效率",
   "提高效率",
   "效率很高",
   "效率下降"
  ],
  "colloFull": [
   {
    "zh": "工作效率",
    "py": "Gōngzuò xiàolǜ",
    "vn": "hiệu suất công việc"
   },
   {
    "zh": "提高效率",
    "py": "Tígāo xiàolǜ",
    "vn": "nâng cao hiệu suất"
   },
   {
    "zh": "效率很高",
    "py": "Xiàolǜ hěn gāo",
    "vn": "năng suất rất cao"
   },
   {
    "zh": "效率下降",
    "py": "Xiàolǜ xiàjiàng",
    "vn": "hiệu suất giảm"
   }
  ],
  "patterns": [
   {
    "s": "效率 + 高 / 低",
    "m": "Không nói ✗ 效率很好"
   },
   {
    "s": "效率 ≠ 效果",
    "m": "hiệu suất ≠ hiệu quả"
   }
  ],
  "ex_zh": "休息好了，再回去上班时，心情愉快，工作效率也更高。",
  "ex_py": "Xiūxi hǎo le, zài huíqù shàngbān shí, xīnqíng yúkuài, gōngzuò xiàolǜ yě gèng gāo.",
  "ex_vn": "Nghỉ ngơi đủ rồi, khi quay lại làm việc, tâm trạng vui vẻ, hiệu suất công việc cũng cao hơn.",
  "exList": [
   {
    "zh": "休息好了，再回去上班时，心情愉快，工作效率也更高。",
    "py": "Xiūxi hǎo le, zài huíqù shàngbān shí, xīnqíng yúkuài, gōngzuò xiàolǜ yě gèng gāo.",
    "vn": "Nghỉ ngơi đủ rồi, khi quay lại làm việc, tâm trạng vui vẻ, hiệu suất công việc cũng cao hơn."
   },
   {
    "zh": "他做事效率很高，一个小时就做完了。",
    "py": "Tā zuò shì xiàolǜ hěn gāo, yí gè xiǎoshí jiù zuò wán le.",
    "vn": "Anh ấy làm việc năng suất rất cao, một tiếng đã làm xong."
   }
  ],
  "hanzi": [
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
   },
   {
    "c": "率",
    "p": "lǜ",
    "type": "象形字 · Chữ tượng hình",
    "st": 11,
    "ord": "亠 → 幺 (hai bên có chấm) → 十",
    "rad": "亠 (đầu – nắp)",
    "mean": "tỉ lệ, suất",
    "tip": "Hình tấm lưới bắt chim (幺 ở giữa là dây, các chấm là mắt lưới). Đọc lǜ khi nghĩa “tỉ lệ, suất” — 效率 (hiệu suất); đọc shuài khi nghĩa “dẫn dắt”.",
    "cf": "卒 zú — dưới cũng là 十 nhưng giữa là 从",
    "w": "效率 / 速率"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Muốn nâng cao hiệu suất học tập, một mặt phải nghỉ ngơi đủ, mặt khác phải có kế hoạch.",
    "answer": "要提高学习效率，一方面要休息够，另一方面要有计划。",
    "answerPy": "Yào tígāo xuéxí xiàolǜ, yìfāngmiàn yào xiūxi gòu, lìngyìfāngmiàn yào yǒu jìhuà.",
    "note": "Ôn 一方面……另一方面…… (Bài 1) + 够 (Bài 5).",
    "pair": "一方面……另一方面……"
   },
   {
    "promptLang": "vi",
    "prompt": "Làm việc cả ngày không nghỉ, hiệu suất sẽ ngày càng thấp.",
    "answer": "一整天工作不休息，效率会越来越低。",
    "answerPy": "Yì zhěng tiān gōngzuò bù xiūxi, xiàolǜ huì yuèláiyuè dī.",
    "note": "Ôn 越来越 (HSK 3).",
    "pair": "越来越……"
   }
  ]
 },
 {
  "n": 22,
  "zh": "下降",
  "py": "xiàjiàng",
  "pos": "Động từ",
  "vn": "giảm, giảm sút, hạ xuống",
  "hv": "hạ giáng",
  "em": "📉",
  "lesson": 3,
  "explain": [
   "Từ cao xuống thấp; số lượng, mức độ giảm đi: 效率下降, 成绩下降, 温度下降, 价格下降. Trái nghĩa: 上升 / 提高."
  ],
  "usage": "N + 下降 · 下降了 + số lượng · 有所下降.",
  "collo": [
   "效率下降",
   "成绩下降",
   "温度下降",
   "价格下降"
  ],
  "colloFull": [
   {
    "zh": "效率下降",
    "py": "Xiàolǜ xiàjiàng",
    "vn": "hiệu suất giảm"
   },
   {
    "zh": "成绩下降",
    "py": "Chéngjì xiàjiàng",
    "vn": "thành tích giảm sút"
   },
   {
    "zh": "温度下降",
    "py": "Wēndù xiàjiàng",
    "vn": "nhiệt độ hạ"
   },
   {
    "zh": "价格下降",
    "py": "Jiàgé xiàjiàng",
    "vn": "giá giảm"
   }
  ],
  "patterns": [
   {
    "s": "Chủ thể + 下降 (+了 + số lượng)",
    "m": "气温下降了五度"
   },
   {
    "s": "下降 ↔ 提高 / 上升",
    "m": "Cặp trái nghĩa"
   }
  ],
  "ex_zh": "休息不够，结果工作效率下降，健康也受到了影响。",
  "ex_py": "Xiūxi bú gòu, jiéguǒ gōngzuò xiàolǜ xiàjiàng, jiànkāng yě shòudào le yǐngxiǎng.",
  "ex_vn": "Nghỉ ngơi không đủ, kết quả là hiệu suất công việc giảm sút, sức khỏe cũng bị ảnh hưởng.",
  "exList": [
   {
    "zh": "休息不够，结果工作效率下降，健康也受到了影响。",
    "py": "Xiūxi bú gòu, jiéguǒ gōngzuò xiàolǜ xiàjiàng, jiànkāng yě shòudào le yǐngxiǎng.",
    "vn": "Nghỉ ngơi không đủ, kết quả là hiệu suất công việc giảm sút, sức khỏe cũng bị ảnh hưởng."
   },
   {
    "zh": "最近他晚上总是玩手机，学习成绩下降了不少。",
    "py": "Zuìjìn tā wǎnshang zǒngshì wán shǒujī, xuéxí chéngjì xiàjiàng le bù shǎo.",
    "vn": "Dạo này tối nào cậu ấy cũng chơi điện thoại, thành tích học tập giảm đi không ít."
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
    "mean": "dưới, xuống, rơi xuống",
    "tip": "Một nét ngắn nằm DƯỚI một đường ngang dài → chỉ vị trí ở phía DƯỚI → DƯỚI, RƠI XUỐNG.",
    "cf": "上 (shàng – \"trên\", đối lập vị trí với 下)",
    "w": "下来 / 下雨 / 下雪"
   },
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
    "prompt": "Do ngủ không đủ, gần đây hiệu suất làm việc của tôi giảm sút.",
    "answer": "由于睡觉不够，最近我的工作效率下降了。",
    "answerPy": "Yóuyú shuìjiào bú gòu, zuìjìn wǒ de gōngzuò xiàolǜ xiàjiàng le.",
    "note": "Ôn 由于 (Bài 2) + 够 (Bài 5).",
    "pair": "由于……"
   },
   {
    "promptLang": "vi",
    "prompt": "Cùng với việc thời tiết trở lạnh, số người đến công viên cũng giảm đi.",
    "answer": "随着天气变冷，来公园的人也下降了。",
    "answerPy": "Suízhe tiānqì biàn lěng, lái gōngyuán de rén yě xiàjiàng le.",
    "note": "Ôn 随着 (Bài 1 · điểm 3).",
    "pair": "随着……"
   }
  ]
 },
 {
  "n": 23,
  "zh": "相比",
  "py": "xiāngbǐ",
  "pos": "Động từ",
  "vn": "so với, so sánh với nhau",
  "hv": "tương tỉ",
  "em": "⚖️",
  "lesson": 3,
  "explain": [
   "Đặt hai sự vật cạnh nhau để so sánh. Hay nhất là cấu trúc 跟 / 与 + A + 相比，B…… (So với A thì B …) — điểm ngữ pháp 3 của bài. Chữ 比 ở đây đọc bǐ."
  ],
  "usage": "跟 / 与 / 和 + A + 相比 · 相比之下 (so ra thì).",
  "collo": [
   "跟……相比",
   "与……相比",
   "相比之下",
   "无法相比"
  ],
  "colloFull": [
   {
    "zh": "跟……相比",
    "py": "Gēn…… xiāngbǐ",
    "vn": "so với …"
   },
   {
    "zh": "与……相比",
    "py": "Yǔ…… xiāngbǐ",
    "vn": "so với … (văn viết)"
   },
   {
    "zh": "相比之下",
    "py": "Xiāngbǐ zhī xià",
    "vn": "so ra thì"
   },
   {
    "zh": "无法相比",
    "py": "Wúfǎ xiāngbǐ",
    "vn": "không thể so sánh"
   }
  ],
  "patterns": [
   {
    "s": "跟 / 与 + A + 相比，B + 更……",
    "m": "So với A, B … hơn"
   },
   {
    "s": "相比 ≈ 比较",
    "m": "相比 thường dùng trong cấu trúc 跟……相比"
   }
  ],
  "ex_zh": "现在越来越多的人认识到，跟一直加班相比，休息好了再工作，效率更高。",
  "ex_py": "Xiànzài yuèláiyuè duō de rén rènshi dào, gēn yìzhí jiābān xiāngbǐ, xiūxi hǎo le zài gōngzuò, xiàolǜ gèng gāo.",
  "ex_vn": "Bây giờ ngày càng nhiều người nhận ra rằng so với tăng ca suốt, nghỉ ngơi đủ rồi mới làm thì hiệu suất cao hơn.",
  "exList": [
   {
    "zh": "现在越来越多的人认识到，跟一直加班相比，休息好了再工作，效率更高。",
    "py": "Xiànzài yuèláiyuè duō de rén rènshi dào, gēn yìzhí jiābān xiāngbǐ, xiūxi hǎo le zài gōngzuò, xiàolǜ gèng gāo.",
    "vn": "Bây giờ ngày càng nhiều người nhận ra rằng so với tăng ca suốt, nghỉ ngơi đủ rồi mới làm thì hiệu suất cao hơn."
   },
   {
    "zh": "与去年相比，今年来这里游玩的人多了一倍。",
    "py": "Yǔ qùnián xiāngbǐ, jīnnián lái zhèli yóuwán de rén duō le yí bèi.",
    "vn": "So với năm ngoái, năm nay số người đến đây chơi tăng gấp đôi."
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
    "c": "比",
    "p": "bǐ",
    "type": "会意字 · Chữ hội ý",
    "st": 4,
    "ord": "匕 (trái) → 匕 (phải)",
    "rad": "比 (tỉ – so sánh)",
    "mean": "so sánh, so với",
    "tip": "Hai người (匕) đứng sát cạnh nhau để đo xem ai cao hơn → so sánh — 比较, 相比, 比赛.",
    "cf": "北 běi (phía bắc) — hai người quay lưng vào nhau; 此 cǐ — bên trái là 止",
    "w": "比较 / 相比 / 比赛"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "So với đi tàu điện ngầm, đi taxi đắt hơn nhiều.",
    "answer": "跟坐地铁相比，打车贵多了。",
    "answerPy": "Gēn zuò dìtiě xiāngbǐ, dǎchē guì duō le.",
    "note": "Mẫu cơ bản 跟……相比.",
    "pair": "跟……相比"
   },
   {
    "promptLang": "vi",
    "prompt": "So với ở nhà xem tivi, đi ngoại ô chơi vừa thư giãn lại vừa có thể vận động.",
    "answer": "跟在家看电视相比，去郊区玩既能放松，又能运动。",
    "answerPy": "Gēn zài jiā kàn diànshì xiāngbǐ, qù jiāoqū wán jì néng fàngsōng, yòu néng yùndòng.",
    "note": "Ôn 既……又…… (Bài 4 · điểm 3).",
    "pair": "既……又……"
   }
  ]
 },
 {
  "n": 24,
  "zh": "因此",
  "py": "yīncǐ",
  "pos": "Liên từ",
  "vn": "vì vậy, do đó",
  "hv": "nhân thử",
  "em": "➡️",
  "lesson": 3,
  "explain": [
   "Liên từ đứng đầu vế sau (hoặc đầu câu sau) để nêu KẾT QUẢ: “vì vậy, do đó”. Trang trọng hơn 所以, hay gặp trong văn viết. Thường đi với 由于 (Bài 2): 由于……，因此……. Lưu ý: không nói ✗ 因为……，因此……."
  ],
  "usage": "(nguyên nhân)，因此 + kết quả · 由于……，因此…….",
  "collo": [
   "由于……，因此……",
   "因此决定",
   "也因此",
   "因此可以说"
  ],
  "colloFull": [
   {
    "zh": "由于……，因此……",
    "py": "Yóuyú……, yīncǐ……",
    "vn": "do … nên …"
   },
   {
    "zh": "因此决定",
    "py": "Yīncǐ juédìng",
    "vn": "vì thế quyết định"
   },
   {
    "zh": "也因此",
    "py": "Yě yīncǐ",
    "vn": "cũng vì vậy"
   },
   {
    "zh": "因此可以说",
    "py": "Yīncǐ kěyǐ shuō",
    "vn": "do đó có thể nói"
   }
  ],
  "patterns": [
   {
    "s": "Nguyên nhân，因此 + kết quả",
    "m": "因此 ≈ 所以 (trang trọng hơn)"
   },
   {
    "s": "由于……，因此……",
    "m": "Cặp hay dùng trong văn viết"
   }
  ],
  "ex_zh": "因此，很多人开始做出改变，提醒自己减轻压力、多多放松。",
  "ex_py": "Yīncǐ, hěn duō rén kāishǐ zuò chū gǎibiàn, tíxǐng zìjǐ jiǎn qīng yālì, duō duō fàngsōng.",
  "ex_vn": "Vì vậy, nhiều người bắt đầu thay đổi, nhắc nhở bản thân giảm áp lực, thư giãn nhiều hơn.",
  "exList": [
   {
    "zh": "因此，很多人开始做出改变，提醒自己减轻压力、多多放松。",
    "py": "Yīncǐ, hěn duō rén kāishǐ zuò chū gǎibiàn, tíxǐng zìjǐ jiǎn qīng yālì, duō duō fàngsōng.",
    "vn": "Vì vậy, nhiều người bắt đầu thay đổi, nhắc nhở bản thân giảm áp lực, thư giãn nhiều hơn."
   },
   {
    "zh": "由于下大雨，因此比赛暂停了。",
    "py": "Yóuyú xià dà yǔ, yīncǐ bǐsài zàntíng le.",
    "vn": "Do mưa to, vì vậy trận đấu tạm dừng."
   }
  ],
  "hanzi": [
   {
    "c": "因",
    "p": "yīn",
    "type": "会意字 · Chữ hội ý",
    "st": 6,
    "ord": "囗 (hai nét đầu) → 大 → nét đóng khung",
    "rad": "囗 (vi – vây quanh)",
    "mean": "nguyên nhân, vì",
    "tip": "Người (大) nằm trên chiếc chiếu trong khung 囗: dựa vào, nhờ vào → nguyên nhân — 因为, 因此, 原因.",
    "cf": "困 kùn (buồn ngủ, khó khăn) — trong là 木; 回 huí — trong là 口",
    "w": "因为 / 因此 / 原因"
   },
   {
    "c": "此",
    "p": "cǐ",
    "type": "左右结构 · Trái-phải",
    "st": 6,
    "ord": "止 (chỉ) trái → 匕 phải",
    "rad": "止 (chỉ – dừng)",
    "mean": "đây, này",
    "tip": "此 mang nghĩa NÀY, ĐÂY, kết hợp 因(nguyên nhân) thành 因此 = VÌ ĐIỀU NÀY (do đó, vì vậy).",
    "cf": "些 (xiē – \"một ít\", bộ 二\")",
    "w": "因此 / 因为 / 由此"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Anh ấy đã luyện tập rất lâu, vì vậy lần này thi đấu một chút cũng không căng thẳng.",
    "answer": "他练习了很长时间，因此这次比赛一点儿也不紧张。",
    "answerPy": "Tā liànxí le hěn cháng shíjiān, yīncǐ zhè cì bǐsài yìdiǎnr yě bù jǐnzhāng.",
    "note": "因此 nối nguyên nhân – kết quả.",
    "pair": "……，因此……"
   },
   {
    "promptLang": "vi",
    "prompt": "Giao thông ở Bắc Kinh rất tiện, vì vậy đi đâu cũng không tốn mấy thời gian.",
    "answer": "北京交通很方便，因此去哪儿都用不了多少时间。",
    "answerPy": "Běijīng jiāotōng hěn fāngbiàn, yīncǐ qù nǎr dōu yòng bù le duōshǎo shíjiān.",
    "note": "Ôn V不了 (Bài 4 · điểm 1).",
    "pair": "用不了"
   }
  ]
 },
 {
  "n": 25,
  "zh": "提醒",
  "py": "tíxǐng",
  "pos": "Động từ",
  "vn": "nhắc nhở, nhắc",
  "hv": "đề tỉnh",
  "em": "⏰",
  "lesson": 3,
  "explain": [
   "Nói cho ai biết / nhớ để họ chú ý, đừng quên. Cấu trúc: 提醒 + ai + V (nhắc ai làm gì). Chữ 醒 = tỉnh (đã học ở Bài 6: 醒 = tỉnh dậy) → “làm cho tỉnh ra, nhớ ra”."
  ],
  "usage": "提醒 + ai + V / 别…… · 提醒自己 · 谢谢你的提醒.",
  "collo": [
   "提醒自己",
   "提醒他早点儿睡",
   "谢谢你的提醒",
   "再提醒一下"
  ],
  "colloFull": [
   {
    "zh": "提醒自己",
    "py": "Tíxǐng zìjǐ",
    "vn": "nhắc nhở bản thân"
   },
   {
    "zh": "提醒他早点儿睡",
    "py": "Tíxǐng tā zǎo diǎnr shuì",
    "vn": "nhắc anh ấy ngủ sớm"
   },
   {
    "zh": "谢谢你的提醒",
    "py": "Xièxiè nǐ de tíxǐng",
    "vn": "cảm ơn bạn đã nhắc"
   },
   {
    "zh": "再提醒一下",
    "py": "Zài tíxǐng yíxià",
    "vn": "nhắc lại lần nữa"
   }
  ],
  "patterns": [
   {
    "s": "提醒 + ai + V",
    "m": "nhắc ai làm gì"
   },
   {
    "s": "提醒 + ai + 别 / 不要 + V",
    "m": "nhắc ai đừng làm gì"
   }
  ],
  "ex_zh": "因此，很多人开始做出改变，提醒自己减轻压力、多多放松。",
  "ex_py": "Yīncǐ, hěn duō rén kāishǐ zuò chū gǎibiàn, tíxǐng zìjǐ jiǎn qīng yālì, duō duō fàngsōng.",
  "ex_vn": "Vì vậy, nhiều người bắt đầu thay đổi, nhắc nhở bản thân giảm bớt áp lực, thư giãn nhiều hơn.",
  "exList": [
   {
    "zh": "因此，很多人开始做出改变，提醒自己减轻压力、多多放松。",
    "py": "Yīncǐ, hěn duō rén kāishǐ zuò chū gǎibiàn, tíxǐng zìjǐ jiǎn qīng yālì, duō duō fàngsōng.",
    "vn": "Vì vậy, nhiều người bắt đầu thay đổi, nhắc nhở bản thân giảm bớt áp lực, thư giãn nhiều hơn."
   },
   {
    "zh": "下雨天妈妈总是提醒我，出门时别忘了带雨伞。",
    "py": "Xiàyǔ tiān māma zǒngshì tíxǐng wǒ, chūmén shí bié wàng le dài yǔ sǎn.",
    "vn": "Trời mưa mẹ luôn nhắc tôi ra ngoài đừng quên mang ô."
   }
  ],
  "hanzi": [
   {
    "c": "提",
    "p": "tí",
    "type": "左右结构 · Trái-phải",
    "st": 12,
    "ord": "扌 (thủ) trái → 是 phải",
    "rad": "扌 (thủ – tay)",
    "mean": "xách, nhắc đến",
    "tip": "Bộ tay 扌 (hành động cầm/xách) + 是 (biểu âm) → dùng tay XÁCH lên, mở rộng thành NHẮC ĐẾN (đưa một chuyện ra).",
    "cf": "题 (tí – \"đề bài\", có bộ 页\")",
    "w": "提到 / 别提了 / 提问"
   },
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
    "prompt": "Nhắc tôi một chút nhé, ngày mai ít nhất phải đến sớm mười phút.",
    "answer": "你提醒我一下，明天至少要早来十分钟。",
    "answerPy": "Nǐ tíxǐng wǒ yíxià, míngtiān zhìshǎo yào zǎo lái shí fēnzhōng.",
    "note": "Ôn 至少 (Bài 5 · điểm 1).",
    "pair": "提醒 + ai"
   },
   {
    "promptLang": "vi",
    "prompt": "Bác sĩ nhắc anh ấy đừng thức khuya nữa, nếu không bệnh sẽ không khỏi được.",
    "answer": "医生提醒他别再熬夜了，否则病好不了。",
    "answerPy": "Yīshēng tíxǐng tā bié zài áoyè le, fǒuzé bìng hǎo bù liǎo.",
    "note": "Ôn V不了 (Bài 4) + 否则 (điểm 2).",
    "pair": "提醒 + ai + 别……"
   }
  ]
 },
 {
  "n": 26,
  "zh": "与",
  "py": "yǔ",
  "pos": "Giới từ / Liên từ",
  "vn": "với, cùng với; và",
  "hv": "dữ",
  "em": "🤝",
  "lesson": 3,
  "explain": [
   "Nghĩa giống 跟 / 和 nhưng dùng trong VĂN VIẾT, hoàn cảnh trang trọng. Giới từ: 与朋友们去郊区游玩 (cùng bạn bè), 与……相比 (so với). Liên từ: 老师与学生 (thầy và trò)."
  ],
  "usage": "与 + ai + V · 与……相比 · 与……有关 · A 与 B.",
  "collo": [
   "与朋友",
   "与……相比",
   "与……有关",
   "老师与学生"
  ],
  "colloFull": [
   {
    "zh": "与朋友",
    "py": "Yǔ péngyou",
    "vn": "cùng bạn bè"
   },
   {
    "zh": "与……相比",
    "py": "Yǔ…… xiāngbǐ",
    "vn": "so với …"
   },
   {
    "zh": "与……有关",
    "py": "Yǔ…… yǒuguān",
    "vn": "có liên quan đến …"
   },
   {
    "zh": "老师与学生",
    "py": "Lǎoshī yǔ xuésheng",
    "vn": "thầy và trò"
   }
  ],
  "patterns": [
   {
    "s": "与 = 跟 / 和 (văn viết)",
    "m": "Khẩu ngữ dùng 跟"
   },
   {
    "s": "与 + A + 相比",
    "m": "So với A"
   }
  ],
  "ex_zh": "杨同乐周末时或者与朋友们去郊区游玩，在大自然美丽的景色中好好放松自己。",
  "ex_py": "Yáng Tónglè zhōumò shí huòzhě yǔ péngyou men qù jiāoqū yóuwán, zài dàzìrán měilì de jǐngsè zhōng hǎo hǎo fàngsōng zìjǐ.",
  "ex_vn": "Cuối tuần, Dương Đồng Lạc có khi cùng bạn bè đi chơi ngoại ô, thư giãn giữa cảnh sắc tươi đẹp của thiên nhiên.",
  "exList": [
   {
    "zh": "杨同乐周末时或者与朋友们去郊区游玩，在大自然美丽的景色中好好放松自己。",
    "py": "Yáng Tónglè zhōumò shí huòzhě yǔ péngyou men qù jiāoqū yóuwán, zài dàzìrán měilì de jǐngsè zhōng hǎo hǎo fàngsōng zìjǐ.",
    "vn": "Cuối tuần, Dương Đồng Lạc có khi cùng bạn bè đi chơi ngoại ô, thư giãn giữa cảnh sắc tươi đẹp của thiên nhiên."
   },
   {
    "zh": "与市区相比，郊区的空气更新鲜。",
    "py": "Yǔ shìqū xiāngbǐ, jiāoqū de kōngqì gēng xīnxiān.",
    "vn": "So với nội thành, không khí ngoại ô trong lành hơn."
   }
  ],
  "hanzi": [
   {
    "c": "与",
    "p": "yǔ",
    "type": "独体字 · Chữ đơn (giản thể)",
    "st": 3,
    "ord": "nét liền",
    "rad": "一 (nhất)",
    "mean": "với, và",
    "tip": "Chữ giản thể mượn hình tượng hai tay TRAO cho nhau vật gì đó → chỉ sự CÙNG NHAU, mở rộng thành liên từ/giới từ VÀ, VỚI (dùng trong văn viết).",
    "cf": "与 dễ nhầm với 写 (xiě – \"viết\")",
    "w": "与 / 参与 / 与其"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Cuốn sách này có liên quan đến lịch sử Trung Quốc, rất đáng đọc.",
    "answer": "这本书与中国历史有关，非常值得看。",
    "answerPy": "Zhè běn shū yǔ Zhōngguó lìshǐ yǒuguān, fēicháng zhídé kàn.",
    "note": "与……有关 + 值得.",
    "pair": "与……有关"
   },
   {
    "promptLang": "vi",
    "prompt": "Về mặt giao thông, so với trước đây thì thành phố này tiện hơn nhiều.",
    "answer": "在交通方面，与以前相比，这个城市方便多了。",
    "answerPy": "Zài jiāotōng fāngmiàn, yǔ yǐqián xiāngbǐ, zhège chéngshì fāngbiàn duō le.",
    "note": "Ôn 在……方面 (Bài 7 · điểm 1).",
    "pair": "在……方面"
   }
  ]
 },
 {
  "n": 27,
  "zh": "大自然",
  "py": "dàzìrán",
  "pos": "Danh từ",
  "vn": "thiên nhiên, giới tự nhiên",
  "hv": "đại tự nhiên",
  "em": "🌿",
  "lesson": 3,
  "explain": [
   "Thế giới tự nhiên: núi, sông, cây cỏ, trời đất… (không phải do con người làm ra). Thường dùng với 在……中 / 里: 在大自然中放松, 走进大自然."
  ],
  "usage": "在大自然中 · 走进大自然 · 亲近大自然 · 大自然的美.",
  "collo": [
   "走进大自然",
   "在大自然中",
   "大自然的声音",
   "保护大自然"
  ],
  "colloFull": [
   {
    "zh": "走进大自然",
    "py": "Zǒu jìn dàzìrán",
    "vn": "bước vào thiên nhiên"
   },
   {
    "zh": "在大自然中",
    "py": "Zài dàzìrán zhōng",
    "vn": "giữa thiên nhiên"
   },
   {
    "zh": "大自然的声音",
    "py": "Dàzìrán de shēngyīn",
    "vn": "âm thanh thiên nhiên"
   },
   {
    "zh": "保护大自然",
    "py": "Bǎohù dàzìrán",
    "vn": "bảo vệ thiên nhiên"
   }
  ],
  "patterns": [
   {
    "s": "在 + 大自然 + 中 / 里 + V",
    "m": "Làm gì giữa thiên nhiên"
   },
   {
    "s": "大自然 ≠ 自然 (tự nhiên, phó từ)",
    "m": "自然 còn nghĩa “đương nhiên”"
   }
  ],
  "ex_zh": "杨同乐周末时或者与朋友们去郊区游玩，在大自然美丽的景色中好好放松自己。",
  "ex_py": "Yáng Tónglè zhōumò shí huòzhě yǔ péngyou men qù jiāoqū yóuwán, zài dàzìrán měilì de jǐngsè zhōng hǎo hǎo fàngsōng zìjǐ.",
  "ex_vn": "Cuối tuần Dương Đồng Lạc có khi cùng bạn bè đi chơi ngoại ô, thư giãn thoải mái giữa cảnh sắc tươi đẹp của thiên nhiên.",
  "exList": [
   {
    "zh": "杨同乐周末时或者与朋友们去郊区游玩，在大自然美丽的景色中好好放松自己。",
    "py": "Yáng Tónglè zhōumò shí huòzhě yǔ péngyou men qù jiāoqū yóuwán, zài dàzìrán měilì de jǐngsè zhōng hǎo hǎo fàngsōng zìjǐ.",
    "vn": "Cuối tuần Dương Đồng Lạc có khi cùng bạn bè đi chơi ngoại ô, thư giãn thoải mái giữa cảnh sắc tươi đẹp của thiên nhiên."
   },
   {
    "zh": "孩子们应该多去大自然里走走，少玩手机。",
    "py": "Háizi men yīnggāi duō qù dàzìrán lǐ zǒu zǒu, shǎo wán shǒujī.",
    "vn": "Trẻ con nên đi dạo giữa thiên nhiên nhiều hơn, ít chơi điện thoại thôi."
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
    "c": "自",
    "p": "zì",
    "type": "独体字 · Chữ đơn",
    "st": 6,
    "ord": "丿 → 目",
    "rad": "自 (tự)",
    "mean": "tự, từ",
    "tip": "Chữ tượng hình cái MŨI (chỉ vào mình) → TỰ, mở rộng thành TỪ (nguồn gốc), kết hợp 来 thành 来自 = ĐẾN TỪ.",
    "cf": "目 (mù – \"mắt\", thiếu nét phẩy trên)",
    "w": "来自 / 自己 / 自然"
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
    "prompt": "Tôi thích đến gần thiên nhiên hơn, lấy cuối tuần trước làm ví dụ, chúng tôi đã đi leo núi.",
    "answer": "我更喜欢接近大自然，拿上个周末来说，我们去爬山了。",
    "answerPy": "Wǒ gèng xǐhuan jiējìn dàzìrán, ná shàng gè zhōumò láishuō, wǒmen qù páshān le.",
    "note": "Ôn 拿……来说 (Bài 7 · điểm 3).",
    "pair": "拿……来说"
   },
   {
    "promptLang": "vi",
    "prompt": "Đi dạo giữa thiên nhiên có thể khiến tâm trạng con người vui vẻ hơn.",
    "answer": "在大自然中走走，能使人心情更愉快。",
    "answerPy": "Zài dàzìrán zhōng zǒu zǒu, néng shǐ rén xīnqíng gèng yúkuài.",
    "note": "Ôn 使 (Bài 7 · điểm 4).",
    "pair": "使 + ai + Adj"
   }
  ]
 },
 {
  "n": 28,
  "zh": "美丽",
  "py": "měilì",
  "pos": "Tính từ",
  "vn": "đẹp, xinh đẹp, tươi đẹp",
  "hv": "mỹ lệ",
  "em": "🌸",
  "lesson": 3,
  "explain": [
   "Đẹp (cảnh vật, thành phố, người, câu chuyện…) — văn viết, trang trọng hơn 漂亮. Hay làm định ngữ: 美丽的景色 / 美丽的城市."
  ],
  "usage": "美丽的 + N · 十分美丽 · 美丽的大自然.",
  "collo": [
   "美丽的景色",
   "美丽的城市",
   "十分美丽",
   "美丽的故事"
  ],
  "colloFull": [
   {
    "zh": "美丽的景色",
    "py": "Měilì de jǐngsè",
    "vn": "cảnh sắc đẹp"
   },
   {
    "zh": "美丽的城市",
    "py": "Měilì de chéngshì",
    "vn": "thành phố xinh đẹp"
   },
   {
    "zh": "十分美丽",
    "py": "Shífēn měilì",
    "vn": "vô cùng đẹp"
   },
   {
    "zh": "美丽的故事",
    "py": "Měilì de gùshì",
    "vn": "câu chuyện đẹp"
   }
  ],
  "patterns": [
   {
    "s": "美丽的 + N",
    "m": "Định ngữ"
   },
   {
    "s": "美丽 ≈ 漂亮",
    "m": "美丽 trang trọng, văn viết hơn"
   }
  ],
  "ex_zh": "在大自然美丽的景色中好好放松自己。",
  "ex_py": "Zài dàzìrán měilì de jǐngsè zhōng hǎo hǎo fàngsōng zìjǐ.",
  "ex_vn": "Thư giãn thoải mái giữa cảnh sắc tươi đẹp của thiên nhiên.",
  "exList": [
   {
    "zh": "在大自然美丽的景色中好好放松自己。",
    "py": "Zài dàzìrán měilì de jǐngsè zhōng hǎo hǎo fàngsōng zìjǐ.",
    "vn": "Thư giãn thoải mái giữa cảnh sắc tươi đẹp của thiên nhiên."
   },
   {
    "zh": "杭州是一个美丽的城市，每年都有很多人去那儿游玩。",
    "py": "Háng zhōu shì yí gè měilì de chéngshì, měi nián dōu yǒu hěn duō rén qù nàr yóuwán.",
    "vn": "Hàng Châu là một thành phố xinh đẹp, năm nào cũng có rất nhiều người đến đó chơi."
   }
  ],
  "hanzi": [
   {
    "c": "美",
    "p": "měi",
    "type": "上下结构 · Trên-dưới",
    "st": 9,
    "ord": "羊 trên → 大 dưới",
    "rad": "羊 (dương – dê)",
    "mean": "đẹp",
    "tip": "羊(dê, con vật quý thời cổ) lớn 大 → biểu trưng cho sự to đẹp, mở rộng nghĩa ĐẸP.",
    "cf": "羊 (yáng – \"dê\", không có 大\")",
    "w": "小美 / 漂亮 / 美丽"
   },
   {
    "c": "丽",
    "p": "lì",
    "type": "上下结构 · Trên-dưới (giản thể)",
    "st": 7,
    "ord": "一 → 冂丶 → 冂丶",
    "rad": "一 (nhất)",
    "mean": "đẹp",
    "tip": "Giản thể của 麗 (con hươu có cặp sừng đẹp). 美丽 = MỸ LỆ = đẹp.",
    "cf": "两 (liǎng – hai)",
    "w": "美丽 / 华丽"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Phong cảnh ở đây đẹp quá, tiếc là đi vội, không kịp chụp ảnh.",
    "answer": "这里的风景太美丽了，可惜走得太急，来不及拍照。",
    "answerPy": "Zhèli de fēngjǐng tài měilì le, kěxī zǒu de tài jí, láibùjí pāizhào.",
    "note": "Ôn 来不及 (Bài 4 · điểm 4).",
    "pair": "来不及"
   },
   {
    "promptLang": "vi",
    "prompt": "Thành phố này không những xinh đẹp mà còn rất sạch sẽ.",
    "answer": "这个城市不仅美丽，而且非常干净。",
    "answerPy": "Zhège chéngshì bùjǐn měilì, érqiě fēicháng gānjìng.",
    "note": "Ôn 不仅……而且…… (Bài 3 · điểm 2).",
    "pair": "不仅……而且……"
   }
  ]
 },
 {
  "n": 29,
  "zh": "景色",
  "py": "jǐngsè",
  "pos": "Danh từ",
  "vn": "cảnh sắc, phong cảnh",
  "hv": "cảnh sắc",
  "em": "🌅",
  "lesson": 3,
  "explain": [
   "Cảnh vật nhìn thấy được (núi sông, trời mây, cây cỏ, phố xá…) — gần nghĩa 风景, hơi văn viết. Hay kết hợp: 景色美丽 / 景色很美 / 春天的景色."
  ],
  "usage": "美丽的景色 · 景色很美 · 春天的景色 · 欣赏景色.",
  "collo": [
   "美丽的景色",
   "景色很美",
   "春天的景色",
   "窗外的景色"
  ],
  "colloFull": [
   {
    "zh": "美丽的景色",
    "py": "Měilì de jǐngsè",
    "vn": "cảnh sắc tươi đẹp"
   },
   {
    "zh": "景色很美",
    "py": "Jǐngsè hěn měi",
    "vn": "cảnh rất đẹp"
   },
   {
    "zh": "春天的景色",
    "py": "Chūntiān de jǐngsè",
    "vn": "cảnh xuân"
   },
   {
    "zh": "窗外的景色",
    "py": "Chuāng wài de jǐngsè",
    "vn": "cảnh ngoài cửa sổ"
   }
  ],
  "patterns": [
   {
    "s": "(nơi / mùa) + 的 + 景色",
    "m": "Cảnh của nơi nào, mùa nào"
   },
   {
    "s": "景色 ≈ 风景 ≈ 美景",
    "m": "美景 = cảnh đẹp (đã mang nghĩa “đẹp”)"
   }
  ],
  "ex_zh": "在大自然美丽的景色中好好放松自己。",
  "ex_py": "Zài dàzìrán měilì de jǐngsè zhōng hǎo hǎo fàngsōng zìjǐ.",
  "ex_vn": "Thư giãn thoải mái giữa cảnh sắc tươi đẹp của thiên nhiên.",
  "exList": [
   {
    "zh": "在大自然美丽的景色中好好放松自己。",
    "py": "Zài dàzìrán měilì de jǐngsè zhōng hǎo hǎo fàngsōng zìjǐ.",
    "vn": "Thư giãn thoải mái giữa cảnh sắc tươi đẹp của thiên nhiên."
   },
   {
    "zh": "春天，这里的景色真漂亮！",
    "py": "Chūntiān, zhèli de jǐngsè zhēn piàoliang!",
    "vn": "Mùa xuân, cảnh sắc ở đây đẹp thật!"
   }
  ],
  "hanzi": [
   {
    "c": "景",
    "p": "jǐng",
    "type": "上下结构 · Trên-dưới",
    "st": 12,
    "ord": "日 (nhật) trên → 京 (kinh) dưới",
    "rad": "日 (nhật – mặt trời)",
    "mean": "cảnh sắc",
    "tip": "Bộ mặt trời 日 (ánh sáng chiếu cảnh vật) + 京(biểu âm) → CẢNH SẮC dưới ánh sáng, kết hợp 色(màu sắc, vẻ) thành 景色 = PHONG CẢNH.",
    "cf": "京 (jīng – \"kinh đô\", không có bộ 日\")",
    "w": "景色 / 风景 / 景点"
   },
   {
    "c": "色",
    "p": "sè",
    "type": "会意字 · Chữ hội ý",
    "st": 6,
    "ord": "⺈ → 巴",
    "rad": "⺈ (đao trên đầu)",
    "mean": "màu sắc; cảnh sắc",
    "tip": "Trên là ⺈, dưới là 巴: người cúi xuống nhìn sắc mặt người kia → sắc mặt, màu sắc; mở rộng thành “cảnh sắc” — 景色, 颜色.",
    "cf": "巴 bā — không có ⺈ ở trên; 免 miǎn — trên cũng là ⺈ nhưng dưới khác",
    "w": "颜色 / 景色 / 红色"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Cảnh sắc ở đây vừa đẹp vừa yên tĩnh, chẳng trách nhiều người đến thế.",
    "answer": "这里的景色既美丽又安静，难怪这么多人来。",
    "answerPy": "Zhèli de jǐngsè jì měilì yòu ānjìng, nánguài zhème duō rén lái.",
    "note": "Ôn 既……又…… (Bài 4 · điểm 3).",
    "pair": "既……又……"
   },
   {
    "promptLang": "vi",
    "prompt": "Ngồi tàu cao tốc có thể ngắm cảnh ngoài cửa sổ, thỉnh thoảng còn thấy được núi tuyết.",
    "answer": "坐高铁可以看窗外的景色，偶尔还能看到雪山。",
    "answerPy": "Zuò gāotiě kěyǐ kàn chuāng wài de jǐngsè, ǒu'ěr hái néng kàn dào xuě shān.",
    "note": "Ôn 偶尔 (Bài 6 · điểm 3).",
    "pair": "偶尔"
   }
  ]
 },
 {
  "n": 30,
  "zh": "首都",
  "py": "shǒudū",
  "pos": "Danh từ",
  "vn": "thủ đô",
  "hv": "thủ đô",
  "em": "🏛️",
  "lesson": 4,
  "explain": [
   "Thành phố nơi đặt cơ quan đầu não của một quốc gia. 首 = đầu, thứ nhất; 都 (dū) = thành phố lớn — chú ý chữ 都 ở đây đọc dū, không phải dōu."
  ],
  "usage": "中国的首都 · 首都北京 · 首都机场.",
  "collo": [
   "中国的首都",
   "首都北京",
   "首都机场",
   "越南首都"
  ],
  "colloFull": [
   {
    "zh": "中国的首都",
    "py": "Zhōngguó de shǒudū",
    "vn": "thủ đô Trung Quốc"
   },
   {
    "zh": "首都北京",
    "py": "Shǒudū Běijīng",
    "vn": "thủ đô Bắc Kinh"
   },
   {
    "zh": "首都机场",
    "py": "Shǒudū jīchǎng",
    "vn": "sân bay Thủ đô"
   },
   {
    "zh": "越南首都",
    "py": "Yuènán shǒudū",
    "vn": "thủ đô Việt Nam"
   }
  ],
  "patterns": [
   {
    "s": "Nước + 的 + 首都 + 是 + thành phố",
    "m": "…… 的首都是……"
   },
   {
    "s": "都 dū ≠ 都 dōu",
    "m": "Từ đa âm: 首都 / 都市 đọc dū"
   }
  ],
  "ex_zh": "我生活在中国的首都——北京。",
  "ex_py": "Wǒ shēnghuó zài Zhōngguó de shǒudū — Běijīng.",
  "ex_vn": "Tôi sống ở thủ đô của Trung Quốc — Bắc Kinh.",
  "exList": [
   {
    "zh": "我生活在中国的首都——北京。",
    "py": "Wǒ shēnghuó zài Zhōngguó de shǒudū — Běijīng.",
    "vn": "Tôi sống ở thủ đô của Trung Quốc — Bắc Kinh."
   },
   {
    "zh": "河内是越南的首都，也是一个有千年历史的城市。",
    "py": "Hé nèi shì Yuènán de shǒudū, yě shì yí gè yǒu qiān nián lìshǐ de chéngshì.",
    "vn": "Hà Nội là thủ đô của Việt Nam, cũng là một thành phố có lịch sử nghìn năm."
   }
  ],
  "hanzi": [
   {
    "c": "首",
    "p": "shǒu",
    "type": "独体字 · Chữ đơn",
    "st": 9,
    "ord": "nét liền",
    "rad": "首 (thủ – đầu)",
    "mean": "đầu, đứng đầu",
    "tip": "Chữ tượng hình cái ĐẦU (có tóc phía trên) → mở rộng nghĩa ĐỨNG ĐẦU, TRƯỚC TIÊN.",
    "cf": "首 dễ nhầm với 道 (dào – \"đường\", có bộ 辶\")",
    "w": "首先 / 首都 / 首次"
   },
   {
    "c": "都",
    "p": "dū",
    "type": "左右结构 · Trái-phải",
    "st": 10,
    "ord": "者 trái → 阝 phải",
    "rad": "阝 (ấp)",
    "mean": "đô thị",
    "tip": "者 + 阝(ấp, thành) → thành lớn → ĐÔ (dū). Đọc dōu = đều (phó từ). 首都 = thủ đô.",
    "cf": "者 (zhě – người)",
    "w": "首都 / 都市 / 都 (dōu)"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Thủ đô của Việt Nam là Hà Nội, nơi đó vừa có hồ vừa có phố cổ.",
    "answer": "越南的首都是河内，那里有湖有老街。",
    "answerPy": "Yuènán de shǒudū shì hé nèi, nàli yǒu hú yǒu lǎo jiē.",
    "note": "Dùng 有A有B (điểm 4 bài này).",
    "pair": "有A有B"
   },
   {
    "promptLang": "vi",
    "prompt": "Lấy Bắc Kinh làm ví dụ, ở thủ đô có rất nhiều thắng cảnh nổi tiếng.",
    "answer": "拿北京来说，首都有很多有名的景点。",
    "answerPy": "Ná Běijīng láishuō, shǒudū yǒu hěn duō yǒumíng de jǐngdiǎn.",
    "note": "Ôn 拿……来说 (Bài 7 · điểm 3).",
    "pair": "拿……来说"
   }
  ]
 },
 {
  "n": 31,
  "zh": "市区",
  "py": "shìqū",
  "pos": "Danh từ",
  "vn": "nội thành, khu thành phố",
  "hv": "thị khu",
  "em": "🏙️",
  "lesson": 4,
  "explain": [
   "Khu vực trung tâm, đông đúc của thành phố (nhiều nhà cao tầng, cửa hàng). Trái nghĩa với 郊区 (ngoại ô — Bài khoá 1)."
  ],
  "usage": "市区公园 · 住在市区 · 在市区 · 离市区远.",
  "collo": [
   "住在市区",
   "市区公园",
   "离市区远",
   "市区交通"
  ],
  "colloFull": [
   {
    "zh": "住在市区",
    "py": "Zhù zài shìqū",
    "vn": "sống ở nội thành"
   },
   {
    "zh": "市区公园",
    "py": "Shìqū gōngyuán",
    "vn": "công viên nội thành"
   },
   {
    "zh": "离市区远",
    "py": "Lí shìqū yuǎn",
    "vn": "xa nội thành"
   },
   {
    "zh": "市区交通",
    "py": "Shìqū jiāotōng",
    "vn": "giao thông nội thành"
   }
  ],
  "patterns": [
   {
    "s": "市区 ↔ 郊区",
    "m": "nội thành ↔ ngoại ô"
   },
   {
    "s": "从郊区到市区",
    "m": "Từ ngoại ô vào nội thành"
   }
  ],
  "ex_zh": "在北京，周末的时候，有人会在市区公园走走，看看眼前的美景。",
  "ex_py": "Zài Běijīng, zhōumò de shíhou, yǒurén huì zài shìqū gōngyuán zǒu zǒu, kàn kàn yǎnqián de měijǐng.",
  "ex_vn": "Ở Bắc Kinh, cuối tuần có người sẽ đi dạo ở công viên trong nội thành, ngắm cảnh đẹp trước mắt.",
  "exList": [
   {
    "zh": "在北京，周末的时候，有人会在市区公园走走，看看眼前的美景。",
    "py": "Zài Běijīng, zhōumò de shíhou, yǒurén huì zài shìqū gōngyuán zǒu zǒu, kàn kàn yǎnqián de měijǐng.",
    "vn": "Ở Bắc Kinh, cuối tuần có người sẽ đi dạo ở công viên trong nội thành, ngắm cảnh đẹp trước mắt."
   },
   {
    "zh": "我家住在市区，上班很方便。",
    "py": "Wǒ jiā zhù zài shìqū, shàngbān hěn fāngbiàn.",
    "vn": "Nhà tôi ở nội thành, đi làm rất tiện."
   }
  ],
  "hanzi": [
   {
    "c": "市",
    "p": "shì",
    "type": "上下结构 · Trên-dưới",
    "st": 5,
    "ord": "亠 trên → 巾(cân) dưới",
    "rad": "巾 (cân – khăn, vải)",
    "mean": "chợ, thành phố",
    "tip": "亠(mái che) trên + 巾(vải, hàng hoá) dưới → nơi bày VẢI VÓC hàng hoá để buôn bán, tức CHỢ.",
    "cf": "布 (bù – \"vải\", cũng có bộ 巾 nhưng phần trên là 十\")",
    "w": "超市 / 市场 / 城市"
   },
   {
    "c": "区",
    "p": "qū",
    "type": "会意字 · Chữ hội ý",
    "st": 4,
    "ord": "匚 (nét ngang trên) → 乂 → nét gập dưới",
    "rad": "匚 (phương – cái hộp, khung)",
    "mean": "khu, vùng",
    "tip": "Khung 匚 bao quanh chữ 乂: một khoảng đất được khoanh vùng lại → khu vực — 郊区, 市区, 小区.",
    "cf": "巨 jù (to lớn) — trong là コ; 匹 pǐ — trong là 儿",
    "w": "郊区 / 市区 / 小区"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Nhà ở nội thành tuy đắt, nhưng đi lại rất tiện.",
    "answer": "市区的房子虽然贵，但是交通很方便。",
    "answerPy": "Shìqū de fángzi suīrán guì, dànshì jiāotōng hěn fāngbiàn.",
    "note": "Ôn 虽然……但是…… (HSK 3).",
    "pair": "虽然……但是……"
   },
   {
    "promptLang": "vi",
    "prompt": "So với nội thành, ngoại ô yên tĩnh hơn nhiều.",
    "answer": "跟市区相比，郊区安静多了。",
    "answerPy": "Gēn shìqū xiāngbǐ, jiāoqū ānjìng duō le.",
    "note": "Dùng 跟……相比 (điểm 3 bài này).",
    "pair": "跟……相比"
   }
  ]
 },
 {
  "n": 32,
  "zh": "眼前",
  "py": "yǎnqián",
  "pos": "Danh từ",
  "vn": "trước mắt, ngay trước mặt",
  "hv": "nhãn tiền",
  "em": "👀",
  "lesson": 4,
  "explain": [
   "Ngay trước mắt (không gian) hoặc hiện tại, lúc này (thời gian: 眼前的问题 = vấn đề trước mắt). Hán Việt “nhãn tiền” — tiếng Việt cũng dùng “quả báo nhãn tiền”."
  ],
  "usage": "眼前的 + N · 在眼前 · 出现在眼前.",
  "collo": [
   "眼前的美景",
   "就在眼前",
   "出现在眼前",
   "眼前的问题"
  ],
  "colloFull": [
   {
    "zh": "眼前的美景",
    "py": "Yǎnqián de měijǐng",
    "vn": "cảnh đẹp trước mắt"
   },
   {
    "zh": "就在眼前",
    "py": "Jiù zài yǎnqián",
    "vn": "ngay trước mắt"
   },
   {
    "zh": "出现在眼前",
    "py": "Chūxiàn zài yǎnqián",
    "vn": "hiện ra trước mắt"
   },
   {
    "zh": "眼前的问题",
    "py": "Yǎnqián de wèntí",
    "vn": "vấn đề trước mắt"
   }
  ],
  "patterns": [
   {
    "s": "眼前 + 的 + N",
    "m": "Định ngữ"
   },
   {
    "s": "出现在 + 眼前",
    "m": "Hiện ra trước mắt"
   }
  ],
  "ex_zh": "有人会在市区公园走走，看看眼前的美景。",
  "ex_py": "Yǒurén huì zài shìqū gōngyuán zǒu zǒu, kàn kàn yǎnqián de měijǐng.",
  "ex_vn": "Có người sẽ đi dạo trong công viên nội thành, ngắm cảnh đẹp trước mắt.",
  "exList": [
   {
    "zh": "有人会在市区公园走走，看看眼前的美景。",
    "py": "Yǒurén huì zài shìqū gōngyuán zǒu zǒu, kàn kàn yǎnqián de měijǐng.",
    "vn": "Có người sẽ đi dạo trong công viên nội thành, ngắm cảnh đẹp trước mắt."
   },
   {
    "zh": "爬到山上，美丽的风景一下子出现在眼前。",
    "py": "Pá dào shān shàng, měilì de fēngjǐng yíxià zǐ chūxiàn zài yǎnqián.",
    "vn": "Leo lên đỉnh núi, cảnh đẹp bỗng chốc hiện ra trước mắt."
   }
  ],
  "hanzi": [
   {
    "c": "眼",
    "p": "yǎn",
    "type": "左右结构 · Trái-phải",
    "st": 11,
    "ord": "目(mục) trái → 艮(cấn) phải",
    "rad": "目 (mục – mắt)",
    "mean": "mắt",
    "tip": "目(mắt) + 艮(nhìn chăm chú) → bộ phận để NHÌN = MẮT.",
    "cf": "银 (yín – \"bạc\")",
    "w": "眼睛"
   },
   {
    "c": "前",
    "p": "qián",
    "type": "会意字 · Chữ hội ý",
    "st": 9,
    "ord": "丷 → nét ngang → 月 → 刂",
    "rad": "刂 (đao đứng – dao)",
    "mean": "phía trước; trước",
    "tip": "Phần trên 丷 + 一, phần dưới là 月 (vốn là chiếc thuyền) và 刂: thuyền rẽ nước tiến lên → phía trước. 前天 = ngày trước hôm qua → hôm kia. Đối: 后天 (ngày kia – HSK3 Bài 11).",
    "cf": "后 hòu (以后 – HSK3 Bài 8) — nghĩa đối lập: 前天 ↔ 后天",
    "w": "前天 / 以前 / 前面"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Đừng chỉ nhìn lợi ích trước mắt, cũng phải nghĩ cho tương lai.",
    "answer": "别只看眼前的好处，也要为将来想想。",
    "answerPy": "Bié zhǐ kàn yǎnqián de hǎochù, yě yào wèi jiānglái xiǎng xiǎng.",
    "note": "Ôn 将来 (Bài 1 · từ mới).",
    "pair": "眼前的……"
   },
   {
    "promptLang": "vi",
    "prompt": "Cảnh đẹp trước mắt khiến chúng tôi quên hết mệt mỏi.",
    "answer": "眼前的美景使我们忘了累。",
    "answerPy": "Yǎnqián de měijǐng shǐ wǒmen wàng le lèi.",
    "note": "Ôn 使 (Bài 7 · điểm 4).",
    "pair": "使 + ai + V"
   }
  ]
 },
 {
  "n": 33,
  "zh": "美景",
  "py": "měijǐng",
  "pos": "Danh từ",
  "vn": "cảnh đẹp",
  "hv": "mỹ cảnh",
  "em": "🌄",
  "lesson": 4,
  "explain": [
   "Cảnh đẹp — trong từ đã có nghĩa “đẹp” (美 + 景), nên không cần nói ✗ 美丽的美景. Hay gặp: 看看美景, 眼前的美景, 欣赏美景."
  ],
  "usage": "眼前的美景 · 看美景 · 欣赏美景 · 美景如画.",
  "collo": [
   "看看美景",
   "眼前的美景",
   "欣赏美景",
   "秋天的美景"
  ],
  "colloFull": [
   {
    "zh": "看看美景",
    "py": "Kàn kàn měijǐng",
    "vn": "ngắm cảnh đẹp"
   },
   {
    "zh": "眼前的美景",
    "py": "Yǎnqián de měijǐng",
    "vn": "cảnh đẹp trước mắt"
   },
   {
    "zh": "欣赏美景",
    "py": "Xīnshǎng měijǐng",
    "vn": "thưởng ngoạn cảnh đẹp"
   },
   {
    "zh": "秋天的美景",
    "py": "Qiūtiān de měijǐng",
    "vn": "cảnh đẹp mùa thu"
   }
  ],
  "patterns": [
   {
    "s": "美 + 景 = cảnh đẹp",
    "m": "Không thêm 美丽 phía trước"
   },
   {
    "s": "美景 / 风景 / 景色",
    "m": "Nhóm từ “cảnh” của bài"
   }
  ],
  "ex_zh": "有人会在市区公园走走，看看眼前的美景。",
  "ex_py": "Yǒurén huì zài shìqū gōngyuán zǒu zǒu, kàn kàn yǎnqián de měijǐng.",
  "ex_vn": "Có người sẽ đi dạo công viên trong nội thành, ngắm cảnh đẹp trước mắt.",
  "exList": [
   {
    "zh": "有人会在市区公园走走，看看眼前的美景。",
    "py": "Yǒurén huì zài shìqū gōngyuán zǒu zǒu, kàn kàn yǎnqián de měijǐng.",
    "vn": "Có người sẽ đi dạo công viên trong nội thành, ngắm cảnh đẹp trước mắt."
   },
   {
    "zh": "山上的美景让我们忘记了累。",
    "py": "Shān shàng de měijǐng ràng wǒmen wàngjì le lèi.",
    "vn": "Cảnh đẹp trên núi khiến chúng tôi quên mất mệt."
   }
  ],
  "hanzi": [
   {
    "c": "美",
    "p": "měi",
    "type": "上下结构 · Trên-dưới",
    "st": 9,
    "ord": "羊 trên → 大 dưới",
    "rad": "羊 (dương – dê)",
    "mean": "đẹp",
    "tip": "羊(dê, con vật quý thời cổ) lớn 大 → biểu trưng cho sự to đẹp, mở rộng nghĩa ĐẸP.",
    "cf": "羊 (yáng – \"dê\", không có 大\")",
    "w": "小美 / 漂亮 / 美丽"
   },
   {
    "c": "景",
    "p": "jǐng",
    "type": "上下结构 · Trên-dưới",
    "st": 12,
    "ord": "日 (nhật) trên → 京 (kinh) dưới",
    "rad": "日 (nhật – mặt trời)",
    "mean": "cảnh sắc",
    "tip": "Bộ mặt trời 日 (ánh sáng chiếu cảnh vật) + 京(biểu âm) → CẢNH SẮC dưới ánh sáng, kết hợp 色(màu sắc, vẻ) thành 景色 = PHONG CẢNH.",
    "cf": "京 (jīng – \"kinh đô\", không có bộ 日\")",
    "w": "景色 / 风景 / 景点"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Đã đến đây rồi thì ở thêm hai ngày, ngắm cho kỹ cảnh đẹp ở đây.",
    "answer": "既然来了，就多住两天，好好看看这里的美景。",
    "answerPy": "Jìrán lái le, jiù duō zhù liǎng tiān, hǎohǎo-kànkàn zhèli de měijǐng.",
    "note": "Ôn 既然……就…… (Bài 7 · điểm 2).",
    "pair": "既然……就……"
   },
   {
    "promptLang": "vi",
    "prompt": "Cảnh đẹp như vậy có gì mà không đáng chụp đâu?",
    "answer": "这么美的景色，有什么不值得拍的？",
    "answerPy": "Zhème měi de jǐngsè, yǒu shénme bù zhídé pāi de?",
    "note": "Ôn 有什么(好)×的 (Bài 6 · điểm 2).",
    "pair": "有什么……的"
   }
  ]
 },
 {
  "n": 34,
  "zh": "参观",
  "py": "cānguān",
  "pos": "Động từ",
  "vn": "tham quan",
  "hv": "tham quan",
  "em": "🏛️",
  "lesson": 4,
  "explain": [
   "Đến một nơi (bảo tàng, nhà máy, trường học, danh thắng) để xem, tìm hiểu. Chú ý: tân ngữ của 参观 là NƠI CHỐN, không phải người — thăm người dùng 看 / 看望 / 拜访 (✗ 参观朋友)."
  ],
  "usage": "参观 + nơi chốn · 参观故宫 / 博物馆 / 工厂.",
  "collo": [
   "参观故宫",
   "参观博物馆",
   "参观学校",
   "去参观"
  ],
  "colloFull": [
   {
    "zh": "参观故宫",
    "py": "Cānguān Gùgōng",
    "vn": "tham quan Cố Cung"
   },
   {
    "zh": "参观博物馆",
    "py": "Cānguān bó wù guǎn",
    "vn": "tham quan bảo tàng"
   },
   {
    "zh": "参观学校",
    "py": "Cānguān xuéxiào",
    "vn": "tham quan trường học"
   },
   {
    "zh": "去参观",
    "py": "Qù cānguān",
    "vn": "đi tham quan"
   }
  ],
  "patterns": [
   {
    "s": "参观 + nơi chốn",
    "m": "Tân ngữ là địa điểm"
   },
   {
    "s": "参观 ≠ 看望",
    "m": "看望 / 看 = thăm người"
   }
  ],
  "ex_zh": "有人喜欢去参观长城、故宫等有名的景点。",
  "ex_py": "Yǒurén xǐhuan qù cānguān Chángchéng, Gùgōng děng yǒumíng de jǐngdiǎn.",
  "ex_vn": "Có người thích đi tham quan các thắng cảnh nổi tiếng như Trường Thành, Cố Cung.",
  "exList": [
   {
    "zh": "有人喜欢去参观长城、故宫等有名的景点。",
    "py": "Yǒurén xǐhuan qù cānguān Chángchéng, Gùgōng děng yǒumíng de jǐngdiǎn.",
    "vn": "Có người thích đi tham quan các thắng cảnh nổi tiếng như Trường Thành, Cố Cung."
   },
   {
    "zh": "下午我们要去参观一个汽车工厂。",
    "py": "Xiàwǔ wǒmen yào qù cānguān yí gè qì chē gōngchǎng.",
    "vn": "Buổi chiều chúng tôi sẽ đi tham quan một nhà máy ô tô."
   }
  ],
  "hanzi": [
   {
    "c": "参",
    "p": "cān",
    "type": "上下结构 · Trên-dưới",
    "st": 8,
    "ord": "厶+大 trên → 彡 dưới",
    "rad": "厶 (khư)",
    "mean": "tham dự",
    "tip": "Chữ cổ mô phỏng người quỳ dâng lễ vật → nghĩa DÂNG, GÓP MẶT, mở rộng thành THAM GIA.",
    "cf": "惨 (cǎn – \"thảm thương\", có bộ 忄\")",
    "w": "参加 / 参观"
   },
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
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Bất kể đi nước nào du lịch, tôi đều thích tham quan bảo tàng.",
    "answer": "不管去哪个国家旅游，我都喜欢参观博物馆。",
    "answerPy": "Bùguǎn qù nǎgè guójiā lǚyóu, wǒ dōu xǐhuan cānguān bó wù guǎn.",
    "note": "Dùng 不管……都…… (điểm 1 bài này).",
    "pair": "不管……都……"
   },
   {
    "promptLang": "vi",
    "prompt": "Bảo tàng này quá lớn, một ngày tham quan không hết được.",
    "answer": "这个博物馆太大了，一天参观不完。",
    "answerPy": "Zhège bó wù guǎn tài dà le, yì tiān cānguān bù wán.",
    "note": "Ôn bổ ngữ khả năng V不完 (Bài 4).",
    "pair": "V不完"
   }
  ]
 },
 {
  "n": 35,
  "zh": "景点",
  "py": "jǐngdiǎn",
  "pos": "Danh từ",
  "vn": "điểm du lịch, thắng cảnh, điểm tham quan",
  "hv": "cảnh điểm",
  "em": "📍",
  "lesson": 4,
  "explain": [
   "Một địa điểm có cảnh đẹp hoặc di tích để khách đến tham quan (Trường Thành, Cố Cung, Vịnh Hạ Long…)."
  ],
  "usage": "有名的景点 · 旅游景点 · 参观景点 · 一个景点.",
  "collo": [
   "有名的景点",
   "旅游景点",
   "历史文化景点",
   "参观景点"
  ],
  "colloFull": [
   {
    "zh": "有名的景点",
    "py": "Yǒumíng de jǐngdiǎn",
    "vn": "thắng cảnh nổi tiếng"
   },
   {
    "zh": "旅游景点",
    "py": "Lǚyóu jǐngdiǎn",
    "vn": "điểm du lịch"
   },
   {
    "zh": "历史文化景点",
    "py": "Lìshǐ wénhuà jǐngdiǎn",
    "vn": "điểm tham quan lịch sử văn hóa"
   },
   {
    "zh": "参观景点",
    "py": "Cānguān jǐngdiǎn",
    "vn": "tham quan thắng cảnh"
   }
  ],
  "patterns": [
   {
    "s": "A、B 等 + 景点",
    "m": "Liệt kê các điểm tham quan"
   },
   {
    "s": "景点 / 风景",
    "m": "景点 là địa điểm; 风景 là cảnh"
   }
  ],
  "ex_zh": "有人喜欢去参观长城、故宫等有名的景点。",
  "ex_py": "Yǒurén xǐhuan qù cānguān Chángchéng, Gùgōng děng yǒumíng de jǐngdiǎn.",
  "ex_vn": "Có người thích đi tham quan các thắng cảnh nổi tiếng như Trường Thành, Cố Cung.",
  "exList": [
   {
    "zh": "有人喜欢去参观长城、故宫等有名的景点。",
    "py": "Yǒurén xǐhuan qù cānguān Chángchéng, Gùgōng děng yǒumíng de jǐngdiǎn.",
    "vn": "Có người thích đi tham quan các thắng cảnh nổi tiếng như Trường Thành, Cố Cung."
   },
   {
    "zh": "明天就安排了一个景点——八达岭长城。",
    "py": "Míngtiān jiù ānpái le yí gè jǐngdiǎn — bā dá lǐng Chángchéng.",
    "vn": "Ngày mai chỉ sắp xếp một điểm tham quan — Trường Thành Bát Đạt Lĩnh."
   }
  ],
  "hanzi": [
   {
    "c": "景",
    "p": "jǐng",
    "type": "上下结构 · Trên-dưới",
    "st": 12,
    "ord": "日 (nhật) trên → 京 (kinh) dưới",
    "rad": "日 (nhật – mặt trời)",
    "mean": "cảnh sắc",
    "tip": "Bộ mặt trời 日 (ánh sáng chiếu cảnh vật) + 京(biểu âm) → CẢNH SẮC dưới ánh sáng, kết hợp 色(màu sắc, vẻ) thành 景色 = PHONG CẢNH.",
    "cf": "京 (jīng – \"kinh đô\", không có bộ 日\")",
    "w": "景色 / 风景 / 景点"
   },
   {
    "c": "点",
    "p": "diǎn",
    "type": "上下结构 · Trên-dưới",
    "st": 9,
    "ord": "占 trên → 灬 dưới",
    "rad": "灬 (hỏa)",
    "mean": "điểm",
    "tip": "占 + 灬(lửa) → chấm nhỏ → ĐIỂM. 重点 = điểm quan trọng; 优点/缺点 (Bài 8); 地点.",
    "cf": "店 (diàn – cửa hàng)",
    "w": "重点 / 优点 / 缺点 / 地点"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Hà Nội có rất nhiều điểm tham quan, ví dụ Hồ Gươm, Văn Miếu… rất đáng đi.",
    "answer": "河内有很多景点，比如还剑湖、文庙等，都很值得去。",
    "answerPy": "Hé nèi yǒu hěn duō jǐngdiǎn, bǐrú hái jiàn hú, wén miào děng, dōu hěn zhídé qù.",
    "note": "Ôn 等 (Bài 5 · điểm 4) + 值得.",
    "pair": "A、B 等"
   },
   {
    "promptLang": "vi",
    "prompt": "Một ngày thì ít nhất cũng có thể tham quan được ba điểm.",
    "answer": "一天至少能参观三个景点。",
    "answerPy": "Yì tiān zhìshǎo néng cānguān sān gè jǐngdiǎn.",
    "note": "Ôn 至少 (Bài 5 · điểm 1).",
    "pair": "至少"
   }
  ]
 },
 {
  "n": 36,
  "zh": "交通",
  "py": "jiāotōng",
  "pos": "Danh từ",
  "vn": "giao thông, đi lại",
  "hv": "giao thông",
  "em": "🚦",
  "lesson": 4,
  "explain": [
   "Việc đi lại, vận chuyển bằng các phương tiện (xe buýt, tàu điện, ô tô…). Hay nói: 交通方便 (đi lại thuận tiện), 交通很乱 (giao thông lộn xộn), 交通工具 (phương tiện giao thông)."
  ],
  "usage": "交通方便 / 不便 · 交通很乱 · 交通工具 · 公共交通.",
  "collo": [
   "交通方便",
   "交通工具",
   "公共交通",
   "交通很乱"
  ],
  "colloFull": [
   {
    "zh": "交通方便",
    "py": "Jiāotōng fāngbiàn",
    "vn": "đi lại thuận tiện"
   },
   {
    "zh": "交通工具",
    "py": "Jiāotōng gōngjù",
    "vn": "phương tiện giao thông"
   },
   {
    "zh": "公共交通",
    "py": "Gōng gòng jiāotōng",
    "vn": "giao thông công cộng"
   },
   {
    "zh": "交通很乱",
    "py": "Jiāotōng hěn luàn",
    "vn": "giao thông lộn xộn"
   }
  ],
  "patterns": [
   {
    "s": "Nơi chốn + 交通 + 方便 / 不方便",
    "m": "Đánh giá việc đi lại"
   },
   {
    "s": "交通 ≠ 交流",
    "m": "交流 = giao lưu, trao đổi"
   }
  ],
  "ex_zh": "北京交通很方便，所以我和家人更爱乘坐公交车去郊区。",
  "ex_py": "Běijīng jiāotōng hěn fāngbiàn, suǒyǐ wǒ hé jiārén gèng ài chéngzuò gōngjiāochē qù jiāoqū.",
  "ex_vn": "Giao thông Bắc Kinh rất tiện, nên tôi và gia đình thích đi xe buýt ra ngoại ô hơn.",
  "exList": [
   {
    "zh": "北京交通很方便，所以我和家人更爱乘坐公交车去郊区。",
    "py": "Běijīng jiāotōng hěn fāngbiàn, suǒyǐ wǒ hé jiārén gèng ài chéngzuò gōngjiāochē qù jiāoqū.",
    "vn": "Giao thông Bắc Kinh rất tiện, nên tôi và gia đình thích đi xe buýt ra ngoại ô hơn."
   },
   {
    "zh": "这个十字路口的交通有点儿乱，你开车要小心。",
    "py": "Zhège shí zì lùkǒu de jiāotōng yǒudiǎnr luàn, nǐ kāichē yào xiǎoxīn.",
    "vn": "Giao thông ở ngã tư này hơi lộn xộn, anh lái xe phải cẩn thận."
   }
  ],
  "hanzi": [
   {
    "c": "交",
    "p": "jiāo",
    "type": "独体字 · Chữ đơn",
    "st": 6,
    "ord": "nét liền, hình người bắt chéo chân",
    "rad": "亠 (đầu)",
    "mean": "giao, kết giao",
    "tip": "Hình tượng cổ mô phỏng hai đường nét BẮT CHÉO nhau → GIAO NHAU, mở rộng thành KẾT GIAO (con người giao lưu với nhau).",
    "cf": "较 (jiào – \"so sánh\", cũng có 交\" nhưng thêm bộ 车\")",
    "w": "交朋友 / 交流 / 交通"
   },
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
    "prompt": "Khu này giao thông vừa tiện, tiền thuê nhà lại không cao.",
    "answer": "这个地方交通方便，再说房租也不高。",
    "answerPy": "Zhège dìfang jiāotōng fāngbiàn, zài shuō fáng zū yě bù gāo.",
    "note": "Ôn 再说 (Bài 4 · điểm 2).",
    "pair": "……，再说……"
   },
   {
    "promptLang": "vi",
    "prompt": "Về mặt giao thông, thành phố này làm rất tốt.",
    "answer": "在交通方面，这个城市做得很好。",
    "answerPy": "Zài jiāotōng fāngmiàn, zhège chéngshì zuò de hěn hǎo.",
    "note": "Ôn 在……方面 (Bài 7 · điểm 1).",
    "pair": "在……方面"
   }
  ]
 },
 {
  "n": 37,
  "zh": "乘坐",
  "py": "chéngzuò",
  "pos": "Động từ",
  "vn": "đi (xe, tàu, máy bay), ngồi (phương tiện)",
  "hv": "thừa tọa",
  "em": "🚌",
  "lesson": 4,
  "explain": [
   "Đi / ngồi trên phương tiện giao thông — nghĩa giống 坐 nhưng trang trọng hơn, hay gặp trong thông báo, văn viết: 乘坐公交车 / 地铁 / 飞机 / 高铁."
  ],
  "usage": "乘坐 + 公交车 / 地铁 / 高铁 / 飞机 · 乘坐……去…….",
  "collo": [
   "乘坐公交车",
   "乘坐地铁",
   "乘坐高铁",
   "乘坐飞机"
  ],
  "colloFull": [
   {
    "zh": "乘坐公交车",
    "py": "Chéngzuò gōngjiāochē",
    "vn": "đi xe buýt"
   },
   {
    "zh": "乘坐地铁",
    "py": "Chéngzuò dìtiě",
    "vn": "đi tàu điện ngầm"
   },
   {
    "zh": "乘坐高铁",
    "py": "Chéngzuò gāotiě",
    "vn": "đi tàu cao tốc"
   },
   {
    "zh": "乘坐飞机",
    "py": "Chéngzuò fēijī",
    "vn": "đi máy bay"
   }
  ],
  "patterns": [
   {
    "s": "乘坐 = 坐 (trang trọng)",
    "m": "Thông báo: 欢迎乘坐……"
   },
   {
    "s": "乘坐 + phương tiện + 去 + nơi",
    "m": "Đi bằng gì đến đâu"
   }
  ],
  "ex_zh": "北京交通很方便，所以我和家人更爱乘坐公交车去郊区。",
  "ex_py": "Běijīng jiāotōng hěn fāngbiàn, suǒyǐ wǒ hé jiārén gèng ài chéngzuò gōngjiāochē qù jiāoqū.",
  "ex_vn": "Giao thông Bắc Kinh rất tiện, nên tôi và gia đình thích đi xe buýt ra ngoại ô hơn.",
  "exList": [
   {
    "zh": "北京交通很方便，所以我和家人更爱乘坐公交车去郊区。",
    "py": "Běijīng jiāotōng hěn fāngbiàn, suǒyǐ wǒ hé jiārén gèng ài chéngzuò gōngjiāochē qù jiāoqū.",
    "vn": "Giao thông Bắc Kinh rất tiện, nên tôi và gia đình thích đi xe buýt ra ngoại ô hơn."
   },
   {
    "zh": "从北京乘坐高铁去上海，四五个小时就能到。",
    "py": "Cóng Běijīng chéngzuò gāotiě qù Shànghǎi, sì wǔ gè xiǎoshí jiù néng dào.",
    "vn": "Từ Bắc Kinh đi tàu cao tốc đến Thượng Hải, bốn năm tiếng là tới."
   }
  ],
  "hanzi": [
   {
    "c": "乘",
    "p": "chéng",
    "type": "独体字 · Chữ đơn thể",
    "st": 10,
    "ord": "禾 → 北 (hai bên)",
    "rad": "丿 (phiệt)",
    "mean": "cưỡi, đi",
    "tip": "Hình người trèo lên cây 木 → LEO LÊN, CƯỠI, ĐI (xe). 乘坐 = đáp (phương tiện), 乘客 = hành khách.",
    "cf": "剩 (shèng – thừa)",
    "w": "乘坐 / 乘客"
   },
   {
    "c": "坐",
    "p": "zuò",
    "type": "上下结构 · Trên-dưới",
    "st": 7,
    "ord": "从(biến thể) trên → 土(thổ) dưới",
    "rad": "土 (thổ – đất)",
    "mean": "ngồi",
    "tip": "从(hai người) ngồi trên 土(đất/ghế) → NGỒI.",
    "cf": "座 (zuò – \"chỗ ngồi\")",
    "w": "请坐 / 坐这儿"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Đi tàu điện ngầm tới đó ít nhất cần một tiếng.",
    "answer": "乘坐地铁去那儿至少需要一个小时。",
    "answerPy": "Chéngzuò dìtiě qù nàr zhìshǎo xūyào yí gè xiǎoshí.",
    "note": "Ôn 至少 (Bài 5 · điểm 1).",
    "pair": "乘坐 + phương tiện"
   },
   {
    "promptLang": "vi",
    "prompt": "So với đi máy bay, đi tàu cao tốc vừa tiện lại vừa thoải mái.",
    "answer": "跟乘坐飞机相比，坐高铁既方便又舒服。",
    "answerPy": "Gēn chéngzuò fēijī xiāngbǐ, zuò gāotiě jì fāngbiàn yòu shūfu.",
    "note": "跟……相比 (điểm 3) + 既……又…… (Bài 4).",
    "pair": "跟……相比"
   }
  ]
 },
 {
  "n": 38,
  "zh": "十分",
  "py": "shífēn",
  "pos": "Phó từ",
  "vn": "rất, hết sức, vô cùng",
  "hv": "thập phân",
  "em": "💯",
  "lesson": 4,
  "explain": [
   "Phó từ chỉ mức độ cao, nghĩa như 很 / 非常 nhưng hơi văn viết: 十分方便, 十分紧张. Bẫy: 十分 ở đây KHÔNG phải “mười phút” hay “điểm mười” — “mười phút” là 十分钟."
  ],
  "usage": "十分 + tính từ / động từ tâm lý · 不十分…… (không … lắm).",
  "collo": [
   "十分方便",
   "十分紧张",
   "十分喜欢",
   "十分感谢"
  ],
  "colloFull": [
   {
    "zh": "十分方便",
    "py": "Shífēn fāngbiàn",
    "vn": "rất tiện"
   },
   {
    "zh": "十分紧张",
    "py": "Shífēn jǐnzhāng",
    "vn": "vô cùng căng thẳng"
   },
   {
    "zh": "十分喜欢",
    "py": "Shífēn xǐhuan",
    "vn": "rất thích"
   },
   {
    "zh": "十分感谢",
    "py": "Shífēn gǎnxiè",
    "vn": "vô cùng cảm ơn"
   }
  ],
  "patterns": [
   {
    "s": "十分 + Adj / động từ tâm lý",
    "m": "≈ 很 / 非常"
   },
   {
    "s": "十分 ≠ 十分钟",
    "m": "十分钟 = mười phút"
   }
  ],
  "ex_zh": "郊区有山有水，还有很多农家乐，吃、玩、住都十分方便。",
  "ex_py": "Jiāoqū yǒu shān yǒu shuǐ, hái yǒu hěn duō nóngjiālè, chī, wán, zhù dōu shífēn fāngbiàn.",
  "ex_vn": "Ngoại ô có núi có sông, còn có nhiều nông gia lạc, ăn, chơi, ở đều rất tiện.",
  "exList": [
   {
    "zh": "郊区有山有水，还有很多农家乐，吃、玩、住都十分方便。",
    "py": "Jiāoqū yǒu shān yǒu shuǐ, hái yǒu hěn duō nóngjiālè, chī, wán, zhù dōu shífēn fāngbiàn.",
    "vn": "Ngoại ô có núi có sông, còn có nhiều nông gia lạc, ăn, chơi, ở đều rất tiện."
   },
   {
    "zh": "他今天是第一次参加比赛，所以十分紧张。",
    "py": "Tā jīntiān shì dì yī cì cānjiā bǐsài, suǒyǐ shífēn jǐnzhāng.",
    "vn": "Hôm nay là lần đầu cậu ấy tham gia thi đấu, nên vô cùng hồi hộp."
   }
  ],
  "hanzi": [
   {
    "c": "十",
    "p": "shí",
    "type": "独体字 · Chữ đơn",
    "st": 2,
    "ord": "一→丨",
    "rad": "十 (thập – tự thành bộ)",
    "mean": "mười",
    "tip": "Một nét ngang cắt một nét dọc thành hình chữ thập → số MƯỜI, đủ một chục.",
    "cf": "千 (qiān – \"nghìn\")",
    "w": "七，八，九，十"
   },
   {
    "c": "分",
    "p": "fēn",
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
    "prompt": "Phòng ở khách sạn này không những sạch sẽ mà còn vô cùng yên tĩnh.",
    "answer": "这个宾馆的房间不仅干净，而且十分安静。",
    "answerPy": "Zhège bīnguǎn de fángjiān bùjǐn gānjìng, érqiě shífēn ānjìng.",
    "note": "Ôn 不仅……而且…… (Bài 3 · điểm 2).",
    "pair": "不仅……而且……"
   },
   {
    "promptLang": "vi",
    "prompt": "Có người giúp đỡ, tôi thấy vô cùng an tâm, chẳng có gì phải lo lắng cả.",
    "answer": "有人帮忙，我十分放心，没什么好担心的。",
    "answerPy": "Yǒurén bāngmáng, wǒ shífēn fàngxīn, méi shénme hǎo dānxīn de.",
    "note": "Ôn 没什么好×的 (Bài 6 · điểm 2).",
    "pair": "没什么好×的"
   }
  ]
 },
 {
  "n": 39,
  "zh": "实际上",
  "py": "shíjìshàng",
  "pos": "Phó từ",
  "vn": "thực ra, trên thực tế",
  "hv": "thực tế thượng",
  "em": "🔍",
  "lesson": 4,
  "explain": [
   "Nói ra sự thật (thường khác với vẻ bề ngoài hoặc điều người ta nghĩ): “thực ra, trên thực tế”. Gần nghĩa 其实 (HSK 3); có thể đứng đầu câu hoặc sau chủ ngữ."
  ],
  "usage": "实际上 + câu · Sub + 实际上 + V · 看起来……，实际上…….",
  "collo": [
   "实际上是",
   "实际上并不",
   "看起来……实际上……",
   "实际上很简单"
  ],
  "colloFull": [
   {
    "zh": "实际上是",
    "py": "Shíjìshàng shì",
    "vn": "thực ra là"
   },
   {
    "zh": "实际上并不",
    "py": "Shíjìshàng bìng bù",
    "vn": "thực ra chẳng hề"
   },
   {
    "zh": "看起来……实际上……",
    "py": "Kàn qǐlái…… shíjìshàng……",
    "vn": "trông thì … thực ra …"
   },
   {
    "zh": "实际上很简单",
    "py": "Shíjìshàng hěn jiǎndān",
    "vn": "thực ra rất đơn giản"
   }
  ],
  "patterns": [
   {
    "s": "看起来 / 很多人觉得……，实际上……",
    "m": "Đối lập vẻ ngoài – sự thật"
   },
   {
    "s": "实际上 ≈ 其实",
    "m": "实际上 hơi trang trọng hơn"
   }
  ],
  "ex_zh": "在我看来，不管去哪里玩，实际上都是为了放松。",
  "ex_py": "Zài wǒ kànlái, bùguǎn qù nǎlǐ wán, shíjìshàng dōu shì wèile fàngsōng.",
  "ex_vn": "Theo tôi, bất kể đi đâu chơi, thực ra đều là để thư giãn.",
  "exList": [
   {
    "zh": "在我看来，不管去哪里玩，实际上都是为了放松。",
    "py": "Zài wǒ kànlái, bùguǎn qù nǎlǐ wán, shíjìshàng dōu shì wèile fàngsōng.",
    "vn": "Theo tôi, bất kể đi đâu chơi, thực ra đều là để thư giãn."
   },
   {
    "zh": "这道菜看着不太好吃，实际上挺好吃的，你尝尝。",
    "py": "Zhè dào cài kàn zhe bú tài hǎochī, shíjìshàng tǐng hǎochī de, nǐ cháng cháng.",
    "vn": "Món này trông có vẻ không ngon lắm, thực ra rất ngon đấy, bạn nếm thử xem."
   }
  ],
  "hanzi": [
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
   },
   {
    "c": "际",
    "p": "jì",
    "type": "左右结构 · Trái-phải (giản thể)",
    "st": 7,
    "ord": "阝(phụ) trái → 示(thị, biến thể) phải",
    "rad": "阝 (phụ – gò đất)",
    "mean": "ranh giới, thực tại",
    "tip": "Bộ 阝(gò đất, ranh giới) → nơi TIẾP GIÁP giữa hai vùng, mở rộng thành THỰC TẠI (nơi lý thuyết gặp thực tế); kết hợp 实(chân thực) thành 实际 = THỰC TẾ.",
    "cf": "察 (chá – \"xem xét\", bộ 宀\")",
    "w": "实际 / 国际 / 实际上"
   },
   {
    "c": "上",
    "p": "shang",
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
    "prompt": "Nhiều người nghĩ học chữ Hán rất khó, thực ra chẳng khó chút nào.",
    "answer": "很多人觉得学汉字很难，实际上并不难。",
    "answerPy": "Hěn duō rén juéde xué hànzì hěn nán, shíjìshàng bìng bù nán.",
    "note": "Ôn 并不 (Bài 2 · điểm 3).",
    "pair": "实际上并不……"
   },
   {
    "promptLang": "vi",
    "prompt": "Trông thì anh ấy rất thoải mái, thực ra trong lòng vô cùng căng thẳng.",
    "answer": "他看起来很轻松，实际上心里十分紧张。",
    "answerPy": "Tā kàn qǐlái hěn qīngsōng, shíjìshàng xīnlǐ shífēn jǐnzhāng.",
    "note": "Đối lập vẻ ngoài – sự thật.",
    "pair": "看起来……，实际上……"
   }
  ]
 },
 {
  "n": 40,
  "zh": "故宫",
  "py": "Gùgōng",
  "pos": "Danh từ riêng",
  "vn": "Cố Cung (Tử Cấm Thành, Bắc Kinh)",
  "hv": "Cố Cung",
  "em": "🏯",
  "lesson": 4,
  "explain": [
   "Cung điện của các hoàng đế triều Minh, Thanh ở trung tâm Bắc Kinh, nay là Viện bảo tàng Cố Cung (故宫博物院) — một trong những thắng cảnh nổi tiếng nhất Trung Quốc. 故 = cũ, 宫 = cung điện → “cung điện cũ”."
  ],
  "usage": "参观故宫 · 去故宫 · 故宫博物院.",
  "collo": [
   "参观故宫",
   "故宫博物院",
   "去故宫",
   "故宫里"
  ],
  "colloFull": [
   {
    "zh": "参观故宫",
    "py": "Cānguān Gùgōng",
    "vn": "tham quan Cố Cung"
   },
   {
    "zh": "故宫博物院",
    "py": "Gùgōng bó wù yuàn",
    "vn": "Bảo tàng Cố Cung"
   },
   {
    "zh": "去故宫",
    "py": "Qù Gùgōng",
    "vn": "đi Cố Cung"
   },
   {
    "zh": "故宫里",
    "py": "Gùgōng lǐ",
    "vn": "trong Cố Cung"
   }
  ],
  "patterns": [
   {
    "s": "长城、故宫等 + 景点",
    "m": "Liệt kê thắng cảnh"
   },
   {
    "s": "故 (cũ) + 宫 (cung điện)",
    "m": "Nhớ nghĩa từng chữ"
   }
  ],
  "ex_zh": "有人喜欢去参观长城、故宫等有名的景点。",
  "ex_py": "Yǒurén xǐhuan qù cānguān Chángchéng, Gùgōng děng yǒumíng de jǐngdiǎn.",
  "ex_vn": "Có người thích đi tham quan các thắng cảnh nổi tiếng như Trường Thành, Cố Cung.",
  "exList": [
   {
    "zh": "有人喜欢去参观长城、故宫等有名的景点。",
    "py": "Yǒurén xǐhuan qù cānguān Chángchéng, Gùgōng děng yǒumíng de jǐngdiǎn.",
    "vn": "Có người thích đi tham quan các thắng cảnh nổi tiếng như Trường Thành, Cố Cung."
   },
   {
    "zh": "故宫太大了，一天恐怕参观不完。",
    "py": "Gùgōng tài dà le, yì tiān kǒngpà cānguān bù wán.",
    "vn": "Cố Cung rộng quá, một ngày e là tham quan không hết."
   }
  ],
  "hanzi": [
   {
    "c": "故",
    "p": "gù",
    "type": "左右结构 · Trái-phải",
    "st": 9,
    "ord": "古 trái → 攵 phải",
    "rad": "攵 (phộc)",
    "mean": "cũ; cố",
    "tip": "古(xưa) + 攵(đánh) → nguyên cớ xưa → CỐ (nguyên nhân, cũ). 故意 = có ý từ trước; 故事 = chuyện xưa.",
    "cf": "做 (zuò – làm)",
    "w": "故意 / 故事 / 故乡"
   },
   {
    "c": "宫",
    "p": "gōng",
    "type": "会意字 · Chữ hội ý",
    "st": 9,
    "ord": "宀 → 口 → 口",
    "rad": "宀 (miên – mái nhà)",
    "mean": "cung điện",
    "tip": "Mái nhà 宀 che nhiều gian phòng nối nhau (hai chữ 口 chồng lên): tòa nhà lớn nhiều gian → cung điện — 故宫.",
    "cf": "官 guān (quan chức) — dưới là 㠯, không phải hai 口",
    "w": "故宫 / 宫殿"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Đến Bắc Kinh mà chưa tham quan Cố Cung thì tiếc lắm, nó rất đáng đi.",
    "answer": "来北京不参观故宫太可惜了，故宫非常值得去。",
    "answerPy": "Lái Běijīng bù cānguān Gùgōng tài kěxī le, Gùgōng fēicháng zhídé qù.",
    "note": "值得 + V (từ mới bài này).",
    "pair": "值得去"
   },
   {
    "promptLang": "vi",
    "prompt": "Tham quan Cố Cung vừa có thể ngắm cảnh đẹp, vừa có thể tìm hiểu lịch sử.",
    "answer": "参观故宫既能看美景，又能了解历史。",
    "answerPy": "Cānguān Gùgōng jì néng kàn měijǐng, yòu néng liǎojiě lìshǐ.",
    "note": "Ôn 既……又…… (Bài 4 · điểm 3).",
    "pair": "既……又……"
   }
  ]
 }
];
var wuData = [
 {
  "img": "/images/hsk4v3/bai-8/wu-A.webp",
  "label": "参观",
  "py": "cānguān",
  "letter": "A"
 },
 {
  "img": "/images/hsk4v3/bai-8/wu-B.webp",
  "label": "加班",
  "py": "jiābān",
  "letter": "B"
 },
 {
  "img": "/images/hsk4v3/bai-8/wu-C.webp",
  "label": "下降",
  "py": "xiàjiàng",
  "letter": "C"
 },
 {
  "img": "/images/hsk4v3/bai-8/wu-D.webp",
  "label": "风景",
  "py": "fēngjǐng",
  "letter": "D"
 },
 {
  "img": "/images/hsk4v3/bai-8/wu-E.webp",
  "label": "乘坐",
  "py": "chéngzuò",
  "letter": "E"
 },
 {
  "img": "/images/hsk4v3/bai-8/wu-F.webp",
  "label": "帽子",
  "py": "màozi",
  "letter": "F"
 }
];
var dialogData = [
 {
  "scene": "周五晚上 · Tối thứ Sáu, Annie gọi điện cho Bạch Gia Nguyệt — 小语助力: “不到长城非好汉” nghĩa là chưa leo lên Trường Thành thì chưa phải bậc hảo hán (người anh hùng thực thụ)",
  "anh": "/images/hsk4v3/bai-8/kv-1.webp",
  "nguoi": [
   {
    "ten": "安妮",
    "anh": "/images/hsk4v3/nv/annie.webp"
   },
   {
    "ten": "白家月",
    "anh": "/images/hsk4v3/nv/bai.webp"
   }
  ],
  "preQuiz": [
   {
    "q": "安妮想外出放松一下，白家月呢？",
    "opts": [
     "没时间出去",
     "想在家复习",
     "有别的计划",
     "正好也想出去"
    ],
    "ans": 3
   },
   {
    "q": "安妮和白家月最后决定去哪里？",
    "opts": [
     "郊区",
     "长城",
     "世界公园",
     "首都机场"
    ],
    "ans": 1
   }
  ],
  "lines": [
   {
    "sp": 0,
    "zh": "家月，最近学习太紧张了，咱们明天出去放松放松吧。",
    "py": "Jiāyuè, zuìjìn xuéxí tài jǐnzhāng le, zánmen míngtiān chūqù fàngsōng fàngsōng ba.",
    "vn": "Gia Nguyệt, dạo này học hành căng thẳng quá, ngày mai chúng mình ra ngoài thư giãn chút đi."
   },
   {
    "sp": 1,
    "zh": "呀，正好我也想出去呢。咱们去哪儿好呢？",
    "py": "Yā, zhènghǎo wǒ yě xiǎng chūqù ne. Zánmen qù nǎr hǎo ne?",
    "vn": "Ôi, vừa hay tớ cũng đang muốn ra ngoài đây. Chúng mình đi đâu thì hay nhỉ?"
   },
   {
    "sp": 0,
    "zh": "不管去哪儿，能放松的地方都行。",
    "py": "Bùguǎn qù nǎr, néng fàngsōng de dìfang dōu xíng.",
    "vn": "Đi đâu cũng được, miễn là chỗ có thể thư giãn."
   },
   {
    "sp": 1,
    "zh": "郊区怎么样？",
    "py": "Jiāoqū zěnmeyàng?",
    "vn": "Ngoại ô thì sao?"
   },
   {
    "sp": 0,
    "zh": "天中说，下周王老师要带咱们去郊区游玩呢。",
    "py": "Tiānzhōng shuō, xià zhōu Wáng lǎoshī yào dài zánmen qù jiāoqū yóuwán ne.",
    "vn": "Thiên Trung bảo tuần sau thầy Vương sẽ dẫn chúng mình đi chơi ngoại ô đấy."
   },
   {
    "sp": 1,
    "zh": "是吗？那咱们明天去爬长城吧，不是说“不到长城非好汉”吗？",
    "py": "Shì ma? Nà zánmen míngtiān qù pá Chángchéng ba, bú shì shuō “bú dào Chángchéng fēi hǎo hàn” ma?",
    "vn": "Thế à? Vậy mai chúng mình đi leo Trường Thành đi, chẳng phải người ta nói “chưa đến Trường Thành chưa phải hảo hán” sao?"
   },
   {
    "sp": 0,
    "zh": "好主意！不过明天是个大晴天，外出记得戴帽子。",
    "py": "Hǎo zhǔyi! Búguò míngtiān shì gè dà qíng tiān, wàichū jìde dài màozi.",
    "vn": "Ý hay đấy! Có điều mai trời nắng to, ra ngoài nhớ đội mũ nhé."
   }
  ]
 },
 {
  "scene": "在郊区 · Cuối tuần, Lý Văn, Dương Đồng Lạc và mọi người đi chơi ngoại ô — 小语助力: “亮红灯” (bật đèn đỏ) là cách nói dân gian, chỉ việc xuất hiện vấn đề nghiêm trọng, giống “báo động đỏ” trong tiếng Việt",
  "anh": "/images/hsk4v3/bai-8/kv-2.webp",
  "nguoi": [
   {
    "ten": "李文",
    "anh": "/images/hsk4v3/nv/liwen.webp"
   },
   {
    "ten": "杨同乐",
    "anh": "/images/hsk4v3/nv/tongle.webp"
   }
  ],
  "preQuiz": [
   {
    "q": "杨同乐以前工作怎么样？",
    "opts": [
     "经常加班",
     "经常出差",
     "总是迟到",
     "压力不大"
    ],
    "ans": 0
   },
   {
    "q": "杨同乐周末来郊区是为了什么？",
    "opts": [
     "种树",
     "做调查",
     "放松自己",
     "参加活动"
    ],
    "ans": 2
   }
  ],
  "lines": [
   {
    "sp": 0,
    "zh": "同乐哥，你们平时工作忙吗？",
    "py": "Tónglè gē, nǐmen píngshí gōngzuò máng ma?",
    "vn": "Anh Đồng Lạc, bình thường công việc của các anh có bận không?"
   },
   {
    "sp": 1,
    "zh": "挺忙的。以前我总觉得年轻时要多学多干，所以参加了公司里的很多项目，经常加班、熬夜，身体也亮起了红灯。",
    "py": "Tǐng máng de. Yǐqián wǒ zǒng juéde niánqīng shí yào duō xué duō gàn, suǒyǐ cānjiā le gōngsī lǐ de hěn duō xiàngmù, jīngcháng jiābān, áoyè, shēntǐ yě liàng qǐ le hóng dēng.",
    "vn": "Khá bận. Trước đây anh luôn nghĩ lúc còn trẻ phải học nhiều làm nhiều, nên tham gia rất nhiều dự án trong công ty, thường xuyên tăng ca, thức khuya, sức khỏe cũng “báo động đỏ”."
   },
   {
    "sp": 0,
    "zh": "还是别给自己太大压力，否则，失去健康就不值得了。",
    "py": "Háishì bié gěi zìjǐ tài dà yālì, fǒuzé, shīqù jiànkāng jiù bù zhídé le.",
    "vn": "Tốt hơn hết là đừng tự tạo áp lực quá lớn cho mình, nếu không mất sức khỏe thì chẳng đáng chút nào."
   },
   {
    "sp": 1,
    "zh": "是啊，后来我就不接那么多项目了。我发现暂停下来、好好休息之后，我能把工作做得更快更好。",
    "py": "Shì a, hòulái wǒ jiù bù jiē nàme duō xiàngmù le. Wǒ fāxiàn zàntíng xiàlái, hǎo hǎo xiūxi zhīhòu, wǒ néng bǎ gōngzuò zuò de gèng kuài gèng hǎo.",
    "vn": "Đúng thế, sau đó anh không nhận nhiều dự án như vậy nữa. Anh nhận ra sau khi tạm dừng lại, nghỉ ngơi cho tử tế, anh có thể làm việc nhanh hơn, tốt hơn."
   },
   {
    "sp": 0,
    "zh": "对，该工作时就工作，该放松时就要放松。",
    "py": "Duì, gāi gōngzuò shí jiù gōngzuò, gāi fàngsōng shí jiù yào fàngsōng.",
    "vn": "Đúng vậy, lúc cần làm thì làm, lúc cần thư giãn thì phải thư giãn."
   },
   {
    "sp": 1,
    "zh": "是的，现在我周末常来郊区，在好山好水好风景中放松自己。",
    "py": "Shì de, xiànzài wǒ zhōumò cháng lái jiāoqū, zài hǎo shān hǎo shuǐ hǎo fēngjǐng zhōng fàngsōng zìjǐ.",
    "vn": "Phải, bây giờ cuối tuần anh hay đến ngoại ô, thả lỏng bản thân giữa non xanh nước biếc, cảnh sắc tươi đẹp."
   }
  ]
 },
 {
  "scene": "学会放松 · Học cách thư giãn",
  "anh": "/images/hsk4v3/bai-8/kv-3.webp",
  "nguoi": [
   {
    "ten": "小语",
    "anh": "/images/hsk4v3/nv/xiaoyu.webp"
   }
  ],
  "preQuiz": [
   {
    "q": "根据课文，经常加班、熬夜会怎么样？",
    "opts": [
     "工作效率变高",
     "学习成绩提高",
     "心情变得很差",
     "健康受到影响"
    ],
    "ans": 3
   },
   {
    "q": "周末好好休息，给杨同乐带来了什么变化？",
    "opts": [
     "工作少了",
     "朋友多了",
     "心情更差",
     "工作效率更高"
    ],
    "ans": 3
   }
  ],
  "lines": [
   {
    "sp": 0,
    "zh": "以前杨同乐总觉得自己年轻，就应该多学多干、积累经验。",
    "py": "Yǐqián Yáng Tónglè zǒng juéde zìjǐ niánqīng, jiù yīnggāi duō xué duō gàn, jīlěi jīngyàn.",
    "vn": "Trước đây Dương Đồng Lạc luôn nghĩ mình còn trẻ thì nên học nhiều làm nhiều, tích lũy kinh nghiệm."
   },
   {
    "sp": 0,
    "zh": "很多年轻人和他想法一样。",
    "py": "Hěn duō niánqīngrén hé tā xiǎng fǎ yíyàng.",
    "vn": "Rất nhiều người trẻ cũng nghĩ giống anh ấy."
   },
   {
    "sp": 0,
    "zh": "但是，由于工作紧张，他们经常加班、熬夜，休息不够，结果工作效率下降，健康也受到了影响。",
    "py": "Dànshì, yóuyú gōngzuò jǐnzhāng, tāmen jīngcháng jiābān, áoyè, xiūxi bú gòu, jiéguǒ gōngzuò xiàolǜ xiàjiàng, jiànkāng yě shòudào le yǐngxiǎng.",
    "vn": "Nhưng do công việc căng thẳng, họ thường xuyên tăng ca, thức khuya, nghỉ ngơi không đủ, kết quả là hiệu suất công việc giảm sút, sức khỏe cũng bị ảnh hưởng."
   },
   {
    "sp": 0,
    "zh": "现在越来越多的人认识到，跟一直加班相比，休息好了再工作，效率更高。",
    "py": "Xiànzài yuèláiyuè duō de rén rènshi dào, gēn yìzhí jiābān xiāngbǐ, xiūxi hǎo le zài gōngzuò, xiàolǜ gèng gāo.",
    "vn": "Bây giờ ngày càng nhiều người nhận ra rằng so với tăng ca liên tục, nghỉ ngơi đầy đủ rồi mới làm việc thì hiệu suất cao hơn."
   },
   {
    "sp": 0,
    "zh": "因此，很多人开始做出改变，提醒自己减轻压力、多多放松。",
    "py": "Yīncǐ, hěn duō rén kāishǐ zuò chū gǎibiàn, tíxǐng zìjǐ jiǎn qīng yālì, duō duō fàngsōng.",
    "vn": "Vì vậy, nhiều người bắt đầu thay đổi, nhắc nhở bản thân giảm bớt áp lực, thư giãn nhiều hơn."
   },
   {
    "sp": 0,
    "zh": "比如，杨同乐周末时或者与朋友们去郊区游玩，在大自然美丽的景色中好好放松自己；或者就在家里安安静静地看看书。",
    "py": "Bǐrú, Yáng Tónglè zhōumò shí huòzhě yǔ péngyou men qù jiāoqū yóuwán, zài dàzìrán měilì de jǐngsè zhōng hǎo hǎo fàngsōng zìjǐ; huòzhě jiù zài jiā lǐ ānān-jìngjìng de kàn kàn shū.",
    "vn": "Ví dụ, cuối tuần Dương Đồng Lạc có khi cùng bạn bè đi chơi ngoại ô, thư giãn thoải mái giữa cảnh sắc tươi đẹp của thiên nhiên; có khi chỉ ở nhà yên lặng đọc sách."
   },
   {
    "sp": 0,
    "zh": "休息好了，再回去上班时，心情愉快，工作效率也更高。",
    "py": "Xiūxi hǎo le, zài huíqù shàngbān shí, xīnqíng yúkuài, gōngzuò xiàolǜ yě gèng gāo.",
    "vn": "Nghỉ ngơi đầy đủ rồi, khi quay lại đi làm, tâm trạng vui vẻ, hiệu suất công việc cũng cao hơn."
   }
  ],
  "doan": true
 },
 {
  "scene": "去哪儿放松好 · Đi đâu để thư giãn thì tốt — 小语助力: 农家乐 (nông gia lạc) là nơi nghỉ ngơi ở nông thôn do nhà nông mở, có ăn uống, chỗ ở và trải nghiệm việc nhà nông; cuối tuần người thành phố hay đến 农家乐 chơi",
  "anh": "/images/hsk4v3/bai-8/kv-4.webp",
  "nguoi": [
   {
    "ten": "小语",
    "anh": "/images/hsk4v3/nv/xiaoyu.webp"
   }
  ],
  "preQuiz": [
   {
    "q": "根据课文，周末的时候，很多人都喜欢做什么？",
    "opts": [
     "外出游玩",
     "在家看书",
     "去商场购物",
     "去公司加班"
    ],
    "ans": 0
   },
   {
    "q": "他和家人为什么喜欢坐公交车去郊区？",
    "opts": [
     "公交车快",
     "公交车人少",
     "可以看风景",
     "北京交通方便"
    ],
    "ans": 3
   }
  ],
  "lines": [
   {
    "sp": 0,
    "zh": "一到周末，很多人都喜欢外出游玩。",
    "py": "Yí dào zhōumò, hěn duō rén dōu xǐhuan wàichū yóuwán.",
    "vn": "Cứ đến cuối tuần, rất nhiều người thích ra ngoài đi chơi."
   },
   {
    "sp": 0,
    "zh": "你一般去哪里呢？",
    "py": "Nǐ yìbān qù nǎlǐ ne?",
    "vn": "Bạn thường đi đâu?"
   },
   {
    "sp": 0,
    "zh": "我生活在中国的首都——北京。",
    "py": "Wǒ shēnghuó zài Zhōngguó de shǒudū — Běijīng.",
    "vn": "Tôi sống ở thủ đô của Trung Quốc — Bắc Kinh."
   },
   {
    "sp": 0,
    "zh": "在北京，周末的时候，有人会在市区公园走走，看看眼前的美景；有人喜欢去参观长城、故宫等有名的景点，放松心情的同时，也能了解历史文化。",
    "py": "Zài Běijīng, zhōumò de shíhou, yǒurén huì zài shìqū gōngyuán zǒu zǒu, kàn kàn yǎnqián de měijǐng; yǒurén xǐhuan qù cānguān Chángchéng, Gùgōng děng yǒumíng de jǐngdiǎn, fàngsōng xīnqíng de tóngshí, yě néng liǎojiě lìshǐ wénhuà.",
    "vn": "Ở Bắc Kinh, vào cuối tuần, có người đi dạo trong công viên nội thành, ngắm cảnh đẹp trước mắt; có người thích đi tham quan những thắng cảnh nổi tiếng như Trường Thành, Cố Cung, vừa thư giãn đầu óc, vừa có thể tìm hiểu lịch sử văn hóa."
   },
   {
    "sp": 0,
    "zh": "北京交通很方便，所以我和家人更爱乘坐公交车去郊区，偶尔也会自己开车。",
    "py": "Běijīng jiāotōng hěn fāngbiàn, suǒyǐ wǒ hé jiārén gèng ài chéngzuò gōngjiāochē qù jiāoqū, ǒu'ěr yě huì zìjǐ kāichē.",
    "vn": "Giao thông Bắc Kinh rất thuận tiện, nên tôi và gia đình thích đi xe buýt ra ngoại ô hơn, thỉnh thoảng cũng tự lái xe."
   },
   {
    "sp": 0,
    "zh": "郊区有山有水，还有很多农家乐，吃、玩、住都十分方便。",
    "py": "Jiāoqū yǒu shān yǒu shuǐ, hái yǒu hěn duō nóngjiālè, chī, wán, zhù dōu shífēn fāngbiàn.",
    "vn": "Ngoại ô có núi có sông, lại có nhiều nông gia lạc, ăn, chơi, ở đều rất tiện."
   },
   {
    "sp": 0,
    "zh": "在我看来，不管去哪里玩，实际上都是为了放松。",
    "py": "Zài wǒ kànlái, bùguǎn qù nǎlǐ wán, shíjìshàng dōu shì wèile fàngsōng.",
    "vn": "Theo tôi, bất kể đi đâu chơi, thực ra đều là để thư giãn."
   },
   {
    "sp": 0,
    "zh": "也可以说，只要能放松，去哪儿都合适。",
    "py": "Yě kěyǐ shuō, zhǐyào néng fàngsōng, qù nǎr dōu héshì.",
    "vn": "Cũng có thể nói, chỉ cần thư giãn được thì đi đâu cũng phù hợp."
   }
  ],
  "doan": true
 }
];
var listenData = [
 {
  "audio": "小王，这个周末你有什么打算？最近加班太多了，我想去郊区放松放松。郊区有山有水，空气也好。你怎么去？乘坐公交车，一个多小时就到了。不管去哪儿，记得戴帽子，这几天太阳特别大。好主意，谢谢你提醒我。",
  "questions": [
   {
    "q": "小王为什么想去郊区？",
    "opts": [
     "最近加班太多了",
     "想参观有名的景点",
     "朋友请他去玩"
    ],
    "ans": 0
   },
   {
    "q": "小王打算怎么去郊区？",
    "opts": [
     "自己开车",
     "乘坐公交车",
     "坐高铁"
    ],
    "ans": 1
   }
  ]
 },
 {
  "audio": "你最近怎么了？上课的时候总是想睡觉。晚上一直准备考试，常常熬夜到两三点。跟熬夜相比，早点儿睡、早上起来复习，效率更高。你说得对，我最近的成绩也下降了。今天晚上早点儿睡吧，否则身体会受不了的。",
  "questions": [
   {
    "q": "他最近上课时为什么总是想睡觉？",
    "opts": [
     "常常熬夜",
     "工作太忙",
     "身体不舒服"
    ],
    "ans": 0
   },
   {
    "q": "说话人建议他怎么复习？",
    "opts": [
     "晚上熬夜复习",
     "早点儿睡，早上起来复习",
     "周末再复习"
    ],
    "ans": 1
   }
  ]
 },
 {
  "audio": "下个月我爸妈来北京，你说带他们去哪儿好？故宫和长城都很值得去，放松心情的同时，也能了解历史文化。故宫在市区，交通很方便。长城有点儿远，不过实际上坐高铁去也不太累。那我们先参观故宫，再去爬长城。不管去哪儿，我觉得他们都会很高兴的。",
  "questions": [
   {
    "q": "说话人的父母什么时候来北京？",
    "opts": [
     "下个星期",
     "下个月",
     "明年"
    ],
    "ans": 1
   },
   {
    "q": "关于故宫，下面哪个是对的？",
    "opts": [
     "在郊区",
     "交通很方便",
     "离市区很远"
    ],
    "ans": 1
   }
  ]
 }
];
var matchData = [
 {
  "left": "戴",
  "right": "帽子"
 },
 {
  "left": "参观",
  "right": "故宫"
 },
 {
  "left": "乘坐",
  "right": "公交车"
 },
 {
  "left": "失去",
  "right": "健康"
 },
 {
  "left": "提醒",
  "right": "自己多放松"
 },
 {
  "left": "工作效率",
  "right": "下降"
 },
 {
  "left": "好",
  "right": "主意"
 },
 {
  "left": "有山",
  "right": "有水"
 },
 {
  "left": "跟一直加班",
  "right": "相比"
 },
 {
  "left": "去郊区",
  "right": "游玩"
 }
];
var fillData = [
 {
  "pre": "家月，最近学习太",
  "blank": "紧张",
  "post": "了，咱们明天出去放松放松吧。",
  "hint": "(căng thẳng)",
  "ans": "紧张",
  "exp": "学习紧张 = học hành căng thẳng."
 },
 {
  "pre": "",
  "blank": "不管",
  "post": "去哪儿，能放松的地方都行。",
  "hint": "(bất kể)",
  "ans": "不管",
  "exp": "不管 + từ để hỏi，……都……"
 },
 {
  "pre": "好主意！不过明天是个大晴天，外出记得",
  "blank": "戴",
  "post": "帽子。",
  "hint": "(đội)",
  "ans": "戴",
  "exp": "戴帽子 = đội mũ; đừng nhầm với 带 (mang theo)."
 },
 {
  "pre": "以前我经常加班、",
  "blank": "熬夜",
  "post": "，身体也亮起了红灯。",
  "hint": "(thức khuya)",
  "ans": "熬夜",
  "exp": "加班、熬夜 — cặp từ hay đi cùng."
 },
 {
  "pre": "还是别给自己太大压力，",
  "blank": "否则",
  "post": "，失去健康就不值得了。",
  "hint": "(nếu không thì)",
  "ans": "否则",
  "exp": "Lời khuyên，否则 + hậu quả."
 },
 {
  "pre": "跟一直加班",
  "blank": "相比",
  "post": "，休息好了再工作，效率更高。",
  "hint": "(so với)",
  "ans": "相比",
  "exp": "跟 + A + 相比."
 },
 {
  "pre": "休息不够，结果工作效率",
  "blank": "下降",
  "post": "，健康也受到了影响。",
  "hint": "(giảm sút)",
  "ans": "下降",
  "exp": "效率下降 = hiệu suất giảm."
 },
 {
  "pre": "",
  "blank": "因此",
  "post": "，很多人开始做出改变，提醒自己减轻压力、多多放松。",
  "hint": "(vì vậy)",
  "ans": "因此",
  "exp": "因此 nêu kết quả, trang trọng hơn 所以."
 },
 {
  "pre": "郊区",
  "blank": "有山有水",
  "post": "，还有很多农家乐。",
  "hint": "(có núi có sông)",
  "ans": "有山有水",
  "exp": "Cụm cố định 有A有B."
 },
 {
  "pre": "北京交通很方便，所以我和家人更爱",
  "blank": "乘坐",
  "post": "公交车去郊区。",
  "hint": "(đi — xe, tàu)",
  "ans": "乘坐",
  "exp": "乘坐 + phương tiện = 坐 (trang trọng)."
 }
];
var sortData = [
 {
  "words": [
   "不管",
   "去哪儿",
   "，",
   "能放松的",
   "地方",
   "都行",
   "。"
  ],
  "ans": "不管去哪儿，能放松的地方都行。",
  "audio": "不管去哪儿，能放松的地方都行。"
 },
 {
  "words": [
   "别",
   "给自己",
   "太大压力",
   "，",
   "否则",
   "会",
   "失去健康",
   "。"
  ],
  "ans": "别给自己太大压力，否则会失去健康。",
  "audio": "别给自己太大压力，否则会失去健康。"
 },
 {
  "words": [
   "跟",
   "一直加班",
   "相比",
   "，",
   "休息好了",
   "再工作",
   "效率更高",
   "。"
  ],
  "ans": "跟一直加班相比，休息好了再工作效率更高。",
  "audio": "跟一直加班相比，休息好了再工作效率更高。"
 },
 {
  "words": [
   "郊区",
   "有山",
   "有水",
   "，",
   "吃、玩、住",
   "都",
   "十分方便",
   "。"
  ],
  "ans": "郊区有山有水，吃、玩、住都十分方便。",
  "audio": "郊区有山有水，吃、玩、住都十分方便。"
 },
 {
  "words": [
   "很多人",
   "开始",
   "提醒自己",
   "减轻压力",
   "、",
   "多多",
   "放松",
   "。"
  ],
  "ans": "很多人开始提醒自己减轻压力、多多放松。",
  "audio": "很多人开始提醒自己减轻压力、多多放松。"
 },
 {
  "words": [
   "有人",
   "喜欢",
   "去参观",
   "长城、故宫",
   "等",
   "有名的",
   "景点",
   "。"
  ],
  "ans": "有人喜欢去参观长城、故宫等有名的景点。",
  "audio": "有人喜欢去参观长城、故宫等有名的景点。"
 }
];
var mcData = [
 {
  "q": "＿＿去哪儿，能放松的地方都行。",
  "opts": [
   "不管",
   "虽然",
   "因为",
   "既然"
  ],
  "ans": 0,
  "exp": "不管 + từ để hỏi (哪儿)，……都…… — điều kiện bất kỳ, kết quả không đổi."
 },
 {
  "q": "不管明天＿＿，我们都去爬长城。",
  "opts": [
   "下不下雨",
   "下雨",
   "很下雨",
   "下雨了"
  ],
  "ans": 0,
  "exp": "Sau 不管 dùng dạng lựa chọn V不V, không dùng sự thật xác định."
 },
 {
  "q": "快走吧，＿＿我们就来不及了。",
  "opts": [
   "否则",
   "因此",
   "不过",
   "于是"
  ],
  "ans": 0,
  "exp": "Lời khuyên，否则 + hậu quả xấu."
 },
 {
  "q": "跟坐地铁相比，打车＿＿。",
  "opts": [
   "贵多了",
   "很贵",
   "非常贵",
   "太贵"
  ],
  "ans": 0,
  "exp": "Câu so sánh 跟……相比: dùng Adj + 多了 / 更 + Adj, không dùng 很 / 非常."
 },
 {
  "q": "＿＿去年相比，今年来这里游玩的人更多了。（văn viết）",
  "opts": [
   "与",
   "比",
   "被",
   "把"
  ],
  "ans": 0,
  "exp": "与……相比 = 跟……相比 (trang trọng, văn viết)."
 },
 {
  "q": "郊区有山＿＿水，还有很多农家乐。",
  "opts": [
   "有",
   "和",
   "也",
   "又"
  ],
  "ans": 0,
  "exp": "Cụm cố định 有A有B — không thay bằng 和."
 },
 {
  "q": "外出记得＿＿帽子。",
  "opts": [
   "戴",
   "穿",
   "带",
   "拿"
  ],
  "ans": 0,
  "exp": "Đội mũ dùng 戴; 穿 = mặc quần áo; 带 = mang theo."
 },
 {
  "q": "由于工作紧张，休息不够，结果工作效率＿＿了。",
  "opts": [
   "下降",
   "失去",
   "暂停",
   "提醒"
  ],
  "ans": 0,
  "exp": "效率下降 = hiệu suất giảm sút."
 },
 {
  "q": "北京交通很方便，我和家人更爱＿＿公交车去郊区。",
  "opts": [
   "乘坐",
   "参观",
   "游玩",
   "外出"
  ],
  "ans": 0,
  "exp": "乘坐 + phương tiện giao thông."
 },
 {
  "q": "这道菜看着不太好吃，＿＿挺好吃的。",
  "opts": [
   "实际上",
   "因此",
   "否则",
   "不管"
  ],
  "ans": 0,
  "exp": "看着……，实际上…… — vẻ ngoài khác với sự thật."
 }
];
var speakingData = {
 "intro": "Nhấn nút loa nghe câu hỏi (câu hỏi phần Khởi động, câu hỏi đọc hiểu của 4 bài khoá, kể lại bài khoá, thảo luận nhóm và đóng vai), rồi tự ghi âm câu trả lời — cố dùng từ mới và 4 điểm ngữ pháp của bài.",
 "questions": [
  {
   "q_zh": "压力大时，你会怎样放松自己？",
   "q_vn": "Khi áp lực lớn, bạn sẽ tự thư giãn như thế nào?",
   "hint": "压力大时，我一般会……。不管……，我都……。跟……相比，……更……",
   "sample": "压力大时，我一般会去公园跑跑步，或者听听音乐。不管学习多紧张，我每个周末都会跟朋友出去走走。跟在家玩手机相比，在大自然里走一走更能让我放松。",
   "sample_vn": "Khi áp lực lớn, tôi thường ra công viên chạy bộ, hoặc nghe nhạc. Dù học hành căng thẳng đến đâu, cuối tuần nào tôi cũng đi dạo cùng bạn bè. So với ở nhà chơi điện thoại, đi dạo giữa thiên nhiên giúp tôi thư giãn hơn.",
   "note": "Câu hỏi phần Khởi động của sách; dùng 不管……都…… (điểm 1) + 跟……相比 (điểm 3)."
  },
  {
   "q_zh": "外出游玩时，你喜欢看风景还是参观历史文化景点？",
   "q_vn": "Khi đi chơi xa, bạn thích ngắm phong cảnh hay tham quan các điểm di tích lịch sử văn hóa?",
   "hint": "我更喜欢……，因为……。跟……相比，……。比如……有山有水……",
   "sample": "我更喜欢看风景。跟参观历史文化景点相比，在有山有水的地方走走更能让我放松。比如去年我去了下龙湾，那里的景色十分美丽，我到现在都忘不了。不过有时候我也会去参观博物馆，了解一下当地的历史。",
   "sample_vn": "Tôi thích ngắm phong cảnh hơn. So với tham quan di tích lịch sử văn hóa, đi dạo ở nơi có núi có sông giúp tôi thư giãn hơn. Ví dụ năm ngoái tôi đi Vịnh Hạ Long, cảnh sắc ở đó vô cùng đẹp, đến giờ tôi vẫn không quên được. Có điều thỉnh thoảng tôi cũng đi tham quan bảo tàng, tìm hiểu lịch sử địa phương.",
   "note": "Câu hỏi phần Khởi động của sách; dùng 跟……相比 + 有A有B + ôn 不过 (Bài 2)."
  },
  {
   "q_zh": "安妮为什么想出去放松放松？她觉得白家月提的爬长城的建议怎么样？",
   "q_vn": "Vì sao Annie muốn ra ngoài thư giãn? Cô ấy thấy đề nghị leo Trường Thành của Bạch Gia Nguyệt thế nào?",
   "hint": "因为最近……。安妮觉得……，不过……，外出记得……",
   "sample": "因为最近学习太紧张了，所以安妮想出去放松放松。她觉得爬长城是个好主意，不过明天是个大晴天，所以她提醒白家月外出记得戴帽子。",
   "sample_vn": "Vì dạo này học hành quá căng thẳng nên Annie muốn ra ngoài thư giãn. Cô ấy thấy leo Trường Thành là ý hay, có điều mai trời nắng to nên cô ấy nhắc Bạch Gia Nguyệt ra ngoài nhớ đội mũ.",
   "note": "Câu hỏi bài khoá 1."
  },
  {
   "q_zh": "请根据提示复述课文一。",
   "q_vn": "Dựa vào gợi ý, kể lại bài khoá 1.",
   "hint": "安妮最近学习……，于是她给白家月打电话，想……。安妮觉得……都行。白家月问……，安妮告诉白家月，……。白家月又建议去……，安妮觉得这是个……，并提醒白家月，……。",
   "sample": "安妮最近学习太紧张了，于是她给白家月打电话，想明天出去放松放松。去哪儿好呢？安妮觉得能放松的地方都行。白家月问郊区怎么样，安妮告诉白家月，陈天中说下周王老师要带他们去郊区游玩。白家月又建议去爬长城，安妮觉得这是个好主意，并提醒白家月，明天是个大晴天，外出记得戴帽子。",
   "sample_vn": "Dạo này Annie học hành quá căng thẳng, thế là cô ấy gọi điện cho Bạch Gia Nguyệt, muốn ngày mai ra ngoài thư giãn… Bạch Gia Nguyệt lại đề nghị đi leo Trường Thành, Annie thấy đó là ý hay, và nhắc Bạch Gia Nguyệt mai trời nắng to, ra ngoài nhớ đội mũ.",
   "note": "Bài tập 复述 của sách (trang 85); ôn 于是 (Bài 3) + 并 (Bài 2)."
  },
  {
   "q_zh": "杨同乐以前为什么经常加班、熬夜？李文为什么说别给自己太大压力？",
   "q_vn": "Vì sao trước đây Dương Đồng Lạc thường tăng ca, thức khuya? Vì sao Lý Văn bảo đừng tự tạo áp lực quá lớn?",
   "hint": "因为他以前总觉得……，所以……。李文觉得……，否则……",
   "sample": "因为杨同乐以前总觉得年轻时要多学多干，所以参加了公司里的很多项目，经常加班、熬夜，身体也亮起了红灯。李文觉得压力太大对身体不好，否则失去了健康，就不值得了。",
   "sample_vn": "Vì trước đây Dương Đồng Lạc luôn nghĩ lúc trẻ phải học nhiều làm nhiều, nên tham gia rất nhiều dự án của công ty, thường tăng ca, thức khuya, sức khỏe cũng báo động đỏ. Lý Văn thấy áp lực quá lớn không tốt cho sức khỏe, nếu không giữ gìn mà mất sức khỏe thì chẳng đáng.",
   "note": "Câu hỏi bài khoá 2; dùng 否则 (điểm 2)."
  },
  {
   "q_zh": "跟一直加班相比，现在人们认识到，怎样才能效率更高？现在杨同乐周末时一般会怎样放松自己？",
   "q_vn": "So với tăng ca liên tục, bây giờ mọi người nhận ra làm thế nào thì hiệu suất mới cao hơn? Bây giờ cuối tuần Dương Đồng Lạc thường thư giãn thế nào?",
   "hint": "跟……相比，休息好了……。他或者……，或者……",
   "sample": "现在人们认识到，跟一直加班相比，休息好了再工作，效率更高。杨同乐周末时或者与朋友们去郊区游玩，在大自然美丽的景色中好好放松自己；或者就在家里安安静静地看看书。",
   "sample_vn": "Bây giờ mọi người nhận ra so với tăng ca liên tục, nghỉ ngơi đủ rồi mới làm thì hiệu suất cao hơn. Cuối tuần Dương Đồng Lạc có khi cùng bạn bè đi chơi ngoại ô, thư giãn giữa cảnh sắc thiên nhiên tươi đẹp; có khi ở nhà yên lặng đọc sách.",
   "note": "Câu hỏi bài khoá 3; dùng 跟……相比 (điểm 3)."
  },
  {
   "q_zh": "请根据提示复述课文三。",
   "q_vn": "Dựa vào gợi ý, kể lại bài khoá 3.",
   "hint": "以前杨同乐总觉得……，就应该……。但是，由于……，他们经常……，结果……。现在越来越多的人认识到，跟……相比，……。因此，……。比如，……。休息好了，……。",
   "sample": "以前杨同乐总觉得自己年轻，就应该多学多干、积累经验。很多年轻人和他想法一样。但是，由于工作紧张，他们经常加班、熬夜，休息不够，结果工作效率下降，健康也受到了影响。现在越来越多的人认识到，跟一直加班相比，休息好了再工作，效率更高。因此，很多人开始做出改变，提醒自己减轻压力、多多放松。比如，杨同乐周末时或者与朋友们去郊区游玩，在大自然美丽的景色中好好放松自己；或者就在家里安安静静地看看书。休息好了，再回去上班时，心情愉快，工作效率也更高。",
   "sample_vn": "Trước đây Dương Đồng Lạc luôn nghĩ mình còn trẻ thì nên học nhiều làm nhiều, tích lũy kinh nghiệm… Nghỉ ngơi đầy đủ rồi, khi quay lại làm việc, tâm trạng vui vẻ, hiệu suất cũng cao hơn.",
   "note": "Bài tập 复述 của sách (trang 88–89); ôn 由于 (Bài 2) + 因此."
  },
  {
   "q_zh": "在北京，周末外出游玩，人们一般会去哪里？农家乐怎么样？",
   "q_vn": "Ở Bắc Kinh, cuối tuần đi chơi, người ta thường đi đâu? Nông gia lạc thế nào?",
   "hint": "有人会……；有人喜欢去参观……等有名的景点；还有人……。郊区有A有B，农家乐……",
   "sample": "在北京，周末的时候，有人会在市区公园走走，看看眼前的美景；有人喜欢去参观长城、故宫等有名的景点，放松心情的同时，也能了解历史文化；还有人乘坐公交车去郊区。郊区有山有水，还有很多农家乐，吃、玩、住都十分方便。",
   "sample_vn": "Ở Bắc Kinh, cuối tuần có người đi dạo công viên nội thành, ngắm cảnh đẹp trước mắt; có người thích tham quan Trường Thành, Cố Cung…, vừa thư giãn vừa tìm hiểu lịch sử văn hóa; còn có người đi xe buýt ra ngoại ô. Ngoại ô có núi có sông, lại có nhiều nông gia lạc, ăn, chơi, ở đều rất tiện.",
   "note": "Câu hỏi bài khoá 4; dùng 有A有B (điểm 4)."
  },
  {
   "q_zh": "小组讨论：人应该不应该有压力？请说一说你们小组的观点。",
   "q_vn": "Thảo luận nhóm (3–5 người): Con người có nên có áp lực hay không? Sau khi thảo luận, một người đại diện nhóm trình bày quan điểm.",
   "hint": "我们小组认为……。一方面……，另一方面……。不过……，否则……。跟……相比，……。不管……，都……",
   "sample": "我们小组认为，人应该有一点儿压力，但是压力不能太大。一方面，有压力的时候，我们会更努力，学习和工作的效率也更高；另一方面，如果压力太大，经常加班、熬夜，健康就会受到影响。跟一直紧张地工作相比，该工作时就工作，该放松时就放松，效果更好。所以，不管学习和工作多忙，我们都应该提醒自己按时休息，否则失去了健康，就不值得了。",
   "sample_vn": "Nhóm chúng em cho rằng con người nên có chút áp lực, nhưng áp lực không được quá lớn. Một mặt, khi có áp lực chúng ta sẽ cố gắng hơn, hiệu suất học tập và làm việc cũng cao hơn; mặt khác, nếu áp lực quá lớn, thường xuyên tăng ca, thức khuya thì sức khỏe sẽ bị ảnh hưởng. So với làm việc căng thẳng liên tục, lúc cần làm thì làm, lúc cần thư giãn thì thư giãn sẽ hiệu quả hơn. Vì vậy dù học và làm bận đến đâu, chúng ta cũng nên nhắc mình nghỉ ngơi đúng giờ, nếu không mất sức khỏe thì chẳng đáng.",
   "note": "Hoạt động 小组讨论 (thảo luận nhóm) trong phần 任务活动 của sách, trang 92–93; ôn 一方面……另一方面…… (Bài 1)."
  },
  {
   "q_zh": "角色扮演：一个人最近压力很大，经常加班、熬夜；另一个人劝他放松一下，并给他出主意，介绍一个放松的好地方。",
   "q_vn": "Đóng vai: một người dạo này áp lực rất lớn, thường tăng ca, thức khuya; người kia khuyên bạn thư giãn, bày cách và giới thiệu một nơi thư giãn lý tưởng.",
   "hint": "A：最近……，经常……。 B：别……，否则……。跟……相比，……。 A：去哪儿好呢？ B：不管去哪儿……。……有山有水……",
   "sample": "A：最近项目太多了，我天天加班，昨天又熬夜到两点。B：你别给自己太大压力，否则身体会受不了的。A：可是工作做不完啊。B：跟一直加班相比，休息好了再工作，效率更高。这个周末咱们出去放松放松吧。A：好主意！去哪儿好呢？B：不管去哪儿，能放松就行。我知道郊区有个农家乐，那里有山有水，风景十分美丽，吃、住都很方便。A：怎么去呢？B：乘坐公交车一个多小时就到了，交通很方便。A：太好了，那我周六早上去找你。B：别忘了戴帽子，最近太阳很大。",
   "sample_vn": "A: Dạo này nhiều dự án quá, ngày nào tớ cũng tăng ca, hôm qua lại thức đến 2 giờ. B: Cậu đừng tự tạo áp lực quá lớn, nếu không cơ thể không chịu nổi đâu. A: Nhưng việc làm không hết. B: So với tăng ca liên tục, nghỉ ngơi đủ rồi làm thì hiệu suất cao hơn. Cuối tuần này mình ra ngoài thư giãn đi. A: Ý hay! Đi đâu được nhỉ? B: Đi đâu cũng được, thư giãn được là ổn. Tớ biết ở ngoại ô có một nông gia lạc, có núi có sông, phong cảnh rất đẹp, ăn ở đều tiện. A: Đi thế nào? B: Đi xe buýt hơn một tiếng là tới, giao thông rất tiện. A: Tuyệt quá, sáng thứ Bảy tớ qua tìm cậu. B: Đừng quên đội mũ nhé, dạo này nắng to lắm.",
   "note": "Hoạt động đóng vai mở rộng từ phần 分角色朗读对话 của sách — dùng đủ 4 điểm ngữ pháp: 不管……都, 否则, 跟……相比, 有A有B."
  }
 ]
};
var translateData = [
 {
  "vi": "Dạo này học hành căng thẳng quá, ngày mai chúng mình ra ngoài thư giãn chút đi.",
  "zh": "最近学习太紧张了，咱们明天出去放松放松吧。",
  "py": "Zuìjìn xuéxí tài jǐnzhāng le, zánmen míngtiān chūqù fàngsōng fàngsōng ba."
 },
 {
  "vi": "Đi đâu cũng được, miễn là nơi có thể thư giãn.",
  "zh": "不管去哪儿，能放松的地方都行。",
  "py": "Bùguǎn qù nǎr, néng fàngsōng de dìfang dōu xíng."
 },
 {
  "vi": "Đừng tự tạo áp lực quá lớn cho mình, nếu không mất sức khỏe thì chẳng đáng.",
  "zh": "别给自己太大压力，否则，失去健康就不值得了。",
  "py": "Bié gěi zìjǐ tài dà yālì, fǒuzé, shīqù jiànkāng jiù bù zhídé le."
 },
 {
  "vi": "So với tăng ca liên tục, nghỉ ngơi đầy đủ rồi mới làm thì hiệu suất cao hơn.",
  "zh": "跟一直加班相比，休息好了再工作，效率更高。",
  "py": "Gēn yìzhí jiābān xiāngbǐ, xiūxi hǎo le zài gōngzuò, xiàolǜ gèng gāo."
 },
 {
  "vi": "Ngoại ô có núi có sông, ăn, chơi, ở đều rất tiện.",
  "zh": "郊区有山有水，吃、玩、住都十分方便。",
  "py": "Jiāoqū yǒu shān yǒu shuǐ, chī, wán, zhù dōu shífēn fāngbiàn."
 },
 {
  "vi": "Theo tôi, bất kể đi đâu chơi, thực ra đều là để thư giãn.",
  "zh": "在我看来，不管去哪里玩，实际上都是为了放松。",
  "py": "Zài wǒ kànlái, bùguǎn qù nǎlǐ wán, shíjìshàng dōu shì wèile fàngsōng."
 }
];
var translateDataRev = [
 {
  "vi": "Lúc cần làm thì làm, lúc cần thư giãn thì phải thư giãn.",
  "zh": "该工作时就工作，该放松时就要放松。",
  "py": "Gāi gōngzuò shí jiù gōngzuò, gāi fàngsōng shí jiù yào fàngsōng."
 },
 {
  "vi": "Sau khi tạm dừng lại, nghỉ ngơi cho tử tế, tôi có thể làm việc nhanh hơn và tốt hơn.",
  "zh": "暂停下来、好好休息之后，我能把工作做得更快更好。",
  "py": "Zàntíng xiàlái, hǎo hǎo xiūxi zhīhòu, wǒ néng bǎ gōngzuò zuò de gèng kuài gèng hǎo."
 },
 {
  "vi": "Do công việc căng thẳng, họ thường tăng ca, thức khuya, kết quả là hiệu suất giảm sút.",
  "zh": "由于工作紧张，他们经常加班、熬夜，结果工作效率下降。",
  "py": "Yóuyú gōngzuò jǐnzhāng, tāmen jīngcháng jiābān, áoyè, jiéguǒ gōngzuò xiàolǜ xiàjiàng."
 },
 {
  "vi": "Có người thích tham quan các thắng cảnh nổi tiếng như Trường Thành, Cố Cung.",
  "zh": "有人喜欢去参观长城、故宫等有名的景点。",
  "py": "Yǒurén xǐhuan qù cānguān Chángchéng, Gùgōng děng yǒumíng de jǐngdiǎn."
 },
 {
  "vi": "Giao thông Bắc Kinh rất tiện, nên tôi và gia đình thích đi xe buýt ra ngoại ô hơn.",
  "zh": "北京交通很方便，所以我和家人更爱乘坐公交车去郊区。",
  "py": "Běijīng jiāotōng hěn fāngbiàn, suǒyǐ wǒ hé jiārén gèng ài chéngzuò gōngjiāochē qù jiāoqū."
 }
];
var sgkData = [
 {
  "kieu": "kho",
  "de": "选词填空（一）· 综合练习",
  "vn": "Chọn từ thích hợp điền vào chỗ trống (Bài tập tổng hợp, sách trang 91, câu 1–5).",
  "dapSgk": true,
  "tu": [
   "戴",
   "主意",
   "乘坐",
   "提醒",
   "紧张"
  ],
  "cau": [
   {
    "s": "从北京＿＿高铁去上海，四五个小时就能到，特别快。",
    "dap": [
     "乘坐"
    ]
   },
   {
    "s": "下雨天妈妈总是＿＿我，出门时别忘了带雨伞。",
    "dap": [
     "提醒"
    ]
   },
   {
    "s": "夏天比较热，出汗多，所以我一般不＿＿手表。",
    "dap": [
     "戴"
    ]
   },
   {
    "s": "他今天是第一次参加比赛，所以十分＿＿。",
    "dap": [
     "紧张"
    ]
   },
   {
    "s": "大家正不知道怎么办时，小文想出了一个好＿＿，这个难题马上就解决了。",
    "dap": [
     "主意"
    ]
   }
  ]
 },
 {
  "kieu": "kho",
  "de": "选词填空（二）· 综合练习",
  "vn": "Chọn từ thích hợp điền vào chỗ trống (hội thoại, sách trang 91–92, câu 6–10).",
  "dapSgk": true,
  "tu": [
   "风景",
   "下降",
   "否则",
   "景点",
   "实际上"
  ],
  "cau": [
   {
    "s": "A：明天有什么安排？　B：明天就安排了一个＿＿——八达岭（Bādálǐng）长城。因为有些远，需要坐高铁去。",
    "dap": [
     "景点"
    ]
   },
   {
    "s": "A：八达岭长城的＿＿太美了，我很喜欢。你以前来过吗？　B：来过，这是我第三次来了。",
    "dap": [
     "风景"
    ]
   },
   {
    "s": "A：你怎么了？感觉这段时间你的工作效率＿＿了。　B：可能是因为最近晚上睡不着，休息不好。",
    "dap": [
     "下降"
    ]
   },
   {
    "s": "A：这道菜看着不太好吃，我不想吃。　B：＿＿挺好吃的，你尝尝。",
    "dap": [
     "实际上"
    ]
   },
   {
    "s": "A：我刚收到通知，今天下午要停水。　B：那咱们赶快多接点儿水，＿＿做不了饭了。",
    "dap": [
     "否则"
    ]
   }
  ]
 },
 {
  "kieu": "kho",
  "de": "选择合适的内容完成短文",
  "vn": "Chọn nội dung thích hợp (A–D) hoàn thành đoạn văn (sách trang 92).",
  "dapSgk": true,
  "tu": [
   "累了就休息",
   "这样效率才能更高",
   "还经常感冒",
   "中午也不按时吃饭"
  ],
  "cau": [
   {
    "s": "工作或学习时间长了就要休息一会儿，＿＿。我以前在学校读书时，很长一段时间里，除了上课，就是在图书馆学习，＿＿。结果是不仅学习效果不好，＿＿。后来，我开始注意锻炼身体，＿＿，学习效率也提高了。",
    "dap": [
     "这样效率才能更高",
     "中午也不按时吃饭",
     "还经常感冒",
     "累了就休息"
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
    "anh": "/images/hsk4v3/bai-8/bt-1.webp",
    "s": "",
    "tu": "市区",
    "dap": "我家住在市区。",
    "giai": "住在 + nơi chốn; 市区 = nội thành (trái nghĩa 郊区). Có thể nói dài hơn: 市区有很多高楼，交通很方便。"
   },
   {
    "anh": "/images/hsk4v3/bai-8/bt-2.webp",
    "s": "",
    "tu": "景色",
    "dap": "春天，这里的景色真漂亮！",
    "giai": "Nơi chốn + 的 + 景色 + 真 / 十分 + Adj; có thể thêm 有A有B: 这里有山有水，景色十分美丽。"
   },
   {
    "anh": "/images/hsk4v3/bai-8/bt-3.webp",
    "s": "",
    "tu": "交通",
    "dap": "这个十字路口的交通有点儿乱，你开车要小心。",
    "giai": "交通 + 乱 / 方便; 十字路口 (shízì lùkǒu) = ngã tư; 有点儿 + Adj chỉ điều không như ý."
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
  "tieuDe": "Giới thiệu nơi đi chơi để lại ấn tượng sâu sắc nhất (写作)",
  "gioiThieu": "Đề 写作 của sách HSK 4 (3.0) yêu cầu viết một đoạn văn ngắn (ít nhất 120 chữ) dựa trên chủ đề đã học — lần này là giới thiệu một nơi em từng đi chơi và ấn tượng nhất: đi bằng gì, cảnh ở đó thế nào, em cảm thấy ra sao. Dạng bài kể – tả này rất giống phần 书写 của đề thi HSK 4 mới.",
  "buoc": [
   "Đọc kỹ đề: chọn MỘT nơi duy nhất em ấn tượng nhất (Hạ Long, Sa Pa, Đà Lạt, Hội An, Bắc Kinh…), không kể lan man nhiều nơi.",
   "Lập dàn ý theo các câu hỏi gợi ý: vì sao đi, đi bằng phương tiện gì, phong cảnh ra sao, em làm gì ở đó, cảm nhận của em — mỗi ý 1–2 câu.",
   "Dùng từ mới (风景, 景色, 美丽, 乘坐, 交通, 景点, 十分, 值得…) và 4 điểm ngữ pháp: 不管……都……, ……否则……, 跟……相比, 有A有B.",
   "Nối các ý bằng từ nối: 由于……, 于是……, 不仅……而且……, 一方面……另一方面…… (ôn các bài trước).",
   "Câu mở nêu tên nơi em chọn, câu kết là cảm nhận / lời khuyên (rất đáng đi…); tự soát số chữ (≥ 120) và lỗi chữ Hán (戴 / 带, 景 / 京…) trước khi nộp."
  ]
 },
 "de": "你去过哪些地方游玩？请选择一个你印象最深的地方，介绍一下你是怎么去那里的，那里有什么样的风景，等等，不少于120字。",
 "prompt": "Em đã từng đi chơi những nơi nào? Hãy chọn một nơi để lại ấn tượng sâu sắc nhất, giới thiệu em đến đó bằng cách nào, ở đó có phong cảnh ra sao, v.v. — không ít hơn 120 chữ.",
 "dan": [
  {
   "hoi": "你去过哪些地方？印象最深的是哪儿？",
   "goiY": "我去过很多地方游玩，其中印象最深的是……"
  },
  {
   "hoi": "你为什么去那里？什么时候去的？和谁去的？",
   "goiY": "去年……，由于工作 / 学习太紧张，于是我和……一起去那里放松放松"
  },
  {
   "hoi": "你是怎么去那里的？交通方便吗？",
   "goiY": "我们从……乘坐……出发，……个小时就到了，交通十分方便"
  },
  {
   "hoi": "那里有什么样的风景？你在那里做了什么？",
   "goiY": "那里有山有水，景色十分美丽……；跟市区相比，……"
  },
  {
   "hoi": "你有什么感受？你想给别人什么建议？",
   "goiY": "不管工作多忙，都应该……；外出记得……，否则……；……很值得一去"
  }
 ],
 "tuNen": [
  "风景",
  "景色",
  "美丽",
  "美景",
  "眼前",
  "乘坐",
  "交通",
  "景点",
  "参观",
  "游玩",
  "十分",
  "值得",
  "放松",
  "紧张",
  "提醒",
  "戴",
  "帽子",
  "大自然"
 ],
 "cauTruc": [
  {
   "ten": "有A有B",
   "nhan": "有A有B",
   "vd": "下龙湾有山有水，景色十分美丽。",
   "khi": "Tả phong cảnh của nơi đó."
  },
  {
   "ten": "跟……相比，……",
   "nhan": "相比",
   "vd": "跟市区相比，那里的空气新鲜多了，晚上也特别安静。",
   "khi": "So sánh nơi đó với nơi em đang sống."
  },
  {
   "ten": "乘坐……去……",
   "nhan": "乘坐",
   "vd": "我们从河内乘坐大巴车出发，三个多小时就到了。",
   "khi": "Kể cách đi đến đó."
  },
  {
   "ten": "……，否则……",
   "nhan": "否则",
   "vd": "外出一定要戴帽子，否则很容易被晒伤。",
   "khi": "Lời nhắc / lời khuyên cho người muốn đến."
  },
  {
   "ten": "不管……，都……",
   "nhan": "不管",
   "vd": "不管工作多忙，我们都应该抽时间去大自然里走走。",
   "khi": "Câu KẾT: nêu cảm nhận, bài học."
  }
 ],
 "checklist": [
  "Đủ ít nhất 120 chữ Hán chưa?",
  "Đã nói đủ các ý: nơi nào, vì sao đi, đi bằng gì, phong cảnh, em làm gì, cảm nhận chưa?",
  "Đã dùng ít nhất 3 trong 4 điểm ngữ pháp của bài (不管……都、否则、跟……相比、有A有B) chưa?",
  "Đã dùng ít nhất 6 từ mới của bài chưa (风景, 景色, 乘坐, 交通, 十分, 值得…)?",
  "Có câu mở (nêu tên nơi) và câu kết (cảm nhận / lời khuyên) chưa? Đã soát lỗi 戴 / 带 chưa?"
 ],
 "model": {
  "zh": "我去过很多地方游玩，其中印象最深的是越南的下龙湾。去年夏天，由于工作太紧张，我常常加班、熬夜，于是决定和家人一起去那里放松放松。我们从河内乘坐大巴车出发，三个多小时就到了，交通十分方便。下龙湾有山有水，海上有一千多座小山，景色非常美丽。我们坐船在海上游玩，眼前的美景让我忘了工作的压力。跟市区相比，那里的空气新鲜多了，晚上也特别安静。导游提醒我们，夏天太阳很大，外出一定要戴帽子，否则很容易被晒伤。在我看来，不管工作多忙，都应该抽时间去大自然里走走。下龙湾真的很值得一去！",
  "py": "Wǒ qù guò hěn duō dìfang yóuwán, qízhōng yìnxiàng zuì shēn de shì Yuènán de xià lóng wān. Qùnián xiàtiān, yóuyú gōngzuò tài jǐnzhāng, wǒ chángcháng jiābān, áoyè, yúshì juédìng hé jiārén yìqǐ qù nàli fàngsōng fàngsōng. Wǒmen cóng hé nèi chéngzuò dà bā chē chūfā, sān gè duō xiǎoshí jiù dào le, jiāotōng shífēn fāngbiàn. Xià lóng wān yǒu shān yǒu shuǐ, hǎi shàng yǒu yì qiān duō zuò xiǎo shān, jǐngsè fēicháng měilì. Wǒmen zuò chuán zài hǎi shàng yóuwán, yǎnqián de měijǐng ràng wǒ wàng le gōngzuò de yālì. Gēn shìqū xiāngbǐ, nàli de kōngqì xīnxiān duō le, wǎnshang yě tèbié ānjìng. Dǎoyóu tíxǐng wǒmen, xiàtiān tàiyang hěn dà, wàichū yídìng yào dài màozi, fǒuzé hěn róngyì bèi shài shāng. Zài wǒ kànlái, bùguǎn gōngzuò duō máng, dōu yīnggāi chōu shíjiān qù dàzìrán lǐ zǒu zǒu. Xià lóng wān zhēn de hěn zhídé yí qù!"
 }
};
