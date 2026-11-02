// HSK 4 (3.0) · Bai 5 — sinh boi tools/hsk4v3/gan.js tu tools/hsk4v3/bai-5/ (dung sua tay).
var vocabData = [
 {
  "n": 1,
  "zh": "至少",
  "py": "zhìshǎo",
  "pos": "Phó từ",
  "vn": "ít nhất, tối thiểu",
  "hv": "chí thiểu",
  "em": "⬇️",
  "lesson": 1,
  "explain": [
   "Phó từ phạm vi: thời gian, số lượng, mức độ… không thấp hơn một giới hạn nhỏ nhất.",
   "Cũng dùng để nói “dù sao cũng còn được điều này”: 至少很干净 (ít ra cũng sạch)."
  ],
  "usage": "至少 + số lượng / thời gian · 至少要 + V · 至少 + 在 + nơi chốn + V.",
  "collo": [
   "至少两个月",
   "至少要",
   "至少一次",
   "至少很干净"
  ],
  "colloFull": [
   {
    "zh": "至少两个月",
    "py": "Zhìshǎo liǎng gè yuè",
    "vn": "ít nhất hai tháng"
   },
   {
    "zh": "至少要",
    "py": "Zhìshǎo yào",
    "vn": "ít nhất phải"
   },
   {
    "zh": "至少一次",
    "py": "Zhìshǎo yí cì",
    "vn": "ít nhất một lần"
   },
   {
    "zh": "至少很干净",
    "py": "Zhìshǎo hěn gānjìng",
    "vn": "ít ra cũng sạch sẽ"
   }
  ],
  "patterns": [
   {
    "s": "至少 + số lượng / thời gian",
    "m": "Không ít hơn mức này"
   },
   {
    "s": "Adj 是 Adj，不过至少……",
    "m": "Chê một mặt, rồi nêu cái “ít ra cũng được” (ôn Bài 3 · điểm 1)"
   }
  ],
  "ex_zh": "家月，你来中国至少两个月了，习惯吃中餐了吗？",
  "ex_py": "Jiāyuè, nǐ lái Zhōngguó zhìshǎo liǎng gè yuè le, xíguàn chī zhōngcān le ma?",
  "ex_vn": "Gia Nguyệt, cháu đến Trung Quốc ít nhất cũng hai tháng rồi, đã quen ăn món Trung chưa?",
  "exList": [
   {
    "zh": "家月，你来中国至少两个月了，习惯吃中餐了吗？",
    "py": "Jiāyuè, nǐ lái Zhōngguó zhìshǎo liǎng gè yuè le, xíguàn chī zhōngcān le ma?",
    "vn": "Gia Nguyệt, cháu đến Trung Quốc ít nhất cũng hai tháng rồi, đã quen ăn món Trung chưa?"
   },
   {
    "zh": "每年至少有两百名留学生来我校学习中文专业。",
    "py": "Měi nián zhìshǎo yǒu liǎng bǎi míng liúxuéshēng lái wǒ xiào xuéxí Zhōngwén zhuānyè.",
    "vn": "Mỗi năm có ít nhất hai trăm du học sinh đến trường chúng tôi học chuyên ngành tiếng Trung."
   }
  ],
  "hanzi": [
   {
    "c": "至",
    "p": "zhì",
    "type": "独体字 · Chữ đơn",
    "st": 6,
    "ord": "nét liền",
    "rad": "至 (chí – đến)",
    "mean": "đến, tới mức",
    "tip": "Chữ tượng hình mũi tên CẮM ĐẾN đất → nghĩa gốc là ĐẾN, TỚI MỨC, kết hợp 少(ít) thành 至少 = ÍT NHẤT (mức tối thiểu).",
    "cf": "到 (dào – \"đến\", bộ 刂\")",
    "w": "至少 / 甚至 / 至今"
   },
   {
    "c": "少",
    "p": "shǎo",
    "type": "独体字 · Chữ đơn",
    "st": 4,
    "ord": "小(biến thể) → 丿",
    "rad": "小 (tiểu – nhỏ, biến thể)",
    "mean": "ít",
    "tip": "小(nhỏ) thêm một nét phẩy → càng NHỎ, ÍT hơn nữa; ghép với 多(nhiều) để hỏi SỐ LƯỢNG.",
    "cf": "小 (xiǎo – \"nhỏ\")",
    "w": "不少 / 多少"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Nhà này cũ thì có cũ, nhưng ít ra cũng rất sạch.",
    "answer": "旧是旧，不过至少很干净。",
    "answerPy": "Jiù shì jiù, búguò zhìshǎo hěn gānjìng.",
    "note": "Đáp án gợi ý của sách; ôn ×是×，不过…… (Bài 3 · điểm 1).",
    "pair": "×是×，不过至少……"
   },
   {
    "promptLang": "vi",
    "prompt": "Nếu bạn muốn đỗ HSK 4 thì mỗi ngày phải học ít nhất hai tiếng.",
    "answer": "要是你想通过HSK四级，就得每天至少学习两个小时。",
    "answerPy": "Yàoshì nǐ xiǎng tōngguò HSK sì jí, jiù děi měi tiān zhìshǎo xuéxí liǎng gè xiǎoshí.",
    "note": "Ôn 要是……就…… (Bài 1 · điểm 2).",
    "pair": "要是……就至少……"
   }
  ]
 },
 {
  "n": 2,
  "zh": "中餐",
  "py": "zhōngcān",
  "pos": "Danh từ",
  "vn": "món ăn Trung Quốc, cơm Trung",
  "hv": "trung xan",
  "em": "🥢",
  "lesson": 1,
  "explain": [
   "Đồ ăn, bữa ăn theo kiểu Trung Quốc. Đối lập: 西餐 (món Tây)."
  ],
  "usage": "吃中餐 · 习惯吃中餐 · 中餐厅 · 中餐和西餐.",
  "collo": [
   "吃中餐",
   "中餐厅",
   "中餐和西餐",
   "习惯吃中餐"
  ],
  "colloFull": [
   {
    "zh": "吃中餐",
    "py": "Chī zhōngcān",
    "vn": "ăn món Trung"
   },
   {
    "zh": "中餐厅",
    "py": "Zhōng cāntīng",
    "vn": "nhà hàng Trung Hoa"
   },
   {
    "zh": "中餐和西餐",
    "py": "Zhōngcān hé xī cān",
    "vn": "món Trung và món Tây"
   },
   {
    "zh": "习惯吃中餐",
    "py": "Xíguàn chī zhōngcān",
    "vn": "quen ăn món Trung"
   }
  ],
  "patterns": [
   {
    "s": "习惯 + 吃 + 中餐",
    "m": "Quen ăn món Trung"
   },
   {
    "s": "中餐 ↔ 西餐",
    "m": "Món Trung ↔ món Tây"
   }
  ],
  "ex_zh": "家月，你来中国至少两个月了，习惯吃中餐了吗？",
  "ex_py": "Jiāyuè, nǐ lái Zhōngguó zhìshǎo liǎng gè yuè le, xíguàn chī zhōngcān le ma?",
  "ex_vn": "Gia Nguyệt, cháu đến Trung Quốc ít nhất cũng hai tháng rồi, đã quen ăn món Trung chưa?",
  "exList": [
   {
    "zh": "家月，你来中国至少两个月了，习惯吃中餐了吗？",
    "py": "Jiāyuè, nǐ lái Zhōngguó zhìshǎo liǎng gè yuè le, xíguàn chī zhōngcān le ma?",
    "vn": "Gia Nguyệt, cháu đến Trung Quốc ít nhất cũng hai tháng rồi, đã quen ăn món Trung chưa?"
   },
   {
    "zh": "我既喜欢吃中餐，又喜欢吃西餐。",
    "py": "Wǒ jì xǐhuan chī zhōngcān, yòu xǐhuan chī xī cān.",
    "vn": "Tôi vừa thích ăn món Trung, lại vừa thích ăn món Tây."
   }
  ],
  "hanzi": [
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
   },
   {
    "c": "餐",
    "p": "cān",
    "type": "上下结构 · Trên-dưới",
    "st": 16,
    "ord": "歺+又 trên → 食 dưới",
    "rad": "食 (thực – ăn)",
    "mean": "bữa ăn",
    "tip": "Bộ ăn 食 ở dưới + phần trên biểu âm → BỮA ĂN, kết hợp 厅(sảnh) thành 餐厅 = NHÀ HÀNG (ôn lại 客厅 Bài 11).",
    "cf": "同字词: 客厅 / 餐厅 / 大厅",
    "w": "餐厅 / 早餐 / 西餐"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Tôi vừa thích ăn món Trung, lại vừa thích ăn món Tây.",
    "answer": "我既喜欢吃中餐，又喜欢吃西餐。",
    "answerPy": "Wǒ jì xǐhuan chī zhōngcān, yòu xǐhuan chī xī cān.",
    "note": "Ôn 既……又…… (Bài 4 · điểm 3).",
    "pair": "既……又……"
   },
   {
    "promptLang": "vi",
    "prompt": "Mới đến Trung Quốc, bạn đã quen ăn món Trung chưa?",
    "answer": "刚来中国，你习惯吃中餐了吗？",
    "answerPy": "Gāng lái Zhōngguó, nǐ xíguàn chī zhōngcān le ma?",
    "note": "Câu hỏi thăm hỏi quen thuộc với du học sinh.",
    "pair": "习惯……了吗"
   }
  ]
 },
 {
  "n": 3,
  "zh": "专门",
  "py": "zhuānmén",
  "pos": "Phó từ / Tính từ",
  "vn": "riêng, đặc biệt (để làm gì); chuyên (môn)",
  "hv": "chuyên môn",
  "em": "🎯",
  "lesson": 1,
  "explain": [
   "Phó từ: làm một việc riêng vì một người / một mục đích (= đặc biệt, cố ý).",
   "Tính từ: chuyên về một lĩnh vực. Bẫy Hán Việt: 专门 ≠ “chuyên môn” (trình độ nghề) — trình độ chuyên môn là 专业水平."
  ],
  "usage": "专门为 + ai + V · 专门 + V · 专门的 + N.",
  "collo": [
   "专门为你做的",
   "专门来看你",
   "专门的老师",
   "专门研究"
  ],
  "colloFull": [
   {
    "zh": "专门为你做的",
    "py": "Zhuānmén wèi nǐ zuò de",
    "vn": "làm riêng cho bạn"
   },
   {
    "zh": "专门来看你",
    "py": "Zhuānmén lái kàn nǐ",
    "vn": "đến thăm bạn riêng (chỉ để thăm)"
   },
   {
    "zh": "专门的老师",
    "py": "Zhuānmén de lǎoshī",
    "vn": "giáo viên chuyên trách"
   },
   {
    "zh": "专门研究",
    "py": "Zhuānmén yánjiū",
    "vn": "chuyên nghiên cứu"
   }
  ],
  "patterns": [
   {
    "s": "专门 + 为 + ai + V",
    "m": "Làm riêng cho ai"
   },
   {
    "s": "是 + Sub + 专门 + V + 的",
    "m": "Câu 是……的 nhấn mạnh (HSK 3)"
   }
  ],
  "ex_zh": "你还没吃过水煮鱼吧？这是我专门为你做的。",
  "ex_py": "Nǐ hái méi chī guò Shuǐzhǔyú ba? Zhè shì wǒ zhuānmén wèi nǐ zuò de.",
  "ex_vn": "Cháu chưa ăn cá luộc cay Tứ Xuyên bao giờ nhỉ? Đây là món cô làm riêng cho cháu đấy.",
  "exList": [
   {
    "zh": "你还没吃过水煮鱼吧？这是我专门为你做的。",
    "py": "Nǐ hái méi chī guò Shuǐzhǔyú ba? Zhè shì wǒ zhuānmén wèi nǐ zuò de.",
    "vn": "Cháu chưa ăn cá luộc cay Tứ Xuyên bao giờ nhỉ? Đây là món cô làm riêng cho cháu đấy."
   },
   {
    "zh": "这是我专门为你准备的礼物，希望你喜欢。",
    "py": "Zhè shì wǒ zhuānmén wèi nǐ zhǔnbèi de lǐwù, xīwàng nǐ xǐhuan.",
    "vn": "Đây là món quà tôi chuẩn bị riêng cho bạn, mong bạn thích."
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
    "c": "门",
    "p": "mén",
    "type": "象形字 · Chữ tượng hình",
    "st": 3,
    "ord": "丶 → 丨 → 乛",
    "rad": "门 (môn – cửa)",
    "mean": "cửa",
    "tip": "出门 = bước ra khỏi cửa nhà, đi đâu đó.",
    "cf": "门口 (bài 9)",
    "w": "出门 / 门口 / 门票"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Đây là món quà tôi chuẩn bị riêng cho bạn, mong bạn thích.",
    "answer": "这是我专门为你准备的礼物，希望你喜欢。",
    "answerPy": "Zhè shì wǒ zhuānmén wèi nǐ zhǔnbèi de lǐwù, xīwàng nǐ xǐhuan.",
    "note": "Câu chọn từ của sách (综合练习 câu 5).",
    "pair": "专门为……"
   },
   {
    "promptLang": "vi",
    "prompt": "Anh ấy đến đây không chỉ để du lịch, mà còn đặc biệt đến để thăm thầy giáo cũ.",
    "answer": "他来这儿不仅是为了旅游，而且是专门来看老师的。",
    "answerPy": "Tā lái zhèr bùjǐn shì wèile lǚyóu, érqiě shì zhuānmén lái kàn lǎoshī de.",
    "note": "Ôn 不仅……而且…… (Bài 3 · điểm 2).",
    "pair": "不仅……而且……"
   }
  ]
 },
 {
  "n": 4,
  "zh": "煮",
  "py": "zhǔ",
  "pos": "Động từ",
  "vn": "luộc, nấu (trong nước)",
  "hv": "chử",
  "em": "🍲",
  "lesson": 1,
  "explain": [
   "Cho đồ ăn vào nước rồi đun sôi cho chín: luộc trứng, nấu mì, luộc bánh chẻo."
  ],
  "usage": "煮饺子 · 煮鸡蛋 · 煮面条 · 煮熟.",
  "collo": [
   "煮饺子",
   "煮鸡蛋",
   "煮面条",
   "煮熟"
  ],
  "colloFull": [
   {
    "zh": "煮饺子",
    "py": "Zhǔ jiǎozi",
    "vn": "luộc sủi cảo"
   },
   {
    "zh": "煮鸡蛋",
    "py": "Zhǔ jīdàn",
    "vn": "luộc trứng"
   },
   {
    "zh": "煮面条",
    "py": "Zhǔ miàntiáo",
    "vn": "nấu mì"
   },
   {
    "zh": "煮熟",
    "py": "Zhǔ shú",
    "vn": "luộc chín"
   }
  ],
  "patterns": [
   {
    "s": "把 + đồ ăn + 煮熟",
    "m": "Câu chữ 把 + bổ ngữ kết quả 熟"
   },
   {
    "s": "用水 + 煮",
    "m": "Luộc bằng nước"
   }
  ],
  "ex_zh": "这道菜是先用水把鱼煮熟，最后再倒上辣椒油。",
  "ex_py": "Zhè dào cài shì xiān yòng shuǐ bǎ yú zhǔ shú, zuìhòu zài dào shàng làjiāo yóu.",
  "ex_vn": "Món này là trước tiên dùng nước luộc chín cá, cuối cùng mới rưới dầu ớt lên.",
  "exList": [
   {
    "zh": "这道菜是先用水把鱼煮熟，最后再倒上辣椒油。",
    "py": "Zhè dào cài shì xiān yòng shuǐ bǎ yú zhǔ shú, zuìhòu zài dào shàng làjiāo yóu.",
    "vn": "Món này là trước tiên dùng nước luộc chín cá, cuối cùng mới rưới dầu ớt lên."
   },
   {
    "zh": "已经煮了十多分钟了，饺子熟了吧？",
    "py": "Yǐjīng zhǔ le shí duō fēnzhōng le, jiǎozi shú le ba?",
    "vn": "Đã luộc hơn mười phút rồi, sủi cảo chín rồi chứ?"
   }
  ],
  "hanzi": [
   {
    "c": "煮",
    "p": "zhǔ",
    "type": "形声字 · Chữ hình thanh",
    "st": 12,
    "ord": "者 → 灬",
    "rad": "灬 (hỏa – lửa, bốn chấm)",
    "mean": "luộc, nấu",
    "tip": "Trên là 者 zhě (chỉ âm), dưới là 灬 (lửa): đặt nồi trên lửa mà luộc — 煮饺子, 水煮鱼.",
    "cf": "著 zhù (nổi tiếng) — trên có bộ 艹; 者 zhě (người) — không có lửa",
    "w": "煮饭 / 煮饺子 / 水煮鱼"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Bạn luộc sủi cảo trước đi, tôi đi mua chút đồ uống.",
    "answer": "你先把饺子煮了，我去买点儿饮料。",
    "answerPy": "Nǐ xiān bǎ jiǎozi zhǔ le, wǒ qù mǎi diǎnr yǐnliào.",
    "note": "Câu chữ 把 (HSK 3).",
    "pair": "把……煮了"
   },
   {
    "promptLang": "vi",
    "prompt": "Đã luộc hơn mười phút rồi, sủi cảo chín rồi chứ?",
    "answer": "已经煮了十多分钟了，饺子熟了吧？",
    "answerPy": "Yǐjīng zhǔ le shí duō fēnzhōng le, jiǎozi shú le ba?",
    "note": "Câu chọn từ của sách (综合练习 câu 4).",
    "pair": "V了 + thời lượng + 了"
   }
  ]
 },
 {
  "n": 5,
  "zh": "油",
  "py": "yóu",
  "pos": "Danh từ",
  "vn": "dầu, mỡ (ăn)",
  "hv": "du",
  "em": "🫗",
  "lesson": 1,
  "explain": [
   "Dầu để nấu ăn (dầu ăn, dầu ớt…); cũng chỉ xăng dầu (加油 = đổ xăng / cố lên)."
  ],
  "usage": "一瓶油 · 辣椒油 · 油太多 · 少放油.",
  "collo": [
   "一瓶油",
   "辣椒油",
   "放油",
   "油太多"
  ],
  "colloFull": [
   {
    "zh": "一瓶油",
    "py": "Yì píng yóu",
    "vn": "một chai dầu"
   },
   {
    "zh": "辣椒油",
    "py": "Làjiāo yóu",
    "vn": "dầu ớt"
   },
   {
    "zh": "放油",
    "py": "Fàng yóu",
    "vn": "cho dầu"
   },
   {
    "zh": "油太多",
    "py": "Yóu tài duō",
    "vn": "nhiều dầu quá"
   }
  ],
  "patterns": [
   {
    "s": "一瓶 / 一层 + 油",
    "m": "Lượng từ 瓶 (chai), 层 (lớp)"
   },
   {
    "s": "加油 = đổ thêm dầu → cố lên",
    "m": "Nhớ lại Bài 1"
   }
  ],
  "ex_zh": "其实只有最上面那一层是油。",
  "ex_py": "Qíshí zhǐyǒu zuì shàngmian nà yì céng shì yóu.",
  "ex_vn": "Thật ra chỉ có lớp trên cùng là dầu thôi.",
  "exList": [
   {
    "zh": "其实只有最上面那一层是油。",
    "py": "Qíshí zhǐyǒu zuì shàngmian nà yì céng shì yóu.",
    "vn": "Thật ra chỉ có lớp trên cùng là dầu thôi."
   },
   {
    "zh": "家里没油了，你去超市买一瓶吧。",
    "py": "Jiā lǐ méi yóu le, nǐ qù chāoshì mǎi yì píng ba.",
    "vn": "Nhà hết dầu rồi, bạn ra siêu thị mua một chai nhé."
   }
  ],
  "hanzi": [
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
    "prompt": "Nhà hết dầu rồi, bạn ra siêu thị mua một chai nhé.",
    "answer": "家里没油了，你去超市买一瓶吧。",
    "answerPy": "Jiā lǐ méi yóu le, nǐ qù chāoshì mǎi yì píng ba.",
    "note": "Câu chọn từ của sách (综合练习 câu 1).",
    "pair": "没 + N + 了"
   },
   {
    "promptLang": "vi",
    "prompt": "Món này nhiều dầu quá, ăn nhiều thì không tốt cho sức khỏe.",
    "answer": "这道菜油太多了，吃多了对身体不好。",
    "answerPy": "Zhè dào cài yóu tài duō le, chī duō le duì shēntǐ bù hǎo.",
    "note": "Ôn 对……好 (HSK 3).",
    "pair": "对身体不好"
   }
  ]
 },
 {
  "n": 6,
  "zh": "道",
  "py": "dào",
  "pos": "Lượng từ",
  "vn": "món (ăn); đạo, bước (thủ tục); câu (đề)",
  "hv": "đạo",
  "em": "🍽️",
  "lesson": 1,
  "explain": [
   "Lượng từ cho món ăn (一道菜), cho đề thi (一道题), cho từng bước trong quy trình."
  ],
  "usage": "一道菜 · 这道菜 · 一道凉菜 · 一道题.",
  "collo": [
   "一道菜",
   "这道菜",
   "一道凉菜",
   "一道题"
  ],
  "colloFull": [
   {
    "zh": "一道菜",
    "py": "Yí dào cài",
    "vn": "một món ăn"
   },
   {
    "zh": "这道菜",
    "py": "Zhè dào cài",
    "vn": "món này"
   },
   {
    "zh": "一道凉菜",
    "py": "Yí dào liáng cài",
    "vn": "một món nguội"
   },
   {
    "zh": "一道题",
    "py": "Yí dào tí",
    "vn": "một câu hỏi (đề)"
   }
  ],
  "patterns": [
   {
    "s": "一 + 道 + 菜 / 题",
    "m": "Lượng từ cho món ăn, câu đề"
   },
   {
    "s": "一个菜 (khẩu ngữ) ≈ 一道菜 (trang trọng hơn)",
    "m": "Gọi món ở nhà hàng hay nói 一道菜"
   }
  ],
  "ex_zh": "这道菜是先用水把鱼煮熟，最后再倒上辣椒油。",
  "ex_py": "Zhè dào cài shì xiān yòng shuǐ bǎ yú zhǔ shú, zuìhòu zài dào shàng làjiāo yóu.",
  "ex_vn": "Món này là trước tiên dùng nước luộc chín cá, cuối cùng mới rưới dầu ớt lên.",
  "exList": [
   {
    "zh": "这道菜是先用水把鱼煮熟，最后再倒上辣椒油。",
    "py": "Zhè dào cài shì xiān yòng shuǐ bǎ yú zhǔ shú, zuìhòu zài dào shàng làjiāo yóu.",
    "vn": "Món này là trước tiên dùng nước luộc chín cá, cuối cùng mới rưới dầu ớt lên."
   },
   {
    "zh": "李文更喜欢吃咸的，选了红烧羊肉和一道凉菜。",
    "py": "Lǐ Wén gèng xǐhuan chī xián de, xuǎn le Hóngshāo Yángròu hé yí dào liáng cài.",
    "vn": "Lý Văn thích ăn mặn hơn, chọn món thịt dê kho tàu và một món nộm."
   }
  ],
  "hanzi": [
   {
    "c": "道",
    "p": "dào",
    "type": "半包围结构 · Bán bao vây",
    "st": 12,
    "ord": "首(thủ) trên → 辶(sước) bao dưới-trái",
    "rad": "辶 (sước – đi, bước đi)",
    "mean": "đường, đạo lý; nói, biết",
    "tip": "首(cái đầu, hướng) + 辶(bước đi) → đi theo hướng ĐẦU dẫn tới = con ĐƯỜNG, ĐẠO LÝ, và cũng là BIẾT rõ đường đi.",
    "cf": "到 (dào – \"đến\", cùng âm nhưng khác bộ 刂)",
    "w": "知道 / 道理 / 味道"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Món này trông thì rất cay, nhưng thật ra không cay lắm.",
    "answer": "这道菜看起来很辣，其实不太辣。",
    "answerPy": "Zhè dào cài kàn qǐlái hěn là, qíshí bú tài là.",
    "note": "Đáp án gợi ý bài nhìn tranh của sách (ý tương tự).",
    "pair": "看起来……其实……"
   },
   {
    "promptLang": "vi",
    "prompt": "Mỗi người gọi một món mình thích, vừa ăn vừa trò chuyện.",
    "answer": "每个人点一道自己喜欢的菜，边吃边聊。",
    "answerPy": "Měi gè rén diǎn yí dào zìjǐ xǐhuan de cài, biān chī biān liáo.",
    "note": "Ôn 边……边…… (HSK 3).",
    "pair": "边……边……"
   }
  ]
 },
 {
  "n": 7,
  "zh": "熟",
  "py": "shú",
  "pos": "Tính từ",
  "vn": "chín (đồ ăn); quen, thân quen",
  "hv": "thục",
  "em": "♨️",
  "lesson": 1,
  "explain": [
   "Đồ ăn đã nấu chín, trái cây đã chín.",
   "Quen biết, thông thạo. Chữ 熟 có hai cách đọc: khẩu ngữ hay đọc shóu (菜熟了), văn viết và từ hai âm tiết đọc shú (熟悉)."
  ],
  "usage": "煮熟 · 熟了 · 不熟 · 熟悉 (quen thuộc).",
  "collo": [
   "煮熟",
   "饺子熟了",
   "没做熟",
   "很熟悉"
  ],
  "colloFull": [
   {
    "zh": "煮熟",
    "py": "Zhǔ shú",
    "vn": "luộc chín"
   },
   {
    "zh": "饺子熟了",
    "py": "Jiǎozi shú le",
    "vn": "sủi cảo chín rồi"
   },
   {
    "zh": "没做熟",
    "py": "Méi zuò shú",
    "vn": "chưa nấu chín"
   },
   {
    "zh": "很熟悉",
    "py": "Hěn shúxī",
    "vn": "rất quen thuộc"
   }
  ],
  "patterns": [
   {
    "s": "V + 熟 (煮熟 / 做熟)",
    "m": "Bổ ngữ kết quả: làm cho chín"
   },
   {
    "s": "跟 + ai + 很熟",
    "m": "Quen thân với ai"
   }
  ],
  "ex_zh": "这道菜是先用水把鱼煮熟，最后再倒上辣椒油。",
  "ex_py": "Zhè dào cài shì xiān yòng shuǐ bǎ yú zhǔ shú, zuìhòu zài dào shàng làjiāo yóu.",
  "ex_vn": "Món này là trước tiên dùng nước luộc chín cá, cuối cùng mới rưới dầu ớt lên.",
  "exList": [
   {
    "zh": "这道菜是先用水把鱼煮熟，最后再倒上辣椒油。",
    "py": "Zhè dào cài shì xiān yòng shuǐ bǎ yú zhǔ shú, zuìhòu zài dào shàng làjiāo yóu.",
    "vn": "Món này là trước tiên dùng nước luộc chín cá, cuối cùng mới rưới dầu ớt lên."
   },
   {
    "zh": "我们虽然没有见过面，但至少在网上聊过很多次，也算比较熟悉了。",
    "py": "Wǒmen suīrán méiyǒu jiàn guò miàn, dàn zhìshǎo zài wǎngshàng liáo guò hěn duō cì, yě suàn bǐjiào shúxī le.",
    "vn": "Tuy chúng tôi chưa gặp mặt, nhưng ít nhất cũng đã trò chuyện trên mạng nhiều lần, coi như khá quen rồi."
   }
  ],
  "hanzi": [
   {
    "c": "熟",
    "p": "shú",
    "type": "形声字 · Chữ hình thanh",
    "st": 15,
    "ord": "享 → 丸 → 灬",
    "rad": "灬 (hỏa – lửa, bốn chấm)",
    "mean": "chín; quen thuộc",
    "tip": "Trên là 孰 shú (chỉ âm), dưới là 灬 (lửa): đun trên lửa cho đến khi chín. Đọc shú (熟悉) hoặc shóu (khẩu ngữ: 菜熟了).",
    "cf": "热 rè (nóng) — trên là 执, cũng có 灬",
    "w": "煮熟 / 熟悉 / 成熟"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Đã luộc hơn mười phút rồi, sủi cảo chín rồi chứ?",
    "answer": "已经煮了十多分钟了，饺子熟了吧？",
    "answerPy": "Yǐjīng zhǔ le shí duō fēnzhōng le, jiǎozi shú le ba?",
    "note": "Câu chọn từ của sách (综合练习 câu 4).",
    "pair": "……熟了吧"
   },
   {
    "promptLang": "vi",
    "prompt": "Thịt chưa nấu chín thì nhất định không ăn được.",
    "answer": "肉要是没做熟，就一定吃不了。",
    "answerPy": "Ròu yàoshi méi zuò shú, jiù yídìng chī bù liǎo.",
    "note": "Ôn 要是……就…… (Bài 1) + V不了 (Bài 4 · điểm 1).",
    "pair": "没做熟……吃不了"
   }
  ]
 },
 {
  "n": 8,
  "zh": "倒",
  "py": "dào",
  "pos": "Động từ",
  "vn": "đổ, rót, rưới",
  "hv": "đảo",
  "em": "🫖",
  "lesson": 1,
  "explain": [
   "Nghiêng vật chứa cho nước / dầu chảy ra: rót trà, đổ nước, rưới dầu. (Đọc dǎo là “ngã, đổ sập” — nghĩa khác.)"
  ],
  "usage": "倒水 · 倒茶 · 倒上辣椒油 · 倒进锅里.",
  "collo": [
   "倒水",
   "倒茶",
   "倒上辣椒油",
   "倒进去"
  ],
  "colloFull": [
   {
    "zh": "倒水",
    "py": "Dào shuǐ",
    "vn": "rót nước"
   },
   {
    "zh": "倒茶",
    "py": "Dào chá",
    "vn": "rót trà"
   },
   {
    "zh": "倒上辣椒油",
    "py": "Dào shàng làjiāo yóu",
    "vn": "rưới dầu ớt lên"
   },
   {
    "zh": "倒进去",
    "py": "Dào jìnqù",
    "vn": "đổ vào"
   }
  ],
  "patterns": [
   {
    "s": "给 + ai + 倒 + 茶 / 水",
    "m": "Rót trà / nước cho ai"
   },
   {
    "s": "倒上 / 倒进 + N",
    "m": "Bổ ngữ xu hướng"
   }
  ],
  "ex_zh": "这道菜是先用水把鱼煮熟，最后再倒上辣椒油。",
  "ex_py": "Zhè dào cài shì xiān yòng shuǐ bǎ yú zhǔ shú, zuìhòu zài dào shàng làjiāo yóu.",
  "ex_vn": "Món này là trước tiên dùng nước luộc chín cá, cuối cùng mới rưới dầu ớt lên.",
  "exList": [
   {
    "zh": "这道菜是先用水把鱼煮熟，最后再倒上辣椒油。",
    "py": "Zhè dào cài shì xiān yòng shuǐ bǎ yú zhǔ shú, zuìhòu zài dào shàng làjiāo yóu.",
    "vn": "Món này là trước tiên dùng nước luộc chín cá, cuối cùng mới rưới dầu ớt lên."
   },
   {
    "zh": "客人来了，快给客人倒杯茶。",
    "py": "Kèrén lái le, kuài gěi kèrén dào bēi chá.",
    "vn": "Khách đến rồi, mau rót cho khách chén trà."
   }
  ],
  "hanzi": [
   {
    "c": "倒",
    "p": "dǎo",
    "type": "左右结构 · Trái-phải",
    "st": 10,
    "ord": "亻 trái → 到 phải",
    "rad": "亻 (nhân)",
    "mean": "ngược; đổ",
    "tip": "Người 亻 + 到 → NGƯỢC LẠI, ĐỔ (dào). Đọc dǎo = ngã (摔倒). Phó từ 倒 = lại, trái dự đoán.",
    "cf": "到 (dào – đến)",
    "w": "倒 / 倒是 / 倒水 / 摔倒 (dǎo)"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Khách đến rồi, mau rót cho khách chén trà.",
    "answer": "客人来了，快给客人倒杯茶。",
    "answerPy": "Kèrén lái le, kuài gěi kèrén dào bēi chá.",
    "note": "给 + ai + 倒 + 茶 — phép lịch sự trên bàn ăn.",
    "pair": "给……倒茶"
   },
   {
    "promptLang": "vi",
    "prompt": "Trước tiên luộc chín cá, sau đó rưới dầu ớt lên.",
    "answer": "先把鱼煮熟，然后倒上辣椒油。",
    "answerPy": "Xiān bǎ yú zhǔ shú, ránhòu dào shàng làjiāo yóu.",
    "note": "Ôn 先……然后…… và câu chữ 把 (HSK 3).",
    "pair": "先……然后……"
   }
  ]
 },
 {
  "n": 9,
  "zh": "辣椒",
  "py": "làjiāo",
  "pos": "Danh từ",
  "vn": "ớt",
  "hv": "lạt tiêu",
  "em": "🌶️",
  "lesson": 1,
  "explain": [
   "Quả ớt; 辣椒油 = dầu ớt, 辣椒酱 = tương ớt."
  ],
  "usage": "辣椒油 · 放辣椒 · 不要辣椒 · 红辣椒.",
  "collo": [
   "辣椒油",
   "放辣椒",
   "红辣椒",
   "辣椒酱"
  ],
  "colloFull": [
   {
    "zh": "辣椒油",
    "py": "Làjiāo yóu",
    "vn": "dầu ớt"
   },
   {
    "zh": "放辣椒",
    "py": "Fàng làjiāo",
    "vn": "cho ớt"
   },
   {
    "zh": "红辣椒",
    "py": "Hóng làjiāo",
    "vn": "ớt đỏ"
   },
   {
    "zh": "辣椒酱",
    "py": "Làjiāo jiàng",
    "vn": "tương ớt"
   }
  ],
  "patterns": [
   {
    "s": "放 / 不放 + 辣椒",
    "m": "Cho / không cho ớt (khi gọi món)"
   }
  ],
  "ex_zh": "最后再倒上辣椒油。",
  "ex_py": "Zuìhòu zài dào shàng làjiāo yóu.",
  "ex_vn": "Cuối cùng mới rưới dầu ớt lên.",
  "exList": [
   {
    "zh": "最后再倒上辣椒油。",
    "py": "Zuìhòu zài dào shàng làjiāo yóu.",
    "vn": "Cuối cùng mới rưới dầu ớt lên."
   },
   {
    "zh": "这个菜别放辣椒，我的孩子吃不了辣。",
    "py": "Zhège cài bié fàng làjiāo, wǒ de háizi chī bù le là.",
    "vn": "Món này đừng cho ớt, con tôi không ăn cay được."
   }
  ],
  "hanzi": [
   {
    "c": "辣",
    "p": "là",
    "type": "左右结构 · Trái-phải",
    "st": 14,
    "ord": "辛 trái → 束 phải",
    "rad": "辛 (tân)",
    "mean": "cay",
    "tip": "辛(cay) + 束 → CAY. Năm vị: 酸 (chua), 甜 (ngọt), 苦 (đắng, Bài 13), 辣 (cay), 咸 (mặn, Bài 18).",
    "cf": "辛 (xīn – 辛苦 Bài 4)",
    "w": "辣 / 辣椒 / 酸辣"
   },
   {
    "c": "椒",
    "p": "jiāo",
    "type": "形声字 · Chữ hình thanh",
    "st": 12,
    "ord": "木 → 叔",
    "rad": "木 (mộc – cây)",
    "mean": "cây tiêu, cây ớt (cây có quả cay)",
    "tip": "Bộ 木 (cây) + 叔 shū (chỉ âm): loài cây cho quả cay — 辣椒 (ớt), 花椒 (hoa tiêu).",
    "cf": "叔 shū (chú) — không có bộ 木",
    "w": "辣椒 / 花椒 / 胡椒"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Món này đừng cho ớt, con tôi không ăn cay được.",
    "answer": "这个菜别放辣椒，我的孩子吃不了辣。",
    "answerPy": "Zhège cài bié fàng làjiāo, wǒ de háizi chī bù le là.",
    "note": "Ôn V不了 (Bài 4 · điểm 1).",
    "pair": "吃不了"
   },
   {
    "promptLang": "vi",
    "prompt": "Người Tứ Xuyên ăn ớt, người Quý Châu cũng ăn ớt.",
    "answer": "四川人吃辣椒，贵州人也吃辣椒。",
    "answerPy": "Sì chuān rén chī làjiāo, Guìzhōu rén yě chī làjiāo.",
    "note": "Câu đơn giản luyện từ mới.",
    "pair": "也"
   }
  ]
 },
 {
  "n": 10,
  "zh": "辣",
  "py": "là",
  "pos": "Tính từ",
  "vn": "cay",
  "hv": "lạt",
  "em": "🔥",
  "lesson": 1,
  "explain": [
   "Vị cay của ớt, tiêu. 吃辣 = ăn cay; 不怕辣 = không sợ cay; 怕不辣 = sợ (món) không cay."
  ],
  "usage": "很辣 · 吃辣 · 不怕辣 · 怕不辣 · 辣的.",
  "collo": [
   "很辣",
   "吃辣",
   "不怕辣",
   "怕不辣"
  ],
  "colloFull": [
   {
    "zh": "很辣",
    "py": "Hěn là",
    "vn": "rất cay"
   },
   {
    "zh": "吃辣",
    "py": "Chī là",
    "vn": "ăn cay"
   },
   {
    "zh": "不怕辣",
    "py": "Bú pà là",
    "vn": "không sợ cay"
   },
   {
    "zh": "怕不辣",
    "py": "Pà bú là",
    "vn": "sợ không cay"
   }
  ],
  "patterns": [
   {
    "s": "辣是辣，但是 / 不过……",
    "m": "Ôn ×是×，不过…… (Bài 3 · điểm 1)"
   },
   {
    "s": "对 + ai + 来说 + 辣不辣？",
    "m": "Đối với ai đó có cay không?"
   }
  ],
  "ex_zh": "辣是辣，但是非常好吃！",
  "ex_py": "Là shì là, dànshì fēicháng hǎochī!",
  "ex_vn": "Cay thì cay thật, nhưng rất ngon!",
  "exList": [
   {
    "zh": "辣是辣，但是非常好吃！",
    "py": "Là shì là, dànshì fēicháng hǎochī!",
    "vn": "Cay thì cay thật, nhưng rất ngon!"
   },
   {
    "zh": "这道菜看起来很辣，我不敢吃。",
    "py": "Zhè dào cài kàn qǐlái hěn là, wǒ bù gǎn chī.",
    "vn": "Món này trông có vẻ rất cay, tôi không dám ăn."
   }
  ],
  "hanzi": [
   {
    "c": "辣",
    "p": "là",
    "type": "左右结构 · Trái-phải",
    "st": 14,
    "ord": "辛 trái → 束 phải",
    "rad": "辛 (tân)",
    "mean": "cay",
    "tip": "辛(cay) + 束 → CAY. Năm vị: 酸 (chua), 甜 (ngọt), 苦 (đắng, Bài 13), 辣 (cay), 咸 (mặn, Bài 18).",
    "cf": "辛 (xīn – 辛苦 Bài 4)",
    "w": "辣 / 辣椒 / 酸辣"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Món này trông có vẻ rất cay, tôi không dám ăn.",
    "answer": "这道菜看起来很辣，我不敢吃。",
    "answerPy": "Zhè dào cài kàn qǐlái hěn là, wǒ bù gǎn chī.",
    "note": "Đáp án gợi ý bài nhìn tranh của sách.",
    "pair": "看起来……不敢……"
   },
   {
    "promptLang": "vi",
    "prompt": "Cay thì cay thật, nhưng rất ngon!",
    "answer": "辣是辣，但是非常好吃！",
    "answerPy": "Là shì là, dànshì fēicháng hǎochī!",
    "note": "Câu trong bài khoá 1 — ôn ×是× (Bài 3 · điểm 1).",
    "pair": "×是×，但是……"
   }
  ]
 },
 {
  "n": 11,
  "zh": "水煮鱼",
  "py": "Shuǐzhǔyú",
  "pos": "Danh từ riêng",
  "vn": "cá luộc cay (món Tứ Xuyên, cá nấu trong dầu ớt)",
  "hv": "thủy chử ngư",
  "em": "🐟",
  "lesson": 1,
  "explain": [
   "Món nổi tiếng của Tứ Xuyên: lát cá luộc chín trong nước, phủ lớp dầu ớt và hoa tiêu bên trên — trông như “cá nấu dầu”."
  ],
  "usage": "吃水煮鱼 · 做水煮鱼 · 一道水煮鱼.",
  "collo": [
   "一道水煮鱼",
   "做水煮鱼",
   "吃水煮鱼",
   "四川水煮鱼"
  ],
  "colloFull": [
   {
    "zh": "一道水煮鱼",
    "py": "Yí dào Shuǐzhǔyú",
    "vn": "một món cá luộc cay"
   },
   {
    "zh": "做水煮鱼",
    "py": "Zuò Shuǐzhǔyú",
    "vn": "làm món cá luộc cay"
   },
   {
    "zh": "吃水煮鱼",
    "py": "Chī Shuǐzhǔyú",
    "vn": "ăn cá luộc cay"
   },
   {
    "zh": "四川水煮鱼",
    "py": "Sì chuān Shuǐzhǔyú",
    "vn": "cá luộc cay Tứ Xuyên"
   }
  ],
  "patterns": [
   {
    "s": "水 + 煮 + 鱼",
    "m": "Tên món nói luôn cách nấu: dùng nước luộc cá"
   }
  ],
  "ex_zh": "你还没吃过水煮鱼吧？这是我专门为你做的。",
  "ex_py": "Nǐ hái méi chī guò Shuǐzhǔyú ba? Zhè shì wǒ zhuānmén wèi nǐ zuò de.",
  "ex_vn": "Cháu chưa ăn cá luộc cay bao giờ nhỉ? Đây là món cô làm riêng cho cháu.",
  "exList": [
   {
    "zh": "你还没吃过水煮鱼吧？这是我专门为你做的。",
    "py": "Nǐ hái méi chī guò Shuǐzhǔyú ba? Zhè shì wǒ zhuānmén wèi nǐ zuò de.",
    "vn": "Cháu chưa ăn cá luộc cay bao giờ nhỉ? Đây là món cô làm riêng cho cháu."
   },
   {
    "zh": "水煮鱼看起来很辣，其实只有上面那一层是油。",
    "py": "Shuǐzhǔyú kàn qǐlái hěn là, qíshí zhǐyǒu shàngmian nà yì céng shì yóu.",
    "vn": "Món cá luộc cay trông thì rất cay, thật ra chỉ có lớp trên cùng là dầu."
   }
  ],
  "hanzi": [
   {
    "c": "水",
    "p": "shuǐ",
    "type": "独体字 · Chữ đơn",
    "st": 4,
    "ord": "亅→丶→丿→丶 (nét thẳng giữa và các nhánh nước hai bên)",
    "rad": "水 (thuỷ – nước, tự thành bộ)",
    "mean": "nước",
    "tip": "Hình dòng NƯỚC đang chảy, giữa thẳng, hai bên có các nhánh nhỏ toé ra → NƯỚC.",
    "cf": "冰 (bīng – \"băng, đá\", thêm bộ 冫\")",
    "w": "水果 / 喝水 / 汽水"
   },
   {
    "c": "煮",
    "p": "zhǔ",
    "type": "形声字 · Chữ hình thanh",
    "st": 12,
    "ord": "者 → 灬",
    "rad": "灬 (hỏa – lửa, bốn chấm)",
    "mean": "luộc, nấu",
    "tip": "Trên là 者 zhě (chỉ âm), dưới là 灬 (lửa): đặt nồi trên lửa mà luộc — 煮饺子, 水煮鱼.",
    "cf": "著 zhù (nổi tiếng) — trên có bộ 艹; 者 zhě (người) — không có lửa",
    "w": "煮饭 / 煮饺子 / 水煮鱼"
   },
   {
    "c": "鱼",
    "p": "yú",
    "type": "上下结构 · Trên-dưới",
    "st": 8,
    "ord": "⺈ → 田 → 一",
    "rad": "鱼 (ngư)",
    "mean": "cá",
    "tip": "Tượng hình con CÁ (đầu ⺈, thân 田, đuôi 一). 美人鱼 = người đẹp cá = người cá.",
    "cf": "渔 (yú – đánh cá)",
    "w": "鱼 / 美人鱼 / 鱼汤"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Bạn đã từng ăn cá luộc cay chưa?",
    "answer": "你吃过水煮鱼吗？",
    "answerPy": "Nǐ chī guò Shuǐzhǔyú ma?",
    "note": "Ôn 过 chỉ kinh nghiệm (HSK 2/3).",
    "pair": "V过"
   },
   {
    "promptLang": "vi",
    "prompt": "Món cá luộc cay này không những cay mà còn rất thơm.",
    "answer": "这道水煮鱼不仅很辣，而且很香。",
    "answerPy": "Zhè dào Shuǐzhǔyú bùjǐn hěn là, érqiě hěn xiāng.",
    "note": "Ôn 不仅……而且…… (Bài 3 · điểm 2).",
    "pair": "不仅……而且……"
   }
  ]
 },
 {
  "n": 12,
  "zh": "敢",
  "py": "gǎn",
  "pos": "Động từ",
  "vn": "dám",
  "hv": "cảm",
  "em": "😬",
  "lesson": 2,
  "explain": [
   "Có can đảm làm một việc. Phủ định: 不敢 / 不太敢 (không dám)."
  ],
  "usage": "敢 + V · 不敢吃 · 敢不敢.",
  "collo": [
   "不敢吃",
   "敢不敢",
   "不太敢",
   "敢说"
  ],
  "colloFull": [
   {
    "zh": "不敢吃",
    "py": "Bù gǎn chī",
    "vn": "không dám ăn"
   },
   {
    "zh": "敢不敢",
    "py": "Gǎn bu gǎn",
    "vn": "có dám không"
   },
   {
    "zh": "不太敢",
    "py": "Bú tài gǎn",
    "vn": "không dám lắm"
   },
   {
    "zh": "敢说",
    "py": "Gǎn shuō",
    "vn": "dám nói"
   }
  ],
  "patterns": [
   {
    "s": "敢 / 不敢 + V",
    "m": "Động từ năng nguyện, đứng trước động từ"
   },
   {
    "s": "你敢不敢 + V？",
    "m": "Câu hỏi chính phản"
   }
  ],
  "ex_zh": "我们以前不太敢吃辣，吃完可能会肚子不舒服。",
  "ex_py": "Wǒmen yǐqián bú tài gǎn chī là, chī wán kěnéng huì dùzi bù shūfu.",
  "ex_vn": "Trước đây chúng tôi không dám ăn cay lắm, ăn xong có thể bị đau bụng.",
  "exList": [
   {
    "zh": "我们以前不太敢吃辣，吃完可能会肚子不舒服。",
    "py": "Wǒmen yǐqián bú tài gǎn chī là, chī wán kěnéng huì dùzi bù shūfu.",
    "vn": "Trước đây chúng tôi không dám ăn cay lắm, ăn xong có thể bị đau bụng."
   },
   {
    "zh": "这道菜看起来太辣了，我不敢吃。",
    "py": "Zhè dào cài kàn qǐlái tài là le, wǒ bù gǎn chī.",
    "vn": "Món này trông cay quá, tôi không dám ăn."
   }
  ],
  "hanzi": [
   {
    "c": "敢",
    "p": "gǎn",
    "type": "左右结构 · Trái-phải",
    "st": 11,
    "ord": "𠂉⺕ trái → 攵 phải",
    "rad": "攵 (phộc)",
    "mean": "dám",
    "tip": "Hình tay cầm vũ khí tiến lên → DÁM, CẢM. 勇敢 = dũng cảm (Bài 9).",
    "cf": "感 (gǎn – cảm, có 心)",
    "w": "敢 / 勇敢 / 不敢"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Món này trông cay quá, tôi không dám ăn.",
    "answer": "这道菜看起来太辣了，我不敢吃。",
    "answerPy": "Zhè dào cài kàn qǐlái tài là le, wǒ bù gǎn chī.",
    "note": "Câu chọn từ của sách (综合练习 câu 2).",
    "pair": "不敢 + V"
   },
   {
    "promptLang": "vi",
    "prompt": "Trước đây tôi không dám ăn cay, thậm chí một chút ớt cũng không dám cho.",
    "answer": "我以前不敢吃辣，甚至一点儿辣椒也不敢放。",
    "answerPy": "Wǒ yǐqián bù gǎn chī là, shènzhì yìdiǎnr làjiāo yě bù gǎn fàng.",
    "note": "Ôn 甚至 (Bài 3 · điểm 3) + 一点儿……也不…….",
    "pair": "甚至……也不……"
   }
  ]
 },
 {
  "n": 13,
  "zh": "肚子",
  "py": "dùzi",
  "pos": "Danh từ",
  "vn": "bụng",
  "hv": "đỗ tử",
  "em": "🤰",
  "lesson": 2,
  "explain": [
   "Phần bụng của người / động vật. 肚子疼 / 肚子不舒服 = đau bụng; 肚子饿 = đói bụng."
  ],
  "usage": "肚子疼 · 肚子不舒服 · 肚子饿了.",
  "collo": [
   "肚子疼",
   "肚子饿",
   "肚子不舒服",
   "吃坏肚子"
  ],
  "colloFull": [
   {
    "zh": "肚子疼",
    "py": "Dùzi téng",
    "vn": "đau bụng"
   },
   {
    "zh": "肚子饿",
    "py": "Dùzi è",
    "vn": "đói bụng"
   },
   {
    "zh": "肚子不舒服",
    "py": "Dùzi bù shūfu",
    "vn": "bụng khó chịu"
   },
   {
    "zh": "吃坏肚子",
    "py": "Chī huài dùzi",
    "vn": "ăn đau bụng"
   }
  ],
  "patterns": [
   {
    "s": "Sub + 肚子 + 疼 / 不舒服",
    "m": "Câu chủ vị làm vị ngữ (HSK 3)"
   }
  ],
  "ex_zh": "我们以前不太敢吃辣，吃完可能会肚子不舒服。",
  "ex_py": "Wǒmen yǐqián bú tài gǎn chī là, chī wán kěnéng huì dùzi bù shūfu.",
  "ex_vn": "Trước đây chúng tôi không dám ăn cay lắm, ăn xong có thể bị khó chịu trong bụng.",
  "exList": [
   {
    "zh": "我们以前不太敢吃辣，吃完可能会肚子不舒服。",
    "py": "Wǒmen yǐqián bú tài gǎn chī là, chī wán kěnéng huì dùzi bù shūfu.",
    "vn": "Trước đây chúng tôi không dám ăn cay lắm, ăn xong có thể bị khó chịu trong bụng."
   },
   {
    "zh": "我肚子有点儿不舒服，想休息一下。",
    "py": "Wǒ dùzi yǒudiǎnr bù shūfu, xiǎng xiūxi yíxià.",
    "vn": "Bụng tôi hơi khó chịu, muốn nghỉ một lát."
   }
  ],
  "hanzi": [
   {
    "c": "肚",
    "p": "dù",
    "type": "左右结构 · Trái-phải",
    "st": 7,
    "ord": "月 (nhục) trái → 土 (thổ) phải",
    "rad": "月 (nhục – thịt)",
    "mean": "bụng",
    "tip": "Bộ thịt 月 (bộ phận cơ thể) + 土(biểu âm) → chỉ BỘ PHẬN cơ thể là BỤNG.",
    "cf": "杜 (dù – \"họ Đỗ\", bộ 木\")",
    "w": "肚子 / 肚子疼 / 肚皮"
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
    "prompt": "Bụng tôi hơi khó chịu, muốn nghỉ một lát.",
    "answer": "我肚子有点儿不舒服，想休息一下。",
    "answerPy": "Wǒ dùzi yǒudiǎnr bù shūfu, xiǎng xiūxi yíxià.",
    "note": "Câu chọn từ của sách (综合练习 câu 3).",
    "pair": "有点儿不舒服"
   },
   {
    "promptLang": "vi",
    "prompt": "Do ăn quá nhiều đồ lạnh nên anh ấy bị đau bụng.",
    "answer": "由于吃了太多凉的东西，他肚子疼了。",
    "answerPy": "Yóuyú chī le tài duō liáng de dōngxi, tā dùzi téng le.",
    "note": "Ôn 由于 (Bài 2 · điểm 4).",
    "pair": "由于……"
   }
  ]
 },
 {
  "n": 14,
  "zh": "相同",
  "py": "xiāngtóng",
  "pos": "Tính từ",
  "vn": "giống nhau, như nhau",
  "hv": "tương đồng",
  "em": "🟰",
  "lesson": 2,
  "explain": [
   "Hoàn toàn giống nhau. Thường làm định ngữ (相同的字) hoặc vị ngữ (A和B相同). Phủ định: 不同."
  ],
  "usage": "相同的 + N · A和B相同 · 不相同.",
  "collo": [
   "相同的字",
   "完全相同",
   "不相同",
   "相同的问题"
  ],
  "colloFull": [
   {
    "zh": "相同的字",
    "py": "Xiāngtóng de zì",
    "vn": "những chữ giống nhau"
   },
   {
    "zh": "完全相同",
    "py": "Wánquán xiāngtóng",
    "vn": "hoàn toàn giống nhau"
   },
   {
    "zh": "不相同",
    "py": "Bù xiāngtóng",
    "vn": "không giống nhau"
   },
   {
    "zh": "相同的问题",
    "py": "Xiāngtóng de wèntí",
    "vn": "vấn đề giống nhau"
   }
  ],
  "patterns": [
   {
    "s": "相同的 + N",
    "m": "Làm định ngữ"
   },
   {
    "s": "A + 和 / 跟 + B + 相同",
    "m": "Làm vị ngữ ≈ 一样"
   }
  ],
  "ex_zh": "中文真有意思，相同的字，顺序一换，意思就变了。",
  "ex_py": "Zhōngwén zhēn yǒuyìsī, xiāngtóng de zì, shùnxù yí huàn, yìsi jiù biàn le.",
  "ex_vn": "Tiếng Trung thú vị thật, cùng những chữ ấy, đổi thứ tự một cái là nghĩa thay đổi ngay.",
  "exList": [
   {
    "zh": "中文真有意思，相同的字，顺序一换，意思就变了。",
    "py": "Zhōngwén zhēn yǒuyìsī, xiāngtóng de zì, shùnxù yí huàn, yìsi jiù biàn le.",
    "vn": "Tiếng Trung thú vị thật, cùng những chữ ấy, đổi thứ tự một cái là nghĩa thay đổi ngay."
   },
   {
    "zh": "我们俩的爱好完全相同，都喜欢吃辣。",
    "py": "Wǒmen liǎ de àihào wánquán xiāngtóng, dōu xǐhuan chī là.",
    "vn": "Sở thích của hai chúng tôi hoàn toàn giống nhau, đều thích ăn cay."
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
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Cùng những chữ ấy, đổi thứ tự thì nghĩa thay đổi.",
    "answer": "相同的字，顺序一换，意思就变了。",
    "answerPy": "Xiāngtóng de zì, shùnxù yí huàn, yìsi jiù biàn le.",
    "note": "Câu trong bài khoá 2 — 一……就…… (HSK 3).",
    "pair": "一……就……"
   },
   {
    "promptLang": "vi",
    "prompt": "Khẩu vị của hai người họ không giống nhau, nên mỗi người ăn phần của mình.",
    "answer": "他们俩的口味不相同，所以就各吃各的。",
    "answerPy": "Tāmen liǎ de kǒuwèi bù xiāngtóng, suǒyǐ jiù gè chī gè de.",
    "note": "Kết hợp 各×各的 (Bài 5 · điểm 3).",
    "pair": "各×各的"
   }
  ]
 },
 {
  "n": 15,
  "zh": "顺序",
  "py": "shùnxù",
  "pos": "Danh từ",
  "vn": "thứ tự",
  "hv": "thuận tự",
  "em": "🔢",
  "lesson": 2,
  "explain": [
   "Trình tự trước sau của sự vật. Bẫy Hán Việt: “thuận tự” → tiếng Việt nói “thứ tự”."
  ],
  "usage": "按顺序 · 顺序一换 · 排顺序.",
  "collo": [
   "按顺序",
   "顺序一换",
   "说话的顺序",
   "排顺序"
  ],
  "colloFull": [
   {
    "zh": "按顺序",
    "py": "Àn shùnxù",
    "vn": "theo thứ tự"
   },
   {
    "zh": "顺序一换",
    "py": "Shùnxù yí huàn",
    "vn": "đổi thứ tự"
   },
   {
    "zh": "说话的顺序",
    "py": "Shuōhuà de shùnxù",
    "vn": "thứ tự nói"
   },
   {
    "zh": "排顺序",
    "py": "Pái shùnxù",
    "vn": "sắp xếp thứ tự"
   }
  ],
  "patterns": [
   {
    "s": "按 / 按照 + 顺序 + V",
    "m": "Làm theo thứ tự"
   },
   {
    "s": "顺序 + 一 + 换，就……",
    "m": "一……就…… (HSK 3)"
   }
  ],
  "ex_zh": "相同的字，顺序一换，意思就变了。",
  "ex_py": "Xiāngtóng de zì, shùnxù yí huàn, yìsi jiù biàn le.",
  "ex_vn": "Cùng những chữ ấy, đổi thứ tự một cái là nghĩa thay đổi ngay.",
  "exList": [
   {
    "zh": "相同的字，顺序一换，意思就变了。",
    "py": "Xiāngtóng de zì, shùnxù yí huàn, yìsi jiù biàn le.",
    "vn": "Cùng những chữ ấy, đổi thứ tự một cái là nghĩa thay đổi ngay."
   },
   {
    "zh": "请大家按照顺序上车，不要着急。",
    "py": "Qǐng dàjiā ànzhào shùnxù shàng chē, búyào zháojí.",
    "vn": "Mời mọi người lên xe theo thứ tự, đừng vội."
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
    "c": "序",
    "p": "xù",
    "type": "半包围结构 · Bán bao vây",
    "st": 7,
    "ord": "广 bao ngoài → 予 trong",
    "rad": "广 (nghiễm – mái nhà)",
    "mean": "thứ tự, mở đầu",
    "tip": "Bộ mái nhà 广 + 予(biểu âm) → nghĩa gốc là bức tường phía đông-tây của nhà (có trước sau), mở rộng thành THỨ TỰ, kết hợp 顺(thuận) thành 顺序 = TRẬT TỰ.",
    "cf": "预 (yù – \"dự, trước\", bộ 页)",
    "w": "顺序 / 秩序 / 序言"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Mời mọi người lên xe theo thứ tự, đừng vội.",
    "answer": "请大家按照顺序上车，不要着急。",
    "answerPy": "Qǐng dàjiā ànzhào shùnxù shàng chē, búyào zháojí.",
    "note": "Kết hợp 按照 (từ mới 33).",
    "pair": "按照顺序"
   },
   {
    "promptLang": "vi",
    "prompt": "Mời mọi người dựa theo thứ tự của bài khoá kể lại câu chuyện.",
    "answer": "请大家按照课文的顺序复述故事。",
    "answerPy": "Qǐng dàjiā ànzhào kè wén de shùnxù fù shù gùshì.",
    "note": "Câu quen thuộc trong lớp học.",
    "pair": "按照……的顺序"
   }
  ]
 },
 {
  "n": 16,
  "zh": "够",
  "py": "gòu",
  "pos": "Phó từ / Động từ",
  "vn": "thật là, khá là (够……的); đủ",
  "hv": "cú",
  "em": "✅",
  "lesson": 2,
  "explain": [
   "Phó từ: mức độ cao, hay dùng trong khung 「够……的」 (thật là …).",
   "Động từ: số lượng đáp ứng đủ nhu cầu, hoặc đạt tới một mức nào đó."
  ],
  "usage": "够 + Adj + 的 · 够不够 · 钱够了 · 够用.",
  "collo": [
   "够高的",
   "够不够",
   "时间够了",
   "够大的"
  ],
  "colloFull": [
   {
    "zh": "够高的",
    "py": "Gòu gāo de",
    "vn": "cao thật đấy"
   },
   {
    "zh": "够不够",
    "py": "Gòu búgòu",
    "vn": "có đủ không"
   },
   {
    "zh": "时间够了",
    "py": "Shíjiān gòu le",
    "vn": "đủ thời gian rồi"
   },
   {
    "zh": "够大的",
    "py": "Gòu dà de",
    "vn": "to thật"
   }
  ],
  "patterns": [
   {
    "s": "够 + Adj + 的",
    "m": "Phó từ: thật là … (khẩu ngữ, cảm thán)"
   },
   {
    "s": "N + 够 / 不够",
    "m": "Động từ: đủ / không đủ"
   }
  ],
  "ex_zh": "你的中文水平够高的，这都听懂了！",
  "ex_py": "Nǐ de Zhōngwén shuǐpíng gòu gāo de, zhè dōu tīng dǒng le!",
  "ex_vn": "Trình độ tiếng Trung của cháu cao thật đấy, cái này cũng nghe hiểu!",
  "exList": [
   {
    "zh": "你的中文水平够高的，这都听懂了！",
    "py": "Nǐ de Zhōngwén shuǐpíng gòu gāo de, zhè dōu tīng dǒng le!",
    "vn": "Trình độ tiếng Trung của cháu cao thật đấy, cái này cũng nghe hiểu!"
   },
   {
    "zh": "明天请家月和李文来家里吃饭，四个菜够不够？",
    "py": "Míngtiān qǐng Jiāyuè hé Lǐ Wén lái jiā lǐ chīfàn, sì gè cài gòu búgòu?",
    "vn": "Mai mời Gia Nguyệt và Lý Văn đến nhà ăn cơm, bốn món có đủ không?"
   }
  ],
  "hanzi": [
   {
    "c": "够",
    "p": "gòu",
    "type": "左右结构 · Trái-phải (giản thể)",
    "st": 11,
    "ord": "夕 trái → 多 phải (biến thể)",
    "rad": "夕 (tịch – buổi tối)",
    "mean": "đủ",
    "tip": "Chữ giản thể mô phỏng số lượng ĐÃ ĐẠT MỨC cần có, mở rộng nghĩa từ \"nhiều\" (多) thành ĐỦ, KHÔNG THIẾU.",
    "cf": "够 dễ nhầm với 岁 (suì – \"tuổi\")",
    "w": "不够 / 够用 / 能够"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Nhà bạn to thật đấy, không những có hai tầng mà còn có một khu vườn nhỏ.",
    "answer": "你家房子够大的，不仅有上下两层，还有一个小花园。",
    "answerPy": "Nǐ jiā fángzi gòu dà de, bùjǐn yǒu shàng xià liǎng céng, hái yǒu yí gè xiǎo huāyuán.",
    "note": "Đáp án gợi ý của sách; ôn 不仅……还…… (Bài 3 · điểm 2).",
    "pair": "够……的"
   },
   {
    "promptLang": "vi",
    "prompt": "Mai mời bốn người bạn đến ăn cơm, sáu món có đủ không?",
    "answer": "明天请四个朋友来吃饭，六个菜够不够？",
    "answerPy": "Míngtiān qǐng sì gè péngyou lái chīfàn, liù gè cài gòu búgòu?",
    "note": "够 làm động từ, câu hỏi chính phản.",
    "pair": "够不够"
   }
  ]
 },
 {
  "n": 17,
  "zh": "不够",
  "py": "búgòu",
  "pos": "Phó từ / Động từ",
  "vn": "chưa đủ, không đủ",
  "hv": "bất cú",
  "em": "➖",
  "lesson": 2,
  "explain": [
   "Phó từ: mức độ chưa đạt (不够 + Adj: chưa đủ …).",
   "Động từ: số lượng không đủ. Chú ý biến điệu: 不 đọc bú vì 够 thanh 4."
  ],
  "usage": "不够 + Adj · 钱不够 · 时间不够 · 不够再加.",
  "collo": [
   "不够辣",
   "不够甜",
   "时间不够",
   "不够再加"
  ],
  "colloFull": [
   {
    "zh": "不够辣",
    "py": "Búgòu là",
    "vn": "chưa đủ cay"
   },
   {
    "zh": "不够甜",
    "py": "Búgòu tián",
    "vn": "chưa đủ ngọt"
   },
   {
    "zh": "时间不够",
    "py": "Shíjiān búgòu",
    "vn": "không đủ thời gian"
   },
   {
    "zh": "不够再加",
    "py": "Búgòu zài jiā",
    "vn": "không đủ thì thêm"
   }
  ],
  "patterns": [
   {
    "s": "不够 + Adj",
    "m": "Chưa đủ (mức độ)"
   },
   {
    "s": "N + 不够",
    "m": "Không đủ (số lượng)"
   }
  ],
  "ex_zh": "“怕不辣”是担心菜还不够辣呢。",
  "ex_py": "“Pà bú là” shì dānxīn cài hái búgòu là ne.",
  "ex_vn": "“Sợ không cay” là lo món ăn còn chưa đủ cay đấy.",
  "exList": [
   {
    "zh": "“怕不辣”是担心菜还不够辣呢。",
    "py": "“Pà bú là” shì dānxīn cài hái búgòu là ne.",
    "vn": "“Sợ không cay” là lo món ăn còn chưa đủ cay đấy."
   },
   {
    "zh": "我尝了一下，还不够甜，再加一点儿糖吧。",
    "py": "Wǒ cháng le yíxià, hái búgòu tián, zài jiā yìdiǎnr táng ba.",
    "vn": "Tôi nếm thử rồi, vẫn chưa đủ ngọt, thêm chút đường nữa đi."
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
    "c": "够",
    "p": "gòu",
    "type": "左右结构 · Trái-phải (giản thể)",
    "st": 11,
    "ord": "夕 trái → 多 phải (biến thể)",
    "rad": "夕 (tịch – buổi tối)",
    "mean": "đủ",
    "tip": "Chữ giản thể mô phỏng số lượng ĐÃ ĐẠT MỨC cần có, mở rộng nghĩa từ \"nhiều\" (多) thành ĐỦ, KHÔNG THIẾU.",
    "cf": "够 dễ nhầm với 岁 (suì – \"tuổi\")",
    "w": "不够 / 够用 / 能够"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Công việc này cần ba ngày, giờ chỉ có hai ngày, thời gian không đủ.",
    "answer": "完成这个工作需要三天，现在只有两天，时间不够。",
    "answerPy": "Wánchéng zhège gōngzuò xūyào sān tiān, xiànzài zhǐyǒu liǎng tiān, shíjiān búgòu.",
    "note": "Đáp án gợi ý của sách (Bài 5 · điểm 2).",
    "pair": "时间不够"
   },
   {
    "promptLang": "vi",
    "prompt": "Thùng này không đủ to, không đựng nổi nhiều đồ như vậy.",
    "answer": "这个箱子不够大，放不下这么多东西。",
    "answerPy": "Zhège xiāngzi búgòu dà, fàng bú xià zhème duō dōngxi.",
    "note": "Đáp án gợi ý của sách; ôn V不下 (bổ ngữ khả năng, Bài 4).",
    "pair": "不够大，放不下"
   }
  ]
 },
 {
  "n": 18,
  "zh": "达到",
  "py": "dádào",
  "pos": "Động từ",
  "vn": "đạt tới, đạt được",
  "hv": "đạt đáo",
  "em": "🏁",
  "lesson": 2,
  "explain": [
   "Đạt tới một mức, tiêu chuẩn, mục tiêu (thường trừu tượng): 达到水平 / 达到要求 / 达到目标. Phủ định khả năng: 达不到."
  ],
  "usage": "达到 + 水平 / 要求 / 目标 · 达不到.",
  "collo": [
   "达到水平",
   "达到要求",
   "达到目标",
   "达不到"
  ],
  "colloFull": [
   {
    "zh": "达到水平",
    "py": "Dádào shuǐpíng",
    "vn": "đạt trình độ"
   },
   {
    "zh": "达到要求",
    "py": "Dádào yāoqiú",
    "vn": "đạt yêu cầu"
   },
   {
    "zh": "达到目标",
    "py": "Dádào mùbiāo",
    "vn": "đạt mục tiêu"
   },
   {
    "zh": "达不到",
    "py": "Dá bú dào",
    "vn": "không đạt được"
   }
  ],
  "patterns": [
   {
    "s": "达到 + 水平 / 要求 / 目标",
    "m": "Đi với danh từ trừu tượng"
   },
   {
    "s": "达得到 / 达不到",
    "m": "Bổ ngữ khả năng (Bài 4 · điểm 1)"
   }
  ],
  "ex_zh": "我还达不到“怕不辣”的水平，甚至也不能算“不怕辣”，只是喜欢吃辣。",
  "ex_py": "Wǒ hái dá bú dào “pà bú là” de shuǐpíng, shènzhì yě bù néng suàn “bú pà là”, zhǐshì xǐhuan chī là.",
  "ex_vn": "Cháu còn chưa đạt tới trình độ “sợ không cay”, thậm chí cũng chưa tính là “không sợ cay”, chỉ là thích ăn cay thôi.",
  "exList": [
   {
    "zh": "我还达不到“怕不辣”的水平，甚至也不能算“不怕辣”，只是喜欢吃辣。",
    "py": "Wǒ hái dá bú dào “pà bú là” de shuǐpíng, shènzhì yě bù néng suàn “bú pà là”, zhǐshì xǐhuan chī là.",
    "vn": "Cháu còn chưa đạt tới trình độ “sợ không cay”, thậm chí cũng chưa tính là “không sợ cay”, chỉ là thích ăn cay thôi."
   },
   {
    "zh": "经过一年的努力，他的中文终于达到了HSK四级水平。",
    "py": "Jīngguò yì nián de nǔlì, tā de Zhōngwén zhōngyú dádào le HSK sì jí shuǐpíng.",
    "vn": "Sau một năm nỗ lực, tiếng Trung của anh ấy cuối cùng đã đạt trình độ HSK 4."
   }
  ],
  "hanzi": [
   {
    "c": "达",
    "p": "dá",
    "type": "半包围结构 · Bán bao vây (giản thể)",
    "st": 6,
    "ord": "大 trong → 辶 bao",
    "rad": "辶 (sước – đi)",
    "mean": "đến, thông",
    "tip": "Bộ đi 辶 + 大 → ĐI ĐẾN NƠI, kết hợp 到 thành 达到 = ĐẠT ĐƯỢC.",
    "cf": "过 (guò – \"qua\", cũng bộ 辶)",
    "w": "达到 / 到达 / 表达"
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
    "prompt": "Tôi còn chưa đạt tới trình độ “sợ không cay”.",
    "answer": "我还达不到“怕不辣”的水平。",
    "answerPy": "Wǒ hái dá bú dào “pà bú là” de shuǐpíng.",
    "note": "Câu trong bài khoá 2.",
    "pair": "达不到……的水平"
   },
   {
    "promptLang": "vi",
    "prompt": "Cùng với trình độ tiếng Trung nâng cao, cuối cùng tôi đã đạt yêu cầu của trường.",
    "answer": "随着中文水平的提高，我终于达到了学校的要求。",
    "answerPy": "Suízhe Zhōngwén shuǐpíng de tígāo, wǒ zhōngyú dádào le xuéxiào de yāoqiú.",
    "note": "Ôn 随着 (Bài 1 · điểm 3).",
    "pair": "随着……达到……"
   }
  ]
 },
 {
  "n": 19,
  "zh": "聚",
  "py": "jù",
  "pos": "Động từ",
  "vn": "tụ tập, quây quần",
  "hv": "tụ",
  "em": "👥",
  "lesson": 3,
  "explain": [
   "Nhiều người tập trung lại một chỗ: 聚在一起 (quây quần bên nhau)."
  ],
  "usage": "聚在一起 · 聚一聚 · 大家聚聚.",
  "collo": [
   "聚在一起",
   "聚一聚",
   "家人聚在一起",
   "朋友聚会"
  ],
  "colloFull": [
   {
    "zh": "聚在一起",
    "py": "Jù zài yìqǐ",
    "vn": "tụ tập lại với nhau"
   },
   {
    "zh": "聚一聚",
    "py": "Jù yi jù",
    "vn": "gặp mặt tụ tập một chút"
   },
   {
    "zh": "家人聚在一起",
    "py": "Jiārén jù zài yìqǐ",
    "vn": "cả nhà quây quần"
   },
   {
    "zh": "朋友聚会",
    "py": "Péngyou jùhuì",
    "vn": "bạn bè họp mặt"
   }
  ],
  "patterns": [
   {
    "s": "聚 + 在一起",
    "m": "Tụ lại một chỗ"
   },
   {
    "s": "聚一聚 / 聚聚",
    "m": "Lặp động từ: tụ tập một chút"
   }
  ],
  "ex_zh": "周末，白家月、陈天中、李文和安妮聚在一起吃午餐。",
  "ex_py": "Zhōumò, Bái Jiāyuè, Chén Tiānzhōng, Lǐ Wén hé Ānní jù zài yìqǐ chī wǔcān.",
  "ex_vn": "Cuối tuần, Bạch Gia Nguyệt, Trần Thiên Trung, Lý Văn và Annie tụ tập ăn trưa cùng nhau.",
  "exList": [
   {
    "zh": "周末，白家月、陈天中、李文和安妮聚在一起吃午餐。",
    "py": "Zhōumò, Bái Jiāyuè, Chén Tiānzhōng, Lǐ Wén hé Ānní jù zài yìqǐ chī wǔcān.",
    "vn": "Cuối tuần, Bạch Gia Nguyệt, Trần Thiên Trung, Lý Văn và Annie tụ tập ăn trưa cùng nhau."
   },
   {
    "zh": "好久没见了，周末大家聚一聚吧。",
    "py": "Hǎojiǔ méi jiàn le, zhōumò dàjiā jù yi jù ba.",
    "vn": "Lâu lắm không gặp rồi, cuối tuần mọi người tụ tập một bữa nhé."
   }
  ],
  "hanzi": [
   {
    "c": "聚",
    "p": "jù",
    "type": "上下结构 · Trên-dưới",
    "st": 14,
    "ord": "取 trên → 乑 dưới (biến thể của 众)",
    "rad": "耳 (nhĩ)",
    "mean": "tụ họp",
    "tip": "Phần trên 取 (lấy, gom) + phần dưới liên quan đến 众 (đông người) → GOM NHIỀU NGƯỜI lại một chỗ = TỤ HỌP.",
    "cf": "聚 dễ nhầm với 娶 (qǔ – \"cưới vợ\", có bộ 女\")",
    "w": "聚会 / 聚集 / 团聚"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Lâu lắm không gặp rồi, cuối tuần mọi người tụ tập một bữa nhé.",
    "answer": "好久没见了，周末大家聚一聚吧。",
    "answerPy": "Hǎojiǔ méi jiàn le, zhōumò dàjiā jù yi jù ba.",
    "note": "Lặp động từ đơn âm tiết V一V (HSK 3).",
    "pair": "聚一聚"
   },
   {
    "promptLang": "vi",
    "prompt": "Tết đến, cả nhà quây quần bên nhau, vừa ăn vừa trò chuyện.",
    "answer": "过年的时候，一家人聚在一起，边吃边聊。",
    "answerPy": "Guònián de shíhou, yì jiārén jù zài yìqǐ, biān chī biān liáo.",
    "note": "Ôn 边……边…… (HSK 3).",
    "pair": "聚在一起"
   }
  ]
 },
 {
  "n": 20,
  "zh": "午餐",
  "py": "wǔcān",
  "pos": "Danh từ",
  "vn": "bữa trưa",
  "hv": "ngọ xan",
  "em": "🍱",
  "lesson": 3,
  "explain": [
   "Bữa ăn buổi trưa (= 午饭, trang trọng hơn). Tương tự: 早餐 bữa sáng, 晚餐 bữa tối."
  ],
  "usage": "吃午餐 · 午餐时间 · 一起吃午餐.",
  "collo": [
   "吃午餐",
   "午餐时间",
   "一起吃午餐",
   "早餐、午餐、晚餐"
  ],
  "colloFull": [
   {
    "zh": "吃午餐",
    "py": "Chī wǔcān",
    "vn": "ăn trưa"
   },
   {
    "zh": "午餐时间",
    "py": "Wǔcān shíjiān",
    "vn": "giờ ăn trưa"
   },
   {
    "zh": "一起吃午餐",
    "py": "Yìqǐ chī wǔcān",
    "vn": "cùng ăn trưa"
   },
   {
    "zh": "早餐、午餐、晚餐",
    "py": "Zǎo cān, wǔcān, wǎn cān",
    "vn": "bữa sáng, trưa, tối"
   }
  ],
  "patterns": [
   {
    "s": "吃 + 午餐",
    "m": "= 吃午饭"
   },
   {
    "s": "早餐 / 午餐 / 晚餐",
    "m": "餐 = bữa ăn"
   }
  ],
  "ex_zh": "周末，白家月、陈天中、李文和安妮聚在一起吃午餐。",
  "ex_py": "Zhōumò, Bái Jiāyuè, Chén Tiānzhōng, Lǐ Wén hé Ānní jù zài yìqǐ chī wǔcān.",
  "ex_vn": "Cuối tuần, Bạch Gia Nguyệt, Trần Thiên Trung, Lý Văn và Annie tụ tập ăn trưa cùng nhau.",
  "exList": [
   {
    "zh": "周末，白家月、陈天中、李文和安妮聚在一起吃午餐。",
    "py": "Zhōumò, Bái Jiāyuè, Chén Tiānzhōng, Lǐ Wén hé Ānní jù zài yìqǐ chī wǔcān.",
    "vn": "Cuối tuần, Bạch Gia Nguyệt, Trần Thiên Trung, Lý Văn và Annie tụ tập ăn trưa cùng nhau."
   },
   {
    "zh": "今天吃午餐的时候，我们点了很多菜。",
    "py": "Jīntiān chī wǔcān de shíhou, wǒmen diǎn le hěn duō cài.",
    "vn": "Hôm nay lúc ăn trưa chúng tôi gọi rất nhiều món."
   }
  ],
  "hanzi": [
   {
    "c": "午",
    "p": "wǔ",
    "type": "独体字 · Chữ đơn",
    "st": 4,
    "ord": "丿(phẩy) → 一(ngang) → 十(chữ thập ở dưới)",
    "rad": "十 (thập – chữ thập, số mười)",
    "mean": "giữa trưa, ngọ",
    "tip": "Mặt trời lên đến đỉnh, kẹp giữa hai nét ngang trên một nét sổ đứng → chỉ giờ NGỌ, buổi TRƯA.",
    "cf": "牛 (niú – \"con bò\", dễ nhầm vì hình dáng gần giống\")",
    "w": "中午 / 上午 / 下午"
   },
   {
    "c": "餐",
    "p": "cān",
    "type": "上下结构 · Trên-dưới",
    "st": 16,
    "ord": "歺+又 trên → 食 dưới",
    "rad": "食 (thực – ăn)",
    "mean": "bữa ăn",
    "tip": "Bộ ăn 食 ở dưới + phần trên biểu âm → BỮA ĂN, kết hợp 厅(sảnh) thành 餐厅 = NHÀ HÀNG (ôn lại 客厅 Bài 11).",
    "cf": "同字词: 客厅 / 餐厅 / 大厅",
    "w": "餐厅 / 早餐 / 西餐"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Hôm nay lúc ăn trưa chúng tôi gọi rất nhiều món.",
    "answer": "今天吃午餐的时候，我们点了很多菜。",
    "answerPy": "Jīntiān chī wǔcān de shíhou, wǒmen diǎn le hěn duō cài.",
    "note": "Đáp án gợi ý bài nhìn tranh của sách.",
    "pair": "……的时候"
   },
   {
    "promptLang": "vi",
    "prompt": "Giờ ăn trưa chỉ có nửa tiếng, nên ăn nhanh lên, nếu không sẽ không kịp.",
    "answer": "午餐时间只有半个小时，快点儿吃，不然就来不及了。",
    "answerPy": "Wǔcān shíjiān zhǐyǒu bàn gè xiǎoshí, kuài diǎnr chī, bùrán jiù láibùjí le.",
    "note": "Ôn 来不及 (Bài 4 · điểm 4).",
    "pair": "来不及"
   }
  ]
 },
 {
  "n": 21,
  "zh": "咸",
  "py": "xián",
  "pos": "Tính từ",
  "vn": "mặn",
  "hv": "hàm",
  "em": "🧂",
  "lesson": 3,
  "explain": [
   "Vị mặn của muối. 吃咸的 = ăn đồ mặn; 太咸了 = mặn quá."
  ],
  "usage": "太咸了 · 吃咸的 · 有点儿咸.",
  "collo": [
   "太咸了",
   "有点儿咸",
   "吃咸的",
   "又咸又辣"
  ],
  "colloFull": [
   {
    "zh": "太咸了",
    "py": "Tài xián le",
    "vn": "mặn quá"
   },
   {
    "zh": "有点儿咸",
    "py": "Yǒudiǎnr xián",
    "vn": "hơi mặn"
   },
   {
    "zh": "吃咸的",
    "py": "Chī xián de",
    "vn": "ăn đồ mặn"
   },
   {
    "zh": "又咸又辣",
    "py": "Yòu xián yòu là",
    "vn": "vừa mặn vừa cay"
   }
  ],
  "patterns": [
   {
    "s": "V + 得 + 太咸了",
    "m": "Bổ ngữ trạng thái (HSK 3)"
   },
   {
    "s": "酸、甜、苦、辣、咸",
    "m": "Năm vị"
   }
  ],
  "ex_zh": "李文更喜欢吃咸的，选了红烧羊肉和一道凉菜。",
  "ex_py": "Lǐ Wén gèng xǐhuan chī xián de, xuǎn le Hóngshāo Yángròu hé yí dào liáng cài.",
  "ex_vn": "Lý Văn thích ăn mặn hơn, chọn món thịt dê kho tàu và một món nộm.",
  "exList": [
   {
    "zh": "李文更喜欢吃咸的，选了红烧羊肉和一道凉菜。",
    "py": "Lǐ Wén gèng xǐhuan chī xián de, xuǎn le Hóngshāo Yángròu hé yí dào liáng cài.",
    "vn": "Lý Văn thích ăn mặn hơn, chọn món thịt dê kho tàu và một món nộm."
   },
   {
    "zh": "你尝尝，这道菜是不是做得太咸了？",
    "py": "Nǐ cháng cháng, zhè dào cài shì bu shì zuò de tài xián le?",
    "vn": "Bạn nếm thử xem, món này có phải nấu mặn quá không?"
   }
  ],
  "hanzi": [
   {
    "c": "咸",
    "p": "xián",
    "type": "半包围结构 · Nửa bao quanh",
    "st": 9,
    "ord": "戌 bao → 口 trong",
    "rad": "口 (khẩu)",
    "mean": "mặn",
    "tip": "戌 + 口 → giản thể của 鹹 (mặn). Vị MẶN. Đối lập 甜 (ngọt), 酸 (chua), 苦 (đắng, Bài 13), 辣 (cay).",
    "cf": "减 (jiǎn – giảm, Bài 14)",
    "w": "咸 / 咸菜"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Bạn nếm thử xem, món này có phải nấu mặn quá không?",
    "answer": "你尝尝，这道菜是不是做得太咸了？",
    "answerPy": "Nǐ cháng cháng, zhè dào cài shì bu shì zuò de tài xián le?",
    "note": "Câu chọn từ của sách (综合练习 câu 7).",
    "pair": "是不是……"
   },
   {
    "promptLang": "vi",
    "prompt": "Món này mặn thì có mặn, nhưng ăn với cơm rất ngon.",
    "answer": "这道菜咸是咸，不过跟米饭一起吃很好吃。",
    "answerPy": "Zhè dào cài xián shì xián, búguò gēn mǐfàn yìqǐ chī hěn hǎochī.",
    "note": "Ôn ×是×，不过…… (Bài 3 · điểm 1).",
    "pair": "×是×，不过……"
   }
  ]
 },
 {
  "n": 22,
  "zh": "凉",
  "py": "liáng",
  "pos": "Tính từ",
  "vn": "nguội, lạnh; mát",
  "hv": "lương",
  "em": "🥗",
  "lesson": 3,
  "explain": [
   "Hơi lạnh, nguội (nhiệt độ thấp). 凉菜 = món nguội, món trộn (khai vị). Phân biệt: 凉 (mát, nguội) nhẹ hơn 冷 (lạnh)."
  ],
  "usage": "凉菜 · 菜凉了 · 凉快 · 凉水.",
  "collo": [
   "凉菜",
   "菜凉了",
   "凉水",
   "凉快"
  ],
  "colloFull": [
   {
    "zh": "凉菜",
    "py": "Liáng cài",
    "vn": "món nguội (món trộn)"
   },
   {
    "zh": "菜凉了",
    "py": "Cài liáng le",
    "vn": "thức ăn nguội rồi"
   },
   {
    "zh": "凉水",
    "py": "Liáng shuǐ",
    "vn": "nước lạnh"
   },
   {
    "zh": "凉快",
    "py": "Liángkuai",
    "vn": "mát mẻ"
   }
  ],
  "patterns": [
   {
    "s": "N + 凉了",
    "m": "Nguội rồi"
   },
   {
    "s": "凉菜 ↔ 热菜",
    "m": "Món nguội ↔ món nóng"
   }
  ],
  "ex_zh": "李文更喜欢吃咸的，选了红烧羊肉和一道凉菜。",
  "ex_py": "Lǐ Wén gèng xǐhuan chī xián de, xuǎn le Hóngshāo Yángròu hé yí dào liáng cài.",
  "ex_vn": "Lý Văn thích ăn mặn hơn, chọn món thịt dê kho tàu và một món nguội.",
  "exList": [
   {
    "zh": "李文更喜欢吃咸的，选了红烧羊肉和一道凉菜。",
    "py": "Lǐ Wén gèng xǐhuan chī xián de, xuǎn le Hóngshāo Yángròu hé yí dào liáng cài.",
    "vn": "Lý Văn thích ăn mặn hơn, chọn món thịt dê kho tàu và một món nguội."
   },
   {
    "zh": "你们怎么还不吃？一会儿菜都凉了。",
    "py": "Nǐmen zěnme hái bù chī? Yíhuìr cài dōu liáng le.",
    "vn": "Sao các bạn vẫn chưa ăn? Lát nữa thức ăn nguội hết bây giờ."
   }
  ],
  "hanzi": [
   {
    "c": "凉",
    "p": "liáng",
    "type": "左右结构 · Trái-phải",
    "st": 10,
    "ord": "冫 trái → 京 phải",
    "rad": "冫 (băng)",
    "mean": "mát",
    "tip": "Bộ băng 冫 (lạnh) + 京 → MÁT, LẠNH. 凉快 = mát mẻ; 凉茶 = trà mát (Bài 13).",
    "cf": "谅 (liàng – lượng thứ, Bài 16)",
    "w": "凉快 / 凉茶 / 凉水"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Sao các bạn vẫn chưa ăn? Lát nữa thức ăn nguội hết bây giờ.",
    "answer": "你们怎么还不吃？一会儿菜都凉了。",
    "answerPy": "Nǐmen zěnme hái bù chī? Yíhuìr cài dōu liáng le.",
    "note": "Câu chọn từ của sách (综合练习 câu 8).",
    "pair": "……都凉了"
   },
   {
    "promptLang": "vi",
    "prompt": "Mau ăn đi, không ăn thì thức ăn nguội mất.",
    "answer": "快吃吧，再不吃，菜就凉了。",
    "answerPy": "Kuài chī ba, zài bù chī, cài jiù liáng le.",
    "note": "再不……就…… (HSK 3).",
    "pair": "再不……就……"
   }
  ]
 },
 {
  "n": 23,
  "zh": "酸",
  "py": "suān",
  "pos": "Tính từ",
  "vn": "chua; mỏi, ê ẩm",
  "hv": "toan",
  "em": "🍋",
  "lesson": 3,
  "explain": [
   "Vị chua (chanh, giấm).",
   "Còn chỉ cảm giác mỏi, ê: 腿酸 (mỏi chân)."
  ],
  "usage": "酸汤 · 酸甜 · 有点儿酸 · 腿酸.",
  "collo": [
   "酸汤",
   "酸甜",
   "有点儿酸",
   "腿酸"
  ],
  "colloFull": [
   {
    "zh": "酸汤",
    "py": "Suān tāng",
    "vn": "canh chua"
   },
   {
    "zh": "酸甜",
    "py": "Suān tián",
    "vn": "chua ngọt"
   },
   {
    "zh": "有点儿酸",
    "py": "Yǒudiǎnr suān",
    "vn": "hơi chua"
   },
   {
    "zh": "腿酸",
    "py": "Tuǐ suān",
    "vn": "mỏi chân"
   }
  ],
  "patterns": [
   {
    "s": "酸、甜、苦、辣、咸",
    "m": "Năm vị cơ bản"
   },
   {
    "s": "酸甜可口",
    "m": "Chua ngọt vừa miệng"
   }
  ],
  "ex_zh": "安妮听说贵州酸汤很有名，点了酸汤米线。",
  "ex_py": "Ānní tīngshuō Guìzhōu suān tāng hěn yǒumíng, diǎn le Suāntāng Mǐxiàn.",
  "ex_vn": "Annie nghe nói canh chua Quý Châu rất nổi tiếng, nên gọi bún canh chua.",
  "exList": [
   {
    "zh": "安妮听说贵州酸汤很有名，点了酸汤米线。",
    "py": "Ānní tīngshuō Guìzhōu suān tāng hěn yǒumíng, diǎn le Suāntāng Mǐxiàn.",
    "vn": "Annie nghe nói canh chua Quý Châu rất nổi tiếng, nên gọi bún canh chua."
   },
   {
    "zh": "松鼠鳜鱼味道酸甜可口。",
    "py": "Sōngshǔ Guìyú wèidào suān tián kěkǒu.",
    "vn": "Món cá quế hình con sóc có vị chua ngọt, rất ngon miệng."
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
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Món này vừa chua vừa cay, tôi rất thích.",
    "answer": "这道菜又酸又辣，我很喜欢。",
    "answerPy": "Zhè dào cài yòu suān yòu là, wǒ hěn xǐhuan.",
    "note": "Ôn 又……又…… (HSK 3).",
    "pair": "又……又……"
   },
   {
    "promptLang": "vi",
    "prompt": "Đi bộ cả ngày, chân tôi mỏi quá, không đi nổi nữa.",
    "answer": "走了一天，我的腿太酸了，走不动了。",
    "answerPy": "Zǒu le yì tiān, wǒ de tuǐ tài suān le, zǒu bú dòng le.",
    "note": "酸 = mỏi; ôn bổ ngữ khả năng 走不动 (Bài 4).",
    "pair": "V不动"
   }
  ]
 },
 {
  "n": 24,
  "zh": "汤",
  "py": "tāng",
  "pos": "Danh từ",
  "vn": "canh, súp, nước dùng",
  "hv": "thang",
  "em": "🍜",
  "lesson": 3,
  "explain": [
   "Món nước (canh, súp), hoặc nước dùng của món ăn. Động từ đi kèm: 喝汤 (không nói 吃汤)."
  ],
  "usage": "喝汤 · 一碗汤 · 酸汤 · 鸡汤.",
  "collo": [
   "喝汤",
   "一碗汤",
   "鸡汤",
   "酸汤"
  ],
  "colloFull": [
   {
    "zh": "喝汤",
    "py": "Hē tāng",
    "vn": "ăn (uống) canh"
   },
   {
    "zh": "一碗汤",
    "py": "Yì wǎn tāng",
    "vn": "một bát canh"
   },
   {
    "zh": "鸡汤",
    "py": "Jī tāng",
    "vn": "canh gà"
   },
   {
    "zh": "酸汤",
    "py": "Suān tāng",
    "vn": "canh chua"
   }
  ],
  "patterns": [
   {
    "s": "喝 + 汤",
    "m": "✗ 吃汤 → ✓ 喝汤"
   },
   {
    "s": "一碗 / 一个 + 汤",
    "m": "Lượng từ"
   }
  ],
  "ex_zh": "安妮听说贵州酸汤很有名，点了酸汤米线。",
  "ex_py": "Ānní tīngshuō Guìzhōu suān tāng hěn yǒumíng, diǎn le Suāntāng Mǐxiàn.",
  "ex_vn": "Annie nghe nói canh chua Quý Châu rất nổi tiếng, nên gọi bún canh chua.",
  "exList": [
   {
    "zh": "安妮听说贵州酸汤很有名，点了酸汤米线。",
    "py": "Ānní tīngshuō Guìzhōu suān tāng hěn yǒumíng, diǎn le Suāntāng Mǐxiàn.",
    "vn": "Annie nghe nói canh chua Quý Châu rất nổi tiếng, nên gọi bún canh chua."
   },
   {
    "zh": "这个汤看起来很好喝。",
    "py": "Zhège tāng kàn qǐlái hěn hǎo hē.",
    "vn": "Món canh này trông có vẻ rất ngon."
   }
  ],
  "hanzi": [
   {
    "c": "汤",
    "p": "tāng",
    "type": "左右结构 · Trái-phải",
    "st": 6,
    "ord": "氵 trái → 𠃓 phải",
    "rad": "氵 (thủy)",
    "mean": "canh",
    "tip": "Nước 氵 + 𠃓 → nước nóng → CANH, SÚP. Phân biệt 场 (chǎng, bộ 土, Bài 19), 扬 (yáng, Bài 15).",
    "cf": "场 (chǎng – sân)",
    "w": "汤 / 鸡蛋汤 / 喝汤"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Món canh này trông có vẻ rất ngon.",
    "answer": "这个汤看起来很好喝。",
    "answerPy": "Zhège tāng kàn qǐlái hěn hǎo hē.",
    "note": "Đáp án gợi ý bài nhìn tranh của sách.",
    "pair": "看起来很好喝"
   },
   {
    "promptLang": "vi",
    "prompt": "Người miền Nam thích ăn cơm trước, rồi uống canh sau.",
    "answer": "南方人喜欢先吃饭，然后再喝汤。",
    "answerPy": "Nánfāng rén xǐhuan xiān chīfàn, ránhòu zài hē tāng.",
    "note": "Ôn 先……然后…… (HSK 3).",
    "pair": "先……然后……"
   }
  ]
 },
 {
  "n": 25,
  "zh": "各",
  "py": "gè",
  "pos": "Phó từ / Đại từ",
  "vn": "mỗi, các; ai nấy (đều)",
  "hv": "các",
  "em": "🧩",
  "lesson": 3,
  "explain": [
   "Đại từ: mỗi, các (各国, 各地, 各位).",
   "Phó từ: mỗi người (đều) làm — 各×各的: ai làm phần nấy, không ảnh hưởng nhau. Bẫy: 各 ≠ “các” chỉ số nhiều trong tiếng Việt, mà nhấn mạnh TỪNG cái một."
  ],
  "usage": "各付各的 · 各国 · 各位 · 各点了一道菜.",
  "collo": [
   "各付各的",
   "各国",
   "各位",
   "各点一道菜"
  ],
  "colloFull": [
   {
    "zh": "各付各的",
    "py": "Gè fù gè de",
    "vn": "ai trả phần nấy"
   },
   {
    "zh": "各国",
    "py": "Gè guó",
    "vn": "các nước"
   },
   {
    "zh": "各位",
    "py": "Gè wèi",
    "vn": "quý vị, các bạn"
   },
   {
    "zh": "各点一道菜",
    "py": "Gè diǎn yí dào cài",
    "vn": "mỗi người gọi một món"
   }
  ],
  "patterns": [
   {
    "s": "各 + V + 各 + 的",
    "m": "Bài 5 · điểm 3: ai … nấy"
   },
   {
    "s": "各 + V + 数量",
    "m": "Mỗi người … (各点了一道菜)"
   }
  ],
  "ex_zh": "结账时，李文想请客，但大家觉得还是各付各的更合适。",
  "ex_py": "Jié zhàng shí, Lǐ Wén xiǎng qǐngkè, dàn dàjiā juéde háishì gè fù gè de gèng héshì.",
  "ex_vn": "Lúc thanh toán, Lý Văn muốn mời, nhưng mọi người thấy vẫn là ai trả phần nấy thì hợp hơn.",
  "exList": [
   {
    "zh": "结账时，李文想请客，但大家觉得还是各付各的更合适。",
    "py": "Jié zhàng shí, Lǐ Wén xiǎng qǐngkè, dàn dàjiā juéde háishì gè fù gè de gèng héshì.",
    "vn": "Lúc thanh toán, Lý Văn muốn mời, nhưng mọi người thấy vẫn là ai trả phần nấy thì hợp hơn."
   },
   {
    "zh": "刘明和两个孩子也各点了一道菜。",
    "py": "Liú Míng hé liǎng gè háizi yě gè diǎn le yí dào cài.",
    "vn": "Lưu Minh và hai đứa con cũng mỗi người gọi một món."
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
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Mọi người thấy vẫn là ai trả phần nấy thì hợp hơn.",
    "answer": "大家觉得还是各付各的更合适。",
    "answerPy": "Dàjiā juéde háishì gè fù gè de gèng héshì.",
    "note": "Câu trong bài khoá 3 (Bài 5 · điểm 3).",
    "pair": "各付各的"
   },
   {
    "promptLang": "vi",
    "prompt": "Họ muốn mua đồ khác nhau, nên đến trung tâm thương mại thì mỗi người mua một kiểu.",
    "answer": "他们想买的东西不一样，于是到了商场以后就各买各的了。",
    "answerPy": "Tāmen xiǎng mǎi de dōngxi bù yíyàng, yúshì dào le shāngchǎng yǐhòu jiù gè mǎi gè de le.",
    "note": "Đáp án gợi ý của sách; ôn 于是 (Bài 3 · điểm 4).",
    "pair": "于是……各买各的"
   }
  ]
 },
 {
  "n": 26,
  "zh": "付",
  "py": "fù",
  "pos": "Động từ",
  "vn": "trả (tiền), thanh toán",
  "hv": "phó",
  "em": "💳",
  "lesson": 3,
  "explain": [
   "Đưa tiền cho người khác: 付钱, 付款, 付账. Phân biệt: 付 = trả tiền; 还 (huán) = trả lại (tiền đã vay)."
  ],
  "usage": "付钱 · 付完钱 · 各付各的 · 用手机付.",
  "collo": [
   "付钱",
   "付完钱",
   "用手机付",
   "我来付"
  ],
  "colloFull": [
   {
    "zh": "付钱",
    "py": "Fù qián",
    "vn": "trả tiền"
   },
   {
    "zh": "付完钱",
    "py": "Fù wán qián",
    "vn": "trả tiền xong"
   },
   {
    "zh": "用手机付",
    "py": "Yòng shǒujī fù",
    "vn": "trả bằng điện thoại"
   },
   {
    "zh": "我来付",
    "py": "Wǒ lái fù",
    "vn": "để tôi trả"
   }
  ],
  "patterns": [
   {
    "s": "把钱 + 付给 + ai",
    "m": "Câu chữ 把 + 给 (HSK 3)"
   },
   {
    "s": "付 ≠ 还 (huán)",
    "m": "付 = thanh toán; 还 = trả lại tiền nợ"
   }
  ],
  "ex_zh": "李文付完钱后，大家把钱转给了他。",
  "ex_py": "Lǐ Wén fù wán qián hòu, dàjiā bǎ qián zhuǎn gěi le tā.",
  "ex_vn": "Sau khi Lý Văn trả tiền xong, mọi người chuyển tiền lại cho anh ấy.",
  "exList": [
   {
    "zh": "李文付完钱后，大家把钱转给了他。",
    "py": "Lǐ Wén fù wán qián hòu, dàjiā bǎ qián zhuǎn gěi le tā.",
    "vn": "Sau khi Lý Văn trả tiền xong, mọi người chuyển tiền lại cho anh ấy."
   },
   {
    "zh": "谢谢！多少钱？我把钱付给你。",
    "py": "Xièxiè! Duōshǎo qián? Wǒ bǎ qián fù gěi nǐ.",
    "vn": "Cảm ơn nhé! Bao nhiêu tiền? Tôi trả tiền cho bạn."
   }
  ],
  "hanzi": [
   {
    "c": "付",
    "p": "fù",
    "type": "会意字 · Chữ hội ý",
    "st": 5,
    "ord": "亻 → 寸",
    "rad": "亻 (nhân đứng – người)",
    "mean": "trả (tiền), giao cho",
    "tip": "Người (亻) + 寸 (bàn tay): đưa tay trao đồ cho người khác → giao, trả tiền — 付钱, 各付各的.",
    "cf": "讨 tǎo (thảo luận) — bên trái là 讠; 时 shí — bên trái là 日",
    "w": "付钱 / 付款 / 支付"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Cảm ơn nhé! Bao nhiêu tiền? Tôi trả tiền cho bạn.",
    "answer": "谢谢！多少钱？我把钱付给你。",
    "answerPy": "Xièxiè! Duōshǎo qián? Wǒ bǎ qián fù gěi nǐ.",
    "note": "Câu chọn từ của sách (综合练习 câu 10).",
    "pair": "把钱付给……"
   },
   {
    "promptLang": "vi",
    "prompt": "Lần này bạn đừng trả, vả lại lần trước cũng là bạn mời rồi.",
    "answer": "这次你别付了，再说上次也是你请的客。",
    "answerPy": "Zhè cì nǐ bié fù le, zài shuō shàng cì yě shì nǐ qǐng de kè.",
    "note": "Ôn 再说 (Bài 4 · điểm 2).",
    "pair": "再说……"
   }
  ]
 },
 {
  "n": 27,
  "zh": "聚餐",
  "py": "jùcān",
  "pos": "Động từ",
  "vn": "ăn uống tụ tập, liên hoan",
  "hv": "tụ xan",
  "em": "🍻",
  "lesson": 3,
  "explain": [
   "Nhiều người cùng ăn một bữa (bạn bè, đồng nghiệp, gia đình). Cũng dùng như danh từ: 正式聚餐 (bữa tiệc trang trọng)."
  ],
  "usage": "一起聚餐 · 下次再聚餐 · 正式聚餐 · 公司聚餐.",
  "collo": [
   "一起聚餐",
   "公司聚餐",
   "正式聚餐",
   "聚餐的时候"
  ],
  "colloFull": [
   {
    "zh": "一起聚餐",
    "py": "Yìqǐ jùcān",
    "vn": "cùng đi ăn"
   },
   {
    "zh": "公司聚餐",
    "py": "Gōngsī jùcān",
    "vn": "liên hoan công ty"
   },
   {
    "zh": "正式聚餐",
    "py": "Zhèngshì jùcān",
    "vn": "bữa tiệc trang trọng"
   },
   {
    "zh": "聚餐的时候",
    "py": "Jùcān de shíhou",
    "vn": "lúc ăn uống tụ tập"
   }
  ],
  "patterns": [
   {
    "s": "和 / 跟 + ai + 一起聚餐",
    "m": "Ăn tụ tập với ai"
   },
   {
    "s": "聚 (tụ) + 餐 (bữa ăn)",
    "m": "Từ ghép dễ nhớ"
   }
  ],
  "ex_zh": "大家把钱转给了他，还笑着说下次再一起聚餐。",
  "ex_py": "Dàjiā bǎ qián zhuǎn gěi le tā, hái xiào zhe shuō xià cì zài yìqǐ jùcān.",
  "ex_vn": "Mọi người chuyển tiền cho anh ấy, còn cười nói lần sau lại cùng nhau đi ăn.",
  "exList": [
   {
    "zh": "大家把钱转给了他，还笑着说下次再一起聚餐。",
    "py": "Dàjiā bǎ qián zhuǎn gěi le tā, hái xiào zhe shuō xià cì zài yìqǐ jùcān.",
    "vn": "Mọi người chuyển tiền cho anh ấy, còn cười nói lần sau lại cùng nhau đi ăn."
   },
   {
    "zh": "在中国，正式聚餐和普通聚餐不同。",
    "py": "Zài Zhōngguó, zhèngshì jùcān hé pǔtōng jùcān bùtóng.",
    "vn": "Ở Trung Quốc, bữa tiệc trang trọng và bữa ăn bình thường khác nhau."
   }
  ],
  "hanzi": [
   {
    "c": "聚",
    "p": "jù",
    "type": "上下结构 · Trên-dưới",
    "st": 14,
    "ord": "取 trên → 乑 dưới (biến thể của 众)",
    "rad": "耳 (nhĩ)",
    "mean": "tụ họp",
    "tip": "Phần trên 取 (lấy, gom) + phần dưới liên quan đến 众 (đông người) → GOM NHIỀU NGƯỜI lại một chỗ = TỤ HỌP.",
    "cf": "聚 dễ nhầm với 娶 (qǔ – \"cưới vợ\", có bộ 女\")",
    "w": "聚会 / 聚集 / 团聚"
   },
   {
    "c": "餐",
    "p": "cān",
    "type": "上下结构 · Trên-dưới",
    "st": 16,
    "ord": "歺+又 trên → 食 dưới",
    "rad": "食 (thực – ăn)",
    "mean": "bữa ăn",
    "tip": "Bộ ăn 食 ở dưới + phần trên biểu âm → BỮA ĂN, kết hợp 厅(sảnh) thành 餐厅 = NHÀ HÀNG (ôn lại 客厅 Bài 11).",
    "cf": "同字词: 客厅 / 餐厅 / 大厅",
    "w": "餐厅 / 早餐 / 西餐"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Cuối tuần lớp chúng tôi đi liên hoan, bạn đến được không?",
    "answer": "周末我们班去聚餐，你来得了吗？",
    "answerPy": "Zhōumò wǒmen bān qù jùcān, nǐ lái de liǎo ma?",
    "note": "Ôn V得了 (Bài 4 · điểm 1).",
    "pair": "来得了"
   },
   {
    "promptLang": "vi",
    "prompt": "Lúc ăn uống tụ tập, mọi người vừa ăn vừa trò chuyện, rất vui.",
    "answer": "聚餐的时候，大家边吃边聊，非常愉快。",
    "answerPy": "Jùcān de shíhou, dàjiā biān chī biān liáo, fēicháng yúkuài.",
    "note": "Câu trong bài khoá 3 (ý).",
    "pair": "边……边……"
   }
  ]
 },
 {
  "n": 28,
  "zh": "辣子鸡",
  "py": "Làzǐjī",
  "pos": "Danh từ riêng",
  "vn": "gà xào ớt khô (món Tứ Xuyên)",
  "hv": "lạt tử kê",
  "em": "🍗",
  "lesson": 3,
  "explain": [
   "Món gà chặt miếng nhỏ chiên giòn, xào với rất nhiều ớt khô — món cay nổi tiếng của Tứ Xuyên, Trùng Khánh."
  ],
  "usage": "要了辣子鸡 · 一道辣子鸡.",
  "collo": [
   "要辣子鸡",
   "一道辣子鸡",
   "四川辣子鸡",
   "点辣子鸡"
  ],
  "colloFull": [
   {
    "zh": "要辣子鸡",
    "py": "Yào Làzǐjī",
    "vn": "gọi gà xào ớt"
   },
   {
    "zh": "一道辣子鸡",
    "py": "Yí dào Làzǐjī",
    "vn": "một món gà xào ớt"
   },
   {
    "zh": "四川辣子鸡",
    "py": "Sì chuān Làzǐjī",
    "vn": "gà xào ớt Tứ Xuyên"
   },
   {
    "zh": "点辣子鸡",
    "py": "Diǎn Làzǐjī",
    "vn": "gọi gà xào ớt"
   }
  ],
  "patterns": [
   {
    "s": "辣子 (ớt) + 鸡 (gà)",
    "m": "Tên món theo nguyên liệu"
   }
  ],
  "ex_zh": "白家月想吃辣的，要了辣子鸡。",
  "ex_py": "Bái Jiāyuè xiǎng chī là de, yào le Làzǐjī.",
  "ex_vn": "Bạch Gia Nguyệt muốn ăn cay, gọi món gà xào ớt khô.",
  "exList": [
   {
    "zh": "白家月想吃辣的，要了辣子鸡。",
    "py": "Bái Jiāyuè xiǎng chī là de, yào le Làzǐjī.",
    "vn": "Bạch Gia Nguyệt muốn ăn cay, gọi món gà xào ớt khô."
   },
   {
    "zh": "辣子鸡辣是辣，不过非常香。",
    "py": "Làzǐjī là shì là, búguò fēicháng xiāng.",
    "vn": "Gà xào ớt khô cay thì cay thật, nhưng rất thơm."
   }
  ],
  "hanzi": [
   {
    "c": "辣",
    "p": "là",
    "type": "左右结构 · Trái-phải",
    "st": 14,
    "ord": "辛 trái → 束 phải",
    "rad": "辛 (tân)",
    "mean": "cay",
    "tip": "辛(cay) + 束 → CAY. Năm vị: 酸 (chua), 甜 (ngọt), 苦 (đắng, Bài 13), 辣 (cay), 咸 (mặn, Bài 18).",
    "cf": "辛 (xīn – 辛苦 Bài 4)",
    "w": "辣 / 辣椒 / 酸辣"
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
   },
   {
    "c": "鸡",
    "p": "jī",
    "type": "形声字 · Chữ hình thanh",
    "st": 7,
    "ord": "又 → 鸟",
    "rad": "鸟 (điểu – chim)",
    "mean": "con gà",
    "tip": "又 + 鸟 (chim, HSK2 Bài 15): loài chim nuôi trong nhà → gà. Ôn: 鸡蛋 (HSK1 Bài 13).",
    "cf": "鸟 niǎo (chim) — không có 又",
    "w": "鸡肉 / 鸡蛋"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Bạch Gia Nguyệt muốn ăn cay nên gọi món gà xào ớt khô.",
    "answer": "白家月想吃辣的，所以要了辣子鸡。",
    "answerPy": "Bái Jiāyuè xiǎng chī là de, suǒyǐ yào le Làzǐjī.",
    "note": "Câu trong bài khoá 3.",
    "pair": "想吃……，要了……"
   },
   {
    "promptLang": "vi",
    "prompt": "Gà xào ớt khô cay thì cay, nhưng rất thơm.",
    "answer": "辣子鸡辣是辣，不过非常香。",
    "answerPy": "Làzǐjī là shì là, búguò fēicháng xiāng.",
    "note": "Ôn ×是×，不过…… (Bài 3 · điểm 1).",
    "pair": "×是×，不过……"
   }
  ]
 },
 {
  "n": 29,
  "zh": "松鼠鳜鱼",
  "py": "Sōngshǔ Guìyú",
  "pos": "Danh từ riêng",
  "vn": "cá quế hình con sóc (món Tô Châu)",
  "hv": "tùng thử quyết ngư",
  "em": "🐿️",
  "lesson": 3,
  "explain": [
   "Món tiêu biểu của ẩm thực Tô Châu: cá quế khứa hoa, chiên giòn, rưới nước sốt chua ngọt; thành phẩm trông như con sóc xù lông (松鼠 = con sóc)."
  ],
  "usage": "尝尝松鼠鳜鱼 · 一道松鼠鳜鱼.",
  "collo": [
   "尝尝松鼠鳜鱼",
   "苏州的松鼠鳜鱼",
   "酸甜的松鼠鳜鱼",
   "一道松鼠鳜鱼"
  ],
  "colloFull": [
   {
    "zh": "尝尝松鼠鳜鱼",
    "py": "Cháng cháng Sōngshǔ Guìyú",
    "vn": "nếm thử cá quế hình sóc"
   },
   {
    "zh": "苏州的松鼠鳜鱼",
    "py": "Sū zhōu de Sōngshǔ Guìyú",
    "vn": "cá quế hình sóc Tô Châu"
   },
   {
    "zh": "酸甜的松鼠鳜鱼",
    "py": "Suān tián de Sōngshǔ Guìyú",
    "vn": "cá quế chua ngọt"
   },
   {
    "zh": "一道松鼠鳜鱼",
    "py": "Yí dào Sōngshǔ Guìyú",
    "vn": "một món cá quế hình sóc"
   }
  ],
  "patterns": [
   {
    "s": "松鼠 (con sóc) + 鳜鱼 (cá quế)",
    "m": "Tên món theo hình dáng"
   }
  ],
  "ex_zh": "陈天中爱吃甜的，想尝尝松鼠鳜鱼。",
  "ex_py": "Chén Tiānzhōng ài chī tián de, xiǎng cháng cháng Sōngshǔ Guìyú.",
  "ex_vn": "Trần Thiên Trung thích ăn ngọt, muốn nếm thử món cá quế hình con sóc.",
  "exList": [
   {
    "zh": "陈天中爱吃甜的，想尝尝松鼠鳜鱼。",
    "py": "Chén Tiānzhōng ài chī tián de, xiǎng cháng cháng Sōngshǔ Guìyú.",
    "vn": "Trần Thiên Trung thích ăn ngọt, muốn nếm thử món cá quế hình con sóc."
   },
   {
    "zh": "松鼠鳜鱼的样子像一只松鼠，味道酸甜可口。",
    "py": "Sōngshǔ Guìyú de yàngzi xiàng yì zhī sōng shǔ, wèidào suān tián kěkǒu.",
    "vn": "Món cá quế hình con sóc trông như một con sóc, vị chua ngọt rất ngon miệng."
   }
  ],
  "hanzi": [
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
   },
   {
    "c": "鼠",
    "p": "shǔ",
    "type": "象形字 · Chữ tượng hình",
    "st": 13,
    "ord": "臼 → phần thân, chân và đuôi",
    "rad": "鼠 (thử – chuột)",
    "mean": "chuột",
    "tip": "Vẽ con chuột: trên là cái đầu với hàm răng nhọn (臼), dưới là thân, bốn chân và cái đuôi dài. 松鼠 = “chuột cây thông” = con sóc.",
    "cf": "鼎 dǐng (cái đỉnh) — chân khác hẳn",
    "w": "老鼠 / 松鼠 / 鼠标"
   },
   {
    "c": "鳜",
    "p": "jué",
    "type": "形声字 · Chữ hình thanh",
    "st": 20,
    "ord": "鱼 → 厥",
    "rad": "鱼 (ngư – cá)",
    "mean": "cá quế (cá rô mandarin)",
    "tip": "Bộ 鱼 (cá) + 厥 jué (chỉ âm gần): tên một loài cá nước ngọt thịt ngon — 鳜鱼, món 松鼠鳜鱼 của Tô Châu.",
    "cf": "蹶 jué (ngã) — bộ 足 thay cho 鱼",
    "w": "鳜鱼 / 松鼠鳜鱼"
   },
   {
    "c": "鱼",
    "p": "yú",
    "type": "上下结构 · Trên-dưới",
    "st": 8,
    "ord": "⺈ → 田 → 一",
    "rad": "鱼 (ngư)",
    "mean": "cá",
    "tip": "Tượng hình con CÁ (đầu ⺈, thân 田, đuôi 一). 美人鱼 = người đẹp cá = người cá.",
    "cf": "渔 (yú – đánh cá)",
    "w": "鱼 / 美人鱼 / 鱼汤"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Trần Thiên Trung thích ăn ngọt, nên muốn nếm thử cá quế hình con sóc.",
    "answer": "陈天中爱吃甜的，所以想尝尝松鼠鳜鱼。",
    "answerPy": "Chén Tiānzhōng ài chī tián de, suǒyǐ xiǎng cháng cháng Sōngshǔ Guìyú.",
    "note": "Câu trong bài khoá 3; V V (尝尝) = thử.",
    "pair": "尝尝"
   },
   {
    "promptLang": "vi",
    "prompt": "Món này không những trông đẹp mà còn có vị chua ngọt.",
    "answer": "这道菜不仅看起来很漂亮，而且味道酸甜。",
    "answerPy": "Zhè dào cài bùjǐn kàn qǐlái hěn piàoliang, érqiě wèidào suān tián.",
    "note": "Ôn 不仅……而且…… (Bài 3 · điểm 2).",
    "pair": "不仅……而且……"
   }
  ]
 },
 {
  "n": 30,
  "zh": "红烧羊肉",
  "py": "Hóngshāo Yángròu",
  "pos": "Danh từ riêng",
  "vn": "thịt dê (cừu) kho tàu",
  "hv": "hồng thiêu dương nhục",
  "em": "🥘",
  "lesson": 3,
  "explain": [
   "红烧 là cách kho với xì dầu, đường cho màu nâu đỏ; 羊肉 = thịt dê / cừu. Món này đậm vị, hơi mặn ngọt."
  ],
  "usage": "选了红烧羊肉 · 一道红烧羊肉.",
  "collo": [
   "红烧羊肉",
   "红烧鱼",
   "红烧肉",
   "一道红烧羊肉"
  ],
  "colloFull": [
   {
    "zh": "红烧羊肉",
    "py": "Hóngshāo Yángròu",
    "vn": "thịt dê kho tàu"
   },
   {
    "zh": "红烧鱼",
    "py": "Hóng shāo yú",
    "vn": "cá kho tàu"
   },
   {
    "zh": "红烧肉",
    "py": "Hóng shāo ròu",
    "vn": "thịt kho tàu"
   },
   {
    "zh": "一道红烧羊肉",
    "py": "Yí dào Hóngshāo Yángròu",
    "vn": "một món dê kho"
   }
  ],
  "patterns": [
   {
    "s": "红烧 + 肉 / 鱼 / 羊肉",
    "m": "Cách nấu + nguyên liệu"
   }
  ],
  "ex_zh": "李文更喜欢吃咸的，选了红烧羊肉和一道凉菜。",
  "ex_py": "Lǐ Wén gèng xǐhuan chī xián de, xuǎn le Hóngshāo Yángròu hé yí dào liáng cài.",
  "ex_vn": "Lý Văn thích ăn mặn hơn, chọn món thịt dê kho tàu và một món nguội.",
  "exList": [
   {
    "zh": "李文更喜欢吃咸的，选了红烧羊肉和一道凉菜。",
    "py": "Lǐ Wén gèng xǐhuan chī xián de, xuǎn le Hóngshāo Yángròu hé yí dào liáng cài.",
    "vn": "Lý Văn thích ăn mặn hơn, chọn món thịt dê kho tàu và một món nguội."
   },
   {
    "zh": "妈妈做的红烧羊肉既好看又好吃。",
    "py": "Māma zuò de Hóngshāo Yángròu jì hǎokàn yòu hǎochī.",
    "vn": "Thịt dê kho tàu mẹ làm vừa đẹp mắt lại vừa ngon."
   }
  ],
  "hanzi": [
   {
    "c": "红",
    "p": "hóng",
    "type": "形声字 · Chữ hình thanh",
    "st": 6,
    "ord": "纟 → 工",
    "rad": "纟 (mịch – sợi tơ)",
    "mean": "màu đỏ; nổi tiếng, đắt khách",
    "tip": "Bộ 纟 (sợi tơ) + 工 gōng (chỉ âm): sợi tơ nhuộm màu đỏ. 红烧 = kho cho có màu nâu đỏ.",
    "cf": "江 jiāng (sông) — bên trái là 氵",
    "w": "红色 / 红烧 / 红茶"
   },
   {
    "c": "烧",
    "p": "shāo",
    "type": "形声字 · Chữ hình thanh",
    "st": 10,
    "ord": "火 → 尧",
    "rad": "火 (hoả – lửa)",
    "mean": "đốt, cháy; sốt",
    "tip": "火 (lửa) + 尧 (chỉ âm): người nóng như có lửa đốt → sốt. 发烧 = phát sốt.",
    "cf": "晓 xiǎo — bên trái là 日",
    "w": "发烧 / 发高烧 / 发低烧"
   },
   {
    "c": "羊",
    "p": "yáng",
    "type": "象形字 · Chữ tượng hình",
    "st": 6,
    "ord": "chấm → phẩy → ngang → ngang → ngang → sổ",
    "rad": "羊 (dương – con dê)",
    "mean": "dê, cừu",
    "tip": "Hình đầu con dê nhìn thẳng: hai nét trên là cặp sừng, nét sổ là mặt. 羊 cũng là phần chỉ âm của 样 (一样 – bài này).",
    "cf": "半 bàn (一半) — trên cũng có hai nét chấm/phẩy",
    "w": "羊 / 羊肉"
   },
   {
    "c": "肉",
    "p": "ròu",
    "type": "象形字 · Chữ tượng hình",
    "st": 6,
    "ord": "冂 → 人 → 人",
    "rad": "肉 (nhục – thịt)",
    "mean": "thịt",
    "tip": "Vẽ một miếng thịt có thớ (hai chữ 人 bên trong là các thớ thịt). Làm bộ bên trái thì viết thành 月 (肚, 脸, 腿).",
    "cf": "内 nèi (bên trong) — bên trong chỉ có một 人",
    "w": "羊肉 / 牛肉 / 肉菜"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Thịt dê kho tàu mẹ làm vừa đẹp mắt lại vừa ngon.",
    "answer": "妈妈做的红烧羊肉既好看又好吃。",
    "answerPy": "Māma zuò de Hóngshāo Yángròu jì hǎokàn yòu hǎochī.",
    "note": "Ôn 既……又…… (Bài 4 · điểm 3).",
    "pair": "既……又……"
   },
   {
    "promptLang": "vi",
    "prompt": "Lý Văn thích ăn mặn hơn, nên chọn thịt dê kho tàu.",
    "answer": "李文更喜欢吃咸的，所以选了红烧羊肉。",
    "answerPy": "Lǐ Wén gèng xǐhuan chī xián de, suǒyǐ xuǎn le Hóngshāo Yángròu.",
    "note": "Câu trong bài khoá 3.",
    "pair": "更喜欢……"
   }
  ]
 },
 {
  "n": 31,
  "zh": "贵州",
  "py": "Guìzhōu",
  "pos": "Danh từ riêng",
  "vn": "tỉnh Quý Châu",
  "hv": "Quý Châu",
  "em": "🏞️",
  "lesson": 3,
  "explain": [
   "Một tỉnh ở tây nam Trung Quốc, nổi tiếng với món canh chua (酸汤) và cảnh núi non thác nước."
  ],
  "usage": "贵州酸汤 · 去贵州旅游.",
  "collo": [
   "贵州酸汤",
   "去贵州",
   "贵州菜",
   "贵州人"
  ],
  "colloFull": [
   {
    "zh": "贵州酸汤",
    "py": "Guìzhōu suān tāng",
    "vn": "canh chua Quý Châu"
   },
   {
    "zh": "去贵州",
    "py": "Qù Guìzhōu",
    "vn": "đi Quý Châu"
   },
   {
    "zh": "贵州菜",
    "py": "Guìzhōu cài",
    "vn": "món Quý Châu"
   },
   {
    "zh": "贵州人",
    "py": "Guìzhōu rén",
    "vn": "người Quý Châu"
   }
  ],
  "patterns": [
   {
    "s": "Tên địa phương + 菜 / 酸汤",
    "m": "Món ăn của vùng nào"
   }
  ],
  "ex_zh": "安妮听说贵州酸汤很有名，点了酸汤米线。",
  "ex_py": "Ānní tīngshuō Guìzhōu suān tāng hěn yǒumíng, diǎn le Suāntāng Mǐxiàn.",
  "ex_vn": "Annie nghe nói canh chua Quý Châu rất nổi tiếng, nên gọi bún canh chua.",
  "exList": [
   {
    "zh": "安妮听说贵州酸汤很有名，点了酸汤米线。",
    "py": "Ānní tīngshuō Guìzhōu suān tāng hěn yǒumíng, diǎn le Suāntāng Mǐxiàn.",
    "vn": "Annie nghe nói canh chua Quý Châu rất nổi tiếng, nên gọi bún canh chua."
   },
   {
    "zh": "贵州人既爱吃酸的，又爱吃辣的。",
    "py": "Guìzhōu rén jì ài chī suān de, yòu ài chī là de.",
    "vn": "Người Quý Châu vừa thích ăn chua vừa thích ăn cay."
   }
  ],
  "hanzi": [
   {
    "c": "贵",
    "p": "guì",
    "type": "上下结构 · Trên-dưới",
    "st": 9,
    "ord": "中→一→贝(bối)",
    "rad": "贝 (bối – vỏ sò, tiền cổ)",
    "mean": "đắt, quý",
    "tip": "Bộ 贝(tiền tệ cổ) → liên quan tới giá trị lớn = ĐẮT, QUÝ GIÁ.",
    "cf": "柜 (guì – \"tủ\", bộ 木)",
    "w": "很贵 / 不贵"
   },
   {
    "c": "州",
    "p": "zhōu",
    "type": "象形字 · Chữ tượng hình",
    "st": 6,
    "ord": "丶 → 丿 → 丶 → 丨 → 丶 → 丨",
    "rad": "川 (xuyên) · bộ 丶",
    "mean": "châu (đơn vị hành chính); vùng đất giữa sông",
    "tip": "Hình ba dòng sông (川) với những chấm là bãi đất nổi giữa sông — vùng đất có người ở. Có trong tên nhiều nơi: 贵州, 广州, 苏州.",
    "cf": "川 chuān (sông) — không có ba chấm",
    "w": "贵州 / 广州 / 苏州"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Người Quý Châu vừa thích ăn chua vừa thích ăn cay.",
    "answer": "贵州人既爱吃酸的，又爱吃辣的。",
    "answerPy": "Guìzhōu rén jì ài chī suān de, yòu ài chī là de.",
    "note": "Ôn 既……又…… (Bài 4 · điểm 3).",
    "pair": "既……又……"
   },
   {
    "promptLang": "vi",
    "prompt": "Annie nghe nói canh chua Quý Châu rất nổi tiếng.",
    "answer": "安妮听说贵州酸汤很有名。",
    "answerPy": "Ānní tīngshuō Guìzhōu suān tāng hěn yǒumíng.",
    "note": "听说 + câu.",
    "pair": "听说……"
   }
  ]
 },
 {
  "n": 32,
  "zh": "酸汤米线",
  "py": "Suāntāng Mǐxiàn",
  "pos": "Danh từ riêng",
  "vn": "bún nước canh chua (Quý Châu)",
  "hv": "toan thang mễ tuyến",
  "em": "🍜",
  "lesson": 3,
  "explain": [
   "米线 là sợi bún gạo (gần giống bún của Việt Nam); 酸汤米线 = bún ăn với nước dùng chua cay kiểu Quý Châu."
  ],
  "usage": "点了酸汤米线 · 一碗酸汤米线.",
  "collo": [
   "一碗酸汤米线",
   "点酸汤米线",
   "米线",
   "酸汤"
  ],
  "colloFull": [
   {
    "zh": "一碗酸汤米线",
    "py": "Yì wǎn Suāntāng Mǐxiàn",
    "vn": "một bát bún canh chua"
   },
   {
    "zh": "点酸汤米线",
    "py": "Diǎn Suāntāng Mǐxiàn",
    "vn": "gọi bún canh chua"
   },
   {
    "zh": "米线",
    "py": "Mǐ xiàn",
    "vn": "bún gạo"
   },
   {
    "zh": "酸汤",
    "py": "Suān tāng",
    "vn": "canh chua"
   }
  ],
  "patterns": [
   {
    "s": "酸汤 (canh chua) + 米线 (bún)",
    "m": "Tên món ghép từ nước dùng + sợi"
   }
  ],
  "ex_zh": "安妮听说贵州酸汤很有名，点了酸汤米线。",
  "ex_py": "Ānní tīngshuō Guìzhōu suān tāng hěn yǒumíng, diǎn le Suāntāng Mǐxiàn.",
  "ex_vn": "Annie nghe nói canh chua Quý Châu rất nổi tiếng, nên gọi bún canh chua.",
  "exList": [
   {
    "zh": "安妮听说贵州酸汤很有名，点了酸汤米线。",
    "py": "Ānní tīngshuō Guìzhōu suān tāng hěn yǒumíng, diǎn le Suāntāng Mǐxiàn.",
    "vn": "Annie nghe nói canh chua Quý Châu rất nổi tiếng, nên gọi bún canh chua."
   },
   {
    "zh": "酸汤米线又酸又辣，夏天吃特别舒服。",
    "py": "Suāntāng Mǐxiàn yòu suān yòu là, xiàtiān chī tèbié shūfu.",
    "vn": "Bún canh chua vừa chua vừa cay, ăn vào mùa hè đặc biệt dễ chịu."
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
    "c": "汤",
    "p": "tāng",
    "type": "左右结构 · Trái-phải",
    "st": 6,
    "ord": "氵 trái → 𠃓 phải",
    "rad": "氵 (thủy)",
    "mean": "canh",
    "tip": "Nước 氵 + 𠃓 → nước nóng → CANH, SÚP. Phân biệt 场 (chǎng, bộ 土, Bài 19), 扬 (yáng, Bài 15).",
    "cf": "场 (chǎng – sân)",
    "w": "汤 / 鸡蛋汤 / 喝汤"
   },
   {
    "c": "米",
    "p": "mǐ",
    "type": "独体字 · Chữ đơn (tượng hình)",
    "st": 6,
    "ord": "nét liền",
    "rad": "米 (mễ – gạo)",
    "mean": "gạo; mét",
    "tip": "Chữ tượng hình mô phỏng các HẠT GẠO rơi vãi → GẠO; do phiên âm gần giống \"mètre\" nên mượn dùng làm đơn vị MÉT.",
    "cf": "来 (lái – \"đến\", hình dáng gần giống\")",
    "w": "米 (mét) / 大米"
   },
   {
    "c": "线",
    "p": "xiàn",
    "type": "左右结构 · Trái-phải",
    "st": 8,
    "ord": "纟 trái → 戋 phải",
    "rad": "纟 (mịch)",
    "mean": "dây, tuyến",
    "tip": "Tơ 纟 + 戋 → sợi DÂY, TUYẾN. 占线, 路线, 线路, 一线.",
    "cf": "钱 (qián – tiền, cũng có 戋)",
    "w": "占线 / 路线 / 线"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Bún canh chua vừa chua vừa cay, ăn mùa hè đặc biệt dễ chịu.",
    "answer": "酸汤米线又酸又辣，夏天吃特别舒服。",
    "answerPy": "Suāntāng Mǐxiàn yòu suān yòu là, xiàtiān chī tèbié shūfu.",
    "note": "Ôn 又……又…… (HSK 3).",
    "pair": "又……又……"
   },
   {
    "promptLang": "vi",
    "prompt": "Annie gọi bún canh chua, vì nghe nói canh chua Quý Châu rất nổi tiếng.",
    "answer": "安妮点了酸汤米线，是因为听说贵州酸汤很有名。",
    "answerPy": "Ānní diǎn le Suāntāng Mǐxiàn, shì yīnwèi tīngshuō Guìzhōu suān tāng hěn yǒumíng.",
    "note": "Ôn 是因为 (HSK 3).",
    "pair": "是因为……"
   }
  ]
 },
 {
  "n": 33,
  "zh": "随意",
  "py": "suíyì",
  "pos": "Tính từ",
  "vn": "tùy ý, thoải mái, không câu nệ",
  "hv": "tùy ý",
  "em": "😌",
  "lesson": 4,
  "explain": [
   "Làm theo ý mình, không theo quy tắc cố định; không câu nệ hình thức. Câu mời khách: 请随意 (cứ tự nhiên)."
  ],
  "usage": "坐得比较随意 · 请随意 · 随意点菜.",
  "collo": [
   "坐得随意",
   "请随意",
   "比较随意",
   "随意点"
  ],
  "colloFull": [
   {
    "zh": "坐得随意",
    "py": "Zuò de suíyì",
    "vn": "ngồi tùy ý"
   },
   {
    "zh": "请随意",
    "py": "Qǐng suíyì",
    "vn": "xin cứ tự nhiên"
   },
   {
    "zh": "比较随意",
    "py": "Bǐjiào suíyì",
    "vn": "khá thoải mái"
   },
   {
    "zh": "随意点",
    "py": "Suíyì diǎn",
    "vn": "cứ gọi tùy thích"
   }
  ],
  "patterns": [
   {
    "s": "V + 得 + (比较) + 随意",
    "m": "Bổ ngữ trạng thái"
   },
   {
    "s": "随意 ↔ 正式",
    "m": "Thoải mái ↔ trang trọng"
   }
  ],
  "ex_zh": "今天吃饭的时候，大家坐得比较随意。",
  "ex_py": "Jīntiān chīfàn de shíhou, dàjiā zuò de bǐjiào suíyì.",
  "ex_vn": "Hôm nay lúc ăn cơm, mọi người ngồi khá tùy ý.",
  "exList": [
   {
    "zh": "今天吃饭的时候，大家坐得比较随意。",
    "py": "Jīntiān chīfàn de shíhou, dàjiā zuò de bǐjiào suíyì.",
    "vn": "Hôm nay lúc ăn cơm, mọi người ngồi khá tùy ý."
   },
   {
    "zh": "朋友聚餐比较随意，想坐哪儿就坐哪儿。",
    "py": "Péngyou jùcān bǐjiào suíyì, xiǎng zuò nǎr jiù zuò nǎr.",
    "vn": "Bạn bè tụ tập ăn uống khá thoải mái, muốn ngồi đâu thì ngồi đó."
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
    "prompt": "Bạn bè tụ tập ăn uống khá thoải mái, muốn ngồi đâu thì ngồi đó.",
    "answer": "朋友聚餐比较随意，想坐哪儿就坐哪儿。",
    "answerPy": "Péngyou jùcān bǐjiào suíyì, xiǎng zuò nǎr jiù zuò nǎr.",
    "note": "Đại từ nghi vấn dùng phiếm chỉ 哪儿……就哪儿 (HSK 3/4).",
    "pair": "想……哪儿就……哪儿"
   },
   {
    "promptLang": "vi",
    "prompt": "Hôm nay chỉ là bữa ăn bình thường, mọi người cứ tự nhiên là được.",
    "answer": "今天只是普通聚餐，大家随意就是了。",
    "answerPy": "Jīntiān zhǐshì pǔtōng jùcān, dàjiā suíyì jiù shì le.",
    "note": "Ôn ×就是了 (Bài 2 · điểm 1).",
    "pair": "……就是了"
   }
  ]
 },
 {
  "n": 34,
  "zh": "正式",
  "py": "zhèngshì",
  "pos": "Tính từ",
  "vn": "trang trọng, chính thức",
  "hv": "chính thức",
  "em": "🎩",
  "lesson": 4,
  "explain": [
   "Theo đúng quy cách, nghi thức; nghiêm túc (dịp lễ, công việc). Trái nghĩa: 随意, 非正式."
  ],
  "usage": "正式聚餐 · 正式场合 · 正式开始 · 穿得很正式.",
  "collo": [
   "正式聚餐",
   "正式场合",
   "正式开始",
   "穿得很正式"
  ],
  "colloFull": [
   {
    "zh": "正式聚餐",
    "py": "Zhèngshì jùcān",
    "vn": "bữa tiệc trang trọng"
   },
   {
    "zh": "正式场合",
    "py": "Zhèngshì chǎnghé",
    "vn": "dịp trang trọng"
   },
   {
    "zh": "正式开始",
    "py": "Zhèngshì kāishǐ",
    "vn": "chính thức bắt đầu"
   },
   {
    "zh": "穿得很正式",
    "py": "Chuān de hěn zhèngshì",
    "vn": "ăn mặc trang trọng"
   }
  ],
  "patterns": [
   {
    "s": "正式 + N",
    "m": "Làm định ngữ"
   },
   {
    "s": "正式 + V (开始 / 上课)",
    "m": "Làm trạng ngữ: chính thức …"
   }
  ],
  "ex_zh": "在中国，正式聚餐和普通聚餐不同。",
  "ex_py": "Zài Zhōngguó, zhèngshì jùcān hé pǔtōng jùcān bùtóng.",
  "ex_vn": "Ở Trung Quốc, bữa tiệc trang trọng và bữa ăn bình thường khác nhau.",
  "exList": [
   {
    "zh": "在中国，正式聚餐和普通聚餐不同。",
    "py": "Zài Zhōngguó, zhèngshì jùcān hé pǔtōng jùcān bùtóng.",
    "vn": "Ở Trung Quốc, bữa tiệc trang trọng và bữa ăn bình thường khác nhau."
   },
   {
    "zh": "明天的会很正式，你最好穿得正式一点儿。",
    "py": "Míngtiān de huì hěn zhèngshì, nǐ zuìhǎo chuān de zhèngshì yìdiǎnr.",
    "vn": "Cuộc họp ngày mai rất trang trọng, bạn tốt nhất nên mặc chỉnh tề một chút."
   }
  ],
  "hanzi": [
   {
    "c": "正",
    "p": "zhèng",
    "type": "指事字 · Chữ chỉ sự",
    "st": 5,
    "ord": "Nét ngang trên → nét sổ giữa → nét ngang ngắn → nét sổ trái → nét ngang dài",
    "rad": "止 (chỉ – dừng, bàn chân)",
    "mean": "ngay thẳng; đúng; đang",
    "tip": "Nét ngang trên là cái đích, phần dưới là bàn chân 止 đi thẳng tới đích → ngay thẳng, đúng. 真正 = thật và đúng → thực sự. Ôn: 正在 (HSK1 Bài 11), 正 (HSK2 Bài 12).",
    "cf": "足 zú (足球 – HSK2 Bài 7) — phần dưới cũng là bàn chân, trên là 口",
    "w": "真正 / 正在"
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
    "prompt": "Cuộc họp ngày mai rất trang trọng, bạn nên mặc chỉnh tề một chút.",
    "answer": "明天的会很正式，你最好穿得正式一点儿。",
    "answerPy": "Míngtiān de huì hěn zhèngshì, nǐ zuìhǎo chuān de zhèngshì yìdiǎnr.",
    "note": "Bổ ngữ trạng thái V得 + Adj (HSK 3).",
    "pair": "穿得正式"
   },
   {
    "promptLang": "vi",
    "prompt": "Học thử hai tuần xong, thứ Hai tuần sau chính thức lên lớp.",
    "answer": "试听两周以后，下周一正式上课。",
    "answerPy": "Shìtīng liǎng zhōu yǐhòu, xià zhōu yī zhèngshì shàngkè.",
    "note": "Ôn từ của Bài 1 (试听, 上课).",
    "pair": "正式 + V"
   }
  ]
 },
 {
  "n": 35,
  "zh": "普通",
  "py": "pǔtōng",
  "pos": "Tính từ",
  "vn": "bình thường, thông thường",
  "hv": "phổ thông",
  "em": "⚪",
  "lesson": 4,
  "explain": [
   "Thường thấy, không đặc biệt. Bẫy Hán Việt: “phổ thông” trong tiếng Việt hay chỉ trường phổ thông; còn 普通 nghĩa chính là “bình thường”. (普通话 = tiếng phổ thông.)"
  ],
  "usage": "普通聚餐 · 普通人 · 很普通 · 普通话.",
  "collo": [
   "普通聚餐",
   "普通人",
   "很普通",
   "普通话"
  ],
  "colloFull": [
   {
    "zh": "普通聚餐",
    "py": "Pǔtōng jùcān",
    "vn": "bữa ăn bình thường"
   },
   {
    "zh": "普通人",
    "py": "Pǔtōng rén",
    "vn": "người bình thường"
   },
   {
    "zh": "很普通",
    "py": "Hěn pǔtōng",
    "vn": "rất bình thường"
   },
   {
    "zh": "普通话",
    "py": "Pǔtōnghuà",
    "vn": "tiếng phổ thông"
   }
  ],
  "patterns": [
   {
    "s": "普通 + 的 + N / 普通 + N",
    "m": "Làm định ngữ"
   },
   {
    "s": "普通 ↔ 特别 / 正式",
    "m": "Bình thường ↔ đặc biệt / trang trọng"
   }
  ],
  "ex_zh": "在中国，正式聚餐和普通聚餐不同。",
  "ex_py": "Zài Zhōngguó, zhèngshì jùcān hé pǔtōng jùcān bùtóng.",
  "ex_vn": "Ở Trung Quốc, bữa tiệc trang trọng và bữa ăn bình thường khác nhau.",
  "exList": [
   {
    "zh": "在中国，正式聚餐和普通聚餐不同。",
    "py": "Zài Zhōngguó, zhèngshì jùcān hé pǔtōng jùcān bùtóng.",
    "vn": "Ở Trung Quốc, bữa tiệc trang trọng và bữa ăn bình thường khác nhau."
   },
   {
    "zh": "他只是一个普通的学生，但学习非常努力。",
    "py": "Tā zhǐshì yí gè pǔtōng de xuésheng, dàn xuéxí fēicháng nǔlì.",
    "vn": "Anh ấy chỉ là một sinh viên bình thường, nhưng học hành vô cùng chăm chỉ."
   }
  ],
  "hanzi": [
   {
    "c": "普",
    "p": "pǔ",
    "type": "上下结构 · Trên-dưới",
    "st": 12,
    "ord": "並 trên → 日 dưới",
    "rad": "日 (nhật)",
    "mean": "rộng khắp",
    "tip": "Mặt trời 日 chiếu KHẮP nơi → RỘNG KHẮP, kết hợp 遍(khắp) thành 普遍 = PHỔ BIẾN.",
    "cf": "谱 (pǔ – \"phổ, bản nhạc\", bộ 讠)",
    "w": "普遍 / 普通 / 普通话"
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
    "prompt": "Anh ấy chỉ là một sinh viên bình thường, nhưng học rất chăm.",
    "answer": "他只是一个普通的学生，不过学习非常努力。",
    "answerPy": "Tā zhǐshì yí gè pǔtōng de xuésheng, búguò xuéxí fēicháng nǔlì.",
    "note": "Ôn ……不过…… (Bài 2 · điểm 2).",
    "pair": "……，不过……"
   },
   {
    "promptLang": "vi",
    "prompt": "Bữa ăn bình thường thì có thể ngồi tùy ý.",
    "answer": "普通聚餐的时候可以坐得随意一点儿。",
    "answerPy": "Pǔtōng jùcān de shíhou kěyǐ zuò de suíyì yìdiǎnr.",
    "note": "Kết hợp 随意 (từ mới 27).",
    "pair": "坐得随意"
   }
  ]
 },
 {
  "n": 36,
  "zh": "重视",
  "py": "zhòngshì",
  "pos": "Động từ",
  "vn": "coi trọng, chú trọng",
  "hv": "trọng thị",
  "em": "⭐",
  "lesson": 4,
  "explain": [
   "Cho rằng việc gì / ai đó quan trọng nên rất chú ý. Bẫy Hán Việt: “trọng thị” tiếng Việt ít dùng — dịch là “coi trọng”."
  ],
  "usage": "重视 + N · 比较重视 · 越来越重视 · 受到重视.",
  "collo": [
   "重视健康",
   "重视教育",
   "比较重视",
   "受到重视"
  ],
  "colloFull": [
   {
    "zh": "重视健康",
    "py": "Zhòngshì jiànkāng",
    "vn": "coi trọng sức khỏe"
   },
   {
    "zh": "重视教育",
    "py": "Zhòngshì jiàoyù",
    "vn": "coi trọng giáo dục"
   },
   {
    "zh": "比较重视",
    "py": "Bǐjiào zhòngshì",
    "vn": "khá coi trọng"
   },
   {
    "zh": "受到重视",
    "py": "Shòudào zhòngshì",
    "vn": "được coi trọng"
   }
  ],
  "patterns": [
   {
    "s": "Sub + 重视 + N",
    "m": "Coi trọng cái gì"
   },
   {
    "s": "越来越 + 重视",
    "m": "Ngày càng coi trọng"
   }
  ],
  "ex_zh": "正式聚餐时人们比较重视座位的安排。",
  "ex_py": "Zhèngshì jùcān shí rén men bǐjiào zhòngshì zuòwèi de ānpái.",
  "ex_vn": "Khi ăn tiệc trang trọng, người ta khá coi trọng việc sắp xếp chỗ ngồi.",
  "exList": [
   {
    "zh": "正式聚餐时人们比较重视座位的安排。",
    "py": "Zhèngshì jùcān shí rén men bǐjiào zhòngshì zuòwèi de ānpái.",
    "vn": "Khi ăn tiệc trang trọng, người ta khá coi trọng việc sắp xếp chỗ ngồi."
   },
   {
    "zh": "是啊，因为人们越来越重视身体健康了。",
    "py": "Shì a, yīnwèi rén men yuèláiyuè zhòngshì shēntǐ jiànkāng le.",
    "vn": "Đúng vậy, vì mọi người ngày càng coi trọng sức khỏe."
   }
  ],
  "hanzi": [
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
   },
   {
    "c": "视",
    "p": "shì",
    "type": "左右结构 · Trái-phải",
    "st": 8,
    "ord": "礻 trái → 见 phải",
    "rad": "见 (kiến)",
    "mean": "nhìn",
    "tip": "礻 + 见(nhìn) → NHÌN, THỊ. 重视 = nhìn nặng = coi trọng; 电视 = TV.",
    "cf": "现 (xiàn – hiện)",
    "w": "重视 / 电视 / 视频"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Vì mọi người ngày càng coi trọng sức khỏe.",
    "answer": "因为人们越来越重视身体健康了。",
    "answerPy": "Yīnwèi rén men yuèláiyuè zhòngshì shēntǐ jiànkāng le.",
    "note": "Câu chọn từ của sách (综合练习 câu 9).",
    "pair": "越来越重视"
   },
   {
    "promptLang": "vi",
    "prompt": "Cùng với sự phát triển kinh tế, người ta ngày càng coi trọng giáo dục.",
    "answer": "随着经济的发展，人们越来越重视教育了。",
    "answerPy": "Suízhe jīngjì de fāzhǎn, rén men yuèláiyuè zhòngshì jiàoyù le.",
    "note": "Ôn 随着 (Bài 1 · điểm 3).",
    "pair": "随着……越来越重视……"
   }
  ]
 },
 {
  "n": 37,
  "zh": "座位",
  "py": "zuòwèi",
  "pos": "Danh từ",
  "vn": "chỗ ngồi, ghế ngồi",
  "hv": "tọa vị",
  "em": "💺",
  "lesson": 4,
  "explain": [
   "Chỗ để ngồi (trên bàn tiệc, trên xe, trong rạp…)."
  ],
  "usage": "座位的安排 · 这个座位 · 找座位 · 让座位.",
  "collo": [
   "座位的安排",
   "这个座位",
   "找座位",
   "面对门口的座位"
  ],
  "colloFull": [
   {
    "zh": "座位的安排",
    "py": "Zuòwèi de ānpái",
    "vn": "sắp xếp chỗ ngồi"
   },
   {
    "zh": "这个座位",
    "py": "Zhège zuòwèi",
    "vn": "chỗ ngồi này"
   },
   {
    "zh": "找座位",
    "py": "Zhǎo zuòwèi",
    "vn": "tìm chỗ ngồi"
   },
   {
    "zh": "面对门口的座位",
    "py": "Miànduì ménkǒu de zuòwèi",
    "vn": "chỗ ngồi đối diện cửa"
   }
  ],
  "patterns": [
   {
    "s": "这个座位 + 有人吗？",
    "m": "Hỏi chỗ trống"
   },
   {
    "s": "坐在 + …… + 的座位",
    "m": "Ngồi ở chỗ …"
   }
  ],
  "ex_zh": "正式聚餐时人们比较重视座位的安排。",
  "ex_py": "Zhèngshì jùcān shí rén men bǐjiào zhòngshì zuòwèi de ānpái.",
  "ex_vn": "Khi ăn tiệc trang trọng, người ta khá coi trọng việc sắp xếp chỗ ngồi.",
  "exList": [
   {
    "zh": "正式聚餐时人们比较重视座位的安排。",
    "py": "Zhèngshì jùcān shí rén men bǐjiào zhòngshì zuòwèi de ānpái.",
    "vn": "Khi ăn tiệc trang trọng, người ta khá coi trọng việc sắp xếp chỗ ngồi."
   },
   {
    "zh": "请问，这个座位有人吗？——没有人，您坐吧。",
    "py": "Qǐngwèn, zhège zuòwèi yǒurén ma? — Méiyǒu rén, nín zuò ba.",
    "vn": "Xin hỏi, chỗ này có ai ngồi chưa? — Không có ai, mời bác ngồi."
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
    "prompt": "Xin hỏi, chỗ này có ai ngồi chưa?",
    "answer": "请问，这个座位有人吗？",
    "answerPy": "Qǐngwèn, zhège zuòwèi yǒurén ma?",
    "note": "Câu chọn từ của sách (综合练习 câu 6).",
    "pair": "……有人吗"
   },
   {
    "promptLang": "vi",
    "prompt": "Trên tàu có người già, cậu ấy đã nhường chỗ của mình.",
    "answer": "车上有老人，他就把自己的座位让给了老人。",
    "answerPy": "Chē shàng yǒu lǎorén, tā jiù bǎ zìjǐ de zuòwèi ràng gěi le lǎorén.",
    "note": "Câu chữ 把 + 给 (HSK 3).",
    "pair": "把……让给……"
   }
  ]
 },
 {
  "n": 38,
  "zh": "安排",
  "py": "ānpái",
  "pos": "Động từ / Danh từ",
  "vn": "sắp xếp, bố trí; sự sắp xếp",
  "hv": "an bài",
  "em": "🗂️",
  "lesson": 4,
  "explain": [
   "Động từ: sắp xếp người, việc, thời gian cho hợp lý.",
   "Danh từ: sự sắp xếp, kế hoạch (座位的安排)."
  ],
  "usage": "安排座位 · 安排时间 · 座位的安排 · 有什么安排.",
  "collo": [
   "安排座位",
   "安排时间",
   "座位的安排",
   "有什么安排"
  ],
  "colloFull": [
   {
    "zh": "安排座位",
    "py": "Ānpái zuòwèi",
    "vn": "sắp xếp chỗ ngồi"
   },
   {
    "zh": "安排时间",
    "py": "Ānpái shíjiān",
    "vn": "sắp xếp thời gian"
   },
   {
    "zh": "座位的安排",
    "py": "Zuòwèi de ānpái",
    "vn": "sự sắp xếp chỗ ngồi"
   },
   {
    "zh": "有什么安排",
    "py": "Yǒu shénme ānpái",
    "vn": "có kế hoạch gì"
   }
  ],
  "patterns": [
   {
    "s": "按照 + N + 来安排",
    "m": "Sắp xếp theo …"
   },
   {
    "s": "Sub + 有什么安排？",
    "m": "安排 làm danh từ"
   }
  ],
  "ex_zh": "比如可以按照年龄大小来安排。",
  "ex_py": "Bǐrú kěyǐ ànzhào niánlíng dàxiǎo lái ānpái.",
  "ex_vn": "Ví dụ có thể sắp xếp theo tuổi lớn nhỏ.",
  "exList": [
   {
    "zh": "比如可以按照年龄大小来安排。",
    "py": "Bǐrú kěyǐ ànzhào niánlíng dàxiǎo lái ānpái.",
    "vn": "Ví dụ có thể sắp xếp theo tuổi lớn nhỏ."
   },
   {
    "zh": "这个周末你有什么安排？",
    "py": "Zhège zhōumò nǐ yǒu shénme ānpái?",
    "vn": "Cuối tuần này bạn có kế hoạch gì?"
   }
  ],
  "hanzi": [
   {
    "c": "安",
    "p": "ān",
    "type": "上下结构 · Trên-dưới",
    "st": 6,
    "ord": "宀 trên → 女 dưới",
    "rad": "宀 (miên)",
    "mean": "yên",
    "tip": "Người phụ nữ 女 ở trong nhà 宀 → YÊN ỔN, AN. 安全, 安静 (Bài 2), 安排 (Bài 6).",
    "cf": "案 (àn – án)",
    "w": "安全 / 安静 / 安排 / 平安"
   },
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
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Khi ăn tiệc trang trọng có thể sắp xếp chỗ ngồi theo tuổi.",
    "answer": "正式聚餐时，可以按照年龄大小来安排座位。",
    "answerPy": "Zhèngshì jùcān shí, kěyǐ ànzhào niánlíng dàxiǎo lái ānpái zuòwèi.",
    "note": "Câu trong bài khoá 4; 按照 + N + 来 + V.",
    "pair": "按照……来安排"
   },
   {
    "promptLang": "vi",
    "prompt": "Công việc tuần này tôi đã sắp xếp xong, vả lại cũng có thời gian, nên đi được.",
    "answer": "这周的工作我已经安排好了，再说也有时间，去得了。",
    "answerPy": "Zhè zhōu de gōngzuò wǒ yǐjīng ānpái hǎo le, zài shuō yě yǒu shíjiān, qù de liǎo.",
    "note": "Ôn 再说 (Bài 4 · điểm 2) + V得了 (Bài 4 · điểm 1).",
    "pair": "再说……"
   }
  ]
 },
 {
  "n": 39,
  "zh": "按照",
  "py": "ànzhào",
  "pos": "Giới từ",
  "vn": "theo, dựa theo",
  "hv": "án chiếu",
  "em": "📏",
  "lesson": 4,
  "explain": [
   "Làm theo một tiêu chuẩn, quy định, thứ tự nào đó. Phía sau thường là danh từ hai âm tiết trở lên (按照规定, 按照顺序)."
  ],
  "usage": "按照 + N + (来) + V · 按照年龄 · 按照顺序 · 按照要求.",
  "collo": [
   "按照年龄",
   "按照顺序",
   "按照要求",
   "按照计划"
  ],
  "colloFull": [
   {
    "zh": "按照年龄",
    "py": "Ànzhào niánlíng",
    "vn": "theo tuổi"
   },
   {
    "zh": "按照顺序",
    "py": "Ànzhào shùnxù",
    "vn": "theo thứ tự"
   },
   {
    "zh": "按照要求",
    "py": "Ànzhào yāoqiú",
    "vn": "theo yêu cầu"
   },
   {
    "zh": "按照计划",
    "py": "Ànzhào jìhuà",
    "vn": "theo kế hoạch"
   }
  ],
  "patterns": [
   {
    "s": "按照 + N + (来) + V",
    "m": "Giới từ + tân ngữ đứng trước động từ"
   },
   {
    "s": "按照 ≈ 根据",
    "m": "根据 nhấn mạnh căn cứ; 按照 nhấn mạnh làm đúng theo"
   }
  ],
  "ex_zh": "比如可以按照年龄大小来安排。",
  "ex_py": "Bǐrú kěyǐ ànzhào niánlíng dàxiǎo lái ānpái.",
  "ex_vn": "Ví dụ có thể sắp xếp theo tuổi lớn nhỏ.",
  "exList": [
   {
    "zh": "比如可以按照年龄大小来安排。",
    "py": "Bǐrú kěyǐ ànzhào niánlíng dàxiǎo lái ānpái.",
    "vn": "Ví dụ có thể sắp xếp theo tuổi lớn nhỏ."
   },
   {
    "zh": "请大家按照老师的要求写作业。",
    "py": "Qǐng dàjiā ànzhào lǎoshī de yāoqiú xiě zuòyè.",
    "vn": "Mời các bạn làm bài tập theo yêu cầu của thầy cô."
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
    "c": "照",
    "p": "zhào",
    "type": "上下结构 · Trên-dưới",
    "st": 13,
    "ord": "昭 trên → 灬 dưới",
    "rad": "灬 (hỏa)",
    "mean": "chiếu",
    "tip": "昭(sáng) + 灬(lửa) → ánh sáng CHIẾU. 照片 = ảnh; 照顾 = chăm sóc (Bài 3); 护照 = hộ chiếu; 按照 = theo (Bài 4).",
    "cf": "昭 (zhāo – sáng)",
    "w": "照 / 照片 / 照顾 / 护照 / 按照"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Mời các bạn làm bài tập theo yêu cầu của thầy cô.",
    "answer": "请大家按照老师的要求写作业。",
    "answerPy": "Qǐng dàjiā ànzhào lǎoshī de yāoqiú xiě zuòyè.",
    "note": "按照 + 要求.",
    "pair": "按照……的要求"
   },
   {
    "promptLang": "vi",
    "prompt": "Theo kế hoạch, chúng tôi sẽ xuất phát lúc 8 giờ, bất kỳ ai cũng không được đến muộn.",
    "answer": "按照计划，我们八点出发，任何人都不能迟到。",
    "answerPy": "Ànzhào jìhuà, wǒmen bā diǎn chūfā, rènhé rén dōu bù néng chídào.",
    "note": "Ôn 任何 (Bài 1 · điểm 1).",
    "pair": "任何……都……"
   }
  ]
 },
 {
  "n": 40,
  "zh": "年龄",
  "py": "niánlíng",
  "pos": "Danh từ",
  "vn": "tuổi tác, độ tuổi",
  "hv": "niên linh",
  "em": "🎂",
  "lesson": 4,
  "explain": [
   "Số tuổi của người (trang trọng hơn 岁数). Hỏi tuổi người lớn lịch sự: 您多大年纪？; viết trong hồ sơ: 年龄."
  ],
  "usage": "年龄大小 · 年龄比较大 · 不同年龄的人.",
  "collo": [
   "年龄大小",
   "年龄比较大",
   "不同年龄",
   "年龄的增长"
  ],
  "colloFull": [
   {
    "zh": "年龄大小",
    "py": "Niánlíng dàxiǎo",
    "vn": "tuổi lớn nhỏ"
   },
   {
    "zh": "年龄比较大",
    "py": "Niánlíng bǐjiào dà",
    "vn": "tuổi khá cao"
   },
   {
    "zh": "不同年龄",
    "py": "Bùtóng niánlíng",
    "vn": "các lứa tuổi khác nhau"
   },
   {
    "zh": "年龄的增长",
    "py": "Niánlíng de zēng zhǎng",
    "vn": "tuổi tác tăng lên"
   }
  ],
  "patterns": [
   {
    "s": "年龄 + 大 / 小",
    "m": "✗ 年龄很多 → ✓ 年龄很大"
   },
   {
    "s": "按照 + 年龄 + 来 + V",
    "m": "Theo tuổi"
   }
  ],
  "ex_zh": "年龄比较大的客人往往会坐在中间或者面对门口的座位。",
  "ex_py": "Niánlíng bǐjiào dà de kèrén wǎngwǎng huì zuò zài zhōngjiàn huòzhě miànduì ménkǒu de zuòwèi.",
  "ex_vn": "Khách lớn tuổi thường ngồi ở giữa hoặc chỗ đối diện cửa ra vào.",
  "exList": [
   {
    "zh": "年龄比较大的客人往往会坐在中间或者面对门口的座位。",
    "py": "Niánlíng bǐjiào dà de kèrén wǎngwǎng huì zuò zài zhōngjiàn huòzhě miànduì ménkǒu de zuòwèi.",
    "vn": "Khách lớn tuổi thường ngồi ở giữa hoặc chỗ đối diện cửa ra vào."
   },
   {
    "zh": "随着年龄的增长，他越来越懂事了。",
    "py": "Suízhe niánlíng de zēng zhǎng, tā yuèláiyuè dǒng shì le.",
    "vn": "Cùng với tuổi tác tăng lên, cậu ấy ngày càng hiểu chuyện."
   }
  ],
  "hanzi": [
   {
    "c": "年",
    "p": "nián",
    "type": "独体字 · Chữ đơn",
    "st": 6,
    "ord": "丿(phẩy) → 一 → 一 → 丨 → 一 (nét sổ xuyên giữa các nét ngang)",
    "rad": "干 (can – can dự)",
    "mean": "năm",
    "tip": "Hình ảnh cây lúa trĩu hạt được gánh về sau một mùa vụ, một chu kỳ canh tác → tượng trưng cho một NĂM.",
    "cf": "午 (wǔ – \"buổi trưa, giờ ngọ\", dễ nhầm vì nét ngang gần giống\")",
    "w": "新年 / 明年 / 今年"
   },
   {
    "c": "龄",
    "p": "líng",
    "type": "左右结构 · Trái-phải (giản thể)",
    "st": 13,
    "ord": "齿 (xỉ, biến thể) trái → 令 (lệnh) phải",
    "rad": "齿 (xỉ – răng)",
    "mean": "tuổi tác",
    "tip": "Bộ răng 齿 (xưa xem răng để đoán tuổi động vật) + 令(biểu âm) → TUỔI TÁC, kết hợp 年(năm) thành 年龄 = TUỔI.",
    "cf": "龄 dễ nhầm với 铃 (líng – \"cái chuông\")",
    "w": "年龄 / 高龄 / 年纪"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Cùng với tuổi tác tăng lên, cậu ấy ngày càng hiểu chuyện.",
    "answer": "随着年龄的增长，他越来越懂事了。",
    "answerPy": "Suízhe niánlíng de zēng zhǎng, tā yuèláiyuè dǒng shì le.",
    "note": "Ôn 随着 (Bài 1 · điểm 3).",
    "pair": "随着……的增长"
   },
   {
    "promptLang": "vi",
    "prompt": "Khách lớn tuổi thường ngồi ở giữa.",
    "answer": "年龄比较大的客人往往坐在中间。",
    "answerPy": "Niánlíng bǐjiào dà de kèrén wǎngwǎng zuò zài zhōngjiān.",
    "note": "Câu trong bài khoá 4.",
    "pair": "年龄比较大的……"
   }
  ]
 },
 {
  "n": 41,
  "zh": "面对",
  "py": "miànduì",
  "pos": "Động từ",
  "vn": "đối diện, quay mặt về phía; đối mặt",
  "hv": "diện đối",
  "em": "🚪",
  "lesson": 4,
  "explain": [
   "Mặt hướng về phía nào đó (面对门口).",
   "Nghĩa bóng: đối mặt với khó khăn, vấn đề. Mẹo: 面对 Hán Việt “diện đối” → tiếng Việt đảo lại thành “đối diện”."
  ],
  "usage": "面对门口 · 面对困难 · 面对问题.",
  "collo": [
   "面对门口",
   "面对困难",
   "面对问题",
   "面对面"
  ],
  "colloFull": [
   {
    "zh": "面对门口",
    "py": "Miànduì ménkǒu",
    "vn": "đối diện cửa ra vào"
   },
   {
    "zh": "面对困难",
    "py": "Miànduì kùnnán",
    "vn": "đối mặt khó khăn"
   },
   {
    "zh": "面对问题",
    "py": "Miànduì wèntí",
    "vn": "đối mặt vấn đề"
   },
   {
    "zh": "面对面",
    "py": "Miàn duìmiàn",
    "vn": "mặt đối mặt"
   }
  ],
  "patterns": [
   {
    "s": "面对 + nơi chốn",
    "m": "Quay mặt về phía …"
   },
   {
    "s": "面对 + 困难 / 问题",
    "m": "Đối mặt (nghĩa bóng)"
   }
  ],
  "ex_zh": "年龄比较大的客人往往会坐在中间或者面对门口的座位。",
  "ex_py": "Niánlíng bǐjiào dà de kèrén wǎngwǎng huì zuò zài zhōngjiàn huòzhě miànduì ménkǒu de zuòwèi.",
  "ex_vn": "Khách lớn tuổi thường ngồi ở giữa hoặc chỗ đối diện cửa ra vào.",
  "exList": [
   {
    "zh": "年龄比较大的客人往往会坐在中间或者面对门口的座位。",
    "py": "Niánlíng bǐjiào dà de kèrén wǎngwǎng huì zuò zài zhōngjiàn huòzhě miànduì ménkǒu de zuòwèi.",
    "vn": "Khách lớn tuổi thường ngồi ở giữa hoặc chỗ đối diện cửa ra vào."
   },
   {
    "zh": "面对困难，我们不能害怕。",
    "py": "Miànduì kùnnán, wǒmen bù néng hàipà.",
    "vn": "Đối mặt với khó khăn, chúng ta không được sợ hãi."
   }
  ],
  "hanzi": [
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
   },
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
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Theo thói quen của người Trung Quốc, chủ nhà thường mời khách lớn tuổi ngồi chỗ đối diện cửa.",
    "answer": "按照中国人的习惯，主人一般会请年龄大的客人坐在面对门口的座位。",
    "answerPy": "Ànzhào zhōngguórén de xíguàn, zhǔrén yìbān huì qǐng niánlíng dà de kèrén zuò zài miànduì ménkǒu de zuòwèi.",
    "note": "Kết hợp 按照, 主人 (từ mới).",
    "pair": "面对门口的座位"
   },
   {
    "promptLang": "vi",
    "prompt": "Đối mặt với khó khăn, anh ấy không những không sợ mà còn rất bình tĩnh.",
    "answer": "面对困难，他不仅不害怕，而且很冷静。",
    "answerPy": "Miànduì kùnnán, tā bùjǐn bú hàipà, érqiě hěn lěngjìng.",
    "note": "Ôn 不仅……而且…… (Bài 3 · điểm 2).",
    "pair": "不仅……而且……"
   }
  ]
 },
 {
  "n": 42,
  "zh": "主人",
  "py": "zhǔrén",
  "pos": "Danh từ",
  "vn": "chủ nhà (người mời khách)",
  "hv": "chủ nhân",
  "em": "🏠",
  "lesson": 4,
  "explain": [
   "Người mời / tiếp khách, đối lập với 客人 (khách). Bẫy Hán Việt: không phải “chủ nhân” (ông chủ của người hầu) — trong bài này là CHỦ NHÀ."
  ],
  "usage": "主人和客人 · 主人请客人先坐.",
  "collo": [
   "主人和客人",
   "请主人",
   "热情的主人",
   "做主人"
  ],
  "colloFull": [
   {
    "zh": "主人和客人",
    "py": "Zhǔrén hé kèrén",
    "vn": "chủ và khách"
   },
   {
    "zh": "请主人",
    "py": "Qǐng zhǔrén",
    "vn": "mời chủ nhà"
   },
   {
    "zh": "热情的主人",
    "py": "Rèqíng de zhǔrén",
    "vn": "chủ nhà nhiệt tình"
   },
   {
    "zh": "做主人",
    "py": "Zuò zhǔrén",
    "vn": "làm chủ nhà"
   }
  ],
  "patterns": [
   {
    "s": "主人 ↔ 客人",
    "m": "Chủ nhà ↔ khách"
   },
   {
    "s": "主人 + 请 + 客人 + V",
    "m": "Câu kiêm ngữ 请 (HSK 3)"
   }
  ],
  "ex_zh": "大家坐下时，主人会请客人先坐。",
  "ex_py": "Dàjiā zuò xià shí, zhǔrén huì qǐngkè rén xiān zuò.",
  "ex_vn": "Khi mọi người ngồi xuống, chủ nhà sẽ mời khách ngồi trước.",
  "exList": [
   {
    "zh": "大家坐下时，主人会请客人先坐。",
    "py": "Dàjiā zuò xià shí, zhǔrén huì qǐngkè rén xiān zuò.",
    "vn": "Khi mọi người ngồi xuống, chủ nhà sẽ mời khách ngồi trước."
   },
   {
    "zh": "主人非常热情，做了一大桌菜。",
    "py": "Zhǔrén fēicháng rèqíng, zuò le yí dà zhuō cài.",
    "vn": "Chủ nhà rất nhiệt tình, làm cả một bàn đầy thức ăn."
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
    "c": "人",
    "p": "rén",
    "type": "独体字 · Chữ đơn",
    "st": 2,
    "ord": "丿→㇏",
    "rad": "人 (nhân – tự thành bộ, người)",
    "mean": "người",
    "tip": "Hình dáng một NGƯỜI đang đứng nghiêng, dang hai chân → NGƯỜI.",
    "cf": "入 (rù – \"vào\", hình gần giống nhưng nét đầu ngắn và giao nhau khác vị trí\")",
    "w": "家人 / 中国人 / 大人"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Khi mọi người ngồi xuống, chủ nhà sẽ mời khách ngồi trước.",
    "answer": "大家坐下时，主人会请客人先坐。",
    "answerPy": "Dàjiā zuò xià shí, zhǔrén huì qǐngkè rén xiān zuò.",
    "note": "Câu trong bài khoá 4; câu kiêm ngữ 请.",
    "pair": "请……先坐"
   },
   {
    "promptLang": "vi",
    "prompt": "Chủ nhà rất nhiệt tình, không những làm nhiều món mà còn rót trà cho chúng tôi.",
    "answer": "主人很热情，不仅做了很多菜，还给我们倒茶。",
    "answerPy": "Zhǔrén hěn rèqíng, bùjǐn zuò le hěn duō cài, hái gěi wǒmen dào chá.",
    "note": "Ôn 不仅……还…… (Bài 3 · điểm 2).",
    "pair": "不仅……还……"
   }
  ]
 },
 {
  "n": 43,
  "zh": "等",
  "py": "děng",
  "pos": "Giới từ",
  "vn": "đợi đến khi, chờ đến lúc",
  "hv": "đẳng",
  "em": "⏳",
  "lesson": 4,
  "explain": [
   "Trong bài này 等 là giới từ = 等到 (đợi đến khi), dẫn ra thời gian hoặc điều kiện; vế sau thường có 再 / 就 / 才 / 已经. (Khác 等 động từ “chờ” và 等 trợ từ “vân vân”.)"
  ],
  "usage": "等 + sự việc + (以后 / 的时候)，再 / 就 + V.",
  "collo": [
   "等我忙完了",
   "等老人坐下后",
   "等……的时候",
   "等……以后"
  ],
  "colloFull": [
   {
    "zh": "等我忙完了",
    "py": "Děng wǒ máng wán le",
    "vn": "đợi tớ làm xong việc"
   },
   {
    "zh": "等老人坐下后",
    "py": "Děng lǎorén zuò xià hòu",
    "vn": "đợi người già ngồi xuống"
   },
   {
    "zh": "等……的时候",
    "py": "Děng…… de shíhou",
    "vn": "đợi đến lúc …"
   },
   {
    "zh": "等……以后",
    "py": "Děng…… yǐhòu",
    "vn": "đợi sau khi …"
   }
  ],
  "patterns": [
   {
    "s": "等 + việc A + (以后)，再 / 就 + việc B",
    "m": "Đợi A xong rồi mới / thì B"
   },
   {
    "s": "等 + A + 的时候，B + 已经……了",
    "m": "Đến lúc A thì B đã … rồi"
   }
  ],
  "ex_zh": "如果聚餐时有老人，年轻人要等老人坐下后再坐。",
  "ex_py": "Rúguǒ jùcān shí yǒu lǎorén, niánqīngrén yào děng lǎorén zuò xià hòu zài zuò.",
  "ex_vn": "Nếu bữa tiệc có người già, người trẻ phải đợi người già ngồi xuống rồi mới ngồi.",
  "exList": [
   {
    "zh": "如果聚餐时有老人，年轻人要等老人坐下后再坐。",
    "py": "Rúguǒ jùcān shí yǒu lǎorén, niánqīngrén yào děng lǎorén zuò xià hòu zài zuò.",
    "vn": "Nếu bữa tiệc có người già, người trẻ phải đợi người già ngồi xuống rồi mới ngồi."
   },
   {
    "zh": "等我写完作业，再跟你出去玩。",
    "py": "Děng wǒ xiě wán zuòyè, zài gēn nǐ chūqù wán.",
    "vn": "Đợi tớ làm xong bài tập rồi tớ đi chơi với cậu."
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
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Đừng vội, đợi tôi làm xong việc thì sẽ đi tìm bạn.",
    "answer": "别着急，等我忙完了就去找你。",
    "answerPy": "Bié zháojí, děng wǒ máng wán le jiù qù zhǎo nǐ.",
    "note": "Đáp án gợi ý của sách (Bài 5 · điểm 4).",
    "pair": "等……就……"
   },
   {
    "promptLang": "vi",
    "prompt": "Lúc chúng tôi đến ga thì tàu đã chạy mất rồi, không kịp nữa.",
    "answer": "等我们到火车站的时候，火车已经开走了，来不及了。",
    "answerPy": "Děng wǒmen dào huǒ chēzhàn de shíhou, huǒchē yǐjīng kāi zǒu le, láibùjí le.",
    "note": "Ví dụ của sách + ôn 来不及 (Bài 4 · điểm 4).",
    "pair": "等……的时候，已经……了"
   }
  ]
 },
 {
  "n": 44,
  "zh": "尊重",
  "py": "zūnzhòng",
  "pos": "Động từ",
  "vn": "tôn trọng, kính trọng",
  "hv": "tôn trọng",
  "em": "🙇",
  "lesson": 4,
  "explain": [
   "Coi trọng, đối xử lễ phép với người khác hoặc với ý kiến, văn hóa của họ."
  ],
  "usage": "尊重老人 · 尊重别人 · 尊重……的意见 / 文化.",
  "collo": [
   "尊重老人",
   "尊重别人",
   "尊重文化",
   "互相尊重"
  ],
  "colloFull": [
   {
    "zh": "尊重老人",
    "py": "Zūnzhòng lǎorén",
    "vn": "kính trọng người già"
   },
   {
    "zh": "尊重别人",
    "py": "Zūnzhòng biérén",
    "vn": "tôn trọng người khác"
   },
   {
    "zh": "尊重文化",
    "py": "Zūnzhòng wénhuà",
    "vn": "tôn trọng văn hóa"
   },
   {
    "zh": "互相尊重",
    "py": "Hùxiāng zūnzhòng",
    "vn": "tôn trọng lẫn nhau"
   }
  ],
  "patterns": [
   {
    "s": "尊重 + ai / N",
    "m": "Tôn trọng ai, cái gì"
   },
   {
    "s": "……是尊重……的表现",
    "m": "Là biểu hiện của sự tôn trọng (ôn 表现 – Bài 1)"
   }
  ],
  "ex_zh": "她认为这么做是照顾客人、尊重老人的表现。",
  "ex_py": "Tā rènwéi zhème zuò shì zhàogu kèrén, zūnzhòng lǎorén de biǎoxiàn.",
  "ex_vn": "Cô ấy cho rằng làm như vậy là biểu hiện của việc quan tâm khách và tôn trọng người già.",
  "exList": [
   {
    "zh": "她认为这么做是照顾客人、尊重老人的表现。",
    "py": "Tā rènwéi zhème zuò shì zhàogu kèrén, zūnzhòng lǎorén de biǎoxiàn.",
    "vn": "Cô ấy cho rằng làm như vậy là biểu hiện của việc quan tâm khách và tôn trọng người già."
   },
   {
    "zh": "我们要尊重每个国家的饮食文化。",
    "py": "Wǒmen yào zūnzhòng měi gè guójiā de yǐnshí wénhuà.",
    "vn": "Chúng ta phải tôn trọng văn hóa ẩm thực của mỗi quốc gia."
   }
  ],
  "hanzi": [
   {
    "c": "尊",
    "p": "zūn",
    "type": "上下结构 · Trên-dưới",
    "st": 12,
    "ord": "酋 trên → 寸 dưới",
    "rad": "寸 (thốn)",
    "mean": "tôn",
    "tip": "酋(bình rượu) + 寸(tay) → hai tay dâng rượu → TÔN kính. 尊重 = tôn trọng; 尊敬 = tôn kính.",
    "cf": "遵 (zūn – tuân theo)",
    "w": "尊重 / 尊敬"
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
    "prompt": "Làm như vậy là biểu hiện của sự quan tâm khách và tôn trọng người già.",
    "answer": "这么做是照顾客人、尊重老人的表现。",
    "answerPy": "Zhème zuò shì zhàogu kèrén, zūnzhòng lǎorén de biǎoxiàn.",
    "note": "Câu trong bài khoá 4; ôn 表现 (Bài 1).",
    "pair": "是……的表现"
   },
   {
    "promptLang": "vi",
    "prompt": "Văn hóa mỗi nước khác nhau, vì vậy chúng ta nên tôn trọng lẫn nhau.",
    "answer": "由于每个国家的文化不同，我们应该互相尊重。",
    "answerPy": "Yóuyú měi gè guójiā de wénhuà bùtóng, wǒmen yīnggāi hùxiāng zūnzhòng.",
    "note": "Ôn 由于 (Bài 2 · điểm 4).",
    "pair": "由于……"
   }
  ]
 }
];
var wuData = [
 {
  "img": "/images/hsk4v3/bai-5/wu-A.webp",
  "label": "辣子鸡 · 辣",
  "py": "Làzǐjī · là",
  "letter": "A"
 },
 {
  "img": "/images/hsk4v3/bai-5/wu-B.webp",
  "label": "红烧羊肉 · 咸",
  "py": "Hóngshāo Yángròu · xián",
  "letter": "B"
 },
 {
  "img": "/images/hsk4v3/bai-5/wu-C.webp",
  "label": "松鼠鳜鱼 · 酸、甜",
  "py": "Sōngshǔ Guìyú · suān, tián",
  "letter": "C"
 },
 {
  "img": "/images/hsk4v3/bai-5/wu-D.webp",
  "label": "酸汤米线 · 酸",
  "py": "Suāntāng Mǐxiàn · suān",
  "letter": "D"
 }
];
var dialogData = [
 {
  "scene": "在刘明和王一雪家 · Ở nhà Lưu Minh và Vương Nhất Tuyết (hai vợ chồng mời Bạch Gia Nguyệt và Lý Văn ăn cơm)",
  "anh": "/images/hsk4v3/bai-5/kv-1.webp",
  "nguoi": [
   {
    "ten": "刘明",
    "anh": "/images/hsk4v3/nv/liuming.webp"
   },
   {
    "ten": "白家月",
    "anh": "/images/hsk4v3/nv/bai.webp"
   },
   {
    "ten": "王一雪",
    "anh": "/images/hsk4v3/nv/yixue.webp"
   }
  ],
  "preQuiz": [
   {
    "q": "白家月来中国多久了？",
    "opts": [
     "不到两个月",
     "两个月",
     "两个多月",
     "两年多"
    ],
    "ans": 2
   },
   {
    "q": "白家月觉得水煮鱼怎么样？",
    "opts": [
     "不好吃",
     "没做熟",
     "不太辣",
     "比较辣"
    ],
    "ans": 3
   }
  ],
  "lines": [
   {
    "sp": 0,
    "zh": "家月，你来中国至少两个月了，习惯吃中餐了吗？",
    "py": "Jiāyuè, nǐ lái Zhōngguó zhìshǎo liǎng gè yuè le, xíguàn chī zhōngcān le ma?",
    "vn": "Gia Nguyệt này, cháu sang Trung Quốc ít nhất cũng hai tháng rồi, đã quen ăn món Trung chưa?"
   },
   {
    "sp": 1,
    "zh": "习惯了，而且我很喜欢吃中国菜。",
    "py": "Xíguàn le, érqiě wǒ hěn xǐhuan chī Zhōngguó cài.",
    "vn": "Cháu quen rồi ạ, mà cháu còn rất thích ăn món Trung Quốc nữa."
   },
   {
    "sp": 2,
    "zh": "你还没吃过水煮鱼吧？这是我专门为你做的。",
    "py": "Nǐ hái méi chī guò Shuǐzhǔyú ba? Zhè shì wǒ zhuānmén wèi nǐ zuò de.",
    "vn": "Cháu chưa ăn món cá luộc cay bao giờ nhỉ? Món này cô làm riêng cho cháu đấy."
   },
   {
    "sp": 1,
    "zh": "看起来不像水煮鱼，更像“油煮鱼”。",
    "py": "Kàn qǐlái bú xiàng Shuǐzhǔyú, gèng xiàng “yóu zhǔ yú”.",
    "vn": "Trông chẳng giống “cá luộc nước” chút nào, giống “cá nấu dầu” hơn ạ."
   },
   {
    "sp": 2,
    "zh": "这道菜是先用水把鱼煮熟，最后再倒上辣椒油，其实只有最上面那一层是油。你尝尝，对你来说辣不辣？",
    "py": "Zhè dào cài shì xiān yòng shuǐ bǎ yú zhǔ shú, zuìhòu zài dào shàng làjiāo yóu, qíshí zhǐyǒu zuì shàngmian nà yì céng shì yóu. Nǐ cháng cháng, duì nǐ láishuō là bu là?",
    "vn": "Món này là trước tiên dùng nước luộc chín cá, cuối cùng mới rưới dầu ớt lên, thật ra chỉ có lớp trên cùng là dầu thôi. Cháu nếm thử xem, với cháu có cay không?"
   },
   {
    "sp": 1,
    "zh": "辣是辣，但是非常好吃！",
    "py": "Là shì là, dànshì fēicháng hǎochī!",
    "vn": "Cay thì cay thật, nhưng ngon cực kỳ ạ!"
   },
   {
    "sp": 2,
    "zh": "那你多吃点儿，不要客气。",
    "py": "Nà nǐ duō chī diǎnr, búyào kèqi.",
    "vn": "Vậy cháu ăn nhiều vào nhé, đừng khách sáo."
   }
  ]
 },
 {
  "scene": "在刘明和王一雪家 · Ở nhà Lưu Minh và Vương Nhất Tuyết (hai vợ chồng vừa ăn vừa trò chuyện với Bạch Gia Nguyệt, Lý Văn)",
  "anh": "/images/hsk4v3/bai-5/kv-2.webp",
  "nguoi": [
   {
    "ten": "王一雪",
    "anh": "/images/hsk4v3/nv/yixue.webp"
   },
   {
    "ten": "白家月",
    "anh": "/images/hsk4v3/nv/bai.webp"
   },
   {
    "ten": "刘明",
    "anh": "/images/hsk4v3/nv/liuming.webp"
   },
   {
    "ten": "李文",
    "anh": "/images/hsk4v3/nv/liwen.webp"
   }
  ],
  "preQuiz": [
   {
    "q": "关于王一雪一家，可以知道什么？",
    "opts": [
     "现在不吃辣",
     "现在能吃辣",
     "以前敢吃辣",
     "以前爱吃辣"
    ],
    "ans": 1
   },
   {
    "q": "白家月现在的口味（kǒuwèi, khẩu vị）是什么？",
    "opts": [
     "不吃辣",
     "爱吃辣",
     "不怕辣",
     "怕不辣"
    ],
    "ans": 1
   }
  ],
  "lines": [
   {
    "sp": 0,
    "zh": "我听李文说，你现在也爱吃辣了？",
    "py": "Wǒ tīng Lǐ Wén shuō, nǐ xiànzài yě ài chī là le?",
    "vn": "Cô nghe Lý Văn nói bây giờ cháu cũng mê ăn cay rồi à?"
   },
   {
    "sp": 1,
    "zh": "是的，来中国以后，我越来越喜欢吃辣了。",
    "py": "Shì de, lái Zhōngguó yǐhòu, wǒ yuèláiyuè xǐhuan chī là le.",
    "vn": "Vâng ạ, từ khi sang Trung Quốc, cháu ngày càng thích ăn cay."
   },
   {
    "sp": 0,
    "zh": "我们以前不太敢吃辣，吃完可能会肚子不舒服，不过现在也慢慢适应了。",
    "py": "Wǒmen yǐqián bú tài gǎn chī là, chī wán kěnéng huì dùzi bù shūfu, búguò xiànzài yě màn màn shìyìng le.",
    "vn": "Trước đây nhà cô không dám ăn cay lắm, ăn xong có khi bị khó chịu trong bụng, nhưng giờ cũng dần quen rồi."
   },
   {
    "sp": 2,
    "zh": "对，我们现在都不怕辣了。家月，你是“不怕辣”还是“怕不辣”？",
    "py": "Duì, wǒmen xiànzài dōu bú pà là le. Jiāyuè, nǐ shì “bú pà là” háishì “pà bú là”?",
    "vn": "Đúng thế, giờ nhà chú đều “không sợ cay” rồi. Gia Nguyệt, cháu là “không sợ cay” hay “sợ không cay”?"
   },
   {
    "sp": 1,
    "zh": "中文真有意思，相同的字，顺序一换，意思就变了。",
    "py": "Zhōngwén zhēn yǒuyìsī, xiāngtóng de zì, shùnxù yí huàn, yìsi jiù biàn le.",
    "vn": "Tiếng Trung thú vị thật, vẫn những chữ ấy, đổi thứ tự một cái là nghĩa thay đổi ngay."
   },
   {
    "sp": 3,
    "zh": "你的中文水平够高的，这都听懂了！你说得对，“不怕辣”是说不怕吃辣的菜，“怕不辣”是担心菜还不够辣呢。",
    "py": "Nǐ de Zhōngwén shuǐpíng gòu gāo de, zhè dōu tīng dǒng le! Nǐ shuō de duì, “bú pà là” shì shuō bú pà chī là de cài, “pà bú là” shì dānxīn cài hái búgòu là ne.",
    "vn": "Trình độ tiếng Trung của cậu cao thật đấy, câu này mà cũng nghe hiểu! Cậu nói đúng, “không sợ cay” là không ngại ăn món cay, còn “sợ không cay” là lo món ăn còn chưa đủ cay cơ."
   },
   {
    "sp": 1,
    "zh": "我还达不到“怕不辣”的水平，甚至也不能算“不怕辣”，只是喜欢吃辣。",
    "py": "Wǒ hái dá bú dào “pà bú là” de shuǐpíng, shènzhì yě bù néng suàn “bú pà là”, zhǐshì xǐhuan chī là.",
    "vn": "Cháu còn chưa đạt tới trình “sợ không cay”, thậm chí cũng chưa tính là “không sợ cay”, chỉ là thích ăn cay thôi ạ."
   }
  ]
 },
 {
  "scene": "在餐厅里 · Ở nhà hàng (Bạch Gia Nguyệt, Trần Thiên Trung, Lý Văn và Annie tụ tập ăn trưa)",
  "anh": "/images/hsk4v3/bai-5/kv-3.webp",
  "nguoi": [
   {
    "ten": "小语",
    "anh": "/images/hsk4v3/nv/xiaoyu.webp"
   }
  ],
  "preQuiz": [
   {
    "q": "陈天中点了什么菜？",
    "opts": [
     "辣子鸡",
     "松鼠鳜鱼",
     "红烧羊肉",
     "酸汤米线"
    ],
    "ans": 1
   },
   {
    "q": "李文喜欢吃什么口味的菜？",
    "opts": [
     "辣的",
     "甜的",
     "咸的",
     "酸的"
    ],
    "ans": 2
   }
  ],
  "lines": [
   {
    "sp": 0,
    "zh": "周末，白家月、陈天中、李文和安妮聚在一起吃午餐。",
    "py": "Zhōumò, Bái Jiāyuè, Chén Tiānzhōng, Lǐ Wén hé Ānní jù zài yìqǐ chī wǔcān.",
    "vn": "Cuối tuần, Bạch Gia Nguyệt, Trần Thiên Trung, Lý Văn và Annie tụ tập ăn trưa cùng nhau."
   },
   {
    "sp": 0,
    "zh": "白家月想吃辣的，要了辣子鸡；陈天中爱吃甜的，想尝尝松鼠鳜鱼；李文更喜欢吃咸的，选了红烧羊肉和一道凉菜；安妮听说贵州酸汤很有名，点了酸汤米线。",
    "py": "Bái Jiāyuè xiǎng chī là de, yào le Làzǐjī; Chén Tiānzhōng ài chī tián de, xiǎng cháng cháng Sōngshǔ Guìyú; Lǐ Wén gèng xǐhuan chī xián de, xuǎn le Hóngshāo Yángròu hé yí dào liáng cài; Ānní tīngshuō Guìzhōu suān tāng hěn yǒumíng, diǎn le Suāntāng Mǐxiàn.",
    "vn": "Bạch Gia Nguyệt muốn ăn cay, gọi gà xào ớt khô; Trần Thiên Trung thích đồ ngọt, muốn nếm thử cá quế hình con sóc; Lý Văn thích ăn mặn hơn, chọn thịt dê kho tàu và một món nguội; Annie nghe nói canh chua Quý Châu rất nổi tiếng, nên gọi bún canh chua."
   },
   {
    "sp": 0,
    "zh": "他们边吃边聊，非常愉快。",
    "py": "Tāmen biān chī biān liáo, fēicháng yúkuài.",
    "vn": "Họ vừa ăn vừa trò chuyện, vô cùng vui vẻ."
   },
   {
    "sp": 0,
    "zh": "结账时，李文想请客，但大家觉得还是各付各的更合适。",
    "py": "Jié zhàng shí, Lǐ Wén xiǎng qǐngkè, dàn dàjiā juéde háishì gè fù gè de gèng héshì.",
    "vn": "Lúc thanh toán, Lý Văn muốn mời, nhưng mọi người thấy vẫn là ai trả phần nấy thì hợp hơn."
   },
   {
    "sp": 0,
    "zh": "于是，李文付完钱后，大家把钱转给了他，还笑着说下次再一起聚餐。",
    "py": "Yúshì, Lǐ Wén fù wán qián hòu, dàjiā bǎ qián zhuǎn gěi le tā, hái xiào zhe shuō xià cì zài yìqǐ jùcān.",
    "vn": "Thế là sau khi Lý Văn trả tiền xong, mọi người chuyển khoản lại cho anh ấy, còn cười nói lần sau lại cùng nhau đi ăn."
   }
  ],
  "doan": true
 },
 {
  "scene": "中国餐桌上的座位安排 · Cách sắp xếp chỗ ngồi trên bàn ăn của người Trung Quốc",
  "anh": "/images/hsk4v3/bai-5/kv-4.webp",
  "nguoi": [
   {
    "ten": "小语",
    "anh": "/images/hsk4v3/nv/xiaoyu.webp"
   }
  ],
  "preQuiz": [
   {
    "q": "一般来说，什么人会坐面对门口的座位？",
    "opts": [
     "主人",
     "主人的家人",
     "年龄小的客人",
     "年龄大的客人"
    ],
    "ans": 3
   },
   {
    "q": "一般来说，正式聚餐时，谁先坐下？",
    "opts": [
     "主人",
     "老人",
     "小孩子",
     "年轻人"
    ],
    "ans": 1
   }
  ],
  "lines": [
   {
    "sp": 0,
    "zh": "今天吃饭的时候，大家坐得比较随意。",
    "py": "Jīntiān chīfàn de shíhou, dàjiā zuò de bǐjiào suíyì.",
    "vn": "Hôm nay lúc ăn cơm, mọi người ngồi khá tùy ý."
   },
   {
    "sp": 0,
    "zh": "李文告诉白家月，在中国，正式聚餐和普通聚餐不同，正式聚餐时人们比较重视座位的安排，比如可以按照年龄大小来安排，年龄比较大的客人往往会坐在中间或者面对门口的座位。",
    "py": "Lǐ Wén gàosu Bái Jiāyuè, zài Zhōngguó, zhèngshì jùcān hé pǔtōng jùcān bùtóng, zhèngshì jùcān shí rén men bǐjiào zhòngshì zuòwèi de ānpái, bǐrú kěyǐ ànzhào niánlíng dàxiǎo lái ānpái, niánlíng bǐjiào dà de kèrén wǎngwǎng huì zuò zài zhōngjiàn huòzhě miànduì ménkǒu de zuòwèi.",
    "vn": "Lý Văn nói với Bạch Gia Nguyệt rằng ở Trung Quốc, bữa tiệc trang trọng khác với bữa ăn bình thường; khi ăn tiệc trang trọng người ta khá coi trọng việc sắp xếp chỗ ngồi, ví dụ có thể xếp theo tuổi lớn nhỏ, khách lớn tuổi thường ngồi ở giữa hoặc ở chỗ đối diện cửa ra vào."
   },
   {
    "sp": 0,
    "zh": "大家坐下时，主人会请客人先坐。",
    "py": "Dàjiā zuò xià shí, zhǔrén huì qǐngkè rén xiān zuò.",
    "vn": "Khi mọi người ngồi vào bàn, chủ nhà sẽ mời khách ngồi trước."
   },
   {
    "sp": 0,
    "zh": "如果聚餐时有老人，年轻人要等老人坐下后再坐。",
    "py": "Rúguǒ jùcān shí yǒu lǎorén, niánqīngrén yào děng lǎorén zuò xià hòu zài zuò.",
    "vn": "Nếu bữa tiệc có người già, người trẻ phải đợi người già ngồi xuống rồi mới ngồi."
   },
   {
    "sp": 0,
    "zh": "白家月听后觉得很有意思，她认为这么做是照顾客人、尊重老人的表现。",
    "py": "Bái Jiāyuè tīng hòu juéde hěn yǒuyìsī, tā rènwéi zhème zuò shì zhàogu kèrén, zūnzhòng lǎorén de biǎoxiàn.",
    "vn": "Bạch Gia Nguyệt nghe xong thấy rất thú vị, cô cho rằng làm như vậy là biểu hiện của sự chu đáo với khách và kính trọng người già."
   }
  ],
  "doan": true
 }
];
var listenData = [
 {
  "audio": "服务员，我们点菜。我不太敢吃辣，来一个松鼠鳜鱼吧，酸酸甜甜的。我喜欢吃咸的，要一个红烧羊肉。再来一个汤。我们四个人，三个菜够不够？至少要点四个菜吧，不够再加。",
  "questions": [
   {
    "q": "他们一共有几个人？",
    "opts": [
     "三个",
     "四个",
     "五个"
    ],
    "ans": 1
   },
   {
    "q": "他们觉得三个菜怎么样？",
    "opts": [
     "不够",
     "太多了",
     "刚好"
    ],
    "ans": 0
   }
  ]
 },
 {
  "audio": "今天这顿饭我来付吧。别，上次就是你请的客，这次还是各付各的吧。好吧，那我先用手机付，你们等一会儿把钱转给我就行。没问题，下次聚餐我请！",
  "questions": [
   {
    "q": "这次他们怎么付钱？",
    "opts": [
     "一个人请客",
     "各付各的",
     "下次再付"
    ],
    "ans": 1
   },
   {
    "q": "大家怎么把钱给付钱的人？",
    "opts": [
     "给现金",
     "用手机转给他",
     "下次再给"
    ],
    "ans": 1
   }
  ]
 },
 {
  "audio": "明天是爷爷的生日，家里要请很多客人。座位怎么安排？按照年龄大小来安排吧，爷爷奶奶坐在中间，面对门口。那我们年轻人呢？你们要等爷爷奶奶和客人都坐下以后再坐，这是尊重老人。",
  "questions": [
   {
    "q": "明天家里为什么要请客人？",
    "opts": [
     "爷爷过生日",
     "奶奶回国",
     "过春节"
    ],
    "ans": 0
   },
   {
    "q": "年轻人什么时候坐下？",
    "opts": [
     "最先坐",
     "等老人和客人都坐下以后",
     "想什么时候坐就什么时候坐"
    ],
    "ans": 1
   }
  ]
 }
];
var matchData = [
 {
  "left": "用水把鱼",
  "right": "煮熟"
 },
 {
  "left": "倒上",
  "right": "辣椒油"
 },
 {
  "left": "达到",
  "right": "“怕不辣”的水平"
 },
 {
  "left": "按照",
  "right": "年龄大小"
 },
 {
  "left": "面对",
  "right": "门口的座位"
 },
 {
  "left": "重视",
  "right": "座位的安排"
 },
 {
  "left": "尊重",
  "right": "老人"
 },
 {
  "left": "聚在",
  "right": "一起"
 },
 {
  "left": "各付",
  "right": "各的"
 },
 {
  "left": "等老人坐下后",
  "right": "再坐"
 }
];
var fillData = [
 {
  "pre": "家月，你来中国",
  "blank": "至少",
  "post": "两个月了，习惯吃中餐了吗？",
  "hint": "(ít nhất)",
  "ans": "至少",
  "exp": "至少 + thời gian."
 },
 {
  "pre": "你还没吃过水煮鱼吧？这是我",
  "blank": "专门",
  "post": "为你做的。",
  "hint": "(riêng, đặc biệt)",
  "ans": "专门",
  "exp": "专门为 + ai + V."
 },
 {
  "pre": "这道菜是先用水把鱼煮",
  "blank": "熟",
  "post": "，最后再倒上辣椒油。",
  "hint": "(chín)",
  "ans": "熟",
  "exp": "煮熟 — bổ ngữ kết quả."
 },
 {
  "pre": "“怕不辣”是担心菜还",
  "blank": "不够",
  "post": "辣呢。",
  "hint": "(chưa đủ)",
  "ans": "不够",
  "exp": "不够 + Adj."
 },
 {
  "pre": "我还",
  "blank": "达",
  "post": "不到“怕不辣”的水平。",
  "hint": "(đạt)",
  "ans": "达",
  "exp": "达到 → bổ ngữ khả năng 达不到."
 },
 {
  "pre": "周末，白家月、陈天中、李文和安妮",
  "blank": "聚",
  "post": "在一起吃午餐。",
  "hint": "(tụ tập)",
  "ans": "聚",
  "exp": "聚在一起."
 },
 {
  "pre": "大家觉得还是",
  "blank": "各",
  "post": "付各的更合适。",
  "hint": "(ai … nấy)",
  "ans": "各",
  "exp": "各V各的."
 },
 {
  "pre": "正式聚餐时人们比较",
  "blank": "重视",
  "post": "座位的安排。",
  "hint": "(coi trọng)",
  "ans": "重视",
  "exp": "重视 + N."
 },
 {
  "pre": "比如可以",
  "blank": "按照",
  "post": "年龄大小来安排。",
  "hint": "(theo)",
  "ans": "按照",
  "exp": "按照 + N + 来 + V."
 },
 {
  "pre": "如果聚餐时有老人，年轻人要",
  "blank": "等",
  "post": "老人坐下后再坐。",
  "hint": "(đợi đến khi)",
  "ans": "等",
  "exp": "等……后，再……"
 }
];
var sortData = [
 {
  "words": [
   "你",
   "来",
   "中国",
   "至少",
   "两个月",
   "了",
   "。"
  ],
  "ans": "你来中国至少两个月了。",
  "audio": "你来中国至少两个月了。"
 },
 {
  "words": [
   "你的",
   "中文水平",
   "够",
   "高",
   "的",
   "。"
  ],
  "ans": "你的中文水平够高的。",
  "audio": "你的中文水平够高的。"
 },
 {
  "words": [
   "大家",
   "觉得",
   "还是",
   "各付",
   "各的",
   "更合适",
   "。"
  ],
  "ans": "大家觉得还是各付各的更合适。",
  "audio": "大家觉得还是各付各的更合适。"
 },
 {
  "words": [
   "年轻人",
   "要",
   "等",
   "老人",
   "坐下后",
   "再坐",
   "。"
  ],
  "ans": "年轻人要等老人坐下后再坐。",
  "audio": "年轻人要等老人坐下后再坐。"
 },
 {
  "words": [
   "正式聚餐时",
   "人们",
   "比较",
   "重视",
   "座位的",
   "安排",
   "。"
  ],
  "ans": "正式聚餐时人们比较重视座位的安排。",
  "audio": "正式聚餐时人们比较重视座位的安排。"
 },
 {
  "words": [
   "这道菜",
   "是",
   "我",
   "专门",
   "为你",
   "做的",
   "。"
  ],
  "ans": "这道菜是我专门为你做的。",
  "audio": "这道菜是我专门为你做的。"
 }
];
var mcData = [
 {
  "q": "每年＿＿有两百名留学生来我校学习中文专业。",
  "opts": [
   "至少",
   "任何",
   "专门",
   "按照"
  ],
  "ans": 0,
  "exp": "至少 + 有 + số lượng: ít nhất có …"
 },
 {
  "q": "你的中文水平＿＿高的，这都听懂了！",
  "opts": [
   "够",
   "太",
   "不够",
   "至少"
  ],
  "ans": 0,
  "exp": "Khung cố định 够……的 = thật là …"
 },
 {
  "q": "我尝了一下，还＿＿甜，再加一点儿糖吧。",
  "opts": [
   "不够",
   "够",
   "至少",
   "达到"
  ],
  "ans": 0,
  "exp": "不够 + Adj = chưa đủ …"
 },
 {
  "q": "大家觉得还是＿＿付各的更合适。",
  "opts": [
   "各",
   "每",
   "自己",
   "都"
  ],
  "ans": 0,
  "exp": "各V各的 = ai … nấy."
 },
 {
  "q": "＿＿我写完作业，再跟你出去玩。",
  "opts": [
   "等",
   "在",
   "从",
   "随着"
  ],
  "ans": 0,
  "exp": "等……，再…… = đợi … rồi mới …"
 },
 {
  "q": "辣＿＿辣，但是非常好吃！",
  "opts": [
   "是",
   "也",
   "就",
   "很"
  ],
  "ans": 0,
  "exp": "Ôn ×是×，但是 / 不过…… (Bài 3 · điểm 1)."
 },
 {
  "q": "这道菜看起来太辣了，我不＿＿吃。",
  "opts": [
   "敢",
   "怕",
   "够",
   "付"
  ],
  "ans": 0,
  "exp": "不敢 + V = không dám …"
 },
 {
  "q": "正式聚餐时人们比较＿＿座位的安排。",
  "opts": [
   "重视",
   "尊重",
   "面对",
   "达到"
  ],
  "ans": 0,
  "exp": "重视 + việc / vấn đề; 尊重 + người / ý kiến."
 },
 {
  "q": "年龄比较大的客人往往会坐在中间或者＿＿门口的座位。",
  "opts": [
   "面对",
   "按照",
   "安排",
   "重视"
  ],
  "ans": 0,
  "exp": "面对门口 = đối diện cửa ra vào."
 },
 {
  "q": "大家坐下时，＿＿会请客人先坐。",
  "opts": [
   "主人",
   "客人",
   "年轻人",
   "服务员"
  ],
  "ans": 0,
  "exp": "主人 = chủ nhà (đối lập 客人)."
 }
];
var speakingData = {
 "intro": "Nhấn nút loa nghe câu hỏi (câu hỏi phần Khởi động, câu hỏi đọc hiểu 4 bài khoá, kể lại bài khoá và đóng vai), rồi tự ghi âm câu trả lời — cố dùng từ mới và 4 điểm ngữ pháp của bài.",
 "questions": [
  {
   "q_zh": "你吃过哪些中国菜？觉得怎么样？",
   "q_vn": "Bạn đã ăn những món Trung Quốc nào? Thấy thế nào?",
   "hint": "我吃过……、……和……。……辣是辣，不过……",
   "sample": "我吃过水煮鱼、辣子鸡和松鼠鳜鱼。水煮鱼辣是辣，不过非常好吃；松鼠鳜鱼酸酸甜甜的，我也很喜欢。",
   "sample_vn": "Tôi đã ăn cá luộc cay, gà xào ớt khô và cá quế hình con sóc. Cá luộc cay thì cay thật nhưng rất ngon; cá quế hình con sóc chua chua ngọt ngọt, tôi cũng rất thích.",
   "note": "Câu hỏi phần Khởi động của sách; ôn ×是×，不过…… (Bài 3)."
  },
  {
   "q_zh": "你喜欢什么味道的菜？",
   "q_vn": "Bạn thích món ăn có mùi vị (味道 wèidào) như thế nào?",
   "hint": "我喜欢……的菜，比如……。不过我不太敢吃……",
   "sample": "我喜欢酸的和辣的菜，比如酸汤米线。不过我不太敢吃太咸的菜，吃多了对身体不好。",
   "sample_vn": "Tôi thích món chua và cay, ví dụ bún canh chua. Nhưng tôi không dám ăn món quá mặn lắm, ăn nhiều không tốt cho sức khỏe.",
   "note": "Câu hỏi phần Khởi động của sách."
  },
  {
   "q_zh": "白家月习惯吃中餐了吗？水煮鱼是怎么做的？",
   "q_vn": "Bạch Gia Nguyệt đã quen ăn món Trung chưa? Món cá luộc cay làm thế nào?",
   "hint": "她……，而且……。水煮鱼是先……，最后再……",
   "sample": "白家月习惯吃中餐了，而且很喜欢吃中国菜。水煮鱼是先用水把鱼煮熟，最后再倒上辣椒油，其实只有最上面那一层是油。",
   "sample_vn": "Bạch Gia Nguyệt đã quen ăn món Trung, mà còn rất thích món Trung Quốc. Cá luộc cay là trước tiên luộc chín cá bằng nước, cuối cùng rưới dầu ớt lên, thật ra chỉ lớp trên cùng là dầu.",
   "note": "Câu hỏi đọc hiểu bài khoá 1."
  },
  {
   "q_zh": "请根据提示复述课文一。",
   "q_vn": "Dựa vào gợi ý, kể lại bài khoá 1.",
   "hint": "白家月……，她习惯……，而且……。王一雪让她尝尝……。白家月觉得……，更……。王一雪告诉她……",
   "sample": "白家月来中国至少两个月了，她习惯吃中餐了，而且很喜欢吃中国菜。王一雪让她尝尝自己专门为她做的水煮鱼。白家月觉得这道菜看起来不像水煮鱼，更像“油煮鱼”。王一雪告诉她，这道菜是先用水把鱼煮熟，最后再倒上辣椒油，其实只有最上面那一层是油。白家月尝了以后，觉得辣是辣，不过非常好吃。王一雪让她多吃点儿，不要客气。",
   "sample_vn": "Bạch Gia Nguyệt sang Trung Quốc ít nhất hai tháng rồi, đã quen ăn món Trung, lại còn rất thích. Vương Nhất Tuyết mời cô nếm món cá luộc cay làm riêng cho cô… Gia Nguyệt nếm xong thấy cay thì cay nhưng rất ngon. Nhất Tuyết bảo cô ăn nhiều vào, đừng khách sáo.",
   "note": "Bài tập 复述 của sách (trang 49)."
  },
  {
   "q_zh": "王一雪一家以前敢不敢吃辣？为什么？“不怕辣”“怕不辣”都是什么意思？",
   "q_vn": "Trước đây nhà Vương Nhất Tuyết có dám ăn cay không? Vì sao? “不怕辣” và “怕不辣” nghĩa là gì?",
   "hint": "他们以前……，因为……。“不怕辣”是说……，“怕不辣”是……",
   "sample": "他们以前不太敢吃辣，因为吃完可能会肚子不舒服，不过现在也慢慢适应了。“不怕辣”是说不怕吃辣的菜，“怕不辣”是担心菜还不够辣。",
   "sample_vn": "Trước đây họ không dám ăn cay lắm vì ăn xong có thể khó chịu trong bụng, nhưng giờ đã dần quen. “Không sợ cay” là không ngại ăn món cay, “sợ không cay” là lo món ăn chưa đủ cay.",
   "note": "Câu hỏi đọc hiểu bài khoá 2; dùng 不够 (điểm 2)."
  },
  {
   "q_zh": "白家月点了什么菜？为什么？他们是怎么结账的？",
   "q_vn": "Bạch Gia Nguyệt gọi món gì? Vì sao? Họ thanh toán thế nào?",
   "hint": "白家月点了……，因为……。结账时，大家觉得……，于是……",
   "sample": "白家月点了辣子鸡，因为她想吃辣的。结账时，李文想请客，但大家觉得还是各付各的更合适，于是李文付完钱后，大家把钱转给了他。",
   "sample_vn": "Bạch Gia Nguyệt gọi gà xào ớt khô vì cô muốn ăn cay. Lúc thanh toán Lý Văn muốn mời, nhưng mọi người thấy ai trả phần nấy thì hợp hơn, thế là Lý Văn trả xong thì mọi người chuyển tiền lại cho anh.",
   "note": "Câu hỏi đọc hiểu bài khoá 3; dùng 各×各的 (điểm 3) + ôn 于是 (Bài 3)."
  },
  {
   "q_zh": "请根据提示复述课文三。",
   "q_vn": "Dựa vào gợi ý, kể lại bài khoá 3.",
   "hint": "周末，……吃午餐。白家月……，要了辣子鸡；陈天中……；李文……；安妮……。结账时……于是……",
   "sample": "周末，白家月、陈天中、李文和安妮聚在一起吃午餐。白家月想吃辣的，要了辣子鸡；陈天中爱吃甜的，想尝尝松鼠鳜鱼；李文更喜欢吃咸的，选了红烧羊肉和一道凉菜；安妮听说贵州酸汤很有名，点了酸汤米线。他们边吃边聊，非常愉快。结账时，李文想请客，但大家觉得还是各付各的更合适。于是，李文付完钱后，大家把钱转给了他，还笑着说下次再一起聚餐。",
   "sample_vn": "Cuối tuần, bốn bạn tụ tập ăn trưa. Mỗi người gọi một món theo khẩu vị: cay, ngọt, mặn, chua… Họ vừa ăn vừa trò chuyện rất vui. Lúc thanh toán, mọi người quyết định ai trả phần nấy, rồi hẹn lần sau lại đi ăn cùng nhau.",
   "note": "Bài tập 复述 của sách (trang 53)."
  },
  {
   "q_zh": "正式聚餐时，可以怎么安排座位？白家月怎么看这种座位安排方式？",
   "q_vn": "Khi ăn tiệc trang trọng có thể sắp xếp chỗ ngồi thế nào? Bạch Gia Nguyệt nghĩ gì về cách sắp xếp này?",
   "hint": "可以按照……来安排，……往往会坐在……。年轻人要等……再……。白家月认为……",
   "sample": "可以按照年龄大小来安排，年龄比较大的客人往往会坐在中间或者面对门口的座位。年轻人要等老人坐下后再坐。白家月觉得很有意思，她认为这么做是照顾客人、尊重老人的表现。",
   "sample_vn": "Có thể sắp xếp theo tuổi, khách lớn tuổi thường ngồi ở giữa hoặc chỗ đối diện cửa. Người trẻ phải đợi người già ngồi rồi mới ngồi. Bạch Gia Nguyệt thấy rất thú vị, cho rằng đó là biểu hiện chu đáo với khách và kính trọng người già.",
   "note": "Câu hỏi đọc hiểu bài khoá 4; dùng 等 (điểm 4)."
  },
  {
   "q_zh": "你邀请中国朋友来家里做客，边吃边聊各自国家的饮食文化，包括饭菜的种类和口味、用餐感受、餐桌礼仪等。",
   "q_vn": "Em mời bạn Trung Quốc đến nhà chơi, vừa ăn vừa trò chuyện về văn hóa ẩm thực của nước mỗi người: các loại món ăn và khẩu vị, cảm nhận khi ăn, phép lịch sự trên bàn ăn…",
   "hint": "这是我专门为你做的……。越南菜……够……的。在越南，吃饭的时候要等……再……。你们中国……？我们各……各的……",
   "sample": "欢迎你来我家做客！今天的菜都是我专门为你做的越南菜。你看，这是越南河粉，汤是用牛骨头煮了好几个小时做成的，你尝尝，咸不咸？越南菜油放得不多，还常常配很多新鲜的蔬菜，味道够清淡的。越南北方人喜欢吃咸一点儿的，南方人爱吃甜的，中部人最爱吃辣，有的人甚至“怕不辣”。你们中国人呢？我听说四川人爱吃辣，苏州人爱吃甜的，对吗？在越南，一家人吃饭的时候，年轻人要等爷爷奶奶拿起筷子再开始吃，这是尊重老人的表现。我听说中国正式聚餐的时候，也很重视座位的安排，年龄大的客人坐在面对门口的座位。和朋友聚餐的时候，越南人有时候一个人请客，有时候各付各的。你多吃点儿，不要客气！",
   "sample_vn": "Chào mừng bạn đến nhà mình chơi! Hôm nay toàn món Việt mình làm riêng cho bạn. Đây là phở, nước dùng ninh từ xương bò mấy tiếng đồng hồ, bạn nếm xem có mặn không? Món Việt ít dầu mỡ, hay ăn kèm nhiều rau sống, vị khá thanh. Người miền Bắc thích ăn đậm hơn, người miền Nam thích ngọt, người miền Trung mê cay… Ở Việt Nam, cả nhà ăn cơm thì người trẻ phải đợi ông bà cầm đũa rồi mới ăn — đó là kính trọng người già. Đi ăn với bạn bè thì có khi một người mời, có khi ai trả phần nấy. Bạn ăn nhiều vào, đừng khách sáo nhé!",
   "note": "Hoạt động 角色扮演 (đóng vai) của sách, trang 57 — dùng đủ 至少 / 够 / 各×各的 / 等."
  }
 ]
};
var translateData = [
 {
  "vi": "Cháu sang Trung Quốc ít nhất hai tháng rồi, đã quen ăn món Trung chưa?",
  "zh": "你来中国至少两个月了，习惯吃中餐了吗？",
  "py": "Nǐ lái Zhōngguó zhìshǎo liǎng gè yuè le, xíguàn chī zhōngcān le ma?"
 },
 {
  "vi": "Trình độ tiếng Trung của cậu cao thật đấy!",
  "zh": "你的中文水平够高的！",
  "py": "Nǐ de Zhōngwén shuǐpíng gòu gāo de!"
 },
 {
  "vi": "Mọi người thấy vẫn là ai trả phần nấy thì hợp hơn.",
  "zh": "大家觉得还是各付各的更合适。",
  "py": "Dàjiā juéde háishì gè fù gè de gèng héshì."
 },
 {
  "vi": "Người trẻ phải đợi người già ngồi xuống rồi mới ngồi.",
  "zh": "年轻人要等老人坐下后再坐。",
  "py": "Niánqīngrén yào děng lǎorén zuò xià hòu zài zuò."
 },
 {
  "vi": "Món này cay thì cay, nhưng rất ngon.",
  "zh": "这道菜辣是辣，但是非常好吃。",
  "py": "Zhè dào cài là shì là, dànshì fēicháng hǎochī."
 },
 {
  "vi": "Món này trông có vẻ rất cay, tôi không dám ăn.",
  "zh": "这道菜看起来很辣，我不敢吃。",
  "py": "Zhè dào cài kàn qǐlái hěn là, wǒ bù gǎn chī."
 }
];
var translateDataRev = [
 {
  "vi": "Đây là món cô làm riêng cho cháu.",
  "zh": "这是我专门为你做的。",
  "py": "Zhè shì wǒ zhuānmén wèi nǐ zuò de."
 },
 {
  "vi": "Vẫn những chữ ấy, đổi thứ tự một cái là nghĩa thay đổi ngay.",
  "zh": "相同的字，顺序一换，意思就变了。",
  "py": "Xiāngtóng de zì, shùnxù yí huàn, yìsi jiù biàn le."
 },
 {
  "vi": "“Sợ không cay” là lo món ăn còn chưa đủ cay.",
  "zh": "“怕不辣”是担心菜还不够辣。",
  "py": "“Pà bú là” shì dānxīn cài hái búgòu là."
 },
 {
  "vi": "Khi ăn tiệc trang trọng, người ta khá coi trọng việc sắp xếp chỗ ngồi.",
  "zh": "正式聚餐时，人们比较重视座位的安排。",
  "py": "Zhèngshì jùcān shí, rén men bǐjiào zhòngshì zuòwèi de ānpái."
 },
 {
  "vi": "Làm như vậy là biểu hiện của sự chu đáo với khách và kính trọng người già.",
  "zh": "这么做是照顾客人、尊重老人的表现。",
  "py": "Zhème zuò shì zhàogu kèrén, zūnzhòng lǎorén de biǎoxiàn."
 }
];
var sgkData = [
 {
  "kieu": "kho",
  "de": "选词填空（一）· 综合练习",
  "vn": "Chọn từ thích hợp điền vào chỗ trống (Bài tập tổng hợp, sách trang 55).",
  "dapSgk": true,
  "tu": [
   "熟",
   "敢",
   "油",
   "专门",
   "肚子"
  ],
  "cau": [
   {
    "s": "家里没＿＿了，你去超市买一瓶吧。",
    "dap": [
     "油"
    ]
   },
   {
    "s": "这道菜看起来太辣了，我不＿＿吃。",
    "dap": [
     "敢"
    ]
   },
   {
    "s": "我＿＿有点儿不舒服，想休息一下。",
    "dap": [
     "肚子"
    ]
   },
   {
    "s": "已经煮了十多分钟了，饺子＿＿了吧？",
    "dap": [
     "熟"
    ]
   },
   {
    "s": "这是我＿＿为你准备的礼物，希望你喜欢。",
    "dap": [
     "专门"
    ]
   }
  ]
 },
 {
  "kieu": "kho",
  "de": "选词填空（二）· 综合练习",
  "vn": "Chọn từ thích hợp điền vào chỗ trống (hội thoại, sách trang 56).",
  "dapSgk": true,
  "tu": [
   "凉",
   "咸",
   "付",
   "重视",
   "座位"
  ],
  "cau": [
   {
    "s": "A：请问，这个＿＿有人吗？　B：没有人，您坐吧。",
    "dap": [
     "座位"
    ]
   },
   {
    "s": "A：你尝尝，这道菜是不是做得太＿＿了？　B：嗯，是的，我跟服务员说一下。",
    "dap": [
     "咸"
    ]
   },
   {
    "s": "A：你们怎么还不吃？一会儿菜都＿＿了。　B：我们在等你呢，一起吃更热闹。",
    "dap": [
     "凉"
    ]
   },
   {
    "s": "A：我发现早上出来跑步的人变多了。　B：是啊，因为人们越来越＿＿身体健康了。",
    "dap": [
     "重视"
    ]
   },
   {
    "s": "A：这是我去超市帮你带的东西。　B：谢谢！多少钱？我把钱＿＿给你。",
    "dap": [
     "付"
    ]
   }
  ]
 },
 {
  "kieu": "kho",
  "de": "选择合适的内容完成短文",
  "vn": "Chọn nội dung thích hợp (A–D) hoàn thành đoạn văn (sách trang 56).",
  "dapSgk": true,
  "tu": [
   "不够再加",
   "刘明和两个孩子也各点了一道菜",
   "大家聚在一起",
   "感谢他们这段时间对自己的照顾"
  ],
  "cau": [
   {
    "s": "周末，白家月请大家一起吃饭，＿＿。点菜时，白家月让大家想吃什么就点什么，并说自己很喜欢这家饭店的菜，味道特别好。王一雪建议每个人先点一个自己喜欢的菜，＿＿。王一雪要了一个汤，李文选了一道凉菜，＿＿，白家月最后点了一道肉菜。＿＿，边吃边聊，非常开心。",
    "dap": [
     "感谢他们这段时间对自己的照顾",
     "不够再加",
     "刘明和两个孩子也各点了一道菜",
     "大家聚在一起"
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
    "anh": "/images/hsk4v3/bai-5/bt-1.webp",
    "s": "",
    "tu": "午餐",
    "dap": "今天吃午餐的时候，我们点了很多菜。",
    "giai": "吃午餐的时候 = lúc ăn trưa; 点菜 = gọi món."
   },
   {
    "anh": "/images/hsk4v3/bai-5/bt-2.webp",
    "s": "",
    "tu": "辣",
    "dap": "这道菜看起来很辣，我不敢吃。",
    "giai": "看起来 + Adj (trông có vẻ); 不敢 + V — từ mới 敢."
   },
   {
    "anh": "/images/hsk4v3/bai-5/bt-3.webp",
    "s": "",
    "tu": "汤",
    "dap": "这个汤看起来很好喝。",
    "giai": "汤 đi với 喝 (好喝), không nói 好吃."
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
  "tieuDe": "Viết bài giới thiệu văn hóa ẩm thực (写作)",
  "gioiThieu": "Đề 写作 của sách HSK 4 (3.0) yêu cầu viết một đoạn văn ngắn (ít nhất 120 chữ) dựa trên nội dung đã học và đã thảo luận ở phần đóng vai — giống phần 书写 của đề thi HSK 4 mới. Người đọc là các bạn đến dự 美食节 (lễ hội ẩm thực) của trường.",
  "buoc": [
   "Đọc kỹ đề: viết cho AI đọc (các bạn ở lễ hội ẩm thực), viết để làm gì (giới thiệu văn hóa ẩm thực nước em), cần những ý nào.",
   "Lập dàn ý theo các câu hỏi gợi ý: món ăn tiêu biểu → khẩu vị các vùng → thói quen ăn uống → phép lịch sự trên bàn ăn → chuyện trả tiền khi tụ tập.",
   "Dùng từ mới (辣、咸、酸、汤、油、聚餐、主人、尊重…) và 4 điểm ngữ pháp của bài: 至少, 够……的, 各×各的, 等……再…….",
   "Lồng ngữ pháp bài cũ: ×是×，不过…… (Bài 3), 既……又…… (Bài 4), 甚至 (Bài 3), 一方面……另一方面…… (Bài 1).",
   "Câu mở giới thiệu mình đến từ đâu, câu kết mời mọi người đến nếm thử; tự soát số chữ (≥ 120) và lỗi chữ Hán trước khi nộp."
  ]
 },
 "de": "校园美食节就要到了。为了让大家更好地了解你们国家的饮食文化，请根据上面谈论的内容，写一篇短文进行介绍，不少于120字。",
 "prompt": "Lễ hội ẩm thực của trường sắp diễn ra. Để mọi người hiểu rõ hơn văn hóa ẩm thực của nước em, hãy dựa vào nội dung vừa trao đổi ở trên, viết một bài văn ngắn giới thiệu, không ít hơn 120 chữ.",
 "dan": [
  {
   "hoi": "你们国家的饭菜有哪些种类？最有名的是什么？",
   "goiY": "我们国家的菜种类够多的，最有名的是……"
  },
  {
   "hoi": "各地的人喜欢什么口味？",
   "goiY": "北方人喜欢……，南方人……，中部人……，有的菜甚至……"
  },
  {
   "hoi": "你们每天怎么吃饭？有什么习惯？",
   "goiY": "每天至少吃一次……；菜里油……，常常配……"
  },
  {
   "hoi": "一家人吃饭时有什么礼仪？",
   "goiY": "要等老人……，年轻人再……，这是……的表现"
  },
  {
   "hoi": "和朋友聚餐时，一般谁付钱？",
   "goiY": "有时候一个人请客，有时候各付各的"
  }
 ],
 "tuNen": [
  "中餐",
  "辣",
  "酸",
  "咸",
  "汤",
  "油",
  "聚餐",
  "主人",
  "座位",
  "尊重",
  "按照",
  "随意"
 ],
 "cauTruc": [
  {
   "ten": "……够……的",
   "nhan": "够",
   "vd": "越南菜的种类够多的，味道也够丰富的。",
   "khi": "Câu MỞ: giới thiệu, khen món ăn nước mình."
  },
  {
   "ten": "至少……",
   "nhan": "至少",
   "vd": "越南人每天至少吃一次米饭或者米线。",
   "khi": "Nói thói quen ăn uống hằng ngày."
  },
  {
   "ten": "×是×，不过……",
   "nhan": "是",
   "vd": "中部的菜辣是辣，不过非常香。",
   "khi": "Ôn Bài 3: nhận xét hai mặt của món ăn."
  },
  {
   "ten": "等……，再……",
   "nhan": "等",
   "vd": "一家人吃饭的时候，要等爷爷奶奶拿起筷子，年轻人再开始吃。",
   "khi": "Giới thiệu phép lịch sự trên bàn ăn."
  },
  {
   "ten": "各×各的",
   "nhan": "各",
   "vd": "和朋友聚餐比较随意，有时候一个人请客，有时候各付各的。",
   "khi": "Câu gần KẾT: chuyện trả tiền khi tụ tập."
  }
 ],
 "checklist": [
  "Đủ ít nhất 120 chữ Hán chưa?",
  "Đã nói đủ các ý: món tiêu biểu, khẩu vị các vùng, thói quen ăn uống, phép lịch sự trên bàn ăn, chuyện trả tiền chưa?",
  "Đã dùng ít nhất 3 trong 4 điểm ngữ pháp của bài (至少、够……的、各×各的、等……再……) chưa?",
  "Đã dùng ít nhất 6 từ mới của bài chưa? (汤 đi với 喝, không nói 吃汤!)",
  "Bài có câu mở (mình đến từ đâu) và câu kết (mời mọi người đến nếm thử) rõ ràng chưa?"
 ],
 "model": {
  "zh": "我来自越南，越南菜的种类够多的，味道也够丰富的。一般来说，北方人喜欢吃咸一点儿的，南方人更喜欢吃甜的，中部人最爱吃辣，有的菜辣是辣，不过非常香。越南人每天至少吃一次米饭或者米线，最有名的越南河粉就是用米做的，汤是用牛骨头煮了好几个小时才做成的。越南菜用油不多，还会配很多新鲜的蔬菜，既好吃又健康。在越南，一家人吃饭的时候，大家聚在一起，要等爷爷奶奶拿起筷子，年轻人再开始吃，这是尊重老人的表现。和朋友聚餐就比较随意了，有时候一个人请客，有时候各付各的。欢迎大家来美食节尝尝越南菜！",
  "py": "Wǒ láizì Yuènán, Yuènán cài de zhǒnglèi gòu duō de, wèidào yě gòu fēngfù de. Yìbān láishuō, běifāng rén xǐhuan chī xián yìdiǎnr de, nánfāng rén gèng xǐhuan chī tián de, zhōng bù rén zuì ài chī là, yǒude cài là shì là, búguò fēicháng xiāng. Yuènán rén měi tiān zhìshǎo chī yí cì mǐfàn huòzhě mǐ xiàn, zuì yǒumíng de Yuènán hé fěn jiù shì yòng mǐ zuò de, tāng shì yòng niú gǔtou zhǔ le hǎo jǐ gè xiǎoshí cái zuò chéng de. Yuènán cài yòng yóu bù duō, hái huì pèi hěn duō xīnxiān de shūcài, jì hǎochī yòu jiànkāng. Zài Yuènán, yì jiārén chīfàn de shíhou, dàjiā jù zài yìqǐ, yào děng yéye-nǎinai ná qǐ kuàizi, niánqīngrén zài kāishǐ chī, zhè shì zūnzhòng lǎorén de biǎoxiàn. Hé péngyou jùcān jiù bǐjiào suíyì le, yǒu shíhou yí gè rén qǐngkè, yǒu shíhou gè fù gè de. Huānyíng dàjiā lái měi shí jié cháng cháng Yuènán cài!"
 }
};
