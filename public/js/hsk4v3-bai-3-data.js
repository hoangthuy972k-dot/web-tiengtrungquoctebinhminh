// HSK 4 (3.0) · Bai 3 — sinh boi tools/hsk4v3/gan.js tu tools/hsk4v3/bai-3/ (dung sua tay).
var vocabData = [
 {
  "n": 1,
  "zh": "十字路口",
  "py": "shízì lùkǒu",
  "pos": "Danh từ",
  "vn": "ngã tư",
  "hv": "thập tự lộ khẩu",
  "em": "🚦",
  "lesson": 1,
  "explain": [
   "Chỗ hai con đường cắt nhau thành hình chữ 十 — ngã tư."
  ],
  "usage": "到十字路口 · 在十字路口 + 向左 / 右转 · 下一个十字路口.",
  "collo": [
   "到十字路口",
   "过十字路口",
   "在十字路口等",
   "下一个十字路口"
  ],
  "colloFull": [
   {
    "zh": "到十字路口",
    "py": "Dào shízì lùkǒu",
    "vn": "đến ngã tư"
   },
   {
    "zh": "过十字路口",
    "py": "Guò shízì lùkǒu",
    "vn": "qua ngã tư"
   },
   {
    "zh": "在十字路口等",
    "py": "Zài shízì lùkǒu děng",
    "vn": "đợi ở ngã tư"
   },
   {
    "zh": "下一个十字路口",
    "py": "Xià yí gè shízì lùkǒu",
    "vn": "ngã tư tiếp theo"
   }
  ],
  "patterns": [
   {
    "s": "到十字路口 + 向左 / 右转",
    "m": "Đến ngã tư thì rẽ trái / phải"
   },
   {
    "s": "十字 = hình chữ 十",
    "m": "Hán Việt “thập tự” — hai đường giao nhau như chữ 十"
   }
  ],
  "ex_zh": "你往前走，到十字路口不要过马路，直接右转就到小区门口了。",
  "ex_py": "Nǐ wǎng qián zǒu, dào shízì lùkǒu búyào guò mǎlù, zhíjiē yòu zhuǎn jiù dào xiǎoqū ménkǒu le.",
  "ex_vn": "Bạn cứ đi thẳng, đến ngã tư đừng sang đường, rẽ phải luôn là tới cổng khu dân cư.",
  "exList": [
   {
    "zh": "你往前走，到十字路口不要过马路，直接右转就到小区门口了。",
    "py": "Nǐ wǎng qián zǒu, dào shízì lùkǒu búyào guò mǎlù, zhíjiē yòu zhuǎn jiù dào xiǎoqū ménkǒu le.",
    "vn": "Bạn cứ đi thẳng, đến ngã tư đừng sang đường, rẽ phải luôn là tới cổng khu dân cư."
   },
   {
    "zh": "到了十字路口，要是不知道怎么走，就用手机地图吧。",
    "py": "Dào le shízì lùkǒu, yàoshi bù zhīdao zěnme zǒu, jiù yòng shǒujī dìtú ba.",
    "vn": "Đến ngã tư, nếu không biết đi thế nào thì dùng bản đồ trên điện thoại nhé."
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
   },
   {
    "c": "路",
    "p": "lù",
    "type": "左右结构 · Trái-phải",
    "st": 13,
    "ord": "足 trái → 各 phải",
    "rad": "足 (túc)",
    "mean": "đường",
    "tip": "Chân 足 + 各 → nơi chân đi → ĐƯỜNG. 公路 = đường công cộng; 路口 (Bài 2); 迷路 (Bài 18); 马路 (Bài 19).",
    "cf": "各 (gè – mỗi)",
    "w": "高速公路 / 路口 / 迷路 / 马路"
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
    "prompt": "Đến ngã tư thứ hai thì rẽ trái.",
    "answer": "到第二个十字路口向左转。",
    "answerPy": "Dào dì èr gè shízì lùkǒu xiàng zuǒ zhuǎn.",
    "note": "Ôn số thứ tự 第 + số + lượng từ (HSK 2–3).",
    "pair": "到……向左转"
   },
   {
    "promptLang": "vi",
    "prompt": "Nếu đến ngã tư rồi mà vẫn chưa thấy cửa hàng thì gọi cho tôi.",
    "answer": "要是到了十字路口还没看见商店，就给我打电话。",
    "answerPy": "Yàoshi dào le shízì lùkǒu hái méi kànjiàn shāngdiàn, jiù gěi wǒ dǎdiànhuà.",
    "note": "Ôn 要是……就…… (Bài 1 · điểm 2).",
    "pair": "要是……就……"
   }
  ]
 },
 {
  "n": 2,
  "zh": "直接",
  "py": "zhíjiē",
  "pos": "Tính từ",
  "vn": "trực tiếp, thẳng",
  "hv": "trực tiếp",
  "em": "➡️",
  "lesson": 1,
  "explain": [
   "Không qua khâu trung gian, không vòng vèo; hay đứng trước động từ: 直接 + V = cứ thế …, … thẳng luôn."
  ],
  "usage": "直接 + V (直接右转 / 直接回家 / 直接告诉).",
  "collo": [
   "直接右转",
   "直接回家",
   "直接告诉",
   "直接联系"
  ],
  "colloFull": [
   {
    "zh": "直接右转",
    "py": "Zhíjiē yòu zhuǎn",
    "vn": "rẽ phải luôn"
   },
   {
    "zh": "直接回家",
    "py": "Zhíjiē huí jiā",
    "vn": "về thẳng nhà"
   },
   {
    "zh": "直接告诉",
    "py": "Zhíjiē gàosu",
    "vn": "nói thẳng"
   },
   {
    "zh": "直接联系",
    "py": "Zhíjiē liánxì",
    "vn": "liên hệ trực tiếp"
   }
  ],
  "patterns": [
   {
    "s": "直接 + V",
    "m": "Làm luôn / làm thẳng, không qua bước khác"
   }
  ],
  "ex_zh": "你往前走，到十字路口不要过马路，直接右转就到小区门口了。",
  "ex_py": "Nǐ wǎng qián zǒu, dào shízì lùkǒu búyào guò mǎlù, zhíjiē yòu zhuǎn jiù dào xiǎoqū ménkǒu le.",
  "ex_vn": "Bạn cứ đi thẳng, đến ngã tư đừng sang đường, rẽ phải luôn là tới cổng khu dân cư.",
  "exList": [
   {
    "zh": "你往前走，到十字路口不要过马路，直接右转就到小区门口了。",
    "py": "Nǐ wǎng qián zǒu, dào shízì lùkǒu búyào guò mǎlù, zhíjiē yòu zhuǎn jiù dào xiǎoqū ménkǒu le.",
    "vn": "Bạn cứ đi thẳng, đến ngã tư đừng sang đường, rẽ phải luôn là tới cổng khu dân cư."
   },
   {
    "zh": "你有任何问题，都可以直接问我。",
    "py": "Nǐ yǒu rènhé wèntí, dōu kěyǐ zhíjiē wèn wǒ.",
    "vn": "Em có bất kỳ vấn đề gì đều có thể hỏi thẳng tôi."
   }
  ],
  "hanzi": [
   {
    "c": "直",
    "p": "zhí",
    "type": "上下结构 · Trên-dưới",
    "st": 8,
    "ord": "十 trên → 目 → 乚 dưới",
    "rad": "目 (mục – mắt)",
    "mean": "thẳng",
    "tip": "Chữ hội ý mắt 目 nhìn THẲNG theo đường 十 → THẲNG, kết hợp 接(nối) thành 直接 = TRỰC TIẾP.",
    "cf": "真 (zhēn – \"thật\", tự dạng gần giống)",
    "w": "直接 / 一直 / 直到"
   },
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
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Tan học tôi không đi đâu cả, về thẳng nhà.",
    "answer": "下课后我哪儿也不去，直接回家。",
    "answerPy": "Xiàkè hòu wǒ nǎr yě bú qù, zhíjiē huí jiā.",
    "note": "Ôn đại từ nghi vấn phiếm chỉ 哪儿也不…… (HSK 3).",
    "pair": "直接 + V"
   },
   {
    "promptLang": "vi",
    "prompt": "Bạn cứ nói thẳng với chủ nhà là được.",
    "answer": "你直接告诉房东就是了。",
    "answerPy": "Nǐ zhíjiē gàosu fángdōng jiù shì le.",
    "note": "Ôn ×就是了 (Bài 2 · điểm 1) + từ 房东 (Bài 2).",
    "pair": "……就是了"
   }
  ]
 },
 {
  "n": 3,
  "zh": "转",
  "py": "zhuǎn",
  "pos": "Động từ",
  "vn": "rẽ, quay (hướng); chuyển, đổi",
  "hv": "chuyển",
  "em": "↪️",
  "lesson": 1,
  "explain": [
   "Đổi hướng đi: 向左转 / 右转 = rẽ trái / rẽ phải.",
   "Còn có nghĩa chuyển, đổi: 转车 (đổi xe), 转告 (nhắn lại)."
  ],
  "usage": "向左转 · 右转 · 左转 · 转车.",
  "collo": [
   "向左转",
   "右转",
   "转车",
   "转身"
  ],
  "colloFull": [
   {
    "zh": "向左转",
    "py": "Xiàng zuǒ zhuǎn",
    "vn": "rẽ trái"
   },
   {
    "zh": "右转",
    "py": "Yòu zhuǎn",
    "vn": "rẽ phải"
   },
   {
    "zh": "转车",
    "py": "Zhuǎn chē",
    "vn": "đổi xe"
   },
   {
    "zh": "转身",
    "py": "Zhuǎn shēn",
    "vn": "quay người lại"
   }
  ],
  "patterns": [
   {
    "s": "(向) + 左 / 右 + 转",
    "m": "Rẽ trái / phải"
   },
   {
    "s": "Bài này đọc zhuǎn (thanh 3)",
    "m": "zhuàn (thanh 4) là “xoay tròn”: 转圈"
   }
  ],
  "ex_zh": "你往前走，到十字路口不要过马路，直接右转就到小区门口了。",
  "ex_py": "Nǐ wǎng qián zǒu, dào shízì lùkǒu búyào guò mǎlù, zhíjiē yòu zhuǎn jiù dào xiǎoqū ménkǒu le.",
  "ex_vn": "Bạn cứ đi thẳng, đến ngã tư đừng sang đường, rẽ phải luôn là tới cổng khu dân cư.",
  "exList": [
   {
    "zh": "你往前走，到十字路口不要过马路，直接右转就到小区门口了。",
    "py": "Nǐ wǎng qián zǒu, dào shízì lùkǒu búyào guò mǎlù, zhíjiē yòu zhuǎn jiù dào xiǎoqū ménkǒu le.",
    "vn": "Bạn cứ đi thẳng, đến ngã tư đừng sang đường, rẽ phải luôn là tới cổng khu dân cư."
   },
   {
    "zh": "前面那个路口左转，就能看到学校了。",
    "py": "Qiánmian nàge lùkǒu zuǒ zhuǎn, jiù néng kàn dào xuéxiào le.",
    "vn": "Ở ngã rẽ phía trước rẽ trái là nhìn thấy trường ngay."
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
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Đi thẳng đến ngã tư rồi rẽ phải.",
    "answer": "往前走，到十字路口再向右转。",
    "answerPy": "Wǎng qián zǒu, dào shízì lùkǒu zài xiàng yòu zhuǎn.",
    "note": "往 + phương hướng + V (HSK 3).",
    "pair": "往……走，再……转"
   },
   {
    "promptLang": "vi",
    "prompt": "Đi đến cổng trường rồi rẽ trái, nhà tôi ở ngay đó.",
    "answer": "走到学校门口以后左转，我家就在那儿。",
    "answerPy": "Zǒu dào xuéxiào ménkǒu yǐhòu zuǒ zhuǎn, wǒ jiā jiù zài nàr.",
    "note": "Bổ ngữ kết quả 走到 + nơi chốn (HSK 3).",
    "pair": "V到 + nơi chốn"
   }
  ]
 },
 {
  "n": 4,
  "zh": "正好",
  "py": "zhènghǎo",
  "pos": "Phó từ / Tính từ",
  "vn": "vừa khéo, vừa đúng lúc; vừa vặn",
  "hv": "chính hảo",
  "em": "🎯",
  "lesson": 1,
  "explain": [
   "Phó từ: tình cờ vừa khéo, đúng lúc (正好我也去那边 = vừa khéo tôi cũng đi về phía đó).",
   "Tính từ: vừa vặn, không thừa không thiếu (这双鞋正好)."
  ],
  "usage": "正好 + (chủ ngữ) + V · ……得正好 · 大小正好.",
  "collo": [
   "正好有空",
   "来得正好",
   "大小正好",
   "正好赶上"
  ],
  "colloFull": [
   {
    "zh": "正好有空",
    "py": "Zhènghǎo yǒu kōng",
    "vn": "vừa khéo rảnh"
   },
   {
    "zh": "来得正好",
    "py": "Lái de zhènghǎo",
    "vn": "đến đúng lúc"
   },
   {
    "zh": "大小正好",
    "py": "Dàxiǎo zhènghǎo",
    "vn": "kích cỡ vừa vặn"
   },
   {
    "zh": "正好赶上",
    "py": "Zhènghǎo gǎn shàng",
    "vn": "vừa kịp"
   }
  ],
  "patterns": [
   {
    "s": "正好 + (chủ ngữ) + V",
    "m": "Vừa khéo / tình cờ đúng lúc"
   },
   {
    "s": "V得正好 / N + 正好",
    "m": "Vừa vặn, đúng mức"
   }
  ],
  "ex_zh": "正好我也去那边，一起走吧。",
  "ex_py": "Zhènghǎo wǒ yě qù nàbiān, yìqǐ zǒu ba.",
  "ex_vn": "Vừa khéo tôi cũng đi về phía đó, đi cùng luôn nhé.",
  "exList": [
   {
    "zh": "正好我也去那边，一起走吧。",
    "py": "Zhènghǎo wǒ yě qù nàbiān, yìqǐ zǒu ba.",
    "vn": "Vừa khéo tôi cũng đi về phía đó, đi cùng luôn nhé."
   },
   {
    "zh": "这件衣服我穿正好，不大也不小。",
    "py": "Zhè jiàn yīfu wǒ chuān zhènghǎo, bú dà yě bù xiǎo.",
    "vn": "Cái áo này tôi mặc vừa khít, không to cũng không nhỏ."
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
    "prompt": "Bạn đến đúng lúc lắm, chúng tôi đang định ăn cơm.",
    "answer": "你来得正好，我们正要吃饭呢。",
    "answerPy": "Nǐ lái de zhènghǎo, wǒmen zhèng yào chīfàn ne.",
    "note": "Bổ ngữ trạng thái V得 + 正好; 正要……呢 = đang định.",
    "pair": "来得正好"
   },
   {
    "promptLang": "vi",
    "prompt": "Lúc chúng tôi đến rạp chiếu phim, phim vừa đúng lúc bắt đầu.",
    "answer": "我们到电影院的时候，电影正好开始了。",
    "answerPy": "Wǒmen dào diànyǐngyuàn de shíhou, diànyǐng zhènghǎo kāishǐ le.",
    "note": "Câu 综合练习 (5) của sách.",
    "pair": "……的时候，……正好……"
   }
  ]
 },
 {
  "n": 5,
  "zh": "熟悉",
  "py": "shúxi",
  "pos": "Động từ",
  "vn": "quen thuộc, thạo, biết rõ",
  "hv": "thục tất",
  "em": "🗺️",
  "lesson": 1,
  "explain": [
   "Biết rõ, quen thuộc vì đã gặp / đã làm nhiều lần; đi với nơi chốn, người, công việc."
  ],
  "usage": "熟悉 + N (熟悉路 / 环境 / 工作) · 不熟悉 · 对……很熟悉.",
  "collo": [
   "熟悉路",
   "熟悉环境",
   "熟悉工作",
   "非常熟悉"
  ],
  "colloFull": [
   {
    "zh": "熟悉路",
    "py": "Shúxi lù",
    "vn": "thạo đường"
   },
   {
    "zh": "熟悉环境",
    "py": "Shúxi huánjìng",
    "vn": "quen môi trường"
   },
   {
    "zh": "熟悉工作",
    "py": "Shúxi gōngzuò",
    "vn": "quen việc"
   },
   {
    "zh": "非常熟悉",
    "py": "Fēicháng shúxi",
    "vn": "rất quen"
   }
  ],
  "patterns": [
   {
    "s": "熟悉 + N",
    "m": "Quen / thạo cái gì (động từ, mang tân ngữ)"
   },
   {
    "s": "对 + N + 很熟悉",
    "m": "Rất quen với …"
   }
  ],
  "ex_zh": "好的。我刚来中国，不熟悉路。",
  "ex_py": "Hǎo de. Wǒ gāng lái Zhōngguó, bù shúxi lù.",
  "ex_vn": "Vâng. Tôi mới đến Trung Quốc, chưa thạo đường.",
  "exList": [
   {
    "zh": "好的。我刚来中国，不熟悉路。",
    "py": "Hǎo de. Wǒ gāng lái Zhōngguó, bù shúxi lù.",
    "vn": "Vâng. Tôi mới đến Trung Quốc, chưa thạo đường."
   },
   {
    "zh": "随着在北京住的时间越来越长，我对这儿越来越熟悉了。",
    "py": "Suízhe zài Běijīng zhù de shíjiān yuèláiyuè cháng, wǒ duì zhèr yuèláiyuè shúxi le.",
    "vn": "Theo thời gian sống ở Bắc Kinh ngày càng lâu, tôi ngày càng quen nơi này."
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
   },
   {
    "c": "悉",
    "p": "xī",
    "type": "上下结构 · Trên-dưới",
    "st": 11,
    "ord": "釆 trên → 心 dưới",
    "rad": "心 (tâm – trái tim)",
    "mean": "biết rõ, tường tận",
    "tip": "Bộ tâm 心 (suy nghĩ, để tâm) ở dưới + 釆 (phân biệt từng chi tiết) → ĐỂ TÂM phân biệt kỹ từng chi tiết = HIỂU RÕ, TƯỜNG TẬN.",
    "cf": "恶 (è – \"xấu\", cũng có bộ 心\" nhưng nghĩa khác hẳn)",
    "w": "熟悉 / 悉心 / 获悉"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Bạn sẽ quen nhanh thôi.",
    "answer": "你很快就会熟悉的。",
    "answerPy": "Nǐ hěn kuài jiù huì shúxi de.",
    "note": "Câu kết bài khoá 1: 会……的 (dự đoán chắc chắn).",
    "pair": "会……的"
   },
   {
    "promptLang": "vi",
    "prompt": "Đường ở đây tôi quen thì quen, chỉ là tên đường tiếng Trung tôi vẫn chưa đọc được.",
    "answer": "这儿的路我熟悉是熟悉，就是中文路名我还看不懂。",
    "answerPy": "Zhèr de lù wǒ shúxi shì shúxi, jiù shì Zhōngwén lù míng wǒ hái kàn bù dǒng.",
    "note": "Kết hợp ×是×，就是…… (Bài 3 · điểm 1).",
    "pair": "×是×，就是……"
   }
  ]
 },
 {
  "n": 6,
  "zh": "正",
  "py": "zhèng",
  "pos": "Tính từ",
  "vn": "ngay, chính (đúng hướng)",
  "hv": "chính",
  "em": "🧭",
  "lesson": 1,
  "explain": [
   "Thẳng, đúng hướng, không lệch: 正南正北 = hướng chính Nam – chính Bắc; 正东正西 = chính Đông – chính Tây."
  ],
  "usage": "正 + 东 / 南 / 西 / 北 · 正对面 · 正中间.",
  "collo": [
   "正南正北",
   "正对面",
   "正中间",
   "正前方"
  ],
  "colloFull": [
   {
    "zh": "正南正北",
    "py": "Zhèng nán zhèng běi",
    "vn": "chính Nam chính Bắc"
   },
   {
    "zh": "正对面",
    "py": "Zhèng duìmiàn",
    "vn": "ngay đối diện"
   },
   {
    "zh": "正中间",
    "py": "Zhèng zhōngjiān",
    "vn": "chính giữa"
   },
   {
    "zh": "正前方",
    "py": "Zhèng qián fāng",
    "vn": "ngay phía trước"
   }
  ],
  "patterns": [
   {
    "s": "正 + phương hướng",
    "m": "Đúng hướng, không lệch"
   },
   {
    "s": "正 (tính từ) ≠ 正在 (đang)",
    "m": "Trong bài này 正 là tính từ chỉ hướng"
   }
  ],
  "ex_zh": "北京大是大，不过这边的路基本上都是正南正北、正东正西的，很好找。",
  "ex_py": "Běijīng dà shì dà, búguò zhèbiān de lù jīběn shàng dōu shì zhèng nán zhèng běi, zhèng dōng zhèng xī de, hěn hǎo zhǎo.",
  "ex_vn": "Bắc Kinh to thì to thật, nhưng đường bên này hầu như đều theo hướng chính Nam – Bắc, chính Đông – Tây, rất dễ tìm.",
  "exList": [
   {
    "zh": "北京大是大，不过这边的路基本上都是正南正北、正东正西的，很好找。",
    "py": "Běijīng dà shì dà, búguò zhèbiān de lù jīběn shàng dōu shì zhèng nán zhèng běi, zhèng dōng zhèng xī de, hěn hǎo zhǎo.",
    "vn": "Bắc Kinh to thì to thật, nhưng đường bên này hầu như đều theo hướng chính Nam – Bắc, chính Đông – Tây, rất dễ tìm."
   },
   {
    "zh": "超市就在学校的正对面。",
    "py": "Chāoshì jiù zài xuéxiào de zhèng duìmiàn.",
    "vn": "Siêu thị nằm ngay đối diện trường."
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
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Ngân hàng ở ngay đối diện công ty chúng tôi.",
    "answer": "银行就在我们公司的正对面。",
    "answerPy": "Yínháng jiù zài wǒmen gōngsī de zhèng duìmiàn.",
    "note": "正对面 = ngay đối diện.",
    "pair": "正对面"
   },
   {
    "promptLang": "vi",
    "prompt": "Đường ở đây đều theo hướng chính Đông – Tây nên rất dễ tìm.",
    "answer": "这儿的路都是正东正西的，所以很好找。",
    "answerPy": "Zhèr de lù dōu shì zhèng dōng zhèng xī de, suǒyǐ hěn hǎo zhǎo.",
    "note": "Ôn 是……的 miêu tả đặc điểm (HSK 3).",
    "pair": "是……的"
   }
  ]
 },
 {
  "n": 7,
  "zh": "目的地",
  "py": "mùdìdì",
  "pos": "Danh từ",
  "vn": "nơi đến, điểm đến",
  "hv": "mục đích địa",
  "em": "📍",
  "lesson": 1,
  "explain": [
   "Nơi mình muốn đến, điểm cuối của chuyến đi."
  ],
  "usage": "找到目的地 · 到达目的地 · 旅游目的地.",
  "collo": [
   "找到目的地",
   "到达目的地",
   "旅游目的地",
   "输入目的地"
  ],
  "colloFull": [
   {
    "zh": "找到目的地",
    "py": "Zhǎo dào mùdìdì",
    "vn": "tìm thấy nơi cần đến"
   },
   {
    "zh": "到达目的地",
    "py": "Dàodá mùdìdì",
    "vn": "đến nơi"
   },
   {
    "zh": "旅游目的地",
    "py": "Lǚyóu mùdìdì",
    "vn": "điểm du lịch"
   },
   {
    "zh": "输入目的地",
    "py": "Shūrù mùdìdì",
    "vn": "nhập điểm đến"
   }
  ],
  "patterns": [
   {
    "s": "找到 / 到达 + 目的地",
    "m": "Tìm thấy / đến nơi"
   },
   {
    "s": "的 trong 目的 đọc dì",
    "m": "目的地 = mùdìdì, không đọc de"
   }
  ],
  "ex_zh": "你也可以用手机地图，很容易就能找到目的地。",
  "ex_py": "Nǐ yě kěyǐ yòng shǒujī dìtú, hěn róngyì jiù néng zhǎo dào mùdìdì.",
  "ex_vn": "Bạn cũng có thể dùng bản đồ trên điện thoại, rất dễ tìm được nơi cần đến.",
  "exList": [
   {
    "zh": "你也可以用手机地图，很容易就能找到目的地。",
    "py": "Nǐ yě kěyǐ yòng shǒujī dìtú, hěn róngyì jiù néng zhǎo dào mùdìdì.",
    "vn": "Bạn cũng có thể dùng bản đồ trên điện thoại, rất dễ tìm được nơi cần đến."
   },
   {
    "zh": "离目的地还有多远？",
    "py": "Lí mùdìdì hái yǒu duō yuǎn?",
    "vn": "Còn cách điểm đến bao xa nữa?"
   }
  ],
  "hanzi": [
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
   },
   {
    "c": "的",
    "p": "dì",
    "type": "左右结构 · Trái-phải",
    "st": 8,
    "ord": "白(bạch) trái → 勺(chước) phải",
    "rad": "白 (bạch – trắng)",
    "mean": "trợ từ định ngữ/sở hữu (của)",
    "tip": "白(rõ ràng, trắng) ghép với 勺(cái muỗng, mượn âm \"dí\") → tạo trợ từ CỦA để nối định ngữ, không mang nghĩa gốc.",
    "cf": "白 (bái – \"trắng\", thiếu bộ 勺 bên phải\")",
    "w": "我的 / 有的 / 你的"
   },
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
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Dùng bản đồ điện thoại, bạn sẽ rất dễ tìm thấy nơi cần đến.",
    "answer": "用手机地图，你很容易就能找到目的地。",
    "answerPy": "Yòng shǒujī dìtú, nǐ hěn róngyì jiù néng zhǎo dào mùdìdì.",
    "note": "Bổ ngữ kết quả 找到 (HSK 3).",
    "pair": "找到 + N"
   },
   {
    "promptLang": "vi",
    "prompt": "Nếu đi tàu điện ngầm thì một tiếng là đến nơi.",
    "answer": "要是坐地铁，一个小时就能到目的地。",
    "answerPy": "Yàoshi zuò dìtiě, yí gè xiǎoshí jiù néng dào mùdìdì.",
    "note": "Ôn 要是……就…… (Bài 1 · điểm 2).",
    "pair": "要是……就……"
   }
  ]
 },
 {
  "n": 8,
  "zh": "下载",
  "py": "xiàzài",
  "pos": "Động từ",
  "vn": "tải về",
  "hv": "hạ tải",
  "em": "📥",
  "lesson": 2,
  "explain": [
   "Tải phần mềm, tài liệu, ảnh… từ mạng về máy tính hoặc điện thoại."
  ],
  "usage": "下载软件 / App · 下载下来 · 下载到手机上.",
  "collo": [
   "下载软件",
   "下载App",
   "免费下载",
   "下载下来"
  ],
  "colloFull": [
   {
    "zh": "下载软件",
    "py": "Xiàzài ruǎnjiàn",
    "vn": "tải phần mềm"
   },
   {
    "zh": "下载App",
    "py": "Xiàzài App",
    "vn": "tải ứng dụng"
   },
   {
    "zh": "免费下载",
    "py": "Miǎnfèi xiàzài",
    "vn": "tải miễn phí"
   },
   {
    "zh": "下载下来",
    "py": "Xiàzài xiàlái",
    "vn": "tải về (máy)"
   }
  ],
  "patterns": [
   {
    "s": "下载 + N",
    "m": "Tải cái gì về"
   },
   {
    "s": "下载 ↔ 上传",
    "m": "Tải về ↔ tải lên"
   }
  ],
  "ex_zh": "前两天和李文喝咖啡时，他帮我下载了微信和支付宝。",
  "ex_py": "Qián liǎng tiān hé Lǐ Wén hē kāfēi shí, tā bāng wǒ xiàzài le Wēixìn hé Zhīfùbǎo.",
  "ex_vn": "Mấy hôm trước lúc uống cà phê với Lý Văn, cậu ấy giúp tôi tải WeChat và Alipay.",
  "exList": [
   {
    "zh": "前两天和李文喝咖啡时，他帮我下载了微信和支付宝。",
    "py": "Qián liǎng tiān hé Lǐ Wén hē kāfēi shí, tā bāng wǒ xiàzài le Wēixìn hé Zhīfùbǎo.",
    "vn": "Mấy hôm trước lúc uống cà phê với Lý Văn, cậu ấy giúp tôi tải WeChat và Alipay."
   },
   {
    "zh": "这个软件可以免费下载。",
    "py": "Zhège ruǎnjiàn kěyǐ miǎnfèi xiàzài.",
    "vn": "Phần mềm này có thể tải miễn phí."
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
    "c": "载",
    "p": "zài",
    "type": "形声字 · Chữ hình thanh",
    "st": 10,
    "ord": "十 → 车 → 戈",
    "rad": "车 (xa – xe)",
    "mean": "chở, chuyên chở; ghi chép",
    "tip": "Xe 车 nằm dưới cái 戈 (giáo) với nét 十 trên đầu: xe chở đồ — 下载 = “chở xuống” dữ liệu về máy.",
    "cf": "栽 zāi (trồng) — thay 车 bằng 木; 戴 dài (đội, đeo)",
    "w": "下载 / 载客 / 记载"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Bạn tải WeChat chưa? Nếu chưa thì tôi giúp bạn tải.",
    "answer": "你下载微信了吗？要是还没有，我就帮你下载。",
    "answerPy": "Nǐ xiàzài Wēixìn le ma? Yàoshi hái méiyǒu, wǒ jiù bāng nǐ xiàzài.",
    "note": "Ôn 要是……就…… (Bài 1 · điểm 2).",
    "pair": "要是……就……"
   },
   {
    "promptLang": "vi",
    "prompt": "Tôi đã tải mấy cuốn sách tiếng Trung về điện thoại rồi.",
    "answer": "我把几本中文书下载到手机上了。",
    "answerPy": "Wǒ bǎ jǐ běn Zhōngwén shū xiàzài dào shǒujī shàng le.",
    "note": "Câu chữ 把 + V到 + nơi chốn (HSK 3).",
    "pair": "把……下载到……"
   }
  ]
 },
 {
  "n": 9,
  "zh": "进行",
  "py": "jìnxíng",
  "pos": "Động từ",
  "vn": "tiến hành",
  "hv": "tiến hành",
  "em": "⚙️",
  "lesson": 2,
  "explain": [
   "Làm một hoạt động có tính chính thức hoặc kéo dài; tân ngữ thường là động từ hai âm tiết: 进行支付, 进行研究, 进行比赛."
  ],
  "usage": "进行 + động từ 2 âm tiết (支付 / 研究 / 交流 / 讨论).",
  "collo": [
   "进行支付",
   "进行研究",
   "进行交流",
   "进行比赛"
  ],
  "colloFull": [
   {
    "zh": "进行支付",
    "py": "Jìnxíng zhīfù",
    "vn": "tiến hành thanh toán"
   },
   {
    "zh": "进行研究",
    "py": "Jìnxíng yánjiū",
    "vn": "tiến hành nghiên cứu"
   },
   {
    "zh": "进行交流",
    "py": "Jìnxíng jiāoliú",
    "vn": "tiến hành giao lưu"
   },
   {
    "zh": "进行比赛",
    "py": "Jìnxíng bǐsài",
    "vn": "tiến hành thi đấu"
   }
  ],
  "patterns": [
   {
    "s": "进行 + V hai âm tiết",
    "m": "✗ 进行吃饭 / ✗ 进行买 — không đi với động từ một âm tiết"
   }
  ],
  "ex_zh": "他帮我下载了微信和支付宝，教我认识里边的汉字，还教我用手机进行支付。",
  "ex_py": "Tā bāng wǒ xiàzài le Wēixìn hé Zhīfùbǎo, jiào wǒ rènshi lǐbian de hànzì, hái jiào wǒ yòng shǒujī jìnxíng zhīfù.",
  "ex_vn": "Cậu ấy giúp tôi tải WeChat và Alipay, dạy tôi nhận mặt chữ Hán trong đó, còn dạy tôi thanh toán bằng điện thoại.",
  "exList": [
   {
    "zh": "他帮我下载了微信和支付宝，教我认识里边的汉字，还教我用手机进行支付。",
    "py": "Tā bāng wǒ xiàzài le Wēixìn hé Zhīfùbǎo, jiào wǒ rènshi lǐbian de hànzì, hái jiào wǒ yòng shǒujī jìnxíng zhīfù.",
    "vn": "Cậu ấy giúp tôi tải WeChat và Alipay, dạy tôi nhận mặt chữ Hán trong đó, còn dạy tôi thanh toán bằng điện thoại."
   },
   {
    "zh": "两国学生在会上进行了交流。",
    "py": "Liǎng guó xuésheng zài huì shàng jìnxíng le jiāoliú.",
    "vn": "Sinh viên hai nước đã giao lưu với nhau tại buổi gặp."
   }
  ],
  "hanzi": [
   {
    "c": "进",
    "p": "jìn",
    "type": "半包围结构 · Bán bao vây (giản thể)",
    "st": 7,
    "ord": "井 trong → 辶 bao",
    "rad": "辶 (sước – đi)",
    "mean": "tiến, vào",
    "tip": "Bộ đi 辶 + 井 → ĐI VÀO, TIẾN, kết hợp 行(làm) thành 进行 = TIẾN HÀNH.",
    "cf": "近 (jìn – \"gần\", cũng bộ 辶)",
    "w": "进行 / 进步 / 进入"
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
    "prompt": "Họ đang tiến hành nghiên cứu về thương mại quốc tế.",
    "answer": "他们正在进行国际贸易方面的研究。",
    "answerPy": "Tāmen zhèngzài jìnxíng guójì mào yì fāngmiàn de yánjiū.",
    "note": "Ôn từ 研究, 国际, 贸易, 方面 (Bài 1).",
    "pair": "进行……研究"
   },
   {
    "promptLang": "vi",
    "prompt": "Cuộc thi sẽ tiến hành vào chiều mai.",
    "answer": "比赛明天下午进行。",
    "answerPy": "Bǐsài míngtiān xiàwǔ jìnxíng.",
    "note": "进行 có thể làm vị ngữ ở cuối câu.",
    "pair": "……进行"
   }
  ]
 },
 {
  "n": 10,
  "zh": "支付",
  "py": "zhīfù",
  "pos": "Động từ",
  "vn": "chi trả, thanh toán",
  "hv": "chi phó",
  "em": "💳",
  "lesson": 2,
  "explain": [
   "Trả tiền — trang trọng hơn 付钱; rất hay gặp trong 手机支付, 扫码支付."
  ],
  "usage": "手机支付 · 扫码支付 · 进行支付 · 用……支付.",
  "collo": [
   "手机支付",
   "扫码支付",
   "支付方式",
   "网上支付"
  ],
  "colloFull": [
   {
    "zh": "手机支付",
    "py": "Shǒujī zhīfù",
    "vn": "thanh toán bằng điện thoại"
   },
   {
    "zh": "扫码支付",
    "py": "Sǎomǎ zhīfù",
    "vn": "quét mã thanh toán"
   },
   {
    "zh": "支付方式",
    "py": "Zhīfù fāngshì",
    "vn": "phương thức thanh toán"
   },
   {
    "zh": "网上支付",
    "py": "Wǎngshàng zhīfù",
    "vn": "thanh toán trực tuyến"
   }
  ],
  "patterns": [
   {
    "s": "用 + công cụ + 支付",
    "m": "Thanh toán bằng …"
   },
   {
    "s": "支付 (trang trọng) ≈ 付钱 (khẩu ngữ)",
    "m": "Nói chuyện hằng ngày hay dùng 付钱 / 付款"
   }
  ],
  "ex_zh": "……还教我用手机进行支付。",
  "ex_py": "…… Hái jiào wǒ yòng shǒujī jìnxíng zhīfù.",
  "ex_vn": "…còn dạy tôi thanh toán bằng điện thoại.",
  "exList": [
   {
    "zh": "……还教我用手机进行支付。",
    "py": "…… Hái jiào wǒ yòng shǒujī jìnxíng zhīfù.",
    "vn": "…còn dạy tôi thanh toán bằng điện thoại."
   },
   {
    "zh": "在中国，买一瓶水也可以用手机支付。",
    "py": "Zài Zhōngguó, mǎi yì píng shuǐ yě kěyǐ yòng shǒujī zhīfù.",
    "vn": "Ở Trung Quốc, mua một chai nước cũng có thể thanh toán bằng điện thoại."
   }
  ],
  "hanzi": [
   {
    "c": "支",
    "p": "zhī",
    "type": "会意字 · Chữ hội ý",
    "st": 4,
    "ord": "十 → 又",
    "rad": "支 (chi – cành)",
    "mean": "chi (tiền); chống đỡ; lượng từ của bút",
    "tip": "Tay 又 cầm một cành tre 十: cành nhánh tách ra — chi tiền ra = 支付.",
    "cf": "技 jì (kỹ) — thêm 扌; 枝 zhī (cành) — thêm 木",
    "w": "支付 / 支付宝 / 一支笔"
   },
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
    "prompt": "Ở đây có thể quét mã thanh toán không?",
    "answer": "这儿可以扫码支付吗？",
    "answerPy": "Zhèr kěyǐ sǎomǎ zhīfù ma?",
    "note": "扫码支付 — cụm cố định của bài (phần Khởi động).",
    "pair": "扫码支付"
   },
   {
    "promptLang": "vi",
    "prompt": "Thanh toán bằng điện thoại một mặt nhanh, mặt khác không cần mang tiền mặt.",
    "answer": "用手机支付，一方面很快，另一方面不用带现金。",
    "answerPy": "Yòng shǒujī zhīfù, yìfāngmiàn hěn kuài, lìngyìfāngmiàn búyòng dài xiànjīn.",
    "note": "Ôn 一方面……另一方面…… (Bài 1 · điểm 4).",
    "pair": "一方面……另一方面……"
   }
  ]
 },
 {
  "n": 11,
  "zh": "软件",
  "py": "ruǎnjiàn",
  "pos": "Danh từ",
  "vn": "phần mềm, ứng dụng",
  "hv": "nhuyễn kiện",
  "em": "💾",
  "lesson": 2,
  "explain": [
   "Chương trình chạy trên máy tính, điện thoại (App)."
  ],
  "usage": "下载软件 · 用软件 · 这个软件很好用.",
  "collo": [
   "下载软件",
   "手机软件",
   "用软件",
   "学习软件"
  ],
  "colloFull": [
   {
    "zh": "下载软件",
    "py": "Xiàzài ruǎnjiàn",
    "vn": "tải phần mềm"
   },
   {
    "zh": "手机软件",
    "py": "Shǒujī ruǎnjiàn",
    "vn": "ứng dụng điện thoại"
   },
   {
    "zh": "用软件",
    "py": "Yòng ruǎnjiàn",
    "vn": "dùng phần mềm"
   },
   {
    "zh": "学习软件",
    "py": "Xuéxí ruǎnjiàn",
    "vn": "phần mềm học tập"
   }
  ],
  "patterns": [
   {
    "s": "一个软件 / 一款软件",
    "m": "Lượng từ của 软件"
   },
   {
    "s": "软件 ↔ 硬件",
    "m": "软 = mềm (phần mềm), 硬 = cứng (phần cứng)"
   }
  ],
  "ex_zh": "他也教了我怎么用这两个软件。",
  "ex_py": "Tā yě jiào le wǒ zěnme yòng zhè liǎng gè ruǎnjiàn.",
  "ex_vn": "Cậu ấy cũng dạy tớ cách dùng hai phần mềm này.",
  "exList": [
   {
    "zh": "他也教了我怎么用这两个软件。",
    "py": "Tā yě jiào le wǒ zěnme yòng zhè liǎng gè ruǎnjiàn.",
    "vn": "Cậu ấy cũng dạy tớ cách dùng hai phần mềm này."
   },
   {
    "zh": "这个学中文的软件很好用，你也下载一个吧。",
    "py": "Zhège xué Zhōngwén de ruǎnjiàn hěn hǎo yòng, nǐ yě xiàzài yí gè ba.",
    "vn": "Phần mềm học tiếng Trung này rất dễ dùng, bạn cũng tải một cái đi."
   }
  ],
  "hanzi": [
   {
    "c": "软",
    "p": "ruǎn",
    "type": "形声字 · Chữ hình thanh",
    "st": 8,
    "ord": "车 → 欠",
    "rad": "车 (xa – xe)",
    "mean": "mềm",
    "tip": "Xe 车 + 欠 (há miệng thở, chỉ âm): ngày xưa bánh xe bọc vải cho êm, “mềm” — 软件 = phần mềm.",
    "cf": "饮 yǐn (uống) — bên trái là 饣; 欢 huān — bên trái là 又",
    "w": "软件 / 很软 / 软卧"
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
    "prompt": "Phần mềm này có thể dùng để gọi taxi.",
    "answer": "这个软件可以用来打车。",
    "answerPy": "Zhège ruǎnjiàn kěyǐ yòng lái dǎchē.",
    "note": "用来 + V = dùng để (HSK 3).",
    "pair": "可以用来……"
   },
   {
    "promptLang": "vi",
    "prompt": "Phần mềm đó tôi tải rồi, có điều vẫn chưa biết dùng.",
    "answer": "那个软件我下载了，不过还不会用。",
    "answerPy": "Nàge ruǎnjiàn wǒ xiàzài le, búguò hái bú huì yòng.",
    "note": "Ôn ……，不过…… (Bài 2 · điểm 2).",
    "pair": "……，不过……"
   }
  ]
 },
 {
  "n": 12,
  "zh": "不仅",
  "py": "bùjǐn",
  "pos": "Liên từ",
  "vn": "không những, không chỉ",
  "hv": "bất cận",
  "em": "➕",
  "lesson": 2,
  "explain": [
   "Đứng ở vế đầu, vế sau có 还 / 而且 / 也: diễn tả ý tăng tiến “không những … mà còn …”."
  ],
  "usage": "Chủ ngữ + 不仅……，还 / 而且…….",
  "collo": [
   "不仅……还……",
   "不仅……而且……",
   "不仅如此",
   "不仅是"
  ],
  "colloFull": [
   {
    "zh": "不仅……还……",
    "py": "Bùjǐn…… hái……",
    "vn": "không những … mà còn …"
   },
   {
    "zh": "不仅……而且……",
    "py": "Bùjǐn…… érqiě……",
    "vn": "không những … mà còn …"
   },
   {
    "zh": "不仅如此",
    "py": "Bùjǐn rú cǐ",
    "vn": "không chỉ như vậy"
   },
   {
    "zh": "不仅是",
    "py": "Bùjǐn shì",
    "vn": "không chỉ là"
   }
  ],
  "patterns": [
   {
    "s": "Chủ ngữ + 不仅 + A，还 / 而且 + B",
    "m": "Cùng một chủ ngữ thì chủ ngữ đứng trước 不仅"
   }
  ],
  "ex_zh": "现在我不仅会扫码结账，还会用手机在网上购物了。",
  "ex_py": "Xiànzài wǒ bùjǐn huì sǎomǎ jiézhàng, hái huì yòng shǒujī zài wǎngshàng gòuwù le.",
  "ex_vn": "Giờ tôi không những biết quét mã thanh toán, mà còn biết dùng điện thoại mua hàng trên mạng nữa.",
  "exList": [
   {
    "zh": "现在我不仅会扫码结账，还会用手机在网上购物了。",
    "py": "Xiànzài wǒ bùjǐn huì sǎomǎ jiézhàng, hái huì yòng shǒujī zài wǎngshàng gòuwù le.",
    "vn": "Giờ tôi không những biết quét mã thanh toán, mà còn biết dùng điện thoại mua hàng trên mạng nữa."
   },
   {
    "zh": "这家饭馆的菜不仅好吃，而且很便宜。",
    "py": "Zhè jiā fànguǎn de cài bùjǐn hǎochī, érqiě hěn piányi.",
    "vn": "Món ăn ở quán này không những ngon mà còn rẻ."
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
    "c": "仅",
    "p": "jǐn",
    "type": "左右结构 · Trái-phải",
    "st": 4,
    "ord": "亻 (nhân) trái → 又 (hựu) phải",
    "rad": "亻 (nhân – người)",
    "mean": "chỉ, chỉ có",
    "tip": "Bộ người 亻 + 又 (thêm một lần nữa, ít ỏi) → CHỈ CÓ (một người, một chút), kết hợp với 不 thành 不仅 = KHÔNG CHỈ (có nhiêu đó).",
    "cf": "仅 dễ nhầm với 仪 (yí – \"nghi thức\")",
    "w": "不仅 / 仅仅 / 仅有"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Cô ấy không những biết nói tiếng Trung, mà còn biết viết chữ Hán.",
    "answer": "她不仅会说中文，还会写汉字。",
    "answerPy": "Tā bùjǐn huì shuō Zhōngwén, hái huì xiě hànzì.",
    "note": "Bài 3 · điểm 2.",
    "pair": "不仅……还……"
   },
   {
    "promptLang": "vi",
    "prompt": "Sống ở đây không những tiện mà còn gần công ty.",
    "answer": "住在这儿不仅方便，而且离公司也很近。",
    "answerPy": "Zhù zài zhèr bùjǐn fāngbiàn, érqiě lí gōngsī yě hěn jìn.",
    "note": "Ôn chủ đề thuê nhà (Bài 2) + 离 (HSK 2).",
    "pair": "不仅……而且……也……"
   }
  ]
 },
 {
  "n": 13,
  "zh": "扫码",
  "py": "sǎomǎ",
  "pos": "Động từ",
  "vn": "quét mã (QR)",
  "hv": "tảo mã",
  "em": "📱",
  "lesson": 2,
  "explain": [
   "Dùng điện thoại quét mã QR (二维码) để thanh toán, kết bạn, gọi món, xem thông tin…"
  ],
  "usage": "扫码支付 / 结账 · 扫一下码 · 扫码点菜.",
  "collo": [
   "扫码支付",
   "扫码结账",
   "扫一下码",
   "扫码点菜"
  ],
  "colloFull": [
   {
    "zh": "扫码支付",
    "py": "Sǎomǎ zhīfù",
    "vn": "quét mã thanh toán"
   },
   {
    "zh": "扫码结账",
    "py": "Sǎomǎ jiézhàng",
    "vn": "quét mã trả tiền"
   },
   {
    "zh": "扫一下码",
    "py": "Sǎo yíxià mǎ",
    "vn": "quét mã một cái"
   },
   {
    "zh": "扫码点菜",
    "py": "Sǎomǎ diǎn cài",
    "vn": "quét mã gọi món"
   }
  ],
  "patterns": [
   {
    "s": "扫码 là động từ li hợp",
    "m": "Chen vào giữa: 扫一下码 / 扫了码"
   }
  ],
  "ex_zh": "现在我不仅会扫码结账，还会用手机在网上购物了。",
  "ex_py": "Xiànzài wǒ bùjǐn huì sǎomǎ jiézhàng, hái huì yòng shǒujī zài wǎngshàng gòuwù le.",
  "ex_vn": "Giờ tôi không những biết quét mã thanh toán, mà còn biết mua hàng trên mạng nữa.",
  "exList": [
   {
    "zh": "现在我不仅会扫码结账，还会用手机在网上购物了。",
    "py": "Xiànzài wǒ bùjǐn huì sǎomǎ jiézhàng, hái huì yòng shǒujī zài wǎngshàng gòuwù le.",
    "vn": "Giờ tôi không những biết quét mã thanh toán, mà còn biết mua hàng trên mạng nữa."
   },
   {
    "zh": "你用手机扫一下这个码，就能加我的微信了。",
    "py": "Nǐ yòng shǒujī sǎo yíxià zhège mǎ, jiù néng jiā wǒ de Wēixìn le.",
    "vn": "Bạn dùng điện thoại quét mã này một cái là kết bạn WeChat với tôi được."
   }
  ],
  "hanzi": [
   {
    "c": "扫",
    "p": "sǎo",
    "type": "左右结构 · Trái-phải",
    "st": 6,
    "ord": "扌 trái → 彐 phải",
    "rad": "扌 (thủ – tay)",
    "mean": "quét",
    "tip": "扌(tay) + 彐(hình cái chổi giản thể) → dùng TAY cầm chổi để QUÉT.",
    "cf": "归 (guī – \"trở về\", có cách ghép khác\")",
    "w": "打扫 / 扫地"
   },
   {
    "c": "码",
    "p": "mǎ",
    "type": "左右结构 · Trái-phải",
    "st": 8,
    "ord": "石 trái → 马 phải",
    "rad": "石 (thạch)",
    "mean": "mã, số",
    "tip": "Đá 石 + 马(biểu âm) → viên đá dùng để đếm → MÃ SỐ. 号码 = số hiệu; 密码 = mật mã.",
    "cf": "妈 (mā – mẹ)",
    "w": "号码 / 密码 / 数码"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Bạn trả tiền mặt hay quét mã?",
    "answer": "你付现金还是扫码？",
    "answerPy": "Nǐ fù xiànjīn háishì sǎomǎ?",
    "note": "Câu hỏi lựa chọn A还是B (HSK 2–3).",
    "pair": "A还是B"
   },
   {
    "promptLang": "vi",
    "prompt": "Nếu điện thoại hết pin thì không quét mã được nữa.",
    "answer": "要是手机没电了，就不能扫码了。",
    "answerPy": "Yàoshi shǒujī méi diàn le, jiù bù néng sǎomǎ le.",
    "note": "Ôn 要是……就…… (Bài 1 · điểm 2).",
    "pair": "要是……就……"
   }
  ]
 },
 {
  "n": 14,
  "zh": "结账",
  "py": "jiézhàng",
  "pos": "Động từ",
  "vn": "thanh toán, tính tiền",
  "hv": "kết trướng",
  "em": "🧾",
  "lesson": 2,
  "explain": [
   "Trả tiền khi mua hàng xong hoặc ăn xong ở nhà hàng, siêu thị."
  ],
  "usage": "扫码结账 · 用现金结账 · 服务员，结账！",
  "collo": [
   "扫码结账",
   "用现金结账",
   "一起结账",
   "去结账"
  ],
  "colloFull": [
   {
    "zh": "扫码结账",
    "py": "Sǎomǎ jiézhàng",
    "vn": "quét mã thanh toán"
   },
   {
    "zh": "用现金结账",
    "py": "Yòng xiànjīn jiézhàng",
    "vn": "trả bằng tiền mặt"
   },
   {
    "zh": "一起结账",
    "py": "Yìqǐ jiézhàng",
    "vn": "trả chung"
   },
   {
    "zh": "去结账",
    "py": "Qù jiézhàng",
    "vn": "đi thanh toán"
   }
  ],
  "patterns": [
   {
    "s": "用 + phương thức + 结账",
    "m": "Thanh toán bằng …"
   },
   {
    "s": "结账 là động từ li hợp",
    "m": "结了账; ✗ 结账饭钱"
   }
  ],
  "ex_zh": "现在我不仅会扫码结账，还会用手机在网上购物了。",
  "ex_py": "Xiànzài wǒ bùjǐn huì sǎomǎ jiézhàng, hái huì yòng shǒujī zài wǎngshàng gòuwù le.",
  "ex_vn": "Giờ tôi không những biết quét mã thanh toán, mà còn biết mua hàng trên mạng nữa.",
  "exList": [
   {
    "zh": "现在我不仅会扫码结账，还会用手机在网上购物了。",
    "py": "Xiànzài wǒ bùjǐn huì sǎomǎ jiézhàng, hái huì yòng shǒujī zài wǎngshàng gòuwù le.",
    "vn": "Giờ tôi không những biết quét mã thanh toán, mà còn biết mua hàng trên mạng nữa."
   },
   {
    "zh": "服务员，我们吃好了，结账！",
    "py": "Fúwùyuán, wǒmen chī hǎo le, jiézhàng!",
    "vn": "Phục vụ ơi, chúng tôi ăn xong rồi, tính tiền!"
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
    "c": "账",
    "p": "zhàng",
    "type": "形声字 · Chữ hình thanh",
    "st": 8,
    "ord": "贝 → 长",
    "rad": "贝 (bối – tiền)",
    "mean": "sổ sách, tài khoản, tiền nợ",
    "tip": "Tiền 贝 + 长 (dài, chỉ âm zhǎng): danh sách tiền dài dằng dặc = sổ sách — 结账 = khép sổ, trả tiền.",
    "cf": "帐 zhàng (màn, lều) — bên trái là 巾; 张 zhāng — bên trái là 弓",
    "w": "结账 / 账号 / 算账"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Tôi thanh toán bằng tiền mặt được không?",
    "answer": "我用现金结账可以吗？",
    "answerPy": "Wǒ yòng xiànjīn jiézhàng kěyǐ ma?",
    "note": "Câu 综合练习 (6) của sách.",
    "pair": "用……结账"
   },
   {
    "promptLang": "vi",
    "prompt": "Ăn xong rồi mới thanh toán.",
    "answer": "吃完饭再结账。",
    "answerPy": "Chī wán fàn zài jiézhàng.",
    "note": "Ôn 再 = rồi mới (HSK 3).",
    "pair": "V完……再……"
   }
  ]
 },
 {
  "n": 15,
  "zh": "购物",
  "py": "gòuwù",
  "pos": "Động từ",
  "vn": "mua sắm",
  "hv": "cấu vật",
  "em": "🛍️",
  "lesson": 2,
  "explain": [
   "Mua đồ, mua sắm (trang trọng hơn 买东西)."
  ],
  "usage": "网上购物 · 去商场购物 · 购物习惯.",
  "collo": [
   "网上购物",
   "购物习惯",
   "去商场购物",
   "购物车"
  ],
  "colloFull": [
   {
    "zh": "网上购物",
    "py": "Wǎngshàng gòuwù",
    "vn": "mua sắm trên mạng"
   },
   {
    "zh": "购物习惯",
    "py": "Gòuwù xíguàn",
    "vn": "thói quen mua sắm"
   },
   {
    "zh": "去商场购物",
    "py": "Qù shāngchǎng gòuwù",
    "vn": "đi trung tâm thương mại mua sắm"
   },
   {
    "zh": "购物车",
    "py": "Gòuwù chē",
    "vn": "giỏ hàng"
   }
  ],
  "patterns": [
   {
    "s": "购物 không mang tân ngữ",
    "m": "✗ 购物衣服 → ✓ 买衣服"
   },
   {
    "s": "在 + nơi + 购物",
    "m": "Mua sắm ở đâu"
   }
  ],
  "ex_zh": "……还会用手机在网上购物了。",
  "ex_py": "…… Hái huì yòng shǒujī zài wǎngshàng gòuwù le.",
  "ex_vn": "…còn biết dùng điện thoại mua hàng trên mạng nữa.",
  "exList": [
   {
    "zh": "……还会用手机在网上购物了。",
    "py": "…… Hái huì yòng shǒujī zài wǎngshàng gòuwù le.",
    "vn": "…còn biết dùng điện thoại mua hàng trên mạng nữa."
   },
   {
    "zh": "周末我常常跟朋友去商场购物。",
    "py": "Zhōumò wǒ chángcháng gēn péngyou qù shāngchǎng gòuwù.",
    "vn": "Cuối tuần tôi thường đi trung tâm thương mại mua sắm với bạn."
   }
  ],
  "hanzi": [
   {
    "c": "购",
    "p": "gòu",
    "type": "左右结构 · Trái-phải (giản thể)",
    "st": 8,
    "ord": "贝 (bối) trái → 勾 (câu) phải",
    "rad": "贝 (bối – tiền của)",
    "mean": "mua",
    "tip": "Bộ 贝(tiền của) + 勾(biểu âm) → dùng TIỀN để MUA, kết hợp 物(vật phẩm) thành 购物 = MUA SẮM.",
    "cf": "钩 (gōu – \"cái móc\", bộ 钅\")",
    "w": "购物 / 购买 / 采购"
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
    "prompt": "Mua sắm trên mạng không những rẻ mà còn tiện.",
    "answer": "在网上购物不仅便宜，而且方便。",
    "answerPy": "Zài wǎngshàng gòuwù bùjǐn piányi, érqiě fāngbiàn.",
    "note": "Bài 3 · điểm 2 不仅……而且…….",
    "pair": "不仅……而且……"
   },
   {
    "promptLang": "vi",
    "prompt": "Nhiều du học sinh thậm chí đã thay đổi thói quen mua sắm của mình.",
    "answer": "很多留学生甚至改变了自己的购物习惯。",
    "answerPy": "Hěn duō liúxuéshēng shènzhì gǎibiàn le zìjǐ de gòuwù xíguàn.",
    "note": "Câu bài khoá 3 + 甚至 (Bài 3 · điểm 3).",
    "pair": "甚至……"
   }
  ]
 },
 {
  "n": 16,
  "zh": "订",
  "py": "dìng",
  "pos": "Động từ",
  "vn": "đặt (hàng, vé, phòng)",
  "hv": "đính",
  "em": "📦",
  "lesson": 2,
  "explain": [
   "Đặt trước: đặt hàng, đặt vé, đặt phòng, đặt bàn."
  ],
  "usage": "订 + N (订票 / 订房间 / 订了一台电脑) · 在网上订.",
  "collo": [
   "订票",
   "订房间",
   "订外卖",
   "订好了"
  ],
  "colloFull": [
   {
    "zh": "订票",
    "py": "Dìng piào",
    "vn": "đặt vé"
   },
   {
    "zh": "订房间",
    "py": "Dìng fángjiān",
    "vn": "đặt phòng"
   },
   {
    "zh": "订外卖",
    "py": "Dìng wàimài",
    "vn": "đặt đồ ăn"
   },
   {
    "zh": "订好了",
    "py": "Dìng hǎo le",
    "vn": "đặt xong rồi"
   }
  ],
  "patterns": [
   {
    "s": "在网上 + 订 + N",
    "m": "Đặt … trên mạng"
   },
   {
    "s": "订 (đặt trước) ≠ 定 (quyết định: 决定)",
    "m": "Cùng âm dìng, khác chữ: 订 có bộ 讠"
   }
  ],
  "ex_zh": "昨天我就在网上订了一台电脑，今天下午一点送到。",
  "ex_py": "Zuótiān wǒ jiù zài wǎngshàng dìng le yì tái diànnǎo, jīntiān xiàwǔ yì diǎn sòng dào.",
  "ex_vn": "Hôm qua tôi đặt một cái máy tính trên mạng, chiều nay 1 giờ giao tới.",
  "exList": [
   {
    "zh": "昨天我就在网上订了一台电脑，今天下午一点送到。",
    "py": "Zuótiān wǒ jiù zài wǎngshàng dìng le yì tái diànnǎo, jīntiān xiàwǔ yì diǎn sòng dào.",
    "vn": "Hôm qua tôi đặt một cái máy tính trên mạng, chiều nay 1 giờ giao tới."
   },
   {
    "zh": "我已经在网上订好了去上海的火车票。",
    "py": "Wǒ yǐjīng zài wǎngshàng dìng hǎo le qù Shànghǎi de huǒchē piào.",
    "vn": "Tôi đã đặt xong vé tàu đi Thượng Hải trên mạng."
   }
  ],
  "hanzi": [
   {
    "c": "订",
    "p": "dìng",
    "type": "形声字 · Chữ hình thanh",
    "st": 4,
    "ord": "讠 → 丁",
    "rad": "讠 (ngôn – lời nói)",
    "mean": "đặt (trước); lập (kế hoạch)",
    "tip": "Lời nói 讠 + 丁 (cây đinh, chỉ âm dīng): lời đã nói ra “đóng đinh” chắc chắn — đặt trước: 订票, 订房间.",
    "cf": "定 dìng (quyết định) — bộ 宀; 灯 dēng (đèn) — bên trái là 火",
    "w": "订票 / 订房间 / 预订"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Bạn đặt phòng khách sạn chưa?",
    "answer": "你订酒店房间了吗？",
    "answerPy": "Nǐ dìng jiǔdiàn fángjiān le ma?",
    "note": "V了……吗 hỏi việc đã xong chưa.",
    "pair": "V了……吗"
   },
   {
    "promptLang": "vi",
    "prompt": "Vì đặt vé trên mạng quá tiện nên bây giờ tôi không ra ga mua vé nữa.",
    "answer": "由于在网上订票太方便了，我现在不去火车站买票了。",
    "answerPy": "Yóuyú zài wǎngshàng dìng piào tài fāngbiàn le, wǒ xiànzài bú qù huǒ chēzhàn mǎi piào le.",
    "note": "Ôn 由于 (Bài 2 · điểm 4).",
    "pair": "由于……"
   }
  ]
 },
 {
  "n": 17,
  "zh": "快递",
  "py": "kuàidì",
  "pos": "Danh từ",
  "vn": "chuyển phát nhanh; bưu kiện",
  "hv": "khoái đệ",
  "em": "🚚",
  "lesson": 2,
  "explain": [
   "Dịch vụ chuyển phát nhanh; cũng chỉ bưu kiện được gửi bằng chuyển phát nhanh. 快递员 = người giao hàng (shipper)."
  ],
  "usage": "寄快递 · 收快递 · 拿快递 · 快递员 · 快递站.",
  "collo": [
   "寄快递",
   "收快递",
   "快递员",
   "快递站"
  ],
  "colloFull": [
   {
    "zh": "寄快递",
    "py": "Jì kuàidì",
    "vn": "gửi chuyển phát nhanh"
   },
   {
    "zh": "收快递",
    "py": "Shōu kuàidì",
    "vn": "nhận hàng"
   },
   {
    "zh": "快递员",
    "py": "Kuàidì yuán",
    "vn": "shipper"
   },
   {
    "zh": "快递站",
    "py": "Kuàidì zhàn",
    "vn": "điểm nhận hàng"
   }
  ],
  "patterns": [
   {
    "s": "寄 / 收 / 拿 + 快递",
    "m": "Gửi / nhận / lấy bưu kiện"
   }
  ],
  "ex_zh": "快递员要到了，我得马上回去！",
  "ex_py": "Kuàidì yuán yào dào le, wǒ děi mǎshàng huíqù!",
  "ex_vn": "Shipper sắp đến rồi, tớ phải về ngay!",
  "exList": [
   {
    "zh": "快递员要到了，我得马上回去！",
    "py": "Kuàidì yuán yào dào le, wǒ děi mǎshàng huíqù!",
    "vn": "Shipper sắp đến rồi, tớ phải về ngay!"
   },
   {
    "zh": "我去楼下拿个快递，马上回来。",
    "py": "Wǒ qù lóu xià ná gè kuàidì, mǎshàng huílái.",
    "vn": "Tôi xuống dưới lấy bưu kiện, quay lại ngay."
   }
  ],
  "hanzi": [
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
   },
   {
    "c": "递",
    "p": "dì",
    "type": "形声字 · Chữ hình thanh",
    "st": 10,
    "ord": "弟 → 辶 (viết sau cùng)",
    "rad": "辶 (sước – đi)",
    "mean": "đưa, chuyển (cho người khác)",
    "tip": "Em trai 弟 (chỉ âm) + bộ đi 辶: sai em chạy đi đưa đồ — chuyển phát: 快递.",
    "cf": "弟 dì (em trai) — không có 辶; 第 dì (thứ) — có ⺮ ở trên",
    "w": "快递 / 递给 / 传递"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Shipper sắp đến rồi, tôi phải về ngay.",
    "answer": "快递员要到了，我得马上回去。",
    "answerPy": "Kuàidì yuán yào dào le, wǒ děi mǎshàng huíqù.",
    "note": "Ôn 要……了 (sắp) + 得 děi (phải).",
    "pair": "要……了"
   },
   {
    "promptLang": "vi",
    "prompt": "Ở Trung Quốc gửi chuyển phát nhanh rất nhanh, thậm chí sáng gửi chiều đã nhận được.",
    "answer": "在中国寄快递特别快，甚至上午寄出下午就收到了。",
    "answerPy": "Zài Zhōngguó jì kuàidì tèbié kuài, shènzhì shàngwǔ jì chū xiàwǔ jiù shōudào le.",
    "note": "甚至 (Bài 3 · điểm 3) — đáp án sách.",
    "pair": "甚至……"
   }
  ]
 },
 {
  "n": 18,
  "zh": "微信",
  "py": "Wēixìn",
  "pos": "Danh từ riêng",
  "vn": "WeChat (ứng dụng nhắn tin)",
  "hv": "vi tín",
  "em": "💬",
  "lesson": 2,
  "explain": [
   "Ứng dụng nhắn tin, gọi video, thanh toán phổ biến nhất ở Trung Quốc (giống Zalo ở Việt Nam)."
  ],
  "usage": "加微信 · 发微信 · 微信支付.",
  "collo": [
   "加微信",
   "发微信",
   "微信支付",
   "微信群"
  ],
  "colloFull": [
   {
    "zh": "加微信",
    "py": "Jiā Wēixìn",
    "vn": "kết bạn WeChat"
   },
   {
    "zh": "发微信",
    "py": "Fā Wēixìn",
    "vn": "nhắn WeChat"
   },
   {
    "zh": "微信支付",
    "py": "Wēixìn zhīfù",
    "vn": "thanh toán bằng WeChat"
   },
   {
    "zh": "微信群",
    "py": "Wēixìn qún",
    "vn": "nhóm WeChat"
   }
  ],
  "patterns": [
   {
    "s": "加 + ai + 的微信",
    "m": "Kết bạn WeChat với ai"
   }
  ],
  "ex_zh": "他帮我下载了微信和支付宝。",
  "ex_py": "Tā bāng wǒ xiàzài le Wēixìn hé Zhīfùbǎo.",
  "ex_vn": "Cậu ấy giúp tôi tải WeChat và Alipay.",
  "exList": [
   {
    "zh": "他帮我下载了微信和支付宝。",
    "py": "Tā bāng wǒ xiàzài le Wēixìn hé Zhīfùbǎo.",
    "vn": "Cậu ấy giúp tôi tải WeChat và Alipay."
   },
   {
    "zh": "我们加个微信吧，有任何问题都可以问我。",
    "py": "Wǒmen jiā gè Wēixìn ba, yǒu rènhé wèntí dōu kěyǐ wèn wǒ.",
    "vn": "Mình kết bạn WeChat nhé, có bất kỳ vấn đề gì cứ hỏi mình."
   }
  ],
  "hanzi": [
   {
    "c": "微",
    "p": "wēi",
    "type": "左中右结构 · Trái-giữa-phải",
    "st": 13,
    "ord": "彳 trái → 山+一+几 giữa → 攵 phải",
    "rad": "彳 (xích – bước nhỏ)",
    "mean": "nhỏ, ít",
    "tip": "Bộ bước nhỏ 彳 → NHỎ BÉ, kết hợp 稍(hơi) thành 稍微 = HƠI, MỘT CHÚT.",
    "cf": "徽 (huī – \"huy hiệu\")",
    "w": "稍微 / 微笑 / 微信"
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
    "prompt": "Tối nay tôi nhắn WeChat cho bạn.",
    "answer": "今天晚上我给你发微信。",
    "answerPy": "Jīntiān wǎnshang wǒ gěi nǐ fā Wēixìn.",
    "note": "给 + ai + 发微信.",
    "pair": "给……发微信"
   },
   {
    "promptLang": "vi",
    "prompt": "WeChat không những nhắn tin được, mà còn thanh toán được.",
    "answer": "微信不仅能发信息，还能支付。",
    "answerPy": "Wēixìn bùjǐn néng fā xìnxī, hái néng zhīfù.",
    "note": "Bài 3 · điểm 2.",
    "pair": "不仅……还……"
   }
  ]
 },
 {
  "n": 19,
  "zh": "支付宝",
  "py": "Zhīfùbǎo",
  "pos": "Danh từ riêng",
  "vn": "Alipay (ví điện tử)",
  "hv": "chi phó bảo",
  "em": "💰",
  "lesson": 2,
  "explain": [
   "Ví điện tử / ứng dụng thanh toán lớn của Trung Quốc (giống MoMo ở Việt Nam). 支付 = thanh toán, 宝 = báu vật."
  ],
  "usage": "用支付宝付钱 · 支付宝扫码.",
  "collo": [
   "用支付宝",
   "支付宝付款",
   "下载支付宝",
   "支付宝扫码"
  ],
  "colloFull": [
   {
    "zh": "用支付宝",
    "py": "Yòng Zhīfùbǎo",
    "vn": "dùng Alipay"
   },
   {
    "zh": "支付宝付款",
    "py": "Zhīfùbǎo fùkuǎn",
    "vn": "trả bằng Alipay"
   },
   {
    "zh": "下载支付宝",
    "py": "Xiàzài Zhīfùbǎo",
    "vn": "tải Alipay"
   },
   {
    "zh": "支付宝扫码",
    "py": "Zhīfùbǎo sǎomǎ",
    "vn": "quét mã bằng Alipay"
   }
  ],
  "patterns": [
   {
    "s": "用 + 微信 / 支付宝 + 支付",
    "m": "Thanh toán bằng WeChat / Alipay"
   }
  ],
  "ex_zh": "他帮我下载了微信和支付宝。",
  "ex_py": "Tā bāng wǒ xiàzài le Wēixìn hé Zhīfùbǎo.",
  "ex_vn": "Cậu ấy giúp tôi tải WeChat và Alipay.",
  "exList": [
   {
    "zh": "他帮我下载了微信和支付宝。",
    "py": "Tā bāng wǒ xiàzài le Wēixìn hé Zhīfùbǎo.",
    "vn": "Cậu ấy giúp tôi tải WeChat và Alipay."
   },
   {
    "zh": "这儿可以用支付宝吗？",
    "py": "Zhèr kěyǐ yòng Zhīfùbǎo ma?",
    "vn": "Ở đây dùng Alipay được không?"
   }
  ],
  "hanzi": [
   {
    "c": "支",
    "p": "zhī",
    "type": "会意字 · Chữ hội ý",
    "st": 4,
    "ord": "十 → 又",
    "rad": "支 (chi – cành)",
    "mean": "chi (tiền); chống đỡ; lượng từ của bút",
    "tip": "Tay 又 cầm một cành tre 十: cành nhánh tách ra — chi tiền ra = 支付.",
    "cf": "技 jì (kỹ) — thêm 扌; 枝 zhī (cành) — thêm 木",
    "w": "支付 / 支付宝 / 一支笔"
   },
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
   },
   {
    "c": "宝",
    "p": "bǎo",
    "type": "会意字 · Chữ hội ý",
    "st": 8,
    "ord": "宀 → 玉 (ngang, ngang, sổ, ngang, chấm)",
    "rad": "宀 (miên – mái nhà)",
    "mean": "báu vật, quý",
    "tip": "Dưới mái nhà 宀 cất ngọc 玉 → của báu. 国宝 = báu vật của quốc gia.",
    "cf": "实 shí (其实 – bài này) — dưới là 头, không phải 玉",
    "w": "国宝"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Tôi không có tiền mặt, trả bằng Alipay được không?",
    "answer": "我没有现金，用支付宝付可以吗？",
    "answerPy": "Wǒ méiyǒu xiànjīn, yòng Zhīfùbǎo fù kěyǐ ma?",
    "note": "Câu hỏi xin phép ……可以吗？",
    "pair": "用……付"
   },
   {
    "promptLang": "vi",
    "prompt": "Alipay tiện thì tiện thật, chỉ là đôi khi dễ tiêu tiền lung tung.",
    "answer": "支付宝方便是方便，就是有时候容易乱花钱。",
    "answerPy": "Zhīfùbǎo fāngbiàn shì fāngbiàn, jiù shì yǒu shíhou róngyì luàn huā qián.",
    "note": "Bài 3 · điểm 1 ×是×，就是…….",
    "pair": "×是×，就是……"
   }
  ]
 },
 {
  "n": 20,
  "zh": "现金",
  "py": "xiànjīn",
  "pos": "Danh từ",
  "vn": "tiền mặt",
  "hv": "hiện kim",
  "em": "💵",
  "lesson": 3,
  "explain": [
   "Tiền giấy, tiền xu cầm trong tay (khác với thẻ, chuyển khoản, ví điện tử)."
  ],
  "usage": "用现金结账 / 付钱 · 带现金 · 现金支付.",
  "collo": [
   "用现金",
   "带现金",
   "现金支付",
   "一点儿现金"
  ],
  "colloFull": [
   {
    "zh": "用现金",
    "py": "Yòng xiànjīn",
    "vn": "dùng tiền mặt"
   },
   {
    "zh": "带现金",
    "py": "Dài xiànjīn",
    "vn": "mang tiền mặt"
   },
   {
    "zh": "现金支付",
    "py": "Xiànjīn zhīfù",
    "vn": "trả bằng tiền mặt"
   },
   {
    "zh": "一点儿现金",
    "py": "Yìdiǎnr xiànjīn",
    "vn": "một ít tiền mặt"
   }
  ],
  "patterns": [
   {
    "s": "用 + 现金 + V",
    "m": "Dùng tiền mặt để …"
   }
  ],
  "ex_zh": "中国人在饭馆或超市结账时，几乎都用手机支付，只有他们用现金结账。",
  "ex_py": "Zhōngguórén zài fànguǎn huò chāoshì jiézhàng shí, jīhū dōu yòng shǒujī zhīfù, zhǐyǒu tāmen yòng xiànjīn jiézhàng.",
  "ex_vn": "Người Trung Quốc khi thanh toán ở quán ăn hay siêu thị gần như đều dùng điện thoại, chỉ có họ trả bằng tiền mặt.",
  "exList": [
   {
    "zh": "中国人在饭馆或超市结账时，几乎都用手机支付，只有他们用现金结账。",
    "py": "Zhōngguórén zài fànguǎn huò chāoshì jiézhàng shí, jīhū dōu yòng shǒujī zhīfù, zhǐyǒu tāmen yòng xiànjīn jiézhàng.",
    "vn": "Người Trung Quốc khi thanh toán ở quán ăn hay siêu thị gần như đều dùng điện thoại, chỉ có họ trả bằng tiền mặt."
   },
   {
    "zh": "现在很多年轻人出门都不带现金了。",
    "py": "Xiànzài hěn duō niánqīngrén chūmén dōu bú dài xiànjīn le.",
    "vn": "Bây giờ nhiều người trẻ ra ngoài không mang tiền mặt nữa."
   }
  ],
  "hanzi": [
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
    "prompt": "Cùng với sự phát triển của thanh toán bằng điện thoại, người dùng tiền mặt ngày càng ít.",
    "answer": "随着手机支付的发展，用现金的人越来越少了。",
    "answerPy": "Suízhuó shǒujī zhīfù de fāzhǎn, yòng xiànjīn de rén yuèláiyuè shǎo le.",
    "note": "Ôn 随着 (Bài 1 · điểm 3).",
    "pair": "随着……越来越……"
   },
   {
    "promptLang": "vi",
    "prompt": "Đi du lịch nước ngoài vẫn nên mang một ít tiền mặt.",
    "answer": "去国外旅游，最好还是带一点儿现金。",
    "answerPy": "Qù guó wài lǚyóu, zuìhǎo háishì dài yìdiǎnr xiànjīn.",
    "note": "最好还是 = tốt nhất vẫn nên (HSK 3).",
    "pair": "最好还是……"
   }
  ]
 },
 {
  "n": 21,
  "zh": "网购",
  "py": "wǎnggòu",
  "pos": "Động từ",
  "vn": "mua hàng trên mạng, mua online",
  "hv": "võng cấu",
  "em": "🛒",
  "lesson": 3,
  "explain": [
   "Viết tắt của 网上购物: mua hàng qua mạng."
  ],
  "usage": "网购 · 在网购时 · 喜欢网购 · 网购衣服.",
  "collo": [
   "喜欢网购",
   "网购衣服",
   "网购习惯",
   "第一次网购"
  ],
  "colloFull": [
   {
    "zh": "喜欢网购",
    "py": "Xǐhuan wǎnggòu",
    "vn": "thích mua online"
   },
   {
    "zh": "网购衣服",
    "py": "Wǎnggòu yīfu",
    "vn": "mua quần áo online"
   },
   {
    "zh": "网购习惯",
    "py": "Wǎnggòu xíguàn",
    "vn": "thói quen mua online"
   },
   {
    "zh": "第一次网购",
    "py": "Dì yī cì wǎnggòu",
    "vn": "lần đầu mua online"
   }
  ],
  "patterns": [
   {
    "s": "网购 = 网上购物",
    "m": "Từ viết tắt; sau 网购 có thể có tân ngữ: 网购衣服"
   }
  ],
  "ex_zh": "在中国网购，不仅选择多、价格不高，而且送货很快。",
  "ex_py": "Zài Zhōngguó wǎnggòu, bùjǐn xuǎnzé duō, jiàgé bù gāo, érqiě sòng huò hěn kuài.",
  "ex_vn": "Mua hàng online ở Trung Quốc không những nhiều lựa chọn, giá không cao mà giao hàng còn nhanh.",
  "exList": [
   {
    "zh": "在中国网购，不仅选择多、价格不高，而且送货很快。",
    "py": "Zài Zhōngguó wǎnggòu, bùjǐn xuǎnzé duō, jiàgé bù gāo, érqiě sòng huò hěn kuài.",
    "vn": "Mua hàng online ở Trung Quốc không những nhiều lựa chọn, giá không cao mà giao hàng còn nhanh."
   },
   {
    "zh": "我妈妈以前不会网购，现在每天都在网上买东西。",
    "py": "Wǒ māma yǐqián bú huì wǎnggòu, xiànzài měi tiān dōu zài wǎngshàng mǎi dōngxi.",
    "vn": "Trước kia mẹ tôi không biết mua online, giờ ngày nào cũng mua đồ trên mạng."
   }
  ],
  "hanzi": [
   {
    "c": "网",
    "p": "wǎng",
    "type": "半包围结构 · Bán bao vây (giản thể)",
    "st": 6,
    "ord": "冂 bao ngoài → 亡 trong",
    "rad": "冂 (quynh)",
    "mean": "lưới",
    "tip": "Chữ tượng hình cái LƯỚI đan chéo → nghĩa gốc là LƯỚI, kết hợp 球(quả bóng) thành 网球 = QUẦN VỢT (bóng đánh qua lưới).",
    "cf": "罔 (wǎng – \"lừa dối\", ít dùng)",
    "w": "网球 / 上网 / 网站"
   },
   {
    "c": "购",
    "p": "gòu",
    "type": "左右结构 · Trái-phải (giản thể)",
    "st": 8,
    "ord": "贝 (bối) trái → 勾 (câu) phải",
    "rad": "贝 (bối – tiền của)",
    "mean": "mua",
    "tip": "Bộ 贝(tiền của) + 勾(biểu âm) → dùng TIỀN để MUA, kết hợp 物(vật phẩm) thành 购物 = MUA SẮM.",
    "cf": "钩 (gōu – \"cái móc\", bộ 钅\")",
    "w": "购物 / 购买 / 采购"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Bạn có mua hàng trên mạng không?",
    "answer": "你网购吗？",
    "answerPy": "Nǐ wǎnggòu ma?",
    "note": "Câu hỏi phần Khởi động của sách.",
    "pair": "……吗"
   },
   {
    "promptLang": "vi",
    "prompt": "Mua online tiện thì tiện thật, chỉ là không thử được quần áo.",
    "answer": "网购方便是方便，就是不能试衣服。",
    "answerPy": "Wǎnggòu fāngbiàn shì fāngbiàn, jiù shì bù néng shì yīfu.",
    "note": "Bài 3 · điểm 1.",
    "pair": "×是×，就是……"
   }
  ]
 },
 {
  "n": 22,
  "zh": "寄",
  "py": "jì",
  "pos": "Động từ",
  "vn": "gửi (thư, bưu kiện)",
  "hv": "ký",
  "em": "✉️",
  "lesson": 3,
  "explain": [
   "Gửi thư, bưu kiện qua bưu điện hoặc chuyển phát nhanh."
  ],
  "usage": "寄快递 · 寄信 · 寄给 + ai · 把……寄给…….",
  "collo": [
   "寄快递",
   "寄信",
   "寄给家人",
   "寄出去"
  ],
  "colloFull": [
   {
    "zh": "寄快递",
    "py": "Jì kuàidì",
    "vn": "gửi chuyển phát nhanh"
   },
   {
    "zh": "寄信",
    "py": "Jì xìn",
    "vn": "gửi thư"
   },
   {
    "zh": "寄给家人",
    "py": "Jì gěi jiārén",
    "vn": "gửi cho gia đình"
   },
   {
    "zh": "寄出去",
    "py": "Jì chūqù",
    "vn": "gửi đi"
   }
  ],
  "patterns": [
   {
    "s": "寄 + vật + 给 + ai",
    "m": "Gửi gì cho ai"
   },
   {
    "s": "把 + vật + 寄给 + ai",
    "m": "Câu chữ 把"
   }
  ],
  "ex_zh": "白家月和陈天中也都学会了用手机支付、网购、寄快递等等。",
  "ex_py": "Bái Jiāyuè hé Chén Tiānzhōng yě dōu xué huì le yòng shǒujī zhīfù, wǎnggòu, jì kuàidì děng děng.",
  "ex_vn": "Bạch Gia Nguyệt và Trần Thiên Trung cũng đều đã học được cách thanh toán bằng điện thoại, mua online, gửi chuyển phát nhanh, v.v.",
  "exList": [
   {
    "zh": "白家月和陈天中也都学会了用手机支付、网购、寄快递等等。",
    "py": "Bái Jiāyuè hé Chén Tiānzhōng yě dōu xué huì le yòng shǒujī zhīfù, wǎnggòu, jì kuàidì děng děng.",
    "vn": "Bạch Gia Nguyệt và Trần Thiên Trung cũng đều đã học được cách thanh toán bằng điện thoại, mua online, gửi chuyển phát nhanh, v.v."
   },
   {
    "zh": "我给妈妈寄了一些北京的点心。",
    "py": "Wǒ gěi māma jì le yìxiē Běijīng de diǎnxīn.",
    "vn": "Tôi gửi cho mẹ một ít bánh ngọt Bắc Kinh."
   }
  ],
  "hanzi": [
   {
    "c": "寄",
    "p": "jì",
    "type": "上下结构 · Trên-dưới",
    "st": 11,
    "ord": "宀 (miên) trên → 奇 (kỳ) dưới",
    "rad": "宀 (miên – mái nhà)",
    "mean": "gửi, ký gửi",
    "tip": "Bộ mái nhà 宀 (nơi tạm gửi) + 奇(biểu âm) → KÝ GỬI đồ vật đến một nơi khác, mở rộng thành GỬI (thư, hàng hóa).",
    "cf": "奇 (qí – \"kỳ lạ\", không có bộ 宀\")",
    "w": "寄 / 寄给 / 邮寄"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Tôi muốn gửi cuốn sách này cho bạn ở Việt Nam.",
    "answer": "我想把这本书寄给越南的朋友。",
    "answerPy": "Wǒ xiǎng bǎ zhè běn shū jì gěi Yuènán de péngyou.",
    "note": "Câu chữ 把 + 寄给 (HSK 3).",
    "pair": "把……寄给……"
   },
   {
    "promptLang": "vi",
    "prompt": "Lệ Lệ đi điểm chuyển phát lấy hàng, tiện thể lại gửi thêm một bưu kiện.",
    "answer": "丽丽去快递站拿快递时，又寄了一个快递。",
    "answerPy": "Lì lì qù kuàidì zhàn ná kuàidì shí, yòu jì le yí gè kuàidì.",
    "note": "Câu 综合练习 (1) của sách.",
    "pair": "又 + V"
   }
  ]
 },
 {
  "n": 23,
  "zh": "等",
  "py": "děng",
  "pos": "Trợ từ",
  "vn": "v.v., vân vân",
  "hv": "đẳng",
  "em": "📋",
  "lesson": 3,
  "explain": [
   "Đặt sau một loạt sự vật để biểu thị “còn nữa” (vân vân) hoặc để khép lại phần liệt kê. Có thể lặp lại thành 等等 (小语助力 của sách)."
  ],
  "usage": "A、B、C + 等 / 等等 · ……等 + N.",
  "collo": [
   "等等",
   "……等人",
   "姓名、手机号等",
   "……等方面"
  ],
  "colloFull": [
   {
    "zh": "等等",
    "py": "Děng děng",
    "vn": "vân vân"
   },
   {
    "zh": "……等人",
    "py": "…… Děng rén",
    "vn": "… và những người khác"
   },
   {
    "zh": "姓名、手机号等",
    "py": "Xìngmíng, shǒujī hào děng",
    "vn": "họ tên, số điện thoại…"
   },
   {
    "zh": "……等方面",
    "py": "…… Děng fāngmiàn",
    "vn": "các mặt như …"
   }
  ],
  "patterns": [
   {
    "s": "A、B、C + 等 / 等等",
    "m": "Liệt kê chưa hết"
   },
   {
    "s": "等 (trợ từ: v.v.) ≠ 等 (động từ: đợi)",
    "m": "Cùng chữ, cùng âm, khác nghĩa — xem vị trí trong câu"
   }
  ],
  "ex_zh": "白家月和陈天中也都学会了用手机支付、网购、寄快递等等。",
  "ex_py": "Bái Jiāyuè hé Chén Tiānzhōng yě dōu xué huì le yòng shǒujī zhīfù, wǎnggòu, jì kuàidì děng děng.",
  "ex_vn": "Bạch Gia Nguyệt và Trần Thiên Trung cũng đều đã học được thanh toán bằng điện thoại, mua online, gửi chuyển phát nhanh, v.v.",
  "exList": [
   {
    "zh": "白家月和陈天中也都学会了用手机支付、网购、寄快递等等。",
    "py": "Bái Jiāyuè hé Chén Tiānzhōng yě dōu xué huì le yòng shǒujī zhīfù, wǎnggòu, jì kuàidì děng děng.",
    "vn": "Bạch Gia Nguyệt và Trần Thiên Trung cũng đều đã học được thanh toán bằng điện thoại, mua online, gửi chuyển phát nhanh, v.v."
   },
   {
    "zh": "我们家附近有超市、银行、医院等，生活很方便。",
    "py": "Wǒmen jiā fùjìn yǒu chāoshì, yínháng, yīyuàn děng, shēnghuó hěn fāngbiàn.",
    "vn": "Gần nhà tôi có siêu thị, ngân hàng, bệnh viện…, sống rất tiện."
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
    "prompt": "Mua đồ trên mạng cần cung cấp họ tên, số điện thoại… và các thông tin khác.",
    "answer": "网上购物需要提供姓名、手机号等信息。",
    "answerPy": "Wǎngshàng gòuwù xūyào tígōng xìngmíng, shǒujī hào děng xìnxī.",
    "note": "Câu bài khoá 4: ……等 + N.",
    "pair": "……等 + N"
   },
   {
    "promptLang": "vi",
    "prompt": "Ở nhà tôi thích nấu ăn, xem phim, đọc sách, v.v.",
    "answer": "在家我喜欢做饭、看电影、看书等等。",
    "answerPy": "Zài jiā wǒ xǐhuan zuòfàn, kàn diànyǐng, kàn shū děng děng.",
    "note": "等等 lặp lại.",
    "pair": "……等等"
   }
  ]
 },
 {
  "n": 24,
  "zh": "货",
  "py": "huò",
  "pos": "Danh từ",
  "vn": "hàng, hàng hóa",
  "hv": "hóa",
  "em": "🏷️",
  "lesson": 3,
  "explain": [
   "Hàng hóa — đồ được bán, được vận chuyển."
  ],
  "usage": "送货 · 发货 · 到货 · 这些货.",
  "collo": [
   "送货",
   "发货",
   "到货",
   "送货上门"
  ],
  "colloFull": [
   {
    "zh": "送货",
    "py": "Sòng huò",
    "vn": "giao hàng"
   },
   {
    "zh": "发货",
    "py": "Fā huò",
    "vn": "gửi hàng"
   },
   {
    "zh": "到货",
    "py": "Dào huò",
    "vn": "hàng về"
   },
   {
    "zh": "送货上门",
    "py": "Sòng huò shàng mén",
    "vn": "giao tận nhà"
   }
  ],
  "patterns": [
   {
    "s": "送 / 发 / 到 + 货",
    "m": "Giao / gửi / hàng đến"
   }
  ],
  "ex_zh": "在中国网购，不仅选择多、价格不高，而且送货很快。",
  "ex_py": "Zài Zhōngguó wǎnggòu, bùjǐn xuǎnzé duō, jiàgé bù gāo, érqiě sòng huò hěn kuài.",
  "ex_vn": "Mua hàng online ở Trung Quốc không những nhiều lựa chọn, giá không cao mà giao hàng còn nhanh.",
  "exList": [
   {
    "zh": "在中国网购，不仅选择多、价格不高，而且送货很快。",
    "py": "Zài Zhōngguó wǎnggòu, bùjǐn xuǎnzé duō, jiàgé bù gāo, érqiě sòng huò hěn kuài.",
    "vn": "Mua hàng online ở Trung Quốc không những nhiều lựa chọn, giá không cao mà giao hàng còn nhanh."
   },
   {
    "zh": "这家店发货很快，昨天订的东西今天就到了。",
    "py": "Zhè jiā diàn fā huò hěn kuài, zuótiān dìng de dōngxi jīntiān jiù dào le.",
    "vn": "Cửa hàng này gửi hàng rất nhanh, đồ đặt hôm qua hôm nay đã đến."
   }
  ],
  "hanzi": [
   {
    "c": "货",
    "p": "huò",
    "type": "上下结构 · Trên-dưới",
    "st": 8,
    "ord": "化(hoá) trên → 贝(bối) dưới",
    "rad": "贝 (bối – vỏ sò, tiền cổ)",
    "mean": "hàng hoá",
    "tip": "化(biến hoá, đổi) + 贝(tiền) → đổi tiền lấy vật → HÀNG HOÁ.",
    "cf": "贷 (dài – \"vay, cho vay\", trên là 代 thay vì 化\")",
    "w": "售货员 / 货物 / 国货"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Ở Trung Quốc mua online không những nhiều đồ mà giao hàng còn nhanh.",
    "answer": "在中国网购，不仅东西多，而且送货很快。",
    "answerPy": "Zài Zhōngguó wǎnggòu, bùjǐn dōngxi duō, érqiě sòng huò hěn kuài.",
    "note": "Bài 3 · điểm 2.",
    "pair": "不仅……而且……"
   },
   {
    "promptLang": "vi",
    "prompt": "Mua online rẻ thì rẻ thật, chỉ là đôi khi giao hàng hơi chậm.",
    "answer": "网购便宜是便宜，就是有时候送货有点儿慢。",
    "answerPy": "Wǎnggòu piányi shì piányi, jiù shì yǒu shíhou sòng huò yǒudiǎnr màn.",
    "note": "Bài 3 · điểm 1.",
    "pair": "×是×，就是……"
   }
  ]
 },
 {
  "n": 25,
  "zh": "甚至",
  "py": "shènzhì",
  "pos": "Liên từ",
  "vn": "thậm chí, ngay cả",
  "hv": "thậm chí",
  "em": "😲",
  "lesson": 3,
  "explain": [
   "Nêu ra một trường hợp nổi bật, vượt ngoài dự đoán thông thường; đặt trước phần được nhấn mạnh."
  ],
  "usage": "……，甚至 + V / chủ ngữ…… · 甚至连……都…….",
  "collo": [
   "甚至还",
   "甚至连……都……",
   "有的甚至",
   "甚至没有"
  ],
  "colloFull": [
   {
    "zh": "甚至还",
    "py": "Shènzhì hái",
    "vn": "thậm chí còn"
   },
   {
    "zh": "甚至连……都……",
    "py": "Shènzhì lián…… dōu……",
    "vn": "thậm chí ngay cả … cũng …"
   },
   {
    "zh": "有的甚至",
    "py": "Yǒude shènzhì",
    "vn": "có người thậm chí"
   },
   {
    "zh": "甚至没有",
    "py": "Shènzhì méiyǒu",
    "vn": "thậm chí không có"
   }
  ],
  "patterns": [
   {
    "s": "……，甚至 + phần nổi bật",
    "m": "Nhấn mạnh mức độ vượt dự đoán"
   },
   {
    "s": "甚至连……都 / 也……",
    "m": "Kết hợp với 连……都 (HSK 3)"
   }
  ],
  "ex_zh": "在中国网购，不仅选择多、价格不高，而且送货很快，很多留学生甚至改变了自己的购物习惯。",
  "ex_py": "Zài Zhōngguó wǎnggòu, bùjǐn xuǎnzé duō, jiàgé bù gāo, érqiě sòng huò hěn kuài, hěn duō liúxuéshēng shènzhì gǎibiàn le zìjǐ de gòuwù xíguàn.",
  "ex_vn": "Mua online ở Trung Quốc không những nhiều lựa chọn, giá không cao mà giao hàng còn nhanh, nhiều du học sinh thậm chí đã thay đổi thói quen mua sắm của mình.",
  "exList": [
   {
    "zh": "在中国网购，不仅选择多、价格不高，而且送货很快，很多留学生甚至改变了自己的购物习惯。",
    "py": "Zài Zhōngguó wǎnggòu, bùjǐn xuǎnzé duō, jiàgé bù gāo, érqiě sòng huò hěn kuài, hěn duō liúxuéshēng shènzhì gǎibiàn le zìjǐ de gòuwù xíguàn.",
    "vn": "Mua online ở Trung Quốc không những nhiều lựa chọn, giá không cao mà giao hàng còn nhanh, nhiều du học sinh thậm chí đã thay đổi thói quen mua sắm của mình."
   },
   {
    "zh": "他太忙了，甚至连吃饭的时间都没有。",
    "py": "Tā tài máng le, shènzhì lián chīfàn de shíjiān dōu méiyǒu.",
    "vn": "Anh ấy bận quá, thậm chí đến thời gian ăn cơm cũng không có."
   }
  ],
  "hanzi": [
   {
    "c": "甚",
    "p": "shèn",
    "type": "上下结构 · Trên-dưới",
    "st": 9,
    "ord": "甘 trên → 匹 (biến thể) dưới",
    "rad": "甘 (cam – ngọt)",
    "mean": "quá mức, rất",
    "tip": "Chữ mang nghĩa QUÁ MỨC, RẤT NHIỀU; kết hợp 至(đến mức) thành 甚至 = THẬM CHÍ (đến mức độ nổi bật nhất).",
    "cf": "甚 dễ nhầm với 其 (qí – \"cái đó\")",
    "w": "甚至 / 甚至于 / 幸甚"
   },
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
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Khu này thật không tệ, có vườn hoa nhỏ, sân bóng, thậm chí còn có một siêu thị.",
    "answer": "这个小区真不错，有小花园、球场，甚至还有一个超市。",
    "answerPy": "Zhègè xiǎoqū zhēn búcuò, yǒu xiǎo huāyuán, qiúchǎng, shènzhì hái yǒu yí gè chāoshì.",
    "note": "Ví dụ của sách (Bài 3 · điểm 3) + ôn 小区 (Bài 2).",
    "pair": "甚至还……"
   },
   {
    "promptLang": "vi",
    "prompt": "Anh ấy hiểu tôi quá, thậm chí tôi chưa nói gì anh ấy đã biết tôi muốn làm gì.",
    "answer": "他太了解我了，甚至我还没说话，他就知道我想做什么。",
    "answerPy": "Tā tài liǎojiě wǒ le, shènzhì wǒ hái méi shuōhuà, tā jiù zhīdao wǒ xiǎng zuò shénme.",
    "note": "Đáp án sách + 还没……就…….",
    "pair": "甚至……还没……就……"
   }
  ]
 },
 {
  "n": 26,
  "zh": "改变",
  "py": "gǎibiàn",
  "pos": "Động từ",
  "vn": "thay đổi, làm thay đổi",
  "hv": "cải biến",
  "em": "🔄",
  "lesson": 3,
  "explain": [
   "Làm cho khác đi (thói quen, kế hoạch, cách nghĩ, cuộc sống…); sau 改变 thường có tân ngữ."
  ],
  "usage": "改变习惯 / 计划 / 想法 · 改变了很多.",
  "collo": [
   "改变习惯",
   "改变计划",
   "改变想法",
   "改变生活"
  ],
  "colloFull": [
   {
    "zh": "改变习惯",
    "py": "Gǎibiàn xíguàn",
    "vn": "thay đổi thói quen"
   },
   {
    "zh": "改变计划",
    "py": "Gǎibiàn jìhuà",
    "vn": "thay đổi kế hoạch"
   },
   {
    "zh": "改变想法",
    "py": "Gǎibiàn xiǎng fǎ",
    "vn": "thay đổi suy nghĩ"
   },
   {
    "zh": "改变生活",
    "py": "Gǎibiàn shēnghuó",
    "vn": "thay đổi cuộc sống"
   }
  ],
  "patterns": [
   {
    "s": "改变 + N",
    "m": "Chủ động làm thay đổi cái gì"
   },
   {
    "s": "改变 (động từ, có tân ngữ) ≠ 变化 (thường là danh từ)",
    "m": "✓ 改变计划 · ✓ 有很大的变化"
   }
  ],
  "ex_zh": "很多留学生甚至改变了自己的购物习惯。",
  "ex_py": "Hěn duō liúxuéshēng shènzhì gǎibiàn le zìjǐ de gòuwù xíguàn.",
  "ex_vn": "Nhiều du học sinh thậm chí đã thay đổi thói quen mua sắm của mình.",
  "exList": [
   {
    "zh": "很多留学生甚至改变了自己的购物习惯。",
    "py": "Hěn duō liúxuéshēng shènzhì gǎibiàn le zìjǐ de gòuwù xíguàn.",
    "vn": "Nhiều du học sinh thậm chí đã thay đổi thói quen mua sắm của mình."
   },
   {
    "zh": "手机改变了我们的生活。",
    "py": "Shǒujī gǎibiàn le wǒmen de shēnghuó.",
    "vn": "Điện thoại đã thay đổi cuộc sống của chúng ta."
   }
  ],
  "hanzi": [
   {
    "c": "改",
    "p": "gǎi",
    "type": "形声字 · Chữ hình thanh",
    "st": 7,
    "ord": "己 → 攵",
    "rad": "攵 (phộc – đánh nhẹ)",
    "mean": "sửa, đổi",
    "tip": "Bản thân 己 + 攵 (tay cầm roi): tự “gõ” mình để sửa đổi — 改变 = thay đổi.",
    "cf": "放 fàng — bên trái là 方; 收 shōu — bên trái là 丩",
    "w": "改变 / 修改 / 改天"
   },
   {
    "c": "变",
    "p": "biàn",
    "type": "独体字 · Chữ đơn (giản thể)",
    "st": 8,
    "ord": "nét liền",
    "rad": "又 (hựu, biến thể)",
    "mean": "thay đổi, biến hóa",
    "tip": "Chữ giản thể mang nghĩa BIẾN HÓA, THAY ĐỔI trạng thái ban đầu.",
    "cf": "恋 (liàn – \"yêu, luyến\", có 心 dưới, không liên quan nghĩa)",
    "w": "改变 / 变化 / 变成"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Cùng với sự phát triển của Internet, thói quen mua sắm của mọi người đã thay đổi.",
    "answer": "随着网络的发展，人们的购物习惯改变了。",
    "answerPy": "Suízhe wǎngluò de fāzhǎn, rén men de gòuwù xíguàn gǎibiàn le.",
    "note": "Ôn 随着 (Bài 1 · điểm 3).",
    "pair": "随着……"
   },
   {
    "promptLang": "vi",
    "prompt": "Vì trời mưa nên chúng tôi đã thay đổi kế hoạch.",
    "answer": "由于下雨，我们改变了计划。",
    "answerPy": "Yóuyú xiàyǔ, wǒmen gǎibiàn le jìhuà.",
    "note": "Ôn 由于 (Bài 2 · điểm 4).",
    "pair": "由于……"
   }
  ]
 },
 {
  "n": 27,
  "zh": "手指",
  "py": "shǒuzhǐ",
  "pos": "Danh từ",
  "vn": "ngón tay",
  "hv": "thủ chỉ",
  "em": "☝️",
  "lesson": 3,
  "explain": [
   "Ngón tay. 动动手指 = động ngón tay (ý nói việc rất dễ, chỉ chạm vài cái trên điện thoại)."
  ],
  "usage": "动动手指 · 五个手指 · 用手指点.",
  "collo": [
   "动动手指",
   "手指很长",
   "伸出手指",
   "用手指点"
  ],
  "colloFull": [
   {
    "zh": "动动手指",
    "py": "Dòng dòng shǒuzhǐ",
    "vn": "động ngón tay"
   },
   {
    "zh": "手指很长",
    "py": "Shǒuzhǐ hěn cháng",
    "vn": "ngón tay dài"
   },
   {
    "zh": "伸出手指",
    "py": "Shēn chū shǒuzhǐ",
    "vn": "giơ ngón tay ra"
   },
   {
    "zh": "用手指点",
    "py": "Yòng shǒuzhǐ diǎn",
    "vn": "dùng ngón tay chạm"
   }
  ],
  "patterns": [
   {
    "s": "动动手指就能……",
    "m": "Chỉ cần chạm nhẹ là … (rất dễ dàng)"
   }
  ],
  "ex_zh": "由于网购太方便了，动动手指就能买到想要的东西。",
  "ex_py": "Yóuyú wǎnggòu tài fāngbiàn le, dòng dòng shǒuzhǐ jiù néng mǎi dào xiǎng yào de dōngxi.",
  "ex_vn": "Vì mua online quá tiện, chỉ cần động ngón tay là mua được thứ mình muốn.",
  "exList": [
   {
    "zh": "由于网购太方便了，动动手指就能买到想要的东西。",
    "py": "Yóuyú wǎnggòu tài fāngbiàn le, dòng dòng shǒuzhǐ jiù néng mǎi dào xiǎng yào de dōngxi.",
    "vn": "Vì mua online quá tiện, chỉ cần động ngón tay là mua được thứ mình muốn."
   },
   {
    "zh": "现在动动手指就能订到饭店，太方便了。",
    "py": "Xiànzài dòng dòng shǒuzhǐ jiù néng dìng dào fàndiàn, tài fāngbiàn le.",
    "vn": "Bây giờ chạm vài cái là đặt được khách sạn, tiện quá."
   }
  ],
  "hanzi": [
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
   },
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
    "prompt": "Chỉ cần động ngón tay là mua được thứ mình muốn.",
    "answer": "动动手指就能买到想要的东西。",
    "answerPy": "Dòng dòng shǒuzhǐ jiù néng mǎi dào xiǎng yào de dōngxi.",
    "note": "Câu bài khoá 3: động từ lặp VV + 就能…….",
    "pair": "动动……就能……"
   },
   {
    "promptLang": "vi",
    "prompt": "Nếu ngón tay bị ướt thì không mở được điện thoại.",
    "answer": "要是手指湿了，手机就打不开。",
    "answerPy": "Yàoshi shǒuzhǐ shī le, shǒujī jiù dǎ bù kāi.",
    "note": "Ôn 要是……就…… (Bài 1 · điểm 2) + bổ ngữ khả năng 打不开.",
    "pair": "要是……就……"
   }
  ]
 },
 {
  "n": 28,
  "zh": "乱",
  "py": "luàn",
  "pos": "Phó từ / Tính từ",
  "vn": "bừa bãi, lung tung; lộn xộn",
  "hv": "loạn",
  "em": "🌀",
  "lesson": 3,
  "explain": [
   "Phó từ: làm tùy tiện, không có kế hoạch (乱花钱 = tiêu tiền lung tung).",
   "Tính từ: lộn xộn, bừa bộn (房间很乱)."
  ],
  "usage": "乱 + V (乱花钱 / 乱放 / 乱扔) · 很乱 · 别乱…….",
  "collo": [
   "乱花钱",
   "乱放",
   "乱扔",
   "很乱"
  ],
  "colloFull": [
   {
    "zh": "乱花钱",
    "py": "Luàn huā qián",
    "vn": "tiêu tiền lung tung"
   },
   {
    "zh": "乱放",
    "py": "Luàn fàng",
    "vn": "để lung tung"
   },
   {
    "zh": "乱扔",
    "py": "Luàn rēng",
    "vn": "vứt bừa"
   },
   {
    "zh": "很乱",
    "py": "Hěn luàn",
    "vn": "rất lộn xộn"
   }
  ],
  "patterns": [
   {
    "s": "乱 + V",
    "m": "Làm bừa, làm tùy tiện"
   },
   {
    "s": "别 + 乱 + V",
    "m": "Lời khuyên: đừng làm bừa"
   }
  ],
  "ex_zh": "他们也开始担心自己在网购时会乱花钱。",
  "ex_py": "Tāmen yě kāishǐ dānxīn zìjǐ zài wǎnggòu shí huì luàn huā qián.",
  "ex_vn": "Họ cũng bắt đầu lo mình sẽ tiêu tiền lung tung khi mua online.",
  "exList": [
   {
    "zh": "他们也开始担心自己在网购时会乱花钱。",
    "py": "Tāmen yě kāishǐ dānxīn zìjǐ zài wǎnggòu shí huì luàn huā qián.",
    "vn": "Họ cũng bắt đầu lo mình sẽ tiêu tiền lung tung khi mua online."
   },
   {
    "zh": "你的房间太乱了，快收拾一下吧。",
    "py": "Nǐ de fángjiān tài luàn le, kuài shōushi yíxià ba.",
    "vn": "Phòng cậu bừa quá, mau dọn dẹp đi."
   }
  ],
  "hanzi": [
   {
    "c": "乱",
    "p": "luàn",
    "type": "左右结构 · Trái-phải (giản thể)",
    "st": 7,
    "ord": "舌 trái → 乚 phải",
    "rad": "乙 (ất, biến thể)",
    "mean": "rối loạn",
    "tip": "Chữ giản thể mô phỏng sợi dây bị RỐI, không gỡ được → mở rộng thành LỘN XỘN, LÚNG TÚNG.",
    "cf": "乱 dễ nhầm với 舌 (shé – \"cái lưỡi\") do có phần giống nhau bên trái",
    "w": "手忙脚乱 / 乱七八糟 / 别乱"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Đừng tiêu tiền lung tung!",
    "answer": "别乱花钱！",
    "answerPy": "Bié luàn huā qián!",
    "note": "别 + 乱 + V.",
    "pair": "别乱……"
   },
   {
    "promptLang": "vi",
    "prompt": "Phòng bừa quá, chủ nhà sắp đến rồi, mau dọn đi.",
    "answer": "房间太乱了，房东快来了，快收拾一下吧。",
    "answerPy": "Fángjiān tài luàn le, fángdōng kuài lái le, kuài shōushi yíxià ba.",
    "note": "Ôn từ 房东, 收拾 (Bài 2) + 快……了.",
    "pair": "快……了"
   }
  ]
 },
 {
  "n": 29,
  "zh": "管",
  "py": "guǎn",
  "pos": "Động từ",
  "vn": "quản, kiểm soát, trông coi",
  "hv": "quản",
  "em": "🎛️",
  "lesson": 3,
  "explain": [
   "Quản lý, kiểm soát, giữ cho không làm điều sai: 管住自己 = giữ mình, tự kiểm soát bản thân."
  ],
  "usage": "管住 + ai / gì · 管孩子 · 管不住 · 别管.",
  "collo": [
   "管住自己",
   "管孩子",
   "管不住",
   "管得很严"
  ],
  "colloFull": [
   {
    "zh": "管住自己",
    "py": "Guǎn zhù zìjǐ",
    "vn": "tự kiểm soát bản thân"
   },
   {
    "zh": "管孩子",
    "py": "Guǎn háizi",
    "vn": "quản con"
   },
   {
    "zh": "管不住",
    "py": "Guǎn bú zhù",
    "vn": "không kiểm soát được"
   },
   {
    "zh": "管得很严",
    "py": "Guǎn de hěn yán",
    "vn": "quản rất nghiêm"
   }
  ],
  "patterns": [
   {
    "s": "管住 + N",
    "m": "Kiểm soát được (住 là bổ ngữ kết quả)"
   },
   {
    "s": "管不住 + N",
    "m": "Không kiểm soát được (bổ ngữ khả năng)"
   }
  ],
  "ex_zh": "怎么才能管住自己不乱花钱呢？",
  "ex_py": "Zěnme cái néng guǎn zhù zìjǐ bú luàn huā qián ne?",
  "ex_vn": "Làm thế nào mới kiểm soát được bản thân không tiêu tiền lung tung đây?",
  "exList": [
   {
    "zh": "怎么才能管住自己不乱花钱呢？",
    "py": "Zěnme cái néng guǎn zhù zìjǐ bú luàn huā qián ne?",
    "vn": "Làm thế nào mới kiểm soát được bản thân không tiêu tiền lung tung đây?"
   },
   {
    "zh": "我妈管我管得很严，晚上十点以前必须回家。",
    "py": "Wǒ mā guǎn wǒ guǎn de hěn yán, wǎnshang shí diǎn yǐqián bìxū huí jiā.",
    "vn": "Mẹ quản tôi rất nghiêm, phải về nhà trước 10 giờ tối."
   }
  ],
  "hanzi": [
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
    "prompt": "Tôi biết nên tiêu ít tiền, có điều cứ không kiểm soát được bản thân.",
    "answer": "我知道应该少花钱，不过总是管不住自己。",
    "answerPy": "Wǒ zhīdao yīnggāi shǎo huā qián, búguò zǒngshì guǎn bú zhù zìjǐ.",
    "note": "Ôn ……，不过…… (Bài 2 · điểm 2) + bổ ngữ khả năng.",
    "pair": "……，不过……管不住……"
   },
   {
    "promptLang": "vi",
    "prompt": "Việc này bạn đừng quản nữa, để tôi làm là được.",
    "answer": "这件事你别管了，我来做就是了。",
    "answerPy": "Zhè jiàn shì nǐ bié guǎn le, wǒ lái zuò jiù shì le.",
    "note": "Ôn ×就是了 (Bài 2 · điểm 1).",
    "pair": "……就是了"
   }
  ]
 },
 {
  "n": 30,
  "zh": "提供",
  "py": "tígōng",
  "pos": "Động từ",
  "vn": "cung cấp",
  "hv": "đề cung",
  "em": "🤲",
  "lesson": 4,
  "explain": [
   "Đưa ra cho người khác dùng: thông tin, dịch vụ, sự giúp đỡ, cơ hội."
  ],
  "usage": "提供信息 / 帮助 / 服务 / 机会 · 为 / 给 + ai + 提供…….",
  "collo": [
   "提供信息",
   "提供帮助",
   "提供服务",
   "提供机会"
  ],
  "colloFull": [
   {
    "zh": "提供信息",
    "py": "Tígōng xìnxī",
    "vn": "cung cấp thông tin"
   },
   {
    "zh": "提供帮助",
    "py": "Tígōng bāngzhù",
    "vn": "giúp đỡ, hỗ trợ"
   },
   {
    "zh": "提供服务",
    "py": "Tígōng fúwù",
    "vn": "cung cấp dịch vụ"
   },
   {
    "zh": "提供机会",
    "py": "Tígōng jīhuì",
    "vn": "tạo cơ hội"
   }
  ],
  "patterns": [
   {
    "s": "为 / 给 + ai + 提供 + N",
    "m": "Cung cấp … cho ai"
   }
  ],
  "ex_zh": "在提供这些信息时，我们也会担心：我的个人信息能否得到保护？",
  "ex_py": "Zài tígōng zhèxiē xìnxī shí, wǒmen yě huì dānxīn: wǒ de gèrén xìnxī néngfǒu dédào bǎohù?",
  "ex_vn": "Khi cung cấp những thông tin này, chúng ta cũng sẽ lo lắng: thông tin cá nhân của mình có được bảo vệ không?",
  "exList": [
   {
    "zh": "在提供这些信息时，我们也会担心：我的个人信息能否得到保护？",
    "py": "Zài tígōng zhèxiē xìnxī shí, wǒmen yě huì dānxīn: wǒ de gèrén xìnxī néngfǒu dédào bǎohù?",
    "vn": "Khi cung cấp những thông tin này, chúng ta cũng sẽ lo lắng: thông tin cá nhân của mình có được bảo vệ không?"
   },
   {
    "zh": "学校为外国学生提供了很多帮助。",
    "py": "Xuéxiào wèi wàiguó xuésheng tígōng le hěn duō bāngzhù.",
    "vn": "Trường đã hỗ trợ sinh viên nước ngoài rất nhiều."
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
    "c": "供",
    "p": "gōng",
    "type": "左右结构 · Trái-phải",
    "st": 8,
    "ord": "亻 (nhân) trái → 共 (cộng) phải",
    "rad": "亻 (nhân – người)",
    "mean": "cung cấp",
    "tip": "Bộ người 亻 + 共 (cùng nhau) → NGƯỜI cùng góp CHUNG lại để CẤP cho ai đó = CUNG CẤP.",
    "cf": "供 khi đọc \"gòng\" nghĩa là \"cúng, khai\" (供认)",
    "w": "提供 / 供应 / 供不应求"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Làm thủ tục nhận phòng cần anh/chị cung cấp căn cước.",
    "answer": "办入住需要您提供身份证。",
    "answerPy": "Bàn rù zhù xūyào nín tígōng shēnfènzhèng.",
    "note": "Câu 综合练习 (10) + ôn 入住 (Bài 2).",
    "pair": "需要……提供……"
   },
   {
    "promptLang": "vi",
    "prompt": "Bạn Trung Quốc của cô ấy biết chuyện liền giúp đỡ cô ấy ngay.",
    "answer": "她的中国朋友知道后，马上给她提供帮助。",
    "answerPy": "Tā de Zhōngguó péngyou zhīdao hòu, mǎshàng gěi tā tígōng bāngzhù.",
    "note": "Câu trong bài 完成短文 của sách.",
    "pair": "给……提供……"
   }
  ]
 },
 {
  "n": 31,
  "zh": "身份证",
  "py": "shēnfènzhèng",
  "pos": "Danh từ",
  "vn": "chứng minh thư, thẻ căn cước",
  "hv": "thân phận chứng",
  "em": "🪪",
  "lesson": 4,
  "explain": [
   "Thẻ chứng minh danh tính công dân (CMND / CCCD). Ôn 证 (Bài 1): N + 证 = loại thẻ."
  ],
  "usage": "身份证号 · 带身份证 · 刷身份证.",
  "collo": [
   "身份证号",
   "带身份证",
   "刷身份证",
   "办身份证"
  ],
  "colloFull": [
   {
    "zh": "身份证号",
    "py": "Shēnfènzhèng hào",
    "vn": "số căn cước"
   },
   {
    "zh": "带身份证",
    "py": "Dài shēnfènzhèng",
    "vn": "mang căn cước"
   },
   {
    "zh": "刷身份证",
    "py": "Shuā shēnfènzhèng",
    "vn": "quẹt căn cước"
   },
   {
    "zh": "办身份证",
    "py": "Bàn shēnfènzhèng",
    "vn": "làm căn cước"
   }
  ],
  "patterns": [
   {
    "s": "身份 (thân phận) + 证 (thẻ)",
    "m": "Thẻ chứng minh thân phận"
   },
   {
    "s": "份 đọc fèn (thanh 4)",
    "m": "shēnfènzhèng"
   }
  ],
  "ex_zh": "我们经常需要提供姓名、手机号、身份证号等个人信息。",
  "ex_py": "Wǒmen jīngcháng xūyào tígōng xìngmíng, shǒujī hào, shēnfènzhèng hào děng gèrén xìnxī.",
  "ex_vn": "Chúng ta thường phải cung cấp họ tên, số điện thoại, số căn cước và các thông tin cá nhân khác.",
  "exList": [
   {
    "zh": "我们经常需要提供姓名、手机号、身份证号等个人信息。",
    "py": "Wǒmen jīngcháng xūyào tígōng xìngmíng, shǒujī hào, shēnfènzhèng hào děng gèrén xìnxī.",
    "vn": "Chúng ta thường phải cung cấp họ tên, số điện thoại, số căn cước và các thông tin cá nhân khác."
   },
   {
    "zh": "坐火车的时候一定要带身份证。",
    "py": "Zuò huǒchē de shíhou yídìng yào dài shēnfènzhèng.",
    "vn": "Khi đi tàu hỏa nhất định phải mang căn cước."
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
   },
   {
    "c": "份",
    "p": "fèn",
    "type": "左右结构 · Trái-phải",
    "st": 6,
    "ord": "亻 (nhân) trái → 分 (phân) phải",
    "rad": "亻 (nhân – người)",
    "mean": "phần, suất",
    "tip": "Bộ người 亻 + 分 (chia phần) → PHẦN được chia cho một người, mở rộng thành lượng từ đếm công việc/tài liệu/quà tặng.",
    "cf": "纷 (fēn – \"rối ren\", bộ 纟\")",
    "w": "一份工作 / 一份礼物 / 部份"
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
    "prompt": "Cô ấy đang quẹt căn cước để vào ga tàu điện ngầm.",
    "answer": "她正在刷身份证进地铁站。",
    "answerPy": "Tā zhèngzài shuā shēnfènzhèng jìn dìtiě zhàn.",
    "note": "Đáp án sách bài 看图 (3); 正在 + V.",
    "pair": "正在 + V"
   },
   {
    "promptLang": "vi",
    "prompt": "Nếu không mang căn cước thì không mua được vé tàu.",
    "answer": "要是不带身份证，就买不了火车票。",
    "answerPy": "Yàoshi bú dài shēnfènzhèng, jiù mǎi bù le huǒchē piào.",
    "note": "Ôn 要是……就…… (Bài 1 · điểm 2) + 买不了.",
    "pair": "要是……就……"
   }
  ]
 },
 {
  "n": 32,
  "zh": "个人",
  "py": "gèrén",
  "pos": "Danh từ",
  "vn": "cá nhân",
  "hv": "cá nhân",
  "em": "👤",
  "lesson": 4,
  "explain": [
   "Một người riêng lẻ (đối lập với tập thể); 个人信息 = thông tin cá nhân."
  ],
  "usage": "个人信息 · 个人安全 · 我个人觉得.",
  "collo": [
   "个人信息",
   "个人安全",
   "我个人觉得",
   "个人问题"
  ],
  "colloFull": [
   {
    "zh": "个人信息",
    "py": "Gèrén xìnxī",
    "vn": "thông tin cá nhân"
   },
   {
    "zh": "个人安全",
    "py": "Gèrén ānquán",
    "vn": "an toàn cá nhân"
   },
   {
    "zh": "我个人觉得",
    "py": "Wǒ gèrén juéde",
    "vn": "cá nhân tôi thấy"
   },
   {
    "zh": "个人问题",
    "py": "Gèrén wèntí",
    "vn": "chuyện riêng"
   }
  ],
  "patterns": [
   {
    "s": "个人 + N",
    "m": "… của cá nhân"
   }
  ],
  "ex_zh": "网上购物或者订票时，我们经常需要提供姓名、手机号、身份证号等个人信息。",
  "ex_py": "Wǎngshàng gòuwù huòzhě dìng piào shí, wǒmen jīngcháng xūyào tígōng xìngmíng, shǒujī hào, shēnfènzhèng hào děng gèrén xìnxī.",
  "ex_vn": "Khi mua sắm hoặc đặt vé trên mạng, chúng ta thường phải cung cấp họ tên, số điện thoại, số căn cước và các thông tin cá nhân khác.",
  "exList": [
   {
    "zh": "网上购物或者订票时，我们经常需要提供姓名、手机号、身份证号等个人信息。",
    "py": "Wǎngshàng gòuwù huòzhě dìng piào shí, wǒmen jīngcháng xūyào tígōng xìngmíng, shǒujī hào, shēnfènzhèng hào děng gèrén xìnxī.",
    "vn": "Khi mua sắm hoặc đặt vé trên mạng, chúng ta thường phải cung cấp họ tên, số điện thoại, số căn cước và các thông tin cá nhân khác."
   },
   {
    "zh": "这是我个人的看法，你们觉得呢？",
    "py": "Zhè shì wǒ gèrén de kànfǎ, nǐmen juéde ne?",
    "vn": "Đây là quan điểm cá nhân tôi, các bạn thấy sao?"
   }
  ],
  "hanzi": [
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
    "prompt": "Đừng tùy tiện đăng thông tin cá nhân lên mạng.",
    "answer": "别随便在网上发个人信息。",
    "answerPy": "Bié suíbiàn zài wǎngshàng fā gèrén xìnxī.",
    "note": "别 + 随便 + V.",
    "pair": "别随便……"
   },
   {
    "promptLang": "vi",
    "prompt": "Cá nhân tôi thấy mua online một mặt rất tiện, mặt khác cũng dễ tiêu tiền lung tung.",
    "answer": "我个人觉得网购一方面很方便，另一方面也容易乱花钱。",
    "answerPy": "Wǒ gèrén juéde wǎnggòu yìfāngmiàn hěn fāngbiàn, lìngyìfāngmiàn yě róngyì luàn huā qián.",
    "note": "Ôn 一方面……另一方面…… (Bài 1 · điểm 4).",
    "pair": "一方面……另一方面……"
   }
  ]
 },
 {
  "n": 33,
  "zh": "能否",
  "py": "néngfǒu",
  "pos": "Động từ",
  "vn": "có thể … hay không, liệu có",
  "hv": "năng phủ",
  "em": "❔",
  "lesson": 4,
  "explain": [
   "= 能不能, dùng trong văn viết / lời nói trang trọng; thường trong câu hỏi hoặc mệnh đề “liệu có … không”."
  ],
  "usage": "能否 + V · ……能否得到保护.",
  "collo": [
   "能否得到",
   "能否参加",
   "能否成功",
   "能否保证"
  ],
  "colloFull": [
   {
    "zh": "能否得到",
    "py": "Néngfǒu dédào",
    "vn": "liệu có nhận được"
   },
   {
    "zh": "能否参加",
    "py": "Néngfǒu cānjiā",
    "vn": "có thể tham gia không"
   },
   {
    "zh": "能否成功",
    "py": "Néngfǒu chénggōng",
    "vn": "có thành công không"
   },
   {
    "zh": "能否保证",
    "py": "Néngfǒu bǎozhèng",
    "vn": "có đảm bảo được không"
   }
  ],
  "patterns": [
   {
    "s": "能否 = 能不能 (văn viết)",
    "m": "Không thêm 吗 sau câu có 能否"
   },
   {
    "s": "否 = không (Hán Việt “phủ”)",
    "m": "是否 = 是不是"
   }
  ],
  "ex_zh": "我的个人信息能否得到保护？",
  "ex_py": "Wǒ de gèrén xìnxī néngfǒu dédào bǎohù?",
  "ex_vn": "Thông tin cá nhân của tôi liệu có được bảo vệ không?",
  "exList": [
   {
    "zh": "我的个人信息能否得到保护？",
    "py": "Wǒ de gèrén xìnxī néngfǒu dédào bǎohù?",
    "vn": "Thông tin cá nhân của tôi liệu có được bảo vệ không?"
   },
   {
    "zh": "明天的比赛能否进行，还要看天气。",
    "py": "Míngtiān de bǐsài néngfǒu jìnxíng, hái yào kàn tiānqì.",
    "vn": "Trận đấu ngày mai có diễn ra được hay không còn phải xem thời tiết."
   }
  ],
  "hanzi": [
   {
    "c": "能",
    "p": "néng",
    "type": "左右结构 · Trái-phải",
    "st": 10,
    "ord": "厶+月 trái → 匕+匕 phải",
    "rad": "月 (nhục)",
    "mean": "có thể, năng lực",
    "tip": "Chữ tượng hình con gấu (loài vật khỏe mạnh, có NHIỀU KHẢ NĂNG) → mở rộng thành CÓ THỂ, NĂNG LỰC.",
    "cf": "态 (tài – \"thái độ\", có 心 dưới 能\")",
    "w": "能力 / 可能 / 能不能"
   },
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
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Không biết tôi có xin được học bổng không.",
    "answer": "不知道我能否申请到奖学金。",
    "answerPy": "Bù zhīdao wǒ néngfǒu shēnqǐng dào jiǎng xué jīn.",
    "note": "Ôn 申请, 奖学金 (Bài 1).",
    "pair": "能否 + V"
   },
   {
    "promptLang": "vi",
    "prompt": "Xin hỏi tôi có thể thanh toán bằng tiền mặt không?",
    "answer": "请问我能否用现金结账？",
    "answerPy": "Qǐngwèn wǒ néngfǒu yòng xiànjīn jiézhàng?",
    "note": "Cách hỏi lịch sự, trang trọng.",
    "pair": "能否……"
   }
  ]
 },
 {
  "n": 34,
  "zh": "保护",
  "py": "bǎohù",
  "pos": "Động từ",
  "vn": "bảo vệ",
  "hv": "bảo hộ",
  "em": "🛡️",
  "lesson": 4,
  "explain": [
   "Giữ cho không bị tổn hại: bảo vệ môi trường, thông tin, sức khỏe, mắt… Bẫy Hán Việt: “bảo hộ” = bảo vệ."
  ],
  "usage": "保护 + N · 得到保护 · 保护好.",
  "collo": [
   "保护信息",
   "保护环境",
   "保护眼睛",
   "得到保护"
  ],
  "colloFull": [
   {
    "zh": "保护信息",
    "py": "Bǎohù xìnxī",
    "vn": "bảo vệ thông tin"
   },
   {
    "zh": "保护环境",
    "py": "Bǎohù huánjìng",
    "vn": "bảo vệ môi trường"
   },
   {
    "zh": "保护眼睛",
    "py": "Bǎohù yǎnjing",
    "vn": "bảo vệ mắt"
   },
   {
    "zh": "得到保护",
    "py": "Dédào bǎohù",
    "vn": "được bảo vệ"
   }
  ],
  "patterns": [
   {
    "s": "保护 + N",
    "m": "Bảo vệ cái gì"
   },
   {
    "s": "得到 + 保护",
    "m": "Được bảo vệ"
   }
  ],
  "ex_zh": "我的个人信息能否得到保护？",
  "ex_py": "Wǒ de gèrén xìnxī néngfǒu dédào bǎohù?",
  "ex_vn": "Thông tin cá nhân của tôi liệu có được bảo vệ không?",
  "exList": [
   {
    "zh": "我的个人信息能否得到保护？",
    "py": "Wǒ de gèrén xìnxī néngfǒu dédào bǎohù?",
    "vn": "Thông tin cá nhân của tôi liệu có được bảo vệ không?"
   },
   {
    "zh": "看手机时间太长对眼睛不好，要注意保护眼睛。",
    "py": "Kàn shǒujī shíjiān tài cháng duì yǎnjing bù hǎo, yào zhùyì bǎohù yǎnjing.",
    "vn": "Xem điện thoại quá lâu không tốt cho mắt, phải chú ý bảo vệ mắt."
   }
  ],
  "hanzi": [
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
   },
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
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Khi dùng điện thoại, bạn bảo vệ thông tin của mình thế nào?",
    "answer": "用手机时，你会怎样保护自己的信息？",
    "answerPy": "Yòng shǒujī shí, nǐ huì zěnyàng bǎohù zìjǐ de xìnxī?",
    "note": "Câu hỏi phần Khởi động của sách.",
    "pair": "怎样保护……"
   },
   {
    "promptLang": "vi",
    "prompt": "Đạp xe đi làm một mặt tốt cho sức khỏe, mặt khác cũng bảo vệ môi trường.",
    "answer": "骑自行车上班一方面对身体好，另一方面也能保护环境。",
    "answerPy": "Qí zìxíngchē shàngbān yìfāngmiàn duì shēntǐ hǎo, lìngyìfāngmiàn yě néng bǎohù huánjìng.",
    "note": "Ôn 一方面……另一方面…… (Bài 1 · điểm 4).",
    "pair": "一方面……另一方面……"
   }
  ]
 },
 {
  "n": 35,
  "zh": "于是",
  "py": "yúshì",
  "pos": "Liên từ",
  "vn": "thế là, vì vậy",
  "hv": "vu thị",
  "em": "⏭️",
  "lesson": 4,
  "explain": [
   "Đứng đầu vế sau, nối việc xảy ra tiếp theo do việc trước dẫn đến: “thế là, liền”."
  ],
  "usage": "……，于是 + (chủ ngữ) + V · 于是……就…….",
  "collo": [
   "于是就",
   "于是决定",
   "于是开始",
   "于是大家"
  ],
  "colloFull": [
   {
    "zh": "于是就",
    "py": "Yúshì jiù",
    "vn": "thế là liền"
   },
   {
    "zh": "于是决定",
    "py": "Yúshì juédìng",
    "vn": "thế là quyết định"
   },
   {
    "zh": "于是开始",
    "py": "Yúshì kāishǐ",
    "vn": "thế là bắt đầu"
   },
   {
    "zh": "于是大家",
    "py": "Yúshì dàjiā",
    "vn": "thế là mọi người"
   }
  ],
  "patterns": [
   {
    "s": "Việc 1，于是 + việc 2",
    "m": "于是 kể việc ĐÃ xảy ra, không dùng trong câu khuyên / mệnh lệnh"
   }
  ],
  "ex_zh": "于是，有人在网上说出了自己的担心。",
  "ex_py": "Yúshì, yǒurén zài wǎngshàng shuō chū le zìjǐ de dānxīn.",
  "ex_vn": "Thế là có người nói ra nỗi lo của mình trên mạng.",
  "exList": [
   {
    "zh": "于是，有人在网上说出了自己的担心。",
    "py": "Yúshì, yǒurén zài wǎngshàng shuō chū le zìjǐ de dānxīn.",
    "vn": "Thế là có người nói ra nỗi lo của mình trên mạng."
   },
   {
    "zh": "我等了半个小时他也没来，于是我就一个人去了。",
    "py": "Wǒ děng le bàn gè xiǎoshí tā yě méi lái, yúshì wǒ jiù yí gèrén qù le.",
    "vn": "Tôi đợi nửa tiếng anh ấy cũng không đến, thế là tôi đi một mình."
   }
  ],
  "hanzi": [
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
    "prompt": "Cô ấy từ nhỏ đã muốn làm bác sĩ, thế là lên đại học chọn học y.",
    "answer": "她从小就想当医生，于是上大学时就选择了学医。",
    "answerPy": "Tā cóng xiǎo jiù xiǎng dāng yīshēng, yúshì shàng dàxué shí jiù xuǎnzé le xué yī.",
    "note": "Ví dụ của sách (Bài 3 · điểm 4) + ôn 当 (Bài 1).",
    "pair": "……，于是……"
   },
   {
    "promptLang": "vi",
    "prompt": "Tôi rất hài lòng với căn nhà này, thế là thuê luôn.",
    "answer": "我对这个房子很满意，于是就租下来了。",
    "answerPy": "Wǒ duì zhège fángzi hěn mǎnyì, yúshì jiù zū xiàlái le.",
    "note": "Ôn 租, 满意 (Bài 2) + bổ ngữ xu hướng 下来.",
    "pair": "……，于是就……"
   }
  ]
 },
 {
  "n": 36,
  "zh": "密码",
  "py": "mìmǎ",
  "pos": "Danh từ",
  "vn": "mật khẩu, mã PIN",
  "hv": "mật mã",
  "em": "🔐",
  "lesson": 4,
  "explain": [
   "Dãy số / chữ bí mật để mở điện thoại, tài khoản, thẻ ngân hàng."
  ],
  "usage": "输入密码 · 改密码 · 忘记密码 · 银行卡密码.",
  "collo": [
   "输入密码",
   "忘记密码",
   "改密码",
   "银行卡密码"
  ],
  "colloFull": [
   {
    "zh": "输入密码",
    "py": "Shūrù mìmǎ",
    "vn": "nhập mật khẩu"
   },
   {
    "zh": "忘记密码",
    "py": "Wàngjì mìmǎ",
    "vn": "quên mật khẩu"
   },
   {
    "zh": "改密码",
    "py": "Gǎi mìmǎ",
    "vn": "đổi mật khẩu"
   },
   {
    "zh": "银行卡密码",
    "py": "Yínháng kǎ mìmǎ",
    "vn": "mã PIN thẻ ngân hàng"
   }
  ],
  "patterns": [
   {
    "s": "别 / 不 + 把 + 密码 + V",
    "m": "Câu chữ 把 phủ định: 别 / 不 đứng trước 把"
   }
  ],
  "ex_zh": "比如，别把密码随便告诉别人。",
  "ex_py": "Bǐrú, bié bǎ mìmǎ suíbiàn gàosu biérén.",
  "ex_vn": "Chẳng hạn, đừng tùy tiện nói mật khẩu cho người khác.",
  "exList": [
   {
    "zh": "比如，别把密码随便告诉别人。",
    "py": "Bǐrú, bié bǎ mìmǎ suíbiàn gàosu biérén.",
    "vn": "Chẳng hạn, đừng tùy tiện nói mật khẩu cho người khác."
   },
   {
    "zh": "我忘了手机的密码，打不开了。",
    "py": "Wǒ wàng le shǒujī de mìmǎ, dǎ bù kāi le.",
    "vn": "Tôi quên mật khẩu điện thoại, không mở được nữa."
   }
  ],
  "hanzi": [
   {
    "c": "密",
    "p": "mì",
    "type": "上下结构 · Trên-dưới",
    "st": 11,
    "ord": "宀 → 必 → 山",
    "rad": "宀 (miên)",
    "mean": "kín, bí mật",
    "tip": "Nhà 宀 + 必 + núi 山 → nơi kín đáo trong núi → BÍ MẬT, dày đặc. 密码 = mật mã; 秘密 = bí mật.",
    "cf": "蜜 (mì – mật ong)",
    "w": "密码 / 秘密"
   },
   {
    "c": "码",
    "p": "mǎ",
    "type": "左右结构 · Trái-phải",
    "st": 8,
    "ord": "石 trái → 马 phải",
    "rad": "石 (thạch)",
    "mean": "mã, số",
    "tip": "Đá 石 + 马(biểu âm) → viên đá dùng để đếm → MÃ SỐ. 号码 = số hiệu; 密码 = mật mã.",
    "cf": "妈 (mā – mẹ)",
    "w": "号码 / 密码 / 数码"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Anh ấy sợ quên mật khẩu nên ghi mật khẩu vào sổ.",
    "answer": "他担心忘记密码，就把密码记在了本子上。",
    "answerPy": "Tā dānxīn wàngjì mìmǎ, jiù bǎ mìmǎ jì zài le běnzi shàng.",
    "note": "Đáp án sách bài 看图 (2); 把 + V在 + nơi chốn.",
    "pair": "把……记在……"
   },
   {
    "promptLang": "vi",
    "prompt": "Nếu bạn quên mật khẩu thì có thể đổi một cái mới.",
    "answer": "要是你忘了密码，就可以改一个新的。",
    "answerPy": "Yàoshi nǐ wàng le mìmǎ, jiù kěyǐ gǎi yí gè xīn de.",
    "note": "Ôn 要是……就…… (Bài 1 · điểm 2).",
    "pair": "要是……就……"
   }
  ]
 },
 {
  "n": 37,
  "zh": "随便",
  "py": "suíbiàn",
  "pos": "Tính từ / Động từ / Liên từ",
  "vn": "tùy tiện, tùy ý; gì cũng được",
  "hv": "tùy tiện",
  "em": "🤷",
  "lesson": 4,
  "explain": [
   "Tính từ: tùy tiện, không cẩn thận (随便告诉别人 = tùy tiện nói cho người khác).",
   "Động từ: tùy ý, sao cũng được (A：吃什么？B：随便。)."
  ],
  "usage": "随便 + V · 别随便…… · 随便看看 · 随便！",
  "collo": [
   "随便告诉",
   "随便说说",
   "别随便",
   "随便看看"
  ],
  "colloFull": [
   {
    "zh": "随便告诉",
    "py": "Suíbiàn gàosu",
    "vn": "tùy tiện nói ra"
   },
   {
    "zh": "随便说说",
    "py": "Suíbiàn shuō shuō",
    "vn": "nói vui thôi"
   },
   {
    "zh": "别随便",
    "py": "Bié suíbiàn",
    "vn": "đừng tùy tiện"
   },
   {
    "zh": "随便看看",
    "py": "Suíbiàn kàn kàn",
    "vn": "cứ xem tự nhiên"
   }
  ],
  "patterns": [
   {
    "s": "别 + 随便 + V",
    "m": "Đừng tùy tiện làm gì"
   },
   {
    "s": "Bẫy Hán Việt",
    "m": "“Tùy tiện” tiếng Việt chỉ mang nghĩa xấu; 随便 còn nghĩa trung tính “tùy ý, gì cũng được”"
   }
  ],
  "ex_zh": "比如，别把密码随便告诉别人。",
  "ex_py": "Bǐrú, bié bǎ mìmǎ suíbiàn gàosu biérén.",
  "ex_vn": "Chẳng hạn, đừng tùy tiện nói mật khẩu cho người khác.",
  "exList": [
   {
    "zh": "比如，别把密码随便告诉别人。",
    "py": "Bǐrú, bié bǎ mìmǎ suíbiàn gàosu biérén.",
    "vn": "Chẳng hạn, đừng tùy tiện nói mật khẩu cho người khác."
   },
   {
    "zh": "A：你想吃什么？B：随便，你点吧。",
    "py": "A: nǐ xiǎng chī shénme? B: suíbiàn, nǐ diǎn ba.",
    "vn": "A: Bạn muốn ăn gì? B: Gì cũng được, bạn gọi đi."
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
    "prompt": "Đừng tùy tiện nói mật khẩu cho người khác.",
    "answer": "别把密码随便告诉别人。",
    "answerPy": "Bié bǎ mìmǎ suíbiàn gàosu biérén.",
    "note": "Câu bài khoá 4.",
    "pair": "别……随便……"
   },
   {
    "promptLang": "vi",
    "prompt": "Bạn cứ xem tự nhiên, có bất kỳ câu hỏi gì cứ hỏi tôi.",
    "answer": "你随便看看，有任何问题都可以问我。",
    "answerPy": "Nǐ suíbiàn kàn kàn, yǒu rènhé wèntí dōu kěyǐ wèn wǒ.",
    "note": "Ôn 任何 (Bài 1 · điểm 1).",
    "pair": "任何……都……"
   }
  ]
 },
 {
  "n": 38,
  "zh": "技术",
  "py": "jìshù",
  "pos": "Danh từ",
  "vn": "kỹ thuật, công nghệ",
  "hv": "kỹ thuật",
  "em": "🤖",
  "lesson": 4,
  "explain": [
   "Kiến thức, kỹ năng chuyên môn để làm ra / làm tốt việc gì; công nghệ."
  ],
  "usage": "网络技术 · 新技术 · 技术手段.",
  "collo": [
   "网络技术",
   "新技术",
   "技术手段",
   "技术很好"
  ],
  "colloFull": [
   {
    "zh": "网络技术",
    "py": "Wǎngluò jìshù",
    "vn": "công nghệ mạng"
   },
   {
    "zh": "新技术",
    "py": "Xīn jìshù",
    "vn": "công nghệ mới"
   },
   {
    "zh": "技术手段",
    "py": "Jìshù shǒuduàn",
    "vn": "biện pháp kỹ thuật"
   },
   {
    "zh": "技术很好",
    "py": "Jìshù hěn hǎo",
    "vn": "tay nghề giỏi"
   }
  ],
  "patterns": [
   {
    "s": "N + 技术",
    "m": "Công nghệ / kỹ thuật về …"
   }
  ],
  "ex_zh": "现在，很多国家也通过技术、法律等手段来保证个人信息安全。",
  "ex_py": "Xiànzài, hěn duō guójiā yě tōngguò jìshù, fǎlǜ děng shǒuduàn lái bǎozhèng gèrén xìnxī ānquán.",
  "ex_vn": "Hiện nay nhiều quốc gia cũng dùng các biện pháp như công nghệ, pháp luật để bảo đảm an toàn thông tin cá nhân.",
  "exList": [
   {
    "zh": "现在，很多国家也通过技术、法律等手段来保证个人信息安全。",
    "py": "Xiànzài, hěn duō guójiā yě tōngguò jìshù, fǎlǜ děng shǒuduàn lái bǎozhèng gèrén xìnxī ānquán.",
    "vn": "Hiện nay nhiều quốc gia cũng dùng các biện pháp như công nghệ, pháp luật để bảo đảm an toàn thông tin cá nhân."
   },
   {
    "zh": "随着技术的发展，手机能做的事情越来越多了。",
    "py": "Suízhe jìshù de fāzhǎn, shǒujī néng zuò de shìqing yuèláiyuè duō le.",
    "vn": "Cùng với sự phát triển của công nghệ, việc điện thoại làm được ngày càng nhiều."
   }
  ],
  "hanzi": [
   {
    "c": "技",
    "p": "jì",
    "type": "左右结构 · Trái-phải",
    "st": 7,
    "ord": "扌 trái → 支 phải",
    "rad": "扌 (thủ)",
    "mean": "kỹ năng",
    "tip": "Tay 扌 + 支 → tay khéo → KỸ (kỹ năng). 技术 = kỹ thuật; 科技 = khoa học kỹ thuật.",
    "cf": "枝 (zhī – cành)",
    "w": "技术 / 科技"
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
    "prompt": "Công việc này yêu cầu rất hiểu biết về công nghệ mạng.",
    "answer": "这个工作要求对网络技术很了解。",
    "answerPy": "Zhège gōngzuò yāoqiú duì wǎngluò jìshù hěn liǎojiě.",
    "note": "Câu 综合练习 (7): 对……很了解.",
    "pair": "对……很了解"
   },
   {
    "promptLang": "vi",
    "prompt": "Anh ấy không những hiểu kỹ thuật mà còn rất giỏi giao tiếp với mọi người.",
    "answer": "他不仅懂技术，而且很会跟人交流。",
    "answerPy": "Tā bùjǐn dǒng jìshù, érqiě hěn huì gēn rén jiāoliú.",
    "note": "Bài 3 · điểm 2 + ôn 交流 (Bài 1).",
    "pair": "不仅……而且……"
   }
  ]
 },
 {
  "n": 39,
  "zh": "法律",
  "py": "fǎlǜ",
  "pos": "Danh từ",
  "vn": "pháp luật, luật",
  "hv": "pháp luật",
  "em": "⚖️",
  "lesson": 4,
  "explain": [
   "Các quy định do nhà nước đặt ra, mọi người phải tuân theo."
  ],
  "usage": "法律手段 · 学法律 · 法律专业.",
  "collo": [
   "法律手段",
   "学法律",
   "法律专业",
   "遵守法律"
  ],
  "colloFull": [
   {
    "zh": "法律手段",
    "py": "Fǎlǜ shǒuduàn",
    "vn": "biện pháp pháp luật"
   },
   {
    "zh": "学法律",
    "py": "Xué fǎlǜ",
    "vn": "học luật"
   },
   {
    "zh": "法律专业",
    "py": "Fǎlǜ zhuānyè",
    "vn": "ngành luật"
   },
   {
    "zh": "遵守法律",
    "py": "Zūnshǒu fǎlǜ",
    "vn": "tuân thủ pháp luật"
   }
  ],
  "patterns": [
   {
    "s": "通过 + 法律 + 来 + V",
    "m": "Dùng pháp luật để …"
   },
   {
    "s": "律 đọc lǜ (có hai chấm ü)",
    "m": "fǎlǜ"
   }
  ],
  "ex_zh": "现在，很多国家也通过技术、法律等手段来保证个人信息安全。",
  "ex_py": "Xiànzài, hěn duō guójiā yě tōngguò jìshù, fǎlǜ děng shǒuduàn lái bǎozhèng gèrén xìnxī ānquán.",
  "ex_vn": "Hiện nay nhiều quốc gia cũng dùng các biện pháp như công nghệ, pháp luật để bảo đảm an toàn thông tin cá nhân.",
  "exList": [
   {
    "zh": "现在，很多国家也通过技术、法律等手段来保证个人信息安全。",
    "py": "Xiànzài, hěn duō guójiā yě tōngguò jìshù, fǎlǜ děng shǒuduàn lái bǎozhèng gèrén xìnxī ānquán.",
    "vn": "Hiện nay nhiều quốc gia cũng dùng các biện pháp như công nghệ, pháp luật để bảo đảm an toàn thông tin cá nhân."
   },
   {
    "zh": "他大学学的是法律专业。",
    "py": "Tā dàxué xué de shì fǎlǜ zhuānyè.",
    "vn": "Ở đại học anh ấy học chuyên ngành luật."
   }
  ],
  "hanzi": [
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
   },
   {
    "c": "律",
    "p": "lǜ",
    "type": "左右结构 · Trái-phải",
    "st": 9,
    "ord": "彳 (xích) trái → 聿 (duật) phải",
    "rad": "彳 (xích – bước chân nhỏ)",
    "mean": "luật lệ, quy tắc",
    "tip": "Bộ 彳 (đi, hành động) + 聿 (cây bút, ghi chép) → những điều được VIẾT RA để mọi người phải THEO đó mà hành động = LUẬT.",
    "cf": "律 dễ nhầm với 津 (jīn – bến đò, cũng có nét tương tự bên phải)",
    "w": "法律 / 规律 / 律师"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Nhiều nước dùng pháp luật để bảo vệ thông tin cá nhân.",
    "answer": "很多国家通过法律来保护个人信息。",
    "answerPy": "Hěn duō guójiā tōngguò fǎlǜ lái bǎohù gèrén xìnxī.",
    "note": "Ôn 通过 (Bài 1).",
    "pair": "通过……来……"
   },
   {
    "promptLang": "vi",
    "prompt": "Cùng với sự phát triển của Internet, luật về mạng cũng ngày càng nhiều.",
    "answer": "随着网络的发展，关于网络的法律也越来越多了。",
    "answerPy": "Suízhe wǎngluò de fāzhǎn, guānyú wǎngluò de fǎlǜ yě yuèláiyuè duō le.",
    "note": "Ôn 随着 (Bài 1 · điểm 3).",
    "pair": "随着……"
   }
  ]
 },
 {
  "n": 40,
  "zh": "手段",
  "py": "shǒuduàn",
  "pos": "Danh từ",
  "vn": "biện pháp, phương tiện, cách thức",
  "hv": "thủ đoạn",
  "em": "🧰",
  "lesson": 4,
  "explain": [
   "Cách thức, biện pháp để đạt mục đích. Bẫy Hán Việt: 手段 thường trung tính (biện pháp), không mang nghĩa xấu như “thủ đoạn” trong tiếng Việt."
  ],
  "usage": "技术手段 · 法律手段 · 通过……等手段.",
  "collo": [
   "技术手段",
   "法律手段",
   "支付手段",
   "通过……手段"
  ],
  "colloFull": [
   {
    "zh": "技术手段",
    "py": "Jìshù shǒuduàn",
    "vn": "biện pháp kỹ thuật"
   },
   {
    "zh": "法律手段",
    "py": "Fǎlǜ shǒuduàn",
    "vn": "biện pháp pháp luật"
   },
   {
    "zh": "支付手段",
    "py": "Zhīfù shǒuduàn",
    "vn": "phương tiện thanh toán"
   },
   {
    "zh": "通过……手段",
    "py": "Tōngguò…… shǒuduàn",
    "vn": "thông qua biện pháp …"
   }
  ],
  "patterns": [
   {
    "s": "通过 + A、B + 等手段 + 来 + V",
    "m": "Dùng các biện pháp … để …"
   }
  ],
  "ex_zh": "现在，很多国家也通过技术、法律等手段来保证个人信息安全。",
  "ex_py": "Xiànzài, hěn duō guójiā yě tōngguò jìshù, fǎlǜ děng shǒuduàn lái bǎozhèng gèrén xìnxī ānquán.",
  "ex_vn": "Hiện nay nhiều quốc gia cũng dùng các biện pháp như công nghệ, pháp luật để bảo đảm an toàn thông tin cá nhân.",
  "exList": [
   {
    "zh": "现在，很多国家也通过技术、法律等手段来保证个人信息安全。",
    "py": "Xiànzài, hěn duō guójiā yě tōngguò jìshù, fǎlǜ děng shǒuduàn lái bǎozhèng gèrén xìnxī ānquán.",
    "vn": "Hiện nay nhiều quốc gia cũng dùng các biện pháp như công nghệ, pháp luật để bảo đảm an toàn thông tin cá nhân."
   },
   {
    "zh": "现在手机已经成为人们最常用的支付手段。",
    "py": "Xiànzài shǒujī yǐjīng chéngwéi rén men zuì chángyòng de zhīfù shǒuduàn.",
    "vn": "Bây giờ điện thoại đã trở thành phương tiện thanh toán mọi người dùng nhiều nhất."
   }
  ],
  "hanzi": [
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
   },
   {
    "c": "段",
    "p": "duàn",
    "type": "形声字 · Chữ hình thanh",
    "st": 9,
    "ord": "Bên trái (nét phẩy, ngang, sổ, hai nét ngang, nét hất) → 殳",
    "rad": "殳 (thù – tay cầm công cụ)",
    "mean": "đoạn, khúc, quãng",
    "tip": "Bên phải 殳 là bàn tay cầm công cụ gõ đập: đập đá ra thành từng khúc → đoạn, khúc. 一段时间 = một quãng thời gian; 一段路 = một quãng đường.",
    "cf": "锻 duàn (锻炼 – HSK3 Bài 5) — thêm 钅 (kim loại) bên trái",
    "w": "一段时间 / 一段路"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Nhà nước sẽ dùng biện pháp gì để bảo đảm an toàn thông tin cá nhân?",
    "answer": "国家会通过什么手段来保证个人信息安全？",
    "answerPy": "Guójiā huì tōngguò shénme shǒuduàn lái bǎozhèng gèrén xìnxī ānquán?",
    "note": "Câu hỏi bài khoá 4.",
    "pair": "通过……手段来……"
   },
   {
    "promptLang": "vi",
    "prompt": "Điện thoại đã trở thành phương tiện thanh toán quan trọng nhất.",
    "answer": "手机已经成为最重要的支付手段了。",
    "answerPy": "Shǒujī yǐjīng chéngwéi zuì zhòngyào de zhīfù shǒuduàn le.",
    "note": "Ôn 成为 (Bài 1).",
    "pair": "成为……"
   }
  ]
 },
 {
  "n": 41,
  "zh": "保证",
  "py": "bǎozhèng",
  "pos": "Động từ / Danh từ",
  "vn": "bảo đảm, cam đoan; sự bảo đảm",
  "hv": "bảo chứng",
  "em": "✅",
  "lesson": 4,
  "explain": [
   "Động từ: bảo đảm chắc chắn đạt được / làm được; cam đoan.",
   "Danh từ: sự bảo đảm, lời cam kết."
  ],
  "usage": "保证 + việc · 保证安全 · 我保证…….",
  "collo": [
   "保证安全",
   "保证质量",
   "我保证",
   "保证按时"
  ],
  "colloFull": [
   {
    "zh": "保证安全",
    "py": "Bǎozhèng ānquán",
    "vn": "bảo đảm an toàn"
   },
   {
    "zh": "保证质量",
    "py": "Bǎozhèng zhìliàng",
    "vn": "bảo đảm chất lượng"
   },
   {
    "zh": "我保证",
    "py": "Wǒ bǎozhèng",
    "vn": "tôi cam đoan"
   },
   {
    "zh": "保证按时",
    "py": "Bǎozhèng ànshí",
    "vn": "bảo đảm đúng giờ"
   }
  ],
  "patterns": [
   {
    "s": "保证 + câu / N",
    "m": "Bảo đảm …"
   },
   {
    "s": "保证 (bảo đảm) ≠ 保护 (bảo vệ)",
    "m": "Cùng chữ 保 nhưng nghĩa khác"
   }
  ],
  "ex_zh": "现在，很多国家也通过技术、法律等手段来保证个人信息安全。",
  "ex_py": "Xiànzài, hěn duō guójiā yě tōngguò jìshù, fǎlǜ děng shǒuduàn lái bǎozhèng gèrén xìnxī ānquán.",
  "ex_vn": "Hiện nay nhiều quốc gia cũng dùng các biện pháp như công nghệ, pháp luật để bảo đảm an toàn thông tin cá nhân.",
  "exList": [
   {
    "zh": "现在，很多国家也通过技术、法律等手段来保证个人信息安全。",
    "py": "Xiànzài, hěn duō guójiā yě tōngguò jìshù, fǎlǜ děng shǒuduàn lái bǎozhèng gèrén xìnxī ānquán.",
    "vn": "Hiện nay nhiều quốc gia cũng dùng các biện pháp như công nghệ, pháp luật để bảo đảm an toàn thông tin cá nhân."
   },
   {
    "zh": "我保证以后不乱花钱了。",
    "py": "Wǒ bǎozhèng yǐhòu bú luàn huā qián le.",
    "vn": "Con cam đoan sau này không tiêu tiền lung tung nữa."
   }
  ],
  "hanzi": [
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
    "prompt": "Các anh có thể bảo đảm chiều nay giao số hàng này tới không?",
    "answer": "你们能保证这些货下午就送到吗？",
    "answerPy": "Nǐmen néng bǎozhèng zhèxiē huò xiàwǔ jiù sòng dào ma?",
    "note": "Câu 综合练习 (8) của sách.",
    "pair": "保证……"
   },
   {
    "promptLang": "vi",
    "prompt": "Tôi cam đoan trong bất kỳ trường hợp nào cũng không nói mật khẩu cho người khác.",
    "answer": "我保证在任何情况下都不把密码告诉别人。",
    "answerPy": "Wǒ bǎozhèng zài rènhé qíngkuàng xià dōu bù bǎ mìmǎ gàosu biérén.",
    "note": "Ôn 任何 (Bài 1 · điểm 1) + 把 phủ định.",
    "pair": "任何……都不……"
   }
  ]
 },
 {
  "n": 42,
  "zh": "网络",
  "py": "wǎngluò",
  "pos": "Danh từ",
  "vn": "mạng, Internet",
  "hv": "võng lạc",
  "em": "🌐",
  "lesson": 4,
  "explain": [
   "Mạng máy tính, Internet. 网络时代 = thời đại Internet; 网络安全法 = Luật An ninh mạng."
  ],
  "usage": "网络安全 · 网络时代 · 没有网络.",
  "collo": [
   "网络安全",
   "网络时代",
   "网络技术",
   "没有网络"
  ],
  "colloFull": [
   {
    "zh": "网络安全",
    "py": "Wǎngluò ānquán",
    "vn": "an ninh mạng"
   },
   {
    "zh": "网络时代",
    "py": "Wǎngluò shídài",
    "vn": "thời đại Internet"
   },
   {
    "zh": "网络技术",
    "py": "Wǎngluò jìshù",
    "vn": "công nghệ mạng"
   },
   {
    "zh": "没有网络",
    "py": "Méiyǒu wǎngluò",
    "vn": "không có mạng"
   }
  ],
  "patterns": [
   {
    "s": "网络 + N",
    "m": "… về mạng / trên mạng"
   },
   {
    "s": "网络 (trang trọng) ≈ 网 (khẩu ngữ)",
    "m": "上网 / 网上 / 网购"
   }
  ],
  "ex_zh": "比如中国的网络安全法、个人信息保护法等就很好地保护了人们的个人信息。",
  "ex_py": "Bǐrú Zhōngguó de wǎngluò ānquán fǎ, gèrén xìnxī bǎohù fǎ děng jiù hěn hǎo de bǎohù le rén men de gèrén xìnxī.",
  "ex_vn": "Ví dụ như Luật An ninh mạng, Luật Bảo vệ thông tin cá nhân của Trung Quốc đã bảo vệ rất tốt thông tin cá nhân của mọi người.",
  "exList": [
   {
    "zh": "比如中国的网络安全法、个人信息保护法等就很好地保护了人们的个人信息。",
    "py": "Bǐrú Zhōngguó de wǎngluò ānquán fǎ, gèrén xìnxī bǎohù fǎ děng jiù hěn hǎo de bǎohù le rén men de gèrén xìnxī.",
    "vn": "Ví dụ như Luật An ninh mạng, Luật Bảo vệ thông tin cá nhân của Trung Quốc đã bảo vệ rất tốt thông tin cá nhân của mọi người."
   },
   {
    "zh": "这里没有网络，手机不能用。",
    "py": "Zhèli méiyǒu wǎngluò, shǒujī bù néng yòng.",
    "vn": "Ở đây không có mạng, điện thoại không dùng được."
   }
  ],
  "hanzi": [
   {
    "c": "网",
    "p": "wǎng",
    "type": "半包围结构 · Bán bao vây (giản thể)",
    "st": 6,
    "ord": "冂 bao ngoài → 亡 trong",
    "rad": "冂 (quynh)",
    "mean": "lưới",
    "tip": "Chữ tượng hình cái LƯỚI đan chéo → nghĩa gốc là LƯỚI, kết hợp 球(quả bóng) thành 网球 = QUẦN VỢT (bóng đánh qua lưới).",
    "cf": "罔 (wǎng – \"lừa dối\", ít dùng)",
    "w": "网球 / 上网 / 网站"
   },
   {
    "c": "络",
    "p": "luò",
    "type": "形声字 · Chữ hình thanh",
    "st": 9,
    "ord": "纟 → 各",
    "rad": "纟 (mịch – sợi tơ)",
    "mean": "mạng lưới, sợi đan nhau; liên lạc",
    "tip": "Sợi tơ 纟 + 各 (chỉ âm): các sợi tơ đan nối với nhau thành lưới — 网络 = mạng, 联络 = liên lạc.",
    "cf": "给 gěi — bên phải là 合; 格 gé — bên trái là 木",
    "w": "网络 / 联络 / 经络"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Nếu không có mạng thì không thanh toán bằng điện thoại được.",
    "answer": "要是没有网络，就不能用手机支付了。",
    "answerPy": "Yàoshi méiyǒu wǎngluò, jiù bù néng yòng shǒujī zhīfù le.",
    "note": "Ôn 要是……就…… (Bài 1 · điểm 2).",
    "pair": "要是……就……"
   },
   {
    "promptLang": "vi",
    "prompt": "Trong thời đại Internet, chúng ta phải bảo vệ tốt thông tin cá nhân.",
    "answer": "在网络时代，我们要保护好个人信息。",
    "answerPy": "Zài wǎngluò shídài, wǒmen yào bǎohù hǎo gèrén xìnxī.",
    "note": "Bổ ngữ kết quả 保护好.",
    "pair": "V好"
   }
  ]
 }
];
var wuData = [
 {
  "img": "/images/hsk4v3/bai-3/wu-A.webp",
  "label": "法律",
  "py": "fǎlǜ",
  "letter": "A"
 },
 {
  "img": "/images/hsk4v3/bai-3/wu-B.webp",
  "label": "扫码支付",
  "py": "sǎomǎ zhīfù",
  "letter": "B"
 },
 {
  "img": "/images/hsk4v3/bai-3/wu-C.webp",
  "label": "网购",
  "py": "wǎnggòu",
  "letter": "C"
 },
 {
  "img": "/images/hsk4v3/bai-3/wu-D.webp",
  "label": "快递员",
  "py": "kuàidìyuán",
  "letter": "D"
 },
 {
  "img": "/images/hsk4v3/bai-3/wu-E.webp",
  "label": "管",
  "py": "guǎn",
  "letter": "E"
 },
 {
  "img": "/images/hsk4v3/bai-3/wu-F.webp",
  "label": "保护",
  "py": "bǎohù",
  "letter": "F"
 }
];
var dialogData = [
 {
  "scene": "在路上 · Trên đường (Trần Thiên Trung từ trường đi ra thì bị lạc, hỏi đường một bạn học)",
  "anh": "/images/hsk4v3/bai-3/kv-1.webp",
  "nguoi": [
   {
    "ten": "陈天中",
    "anh": "/images/hsk4v3/nv/chen.webp"
   },
   {
    "ten": "同学",
    "anh": "/images/hsk4v3/bai-3/tongxue.webp"
   }
  ],
  "preQuiz": [
   {
    "q": "陈天中到十字路口后，应该怎么走？",
    "opts": [
     "向前走",
     "向右转",
     "向左转",
     "向南走"
    ],
    "ans": 1
   },
   {
    "q": "为了找到目的地，同学建议陈天中：",
    "opts": [
     "坐地铁",
     "买张地图",
     "用手机地图",
     "问出租车司机"
    ],
    "ans": 2
   }
  ],
  "lines": [
   {
    "sp": 0,
    "zh": "请问，花园小区怎么走？",
    "py": "Qǐngwèn, huāyuán xiǎoqū zěnme zǒu?",
    "vn": "Cho hỏi, khu dân cư Hoa Viên đi đường nào ạ?"
   },
   {
    "sp": 1,
    "zh": "你往前走，到十字路口不要过马路，直接右转就到小区门口了。正好我也去那边，一起走吧。",
    "py": "Nǐ wǎng qián zǒu, dào shízì lùkǒu búyào guò mǎlù, zhíjiē yòu zhuǎn jiù dào xiǎoqū ménkǒu le. Zhènghǎo wǒ yě qù nàbiān, yìqǐ zǒu ba.",
    "vn": "Bạn cứ đi thẳng, đến ngã tư đừng sang đường, rẽ phải luôn là tới cổng khu. Vừa khéo mình cũng đi về phía đó, đi cùng luôn nhé."
   },
   {
    "sp": 0,
    "zh": "好的。我刚来中国，不熟悉路。北京真是太大了。",
    "py": "Hǎo de. Wǒ gāng lái Zhōngguó, bù shúxi lù. Běijīng zhēn shì tài dà le.",
    "vn": "Được ạ. Mình mới đến Trung Quốc, chưa thạo đường. Bắc Kinh đúng là rộng quá."
   },
   {
    "sp": 1,
    "zh": "北京大是大，不过这边的路基本上都是正南正北、正东正西的，很好找。你也可以用手机地图，很容易就能找到目的地。",
    "py": "Běijīng dà shì dà, búguò zhèbiān de lù jīběn shàng dōu shì zhèng nán zhèng běi, zhèng dōng zhèng xī de, hěn hǎo zhǎo. Nǐ yě kěyǐ yòng shǒujī dìtú, hěn róngyì jiù néng zhǎo dào mùdìdì.",
    "vn": "Bắc Kinh rộng thì rộng thật, nhưng đường bên này hầu như đều theo hướng chính Nam – Bắc, chính Đông – Tây, rất dễ tìm. Bạn cũng có thể dùng bản đồ trên điện thoại, rất dễ tìm được nơi cần đến."
   },
   {
    "sp": 0,
    "zh": "嗯，不过很多中文地名我还不认识。",
    "py": "Ǹg, búguò hěn duō Zhōngwén de míng wǒ hái bú rènshi.",
    "vn": "Ừm, có điều nhiều tên địa danh tiếng Trung mình vẫn chưa đọc được."
   },
   {
    "sp": 1,
    "zh": "没关系，你很快就会熟悉的。",
    "py": "Méiguānxì, nǐ hěn kuài jiù huì shúxi de.",
    "vn": "Không sao, bạn sẽ quen nhanh thôi."
   }
  ]
 },
 {
  "scene": "在学校食堂 · Ở nhà ăn của trường (trưa tan học, Bạch Gia Nguyệt và Trần Thiên Trung gặp nhau, vừa ăn vừa trò chuyện)",
  "anh": "/images/hsk4v3/bai-3/kv-2.webp",
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
    "q": "李文帮陈天中下载了什么软件？",
    "opts": [
     "快递软件",
     "网购软件",
     "中国银行软件",
     "微信和支付宝"
    ],
    "ans": 3
   },
   {
    "q": "陈天中为什么着急回去？",
    "opts": [
     "要上课了",
     "李文找他",
     "快递员快到了",
     "网购的手机到了"
    ],
    "ans": 2
   }
  ],
  "lines": [
   {
    "sp": 0,
    "zh": "前两天和李文喝咖啡时，他帮我下载了微信和支付宝，教我认识里边的汉字，还教我用手机进行支付。",
    "py": "Qián liǎng tiān hé Lǐ Wén hē kāfēi shí, tā bāng wǒ xiàzài le Wēixìn hé Zhīfùbǎo, jiào wǒ rènshi lǐbian de hànzì, hái jiào wǒ yòng shǒujī jìnxíng zhīfù.",
    "vn": "Mấy hôm trước lúc uống cà phê với Lý Văn, cậu ấy giúp tớ tải WeChat và Alipay, dạy tớ nhận mặt chữ Hán trong đó, còn dạy tớ thanh toán bằng điện thoại."
   },
   {
    "sp": 1,
    "zh": "他也教了我怎么用这两个软件。",
    "py": "Tā yě jiào le wǒ zěnme yòng zhè liǎng gè ruǎnjiàn.",
    "vn": "Cậu ấy cũng dạy tớ cách dùng hai phần mềm này."
   },
   {
    "sp": 0,
    "zh": "现在我不仅会扫码结账，还会用手机在网上购物了。昨天我就在网上订了一台电脑，今天下午一点送到。",
    "py": "Xiànzài wǒ bùjǐn huì sǎomǎ jiézhàng, hái huì yòng shǒujī zài wǎngshàng gòuwù le. Zuótiān wǒ jiù zài wǎngshàng dìng le yì tái diànnǎo, jīntiān xiàwǔ yì diǎn sòng dào.",
    "vn": "Giờ tớ không những biết quét mã thanh toán, mà còn biết dùng điện thoại mua hàng trên mạng nữa. Hôm qua tớ vừa đặt một cái máy tính trên mạng, chiều nay 1 giờ giao tới."
   },
   {
    "sp": 1,
    "zh": "学会了这些，我们在中国生活真是方便了不少。",
    "py": "Xué huì le zhèxiē, wǒmen zài Zhōngguó shēnghuó zhēn shì fāngbiàn le bù shǎo.",
    "vn": "Học được mấy thứ này rồi, cuộc sống của bọn mình ở Trung Quốc đúng là tiện hơn nhiều."
   },
   {
    "sp": 0,
    "zh": "对。快递员要到了，我得马上回去！家月，明天见！",
    "py": "Duì. Kuàidì yuán yào dào le, wǒ děi mǎshàng huíqù! Jiāyuè, míngtiānjiàn!",
    "vn": "Đúng thế. Shipper sắp đến rồi, tớ phải về ngay! Gia Nguyệt, mai gặp nhé!"
   },
   {
    "sp": 1,
    "zh": "好的，天中，再见。",
    "py": "Hǎo de, Tiānzhōng, zàijiàn.",
    "vn": "Ừ, Thiên Trung, tạm biệt."
   }
  ]
 },
 {
  "scene": "生活新体验 · Trải nghiệm mới trong cuộc sống (du học sinh học cách dùng điện thoại ở Trung Quốc)",
  "anh": "/images/hsk4v3/bai-3/kv-3.webp",
  "nguoi": [
   {
    "ten": "小语",
    "anh": "/images/hsk4v3/nv/xiaoyu.webp"
   }
  ],
  "preQuiz": [
   {
    "q": "白家月和陈天中发现中国人在饭馆吃饭有什么习惯？",
    "opts": [
     "用现金结账",
     "用手机支付",
     "喜欢用筷子",
     "吃完饭再结账"
    ],
    "ans": 1
   },
   {
    "q": "根据课文，留学生网购时会担心什么？",
    "opts": [
     "乱花钱",
     "价格高",
     "送货太慢",
     "银行卡会丢"
    ],
    "ans": 0
   }
  ],
  "lines": [
   {
    "sp": 0,
    "zh": "白家月和陈天中刚到北京时就发现，中国人在饭馆或超市结账时，几乎都用手机支付，只有他们用现金结账。",
    "py": "Bái Jiāyuè hé Chén Tiānzhōng gāng dào Běijīng shí jiù fāxiàn, zhōngguórén zài fànguǎn huò chāoshì jiézhàng shí, jīhū dōu yòng shǒujī zhīfù, zhǐyǒu tāmen yòng xiànjīn jiézhàng.",
    "vn": "Bạch Gia Nguyệt và Trần Thiên Trung vừa đến Bắc Kinh đã phát hiện ra: người Trung Quốc khi thanh toán ở quán ăn hay siêu thị gần như đều dùng điện thoại, chỉ có họ là trả bằng tiền mặt."
   },
   {
    "sp": 0,
    "zh": "在李文的帮助下，白家月和陈天中也都学会了用手机支付、网购、寄快递等等。",
    "py": "Zài Lǐ Wén de bāngzhù xià, Bái Jiāyuè hé Chén Tiānzhōng yě dōu xué huì le yòng shǒujī zhīfù, wǎnggòu, jì kuàidì děng děng.",
    "vn": "Nhờ sự giúp đỡ của Lý Văn, Bạch Gia Nguyệt và Trần Thiên Trung cũng đều đã học được cách thanh toán bằng điện thoại, mua hàng online, gửi chuyển phát nhanh, v.v."
   },
   {
    "sp": 0,
    "zh": "在中国网购，不仅选择多、价格不高，而且送货很快，很多留学生甚至改变了自己的购物习惯。",
    "py": "Zài Zhōngguó wǎnggòu, bùjǐn xuǎnzé duō, jiàgé bù gāo, érqiě sòng huò hěn kuài, hěn duō liúxuéshēng shènzhì gǎibiàn le zìjǐ de gòuwù xíguàn.",
    "vn": "Mua hàng online ở Trung Quốc không những nhiều lựa chọn, giá không cao mà giao hàng còn rất nhanh, nhiều du học sinh thậm chí đã thay đổi thói quen mua sắm của mình."
   },
   {
    "sp": 0,
    "zh": "不过，由于网购太方便了，动动手指就能买到想要的东西，他们也开始担心自己在网购时会乱花钱。",
    "py": "Búguò, yóuyú wǎnggòu tài fāngbiàn le, dòng dòng shǒuzhǐ jiù néng mǎi dào xiǎng yào de dōngxi, tāmen yě kāishǐ dānxīn zìjǐ zài wǎnggòu shí huì luàn huā qián.",
    "vn": "Tuy nhiên, vì mua online quá tiện, chỉ cần động ngón tay là mua được thứ mình muốn, nên họ cũng bắt đầu lo mình sẽ tiêu tiền lung tung khi mua online."
   },
   {
    "sp": 0,
    "zh": "怎么才能管住自己不乱花钱呢？",
    "py": "Zěnme cái néng guǎn zhù zìjǐ bú luàn huā qián ne?",
    "vn": "Làm thế nào mới kiểm soát được bản thân để không tiêu tiền lung tung đây?"
   }
  ],
  "doan": true
 },
 {
  "scene": "用手机时如何保护个人信息 · Dùng điện thoại thế nào để bảo vệ thông tin cá nhân",
  "anh": "/images/hsk4v3/bai-3/kv-4.webp",
  "nguoi": [
   {
    "ten": "小语",
    "anh": "/images/hsk4v3/nv/xiaoyu.webp"
   }
  ],
  "preQuiz": [
   {
    "q": "网上购物或者订票时，经常需要提供哪些信息？",
    "opts": [
     "身份证号",
     "个人姓名",
     "手机号码",
     "以上都需要"
    ],
    "ans": 3
   },
   {
    "q": "下列哪项不是课文中的建议？",
    "opts": [
     "不发自己的车票信息",
     "不随便告诉别人密码",
     "不在咖啡馆收发邮件",
     "不发自己的机票信息"
    ],
    "ans": 2
   }
  ],
  "lines": [
   {
    "sp": 0,
    "zh": "网上购物或者订票时，我们经常需要提供姓名、手机号、身份证号等个人信息。",
    "py": "Wǎngshàng gòuwù huòzhě dìng piào shí, wǒmen jīngcháng xūyào tígōng xìngmíng, shǒujī hào, shēnfènzhèng hào děng gèrén xìnxī.",
    "vn": "Khi mua sắm hoặc đặt vé trên mạng, chúng ta thường phải cung cấp họ tên, số điện thoại, số căn cước và các thông tin cá nhân khác."
   },
   {
    "sp": 0,
    "zh": "在提供这些信息时，我们也会担心：我的个人信息能否得到保护？",
    "py": "Zài tígōng zhèxiē xìnxī shí, wǒmen yě huì dānxīn: wǒ de gèrén xìnxī néngfǒu dédào bǎohù?",
    "vn": "Khi cung cấp những thông tin này, chúng ta cũng sẽ lo lắng: thông tin cá nhân của mình liệu có được bảo vệ không?"
   },
   {
    "sp": 0,
    "zh": "于是，有人在网上说出了自己的担心，很快就有人给出了一些建议。",
    "py": "Yúshì, yǒurén zài wǎngshàng shuō chū le zìjǐ de dānxīn, hěn kuài jiù yǒurén gěi chū le yìxiē jiànyì.",
    "vn": "Thế là có người nói ra nỗi lo của mình trên mạng, và rất nhanh đã có người đưa ra một số lời khuyên."
   },
   {
    "sp": 0,
    "zh": "比如，别把密码随便告诉别人，不在网上发自己的车票、机票信息……",
    "py": "Bǐrú, bié bǎ mìmǎ suíbiàn gàosu biérén, bú zài wǎngshàng fā zìjǐ de chē piào, jīpiào xìnxī……",
    "vn": "Chẳng hạn, đừng tùy tiện nói mật khẩu cho người khác, không đăng thông tin vé tàu, vé máy bay của mình lên mạng…"
   },
   {
    "sp": 0,
    "zh": "现在，很多国家也通过技术、法律等手段来保证个人信息安全。",
    "py": "Xiànzài, hěn duō guójiā yě tōngguò jìshù, fǎlǜ děng shǒuduàn lái bǎozhèng gèrén xìnxī ānquán.",
    "vn": "Hiện nay, nhiều quốc gia cũng dùng các biện pháp như công nghệ, pháp luật… để bảo đảm an toàn thông tin cá nhân."
   },
   {
    "sp": 0,
    "zh": "比如中国的网络安全法、个人信息保护法等就很好地保护了人们的个人信息。",
    "py": "Bǐrú Zhōngguó de wǎngluò ānquán fǎ, gèrén xìnxī bǎohù fǎ děng jiù hěn hǎo de bǎohù le rén men de gèrén xìnxī.",
    "vn": "Ví dụ như Luật An ninh mạng, Luật Bảo vệ thông tin cá nhân… của Trung Quốc đã bảo vệ rất tốt thông tin cá nhân của mọi người."
   }
  ],
  "doan": true
 }
];
var listenData = [
 {
  "audio": "老板，这个多少钱？二十五块。我用现金结账可以吗？可以，不过我们这儿大部分客人都扫码支付，用微信或者支付宝都行。好的，那我也扫码吧。好，扫一下这个码就可以了。",
  "questions": [
   {
    "q": "顾客一开始想怎么结账？",
    "opts": [
     "用现金",
     "用信用卡",
     "扫码支付"
    ],
    "ans": 0
   },
   {
    "q": "老板说这儿的客人大部分怎么付钱？",
    "opts": [
     "用现金",
     "扫码支付",
     "用银行卡"
    ],
    "ans": 1
   }
  ]
 },
 {
  "audio": "喂，您好，我是快递员，您的快递到了，您在家吗？我不在家，正在学校上课呢。那我把快递放在小区门口的快递站，可以吗？可以，谢谢您。不客气，您回来以后用手机扫码就能拿到了。",
  "questions": [
   {
    "q": "女的现在在哪儿？",
    "opts": [
     "在家",
     "在学校",
     "在快递站"
    ],
    "ans": 1
   },
   {
    "q": "快递员把快递放在哪儿了？",
    "opts": [
     "小区门口的快递站",
     "女的家门口",
     "学校门口"
    ],
    "ans": 0
   }
  ]
 },
 {
  "audio": "小王，你怎么在网上发了你的机票照片？我想让朋友们知道我要去旅游了。可是照片上有你的姓名、身份证号等个人信息，别人看到了很不安全。啊，我没想到这个问题，那我现在就把照片拿下来。对，以后别随便在网上发这些信息。",
  "questions": [
   {
    "q": "小王在网上发了什么？",
    "opts": [
     "火车票信息",
     "机票照片",
     "身份证照片"
    ],
    "ans": 1
   },
   {
    "q": "朋友为什么觉得不安全？",
    "opts": [
     "照片上有个人信息",
     "小王的密码丢了",
     "机票太贵了"
    ],
    "ans": 0
   }
  ]
 }
];
var matchData = [
 {
  "left": "扫码",
  "right": "支付"
 },
 {
  "left": "下载",
  "right": "软件"
 },
 {
  "left": "寄",
  "right": "快递"
 },
 {
  "left": "保护",
  "right": "个人信息"
 },
 {
  "left": "提供",
  "right": "帮助"
 },
 {
  "left": "改变",
  "right": "购物习惯"
 },
 {
  "left": "乱",
  "right": "花钱"
 },
 {
  "left": "找到",
  "right": "目的地"
 },
 {
  "left": "不仅……",
  "right": "还……"
 }
];
var fillData = [
 {
  "pre": "北京大是大，",
  "blank": "不过",
  "post": "这边的路基本上都是正南正北的。",
  "hint": "(nhưng)",
  "ans": "不过",
  "exp": "×是×，不过……"
 },
 {
  "pre": "到十字路口不要过马路，",
  "blank": "直接",
  "post": "右转就到小区门口了。",
  "hint": "(thẳng, luôn)",
  "ans": "直接",
  "exp": "直接 + V."
 },
 {
  "pre": "没关系，你很快就会",
  "blank": "熟悉",
  "post": "的。",
  "hint": "(quen thuộc)",
  "ans": "熟悉",
  "exp": "会……的: chắc chắn sẽ."
 },
 {
  "pre": "他帮我",
  "blank": "下载",
  "post": "了微信和支付宝。",
  "hint": "(tải về)",
  "ans": "下载",
  "exp": "下载 + 软件."
 },
 {
  "pre": "现在我不仅会",
  "blank": "扫码",
  "post": "结账，还会用手机在网上购物了。",
  "hint": "(quét mã)",
  "ans": "扫码",
  "exp": "扫码结账 / 扫码支付."
 },
 {
  "pre": "昨天我就在网上",
  "blank": "订",
  "post": "了一台电脑。",
  "hint": "(đặt)",
  "ans": "订",
  "exp": "订 + hàng / vé / phòng."
 },
 {
  "pre": "很多留学生",
  "blank": "甚至",
  "post": "改变了自己的购物习惯。",
  "hint": "(thậm chí)",
  "ans": "甚至",
  "exp": "甚至 + V: vượt dự đoán."
 },
 {
  "pre": "怎么才能",
  "blank": "管",
  "post": "住自己不乱花钱呢？",
  "hint": "(kiểm soát)",
  "ans": "管",
  "exp": "管住自己 = tự kiểm soát."
 },
 {
  "pre": "我的个人信息能否得到",
  "blank": "保护",
  "post": "？",
  "hint": "(bảo vệ)",
  "ans": "保护",
  "exp": "得到保护 = được bảo vệ."
 },
 {
  "pre": "很多国家也通过技术、法律等",
  "blank": "手段",
  "post": "来保证个人信息安全。",
  "hint": "(biện pháp)",
  "ans": "手段",
  "exp": "通过……等手段来……"
 }
];
var sortData = [
 {
  "words": [
   "北京",
   "大是大",
   "，",
   "不过",
   "这边的路",
   "很好找",
   "。"
  ],
  "ans": "北京大是大，不过这边的路很好找。",
  "audio": "北京大是大，不过这边的路很好找。"
 },
 {
  "words": [
   "现在",
   "我",
   "不仅",
   "会扫码结账",
   "，",
   "还",
   "会",
   "在网上购物了",
   "。"
  ],
  "ans": "现在我不仅会扫码结账，还会在网上购物了。",
  "audio": "现在我不仅会扫码结账，还会在网上购物了。"
 },
 {
  "words": [
   "很多",
   "留学生",
   "甚至",
   "改变了",
   "自己的",
   "购物习惯",
   "。"
  ],
  "ans": "很多留学生甚至改变了自己的购物习惯。",
  "audio": "很多留学生甚至改变了自己的购物习惯。"
 },
 {
  "words": [
   "她",
   "从小",
   "就想当医生",
   "，",
   "于是",
   "选择了",
   "学医",
   "。"
  ],
  "ans": "她从小就想当医生，于是选择了学医。",
  "audio": "她从小就想当医生，于是选择了学医。"
 },
 {
  "words": [
   "别",
   "把",
   "密码",
   "随便",
   "告诉",
   "别人",
   "。"
  ],
  "ans": "别把密码随便告诉别人。",
  "audio": "别把密码随便告诉别人。"
 },
 {
  "words": [
   "你",
   "可以",
   "用手机地图",
   "找到",
   "目的地",
   "。"
  ],
  "ans": "你可以用手机地图找到目的地。",
  "audio": "你可以用手机地图找到目的地。"
 }
];
var mcData = [
 {
  "q": "这个房子便宜是便宜，＿＿离我的公司太远了。",
  "opts": [
   "就是",
   "所以",
   "于是",
   "甚至"
  ],
  "ans": 0,
  "exp": "×是×，就是…… — vế sau chỉ ra hạn chế."
 },
 {
  "q": "现在很多书店不仅卖书，＿＿卖咖啡和奶茶。",
  "opts": [
   "还",
   "就",
   "才",
   "但是"
  ],
  "ans": 0,
  "exp": "不仅……，还……"
 },
 {
  "q": "高铁速度真快，＿＿还没看清楚，它就已经开过去了。",
  "opts": [
   "甚至",
   "不仅",
   "要是",
   "随着"
  ],
  "ans": 0,
  "exp": "甚至 nhấn mạnh điều vượt dự đoán."
 },
 {
  "q": "她从小就想当医生，＿＿上大学时就选择了学医。",
  "opts": [
   "于是",
   "甚至",
   "不过",
   "而且"
  ],
  "ans": 0,
  "exp": "……，于是…… kể việc tiếp theo đã xảy ra."
 },
 {
  "q": "你往前走，到十字路口＿＿右转就到了。",
  "opts": [
   "直接",
   "正好",
   "随便",
   "甚至"
  ],
  "ans": 0,
  "exp": "直接 + V = rẽ luôn, không vòng."
 },
 {
  "q": "我刚来中国，不＿＿路。",
  "opts": [
   "熟悉",
   "保护",
   "提供",
   "改变"
  ],
  "ans": 0,
  "exp": "熟悉 + nơi chốn / đường."
 },
 {
  "q": "网上购物或者订票时，我们经常需要＿＿个人信息。",
  "opts": [
   "提供",
   "保证",
   "下载",
   "结账"
  ],
  "ans": 0,
  "exp": "提供 + 信息."
 },
 {
  "q": "别把＿＿随便告诉别人。",
  "opts": [
   "密码",
   "现金",
   "手指",
   "快递"
  ],
  "ans": 0,
  "exp": "密码 = mật khẩu."
 },
 {
  "q": "由于网购太方便了，动动＿＿就能买到想要的东西。",
  "opts": [
   "手指",
   "手段",
   "软件",
   "技术"
  ],
  "ans": 0,
  "exp": "动动手指 = chạm ngón tay một cái."
 },
 {
  "q": "我们到电影院的时候，电影＿＿开始了。",
  "opts": [
   "正好",
   "正",
   "直接",
   "乱"
  ],
  "ans": 0,
  "exp": "正好 = vừa đúng lúc."
 }
];
var speakingData = {
 "intro": "Nhấn nút loa nghe câu hỏi (câu hỏi đọc hiểu của sách, câu hỏi phần Khởi động, kể lại bài khoá và tranh luận nhóm), rồi tự ghi âm câu trả lời — cố dùng từ mới và 4 điểm ngữ pháp của bài.",
 "questions": [
  {
   "q_zh": "你在网上购物吗？如果你网购，说说你是怎么进行网购的；如果你不网购，为什么？",
   "q_vn": "Bạn có mua sắm trên mạng không? Nếu có, hãy kể bạn mua online như thế nào; nếu không, vì sao?",
   "hint": "我常常网购。先下载……，然后……，最后……。/ 我不网购，因为……",
   "sample": "我常常网购。先在手机上下载一个网购软件，然后找到想要的东西，用微信或者支付宝支付，最后等快递员送货就可以了。在网上购物不仅选择多，而且价格不高。",
   "sample_vn": "Tôi hay mua online. Trước tiên tải một ứng dụng mua sắm về điện thoại, rồi tìm món đồ mình muốn, thanh toán bằng WeChat hoặc Alipay, cuối cùng chờ shipper giao hàng là xong. Mua trên mạng không những nhiều lựa chọn mà giá còn không cao.",
   "note": "Câu hỏi phần Khởi động của sách; dùng 不仅……而且…… (điểm 2)."
  },
  {
   "q_zh": "用手机时，你会怎样保护自己的信息？",
   "q_vn": "Khi dùng điện thoại, bạn sẽ bảo vệ thông tin của mình thế nào?",
   "hint": "我不会……，也不……，还会……",
   "sample": "我不会把密码随便告诉别人，也不在网上发自己的身份证号、车票和机票信息。要是有人打电话问我的个人信息，我就不回答。",
   "sample_vn": "Tôi sẽ không tùy tiện nói mật khẩu cho người khác, cũng không đăng số căn cước, thông tin vé tàu, vé máy bay lên mạng. Nếu có người gọi điện hỏi thông tin cá nhân, tôi sẽ không trả lời.",
   "note": "Câu hỏi phần Khởi động; ôn 要是……就…… (Bài 1)."
  },
  {
   "q_zh": "陈天中为什么找不到花园小区了？他为什么没用手机地图？",
   "q_vn": "Vì sao Trần Thiên Trung không tìm được khu Hoa Viên? Vì sao cậu ấy không dùng bản đồ điện thoại?",
   "hint": "因为他刚……，不熟悉……。因为很多……他还……",
   "sample": "因为他刚来中国，不熟悉路。他没用手机地图，是因为很多中文地名他还不认识。",
   "sample_vn": "Vì cậu ấy mới đến Trung Quốc, chưa thạo đường. Cậu không dùng bản đồ điện thoại là vì nhiều địa danh tiếng Trung cậu chưa đọc được.",
   "note": "Câu hỏi đọc hiểu bài khoá 1."
  },
  {
   "q_zh": "请根据提示复述课文一。",
   "q_vn": "Dựa vào gợi ý, kể lại bài khoá 1.",
   "hint": "陈天中从学校出来，不知道怎么去……，就向一位同学问路。同学告诉他……正好同学……北京的路基本上都是……",
   "sample": "陈天中从学校出来，不知道怎么去花园小区，就向一位同学问路。同学告诉他，先往前走，到十字路口不要过马路，直接右转就到小区门口了。正好同学也去那边，就和他一起走。陈天中说他刚来中国，还不熟悉路。同学告诉他，北京的路基本上都是正南正北、正东正西的，很好找。他也可以用手机地图，很容易就能找到目的地。不过，很多中文地名陈天中还不认识。同学说，他很快就会熟悉的。",
   "sample_vn": "Trần Thiên Trung từ trường đi ra, không biết đi đến khu Hoa Viên thế nào nên hỏi đường một bạn học. Bạn ấy bảo cứ đi thẳng, đến ngã tư đừng sang đường, rẽ phải luôn là tới cổng khu. Vừa khéo bạn ấy cũng đi hướng đó nên đi cùng… Bạn nói cậu sẽ quen nhanh thôi.",
   "note": "Bài tập 复述 của sách (trang 25)."
  },
  {
   "q_zh": "前几天李文帮陈天中做什么了？陈天中现在会用手机做什么了？",
   "q_vn": "Mấy hôm trước Lý Văn đã giúp Trần Thiên Trung làm gì? Bây giờ Trần Thiên Trung biết dùng điện thoại làm gì rồi?",
   "hint": "李文帮他……，教他……，还……。他现在不仅……，还……",
   "sample": "李文帮他下载了微信和支付宝，教他认识里边的汉字，还教他用手机进行支付。陈天中现在不仅会扫码结账，还会用手机在网上购物了。",
   "sample_vn": "Lý Văn giúp cậu tải WeChat và Alipay, dạy cậu nhận chữ Hán trong đó, còn dạy thanh toán bằng điện thoại. Bây giờ Trần Thiên Trung không những biết quét mã thanh toán mà còn biết mua hàng trên mạng.",
   "note": "Câu hỏi đọc hiểu bài khoá 2; dùng 不仅……还…… (điểm 2)."
  },
  {
   "q_zh": "白家月和陈天中学会用手机做什么了？留学生为什么也喜欢网购？",
   "q_vn": "Bạch Gia Nguyệt và Trần Thiên Trung đã học được dùng điện thoại làm gì? Vì sao du học sinh cũng thích mua online?",
   "hint": "他们学会了……等等。因为在中国网购不仅……，而且……",
   "sample": "他们学会了用手机支付、网购、寄快递等等。留学生也喜欢网购，因为在中国网购不仅选择多、价格不高，而且送货很快。",
   "sample_vn": "Họ đã học được thanh toán bằng điện thoại, mua online, gửi chuyển phát nhanh, v.v. Du học sinh cũng thích mua online vì ở Trung Quốc mua online không những nhiều lựa chọn, giá không cao mà giao hàng còn nhanh.",
   "note": "Câu hỏi đọc hiểu bài khoá 3."
  },
  {
   "q_zh": "请根据提示复述课文三。",
   "q_vn": "Dựa vào gợi ý, kể lại bài khoá 3.",
   "hint": "白家月和陈天中……就发现……。后来，在……下，他们也都学会了……。在中国网购，不仅……，而且……，很多留学生甚至……。不过，由于……",
   "sample": "白家月和陈天中刚到北京时就发现，中国人在饭馆或超市结账时，几乎都用手机支付，只有他们用现金结账。后来，在李文的帮助下，他们也都学会了用手机支付、网购、寄快递等等。在中国网购，不仅选择多、价格不高，而且送货很快，很多留学生甚至改变了自己的购物习惯。不过，由于网购太方便了，动动手指就能买到想要的东西，他们也开始担心自己在网购时会乱花钱。怎么才能管住自己不乱花钱呢？",
   "sample_vn": "Bạch Gia Nguyệt và Trần Thiên Trung vừa đến Bắc Kinh đã phát hiện người Trung Quốc gần như đều thanh toán bằng điện thoại, chỉ có họ dùng tiền mặt. Sau đó, nhờ Lý Văn giúp, họ cũng học được thanh toán bằng điện thoại, mua online, gửi chuyển phát nhanh… Nhưng vì mua online quá tiện, họ bắt đầu lo mình tiêu tiền lung tung.",
   "note": "Bài tập 复述 của sách (trang 29)."
  },
  {
   "q_zh": "人们为什么会担心个人信息安全问题？国家会通过什么手段来保证个人信息安全？",
   "q_vn": "Vì sao mọi người lo lắng về an toàn thông tin cá nhân? Nhà nước dùng biện pháp gì để bảo đảm an toàn thông tin cá nhân?",
   "hint": "因为……时，经常需要提供……。国家会通过……等手段……",
   "sample": "因为网上购物或者订票时，经常需要提供姓名、手机号、身份证号等个人信息，人们担心这些信息能否得到保护。国家会通过技术、法律等手段来保证个人信息安全，比如中国的网络安全法和个人信息保护法。",
   "sample_vn": "Vì khi mua sắm hoặc đặt vé trên mạng thường phải cung cấp họ tên, số điện thoại, số căn cước… nên mọi người lo những thông tin này có được bảo vệ không. Nhà nước dùng các biện pháp như công nghệ, pháp luật để bảo đảm, ví dụ Luật An ninh mạng và Luật Bảo vệ thông tin cá nhân của Trung Quốc.",
   "note": "Câu hỏi đọc hiểu bài khoá 4."
  },
  {
   "q_zh": "小组辩论（正方）：手机带来的好处多。请说说你的理由。",
   "q_vn": "Tranh luận nhóm (phe ủng hộ): Điện thoại mang lại nhiều lợi ích hơn. Hãy nêu lý do của bạn.",
   "hint": "我认为手机带来的好处多。首先，……不仅……，还……；其次，……甚至……；要是没有手机，……",
   "sample": "我认为手机带来的好处多。首先，用手机可以购物、结账，不仅很快，还不用带现金。其次，手机地图能帮我们很容易地找到目的地，刚来中国的留学生也不怕迷路了。有了手机，我们还可以下载学习软件，甚至在路上也能学中文。手机带来的问题是有，不过只要我们管住自己，保护好个人信息，这些问题都能解决。所以，手机带来的好处更多。",
   "sample_vn": "Tôi cho rằng điện thoại mang lại nhiều lợi ích hơn. Trước hết, dùng điện thoại mua sắm, thanh toán không những nhanh mà còn không cần mang tiền mặt. Thứ hai, bản đồ điện thoại giúp ta dễ dàng tìm được nơi cần đến, du học sinh mới sang cũng không sợ lạc. Có điện thoại còn tải được phần mềm học tập, thậm chí trên đường cũng học được tiếng Trung. Vấn đề thì có, nhưng chỉ cần tự kiểm soát và bảo vệ tốt thông tin cá nhân là giải quyết được. Vì vậy lợi ích nhiều hơn.",
   "note": "Hoạt động 小组辩论 (tranh luận nhóm) của sách, trang 33 — phe 正方."
  },
  {
   "q_zh": "小组辩论（反方）：手机带来的问题多。请说说你的理由。",
   "q_vn": "Tranh luận nhóm (phe phản đối): Điện thoại mang lại nhiều vấn đề hơn. Hãy nêu lý do của bạn.",
   "hint": "我认为手机带来的问题多。手机方便是方便，就是……；由于……，于是……；有的人甚至……",
   "sample": "我认为手机带来的问题多。手机方便是方便，就是上面的信息太多，看多了，很浪费时间。由于网购太方便了，动动手指就能买到东西，于是很多人开始乱花钱。还有，我们在网上提供了很多个人信息，这些信息能否得到保护，谁也不能保证。有的人甚至一天到晚都在看手机，连跟家人说话的时间都没有了。所以，我觉得手机带来的问题更多。",
   "sample_vn": "Tôi cho rằng điện thoại mang lại nhiều vấn đề hơn. Điện thoại tiện thì tiện thật, nhưng thông tin trên đó quá nhiều, xem nhiều rất lãng phí thời gian. Vì mua online quá tiện, chạm ngón tay là mua được đồ, thế là nhiều người bắt đầu tiêu tiền lung tung. Ngoài ra, ta cung cấp rất nhiều thông tin cá nhân trên mạng, chẳng ai bảo đảm được chúng có được bảo vệ không. Có người thậm chí suốt ngày xem điện thoại, ngay cả thời gian nói chuyện với gia đình cũng không có. Vì vậy tôi thấy vấn đề nhiều hơn.",
   "note": "Hoạt động 小组辩论 của sách — phe 反方; dùng đủ 4 điểm ngữ pháp của bài + 由于 (Bài 2)."
  }
 ]
};
var translateData = [
 {
  "vi": "Bắc Kinh rộng thì rộng thật, nhưng đường ở đây rất dễ tìm.",
  "zh": "北京大是大，不过这边的路很好找。",
  "py": "Běijīng dà shì dà, búguò zhèbiān de lù hěn hǎo zhǎo."
 },
 {
  "vi": "Giờ tôi không những biết quét mã thanh toán, mà còn biết mua hàng trên mạng.",
  "zh": "现在我不仅会扫码结账，还会在网上购物了。",
  "py": "Xiànzài wǒ bùjǐn huì sǎomǎ jiézhàng, hái huì zài wǎngshàng gòuwù le."
 },
 {
  "vi": "Nhiều du học sinh thậm chí đã thay đổi thói quen mua sắm của mình.",
  "zh": "很多留学生甚至改变了自己的购物习惯。",
  "py": "Hěn duō liúxuéshēng shènzhì gǎibiàn le zìjǐ de gòuwù xíguàn."
 },
 {
  "vi": "Thế là có người nói ra nỗi lo của mình trên mạng.",
  "zh": "于是，有人在网上说出了自己的担心。",
  "py": "Yúshì, yǒurén zài wǎngshàng shuō chū le zìjǐ de dānxīn."
 },
 {
  "vi": "Đừng tùy tiện nói mật khẩu cho người khác.",
  "zh": "别把密码随便告诉别人。",
  "py": "Bié bǎ mìmǎ suíbiàn gàosu biérén."
 },
 {
  "vi": "Làm thế nào mới kiểm soát được bản thân không tiêu tiền lung tung?",
  "zh": "怎么才能管住自己不乱花钱呢？",
  "py": "Zěnme cái néng guǎn zhù zìjǐ bú luàn huā qián ne?"
 }
];
var translateDataRev = [
 {
  "vi": "Bạn cứ đi thẳng, đến ngã tư rẽ phải luôn là tới cổng khu dân cư.",
  "zh": "你往前走，到十字路口直接右转就到小区门口了。",
  "py": "Nǐ wǎng qián zǒu, dào shízì lùkǒu zhíjiē yòu zhuǎn jiù dào xiǎoqū ménkǒu le."
 },
 {
  "vi": "Hôm qua tôi đặt một cái máy tính trên mạng, chiều nay giao tới.",
  "zh": "昨天我在网上订了一台电脑，今天下午送到。",
  "py": "Zuótiān wǒ zài wǎngshàng dìng le yì tái diànnǎo, jīntiān xiàwǔ sòng dào."
 },
 {
  "vi": "Shipper sắp đến rồi, tôi phải về ngay.",
  "zh": "快递员要到了，我得马上回去。",
  "py": "Kuàidì yuán yào dào le, wǒ děi mǎshàng huíqù."
 },
 {
  "vi": "Khi mua sắm trên mạng, chúng ta thường phải cung cấp thông tin cá nhân.",
  "zh": "网上购物时，我们经常需要提供个人信息。",
  "py": "Wǎngshàng gòuwù shí, wǒmen jīngcháng xūyào tígōng gèrén xìnxī."
 },
 {
  "vi": "Nhiều quốc gia dùng công nghệ, pháp luật để bảo đảm an toàn thông tin cá nhân.",
  "zh": "很多国家通过技术、法律等手段来保证个人信息安全。",
  "py": "Hěn duō guójiā tōngguò jìshù, fǎlǜ děng shǒuduàn lái bǎozhèng gèrén xìnxī ānquán."
 }
];
var sgkData = [
 {
  "kieu": "kho",
  "de": "选词填空（一）· 综合练习",
  "vn": "Chọn từ thích hợp điền vào chỗ trống (Bài tập tổng hợp, sách trang 31).",
  "dapSgk": true,
  "tu": [
   "结账",
   "于是",
   "转",
   "寄",
   "正好"
  ],
  "cau": [
   {
    "s": "丽丽去快递站拿快递时，又＿＿了一个快递。",
    "dap": [
     "寄"
    ]
   },
   {
    "s": "从这儿走到十字路口，再向左＿＿，就是超市了。",
    "dap": [
     "转"
    ]
   },
   {
    "s": "在十字路口等了半个小时，他们也没来，＿＿我就一个人去图书馆了。",
    "dap": [
     "于是"
    ]
   },
   {
    "s": "在商场购物的时候，我喜欢用信用卡＿＿。",
    "dap": [
     "结账"
    ]
   },
   {
    "s": "我们到电影院的时候，电影＿＿开始了。",
    "dap": [
     "正好"
    ]
   }
  ]
 },
 {
  "kieu": "kho",
  "de": "选词填空（二）· 综合练习",
  "vn": "Chọn từ thích hợp điền vào chỗ trống (hội thoại, sách trang 32).",
  "dapSgk": true,
  "tu": [
   "保证",
   "现金",
   "购物",
   "提供",
   "技术"
  ],
  "cau": [
   {
    "s": "A：我用＿＿结账可以吗？　B：当然，这些一共125块。",
    "dap": [
     "现金"
    ]
   },
   {
    "s": "A：这个工作要求对网络＿＿很了解，你可以吗？　B：没问题，我做这方面的工作已经有五年了。",
    "dap": [
     "技术"
    ]
   },
   {
    "s": "A：你们能＿＿这些货下午就送到吗？　B：您放心，我们有「闪送」（shǎnsòng, giao hỏa tốc）服务，下午两点前就能送到。",
    "dap": [
     "保证"
    ]
   },
   {
    "s": "A：这个商场特别漂亮，在这里＿＿很舒服。　B：是啊，周末过来走走、看看，累了还可以坐下来喝喝咖啡或者茶。",
    "dap": [
     "购物"
    ]
   },
   {
    "s": "A：您好，办入住需要您＿＿身份证和手机号后四位。　B：好的，这是我的身份证，手机号后四位是5063。",
    "dap": [
     "提供"
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
   "马上给她提供帮助",
   "爱丽觉得太方便了",
   "第一次点外卖时",
   "爱丽刚来北京留学时"
  ],
  "cau": [
   {
    "s": "在中国，用手机支付、网购和寄快递都很方便，所以很多人觉得自己快要离不开手机了。＿＿，还不会用中国人常用的手机App，她很着急。她的中国朋友知道后，＿＿，教她怎么用，她很快就学会用手机支付和网购了。＿＿，不到40分钟，外卖员就把饭送来了，＿＿。现在，她几乎每天都用手机点外卖或网购。",
    "dap": [
     "爱丽刚来北京留学时",
     "马上给她提供帮助",
     "第一次点外卖时",
     "爱丽觉得太方便了"
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
    "anh": "/images/hsk4v3/bai-3/bt-1.webp",
    "s": "",
    "tu": "结账",
    "dap": "他结账的时候用手机扫码支付。",
    "giai": "……的时候 + 用 + công cụ + V; 扫码支付 là cụm từ của bài."
   },
   {
    "anh": "/images/hsk4v3/bai-3/bt-2.webp",
    "s": "",
    "tu": "密码",
    "dap": "他担心忘记密码，就把密码记在了本子上。",
    "giai": "Câu chữ 把: 把 + 密码 + 记在 + 本子上."
   },
   {
    "anh": "/images/hsk4v3/bai-3/bt-3.webp",
    "s": "",
    "tu": "身份证",
    "dap": "她正在刷身份证进地铁站。",
    "giai": "正在 + V; 刷身份证 = quẹt căn cước."
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
  "tieuDe": "Viết đoạn văn giới thiệu (写作)",
  "gioiThieu": "Đề 写作 của sách HSK 4 (3.0) yêu cầu viết một đoạn văn ngắn (ít nhất 120 chữ) dựa trên nội dung đã học và đã thảo luận trong bài — giống phần 书写 của đề thi HSK 4 mới. Bài này: giới thiệu em dùng điện thoại để làm những gì.",
  "buoc": [
   "Đọc kỹ đề: viết về CHÍNH EM — em dùng điện thoại làm gì, chứ không phải viết về người Trung Quốc nói chung.",
   "Lập dàn ý theo các câu hỏi gợi ý: mỗi câu hỏi là một ý (thanh toán, mua online, hỏi đường, học tập, liên lạc…), viết 1–2 câu cho mỗi ý.",
   "Dùng từ mới và 4 điểm ngữ pháp của bài (khung “Từ, cấu trúc nên dùng”): 不仅……还……, ×是×就是……, 甚至, ……于是…… — đây là phần được chấm điểm từ vựng, ngữ pháp.",
   "Nối các ý bằng từ nối: 首先 / 其次 / 除了……还…… / 另外 / 不过 / 总之.",
   "Câu mở nêu chủ đề (điện thoại rất quan trọng với em), câu kết nêu nhận xét hoặc lời nhắc (bảo vệ thông tin cá nhân); tự soát số chữ (≥ 120) và lỗi chữ Hán trước khi nộp."
  ]
 },
 "de": "生活中手机有很多用处。比如，在中国，可以用手机扫码支付，还可以点外卖、网购等。请写一篇短文，介绍一下你会用手机做什么，不少于120字。",
 "prompt": "Trong cuộc sống, điện thoại có rất nhiều công dụng. Ví dụ, ở Trung Quốc có thể dùng điện thoại quét mã thanh toán, còn có thể đặt đồ ăn, mua hàng online, v.v. Hãy viết một đoạn văn ngắn giới thiệu em dùng điện thoại để làm gì, không ít hơn 120 chữ.",
 "dan": [
  {
   "hoi": "你每天用手机做什么？",
   "goiY": "我每天都用手机……，不仅……，还……"
  },
  {
   "hoi": "你怎么用手机付钱？",
   "goiY": "在饭馆或超市结账时，我几乎不用现金，扫码就能……"
  },
  {
   "hoi": "你网购吗？网购有什么好处？",
   "goiY": "在网上购物不仅选择多……，而且送货很快，有时候甚至……"
  },
  {
   "hoi": "手机还帮你做过什么？",
   "goiY": "刚来的时候我不熟悉路，于是下载了……；还可以订票、寄快递、点外卖等等"
  },
  {
   "hoi": "用手机时要注意什么？",
   "goiY": "手机方便是方便，就是……；别把密码随便……，要保护好个人信息"
  }
 ],
 "tuNen": [
  "下载",
  "软件",
  "扫码",
  "支付",
  "结账",
  "现金",
  "网购",
  "订",
  "快递",
  "寄",
  "甚至",
  "保护",
  "个人",
  "密码"
 ],
 "cauTruc": [
  {
   "ten": "不仅……，还 / 而且……",
   "nhan": "不仅",
   "vd": "我每天不仅用手机看新闻，还用它学习中文。",
   "khi": "Câu MỞ / thân bài: kể nhiều việc dùng điện thoại."
  },
  {
   "ten": "……，甚至……",
   "nhan": "甚至",
   "vd": "在网上购物送货很快，有时候甚至上午订的东西下午就送到了。",
   "khi": "Nhấn mạnh điều làm em bất ngờ."
  },
  {
   "ten": "……，于是……",
   "nhan": "于是",
   "vd": "刚来中国的时候我不熟悉路，于是下载了一个地图软件。",
   "khi": "Kể một chuyện đã xảy ra."
  },
  {
   "ten": "A、B、C等等",
   "nhan": "等等",
   "vd": "我还用手机订票、寄快递、点外卖等等。",
   "khi": "Liệt kê các công dụng khác."
  },
  {
   "ten": "×是×，就是……",
   "nhan": "是",
   "vd": "不过，手机方便是方便，就是容易让人乱花钱。",
   "khi": "Câu KẾT: nói mặt hạn chế, lời nhắc."
  }
 ],
 "checklist": [
  "Đủ ít nhất 120 chữ Hán chưa?",
  "Đã nói về chính em dùng điện thoại làm gì (thanh toán, mua online, tìm đường, học tập…) chưa?",
  "Đã dùng ít nhất 3 trong 4 điểm ngữ pháp của bài (×是×就是/不过、不仅……还/而且、甚至、于是) chưa?",
  "Đã dùng ít nhất 6 từ mới của bài chưa?",
  "Đoạn văn có câu mở và câu kết rõ ràng (có nhắc đến bảo vệ thông tin cá nhân) chưa?"
 ],
 "model": {
  "zh": "手机是我生活中最好的朋友。每天早上，我不仅用手机看新闻，还用它学习中文。在饭馆或超市结账时，我几乎不用现金，扫码就能支付。我也很喜欢网购，在网上购物不仅选择多、价格不高，而且送货很快，有时候甚至上午订的东西下午就送到了。刚来中国的时候，我不熟悉路，于是下载了一个地图软件，现在很容易就能找到目的地。除此以外，我还用手机订票、寄快递、点外卖等等。不过，手机方便是方便，就是容易让人乱花钱，而且要注意保护个人信息。所以，我从来不把密码随便告诉别人，也不在网上发自己的身份证号。",
  "py": "Shǒujī shì wǒ shēnghuó zhōng zuìhǎo de péngyou. Měi tiān zǎoshang, wǒ bùjǐn yòng shǒujī kàn xīnwén, hái yòng tā xuéxí Zhōngwén. Zài fànguǎn huò chāoshì jiézhàng shí, wǒ jīhū búyòng xiànjīn, sǎomǎ jiù néng zhīfù. Wǒ yě hěn xǐhuan wǎnggòu, zài wǎngshàng gòuwù bùjǐn xuǎnzé duō, jiàgé bù gāo, érqiě sòng huò hěn kuài, yǒu shíhou shènzhì shàngwǔ dìng de dōngxi xiàwǔ jiù sòng dào le. Gāng lái Zhōngguó de shíhou, wǒ bù shúxi lù, yúshì xiàzài le yí gè dìtú ruǎnjiàn, xiànzài hěn róngyì jiù néng zhǎo dào mùdìdì. Chú cǐ yǐwài, wǒ hái yòng shǒujī dìng piào, jì kuàidì, diǎn wàimài děng děng. Búguò, shǒujī fāngbiàn shì fāngbiàn, jiù shì róngyì ràng rén luàn huā qián, érqiě yào zhùyì bǎohù gèrén xìnxī. Suǒyǐ, wǒ cónglái bù bǎ mìmǎ suíbiàn gàosu biérén, yě bú zài wǎngshàng fā zìjǐ de shēnfènzhèng hào."
 }
};
