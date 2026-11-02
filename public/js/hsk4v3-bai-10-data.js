// HSK 4 (3.0) · Bai 10 — sinh boi tools/hsk4v3/gan.js tu tools/hsk4v3/bai-10/ (dung sua tay).
var vocabData = [
 {
  "n": 1,
  "zh": "小伙子",
  "py": "xiǎohuǒzi",
  "pos": "Danh từ",
  "vn": "chàng trai trẻ, cậu thanh niên",
  "hv": "tiểu hỏa tử",
  "em": "🧑",
  "lesson": 1,
  "explain": [
   "Cách gọi thân mật một người đàn ông trẻ tuổi (khẩu ngữ). Người lớn tuổi hay gọi: “小伙子，……” = “Này cậu trai, …”. Chữ 子 đọc nhẹ (zi)."
  ],
  "usage": "这个小伙子 · 年轻的小伙子 · 小伙子，你……",
  "collo": [
   "这个小伙子",
   "年轻的小伙子",
   "帅小伙子",
   "小伙子们"
  ],
  "colloFull": [
   {
    "zh": "这个小伙子",
    "py": "Zhège xiǎohuǒzi",
    "vn": "cậu thanh niên này"
   },
   {
    "zh": "年轻的小伙子",
    "py": "Niánqīng de xiǎohuǒzi",
    "vn": "chàng trai trẻ"
   },
   {
    "zh": "帅小伙子",
    "py": "Shuài xiǎohuǒzi",
    "vn": "anh chàng đẹp trai"
   },
   {
    "zh": "小伙子们",
    "py": "Xiǎohuǒzi men",
    "vn": "các chàng trai"
   }
  ],
  "patterns": [
   {
    "s": "小伙子，+ câu nói",
    "m": "Gọi một người đàn ông trẻ (người lớn tuổi nói với người trẻ)"
   },
   {
    "s": "小伙子 ↔ 姑娘",
    "m": "chàng trai ↔ cô gái"
   }
  ],
  "ex_zh": "你看，这个小伙子从广州去哈尔滨出差，没想到哈尔滨的气温降到了零下二十几度，把他冻坏了。",
  "ex_py": "Nǐ kàn, zhège xiǎohuǒzi cóng Guǎngzhōu qù Hā'ěrbīn chūchāi, méi xiǎng dào Hā'ěrbīn de qìwēn jiàng dào le líng xià èr shí jǐ dù, bǎ tā dòng huài le.",
  "ex_vn": "Anh xem này, cậu thanh niên này từ Quảng Châu đi công tác Cáp Nhĩ Tân, không ngờ nhiệt độ ở Cáp Nhĩ Tân xuống tới âm hai mươi mấy độ, làm cậu ấy rét cóng.",
  "exList": [
   {
    "zh": "你看，这个小伙子从广州去哈尔滨出差，没想到哈尔滨的气温降到了零下二十几度，把他冻坏了。",
    "py": "Nǐ kàn, zhège xiǎohuǒzi cóng Guǎngzhōu qù Hā'ěrbīn chūchāi, méi xiǎng dào Hā'ěrbīn de qìwēn jiàng dào le líng xià èr shí jǐ dù, bǎ tā dòng huài le.",
    "vn": "Anh xem này, cậu thanh niên này từ Quảng Châu đi công tác Cáp Nhĩ Tân, không ngờ nhiệt độ ở Cáp Nhĩ Tân xuống tới âm hai mươi mấy độ, làm cậu ấy rét cóng."
   },
   {
    "zh": "那个小伙子不仅工作认真，而且对人也很热情。",
    "py": "Nàge xiǎohuǒzi bùjǐn gōngzuò rènzhēn, érqiě duì rén yě hěn rèqíng.",
    "vn": "Chàng trai đó không chỉ làm việc chăm chỉ mà còn đối xử với mọi người rất nhiệt tình. (ôn 不仅……而且…… – Bài 3 · điểm 2)"
   }
  ],
  "hanzi": [
   {
    "c": "小",
    "p": "xiǎo",
    "type": "象形字 · Chữ tượng hình",
    "st": 3,
    "ord": "sổ móc → chấm trái → chấm phải",
    "rad": "小 (tiểu – nhỏ)",
    "mean": "nhỏ",
    "tip": "Hình ba hạt cát nhỏ. 大 (to) + 小 (nhỏ) ghép lại → “to nhỏ” = kích cỡ.",
    "cf": "少 shǎo (ít) — thêm nét phẩy dưới",
    "w": "大小 / 小"
   },
   {
    "c": "伙",
    "p": "huǒ",
    "type": "左右结构 · Trái-phải",
    "st": 6,
    "ord": "亻 trái → 火 phải",
    "rad": "亻 (nhân)",
    "mean": "bạn, nhóm",
    "tip": "Người 亻 + lửa 火 → những người cùng nấu ăn bên bếp lửa → BẠN, NHÓM. 小伙子 = chàng trai; 伙伴 = bạn đồng hành.",
    "cf": "火 (huǒ – lửa)",
    "w": "小伙子 / 伙伴 / 大伙儿"
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
    "prompt": "Chàng trai đó tuy còn trẻ nhưng năng lực làm việc rất mạnh.",
    "answer": "尽管那个小伙子很年轻，但是工作能力很强。",
    "answerPy": "Jǐnguǎn nàge xiǎohuǒzi hěn niánqīng, dànshì gōngzuò nénglì hěn qiáng.",
    "note": "Ôn 尽管……但是…… (Bài 9 · điểm 2).",
    "pair": "尽管……但是……"
   },
   {
    "promptLang": "vi",
    "prompt": "Cậu thanh niên ấy từ trước đến nay chưa từng đến phương Bắc.",
    "answer": "那个小伙子从来没去过北方。",
    "answerPy": "Nàge xiǎohuǒzi cónglái méi qù guò běifāng.",
    "note": "Ôn 从来 (Bài 9 · điểm 4): 从来 + 没 + V + 过.",
    "pair": "从来没V过"
   }
  ]
 },
 {
  "n": 2,
  "zh": "气温",
  "py": "qìwēn",
  "pos": "Danh từ",
  "vn": "nhiệt độ không khí (thời tiết)",
  "hv": "khí ôn",
  "em": "🌡️",
  "lesson": 1,
  "explain": [
   "Nhiệt độ của không khí — dùng khi nói về thời tiết, dự báo thời tiết. Phân biệt: 温度 (nhiệt độ nói chung: nước, phòng…), 体温 (thân nhiệt — Bài 6)."
  ],
  "usage": "气温降到… · 气温很高 / 很低 · 最高气温 · 最低气温.",
  "collo": [
   "气温降到零下",
   "气温很高",
   "最高气温",
   "最低气温"
  ],
  "colloFull": [
   {
    "zh": "气温降到零下",
    "py": "Qìwēn jiàng dào líng xià",
    "vn": "nhiệt độ xuống dưới 0 độ"
   },
   {
    "zh": "气温很高",
    "py": "Qìwēn hěn gāo",
    "vn": "nhiệt độ rất cao"
   },
   {
    "zh": "最高气温",
    "py": "Zuì gāo qìwēn",
    "vn": "nhiệt độ cao nhất"
   },
   {
    "zh": "最低气温",
    "py": "Zuì dī qìwēn",
    "vn": "nhiệt độ thấp nhất"
   }
  ],
  "patterns": [
   {
    "s": "气温 + 降到 / 升到 + số + 度",
    "m": "Nhiệt độ xuống / lên tới … độ"
   },
   {
    "s": "气温 + 高 / 低",
    "m": "✗ 气温很冷 → ✓ 气温很低 / 天气很冷"
   }
  ],
  "ex_zh": "没想到哈尔滨的气温降到了零下二十几度，把他冻坏了。",
  "ex_py": "Méi xiǎng dào Hā'ěrbīn de qìwēn jiàng dào le líng xià èr shí jǐ dù, bǎ tā dòng huài le.",
  "ex_vn": "Không ngờ nhiệt độ ở Cáp Nhĩ Tân xuống tới âm hai mươi mấy độ, làm cậu ấy rét cóng.",
  "exList": [
   {
    "zh": "没想到哈尔滨的气温降到了零下二十几度，把他冻坏了。",
    "py": "Méi xiǎng dào Hā'ěrbīn de qìwēn jiàng dào le líng xià èr shí jǐ dù, bǎ tā dòng huài le.",
    "vn": "Không ngờ nhiệt độ ở Cáp Nhĩ Tân xuống tới âm hai mươi mấy độ, làm cậu ấy rét cóng."
   },
   {
    "zh": "随着气温越来越低，街上穿厚衣服的人也越来越多了。",
    "py": "Suízhe qìwēn yuèláiyuè dī, jiē shàng chuān hòu yīfu de rén yě yuèláiyuè duō le.",
    "vn": "Cùng với nhiệt độ ngày càng thấp, người mặc áo dày trên phố cũng ngày càng nhiều. (ôn 随着 – Bài 1 · điểm 3)"
   }
  ],
  "hanzi": [
   {
    "c": "气",
    "p": "qì",
    "type": "独体字 · Chữ đơn (giản thể)",
    "st": 4,
    "ord": "nét liền",
    "rad": "气 (khí)",
    "mean": "khí, không khí",
    "tip": "Chữ tượng hình HƠI/KHÍ bốc lên → nghĩa gốc là KHÍ, kết hợp 空(trống rỗng, bầu trời) thành 空气 = KHÔNG KHÍ.",
    "cf": "气 dễ nhầm với 乞 (qǐ – \"xin, cầu\")",
    "w": "空气 / 天气 / 生气"
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
    "prompt": "Hôm nay nhiệt độ ít nhất cũng 35 độ, nóng quá!",
    "answer": "今天的气温至少有三十五度，太热了！",
    "answerPy": "Jīntiān de qìwēn zhìshǎo yǒu sān shí wǔ dù, tài rè le!",
    "note": "Ôn 至少 (Bài 5 · điểm 1).",
    "pair": "至少"
   },
   {
    "promptLang": "vi",
    "prompt": "So với hôm qua, nhiệt độ hôm nay thấp hơn nhiều.",
    "answer": "跟昨天相比，今天的气温低多了。",
    "answerPy": "Gēn zuótiān xiāngbǐ, jīntiān de qìwēn dī duō le.",
    "note": "Ôn 跟……相比 (Bài 8 · điểm 3).",
    "pair": "跟……相比"
   }
  ]
 },
 {
  "n": 3,
  "zh": "零下",
  "py": "líng xià",
  "pos": "Cụm từ",
  "vn": "dưới 0 độ, âm (… độ)",
  "hv": "linh hạ",
  "em": "🥶",
  "lesson": 1,
  "explain": [
   "Dưới 0 độ (nhiệt độ âm). 零下五度 = âm 5 độ (−5°C). Người Việt nói “âm … độ”, người Trung nói “零下 … 度”."
  ],
  "usage": "零下 + số + 度 / 摄氏度 · 降到零下.",
  "collo": [
   "零下五度",
   "零下二十几度",
   "降到零下",
   "零下十摄氏度"
  ],
  "colloFull": [
   {
    "zh": "零下五度",
    "py": "Líng xià wǔ dù",
    "vn": "âm 5 độ"
   },
   {
    "zh": "零下二十几度",
    "py": "Líng xià èr shí jǐ dù",
    "vn": "âm hai mươi mấy độ"
   },
   {
    "zh": "降到零下",
    "py": "Jiàng dào líng xià",
    "vn": "xuống dưới 0 độ"
   },
   {
    "zh": "零下十摄氏度",
    "py": "Líng xià shí shèshìdù",
    "vn": "âm 10 độ C"
   }
  ],
  "patterns": [
   {
    "s": "零下 + số + 度",
    "m": "= âm … độ (−…°C)"
   },
   {
    "s": "零下 + số ↔ (零上) + số",
    "m": "Nhiệt độ dương thường chỉ nói số + 度"
   }
  ],
  "ex_zh": "没想到哈尔滨的气温降到了零下二十几度。",
  "ex_py": "Méi xiǎng dào Hā'ěrbīn de qìwēn jiàng dào le líng xià èr shí jǐ dù.",
  "ex_vn": "Không ngờ nhiệt độ ở Cáp Nhĩ Tân xuống tới âm hai mươi mấy độ.",
  "exList": [
   {
    "zh": "没想到哈尔滨的气温降到了零下二十几度。",
    "py": "Méi xiǎng dào Hā'ěrbīn de qìwēn jiàng dào le líng xià èr shí jǐ dù.",
    "vn": "Không ngờ nhiệt độ ở Cáp Nhĩ Tân xuống tới âm hai mươi mấy độ."
   },
   {
    "zh": "要是明天气温降到零下，我们就不去爬山了。",
    "py": "Yàoshi míngtiān qìwēn jiàng dào líng xià, wǒmen jiù bú qù páshān le.",
    "vn": "Nếu mai nhiệt độ xuống dưới 0 độ thì chúng ta không đi leo núi nữa. (ôn 要是……就…… – Bài 1 · điểm 2)"
   }
  ],
  "hanzi": [
   {
    "c": "零",
    "p": "líng",
    "type": "上下结构 · Trên-dưới",
    "st": 13,
    "ord": "雨 trên → 令 dưới",
    "rad": "雨 (vũ)",
    "mean": "số không; lẻ",
    "tip": "Mưa 雨 + 令 → giọt mưa rơi rải rác → LẺ TẺ, SỐ KHÔNG. 零钱 = tiền lẻ; 零食 = đồ ăn vặt.",
    "cf": "令 (lìng – lệnh)",
    "w": "零钱 / 零 / 零食"
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
    "prompt": "Ở Cáp Nhĩ Tân, mùa đông nhiệt độ thường âm hai mươi mấy độ.",
    "answer": "在哈尔滨，冬天的气温常常是零下二十几度。",
    "answerPy": "Zài Hā'ěrbīn, dōngtiān de qìwēn chángcháng shì líng xià èr shí jǐ dù.",
    "note": "二十几 = hai mươi mấy (HSK 3).",
    "pair": "零下 + số + 度"
   },
   {
    "promptLang": "vi",
    "prompt": "Dù nhiệt độ là âm 10 độ, nhưng anh ấy vẫn ra ngoài chạy bộ.",
    "answer": "尽管气温是零下十度，但是他还是出去跑步了。",
    "answerPy": "Jǐnguǎn qìwēn shì líng xià shí dù, dànshì tā háishì chūqù pǎobù le.",
    "note": "Ôn 尽管……但是…… (Bài 9 · điểm 2).",
    "pair": "尽管……但是……"
   }
  ]
 },
 {
  "n": 4,
  "zh": "度",
  "py": "dù",
  "pos": "Lượng từ",
  "vn": "độ (đơn vị nhiệt độ)",
  "hv": "độ",
  "em": "🌡️",
  "lesson": 1,
  "explain": [
   "Đơn vị đo nhiệt độ trong khẩu ngữ: 三十度 = 30 độ. Văn viết, dự báo thời tiết dùng 摄氏度 (độ C)."
  ],
  "usage": "số + 度 · 多少度？ · 二十几度.",
  "collo": [
   "三十度",
   "零下五度",
   "多少度",
   "二十几度"
  ],
  "colloFull": [
   {
    "zh": "三十度",
    "py": "Sān shí dù",
    "vn": "30 độ"
   },
   {
    "zh": "零下五度",
    "py": "Líng xià wǔ dù",
    "vn": "âm 5 độ"
   },
   {
    "zh": "多少度",
    "py": "Duōshǎo dù",
    "vn": "bao nhiêu độ"
   },
   {
    "zh": "二十几度",
    "py": "Èr shí jǐ dù",
    "vn": "hai mươi mấy độ"
   }
  ],
  "patterns": [
   {
    "s": "số + 度",
    "m": "Nói nhiệt độ (khẩu ngữ)"
   },
   {
    "s": "今天多少度？",
    "m": "Hỏi nhiệt độ"
   }
  ],
  "ex_zh": "你看，这个小伙子……没想到哈尔滨的气温降到了零下二十几度，把他冻坏了。",
  "ex_py": "Nǐ kàn, zhège xiǎohuǒzi…… méi xiǎng dào Hā'ěrbīn de qìwēn jiàng dào le líng xià èr shí jǐ dù, bǎ tā dòng huài le.",
  "ex_vn": "Anh xem, cậu thanh niên này… không ngờ nhiệt độ ở Cáp Nhĩ Tân xuống tới âm hai mươi mấy độ, làm cậu ấy rét cóng.",
  "exList": [
   {
    "zh": "你看，这个小伙子……没想到哈尔滨的气温降到了零下二十几度，把他冻坏了。",
    "py": "Nǐ kàn, zhège xiǎohuǒzi…… méi xiǎng dào Hā'ěrbīn de qìwēn jiàng dào le líng xià èr shí jǐ dù, bǎ tā dòng huài le.",
    "vn": "Anh xem, cậu thanh niên này… không ngờ nhiệt độ ở Cáp Nhĩ Tân xuống tới âm hai mươi mấy độ, làm cậu ấy rét cóng."
   },
   {
    "zh": "北京那天只有零下五度，不过风不大，我们不觉得冷。",
    "py": "Běijīng nà tiān zhǐyǒu líng xià wǔ dù, búguò fēng bú dà, wǒmen bù juéde lěng.",
    "vn": "Hôm đó Bắc Kinh chỉ có âm 5 độ, có điều gió không to, chúng tôi không thấy lạnh. (ôn 不过 – Bài 2 · điểm 2)"
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
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Hôm nay bao nhiêu độ? — Khoảng 30 độ.",
    "answer": "——今天多少度？——三十度左右。",
    "answerPy": "— Jīntiān duōshǎo dù? — Sān shí dù zuǒyòu.",
    "note": "左右 = khoảng (HSK 3).",
    "pair": "多少度？"
   },
   {
    "promptLang": "vi",
    "prompt": "Mùa hè ở đây nóng tới 40 độ, tôi thật sự chịu không nổi.",
    "answer": "这里夏天热到四十度，我实在受不了。",
    "answerPy": "Zhèli xiàtiān rè dào sì shí dù, wǒ shízai shòubuliǎo.",
    "note": "受不了 = V不了, ôn Bài 4 · điểm 1.",
    "pair": "V到 + số + 度"
   }
  ]
 },
 {
  "n": 5,
  "zh": "冻",
  "py": "dòng",
  "pos": "Động từ",
  "vn": "rét cóng, lạnh cóng; đông lại, đóng băng",
  "hv": "đống",
  "em": "🧊",
  "lesson": 1,
  "explain": [
   "(Người, tay chân) bị lạnh đến cóng; (nước, đồ ăn) đông cứng lại. 冻坏了 = rét cóng / bị lạnh làm hỏng."
  ],
  "usage": "冻坏了 · 冻得 + Adj / V · 把 + ai + 冻坏了 · 冻住了.",
  "collo": [
   "冻坏了",
   "冻得发抖",
   "冻住了",
   "冻感冒了"
  ],
  "colloFull": [
   {
    "zh": "冻坏了",
    "py": "Dòng huài le",
    "vn": "rét cóng; bị lạnh làm hỏng"
   },
   {
    "zh": "冻得发抖",
    "py": "Dòng de fādǒu",
    "vn": "lạnh đến run"
   },
   {
    "zh": "冻住了",
    "py": "Dòng zhù le",
    "vn": "đông cứng lại"
   },
   {
    "zh": "冻感冒了",
    "py": "Dòng gǎnmào le",
    "vn": "bị lạnh đến cảm"
   }
  ],
  "patterns": [
   {
    "s": "把 + ai + 冻坏了",
    "m": "Câu chữ 把: (trời lạnh) làm ai rét cóng"
   },
   {
    "s": "冻 + 得 + bổ ngữ",
    "m": "Lạnh đến mức …"
   }
  ],
  "ex_zh": "没想到哈尔滨的气温降到了零下二十几度，把他冻坏了。",
  "ex_py": "Méi xiǎng dào Hā'ěrbīn de qìwēn jiàng dào le líng xià èr shí jǐ dù, bǎ tā dòng huài le.",
  "ex_vn": "Không ngờ nhiệt độ ở Cáp Nhĩ Tân xuống tới âm hai mươi mấy độ, làm cậu ấy rét cóng.",
  "exList": [
   {
    "zh": "没想到哈尔滨的气温降到了零下二十几度，把他冻坏了。",
    "py": "Méi xiǎng dào Hā'ěrbīn de qìwēn jiàng dào le líng xià èr shí jǐ dù, bǎ tā dòng huài le.",
    "vn": "Không ngờ nhiệt độ ở Cáp Nhĩ Tân xuống tới âm hai mươi mấy độ, làm cậu ấy rét cóng."
   },
   {
    "zh": "外面太冷了，我的手都冻红了。",
    "py": "Wàimian tài lěng le, wǒ de shǒu dōu dòng hóng le.",
    "vn": "Bên ngoài lạnh quá, tay tôi lạnh đến đỏ cả lên."
   }
  ],
  "hanzi": [
   {
    "c": "冻",
    "p": "dòng",
    "type": "形声字 · Chữ hình thanh",
    "st": 7,
    "ord": "冫 → 东",
    "rad": "冫 (băng – nước đá)",
    "mean": "đông lại, đóng băng; rét cóng",
    "tip": "Hai chấm băng (冫) + 东 dōng (chỉ âm): nước gặp lạnh hoá thành băng → đông lại; người gặp lạnh thì rét cóng — 冻坏了, 冷冻.",
    "cf": "东 dōng (phía đông) — không có 冫; 栋 dòng (toà nhà) — bên trái là 木",
    "w": "冻坏 / 冷冻 / 冰冻"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Mặc thêm áo vào, nếu không cậu sẽ bị rét cóng đấy.",
    "answer": "多穿点儿衣服，否则你会冻坏的。",
    "answerPy": "Duō chuān diǎnr yīfu, fǒuzé nǐ huì dòng huài de.",
    "note": "Ôn 否则 (Bài 8 · điểm 2).",
    "pair": "……，否则……"
   },
   {
    "promptLang": "vi",
    "prompt": "Đêm qua lạnh đến mức tôi ngủ không được.",
    "answer": "昨天晚上冻得我睡不着觉。",
    "answerPy": "Zuótiān wǎnshang dòng de wǒ shuì bù zhe jué.",
    "note": "Bổ ngữ trạng thái V + 得 (HSK 3).",
    "pair": "冻得……"
   }
  ]
 },
 {
  "n": 6,
  "zh": "后悔",
  "py": "hòuhuǐ",
  "pos": "Động từ",
  "vn": "hối hận",
  "hv": "hậu hối",
  "em": "😣",
  "lesson": 1,
  "explain": [
   "Tiếc vì đã làm (hoặc đã không làm) một việc gì đó. Hai mẫu hay gặp: 后悔 + 自己 + V了… (hối hận vì đã …) / 后悔 + 没 + V (hối hận vì đã không …)."
  ],
  "usage": "很后悔 · 后悔自己… · 后悔没… · 后悔也来不及了.",
  "collo": [
   "很后悔",
   "后悔自己穿少了",
   "后悔没参加",
   "不后悔"
  ],
  "colloFull": [
   {
    "zh": "很后悔",
    "py": "Hěn hòuhuǐ",
    "vn": "rất hối hận"
   },
   {
    "zh": "后悔自己穿少了",
    "py": "Hòuhuǐ zìjǐ chuān shǎo le",
    "vn": "hối hận vì mình mặc ít"
   },
   {
    "zh": "后悔没参加",
    "py": "Hòuhuǐ méi cānjiā",
    "vn": "hối hận vì đã không tham gia"
   },
   {
    "zh": "不后悔",
    "py": "Bù hòuhuǐ",
    "vn": "không hối hận"
   }
  ],
  "patterns": [
   {
    "s": "后悔 + 没(有) + V",
    "m": "Hối hận vì đã KHÔNG làm"
   },
   {
    "s": "后悔 + (自己) + V + 了",
    "m": "Hối hận vì đã làm"
   }
  ],
  "ex_zh": "他一定后悔自己穿少了吧？",
  "ex_py": "Tā yídìng hòuhuǐ zìjǐ chuān shǎo le ba?",
  "ex_vn": "Chắc cậu ấy hối hận vì mình mặc ít quá nhỉ?",
  "exList": [
   {
    "zh": "他一定后悔自己穿少了吧？",
    "py": "Tā yídìng hòuhuǐ zìjǐ chuān shǎo le ba?",
    "vn": "Chắc cậu ấy hối hận vì mình mặc ít quá nhỉ?"
   },
   {
    "zh": "我从来不后悔来中国留学。",
    "py": "Wǒ cónglái bù hòuhuǐ lái Zhōngguó liúxué.",
    "vn": "Tôi chưa bao giờ hối hận vì đã sang Trung Quốc du học. (ôn 从来 – Bài 9 · điểm 4)"
   }
  ],
  "hanzi": [
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
   },
   {
    "c": "悔",
    "p": "huǐ",
    "type": "左右结构 · Trái-phải",
    "st": 10,
    "ord": "忄 (tâm) trái → 每 (mỗi) phải",
    "rad": "忄 (tâm – lòng)",
    "mean": "ân hận",
    "tip": "Bộ tâm 忄 (cảm xúc trong lòng) + 每(biểu âm) → cảm giác TIẾC NUỐI trong lòng, kết hợp 后(sau) thành 后悔 = HỐI HẬN (tiếc nuối về sau).",
    "cf": "诲 (huì – \"dạy bảo\", bộ 讠\")",
    "w": "后悔 / 悔改 / 后悔莫及"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Bây giờ hối hận cũng không kịp nữa rồi.",
    "answer": "现在后悔也来不及了。",
    "answerPy": "Xiànzài hòuhuǐ yě láibùjí le.",
    "note": "Ôn 来不及 (Bài 4 · điểm 4).",
    "pair": "来不及"
   },
   {
    "promptLang": "vi",
    "prompt": "Cô ấy rất hối hận vì đã không học hành chăm chỉ.",
    "answer": "她很后悔没有认真学习。",
    "answerPy": "Tā hěn hòuhuǐ méiyǒu rènzhēn xuéxí.",
    "note": "后悔 + 没有 + V.",
    "pair": "后悔没有……"
   }
  ]
 },
 {
  "n": 7,
  "zh": "就是",
  "py": "jiùshì",
  "pos": "Phó từ",
  "vn": "đúng thế, chính thế (tỏ ý tán thành)",
  "hv": "tựu thị",
  "em": "👍",
  "lesson": 1,
  "explain": [
   "Dùng một mình ở đầu câu đáp (thường thành 就是呢 / 就是啊 / 就是嘛) để tỏ ý hoàn toàn đồng ý với người nói trước: “đúng thế, chuẩn luôn”. Khác 「……就是了」 ở Bài 2 (đặt cuối câu = cứ … là được)."
  ],
  "usage": "就是呢 · 就是啊 · 就是嘛 · 就是，……",
  "collo": [
   "就是呢",
   "就是啊",
   "就是嘛",
   "就是，就是"
  ],
  "colloFull": [
   {
    "zh": "就是呢",
    "py": "Jiùshì ne",
    "vn": "đúng thế đấy"
   },
   {
    "zh": "就是啊",
    "py": "Jiùshì a",
    "vn": "đúng vậy"
   },
   {
    "zh": "就是嘛",
    "py": "Jiùshì ma",
    "vn": "chuẩn luôn"
   },
   {
    "zh": "就是，就是",
    "py": "Jiùshì, jiùshì",
    "vn": "đúng, đúng"
   }
  ],
  "patterns": [
   {
    "s": "A nêu ý kiến → B：就是（呢 / 啊），+ ý bổ sung",
    "m": "Tán thành rồi nói thêm"
   },
   {
    "s": "就是 (đầu câu, tán thành) ≠ ……就是了 (cuối câu, Bài 2)",
    "m": "Phân biệt vị trí"
   }
  ],
  "ex_zh": "就是呢，冬天北方和南方的温度差别还是很大的。",
  "ex_py": "Jiùshì ne, dōngtiān běifāng hé nánfāng de wēndù chābié háishì hěn dà de.",
  "ex_vn": "Đúng thế, mùa đông nhiệt độ miền Bắc và miền Nam chênh lệch vẫn rất lớn.",
  "exList": [
   {
    "zh": "就是呢，冬天北方和南方的温度差别还是很大的。",
    "py": "Jiùshì ne, dōngtiān běifāng hé nánfāng de wēndù chābié háishì hěn dà de.",
    "vn": "Đúng thế, mùa đông nhiệt độ miền Bắc và miền Nam chênh lệch vẫn rất lớn."
   },
   {
    "zh": "——今天太冷了！——就是啊，我都不想出门了。",
    "py": "— Jīntiān tài lěng le! — Jiùshì a, wǒ dōu bù xiǎng chūmén le.",
    "vn": "— Hôm nay lạnh quá! — Đúng thế, tớ chẳng muốn ra khỏi nhà nữa."
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
    "prompt": "— Học tiếng Trung không thể không học chữ Hán. — Đúng thế, nếu không thì đọc sách không hiểu.",
    "answer": "——学中文不能不学汉字。——就是，否则看不懂书。",
    "answerPy": "— Xué Zhōngwén bù néng bù xué hànzì. — Jiùshì, fǒuzé kàn bù dǒng shū.",
    "note": "Ôn 否则 (Bài 8 · điểm 2).",
    "pair": "就是，……"
   },
   {
    "promptLang": "vi",
    "prompt": "— Món này cay quá! — Đúng vậy, tớ ăn không nổi.",
    "answer": "——这个菜太辣了！——就是啊，我吃不了。",
    "answerPy": "— Zhège cài tài là le! — Jiùshì a, wǒ chī bù liǎo.",
    "note": "Ôn V不了 (Bài 4 · điểm 1).",
    "pair": "就是啊，……"
   }
  ]
 },
 {
  "n": 8,
  "zh": "温度",
  "py": "wēndù",
  "pos": "Danh từ",
  "vn": "nhiệt độ",
  "hv": "ôn độ",
  "em": "🌡️",
  "lesson": 1,
  "explain": [
   "Độ nóng lạnh nói chung (không khí, nước, phòng, cơ thể…). Phạm vi rộng hơn 气温 (chỉ nhiệt độ không khí)."
  ],
  "usage": "温度很高 / 很低 · 温度差别 · 水的温度 · 房间的温度.",
  "collo": [
   "温度很高",
   "温度差别",
   "水的温度",
   "房间的温度"
  ],
  "colloFull": [
   {
    "zh": "温度很高",
    "py": "Wēndù hěn gāo",
    "vn": "nhiệt độ rất cao"
   },
   {
    "zh": "温度差别",
    "py": "Wēndù chābié",
    "vn": "chênh lệch nhiệt độ"
   },
   {
    "zh": "水的温度",
    "py": "Shuǐ de wēndù",
    "vn": "nhiệt độ của nước"
   },
   {
    "zh": "房间的温度",
    "py": "Fángjiān de wēndù",
    "vn": "nhiệt độ trong phòng"
   }
  ],
  "patterns": [
   {
    "s": "温度 (mọi thứ) ⊃ 气温 (không khí) / 体温 (cơ thể)",
    "m": "Phân biệt ba từ “nhiệt độ”"
   },
   {
    "s": "N + 的温度 + 高 / 低",
    "m": "Nhiệt độ của … cao / thấp"
   }
  ],
  "ex_zh": "就是呢，冬天北方和南方的温度差别还是很大的。",
  "ex_py": "Jiùshì ne, dōngtiān běifāng hé nánfāng de wēndù chābié háishì hěn dà de.",
  "ex_vn": "Đúng thế, mùa đông nhiệt độ miền Bắc và miền Nam chênh lệch vẫn rất lớn.",
  "exList": [
   {
    "zh": "就是呢，冬天北方和南方的温度差别还是很大的。",
    "py": "Jiùshì ne, dōngtiān běifāng hé nánfāng de wēndù chābié háishì hěn dà de.",
    "vn": "Đúng thế, mùa đông nhiệt độ miền Bắc và miền Nam chênh lệch vẫn rất lớn."
   },
   {
    "zh": "这里早晚的温度差别很大，你得多带一件衣服。",
    "py": "Zhèli zǎo wǎn de wēndù chābié hěn dà, nǐ děi duō dài yí jiàn yīfu.",
    "vn": "Ở đây nhiệt độ sáng và tối chênh nhau nhiều, cậu phải mang thêm một cái áo."
   }
  ],
  "hanzi": [
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
    "prompt": "Nhiệt độ trong phòng vừa ấm áp vừa dễ chịu.",
    "answer": "房间里的温度既暖和又舒服。",
    "answerPy": "Fángjiān lǐ de wēndù jì nuǎnhuo yòu shūfu.",
    "note": "Ôn 既……又…… (Bài 4 · điểm 3).",
    "pair": "既……又……"
   },
   {
    "promptLang": "vi",
    "prompt": "Lấy Quảng Châu mà nói, nhiệt độ mùa đông thường không thấp lắm.",
    "answer": "拿广州来说，冬天的温度一般不太低。",
    "answerPy": "Ná Guǎngzhōu láishuō, dōngtiān de wēndù yìbān bú tài dī.",
    "note": "Ôn 拿……来说 (Bài 7 · điểm 3).",
    "pair": "拿……来说"
   }
  ]
 },
 {
  "n": 9,
  "zh": "差别",
  "py": "chābié",
  "pos": "Danh từ",
  "vn": "sự khác biệt, chênh lệch",
  "hv": "sai biệt",
  "em": "↔️",
  "lesson": 1,
  "explain": [
   "Chỗ khác nhau giữa hai (hay nhiều) sự vật. Bẫy Hán Việt: “sai biệt” không có nghĩa là “sai”, mà là “khác biệt”. 差 ở đây đọc chā (không phải chà = kém)."
  ],
  "usage": "A和B的差别 · 差别很大 / 不大 · 有 / 没有差别.",
  "collo": [
   "差别很大",
   "差别不大",
   "温度差别",
   "没有什么差别"
  ],
  "colloFull": [
   {
    "zh": "差别很大",
    "py": "Chābié hěn dà",
    "vn": "khác biệt rất lớn"
   },
   {
    "zh": "差别不大",
    "py": "Chābié bú dà",
    "vn": "khác nhau không nhiều"
   },
   {
    "zh": "温度差别",
    "py": "Wēndù chābié",
    "vn": "chênh lệch nhiệt độ"
   },
   {
    "zh": "没有什么差别",
    "py": "Méiyǒu shénme chābié",
    "vn": "chẳng khác gì mấy"
   }
  ],
  "patterns": [
   {
    "s": "A 和 / 跟 B (的) 差别 + 很大 / 不大",
    "m": "So sánh mức độ khác nhau"
   },
   {
    "s": "A 跟 B 有 / 没有差别",
    "m": "Có / không khác nhau"
   }
  ],
  "ex_zh": "就是呢，冬天北方和南方的温度差别还是很大的。",
  "ex_py": "Jiùshì ne, dōngtiān běifāng hé nánfāng de wēndù chābié háishì hěn dà de.",
  "ex_vn": "Đúng thế, mùa đông nhiệt độ miền Bắc và miền Nam chênh lệch vẫn rất lớn.",
  "exList": [
   {
    "zh": "就是呢，冬天北方和南方的温度差别还是很大的。",
    "py": "Jiùshì ne, dōngtiān běifāng hé nánfāng de wēndù chābié háishì hěn dà de.",
    "vn": "Đúng thế, mùa đông nhiệt độ miền Bắc và miền Nam chênh lệch vẫn rất lớn."
   },
   {
    "zh": "这两个手机看起来差不多，其实价格差别很大。",
    "py": "Zhè liǎng gè shǒujī kàn qǐlái chàbùduō, qíshí jiàgé chābié hěn dà.",
    "vn": "Hai chiếc điện thoại này trông na ná nhau, thật ra giá chênh lệch rất nhiều."
   }
  ],
  "hanzi": [
   {
    "c": "差",
    "p": "chā",
    "type": "上下结构 · Trên-dưới",
    "st": 9,
    "ord": "𦍌 trên → 工 dưới",
    "rad": "工 (công)",
    "mean": "sai phái",
    "tip": "Chữ 差 đọc chāi = SAI PHÁI (cử đi làm việc), 出差 = ĐI CÔNG TÁC. Chú ý cùng chữ đọc chà = KÉM (差不多) và chā = SAI SỐ.",
    "cf": "着 (zhe – trợ từ)",
    "w": "出差 / 差不多 / 差别"
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
    "prompt": "Khí hậu ở đây khác biệt rất lớn so với Hà Nội.",
    "answer": "这里的气候跟河内的差别很大。",
    "answerPy": "Zhèli de qìhòu gēn hé nèi de chābié hěn dà.",
    "note": "A 跟 B 的差别很大.",
    "pair": "A跟B的差别"
   },
   {
    "promptLang": "vi",
    "prompt": "Đã chẳng khác gì mấy thì mua cái rẻ hơn đi.",
    "answer": "既然没有什么差别，就买便宜的吧。",
    "answerPy": "Jìrán méiyǒu shénme chābié, jiù mǎi piányi de ba.",
    "note": "Ôn 既然……就…… (Bài 7 · điểm 2).",
    "pair": "既然……就……"
   }
  ]
 },
 {
  "n": 10,
  "zh": "厚",
  "py": "hòu",
  "pos": "Tính từ",
  "vn": "dày",
  "hv": "hậu",
  "em": "🧥",
  "lesson": 1,
  "explain": [
   "Dày (quần áo, chăn, sách, tuyết…). Trái nghĩa: 薄 báo (mỏng). Đừng nhầm với 后 hòu (sau) — cùng âm khác chữ."
  ],
  "usage": "厚衣服 · 厚一点儿的 + N · 太厚了 · 雪很厚.",
  "collo": [
   "厚衣服",
   "厚一点儿",
   "很厚的书",
   "雪很厚"
  ],
  "colloFull": [
   {
    "zh": "厚衣服",
    "py": "Hòu yīfu",
    "vn": "quần áo dày"
   },
   {
    "zh": "厚一点儿",
    "py": "Hòu yìdiǎnr",
    "vn": "dày hơn một chút"
   },
   {
    "zh": "很厚的书",
    "py": "Hěn hòu de shū",
    "vn": "quyển sách rất dày"
   },
   {
    "zh": "雪很厚",
    "py": "Xuě hěn hòu",
    "vn": "tuyết rất dày"
   }
  ],
  "patterns": [
   {
    "s": "厚 ↔ 薄 (báo)",
    "m": "dày ↔ mỏng"
   },
   {
    "s": "Adj + 一点儿的 + N",
    "m": "厚一点儿的衣服 = áo dày hơn một chút"
   }
  ],
  "ex_zh": "更重要的是，说什么也得穿上厚一点儿的衣服。",
  "ex_py": "Gèng zhòngyào de shì, shuō shénme yě děi chuān shàng hòu yìdiǎnr de yīfu.",
  "ex_vn": "Quan trọng hơn là, dù thế nào cũng phải mặc quần áo dày một chút.",
  "exList": [
   {
    "zh": "更重要的是，说什么也得穿上厚一点儿的衣服。",
    "py": "Gèng zhòngyào de shì, shuō shénme yě děi chuān shàng hòu yìdiǎnr de yīfu.",
    "vn": "Quan trọng hơn là, dù thế nào cũng phải mặc quần áo dày một chút."
   },
   {
    "zh": "这本书太厚了，一个星期都看不完。",
    "py": "Zhè běn shū tài hòu le, yí gè xīngqī dōu kàn bù wán.",
    "vn": "Quyển sách này dày quá, một tuần cũng đọc không hết."
   }
  ],
  "hanzi": [
   {
    "c": "厚",
    "p": "hòu",
    "type": "半包围结构 · Bán bao vây",
    "st": 9,
    "ord": "厂 bao → 日+子 trong",
    "rad": "厂 (hán – vách núi)",
    "mean": "dày",
    "tip": "Vách núi 厂 chồng nhiều lớp đất → DÀY, mở rộng thành SÂU NẶNG (tình cảm).",
    "cf": "原 (yuán – \"nguyên\", cũng bộ 厂)",
    "w": "厚 / 深厚 / 厚道"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Đã lạnh như vậy thì cậu mặc áo dày một chút đi.",
    "answer": "既然这么冷，你就穿厚一点儿的衣服吧。",
    "answerPy": "Jìrán zhème lěng, nǐ jiù chuān hòu yìdiǎnr de yīfu ba.",
    "note": "Ôn 既然……就…… (Bài 7 · điểm 2).",
    "pair": "既然……就……"
   },
   {
    "promptLang": "vi",
    "prompt": "Tuyết dày đến mức xe đạp cũng không đi được.",
    "answer": "雪厚得连自行车都骑不了。",
    "answerPy": "Xuě hòu de lián zìxíngchē dōu qí bù liǎo.",
    "note": "Ôn V不了 (Bài 4 · điểm 1) + 连……都…….",
    "pair": "V不了"
   }
  ]
 },
 {
  "n": 11,
  "zh": "广州",
  "py": "Guǎngzhōu",
  "pos": "Danh từ riêng",
  "vn": "Quảng Châu (thành phố lớn ở miền Nam Trung Quốc)",
  "hv": "Quảng Châu",
  "em": "🌺",
  "lesson": 1,
  "explain": [
   "Thủ phủ tỉnh Quảng Đông, miền Nam Trung Quốc; khí hậu ấm, bốn mùa hoa nở nên còn gọi là “花城” (thành phố hoa)."
  ],
  "usage": "去广州 · 广州人 · 广州方言 / 广州话.",
  "collo": [
   "去广州",
   "广州人",
   "广州方言",
   "花城广州"
  ],
  "colloFull": [
   {
    "zh": "去广州",
    "py": "Qù Guǎngzhōu",
    "vn": "đi Quảng Châu"
   },
   {
    "zh": "广州人",
    "py": "Guǎngzhōu rén",
    "vn": "người Quảng Châu"
   },
   {
    "zh": "广州方言",
    "py": "Guǎngzhōu fāngyán",
    "vn": "tiếng Quảng Châu"
   },
   {
    "zh": "花城广州",
    "py": "Huā chéng Guǎngzhōu",
    "vn": "Quảng Châu – thành phố hoa"
   }
  ],
  "patterns": [
   {
    "s": "广州 = 花城",
    "m": "Biệt danh: thành phố hoa"
   }
  ],
  "ex_zh": "你看，这个小伙子从广州去哈尔滨出差。",
  "ex_py": "Nǐ kàn, zhège xiǎohuǒzi cóng Guǎngzhōu qù Hā'ěrbīn chūchāi.",
  "ex_vn": "Anh xem, cậu thanh niên này từ Quảng Châu đi công tác Cáp Nhĩ Tân.",
  "exList": [
   {
    "zh": "你看，这个小伙子从广州去哈尔滨出差。",
    "py": "Nǐ kàn, zhège xiǎohuǒzi cóng Guǎngzhōu qù Hā'ěrbīn chūchāi.",
    "vn": "Anh xem, cậu thanh niên này từ Quảng Châu đi công tác Cáp Nhĩ Tân."
   },
   {
    "zh": "我打算寒假去广州，那里冬天比较暖和。",
    "py": "Wǒ dǎsuàn hánjià qù Guǎngzhōu, nàli dōngtiān bǐjiào nuǎnhuo.",
    "vn": "Tôi định nghỉ đông đi Quảng Châu, ở đó mùa đông khá ấm."
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
    "prompt": "Quảng Châu cách Cáp Nhĩ Tân hơn ba nghìn ki-lô-mét.",
    "answer": "广州离哈尔滨三千多公里。",
    "answerPy": "Guǎngzhōu lí Hā'ěrbīn sān qiān duō gōnglǐ.",
    "note": "Câu 离 chỉ khoảng cách (HSK 2).",
    "pair": "A离B + khoảng cách"
   },
   {
    "promptLang": "vi",
    "prompt": "Người Quảng Châu tuy nói tiếng Quảng nhưng cũng biết nói tiếng phổ thông.",
    "answer": "尽管广州人说广州话，但是他们也会说普通话。",
    "answerPy": "Jǐnguǎn Guǎngzhōu rén shuō Guǎngzhōu huà, dànshì tāmen yě huì shuō pǔtōnghuà.",
    "note": "Ôn 尽管……但是…… (Bài 9 · điểm 2).",
    "pair": "尽管……但是……"
   }
  ]
 },
 {
  "n": 12,
  "zh": "哈尔滨",
  "py": "Hā'ěrbīn",
  "pos": "Danh từ riêng",
  "vn": "Cáp Nhĩ Tân (thành phố ở vùng Đông Bắc Trung Quốc)",
  "hv": "Cáp Nhĩ Tân",
  "em": "❄️",
  "lesson": 1,
  "explain": [
   "Thủ phủ tỉnh Hắc Long Giang, vùng Đông Bắc; mùa đông dài, rất lạnh, nhiều băng tuyết nên còn gọi là “冰城” (thành phố băng). Nổi tiếng với lễ hội băng tuyết."
  ],
  "usage": "去哈尔滨 · 哈尔滨的冬天 · 哈尔滨方言.",
  "collo": [
   "去哈尔滨",
   "哈尔滨的冬天",
   "冰城哈尔滨",
   "哈尔滨方言"
  ],
  "colloFull": [
   {
    "zh": "去哈尔滨",
    "py": "Qù Hā'ěrbīn",
    "vn": "đi Cáp Nhĩ Tân"
   },
   {
    "zh": "哈尔滨的冬天",
    "py": "Hā'ěrbīn de dōngtiān",
    "vn": "mùa đông Cáp Nhĩ Tân"
   },
   {
    "zh": "冰城哈尔滨",
    "py": "Bīng chéng Hā'ěrbīn",
    "vn": "Cáp Nhĩ Tân – thành phố băng"
   },
   {
    "zh": "哈尔滨方言",
    "py": "Hā'ěrbīn fāngyán",
    "vn": "tiếng Cáp Nhĩ Tân"
   }
  ],
  "patterns": [
   {
    "s": "哈尔滨 = 冰城",
    "m": "Biệt danh: thành phố băng"
   }
  ],
  "ex_zh": "没想到哈尔滨的气温降到了零下二十几度，把他冻坏了。",
  "ex_py": "Méi xiǎng dào Hā'ěrbīn de qìwēn jiàng dào le líng xià èr shí jǐ dù, bǎ tā dòng huài le.",
  "ex_vn": "Không ngờ nhiệt độ ở Cáp Nhĩ Tân xuống tới âm hai mươi mấy độ, làm cậu ấy rét cóng.",
  "exList": [
   {
    "zh": "没想到哈尔滨的气温降到了零下二十几度，把他冻坏了。",
    "py": "Méi xiǎng dào Hā'ěrbīn de qìwēn jiàng dào le líng xià èr shí jǐ dù, bǎ tā dòng huài le.",
    "vn": "Không ngờ nhiệt độ ở Cáp Nhĩ Tân xuống tới âm hai mươi mấy độ, làm cậu ấy rét cóng."
   },
   {
    "zh": "哈尔滨的冬天又长又冷，不过雪景特别美。",
    "py": "Hā'ěrbīn de dōngtiān yòu cháng yòu lěng, búguò xuě jǐng tèbié měi.",
    "vn": "Mùa đông Cáp Nhĩ Tân vừa dài vừa lạnh, có điều cảnh tuyết cực đẹp. (ôn 不过 – Bài 2 · điểm 2)"
   }
  ],
  "hanzi": [
   {
    "c": "哈",
    "p": "hā",
    "type": "形声字 · Chữ hình thanh",
    "st": 9,
    "ord": "口 → 合",
    "rad": "口 (khẩu – miệng)",
    "mean": "tiếng cười ha ha",
    "tip": "口 (miệng) + 合 (chỉ âm): âm thanh phát ra từ miệng → tiếng cười. Từ tượng thanh thường có bộ 口.",
    "cf": "给 gěi — bên phải cũng là 合 nhưng bên trái là 纟",
    "w": "哈哈"
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
   },
   {
    "c": "滨",
    "p": "bīn",
    "type": "形声字 · Chữ hình thanh",
    "st": 13,
    "ord": "氵 → 宾",
    "rad": "氵 (thủy – nước)",
    "mean": "bờ nước, ven (sông, biển)",
    "tip": "Nước (氵) + 宾 bīn (chỉ âm): chỗ sát mép nước → bờ, ven sông biển — 哈尔滨, 海滨 (bờ biển).",
    "cf": "宾 bīn (khách) — không có 氵; 兵 bīng (lính) — không có 宀",
    "w": "哈尔滨 / 海滨 / 滨江"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Mùa đông ở Cáp Nhĩ Tân thường bắt đầu từ tháng 10.",
    "answer": "哈尔滨的冬天一般从十月开始。",
    "answerPy": "Hā'ěrbīn de dōngtiān yìbān cóng shí yuè kāishǐ.",
    "note": "从……开始 (HSK 3).",
    "pair": "从……开始"
   },
   {
    "promptLang": "vi",
    "prompt": "Bất kể lạnh thế nào, tôi cũng muốn đi Cáp Nhĩ Tân ngắm tuyết.",
    "answer": "不管多冷，我都要去哈尔滨看雪。",
    "answerPy": "Bùguǎn duō lěng, wǒ dōu yào qù Hā'ěrbīn kàn xuě.",
    "note": "Ôn 不管……都…… (Bài 8 · điểm 1).",
    "pair": "不管……都……"
   }
  ]
 },
 {
  "n": 13,
  "zh": "寒假",
  "py": "hánjià",
  "pos": "Danh từ",
  "vn": "kỳ nghỉ đông",
  "hv": "hàn giả",
  "em": "⛄",
  "lesson": 2,
  "explain": [
   "Kỳ nghỉ mùa đông của trường học (khoảng tháng 1–2, thường trùng Tết). Đối: 暑假 shǔjià (nghỉ hè). Bẫy Hán Việt: 假 ở đây đọc jià = kỳ nghỉ, không phải “giả” (giả dối, đọc jiǎ)."
  ],
  "usage": "放寒假 · 寒假作业 · 寒假计划 · 寒假旅行.",
  "collo": [
   "放寒假",
   "寒假作业",
   "寒假计划",
   "寒假旅行"
  ],
  "colloFull": [
   {
    "zh": "放寒假",
    "py": "Fàng hánjià",
    "vn": "được nghỉ đông"
   },
   {
    "zh": "寒假作业",
    "py": "Hánjià zuòyè",
    "vn": "bài tập nghỉ đông"
   },
   {
    "zh": "寒假计划",
    "py": "Hánjià jìhuà",
    "vn": "kế hoạch nghỉ đông"
   },
   {
    "zh": "寒假旅行",
    "py": "Hánjià lǚxíng",
    "vn": "du lịch kỳ nghỉ đông"
   }
  ],
  "patterns": [
   {
    "s": "放 + 寒假 / 暑假",
    "m": "Bắt đầu kỳ nghỉ đông / hè"
   },
   {
    "s": "寒假 ↔ 暑假",
    "m": "nghỉ đông ↔ nghỉ hè"
   }
  ],
  "ex_zh": "寒假你们打算做什么呢？",
  "ex_py": "Hánjià nǐmen dǎsuàn zuò shénme ne?",
  "ex_vn": "Nghỉ đông các cậu định làm gì thế?",
  "exList": [
   {
    "zh": "寒假你们打算做什么呢？",
    "py": "Hánjià nǐmen dǎsuàn zuò shénme ne?",
    "vn": "Nghỉ đông các cậu định làm gì thế?"
   },
   {
    "zh": "放寒假以后，我打算回老家过年。",
    "py": "Fàng hánjià yǐhòu, wǒ dǎsuàn huí lǎo jiā guònián.",
    "vn": "Sau khi nghỉ đông, tôi định về quê ăn Tết."
   }
  ],
  "hanzi": [
   {
    "c": "寒",
    "p": "hán",
    "type": "上下结构 · Trên-dưới",
    "st": 12,
    "ord": "宀 → 井 → 一 → 冫",
    "rad": "宀 (miên)",
    "mean": "lạnh",
    "tip": "Mái nhà 宀 + người nằm trong cỏ + băng 冫 bên dưới → LẠNH (hàn). 寒假 = kỳ nghỉ lạnh = nghỉ đông.",
    "cf": "塞 (sāi – nhét)",
    "w": "寒假 / 寒冷"
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
    "prompt": "Kỳ nghỉ đông ít nhất có ba tuần.",
    "answer": "寒假至少有三个星期。",
    "answerPy": "Hánjià zhìshǎo yǒu sān gè xīngqī.",
    "note": "Ôn 至少 (Bài 5 · điểm 1).",
    "pair": "至少"
   },
   {
    "promptLang": "vi",
    "prompt": "Nghỉ đông này tôi vừa muốn đi du lịch vừa muốn về nhà ăn Tết.",
    "answer": "这个寒假我既想去旅游，又想回家过年。",
    "answerPy": "Zhège hánjià wǒ jì xiǎng qù lǚyóu, yòu xiǎng huí jiā guònián.",
    "note": "Ôn 既……又…… (Bài 4 · điểm 3).",
    "pair": "既……又……"
   }
  ]
 },
 {
  "n": 14,
  "zh": "暖和",
  "py": "nuǎnhuo",
  "pos": "Tính từ / Động từ",
  "vn": "ấm áp; sưởi cho ấm, làm ấm",
  "hv": "noãn hòa",
  "em": "☀️",
  "lesson": 2,
  "explain": [
   "Tính từ: (thời tiết, phòng, áo) ấm áp, dễ chịu.",
   "Động từ: làm cho ấm lên, thường lặp ABAB: 进来暖和暖和 (vào sưởi cho ấm một chút). Chữ 和 đọc nhẹ huo."
  ],
  "usage": "天气暖和 · 比较暖和 · 暖和起来 · 暖和暖和.",
  "collo": [
   "天气暖和",
   "暖和起来",
   "暖和暖和",
   "又暖和又舒服"
  ],
  "colloFull": [
   {
    "zh": "天气暖和",
    "py": "Tiānqì nuǎnhuo",
    "vn": "thời tiết ấm áp"
   },
   {
    "zh": "暖和起来",
    "py": "Nuǎnhuo qǐlái",
    "vn": "ấm dần lên"
   },
   {
    "zh": "暖和暖和",
    "py": "Nuǎnhuo nuǎnhuo",
    "vn": "sưởi cho ấm"
   },
   {
    "zh": "又暖和又舒服",
    "py": "Yòu nuǎnhuo yòu shūfu",
    "vn": "vừa ấm vừa dễ chịu"
   }
  ],
  "patterns": [
   {
    "s": "N + 很 / 比较 + 暖和",
    "m": "Tính từ"
   },
   {
    "s": "暖和暖和 (ABAB)",
    "m": "Động từ lặp: làm ấm một chút"
   }
  ],
  "ex_zh": "那时候广州暖和，但哈尔滨特别冷。",
  "ex_py": "Nà shíhou Guǎngzhōu nuǎnhuo, dàn Hā'ěrbīn tèbié lěng.",
  "ex_vn": "Lúc đó Quảng Châu ấm áp, nhưng Cáp Nhĩ Tân thì cực lạnh.",
  "exList": [
   {
    "zh": "那时候广州暖和，但哈尔滨特别冷。",
    "py": "Nà shíhou Guǎngzhōu nuǎnhuo, dàn Hā'ěrbīn tèbié lěng.",
    "vn": "Lúc đó Quảng Châu ấm áp, nhưng Cáp Nhĩ Tân thì cực lạnh."
   },
   {
    "zh": "外面太冷了，快进来暖和暖和吧。",
    "py": "Wàimian tài lěng le, kuài jìnlái nuǎnhuo nuǎnhuo ba.",
    "vn": "Ngoài trời lạnh quá, mau vào trong sưởi cho ấm đi."
   }
  ],
  "hanzi": [
   {
    "c": "暖",
    "p": "nuǎn",
    "type": "左右结构 · Trái-phải",
    "st": 13,
    "ord": "日 trái → 爰 phải",
    "rad": "日 (nhật)",
    "mean": "ấm",
    "tip": "Mặt trời 日 + 爰 → có nắng → ẤM. Phân biệt với 缓 (huǎn – chậm, bộ 纟).",
    "cf": "缓 (huǎn – chậm)",
    "w": "暖 / 暖和 / 变暖 / 暖气"
   },
   {
    "c": "和",
    "p": "huo",
    "type": "左右结构 · Trái-phải",
    "st": 8,
    "ord": "禾(hoà) trái → 口(khẩu) phải",
    "rad": "口 (khẩu – miệng)",
    "mean": "và, hoà hợp",
    "tip": "Bộ Lúa 禾 (lương thực) + 口 (miệng, người ăn) — có LÚA để mọi MIỆNG cùng no đủ, sống HOÀ HỢP; dùng để nối các thứ với nhau = VÀ.",
    "cf": "合 (hé – \"hợp lại\", đồng âm nhưng khác chữ, không có bộ 禾\")",
    "w": "和我 / 你和他 / 和平"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Mùa xuân đến rồi, thời tiết dần dần ấm lên.",
    "answer": "春天来了，天气慢慢暖和起来了。",
    "answerPy": "Chūntiān lái le, tiānqì màn màn nuǎnhuo qǐlái le.",
    "note": "Bổ ngữ xu hướng 起来 = bắt đầu (HSK 3).",
    "pair": "Adj + 起来"
   },
   {
    "promptLang": "vi",
    "prompt": "Cùng với thời tiết ấm lên, người ra công viên ngày càng nhiều.",
    "answer": "随着天气暖和起来，去公园的人越来越多了。",
    "answerPy": "Suízhe tiānqì nuǎnhuo qǐlái, qù gōngyuán de rén yuèláiyuè duō le.",
    "note": "Ôn 随着 (Bài 1 · điểm 3).",
    "pair": "随着……"
   }
  ]
 },
 {
  "n": 15,
  "zh": "低于",
  "py": "dīyú",
  "pos": "Động từ",
  "vn": "thấp hơn, dưới (mức)",
  "hv": "đê vu",
  "em": "📉",
  "lesson": 2,
  "explain": [
   "Thấp hơn một con số / một mức nào đó; văn viết, hay đi với số liệu. 于 = “so với”. Đối: 高于 (cao hơn). 低 đã học ở Bài 6."
  ],
  "usage": "低于 + số liệu / mức · A 低于 B.",
  "collo": [
   "低于零度",
   "低于去年",
   "低于标准",
   "高于 ↔ 低于"
  ],
  "colloFull": [
   {
    "zh": "低于零度",
    "py": "Dīyú líng dù",
    "vn": "dưới 0 độ"
   },
   {
    "zh": "低于去年",
    "py": "Dīyú qùnián",
    "vn": "thấp hơn năm ngoái"
   },
   {
    "zh": "低于标准",
    "py": "Dīyú biāozhǔn",
    "vn": "thấp hơn tiêu chuẩn"
   },
   {
    "zh": "高于 ↔ 低于",
    "py": "Gāo yú ↔ dīyú",
    "vn": "cao hơn ↔ thấp hơn"
   }
  ],
  "patterns": [
   {
    "s": "A + 低于 + B",
    "m": "= A 比 B 低 (văn viết)"
   },
   {
    "s": "低于 / 高于 + số liệu",
    "m": "Dùng với con số, mức độ"
   }
  ],
  "ex_zh": "气温一般都低于零下十摄氏度甚至零下二十摄氏度。",
  "ex_py": "Qìwēn yìbān dōu dīyú líng xià shí shèshìdù shènzhì líng xià èr shí shèshìdù.",
  "ex_vn": "Nhiệt độ thường đều thấp hơn âm 10 độ C, thậm chí âm 20 độ C.",
  "exList": [
   {
    "zh": "气温一般都低于零下十摄氏度甚至零下二十摄氏度。",
    "py": "Qìwēn yìbān dōu dīyú líng xià shí shèshìdù shènzhì líng xià èr shí shèshìdù.",
    "vn": "Nhiệt độ thường đều thấp hơn âm 10 độ C, thậm chí âm 20 độ C."
   },
   {
    "zh": "这次考试，我的成绩低于平时的水平。",
    "py": "Zhè cì kǎoshì, wǒ de chéngjì dīyú píngshí de shuǐpíng.",
    "vn": "Kỳ thi lần này, điểm của tôi thấp hơn trình độ thường ngày."
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
    "prompt": "Nhiệt độ ở đây mùa đông rất hiếm khi thấp hơn 10 độ.",
    "answer": "这里冬天的气温很少低于十度。",
    "answerPy": "Zhèli dōngtiān de qìwēn hěn shǎo dīyú shí dù.",
    "note": "低于 + số liệu.",
    "pair": "低于 + số"
   },
   {
    "promptLang": "vi",
    "prompt": "Nếu nhiệt độ thấp hơn 0 độ thì nước sẽ đóng băng.",
    "answer": "要是气温低于零度，水就会冻住。",
    "answerPy": "Yàoshi qìwēn dīyú líng dù, shuǐ jiù huì dòng zhù.",
    "note": "Ôn 要是……就…… (Bài 1 · điểm 2).",
    "pair": "要是……就……"
   }
  ]
 },
 {
  "n": 16,
  "zh": "摄氏度",
  "py": "shèshìdù",
  "pos": "Lượng từ",
  "vn": "độ C (độ bách phân)",
  "hv": "nhiếp thị độ",
  "em": "🌡️",
  "lesson": 2,
  "explain": [
   "Đơn vị nhiệt độ °C, cách nói trang trọng (tin tức, dự báo thời tiết); khẩu ngữ thường chỉ nói 度. 10℃ đọc là 十摄氏度."
  ],
  "usage": "số + 摄氏度 · 零下 + số + 摄氏度.",
  "collo": [
   "零下十摄氏度",
   "三十摄氏度",
   "二十几摄氏度",
   "零摄氏度"
  ],
  "colloFull": [
   {
    "zh": "零下十摄氏度",
    "py": "Líng xià shí shèshìdù",
    "vn": "âm 10 độ C"
   },
   {
    "zh": "三十摄氏度",
    "py": "Sān shí shèshìdù",
    "vn": "30 độ C"
   },
   {
    "zh": "二十几摄氏度",
    "py": "Èr shí jǐ shèshìdù",
    "vn": "hai mươi mấy độ C"
   },
   {
    "zh": "零摄氏度",
    "py": "Líng shèshìdù",
    "vn": "0 độ C"
   }
  ],
  "patterns": [
   {
    "s": "số + 摄氏度 (℃)",
    "m": "Văn viết, trang trọng; khẩu ngữ: số + 度"
   }
  ],
  "ex_zh": "气温一般都低于零下十摄氏度甚至零下二十摄氏度。",
  "ex_py": "Qìwēn yìbān dōu dīyú líng xià shí shèshìdù shènzhì líng xià èr shí shèshìdù.",
  "ex_vn": "Nhiệt độ thường đều thấp hơn âm 10 độ C, thậm chí âm 20 độ C.",
  "exList": [
   {
    "zh": "气温一般都低于零下十摄氏度甚至零下二十摄氏度。",
    "py": "Qìwēn yìbān dōu dīyú líng xià shí shèshìdù shènzhì líng xià èr shí shèshìdù.",
    "vn": "Nhiệt độ thường đều thấp hơn âm 10 độ C, thậm chí âm 20 độ C."
   },
   {
    "zh": "天气预报说，明天最高气温三十五摄氏度。",
    "py": "Tiānqì yù bào shuō, míngtiān zuì gāo qìwēn sān shí wǔ shèshìdù.",
    "vn": "Dự báo thời tiết nói ngày mai nhiệt độ cao nhất 35 độ C."
   }
  ],
  "hanzi": [
   {
    "c": "摄",
    "p": "shè",
    "type": "形声字 · Chữ hình thanh",
    "st": 13,
    "ord": "扌 → 聂",
    "rad": "扌 (thủ – tay)",
    "mean": "thu lấy, chụp (ảnh); 摄氏 = độ C",
    "tip": "Tay (扌) + 聂 niè (chỉ âm): đưa tay thu lấy → thu, chụp — 摄影 (chụp ảnh); trong 摄氏度 chỉ là phiên âm tên nhà khoa học Celsius.",
    "cf": "聂 niè — không có 扌; 慑 shè — bên trái là 忄",
    "w": "摄氏度 / 摄影 / 摄像"
   },
   {
    "c": "氏",
    "p": "shì",
    "type": "象形字 · Chữ tượng hình",
    "st": 4,
    "ord": "丿 → 𠃊 → 一 → 乚",
    "rad": "氏 (thị – họ)",
    "mean": "họ (dòng họ); dùng trong tên riêng phiên âm",
    "tip": "Hình rễ cây nhô lên mặt đất → gốc rễ của một dòng họ → họ — 姓氏; 摄氏度 = độ của ông “Nhiếp thị” (Celsius).",
    "cf": "民 mín (dân) — trên có thêm 𠃍; 低 dī (thấp) — 亻 + 氐 có chấm dưới",
    "w": "摄氏度 / 姓氏 / 华氏"
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
    "prompt": "Hôm nay cao nhất 35 độ C, có nơi thậm chí lên tới 40 độ C.",
    "answer": "今天最高气温三十五摄氏度，有的地方甚至达到了四十摄氏度。",
    "answerPy": "Jīntiān zuì gāo qìwēn sān shí wǔ shèshìdù, yǒude dìfang shènzhì dádào le sì shí shèshìdù.",
    "note": "Ôn 甚至 (Bài 3 · điểm 3) + 达到 (từ Bài 5).",
    "pair": "甚至"
   },
   {
    "promptLang": "vi",
    "prompt": "Nhiệt độ Cáp Nhĩ Tân thấp hơn Quảng Châu ba mươi mấy độ C.",
    "answer": "哈尔滨的气温比广州低三十几摄氏度。",
    "answerPy": "Hā'ěrbīn de qìwēn bǐ Guǎngzhōu dī sān shí jǐ shèshìdù.",
    "note": "So sánh 比 + chênh lệch số lượng (HSK 3).",
    "pair": "A比B + Adj + số lượng"
   }
  ]
 },
 {
  "n": 17,
  "zh": "受不了",
  "py": "shòubuliǎo",
  "pos": "Động từ",
  "vn": "không chịu nổi",
  "hv": "thụ bất liễu",
  "em": "😫",
  "lesson": 2,
  "explain": [
   "Không chịu đựng được (lạnh, nóng, đau, tính tình ai…). Khẳng định: 受得了 (chịu được). Chính là dạng V不了 / V得了 đã học ở Bài 4; 了 đọc liǎo."
  ],
  "usage": "受不了 · 受得了 · Adj + 得 + 受不了 · 实在受不了.",
  "collo": [
   "冷得受不了",
   "实在受不了",
   "受得了",
   "受不了这么冷的天气"
  ],
  "colloFull": [
   {
    "zh": "冷得受不了",
    "py": "Lěng de shòubuliǎo",
    "vn": "lạnh không chịu nổi"
   },
   {
    "zh": "实在受不了",
    "py": "Shízai shòubuliǎo",
    "vn": "thật sự chịu không nổi"
   },
   {
    "zh": "受得了",
    "py": "Shòu de liǎo",
    "vn": "chịu được"
   },
   {
    "zh": "受不了这么冷的天气",
    "py": "Shòubuliǎo zhème lěng de tiānqì",
    "vn": "không chịu nổi thời tiết lạnh như thế"
   }
  ],
  "patterns": [
   {
    "s": "Adj + 得 + 受不了",
    "m": "… đến mức không chịu nổi"
   },
   {
    "s": "受得了 ↔ 受不了",
    "m": "Ôn V得了 / V不了 (Bài 4 · điểm 1)"
   }
  ],
  "ex_zh": "这么低的温度你受不了吧？",
  "ex_py": "Zhème dī de wēndù nǐ shòubuliǎo ba?",
  "ex_vn": "Nhiệt độ thấp thế này chắc cậu chịu không nổi đâu nhỉ?",
  "exList": [
   {
    "zh": "这么低的温度你受不了吧？",
    "py": "Zhème dī de wēndù nǐ shòubuliǎo ba?",
    "vn": "Nhiệt độ thấp thế này chắc cậu chịu không nổi đâu nhỉ?"
   },
   {
    "zh": "这里夏天太热了，我实在受不了。",
    "py": "Zhèli xiàtiān tài rè le, wǒ shízai shòubuliǎo.",
    "vn": "Mùa hè ở đây nóng quá, tôi thật sự chịu không nổi."
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
    "c": "了",
    "p": "liǎo",
    "type": "独体字 · Chữ đơn",
    "st": 2,
    "ord": "乛(ngang gập) → 亅(sổ móc)",
    "rad": "乙 (ất – nét cong, quy ước)",
    "mean": "trợ từ chỉ sự hoàn thành/thay đổi",
    "tip": "Hình dáng đơn giản như đứa trẻ mới sinh co tay chân (gốc tượng hình) → mượn âm làm TRỢ TỪ đặt cuối câu để báo hiệu việc đã XONG hoặc vừa THAY ĐỔI.",
    "cf": "子 (zǐ – \"con, con cái\", cùng gốc hình đứa trẻ)",
    "w": "下雨了 / 太冷了 / 好了"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "— Lạnh như vậy cậu chịu nổi không? — Chịu được, áo dày tớ có thừa.",
    "answer": "——这么冷你受得了吗？——受得了，我有的是厚衣服。",
    "answerPy": "— Zhème lěng nǐ shòu de liǎo ma? — Shòu de liǎo, wǒ yǒudeshì hòu yīfu.",
    "note": "Ôn V得了 (Bài 4 · điểm 1) + 有的是 (điểm 2 bài này).",
    "pair": "受得了 / 受不了"
   },
   {
    "promptLang": "vi",
    "prompt": "Dù cay không chịu nổi, nhưng tôi vẫn ăn hết.",
    "answer": "尽管辣得受不了，但是我还是吃完了。",
    "answerPy": "Jǐnguǎn là de shòubuliǎo, dànshì wǒ háishì chī wán le.",
    "note": "Ôn 尽管……但是…… (Bài 9 · điểm 2).",
    "pair": "Adj得受不了"
   }
  ]
 },
 {
  "n": 18,
  "zh": "举办",
  "py": "jǔbàn",
  "pos": "Động từ",
  "vn": "tổ chức (hoạt động, sự kiện)",
  "hv": "cử biện",
  "em": "🎪",
  "lesson": 2,
  "explain": [
   "Đứng ra tổ chức một hoạt động / sự kiện (triển lãm, thi đấu, lễ hội, hội nghị). Chủ ngữ thường là trường, thành phố, công ty. So với 开展 (Bài khoá 4): 举办 = tổ chức một sự kiện cụ thể; 开展 = triển khai một phong trào, hoạt động kéo dài."
  ],
  "usage": "举办活动 · 举办比赛 · 举办运动会 · 每年都举办.",
  "collo": [
   "举办活动",
   "举办比赛",
   "举办运动会",
   "举办冰雪节"
  ],
  "colloFull": [
   {
    "zh": "举办活动",
    "py": "Jǔbàn huódòng",
    "vn": "tổ chức hoạt động"
   },
   {
    "zh": "举办比赛",
    "py": "Jǔbàn bǐsài",
    "vn": "tổ chức cuộc thi"
   },
   {
    "zh": "举办运动会",
    "py": "Jǔbàn yùndònghuì",
    "vn": "tổ chức đại hội thể thao"
   },
   {
    "zh": "举办冰雪节",
    "py": "Jǔbàn bīng xuě jié",
    "vn": "tổ chức lễ hội băng tuyết"
   }
  ],
  "patterns": [
   {
    "s": "Đơn vị + 举办 + 活动 / 比赛 / 晚会",
    "m": "Ai đứng ra tổ chức sự kiện gì"
   }
  ],
  "ex_zh": "听说春节时那里会举办很多活动。",
  "ex_py": "Tīngshuō chūn jié shí nàli huì jǔbàn hěn duō huódòng.",
  "ex_vn": "Nghe nói dịp Tết ở đó sẽ tổ chức rất nhiều hoạt động.",
  "exList": [
   {
    "zh": "听说春节时那里会举办很多活动。",
    "py": "Tīngshuō chūn jié shí nàli huì jǔbàn hěn duō huódòng.",
    "vn": "Nghe nói dịp Tết ở đó sẽ tổ chức rất nhiều hoạt động."
   },
   {
    "zh": "我们学校下个月举办运动会，至少有二十个班参加。",
    "py": "Wǒmen xuéxiào xià gè yuè jǔbàn yùndònghuì, zhìshǎo yǒu èr shí gè bān cānjiā.",
    "vn": "Tháng sau trường mình tổ chức đại hội thể thao, ít nhất có hai mươi lớp tham gia. (ôn 至少 – Bài 5 · điểm 1)"
   }
  ],
  "hanzi": [
   {
    "c": "举",
    "p": "jǔ",
    "type": "上下结构 · Trên-dưới",
    "st": 9,
    "ord": "𭕄 trên → 丰 dưới",
    "rad": "丶 (chủ)",
    "mean": "giơ, nêu",
    "tip": "Giản thể của 舉 (nhiều tay cùng nâng) → GIƠ, NÊU. 举例 = nêu ví dụ; 举办 (Bài 11); 举手.",
    "cf": "誉 (yù – danh dự)",
    "w": "举 / 举例 / 举办 / 举手"
   },
   {
    "c": "办",
    "p": "bàn",
    "type": "左右结构 · Trái-phải (giản thể)",
    "st": 4,
    "ord": "力 (lực) trái/phải kèm 、",
    "rad": "力 (lực – sức)",
    "mean": "làm, xử lý",
    "tip": "Bộ sức lực 力 (bỏ công sức làm việc) → mở rộng thành LÀM, XỬ LÝ, kết hợp 举(tổ chức, nâng lên) thành 举办 = TỔ CHỨC, TIẾN HÀNH.",
    "cf": "办 dễ nhầm với 为 (wéi – \"làm\")",
    "w": "举办 / 办法 / 办公室"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Do trời mưa nên cuộc thi không tổ chức được.",
    "answer": "由于下雨，比赛没办法举办了。",
    "answerPy": "Yóuyú xiàyǔ, bǐsài méi bànfǎ jǔbàn le.",
    "note": "Ôn 由于 (Bài 2 · điểm 4).",
    "pair": "由于……"
   },
   {
    "promptLang": "vi",
    "prompt": "Trường chúng tôi không chỉ tổ chức thi đấu thể thao mà còn tổ chức hoạt động văn hoá.",
    "answer": "我们学校不仅举办运动比赛，还举办文化活动。",
    "answerPy": "Wǒmen xuéxiào bùjǐn jǔbàn yùndòng bǐsài, hái jǔbàn wénhuà huódòng.",
    "note": "Ôn 不仅……还…… (Bài 3 · điểm 2).",
    "pair": "不仅……还……"
   }
  ]
 },
 {
  "n": 19,
  "zh": "各种",
  "py": "gèzhǒng",
  "pos": "Đại từ",
  "vn": "các loại, đủ loại",
  "hv": "các chủng",
  "em": "🌈",
  "lesson": 2,
  "explain": [
   "Đủ mọi loại khác nhau; đứng thẳng trước danh từ, không cần lượng từ: 各种植物, 各种问题. Hay mở rộng thành 各种各样(的). Khác 各 (Bài 5: mỗi, các) — 各种 nhấn mạnh “nhiều chủng loại”."
  ],
  "usage": "各种 + N · 各种各样的 + N.",
  "collo": [
   "各种植物",
   "各种活动",
   "各种问题",
   "各种各样"
  ],
  "colloFull": [
   {
    "zh": "各种植物",
    "py": "Gèzhǒng zhíwù",
    "vn": "đủ loại cây"
   },
   {
    "zh": "各种活动",
    "py": "Gèzhǒng huódòng",
    "vn": "các loại hoạt động"
   },
   {
    "zh": "各种问题",
    "py": "Gèzhǒng wèntí",
    "vn": "đủ thứ vấn đề"
   },
   {
    "zh": "各种各样",
    "py": "Gèzhǒng gè yàng",
    "vn": "đủ loại đủ kiểu"
   }
  ],
  "patterns": [
   {
    "s": "各种 + N",
    "m": "Không thêm lượng từ (✗ 各种个人)"
   },
   {
    "s": "各种各样的 + N",
    "m": "Đủ loại đủ kiểu"
   }
  ],
  "ex_zh": "听说广州的鲜花市场很有名，里面有各种植物。",
  "ex_py": "Tīngshuō Guǎngzhōu de xiān huā shìchǎng hěn yǒumíng, lǐmian yǒu gèzhǒng zhíwù.",
  "ex_vn": "Nghe nói chợ hoa tươi ở Quảng Châu rất nổi tiếng, trong đó có đủ loại cây cối.",
  "exList": [
   {
    "zh": "听说广州的鲜花市场很有名，里面有各种植物。",
    "py": "Tīngshuō Guǎngzhōu de xiān huā shìchǎng hěn yǒumíng, lǐmian yǒu gèzhǒng zhíwù.",
    "vn": "Nghe nói chợ hoa tươi ở Quảng Châu rất nổi tiếng, trong đó có đủ loại cây cối."
   },
   {
    "zh": "超市里有各种各样的水果，你想买什么都有。",
    "py": "Chāoshì lǐ yǒu gèzhǒng gè yàng de shuǐguǒ, nǐ xiǎng mǎi shénme dōu yǒu.",
    "vn": "Trong siêu thị có đủ loại trái cây, bạn muốn mua gì cũng có."
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
    "prompt": "Chợ này có đủ loại rau quả, bạn muốn mua gì cũng mua được.",
    "answer": "这个市场里有各种水果和菜，你想买什么都能买到。",
    "answerPy": "Zhège shìchǎng lǐ yǒu gèzhǒng shuǐguǒ hé cài, nǐ xiǎng mǎi shénme dōu néng mǎi dào.",
    "note": "Đại từ phiếm chỉ 什么……都…… (HSK 3).",
    "pair": "什么……都"
   },
   {
    "promptLang": "vi",
    "prompt": "Trung Quốc có đủ loại phương ngữ, lấy Quảng Đông mà nói, có mấy loại liền.",
    "answer": "中国有各种方言，拿广东来说，就有好几种。",
    "answerPy": "Zhōngguó yǒu gèzhǒng fāngyán, ná guǎng dōng láishuō, jiù yǒu hǎo jǐ zhǒng.",
    "note": "Ôn 拿……来说 (Bài 7 · điểm 3).",
    "pair": "拿……来说"
   }
  ]
 },
 {
  "n": 20,
  "zh": "植物",
  "py": "zhíwù",
  "pos": "Danh từ",
  "vn": "thực vật, cây cối",
  "hv": "thực vật",
  "em": "🪴",
  "lesson": 2,
  "explain": [
   "Cây cối, hoa cỏ nói chung (đối lập với 动物 – động vật). Hán Việt trùng nghĩa: “thực vật”."
  ],
  "usage": "各种植物 · 绿色植物 · 种植物 · 植物园.",
  "collo": [
   "绿色植物",
   "各种植物",
   "种植物",
   "植物园"
  ],
  "colloFull": [
   {
    "zh": "绿色植物",
    "py": "Lǜsè zhíwù",
    "vn": "cây xanh"
   },
   {
    "zh": "各种植物",
    "py": "Gèzhǒng zhíwù",
    "vn": "đủ loại cây"
   },
   {
    "zh": "种植物",
    "py": "Zhǒng zhíwù",
    "vn": "trồng cây"
   },
   {
    "zh": "植物园",
    "py": "Zhíwù yuán",
    "vn": "vườn thực vật"
   }
  ],
  "patterns": [
   {
    "s": "植物 ↔ 动物",
    "m": "thực vật ↔ động vật"
   },
   {
    "s": "种 + 植物 / 花 / 树",
    "m": "种 = trồng (từ Bài 2)"
   }
  ],
  "ex_zh": "听说广州的鲜花市场很有名，里面有各种植物。",
  "ex_py": "Tīngshuō Guǎngzhōu de xiān huā shìchǎng hěn yǒumíng, lǐmian yǒu gèzhǒng zhíwù.",
  "ex_vn": "Nghe nói chợ hoa tươi ở Quảng Châu rất nổi tiếng, trong đó có đủ loại cây cối.",
  "exList": [
   {
    "zh": "听说广州的鲜花市场很有名，里面有各种植物。",
    "py": "Tīngshuō Guǎngzhōu de xiān huā shìchǎng hěn yǒumíng, lǐmian yǒu gèzhǒng zhíwù.",
    "vn": "Nghe nói chợ hoa tươi ở Quảng Châu rất nổi tiếng, trong đó có đủ loại cây cối."
   },
   {
    "zh": "我喜欢在房间里种一些植物，看起来很舒服。",
    "py": "Wǒ xǐhuan zài fángjiān lǐ zhǒng yìxiē zhíwù, kàn qǐlái hěn shūfu.",
    "vn": "Tôi thích trồng ít cây trong phòng, nhìn rất dễ chịu."
   }
  ],
  "hanzi": [
   {
    "c": "植",
    "p": "zhí",
    "type": "左右结构 · Trái-phải",
    "st": 12,
    "ord": "木 (mộc) trái → 直 (trực) phải",
    "rad": "木 (mộc – cây)",
    "mean": "trồng",
    "tip": "Bộ cây 木 + 直(thẳng đứng, biểu âm) → CÂY được TRỒNG THẲNG, kết hợp 物(vật thể) thành 植物 = THỰC VẬT.",
    "cf": "值 (zhí – \"giá trị\", bộ 亻\")",
    "w": "植物 / 种植 / 植物园"
   },
   {
    "c": "物",
    "p": "wù",
    "type": "形声字 · Chữ hình thanh",
    "st": 8,
    "ord": "牜 (phẩy, ngang, sổ, hất) → 勿 (phẩy, ngang gập móc, phẩy, phẩy)",
    "rad": "牛 (ngưu – trâu bò; viết 牜 khi đứng bên trái)",
    "mean": "vật, đồ vật",
    "tip": "牜 (con bò) + 勿 (wù, chỉ âm): bò là con vật lớn, quen thuộc nhất → vật. 动物 = vật biết động đậy → động vật. Ôn: 礼物 (HSK2 Bài 5), 牛 (HSK3 Bài 4).",
    "cf": "特 tè (特别 – HSK3 Bài 4) — cũng có 牜 bên trái",
    "w": "动物 / 礼物 / 小动物"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Vườn thực vật này có cây có hoa, môi trường đặc biệt tốt.",
    "answer": "这个植物园有树有花，环境特别好。",
    "answerPy": "Zhège zhíwù yuán yǒu shù yǒu huā, huánjìng tèbié hǎo.",
    "note": "Ôn 有A有B (Bài 8 · điểm 4).",
    "pair": "有A有B"
   },
   {
    "promptLang": "vi",
    "prompt": "Cây cối cũng cần ánh nắng, nếu không sẽ không lớn được.",
    "answer": "植物也需要阳光，否则长不大。",
    "answerPy": "Zhíwù yě xūyào yángguāng, fǒuzé cháng bú dà.",
    "note": "Ôn 否则 (Bài 8 · điểm 2).",
    "pair": "……，否则……"
   }
  ]
 },
 {
  "n": 21,
  "zh": "公里",
  "py": "gōnglǐ",
  "pos": "Lượng từ",
  "vn": "ki-lô-mét (km)",
  "hv": "công lí",
  "em": "📏",
  "lesson": 3,
  "explain": [
   "Đơn vị đo chiều dài, 1 公里 = 1 km = 1000 mét (米). Khác 里 lǐ (dặm Trung Quốc = 500 m)."
  ],
  "usage": "số + 公里 · 三千多公里 · A 离 B + số + 公里.",
  "collo": [
   "三千多公里",
   "几公里",
   "每小时一百公里",
   "一公里路"
  ],
  "colloFull": [
   {
    "zh": "三千多公里",
    "py": "Sān qiān duō gōnglǐ",
    "vn": "hơn 3000 km"
   },
   {
    "zh": "几公里",
    "py": "Jǐ gōnglǐ",
    "vn": "mấy cây số"
   },
   {
    "zh": "每小时一百公里",
    "py": "Měi xiǎoshí yì bǎi gōnglǐ",
    "vn": "100 km/giờ"
   },
   {
    "zh": "一公里路",
    "py": "Yì gōnglǐ lù",
    "vn": "một cây số đường"
   }
  ],
  "patterns": [
   {
    "s": "距离 + 有 + số + 公里",
    "m": "Khoảng cách là … km"
   },
   {
    "s": "A 离 B + số + 公里",
    "m": "A cách B … km"
   }
  ],
  "ex_zh": "两个城市之间的距离有三千多公里。",
  "ex_py": "Liǎng gè chéngshì zhī jiān de jùlí yǒu sān qiān duō gōnglǐ.",
  "ex_vn": "Khoảng cách giữa hai thành phố là hơn ba nghìn ki-lô-mét.",
  "exList": [
   {
    "zh": "两个城市之间的距离有三千多公里。",
    "py": "Liǎng gè chéngshì zhī jiān de jùlí yǒu sān qiān duō gōnglǐ.",
    "vn": "Khoảng cách giữa hai thành phố là hơn ba nghìn ki-lô-mét."
   },
   {
    "zh": "我家离学校只有两公里，走路二十分钟就到了。",
    "py": "Wǒ jiā lí xuéxiào zhǐyǒu liǎng gōnglǐ, zǒulù èr shí fēnzhōng jiù dào le.",
    "vn": "Nhà tôi cách trường chỉ hai cây số, đi bộ hai mươi phút là tới."
   }
  ],
  "hanzi": [
   {
    "c": "公",
    "p": "gōng",
    "type": "会意字 · Chữ hội ý",
    "st": 4,
    "ord": "八 → 厶",
    "rad": "八 (bát – tám, chia ra)",
    "mean": "chung, công; (đơn vị) quốc tế",
    "tip": "八 (chia ra) + 厶 (riêng tư): chia phần riêng ra cho mọi người → chung, công. 公斤 = “cân chung” (đơn vị quốc tế) = 2 斤.",
    "cf": "分 fēn — dưới là 刀",
    "w": "公斤 / 公司"
   },
   {
    "c": "里",
    "p": "lǐ",
    "type": "上下结构 · Trên-dưới",
    "st": 7,
    "ord": "日 trên → 土 dưới",
    "rad": "里 (lý)",
    "mean": "dặm; trong",
    "tip": "田(ruộng) + 土(đất) → thôn xóm → dặm LÝ (500m). 公里 = km. Cũng là \"bên trong\" (里面).",
    "cf": "理 (lǐ – lý lẽ)",
    "w": "公里 / 里面 / 这里"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Từ đây đến sân bay ít nhất 30 km.",
    "answer": "从这儿到机场至少有三十公里。",
    "answerPy": "Cóng zhèr dào jīchǎng zhìshǎo yǒu sān shí gōnglǐ.",
    "note": "Ôn 至少 (Bài 5 · điểm 1).",
    "pair": "至少"
   },
   {
    "promptLang": "vi",
    "prompt": "Hai thành phố cách nhau 500 km, hơn nữa đi tàu cao tốc cũng tiện, chúng ta đi tàu cao tốc nhé.",
    "answer": "两个城市之间有五百公里，再说坐高铁也很方便，我们就坐高铁吧。",
    "answerPy": "Liǎng gè chéngshì zhī jiān yǒu wǔ bǎi gōnglǐ, zài shuō zuò gāotiě yě hěn fāngbiàn, wǒmen jiù zuò gāotiě ba.",
    "note": "Ôn 再说 (Bài 4 · điểm 2).",
    "pair": "……，再说……"
   }
  ]
 },
 {
  "n": 22,
  "zh": "气候",
  "py": "qìhòu",
  "pos": "Danh từ",
  "vn": "khí hậu",
  "hv": "khí hậu",
  "em": "🌦️",
  "lesson": 3,
  "explain": [
   "Tình hình thời tiết chung, lâu dài của một vùng (cả năm, nhiều năm). Phân biệt: 天气 = thời tiết từng ngày (hôm nay, ngày mai)."
  ],
  "usage": "气候温暖 · 气候不同 · 适应气候 · 南方的气候.",
  "collo": [
   "气候温暖",
   "气候不同",
   "适应气候",
   "南方的气候"
  ],
  "colloFull": [
   {
    "zh": "气候温暖",
    "py": "Qìhòu wēnnuǎn",
    "vn": "khí hậu ấm áp"
   },
   {
    "zh": "气候不同",
    "py": "Qìhòu bùtóng",
    "vn": "khí hậu khác nhau"
   },
   {
    "zh": "适应气候",
    "py": "Shìyìng qìhòu",
    "vn": "thích nghi khí hậu"
   },
   {
    "zh": "南方的气候",
    "py": "Nánfāng de qìhòu",
    "vn": "khí hậu miền Nam"
   }
  ],
  "patterns": [
   {
    "s": "气候 (lâu dài, cả vùng) ≠ 天气 (từng ngày)",
    "m": "✗ 今天的气候很好 → ✓ 今天的天气很好"
   }
  ],
  "ex_zh": "两个城市之间的距离有三千多公里，气候也大不相同。",
  "ex_py": "Liǎng gè chéngshì zhī jiān de jùlí yǒu sān qiān duō gōnglǐ, qìhòu yě dà bù xiāngtóng.",
  "ex_vn": "Khoảng cách giữa hai thành phố là hơn ba nghìn ki-lô-mét, khí hậu cũng khác nhau rất nhiều.",
  "exList": [
   {
    "zh": "两个城市之间的距离有三千多公里，气候也大不相同。",
    "py": "Liǎng gè chéngshì zhī jiān de jùlí yǒu sān qiān duō gōnglǐ, qìhòu yě dà bù xiāngtóng.",
    "vn": "Khoảng cách giữa hai thành phố là hơn ba nghìn ki-lô-mét, khí hậu cũng khác nhau rất nhiều."
   },
   {
    "zh": "云南的气候四季都很舒服，所以很多人喜欢去那里旅游。",
    "py": "Yúnnán de qìhòu sìjì dōu hěn shūfu, suǒyǐ hěn duō rén xǐhuan qù nàli lǚyóu.",
    "vn": "Khí hậu Vân Nam bốn mùa đều dễ chịu, nên nhiều người thích đến đó du lịch."
   }
  ],
  "hanzi": [
   {
    "c": "气",
    "p": "qì",
    "type": "独体字 · Chữ đơn (giản thể)",
    "st": 4,
    "ord": "nét liền",
    "rad": "气 (khí)",
    "mean": "khí, không khí",
    "tip": "Chữ tượng hình HƠI/KHÍ bốc lên → nghĩa gốc là KHÍ, kết hợp 空(trống rỗng, bầu trời) thành 空气 = KHÔNG KHÍ.",
    "cf": "气 dễ nhầm với 乞 (qǐ – \"xin, cầu\")",
    "w": "空气 / 天气 / 生气"
   },
   {
    "c": "候",
    "p": "hòu",
    "type": "左右结构 · Trái-phải",
    "st": 10,
    "ord": "亻 (nhân) trái → 侯 (biến thể) phải",
    "rad": "亻 (nhân – người)",
    "mean": "thời tiết, chờ đợi",
    "tip": "Bộ người 亻 (quan sát) + 侯(biểu âm) → NGƯỜI quan sát THỜI TIẾT theo mùa, kết hợp 气(khí) thành 气候 = KHÍ HẬU.",
    "cf": "猴 (hóu – \"con khỉ\", bộ 犭\")",
    "w": "气候 / 时候 / 等候"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Mới đến miền Bắc, tôi chưa thích nghi với khí hậu ở đây.",
    "answer": "刚来北方的时候，我还不适应这里的气候。",
    "answerPy": "Gāng lái běifāng de shíhou, wǒ hái bú shìyìng zhèli de qìhòu.",
    "note": "Ôn 适应 (từ Bài 1).",
    "pair": "适应 + 气候"
   },
   {
    "promptLang": "vi",
    "prompt": "Khí hậu ở đây vừa không quá nóng vừa không quá lạnh.",
    "answer": "这里的气候既不太热，又不太冷。",
    "answerPy": "Zhèli de qìhòu jì bú tài rè, yòu bú tài lěng.",
    "note": "Ôn 既……又…… (Bài 4 · điểm 3).",
    "pair": "既……又……"
   }
  ]
 },
 {
  "n": 23,
  "zh": "而",
  "py": "ér",
  "pos": "Liên từ",
  "vn": "còn, mà, nhưng; (vì …) mà (nối hai thành phần)",
  "hv": "nhi",
  "em": "🔗",
  "lesson": 3,
  "explain": [
   "Liên từ văn viết, nối động từ, tính từ, cụm từ, phân câu. Bài này học 3 nghĩa: đối lập (“còn, trong khi”), nối tiếp (“mà, và”), nhân quả (因为……而…… “vì … mà …”). Xem kỹ ở Ngữ pháp · điểm 3."
  ],
  "usage": "A……，而B…… · Adj而Adj · 因为……而…….",
  "collo": [
   "而哈尔滨……",
   "紧张而兴奋",
   "因为……而……",
   "热情而积极"
  ],
  "colloFull": [
   {
    "zh": "而哈尔滨……",
    "py": "Ér Hā'ěrbīn……",
    "vn": "còn Cáp Nhĩ Tân thì…"
   },
   {
    "zh": "紧张而兴奋",
    "py": "Jǐnzhāng ér xīngfèn",
    "vn": "căng thẳng mà hào hứng"
   },
   {
    "zh": "因为……而……",
    "py": "Yīnwèi…… ér……",
    "vn": "vì … mà …"
   },
   {
    "zh": "热情而积极",
    "py": "Rèqíng ér jījí",
    "vn": "nhiệt tình và tích cực"
   }
  ],
  "patterns": [
   {
    "s": "A……，而 B……",
    "m": "Đối lập hai đối tượng"
   },
   {
    "s": "因为 / 由于 + nguyên nhân + 而 + kết quả",
    "m": "Nhân quả"
   }
  ],
  "ex_zh": "广州基本上没有冬天，而哈尔滨的冬天一般会从十月开始。",
  "ex_py": "Guǎngzhōu jīběn shàng méiyǒu dōngtiān, ér Hā'ěrbīn de dōngtiān yìbān huì cóng shí yuè kāishǐ.",
  "ex_vn": "Quảng Châu gần như không có mùa đông, còn mùa đông Cáp Nhĩ Tân thường bắt đầu từ tháng Mười.",
  "exList": [
   {
    "zh": "广州基本上没有冬天，而哈尔滨的冬天一般会从十月开始。",
    "py": "Guǎngzhōu jīběn shàng méiyǒu dōngtiān, ér Hā'ěrbīn de dōngtiān yìbān huì cóng shí yuè kāishǐ.",
    "vn": "Quảng Châu gần như không có mùa đông, còn mùa đông Cáp Nhĩ Tân thường bắt đầu từ tháng Mười."
   },
   {
    "zh": "他喜欢安静，而我喜欢热闹。",
    "py": "Tā xǐhuan ānjìng, ér wǒ xǐhuan rènao.",
    "vn": "Anh ấy thích yên tĩnh, còn tôi thích náo nhiệt."
   }
  ],
  "hanzi": [
   {
    "c": "而",
    "p": "ér",
    "type": "独体字 · Chữ đơn",
    "st": 6,
    "ord": "nét liền",
    "rad": "而 (nhi, bộ riêng)",
    "mean": "mà, và",
    "tip": "Chữ tượng hình chòm râu cằm thời cổ, mượn âm để làm LIÊN TỪ nối hai vế câu, biểu thị quan hệ song song hoặc chuyển ý.",
    "cf": "而 dễ nhầm với 面 (miàn – \"mặt\", nét dưới khác)",
    "w": "而 / 而且 / 因而"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Miền Nam mùa đông rất ấm, còn miền Bắc thì lạnh đến mức không chịu nổi.",
    "answer": "南方冬天很暖和，而北方冷得让人受不了。",
    "answerPy": "Nánfāng dōngtiān hěn nuǎnhuo, ér běifāng lěng de ràng rén shòubuliǎo.",
    "note": "Kết hợp 受不了 (V不了, Bài 4 · điểm 1).",
    "pair": "……，而……"
   },
   {
    "promptLang": "vi",
    "prompt": "Thành phố này vì phong cảnh đẹp mà thu hút rất nhiều du khách.",
    "answer": "这个城市因为风景美而吸引了很多游客。",
    "answerPy": "Zhège chéngshì yīnwèi fēngjǐng měi ér xīyǐn le hěn duō yóukè.",
    "note": "因为……而…… (nhân quả).",
    "pair": "因为……而……"
   }
  ]
 },
 {
  "n": 24,
  "zh": "此外",
  "py": "cǐwài",
  "pos": "Liên từ",
  "vn": "ngoài ra",
  "hv": "thử ngoại",
  "em": "➕",
  "lesson": 3,
  "explain": [
   "Đứng đầu câu / vế sau, bổ sung thêm thông tin ngoài những điều vừa nói. 此 = “này, cái này” (đã học ở Bài 9 · điểm 3), 此外 = ngoài cái này ra. Văn viết; khẩu ngữ hay dùng 另外 / 还有."
  ],
  "usage": "……。此外，(还 / 也)…… ",
  "collo": [
   "此外，还……",
   "此外，……也……",
   "除此以外",
   "此外，另外"
  ],
  "colloFull": [
   {
    "zh": "此外，还……",
    "py": "Cǐwài, hái……",
    "vn": "ngoài ra, còn…"
   },
   {
    "zh": "此外，……也……",
    "py": "Cǐwài,…… yě……",
    "vn": "ngoài ra, … cũng…"
   },
   {
    "zh": "除此以外",
    "py": "Chú cǐ yǐwài",
    "vn": "ngoài điều này ra"
   },
   {
    "zh": "此外，另外",
    "py": "Cǐwài, lìngwài",
    "vn": "ngoài ra (văn viết / khẩu ngữ)"
   }
  ],
  "patterns": [
   {
    "s": "Câu 1。此外，(还 / 也) + câu 2",
    "m": "Bổ sung thông tin"
   }
  ],
  "ex_zh": "此外，两地的方言也不一样。",
  "ex_py": "Cǐwài, liǎng dì de fāngyán yě bù yíyàng.",
  "ex_vn": "Ngoài ra, phương ngữ của hai nơi cũng không giống nhau.",
  "exList": [
   {
    "zh": "此外，两地的方言也不一样。",
    "py": "Cǐwài, liǎng dì de fāngyán yě bù yíyàng.",
    "vn": "Ngoài ra, phương ngữ của hai nơi cũng không giống nhau."
   },
   {
    "zh": "这个房子离地铁站很近，此外，房租也不高。",
    "py": "Zhège fángzi lí dìtiě zhàn hěn jìn, cǐwài, fáng zū yě bù gāo.",
    "vn": "Căn nhà này gần ga tàu điện ngầm, ngoài ra tiền thuê cũng không cao. (ôn 房租 – Bài 2)"
   }
  ],
  "hanzi": [
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
   },
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
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Mùa đông ở đây rất lạnh; ngoài ra, gió cũng rất to.",
    "answer": "这里冬天很冷，此外，风也很大。",
    "answerPy": "Zhèli dōngtiān hěn lěng, cǐwài, fēng yě hěn dà.",
    "note": "此外 + 也.",
    "pair": "此外，……也……"
   },
   {
    "promptLang": "vi",
    "prompt": "Cậu phải mặc nhiều áo vào, ngoài ra còn phải xem trước thời tiết, nếu không sẽ hối hận đấy.",
    "answer": "你要多穿点儿衣服，此外，还要提前查好天气，否则会后悔的。",
    "answerPy": "Nǐ yào duō chuān diǎnr yīfu, cǐwài, hái yào tíqián chá hǎo tiānqì, fǒuzé huì hòuhuǐ de.",
    "note": "Ôn 否则 (Bài 8 · điểm 2).",
    "pair": "此外，还……"
   }
  ]
 },
 {
  "n": 25,
  "zh": "方言",
  "py": "fāngyán",
  "pos": "Danh từ",
  "vn": "tiếng địa phương, phương ngữ",
  "hv": "phương ngôn",
  "em": "🗣️",
  "lesson": 3,
  "explain": [
   "Tiếng nói riêng của một vùng (giọng, từ, cách nói khác tiếng chuẩn). Hán Việt “phương ngôn” ở đây = phương ngữ, không phải “câu tục ngữ”."
  ],
  "usage": "说方言 · 广州方言 · 听不懂方言 · 地名 + 话.",
  "collo": [
   "说方言",
   "广州方言",
   "听不懂方言",
   "各地方言"
  ],
  "colloFull": [
   {
    "zh": "说方言",
    "py": "Shuō fāngyán",
    "vn": "nói tiếng địa phương"
   },
   {
    "zh": "广州方言",
    "py": "Guǎngzhōu fāngyán",
    "vn": "tiếng Quảng Châu"
   },
   {
    "zh": "听不懂方言",
    "py": "Tīng bù dǒng fāngyán",
    "vn": "nghe không hiểu tiếng địa phương"
   },
   {
    "zh": "各地方言",
    "py": "Gè dì fāngyán",
    "vn": "tiếng các vùng"
   }
  ],
  "patterns": [
   {
    "s": "地名 + 方言 / 话",
    "m": "广州话, 上海话 = tiếng Quảng Châu, tiếng Thượng Hải"
   }
  ],
  "ex_zh": "此外，两地的方言也不一样。",
  "ex_py": "Cǐwài, liǎng dì de fāngyán yě bù yíyàng.",
  "ex_vn": "Ngoài ra, phương ngữ của hai nơi cũng không giống nhau.",
  "exList": [
   {
    "zh": "此外，两地的方言也不一样。",
    "py": "Cǐwài, liǎng dì de fāngyán yě bù yíyàng.",
    "vn": "Ngoài ra, phương ngữ của hai nơi cũng không giống nhau."
   },
   {
    "zh": "我听不懂上海方言，不过上海人都会说普通话。",
    "py": "Wǒ tīng bù dǒng Shànghǎi fāngyán, búguò Shànghǎi rén dōu huì shuō pǔtōnghuà.",
    "vn": "Tôi nghe không hiểu tiếng Thượng Hải, có điều người Thượng Hải đều biết nói tiếng phổ thông. (ôn 不过 – Bài 2 · điểm 2)"
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
    "c": "言",
    "p": "yán",
    "type": "会意字 · Chữ hội ý",
    "st": 7,
    "ord": "丶 → 一 → 一 → 一 → 口",
    "rad": "言 (ngôn – lời nói)",
    "mean": "lời nói, tiếng nói; nói",
    "tip": "Cái miệng (口) với những nét lời thoát ra phía trên → lời nói — 方言 (tiếng địa phương), 语言, 发言. Khi làm bộ bên trái viết gọn thành 讠.",
    "cf": "信 xìn — thêm 亻 bên trái; 音 yīn (âm) — dưới là 日",
    "w": "方言 / 语言 / 发言"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Dù tôi nghe không hiểu tiếng địa phương, nhưng mọi người đều nói tiếng phổ thông với tôi.",
    "answer": "尽管我听不懂方言，但是大家都跟我说普通话。",
    "answerPy": "Jǐnguǎn wǒ tīng bù dǒng fāngyán, dànshì dàjiā dōu gēn wǒ shuō pǔtōnghuà.",
    "note": "Ôn 尽管……但是…… (Bài 9 · điểm 2).",
    "pair": "尽管……但是……"
   },
   {
    "promptLang": "vi",
    "prompt": "Việt Nam cũng có phương ngữ, lấy miền Trung mà nói, nhiều từ khác với miền Bắc.",
    "answer": "越南也有方言，拿中部来说，很多词跟北部不一样。",
    "answerPy": "Yuènán yě yǒu fāngyán, ná zhōng bù láishuō, hěn duō cí gēn běi bù bù yíyàng.",
    "note": "Ôn 拿……来说 (Bài 7 · điểm 3).",
    "pair": "拿……来说"
   }
  ]
 },
 {
  "n": 26,
  "zh": "普通话",
  "py": "pǔtōnghuà",
  "pos": "Danh từ",
  "vn": "tiếng phổ thông (tiếng Trung chuẩn)",
  "hv": "phổ thông thoại",
  "em": "🇨🇳",
  "lesson": 3,
  "explain": [
   "Ngôn ngữ chuẩn của Trung Quốc, lấy âm Bắc Kinh làm chuẩn — chính là thứ tiếng chúng ta đang học. Bẫy: 普通 (Bài 5) = bình thường, nhưng 普通话 không phải “lời nói bình thường”."
  ],
  "usage": "说普通话 · 学习普通话 · 普通话说得很好.",
  "collo": [
   "说普通话",
   "学习普通话",
   "普通话水平",
   "标准的普通话"
  ],
  "colloFull": [
   {
    "zh": "说普通话",
    "py": "Shuō pǔtōnghuà",
    "vn": "nói tiếng phổ thông"
   },
   {
    "zh": "学习普通话",
    "py": "Xuéxí pǔtōnghuà",
    "vn": "học tiếng phổ thông"
   },
   {
    "zh": "普通话水平",
    "py": "Pǔtōnghuà shuǐpíng",
    "vn": "trình độ tiếng phổ thông"
   },
   {
    "zh": "标准的普通话",
    "py": "Biāozhǔn de pǔtōnghuà",
    "vn": "tiếng phổ thông chuẩn"
   }
  ],
  "patterns": [
   {
    "s": "普通话 + 说得 + 很好 / 不太好",
    "m": "Bổ ngữ trạng thái (HSK 3)"
   },
   {
    "s": "普通话 ↔ 方言",
    "m": "tiếng chuẩn ↔ tiếng địa phương"
   }
  ],
  "ex_zh": "为了顺利交流，中国人从小都要学习普通话。",
  "ex_py": "Wèile shùnlì jiāoliú, zhōngguórén cóng xiǎo dōu yào xuéxí pǔtōnghuà.",
  "ex_vn": "Để giao tiếp thuận lợi, người Trung Quốc từ nhỏ đều phải học tiếng phổ thông.",
  "exList": [
   {
    "zh": "为了顺利交流，中国人从小都要学习普通话。",
    "py": "Wèile shùnlì jiāoliú, zhōngguórén cóng xiǎo dōu yào xuéxí pǔtōnghuà.",
    "vn": "Để giao tiếp thuận lợi, người Trung Quốc từ nhỏ đều phải học tiếng phổ thông."
   },
   {
    "zh": "他是广州人，可是普通话说得很好。",
    "py": "Tā shì Guǎngzhōu rén, kěshì pǔtōnghuà shuō de hěn hǎo.",
    "vn": "Anh ấy là người Quảng Châu, nhưng nói tiếng phổ thông rất giỏi."
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
   },
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
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Để giao tiếp thuận lợi, người Trung Quốc từ nhỏ đã phải học tiếng phổ thông.",
    "answer": "为了顺利交流，中国人从小就要学习普通话。",
    "answerPy": "Wèile shùnlì jiāoliú, zhōngguórén cóng xiǎo jiù yào xuéxí pǔtōnghuà.",
    "note": "为了 + mục đích (HSK 3).",
    "pair": "为了……"
   },
   {
    "promptLang": "vi",
    "prompt": "Bất kể đi đâu ở Trung Quốc, nói tiếng phổ thông mọi người đều nghe hiểu.",
    "answer": "不管去中国哪儿，说普通话大家都听得懂。",
    "answerPy": "Bùguǎn qù Zhōngguó nǎr, shuō pǔtōnghuà dàjiā dōu tīng de dǒng.",
    "note": "Ôn 不管……都…… (Bài 8 · điểm 1).",
    "pair": "不管……都……"
   }
  ]
 },
 {
  "n": 27,
  "zh": "较",
  "py": "jiào",
  "pos": "Phó từ",
  "vn": "khá, tương đối",
  "hv": "giảo",
  "em": "📊",
  "lesson": 3,
  "explain": [
   "= 比较 (khá, tương đối) nhưng dùng trong văn viết, thường đứng trước tính từ một âm tiết: 较大, 较好, 较远, 较多."
  ],
  "usage": "较 + Adj (một âm tiết) · 差别较大.",
  "collo": [
   "较大",
   "较远",
   "较好",
   "较多"
  ],
  "colloFull": [
   {
    "zh": "较大",
    "py": "Jiào dà",
    "vn": "khá lớn"
   },
   {
    "zh": "较远",
    "py": "Jiào yuǎn",
    "vn": "khá xa"
   },
   {
    "zh": "较好",
    "py": "Jiào hǎo",
    "vn": "khá tốt"
   },
   {
    "zh": "较多",
    "py": "Jiào duō",
    "vn": "khá nhiều"
   }
  ],
  "patterns": [
   {
    "s": "较 + Adj (văn viết) = 比较 + Adj (khẩu ngữ)",
    "m": "差别较大 = 差别比较大"
   }
  ],
  "ex_zh": "哈尔滨方言和普通话听起来比较像，而广州方言和普通话差别较大。",
  "ex_py": "Hā'ěrbīn fāngyán hé pǔtōnghuà tīng qǐlái bǐjiào xiàng, ér Guǎngzhōu fāngyán hé pǔtōnghuà chābié jiào dà.",
  "ex_vn": "Tiếng Cáp Nhĩ Tân nghe khá giống tiếng phổ thông, còn tiếng Quảng Châu thì khác tiếng phổ thông tương đối nhiều.",
  "exList": [
   {
    "zh": "哈尔滨方言和普通话听起来比较像，而广州方言和普通话差别较大。",
    "py": "Hā'ěrbīn fāngyán hé pǔtōnghuà tīng qǐlái bǐjiào xiàng, ér Guǎngzhōu fāngyán hé pǔtōnghuà chābié jiào dà.",
    "vn": "Tiếng Cáp Nhĩ Tân nghe khá giống tiếng phổ thông, còn tiếng Quảng Châu thì khác tiếng phổ thông tương đối nhiều."
   },
   {
    "zh": "这家饭馆价格较高，不过菜很好吃。",
    "py": "Zhè jiā fànguǎn jiàgé jiào gāo, búguò cài hěn hǎochī.",
    "vn": "Nhà hàng này giá khá cao, có điều món ăn rất ngon."
   }
  ],
  "hanzi": [
   {
    "c": "较",
    "p": "jiào",
    "type": "形声字 · Chữ hình thanh",
    "st": 10,
    "ord": "车 → 交",
    "rad": "车 (xa – xe)",
    "mean": "so sánh; khá",
    "tip": "车 (xe) + 交 (chỉ âm): đặt hai chiếc xe cạnh nhau để so → so sánh.",
    "cf": "校 xiào (学校) — bên trái là 木",
    "w": "比较 / 比较好"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Khu này môi trường khá tốt, tiền thuê nhà cũng tương đối thấp.",
    "answer": "这个小区环境较好，房租也较低。",
    "answerPy": "Zhège xiǎoqū huánjìng jiào hǎo, fáng zū yě jiào dī.",
    "note": "较 + Adj một âm tiết.",
    "pair": "较 + Adj"
   },
   {
    "promptLang": "vi",
    "prompt": "So với Quảng Châu, mùa đông Cáp Nhĩ Tân khá dài.",
    "answer": "跟广州相比，哈尔滨的冬天较长。",
    "answerPy": "Gēn Guǎngzhōu xiāngbǐ, Hā'ěrbīn de dōngtiān jiào cháng.",
    "note": "Ôn 跟……相比 (Bài 8 · điểm 3).",
    "pair": "跟……相比"
   }
  ]
 },
 {
  "n": 28,
  "zh": "使用",
  "py": "shǐyòng",
  "pos": "Động từ",
  "vn": "sử dụng, dùng",
  "hv": "sử dụng",
  "em": "🔧",
  "lesson": 3,
  "explain": [
   "Dùng (công cụ, ngôn ngữ, tiền, đồ vật…); trang trọng hơn 用. Đừng nhầm với 使 (Bài 7 · điểm 4) = khiến, làm cho."
  ],
  "usage": "使用 + công cụ / ngôn ngữ · 使用方法 · 免费使用.",
  "collo": [
   "使用方言",
   "使用手机",
   "使用方法",
   "免费使用"
  ],
  "colloFull": [
   {
    "zh": "使用方言",
    "py": "Shǐyòng fāngyán",
    "vn": "dùng tiếng địa phương"
   },
   {
    "zh": "使用手机",
    "py": "Shǐyòng shǒujī",
    "vn": "sử dụng điện thoại"
   },
   {
    "zh": "使用方法",
    "py": "Shǐyòng fāngfǎ",
    "vn": "cách sử dụng"
   },
   {
    "zh": "免费使用",
    "py": "Miǎnfèi shǐyòng",
    "vn": "sử dụng miễn phí"
   }
  ],
  "patterns": [
   {
    "s": "使用 + N (trang trọng) ≈ 用 + N (khẩu ngữ)",
    "m": ""
   },
   {
    "s": "使用 ≠ 使",
    "m": "使用 = sử dụng; 使 = khiến (Bài 7)"
   }
  ],
  "ex_zh": "如果广州人和哈尔滨人都只使用自己的方言，那么交流就很困难。",
  "ex_py": "Rúguǒ Guǎngzhōu rén hé Hā'ěrbīn rén dōu zhǐ shǐyòng zìjǐ de fāngyán, nàme jiāoliú jiù hěn kùnnán.",
  "ex_vn": "Nếu người Quảng Châu và người Cáp Nhĩ Tân đều chỉ dùng phương ngữ của mình thì giao tiếp sẽ rất khó khăn.",
  "exList": [
   {
    "zh": "如果广州人和哈尔滨人都只使用自己的方言，那么交流就很困难。",
    "py": "Rúguǒ Guǎngzhōu rén hé Hā'ěrbīn rén dōu zhǐ shǐyòng zìjǐ de fāngyán, nàme jiāoliú jiù hěn kùnnán.",
    "vn": "Nếu người Quảng Châu và người Cáp Nhĩ Tân đều chỉ dùng phương ngữ của mình thì giao tiếp sẽ rất khó khăn."
   },
   {
    "zh": "这台电脑我已经使用了五年，还很好用。",
    "py": "Zhè tái diànnǎo wǒ yǐjīng shǐyòng le wǔ nián, hái hěn hǎo yòng.",
    "vn": "Chiếc máy tính này tôi đã dùng năm năm rồi, vẫn còn dùng tốt."
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
    "c": "用",
    "p": "yòng",
    "type": "独体字 · Chữ đơn",
    "st": 5,
    "ord": "冂 → 丰",
    "rad": "用 (dụng)",
    "mean": "dùng",
    "tip": "Chữ tượng hình cái THÙNG gỗ để DÙNG → DÙNG, kết hợp 作(làm) thành 作用 = TÁC DỤNG.",
    "cf": "同字词: 信用卡 / 作用 / 使用",
    "w": "作用 / 使用 / 信用卡"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Trong giờ học phải dùng tiếng phổ thông, nếu không giao tiếp sẽ rất khó.",
    "answer": "上课时要使用普通话，否则交流会很困难。",
    "answerPy": "Shàngkè shí yào shǐyòng pǔtōnghuà, fǒuzé jiāoliú huì hěn kùnnán.",
    "note": "Ôn 否则 (Bài 8 · điểm 2).",
    "pair": "……，否则……"
   },
   {
    "promptLang": "vi",
    "prompt": "Thư viện này sinh viên có thể sử dụng miễn phí.",
    "answer": "这个图书馆学生可以免费使用。",
    "answerPy": "Zhège túshūguǎn xuésheng kěyǐ miǎnfèi shǐyòng.",
    "note": "Ôn 免费 (từ Bài 4).",
    "pair": "免费使用"
   }
  ]
 },
 {
  "n": 29,
  "zh": "引起",
  "py": "yǐnqǐ",
  "pos": "Động từ",
  "vn": "gây ra, dẫn đến, khơi lên",
  "hv": "dẫn khởi",
  "em": "⚠️",
  "lesson": 3,
  "explain": [
   "Làm nảy sinh, gây ra (thường là sự chú ý, hiểu lầm, vấn đề, hứng thú). Tân ngữ thường là danh từ trừu tượng: 引起误会, 引起注意."
  ],
  "usage": "引起 + 误会 / 注意 / 问题 / 兴趣.",
  "collo": [
   "引起误会",
   "引起注意",
   "引起问题",
   "引起兴趣"
  ],
  "colloFull": [
   {
    "zh": "引起误会",
    "py": "Yǐnqǐ wùhuì",
    "vn": "gây hiểu lầm"
   },
   {
    "zh": "引起注意",
    "py": "Yǐnqǐ zhùyì",
    "vn": "gây chú ý"
   },
   {
    "zh": "引起问题",
    "py": "Yǐnqǐ wèntí",
    "vn": "gây ra vấn đề"
   },
   {
    "zh": "引起兴趣",
    "py": "Yǐnqǐ xìngqù",
    "vn": "khơi gợi hứng thú"
   }
  ],
  "patterns": [
   {
    "s": "A + 引起 + 误会 / 注意 / 问题 / 兴趣",
    "m": "A gây ra …"
   }
  ],
  "ex_zh": "如果广州人和哈尔滨人都只使用自己的方言，那么交流就很困难，甚至还可能引起误会。",
  "ex_py": "Rúguǒ Guǎngzhōu rén hé Hā'ěrbīn rén dōu zhǐ shǐyòng zìjǐ de fāngyán, nàme jiāoliú jiù hěn kùnnán, shènzhì hái kěnéng yǐnqǐ wùhuì.",
  "ex_vn": "Nếu người Quảng Châu và người Cáp Nhĩ Tân đều chỉ dùng phương ngữ của mình thì giao tiếp sẽ rất khó, thậm chí còn có thể gây hiểu lầm.",
  "exList": [
   {
    "zh": "如果广州人和哈尔滨人都只使用自己的方言，那么交流就很困难，甚至还可能引起误会。",
    "py": "Rúguǒ Guǎngzhōu rén hé Hā'ěrbīn rén dōu zhǐ shǐyòng zìjǐ de fāngyán, nàme jiāoliú jiù hěn kùnnán, shènzhì hái kěnéng yǐnqǐ wùhuì.",
    "vn": "Nếu người Quảng Châu và người Cáp Nhĩ Tân đều chỉ dùng phương ngữ của mình thì giao tiếp sẽ rất khó, thậm chí còn có thể gây hiểu lầm."
   },
   {
    "zh": "他的话引起了大家的注意。",
    "py": "Tā dehuà yǐnqǐ le dàjiā de zhùyì.",
    "vn": "Lời anh ấy đã thu hút sự chú ý của mọi người."
   }
  ],
  "hanzi": [
   {
    "c": "引",
    "p": "yǐn",
    "type": "左右结构 · Trái-phải",
    "st": 4,
    "ord": "弓 (cung) trái → 丨 phải",
    "rad": "弓 (cung)",
    "mean": "kéo, dẫn",
    "tip": "Chữ hội ý KÉO dây cung 弓 → KÉO, DẪN, kết hợp 起 thành 引起 = DẪN ĐẾN, GÂY RA.",
    "cf": "弘 (hóng – \"rộng lớn\", cũng bộ 弓)",
    "w": "引起 / 吸引 / 引导"
   },
   {
    "c": "起",
    "p": "qǐ",
    "type": "形声字 · Chữ hình thanh",
    "st": 10,
    "ord": "走 → 己",
    "rad": "走 (tẩu – đi, chạy)",
    "mean": "đứng dậy; bắt đầu; nhắc đến",
    "tip": "走 (đi) + 己 (jǐ, chỉ âm): đứng dậy bước đi → dậy, bắt đầu. Sau động từ nói / nghe: 说起、问起 = nhắc đến, hỏi đến. Ôn: 起床 (HSK1 Bài 11), 看起来 (HSK3 Bài 1); 从……起 (ngữ pháp 4 của bài).",
    "cf": "超 chāo (超市 – HSK1 Bài 6) — cũng có bộ 走",
    "w": "说起 / 起床 / 从……起"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Lúc này đừng nói lung tung, nếu không có thể gây ra hiểu lầm lớn hơn.",
    "answer": "这个时候不要乱说话，否则可能会引起更大的误会。",
    "answerPy": "Zhège shíhou búyào luàn shuōhuà, fǒuzé kěnéng huì yǐnqǐ gèng dà de wùhuì.",
    "note": "Câu của sách (综合练习) + 否则 (Bài 8 · điểm 2).",
    "pair": "否则……引起……"
   },
   {
    "promptLang": "vi",
    "prompt": "Chuyện này thậm chí đã gây sự chú ý của cả trường.",
    "answer": "这件事甚至引起了全校的注意。",
    "answerPy": "Zhè jiàn shì shènzhì yǐnqǐ le quán xiào de zhùyì.",
    "note": "Ôn 甚至 (Bài 3 · điểm 3).",
    "pair": "甚至"
   }
  ]
 },
 {
  "n": 30,
  "zh": "误会",
  "py": "wùhuì",
  "pos": "Danh từ / Động từ",
  "vn": "sự hiểu lầm; hiểu lầm",
  "hv": "ngộ hội",
  "em": "😕",
  "lesson": 3,
  "explain": [
   "Danh từ: sự hiểu lầm (引起误会, 有误会).",
   "Động từ: hiểu sai ý ai: 你误会了 / 别误会我."
  ],
  "usage": "引起误会 · 有误会 · 你误会了 · 别误会.",
  "collo": [
   "引起误会",
   "有误会",
   "误会了他",
   "一场误会"
  ],
  "colloFull": [
   {
    "zh": "引起误会",
    "py": "Yǐnqǐ wùhuì",
    "vn": "gây hiểu lầm"
   },
   {
    "zh": "有误会",
    "py": "Yǒu wùhuì",
    "vn": "có hiểu lầm"
   },
   {
    "zh": "误会了他",
    "py": "Wùhuì le tā",
    "vn": "hiểu lầm anh ấy"
   },
   {
    "zh": "一场误会",
    "py": "Yì chǎng wùhuì",
    "vn": "một trận hiểu lầm"
   }
  ],
  "patterns": [
   {
    "s": "Danh từ: 引起 / 有 + 误会",
    "m": ""
   },
   {
    "s": "Động từ: (ai) + 误会 + (ai) / 了",
    "m": ""
   }
  ],
  "ex_zh": "那么交流就很困难，甚至还可能引起误会。",
  "ex_py": "Nàme jiāoliú jiù hěn kùnnán, shènzhì hái kěnéng yǐnqǐ wùhuì.",
  "ex_vn": "Thì giao tiếp sẽ rất khó, thậm chí còn có thể gây hiểu lầm.",
  "exList": [
   {
    "zh": "那么交流就很困难，甚至还可能引起误会。",
    "py": "Nàme jiāoliú jiù hěn kùnnán, shènzhì hái kěnéng yǐnqǐ wùhuì.",
    "vn": "Thì giao tiếp sẽ rất khó, thậm chí còn có thể gây hiểu lầm."
   },
   {
    "zh": "你误会了，我不是那个意思。",
    "py": "Nǐ wùhuì le, wǒ bú shì nàge yìsi.",
    "vn": "Bạn hiểu lầm rồi, ý tôi không phải vậy."
   }
  ],
  "hanzi": [
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
   },
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
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Bạn hiểu lầm rồi, tôi chưa bao giờ nói như vậy.",
    "answer": "你误会了，我从来没这么说过。",
    "answerPy": "Nǐ wùhuì le, wǒ cónglái méi zhème shuō guò.",
    "note": "Ôn 从来 (Bài 9 · điểm 4).",
    "pair": "从来没V过"
   },
   {
    "promptLang": "vi",
    "prompt": "Nếu có hiểu lầm thì nói rõ ra là được.",
    "answer": "要是有误会，说清楚就是了。",
    "answerPy": "Yàoshi yǒu wùhuì, shuō qīngchu jiùshì le.",
    "note": "Ôn 就是了 (Bài 2 · điểm 1) + 要是 (Bài 1).",
    "pair": "要是……，V就是了"
   }
  ]
 },
 {
  "n": 31,
  "zh": "亲爱",
  "py": "qīn'ài",
  "pos": "Tính từ",
  "vn": "thân mến, thân yêu",
  "hv": "thân ái",
  "em": "💌",
  "lesson": 4,
  "explain": [
   "Thân yêu, thân mến — thường dùng 亲爱的 + người ở đầu thư, bài phát biểu, lời chúc: 亲爱的同学们 (các bạn học sinh thân mến)."
  ],
  "usage": "亲爱的 + người (đầu thư, phát biểu).",
  "collo": [
   "亲爱的同学们",
   "亲爱的朋友",
   "亲爱的老师",
   "亲爱的"
  ],
  "colloFull": [
   {
    "zh": "亲爱的同学们",
    "py": "Qīn'ài de tóngxué men",
    "vn": "các bạn học sinh thân mến"
   },
   {
    "zh": "亲爱的朋友",
    "py": "Qīn'ài de péngyou",
    "vn": "bạn thân mến"
   },
   {
    "zh": "亲爱的老师",
    "py": "Qīn'ài de lǎoshī",
    "vn": "thầy cô kính mến"
   },
   {
    "zh": "亲爱的",
    "py": "Qīn'ài de",
    "vn": "anh / em yêu (cách gọi thân mật)"
   }
  ],
  "patterns": [
   {
    "s": "亲爱的 + người：",
    "m": "Mở đầu thư / bài phát biểu"
   }
  ],
  "ex_zh": "亲爱的同学们：今年的“世界环境日”，我们再次开展“绿色生活”活动。",
  "ex_py": "Qīn'ài de tóngxué men: jīnnián de “shìjiè huánjìng rì”, wǒmen zàicì kāizhǎn “lǜsè shēnghuó” huódòng.",
  "ex_vn": "Các bạn học sinh thân mến: Ngày Môi trường Thế giới năm nay, chúng ta lại phát động hoạt động “Sống xanh”.",
  "exList": [
   {
    "zh": "亲爱的同学们：今年的“世界环境日”，我们再次开展“绿色生活”活动。",
    "py": "Qīn'ài de tóngxué men: jīnnián de “shìjiè huánjìng rì”, wǒmen zàicì kāizhǎn “lǜsè shēnghuó” huódòng.",
    "vn": "Các bạn học sinh thân mến: Ngày Môi trường Thế giới năm nay, chúng ta lại phát động hoạt động “Sống xanh”."
   },
   {
    "zh": "亲爱的妈妈，祝您生日快乐！",
    "py": "Qīn'ài de māma, zhù nín shēngrì kuàilè!",
    "vn": "Mẹ yêu quý, chúc mẹ sinh nhật vui vẻ!"
   }
  ],
  "hanzi": [
   {
    "c": "亲",
    "p": "qīn",
    "type": "上下结构 · Trên-dưới (giản thể)",
    "st": 9,
    "ord": "亠+木 trên → 见(biến thể) dưới",
    "rad": "木 (mộc)",
    "mean": "thân thiết, người thân",
    "tip": "Chữ giản thể mang nghĩa THÂN THIẾT, kết hợp 母(mẹ) thành 母亲 = MẸ (người thân thiết nhất).",
    "cf": "新 (xīn – \"mới\", tự dạng gần giống nhưng có bộ 斤\")",
    "w": "母亲 / 父亲 / 亲戚"
   },
   {
    "c": "爱",
    "p": "ài",
    "type": "会意字 · Chữ hội ý",
    "st": 10,
    "ord": "爫 (phẩy, chấm, chấm, phẩy) → 冖 → 友 (ngang, phẩy, ngang phẩy, mác)",
    "rad": "爫 (trảo – bàn tay úp xuống)",
    "mean": "yêu, thích",
    "tip": "Chữ phồn thể 愛 có 心 (trái tim) ở giữa; chữ giản thể thay bằng 友 (bạn): bàn tay 爫 che chở, thương yêu bạn bè → yêu. 可爱 = đáng (可) được yêu → dễ thương. Ôn: 爱 (HSK1 Bài 15), 爱好 (HSK2 Bài 7).",
    "cf": "受 shòu (受到 – HSK3 Bài 9) — dưới là 又, không phải 友",
    "w": "可爱 / 爱好 / 喜爱"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Các bạn thân mến, chúng ta hãy cùng nhau bảo vệ môi trường!",
    "answer": "亲爱的同学们，让我们一起保护环境吧！",
    "answerPy": "Qīn'ài de tóngxué men, ràng wǒmen yìqǐ bǎohù huánjìng ba!",
    "note": "让 + 我们 + V + 吧 (HSK 3).",
    "pair": "亲爱的……"
   },
   {
    "promptLang": "vi",
    "prompt": "Bạn thân mến, bất kể gặp khó khăn gì, tôi cũng sẽ ủng hộ bạn.",
    "answer": "亲爱的朋友，不管遇到什么困难，我都会支持你。",
    "answerPy": "Qīn'ài de péngyou, bùguǎn yùdào shénme kùnnán, wǒ dōu huì zhīchí nǐ.",
    "note": "Ôn 不管……都…… (Bài 8 · điểm 1).",
    "pair": "不管……都……"
   }
  ]
 },
 {
  "n": 32,
  "zh": "再次",
  "py": "zàicì",
  "pos": "Phó từ",
  "vn": "lại một lần nữa, lần nữa",
  "hv": "tái thứ",
  "em": "🔁",
  "lesson": 4,
  "explain": [
   "Phó từ tần suất, đứng trước động từ: làm lại lần thứ hai / thêm lần nữa. Trang trọng, hay dùng trong văn viết, thư, phát biểu (再次感谢！). Xem kỹ ở Ngữ pháp · điểm 4."
  ],
  "usage": "再次 + V · 再次感谢 · 再次见到.",
  "collo": [
   "再次感谢",
   "再次开展",
   "再次见到",
   "再次检查"
  ],
  "colloFull": [
   {
    "zh": "再次感谢",
    "py": "Zàicì gǎnxiè",
    "vn": "một lần nữa cảm ơn"
   },
   {
    "zh": "再次开展",
    "py": "Zàicì kāizhǎn",
    "vn": "lại phát động"
   },
   {
    "zh": "再次见到",
    "py": "Zàicì jiàn dào",
    "vn": "gặp lại lần nữa"
   },
   {
    "zh": "再次检查",
    "py": "Zàicì jiǎnchá",
    "vn": "kiểm tra lại lần nữa"
   }
  ],
  "patterns": [
   {
    "s": "再次 + V (trang trọng) ≈ 再一次 / 又一次",
    "m": "Không nói 又再次 (thừa)"
   }
  ],
  "ex_zh": "今年的“世界环境日”，我们再次开展“绿色生活”活动。",
  "ex_py": "Jīnnián de “shìjiè huánjìng rì”, wǒmen zàicì kāizhǎn “lǜsè shēnghuó” huódòng.",
  "ex_vn": "Ngày Môi trường Thế giới năm nay, chúng ta lại một lần nữa phát động hoạt động “Sống xanh”.",
  "exList": [
   {
    "zh": "今年的“世界环境日”，我们再次开展“绿色生活”活动。",
    "py": "Jīnnián de “shìjiè huánjìng rì”, wǒmen zàicì kāizhǎn “lǜsè shēnghuó” huódòng.",
    "vn": "Ngày Môi trường Thế giới năm nay, chúng ta lại một lần nữa phát động hoạt động “Sống xanh”."
   },
   {
    "zh": "我这次考得不好，下学期想再次参加这个考试。",
    "py": "Wǒ zhè cì kǎo de bù hǎo, xià xuéqī xiǎng zàicì cānjiā zhège kǎoshì.",
    "vn": "Lần này tôi thi không tốt, kỳ sau muốn thi lại kỳ thi này lần nữa."
   }
  ],
  "hanzi": [
   {
    "c": "再",
    "p": "zài",
    "type": "独体字 · Chữ đơn",
    "st": 6,
    "ord": "一→冂→土(biến thể)",
    "rad": "冂 (biến thể)",
    "mean": "lại, lần nữa",
    "tip": "Hình ảnh một vật được xếp CHỒNG THÊM một lần nữa lên trên → LẶP LẠI, LẦN NỮA.",
    "cf": "冉 (rǎn – yếu tố Hán cổ)",
    "w": "再见"
   },
   {
    "c": "次",
    "p": "cì",
    "type": "左右结构 · Trái-phải",
    "st": 6,
    "ord": "冫 (băng) trái → 欠 (khiếm) phải",
    "rad": "冫 (băng – nước đá)",
    "mean": "thứ, lần",
    "tip": "Bộ 冫 + 欠 (thiếu, kém hơn) → đứng SAU, KÉM hơn vị trí đầu tiên, mở rộng thành THỨ HAI, LẦN (đếm số lần).",
    "cf": "次 dễ nhầm với 吹 (chuī – \"thổi\", bộ 口\")",
    "w": "其次 / 一次 / 下次"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Năm sau dù thế nào tôi cũng phải quay lại Cáp Nhĩ Tân lần nữa.",
    "answer": "明年我说什么也得再次去哈尔滨。",
    "answerPy": "Míngnián wǒ shuō shénme yě děi zàicì qù Hā'ěrbīn.",
    "note": "Kết hợp 说什么也得 (điểm 1 bài này).",
    "pair": "说什么也得 + 再次 + V"
   },
   {
    "promptLang": "vi",
    "prompt": "Dù đã thất bại nhưng anh ấy vẫn quyết định thử thêm lần nữa.",
    "answer": "尽管失败了，但是他还是决定再次试一试。",
    "answerPy": "Jǐnguǎn shībài le, dànshì tā háishì juédìng zàicì shì yi shì.",
    "note": "Ôn 尽管……但是…… (Bài 9 · điểm 2).",
    "pair": "尽管……但是……"
   }
  ]
 },
 {
  "n": 33,
  "zh": "开展",
  "py": "kāizhǎn",
  "pos": "Động từ",
  "vn": "triển khai, phát động (hoạt động)",
  "hv": "khai triển",
  "em": "🚀",
  "lesson": 4,
  "explain": [
   "Bắt đầu và đẩy mạnh một hoạt động / phong trào / công việc. Phân biệt: 举办 (tổ chức một sự kiện cụ thể: 举办运动会) — 开展 (triển khai phong trào kéo dài: 开展环保活动)."
  ],
  "usage": "开展活动 · 开展工作 · 积极开展.",
  "collo": [
   "开展活动",
   "开展工作",
   "开展研究",
   "积极开展"
  ],
  "colloFull": [
   {
    "zh": "开展活动",
    "py": "Kāizhǎn huódòng",
    "vn": "triển khai hoạt động"
   },
   {
    "zh": "开展工作",
    "py": "Kāizhǎn gōngzuò",
    "vn": "triển khai công việc"
   },
   {
    "zh": "开展研究",
    "py": "Kāizhǎn yánjiū",
    "vn": "tiến hành nghiên cứu"
   },
   {
    "zh": "积极开展",
    "py": "Jījí kāizhǎn",
    "vn": "tích cực triển khai"
   }
  ],
  "patterns": [
   {
    "s": "开展 + 活动 / 工作 / 研究",
    "m": "Tân ngữ là danh từ trừu tượng"
   },
   {
    "s": "开展 (phong trào) ≠ 举办 (sự kiện)",
    "m": "Phân biệt hai từ “tổ chức”"
   }
  ],
  "ex_zh": "今年的“世界环境日”，我们再次开展“绿色生活”活动。",
  "ex_py": "Jīnnián de “shìjiè huánjìng rì”, wǒmen zàicì kāizhǎn “lǜsè shēnghuó” huódòng.",
  "ex_vn": "Ngày Môi trường Thế giới năm nay, chúng ta lại một lần nữa phát động hoạt động “Sống xanh”.",
  "exList": [
   {
    "zh": "今年的“世界环境日”，我们再次开展“绿色生活”活动。",
    "py": "Jīnnián de “shìjiè huánjìng rì”, wǒmen zàicì kāizhǎn “lǜsè shēnghuó” huódòng.",
    "vn": "Ngày Môi trường Thế giới năm nay, chúng ta lại một lần nữa phát động hoạt động “Sống xanh”."
   },
   {
    "zh": "学校开展了“节约用水”活动，大家都积极参加。",
    "py": "Xuéxiào kāizhǎn le “jiéyuē yòng shuǐ” huódòng, dàjiā dōu jījí cānjiā.",
    "vn": "Trường đã phát động hoạt động “Tiết kiệm nước”, mọi người đều tích cực tham gia."
   }
  ],
  "hanzi": [
   {
    "c": "开",
    "p": "kāi",
    "type": "会意字 · Chữ hội ý",
    "st": 4,
    "ord": "ngang → ngang → phẩy → sổ",
    "rad": "廾 (củng – chắp tay)",
    "mean": "mở; bắt đầu; rời ra",
    "tip": "Giản thể của 開 (门 + hai tay mở then cửa) → mở ra. Ôn: 开 (HSK1 Bài 14), 打开 (HSK2 Bài 6), 开始 (HSK2 Bài 7). 离开 = rời ra.",
    "cf": "井 jǐng — có hai nét sổ thẳng",
    "w": "离开 / 打开 / 开会"
   },
   {
    "c": "展",
    "p": "zhǎn",
    "type": "半包围结构 · Bán bao vây",
    "st": 10,
    "ord": "尸 bao ngoài → 屰+ 衣(biến thể) trong",
    "rad": "尸 (thi)",
    "mean": "mở rộng, triển khai",
    "tip": "Chữ mang nghĩa MỞ RỘNG, TRIỂN KHAI, kết hợp 发(phát ra) thành 发展 = PHÁT TRIỂN.",
    "cf": "展 dễ nhầm với 屈 (qū – \"khuất phục\")",
    "w": "发展 / 展开 / 发展方向"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Trường triển khai hoạt động phân loại rác, không chỉ học sinh mà giáo viên cũng phải tham gia.",
    "answer": "学校开展垃圾分类活动，不仅学生要参加，而且老师也要参加。",
    "answerPy": "Xuéxiào kāizhǎn lājī fēnlèi huódòng, bùjǐn xuésheng yào cānjiā, érqiě lǎoshī yě yào cānjiā.",
    "note": "Ôn 不仅……而且…… (Bài 3 · điểm 2).",
    "pair": "不仅……而且……"
   },
   {
    "promptLang": "vi",
    "prompt": "Do thời tiết xấu, hoạt động tuần sau mới triển khai.",
    "answer": "由于天气不好，活动下个星期再开展。",
    "answerPy": "Yóuyú tiānqì bù hǎo, huódòng xià gè xīngqī zài kāizhǎn.",
    "note": "Ôn 由于 (Bài 2 · điểm 4).",
    "pair": "由于……"
   }
  ]
 },
 {
  "n": 34,
  "zh": "绿色",
  "py": "lǜsè",
  "pos": "Tính từ",
  "vn": "xanh, thân thiện với môi trường",
  "hv": "lục sắc",
  "em": "🌱",
  "lesson": 4,
  "explain": [
   "Nghĩa gốc: màu xanh lá. Bài này: “xanh” = thân thiện với môi trường, sạch, không ô nhiễm: 绿色出行 (đi lại xanh), 绿色生活 (sống xanh), 绿色食品 (thực phẩm sạch)."
  ],
  "usage": "绿色 + 出行 / 生活 / 食品 / 交通方式.",
  "collo": [
   "绿色出行",
   "绿色生活",
   "绿色食品",
   "绿色交通方式"
  ],
  "colloFull": [
   {
    "zh": "绿色出行",
    "py": "Lǜsè chū xíng",
    "vn": "đi lại xanh"
   },
   {
    "zh": "绿色生活",
    "py": "Lǜsè shēnghuó",
    "vn": "sống xanh"
   },
   {
    "zh": "绿色食品",
    "py": "Lǜsè shí pǐn",
    "vn": "thực phẩm sạch"
   },
   {
    "zh": "绿色交通方式",
    "py": "Lǜsè jiāotōng fāngshì",
    "vn": "phương tiện giao thông xanh"
   }
  ],
  "patterns": [
   {
    "s": "绿色 + N",
    "m": "“Xanh” = thân thiện môi trường"
   }
  ],
  "ex_zh": "绿色一小步，环保一大步。",
  "ex_py": "Lǜsè yì xiǎo bù, huánbǎo yí dà bù.",
  "ex_vn": "Một bước nhỏ sống xanh, một bước lớn bảo vệ môi trường.",
  "exList": [
   {
    "zh": "绿色一小步，环保一大步。",
    "py": "Lǜsè yì xiǎo bù, huánbǎo yí dà bù.",
    "vn": "Một bước nhỏ sống xanh, một bước lớn bảo vệ môi trường."
   },
   {
    "zh": "现在很多人喜欢买绿色食品。",
    "py": "Xiànzài hěn duō rén xǐhuan mǎi lǜsè shí pǐn.",
    "vn": "Bây giờ nhiều người thích mua thực phẩm sạch."
   }
  ],
  "hanzi": [
   {
    "c": "绿",
    "p": "lǜ",
    "type": "形声字 · Chữ hình thanh",
    "st": 11,
    "ord": "纟 → 录",
    "rad": "纟 (mịch – sợi tơ)",
    "mean": "màu xanh lục",
    "tip": "纟 (sợi tơ) + 录 (chỉ âm): tơ nhuộm màu xanh lục. Ôn 绿色 (HSK2 Bài 4); 红 cũng có bộ 纟.",
    "cf": "录 lù — không có bộ 纟",
    "w": "红绿灯 / 绿色"
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
    "prompt": "Đi lại xanh không chỉ bảo vệ môi trường mà còn tốt cho sức khoẻ.",
    "answer": "绿色出行不仅能保护环境，还对身体好。",
    "answerPy": "Lǜsè chū xíng bùjǐn néng bǎohù huánjìng, hái duì shēntǐ hǎo.",
    "note": "Ôn 不仅……还…… (Bài 3 · điểm 2).",
    "pair": "不仅……还……"
   },
   {
    "promptLang": "vi",
    "prompt": "Nếu quãng đường ngắn thì đi bộ, như vậy vừa xanh vừa tiết kiệm.",
    "answer": "要是距离短，就走路，这样既绿色又节约。",
    "answerPy": "Yàoshi jùlí duǎn, jiù zǒulù, zhèyàng jì lǜsè yòu jiéyuē.",
    "note": "Ôn 既……又…… (Bài 4 · điểm 3) + 要是……就…… (Bài 1).",
    "pair": "既……又……"
   }
  ]
 },
 {
  "n": 35,
  "zh": "环保",
  "py": "huánbǎo",
  "pos": "Danh từ / Tính từ",
  "vn": "bảo vệ môi trường; thân thiện với môi trường",
  "hv": "hoàn bảo",
  "em": "♻️",
  "lesson": 4,
  "explain": [
   "Viết tắt của 环境保护 (bảo vệ môi trường).",
   "Danh từ: công tác bảo vệ môi trường (环保活动); Tính từ: (cách làm, đồ vật) thân thiện môi trường (很环保)."
  ],
  "usage": "环保活动 · 很环保 · 环保知识 · 环保袋.",
  "collo": [
   "环保活动",
   "很环保",
   "环保知识",
   "环保袋"
  ],
  "colloFull": [
   {
    "zh": "环保活动",
    "py": "Huánbǎo huódòng",
    "vn": "hoạt động bảo vệ môi trường"
   },
   {
    "zh": "很环保",
    "py": "Hěn huánbǎo",
    "vn": "rất thân thiện môi trường"
   },
   {
    "zh": "环保知识",
    "py": "Huánbǎo zhīshi",
    "vn": "kiến thức bảo vệ môi trường"
   },
   {
    "zh": "环保袋",
    "py": "Huánbǎo dài",
    "vn": "túi thân thiện môi trường"
   }
  ],
  "patterns": [
   {
    "s": "环保 = 环境保护",
    "m": "Từ viết tắt"
   },
   {
    "s": "N + 很 + 环保",
    "m": "Dùng như tính từ"
   }
  ],
  "ex_zh": "绿色一小步，环保一大步。",
  "ex_py": "Lǜsè yì xiǎo bù, huánbǎo yí dà bù.",
  "ex_vn": "Một bước nhỏ sống xanh, một bước lớn bảo vệ môi trường.",
  "exList": [
   {
    "zh": "绿色一小步，环保一大步。",
    "py": "Lǜsè yì xiǎo bù, huánbǎo yí dà bù.",
    "vn": "Một bước nhỏ sống xanh, một bước lớn bảo vệ môi trường."
   },
   {
    "zh": "用自己的杯子喝咖啡，既方便又环保。",
    "py": "Yòng zìjǐ de bēizi hē kāfēi, jì fāngbiàn yòu huánbǎo.",
    "vn": "Uống cà phê bằng cốc của mình vừa tiện vừa thân thiện môi trường."
   }
  ],
  "hanzi": [
   {
    "c": "环",
    "p": "huán",
    "type": "形声字 · Chữ hình thanh",
    "st": 8,
    "ord": "王 → 不",
    "rad": "王 (ngọc)",
    "mean": "vòng, vòng tròn; bao quanh",
    "tip": "Ngọc (王 = 玉) + 不 (chỉ âm, giản thể): vòng ngọc đeo tay → vòng; vòng bao quanh mình → 环境 (môi trường), 环保.",
    "cf": "坏 huài (hỏng) — bên trái là 土; 还 hái — 不 + 辶",
    "w": "环境 / 环保 / 耳环"
   },
   {
    "c": "保",
    "p": "bǎo",
    "type": "会意字 · Chữ hội ý",
    "st": 9,
    "ord": "亻 → 口 → 木",
    "rad": "亻 (nhân đứng – người)",
    "mean": "giữ gìn, bảo vệ; bảo đảm",
    "tip": "Người 亻 cõng đứa bé (呆 = đầu 口 + thân 木) trên lưng để che chở: bảo vệ — 保护, 保证.",
    "cf": "呆 dāi (ngây ngô) — không có 亻; 堡 bǎo (lô cốt) — thêm 土 dưới",
    "w": "保护 / 保证 / 保持"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Đi xe đạp vừa tiết kiệm tiền vừa thân thiện môi trường.",
    "answer": "骑自行车既省钱又环保。",
    "answerPy": "Qí zìxíngchē jì shěng qián yòu huánbǎo.",
    "note": "Ôn 既……又…… (Bài 4 · điểm 3) + 省 (từ Bài 4).",
    "pair": "既……又……"
   },
   {
    "promptLang": "vi",
    "prompt": "Đã biết rác ảnh hưởng đến môi trường thì phải làm tốt việc bảo vệ môi trường.",
    "answer": "既然知道垃圾会影响环境，就应该做好环保。",
    "answerPy": "Jìrán zhīdao lājī huì yǐngxiǎng huánjìng, jiù yīnggāi zuò hǎo huánbǎo.",
    "note": "Ôn 既然……就…… (Bài 7 · điểm 2).",
    "pair": "既然……就……"
   }
  ]
 },
 {
  "n": 36,
  "zh": "拒绝",
  "py": "jùjué",
  "pos": "Động từ",
  "vn": "từ chối, khước từ",
  "hv": "cự tuyệt",
  "em": "🙅",
  "lesson": 4,
  "explain": [
   "Không nhận, không đồng ý (lời mời, yêu cầu, quà…). Bài này: 拒绝浪费 = nói “không” với lãng phí."
  ],
  "usage": "拒绝 + N / V · 被拒绝 · 拒绝浪费.",
  "collo": [
   "拒绝浪费",
   "拒绝邀请",
   "被拒绝",
   "拒绝别人"
  ],
  "colloFull": [
   {
    "zh": "拒绝浪费",
    "py": "Jùjué làngfèi",
    "vn": "nói không với lãng phí"
   },
   {
    "zh": "拒绝邀请",
    "py": "Jùjué yāoqǐng",
    "vn": "từ chối lời mời"
   },
   {
    "zh": "被拒绝",
    "py": "Bèi jùjué",
    "vn": "bị từ chối"
   },
   {
    "zh": "拒绝别人",
    "py": "Jùjué biérén",
    "vn": "từ chối người khác"
   }
  ],
  "patterns": [
   {
    "s": "拒绝 + N / V",
    "m": "拒绝浪费, 拒绝帮助"
   },
   {
    "s": "被 + (ai) + 拒绝",
    "m": "Câu bị động"
   }
  ],
  "ex_zh": "二、拒绝浪费。节约资源，坚持一水多用、人走灯关、餐餐都“光盘”。",
  "ex_py": "Èr, jùjué làngfèi. Jiéyuē zīyuán, jiānchí yì shuǐ duō yòng, rén zǒu dēng guān, cān cān dōu “guāng pán”.",
  "ex_vn": "Hai, nói không với lãng phí. Tiết kiệm tài nguyên, kiên trì một nước dùng nhiều lần, người đi đèn tắt, bữa nào cũng ăn sạch đĩa.",
  "exList": [
   {
    "zh": "二、拒绝浪费。节约资源，坚持一水多用、人走灯关、餐餐都“光盘”。",
    "py": "Èr, jùjué làngfèi. Jiéyuē zīyuán, jiānchí yì shuǐ duō yòng, rén zǒu dēng guān, cān cān dōu “guāng pán”.",
    "vn": "Hai, nói không với lãng phí. Tiết kiệm tài nguyên, kiên trì một nước dùng nhiều lần, người đi đèn tắt, bữa nào cũng ăn sạch đĩa."
   },
   {
    "zh": "他请我去看电影，我拒绝了。",
    "py": "Tā qǐng wǒ qù kàn diànyǐng, wǒ jùjué le.",
    "vn": "Anh ấy mời tôi đi xem phim, tôi đã từ chối."
   }
  ],
  "hanzi": [
   {
    "c": "拒",
    "p": "jù",
    "type": "左右结构 · Trái-phải",
    "st": 7,
    "ord": "扌 trái → 巨 phải",
    "rad": "扌 (thủ)",
    "mean": "cự tuyệt",
    "tip": "Tay 扌 + 巨(to lớn) → giơ tay đẩy ra → CỰ TUYỆT, TỪ CHỐI.",
    "cf": "距 (jù – khoảng cách)",
    "w": "拒绝"
   },
   {
    "c": "绝",
    "p": "jué",
    "type": "左右结构 · Trái-phải",
    "st": 9,
    "ord": "纟 trái → 色 phải",
    "rad": "纟 (mịch)",
    "mean": "dứt",
    "tip": "Sợi tơ 纟 bị cắt ĐỨT → TUYỆT, DỨT HẲN. 拒绝 = từ chối dứt khoát.",
    "cf": "色 (sè – màu)",
    "w": "拒绝 / 绝对"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Bạn ấy mời tôi ăn cơm, tôi chẳng có gì phải từ chối cả.",
    "answer": "他请我吃饭，我没有什么好拒绝的。",
    "answerPy": "Tā qǐng wǒ chīfàn, wǒ méiyǒu shénme hǎo jùjué de.",
    "note": "Ôn (没)有什么好×的 (Bài 6 · điểm 2).",
    "pair": "没有什么好 + V + 的"
   },
   {
    "promptLang": "vi",
    "prompt": "Dù cô ấy rất muốn đi, nhưng cuối cùng vẫn từ chối.",
    "answer": "尽管她很想去，但是最后还是拒绝了。",
    "answerPy": "Jǐnguǎn tā hěn xiǎng qù, dànshì zuìhòu háishì jùjué le.",
    "note": "Ôn 尽管……但是…… (Bài 9 · điểm 2).",
    "pair": "尽管……但是……"
   }
  ]
 },
 {
  "n": 37,
  "zh": "浪费",
  "py": "làngfèi",
  "pos": "Động từ",
  "vn": "lãng phí",
  "hv": "lãng phí",
  "em": "🗑️",
  "lesson": 4,
  "explain": [
   "Dùng không đúng chỗ, dùng thừa (thời gian, tiền, nước, đồ ăn…). Trái nghĩa: 节约. Hán Việt trùng nghĩa."
  ],
  "usage": "浪费 + 时间 / 钱 / 水 / 食物 · 太浪费了.",
  "collo": [
   "浪费时间",
   "浪费水",
   "浪费钱",
   "太浪费了"
  ],
  "colloFull": [
   {
    "zh": "浪费时间",
    "py": "Làngfèi shíjiān",
    "vn": "lãng phí thời gian"
   },
   {
    "zh": "浪费水",
    "py": "Làngfèi shuǐ",
    "vn": "lãng phí nước"
   },
   {
    "zh": "浪费钱",
    "py": "Làngfèi qián",
    "vn": "phí tiền"
   },
   {
    "zh": "太浪费了",
    "py": "Tài làngfèi le",
    "vn": "lãng phí quá"
   }
  ],
  "patterns": [
   {
    "s": "浪费 + N",
    "m": "浪费时间 / 浪费食物"
   },
   {
    "s": "浪费 ↔ 节约",
    "m": "lãng phí ↔ tiết kiệm"
   }
  ],
  "ex_zh": "二、拒绝浪费。",
  "ex_py": "Èr, jùjué làngfèi.",
  "ex_vn": "Hai, nói không với lãng phí.",
  "exList": [
   {
    "zh": "二、拒绝浪费。",
    "py": "Èr, jùjué làngfèi.",
    "vn": "Hai, nói không với lãng phí."
   },
   {
    "zh": "别浪费时间了，我们快走吧。",
    "py": "Bié làngfèi shíjiān le, wǒmen kuài zǒu ba.",
    "vn": "Đừng phí thời gian nữa, chúng ta mau đi thôi."
   }
  ],
  "hanzi": [
   {
    "c": "浪",
    "p": "làng",
    "type": "左右结构 · Trái-phải",
    "st": 10,
    "ord": "氵 (thủy) trái → 良 (lương) phải",
    "rad": "氵 (thủy – nước)",
    "mean": "sóng nước, buông thả",
    "tip": "Bộ nước 氵 (sóng nước tràn lan, không kiểm soát) + 良(biểu âm) → mở rộng thành BUÔNG THẢ, KHÔNG TIẾT KIỆM, kết hợp 费(tiêu tốn) thành 浪费 = LÃNG PHÍ.",
    "cf": "狼 (láng – \"chó sói\", bộ 犭\")",
    "w": "浪费 / 浪漫 / 波浪"
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
    "prompt": "Gọi nhiều món như vậy, ăn không hết thì lãng phí lắm.",
    "answer": "点这么多菜，吃不了太浪费了。",
    "answerPy": "Diǎn zhème duō cài, chī bù le tài làngfèi le.",
    "note": "Ôn V不了 (Bài 4 · điểm 1).",
    "pair": "V不了"
   },
   {
    "promptLang": "vi",
    "prompt": "Gọi món đủ ăn là được, đừng lãng phí.",
    "answer": "菜点够就行了，别浪费。",
    "answerPy": "Cài diǎn gòu jiù xíng le, bié làngfèi.",
    "note": "Ôn 够 (Bài 5 · điểm 2).",
    "pair": "V + 够"
   }
  ]
 },
 {
  "n": 38,
  "zh": "节约",
  "py": "jiéyuē",
  "pos": "Động từ",
  "vn": "tiết kiệm",
  "hv": "tiết ước",
  "em": "💧",
  "lesson": 4,
  "explain": [
   "Dùng ít, không lãng phí (tài nguyên, nước, điện, thời gian…). Gần nghĩa 省 (Bài 4, khẩu ngữ); 节约 trang trọng hơn. Bẫy Hán Việt: “tiết ước” không liên quan đến “ước hẹn”."
  ],
  "usage": "节约用水 · 节约用电 · 节约资源 · 节约时间.",
  "collo": [
   "节约用水",
   "节约用电",
   "节约资源",
   "节约时间"
  ],
  "colloFull": [
   {
    "zh": "节约用水",
    "py": "Jiéyuē yòng shuǐ",
    "vn": "tiết kiệm nước"
   },
   {
    "zh": "节约用电",
    "py": "Jiéyuē yòng diàn",
    "vn": "tiết kiệm điện"
   },
   {
    "zh": "节约资源",
    "py": "Jiéyuē zīyuán",
    "vn": "tiết kiệm tài nguyên"
   },
   {
    "zh": "节约时间",
    "py": "Jiéyuē shíjiān",
    "vn": "tiết kiệm thời gian"
   }
  ],
  "patterns": [
   {
    "s": "节约 + 用水 / 用电 / 资源 / 时间",
    "m": ""
   },
   {
    "s": "节约 ↔ 浪费",
    "m": "tiết kiệm ↔ lãng phí"
   }
  ],
  "ex_zh": "节约资源，坚持一水多用、人走灯关、餐餐都“光盘”。",
  "ex_py": "Jiéyuē zīyuán, jiānchí yì shuǐ duō yòng, rén zǒu dēng guān, cān cān dōu “guāng pán”.",
  "ex_vn": "Tiết kiệm tài nguyên, kiên trì một nước dùng nhiều lần, người đi đèn tắt, bữa nào cũng ăn sạch đĩa.",
  "exList": [
   {
    "zh": "节约资源，坚持一水多用、人走灯关、餐餐都“光盘”。",
    "py": "Jiéyuē zīyuán, jiānchí yì shuǐ duō yòng, rén zǒu dēng guān, cān cān dōu “guāng pán”.",
    "vn": "Tiết kiệm tài nguyên, kiên trì một nước dùng nhiều lần, người đi đèn tắt, bữa nào cũng ăn sạch đĩa."
   },
   {
    "zh": "每个人平时都应该注意节约用水。",
    "py": "Měi gè rén píngshí dōu yīnggāi zhùyì jiéyuē yòng shuǐ.",
    "vn": "Mỗi người hằng ngày đều nên chú ý tiết kiệm nước."
   }
  ],
  "hanzi": [
   {
    "c": "节",
    "p": "jié",
    "type": "上下结构 · Trên-dưới (giản thể)",
    "st": 5,
    "ord": "艹 (thảo) trên → 卩 dưới",
    "rad": "艹 (thảo)",
    "mean": "đốt, tiết",
    "tip": "Nghĩa gốc là ĐỐT TRE (từng khúc) → mở rộng thành TIẾT/ĐOẠN, dùng làm lượng từ cho tiết học.",
    "cf": "芋 (yù – \"khoai\", cũng bộ 艹)",
    "w": "节 / 节日 / 节约"
   },
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
    "prompt": "Phải tiết kiệm điện, nếu không tiền điện sẽ rất đắt.",
    "answer": "要节约用电，否则电费会很贵。",
    "answerPy": "Yào jiéyuē yòng diàn, fǒuzé diàn fèi huì hěn guì.",
    "note": "Ôn 否则 (Bài 8 · điểm 2) + 费 (từ Bài 4).",
    "pair": "……，否则……"
   },
   {
    "promptLang": "vi",
    "prompt": "Lấy nước mà nói, mỗi người đều nên tiết kiệm.",
    "answer": "拿水来说，每个人都应该节约。",
    "answerPy": "Ná shuǐ láishuō, měi gè rén dōu yīnggāi jiéyuē.",
    "note": "Ôn 拿……来说 (Bài 7 · điểm 3).",
    "pair": "拿……来说"
   }
  ]
 },
 {
  "n": 39,
  "zh": "资源",
  "py": "zīyuán",
  "pos": "Danh từ",
  "vn": "tài nguyên",
  "hv": "tư nguyên",
  "em": "🌍",
  "lesson": 4,
  "explain": [
   "Của cải tự nhiên hoặc xã hội có thể dùng được (nước, rừng, dầu, nhân lực…). Bẫy Hán Việt: “tư nguyên”, nghĩa là tài nguyên."
  ],
  "usage": "节约资源 · 水资源 · 自然资源 · 浪费资源.",
  "collo": [
   "节约资源",
   "水资源",
   "自然资源",
   "浪费资源"
  ],
  "colloFull": [
   {
    "zh": "节约资源",
    "py": "Jiéyuē zīyuán",
    "vn": "tiết kiệm tài nguyên"
   },
   {
    "zh": "水资源",
    "py": "Shuǐ zīyuán",
    "vn": "tài nguyên nước"
   },
   {
    "zh": "自然资源",
    "py": "Zìrán zīyuán",
    "vn": "tài nguyên thiên nhiên"
   },
   {
    "zh": "浪费资源",
    "py": "Làngfèi zīyuán",
    "vn": "lãng phí tài nguyên"
   }
  ],
  "patterns": [
   {
    "s": "水 / 自然 / 网络 + 资源",
    "m": "Các loại tài nguyên"
   }
  ],
  "ex_zh": "节约资源，坚持一水多用、人走灯关。",
  "ex_py": "Jiéyuē zīyuán, jiānchí yì shuǐ duō yòng, rén zǒu dēng guān.",
  "ex_vn": "Tiết kiệm tài nguyên, kiên trì một nước dùng nhiều lần, người đi đèn tắt.",
  "exList": [
   {
    "zh": "节约资源，坚持一水多用、人走灯关。",
    "py": "Jiéyuē zīyuán, jiānchí yì shuǐ duō yòng, rén zǒu dēng guān.",
    "vn": "Tiết kiệm tài nguyên, kiên trì một nước dùng nhiều lần, người đi đèn tắt."
   },
   {
    "zh": "水是非常重要的资源，我们要节约用水。",
    "py": "Shuǐ shì fēicháng zhòngyào de zīyuán, wǒmen yào jiéyuē yòng shuǐ.",
    "vn": "Nước là tài nguyên vô cùng quan trọng, chúng ta phải tiết kiệm nước."
   }
  ],
  "hanzi": [
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
   },
   {
    "c": "源",
    "p": "yuán",
    "type": "形声字 · Chữ hình thanh",
    "st": 13,
    "ord": "氵 → 原",
    "rad": "氵 (thủy – nước)",
    "mean": "nguồn (nước); nguồn gốc",
    "tip": "Nước (氵) + 原 yuán (chỉ âm, cũng nghĩa là “gốc”): chỗ nước bắt đầu chảy ra → nguồn — 资源 (tài nguyên), 来源.",
    "cf": "原 yuán (gốc, vốn) — không có 氵; 愿 yuàn (mong) — dưới có 心",
    "w": "资源 / 来源 / 水源"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Về mặt tiết kiệm tài nguyên, mỗi người đều có thể làm được điều gì đó.",
    "answer": "在节约资源方面，每个人都能做点儿什么。",
    "answerPy": "Zài jiéyuē zīyuán fāngmiàn, měi gè rén dōu néng zuò diǎnr shénme.",
    "note": "Ôn 在……方面 (Bài 7 · điểm 1).",
    "pair": "在……方面"
   },
   {
    "promptLang": "vi",
    "prompt": "Cùng với sự phát triển kinh tế, tài nguyên cần dùng ngày càng nhiều.",
    "answer": "随着经济的发展，需要的资源越来越多。",
    "answerPy": "Suízhe jīngjì de fāzhǎn, xūyào de zīyuán yuèláiyuè duō.",
    "note": "Ôn 随着 (Bài 1 · điểm 3).",
    "pair": "随着……"
   }
  ]
 },
 {
  "n": 40,
  "zh": "光",
  "py": "guāng",
  "pos": "Tính từ",
  "vn": "hết sạch, sạch trơn",
  "hv": "quang",
  "em": "🍽️",
  "lesson": 4,
  "explain": [
   "Đứng sau động từ làm bổ ngữ kết quả: V + 光 = làm hết sạch (吃光, 用光, 卖光). “光盘” = ăn sạch đĩa, không để thừa đồ ăn. Khác 光 phó từ ở Bài 6 (= chỉ, chỉ riêng)."
  ],
  "usage": "吃光 · 用光 · 卖光了 · 光盘.",
  "collo": [
   "吃光",
   "用光",
   "卖光了",
   "光盘"
  ],
  "colloFull": [
   {
    "zh": "吃光",
    "py": "Chī guāng",
    "vn": "ăn sạch"
   },
   {
    "zh": "用光",
    "py": "Yòng guāng",
    "vn": "dùng hết sạch"
   },
   {
    "zh": "卖光了",
    "py": "Mài guāng le",
    "vn": "bán sạch rồi"
   },
   {
    "zh": "光盘",
    "py": "Guāng pán",
    "vn": "ăn sạch đĩa"
   }
  ],
  "patterns": [
   {
    "s": "V + 光 (bổ ngữ kết quả)",
    "m": "Làm cho hết sạch"
   }
  ],
  "ex_zh": "节约资源，坚持一水多用、人走灯关、餐餐都“光盘”。",
  "ex_py": "Jiéyuē zīyuán, jiānchí yì shuǐ duō yòng, rén zǒu dēng guān, cān cān dōu “guāng pán”.",
  "ex_vn": "Tiết kiệm tài nguyên, kiên trì một nước dùng nhiều lần, người đi đèn tắt, bữa nào cũng ăn sạch đĩa.",
  "exList": [
   {
    "zh": "节约资源，坚持一水多用、人走灯关、餐餐都“光盘”。",
    "py": "Jiéyuē zīyuán, jiānchí yì shuǐ duō yòng, rén zǒu dēng guān, cān cān dōu “guāng pán”.",
    "vn": "Tiết kiệm tài nguyên, kiên trì một nước dùng nhiều lần, người đi đèn tắt, bữa nào cũng ăn sạch đĩa."
   },
   {
    "zh": "菜太好吃了，我们一会儿就吃光了。",
    "py": "Cài tài hǎochī le, wǒmen yíhuìr jiù chī guāng le.",
    "vn": "Món ăn ngon quá, chúng tôi một lát đã ăn sạch."
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
    "prompt": "Tiền tiêu hết sạch rồi, tháng này tôi phải tiết kiệm một chút.",
    "answer": "钱都花光了，这个月我得节约一点儿。",
    "answerPy": "Qián dōu huā guāng le, zhège yuè wǒ děi jiéyuē yìdiǎnr.",
    "note": "V + 光; 得 đọc děi (phải).",
    "pair": "V光"
   },
   {
    "promptLang": "vi",
    "prompt": "Cơm ít nhất phải ăn sạch, không được để thừa.",
    "answer": "饭至少得吃光，不能剩。",
    "answerPy": "Fàn zhìshǎo de chī guāng, bù néng shèng.",
    "note": "Ôn 至少 (Bài 5 · điểm 1) + 剩 (từ Bài 4).",
    "pair": "至少"
   }
  ]
 },
 {
  "n": 41,
  "zh": "垃圾",
  "py": "lājī",
  "pos": "Danh từ",
  "vn": "rác, rác thải",
  "hv": "lạp ngập",
  "em": "🚮",
  "lesson": 4,
  "explain": [
   "Rác thải. Đọc lājī (cả hai thanh 1). Cụm hay gặp: 垃圾分类 (phân loại rác), 扔垃圾 (vứt rác)."
  ],
  "usage": "扔垃圾 · 垃圾分类 · 垃圾桶 · 生活垃圾.",
  "collo": [
   "扔垃圾",
   "垃圾分类",
   "垃圾桶",
   "生活垃圾"
  ],
  "colloFull": [
   {
    "zh": "扔垃圾",
    "py": "Rēng lājī",
    "vn": "vứt rác"
   },
   {
    "zh": "垃圾分类",
    "py": "Lājī fēnlèi",
    "vn": "phân loại rác"
   },
   {
    "zh": "垃圾桶",
    "py": "Lājītǒng",
    "vn": "thùng rác"
   },
   {
    "zh": "生活垃圾",
    "py": "Shēnghuó lājī",
    "vn": "rác sinh hoạt"
   }
  ],
  "patterns": [
   {
    "s": "扔 / 倒 + 垃圾",
    "m": "Vứt / đổ rác"
   },
   {
    "s": "垃圾 + 分类",
    "m": "Phân loại rác"
   }
  ],
  "ex_zh": "三、垃圾分类。积极参加校园、小区环保活动，学习垃圾分类知识。",
  "ex_py": "Sān, lājī fēnlèi. Jījí cānjiā xiàoyuán, xiǎoqū huánbǎo huódòng, xuéxí lājī fēnlèi zhīshi.",
  "ex_vn": "Ba, phân loại rác. Tích cực tham gia hoạt động bảo vệ môi trường ở trường, khu dân cư, học kiến thức phân loại rác.",
  "exList": [
   {
    "zh": "三、垃圾分类。积极参加校园、小区环保活动，学习垃圾分类知识。",
    "py": "Sān, lājī fēnlèi. Jījí cānjiā xiàoyuán, xiǎoqū huánbǎo huódòng, xuéxí lājī fēnlèi zhīshi.",
    "vn": "Ba, phân loại rác. Tích cực tham gia hoạt động bảo vệ môi trường ở trường, khu dân cư, học kiến thức phân loại rác."
   },
   {
    "zh": "请不要乱扔垃圾。",
    "py": "Qǐng búyào luàn rēng lājī.",
    "vn": "Xin đừng vứt rác bừa bãi."
   }
  ],
  "hanzi": [
   {
    "c": "垃",
    "p": "lā",
    "type": "形声字 · Chữ hình thanh",
    "st": 8,
    "ord": "土 → 立",
    "rad": "土 (thổ – đất)",
    "mean": "(chỉ dùng trong 垃圾) rác",
    "tip": "Đất (土) + 立 lì (chỉ âm): đất cát vụn vặt bỏ đi → rác; luôn đi đôi với 圾 thành 垃圾.",
    "cf": "拉 lā (kéo) — bên trái là 扌; 位 wèi — bên trái là 亻",
    "w": "垃圾 / 垃圾桶 / 垃圾分类"
   },
   {
    "c": "圾",
    "p": "jī",
    "type": "形声字 · Chữ hình thanh",
    "st": 6,
    "ord": "土 → 及",
    "rad": "土 (thổ – đất)",
    "mean": "(chỉ dùng trong 垃圾) rác",
    "tip": "Đất (土) + 及 jí (chỉ âm): cùng 垃 đều có bộ 土 — đất bụi bỏ đi → 垃圾 (rác). Nhớ: hai chữ “rác” đều đứng trên đất.",
    "cf": "及 jí (kịp) — không có 土; 极 jí — bên trái là 木",
    "w": "垃圾 / 垃圾桶 / 生活垃圾"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Không được vứt rác bừa bãi, nếu không sẽ ảnh hưởng đến môi trường.",
    "answer": "不能乱扔垃圾，否则会影响环境。",
    "answerPy": "Bù néng luàn rēng lājī, fǒuzé huì yǐngxiǎng huánjìng.",
    "note": "Ôn 否则 (Bài 8 · điểm 2) + 乱 (từ Bài 3).",
    "pair": "……，否则……"
   },
   {
    "promptLang": "vi",
    "prompt": "Bất kể đi đâu, anh ấy đều mang rác của mình đi.",
    "answer": "不管去哪儿，他都把自己的垃圾带走。",
    "answerPy": "Bùguǎn qù nǎr, tā dōu bǎ zìjǐ de lājī dài zǒu.",
    "note": "Ôn 不管……都…… (Bài 8 · điểm 1).",
    "pair": "不管……都……"
   }
  ]
 },
 {
  "n": 42,
  "zh": "分类",
  "py": "fēnlèi",
  "pos": "Động từ",
  "vn": "phân loại",
  "hv": "phân loại",
  "em": "🗂️",
  "lesson": 4,
  "explain": [
   "Chia ra thành từng loại. Là động từ ly hợp: có thể tách 分好类 (phân loại xong). Hán Việt trùng nghĩa."
  ],
  "usage": "垃圾分类 · 分类知识 · 把…分好类 · 按…分类.",
  "collo": [
   "垃圾分类",
   "分类知识",
   "分好类",
   "按内容分类"
  ],
  "colloFull": [
   {
    "zh": "垃圾分类",
    "py": "Lājī fēnlèi",
    "vn": "phân loại rác"
   },
   {
    "zh": "分类知识",
    "py": "Fēnlèi zhīshi",
    "vn": "kiến thức phân loại"
   },
   {
    "zh": "分好类",
    "py": "Fēn hǎo lèi",
    "vn": "phân loại xong"
   },
   {
    "zh": "按内容分类",
    "py": "Àn nèiróng fēnlèi",
    "vn": "phân loại theo nội dung"
   }
  ],
  "patterns": [
   {
    "s": "把 + N + 分好类",
    "m": "Ly hợp: 分 + 好 + 类"
   },
   {
    "s": "N + 分类",
    "m": "垃圾分类 = phân loại rác"
   }
  ],
  "ex_zh": "学习垃圾分类知识，从小事做起，做好垃圾分类。",
  "ex_py": "Xuéxí lājī fēnlèi zhīshi, cóng xiǎoshì zuò qǐ, zuò hǎo lājī fēnlèi.",
  "ex_vn": "Học kiến thức phân loại rác, bắt đầu từ việc nhỏ, làm tốt việc phân loại rác.",
  "exList": [
   {
    "zh": "学习垃圾分类知识，从小事做起，做好垃圾分类。",
    "py": "Xuéxí lājī fēnlèi zhīshi, cóng xiǎoshì zuò qǐ, zuò hǎo lājī fēnlèi.",
    "vn": "Học kiến thức phân loại rác, bắt đầu từ việc nhỏ, làm tốt việc phân loại rác."
   },
   {
    "zh": "图书馆的书都按照内容分类。",
    "py": "Túshūguǎn de shū dōu ànzhào nèiróng fēnlèi.",
    "vn": "Sách của thư viện đều được phân loại theo nội dung. (ôn 按照 – từ Bài 5)"
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
    "prompt": "Phân loại rác vừa không khó vừa có ích.",
    "answer": "垃圾分类既不难，又很有用。",
    "answerPy": "Lājī fēnlèi jì bù nán, yòu hěn yǒuyòng.",
    "note": "Ôn 既……又…… (Bài 4 · điểm 3).",
    "pair": "既……又……"
   },
   {
    "promptLang": "vi",
    "prompt": "Không chỉ ở trường, ở nhà tôi cũng phân loại rác.",
    "answer": "不仅在学校，在家里我也做垃圾分类。",
    "answerPy": "Bùjǐn zài xuéxiào, zài jiā lǐ wǒ yě zuò lājī fēnlèi.",
    "note": "Ôn 不仅……也…… (Bài 3 · điểm 2).",
    "pair": "不仅……也……"
   }
  ]
 },
 {
  "n": 43,
  "zh": "日常",
  "py": "rìcháng",
  "pos": "Tính từ",
  "vn": "hằng ngày, thường ngày",
  "hv": "nhật thường",
  "em": "📅",
  "lesson": 4,
  "explain": [
   "Thuộc về đời sống hằng ngày; thường làm định ngữ đứng trước danh từ: 日常生活, 日常习惯. Phân biệt: 每天 làm trạng ngữ (✗ 我日常跑步 → ✓ 我每天跑步)."
  ],
  "usage": "日常生活 · 日常习惯 · 日常用语 · 日常工作.",
  "collo": [
   "日常生活",
   "日常习惯",
   "日常用语",
   "日常工作"
  ],
  "colloFull": [
   {
    "zh": "日常生活",
    "py": "Rìcháng shēnghuó",
    "vn": "cuộc sống hằng ngày"
   },
   {
    "zh": "日常习惯",
    "py": "Rìcháng xíguàn",
    "vn": "thói quen hằng ngày"
   },
   {
    "zh": "日常用语",
    "py": "Rì chángyòng yǔ",
    "vn": "câu nói thường ngày"
   },
   {
    "zh": "日常工作",
    "py": "Rìcháng gōngzuò",
    "vn": "công việc hằng ngày"
   }
  ],
  "patterns": [
   {
    "s": "日常 + N (định ngữ)",
    "m": "日常生活 / 日常习惯"
   },
   {
    "s": "日常 (định ngữ) ≠ 每天 (trạng ngữ)",
    "m": ""
   }
  ],
  "ex_zh": "同学们，让我们共同努力，让绿色生活成为我们的日常习惯！",
  "ex_py": "Tóngxué men, ràng wǒmen gòngtóng nǔlì, ràng lǜsè shēnghuó chéngwéi wǒmen de rìcháng xíguàn!",
  "ex_vn": "Các bạn ơi, chúng ta hãy cùng nỗ lực, để sống xanh trở thành thói quen hằng ngày của chúng ta!",
  "exList": [
   {
    "zh": "同学们，让我们共同努力，让绿色生活成为我们的日常习惯！",
    "py": "Tóngxué men, ràng wǒmen gòngtóng nǔlì, ràng lǜsè shēnghuó chéngwéi wǒmen de rìcháng xíguàn!",
    "vn": "Các bạn ơi, chúng ta hãy cùng nỗ lực, để sống xanh trở thành thói quen hằng ngày của chúng ta!"
   },
   {
    "zh": "手机已经成为我们日常生活的一部分。",
    "py": "Shǒujī yǐjīng chéngwéi wǒmen rìcháng shēnghuó de yí bùfen.",
    "vn": "Điện thoại đã trở thành một phần cuộc sống thường ngày của chúng ta. (ôn 成为 – từ Bài 1)"
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
    "prompt": "Phân loại rác đã trở thành thói quen hằng ngày của chúng tôi.",
    "answer": "垃圾分类已经成为我们的日常习惯了。",
    "answerPy": "Lājī fēnlèi yǐjīng chéngwéi wǒmen de rìcháng xíguàn le.",
    "note": "成为 (từ Bài 1).",
    "pair": "成为 + 日常习惯"
   },
   {
    "promptLang": "vi",
    "prompt": "Đi lại xanh khiến cuộc sống thường ngày của chúng ta lành mạnh hơn.",
    "answer": "绿色出行使我们的日常生活更健康了。",
    "answerPy": "Lǜsè chū xíng shǐ wǒmen de rìcháng shēnghuó gèng jiànkāng le.",
    "note": "Ôn 使 (Bài 7 · điểm 4).",
    "pair": "A 使 B + Adj"
   }
  ]
 }
];
var wuData = [
 {
  "img": "/images/hsk4v3/bai-10/wu-A.webp",
  "label": "寒假",
  "py": "hánjià",
  "letter": "A"
 },
 {
  "img": "/images/hsk4v3/bai-10/wu-B.webp",
  "label": "温度",
  "py": "wēndù",
  "letter": "B"
 },
 {
  "img": "/images/hsk4v3/bai-10/wu-C.webp",
  "label": "误会",
  "py": "wùhuì",
  "letter": "C"
 },
 {
  "img": "/images/hsk4v3/bai-10/wu-D.webp",
  "label": "植物",
  "py": "zhíwù",
  "letter": "D"
 },
 {
  "img": "/images/hsk4v3/bai-10/wu-E.webp",
  "label": "拒绝",
  "py": "jùjué",
  "letter": "E"
 },
 {
  "img": "/images/hsk4v3/bai-10/wu-F.webp",
  "label": "垃圾",
  "py": "lājī",
  "letter": "F"
 }
];
var dialogData = [
 {
  "scene": "在家里 · Ở nhà (Lưu Minh kể cho Vương Nhất Tuyết nghe một tin anh đọc được trên mạng)",
  "anh": "/images/hsk4v3/bai-10/kv-1.webp",
  "nguoi": [
   {
    "ten": "刘明",
    "anh": "/images/hsk4v3/nv/liuming.webp"
   },
   {
    "ten": "王一雪",
    "anh": "/images/hsk4v3/nv/yixue.webp"
   }
  ],
  "preQuiz": [
   {
    "q": "小伙子去哈尔滨出差，那里的气温降到了多少度？",
    "opts": [
     "零下二十几度",
     "零下十几度",
     "十几度",
     "二十度"
    ],
    "ans": 0
   },
   {
    "q": "“南方不懂北方的冷”是什么意思？",
    "opts": [
     "南方人比北方人更怕冷",
     "南方人不知道北方天天下雪",
     "南方人不知道北方的冬天有多冷",
     "南方人不了解北方的冬天有多长"
    ],
    "ans": 2
   }
  ],
  "lines": [
   {
    "sp": 0,
    "zh": "你看，这个小伙子从广州去哈尔滨出差，没想到哈尔滨的气温降到了零下二十几度，把他冻坏了。",
    "py": "Nǐ kàn, zhège xiǎohuǒzi cóng Guǎngzhōu qù Hā'ěrbīn chūchāi, méi xiǎng dào Hā'ěrbīn de qìwēn jiàng dào le líng xià èr shí jǐ dù, bǎ tā dòng huài le.",
    "vn": "Em xem này, cậu thanh niên này từ Quảng Châu đi công tác Cáp Nhĩ Tân, không ngờ nhiệt độ ở Cáp Nhĩ Tân xuống tới âm hai mươi mấy độ, làm cậu ấy rét cóng luôn."
   },
   {
    "sp": 1,
    "zh": "他一定后悔自己穿少了吧？",
    "py": "Tā yídìng hòuhuǐ zìjǐ chuān shǎo le ba?",
    "vn": "Chắc cậu ấy hối hận vì mình mặc ít quá nhỉ?"
   },
   {
    "sp": 0,
    "zh": "是啊，这就叫南方不懂北方的冷。",
    "py": "Shì a, zhè jiù jiào nánfāng bù dǒng běifāng de lěng.",
    "vn": "Đúng thế, cái này gọi là “phương Nam không hiểu cái lạnh phương Bắc”."
   },
   {
    "sp": 1,
    "zh": "就是呢，冬天北方和南方的温度差别还是很大的。",
    "py": "Jiùshì ne, dōngtiān běifāng hé nánfāng de wēndù chābié háishì hěn dà de.",
    "vn": "Chuẩn luôn, mùa đông nhiệt độ miền Bắc và miền Nam chênh lệch vẫn rất lớn."
   },
   {
    "sp": 0,
    "zh": "所以冬天来北方，尤其是东北，一定要提前查好目的地的天气，看看下不下雪，气温怎么样。",
    "py": "Suǒyǐ dōngtiān lái běifāng, yóuqí shì dōng běi, yídìng yào tíqián chá hǎo mùdìdì de tiānqì, kàn kàn xià bu xià xuě, qìwēn zěnmeyàng.",
    "vn": "Cho nên mùa đông đến miền Bắc, nhất là vùng Đông Bắc, nhất định phải xem trước thời tiết nơi đến, xem có tuyết rơi không, nhiệt độ thế nào."
   },
   {
    "sp": 1,
    "zh": "对。更重要的是，说什么也得穿上厚一点儿的衣服。",
    "py": "Duì. Gèng zhòngyào de shì, shuō shénme yě děi chuān shàng hòu yìdiǎnr de yīfu.",
    "vn": "Đúng. Quan trọng hơn là, dù thế nào cũng phải mặc quần áo dày một chút."
   }
  ]
 },
 {
  "scene": "在校园里 · Trong sân trường (Vương Nhất Phi tan học gặp Trần Thiên Trung và Bạch Gia Nguyệt)",
  "anh": "/images/hsk4v3/bai-10/kv-2.webp",
  "nguoi": [
   {
    "ten": "王一飞",
    "anh": "/images/hsk4v3/nv/yifei.webp"
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
    "q": "白家月春节时打算做什么？",
    "opts": [
     "去广州看花",
     "去广州看海",
     "去哈尔滨过年",
     "去哈尔滨看雪"
    ],
    "ans": 0
   },
   {
    "q": "陈天中春节时去哈尔滨，王一飞担心他什么？",
    "opts": [
     "受不了那里的雪",
     "受不了那里的气温",
     "不爱吃那里的食物",
     "听不懂那里的人说话"
    ],
    "ans": 1
   }
  ],
  "lines": [
   {
    "sp": 0,
    "zh": "寒假你们打算做什么呢？",
    "py": "Hánjià nǐmen dǎsuàn zuò shénme ne?",
    "vn": "Nghỉ đông các cậu định làm gì thế?"
   },
   {
    "sp": 1,
    "zh": "我们刚刚还说呢，家月春节时要去广州，我计划去哈尔滨。",
    "py": "Wǒmen gānggāng hái shuō ne, Jiāyuè chūn jié shí yào qù Guǎngzhōu, wǒ jìhuà qù Hā'ěrbīn.",
    "vn": "Bọn mình vừa nói chuyện này xong, Tết Gia Nguyệt sẽ đi Quảng Châu, còn mình định đi Cáp Nhĩ Tân."
   },
   {
    "sp": 0,
    "zh": "那时候广州暖和，但哈尔滨特别冷，气温一般都低于零下十摄氏度甚至零下二十摄氏度，这么低的温度你受不了吧？",
    "py": "Nà shíhou Guǎngzhōu nuǎnhuo, dàn Hā'ěrbīn tèbié lěng, qìwēn yìbān dōu dīyú líng xià shí shèshìdù shènzhì líng xià èr shí shèshìdù, zhème dī de wēndù nǐ shòubuliǎo ba?",
    "vn": "Lúc đó Quảng Châu thì ấm, nhưng Cáp Nhĩ Tân cực lạnh, nhiệt độ thường dưới âm 10 độ C, thậm chí âm 20 độ C, nhiệt độ thấp thế này chắc cậu chịu không nổi đâu nhỉ?"
   },
   {
    "sp": 1,
    "zh": "没问题，受得了，我有的是厚衣服。我去哈尔滨主要是想看雪，听说春节时那里会举办很多活动。",
    "py": "Méi wèntí, shòu de liǎo, wǒ yǒudeshì hòu yīfu. Wǒ qù Hā'ěrbīn zhǔyào shì xiǎng kàn xuě, tīngshuō chūn jié shí nàli huì jǔbàn hěn duō huódòng.",
    "vn": "Không sao, chịu được, áo dày mình có thừa. Mình đi Cáp Nhĩ Tân chủ yếu là muốn ngắm tuyết, nghe nói dịp Tết ở đó tổ chức rất nhiều hoạt động."
   },
   {
    "sp": 2,
    "zh": "我想在广州过年，那里冬天比较暖和。而且我喜欢看花，听说广州的鲜花市场很有名，里面有各种植物。",
    "py": "Wǒ xiǎng zài Guǎngzhōu guònián, nàli dōngtiān bǐjiào nuǎnhuo. Érqiě wǒ xǐhuan kàn huā, tīngshuō Guǎngzhōu de xiān huā shìchǎng hěn yǒumíng, lǐmian yǒu gèzhǒng zhíwù.",
    "vn": "Mình muốn ăn Tết ở Quảng Châu, mùa đông ở đó khá ấm. Hơn nữa mình thích ngắm hoa, nghe nói chợ hoa tươi Quảng Châu rất nổi tiếng, trong đó có đủ loại cây cối."
   },
   {
    "sp": 0,
    "zh": "真不错！听你们这么一说，我也想外出旅游了。",
    "py": "Zhēn búcuò! Tīng nǐmen zhème yì shuō, wǒ yě xiǎng wàichū lǚyóu le.",
    "vn": "Hay thật đấy! Nghe các cậu kể vậy, mình cũng muốn đi du lịch rồi."
   }
  ]
 },
 {
  "scene": "广州与哈尔滨的不同 · Sự khác nhau giữa Quảng Châu và Cáp Nhĩ Tân",
  "anh": "/images/hsk4v3/bai-10/kv-3.webp",
  "nguoi": [
   {
    "ten": "小语",
    "anh": "/images/hsk4v3/nv/xiaoyu.webp"
   }
  ],
  "preQuiz": [
   {
    "q": "广州和哈尔滨之间有多远？",
    "opts": [
     "三千公里",
     "三千多公里",
     "坐飞机要三个小时",
     "坐高铁要三个小时"
    ],
    "ans": 1
   },
   {
    "q": "关于广州和哈尔滨，可以知道什么？",
    "opts": [
     "广州冬天很长",
     "广州人才学普通话",
     "人们讲相同的方言",
     "哈尔滨冬天经常下雪"
    ],
    "ans": 3
   }
  ],
  "lines": [
   {
    "sp": 0,
    "zh": "广州和哈尔滨，一个在南方，一个在北方，两个城市之间的距离有三千多公里，气候也大不相同。",
    "py": "Guǎngzhōu hé Hā'ěrbīn, yí gè zài nánfāng, yí gè zài běifāng, liǎng gè chéngshì zhī jiān de jùlí yǒu sān qiān duō gōnglǐ, qìhòu yě dà bù xiāngtóng.",
    "vn": "Quảng Châu và Cáp Nhĩ Tân, một ở miền Nam, một ở miền Bắc, khoảng cách giữa hai thành phố là hơn ba nghìn ki-lô-mét, khí hậu cũng khác nhau rất nhiều."
   },
   {
    "sp": 0,
    "zh": "广州基本上没有冬天，而哈尔滨的冬天一般会从十月开始，到第二年的三四月才结束。",
    "py": "Guǎngzhōu jīběn shàng méiyǒu dōngtiān, ér Hā'ěrbīn de dōngtiān yìbān huì cóng shí yuè kāishǐ, dào dì èr nián de sān sì yuè cái jiéshù.",
    "vn": "Quảng Châu gần như không có mùa đông, còn mùa đông Cáp Nhĩ Tân thường bắt đầu từ tháng Mười, đến tháng Ba, tháng Tư năm sau mới kết thúc."
   },
   {
    "sp": 0,
    "zh": "广州四季开满鲜花，所以又叫“花城”；哈尔滨冬天冰雪多，所以也叫“冰城”。",
    "py": "Guǎngzhōu sìjì kāi mǎn xiān huā, suǒyǐ yòu jiào “huā chéng”; Hā'ěrbīn dōngtiān bīng xuě duō, suǒyǐ yě jiào “bīng chéng”.",
    "vn": "Quảng Châu bốn mùa hoa nở khắp nơi, nên còn gọi là “Thành phố hoa”; Cáp Nhĩ Tân mùa đông nhiều băng tuyết, nên cũng gọi là “Thành phố băng”."
   },
   {
    "sp": 0,
    "zh": "此外，两地的方言也不一样。",
    "py": "Cǐwài, liǎng dì de fāngyán yě bù yíyàng.",
    "vn": "Ngoài ra, phương ngữ của hai nơi cũng không giống nhau."
   },
   {
    "sp": 0,
    "zh": "哈尔滨方言和普通话听起来比较像，而广州方言和普通话差别较大。",
    "py": "Hā'ěrbīn fāngyán hé pǔtōnghuà tīng qǐlái bǐjiào xiàng, ér Guǎngzhōu fāngyán hé pǔtōnghuà chābié jiào dà.",
    "vn": "Tiếng Cáp Nhĩ Tân nghe khá giống tiếng phổ thông, còn tiếng Quảng Châu thì khác tiếng phổ thông tương đối nhiều."
   },
   {
    "sp": 0,
    "zh": "如果广州人和哈尔滨人都只使用自己的方言，那么交流就很困难，甚至还可能引起误会。",
    "py": "Rúguǒ Guǎngzhōu rén hé Hā'ěrbīn rén dōu zhǐ shǐyòng zìjǐ de fāngyán, nàme jiāoliú jiù hěn kùnnán, shènzhì hái kěnéng yǐnqǐ wùhuì.",
    "vn": "Nếu người Quảng Châu và người Cáp Nhĩ Tân đều chỉ dùng phương ngữ của mình thì giao tiếp sẽ rất khó khăn, thậm chí còn có thể gây hiểu lầm."
   },
   {
    "sp": 0,
    "zh": "其实，中国很多地方都有自己的方言，所以，为了顺利交流，中国人从小都要学习普通话。",
    "py": "Qíshí, Zhōngguó hěn duō dìfang dōu yǒu zìjǐ de fāngyán, suǒyǐ, wèile shùnlì jiāoliú, zhōngguórén cóng xiǎo dōu yào xuéxí pǔtōnghuà.",
    "vn": "Thật ra, nhiều nơi ở Trung Quốc đều có phương ngữ riêng, vì vậy, để giao tiếp thuận lợi, người Trung Quốc từ nhỏ đều phải học tiếng phổ thông."
   }
  ],
  "doan": true
 },
 {
  "scene": "校学生会的活动发起书 · Thư phát động hoạt động của Hội sinh viên trường nhân “Ngày Môi trường Thế giới” (trường của Lưu Tiểu Tuyết)",
  "anh": "/images/hsk4v3/bai-10/kv-4.webp",
  "nguoi": [
   {
    "ten": "小语",
    "anh": "/images/hsk4v3/nv/xiaoyu.webp"
   }
  ],
  "preQuiz": [
   {
    "q": "“世界环境日”时，校学生会再次开展：",
    "opts": [
     "“保护环境”活动",
     "“垃圾分类”活动",
     "“绿色生活”活动",
     "“节约水资源”活动"
    ],
    "ans": 2
   },
   {
    "q": "下列哪项不是课文中说的节约资源的方法？",
    "opts": [
     "人走灯关",
     "少开空调",
     "一水多用",
     "餐餐“光盘”"
    ],
    "ans": 1
   }
  ],
  "lines": [
   {
    "sp": 0,
    "zh": "亲爱的同学们：",
    "py": "Qīn'ài de tóngxué men:",
    "vn": "Các bạn sinh viên thân mến:"
   },
   {
    "sp": 0,
    "zh": "今年的“世界环境日”，我们再次开展“绿色生活”活动，希望同学们做到：",
    "py": "Jīnnián de “shìjiè huánjìng rì”, wǒmen zàicì kāizhǎn “lǜsè shēnghuó” huódòng, xīwàng tóngxué men zuò dào:",
    "vn": "Ngày Môi trường Thế giới năm nay, chúng ta lại một lần nữa phát động hoạt động “Sống xanh”, mong các bạn làm được những điều sau:"
   },
   {
    "sp": 0,
    "zh": "一、绿色出行",
    "py": "Yī, lǜsè chū xíng",
    "vn": "Một, đi lại xanh"
   },
   {
    "sp": 0,
    "zh": "绿色一小步，环保一大步。",
    "py": "Lǜsè yì xiǎo bù, huánbǎo yí dà bù.",
    "vn": "Một bước nhỏ sống xanh, một bước lớn bảo vệ môi trường."
   },
   {
    "sp": 0,
    "zh": "根据距离选择绿色交通方式。",
    "py": "Gēnjù jùlí xuǎnzé lǜsè jiāotōng fāngshì.",
    "vn": "Dựa vào khoảng cách để chọn phương tiện giao thông xanh."
   },
   {
    "sp": 0,
    "zh": "距离短时可以走路或者骑自行车，距离长时多乘坐公交车或者地铁。",
    "py": "Jùlí duǎn shí kěyǐ zǒulù huòzhě qí zìxíngchē, jùlí cháng shí duō chéngzuò gōngjiāochē huòzhě dìtiě.",
    "vn": "Quãng đường ngắn thì có thể đi bộ hoặc đi xe đạp, quãng đường dài thì nên đi xe buýt hoặc tàu điện ngầm."
   },
   {
    "sp": 0,
    "zh": "二、拒绝浪费",
    "py": "Èr, jùjué làngfèi",
    "vn": "Hai, nói không với lãng phí"
   },
   {
    "sp": 0,
    "zh": "节约资源，坚持一水多用、人走灯关、餐餐都“光盘”。",
    "py": "Jiéyuē zīyuán, jiānchí yì shuǐ duō yòng, rén zǒu dēng guān, cān cān dōu “guāng pán”.",
    "vn": "Tiết kiệm tài nguyên, kiên trì một nước dùng nhiều lần, người đi đèn tắt, bữa nào cũng ăn sạch đĩa."
   },
   {
    "sp": 0,
    "zh": "三、垃圾分类",
    "py": "Sān, lājī fēnlèi",
    "vn": "Ba, phân loại rác"
   },
   {
    "sp": 0,
    "zh": "积极参加校园、小区环保活动，学习垃圾分类知识，从小事做起，做好垃圾分类。",
    "py": "Jījí cānjiā xiàoyuán, xiǎoqū huánbǎo huódòng, xuéxí lājī fēnlèi zhīshi, cóng xiǎoshì zuò qǐ, zuò hǎo lājī fēnlèi.",
    "vn": "Tích cực tham gia các hoạt động bảo vệ môi trường trong trường và khu dân cư, học kiến thức phân loại rác, bắt đầu từ những việc nhỏ, làm tốt việc phân loại rác."
   },
   {
    "sp": 0,
    "zh": "保护环境是每一个人的责任。",
    "py": "Bǎohù huánjìng shì měi yí gè rén de zérèn.",
    "vn": "Bảo vệ môi trường là trách nhiệm của mỗi người."
   },
   {
    "sp": 0,
    "zh": "同学们，让我们共同努力，让绿色生活成为我们的日常习惯！",
    "py": "Tóngxué men, ràng wǒmen gòngtóng nǔlì, ràng lǜsè shēnghuó chéngwéi wǒmen de rìcháng xíguàn!",
    "vn": "Các bạn ơi, chúng ta hãy cùng nhau nỗ lực, để sống xanh trở thành thói quen hằng ngày của chúng ta!"
   },
   {
    "sp": 0,
    "zh": "校学生会",
    "py": "Xiào xuésheng huì",
    "vn": "Hội sinh viên trường"
   },
   {
    "sp": 0,
    "zh": "2026年6月5日",
    "py": "2026 nián 6 yuè 5 rì",
    "vn": "Ngày 5 tháng 6 năm 2026"
   }
  ],
  "doan": true
 }
];
var listenData = [
 {
  "audio": "小王，听说你寒假要去哈尔滨？是啊，我想去看冰雪活动。那里的气温一般低于零下十摄氏度，你受得了吗？没问题，我有的是厚衣服。那你说什么也得多带一双厚袜子，别把脚冻坏了。好的，谢谢你提醒我。",
  "questions": [
   {
    "q": "小王寒假去哈尔滨做什么？",
    "opts": [
     "看冰雪活动",
     "出差",
     "学方言"
    ],
    "ans": 0
   },
   {
    "q": "朋友建议小王多带什么？",
    "opts": [
     "厚衣服",
     "厚袜子",
     "热水"
    ],
    "ans": 1
   }
  ]
 },
 {
  "audio": "你刚从广州回来？那里怎么样？冬天特别暖和，有二十几度，而且到处都是鲜花。听说广州话很难懂？是啊，我第一天就因为听不懂广州话而引起了一个误会。后来呢？后来我们都说普通话，就没问题了。",
  "questions": [
   {
    "q": "广州的冬天怎么样？",
    "opts": [
     "很暖和",
     "很冷",
     "经常下雪"
    ],
    "ans": 0
   },
   {
    "q": "说话人为什么引起了误会？",
    "opts": [
     "听不懂广州话",
     "普通话说得不好",
     "走错了路"
    ],
    "ans": 0
   }
  ]
 },
 {
  "audio": "这个星期学校再次开展环保活动，你参加吗？当然参加！这次活动主要做什么？主要是学习垃圾分类知识，还要做到餐餐光盘，拒绝浪费。我平时吃饭常常剩很多，看来以后得节约一点儿了。是啊，保护环境是每个人的责任。",
  "questions": [
   {
    "q": "这次环保活动主要做什么？",
    "opts": [
     "学习垃圾分类知识",
     "骑自行车出行",
     "种植物"
    ],
    "ans": 0
   },
   {
    "q": "说话人以后打算怎么做？",
    "opts": [
     "多买点儿菜",
     "吃饭不再浪费",
     "不参加活动"
    ],
    "ans": 1
   }
  ]
 }
];
var matchData = [
 {
  "left": "气温",
  "right": "降到零下"
 },
 {
  "left": "穿上",
  "right": "厚一点儿的衣服"
 },
 {
  "left": "举办",
  "right": "很多活动"
 },
 {
  "left": "引起",
  "right": "误会"
 },
 {
  "left": "学习",
  "right": "普通话"
 },
 {
  "left": "节约",
  "right": "资源"
 },
 {
  "left": "拒绝",
  "right": "浪费"
 },
 {
  "left": "垃圾",
  "right": "分类"
 },
 {
  "left": "绿色",
  "right": "出行"
 },
 {
  "left": "因为……",
  "right": "而……"
 }
];
var fillData = [
 {
  "pre": "没想到哈尔滨的气温降到了",
  "blank": "零下",
  "post": "二十几度，把他冻坏了。",
  "hint": "(dưới 0 độ, âm)",
  "ans": "零下",
  "exp": "零下 + số + 度 = âm … độ."
 },
 {
  "pre": "他一定",
  "blank": "后悔",
  "post": "自己穿少了吧？",
  "hint": "(hối hận)",
  "ans": "后悔",
  "exp": "后悔 + 自己 + V了."
 },
 {
  "pre": "更重要的是，说什么",
  "blank": "也得",
  "post": "穿上厚一点儿的衣服。",
  "hint": "(cũng phải)",
  "ans": "也得",
  "exp": "说什么也得 + V = dù thế nào cũng phải."
 },
 {
  "pre": "没问题，受得了，我",
  "blank": "有的是",
  "post": "厚衣服。",
  "hint": "(có thừa)",
  "ans": "有的是",
  "exp": "有的是 + N = có rất nhiều."
 },
 {
  "pre": "气温一般都",
  "blank": "低于",
  "post": "零下十摄氏度。",
  "hint": "(thấp hơn)",
  "ans": "低于",
  "exp": "低于 + số liệu."
 },
 {
  "pre": "听说春节时那里会",
  "blank": "举办",
  "post": "很多活动。",
  "hint": "(tổ chức)",
  "ans": "举办",
  "exp": "举办活动 = tổ chức hoạt động."
 },
 {
  "pre": "广州基本上没有冬天，",
  "blank": "而",
  "post": "哈尔滨的冬天一般会从十月开始。",
  "hint": "(còn, trong khi đó)",
  "ans": "而",
  "exp": "而 nối hai vế đối lập."
 },
 {
  "pre": "",
  "blank": "此外",
  "post": "，两地的方言也不一样。",
  "hint": "(ngoài ra)",
  "ans": "此外",
  "exp": "此外 đứng đầu câu bổ sung thông tin."
 },
 {
  "pre": "今年的“世界环境日”，我们",
  "blank": "再次",
  "post": "开展“绿色生活”活动。",
  "hint": "(lại một lần nữa)",
  "ans": "再次",
  "exp": "再次 + V."
 },
 {
  "pre": "让绿色生活成为我们的",
  "blank": "日常",
  "post": "习惯！",
  "hint": "(hằng ngày)",
  "ans": "日常",
  "exp": "日常 + N (định ngữ)."
 }
];
var sortData = [
 {
  "words": [
   "更重要的是",
   "，",
   "说什么",
   "也得",
   "穿上",
   "厚一点儿的",
   "衣服",
   "。"
  ],
  "ans": "更重要的是，说什么也得穿上厚一点儿的衣服。",
  "audio": "更重要的是，说什么也得穿上厚一点儿的衣服。"
 },
 {
  "words": [
   "没问题",
   "，",
   "我",
   "有的是",
   "厚衣服",
   "。"
  ],
  "ans": "没问题，我有的是厚衣服。",
  "audio": "没问题，我有的是厚衣服。"
 },
 {
  "words": [
   "广州方言",
   "和",
   "普通话",
   "差别",
   "较大",
   "。"
  ],
  "ans": "广州方言和普通话差别较大。",
  "audio": "广州方言和普通话差别较大。"
 },
 {
  "words": [
   "这个城市",
   "因为",
   "天气暖和",
   "而",
   "吸引了",
   "很多游客",
   "。"
  ],
  "ans": "这个城市因为天气暖和而吸引了很多游客。",
  "audio": "这个城市因为天气暖和而吸引了很多游客。"
 },
 {
  "words": [
   "我们",
   "再次",
   "开展",
   "“绿色生活”",
   "活动",
   "。"
  ],
  "ans": "我们再次开展“绿色生活”活动。",
  "audio": "我们再次开展“绿色生活”活动。"
 },
 {
  "words": [
   "保护环境",
   "是",
   "每一个人",
   "的",
   "责任",
   "。"
  ],
  "ans": "保护环境是每一个人的责任。",
  "audio": "保护环境是每一个人的责任。"
 }
];
var mcData = [
 {
  "q": "冬天去哈尔滨，说什么＿＿穿上厚一点儿的衣服。",
  "opts": [
   "也得",
   "就是",
   "才能",
   "都是"
  ],
  "ans": 0,
  "exp": "Cấu trúc cố định 「说什么也得×」 = dù thế nào cũng phải."
 },
 {
  "q": "别着急，以后＿＿机会。",
  "opts": [
   "有的是",
   "有的",
   "是有",
   "有一些是"
  ],
  "ans": 0,
  "exp": "有的是 + N = có thừa, thiếu gì."
 },
 {
  "q": "南方冬天很暖和，＿＿北方冬天特别冷。",
  "opts": [
   "而",
   "和",
   "跟",
   "并"
  ],
  "ans": 0,
  "exp": "而 nối hai vế đối lập; 和 / 跟 nối danh từ."
 },
 {
  "q": "这个城市因为天气暖和＿＿吸引了很多游客。",
  "opts": [
   "而",
   "所以",
   "但是",
   "而且"
  ],
  "ans": 0,
  "exp": "因为……而…… (nhân quả)."
 },
 {
  "q": "今年的“世界环境日”，我们＿＿开展“绿色生活”活动。",
  "opts": [
   "再次",
   "从来",
   "偶尔",
   "又再次"
  ],
  "ans": 0,
  "exp": "再次 + V; không nói 又再次."
 },
 {
  "q": "这么低的温度，你受＿＿吗？——没问题，受得了。",
  "opts": [
   "得了",
   "不了",
   "得到",
   "不到"
  ],
  "ans": 0,
  "exp": "Câu hỏi khả năng: V得了吗？ (ôn Bài 4 · điểm 1)."
 },
 {
  "q": "如果只使用自己的方言，交流就很困难，甚至还可能＿＿误会。",
  "opts": [
   "引起",
   "举办",
   "开展",
   "拒绝"
  ],
  "ans": 0,
  "exp": "引起误会 = gây hiểu lầm."
 },
 {
  "q": "每个人平时都应该注意＿＿用水，不要浪费。",
  "opts": [
   "节约",
   "拒绝",
   "使用",
   "分类"
  ],
  "ans": 0,
  "exp": "节约用水 = tiết kiệm nước; trái nghĩa 浪费."
 },
 {
  "q": "——今天太冷了！——＿＿啊，冬天北方和南方的温度差别还是很大的。",
  "opts": [
   "就是",
   "就是了",
   "而且",
   "此外"
  ],
  "ans": 0,
  "exp": "就是 (phó từ) đứng đầu câu đáp = đúng thế; ……就是了 đặt cuối câu (Bài 2)."
 },
 {
  "q": "广州和哈尔滨之间的距离有三千多＿＿。",
  "opts": [
   "公里",
   "度",
   "摄氏度",
   "种"
  ],
  "ans": 0,
  "exp": "公里 = ki-lô-mét, đơn vị khoảng cách."
 }
];
var speakingData = {
 "intro": "Nhấn nút loa nghe câu hỏi (câu hỏi phần Khởi động, câu hỏi đọc hiểu của 4 bài khoá, kể lại bài khoá và hoạt động thảo luận nhóm), rồi tự ghi âm câu trả lời — cố dùng từ mới và 4 điểm ngữ pháp của bài.",
 "questions": [
  {
   "q_zh": "你住的地方气候怎么样？对你们的生活有什么影响？",
   "q_vn": "Khí hậu nơi bạn sống thế nào? Có ảnh hưởng gì đến cuộc sống của mọi người?",
   "hint": "我住在……，那里的气候……。夏天……，而冬天……。所以……",
   "sample": "我住在河内。河内一年有四个季节，夏天很热，气温常常有三十五摄氏度，而冬天比较冷，有时候只有十度左右。由于夏天太热，很多人都不喜欢中午出门，家家都有空调；冬天的时候，大家说什么也得穿上厚一点儿的衣服。此外，天气变化大，很容易感冒，所以要注意身体。",
   "sample_vn": "Tôi sống ở Hà Nội. Hà Nội một năm có bốn mùa, mùa hè rất nóng, nhiệt độ thường 35 độ C, còn mùa đông khá lạnh, có lúc chỉ khoảng 10 độ. Do mùa hè quá nóng, nhiều người không thích ra ngoài buổi trưa, nhà nào cũng có điều hoà; mùa đông thì ai cũng nhất định phải mặc áo dày một chút. Ngoài ra, thời tiết thay đổi nhiều, rất dễ bị cảm, nên phải chú ý sức khoẻ.",
   "note": "Câu hỏi phần Khởi động của sách; dùng 而 (điểm 3), 说什么也得 (điểm 1), 此外 + ôn 由于 (Bài 2)."
  },
  {
   "q_zh": "你喜欢比较冷还是比较热的天气？为什么？",
   "q_vn": "Bạn thích thời tiết hơi lạnh hay hơi nóng? Vì sao?",
   "hint": "我喜欢……的天气。一方面……，另一方面……。不过……",
   "sample": "我喜欢比较冷的天气。一方面，天冷的时候可以穿漂亮的厚衣服，还可以吃火锅；另一方面，我特别怕热，夏天热得我实在受不了。不过太冷也不好，要是气温低于零度，我就不想出门了。",
   "sample_vn": "Tôi thích thời tiết hơi lạnh. Một mặt, trời lạnh có thể mặc áo dày đẹp, lại được ăn lẩu; mặt khác, tôi rất sợ nóng, mùa hè nóng đến mức tôi thật sự chịu không nổi. Có điều quá lạnh cũng không tốt, nếu nhiệt độ dưới 0 độ thì tôi chẳng muốn ra khỏi nhà.",
   "note": "Câu hỏi phần Khởi động của sách; ôn 一方面……另一方面…… (Bài 1), 不过 (Bài 2), 受不了, 低于."
  },
  {
   "q_zh": "小伙子为什么后悔自己穿少了？南方人冬天来北方，刘明和王一雪有什么建议？",
   "q_vn": "Vì sao cậu thanh niên hối hận vì mặc ít? Người miền Nam mùa đông đến miền Bắc, Lưu Minh và Vương Nhất Tuyết có lời khuyên gì?",
   "hint": "因为……，没想到……。他们建议，……一定要提前……，更重要的是，说什么也得……",
   "sample": "因为小伙子从广州去哈尔滨出差，没想到哈尔滨的气温降到了零下二十几度，把他冻坏了。刘明和王一雪建议，冬天来北方，尤其是东北，一定要提前查好目的地的天气，看看下不下雪，气温怎么样。更重要的是，说什么也得穿上厚一点儿的衣服。",
   "sample_vn": "Vì cậu thanh niên từ Quảng Châu đi công tác Cáp Nhĩ Tân, không ngờ nhiệt độ ở đó xuống tới âm hai mươi mấy độ, làm cậu rét cóng. Lưu Minh và Vương Nhất Tuyết khuyên: mùa đông đến miền Bắc, nhất là Đông Bắc, nhất định phải xem trước thời tiết nơi đến; quan trọng hơn, dù thế nào cũng phải mặc áo dày một chút.",
   "note": "Câu hỏi bài khoá 1."
  },
  {
   "q_zh": "请根据提示复述课文一。",
   "q_vn": "Dựa vào gợi ý, kể lại bài khoá 1.",
   "hint": "刘明和王一雪说他在网上看到的一条信息：一个小伙子从广州去……，没想到……。王一雪说，小伙子一定后悔……。刘明说这就叫……。所以，刘明建议，……。王一雪也说，……",
   "sample": "刘明和王一雪说他在网上看到的一条信息：一个小伙子从广州去哈尔滨出差，没想到哈尔滨的气温降到了零下二十几度，把他冻坏了。王一雪说，小伙子一定后悔自己穿少了。刘明说这就叫南方不懂北方的冷。王一雪认为，冬天北方和南方的温度差别还是很大的。所以，刘明建议，冬天来北方，尤其是东北，一定要提前查好目的地的天气，看看下不下雪，气温怎么样。王一雪也说，更重要的是，说什么也得穿上厚一点儿的衣服。",
   "sample_vn": "Lưu Minh kể với Vương Nhất Tuyết một tin trên mạng: một cậu thanh niên từ Quảng Châu đi công tác Cáp Nhĩ Tân, không ngờ nhiệt độ xuống tới âm hai mươi mấy độ, làm cậu rét cóng… Vương Nhất Tuyết cũng nói, quan trọng hơn là dù thế nào cũng phải mặc áo dày một chút.",
   "note": "Bài tập 复述 của sách (trang 109)."
  },
  {
   "q_zh": "春节时，陈天中为什么要去哈尔滨？白家月为什么想在广州过年？",
   "q_vn": "Dịp Tết, vì sao Trần Thiên Trung muốn đi Cáp Nhĩ Tân? Vì sao Bạch Gia Nguyệt muốn ăn Tết ở Quảng Châu?",
   "hint": "陈天中去哈尔滨主要是想……，听说……。白家月想在广州过年，因为……，而且……",
   "sample": "陈天中去哈尔滨主要是想看雪，听说春节时那里会举办很多活动。他不怕冷，因为他有的是厚衣服。白家月想在广州过年，因为那里冬天比较暖和，而且她喜欢看花，听说广州的鲜花市场很有名，里面有各种植物。",
   "sample_vn": "Trần Thiên Trung đi Cáp Nhĩ Tân chủ yếu để ngắm tuyết, nghe nói dịp Tết ở đó tổ chức nhiều hoạt động. Cậu ấy không sợ lạnh vì áo dày có thừa. Bạch Gia Nguyệt muốn ăn Tết ở Quảng Châu vì mùa đông ở đó khá ấm, hơn nữa cô ấy thích ngắm hoa, nghe nói chợ hoa Quảng Châu rất nổi tiếng, có đủ loại cây.",
   "note": "Câu hỏi bài khoá 2; dùng 有的是 (điểm 2)."
  },
  {
   "q_zh": "听完陈天中和白家月的计划，王一飞有什么想法？你寒假有什么计划？",
   "q_vn": "Nghe xong kế hoạch của Trần Thiên Trung và Bạch Gia Nguyệt, Vương Nhất Phi nghĩ gì? Kỳ nghỉ đông của bạn có kế hoạch gì?",
   "hint": "听他们这么一说，王一飞也想……。我寒假打算……",
   "sample": "听他们这么一说，王一飞也想外出旅游了。我寒假打算先回老家过年，接着和朋友去大理玩儿几天，因为那里冬天也很暖和，有的是好看的花。",
   "sample_vn": "Nghe họ kể vậy, Vương Nhất Phi cũng muốn đi du lịch. Kỳ nghỉ đông tôi định về quê ăn Tết trước, tiếp đó đi Đại Lý chơi mấy ngày với bạn, vì mùa đông ở đó cũng ấm, hoa đẹp có khối.",
   "note": "Câu hỏi bài khoá 2; ôn 接着 (Bài 2)."
  },
  {
   "q_zh": "广州和哈尔滨都有哪些不同？中国人为什么从小都要学习普通话？",
   "q_vn": "Quảng Châu và Cáp Nhĩ Tân khác nhau những gì? Vì sao người Trung Quốc từ nhỏ đều phải học tiếng phổ thông?",
   "hint": "广州基本上……，而哈尔滨……。此外，……。因为……，所以为了……",
   "sample": "广州在南方，哈尔滨在北方，两个城市的气候大不相同：广州基本上没有冬天，而哈尔滨的冬天从十月开始，到第二年的三四月才结束。此外，两地的方言也不一样，广州方言和普通话差别较大。中国很多地方都有自己的方言，如果只使用自己的方言，交流就很困难，甚至还可能引起误会，所以为了顺利交流，中国人从小都要学习普通话。",
   "sample_vn": "Quảng Châu ở miền Nam, Cáp Nhĩ Tân ở miền Bắc, khí hậu hai nơi khác nhau rất nhiều… Ngoài ra, phương ngữ hai nơi cũng khác. Nhiều nơi ở Trung Quốc có phương ngữ riêng, nếu chỉ dùng phương ngữ thì giao tiếp rất khó, thậm chí gây hiểu lầm, nên để giao tiếp thuận lợi, người Trung Quốc từ nhỏ đều phải học tiếng phổ thông.",
   "note": "Câu hỏi bài khoá 3; dùng 而 (điểm 3) + 此外 + 甚至 (Bài 3)."
  },
  {
   "q_zh": "请根据提示复述课文三。",
   "q_vn": "Dựa vào gợi ý, kể lại bài khoá 3.",
   "hint": "广州和哈尔滨，一个在……，一个在……，两个城市之间的距离有……，气候……。广州基本上……，而哈尔滨……。此外，……。如果……，那么……。其实，……",
   "sample": "广州和哈尔滨，一个在南方，一个在北方，两个城市之间的距离有三千多公里，气候也大不相同。广州基本上没有冬天，而哈尔滨的冬天一般会从十月开始，到第二年的三四月才结束。广州四季开满鲜花，所以又叫“花城”；哈尔滨冬天冰雪多，所以也叫“冰城”。此外，两地的方言也不一样。哈尔滨方言和普通话听起来比较像，而广州方言和普通话差别较大。如果广州人和哈尔滨人都只使用自己的方言，那么交流就很困难，甚至还可能引起误会。其实，中国很多地方都有自己的方言，所以，为了顺利交流，中国人从小都要学习普通话。",
   "sample_vn": "Quảng Châu và Cáp Nhĩ Tân, một ở miền Nam, một ở miền Bắc, cách nhau hơn ba nghìn ki-lô-mét, khí hậu cũng rất khác… Vì vậy, để giao tiếp thuận lợi, người Trung Quốc từ nhỏ đều phải học tiếng phổ thông.",
   "note": "Bài tập 复述 của sách (trang 113)."
  },
  {
   "q_zh": "怎样做到绿色出行？关于“拒绝浪费”和垃圾分类，应该做些什么？",
   "q_vn": "Làm thế nào để đi lại xanh? Về “nói không với lãng phí” và phân loại rác, nên làm những gì?",
   "hint": "根据距离……：距离短时……，距离长时……。节约资源，坚持……。此外，要积极参加……，学习……",
   "sample": "要根据距离选择绿色交通方式：距离短时可以走路或者骑自行车，距离长时多乘坐公交车或者地铁。拒绝浪费就是要节约资源，坚持一水多用、人走灯关、餐餐都“光盘”。此外，还要积极参加校园、小区环保活动，学习垃圾分类知识，从小事做起，做好垃圾分类。",
   "sample_vn": "Phải chọn phương tiện xanh theo khoảng cách: gần thì đi bộ hoặc xe đạp, xa thì đi xe buýt hoặc tàu điện ngầm. Nói không với lãng phí là tiết kiệm tài nguyên: một nước dùng nhiều lần, người đi đèn tắt, bữa nào cũng ăn sạch đĩa. Ngoài ra, còn phải tích cực tham gia hoạt động bảo vệ môi trường, học kiến thức phân loại rác, làm tốt từ việc nhỏ.",
   "note": "Câu hỏi bài khoá 4."
  },
  {
   "q_zh": "小组讨论：三人一组，说说各自的寒假/暑假旅行计划，包括：打算去哪儿？那里的气候、气温怎么样？根据气候、气温情况，你需要做哪些准备？小组讨论后，选出一位同学向全班介绍大家的计划。",
   "q_vn": "Thảo luận nhóm: nhóm 3 người, mỗi người kể kế hoạch du lịch nghỉ đông / nghỉ hè của mình: định đi đâu? Khí hậu, nhiệt độ ở đó thế nào? Dựa vào khí hậu, nhiệt độ, cần chuẩn bị những gì? Thảo luận xong, chọn một bạn giới thiệu kế hoạch của cả nhóm trước lớp.",
   "hint": "我们组有三个人。……打算寒假去……，那里……，气温一般……。所以他说什么也得……。……想去……，而……。此外，……",
   "sample": "大家好！我们组有三个人，我来介绍一下大家的寒假旅行计划。安妮打算去哈尔滨看冰雪节。那里冬天特别冷，气温一般低于零下十摄氏度，甚至可能到零下二十几度，所以她说什么也得多带几件厚衣服，还要提前查好天气。李文想去广州过年。广州冬天很暖和，有二十度左右，而且有的是鲜花，他只需要带几件薄一点儿的衣服就行了。此外，广州方言和普通话差别较大，他打算先学几句简单的广州话，免得引起误会。我呢，去年去过一次海南，今年计划再次去那儿看海。海南冬天的温度能达到二十几度，所以我要准备好帽子和太阳镜。虽然我们去的地方不一样，准备的东西也不一样，但是大家都很期待这个寒假！",
   "sample_vn": "Chào cả lớp! Nhóm em có ba người, em xin giới thiệu kế hoạch nghỉ đông của nhóm. An Ni định đi Cáp Nhĩ Tân xem lễ hội băng tuyết. Ở đó mùa đông cực lạnh, nhiệt độ thường dưới âm 10 độ C, thậm chí có thể âm hai mươi mấy độ, nên bạn ấy nhất định phải mang thêm mấy chiếc áo dày, còn phải xem trước thời tiết. Lý Văn muốn ăn Tết ở Quảng Châu. Mùa đông Quảng Châu rất ấm, khoảng 20 độ, hoa tươi có khối, bạn ấy chỉ cần mang vài bộ đồ mỏng là được. Ngoài ra, tiếng Quảng Châu khác tiếng phổ thông khá nhiều, nên bạn ấy định học trước vài câu tiếng Quảng đơn giản để khỏi gây hiểu lầm. Còn em, năm ngoái đã đi Hải Nam một lần, năm nay định lại đến đó ngắm biển lần nữa. Mùa đông Hải Nam nhiệt độ có thể lên hai mươi mấy độ, nên em phải chuẩn bị mũ và kính râm. Tuy nơi chúng em đi khác nhau, đồ chuẩn bị cũng khác nhau, nhưng ai cũng rất mong chờ kỳ nghỉ đông này!",
   "note": "Hoạt động 任务活动 · 小组讨论 (thảo luận nhóm) của sách, trang 117–118 — dùng đủ 4 điểm ngữ pháp: 说什么也得, 有的是, 而, 再次 cùng các từ mới về khí hậu."
  }
 ]
};
var translateData = [
 {
  "vi": "Quan trọng hơn là, dù thế nào cũng phải mặc quần áo dày một chút.",
  "zh": "更重要的是，说什么也得穿上厚一点儿的衣服。",
  "py": "Gèng zhòngyào de shì, shuō shénme yě děi chuān shàng hòu yìdiǎnr de yīfu."
 },
 {
  "vi": "Không sao, chịu được, áo dày tớ có thừa.",
  "zh": "没问题，受得了，我有的是厚衣服。",
  "py": "Méi wèntí, shòu de liǎo, wǒ yǒudeshì hòu yīfu."
 },
 {
  "vi": "Quảng Châu gần như không có mùa đông, còn mùa đông Cáp Nhĩ Tân thường bắt đầu từ tháng Mười.",
  "zh": "广州基本上没有冬天，而哈尔滨的冬天一般会从十月开始。",
  "py": "Guǎngzhōu jīběn shàng méiyǒu dōngtiān, ér Hā'ěrbīn de dōngtiān yìbān huì cóng shí yuè kāishǐ."
 },
 {
  "vi": "Ngày Môi trường Thế giới năm nay, chúng ta lại một lần nữa phát động hoạt động “Sống xanh”.",
  "zh": "今年的“世界环境日”，我们再次开展“绿色生活”活动。",
  "py": "Jīnnián de “shìjiè huánjìng rì”, wǒmen zàicì kāizhǎn “lǜsè shēnghuó” huódòng."
 },
 {
  "vi": "Mùa đông nhiệt độ miền Bắc và miền Nam chênh lệch vẫn rất lớn.",
  "zh": "冬天北方和南方的温度差别还是很大的。",
  "py": "Dōngtiān běifāng hé nánfāng de wēndù chābié háishì hěn dà de."
 },
 {
  "vi": "Bảo vệ môi trường là trách nhiệm của mỗi người.",
  "zh": "保护环境是每一个人的责任。",
  "py": "Bǎohù huánjìng shì měi yí gè rén de zérèn."
 }
];
var translateDataRev = [
 {
  "vi": "Không ngờ nhiệt độ ở Cáp Nhĩ Tân xuống tới âm hai mươi mấy độ, làm cậu ấy rét cóng.",
  "zh": "没想到哈尔滨的气温降到了零下二十几度，把他冻坏了。",
  "py": "Méi xiǎng dào Hā'ěrbīn de qìwēn jiàng dào le líng xià èr shí jǐ dù, bǎ tā dòng huài le."
 },
 {
  "vi": "Nhiệt độ thấp thế này chắc cậu chịu không nổi đâu nhỉ?",
  "zh": "这么低的温度你受不了吧？",
  "py": "Zhème dī de wēndù nǐ shòubuliǎo ba?"
 },
 {
  "vi": "Nghe nói chợ hoa tươi Quảng Châu rất nổi tiếng, trong đó có đủ loại cây cối.",
  "zh": "听说广州的鲜花市场很有名，里面有各种植物。",
  "py": "Tīngshuō Guǎngzhōu de xiān huā shìchǎng hěn yǒumíng, lǐmian yǒu gèzhǒng zhíwù."
 },
 {
  "vi": "Nếu chỉ dùng phương ngữ của mình thì giao tiếp sẽ rất khó, thậm chí còn có thể gây hiểu lầm.",
  "zh": "如果只使用自己的方言，那么交流就很困难，甚至还可能引起误会。",
  "py": "Rúguǒ zhǐ shǐyòng zìjǐ de fāngyán, nàme jiāoliú jiù hěn kùnnán, shènzhì hái kěnéng yǐnqǐ wùhuì."
 },
 {
  "vi": "Tiết kiệm tài nguyên, kiên trì một nước dùng nhiều lần, người đi đèn tắt.",
  "zh": "节约资源，坚持一水多用、人走灯关。",
  "py": "Jiéyuē zīyuán, jiānchí yì shuǐ duō yòng, rén zǒu dēng guān."
 }
];
var sgkData = [
 {
  "kieu": "kho",
  "de": "选词填空（一）· 综合练习",
  "vn": "Chọn từ thích hợp điền vào chỗ trống (Bài tập tổng hợp, sách trang 116).",
  "dapSgk": true,
  "tu": [
   "此外",
   "节约",
   "引起",
   "厚",
   "举办"
  ],
  "cau": [
   {
    "s": "这个时候你还是不要乱说话，否则可能会＿＿更大的误会。",
    "dap": [
     "引起"
    ]
   },
   {
    "s": "为了保护环境，我们学校每年都＿＿垃圾分类活动。",
    "dap": [
     "举办"
    ]
   },
   {
    "s": "老师说我们一定要学好知识、打好基础，＿＿，还要多出去走走，了解市场情况。",
    "dap": [
     "此外"
    ]
   },
   {
    "s": "这本书太＿＿了，一个星期都看不完。",
    "dap": [
     "厚"
    ]
   },
   {
    "s": "每个人平时都应该注意＿＿用水，不要浪费。",
    "dap": [
     "节约"
    ]
   }
  ]
 },
 {
  "kieu": "kho",
  "de": "选词填空（二）· 综合练习",
  "vn": "Chọn từ thích hợp điền vào chỗ trống (hội thoại, sách trang 116–117).",
  "dapSgk": true,
  "tu": [
   "受不了",
   "环保",
   "普通话",
   "就是",
   "摄氏度"
  ],
  "cau": [
   {
    "s": "A：老师今天怎么一直咳嗽？　B：＿＿啊，是不是感冒了？",
    "dap": [
     "就是"
    ]
   },
   {
    "s": "A：北京那天只有零下五＿＿，你们还是去了长城？　B：是的，我们去爬了长城。虽然温度低，但风不大，不觉得冷。",
    "dap": [
     "摄氏度"
    ]
   },
   {
    "s": "A：你怎么回来了？　B：那里太冷了，我实在＿＿那儿的气候。",
    "dap": [
     "受不了"
    ]
   },
   {
    "s": "A：不好意思，我＿＿说得不太好。　B：没有啊，我觉得您说得挺好的。",
    "dap": [
     "普通话"
    ]
   },
   {
    "s": "A：这些垃圾不能放在一起，不＿＿。　B：好的，我们马上就把它们分好类。",
    "dap": [
     "环保"
    ]
   }
  ]
 },
 {
  "kieu": "kho",
  "de": "选择合适的内容完成短文",
  "vn": "Chọn nội dung thích hợp (A–D) hoàn thành đoạn văn (sách trang 117).",
  "dapSgk": true,
  "tu": [
   "温度能达到二十几度",
   "而南方的气候比较好",
   "一到冬天",
   "还可以去超市买新鲜的水果和菜等"
  ],
  "cau": [
   {
    "s": "现在，＿＿，越来越多生活在北方，特别是东北的老年人就会到南方生活一段时间。这是因为冬天的北方比较冷，＿＿，很暖和，特别是云南、海南的一些城市，＿＿，很适合老年人。除了气候，在南方城市的生活和北方没有很大差别，老人平时可以去家附近的公园活动活动，＿＿。冬天结束后，老人们才回到自己北方的家。",
    "dap": [
     "一到冬天",
     "而南方的气候比较好",
     "温度能达到二十几度",
     "还可以去超市买新鲜的水果和菜等"
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
    "anh": "/images/hsk4v3/bai-10/bt-1.webp",
    "s": "",
    "tu": "暖和",
    "dap": "春天，随着天气越来越暖和，花都开了。",
    "giai": "Ôn 随着 (Bài 1 · điểm 3) + 越来越 + 暖和 (tính từ): trời ấm dần lên thì hoa nở."
   },
   {
    "anh": "/images/hsk4v3/bai-10/bt-2.webp",
    "s": "",
    "tu": "浪费",
    "dap": "他把剩饭都倒了，这样很浪费。",
    "giai": "Câu chữ 把 + 倒 (đổ, Bài 5); 剩饭 = cơm thừa (剩 – Bài 4); 很浪费 = rất lãng phí."
   },
   {
    "anh": "/images/hsk4v3/bai-10/bt-3.webp",
    "s": "",
    "tu": "后悔",
    "dap": "她很后悔没有认真听课，做作业时很多题都不会做。",
    "giai": "后悔 + 没有 + V = hối hận vì đã không làm gì."
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
  "tieuDe": "Viết đoạn văn về bảo vệ môi trường (写作)",
  "gioiThieu": "Đề 写作 của sách HSK 4 (3.0) yêu cầu viết một đoạn văn ngắn (ít nhất 120 chữ) dựa trên nội dung đã học — lần này là bài văn nghị luận ngắn về TẦM QUAN TRỌNG của bảo vệ môi trường và NHỮNG VIỆC LÀM CỤ THỂ, giống phần 书写 của đề thi HSK 4 mới.",
  "buoc": [
   "Đọc kỹ đề: phải có HAI phần — (1) vì sao bảo vệ môi trường quan trọng, (2) chúng ta nên làm gì cụ thể.",
   "Lập dàn ý theo các câu hỏi gợi ý: mỗi câu hỏi là một ý, viết 1–2 câu cho mỗi ý (môi trường liên quan gì đến cuộc sống, hiện nay có vấn đề gì, đi lại xanh, chống lãng phí, phân loại rác).",
   "Dùng từ mới của bài khoá 4 (绿色、环保、节约、资源、浪费、拒绝、垃圾、分类、日常…) và các điểm ngữ pháp: 而, 说什么也得, 有的是, 再次.",
   "Nối các ý bằng từ nối: 首先 / 其次 / 此外 / 最后; ôn 不仅……还……, 否则, 只要……就…….",
   "Câu mở nêu vấn đề, câu kết kêu gọi mọi người cùng hành động; tự soát số chữ (≥ 120) và lỗi chữ Hán trước khi nộp."
  ]
 },
 "de": "自然环境与人们的生活紧密相关，保护环境意义重大。请围绕环境保护的重要性和具体做法写一篇短文，不少于120字。",
 "prompt": "Môi trường tự nhiên gắn bó chặt chẽ với cuộc sống của con người, bảo vệ môi trường có ý nghĩa vô cùng to lớn. Hãy viết một đoạn văn ngắn xoay quanh tầm quan trọng của việc bảo vệ môi trường và những cách làm cụ thể, không ít hơn 120 chữ.",
 "dan": [
  {
   "hoi": "环境和我们的生活有什么关系？",
   "goiY": "我们吃的、喝的、用的都来自自然环境……；环境好，生活才……"
  },
  {
   "hoi": "现在的环境有哪些问题？",
   "goiY": "垃圾越来越多，有的地方气温越来越高，资源越来越少……"
  },
  {
   "hoi": "出行的时候我们可以怎么做？",
   "goiY": "距离短时走路或者骑自行车，距离长时乘坐公交车或者地铁"
  },
  {
   "hoi": "在日常生活中怎样节约资源、拒绝浪费？",
   "goiY": "一水多用、人走灯关、餐餐“光盘”……"
  },
  {
   "hoi": "关于垃圾分类，我们能做些什么？最后你想对大家说什么？",
   "goiY": "学习垃圾分类知识，从小事做起……；保护环境是每个人的责任，让我们……"
  }
 ],
 "tuNen": [
  "环保",
  "绿色",
  "节约",
  "资源",
  "浪费",
  "拒绝",
  "垃圾",
  "分类",
  "日常",
  "开展",
  "气温",
  "气候",
  "植物",
  "引起",
  "使用"
 ],
 "cauTruc": [
  {
   "ten": "……，而……",
   "nhan": "而",
   "vd": "环境好，我们的生活才会更健康，而环境不好，很多问题都会出现。",
   "khi": "Đối lập: môi trường tốt — môi trường xấu (nêu tầm quan trọng)."
  },
  {
   "ten": "不仅……，还……",
   "nhan": "不仅",
   "vd": "绿色出行不仅能节约资源，还对身体好。",
   "khi": "Nêu nhiều lợi ích của một việc làm."
  },
  {
   "ten": "说什么也得……",
   "nhan": "说什么也得",
   "vd": "不管多忙，我们说什么也得做好垃圾分类。",
   "khi": "Thể hiện quyết tâm, lời kêu gọi mạnh."
  },
  {
   "ten": "此外，……",
   "nhan": "此外",
   "vd": "此外，我们还要节约用水，坚持一水多用。",
   "khi": "Chuyển sang việc làm cụ thể tiếp theo."
  },
  {
   "ten": "让……成为……",
   "nhan": "成为",
   "vd": "让我们共同努力，让绿色生活成为我们的日常习惯！",
   "khi": "Câu KẾT: kêu gọi mọi người cùng hành động."
  }
 ],
 "checklist": [
  "Đủ ít nhất 120 chữ Hán chưa?",
  "Đã có đủ hai phần: tầm quan trọng của bảo vệ môi trường + những việc làm cụ thể chưa?",
  "Đã nêu ít nhất 3 việc làm cụ thể (đi lại xanh, chống lãng phí, phân loại rác…) chưa?",
  "Đã dùng ít nhất 6 từ mới của bài (环保、节约、资源、浪费、垃圾、分类…) và ít nhất 2 điểm ngữ pháp (而、说什么也得、有的是、再次) chưa?",
  "Bài có câu mở (nêu vấn đề) và câu kết (kêu gọi) chưa? Các ý có nối bằng 首先 / 此外 / 最后… chưa?"
 ],
 "model": {
  "zh": "自然环境和我们的生活紧密相关。我们吃的、喝的、用的，都来自自然环境。环境好，我们的生活才会更健康，而环境不好，很多问题都会出现。现在，垃圾越来越多，有的地方气温越来越高，资源也越来越少，所以保护环境意义重大。那么，我们应该怎么做呢？首先，要选择绿色出行。距离短时走路或者骑自行车，距离长时乘坐公交车或者地铁，这样不仅能节约资源，还对身体好。此外，在日常生活中要拒绝浪费，坚持一水多用、人走灯关、餐餐都“光盘”。最后，要学习垃圾分类知识，从小事做起，做好垃圾分类。保护环境是每个人的责任，不管多忙，我们说什么也得做好这些小事。让我们共同努力，让绿色生活成为我们的日常习惯！",
  "py": "Zìrán huánjìng hé wǒmen de shēnghuó jǐn mì xiāngguān. Wǒmen chī de, hē de, yòng de, dōu láizì zìrán huánjìng. Huánjìng hǎo, wǒmen de shēnghuó cái huì gèng jiànkāng, ér huánjìng bù hǎo, hěn duō wèntí dōu huì chūxiàn. Xiànzài, lājī yuèláiyuè duō, yǒude dìfang qìwēn yuèláiyuè gāo, zīyuán yě yuèláiyuè shǎo, suǒyǐ bǎohù huánjìng yìyì zhòngdà. Nàme, wǒmen yīnggāi zěnme zuò ne? Shǒuxiān, yào xuǎnzé lǜsè chū xíng. Jùlí duǎn shí zǒulù huòzhě qí zìxíngchē, jùlí cháng shí chéngzuò gōngjiāochē huòzhě dìtiě, zhèyàng bùjǐn néng jiéyuē zīyuán, hái duì shēntǐ hǎo. Cǐwài, zài rìcháng shēnghuó zhōng yào jùjué làngfèi, jiānchí yì shuǐ duō yòng, rén zǒu dēng guān, cān cān dōu “guāng pán”. Zuìhòu, yào xuéxí lājī fēnlèi zhīshi, cóng xiǎoshì zuò qǐ, zuò hǎo lājī fēnlèi. Bǎohù huánjìng shì měi gè rén de zérèn, bùguǎn duō máng, wǒmen shuō shénme yě děi zuò hǎo zhèxiē xiǎoshì. Ràng wǒmen gòngtóng nǔlì, ràng lǜsè shēnghuó chéngwéi wǒmen de rìcháng xíguàn!"
 }
};
