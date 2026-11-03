// HSK 4 (3.0) · Bai 14 — sinh boi tools/hsk4v3/gan.js tu tools/hsk4v3/bai-14/ (dung sua tay).
var vocabData = [
 {
  "n": 1,
  "zh": "茶叶",
  "py": "cháyè",
  "pos": "Danh từ",
  "vn": "lá trà, chè (khô), trà",
  "hv": "trà diệp",
  "em": "🍃",
  "lesson": 1,
  "explain": [
   "Lá trà đã chế biến, dùng để pha trà uống. Mua trà ở tiệm thì nói 买茶叶, còn trà đã pha trong cốc là 茶."
  ],
  "usage": "买茶叶 · 茶叶店 · 一斤 / 一两茶叶 · 茶叶很香.",
  "collo": [
   "买茶叶",
   "茶叶店",
   "一斤茶叶",
   "茶叶很香"
  ],
  "colloFull": [
   {
    "zh": "买茶叶",
    "py": "Mǎi cháyè",
    "vn": "mua trà"
   },
   {
    "zh": "茶叶店",
    "py": "Cháyè diàn",
    "vn": "tiệm trà"
   },
   {
    "zh": "一斤茶叶",
    "py": "Yì jīn cháyè",
    "vn": "nửa ký (một cân TQ) trà"
   },
   {
    "zh": "茶叶很香",
    "py": "Cháyè hěn xiāng",
    "vn": "trà rất thơm"
   }
  ],
  "patterns": [
   {
    "s": "买 / 送 + 茶叶",
    "m": "Mua / tặng trà (lá trà khô)"
   },
   {
    "s": "茶叶 ≠ 茶",
    "m": "茶叶 = lá trà khô; 茶 = nước trà (喝茶)"
   }
  ],
  "ex_zh": "这里茶叶这么多，究竟买哪种好呢？",
  "ex_py": "Zhèli cháyè zhème duō, jiūjìng mǎi nǎ zhǒng hǎo ne?",
  "ex_vn": "Ở đây nhiều loại trà thế này, rốt cuộc nên mua loại nào đây?",
  "exList": [
   {
    "zh": "这里茶叶这么多，究竟买哪种好呢？",
    "py": "Zhèli cháyè zhème duō, jiūjìng mǎi nǎ zhǒng hǎo ne?",
    "vn": "Ở đây nhiều loại trà thế này, rốt cuộc nên mua loại nào đây?"
   },
   {
    "zh": "听说这家店的茶叶不错，我想买一些送给爸爸。",
    "py": "Tīngshuō zhè jiā diàn de cháyè búcuò, wǒ xiǎng mǎi yìxiē sònggěi bàba.",
    "vn": "Nghe nói trà của tiệm này rất ngon, tôi muốn mua ít tặng bố."
   }
  ],
  "hanzi": [
   {
    "c": "茶",
    "p": "chá",
    "type": "上下结构 · Trên-dưới",
    "st": 9,
    "ord": "艹(thảo) trên → 余(biến thể) dưới",
    "rad": "艹 (thảo – cỏ cây)",
    "mean": "trà",
    "tip": "艹(lá cây) pha thành thức uống → TRÀ.",
    "cf": "茶 dễ nhầm 荼 (tú – \"cỏ đắng\")",
    "w": "喝茶 / 一杯茶"
   },
   {
    "c": "叶",
    "p": "yè",
    "type": "左右结构 · Trái-phải (giản thể)",
    "st": 5,
    "ord": "口 trái → 十 phải",
    "rad": "口 (khẩu)",
    "mean": "lá",
    "tip": "Chữ giản thể của 葉 (bộ cỏ + cây), nghĩa LÁ CÂY.",
    "cf": "叶 dễ nhầm với 计 (jì – \"tính\")",
    "w": "叶子 / 树叶 / 茶叶"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Mấy loại trà này loại sau thơm hơn loại trước.",
    "answer": "这几种茶叶一种比一种香。",
    "answerPy": "Zhè jǐ zhǒng cháyè yì zhǒng bǐ yì zhǒng xiāng.",
    "note": "Ôn 一 + lượng từ + 比 + 一 + lượng từ (Bài 13 · điểm 2).",
    "pair": "一种比一种……"
   },
   {
    "promptLang": "vi",
    "prompt": "Để mừng sinh nhật ông, tôi mua hai hộp trà ngon.",
    "answer": "为了给爷爷过生日，我买了两盒好茶叶。",
    "answerPy": "Wèile gěi yéye guò shēngrì, wǒ mǎi le liǎng hé hǎo cháyè.",
    "note": "Ôn 为了 chỉ mục đích (HSK 3; Bài 12 · điểm 4).",
    "pair": "为了……"
   }
  ]
 },
 {
  "n": 2,
  "zh": "究竟",
  "py": "jiūjìng",
  "pos": "Phó từ",
  "vn": "rốt cuộc, cuối cùng thì",
  "hv": "cứu cánh",
  "em": "🤔",
  "lesson": 1,
  "explain": [
   "Phó từ ngữ khí, dùng trong câu hỏi để truy hỏi đến cùng: “rốt cuộc là …?”. Bẫy Hán Việt: “cứu cánh” trong tiếng Việt là “mục đích cuối cùng / phương cứu chữa”, còn 究竟 là “rốt cuộc”."
  ],
  "usage": "究竟 + 什么 / 哪 / 谁 / 怎么 / V不V …? · 究竟是……还是……?",
  "collo": [
   "究竟是谁",
   "究竟为什么",
   "究竟去哪儿了",
   "究竟买不买"
  ],
  "colloFull": [
   {
    "zh": "究竟是谁",
    "py": "Jiūjìng shì shuí",
    "vn": "rốt cuộc là ai"
   },
   {
    "zh": "究竟为什么",
    "py": "Jiūjìng wèishénme",
    "vn": "rốt cuộc tại sao"
   },
   {
    "zh": "究竟去哪儿了",
    "py": "Jiūjìng qù nǎr le",
    "vn": "rốt cuộc đi đâu rồi"
   },
   {
    "zh": "究竟买不买",
    "py": "Jiūjìng mǎi bu mǎi",
    "vn": "rốt cuộc có mua không"
   }
  ],
  "patterns": [
   {
    "s": "究竟 + câu hỏi (呢)",
    "m": "Truy hỏi: rốt cuộc …? — cuối câu có thể thêm 呢, KHÔNG dùng 吗"
   },
   {
    "s": "究竟 + 谁 / 什么 (chủ ngữ)",
    "m": "Khi chủ ngữ là đại từ nghi vấn, 究竟 đứng TRƯỚC nó: 究竟谁去?"
   }
  ],
  "ex_zh": "这里茶叶这么多，究竟买哪种好呢？",
  "ex_py": "Zhèli cháyè zhème duō, jiūjìng mǎi nǎ zhǒng hǎo ne?",
  "ex_vn": "Ở đây nhiều loại trà thế này, rốt cuộc nên mua loại nào đây?",
  "exList": [
   {
    "zh": "这里茶叶这么多，究竟买哪种好呢？",
    "py": "Zhèli cháyè zhème duō, jiūjìng mǎi nǎ zhǒng hǎo ne?",
    "vn": "Ở đây nhiều loại trà thế này, rốt cuộc nên mua loại nào đây?"
   },
   {
    "zh": "你究竟去不去？快决定吧！",
    "py": "Nǐ jiūjìng qù bu qù? Kuài juédìng ba!",
    "vn": "Rốt cuộc cậu có đi hay không? Quyết nhanh lên!"
   }
  ],
  "hanzi": [
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
    "c": "竟",
    "p": "jìng",
    "type": "上下结构 · Trên-dưới",
    "st": 11,
    "ord": "音 trên → 儿 dưới",
    "rad": "立 (lập)",
    "mean": "cuối cùng",
    "tip": "音 + 儿 → bản nhạc kết thúc → CUỐI CÙNG, RỐT CUỘC. 究竟; 竟然 (Bài 6); 毕竟.",
    "cf": "竞 (jìng – cạnh tranh, Bài 17)",
    "w": "究竟 / 竟然 / 毕竟"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Rốt cuộc anh ấy đi đâu rồi? Gọi thế nào cũng không nghe máy.",
    "answer": "他究竟去哪儿了？怎么打电话都不接。",
    "answerPy": "Tā jiūjìng qù nǎr le? Zěnme dǎdiànhuà dōu bù jiē.",
    "note": "Ôn 怎么都 + 不 (Bài 13 · điểm 1).",
    "pair": "究竟 + 哪儿"
   },
   {
    "promptLang": "vi",
    "prompt": "Rốt cuộc bạn có thích chiếc áo khoác này không?",
    "answer": "这件外套你究竟喜欢不喜欢？",
    "answerPy": "Zhè jiàn wàitào nǐ jiūjìng xǐhuan bù xǐhuan?",
    "note": "究竟 + câu hỏi chính phản V不V; không dùng 吗 (Bài 14 · điểm 1).",
    "pair": "究竟 + V不V"
   }
  ]
 },
 {
  "n": 3,
  "zh": "分为",
  "py": "fēnwéi",
  "pos": "Động từ",
  "vn": "chia thành, chia ra làm",
  "hv": "phân vi",
  "em": "🧩",
  "lesson": 1,
  "explain": [
   "Chia một tổng thể thành các phần / các loại: A 分为 B、C……"
  ],
  "usage": "A 分为 B 和 C · 主要分为…… · 分为 + số + 部分 / 种 / 组.",
  "collo": [
   "分为两种",
   "分为三个部分",
   "主要分为",
   "分为几组"
  ],
  "colloFull": [
   {
    "zh": "分为两种",
    "py": "Fēnwéi liǎng zhǒng",
    "vn": "chia thành hai loại"
   },
   {
    "zh": "分为三个部分",
    "py": "Fēnwéi sān gè bùfen",
    "vn": "chia thành ba phần"
   },
   {
    "zh": "主要分为",
    "py": "Zhǔyào fēnwéi",
    "vn": "chủ yếu chia thành"
   },
   {
    "zh": "分为几组",
    "py": "Fēnwéi jǐ zǔ",
    "vn": "chia thành mấy nhóm"
   }
  ],
  "patterns": [
   {
    "s": "A + (主要) 分为 + B、C (等)",
    "m": "A chia thành B, C …"
   },
   {
    "s": "分为 = 分成",
    "m": "Hai cách nói gần như nhau; 分为 trang trọng hơn"
   }
  ],
  "ex_zh": "茶叶主要分为红茶、绿茶等，看您喜欢喝哪种。",
  "ex_py": "Cháyè zhǔyào fēnwéi hóngchá, lǜchá děng, kàn nín xǐhuan hē nǎ zhǒng.",
  "ex_vn": "Trà chủ yếu chia thành hồng trà, lục trà…, tùy chị thích uống loại nào.",
  "exList": [
   {
    "zh": "茶叶主要分为红茶、绿茶等，看您喜欢喝哪种。",
    "py": "Cháyè zhǔyào fēnwéi hóngchá, lǜchá děng, kàn nín xǐhuan hē nǎ zhǒng.",
    "vn": "Trà chủ yếu chia thành hồng trà, lục trà…, tùy chị thích uống loại nào."
   },
   {
    "zh": "这座桥分为上下两层。",
    "py": "Zhè zuò qiáo fēnwéi shàngxià liǎng céng.",
    "vn": "Cây cầu này chia thành hai tầng trên dưới."
   }
  ],
  "hanzi": [
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
    "prompt": "Kỳ thi HSK chia thành ba phần: nghe, đọc và viết.",
    "answer": "HSK考试分为听力、阅读和书写三个部分。",
    "answerPy": "HSK kǎoshì fēnwéi tīnglì, yuèdú hé shūxiě sān gè bùfen.",
    "note": "A 分为 + B、C 和 D + số + 部分.",
    "pair": "分为……三个部分"
   },
   {
    "promptLang": "vi",
    "prompt": "Học sinh trong lớp chia thành hai nhóm, mỗi nhóm khoảng mười người.",
    "answer": "班里的学生分为两组，每组大约十个人。",
    "answerPy": "Bān lǐ de xuésheng fēnwéi liǎng zǔ, měi zǔ dàyuē shí gè rén.",
    "note": "Ôn 大约 (Bài 13 · điểm 3).",
    "pair": "分为 + số + 组"
   }
  ]
 },
 {
  "n": 4,
  "zh": "抱歉",
  "py": "bàoqiàn",
  "pos": "Tính từ",
  "vn": "xin lỗi, áy náy",
  "hv": "bão khiểm",
  "em": "🙏",
  "lesson": 1,
  "explain": [
   "Cảm thấy có lỗi, áy náy với người khác. Người bán hàng, nhân viên phục vụ hay dùng 抱歉 / 很抱歉 — lịch sự, trang trọng hơn 对不起."
  ],
  "usage": "(很 / 真) 抱歉 · 对……感到抱歉 · 抱歉，让您久等了.",
  "collo": [
   "很抱歉",
   "真抱歉",
   "感到抱歉",
   "抱歉，打扰了"
  ],
  "colloFull": [
   {
    "zh": "很抱歉",
    "py": "Hěn bàoqiàn",
    "vn": "rất xin lỗi"
   },
   {
    "zh": "真抱歉",
    "py": "Zhēn bàoqiàn",
    "vn": "thật áy náy"
   },
   {
    "zh": "感到抱歉",
    "py": "Gǎndào bàoqiàn",
    "vn": "cảm thấy có lỗi"
   },
   {
    "zh": "抱歉，打扰了",
    "py": "Bàoqiàn, dǎrǎo le",
    "vn": "xin lỗi đã làm phiền"
   }
  ],
  "patterns": [
   {
    "s": "(很) 抱歉，+ lý do",
    "m": "Xin lỗi, … (lời xin lỗi lịch sự)"
   },
   {
    "s": "对 + ai + 感到抱歉",
    "m": "Cảm thấy có lỗi với ai"
   }
  ],
  "ex_zh": "抱歉，暂时没有。",
  "ex_py": "Bàoqiàn, zànshí méiyǒu.",
  "ex_vn": "Xin lỗi chị, tạm thời hết hàng ạ.",
  "exList": [
   {
    "zh": "抱歉，暂时没有。",
    "py": "Bàoqiàn, zànshí méiyǒu.",
    "vn": "Xin lỗi chị, tạm thời hết hàng ạ."
   },
   {
    "zh": "很抱歉，让您久等了。",
    "py": "Hěn bàoqiàn, ràng nín jiǔ děng le.",
    "vn": "Rất xin lỗi, đã để anh chờ lâu."
   }
  ],
  "hanzi": [
   {
    "c": "抱",
    "p": "bào",
    "type": "左右结构 · Trái-phải",
    "st": 8,
    "ord": "扌 trái → 包 phải",
    "rad": "扌 (thủ)",
    "mean": "ôm",
    "tip": "Tay 扌 + 包(bọc) → hai tay BỌC lấy → ÔM. 抱歉 (Bài 14) = ôm lỗi = xin lỗi.",
    "cf": "包 (bāo – bọc, túi)",
    "w": "抱 / 抱歉 / 拥抱"
   },
   {
    "c": "歉",
    "p": "qiàn",
    "type": "左右结构 · Trái-phải",
    "st": 14,
    "ord": "兼 trái → 欠 phải",
    "rad": "欠 (khiếm)",
    "mean": "áy náy",
    "tip": "兼 + 欠(thiếu, nợ) → cảm thấy còn THIẾU NỢ người khác → ÁY NÁY. 抱歉 = ôm nỗi áy náy = XIN LỖI.",
    "cf": "谦 (qiān – khiêm tốn)",
    "w": "抱歉 / 道歉"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Xin lỗi, tôi đến muộn rồi.",
    "answer": "抱歉，我来晚了。",
    "answerPy": "Bàoqiàn, wǒ láiwǎn le.",
    "note": "抱歉 đứng đầu câu như một lời xin lỗi.",
    "pair": "抱歉，……"
   },
   {
    "promptLang": "vi",
    "prompt": "Thật xin lỗi, tôi buộc phải hủy buổi hẹn lần này.",
    "answer": "真抱歉，我不得不取消这次见面。",
    "answerPy": "Zhēn bàoqiàn, wǒ bùdébù qǔxiāo zhè cì jiànmiàn.",
    "note": "Ôn phủ định kép 不得不 (Bài 12 · điểm 2).",
    "pair": "不得不"
   }
  ]
 },
 {
  "n": 5,
  "zh": "暂时",
  "py": "zànshí",
  "pos": "Tính từ",
  "vn": "tạm thời, trong lúc này",
  "hv": "tạm thời",
  "em": "⏳",
  "lesson": 1,
  "explain": [
   "Trong một thời gian ngắn trước mắt (sau này có thể thay đổi). Hay đứng trước động từ: 暂时没有 / 暂时不用 / 暂时放在……"
  ],
  "usage": "暂时 + 没有 / 不 + V · 暂时放在…… · 暂时的困难.",
  "collo": [
   "暂时没有",
   "暂时不用",
   "暂时放在这儿",
   "暂时的困难"
  ],
  "colloFull": [
   {
    "zh": "暂时没有",
    "py": "Zànshí méiyǒu",
    "vn": "tạm thời không có"
   },
   {
    "zh": "暂时不用",
    "py": "Zànshí búyòng",
    "vn": "tạm thời không dùng"
   },
   {
    "zh": "暂时放在这儿",
    "py": "Zànshí fàngzài zhèr",
    "vn": "tạm để ở đây"
   },
   {
    "zh": "暂时的困难",
    "py": "Zànshí de kùnnan",
    "vn": "khó khăn tạm thời"
   }
  ],
  "patterns": [
   {
    "s": "暂时 + 不 / 没 + V",
    "m": "Tạm thời (chưa / không) …"
   },
   {
    "s": "暂时的 + N",
    "m": "… tạm thời"
   }
  ],
  "ex_zh": "抱歉，暂时没有。",
  "ex_py": "Bàoqiàn, zànshí méiyǒu.",
  "ex_vn": "Xin lỗi chị, tạm thời hết hàng ạ.",
  "exList": [
   {
    "zh": "抱歉，暂时没有。",
    "py": "Bàoqiàn, zànshí méiyǒu.",
    "vn": "Xin lỗi chị, tạm thời hết hàng ạ."
   },
   {
    "zh": "这个问题暂时还没有办法解决。",
    "py": "Zhège wèntí zànshí hái méiyǒu bànfǎ jiějué.",
    "vn": "Vấn đề này tạm thời vẫn chưa có cách giải quyết."
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
    "prompt": "Cuốn sách này tạm thời tôi chưa dùng, bạn cứ cầm đi dùng trước.",
    "answer": "这本书我暂时不用，你先拿去用吧。",
    "answerPy": "Zhè běn shū wǒ zànshí búyòng, nǐ xiān náqù yòng ba.",
    "note": "暂时 + 不 + V; câu chủ đề (tân ngữ đưa lên đầu).",
    "pair": "暂时不……"
   },
   {
    "promptLang": "vi",
    "prompt": "Dù tạm thời gặp khó khăn, chúng ta cũng không được bỏ cuộc.",
    "answer": "即使暂时遇到困难，我们也不能放弃。",
    "answerPy": "Jíshǐ zànshí yùdào kùnnan, wǒmen yě bù néng fàngqì.",
    "note": "Ôn 即使……也…… (Bài 11 · điểm 1).",
    "pair": "即使……也……"
   }
  ]
 },
 {
  "n": 6,
  "zh": "满",
  "py": "mǎn",
  "pos": "Động từ / Tính từ",
  "vn": "đủ, tròn (đạt một mức); đầy",
  "hv": "mãn",
  "em": "💯",
  "lesson": 1,
  "explain": [
   "Động từ: đạt đủ một con số / mức nhất định — 满二两送半两 (mua đủ 2 lạng tặng nửa lạng), 满100减30.",
   "Tính từ: đầy — 坐满了人, 装满了."
  ],
  "usage": "满 + số + 送 / 减 + số · V + 满了 · 满十八岁.",
  "collo": [
   "满一百减三十",
   "满二两送半两",
   "坐满了",
   "满十八岁"
  ],
  "colloFull": [
   {
    "zh": "满一百减三十",
    "py": "Mǎn yìbǎi jiǎn sānshí",
    "vn": "đủ 100 giảm 30"
   },
   {
    "zh": "满二两送半两",
    "py": "Mǎn èr liǎng sòng bàn liǎng",
    "vn": "đủ 2 lạng tặng nửa lạng"
   },
   {
    "zh": "坐满了",
    "py": "Zuò mǎn le",
    "vn": "ngồi kín"
   },
   {
    "zh": "满十八岁",
    "py": "Mǎn shíbā suì",
    "vn": "đủ 18 tuổi"
   }
  ],
  "patterns": [
   {
    "s": "满 + số lượng + 送 / 减 + số lượng",
    "m": "Kiểu khuyến mãi: mua đủ … tặng / giảm …"
   },
   {
    "s": "V + 满 (了)",
    "m": "Bổ ngữ kết quả: … đầy"
   }
  ],
  "ex_zh": "今天满二两送半两，超过半斤再送小礼物。",
  "ex_py": "Jīntiān mǎn èr liǎng sòng bàn liǎng, chāoguò bàn jīn zài sòng xiǎo lǐwù.",
  "ex_vn": "Hôm nay mua đủ hai lạng tặng nửa lạng, quá nửa cân tặng thêm quà nhỏ.",
  "exList": [
   {
    "zh": "今天满二两送半两，超过半斤再送小礼物。",
    "py": "Jīntiān mǎn èr liǎng sòng bàn liǎng, chāoguò bàn jīn zài sòng xiǎo lǐwù.",
    "vn": "Hôm nay mua đủ hai lạng tặng nửa lạng, quá nửa cân tặng thêm quà nhỏ."
   },
   {
    "zh": "电影院里坐满了人。",
    "py": "Diànyǐngyuàn lǐ zuò mǎn le rén.",
    "vn": "Rạp chiếu phim đã kín chỗ người ngồi."
   }
  ],
  "hanzi": [
   {
    "c": "满",
    "p": "mǎn",
    "type": "左右结构 · Trái-phải (giản thể)",
    "st": 13,
    "ord": "氵 (thủy) trái → 两(biến thể) phải",
    "rad": "氵 (thủy – nước)",
    "mean": "đầy, đủ",
    "tip": "Bộ nước 氵 (nước dâng đầy) → mở rộng thành ĐẦY, ĐỦ (đạt đến mức nào đó).",
    "cf": "满 dễ nhầm với 蒲 (pú – \"cây bồ\")",
    "w": "满 / 满意 / 客满"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Mua đủ hai trăm tệ thì tặng một hộp trà.",
    "answer": "满两百块送一盒茶叶。",
    "answerPy": "Mǎn liǎngbǎi kuài sòng yì hé cháyè.",
    "note": "满 + số tiền + 送 + quà.",
    "pair": "满……送……"
   },
   {
    "promptLang": "vi",
    "prompt": "Xe buýt chật kín người, tôi lên thế nào cũng không được.",
    "answer": "公交车上坐满了人，我怎么都上不去。",
    "answerPy": "Gōngjiāochē shàng zuò mǎn le rén, wǒ zěnme dōu shàng bu qù.",
    "note": "Ôn 怎么都 + 不 (Bài 13 · điểm 1); 满 làm bổ ngữ kết quả.",
    "pair": "V满了"
   }
  ]
 },
 {
  "n": 7,
  "zh": "两",
  "py": "liǎng",
  "pos": "Lượng từ",
  "vn": "lạng (đơn vị cân của TQ, = 50 g)",
  "hv": "lạng",
  "em": "⚖️",
  "lesson": 1,
  "explain": [
   "Đơn vị khối lượng truyền thống của Trung Quốc: 1 两 = 50 g; 10 两 = 1 斤 (500 g). Bẫy: “lạng” ở Việt Nam = 100 g, còn 两 của TQ chỉ 50 g!"
  ],
  "usage": "一两 / 二两 / 六两 + N · 多少钱一两? · 半两.",
  "collo": [
   "二两",
   "半两",
   "六两绿茶",
   "多少钱一两"
  ],
  "colloFull": [
   {
    "zh": "二两",
    "py": "Èr liǎng",
    "vn": "hai lạng (100 g)"
   },
   {
    "zh": "半两",
    "py": "Bàn liǎng",
    "vn": "nửa lạng"
   },
   {
    "zh": "六两绿茶",
    "py": "Liù liǎng lǜchá",
    "vn": "sáu lạng trà xanh"
   },
   {
    "zh": "多少钱一两",
    "py": "Duōshao qián yì liǎng",
    "vn": "bao nhiêu tiền một lạng"
   }
  ],
  "patterns": [
   {
    "s": "số + 两 + N",
    "m": "… lạng … (khi cân: nói 二两, không nói 两两)"
   },
   {
    "s": "1 斤 = 10 两 = 500 g",
    "m": "斤 = cân TQ (nửa ký)"
   }
  ],
  "ex_zh": "嗯。那就先买六两这种绿茶吧，再买一个盒子。",
  "ex_py": "Ǹg. Nà jiù xiān mǎi liù liǎng zhè zhǒng lǜchá ba, zài mǎi yí gè hézi.",
  "ex_vn": "Ừm. Vậy mua trước sáu lạng loại trà xanh này nhé, mua thêm một cái hộp.",
  "exList": [
   {
    "zh": "嗯。那就先买六两这种绿茶吧，再买一个盒子。",
    "py": "Ǹg. Nà jiù xiān mǎi liù liǎng zhè zhǒng lǜchá ba, zài mǎi yí gè hézi.",
    "vn": "Ừm. Vậy mua trước sáu lạng loại trà xanh này nhé, mua thêm một cái hộp."
   },
   {
    "zh": "这种茶叶多少钱一两？",
    "py": "Zhè zhǒng cháyè duōshao qián yì liǎng?",
    "vn": "Loại trà này bao nhiêu tiền một lạng?"
   }
  ],
  "hanzi": [
   {
    "c": "两",
    "p": "liǎng",
    "type": "象形字 · Chữ tượng hình",
    "st": 7,
    "ord": "一 → 冂 → 从 (hai chữ 人 nhỏ)",
    "rad": "一 (nhất – một)",
    "mean": "hai; lạng (đơn vị cân TQ, 50 g)",
    "tip": "Hình chiếc cân đòn có hai quả cân treo hai bên → “hai” (两个) và đơn vị cân “lạng” (二两). Nhớ: 1 斤 = 10 两 = 500 g, lạng TQ chỉ 50 g!",
    "cf": "雨 yǔ (mưa) — bên trong là các chấm 丶; 网 wǎng (lưới) — bên trong là hai chữ 㐅",
    "w": "两个 / 二两 / 半两"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Cho tôi nửa cân thịt bò, tức là năm lạng.",
    "answer": "给我半斤牛肉，就是说五两。",
    "answerPy": "Gěi wǒ bàn jīn niúròu, jiùshì shuō wǔ liǎng.",
    "note": "Ôn 就是说 (Bài 11 · điểm 4).",
    "pair": "就是说"
   },
   {
    "promptLang": "vi",
    "prompt": "Trà này bao nhiêu tiền một lạng?",
    "answer": "这种茶叶多少钱一两？",
    "answerPy": "Zhè zhǒng cháyè duōshao qián yì liǎng?",
    "note": "Hỏi giá theo đơn vị: 多少钱 + 一 + đơn vị.",
    "pair": "多少钱一两"
   }
  ]
 },
 {
  "n": 8,
  "zh": "超过",
  "py": "chāoguò",
  "pos": "Động từ",
  "vn": "vượt quá, hơn",
  "hv": "siêu quá",
  "em": "📈",
  "lesson": 1,
  "explain": [
   "Vượt qua một con số / một mức; vượt hơn người khác."
  ],
  "usage": "超过 + số lượng / thời gian · 超过 + người · 不超过…….",
  "collo": [
   "超过半斤",
   "超过一百人",
   "不超过三天",
   "超过别人"
  ],
  "colloFull": [
   {
    "zh": "超过半斤",
    "py": "Chāoguò bàn jīn",
    "vn": "quá nửa cân"
   },
   {
    "zh": "超过一百人",
    "py": "Chāoguò yìbǎi rén",
    "vn": "hơn một trăm người"
   },
   {
    "zh": "不超过三天",
    "py": "Bù chāoguò sān tiān",
    "vn": "không quá ba ngày"
   },
   {
    "zh": "超过别人",
    "py": "Chāoguò biérén",
    "vn": "vượt hơn người khác"
   }
  ],
  "patterns": [
   {
    "s": "超过 + số lượng",
    "m": "Vượt quá …"
   },
   {
    "s": "A + 超过 + B",
    "m": "A vượt hơn B"
   }
  ],
  "ex_zh": "超过半斤再送小礼物。",
  "ex_py": "Chāoguò bàn jīn zài sòng xiǎo lǐwù.",
  "ex_vn": "Quá nửa cân thì tặng thêm quà nhỏ.",
  "exList": [
   {
    "zh": "超过半斤再送小礼物。",
    "py": "Chāoguò bàn jīn zài sòng xiǎo lǐwù.",
    "vn": "Quá nửa cân thì tặng thêm quà nhỏ."
   },
   {
    "zh": "这次参加比赛的人超过了一百个。",
    "py": "Zhè cì cānjiā bǐsài de rén chāoguò le yìbǎi gè.",
    "vn": "Số người tham gia cuộc thi lần này vượt quá một trăm."
   }
  ],
  "hanzi": [
   {
    "c": "超",
    "p": "chāo",
    "type": "半包围结构 · Bán bao vây",
    "st": 12,
    "ord": "走 (tẩu) bao ngoài → 召 trong",
    "rad": "走 (tẩu – chạy)",
    "mean": "vượt qua",
    "tip": "Bộ 走(chạy, di chuyển) + 召(biểu âm) → CHẠY VƯỢT LÊN, kết hợp 过(qua) thành 超过 = VƯỢT QUÁ.",
    "cf": "召 (zhào – \"triệu tập\", không có bộ 走\")",
    "w": "超过 / 超市 / 超级"
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
    "prompt": "Mua quá năm trăm tệ thì được giao hàng miễn phí.",
    "answer": "买东西超过五百块就可以免费送货。",
    "answerPy": "Mǎi dōngxi chāoguò wǔbǎi kuài jiù kěyǐ miǎnfèi sònghuò.",
    "note": "超过 + số tiền + 就…….",
    "pair": "超过……就……"
   },
   {
    "promptLang": "vi",
    "prompt": "Người đến xem triển lãm đã hơn một vạn, ngày sau đông hơn ngày trước.",
    "answer": "来看展览的人已经超过了一万，一天比一天多。",
    "answerPy": "Lái kàn zhǎnlǎn de rén yǐjīng chāoguò le yíwàn, yì tiān bǐ yì tiān duō.",
    "note": "Ôn 一 + 量 + 比 + 一 + 量 (Bài 13 · điểm 2).",
    "pair": "一天比一天"
   }
  ]
 },
 {
  "n": 9,
  "zh": "盒子",
  "py": "hézi",
  "pos": "Danh từ",
  "vn": "hộp",
  "hv": "hạp tử",
  "em": "📦",
  "lesson": 1,
  "explain": [
   "Đồ đựng có nắp, thường bằng giấy, gỗ, nhựa. 盒 còn làm lượng từ: 一盒茶叶 (một hộp trà). Chữ 子 đọc nhẹ."
  ],
  "usage": "一个盒子 · 买个盒子 · 盒子里装…… · 一盒 + N.",
  "collo": [
   "一个盒子",
   "纸盒子",
   "盒子里",
   "打开盒子"
  ],
  "colloFull": [
   {
    "zh": "一个盒子",
    "py": "Yí gè hézi",
    "vn": "một cái hộp"
   },
   {
    "zh": "纸盒子",
    "py": "Zhǐ hézi",
    "vn": "hộp giấy"
   },
   {
    "zh": "盒子里",
    "py": "Hézi lǐ",
    "vn": "trong hộp"
   },
   {
    "zh": "打开盒子",
    "py": "Dǎkāi hézi",
    "vn": "mở hộp"
   }
  ],
  "patterns": [
   {
    "s": "盒子 + 里 + 装 + N",
    "m": "Trong hộp đựng …"
   },
   {
    "s": "一盒 + N",
    "m": "盒 làm lượng từ: một hộp …"
   }
  ],
  "ex_zh": "如果送人，可以买个盒子装进去。",
  "ex_py": "Rúguǒ sòng rén, kěyǐ mǎi gè hézi zhuāngjìn qù.",
  "ex_vn": "Nếu để tặng thì có thể mua một cái hộp đựng vào.",
  "exList": [
   {
    "zh": "如果送人，可以买个盒子装进去。",
    "py": "Rúguǒ sòng rén, kěyǐ mǎi gè hézi zhuāngjìn qù.",
    "vn": "Nếu để tặng thì có thể mua một cái hộp đựng vào."
   },
   {
    "zh": "这个盒子里装的是什么？",
    "py": "Zhège hézi lǐ zhuāng de shì shénme?",
    "vn": "Trong cái hộp này đựng gì vậy?"
   }
  ],
  "hanzi": [
   {
    "c": "盒",
    "p": "hé",
    "type": "上下结构 · Trên-dưới",
    "st": 11,
    "ord": "合 trên → 皿 dưới",
    "rad": "皿 (mãnh)",
    "mean": "hộp",
    "tip": "合(đóng lại, khớp) + 皿(đồ đựng) → đồ đựng có nắp ĐÓNG KHỚP → HỘP.",
    "cf": "盆 (pén – chậu)",
    "w": "盒子 / 饭盒 / 一盒"
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
    "prompt": "Cái hộp này tuy nhỏ nhưng đựng được nhiều đồ.",
    "answer": "这个盒子虽然小，但是能装很多东西。",
    "answerPy": "Zhège hézi suīrán xiǎo, dànshì néng zhuāng hěn duō dōngxi.",
    "note": "Ôn 虽然……但是…… (HSK 3).",
    "pair": "虽然……但是……"
   },
   {
    "promptLang": "vi",
    "prompt": "Bạn đừng vứt cái hộp đó đi, tôi còn phải dùng.",
    "answer": "你别把那个盒子扔了，我还要用呢。",
    "answerPy": "Nǐ bié bǎ nàge hézi rēng le, wǒ hái yào yòng ne.",
    "note": "Ôn câu chữ 把 (HSK 3).",
    "pair": "把……扔了"
   }
  ]
 },
 {
  "n": 10,
  "zh": "装",
  "py": "zhuāng",
  "pos": "Động từ",
  "vn": "đựng, cho vào, xếp vào; lắp đặt",
  "hv": "trang",
  "em": "🛍️",
  "lesson": 1,
  "explain": [
   "Cho đồ vật vào trong hộp, túi, vali…; cũng có nghĩa lắp đặt (装空调). Trong bài: 盒子里装半斤 = trong hộp đựng nửa cân."
  ],
  "usage": "装 + vào đâu · 把……装进…… · 装不下 · 分着装.",
  "collo": [
   "装进盒子",
   "装不下",
   "分着装",
   "装满了"
  ],
  "colloFull": [
   {
    "zh": "装进盒子",
    "py": "Zhuāngjìn hézi",
    "vn": "cho vào hộp"
   },
   {
    "zh": "装不下",
    "py": "Zhuāng bu xià",
    "vn": "không đựng hết"
   },
   {
    "zh": "分着装",
    "py": "Fēn zhe zhuāng",
    "vn": "đựng riêng ra"
   },
   {
    "zh": "装满了",
    "py": "Zhuāngmǎn le",
    "vn": "đựng đầy rồi"
   }
  ],
  "patterns": [
   {
    "s": "把 + N + 装进 + nơi",
    "m": "Cho … vào …"
   },
   {
    "s": "装得下 / 装不下",
    "m": "Bổ ngữ khả năng: đựng được / không đựng hết"
   }
  ],
  "ex_zh": "请帮我分着装，盒子里装半斤，剩下的用纸包一下就行。",
  "ex_py": "Qǐng bāng wǒ fēn zhe zhuāng, hézi lǐ zhuāng bàn jīn, shèngxià de yòng zhǐ bāo yíxià jiù xíng.",
  "ex_vn": "Anh giúp tôi đựng riêng ra nhé, trong hộp để nửa cân, phần còn lại gói giấy là được.",
  "exList": [
   {
    "zh": "请帮我分着装，盒子里装半斤，剩下的用纸包一下就行。",
    "py": "Qǐng bāng wǒ fēn zhe zhuāng, hézi lǐ zhuāng bàn jīn, shèngxià de yòng zhǐ bāo yíxià jiù xíng.",
    "vn": "Anh giúp tôi đựng riêng ra nhé, trong hộp để nửa cân, phần còn lại gói giấy là được."
   },
   {
    "zh": "我把书都装进包里了。",
    "py": "Wǒ bǎ shū dōu zhuāngjìn bāo lǐ le.",
    "vn": "Tôi cho hết sách vào cặp rồi."
   }
  ],
  "hanzi": [
   {
    "c": "装",
    "p": "zhuāng",
    "type": "形声字 · Chữ hình thanh",
    "st": 12,
    "ord": "壮 → 衣",
    "rad": "衣 (y – áo)",
    "mean": "đựng, cho vào; lắp đặt; trang phục; giả vờ",
    "tip": "Áo quần (衣) xếp vào hành lý của chàng trai khỏe (壮, cũng chỉ âm zhuàng → zhuāng) → đựng, cho vào; áo quần mặc lên người → trang phục (服装).",
    "cf": "壮 zhuàng (khỏe mạnh) — không có 衣; 袋 dài (túi) — trên là 代",
    "w": "装进 / 服装 / 安装"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Vali đầy rồi, không đựng thêm được nữa.",
    "answer": "箱子已经满了，装不下了。",
    "answerPy": "Xiāngzi yǐjīng mǎn le, zhuāng bu xià le.",
    "note": "Ôn bổ ngữ khả năng V + 不 + 下 (Bài 4); 满 = đầy.",
    "pair": "装不下"
   },
   {
    "promptLang": "vi",
    "prompt": "Giúp tôi đựng riêng ra hai cái túi nhé.",
    "answer": "请帮我分着装两个袋子吧。",
    "answerPy": "Qǐng bāng wǒ fēn zhe zhuāng liǎng gè dàizi ba.",
    "note": "Ôn 袋子 (Bài 4); V着 + V: làm theo cách nào.",
    "pair": "分着装"
   }
  ]
 },
 {
  "n": 11,
  "zh": "各位",
  "py": "gèwèi",
  "pos": "Đại từ",
  "vn": "các vị, quý vị, mọi người",
  "hv": "các vị",
  "em": "👥",
  "lesson": 2,
  "explain": [
   "Cách gọi lịch sự với nhiều người khi nói trước đám đông (thông báo, phát biểu): 各位顾客, 各位同学."
  ],
  "usage": "各位 + 顾客 / 乘客 / 同学 / 老师 · 各位好.",
  "collo": [
   "各位顾客",
   "各位乘客",
   "各位老师",
   "各位好"
  ],
  "colloFull": [
   {
    "zh": "各位顾客",
    "py": "Gèwèi gùkè",
    "vn": "kính thưa quý khách"
   },
   {
    "zh": "各位乘客",
    "py": "Gèwèi chéngkè",
    "vn": "quý hành khách"
   },
   {
    "zh": "各位老师",
    "py": "Gèwèi lǎoshī",
    "vn": "kính thưa các thầy cô"
   },
   {
    "zh": "各位好",
    "py": "Gèwèi hǎo",
    "vn": "chào mọi người"
   }
  ],
  "patterns": [
   {
    "s": "各位 + N (người)，……",
    "m": "Câu mở đầu thông báo trước đám đông"
   }
  ],
  "ex_zh": "各位顾客，本商场正在举办运动鞋假日低价促销活动，全场五折。",
  "ex_py": "Gèwèi gùkè, běn shāngchǎng zhèngzài jǔbàn yùndòngxié jiàrì dījià cùxiāo huódòng, quán chǎng wǔ zhé.",
  "ex_vn": "Kính thưa quý khách, trung tâm thương mại chúng tôi đang tổ chức chương trình khuyến mãi giá thấp ngày lễ cho giày thể thao, toàn bộ giảm 50%.",
  "exList": [
   {
    "zh": "各位顾客，本商场正在举办运动鞋假日低价促销活动，全场五折。",
    "py": "Gèwèi gùkè, běn shāngchǎng zhèngzài jǔbàn yùndòngxié jiàrì dījià cùxiāo huódòng, quán chǎng wǔ zhé.",
    "vn": "Kính thưa quý khách, trung tâm thương mại chúng tôi đang tổ chức chương trình khuyến mãi giá thấp ngày lễ cho giày thể thao, toàn bộ giảm 50%."
   },
   {
    "zh": "各位同学，请安静一下。",
    "py": "Gèwèi tóngxué, qǐng ānjìng yíxià.",
    "vn": "Các em học sinh, xin trật tự một chút."
   }
  ],
  "hanzi": [
   {
    "c": "各",
    "p": "gè",
    "type": "上下结构 · Trên-dưới",
    "st": 6,
    "ord": "夂 trên → 口 dưới",
    "rad": "口 (khẩu – miệng)",
    "mean": "mỗi, các",
    "tip": "Chữ mang nghĩa MỖI, RIÊNG BIỆT (như mỗi người có tiếng nói 口 riêng), mở rộng thành CÁC, MỖI.",
    "cf": "名 (míng – \"tên\", khác nghĩa hoàn toàn)",
    "w": "各种各样 / 各位 / 各自"
   },
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
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Kính thưa quý hành khách, máy bay sắp cất cánh.",
    "answer": "各位乘客，飞机马上就要起飞了。",
    "answerPy": "Gèwèi chéngkè, fēijī mǎshàng jiù yào qǐfēi le.",
    "note": "Ôn 乘客 (Bài 4); 马上就要……了.",
    "pair": "各位乘客"
   },
   {
    "promptLang": "vi",
    "prompt": "Các vị khách, chúc mọi người ăn ngon miệng!",
    "answer": "各位客人，祝大家吃得开心！",
    "answerPy": "Gèwèi kèrén, zhù dàjiā chī de kāixīn!",
    "note": "Ôn 祝 (Bài 9); bổ ngữ trạng thái V得 + adj.",
    "pair": "各位 + N"
   }
  ]
 },
 {
  "n": 12,
  "zh": "顾客",
  "py": "gùkè",
  "pos": "Danh từ",
  "vn": "khách hàng (mua hàng)",
  "hv": "cố khách",
  "em": "🧑‍💼",
  "lesson": 2,
  "explain": [
   "Người đến cửa hàng, siêu thị, nhà hàng để mua hàng / dùng dịch vụ. Phân biệt: 客人 (khách nói chung, khách đến nhà), 乘客 (hành khách)."
  ],
  "usage": "各位顾客 · 年轻顾客 · 顾客很多 · 吸引顾客.",
  "collo": [
   "各位顾客",
   "年轻顾客",
   "吸引顾客",
   "顾客满意"
  ],
  "colloFull": [
   {
    "zh": "各位顾客",
    "py": "Gèwèi gùkè",
    "vn": "kính thưa quý khách"
   },
   {
    "zh": "年轻顾客",
    "py": "Niánqīng gùkè",
    "vn": "khách hàng trẻ"
   },
   {
    "zh": "吸引顾客",
    "py": "Xīyǐn gùkè",
    "vn": "thu hút khách"
   },
   {
    "zh": "顾客满意",
    "py": "Gùkè mǎnyì",
    "vn": "khách hàng hài lòng"
   }
  ],
  "patterns": [
   {
    "s": "吸引 / 服务 + 顾客",
    "m": "Thu hút / phục vụ khách hàng"
   },
   {
    "s": "顾客 ≠ 客人",
    "m": "顾客: khách mua hàng; 客人: khách đến chơi"
   }
  ],
  "ex_zh": "各位顾客，本商场正在举办运动鞋假日低价促销活动。",
  "ex_py": "Gèwèi gùkè, běn shāngchǎng zhèngzài jǔbàn yùndòngxié jiàrì dījià cùxiāo huódòng.",
  "ex_vn": "Kính thưa quý khách, trung tâm thương mại chúng tôi đang tổ chức chương trình khuyến mãi giá thấp ngày lễ cho giày thể thao.",
  "exList": [
   {
    "zh": "各位顾客，本商场正在举办运动鞋假日低价促销活动。",
    "py": "Gèwèi gùkè, běn shāngchǎng zhèngzài jǔbàn yùndòngxié jiàrì dījià cùxiāo huódòng.",
    "vn": "Kính thưa quý khách, trung tâm thương mại chúng tôi đang tổ chức chương trình khuyến mãi giá thấp ngày lễ cho giày thể thao."
   },
   {
    "zh": "这家店的服务很好，顾客都很满意。",
    "py": "Zhè jiā diàn de fúwù hěn hǎo, gùkè dōu hěn mǎnyì.",
    "vn": "Dịch vụ của tiệm này rất tốt, khách hàng ai cũng hài lòng."
   }
  ],
  "hanzi": [
   {
    "c": "顾",
    "p": "gù",
    "type": "左右结构 · Trái-phải (giản thể)",
    "st": 10,
    "ord": "户 (hộ) trái → 页 (hiệt) phải",
    "rad": "页 (hiệt – đầu, trang)",
    "mean": "nhìn ngoái lại, chăm sóc",
    "tip": "Bộ 页 (liên quan đến đầu, nhìn) + 户(biểu âm) → NGOÁI ĐẦU NHÌN LẠI, QUAN TÂM đến, mở rộng thành KHÁCH HÀNG (người được chăm sóc, phục vụ).",
    "cf": "雇 (gù – \"thuê mướn\", cũng có 户\" nhưng bộ 隹\")",
    "w": "顾客 / 照顾 / 顾不上"
   },
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
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Là nhân viên bán hàng thì phải thân thiện với khách.",
    "answer": "作为售货员，对顾客要友好。",
    "answerPy": "Zuòwéi shòuhuòyuán, duì gùkè yào yǒuhǎo.",
    "note": "Ôn 作为 (Bài 13 · điểm 4).",
    "pair": "作为……"
   },
   {
    "promptLang": "vi",
    "prompt": "Dù khách hỏi gì, cô ấy đều trả lời rất kiên nhẫn.",
    "answer": "无论顾客问什么，她都很耐心地回答。",
    "answerPy": "Wúlùn gùkè wèn shénme, tā dōu hěn nài xīndì huídá.",
    "note": "Ôn 无论……都…… (Bài 12 · điểm 3); 耐心 (Bài 9).",
    "pair": "无论……都……"
   }
  ]
 },
 {
  "n": 13,
  "zh": "本",
  "py": "běn",
  "pos": "Đại từ",
  "vn": "(của) chúng tôi, … này (cách nói trang trọng của bên nói)",
  "hv": "bản",
  "em": "🏬",
  "lesson": 2,
  "explain": [
   "Đứng trước danh từ chỉ đơn vị, tổ chức của chính người nói: 本商场 = trung tâm thương mại (của chúng tôi) này, 本店, 本公司, 本人. Dùng trong thông báo, văn viết.",
   "Đừng nhầm với lượng từ 本 (一本书) đã học."
  ],
  "usage": "本 + 商场 / 店 / 公司 / 学校 · 本人.",
  "collo": [
   "本商场",
   "本店",
   "本公司",
   "本人"
  ],
  "colloFull": [
   {
    "zh": "本商场",
    "py": "Běn shāngchǎng",
    "vn": "trung tâm thương mại chúng tôi"
   },
   {
    "zh": "本店",
    "py": "Běn diàn",
    "vn": "cửa hàng chúng tôi"
   },
   {
    "zh": "本公司",
    "py": "Běn gōngsī",
    "vn": "công ty chúng tôi"
   },
   {
    "zh": "本人",
    "py": "Běnrén",
    "vn": "bản thân tôi"
   }
  ],
  "patterns": [
   {
    "s": "本 + đơn vị / tổ chức",
    "m": "… của chúng tôi (văn thông báo)"
   }
  ],
  "ex_zh": "各位顾客，本商场正在举办运动鞋假日低价促销活动。",
  "ex_py": "Gèwèi gùkè, běn shāngchǎng zhèngzài jǔbàn yùndòngxié jiàrì dījià cùxiāo huódòng.",
  "ex_vn": "Kính thưa quý khách, trung tâm thương mại chúng tôi đang tổ chức chương trình khuyến mãi giá thấp ngày lễ cho giày thể thao.",
  "exList": [
   {
    "zh": "各位顾客，本商场正在举办运动鞋假日低价促销活动。",
    "py": "Gèwèi gùkè, běn shāngchǎng zhèngzài jǔbàn yùndòngxié jiàrì dījià cùxiāo huódòng.",
    "vn": "Kính thưa quý khách, trung tâm thương mại chúng tôi đang tổ chức chương trình khuyến mãi giá thấp ngày lễ cho giày thể thao."
   },
   {
    "zh": "本店今天所有商品打八折。",
    "py": "Běn diàn jīntiān suǒyǒu shāngpǐn dǎ bā zhé.",
    "vn": "Hôm nay tất cả hàng của cửa hàng chúng tôi giảm 20%."
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
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Cửa hàng chúng tôi mở cửa lúc chín giờ sáng mỗi ngày.",
    "answer": "本店每天上午九点开门。",
    "answerPy": "Běn diàn měitiān shàngwǔ jiǔ diǎn kāimén.",
    "note": "本店 = cửa hàng chúng tôi (văn thông báo).",
    "pair": "本店"
   },
   {
    "promptLang": "vi",
    "prompt": "Công ty chúng tôi rất hoan nghênh mọi người đến tham quan.",
    "answer": "本公司非常欢迎大家来参观。",
    "answerPy": "Běn gōngsī fēicháng huānyíng dàjiā lái cānguān.",
    "note": "Ôn 参观 (Bài 8).",
    "pair": "本公司"
   }
  ]
 },
 {
  "n": 14,
  "zh": "假日",
  "py": "jiàrì",
  "pos": "Danh từ",
  "vn": "ngày nghỉ, ngày lễ",
  "hv": "giả nhật",
  "em": "🏖️",
  "lesson": 2,
  "explain": [
   "Ngày được nghỉ (cuối tuần, ngày lễ). 假 ở đây đọc jià (nghỉ) như trong 放假, 寒假."
  ],
  "usage": "假日 + 活动 / 促销 · 国庆假日 · 节假日.",
  "collo": [
   "假日活动",
   "假日促销",
   "节假日",
   "国庆假日"
  ],
  "colloFull": [
   {
    "zh": "假日活动",
    "py": "Jiàrì huódòng",
    "vn": "hoạt động ngày nghỉ"
   },
   {
    "zh": "假日促销",
    "py": "Jiàrì cùxiāo",
    "vn": "khuyến mãi ngày lễ"
   },
   {
    "zh": "节假日",
    "py": "Jiéjiàrì",
    "vn": "ngày lễ ngày nghỉ"
   },
   {
    "zh": "国庆假日",
    "py": "Guóqìng jiàrì",
    "vn": "kỳ nghỉ Quốc khánh"
   }
  ],
  "patterns": [
   {
    "s": "假日 + 的时候 / 里",
    "m": "Vào ngày nghỉ"
   }
  ],
  "ex_zh": "本商场正在举办运动鞋假日低价促销活动。",
  "ex_py": "Běn shāngchǎng zhèngzài jǔbàn yùndòngxié jiàrì dījià cùxiāo huódòng.",
  "ex_vn": "Trung tâm thương mại chúng tôi đang tổ chức chương trình khuyến mãi giá thấp ngày lễ cho giày thể thao.",
  "exList": [
   {
    "zh": "本商场正在举办运动鞋假日低价促销活动。",
    "py": "Běn shāngchǎng zhèngzài jǔbàn yùndòngxié jiàrì dījià cùxiāo huódòng.",
    "vn": "Trung tâm thương mại chúng tôi đang tổ chức chương trình khuyến mãi giá thấp ngày lễ cho giày thể thao."
   },
   {
    "zh": "假日的时候，商场里人特别多。",
    "py": "Jiàrì de shíhou, shāngchǎng lǐ rén tèbié duō.",
    "vn": "Vào ngày nghỉ, trong trung tâm thương mại người đặc biệt đông."
   }
  ],
  "hanzi": [
   {
    "c": "假",
    "p": "jiǎ",
    "type": "左右结构 · Trái-phải",
    "st": 11,
    "ord": "亻 trái → 叚 phải",
    "rad": "亻 (nhân)",
    "mean": "giả; nghỉ",
    "tip": "Người 亻 + 叚(mượn) → mượn, không phải thật → GIẢ (jiǎ). Đọc jià = kỳ nghỉ: 寒假, 暑假, 请假.",
    "cf": "段 (duàn – đoạn)",
    "w": "假话 / 假的 / 寒假 (jià) / 请假 (jià)"
   },
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
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Ngày nghỉ bạn thường làm gì?",
    "answer": "假日你一般做什么？",
    "answerPy": "Jiàrì nǐ yìbān zuò shénme?",
    "note": "假日 làm trạng ngữ thời gian, đứng đầu câu.",
    "pair": "假日……"
   },
   {
    "promptLang": "vi",
    "prompt": "Kỳ nghỉ Quốc khánh năm nay tôi không định đi đâu cả, chỉ ở nhà nghỉ ngơi.",
    "answer": "今年国庆假日我哪儿都不打算去，就在家休息。",
    "answerPy": "Jīnnián Guóqìng jiàrì wǒ nǎr dōu bù dǎsuàn qù, jiù zài jiā xiūxi.",
    "note": "Ôn đại từ nghi vấn phiếm chỉ 哪儿都不 (HSK 3).",
    "pair": "哪儿都不……"
   }
  ]
 },
 {
  "n": 15,
  "zh": "低价",
  "py": "dījià",
  "pos": "Danh từ",
  "vn": "giá thấp, giá rẻ",
  "hv": "đê giá",
  "em": "🏷️",
  "lesson": 2,
  "explain": [
   "Giá thấp hơn bình thường. Hay đứng trước danh từ / động từ: 低价促销, 低价卖."
  ],
  "usage": "低价 + 促销 / 出售 · 以低价…… · 低价商品.",
  "collo": [
   "低价促销",
   "低价商品",
   "低价卖",
   "低价机票"
  ],
  "colloFull": [
   {
    "zh": "低价促销",
    "py": "Dījià cùxiāo",
    "vn": "khuyến mãi giá thấp"
   },
   {
    "zh": "低价商品",
    "py": "Dījià shāngpǐn",
    "vn": "hàng giá rẻ"
   },
   {
    "zh": "低价卖",
    "py": "Dījià mài",
    "vn": "bán giá rẻ"
   },
   {
    "zh": "低价机票",
    "py": "Dījià jīpiào",
    "vn": "vé máy bay giá rẻ"
   }
  ],
  "patterns": [
   {
    "s": "低价 + V / N",
    "m": "Giá thấp …"
   },
   {
    "s": "低价 ↔ 高价",
    "m": "giá thấp ↔ giá cao"
   }
  ],
  "ex_zh": "本商场正在举办运动鞋假日低价促销活动，全场五折。",
  "ex_py": "Běn shāngchǎng zhèngzài jǔbàn yùndòngxié jiàrì dījià cùxiāo huódòng, quán chǎng wǔ zhé.",
  "ex_vn": "Trung tâm thương mại chúng tôi đang tổ chức khuyến mãi giá thấp ngày lễ cho giày thể thao, toàn bộ giảm 50%.",
  "exList": [
   {
    "zh": "本商场正在举办运动鞋假日低价促销活动，全场五折。",
    "py": "Běn shāngchǎng zhèngzài jǔbàn yùndòngxié jiàrì dījià cùxiāo huódòng, quán chǎng wǔ zhé.",
    "vn": "Trung tâm thương mại chúng tôi đang tổ chức khuyến mãi giá thấp ngày lễ cho giày thể thao, toàn bộ giảm 50%."
   },
   {
    "zh": "这家超市经常低价卖水果。",
    "py": "Zhè jiā chāoshì jīngcháng dījià mài shuǐguǒ.",
    "vn": "Siêu thị này hay bán trái cây giá rẻ."
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
   },
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
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Không thể chỉ nhìn giá rẻ, còn phải xem chất lượng.",
    "answer": "不能只看低价，还得看质量。",
    "answerPy": "Bù néng zhǐ kàn dījià, hái děi kàn zhìliàng.",
    "note": "还得 = còn phải (得 đọc děi).",
    "pair": "不能只……还得……"
   },
   {
    "promptLang": "vi",
    "prompt": "Giá rẻ không có nghĩa là chất lượng kém.",
    "answer": "低价并不说明质量不好。",
    "answerPy": "Dījià bìng bù shuōmíng zhìliàng bù hǎo.",
    "note": "Ôn 并 + phủ định (Bài 2 · điểm 3).",
    "pair": "并不……"
   }
  ]
 },
 {
  "n": 16,
  "zh": "促销",
  "py": "cùxiāo",
  "pos": "Động từ",
  "vn": "khuyến mãi, đẩy mạnh bán hàng",
  "hv": "xúc tiêu",
  "em": "🎉",
  "lesson": 2,
  "explain": [
   "Dùng các cách như giảm giá, tặng quà… để bán được nhiều hàng hơn. 促销活动 = chương trình khuyến mãi."
  ],
  "usage": "促销活动 · 做促销 · 正在促销 · 低价促销.",
  "collo": [
   "促销活动",
   "做促销",
   "正在促销",
   "促销员"
  ],
  "colloFull": [
   {
    "zh": "促销活动",
    "py": "Cùxiāo huódòng",
    "vn": "chương trình khuyến mãi"
   },
   {
    "zh": "做促销",
    "py": "Zuò cùxiāo",
    "vn": "làm khuyến mãi"
   },
   {
    "zh": "正在促销",
    "py": "Zhèngzài cùxiāo",
    "vn": "đang khuyến mãi"
   },
   {
    "zh": "促销员",
    "py": "Cùxiāo yuán",
    "vn": "nhân viên khuyến mãi"
   }
  ],
  "patterns": [
   {
    "s": "举办 / 做 + 促销活动",
    "m": "Tổ chức / làm khuyến mãi"
   }
  ],
  "ex_zh": "本商场正在举办运动鞋假日低价促销活动。",
  "ex_py": "Běn shāngchǎng zhèngzài jǔbàn yùndòngxié jiàrì dījià cùxiāo huódòng.",
  "ex_vn": "Trung tâm thương mại chúng tôi đang tổ chức chương trình khuyến mãi giá thấp ngày lễ cho giày thể thao.",
  "exList": [
   {
    "zh": "本商场正在举办运动鞋假日低价促销活动。",
    "py": "Běn shāngchǎng zhèngzài jǔbàn yùndòngxié jiàrì dījià cùxiāo huódòng.",
    "vn": "Trung tâm thương mại chúng tôi đang tổ chức chương trình khuyến mãi giá thấp ngày lễ cho giày thể thao."
   },
   {
    "zh": "超市在做促销，牛奶买一送一。",
    "py": "Chāoshì zài zuò cùxiāo, niúnǎi mǎi yí sòng yī.",
    "vn": "Siêu thị đang khuyến mãi, sữa mua một tặng một."
   }
  ],
  "hanzi": [
   {
    "c": "促",
    "p": "cù",
    "type": "形声字 · Chữ hình thanh",
    "st": 9,
    "ord": "亻 → 足",
    "rad": "亻 (nhân – người)",
    "mean": "thúc giục, thúc đẩy; gấp gáp",
    "tip": "Người (亻) giục người khác cất chân (足, cũng chỉ âm cù) đi nhanh lên → thúc đẩy — 促销 = thúc đẩy bán hàng (khuyến mãi).",
    "cf": "捉 zhuō (bắt) — bên trái là 扌; 足 zú (chân) — không có 亻",
    "w": "促销 / 促进 / 催促"
   },
   {
    "c": "销",
    "p": "xiāo",
    "type": "形声字 · Chữ hình thanh",
    "st": 12,
    "ord": "钅 → 肖",
    "rad": "钅 (kim – kim loại)",
    "mean": "bán, tiêu thụ (hàng hóa); làm tan (kim loại)",
    "tip": "Kim loại (钅) nấu chảy, nhỏ dần (肖, cũng chỉ âm xiāo) rồi tan mất → hàng hóa “tan” khỏi kho = bán đi, tiêu thụ — 促销, 销售.",
    "cf": "消 xiāo (tan biến; 消息) — bên trái là 氵; 锁 suǒ (khóa) — bên phải là 𧴪",
    "w": "促销 / 销售 / 畅销"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Cửa hàng này tháng nào cũng có chương trình khuyến mãi.",
    "answer": "这家商店每个月都有促销活动。",
    "answerPy": "Zhè jiā shāngdiàn měi gè yuè dōu yǒu cùxiāo huódòng.",
    "note": "每 + 量 + 都…….",
    "pair": "每……都……"
   },
   {
    "promptLang": "vi",
    "prompt": "Trung tâm thương mại đang khuyến mãi, tôi mua một chiếc áo khoác, rẻ hơn bình thường một nửa.",
    "answer": "商场正在促销，我买了一件外套，比平时便宜了一半。",
    "answerPy": "Shāngchǎng zhèngzài cùxiāo, wǒ mǎi le yí jiàn wàitào, bǐ píngshí piányi le yíbàn.",
    "note": "Ôn câu so sánh 比 + bổ ngữ số lượng (HSK 3).",
    "pair": "比……便宜了一半"
   }
  ]
 },
 {
  "n": 17,
  "zh": "广播",
  "py": "guǎngbō",
  "pos": "Danh từ / Động từ",
  "vn": "loa phát thanh, đài phát thanh; phát thanh",
  "hv": "quảng bá",
  "em": "📢",
  "lesson": 2,
  "explain": [
   "Danh từ: chương trình / thông báo phát qua loa, đài: 听广播, 广播里说……",
   "Động từ: phát (thông báo) qua loa. Bẫy Hán Việt: “quảng bá” tiếng Việt = quảng bá hình ảnh, còn 广播 là phát thanh, loa thông báo."
  ],
  "usage": "听广播 · 广播里说…… · 广播站 · 广播一下.",
  "collo": [
   "听广播",
   "广播里说",
   "机场广播",
   "广播节目"
  ],
  "colloFull": [
   {
    "zh": "听广播",
    "py": "Tīng guǎngbō",
    "vn": "nghe đài"
   },
   {
    "zh": "广播里说",
    "py": "Guǎngbō lǐ shuō",
    "vn": "loa / đài nói"
   },
   {
    "zh": "机场广播",
    "py": "Jīchǎng guǎngbō",
    "vn": "loa sân bay"
   },
   {
    "zh": "广播节目",
    "py": "Guǎngbō jiémù",
    "vn": "chương trình phát thanh"
   }
  ],
  "patterns": [
   {
    "s": "广播里说，……",
    "m": "Loa / đài thông báo rằng …"
   },
   {
    "s": "听 + 广播",
    "m": "Nghe đài phát thanh"
   }
  ],
  "ex_zh": "一飞，广播里说价格减了一半呢，咱们过去看看？",
  "ex_py": "Yīfēi, guǎngbō lǐ shuō jiàgé jiǎn le yíbàn ne, zánmen guòqu kànkan?",
  "ex_vn": "Nhất Phi, loa nói giá giảm một nửa đấy, mình qua xem nhé?",
  "exList": [
   {
    "zh": "一飞，广播里说价格减了一半呢，咱们过去看看？",
    "py": "Yīfēi, guǎngbō lǐ shuō jiàgé jiǎn le yíbàn ne, zánmen guòqu kànkan?",
    "vn": "Nhất Phi, loa nói giá giảm một nửa đấy, mình qua xem nhé?"
   },
   {
    "zh": "广播里说，飞机要晚点一个小时。",
    "py": "Guǎngbō lǐ shuō, fēijī yào wǎndiǎn yí gè xiǎoshí.",
    "vn": "Loa thông báo máy bay sẽ chậm một tiếng."
   }
  ],
  "hanzi": [
   {
    "c": "广",
    "p": "guǎng",
    "type": "象形字 · Chữ tượng hình",
    "st": 3,
    "ord": "丶 → 一 → 丿",
    "rad": "广 (nghiễm – mái nhà rộng)",
    "mean": "rộng, rộng lớn; (viết tắt) Quảng Đông, Quảng Châu",
    "tip": "Vẽ một mái nhà dựa vào vách núi, chỉ có mái che không có tường → nơi rộng rãi → rộng — 广场 (quảng trường), 广告, 广州.",
    "cf": "厂 chǎng (xưởng) — không có chấm trên; 庄 zhuāng — thêm 土 bên trong",
    "w": "广州 / 广场 / 广告"
   },
   {
    "c": "播",
    "p": "bō",
    "type": "左右结构 · Trái-phải",
    "st": 15,
    "ord": "扌 trái → 番 phải",
    "rad": "扌 (thủ)",
    "mean": "gieo, phát",
    "tip": "Tay 扌 + 番 → tay GIEO hạt → mở rộng thành PHÁT (sóng). 广播 = phát rộng = phát thanh; 播放 = phát.",
    "cf": "番 (fān – lượt)",
    "w": "广播 / 播放 / 直播"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Vừa rồi tôi nghe loa nói tàu sắp xuất phát.",
    "answer": "我刚才听广播说，火车马上就要出发了。",
    "answerPy": "Wǒ gāngcái tīng guǎngbō shuō, huǒchē mǎshàng jiù yào chūfā le.",
    "note": "听 + 广播 + 说…….",
    "pair": "听广播说"
   },
   {
    "promptLang": "vi",
    "prompt": "Mỗi sáng ông tôi đều nghe đài.",
    "answer": "我爷爷每天早上都听广播。",
    "answerPy": "Wǒ yéye měitiān zǎoshang dōu tīng guǎngbō.",
    "note": "广播 làm danh từ, tân ngữ của 听.",
    "pair": "听广播"
   }
  ]
 },
 {
  "n": 18,
  "zh": "减",
  "py": "jiǎn",
  "pos": "Động từ",
  "vn": "giảm, bớt, trừ",
  "hv": "giảm",
  "em": "➖",
  "lesson": 2,
  "explain": [
   "Làm cho ít đi: 价格减了一半 (giá giảm một nửa), 一双减300块 (mỗi đôi giảm 300 tệ), 满100减30."
  ],
  "usage": "减 + số tiền / một nửa · 满……减…… · 减肥 · 减轻 (Bài 1).",
  "collo": [
   "减了一半",
   "一双减300块",
   "满100减30",
   "减肥"
  ],
  "colloFull": [
   {
    "zh": "减了一半",
    "py": "Jiǎn le yíbàn",
    "vn": "giảm một nửa"
   },
   {
    "zh": "一双减300块",
    "py": "Yì shuāng jiǎn 300 kuài",
    "vn": "mỗi đôi giảm 300 tệ"
   },
   {
    "zh": "满100减30",
    "py": "Mǎn 100 jiǎn 30",
    "vn": "đủ 100 giảm 30"
   },
   {
    "zh": "减肥",
    "py": "Jiǎnféi",
    "vn": "giảm cân"
   }
  ],
  "patterns": [
   {
    "s": "减 + (了) + số lượng",
    "m": "Giảm (bao nhiêu)"
   },
   {
    "s": "满 + A + 减 + B",
    "m": "Mua đủ A giảm B"
   }
  ],
  "ex_zh": "广播里说价格减了一半呢。",
  "ex_py": "Guǎngbō lǐ shuō jiàgé jiǎn le yíbàn ne.",
  "ex_vn": "Loa nói giá giảm một nửa đấy.",
  "exList": [
   {
    "zh": "广播里说价格减了一半呢。",
    "py": "Guǎngbō lǐ shuō jiàgé jiǎn le yíbàn ne.",
    "vn": "Loa nói giá giảm một nửa đấy."
   },
   {
    "zh": "这个月我想减几斤。",
    "py": "Zhège yuè wǒ xiǎng jiǎn jǐ jīn.",
    "vn": "Tháng này tôi muốn giảm vài cân."
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
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Mua đủ một trăm giảm ba mươi, khá đáng tiền.",
    "answer": "满一百减三十，挺值的。",
    "answerPy": "Mǎn yìbǎi jiǎn sānshí, tǐng zhí de.",
    "note": "满……减……: kiểu khuyến mãi thường gặp.",
    "pair": "满……减……"
   },
   {
    "promptLang": "vi",
    "prompt": "Để giảm áp lực, tuần nào anh ấy cũng đi bơi.",
    "answer": "为了减轻压力，他每个星期都去游泳。",
    "answerPy": "Wèile jiǎnqīng yālì, tā měi gè xīngqī dōu qù yóuyǒng.",
    "note": "Ôn 减轻 (Bài 1) và 为了.",
    "pair": "为了减轻……"
   }
  ]
 },
 {
  "n": 19,
  "zh": "广告",
  "py": "guǎnggào",
  "pos": "Danh từ",
  "vn": "quảng cáo",
  "hv": "quảng cáo",
  "em": "📺",
  "lesson": 2,
  "explain": [
   "Lời giới thiệu sản phẩm, dịch vụ trên tivi, mạng, báo… để người khác mua / dùng."
  ],
  "usage": "看广告 · 做广告 · 电视广告 · 广告上说…….",
  "collo": [
   "看广告",
   "做广告",
   "电视广告",
   "广告上说"
  ],
  "colloFull": [
   {
    "zh": "看广告",
    "py": "Kàn guǎnggào",
    "vn": "xem quảng cáo"
   },
   {
    "zh": "做广告",
    "py": "Zuò guǎnggào",
    "vn": "làm quảng cáo"
   },
   {
    "zh": "电视广告",
    "py": "Diànshì guǎnggào",
    "vn": "quảng cáo trên tivi"
   },
   {
    "zh": "广告上说",
    "py": "Guǎnggào shàng shuō",
    "vn": "quảng cáo nói"
   }
  ],
  "patterns": [
   {
    "s": "广告 + 上 / 里 + 说……",
    "m": "Quảng cáo nói …"
   }
  ],
  "ex_zh": "不过咱们也不能只听广告说什么，还得看质量。",
  "ex_py": "Búguò zánmen yě bù néng zhǐ tīng guǎnggào shuō shénme, hái děi kàn zhìliàng.",
  "ex_vn": "Nhưng mình cũng không thể chỉ nghe quảng cáo nói gì, còn phải xem chất lượng.",
  "exList": [
   {
    "zh": "不过咱们也不能只听广告说什么，还得看质量。",
    "py": "Búguò zánmen yě bù néng zhǐ tīng guǎnggào shuō shénme, hái děi kàn zhìliàng.",
    "vn": "Nhưng mình cũng không thể chỉ nghe quảng cáo nói gì, còn phải xem chất lượng."
   },
   {
    "zh": "电视上的广告太多了。",
    "py": "Diànshì shàng de guǎnggào tài duō le.",
    "vn": "Quảng cáo trên tivi nhiều quá."
   }
  ],
  "hanzi": [
   {
    "c": "广",
    "p": "guǎng",
    "type": "象形字 · Chữ tượng hình",
    "st": 3,
    "ord": "丶 → 一 → 丿",
    "rad": "广 (nghiễm – mái nhà rộng)",
    "mean": "rộng, rộng lớn; (viết tắt) Quảng Đông, Quảng Châu",
    "tip": "Vẽ một mái nhà dựa vào vách núi, chỉ có mái che không có tường → nơi rộng rãi → rộng — 广场 (quảng trường), 广告, 广州.",
    "cf": "厂 chǎng (xưởng) — không có chấm trên; 庄 zhuāng — thêm 土 bên trong",
    "w": "广州 / 广场 / 广告"
   },
   {
    "c": "告",
    "p": "gào",
    "type": "上下结构 · Trên-dưới",
    "st": 7,
    "ord": "牛 (biến thể) trên → 口 (khẩu) dưới",
    "rad": "口 (khẩu – miệng)",
    "mean": "báo cho biết",
    "tip": "Bộ miệng 口 (nói ra) → BÁO CHO BIẾT, kết hợp 广(rộng khắp) thành 广告 = QUẢNG CÁO (báo rộng khắp cho mọi người biết).",
    "cf": "吉 (jí – \"may mắn\", không có 口 dưới cùng vị trí)",
    "w": "广告 / 告诉 / 报告"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Không phải những gì quảng cáo nói đều tin được.",
    "answer": "广告上说的不能都相信。",
    "answerPy": "Guǎnggào shàng shuō de bù néng dōu xiāngxìn.",
    "note": "Tân ngữ 广告上说的 đưa lên đầu câu.",
    "pair": "……不能都……"
   },
   {
    "promptLang": "vi",
    "prompt": "Tôi không phải xem quảng cáo mới mua, mà là bạn giới thiệu.",
    "answer": "我不是看了广告才买的，而是朋友介绍的。",
    "answerPy": "Wǒ bú shì kàn le guǎnggào cái mǎi de, érshì péngyou jièshào de.",
    "note": "Ôn 不是……而是…… (Bài 11 · điểm 3).",
    "pair": "不是……而是……"
   }
  ]
 },
 {
  "n": 20,
  "zh": "首先",
  "py": "shǒuxiān",
  "pos": "Phó từ",
  "vn": "trước hết, đầu tiên",
  "hv": "thủ tiên",
  "em": "1️⃣",
  "lesson": 2,
  "explain": [
   "Trước tiên, đầu tiên — mở đầu một trình tự (việc làm trước) hoặc nêu điều quan trọng nhất. Thường đi với 然后 / 其次 / 最后 (Bài 14 · điểm 2)."
  ],
  "usage": "首先……，然后 / 其次……，最后…… · 首先要…….",
  "collo": [
   "首先要",
   "首先感谢",
   "首先……然后……",
   "首先……其次……"
  ],
  "colloFull": [
   {
    "zh": "首先要",
    "py": "Shǒuxiān yào",
    "vn": "trước hết phải"
   },
   {
    "zh": "首先感谢",
    "py": "Shǒuxiān gǎnxiè",
    "vn": "trước hết cảm ơn"
   },
   {
    "zh": "首先……然后……",
    "py": "Shǒuxiān…… ránhòu……",
    "vn": "trước hết … sau đó …"
   },
   {
    "zh": "首先……其次……",
    "py": "Shǒuxiān…… qícì……",
    "vn": "thứ nhất … thứ hai …"
   }
  ],
  "patterns": [
   {
    "s": "首先 + V，然后 + V",
    "m": "Trước hết làm …, sau đó làm …"
   },
   {
    "s": "首先 (，) + câu",
    "m": "Đứng đầu câu, có thể có dấu phẩy"
   }
  ],
  "ex_zh": "对，首先看样子喜不喜欢，然后再看质量怎么样、价格合适不合适。",
  "ex_py": "Duì, shǒuxiān kàn yàngzi xǐ bu xǐhuan, ránhòu zài kàn zhìliàng zěnmeyàng, jiàgé héshì bù héshì.",
  "ex_vn": "Đúng, trước hết xem kiểu dáng có thích không, sau đó mới xem chất lượng thế nào, giá có hợp lý không.",
  "exList": [
   {
    "zh": "对，首先看样子喜不喜欢，然后再看质量怎么样、价格合适不合适。",
    "py": "Duì, shǒuxiān kàn yàngzi xǐ bu xǐhuan, ránhòu zài kàn zhìliàng zěnmeyàng, jiàgé héshì bù héshì.",
    "vn": "Đúng, trước hết xem kiểu dáng có thích không, sau đó mới xem chất lượng thế nào, giá có hợp lý không."
   },
   {
    "zh": "首先，我要感谢大家的帮助。",
    "py": "Shǒuxiān, wǒ yào gǎnxiè dàjiā de bāngzhù.",
    "vn": "Trước hết, tôi xin cảm ơn sự giúp đỡ của mọi người."
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
    "c": "先",
    "p": "xiān",
    "type": "会意字 · Chữ hội ý",
    "st": 6,
    "ord": "phẩy → ngang → sổ → ngang → phẩy → sổ cong móc",
    "rad": "儿 (nhân – người, ở dưới)",
    "mean": "trước",
    "tip": "Trên là bàn chân (biến thể của 止), dưới là người 儿: bàn chân bước lên trước người → trước. Ôn 先生 (HSK1 Bài 13).",
    "cf": "洗 xǐ (洗 – HSK2 Bài 3) — thêm 氵 bên trái",
    "w": "先 / 先生"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Chúng ta đi ăn cơm trước, sau đó đi xem phim.",
    "answer": "我们首先去吃饭，然后去看电影。",
    "answerPy": "Wǒmen shǒuxiān qù chīfàn, ránhòu qù kàn diànyǐng.",
    "note": "首先……，然后…… (Bài 14 · điểm 2).",
    "pair": "首先……然后……"
   },
   {
    "promptLang": "vi",
    "prompt": "Muốn học tốt tiếng Trung, trước hết phải nghe nhiều nói nhiều.",
    "answer": "要想学好中文，首先要多听多说。",
    "answerPy": "Yào xiǎng xuéhǎo Zhōngwén, shǒuxiān yào duō tīng duō shuō.",
    "note": "首先 + 要 + V.",
    "pair": "首先要……"
   }
  ]
 },
 {
  "n": 21,
  "zh": "牌子",
  "py": "páizi",
  "pos": "Danh từ",
  "vn": "nhãn hiệu, thương hiệu",
  "hv": "bài tử",
  "em": "🏷️",
  "lesson": 2,
  "explain": [
   "Nhãn hiệu sản phẩm (khẩu ngữ). Hỏi: 什么牌子的? = hãng gì? Chữ 子 đọc nhẹ."
  ],
  "usage": "这个牌子 · 什么牌子的 · 名牌子 / 大牌子 · 牌子很有名.",
  "collo": [
   "这个牌子",
   "什么牌子",
   "老牌子",
   "牌子很有名"
  ],
  "colloFull": [
   {
    "zh": "这个牌子",
    "py": "Zhège páizi",
    "vn": "nhãn hiệu này"
   },
   {
    "zh": "什么牌子",
    "py": "Shénme páizi",
    "vn": "hãng gì"
   },
   {
    "zh": "老牌子",
    "py": "Lǎo páizi",
    "vn": "thương hiệu lâu đời"
   },
   {
    "zh": "牌子很有名",
    "py": "Páizi hěn yǒumíng",
    "vn": "nhãn hiệu rất nổi tiếng"
   }
  ],
  "patterns": [
   {
    "s": "N + 是什么牌子的?",
    "m": "… là hãng gì?"
   }
  ],
  "ex_zh": "这个牌子质量很好，今天又降价，一双减300块。",
  "ex_py": "Zhège páizi zhìliàng hěn hǎo, jīntiān yòu jiàngjià, yì shuāng jiǎn 300 kuài.",
  "ex_vn": "Hãng này chất lượng rất tốt, hôm nay lại giảm giá, mỗi đôi giảm 300 tệ.",
  "exList": [
   {
    "zh": "这个牌子质量很好，今天又降价，一双减300块。",
    "py": "Zhège páizi zhìliàng hěn hǎo, jīntiān yòu jiàngjià, yì shuāng jiǎn 300 kuài.",
    "vn": "Hãng này chất lượng rất tốt, hôm nay lại giảm giá, mỗi đôi giảm 300 tệ."
   },
   {
    "zh": "你的手机是什么牌子的？",
    "py": "Nǐ de shǒujī shì shénme páizi de?",
    "vn": "Điện thoại của bạn hãng gì?"
   }
  ],
  "hanzi": [
   {
    "c": "牌",
    "p": "pái",
    "type": "左右结构 · Trái-phải",
    "st": 12,
    "ord": "片 trái → 卑 phải",
    "rad": "片 (phiến)",
    "mean": "thẻ, biển",
    "tip": "Miếng 片 + 卑 → tấm THẺ, BIỂN. 登机牌, 牌子 (nhãn hiệu), 名牌.",
    "cf": "片 (piàn – miếng)",
    "w": "登机牌 / 牌子 / 名牌"
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
    "prompt": "Chiếc áo khoác này là hãng gì?",
    "answer": "这件外套是什么牌子的？",
    "answerPy": "Zhè jiàn wàitào shì shénme páizi de?",
    "note": "是……的 + 什么牌子.",
    "pair": "什么牌子的"
   },
   {
    "promptLang": "vi",
    "prompt": "Hãng này tuy nổi tiếng nhưng giá cũng rất cao.",
    "answer": "这个牌子虽然有名，但价钱也很高。",
    "answerPy": "Zhège páizi suīrán yǒumíng, dàn jiàqián yě hěn gāo.",
    "note": "Ôn 虽然……但…… (HSK 3).",
    "pair": "虽然……但……"
   }
  ]
 },
 {
  "n": 22,
  "zh": "降价",
  "py": "jiàngjià",
  "pos": "Động từ",
  "vn": "giảm giá, hạ giá",
  "hv": "giáng giá",
  "em": "📉",
  "lesson": 2,
  "explain": [
   "Hạ giá bán xuống. Là động từ ly hợp (降 + 价): 降了价 / 降过价. Trái nghĩa: 涨价 (tăng giá)."
  ],
  "usage": "降价了 · 降价促销 · 等……降价 · 降价 + số tiền.",
  "collo": [
   "降价了",
   "降价促销",
   "等降价",
   "降价商品"
  ],
  "colloFull": [
   {
    "zh": "降价了",
    "py": "Jiàngjià le",
    "vn": "giảm giá rồi"
   },
   {
    "zh": "降价促销",
    "py": "Jiàngjià cùxiāo",
    "vn": "giảm giá khuyến mãi"
   },
   {
    "zh": "等降价",
    "py": "Děng jiàngjià",
    "vn": "chờ giảm giá"
   },
   {
    "zh": "降价商品",
    "py": "Jiàngjià shāngpǐn",
    "vn": "hàng giảm giá"
   }
  ],
  "patterns": [
   {
    "s": "N + 降价了",
    "m": "… giảm giá rồi"
   },
   {
    "s": "降价 ↔ 涨价",
    "m": "giảm giá ↔ tăng giá"
   }
  ],
  "ex_zh": "这个牌子质量很好，今天又降价，一双减300块。",
  "ex_py": "Zhège páizi zhìliàng hěn hǎo, jīntiān yòu jiàngjià, yì shuāng jiǎn 300 kuài.",
  "ex_vn": "Hãng này chất lượng rất tốt, hôm nay lại giảm giá, mỗi đôi giảm 300 tệ.",
  "exList": [
   {
    "zh": "这个牌子质量很好，今天又降价，一双减300块。",
    "py": "Zhège páizi zhìliàng hěn hǎo, jīntiān yòu jiàngjià, yì shuāng jiǎn 300 kuài.",
    "vn": "Hãng này chất lượng rất tốt, hôm nay lại giảm giá, mỗi đôi giảm 300 tệ."
   },
   {
    "zh": "等这件外套降价了我再买。",
    "py": "Děng zhè jiàn wàitào jiàngjià le wǒ zài mǎi.",
    "vn": "Đợi chiếc áo khoác này giảm giá rồi tôi mới mua."
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
   },
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
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Khi bạn muốn mua đồ, bạn có đợi nó giảm giá mới mua không?",
    "answer": "当你想买一个东西时，会不会等它降价的时候才买？",
    "answerPy": "Dāng nǐ xiǎng mǎi yí gè dōngxi shí, huì bu huì děng tā jiàngjià de shíhou cái mǎi?",
    "note": "Câu hỏi phần Khởi động của sách; 才 = mới.",
    "pair": "等……降价……才买"
   },
   {
    "promptLang": "vi",
    "prompt": "Dù có giảm giá tôi cũng không mua, vì tôi không cần.",
    "answer": "即使降价，我也不买，因为我不需要。",
    "answerPy": "Jíshǐ jiàngjià, wǒ yě bù mǎi, yīnwèi wǒ bù xūyào.",
    "note": "Ôn 即使……也…… (Bài 11 · điểm 1).",
    "pair": "即使……也……"
   }
  ]
 },
 {
  "n": 23,
  "zh": "样式",
  "py": "yàngshì",
  "pos": "Danh từ",
  "vn": "kiểu dáng, mẫu mã",
  "hv": "dạng thức",
  "em": "👟",
  "lesson": 2,
  "explain": [
   "Hình dáng, kiểu thiết kế bên ngoài của quần áo, giày, đồ dùng."
  ],
  "usage": "样式很新 · 样式好看 · 新样式 · 各种样式.",
  "collo": [
   "样式很新",
   "样式好看",
   "各种样式",
   "样式简单"
  ],
  "colloFull": [
   {
    "zh": "样式很新",
    "py": "Yàngshì hěn xīn",
    "vn": "kiểu dáng mới"
   },
   {
    "zh": "样式好看",
    "py": "Yàngshì hǎokàn",
    "vn": "kiểu dáng đẹp"
   },
   {
    "zh": "各种样式",
    "py": "Gèzhǒng yàngshì",
    "vn": "đủ kiểu dáng"
   },
   {
    "zh": "样式简单",
    "py": "Yàngshì jiǎndān",
    "vn": "kiểu dáng đơn giản"
   }
  ],
  "patterns": [
   {
    "s": "N + 的样式 + adj",
    "m": "Kiểu dáng của … thế nào"
   }
  ],
  "ex_zh": "你看，这个鞋的样式很新，价钱也不高。",
  "ex_py": "Nǐ kàn, zhège xié de yàngshì hěn xīn, jiàqián yě bù gāo.",
  "ex_vn": "Cậu xem, kiểu dáng đôi giày này rất mới, giá lại không cao.",
  "exList": [
   {
    "zh": "你看，这个鞋的样式很新，价钱也不高。",
    "py": "Nǐ kàn, zhège xié de yàngshì hěn xīn, jiàqián yě bù gāo.",
    "vn": "Cậu xem, kiểu dáng đôi giày này rất mới, giá lại không cao."
   },
   {
    "zh": "这件外套样式不错，就是颜色有点儿深。",
    "py": "Zhè jiàn wàitào yàngshì búcuò, jiùshì yánsè yǒudiǎnr shēn.",
    "vn": "Chiếc áo khoác này kiểu dáng được, chỉ có màu hơi đậm."
   }
  ],
  "hanzi": [
   {
    "c": "样",
    "p": "yàng",
    "type": "左右结构 · Trái-phải (giản thể)",
    "st": 10,
    "ord": "木 (mộc) trái → 羊 (dương) phải",
    "rad": "木 (mộc – cây)",
    "mean": "kiểu mẫu, dáng vẻ",
    "tip": "Bộ cây 木 (khuôn mẫu bằng gỗ) + 羊(biểu âm) → KHUÔN MẪU để tạo hình, mở rộng thành KIỂU DÁNG, DÁNG VẺ.",
    "cf": "洋 (yáng – \"đại dương\", bộ 氵\")",
    "w": "样子 / 一样 / 怎么样"
   },
   {
    "c": "式",
    "p": "shì",
    "type": "半包围结构 · Nửa bao quanh",
    "st": 6,
    "ord": "弋 bao → 工 trong",
    "rad": "弋 (dặc)",
    "mean": "kiểu",
    "tip": "工 + 弋 → khuôn mẫu → THỨC, KIỂU. 方式 = phương thức; 正式 = chính thức; 样式.",
    "cf": "试 (shì – thử)",
    "w": "方式 / 正式 / 样式"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Kiểu dáng đôi giày này rất mới.",
    "answer": "这双鞋的样式很新。",
    "answerPy": "Zhè shuāng xié de yàngshì hěn xīn.",
    "note": "双 là lượng từ của giày.",
    "pair": "样式很新"
   },
   {
    "promptLang": "vi",
    "prompt": "Áo khoác này kiểu dáng thì đẹp đấy, nhưng hơi đắt.",
    "answer": "这件外套样式好看是好看，就是有点儿贵。",
    "answerPy": "Zhè jiàn wàitào yàngshì hǎokàn shì hǎokàn, jiùshì yǒudiǎnr guì.",
    "note": "Ôn ……×是×，就是…… (Bài 3 · điểm 1).",
    "pair": "好看是好看，就是……"
   }
  ]
 },
 {
  "n": 24,
  "zh": "价钱",
  "py": "jiàqián",
  "pos": "Danh từ",
  "vn": "giá tiền, giá cả",
  "hv": "giá tiền",
  "em": "💰",
  "lesson": 2,
  "explain": [
   "Số tiền phải trả để mua một món đồ — khẩu ngữ hơn 价格 (Bài 2)."
  ],
  "usage": "价钱不高 · 价钱合适 · 讲价钱 · 价钱贵 / 便宜.",
  "collo": [
   "价钱不高",
   "价钱合适",
   "价钱便宜",
   "问价钱"
  ],
  "colloFull": [
   {
    "zh": "价钱不高",
    "py": "Jiàqián bù gāo",
    "vn": "giá không cao"
   },
   {
    "zh": "价钱合适",
    "py": "Jiàqián héshì",
    "vn": "giá hợp lý"
   },
   {
    "zh": "价钱便宜",
    "py": "Jiàqián piányi",
    "vn": "giá rẻ"
   },
   {
    "zh": "问价钱",
    "py": "Wèn jiàqián",
    "vn": "hỏi giá"
   }
  ],
  "patterns": [
   {
    "s": "价钱 + 高 / 低 / 贵 / 便宜 / 合适",
    "m": "Giá cao / thấp / đắt / rẻ / hợp lý"
   },
   {
    "s": "价钱 ≈ 价格",
    "m": "价钱 khẩu ngữ, 价格 trang trọng hơn"
   }
  ],
  "ex_zh": "你看，这个鞋的样式很新，价钱也不高。",
  "ex_py": "Nǐ kàn, zhège xié de yàngshì hěn xīn, jiàqián yě bù gāo.",
  "ex_vn": "Cậu xem, kiểu dáng đôi giày này rất mới, giá lại không cao.",
  "exList": [
   {
    "zh": "你看，这个鞋的样式很新，价钱也不高。",
    "py": "Nǐ kàn, zhège xié de yàngshì hěn xīn, jiàqián yě bù gāo.",
    "vn": "Cậu xem, kiểu dáng đôi giày này rất mới, giá lại không cao."
   },
   {
    "zh": "价钱合适的话，我就买。",
    "py": "Jiàqián héshì de huà, wǒ jiù mǎi.",
    "vn": "Nếu giá hợp lý thì tôi mua."
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
    "c": "钱",
    "p": "qián",
    "type": "左右结构 · Trái-phải",
    "st": 10,
    "ord": "钅(kim) trái → 戋(biến thể) phải",
    "rad": "钅 (kim – kim loại)",
    "mean": "tiền",
    "tip": "钅(kim loại, đúc tiền xu) → TIỀN.",
    "cf": "浅 (qiǎn – \"nông, cạn\")",
    "w": "多少钱 / 花钱"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Đôi giày này giá không cao, chất lượng lại tốt.",
    "answer": "这双鞋价钱不高，质量也好。",
    "answerPy": "Zhè shuāng xié jiàqián bù gāo, zhìliàng yě hǎo.",
    "note": "Hai vị ngữ nối bằng 也.",
    "pair": "价钱不高"
   },
   {
    "promptLang": "vi",
    "prompt": "Giá tốt như vậy, tôi không thể không mua.",
    "answer": "这么好的价钱，我不能不买。",
    "answerPy": "Zhème hǎo de jiàqián, wǒ bù néng bù mǎi.",
    "note": "Ôn phủ định kép 不能不 (Bài 12 · điểm 2).",
    "pair": "不能不"
   }
  ]
 },
 {
  "n": 25,
  "zh": "商业",
  "py": "shāngyè",
  "pos": "Danh từ",
  "vn": "thương mại, kinh doanh",
  "hv": "thương nghiệp",
  "em": "🏙️",
  "lesson": 3,
  "explain": [
   "Ngành mua bán hàng hóa. 商业区 = khu thương mại (nhiều cửa hàng, trung tâm mua sắm)."
  ],
  "usage": "商业区 · 商业中心 · 商业街 · 商业管理.",
  "collo": [
   "商业区",
   "商业中心",
   "商业街",
   "商业管理"
  ],
  "colloFull": [
   {
    "zh": "商业区",
    "py": "Shāngyè qū",
    "vn": "khu thương mại"
   },
   {
    "zh": "商业中心",
    "py": "Shāngyè zhōngxīn",
    "vn": "trung tâm thương mại"
   },
   {
    "zh": "商业街",
    "py": "Shāngyè jiē",
    "vn": "phố thương mại"
   },
   {
    "zh": "商业管理",
    "py": "Shāngyè guǎnlǐ",
    "vn": "quản lý kinh doanh"
   }
  ],
  "patterns": [
   {
    "s": "商业 + 区 / 街 / 中心",
    "m": "Khu / phố / trung tâm thương mại"
   }
  ],
  "ex_zh": "李文的朋友徐前在商业区开了家小店，专门卖年轻人喜欢的东西。",
  "ex_py": "Lǐ Wén de péngyou Xú Qián zài shāngyè qū kāi le jiā xiǎodiàn, zhuānmén mài niánqīngrén xǐhuan de dōngxi.",
  "ex_vn": "Bạn của Lý Văn là Từ Tiền mở một cửa hàng nhỏ ở khu thương mại, chuyên bán những thứ người trẻ thích.",
  "exList": [
   {
    "zh": "李文的朋友徐前在商业区开了家小店，专门卖年轻人喜欢的东西。",
    "py": "Lǐ Wén de péngyou Xú Qián zài shāngyè qū kāi le jiā xiǎodiàn, zhuānmén mài niánqīngrén xǐhuan de dōngxi.",
    "vn": "Bạn của Lý Văn là Từ Tiền mở một cửa hàng nhỏ ở khu thương mại, chuyên bán những thứ người trẻ thích."
   },
   {
    "zh": "这条街是城市的商业中心。",
    "py": "Zhè tiáo jiē shì chéngshì de shāngyè zhōngxīn.",
    "vn": "Con phố này là trung tâm thương mại của thành phố."
   }
  ],
  "hanzi": [
   {
    "c": "商",
    "p": "shāng",
    "type": "上下结构 · Trên-dưới",
    "st": 11,
    "ord": "亠+丷 trên → 冂+八+口 dưới",
    "rad": "口 (khẩu)",
    "mean": "buôn bán, bàn bạc",
    "tip": "Nghĩa gốc là BUÔN BÁN (thương nhân phải nói 口 để mặc cả) → mở rộng thành BÀN BẠC, kết hợp 量(cân nhắc) thành 商量 = THƯƠNG LƯỢNG.",
    "cf": "高 (gāo – \"cao\", tự dạng gần giống)",
    "w": "商量 / 商店 / 商人"
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
    "prompt": "Khu thương mại vào cuối tuần rất náo nhiệt.",
    "answer": "周末的商业区非常热闹。",
    "answerPy": "Zhōumò de shāngyè qū fēicháng rènao.",
    "note": "商业区 làm chủ ngữ.",
    "pair": "商业区"
   },
   {
    "promptLang": "vi",
    "prompt": "Anh trai tôi học chuyên ngành quản lý kinh doanh.",
    "answer": "我哥哥学的是商业管理专业。",
    "answerPy": "Wǒ gēge xué de shì shāngyè guǎnlǐ zhuānyè.",
    "note": "Ôn 专业 (Bài 1); câu 是 nhấn mạnh.",
    "pair": "学的是……专业"
   }
  ]
 },
 {
  "n": 26,
  "zh": "商品",
  "py": "shāngpǐn",
  "pos": "Danh từ",
  "vn": "hàng hóa, sản phẩm (để bán)",
  "hv": "thương phẩm",
  "em": "🛒",
  "lesson": 3,
  "explain": [
   "Đồ vật được làm ra để bán. Từ trang trọng hơn 东西 khi nói về hàng bán trong cửa hàng."
  ],
  "usage": "商品种类 · 商品介绍 · 新商品 · 降价商品.",
  "collo": [
   "商品种类",
   "商品介绍",
   "新商品",
   "降价商品"
  ],
  "colloFull": [
   {
    "zh": "商品种类",
    "py": "Shāngpǐn zhǒnglèi",
    "vn": "chủng loại hàng hóa"
   },
   {
    "zh": "商品介绍",
    "py": "Shāngpǐn jièshào",
    "vn": "giới thiệu sản phẩm"
   },
   {
    "zh": "新商品",
    "py": "Xīn shāngpǐn",
    "vn": "hàng mới"
   },
   {
    "zh": "降价商品",
    "py": "Jiàngjià shāngpǐn",
    "vn": "hàng giảm giá"
   }
  ],
  "patterns": [
   {
    "s": "商品 + 种类 / 介绍 / 质量",
    "m": "Chủng loại / mô tả / chất lượng hàng"
   }
  ],
  "ex_zh": "他的店里商品种类不少。",
  "ex_py": "Tā de diàn lǐ shāngpǐn zhǒnglèi bùshǎo.",
  "ex_vn": "Hàng hóa trong tiệm của anh ấy có không ít chủng loại.",
  "exList": [
   {
    "zh": "他的店里商品种类不少。",
    "py": "Tā de diàn lǐ shāngpǐn zhǒnglèi bùshǎo.",
    "vn": "Hàng hóa trong tiệm của anh ấy có không ít chủng loại."
   },
   {
    "zh": "超市里的商品真多，什么都有。",
    "py": "Chāoshì lǐ de shāngpǐn zhēn duō, shénme dōu yǒu.",
    "vn": "Hàng hóa trong siêu thị nhiều thật, cái gì cũng có."
   }
  ],
  "hanzi": [
   {
    "c": "商",
    "p": "shāng",
    "type": "上下结构 · Trên-dưới",
    "st": 11,
    "ord": "亠+丷 trên → 冂+八+口 dưới",
    "rad": "口 (khẩu)",
    "mean": "buôn bán, bàn bạc",
    "tip": "Nghĩa gốc là BUÔN BÁN (thương nhân phải nói 口 để mặc cả) → mở rộng thành BÀN BẠC, kết hợp 量(cân nhắc) thành 商量 = THƯƠNG LƯỢNG.",
    "cf": "高 (gāo – \"cao\", tự dạng gần giống)",
    "w": "商量 / 商店 / 商人"
   },
   {
    "c": "品",
    "p": "pǐn",
    "type": "会意字 · Chữ hội ý",
    "st": 9,
    "ord": "口 (trên) → 口 (dưới trái) → 口 (dưới phải)",
    "rad": "口 (khẩu – miệng)",
    "mean": "vật phẩm, hàng hóa; phẩm chất",
    "tip": "Ba cái miệng 口 xếp chồng: nhiều người cùng nếm, bình phẩm → đồ vật được đánh giá, hàng hóa — 产品, 食品, 商品.",
    "cf": "器 qì — bốn 口 và 犬 ở giữa; 晶 jīng — ba chữ 日",
    "w": "产品 / 食品 / 商品"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Trước khi mua phải xem kỹ phần giới thiệu sản phẩm.",
    "answer": "买之前要仔细看商品介绍。",
    "answerPy": "Mǎi zhīqián yào zǐxì kàn shāngpǐn jièshào.",
    "note": "仔细 + V (Bài 14).",
    "pair": "仔细看……"
   },
   {
    "promptLang": "vi",
    "prompt": "Dù là hàng gì cũng phải xem chất lượng.",
    "answer": "无论什么商品，都要看质量。",
    "answerPy": "Wúlùn shénme shāngpǐn, dōu yào kàn zhìliàng.",
    "note": "Ôn 无论……都…… (Bài 12 · điểm 3).",
    "pair": "无论……都……"
   }
  ]
 },
 {
  "n": 27,
  "zh": "种类",
  "py": "zhǒnglèi",
  "pos": "Danh từ",
  "vn": "chủng loại, loại",
  "hv": "chủng loại",
  "em": "🗂️",
  "lesson": 3,
  "explain": [
   "Các loại khác nhau của một nhóm sự vật: 种类很多 / 不少 = nhiều loại."
  ],
  "usage": "种类很多 · 种类不少 · 商品种类 · 种类丰富.",
  "collo": [
   "种类很多",
   "种类丰富",
   "商品种类",
   "不同种类"
  ],
  "colloFull": [
   {
    "zh": "种类很多",
    "py": "Zhǒnglèi hěn duō",
    "vn": "nhiều chủng loại"
   },
   {
    "zh": "种类丰富",
    "py": "Zhǒnglèi fēngfù",
    "vn": "chủng loại phong phú"
   },
   {
    "zh": "商品种类",
    "py": "Shāngpǐn zhǒnglèi",
    "vn": "chủng loại hàng"
   },
   {
    "zh": "不同种类",
    "py": "Bùtóng zhǒnglèi",
    "vn": "các loại khác nhau"
   }
  ],
  "patterns": [
   {
    "s": "N + 的种类 + 很多 / 丰富",
    "m": "… có nhiều loại"
   }
  ],
  "ex_zh": "他的店里商品种类不少，既有几十年前的老游戏机，也有最近流行的盲盒等等。",
  "ex_py": "Tā de diàn lǐ shāngpǐn zhǒnglèi bùshǎo, jì yǒu jǐshí nián qián de lǎo yóuxì jī, yě yǒu zuìjìn liúxíng de mánghé děngděng.",
  "ex_vn": "Tiệm của anh ấy có không ít loại hàng, vừa có máy chơi game cũ từ mấy chục năm trước, vừa có hộp mù đang thịnh hành gần đây.",
  "exList": [
   {
    "zh": "他的店里商品种类不少，既有几十年前的老游戏机，也有最近流行的盲盒等等。",
    "py": "Tā de diàn lǐ shāngpǐn zhǒnglèi bùshǎo, jì yǒu jǐshí nián qián de lǎo yóuxì jī, yě yǒu zuìjìn liúxíng de mánghé děngděng.",
    "vn": "Tiệm của anh ấy có không ít loại hàng, vừa có máy chơi game cũ từ mấy chục năm trước, vừa có hộp mù đang thịnh hành gần đây."
   },
   {
    "zh": "这家店水果的种类很多。",
    "py": "Zhè jiā diàn shuǐguǒ de zhǒnglèi hěn duō.",
    "vn": "Tiệm này có rất nhiều loại trái cây."
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
   },
   {
    "c": "类",
    "p": "lèi",
    "type": "会意字 · Chữ hội ý",
    "st": 9,
    "ord": "米 → 大",
    "rad": "米 (mễ – gạo)",
    "mean": "loại, loài; giống nhau",
    "tip": "Gạo (米) + 大: hạt gạo hạt to được xếp riêng theo từng nhóm giống nhau → loại — 分类 (phân loại), 种类, 人类.",
    "cf": "米 mǐ (gạo) — không có 大; 粪 fèn — dưới là 共",
    "w": "分类 / 种类 / 人类"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Ở đây chủng loại trà rất nhiều.",
    "answer": "这里茶叶的种类很多。",
    "answerPy": "Zhèli cháyè de zhǒnglèi hěn duō.",
    "note": "N + 的种类 + 很多.",
    "pair": "种类很多"
   },
   {
    "promptLang": "vi",
    "prompt": "Sách trong thư viện vừa nhiều loại vừa mới.",
    "answer": "图书馆里的书既种类多，又很新。",
    "answerPy": "Túshūguǎn lǐ de shū jì zhǒnglèi duō, yòu hěn xīn.",
    "note": "Ôn 既……又…… (Bài 4 · điểm 3).",
    "pair": "既……又……"
   }
  ]
 },
 {
  "n": 28,
  "zh": "盲盒",
  "py": "mánghé",
  "pos": "Danh từ",
  "vn": "hộp mù (hộp quà bí ẩn)",
  "hv": "manh hạp",
  "em": "🎁",
  "lesson": 3,
  "explain": [
   "Hộp đựng đồ chơi / quà mà người mua không biết bên trong là mẫu nào cho đến khi mở ra (盲 = mù, 盒 = hộp). Rất được giới trẻ Trung Quốc ưa chuộng."
  ],
  "usage": "买盲盒 · 开盲盒 · 流行的盲盒 · 盲盒卖到缺货.",
  "collo": [
   "买盲盒",
   "开盲盒",
   "流行的盲盒",
   "盲盒店"
  ],
  "colloFull": [
   {
    "zh": "买盲盒",
    "py": "Mǎi mánghé",
    "vn": "mua hộp mù"
   },
   {
    "zh": "开盲盒",
    "py": "Kāi mánghé",
    "vn": "mở hộp mù"
   },
   {
    "zh": "流行的盲盒",
    "py": "Liúxíng de mánghé",
    "vn": "hộp mù đang thịnh hành"
   },
   {
    "zh": "盲盒店",
    "py": "Mánghé diàn",
    "vn": "tiệm hộp mù"
   }
  ],
  "patterns": [
   {
    "s": "开 + 盲盒",
    "m": "Mở hộp mù (cũng dùng nghĩa bóng: không biết trước kết quả)"
   }
  ],
  "ex_zh": "前段时间刚进的盲盒很快就卖到了缺货。",
  "ex_py": "Qián duàn shíjiān gāng jìn de mánghé hěn kuài jiù mài dào le quē huò.",
  "ex_vn": "Lô hộp mù vừa nhập về thời gian trước bán nhanh đến mức hết hàng.",
  "exList": [
   {
    "zh": "前段时间刚进的盲盒很快就卖到了缺货。",
    "py": "Qián duàn shíjiān gāng jìn de mánghé hěn kuài jiù mài dào le quē huò.",
    "vn": "Lô hộp mù vừa nhập về thời gian trước bán nhanh đến mức hết hàng."
   },
   {
    "zh": "很多年轻人都喜欢买盲盒。",
    "py": "Hěn duō niánqīngrén dōu xǐhuan mǎi mánghé.",
    "vn": "Nhiều người trẻ thích mua hộp mù."
   }
  ],
  "hanzi": [
   {
    "c": "盲",
    "p": "máng",
    "type": "形声字 · Chữ hình thanh",
    "st": 8,
    "ord": "亡 → 目",
    "rad": "目 (mục – mắt)",
    "mean": "mù, không nhìn thấy",
    "tip": "Mắt (目) đã “mất” (亡, cũng chỉ âm wáng → máng) → không nhìn thấy → mù — 盲盒 = hộp “mù”, không thấy bên trong.",
    "cf": "忙 máng (bận) — bên trái là 忄; 盒 hé (hộp) — trên là 合, dưới là 皿",
    "w": "盲盒 / 盲人 / 色盲"
   },
   {
    "c": "盒",
    "p": "hé",
    "type": "上下结构 · Trên-dưới",
    "st": 11,
    "ord": "合 trên → 皿 dưới",
    "rad": "皿 (mãnh)",
    "mean": "hộp",
    "tip": "合(đóng lại, khớp) + 皿(đồ đựng) → đồ đựng có nắp ĐÓNG KHỚP → HỘP.",
    "cf": "盆 (pén – chậu)",
    "w": "盒子 / 饭盒 / 一盒"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Trong hộp mù rốt cuộc là gì, trước khi mở thì ai cũng không biết.",
    "answer": "盲盒里究竟是什么，打开以前谁都不知道。",
    "answerPy": "Mánghé lǐ jiūjìng shì shénme, dǎkāi yǐqián shuí dōu bù zhīdao.",
    "note": "究竟 (Bài 14 · điểm 1) + đại từ nghi vấn phiếm chỉ 谁都不 (HSK 3).",
    "pair": "究竟是什么"
   },
   {
    "promptLang": "vi",
    "prompt": "Em gái tôi mua hộp mù không phải để chơi, mà vì thấy lúc mở ra rất vui.",
    "answer": "我妹妹买盲盒不是为了玩儿，而是觉得打开的时候很开心。",
    "answerPy": "Wǒ mèimei mǎi mánghé bú shì wèile wánr, érshì juéde dǎkāi de shíhou hěn kāixīn.",
    "note": "Ôn 不是……而是…… (Bài 11 · điểm 3).",
    "pair": "不是……而是……"
   }
  ]
 },
 {
  "n": 29,
  "zh": "缺",
  "py": "quē",
  "pos": "Động từ",
  "vn": "thiếu, hết",
  "hv": "khuyết",
  "em": "🕳️",
  "lesson": 3,
  "explain": [
   "Không có đủ, thiếu. 缺货 = hết hàng / thiếu hàng; 卖到了缺货 = bán đến mức hết hàng."
  ],
  "usage": "缺货 · 缺人 · 缺钱 · 缺 + 什么 · 缺不了.",
  "collo": [
   "缺货",
   "缺人",
   "缺钱",
   "什么都不缺"
  ],
  "colloFull": [
   {
    "zh": "缺货",
    "py": "Quē huò",
    "vn": "hết hàng"
   },
   {
    "zh": "缺人",
    "py": "Quē rén",
    "vn": "thiếu người"
   },
   {
    "zh": "缺钱",
    "py": "Quē qián",
    "vn": "thiếu tiền"
   },
   {
    "zh": "什么都不缺",
    "py": "Shénme dōu bù quē",
    "vn": "không thiếu thứ gì"
   }
  ],
  "patterns": [
   {
    "s": "缺 + N",
    "m": "Thiếu …"
   },
   {
    "s": "N + 缺货",
    "m": "… hết hàng"
   }
  ],
  "ex_zh": "前段时间刚进的盲盒很快就卖到了缺货。",
  "ex_py": "Qián duàn shíjiān gāng jìn de mánghé hěn kuài jiù mài dào le quē huò.",
  "ex_vn": "Lô hộp mù vừa nhập về thời gian trước bán nhanh đến mức hết hàng.",
  "exList": [
   {
    "zh": "前段时间刚进的盲盒很快就卖到了缺货。",
    "py": "Qián duàn shíjiān gāng jìn de mánghé hěn kuài jiù mài dào le quē huò.",
    "vn": "Lô hộp mù vừa nhập về thời gian trước bán nhanh đến mức hết hàng."
   },
   {
    "zh": "我们公司现在很缺人。",
    "py": "Wǒmen gōngsī xiànzài hěn quē rén.",
    "vn": "Công ty chúng tôi bây giờ rất thiếu người."
   }
  ],
  "hanzi": [
   {
    "c": "缺",
    "p": "quē",
    "type": "左右结构 · Trái-phải",
    "st": 10,
    "ord": "缶 (phẫu) trái → 夬 (quải) phải",
    "rad": "缶 (phẫu – đồ sành sứ)",
    "mean": "thiếu, khuyết",
    "tip": "Bộ 缶 (đồ gốm) bị 夬 (cắt, khuyết một góc) → đồ gốm bị SỨT MẺ, mở rộng thành THIẾU, KHUYẾT.",
    "cf": "缺 dễ nhầm với 铁 (tiě – \"sắt\", bộ kim loại khác)",
    "w": "缺点 / 缺少 / 缺席"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Chiếc điện thoại tôi muốn mua hiện đang hết hàng.",
    "answer": "我想买的那个手机现在缺货。",
    "answerPy": "Wǒ xiǎng mǎi de nàge shǒujī xiànzài quē huò.",
    "note": "缺货 = hết hàng (bài tập chọn từ của sách).",
    "pair": "缺货"
   },
   {
    "promptLang": "vi",
    "prompt": "Làm việc này không thể thiếu sự giúp đỡ của bạn.",
    "answer": "做这件事缺不了你的帮助。",
    "answerPy": "Zuò zhè jiàn shì quē bu le nǐ de bāngzhù.",
    "note": "Ôn bổ ngữ khả năng V + 不 + 了 (Bài 4 · điểm 1).",
    "pair": "缺不了"
   }
  ]
 },
 {
  "n": 30,
  "zh": "许多",
  "py": "xǔduō",
  "pos": "Số từ",
  "vn": "nhiều, rất nhiều",
  "hv": "hứa đa",
  "em": "➕",
  "lesson": 3,
  "explain": [
   "Rất nhiều (văn viết hơn 很多). Đứng trước danh từ: 许多人, 许多事情; có thể thêm 的: 许多的问题."
  ],
  "usage": "许多 + N · 许多年轻人 · 有许多…….",
  "collo": [
   "许多人",
   "许多年轻人",
   "许多事情",
   "许多变化"
  ],
  "colloFull": [
   {
    "zh": "许多人",
    "py": "Xǔduō rén",
    "vn": "nhiều người"
   },
   {
    "zh": "许多年轻人",
    "py": "Xǔduō niánqīngrén",
    "vn": "nhiều người trẻ"
   },
   {
    "zh": "许多事情",
    "py": "Xǔduō shìqing",
    "vn": "nhiều việc"
   },
   {
    "zh": "许多变化",
    "py": "Xǔduō biànhuà",
    "vn": "nhiều thay đổi"
   }
  ],
  "patterns": [
   {
    "s": "许多 + N",
    "m": "Nhiều … (≈ 很多, văn viết hơn)"
   }
  ],
  "ex_zh": "许多年轻人表示，在徐前的店里能感受到快乐。",
  "ex_py": "Xǔduō niánqīngrén biǎoshì, zài Xú Qián de diàn lǐ néng gǎnshòu dào kuàilè.",
  "ex_vn": "Nhiều bạn trẻ cho biết ở tiệm của Từ Tiền họ cảm nhận được niềm vui.",
  "exList": [
   {
    "zh": "许多年轻人表示，在徐前的店里能感受到快乐。",
    "py": "Xǔduō niánqīngrén biǎoshì, zài Xú Qián de diàn lǐ néng gǎnshòu dào kuàilè.",
    "vn": "Nhiều bạn trẻ cho biết ở tiệm của Từ Tiền họ cảm nhận được niềm vui."
   },
   {
    "zh": "许多人都喜欢在网上买东西。",
    "py": "Xǔduō rén dōu xǐhuan zài wǎngshang mǎi dōngxi.",
    "vn": "Rất nhiều người thích mua đồ trên mạng."
   }
  ],
  "hanzi": [
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
   },
   {
    "c": "多",
    "p": "duō",
    "type": "会意字 · Chữ hội ý",
    "st": 6,
    "ord": "夕 → 夕",
    "rad": "夕 (tịch – buổi tối)",
    "mean": "nhiều",
    "tip": "Hai chữ 夕 chồng lên nhau: hết đêm này sang đêm khác → nhiều. 好多 = 很多 (好 ở đây = rất, như 好久 – HSK3 Bài 2).",
    "cf": "名 míng (名字) — dưới là 口",
    "w": "好多 / 很多 / 多少"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Ở đây có rất nhiều sách tôi chưa đọc.",
    "answer": "这里有许多我没看过的书。",
    "answerPy": "Zhèli yǒu xǔduō wǒ méi kàn guò de shū.",
    "note": "许多 + định ngữ + N.",
    "pair": "有许多……"
   },
   {
    "promptLang": "vi",
    "prompt": "Bao nhiêu năm trôi qua, quê hương đã có nhiều thay đổi.",
    "answer": "这么多年过去了，家乡有了许多变化。",
    "answerPy": "Zhème duō nián guòqu le, jiāxiāng yǒu le xǔduō biànhuà.",
    "note": "有了 + 许多 + 变化.",
    "pair": "许多变化"
   }
  ]
 },
 {
  "n": 31,
  "zh": "表示",
  "py": "biǎoshì",
  "pos": "Động từ",
  "vn": "bày tỏ, cho biết, tỏ ý",
  "hv": "biểu thị",
  "em": "💬",
  "lesson": 3,
  "explain": [
   "Nói ra / thể hiện suy nghĩ, thái độ: ……表示，…… = … cho biết rằng …; 表示感谢 / 支持 = bày tỏ lòng cảm ơn / sự ủng hộ."
  ],
  "usage": "表示 + 感谢 / 支持 / 同意 · Ai + 表示，……",
  "collo": [
   "表示感谢",
   "表示支持",
   "表示同意",
   "表示欢迎"
  ],
  "colloFull": [
   {
    "zh": "表示感谢",
    "py": "Biǎoshì gǎnxiè",
    "vn": "bày tỏ lòng cảm ơn"
   },
   {
    "zh": "表示支持",
    "py": "Biǎoshì zhīchí",
    "vn": "tỏ ý ủng hộ"
   },
   {
    "zh": "表示同意",
    "py": "Biǎoshì tóngyì",
    "vn": "tỏ ý đồng ý"
   },
   {
    "zh": "表示欢迎",
    "py": "Biǎoshì huānyíng",
    "vn": "bày tỏ sự hoan nghênh"
   }
  ],
  "patterns": [
   {
    "s": "Ai + 表示，+ nội dung",
    "m": "Ai cho biết rằng …"
   },
   {
    "s": "表示 + 感谢 / 支持 / 同意",
    "m": "Bày tỏ …"
   }
  ],
  "ex_zh": "许多年轻人表示，在徐前的店里能感受到快乐。",
  "ex_py": "Xǔduō niánqīngrén biǎoshì, zài Xú Qián de diàn lǐ néng gǎnshòu dào kuàilè.",
  "ex_vn": "Nhiều bạn trẻ cho biết ở tiệm của Từ Tiền họ cảm nhận được niềm vui.",
  "exList": [
   {
    "zh": "许多年轻人表示，在徐前的店里能感受到快乐。",
    "py": "Xǔduō niánqīngrén biǎoshì, zài Xú Qián de diàn lǐ néng gǎnshòu dào kuàilè.",
    "vn": "Nhiều bạn trẻ cho biết ở tiệm của Từ Tiền họ cảm nhận được niềm vui."
   },
   {
    "zh": "他表示一定会按时完成工作。",
    "py": "Tā biǎoshì yídìng huì ànshí wánchéng gōngzuò.",
    "vn": "Anh ấy cho biết nhất định sẽ hoàn thành công việc đúng hạn."
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
    "c": "示",
    "p": "shì",
    "type": "象形字 · Chữ tượng hình",
    "st": 5,
    "ord": "二 → 小",
    "rad": "示 (kỳ – thần, chỉ bảo)",
    "mean": "chỉ ra, cho thấy, bày tỏ",
    "tip": "Hình bàn thờ đá (二 là mặt bàn, 小 là chân và các giọt rượu cúng) — thần linh “cho người ta thấy” điềm báo → chỉ ra, bày tỏ — 表示, 显示. Khi làm bộ bên trái viết thành 礻 (礼, 祝).",
    "cf": "宗 zōng (tông) — trên có 宀; 票 piào (vé) — trên là 覀",
    "w": "表示 / 显示 / 提示"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Bác sĩ Cao cho biết vài ngày nữa nếu không có vấn đề gì thì có thể xuất viện.",
    "answer": "高医生表示，过几天如果没什么问题就可以出院了。",
    "answerPy": "Gāo yīshēng biǎoshì, guò jǐ tiān rúguǒ méi shénme wèntí jiù kěyǐ chūyuàn le.",
    "note": "Câu trong bài tập chọn từ của sách.",
    "pair": "……表示，……"
   },
   {
    "promptLang": "vi",
    "prompt": "Đối với kế hoạch này, mọi người đều tỏ ý ủng hộ.",
    "answer": "对于这个计划，大家都表示支持。",
    "answerPy": "Duìyú zhège jìhuà, dàjiā dōu biǎoshì zhīchí.",
    "note": "Kết hợp 对于 (Bài 14 · điểm 4); 支持 (Bài 9).",
    "pair": "对于……表示……"
   }
  ]
 },
 {
  "n": 32,
  "zh": "加上",
  "py": "jiāshàng",
  "pos": "Liên từ",
  "vn": "thêm vào đó, cộng thêm",
  "hv": "gia thượng",
  "em": "➕",
  "lesson": 3,
  "explain": [
   "Liên từ nối tiếp câu trước, thêm một lý do / điều kiện nữa, câu sau nêu kết quả: A，加上 B，(所以 / 使得) kết quả (Bài 14 · điểm 3)."
  ],
  "usage": "……，加上……，所以 / 使得…… · 再加上…….",
  "collo": [
   "加上态度友好",
   "加上价格便宜",
   "再加上",
   "加上交通方便"
  ],
  "colloFull": [
   {
    "zh": "加上态度友好",
    "py": "Jiāshàng tàidù yǒuhǎo",
    "vn": "thêm vào đó thái độ thân thiện"
   },
   {
    "zh": "加上价格便宜",
    "py": "Jiāshàng jiàgé piányi",
    "vn": "cộng thêm giá rẻ"
   },
   {
    "zh": "再加上",
    "py": "Zài jiāshàng",
    "vn": "lại thêm"
   },
   {
    "zh": "加上交通方便",
    "py": "Jiāshàng jiāotōng fāngbiàn",
    "vn": "thêm giao thông thuận tiện"
   }
  ],
  "patterns": [
   {
    "s": "A，加上 B，(所以) C",
    "m": "A, thêm vào đó B, nên C"
   }
  ],
  "ex_zh": "小店虽然小，但东西适合年轻人，加上店员态度友好，使得小店的生意越来越好。",
  "ex_py": "Xiǎodiàn suīrán xiǎo, dàn dōngxi shìhé niánqīngrén, jiāshàng diànyuán tàidù yǒuhǎo, shǐde xiǎodiàn de shēngyi yuèláiyuè hǎo.",
  "ex_vn": "Tiệm tuy nhỏ nhưng đồ hợp với người trẻ, thêm vào đó nhân viên lại thân thiện, khiến việc buôn bán của tiệm ngày càng tốt.",
  "exList": [
   {
    "zh": "小店虽然小，但东西适合年轻人，加上店员态度友好，使得小店的生意越来越好。",
    "py": "Xiǎodiàn suīrán xiǎo, dàn dōngxi shìhé niánqīngrén, jiāshàng diànyuán tàidù yǒuhǎo, shǐde xiǎodiàn de shēngyi yuèláiyuè hǎo.",
    "vn": "Tiệm tuy nhỏ nhưng đồ hợp với người trẻ, thêm vào đó nhân viên lại thân thiện, khiến việc buôn bán của tiệm ngày càng tốt."
   },
   {
    "zh": "他每天都练习，加上老师教得好，进步特别快。",
    "py": "Tā měitiān dōu liànxí, jiāshàng lǎoshī jiào de hǎo, jìnbù tèbié kuài.",
    "vn": "Ngày nào cậu ấy cũng luyện, thêm vào đó thầy dạy giỏi, nên tiến bộ rất nhanh."
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
    "prompt": "Hôm nay trời mưa, lại thêm là cuối tuần, nên trên đường rất đông xe.",
    "answer": "今天下雨，加上又是周末，所以路上车很多。",
    "answerPy": "Jīntiān xiàyǔ, jiāshàng yòu shì zhōumò, suǒyǐ lùshang chē hěn duō.",
    "note": "加上 + 又 + thêm lý do; 所以 + kết quả.",
    "pair": "……，加上……，所以……"
   },
   {
    "promptLang": "vi",
    "prompt": "Món này vốn đã cay, thêm vào đó tôi lại cho ớt, cay không chịu nổi.",
    "answer": "这个菜本来就辣，加上我又放了辣椒，辣得受不了。",
    "answerPy": "Zhège cài běnlái jiù là, jiāshàng wǒ yòu fàng le làjiāo, là de shòubùliǎo.",
    "note": "Ôn 受不了 (Bài 10); 辣 (Bài 5).",
    "pair": "加上……，……得受不了"
   }
  ]
 },
 {
  "n": 33,
  "zh": "态度",
  "py": "tàidù",
  "pos": "Danh từ",
  "vn": "thái độ",
  "hv": "thái độ",
  "em": "😊",
  "lesson": 3,
  "explain": [
   "Cách cư xử, cách nhìn nhận đối với người / việc: 服务态度 (thái độ phục vụ), 学习态度."
  ],
  "usage": "态度友好 / 认真 · 服务态度 · 对……的态度.",
  "collo": [
   "服务态度",
   "态度友好",
   "学习态度",
   "工作态度"
  ],
  "colloFull": [
   {
    "zh": "服务态度",
    "py": "Fúwù tàidù",
    "vn": "thái độ phục vụ"
   },
   {
    "zh": "态度友好",
    "py": "Tàidù yǒuhǎo",
    "vn": "thái độ thân thiện"
   },
   {
    "zh": "学习态度",
    "py": "Xuéxí tàidù",
    "vn": "thái độ học tập"
   },
   {
    "zh": "工作态度",
    "py": "Gōngzuò tàidù",
    "vn": "thái độ làm việc"
   }
  ],
  "patterns": [
   {
    "s": "Ai + 对 + ai / việc + 的态度 + adj",
    "m": "Thái độ của ai với …"
   }
  ],
  "ex_zh": "加上店员态度友好，使得小店的生意越来越好。",
  "ex_py": "Jiāshàng diànyuán tàidù yǒuhǎo, shǐde xiǎodiàn de shēngyi yuèláiyuè hǎo.",
  "ex_vn": "Thêm vào đó nhân viên có thái độ thân thiện, khiến việc buôn bán của tiệm ngày càng tốt.",
  "exList": [
   {
    "zh": "加上店员态度友好，使得小店的生意越来越好。",
    "py": "Jiāshàng diànyuán tàidù yǒuhǎo, shǐde xiǎodiàn de shēngyi yuèláiyuè hǎo.",
    "vn": "Thêm vào đó nhân viên có thái độ thân thiện, khiến việc buôn bán của tiệm ngày càng tốt."
   },
   {
    "zh": "他的学习态度很认真。",
    "py": "Tā de xuéxí tàidù hěn rènzhēn.",
    "vn": "Thái độ học tập của cậu ấy rất nghiêm túc."
   }
  ],
  "hanzi": [
   {
    "c": "态",
    "p": "tài",
    "type": "上下结构 · Trên-dưới (giản thể)",
    "st": 8,
    "ord": "太 trên → 心 dưới",
    "rad": "心 (tâm – lòng)",
    "mean": "dáng vẻ, trạng thái",
    "tip": "Bộ tâm 心 (biểu hiện từ trong lòng) + 太(biểu âm) → DÁNG VẺ biểu hiện ra ngoài, kết hợp 度(mức độ) thành 态度 = THÁI ĐỘ.",
    "cf": "太 (tài – \"quá\", không có bộ 心\")",
    "w": "态度 / 状态 / 表态"
   },
   {
    "c": "度",
    "p": "dù",
    "type": "形声字 · Chữ hình thanh",
    "st": 9,
    "ord": "广 → 廿 → 又",
    "rad": "广 (nghiễm – mái nhà)",
    "mean": "độ, mức độ; lần",
    "tip": "Mái nhà 广 + 廿 (hai mươi) + 又 (bàn tay): ngày xưa dùng tay đo nhà — “đo, mức độ” — 速度, 温度.",
    "cf": "席 xí (chỗ ngồi) — dưới là 巾; 渡 dù (qua sông) — thêm 氵",
    "w": "速度 / 温度 / 态度"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Nhà hàng này không chỉ ngon mà thái độ phục vụ cũng rất tốt.",
    "answer": "这家饭馆不仅菜好吃，服务员服务态度也特别好。",
    "answerPy": "Zhè jiā fànguǎn bùjǐn cài hǎochī, fúwùyuán fúwù tàidù yě tèbié hǎo.",
    "note": "Câu trong bài tập chọn từ của sách; ôn 不仅……也…… (Bài 3 · điểm 2).",
    "pair": "不仅……也……"
   },
   {
    "promptLang": "vi",
    "prompt": "Dù bận đến đâu, thái độ của cô ấy với khách cũng luôn thân thiện.",
    "answer": "不管多忙，她对顾客的态度都很友好。",
    "answerPy": "Bùguǎn duō máng, tā duì gùkè de tàidù dōu hěn yǒuhǎo.",
    "note": "Ôn 不管……都…… (Bài 8 · điểm 1).",
    "pair": "不管……都……"
   }
  ]
 },
 {
  "n": 34,
  "zh": "友好",
  "py": "yǒuhǎo",
  "pos": "Tính từ",
  "vn": "thân thiện, hữu nghị",
  "hv": "hữu hảo",
  "em": "🤝",
  "lesson": 3,
  "explain": [
   "Đối xử với người khác thân thiện, tốt bụng; giữa hai nước: hữu nghị."
  ],
  "usage": "态度友好 · 对……很友好 · 友好的人 · 友好国家.",
  "collo": [
   "态度友好",
   "对人友好",
   "友好的笑",
   "友好关系"
  ],
  "colloFull": [
   {
    "zh": "态度友好",
    "py": "Tàidù yǒuhǎo",
    "vn": "thái độ thân thiện"
   },
   {
    "zh": "对人友好",
    "py": "Duì rén yǒuhǎo",
    "vn": "thân thiện với mọi người"
   },
   {
    "zh": "友好的笑",
    "py": "Yǒuhǎo de xiào",
    "vn": "nụ cười thân thiện"
   },
   {
    "zh": "友好关系",
    "py": "Yǒuhǎo guānxi",
    "vn": "quan hệ hữu nghị"
   }
  ],
  "patterns": [
   {
    "s": "Ai + 对 + ai + 很友好",
    "m": "Ai thân thiện với ai"
   }
  ],
  "ex_zh": "加上店员态度友好，使得小店的生意越来越好。",
  "ex_py": "Jiāshàng diànyuán tàidù yǒuhǎo, shǐde xiǎodiàn de shēngyi yuèláiyuè hǎo.",
  "ex_vn": "Thêm vào đó nhân viên có thái độ thân thiện, khiến việc buôn bán của tiệm ngày càng tốt.",
  "exList": [
   {
    "zh": "加上店员态度友好，使得小店的生意越来越好。",
    "py": "Jiāshàng diànyuán tàidù yǒuhǎo, shǐde xiǎodiàn de shēngyi yuèláiyuè hǎo.",
    "vn": "Thêm vào đó nhân viên có thái độ thân thiện, khiến việc buôn bán của tiệm ngày càng tốt."
   },
   {
    "zh": "这里的人对外国人很友好。",
    "py": "Zhèli de rén duì wàiguórén hěn yǒuhǎo.",
    "vn": "Người ở đây rất thân thiện với người nước ngoài."
   }
  ],
  "hanzi": [
   {
    "c": "友",
    "p": "yǒu",
    "type": "半包围结构 · Bán bao vây",
    "st": 4,
    "ord": "𠂇 → 又",
    "rad": "又 (hựu – tay)",
    "mean": "bạn",
    "tip": "Chữ hội ý hai bàn tay 又 nắm nhau → BẠN BÈ, kết hợp 好 thành 友好 = THÂN THIỆN.",
    "cf": "反 (fǎn – \"ngược\", tự dạng gần giống)",
    "w": "友好 / 朋友 / 友谊"
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
    "prompt": "Người ở đó vừa nhiệt tình vừa thân thiện.",
    "answer": "那里的人既热情又友好。",
    "answerPy": "Nàli de rén jì rèqíng yòu yǒuhǎo.",
    "note": "Ôn 既……又…… (Bài 4 · điểm 3).",
    "pair": "既……又……"
   },
   {
    "promptLang": "vi",
    "prompt": "Chúng tôi là những người hàng xóm rất thân thiện với nhau.",
    "answer": "我们是很友好的邻居。",
    "answerPy": "Wǒmen shì hěn yǒuhǎo de línjū.",
    "note": "Ôn 邻居 (Bài 4).",
    "pair": "友好的 + N"
   }
  ]
 },
 {
  "n": 35,
  "zh": "使得",
  "py": "shǐde",
  "pos": "Động từ",
  "vn": "khiến cho, làm cho",
  "hv": "sử đắc",
  "em": "➡️",
  "lesson": 3,
  "explain": [
   "Khiến cho (một kết quả xảy ra) — văn viết, nghĩa như 使 (Bài 7 · điểm 4). Chủ ngữ thường là một sự việc / nguyên nhân: A 使得 B + V/adj."
  ],
  "usage": "A + 使得 + B + kết quả · 这使得…….",
  "collo": [
   "使得生意越来越好",
   "使得大家很高兴",
   "这使得",
   "使得……更……"
  ],
  "colloFull": [
   {
    "zh": "使得生意越来越好",
    "py": "Shǐde shēngyi yuèláiyuè hǎo",
    "vn": "khiến buôn bán ngày càng tốt"
   },
   {
    "zh": "使得大家很高兴",
    "py": "Shǐde dàjiā hěn gāoxìng",
    "vn": "khiến mọi người rất vui"
   },
   {
    "zh": "这使得",
    "py": "Zhè shǐde",
    "vn": "điều này khiến"
   },
   {
    "zh": "使得……更……",
    "py": "Shǐde…… gèng……",
    "vn": "khiến … càng …"
   }
  ],
  "patterns": [
   {
    "s": "Nguyên nhân + 使得 + ai / cái gì + kết quả",
    "m": "… khiến cho …"
   },
   {
    "s": "使得 ≈ 使",
    "m": "使得 thường dùng khi chủ ngữ là cả một sự việc"
   }
  ],
  "ex_zh": "加上店员态度友好，使得小店的生意越来越好。",
  "ex_py": "Jiāshàng diànyuán tàidù yǒuhǎo, shǐde xiǎodiàn de shēngyi yuèláiyuè hǎo.",
  "ex_vn": "Thêm vào đó nhân viên có thái độ thân thiện, khiến việc buôn bán của tiệm ngày càng tốt.",
  "exList": [
   {
    "zh": "加上店员态度友好，使得小店的生意越来越好。",
    "py": "Jiāshàng diànyuán tàidù yǒuhǎo, shǐde xiǎodiàn de shēngyi yuèláiyuè hǎo.",
    "vn": "Thêm vào đó nhân viên có thái độ thân thiện, khiến việc buôn bán của tiệm ngày càng tốt."
   },
   {
    "zh": "这次旅行使得我们的关系更好了。",
    "py": "Zhè cì lǚxíng shǐde wǒmen de guānxi gèng hǎo le.",
    "vn": "Chuyến du lịch này khiến quan hệ của chúng tôi tốt hơn."
   }
  ],
  "hanzi": [
   {
    "c": "使",
    "p": "shǐ",
    "type": "左右结构 · Trái-phải",
    "st": 8,
    "ord": "亻 (nhân) trái → 吏 phải",
    "rad": "亻 (nhân)",
    "mean": "sai khiến, dùng",
    "tip": "Bộ người 亻 + 吏(quan lại) → SAI KHIẾN, mở rộng thành DÙNG, kết hợp 用 thành 使用 = SỬ DỤNG.",
    "cf": "同字词: 使用 / 作用 / 信用卡",
    "w": "使用 / 使 / 大使馆"
   },
   {
    "c": "得",
    "p": "de",
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
    "prompt": "Ô nhiễm không khí khiến nhiều người không muốn ra ngoài.",
    "answer": "空气污染使得很多人不愿意出门。",
    "answerPy": "Kōngqì wūrǎn shǐde hěn duō rén bú yuànyì chūmén.",
    "note": "Chủ ngữ là sự việc + 使得.",
    "pair": "……使得……"
   },
   {
    "promptLang": "vi",
    "prompt": "Sự giúp đỡ của bạn khiến tôi tiến bộ rất nhanh.",
    "answer": "你的帮助使得我进步得很快。",
    "answerPy": "Nǐ de bāngzhù shǐde wǒ jìnbù de hěn kuài.",
    "note": "Ôn 主语 + 使 + 宾语 + V (Bài 7 · điểm 4).",
    "pair": "使得 + ai + V"
   }
  ]
 },
 {
  "n": 36,
  "zh": "者",
  "py": "zhě",
  "pos": "Trợ từ",
  "vn": "người (làm việc gì), -giả",
  "hv": "giả",
  "em": "🧑",
  "lesson": 4,
  "explain": [
   "Hậu tố đứng sau động từ / tính từ / danh từ để chỉ người: 购物者 (người mua sắm), 参会者 (người dự họp), 作者 (tác giả), 读者 (độc giả)."
  ],
  "usage": "V / adj + 者 · 购物者 · 参会者 · 作者 · 读者.",
  "collo": [
   "购物者",
   "参会者",
   "作者",
   "读者"
  ],
  "colloFull": [
   {
    "zh": "购物者",
    "py": "Gòuwù zhě",
    "vn": "người mua sắm"
   },
   {
    "zh": "参会者",
    "py": "Cān huì zhě",
    "vn": "người tham dự hội nghị"
   },
   {
    "zh": "作者",
    "py": "Zuòzhě",
    "vn": "tác giả"
   },
   {
    "zh": "读者",
    "py": "Dúzhě",
    "vn": "độc giả"
   }
  ],
  "patterns": [
   {
    "s": "V + 者",
    "m": "Người làm việc V (văn viết)"
   }
  ],
  "ex_zh": "关于购物，你是一位冷静购物者，还是不冷静购物者？",
  "ex_py": "Guānyú gòuwù, nǐ shì yí wèi lěngjìng gòuwù zhě, háishi bù lěngjìng gòuwù zhě?",
  "ex_vn": "Về chuyện mua sắm, bạn là người mua sắm tỉnh táo hay không tỉnh táo?",
  "exList": [
   {
    "zh": "关于购物，你是一位冷静购物者，还是不冷静购物者？",
    "py": "Guānyú gòuwù, nǐ shì yí wèi lěngjìng gòuwù zhě, háishi bù lěngjìng gòuwù zhě?",
    "vn": "Về chuyện mua sắm, bạn là người mua sắm tỉnh táo hay không tỉnh táo?"
   },
   {
    "zh": "这本书的读者大多是年轻人。",
    "py": "Zhè běn shū de dúzhě dàduō shì niánqīngrén.",
    "vn": "Độc giả của cuốn sách này phần lớn là người trẻ."
   }
  ],
  "hanzi": [
   {
    "c": "者",
    "p": "zhě",
    "type": "上下结构 · Trên-dưới",
    "st": 8,
    "ord": "耂 trên → 日 dưới",
    "rad": "耂 (lão)",
    "mean": "người (làm gì)",
    "tip": "Hậu tố chỉ NGƯỜI làm việc gì: 记者 (người ghi chép), 作者 (tác giả), 读者 (độc giả), 或者.",
    "cf": "都 (dōu – đều)",
    "w": "记者 / 作者 / 读者 / 或者"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Lần này số người tham dự hội nghị vượt quá một trăm.",
    "answer": "这次会议的参会者超过了一百人。",
    "answerPy": "Zhè cì huìyì de cān huì zhě chāoguò le yìbǎi rén.",
    "note": "参会者 + 超过 (Bài 14).",
    "pair": "参会者"
   },
   {
    "promptLang": "vi",
    "prompt": "Tác giả của cuốn sách này là ai?",
    "answer": "这本书的作者是谁？",
    "answerPy": "Zhè běn shū de zuòzhě shì shuí?",
    "note": "作者 = tác giả.",
    "pair": "作者"
   }
  ]
 },
 {
  "n": 37,
  "zh": "仔细",
  "py": "zǐxì",
  "pos": "Tính từ",
  "vn": "kỹ, kỹ lưỡng, cẩn thận",
  "hv": "tử tế",
  "em": "🔍",
  "lesson": 4,
  "explain": [
   "Làm việc kỹ, chú ý từng chi tiết. Bẫy Hán Việt: “tử tế” tiếng Việt = tốt bụng, đàng hoàng; còn 仔细 = kỹ lưỡng, cẩn thận."
  ],
  "usage": "仔细 (地) + V · 仔细比较 / 看 / 检查 · 很仔细.",
  "collo": [
   "仔细比较",
   "仔细看",
   "仔细检查",
   "做事很仔细"
  ],
  "colloFull": [
   {
    "zh": "仔细比较",
    "py": "Zǐxì bǐjiào",
    "vn": "so sánh kỹ"
   },
   {
    "zh": "仔细看",
    "py": "Zǐxì kàn",
    "vn": "xem kỹ"
   },
   {
    "zh": "仔细检查",
    "py": "Zǐxì jiǎnchá",
    "vn": "kiểm tra kỹ"
   },
   {
    "zh": "做事很仔细",
    "py": "Zuòshì hěn zǐxì",
    "vn": "làm việc rất cẩn thận"
   }
  ],
  "patterns": [
   {
    "s": "仔细 (地) + V",
    "m": "Làm gì một cách kỹ lưỡng"
   },
   {
    "s": "Ai + 做事 + 很仔细",
    "m": "Ai làm việc rất cẩn thận"
   }
  ],
  "ex_zh": "购买时，还会从质量、价格等各方面仔细比较。",
  "ex_py": "Gòumǎi shí, hái huì cóng zhìliàng, jiàgé děng gè fāngmiàn zǐxì bǐjiào.",
  "ex_vn": "Khi mua, họ còn so sánh kỹ về mọi mặt như chất lượng, giá cả.",
  "exList": [
   {
    "zh": "购买时，还会从质量、价格等各方面仔细比较。",
    "py": "Gòumǎi shí, hái huì cóng zhìliàng, jiàgé děng gè fāngmiàn zǐxì bǐjiào.",
    "vn": "Khi mua, họ còn so sánh kỹ về mọi mặt như chất lượng, giá cả."
   },
   {
    "zh": "考试的时候要仔细看题。",
    "py": "Kǎoshì de shíhou yào zǐxì kàn tí.",
    "vn": "Lúc thi phải đọc đề thật kỹ."
   }
  ],
  "hanzi": [
   {
    "c": "仔",
    "p": "zǐ",
    "type": "左右结构 · Trái-phải",
    "st": 5,
    "ord": "亻 (nhân) trái → 子 phải",
    "rad": "亻 (nhân)",
    "mean": "tỉ mỉ",
    "tip": "Bộ người 亻 + 子(nhỏ) → chú ý đến điều NHỎ, kết hợp 细(mảnh) thành 仔细 = KỸ LƯỠNG.",
    "cf": "子 (zǐ – \"con\", phần bên phải)",
    "w": "仔细 / 细心 / 详细"
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
    "prompt": "Trước khi mua phải xem kỹ chất lượng.",
    "answer": "买之前要仔细看看质量。",
    "answerPy": "Mǎi zhīqián yào zǐxì kànkan zhìliàng.",
    "note": "仔细 + V + V (lặp động từ).",
    "pair": "仔细看看"
   },
   {
    "promptLang": "vi",
    "prompt": "Dù bận đến mấy, anh ấy cũng kiểm tra kỹ một lượt.",
    "answer": "就是再忙，他也会仔细地检查一遍。",
    "answerPy": "Jiùshì zài máng, tā yě huì zǐxì de jiǎnchá yí biàn.",
    "note": "Ôn 就是……也…… (Bài 11 · điểm 2).",
    "pair": "就是……也……"
   }
  ]
 },
 {
  "n": 38,
  "zh": "对于",
  "py": "duìyú",
  "pos": "Giới từ",
  "vn": "đối với, về (việc …)",
  "hv": "đối vu",
  "em": "🎯",
  "lesson": 4,
  "explain": [
   "Giới từ dẫn ra đối tượng (người, việc, vật) mà hành động / thái độ nói tới. Cụm 对于…… thường đứng đầu câu (Bài 14 · điểm 4)."
  ],
  "usage": "对于 + N / cụm từ，chủ ngữ + V · 对于……来说.",
  "collo": [
   "对于这个问题",
   "对于这件事",
   "对于他的做法",
   "对于……来说"
  ],
  "colloFull": [
   {
    "zh": "对于这个问题",
    "py": "Duìyú zhège wèntí",
    "vn": "đối với vấn đề này"
   },
   {
    "zh": "对于这件事",
    "py": "Duìyú zhè jiàn shì",
    "vn": "về chuyện này"
   },
   {
    "zh": "对于他的做法",
    "py": "Duìyú tā de zuòfǎ",
    "vn": "đối với cách làm của anh ấy"
   },
   {
    "zh": "对于……来说",
    "py": "Duìyú…… láishuō",
    "vn": "đối với … mà nói"
   }
  ],
  "patterns": [
   {
    "s": "对于 + đối tượng，chủ ngữ + V",
    "m": "Đối với …, (ai) …"
   },
   {
    "s": "对 ⊃ 对于",
    "m": "Chỗ nào dùng 对于 đều thay được bằng 对, nhưng không ngược lại"
   }
  ],
  "ex_zh": "对于想买的东西，她不光看质量，还看价格。",
  "ex_py": "Duìyú xiǎng mǎi de dōngxi, tā bùguāng kàn zhìliàng, hái kàn jiàgé.",
  "ex_vn": "Đối với những thứ muốn mua, cô ấy không chỉ xem chất lượng mà còn xem giá.",
  "exList": [
   {
    "zh": "对于想买的东西，她不光看质量，还看价格。",
    "py": "Duìyú xiǎng mǎi de dōngxi, tā bùguāng kàn zhìliàng, hái kàn jiàgé.",
    "vn": "Đối với những thứ muốn mua, cô ấy không chỉ xem chất lượng mà còn xem giá."
   },
   {
    "zh": "对于这个问题，大家有什么看法？",
    "py": "Duìyú zhège wèntí, dàjiā yǒu shénme kànfǎ?",
    "vn": "Về vấn đề này, mọi người có ý kiến gì?"
   }
  ],
  "hanzi": [
   {
    "c": "对",
    "p": "duì",
    "type": "左右结构 · Trái-phải",
    "st": 5,
    "ord": "又(biến thể) trái → 寸(thốn) phải",
    "rad": "寸 (thốn – tấc, quy tắc)",
    "mean": "đúng; đối với, với",
    "tip": "Bên trái là hai bên đối diện nhau, bên phải 寸(quy tắc, chuẩn mực) → hai bên khớp ĐÚNG theo chuẩn mực = ĐÚNG, ĐỐI VỚI.",
    "cf": "讨 (tǎo – \"bàn luận, đòi\", bộ 讠thay vì 又)",
    "w": "对不起 / 他对我说 / 不对"
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
    "prompt": "Đối với ý kiến của khách hàng, chúng tôi nhất định sẽ nghiên cứu kỹ.",
    "answer": "对于顾客的意见，我们一定好好研究。",
    "answerPy": "Duìyú gùkè de yìjiàn, wǒmen yídìng hǎohāo yánjiū.",
    "note": "对于 + N đứng đầu câu (Bài 14 · điểm 4).",
    "pair": "对于……"
   },
   {
    "promptLang": "vi",
    "prompt": "Về chuyện này, dù ai nói gì tôi cũng sẽ không đổi ý.",
    "answer": "对于这件事，无论谁说什么，我都不会改变想法。",
    "answerPy": "Duìyú zhè jiàn shì, wúlùn shuí shuō shénme, wǒ dōu bú huì gǎibiàn xiǎngfǎ.",
    "note": "Ôn 无论……都…… (Bài 12 · điểm 3).",
    "pair": "对于……，无论……都……"
   }
  ]
 },
 {
  "n": 39,
  "zh": "不光",
  "py": "bùguāng",
  "pos": "Liên từ / Phó từ",
  "vn": "không chỉ, không những",
  "hv": "bất quang",
  "em": "✨",
  "lesson": 4,
  "explain": [
   "Liên từ: 不光……，还 / 也 / 而且…… = không những … mà còn … (đã gặp ở Bài 3 · điểm 2, khẩu ngữ hơn 不仅).",
   "Phó từ: không chỉ (riêng ai / cái gì): 不光我一个人 = không chỉ mình tôi."
  ],
  "usage": "不光……，还 / 也…… · 不光 + người / 是…….",
  "collo": [
   "不光……还……",
   "不光……也……",
   "不光是",
   "不光我一个人"
  ],
  "colloFull": [
   {
    "zh": "不光……还……",
    "py": "Bùguāng…… hái……",
    "vn": "không những … mà còn …"
   },
   {
    "zh": "不光……也……",
    "py": "Bùguāng…… yě……",
    "vn": "không chỉ … cũng …"
   },
   {
    "zh": "不光是",
    "py": "Bùguāng shì",
    "vn": "không chỉ là"
   },
   {
    "zh": "不光我一个人",
    "py": "Bùguāng wǒ yí gè rén",
    "vn": "không chỉ mình tôi"
   }
  ],
  "patterns": [
   {
    "s": "不光 + A，还 / 也 / 而且 + B",
    "m": "Không những A mà còn B"
   },
   {
    "s": "不光 + người / 是 + N",
    "m": "Không chỉ (riêng) …"
   }
  ],
  "ex_zh": "对于想买的东西，她不光看质量，还看价格。",
  "ex_py": "Duìyú xiǎng mǎi de dōngxi, tā bùguāng kàn zhìliàng, hái kàn jiàgé.",
  "ex_vn": "Đối với những thứ muốn mua, cô ấy không chỉ xem chất lượng mà còn xem giá.",
  "exList": [
   {
    "zh": "对于想买的东西，她不光看质量，还看价格。",
    "py": "Duìyú xiǎng mǎi de dōngxi, tā bùguāng kàn zhìliàng, hái kàn jiàgé.",
    "vn": "Đối với những thứ muốn mua, cô ấy không chỉ xem chất lượng mà còn xem giá."
   },
   {
    "zh": "不光我喜欢，我的朋友们也都喜欢。",
    "py": "Bùguāng wǒ xǐhuan, wǒ de péngyoumen yě dōu xǐhuan.",
    "vn": "Không chỉ tôi thích, các bạn tôi cũng đều thích."
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
    "prompt": "Cô ấy không chỉ hát hay mà nhảy cũng rất đẹp.",
    "answer": "她不光唱歌好听，跳舞也很好看。",
    "answerPy": "Tā bùguāng chànggē hǎotīng, tiàowǔ yě hěn hǎokàn.",
    "note": "Ôn 不光 / 不仅……也…… (Bài 3 · điểm 2).",
    "pair": "不光……也……"
   },
   {
    "promptLang": "vi",
    "prompt": "Không chỉ mình tôi, cả lớp đều thích thầy Vương.",
    "answer": "不光我一个人，全班同学都喜欢王老师。",
    "answerPy": "Bùguāng wǒ yí gè rén, quán bān tóngxué dōu xǐhuan Wáng lǎoshī.",
    "note": "不光 + người = phó từ “không chỉ”.",
    "pair": "不光 + người"
   }
  ]
 },
 {
  "n": 40,
  "zh": "外套",
  "py": "wàitào",
  "pos": "Danh từ",
  "vn": "áo khoác",
  "hv": "ngoại sáo",
  "em": "🧥",
  "lesson": 4,
  "explain": [
   "Áo mặc bên ngoài cùng (áo khoác). Lượng từ: 件."
  ],
  "usage": "一件外套 · 穿外套 · 脱外套 · 买外套.",
  "collo": [
   "一件外套",
   "穿外套",
   "脱外套",
   "红色的外套"
  ],
  "colloFull": [
   {
    "zh": "一件外套",
    "py": "Yí jiàn wàitào",
    "vn": "một chiếc áo khoác"
   },
   {
    "zh": "穿外套",
    "py": "Chuān wàitào",
    "vn": "mặc áo khoác"
   },
   {
    "zh": "脱外套",
    "py": "Tuō wàitào",
    "vn": "cởi áo khoác"
   },
   {
    "zh": "红色的外套",
    "py": "Hóngsè de wàitào",
    "vn": "áo khoác đỏ"
   }
  ],
  "patterns": [
   {
    "s": "一件 + 外套",
    "m": "Lượng từ 件 cho áo"
   }
  ],
  "ex_zh": "无论是一件外套，还是一条裤子，甚至一双袜子，都是仔细比较后才决定买不买。",
  "ex_py": "Wúlùn shì yí jiàn wàitào, háishi yì tiáo kùzi, shènzhì yì shuāng wàzi, dōu shì zǐxì bǐjiào hòu cái juédìng mǎi bu mǎi.",
  "ex_vn": "Dù là một chiếc áo khoác, một chiếc quần, thậm chí một đôi tất, cô ấy đều so sánh kỹ rồi mới quyết định có mua hay không.",
  "exList": [
   {
    "zh": "无论是一件外套，还是一条裤子，甚至一双袜子，都是仔细比较后才决定买不买。",
    "py": "Wúlùn shì yí jiàn wàitào, háishi yì tiáo kùzi, shènzhì yì shuāng wàzi, dōu shì zǐxì bǐjiào hòu cái juédìng mǎi bu mǎi.",
    "vn": "Dù là một chiếc áo khoác, một chiếc quần, thậm chí một đôi tất, cô ấy đều so sánh kỹ rồi mới quyết định có mua hay không."
   },
   {
    "zh": "天冷了，出门记得穿外套。",
    "py": "Tiān lěng le, chūmén jìde chuān wàitào.",
    "vn": "Trời lạnh rồi, ra ngoài nhớ mặc áo khoác."
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
    "c": "套",
    "p": "tào",
    "type": "会意字 · Chữ hội ý",
    "st": 10,
    "ord": "大 → 镸 (长 biến thể)",
    "rad": "大 (đại – to)",
    "mean": "bộ, cái bao bên ngoài; trùm ra ngoài; (lượng từ) bộ, căn",
    "tip": "Thứ to (大) và dài (长) trùm ra bên ngoài → cái bao, cái vỏ bọc — 外套 = áo mặc ngoài cùng (áo khoác), 手套 = găng tay, 一套房子 = một căn nhà.",
    "cf": "长 cháng (dài) — không có 大 ở trên; 夺 duó (cướp) — dưới là 寸",
    "w": "外套 / 手套 / 一套"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Chiếc áo khoác này dù có giảm giá tôi cũng không mua.",
    "answer": "这件外套就是降价我也不买。",
    "answerPy": "Zhè jiàn wàitào jiùshì jiàngjià wǒ yě bù mǎi.",
    "note": "Ôn 就是……也…… (Bài 11 · điểm 2).",
    "pair": "就是……也……"
   },
   {
    "promptLang": "vi",
    "prompt": "Bạn thử chiếc áo khoác này xem, kiểu dáng rất mới.",
    "answer": "你试试这件外套，样式很新。",
    "answerPy": "Nǐ shìshi zhè jiàn wàitào, yàngshì hěn xīn.",
    "note": "样式 (Bài 14); lặp động từ 试试.",
    "pair": "试试 + N"
   }
  ]
 },
 {
  "n": 41,
  "zh": "袜子",
  "py": "wàzi",
  "pos": "Danh từ",
  "vn": "tất, vớ",
  "hv": "miệt tử",
  "em": "🧦",
  "lesson": 4,
  "explain": [
   "Đồ đi ở chân, bên trong giày. Lượng từ: 双 (một đôi). Chữ 子 đọc nhẹ."
  ],
  "usage": "一双袜子 · 穿袜子 · 买袜子 · 白袜子.",
  "collo": [
   "一双袜子",
   "穿袜子",
   "脱袜子",
   "白袜子"
  ],
  "colloFull": [
   {
    "zh": "一双袜子",
    "py": "Yì shuāng wàzi",
    "vn": "một đôi tất"
   },
   {
    "zh": "穿袜子",
    "py": "Chuān wàzi",
    "vn": "đi tất"
   },
   {
    "zh": "脱袜子",
    "py": "Tuō wàzi",
    "vn": "cởi tất"
   },
   {
    "zh": "白袜子",
    "py": "Bái wàzi",
    "vn": "tất trắng"
   }
  ],
  "patterns": [
   {
    "s": "一双 + 袜子",
    "m": "Lượng từ 双 cho tất, giày"
   }
  ],
  "ex_zh": "无论是一件外套，还是一条裤子，甚至一双袜子，都是仔细比较后才决定买不买。",
  "ex_py": "Wúlùn shì yí jiàn wàitào, háishi yì tiáo kùzi, shènzhì yì shuāng wàzi, dōu shì zǐxì bǐjiào hòu cái juédìng mǎi bu mǎi.",
  "ex_vn": "Dù là một chiếc áo khoác, một chiếc quần, thậm chí một đôi tất, cô ấy đều so sánh kỹ rồi mới quyết định có mua hay không.",
  "exList": [
   {
    "zh": "无论是一件外套，还是一条裤子，甚至一双袜子，都是仔细比较后才决定买不买。",
    "py": "Wúlùn shì yí jiàn wàitào, háishi yì tiáo kùzi, shènzhì yì shuāng wàzi, dōu shì zǐxì bǐjiào hòu cái juédìng mǎi bu mǎi.",
    "vn": "Dù là một chiếc áo khoác, một chiếc quần, thậm chí một đôi tất, cô ấy đều so sánh kỹ rồi mới quyết định có mua hay không."
   },
   {
    "zh": "我买了三双袜子。",
    "py": "Wǒ mǎi le sān shuāng wàzi.",
    "vn": "Tôi mua ba đôi tất."
   }
  ],
  "hanzi": [
   {
    "c": "袜",
    "p": "wà",
    "type": "左右结构 · Trái-phải (giản thể)",
    "st": 10,
    "ord": "衤 (y) trái → 末 phải",
    "rad": "衤 (y – quần áo)",
    "mean": "tất, vớ",
    "tip": "Bộ quần áo 衤 (đồ mặc) + 末(biểu âm) → đồ mặc ở phần CUỐI cùng của chân, mở rộng thành TẤT, VỚ.",
    "cf": "抹 (mǒ – \"xoa, quẹt\", bộ 扌\")",
    "w": "袜子 / 一双袜子 / 长袜"
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
    "prompt": "Ngay cả mua một đôi tất cô ấy cũng phải so sánh kỹ.",
    "answer": "她甚至买一双袜子都要仔细比较。",
    "answerPy": "Tā shènzhì mǎi yì shuāng wàzi dōu yào zǐxì bǐjiào.",
    "note": "Ôn 甚至 (Bài 3 · điểm 3).",
    "pair": "甚至……都……"
   },
   {
    "promptLang": "vi",
    "prompt": "Tất trắng dễ bẩn, tôi thích tất đen hơn.",
    "answer": "白袜子容易脏，我更喜欢黑袜子。",
    "answerPy": "Bái wàzi róngyì zāng, wǒ gèng xǐhuan hēi wàzi.",
    "note": "更 + V: thích hơn.",
    "pair": "更喜欢"
   }
  ]
 }
];
var wuData = [
 {
  "img": "/images/hsk4v3/bai-14/wu-A.webp",
  "label": "盒子",
  "py": "hézi",
  "letter": "A"
 },
 {
  "img": "/images/hsk4v3/bai-14/wu-B.webp",
  "label": "茶叶",
  "py": "cháyè",
  "letter": "B"
 },
 {
  "img": "/images/hsk4v3/bai-14/wu-C.webp",
  "label": "降价",
  "py": "jiàngjià",
  "letter": "C"
 },
 {
  "img": "/images/hsk4v3/bai-14/wu-D.webp",
  "label": "外套",
  "py": "wàitào",
  "letter": "D"
 },
 {
  "img": "/images/hsk4v3/bai-14/wu-E.webp",
  "label": "装",
  "py": "zhuāng",
  "letter": "E"
 },
 {
  "img": "/images/hsk4v3/bai-14/wu-F.webp",
  "label": "抱歉",
  "py": "bàoqiàn",
  "letter": "F"
 }
];
var dialogData = [
 {
  "scene": "茶叶店 · Tiệm trà (sáng thứ Bảy, Annie đến tiệm mua trà)",
  "anh": "/images/hsk4v3/bai-14/kv-1.webp",
  "nguoi": [
   {
    "ten": "售货员",
    "anh": "/images/hsk4v3/bai-14/shouhuoyuan.webp"
   },
   {
    "ten": "安妮",
    "anh": "/images/hsk4v3/nv/annie.webp"
   }
  ],
  "preQuiz": [
   {
    "q": "安妮想知道：",
    "opts": [
     "红茶的价格",
     "绿茶的价格",
     "有没有红茶",
     "买哪种茶合适"
    ],
    "ans": 3
   },
   {
    "q": "安妮最后买了：",
    "opts": [
     "半两绿茶",
     "五两绿茶",
     "六两绿茶",
     "一斤绿茶"
    ],
    "ans": 2
   }
  ],
  "lines": [
   {
    "sp": 0,
    "zh": "您要什么茶？",
    "py": "Nín yào shénme chá?",
    "vn": "Chị muốn mua trà gì ạ?"
   },
   {
    "sp": 1,
    "zh": "我先看看。这里茶叶这么多，究竟买哪种好呢？",
    "py": "Wǒ xiān kànkan. Zhèli cháyè zhème duō, jiūjìng mǎi nǎ zhǒng hǎo ne?",
    "vn": "Tôi xem trước đã. Ở đây nhiều loại trà thế này, rốt cuộc nên mua loại nào đây?"
   },
   {
    "sp": 0,
    "zh": "茶叶主要分为红茶、绿茶等，看您喜欢喝哪种。",
    "py": "Cháyè zhǔyào fēnwéi hóngchá, lǜchá děng, kàn nín xǐhuan hē nǎ zhǒng.",
    "vn": "Trà chủ yếu chia thành hồng trà, lục trà…, tùy chị thích uống loại nào."
   },
   {
    "sp": 1,
    "zh": "我想买一些自己喝，再买些送人。这种绿茶还有吗？",
    "py": "Wǒ xiǎng mǎi yìxiē zìjǐ hē, zài mǎi xiē sòng rén. Zhè zhǒng lǜchá hái yǒu ma?",
    "vn": "Tôi muốn mua một ít để tự uống, mua thêm ít để biếu người khác. Loại trà xanh này còn không anh?"
   },
   {
    "sp": 0,
    "zh": "抱歉，暂时没有。如果自己喝，可以买这个绿茶，今天满二两送半两，超过半斤再送小礼物；如果送人，可以买个盒子装进去。",
    "py": "Bàoqiàn, zànshí méiyǒu. Rúguǒ zìjǐ hē, kěyǐ mǎi zhège lǜchá, jīntiān mǎn èr liǎng sòng bàn liǎng, chāoguò bàn jīn zài sòng xiǎo lǐwù; rúguǒ sòng rén, kěyǐ mǎi gè hézi zhuāngjìn qù.",
    "vn": "Xin lỗi chị, tạm thời hết rồi ạ. Nếu tự uống thì chị có thể mua loại trà xanh này, hôm nay mua đủ hai lạng tặng nửa lạng, quá nửa cân còn tặng thêm quà nhỏ; nếu để biếu thì có thể mua một cái hộp để đựng vào."
   },
   {
    "sp": 1,
    "zh": "嗯。那就先买六两这种绿茶吧，再买一个盒子。请帮我分着装，盒子里装半斤，剩下的用纸包一下就行。",
    "py": "Ǹg. Nà jiù xiān mǎi liù liǎng zhè zhǒng lǜchá ba, zài mǎi yí gè hézi. Qǐng bāng wǒ fēn zhe zhuāng, hézi lǐ zhuāng bàn jīn, shèngxià de yòng zhǐ bāo yíxià jiù xíng.",
    "vn": "Ừm. Vậy tôi mua trước sáu lạng loại trà xanh này, mua thêm một cái hộp. Anh đựng riêng giúp tôi nhé, trong hộp để nửa cân, phần còn lại gói giấy là được."
   }
  ]
 },
 {
  "scene": "商场 · Trung tâm thương mại (chiều Chủ nhật, Vương Nhất Tuyết muốn mua giày thể thao, Vương Nhất Phi đi cùng)",
  "anh": "/images/hsk4v3/bai-14/kv-2.webp",
  "nguoi": [
   {
    "ten": "广播员",
    "anh": "/images/hsk4v3/bai-14/guangboyuan.webp"
   },
   {
    "ten": "王一雪",
    "anh": "/images/hsk4v3/nv/yixue.webp"
   },
   {
    "ten": "王一飞",
    "anh": "/images/hsk4v3/nv/yifei.webp"
   },
   {
    "ten": "售货员",
    "anh": "/images/hsk4v3/bai-14/shouhuoyuan2.webp"
   }
  ],
  "preQuiz": [
   {
    "q": "商场做的运动鞋促销活动是：",
    "opts": [
     "打一折",
     "打五折",
     "打七折",
     "打八五折"
    ],
    "ans": 1
   },
   {
    "q": "关于运动鞋，王一飞更重视什么？",
    "opts": [
     "价格高不高",
     "质量好不好",
     "降价没降价",
     "好看不好看"
    ],
    "ans": 1
   }
  ],
  "lines": [
   {
    "sp": 0,
    "zh": "各位顾客，本商场正在举办运动鞋假日低价促销活动，全场五折。",
    "py": "Gèwèi gùkè, běn shāngchǎng zhèngzài jǔbàn yùndòngxié jiàrì dījià cùxiāo huódòng, quán chǎng wǔ zhé.",
    "vn": "Kính thưa quý khách, trung tâm thương mại chúng tôi đang tổ chức chương trình khuyến mãi giá thấp ngày lễ cho giày thể thao, toàn bộ giảm 50% (五折 = bán bằng 50% giá gốc)."
   },
   {
    "sp": 1,
    "zh": "一飞，广播里说价格减了一半呢，咱们过去看看？",
    "py": "Yīfēi, guǎngbō lǐ shuō jiàgé jiǎn le yíbàn ne, zánmen guòqu kànkan?",
    "vn": "Nhất Phi, loa nói giá giảm một nửa đấy, mình qua xem nhé?"
   },
   {
    "sp": 2,
    "zh": "好的。不过咱们也不能只听广告说什么，还得看质量。",
    "py": "Hǎo de. Búguò zánmen yě bù néng zhǐ tīng guǎnggào shuō shénme, hái děi kàn zhìliàng.",
    "vn": "Được. Nhưng mình cũng không thể quảng cáo nói gì nghe nấy, còn phải xem chất lượng nữa."
   },
   {
    "sp": 1,
    "zh": "对，首先看样子喜不喜欢，然后再看质量怎么样、价格合适不合适。",
    "py": "Duì, shǒuxiān kàn yàngzi xǐ bu xǐhuan, ránhòu zài kàn zhìliàng zěnmeyàng, jiàgé héshì bù héshì.",
    "vn": "Đúng, trước hết xem kiểu dáng có thích không, sau đó mới xem chất lượng thế nào, giá có hợp lý không."
   },
   {
    "sp": 3,
    "zh": "二位看看喜欢哪双？这个牌子质量很好，今天又降价，一双减300块。",
    "py": "Èr wèi kànkan xǐhuan nǎ shuāng? Zhège páizi zhìliàng hěn hǎo, jīntiān yòu jiàngjià, yì shuāng jiǎn 300 kuài.",
    "vn": "Hai chị xem thích đôi nào ạ? Hãng này chất lượng rất tốt, hôm nay lại giảm giá, mỗi đôi giảm 300 tệ."
   },
   {
    "sp": 1,
    "zh": "嗯，我知道这个牌子。一飞，你喜欢吗？你看，这个鞋的样式很新，价钱也不高。",
    "py": "Ǹg, wǒ zhīdao zhège páizi. Yīfēi, nǐ xǐhuan ma? Nǐ kàn, zhège xié de yàngshì hěn xīn, jiàqián yě bù gāo.",
    "vn": "Ừ, tôi biết hãng này. Nhất Phi, cậu thích không? Cậu xem, kiểu dáng đôi giày này rất mới, giá cũng không cao."
   },
   {
    "sp": 2,
    "zh": "你喜欢就买吧。我再看看别的。",
    "py": "Nǐ xǐhuan jiù mǎi ba. Wǒ zài kànkan biéde.",
    "vn": "Cậu thích thì mua đi. Tớ xem thêm mấy đôi khác."
   },
   {
    "sp": 1,
    "zh": "好的。请给我拿一双37号的吧。",
    "py": "Hǎo de. Qǐng gěi wǒ ná yì shuāng 37 hào de ba.",
    "vn": "Được. Lấy giúp tôi một đôi số 37 nhé."
   }
  ]
 },
 {
  "scene": "适合，就受欢迎 · Phù hợp thì được yêu thích (tiệm nhỏ của Từ Tiền, bạn Lý Văn)",
  "anh": "",
  "nguoi": [
   {
    "ten": "小语",
    "anh": "/images/hsk4v3/nv/xiaoyu.webp"
   }
  ],
  "preQuiz": [
   {
    "q": "徐前店里卖的东西：",
    "opts": [
     "不是很多",
     "都很便宜",
     "种类很多",
     "只有游戏机"
    ],
    "ans": 2
   },
   {
    "q": "来徐前店里的顾客主要是：",
    "opts": [
     "小孩子",
     "年轻人",
     "中年人",
     "老年人"
    ],
    "ans": 1
   }
  ],
  "lines": [
   {
    "sp": 0,
    "zh": "李文的朋友徐前在商业区开了家小店，专门卖年轻人喜欢的东西。",
    "py": "Lǐ Wén de péngyou Xú Qián zài shāngyè qū kāi le jiā xiǎodiàn, zhuānmén mài niánqīngrén xǐhuan de dōngxi.",
    "vn": "Bạn của Lý Văn là Từ Tiền mở một cửa hàng nhỏ ở khu thương mại, chuyên bán những thứ người trẻ thích."
   },
   {
    "sp": 0,
    "zh": "他的店里商品种类不少，既有几十年前的老游戏机，也有最近流行的盲盒等等，很吸引年轻人。",
    "py": "Tā de diàn lǐ shāngpǐn zhǒnglèi bùshǎo, jì yǒu jǐshí nián qián de lǎo yóuxì jī, yě yǒu zuìjìn liúxíng de mánghé děngděng, hěn xīyǐn niánqīngrén.",
    "vn": "Tiệm của anh ấy có không ít loại hàng, vừa có máy chơi game cũ từ mấy chục năm trước, vừa có hộp mù đang thịnh hành gần đây…, rất thu hút người trẻ."
   },
   {
    "sp": 0,
    "zh": "徐前说，自己就是年轻人，知道年轻人喜欢什么。",
    "py": "Xú Qián shuō, zìjǐ jiùshì niánqīngrén, zhīdao niánqīngrén xǐhuan shénme.",
    "vn": "Từ Tiền nói bản thân anh chính là người trẻ, nên biết người trẻ thích gì."
   },
   {
    "sp": 0,
    "zh": "他也常和来店里的年轻顾客聊天儿，了解他们的兴趣爱好。",
    "py": "Tā yě cháng hé lái diàn lǐ de niánqīng gùkè liáotiānr, liǎojiě tāmen de xìngqù àihào.",
    "vn": "Anh cũng thường trò chuyện với các khách hàng trẻ đến tiệm để tìm hiểu sở thích của họ."
   },
   {
    "sp": 0,
    "zh": "前段时间刚进的盲盒很快就卖到了缺货。",
    "py": "Qián duàn shíjiān gāng jìn de mánghé hěn kuài jiù mài dào le quē huò.",
    "vn": "Lô hộp mù vừa nhập về thời gian trước bán nhanh đến mức hết hàng."
   },
   {
    "sp": 0,
    "zh": "许多年轻人表示，在徐前的店里能感受到快乐。",
    "py": "Xǔduō niánqīngrén biǎoshì, zài Xú Qián de diàn lǐ néng gǎnshòu dào kuàilè.",
    "vn": "Nhiều bạn trẻ cho biết ở tiệm của Từ Tiền họ cảm nhận được niềm vui."
   },
   {
    "sp": 0,
    "zh": "小店虽然小，但东西适合年轻人，加上店员态度友好，使得小店的生意越来越好。",
    "py": "Xiǎodiàn suīrán xiǎo, dàn dōngxi shìhé niánqīngrén, jiāshàng diànyuán tàidù yǒuhǎo, shǐde xiǎodiàn de shēngyi yuèláiyuè hǎo.",
    "vn": "Tiệm tuy nhỏ nhưng đồ hợp với người trẻ, thêm vào đó nhân viên lại thân thiện, khiến việc buôn bán của tiệm ngày càng tốt."
   },
   {
    "sp": 0,
    "zh": "李文觉得自己的朋友真会做生意。",
    "py": "Lǐ Wén juéde zìjǐ de péngyou zhēn huì zuò shēngyi.",
    "vn": "Lý Văn thấy bạn mình thật biết làm ăn."
   }
  ],
  "doan": true
 },
 {
  "scene": "合适的才是最好的 · Cái phù hợp mới là tốt nhất (người mua sắm tỉnh táo và không tỉnh táo)",
  "anh": "/images/hsk4v3/bai-14/kv-4.webp",
  "nguoi": [
   {
    "ten": "小语",
    "anh": "/images/hsk4v3/nv/xiaoyu.webp"
   }
  ],
  "preQuiz": [
   {
    "q": "冷静购物者买东西时会怎么做？",
    "opts": [
     "想买就买",
     "喜欢就买",
     "需要才买",
     "很少买东西"
    ],
    "ans": 2
   },
   {
    "q": "买东西时王一飞会怎么做？",
    "opts": [
     "只看广告",
     "问售货员",
     "比较一下就买",
     "仔细比较后才买"
    ],
    "ans": 3
   }
  ],
  "lines": [
   {
    "sp": 0,
    "zh": "关于购物，你是一位冷静购物者，还是不冷静购物者？",
    "py": "Guānyú gòuwù, nǐ shì yí wèi lěngjìng gòuwù zhě, háishi bù lěngjìng gòuwù zhě?",
    "vn": "Về chuyện mua sắm, bạn là người mua sắm tỉnh táo hay không tỉnh táo?"
   },
   {
    "sp": 0,
    "zh": "一般来说，冷静购物者往往是真正需要一件东西时才买。",
    "py": "Yìbān láishuō, lěngjìng gòuwù zhě wǎngwǎng shì zhēnzhèng xūyào yí jiàn dōngxi shí cái mǎi.",
    "vn": "Nói chung, người mua sắm tỉnh táo thường chỉ mua khi thật sự cần một món đồ."
   },
   {
    "sp": 0,
    "zh": "购买时，还会从质量、价格等各方面仔细比较。",
    "py": "Gòumǎi shí, hái huì cóng zhìliàng, jiàgé děng gè fāngmiàn zǐxì bǐjiào.",
    "vn": "Khi mua, họ còn so sánh kỹ về mọi mặt như chất lượng, giá cả."
   },
   {
    "sp": 0,
    "zh": "不冷静购物者看见一个东西时，只要感觉喜欢就买，不管需要不需要，结果常常买完就后悔，买的东西也成了“垃圾”，还不环保。",
    "py": "Bù lěngjìng gòuwù zhě kànjiàn yí gè dōngxi shí, zhǐyào gǎnjué xǐhuan jiù mǎi, bùguǎn xūyào bù xūyào, jiéguǒ chángcháng mǎi wán jiù hòuhuǐ, mǎi de dōngxi yě chéng le “lājī”, hái bù huánbǎo.",
    "vn": "Người mua sắm không tỉnh táo khi thấy một món đồ, chỉ cần thấy thích là mua, bất kể có cần hay không, kết quả là thường mua xong thì hối hận, đồ mua về cũng thành “rác”, lại không bảo vệ môi trường."
   },
   {
    "sp": 0,
    "zh": "王一飞说，她从来不随便买东西。",
    "py": "Wáng Yīfēi shuō, tā cónglái bù suíbiàn mǎi dōngxi.",
    "vn": "Vương Nhất Phi nói cô ấy chưa bao giờ mua đồ tùy tiện."
   },
   {
    "sp": 0,
    "zh": "对于想买的东西，她不光看质量，还看价格。",
    "py": "Duìyú xiǎng mǎi de dōngxi, tā bùguāng kàn zhìliàng, hái kàn jiàgé.",
    "vn": "Đối với những thứ muốn mua, cô ấy không chỉ xem chất lượng mà còn xem giá."
   },
   {
    "sp": 0,
    "zh": "无论是一件外套，还是一条裤子，甚至一双袜子，都是仔细比较后才决定买不买。",
    "py": "Wúlùn shì yí jiàn wàitào, háishi yì tiáo kùzi, shènzhì yì shuāng wàzi, dōu shì zǐxì bǐjiào hòu cái juédìng mǎi bu mǎi.",
    "vn": "Dù là một chiếc áo khoác, một chiếc quần, thậm chí một đôi tất, cô ấy đều so sánh kỹ rồi mới quyết định có mua hay không."
   },
   {
    "sp": 0,
    "zh": "其实，不仅是买东西，人生的很多事情都一样，选择合适的才是最好的。",
    "py": "Qíshí, bùjǐn shì mǎi dōngxi, rénshēng de hěn duō shìqing dōu yíyàng, xuǎnzé héshì de cái shì zuìhǎo de.",
    "vn": "Thật ra, không chỉ mua đồ, nhiều chuyện trong cuộc đời cũng vậy: chọn cái phù hợp mới là tốt nhất."
   }
  ],
  "doan": true
 }
];
var listenData = [
 {
  "audio": "小姐，这件外套多少钱？三百八。不过现在店里在做促销，满三百减五十。那就是三百三十块？对。这个牌子质量很好，样式也是今年最流行的。好，那我试试。",
  "questions": [
   {
    "q": "这件外套现在多少钱？",
    "opts": [
     "三百八十块",
     "三百三十块",
     "三百块"
    ],
    "ans": 1
   },
   {
    "q": "售货员觉得这件外套怎么样？",
    "opts": [
     "质量好，样式流行",
     "价钱很便宜",
     "颜色很好看"
    ],
    "ans": 0
   }
  ]
 },
 {
  "audio": "你听，广播里说什么？说今天晚上八点到九点，超市里所有的水果都打七折，买满五十块还送一盒牛奶。太好了！咱们首先去买水果，然后再去买别的吧。好，不过别买太多，吃不完就浪费了。",
  "questions": [
   {
    "q": "什么东西打七折？",
    "opts": [
     "牛奶",
     "水果",
     "茶叶"
    ],
    "ans": 1
   },
   {
    "q": "买满五十块送什么？",
    "opts": [
     "一盒牛奶",
     "一盒茶叶",
     "一个盒子"
    ],
    "ans": 0
   }
  ]
 },
 {
  "audio": "你又买盲盒了？你究竟买了多少个了？这已经是第十个了。对于盲盒，我觉得偶尔买一个还行，买太多就是浪费钱。你说得对，以后买东西以前，我首先想想自己是不是真的需要。",
  "questions": [
   {
    "q": "她一共买了多少个盲盒？",
    "opts": [
     "一个",
     "五个",
     "十个"
    ],
    "ans": 2
   },
   {
    "q": "朋友觉得买很多盲盒怎么样？",
    "opts": [
     "很有意思",
     "是浪费钱",
     "能感受到快乐"
    ],
    "ans": 1
   }
  ]
 }
];
var matchData = [
 {
  "left": "举办",
  "right": "促销活动"
 },
 {
  "left": "服务",
  "right": "态度"
 },
 {
  "left": "仔细",
  "right": "比较"
 },
 {
  "left": "商品",
  "right": "种类"
 },
 {
  "left": "满二两",
  "right": "送半两"
 },
 {
  "left": "一双",
  "right": "袜子"
 },
 {
  "left": "首先……",
  "right": "然后……"
 },
 {
  "left": "不光……",
  "right": "还……"
 },
 {
  "left": "……，加上……",
  "right": "使得……"
 }
];
var fillData = [
 {
  "pre": "这里茶叶这么多，",
  "blank": "究竟",
  "post": "买哪种好呢？",
  "hint": "(rốt cuộc)",
  "ans": "究竟",
  "exp": "究竟 + câu hỏi có đại từ nghi vấn."
 },
 {
  "pre": "茶叶主要",
  "blank": "分为",
  "post": "红茶、绿茶等。",
  "hint": "(chia thành)",
  "ans": "分为",
  "exp": "A 分为 B、C……"
 },
 {
  "pre": "抱歉，",
  "blank": "暂时",
  "post": "没有。",
  "hint": "(tạm thời)",
  "ans": "暂时",
  "exp": "暂时 + 没有 / 不 + V."
 },
 {
  "pre": "今天满二两送半两，",
  "blank": "超过",
  "post": "半斤再送小礼物。",
  "hint": "(vượt quá)",
  "ans": "超过",
  "exp": "超过 + số lượng."
 },
 {
  "pre": "本商场正在举办运动鞋假日低价",
  "blank": "促销",
  "post": "活动。",
  "hint": "(khuyến mãi)",
  "ans": "促销",
  "exp": "促销活动 = chương trình khuyến mãi."
 },
 {
  "pre": "",
  "blank": "首先",
  "post": "看样子喜不喜欢，然后再看质量怎么样。",
  "hint": "(trước hết)",
  "ans": "首先",
  "exp": "首先……，然后……"
 },
 {
  "pre": "这个牌子质量很好，今天又",
  "blank": "降价",
  "post": "，一双减300块。",
  "hint": "(giảm giá)",
  "ans": "降价",
  "exp": "降价 = hạ giá bán."
 },
 {
  "pre": "东西适合年轻人，",
  "blank": "加上",
  "post": "店员态度友好，使得小店的生意越来越好。",
  "hint": "(thêm vào đó)",
  "ans": "加上",
  "exp": "……，加上……，使得 + kết quả."
 },
 {
  "pre": "前段时间刚进的盲盒很快就卖到了",
  "blank": "缺",
  "post": "货。",
  "hint": "(thiếu, hết)",
  "ans": "缺",
  "exp": "缺货 = hết hàng."
 },
 {
  "pre": "",
  "blank": "对于",
  "post": "想买的东西，她不光看质量，还看价格。",
  "hint": "(đối với)",
  "ans": "对于",
  "exp": "对于 + đối tượng，chủ ngữ + V."
 }
];
var sortData = [
 {
  "words": [
   "这里",
   "茶叶",
   "这么多",
   "，",
   "究竟",
   "买",
   "哪种",
   "好呢",
   "？"
  ],
  "ans": "这里茶叶这么多，究竟买哪种好呢？",
  "audio": "这里茶叶这么多，究竟买哪种好呢？"
 },
 {
  "words": [
   "首先",
   "看样子",
   "喜不喜欢",
   "，",
   "然后",
   "再看",
   "质量",
   "怎么样",
   "。"
  ],
  "ans": "首先看样子喜不喜欢，然后再看质量怎么样。",
  "audio": "首先看样子喜不喜欢，然后再看质量怎么样。"
 },
 {
  "words": [
   "请",
   "帮我",
   "分着装",
   "，",
   "盒子里",
   "装",
   "半斤",
   "。"
  ],
  "ans": "请帮我分着装，盒子里装半斤。",
  "audio": "请帮我分着装，盒子里装半斤。"
 },
 {
  "words": [
   "加上",
   "店员",
   "态度友好",
   "，",
   "使得",
   "小店的生意",
   "越来越好",
   "。"
  ],
  "ans": "加上店员态度友好，使得小店的生意越来越好。",
  "audio": "加上店员态度友好，使得小店的生意越来越好。"
 },
 {
  "words": [
   "对于",
   "想买的东西",
   "，",
   "她",
   "不光",
   "看质量",
   "，",
   "还",
   "看价格",
   "。"
  ],
  "ans": "对于想买的东西，她不光看质量，还看价格。",
  "audio": "对于想买的东西，她不光看质量，还看价格。"
 },
 {
  "words": [
   "许多",
   "年轻人",
   "表示",
   "，",
   "在",
   "徐前的店里",
   "能",
   "感受到",
   "快乐",
   "。"
  ],
  "ans": "许多年轻人表示，在徐前的店里能感受到快乐。",
  "audio": "许多年轻人表示，在徐前的店里能感受到快乐。"
 }
];
var mcData = [
 {
  "q": "这里茶叶这么多，＿＿买哪种好呢？",
  "opts": [
   "究竟",
   "首先",
   "加上",
   "暂时"
  ],
  "ans": 0,
  "exp": "究竟 dùng trong câu hỏi để truy hỏi: rốt cuộc."
 },
 {
  "q": "你明天究竟去＿＿？",
  "opts": [
   "不去",
   "吗",
   "了",
   "吧"
  ],
  "ans": 0,
  "exp": "Câu có 究竟 dùng câu hỏi chính phản V不V, không dùng 吗."
 },
 {
  "q": "＿＿看样子喜不喜欢，然后再看质量怎么样。",
  "opts": [
   "首先",
   "其次",
   "加上",
   "对于"
  ],
  "ans": 0,
  "exp": "首先……，然后……: thứ tự trước sau."
 },
 {
  "q": "我选这家公司，首先是因为离家近，＿＿是因为工资高。",
  "opts": [
   "其次",
   "然后",
   "首先",
   "加上"
  ],
  "ans": 0,
  "exp": "Liệt kê lý do chính – phụ → 首先……，其次……"
 },
 {
  "q": "小店的东西适合年轻人，＿＿店员态度友好，所以生意越来越好。",
  "opts": [
   "加上",
   "对于",
   "究竟",
   "首先"
  ],
  "ans": 0,
  "exp": "加上 thêm một lý do cùng chiều, sau đó là kết quả."
 },
 {
  "q": "＿＿这个问题，大家有什么看法？",
  "opts": [
   "对于",
   "加上",
   "首先",
   "超过"
  ],
  "ans": 0,
  "exp": "对于 + đối tượng đứng đầu câu."
 },
 {
  "q": "他＿＿朋友非常热情。",
  "opts": [
   "对",
   "对于",
   "关于",
   "加上"
  ],
  "ans": 0,
  "exp": "Thái độ giữa người với người chỉ dùng 对, không dùng 对于."
 },
 {
  "q": "这种茶叶多少钱一＿＿？",
  "opts": [
   "两",
   "个",
   "件",
   "双"
  ],
  "ans": 0,
  "exp": "两 = lạng (50 g), đơn vị cân trà; 1 斤 = 10 两."
 },
 {
  "q": "我想买的那个手机现在＿＿货，过几天再来看看吧。",
  "opts": [
   "缺",
   "减",
   "满",
   "装"
  ],
  "ans": 0,
  "exp": "缺货 = hết hàng."
 },
 {
  "q": "买东西的时候，要从质量、价格等各方面＿＿比较。",
  "opts": [
   "仔细",
   "友好",
   "暂时",
   "许多"
  ],
  "ans": 0,
  "exp": "仔细 + V = làm kỹ lưỡng (✗ tử tế)."
 }
];
var speakingData = {
 "intro": "Nhấn nút loa nghe câu hỏi (câu hỏi phần Khởi động, câu hỏi đọc hiểu, kể lại bài khoá và đóng vai của sách), rồi tự ghi âm câu trả lời — cố dùng từ mới và 4 điểm ngữ pháp của bài: 究竟, 首先……然后/其次……, 加上, 对于.",
 "questions": [
  {
   "q_zh": "当你想买一个东西时，会不会等它降价的时候才买？",
   "q_vn": "Khi muốn mua một món đồ, bạn có đợi đến lúc nó giảm giá mới mua không?",
   "hint": "我一般会 / 不会……，因为……，加上……",
   "sample": "我一般会等它降价的时候才买。因为很多商品过一段时间就会降价，加上商场常常举办促销活动，等一等能省不少钱。不过，如果是马上就需要的东西，我就不等了。",
   "sample_vn": "Tôi thường đợi đến khi nó giảm giá mới mua. Vì nhiều mặt hàng một thời gian sau sẽ giảm giá, thêm vào đó trung tâm thương mại hay tổ chức khuyến mãi, đợi một chút tiết kiệm được kha khá. Nhưng nếu là đồ cần ngay thì tôi không đợi.",
   "note": "Câu hỏi phần Khởi động của sách; dùng 加上 (điểm 3)."
  },
  {
   "q_zh": "买东西时，你觉得质量和价格哪个更重要？",
   "q_vn": "Khi mua đồ, bạn thấy chất lượng và giá cả cái nào quan trọng hơn?",
   "hint": "我觉得……更重要。首先……，其次……",
   "sample": "我觉得质量更重要。首先，质量好的东西能用很长时间，其实更省钱；其次，质量不好的东西很快就坏了，最后还成了垃圾，不环保。当然，价格也要合适。",
   "sample_vn": "Tôi thấy chất lượng quan trọng hơn. Thứ nhất, đồ chất lượng tốt dùng được lâu, thật ra còn tiết kiệm hơn; thứ hai, đồ kém chất lượng nhanh hỏng, cuối cùng thành rác, không bảo vệ môi trường. Tất nhiên giá cũng phải hợp lý.",
   "note": "Câu hỏi phần Khởi động của sách; dùng 首先……，其次…… (điểm 2), ôn 环保 (Bài 10)."
  },
  {
   "q_zh": "安妮为什么要买茶叶？关于买茶叶送人，售货员有什么建议？",
   "q_vn": "Vì sao Annie mua trà? Về việc mua trà để biếu, người bán hàng có gợi ý gì?",
   "hint": "安妮想……，再……。售货员建议她……",
   "sample": "安妮想买一些茶叶自己喝，再买些送人。售货员建议她买个盒子，把送人的茶叶装进去。",
   "sample_vn": "Annie muốn mua một ít trà để tự uống, mua thêm ít để biếu người khác. Người bán gợi ý cô mua một cái hộp, đựng phần trà biếu vào đó.",
   "note": "Câu hỏi bài khoá 1."
  },
  {
   "q_zh": "请根据提示复述课文一。",
   "q_vn": "Dựa vào gợi ý, kể lại bài khoá 1.",
   "hint": "安妮到茶叶店买茶叶，售货员问她……。她不知道究竟买……。安妮想买一些茶……，再……。但她想买的一种绿茶……。安妮最后买了……",
   "sample": "安妮到茶叶店买茶叶，售货员问她要什么茶。她不知道究竟买哪种好，售货员向她介绍了不同的茶叶。安妮想买一些茶自己喝，再买些送人。但她想买的一种绿茶暂时没有了。售货员向她介绍说，自己喝的话，可以买另一种绿茶，今天满二两送半两，超过半斤再送小礼物；送人的话，可以买个盒子装进去。安妮最后买了六两绿茶和一个盒子，盒子里装了半斤，剩下的用纸包起来了。",
   "sample_vn": "Annie đến tiệm trà mua trà, người bán hỏi cô muốn trà gì. Cô không biết rốt cuộc nên mua loại nào, người bán giới thiệu các loại trà khác nhau… Cuối cùng Annie mua sáu lạng trà xanh và một cái hộp, trong hộp để nửa cân, phần còn lại gói giấy.",
   "note": "Bài tập 复述 của sách (trang 40)."
  },
  {
   "q_zh": "听了广播后，王一雪为什么要过去看看？",
   "q_vn": "Nghe loa thông báo xong, vì sao Vương Nhất Tuyết muốn qua xem?",
   "hint": "因为广播里说……，价格……",
   "sample": "因为广播里说商场正在举办运动鞋促销活动，全场五折，价格减了一半。",
   "sample_vn": "Vì loa nói trung tâm thương mại đang khuyến mãi giày thể thao, toàn bộ giảm 50%, giá giảm một nửa.",
   "note": "Câu hỏi bài khoá 2."
  },
  {
   "q_zh": "王一雪是怎么决定买那双运动鞋的？",
   "q_vn": "Vương Nhất Tuyết đã quyết định mua đôi giày thể thao đó như thế nào?",
   "hint": "她首先……，然后再……。这个牌子……，样式……，价钱……",
   "sample": "她首先看样子喜不喜欢，然后再看质量怎么样、价格合适不合适。这个牌子质量很好，鞋的样式很新，今天又降价，价钱也不高，所以她决定买一双37号的。",
   "sample_vn": "Trước hết cô xem kiểu dáng có thích không, sau đó mới xem chất lượng, giá cả có hợp lý không. Hãng này chất lượng tốt, kiểu dáng mới, hôm nay lại giảm giá, giá không cao, nên cô quyết định mua một đôi số 37.",
   "note": "Câu hỏi bài khoá 2; dùng 首先……，然后…… (điểm 2)."
  },
  {
   "q_zh": "年轻人为什么喜欢徐前店里的东西？徐前店里的生意做得怎么样？",
   "q_vn": "Vì sao người trẻ thích đồ ở tiệm Từ Tiền? Việc buôn bán của tiệm thế nào?",
   "hint": "因为徐前自己……，知道……。店里商品种类……，既有……，也有……。加上……，使得……",
   "sample": "因为徐前自己就是年轻人，知道年轻人喜欢什么。他的店里商品种类不少，既有老游戏机，也有流行的盲盒。东西适合年轻人，加上店员态度友好，使得小店的生意越来越好。",
   "sample_vn": "Vì Từ Tiền chính là người trẻ, biết người trẻ thích gì. Tiệm anh có nhiều loại hàng, vừa có máy game cũ vừa có hộp mù thịnh hành. Đồ hợp với người trẻ, thêm vào đó nhân viên thân thiện, khiến tiệm buôn bán ngày càng tốt.",
   "note": "Câu hỏi bài khoá 3; dùng 加上 (điểm 3) + 使得, ôn 既……也…… (Bài 4)."
  },
  {
   "q_zh": "请根据提示复述课文三。",
   "q_vn": "Dựa vào gợi ý, kể lại bài khoá 3.",
   "hint": "李文的朋友徐前在商业区……，专门卖……。他的店里商品……，既有……，也有……。徐前说……。小店虽然小，但……，加上……，使得……",
   "sample": "李文的朋友徐前在商业区开了家小店，专门卖年轻人喜欢的东西。他的店里商品种类不少，既有几十年前的老游戏机，也有最近流行的盲盒等等，很吸引年轻人。徐前说，自己就是年轻人，知道年轻人喜欢什么。他也常和来店里的年轻顾客聊天儿，了解他们的兴趣爱好。前段时间刚进的盲盒很快就卖到了缺货。许多年轻人表示，在徐前的店里能感受到快乐。小店虽然小，但东西适合年轻人，加上店员态度友好，使得小店的生意越来越好。李文觉得自己的朋友真会做生意。",
   "sample_vn": "Bạn của Lý Văn là Từ Tiền mở một tiệm nhỏ ở khu thương mại, chuyên bán đồ người trẻ thích… Tiệm tuy nhỏ nhưng đồ hợp với người trẻ, thêm vào đó nhân viên thân thiện, khiến việc buôn bán ngày càng tốt. Lý Văn thấy bạn mình thật biết làm ăn.",
   "note": "Bài tập 复述 của sách (trang 44)."
  },
  {
   "q_zh": "冷静购物者和不冷静购物者最大的不同是什么？王一飞是冷静购物者吗？为什么？",
   "q_vn": "Điểm khác nhau lớn nhất giữa người mua sắm tỉnh táo và không tỉnh táo là gì? Vương Nhất Phi có phải người mua sắm tỉnh táo không? Vì sao?",
   "hint": "冷静购物者……才买；不冷静购物者只要……就买。王一飞……，对于想买的东西，她不光……，还……",
   "sample": "冷静购物者真正需要一件东西时才买，还会仔细比较；不冷静购物者只要感觉喜欢就买，不管需要不需要。王一飞是冷静购物者，因为她从来不随便买东西，对于想买的东西，她不光看质量，还看价格，都是仔细比较后才决定买不买。",
   "sample_vn": "Người mua sắm tỉnh táo chỉ mua khi thật sự cần và còn so sánh kỹ; người không tỉnh táo cứ thấy thích là mua, bất kể có cần hay không. Vương Nhất Phi là người tỉnh táo, vì cô chưa bao giờ mua đồ tùy tiện; với thứ muốn mua, cô không chỉ xem chất lượng mà còn xem giá, đều so sánh kỹ rồi mới quyết định.",
   "note": "Câu hỏi bài khoá 4; dùng 对于 (điểm 4), ôn 从来 (Bài 9) và 不光……还…… (Bài 3)."
  },
  {
   "q_zh": "角色扮演：两人一组，一人扮演顾客，一人扮演售货员。顾客想买一个手机，售货员向顾客做介绍，最后顾客觉得合适，买下了这个手机。",
   "q_vn": "Đóng vai: hai người một nhóm, một người là khách hàng, một người là nhân viên bán hàng. Khách muốn mua điện thoại, nhân viên giới thiệu, cuối cùng khách thấy hợp và mua chiếc điện thoại đó.",
   "hint": "顾客：……究竟买哪个好呢？ 售货员：首先……，其次……，加上今天……。 顾客：对于……，我……",
   "sample": "顾客：您好，我想买一个手机，可是这里手机这么多，究竟买哪个好呢？售货员：您好！您平时主要用手机做什么？顾客：我经常拍照，也常用手机看电影。售货员：那我建议您看看这个。首先，它拍照特别清楚；其次，用一整天都不用充电。加上今天正在做促销活动，一部减三百块，非常合适。顾客：这个牌子我知道，质量不错，样式也挺新的。现在多少钱？售货员：原来三千，现在两千七，满两千还送一副耳机。顾客：对于这个价钱，我挺满意的。就买这个吧！售货员：好的，请到这边付钱。",
   "sample_vn": "Khách: Chào anh, tôi muốn mua điện thoại, nhưng ở đây nhiều thế này, rốt cuộc nên mua chiếc nào? — Nhân viên: Chào chị! Chị thường dùng điện thoại để làm gì? — Khách: Tôi hay chụp ảnh, cũng hay xem phim. — Nhân viên: Vậy chị xem chiếc này. Thứ nhất, chụp ảnh rất nét; thứ hai, dùng cả ngày không cần sạc. Thêm vào đó hôm nay đang khuyến mãi, mỗi chiếc giảm 300 tệ, rất đáng. — Khách: Hãng này tôi biết, chất lượng tốt, kiểu dáng cũng mới. Giờ bao nhiêu tiền? — Nhân viên: Giá gốc 3000, giờ 2700, mua đủ 2000 còn tặng một bộ tai nghe. — Khách: Với giá này tôi rất hài lòng. Lấy chiếc này nhé! — Nhân viên: Vâng, mời chị qua bên này thanh toán.",
   "note": "Hoạt động 任务活动 · 角色扮演 (đóng vai) của sách, trang 48 — dùng đủ 4 điểm ngữ pháp: 究竟, 首先……其次……, 加上, 对于 cùng các từ 牌子, 样式, 促销, 减, 满."
  }
 ]
};
var translateData = [
 {
  "vi": "Ở đây nhiều loại trà thế này, rốt cuộc nên mua loại nào đây?",
  "zh": "这里茶叶这么多，究竟买哪种好呢？",
  "py": "Zhèli cháyè zhème duō, jiūjìng mǎi nǎ zhǒng hǎo ne?"
 },
 {
  "vi": "Trước hết xem kiểu dáng có thích không, sau đó mới xem chất lượng thế nào.",
  "zh": "首先看样子喜不喜欢，然后再看质量怎么样。",
  "py": "Shǒuxiān kàn yàngzi xǐ bu xǐhuan, ránhòu zài kàn zhìliàng zěnmeyàng."
 },
 {
  "vi": "Đồ hợp với người trẻ, thêm vào đó nhân viên thân thiện, khiến việc buôn bán của tiệm ngày càng tốt.",
  "zh": "东西适合年轻人，加上店员态度友好，使得小店的生意越来越好。",
  "py": "Dōngxi shìhé niánqīngrén, jiāshàng diànyuán tàidù yǒuhǎo, shǐde xiǎodiàn de shēngyi yuèláiyuè hǎo."
 },
 {
  "vi": "Đối với những thứ muốn mua, cô ấy không chỉ xem chất lượng mà còn xem giá.",
  "zh": "对于想买的东西，她不光看质量，还看价格。",
  "py": "Duìyú xiǎng mǎi de dōngxi, tā bùguāng kàn zhìliàng, hái kàn jiàgé."
 },
 {
  "vi": "Xin lỗi, tạm thời hết hàng.",
  "zh": "抱歉，暂时没有。",
  "py": "Bàoqiàn, zànshí méiyǒu."
 },
 {
  "vi": "Hãng này chất lượng rất tốt, hôm nay lại giảm giá.",
  "zh": "这个牌子质量很好，今天又降价了。",
  "py": "Zhège páizi zhìliàng hěn hǎo, jīntiān yòu jiàngjià le."
 }
];
var translateDataRev = [
 {
  "vi": "Trà chủ yếu chia thành hồng trà, lục trà…",
  "zh": "茶叶主要分为红茶、绿茶等。",
  "py": "Cháyè zhǔyào fēnwéi hóngchá, lǜchá děng."
 },
 {
  "vi": "Hôm nay mua đủ hai lạng tặng nửa lạng, quá nửa cân còn tặng thêm quà nhỏ.",
  "zh": "今天满二两送半两，超过半斤再送小礼物。",
  "py": "Jīntiān mǎn èr liǎng sòng bàn liǎng, chāoguò bàn jīn zài sòng xiǎo lǐwù."
 },
 {
  "vi": "Lô hộp mù vừa nhập về bán nhanh đến mức hết hàng.",
  "zh": "刚进的盲盒很快就卖到了缺货。",
  "py": "Gāng jìn de mánghé hěn kuài jiù mài dào le quē huò."
 },
 {
  "vi": "Người mua sắm tỉnh táo thường chỉ mua khi thật sự cần một món đồ.",
  "zh": "冷静购物者往往是真正需要一件东西时才买。",
  "py": "Lěngjìng gòuwù zhě wǎngwǎng shì zhēnzhèng xūyào yí jiàn dōngxi shí cái mǎi."
 },
 {
  "vi": "Chọn cái phù hợp mới là tốt nhất.",
  "zh": "选择合适的才是最好的。",
  "py": "Xuǎnzé héshì de cái shì zuìhǎo de."
 }
];
var sgkData = [
 {
  "kieu": "kho",
  "de": "选词填空（一）· 综合练习",
  "vn": "Chọn từ thích hợp điền vào chỗ trống (Bài tập tổng hợp, sách trang 46–47).",
  "dapSgk": false,
  "tu": [
   "暂时",
   "表示",
   "减",
   "态度",
   "两",
   "缺"
  ],
  "cau": [
   {
    "s": "这家饭馆不仅菜好吃，服务员服务＿＿也特别好，所以我们经常来。",
    "dap": [
     "态度"
    ]
   },
   {
    "s": "茶叶一次不用买太多，买六＿＿就够喝一段时间了。",
    "dap": [
     "两"
    ]
   },
   {
    "s": "马上到景区了，大家准备下车，不需要的东西可以＿＿放在车上。",
    "dap": [
     "暂时"
    ]
   },
   {
    "s": "网上商店正在做活动，除了直接降价外，还有满100＿＿30的活动，挺值的。",
    "dap": [
     "减"
    ]
   },
   {
    "s": "我要买的那个手机现在＿＿货，过几天再去看看来没来货。",
    "dap": [
     "缺"
    ]
   },
   {
    "s": "高医生＿＿，病人过几天如果没什么问题就可以出院了。",
    "dap": [
     "表示"
    ]
   }
  ]
 },
 {
  "kieu": "kho",
  "de": "选词填空（二）· 综合练习",
  "vn": "Chọn từ thích hợp điền vào chỗ trống (hội thoại, sách trang 47).",
  "dapSgk": false,
  "tu": [
   "许多",
   "者",
   "不光",
   "分为",
   "友好",
   "顾客"
  ],
  "cau": [
   {
    "s": "A：您的学生学习都很好！　B：是的，他们＿＿学习成绩优秀，还经常帮助别人。",
    "dap": [
     "不光"
    ]
   },
   {
    "s": "A：这家店人真多！　B：嗯，他们的商品种类多、价格合适，服务还特别好，所以很多＿＿都喜欢来这里买东西。",
    "dap": [
     "顾客"
    ]
   },
   {
    "s": "A：您能简单介绍一下武汉长江大桥（Wǔhàn Chángjiāng Dàqiáo, cầu Trường Giang Vũ Hán）吗？　B：这座桥全长1670米，＿＿上下两层，是长江上的第一座大桥。",
    "dap": [
     "分为"
    ]
   },
   {
    "s": "A：这个动物园虽然比较远，但动物特别多，有＿＿我以前没见过的动物。　B：是吗？有机会我也去看看。",
    "dap": [
     "许多"
    ]
   },
   {
    "s": "A：你这次去那儿玩感觉怎么样？　B：挺不错的，那里的人都很热情、＿＿，也给了我们很多帮助。",
    "dap": [
     "友好"
    ]
   },
   {
    "s": "A：电子邮件发出后，我才发现会议时间写错了。　B：那你快给参会＿＿重新发邮件，向他们道歉，并告诉他们正确（zhèngquè, chính xác）的时间。",
    "dap": [
     "者"
    ]
   }
  ]
 },
 {
  "kieu": "kho",
  "de": "选择合适的内容完成短文",
  "vn": "Chọn nội dung thích hợp (A–D) hoàn thành đoạn văn (sách trang 47).",
  "dapSgk": false,
  "tu": [
   "对于买衣服这件事",
   "但现在她更喜欢在网上买",
   "她都会仔细看商品介绍",
   "既不浪费钱"
  ],
  "cau": [
   {
    "s": "吴红在一家公司上班，工资挺高的。和许多女孩子一样，她喜欢买衣服。＿＿，她的想法是：不需要的就不买，只买对的，不买贵的。以前，吴红喜欢去商场买衣服，＿＿。网上的选择多，每次看到喜欢的，＿＿，看颜色、大小、样子是不是自己满意的，都看好了才付钱。这样买东西，＿＿，又能买到自己喜欢的。每次穿上新衣服，她都挺开心的。",
    "dap": [
     "对于买衣服这件事",
     "但现在她更喜欢在网上买",
     "她都会仔细看商品介绍",
     "既不浪费钱"
    ]
   }
  ]
 },
 {
  "kieu": "gx",
  "de": "看图，用词语造句",
  "vn": "Nhìn tranh, đặt câu với từ cho sẵn (câu dưới đây là câu tham khảo — câu của em đúng ngữ pháp, hợp tranh là đạt).",
  "cau": [
   {
    "anh": "/images/hsk4v3/bai-14/bt-1.webp",
    "s": "",
    "tu": "商品",
    "dap": "这家店的商品种类很多，各种各样的碗和盘子都有。",
    "giai": "商品种类很多 — cụm từ của bài khoá 3; 各种各样的 + N = đủ loại …"
   },
   {
    "anh": "/images/hsk4v3/bai-14/bt-2.webp",
    "s": "",
    "tu": "仔细",
    "dap": "这个孩子正在仔细地观察植物。",
    "giai": "正在 + 仔细地 + V: đang làm gì một cách kỹ lưỡng; 观察 = quan sát; ôn 植物 (Bài 10)."
   },
   {
    "anh": "/images/hsk4v3/bai-14/bt-3.webp",
    "s": "",
    "tu": "友好",
    "dap": "这位护士对老奶奶非常友好。",
    "giai": "对 + ai + 很 / 非常友好 = thân thiện với ai; ôn 护士 (Bài 6). Có thể nói thêm: 她的态度很友好。"
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
  "tieuDe": "Viết đoạn văn kể kinh nghiệm mua sắm (写作)",
  "gioiThieu": "Đề 写作 của sách HSK 4 (3.0) yêu cầu viết một bài văn ngắn (ít nhất 140 chữ) kể THÓI QUEN và một LẦN MUA SẮM CỤ THỂ của em ở siêu thị / trung tâm thương mại — giống phần 书写 của đề thi HSK 4 mới. Bài nên có cả kể chuyện lẫn rút ra quan niệm: “hợp mới mua”.",
  "buoc": [
   "Đọc kỹ đề: phải có HAI phần — (1) bình thường em mua sắm thế nào, (2) một lần cụ thể em đi siêu thị / trung tâm thương mại mua đồ.",
   "Lập dàn ý theo các câu hỏi gợi ý: mỗi câu hỏi là một ý, viết 1–2 câu cho mỗi ý (khi nào đi, mua gì, so sánh ra sao, có khuyến mãi không, kết quả và suy nghĩ).",
   "Dùng từ mới của bài (顾客、促销、降价、减、牌子、样式、价钱、商品、仔细、态度…) và 4 điểm ngữ pháp: 究竟, 首先……然后/其次……, 加上, 对于.",
   "Nối các ý bằng từ nối: 首先 / 然后 / 其次 / 最后; ôn 不光……还……, 无论……都……, 即使……也…….",
   "Câu mở nêu thói quen mua sắm, câu kết rút ra quan niệm (合适的才是最好的); tự soát số chữ (≥ 140) và lỗi chữ Hán trước khi nộp."
  ]
 },
 "de": "你平时一般怎么购物？请根据你去超市或商场买东西的经历，写一篇短文，不少于140字。",
 "prompt": "Bình thường em thường mua sắm như thế nào? Hãy dựa vào trải nghiệm đi siêu thị hoặc trung tâm thương mại mua đồ của em, viết một bài văn ngắn, không ít hơn 140 chữ.",
 "dan": [
  {
   "hoi": "你平时一般什么时候、去哪儿买东西？",
   "goiY": "我平时一般在……去超市 / 商场买东西。"
  },
  {
   "hoi": "对于购物，你有什么想法？",
   "goiY": "对于购物，我的想法是……；买东西以前，我首先……，然后……"
  },
  {
   "hoi": "有一次你去买什么？商场在做什么活动？",
   "goiY": "上个月我想买……，正好商场在举办……促销活动，满……减……"
  },
  {
   "hoi": "你是怎么比较、怎么决定的？",
   "goiY": "我不光看……，还看……；这个牌子……，加上……，所以……"
  },
  {
   "hoi": "最后买了没有？你有什么感受？",
   "goiY": "最后我……。我觉得买东西不能只看……，合适的才是最好的。"
  }
 ],
 "tuNen": [
  "顾客",
  "促销",
  "降价",
  "减",
  "满",
  "牌子",
  "样式",
  "价钱",
  "商品",
  "种类",
  "仔细",
  "态度",
  "友好",
  "广告"
 ],
 "cauTruc": [
  {
   "ten": "对于……，……",
   "nhan": "对于",
   "vd": "对于购物，我的想法是：合适才买。",
   "khi": "Câu MỞ: nêu quan niệm mua sắm của em."
  },
  {
   "ten": "首先……，然后……",
   "nhan": "首先",
   "vd": "出门以前，我首先想想自己究竟需要什么，然后把要买的东西写下来。",
   "khi": "Kể các bước chuẩn bị theo thứ tự."
  },
  {
   "ten": "究竟……？",
   "nhan": "究竟",
   "vd": "这么多外套，究竟买哪件好呢？",
   "khi": "Diễn tả sự phân vân khi chọn đồ."
  },
  {
   "ten": "……，加上……，所以……",
   "nhan": "加上",
   "vd": "这件外套质量很好，加上正在促销，所以我买了。",
   "khi": "Giải thích lý do quyết định mua."
  },
  {
   "ten": "不光……，还……",
   "nhan": "不光",
   "vd": "买东西时，我不光看质量，还看价格。",
   "khi": "Nói cách em so sánh hàng hóa."
  }
 ],
 "checklist": [
  "Đủ ít nhất 140 chữ Hán chưa?",
  "Đã có cả hai phần: thói quen mua sắm thường ngày và một lần mua sắm cụ thể ở siêu thị / trung tâm thương mại chưa?",
  "Đã dùng ít nhất 3 trong 4 điểm ngữ pháp của bài (究竟、首先……然后/其次……、加上、对于) chưa?",
  "Đã dùng ít nhất 6 từ mới của bài chưa?",
  "Bài có câu mở nêu thói quen và câu kết rút ra quan niệm (合适的才是最好的) chưa?"
 ],
 "model": {
  "zh": "我平时一般在周末去超市或者商场买东西。对于购物，我的想法是：合适才买。每次出门以前，我首先想想自己究竟需要什么，然后把要买的东西写下来。到了商场，我不光看质量，还看价格，会从各方面仔细比较。上个月，我想买一件外套。有一家店正在举办促销活动，全场五折，加上售货员态度很友好，我差点儿就买了一件很贵的。可是我仔细一看，发现那件外套的样式并不适合我，就没有买。后来，我在另一家店买到了一件价钱不高、质量也很好的外套，穿起来很舒服。我觉得，买东西不能只看广告和低价，选择合适的才是最好的。",
  "py": "Wǒ píngshí yìbān zài zhōumò qù chāoshì huòzhě shāngchǎng mǎi dōngxi. Duìyú gòuwù, wǒ de xiǎngfǎ shì: héshì cái mǎi. Měi cì chūmén yǐqián, wǒ shǒuxiān xiǎngxiang zìjǐ jiūjìng xūyào shénme, ránhòu bǎ yào mǎi de dōngxi xiěxiàlái. Dào le shāngchǎng, wǒ bùguāng kàn zhìliàng, hái kàn jiàgé, huì cóng gè fāngmiàn zǐxì bǐjiào. Shàng gè yuè, wǒ xiǎng mǎi yí jiàn wàitào. Yǒu yì jiā diàn zhèngzài jǔbàn cùxiāo huódòng, quán chǎng wǔ zhé, jiāshàng shòuhuòyuán tàidù hěn yǒuhǎo, wǒ chàdiǎnr jiù mǎi le yí jiàn hěn guì de. Kěshì wǒ zǐxì yí kàn, fāxiàn nà jiàn wàitào de yàngshì bìng bú shìhé wǒ, jiù méiyǒu mǎi. Hòulái, wǒ zài lìng yì jiā diàn mǎidào le yí jiàn jiàqián bù gāo, zhìliàng yě hěn hǎo de wàitào, chuān qǐlai hěn shūfu. Wǒ juéde, mǎi dōngxi bù néng zhǐ kàn guǎnggào hé dījià, xuǎnzé héshì de cái shì zuìhǎo de."
 }
};
