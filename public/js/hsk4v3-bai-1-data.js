// HSK 4 (3.0) · Bai 1 — sinh boi tools/hsk4v3/gan.js tu tools/hsk4v3/bai-1/ (dung sua tay).
var vocabData = [
 {
  "n": 1,
  "zh": "签证",
  "py": "qiānzhèng",
  "pos": "Danh từ",
  "vn": "thị thực, visa",
  "hv": "thiêm chứng",
  "em": "🛂",
  "lesson": 1,
  "explain": [
   "Giấy phép do nước khác cấp, cho phép em vào nước đó (học tập, làm việc, du lịch)."
  ],
  "usage": "办签证 (làm visa) · 学生签证 · 签证到期 (hết hạn).",
  "collo": [
   "办签证",
   "学生签证",
   "签证到期",
   "拿到签证"
  ],
  "colloFull": [
   {
    "zh": "办签证",
    "py": "Bàn qiānzhèng",
    "vn": "làm visa"
   },
   {
    "zh": "学生签证",
    "py": "Xuésheng qiānzhèng",
    "vn": "visa du học"
   },
   {
    "zh": "签证到期",
    "py": "Qiānzhèng dào qī",
    "vn": "visa hết hạn"
   },
   {
    "zh": "拿到签证",
    "py": "Ná dào qiānzhèng",
    "vn": "nhận được visa"
   }
  ],
  "patterns": [
   {
    "s": "办 / 拿到 + 签证",
    "m": "Làm / nhận được visa"
   },
   {
    "s": "护照 ≠ 签证",
    "m": "护照 là hộ chiếu nước mình cấp; 签证 là giấy phép nước khác cấp"
   }
  ],
  "ex_zh": "请把护照、签证和入学通知书给我。",
  "ex_py": "Qǐng bǎ hùzhào, qiānzhèng hé rùxué tōngzhīshū gěi wǒ.",
  "ex_vn": "Hãy đưa cho cô hộ chiếu, visa và giấy báo nhập học.",
  "exList": [
   {
    "zh": "请把护照、签证和入学通知书给我。",
    "py": "Qǐng bǎ hùzhào, qiānzhèng hé rùxué tōngzhīshū gěi wǒ.",
    "vn": "Hãy đưa cho cô hộ chiếu, visa và giấy báo nhập học."
   },
   {
    "zh": "我的学生签证下个月就到期了。",
    "py": "Wǒ de xuésheng qiānzhèng xià gè yuè jiù dào qī le.",
    "vn": "Visa du học của tôi tháng sau là hết hạn rồi."
   }
  ],
  "hanzi": [
   {
    "c": "签",
    "p": "qiān",
    "type": "上下结构 · Trên-dưới",
    "st": 13,
    "ord": "⺮ trên → 佥 dưới",
    "rad": "⺮ (trúc)",
    "mean": "ký",
    "tip": "Trúc ⺮ + 佥 → thẻ tre để ghi → KÝ (tên). 签证 = giấy chứng nhận có ký = visa; 签名 = ký tên.",
    "cf": "检 (jiǎn – kiểm)",
    "w": "签证 / 签名 / 签字"
   },
   {
    "c": "证",
    "p": "zhèng",
    "type": "左右结构 · Trái-phải (giản thể)",
    "st": 7,
    "ord": "讠 (ngôn) trái → 正 (chính) phải",
    "rad": "讠 (ngôn – lời nói)",
    "mean": "chứng minh, xác nhận",
    "tip": "Bộ lời nói 讠 + 正 (đúng đắn) → LỜI NÓI ĐÚNG ĐẮN, xác nhận, kết hợp 保(giữ, đảm bảo) thành 保证 = CAM ĐOAN.",
    "cf": "征 (zhēng – \"chinh phạt/trưng thu\")",
    "w": "保证 / 证明 / 保护"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Nếu không làm visa thì không thể sang Trung Quốc du học.",
    "answer": "要是不办签证，就不能来中国留学。",
    "answerPy": "Yàoshi bú bàn qiānzhèng, jiù bù néng lái Zhōngguó liúxué.",
    "note": "Kết hợp 要是……就…… (Bài 1 · điểm 2).",
    "pair": "要是……就……"
   },
   {
    "promptLang": "vi",
    "prompt": "Tôi đã đưa hộ chiếu và visa cho thầy rồi.",
    "answer": "我已经把护照和签证给老师了。",
    "answerPy": "Wǒ yǐjīng bǎ hùzhào hé qiānzhèng gěi lǎoshī le.",
    "note": "Ôn câu chữ 把 (HSK 3): 把 + vật + 给 + người.",
    "pair": "把……给……"
   }
  ]
 },
 {
  "n": 2,
  "zh": "入学",
  "py": "rùxué",
  "pos": "Động từ",
  "vn": "nhập học, vào trường",
  "hv": "nhập học",
  "em": "🏫",
  "lesson": 1,
  "explain": [
   "Chính thức trở thành học sinh / sinh viên của một trường."
  ],
  "usage": "入学手续 (thủ tục nhập học) · 入学通知书 · 2024年入学.",
  "collo": [
   "入学手续",
   "入学通知书",
   "办理入学",
   "入学考试"
  ],
  "colloFull": [
   {
    "zh": "入学手续",
    "py": "Rùxué shǒuxù",
    "vn": "thủ tục nhập học"
   },
   {
    "zh": "入学通知书",
    "py": "Rùxué tōngzhīshū",
    "vn": "giấy báo nhập học"
   },
   {
    "zh": "办理入学",
    "py": "Bànlǐ rùxué",
    "vn": "làm (thủ tục) nhập học"
   },
   {
    "zh": "入学考试",
    "py": "Rùxué kǎoshì",
    "vn": "kỳ thi đầu vào"
   }
  ],
  "patterns": [
   {
    "s": "Sub + 是 + năm + 入学的",
    "m": "Nhấn mạnh thời điểm nhập học (是……的)"
   },
   {
    "s": "办理 + 入学手续",
    "m": "Làm thủ tục nhập học"
   }
  ],
  "ex_zh": "在学院办公室，白家月和陈天中在办理入学手续。",
  "ex_py": "Zài xué yuàn bàngōngshì, Bái Jiāyuè hé Chén Tiānzhōng zài bànlǐ rùxué shǒuxù.",
  "ex_vn": "Ở văn phòng học viện, Bạch Gia Nguyệt và Trần Thiên Trung đang làm thủ tục nhập học.",
  "exList": [
   {
    "zh": "在学院办公室，白家月和陈天中在办理入学手续。",
    "py": "Zài xué yuàn bàngōngshì, Bái Jiāyuè hé Chén Tiānzhōng zài bànlǐ rùxué shǒuxù.",
    "vn": "Ở văn phòng học viện, Bạch Gia Nguyệt và Trần Thiên Trung đang làm thủ tục nhập học."
   },
   {
    "zh": "我是2024年入学的，学的是国际经济专业。",
    "py": "Wǒ shì 2024 nián rùxué de, xué de shì guójì jīngjì zhuānyè.",
    "vn": "Tôi nhập học năm 2024, học chuyên ngành kinh tế quốc tế."
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
    "prompt": "Em nhập học năm nào?",
    "answer": "你是哪一年入学的？",
    "answerPy": "Nǐ shì nǎ yì nián rùxué de?",
    "note": "Ôn câu 是……的 nhấn mạnh thời gian (HSK 2/3).",
    "pair": "是……的"
   },
   {
    "promptLang": "vi",
    "prompt": "Làm xong thủ tục nhập học rồi chúng ta đi ăn nhé.",
    "answer": "办好了入学手续，我们就去吃饭吧。",
    "answerPy": "Bàn hǎo le rùxué shǒuxù, wǒmen jiù qù chīfàn ba.",
    "note": "Bổ ngữ kết quả 好 + 就 nối hai việc.",
    "pair": "V好了……就……"
   }
  ]
 },
 {
  "n": 3,
  "zh": "通知",
  "py": "tōngzhī",
  "pos": "Động từ / Danh từ",
  "vn": "thông báo; giấy báo, thông báo",
  "hv": "thông tri",
  "em": "📢",
  "lesson": 1,
  "explain": [
   "Động từ: báo cho ai biết một việc.",
   "Danh từ: tin / giấy thông báo."
  ],
  "usage": "通知 + ai · 学校的通知 · 入学通知书.",
  "collo": [
   "入学通知书",
   "通知大家",
   "收到通知",
   "学校的通知"
  ],
  "colloFull": [
   {
    "zh": "入学通知书",
    "py": "Rùxué tōngzhīshū",
    "vn": "giấy báo nhập học"
   },
   {
    "zh": "通知大家",
    "py": "Tōngzhī dàjiā",
    "vn": "thông báo cho mọi người"
   },
   {
    "zh": "收到通知",
    "py": "Shōudào tōngzhī",
    "vn": "nhận được thông báo"
   },
   {
    "zh": "学校的通知",
    "py": "Xuéxiào de tōngzhī",
    "vn": "thông báo của trường"
   }
  ],
  "patterns": [
   {
    "s": "通知 + ai + việc",
    "m": "Báo cho ai biết việc gì (động từ)"
   },
   {
    "s": "收到 / 看到 + 通知",
    "m": "Nhận / xem thông báo (danh từ)"
   }
  ],
  "ex_zh": "学校有任何通知，我都会第一时间告诉你。",
  "ex_py": "Xuéxiào yǒu rènhé tōngzhī, wǒ dōu huì dì yī shíjiān gàosu nǐ.",
  "ex_vn": "Trường có bất kỳ thông báo nào, tôi đều sẽ báo cho bạn ngay lập tức.",
  "exList": [
   {
    "zh": "学校有任何通知，我都会第一时间告诉你。",
    "py": "Xuéxiào yǒu rènhé tōngzhī, wǒ dōu huì dì yī shíjiān gàosu nǐ.",
    "vn": "Trường có bất kỳ thông báo nào, tôi đều sẽ báo cho bạn ngay lập tức."
   },
   {
    "zh": "老师通知我们明天八点出发。",
    "py": "Lǎoshī tōngzhī wǒmen míngtiān bā diǎn chūfā.",
    "vn": "Thầy thông báo cho chúng tôi 8 giờ sáng mai xuất phát."
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
   },
   {
    "c": "知",
    "p": "zhī",
    "type": "左右结构 · Trái-phải",
    "st": 8,
    "ord": "矢 (thỉ) trái → 口 (khẩu) phải",
    "rad": "矢 (thỉ – mũi tên)",
    "mean": "biết",
    "tip": "Bộ mũi tên 矢 (chính xác) + 口 (miệng, nói ra) → nói ra một cách CHÍNH XÁC những gì mình BIẾT, kết hợp 通 (thông suốt) thành 通知 = làm cho ai đó BIẾT tin.",
    "cf": "知 dễ nhầm với 智 (zhì – \"trí tuệ\", thêm 日\")",
    "w": "通知 / 知道 / 通知书"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Tôi vừa nhận được thông báo của trường, tuần sau bắt đầu lên lớp.",
    "answer": "我刚收到学校的通知，下周开始上课。",
    "answerPy": "Wǒ gāng shōudào xuéxiào de tōngzhī, xià zhōu kāishǐ shàngkè.",
    "note": "通知 là danh từ sau 收到.",
    "pair": "收到通知"
   },
   {
    "promptLang": "vi",
    "prompt": "Có chuyện gì thì nhớ báo cho tôi nhé.",
    "answer": "有什么事，记得通知我啊。",
    "answerPy": "Yǒu shénme shì, jìde tōngzhī wǒ a.",
    "note": "Ôn đại từ nghi vấn dùng phiếm chỉ 什么 (HSK 3).",
    "pair": "有什么……"
   }
  ]
 },
 {
  "n": 4,
  "zh": "证件",
  "py": "zhèngjiàn",
  "pos": "Danh từ",
  "vn": "giấy tờ (tùy thân)",
  "hv": "chứng kiện",
  "em": "🪪",
  "lesson": 1,
  "explain": [
   "Gọi chung các loại giấy tờ chứng minh thân phận: hộ chiếu, thẻ sinh viên, chứng minh thư…"
  ],
  "usage": "带证件 · 证件和材料 · 证件照 (ảnh thẻ).",
  "collo": [
   "带证件",
   "证件和材料",
   "证件照",
   "检查证件"
  ],
  "colloFull": [
   {
    "zh": "带证件",
    "py": "Dài zhèngjiàn",
    "vn": "mang giấy tờ"
   },
   {
    "zh": "证件和材料",
    "py": "Zhèngjiàn hé cáiliào",
    "vn": "giấy tờ và hồ sơ"
   },
   {
    "zh": "证件照",
    "py": "Zhèngjiàn zhào",
    "vn": "ảnh thẻ"
   },
   {
    "zh": "检查证件",
    "py": "Jiǎnchá zhèngjiàn",
    "vn": "kiểm tra giấy tờ"
   }
  ],
  "patterns": [
   {
    "s": "证件 = 护照 / 学生证 / 签证…",
    "m": "Từ gọi chung, không đếm từng loại"
   }
  ],
  "ex_zh": "好的。这是我们的证件和材料。",
  "ex_py": "Hǎo de. Zhè shì wǒmen de zhèngjiàn hé cáiliào.",
  "ex_vn": "Vâng ạ. Đây là giấy tờ và hồ sơ của chúng em.",
  "exList": [
   {
    "zh": "好的。这是我们的证件和材料。",
    "py": "Hǎo de. Zhè shì wǒmen de zhèngjiàn hé cáiliào.",
    "vn": "Vâng ạ. Đây là giấy tờ và hồ sơ của chúng em."
   },
   {
    "zh": "坐飞机的时候，一定要带好证件。",
    "py": "Zuò fēijī de shíhou, yídìng yào dài hǎo zhèngjiàn.",
    "vn": "Khi đi máy bay nhất định phải mang đủ giấy tờ."
   }
  ],
  "hanzi": [
   {
    "c": "证",
    "p": "zhèng",
    "type": "左右结构 · Trái-phải (giản thể)",
    "st": 7,
    "ord": "讠 (ngôn) trái → 正 (chính) phải",
    "rad": "讠 (ngôn – lời nói)",
    "mean": "chứng minh, xác nhận",
    "tip": "Bộ lời nói 讠 + 正 (đúng đắn) → LỜI NÓI ĐÚNG ĐẮN, xác nhận, kết hợp 保(giữ, đảm bảo) thành 保证 = CAM ĐOAN.",
    "cf": "征 (zhēng – \"chinh phạt/trưng thu\")",
    "w": "保证 / 证明 / 保护"
   },
   {
    "c": "件",
    "p": "jiàn",
    "type": "左右结构 · Trái-phải",
    "st": 6,
    "ord": "亻 (nhân) trái → 牛 (ngưu) phải",
    "rad": "亻 (nhân – người)",
    "mean": "kiện, việc",
    "tip": "Bộ người 亻 + 牛(trâu bò, vật để chia phần) → chỉ MỘT KIỆN/VIỆC riêng biệt, kết hợp 条(điều khoản) thành 条件 = ĐIỀU KIỆN.",
    "cf": "伴 (bàn – \"bạn đồng hành\", bộ 亻\")",
    "w": "条件 / 条款 / 无条件"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Đến Trung Quốc du học cần chuẩn bị những giấy tờ và hồ sơ gì?",
    "answer": "到中国留学，需要准备什么证件和材料？",
    "answerPy": "Dào Zhōngguó liúxué, xūyào zhǔnbèi shénme zhèngjiàn hé cáiliào?",
    "note": "Câu hỏi phần Khởi động của sách.",
    "pair": "需要准备……"
   },
   {
    "promptLang": "vi",
    "prompt": "Đừng quên mang giấy tờ, nếu không sẽ không vào được.",
    "answer": "别忘了带证件，不然进不去。",
    "answerPy": "Bié wàng le dài zhèngjiàn, bùrán jìn bú qù.",
    "note": "Ôn bổ ngữ khả năng 进不去 (HSK 3).",
    "pair": "V不去"
   }
  ]
 },
 {
  "n": 5,
  "zh": "材料",
  "py": "cáiliào",
  "pos": "Danh từ",
  "vn": "hồ sơ, tài liệu; vật liệu",
  "hv": "tài liệu",
  "em": "📄",
  "lesson": 1,
  "explain": [
   "Giấy tờ, tài liệu cần nộp khi làm thủ tục (hồ sơ).",
   "Cũng chỉ vật liệu để làm ra đồ vật."
  ],
  "usage": "准备材料 · 申请材料 · 交材料.",
  "collo": [
   "准备材料",
   "申请材料",
   "交材料",
   "学习材料"
  ],
  "colloFull": [
   {
    "zh": "准备材料",
    "py": "Zhǔnbèi cáiliào",
    "vn": "chuẩn bị hồ sơ"
   },
   {
    "zh": "申请材料",
    "py": "Shēnqǐng cáiliào",
    "vn": "hồ sơ xin (học bổng, nhập học)"
   },
   {
    "zh": "交材料",
    "py": "Jiāo cáiliào",
    "vn": "nộp hồ sơ"
   },
   {
    "zh": "学习材料",
    "py": "Xuéxí cáiliào",
    "vn": "tài liệu học tập"
   }
  ],
  "patterns": [
   {
    "s": "准备 / 交 + 材料",
    "m": "Chuẩn bị / nộp hồ sơ"
   },
   {
    "s": "申请 + 材料",
    "m": "Hồ sơ đăng ký"
   }
  ],
  "ex_zh": "好的。这是我们的证件和材料。",
  "ex_py": "Hǎo de. Zhè shì wǒmen de zhèngjiàn hé cáiliào.",
  "ex_vn": "Vâng ạ. Đây là giấy tờ và hồ sơ của chúng em.",
  "exList": [
   {
    "zh": "好的。这是我们的证件和材料。",
    "py": "Hǎo de. Zhè shì wǒmen de zhèngjiàn hé cáiliào.",
    "vn": "Vâng ạ. Đây là giấy tờ và hồ sơ của chúng em."
   },
   {
    "zh": "申请奖学金的材料，你准备好了吗？",
    "py": "Shēnqǐng jiǎngxuéjīn de cáiliào, nǐ zhǔnbèi hǎo le ma?",
    "vn": "Hồ sơ xin học bổng bạn chuẩn bị xong chưa?"
   }
  ],
  "hanzi": [
   {
    "c": "材",
    "p": "cái",
    "type": "形声字 · Chữ hình thanh",
    "st": 7,
    "ord": "木 → 才",
    "rad": "木 (mộc – cây gỗ)",
    "mean": "gỗ; vật liệu; tư chất",
    "tip": "Bộ 木 (gỗ) + 才 (cái, chỉ âm cái): gỗ là thứ “vật liệu” đầu tiên con người dùng.",
    "cf": "村 cūn (làng) — bên phải là 寸",
    "w": "材料 / 教材 / 身材"
   },
   {
    "c": "料",
    "p": "liào",
    "type": "左右结构 · Trái-phải",
    "st": 10,
    "ord": "米 (mễ) trái → 斗 (đấu) phải",
    "rad": "米 (mễ – gạo)",
    "mean": "nguyên liệu, tư liệu",
    "tip": "Bộ gạo 米 + 斗 (đong đo) → ĐONG ĐO NGUYÊN LIỆU, mở rộng thành TƯ LIỆU, TÀI LIỆU (nguyên liệu để tham khảo).",
    "cf": "科 (kē – \"môn học\", cũng có 米\" nhưng bộ 禾\")",
    "w": "材料 / 资料 / 原料"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Hồ sơ của em đã chuẩn bị xong chưa?",
    "answer": "你的材料准备好了吗？",
    "answerPy": "Nǐ de cáiliào zhǔnbèi hǎo le ma?",
    "note": "Bổ ngữ kết quả 好 = xong xuôi.",
    "pair": "V好了吗"
   },
   {
    "promptLang": "vi",
    "prompt": "Ngoài hộ chiếu ra, còn phải nộp những hồ sơ gì?",
    "answer": "除了护照以外，还要交什么材料？",
    "answerPy": "Chúle hùzhào yǐwài, hái yào jiāo shénme cáiliào?",
    "note": "Ôn 除了……以外，还…… (HSK 3).",
    "pair": "除了……以外，还……"
   }
  ]
 },
 {
  "n": 6,
  "zh": "证",
  "py": "zhèng",
  "pos": "Danh từ",
  "vn": "thẻ, giấy chứng nhận",
  "hv": "chứng",
  "em": "🎫",
  "lesson": 1,
  "explain": [
   "Thường đứng sau một từ khác để chỉ một loại thẻ / giấy: 学生证, 工作证, 驾驶证."
  ],
  "usage": "学生证 (thẻ sinh viên) · 工作证 (thẻ nhân viên).",
  "collo": [
   "学生证",
   "工作证",
   "办学生证",
   "带学生证"
  ],
  "colloFull": [
   {
    "zh": "学生证",
    "py": "Xuéshengzhèng",
    "vn": "thẻ sinh viên"
   },
   {
    "zh": "工作证",
    "py": "Gōngzuò zhèng",
    "vn": "thẻ nhân viên"
   },
   {
    "zh": "办学生证",
    "py": "Bàn xuéshengzhèng",
    "vn": "làm thẻ sinh viên"
   },
   {
    "zh": "带学生证",
    "py": "Dài xuéshengzhèng",
    "vn": "mang thẻ sinh viên"
   }
  ],
  "patterns": [
   {
    "s": "N + 证",
    "m": "Loại thẻ / giấy của ai, dùng vào việc gì"
   }
  ],
  "ex_zh": "办好了，这是你们的学生证。",
  "ex_py": "Bàn hǎo le, zhè shì nǐmen de xuéshengzhèng.",
  "ex_vn": "Làm xong rồi, đây là thẻ sinh viên của các em.",
  "exList": [
   {
    "zh": "办好了，这是你们的学生证。",
    "py": "Bàn hǎo le, zhè shì nǐmen de xuéshengzhèng.",
    "vn": "Làm xong rồi, đây là thẻ sinh viên của các em."
   },
   {
    "zh": "进图书馆要带学生证。",
    "py": "Jìn túshūguǎn yào dài xuéshengzhèng.",
    "vn": "Vào thư viện phải mang thẻ sinh viên."
   }
  ],
  "hanzi": [
   {
    "c": "证",
    "p": "zhèng",
    "type": "左右结构 · Trái-phải (giản thể)",
    "st": 7,
    "ord": "讠 (ngôn) trái → 正 (chính) phải",
    "rad": "讠 (ngôn – lời nói)",
    "mean": "chứng minh, xác nhận",
    "tip": "Bộ lời nói 讠 + 正 (đúng đắn) → LỜI NÓI ĐÚNG ĐẮN, xác nhận, kết hợp 保(giữ, đảm bảo) thành 保证 = CAM ĐOAN.",
    "cf": "征 (zhēng – \"chinh phạt/trưng thu\")",
    "w": "保证 / 证明 / 保护"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Thẻ sinh viên của tôi không thấy đâu nữa.",
    "answer": "我的学生证不见了。",
    "answerPy": "Wǒ de xuéshengzhèng bújiàn le.",
    "note": "Ôn 不见了 = biến mất, mất (HSK 3 Bài 1).",
    "pair": "不见了"
   },
   {
    "promptLang": "vi",
    "prompt": "Có thẻ sinh viên thì đi tàu điện ngầm có rẻ hơn không?",
    "answer": "有学生证的话，坐地铁会便宜一点儿吗？",
    "answerPy": "Yǒu xuéshengzhèng dehuà, zuò dìtiě huì piányi yìdiǎnr ma?",
    "note": "Ôn 的话 = nếu (HSK 3).",
    "pair": "……的话"
   }
  ]
 },
 {
  "n": 7,
  "zh": "任何",
  "py": "rènhé",
  "pos": "Đại từ",
  "vn": "bất kỳ, bất cứ",
  "hv": "nhậm hà",
  "em": "🔘",
  "lesson": 1,
  "explain": [
   "Đứng trước danh từ, nghĩa là “dù là cái nào / ai / gì cũng vậy”; phía sau thường có 都 / 也."
  ],
  "usage": "任何问题 / 任何人 / 任何时候 + 都 / 也 + V.",
  "collo": [
   "任何问题",
   "任何人",
   "任何时候",
   "任何地方"
  ],
  "colloFull": [
   {
    "zh": "任何问题",
    "py": "Rènhé wèntí",
    "vn": "bất kỳ vấn đề gì"
   },
   {
    "zh": "任何人",
    "py": "Rènhé rén",
    "vn": "bất kỳ ai"
   },
   {
    "zh": "任何时候",
    "py": "Rènhé shíhou",
    "vn": "bất cứ lúc nào"
   },
   {
    "zh": "任何地方",
    "py": "Rènhé dìfang",
    "vn": "bất kỳ nơi đâu"
   }
  ],
  "patterns": [
   {
    "s": "任何 + N + 都 / 也 + V",
    "m": "Bất kỳ … đều / cũng …"
   },
   {
    "s": "✗ 任何的问题 → ✓ 任何问题",
    "m": "Trước danh từ thường không thêm 的"
   }
  ],
  "ex_zh": "不客气，你们以后有任何问题都可以来找我。",
  "ex_py": "Búkèqì, nǐmen yǐhòu yǒu rènhé wèntí dōu kěyǐ lái zhǎo wǒ.",
  "ex_vn": "Không có gì, sau này các em có bất kỳ vấn đề gì đều có thể đến tìm cô.",
  "exList": [
   {
    "zh": "不客气，你们以后有任何问题都可以来找我。",
    "py": "Búkèqì, nǐmen yǐhòu yǒu rènhé wèntí dōu kěyǐ lái zhǎo wǒ.",
    "vn": "Không có gì, sau này các em có bất kỳ vấn đề gì đều có thể đến tìm cô."
   },
   {
    "zh": "明天我们8点出发，任何人也不能迟到。",
    "py": "Míngtiān wǒmen 8 diǎn chūfā, rènhé rén yě bù néng chídào.",
    "vn": "Mai chúng ta xuất phát lúc 8 giờ, bất kỳ ai cũng không được đến muộn."
   }
  ],
  "hanzi": [
   {
    "c": "任",
    "p": "rèn",
    "type": "左右结构 · Trái-phải",
    "st": 6,
    "ord": "亻 (nhân) trái → 壬 phải",
    "rad": "亻 (nhân)",
    "mean": "gánh vác",
    "tip": "Bộ người 亻 + 壬(gánh) → người GÁNH VÁC, kết hợp 务(việc) thành 任务 = NHIỆM VỤ.",
    "cf": "仁 (rén – \"nhân ái\")",
    "w": "任务 / 任何 / 责任"
   },
   {
    "c": "何",
    "p": "hé",
    "type": "形声字 · Chữ hình thanh",
    "st": 7,
    "ord": "亻 → 可",
    "rad": "亻 (nhân đứng – người)",
    "mean": "gì, nào (văn viết)",
    "tip": "Người (亻) + 可 (chỉ âm hé): người hỏi “gì vậy?” — trong 任何, 如何, 为何.",
    "cf": "河 hé (sông) — bên trái là 氵",
    "w": "任何 / 如何 / 为何"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Bất cứ lúc nào em cũng có thể gọi điện cho cô.",
    "answer": "任何时候你都可以给我打电话。",
    "answerPy": "Rènhé shíhou nǐ dōu kěyǐ gěi wǒ dǎdiànhuà.",
    "note": "任何 + N + 都 (Bài 1 · điểm 1).",
    "pair": "任何……都……"
   },
   {
    "promptLang": "vi",
    "prompt": "Anh ấy không nói với bất kỳ ai chuyện này.",
    "answer": "这件事他没有告诉任何人。",
    "answerPy": "Zhè jiàn shì tā méiyǒu gàosu rènhé rén.",
    "note": "Trong câu phủ định, 任何 có thể đứng sau động từ.",
    "pair": "没有……任何……"
   }
  ]
 },
 {
  "n": 8,
  "zh": "食堂",
  "py": "shítáng",
  "pos": "Danh từ",
  "vn": "nhà ăn, căng-tin",
  "hv": "thực đường",
  "em": "🍱",
  "lesson": 2,
  "explain": [
   "Nơi ăn uống tập thể trong trường học, cơ quan."
  ],
  "usage": "学校食堂 · 去食堂吃饭 · 好几个食堂.",
  "collo": [
   "学校食堂",
   "去食堂吃饭",
   "食堂的菜",
   "好几个食堂"
  ],
  "colloFull": [
   {
    "zh": "学校食堂",
    "py": "Xuéxiào shítáng",
    "vn": "nhà ăn của trường"
   },
   {
    "zh": "去食堂吃饭",
    "py": "Qù shítáng chīfàn",
    "vn": "đi nhà ăn ăn cơm"
   },
   {
    "zh": "食堂的菜",
    "py": "Shítáng de cài",
    "vn": "món ăn ở nhà ăn"
   },
   {
    "zh": "好几个食堂",
    "py": "Hǎo jǐ gè shítáng",
    "vn": "mấy nhà ăn"
   }
  ],
  "patterns": [
   {
    "s": "在 / 去 + 食堂 + 吃饭",
    "m": "Ăn ở nhà ăn"
   }
  ],
  "ex_zh": "有图书馆、体育馆、超市，还有好几个食堂。",
  "ex_py": "Yǒu túshūguǎn, tǐyùguǎn, chāoshì, hái yǒu hǎo jǐ gè shítáng.",
  "ex_vn": "Có thư viện, nhà thi đấu, siêu thị, lại còn có mấy nhà ăn.",
  "exList": [
   {
    "zh": "有图书馆、体育馆、超市，还有好几个食堂。",
    "py": "Yǒu túshūguǎn, tǐyùguǎn, chāoshì, hái yǒu hǎo jǐ gè shítáng.",
    "vn": "Có thư viện, nhà thi đấu, siêu thị, lại còn có mấy nhà ăn."
   },
   {
    "zh": "咱们晚上别去食堂吃饭了，我请你出去吃吧。",
    "py": "Zánmen wǎnshang bié qù shítáng chīfàn le, wǒ qǐng nǐ chūqù chī ba.",
    "vn": "Tối nay chúng mình đừng ăn ở nhà ăn nữa, tôi mời bạn ra ngoài ăn nhé."
   }
  ],
  "hanzi": [
   {
    "c": "食",
    "p": "shí",
    "type": "会意字 · Chữ hội ý",
    "st": 9,
    "ord": "人 → 良 (phẩy, mác, chấm… rồi 良)",
    "rad": "人 (nhân – người, ở trên) · bộ 食",
    "mean": "ăn; đồ ăn",
    "tip": "Hình nồi cơm có nắp đậy ở trên: thức ăn. Làm bộ bên trái thì viết 饣 (饭, 饿, 馆).",
    "cf": "良 liáng (tốt) — thiếu nắp 人 ở trên",
    "w": "食堂 / 食物 / 美食"
   },
   {
    "c": "堂",
    "p": "táng",
    "type": "形声字 · Chữ hình thanh",
    "st": 11,
    "ord": "⺌ → 冖 → 口 → 土",
    "rad": "土 (thổ – đất)",
    "mean": "gian nhà lớn, nhà chính",
    "tip": "Phần trên giống 尚 (chỉ âm), dưới là 土 (đất): ngôi nhà to xây trên nền đất — 食堂, 课堂.",
    "cf": "常 cháng (thường) — dưới là 巾; 掌 zhǎng (lòng bàn tay) — dưới là 手",
    "w": "食堂 / 课堂 / 讲堂"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Món ăn ở nhà ăn trường tôi vừa rẻ vừa ngon.",
    "answer": "我们学校食堂的菜又便宜又好吃。",
    "answerPy": "Wǒmen xuéxiào shítáng de cài yòu piányi yòu hǎochī.",
    "note": "Ôn 又……又…… (HSK 3).",
    "pair": "又……又……"
   },
   {
    "promptLang": "vi",
    "prompt": "Nếu bạn đói rồi thì chúng ta đi nhà ăn trước nhé.",
    "answer": "要是你饿了，我们就先去食堂吧。",
    "answerPy": "Yàoshi nǐ è le, wǒmen jiù xiān qù shítáng ba.",
    "note": "要是……就…… (Bài 1 · điểm 2).",
    "pair": "要是……就……"
   }
  ]
 },
 {
  "n": 9,
  "zh": "座",
  "py": "zuò",
  "pos": "Lượng từ",
  "vn": "tòa, ngọn (núi, nhà, thành phố, cầu…)",
  "hv": "tọa",
  "em": "🏔️",
  "lesson": 2,
  "explain": [
   "Lượng từ cho những vật to lớn, cố định một chỗ: núi, tòa nhà, cây cầu, thành phố."
  ],
  "usage": "一座城市 · 一座山 · 一座大楼 · 一座桥.",
  "collo": [
   "一座城市",
   "一座山",
   "一座大楼",
   "一座桥"
  ],
  "colloFull": [
   {
    "zh": "一座城市",
    "py": "Yí zuò chéngshì",
    "vn": "một thành phố"
   },
   {
    "zh": "一座山",
    "py": "Yí zuò shān",
    "vn": "một ngọn núi"
   },
   {
    "zh": "一座大楼",
    "py": "Yí zuò dà lóu",
    "vn": "một tòa nhà"
   },
   {
    "zh": "一座桥",
    "py": "Yí zuò qiáo",
    "vn": "một cây cầu"
   }
  ],
  "patterns": [
   {
    "s": "一 + 座 + 山 / 楼 / 桥 / 城市",
    "m": "Vật lớn, cố định"
   },
   {
    "s": "✗ 一个山 → ✓ 一座山",
    "m": "Không dùng 个 cho núi trong văn chuẩn"
   }
  ],
  "ex_zh": "是啊，我觉得学校就像一座小城市，什么都有，方便极了。",
  "ex_py": "Shì a, wǒ juéde xuéxiào jiù xiàng yí zuò xiǎo chéngshì, shénme dōu yǒu, fāngbiàn jí le.",
  "ex_vn": "Đúng vậy, tớ thấy trường giống như một thành phố nhỏ, cái gì cũng có, tiện vô cùng.",
  "exList": [
   {
    "zh": "是啊，我觉得学校就像一座小城市，什么都有，方便极了。",
    "py": "Shì a, wǒ juéde xuéxiào jiù xiàng yí zuò xiǎo chéngshì, shénme dōu yǒu, fāngbiàn jí le.",
    "vn": "Đúng vậy, tớ thấy trường giống như một thành phố nhỏ, cái gì cũng có, tiện vô cùng."
   },
   {
    "zh": "我家旁边有一座很高的大楼。",
    "py": "Wǒ jiā pángbiān yǒu yí zuò hěn gāo de dà lóu.",
    "vn": "Cạnh nhà tôi có một tòa nhà rất cao."
   }
  ],
  "hanzi": [
   {
    "c": "座",
    "p": "zuò",
    "type": "半包围结构 · Nửa bao quanh",
    "st": 10,
    "ord": "广 bao → 坐 trong",
    "rad": "广 (nghiễm)",
    "mean": "chỗ ngồi; tòa",
    "tip": "Mái 广 + 坐(ngồi) → CHỖ NGỒI (座位 Bài 3); lượng từ cho vật lớn cố định (一座山/桥/楼).",
    "cf": "坐 (zuò – ngồi, động từ)",
    "w": "一座 / 座位 / 讲座"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Bắc Kinh là một thành phố rất lớn.",
    "answer": "北京是一座很大的城市。",
    "answerPy": "Běijīng shì yí zuò hěn dà de chéngshì.",
    "note": "一座 + 城市.",
    "pair": "一座城市"
   },
   {
    "promptLang": "vi",
    "prompt": "Trên ngọn núi kia có một ngôi chùa cổ.",
    "answer": "那座山上有一座很老的寺庙。",
    "answerPy": "Nà zuò shān shàng yǒu yí zuò hěn lǎo de sìmiào.",
    "note": "Ôn câu tồn hiện 有 (HSK 3): nơi chốn + 有 + vật.",
    "pair": "nơi + 有 + vật"
   }
  ]
 },
 {
  "n": 10,
  "zh": "申请",
  "py": "shēnqǐng",
  "pos": "Động từ",
  "vn": "xin, nộp đơn xin, đăng ký",
  "hv": "thân thỉnh",
  "em": "📝",
  "lesson": 2,
  "explain": [
   "Chính thức đề nghị nhà trường / cơ quan cho mình một thứ gì: học bổng, visa, nhập học…"
  ],
  "usage": "申请奖学金 · 申请读硕士 · 申请到 (xin được).",
  "collo": [
   "申请奖学金",
   "申请签证",
   "申请到",
   "申请材料"
  ],
  "colloFull": [
   {
    "zh": "申请奖学金",
    "py": "Shēnqǐng jiǎngxuéjīn",
    "vn": "xin học bổng"
   },
   {
    "zh": "申请签证",
    "py": "Shēnqǐng qiānzhèng",
    "vn": "xin visa"
   },
   {
    "zh": "申请到",
    "py": "Shēnqǐng dào",
    "vn": "xin được"
   },
   {
    "zh": "申请材料",
    "py": "Shēnqǐng cáiliào",
    "vn": "hồ sơ xin"
   }
  ],
  "patterns": [
   {
    "s": "申请 + N / V",
    "m": "Xin cái gì / xin làm gì"
   },
   {
    "s": "申请到 + N",
    "m": "Xin được (có kết quả)"
   }
  ],
  "ex_zh": "刚才老师说，咱们可以申请奖学金，你了解过吗？",
  "ex_py": "Gāngcái lǎoshī shuō, zánmen kěyǐ shēnqǐng jiǎngxuéjīn, nǐ liǎojiě guò ma?",
  "ex_vn": "Lúc nãy thầy nói chúng mình có thể xin học bổng, cậu tìm hiểu chưa?",
  "exList": [
   {
    "zh": "刚才老师说，咱们可以申请奖学金，你了解过吗？",
    "py": "Gāngcái lǎoshī shuō, zánmen kěyǐ shēnqǐng jiǎngxuéjīn, nǐ liǎojiě guò ma?",
    "vn": "Lúc nãy thầy nói chúng mình có thể xin học bổng, cậu tìm hiểu chưa?"
   },
   {
    "zh": "她打算申请读硕士研究生。",
    "py": "Tā dǎsuàn shēnqǐng dú shuòshì yánjiūshēng.",
    "vn": "Cô ấy định nộp đơn học thạc sĩ."
   }
  ],
  "hanzi": [
   {
    "c": "申",
    "p": "shēn",
    "type": "独体字 · Chữ đơn",
    "st": 5,
    "ord": "日 → 丨 xuyên",
    "rad": "田 (điền)",
    "mean": "trình bày",
    "tip": "Chữ tượng hình tia chớp → mở rộng thành TRÌNH BÀY RÕ, kết hợp 请 thành 申请 = XIN (chính thức).",
    "cf": "甲 (jiǎ), 由 (yóu) — cùng dạng 田 + nét dọc",
    "w": "申请 / 申请书 / 申请人"
   },
   {
    "c": "请",
    "p": "qǐng",
    "type": "形声字 · Chữ hình thanh",
    "st": 10,
    "ord": "讠 → 青",
    "rad": "讠 (ngôn – lời nói)",
    "mean": "mời; xin",
    "tip": "讠 (lời nói) + 青 (chỉ âm): lời nói lịch sự → mời, xin. Ôn: 请问 (HSK1 Bài 2). 请客 = mời khách.",
    "cf": "清 qīng (清楚 – HSK3 Bài 10) — bên trái là 氵; 晴 qíng (HSK2 Bài 12) — bên trái là 日",
    "w": "请客 / 请问 / 请坐"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Nếu xin được học bổng thì có thể giảm được không ít áp lực kinh tế.",
    "answer": "要是申请到奖学金，就能减轻不少经济压力。",
    "answerPy": "Yàoshi shēnqǐng dào jiǎngxuéjīn, jiù néng jiǎnqīng bù shǎo jīngjì yālì.",
    "note": "Câu trong bài khoá 2; 申请到 = xin được.",
    "pair": "要是……就……"
   },
   {
    "promptLang": "vi",
    "prompt": "Anh ấy đang viết đơn xin nhập học.",
    "answer": "他正在写入学申请。",
    "answerPy": "Tā zhèngzài xiě rùxué shēnqǐng.",
    "note": "申请 cũng là danh từ (đơn xin) — đáp án gợi ý của sách.",
    "pair": "正在 + V"
   }
  ]
 },
 {
  "n": 11,
  "zh": "奖学金",
  "py": "jiǎngxuéjīn",
  "pos": "Danh từ",
  "vn": "học bổng",
  "hv": "tưởng học kim",
  "em": "🏅",
  "lesson": 2,
  "explain": [
   "Tiền thưởng nhà trường / tổ chức cấp cho người học giỏi, biểu hiện tốt."
  ],
  "usage": "申请奖学金 · 获得奖学金 · 全额奖学金.",
  "collo": [
   "申请奖学金",
   "获得奖学金",
   "拿奖学金",
   "政府奖学金"
  ],
  "colloFull": [
   {
    "zh": "申请奖学金",
    "py": "Shēnqǐng jiǎngxuéjīn",
    "vn": "xin học bổng"
   },
   {
    "zh": "获得奖学金",
    "py": "Huòdé jiǎngxuéjīn",
    "vn": "nhận được học bổng"
   },
   {
    "zh": "拿奖学金",
    "py": "Ná jiǎngxuéjīn",
    "vn": "lấy học bổng"
   },
   {
    "zh": "政府奖学金",
    "py": "Zhèngfǔ jiǎngxuéjīn",
    "vn": "học bổng chính phủ"
   }
  ],
  "patterns": [
   {
    "s": "申请 / 获得 / 拿到 + 奖学金",
    "m": "Xin / giành được học bổng"
   }
  ],
  "ex_zh": "我听说过一点儿，好像成绩好、表现好的学生都有机会获得奖学金。",
  "ex_py": "Wǒ tīngshuō guò yìdiǎnr, hǎoxiàng chéngjì hǎo, biǎoxiàn hǎo de xuésheng dōu yǒu jīhuì huòdé jiǎngxuéjīn.",
  "ex_vn": "Tớ có nghe nói một chút, hình như sinh viên học giỏi, biểu hiện tốt đều có cơ hội nhận học bổng.",
  "exList": [
   {
    "zh": "我听说过一点儿，好像成绩好、表现好的学生都有机会获得奖学金。",
    "py": "Wǒ tīngshuō guò yìdiǎnr, hǎoxiàng chéngjì hǎo, biǎoxiàn hǎo de xuésheng dōu yǒu jīhuì huòdé jiǎngxuéjīn.",
    "vn": "Tớ có nghe nói một chút, hình như sinh viên học giỏi, biểu hiện tốt đều có cơ hội nhận học bổng."
   },
   {
    "zh": "她获得了三年的奖学金，高兴极了。",
    "py": "Tā huòdé le sān nián de jiǎngxuéjīn, gāoxìng jí le.",
    "vn": "Cô ấy giành được học bổng ba năm, vui vô cùng."
   }
  ],
  "hanzi": [
   {
    "c": "奖",
    "p": "jiǎng",
    "type": "上下结构 · Trên-dưới (giản thể)",
    "st": 9,
    "ord": "将 trên → 大 dưới",
    "rad": "大 (đại)",
    "mean": "khen thưởng",
    "tip": "Chữ giản thể mang nghĩa KHEN THƯỞNG, kết hợp 金(tiền, vàng) thành 奖金 = TIỀN THƯỞNG.",
    "cf": "桨 (jiǎng – \"mái chèo\", bộ 木\")",
    "w": "奖金 / 奖励 / 得奖"
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
   },
   {
    "c": "金",
    "p": "jīn",
    "type": "象形字 · Chữ tượng hình",
    "st": 8,
    "ord": "人 → 王 → hai chấm",
    "rad": "金 (kim – kim loại)",
    "mean": "vàng; kim loại; tiền",
    "tip": "Mái nhà 人 che đống đất có hai hạt kim loại lấp lánh bên trong: vàng, tiền — 奖学金 = “tiền thưởng học tập”.",
    "cf": "全 quán (toàn) — không có hai chấm",
    "w": "奖学金 / 金色 / 现金"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Học sinh có thành tích tốt mới có cơ hội nhận học bổng.",
    "answer": "成绩好的学生才有机会获得奖学金。",
    "answerPy": "Chéngjì hǎo de xuésheng cái yǒu jīhuì huòdé jiǎngxuéjīn.",
    "note": "Ôn 才 nhấn mạnh điều kiện (HSK 3).",
    "pair": "……才……"
   },
   {
    "promptLang": "vi",
    "prompt": "Để giành được học bổng, mỗi ngày anh ấy đều học đến rất khuya.",
    "answer": "为了获得奖学金，他每天都学习到很晚。",
    "answerPy": "Wèile huòdé jiǎngxuéjīn, tā měi tiān dōu xuéxí dào hěn wǎn.",
    "note": "Ôn 为了 chỉ mục đích (HSK 3).",
    "pair": "为了……"
   }
  ]
 },
 {
  "n": 12,
  "zh": "表现",
  "py": "biǎoxiàn",
  "pos": "Động từ / Danh từ",
  "vn": "thể hiện, biểu hiện; sự thể hiện",
  "hv": "biểu hiện",
  "em": "🌟",
  "lesson": 2,
  "explain": [
   "Cách một người làm việc, học tập, cư xử để người khác nhìn thấy (tốt hay không tốt)."
  ],
  "usage": "表现好 · 表现得很好 · 他的表现.",
  "collo": [
   "表现好",
   "表现得很好",
   "他的表现",
   "工作表现"
  ],
  "colloFull": [
   {
    "zh": "表现好",
    "py": "Biǎoxiàn hǎo",
    "vn": "biểu hiện tốt"
   },
   {
    "zh": "表现得很好",
    "py": "Biǎoxiàn de hěn hǎo",
    "vn": "thể hiện rất tốt"
   },
   {
    "zh": "他的表现",
    "py": "Tā de biǎoxiàn",
    "vn": "sự thể hiện của anh ấy"
   },
   {
    "zh": "工作表现",
    "py": "Gōngzuò biǎoxiàn",
    "vn": "biểu hiện trong công việc"
   }
  ],
  "patterns": [
   {
    "s": "Sub + 表现得 + (很) + Adj",
    "m": "Bổ ngữ trạng thái với 得 (HSK 3)"
   },
   {
    "s": "Sub + 的表现 + 很 + Adj",
    "m": "表现 làm danh từ"
   }
  ],
  "ex_zh": "好像成绩好、表现好的学生都有机会获得奖学金。",
  "ex_py": "Hǎoxiàng chéngjì hǎo, biǎoxiàn hǎo de xuésheng dōu yǒu jīhuì huòdé jiǎngxuéjīn.",
  "ex_vn": "Hình như sinh viên học giỏi, biểu hiện tốt đều có cơ hội nhận học bổng.",
  "exList": [
   {
    "zh": "好像成绩好、表现好的学生都有机会获得奖学金。",
    "py": "Hǎoxiàng chéngjì hǎo, biǎoxiàn hǎo de xuésheng dōu yǒu jīhuì huòdé jiǎngxuéjīn.",
    "vn": "Hình như sinh viên học giỏi, biểu hiện tốt đều có cơ hội nhận học bổng."
   },
   {
    "zh": "这学期他在学校表现得很好。",
    "py": "Zhè xuéqī tā zài xuéxiào biǎoxiàn de hěn hǎo.",
    "vn": "Học kỳ này cậu ấy thể hiện rất tốt ở trường."
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
    "c": "现",
    "p": "xiàn",
    "type": "左右结构 · Trái-phải (giản thể)",
    "st": 8,
    "ord": "王 (biến thể ngọc) trái → 见 (kiến) phải",
    "rad": "王 (ngọc, biến thể)",
    "mean": "hiện tại, hiện có",
    "tip": "Bộ ngọc 王 (của quý, giá trị) + 见(nhìn thấy) → của cải NHÌN THẤY được ngay, mở rộng thành TIỀN MẶT (现金), HIỆN TẠI.",
    "cf": "现 dễ nhầm với 环 (huán – \"vòng\")",
    "w": "现金 / 现在 / 出现"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Biểu hiện của em trong kỳ thi lần này làm thầy rất hài lòng.",
    "answer": "你这次考试的表现让老师很满意。",
    "answerPy": "Nǐ zhè cì kǎoshì de biǎoxiàn ràng lǎoshī hěn mǎnyì.",
    "note": "Ôn câu kiêm ngữ 让 (HSK 3).",
    "pair": "让 + ai + Adj"
   },
   {
    "promptLang": "vi",
    "prompt": "Ở công ty cô ấy luôn thể hiện rất tốt.",
    "answer": "她在公司一直表现得很好。",
    "answerPy": "Tā zài gōngsī yìzhí biǎoxiàn de hěn hǎo.",
    "note": "表现得 + 很好: bổ ngữ trạng thái.",
    "pair": "V得 + Adj"
   }
  ]
 },
 {
  "n": 13,
  "zh": "获得",
  "py": "huòdé",
  "pos": "Động từ",
  "vn": "giành được, đạt được",
  "hv": "hoạch đắc",
  "em": "🎁",
  "lesson": 2,
  "explain": [
   "Có được thứ quý giá, thường là trừu tượng: học bổng, cơ hội, thành công, giải thưởng."
  ],
  "usage": "获得奖学金 · 获得机会 · 获得第一名.",
  "collo": [
   "获得奖学金",
   "获得机会",
   "获得第一名",
   "获得成功"
  ],
  "colloFull": [
   {
    "zh": "获得奖学金",
    "py": "Huòdé jiǎngxuéjīn",
    "vn": "nhận được học bổng"
   },
   {
    "zh": "获得机会",
    "py": "Huòdé jīhuì",
    "vn": "có được cơ hội"
   },
   {
    "zh": "获得第一名",
    "py": "Huòdé dì yī míng",
    "vn": "giành giải nhất"
   },
   {
    "zh": "获得成功",
    "py": "Huòdé chénggōng",
    "vn": "đạt được thành công"
   }
  ],
  "patterns": [
   {
    "s": "获得 + N (trừu tượng / trang trọng)",
    "m": "✗ 获得一本书 → ✓ 得到一本书 / 获得一等奖"
   }
  ],
  "ex_zh": "好像成绩好、表现好的学生都有机会获得奖学金。",
  "ex_py": "Hǎoxiàng chéngjì hǎo, biǎoxiàn hǎo de xuésheng dōu yǒu jīhuì huòdé jiǎngxuéjīn.",
  "ex_vn": "Hình như sinh viên học giỏi, biểu hiện tốt đều có cơ hội nhận học bổng.",
  "exList": [
   {
    "zh": "好像成绩好、表现好的学生都有机会获得奖学金。",
    "py": "Hǎoxiàng chéngjì hǎo, biǎoxiàn hǎo de xuésheng dōu yǒu jīhuì huòdé jiǎngxuéjīn.",
    "vn": "Hình như sinh viên học giỏi, biểu hiện tốt đều có cơ hội nhận học bổng."
   },
   {
    "zh": "她获得了三年的奖学金，高兴极了。",
    "py": "Tā huòdé le sān nián de jiǎngxuéjīn, gāoxìng jí le.",
    "vn": "Cô ấy giành được học bổng ba năm, vui vô cùng."
   }
  ],
  "hanzi": [
   {
    "c": "获",
    "p": "huò",
    "type": "左右结构 · Trái-phải (giản thể)",
    "st": 10,
    "ord": "艹 (thảo) trái → 犬(biến thể) phải",
    "rad": "艹 (thảo – cỏ)",
    "mean": "thu được, bắt được",
    "tip": "Chữ giản thể mô phỏng hành động BẮT ĐƯỢC/THU ĐƯỢC (như thợ săn bắt được con mồi trong cỏ), kết hợp 得(được) thành 获得 = ĐƯỢC, GIÀNH ĐƯỢC.",
    "cf": "护 (hù – \"bảo vệ\", bộ 扌\")",
    "w": "获得 / 获奖 / 收获"
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
    "prompt": "Anh ấy giành giải nhất trong cuộc thi nói tiếng Hán.",
    "answer": "他在汉语比赛中获得了第一名。",
    "answerPy": "Tā zài Hànyǔ bǐsài zhōng huòdé le dì yī míng.",
    "note": "在……中 + 获得.",
    "pair": "获得 + giải"
   },
   {
    "promptLang": "vi",
    "prompt": "Qua nỗ lực, cuối cùng cô ấy cũng có được cơ hội này.",
    "answer": "通过努力，她终于获得了这个机会。",
    "answerPy": "Tōngguò nǔlì, tā zhōngyú huòdé le zhège jīhuì.",
    "note": "通过 (Bài 1 · từ mới 28) + 终于 (HSK 3).",
    "pair": "通过……，终于……"
   }
  ]
 },
 {
  "n": 14,
  "zh": "要是",
  "py": "yàoshi",
  "pos": "Liên từ",
  "vn": "nếu, nếu như",
  "hv": "yếu thị",
  "em": "❓",
  "lesson": 2,
  "explain": [
   "Nêu một giả thiết; thường đi với 就 ở vế sau. Dùng nhiều trong khẩu ngữ (≈ 如果)."
  ],
  "usage": "要是……，就…… · 要是……的话.",
  "collo": [
   "要是……就……",
   "要是……的话",
   "要是有时间",
   "要是下雨"
  ],
  "colloFull": [
   {
    "zh": "要是……就……",
    "py": "Yàoshi…… jiù……",
    "vn": "nếu … thì …"
   },
   {
    "zh": "要是……的话",
    "py": "Yàoshi…… dehuà",
    "vn": "nếu như …"
   },
   {
    "zh": "要是有时间",
    "py": "Yàoshi yǒu shíjiān",
    "vn": "nếu có thời gian"
   },
   {
    "zh": "要是下雨",
    "py": "Yàoshi xiàyǔ",
    "vn": "nếu trời mưa"
   }
  ],
  "patterns": [
   {
    "s": "要是 + giả thiết，(Sub) + 就 + kết quả",
    "m": "Bài 1 · điểm ngữ pháp 2"
   },
   {
    "s": "要是 có thể đứng trước hoặc sau chủ ngữ",
    "m": "你要是…… / 要是你……"
   }
  ],
  "ex_zh": "那太好了，要是申请到奖学金，就能减轻不少经济压力。",
  "ex_py": "Nà tài hǎo le, yàoshi shēnqǐng dào jiǎngxuéjīn, jiù néng jiǎnqīng bù shǎo jīngjì yālì.",
  "ex_vn": "Thế thì tốt quá, nếu xin được học bổng thì có thể giảm được không ít áp lực kinh tế.",
  "exList": [
   {
    "zh": "那太好了，要是申请到奖学金，就能减轻不少经济压力。",
    "py": "Nà tài hǎo le, yàoshi shēnqǐng dào jiǎngxuéjīn, jiù néng jiǎnqīng bù shǎo jīngjì yālì.",
    "vn": "Thế thì tốt quá, nếu xin được học bổng thì có thể giảm được không ít áp lực kinh tế."
   },
   {
    "zh": "你要是明天有时间，就跟我一起去爬山吧。",
    "py": "Nǐ yàoshi míngtiān yǒu shíjiān, jiù gēn wǒ yìqǐ qù páshān ba.",
    "vn": "Nếu mai cậu rảnh thì đi leo núi với tớ nhé."
   }
  ],
  "hanzi": [
   {
    "c": "要",
    "p": "yào",
    "type": "上下结构 · Trên-dưới",
    "st": 9,
    "ord": "覀(biến thể) trên → 女 dưới",
    "rad": "覀 (biến thể của 西)",
    "mean": "muốn, cần, nếu",
    "tip": "要 vốn nghĩa MUỐN/CẦN, mượn dùng làm liên từ giả thiết khi kết hợp 是(là) thành 要是 = NẾU (là trường hợp này).",
    "cf": "腰 (yāo – \"thắt lưng\", bộ 月\")",
    "w": "要是 / 要不 / 主要"
   },
   {
    "c": "是",
    "p": "shi",
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
    "prompt": "Nếu buồn thì tôi sẽ đi tìm bạn bè chơi.",
    "answer": "我要是不开心，就会去找朋友玩。",
    "answerPy": "Wǒ yàoshi bù kāixīn, jiù huì qù zhǎo péngyou wán.",
    "note": "Đáp án gợi ý của sách (Bài 1 · điểm 2).",
    "pair": "要是……就……"
   },
   {
    "promptLang": "vi",
    "prompt": "Nếu không có sự giúp đỡ của bạn, tôi nhất định không làm tốt được việc này.",
    "answer": "要是没有你的帮助，我自己一定做不好这件事。",
    "answerPy": "Yàoshi méiyǒu nǐ de bāngzhù, wǒ zìjǐ yídìng zuò bù hǎo zhè jiàn shì.",
    "note": "Đáp án gợi ý của sách; ôn bổ ngữ khả năng 做不好.",
    "pair": "要是没有……"
   }
  ]
 },
 {
  "n": 15,
  "zh": "减轻",
  "py": "jiǎnqīng",
  "pos": "Động từ",
  "vn": "giảm nhẹ, giảm bớt",
  "hv": "giảm khinh",
  "em": "🪶",
  "lesson": 2,
  "explain": [
   "Làm cho gánh nặng, áp lực, bệnh tình… nhẹ đi."
  ],
  "usage": "减轻压力 · 减轻负担 · 减轻经济压力.",
  "collo": [
   "减轻压力",
   "减轻经济压力",
   "减轻负担",
   "减轻不少"
  ],
  "colloFull": [
   {
    "zh": "减轻压力",
    "py": "Jiǎnqīng yālì",
    "vn": "giảm áp lực"
   },
   {
    "zh": "减轻经济压力",
    "py": "Jiǎnqīng jīngjì yālì",
    "vn": "giảm áp lực kinh tế"
   },
   {
    "zh": "减轻负担",
    "py": "Jiǎnqīng fùdān",
    "vn": "giảm gánh nặng"
   },
   {
    "zh": "减轻不少",
    "py": "Jiǎnqīng bù shǎo",
    "vn": "giảm được không ít"
   }
  ],
  "patterns": [
   {
    "s": "减轻 + 压力 / 负担",
    "m": "Đi với danh từ chỉ gánh nặng"
   },
   {
    "s": "减轻 ≠ 减少",
    "m": "减少 dùng cho số lượng: 减少人数"
   }
  ],
  "ex_zh": "要是申请到奖学金，就能减轻不少经济压力。",
  "ex_py": "Yàoshi shēnqǐng dào jiǎngxuéjīn, jiù néng jiǎnqīng bù shǎo jīngjì yālì.",
  "ex_vn": "Nếu xin được học bổng thì có thể giảm được không ít áp lực kinh tế.",
  "exList": [
   {
    "zh": "要是申请到奖学金，就能减轻不少经济压力。",
    "py": "Yàoshi shēnqǐng dào jiǎngxuéjīn, jiù néng jiǎnqīng bù shǎo jīngjì yālì.",
    "vn": "Nếu xin được học bổng thì có thể giảm được không ít áp lực kinh tế."
   },
   {
    "zh": "多做运动一方面能让身体更健康，另一方面也能减轻压力。",
    "py": "Duō zuò yùndòng yìfāngmiàn néng ràng shēntǐ gèng jiànkāng, lìngyìfāngmiàn yě néng jiǎnqīng yālì.",
    "vn": "Tập thể dục nhiều một mặt giúp cơ thể khỏe hơn, mặt khác cũng giảm được áp lực."
   }
  ],
  "hanzi": [
   {
    "c": "减",
    "p": "jiǎn",
    "type": "左右结构 · Trái-phải",
    "st": 11,
    "ord": "冫 trái → 咸 phải",
    "rad": "冫 (băng)",
    "mean": "giảm",
    "tip": "Bộ băng 冫 (lạnh, co lại) + 咸 → GIẢM, BỚT. 减少 = giảm ít đi; 减肥 = giảm béo (Bài 7).",
    "cf": "感 (gǎn – cảm, bộ 心)",
    "w": "减少 / 减肥 / 减轻"
   },
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
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Nghe nhạc có thể giảm bớt áp lực học tập.",
    "answer": "听音乐可以减轻学习压力。",
    "answerPy": "Tīng yīnyuè kěyǐ jiǎnqīng xuéxí yālì.",
    "note": "减轻 + 压力.",
    "pair": "减轻压力"
   },
   {
    "promptLang": "vi",
    "prompt": "Bố mẹ đi làm thêm để giảm gánh nặng kinh tế cho gia đình.",
    "answer": "爸爸妈妈多做一些工作，为了减轻家里的经济压力。",
    "answerPy": "Bàba-māma duō zuò yìxiē gōngzuò, wèile jiǎnqīng jiā lǐ de jīngjì yālì.",
    "note": "Ôn 为了 (HSK 3).",
    "pair": "为了……"
   }
  ]
 },
 {
  "n": 16,
  "zh": "经济",
  "py": "jīngjì",
  "pos": "Danh từ",
  "vn": "kinh tế; tình hình tài chính",
  "hv": "kinh tế",
  "em": "💹",
  "lesson": 2,
  "explain": [
   "Nền kinh tế của một nước; cũng chỉ tình hình tiền bạc của một người, một gia đình."
  ],
  "usage": "经济压力 · 经济条件 · 国际经济专业.",
  "collo": [
   "经济压力",
   "经济发展",
   "国际经济",
   "经济条件"
  ],
  "colloFull": [
   {
    "zh": "经济压力",
    "py": "Jīngjì yālì",
    "vn": "áp lực kinh tế"
   },
   {
    "zh": "经济发展",
    "py": "Jīngjì fāzhǎn",
    "vn": "phát triển kinh tế"
   },
   {
    "zh": "国际经济",
    "py": "Guójì jīngjì",
    "vn": "kinh tế quốc tế"
   },
   {
    "zh": "经济条件",
    "py": "Jīngjì tiáojiàn",
    "vn": "điều kiện kinh tế"
   }
  ],
  "patterns": [
   {
    "s": "经济 + 压力 / 条件 / 发展",
    "m": "经济 làm định ngữ"
   },
   {
    "s": "跟经济有关的 + N",
    "m": "Liên quan đến kinh tế"
   }
  ],
  "ex_zh": "要是申请到奖学金，就能减轻不少经济压力。",
  "ex_py": "Yàoshi shēnqǐng dào jiǎngxuéjīn, jiù néng jiǎnqīng bù shǎo jīngjì yālì.",
  "ex_vn": "Nếu xin được học bổng thì có thể giảm được không ít áp lực kinh tế.",
  "exList": [
   {
    "zh": "要是申请到奖学金，就能减轻不少经济压力。",
    "py": "Yàoshi shēnqǐng dào jiǎngxuéjīn, jiù néng jiǎnqīng bù shǎo jīngjì yālì.",
    "vn": "Nếu xin được học bổng thì có thể giảm được không ít áp lực kinh tế."
   },
   {
    "zh": "陈天中想选择跟经济有关的专业。",
    "py": "Chén Tiānzhōng xiǎng xuǎnzé gēn jīngjì yǒuguān de zhuānyè.",
    "vn": "Trần Thiên Trung muốn chọn chuyên ngành liên quan đến kinh tế."
   }
  ],
  "hanzi": [
   {
    "c": "经",
    "p": "jīng",
    "type": "形声字 · Chữ hình thanh",
    "st": 8,
    "ord": "纟 → 又 → 工",
    "rad": "纟 (mịch – sợi tơ)",
    "mean": "sợi dọc; trải qua; quản lý",
    "tip": "纟 (sợi tơ) + phần chỉ âm: vốn là sợi dọc trên khung cửi → sắp xếp, trông coi. Ôn: 已经 (HSK2 Bài 1), 经常 (HSK2 Bài 11).",
    "cf": "轻 qīng — bên trái là 车",
    "w": "经理 / 已经 / 经常"
   },
   {
    "c": "济",
    "p": "jì",
    "type": "左右结构 · Trái-phải (giản thể)",
    "st": 9,
    "ord": "氵 (thủy) trái → 齐 (tề) phải",
    "rad": "氵 (thủy – nước)",
    "mean": "cứu giúp, điều tiết",
    "tip": "Bộ nước 氵 (như dòng chảy điều hòa) + 齐(đồng đều) → ĐIỀU TIẾT CÂN BẰNG, kết hợp 经(quản lý) thành 经济 = KINH TẾ.",
    "cf": "挤 (jǐ – \"chen chúc\", bộ 扌\")",
    "w": "经济 / 经济学 / 节济"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Cùng với sự phát triển kinh tế, đời sống của mọi người ngày càng tốt.",
    "answer": "随着经济的发展，人们的生活越来越好。",
    "answerPy": "Suízhe jīngjì de fāzhǎn, rén men de shēnghuó yuèláiyuè hǎo.",
    "note": "随着 (Bài 1 · điểm 3) + 越来越 (HSK 3).",
    "pair": "随着……，越来越……"
   },
   {
    "promptLang": "vi",
    "prompt": "Người có hứng thú với kinh tế hy vọng sau này làm việc ở công ty quốc tế.",
    "answer": "对经济感兴趣的人希望将来在国际公司工作。",
    "answerPy": "Duì jīngjì gǎnxìngqù de rén xīwàng jiānglái zài guójì gōngsī gōngzuò.",
    "note": "Câu trong bài khoá 4; ôn 对……感兴趣.",
    "pair": "对……感兴趣"
   }
  ]
 },
 {
  "n": 17,
  "zh": "压力",
  "py": "yālì",
  "pos": "Danh từ",
  "vn": "áp lực",
  "hv": "áp lực",
  "em": "😰",
  "lesson": 2,
  "explain": [
   "Cảm giác nặng nề vì công việc, học tập, tiền bạc…"
  ],
  "usage": "压力很大 · 有压力 · 减轻压力.",
  "collo": [
   "压力很大",
   "工作压力",
   "学习压力",
   "有压力"
  ],
  "colloFull": [
   {
    "zh": "压力很大",
    "py": "Yālì hěn dà",
    "vn": "áp lực rất lớn"
   },
   {
    "zh": "工作压力",
    "py": "Gōngzuò yālì",
    "vn": "áp lực công việc"
   },
   {
    "zh": "学习压力",
    "py": "Xuéxí yālì",
    "vn": "áp lực học tập"
   },
   {
    "zh": "有压力",
    "py": "Yǒu yālì",
    "vn": "có áp lực"
   }
  ],
  "patterns": [
   {
    "s": "压力 + 大 / 小",
    "m": "✗ 压力很多 → ✓ 压力很大"
   },
   {
    "s": "给 + ai + 压力",
    "m": "Gây áp lực cho ai"
   }
  ],
  "ex_zh": "要是申请到奖学金，就能减轻不少经济压力。",
  "ex_py": "Yàoshi shēnqǐng dào jiǎngxuéjīn, jiù néng jiǎnqīng bù shǎo jīngjì yālì.",
  "ex_vn": "Nếu xin được học bổng thì có thể giảm được không ít áp lực kinh tế.",
  "exList": [
   {
    "zh": "要是申请到奖学金，就能减轻不少经济压力。",
    "py": "Yàoshi shēnqǐng dào jiǎngxuéjīn, jiù néng jiǎnqīng bù shǎo jīngjì yālì.",
    "vn": "Nếu xin được học bổng thì có thể giảm được không ít áp lực kinh tế."
   },
   {
    "zh": "他最近工作压力很大。",
    "py": "Tā zuìjìn gōngzuò yālì hěn dà.",
    "vn": "Dạo này anh ấy áp lực công việc rất lớn."
   }
  ],
  "hanzi": [
   {
    "c": "压",
    "p": "yā",
    "type": "半包围结构 · Bán bao vây (giản thể)",
    "st": 6,
    "ord": "厂 bao ngoài → 土 trong",
    "rad": "厂 (xưởng, vách núi)",
    "mean": "đè, ép",
    "tip": "Bộ 厂(vách đá đè xuống) + 土(đất) → sức ĐÈ NÉN, kết hợp 力(sức lực) thành 压力 = ÁP LỰC.",
    "cf": "庄 (zhuāng – \"trang trại\", bộ 广\")",
    "w": "压力 / 压力大 / 血压"
   },
   {
    "c": "力",
    "p": "lì",
    "type": "独体字 · Chữ đơn",
    "st": 2,
    "ord": "𠃌 → 丿",
    "rad": "力 (lực)",
    "mean": "sức",
    "tip": "Chữ tượng hình cánh tay gồng SỨC → SỨC LỰC, kết hợp 气 thành 力气 = HƠI SỨC.",
    "cf": "刀 (dāo – \"dao\", tự dạng gần giống)",
    "w": "力气 / 努力 / 能力"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Dạo này anh ấy áp lực công việc rất lớn.",
    "answer": "他最近工作压力很大。",
    "answerPy": "Tā zuìjìn gōngzuò yālì hěn dà.",
    "note": "Đáp án gợi ý bài nhìn tranh đặt câu của sách.",
    "pair": "压力很大"
   },
   {
    "promptLang": "vi",
    "prompt": "Có lúc học lâu quá cũng sẽ thấy hơi áp lực.",
    "answer": "有时候学习的时间很长，也会觉得有一些压力。",
    "answerPy": "Yǒu shíhou xuéxí de shíjiān hěn cháng, yě huì juéde yǒu yìxiē yālì.",
    "note": "Câu trong bài tập hoàn thành đoạn văn của sách.",
    "pair": "会觉得……"
   }
  ]
 },
 {
  "n": 18,
  "zh": "加油",
  "py": "jiāyóu",
  "pos": "Động từ",
  "vn": "cố lên; cổ vũ, cố gắng",
  "hv": "gia du",
  "em": "💪",
  "lesson": 2,
  "explain": [
   "Gốc nghĩa “đổ thêm dầu”; dùng để động viên: cố lên! Cũng là cổ vũ cho người khác."
  ],
  "usage": "加油！· 一起加油 · 给 + ai + 加油.",
  "collo": [
   "一起加油",
   "给他加油",
   "加油干",
   "加加油"
  ],
  "colloFull": [
   {
    "zh": "一起加油",
    "py": "Yìqǐ jiāyóu",
    "vn": "cùng cố gắng"
   },
   {
    "zh": "给他加油",
    "py": "Gěi tā jiāyóu",
    "vn": "cổ vũ cho anh ấy"
   },
   {
    "zh": "加油干",
    "py": "Jiāyóu gān",
    "vn": "cố gắng làm"
   },
   {
    "zh": "加加油",
    "py": "Jiā jiāyóu",
    "vn": "cố thêm chút nữa"
   }
  ],
  "patterns": [
   {
    "s": "给 + ai + 加油",
    "m": "Cổ vũ ai"
   },
   {
    "s": "加油！",
    "m": "Câu động viên đứng một mình"
   }
  ],
  "ex_zh": "没错，我们一起加油吧！",
  "ex_py": "Méicuò, wǒmen yìqǐ jiāyóu ba!",
  "ex_vn": "Đúng vậy, chúng mình cùng cố lên nhé!",
  "exList": [
   {
    "zh": "没错，我们一起加油吧！",
    "py": "Méicuò, wǒmen yìqǐ jiāyóu ba!",
    "vn": "Đúng vậy, chúng mình cùng cố lên nhé!"
   },
   {
    "zh": "我们要去给参加比赛的同学加油，你去吗？",
    "py": "Wǒmen yào qù gěi cānjiā bǐsài de tóngxué jiāyóu, nǐ qù ma?",
    "vn": "Bọn mình đi cổ vũ các bạn thi đấu, cậu đi không?"
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
    "c": "油",
    "p": "yóu",
    "type": "左右结构 · Trái-phải",
    "st": 8,
    "ord": "氵 trái → 由 phải",
    "rad": "氵 (thủy)",
    "mean": "dầu",
    "tip": "Nước 氵 + 由 → chất lỏng → DẦU. 加油 = thêm dầu/cố lên; 油钱 (Bài 14); 邮 (Bài 18) cũng có 由.",
    "cf": "邮 (yóu – bưu)",
    "w": "加油站 / 加油 / 油"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Ngày mai bạn thi rồi, cố lên nhé!",
    "answer": "明天你就要考试了，加油！",
    "answerPy": "Míngtiān nǐ jiù yào kǎoshì le, jiāyóu!",
    "note": "Ôn 就要……了 = sắp (HSK 2/3).",
    "pair": "就要……了"
   },
   {
    "promptLang": "vi",
    "prompt": "Cả lớp đều đi cổ vũ cho anh ấy.",
    "answer": "全班同学都去给他加油了。",
    "answerPy": "Quán bān tóngxué dōu qù gěi tā jiāyóu le.",
    "note": "给 + ai + 加油.",
    "pair": "给……加油"
   }
  ]
 },
 {
  "n": 19,
  "zh": "随着",
  "py": "suízhe",
  "pos": "Giới từ",
  "vn": "cùng với, theo (sự thay đổi)",
  "hv": "tùy trước",
  "em": "📈",
  "lesson": 3,
  "explain": [
   "Đứng trước từ / câu chỉ sự thay đổi; nói việc này xảy ra là do có việc kia thay đổi."
  ],
  "usage": "随着 + N 的发展 / 提高 / 变化，……",
  "collo": [
   "随着……的发展",
   "随着……的提高",
   "随着时间",
   "随着天气变热"
  ],
  "colloFull": [
   {
    "zh": "随着……的发展",
    "py": "Suízhe…… de fāzhǎn",
    "vn": "cùng với sự phát triển của …"
   },
   {
    "zh": "随着……的提高",
    "py": "Suízhe…… de tígāo",
    "vn": "cùng với sự nâng cao của …"
   },
   {
    "zh": "随着时间",
    "py": "Suízhe shíjiān",
    "vn": "theo thời gian"
   },
   {
    "zh": "随着天气变热",
    "py": "Suízhe tiānqì biàn rè",
    "vn": "theo trời nóng lên"
   }
  ],
  "patterns": [
   {
    "s": "随着 + N + 的 + 发展 / 提高 / 变化，Sub + V",
    "m": "Bài 1 · điểm ngữ pháp 3"
   },
   {
    "s": "✗ 随着他来了 → ✓ 随着他的到来",
    "m": "Sau 随着 là cụm chỉ sự thay đổi"
   }
  ],
  "ex_zh": "随着中国的发展，越来越多的外国学生来到中国的大学学习。",
  "ex_py": "Suízhe Zhōngguó de fāzhǎn, yuèláiyuè duō de wàiguó xuésheng lái dào Zhōngguó de dàxué xuéxí.",
  "ex_vn": "Cùng với sự phát triển của Trung Quốc, ngày càng nhiều sinh viên nước ngoài đến các trường đại học Trung Quốc học tập.",
  "exList": [
   {
    "zh": "随着中国的发展，越来越多的外国学生来到中国的大学学习。",
    "py": "Suízhe Zhōngguó de fāzhǎn, yuèláiyuè duō de wàiguó xuésheng lái dào Zhōngguó de dàxué xuéxí.",
    "vn": "Cùng với sự phát triển của Trung Quốc, ngày càng nhiều sinh viên nước ngoài đến các trường đại học Trung Quốc học tập."
   },
   {
    "zh": "随着中文水平的提高，我现在能看懂中文报纸了。",
    "py": "Suízhe Zhōngwén shuǐpíng de tígāo, wǒ xiànzài néng kàn dǒng Zhōngwén bàozhǐ le.",
    "vn": "Cùng với trình độ tiếng Trung nâng cao, bây giờ tôi đã đọc hiểu được báo tiếng Trung."
   }
  ],
  "hanzi": [
   {
    "c": "随",
    "p": "suí",
    "type": "左右结构 · Trái-phải (giản thể)",
    "st": 11,
    "ord": "阝 trái → 有+辶 phải",
    "rad": "阝 (phụ – gò đất)",
    "mean": "theo",
    "tip": "Bộ 阝 + 辶(đi) → ĐI THEO, kết hợp 着 thành 随着 = CÙNG VỚI, THEO (ôn lại 随便 Bài 9).",
    "cf": "堕 (duò – \"rơi\", bộ 土)",
    "w": "随着 / 随便 / 随时"
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
    "prompt": "Cùng với mức sống nâng cao, mọi người ngày càng quan tâm đến sức khỏe.",
    "answer": "随着生活水平的提高，人们越来越关注身体健康。",
    "answerPy": "Suízhe shēnghuó shuǐpíng de tígāo, rén men yuèláiyuè guānzhù shēntǐ jiànkāng.",
    "note": "Đáp án gợi ý của sách (Bài 1 · điểm 3).",
    "pair": "随着……的提高"
   },
   {
    "promptLang": "vi",
    "prompt": "Theo thời tiết ngày càng nóng, mọi người đều đã thay quần áo mát mẻ.",
    "answer": "随着天气越来越热，人们都换上了凉快的衣服。",
    "answerPy": "Suízhe tiānqì yuèláiyuè rè, rén men dōu huàn shàng le liángkuai de yīfu.",
    "note": "Đáp án gợi ý của sách; ôn 越来越 (HSK 3).",
    "pair": "随着……越来越……"
   }
  ]
 },
 {
  "n": 20,
  "zh": "课程",
  "py": "kèchéng",
  "pos": "Danh từ",
  "vn": "khóa học, chương trình học, môn học",
  "hv": "khóa trình",
  "em": "📘",
  "lesson": 3,
  "explain": [
   "Các môn học, khóa học mà nhà trường sắp xếp."
  ],
  "usage": "中文课程 · 本科课程 · 选择课程 · 门 (lượng từ).",
  "collo": [
   "中文课程",
   "本科课程",
   "一门课程",
   "上课程"
  ],
  "colloFull": [
   {
    "zh": "中文课程",
    "py": "Zhōngwén kèchéng",
    "vn": "khóa tiếng Trung"
   },
   {
    "zh": "本科课程",
    "py": "Běnkē kèchéng",
    "vn": "chương trình đại học"
   },
   {
    "zh": "一门课程",
    "py": "Yì mén kèchéng",
    "vn": "một môn học"
   },
   {
    "zh": "上课程",
    "py": "Shàng kèchéng",
    "vn": "học khóa"
   }
  ],
  "patterns": [
   {
    "s": "一门 + 课程",
    "m": "Lượng từ 门 cho môn học"
   },
   {
    "s": "上 / 选 + 课程",
    "m": "Học / chọn môn"
   }
  ],
  "ex_zh": "他们可以先上一年的中文课程，然后根据自己的兴趣和需要选择专业。",
  "ex_py": "Tāmen kěyǐ xiān shàng yì nián de Zhōngwén kèchéng, ránhòu gēnjù zìjǐ de xìngqù hé xūyào xuǎnzé zhuānyè.",
  "ex_vn": "Họ có thể học trước một năm khóa tiếng Trung, rồi dựa vào sở thích và nhu cầu của mình để chọn chuyên ngành.",
  "exList": [
   {
    "zh": "他们可以先上一年的中文课程，然后根据自己的兴趣和需要选择专业。",
    "py": "Tāmen kěyǐ xiān shàng yì nián de Zhōngwén kèchéng, ránhòu gēnjù zìjǐ de xìngqù hé xūyào xuǎnzé zhuānyè.",
    "vn": "Họ có thể học trước một năm khóa tiếng Trung, rồi dựa vào sở thích và nhu cầu của mình để chọn chuyên ngành."
   },
   {
    "zh": "你为什么选择这门课程？",
    "py": "Nǐ wèishénme xuǎnzé zhè mén kèchéng?",
    "vn": "Vì sao bạn chọn môn học này?"
   }
  ],
  "hanzi": [
   {
    "c": "课",
    "p": "kè",
    "type": "左右结构 · Trái-phải",
    "st": 10,
    "ord": "讠(ngôn) trái → 果(quả) phải",
    "rad": "讠 (ngôn – lời nói, biến thể của 言)",
    "mean": "tiết học, bài học, môn học",
    "tip": "讠(lời nói, giảng dạy) + 果(quả, kết quả) → dùng LỜI NÓI giảng dạy để đạt được KẾT QUẢ học tập, đó là một TIẾT HỌC.",
    "cf": "果 (guǒ – \"quả, trái cây\", là thành phần bên phải của 课 nhưng đứng riêng có nghĩa khác)",
    "w": "上课 / 下课 / 课本"
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
    "prompt": "Vì sao bạn chọn môn học này? — Vì tôi muốn nghiên cứu nghiêm túc lịch sử và văn hóa Trung Quốc.",
    "answer": "你为什么选择这门课程？——因为我想认真研究中国的历史和文化。",
    "answerPy": "Nǐ wèishénme xuǎnzé zhè mén kèchéng? — Yīnwèi wǒ xiǎng rènzhēn yánjiū Zhōngguó de lìshǐ hé wénhuà.",
    "note": "Bài tập chọn từ của sách (câu 7).",
    "pair": "因为……"
   },
   {
    "promptLang": "vi",
    "prompt": "Ngoài các môn chuyên ngành ra, tôi còn học một khóa tiếng Trung.",
    "answer": "除了专业课程以外，我还上了一个中文课程。",
    "answerPy": "Chúle zhuānyè kèchéng yǐwài, wǒ hái shàng le yí gè Zhōngwén kèchéng.",
    "note": "Ôn 除了……以外，还…… (HSK 3).",
    "pair": "除了……还……"
   }
  ]
 },
 {
  "n": 21,
  "zh": "专业",
  "py": "zhuānyè",
  "pos": "Danh từ / Tính từ",
  "vn": "chuyên ngành; chuyên nghiệp",
  "hv": "chuyên nghiệp",
  "em": "🎓",
  "lesson": 3,
  "explain": [
   "Danh từ: ngành học ở đại học.",
   "Tính từ: có tay nghề, chuyên nghiệp."
  ],
  "usage": "选择专业 · 学什么专业 · 很专业.",
  "collo": [
   "选择专业",
   "专业知识",
   "专业书",
   "很专业"
  ],
  "colloFull": [
   {
    "zh": "选择专业",
    "py": "Xuǎnzé zhuānyè",
    "vn": "chọn chuyên ngành"
   },
   {
    "zh": "专业知识",
    "py": "Zhuānyè zhīshi",
    "vn": "kiến thức chuyên ngành"
   },
   {
    "zh": "专业书",
    "py": "Zhuānyè shū",
    "vn": "sách chuyên ngành"
   },
   {
    "zh": "很专业",
    "py": "Hěn zhuānyè",
    "vn": "rất chuyên nghiệp"
   }
  ],
  "patterns": [
   {
    "s": "学 + N + 专业",
    "m": "Học ngành …"
   },
   {
    "s": "专业 + 知识 / 课程 / 书",
    "m": "专业 làm định ngữ"
   }
  ],
  "ex_zh": "然后根据自己的兴趣和需要选择专业。",
  "ex_py": "Ránhòu gēnjù zìjǐ de xìngqù hé xūyào xuǎnzé zhuānyè.",
  "ex_vn": "Rồi dựa vào sở thích và nhu cầu của mình để chọn chuyên ngành.",
  "exList": [
   {
    "zh": "然后根据自己的兴趣和需要选择专业。",
    "py": "Ránhòu gēnjù zìjǐ de xìngqù hé xūyào xuǎnzé zhuānyè.",
    "vn": "Rồi dựa vào sở thích và nhu cầu của mình để chọn chuyên ngành."
   },
   {
    "zh": "你打算学习什么专业？为什么？",
    "py": "Nǐ dǎsuàn xuéxí shénme zhuānyè? Wèishénme?",
    "vn": "Bạn định học chuyên ngành gì? Vì sao?"
   }
  ],
  "hanzi": [
   {
    "c": "专",
    "p": "zhuān",
    "type": "独体字 · Chữ đơn (giản thể)",
    "st": 4,
    "ord": "nét liền",
    "rad": "一 (nhất)",
    "mean": "chuyên, riêng",
    "tip": "Chữ giản thể tượng hình một trục xe quay CHUYÊN VỀ một hướng → mở rộng thành CHUYÊN BIỆT, RIÊNG.",
    "cf": "专 dễ nhầm với 云 (yún – \"mây\")",
    "w": "专门 / 专业 / 专家"
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
    "prompt": "Tôi học chuyên ngành kinh tế quốc tế.",
    "answer": "我学的是国际经济专业。",
    "answerPy": "Wǒ xué de shì guójì jīngjì zhuānyè.",
    "note": "Câu trong bài tập của sách.",
    "pair": "学的是……专业"
   },
   {
    "promptLang": "vi",
    "prompt": "Annie chọn ngành giáo dục tiếng Trung quốc tế vì sau này muốn làm giáo viên tiếng Trung.",
    "answer": "安妮选择国际中文教育专业，是因为以后想当中文老师。",
    "answerPy": "Ānní xuǎnzé guójì Zhōngwén jiàoyù zhuānyè, shì yīnwèi yǐhòu xiǎng dāng Zhōngwén lǎoshī.",
    "note": "Ôn 是因为 (HSK 3).",
    "pair": "……，是因为……"
   }
  ]
 },
 {
  "n": 22,
  "zh": "本科",
  "py": "běnkē",
  "pos": "Danh từ",
  "vn": "hệ đại học (cử nhân)",
  "hv": "bản khoa",
  "em": "🏫",
  "lesson": 3,
  "explain": [
   "Bậc đại học chính quy (thường 4 năm), sau đó mới lên thạc sĩ, tiến sĩ."
  ],
  "usage": "读本科 · 本科课程 · 本科毕业.",
  "collo": [
   "读本科",
   "本科毕业",
   "本科生",
   "本科课程"
  ],
  "colloFull": [
   {
    "zh": "读本科",
    "py": "Dú běnkē",
    "vn": "học đại học"
   },
   {
    "zh": "本科毕业",
    "py": "Běnkē bìyè",
    "vn": "tốt nghiệp đại học"
   },
   {
    "zh": "本科生",
    "py": "Běnkē shēng",
    "vn": "sinh viên đại học"
   },
   {
    "zh": "本科课程",
    "py": "Běnkē kèchéng",
    "vn": "chương trình cử nhân"
   }
  ],
  "patterns": [
   {
    "s": "本科 → 硕士 → 博士",
    "m": "Thứ tự các bậc học"
   }
  ],
  "ex_zh": "除了读本科课程，他们还可以申请读硕士研究生或者博士研究生。",
  "ex_py": "Chúle dú běnkē kèchéng, tāmen hái kěyǐ shēnqǐng dú shuòshì yánjiūshēng huòzhě bóshì yánjiūshēng.",
  "ex_vn": "Ngoài học chương trình đại học, họ còn có thể đăng ký học thạc sĩ hoặc tiến sĩ.",
  "exList": [
   {
    "zh": "除了读本科课程，他们还可以申请读硕士研究生或者博士研究生。",
    "py": "Chúle dú běnkē kèchéng, tāmen hái kěyǐ shēnqǐng dú shuòshì yánjiūshēng huòzhě bóshì yánjiūshēng.",
    "vn": "Ngoài học chương trình đại học, họ còn có thể đăng ký học thạc sĩ hoặc tiến sĩ."
   },
   {
    "zh": "李雪还有一年就本科毕业了。",
    "py": "Lǐ Xuě hái yǒu yì nián jiù běnkē bìyè le.",
    "vn": "Lý Tuyết còn một năm nữa là tốt nghiệp đại học."
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
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Chị tôi học đại học ở Bắc Kinh, năm sau tốt nghiệp.",
    "answer": "我姐姐在北京读本科，明年就毕业了。",
    "answerPy": "Wǒ jiějie zài Běijīng dú běnkē, míngnián jiù bìyè le.",
    "note": "Ôn 就……了 (sắp).",
    "pair": "明年就……了"
   },
   {
    "promptLang": "vi",
    "prompt": "Sau khi tốt nghiệp đại học, anh ấy muốn học tiếp thạc sĩ.",
    "answer": "本科毕业以后，他想继续读硕士。",
    "answerPy": "Běnkē bìyè yǐhòu, tā xiǎng jìxù dú shuòshì.",
    "note": "继续 + V.",
    "pair": "……以后，想继续……"
   }
  ]
 },
 {
  "n": 23,
  "zh": "硕士",
  "py": "shuòshì",
  "pos": "Danh từ",
  "vn": "thạc sĩ",
  "hv": "thạc sĩ",
  "em": "🎓",
  "lesson": 3,
  "explain": [
   "Học vị sau đại học (sau cử nhân, trước tiến sĩ)."
  ],
  "usage": "读硕士 · 硕士研究生 · 考硕士.",
  "collo": [
   "读硕士",
   "硕士研究生",
   "硕士毕业",
   "考硕士"
  ],
  "colloFull": [
   {
    "zh": "读硕士",
    "py": "Dú shuòshì",
    "vn": "học thạc sĩ"
   },
   {
    "zh": "硕士研究生",
    "py": "Shuòshì yánjiūshēng",
    "vn": "học viên thạc sĩ"
   },
   {
    "zh": "硕士毕业",
    "py": "Shuòshì bìyè",
    "vn": "tốt nghiệp thạc sĩ"
   },
   {
    "zh": "考硕士",
    "py": "Kǎo shuòshì",
    "vn": "thi thạc sĩ"
   }
  ],
  "patterns": [
   {
    "s": "读 / 考 + 硕士",
    "m": "Học / thi thạc sĩ"
   }
  ],
  "ex_zh": "他们还可以申请读硕士研究生或者博士研究生。",
  "ex_py": "Tāmen hái kěyǐ shēnqǐng dú shuòshì yánjiūshēng huòzhě bóshì yánjiūshēng.",
  "ex_vn": "Họ còn có thể đăng ký học thạc sĩ hoặc tiến sĩ.",
  "exList": [
   {
    "zh": "他们还可以申请读硕士研究生或者博士研究生。",
    "py": "Tāmen hái kěyǐ shēnqǐng dú shuòshì yánjiūshēng huòzhě bóshì yánjiūshēng.",
    "vn": "Họ còn có thể đăng ký học thạc sĩ hoặc tiến sĩ."
   },
   {
    "zh": "她决定参加硕士研究生考试。",
    "py": "Tā juédìng cānjiā shuòshì yánjiūshēng kǎoshì.",
    "vn": "Cô ấy quyết định tham gia kỳ thi thạc sĩ."
   }
  ],
  "hanzi": [
   {
    "c": "硕",
    "p": "shuò",
    "type": "左右结构 · Trái-phải",
    "st": 11,
    "ord": "石 (thạch) trái → 页 (hiệt) phải",
    "rad": "石 (thạch – đá)",
    "mean": "to lớn",
    "tip": "Bộ đá 石 (vững chắc, to lớn) + 页(đầu, biểu âm) → mang nghĩa TO LỚN, kết hợp 士(học giả) thành 硕士 = THẠC SĨ (học vị lớn).",
    "cf": "碩 phồn thể giống hệt cấu trúc",
    "w": "硕士 / 硕大 / 博士"
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
    "prompt": "Cô ấy quyết định thi thạc sĩ để học tiếp ở trường mới.",
    "answer": "她决定参加硕士研究生考试，在新的学校里继续学习。",
    "answerPy": "Tā juédìng cānjiā shuòshì yánjiūshēng kǎoshì, zài xīn de xuéxiào lǐ jìxù xuéxí.",
    "note": "Bài tập hoàn thành đoạn văn của sách.",
    "pair": "决定……"
   },
   {
    "promptLang": "vi",
    "prompt": "Học thạc sĩ ở Trung Quốc cần mấy năm?",
    "answer": "在中国读硕士要几年？",
    "answerPy": "Zài Zhōngguó dú shuòshì yào jǐ nián?",
    "note": "Câu hỏi thực tế để luyện nói.",
    "pair": "要几年"
   }
  ]
 },
 {
  "n": 24,
  "zh": "研究生",
  "py": "yánjiūshēng",
  "pos": "Danh từ",
  "vn": "học viên sau đại học, nghiên cứu sinh",
  "hv": "nghiên cứu sinh",
  "em": "🧑‍🎓",
  "lesson": 3,
  "explain": [
   "Người học sau đại học (thạc sĩ hoặc tiến sĩ). Trong tiếng Việt “nghiên cứu sinh” thường chỉ người học tiến sĩ — cẩn thận!"
  ],
  "usage": "硕士研究生 · 博士研究生 · 考研究生.",
  "collo": [
   "硕士研究生",
   "博士研究生",
   "考研究生",
   "研究生考试"
  ],
  "colloFull": [
   {
    "zh": "硕士研究生",
    "py": "Shuòshì yánjiūshēng",
    "vn": "học viên cao học"
   },
   {
    "zh": "博士研究生",
    "py": "Bóshì yánjiūshēng",
    "vn": "nghiên cứu sinh tiến sĩ"
   },
   {
    "zh": "考研究生",
    "py": "Kǎo yánjiūshēng",
    "vn": "thi cao học"
   },
   {
    "zh": "研究生考试",
    "py": "Yánjiūshēng kǎoshì",
    "vn": "kỳ thi cao học"
   }
  ],
  "patterns": [
   {
    "s": "研究 + 生",
    "m": "Người làm nghiên cứu → học viên sau đại học"
   }
  ],
  "ex_zh": "他们还可以申请读硕士研究生或者博士研究生。",
  "ex_py": "Tāmen hái kěyǐ shēnqǐng dú shuòshì yánjiūshēng huòzhě bóshì yánjiūshēng.",
  "ex_vn": "Họ còn có thể đăng ký học thạc sĩ hoặc tiến sĩ.",
  "exList": [
   {
    "zh": "他们还可以申请读硕士研究生或者博士研究生。",
    "py": "Tāmen hái kěyǐ shēnqǐng dú shuòshì yánjiūshēng huòzhě bóshì yánjiūshēng.",
    "vn": "Họ còn có thể đăng ký học thạc sĩ hoặc tiến sĩ."
   },
   {
    "zh": "我打算考研究生，提高自己的专业水平。",
    "py": "Wǒ dǎsuàn kǎo yánjiūshēng, tígāo zìjǐ de zhuānyè shuǐpíng.",
    "vn": "Tôi định thi cao học để nâng cao trình độ chuyên môn của mình."
   }
  ],
  "hanzi": [
   {
    "c": "研",
    "p": "yán",
    "type": "形声字 · Chữ hình thanh",
    "st": 9,
    "ord": "石 → 开",
    "rad": "石 (thạch – đá)",
    "mean": "mài, nghiền; nghiên cứu",
    "tip": "Bộ 石 (đá) + 开 (chỉ âm): mài đá cho thật nhỏ — nghiên cứu là “mài” một vấn đề cho thật kỹ.",
    "cf": "砖 zhuān (gạch) — cũng bộ 石",
    "w": "研究 / 研究生 / 科研"
   },
   {
    "c": "究",
    "p": "jiū",
    "type": "上下结构 · Trên-dưới",
    "st": 7,
    "ord": "穴 trên → 九 dưới",
    "rad": "穴 (huyệt)",
    "mean": "tìm tòi",
    "tip": "Hang 穴 + 九 → đào sâu đến cùng → CỨU (nghiên cứu). 究竟 = xét đến cùng; 研究 (Bài 9).",
    "cf": "穷 (qióng – nghèo, Bài 10)",
    "w": "究竟 / 研究"
   },
   {
    "c": "生",
    "p": "shēng",
    "type": "独体字 · Chữ đơn thể",
    "st": 5,
    "ord": "丿 → 一 → 一 → 丨 → 一",
    "rad": "生 (sinh)",
    "mean": "sinh",
    "tip": "Hình cây mọc từ đất → SINH RA. 出生, 生日, 学生, 生活, 生命.",
    "cf": "牛 (niú – trâu bò)",
    "w": "出生 / 生日 / 生活 / 生命"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Tôi định thi cao học, nâng cao trình độ chuyên môn của mình.",
    "answer": "我打算考研究生，提高自己的专业水平。",
    "answerPy": "Wǒ dǎsuàn kǎo yánjiūshēng, tígāo zìjǐ de zhuānyè shuǐpíng.",
    "note": "Bài tập chọn từ của sách (câu 3).",
    "pair": "打算……"
   },
   {
    "promptLang": "vi",
    "prompt": "Anh trai tôi là nghiên cứu sinh tiến sĩ ở trường này.",
    "answer": "我哥哥是这个学校的博士研究生。",
    "answerPy": "Wǒ gēge shì zhège xuéxiào de bóshì yánjiūshēng.",
    "note": "博士研究生 = nghiên cứu sinh tiến sĩ.",
    "pair": "是……的……"
   }
  ]
 },
 {
  "n": 25,
  "zh": "博士",
  "py": "bóshì",
  "pos": "Danh từ",
  "vn": "tiến sĩ",
  "hv": "bác sĩ",
  "em": "👨‍🎓",
  "lesson": 3,
  "explain": [
   "Học vị cao nhất. Lưu ý: âm Hán Việt là “bác sĩ” nhưng nghĩa là TIẾN SĨ; bác sĩ chữa bệnh là 医生."
  ],
  "usage": "读博士 · 博士学位 · 博士研究生.",
  "collo": [
   "读博士",
   "博士学位",
   "医学博士",
   "博士毕业"
  ],
  "colloFull": [
   {
    "zh": "读博士",
    "py": "Dú bóshì",
    "vn": "học tiến sĩ"
   },
   {
    "zh": "博士学位",
    "py": "Bóshì xuéwèi",
    "vn": "học vị tiến sĩ"
   },
   {
    "zh": "医学博士",
    "py": "Yī xué bóshì",
    "vn": "tiến sĩ y khoa"
   },
   {
    "zh": "博士毕业",
    "py": "Bóshì bìyè",
    "vn": "tốt nghiệp tiến sĩ"
   }
  ],
  "patterns": [
   {
    "s": "本科 → 硕士 → 博士",
    "m": "Bậc học tăng dần"
   },
   {
    "s": "博士 ≠ 医生",
    "m": "Hán Việt “bác sĩ” dễ nhầm"
   }
  ],
  "ex_zh": "除了读本科课程，他们还可以申请读硕士研究生或者博士研究生。",
  "ex_py": "Chúle dú běnkē kèchéng, tāmen hái kěyǐ shēnqǐng dú shuòshì yánjiūshēng huòzhě bóshì yánjiūshēng.",
  "ex_vn": "Ngoài chương trình đại học, họ còn có thể đăng ký học thạc sĩ hoặc tiến sĩ.",
  "exList": [
   {
    "zh": "除了读本科课程，他们还可以申请读硕士研究生或者博士研究生。",
    "py": "Chúle dú běnkē kèchéng, tāmen hái kěyǐ shēnqǐng dú shuòshì yánjiūshēng huòzhě bóshì yánjiūshēng.",
    "vn": "Ngoài chương trình đại học, họ còn có thể đăng ký học thạc sĩ hoặc tiến sĩ."
   },
   {
    "zh": "李文回到北京继续深造，攻读医学博士学位。",
    "py": "Lǐ Wén huí dào Běijīng jìxù shēn zào, gōng dú yī xué bóshì xuéwèi.",
    "vn": "Lý Văn về Bắc Kinh học tiếp, theo học học vị tiến sĩ y khoa."
   }
  ],
  "hanzi": [
   {
    "c": "博",
    "p": "bó",
    "type": "左右结构 · Trái-phải",
    "st": 12,
    "ord": "十 trái → 尃 phải",
    "rad": "十 (thập)",
    "mean": "rộng",
    "tip": "十 (nhiều) + 尃 → kiến thức RỘNG → BÁC (uyên bác). 博士 = bác sĩ (học vị tiến sĩ), 博物馆 = bảo tàng.",
    "cf": "搏 (bó – vật lộn)",
    "w": "博士 / 博物馆"
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
    "prompt": "Lý Văn đang học tiến sĩ y khoa ở Bắc Kinh.",
    "answer": "李文正在北京读医学博士。",
    "answerPy": "Lǐ Wén zhèngzài Běijīng dú yī xué bóshì.",
    "note": "Theo phần giới thiệu nhân vật của sách.",
    "pair": "正在 + V"
   },
   {
    "promptLang": "vi",
    "prompt": "Anh ấy không phải bác sĩ chữa bệnh mà là tiến sĩ kinh tế.",
    "answer": "他不是医生，是经济学博士。",
    "answerPy": "Tā bú shì yīshēng, shì jīngjì xué bóshì.",
    "note": "Phân biệt 医生 / 博士.",
    "pair": "不是……是……"
   }
  ]
 },
 {
  "n": 26,
  "zh": "研究",
  "py": "yánjiū",
  "pos": "Động từ",
  "vn": "nghiên cứu; tìm hiểu kỹ",
  "hv": "nghiên cứu",
  "em": "🔬",
  "lesson": 3,
  "explain": [
   "Tìm hiểu một vấn đề một cách sâu, có phương pháp."
  ],
  "usage": "做研究 · 研究问题 · 研究中国文化.",
  "collo": [
   "做研究",
   "研究问题",
   "研究文化",
   "认真研究"
  ],
  "colloFull": [
   {
    "zh": "做研究",
    "py": "Zuò yánjiū",
    "vn": "làm nghiên cứu"
   },
   {
    "zh": "研究问题",
    "py": "Yánjiū wèntí",
    "vn": "nghiên cứu vấn đề"
   },
   {
    "zh": "研究文化",
    "py": "Yánjiū wénhuà",
    "vn": "nghiên cứu văn hóa"
   },
   {
    "zh": "认真研究",
    "py": "Rènzhēn yánjiū",
    "vn": "nghiên cứu kỹ"
   }
  ],
  "patterns": [
   {
    "s": "做 + 研究",
    "m": "研究 làm danh từ sau 做"
   },
   {
    "s": "研究 + N",
    "m": "Nghiên cứu cái gì"
   }
  ],
  "ex_zh": "在大学里，外国学生可以和中国学生一起学习、做研究、参加校园活动。",
  "ex_py": "Zài dàxué lǐ, wàiguó xuésheng kěyǐ hé Zhōngguó xuésheng yìqǐ xuéxí, zuò yánjiū, cānjiā xiàoyuán huódòng.",
  "ex_vn": "Ở đại học, sinh viên nước ngoài có thể cùng học, làm nghiên cứu, tham gia hoạt động trong trường với sinh viên Trung Quốc.",
  "exList": [
   {
    "zh": "在大学里，外国学生可以和中国学生一起学习、做研究、参加校园活动。",
    "py": "Zài dàxué lǐ, wàiguó xuésheng kěyǐ hé Zhōngguó xuésheng yìqǐ xuéxí, zuò yánjiū, cānjiā xiàoyuán huódòng.",
    "vn": "Ở đại học, sinh viên nước ngoài có thể cùng học, làm nghiên cứu, tham gia hoạt động trong trường với sinh viên Trung Quốc."
   },
   {
    "zh": "我想认真研究中国的历史和文化。",
    "py": "Wǒ xiǎng rènzhēn yánjiū Zhōngguó de lìshǐ hé wénhuà.",
    "vn": "Tôi muốn nghiên cứu nghiêm túc lịch sử và văn hóa Trung Quốc."
   }
  ],
  "hanzi": [
   {
    "c": "研",
    "p": "yán",
    "type": "形声字 · Chữ hình thanh",
    "st": 9,
    "ord": "石 → 开",
    "rad": "石 (thạch – đá)",
    "mean": "mài, nghiền; nghiên cứu",
    "tip": "Bộ 石 (đá) + 开 (chỉ âm): mài đá cho thật nhỏ — nghiên cứu là “mài” một vấn đề cho thật kỹ.",
    "cf": "砖 zhuān (gạch) — cũng bộ 石",
    "w": "研究 / 研究生 / 科研"
   },
   {
    "c": "究",
    "p": "jiū",
    "type": "上下结构 · Trên-dưới",
    "st": 7,
    "ord": "穴 trên → 九 dưới",
    "rad": "穴 (huyệt)",
    "mean": "tìm tòi",
    "tip": "Hang 穴 + 九 → đào sâu đến cùng → CỨU (nghiên cứu). 究竟 = xét đến cùng; 研究 (Bài 9).",
    "cf": "穷 (qióng – nghèo, Bài 10)",
    "w": "究竟 / 研究"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Tôi muốn nghiên cứu nghiêm túc lịch sử và văn hóa Trung Quốc.",
    "answer": "我想认真研究中国的历史和文化。",
    "answerPy": "Wǒ xiǎng rènzhēn yánjiū Zhōngguó de lìshǐ hé wénhuà.",
    "note": "Bài tập chọn từ của sách (câu 7).",
    "pair": "认真研究"
   },
   {
    "promptLang": "vi",
    "prompt": "Ngoài học ra, họ còn làm nghiên cứu cùng thầy.",
    "answer": "除了学习，他们还跟老师一起做研究。",
    "answerPy": "Chúle xuéxí, tāmen hái gēn lǎoshī yìqǐ zuò yánjiū.",
    "note": "Ôn 除了……还…… (HSK 3).",
    "pair": "除了……还……"
   }
  ]
 },
 {
  "n": 27,
  "zh": "活动",
  "py": "huódòng",
  "pos": "Danh từ / Động từ",
  "vn": "hoạt động; vận động",
  "hv": "hoạt động",
  "em": "🎉",
  "lesson": 3,
  "explain": [
   "Danh từ: sự kiện, chương trình có nhiều người tham gia.",
   "Động từ: đi lại, vận động cơ thể."
  ],
  "usage": "参加活动 · 校园活动 · 出去活动活动.",
  "collo": [
   "参加活动",
   "校园活动",
   "举办活动",
   "活动活动"
  ],
  "colloFull": [
   {
    "zh": "参加活动",
    "py": "Cānjiā huódòng",
    "vn": "tham gia hoạt động"
   },
   {
    "zh": "校园活动",
    "py": "Xiàoyuán huódòng",
    "vn": "hoạt động trong trường"
   },
   {
    "zh": "举办活动",
    "py": "Jǔbàn huódòng",
    "vn": "tổ chức hoạt động"
   },
   {
    "zh": "活动活动",
    "py": "Huódòng huódòng",
    "vn": "vận động một chút"
   }
  ],
  "patterns": [
   {
    "s": "参加 / 举办 + 活动",
    "m": "活动 là danh từ"
   },
   {
    "s": "V V (活动活动)",
    "m": "Lặp động từ hai âm tiết: làm thử một chút"
   }
  ],
  "ex_zh": "外国学生可以和中国学生一起学习、做研究、参加校园活动。",
  "ex_py": "Wàiguó xuésheng kěyǐ hé Zhōngguó xuésheng yìqǐ xuéxí, zuò yánjiū, cānjiā xiàoyuán huódòng.",
  "ex_vn": "Sinh viên nước ngoài có thể cùng sinh viên Trung Quốc học tập, nghiên cứu, tham gia hoạt động trong trường.",
  "exList": [
   {
    "zh": "外国学生可以和中国学生一起学习、做研究、参加校园活动。",
    "py": "Wàiguó xuésheng kěyǐ hé Zhōngguó xuésheng yìqǐ xuéxí, zuò yánjiū, cānjiā xiàoyuán huódòng.",
    "vn": "Sinh viên nước ngoài có thể cùng sinh viên Trung Quốc học tập, nghiên cứu, tham gia hoạt động trong trường."
   },
   {
    "zh": "今天下午公司有活动，我晚点儿回家。",
    "py": "Jīntiān xiàwǔ gōngsī yǒu huódòng, wǒ wǎndiǎnr huí jiā.",
    "vn": "Chiều nay công ty có hoạt động, tôi về nhà muộn một chút."
   }
  ],
  "hanzi": [
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
   },
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
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Chiều nay công ty có hoạt động, tôi về muộn một chút.",
    "answer": "今天下午公司有活动，我晚点儿回家。",
    "answerPy": "Jīntiān xiàwǔ gōngsī yǒu huódòng, wǒ wǎndiǎnr huí jiā.",
    "note": "Bài tập chọn từ của sách (câu 8).",
    "pair": "有活动"
   },
   {
    "promptLang": "vi",
    "prompt": "Ngồi lâu quá rồi, ra ngoài vận động một chút đi.",
    "answer": "坐了太长时间了，出去活动活动吧。",
    "answerPy": "Zuò le tài cháng shíjiān le, chūqù huódòng huódòng ba.",
    "note": "活动 làm động từ, lặp lại 活动活动.",
    "pair": "V V"
   }
  ]
 },
 {
  "n": 28,
  "zh": "通过",
  "py": "tōngguò",
  "pos": "Giới từ / Động từ",
  "vn": "thông qua, qua; vượt qua (kỳ thi)",
  "hv": "thông quá",
  "em": "✅",
  "lesson": 3,
  "explain": [
   "Giới từ: nhờ vào cách / việc gì mà đạt được kết quả.",
   "Động từ: đi qua; đạt (kỳ thi)."
  ],
  "usage": "通过 + việc，Sub + V · 通过考试.",
  "collo": [
   "通过学习",
   "通过交流",
   "通过考试",
   "通过努力"
  ],
  "colloFull": [
   {
    "zh": "通过学习",
    "py": "Tōngguò xuéxí",
    "vn": "thông qua học tập"
   },
   {
    "zh": "通过交流",
    "py": "Tōngguò jiāoliú",
    "vn": "thông qua giao lưu"
   },
   {
    "zh": "通过考试",
    "py": "Tōngguò kǎoshì",
    "vn": "đỗ kỳ thi"
   },
   {
    "zh": "通过努力",
    "py": "Tōngguò nǔlì",
    "vn": "nhờ nỗ lực"
   }
  ],
  "patterns": [
   {
    "s": "通过 + N/V，Sub + V",
    "m": "Giới từ: phương thức"
   },
   {
    "s": "通过 + 考试 / 面试",
    "m": "Động từ: vượt qua"
   }
  ],
  "ex_zh": "通过这些交流，外国学生能更快地适应中国的大学生活。",
  "ex_py": "Tōngguò zhèxiē jiāoliú, wàiguó xuésheng néng gèng kuài de shìyìng Zhōngguó de dàxué shēnghuó.",
  "ex_vn": "Thông qua những giao lưu này, sinh viên nước ngoài có thể thích nghi nhanh hơn với cuộc sống đại học ở Trung Quốc.",
  "exList": [
   {
    "zh": "通过这些交流，外国学生能更快地适应中国的大学生活。",
    "py": "Tōngguò zhèxiē jiāoliú, wàiguó xuésheng néng gèng kuài de shìyìng Zhōngguó de dàxué shēnghuó.",
    "vn": "Thông qua những giao lưu này, sinh viên nước ngoài có thể thích nghi nhanh hơn với cuộc sống đại học ở Trung Quốc."
   },
   {
    "zh": "他通过了HSK四级考试。",
    "py": "Tā tōngguò le HSK sì jí kǎoshì.",
    "vn": "Anh ấy đã đỗ kỳ thi HSK cấp 4."
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
    "prompt": "Thông qua học tập, tôi hiểu thêm nhiều kiến thức về thương mại quốc tế.",
    "answer": "通过学习，我了解了更多国际贸易方面的知识。",
    "answerPy": "Tōngguò xuéxí, wǒ liǎojiě le gèng duō guójì màoyì fāngmiàn de zhīshi.",
    "note": "Câu trong bài khoá 4.",
    "pair": "通过……，……"
   },
   {
    "promptLang": "vi",
    "prompt": "Nếu đỗ kỳ thi này thì tôi có thể học đại học ở Trung Quốc.",
    "answer": "要是通过这次考试，我就能在中国读本科了。",
    "answerPy": "Yàoshi tōngguò zhè cì kǎoshì, wǒ jiù néng zài Zhōngguó dú běnkē le.",
    "note": "要是……就…… (Bài 1 · điểm 2).",
    "pair": "要是……就……"
   }
  ]
 },
 {
  "n": 29,
  "zh": "交流",
  "py": "jiāoliú",
  "pos": "Động từ",
  "vn": "giao lưu, trao đổi",
  "hv": "giao lưu",
  "em": "🗣️",
  "lesson": 3,
  "explain": [
   "Trao đổi ý kiến, kinh nghiệm, văn hóa… với người khác."
  ],
  "usage": "跟 / 和 + ai + 交流 · 多交流 · 文化交流.",
  "collo": [
   "跟中国人交流",
   "多交流",
   "文化交流",
   "交流经验"
  ],
  "colloFull": [
   {
    "zh": "跟中国人交流",
    "py": "Gēn zhōngguórén jiāoliú",
    "vn": "giao lưu với người Trung Quốc"
   },
   {
    "zh": "多交流",
    "py": "Duō jiāoliú",
    "vn": "giao lưu nhiều"
   },
   {
    "zh": "文化交流",
    "py": "Wénhuà jiāoliú",
    "vn": "giao lưu văn hóa"
   },
   {
    "zh": "交流经验",
    "py": "Jiāoliú jīngyàn",
    "vn": "trao đổi kinh nghiệm"
   }
  ],
  "patterns": [
   {
    "s": "跟 / 和 + ai + 交流",
    "m": "✗ 交流他 → ✓ 跟他交流"
   }
  ],
  "ex_zh": "通过这些交流，外国学生能更快地适应中国的大学生活。",
  "ex_py": "Tōngguò zhèxiē jiāoliú, wàiguó xuésheng néng gèng kuài de shìyìng Zhōngguó de dàxué shēnghuó.",
  "ex_vn": "Thông qua những giao lưu này, sinh viên nước ngoài có thể thích nghi nhanh hơn với cuộc sống đại học ở Trung Quốc.",
  "exList": [
   {
    "zh": "通过这些交流，外国学生能更快地适应中国的大学生活。",
    "py": "Tōngguò zhèxiē jiāoliú, wàiguó xuésheng néng gèng kuài de shìyìng Zhōngguó de dàxué shēnghuó.",
    "vn": "Thông qua những giao lưu này, sinh viên nước ngoài có thể thích nghi nhanh hơn với cuộc sống đại học ở Trung Quốc."
   },
   {
    "zh": "要想学好中文，一方面要多读中文书，另一方面要多和中国人交流。",
    "py": "Yào xiǎng xué hǎo Zhōngwén, yìfāngmiàn yào duō dú Zhōngwén shū, lìngyìfāngmiàn yào duō hé zhōngguórén jiāoliú.",
    "vn": "Muốn học giỏi tiếng Trung, một mặt phải đọc nhiều sách tiếng Trung, mặt khác phải giao lưu nhiều với người Trung Quốc."
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
    "c": "流",
    "p": "liú",
    "type": "左右结构 · Trái-phải",
    "st": 10,
    "ord": "氵 (thủy) trái → 㐬 phải",
    "rad": "氵 (thủy – nước)",
    "mean": "chảy, trôi chảy",
    "tip": "Bộ nước 氵 (dòng nước chảy liên tục) → mở rộng nghĩa TRÔI CHẢY, kết hợp 利(lợi, thuận lợi) thành 流利 = LƯU LOÁT (nói trôi chảy như nước chảy).",
    "cf": "留 (liú – \"ở lại\", bộ 田\")",
    "w": "流利 / 流水 / 交流"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Muốn thích nghi nhanh hơn thì nên giao lưu nhiều với sinh viên Trung Quốc.",
    "answer": "要想更快地适应，就应该多跟中国学生交流。",
    "answerPy": "Yào xiǎng gèng kuài de shìyìng, jiù yīnggāi duō gēn Zhōngguó xuésheng jiāoliú.",
    "note": "跟 + ai + 交流.",
    "pair": "跟……交流"
   },
   {
    "promptLang": "vi",
    "prompt": "Cùng với số người đến Trung Quốc du học ngày càng nhiều, giao lưu giữa sinh viên Trung Quốc và nước ngoài cũng ngày càng nhiều.",
    "answer": "随着来中国留学的人越来越多，中国学生和外国学生的交流也越来越多。",
    "answerPy": "Suízhe lái Zhōngguó liúxué de rén yuèláiyuè duō, Zhōngguó xuésheng hé wàiguó xuésheng de jiāoliú yě yuèláiyuè duō.",
    "note": "Đáp án gợi ý của sách (Bài 1 · điểm 3).",
    "pair": "随着……，越来越……"
   }
  ]
 },
 {
  "n": 30,
  "zh": "适应",
  "py": "shìyìng",
  "pos": "Động từ",
  "vn": "thích nghi, thích ứng",
  "hv": "thích ứng",
  "em": "🔄",
  "lesson": 3,
  "explain": [
   "Dần quen với môi trường, cuộc sống, công việc mới."
  ],
  "usage": "适应生活 · 适应环境 · 不适应.",
  "collo": [
   "适应生活",
   "适应环境",
   "慢慢适应",
   "不适应"
  ],
  "colloFull": [
   {
    "zh": "适应生活",
    "py": "Shìyìng shēnghuó",
    "vn": "thích nghi cuộc sống"
   },
   {
    "zh": "适应环境",
    "py": "Shìyìng huánjìng",
    "vn": "thích nghi môi trường"
   },
   {
    "zh": "慢慢适应",
    "py": "Màn màn shìyìng",
    "vn": "dần dần thích nghi"
   },
   {
    "zh": "不适应",
    "py": "Bú shìyìng",
    "vn": "không quen"
   }
  ],
  "patterns": [
   {
    "s": "适应 + N (môi trường, cuộc sống, công việc)",
    "m": "✗ 适应在这里 → ✓ 适应这里的生活"
   }
  ],
  "ex_zh": "通过这些交流，外国学生能更快地适应中国的大学生活。",
  "ex_py": "Tōngguò zhèxiē jiāoliú, wàiguó xuésheng néng gèng kuài de shìyìng Zhōngguó de dàxué shēnghuó.",
  "ex_vn": "Thông qua những giao lưu này, sinh viên nước ngoài có thể thích nghi nhanh hơn với cuộc sống đại học ở Trung Quốc.",
  "exList": [
   {
    "zh": "通过这些交流，外国学生能更快地适应中国的大学生活。",
    "py": "Tōngguò zhèxiē jiāoliú, wàiguó xuésheng néng gèng kuài de shìyìng Zhōngguó de dàxué shēnghuó.",
    "vn": "Thông qua những giao lưu này, sinh viên nước ngoài có thể thích nghi nhanh hơn với cuộc sống đại học ở Trung Quốc."
   },
   {
    "zh": "刚来北京的时候，我很不适应这里的天气。",
    "py": "Gāng lái Běijīng de shíhou, wǒ hěn bú shìyìng zhèli de tiānqì.",
    "vn": "Lúc mới đến Bắc Kinh, tôi rất không quen thời tiết ở đây."
   }
  ],
  "hanzi": [
   {
    "c": "适",
    "p": "shì",
    "type": "半包围结构 · Bán bao vây (giản thể)",
    "st": 9,
    "ord": "辶 bao ngoài → 舌 trong",
    "rad": "辶 (sước – đi, chạy)",
    "mean": "vừa, hợp",
    "tip": "Bộ 辶 (đi tới) + 舌 (biểu âm) → ĐI ĐẾN ĐÚNG chỗ, mở rộng thành VỪA VẶN, PHÙ HỢP.",
    "cf": "话 (huà – \"lời nói\", cũng có 舌\")",
    "w": "适合 / 适应 / 合适"
   },
   {
    "c": "应",
    "p": "yìng",
    "type": "半包围结构 · Bán bao vây (giản thể)",
    "st": 7,
    "ord": "广 bao ngoài → 应 trong",
    "rad": "广 (nghiễm)",
    "mean": "đáp lại, ứng",
    "tip": "Chữ giản thể mang nghĩa ĐÁP LẠI lời mời gọi → 应聘 = ĐÁP LẠI lời MỜI TUYỂN, tức đi XIN VIỆC.",
    "cf": "应 khi đọc \"yīng\" nghĩa là \"nên\" (应该)",
    "w": "应聘 / 应该 / 答应"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Sinh viên nước ngoài làm thế nào để thích nghi nhanh hơn với đời sống đại học Trung Quốc?",
    "answer": "外国学生怎么能更快地适应中国的大学生活？",
    "answerPy": "Wàiguó xuésheng zěnme néng gèng kuài de shìyìng Zhōngguó de dàxué shēnghuó?",
    "note": "Câu hỏi nghe hiểu bài khoá 3.",
    "pair": "怎么能更快地……"
   },
   {
    "promptLang": "vi",
    "prompt": "Một tháng sau, tôi đã dần thích nghi với cuộc sống ở đây.",
    "answer": "一个月以后，我已经慢慢适应了这里的生活。",
    "answerPy": "Yí gè yuè yǐhòu, wǒ yǐjīng màn màn shìyìng le zhèli de shēnghuó.",
    "note": "Ôn 已经……了 (HSK 2/3).",
    "pair": "已经……了"
   }
  ]
 },
 {
  "n": 31,
  "zh": "将来",
  "py": "jiānglái",
  "pos": "Danh từ",
  "vn": "tương lai, sau này",
  "hv": "tương lai",
  "em": "🔮",
  "lesson": 4,
  "explain": [
   "Thời gian sau này (xa hơn bây giờ)."
  ],
  "usage": "将来 + Sub + V · 为将来做准备.",
  "collo": [
   "将来的工作",
   "为将来做准备",
   "将来想当",
   "在将来"
  ],
  "colloFull": [
   {
    "zh": "将来的工作",
    "py": "Jiānglái de gōngzuò",
    "vn": "công việc sau này"
   },
   {
    "zh": "为将来做准备",
    "py": "Wèi jiānglái zuò zhǔnbèi",
    "vn": "chuẩn bị cho tương lai"
   },
   {
    "zh": "将来想当",
    "py": "Jiānglái xiǎng dāng",
    "vn": "sau này muốn làm"
   },
   {
    "zh": "在将来",
    "py": "Zài jiānglái",
    "vn": "trong tương lai"
   }
  ],
  "patterns": [
   {
    "s": "将来 + V / Sub 将来 + V",
    "m": "Đứng đầu câu hoặc sau chủ ngữ"
   },
   {
    "s": "为 + 将来 + 做准备",
    "m": "Chuẩn bị cho tương lai"
   }
  ],
  "ex_zh": "有人对经济感兴趣，希望将来在国际公司工作。",
  "ex_py": "Yǒurén duì jīngjì gǎnxìngqù, xīwàng jiānglái zài guójì gōngsī gōngzuò.",
  "ex_vn": "Có người hứng thú với kinh tế, hy vọng sau này làm việc ở công ty quốc tế.",
  "exList": [
   {
    "zh": "有人对经济感兴趣，希望将来在国际公司工作。",
    "py": "Yǒurén duì jīngjì gǎnxìngqù, xīwàng jiānglái zài guójì gōngsī gōngzuò.",
    "vn": "Có người hứng thú với kinh tế, hy vọng sau này làm việc ở công ty quốc tế."
   },
   {
    "zh": "你将来想做什么工作？",
    "py": "Nǐ jiānglái xiǎng zuò shénme gōngzuò?",
    "vn": "Sau này bạn muốn làm công việc gì?"
   }
  ],
  "hanzi": [
   {
    "c": "将",
    "p": "jiāng",
    "type": "左右结构 · Trái-phải (giản thể)",
    "st": 9,
    "ord": "丬 trái → 夕+寸 phải",
    "rad": "丬 (biến thể của 爿)",
    "mean": "sắp, sẽ",
    "tip": "Chữ giản thể mang nghĩa SẮP, SẼ (thời tương lai gần), kết hợp 来(đến) thành 将来 = TƯƠNG LAI (thời gian sắp đến).",
    "cf": "奖 (jiǎng – \"phần thưởng\", tự dạng khác)",
    "w": "将来 / 将要 / 未来"
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
    "prompt": "Sau này bạn muốn làm công việc gì? — Tôi muốn làm ở công ty quốc tế, có nhiều cơ hội phát triển hơn.",
    "answer": "你将来想做什么工作？——我想在国际公司工作，有更多的发展机会。",
    "answerPy": "Nǐ jiānglái xiǎng zuò shénme gōngzuò? — Wǒ xiǎng zài guójì gōngsī gōngzuò, yǒu gèng duō de fāzhǎn jīhuì.",
    "note": "Bài tập chọn từ của sách (câu 6).",
    "pair": "将来想……"
   },
   {
    "promptLang": "vi",
    "prompt": "Học tiếng Trung là để chuẩn bị cho công việc sau này.",
    "answer": "学中文是为将来的工作做准备。",
    "answerPy": "Xué Zhōngwén shì wèi jiānglái de gōngzuò zuò zhǔnbèi.",
    "note": "为……做准备 — câu trong bài khoá 4.",
    "pair": "为……做准备"
   }
  ]
 },
 {
  "n": 32,
  "zh": "国际",
  "py": "guójì",
  "pos": "Tính từ / Danh từ",
  "vn": "quốc tế",
  "hv": "quốc tế",
  "em": "🌐",
  "lesson": 4,
  "explain": [
   "Liên quan đến nhiều nước, giữa các nước."
  ],
  "usage": "国际公司 · 国际贸易 · 国际中文教育.",
  "collo": [
   "国际公司",
   "国际贸易",
   "国际学生",
   "国际中文教育"
  ],
  "colloFull": [
   {
    "zh": "国际公司",
    "py": "Guójì gōngsī",
    "vn": "công ty quốc tế"
   },
   {
    "zh": "国际贸易",
    "py": "Guójì màoyì",
    "vn": "thương mại quốc tế"
   },
   {
    "zh": "国际学生",
    "py": "Guójì xuésheng",
    "vn": "sinh viên quốc tế"
   },
   {
    "zh": "国际中文教育",
    "py": "Guójì Zhōngwén jiàoyù",
    "vn": "giáo dục tiếng Trung quốc tế"
   }
  ],
  "patterns": [
   {
    "s": "国际 + N",
    "m": "Thường làm định ngữ, không thêm 的"
   },
   {
    "s": "✗ 很国际 → ✓ 国际公司",
    "m": "Không đi với 很"
   }
  ],
  "ex_zh": "有人对经济感兴趣，希望将来在国际公司工作。",
  "ex_py": "Yǒurén duì jīngjì gǎnxìngqù, xīwàng jiānglái zài guójì gōngsī gōngzuò.",
  "ex_vn": "Có người hứng thú với kinh tế, hy vọng sau này làm việc ở công ty quốc tế.",
  "exList": [
   {
    "zh": "有人对经济感兴趣，希望将来在国际公司工作。",
    "py": "Yǒurén duì jīngjì gǎnxìngqù, xīwàng jiānglái zài guójì gōngsī gōngzuò.",
    "vn": "Có người hứng thú với kinh tế, hy vọng sau này làm việc ở công ty quốc tế."
   },
   {
    "zh": "安妮要选择国际中文教育专业。",
    "py": "Ānní yào xuǎnzé guójì Zhōngwén jiàoyù zhuānyè.",
    "vn": "Annie định chọn chuyên ngành giáo dục tiếng Trung quốc tế."
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
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Tôi muốn làm việc ở công ty quốc tế vì có nhiều cơ hội phát triển hơn.",
    "answer": "我想在国际公司工作，因为有更多的发展机会。",
    "answerPy": "Wǒ xiǎng zài guójì gōngsī gōngzuò, yīnwèi yǒu gèng duō de fāzhǎn jīhuì.",
    "note": "Bài tập chọn từ của sách.",
    "pair": "因为……"
   },
   {
    "promptLang": "vi",
    "prompt": "Ở trường tôi có rất nhiều sinh viên quốc tế.",
    "answer": "我们学校有很多国际学生。",
    "answerPy": "Wǒmen xuéxiào yǒu hěn duō guójì xuésheng.",
    "note": "国际 + 学生.",
    "pair": "国际 + N"
   }
  ]
 },
 {
  "n": 33,
  "zh": "当",
  "py": "dāng",
  "pos": "Động từ",
  "vn": "làm, đảm nhiệm (nghề, chức vụ)",
  "hv": "đương",
  "em": "👩‍⚕️",
  "lesson": 4,
  "explain": [
   "Làm một nghề / giữ một vai trò: 当医生, 当老师, 当班长. (Khác 当 giới từ “khi” trong 当……的时候.)"
  ],
  "usage": "当 + nghề nghiệp · 想当 · 当一名……",
  "collo": [
   "当医生",
   "当老师",
   "当一名……",
   "想当"
  ],
  "colloFull": [
   {
    "zh": "当医生",
    "py": "Dāng yīshēng",
    "vn": "làm bác sĩ"
   },
   {
    "zh": "当老师",
    "py": "Dāng lǎoshī",
    "vn": "làm giáo viên"
   },
   {
    "zh": "当一名……",
    "py": "Dāng yì míng……",
    "vn": "làm một …"
   },
   {
    "zh": "想当",
    "py": "Xiǎng dāng",
    "vn": "muốn làm"
   }
  ],
  "patterns": [
   {
    "s": "当 + (一名) + nghề",
    "m": "Làm nghề gì"
   },
   {
    "s": "当 ≠ 当……的时候",
    "m": "Động từ “làm” khác giới từ “khi”"
   }
  ],
  "ex_zh": "有人喜欢学医，打算回国后当一名医生。",
  "ex_py": "Yǒurén xǐhuan xué yī, dǎsuàn huíguó hòu dāng yì míng yīshēng.",
  "ex_vn": "Có người thích học y, định về nước làm bác sĩ.",
  "exList": [
   {
    "zh": "有人喜欢学医，打算回国后当一名医生。",
    "py": "Yǒurén xǐhuan xué yī, dǎsuàn huíguó hòu dāng yì míng yīshēng.",
    "vn": "Có người thích học y, định về nước làm bác sĩ."
   },
   {
    "zh": "安妮以后想当一名中文老师。",
    "py": "Ānní yǐhòu xiǎng dāng yì míng Zhōngwén lǎoshī.",
    "vn": "Sau này Annie muốn làm giáo viên tiếng Trung."
   }
  ],
  "hanzi": [
   {
    "c": "当",
    "p": "dāng",
    "type": "独体字 · Chữ đơn (giản thể)",
    "st": 6,
    "ord": "nét liền",
    "rad": "彐 (kệ, biến thể)",
    "mean": "khi, đảm nhận",
    "tip": "Chữ giản thể mang nghĩa ĐẢM ĐƯƠNG, ĐÚNG LÚC; 当……的时候 = ĐÚNG LÚC diễn ra việc gì đó = KHI.",
    "cf": "当 khi đọc \"dàng\" nghĩa là \"coi như, cho rằng\" (当作)",
    "w": "当……时候 / 当然 / 应当"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Sau này em muốn làm nghề gì? Vì sao?",
    "answer": "你以后想当什么？为什么？",
    "answerPy": "Nǐ yǐhòu xiǎng dāng shénme? Wèishénme?",
    "note": "Câu hỏi luyện nói theo chủ đề nghề nghiệp.",
    "pair": "想当……"
   },
   {
    "promptLang": "vi",
    "prompt": "Vì có lòng nhiệt tình với giáo dục nên cô ấy muốn làm giáo viên.",
    "answer": "因为对教育有热情，所以她想当老师。",
    "answerPy": "Yīnwèi duì jiàoyù yǒu rèqíng, suǒyǐ tā xiǎng dāng lǎoshī.",
    "note": "Ôn 因为……所以…… (HSK 2/3).",
    "pair": "因为……所以……"
   }
  ]
 },
 {
  "n": 34,
  "zh": "教育",
  "py": "jiàoyù",
  "pos": "Danh từ / Động từ",
  "vn": "giáo dục; dạy dỗ",
  "hv": "giáo dục",
  "em": "🍎",
  "lesson": 4,
  "explain": [
   "Danh từ: ngành / việc giáo dục.",
   "Động từ: dạy bảo, dạy dỗ ai."
  ],
  "usage": "对教育有热情 · 国际中文教育 · 教育孩子.",
  "collo": [
   "对教育有热情",
   "中文教育",
   "教育孩子",
   "受教育"
  ],
  "colloFull": [
   {
    "zh": "对教育有热情",
    "py": "Duì jiàoyù yǒu rèqíng",
    "vn": "nhiệt tình với giáo dục"
   },
   {
    "zh": "中文教育",
    "py": "Zhōngwén jiàoyù",
    "vn": "giáo dục tiếng Trung"
   },
   {
    "zh": "教育孩子",
    "py": "Jiàoyù háizi",
    "vn": "dạy dỗ con cái"
   },
   {
    "zh": "受教育",
    "py": "Shòu jiàoyù",
    "vn": "được giáo dục"
   }
  ],
  "patterns": [
   {
    "s": "对 + 教育 + 有热情 / 感兴趣",
    "m": "教育 là danh từ"
   },
   {
    "s": "教育 + ai",
    "m": "教育 là động từ"
   }
  ],
  "ex_zh": "还有人对教育有热情，想要成为一名教师。",
  "ex_py": "Hái yǒurén duì jiàoyù yǒu rèqíng, xiǎng yào chéngwéi yì míng jiàoshī.",
  "ex_vn": "Còn có người nhiệt tình với giáo dục, muốn trở thành giáo viên.",
  "exList": [
   {
    "zh": "还有人对教育有热情，想要成为一名教师。",
    "py": "Hái yǒurén duì jiàoyù yǒu rèqíng, xiǎng yào chéngwéi yì míng jiàoshī.",
    "vn": "Còn có người nhiệt tình với giáo dục, muốn trở thành giáo viên."
   },
   {
    "zh": "父母要好好儿教育孩子。",
    "py": "Fù mǔ yào hǎo hǎor jiàoyù háizi.",
    "vn": "Cha mẹ phải dạy dỗ con cái thật tốt."
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
    "c": "育",
    "p": "yù",
    "type": "上下结构 · Trên-dưới",
    "st": 8,
    "ord": "𠫓 trên → 月 dưới",
    "rad": "月 (nhục – thịt)",
    "mean": "nuôi dạy",
    "tip": "Chữ hội ý đứa trẻ (lộn ngược, mới sinh) + 月(thân thể) → NUÔI DẠY, kết hợp 教(dạy) thành 教育 = GIÁO DỤC.",
    "cf": "肓 (huāng – ít dùng)",
    "w": "教育 / 体育 / 教育方法"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Annie muốn chọn ngành giáo dục tiếng Trung quốc tế.",
    "answer": "安妮想选择国际中文教育专业。",
    "answerPy": "Ānní xiǎng xuǎnzé guójì Zhōngwén jiàoyù zhuānyè.",
    "note": "Câu trong bài khoá 4.",
    "pair": "选择……专业"
   },
   {
    "promptLang": "vi",
    "prompt": "Ông ấy làm giáo dục đã hơn hai mươi năm rồi.",
    "answer": "他做教育工作已经二十多年了。",
    "answerPy": "Tā zuò jiàoyù gōngzuò yǐjīng èr shí duō nián le.",
    "note": "Ôn bổ ngữ thời lượng + 了 (HSK 3).",
    "pair": "已经……了"
   }
  ]
 },
 {
  "n": 35,
  "zh": "成为",
  "py": "chéngwéi",
  "pos": "Động từ",
  "vn": "trở thành",
  "hv": "thành vi",
  "em": "🌟",
  "lesson": 4,
  "explain": [
   "Biến thành (nghề nghiệp, thân phận, mối quan hệ…); phía sau BẮT BUỘC có danh từ."
  ],
  "usage": "成为 + (一名) + N.",
  "collo": [
   "成为老师",
   "成为朋友",
   "成为一名作家",
   "成为可能"
  ],
  "colloFull": [
   {
    "zh": "成为老师",
    "py": "Chéngwéi lǎoshī",
    "vn": "trở thành giáo viên"
   },
   {
    "zh": "成为朋友",
    "py": "Chéngwéi péngyou",
    "vn": "trở thành bạn bè"
   },
   {
    "zh": "成为一名作家",
    "py": "Chéngwéi yì míng zuòjiā",
    "vn": "trở thành một nhà văn"
   },
   {
    "zh": "成为可能",
    "py": "Chéngwéi kěnéng",
    "vn": "trở thành có thể"
   }
  ],
  "patterns": [
   {
    "s": "A + 成为 + B (danh từ)",
    "m": "✗ 成为很好 → ✓ 变得很好"
   },
   {
    "s": "成为 ≈ 当 nhưng trang trọng hơn",
    "m": "当老师 / 成为老师"
   }
  ],
  "ex_zh": "还有人对教育有热情，想要成为一名教师。",
  "ex_py": "Hái yǒurén duì jiàoyù yǒu rèqíng, xiǎng yào chéngwéi yì míng jiàoshī.",
  "ex_vn": "Còn có người nhiệt tình với giáo dục, muốn trở thành giáo viên.",
  "exList": [
   {
    "zh": "还有人对教育有热情，想要成为一名教师。",
    "py": "Hái yǒurén duì jiàoyù yǒu rèqíng, xiǎng yào chéngwéi yì míng jiàoshī.",
    "vn": "Còn có người nhiệt tình với giáo dục, muốn trở thành giáo viên."
   },
   {
    "zh": "白家月立志成为一名作家。",
    "py": "Bái Jiāyuè lì zhì chéngwéi yì míng zuòjiā.",
    "vn": "Bạch Gia Nguyệt quyết chí trở thành nhà văn."
   }
  ],
  "hanzi": [
   {
    "c": "成",
    "p": "chéng",
    "type": "形声字 · Chữ hình thanh",
    "st": 6,
    "ord": "ngang → phẩy → ngang gập móc → móc nghiêng → phẩy → chấm",
    "rad": "戈 (qua – cây giáo)",
    "mean": "thành, trở thành; xong",
    "tip": "Gốc gồm 戊 (một loại binh khí) + 丁 (chỉ âm): làm xong, thành công. V + 成 = biến / đổi thành: 变成、换成. Ôn: 成绩 (HSK3 Bài 9).",
    "cf": "我 wǒ — cũng có bộ 戈 bên phải",
    "w": "变成 / 成绩"
   },
   {
    "c": "为",
    "p": "wéi",
    "type": "独体字 · Chữ đơn (giản thể)",
    "st": 4,
    "ord": "nét liền",
    "rad": "丶 (điểm)",
    "mean": "làm, trở thành",
    "tip": "为 mang nghĩa LÀM, TRỞ THÀNH, kết hợp 成(nên, đạt được) thành 成为 = TRỞ THÀNH (đạt đến trạng thái mới).",
    "cf": "为 khi đọc \"wèi\" nghĩa là \"vì\" (为了)",
    "w": "成为 / 以为 / 因为"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Chúng tôi trở thành bạn tốt từ ngày đầu tiên nhập học.",
    "answer": "我们从入学第一天就成为了好朋友。",
    "answerPy": "Wǒmen cóng rùxué dì yī tiān jiù chéngwéi le hǎo péngyou.",
    "note": "Ôn 从……就…… (HSK 3).",
    "pair": "从……就……"
   },
   {
    "promptLang": "vi",
    "prompt": "Muốn trở thành giáo viên giỏi thì phải học nhiều kiến thức.",
    "answer": "要想成为一名好老师，就要学习很多知识。",
    "answerPy": "Yào xiǎng chéngwéi yì míng hǎo lǎoshī, jiù yào xuéxí hěn duō zhīshi.",
    "note": "要想……就…… nêu điều kiện.",
    "pair": "要想……就……"
   }
  ]
 },
 {
  "n": 36,
  "zh": "教师",
  "py": "jiàoshī",
  "pos": "Danh từ",
  "vn": "giáo viên",
  "hv": "giáo sư",
  "em": "👩‍🏫",
  "lesson": 4,
  "explain": [
   "Người làm nghề dạy học (trang trọng hơn 老师). Âm Hán Việt “giáo sư” nhưng nghĩa là giáo viên; giáo sư đại học là 教授."
  ],
  "usage": "一名教师 · 中文教师 · 成为教师.",
  "collo": [
   "一名教师",
   "中文教师",
   "成为教师",
   "教师节"
  ],
  "colloFull": [
   {
    "zh": "一名教师",
    "py": "Yì míng jiàoshī",
    "vn": "một giáo viên"
   },
   {
    "zh": "中文教师",
    "py": "Zhōngwén jiàoshī",
    "vn": "giáo viên tiếng Trung"
   },
   {
    "zh": "成为教师",
    "py": "Chéngwéi jiàoshī",
    "vn": "trở thành giáo viên"
   },
   {
    "zh": "教师节",
    "py": "Jiàoshī jié",
    "vn": "Ngày nhà giáo"
   }
  ],
  "patterns": [
   {
    "s": "教师 (trang trọng) ≈ 老师 (thường dùng)",
    "m": "Gọi người: 王老师, không nói 王教师"
   },
   {
    "s": "教师 ≠ 教授",
    "m": "教授 = giáo sư đại học"
   }
  ],
  "ex_zh": "还有人对教育有热情，想要成为一名教师。",
  "ex_py": "Hái yǒurén duì jiàoyù yǒu rèqíng, xiǎng yào chéngwéi yì míng jiàoshī.",
  "ex_vn": "Còn có người nhiệt tình với giáo dục, muốn trở thành giáo viên.",
  "exList": [
   {
    "zh": "还有人对教育有热情，想要成为一名教师。",
    "py": "Hái yǒurén duì jiàoyù yǒu rèqíng, xiǎng yào chéngwéi yì míng jiàoshī.",
    "vn": "Còn có người nhiệt tình với giáo dục, muốn trở thành giáo viên."
   },
   {
    "zh": "王一飞是一名中文教师。",
    "py": "Wáng Yīfēi shì yì míng Zhōngwén jiàoshī.",
    "vn": "Vương Nhất Phi là giáo viên tiếng Trung."
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
    "c": "师",
    "p": "shī",
    "type": "左右结构 · Trái-phải (giản thể)",
    "st": 6,
    "ord": "丿→ 帀",
    "rad": "巾 (cân)",
    "mean": "thầy, người dạy",
    "tip": "Hình ảnh người truyền đạt kiến thức một cách có hệ thống → THẦY, SƯ PHỤ.",
    "cf": "帅 (shuài – \"đẹp trai\")",
    "w": "老师 / 律师"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Ngày 10 tháng 9 là Ngày Nhà giáo của Trung Quốc.",
    "answer": "九月十号是中国的教师节。",
    "answerPy": "Jiǔ yuè shí hào shì Zhōngguó de jiàoshī jié.",
    "note": "教师节 — văn hóa Trung Quốc.",
    "pair": "……是……节"
   },
   {
    "promptLang": "vi",
    "prompt": "Mẹ tôi là giáo viên, dạy tiếng Anh ở trường trung học.",
    "answer": "我妈妈是一名教师，在中学教英语。",
    "answerPy": "Wǒ māma shì yì míng jiàoshī, zài zhōngxué jiào yīng yǔ.",
    "note": "一名 + nghề.",
    "pair": "是一名……"
   }
  ]
 },
 {
  "n": 37,
  "zh": "贸易",
  "py": "màoyì",
  "pos": "Danh từ",
  "vn": "thương mại, mậu dịch",
  "hv": "mậu dịch",
  "em": "🚢",
  "lesson": 4,
  "explain": [
   "Hoạt động mua bán hàng hóa, đặc biệt giữa các nước."
  ],
  "usage": "国际贸易 · 贸易公司 · 做贸易.",
  "collo": [
   "国际贸易",
   "贸易公司",
   "做贸易",
   "贸易方面"
  ],
  "colloFull": [
   {
    "zh": "国际贸易",
    "py": "Guójì màoyì",
    "vn": "thương mại quốc tế"
   },
   {
    "zh": "贸易公司",
    "py": "Màoyì gōngsī",
    "vn": "công ty thương mại"
   },
   {
    "zh": "做贸易",
    "py": "Zuò màoyì",
    "vn": "làm thương mại"
   },
   {
    "zh": "贸易方面",
    "py": "Màoyì fāngmiàn",
    "vn": "về mặt thương mại"
   }
  ],
  "patterns": [
   {
    "s": "做 + 贸易",
    "m": "Làm nghề buôn bán"
   },
   {
    "s": "贸易 + 公司 / 方面",
    "m": "Làm định ngữ"
   }
  ],
  "ex_zh": "希望通过学习，了解更多国际贸易方面的知识。",
  "ex_py": "Xīwàng tōngguò xuéxí, liǎojiě gèng duō guójì màoyì fāngmiàn de zhīshi.",
  "ex_vn": "Hy vọng thông qua học tập, hiểu thêm nhiều kiến thức về thương mại quốc tế.",
  "exList": [
   {
    "zh": "希望通过学习，了解更多国际贸易方面的知识。",
    "py": "Xīwàng tōngguò xuéxí, liǎojiě gèng duō guójì màoyì fāngmiàn de zhīshi.",
    "vn": "Hy vọng thông qua học tập, hiểu thêm nhiều kiến thức về thương mại quốc tế."
   },
   {
    "zh": "他毕业后在一家贸易公司工作。",
    "py": "Tā bìyè hòu zài yì jiā màoyì gōngsī gōngzuò.",
    "vn": "Sau khi tốt nghiệp anh ấy làm ở một công ty thương mại."
   }
  ],
  "hanzi": [
   {
    "c": "贸",
    "p": "mào",
    "type": "形声字 · Chữ hình thanh",
    "st": 9,
    "ord": "卯 → 贝",
    "rad": "贝 (bối – vỏ sò, tiền)",
    "mean": "buôn bán, trao đổi",
    "tip": "Trên là 卯 (chỉ âm), dưới là 贝 (vỏ sò = tiền ngày xưa): dùng tiền đổi hàng — thương mại.",
    "cf": "贺 hè (chúc mừng) — trên là 加",
    "w": "贸易 / 外贸 / 经贸"
   },
   {
    "c": "易",
    "p": "yì",
    "type": "独体字 · Chữ đơn",
    "st": 8,
    "ord": "nét liền, không tách bộ",
    "rad": "日 (nhật)",
    "mean": "dễ; thay đổi",
    "tip": "Chữ tượng hình cổ chỉ sự BIẾN ĐỔI linh hoạt → nghĩa mở rộng thành \"DỄ DÀNG\".",
    "cf": "昜 (dạng cổ liên quan)",
    "w": "容易 / 简易"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Việt Nam và Trung Quốc có rất nhiều giao lưu thương mại.",
    "answer": "越南和中国有很多贸易交流。",
    "answerPy": "Yuènán hé Zhōngguó yǒu hěn duō màoyì jiāoliú.",
    "note": "Câu gần với đời sống học sinh Việt.",
    "pair": "有很多……"
   },
   {
    "promptLang": "vi",
    "prompt": "Anh ấy muốn học kinh tế vì sau này muốn làm thương mại quốc tế.",
    "answer": "他想学经济，是因为将来想做国际贸易。",
    "answerPy": "Tā xiǎng xué jīngjì, shì yīnwèi jiānglái xiǎng zuò guójì màoyì.",
    "note": "Ôn 是因为 + 将来 (từ mới 31).",
    "pair": "是因为……"
   }
  ]
 },
 {
  "n": 38,
  "zh": "方面",
  "py": "fāngmiàn",
  "pos": "Danh từ",
  "vn": "phương diện, mặt, lĩnh vực",
  "hv": "phương diện",
  "em": "📐",
  "lesson": 4,
  "explain": [
   "Một mặt, một khía cạnh của sự việc; một lĩnh vực."
  ],
  "usage": "……方面的知识 · 这方面 · 一方面……，另一方面…….",
  "collo": [
   "这方面",
   "……方面的知识",
   "各方面",
   "一方面……另一方面……"
  ],
  "colloFull": [
   {
    "zh": "这方面",
    "py": "Zhè fāngmiàn",
    "vn": "mặt này, lĩnh vực này"
   },
   {
    "zh": "……方面的知识",
    "py": "…… Fāngmiàn de zhīshi",
    "vn": "kiến thức về …"
   },
   {
    "zh": "各方面",
    "py": "Gè fāngmiàn",
    "vn": "mọi mặt"
   },
   {
    "zh": "一方面……另一方面……",
    "py": "Yìfāngmiàn…… lìngyìfāngmiàn……",
    "vn": "một mặt … mặt khác …"
   }
  ],
  "patterns": [
   {
    "s": "N + 方面 + 的 + 知识 / 问题",
    "m": "Về mặt …"
   },
   {
    "s": "一方面……，另一方面……",
    "m": "Bài 1 · điểm ngữ pháp 4"
   }
  ],
  "ex_zh": "希望通过学习，了解更多国际贸易方面的知识。",
  "ex_py": "Xīwàng tōngguò xuéxí, liǎojiě gèng duō guójì màoyì fāngmiàn de zhīshi.",
  "ex_vn": "Hy vọng thông qua học tập, hiểu thêm nhiều kiến thức về thương mại quốc tế.",
  "exList": [
   {
    "zh": "希望通过学习，了解更多国际贸易方面的知识。",
    "py": "Xīwàng tōngguò xuéxí, liǎojiě gèng duō guójì màoyì fāngmiàn de zhīshi.",
    "vn": "Hy vọng thông qua học tập, hiểu thêm nhiều kiến thức về thương mại quốc tế."
   },
   {
    "zh": "一方面是为了学习语言和知识，另一方面也是为将来的工作和生活做准备。",
    "py": "Yìfāngmiàn shì wèile xuéxí yǔyán hé zhīshi, lìngyìfāngmiàn yě shì wèi jiānglái de gōngzuò hé shēnghuó zuò zhǔnbèi.",
    "vn": "Một mặt là để học ngôn ngữ và kiến thức, mặt khác cũng là chuẩn bị cho công việc và cuộc sống sau này."
   }
  ],
  "hanzi": [
   {
    "c": "方",
    "p": "fāng",
    "type": "象形字 · Chữ tượng hình",
    "st": 4,
    "ord": "chấm → ngang → ngang gập móc → phẩy",
    "rad": "方 (phương)",
    "mean": "phương, hướng; vuông; nơi",
    "tip": "Hình cái cày có hai mũi (có thuyết cho là hai mũi thuyền ghép lại) → về sau chỉ phương hướng, nơi chốn. 方 trong 地方 đọc nhẹ \"fang\". Ôn: 方便 (HSK3 Bài 2), 方法 (HSK3 Bài 8).",
    "cf": "万 wàn (HSK2 Bài 2) — không có nét chấm trên đầu",
    "w": "地方 / 方便 / 方法"
   },
   {
    "c": "面",
    "p": "miàn",
    "type": "独体字 · Chữ đơn thể",
    "st": 9,
    "ord": "一 → 丿 → 𠃌 → 目 …",
    "rad": "面 (diện)",
    "mean": "mặt",
    "tip": "Tượng hình khuôn MẶT. 对面 = mặt đối mặt; 方面 (Bài 5); 面包; 见面.",
    "cf": "而 (ér – mà)",
    "w": "对面 / 方面 / 面包 / 见面"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Tôi thích đi du lịch, vì một mặt có thể đi chơi, mặt khác có thể hiểu văn hóa.",
    "answer": "我很喜欢旅游，因为一方面可以出去玩，另一方面可以了解文化。",
    "answerPy": "Wǒ hěn xǐhuan lǚyóu, yīnwèi yìfāngmiàn kěyǐ chūqù wán, lìngyìfāngmiàn kěyǐ liǎojiě wénhuà.",
    "note": "Đáp án gợi ý của sách (Bài 1 · điểm 4).",
    "pair": "一方面……，另一方面……"
   },
   {
    "promptLang": "vi",
    "prompt": "Về mặt này anh ấy có nhiều kinh nghiệm hơn tôi.",
    "answer": "在这方面，他比我有经验。",
    "answerPy": "Zài zhè fāngmiàn, tā bǐ wǒ yǒu jīngyàn.",
    "note": "Ôn câu so sánh 比 (HSK 2/3).",
    "pair": "在……方面"
   }
  ]
 },
 {
  "n": 39,
  "zh": "知识",
  "py": "zhīshi",
  "pos": "Danh từ",
  "vn": "kiến thức, tri thức",
  "hv": "tri thức",
  "em": "📚",
  "lesson": 4,
  "explain": [
   "Những hiểu biết học được từ sách vở và thực tế."
  ],
  "usage": "学习知识 · 专业知识 · ……方面的知识.",
  "collo": [
   "学习知识",
   "专业知识",
   "文化知识",
   "了解知识"
  ],
  "colloFull": [
   {
    "zh": "学习知识",
    "py": "Xuéxí zhīshi",
    "vn": "học kiến thức"
   },
   {
    "zh": "专业知识",
    "py": "Zhuānyè zhīshi",
    "vn": "kiến thức chuyên ngành"
   },
   {
    "zh": "文化知识",
    "py": "Wénhuà zhīshi",
    "vn": "kiến thức văn hóa"
   },
   {
    "zh": "了解知识",
    "py": "Liǎojiě zhīshi",
    "vn": "tìm hiểu kiến thức"
   }
  ],
  "patterns": [
   {
    "s": "学 / 了解 + 知识",
    "m": "✗ 很多知识们 → ✓ 很多知识"
   }
  ],
  "ex_zh": "一方面是为了学习语言和知识。",
  "ex_py": "Yìfāngmiàn shì wèile xuéxí yǔyán hé zhīshi.",
  "ex_vn": "Một mặt là để học ngôn ngữ và kiến thức.",
  "exList": [
   {
    "zh": "一方面是为了学习语言和知识。",
    "py": "Yìfāngmiàn shì wèile xuéxí yǔyán hé zhīshi.",
    "vn": "Một mặt là để học ngôn ngữ và kiến thức."
   },
   {
    "zh": "她除了复习大学学过的课程，还读了一些新的专业书，希望更多地了解这方面的知识。",
    "py": "Tā chúle fùxí dàxué xué guò de kèchéng, hái dú le yìxiē xīn de zhuānyè shū, xīwàng gèng duō dì liǎojiě zhè fāngmiàn de zhīshi.",
    "vn": "Ngoài ôn lại các môn đã học ở đại học, cô ấy còn đọc thêm sách chuyên ngành mới, mong hiểu thêm kiến thức về mặt này."
   }
  ],
  "hanzi": [
   {
    "c": "知",
    "p": "zhī",
    "type": "左右结构 · Trái-phải",
    "st": 8,
    "ord": "矢 (thỉ) trái → 口 (khẩu) phải",
    "rad": "矢 (thỉ – mũi tên)",
    "mean": "biết",
    "tip": "Bộ mũi tên 矢 (chính xác) + 口 (miệng, nói ra) → nói ra một cách CHÍNH XÁC những gì mình BIẾT, kết hợp 通 (thông suốt) thành 通知 = làm cho ai đó BIẾT tin.",
    "cf": "知 dễ nhầm với 智 (zhì – \"trí tuệ\", thêm 日\")",
    "w": "通知 / 知道 / 通知书"
   },
   {
    "c": "识",
    "p": "shi",
    "type": "左右结构 · Trái-phải (giản thể)",
    "st": 7,
    "ord": "讠 (ngôn) trái → 只 phải",
    "rad": "讠 (ngôn – lời nói)",
    "mean": "biết, nhận thức",
    "tip": "Bộ lời nói 讠 + 只(biểu âm) → dùng LỜI để truyền đạt hiểu biết, kết hợp 知(biết) thành 知识 = KIẾN THỨC.",
    "cf": "织 (zhī – \"dệt\", bộ 纟\")",
    "w": "知识 / 认识 / 常识"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Đọc sách có thể học được rất nhiều kiến thức.",
    "answer": "读书可以学到很多知识。",
    "answerPy": "Dúshū kěyǐ xué dào hěn duō zhīshi.",
    "note": "Bổ ngữ kết quả 到.",
    "pair": "V到"
   },
   {
    "promptLang": "vi",
    "prompt": "Ở trường mới cô ấy muốn tiếp tục học thêm kiến thức.",
    "answer": "她想在新的学校里继续学习更多知识。",
    "answerPy": "Tā xiǎng zài xīn de xuéxiào lǐ jìxù xuéxí gèng duō zhīshi.",
    "note": "Câu trong bài tập hoàn thành đoạn văn.",
    "pair": "继续 + V"
   }
  ]
 },
 {
  "n": 40,
  "zh": "另",
  "py": "lìng",
  "pos": "Đại từ",
  "vn": "khác, (cái) kia",
  "hv": "lánh",
  "em": "↔️",
  "lesson": 4,
  "explain": [
   "Chỉ người / vật khác ngoài cái đã nói; hay gặp trong 另一个, 另一方面."
  ],
  "usage": "另一个 · 另一方面 · 另外.",
  "collo": [
   "另一个",
   "另一方面",
   "另一个人",
   "另外"
  ],
  "colloFull": [
   {
    "zh": "另一个",
    "py": "Lìng yí gè",
    "vn": "một cái khác"
   },
   {
    "zh": "另一方面",
    "py": "Lìngyìfāngmiàn",
    "vn": "mặt khác"
   },
   {
    "zh": "另一个人",
    "py": "Lìng yí gè rén",
    "vn": "người khác"
   },
   {
    "zh": "另外",
    "py": "Lìngwài",
    "vn": "ngoài ra"
   }
  ],
  "patterns": [
   {
    "s": "另 + 一 + lượng từ + N",
    "m": "另一个 / 另一本 / 另一件"
   }
  ],
  "ex_zh": "另一方面也是为将来的工作和生活做准备。",
  "ex_py": "Lìngyìfāngmiàn yě shì wèi jiānglái de gōngzuò hé shēnghuó zuò zhǔnbèi.",
  "ex_vn": "Mặt khác cũng là chuẩn bị cho công việc và cuộc sống sau này.",
  "exList": [
   {
    "zh": "另一方面也是为将来的工作和生活做准备。",
    "py": "Lìngyìfāngmiàn yě shì wèi jiānglái de gōngzuò hé shēnghuó zuò zhǔnbèi.",
    "vn": "Mặt khác cũng là chuẩn bị cho công việc và cuộc sống sau này."
   },
   {
    "zh": "这个不好看，给我看看另一个吧。",
    "py": "Zhège bù hǎokàn, gěi wǒ kàn kàn lìng yí gè ba.",
    "vn": "Cái này không đẹp, cho tôi xem cái khác đi."
   }
  ],
  "hanzi": [
   {
    "c": "另",
    "p": "lìng",
    "type": "上下结构 · Trên-dưới",
    "st": 5,
    "ord": "口 trên → 力 dưới",
    "rad": "口 (khẩu)",
    "mean": "khác, riêng",
    "tip": "Chữ mang nghĩa CÁI KHÁC, RIÊNG BIỆT so với những gì đã đề cập; kết hợp 外(ngoài) thành 另外 = NGOÀI RA, CÁI KHÁC.",
    "cf": "另 dễ nhầm với 加 (jiā – \"thêm vào\")",
    "w": "另外 / 另 / 另一个"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Anh ấy thường mua đồ trên mạng, một mặt vì rẻ, mặt khác vì tiện.",
    "answer": "他经常在网上买东西，一方面因为便宜，另一方面因为方便。",
    "answerPy": "Tā jīngcháng zài wǎngshàng mǎi dōngxi, yìfāngmiàn yīnwèi piányi, lìngyìfāngmiàn yīnwèi fāngbiàn.",
    "note": "Ví dụ của sách (Bài 1 · điểm 4).",
    "pair": "一方面……另一方面……"
   },
   {
    "promptLang": "vi",
    "prompt": "Cái áo này hơi nhỏ, có cái khác không?",
    "answer": "这件衣服有点儿小，有另一件吗？",
    "answerPy": "Zhè jiàn yīfu yǒudiǎnr xiǎo, yǒu lìng yí jiàn ma?",
    "note": "另 + 一 + 件.",
    "pair": "另一件"
   }
  ]
 }
];
var wuData = [
 {
  "img": "/images/hsk4v3/bai-1/wu-A.webp",
  "label": "证件",
  "py": "zhèngjiàn",
  "letter": "A"
 },
 {
  "img": "/images/hsk4v3/bai-1/wu-B.webp",
  "label": "博士",
  "py": "bóshì",
  "letter": "B"
 },
 {
  "img": "/images/hsk4v3/bai-1/wu-C.webp",
  "label": "食堂",
  "py": "shítáng",
  "letter": "C"
 },
 {
  "img": "/images/hsk4v3/bai-1/wu-D.webp",
  "label": "材料",
  "py": "cáiliào",
  "letter": "D"
 },
 {
  "img": "/images/hsk4v3/bai-1/wu-E.webp",
  "label": "教师",
  "py": "jiàoshī",
  "letter": "E"
 },
 {
  "img": "/images/hsk4v3/bai-1/wu-F.webp",
  "label": "加油",
  "py": "jiāyóu",
  "letter": "F"
 }
];
var dialogData = [
 {
  "scene": "在学院办公室 · Ở văn phòng học viện (Bạch Gia Nguyệt và Trần Thiên Trung làm thủ tục nhập học)",
  "anh": "/images/hsk4v3/bai-1/kv-1.webp",
  "nguoi": [
   {
    "ten": "老师",
    "anh": "/images/hsk4v3/bai-1/gv.webp"
   },
   {
    "ten": "白家月",
    "anh": "/images/hsk4v3/nv/bai.webp"
   },
   {
    "ten": "白家月、陈天中",
    "anh": "/images/hsk4v3/nv/chen.webp"
   }
  ],
  "preQuiz": [
   {
    "q": "老师给白家月什么了？",
    "opts": [
     "护照",
     "签证",
     "学生证",
     "入学通知书"
    ],
    "ans": 2
   },
   {
    "q": "他们什么时候开始上课？",
    "opts": [
     "今天",
     "明天",
     "下周一",
     "两周后"
    ],
    "ans": 2
   }
  ],
  "lines": [
   {
    "sp": 0,
    "zh": "你们好，欢迎来到中国留学！请把护照、签证和入学通知书给我。",
    "py": "Nǐmen hǎo, huānyíng lái dào Zhōngguó liúxué! Qǐng bǎ hùzhào, qiānzhèng hé rùxué tōngzhīshū gěi wǒ.",
    "vn": "Chào các em, chào mừng các em đến Trung Quốc du học! Các em đưa cô hộ chiếu, visa và giấy báo nhập học nhé."
   },
   {
    "sp": 1,
    "zh": "好的。这是我们的证件和材料。",
    "py": "Hǎo de. Zhè shì wǒmen de zhèngjiàn hé cáiliào.",
    "vn": "Vâng ạ. Đây là giấy tờ và hồ sơ của chúng em."
   },
   {
    "sp": 0,
    "zh": "办好了，这是你们的学生证，下周一开始上课。先试听两周，然后在网上选课。",
    "py": "Bàn hǎo le, zhè shì nǐmen de xuéshengzhèng, xià zhōu yī kāishǐ shàngkè. Xiān shìtīng liǎng zhōu, ránhòu zài wǎngshàng xuǎnkè.",
    "vn": "(Vài phút sau.) Xong rồi, đây là thẻ sinh viên của các em, thứ Hai tuần sau bắt đầu lên lớp. Các em học thử hai tuần trước, sau đó đăng ký môn học trên mạng."
   },
   {
    "sp": 2,
    "zh": "谢谢老师。",
    "py": "Xièxiè lǎoshī.",
    "vn": "Chúng em cảm ơn cô ạ."
   },
   {
    "sp": 0,
    "zh": "不客气，你们以后有任何问题都可以来找我。",
    "py": "Búkèqì, nǐmen yǐhòu yǒu rènhé wèntí dōu kěyǐ lái zhǎo wǒ.",
    "vn": "Không có gì, sau này các em có bất kỳ vấn đề gì đều có thể đến tìm cô."
   }
  ]
 },
 {
  "scene": "在大学校园 · Trong khuôn viên trường (Bạch Gia Nguyệt và Trần Thiên Trung vừa dạo vừa trò chuyện)",
  "anh": "/images/hsk4v3/bai-1/kv-2.webp",
  "nguoi": [
   {
    "ten": "陈天中",
    "anh": "/images/hsk4v3/nv/chen.webp"
   },
   {
    "ten": "白家月",
    "anh": "/images/hsk4v3/nv/bai.webp"
   }
  ],
  "preQuiz": [
   {
    "q": "白家月觉得学校怎么样？",
    "opts": [
     "不太大",
     "很安静",
     "非常不方便",
     "像座小城市"
    ],
    "ans": 3
   },
   {
    "q": "陈天中为什么想申请奖学金？",
    "opts": [
     "想提高成绩",
     "想让家人高兴",
     "为了减轻经济压力",
     "为了认识表现好的同学"
    ],
    "ans": 2
   }
  ],
  "lines": [
   {
    "sp": 0,
    "zh": "你看，咱们的校园真大！有图书馆、体育馆、超市，还有好几个食堂。",
    "py": "Nǐ kàn, zánmen de xiàoyuán zhēn dà! Yǒu túshūguǎn, tǐyùguǎn, chāoshì, hái yǒu hǎo jǐ gè shítáng.",
    "vn": "Cậu xem, khuôn viên trường mình rộng thật! Có thư viện, nhà thi đấu, siêu thị, lại còn có mấy nhà ăn nữa."
   },
   {
    "sp": 1,
    "zh": "是啊，我觉得学校就像一座小城市，什么都有，方便极了。",
    "py": "Shì a, wǒ juéde xuéxiào jiù xiàng yí zuò xiǎo chéngshì, shénme dōu yǒu, fāngbiàn jí le.",
    "vn": "Đúng vậy, tớ thấy trường giống như một thành phố nhỏ, cái gì cũng có, tiện vô cùng."
   },
   {
    "sp": 0,
    "zh": "刚才老师说，咱们可以申请奖学金，你了解过吗？",
    "py": "Gāngcái lǎoshī shuō, zánmen kěyǐ shēnqǐng jiǎngxuéjīn, nǐ liǎojiě guò ma?",
    "vn": "Lúc nãy cô nói chúng mình có thể xin học bổng, cậu tìm hiểu chưa?"
   },
   {
    "sp": 1,
    "zh": "我听说过一点儿，好像成绩好、表现好的学生都有机会获得奖学金。",
    "py": "Wǒ tīngshuō guò yìdiǎnr, hǎoxiàng chéngjì hǎo, biǎoxiàn hǎo de xuésheng dōu yǒu jīhuì huòdé jiǎngxuéjīn.",
    "vn": "Tớ có nghe nói một chút, hình như sinh viên có thành tích tốt, biểu hiện tốt đều có cơ hội nhận học bổng."
   },
   {
    "sp": 0,
    "zh": "那太好了，要是申请到奖学金，就能减轻不少经济压力。",
    "py": "Nà tài hǎo le, yàoshi shēnqǐng dào jiǎngxuéjīn, jiù néng jiǎnqīng bù shǎo jīngjì yālì.",
    "vn": "Thế thì tốt quá, nếu xin được học bổng thì có thể giảm được không ít áp lực kinh tế."
   },
   {
    "sp": 1,
    "zh": "没错，我们一起加油吧！",
    "py": "Méicuò, wǒmen yìqǐ jiāyóu ba!",
    "vn": "Đúng thế, chúng mình cùng cố lên nhé!"
   }
  ]
 },
 {
  "scene": "外国学生在中国大学的学习和生活 · Việc học và cuộc sống của sinh viên nước ngoài ở đại học Trung Quốc",
  "anh": "/images/hsk4v3/bai-1/kv-3.webp",
  "nguoi": [
   {
    "ten": "小语",
    "anh": "/images/hsk4v3/nv/xiaoyu.webp"
   }
  ],
  "preQuiz": [
   {
    "q": "外国学生可以根据什么选择专业？",
    "opts": [
     "中文水平",
     "自己的兴趣",
     "学校的要求",
     "家人的需要"
    ],
    "ans": 1
   },
   {
    "q": "外国学生怎么能更快地适应中国的大学生活？",
    "opts": [
     "多上中文课程",
     "多去图书馆学习",
     "多研究中国文化",
     "多跟中国学生交流"
    ],
    "ans": 3
   }
  ],
  "lines": [
   {
    "sp": 0,
    "zh": "随着中国的发展，越来越多的外国学生来到中国的大学学习。",
    "py": "Suízhe Zhōngguó de fāzhǎn, yuèláiyuè duō de wàiguó xuésheng lái dào Zhōngguó de dàxué xuéxí.",
    "vn": "Cùng với sự phát triển của Trung Quốc, ngày càng nhiều sinh viên nước ngoài đến các trường đại học Trung Quốc học tập."
   },
   {
    "sp": 0,
    "zh": "他们可以先上一年的中文课程，然后根据自己的兴趣和需要选择专业。",
    "py": "Tāmen kěyǐ xiān shàng yì nián de Zhōngwén kèchéng, ránhòu gēnjù zìjǐ de xìngqù hé xūyào xuǎnzé zhuānyè.",
    "vn": "Họ có thể học trước một năm khóa tiếng Trung, rồi dựa vào sở thích và nhu cầu của mình để chọn chuyên ngành."
   },
   {
    "sp": 0,
    "zh": "除了读本科课程，他们还可以申请读硕士研究生或者博士研究生。",
    "py": "Chúle dú běnkē kèchéng, tāmen hái kěyǐ shēnqǐng dú shuòshì yánjiūshēng huòzhě bóshì yánjiūshēng.",
    "vn": "Ngoài học chương trình đại học, họ còn có thể đăng ký học thạc sĩ hoặc tiến sĩ."
   },
   {
    "sp": 0,
    "zh": "在大学里，外国学生可以和中国学生一起学习、做研究、参加校园活动。",
    "py": "Zài dàxué lǐ, wàiguó xuésheng kěyǐ hé Zhōngguó xuésheng yìqǐ xuéxí, zuò yánjiū, cānjiā xiàoyuán huódòng.",
    "vn": "Ở đại học, sinh viên nước ngoài có thể cùng sinh viên Trung Quốc học tập, làm nghiên cứu, tham gia các hoạt động trong trường."
   },
   {
    "sp": 0,
    "zh": "通过这些交流，外国学生能更快地适应中国的大学生活。",
    "py": "Tōngguò zhèxiē jiāoliú, wàiguó xuésheng néng gèng kuài de shìyìng Zhōngguó de dàxué shēnghuó.",
    "vn": "Thông qua những giao lưu này, sinh viên nước ngoài có thể thích nghi nhanh hơn với cuộc sống đại học ở Trung Quốc."
   }
  ],
  "doan": true
 },
 {
  "scene": "专业选择与职业发展 · Chọn chuyên ngành và phát triển nghề nghiệp",
  "anh": "/images/hsk4v3/bai-1/kv-4.webp",
  "nguoi": [
   {
    "ten": "小语",
    "anh": "/images/hsk4v3/nv/xiaoyu.webp"
   }
  ],
  "preQuiz": [
   {
    "q": "很多外国学生来中国学习以前，做了什么准备？",
    "opts": [
     "学会了中文",
     "找好了工作",
     "想好了发展方向",
     "认识了很多中国朋友"
    ],
    "ans": 2
   },
   {
    "q": "安妮以后想做什么？",
    "opts": [
     "当医生",
     "成为老师",
     "自己开公司",
     "做国际贸易"
    ],
    "ans": 1
   }
  ],
  "lines": [
   {
    "sp": 0,
    "zh": "很多外国学生来中国学习以前，就已经想好了自己的发展方向。",
    "py": "Hěn duō wàiguó xuésheng lái Zhōngguó xuéxí yǐqián, jiù yǐjīng xiǎng hǎo le zìjǐ de fāzhǎn fāngxiàng.",
    "vn": "Nhiều sinh viên nước ngoài trước khi đến Trung Quốc học đã nghĩ kỹ hướng phát triển của mình."
   },
   {
    "sp": 0,
    "zh": "有人对经济感兴趣，希望将来在国际公司工作；有人喜欢学医，打算回国后当一名医生；还有人对教育有热情，想要成为一名教师。",
    "py": "Yǒurén duì jīngjì gǎnxìngqù, xīwàng jiānglái zài guójì gōngsī gōngzuò; yǒurén xǐhuan xué yī, dǎsuàn huíguó hòu dāng yì míng yīshēng; hái yǒurén duì jiàoyù yǒu rèqíng, xiǎng yào chéngwéi yì míng jiàoshī.",
    "vn": "Có người hứng thú với kinh tế, mong sau này làm việc ở công ty quốc tế; có người thích học y, định về nước làm bác sĩ; còn có người nhiệt tình với giáo dục, muốn trở thành giáo viên."
   },
   {
    "sp": 0,
    "zh": "陈天中想选择跟经济有关的专业，希望通过学习，了解更多国际贸易方面的知识。",
    "py": "Chén Tiānzhōng xiǎng xuǎnzé gēn jīngjì yǒuguān de zhuānyè, xīwàng tōngguò xuéxí, liǎojiě gèng duō guójì màoyì fāngmiàn de zhīshi.",
    "vn": "Trần Thiên Trung muốn chọn chuyên ngành liên quan đến kinh tế, mong qua việc học hiểu thêm nhiều kiến thức về thương mại quốc tế."
   },
   {
    "sp": 0,
    "zh": "安妮以后想做一名中文老师，所以要选择国际中文教育专业。",
    "py": "Ānní yǐhòu xiǎng zuò yì míng Zhōngwén lǎoshī, suǒyǐ yào xuǎnzé guójì Zhōngwén jiàoyù zhuānyè.",
    "vn": "Sau này Annie muốn làm giáo viên tiếng Trung, vì vậy sẽ chọn chuyên ngành giáo dục tiếng Trung quốc tế."
   },
   {
    "sp": 0,
    "zh": "对他们来说，来到中国留学，一方面是为了学习语言和知识，另一方面也是为将来的工作和生活做准备。",
    "py": "Duì tāmen láishuō, lái dào Zhōngguó liúxué, yìfāngmiàn shì wèile xuéxí yǔyán hé zhīshi, lìngyìfāngmiàn yě shì wèi jiānglái de gōngzuò hé shēnghuó zuò zhǔnbèi.",
    "vn": "Đối với họ, đến Trung Quốc du học, một mặt là để học ngôn ngữ và kiến thức, mặt khác cũng là để chuẩn bị cho công việc và cuộc sống sau này."
   }
  ],
  "doan": true
 }
];
var listenData = [
 {
  "audio": "同学，请问在哪儿办学生证？在二楼的办公室。要带什么材料？带上你的护照和入学通知书就可以了。谢谢！办好以后，下周一就能用学生证去图书馆借书了。",
  "questions": [
   {
    "q": "办学生证要带什么？",
    "opts": [
     "护照和入学通知书",
     "签证和照片",
     "成绩单"
    ],
    "ans": 0
   },
   {
    "q": "有了学生证，可以做什么？",
    "opts": [
     "去食堂吃饭",
     "去图书馆借书",
     "申请奖学金"
    ],
    "ans": 1
   }
  ]
 },
 {
  "audio": "小王，你申请奖学金了吗？申请了，可是我不知道能不能获得。你成绩那么好，平时表现也不错，一定没问题。要是能申请到就好了，这样能减轻爸爸妈妈的经济压力。别担心，我们一起加油！",
  "questions": [
   {
    "q": "小王为什么想获得奖学金？",
    "opts": [
     "想买新电脑",
     "想减轻家里的经济压力",
     "想去旅游"
    ],
    "ans": 1
   },
   {
    "q": "朋友觉得小王怎么样？",
    "opts": [
     "成绩好，表现也不错",
     "不太努力",
     "压力很大"
    ],
    "ans": 0
   }
  ]
 },
 {
  "audio": "安妮，你本科毕业以后打算做什么？我想申请读硕士，研究国际中文教育。为什么选这个专业？一方面我对教育有热情，另一方面我将来想当一名中文老师。",
  "questions": [
   {
    "q": "安妮本科毕业以后想做什么？",
    "opts": [
     "去公司工作",
     "读硕士",
     "回国当医生"
    ],
    "ans": 1
   },
   {
    "q": "安妮为什么选这个专业？",
    "opts": [
     "因为好找工作",
     "因为对教育有热情，将来想当老师",
     "因为家人的要求"
    ],
    "ans": 1
   }
  ]
 }
];
var matchData = [
 {
  "left": "申请",
  "right": "奖学金"
 },
 {
  "left": "减轻",
  "right": "经济压力"
 },
 {
  "left": "适应",
  "right": "大学生活"
 },
 {
  "left": "参加",
  "right": "校园活动"
 },
 {
  "left": "国际",
  "right": "贸易"
 },
 {
  "left": "办理",
  "right": "入学手续"
 },
 {
  "left": "成为",
  "right": "一名教师"
 },
 {
  "left": "一方面……",
  "right": "另一方面……"
 }
];
var fillData = [
 {
  "pre": "你们以后有",
  "blank": "任何",
  "post": "问题都可以来找我。",
  "hint": "(bất kỳ)",
  "ans": "任何",
  "exp": "任何 + N + 都 + V."
 },
 {
  "pre": "要是申请到奖学金，就能",
  "blank": "减轻",
  "post": "不少经济压力。",
  "hint": "(giảm bớt)",
  "ans": "减轻",
  "exp": "减轻 + 压力."
 },
 {
  "pre": "",
  "blank": "随着",
  "post": "中国的发展，越来越多的外国学生来中国学习。",
  "hint": "(cùng với)",
  "ans": "随着",
  "exp": "随着 + N 的发展."
 },
 {
  "pre": "通过这些交流，外国学生能更快地",
  "blank": "适应",
  "post": "中国的大学生活。",
  "hint": "(thích nghi)",
  "ans": "适应",
  "exp": "适应 + 生活 / 环境."
 },
 {
  "pre": "安妮以后想",
  "blank": "当",
  "post": "一名中文老师。",
  "hint": "(làm nghề)",
  "ans": "当",
  "exp": "当 + nghề nghiệp."
 },
 {
  "pre": "我想了解更多国际贸易",
  "blank": "方面",
  "post": "的知识。",
  "hint": "(về mặt)",
  "ans": "方面",
  "exp": "N + 方面的知识."
 },
 {
  "pre": "好像成绩好、",
  "blank": "表现",
  "post": "好的学生都有机会获得奖学金。",
  "hint": "(biểu hiện)",
  "ans": "表现",
  "exp": "表现好 = biểu hiện tốt."
 },
 {
  "pre": "我觉得学校就像一",
  "blank": "座",
  "post": "小城市，什么都有。",
  "hint": "(lượng từ cho thành phố)",
  "ans": "座",
  "exp": "一座城市 / 一座山."
 },
 {
  "pre": "她",
  "blank": "获得",
  "post": "了三年的奖学金，高兴极了。",
  "hint": "(giành được)",
  "ans": "获得",
  "exp": "获得 + 奖学金."
 },
 {
  "pre": "还有人对教育有热情，想要",
  "blank": "成为",
  "post": "一名教师。",
  "hint": "(trở thành)",
  "ans": "成为",
  "exp": "成为 + danh từ."
 }
];
var sortData = [
 {
  "words": [
   "你们",
   "以后",
   "有",
   "任何",
   "问题",
   "都",
   "可以",
   "来找我",
   "。"
  ],
  "ans": "你们以后有任何问题都可以来找我。",
  "audio": "你们以后有任何问题都可以来找我。"
 },
 {
  "words": [
   "要是",
   "申请到",
   "奖学金",
   "，",
   "就",
   "能",
   "减轻",
   "经济压力",
   "。"
  ],
  "ans": "要是申请到奖学金，就能减轻经济压力。",
  "audio": "要是申请到奖学金，就能减轻经济压力。"
 },
 {
  "words": [
   "随着",
   "中文水平",
   "的",
   "提高",
   "，",
   "我",
   "能看懂",
   "中文报纸了",
   "。"
  ],
  "ans": "随着中文水平的提高，我能看懂中文报纸了。",
  "audio": "随着中文水平的提高，我能看懂中文报纸了。"
 },
 {
  "words": [
   "他们",
   "可以",
   "先",
   "上",
   "一年的",
   "中文课程",
   "。"
  ],
  "ans": "他们可以先上一年的中文课程。",
  "audio": "他们可以先上一年的中文课程。"
 },
 {
  "words": [
   "我",
   "想",
   "了解",
   "更多",
   "国际贸易",
   "方面",
   "的",
   "知识",
   "。"
  ],
  "ans": "我想了解更多国际贸易方面的知识。",
  "audio": "我想了解更多国际贸易方面的知识。"
 },
 {
  "words": [
   "学校",
   "就像",
   "一座",
   "小城市",
   "，",
   "什么",
   "都",
   "有",
   "。"
  ],
  "ans": "学校就像一座小城市，什么都有。",
  "audio": "学校就像一座小城市，什么都有。"
 }
];
var mcData = [
 {
  "q": "请把护照、＿＿和入学通知书给我。",
  "opts": [
   "签证",
   "食堂",
   "知识",
   "压力"
  ],
  "ans": 0,
  "exp": "护照、签证、入学通知书 đều là giấy tờ khi nhập học."
 },
 {
  "q": "明天我们8点出发，任何人＿＿不能迟到。",
  "opts": [
   "也",
   "就",
   "才",
   "再"
  ],
  "ans": 0,
  "exp": "任何……也 / 都 + phủ định."
 },
 {
  "q": "＿＿明天下雨，我们就不去爬山了。",
  "opts": [
   "要是",
   "虽然",
   "随着",
   "通过"
  ],
  "ans": 0,
  "exp": "要是……，就…… nêu giả thiết."
 },
 {
  "q": "＿＿生活水平的提高，人们越来越关注身体健康。",
  "opts": [
   "随着",
   "要是",
   "通过",
   "除了"
  ],
  "ans": 0,
  "exp": "随着 + N 的提高: theo sự thay đổi."
 },
 {
  "q": "他经常在网上买东西，一方面因为便宜，＿＿因为方便。",
  "opts": [
   "另一方面",
   "一方面",
   "另外的",
   "还是"
  ],
  "ans": 0,
  "exp": "一方面……，另一方面……"
 },
 {
  "q": "李文回到北京，读医学＿＿。",
  "opts": [
   "博士",
   "医生",
   "教师",
   "本科生"
  ],
  "ans": 0,
  "exp": "读博士 = học tiến sĩ. 博士 (Hán Việt: bác sĩ) nghĩa là tiến sĩ!"
 },
 {
  "q": "刚来北京的时候，我很不＿＿这里的天气。",
  "opts": [
   "适应",
   "交流",
   "申请",
   "成为"
  ],
  "ans": 0,
  "exp": "不适应 + môi trường / thời tiết."
 },
 {
  "q": "你要多跟中国学生＿＿，这样中文会进步得更快。",
  "opts": [
   "交流",
   "研究",
   "获得",
   "减轻"
  ],
  "ans": 0,
  "exp": "跟 + ai + 交流."
 },
 {
  "q": "有人喜欢学医，打算回国后＿＿一名医生。",
  "opts": [
   "当",
   "成",
   "做到",
   "变"
  ],
  "ans": 0,
  "exp": "当 + (一名) + nghề."
 },
 {
  "q": "＿＿这些交流，外国学生能更快地适应中国的大学生活。",
  "opts": [
   "通过",
   "随着",
   "要是",
   "一方面"
  ],
  "ans": 0,
  "exp": "通过 = thông qua (cách thức); 随着 = theo sự thay đổi."
 }
];
var speakingData = {
 "intro": "Nhấn nút loa nghe câu hỏi (câu hỏi đọc hiểu của sách, câu hỏi phần Khởi động và đóng vai), rồi tự ghi âm câu trả lời — cố dùng từ mới và 4 điểm ngữ pháp của bài.",
 "questions": [
  {
   "q_zh": "到中国留学，需要准备什么证件和材料？",
   "q_vn": "Đi du học Trung Quốc cần chuẩn bị những giấy tờ và hồ sơ gì?",
   "hint": "需要准备……、……和……",
   "sample": "需要准备护照、签证和入学通知书，还有一些申请材料。",
   "sample_vn": "Cần chuẩn bị hộ chiếu, visa và giấy báo nhập học, còn một số hồ sơ đăng ký nữa.",
   "note": "Câu hỏi phần Khởi động của sách."
  },
  {
   "q_zh": "你打算学习什么专业？为什么？",
   "q_vn": "Bạn định học chuyên ngành gì? Vì sao?",
   "hint": "我打算学……专业，一方面……，另一方面……",
   "sample": "我打算学国际贸易专业，一方面我对经济感兴趣，另一方面将来想在国际公司工作。",
   "sample_vn": "Tôi định học ngành thương mại quốc tế, một mặt tôi có hứng thú với kinh tế, mặt khác sau này muốn làm ở công ty quốc tế.",
   "note": "Câu hỏi phần Khởi động; dùng 一方面……，另一方面…… (điểm 4)."
  },
  {
   "q_zh": "老师给了白家月和陈天中什么？他们什么时候开始上课？",
   "q_vn": "Cô giáo đưa cho Bạch Gia Nguyệt và Trần Thiên Trung cái gì? Khi nào họ bắt đầu lên lớp?",
   "hint": "老师给了他们……，他们……开始上课。",
   "sample": "老师给了他们学生证，他们下周一开始上课。",
   "sample_vn": "Cô giáo đưa cho họ thẻ sinh viên, thứ Hai tuần sau họ bắt đầu lên lớp.",
   "note": "Câu hỏi nghe hiểu bài khoá 1."
  },
  {
   "q_zh": "请根据提示复述课文一。",
   "q_vn": "Dựa vào gợi ý, kể lại bài khoá 1.",
   "hint": "白家月和陈天中来中国……。他们把……给老师……老师告诉他们，下周一……，先……，然后……。",
   "sample": "白家月和陈天中来中国留学。他们把护照、签证和入学通知书给老师，老师给他们办了学生证。老师告诉他们，下周一开始上课，先试听两周，然后在网上选课。以后如果有任何问题，都可以去找老师。",
   "sample_vn": "Bạch Gia Nguyệt và Trần Thiên Trung đến Trung Quốc du học. Họ đưa hộ chiếu, visa và giấy báo nhập học cho cô giáo, cô làm thẻ sinh viên cho họ. Cô nói thứ Hai tuần sau bắt đầu lên lớp, học thử hai tuần trước, rồi đăng ký môn trên mạng. Sau này có bất kỳ vấn đề gì đều có thể đến tìm cô.",
   "note": "Bài tập 复述 của sách (trang 3)."
  },
  {
   "q_zh": "什么样的学生有机会获得奖学金？要是你获得了奖学金，你会做什么？",
   "q_vn": "Sinh viên như thế nào có cơ hội nhận học bổng? Nếu bạn nhận được học bổng, bạn sẽ làm gì?",
   "hint": "……的学生有机会……。要是我获得了奖学金，我就……",
   "sample": "成绩好、表现好的学生有机会获得奖学金。要是我获得了奖学金，我就用这些钱买书，还能减轻家里的经济压力。",
   "sample_vn": "Sinh viên học giỏi, biểu hiện tốt có cơ hội nhận học bổng. Nếu tôi nhận được học bổng, tôi sẽ dùng tiền đó mua sách, còn giảm được áp lực kinh tế cho gia đình.",
   "note": "Câu hỏi bài khoá 2 + vận dụng 要是……，就…… (điểm 2)."
  },
  {
   "q_zh": "请根据提示复述课文三。",
   "q_vn": "Dựa vào gợi ý, kể lại bài khoá 3.",
   "hint": "随着……，越来越多的外国学生……。他们可以先……，然后……。除了读……，还可以……。通过这些交流……",
   "sample": "随着中国的发展，越来越多的外国学生来到中国的大学学习。他们可以先上一年的中文课程，然后根据自己的兴趣和需要选择专业。除了读本科课程，他们还可以申请读硕士研究生或者博士研究生。在大学里，他们可以和中国学生一起学习、做研究、参加校园活动。通过这些交流，外国学生能更快地适应中国的大学生活。",
   "sample_vn": "Cùng với sự phát triển của Trung Quốc, ngày càng nhiều sinh viên nước ngoài đến đại học Trung Quốc học tập… Thông qua những giao lưu này, họ thích nghi nhanh hơn với cuộc sống đại học ở Trung Quốc.",
   "note": "Bài tập 复述 của sách (trang 7)."
  },
  {
   "q_zh": "陈天中和安妮来到中国留学是为了什么？",
   "q_vn": "Trần Thiên Trung và Annie đến Trung Quốc du học để làm gì?",
   "hint": "一方面是为了……，另一方面也是为……做准备。",
   "sample": "一方面是为了学习语言和知识，另一方面也是为将来的工作和生活做准备。",
   "sample_vn": "Một mặt là để học ngôn ngữ và kiến thức, mặt khác cũng là chuẩn bị cho công việc và cuộc sống sau này.",
   "note": "Câu hỏi bài khoá 4."
  },
  {
   "q_zh": "你的好朋友明年也想来中国留学，请你给他介绍一下留学手续和在中国的学习生活，并给他一些建议。",
   "q_vn": "Bạn thân của em năm sau cũng muốn sang Trung Quốc du học. Hãy giới thiệu cho bạn ấy thủ tục du học, việc học và cuộc sống ở Trung Quốc, kèm vài lời khuyên.",
   "hint": "先要……，然后……。在大学里……。要是你……，就……。你一方面要……，另一方面要……",
   "sample": "先要申请学校，拿到入学通知书以后再办签证。来了以后，要把护照、签证和入学通知书交给学院的老师，办学生证。在大学里，你可以先上中文课程，然后选择专业。要是你成绩好、表现好，就可以申请奖学金。我的建议是：一方面要多跟中国学生交流，另一方面要多参加校园活动，这样能更快地适应这里的生活。",
   "sample_vn": "Trước hết phải nộp đơn vào trường, có giấy báo nhập học rồi mới làm visa. Sang đến nơi thì nộp hộ chiếu, visa, giấy báo nhập học cho thầy cô ở học viện để làm thẻ sinh viên… Lời khuyên của mình: một mặt phải giao lưu nhiều với sinh viên Trung Quốc, mặt khác tham gia nhiều hoạt động trong trường, như vậy sẽ thích nghi nhanh hơn.",
   "note": "Hoạt động 角色扮演 (đóng vai — gọi video) của sách, trang 10."
  }
 ]
};
var translateData = [
 {
  "vi": "Sau này các em có bất kỳ vấn đề gì đều có thể đến tìm cô.",
  "zh": "你们以后有任何问题都可以来找我。",
  "py": "Nǐmen yǐhòu yǒu rènhé wèntí dōu kěyǐ lái zhǎo wǒ."
 },
 {
  "vi": "Nếu xin được học bổng thì có thể giảm được không ít áp lực kinh tế.",
  "zh": "要是申请到奖学金，就能减轻不少经济压力。",
  "py": "Yàoshi shēnqǐng dào jiǎngxuéjīn, jiù néng jiǎnqīng bù shǎo jīngjì yālì."
 },
 {
  "vi": "Cùng với sự phát triển của Trung Quốc, ngày càng nhiều sinh viên nước ngoài đến Trung Quốc học tập.",
  "zh": "随着中国的发展，越来越多的外国学生来中国学习。",
  "py": "Suízhe Zhōngguó de fāzhǎn, yuèláiyuè duō de wàiguó xuésheng lái Zhōngguó xuéxí."
 },
 {
  "vi": "Thông qua giao lưu, sinh viên nước ngoài có thể thích nghi nhanh hơn với cuộc sống đại học.",
  "zh": "通过交流，外国学生能更快地适应大学生活。",
  "py": "Tōngguò jiāoliú, wàiguó xuésheng néng gèng kuài de shìyìng dàxué shēnghuó."
 },
 {
  "vi": "Đến Trung Quốc du học, một mặt là để học ngôn ngữ, mặt khác cũng là chuẩn bị cho công việc sau này.",
  "zh": "来中国留学，一方面是为了学习语言，另一方面也是为将来的工作做准备。",
  "py": "Lái Zhōngguó liúxué, yìfāngmiàn shì wèile xuéxí yǔyán, lìngyìfāngmiàn yě shì wèi jiānglái de gōngzuò zuò zhǔnbèi."
 },
 {
  "vi": "Sau này Annie muốn làm giáo viên tiếng Trung.",
  "zh": "安妮以后想当一名中文老师。",
  "py": "Ānní yǐhòu xiǎng dāng yì míng Zhōngwén lǎoshī."
 }
];
var translateDataRev = [
 {
  "vi": "Thứ Hai tuần sau bắt đầu lên lớp, học thử hai tuần trước, sau đó đăng ký môn học trên mạng.",
  "zh": "下周一开始上课，先试听两周，然后在网上选课。",
  "py": "Xià zhōu yī kāishǐ shàngkè, xiān shìtīng liǎng zhōu, ránhòu zài wǎngshàng xuǎnkè."
 },
 {
  "vi": "Tớ thấy trường giống như một thành phố nhỏ, cái gì cũng có.",
  "zh": "我觉得学校就像一座小城市，什么都有。",
  "py": "Wǒ juéde xuéxiào jiù xiàng yí zuò xiǎo chéngshì, shénme dōu yǒu."
 },
 {
  "vi": "Ngoài học chương trình đại học, họ còn có thể đăng ký học thạc sĩ hoặc tiến sĩ.",
  "zh": "除了读本科课程，他们还可以申请读硕士研究生或者博士研究生。",
  "py": "Chúle dú běnkē kèchéng, tāmen hái kěyǐ shēnqǐng dú shuòshì yánjiūshēng huòzhě bóshì yánjiūshēng."
 },
 {
  "vi": "Có người thích học y, định về nước làm bác sĩ.",
  "zh": "有人喜欢学医，打算回国后当一名医生。",
  "py": "Yǒurén xǐhuan xué yī, dǎsuàn huíguó hòu dāng yì míng yīshēng."
 },
 {
  "vi": "Trần Thiên Trung muốn chọn chuyên ngành liên quan đến kinh tế.",
  "zh": "陈天中想选择跟经济有关的专业。",
  "py": "Chén Tiānzhōng xiǎng xuǎnzé gēn jīngjì yǒuguān de zhuānyè."
 }
];
var sgkData = [
 {
  "kieu": "kho",
  "de": "选词填空（一）· 综合练习",
  "vn": "Chọn từ thích hợp điền vào chỗ trống (Bài tập tổng hợp, sách trang 9).",
  "dapSgk": true,
  "tu": [
   "入学",
   "签证",
   "获得",
   "专业",
   "食堂"
  ],
  "cau": [
   {
    "s": "她＿＿了三年的奖学金，高兴极了。",
    "dap": [
     "获得"
    ]
   },
   {
    "s": "我是2024年＿＿的，学的是国际经济专业。",
    "dap": [
     "入学"
    ]
   },
   {
    "s": "我打算考研究生，提高自己的＿＿水平。",
    "dap": [
     "专业"
    ]
   },
   {
    "s": "咱们晚上别去＿＿吃饭了，我请你出去吃饭吧。",
    "dap": [
     "食堂"
    ]
   },
   {
    "s": "王经理今天下午去办＿＿了，您明天再来找他吧。",
    "dap": [
     "签证"
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
   "加油",
   "研究",
   "活动",
   "任何",
   "将来"
  ],
  "cau": [
   {
    "s": "A：你＿＿想做什么工作？　B：我想在国际公司工作，有更多的发展机会。",
    "dap": [
     "将来"
    ]
   },
   {
    "s": "A：你为什么选择这门课程？　B：因为我想认真＿＿中国的历史和文化。",
    "dap": [
     "研究"
    ]
   },
   {
    "s": "A：今天下午公司有＿＿，我晚点儿回家。　B：好。大概几点结束？需要我去接你吗？",
    "dap": [
     "活动"
    ]
   },
   {
    "s": "A：你们要去哪儿？　B：我们要去给参加比赛的同学＿＿，你去吗？",
    "dap": [
     "加油"
    ]
   },
   {
    "s": "A：你们这次旅游怎么样？　B：虽然天气不太好，但是和朋友在一起，做＿＿事情都很有意思。",
    "dap": [
     "任何"
    ]
   }
  ]
 },
 {
  "kieu": "kho",
  "de": "选择合适的内容完成短文",
  "vn": "Chọn nội dung thích hợp (A–D) hoàn thành đoạn văn.",
  "dapSgk": true,
  "tu": [
   "也会觉得有一些压力",
   "她除了复习大学学过的课程",
   "她决定参加硕士研究生考试",
   "希望拿到研究生的入学通知书"
  ],
  "cau": [
   {
    "s": "李雪还有一年就本科毕业（bìyè, tốt nghiệp）了，＿＿。为了准备考试，＿＿，还读了一些新的专业书，希望更多地了解这方面的知识。有时候她学习的时间很长，＿＿，但是她还是坚持每天学习。随着考试的时间越来越近，李雪也更努力地复习，＿＿，在新的学校里继续学习更多知识。",
    "dap": [
     "她决定参加硕士研究生考试",
     "她除了复习大学学过的课程",
     "也会觉得有一些压力",
     "希望拿到研究生的入学通知书"
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
    "anh": "/images/hsk4v3/bai-1/bt-1.webp",
    "s": "",
    "tu": "申请",
    "dap": "她正在写入学申请。",
    "giai": "申请 ở đây là danh từ (đơn xin); 正在 + V diễn tả hành động đang diễn ra."
   },
   {
    "anh": "/images/hsk4v3/bai-1/bt-2.webp",
    "s": "",
    "tu": "通知",
    "dap": "他正在看学校的通知。",
    "giai": "学校的通知 — 通知 làm danh từ."
   },
   {
    "anh": "/images/hsk4v3/bai-1/bt-3.webp",
    "s": "",
    "tu": "压力",
    "dap": "他最近工作压力很大。",
    "giai": "压力 + 很大; ✗ 压力很多."
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
  "tieuDe": "Viết đoạn giới thiệu (写作)",
  "gioiThieu": "Đề 写作 của sách HSK 4 (3.0) yêu cầu viết một đoạn văn ngắn (ít nhất 120 chữ) dựa trên nội dung đã học và đã thảo luận trong bài — giống phần 书写 của đề thi HSK 4 mới.",
  "buoc": [
   "Đọc kỹ đề: viết cho AI đọc (người đọc), viết để làm gì, cần những ý nào.",
   "Lập dàn ý theo các câu hỏi gợi ý: mỗi câu hỏi là một ý, viết 1–2 câu cho mỗi ý.",
   "Dùng từ mới và 4 điểm ngữ pháp của bài (khung “Từ, cấu trúc nên dùng”) — đây là phần được chấm điểm từ vựng, ngữ pháp.",
   "Nối các ý bằng từ nối: 首先 / 然后 / 除了……还…… / 要是……就…… / 一方面……另一方面……",
   "Câu mở nêu chủ đề, câu kết là lời chào / lời khuyên; tự soát số chữ (≥ 120) và lỗi chữ Hán trước khi nộp."
  ]
 },
 "de": "学校即将举办“留学中国”宣讲会。为了让外国学生更好地了解他们在中国大学的学习和生活，请根据上面谈论的内容，写一段介绍，不少于120字。",
 "prompt": "Trường sắp tổ chức buổi giới thiệu “Du học Trung Quốc”. Để sinh viên nước ngoài hiểu rõ hơn việc học và cuộc sống ở đại học Trung Quốc, hãy dựa vào nội dung đã trao đổi trong bài, viết một đoạn giới thiệu, không ít hơn 120 chữ.",
 "dan": [
  {
   "hoi": "为什么越来越多的外国学生来中国留学？",
   "goiY": "随着中国的发展，越来越多的……"
  },
  {
   "hoi": "来了以后要办什么手续？",
   "goiY": "先把护照、签证和……交给老师，办……，然后……"
  },
  {
   "hoi": "在中国的大学可以学什么？",
   "goiY": "先上……的中文课程，然后根据……选择专业；除了本科，还可以……"
  },
  {
   "hoi": "怎样才能更快地适应大学生活？",
   "goiY": "一方面要……，另一方面要……"
  },
  {
   "hoi": "还有什么好消息？（奖学金）",
   "goiY": "要是……，就可以申请奖学金，减轻……"
  }
 ],
 "tuNen": [
  "入学",
  "签证",
  "证件",
  "材料",
  "课程",
  "专业",
  "本科",
  "硕士",
  "奖学金",
  "交流",
  "适应",
  "活动"
 ],
 "cauTruc": [
  {
   "ten": "随着……，越来越多的……",
   "nhan": "随着",
   "vd": "随着中国的发展，越来越多的外国学生来到中国的大学学习。",
   "khi": "Câu MỞ: nêu bối cảnh chung."
  },
  {
   "ten": "先……，然后……",
   "nhan": "先",
   "vd": "来了以后，先办入学手续，然后在网上选课。",
   "khi": "Kể thủ tục theo thứ tự."
  },
  {
   "ten": "除了……，还……",
   "nhan": "除了",
   "vd": "除了读本科课程，还可以申请读硕士研究生或者博士研究生。",
   "khi": "Giới thiệu các bậc học."
  },
  {
   "ten": "要是……，就……",
   "nhan": "要是",
   "vd": "要是成绩好、表现好，就有机会获得奖学金。",
   "khi": "Nói về học bổng."
  },
  {
   "ten": "一方面……，另一方面……",
   "nhan": "一方面",
   "vd": "一方面要多跟中国学生交流，另一方面要多参加校园活动。",
   "khi": "Câu KẾT: lời khuyên để thích nghi."
  }
 ],
 "checklist": [
  "Đủ ít nhất 120 chữ Hán chưa?",
  "Đã nói đủ các ý: lý do du học, thủ tục, việc học (khóa tiếng Trung, chuyên ngành, bậc học), học bổng, cách thích nghi chưa?",
  "Đã dùng ít nhất 3 trong 4 điểm ngữ pháp của bài (任何、要是……就……、随着、一方面……另一方面……) chưa?",
  "Đã dùng ít nhất 6 từ mới của bài chưa?",
  "Đoạn văn có câu mở và câu kết rõ ràng, người đọc là sinh viên nước ngoài chưa?"
 ],
 "model": {
  "zh": "随着中国的发展，越来越多的外国学生来到中国的大学学习。来了以后，大家先要把护照、签证和入学通知书交给学院的老师，办好入学手续和学生证，然后在网上选课。在大学里，你可以先上一年的中文课程，然后根据自己的兴趣和需要选择专业。除了读本科课程，还可以申请读硕士研究生或者博士研究生。要是你成绩好、表现好，就有机会获得奖学金，这样能减轻不少经济压力。想要更快地适应大学生活，一方面要多跟中国学生交流，另一方面要多参加校园活动。有任何问题，都可以去找老师。欢迎你来中国留学！",
  "py": "Suízhe Zhōngguó de fāzhǎn, yuèláiyuè duō de wàiguó xuésheng lái dào Zhōngguó de dàxué xuéxí. Lái le yǐhòu, dàjiā xiān yào bǎ hùzhào, qiānzhèng hé rùxué tōngzhīshū jiāo gěi xué yuàn de lǎoshī, bàn hǎo rùxué shǒuxù hé xuéshengzhèng, ránhòu zài wǎngshàng xuǎnkè. Zài dàxué lǐ, nǐ kěyǐ xiān shàng yì nián de Zhōngwén kèchéng, ránhòu gēnjù zìjǐ de xìngqù hé xūyào xuǎnzé zhuānyè. Chúle dú běnkē kèchéng, hái kěyǐ shēnqǐng dú shuòshì yánjiūshēng huòzhě bóshì yánjiūshēng. Yàoshi nǐ chéngjì hǎo, biǎoxiàn hǎo, jiù yǒu jīhuì huòdé jiǎngxuéjīn, zhèyàng néng jiǎnqīng bù shǎo jīngjì yālì. Xiǎng yào gèng kuài de shìyìng dàxué shēnghuó, yìfāngmiàn yào duō gēn Zhōngguó xuésheng jiāoliú, lìngyìfāngmiàn yào duō cānjiā xiàoyuán huódòng. Yǒu rènhé wèntí, dōu kěyǐ qù zhǎo lǎoshī. Huānyíng nǐ lái Zhōngguó liúxué!"
 }
};
