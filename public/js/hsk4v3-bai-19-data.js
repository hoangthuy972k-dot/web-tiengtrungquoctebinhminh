// HSK 4 (3.0) · Bai 19 — sinh boi tools/hsk4v3/gan.js tu tools/hsk4v3/bai-19/ (dung sua tay).
var vocabData = [
 {
  "n": 1,
  "zh": "话剧",
  "py": "huàjù",
  "pos": "Danh từ",
  "vn": "kịch nói",
  "hv": "thoại kịch",
  "em": "🎭",
  "lesson": 1,
  "explain": [
   "Loại kịch sân khấu diễn chủ yếu bằng lời thoại (đối thoại, độc thoại), khác với 京剧 (Kinh kịch — có hát) hay 歌剧 (nhạc kịch).",
   "Bẫy Hán Việt: 话剧 = kịch nói (không nói “thoại kịch”)."
  ],
  "usage": "演话剧 · 排话剧 · 看话剧 · 一部/一场话剧.",
  "collo": [
   "演话剧",
   "排话剧",
   "一场话剧",
   "话剧演员"
  ],
  "colloFull": [
   {
    "zh": "演话剧",
    "py": "Yǎn huàjù",
    "vn": "diễn kịch nói"
   },
   {
    "zh": "排话剧",
    "py": "Pái huàjù",
    "vn": "tập kịch"
   },
   {
    "zh": "一场话剧",
    "py": "Yì chǎng huàjù",
    "vn": "một buổi diễn kịch"
   },
   {
    "zh": "话剧演员",
    "py": "Huàjù yǎnyuán",
    "vn": "diễn viên kịch nói"
   }
  ],
  "patterns": [
   {
    "s": "一部 / 一场 + 话剧",
    "m": "部 = một vở (tác phẩm); 场 = một buổi diễn"
   }
  ],
  "ex_zh": "小雪，你们的话剧排好了吗？",
  "ex_py": "Xiǎoxuě, nǐmen de huàjù páihǎo le ma?",
  "ex_vn": "Tiểu Tuyết, vở kịch của các con tập xong chưa?",
  "exList": [
   {
    "zh": "小雪，你们的话剧排好了吗？",
    "py": "Xiǎoxuě, nǐmen de huàjù páihǎo le ma?",
    "vn": "Tiểu Tuyết, vở kịch của các con tập xong chưa?"
   },
   {
    "zh": "周末我和朋友去剧院看了一场话剧，演员们演得特别好。",
    "py": "Zhōumò wǒ hé péngyou qù jùyuàn kàn le yì chǎng huàjù, yǎnyuánmen yǎn de tèbié hǎo.",
    "vn": "Cuối tuần tôi với bạn đi nhà hát xem một buổi kịch nói, các diễn viên diễn rất hay."
   }
  ],
  "hanzi": [
   {
    "c": "话",
    "p": "huà",
    "type": "左右结构 · Trái-phải",
    "st": 8,
    "ord": "讠 trái → 舌 phải",
    "rad": "讠 (ngôn)",
    "mean": "lời nói",
    "tip": "Lời 讠 + lưỡi 舌 → LỜI NÓI. 对话, 普通话, 笑话, 电话, 说话.",
    "cf": "活 (huó – sống, bộ 氵)",
    "w": "对话 / 普通话 / 笑话 / 电话"
   },
   {
    "c": "剧",
    "p": "jù",
    "type": "左右结构 · Trái-phải (giản thể)",
    "st": 10,
    "ord": "居 trái → 刂 phải",
    "rad": "刂 (đao)",
    "mean": "kịch",
    "tip": "Bộ đao 刂 + 居(biểu âm) → nghĩa gốc là DỮ DỘI, sau chỉ KỊCH (diễn mạnh mẽ), kết hợp 京(Bắc Kinh) thành 京剧 = KINH KỊCH.",
    "cf": "据 (jù – \"căn cứ\", bộ 扌)",
    "w": "京剧 / 电视剧 / 剧场"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Tuần này ở trường, không phải tập kịch thì là lên lớp, bận lắm.",
    "answer": "这周在学校，不是排话剧，就是上课，忙极了。",
    "answerPy": "Zhè zhōu zài xuéxiào, bú shì pái huàjù, jiùshì shàngkè, máng jí le.",
    "note": "不是……就是…… (Bài 19 · điểm 1).",
    "pair": "不是……，就是……"
   },
   {
    "promptLang": "vi",
    "prompt": "Cho dù bận đến mấy, chúng tớ cũng phải tập xong vở kịch trước thứ Sáu.",
    "answer": "即使再忙，我们也要在周五以前把话剧排好。",
    "answerPy": "Jíshǐ zài máng, wǒmen yě yào zài zhōuwǔ yǐqián bǎ huàjù páihǎo.",
    "note": "Ôn 即使……也…… (Bài 11 · điểm 1) + 把 + V + 好 (HSK 3).",
    "pair": "即使……也……"
   }
  ]
 },
 {
  "n": 2,
  "zh": "排",
  "py": "pái",
  "pos": "Động từ",
  "vn": "tập (diễn), dàn dựng (tiết mục)",
  "hv": "bài",
  "em": "🎬",
  "lesson": 1,
  "explain": [
   "Ở bài này 排 = 排练: tập dượt, dàn dựng một tiết mục trước khi biểu diễn (排节目, 排话剧).",
   "Từ đa nghĩa: 排队 (xếp hàng); 排 còn là lượng từ “hàng” (第一排 — hàng ghế đầu)."
  ],
  "usage": "排节目 · 排话剧 · 排好了 · 排了好几遍.",
  "collo": [
   "排节目",
   "排话剧",
   "排好了",
   "排了三遍"
  ],
  "colloFull": [
   {
    "zh": "排节目",
    "py": "Pái jiémù",
    "vn": "tập tiết mục"
   },
   {
    "zh": "排话剧",
    "py": "Pái huàjù",
    "vn": "tập kịch nói"
   },
   {
    "zh": "排好了",
    "py": "Páihǎo le",
    "vn": "tập xong rồi"
   },
   {
    "zh": "排了三遍",
    "py": "Pái le sān biàn",
    "vn": "tập ba lượt"
   }
  ],
  "patterns": [
   {
    "s": "排 + 节目 / 话剧 / 舞蹈",
    "m": "tập dượt một tiết mục"
   },
   {
    "s": "把 + 节目 + 排了 + số + 遍",
    "m": "nhấn số lần tập (Bài 19 · điểm 3)"
   }
  ],
  "ex_zh": "小雪，你们的话剧排好了吗？",
  "ex_py": "Xiǎoxuě, nǐmen de huàjù páihǎo le ma?",
  "ex_vn": "Tiểu Tuyết, vở kịch của các con tập xong chưa?",
  "exList": [
   {
    "zh": "小雪，你们的话剧排好了吗？",
    "py": "Xiǎoxuě, nǐmen de huàjù páihǎo le ma?",
    "vn": "Tiểu Tuyết, vở kịch của các con tập xong chưa?"
   },
   {
    "zh": "为了参加艺术节，我们每天下午都在教室里排节目。",
    "py": "Wèile cānjiā yìshùjié, wǒmen měitiān xiàwǔ dōu zài jiàoshì lǐ pái jiémù.",
    "vn": "Để tham gia lễ hội nghệ thuật, chiều nào chúng tôi cũng tập tiết mục trong lớp."
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
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Chúng tôi tập tiết mục này mười mấy lượt, cuối cùng ai cũng nhớ hết.",
    "answer": "我们把这个节目排了十几遍，最后所有人都记住了。",
    "answerPy": "Wǒmen bǎ zhège jiémù pái le shíjǐ biàn, zuìhòu suǒyǒu rén dōu jìzhù le.",
    "note": "把 + 宾 + 动 + 动量补语 (Bài 19 · điểm 3).",
    "pair": "把……排了十几遍"
   },
   {
    "promptLang": "vi",
    "prompt": "Cả lớp vì muốn tham gia lễ hội nghệ thuật mà ngày nào cũng ở lại tập tiết mục.",
    "answer": "全班同学为了参加艺术节而每天留下来排节目。",
    "answerPy": "Quán bān tóngxué wèile cānjiā yìshùjié ér měitiān liúxia lái pái jiémù.",
    "note": "Ôn 为了……而…… (Bài 12 · điểm 4).",
    "pair": "为了……而……"
   }
  ]
 },
 {
  "n": 3,
  "zh": "艺术",
  "py": "yìshù",
  "pos": "Danh từ",
  "vn": "nghệ thuật",
  "hv": "nghệ thuật",
  "em": "🎨",
  "lesson": 1,
  "explain": [
   "Nghệ thuật: âm nhạc, hội hoạ, sân khấu, điện ảnh, múa… Hay ghép làm định ngữ không cần 的: 艺术节, 艺术家, 艺术作品."
  ],
  "usage": "艺术节 · 艺术家 · 艺术作品 · 京剧艺术.",
  "collo": [
   "艺术节",
   "艺术家",
   "艺术作品",
   "京剧艺术"
  ],
  "colloFull": [
   {
    "zh": "艺术节",
    "py": "Yìshùjié",
    "vn": "lễ hội nghệ thuật"
   },
   {
    "zh": "艺术家",
    "py": "Yìshùjiā",
    "vn": "nghệ sĩ"
   },
   {
    "zh": "艺术作品",
    "py": "Yìshù zuòpǐn",
    "vn": "tác phẩm nghệ thuật"
   },
   {
    "zh": "京剧艺术",
    "py": "Jīngjù yìshù",
    "vn": "nghệ thuật Kinh kịch"
   }
  ],
  "patterns": [
   {
    "s": "艺术 + 节 / 家 / 作品",
    "m": "ghép thẳng làm định ngữ, không thêm 的"
   }
  ],
  "ex_zh": "艺术节周五下午开始，我内心还是有些紧张。",
  "ex_py": "Yìshùjié zhōuwǔ xiàwǔ kāishǐ, wǒ nèixīn háishi yǒuxiē jǐnzhāng.",
  "ex_vn": "Lễ hội nghệ thuật bắt đầu vào chiều thứ Sáu, trong lòng con vẫn hơi hồi hộp.",
  "exList": [
   {
    "zh": "艺术节周五下午开始，我内心还是有些紧张。",
    "py": "Yìshùjié zhōuwǔ xiàwǔ kāishǐ, wǒ nèixīn háishi yǒuxiē jǐnzhāng.",
    "vn": "Lễ hội nghệ thuật bắt đầu vào chiều thứ Sáu, trong lòng con vẫn hơi hồi hộp."
   },
   {
    "zh": "我姐姐从小就喜欢艺术，后来当上了画家。",
    "py": "Wǒ jiějie cóng xiǎo jiù xǐhuan yìshù, hòulái dāngshang le huàjiā.",
    "vn": "Chị tôi từ nhỏ đã thích nghệ thuật, sau này trở thành hoạ sĩ."
   }
  ],
  "hanzi": [
   {
    "c": "艺",
    "p": "yì",
    "type": "上下结构 · Trên-dưới (giản thể)",
    "st": 4,
    "ord": "艹 (thảo) trên → 乙 dưới",
    "rad": "艹 (thảo – cỏ)",
    "mean": "tài nghệ, nghệ thuật",
    "tip": "Chữ giản thể mang nghĩa TÀI NGHỆ, KỸ NĂNG, kết hợp 术(kỹ thuật) thành 艺术 = NGHỆ THUẬT.",
    "cf": "艺 dễ nhầm với 艾 (ài – \"cây ngải\")",
    "w": "艺术 / 手艺 / 艺人"
   },
   {
    "c": "术",
    "p": "shù",
    "type": "独体字 · Chữ đơn thể",
    "st": 5,
    "ord": "木 → 丶",
    "rad": "木 (mộc)",
    "mean": "thuật",
    "tip": "Giản thể của 術 → THUẬT, phương pháp. 技术, 艺术 (Bài 13), 美术.",
    "cf": "木 (mù – gỗ)",
    "w": "技术 / 艺术 / 手术"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Mai Lan Phương là nghệ sĩ Kinh kịch nổi tiếng của Trung Quốc.",
    "answer": "梅兰芳是中国著名的京剧艺术家。",
    "answerPy": "Méi Lánfāng shì Zhōngguó zhùmíng de jīngjù yìshùjiā.",
    "note": "艺术家 = nghệ sĩ (câu bài khoá 2).",
    "pair": "……是……艺术家"
   },
   {
    "promptLang": "vi",
    "prompt": "Lễ hội nghệ thuật năm nay không chỉ học sinh biểu diễn, ngay cả phụ huynh cũng tham gia.",
    "answer": "今年的艺术节不仅学生表演了节目，连家长也参加了。",
    "answerPy": "Jīnnián de yìshùjié bùjǐn xuésheng biǎoyǎn le jiémù, lián jiāzhǎng yě cānjiā le.",
    "note": "Ôn 不仅……也/还…… (Bài 3 · điểm 2) + 连……也…… (Bài 17 · điểm 4).",
    "pair": "不仅……，连……也……"
   }
  ]
 },
 {
  "n": 4,
  "zh": "内心",
  "py": "nèixīn",
  "pos": "Danh từ",
  "vn": "trong lòng, nội tâm",
  "hv": "nội tâm",
  "em": "💓",
  "lesson": 1,
  "explain": [
   "Trong lòng, nội tâm — cảm xúc thật bên trong, nhiều khi không thể hiện ra ngoài. Hay dùng: 内心 + (很/有些) + tính từ cảm xúc (紧张, 感动, 激动)."
  ],
  "usage": "内心很紧张 · 内心很感动 · 内心的想法 · 从内心感谢.",
  "collo": [
   "内心有些紧张",
   "内心很感动",
   "内心的想法",
   "从内心感谢"
  ],
  "colloFull": [
   {
    "zh": "内心有些紧张",
    "py": "Nèixīn yǒuxiē jǐnzhāng",
    "vn": "trong lòng hơi căng thẳng"
   },
   {
    "zh": "内心很感动",
    "py": "Nèixīn hěn gǎndòng",
    "vn": "trong lòng rất cảm động"
   },
   {
    "zh": "内心的想法",
    "py": "Nèixīn de xiǎngfǎ",
    "vn": "suy nghĩ trong lòng"
   },
   {
    "zh": "从内心感谢",
    "py": "Cóng nèixīn gǎnxiè",
    "vn": "cảm ơn từ đáy lòng"
   }
  ],
  "patterns": [
   {
    "s": "主语 + 内心 + (很/有些) + Adj",
    "m": "nói cảm xúc thật bên trong"
   },
   {
    "s": "表面上……，其实内心……",
    "m": "ngoài mặt …, thực ra trong lòng …"
   }
  ],
  "ex_zh": "艺术节周五下午开始，我内心还是有些紧张。",
  "ex_py": "Yìshùjié zhōuwǔ xiàwǔ kāishǐ, wǒ nèixīn háishi yǒuxiē jǐnzhāng.",
  "ex_vn": "Lễ hội nghệ thuật bắt đầu vào chiều thứ Sáu, trong lòng con vẫn hơi hồi hộp.",
  "exList": [
   {
    "zh": "艺术节周五下午开始，我内心还是有些紧张。",
    "py": "Yìshùjié zhōuwǔ xiàwǔ kāishǐ, wǒ nèixīn háishi yǒuxiē jǐnzhāng.",
    "vn": "Lễ hội nghệ thuật bắt đầu vào chiều thứ Sáu, trong lòng con vẫn hơi hồi hộp."
   },
   {
    "zh": "他表面上很平静，其实内心特别激动。",
    "py": "Tā biǎomiàn shàng hěn píngjìng, qíshí nèixīn tèbié jīdòng.",
    "vn": "Ngoài mặt anh ấy rất bình tĩnh, thực ra trong lòng vô cùng xúc động."
   }
  ],
  "hanzi": [
   {
    "c": "内",
    "p": "nèi",
    "type": "半包围结构 · Bán bao vây",
    "st": 4,
    "ord": "冂 bao ngoài → 人 trong",
    "rad": "冂 (quynh)",
    "mean": "bên trong",
    "tip": "Chữ tượng hình một vật đi VÀO bên trong khung 冂 → mở rộng thành BÊN TRONG, TRONG VÒNG (thời gian).",
    "cf": "内 dễ nhầm với 肉 (ròu – \"thịt\")",
    "w": "一年内 / 内容 / 国内"
   },
   {
    "c": "心",
    "p": "xīn",
    "type": "独体字 · Chữ đơn",
    "st": 4,
    "ord": "丶 → 乚 → 丶 → 丶",
    "rad": "心 (tâm)",
    "mean": "tim, lòng",
    "tip": "Chữ tượng hình quả TIM → LÒNG, kết hợp 开(mở) thành 开心 = MỞ LÒNG → VUI VẺ.",
    "cf": "必 (bì – \"ắt\", thêm một nét)",
    "w": "开心 / 心情 / 用心"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Tuy không nói gì, nhưng trong lòng tôi rất cảm động.",
    "answer": "虽然没说什么，但是我内心很感动。",
    "answerPy": "Suīrán méi shuō shénme, dànshì wǒ nèixīn hěn gǎndòng.",
    "note": "Câu 选词填空 của bài; ôn 虽然……但是…… (HSK 3).",
    "pair": "虽然……，但是……"
   },
   {
    "promptLang": "vi",
    "prompt": "Lần đầu lên sân khấu, trên mặt cô ấy tuy đang cười nhưng trong lòng lại rất căng thẳng.",
    "answer": "第一次上台演出，她脸上虽然笑着，内心却特别紧张。",
    "answerPy": "Dì yí cì shàngtái yǎnchū, tā liǎn shàng suīrán xiào zhe, nèixīn què tèbié jǐnzhāng.",
    "note": "Ôn 却 (Bài 16 · điểm 4).",
    "pair": "……，内心却……"
   }
  ]
 },
 {
  "n": 5,
  "zh": "自信",
  "py": "zìxìn",
  "pos": "Tính từ / Danh từ / Động từ",
  "vn": "tự tin; lòng tự tin",
  "hv": "tự tin",
  "em": "💪",
  "lesson": 1,
  "explain": [
   "Tin vào bản thân. Dùng được như tính từ (很自信, 再自信些), danh từ (有自信, 缺少自信) và động từ (他自信能做好)."
  ],
  "usage": "很自信 · 再自信些 · 有自信 · 自信心.",
  "collo": [
   "再自信些",
   "对自己有自信",
   "自信心",
   "更加自信"
  ],
  "colloFull": [
   {
    "zh": "再自信些",
    "py": "Zài zìxìn xiē",
    "vn": "tự tin thêm chút"
   },
   {
    "zh": "对自己有自信",
    "py": "Duì zìjǐ yǒu zìxìn",
    "vn": "tin vào bản thân"
   },
   {
    "zh": "自信心",
    "py": "Zìxìnxīn",
    "vn": "lòng tự tin"
   },
   {
    "zh": "更加自信",
    "py": "Gèngjiā zìxìn",
    "vn": "tự tin hơn"
   }
  ],
  "patterns": [
   {
    "s": "再 + Adj + 些 / 一点儿",
    "m": "lời khuyên: … hơn chút nữa"
   },
   {
    "s": "对 + ai/việc + 有自信",
    "m": "tự tin về …"
   }
  ],
  "ex_zh": "没事，妈妈相信你一定可以。放松些，再自信些！",
  "ex_py": "Méishì, māma xiāngxìn nǐ yídìng kěyǐ. Fàngsōng xiē, zài zìxìn xiē!",
  "ex_vn": "Không sao, mẹ tin con nhất định làm được. Thả lỏng chút, tự tin thêm chút nữa!",
  "exList": [
   {
    "zh": "没事，妈妈相信你一定可以。放松些，再自信些！",
    "py": "Méishì, māma xiāngxìn nǐ yídìng kěyǐ. Fàngsōng xiē, zài zìxìn xiē!",
    "vn": "Không sao, mẹ tin con nhất định làm được. Thả lỏng chút, tự tin thêm chút nữa!"
   },
   {
    "zh": "多上台说中文，你就会越来越自信。",
    "py": "Duō shàngtái shuō Zhōngwén, nǐ jiù huì yuèláiyuè zìxìn.",
    "vn": "Lên sân khấu nói tiếng Trung nhiều vào, con sẽ ngày càng tự tin."
   }
  ],
  "hanzi": [
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
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Sự khích lệ của thầy cô làm cô ấy (Chu Hoa) tự tin hơn, cũng cố gắng hơn.",
    "answer": "老师的鼓励，让她更加自信，也更加努力。",
    "answerPy": "Lǎoshī de gǔlì, ràng tā gèngjiā zìxìn, yě gèngjiā nǔlì.",
    "note": "Bài hoàn thành đoạn văn; ôn 让 + 宾 + … (Bài 18 · điểm 2).",
    "pair": "让……更加自信"
   },
   {
    "promptLang": "vi",
    "prompt": "Đừng căng thẳng, cậu đã tập nhiều lượt như vậy rồi, tự tin thêm chút đi!",
    "answer": "别紧张，你都练了这么多遍了，再自信些！",
    "answerPy": "Bié jǐnzhāng, nǐ dōu liàn le zhème duō biàn le, zài zìxìn xiē!",
    "note": "Ôn 都……了 (HSK 3) + 动量补语 遍.",
    "pair": "再自信些"
   }
  ]
 },
 {
  "n": 6,
  "zh": "少年",
  "py": "shàonián",
  "pos": "Danh từ",
  "vn": "thiếu niên",
  "hv": "thiếu niên",
  "em": "🧒",
  "lesson": 1,
  "explain": [
   "Thiếu niên — tuổi khoảng 10–16. Chú ý 少 ở đây đọc shào (trẻ), không phải shǎo (ít).",
   "Các giai đoạn tuổi: 儿童 → 少年 → 青年 → 中年 → 老年 (老年 — Bài 11)."
  ],
  "usage": "少年歌手 · 少年时代 · 少年宫 · 一个少年.",
  "collo": [
   "少年歌手",
   "少年时代",
   "少年宫",
   "少年儿童"
  ],
  "colloFull": [
   {
    "zh": "少年歌手",
    "py": "Shàonián gēshǒu",
    "vn": "ca sĩ thiếu niên"
   },
   {
    "zh": "少年时代",
    "py": "Shàonián shídài",
    "vn": "thời niên thiếu"
   },
   {
    "zh": "少年宫",
    "py": "Shàonián gōng",
    "vn": "cung thiếu nhi"
   },
   {
    "zh": "少年儿童",
    "py": "Shàonián értóng",
    "vn": "thiếu niên nhi đồng"
   }
  ],
  "patterns": [
   {
    "s": "少年 shàonián ≠ 多少 duōshao",
    "m": "少 hai âm: shào (trẻ) / shǎo (ít)"
   },
   {
    "s": "儿童 → 少年 → 青年 → 中年 → 老年",
    "m": "các giai đoạn tuổi"
   }
  ],
  "ex_zh": "我同学演少年歌手，他的歌声美极了。",
  "ex_py": "Wǒ tóngxué yǎn shàonián gēshǒu, tā de gēshēng měi jí le.",
  "ex_vn": "Bạn con đóng vai ca sĩ thiếu niên, giọng hát của bạn ấy hay tuyệt.",
  "exList": [
   {
    "zh": "我同学演少年歌手，他的歌声美极了。",
    "py": "Wǒ tóngxué yǎn shàonián gēshǒu, tā de gēshēng měi jí le.",
    "vn": "Bạn con đóng vai ca sĩ thiếu niên, giọng hát của bạn ấy hay tuyệt."
   },
   {
    "zh": "他少年时就开始学京剧，现在已经是很有名的演员了。",
    "py": "Tā shàonián shí jiù kāishǐ xué jīngjù, xiànzài yǐjīng shì hěn yǒumíng de yǎnyuán le.",
    "vn": "Anh ấy học Kinh kịch từ thời niên thiếu, bây giờ đã là diễn viên rất nổi tiếng."
   }
  ],
  "hanzi": [
   {
    "c": "少",
    "p": "shào",
    "type": "独体字 · Chữ đơn",
    "st": 4,
    "ord": "小(biến thể) → 丿",
    "rad": "小 (tiểu – nhỏ, biến thể)",
    "mean": "ít",
    "tip": "小(nhỏ) thêm một nét phẩy → càng NHỎ, ÍT hơn nữa; ghép với 多(nhiều) để hỏi SỐ LƯỢNG.",
    "cf": "小 (xiǎo – \"nhỏ\")",
    "w": "不少 / 多少"
   },
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
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Bạn tớ đóng vai ca sĩ thiếu niên, giọng hát của bạn ấy hay tuyệt.",
    "answer": "我同学演少年歌手，他的歌声美极了。",
    "answerPy": "Wǒ tóngxué yǎn shàonián gēshǒu, tā de gēshēng měi jí le.",
    "note": "Câu bài khoá 1; Adj + 极了 (HSK 3).",
    "pair": "演 + vai diễn"
   },
   {
    "promptLang": "vi",
    "prompt": "Thời niên thiếu, anh ấy không phải chơi bóng rổ thì là đá bóng, chẳng bao giờ ở nhà.",
    "answer": "他少年时不是打篮球，就是踢足球，从来不在家待着。",
    "answerPy": "Tā shàonián shí bú shì dǎ lánqiú, jiùshì tī zúqiú, cónglái bú zài jiā dāi zhe.",
    "note": "不是……就是…… (Bài 19 · điểm 1) + ôn 从来 (Bài 9 · điểm 4).",
    "pair": "不是……，就是……"
   }
  ]
 },
 {
  "n": 7,
  "zh": "歌手",
  "py": "gēshǒu",
  "pos": "Danh từ",
  "vn": "ca sĩ",
  "hv": "ca thủ",
  "em": "🎤",
  "lesson": 1,
  "explain": [
   "Người hát (chuyên nghiệp hoặc nghiệp dư). 手 ở đây = người làm / giỏi một việc: 歌手, 选手 (tuyển thủ), 新手 (người mới)."
  ],
  "usage": "少年歌手 · 有名的歌手 · 当歌手 · 一位歌手.",
  "collo": [
   "有名的歌手",
   "青年歌手",
   "当歌手",
   "歌手比赛"
  ],
  "colloFull": [
   {
    "zh": "有名的歌手",
    "py": "Yǒumíng de gēshǒu",
    "vn": "ca sĩ nổi tiếng"
   },
   {
    "zh": "青年歌手",
    "py": "Qīngnián gēshǒu",
    "vn": "ca sĩ trẻ"
   },
   {
    "zh": "当歌手",
    "py": "Dāng gēshǒu",
    "vn": "làm ca sĩ"
   },
   {
    "zh": "歌手比赛",
    "py": "Gēshǒu bǐsài",
    "vn": "cuộc thi ca sĩ"
   }
  ],
  "patterns": [
   {
    "s": "N + 手 → người làm / giỏi việc đó",
    "m": "歌手 / 选手 / 新手"
   }
  ],
  "ex_zh": "我同学演少年歌手，他的歌声美极了。",
  "ex_py": "Wǒ tóngxué yǎn shàonián gēshǒu, tā de gēshēng měi jí le.",
  "ex_vn": "Bạn con đóng vai ca sĩ thiếu niên, giọng hát của bạn ấy hay tuyệt.",
  "exList": [
   {
    "zh": "我同学演少年歌手，他的歌声美极了。",
    "py": "Wǒ tóngxué yǎn shàonián gēshǒu, tā de gēshēng měi jí le.",
    "vn": "Bạn con đóng vai ca sĩ thiếu niên, giọng hát của bạn ấy hay tuyệt."
   },
   {
    "zh": "我从小的理想就是当一名歌手。",
    "py": "Wǒ cóng xiǎo de lǐxiǎng jiùshì dāng yì míng gēshǒu.",
    "vn": "Ước mơ từ nhỏ của tôi là làm ca sĩ."
   }
  ],
  "hanzi": [
   {
    "c": "歌",
    "p": "gē",
    "type": "左右结构 · Trái-phải",
    "st": 14,
    "ord": "哥(ca, 可+可) trái → 欠(khiếm) phải",
    "rad": "欠 (khiếm – ngáp, thở ra)",
    "mean": "bài hát, ca hát",
    "tip": "哥(âm \"ca\", anh trai) + 欠(mở miệng thở ra, hà hơi) → mở miệng cất tiếng ngân nga = BÀI HÁT.",
    "cf": "哥 (gē – \"anh trai\", thiếu bộ 欠 bên phải\")",
    "w": "唱歌 / 歌曲"
   },
   {
    "c": "手",
    "p": "shǒu",
    "type": "独体字 · Chữ đơn",
    "st": 4,
    "ord": "丿(phẩy) → 一(ngang) → 一(ngang) → 亅(móc câu), viết liền một khối",
    "rad": "手 (thủ – tự thành bộ)",
    "mean": "tay",
    "tip": "手 vẽ hình bàn TAY xoè ra với các ngón tay toả ra hai bên → nghĩa TAY.",
    "cf": "毛 (máo – \"lông\", nét cong dưới dễ nhầm)",
    "w": "手机 / 你的手 / 举手"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Ca sĩ này hát hay tuyệt, khán giả vỗ tay không ngớt.",
    "answer": "这位歌手唱得好听极了，观众们不断鼓掌。",
    "answerPy": "Zhè wèi gēshǒu chàng de hǎotīng jí le, guānzhòngmen búduàn gǔzhǎng.",
    "note": "Ôn bổ ngữ trình độ V得 + Adj (HSK 2–3).",
    "pair": "V得……极了"
   },
   {
    "promptLang": "vi",
    "prompt": "Cô ấy muốn làm ca sĩ, mỗi ngày luyện hát ít nhất hai tiếng.",
    "answer": "她想当歌手，每天至少练习唱歌两个小时。",
    "answerPy": "Tā xiǎng dāng gēshǒu, měitiān zhìshǎo liànxí chànggē liǎng gè xiǎoshí.",
    "note": "Ôn 至少 (Bài 5 · điểm 1).",
    "pair": "至少 + V + thời lượng"
   }
  ]
 },
 {
  "n": 8,
  "zh": "歌声",
  "py": "gēshēng",
  "pos": "Danh từ",
  "vn": "tiếng hát, giọng hát",
  "hv": "ca thanh",
  "em": "🎶",
  "lesson": 1,
  "explain": [
   "Tiếng hát nghe được. Phân biệt: 歌手 (người hát) — 歌声 (tiếng hát) — 声音 (âm thanh, giọng nói nói chung)."
  ],
  "usage": "歌声很美 · 好听的歌声 · 听到歌声 · 歌声美极了.",
  "collo": [
   "歌声很美",
   "好听的歌声",
   "听到歌声",
   "快乐的歌声"
  ],
  "colloFull": [
   {
    "zh": "歌声很美",
    "py": "Gēshēng hěn měi",
    "vn": "tiếng hát rất hay"
   },
   {
    "zh": "好听的歌声",
    "py": "Hǎotīng de gēshēng",
    "vn": "giọng hát dễ nghe"
   },
   {
    "zh": "听到歌声",
    "py": "Tīngdào gēshēng",
    "vn": "nghe thấy tiếng hát"
   },
   {
    "zh": "快乐的歌声",
    "py": "Kuàilè de gēshēng",
    "vn": "tiếng hát vui vẻ"
   }
  ],
  "patterns": [
   {
    "s": "……的歌声 + 美 / 好听 + 极了",
    "m": "khen giọng hát"
   }
  ],
  "ex_zh": "他的歌声美极了。",
  "ex_py": "Tā de gēshēng měi jí le.",
  "ex_vn": "Giọng hát của bạn ấy hay tuyệt.",
  "exList": [
   {
    "zh": "他的歌声美极了。",
    "py": "Tā de gēshēng měi jí le.",
    "vn": "Giọng hát của bạn ấy hay tuyệt."
   },
   {
    "zh": "从教室里传来了孩子们快乐的歌声。",
    "py": "Cóng jiàoshì lǐ chuánlái le háizimen kuàilè de gēshēng.",
    "vn": "Từ trong lớp vọng ra tiếng hát vui vẻ của bọn trẻ."
   }
  ],
  "hanzi": [
   {
    "c": "歌",
    "p": "gē",
    "type": "左右结构 · Trái-phải",
    "st": 14,
    "ord": "哥(ca, 可+可) trái → 欠(khiếm) phải",
    "rad": "欠 (khiếm – ngáp, thở ra)",
    "mean": "bài hát, ca hát",
    "tip": "哥(âm \"ca\", anh trai) + 欠(mở miệng thở ra, hà hơi) → mở miệng cất tiếng ngân nga = BÀI HÁT.",
    "cf": "哥 (gē – \"anh trai\", thiếu bộ 欠 bên phải\")",
    "w": "唱歌 / 歌曲"
   },
   {
    "c": "声",
    "p": "shēng",
    "type": "形声字 · Chữ hình thanh",
    "st": 7,
    "ord": "士 → sổ → ngang gập → ngang → phẩy",
    "rad": "士 (sĩ – học trò)",
    "mean": "tiếng, âm thanh",
    "tip": "Trên là 士, dưới như một cái nhạc cụ treo lên — gõ vào thì phát ra tiếng → âm thanh.",
    "cf": "严 yán — trên không phải 士",
    "w": "一声 / 笑声"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Tiếng hát của cô ấy để lại cho tôi ấn tượng rất sâu.",
    "answer": "她的歌声给我留下了很深的印象。",
    "answerPy": "Tā de gēshēng gěi wǒ liúxia le hěn shēn de yìnxiàng.",
    "note": "Ôn 给……留下印象 (bài khoá 2).",
    "pair": "给……留下……印象"
   },
   {
    "promptLang": "vi",
    "prompt": "Tối qua tôi nghe tiếng hát của cô ấy mãi, càng nghe càng thích.",
    "answer": "昨天晚上我一直在听她的歌声，越听越喜欢。",
    "answerPy": "Zuótiān wǎnshang wǒ yìzhí zài tīng tā de gēshēng, yuè tīng yuè xǐhuan.",
    "note": "Ôn 越……越…… (HSK 3).",
    "pair": "越听越喜欢"
   }
  ]
 },
 {
  "n": 9,
  "zh": "度假",
  "py": "dùjià",
  "pos": "Động từ",
  "vn": "đi nghỉ (mát), nghỉ dưỡng",
  "hv": "độ giả",
  "em": "🏖️",
  "lesson": 2,
  "explain": [
   "Đi nghỉ dưỡng, đi nghỉ mát trong kỳ nghỉ. Không mang tân ngữ nơi chốn trực tiếp: 去海边度假 (✗ 度假海边)."
  ],
  "usage": "去……度假 · 在……度假 · 度假时 · 度假村 (khu nghỉ dưỡng).",
  "collo": [
   "去海边度假",
   "出国度假",
   "度假村",
   "度假的时候"
  ],
  "colloFull": [
   {
    "zh": "去海边度假",
    "py": "Qù hǎibiān dùjià",
    "vn": "ra biển nghỉ mát"
   },
   {
    "zh": "出国度假",
    "py": "Chūguó dùjià",
    "vn": "ra nước ngoài nghỉ"
   },
   {
    "zh": "度假村",
    "py": "Dùjià cūn",
    "vn": "khu nghỉ dưỡng"
   },
   {
    "zh": "度假的时候",
    "py": "Dùjià de shíhou",
    "vn": "lúc đi nghỉ"
   }
  ],
  "patterns": [
   {
    "s": "去 / 在 + nơi + 度假",
    "m": "nơi chốn đứng TRƯỚC 度假"
   }
  ],
  "ex_zh": "我小时候在加拿大度假时，在宾馆的电视上看过一次。",
  "ex_py": "Wǒ xiǎoshíhou zài Jiānádà dùjià shí, zài bīnguǎn de diànshì shàng kàn guò yí cì.",
  "ex_vn": "Hồi nhỏ khi đi nghỉ ở Canada, tớ từng xem một lần trên tivi khách sạn.",
  "exList": [
   {
    "zh": "我小时候在加拿大度假时，在宾馆的电视上看过一次。",
    "py": "Wǒ xiǎoshíhou zài Jiānádà dùjià shí, zài bīnguǎn de diànshì shàng kàn guò yí cì.",
    "vn": "Hồi nhỏ khi đi nghỉ ở Canada, tớ từng xem một lần trên tivi khách sạn."
   },
   {
    "zh": "今年暑假，我们全家打算去海边度假。",
    "py": "Jīnnián shǔjià, wǒmen quánjiā dǎsuàn qù hǎibiān dùjià.",
    "vn": "Kỳ nghỉ hè năm nay, cả nhà tôi định ra biển nghỉ mát."
   }
  ],
  "hanzi": [
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
   },
   {
    "c": "假",
    "p": "jià",
    "type": "左右结构 · Trái-phải",
    "st": 11,
    "ord": "亻 trái → 叚 phải",
    "rad": "亻 (nhân)",
    "mean": "giả; nghỉ",
    "tip": "Người 亻 + 叚(mượn) → mượn, không phải thật → GIẢ (jiǎ). Đọc jià = kỳ nghỉ: 寒假, 暑假, 请假.",
    "cf": "段 (duàn – đoạn)",
    "w": "假话 / 假的 / 寒假 (jià) / 请假 (jià)"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Con gái sắp nghỉ hè rồi, năm nay cả nhà mình đi đâu nghỉ mát?",
    "answer": "女儿马上放假了，今年咱们全家去哪儿度假？",
    "answerPy": "Nǚ'ér mǎshàng fàngjià le, jīnnián zánmen quánjiā qù nǎr dùjià?",
    "note": "Câu 选词填空 của bài.",
    "pair": "去哪儿度假"
   },
   {
    "promptLang": "vi",
    "prompt": "Đi nghỉ không nhất thiết phải ra nước ngoài, về quê cũng rất thư giãn.",
    "answer": "度假不一定要出国，回老家也很放松。",
    "answerPy": "Dùjià bùyídìng yào chūguó, huí lǎojiā yě hěn fàngsōng.",
    "note": "Ôn 不一定 (HSK 3).",
    "pair": "不一定……"
   }
  ]
 },
 {
  "n": 10,
  "zh": "演员",
  "py": "yǎnyuán",
  "pos": "Danh từ",
  "vn": "diễn viên",
  "hv": "diễn viên",
  "em": "🎭",
  "lesson": 2,
  "explain": [
   "Người biểu diễn trên sân khấu, phim ảnh: 京剧演员, 电影演员, 话剧演员."
  ],
  "usage": "京剧演员 · 电影演员 · 当演员 · 青年演员.",
  "collo": [
   "京剧演员",
   "青年演员",
   "话剧演员",
   "当演员"
  ],
  "colloFull": [
   {
    "zh": "京剧演员",
    "py": "Jīngjù yǎnyuán",
    "vn": "diễn viên Kinh kịch"
   },
   {
    "zh": "青年演员",
    "py": "Qīngnián yǎnyuán",
    "vn": "diễn viên trẻ"
   },
   {
    "zh": "话剧演员",
    "py": "Huàjù yǎnyuán",
    "vn": "diễn viên kịch nói"
   },
   {
    "zh": "当演员",
    "py": "Dāng yǎnyuán",
    "vn": "làm diễn viên"
   }
  ],
  "patterns": [
   {
    "s": "演员们 + 演得 + Adj",
    "m": "nhận xét diễn xuất (bổ ngữ trình độ)"
   }
  ],
  "ex_zh": "是梅兰芳等演员演的，演员们都非常棒。",
  "ex_py": "Shì Méi Lánfāng děng yǎnyuán yǎn de, yǎnyuánmen dōu fēicháng bàng.",
  "ex_vn": "Là do các diễn viên như Mai Lan Phương diễn, các diễn viên đều cực kỳ giỏi.",
  "exList": [
   {
    "zh": "是梅兰芳等演员演的，演员们都非常棒。",
    "py": "Shì Méi Lánfāng děng yǎnyuán yǎn de, yǎnyuánmen dōu fēicháng bàng.",
    "vn": "Là do các diễn viên như Mai Lan Phương diễn, các diễn viên đều cực kỳ giỏi."
   },
   {
    "zh": "这位演员不仅会演戏，还会唱歌。",
    "py": "Zhè wèi yǎnyuán bùjǐn huì yǎn xì, hái huì chànggē.",
    "vn": "Diễn viên này không chỉ biết diễn kịch mà còn biết hát."
   }
  ],
  "hanzi": [
   {
    "c": "演",
    "p": "yǎn",
    "type": "左右结构 · Trái-phải",
    "st": 14,
    "ord": "氵 (thủy) trái → 寅 phải",
    "rad": "氵 (thủy)",
    "mean": "diễn",
    "tip": "Bộ nước 氵 (chảy dài, triển khai) + 寅 → TRIỂN KHAI, DIỄN, kết hợp 员(người) thành 演员 = DIỄN VIÊN.",
    "cf": "寅 (yín – chi Dần)",
    "w": "演员 / 演出 / 表演"
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
    "prompt": "Những diễn viên này rất chuyên nghiệp, có người còn từng đoạt giải quốc tế lớn.",
    "answer": "这些演员很专业，有的还获过国际大奖。",
    "answerPy": "Zhèxiē yǎnyuán hěn zhuānyè, yǒude hái huò guò guójì dàjiǎng.",
    "note": "Câu bài khoá 3; ôn V + 过 (HSK 2), 有的…… (HSK 3).",
    "pair": "有的还……"
   },
   {
    "promptLang": "vi",
    "prompt": "Để diễn cho tốt, người diễn viên ấy luyện động tác này cả một buổi sáng.",
    "answer": "为了演好，那位演员把这个动作练了一个上午。",
    "answerPy": "Wèile yǎn hǎo, nà wèi yǎnyuán bǎ zhège dòngzuò liàn le yí gè shàngwǔ.",
    "note": "把 + 宾 + 动 + 时量补语 (Bài 19 · điểm 4).",
    "pair": "把……练了一个上午"
   }
  ]
 },
 {
  "n": 11,
  "zh": "演唱",
  "py": "yǎnchàng",
  "pos": "Động từ",
  "vn": "biểu diễn (hát), trình bày ca khúc",
  "hv": "diễn xướng",
  "em": "🎙️",
  "lesson": 2,
  "explain": [
   "Hát biểu diễn trên sân khấu — trang trọng hơn 唱. Dùng cho ca sĩ, diễn viên kịch hát: 演唱一首歌, 演唱会 (buổi biểu diễn ca nhạc, concert)."
  ],
  "usage": "演唱歌曲 · 演唱会 · 演唱得很好 · 现场演唱.",
  "collo": [
   "演唱会",
   "演唱一首歌",
   "现场演唱",
   "演唱得好听极了"
  ],
  "colloFull": [
   {
    "zh": "演唱会",
    "py": "Yǎnchànghuì",
    "vn": "buổi biểu diễn ca nhạc"
   },
   {
    "zh": "演唱一首歌",
    "py": "Yǎnchàng yì shǒu gē",
    "vn": "trình bày một bài hát"
   },
   {
    "zh": "现场演唱",
    "py": "Xiànchǎng yǎnchàng",
    "vn": "hát trực tiếp"
   },
   {
    "zh": "演唱得好听极了",
    "py": "Yǎnchàng de hǎotīng jí le",
    "vn": "hát hay tuyệt"
   }
  ],
  "patterns": [
   {
    "s": "演唱 vs 唱",
    "m": "演唱: trang trọng, trên sân khấu; 唱: dùng hằng ngày (唱歌, ✗ 演唱卡拉OK)"
   }
  ],
  "ex_zh": "他们演唱得好听极了。",
  "ex_py": "Tāmen yǎnchàng de hǎotīng jí le.",
  "ex_vn": "Họ hát hay tuyệt.",
  "exList": [
   {
    "zh": "他们演唱得好听极了。",
    "py": "Tāmen yǎnchàng de hǎotīng jí le.",
    "vn": "Họ hát hay tuyệt."
   },
   {
    "zh": "周末我和朋友去看了一场演唱会，人特别多。",
    "py": "Zhōumò wǒ hé péngyou qù kàn le yì chǎng yǎnchànghuì, rén tèbié duō.",
    "vn": "Cuối tuần tôi với bạn đi xem một buổi biểu diễn ca nhạc, người đông kinh khủng."
   }
  ],
  "hanzi": [
   {
    "c": "演",
    "p": "yǎn",
    "type": "左右结构 · Trái-phải",
    "st": 14,
    "ord": "氵 (thủy) trái → 寅 phải",
    "rad": "氵 (thủy)",
    "mean": "diễn",
    "tip": "Bộ nước 氵 (chảy dài, triển khai) + 寅 → TRIỂN KHAI, DIỄN, kết hợp 员(người) thành 演员 = DIỄN VIÊN.",
    "cf": "寅 (yín – chi Dần)",
    "w": "演员 / 演出 / 表演"
   },
   {
    "c": "唱",
    "p": "chàng",
    "type": "左右结构 · Trái-phải",
    "st": 11,
    "ord": "口(khẩu) trái → 昌(xương, 日+日) phải",
    "rad": "口 (khẩu – miệng)",
    "mean": "hát, xướng",
    "tip": "口(miệng) + 昌(hưng thịnh, sáng rực, gồm hai chữ 日) → dùng MIỆNG cất lên tiếng vang rực rỡ = HÁT.",
    "cf": "唯 (wéi – \"chỉ, duy\", cùng bộ 口 bên trái\")",
    "w": "唱歌 / 演唱"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Họ hát hay tuyệt, để lại cho tớ ấn tượng đặc biệt sâu.",
    "answer": "他们演唱得好听极了，给我留下的印象特别深。",
    "answerPy": "Tāmen yǎnchàng de hǎotīng jí le, gěi wǒ liúxia de yìnxiàng tèbié shēn.",
    "note": "Câu bài khoá 2.",
    "pair": "演唱得……"
   },
   {
    "promptLang": "vi",
    "prompt": "Buổi biểu diễn ca nhạc tối nay không ở nhà hát thì ở sân vận động, cậu tra lại xem.",
    "answer": "今晚的演唱会不是在剧院，就是在体育馆，你再查一下。",
    "answerPy": "Jīnwǎn de yǎnchànghuì bú shì zài jùyuàn, jiùshì zài tǐyùguǎn, nǐ zài chá yíxià.",
    "note": "不是……就是…… (Bài 19 · điểm 1).",
    "pair": "不是……，就是……"
   }
  ]
 },
 {
  "n": 12,
  "zh": "留下",
  "py": "liúxia",
  "pos": "Động từ",
  "vn": "để lại, lưu lại; ở lại",
  "hv": "lưu hạ",
  "em": "📌",
  "lesson": 2,
  "explain": [
   "Để lại (ấn tượng, kỷ niệm, đồ vật…) hoặc ở lại. Bài này: 给 + ai + 留下 + 印象. Sách ghi liúxia (下 đọc nhẹ)."
  ],
  "usage": "留下印象 · 留下回忆 · 留下来 · 留下名字.",
  "collo": [
   "留下印象",
   "留下很深的印象",
   "留下电话号码",
   "留下来加班"
  ],
  "colloFull": [
   {
    "zh": "留下印象",
    "py": "Liúxia yìnxiàng",
    "vn": "để lại ấn tượng"
   },
   {
    "zh": "留下很深的印象",
    "py": "Liúxia hěn shēn de yìnxiàng",
    "vn": "để lại ấn tượng sâu"
   },
   {
    "zh": "留下电话号码",
    "py": "Liúxia diànhuà hàomǎ",
    "vn": "để lại số điện thoại"
   },
   {
    "zh": "留下来加班",
    "py": "Liúxia lái jiābān",
    "vn": "ở lại tăng ca"
   }
  ],
  "patterns": [
   {
    "s": "给 + ai + 留下 + (很深的) 印象",
    "m": "để lại ấn tượng cho ai"
   },
   {
    "s": "……给我留下的印象 + 很深",
    "m": "đảo cụm thành chủ ngữ (như bài khoá)"
   }
  ],
  "ex_zh": "他们演唱得好听极了，给我留下的印象特别深。",
  "ex_py": "Tāmen yǎnchàng de hǎotīng jí le, gěi wǒ liúxia de yìnxiàng tèbié shēn.",
  "ex_vn": "Họ hát hay tuyệt, ấn tượng để lại cho tớ đặc biệt sâu.",
  "exList": [
   {
    "zh": "他们演唱得好听极了，给我留下的印象特别深。",
    "py": "Tāmen yǎnchàng de hǎotīng jí le, gěi wǒ liúxia de yìnxiàng tèbié shēn.",
    "vn": "Họ hát hay tuyệt, ấn tượng để lại cho tớ đặc biệt sâu."
   },
   {
    "zh": "这次旅行给我们留下了很多美好的回忆。",
    "py": "Zhè cì lǚxíng gěi wǒmen liúxia le hěn duō měihǎo de huíyì.",
    "vn": "Chuyến đi này để lại cho chúng tôi rất nhiều kỷ niệm đẹp."
   }
  ],
  "hanzi": [
   {
    "c": "留",
    "p": "liú",
    "type": "上下结构 · Trên-dưới",
    "st": 10,
    "ord": "卯 trên → 田 (điền) dưới",
    "rad": "田 (điền – ruộng)",
    "mean": "ở lại, giữ lại",
    "tip": "Hình tượng người dừng chân ở lại RUỘNG ĐỒNG 田 → Ở LẠI, GIỮ LẠI, mở rộng thành ĐỂ LẠI (ấn tượng, dấu vết).",
    "cf": "留 dễ nhầm với 溜 (liū – \"trượt\", thêm bộ 氵\")",
    "w": "留下 / 留学 / 保留"
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
    "w": "下来 / 下雨 / 下雪"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Tác phẩm đó viết rất hay, để lại cho chúng tôi ấn tượng rất sâu.",
    "answer": "那部作品写得很棒，给我们留下了很深的印象。",
    "answerPy": "Nà bù zuòpǐn xiě de hěn bàng, gěi wǒmen liúxia le hěn shēn de yìnxiàng.",
    "note": "Câu 选词填空 của bài.",
    "pair": "给……留下……印象"
   },
   {
    "promptLang": "vi",
    "prompt": "Tuy chỉ ở Bắc Kinh ba ngày, nhưng thành phố này để lại cho tôi ấn tượng rất tốt.",
    "answer": "虽然只在北京待了三天，但是这个城市给我留下了很好的印象。",
    "answerPy": "Suīrán zhǐ zài Běijīng dāi le sān tiān, dànshì zhège chéngshì gěi wǒ liúxia le hěn hǎo de yìnxiàng.",
    "note": "Ôn 虽然……但是…… (HSK 3) + 时量补语.",
    "pair": "给……留下了……印象"
   }
  ]
 },
 {
  "n": 13,
  "zh": "青年",
  "py": "qīngnián",
  "pos": "Danh từ",
  "vn": "thanh niên, người trẻ",
  "hv": "thanh niên",
  "em": "🧑",
  "lesson": 2,
  "explain": [
   "Thanh niên (khoảng 18–35 tuổi). Hay làm định ngữ chỉ người trẻ trong nghề: 青年演员, 青年作家, 青年歌手."
  ],
  "usage": "青年演员 · 青年作家 · 青年人 · 优秀青年.",
  "collo": [
   "青年演员",
   "青年作家",
   "青年人",
   "青年时代"
  ],
  "colloFull": [
   {
    "zh": "青年演员",
    "py": "Qīngnián yǎnyuán",
    "vn": "diễn viên trẻ"
   },
   {
    "zh": "青年作家",
    "py": "Qīngnián zuòjiā",
    "vn": "nhà văn trẻ"
   },
   {
    "zh": "青年人",
    "py": "Qīngnián rén",
    "vn": "thanh niên, người trẻ"
   },
   {
    "zh": "青年时代",
    "py": "Qīngnián shídài",
    "vn": "thời thanh niên"
   }
  ],
  "patterns": [
   {
    "s": "青年 + N (nghề)",
    "m": "青年演员 / 青年作家 / 青年歌手"
   }
  ],
  "ex_zh": "咱们要看的这个京剧是青年演员们演的。",
  "ex_py": "Zánmen yào kàn de zhège jīngjù shì qīngnián yǎnyuánmen yǎn de.",
  "ex_vn": "Vở Kinh kịch chúng ta sắp xem là do các diễn viên trẻ diễn.",
  "exList": [
   {
    "zh": "咱们要看的这个京剧是青年演员们演的。",
    "py": "Zánmen yào kàn de zhège jīngjù shì qīngnián yǎnyuánmen yǎn de.",
    "vn": "Vở Kinh kịch chúng ta sắp xem là do các diễn viên trẻ diễn."
   },
   {
    "zh": "这个作者是现在最受欢迎的青年作家。",
    "py": "Zhège zuòzhě shì xiànzài zuì shòu huānyíng de qīngnián zuòjiā.",
    "vn": "Tác giả này là nhà văn trẻ được yêu thích nhất hiện nay."
   }
  ],
  "hanzi": [
   {
    "c": "青",
    "p": "qīng",
    "type": "形声字 · Chữ hình thanh",
    "st": 8,
    "ord": "龶 → 月",
    "rad": "青 (thanh – xanh)",
    "mean": "xanh (lá cây, da trời); trẻ",
    "tip": "Trên là 生 biến thể (cây non mọc lên), dưới là 丹/月: màu của mầm cây non → xanh; người còn “xanh” → trẻ: 青年 (thanh niên), 青春. 青 còn là thành phần gợi âm của 请, 情, 清, 晴.",
    "cf": "请 qǐng (mời) — thêm 讠; 清 qīng (trong) — thêm 氵; 晴 qíng (nắng) — thêm 日",
    "w": "青年 / 青春 / 青菜"
   },
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
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Vở Kinh kịch chúng ta sắp xem là do các diễn viên trẻ diễn.",
    "answer": "咱们要看的这个京剧是青年演员们演的。",
    "answerPy": "Zánmen yào kàn de zhège jīngjù shì qīngnián yǎnyuánmen yǎn de.",
    "note": "Ôn 是……的 nhấn mạnh người làm (HSK 2–3).",
    "pair": "是……演的"
   },
   {
    "promptLang": "vi",
    "prompt": "Ngày nay ngày càng nhiều người trẻ thích Kinh kịch.",
    "answer": "现在，越来越多的青年人喜欢上了京剧。",
    "answerPy": "Xiànzài, yuèláiyuè duō de qīngnián rén xǐhuan shàng le jīngjù.",
    "note": "Ôn 越来越 (HSK 3).",
    "pair": "越来越多的……"
   }
  ]
 },
 {
  "n": 14,
  "zh": "观众",
  "py": "guānzhòng",
  "pos": "Danh từ",
  "vn": "khán giả, người xem",
  "hv": "quan chúng",
  "em": "👏",
  "lesson": 2,
  "explain": [
   "Người xem (kịch, phim, thi đấu, truyền hình).",
   "Bẫy Hán Việt: 观众 = khán giả, không phải “quần chúng” (群众 qúnzhòng)."
  ],
  "usage": "观众们 · 现场观众 · 电视观众 · 受观众欢迎.",
  "collo": [
   "现场观众",
   "电视观众",
   "受观众欢迎",
   "观众们不断鼓掌"
  ],
  "colloFull": [
   {
    "zh": "现场观众",
    "py": "Xiànchǎng guānzhòng",
    "vn": "khán giả tại chỗ"
   },
   {
    "zh": "电视观众",
    "py": "Diànshì guānzhòng",
    "vn": "khán giả truyền hình"
   },
   {
    "zh": "受观众欢迎",
    "py": "Shòu guānzhòng huānyíng",
    "vn": "được khán giả yêu thích"
   },
   {
    "zh": "观众们不断鼓掌",
    "py": "Guānzhòngmen búduàn gǔzhǎng",
    "vn": "khán giả vỗ tay không ngớt"
   }
  ],
  "patterns": [
   {
    "s": "受 + 观众 + (的) 欢迎",
    "m": "được khán giả hoan nghênh"
   }
  ],
  "ex_zh": "要去看的观众也特别多。",
  "ex_py": "Yào qù kàn de guānzhòng yě tèbié duō.",
  "ex_vn": "Khán giả muốn đi xem cũng rất đông.",
  "exList": [
   {
    "zh": "要去看的观众也特别多。",
    "py": "Yào qù kàn de guānzhòng yě tèbié duō.",
    "vn": "Khán giả muốn đi xem cũng rất đông."
   },
   {
    "zh": "演出结束后，观众们都站起来为演员鼓掌。",
    "py": "Yǎnchū jiéshù hòu, guānzhòngmen dōu zhàn qǐlai wèi yǎnyuán gǔzhǎng.",
    "vn": "Buổi diễn kết thúc, khán giả đều đứng dậy vỗ tay cho diễn viên."
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
    "c": "众",
    "p": "zhòng",
    "type": "品字结构 · Ba chữ 人",
    "st": 6,
    "ord": "人 trên → 人人 dưới",
    "rad": "人 (nhân)",
    "mean": "đông người",
    "tip": "Chữ hội ý ba người 人 → ĐÔNG NGƯỜI, kết hợp 观(xem) thành 观众 = KHÁN GIẢ.",
    "cf": "从 (cóng – hai chữ 人)",
    "w": "观众 / 大众 / 群众"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Khán giả đến xem rất đông, ngay cả một vé cũng không mua được nữa.",
    "answer": "来看的观众特别多，连一张票都买不到了。",
    "answerPy": "Lái kàn de guānzhòng tèbié duō, lián yì zhāng piào dōu mǎi bu dào le.",
    "note": "Ôn 连……都…… (Bài 17 · điểm 4) + 可能补语 买不到.",
    "pair": "连……都……"
   },
   {
    "promptLang": "vi",
    "prompt": "Bộ phim này rất được khán giả yêu thích, tôi đã xem nó ba lượt rồi.",
    "answer": "这部电影很受观众欢迎，我已经把它看了三遍了。",
    "answerPy": "Zhè bù diànyǐng hěn shòu guānzhòng huānyíng, wǒ yǐjīng bǎ tā kàn le sān biàn le.",
    "note": "把 + 宾 + 动 + 动量补语 (Bài 19 · điểm 3).",
    "pair": "把……看了三遍"
   }
  ]
 },
 {
  "n": 15,
  "zh": "功课",
  "py": "gōngkè",
  "pos": "Danh từ",
  "vn": "bài vở; (做功课) tìm hiểu, chuẩn bị trước",
  "hv": "công khoá",
  "em": "📚",
  "lesson": 2,
  "explain": [
   "Nghĩa gốc: bài vở, bài tập ở trường.",
   "Nghĩa mở rộng trong bài: 做功课 = tìm hiểu, chuẩn bị trước khi làm việc gì (đi xem kịch, đi du lịch, đi phỏng vấn)."
  ],
  "usage": "做功课 · 做做功课 · 功课很多 · 提前做功课.",
  "collo": [
   "做功课",
   "提前做功课",
   "功课很多",
   "复习功课"
  ],
  "colloFull": [
   {
    "zh": "做功课",
    "py": "Zuò gōngkè",
    "vn": "làm bài / chuẩn bị trước"
   },
   {
    "zh": "提前做功课",
    "py": "Tíqián zuò gōngkè",
    "vn": "chuẩn bị trước"
   },
   {
    "zh": "功课很多",
    "py": "Gōngkè hěn duō",
    "vn": "bài vở nhiều"
   },
   {
    "zh": "复习功课",
    "py": "Fùxí gōngkè",
    "vn": "ôn bài"
   }
  ],
  "patterns": [
   {
    "s": "做做功课",
    "m": "lặp động từ: làm thử, làm một chút"
   }
  ],
  "ex_zh": "咱们先做做功课，提前了解下，能懂一点儿是一点儿。",
  "ex_py": "Zánmen xiān zuòzuo gōngkè, tíqián liǎojiě xià, néng dǒng yìdiǎnr shì yìdiǎnr.",
  "ex_vn": "Chúng mình cứ chuẩn bị trước đã, tìm hiểu trước một chút, hiểu được chút nào hay chút ấy.",
  "exList": [
   {
    "zh": "咱们先做做功课，提前了解下，能懂一点儿是一点儿。",
    "py": "Zánmen xiān zuòzuo gōngkè, tíqián liǎojiě xià, néng dǒng yìdiǎnr shì yìdiǎnr.",
    "vn": "Chúng mình cứ chuẩn bị trước đã, tìm hiểu trước một chút, hiểu được chút nào hay chút ấy."
   },
   {
    "zh": "去面试以前，你最好先做做功课，了解一下那家公司。",
    "py": "Qù miànshì yǐqián, nǐ zuìhǎo xiān zuòzuo gōngkè, liǎojiě yíxià nà jiā gōngsī.",
    "vn": "Trước khi đi phỏng vấn, bạn nên tìm hiểu trước một chút về công ty đó."
   }
  ],
  "hanzi": [
   {
    "c": "功",
    "p": "gōng",
    "type": "左右结构 · Trái-phải",
    "st": 5,
    "ord": "工 trái → 力 phải",
    "rad": "力 (lực)",
    "mean": "công lao, hiệu quả",
    "tip": "Chữ hội ý 工(việc) + 力(sức) → CÔNG LAO, HIỆU QUẢ; 事半功倍 = việc nửa, công gấp đôi.",
    "cf": "攻 (gōng – \"tấn công\", bộ 攵)",
    "w": "事半功倍 / 成功 / 功课"
   },
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
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Trước khi đi du lịch, chúng mình chuẩn bị trước đã, tìm hiểu được chút nào hay chút ấy.",
    "answer": "去旅行以前，咱们先做做功课，了解一点儿是一点儿。",
    "answerPy": "Qù lǚxíng yǐqián, zánmen xiān zuòzuo gōngkè, liǎojiě yìdiǎnr shì yìdiǎnr.",
    "note": "动 + 一 × 是一 × (Bài 19 · điểm 2).",
    "pair": "……一点儿是一点儿"
   },
   {
    "promptLang": "vi",
    "prompt": "Học kỳ này bài vở rất nhiều, ngay cả cuối tuần cũng không được nghỉ.",
    "answer": "这个学期功课特别多，连周末也不能休息。",
    "answerPy": "Zhège xuéqī gōngkè tèbié duō, lián zhōumò yě bù néng xiūxi.",
    "note": "Ôn 连……也…… (Bài 17 · điểm 4).",
    "pair": "连……也……"
   }
  ]
 },
 {
  "n": 16,
  "zh": "转发",
  "py": "zhuǎnfā",
  "pos": "Động từ",
  "vn": "chuyển tiếp, chia sẻ lại",
  "hv": "chuyển phát",
  "em": "📤",
  "lesson": 2,
  "explain": [
   "Chuyển tiếp (tin nhắn, email, bài viết) cho người khác; chia sẻ lại trên mạng xã hội.",
   "Bẫy Hán Việt: không phải “chuyển phát” bưu phẩm (gửi hàng là 快递 / 寄)."
  ],
  "usage": "转发给…… · 转发信息 · 转发文章 · 把……转发给…….",
  "collo": [
   "转发给大家",
   "转发信息",
   "转发文章",
   "转发到朋友圈"
  ],
  "colloFull": [
   {
    "zh": "转发给大家",
    "py": "Zhuǎnfā gěi dàjiā",
    "vn": "chuyển tiếp cho mọi người"
   },
   {
    "zh": "转发信息",
    "py": "Zhuǎnfā xìnxī",
    "vn": "chuyển tiếp tin nhắn"
   },
   {
    "zh": "转发文章",
    "py": "Zhuǎnfā wénzhāng",
    "vn": "chia sẻ bài viết"
   },
   {
    "zh": "转发到朋友圈",
    "py": "Zhuǎnfā dào péngyouquān",
    "vn": "chia sẻ lên vòng bạn bè (WeChat)"
   }
  ],
  "patterns": [
   {
    "s": "把 + 信息/文章 + 转发给 + ai",
    "m": "câu chữ 把 với 给"
   }
  ],
  "ex_zh": "对，我先去网上查资料，查完后也转发给你们。",
  "ex_py": "Duì, wǒ xiān qù wǎngshang chá zīliào, chá wán hòu yě zhuǎnfā gěi nǐmen.",
  "ex_vn": "Đúng, tớ lên mạng tra tài liệu trước, tra xong cũng chuyển cho các cậu.",
  "exList": [
   {
    "zh": "对，我先去网上查资料，查完后也转发给你们。",
    "py": "Duì, wǒ xiān qù wǎngshang chá zīliào, chá wán hòu yě zhuǎnfā gěi nǐmen.",
    "vn": "Đúng, tớ lên mạng tra tài liệu trước, tra xong cũng chuyển cho các cậu."
   },
   {
    "zh": "经理给我发了几条信息，我把他的信息转发给你。",
    "py": "Jīnglǐ gěi wǒ fā le jǐ tiáo xìnxī, wǒ bǎ tā de xìnxī zhuǎnfā gěi nǐ.",
    "vn": "Quản lý gửi cho tôi mấy tin nhắn, tôi chuyển tiếp tin nhắn của anh ấy cho cậu."
   }
  ],
  "hanzi": [
   {
    "c": "转",
    "p": "zhuǎn",
    "type": "左右结构 · Trái-phải",
    "st": 8,
    "ord": "车 trái → 专 phải",
    "rad": "车 (xa)",
    "mean": "quay",
    "tip": "Xe 车 + 专 → bánh xe QUAY → CHUYỂN. zhuǎn = đổi hướng (左转); zhuàn = quay tròn. 传 (Bài 16) cũng có 专.",
    "cf": "传 (chuán – truyền)",
    "w": "转 / 左转 / 转身 / 转告"
   },
   {
    "c": "发",
    "p": "fā",
    "type": "独体字 · Chữ đơn thể",
    "st": 5,
    "ord": "𠂇 → 又 → 丶",
    "rad": "又 (hựu)",
    "mean": "phát",
    "tip": "Giản thể của 發 → PHÁT. 出发, 发生 (Bài 7), 发展 (Bài 10), 沙发 (Bài 11); đọc fà = tóc (理发 Bài 19).",
    "cf": "友 (yǒu – bạn)",
    "w": "出发 / 发生 / 发展 / 理发 (fà)"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Tôi chuyển tiếp tin nhắn của quản lý cho cậu nhé.",
    "answer": "我把经理的信息转发给你吧。",
    "answerPy": "Wǒ bǎ jīnglǐ de xìnxī zhuǎnfā gěi nǐ ba.",
    "note": "Câu chữ 把 + V + 给 (HSK 3).",
    "pair": "把……转发给……"
   },
   {
    "promptLang": "vi",
    "prompt": "Bài viết này hay quá, tôi đã chia sẻ cho các bạn trong lớp rồi.",
    "answer": "这篇文章写得太好了，我已经转发给班里的同学了。",
    "answerPy": "Zhè piān wénzhāng xiě de tài hǎo le, wǒ yǐjīng zhuǎnfā gěi bān lǐ de tóngxué le.",
    "note": "Ôn V得 + Adj; 篇 là lượng từ của bài viết.",
    "pair": "转发给……"
   }
  ]
 },
 {
  "n": 17,
  "zh": "入口",
  "py": "rùkǒu",
  "pos": "Danh từ",
  "vn": "lối vào, cửa vào",
  "hv": "nhập khẩu",
  "em": "🚪",
  "lesson": 2,
  "explain": [
   "Lối vào, cửa vào; đối lập 出口 (lối ra).",
   "Bẫy Hán Việt: 入口 = lối vào; “nhập khẩu hàng hoá” tiếng Trung là 进口."
  ],
  "usage": "在入口见 · 大剧院入口 · 地铁入口 · 入口处.",
  "collo": [
   "大剧院入口",
   "入口处",
   "地铁入口",
   "入口和出口"
  ],
  "colloFull": [
   {
    "zh": "大剧院入口",
    "py": "Dà jùyuàn rùkǒu",
    "vn": "lối vào nhà hát lớn"
   },
   {
    "zh": "入口处",
    "py": "Rùkǒu chù",
    "vn": "chỗ lối vào"
   },
   {
    "zh": "地铁入口",
    "py": "Dìtiě rùkǒu",
    "vn": "cửa vào ga tàu điện"
   },
   {
    "zh": "入口和出口",
    "py": "Rùkǒu hé chūkǒu",
    "vn": "lối vào và lối ra"
   }
  ],
  "patterns": [
   {
    "s": "在 + nơi + 入口 + 见",
    "m": "hẹn gặp ở lối vào"
   },
   {
    "s": "入口 ↔ 出口",
    "m": "lối vào ↔ lối ra"
   }
  ],
  "ex_zh": "那我就在网上订票了，到时候咱们在大剧院入口见。",
  "ex_py": "Nà wǒ jiù zài wǎngshang dìng piào le, dào shíhou zánmen zài dà jùyuàn rùkǒu jiàn.",
  "ex_vn": "Vậy tớ đặt vé trên mạng nhé, đến lúc đó chúng mình gặp nhau ở lối vào nhà hát lớn.",
  "exList": [
   {
    "zh": "那我就在网上订票了，到时候咱们在大剧院入口见。",
    "py": "Nà wǒ jiù zài wǎngshang dìng piào le, dào shíhou zánmen zài dà jùyuàn rùkǒu jiàn.",
    "vn": "Vậy tớ đặt vé trên mạng nhé, đến lúc đó chúng mình gặp nhau ở lối vào nhà hát lớn."
   },
   {
    "zh": "地铁站的入口在银行旁边，出口在马路对面。",
    "py": "Dìtiězhàn de rùkǒu zài yínháng pángbiān, chūkǒu zài mǎlù duìmiàn.",
    "vn": "Lối vào ga tàu điện ngầm ở bên cạnh ngân hàng, lối ra ở bên kia đường."
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
    "c": "口",
    "p": "kǒu",
    "type": "独体字 · Chữ đơn (tượng hình)",
    "st": 3,
    "ord": "nét liền, hình cái miệng",
    "rad": "口 (khẩu)",
    "mean": "miệng",
    "tip": "Chữ tượng hình mô phỏng hình cái MIỆNG đang mở → MIỆNG, mở rộng làm lượng từ đếm miếng/ngụm.",
    "cf": "囗 (wéi – bộ \"vi\", nét vuông đơn giản hơn\")",
    "w": "一口 / 口水 / 门口"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Đến lúc đó chúng ta gặp nhau ở lối vào nhà hát lớn.",
    "answer": "到时候咱们在大剧院入口见。",
    "answerPy": "Dào shíhou zánmen zài dà jùyuàn rùkǒu jiàn.",
    "note": "Câu bài khoá 2.",
    "pair": "在……入口见"
   },
   {
    "promptLang": "vi",
    "prompt": "Cậu đến lối vào thì gọi cho tớ, nói không chừng tớ đến muộn mấy phút.",
    "answer": "你到了入口就给我打电话，说不定我会晚到几分钟。",
    "answerPy": "Nǐ dào le rùkǒu jiù gěi wǒ dǎdiànhuà, shuōbudìng wǒ huì wǎn dào jǐ fēnzhōng.",
    "note": "Ôn 说不定 (Bài 16 · điểm 3).",
    "pair": "说不定……"
   }
  ]
 },
 {
  "n": 18,
  "zh": "国家大剧院",
  "py": "Guójiā Dàjùyuàn",
  "pos": "Danh từ riêng",
  "vn": "Nhà hát Lớn Quốc gia (Trung Quốc)",
  "hv": "Quốc gia Đại kịch viện",
  "em": "🏛️",
  "lesson": 2,
  "explain": [
   "Trung tâm Nghệ thuật Biểu diễn Quốc gia Trung Quốc ở Bắc Kinh, cạnh Thiên An Môn; toà nhà hình “quả trứng” bằng kính nổi giữa hồ nước, nơi diễn Kinh kịch, nhạc kịch, hoà nhạc."
  ],
  "usage": "去国家大剧院看京剧 · 在国家大剧院演出 · 大剧院入口.",
  "collo": [
   "去国家大剧院",
   "国家大剧院的演出",
   "大剧院入口",
   "在国家大剧院演出"
  ],
  "colloFull": [
   {
    "zh": "去国家大剧院",
    "py": "Qù Guójiā Dàjùyuàn",
    "vn": "đi Nhà hát Lớn Quốc gia"
   },
   {
    "zh": "国家大剧院的演出",
    "py": "Guójiā Dàjùyuàn de yǎnchū",
    "vn": "buổi diễn ở Nhà hát Lớn Quốc gia"
   },
   {
    "zh": "大剧院入口",
    "py": "Dà jùyuàn rùkǒu",
    "vn": "lối vào nhà hát lớn"
   },
   {
    "zh": "在国家大剧院演出",
    "py": "Zài Guójiā Dàjùyuàn yǎnchū",
    "vn": "biểu diễn ở Nhà hát Lớn Quốc gia"
   }
  ],
  "patterns": [
   {
    "s": "去 + 国家大剧院 + 看 + 京剧/话剧",
    "m": "đi đâu làm gì (liên động)"
   }
  ],
  "ex_zh": "下周六晚上，我请大家去国家大剧院看京剧，怎么样？",
  "ex_py": "Xià zhōuliù wǎnshang, wǒ qǐng dàjiā qù Guójiā Dàjùyuàn kàn jīngjù, zěnmeyàng?",
  "ex_vn": "Tối thứ Bảy tuần sau, tớ mời mọi người đi Nhà hát Lớn Quốc gia xem Kinh kịch, thế nào?",
  "exList": [
   {
    "zh": "下周六晚上，我请大家去国家大剧院看京剧，怎么样？",
    "py": "Xià zhōuliù wǎnshang, wǒ qǐng dàjiā qù Guójiā Dàjùyuàn kàn jīngjù, zěnmeyàng?",
    "vn": "Tối thứ Bảy tuần sau, tớ mời mọi người đi Nhà hát Lớn Quốc gia xem Kinh kịch, thế nào?"
   },
   {
    "zh": "国家大剧院的样子很特别，像一个大鸡蛋。",
    "py": "Guójiā Dàjùyuàn de yàngzi hěn tèbié, xiàng yí gè dà jīdàn.",
    "vn": "Hình dáng của Nhà hát Lớn Quốc gia rất đặc biệt, giống một quả trứng gà khổng lồ."
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
    "c": "剧",
    "p": "jù",
    "type": "左右结构 · Trái-phải (giản thể)",
    "st": 10,
    "ord": "居 trái → 刂 phải",
    "rad": "刂 (đao)",
    "mean": "kịch",
    "tip": "Bộ đao 刂 + 居(biểu âm) → nghĩa gốc là DỮ DỘI, sau chỉ KỊCH (diễn mạnh mẽ), kết hợp 京(Bắc Kinh) thành 京剧 = KINH KỊCH.",
    "cf": "据 (jù – \"căn cứ\", bộ 扌)",
    "w": "京剧 / 电视剧 / 剧场"
   },
   {
    "c": "院",
    "p": "yuàn",
    "type": "形声字 · Chữ hình thanh",
    "st": 9,
    "ord": "阝 → 完",
    "rad": "阝 (phụ – gò đất, bên trái)",
    "mean": "sân; viện",
    "tip": "阝 (gò đất) + 完 (chỉ âm): khu đất có tường bao → sân, viện. Ôn 医院 (HSK1 Bài 7), 电影院.",
    "cf": "完 wán (xong) — không có 阝",
    "w": "住院 / 出院 / 医院"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Thứ Bảy tuần sau, tớ mời mọi người đi Nhà hát Lớn Quốc gia xem Kinh kịch.",
    "answer": "下周六，我请大家去国家大剧院看京剧。",
    "answerPy": "Xià zhōuliù, wǒ qǐng dàjiā qù Guójiā Dàjùyuàn kàn jīngjù.",
    "note": "Câu kiêm ngữ 请 + ai + V (HSK 3).",
    "pair": "请……去……看……"
   },
   {
    "promptLang": "vi",
    "prompt": "Lần đầu đến Bắc Kinh, tôi nhất định phải đến Nhà hát Lớn Quốc gia xem.",
    "answer": "第一次来北京，我说什么也得去国家大剧院看看。",
    "answerPy": "Dì yí cì lái Běijīng, wǒ shuō shénme yě děi qù Guójiā Dàjùyuàn kànkan.",
    "note": "Ôn 说什么也得…… (Bài 10 · điểm 1).",
    "pair": "说什么也得……"
   }
  ]
 },
 {
  "n": 19,
  "zh": "京剧",
  "py": "Jīngjù",
  "pos": "Danh từ riêng",
  "vn": "Kinh kịch (kịch Bắc Kinh)",
  "hv": "Kinh kịch",
  "em": "🎎",
  "lesson": 2,
  "explain": [
   "Loại hình sân khấu truyền thống tiêu biểu của Trung Quốc, kết hợp hát, đọc, diễn, võ (唱、念、做、打), được gọi là “quốc tuý” (国粹). Diễn viên hoá trang mặt nhiều màu (脸谱)."
  ],
  "usage": "看京剧 · 唱京剧 · 京剧演员 · 京剧艺术.",
  "collo": [
   "看京剧",
   "唱京剧",
   "京剧演员",
   "京剧比赛"
  ],
  "colloFull": [
   {
    "zh": "看京剧",
    "py": "Kàn jīngjù",
    "vn": "xem Kinh kịch"
   },
   {
    "zh": "唱京剧",
    "py": "Chàng jīngjù",
    "vn": "hát Kinh kịch"
   },
   {
    "zh": "京剧演员",
    "py": "Jīngjù yǎnyuán",
    "vn": "diễn viên Kinh kịch"
   },
   {
    "zh": "京剧比赛",
    "py": "Jīngjù bǐsài",
    "vn": "cuộc thi Kinh kịch"
   }
  ],
  "patterns": [
   {
    "s": "京剧 + 演员 / 艺术 / 比赛",
    "m": "ghép làm định ngữ"
   }
  ],
  "ex_zh": "下周六晚上，我请大家去国家大剧院看京剧，怎么样？",
  "ex_py": "Xià zhōuliù wǎnshang, wǒ qǐng dàjiā qù Guójiā Dàjùyuàn kàn jīngjù, zěnmeyàng?",
  "ex_vn": "Tối thứ Bảy tuần sau, tớ mời mọi người đi Nhà hát Lớn Quốc gia xem Kinh kịch, thế nào?",
  "exList": [
   {
    "zh": "下周六晚上，我请大家去国家大剧院看京剧，怎么样？",
    "py": "Xià zhōuliù wǎnshang, wǒ qǐng dàjiā qù Guójiā Dàjùyuàn kàn jīngjù, zěnmeyàng?",
    "vn": "Tối thứ Bảy tuần sau, tớ mời mọi người đi Nhà hát Lớn Quốc gia xem Kinh kịch, thế nào?"
   },
   {
    "zh": "京剧已经有两百多年的历史了，很多外国人也喜欢看。",
    "py": "Jīngjù yǐjīng yǒu liǎngbǎi duō nián de lìshǐ le, hěn duō wàiguórén yě xǐhuan kàn.",
    "vn": "Kinh kịch đã có lịch sử hơn hai trăm năm, nhiều người nước ngoài cũng thích xem."
   }
  ],
  "hanzi": [
   {
    "c": "京",
    "p": "jīng",
    "type": "象形字 · Chữ tượng hình",
    "st": 8,
    "ord": "亠 → 口 → 小",
    "rad": "亠 (đầu – nắp)",
    "mean": "kinh đô, thủ đô",
    "tip": "Hình một toà nhà cao xây trên nền đất cao → nơi vua ở, kinh đô. 北京 = kinh đô phía Bắc; 南京 = kinh đô phía Nam.",
    "cf": "景 jǐng (景点 – bài này) — có thêm 日 ở trên",
    "w": "北京 / 南京"
   },
   {
    "c": "剧",
    "p": "jù",
    "type": "左右结构 · Trái-phải (giản thể)",
    "st": 10,
    "ord": "居 trái → 刂 phải",
    "rad": "刂 (đao)",
    "mean": "kịch",
    "tip": "Bộ đao 刂 + 居(biểu âm) → nghĩa gốc là DỮ DỘI, sau chỉ KỊCH (diễn mạnh mẽ), kết hợp 京(Bắc Kinh) thành 京剧 = KINH KỊCH.",
    "cf": "据 (jù – \"căn cứ\", bộ 扌)",
    "w": "京剧 / 电视剧 / 剧场"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Đây là lần đầu tôi xem Kinh kịch, xem hiểu được chút nào hay chút ấy.",
    "answer": "这是我第一次看京剧，能看懂一点儿是一点儿。",
    "answerPy": "Zhè shì wǒ dì yí cì kàn jīngjù, néng kàndǒng yìdiǎnr shì yìdiǎnr.",
    "note": "动 + 一 × 是一 × (Bài 19 · điểm 2).",
    "pair": "……一点儿是一点儿"
   },
   {
    "promptLang": "vi",
    "prompt": "Vì đã tìm hiểu câu chuyện trước một lượt, nên chúng tôi xem Kinh kịch gần như hiểu hết.",
    "answer": "因为提前把故事了解了一遍，所以我们差不多都看懂了京剧。",
    "answerPy": "Yīnwèi tíqián bǎ gùshi liǎojiě le yí biàn, suǒyǐ wǒmen chàbuduō dōu kàndǒng le jīngjù.",
    "note": "把 + 宾 + 动 + 动量补语 (Bài 19 · điểm 3).",
    "pair": "把……了解了一遍"
   }
  ]
 },
 {
  "n": 20,
  "zh": "梅兰芳",
  "py": "Méi Lánfāng",
  "pos": "Danh từ riêng",
  "vn": "Mai Lan Phương",
  "hv": "Mai Lan Phương",
  "em": "🌸",
  "lesson": 2,
  "explain": [
   "Nghệ sĩ Kinh kịch nổi tiếng bậc nhất Trung Quốc (1894–1961), chuyên đóng vai nữ (旦角), từng đưa Kinh kịch ra biểu diễn ở Mỹ, Nhật, Liên Xô."
  ],
  "usage": "梅兰芳先生 · 梅兰芳演的京剧 · 京剧艺术家梅兰芳.",
  "collo": [
   "梅兰芳先生",
   "梅兰芳的京剧",
   "京剧艺术家梅兰芳",
   "梅兰芳等演员"
  ],
  "colloFull": [
   {
    "zh": "梅兰芳先生",
    "py": "Méi Lánfāng xiānsheng",
    "vn": "ông Mai Lan Phương"
   },
   {
    "zh": "梅兰芳的京剧",
    "py": "Méi Lánfāng de jīngjù",
    "vn": "Kinh kịch của Mai Lan Phương"
   },
   {
    "zh": "京剧艺术家梅兰芳",
    "py": "Jīngjù yìshùjiā Méi Lánfāng",
    "vn": "nghệ sĩ Kinh kịch Mai Lan Phương"
   },
   {
    "zh": "梅兰芳等演员",
    "py": "Méi Lánfāng děng yǎnyuán",
    "vn": "các diễn viên như Mai Lan Phương"
   }
  ],
  "patterns": [
   {
    "s": "梅兰芳等 + N",
    "m": "等 = vân vân, liệt kê đại diện (Bài 5 · điểm 4)"
   }
  ],
  "ex_zh": "梅兰芳先生是中国著名京剧艺术家。",
  "ex_py": "Méi Lánfāng xiānsheng shì Zhōngguó zhùmíng jīngjù yìshùjiā.",
  "ex_vn": "Ông Mai Lan Phương là nghệ sĩ Kinh kịch nổi tiếng của Trung Quốc.",
  "exList": [
   {
    "zh": "梅兰芳先生是中国著名京剧艺术家。",
    "py": "Méi Lánfāng xiānsheng shì Zhōngguó zhùmíng jīngjù yìshùjiā.",
    "vn": "Ông Mai Lan Phương là nghệ sĩ Kinh kịch nổi tiếng của Trung Quốc."
   },
   {
    "zh": "梅兰芳把中国京剧介绍给了全世界。",
    "py": "Méi Lánfāng bǎ Zhōngguó jīngjù jièshào gěi le quán shìjiè.",
    "vn": "Mai Lan Phương đã giới thiệu Kinh kịch Trung Quốc với cả thế giới."
   }
  ],
  "hanzi": [
   {
    "c": "梅",
    "p": "méi",
    "type": "形声字 · Chữ hình thanh",
    "st": 11,
    "ord": "木 → 每",
    "rad": "木 (mộc – cây)",
    "mean": "cây mai, hoa mai; họ Mai",
    "tip": "Cây (木) + 每 (měi, gợi âm méi): cây mai nở hoa giữa mùa đông lạnh — biểu tượng của sự kiên cường; còn là họ: 梅兰芳 (Mai Lan Phương).",
    "cf": "海 hǎi (biển) — bên trái là 氵; 每 měi (mỗi) — không có 木",
    "w": "梅花 / 梅兰芳 / 梅雨"
   },
   {
    "c": "兰",
    "p": "lán",
    "type": "形声字 · Chữ hình thanh (giản thể)",
    "st": 5,
    "ord": "丷 → 三",
    "rad": "八 (bát – tám)",
    "mean": "hoa lan",
    "tip": "Hai chấm (丷) như hai cánh hoa trên ba nét ngang (三) như lá lan xếp tầng → hoa lan. Phồn thể 蘭. Hay dùng trong tên người và tên nước: 梅兰芳, 荷兰 (Hà Lan), 新西兰 (New Zealand).",
    "cf": "半 bàn (một nửa) — có nét sổ dọc xuyên qua; 关 guān (đóng) — dưới là 天",
    "w": "兰花 / 梅兰芳 / 荷兰"
   },
   {
    "c": "芳",
    "p": "fāng",
    "type": "形声字 · Chữ hình thanh",
    "st": 7,
    "ord": "艹 → 方",
    "rad": "艹 (thảo – cỏ)",
    "mean": "thơm, hương thơm (của hoa cỏ)",
    "tip": "Cỏ hoa (艹) + 方 (fāng, gợi âm): mùi thơm của hoa cỏ → thơm; hay dùng trong tên người (nhất là tên nữ): 梅兰芳, 芳芳.",
    "cf": "方 fāng (phương) — không có 艹; 房 fáng (phòng) — trên là 户",
    "w": "芳香 / 梅兰芳 / 芬芳"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Vở Kinh kịch đó là do các diễn viên như Mai Lan Phương diễn.",
    "answer": "那个京剧是梅兰芳等演员演的。",
    "answerPy": "Nàge jīngjù shì Méi Lánfāng děng yǎnyuán yǎn de.",
    "note": "Ôn 等 (Bài 5 · điểm 4) + 是……的.",
    "pair": "是……等……演的"
   },
   {
    "promptLang": "vi",
    "prompt": "Với tư cách là nghệ sĩ Kinh kịch, Mai Lan Phương cả đời luyện tập không ngừng.",
    "answer": "作为京剧艺术家，梅兰芳一生都在不断地练习。",
    "answerPy": "Zuòwéi jīngjù yìshùjiā, Méi Lánfāng yìshēng dōu zài búduàn de liànxí.",
    "note": "Ôn 作为 (Bài 13 · điểm 4).",
    "pair": "作为……，……"
   }
  ]
 },
 {
  "n": 21,
  "zh": "入",
  "py": "rù",
  "pos": "Động từ",
  "vn": "vào",
  "hv": "nhập",
  "em": "➡️",
  "lesson": 3,
  "explain": [
   "Vào (văn viết, trang trọng) — chủ yếu trong từ ghép: 入座 (vào chỗ ngồi), 入口, 入学, 进入. Khẩu ngữ hằng ngày dùng 进."
  ],
  "usage": "入座 · 入口 · 入学 · 入场.",
  "collo": [
   "入座",
   "入学",
   "入场",
   "入口"
  ],
  "colloFull": [
   {
    "zh": "入座",
    "py": "Rùzuò",
    "vn": "vào chỗ ngồi"
   },
   {
    "zh": "入学",
    "py": "Rùxué",
    "vn": "nhập học"
   },
   {
    "zh": "入场",
    "py": "Rù chǎng",
    "vn": "vào hội trường"
   },
   {
    "zh": "入口",
    "py": "Rùkǒu",
    "vn": "lối vào"
   }
  ],
  "patterns": [
   {
    "s": "入 (viết) ≈ 进 (nói)",
    "m": "入座 / 入学 / 入场"
   }
  ],
  "ex_zh": "入座后，李文指着节目表说……",
  "ex_py": "Rùzuò hòu, Lǐ Wén zhǐ zhe jiémù biǎo shuō……",
  "ex_vn": "Sau khi vào chỗ ngồi, Lý Văn chỉ vào tờ chương trình nói…",
  "exList": [
   {
    "zh": "入座后，李文指着节目表说……",
    "py": "Rùzuò hòu, Lǐ Wén zhǐ zhe jiémù biǎo shuō……",
    "vn": "Sau khi vào chỗ ngồi, Lý Văn chỉ vào tờ chương trình nói…"
   },
   {
    "zh": "演出马上开始了，请观众们尽快入座。",
    "py": "Yǎnchū mǎshàng kāishǐ le, qǐng guānzhòngmen jǐnkuài rùzuò.",
    "vn": "Buổi diễn sắp bắt đầu, mời quý khán giả nhanh chóng vào chỗ."
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
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Sau khi vào chỗ, Lý Văn chỉ vào tờ chương trình giới thiệu diễn viên với mọi người.",
    "answer": "入座后，李文指着节目表给大家介绍演员。",
    "answerPy": "Rùzuò hòu, Lǐ Wén zhǐ zhe jiémù biǎo gěi dàjiā jièshào yǎnyuán.",
    "note": "V着 + V (HSK 3): 指着…介绍….",
    "pair": "入座后，……"
   },
   {
    "promptLang": "vi",
    "prompt": "Em gái tôi nhập học năm ngoái, đến nay đã học được hai học kỳ.",
    "answer": "妹妹去年入学，到现在已经学了两个学期了。",
    "answerPy": "Mèimei qùnián rùxué, dào xiànzài yǐjīng xué le liǎng gè xuéqī le.",
    "note": "Ôn 时量补语 + 了…了 (HSK 3).",
    "pair": "入学"
   }
  ]
 },
 {
  "n": 22,
  "zh": "指",
  "py": "zhǐ",
  "pos": "Động từ",
  "vn": "chỉ (vào); ám chỉ",
  "hv": "chỉ",
  "em": "👉",
  "lesson": 3,
  "explain": [
   "Dùng ngón tay hoặc đồ vật chỉ vào; nghĩa mở rộng: nói đến, ám chỉ (指的是…). 指着 + vật + 说 = vừa chỉ vào … vừa nói."
  ],
  "usage": "指着……说 · 用手指 · 指路 · 指的是…….",
  "collo": [
   "指着节目表",
   "用手指",
   "指路",
   "你指的是……"
  ],
  "colloFull": [
   {
    "zh": "指着节目表",
    "py": "Zhǐ zhe jiémù biǎo",
    "vn": "chỉ vào tờ chương trình"
   },
   {
    "zh": "用手指",
    "py": "Yòng shǒuzhǐ",
    "vn": "dùng tay chỉ"
   },
   {
    "zh": "指路",
    "py": "Zhǐ lù",
    "vn": "chỉ đường"
   },
   {
    "zh": "你指的是……",
    "py": "Nǐ zhǐ de shì……",
    "vn": "ý bạn là …"
   }
  ],
  "patterns": [
   {
    "s": "指着 + N + V",
    "m": "V着 chỉ cách thức của động tác sau"
   },
   {
    "s": "A 指的是 B",
    "m": "A ám chỉ B"
   }
  ],
  "ex_zh": "入座后，李文指着节目表说……",
  "ex_py": "Rùzuò hòu, Lǐ Wén zhǐ zhe jiémù biǎo shuō……",
  "ex_vn": "Sau khi vào chỗ ngồi, Lý Văn chỉ vào tờ chương trình nói…",
  "exList": [
   {
    "zh": "入座后，李文指着节目表说……",
    "py": "Rùzuò hòu, Lǐ Wén zhǐ zhe jiémù biǎo shuō……",
    "vn": "Sau khi vào chỗ ngồi, Lý Văn chỉ vào tờ chương trình nói…"
   },
   {
    "zh": "孩子指着天上的飞机，高兴地叫了起来。",
    "py": "Háizi zhǐ zhe tiānshang de fēijī, gāoxìng de jiào le qǐlai.",
    "vn": "Đứa bé chỉ vào chiếc máy bay trên trời, vui sướng kêu lên."
   }
  ],
  "hanzi": [
   {
    "c": "指",
    "p": "zhǐ",
    "type": "左右结构 · Trái-phải",
    "st": 9,
    "ord": "扌 (thủ) trái → 旨 (chỉ) phải",
    "rad": "扌 (thủ – tay)",
    "mean": "ngón tay, chỉ về",
    "tip": "Bộ tay 扌 (ngón tay chỉ) + 旨(biểu âm) → dùng NGÓN TAY CHỈ VỀ, mở rộng thành ĐỀ CẬP ĐẾN, NÓI ĐẾN.",
    "cf": "脂 (zhī – \"mỡ\", bộ 月\")",
    "w": "指 / 指出 / 手指"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Cô giáo chỉ vào bức ảnh trên bảng, hỏi chúng tôi đây là ai.",
    "answer": "老师指着黑板上的图片，问我们这是谁。",
    "answerPy": "Lǎoshī zhǐ zhe hēibǎn shàng de túpiàn, wèn wǒmen zhè shì shuí.",
    "note": "V着 + V (HSK 3).",
    "pair": "指着……问……"
   },
   {
    "promptLang": "vi",
    "prompt": "“Người ấy” mà cậu nói là chỉ ai thế?",
    "answer": "你说的“那个人”，指的是谁啊？",
    "answerPy": "Nǐ shuō de “nàge rén”, zhǐ de shì shuí a?",
    "note": "指的是 = ám chỉ, nói đến.",
    "pair": "……指的是……"
   }
  ]
 },
 {
  "n": 23,
  "zh": "功夫",
  "py": "gōngfu",
  "pos": "Danh từ",
  "vn": "tay nghề, bản lĩnh; công sức; võ thuật",
  "hv": "công phu",
  "em": "🥋",
  "lesson": 3,
  "explain": [
   "Ở bài này: trình độ, tay nghề do luyện tập lâu năm mà có — 功夫很深 = tay nghề rất cao.",
   "Nghĩa khác: võ thuật (中国功夫 — kungfu); thời gian, công sức (下功夫, 花功夫). 夫 đọc thanh nhẹ."
  ],
  "usage": "功夫很深 · 中国功夫 · 下功夫 · 花功夫.",
  "collo": [
   "功夫很深",
   "中国功夫",
   "下功夫",
   "花功夫"
  ],
  "colloFull": [
   {
    "zh": "功夫很深",
    "py": "Gōngfu hěn shēn",
    "vn": "tay nghề rất cao"
   },
   {
    "zh": "中国功夫",
    "py": "Zhōngguó gōngfu",
    "vn": "võ thuật Trung Quốc"
   },
   {
    "zh": "下功夫",
    "py": "Xià gōngfu",
    "vn": "bỏ công sức"
   },
   {
    "zh": "花功夫",
    "py": "Huā gōngfu",
    "vn": "tốn công"
   }
  ],
  "patterns": [
   {
    "s": "功夫 + 很深",
    "m": "tay nghề cao, luyện lâu năm"
   },
   {
    "s": "在……上下功夫",
    "m": "dồn công sức vào việc gì"
   }
  ],
  "ex_zh": "这些演员很专业，功夫很深。",
  "ex_py": "Zhèxiē yǎnyuán hěn zhuānyè, gōngfu hěn shēn.",
  "ex_vn": "Những diễn viên này rất chuyên nghiệp, tay nghề rất cao.",
  "exList": [
   {
    "zh": "这些演员很专业，功夫很深。",
    "py": "Zhèxiē yǎnyuán hěn zhuānyè, gōngfu hěn shēn.",
    "vn": "Những diễn viên này rất chuyên nghiệp, tay nghề rất cao."
   },
   {
    "zh": "要想学好中文，就得多下功夫。",
    "py": "Yào xiǎng xuéhǎo Zhōngwén, jiù děi duō xià gōngfu.",
    "vn": "Muốn học giỏi tiếng Trung thì phải bỏ nhiều công sức."
   }
  ],
  "hanzi": [
   {
    "c": "功",
    "p": "gōng",
    "type": "左右结构 · Trái-phải",
    "st": 5,
    "ord": "工 trái → 力 phải",
    "rad": "力 (lực)",
    "mean": "công lao, hiệu quả",
    "tip": "Chữ hội ý 工(việc) + 力(sức) → CÔNG LAO, HIỆU QUẢ; 事半功倍 = việc nửa, công gấp đôi.",
    "cf": "攻 (gōng – \"tấn công\", bộ 攵)",
    "w": "事半功倍 / 成功 / 功课"
   },
   {
    "c": "夫",
    "p": "fū",
    "type": "独体字 · Chữ đơn",
    "st": 4,
    "ord": "一 → 一 → 丿 → 捺",
    "rad": "大 (đại)",
    "mean": "chồng; người đàn ông",
    "tip": "Hình người 大 cài thêm một trâm cài đầu (một nét ngang) → người đàn ông đã trưởng thành, có gia đình.",
    "cf": "天 (tiān – nét ngang ở vị trí khác)",
    "w": "丈夫 / 夫妻 / 农夫"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Muốn viết chữ Hán cho đẹp thì phải bỏ nhiều công sức.",
    "answer": "要想把汉字写好，就得多下功夫。",
    "answerPy": "Yào xiǎng bǎ hànzì xiěhǎo, jiù děi duō xià gōngfu.",
    "note": "Ôn 把 + 宾 + V + 结果补语 (HSK 3).",
    "pair": "下功夫"
   },
   {
    "promptLang": "vi",
    "prompt": "Người diễn viên đó đã luyện hơn mười năm, tay nghề rất cao.",
    "answer": "那位演员已经练了十多年，功夫很深。",
    "answerPy": "Nà wèi yǎnyuán yǐjīng liàn le shí duō nián, gōngfu hěn shēn.",
    "note": "Ôn 时量补语 + 多 (HSK 3).",
    "pair": "功夫很深"
   }
  ]
 },
 {
  "n": 24,
  "zh": "获奖",
  "py": "huòjiǎng",
  "pos": "Động từ",
  "vn": "đoạt giải, được giải",
  "hv": "hoạch tưởng",
  "em": "🏆",
  "lesson": 3,
  "explain": [
   "Đoạt giải. Là động từ li hợp (获 + 奖): 获过很多奖, 获了大奖. Văn viết; khẩu ngữ hay nói 得奖."
  ],
  "usage": "获奖 · 获过奖 · 获了大奖 · 获奖作品.",
  "collo": [
   "获奖作品",
   "获奖演员",
   "获过很多奖",
   "获国际大奖"
  ],
  "colloFull": [
   {
    "zh": "获奖作品",
    "py": "Huòjiǎng zuòpǐn",
    "vn": "tác phẩm đoạt giải"
   },
   {
    "zh": "获奖演员",
    "py": "Huòjiǎng yǎnyuán",
    "vn": "diễn viên đoạt giải"
   },
   {
    "zh": "获过很多奖",
    "py": "Huò guò hěn duō jiǎng",
    "vn": "từng đoạt nhiều giải"
   },
   {
    "zh": "获国际大奖",
    "py": "Huò guójì dàjiǎng",
    "vn": "đoạt giải quốc tế lớn"
   }
  ],
  "patterns": [
   {
    "s": "获 + (过/了) + số lượng + 奖",
    "m": "tách li hợp"
   },
   {
    "s": "在 + cuộc thi + 中 + 获奖",
    "m": "đoạt giải trong cuộc thi"
   }
  ],
  "ex_zh": "这些演员很专业，功夫很深，在京剧比赛中获过很多奖。",
  "ex_py": "Zhèxiē yǎnyuán hěn zhuānyè, gōngfu hěn shēn, zài jīngjù bǐsài zhōng huò guò hěn duō jiǎng.",
  "ex_vn": "Những diễn viên này rất chuyên nghiệp, tay nghề rất cao, đã đoạt nhiều giải trong các cuộc thi Kinh kịch.",
  "exList": [
   {
    "zh": "这些演员很专业，功夫很深，在京剧比赛中获过很多奖。",
    "py": "Zhèxiē yǎnyuán hěn zhuānyè, gōngfu hěn shēn, zài jīngjù bǐsài zhōng huò guò hěn duō jiǎng.",
    "vn": "Những diễn viên này rất chuyên nghiệp, tay nghề rất cao, đã đoạt nhiều giải trong các cuộc thi Kinh kịch."
   },
   {
    "zh": "这部获奖作品写的是一个普通少年的故事。",
    "py": "Zhè bù huòjiǎng zuòpǐn xiě de shì yí gè pǔtōng shàonián de gùshi.",
    "vn": "Tác phẩm đoạt giải này viết về câu chuyện của một thiếu niên bình thường."
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
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Họ đã từng đoạt rất nhiều giải trong các cuộc thi Kinh kịch.",
    "answer": "他们在京剧比赛中获过很多奖。",
    "answerPy": "Tāmen zài jīngjù bǐsài zhōng huò guò hěn duō jiǎng.",
    "note": "Câu bài khoá 3; V + 过 chen giữa li hợp.",
    "pair": "在……中获过……奖"
   },
   {
    "promptLang": "vi",
    "prompt": "Bài văn của em gái tôi được giải, cả nhà ai cũng vui.",
    "answer": "妹妹的作文获奖了，全家人都特别高兴。",
    "answerPy": "Mèimei de zuòwén huòjiǎng le, quánjiārén dōu tèbié gāoxìng.",
    "note": "了 chỉ thay đổi (HSK 2).",
    "pair": "……获奖了"
   }
  ]
 },
 {
  "n": 25,
  "zh": "奖",
  "py": "jiǎng",
  "pos": "Danh từ",
  "vn": "giải thưởng",
  "hv": "tưởng",
  "em": "🥇",
  "lesson": 3,
  "explain": [
   "Giải thưởng. Hay gặp: 大奖, 一等奖, 得奖, 获奖, 奖金 (tiền thưởng)."
  ],
  "usage": "大奖 · 一等奖 · 得奖 · 国际大奖.",
  "collo": [
   "国际大奖",
   "一等奖",
   "二等奖",
   "奖金"
  ],
  "colloFull": [
   {
    "zh": "国际大奖",
    "py": "Guójì dàjiǎng",
    "vn": "giải quốc tế lớn"
   },
   {
    "zh": "一等奖",
    "py": "Yīděngjiǎng",
    "vn": "giải nhất"
   },
   {
    "zh": "二等奖",
    "py": "Èr děng jiǎng",
    "vn": "giải nhì"
   },
   {
    "zh": "奖金",
    "py": "Jiǎngjīn",
    "vn": "tiền thưởng"
   }
  ],
  "patterns": [
   {
    "s": "一 / 二 / 三 + 等奖",
    "m": "giải nhất / nhì / ba"
   }
  ],
  "ex_zh": "有的还是国家、国际大奖。",
  "ex_py": "Yǒude háishi guójiā, guójì dàjiǎng.",
  "ex_vn": "Có giải còn là giải quốc gia, quốc tế lớn.",
  "exList": [
   {
    "zh": "有的还是国家、国际大奖。",
    "py": "Yǒude háishi guójiā, guójì dàjiǎng.",
    "vn": "Có giải còn là giải quốc gia, quốc tế lớn."
   },
   {
    "zh": "这次比赛他得了一等奖。",
    "py": "Zhè cì bǐsài tā dé le yīděngjiǎng.",
    "vn": "Cuộc thi lần này anh ấy được giải nhất."
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
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Cuộc thi lần này anh ấy được giải nhất.",
    "answer": "这次比赛他得了一等奖。",
    "answerPy": "Zhè cì bǐsài tā dé le yīděngjiǎng.",
    "note": "一等奖 = giải nhất.",
    "pair": "得了……奖"
   },
   {
    "promptLang": "vi",
    "prompt": "Dù không được giải, chúng tôi cũng học được rất nhiều.",
    "answer": "即使没获奖，我们也学到了很多。",
    "answerPy": "Jíshǐ méi huòjiǎng, wǒmen yě xuédào le hěn duō.",
    "note": "Ôn 即使……也…… (Bài 11 · điểm 1).",
    "pair": "即使……也……"
   }
  ]
 },
 {
  "n": 26,
  "zh": "期待",
  "py": "qīdài",
  "pos": "Động từ",
  "vn": "mong chờ, mong đợi",
  "hv": "kỳ đãi",
  "em": "🤩",
  "lesson": 3,
  "explain": [
   "Mong đợi một việc tốt sắp đến; trang trọng hơn 盼望 / 希望. Cũng làm danh từ: 大家的期待 (sự kỳ vọng của mọi người)."
  ],
  "usage": "期待演出 · 特别期待 · 期待着 · 期待你的回信.",
  "collo": [
   "特别期待",
   "期待这场演出",
   "期待你的到来",
   "让人期待"
  ],
  "colloFull": [
   {
    "zh": "特别期待",
    "py": "Tèbié qīdài",
    "vn": "rất mong chờ"
   },
   {
    "zh": "期待这场演出",
    "py": "Qīdài zhè chǎng yǎnchū",
    "vn": "mong chờ buổi diễn này"
   },
   {
    "zh": "期待你的到来",
    "py": "Qīdài nǐ de dàolái",
    "vn": "mong bạn đến"
   },
   {
    "zh": "让人期待",
    "py": "Ràng rén qīdài",
    "vn": "khiến người ta mong chờ"
   }
  ],
  "patterns": [
   {
    "s": "期待 + N / V (sự việc)",
    "m": "mong chờ việc gì"
   }
  ],
  "ex_zh": "我特别期待这场演出。",
  "ex_py": "Wǒ tèbié qīdài zhè chǎng yǎnchū.",
  "ex_vn": "Tớ rất mong chờ buổi diễn này.",
  "exList": [
   {
    "zh": "我特别期待这场演出。",
    "py": "Wǒ tèbié qīdài zhè chǎng yǎnchū.",
    "vn": "Tớ rất mong chờ buổi diễn này."
   },
   {
    "zh": "我们都很期待和你再次见面。",
    "py": "Wǒmen dōu hěn qīdài hé nǐ zàicì jiànmiàn.",
    "vn": "Chúng tôi đều rất mong được gặp lại bạn."
   }
  ],
  "hanzi": [
   {
    "c": "期",
    "p": "qī",
    "type": "左右结构 · Trái-phải",
    "st": 12,
    "ord": "其 trái → 月 phải",
    "rad": "月 (nguyệt)",
    "mean": "kỳ",
    "tip": "其 + 月(trăng) → chu kỳ trăng → KỲ (thời gian). 学期, 星期, 日期, 到期.",
    "cf": "其 (qí – ấy)",
    "w": "学期 / 星期 / 日期 / 到期"
   },
   {
    "c": "待",
    "p": "dài",
    "type": "形声字 · Chữ hình thanh",
    "st": 9,
    "ord": "彳 → 寺",
    "rad": "彳 (xích – bước chân)",
    "mean": "ở lại (dāi); đối xử, chờ đợi (dài)",
    "tip": "Bước chân (彳) dừng lại trước ngôi chùa (寺, cũng gợi âm) → đứng lại chờ, ở lại → đọc dāi khi nghĩa “ở lại” (待在家里), dài khi nghĩa “đối xử, chờ đợi” (等待, 对待).",
    "cf": "侍 shì (hầu hạ) — bên trái là 亻; 持 chí (cầm giữ) — bên trái là 扌; 特 tè — bên trái là 牛",
    "w": "待在家里 / 等待 / 对待"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Đây là lần đầu tôi xem Kinh kịch, tôi rất mong chờ buổi diễn tối nay.",
    "answer": "这是我第一次看京剧，我特别期待今晚的演出。",
    "answerPy": "Zhè shì wǒ dì yí cì kàn jīngjù, wǒ tèbié qīdài jīnwǎn de yǎnchū.",
    "note": "Chủ ngữ + 特别期待 + N.",
    "pair": "特别期待……"
   },
   {
    "promptLang": "vi",
    "prompt": "Chúng tôi đều rất mong được gặp lại các bạn.",
    "answer": "我们都很期待再次和你们见面。",
    "answerPy": "Wǒmen dōu hěn qīdài zàicì hé nǐmen jiànmiàn.",
    "note": "Ôn 再次 (Bài 10 · điểm 4).",
    "pair": "期待再次……"
   }
  ]
 },
 {
  "n": 27,
  "zh": "鼓掌",
  "py": "gǔzhǎng",
  "pos": "Động từ",
  "vn": "vỗ tay",
  "hv": "cổ chưởng",
  "em": "👏",
  "lesson": 3,
  "explain": [
   "Vỗ tay (khen ngợi, hoan nghênh). Li hợp: 鼓了掌, 鼓起掌来. Muốn nói vỗ tay cho ai dùng 为/给 + ai + 鼓掌 (✗ 鼓掌演员)."
  ],
  "usage": "不断鼓掌 · 为……鼓掌 · 热烈鼓掌 · 鼓起掌来.",
  "collo": [
   "不断鼓掌",
   "为他鼓掌",
   "热烈鼓掌",
   "鼓掌欢迎"
  ],
  "colloFull": [
   {
    "zh": "不断鼓掌",
    "py": "Búduàn gǔzhǎng",
    "vn": "vỗ tay không ngớt"
   },
   {
    "zh": "为他鼓掌",
    "py": "Wèi tā gǔzhǎng",
    "vn": "vỗ tay cho anh ấy"
   },
   {
    "zh": "热烈鼓掌",
    "py": "Rèliè gǔzhǎng",
    "vn": "vỗ tay nhiệt liệt"
   },
   {
    "zh": "鼓掌欢迎",
    "py": "Gǔzhǎng huānyíng",
    "vn": "vỗ tay hoan nghênh"
   }
  ],
  "patterns": [
   {
    "s": "为 / 给 + ai + 鼓掌",
    "m": "✗ 鼓掌 + ai"
   }
  ],
  "ex_zh": "演出开始后，他们看到演员们做的动作很难，但是做得都特别好，观众们不断鼓掌。",
  "ex_py": "Yǎnchū kāishǐ hòu, tāmen kàndào yǎnyuánmen zuò de dòngzuò hěn nán, dànshì zuò de dōu tèbié hǎo, guānzhòngmen búduàn gǔzhǎng.",
  "ex_vn": "Buổi diễn bắt đầu, họ thấy động tác các diễn viên làm rất khó nhưng đều làm cực đẹp, khán giả vỗ tay không ngớt.",
  "exList": [
   {
    "zh": "演出开始后，他们看到演员们做的动作很难，但是做得都特别好，观众们不断鼓掌。",
    "py": "Yǎnchū kāishǐ hòu, tāmen kàndào yǎnyuánmen zuò de dòngzuò hěn nán, dànshì zuò de dōu tèbié hǎo, guānzhòngmen búduàn gǔzhǎng.",
    "vn": "Buổi diễn bắt đầu, họ thấy động tác các diễn viên làm rất khó nhưng đều làm cực đẹp, khán giả vỗ tay không ngớt."
   },
   {
    "zh": "他讲完以后，大家都为他鼓掌。",
    "py": "Tā jiǎngwán yǐhòu, dàjiā dōu wèi tā gǔzhǎng.",
    "vn": "Anh ấy nói xong, mọi người đều vỗ tay cho anh ấy."
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
    "c": "掌",
    "p": "zhǎng",
    "type": "形声字 · Chữ hình thanh",
    "st": 12,
    "ord": "⺌ → 冖 → 口 → 手",
    "rad": "手 (thủ – tay)",
    "mean": "lòng bàn tay; vỗ (tay)",
    "tip": "尚 (shàng, gợi âm zhǎng) ở trên + 手 (tay) ở dưới: phần mặt trong của bàn tay → lòng bàn tay; hai lòng bàn tay vỗ vào nhau → 鼓掌 (vỗ tay).",
    "cf": "堂 táng (phòng lớn) — dưới là 土; 常 cháng (thường) — dưới là 巾",
    "w": "鼓掌 / 手掌 / 掌握"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Cô ấy hát xong, cả hội trường đều vỗ tay cho cô ấy.",
    "answer": "她唱完以后，全场观众都为她鼓掌。",
    "answerPy": "Tā chàngwán yǐhòu, quán chǎng guānzhòng dōu wèi tā gǔzhǎng.",
    "note": "为 + ai + 鼓掌.",
    "pair": "为……鼓掌"
   },
   {
    "promptLang": "vi",
    "prompt": "Động tác rất khó, nhưng các diễn viên làm rất đẹp, khán giả vỗ tay không ngớt.",
    "answer": "动作很难，但是演员们做得特别好，观众们不断鼓掌。",
    "answerPy": "Dòngzuò hěn nán, dànshì yǎnyuánmen zuò de tèbié hǎo, guānzhòngmen búduàn gǔzhǎng.",
    "note": "Câu bài khoá 3; bổ ngữ trình độ.",
    "pair": "不断鼓掌"
   }
  ]
 },
 {
  "n": 28,
  "zh": "邀请",
  "py": "yāoqǐng",
  "pos": "Động từ",
  "vn": "mời; lời mời",
  "hv": "yêu thỉnh",
  "em": "💌",
  "lesson": 3,
  "explain": [
   "Mời (trang trọng hơn 请): 邀请 + ai + V (câu kiêm ngữ).",
   "Cũng dùng làm danh từ: 收到邀请 (nhận được lời mời), 接受邀请 (nhận lời)."
  ],
  "usage": "邀请 + ai + V · 收到邀请 · 接受邀请 · 邀请函 (thư mời).",
  "collo": [
   "邀请朋友",
   "收到邀请",
   "接受邀请",
   "发出邀请"
  ],
  "colloFull": [
   {
    "zh": "邀请朋友",
    "py": "Yāoqǐng péngyou",
    "vn": "mời bạn bè"
   },
   {
    "zh": "收到邀请",
    "py": "Shōudào yāoqǐng",
    "vn": "nhận được lời mời"
   },
   {
    "zh": "接受邀请",
    "py": "Jiēshòu yāoqǐng",
    "vn": "nhận lời mời"
   },
   {
    "zh": "发出邀请",
    "py": "Fāchū yāoqǐng",
    "vn": "gửi lời mời"
   }
  ],
  "patterns": [
   {
    "s": "邀请 + ai + V",
    "m": "câu kiêm ngữ (giống 请 / 让 — Bài 18 · điểm 2)"
   }
  ],
  "ex_zh": "演出结束后，演员们邀请观众和他们一起庆祝演出成功。",
  "ex_py": "Yǎnchū jiéshù hòu, yǎnyuánmen yāoqǐng guānzhòng hé tāmen yìqǐ qìngzhù yǎnchū chénggōng.",
  "ex_vn": "Buổi diễn kết thúc, các diễn viên mời khán giả cùng họ ăn mừng buổi diễn thành công.",
  "exList": [
   {
    "zh": "演出结束后，演员们邀请观众和他们一起庆祝演出成功。",
    "py": "Yǎnchū jiéshù hòu, yǎnyuánmen yāoqǐng guānzhòng hé tāmen yìqǐ qìngzhù yǎnchū chénggōng.",
    "vn": "Buổi diễn kết thúc, các diễn viên mời khán giả cùng họ ăn mừng buổi diễn thành công."
   },
   {
    "zh": "收到演出邀请后，他们马上就开始排新节目。",
    "py": "Shōudào yǎnchū yāoqǐng hòu, tāmen mǎshàng jiù kāishǐ pái xīn jiémù.",
    "vn": "Nhận được lời mời biểu diễn, họ lập tức bắt đầu tập tiết mục mới."
   }
  ],
  "hanzi": [
   {
    "c": "邀",
    "p": "yāo",
    "type": "半包围结构 · Bán bao vây",
    "st": 16,
    "ord": "白+方 trên → 辶 (sước) bao ngoài",
    "rad": "辶 (sước – đi)",
    "mean": "mời gọi",
    "tip": "Bộ 辶(đi, hành động) + 敫(biểu âm) → hành động ĐI MỜI GỌI ai đó, kết hợp 请(mời) thành 邀请 = MỜI.",
    "cf": "邀 dễ nhầm với 遥 (yáo – \"xa xôi\")",
    "w": "邀请 / 邀请函 / 受邀"
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
    "prompt": "Họ mời chúng tôi cuối tuần đến nhà ăn cơm.",
    "answer": "他们邀请我们周末去家里吃饭。",
    "answerPy": "Tāmen yāoqǐng wǒmen zhōumò qù jiāli chīfàn.",
    "note": "Câu kiêm ngữ 邀请 + ai + V.",
    "pair": "邀请……V"
   },
   {
    "promptLang": "vi",
    "prompt": "Nhận được lời mời rồi, nhưng tôi không phải tăng ca thì là đi công tác, e là không đi được.",
    "answer": "收到邀请了，可是我不是加班，就是出差，恐怕去不了。",
    "answerPy": "Shōudào yāoqǐng le, kěshì wǒ bú shì jiābān, jiùshì chūchāi, kǒngpà qù bu liǎo.",
    "note": "不是……就是…… (Bài 19 · điểm 1) + V不了 (Bài 4 · điểm 1).",
    "pair": "不是……，就是……"
   }
  ]
 },
 {
  "n": 29,
  "zh": "庆祝",
  "py": "qìngzhù",
  "pos": "Động từ",
  "vn": "ăn mừng, chúc mừng, kỷ niệm",
  "hv": "khánh chúc",
  "em": "🎉",
  "lesson": 3,
  "explain": [
   "Ăn mừng, tổ chức kỷ niệm một sự kiện vui. Tân ngữ là SỰ VIỆC (庆祝生日, 庆祝成功, 庆祝节日), không phải người — chúc mừng ai thì nói 祝贺你."
  ],
  "usage": "庆祝生日 · 庆祝成功 · 庆祝节日 · 庆祝一下.",
  "collo": [
   "庆祝演出成功",
   "庆祝生日",
   "庆祝一下",
   "庆祝活动"
  ],
  "colloFull": [
   {
    "zh": "庆祝演出成功",
    "py": "Qìngzhù yǎnchū chénggōng",
    "vn": "ăn mừng buổi diễn thành công"
   },
   {
    "zh": "庆祝生日",
    "py": "Qìngzhù shēngrì",
    "vn": "tổ chức sinh nhật"
   },
   {
    "zh": "庆祝一下",
    "py": "Qìngzhù yíxià",
    "vn": "ăn mừng một chút"
   },
   {
    "zh": "庆祝活动",
    "py": "Qìngzhù huódòng",
    "vn": "hoạt động kỷ niệm"
   }
  ],
  "patterns": [
   {
    "s": "庆祝 + sự việc",
    "m": "✗ 庆祝你 → ✓ 祝贺你"
   }
  ],
  "ex_zh": "演出结束后，演员们邀请观众和他们一起庆祝演出成功。",
  "ex_py": "Yǎnchū jiéshù hòu, yǎnyuánmen yāoqǐng guānzhòng hé tāmen yìqǐ qìngzhù yǎnchū chénggōng.",
  "ex_vn": "Buổi diễn kết thúc, các diễn viên mời khán giả cùng họ ăn mừng buổi diễn thành công.",
  "exList": [
   {
    "zh": "演出结束后，演员们邀请观众和他们一起庆祝演出成功。",
    "py": "Yǎnchū jiéshù hòu, yǎnyuánmen yāoqǐng guānzhòng hé tāmen yìqǐ qìngzhù yǎnchū chénggōng.",
    "vn": "Buổi diễn kết thúc, các diễn viên mời khán giả cùng họ ăn mừng buổi diễn thành công."
   },
   {
    "zh": "下周五是妈妈的生日，我们一起庆祝一下吧。",
    "py": "Xià zhōuwǔ shì māma de shēngrì, wǒmen yìqǐ qìngzhù yíxià ba.",
    "vn": "Thứ Sáu tuần sau là sinh nhật mẹ, chúng mình cùng tổ chức một chút nhé."
   }
  ],
  "hanzi": [
   {
    "c": "庆",
    "p": "qìng",
    "type": "会意字 · Chữ hội ý (giản thể)",
    "st": 6,
    "ord": "广 → 大",
    "rad": "广 (nghiễm – mái nhà)",
    "mean": "chúc mừng, ăn mừng; ngày lễ",
    "tip": "Dưới mái nhà (广) có người lớn (大) đang vui mừng → chúc mừng, ăn mừng: 庆祝 (ăn mừng), 国庆 (Quốc khánh). Phồn thể 慶.",
    "cf": "床 chuáng (giường) — trong là 木; 应 yīng (nên) — trong là 丷 + 一",
    "w": "庆祝 / 国庆 / 庆生"
   },
   {
    "c": "祝",
    "p": "zhù",
    "type": "会意字 · Chữ hội ý",
    "st": 9,
    "ord": "礻 → 兄",
    "rad": "礻 (kỳ – thần, cúng tế)",
    "mean": "chúc, cầu chúc",
    "tip": "Bàn thờ (礻) + người anh cả (兄) quỳ trước bàn thờ khấn vái → cầu mong điều tốt → chúc — 祝你生日快乐.",
    "cf": "兄 xiōng (anh trai) — không có 礻; 况 kuàng (tình hình) — bên trái là 冫",
    "w": "祝你 / 祝贺 / 祝福"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Chúng mình thi xong rồi, tối nay đi ăn một bữa ăn mừng nhé!",
    "answer": "咱们考完了，今晚去吃顿饭庆祝一下吧！",
    "answerPy": "Zánmen kǎowán le, jīnwǎn qù chī dùn fàn qìngzhù yíxià ba!",
    "note": "庆祝一下 (V + 一下).",
    "pair": "庆祝一下"
   },
   {
    "promptLang": "vi",
    "prompt": "Sinh nhật mẹ, chúng tôi nấu mấy món mẹ thích để cùng ăn mừng.",
    "answer": "妈妈过生日，我们给她做了几个她爱吃的菜，一起庆祝了一下。",
    "answerPy": "Māma guò shēngrì, wǒmen gěi tā zuò le jǐ gè tā ài chī de cài, yìqǐ qìngzhù le yíxià.",
    "note": "Câu 选词填空 của bài.",
    "pair": "一起庆祝"
   }
  ]
 },
 {
  "n": 30,
  "zh": "点头",
  "py": "diǎntóu",
  "pos": "Động từ",
  "vn": "gật đầu",
  "hv": "điểm đầu",
  "em": "🙆",
  "lesson": 3,
  "explain": [
   "Gật đầu (đồng ý, chào hỏi). Li hợp: 点了点头, 点点头. Đối lập: 摇头 (lắc đầu)."
  ],
  "usage": "点头说 · 点点头 · 点了点头 · 点头同意.",
  "collo": [
   "点头同意",
   "点头答应",
   "点头说",
   "点头和摇头"
  ],
  "colloFull": [
   {
    "zh": "点头同意",
    "py": "Diǎntóu tóngyì",
    "vn": "gật đầu đồng ý"
   },
   {
    "zh": "点头答应",
    "py": "Diǎntóu dāying",
    "vn": "gật đầu nhận lời"
   },
   {
    "zh": "点头说",
    "py": "Diǎntóu shuō",
    "vn": "gật đầu nói"
   },
   {
    "zh": "点头和摇头",
    "py": "Diǎntóu hé yáo tóu",
    "vn": "gật đầu và lắc đầu"
   }
  ],
  "patterns": [
   {
    "s": "点了点头 / 点点头",
    "m": "li hợp lặp lại: gật nhẹ"
   }
  ],
  "ex_zh": "李文点头说：“是啊，以后咱们还来看。”",
  "ex_py": "Lǐ Wén diǎntóu shuō: “shì a, yǐhòu zánmen hái lái kàn.”",
  "ex_vn": "Lý Văn gật đầu nói: “Đúng vậy, sau này chúng mình lại đến xem.”",
  "exList": [
   {
    "zh": "李文点头说：“是啊，以后咱们还来看。”",
    "py": "Lǐ Wén diǎntóu shuō: “shì a, yǐhòu zánmen hái lái kàn.”",
    "vn": "Lý Văn gật đầu nói: “Đúng vậy, sau này chúng mình lại đến xem.”"
   },
   {
    "zh": "在有的国家，点头是“不”的意思。",
    "py": "Zài yǒude guójiā, diǎntóu shì “bù” de yìsi.",
    "vn": "Ở có những nước, gật đầu lại có nghĩa là “không”."
   }
  ],
  "hanzi": [
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
   },
   {
    "c": "头",
    "p": "tóu",
    "type": "会意字 · Chữ hội ý",
    "st": 5,
    "ord": "chấm → chấm → ngang → phẩy → chấm",
    "rad": "大 (đại)",
    "mean": "đầu",
    "tip": "Hai chấm như mái tóc + 大 (người): cái đầu. Ôn: 头疼 (HSK2 Bài 11). Trong 头发, 发 đọc nhẹ \"fa\".",
    "cf": "买 mǎi — trên có 乛",
    "w": "头发 / 头疼"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Nghe tôi nói xong, bố cười gật đầu, chẳng nói gì.",
    "answer": "听我说完，爸爸笑着点头，什么也没说。",
    "answerPy": "Tīng wǒ shuōwán, bàba xiào zhe diǎntóu, shénme yě méi shuō.",
    "note": "V着 + V (HSK 3) + đại từ nghi vấn phiếm chỉ 什么也没….",
    "pair": "笑着点头"
   },
   {
    "promptLang": "vi",
    "prompt": "Ở có những nước, gật đầu lại mang nghĩa “không”.",
    "answer": "在有的国家，点头却是“不”的意思。",
    "answerPy": "Zài yǒude guójiā, diǎntóu què shì “bù” de yìsi.",
    "note": "Ôn 却 (Bài 16 · điểm 4).",
    "pair": "……却……"
   }
  ]
 },
 {
  "n": 31,
  "zh": "作品",
  "py": "zuòpǐn",
  "pos": "Danh từ",
  "vn": "tác phẩm",
  "hv": "tác phẩm",
  "em": "📖",
  "lesson": 4,
  "explain": [
   "Tác phẩm văn học, nghệ thuật (sách, tranh, phim, bài hát…). Lượng từ thường dùng: 部 (tác phẩm lớn), 件 (tác phẩm mỹ thuật)."
  ],
  "usage": "一部作品 · 文学作品 · 艺术作品 · 获奖作品.",
  "collo": [
   "一部作品",
   "文学作品",
   "艺术作品",
   "完成作品"
  ],
  "colloFull": [
   {
    "zh": "一部作品",
    "py": "Yí bù zuòpǐn",
    "vn": "một tác phẩm"
   },
   {
    "zh": "文学作品",
    "py": "Wénxué zuòpǐn",
    "vn": "tác phẩm văn học"
   },
   {
    "zh": "艺术作品",
    "py": "Yìshù zuòpǐn",
    "vn": "tác phẩm nghệ thuật"
   },
   {
    "zh": "完成作品",
    "py": "Wánchéng zuòpǐn",
    "vn": "hoàn thành tác phẩm"
   }
  ],
  "patterns": [
   {
    "s": "一部 + 作品 / 小说 / 电影",
    "m": "lượng từ 部 cho tác phẩm lớn"
   }
  ],
  "ex_zh": "最后完成了一部作品——《马可·波罗游记》。",
  "ex_py": "Zuìhòu wánchéng le yí bù zuòpǐn — «Mǎkě·Bōluó Yóujì».",
  "ex_vn": "Cuối cùng hoàn thành một tác phẩm — “Du ký Marco Polo”.",
  "exList": [
   {
    "zh": "最后完成了一部作品——《马可·波罗游记》。",
    "py": "Zuìhòu wánchéng le yí bù zuòpǐn — «Mǎkě·Bōluó Yóujì».",
    "vn": "Cuối cùng hoàn thành một tác phẩm — “Du ký Marco Polo”."
   },
   {
    "zh": "这位作家的作品我几乎都读过。",
    "py": "Zhè wèi zuòjiā de zuòpǐn wǒ jīhū dōu dú guò.",
    "vn": "Tác phẩm của nhà văn này tôi gần như đã đọc hết."
   }
  ],
  "hanzi": [
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
    "prompt": "Đây là một tác phẩm có ảnh hưởng rất lớn.",
    "answer": "这是一部影响很大的作品。",
    "answerPy": "Zhè shì yí bù yǐngxiǎng hěn dà de zuòpǐn.",
    "note": "Lượng từ 部.",
    "pair": "一部……作品"
   },
   {
    "promptLang": "vi",
    "prompt": "Tác phẩm của nhà văn ấy, tôi đã đọc nó mấy lượt rồi.",
    "answer": "那位作家的作品，我已经把它读了好几遍了。",
    "answerPy": "Nà wèi zuòjiā de zuòpǐn, wǒ yǐjīng bǎ tā dú le hǎojǐ biàn le.",
    "note": "把 + 宾 + 动 + 动量补语 (Bài 19 · điểm 3).",
    "pair": "把……读了好几遍"
   }
  ]
 },
 {
  "n": 32,
  "zh": "作者",
  "py": "zuòzhě",
  "pos": "Danh từ",
  "vn": "tác giả",
  "hv": "tác giả",
  "em": "✍️",
  "lesson": 4,
  "explain": [
   "Người viết ra một tác phẩm, bài viết CỤ THỂ. Phân biệt: 作者 (tác giả của tác phẩm nào đó) — 作家 (nghề nhà văn): người viết một bài báo là 作者 nhưng chưa chắc là 作家."
  ],
  "usage": "这本书的作者 · 文章的作者 · 作者介绍.",
  "collo": [
   "这本书的作者",
   "文章的作者",
   "作者介绍",
   "年轻作者"
  ],
  "colloFull": [
   {
    "zh": "这本书的作者",
    "py": "Zhè běn shū de zuòzhě",
    "vn": "tác giả cuốn sách này"
   },
   {
    "zh": "文章的作者",
    "py": "Wénzhāng de zuòzhě",
    "vn": "tác giả bài viết"
   },
   {
    "zh": "作者介绍",
    "py": "Zuòzhě jièshào",
    "vn": "giới thiệu tác giả"
   },
   {
    "zh": "年轻作者",
    "py": "Niánqīng zuòzhě",
    "vn": "tác giả trẻ"
   }
  ],
  "patterns": [
   {
    "s": "作品 + 的 + 作者",
    "m": "tác giả của …"
   },
   {
    "s": "作者 vs 作家",
    "m": "tác giả (của tác phẩm cụ thể) / nhà văn (nghề)"
   }
  ],
  "ex_zh": "在这部影响很大的作品中，作者向世界介绍了13世纪时的中国。",
  "ex_py": "Zài zhè bù yǐngxiǎng hěn dà de zuòpǐn zhōng, zuòzhě xiàng shìjiè jièshào le 13 shìjì shí de Zhōngguó.",
  "ex_vn": "Trong tác phẩm có ảnh hưởng rất lớn này, tác giả đã giới thiệu với thế giới Trung Quốc thế kỷ 13.",
  "exList": [
   {
    "zh": "在这部影响很大的作品中，作者向世界介绍了13世纪时的中国。",
    "py": "Zài zhè bù yǐngxiǎng hěn dà de zuòpǐn zhōng, zuòzhě xiàng shìjiè jièshào le 13 shìjì shí de Zhōngguó.",
    "vn": "Trong tác phẩm có ảnh hưởng rất lớn này, tác giả đã giới thiệu với thế giới Trung Quốc thế kỷ 13."
   },
   {
    "zh": "这本书的作者是一位年轻的医生。",
    "py": "Zhè běn shū de zuòzhě shì yí wèi niánqīng de yīshēng.",
    "vn": "Tác giả cuốn sách này là một bác sĩ trẻ."
   }
  ],
  "hanzi": [
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
   },
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
    "prompt": "Tác giả này là nhà văn trẻ được yêu thích nhất hiện nay.",
    "answer": "这个作者是现在最受欢迎的青年作家。",
    "answerPy": "Zhège zuòzhě shì xiànzài zuì shòu huānyíng de qīngnián zuòjiā.",
    "note": "Câu 选词填空 của bài.",
    "pair": "作者……作家"
   },
   {
    "promptLang": "vi",
    "prompt": "Trong cuốn sách, tác giả giới thiệu văn hoá Việt Nam với độc giả.",
    "answer": "在这本书中，作者向读者介绍了越南的文化。",
    "answerPy": "Zài zhè běn shū zhōng, zuòzhě xiàng dúzhě jièshào le Yuènán de wénhuà.",
    "note": "向 + ai + 介绍 (HSK 3).",
    "pair": "向……介绍……"
   }
  ]
 },
 {
  "n": 33,
  "zh": "世纪",
  "py": "shìjì",
  "pos": "Danh từ",
  "vn": "thế kỷ",
  "hv": "thế kỷ",
  "em": "🕰️",
  "lesson": 4,
  "explain": [
   "Thế kỷ (100 năm). Trật tự khác tiếng Việt: số đứng TRƯỚC — 13世纪 = thế kỷ 13; 上个世纪 = thế kỷ trước."
  ],
  "usage": "13世纪 · 二十一世纪 · 上个世纪 · 世纪末.",
  "collo": [
   "13世纪",
   "二十一世纪",
   "上个世纪",
   "世纪末"
  ],
  "colloFull": [
   {
    "zh": "13世纪",
    "py": "13 shìjì",
    "vn": "thế kỷ 13"
   },
   {
    "zh": "二十一世纪",
    "py": "Èrshíyī shìjì",
    "vn": "thế kỷ 21"
   },
   {
    "zh": "上个世纪",
    "py": "Shàng gè shìjì",
    "vn": "thế kỷ trước"
   },
   {
    "zh": "世纪末",
    "py": "Shìjì mò",
    "vn": "cuối thế kỷ"
   }
  ],
  "patterns": [
   {
    "s": "số + 世纪",
    "m": "✗ 世纪十三 → ✓ 十三世纪 (ngược tiếng Việt)"
   }
  ],
  "ex_zh": "作者向世界介绍了13世纪时的中国。",
  "ex_py": "Zuòzhě xiàng shìjiè jièshào le 13 shìjì shí de Zhōngguó.",
  "ex_vn": "Tác giả đã giới thiệu với thế giới Trung Quốc thế kỷ 13.",
  "exList": [
   {
    "zh": "作者向世界介绍了13世纪时的中国。",
    "py": "Zuòzhě xiàng shìjiè jièshào le 13 shìjì shí de Zhōngguó.",
    "vn": "Tác giả đã giới thiệu với thế giới Trung Quốc thế kỷ 13."
   },
   {
    "zh": "二十一世纪，科技发展得越来越快。",
    "py": "Èrshíyī shìjì, kējì fāzhǎn de yuèláiyuè kuài.",
    "vn": "Thế kỷ 21, khoa học công nghệ phát triển ngày càng nhanh."
   }
  ],
  "hanzi": [
   {
    "c": "世",
    "p": "shì",
    "type": "指事字 · Chữ chỉ sự",
    "st": 5,
    "ord": "一 → 丨 → 丨 → 一 → 乚",
    "rad": "一 (nhất – một)",
    "mean": "đời, thế hệ; thế giới; 30 năm / thế kỷ",
    "tip": "Chữ cổ là ba chữ 十 (mười) nối liền → 30 năm = một đời người, một thế hệ; từ đó: 世界 (thế giới), 世纪 (thế kỷ — trăm năm), 一生一世 (cả đời).",
    "cf": "也 yě (cũng) — nét cuối móc khác; 廿 niàn (hai mươi) — ít nét hơn",
    "w": "世界 / 世纪 / 去世"
   },
   {
    "c": "纪",
    "p": "jì",
    "type": "左右结构 · Trái-phải",
    "st": 6,
    "ord": "纟 trái → 己 phải",
    "rad": "纟 (mịch)",
    "mean": "kỷ",
    "tip": "Sợi tơ 纟 + 己 → sắp xếp đầu mối → KỶ (ghi chép thời gian). 世纪 = thế kỷ; 纪念 = kỷ niệm.",
    "cf": "记 (jì – ghi, bộ 讠)",
    "w": "世纪 / 纪念 / 年纪"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Marco Polo đến Trung Quốc vào thế kỷ 13.",
    "answer": "马可·波罗是13世纪来到中国的。",
    "answerPy": "Mǎkě·Bōluó shì 13 shìjì láidào Zhōngguó de.",
    "note": "Ôn 是……的 nhấn thời gian (HSK 2).",
    "pair": "是……世纪……的"
   },
   {
    "promptLang": "vi",
    "prompt": "Thế kỷ trước, người đi du lịch nước ngoài rất ít; bây giờ thì khác hẳn rồi.",
    "answer": "上个世纪，出国旅行的人很少；现在却完全不同了。",
    "answerPy": "Shàng gè shìjì, chūguó lǚxíng de rén hěn shǎo; xiànzài què wánquán bùtóng le.",
    "note": "Ôn 却 (Bài 16 · điểm 4).",
    "pair": "上个世纪……"
   }
  ]
 },
 {
  "n": 34,
  "zh": "读者",
  "py": "dúzhě",
  "pos": "Danh từ",
  "vn": "độc giả, người đọc",
  "hv": "độc giả",
  "em": "👓",
  "lesson": 4,
  "explain": [
   "Người đọc sách, báo, tác phẩm. 者 = người làm việc gì: 读者, 作者, 记者 (nhà báo)."
  ],
  "usage": "作为读者 · 年轻读者 · 读者来信 · 受读者欢迎.",
  "collo": [
   "作为读者",
   "年轻读者",
   "读者来信",
   "受读者欢迎"
  ],
  "colloFull": [
   {
    "zh": "作为读者",
    "py": "Zuòwéi dúzhě",
    "vn": "với tư cách độc giả"
   },
   {
    "zh": "年轻读者",
    "py": "Niánqīng dúzhě",
    "vn": "độc giả trẻ"
   },
   {
    "zh": "读者来信",
    "py": "Dúzhě lái xìn",
    "vn": "thư độc giả"
   },
   {
    "zh": "受读者欢迎",
    "py": "Shòu dúzhě huānyíng",
    "vn": "được độc giả yêu thích"
   }
  ],
  "patterns": [
   {
    "s": "V + 者 → người làm việc đó",
    "m": "读者 / 作者 / 记者"
   }
  ],
  "ex_zh": "作为读者，读完这部作品后，我也很想成为作家。",
  "ex_py": "Zuòwéi dúzhě, dúwán zhè bù zuòpǐn hòu, wǒ yě hěn xiǎng chéngwéi zuòjiā.",
  "ex_vn": "Với tư cách là độc giả, đọc xong tác phẩm này, tôi cũng rất muốn trở thành nhà văn.",
  "exList": [
   {
    "zh": "作为读者，读完这部作品后，我也很想成为作家。",
    "py": "Zuòwéi dúzhě, dúwán zhè bù zuòpǐn hòu, wǒ yě hěn xiǎng chéngwéi zuòjiā.",
    "vn": "Với tư cách là độc giả, đọc xong tác phẩm này, tôi cũng rất muốn trở thành nhà văn."
   },
   {
    "zh": "这本小说很受年轻读者的欢迎。",
    "py": "Zhè běn xiǎoshuō hěn shòu niánqīng dúzhě de huānyíng.",
    "vn": "Cuốn tiểu thuyết này rất được độc giả trẻ yêu thích."
   }
  ],
  "hanzi": [
   {
    "c": "读",
    "p": "dú",
    "type": "左右结构 · Trái-phải",
    "st": 10,
    "ord": "讠(ngôn) trái → 卖(biến thể) phải",
    "rad": "讠 (ngôn – lời nói)",
    "mean": "đọc, học",
    "tip": "讠(lời nói) + 卖(phát ra, bán) → phát ra tiếng từ chữ viết = ĐỌC.",
    "cf": "卖 (mài – \"bán\")",
    "w": "读大学 / 读书"
   },
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
    "prompt": "Với tư cách là độc giả, tôi rất thích cách viết của tác giả này.",
    "answer": "作为读者，我很喜欢这个作者的写法。",
    "answerPy": "Zuòwéi dúzhě, wǒ hěn xǐhuan zhège zuòzhě de xiěfǎ.",
    "note": "Ôn 作为 (Bài 13 · điểm 4).",
    "pair": "作为读者，……"
   },
   {
    "promptLang": "vi",
    "prompt": "Cuốn sách này rất được độc giả trẻ yêu thích.",
    "answer": "这本书很受年轻读者的欢迎。",
    "answerPy": "Zhè běn shū hěn shòu niánqīng dúzhě de huānyíng.",
    "note": "受……欢迎.",
    "pair": "受……欢迎"
   }
  ]
 },
 {
  "n": 35,
  "zh": "作家",
  "py": "zuòjiā",
  "pos": "Danh từ",
  "vn": "nhà văn",
  "hv": "tác gia",
  "em": "🖋️",
  "lesson": 4,
  "explain": [
   "Nhà văn — người lấy sáng tác văn học làm nghề. 家 = nhà chuyên môn: 作家, 画家, 艺术家, 旅行家, 科学家."
  ],
  "usage": "青年作家 · 著名作家 · 成为作家 · 做一名作家.",
  "collo": [
   "青年作家",
   "著名作家",
   "成为作家",
   "做一名作家"
  ],
  "colloFull": [
   {
    "zh": "青年作家",
    "py": "Qīngnián zuòjiā",
    "vn": "nhà văn trẻ"
   },
   {
    "zh": "著名作家",
    "py": "Zhùmíng zuòjiā",
    "vn": "nhà văn nổi tiếng"
   },
   {
    "zh": "成为作家",
    "py": "Chéngwéi zuòjiā",
    "vn": "trở thành nhà văn"
   },
   {
    "zh": "做一名作家",
    "py": "Zuò yì míng zuòjiā",
    "vn": "làm một nhà văn"
   }
  ],
  "patterns": [
   {
    "s": "N + 家 → nhà chuyên môn",
    "m": "作家 / 艺术家 / 旅行家"
   }
  ],
  "ex_zh": "作为读者，读完这部作品后，我也很想成为作家。",
  "ex_py": "Zuòwéi dúzhě, dúwán zhè bù zuòpǐn hòu, wǒ yě hěn xiǎng chéngwéi zuòjiā.",
  "ex_vn": "Với tư cách là độc giả, đọc xong tác phẩm này, tôi cũng rất muốn trở thành nhà văn.",
  "exList": [
   {
    "zh": "作为读者，读完这部作品后，我也很想成为作家。",
    "py": "Zuòwéi dúzhě, dúwán zhè bù zuòpǐn hòu, wǒ yě hěn xiǎng chéngwéi zuòjiā.",
    "vn": "Với tư cách là độc giả, đọc xong tác phẩm này, tôi cũng rất muốn trở thành nhà văn."
   },
   {
    "zh": "十几年后，她成为了一名优秀作家。",
    "py": "Shíjǐ nián hòu, tā chéng wèile yì míng yōuxiù zuòjiā.",
    "vn": "Mười mấy năm sau, cô ấy đã trở thành một nhà văn xuất sắc."
   }
  ],
  "hanzi": [
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
   },
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
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Hồi đó cô ấy viết văn không phải để làm nhà văn, chỉ là thấy thú vị.",
    "answer": "那时候她写文章并不是为了成为作家，只是觉得有趣。",
    "answerPy": "Nàshíhou tā xiě wénzhāng bìng bú shì wèile chéngwéi zuòjiā, zhǐshì juéde yǒuqù.",
    "note": "Bài hoàn thành đoạn văn; ôn 并 (Bài 2 · điểm 3).",
    "pair": "并不是为了……"
   },
   {
    "promptLang": "vi",
    "prompt": "Cho dù không trở thành nhà văn, tôi cũng sẽ kiên trì viết nhật ký.",
    "answer": "就是成不了作家，我也会坚持写日记。",
    "answerPy": "Jiùshì chéng bu le zuòjiā, wǒ yě huì jiānchí xiě rìjì.",
    "note": "Ôn 就是……也…… (Bài 11 · điểm 2) + V不了 (Bài 4).",
    "pair": "就是……也……"
   }
  ]
 },
 {
  "n": 36,
  "zh": "版",
  "py": "bǎn",
  "pos": "Danh từ",
  "vn": "bản, phiên bản, ấn bản",
  "hv": "bản",
  "em": "📕",
  "lesson": 4,
  "explain": [
   "Phiên bản của sách, phần mềm… theo ngôn ngữ hoặc lần in: 中文版 (bản tiếng Trung), 英文版, 新版, 第二版, 手机版."
  ],
  "usage": "中文版 · 英文版 · 新版 · 第二版.",
  "collo": [
   "中文版",
   "英文版",
   "新版",
   "手机版"
  ],
  "colloFull": [
   {
    "zh": "中文版",
    "py": "Zhōngwén bǎn",
    "vn": "bản tiếng Trung"
   },
   {
    "zh": "英文版",
    "py": "Yīngwén bǎn",
    "vn": "bản tiếng Anh"
   },
   {
    "zh": "新版",
    "py": "Xīn bǎn",
    "vn": "bản mới"
   },
   {
    "zh": "手机版",
    "py": "Shǒujī bǎn",
    "vn": "phiên bản điện thoại"
   }
  ],
  "patterns": [
   {
    "s": "ngôn ngữ + 版",
    "m": "中文版 / 英文版 / 越南文版"
   }
  ],
  "ex_zh": "前两天，我去书店看到了中文版的《马可·波罗游记》。",
  "ex_py": "Qián liǎng tiān, wǒ qù shūdiàn kàndào le Zhōngwén bǎn de «Mǎkě·Bōluó Yóujì».",
  "ex_vn": "Mấy hôm trước, tôi ra hiệu sách thấy “Du ký Marco Polo” bản tiếng Trung.",
  "exList": [
   {
    "zh": "前两天，我去书店看到了中文版的《马可·波罗游记》。",
    "py": "Qián liǎng tiān, wǒ qù shūdiàn kàndào le Zhōngwén bǎn de «Mǎkě·Bōluó Yóujì».",
    "vn": "Mấy hôm trước, tôi ra hiệu sách thấy “Du ký Marco Polo” bản tiếng Trung."
   },
   {
    "zh": "这本书的越南语版去年刚出版。",
    "py": "Zhè běn shū de Yuènányǔ bǎn qùnián gāng chūbǎn.",
    "vn": "Bản tiếng Việt của cuốn sách này năm ngoái mới xuất bản."
   }
  ],
  "hanzi": [
   {
    "c": "版",
    "p": "bǎn",
    "type": "形声字 · Chữ hình thanh",
    "st": 8,
    "ord": "片 → 反",
    "rad": "片 (phiến – mảnh)",
    "mean": "bản (in), phiên bản, ấn bản",
    "tip": "Mảnh gỗ (片) + 反 (fǎn, gợi âm bǎn): ngày xưa khắc chữ lên tấm gỗ để in → bản in; nay: 中文版 (bản tiếng Trung), 出版 (xuất bản), 新版.",
    "cf": "板 bǎn (tấm ván) — bên trái là 木; 饭 fàn (cơm) — bên trái là 饣",
    "w": "中文版 / 出版 / 新版"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Cuốn sách này có bản tiếng Trung không?",
    "answer": "这本书有中文版吗？",
    "answerPy": "Zhè běn shū yǒu Zhōngwén bǎn ma?",
    "note": "中文版 = bản tiếng Trung.",
    "pair": "……版"
   },
   {
    "promptLang": "vi",
    "prompt": "Tôi đã đọc bản tiếng Anh một lượt, bây giờ lại muốn đọc bản tiếng Trung.",
    "answer": "我把英文版看了一遍，现在又想看中文版。",
    "answerPy": "Wǒ bǎ Yīngwén bǎn kàn le yí biàn, xiànzài yòu xiǎng kàn Zhōngwén bǎn.",
    "note": "把 + 宾 + 动 + 动量补语 (Bài 19 · điểm 3).",
    "pair": "把……看了一遍"
   }
  ]
 },
 {
  "n": 37,
  "zh": "文章",
  "py": "wénzhāng",
  "pos": "Danh từ",
  "vn": "bài văn, bài viết",
  "hv": "văn chương",
  "em": "📝",
  "lesson": 4,
  "explain": [
   "Một bài viết, bài văn cụ thể; lượng từ 篇 (piān).",
   "Bẫy Hán Việt: 文章 = bài viết, không phải “văn chương” nói chung (văn học = 文学)."
  ],
  "usage": "一篇文章 · 写文章 · 发表文章 · 文章的意思.",
  "collo": [
   "一篇文章",
   "写文章",
   "发表文章",
   "文章的意思"
  ],
  "colloFull": [
   {
    "zh": "一篇文章",
    "py": "Yì piān wénzhāng",
    "vn": "một bài viết"
   },
   {
    "zh": "写文章",
    "py": "Xiě wénzhāng",
    "vn": "viết bài"
   },
   {
    "zh": "发表文章",
    "py": "Fābiǎo wénzhāng",
    "vn": "đăng bài"
   },
   {
    "zh": "文章的意思",
    "py": "Wénzhāng de yìsi",
    "vn": "ý của bài viết"
   }
  ],
  "patterns": [
   {
    "s": "一篇 + 文章",
    "m": "lượng từ 篇"
   }
  ],
  "ex_zh": "我决定把自己来中国后写的文章、日记等全部整理出来。",
  "ex_py": "Wǒ juédìng bǎ zìjǐ lái Zhōngguó hòu xiě de wénzhāng, rìjì děng quánbù zhěnglǐ chūlai.",
  "ex_vn": "Tôi quyết định sắp xếp lại toàn bộ những bài viết, nhật ký… tôi viết từ khi đến Trung Quốc.",
  "exList": [
   {
    "zh": "我决定把自己来中国后写的文章、日记等全部整理出来。",
    "py": "Wǒ juédìng bǎ zìjǐ lái Zhōngguó hòu xiě de wénzhāng, rìjì děng quánbù zhěnglǐ chūlai.",
    "vn": "Tôi quyết định sắp xếp lại toàn bộ những bài viết, nhật ký… tôi viết từ khi đến Trung Quốc."
   },
   {
    "zh": "你理解这篇文章的意思了吗？",
    "py": "Nǐ lǐjiě zhè piān wénzhāng de yìsi le ma?",
    "vn": "Bạn đã hiểu ý của bài viết này chưa?"
   }
  ],
  "hanzi": [
   {
    "c": "文",
    "p": "wén",
    "type": "独体字 · Chữ đơn (tượng hình)",
    "st": 4,
    "ord": "nét liền, hình hoa văn",
    "rad": "文 (văn)",
    "mean": "chữ viết, văn tự",
    "tip": "Chữ tượng hình mô phỏng hoa văn trên thân người xưa → mở rộng nghĩa CHỮ VIẾT, VĂN TỰ.",
    "cf": "齐 (qí – \"ngang bằng\", không có bộ 文\")",
    "w": "中文 / 文字 / 文化"
   },
   {
    "c": "章",
    "p": "zhāng",
    "type": "上下结构 · Trên-dưới",
    "st": 11,
    "ord": "立 trên → 早 dưới",
    "rad": "立 (lập)",
    "mean": "chương, đoạn văn",
    "tip": "Chữ hội ý 音(âm nhạc) + 十(mười, kết thúc) → một KHÚC NHẠC hoàn chỉnh, mở rộng thành CHƯƠNG/ĐOẠN VĂN, kết hợp 文 thành 文章 = BÀI VĂN.",
    "cf": "张 (zhāng – \"tờ, họ Trương\")",
    "w": "文章 / 第一章 / 图章"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Bài viết này tôi đọc mấy lượt rồi mà vẫn không nhớ được.",
    "answer": "这篇文章我已经读了好几遍了，还是记不住。",
    "answerPy": "Zhè piān wénzhāng wǒ yǐjīng dú le hǎojǐ biàn le, háishi jì bu zhù.",
    "note": "Câu 选词填空 + 可能补语 记不住 (Bài 4).",
    "pair": "读了好几遍"
   },
   {
    "promptLang": "vi",
    "prompt": "Bạn phải hiểu ý của bài viết trước, sau đó mới học thuộc.",
    "answer": "你要先理解这篇文章的意思，然后再记。",
    "answerPy": "Nǐ yào xiān lǐjiě zhè piān wénzhāng de yìsi, ránhòu zài jì.",
    "note": "Ôn 先……然后…… (Bài 14 · điểm 2).",
    "pair": "先……然后……"
   }
  ]
 },
 {
  "n": 38,
  "zh": "全部",
  "py": "quánbù",
  "pos": "Danh từ",
  "vn": "toàn bộ, tất cả",
  "hv": "toàn bộ",
  "em": "💯",
  "lesson": 4,
  "explain": [
   "Toàn bộ, tất cả, không sót phần nào. Làm định ngữ (全部的作品) hoặc trạng ngữ đứng trước động từ (全部整理出来)."
  ],
  "usage": "全部做完 · 全部整理出来 · 全部的钱 · 全部同学.",
  "collo": [
   "全部做完",
   "全部整理出来",
   "全部的钱",
   "全部同学"
  ],
  "colloFull": [
   {
    "zh": "全部做完",
    "py": "Quánbù zuòwán",
    "vn": "làm xong hết"
   },
   {
    "zh": "全部整理出来",
    "py": "Quánbù zhěnglǐ chūlai",
    "vn": "sắp xếp lại toàn bộ"
   },
   {
    "zh": "全部的钱",
    "py": "Quánbù de qián",
    "vn": "toàn bộ số tiền"
   },
   {
    "zh": "全部同学",
    "py": "Quánbù tóngxué",
    "vn": "tất cả các bạn"
   }
  ],
  "patterns": [
   {
    "s": "把 + N + 全部 + V + 补语",
    "m": "全部 đứng trước động từ"
   }
  ],
  "ex_zh": "我决定把自己来中国后写的文章、日记等全部整理出来。",
  "ex_py": "Wǒ juédìng bǎ zìjǐ lái Zhōngguó hòu xiě de wénzhāng, rìjì děng quánbù zhěnglǐ chūlai.",
  "ex_vn": "Tôi quyết định sắp xếp lại toàn bộ những bài viết, nhật ký… tôi viết từ khi đến Trung Quốc.",
  "exList": [
   {
    "zh": "我决定把自己来中国后写的文章、日记等全部整理出来。",
    "py": "Wǒ juédìng bǎ zìjǐ lái Zhōngguó hòu xiě de wénzhāng, rìjì děng quánbù zhěnglǐ chūlai.",
    "vn": "Tôi quyết định sắp xếp lại toàn bộ những bài viết, nhật ký… tôi viết từ khi đến Trung Quốc."
   },
   {
    "zh": "今天的作业我已经全部做完了。",
    "py": "Jīntiān de zuòyè wǒ yǐjīng quánbù zuòwán le.",
    "vn": "Bài tập hôm nay tôi đã làm xong hết rồi."
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
    "prompt": "Hôm nay phải gửi đi toàn bộ số hàng này.",
    "answer": "今天必须把这些货全部发出去。",
    "answerPy": "Jīntiān bìxū bǎ zhèxiē huò quánbù fāchū qù.",
    "note": "把 + 宾 + 全部 + V + 补语 (HSK 3).",
    "pair": "把……全部……"
   },
   {
    "promptLang": "vi",
    "prompt": "Nhiều từ mới như vậy, tôi mất ba ngày mới học xong hết.",
    "answer": "这么多生词，我用了三天时间才全部学完。",
    "answerPy": "Zhème duō shēngcí, wǒ yòng le sān tiān shíjiān cái quánbù xuéwán.",
    "note": "Ôn 才 (HSK 3).",
    "pair": "才全部学完"
   }
  ]
 },
 {
  "n": 39,
  "zh": "整理",
  "py": "zhěnglǐ",
  "pos": "Động từ",
  "vn": "sắp xếp, chỉnh lý, thu dọn",
  "hv": "chỉnh lý",
  "em": "🗂️",
  "lesson": 4,
  "explain": [
   "Sắp xếp cho gọn gàng, có trật tự (đồ đạc, tài liệu, bài viết). 整理出来 = sắp xếp xong, thành sản phẩm. Gần 收拾 (dọn đồ) nhưng 整理 dùng được cả cho tài liệu, vở ghi."
  ],
  "usage": "整理房间 · 整理资料 · 整理出来 · 整理一下.",
  "collo": [
   "整理房间",
   "整理资料",
   "整理笔记",
   "整理出来"
  ],
  "colloFull": [
   {
    "zh": "整理房间",
    "py": "Zhěnglǐ fángjiān",
    "vn": "dọn phòng"
   },
   {
    "zh": "整理资料",
    "py": "Zhěnglǐ zīliào",
    "vn": "sắp xếp tài liệu"
   },
   {
    "zh": "整理笔记",
    "py": "Zhěnglǐ bǐjì",
    "vn": "chỉnh lý vở ghi"
   },
   {
    "zh": "整理出来",
    "py": "Zhěnglǐ chūlai",
    "vn": "sắp xếp xong"
   }
  ],
  "patterns": [
   {
    "s": "把 + N + 整理 + 出来 / 好",
    "m": "kết quả của việc sắp xếp"
   },
   {
    "s": "把 + N + 整理了 + thời lượng",
    "m": "Bài 19 · điểm 4"
   }
  ],
  "ex_zh": "我决定把自己来中国后写的文章、日记等全部整理出来。",
  "ex_py": "Wǒ juédìng bǎ zìjǐ lái Zhōngguó hòu xiě de wénzhāng, rìjì děng quánbù zhěnglǐ chūlai.",
  "ex_vn": "Tôi quyết định sắp xếp lại toàn bộ những bài viết, nhật ký… tôi viết từ khi đến Trung Quốc.",
  "exList": [
   {
    "zh": "我决定把自己来中国后写的文章、日记等全部整理出来。",
    "py": "Wǒ juédìng bǎ zìjǐ lái Zhōngguó hòu xiě de wénzhāng, rìjì děng quánbù zhěnglǐ chūlai.",
    "vn": "Tôi quyết định sắp xếp lại toàn bộ những bài viết, nhật ký… tôi viết từ khi đến Trung Quốc."
   },
   {
    "zh": "桌子上的东西太乱了，我把它们整理了半个小时。",
    "py": "Zhuōzi shàng de dōngxi tài luàn le, wǒ bǎ tāmen zhěnglǐ le bàn gè xiǎoshí.",
    "vn": "Đồ trên bàn lộn xộn quá, tôi sắp xếp chúng mất nửa tiếng."
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
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Đồ trên bàn nhiều quá, lộn xộn quá, tôi sắp xếp chúng mất nửa tiếng.",
    "answer": "桌子上的东西太多、太乱了，我把它们整理了半个小时。",
    "answerPy": "Zhuōzi shàng de dōngxi tài duō, tài luàn le, wǒ bǎ tāmen zhěnglǐ le bàn gè xiǎoshí.",
    "note": "把 + 宾 + 动 + 时量补语 (Bài 19 · điểm 4).",
    "pair": "把……整理了半个小时"
   },
   {
    "promptLang": "vi",
    "prompt": "Thi xong, tôi sắp xếp lại vở ghi của cả học kỳ một chút.",
    "answer": "考完试，我把整个学期的笔记整理了一下。",
    "answerPy": "Kǎowán shì, wǒ bǎ zhěnggè xuéqī de bǐjì zhěnglǐ le yíxià.",
    "note": "把 + V + 一下.",
    "pair": "把……整理一下"
   }
  ]
 },
 {
  "n": 40,
  "zh": "文字",
  "py": "wénzì",
  "pos": "Danh từ",
  "vn": "chữ viết; lời văn, câu chữ",
  "hv": "văn tự",
  "em": "🔤",
  "lesson": 4,
  "explain": [
   "(1) Chữ viết (汉字 là một loại 文字). (2) Lời văn, câu chữ của tác phẩm: 这部小说的文字很美. (3) Phần chữ (khác phần ảnh): 文字加图片."
  ],
  "usage": "文字很美 · 文字加图片 · 中国文字 · 文字工作.",
  "collo": [
   "文字很美",
   "文字加图片",
   "中国文字",
   "文字工作"
  ],
  "colloFull": [
   {
    "zh": "文字很美",
    "py": "Wénzì hěn měi",
    "vn": "lời văn rất đẹp"
   },
   {
    "zh": "文字加图片",
    "py": "Wénzì jiā túpiàn",
    "vn": "chữ kèm ảnh"
   },
   {
    "zh": "中国文字",
    "py": "Zhōngguó wénzì",
    "vn": "chữ viết Trung Quốc"
   },
   {
    "zh": "文字工作",
    "py": "Wénzì gōngzuò",
    "vn": "công việc viết lách"
   }
  ],
  "patterns": [
   {
    "s": "文字 + 加 + 图片",
    "m": "chữ + ảnh"
   },
   {
    "s": "文字 / 文章 / 文学",
    "m": "chữ, lời văn / bài viết / văn học"
   }
  ],
  "ex_zh": "完成一部文字加图片的作品——《东方旅行日记》。",
  "ex_py": "Wánchéng yí bù wénzì jiā túpiàn de zuòpǐn — «Dōngfāng Lǚxíng Rìjì».",
  "ex_vn": "Hoàn thành một tác phẩm có chữ kèm ảnh — “Nhật ký du hành phương Đông”.",
  "exList": [
   {
    "zh": "完成一部文字加图片的作品——《东方旅行日记》。",
    "py": "Wánchéng yí bù wénzì jiā túpiàn de zuòpǐn — «Dōngfāng Lǚxíng Rìjì».",
    "vn": "Hoàn thành một tác phẩm có chữ kèm ảnh — “Nhật ký du hành phương Đông”."
   },
   {
    "zh": "这部小说的文字很美，我都看了好几遍了。",
    "py": "Zhè bù xiǎoshuō de wénzì hěn měi, wǒ dōu kàn le hǎojǐ biàn le.",
    "vn": "Lời văn của cuốn tiểu thuyết này rất đẹp, tôi đã đọc mấy lượt rồi."
   }
  ],
  "hanzi": [
   {
    "c": "文",
    "p": "wén",
    "type": "独体字 · Chữ đơn (tượng hình)",
    "st": 4,
    "ord": "nét liền, hình hoa văn",
    "rad": "文 (văn)",
    "mean": "chữ viết, văn tự",
    "tip": "Chữ tượng hình mô phỏng hoa văn trên thân người xưa → mở rộng nghĩa CHỮ VIẾT, VĂN TỰ.",
    "cf": "齐 (qí – \"ngang bằng\", không có bộ 文\")",
    "w": "中文 / 文字 / 文化"
   },
   {
    "c": "字",
    "p": "zì",
    "type": "上下结构 · Trên-dưới",
    "st": 6,
    "ord": "宀(miên) trên → 子(tử) dưới",
    "rad": "宀 (miên – mái nhà)",
    "mean": "chữ, tên",
    "tip": "宀(mái nhà) + 子(con) → con cái sinh ra trong nhà được đặt CHỮ, TÊN.",
    "cf": "子 (zǐ – \"con\")",
    "w": "汉字 / 写字"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Lời văn của cuốn tiểu thuyết này rất đẹp, tôi đọc mấy lượt rồi.",
    "answer": "这部小说的文字很美，我都看了好几遍了。",
    "answerPy": "Zhè bù xiǎoshuō de wénzì hěn měi, wǒ dōu kàn le hǎojǐ biàn le.",
    "note": "Câu 选词填空 của bài.",
    "pair": "……的文字很美"
   },
   {
    "promptLang": "vi",
    "prompt": "Chữ Hán là một trong những chữ viết lâu đời nhất thế giới.",
    "answer": "汉字是世界上最古老的文字之一。",
    "answerPy": "Hànzì shì shìjiè shàng zuì gǔlǎo de wénzì zhīyī.",
    "note": "Cấu trúc 最……之一 = một trong những … nhất.",
    "pair": "……之一"
   }
  ]
 },
 {
  "n": 41,
  "zh": "图片",
  "py": "túpiàn",
  "pos": "Danh từ",
  "vn": "hình ảnh, tranh ảnh",
  "hv": "đồ phiến",
  "em": "🖼️",
  "lesson": 4,
  "explain": [
   "Hình ảnh, tranh ảnh (ảnh chụp, hình minh hoạ, ảnh trên mạng); lượng từ 张."
  ],
  "usage": "一张图片 · 看图片 · 网上的图片 · 文字加图片.",
  "collo": [
   "一张图片",
   "看图片",
   "网上的图片",
   "图片和文字"
  ],
  "colloFull": [
   {
    "zh": "一张图片",
    "py": "Yì zhāng túpiàn",
    "vn": "một tấm ảnh"
   },
   {
    "zh": "看图片",
    "py": "Kàn túpiàn",
    "vn": "xem ảnh"
   },
   {
    "zh": "网上的图片",
    "py": "Wǎngshang de túpiàn",
    "vn": "ảnh trên mạng"
   },
   {
    "zh": "图片和文字",
    "py": "Túpiàn hé wénzì",
    "vn": "hình và chữ"
   }
  ],
  "patterns": [
   {
    "s": "一张 + 图片",
    "m": "lượng từ 张"
   }
  ],
  "ex_zh": "完成一部文字加图片的作品——《东方旅行日记》。",
  "ex_py": "Wánchéng yí bù wénzì jiā túpiàn de zuòpǐn — «Dōngfāng Lǚxíng Rìjì».",
  "ex_vn": "Hoàn thành một tác phẩm có chữ kèm ảnh — “Nhật ký du hành phương Đông”.",
  "exList": [
   {
    "zh": "完成一部文字加图片的作品——《东方旅行日记》。",
    "py": "Wánchéng yí bù wénzì jiā túpiàn de zuòpǐn — «Dōngfāng Lǚxíng Rìjì».",
    "vn": "Hoàn thành một tác phẩm có chữ kèm ảnh — “Nhật ký du hành phương Đông”."
   },
   {
    "zh": "他把旅行时拍的图片都转发给了我们。",
    "py": "Tā bǎ lǚxíng shí pāi de túpiàn dōu zhuǎnfā gěi le wǒmen.",
    "vn": "Anh ấy chuyển cho chúng tôi hết những tấm ảnh chụp khi đi du lịch."
   }
  ],
  "hanzi": [
   {
    "c": "图",
    "p": "tú",
    "type": "形声字 · Chữ hình thanh",
    "st": 8,
    "ord": "sổ → ngang gập → 冬 (viết bên trong) → ngang đóng đáy",
    "rad": "囗 (vi – vây quanh)",
    "mean": "bức vẽ, bản đồ",
    "tip": "囗 (khung) + 冬 (chỉ âm): hình vẽ trong một khung → bức tranh, bản đồ. 地 đã gặp trong 地铁 (HSK2 Bài 12).",
    "cf": "国 guó (中国) — trong khung là 玉",
    "w": "地图 / 世界地图"
   },
   {
    "c": "片",
    "p": "piàn",
    "type": "象形字 · Chữ tượng hình",
    "st": 4,
    "ord": "丿 → 丨 → 一 → 乛 → 丨",
    "rad": "片 (phiến – mảnh)",
    "mean": "mảnh, tấm (dẹt, mỏng); phim, ảnh",
    "tip": "Hình nửa phải của khúc gỗ bị bổ đôi → miếng mỏng, tấm dẹt: 图片 (hình ảnh), 照片 (ảnh chụp), 名片 (danh thiếp); cũng là lượng từ: 一片叶子.",
    "cf": "版 bǎn (bản) — có 片 bên trái; 斤 jīn (cân) — nét khác hẳn",
    "w": "图片 / 照片 / 名片"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Anh ấy chuyển tiếp cho chúng tôi toàn bộ ảnh chụp khi đi du lịch.",
    "answer": "他把旅行时拍的图片全部转发给了我们。",
    "answerPy": "Tā bǎ lǚxíng shí pāi de túpiàn quánbù zhuǎnfā gěi le wǒmen.",
    "note": "把 + 全部 + V + 给.",
    "pair": "把……转发给……"
   },
   {
    "promptLang": "vi",
    "prompt": "Cuốn sách này chữ ít, ảnh nhiều, rất hợp cho trẻ con đọc.",
    "answer": "这本书文字少，图片多，很适合小孩子看。",
    "answerPy": "Zhè běn shū wénzì shǎo, túpiàn duō, hěn shìhé xiǎoháizi kàn.",
    "note": "Ôn 适合 (HSK 3).",
    "pair": "……很适合……"
   }
  ]
 },
 {
  "n": 42,
  "zh": "报考",
  "py": "bàokǎo",
  "pos": "Động từ",
  "vn": "đăng ký dự thi (vào trường, ngành)",
  "hv": "báo khảo",
  "em": "🎓",
  "lesson": 4,
  "explain": [
   "Đăng ký dự thi vào một trường / chuyên ngành / bậc học: 报考 + 学校 / 专业 / 研究生. Tân ngữ là nơi muốn vào, không phải kỳ thi (✗ 报考考试 → ✓ 报名参加考试)."
  ],
  "usage": "报考研究生 · 报考大学 · 报考专业 · 报考条件.",
  "collo": [
   "报考研究生",
   "报考大学",
   "报考专业",
   "报考条件"
  ],
  "colloFull": [
   {
    "zh": "报考研究生",
    "py": "Bàokǎo yánjiūshēng",
    "vn": "đăng ký thi cao học"
   },
   {
    "zh": "报考大学",
    "py": "Bàokǎo dàxué",
    "vn": "đăng ký thi đại học"
   },
   {
    "zh": "报考专业",
    "py": "Bàokǎo zhuānyè",
    "vn": "chuyên ngành đăng ký thi"
   },
   {
    "zh": "报考条件",
    "py": "Bàokǎo tiáojiàn",
    "vn": "điều kiện dự thi"
   }
  ],
  "patterns": [
   {
    "s": "报考 + trường / ngành / bậc học",
    "m": "✗ 报考考试"
   }
  ],
  "ex_zh": "同时我也想继续学习中文和中国文化，报考中国语言文学专业的研究生。",
  "ex_py": "Tóngshí wǒ yě xiǎng jìxù xuéxí Zhōngwén hé Zhōngguó wénhuà, bàokǎo Zhōngguó yǔyán wénxué zhuānyè de yánjiūshēng.",
  "ex_vn": "Đồng thời tôi cũng muốn tiếp tục học tiếng Trung và văn hoá Trung Quốc, đăng ký thi cao học chuyên ngành ngôn ngữ văn học Trung Quốc.",
  "exList": [
   {
    "zh": "同时我也想继续学习中文和中国文化，报考中国语言文学专业的研究生。",
    "py": "Tóngshí wǒ yě xiǎng jìxù xuéxí Zhōngwén hé Zhōngguó wénhuà, bàokǎo Zhōngguó yǔyán wénxué zhuānyè de yánjiūshēng.",
    "vn": "Đồng thời tôi cũng muốn tiếp tục học tiếng Trung và văn hoá Trung Quốc, đăng ký thi cao học chuyên ngành ngôn ngữ văn học Trung Quốc."
   },
   {
    "zh": "姐姐今年报考了北京的一所大学。",
    "py": "Jiějie jīnnián bàokǎo le Běijīng de yì suǒ dàxué.",
    "vn": "Năm nay chị tôi đăng ký thi vào một trường đại học ở Bắc Kinh."
   }
  ],
  "hanzi": [
   {
    "c": "报",
    "p": "bào",
    "type": "左右结构 · Trái-phải",
    "st": 7,
    "ord": "扌 trái → 𠬝 phải",
    "rad": "扌 (thủ)",
    "mean": "báo",
    "tip": "Tay 扌 + 𠬝 → BÁO cáo, thông báo. 报名 = báo tên = đăng ký; 报纸 = báo; 报道 = đưa tin.",
    "cf": "服 (fú – phục)",
    "w": "报名 / 报纸 / 报道 / 预报"
   },
   {
    "c": "考",
    "p": "kǎo",
    "type": "独体字 · Chữ đơn",
    "st": 6,
    "ord": "土→ 一 →耂 (biến thể)",
    "rad": "耂 (lão – biến thể)",
    "mean": "thi, kiểm tra",
    "tip": "Liên quan tới việc người lớn tuổi/có kinh nghiệm ra đề kiểm tra kiến thức.",
    "cf": "老 (lǎo – \"già\", cùng bộ 耂)",
    "w": "考试 / 考虑 / 高考"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Năm sau tôi định thi cao học chuyên ngành ngôn ngữ văn học Trung Quốc.",
    "answer": "明年我打算报考中国语言文学专业的研究生。",
    "answerPy": "Míngnián wǒ dǎsuàn bàokǎo Zhōngguó yǔyán wénxué zhuānyè de yánjiūshēng.",
    "note": "Câu bài khoá 4.",
    "pair": "报考……研究生"
   },
   {
    "promptLang": "vi",
    "prompt": "Để thi vào trường đó, anh ấy đã ôn nội dung thi suốt một năm.",
    "answer": "为了报考那所大学，他把考试内容复习了整整一年。",
    "answerPy": "Wèile bàokǎo nà suǒ dàxué, tā bǎ kǎoshì nèiróng fùxí le zhěngzhěng yì nián.",
    "note": "把 + 宾 + 动 + 时量补语 (Bài 19 · điểm 4).",
    "pair": "把……复习了整整一年"
   }
  ]
 },
 {
  "n": 43,
  "zh": "文学",
  "py": "wénxué",
  "pos": "Danh từ",
  "vn": "văn học",
  "hv": "văn học",
  "em": "📚",
  "lesson": 4,
  "explain": [
   "Văn học — nghệ thuật dùng ngôn ngữ (tiểu thuyết, thơ, kịch, tản văn…); cũng là tên chuyên ngành: 中国语言文学专业 (ngành ngôn ngữ và văn học Trung Quốc)."
  ],
  "usage": "中国文学 · 文学作品 · 语言文学专业 · 文学家.",
  "collo": [
   "中国文学",
   "文学作品",
   "语言文学专业",
   "文学家"
  ],
  "colloFull": [
   {
    "zh": "中国文学",
    "py": "Zhōngguó wénxué",
    "vn": "văn học Trung Quốc"
   },
   {
    "zh": "文学作品",
    "py": "Wénxué zuòpǐn",
    "vn": "tác phẩm văn học"
   },
   {
    "zh": "语言文学专业",
    "py": "Yǔyán wénxué zhuānyè",
    "vn": "chuyên ngành ngôn ngữ văn học"
   },
   {
    "zh": "文学家",
    "py": "Wénxuéjiā",
    "vn": "nhà văn học"
   }
  ],
  "patterns": [
   {
    "s": "文学 / 文章 / 文字",
    "m": "văn học (lĩnh vực) / bài viết / chữ, lời văn"
   }
  ],
  "ex_zh": "同时我也想继续学习中文和中国文化，报考中国语言文学专业的研究生。",
  "ex_py": "Tóngshí wǒ yě xiǎng jìxù xuéxí Zhōngwén hé Zhōngguó wénhuà, bàokǎo Zhōngguó yǔyán wénxué zhuānyè de yánjiūshēng.",
  "ex_vn": "Đồng thời tôi cũng muốn tiếp tục học tiếng Trung và văn hoá Trung Quốc, đăng ký thi cao học chuyên ngành ngôn ngữ văn học Trung Quốc.",
  "exList": [
   {
    "zh": "同时我也想继续学习中文和中国文化，报考中国语言文学专业的研究生。",
    "py": "Tóngshí wǒ yě xiǎng jìxù xuéxí Zhōngwén hé Zhōngguó wénhuà, bàokǎo Zhōngguó yǔyán wénxué zhuānyè de yánjiūshēng.",
    "vn": "Đồng thời tôi cũng muốn tiếp tục học tiếng Trung và văn hoá Trung Quốc, đăng ký thi cao học chuyên ngành ngôn ngữ văn học Trung Quốc."
   },
   {
    "zh": "我从小就喜欢文学，最喜欢看小说。",
    "py": "Wǒ cóng xiǎo jiù xǐhuan wénxué, zuì xǐhuan kàn xiǎoshuō.",
    "vn": "Tôi thích văn học từ nhỏ, thích nhất là đọc tiểu thuyết."
   }
  ],
  "hanzi": [
   {
    "c": "文",
    "p": "wén",
    "type": "独体字 · Chữ đơn (tượng hình)",
    "st": 4,
    "ord": "nét liền, hình hoa văn",
    "rad": "文 (văn)",
    "mean": "chữ viết, văn tự",
    "tip": "Chữ tượng hình mô phỏng hoa văn trên thân người xưa → mở rộng nghĩa CHỮ VIẾT, VĂN TỰ.",
    "cf": "齐 (qí – \"ngang bằng\", không có bộ 文\")",
    "w": "中文 / 文字 / 文化"
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
    "prompt": "Tôi rất thích văn học, tác phẩm của nhà văn này tôi gần như đã đọc hết.",
    "answer": "我很喜欢文学，这位作家的作品我差不多都读过了。",
    "answerPy": "Wǒ hěn xǐhuan wénxué, zhè wèi zuòjiā de zuòpǐn wǒ chàbuduō dōu dú guò le.",
    "note": "差不多 + 都 (HSK 3).",
    "pair": "差不多都……"
   },
   {
    "promptLang": "vi",
    "prompt": "Văn học không chỉ giúp chúng ta hiểu một đất nước, mà còn giúp ta hiểu chính mình.",
    "answer": "文学不仅能让我们了解一个国家，还能让我们了解自己。",
    "answerPy": "Wénxué bùjǐn néng ràng wǒmen liǎojiě yí gè guójiā, hái néng ràng wǒmen liǎojiě zìjǐ.",
    "note": "Ôn 不仅……还…… (Bài 3 · điểm 2).",
    "pair": "不仅……还……"
   }
  ]
 },
 {
  "n": 44,
  "zh": "马可·波罗",
  "py": "Mǎkě·Bōluó",
  "pos": "Danh từ riêng",
  "vn": "Marco Polo",
  "hv": "Mã Khả Ba La",
  "em": "🧭",
  "lesson": 4,
  "explain": [
   "Nhà du hành, thương nhân người Ý (1254–1324), theo gia đình đến Trung Quốc năm 1275, sống ở đó khoảng 17 năm; cuốn du ký của ông giúp châu Âu biết đến Trung Quốc."
  ],
  "usage": "马可·波罗来到中国 · 马可·波罗的游记.",
  "collo": [
   "马可·波罗的故事",
   "马可·波罗的游记",
   "马可·波罗来到中国",
   "像马可·波罗一样"
  ],
  "colloFull": [
   {
    "zh": "马可·波罗的故事",
    "py": "Mǎkě·Bōluó de gùshi",
    "vn": "câu chuyện về Marco Polo"
   },
   {
    "zh": "马可·波罗的游记",
    "py": "Mǎkě·Bōluó de yóujì",
    "vn": "du ký của Marco Polo"
   },
   {
    "zh": "马可·波罗来到中国",
    "py": "Mǎkě·Bōluó láidào Zhōngguó",
    "vn": "Marco Polo đến Trung Quốc"
   },
   {
    "zh": "像马可·波罗一样",
    "py": "Xiàng mǎkě · bō luó yíyàng",
    "vn": "giống như Marco Polo"
   }
  ],
  "patterns": [
   {
    "s": "在 + năm + 来到 + nơi",
    "m": "thời gian đứng trước động từ"
   }
  ],
  "ex_zh": "马可·波罗是意大利旅行家，在1275年和家人来到中国。",
  "ex_py": "Mǎkě·Bōluó shì Yìdàlì lǚxíngjiā, zài 1275 nián hé jiārén láidào Zhōngguó.",
  "ex_vn": "Marco Polo là nhà du hành người Ý, năm 1275 cùng gia đình đến Trung Quốc.",
  "exList": [
   {
    "zh": "马可·波罗是意大利旅行家，在1275年和家人来到中国。",
    "py": "Mǎkě·Bōluó shì Yìdàlì lǚxíngjiā, zài 1275 nián hé jiārén láidào Zhōngguó.",
    "vn": "Marco Polo là nhà du hành người Ý, năm 1275 cùng gia đình đến Trung Quốc."
   },
   {
    "zh": "马可·波罗在中国大约生活了17年。",
    "py": "Mǎkě·Bōluó zài Zhōngguó dàyuē shēnghuó le 17 nián.",
    "vn": "Marco Polo đã sống ở Trung Quốc khoảng 17 năm."
   }
  ],
  "hanzi": [
   {
    "c": "马",
    "p": "mǎ",
    "type": "象形字 · Chữ tượng hình",
    "st": 3,
    "ord": "ngang gập → sổ gập gập móc → hất",
    "rad": "马 (mã – ngựa)",
    "mean": "ngựa",
    "tip": "Hình con ngựa. 马上 = \"đang ở trên lưng ngựa\" → lên đường ngay → lập tức.",
    "cf": "妈 mā, 吗 ma, 码 mǎ (号码 – Bài 1) — đều có phần 马 chỉ âm",
    "w": "马上 / 马上来"
   },
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
    "c": "波",
    "p": "bō",
    "type": "形声字 · Chữ hình thanh",
    "st": 8,
    "ord": "氵 → 皮",
    "rad": "氵 (thuỷ – nước)",
    "mean": "sóng; (phiên âm) ba, bô",
    "tip": "Nước (氵) + 皮 (pí, gợi âm bō): lớp “da” gợn trên mặt nước → sóng; còn dùng phiên âm tên nước ngoài: 马可·波罗 (Marco Polo), 波兰 (Ba Lan).",
    "cf": "破 pò (vỡ) — bên trái là 石; 被 bèi (bị) — bên trái là 衤",
    "w": "波浪 / 波兰 / 马可·波罗"
   },
   {
    "c": "罗",
    "p": "luó",
    "type": "会意字 · Chữ hội ý (giản thể)",
    "st": 8,
    "ord": "罒 → 夕",
    "rad": "罒 (võng – lưới)",
    "mean": "lưới bắt chim; (phiên âm) la, lô",
    "tip": "Cái lưới (罒) giăng ra lúc chiều tối (夕) để bắt chim → nghĩa gốc là lưới; nay chủ yếu để phiên âm tên nước ngoài: 马可·波罗, 罗马 (Rô-ma), 俄罗斯 (Nga).",
    "cf": "夕 xī (chiều tối) — không có 罒; 买 mǎi (mua) — trên là 乛",
    "w": "罗马 / 俄罗斯 / 马可·波罗"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Marco Polo sống ở Trung Quốc khoảng 17 năm.",
    "answer": "马可·波罗在中国大约生活了17年。",
    "answerPy": "Mǎkě·Bōluó zài Zhōngguó dàyuē shēnghuó le 17 nián.",
    "note": "Ôn 大约 (Bài 13 · điểm 3) + 时量补语.",
    "pair": "大约……年"
   },
   {
    "promptLang": "vi",
    "prompt": "Marco Polo đến Trung Quốc vào thế kỷ 13.",
    "answer": "马可·波罗是13世纪来到中国的。",
    "answerPy": "Mǎkě·Bōluó shì 13 shìjì láidào Zhōngguó de.",
    "note": "Ôn 是……的 (HSK 2).",
    "pair": "是……来到……的"
   }
  ]
 },
 {
  "n": 45,
  "zh": "意大利",
  "py": "Yìdàlì",
  "pos": "Danh từ riêng",
  "vn": "nước Ý (Italia)",
  "hv": "Ý Đại Lợi",
  "em": "🇮🇹",
  "lesson": 4,
  "explain": [
   "Nước Ý ở Nam Âu, thủ đô Rô-ma (罗马), quê hương của Marco Polo, nổi tiếng về nghệ thuật, kiến trúc, ẩm thực (pizza, mì Ý)."
  ],
  "usage": "意大利人 · 意大利菜 · 去意大利玩.",
  "collo": [
   "意大利人",
   "意大利菜",
   "去意大利",
   "意大利旅行家"
  ],
  "colloFull": [
   {
    "zh": "意大利人",
    "py": "Yìdàlì rén",
    "vn": "người Ý"
   },
   {
    "zh": "意大利菜",
    "py": "Yìdàlì cài",
    "vn": "món Ý"
   },
   {
    "zh": "去意大利",
    "py": "Qù Yìdàlì",
    "vn": "đi Ý"
   },
   {
    "zh": "意大利旅行家",
    "py": "Yìdàlì lǚxíngjiā",
    "vn": "nhà du hành người Ý"
   }
  ],
  "patterns": [
   {
    "s": "意大利 + 人 / 菜 / 语",
    "m": "người / món / tiếng Ý"
   }
  ],
  "ex_zh": "马可·波罗是意大利旅行家。",
  "ex_py": "Mǎkě·Bōluó shì Yìdàlì lǚxíngjiā.",
  "ex_vn": "Marco Polo là nhà du hành người Ý.",
  "exList": [
   {
    "zh": "马可·波罗是意大利旅行家。",
    "py": "Mǎkě·Bōluó shì Yìdàlì lǚxíngjiā.",
    "vn": "Marco Polo là nhà du hành người Ý."
   },
   {
    "zh": "我很想去意大利看看那里的艺术作品。",
    "py": "Wǒ hěn xiǎng qù Yìdàlì kànkan nàli de yìshù zuòpǐn.",
    "vn": "Tôi rất muốn đến Ý ngắm các tác phẩm nghệ thuật ở đó."
   }
  ],
  "hanzi": [
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
   },
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
    "prompt": "Marco Polo là nhà du hành người Ý.",
    "answer": "马可·波罗是意大利旅行家。",
    "answerPy": "Mǎkě·Bōluó shì Yìdàlì lǚxíngjiā.",
    "note": "Câu bài khoá 4.",
    "pair": "……是意大利……"
   },
   {
    "promptLang": "vi",
    "prompt": "Đi du lịch Ý, chúng tôi không đi xem tác phẩm nghệ thuật thì là đi ăn món Ý.",
    "answer": "去意大利旅行，我们不是看艺术作品，就是吃意大利菜。",
    "answerPy": "Qù Yìdàlì lǚxíng, wǒmen bú shì kàn yìshù zuòpǐn, jiùshì chī Yìdàlì cài.",
    "note": "不是……就是…… (Bài 19 · điểm 1).",
    "pair": "不是……，就是……"
   }
  ]
 },
 {
  "n": 46,
  "zh": "马可·波罗游记",
  "py": "Mǎkě·Bōluó Yóujì",
  "pos": "Danh từ riêng",
  "vn": "Du ký Marco Polo",
  "hv": "Mã Khả Ba La du ký",
  "em": "📜",
  "lesson": 4,
  "explain": [
   "Cuốn sách ghi lại chuyến đi và những điều Marco Polo thấy ở Trung Quốc và phương Đông thế kỷ 13; có ảnh hưởng rất lớn ở châu Âu. 游记 = du ký (ghi chép du lịch). Tên sách viết trong 《》."
  ],
  "usage": "《马可·波罗游记》 · 中文版的《马可·波罗游记》.",
  "collo": [
   "读《马可·波罗游记》",
   "中文版的《马可·波罗游记》",
   "一部游记",
   "写游记"
  ],
  "colloFull": [
   {
    "zh": "读《马可·波罗游记》",
    "py": "Dú «Mǎkě·Bōluó Yóujì»",
    "vn": "đọc “Du ký Marco Polo”"
   },
   {
    "zh": "中文版的《马可·波罗游记》",
    "py": "Zhōngwén bǎn de «Mǎkě·Bōluó Yóujì»",
    "vn": "“Du ký Marco Polo” bản tiếng Trung"
   },
   {
    "zh": "一部游记",
    "py": "Yí bù yóujì",
    "vn": "một cuốn du ký"
   },
   {
    "zh": "写游记",
    "py": "Xiě yóujì",
    "vn": "viết du ký"
   }
  ],
  "patterns": [
   {
    "s": "《tên sách》",
    "m": "tên sách, tác phẩm viết trong dấu 《》"
   }
  ],
  "ex_zh": "最后完成了一部作品——《马可·波罗游记》。",
  "ex_py": "Zuìhòu wánchéng le yí bù zuòpǐn — «Mǎkě·Bōluó Yóujì».",
  "ex_vn": "Cuối cùng hoàn thành một tác phẩm — “Du ký Marco Polo”.",
  "exList": [
   {
    "zh": "最后完成了一部作品——《马可·波罗游记》。",
    "py": "Zuìhòu wánchéng le yí bù zuòpǐn — «Mǎkě·Bōluó Yóujì».",
    "vn": "Cuối cùng hoàn thành một tác phẩm — “Du ký Marco Polo”."
   },
   {
    "zh": "很多欧洲人是从《马可·波罗游记》中了解中国的。",
    "py": "Hěn duō Ōuzhōu rén shì cóng «Mǎkě·Bōluó Yóujì» zhōng liǎojiě Zhōngguó de.",
    "vn": "Nhiều người châu Âu đã biết đến Trung Quốc qua “Du ký Marco Polo”."
   }
  ],
  "hanzi": [
   {
    "c": "马",
    "p": "mǎ",
    "type": "象形字 · Chữ tượng hình",
    "st": 3,
    "ord": "ngang gập → sổ gập gập móc → hất",
    "rad": "马 (mã – ngựa)",
    "mean": "ngựa",
    "tip": "Hình con ngựa. 马上 = \"đang ở trên lưng ngựa\" → lên đường ngay → lập tức.",
    "cf": "妈 mā, 吗 ma, 码 mǎ (号码 – Bài 1) — đều có phần 马 chỉ âm",
    "w": "马上 / 马上来"
   },
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
    "c": "波",
    "p": "bō",
    "type": "形声字 · Chữ hình thanh",
    "st": 8,
    "ord": "氵 → 皮",
    "rad": "氵 (thuỷ – nước)",
    "mean": "sóng; (phiên âm) ba, bô",
    "tip": "Nước (氵) + 皮 (pí, gợi âm bō): lớp “da” gợn trên mặt nước → sóng; còn dùng phiên âm tên nước ngoài: 马可·波罗 (Marco Polo), 波兰 (Ba Lan).",
    "cf": "破 pò (vỡ) — bên trái là 石; 被 bèi (bị) — bên trái là 衤",
    "w": "波浪 / 波兰 / 马可·波罗"
   },
   {
    "c": "罗",
    "p": "luó",
    "type": "会意字 · Chữ hội ý (giản thể)",
    "st": 8,
    "ord": "罒 → 夕",
    "rad": "罒 (võng – lưới)",
    "mean": "lưới bắt chim; (phiên âm) la, lô",
    "tip": "Cái lưới (罒) giăng ra lúc chiều tối (夕) để bắt chim → nghĩa gốc là lưới; nay chủ yếu để phiên âm tên nước ngoài: 马可·波罗, 罗马 (Rô-ma), 俄罗斯 (Nga).",
    "cf": "夕 xī (chiều tối) — không có 罒; 买 mǎi (mua) — trên là 乛",
    "w": "罗马 / 俄罗斯 / 马可·波罗"
   },
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
    "prompt": "Mấy hôm trước, tôi ra hiệu sách mua một cuốn “Du ký Marco Polo” bản tiếng Trung.",
    "answer": "前两天，我去书店买了一本中文版的《马可·波罗游记》。",
    "answerPy": "Qián liǎng tiān, wǒ qù shūdiàn mǎi le yì běn Zhōngwén bǎn de «Mǎkě·Bōluó Yóujì».",
    "note": "Câu bài khoá 4; 前两天 = mấy hôm trước.",
    "pair": "中文版的《……》"
   },
   {
    "promptLang": "vi",
    "prompt": "Cuốn du ký này rất dày, tôi đọc nó suốt hai ngày, cuối cùng cũng đọc xong.",
    "answer": "这本游记很厚，我把它看了整整两天，终于看完了。",
    "answerPy": "Zhè běn yóujì hěn hòu, wǒ bǎ tā kàn le zhěngzhěng liǎng tiān, zhōngyú kànwán le.",
    "note": "把 + 宾 + 动 + 时量补语 (Bài 19 · điểm 4).",
    "pair": "把……看了两天"
   }
  ]
 },
 {
  "n": 47,
  "zh": "东方旅行日记",
  "py": "Dōngfāng Lǚxíng Rìjì",
  "pos": "Danh từ riêng",
  "vn": "Nhật ký du hành phương Đông",
  "hv": "Đông phương lữ hành nhật ký",
  "em": "🗺️",
  "lesson": 4,
  "explain": [
   "Tên cuốn sách (chữ kèm ảnh) mà Bạch Gia Nguyệt định hoàn thành từ các bài viết, nhật ký của cô ở Trung Quốc — để lại giới thiệu Trung Quốc với thế giới như Marco Polo. 东方 = phương Đông."
  ],
  "usage": "《东方旅行日记》 · 完成《东方旅行日记》.",
  "collo": [
   "东方",
   "旅行日记",
   "写日记",
   "完成《东方旅行日记》"
  ],
  "colloFull": [
   {
    "zh": "东方",
    "py": "Dōngfāng",
    "vn": "phương Đông"
   },
   {
    "zh": "旅行日记",
    "py": "Lǚxíng rìjì",
    "vn": "nhật ký du lịch"
   },
   {
    "zh": "写日记",
    "py": "Xiě rìjì",
    "vn": "viết nhật ký"
   },
   {
    "zh": "完成《东方旅行日记》",
    "py": "Wánchéng «Dōngfāng Lǚxíng Rìjì»",
    "vn": "hoàn thành “Nhật ký du hành phương Đông”"
   }
  ],
  "patterns": [
   {
    "s": "把 + A + 介绍给 + B",
    "m": "giới thiệu A với B"
   }
  ],
  "ex_zh": "完成一部文字加图片的作品——《东方旅行日记》，再次把中国介绍给世界。",
  "ex_py": "Wánchéng yí bù wénzì jiā túpiàn de zuòpǐn — «Dōngfāng Lǚxíng Rìjì», zàicì bǎ Zhōngguó jièshào gěi shìjiè.",
  "ex_vn": "Hoàn thành một tác phẩm có chữ kèm ảnh — “Nhật ký du hành phương Đông”, một lần nữa giới thiệu Trung Quốc với thế giới.",
  "exList": [
   {
    "zh": "完成一部文字加图片的作品——《东方旅行日记》，再次把中国介绍给世界。",
    "py": "Wánchéng yí bù wénzì jiā túpiàn de zuòpǐn — «Dōngfāng Lǚxíng Rìjì», zàicì bǎ Zhōngguó jièshào gěi shìjiè.",
    "vn": "Hoàn thành một tác phẩm có chữ kèm ảnh — “Nhật ký du hành phương Đông”, một lần nữa giới thiệu Trung Quốc với thế giới."
   },
   {
    "zh": "白家月希望《东方旅行日记》也能让更多人了解中国。",
    "py": "Bái Jiāyuè xīwàng «Dōngfāng Lǚxíng Rìjì» yě néng ràng gèng duō rén liǎojiě Zhōngguó.",
    "vn": "Bạch Gia Nguyệt mong “Nhật ký du hành phương Đông” cũng giúp nhiều người hiểu thêm về Trung Quốc."
   }
  ],
  "hanzi": [
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
   },
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
    "prompt": "Cô ấy muốn thông qua “Nhật ký du hành phương Đông” giới thiệu Trung Quốc với thế giới.",
    "answer": "她想通过《东方旅行日记》把中国介绍给世界。",
    "answerPy": "Tā xiǎng tōngguò «Dōngfāng Lǚxíng Rìjì» bǎ Zhōngguó jièshào gěi shìjiè.",
    "note": "把 + A + 介绍给 + B (HSK 3).",
    "pair": "把……介绍给……"
   },
   {
    "promptLang": "vi",
    "prompt": "Để viết xong “Nhật ký du hành phương Đông”, cô ấy sắp xếp bài viết của mình suốt một tháng.",
    "answer": "为了写完《东方旅行日记》，她把自己的文章整理了整整一个月。",
    "answerPy": "Wèile xiěwán «Dōngfāng Lǚxíng Rìjì», tā bǎ zìjǐ de wénzhāng zhěnglǐ le zhěngzhěng yí gè yuè.",
    "note": "把 + 宾 + 动 + 时量补语 (Bài 19 · điểm 4).",
    "pair": "把……整理了整整一个月"
   }
  ]
 }
];
var wuData = [
 {
  "img": "/images/hsk4v3/bai-19/wu-A.webp",
  "label": "获奖",
  "py": "huòjiǎng",
  "letter": "A"
 },
 {
  "img": "/images/hsk4v3/bai-19/wu-B.webp",
  "label": "庆祝",
  "py": "qìngzhù",
  "letter": "B"
 },
 {
  "img": "/images/hsk4v3/bai-19/wu-C.webp",
  "label": "少年",
  "py": "shàonián",
  "letter": "C"
 },
 {
  "img": "/images/hsk4v3/bai-19/wu-D.webp",
  "label": "入口",
  "py": "rùkǒu",
  "letter": "D"
 },
 {
  "img": "/images/hsk4v3/bai-19/wu-E.webp",
  "label": "歌手",
  "py": "gēshǒu",
  "letter": "E"
 },
 {
  "img": "/images/hsk4v3/bai-19/wu-F.webp",
  "label": "图片",
  "py": "túpiàn",
  "letter": "F"
 }
];
var dialogData = [
 {
  "scene": "在家里 · Ở nhà (Vương Nhất Tuyết hỏi con gái Lưu Tiểu Tuyết chuyện tập tiết mục cho lễ hội nghệ thuật của trường)",
  "anh": "/images/hsk4v3/bai-19/kv-1.webp",
  "nguoi": [
   {
    "ten": "王一雪",
    "anh": "/images/hsk4v3/nv/yixue.webp"
   },
   {
    "ten": "刘小雪",
    "anh": "/images/hsk4v3/nv/xiaoxue.webp"
   }
  ],
  "preQuiz": [
   {
    "q": "小雪和同学们的话剧排得怎么样了？",
    "opts": [
     "排好了",
     "还差很多",
     "还没开始排",
     "基本上排好了"
    ],
    "ans": 3
   },
   {
    "q": "小雪的同学唱歌怎么样？",
    "opts": [
     "很爱忘词",
     "比较一般",
     "很有感情",
     "特别好听"
    ],
    "ans": 3
   }
  ],
  "lines": [
   {
    "sp": 0,
    "zh": "小雪，你们的话剧排好了吗？",
    "py": "Xiǎoxuě, nǐmen de huàjù páihǎo le ma?",
    "vn": "Tiểu Tuyết, vở kịch của các con tập xong chưa?"
   },
   {
    "sp": 1,
    "zh": "差不多了，妈妈。艺术节周五下午开始，我内心还是有些紧张，有时候不是忘词，就是忘记做动作。",
    "py": "Chàbuduō le, māma. Yìshùjié zhōuwǔ xiàwǔ kāishǐ, wǒ nèixīn háishi yǒuxiē jǐnzhāng, yǒushíhou bú shì wàng cí, jiùshì wàngjì zuò dòngzuò.",
    "vn": "Gần xong rồi mẹ ạ. Lễ hội nghệ thuật bắt đầu chiều thứ Sáu, trong lòng con vẫn hơi hồi hộp, có lúc không phải quên lời thì là quên làm động tác."
   },
   {
    "sp": 0,
    "zh": "没事，妈妈相信你一定可以。放松些，再自信些！",
    "py": "Méishì, māma xiāngxìn nǐ yídìng kěyǐ. Fàngsōng xiē, zài zìxìn xiē!",
    "vn": "Không sao, mẹ tin con nhất định làm được. Thả lỏng chút, tự tin thêm chút nữa!"
   },
   {
    "sp": 1,
    "zh": "好的，我同学演少年歌手，他的歌声美极了。我演他的妈妈，不知道像不像呢。",
    "py": "Hǎo de, wǒ tóngxué yǎn shàonián gēshǒu, tā de gēshēng měi jí le. Wǒ yǎn tā de māma, bù zhīdao xiàng bu xiàng ne.",
    "vn": "Vâng ạ, bạn con đóng vai ca sĩ thiếu niên, giọng hát của bạn ấy hay tuyệt. Con đóng vai mẹ của bạn ấy, không biết có giống không nữa."
   },
   {
    "sp": 0,
    "zh": "没问题的，努力做最好的自己就好。演出时，我和你爸都去给你加油。",
    "py": "Méi wèntí de, nǔlì zuò zuìhǎo de zìjǐ jiù hǎo. Yǎnchū shí, wǒ hé nǐ bà dōu qù gěi nǐ jiāyóu.",
    "vn": "Không có vấn đề gì đâu, cố gắng làm tốt nhất bản thân mình là được. Lúc biểu diễn, mẹ và bố đều sẽ đến cổ vũ con."
   },
   {
    "sp": 1,
    "zh": "好的，谢谢妈妈！",
    "py": "Hǎo de, xièxie māma!",
    "vn": "Vâng, con cảm ơn mẹ!"
   }
  ]
 },
 {
  "scene": "视频通话 · Gọi video (thứ Bảy, Lý Văn gọi video với Bạch Gia Nguyệt, Annie và Trần Thiên Trung)",
  "anh": "/images/hsk4v3/bai-19/kv-2.webp",
  "nguoi": [
   {
    "ten": "李文",
    "anh": "/images/hsk4v3/nv/liwen.webp"
   },
   {
    "ten": "安妮",
    "anh": "/images/hsk4v3/nv/annie.webp"
   },
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
    "q": "下周六晚上，李文请大家去做什么？",
    "opts": [
     "散步",
     "聚餐",
     "看电影",
     "看京剧"
    ],
    "ans": 3
   },
   {
    "q": "白家月说的“做功课”最可能是什么意思？",
    "opts": [
     "提前了解",
     "完成作业",
     "翻译内容",
     "学唱京剧"
    ],
    "ans": 0
   }
  ],
  "lines": [
   {
    "sp": 0,
    "zh": "下周六晚上，我请大家去国家大剧院看京剧，怎么样？",
    "py": "Xià zhōuliù wǎnshang, wǒ qǐng dàjiā qù Guójiā Dàjùyuàn kàn jīngjù, zěnmeyàng?",
    "vn": "Tối thứ Bảy tuần sau, tớ mời mọi người đi Nhà hát Lớn Quốc gia xem Kinh kịch, thế nào?"
   },
   {
    "sp": 1,
    "zh": "好啊。我小时候在加拿大度假时，在宾馆的电视上看过一次，是梅兰芳等演员演的，演员们都非常棒，他们演唱得好听极了，给我留下的印象特别深。",
    "py": "Hǎo a. Wǒ xiǎoshíhou zài Jiānádà dùjià shí, zài bīnguǎn de diànshì shàng kàn guò yí cì, shì Méi Lánfāng děng yǎnyuán yǎn de, yǎnyuánmen dōu fēicháng bàng, tāmen yǎnchàng de hǎotīng jí le, gěi wǒ liúxia de yìnxiàng tèbié shēn.",
    "vn": "Hay quá. Hồi nhỏ đi nghỉ ở Canada, tớ từng xem một lần trên tivi khách sạn, là do các diễn viên như Mai Lan Phương diễn, các diễn viên đều cực kỳ giỏi, họ hát hay tuyệt, để lại cho tớ ấn tượng đặc biệt sâu."
   },
   {
    "sp": 0,
    "zh": "梅兰芳先生是中国著名京剧艺术家。咱们要看的这个京剧是青年演员们演的，要去看的观众也特别多。",
    "py": "Méi Lánfāng xiānsheng shì Zhōngguó zhùmíng jīngjù yìshùjiā. Zánmen yào kàn de zhège jīngjù shì qīngnián yǎnyuánmen yǎn de, yào qù kàn de guānzhòng yě tèbié duō.",
    "vn": "Ông Mai Lan Phương là nghệ sĩ Kinh kịch nổi tiếng của Trung Quốc. Vở Kinh kịch chúng mình sắp xem là do các diễn viên trẻ diễn, khán giả muốn đi xem cũng rất đông."
   },
   {
    "sp": 2,
    "zh": "不知道我们能不能看懂。",
    "py": "Bù zhīdao wǒmen néng bu néng kàndǒng.",
    "vn": "Không biết chúng mình có xem hiểu được không."
   },
   {
    "sp": 3,
    "zh": "咱们先做做功课，提前了解下，能懂一点儿是一点儿。",
    "py": "Zánmen xiān zuòzuo gōngkè, tíqián liǎojiě xià, néng dǒng yìdiǎnr shì yìdiǎnr.",
    "vn": "Chúng mình cứ “làm bài tập” trước đã, tìm hiểu trước một chút, hiểu được chút nào hay chút ấy."
   },
   {
    "sp": 2,
    "zh": "对，我先去网上查资料，查完后也转发给你们。",
    "py": "Duì, wǒ xiān qù wǎngshang chá zīliào, chá wán hòu yě zhuǎnfā gěi nǐmen.",
    "vn": "Đúng, tớ lên mạng tra tài liệu trước, tra xong cũng chuyển cho các cậu."
   },
   {
    "sp": 1,
    "zh": "谢谢天中！",
    "py": "Xièxie Tiānzhōng!",
    "vn": "Cảm ơn Thiên Trung!"
   },
   {
    "sp": 0,
    "zh": "那我就在网上订票了，到时候咱们在大剧院入口见。",
    "py": "Nà wǒ jiù zài wǎngshang dìng piào le, dào shíhou zánmen zài dà jùyuàn rùkǒu jiàn.",
    "vn": "Vậy tớ đặt vé trên mạng nhé, đến lúc đó chúng mình gặp nhau ở lối vào nhà hát lớn."
   }
  ]
 },
 {
  "scene": "精彩的演出 · Buổi diễn đặc sắc (Lý Văn và ba người bạn xem Kinh kịch ở Nhà hát Lớn Quốc gia — ảnh: Nhà hát Lớn Quốc gia, phần 小语的彩蛋 của sách)",
  "anh": "/images/hsk4v3/bai-19/kv-3.webp",
  "nguoi": [
   {
    "ten": "小语",
    "anh": "/images/hsk4v3/nv/xiaoyu.webp"
   }
  ],
  "preQuiz": [
   {
    "q": "李文很期待那场演出，因为：",
    "opts": [
     "演员很专业",
     "故事有意思",
     "音乐很好听",
     "内容很幽默"
    ],
    "ans": 0
   },
   {
    "q": "演出结束后，演员们邀请观众一起做什么？",
    "opts": [
     "回答问题",
     "学京剧动作",
     "继续演节目",
     "庆祝演出成功"
    ],
    "ans": 3
   }
  ],
  "lines": [
   {
    "sp": 0,
    "zh": "周六晚上，李文等四人来到国家大剧院观看京剧演出。",
    "py": "Zhōuliù wǎnshang, Lǐ Wén děng sì rén láidào Guójiā Dàjùyuàn guānkàn jīngjù yǎnchū.",
    "vn": "Tối thứ Bảy, nhóm bốn người của Lý Văn đến Nhà hát Lớn Quốc gia xem biểu diễn Kinh kịch."
   },
   {
    "sp": 0,
    "zh": "入座后，李文指着节目表说：“这些演员很专业，功夫很深，在京剧比赛中获过很多奖，有的还是国家、国际大奖。我特别期待这场演出。”",
    "py": "Rùzuò hòu, Lǐ Wén zhǐ zhe jiémù biǎo shuō: “zhèxiē yǎnyuán hěn zhuānyè, gōngfu hěn shēn, zài jīngjù bǐsài zhōng huò guò hěn duō jiǎng, yǒude háishi guójiā, guójì dàjiǎng. Wǒ tèbié qīdài zhè chǎng yǎnchū.”",
    "vn": "Sau khi vào chỗ, Lý Văn chỉ vào tờ chương trình nói: “Những diễn viên này rất chuyên nghiệp, tay nghề rất cao, đã đoạt nhiều giải trong các cuộc thi Kinh kịch, có giải còn là giải quốc gia, quốc tế lớn. Tớ rất mong chờ buổi diễn này.”"
   },
   {
    "sp": 0,
    "zh": "演出开始后，他们看到演员们做的动作很难，但是做得都特别好，观众们不断鼓掌。",
    "py": "Yǎnchū kāishǐ hòu, tāmen kàndào yǎnyuánmen zuò de dòngzuò hěn nán, dànshì zuò de dōu tèbié hǎo, guānzhòngmen búduàn gǔzhǎng.",
    "vn": "Buổi diễn bắt đầu, họ thấy những động tác các diễn viên làm rất khó, nhưng đều làm cực kỳ đẹp, khán giả vỗ tay không ngớt."
   },
   {
    "sp": 0,
    "zh": "因为李文他们提前把故事了解了一遍，所以差不多都看懂了。",
    "py": "Yīnwèi Lǐ Wén tāmen tíqián bǎ gùshi liǎojiě le yí biàn, suǒyǐ chàbuduō dōu kàndǒng le.",
    "vn": "Vì nhóm Lý Văn đã tìm hiểu trước câu chuyện một lượt, nên họ gần như xem hiểu hết."
   },
   {
    "sp": 0,
    "zh": "演出结束后，演员们邀请观众和他们一起庆祝演出成功。",
    "py": "Yǎnchū jiéshù hòu, yǎnyuánmen yāoqǐng guānzhòng hé tāmen yìqǐ qìngzhù yǎnchū chénggōng.",
    "vn": "Buổi diễn kết thúc, các diễn viên mời khán giả cùng họ ăn mừng buổi diễn thành công."
   },
   {
    "sp": 0,
    "zh": "回来的路上，大家特别激动，觉得京剧很有意思，演员演得很精彩。",
    "py": "Huílai de lùshang, dàjiā tèbié jīdòng, juéde jīngjù hěn yǒu yìsi, yǎnyuán yǎn de hěn jīngcǎi.",
    "vn": "Trên đường về, mọi người đều rất xúc động, thấy Kinh kịch rất thú vị, diễn viên diễn rất đặc sắc."
   },
   {
    "sp": 0,
    "zh": "李文点头说：“是啊，以后咱们还来看。”",
    "py": "Lǐ Wén diǎntóu shuō: “shì a, yǐhòu zánmen hái lái kàn.”",
    "vn": "Lý Văn gật đầu nói: “Đúng vậy, sau này chúng mình lại đến xem.”"
   }
  ],
  "doan": true
 },
 {
  "scene": "白家月的日记 · Nhật ký của Bạch Gia Nguyệt (đọc “Du ký Marco Polo” và ước mơ viết sách về Trung Quốc)",
  "anh": "/images/hsk4v3/bai-19/kv-4.webp",
  "nguoi": [
   {
    "ten": "白家月",
    "anh": "/images/hsk4v3/nv/bai.webp"
   }
  ],
  "preQuiz": [
   {
    "q": "《马可·波罗游记》介绍了什么内容？",
    "opts": [
     "中国的经济",
     "中国的教育",
     "现在的中国",
     "13世纪的中国"
    ],
    "ans": 3
   },
   {
    "q": "白家月看完中文版的《马可·波罗游记》之后打算做什么？",
    "opts": [
     "去意大利玩",
     "把它翻译给家人",
     "完成自己的作品",
     "再买一本送给朋友"
    ],
    "ans": 2
   }
  ],
  "lines": [
   {
    "sp": 0,
    "zh": "马可·波罗是意大利旅行家，在1275年和家人来到中国，在中国大约生活了17年，最后完成了一部作品——《马可·波罗游记》。",
    "py": "Mǎkě·Bōluó shì Yìdàlì lǚxíngjiā, zài 1275 nián hé jiārén láidào Zhōngguó, zài Zhōngguó dàyuē shēnghuó le 17 nián, zuìhòu wánchéng le yí bù zuòpǐn — «Mǎkě·Bōluó Yóujì».",
    "vn": "Marco Polo là nhà du hành người Ý, năm 1275 cùng gia đình đến Trung Quốc, sống ở Trung Quốc khoảng 17 năm, cuối cùng hoàn thành một tác phẩm — “Du ký Marco Polo”."
   },
   {
    "sp": 0,
    "zh": "在这部影响很大的作品中，作者向世界介绍了13世纪时的中国。",
    "py": "Zài zhè bù yǐngxiǎng hěn dà de zuòpǐn zhōng, zuòzhě xiàng shìjiè jièshào le 13 shìjì shí de Zhōngguó.",
    "vn": "Trong tác phẩm có ảnh hưởng rất lớn này, tác giả đã giới thiệu với thế giới Trung Quốc thế kỷ 13."
   },
   {
    "sp": 0,
    "zh": "作为读者，读完这部作品后，我也很想成为作家，更想来中国看看。",
    "py": "Zuòwéi dúzhě, dúwán zhè bù zuòpǐn hòu, wǒ yě hěn xiǎng chéngwéi zuòjiā, gèng xiǎng lái Zhōngguó kànkan.",
    "vn": "Với tư cách là độc giả, đọc xong tác phẩm này, tôi cũng rất muốn trở thành nhà văn, càng muốn đến Trung Quốc xem thử."
   },
   {
    "sp": 0,
    "zh": "来到中国后，我发现现在的中国和书里的中国已有很大不同。",
    "py": "Láidào Zhōngguó hòu, wǒ fāxiàn xiànzài de Zhōngguó hé shū lǐ de Zhōngguó yǐ yǒu hěn dà bùtóng.",
    "vn": "Đến Trung Quốc rồi, tôi phát hiện Trung Quốc bây giờ đã khác rất nhiều so với Trung Quốc trong sách."
   },
   {
    "sp": 0,
    "zh": "前两天，我去书店看到了中文版的《马可·波罗游记》，马上买了一本，到家后又把这本书看了两天。",
    "py": "Qián liǎng tiān, wǒ qù shūdiàn kàndào le Zhōngwén bǎn de «Mǎkě·Bōluó Yóujì», mǎshàng mǎi le yì běn, dào jiā hòu yòu bǎ zhè běn shū kàn le liǎng tiān.",
    "vn": "Mấy hôm trước, tôi ra hiệu sách thấy “Du ký Marco Polo” bản tiếng Trung, lập tức mua một cuốn, về đến nhà lại đọc cuốn sách này suốt hai ngày."
   },
   {
    "sp": 0,
    "zh": "看完后，我决定把自己来中国后写的文章、日记等全部整理出来，完成一部文字加图片的作品——《东方旅行日记》，再次把中国介绍给世界。",
    "py": "Kànwán hòu, wǒ juédìng bǎ zìjǐ lái Zhōngguó hòu xiě de wénzhāng, rìjì děng quánbù zhěnglǐ chūlai, wánchéng yí bù wénzì jiā túpiàn de zuòpǐn — «Dōngfāng Lǚxíng Rìjì», zàicì bǎ Zhōngguó jièshào gěi shìjiè.",
    "vn": "Đọc xong, tôi quyết định sắp xếp lại toàn bộ những bài viết, nhật ký… mình viết từ khi đến Trung Quốc, hoàn thành một tác phẩm có chữ kèm ảnh — “Nhật ký du hành phương Đông”, một lần nữa giới thiệu Trung Quốc với thế giới."
   },
   {
    "sp": 0,
    "zh": "同时我也想继续学习中文和中国文化，报考中国语言文学专业的研究生。",
    "py": "Tóngshí wǒ yě xiǎng jìxù xuéxí Zhōngwén hé Zhōngguó wénhuà, bàokǎo Zhōngguó yǔyán wénxué zhuānyè de yánjiūshēng.",
    "vn": "Đồng thời tôi cũng muốn tiếp tục học tiếng Trung và văn hoá Trung Quốc, đăng ký thi cao học chuyên ngành ngôn ngữ văn học Trung Quốc."
   }
  ],
  "doan": true
 }
];
var listenData = [
 {
  "audio": "小雪，听说你们学校下周有艺术节？对，我们班排了一个话剧，我演一个少年歌手。你唱歌那么好听，一定没问题。可是我内心还是有点儿紧张，排的时候不是忘词，就是走错地方。别紧张，再自信些！那天我一定去给你加油。",
  "questions": [
   {
    "q": "小雪在话剧里演什么？",
    "opts": [
     "老师",
     "少年歌手",
     "妈妈"
    ],
    "ans": 1
   },
   {
    "q": "小雪排话剧时有什么问题？",
    "opts": [
     "唱歌不好听",
     "没有时间排",
     "不是忘词，就是走错地方"
    ],
    "ans": 2
   }
  ]
 },
 {
  "audio": "安妮，这个周末你有空吗？我想邀请你去看京剧。太好了，我一直很期待看京剧。不过我怕看不懂。没关系，我先把故事给你讲一遍，你能懂一点儿是一点儿。好啊！那我们几点在哪儿见？晚上七点，在大剧院入口见吧。",
  "questions": [
   {
    "q": "他们这个周末去做什么？",
    "opts": [
     "看京剧",
     "看话剧",
     "听演唱会"
    ],
    "ans": 0
   },
   {
    "q": "他们在哪儿见面？",
    "opts": [
     "地铁站",
     "学校门口",
     "大剧院入口"
    ],
    "ans": 2
   }
  ]
 },
 {
  "audio": "你在看什么书呢？是一本小说，作者是一位青年作家。好看吗？特别好看，文字很美。我昨天把它看了一个晚上，已经看完一半了。看完以后能借给我看看吗？当然可以，我看完就给你。",
  "questions": [
   {
    "q": "这本小说的作者是谁？",
    "opts": [
     "一位外国作家",
     "一位青年作家",
     "一位老作家"
    ],
    "ans": 1
   },
   {
    "q": "他昨天把小说看了多长时间？",
    "opts": [
     "一个晚上",
     "一个小时",
     "两天"
    ],
    "ans": 0
   }
  ]
 }
];
var matchData = [
 {
  "left": "庆祝",
  "right": "演出成功"
 },
 {
  "left": "获",
  "right": "国际大奖"
 },
 {
  "left": "为演员",
  "right": "鼓掌"
 },
 {
  "left": "给我留下了",
  "right": "很深的印象"
 },
 {
  "left": "报考",
  "right": "研究生"
 },
 {
  "left": "整理",
  "right": "文章和日记"
 },
 {
  "left": "转发",
  "right": "信息"
 },
 {
  "left": "中文版的",
  "right": "《马可·波罗游记》"
 },
 {
  "left": "不是忘词，",
  "right": "就是忘记做动作"
 },
 {
  "left": "能懂一点儿",
  "right": "是一点儿"
 }
];
var fillData = [
 {
  "pre": "艺术节周五下午开始，我",
  "blank": "内心",
  "post": "还是有些紧张。",
  "hint": "(trong lòng)",
  "ans": "内心",
  "exp": "内心 + 有些 + Adj."
 },
 {
  "pre": "没事，妈妈相信你一定可以。放松些，再",
  "blank": "自信",
  "post": "些！",
  "hint": "(tự tin)",
  "ans": "自信",
  "exp": "再 + Adj + 些."
 },
 {
  "pre": "我同学演少年歌手，他的",
  "blank": "歌声",
  "post": "美极了。",
  "hint": "(giọng hát)",
  "ans": "歌声",
  "exp": "歌声 = tiếng hát; 歌手 = ca sĩ."
 },
 {
  "pre": "我小时候在加拿大",
  "blank": "度假",
  "post": "时，在宾馆的电视上看过一次京剧。",
  "hint": "(đi nghỉ)",
  "ans": "度假",
  "exp": "在 + nơi + 度假."
 },
 {
  "pre": "咱们要看的这个京剧是",
  "blank": "青年",
  "post": "演员们演的。",
  "hint": "(thanh niên, trẻ)",
  "ans": "青年",
  "exp": "青年演员 = diễn viên trẻ."
 },
 {
  "pre": "我先去网上查资料，查完后也",
  "blank": "转发",
  "post": "给你们。",
  "hint": "(chuyển tiếp)",
  "ans": "转发",
  "exp": "转发给 + ai."
 },
 {
  "pre": "那我就在网上订票了，到时候咱们在大剧院",
  "blank": "入口",
  "post": "见。",
  "hint": "(lối vào)",
  "ans": "入口",
  "exp": "入口 ↔ 出口."
 },
 {
  "pre": "这些演员很专业，",
  "blank": "功夫",
  "post": "很深。",
  "hint": "(tay nghề)",
  "ans": "功夫",
  "exp": "功夫很深 = tay nghề cao."
 },
 {
  "pre": "演出结束后，演员们邀请观众和他们一起",
  "blank": "庆祝",
  "post": "演出成功。",
  "hint": "(ăn mừng)",
  "ans": "庆祝",
  "exp": "庆祝 + sự việc."
 },
 {
  "pre": "我想继续学习中文和中国文化，",
  "blank": "报考",
  "post": "中国语言文学专业的研究生。",
  "hint": "(đăng ký thi)",
  "ans": "报考",
  "exp": "报考 + ngành / bậc học."
 }
];
var sortData = [
 {
  "words": [
   "有时候",
   "不是",
   "忘词",
   "，",
   "就是",
   "忘记",
   "做动作",
   "。"
  ],
  "ans": "有时候不是忘词，就是忘记做动作。",
  "audio": "有时候不是忘词，就是忘记做动作。"
 },
 {
  "words": [
   "咱们",
   "先做做功课",
   "，",
   "能懂",
   "一点儿",
   "是",
   "一点儿",
   "。"
  ],
  "ans": "咱们先做做功课，能懂一点儿是一点儿。",
  "audio": "咱们先做做功课，能懂一点儿是一点儿。"
 },
 {
  "words": [
   "李文他们",
   "提前",
   "把",
   "故事",
   "了解了",
   "一遍",
   "。"
  ],
  "ans": "李文他们提前把故事了解了一遍。",
  "audio": "李文他们提前把故事了解了一遍。"
 },
 {
  "words": [
   "到家后",
   "我",
   "又",
   "把",
   "这本书",
   "看了",
   "两天",
   "。"
  ],
  "ans": "到家后我又把这本书看了两天。",
  "audio": "到家后我又把这本书看了两天。"
 },
 {
  "words": [
   "他们",
   "演唱得",
   "好听极了",
   "，",
   "给我",
   "留下的",
   "印象",
   "特别深",
   "。"
  ],
  "ans": "他们演唱得好听极了，给我留下的印象特别深。",
  "audio": "他们演唱得好听极了，给我留下的印象特别深。"
 },
 {
  "words": [
   "演员们",
   "邀请",
   "观众",
   "和他们",
   "一起",
   "庆祝",
   "演出成功",
   "。"
  ],
  "ans": "演员们邀请观众和他们一起庆祝演出成功。",
  "audio": "演员们邀请观众和他们一起庆祝演出成功。"
 }
];
var mcData = [
 {
  "q": "周末小文＿＿在家看书，就是出去看演出。",
  "opts": [
   "不但",
   "虽然",
   "不是",
   "即使"
  ],
  "ans": 2,
  "exp": "不是……，就是…… = không A thì B (một trong hai)."
 },
 {
  "q": "我知道，她不是中国人，＿＿韩国人，我们以前是同学。",
  "opts": [
   "就是",
   "而是",
   "还是",
   "或者"
  ],
  "ans": 1,
  "exp": "Biết chắc → 不是……而是…… (Bài 11); 不是……就是…… dùng khi đoán một trong hai."
 },
 {
  "q": "咱们先做做功课，能懂一点儿＿＿一点儿。",
  "opts": [
   "就",
   "也",
   "是",
   "有"
  ],
  "ans": 2,
  "exp": "V + 一×是一×."
 },
 {
  "q": "事情太多了，别着急，慢慢做，做一件是一＿＿。",
  "opts": [
   "件",
   "个",
   "次",
   "遍"
  ],
  "ans": 0,
  "exp": "Hai lượng từ phải giống nhau: 一件……一件."
 },
 {
  "q": "他把这个动作做了好几＿＿，最后终于做对了。",
  "opts": [
   "个",
   "次",
   "天",
   "本"
  ],
  "ans": 1,
  "exp": "Bổ ngữ động lượng: số từ + 次 / 遍."
 },
 {
  "q": "王老师把这个问题又讲了＿＿，大家才明白。",
  "opts": [
   "十分钟",
   "很清楚",
   "十个",
   "一点儿是一点儿"
  ],
  "ans": 0,
  "exp": "Bổ ngữ thời lượng: 十分钟."
 },
 {
  "q": "白家月又＿＿这本书看了几遍，越看越喜欢。",
  "opts": [
   "被",
   "让",
   "给",
   "把"
  ],
  "ans": 3,
  "exp": "把 + 宾 + V + 动量补语; 又 đứng trước 把."
 },
 {
  "q": "演员们的动作做得特别好，观众们不断＿＿。",
  "opts": [
   "点头",
   "鼓掌",
   "邀请",
   "转发"
  ],
  "ans": 1,
  "exp": "不断鼓掌 = vỗ tay không ngớt."
 },
 {
  "q": "我读过这本书，这个作者是现在最受欢迎的青年＿＿。",
  "opts": [
   "读者",
   "观众",
   "作家",
   "演员"
  ],
  "ans": 2,
  "exp": "作家 = nhà văn (nghề)."
 },
 {
  "q": "收到演出＿＿后，他们马上就开始排新节目。",
  "opts": [
   "邀请",
   "庆祝",
   "期待",
   "整理"
  ],
  "ans": 0,
  "exp": "收到邀请 = nhận được lời mời (邀请 dùng như danh từ)."
 }
];
var speakingData = {
 "intro": "Nhấn nút loa nghe câu hỏi (câu hỏi phần Khởi động, câu hỏi đọc hiểu của 4 bài khoá, kể lại bài khoá và hoạt động biểu diễn nhóm), rồi tự ghi âm câu trả lời — cố dùng từ mới và 4 điểm ngữ pháp của bài.",
 "questions": [
  {
   "q_zh": "你过生日时会怎么庆祝？",
   "q_vn": "Khi sinh nhật, bạn thường ăn mừng thế nào?",
   "hint": "我过生日时，不是……，就是……。去年……",
   "sample": "我过生日时，不是和家人在家吃饭，就是请几个好朋友去饭馆聚餐。妈妈会给我做几个我爱吃的菜，朋友们会送我小礼物，大家一起唱生日歌、吃蛋糕，庆祝一下。去年生日，我的朋友们还给我准备了一个小节目，他们唱的歌好听极了，给我留下了很深的印象。",
   "sample_vn": "Khi sinh nhật, tôi không ăn cơm ở nhà với gia đình thì là mời vài người bạn thân đi nhà hàng liên hoan. Mẹ sẽ nấu cho tôi mấy món tôi thích, bạn bè tặng quà nhỏ, mọi người cùng hát bài chúc mừng sinh nhật, ăn bánh kem, ăn mừng một chút. Sinh nhật năm ngoái, các bạn còn chuẩn bị cho tôi một tiết mục nhỏ, bài họ hát hay tuyệt, để lại cho tôi ấn tượng rất sâu.",
   "note": "Câu hỏi phần Khởi động của sách; dùng 不是……就是…… (điểm 1) + từ mới 庆祝, 留下."
  },
  {
   "q_zh": "你喜欢看什么书？",
   "q_vn": "Bạn thích đọc sách gì?",
   "hint": "我最喜欢看……。我最近在看……，作者是……。我已经把它看了……遍",
   "sample": "我最喜欢看小说，特别是中国的文学作品。我最近在看一本中文小说，作者是一位青年作家，文字很美，故事也很有意思。刚开始很多地方看不懂，我就看一页是一页，不懂的词就查一查。现在我已经把它看了两遍了，越看越喜欢。",
   "sample_vn": "Tôi thích đọc tiểu thuyết nhất, đặc biệt là tác phẩm văn học Trung Quốc. Gần đây tôi đang đọc một cuốn tiểu thuyết tiếng Trung, tác giả là một nhà văn trẻ, lời văn rất đẹp, câu chuyện cũng rất hay. Lúc đầu nhiều chỗ đọc không hiểu, tôi cứ đọc được trang nào hay trang ấy, từ nào không hiểu thì tra. Bây giờ tôi đã đọc nó hai lượt rồi, càng đọc càng thích.",
   "note": "Câu hỏi phần Khởi động của sách; dùng V + 一×是一× (điểm 2) và 把 + 宾 + V + 动量补语 (điểm 3)."
  },
  {
   "q_zh": "小雪紧张时会怎么样？小雪演出时，妈妈和爸爸会去看吗？",
   "q_vn": "Khi căng thẳng Tiểu Tuyết thường bị làm sao? Lúc Tiểu Tuyết biểu diễn, bố mẹ có đi xem không?",
   "hint": "小雪紧张时，有时候不是……，就是……。会，演出时……",
   "sample": "小雪紧张时，有时候不是忘词，就是忘记做动作。她演出时，妈妈和爸爸都会去看，还会给她加油。",
   "sample_vn": "Khi căng thẳng, Tiểu Tuyết có lúc không quên lời thì là quên làm động tác. Lúc em biểu diễn, bố mẹ đều sẽ đi xem, còn cổ vũ em nữa.",
   "note": "Câu hỏi bài khoá 1; dùng 不是……就是…… (điểm 1)."
  },
  {
   "q_zh": "请根据提示复述课文一。",
   "q_vn": "Dựa vào gợi ý, kể lại bài khoá 1.",
   "hint": "王一雪问小雪他们的……。小雪说……，艺术节……开始，她现在……，有时候不是……，就是……。王一雪鼓励小雪……",
   "sample": "王一雪问小雪他们的话剧排好了没有。小雪说差不多了，艺术节周五下午开始，她现在内心还是有些紧张，有时候不是忘词，就是忘记做动作。王一雪鼓励小雪，妈妈相信她一定可以，让她放松些，再自信些。小雪说，她的同学演少年歌手，同学的歌声美极了。她演妈妈，不知道像不像。王一雪继续鼓励小雪，努力做最好的自己就好。演出时，她和小雪的爸爸都去给小雪加油。",
   "sample_vn": "Vương Nhất Tuyết hỏi Tiểu Tuyết vở kịch của các em tập xong chưa. Tiểu Tuyết nói gần xong rồi, lễ hội nghệ thuật bắt đầu chiều thứ Sáu, bây giờ trong lòng em vẫn hơi hồi hộp, có lúc không quên lời thì là quên động tác. Vương Nhất Tuyết động viên con, mẹ tin con nhất định làm được, bảo con thả lỏng, tự tin hơn. Tiểu Tuyết kể bạn em đóng vai ca sĩ thiếu niên, giọng hát hay tuyệt; em đóng vai mẹ, không biết có giống không. Vương Nhất Tuyết tiếp tục động viên: cố gắng làm tốt nhất bản thân là được. Lúc biểu diễn, chị và bố Tiểu Tuyết đều đến cổ vũ con.",
   "note": "Bài tập 复述 của sách (trang 101)."
  },
  {
   "q_zh": "在加拿大时安妮就看过京剧，她觉得怎么样？李文最后说他要去做什么？",
   "q_vn": "Hồi ở Canada Annie đã từng xem Kinh kịch, cô ấy thấy thế nào? Cuối cùng Lý Văn nói anh ấy sẽ làm gì?",
   "hint": "安妮觉得演员们都……，他们演唱得……，给她留下的印象……。李文说他要……",
   "sample": "安妮小时候在加拿大度假时，在宾馆的电视上看过一次京剧。她觉得演员们都非常棒，他们演唱得好听极了，给她留下的印象特别深。李文最后说，他要在网上订票，到时候大家在大剧院入口见。",
   "sample_vn": "Hồi nhỏ đi nghỉ ở Canada, Annie từng xem Kinh kịch một lần trên tivi khách sạn. Cô thấy các diễn viên đều rất giỏi, họ hát hay tuyệt, để lại cho cô ấn tượng đặc biệt sâu. Cuối cùng Lý Văn nói anh sẽ đặt vé trên mạng, đến lúc đó mọi người gặp nhau ở lối vào nhà hát lớn.",
   "note": "Câu hỏi bài khoá 2."
  },
  {
   "q_zh": "京剧演员们的表演怎么样？李文为什么说以后还来看京剧演出？",
   "q_vn": "Phần biểu diễn của các diễn viên Kinh kịch thế nào? Vì sao Lý Văn nói sau này còn đến xem Kinh kịch?",
   "hint": "演员们很专业，功夫……。他们做的动作……，但是……，观众们……。因为大家觉得……",
   "sample": "京剧演员们的表演非常精彩。他们很专业，功夫很深，做的动作很难，但是做得都特别好，观众们不断鼓掌。因为李文他们提前把故事了解了一遍，所以差不多都看懂了。回来的路上，大家都觉得京剧很有意思，演员演得很精彩，所以李文说以后还来看。",
   "sample_vn": "Phần biểu diễn của các diễn viên Kinh kịch rất đặc sắc. Họ rất chuyên nghiệp, tay nghề rất cao, động tác rất khó nhưng đều làm cực đẹp, khán giả vỗ tay không ngớt. Vì nhóm Lý Văn đã tìm hiểu trước câu chuyện một lượt nên gần như xem hiểu hết. Trên đường về, ai cũng thấy Kinh kịch rất thú vị, diễn viên diễn rất đặc sắc, nên Lý Văn nói sau này sẽ lại đến xem.",
   "note": "Câu hỏi bài khoá 3; dùng 把 + 宾 + V + 动量补语 (điểm 3)."
  },
  {
   "q_zh": "请根据提示复述课文三。",
   "q_vn": "Dựa vào gợi ý, kể lại bài khoá 3.",
   "hint": "周六晚上，李文等四人来到国家大剧院……。入座后，李文……说……。演出开始后……。因为李文他们提前……，所以……。演出……，演员们邀请观众……。回来的路上……",
   "sample": "周六晚上，李文等四人来到国家大剧院观看京剧演出。入座后，李文指着节目表说：“这些演员很专业，功夫很深，在京剧比赛中获过很多奖，有的还是国家、国际大奖。”演出开始后，他们看到演员们做的动作很难，但是做得都特别好，观众们不断鼓掌。因为李文他们提前把故事了解了一遍，所以差不多都看懂了。演出结束后，演员们邀请观众和他们一起庆祝演出成功。回来的路上，大家特别激动，觉得京剧很有意思，演员演得很精彩。李文点头说：“以后咱们还来看。”",
   "sample_vn": "Tối thứ Bảy, nhóm bốn người của Lý Văn đến Nhà hát Lớn Quốc gia xem Kinh kịch. Vào chỗ xong, Lý Văn chỉ vào tờ chương trình nói: “Những diễn viên này rất chuyên nghiệp, tay nghề rất cao, đã đoạt nhiều giải trong các cuộc thi Kinh kịch, có giải còn là giải quốc gia, quốc tế lớn.” Buổi diễn bắt đầu, họ thấy động tác rất khó nhưng diễn viên làm cực đẹp, khán giả vỗ tay không ngớt. Vì đã tìm hiểu trước câu chuyện một lượt nên họ gần như xem hiểu hết. Kết thúc, các diễn viên mời khán giả cùng ăn mừng buổi diễn thành công. Trên đường về, mọi người rất xúc động, thấy Kinh kịch rất thú vị. Lý Văn gật đầu nói: “Sau này chúng mình lại đến xem.”",
   "note": "Bài tập 复述 của sách (trang 105)."
  },
  {
   "q_zh": "马可·波罗写的游记怎么样？来到中国后，白家月有什么发现？她后来决定读什么专业？",
   "q_vn": "Cuốn du ký Marco Polo viết thế nào? Đến Trung Quốc rồi, Bạch Gia Nguyệt phát hiện ra điều gì? Sau đó cô quyết định học chuyên ngành gì?",
   "hint": "《马可·波罗游记》影响……，作者向世界介绍了……。来到中国后，她发现……。她决定报考……",
   "sample": "《马可·波罗游记》是一部影响很大的作品，作者向世界介绍了13世纪时的中国。来到中国后，白家月发现现在的中国和书里的中国已有很大不同。她到家后又把中文版的游记看了两天，然后决定把自己的文章、日记全部整理出来，完成《东方旅行日记》。她还决定报考中国语言文学专业的研究生。",
   "sample_vn": "“Du ký Marco Polo” là một tác phẩm có ảnh hưởng rất lớn, tác giả đã giới thiệu với thế giới Trung Quốc thế kỷ 13. Đến Trung Quốc, Bạch Gia Nguyệt phát hiện Trung Quốc bây giờ đã khác rất nhiều so với trong sách. Về nhà cô lại đọc cuốn du ký bản tiếng Trung suốt hai ngày, rồi quyết định sắp xếp lại toàn bộ bài viết, nhật ký của mình để hoàn thành “Nhật ký du hành phương Đông”. Cô còn quyết định đăng ký thi cao học chuyên ngành ngôn ngữ văn học Trung Quốc.",
   "note": "Câu hỏi bài khoá 4; dùng 把 + 宾 + V + 时量补语 (điểm 4)."
  },
  {
   "q_zh": "表演：三至五人一组，选择一个与本课话题有关的主题，排一个五分钟左右的小节目，可以是小话剧、对话表演、朗诵等。每位同学都要参加，并尽量使用本课学过的词语和语言点。排完后在全班进行表演。",
   "q_vn": "Biểu diễn: Nhóm 3–5 người, chọn một chủ đề liên quan đến bài học, dàn dựng một tiết mục nhỏ khoảng 5 phút — có thể là kịch ngắn, diễn hội thoại, ngâm thơ/đọc diễn cảm… Mỗi bạn đều phải tham gia, cố gắng dùng từ ngữ và điểm ngữ pháp của bài. Tập xong thì biểu diễn trước lớp.",
   "hint": "小话剧《排练》：老师问……排得怎么样了？学生：……不是……，就是……。老师：时间不多了，咱们练一遍是一遍。你把……再练……分钟。……把……排了……遍",
   "sample": "小话剧《排练》（人物：李老师、小雪、马克）。李老师：同学们，艺术节周五就开始了，咱们的话剧排得怎么样了？小雪：差不多了。不过我内心还是有些紧张，排的时候不是忘词，就是忘记做动作。马克：我也是。我演少年歌手，可是有一句总是唱不好。李老师：别着急，时间不多了，咱们练一遍是一遍。马克，你先把这首歌唱三遍。马克：好的。（唱完）怎么样？小雪：你的歌声美极了，比昨天好多了！李老师：小雪，你把第二场的动作再练十分钟，练完咱们从头再排一遍。小雪：没问题。我昨天晚上已经把台词看了一个小时，现在都记住了。李老师：太棒了！大家要再自信些。演出那天，我还邀请了很多家长来看。演出成功以后，我请大家吃饭庆祝！小雪、马克：太好了，我们特别期待！",
   "sample_vn": "Kịch ngắn “Buổi tập” (nhân vật: cô Lý, Tiểu Tuyết, Mark). Cô Lý: Các em, thứ Sáu lễ hội nghệ thuật bắt đầu rồi, vở kịch của chúng ta tập đến đâu rồi? Tiểu Tuyết: Gần xong rồi ạ. Nhưng trong lòng em vẫn hơi hồi hộp, lúc tập không quên lời thì là quên động tác. Mark: Em cũng vậy. Em đóng vai ca sĩ thiếu niên, mà có một câu hát mãi không hay. Cô Lý: Đừng vội, thời gian không còn nhiều, chúng ta tập được lượt nào hay lượt ấy. Mark, em hát bài này ba lượt trước đã. Mark: Vâng. (Hát xong) Thế nào ạ? Tiểu Tuyết: Giọng cậu hay tuyệt, hay hơn hôm qua nhiều! Cô Lý: Tiểu Tuyết, em luyện động tác cảnh hai thêm mười phút, xong chúng ta tập lại từ đầu một lượt. Tiểu Tuyết: Không vấn đề gì ạ. Tối qua em đã đọc kịch bản một tiếng, giờ nhớ hết rồi. Cô Lý: Tuyệt quá! Mọi người tự tin hơn nữa nhé. Hôm biểu diễn cô còn mời nhiều phụ huynh đến xem. Diễn thành công, cô mời cả lớp đi ăn ăn mừng! Tiểu Tuyết, Mark: Hay quá, chúng em rất mong chờ!",
   "note": "Hoạt động 任务活动 · 表演 của sách (trang 109) — kịch mẫu dùng đủ 4 điểm ngữ pháp: 不是……就是……, 练一遍是一遍, 把这首歌唱三遍 (động lượng), 把动作再练十分钟 / 把台词看了一个小时 (thời lượng)."
  }
 ]
};
var translateData = [
 {
  "vi": "Có lúc con không quên lời thì là quên làm động tác.",
  "zh": "有时候我不是忘词，就是忘记做动作。",
  "py": "Yǒushíhou wǒ bú shì wàng cí, jiùshì wàngjì zuò dòngzuò."
 },
 {
  "vi": "Chúng mình cứ chuẩn bị trước đã, hiểu được chút nào hay chút ấy.",
  "zh": "咱们先做做功课，能懂一点儿是一点儿。",
  "py": "Zánmen xiān zuòzuo gōngkè, néng dǒng yìdiǎnr shì yìdiǎnr."
 },
 {
  "vi": "Vì đã tìm hiểu câu chuyện trước một lượt nên họ gần như xem hiểu hết.",
  "zh": "因为他们提前把故事了解了一遍，所以差不多都看懂了。",
  "py": "Yīnwèi tāmen tíqián bǎ gùshi liǎojiě le yí biàn, suǒyǐ chàbuduō dōu kàndǒng le."
 },
 {
  "vi": "Về đến nhà, tôi lại đọc cuốn sách này suốt hai ngày.",
  "zh": "到家后，我又把这本书看了两天。",
  "py": "Dào jiā hòu, wǒ yòu bǎ zhè běn shū kàn le liǎng tiān."
 },
 {
  "vi": "Họ hát hay tuyệt, để lại cho tôi ấn tượng đặc biệt sâu.",
  "zh": "他们演唱得好听极了，给我留下的印象特别深。",
  "py": "Tāmen yǎnchàng de hǎotīng jí le, gěi wǒ liúxia de yìnxiàng tèbié shēn."
 },
 {
  "vi": "Buổi diễn kết thúc, các diễn viên mời khán giả cùng họ ăn mừng buổi diễn thành công.",
  "zh": "演出结束后，演员们邀请观众和他们一起庆祝演出成功。",
  "py": "Yǎnchū jiéshù hòu, yǎnyuánmen yāoqǐng guānzhòng hé tāmen yìqǐ qìngzhù yǎnchū chénggōng."
 }
];
var translateDataRev = [
 {
  "vi": "Ông Mai Lan Phương là nghệ sĩ Kinh kịch nổi tiếng của Trung Quốc.",
  "zh": "梅兰芳先生是中国著名京剧艺术家。",
  "py": "Méi Lánfāng xiānsheng shì Zhōngguó zhùmíng jīngjù yìshùjiā."
 },
 {
  "vi": "Tớ lên mạng tra tài liệu trước, tra xong cũng chuyển cho các cậu.",
  "zh": "我先去网上查资料，查完后也转发给你们。",
  "py": "Wǒ xiān qù wǎngshang chá zīliào, chá wán hòu yě zhuǎnfā gěi nǐmen."
 },
 {
  "vi": "Những diễn viên này rất chuyên nghiệp, tay nghề rất cao.",
  "zh": "这些演员很专业，功夫很深。",
  "py": "Zhèxiē yǎnyuán hěn zhuānyè, gōngfu hěn shēn."
 },
 {
  "vi": "Tôi quyết định sắp xếp lại toàn bộ bài viết và nhật ký của mình.",
  "zh": "我决定把自己写的文章和日记全部整理出来。",
  "py": "Wǒ juédìng bǎ zìjǐ xiě de wénzhāng hé rìjì quánbù zhěnglǐ chūlai."
 },
 {
  "vi": "Tôi muốn đăng ký thi cao học chuyên ngành ngôn ngữ văn học Trung Quốc.",
  "zh": "我想报考中国语言文学专业的研究生。",
  "py": "Wǒ xiǎng bàokǎo Zhōngguó yǔyán wénxué zhuānyè de yánjiūshēng."
 }
];
var sgkData = [
 {
  "kieu": "kho",
  "de": "选词填空（一）· 综合练习",
  "vn": "Chọn từ thích hợp điền vào chỗ trống (Bài tập tổng hợp, sách trang 108). Sách 4下 chưa có đáp án — đây là đáp án tham khảo.",
  "dapSgk": false,
  "tu": [
   "文字",
   "留下",
   "内心",
   "艺术",
   "自信",
   "邀请"
  ],
  "cau": [
   {
    "s": "那部作品写得很棒，给我们＿＿了很深的印象。",
    "dap": [
     "留下"
    ]
   },
   {
    "s": "收到演出＿＿后，他们马上就开始排新节目。",
    "dap": [
     "邀请"
    ]
   },
   {
    "s": "今年的＿＿节，刘小雪参加了话剧表演。",
    "dap": [
     "艺术"
    ]
   },
   {
    "s": "虽然没说什么，但是我＿＿很感动。",
    "dap": [
     "内心"
    ]
   },
   {
    "s": "妈妈总是鼓励我要＿＿，相信自己一定能做好。",
    "dap": [
     "自信"
    ]
   },
   {
    "s": "这部小说（xiǎoshuō, tiểu thuyết）的＿＿很美，我都看了好几遍了。",
    "dap": [
     "文字"
    ]
   }
  ]
 },
 {
  "kieu": "kho",
  "de": "选词填空（二）· 综合练习",
  "vn": "Chọn từ thích hợp điền vào chỗ trống (hội thoại, sách trang 108). Đáp án tham khảo.",
  "dapSgk": false,
  "tu": [
   "作家",
   "文章",
   "点头",
   "庆祝",
   "度假",
   "转发"
  ],
  "cau": [
   {
    "s": "A：女儿马上放假了，今年咱们全家去哪儿＿＿？　B：郊区怎么样？那儿风景好，交通也方便。",
    "dap": [
     "度假"
    ]
   },
   {
    "s": "A：我已经把它读了好几遍了，还是记不住。　B：你理解这篇（piān, lượng từ của bài viết）＿＿的意思了吗？你要在理解的基础上记忆。",
    "dap": [
     "文章"
    ]
   },
   {
    "s": "A：报纸上说，在这个国家，“＿＿”是“不”的意思。　B：是吗？我还是第一次听说。这就是文化上的不同啊！",
    "dap": [
     "点头"
    ]
   },
   {
    "s": "A：小赵，这个项目咱们怎么做？　B：听经理的吧。经理给我发了几条信息，我把他的信息＿＿给你。",
    "dap": [
     "转发"
    ]
   },
   {
    "s": "A：下周五是妈妈的生日，咱们给她买个礼物吧。　B：好啊，我再给她做几个她爱吃的菜，一起＿＿一下。",
    "dap": [
     "庆祝"
    ]
   },
   {
    "s": "A：我读过这本书，挺有意思的。　B：是啊，这个作者是现在最受欢迎的青年＿＿。",
    "dap": [
     "作家"
    ]
   }
  ]
 },
 {
  "kieu": "kho",
  "de": "选择合适的内容完成短文",
  "vn": "Chọn nội dung thích hợp (A–D) hoàn thành đoạn văn (sách trang 108). Đáp án tham khảo.",
  "dapSgk": false,
  "tu": [
   "老师的鼓励",
   "上学后",
   "只是觉得有趣",
   "她成为了一名优秀作家"
  ],
  "cau": [
   {
    "s": "朱华从小就喜欢读书。＿＿，她写的作文（zuòwén, bài văn）总会受到老师的表扬，老师经常把她的作文读给同学们听。＿＿，让朱华更加自信，也更加努力。上高中后，她开始写小说。十几年后，＿＿。她常说，那时候写文章、写小说并不是为了当作家，＿＿，就坚持下来了。",
    "dap": [
     "上学后",
     "老师的鼓励",
     "她成为了一名优秀作家",
     "只是觉得有趣"
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
    "anh": "/images/hsk4v3/bai-19/bt-1.webp",
    "s": "",
    "tu": "观众",
    "dap": "演出太精彩了，观众们一边笑一边不断地鼓掌。",
    "giai": "观众 làm chủ ngữ, thêm 们 chỉ số nhiều; ôn 一边……一边…… (HSK 2) và 不断 + V."
   },
   {
    "anh": "/images/hsk4v3/bai-19/bt-2.webp",
    "s": "",
    "tu": "度假",
    "dap": "他们俩去海边度假了，每天躺在椅子上看大海，舒服极了。",
    "giai": "Nơi chốn đứng trước 度假 (✗ 度假海边); Adj + 极了 (HSK 3)."
   },
   {
    "anh": "/images/hsk4v3/bai-19/bt-3.webp",
    "s": "",
    "tu": "演唱",
    "dap": "她正在台上演唱一首歌，歌声美极了。",
    "giai": "演唱 + 一首歌 (lượng từ 首 cho bài hát); 正在 + V chỉ hành động đang diễn ra."
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
  "tieuDe": "Viết đoạn văn: giới thiệu một cuốn tiểu thuyết em thích (写作)",
  "gioiThieu": "Đề 写作 của sách HSK 4 (3.0) yêu cầu viết một đoạn văn ngắn (ít nhất 140 chữ): giới thiệu một cuốn tiểu thuyết em thích và kể lại những tình tiết chính của câu chuyện — giống phần 书写 của đề thi HSK 4 mới, đồng thời luyện mục tiêu 2 của bài: giới thiệu một tác phẩm bằng văn viết.",
  "buoc": [
   "Đọc kỹ đề: hai yêu cầu bắt buộc — (1) GIỚI THIỆU cuốn tiểu thuyết (tên, tác giả), (2) KỂ tình tiết chính (主要故事情节).",
   "Lập dàn ý theo các câu hỏi gợi ý: tên sách, tác giả → câu chuyện kể về ai, làm gì → diễn biến, kết thúc → em đọc nó thế nào → ấn tượng, bài học.",
   "Kể tình tiết ngắn gọn theo thứ tự thời gian (开始…… / 后来…… / 最后……), không chép lại cả truyện.",
   "Dùng từ mới và 4 điểm ngữ pháp của bài (khung “Từ, cấu trúc nên dùng”): 不是……就是……, V + 一×是一×, 把 + 宾 + V + 动量补语 / 时量补语.",
   "Câu kết nói ấn tượng của em (给我留下了……印象, 告诉我……); tự soát số chữ (≥ 140), tên sách đặt trong 《》, soát lỗi chữ Hán trước khi nộp."
  ]
 },
 "de": "请介绍一部你喜欢的小说，描述一下主要故事情节，不少于140字。",
 "prompt": "Hãy giới thiệu một cuốn tiểu thuyết mà em thích, mô tả những tình tiết chính của câu chuyện, không ít hơn 140 chữ.",
 "dan": [
  {
   "hoi": "这部小说叫什么？作者是谁？",
   "goiY": "我最喜欢的小说是《……》，这部作品的作者是……"
  },
  {
   "hoi": "小说主要讲了一个什么故事？",
   "goiY": "小说主要讲的是……的故事。"
  },
  {
   "hoi": "故事里发生了什么？最后怎么样了？",
   "goiY": "开始……；后来……不是……，就是……；最后……"
  },
  {
   "hoi": "你是怎么读这部小说的？",
   "goiY": "刚开始……，能懂一点儿是一点儿；后来我把它看了好几遍 / 看了整整一个月……"
  },
  {
   "hoi": "这部小说给你留下了什么印象？",
   "goiY": "这部作品给我留下了很深的印象，它告诉我……"
  }
 ],
 "tuNen": [
  "作品",
  "作者",
  "作家",
  "读者",
  "文学",
  "文字",
  "图片",
  "版",
  "全部",
  "留下",
  "期待",
  "内心",
  "自信",
  "少年",
  "青年"
 ],
 "cauTruc": [
  {
   "ten": "不是……，就是……",
   "nhan": "不是",
   "vd": "在回来的路上，鲨鱼不是从左边游过来，就是从右边游过来。",
   "khi": "Kể những khó khăn / sự việc lặp đi lặp lại trong truyện."
  },
  {
   "ten": "V + 一×是一×",
   "nhan": "是一",
   "vd": "刚开始很多地方看不懂，我就看一页是一页，能懂一点儿是一点儿。",
   "khi": "Kể quá trình em đọc — kiên trì từng chút."
  },
  {
   "ten": "把 + 宾 + V + 动量补语",
   "nhan": "遍",
   "vd": "这部小说我特别喜欢，已经把它看了好几遍。",
   "khi": "Nói em đọc mấy lượt (thể hiện mức độ yêu thích)."
  },
  {
   "ten": "把 + 宾 + V + 时量补语",
   "nhan": "把",
   "vd": "有一个暑假，我把它读了整整一个月。",
   "khi": "Nói thời gian em dành cho cuốn sách."
  },
  {
   "ten": "给……留下……印象",
   "nhan": "印象",
   "vd": "这部作品给我留下了很深的印象。",
   "khi": "Câu KẾT: ấn tượng, ý nghĩa của tác phẩm."
  }
 ],
 "checklist": [
  "Đủ ít nhất 140 chữ Hán chưa?",
  "Đã giới thiệu tên sách (trong 《》), tác giả VÀ kể được tình tiết chính chưa?",
  "Đã dùng ít nhất 3 trong 4 điểm ngữ pháp của bài (不是……就是……、V + 一×是一×、把 + 宾 + V + 动量补语、把 + 宾 + V + 时量补语) chưa?",
  "Đã dùng ít nhất 6 từ mới của bài chưa?",
  "Đoạn văn có câu mở, phần kể chuyện theo trình tự và câu kết nói cảm nhận chưa?"
 ],
 "model": {
  "zh": "我最喜欢的小说是《老人与海》。这部作品的作者是一位美国作家，它曾经获得过世界文学大奖。小说主要讲的是一位打鱼老人的故事。老人已经八十多天没有打到鱼了，别人都觉得他运气不好，只有一个男孩一直相信他。有一天，老人一个人去了很远的海上，终于有一条大鱼上钩了。这条鱼比他的船还长，老人把鱼线拉了整整三天两夜，最后终于抓住了它。可是在回来的路上，鲨鱼不是从左边游过来，就是从右边游过来，老人一路上都在跟它们打，最后大鱼只剩下了一副骨头。小说的文字很简单，却给我留下了很深的印象。第一次读的时候，很多词我不认识，就看一页是一页，能懂一点儿是一点儿；后来我又把它看了好几遍，有一个暑假，我把它读了整整一个月。这部小说告诉我：人可以失败，但是不能放弃。",
  "py": "Wǒ zuì xǐhuan de xiǎoshuō shì «lǎorén yǔ hǎi». Zhè bù zuòpǐn de zuòzhě shì yí wèi Měiguó zuòjiā, tā céngjīng huòdé guò shìjiè wénxué dàjiǎng. Xiǎoshuō zhǔyào jiǎng de shì yí wèi dǎyú lǎorén de gùshi. Lǎorén yǐjīng bāshí duō tiān méiyǒu dǎdào yú le, biérén dōu juéde tā yùnqi bù hǎo, zhǐyǒu yí gè nánhái yìzhí xiāngxìn tā. Yǒu yì tiān, lǎorén yí gè rén qù le hěn yuǎn de hǎi shàng, zhōngyú yǒu yì tiáo dà yú shàng gōu le. Zhè tiáo yú bǐ tā de chuán hái cháng, lǎorén bǎ yú xiàn lā le zhěngzhěng sān tiān liǎng yè, zuìhòu zhōngyú zhuāzhù le tā. Kěshì zài huílai de lùshang, shāyú bú shì cóng zuǒbian yóu guòlai, jiùshì cóng yòubian yóu guòlai, lǎorén yílù shang dōu zài gēn tāmen dǎ, zuìhòu dà yú zhǐ shèngxià le yí fù gǔtou. Xiǎoshuō de wénzì hěn jiǎndān, què gěi wǒ liúxia le hěn shēn de yìnxiàng. Dì yí cì dú de shíhou, hěn duō cí wǒ bú rènshi, jiù kàn yí yè shì yí yè, néng dǒng yìdiǎnr shì yìdiǎnr; hòulái wǒ yòu bǎ tā kàn le hǎojǐ biàn, yǒu yí gè shǔjià, wǒ bǎ tā dú le zhěngzhěng yí gè yuè. Zhè bù xiǎoshuō gàosu wǒ: rén kěyǐ shībài, dànshì bù néng fàngqì."
 }
};
