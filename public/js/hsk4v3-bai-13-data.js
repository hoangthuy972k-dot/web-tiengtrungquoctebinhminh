// HSK 4 (3.0) · Bai 13 — sinh boi tools/hsk4v3/gan.js tu tools/hsk4v3/bai-13/ (dung sua tay).
var vocabData = [
 {
  "n": 1,
  "zh": "熊",
  "py": "xióng",
  "pos": "Danh từ",
  "vn": "con gấu",
  "hv": "hùng",
  "em": "🐻",
  "lesson": 1,
  "explain": [
   "Loài thú lớn, lông dày, đi chậm nhưng rất khoẻ. Gấu trúc là 大熊猫 — cũng có chữ 熊."
  ],
  "usage": "一只熊 · 熊和老虎 · 大熊猫 (gấu trúc).",
  "collo": [
   "一只熊",
   "大熊猫",
   "黑熊",
   "熊和老虎"
  ],
  "colloFull": [
   {
    "zh": "一只熊",
    "py": "Yì zhī xióng",
    "vn": "một con gấu"
   },
   {
    "zh": "大熊猫",
    "py": "Dàxióngmāo",
    "vn": "gấu trúc"
   },
   {
    "zh": "黑熊",
    "py": "Hēi xióng",
    "vn": "gấu đen"
   },
   {
    "zh": "熊和老虎",
    "py": "Xióng hé lǎohǔ",
    "vn": "gấu và hổ"
   }
  ],
  "patterns": [
   {
    "s": "一只 + 熊",
    "m": "Lượng từ cho động vật: 只"
   },
   {
    "s": "熊 ≠ 熊猫",
    "m": "熊 là gấu nói chung; 熊猫 / 大熊猫 là gấu trúc"
   }
  ],
  "ex_zh": "爸爸、妈妈，快看，熊和老虎都在这儿呢！",
  "ex_py": "Bàba, māma, kuài kàn, xióng hé lǎohǔ dōu zài zhèr ne!",
  "ex_vn": "Bố ơi, mẹ ơi, nhìn kìa, gấu với hổ đều ở đây này!",
  "exList": [
   {
    "zh": "爸爸、妈妈，快看，熊和老虎都在这儿呢！",
    "py": "Bàba, māma, kuài kàn, xióng hé lǎohǔ dōu zài zhèr ne!",
    "vn": "Bố ơi, mẹ ơi, nhìn kìa, gấu với hổ đều ở đây này!"
   },
   {
    "zh": "这只熊看起来很可爱，其实非常危险。",
    "py": "Zhè zhī xióng kànqǐlai hěn kě'ài, qíshí fēicháng wēixiǎn.",
    "vn": "Con gấu này trông thì đáng yêu, thực ra rất nguy hiểm."
   }
  ],
  "hanzi": [
   {
    "c": "熊",
    "p": "xióng",
    "type": "形声字 · Chữ hình thanh",
    "st": 14,
    "ord": "能 (厶, 月, hai chữ 匕 chồng lên nhau bên phải) → 灬",
    "rad": "灬 (hoả – lửa, bốn chấm)",
    "mean": "con gấu",
    "tip": "Phía trên là 能 (néng): xưa 能 chính là hình con gấu; về sau 能 bị mượn nghĩa “có thể”, nên thêm 灬 ở dưới thành 熊 = con gấu. 熊猫 = gấu mèo → gấu trúc.",
    "cf": "能 néng (HSK1 Bài 8) — không có 灬 ở dưới",
    "w": "熊猫 / 大熊猫"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Dù là gấu hay hổ, du khách đều không được xuống xe.",
    "answer": "无论是熊还是老虎，游客都不能下车。",
    "answerPy": "Wúlùn shì xióng háishi lǎohǔ, yóukè dōu bù néng xià chē.",
    "note": "Ôn 无论……都…… (Bài 12 · điểm 3).",
    "pair": "无论……都……"
   },
   {
    "promptLang": "vi",
    "prompt": "Chúng tôi đợi nửa ngày mà con gấu đó thế nào cũng không chịu ra.",
    "answer": "我们等了半天，那只熊怎么都不出来。",
    "answerPy": "Wǒmen děng le bàntiān, nà zhī xióng zěnme dōu bù chūlai.",
    "note": "怎么都 + 不 + V (Bài 13 · điểm 1).",
    "pair": "怎么都不……"
   }
  ]
 },
 {
  "n": 2,
  "zh": "老虎",
  "py": "lǎohǔ",
  "pos": "Danh từ",
  "vn": "con hổ, con cọp",
  "hv": "lão hổ",
  "em": "🐯",
  "lesson": 1,
  "explain": [
   "Con hổ. 老 ở đây chỉ là tiền tố, KHÔNG có nghĩa “già” (giống 老鼠 – con chuột, 老师 – thầy cô)."
  ],
  "usage": "一只老虎 · 怕老虎 · 东北虎 (hổ Đông Bắc).",
  "collo": [
   "一只老虎",
   "怕老虎",
   "看老虎",
   "保护老虎"
  ],
  "colloFull": [
   {
    "zh": "一只老虎",
    "py": "Yì zhī lǎohǔ",
    "vn": "một con hổ"
   },
   {
    "zh": "怕老虎",
    "py": "Pà lǎohǔ",
    "vn": "sợ hổ"
   },
   {
    "zh": "看老虎",
    "py": "Kàn lǎohǔ",
    "vn": "xem hổ"
   },
   {
    "zh": "保护老虎",
    "py": "Bǎohù lǎohǔ",
    "vn": "bảo vệ loài hổ"
   }
  ],
  "patterns": [
   {
    "s": "老 + 虎 / 鼠 / 师",
    "m": "老 làm tiền tố, không mang nghĩa “già”"
   }
  ],
  "ex_zh": "爸爸、妈妈，快看，熊和老虎都在这儿呢！",
  "ex_py": "Bàba, māma, kuài kàn, xióng hé lǎohǔ dōu zài zhèr ne!",
  "ex_vn": "Bố ơi, mẹ ơi, nhìn kìa, gấu với hổ đều ở đây này!",
  "exList": [
   {
    "zh": "爸爸、妈妈，快看，熊和老虎都在这儿呢！",
    "py": "Bàba, māma, kuài kàn, xióng hé lǎohǔ dōu zài zhèr ne!",
    "vn": "Bố ơi, mẹ ơi, nhìn kìa, gấu với hổ đều ở đây này!"
   },
   {
    "zh": "老虎一般白天睡觉，晚上出来找吃的。",
    "py": "Lǎohǔ yìbān báitiān shuìjiào, wǎnshang chūlai zhǎo chī de.",
    "vn": "Hổ thường ban ngày ngủ, ban đêm mới ra ngoài kiếm ăn."
   }
  ],
  "hanzi": [
   {
    "c": "老",
    "p": "lǎo",
    "type": "象形字 · Chữ tượng hình",
    "st": 6,
    "ord": "耂 (ngang, sổ, ngang, phẩy) → 匕",
    "rad": "老 (lão – già; viết 耂 khi làm bộ)",
    "mean": "già; cũ, lâu năm",
    "tip": "Hình người tóc dài, lưng còng, chống gậy → già. 老人 = người già; 老 còn nghĩa “cũ, lâu năm”: 老城、老街、老朋友. Ôn: 老师 (HSK1 Bài 1).",
    "cf": "考 kǎo (考试 – HSK2 Bài 10) — dưới là 丂, không phải 匕",
    "w": "老人 / 老师 / 老城"
   },
   {
    "c": "虎",
    "p": "hǔ",
    "type": "半包围结构 · Nửa bao quanh",
    "st": 8,
    "ord": "虍 bao → 几 trong",
    "rad": "虍 (hổ)",
    "mean": "hổ",
    "tip": "Tượng hình con HỔ. 马虎 = \"ngựa hổ\" — truyền thuyết họa sĩ vẽ lẫn ngựa và hổ → CẨU THẢ.",
    "cf": "虚 (xū – hư)",
    "w": "马虎 / 老虎 / 马马虎虎"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Đây là lần đầu tiên tôi nhìn thấy hổ ở cự ly gần, vừa phấn khích vừa căng thẳng.",
    "answer": "这是我第一次近距离看到老虎，既兴奋又紧张。",
    "answerPy": "Zhè shì wǒ dì yí cì jìn jùlí kàndào lǎohǔ, jì xīngfèn yòu jǐnzhāng.",
    "note": "Ôn 既……又…… (Bài 4 · điểm 3).",
    "pair": "既……又……"
   },
   {
    "promptLang": "vi",
    "prompt": "Hổ không phải là mèo lớn, mà là động vật được bảo vệ cấp một quốc gia.",
    "answer": "老虎不是大猫，而是国家一级保护动物。",
    "answerPy": "Lǎohǔ bú shì dà māo, érshì guójiā yì jí bǎohù dòngwù.",
    "note": "Ôn 不是……而是…… (Bài 11 · điểm 3).",
    "pair": "不是……而是……"
   }
  ]
 },
 {
  "n": 3,
  "zh": "喊",
  "py": "hǎn",
  "pos": "Động từ",
  "vn": "kêu to, hét; gọi (ai)",
  "hv": "hảm",
  "em": "📢",
  "lesson": 1,
  "explain": [
   "Nói / kêu rất to; cũng là gọi to tên người khác: 喊他过来 (gọi anh ấy lại đây)."
  ],
  "usage": "大喊 · 喊人 · 喊了你几遍 · 兴奋地喊着.",
  "collo": [
   "大喊",
   "喊人",
   "喊名字",
   "喊了几遍"
  ],
  "colloFull": [
   {
    "zh": "大喊",
    "py": "Dà hǎn",
    "vn": "hét to"
   },
   {
    "zh": "喊人",
    "py": "Hǎn rén",
    "vn": "gọi người"
   },
   {
    "zh": "喊名字",
    "py": "Hǎn míngzi",
    "vn": "gọi tên"
   },
   {
    "zh": "喊了几遍",
    "py": "Hǎn le jǐ biàn",
    "vn": "gọi mấy lần"
   }
  ],
  "patterns": [
   {
    "s": "喊 + người + V (过来 / 回家 / 吃饭)",
    "m": "Gọi ai làm gì"
   },
   {
    "s": "喊 ≈ 叫",
    "m": "喊 nhấn mạnh âm lượng to; 叫 còn nghĩa “tên là”"
   }
  ],
  "ex_zh": "小明，注意安全，不要一直大喊！",
  "ex_py": "Xiǎomíng, zhùyì ānquán, búyào yìzhí dà hǎn!",
  "ex_vn": "Tiểu Minh, chú ý an toàn, đừng có hét to suốt thế!",
  "exList": [
   {
    "zh": "小明，注意安全，不要一直大喊！",
    "py": "Xiǎomíng, zhùyì ānquán, búyào yìzhí dà hǎn!",
    "vn": "Tiểu Minh, chú ý an toàn, đừng có hét to suốt thế!"
   },
   {
    "zh": "我在楼下喊了你半天，你怎么都没听见？",
    "py": "Wǒ zài lóuxià hǎn le nǐ bàntiān, nǐ zěnme dōu méi tīngjiàn?",
    "vn": "Mình gọi cậu ở dưới lầu nửa ngày, sao cậu mãi chẳng nghe thấy gì?"
   }
  ],
  "hanzi": [
   {
    "c": "喊",
    "p": "hǎn",
    "type": "形声字 · Chữ hình thanh",
    "st": 12,
    "ord": "口 → 咸",
    "rad": "口 (khẩu – miệng)",
    "mean": "kêu to, hét; gọi (ai)",
    "tip": "Miệng (口) + 咸 (xián, gợi âm hǎn): há miệng thật to mà kêu → hét, gọi to — 大喊, 喊人.",
    "cf": "减 jiǎn (giảm) — bên trái là 冫; 感 gǎn (cảm) — dưới là 心",
    "w": "大喊 / 喊人 / 喊叫"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Tôi đã gọi mấy lần rồi mà cậu vẫn không nghe thấy.",
    "answer": "我已经喊了好几遍了，你仍然没听见。",
    "answerPy": "Wǒ yǐjīng hǎn le hǎojǐ biàn le, nǐ réngrán méi tīngjiàn.",
    "note": "仍然 (từ mới bài khoá 4) + lượng từ 遍 (lần).",
    "pair": "喊了……遍"
   },
   {
    "promptLang": "vi",
    "prompt": "Mẹ ra cửa gọi con về nhà ăn cơm.",
    "answer": "妈妈到门口喊孩子回家吃饭。",
    "answerPy": "Māma dào ménkǒu hǎn háizi huíjiā chīfàn.",
    "note": "Câu kiêm ngữ: 喊 + người + V (giống 让, 请).",
    "pair": "喊 + người + V"
   }
  ]
 },
 {
  "n": 4,
  "zh": "级",
  "py": "jí",
  "pos": "Lượng từ",
  "vn": "cấp, bậc; khoá (năm nhập học)",
  "hv": "cấp",
  "em": "🥇",
  "lesson": 1,
  "explain": [
   "Lượng từ chỉ cấp bậc, thứ hạng: 一级 (cấp một – cao nhất), HSK四级 (cấp 4), 2024级 (khoá 2024)."
  ],
  "usage": "一级保护动物 · HSK四级 · 六级大风 · 2024级学生.",
  "collo": [
   "一级保护动物",
   "HSK四级",
   "六级大风",
   "2024级学生"
  ],
  "colloFull": [
   {
    "zh": "一级保护动物",
    "py": "Yì jí bǎohù dòngwù",
    "vn": "động vật bảo vệ cấp một"
   },
   {
    "zh": "HSK四级",
    "py": "HSK sì jí",
    "vn": "HSK cấp 4"
   },
   {
    "zh": "六级大风",
    "py": "Liù jí dàfēng",
    "vn": "gió cấp 6"
   },
   {
    "zh": "2024级学生",
    "py": "2024 jí xuésheng",
    "vn": "sinh viên khoá 2024"
   }
  ],
  "patterns": [
   {
    "s": "số + 级",
    "m": "Cấp / bậc mấy"
   },
   {
    "s": "一级 ≠ 一年级",
    "m": "一级 = cấp một (cao nhất); 一年级 = lớp một, năm nhất"
   }
  ],
  "ex_zh": "你们看，那个叫东北虎，是国家一级保护动物。",
  "ex_py": "Nǐmen kàn, nàge jiào Dōngběihǔ, shì guójiā yì jí bǎohù dòngwù.",
  "ex_vn": "Hai mẹ con nhìn kìa, con đó gọi là hổ Đông Bắc, là động vật được nhà nước bảo vệ cấp một.",
  "exList": [
   {
    "zh": "你们看，那个叫东北虎，是国家一级保护动物。",
    "py": "Nǐmen kàn, nàge jiào Dōngběihǔ, shì guójiā yì jí bǎohù dòngwù.",
    "vn": "Hai mẹ con nhìn kìa, con đó gọi là hổ Đông Bắc, là động vật được nhà nước bảo vệ cấp một."
   },
   {
    "zh": "我去年考过了HSK四级，今年打算考五级。",
    "py": "Wǒ qùnián kǎo guò le HSK sì jí, jīnnián dǎsuàn kǎo wǔ jí.",
    "vn": "Năm ngoái tôi đã thi đỗ HSK cấp 4, năm nay định thi cấp 5."
   }
  ],
  "hanzi": [
   {
    "c": "级",
    "p": "jí",
    "type": "左右结构 · Trái-phải",
    "st": 6,
    "ord": "纟 trái → 及 phải",
    "rad": "纟 (mịch – tơ, sợi)",
    "mean": "cấp bậc, lớp",
    "tip": "纟(dệt vải theo từng lớp sợi) + 及(đạt tới) → thứ bậc đạt được = CẤP, LỚP.",
    "cf": "极 (jí – \"cực kỳ\", có bộ 木 thay vì 纟\")",
    "w": "年级 / 一年级 / 高年级"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Để thi đỗ HSK cấp 4, mỗi ngày cô ấy đều học thuộc ba mươi từ mới.",
    "answer": "为了考过HSK四级，她每天都背三十个生词。",
    "answerPy": "Wèile kǎo guò HSK sì jí, tā měitiān dōu bèi sānshí gè shēngcí.",
    "note": "Ôn 为了 (HSK 3) chỉ mục đích.",
    "pair": "为了……"
   },
   {
    "promptLang": "vi",
    "prompt": "Gấu trúc là động vật được bảo vệ cấp một quốc gia, bất kỳ ai cũng phải bảo vệ chúng.",
    "answer": "大熊猫是国家一级保护动物，任何人都应该保护它们。",
    "answerPy": "Dàxióngmāo shì guójiā yì jí bǎohù dòngwù, rènhé rén dōu yīnggāi bǎohù tāmen.",
    "note": "Ôn 任何……都…… (Bài 1 · điểm 1).",
    "pair": "任何……都……"
   }
  ]
 },
 {
  "n": 5,
  "zh": "树林",
  "py": "shùlín",
  "pos": "Danh từ",
  "vn": "rừng cây, rặng cây",
  "hv": "thụ lâm",
  "em": "🌳",
  "lesson": 1,
  "explain": [
   "Nơi có nhiều cây mọc thành mảng; nhỏ hơn 森林 (rừng lớn)."
  ],
  "usage": "一片树林 · 树林里 · 走进树林.",
  "collo": [
   "一片树林",
   "树林里",
   "走进树林",
   "小树林"
  ],
  "colloFull": [
   {
    "zh": "一片树林",
    "py": "Yí piàn shùlín",
    "vn": "một khoảnh rừng"
   },
   {
    "zh": "树林里",
    "py": "Shùlín lǐ",
    "vn": "trong rừng cây"
   },
   {
    "zh": "走进树林",
    "py": "Zǒujìn shùlín",
    "vn": "đi vào rừng"
   },
   {
    "zh": "小树林",
    "py": "Xiǎo shùlín",
    "vn": "rặng cây nhỏ"
   }
  ],
  "patterns": [
   {
    "s": "一片 + 树林",
    "m": "Lượng từ 片 cho vùng rộng"
   },
   {
    "s": "树林 < 森林",
    "m": "树林 rừng cây nhỏ; 森林 rừng lớn"
   }
  ],
  "ex_zh": "你们看，那个叫东北虎，是国家一级保护动物。那边树林里还有很多动物呢。",
  "ex_py": "Nǐmen kàn, nàge jiào Dōngběihǔ, shì guójiā yì jí bǎohù dòngwù. Nàbiān shùlín lǐ hái yǒu hěn duō dòngwù ne.",
  "ex_vn": "Hai mẹ con nhìn kìa, con đó gọi là hổ Đông Bắc, là động vật được nhà nước bảo vệ cấp một. Trong rừng cây đằng kia còn nhiều động vật lắm.",
  "exList": [
   {
    "zh": "你们看，那个叫东北虎，是国家一级保护动物。那边树林里还有很多动物呢。",
    "py": "Nǐmen kàn, nàge jiào Dōngběihǔ, shì guójiā yì jí bǎohù dòngwù. Nàbiān shùlín lǐ hái yǒu hěn duō dòngwù ne.",
    "vn": "Hai mẹ con nhìn kìa, con đó gọi là hổ Đông Bắc, là động vật được nhà nước bảo vệ cấp một. Trong rừng cây đằng kia còn nhiều động vật lắm."
   },
   {
    "zh": "我家后面有一片小树林，夏天特别凉快。",
    "py": "Wǒ jiā hòumian yǒu yí piàn xiǎo shùlín, xiàtiān tèbié liángkuai.",
    "vn": "Sau nhà tôi có một rặng cây nhỏ, mùa hè mát vô cùng."
   }
  ],
  "hanzi": [
   {
    "c": "树",
    "p": "shù",
    "type": "形声字 · Chữ hình thanh",
    "st": 9,
    "ord": "木 → 又 → 寸",
    "rad": "木 (mộc – cây)",
    "mean": "cây",
    "tip": "木 (cây) + 对 (chỉ âm): cái cây. Chữ có bộ 木 thường liên quan đến cây, gỗ: 桌子、椅子.",
    "cf": "对 duì — không có bộ 木",
    "w": "树 / 树上 / 爬树"
   },
   {
    "c": "林",
    "p": "lín",
    "type": "会意字 · Chữ hội ý",
    "st": 8,
    "ord": "木 (nét mác cuối viết thành chấm) → 木",
    "rad": "木 (mộc – cây)",
    "mean": "rừng",
    "tip": "Hai cây (木木) đứng cạnh nhau → nhiều cây → rừng; ba cây 森 → rừng rậm (森林).",
    "cf": "森 sēn (rừng rậm) — ba chữ 木; 材 cái (vật liệu) — bên phải là 才",
    "w": "树林 / 森林 / 园林"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Trong rừng cây có rất nhiều chim, sáng nào cũng rất náo nhiệt.",
    "answer": "树林里有很多鸟，每天早上都很热闹。",
    "answerPy": "Shùlín lǐ yǒu hěn duō niǎo, měitiān zǎoshang dōu hěn rènao.",
    "note": "热闹 (Bài 2) + câu tồn tại: nơi chốn + 有 + N.",
    "pair": "nơi chốn + 有 + N"
   },
   {
    "promptLang": "vi",
    "prompt": "Con mèo chạy vào rừng cây rồi, chúng tôi tìm thế nào cũng không thấy.",
    "answer": "小猫跑进树林里去了，我们怎么都找不到。",
    "answerPy": "Xiǎomāo pǎojìn shùlín lǐ qù le, wǒmen zěnme dōu zhǎobudào.",
    "note": "怎么都 + V不到 (Bài 13 · điểm 1) + bổ ngữ xu hướng 跑进……去.",
    "pair": "怎么都 + V不到"
   }
  ]
 },
 {
  "n": 6,
  "zh": "景区",
  "py": "jǐngqū",
  "pos": "Danh từ",
  "vn": "khu du lịch, khu thắng cảnh",
  "hv": "cảnh khu",
  "em": "🏞️",
  "lesson": 1,
  "explain": [
   "Khu có cảnh đẹp / điểm tham quan được quản lý, có bán vé, có xe đưa đón khách."
  ],
  "usage": "旅游景区 · 进入景区 · 景区门票 · 景区的车.",
  "collo": [
   "旅游景区",
   "景区门票",
   "进入景区",
   "有名的景区"
  ],
  "colloFull": [
   {
    "zh": "旅游景区",
    "py": "Lǚyóu jǐngqū",
    "vn": "khu du lịch"
   },
   {
    "zh": "景区门票",
    "py": "Jǐngqū ménpiào",
    "vn": "vé vào khu du lịch"
   },
   {
    "zh": "进入景区",
    "py": "Jìnrù jǐngqū",
    "vn": "vào khu du lịch"
   },
   {
    "zh": "有名的景区",
    "py": "Yǒumíng de jǐngqū",
    "vn": "khu thắng cảnh nổi tiếng"
   }
  ],
  "patterns": [
   {
    "s": "景区 + 的车 / 门票 / 游客",
    "m": "Xe, vé, du khách của khu du lịch"
   }
  ],
  "ex_zh": "真不错，这景区真大、真美！",
  "ex_py": "Zhēn búcuò, zhè jǐngqū zhēn dà, zhēn měi!",
  "ex_vn": "Tuyệt thật, khu du lịch này rộng thật, đẹp thật!",
  "exList": [
   {
    "zh": "真不错，这景区真大、真美！",
    "py": "Zhēn búcuò, zhè jǐngqū zhēn dà, zhēn měi!",
    "vn": "Tuyệt thật, khu du lịch này rộng thật, đẹp thật!"
   },
   {
    "zh": "每到节假日，这个景区的游客都特别多。",
    "py": "Měi dào jiéjiàrì, zhège jǐngqū de yóukè dōu tèbié duō.",
    "vn": "Cứ đến dịp lễ, du khách ở khu du lịch này lại cực kỳ đông."
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
    "prompt": "Khu du lịch này không những phong cảnh đẹp mà vé vào cửa cũng không đắt.",
    "answer": "这个景区不仅风景美，而且门票也不贵。",
    "answerPy": "Zhège jǐngqū bùjǐn fēngjǐng měi, érqiě ménpiào yě bú guì.",
    "note": "Ôn 不仅……而且…… (Bài 3 · điểm 2).",
    "pair": "不仅……而且……"
   },
   {
    "promptLang": "vi",
    "prompt": "Khu du lịch bảy giờ sáng mở cửa, chúng ta khoảng sáu rưỡi xuất phát nhé.",
    "answer": "景区早上七点开门，我们大约六点半出发吧。",
    "answerPy": "Jǐngqū zǎoshang qī diǎn kāimén, wǒmen dàyuē liù diǎn bàn chūfā ba.",
    "note": "大约 + thời gian (Bài 13 · điểm 3).",
    "pair": "大约 + thời gian"
   }
  ]
 },
 {
  "n": 7,
  "zh": "区",
  "py": "qū",
  "pos": "Danh từ",
  "vn": "khu, khu vực; quận",
  "hv": "khu",
  "em": "🗺️",
  "lesson": 1,
  "explain": [
   "Một khu vực được chia ra theo chức năng: 动物区 (khu động vật), 生活区 (khu sinh hoạt); cũng là quận trong thành phố (海淀区)."
  ],
  "usage": "动物区 · 猛兽区 · 生活区 · 海淀区.",
  "collo": [
   "动物区",
   "生活区",
   "教学区",
   "海淀区"
  ],
  "colloFull": [
   {
    "zh": "动物区",
    "py": "Dòngwù qū",
    "vn": "khu động vật"
   },
   {
    "zh": "生活区",
    "py": "Shēnghuó qū",
    "vn": "khu sinh hoạt"
   },
   {
    "zh": "教学区",
    "py": "Jiàoxué qū",
    "vn": "khu giảng đường"
   },
   {
    "zh": "海淀区",
    "py": "Hǎi diàn qū",
    "vn": "quận Hải Điến"
   }
  ],
  "patterns": [
   {
    "s": "N + 区",
    "m": "Khu …: 动物区 / 生活区"
   },
   {
    "s": "每到一个 + 区，都……",
    "m": "Mỗi khi đến một khu … đều …"
   }
  ],
  "ex_zh": "对。景区的车每到一个动物区都会停一会儿，让人们能近距离看看这些动物。",
  "ex_py": "Duì. Jǐngqū de chē měi dào yí gè dòngwù qū dōu huì tíng yíhuìr, ràng rénmen néng jìn jùlí kànkan zhèxiē dòngwù.",
  "ex_vn": "Đúng rồi. Xe của khu du lịch mỗi lần đến một khu động vật đều dừng một lát, để mọi người được ngắm những con vật này ở cự ly gần.",
  "exList": [
   {
    "zh": "对。景区的车每到一个动物区都会停一会儿，让人们能近距离看看这些动物。",
    "py": "Duì. Jǐngqū de chē měi dào yí gè dòngwù qū dōu huì tíng yíhuìr, ràng rénmen néng jìn jùlí kànkan zhèxiē dòngwù.",
    "vn": "Đúng rồi. Xe của khu du lịch mỗi lần đến một khu động vật đều dừng một lát, để mọi người được ngắm những con vật này ở cự ly gần."
   },
   {
    "zh": "学校的生活区有食堂、超市和宿舍，非常方便。",
    "py": "Xuéxiào de shēnghuó qū yǒu shítáng, chāoshì hé sùshè, fēicháng fāngbiàn.",
    "vn": "Khu sinh hoạt của trường có nhà ăn, siêu thị và ký túc xá, rất tiện."
   }
  ],
  "hanzi": [
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
    "prompt": "Nhà tôi ở quận Hải Điến, cách trường không xa.",
    "answer": "我家在海淀区，离学校不远。",
    "answerPy": "Wǒ jiā zài hǎi diàn qū, lí xuéxiào bù yuǎn.",
    "note": "Ôn câu 离 chỉ khoảng cách (HSK 2).",
    "pair": "A离B + 远 / 近"
   },
   {
    "promptLang": "vi",
    "prompt": "Khu sinh hoạt không những có nhà ăn mà còn có siêu thị.",
    "answer": "生活区不光有食堂，还有超市。",
    "answerPy": "Shēnghuó qū bùguāng yǒu shítáng, hái yǒu chāoshì.",
    "note": "Ôn 不光……还…… (Bài 3 · điểm 2).",
    "pair": "不光……还……"
   }
  ]
 },
 {
  "n": 8,
  "zh": "美",
  "py": "měi",
  "pos": "Tính từ",
  "vn": "đẹp",
  "hv": "mỹ",
  "em": "🌸",
  "lesson": 1,
  "explain": [
   "Đẹp — hay dùng cho cảnh vật, người, cuộc sống; 美好 = tốt đẹp (美好的日子 – những ngày tươi đẹp)."
  ],
  "usage": "真美 · 美极了 · 风景很美 · 又大又美.",
  "collo": [
   "风景很美",
   "又大又美",
   "美极了",
   "美好的日子"
  ],
  "colloFull": [
   {
    "zh": "风景很美",
    "py": "Fēngjǐng hěn měi",
    "vn": "phong cảnh rất đẹp"
   },
   {
    "zh": "又大又美",
    "py": "Yòu dà yòu měi",
    "vn": "vừa rộng vừa đẹp"
   },
   {
    "zh": "美极了",
    "py": "Měi jí le",
    "vn": "đẹp tuyệt"
   },
   {
    "zh": "美好的日子",
    "py": "Měihǎo de rìzi",
    "vn": "những ngày tươi đẹp"
   }
  ],
  "patterns": [
   {
    "s": "又 + Adj + 又 + 美",
    "m": "Vừa … vừa đẹp"
   },
   {
    "s": "美 ≈ 漂亮",
    "m": "漂亮 khẩu ngữ hơn; 美 hay dùng cho cảnh, văn viết"
   }
  ],
  "ex_zh": "真不错，这景区真大、真美！",
  "ex_py": "Zhēn búcuò, zhè jǐngqū zhēn dà, zhēn měi!",
  "ex_vn": "Tuyệt thật, khu du lịch này rộng thật, đẹp thật!",
  "exList": [
   {
    "zh": "真不错，这景区真大、真美！",
    "py": "Zhēn búcuò, zhè jǐngqū zhēn dà, zhēn měi!",
    "vn": "Tuyệt thật, khu du lịch này rộng thật, đẹp thật!"
   },
   {
    "zh": "秋天的北京特别美，到处都是红叶。",
    "py": "Qiūtiān de Běijīng tèbié měi, dàochù dōu shì hóngyè.",
    "vn": "Bắc Kinh mùa thu đẹp vô cùng, khắp nơi toàn lá đỏ."
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
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Phong cảnh ở đây đẹp hơn tôi tưởng nhiều.",
    "answer": "这里的风景比我想的美多了。",
    "answerPy": "Zhèli de fēngjǐng bǐ wǒ xiǎng de měi duō le.",
    "note": "Câu so sánh 比 + Adj + 多了 (HSK 3).",
    "pair": "A比B + Adj + 多了"
   },
   {
    "promptLang": "vi",
    "prompt": "Cái hồ này năm sau đẹp hơn năm trước.",
    "answer": "这个湖一年比一年美。",
    "answerPy": "Zhège hú yì nián bǐ yì nián měi.",
    "note": "一年比一年 + Adj (Bài 13 · điểm 2).",
    "pair": "一年比一年 + Adj"
   }
  ]
 },
 {
  "n": 9,
  "zh": "节假日",
  "py": "jiéjiàrì",
  "pos": "Danh từ",
  "vn": "ngày lễ, ngày nghỉ",
  "hv": "tiết giả nhật",
  "em": "🎉",
  "lesson": 1,
  "explain": [
   "Gọi chung các ngày lễ tết (节日) và ngày nghỉ (假日)."
  ],
  "usage": "每到节假日 · 节假日人多 · 节假日加班.",
  "collo": [
   "每到节假日",
   "节假日人多",
   "节假日出去玩",
   "节假日加班"
  ],
  "colloFull": [
   {
    "zh": "每到节假日",
    "py": "Měi dào jiéjiàrì",
    "vn": "cứ đến ngày lễ"
   },
   {
    "zh": "节假日人多",
    "py": "Jiéjiàrì rén duō",
    "vn": "ngày lễ đông người"
   },
   {
    "zh": "节假日出去玩",
    "py": "Jiéjiàrì chūqu wán",
    "vn": "ngày lễ đi chơi"
   },
   {
    "zh": "节假日加班",
    "py": "Jiéjiàrì jiābān",
    "vn": "tăng ca ngày lễ"
   }
  ],
  "patterns": [
   {
    "s": "每到节假日，……都……",
    "m": "Cứ đến ngày lễ là …"
   },
   {
    "s": "节假日 = 节日 + 假日",
    "m": "Ngày lễ + ngày nghỉ"
   }
  ],
  "ex_zh": "这里有几千只动物呢，能不大吗？现在是节假日，人多。",
  "ex_py": "Zhèli yǒu jǐqiān zhǐ dòngwù ne, néng bú dà ma? Xiànzài shì jiéjiàrì, rén duō.",
  "ex_vn": "Ở đây có mấy nghìn con thú cơ mà, không rộng sao được? Giờ đang dịp lễ, người đông.",
  "exList": [
   {
    "zh": "这里有几千只动物呢，能不大吗？现在是节假日，人多。",
    "py": "Zhèli yǒu jǐqiān zhǐ dòngwù ne, néng bú dà ma? Xiànzài shì jiéjiàrì, rén duō.",
    "vn": "Ở đây có mấy nghìn con thú cơ mà, không rộng sao được? Giờ đang dịp lễ, người đông."
   },
   {
    "zh": "每到节假日，商场里都特别热闹。",
    "py": "Měi dào jiéjiàrì, shāngchǎng lǐ dōu tèbié rènao.",
    "vn": "Cứ đến ngày lễ, trung tâm thương mại lại cực kỳ náo nhiệt."
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
    "prompt": "Ngày lễ người đi tàu cao tốc rất đông, tốt nhất nên mua vé trước.",
    "answer": "节假日坐高铁的人很多，最好提前买票。",
    "answerPy": "Jiéjiàrì zuò gāotiě de rén hěn duō, zuìhǎo tíqián mǎipiào.",
    "note": "最好 + V (tốt nhất nên…); 提前 = trước thời hạn.",
    "pair": "最好 + V"
   },
   {
    "promptLang": "vi",
    "prompt": "Dù là ngày lễ, anh ấy cũng phải đi làm.",
    "answer": "即使是节假日，他也得上班。",
    "answerPy": "Jíshǐ shì jiéjiàrì, tā yě děi shàngbān.",
    "note": "Ôn 即使……也…… (Bài 11 · điểm 1).",
    "pair": "即使……也……"
   }
  ]
 },
 {
  "n": 10,
  "zh": "千万",
  "py": "qiānwàn",
  "pos": "Phó từ",
  "vn": "nhất định, tuyệt đối (lời dặn dò)",
  "hv": "thiên vạn",
  "em": "⚠️",
  "lesson": 1,
  "explain": [
   "Phó từ dặn dò tha thiết: “nhất định phải / tuyệt đối đừng”, hay đi với 别 / 不要 / 要. Bẫy Hán Việt: 千万 “thiên vạn” còn là con số mười triệu, nhưng ở bài này là phó từ."
  ],
  "usage": "千万别…… · 千万不要…… · 千万要…… (chỉ dùng khi dặn dò, khuyên bảo).",
  "collo": [
   "千万别忘了",
   "千万要小心",
   "千万不要迟到",
   "千万记住"
  ],
  "colloFull": [
   {
    "zh": "千万别忘了",
    "py": "Qiānwàn bié wàng le",
    "vn": "nhất định đừng quên"
   },
   {
    "zh": "千万要小心",
    "py": "Qiānwàn yào xiǎoxīn",
    "vn": "nhất định phải cẩn thận"
   },
   {
    "zh": "千万不要迟到",
    "py": "Qiānwàn búyào chídào",
    "vn": "tuyệt đối đừng đến muộn"
   },
   {
    "zh": "千万记住",
    "py": "Qiānwàn jìzhù",
    "vn": "nhất định phải nhớ"
   }
  ],
  "patterns": [
   {
    "s": "千万 + 别 / 不要 + V",
    "m": "Tuyệt đối đừng …"
   },
   {
    "s": "千万 ≠ 一定 (trong câu kể)",
    "m": "千万 chỉ dùng dặn dò; ✗ 他千万会来 → 他一定会来"
   }
  ],
  "ex_zh": "小明，一会儿千万别跑丢了，我可不是开玩笑呢。",
  "ex_py": "Xiǎomíng, yíhuìr qiānwàn bié pǎo diū le, wǒ kěbúshi kāi wánxiào ne.",
  "ex_vn": "Tiểu Minh, lát nữa tuyệt đối không được chạy lạc đấy, mẹ không đùa đâu.",
  "exList": [
   {
    "zh": "小明，一会儿千万别跑丢了，我可不是开玩笑呢。",
    "py": "Xiǎomíng, yíhuìr qiānwàn bié pǎo diū le, wǒ kěbúshi kāi wánxiào ne.",
    "vn": "Tiểu Minh, lát nữa tuyệt đối không được chạy lạc đấy, mẹ không đùa đâu."
   },
   {
    "zh": "明天的考试很重要，你千万不要迟到。",
    "py": "Míngtiān de kǎoshì hěn zhòngyào, nǐ qiānwàn búyào chídào.",
    "vn": "Bài thi ngày mai rất quan trọng, em tuyệt đối đừng đến muộn."
   }
  ],
  "hanzi": [
   {
    "c": "千",
    "p": "qiān",
    "type": "指事字 · Chữ chỉ sự",
    "st": 3,
    "ord": "丿 → 一 → 丨",
    "rad": "十 (thập – mười)",
    "mean": "nghìn; rất nhiều",
    "tip": "Chữ 十 thêm một nét phẩy (丿) ở trên → con số nghìn. Mẹo: 千 nét đầu là phẩy nằm, còn 干 (làm) nét đầu là ngang.",
    "cf": "干 gàn (làm) — nét đầu là ngang; 于 yú — nét dọc có móc",
    "w": "一千 / 千万 / 几千"
   },
   {
    "c": "万",
    "p": "wàn",
    "type": "独体字 · Chữ đơn thể",
    "st": 3,
    "ord": "一 → 𠃌 → 丿",
    "rad": "一 (nhất)",
    "mean": "vạn",
    "tip": "Giản thể của 萬 (con bọ cạp) → số VẠN (10.000). 千万 = nghìn vạn → rất nhiều → nhấn mạnh \"nhất định\".",
    "cf": "方 (fāng – vuông, 4 nét)",
    "w": "千万 / 万 / 万一"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Ngày lễ đông người, con nhất định phải đi theo bố mẹ.",
    "answer": "节假日人多，你千万要跟着爸爸妈妈。",
    "answerPy": "Jiéjiàrì rén duō, nǐ qiānwàn yào gēnzhe bàba māma.",
    "note": "千万要 + V (dặn dò khẳng định).",
    "pair": "千万要……"
   },
   {
    "promptLang": "vi",
    "prompt": "Dù bận đến đâu, cậu tuyệt đối đừng quên ăn sáng.",
    "answer": "不管多忙，你千万别忘了吃早饭。",
    "answerPy": "Bùguǎn duō máng, nǐ qiānwàn bié wàng le chī zǎofàn.",
    "note": "Ôn 不管…… (Bài 8 · điểm 1), vế sau là câu dặn dò.",
    "pair": "不管……，千万别……"
   }
  ]
 },
 {
  "n": 11,
  "zh": "开玩笑",
  "py": "kāi wánxiào",
  "pos": "Cụm từ",
  "vn": "nói đùa, đùa giỡn; coi như trò đùa",
  "hv": "khai ngoạn tiếu",
  "em": "😜",
  "lesson": 1,
  "explain": [
   "Nói đùa cho vui. 不是开玩笑 = nói thật, chuyện nghiêm túc (không phải trò đùa). Là từ ly hợp: 开个玩笑, 开了一个玩笑."
  ],
  "usage": "开个玩笑 · 跟 / 和 + người + 开玩笑 · 别开玩笑了 · 不是开玩笑.",
  "collo": [
   "开个玩笑",
   "跟他开玩笑",
   "别开玩笑了",
   "不是开玩笑"
  ],
  "colloFull": [
   {
    "zh": "开个玩笑",
    "py": "Kāi gè wánxiào",
    "vn": "đùa một chút"
   },
   {
    "zh": "跟他开玩笑",
    "py": "Gēn tā kāi wánxiào",
    "vn": "đùa với anh ấy"
   },
   {
    "zh": "别开玩笑了",
    "py": "Bié kāi wánxiào le",
    "vn": "đừng đùa nữa"
   },
   {
    "zh": "不是开玩笑",
    "py": "Bú shì kāi wánxiào",
    "vn": "không phải chuyện đùa"
   }
  ],
  "patterns": [
   {
    "s": "跟 + người + 开玩笑",
    "m": "Đùa với ai"
   },
   {
    "s": "开 + 个 / 了 + 玩笑",
    "m": "Từ ly hợp: chen 个 / 了 vào giữa"
   }
  ],
  "ex_zh": "小明，一会儿千万别跑丢了，我可不是开玩笑呢。",
  "ex_py": "Xiǎomíng, yíhuìr qiānwàn bié pǎo diū le, wǒ kěbúshi kāi wánxiào ne.",
  "ex_vn": "Tiểu Minh, lát nữa tuyệt đối không được chạy lạc đấy, mẹ không đùa đâu.",
  "exList": [
   {
    "zh": "小明，一会儿千万别跑丢了，我可不是开玩笑呢。",
    "py": "Xiǎomíng, yíhuìr qiānwàn bié pǎo diū le, wǒ kěbúshi kāi wánxiào ne.",
    "vn": "Tiểu Minh, lát nữa tuyệt đối không được chạy lạc đấy, mẹ không đùa đâu."
   },
   {
    "zh": "他喜欢跟朋友开玩笑，大家都觉得他很幽默。",
    "py": "Tā xǐhuan gēn péngyou kāi wánxiào, dàjiā dōu juéde tā hěn yōumò.",
    "vn": "Anh ấy thích đùa với bạn bè, ai cũng thấy anh ấy rất hài hước."
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
   },
   {
    "c": "笑",
    "p": "xiào",
    "type": "上下结构 · Trên-dưới",
    "st": 10,
    "ord": "⺮ trên → 夭 dưới",
    "rad": "⺮ (trúc)",
    "mean": "cười",
    "tip": "Trúc ⺮ + 夭 → cây trúc uốn cong như người cười → CƯỜI. 笑话 = truyện cười; 开玩笑 (Bài 5).",
    "cf": "夭 (yāo)",
    "w": "笑话 / 开玩笑 / 笑"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Tôi chỉ đùa với cậu thôi, cậu đừng giận nhé.",
    "answer": "我只是跟你开个玩笑，你别生气。",
    "answerPy": "Wǒ zhǐshì gēn nǐ kāi gè wánxiào, nǐ bié shēngqì.",
    "note": "Từ ly hợp: 开 + 个 + 玩笑.",
    "pair": "跟……开玩笑"
   },
   {
    "promptLang": "vi",
    "prompt": "Đây không phải chuyện đùa, mà là chuyện rất quan trọng.",
    "answer": "这不是开玩笑，而是很重要的事。",
    "answerPy": "Zhè bú shì kāi wánxiào, érshì hěn zhòngyào de shì.",
    "note": "Ôn 不是……而是…… (Bài 11 · điểm 3).",
    "pair": "不是……而是……"
   }
  ]
 },
 {
  "n": 12,
  "zh": "东北虎",
  "py": "Dōngběihǔ",
  "pos": "Danh từ riêng",
  "vn": "hổ Đông Bắc (hổ Siberia)",
  "hv": "Đông Bắc hổ",
  "em": "🐅",
  "lesson": 1,
  "explain": [
   "Loài hổ lớn nhất thế giới, sống ở vùng Đông Bắc Trung Quốc và Nga; là động vật được nhà nước bảo vệ cấp một."
  ],
  "usage": "一只东北虎 · 东北虎是国家一级保护动物.",
  "collo": [
   "一只东北虎",
   "野生东北虎",
   "保护东北虎",
   "看东北虎"
  ],
  "colloFull": [
   {
    "zh": "一只东北虎",
    "py": "Yì zhī Dōngběihǔ",
    "vn": "một con hổ Đông Bắc"
   },
   {
    "zh": "野生东北虎",
    "py": "Yěshēng Dōngběihǔ",
    "vn": "hổ Đông Bắc hoang dã"
   },
   {
    "zh": "保护东北虎",
    "py": "Bǎohù Dōngběihǔ",
    "vn": "bảo vệ hổ Đông Bắc"
   },
   {
    "zh": "看东北虎",
    "py": "Kàn Dōngběihǔ",
    "vn": "xem hổ Đông Bắc"
   }
  ],
  "patterns": [
   {
    "s": "东北 + 虎",
    "m": "Vùng Đông Bắc + hổ → tên loài hổ"
   }
  ],
  "ex_zh": "你们看，那个叫东北虎，是国家一级保护动物。",
  "ex_py": "Nǐmen kàn, nàge jiào Dōngběihǔ, shì guójiā yì jí bǎohù dòngwù.",
  "ex_vn": "Hai mẹ con nhìn kìa, con đó gọi là hổ Đông Bắc, là động vật được nhà nước bảo vệ cấp một.",
  "exList": [
   {
    "zh": "你们看，那个叫东北虎，是国家一级保护动物。",
    "py": "Nǐmen kàn, nàge jiào Dōngběihǔ, shì guójiā yì jí bǎohù dòngwù.",
    "vn": "Hai mẹ con nhìn kìa, con đó gọi là hổ Đông Bắc, là động vật được nhà nước bảo vệ cấp một."
   },
   {
    "zh": "东北虎生活在很冷的地方，所以毛特别厚。",
    "py": "Dōngběihǔ shēnghuó zài hěn lěng de dìfang, suǒyǐ máo tèbié hòu.",
    "vn": "Hổ Đông Bắc sống ở nơi rất lạnh, nên lông cực dày."
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
    "c": "北",
    "p": "běi",
    "type": "会意字 · Chữ hội ý",
    "st": 5,
    "ord": "sổ → ngang → hất → phẩy → sổ cong móc",
    "rad": "匕 (chuỷ – cái thìa)",
    "mean": "phía bắc",
    "tip": "Hình hai người quay lưng vào nhau → quay lưng về hướng bắc. Ôn: 北京 (HSK1 Bài 15).",
    "cf": "比 bǐ (HSK2 Bài 8) — hai nửa cùng quay sang phải",
    "w": "北方 / 北京 / 北方菜"
   },
   {
    "c": "虎",
    "p": "hǔ",
    "type": "半包围结构 · Nửa bao quanh",
    "st": 8,
    "ord": "虍 bao → 几 trong",
    "rad": "虍 (hổ)",
    "mean": "hổ",
    "tip": "Tượng hình con HỔ. 马虎 = \"ngựa hổ\" — truyền thuyết họa sĩ vẽ lẫn ngựa và hổ → CẨU THẢ.",
    "cf": "虚 (xū – hư)",
    "w": "马虎 / 老虎 / 马马虎虎"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Hổ Đông Bắc là loài hổ lớn nhất thế giới.",
    "answer": "东北虎是世界上最大的老虎。",
    "answerPy": "Dōngběihǔ shì shìjiè shàng zuìdà de lǎohǔ.",
    "note": "Câu 是 + 最 + Adj + 的 + N (HSK 2/3).",
    "pair": "……是……最……的"
   },
   {
    "promptLang": "vi",
    "prompt": "Tôi đến vườn thú ba lần rồi mà lần nào cũng không xem được hổ Đông Bắc.",
    "answer": "我去了三次动物园，可是怎么都没看到东北虎。",
    "answerPy": "Wǒ qù le sān cì dòngwùyuán, kěshì zěnme dōu méi kàndào Dōngběihǔ.",
    "note": "怎么都没 + V到 (Bài 13 · điểm 1).",
    "pair": "怎么都没……"
   }
  ]
 },
 {
  "n": 13,
  "zh": "北京野生动物园",
  "py": "Běijīng Yěshēng Dòngwùyuán",
  "pos": "Danh từ riêng",
  "vn": "Công viên Động vật hoang dã Bắc Kinh",
  "hv": "Bắc Kinh dã sinh động vật viên",
  "em": "🦁",
  "lesson": 1,
  "explain": [
   "Công viên động vật hoang dã ở phía nam Bắc Kinh: thú được thả trong các khu rộng, du khách ngồi xe đi qua từng khu. 野生 = hoang dã."
  ],
  "usage": "去北京野生动物园 · 北京野生动物园很大.",
  "collo": [
   "去北京野生动物园",
   "野生动物",
   "动物园门票",
   "坐车参观"
  ],
  "colloFull": [
   {
    "zh": "去北京野生动物园",
    "py": "Qù Běijīng yěshēng dòngwùyuán",
    "vn": "đi Công viên Động vật hoang dã Bắc Kinh"
   },
   {
    "zh": "野生动物",
    "py": "Yěshēng dòngwù",
    "vn": "động vật hoang dã"
   },
   {
    "zh": "动物园门票",
    "py": "Dòngwùyuán ménpiào",
    "vn": "vé vườn thú"
   },
   {
    "zh": "坐车参观",
    "py": "Zuòchē cānguān",
    "vn": "ngồi xe tham quan"
   }
  ],
  "patterns": [
   {
    "s": "野生 + 动物",
    "m": "Động vật hoang dã"
   },
   {
    "s": "动物 + 园",
    "m": "Vườn thú: 动物园"
   }
  ],
  "ex_zh": "我知道北京野生动物园很大，可怎么也没想到这么大！",
  "ex_py": "Wǒ zhīdao Běijīng yěshēng dòngwùyuán hěn dà, kě zěnme yě méi xiǎngdào zhème dà!",
  "ex_vn": "Anh biết Công viên Động vật hoang dã Bắc Kinh rất rộng, nhưng thế nào cũng không ngờ lại rộng đến thế!",
  "exList": [
   {
    "zh": "我知道北京野生动物园很大，可怎么也没想到这么大！",
    "py": "Wǒ zhīdao Běijīng yěshēng dòngwùyuán hěn dà, kě zěnme yě méi xiǎngdào zhème dà!",
    "vn": "Anh biết Công viên Động vật hoang dã Bắc Kinh rất rộng, nhưng thế nào cũng không ngờ lại rộng đến thế!"
   },
   {
    "zh": "北京野生动物园有几千只动物，一天都看不完。",
    "py": "Běijīng yěshēng dòngwùyuán yǒu jǐqiān zhǐ dòngwù, yì tiān dōu kàn bu wán.",
    "vn": "Công viên Động vật hoang dã Bắc Kinh có mấy nghìn con thú, một ngày xem không hết."
   }
  ],
  "hanzi": [
   {
    "c": "北",
    "p": "běi",
    "type": "会意字 · Chữ hội ý",
    "st": 5,
    "ord": "sổ → ngang → hất → phẩy → sổ cong móc",
    "rad": "匕 (chuỷ – cái thìa)",
    "mean": "phía bắc",
    "tip": "Hình hai người quay lưng vào nhau → quay lưng về hướng bắc. Ôn: 北京 (HSK1 Bài 15).",
    "cf": "比 bǐ (HSK2 Bài 8) — hai nửa cùng quay sang phải",
    "w": "北方 / 北京 / 北方菜"
   },
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
    "c": "野",
    "p": "yě",
    "type": "形声字 · Chữ hình thanh",
    "st": 11,
    "ord": "里 (日 + 土, nét cuối viết thành nét hất) → 予",
    "rad": "里 (lý – làng, dặm)",
    "mean": "cánh đồng; hoang dã",
    "tip": "里 (làng xóm, ruộng vườn) + 予 (yǔ, chỉ âm): vùng đất ở ngoài làng → đồng nội, hoang dã. 野生 = sinh ra, sống ngoài thiên nhiên.",
    "cf": "理 lǐ — bên trái là 王, bên phải là 里",
    "w": "野生 / 野生动物"
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
   },
   {
    "c": "园",
    "p": "yuán",
    "type": "形声字 · Chữ hình thanh",
    "st": 7,
    "ord": "囗 (nét sổ trái, ngang gập) → 元 → nét ngang đóng khung",
    "rad": "囗 (vi – vây quanh)",
    "mean": "vườn",
    "tip": "囗 (bức tường bao quanh) + 元 (yuán, chỉ âm): khu đất có tường bao → vườn. Ôn: 花园 (HSK3 Bài 3), 校园 (HSK3 Bài 9).",
    "cf": "远 yuǎn (HSK2 Bài 2) — cũng có 元 nhưng đi với 辶",
    "w": "公园 / 花园 / 校园"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Ngày Quốc tế Thiếu nhi, bố mẹ đưa Tiểu Minh đi Công viên Động vật hoang dã Bắc Kinh.",
    "answer": "六一儿童节，爸爸妈妈带小明去北京野生动物园。",
    "answerPy": "Liùyī értóngjié, bàba māma dài Xiǎomíng qù Běijīng yěshēng dòngwùyuán.",
    "note": "带 + người + 去 + nơi (HSK 3).",
    "pair": "带……去……"
   },
   {
    "promptLang": "vi",
    "prompt": "Ở Công viên Động vật hoang dã Bắc Kinh, người ngồi trong xe, còn động vật ở bên ngoài.",
    "answer": "在北京野生动物园，人坐在车里，而动物在外面。",
    "answerPy": "Zài Běijīng yěshēng dòngwùyuán, rén zuò zài chē lǐ, ér dòngwù zài wàimian.",
    "note": "Ôn 而 chỉ đối lập (Bài 10 · điểm 3).",
    "pair": "A……，而B……"
   }
  ]
 },
 {
  "n": 14,
  "zh": "月饼",
  "py": "yuèbing",
  "pos": "Danh từ",
  "vn": "bánh Trung thu",
  "hv": "nguyệt bính",
  "em": "🥮",
  "lesson": 2,
  "explain": [
   "Bánh tròn ăn vào Tết Trung thu, tượng trưng cho trăng tròn và sự sum họp."
  ],
  "usage": "吃月饼 · 一块月饼 · 送月饼 · 买月饼.",
  "collo": [
   "吃月饼",
   "一块月饼",
   "送月饼",
   "做月饼"
  ],
  "colloFull": [
   {
    "zh": "吃月饼",
    "py": "Chī yuèbing",
    "vn": "ăn bánh Trung thu"
   },
   {
    "zh": "一块月饼",
    "py": "Yí kuài yuèbing",
    "vn": "một cái bánh Trung thu"
   },
   {
    "zh": "送月饼",
    "py": "Sòng yuèbing",
    "vn": "tặng bánh Trung thu"
   },
   {
    "zh": "做月饼",
    "py": "Zuò yuèbing",
    "vn": "làm bánh Trung thu"
   }
  ],
  "patterns": [
   {
    "s": "一块 / 一盒 + 月饼",
    "m": "Một cái / một hộp bánh Trung thu"
   }
  ],
  "ex_zh": "来，大家快吃月饼，这儿还有葡萄、西瓜。",
  "ex_py": "Lái, dàjiā kuài chī yuèbing, zhèr hái yǒu pútao, xīguā.",
  "ex_vn": "Nào, mọi người ăn bánh Trung thu đi, ở đây còn có nho, dưa hấu nữa.",
  "exList": [
   {
    "zh": "来，大家快吃月饼，这儿还有葡萄、西瓜。",
    "py": "Lái, dàjiā kuài chī yuèbing, zhèr hái yǒu pútao, xīguā.",
    "vn": "Nào, mọi người ăn bánh Trung thu đi, ở đây còn có nho, dưa hấu nữa."
   },
   {
    "zh": "中秋节的时候，中国人常常给亲戚朋友送月饼。",
    "py": "Zhōngqiūjié de shíhou, Zhōngguórén chángcháng gěi qīnqi péngyou sòng yuèbing.",
    "vn": "Dịp Trung thu, người Trung Quốc thường tặng bánh Trung thu cho họ hàng, bạn bè."
   }
  ],
  "hanzi": [
   {
    "c": "月",
    "p": "yuè",
    "type": "独体字 · Chữ đơn (tượng hình)",
    "st": 4,
    "ord": "ノ→冂→二",
    "rad": "月 (nguyệt)",
    "mean": "tháng, mặt trăng",
    "tip": "Hình vẽ mặt trăng khuyết → NGUYỆT (mặt trăng), mở rộng nghĩa thành THÁNG (chu kỳ mặt trăng).",
    "cf": "肉 (ròu – \"thịt\", dễ nhầm bộ 月 dạng nhục)",
    "w": "九月 / 月亮"
   },
   {
    "c": "饼",
    "p": "bǐng",
    "type": "左右结构 · Trái-phải (giản thể)",
    "st": 9,
    "ord": "饣 (thực) trái → 并 (tịnh) phải",
    "rad": "饣 (thực – ăn)",
    "mean": "bánh",
    "tip": "Bộ ăn 饣 + 并(biểu âm) → loại thực phẩm dạng BÁNH, kết hợp 干(khô) thành 饼干 = BÁNH QUY (bánh khô).",
    "cf": "并 (bìng – \"cùng\", không có bộ 饣\")",
    "w": "饼干 / 大饼 / 月饼"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Bánh Trung thu ngon thì ngon thật, có điều hơi ngọt.",
    "answer": "月饼好吃是好吃，就是有点儿甜。",
    "answerPy": "Yuèbing hǎochī shì hǎochī, jiùshì yǒudiǎnr tián.",
    "note": "Ôn ……×是×，就是…… (Bài 3 · điểm 1).",
    "pair": "A是A，就是……"
   },
   {
    "promptLang": "vi",
    "prompt": "Bánh Trung thu năm nay cái nào cũng ngon hơn cái nào.",
    "answer": "今年的月饼一个比一个好吃。",
    "answerPy": "Jīnnián de yuèbing yí gè bǐ yí gè hǎochī.",
    "note": "一个比一个 + Adj (Bài 13 · điểm 2).",
    "pair": "一个比一个 + Adj"
   }
  ]
 },
 {
  "n": 15,
  "zh": "葡萄",
  "py": "pútao",
  "pos": "Danh từ",
  "vn": "quả nho",
  "hv": "bồ đào",
  "em": "🍇",
  "lesson": 2,
  "explain": [
   "Quả nho. Chữ thứ hai đọc thanh nhẹ: pútao."
  ],
  "usage": "一串葡萄 · 吃葡萄 · 葡萄酒 (rượu vang).",
  "collo": [
   "一串葡萄",
   "吃葡萄",
   "葡萄酒",
   "新鲜的葡萄"
  ],
  "colloFull": [
   {
    "zh": "一串葡萄",
    "py": "Yí chuàn pútao",
    "vn": "một chùm nho"
   },
   {
    "zh": "吃葡萄",
    "py": "Chī pútao",
    "vn": "ăn nho"
   },
   {
    "zh": "葡萄酒",
    "py": "Pútaojiǔ",
    "vn": "rượu vang"
   },
   {
    "zh": "新鲜的葡萄",
    "py": "Xīnxiān de pútao",
    "vn": "nho tươi"
   }
  ],
  "patterns": [
   {
    "s": "一串 + 葡萄",
    "m": "Lượng từ 串 (chùm)"
   },
   {
    "s": "葡萄 + 酒",
    "m": "Rượu nho = rượu vang"
   }
  ],
  "ex_zh": "来，大家快吃月饼，这儿还有葡萄、西瓜。",
  "ex_py": "Lái, dàjiā kuài chī yuèbing, zhèr hái yǒu pútao, xīguā.",
  "ex_vn": "Nào, mọi người ăn bánh Trung thu đi, ở đây còn có nho, dưa hấu nữa.",
  "exList": [
   {
    "zh": "来，大家快吃月饼，这儿还有葡萄、西瓜。",
    "py": "Lái, dàjiā kuài chī yuèbing, zhèr hái yǒu pútao, xīguā.",
    "vn": "Nào, mọi người ăn bánh Trung thu đi, ở đây còn có nho, dưa hấu nữa."
   },
   {
    "zh": "这些葡萄又大又甜，你尝尝。",
    "py": "Zhèxiē pútao yòu dà yòu tián, nǐ chángchang.",
    "vn": "Chỗ nho này vừa to vừa ngọt, bạn nếm thử xem."
   }
  ],
  "hanzi": [
   {
    "c": "葡",
    "p": "pú",
    "type": "形声字 · Chữ hình thanh",
    "st": 12,
    "ord": "艹 → 勹 → 甫",
    "rad": "艹 (thảo – cỏ)",
    "mean": "(葡萄) quả nho",
    "tip": "Cỏ cây (艹) + 匍 (pú, gợi âm, “bò”): cây leo bò trên giàn → nho; hầu như chỉ dùng trong 葡萄 và 葡萄牙 (Bồ Đào Nha).",
    "cf": "萄 táo — dưới 勹 là 缶; 浦 pǔ (bến sông) — bên trái là 氵",
    "w": "葡萄 / 葡萄酒 / 葡萄牙"
   },
   {
    "c": "萄",
    "p": "táo",
    "type": "上下结构 · Trên-dưới",
    "st": 11,
    "ord": "艹 (thảo) trên → 匋 dưới",
    "rad": "艹 (thảo – cỏ)",
    "mean": "(dùng trong từ 葡萄)",
    "tip": "Bộ cỏ 艹 (thực vật) + 匋(biểu âm) → chỉ loại CÂY LEO có quả; 葡萄 là từ láy đôi âm tiết, không tách nghĩa riêng từng chữ.",
    "cf": "萄 chỉ xuất hiện trong từ 葡萄, không dùng độc lập",
    "w": "葡萄 / 葡萄酒 / 葡萄干"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Chỗ nho này ngọt hơn nho tôi mua hôm qua nhiều.",
    "answer": "这些葡萄比我昨天买的甜多了。",
    "answerPy": "Zhèxiē pútao bǐ wǒ zuótiān mǎi de tián duō le.",
    "note": "Câu 比 + Adj + 多了 (HSK 3).",
    "pair": "A比B + Adj + 多了"
   },
   {
    "promptLang": "vi",
    "prompt": "Nho ở đây không những rẻ mà còn rất tươi.",
    "answer": "这里的葡萄不仅便宜，而且很新鲜。",
    "answerPy": "Zhèli de pútao bùjǐn piányi, érqiě hěn xīnxiān.",
    "note": "Ôn 不仅……而且…… (Bài 3 · điểm 2).",
    "pair": "不仅……而且……"
   }
  ]
 },
 {
  "n": 16,
  "zh": "香",
  "py": "xiāng",
  "pos": "Tính từ",
  "vn": "thơm; (ăn) ngon, (ngủ) say",
  "hv": "hương",
  "em": "🌼",
  "lesson": 2,
  "explain": [
   "Có mùi thơm (hoa, trà, đồ ăn). Mở rộng: 吃得很香 = ăn rất ngon miệng; 睡得很香 = ngủ say, ngủ ngon."
  ],
  "usage": "真香 · 闻着真香 · 闻起来很香 · 吃得香.",
  "collo": [
   "真香",
   "闻着很香",
   "香味",
   "吃得很香"
  ],
  "colloFull": [
   {
    "zh": "真香",
    "py": "Zhēn xiāng",
    "vn": "thơm thật"
   },
   {
    "zh": "闻着很香",
    "py": "Wén zhe hěn xiāng",
    "vn": "ngửi thấy thơm"
   },
   {
    "zh": "香味",
    "py": "Xiāngwèi",
    "vn": "mùi thơm"
   },
   {
    "zh": "吃得很香",
    "py": "Chī de hěn xiāng",
    "vn": "ăn ngon lành"
   }
  ],
  "patterns": [
   {
    "s": "闻着 / 闻起来 + 真香",
    "m": "Ngửi thấy thơm thật (V着 / V起来 + Adj: đánh giá)"
   },
   {
    "s": "吃得香 / 睡得香",
    "m": "Ăn ngon miệng / ngủ say"
   }
  ],
  "ex_zh": "好的。这茶闻着真香！",
  "ex_py": "Hǎo de. Zhè chá wén zhe zhēn xiāng!",
  "ex_vn": "Vâng ạ. Trà này ngửi thơm thật!",
  "exList": [
   {
    "zh": "好的。这茶闻着真香！",
    "py": "Hǎo de. Zhè chá wén zhe zhēn xiāng!",
    "vn": "Vâng ạ. Trà này ngửi thơm thật!"
   },
   {
    "zh": "妈妈做的饭特别香，我每次都吃两碗。",
    "py": "Māma zuò de fàn tèbié xiāng, wǒ měi cì dōu chī liǎng wǎn.",
    "vn": "Cơm mẹ nấu thơm ngon lắm, lần nào tôi cũng ăn hai bát."
   }
  ],
  "hanzi": [
   {
    "c": "香",
    "p": "xiāng",
    "type": "上下结构 · Trên-dưới",
    "st": 9,
    "ord": "禾 trên → 日 dưới",
    "rad": "香 (hương)",
    "mean": "thơm",
    "tip": "Lúa 禾 + 日 → hương lúa chín → THƠM, HƯƠNG. 香山 (Bài 17), 香蕉, 香港.",
    "cf": "季 (jì – mùa)",
    "w": "香 / 香山 / 香蕉 / 香港"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Cốc cà phê này ngửi thơm thật, cậu cũng nếm thử đi.",
    "answer": "这杯咖啡闻起来真香，你也尝尝。",
    "answerPy": "Zhè bēi kāfēi wén qǐlai zhēn xiāng, nǐ yě chángchang.",
    "note": "V起来 + Adj (đánh giá) + động từ lặp 尝尝.",
    "pair": "闻起来 + Adj"
   },
   {
    "promptLang": "vi",
    "prompt": "Bánh Trung thu vừa làm xong thơm lắm, ai cũng muốn ăn.",
    "answer": "刚做好的月饼特别香，谁都想吃。",
    "answerPy": "Gāng zuòhǎo de yuèbing tèbié xiāng, shuí dōu xiǎng chī.",
    "note": "Đại từ nghi vấn 谁都 = ai cũng (HSK 3).",
    "pair": "谁都……"
   }
  ]
 },
 {
  "n": 17,
  "zh": "街道",
  "py": "jiēdào",
  "pos": "Danh từ",
  "vn": "đường phố, phố",
  "hv": "nhai đạo",
  "em": "🏙️",
  "lesson": 2,
  "explain": [
   "Đường phố trong thành phố (có nhà cửa, cửa hàng hai bên)."
  ],
  "usage": "街道两边 · 干净的街道 · 热闹的街道.",
  "collo": [
   "街道两边",
   "干净的街道",
   "热闹的街道",
   "走在街道上"
  ],
  "colloFull": [
   {
    "zh": "街道两边",
    "py": "Jiēdào liǎngbiān",
    "vn": "hai bên đường phố"
   },
   {
    "zh": "干净的街道",
    "py": "Gānjìng de jiēdào",
    "vn": "đường phố sạch sẽ"
   },
   {
    "zh": "热闹的街道",
    "py": "Rènao de jiēdào",
    "vn": "đường phố náo nhiệt"
   },
   {
    "zh": "走在街道上",
    "py": "Zǒu zài jiēdào shàng",
    "vn": "đi trên phố"
   }
  ],
  "patterns": [
   {
    "s": "街道 + 两边",
    "m": "Hai bên đường phố"
   },
   {
    "s": "街道 ≈ 马路",
    "m": "马路 là đường xe chạy; 街道 là phố xá nói chung"
   }
  ],
  "ex_zh": "我在加拿大时和中国朋友一起过过中秋节。我记得那天，外面的街道、剧院有很多演出活动。",
  "ex_py": "Wǒ zài Jiānádà shí hé Zhōngguó péngyou yìqǐ guòguo Zhōngqiūjié. Wǒ jìde nàtiān, wàimian de jiēdào, jùyuàn yǒu hěn duō yǎnchū huódòng.",
  "ex_vn": "Hồi ở Canada mình từng đón Trung thu cùng bạn bè người Trung Quốc. Mình nhớ hôm đó, ngoài đường phố, trong nhà hát có rất nhiều hoạt động biểu diễn.",
  "exList": [
   {
    "zh": "我在加拿大时和中国朋友一起过过中秋节。我记得那天，外面的街道、剧院有很多演出活动。",
    "py": "Wǒ zài Jiānádà shí hé Zhōngguó péngyou yìqǐ guòguo Zhōngqiūjié. Wǒ jìde nàtiān, wàimian de jiēdào, jùyuàn yǒu hěn duō yǎnchū huódòng.",
    "vn": "Hồi ở Canada mình từng đón Trung thu cùng bạn bè người Trung Quốc. Mình nhớ hôm đó, ngoài đường phố, trong nhà hát có rất nhiều hoạt động biểu diễn."
   },
   {
    "zh": "春节前，街道两边都挂上了红灯笼。",
    "py": "Chūnjié qián, jiēdào liǎngbiān dōu guàshàng le hóng dēnglong.",
    "vn": "Trước Tết, hai bên đường phố đều treo đèn lồng đỏ."
   }
  ],
  "hanzi": [
   {
    "c": "街",
    "p": "jiē",
    "type": "形声字 · Chữ hình thanh",
    "st": 12,
    "ord": "彳 → 圭 → 亍",
    "rad": "行 (hành – đi)",
    "mean": "phố, đường phố",
    "tip": "Chữ 行 (ngã tư đường) bị tách đôi thành 彳 và 亍, kẹp 圭 (guī, chỉ âm) ở giữa: con đường người qua lại → phố.",
    "cf": "行 xíng (HSK3 Bài 6) — 街 là 行 kẹp 圭 vào giữa",
    "w": "街 / 街上 / 一条街"
   },
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
    "prompt": "Đường phố của thành phố này năm sau sạch hơn năm trước.",
    "answer": "这座城市的街道一年比一年干净。",
    "answerPy": "Zhè zuò chéngshì de jiēdào yì nián bǐ yì nián gānjìng.",
    "note": "一年比一年 + Adj (Bài 13 · điểm 2).",
    "pair": "一年比一年 + Adj"
   },
   {
    "promptLang": "vi",
    "prompt": "Cùng với sự phát triển của thành phố, đường phố ở đây ngày càng rộng.",
    "answer": "随着城市的发展，这里的街道越来越宽。",
    "answerPy": "Suízhe chéngshì de fāzhǎn, zhèli de jiēdào yuèláiyuè kuān.",
    "note": "Ôn 随着 (Bài 1 · điểm 3).",
    "pair": "随着……，越来越……"
   }
  ]
 },
 {
  "n": 18,
  "zh": "剧院",
  "py": "jùyuàn",
  "pos": "Danh từ",
  "vn": "nhà hát",
  "hv": "kịch viện",
  "em": "🎭",
  "lesson": 2,
  "explain": [
   "Nơi biểu diễn kịch, ca nhạc, múa…; 大剧院 = nhà hát lớn."
  ],
  "usage": "去剧院 · 剧院门口 · 大剧院 · 在剧院看演出.",
  "collo": [
   "去剧院",
   "剧院门口",
   "大剧院",
   "在剧院看演出"
  ],
  "colloFull": [
   {
    "zh": "去剧院",
    "py": "Qù jùyuàn",
    "vn": "đến nhà hát"
   },
   {
    "zh": "剧院门口",
    "py": "Jùyuàn ménkǒu",
    "vn": "cổng nhà hát"
   },
   {
    "zh": "大剧院",
    "py": "Dà jùyuàn",
    "vn": "nhà hát lớn"
   },
   {
    "zh": "在剧院看演出",
    "py": "Zài jùyuàn kàn yǎnchū",
    "vn": "xem biểu diễn ở nhà hát"
   }
  ],
  "patterns": [
   {
    "s": "在剧院 + 看演出 / 看京剧",
    "m": "Xem biểu diễn ở nhà hát"
   }
  ],
  "ex_zh": "我在加拿大时和中国朋友一起过过中秋节。我记得那天，外面的街道、剧院有很多演出活动。",
  "ex_py": "Wǒ zài Jiānádà shí hé Zhōngguó péngyou yìqǐ guòguo Zhōngqiūjié. Wǒ jìde nàtiān, wàimian de jiēdào, jùyuàn yǒu hěn duō yǎnchū huódòng.",
  "ex_vn": "Hồi ở Canada mình từng đón Trung thu cùng bạn bè người Trung Quốc. Mình nhớ hôm đó, ngoài đường phố, trong nhà hát có rất nhiều hoạt động biểu diễn.",
  "exList": [
   {
    "zh": "我在加拿大时和中国朋友一起过过中秋节。我记得那天，外面的街道、剧院有很多演出活动。",
    "py": "Wǒ zài Jiānádà shí hé Zhōngguó péngyou yìqǐ guòguo Zhōngqiūjié. Wǒ jìde nàtiān, wàimian de jiēdào, jùyuàn yǒu hěn duō yǎnchū huódòng.",
    "vn": "Hồi ở Canada mình từng đón Trung thu cùng bạn bè người Trung Quốc. Mình nhớ hôm đó, ngoài đường phố, trong nhà hát có rất nhiều hoạt động biểu diễn."
   },
   {
    "zh": "周末我们去剧院看了一场京剧。",
    "py": "Zhōumò wǒmen qù jùyuàn kàn le yì chǎng jīngjù.",
    "vn": "Cuối tuần chúng tôi đến nhà hát xem một vở Kinh kịch."
   }
  ],
  "hanzi": [
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
    "prompt": "Chúng ta khoảng bảy giờ gặp nhau ở cổng nhà hát nhé.",
    "answer": "咱们七点左右在剧院门口见吧。",
    "answerPy": "Zánmen qī diǎn zuǒyòu zài jùyuàn ménkǒu jiàn ba.",
    "note": "thời gian + 左右 (Bài 13 · điểm 3).",
    "pair": "……左右"
   },
   {
    "promptLang": "vi",
    "prompt": "Đây là lần đầu tiên tôi đến nhà hát xem biểu diễn.",
    "answer": "这是我第一次来剧院看演出。",
    "answerPy": "Zhè shì wǒ dì yí cì lái jùyuàn kàn yǎnchū.",
    "note": "第一次 + V (lần đầu làm gì).",
    "pair": "第一次 + V"
   }
  ]
 },
 {
  "n": 19,
  "zh": "演出",
  "py": "yǎnchū",
  "pos": "Động từ",
  "vn": "biểu diễn; buổi biểu diễn",
  "hv": "diễn xuất",
  "em": "🎤",
  "lesson": 2,
  "explain": [
   "Biểu diễn (ca, múa, kịch…) trước khán giả; cũng dùng như danh từ: 一场演出. Bẫy Hán Việt: 演出 không phải “diễn xuất” (cách diễn của diễn viên) mà là việc / buổi biểu diễn."
  ],
  "usage": "演出活动 · 看演出 · 一场演出 · 在剧院演出.",
  "collo": [
   "看演出",
   "一场演出",
   "演出活动",
   "参加演出"
  ],
  "colloFull": [
   {
    "zh": "看演出",
    "py": "Kàn yǎnchū",
    "vn": "xem biểu diễn"
   },
   {
    "zh": "一场演出",
    "py": "Yì chǎng yǎnchū",
    "vn": "một buổi biểu diễn"
   },
   {
    "zh": "演出活动",
    "py": "Yǎnchū huódòng",
    "vn": "hoạt động biểu diễn"
   },
   {
    "zh": "参加演出",
    "py": "Cānjiā yǎnchū",
    "vn": "tham gia biểu diễn"
   }
  ],
  "patterns": [
   {
    "s": "一场 + 演出",
    "m": "Lượng từ 场"
   },
   {
    "s": "在 + nơi + 演出",
    "m": "Biểu diễn ở đâu"
   }
  ],
  "ex_zh": "我在加拿大时和中国朋友一起过过中秋节。我记得那天，外面的街道、剧院有很多演出活动。",
  "ex_py": "Wǒ zài Jiānádà shí hé Zhōngguó péngyou yìqǐ guòguo Zhōngqiūjié. Wǒ jìde nàtiān, wàimian de jiēdào, jùyuàn yǒu hěn duō yǎnchū huódòng.",
  "ex_vn": "Hồi ở Canada mình từng đón Trung thu cùng bạn bè người Trung Quốc. Mình nhớ hôm đó, ngoài đường phố, trong nhà hát có rất nhiều hoạt động biểu diễn.",
  "exList": [
   {
    "zh": "我在加拿大时和中国朋友一起过过中秋节。我记得那天，外面的街道、剧院有很多演出活动。",
    "py": "Wǒ zài Jiānádà shí hé Zhōngguó péngyou yìqǐ guòguo Zhōngqiūjié. Wǒ jìde nàtiān, wàimian de jiēdào, jùyuàn yǒu hěn duō yǎnchū huódòng.",
    "vn": "Hồi ở Canada mình từng đón Trung thu cùng bạn bè người Trung Quốc. Mình nhớ hôm đó, ngoài đường phố, trong nhà hát có rất nhiều hoạt động biểu diễn."
   },
   {
    "zh": "这个乐队下个月要来越南演出。",
    "py": "Zhège yuèduì xià gè yuè yào lái Yuènán yǎnchū.",
    "vn": "Ban nhạc này tháng sau sẽ sang Việt Nam biểu diễn."
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
    "prompt": "Vé buổi biểu diễn tối nay bán hết rồi, tôi tìm thế nào cũng không mua được.",
    "answer": "今天晚上的演出票已经卖完了，我怎么都买不到。",
    "answerPy": "Jīntiān wǎnshang de yǎnchū piào yǐjīng màiwán le, wǒ zěnme dōu mǎi bu dào.",
    "note": "怎么都 + V不到 (Bài 13 · điểm 1).",
    "pair": "怎么都 + V不到"
   },
   {
    "promptLang": "vi",
    "prompt": "Là đại diện của lớp, cô ấy sẽ tham gia buổi biểu diễn Trung thu.",
    "answer": "作为班里的代表，她要参加中秋节的演出。",
    "answerPy": "Zuòwéi bān lǐ de dàibiǎo, tā yào cānjiā Zhōngqiūjié de yǎnchū.",
    "note": "作为 + thân phận (Bài 13 · điểm 4).",
    "pair": "作为……，……"
   }
  ]
 },
 {
  "n": 20,
  "zh": "赶",
  "py": "gǎn",
  "pos": "Động từ",
  "vn": "gặp đúng (dịp), trùng (vào)",
  "hv": "cản",
  "em": "📅",
  "lesson": 2,
  "explain": [
   "Ở bài này 赶 = gặp đúng dịp / thời điểm: 赶在了一块儿 = trùng vào cùng một ngày; 正赶上 = vừa đúng gặp lúc. Nghĩa đã gặp: vội, kịp (赶时间, 赶上车)."
  ],
  "usage": "赶在一块儿 · (正)赶上 + 节日 / 下雨 · 赶时间 (nghĩa khác: vội).",
  "collo": [
   "赶在一块儿",
   "正赶上",
   "赶上节假日",
   "赶时间"
  ],
  "colloFull": [
   {
    "zh": "赶在一块儿",
    "py": "Gǎn zài yíkuàir",
    "vn": "trùng vào một lúc"
   },
   {
    "zh": "正赶上",
    "py": "Zhèng gǎnshang",
    "vn": "vừa đúng gặp lúc"
   },
   {
    "zh": "赶上节假日",
    "py": "Gǎnshang jiéjiàrì",
    "vn": "gặp đúng dịp lễ"
   },
   {
    "zh": "赶时间",
    "py": "Gǎn shíjiān",
    "vn": "vội (nghĩa khác)"
   }
  ],
  "patterns": [
   {
    "s": "A 和 B + 赶在了一块儿",
    "m": "A và B trùng vào cùng một lúc (一块儿 = 一起, khẩu ngữ)"
   },
   {
    "s": "(正) 赶上 + sự việc",
    "m": "Đúng lúc gặp …"
   }
  ],
  "ex_zh": "中秋节和生日赶在了一块儿，真巧、真好！",
  "ex_py": "Zhōngqiūjié hé shēngrì gǎn zài le yíkuàir, zhēn qiǎo, zhēn hǎo!",
  "ex_vn": "Trung thu với sinh nhật trùng vào cùng một ngày, khéo thật, hay thật!",
  "exList": [
   {
    "zh": "中秋节和生日赶在了一块儿，真巧、真好！",
    "py": "Zhōngqiūjié hé shēngrì gǎn zài le yíkuàir, zhēn qiǎo, zhēn hǎo!",
    "vn": "Trung thu với sinh nhật trùng vào cùng một ngày, khéo thật, hay thật!"
   },
   {
    "zh": "我们去北京那天，正赶上下大雨。",
    "py": "Wǒmen qù Běijīng nàtiān, zhèng gǎnshang xià dàyǔ.",
    "vn": "Hôm chúng tôi đến Bắc Kinh, đúng lúc gặp mưa to."
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
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Lần này tôi về nhà vừa đúng dịp Tết Trung thu.",
    "answer": "这次我回家，正赶上中秋节。",
    "answerPy": "Zhè cì wǒ huíjiā, zhèng gǎnshang Zhōngqiūjié.",
    "note": "正赶上 + dịp lễ.",
    "pair": "正赶上……"
   },
   {
    "promptLang": "vi",
    "prompt": "Sinh nhật tôi trùng với Quốc khánh, năm nào cũng không phải đi học.",
    "answer": "我的生日和国庆节赶在了一块儿，每年都不用上课。",
    "answerPy": "Wǒ de shēngrì hé guóqìngjié gǎn zài le yíkuàir, měinián dōu búyòng shàngkè.",
    "note": "A和B赶在了一块儿; 不用 = không cần (HSK 2).",
    "pair": "A和B赶在了一块儿"
   }
  ]
 },
 {
  "n": 21,
  "zh": "巧",
  "py": "qiǎo",
  "pos": "Tính từ",
  "vn": "khéo, trùng hợp, đúng lúc",
  "hv": "xảo",
  "em": "🍀",
  "lesson": 2,
  "explain": [
   "Trùng hợp một cách bất ngờ, đúng dịp: 真巧！= Trùng hợp thật! 不巧 = không may, không đúng lúc. Nghĩa khác: khéo tay (手很巧)."
  ],
  "usage": "真巧 · 太巧了 · 不巧 · 手巧.",
  "collo": [
   "真巧",
   "太巧了",
   "不巧",
   "手巧"
  ],
  "colloFull": [
   {
    "zh": "真巧",
    "py": "Zhēn qiǎo",
    "vn": "trùng hợp thật"
   },
   {
    "zh": "太巧了",
    "py": "Tài qiǎo le",
    "vn": "khéo quá"
   },
   {
    "zh": "不巧",
    "py": "Bù qiǎo",
    "vn": "không may"
   },
   {
    "zh": "手巧",
    "py": "Shǒuqiǎo",
    "vn": "khéo tay"
   }
  ],
  "patterns": [
   {
    "s": "真 / 太 + 巧 + (了)",
    "m": "Trùng hợp quá"
   },
   {
    "s": "不巧，……",
    "m": "Không may là …"
   }
  ],
  "ex_zh": "中秋节和生日赶在了一块儿，真巧、真好！",
  "ex_py": "Zhōngqiūjié hé shēngrì gǎn zài le yíkuàir, zhēn qiǎo, zhēn hǎo!",
  "ex_vn": "Trung thu với sinh nhật trùng vào cùng một ngày, khéo thật, hay thật!",
  "exList": [
   {
    "zh": "中秋节和生日赶在了一块儿，真巧、真好！",
    "py": "Zhōngqiūjié hé shēngrì gǎn zài le yíkuàir, zhēn qiǎo, zhēn hǎo!",
    "vn": "Trung thu với sinh nhật trùng vào cùng một ngày, khéo thật, hay thật!"
   },
   {
    "zh": "真巧，你也在这儿买东西！",
    "py": "Zhēn qiǎo, nǐ yě zài zhèr mǎi dōngxi!",
    "vn": "Trùng hợp thật, cậu cũng mua đồ ở đây à!"
   }
  ],
  "hanzi": [
   {
    "c": "巧",
    "p": "qiǎo",
    "type": "左右结构 · Trái-phải",
    "st": 5,
    "ord": "工 (công) trái → 丂 phải",
    "rad": "工 (công – việc)",
    "mean": "khéo léo",
    "tip": "巧克力 là từ phiên âm mượn từ tiếng Anh \"chocolate\" — ba chữ 巧/克/力 chỉ dùng để ghi âm, không mang nghĩa gốc riêng.",
    "cf": "15万 dễ nhầm 15元 khi đọc nhanh — không liên quan đến từ này",
    "w": "巧克力 / 碰巧 / 技巧"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Trùng hợp thật, chúng ta đi cùng một chuyến tàu cao tốc!",
    "answer": "真巧，咱们坐的是同一趟高铁！",
    "answerPy": "Zhēn qiǎo, zánmen zuò de shì tóngyī tàng gāotiě!",
    "note": "Lượng từ 趟 (chuyến) + câu 是 nhấn mạnh.",
    "pair": "真巧，……"
   },
   {
    "promptLang": "vi",
    "prompt": "Hôm nay tôi đến tìm cậu, không may cậu lại không ở nhà.",
    "answer": "今天我去找你，不巧你不在家。",
    "answerPy": "Jīntiān wǒ qù zhǎo nǐ, bù qiǎo nǐ bú zài jiā.",
    "note": "不巧 = không may, không đúng lúc.",
    "pair": "不巧，……"
   }
  ]
 },
 {
  "n": 22,
  "zh": "中秋节",
  "py": "Zhōngqiūjié",
  "pos": "Danh từ riêng",
  "vn": "Tết Trung thu (rằm tháng Tám âm lịch)",
  "hv": "Trung thu tiết",
  "em": "🌕",
  "lesson": 2,
  "explain": [
   "Rằm tháng Tám âm lịch, trăng tròn nhất năm. Ở Trung Quốc đây là ngày gia đình sum họp: ngắm trăng, ăn bánh Trung thu (ở Việt Nam còn là Tết thiếu nhi)."
  ],
  "usage": "过中秋节 · 中秋节快乐 · 中秋假期.",
  "collo": [
   "过中秋节",
   "中秋节快乐",
   "中秋假期",
   "中秋节晚上"
  ],
  "colloFull": [
   {
    "zh": "过中秋节",
    "py": "Guò Zhōngqiūjié",
    "vn": "đón Tết Trung thu"
   },
   {
    "zh": "中秋节快乐",
    "py": "Zhōngqiūjié kuàilè",
    "vn": "Trung thu vui vẻ"
   },
   {
    "zh": "中秋假期",
    "py": "Zhōngqiū jiàqī",
    "vn": "kỳ nghỉ Trung thu"
   },
   {
    "zh": "中秋节晚上",
    "py": "Zhōngqiūjié wǎnshang",
    "vn": "tối Trung thu"
   }
  ],
  "patterns": [
   {
    "s": "过 + 节日",
    "m": "Đón / ăn tết: 过中秋节 / 过春节"
   }
  ],
  "ex_zh": "我还是第一次在中国过中秋节呢。",
  "ex_py": "Wǒ háishi dì yí cì zài Zhōngguó guò Zhōngqiūjié ne.",
  "ex_vn": "Đây vẫn là lần đầu tiên mình đón Tết Trung thu ở Trung Quốc đấy.",
  "exList": [
   {
    "zh": "我还是第一次在中国过中秋节呢。",
    "py": "Wǒ háishi dì yí cì zài Zhōngguó guò Zhōngqiūjié ne.",
    "vn": "Đây vẫn là lần đầu tiên mình đón Tết Trung thu ở Trung Quốc đấy."
   },
   {
    "zh": "中秋节晚上，一家人一边吃月饼，一边看月亮。",
    "py": "Zhōngqiūjié wǎnshang, yì jiārén yìbiān chī yuèbing, yìbiān kàn yuèliang.",
    "vn": "Tối Trung thu, cả nhà vừa ăn bánh Trung thu vừa ngắm trăng."
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
    "c": "秋",
    "p": "qiū",
    "type": "会意字 · Chữ hội ý",
    "st": 9,
    "ord": "禾 → 火",
    "rad": "禾 (hoà – cây lúa)",
    "mean": "mùa thu",
    "tip": "禾 (lúa) + 火 (lửa): lúa chín vàng như lửa, mùa gặt → mùa thu.",
    "cf": "种 zhǒng (HSK3 Bài 8) — cũng có bộ 禾",
    "w": "秋天 / 今年秋天"
   },
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
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Ở Việt Nam, Tết Trung thu chủ yếu là ngày lễ của trẻ em.",
    "answer": "在越南，中秋节主要是孩子们的节日。",
    "answerPy": "Zài Yuènán, Zhōngqiūjié zhǔyào shì háizimen de jiérì.",
    "note": "Giới thiệu văn hoá nước mình bằng tiếng Trung.",
    "pair": "在……，……主要是……"
   },
   {
    "promptLang": "vi",
    "prompt": "Trung thu năm nay tôi không về nhà, không phải không muốn về mà là phải làm việc.",
    "answer": "今年中秋节我没回家，不是不想回，而是要工作。",
    "answerPy": "Jīnnián Zhōngqiūjié wǒ méi huíjiā, bú shì bù xiǎng huí, érshì yào gōngzuò.",
    "note": "Ôn 不是……而是…… (Bài 11 · điểm 3).",
    "pair": "不是……而是……"
   }
  ]
 },
 {
  "n": 23,
  "zh": "加拿大",
  "py": "Jiānádà",
  "pos": "Danh từ riêng",
  "vn": "Ca-na-đa",
  "hv": "Gia Nã Đại",
  "em": "🇨🇦",
  "lesson": 2,
  "explain": [
   "Đất nước ở Bắc Mỹ, mùa đông dài và rất lạnh; quê của An Ni."
  ],
  "usage": "去加拿大 · 加拿大人 · 在加拿大留学.",
  "collo": [
   "去加拿大",
   "加拿大人",
   "在加拿大留学",
   "加拿大的冬天"
  ],
  "colloFull": [
   {
    "zh": "去加拿大",
    "py": "Qù Jiānádà",
    "vn": "đi Canada"
   },
   {
    "zh": "加拿大人",
    "py": "Jiānádà rén",
    "vn": "người Canada"
   },
   {
    "zh": "在加拿大留学",
    "py": "Zài Jiānádà liúxué",
    "vn": "du học ở Canada"
   },
   {
    "zh": "加拿大的冬天",
    "py": "Jiānádà de dōngtiān",
    "vn": "mùa đông Canada"
   }
  ],
  "patterns": [
   {
    "s": "在 + nơi + 时",
    "m": "Khi ở …: 在加拿大时"
   }
  ],
  "ex_zh": "我在加拿大时和中国朋友一起过过中秋节。",
  "ex_py": "Wǒ zài Jiānádà shí hé Zhōngguó péngyou yìqǐ guòguo Zhōngqiūjié.",
  "ex_vn": "Hồi ở Canada mình từng đón Trung thu cùng bạn bè người Trung Quốc.",
  "exList": [
   {
    "zh": "我在加拿大时和中国朋友一起过过中秋节。",
    "py": "Wǒ zài Jiānádà shí hé Zhōngguó péngyou yìqǐ guòguo Zhōngqiūjié.",
    "vn": "Hồi ở Canada mình từng đón Trung thu cùng bạn bè người Trung Quốc."
   },
   {
    "zh": "加拿大的冬天很长，有时候气温会降到零下三十度。",
    "py": "Jiānádà de dōngtiān hěn cháng, yǒushíhou qìwēn huì jiàng dào língxià sānshí dù.",
    "vn": "Mùa đông Canada rất dài, có lúc nhiệt độ xuống tới âm ba mươi độ."
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
    "c": "拿",
    "p": "ná",
    "type": "上下结构 · Trên-dưới",
    "st": 10,
    "ord": "合 (hợp) trên → 手 (thủ) dưới",
    "rad": "手 (thủ – tay)",
    "mean": "cầm, lấy",
    "tip": "合(hợp lại) bàn 手(tay) → khép bàn tay lại để CẦM/LẤY một vật gì đó.",
    "cf": "合 (hé – \"hợp lại\")",
    "w": "拿书 / 拿钱 / 拿伞"
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
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "An Ni là người Canada, cô ấy đã sống ở Trung Quốc hai năm rồi.",
    "answer": "安妮是加拿大人，她已在中国生活两年了。",
    "answerPy": "Ānní shì Jiānádà rén, tā yǐ zài Zhōngguó shēnghuó liǎng nián le.",
    "note": "已 (từ mới bài khoá 4) = 已经, văn viết.",
    "pair": "已 + V"
   },
   {
    "promptLang": "vi",
    "prompt": "Mùa đông Canada lạnh hơn Bắc Kinh nhiều.",
    "answer": "加拿大的冬天比北京冷多了。",
    "answerPy": "Jiānádà de dōngtiān bǐ Běijīng lěngduō le.",
    "note": "Câu 比 + Adj + 多了 (HSK 3).",
    "pair": "A比B + Adj + 多了"
   }
  ]
 },
 {
  "n": 24,
  "zh": "之中",
  "py": "zhīzhōng",
  "pos": "Danh từ",
  "vn": "trong (số), giữa",
  "hv": "chi trung",
  "em": "👥",
  "lesson": 3,
  "explain": [
   "Văn viết, nghĩa như 中 / 里: trong số, ở giữa. Đặt SAU danh từ: 这些人之中 (trong số những người này), 幸福之中 (trong hạnh phúc)."
  ],
  "usage": "N + 之中 · ……之中的一位 / 一个 · 生活在……之中.",
  "collo": [
   "这些人之中",
   "……之中的一位",
   "生活在幸福之中",
   "三个人之中"
  ],
  "colloFull": [
   {
    "zh": "这些人之中",
    "py": "Zhèxiē rén zhīzhōng",
    "vn": "trong số những người này"
   },
   {
    "zh": "……之中的一位",
    "py": "…… Zhīzhōng de yí wèi",
    "vn": "một trong số …"
   },
   {
    "zh": "生活在幸福之中",
    "py": "Shēnghuó zài xìngfú zhīzhōng",
    "vn": "sống trong hạnh phúc"
   },
   {
    "zh": "三个人之中",
    "py": "Sān gè rén zhīzhōng",
    "vn": "trong ba người"
   }
  ],
  "patterns": [
   {
    "s": "……之中的一 + lượng từ",
    "m": "Một trong số …"
   },
   {
    "s": "生活在 + N + 之中",
    "m": "Sống trong (hạnh phúc / niềm vui …)"
   }
  ],
  "ex_zh": "周力就是这些人之中的一位。",
  "ex_py": "Zhōu Lì jiùshì zhèxiē rén zhīzhōng de yí wèi.",
  "ex_vn": "Chu Lực chính là một trong số những người này.",
  "exList": [
   {
    "zh": "周力就是这些人之中的一位。",
    "py": "Zhōu Lì jiùshì zhèxiē rén zhīzhōng de yí wèi.",
    "vn": "Chu Lực chính là một trong số những người này."
   },
   {
    "zh": "我们班同学之中，他的中文说得最好。",
    "py": "Wǒmen bān tóngxué zhīzhōng, tā de Zhōngwén shuō de zuìhǎo.",
    "vn": "Trong số các bạn lớp mình, cậu ấy nói tiếng Trung giỏi nhất."
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
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Trong số những người bạn này, cậu ấy là người hài hước nhất.",
    "answer": "这些朋友之中，他是最幽默的一个。",
    "answerPy": "Zhèxiē péngyou zhīzhōng, tā shì zuì yōumò de yí gè.",
    "note": "N + 之中 + 最 + Adj.",
    "pair": "……之中，……最……"
   },
   {
    "promptLang": "vi",
    "prompt": "Trong ba bộ phim này, tôi thích nhất bộ thứ hai.",
    "answer": "这三部电影之中，我最喜欢第二部。",
    "answerPy": "Zhè sān bù diànyǐng zhīzhōng, wǒ zuì xǐhuan dì èr bù.",
    "note": "Lượng từ 部 cho phim; 第 + số (thứ tự).",
    "pair": "……之中，我最喜欢……"
   }
  ]
 },
 {
  "n": 25,
  "zh": "铁路",
  "py": "tiělù",
  "pos": "Danh từ",
  "vn": "đường sắt",
  "hv": "thiết lộ",
  "em": "🛤️",
  "lesson": 3,
  "explain": [
   "Đường ray cho tàu hoả chạy; ngành đường sắt. 高铁 = 高速铁路 (đường sắt cao tốc)."
  ],
  "usage": "一条铁路 · 铁路工作人员 · 铁路安全 · 高速铁路.",
  "collo": [
   "一条铁路",
   "铁路工作人员",
   "铁路安全",
   "高速铁路"
  ],
  "colloFull": [
   {
    "zh": "一条铁路",
    "py": "Yì tiáo tiělù",
    "vn": "một tuyến đường sắt"
   },
   {
    "zh": "铁路工作人员",
    "py": "Tiělù gōngzuò rényuán",
    "vn": "nhân viên đường sắt"
   },
   {
    "zh": "铁路安全",
    "py": "Tiělù ānquán",
    "vn": "an toàn đường sắt"
   },
   {
    "zh": "高速铁路",
    "py": "Gāosù tiělù",
    "vn": "đường sắt cao tốc"
   }
  ],
  "patterns": [
   {
    "s": "一条 + 铁路",
    "m": "Lượng từ 条"
   },
   {
    "s": "高速铁路 → 高铁",
    "m": "Đường sắt cao tốc → tàu cao tốc"
   }
  ],
  "ex_zh": "他是一名铁路工作人员，今年中秋假期，要负责铁路安全检查。",
  "ex_py": "Tā shì yì míng tiělù gōngzuò rényuán, jīnnián Zhōngqiū jiàqī, yào fùzé tiělù ānquán jiǎnchá.",
  "ex_vn": "Anh ấy là nhân viên ngành đường sắt, kỳ nghỉ Trung thu năm nay phải phụ trách kiểm tra an toàn đường sắt.",
  "exList": [
   {
    "zh": "他是一名铁路工作人员，今年中秋假期，要负责铁路安全检查。",
    "py": "Tā shì yì míng tiělù gōngzuò rényuán, jīnnián Zhōngqiū jiàqī, yào fùzé tiělù ānquán jiǎnchá.",
    "vn": "Anh ấy là nhân viên ngành đường sắt, kỳ nghỉ Trung thu năm nay phải phụ trách kiểm tra an toàn đường sắt."
   },
   {
    "zh": "这条铁路修好以后，从我家到北京只要两个小时。",
    "py": "Zhè tiáo tiělù xiūhǎo yǐhòu, cóng wǒ jiā dào Běijīng zhǐyào liǎng gè xiǎoshí.",
    "vn": "Tuyến đường sắt này làm xong rồi thì từ nhà tôi đến Bắc Kinh chỉ mất hai tiếng."
   }
  ],
  "hanzi": [
   {
    "c": "铁",
    "p": "tiě",
    "type": "形声字 · Chữ hình thanh",
    "st": 10,
    "ord": "钅 → 失",
    "rad": "钅 (kim – kim loại)",
    "mean": "sắt; đường sắt",
    "tip": "钅 (kim loại) + 失 (chỉ âm): sắt. 高铁 = đường sắt cao tốc → tàu cao tốc; 地铁 (HSK2 Bài 12) = đường sắt dưới đất.",
    "cf": "失 shī — không có bộ 钅",
    "w": "高铁 / 地铁"
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
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Cùng với sự phát triển của đường sắt, đi lại giữa các thành phố ngày càng tiện.",
    "answer": "随着铁路的发展，城市之间的交通越来越方便。",
    "answerPy": "Suízhe tiělù de fāzhǎn, chéngshì zhījiān de jiāotōng yuèláiyuè fāngbiàn.",
    "note": "Ôn 随着 (Bài 1 · điểm 3).",
    "pair": "随着……，越来越……"
   },
   {
    "promptLang": "vi",
    "prompt": "Bố tôi là nhân viên đường sắt, ngày lễ thường không được nghỉ.",
    "answer": "我爸爸是铁路工作人员，节假日常常不能休息。",
    "answerPy": "Wǒ bàba shì tiělù gōngzuò rényuán, jiéjiàrì chángcháng bù néng xiūxi.",
    "note": "节假日 (từ mới bài khoá 1).",
    "pair": "……是……人员"
   }
  ]
 },
 {
  "n": 26,
  "zh": "人员",
  "py": "rényuán",
  "pos": "Danh từ",
  "vn": "nhân viên, người (làm công việc gì)",
  "hv": "nhân viên",
  "em": "🧑‍💼",
  "lesson": 3,
  "explain": [
   "Người đảm nhận một công việc; thường đi SAU danh từ / động từ: 工作人员, 服务人员. Bẫy Hán Việt: 人员 = “nhân viên” nhưng không đứng một mình như tiếng Việt (✗ 他是人员 → 他是工作人员)."
  ],
  "usage": "工作人员 · 服务人员 · 管理人员 · 一名……人员.",
  "collo": [
   "工作人员",
   "服务人员",
   "管理人员",
   "一名……人员"
  ],
  "colloFull": [
   {
    "zh": "工作人员",
    "py": "Gōngzuò rényuán",
    "vn": "nhân viên"
   },
   {
    "zh": "服务人员",
    "py": "Fúwù rényuán",
    "vn": "nhân viên phục vụ"
   },
   {
    "zh": "管理人员",
    "py": "Guǎnlǐ rényuán",
    "vn": "nhân viên quản lý"
   },
   {
    "zh": "一名……人员",
    "py": "Yì míng…… rényuán",
    "vn": "một nhân viên …"
   }
  ],
  "patterns": [
   {
    "s": "N / V + 人员",
    "m": "Người làm việc …: 工作人员"
   },
   {
    "s": "一名 + …… + 人员",
    "m": "Lượng từ 名 (trang trọng)"
   }
  ],
  "ex_zh": "他是一名铁路工作人员，今年中秋假期，要负责铁路安全检查。",
  "ex_py": "Tā shì yì míng tiělù gōngzuò rényuán, jīnnián Zhōngqiū jiàqī, yào fùzé tiělù ānquán jiǎnchá.",
  "ex_vn": "Anh ấy là nhân viên ngành đường sắt, kỳ nghỉ Trung thu năm nay phải phụ trách kiểm tra an toàn đường sắt.",
  "exList": [
   {
    "zh": "他是一名铁路工作人员，今年中秋假期，要负责铁路安全检查。",
    "py": "Tā shì yì míng tiělù gōngzuò rényuán, jīnnián Zhōngqiū jiàqī, yào fùzé tiělù ānquán jiǎnchá.",
    "vn": "Anh ấy là nhân viên ngành đường sắt, kỳ nghỉ Trung thu năm nay phải phụ trách kiểm tra an toàn đường sắt."
   },
   {
    "zh": "有问题可以去问景区的工作人员。",
    "py": "Yǒu wèntí kěyǐ qù wèn jǐngqū de gōngzuò rényuán.",
    "vn": "Có vấn đề gì thì có thể hỏi nhân viên khu du lịch."
   }
  ],
  "hanzi": [
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
    "prompt": "Anh ấy là một nhân viên bảo tàng, ngày lễ lại càng bận.",
    "answer": "他是一名博物馆工作人员，节假日更忙。",
    "answerPy": "Tā shì yì míng bówùguǎn gōngzuò rényuán, jiéjiàrì gèng máng.",
    "note": "一名 + …… + 人员.",
    "pair": "一名……人员"
   },
   {
    "promptLang": "vi",
    "prompt": "Nhân viên khu du lịch nhắc chúng tôi tuyệt đối đừng xuống xe.",
    "answer": "景区的工作人员提醒我们千万别下车。",
    "answerPy": "Jǐngqū de gōngzuò rényuán tíxǐng wǒmen qiānwàn bié xià chē.",
    "note": "提醒 + người + V; 千万别 (từ mới bài khoá 1).",
    "pair": "提醒……千万别……"
   }
  ]
 },
 {
  "n": 27,
  "zh": "反向",
  "py": "fǎnxiàng",
  "pos": "Động từ",
  "vn": "ngược chiều, theo hướng ngược lại",
  "hv": "phản hướng",
  "em": "🔄",
  "lesson": 3,
  "explain": [
   "Đi / làm theo hướng ngược với thông thường. 反向团圆 = thay vì con về quê sum họp với bố mẹ, bố mẹ lại lên thành phố nơi con làm việc để đoàn tụ."
  ],
  "usage": "反向团圆 · 反向旅游 · 反向开车.",
  "collo": [
   "反向团圆",
   "反向旅游",
   "反向开车",
   "反向出行"
  ],
  "colloFull": [
   {
    "zh": "反向团圆",
    "py": "Fǎnxiàng tuányuán",
    "vn": "sum họp ngược"
   },
   {
    "zh": "反向旅游",
    "py": "Fǎnxiàng lǚyóu",
    "vn": "du lịch ngược (đi nơi vắng người)"
   },
   {
    "zh": "反向开车",
    "py": "Fǎnxiàng kāichē",
    "vn": "lái xe ngược chiều"
   },
   {
    "zh": "反向出行",
    "py": "Fǎnxiàng chūxíng",
    "vn": "đi ngược dòng người"
   }
  ],
  "patterns": [
   {
    "s": "反向 + V",
    "m": "Làm theo hướng ngược lại"
   }
  ],
  "ex_zh": "周力的父母知道儿子这次不能回家后，就决定来一次“反向团圆”。",
  "ex_py": "Zhōu Lì de fùmǔ zhīdao érzi zhè cì bù néng huíjiā hòu, jiù juédìng lái yí cì “fǎnxiàng tuányuán”.",
  "ex_vn": "Bố mẹ Chu Lực biết lần này con trai không về được, liền quyết định làm một cuộc “sum họp ngược”.",
  "exList": [
   {
    "zh": "周力的父母知道儿子这次不能回家后，就决定来一次“反向团圆”。",
    "py": "Zhōu Lì de fùmǔ zhīdao érzi zhè cì bù néng huíjiā hòu, jiù juédìng lái yí cì “fǎnxiàng tuányuán”.",
    "vn": "Bố mẹ Chu Lực biết lần này con trai không về được, liền quyết định làm một cuộc “sum họp ngược”."
   },
   {
    "zh": "现在不少年轻人春节不回老家，而是把父母接到自己工作的城市，来一次反向团圆。",
    "py": "Xiànzài bùshǎo niánqīngrén Chūnjié bù huí lǎojiā, érshì bǎ fùmǔ jiēdào zìjǐ gōngzuò de chéngshì, lái yí cì fǎnxiàng tuányuán.",
    "vn": "Bây giờ không ít người trẻ Tết không về quê, mà đón bố mẹ lên thành phố mình làm việc, làm một cuộc sum họp ngược."
   }
  ],
  "hanzi": [
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
   },
   {
    "c": "向",
    "p": "xiàng",
    "type": "独体字 · Chữ đơn",
    "st": 6,
    "ord": "nét liền",
    "rad": "口 (khẩu, biến thể)",
    "mean": "hướng về",
    "tip": "Chữ tượng hình cửa sổ HƯỚNG RA ngoài → nghĩa gốc là HƯỚNG VỀ, kết hợp 方(phương) thành 方向 = PHƯƠNG HƯỚNG.",
    "cf": "尚 (shàng – \"còn, vẫn\", tự dạng gần giống)",
    "w": "方向 / 方面 / 方法"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Năm nay không phải con cái về quê, mà là bố mẹ lên thành phố — đó chính là “sum họp ngược”.",
    "answer": "今年不是孩子回老家，而是父母来城市，这就是“反向团圆”。",
    "answerPy": "Jīnnián bú shì háizi huí lǎojiā, érshì fùmǔ lái chéngshì, zhè jiùshì “fǎnxiàng tuányuán”.",
    "note": "Ôn 不是……而是…… (Bài 11 · điểm 3).",
    "pair": "不是……而是……"
   },
   {
    "promptLang": "vi",
    "prompt": "Dịp lễ nhiều người chọn “du lịch ngược”, đến những nơi ít người.",
    "answer": "节假日很多人选择“反向旅游”，去人少的地方。",
    "answerPy": "Jiéjiàrì hěn duō rén xuǎnzé “fǎnxiàng lǚyóu”, qù rén shǎo de dìfang.",
    "note": "节假日 (từ mới) + 选择 + V.",
    "pair": "选择 + V"
   }
  ]
 },
 {
  "n": 28,
  "zh": "团圆",
  "py": "tuányuán",
  "pos": "Động từ",
  "vn": "sum họp, đoàn tụ",
  "hv": "đoàn viên",
  "em": "👨‍👩‍👧",
  "lesson": 3,
  "explain": [
   "Gia đình (sau thời gian xa cách) được ở bên nhau. Bẫy Hán Việt: 团圆 đọc “đoàn viên” nhưng nghĩa là SUM HỌP, không phải “thành viên của đoàn” (đó là 团员)."
  ],
  "usage": "一家团圆 · 跟 / 和家人团圆 · 团圆饭.",
  "collo": [
   "一家团圆",
   "和家人团圆",
   "团圆饭",
   "团圆的日子"
  ],
  "colloFull": [
   {
    "zh": "一家团圆",
    "py": "Yì jiā tuányuán",
    "vn": "cả nhà sum họp"
   },
   {
    "zh": "和家人团圆",
    "py": "Hé jiārén tuányuán",
    "vn": "đoàn tụ với gia đình"
   },
   {
    "zh": "团圆饭",
    "py": "Tuányuánfàn",
    "vn": "bữa cơm đoàn viên"
   },
   {
    "zh": "团圆的日子",
    "py": "Tuányuán de rìzi",
    "vn": "ngày sum họp"
   }
  ],
  "patterns": [
   {
    "s": "和 / 跟 + người + 团圆",
    "m": "Sum họp với ai"
   },
   {
    "s": "团圆 ≠ 团员",
    "m": "团员 = thành viên đoàn"
   }
  ],
  "ex_zh": "周力的父母知道儿子这次不能回家后，就决定来一次“反向团圆”。",
  "ex_py": "Zhōu Lì de fùmǔ zhīdao érzi zhè cì bù néng huíjiā hòu, jiù juédìng lái yí cì “fǎnxiàng tuányuán”.",
  "ex_vn": "Bố mẹ Chu Lực biết lần này con trai không về được, liền quyết định làm một cuộc “sum họp ngược”.",
  "exList": [
   {
    "zh": "周力的父母知道儿子这次不能回家后，就决定来一次“反向团圆”。",
    "py": "Zhōu Lì de fùmǔ zhīdao érzi zhè cì bù néng huíjiā hòu, jiù juédìng lái yí cì “fǎnxiàng tuányuán”.",
    "vn": "Bố mẹ Chu Lực biết lần này con trai không về được, liền quyết định làm một cuộc “sum họp ngược”."
   },
   {
    "zh": "中秋节是家人团圆的节日。",
    "py": "Zhōngqiūjié shì jiārén tuányuán de jiérì.",
    "vn": "Tết Trung thu là ngày lễ gia đình sum họp."
   }
  ],
  "hanzi": [
   {
    "c": "团",
    "p": "tuán",
    "type": "形声字 · Chữ hình thanh",
    "st": 6,
    "ord": "丨 𠃍 (khung) → 才 → 一 (đóng khung)",
    "rad": "囗 (vi – vây quanh)",
    "mean": "đoàn, nhóm; tròn, tụ lại",
    "tip": "Khung vây (囗) bên trong là 才 (cái, gợi âm): người tụ lại trong một vòng → đoàn, nhóm; tụ tròn lại → 团圆 (sum họp).",
    "cf": "因 yīn (vì) — bên trong là 大; 困 kùn (buồn ngủ) — bên trong là 木",
    "w": "团圆 / 团结 / 旅游团"
   },
   {
    "c": "圆",
    "p": "yuán",
    "type": "形声字 · Chữ hình thanh",
    "st": 10,
    "ord": "丨 𠃍 (khung) → 员 → 一 (đóng khung)",
    "rad": "囗 (vi – vây quanh)",
    "mean": "tròn; trọn vẹn; đồng (tiền)",
    "tip": "Khung (囗) bao lấy 员 (yuán, gợi âm) → hình tròn khép kín — 圆形, 团圆 (sum họp trọn vẹn như trăng rằm).",
    "cf": "员 yuán (nhân viên) — không có khung 囗; 园 yuán (vườn) — bên trong là 元",
    "w": "团圆 / 圆形 / 圆满"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Dù ở đâu, khi Tết đến mọi người đều muốn về nhà đoàn tụ với gia đình.",
    "answer": "无论在哪儿，春节到来时人们都想回家和家人团圆。",
    "answerPy": "Wúlùn zài nǎr, Chūnjié dàolái shí rénmen dōu xiǎng huíjiā hé jiārén tuányuán.",
    "note": "Ôn 无论……都…… (Bài 12 · điểm 3) + 到来 (từ mới).",
    "pair": "无论……都……"
   },
   {
    "promptLang": "vi",
    "prompt": "Để kịp về nhà ăn bữa cơm đoàn viên, anh ấy mua vé từ một tháng trước.",
    "answer": "为了能回家吃团圆饭，他一个月前就买好了票。",
    "answerPy": "Wèile néng huíjiā chī tuányuánfàn, tā yí gè yuè qián jiù mǎihǎo le piào.",
    "note": "为了 (HSK 3) + 就 (sớm).",
    "pair": "为了……，……就……"
   }
  ]
 },
 {
  "n": 29,
  "zh": "左右",
  "py": "zuǒyòu",
  "pos": "Danh từ",
  "vn": "khoảng, chừng (đứng sau số)",
  "hv": "tả hữu",
  "em": "↔️",
  "lesson": 3,
  "explain": [
   "Đặt SAU số / thời gian để chỉ số ước lượng: 五点左右 = khoảng năm giờ. Nghĩa gốc: bên trái và bên phải. Xem Ngữ pháp · điểm 3."
  ],
  "usage": "số / thời gian + 左右 · 三十岁左右 · 一个小时左右.",
  "collo": [
   "五点左右",
   "三十岁左右",
   "一个小时左右",
   "两百块左右"
  ],
  "colloFull": [
   {
    "zh": "五点左右",
    "py": "Wǔ diǎn zuǒyòu",
    "vn": "khoảng năm giờ"
   },
   {
    "zh": "三十岁左右",
    "py": "Sānshí suì zuǒyòu",
    "vn": "khoảng ba mươi tuổi"
   },
   {
    "zh": "一个小时左右",
    "py": "Yí gè xiǎoshí zuǒyòu",
    "vn": "khoảng một tiếng"
   },
   {
    "zh": "两百块左右",
    "py": "Liǎngbǎi kuài zuǒyòu",
    "vn": "khoảng hai trăm tệ"
   }
  ],
  "patterns": [
   {
    "s": "số / thời gian + 左右",
    "m": "Khoảng … (đứng SAU)"
   },
   {
    "s": "左右 ↔ 大约",
    "m": "大约 đứng TRƯỚC: 大约五点"
   }
  ],
  "ex_zh": "早上五点左右他们就坐上了高铁，大约七点就来到了儿子工作的城市。",
  "ex_py": "Zǎoshang wǔ diǎn zuǒyòu tāmen jiù zuòshang le gāotiě, dàyuē qī diǎn jiù láidào le érzi gōngzuò de chéngshì.",
  "ex_vn": "Khoảng năm giờ sáng họ đã lên tàu cao tốc, chừng bảy giờ đã đến thành phố nơi con trai làm việc.",
  "exList": [
   {
    "zh": "早上五点左右他们就坐上了高铁，大约七点就来到了儿子工作的城市。",
    "py": "Zǎoshang wǔ diǎn zuǒyòu tāmen jiù zuòshang le gāotiě, dàyuē qī diǎn jiù láidào le érzi gōngzuò de chéngshì.",
    "vn": "Khoảng năm giờ sáng họ đã lên tàu cao tốc, chừng bảy giờ đã đến thành phố nơi con trai làm việc."
   },
   {
    "zh": "我每天晚上十一点左右睡觉。",
    "py": "Wǒ měitiān wǎnshang shí yìdiǎn zuǒyòu shuìjiào.",
    "vn": "Tối nào tôi cũng đi ngủ khoảng mười một giờ."
   }
  ],
  "hanzi": [
   {
    "c": "左",
    "p": "zuǒ",
    "type": "半包围结构 · Nửa bao quanh",
    "st": 5,
    "ord": "一 → 丿 → 工",
    "rad": "工 (công)",
    "mean": "trái",
    "tip": "Bàn tay 𠂇 + 工 (dụng cụ) → tay TRÁI cầm dụng cụ phụ. 右 = tay phải đưa lên miệng 口. 左右 = trái phải → xấp xỉ.",
    "cf": "右 (yòu – phải)",
    "w": "左右 / 左边 / 左手"
   },
   {
    "c": "右",
    "p": "yòu",
    "type": "会意字 · Chữ hội ý",
    "st": 5,
    "ord": "一 → 丿 → 口",
    "rad": "口 (khẩu)",
    "mean": "bên phải",
    "tip": "右 có 口 ở dưới, 左 có 工 ở dưới — mẹo phân biệt.",
    "cf": "左 (zuǒ – trái)",
    "w": "右边 / 右 / 往右走"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Từ đây đến khu du lịch đi xe mất khoảng một tiếng.",
    "answer": "从这儿到景区坐车要一个小时左右。",
    "answerPy": "Cóng zhèr dào jǐngqū zuòchē yào yí gè xiǎoshí zuǒyòu.",
    "note": "Thời đoạn + 左右.",
    "pair": "……左右"
   },
   {
    "promptLang": "vi",
    "prompt": "Anh ấy trông khoảng ba mươi tuổi, thực ra đã bốn mươi rồi.",
    "answer": "他看起来三十岁左右，其实已经四十了。",
    "answerPy": "Tā kànqǐlai sānshí suì zuǒyòu, qíshí yǐjīng sìshí le.",
    "note": "看起来 (trông có vẻ) + 其实.",
    "pair": "số + 左右"
   }
  ]
 },
 {
  "n": 30,
  "zh": "大约",
  "py": "dàyuē",
  "pos": "Phó từ",
  "vn": "khoảng, ước chừng (đứng trước số)",
  "hv": "đại ước",
  "em": "🕖",
  "lesson": 3,
  "explain": [
   "Phó từ đứng TRƯỚC số / thời gian: 大约七点 = khoảng bảy giờ. Xem Ngữ pháp · điểm 3."
  ],
  "usage": "大约 + số / thời gian · 大约有…… · 大约需要…….",
  "collo": [
   "大约七点",
   "大约有一百人",
   "大约需要两天",
   "大约三公里"
  ],
  "colloFull": [
   {
    "zh": "大约七点",
    "py": "Dàyuē qī diǎn",
    "vn": "khoảng bảy giờ"
   },
   {
    "zh": "大约有一百人",
    "py": "Dàyuē yǒu yìbǎi rén",
    "vn": "có khoảng một trăm người"
   },
   {
    "zh": "大约需要两天",
    "py": "Dàyuē xūyào liǎng tiān",
    "vn": "cần khoảng hai ngày"
   },
   {
    "zh": "大约三公里",
    "py": "Dàyuē sān gōnglǐ",
    "vn": "khoảng ba cây số"
   }
  ],
  "patterns": [
   {
    "s": "大约 + số / thời gian",
    "m": "Khoảng … (đứng TRƯỚC)"
   },
   {
    "s": "大约 ≈ 大概",
    "m": "大概 khẩu ngữ hơn, cũng đứng trước số"
   }
  ],
  "ex_zh": "早上五点左右他们就坐上了高铁，大约七点就来到了儿子工作的城市。",
  "ex_py": "Zǎoshang wǔ diǎn zuǒyòu tāmen jiù zuòshang le gāotiě, dàyuē qī diǎn jiù láidào le érzi gōngzuò de chéngshì.",
  "ex_vn": "Khoảng năm giờ sáng họ đã lên tàu cao tốc, chừng bảy giờ đã đến thành phố nơi con trai làm việc.",
  "exList": [
   {
    "zh": "早上五点左右他们就坐上了高铁，大约七点就来到了儿子工作的城市。",
    "py": "Zǎoshang wǔ diǎn zuǒyòu tāmen jiù zuòshang le gāotiě, dàyuē qī diǎn jiù láidào le érzi gōngzuò de chéngshì.",
    "vn": "Khoảng năm giờ sáng họ đã lên tàu cao tốc, chừng bảy giờ đã đến thành phố nơi con trai làm việc."
   },
   {
    "zh": "这个城市大约有一千万人。",
    "py": "Zhège chéngshì dàyuē yǒu yì qiānwàn rén.",
    "vn": "Thành phố này có khoảng mười triệu người."
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
    "prompt": "Lớp chúng tôi có khoảng ba mươi bạn, trong đó hơn một nửa là người nước ngoài.",
    "answer": "我们班大约有三十个同学，其中一半以上是外国人。",
    "answerPy": "Wǒmen bān dàyuē yǒu sānshí gè tóngxué, qízhōng yíbàn yǐshàng shì wàiguórén.",
    "note": "大约有 + số lượng; 其中 = trong đó.",
    "pair": "大约有……"
   },
   {
    "promptLang": "vi",
    "prompt": "Trung thu năm nay khoảng tám giờ tối chúng tôi mới ăn cơm đoàn viên.",
    "answer": "今年中秋节我们大约晚上八点才吃团圆饭。",
    "answerPy": "Jīnnián Zhōngqiūjié wǒmen dàyuē wǎnshang bā diǎn cái chī tuányuánfàn.",
    "note": "大约 + thời gian + 才 (muộn).",
    "pair": "大约……才……"
   }
  ]
 },
 {
  "n": 31,
  "zh": "烤",
  "py": "kǎo",
  "pos": "Động từ",
  "vn": "nướng",
  "hv": "khảo",
  "em": "🍖",
  "lesson": 3,
  "explain": [
   "Làm chín thức ăn bằng lửa / nhiệt: 烤肉 (thịt nướng), 烤鸭 (vịt quay)."
  ],
  "usage": "烤肉 · 烤鱼 · 北京烤鸭 · 烤面包.",
  "collo": [
   "烤肉",
   "烤鱼",
   "北京烤鸭",
   "烤面包"
  ],
  "colloFull": [
   {
    "zh": "烤肉",
    "py": "Kǎoròu",
    "vn": "thịt nướng / nướng thịt"
   },
   {
    "zh": "烤鱼",
    "py": "Kǎo yú",
    "vn": "cá nướng"
   },
   {
    "zh": "北京烤鸭",
    "py": "Běijīngkǎoyā",
    "vn": "vịt quay Bắc Kinh"
   },
   {
    "zh": "烤面包",
    "py": "Kǎo miànbāo",
    "vn": "bánh mì nướng"
   }
  ],
  "patterns": [
   {
    "s": "烤 + đồ ăn",
    "m": "Nướng …"
   },
   {
    "s": "北京烤鸭",
    "m": "Vịt quay Bắc Kinh (món nổi tiếng)"
   }
  ],
  "ex_zh": "在儿子家，他们做了一桌儿子爱吃的饭菜，有烤肉、烤鱼、饺子等等，还有西红柿鸡蛋汤。",
  "ex_py": "Zài érzi jiā, tāmen zuò le yì zhuō érzi ài chī de fàncài, yǒu kǎoròu, kǎo yú, jiǎozi děngděng, hái yǒu xīhóngshì jīdàn tāng.",
  "ex_vn": "Ở nhà con trai, họ nấu một mâm toàn món con thích ăn: thịt nướng, cá nướng, sủi cảo…, còn có canh trứng cà chua.",
  "exList": [
   {
    "zh": "在儿子家，他们做了一桌儿子爱吃的饭菜，有烤肉、烤鱼、饺子等等，还有西红柿鸡蛋汤。",
    "py": "Zài érzi jiā, tāmen zuò le yì zhuō érzi ài chī de fàncài, yǒu kǎoròu, kǎo yú, jiǎozi děngděng, hái yǒu xīhóngshì jīdàn tāng.",
    "vn": "Ở nhà con trai, họ nấu một mâm toàn món con thích ăn: thịt nướng, cá nướng, sủi cảo…, còn có canh trứng cà chua."
   },
   {
    "zh": "周末我们去公园烤肉吧！",
    "py": "Zhōumò wǒmen qù gōngyuán kǎoròu ba!",
    "vn": "Cuối tuần mình ra công viên nướng thịt đi!"
   }
  ],
  "hanzi": [
   {
    "c": "烤",
    "p": "kǎo",
    "type": "左右结构 · Trái-phải",
    "st": 10,
    "ord": "火 trái → 考 phải",
    "rad": "火 (hỏa)",
    "mean": "nướng",
    "tip": "Lửa 火 + 考 → NƯỚNG, QUAY. 烤鸭 = vịt quay; 烤肉 = thịt nướng; 考 (thi) không có 火.",
    "cf": "考 (kǎo – thi)",
    "w": "烤鸭 / 烤肉 / 烤"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Đến Bắc Kinh, cậu nhất định phải nếm thử vịt quay Bắc Kinh.",
    "answer": "到了北京，你千万要尝尝北京烤鸭。",
    "answerPy": "Dào le Běijīng, nǐ qiānwàn yào chángchang běijīngkǎoyā.",
    "note": "千万要 (từ mới bài khoá 1) + V lặp.",
    "pair": "千万要……"
   },
   {
    "promptLang": "vi",
    "prompt": "Món cá nướng này vừa thơm vừa cay.",
    "answer": "这道烤鱼又香又辣。",
    "answerPy": "Zhè dào kǎo yú yòu xiāng yòu là.",
    "note": "又……又……; lượng từ 道 cho món ăn (Bài 5).",
    "pair": "又……又……"
   }
  ]
 },
 {
  "n": 32,
  "zh": "西红柿",
  "py": "xīhóngshì",
  "pos": "Danh từ",
  "vn": "cà chua",
  "hv": "tây hồng thị",
  "em": "🍅",
  "lesson": 3,
  "explain": [
   "Quả cà chua; 西红柿鸡蛋汤 (canh trứng cà chua), 西红柿炒鸡蛋 (trứng xào cà chua) là món nhà rất quen ở Trung Quốc."
  ],
  "usage": "西红柿鸡蛋汤 · 西红柿炒鸡蛋 · 一个西红柿.",
  "collo": [
   "西红柿鸡蛋汤",
   "西红柿炒鸡蛋",
   "一个西红柿",
   "新鲜的西红柿"
  ],
  "colloFull": [
   {
    "zh": "西红柿鸡蛋汤",
    "py": "Xīhóngshì jīdàn tāng",
    "vn": "canh trứng cà chua"
   },
   {
    "zh": "西红柿炒鸡蛋",
    "py": "Xīhóngshì chǎo jīdàn",
    "vn": "trứng xào cà chua"
   },
   {
    "zh": "一个西红柿",
    "py": "Yí gè xīhóngshì",
    "vn": "một quả cà chua"
   },
   {
    "zh": "新鲜的西红柿",
    "py": "Xīnxiān de xīhóngshì",
    "vn": "cà chua tươi"
   }
  ],
  "patterns": [
   {
    "s": "西红柿 + 炒鸡蛋 / 鸡蛋汤",
    "m": "Món cà chua quen thuộc"
   }
  ],
  "ex_zh": "在儿子家，他们做了一桌儿子爱吃的饭菜，有烤肉、烤鱼、饺子等等，还有西红柿鸡蛋汤。",
  "ex_py": "Zài érzi jiā, tāmen zuò le yì zhuō érzi ài chī de fàncài, yǒu kǎoròu, kǎo yú, jiǎozi děngděng, hái yǒu xīhóngshì jīdàn tāng.",
  "ex_vn": "Ở nhà con trai, họ nấu một mâm toàn món con thích ăn: thịt nướng, cá nướng, sủi cảo…, còn có canh trứng cà chua.",
  "exList": [
   {
    "zh": "在儿子家，他们做了一桌儿子爱吃的饭菜，有烤肉、烤鱼、饺子等等，还有西红柿鸡蛋汤。",
    "py": "Zài érzi jiā, tāmen zuò le yì zhuō érzi ài chī de fàncài, yǒu kǎoròu, kǎo yú, jiǎozi děngděng, hái yǒu xīhóngshì jīdàn tāng.",
    "vn": "Ở nhà con trai, họ nấu một mâm toàn món con thích ăn: thịt nướng, cá nướng, sủi cảo…, còn có canh trứng cà chua."
   },
   {
    "zh": "西红柿炒鸡蛋做起来很简单，我也会做。",
    "py": "Xīhóngshì chǎo jīdàn zuò qǐlai hěn jiǎndān, wǒ yě huì zuò.",
    "vn": "Trứng xào cà chua làm rất đơn giản, tôi cũng biết làm."
   }
  ],
  "hanzi": [
   {
    "c": "西",
    "p": "xī",
    "type": "独体字 · Chữ đơn (tượng hình)",
    "st": 6,
    "ord": "nét liền, hình cái tổ chim",
    "rad": "西 (á)",
    "mean": "phía tây",
    "tip": "Chữ tượng hình cổ mô phỏng hình chim VỀ TỔ lúc mặt trời lặn (hướng tây) → PHÍA TÂY.",
    "cf": "酉 (yǒu – \"chi dậu\", hình dáng gần giống\")",
    "w": "西边 / 西门 / 东西"
   },
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
    "c": "柿",
    "p": "shì",
    "type": "左右结构 · Trái-phải",
    "st": 9,
    "ord": "木 (mộc) trái → 市 (thị) phải",
    "rad": "木 (mộc – cây)",
    "mean": "quả hồng",
    "tip": "Bộ cây 木 + 市(biểu âm) → tên một loại QUẢ (quả hồng); 西红柿 (cà chua đỏ đến từ phương Tây) mượn hình dáng giống quả hồng để đặt tên.",
    "cf": "柿 dễ nhầm với 柿 chỉ dùng trong từ này và 柿子",
    "w": "西红柿 / 柿子"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Cà chua chỗ này quả nào cũng đỏ hơn quả nào.",
    "answer": "这儿的西红柿一个比一个红。",
    "answerPy": "Zhèr de xīhóngshì yí gè bǐ yí gè hóng.",
    "note": "一个比一个 + Adj (Bài 13 · điểm 2).",
    "pair": "一个比一个 + Adj"
   },
   {
    "promptLang": "vi",
    "prompt": "Cà chua ở siêu thị gần nhà tôi khoảng năm tệ một cân.",
    "answer": "我家附近超市的西红柿大约五块钱一斤。",
    "answerPy": "Wǒ jiā fùjìn chāoshì de xīhóngshì dàyuē wǔ kuài qián yì jīn.",
    "note": "大约 + số tiền (Bài 13 · điểm 3).",
    "pair": "大约 + số"
   }
  ]
 },
 {
  "n": 33,
  "zh": "出现",
  "py": "chūxiàn",
  "pos": "Động từ",
  "vn": "xuất hiện",
  "hv": "xuất hiện",
  "em": "✨",
  "lesson": 3,
  "explain": [
   "Hiện ra, lộ ra (người, vật, vấn đề…). Có thể có tân ngữ: 出现问题; hoặc 出现在 + nơi."
  ],
  "usage": "突然出现 · 出现在 + nơi · 出现问题 · 出现变化.",
  "collo": [
   "突然出现",
   "出现在门口",
   "出现问题",
   "出现变化"
  ],
  "colloFull": [
   {
    "zh": "突然出现",
    "py": "Tūrán chūxiàn",
    "vn": "bỗng xuất hiện"
   },
   {
    "zh": "出现在门口",
    "py": "Chūxiàn zài ménkǒu",
    "vn": "xuất hiện ở cửa"
   },
   {
    "zh": "出现问题",
    "py": "Chūxiàn wèntí",
    "vn": "xảy ra vấn đề"
   },
   {
    "zh": "出现变化",
    "py": "Chūxiàn biànhuà",
    "vn": "xuất hiện thay đổi"
   }
  ],
  "patterns": [
   {
    "s": "出现 + 在 + nơi",
    "m": "Xuất hiện ở đâu"
   },
   {
    "s": "突然 + 出现",
    "m": "Bỗng xuất hiện"
   }
  ],
  "ex_zh": "周力下班回家，看到一桌子饭菜和突然出现的父母，他感觉特别幸福。",
  "ex_py": "Zhōu Lì xiàbān huíjiā, kàndào yì zhuōzi fàncài hé tūrán chūxiàn de fùmǔ, tā gǎnjué tèbié xìngfú.",
  "ex_vn": "Chu Lực tan làm về nhà, thấy cả bàn thức ăn và bố mẹ bỗng dưng xuất hiện, anh cảm thấy vô cùng hạnh phúc.",
  "exList": [
   {
    "zh": "周力下班回家，看到一桌子饭菜和突然出现的父母，他感觉特别幸福。",
    "py": "Zhōu Lì xiàbān huíjiā, kàndào yì zhuōzi fàncài hé tūrán chūxiàn de fùmǔ, tā gǎnjué tèbié xìngfú.",
    "vn": "Chu Lực tan làm về nhà, thấy cả bàn thức ăn và bố mẹ bỗng dưng xuất hiện, anh cảm thấy vô cùng hạnh phúc."
   },
   {
    "zh": "电影开始十分钟以后，他才出现。",
    "py": "Diànyǐng kāishǐ shí fēnzhōng yǐhòu, tā cái chūxiàn.",
    "vn": "Phim bắt đầu được mười phút anh ấy mới xuất hiện."
   }
  ],
  "hanzi": [
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
    "prompt": "Nếu trong công việc xuất hiện vấn đề, thì báo ngay cho tôi.",
    "answer": "要是工作中出现了问题，就马上告诉我。",
    "answerPy": "Yàoshi gōngzuò zhōng chūxiàn le wèntí, jiù mǎshàng gàosu wǒ.",
    "note": "Ôn 要是……就…… (Bài 1 · điểm 2).",
    "pair": "要是……就……"
   },
   {
    "promptLang": "vi",
    "prompt": "Chúng tôi đợi hơn một tiếng, con hổ đó mới xuất hiện.",
    "answer": "我们等了一个多小时，那只老虎才出现。",
    "answerPy": "Wǒmen děng le yí gè duō xiǎoshí, nà zhī lǎohǔ cái chūxiàn.",
    "note": "Thời đoạn + 才 (mới, muộn).",
    "pair": "……才出现"
   }
  ]
 },
 {
  "n": 34,
  "zh": "作为",
  "py": "zuòwéi",
  "pos": "Giới từ / Động từ",
  "vn": "với tư cách là, là (một …); coi là",
  "hv": "tác vi",
  "em": "🎖️",
  "lesson": 4,
  "explain": [
   "Giới từ: nêu thân phận của người hoặc tính chất của vật (作为学生，…… = là học sinh thì …). Động từ: coi … là (把 A 作为 B). Xem Ngữ pháp · điểm 4."
  ],
  "usage": "作为 + N，…… · 作为一名…… · 把 A 作为 B.",
  "collo": [
   "作为学生",
   "作为朋友",
   "作为父母",
   "作为一名医生"
  ],
  "colloFull": [
   {
    "zh": "作为学生",
    "py": "Zuòwéi xuésheng",
    "vn": "là học sinh"
   },
   {
    "zh": "作为朋友",
    "py": "Zuòwéi péngyou",
    "vn": "là bạn bè"
   },
   {
    "zh": "作为父母",
    "py": "Zuòwéi fùmǔ",
    "vn": "là cha mẹ"
   },
   {
    "zh": "作为一名医生",
    "py": "Zuòwéi yì míng yīshēng",
    "vn": "là một bác sĩ"
   }
  ],
  "patterns": [
   {
    "s": "作为 + N，chủ ngữ + V",
    "m": "Là (thân phận) … thì …"
   },
   {
    "s": "把 A 作为 B",
    "m": "Coi A là B"
   }
  ],
  "ex_zh": "作为一年里最重要的传统节日，春节对中国人来说有着特别的意义。",
  "ex_py": "Zuòwéi yì nián lǐ zuì zhòngyào de chuántǒng jiérì, Chūnjié duì Zhōngguórén láishuō yǒuzhe tèbié de yìyì.",
  "ex_vn": "Là ngày lễ truyền thống quan trọng nhất trong năm, Tết đối với người Trung Quốc có ý nghĩa đặc biệt.",
  "exList": [
   {
    "zh": "作为一年里最重要的传统节日，春节对中国人来说有着特别的意义。",
    "py": "Zuòwéi yì nián lǐ zuì zhòngyào de chuántǒng jiérì, Chūnjié duì Zhōngguórén láishuō yǒuzhe tèbié de yìyì.",
    "vn": "Là ngày lễ truyền thống quan trọng nhất trong năm, Tết đối với người Trung Quốc có ý nghĩa đặc biệt."
   },
   {
    "zh": "作为老师，我希望每个学生都能进步。",
    "py": "Zuòwéi lǎoshī, wǒ xīwàng měi gè xuésheng dōu néng jìnbù.",
    "vn": "Là giáo viên, tôi mong em học sinh nào cũng tiến bộ."
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
    "prompt": "Là sinh viên, chúng ta không những phải học tốt mà còn phải rèn luyện thân thể.",
    "answer": "作为学生，我们不仅要学好知识，还要锻炼身体。",
    "answerPy": "Zuòwéi xuésheng, wǒmen bùjǐn yào xuéhǎo zhīshi, hái yào duànliàn shēntǐ.",
    "note": "Ôn 不仅……还…… (Bài 3 · điểm 2).",
    "pair": "作为……，不仅……还……"
   },
   {
    "promptLang": "vi",
    "prompt": "Là người Hà Nội, tôi nhất định phải mời bạn ăn phở.",
    "answer": "作为河内人，我一定要请你吃河粉。",
    "answerPy": "Zuòwéi Hénèi rén, wǒ yídìng yào qǐng nǐ chī héfěn.",
    "note": "作为 + thân phận, chủ ngữ vế sau là chính người đó (我).",
    "pair": "作为……，我……"
   }
  ]
 },
 {
  "n": 35,
  "zh": "传统",
  "py": "chuántǒng",
  "pos": "Tính từ / Danh từ",
  "vn": "(thuộc) truyền thống; truyền thống",
  "hv": "truyền thống",
  "em": "🏮",
  "lesson": 4,
  "explain": [
   "Tính từ: mang tính truyền thống (传统节日). Danh từ: phong tục, nếp có từ lâu đời (……是……的传统)."
  ],
  "usage": "传统节日 · 传统文化 · 传统美食 · ……的传统.",
  "collo": [
   "传统节日",
   "传统文化",
   "传统美食",
   "中国的传统"
  ],
  "colloFull": [
   {
    "zh": "传统节日",
    "py": "Chuántǒng jiérì",
    "vn": "ngày lễ truyền thống"
   },
   {
    "zh": "传统文化",
    "py": "Chuántǒng wénhuà",
    "vn": "văn hoá truyền thống"
   },
   {
    "zh": "传统美食",
    "py": "Chuántǒng měishí",
    "vn": "món ăn truyền thống"
   },
   {
    "zh": "中国的传统",
    "py": "Zhōngguó de chuántǒng",
    "vn": "truyền thống Trung Quốc"
   }
  ],
  "patterns": [
   {
    "s": "传统 + N",
    "m": "(Thuộc) truyền thống: 传统节日"
   },
   {
    "s": "V + 是 + ……的传统",
    "m": "Làm gì là truyền thống của …"
   }
  ],
  "ex_zh": "作为一年里最重要的传统节日，春节对中国人来说有着特别的意义。",
  "ex_py": "Zuòwéi yì nián lǐ zuì zhòngyào de chuántǒng jiérì, Chūnjié duì Zhōngguórén láishuō yǒuzhe tèbié de yìyì.",
  "ex_vn": "Là ngày lễ truyền thống quan trọng nhất trong năm, Tết đối với người Trung Quốc có ý nghĩa đặc biệt.",
  "exList": [
   {
    "zh": "作为一年里最重要的传统节日，春节对中国人来说有着特别的意义。",
    "py": "Zuòwéi yì nián lǐ zuì zhòngyào de chuántǒng jiérì, Chūnjié duì Zhōngguórén láishuō yǒuzhe tèbié de yìyì.",
    "vn": "Là ngày lễ truyền thống quan trọng nhất trong năm, Tết đối với người Trung Quốc có ý nghĩa đặc biệt."
   },
   {
    "zh": "吃月饼是中秋节的传统。",
    "py": "Chī yuèbing shì Zhōngqiūjié de chuántǒng.",
    "vn": "Ăn bánh Trung thu là truyền thống của Tết Trung thu."
   }
  ],
  "hanzi": [
   {
    "c": "传",
    "p": "chuán",
    "type": "左右结构 · Trái-phải",
    "st": 6,
    "ord": "亻 trái → 专 phải",
    "rad": "亻 (nhân)",
    "mean": "truyền",
    "tip": "Người 亻 + 专 → người TRUYỀN đi. 传真 = truyền bản thật = fax; 传统 = truyền thống (Bài 9). Đọc zhuàn = truyện.",
    "cf": "转 (zhuǎn – chuyển, bộ 车)",
    "w": "传真 / 传统 / 传染"
   },
   {
    "c": "统",
    "p": "tǒng",
    "type": "形声字 · Chữ hình thanh",
    "st": 9,
    "ord": "纟 → 充",
    "rad": "纟 (mịch – sợi tơ)",
    "mean": "nối liền, gom lại; hệ thống",
    "tip": "Sợi tơ (纟) + 充 (chōng, gợi âm): đầu mối gom các sợi tơ nối liền nhau → 传统 (truyền thống: nối tiếp từ đời này sang đời khác), 统一 (thống nhất).",
    "cf": "充 chōng (nạp, đầy) — không có 纟; 流 liú (chảy) — bên trái là 氵",
    "w": "传统 / 统一 / 系统"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Tết Đoan ngọ là một ngày lễ truyền thống của Trung Quốc.",
    "answer": "端午节是中国的一个传统节日。",
    "answerPy": "Duānwǔjié shì Zhōngguó de yí gè chuántǒng jiérì.",
    "note": "传统 + 节日.",
    "pair": "……是……传统节日"
   },
   {
    "promptLang": "vi",
    "prompt": "Dù sống ở nước ngoài, họ vẫn giữ truyền thống ăn bánh Trung thu.",
    "answer": "即使住在国外，他们也仍然保持着吃月饼的传统。",
    "answerPy": "Jíshǐ zhù zài guówài, tāmen yě réngrán bǎochí zhe chī yuèbing de chuántǒng.",
    "note": "Ôn 即使……也…… (Bài 11 · điểm 1) + 仍然 (từ mới).",
    "pair": "即使……也……"
   }
  ]
 },
 {
  "n": 36,
  "zh": "有着",
  "py": "yǒuzhe",
  "pos": "Động từ",
  "vn": "có (văn viết, với danh từ trừu tượng)",
  "hv": "hữu trước",
  "em": "📜",
  "lesson": 4,
  "explain": [
   "Văn viết, nghĩa như 有, nhưng thường đi với danh từ trừu tượng có định ngữ đi trước: 有着特别的意义, 有着三千多年的历史. Đồ vật cụ thể vẫn dùng 有 (✗ 我有着一本书)."
  ],
  "usage": "有着 + (định ngữ) + 意义 / 历史 / 感情 / 关系.",
  "collo": [
   "有着特别的意义",
   "有着悠久的历史",
   "有着很深的感情",
   "有着很大的不同"
  ],
  "colloFull": [
   {
    "zh": "有着特别的意义",
    "py": "Yǒuzhe tèbié de yìyì",
    "vn": "có ý nghĩa đặc biệt"
   },
   {
    "zh": "有着悠久的历史",
    "py": "Yǒuzhe yōujiǔ de lìshǐ",
    "vn": "có lịch sử lâu đời"
   },
   {
    "zh": "有着很深的感情",
    "py": "Yǒuzhe hěn shēn de gǎnqíng",
    "vn": "có tình cảm sâu đậm"
   },
   {
    "zh": "有着很大的不同",
    "py": "Yǒuzhe hěn dà de bùtóng",
    "vn": "có sự khác biệt lớn"
   }
  ],
  "patterns": [
   {
    "s": "有着 + định ngữ + N trừu tượng",
    "m": "Có (ý nghĩa, lịch sử, tình cảm …)"
   },
   {
    "s": "有着 ≠ 有",
    "m": "Vật cụ thể dùng 有: 我有一本书"
   }
  ],
  "ex_zh": "作为一年里最重要的传统节日，春节对中国人来说有着特别的意义。",
  "ex_py": "Zuòwéi yì nián lǐ zuì zhòngyào de chuántǒng jiérì, Chūnjié duì Zhōngguórén láishuō yǒuzhe tèbié de yìyì.",
  "ex_vn": "Là ngày lễ truyền thống quan trọng nhất trong năm, Tết đối với người Trung Quốc có ý nghĩa đặc biệt.",
  "exList": [
   {
    "zh": "作为一年里最重要的传统节日，春节对中国人来说有着特别的意义。",
    "py": "Zuòwéi yì nián lǐ zuì zhòngyào de chuántǒng jiérì, Chūnjié duì Zhōngguórén láishuō yǒuzhe tèbié de yìyì.",
    "vn": "Là ngày lễ truyền thống quan trọng nhất trong năm, Tết đối với người Trung Quốc có ý nghĩa đặc biệt."
   },
   {
    "zh": "这首歌对我有着特别的意义。",
    "py": "Zhè shǒu gē duì wǒ yǒuzhe tèbié de yìyì.",
    "vn": "Bài hát này có ý nghĩa đặc biệt đối với tôi."
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
    "prompt": "Hà Nội là một thành phố có hơn một nghìn năm lịch sử.",
    "answer": "河内是一座有着一千多年历史的城市。",
    "answerPy": "Hénèi shì yí zuò yǒuzhe yìqiān duō nián lìshǐ de chéngshì.",
    "note": "有着 + ……历史; lượng từ 座 cho thành phố.",
    "pair": "有着……的历史"
   },
   {
    "promptLang": "vi",
    "prompt": "Tấm ảnh này đối với ông nội có ý nghĩa đặc biệt.",
    "answer": "这张照片对爷爷来说有着特别的意义。",
    "answerPy": "Zhè zhāng zhàopiàn duì yéye láishuō yǒuzhe tèbié de yìyì.",
    "note": "对……来说 + 有着…….",
    "pair": "对……来说有着……"
   }
  ]
 },
 {
  "n": 37,
  "zh": "意义",
  "py": "yìyì",
  "pos": "Danh từ",
  "vn": "ý nghĩa",
  "hv": "ý nghĩa",
  "em": "💡",
  "lesson": 4,
  "explain": [
   "Giá trị, tầm quan trọng của một việc. Phân biệt: 意思 = nghĩa của từ / thú vị (有意思); 意义 = có giá trị, đáng làm (有意义)."
  ],
  "usage": "有意义 · 特别的意义 · 重要意义 · 没有意义.",
  "collo": [
   "有意义",
   "特别的意义",
   "重要意义",
   "没有意义"
  ],
  "colloFull": [
   {
    "zh": "有意义",
    "py": "Yǒu yìyì",
    "vn": "có ý nghĩa"
   },
   {
    "zh": "特别的意义",
    "py": "Tèbié de yìyì",
    "vn": "ý nghĩa đặc biệt"
   },
   {
    "zh": "重要意义",
    "py": "Zhòngyào yìyì",
    "vn": "ý nghĩa quan trọng"
   },
   {
    "zh": "没有意义",
    "py": "Méiyǒu yìyì",
    "vn": "vô nghĩa"
   }
  ],
  "patterns": [
   {
    "s": "对……来说 + 有……意义",
    "m": "Đối với … có ý nghĩa …"
   },
   {
    "s": "意义 ≠ 意思",
    "m": "有意思 = thú vị; 有意义 = có ý nghĩa, có giá trị"
   }
  ],
  "ex_zh": "作为一年里最重要的传统节日，春节对中国人来说有着特别的意义。",
  "ex_py": "Zuòwéi yì nián lǐ zuì zhòngyào de chuántǒng jiérì, Chūnjié duì Zhōngguórén láishuō yǒuzhe tèbié de yìyì.",
  "ex_vn": "Là ngày lễ truyền thống quan trọng nhất trong năm, Tết đối với người Trung Quốc có ý nghĩa đặc biệt.",
  "exList": [
   {
    "zh": "作为一年里最重要的传统节日，春节对中国人来说有着特别的意义。",
    "py": "Zuòwéi yì nián lǐ zuì zhòngyào de chuántǒng jiérì, Chūnjié duì Zhōngguórén láishuō yǒuzhe tèbié de yìyì.",
    "vn": "Là ngày lễ truyền thống quan trọng nhất trong năm, Tết đối với người Trung Quốc có ý nghĩa đặc biệt."
   },
   {
    "zh": "这次比赛对我来说很有意义。",
    "py": "Zhè cì bǐsài duì wǒ láishuō hěn yǒu yìyì.",
    "vn": "Cuộc thi lần này đối với tôi rất có ý nghĩa."
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
    "c": "义",
    "p": "yì",
    "type": "会意字 · Chữ hội ý",
    "st": 3,
    "ord": "丶 → 丿 → ㇏",
    "rad": "丶 (chủ – chấm)",
    "mean": "nghĩa, lẽ phải; ý nghĩa",
    "tip": "Giản thể của 義: dấu chấm (丶) đặt trên chữ 乂 (cắt, phân định) → phân định đúng sai → nghĩa, lẽ phải — 意义 (ý nghĩa), 正义 (chính nghĩa).",
    "cf": "又 yòu (lại) — không có chấm, nét đầu là ㇇; 叉 chā (cái nĩa) — chấm nằm bên trong",
    "w": "意义 / 正义 / 主义"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Tôi thấy làm tình nguyện viên rất có ý nghĩa.",
    "answer": "我觉得当志愿者很有意义。",
    "answerPy": "Wǒ juéde dāng zhìyuànzhě hěn yǒu yìyì.",
    "note": "有意义 ≠ 有意思.",
    "pair": "很有意义"
   },
   {
    "promptLang": "vi",
    "prompt": "Chẳng có ngày lễ nào là không có ý nghĩa riêng của nó.",
    "answer": "没有一个节日没有它的意义。",
    "answerPy": "Méiyǒu yí gè jiérì méiyǒu tā de yìyì.",
    "note": "Ôn câu phủ định hai lần (Bài 12 · điểm 2) = 每个节日都有它的意义.",
    "pair": "没有……没有……"
   }
  ]
 },
 {
  "n": 38,
  "zh": "到来",
  "py": "dàolái",
  "pos": "Động từ",
  "vn": "đến (thời điểm, mùa, ngày lễ)",
  "hv": "đáo lai",
  "em": "🎊",
  "lesson": 4,
  "explain": [
   "Văn viết: (thời gian, mùa, ngày lễ, sự kiện) đến. Không dùng cho người đến một nơi cụ thể (✗ 他到来学校 → 他来学校)."
  ],
  "usage": "春节到来 · ……到来时 · ……的到来.",
  "collo": [
   "春节到来",
   "冬天到来",
   "新年的到来",
   "生日到来时"
  ],
  "colloFull": [
   {
    "zh": "春节到来",
    "py": "Chūnjié dàolái",
    "vn": "Tết đến"
   },
   {
    "zh": "冬天到来",
    "py": "Dōngtiān dàolái",
    "vn": "mùa đông đến"
   },
   {
    "zh": "新年的到来",
    "py": "Xīnnián de dàolái",
    "vn": "năm mới đến"
   },
   {
    "zh": "生日到来时",
    "py": "Shēngrì dàolái shí",
    "vn": "khi sinh nhật đến"
   }
  ],
  "patterns": [
   {
    "s": "N (thời gian / sự kiện) + 到来 + 时 / 以前",
    "m": "Khi / trước khi … đến"
   }
  ],
  "ex_zh": "春节到来时，人们不管在哪里，都想回家过年。",
  "ex_py": "Chūnjié dàolái shí, rénmen bùguǎn zài nǎlǐ, dōu xiǎng huíjiā guònián.",
  "ex_vn": "Khi Tết đến, dù ở đâu người ta cũng muốn về nhà ăn Tết.",
  "exList": [
   {
    "zh": "春节到来时，人们不管在哪里，都想回家过年。",
    "py": "Chūnjié dàolái shí, rénmen bùguǎn zài nǎlǐ, dōu xiǎng huíjiā guònián.",
    "vn": "Khi Tết đến, dù ở đâu người ta cũng muốn về nhà ăn Tết."
   },
   {
    "zh": "冬天到来以前，我们得买几件厚衣服。",
    "py": "Dōngtiān dàolái yǐqián, wǒmen děi mǎi jǐ jiàn hòu yīfu.",
    "vn": "Trước khi mùa đông đến, chúng ta phải mua mấy bộ quần áo dày."
   }
  ],
  "hanzi": [
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
    "prompt": "Khi mùa xuân đến, hoa trong công viên đều nở cả.",
    "answer": "春天到来时，公园里的花都开了。",
    "answerPy": "Chūntiān dàolái shí, gōngyuán lǐ de huā dōu kāi le.",
    "note": "N + 到来时.",
    "pair": "……到来时"
   },
   {
    "promptLang": "vi",
    "prompt": "Mỗi khi Tết Trung thu đến, tôi lại đặc biệt nhớ nhà.",
    "answer": "每当中秋节到来，我都特别想家。",
    "answerPy": "Měi dāng Zhōngqiūjié dàolái, wǒ dōu tèbié xiǎngjiā.",
    "note": "每当……，都…… (mỗi khi … đều …).",
    "pair": "每当……到来，都……"
   }
  ]
 },
 {
  "n": 39,
  "zh": "美食",
  "py": "měishí",
  "pos": "Danh từ",
  "vn": "món ngon, đồ ăn ngon",
  "hv": "mỹ thực",
  "em": "🍜",
  "lesson": 4,
  "explain": [
   "Món ăn ngon, đặc sản: 当地美食 (món ngon địa phương), 传统美食 (món ăn truyền thống)."
  ],
  "usage": "各种美食 · 当地美食 · 传统美食 · 美食节.",
  "collo": [
   "各种美食",
   "当地美食",
   "传统美食",
   "美食节"
  ],
  "colloFull": [
   {
    "zh": "各种美食",
    "py": "Gèzhǒng měishí",
    "vn": "đủ loại món ngon"
   },
   {
    "zh": "当地美食",
    "py": "Dāngdì měishí",
    "vn": "món ngon địa phương"
   },
   {
    "zh": "传统美食",
    "py": "Chuántǒng měishí",
    "vn": "món ăn truyền thống"
   },
   {
    "zh": "美食节",
    "py": "Měishí jié",
    "vn": "lễ hội ẩm thực"
   }
  ],
  "patterns": [
   {
    "s": "各种 + 美食",
    "m": "Đủ loại món ngon"
   },
   {
    "s": "尝尝 + 当地美食",
    "m": "Nếm thử món ngon địa phương"
   }
  ],
  "ex_zh": "春节前也最忙，既要收拾房子、打扫卫生，又要准备各种美食。",
  "ex_py": "Chūnjié qián yě zuì máng, jì yào shōushi fángzi, dǎsǎo wèishēng, yòu yào zhǔnbèi gèzhǒng měishí.",
  "ex_vn": "Trước Tết cũng là lúc bận nhất, vừa phải dọn nhà, làm vệ sinh, lại vừa phải chuẩn bị đủ món ngon.",
  "exList": [
   {
    "zh": "春节前也最忙，既要收拾房子、打扫卫生，又要准备各种美食。",
    "py": "Chūnjié qián yě zuì máng, jì yào shōushi fángzi, dǎsǎo wèishēng, yòu yào zhǔnbèi gèzhǒng měishí.",
    "vn": "Trước Tết cũng là lúc bận nhất, vừa phải dọn nhà, làm vệ sinh, lại vừa phải chuẩn bị đủ món ngon."
   },
   {
    "zh": "来到成都，一定要尝尝这里的美食。",
    "py": "Láidào Chéngdū, yídìng yào chángchang zhèli de měishí.",
    "vn": "Đến Thành Đô nhất định phải nếm thử món ngon ở đây."
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
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Đi du lịch, một mặt có thể ngắm cảnh, mặt khác có thể nếm món ngon địa phương.",
    "answer": "去旅游一方面可以看风景，另一方面可以尝尝当地的美食。",
    "answerPy": "Qù lǚyóu yìfāngmiàn kěyǐ kàn fēngjǐng, lìngyìfāngmiàn kěyǐ chángchang dāngdì de měishí.",
    "note": "Ôn 一方面……另一方面…… (Bài 1 · điểm 4).",
    "pair": "一方面……另一方面……"
   },
   {
    "promptLang": "vi",
    "prompt": "Hà Nội có rất nhiều món ngon, ví dụ phở, bún chả v.v.",
    "answer": "河内有很多美食，比如河粉、烤肉米线等。",
    "answerPy": "Hénèi yǒu hěn duō měishí, bǐrú héfěn, kǎoròu mǐxiàn děng.",
    "note": "比如……等 (liệt kê).",
    "pair": "比如……等"
   }
  ]
 },
 {
  "n": 40,
  "zh": "年夜饭",
  "py": "niányèfàn",
  "pos": "Danh từ",
  "vn": "bữa cơm tất niên (đêm giao thừa)",
  "hv": "niên dạ phạn",
  "em": "🥟",
  "lesson": 4,
  "explain": [
   "Bữa cơm cả nhà ăn cùng nhau tối 30 Tết (除夕) — bữa cơm quan trọng nhất năm của người Trung Quốc."
  ],
  "usage": "吃年夜饭 · 做年夜饭 · 一桌年夜饭.",
  "collo": [
   "吃年夜饭",
   "做年夜饭",
   "一桌年夜饭",
   "准备年夜饭"
  ],
  "colloFull": [
   {
    "zh": "吃年夜饭",
    "py": "Chī niányèfàn",
    "vn": "ăn cơm tất niên"
   },
   {
    "zh": "做年夜饭",
    "py": "Zuò niányèfàn",
    "vn": "nấu cơm tất niên"
   },
   {
    "zh": "一桌年夜饭",
    "py": "Yì zhuō niányèfàn",
    "vn": "một mâm cơm tất niên"
   },
   {
    "zh": "准备年夜饭",
    "py": "Zhǔnbèi niányèfàn",
    "vn": "chuẩn bị cơm tất niên"
   }
  ],
  "patterns": [
   {
    "s": "一边吃年夜饭，一边……",
    "m": "Vừa ăn cơm tất niên vừa …"
   }
  ],
  "ex_zh": "除夕这天晚上，一家人一边吃年夜饭，一边看春晚。",
  "ex_py": "Chúxī zhè tiān wǎnshang, yì jiārén yìbiān chī niányèfàn, yìbiān kàn Chūnwǎn.",
  "ex_vn": "Tối hôm giao thừa, cả nhà vừa ăn cơm tất niên vừa xem Gala Xuân.",
  "exList": [
   {
    "zh": "除夕这天晚上，一家人一边吃年夜饭，一边看春晚。",
    "py": "Chúxī zhè tiān wǎnshang, yì jiārén yìbiān chī niányèfàn, yìbiān kàn Chūnwǎn.",
    "vn": "Tối hôm giao thừa, cả nhà vừa ăn cơm tất niên vừa xem Gala Xuân."
   },
   {
    "zh": "今年的年夜饭是爸爸做的，一共有十二个菜。",
    "py": "Jīnnián de niányèfàn shì bàba zuò de, yígòng yǒu shí èr gè cài.",
    "vn": "Cơm tất niên năm nay là bố nấu, tổng cộng mười hai món."
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
   },
   {
    "c": "饭",
    "p": "fàn",
    "type": "左右结构 · Trái-phải",
    "st": 7,
    "ord": "饣(thực) trái → 反(phản) phải",
    "rad": "饣 (thực – ăn, đồ ăn)",
    "mean": "cơm, bữa ăn",
    "tip": "饣(bộ ăn) + 反(gợi âm \"phàn\") → thứ để ĂN trong mỗi bữa = CƠM.",
    "cf": "饱 (bǎo – \"no\", cùng bộ 饣)",
    "w": "饭馆 / 米饭 / 饭店"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Dù bận đến đâu, tối giao thừa tôi đều về nhà ăn cơm tất niên.",
    "answer": "不管多忙，除夕晚上我都会回家吃年夜饭。",
    "answerPy": "Bùguǎn duō máng, Chúxī wǎnshang wǒ dōu huì huíjiā chī niányèfàn.",
    "note": "Ôn 不管……都…… (Bài 8 · điểm 1).",
    "pair": "不管……都……"
   },
   {
    "promptLang": "vi",
    "prompt": "Cơm tất niên nhà tôi năm sau phong phú hơn năm trước.",
    "answer": "我家的年夜饭一年比一年丰富。",
    "answerPy": "Wǒ jiā de niányèfàn yì nián bǐ yì nián fēngfù.",
    "note": "一年比一年 + Adj (Bài 13 · điểm 2).",
    "pair": "一年比一年 + Adj"
   }
  ]
 },
 {
  "n": 41,
  "zh": "回忆",
  "py": "huíyì",
  "pos": "Động từ",
  "vn": "nhớ lại, hồi tưởng; kỷ niệm",
  "hv": "hồi ức",
  "em": "💭",
  "lesson": 4,
  "explain": [
   "Nhớ lại chuyện đã qua; cũng dùng như danh từ: 美好的回忆 (kỷ niệm đẹp). Hay đi với 起: 回忆起童年."
  ],
  "usage": "回忆起 + N · 回忆过去 · 美好的回忆.",
  "collo": [
   "回忆起",
   "回忆过去",
   "美好的回忆",
   "回忆童年"
  ],
  "colloFull": [
   {
    "zh": "回忆起",
    "py": "Huíyì qǐ",
    "vn": "nhớ lại"
   },
   {
    "zh": "回忆过去",
    "py": "Huíyì guòqu",
    "vn": "hồi tưởng quá khứ"
   },
   {
    "zh": "美好的回忆",
    "py": "Měihǎo de huíyì",
    "vn": "kỷ niệm đẹp"
   },
   {
    "zh": "回忆童年",
    "py": "Huíyì tóngnián",
    "vn": "nhớ lại tuổi thơ"
   }
  ],
  "patterns": [
   {
    "s": "回忆 + 起 + N",
    "m": "Nhớ lại …"
   },
   {
    "s": "回忆 vs 记忆",
    "m": "回忆 = (hành động) nhớ lại / kỷ niệm; 记忆 = ký ức, trí nhớ"
   }
  ],
  "ex_zh": "每当回忆起童年，我最美好的记忆很多也发生在过年时。",
  "ex_py": "Měi dāng huíyì qǐ tóngnián, wǒ zuì měihǎo de jìyì hěn duō yě fāshēng zài guònián shí.",
  "ex_vn": "Mỗi khi nhớ lại tuổi thơ, rất nhiều ký ức đẹp nhất của tôi cũng diễn ra vào dịp Tết.",
  "exList": [
   {
    "zh": "每当回忆起童年，我最美好的记忆很多也发生在过年时。",
    "py": "Měi dāng huíyì qǐ tóngnián, wǒ zuì měihǎo de jìyì hěn duō yě fāshēng zài guònián shí.",
    "vn": "Mỗi khi nhớ lại tuổi thơ, rất nhiều ký ức đẹp nhất của tôi cũng diễn ra vào dịp Tết."
   },
   {
    "zh": "这些照片让我回忆起了大学生活。",
    "py": "Zhèxiē zhàopiàn ràng wǒ huíyì qǐ le dàxué shēnghuó.",
    "vn": "Những tấm ảnh này làm tôi nhớ lại thời sinh viên."
   }
  ],
  "hanzi": [
   {
    "c": "回",
    "p": "huí",
    "type": "象形字 · Chữ tượng hình",
    "st": 6,
    "ord": "sổ → ngang gập (khung ngoài) → sổ → ngang gập → ngang (口 bên trong) → ngang đóng khung ngoài",
    "rad": "囗 (vi – vây quanh)",
    "mean": "về; lần, vụ",
    "tip": "Hình vòng nước xoáy cuộn vào trong → quay về. Đã học 回 = về (回家 – HSK1); ở đây là lượng từ: 两回 = hai lần, 怎么回事 = chuyện gì vậy.",
    "cf": "四 sì — bên trong không phải 口",
    "w": "回 / 怎么回事 / 回家"
   },
   {
    "c": "忆",
    "p": "yì",
    "type": "左右结构 · Trái-phải (giản thể)",
    "st": 4,
    "ord": "忄 (tâm) trái → 乙 phải",
    "rad": "忄 (tâm – lòng)",
    "mean": "nhớ",
    "tip": "Bộ tâm 忄 (trong lòng) → giữ lại KÝ ỨC trong lòng, kết hợp 回(quay lại) thành 回忆 = NHỚ LẠI, HỒI TƯỞNG.",
    "cf": "亿 (yì – \"một trăm triệu\", bộ 亻\")",
    "w": "回忆 / 记忆 / 回忆录"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Mỗi khi nhớ lại những ngày tháng ấy, tôi đều thấy rất hạnh phúc.",
    "answer": "每当回忆起那段日子，我都觉得很幸福。",
    "answerPy": "Měi dāng huíyì qǐ nà duàn rìzi, wǒ dōu juéde hěn xìngfú.",
    "note": "每当……，都……; lượng từ 段 cho quãng thời gian.",
    "pair": "每当回忆起……"
   },
   {
    "promptLang": "vi",
    "prompt": "Tôi nhớ mãi mà thế nào cũng không nhớ ra hôm đó đã xảy ra chuyện gì.",
    "answer": "我回忆了半天，怎么也想不起来那天发生了什么。",
    "answerPy": "Wǒ huíyì le bàntiān, zěnme yě xiǎng bu qǐlai nàtiān fāshēng le shénme.",
    "note": "怎么也 + 想不起来 (Bài 13 · điểm 1).",
    "pair": "怎么也 + V不……"
   }
  ]
 },
 {
  "n": 42,
  "zh": "童年",
  "py": "tóngnián",
  "pos": "Danh từ",
  "vn": "tuổi thơ, thời thơ ấu",
  "hv": "đồng niên",
  "em": "🧒",
  "lesson": 4,
  "explain": [
   "Quãng đời lúc còn nhỏ. 童 = trẻ em (儿童)."
  ],
  "usage": "快乐的童年 · 童年生活 · 童年的记忆 · 回忆童年.",
  "collo": [
   "快乐的童年",
   "童年生活",
   "童年的记忆",
   "童年的朋友"
  ],
  "colloFull": [
   {
    "zh": "快乐的童年",
    "py": "Kuàilè de tóngnián",
    "vn": "tuổi thơ vui vẻ"
   },
   {
    "zh": "童年生活",
    "py": "Tóngnián shēnghuó",
    "vn": "cuộc sống thời thơ ấu"
   },
   {
    "zh": "童年的记忆",
    "py": "Tóngnián de jìyì",
    "vn": "ký ức tuổi thơ"
   },
   {
    "zh": "童年的朋友",
    "py": "Tóngnián de péngyou",
    "vn": "bạn thời thơ ấu"
   }
  ],
  "patterns": [
   {
    "s": "童年 + 的 + N",
    "m": "… thời thơ ấu"
   },
   {
    "s": "……是在 + nơi + 过的",
    "m": "Nhấn mạnh nơi chốn bằng 是……的"
   }
  ],
  "ex_zh": "每当回忆起童年，我最美好的记忆很多也发生在过年时。",
  "ex_py": "Měi dāng huíyì qǐ tóngnián, wǒ zuì měihǎo de jìyì hěn duō yě fāshēng zài guònián shí.",
  "ex_vn": "Mỗi khi nhớ lại tuổi thơ, rất nhiều ký ức đẹp nhất của tôi cũng diễn ra vào dịp Tết.",
  "exList": [
   {
    "zh": "每当回忆起童年，我最美好的记忆很多也发生在过年时。",
    "py": "Měi dāng huíyì qǐ tóngnián, wǒ zuì měihǎo de jìyì hěn duō yě fāshēng zài guònián shí.",
    "vn": "Mỗi khi nhớ lại tuổi thơ, rất nhiều ký ức đẹp nhất của tôi cũng diễn ra vào dịp Tết."
   },
   {
    "zh": "我的童年是在农村过的，每天都很快乐。",
    "py": "Wǒ de tóngnián shì zài nóngcūn guò de, měitiān dōu hěn kuàilè.",
    "vn": "Tuổi thơ của tôi trôi qua ở nông thôn, ngày nào cũng vui."
   }
  ],
  "hanzi": [
   {
    "c": "童",
    "p": "tóng",
    "type": "上下结构 · Trên-dưới",
    "st": 12,
    "ord": "立 trên → 里 dưới",
    "rad": "立 (lập)",
    "mean": "trẻ",
    "tip": "立 + 里 → nghĩa cổ là nô lệ trẻ, nay chỉ TRẺ EM (đồng). 儿童 = nhi đồng.",
    "cf": "重 (zhòng – nặng, Bài 14)",
    "w": "儿童 / 童话 / 童年"
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
    "prompt": "Tuổi thơ của tôi là ở cùng với bà nội.",
    "answer": "我的童年是和奶奶一起过的。",
    "answerPy": "Wǒ de tóngnián shì hé nǎinai yìqǐ guò de.",
    "note": "Câu 是……的 nhấn mạnh (HSK 2/3).",
    "pair": "是……的"
   },
   {
    "promptLang": "vi",
    "prompt": "Tuổi càng lớn, tôi càng nhớ tuổi thơ.",
    "answer": "随着年龄的增长，我越来越想念童年。",
    "answerPy": "Suízhe niánlíng de zēngzhǎng, wǒ yuèláiyuè xiǎngniàn tóngnián.",
    "note": "Ôn 随着 (Bài 1 · điểm 3).",
    "pair": "随着……，越来越……"
   }
  ]
 },
 {
  "n": 43,
  "zh": "记忆",
  "py": "jìyì",
  "pos": "Danh từ",
  "vn": "ký ức, trí nhớ",
  "hv": "ký ức",
  "em": "🧠",
  "lesson": 4,
  "explain": [
   "Những gì còn nhớ trong đầu; 记忆力 = trí nhớ (khả năng nhớ)."
  ],
  "usage": "美好的记忆 · 童年的记忆 · 记忆力 · 留下……的记忆.",
  "collo": [
   "美好的记忆",
   "童年的记忆",
   "记忆力",
   "留下记忆"
  ],
  "colloFull": [
   {
    "zh": "美好的记忆",
    "py": "Měihǎo de jìyì",
    "vn": "ký ức đẹp"
   },
   {
    "zh": "童年的记忆",
    "py": "Tóngnián de jìyì",
    "vn": "ký ức tuổi thơ"
   },
   {
    "zh": "记忆力",
    "py": "Jìyìlì",
    "vn": "trí nhớ"
   },
   {
    "zh": "留下记忆",
    "py": "Liúxià jìyì",
    "vn": "để lại ký ức"
   }
  ],
  "patterns": [
   {
    "s": "给 + người + 留下 + ……的记忆",
    "m": "Để lại ký ức … cho ai"
   },
   {
    "s": "记忆力 + 好 / 差",
    "m": "Trí nhớ tốt / kém"
   }
  ],
  "ex_zh": "每当回忆起童年，我最美好的记忆很多也发生在过年时。",
  "ex_py": "Měi dāng huíyì qǐ tóngnián, wǒ zuì měihǎo de jìyì hěn duō yě fāshēng zài guònián shí.",
  "ex_vn": "Mỗi khi nhớ lại tuổi thơ, rất nhiều ký ức đẹp nhất của tôi cũng diễn ra vào dịp Tết.",
  "exList": [
   {
    "zh": "每当回忆起童年，我最美好的记忆很多也发生在过年时。",
    "py": "Měi dāng huíyì qǐ tóngnián, wǒ zuì měihǎo de jìyì hěn duō yě fāshēng zài guònián shí.",
    "vn": "Mỗi khi nhớ lại tuổi thơ, rất nhiều ký ức đẹp nhất của tôi cũng diễn ra vào dịp Tết."
   },
   {
    "zh": "那次旅行给我留下了很深的记忆。",
    "py": "Nà cì lǚxíng gěi wǒ liúxià le hěn shēn de jìyì.",
    "vn": "Chuyến du lịch đó để lại cho tôi ký ức rất sâu đậm."
   }
  ],
  "hanzi": [
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
   },
   {
    "c": "忆",
    "p": "yì",
    "type": "左右结构 · Trái-phải (giản thể)",
    "st": 4,
    "ord": "忄 (tâm) trái → 乙 phải",
    "rad": "忄 (tâm – lòng)",
    "mean": "nhớ",
    "tip": "Bộ tâm 忄 (trong lòng) → giữ lại KÝ ỨC trong lòng, kết hợp 回(quay lại) thành 回忆 = NHỚ LẠI, HỒI TƯỞNG.",
    "cf": "亿 (yì – \"một trăm triệu\", bộ 亻\")",
    "w": "回忆 / 记忆 / 回忆录"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Đây là ký ức đẹp nhất của tôi.",
    "answer": "这是我最美好的记忆。",
    "answerPy": "Zhè shì wǒ zuì měihǎo de jìyì.",
    "note": "最 + 美好 + 的 + 记忆.",
    "pair": "最……的记忆"
   },
   {
    "promptLang": "vi",
    "prompt": "Trí nhớ của ông nội ngày một kém đi.",
    "answer": "爷爷的记忆力一天比一天差。",
    "answerPy": "Yéye de jìyìlì yì tiān bǐ yì tiān chà.",
    "note": "一天比一天 + Adj (Bài 13 · điểm 2).",
    "pair": "一天比一天 + Adj"
   }
  ]
 },
 {
  "n": 44,
  "zh": "已",
  "py": "yǐ",
  "pos": "Phó từ",
  "vn": "đã (văn viết của 已经)",
  "hv": "dĩ",
  "em": "✅",
  "lesson": 4,
  "explain": [
   "Văn viết của 已经; một chữ, đứng trước động từ hoặc cụm từ: 已人到中年 (đã bước vào tuổi trung niên), 已在中国生活二十年了."
  ],
  "usage": "已 + V / cụm từ · 早已 (từ lâu đã).",
  "collo": [
   "已人到中年",
   "早已",
   "已过去十年",
   "已开始"
  ],
  "colloFull": [
   {
    "zh": "已人到中年",
    "py": "Yǐ rén dào zhōngnián",
    "vn": "đã đến tuổi trung niên"
   },
   {
    "zh": "早已",
    "py": "Zǎoyǐ",
    "vn": "từ lâu đã"
   },
   {
    "zh": "已过去十年",
    "py": "Yǐ guòqu shí nián",
    "vn": "đã qua mười năm"
   },
   {
    "zh": "已开始",
    "py": "Yǐ kāishǐ",
    "vn": "đã bắt đầu"
   }
  ],
  "patterns": [
   {
    "s": "已 + V / cụm số lượng",
    "m": "Đã … (văn viết)"
   },
   {
    "s": "已 = 已经",
    "m": "已经 khẩu ngữ, 已 văn viết"
   }
  ],
  "ex_zh": "虽然现在已人到中年，离开了家，但是春节仍然是我最喜欢的节日，过年时也更想父母、兄弟姐妹。",
  "ex_py": "Suīrán xiànzài yǐ rén dào zhōngnián, líkāi le jiā, dànshì Chūnjié réngrán shì wǒ zuì xǐhuan de jiérì, guònián shí yě gèng xiǎng fùmǔ, xiōngdì jiěmèi.",
  "ex_vn": "Tuy giờ đã bước vào tuổi trung niên, đã rời xa nhà, nhưng Tết vẫn là ngày lễ tôi thích nhất, đến Tết lại càng nhớ bố mẹ, anh chị em.",
  "exList": [
   {
    "zh": "虽然现在已人到中年，离开了家，但是春节仍然是我最喜欢的节日，过年时也更想父母、兄弟姐妹。",
    "py": "Suīrán xiànzài yǐ rén dào zhōngnián, líkāi le jiā, dànshì Chūnjié réngrán shì wǒ zuì xǐhuan de jiérì, guònián shí yě gèng xiǎng fùmǔ, xiōngdì jiěmèi.",
    "vn": "Tuy giờ đã bước vào tuổi trung niên, đã rời xa nhà, nhưng Tết vẫn là ngày lễ tôi thích nhất, đến Tết lại càng nhớ bố mẹ, anh chị em."
   },
   {
    "zh": "会议已开始，请大家把手机关上。",
    "py": "Huìyì yǐ kāishǐ, qǐng dàjiā bǎ shǒujī guānshàng.",
    "vn": "Cuộc họp đã bắt đầu, mọi người vui lòng tắt điện thoại."
   }
  ],
  "hanzi": [
   {
    "c": "已",
    "p": "yǐ",
    "type": "象形字 · Chữ tượng hình",
    "st": 3,
    "ord": "𠃌 → 乚",
    "rad": "己 (kỷ)",
    "mean": "đã, xong",
    "tip": "Rất giống 己 (bản thân) và 巳: 已 hở nửa nét trên.",
    "cf": "己 (jǐ – bản thân), 巳 (sì)",
    "w": "已经 / 已"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Anh ấy rời quê đã ba mươi năm, nhưng vẫn nói tiếng quê.",
    "answer": "他离开家乡已三十年，但仍然说家乡话。",
    "answerPy": "Tā líkāi jiāxiāng yǐ sānshí nián, dàn réngrán shuō jiāxiāng huà.",
    "note": "已 + thời đoạn; 仍然 (từ mới).",
    "pair": "已……，但仍然……"
   },
   {
    "promptLang": "vi",
    "prompt": "Mùa thu đã đến, trời ngày một lạnh.",
    "answer": "秋天已到来，天气一天比一天冷。",
    "answerPy": "Qiūtiān yǐ dàolái, tiānqì yì tiān bǐ yì tiān lěng.",
    "note": "已 + 到来; 一天比一天 + Adj (Bài 13 · điểm 2).",
    "pair": "已到来"
   }
  ]
 },
 {
  "n": 45,
  "zh": "中年",
  "py": "zhōngnián",
  "pos": "Danh từ",
  "vn": "tuổi trung niên",
  "hv": "trung niên",
  "em": "🧔",
  "lesson": 4,
  "explain": [
   "Độ tuổi khoảng 40–60, giữa thanh niên và tuổi già. 人到中年 = bước vào tuổi trung niên."
  ],
  "usage": "人到中年 · 中年人 · 中年男人 / 女人.",
  "collo": [
   "人到中年",
   "中年人",
   "中年男人",
   "中年以后"
  ],
  "colloFull": [
   {
    "zh": "人到中年",
    "py": "Rén dào zhōngnián",
    "vn": "bước vào tuổi trung niên"
   },
   {
    "zh": "中年人",
    "py": "Zhōngnián rén",
    "vn": "người trung niên"
   },
   {
    "zh": "中年男人",
    "py": "Zhōngnián nánrén",
    "vn": "người đàn ông trung niên"
   },
   {
    "zh": "中年以后",
    "py": "Zhōngnián yǐhòu",
    "vn": "sau tuổi trung niên"
   }
  ],
  "patterns": [
   {
    "s": "人到中年，……",
    "m": "Đến tuổi trung niên thì …"
   }
  ],
  "ex_zh": "虽然现在已人到中年，离开了家，但是春节仍然是我最喜欢的节日，过年时也更想父母、兄弟姐妹。",
  "ex_py": "Suīrán xiànzài yǐ rén dào zhōngnián, líkāi le jiā, dànshì Chūnjié réngrán shì wǒ zuì xǐhuan de jiérì, guònián shí yě gèng xiǎng fùmǔ, xiōngdì jiěmèi.",
  "ex_vn": "Tuy giờ đã bước vào tuổi trung niên, đã rời xa nhà, nhưng Tết vẫn là ngày lễ tôi thích nhất, đến Tết lại càng nhớ bố mẹ, anh chị em.",
  "exList": [
   {
    "zh": "虽然现在已人到中年，离开了家，但是春节仍然是我最喜欢的节日，过年时也更想父母、兄弟姐妹。",
    "py": "Suīrán xiànzài yǐ rén dào zhōngnián, líkāi le jiā, dànshì Chūnjié réngrán shì wǒ zuì xǐhuan de jiérì, guònián shí yě gèng xiǎng fùmǔ, xiōngdì jiěmèi.",
    "vn": "Tuy giờ đã bước vào tuổi trung niên, đã rời xa nhà, nhưng Tết vẫn là ngày lễ tôi thích nhất, đến Tết lại càng nhớ bố mẹ, anh chị em."
   },
   {
    "zh": "那位中年人是我们的新老师。",
    "py": "Nà wèi zhōngnián rén shì wǒmen de xīn lǎoshī.",
    "vn": "Người trung niên kia là thầy giáo mới của chúng tôi."
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
    "prompt": "Bước vào tuổi trung niên, anh ấy càng coi trọng sức khỏe hơn.",
    "answer": "人到中年，他更重视身体健康了。",
    "answerPy": "Rén dào zhōngnián, tā gèng zhòngshì shēntǐ jiànkāng le.",
    "note": "重视 (Bài 5) + 了 chỉ thay đổi.",
    "pair": "人到中年，……"
   },
   {
    "promptLang": "vi",
    "prompt": "Người đàn ông trung niên đó là nhân viên khu du lịch.",
    "answer": "那个中年男人是景区的工作人员。",
    "answerPy": "Nàge zhōngnián nánrén shì jǐngqū de gōngzuò rényuán.",
    "note": "景区, 工作人员 (từ mới bài này).",
    "pair": "……是……人员"
   }
  ]
 },
 {
  "n": 46,
  "zh": "仍然",
  "py": "réngrán",
  "pos": "Phó từ",
  "vn": "vẫn, vẫn còn",
  "hv": "nhưng nhiên",
  "em": "🔁",
  "lesson": 4,
  "explain": [
   "Vẫn như cũ, không thay đổi (văn viết hơn 还是 / 还). Hay đi sau 虽然 / 尽管 / 即使."
  ],
  "usage": "仍然是 · 仍然记得 · 仍然坚持 · 虽然……但仍然…….",
  "collo": [
   "仍然是",
   "仍然记得",
   "仍然坚持",
   "仍然没变"
  ],
  "colloFull": [
   {
    "zh": "仍然是",
    "py": "Réngrán shì",
    "vn": "vẫn là"
   },
   {
    "zh": "仍然记得",
    "py": "Réngrán jìde",
    "vn": "vẫn nhớ"
   },
   {
    "zh": "仍然坚持",
    "py": "Réngrán jiānchí",
    "vn": "vẫn kiên trì"
   },
   {
    "zh": "仍然没变",
    "py": "Réngrán méi biàn",
    "vn": "vẫn không thay đổi"
   }
  ],
  "patterns": [
   {
    "s": "虽然 / 尽管……，(但是) + 仍然……",
    "m": "Tuy … nhưng vẫn …"
   },
   {
    "s": "仍然 ≈ 还是",
    "m": "仍然 văn viết hơn"
   }
  ],
  "ex_zh": "虽然现在已人到中年，离开了家，但是春节仍然是我最喜欢的节日，过年时也更想父母、兄弟姐妹。",
  "ex_py": "Suīrán xiànzài yǐ rén dào zhōngnián, líkāi le jiā, dànshì Chūnjié réngrán shì wǒ zuì xǐhuan de jiérì, guònián shí yě gèng xiǎng fùmǔ, xiōngdì jiěmèi.",
  "ex_vn": "Tuy giờ đã bước vào tuổi trung niên, đã rời xa nhà, nhưng Tết vẫn là ngày lễ tôi thích nhất, đến Tết lại càng nhớ bố mẹ, anh chị em.",
  "exList": [
   {
    "zh": "虽然现在已人到中年，离开了家，但是春节仍然是我最喜欢的节日，过年时也更想父母、兄弟姐妹。",
    "py": "Suīrán xiànzài yǐ rén dào zhōngnián, líkāi le jiā, dànshì Chūnjié réngrán shì wǒ zuì xǐhuan de jiérì, guònián shí yě gèng xiǎng fùmǔ, xiōngdì jiěmèi.",
    "vn": "Tuy giờ đã bước vào tuổi trung niên, đã rời xa nhà, nhưng Tết vẫn là ngày lễ tôi thích nhất, đến Tết lại càng nhớ bố mẹ, anh chị em."
   },
   {
    "zh": "十年过去了，他仍然住在那个小区。",
    "py": "Shí nián guòqu le, tā réngrán zhù zài nàge xiǎoqū.",
    "vn": "Mười năm trôi qua, anh ấy vẫn sống ở khu nhà đó."
   }
  ],
  "hanzi": [
   {
    "c": "仍",
    "p": "réng",
    "type": "左右结构 · Trái-phải",
    "st": 4,
    "ord": "亻 trái → 乃 phải",
    "rad": "亻 (nhân)",
    "mean": "vẫn",
    "tip": "Người 亻 + 乃 → VẪN, như cũ. Phân biệt với 扔 (rēng – vứt, Bài 14, bộ 扌).",
    "cf": "扔 (rēng – vứt)",
    "w": "仍然 / 仍"
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
    "prompt": "Dù tốt nghiệp đã nhiều năm, tôi vẫn nhớ các bạn học thời đại học.",
    "answer": "即使毕业很多年了，我也仍然记得大学时的同学。",
    "answerPy": "Jíshǐ bìyè hěn duō nián le, wǒ yě réngrán jìde dàxué shí de tóngxué.",
    "note": "Ôn 即使……也…… (Bài 11 · điểm 1).",
    "pair": "即使……也仍然……"
   },
   {
    "promptLang": "vi",
    "prompt": "Mặc dù trời mưa, khu du lịch vẫn rất đông người.",
    "answer": "尽管下雨，景区里仍然有很多人。",
    "answerPy": "Jǐnguǎn xiàyǔ, jǐngqū lǐ réngrán yǒu hěn duō rén.",
    "note": "Ôn 尽管…… (Bài 9 · điểm 2).",
    "pair": "尽管……，仍然……"
   }
  ]
 },
 {
  "n": 47,
  "zh": "兄弟",
  "py": "xiōngdì",
  "pos": "Danh từ",
  "vn": "anh em (trai)",
  "hv": "huynh đệ",
  "em": "👬",
  "lesson": 4,
  "explain": [
   "Anh và em trai; 兄弟姐妹 = anh chị em. 兄弟俩 = hai anh em."
  ],
  "usage": "兄弟姐妹 · 兄弟俩 · 亲兄弟 · 好兄弟.",
  "collo": [
   "兄弟姐妹",
   "兄弟俩",
   "亲兄弟",
   "好兄弟"
  ],
  "colloFull": [
   {
    "zh": "兄弟姐妹",
    "py": "Xiōngdì jiěmèi",
    "vn": "anh chị em"
   },
   {
    "zh": "兄弟俩",
    "py": "Xiōngdì liǎ",
    "vn": "hai anh em"
   },
   {
    "zh": "亲兄弟",
    "py": "Qīn xiōngdì",
    "vn": "anh em ruột"
   },
   {
    "zh": "好兄弟",
    "py": "Hǎo xiōngdì",
    "vn": "anh em tốt, bạn thân"
   }
  ],
  "patterns": [
   {
    "s": "兄弟姐妹",
    "m": "Anh chị em"
   },
   {
    "s": "兄弟 + 俩",
    "m": "Hai anh em"
   }
  ],
  "ex_zh": "虽然现在已人到中年，离开了家，但是春节仍然是我最喜欢的节日，过年时也更想父母、兄弟姐妹。",
  "ex_py": "Suīrán xiànzài yǐ rén dào zhōngnián, líkāi le jiā, dànshì Chūnjié réngrán shì wǒ zuì xǐhuan de jiérì, guònián shí yě gèng xiǎng fùmǔ, xiōngdì jiěmèi.",
  "ex_vn": "Tuy giờ đã bước vào tuổi trung niên, đã rời xa nhà, nhưng Tết vẫn là ngày lễ tôi thích nhất, đến Tết lại càng nhớ bố mẹ, anh chị em.",
  "exList": [
   {
    "zh": "虽然现在已人到中年，离开了家，但是春节仍然是我最喜欢的节日，过年时也更想父母、兄弟姐妹。",
    "py": "Suīrán xiànzài yǐ rén dào zhōngnián, líkāi le jiā, dànshì Chūnjié réngrán shì wǒ zuì xǐhuan de jiérì, guònián shí yě gèng xiǎng fùmǔ, xiōngdì jiěmèi.",
    "vn": "Tuy giờ đã bước vào tuổi trung niên, đã rời xa nhà, nhưng Tết vẫn là ngày lễ tôi thích nhất, đến Tết lại càng nhớ bố mẹ, anh chị em."
   },
   {
    "zh": "他们兄弟三个，一个比一个高。",
    "py": "Tāmen xiōngdì sān gè, yí gè bǐ yí gè gāo.",
    "vn": "Ba anh em nhà họ, người sau cao hơn người trước."
   }
  ],
  "hanzi": [
   {
    "c": "兄",
    "p": "xiōng",
    "type": "会意字 · Chữ hội ý",
    "st": 5,
    "ord": "口 → 儿",
    "rad": "儿 (nhân – người)",
    "mean": "anh trai",
    "tip": "Cái miệng (口) to đặt trên người (儿) → người anh cả, người thay cả nhà lên tiếng → anh trai — 兄弟 (anh em).",
    "cf": "只 zhǐ (chỉ) — dưới là 八; 况 kuàng (tình hình) — thêm 冫; 祝 zhù (chúc) — thêm 礻",
    "w": "兄弟 / 兄弟姐妹 / 师兄"
   },
   {
    "c": "弟",
    "p": "dì",
    "type": "独体字 · Chữ đơn",
    "st": 7,
    "ord": "丷 trên → 弓(biến thể) giữa → 丨 nét sổ xuyên",
    "rad": "弓 (cung – cây cung)",
    "mean": "em trai",
    "tip": "Hình sợi dây quấn quanh cây cung theo thứ tự trước sau, tượng trưng cho thứ bậc dưới trong nhà = EM TRAI.",
    "cf": "第 (dì – \"thứ tự\", thêm bộ 竹 phía trên)",
    "w": "弟弟 / 兄弟 / 弟子"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Bạn có anh chị em không?",
    "answer": "你有兄弟姐妹吗？",
    "answerPy": "Nǐ yǒu xiōngdì jiěmèi ma?",
    "note": "Câu hỏi 吗 (HSK 1).",
    "pair": "有……吗？"
   },
   {
    "promptLang": "vi",
    "prompt": "Hai anh em họ tuy tính cách khác nhau nhưng tình cảm rất tốt.",
    "answer": "他们兄弟俩虽然性格不同，但是感情很好。",
    "answerPy": "Tāmen xiōngdì liǎ suīrán xìnggé bùtóng, dànshì gǎnqíng hěn hǎo.",
    "note": "Ôn 虽然……但是…… (HSK 3).",
    "pair": "虽然……但是……"
   }
  ]
 },
 {
  "n": 48,
  "zh": "元宵节",
  "py": "Yuánxiāojié",
  "pos": "Danh từ riêng",
  "vn": "Tết Nguyên tiêu (rằm tháng Giêng)",
  "hv": "Nguyên tiêu tiết",
  "em": "🏮",
  "lesson": 4,
  "explain": [
   "Rằm tháng Giêng âm lịch — ngày cuối của dịp Tết; người Trung Quốc ăn bánh trôi 元宵 / 汤圆 và đi xem đèn lồng."
  ],
  "usage": "过元宵节 · 元宵节吃元宵 · 元宵节看灯.",
  "collo": [
   "过元宵节",
   "吃元宵",
   "元宵节看灯",
   "元宵节晚上"
  ],
  "colloFull": [
   {
    "zh": "过元宵节",
    "py": "Guò Yuánxiāojié",
    "vn": "đón Tết Nguyên tiêu"
   },
   {
    "zh": "吃元宵",
    "py": "Chī yuánxiāo",
    "vn": "ăn bánh trôi"
   },
   {
    "zh": "元宵节看灯",
    "py": "Yuánxiāojié kàn dēng",
    "vn": "Nguyên tiêu xem đèn lồng"
   },
   {
    "zh": "元宵节晚上",
    "py": "Yuánxiāojié wǎnshang",
    "vn": "tối Nguyên tiêu"
   }
  ],
  "patterns": [
   {
    "s": "元宵节 + 吃元宵",
    "m": "Tết Nguyên tiêu ăn bánh trôi"
   }
  ],
  "ex_zh": "中国有很多节日，比如春节、元宵节、端午节、中秋节等。",
  "ex_py": "Zhōngguó yǒu hěn duō jiérì, bǐrú Chūnjié, Yuánxiāojié, Duānwǔjié, Zhōngqiūjié děng.",
  "ex_vn": "Trung Quốc có rất nhiều ngày lễ, như Tết Nguyên đán, Tết Nguyên tiêu, Tết Đoan ngọ, Tết Trung thu…",
  "exList": [
   {
    "zh": "中国有很多节日，比如春节、元宵节、端午节、中秋节等。",
    "py": "Zhōngguó yǒu hěn duō jiérì, bǐrú Chūnjié, Yuánxiāojié, Duānwǔjié, Zhōngqiūjié děng.",
    "vn": "Trung Quốc có rất nhiều ngày lễ, như Tết Nguyên đán, Tết Nguyên tiêu, Tết Đoan ngọ, Tết Trung thu…"
   },
   {
    "zh": "元宵节晚上，大家一起去看灯、吃元宵。",
    "py": "Yuánxiāojié wǎnshang, dàjiā yìqǐ qù kàn dēng, chī yuánxiāo.",
    "vn": "Tối Nguyên tiêu, mọi người cùng đi xem đèn, ăn bánh trôi."
   }
  ],
  "hanzi": [
   {
    "c": "元",
    "p": "yuán",
    "type": "独体字 · Chữ đơn",
    "st": 4,
    "ord": "二 trên → 儿 dưới",
    "rad": "儿 (nhân đi)",
    "mean": "đầu tiên; đồng (tiền)",
    "tip": "Chữ cổ chỉ CÁI ĐẦU, phần khởi đầu → mở rộng nghĩa \"đơn vị cơ bản\" và dùng làm đơn vị TIỀN TỆ.",
    "cf": "无 (wú – \"không có\")",
    "w": "元 / 一百元 / 多少元"
   },
   {
    "c": "宵",
    "p": "xiāo",
    "type": "形声字 · Chữ hình thanh",
    "st": 10,
    "ord": "宀 → 肖",
    "rad": "宀 (miên – mái nhà)",
    "mean": "đêm",
    "tip": "Mái nhà (宀) + 肖 (xiāo, gợi âm): lúc mọi người ở dưới mái nhà là ban đêm → đêm — 元宵 (đêm rằm đầu năm), 通宵 (thâu đêm).",
    "cf": "消 xiāo (tiêu) — bên trái là 氵; 霄 xiāo (trời cao) — trên là 雨",
    "w": "元宵节 / 元宵 / 通宵"
   },
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
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Tết Nguyên tiêu là ngày rằm tháng Giêng âm lịch.",
    "answer": "元宵节是农历正月十五。",
    "answerPy": "Yuánxiāojié shì nónglì zhēngyuè shíwǔ.",
    "note": "农历 = âm lịch; 正月 = tháng Giêng.",
    "pair": "……是农历……"
   },
   {
    "promptLang": "vi",
    "prompt": "Tết Nguyên tiêu năm nay tôi không chỉ ăn bánh trôi mà còn đi xem đèn lồng.",
    "answer": "今年元宵节我不光吃了元宵，还去看了灯。",
    "answerPy": "Jīnnián Yuánxiāojié wǒ bùguāng chī le yuánxiāo, hái qù kàn le dēng.",
    "note": "Ôn 不光……还…… (Bài 3 · điểm 2).",
    "pair": "不光……还……"
   }
  ]
 },
 {
  "n": 49,
  "zh": "端午节",
  "py": "Duānwǔjié",
  "pos": "Danh từ riêng",
  "vn": "Tết Đoan ngọ (mùng 5 tháng 5 âm lịch)",
  "hv": "Đoan ngọ tiết",
  "em": "🐉",
  "lesson": 4,
  "explain": [
   "Mùng 5 tháng 5 âm lịch; ở Trung Quốc người ta ăn 粽子 (bánh tro, bánh ú) và xem đua thuyền rồng (龙舟比赛)."
  ],
  "usage": "过端午节 · 端午节吃粽子 · 端午节假期.",
  "collo": [
   "过端午节",
   "吃粽子",
   "端午节假期",
   "龙舟比赛"
  ],
  "colloFull": [
   {
    "zh": "过端午节",
    "py": "Guò Duānwǔjié",
    "vn": "đón Tết Đoan ngọ"
   },
   {
    "zh": "吃粽子",
    "py": "Chī zòngzi",
    "vn": "ăn bánh tro"
   },
   {
    "zh": "端午节假期",
    "py": "Duānwǔjié jiàqī",
    "vn": "kỳ nghỉ Đoan ngọ"
   },
   {
    "zh": "龙舟比赛",
    "py": "Lóngzhōu bǐsài",
    "vn": "đua thuyền rồng"
   }
  ],
  "patterns": [
   {
    "s": "端午节 + 吃粽子",
    "m": "Tết Đoan ngọ ăn bánh tro"
   }
  ],
  "ex_zh": "中国有很多节日，比如春节、元宵节、端午节、中秋节等。",
  "ex_py": "Zhōngguó yǒu hěn duō jiérì, bǐrú Chūnjié, Yuánxiāojié, Duānwǔjié, Zhōngqiūjié děng.",
  "ex_vn": "Trung Quốc có rất nhiều ngày lễ, như Tết Nguyên đán, Tết Nguyên tiêu, Tết Đoan ngọ, Tết Trung thu…",
  "exList": [
   {
    "zh": "中国有很多节日，比如春节、元宵节、端午节、中秋节等。",
    "py": "Zhōngguó yǒu hěn duō jiérì, bǐrú Chūnjié, Yuánxiāojié, Duānwǔjié, Zhōngqiūjié děng.",
    "vn": "Trung Quốc có rất nhiều ngày lễ, như Tết Nguyên đán, Tết Nguyên tiêu, Tết Đoan ngọ, Tết Trung thu…"
   },
   {
    "zh": "端午节的时候，人们会吃粽子、看龙舟比赛。",
    "py": "Duānwǔjié de shíhou, rénmen huì chī zòngzi, kàn lóngzhōu bǐsài.",
    "vn": "Dịp Tết Đoan ngọ, mọi người ăn bánh tro, xem đua thuyền rồng."
   }
  ],
  "hanzi": [
   {
    "c": "端",
    "p": "duān",
    "type": "形声字 · Chữ hình thanh",
    "st": 14,
    "ord": "立 → 山 → 而",
    "rad": "立 (lập – đứng)",
    "mean": "đầu, mút; ngay ngắn; bưng",
    "tip": "Đứng (立) thẳng + 耑 (duān, gợi âm, hình mầm cây mới nhú) → ngay ngắn, đầu mút — 端午 (Đoan ngọ), 端菜 (bưng thức ăn).",
    "cf": "瑞 ruì (điềm lành) — bên trái là 王; 喘 chuǎn (thở dốc) — bên trái là 口",
    "w": "端午节 / 端菜 / 开端"
   },
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
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Ở Việt Nam, Tết Đoan ngọ người ta ăn hoa quả, uống rượu nếp.",
    "answer": "在越南，端午节人们吃水果、喝米酒。",
    "answerPy": "Zài Yuènán, Duānwǔjié rénmen chī shuǐguǒ, hē mǐ jiǔ.",
    "note": "Giới thiệu phong tục nước mình.",
    "pair": "在越南，……"
   },
   {
    "promptLang": "vi",
    "prompt": "Tết Đoan ngọ được nghỉ khoảng ba ngày.",
    "answer": "端午节大约放三天假。",
    "answerPy": "Duānwǔjié dàyuē fàng sān tiān jiǎ.",
    "note": "大约 + số (Bài 13 · điểm 3); 放假 là từ ly hợp: 放三天假.",
    "pair": "大约 + số"
   }
  ]
 },
 {
  "n": 50,
  "zh": "除夕",
  "py": "Chúxī",
  "pos": "Danh từ riêng",
  "vn": "đêm giao thừa (ngày 30 Tết)",
  "hv": "trừ tịch",
  "em": "🎆",
  "lesson": 4,
  "explain": [
   "Ngày / đêm cuối cùng của năm âm lịch: cả nhà ăn cơm tất niên (年夜饭), xem Gala Xuân (春晚), đón giao thừa."
  ],
  "usage": "除夕晚上 · 除夕夜 · 过除夕.",
  "collo": [
   "除夕晚上",
   "除夕夜",
   "过除夕",
   "除夕那天"
  ],
  "colloFull": [
   {
    "zh": "除夕晚上",
    "py": "Chúxī wǎnshang",
    "vn": "tối giao thừa"
   },
   {
    "zh": "除夕夜",
    "py": "Chúxī yè",
    "vn": "đêm giao thừa"
   },
   {
    "zh": "过除夕",
    "py": "Guò Chúxī",
    "vn": "đón giao thừa"
   },
   {
    "zh": "除夕那天",
    "py": "Chúxī nàtiān",
    "vn": "hôm giao thừa"
   }
  ],
  "patterns": [
   {
    "s": "除夕 + 这天 / 晚上",
    "m": "Hôm / tối giao thừa"
   }
  ],
  "ex_zh": "除夕这天晚上，一家人一边吃年夜饭，一边看春晚。",
  "ex_py": "Chúxī zhè tiān wǎnshang, yì jiārén yìbiān chī niányèfàn, yìbiān kàn Chūnwǎn.",
  "ex_vn": "Tối hôm giao thừa, cả nhà vừa ăn cơm tất niên vừa xem Gala Xuân.",
  "exList": [
   {
    "zh": "除夕这天晚上，一家人一边吃年夜饭，一边看春晚。",
    "py": "Chúxī zhè tiān wǎnshang, yì jiārén yìbiān chī niányèfàn, yìbiān kàn Chūnwǎn.",
    "vn": "Tối hôm giao thừa, cả nhà vừa ăn cơm tất niên vừa xem Gala Xuân."
   },
   {
    "zh": "除夕夜，到处都很热闹。",
    "py": "Chúxī yè, dàochù dōu hěn rènao.",
    "vn": "Đêm giao thừa, chỗ nào cũng náo nhiệt."
   }
  ],
  "hanzi": [
   {
    "c": "除",
    "p": "chú",
    "type": "形声字 · Chữ hình thanh",
    "st": 9,
    "ord": "阝 → 余",
    "rad": "阝 (phụ – gò đất, đứng bên trái)",
    "mean": "bỏ đi, loại trừ",
    "tip": "阝 (bậc thềm) + 余 (chỉ âm): dọn bỏ bậc thềm cũ → bỏ đi, trừ ra. 除了 = trừ… ra.",
    "cf": "院 yuàn (医院) — cũng có 阝 bên trái",
    "w": "除了"
   },
   {
    "c": "夕",
    "p": "xī",
    "type": "象形字 · Chữ tượng hình",
    "st": 3,
    "ord": "丿 → ㇇ → 丶",
    "rad": "夕 (tịch – chiều tối)",
    "mean": "chiều tối, đêm",
    "tip": "Hình vầng trăng khuyết vừa mọc (giống 月 nhưng thiếu nét) → chiều tối — 除夕 (đêm cuối năm, giao thừa), 七夕 (Thất tịch).",
    "cf": "多 duō (nhiều) — hai chữ 夕 chồng lên nhau; 歹 dǎi (xấu) — trên có thêm nét ngang",
    "w": "除夕 / 七夕 / 夕阳"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Tối giao thừa cả nhà quây quần bên nhau, vừa ăn cơm vừa trò chuyện.",
    "answer": "除夕晚上一家人在一起，一边吃饭一边聊天。",
    "answerPy": "Chúxī wǎnshang yì jiārén zài yìqǐ, yìbiān chīfàn yìbiān liáotiān.",
    "note": "一边……一边…… (HSK 2/3).",
    "pair": "一边……一边……"
   },
   {
    "promptLang": "vi",
    "prompt": "Đúng không giờ đêm giao thừa, mọi người liền chúc nhau năm mới vui vẻ.",
    "answer": "除夕零点一到，大家就互相祝福新年快乐。",
    "answerPy": "Chúxī língdiǎn yí dào, dàjiā jiù hùxiāng zhùfú xīnnián kuàilè.",
    "note": "一……就…… (HSK 3).",
    "pair": "一……就……"
   }
  ]
 },
 {
  "n": 51,
  "zh": "春晚",
  "py": "Chūnwǎn",
  "pos": "Danh từ riêng",
  "vn": "Gala Xuân (chương trình văn nghệ đêm giao thừa)",
  "hv": "xuân vãn",
  "em": "📺",
  "lesson": 4,
  "explain": [
   "Viết tắt của 春节联欢晚会 — chương trình văn nghệ truyền hình đêm giao thừa; xem 春晚 là “truyền thống mới” của nhiều gia đình Trung Quốc."
  ],
  "usage": "看春晚 · 春晚节目 · 上春晚 (lên sân khấu Gala Xuân).",
  "collo": [
   "看春晚",
   "春晚节目",
   "上春晚",
   "春晚演出"
  ],
  "colloFull": [
   {
    "zh": "看春晚",
    "py": "Kàn Chūnwǎn",
    "vn": "xem Gala Xuân"
   },
   {
    "zh": "春晚节目",
    "py": "Chūnwǎn jiémù",
    "vn": "tiết mục Gala Xuân"
   },
   {
    "zh": "上春晚",
    "py": "Shàng Chūnwǎn",
    "vn": "lên sân khấu Gala Xuân"
   },
   {
    "zh": "春晚演出",
    "py": "Chūnwǎn yǎnchū",
    "vn": "biểu diễn ở Gala Xuân"
   }
  ],
  "patterns": [
   {
    "s": "春晚 = 春节联欢晚会",
    "m": "Viết tắt tên chương trình"
   }
  ],
  "ex_zh": "除夕这天晚上，一家人一边吃年夜饭，一边看春晚。",
  "ex_py": "Chúxī zhè tiān wǎnshang, yì jiārén yìbiān chī niányèfàn, yìbiān kàn Chūnwǎn.",
  "ex_vn": "Tối hôm giao thừa, cả nhà vừa ăn cơm tất niên vừa xem Gala Xuân.",
  "exList": [
   {
    "zh": "除夕这天晚上，一家人一边吃年夜饭，一边看春晚。",
    "py": "Chúxī zhè tiān wǎnshang, yì jiārén yìbiān chī niányèfàn, yìbiān kàn Chūnwǎn.",
    "vn": "Tối hôm giao thừa, cả nhà vừa ăn cơm tất niên vừa xem Gala Xuân."
   },
   {
    "zh": "很多中国人除夕晚上都会看春晚。",
    "py": "Hěn duō Zhōngguórén Chúxī wǎnshang dōu huì kàn Chūnwǎn.",
    "vn": "Rất nhiều người Trung Quốc tối giao thừa đều xem Gala Xuân."
   }
  ],
  "hanzi": [
   {
    "c": "春",
    "p": "chūn",
    "type": "会意字 · Chữ hội ý",
    "st": 9,
    "ord": "ba nét ngang → phẩy → mác → 日",
    "rad": "日 (nhật – mặt trời)",
    "mean": "mùa xuân",
    "tip": "Phần trên là cây cỏ đâm chồi, dưới là 日 (mặt trời): nắng ấm, cây cỏ mọc lên → mùa xuân.",
    "cf": "泰 tài (泰国 – HSK1 Bài 3) — cùng phần trên",
    "w": "春天 / 春节 (Tết)"
   },
   {
    "c": "晚",
    "p": "wǎn",
    "type": "左右结构 · Trái-phải",
    "st": 11,
    "ord": "日(nhật) trái → 免(miễn) phải",
    "rad": "日 (nhật – mặt trời)",
    "mean": "muộn, tối",
    "tip": "Bộ 日(mặt trời) đã lặn muộn → chỉ thời gian buổi TỐI, MUỘN.",
    "cf": "免 (miǎn – \"miễn trừ\", thiếu bộ 日)",
    "w": "太晚了 / 晚上"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Gala Xuân năm nay tiết mục nào cũng hay hơn tiết mục nào.",
    "answer": "今年春晚的节目一个比一个好看。",
    "answerPy": "Jīnnián Chūnwǎn de jiémù yí gè bǐ yí gè hǎokàn.",
    "note": "一个比一个 + Adj (Bài 13 · điểm 2).",
    "pair": "一个比一个 + Adj"
   },
   {
    "promptLang": "vi",
    "prompt": "Là người nước ngoài, đây là lần đầu tiên tôi xem Gala Xuân.",
    "answer": "作为外国人，我还是第一次看春晚。",
    "answerPy": "Zuòwéi wàiguórén, wǒ háishi dì yí cì kàn Chūnwǎn.",
    "note": "作为 + thân phận (Bài 13 · điểm 4).",
    "pair": "作为……，……"
   }
  ]
 }
];
var wuData = [
 {
  "img": "/images/hsk4v3/bai-13/wu-A.webp",
  "label": "兄弟",
  "py": "xiōngdì",
  "letter": "A"
 },
 {
  "img": "/images/hsk4v3/bai-13/wu-B.webp",
  "label": "老虎",
  "py": "lǎohǔ",
  "letter": "B"
 },
 {
  "img": "/images/hsk4v3/bai-13/wu-C.webp",
  "label": "树林",
  "py": "shùlín",
  "letter": "C"
 },
 {
  "img": "/images/hsk4v3/bai-13/wu-D.webp",
  "label": "葡萄",
  "py": "pútao",
  "letter": "D"
 },
 {
  "img": "/images/hsk4v3/bai-13/wu-E.webp",
  "label": "月饼",
  "py": "yuèbing",
  "letter": "E"
 },
 {
  "img": "/images/hsk4v3/bai-13/wu-F.webp",
  "label": "喊",
  "py": "hǎn",
  "letter": "F"
 }
];
var dialogData = [
 {
  "scene": "北京野生动物园 · Công viên Động vật hoang dã Bắc Kinh (ngày Quốc tế Thiếu nhi, Lưu Minh và Vương Nhất Tuyết đưa Tiểu Minh ngồi xe vào khu thú dữ)",
  "anh": "/images/hsk4v3/bai-13/kv-1.webp",
  "nguoi": [
   {
    "ten": "刘小明",
    "anh": "/images/hsk4v3/nv/xiaoming.webp"
   },
   {
    "ten": "王一雪",
    "anh": "/images/hsk4v3/nv/yixue.webp"
   },
   {
    "ten": "刘明",
    "anh": "/images/hsk4v3/nv/liuming.webp"
   }
  ],
  "preQuiz": [
   {
    "q": "王一雪提醒小明：",
    "opts": [
     "别害怕",
     "不要吃东西",
     "看看熊和老虎",
     "不要总是大喊"
    ],
    "ans": 3
   },
   {
    "q": "刘明觉得景区怎么样？",
    "opts": [
     "游客很多",
     "门票便宜",
     "又大又美",
     "饭馆很多"
    ],
    "ans": 2
   }
  ],
  "lines": [
   {
    "sp": 0,
    "zh": "爸爸、妈妈，快看，熊和老虎都在这儿呢！",
    "py": "Bàba, māma, kuài kàn, xióng hé lǎohǔ dōu zài zhèr ne!",
    "vn": "Bố ơi, mẹ ơi, nhìn kìa, gấu với hổ đều ở đây này!"
   },
   {
    "sp": 1,
    "zh": "小明，注意安全，不要一直大喊！",
    "py": "Xiǎomíng, zhùyì ānquán, búyào yìzhí dà hǎn!",
    "vn": "Tiểu Minh, chú ý an toàn, đừng có hét to suốt thế!"
   },
   {
    "sp": 2,
    "zh": "你们看，那个叫东北虎，是国家一级保护动物。那边树林里还有很多动物呢。",
    "py": "Nǐmen kàn, nàge jiào Dōngběihǔ, shì guójiā yì jí bǎohù dòngwù. Nàbiān shùlín lǐ hái yǒu hěn duō dòngwù ne.",
    "vn": "Hai mẹ con nhìn kìa, con đó gọi là hổ Đông Bắc, là động vật được nhà nước bảo vệ cấp một. Trong rừng cây đằng kia còn nhiều động vật lắm."
   },
   {
    "sp": 0,
    "zh": "咱们都能看到吧？",
    "py": "Zánmen dōu néng kàndào ba?",
    "vn": "Mình xem được hết chứ ạ?"
   },
   {
    "sp": 1,
    "zh": "对。景区的车每到一个动物区都会停一会儿，让人们能近距离看看这些动物。",
    "py": "Duì. Jǐngqū de chē měi dào yí gè dòngwù qū dōu huì tíng yíhuìr, ràng rénmen néng jìn jùlí kànkan zhèxiē dòngwù.",
    "vn": "Đúng rồi. Xe của khu du lịch mỗi lần đến một khu động vật đều dừng một lát, để mọi người được ngắm những con vật này ở cự ly gần."
   },
   {
    "sp": 2,
    "zh": "真不错，这景区真大、真美！我知道北京野生动物园很大，可怎么也没想到这么大！",
    "py": "Zhēn búcuò, zhè jǐngqū zhēn dà, zhēn měi! Wǒ zhīdao Běijīng yěshēng dòngwùyuán hěn dà, kě zěnme yě méi xiǎngdào zhème dà!",
    "vn": "Tuyệt thật, khu du lịch này rộng thật, đẹp thật! Anh biết Công viên Động vật hoang dã Bắc Kinh rất rộng, nhưng thế nào cũng không ngờ lại rộng đến thế!"
   },
   {
    "sp": 1,
    "zh": "这里有几千只动物呢，能不大吗？现在是节假日，人多。小明，一会儿千万别跑丢了，我可不是开玩笑呢。",
    "py": "Zhèli yǒu jǐqiān zhǐ dòngwù ne, néng bú dà ma? Xiànzài shì jiéjiàrì, rén duō. Xiǎomíng, yíhuìr qiānwàn bié pǎo diū le, wǒ kěbúshi kāi wánxiào ne.",
    "vn": "Ở đây có mấy nghìn con thú cơ mà, không rộng sao được? Giờ đang dịp lễ, người đông. Tiểu Minh, lát nữa tuyệt đối không được chạy lạc đấy, mẹ không đùa đâu."
   }
  ]
 },
 {
  "scene": "在王一飞家 · Ở nhà Vương Nhất Phi (vợ chồng Nhất Phi mời Bạch Gia Nguyệt, An Ni và Trần Thiên Trung đón Tết Trung thu)",
  "anh": "/images/hsk4v3/bai-13/kv-2.webp",
  "nguoi": [
   {
    "ten": "王一飞",
    "anh": "/images/hsk4v3/nv/yifei.webp"
   },
   {
    "ten": "杨同乐",
    "anh": "/images/hsk4v3/nv/tongle.webp"
   },
   {
    "ten": "陈天中",
    "anh": "/images/hsk4v3/nv/chen.webp"
   },
   {
    "ten": "白家月",
    "anh": "/images/hsk4v3/nv/bai.webp"
   },
   {
    "ten": "安妮",
    "anh": "/images/hsk4v3/nv/annie.webp"
   }
  ],
  "preQuiz": [
   {
    "q": "王一飞和杨同乐准备了什么？",
    "opts": [
     "月饼、葡萄和苹果",
     "葡萄、西瓜和苹果",
     "月饼、苹果、西瓜和茶",
     "月饼、葡萄、西瓜和茶"
    ],
    "ans": 3
   },
   {
    "q": "李文为什么没来？",
    "opts": [
     "在学校学习",
     "去买水果了",
     "要给爷爷过生日",
     "和同事一起过节"
    ],
    "ans": 2
   }
  ],
  "lines": [
   {
    "sp": 0,
    "zh": "来，大家快吃月饼，这儿还有葡萄、西瓜。",
    "py": "Lái, dàjiā kuài chī yuèbing, zhèr hái yǒu pútao, xīguā.",
    "vn": "Nào, mọi người ăn bánh Trung thu đi, ở đây còn có nho, dưa hấu nữa."
   },
   {
    "sp": 1,
    "zh": "这是今年的新茶，你们也尝尝。",
    "py": "Zhè shì jīnnián de xīnchá, nǐmen yě chángchang.",
    "vn": "Đây là trà mới năm nay, các em cũng nếm thử đi."
   },
   {
    "sp": 2,
    "zh": "好的。这茶闻着真香！",
    "py": "Hǎo de. Zhè chá wén zhe zhēn xiāng!",
    "vn": "Vâng ạ. Trà này ngửi thơm thật!"
   },
   {
    "sp": 3,
    "zh": "我还是第一次在中国过中秋节呢。",
    "py": "Wǒ háishi dì yí cì zài Zhōngguó guò Zhōngqiūjié ne.",
    "vn": "Đây vẫn là lần đầu tiên em đón Tết Trung thu ở Trung Quốc đấy."
   },
   {
    "sp": 4,
    "zh": "我在加拿大时和中国朋友一起过过中秋节。我记得那天，外面的街道、剧院有很多演出活动。",
    "py": "Wǒ zài Jiānádà shí hé Zhōngguó péngyou yìqǐ guòguo Zhōngqiūjié. Wǒ jìde nàtiān, wàimian de jiēdào, jùyuàn yǒu hěn duō yǎnchū huódòng.",
    "vn": "Hồi ở Canada em từng đón Trung thu cùng bạn bè người Trung Quốc. Em nhớ hôm đó, ngoài đường phố, trong nhà hát có rất nhiều hoạt động biểu diễn."
   },
   {
    "sp": 0,
    "zh": "在中国，每年中秋节都会举办很多活动，而且这几年一年比一年热闹。对了，家月，今天是李文爷爷的生日，李文来不了了，你就多吃一块月饼吧。",
    "py": "Zài Zhōngguó, měinián Zhōngqiūjié dōu huì jǔbàn hěn duō huódòng, érqiě zhè jǐ nián yì nián bǐ yì nián rènao. Duì le, Jiāyuè, jīntiān shì Lǐ Wén yéye de shēngrì, Lǐ Wén lái bu liǎo le, nǐ jiù duō chī yí kuài yuèbing ba.",
    "vn": "Ở Trung Quốc, năm nào Trung thu cũng tổ chức rất nhiều hoạt động, mà mấy năm nay năm sau còn náo nhiệt hơn năm trước. À phải rồi, Gia Nguyệt, hôm nay là sinh nhật ông nội Lý Văn, Lý Văn không đến được rồi, em ăn thêm một cái bánh Trung thu nhé."
   },
   {
    "sp": 3,
    "zh": "谢谢，那我就不客气了。",
    "py": "Xièxie, nà wǒ jiù búkèqì le.",
    "vn": "Cảm ơn chị, vậy em không khách sáo nữa nhé."
   },
   {
    "sp": 1,
    "zh": "中秋节和生日赶在了一块儿，真巧、真好！中秋节多陪陪家人也是应该的。",
    "py": "Zhōngqiūjié hé shēngrì gǎn zài le yíkuàir, zhēn qiǎo, zhēn hǎo! Zhōngqiūjié duō péipei jiārén yě shì yīnggāi de.",
    "vn": "Trung thu với sinh nhật trùng vào cùng một ngày, khéo thật, hay thật! Trung thu ở bên gia đình nhiều hơn cũng là điều nên làm."
   }
  ]
 },
 {
  "scene": "中秋节的“反向团圆” · “Sum họp ngược” dịp Tết Trung thu",
  "anh": "",
  "nguoi": [
   {
    "ten": "小语",
    "anh": "/images/hsk4v3/nv/xiaoyu.webp"
   }
  ],
  "preQuiz": [
   {
    "q": "周力不能回家过中秋节，是因为：",
    "opts": [
     "不想回家",
     "工作需要",
     "没买到车票",
     "想去外地过节"
    ],
    "ans": 1
   },
   {
    "q": "中秋节这天，周力的父母为儿子做了什么？",
    "opts": [
     "买月饼",
     "打扫卫生",
     "买了一件上衣",
     "做了一桌饭菜"
    ],
    "ans": 3
   }
  ],
  "lines": [
   {
    "sp": 0,
    "zh": "中秋节时中国人一般都会回家过节。",
    "py": "Zhōngqiūjié shí Zhōngguórén yìbān dōu huì huíjiā guòjié.",
    "vn": "Dịp Trung thu, người Trung Quốc thường đều về nhà đón Tết."
   },
   {
    "sp": 0,
    "zh": "但是有些人由于工作需要，不能回家，只能一个人留在工作的地方过节。",
    "py": "Dànshì yǒuxiē rén yóuyú gōngzuò xūyào, bù néng huíjiā, zhǐnéng yí gè rén liú zài gōngzuò de dìfang guòjié.",
    "vn": "Nhưng có một số người vì yêu cầu công việc mà không thể về nhà, chỉ đành một mình ở lại nơi làm việc đón Tết."
   },
   {
    "sp": 0,
    "zh": "周力就是这些人之中的一位。",
    "py": "Zhōu Lì jiùshì zhèxiē rén zhīzhōng de yí wèi.",
    "vn": "Chu Lực chính là một trong số những người này."
   },
   {
    "sp": 0,
    "zh": "他是一名铁路工作人员，今年中秋假期，要负责铁路安全检查。",
    "py": "Tā shì yì míng tiělù gōngzuò rényuán, jīnnián Zhōngqiū jiàqī, yào fùzé tiělù ānquán jiǎnchá.",
    "vn": "Anh ấy là nhân viên ngành đường sắt, kỳ nghỉ Trung thu năm nay phải phụ trách kiểm tra an toàn đường sắt."
   },
   {
    "sp": 0,
    "zh": "周力的父母知道儿子这次不能回家后，就决定来一次“反向团圆”。",
    "py": "Zhōu Lì de fùmǔ zhīdao érzi zhè cì bù néng huíjiā hòu, jiù juédìng lái yí cì “fǎnxiàng tuányuán”.",
    "vn": "Bố mẹ Chu Lực biết lần này con trai không về được, liền quyết định làm một cuộc “sum họp ngược”."
   },
   {
    "sp": 0,
    "zh": "早上五点左右他们就坐上了高铁，大约七点就来到了儿子工作的城市。",
    "py": "Zǎoshang wǔ diǎn zuǒyòu tāmen jiù zuòshang le gāotiě, dàyuē qī diǎn jiù láidào le érzi gōngzuò de chéngshì.",
    "vn": "Khoảng năm giờ sáng họ đã lên tàu cao tốc, chừng bảy giờ đã đến thành phố nơi con trai làm việc."
   },
   {
    "sp": 0,
    "zh": "在儿子家，他们做了一桌儿子爱吃的饭菜，有烤肉、烤鱼、饺子等等，还有西红柿鸡蛋汤。",
    "py": "Zài érzi jiā, tāmen zuò le yì zhuō érzi ài chī de fàncài, yǒu kǎoròu, kǎo yú, jiǎozi děngděng, hái yǒu xīhóngshì jīdàn tāng.",
    "vn": "Ở nhà con trai, họ nấu một mâm toàn món con thích ăn: thịt nướng, cá nướng, sủi cảo…, còn có canh trứng cà chua."
   },
   {
    "sp": 0,
    "zh": "周力下班回家，看到一桌子饭菜和突然出现的父母，他感觉特别幸福。",
    "py": "Zhōu Lì xiàbān huíjiā, kàndào yì zhuōzi fàncài hé tūrán chūxiàn de fùmǔ, tā gǎnjué tèbié xìngfú.",
    "vn": "Chu Lực tan làm về nhà, thấy cả bàn thức ăn và bố mẹ bỗng dưng xuất hiện, anh cảm thấy vô cùng hạnh phúc."
   },
   {
    "sp": 0,
    "zh": "这个中秋节，地点变了，但爱没变。",
    "py": "Zhège Zhōngqiūjié, dìdiǎn biàn le, dàn ài méi biàn.",
    "vn": "Trung thu năm nay, địa điểm đã thay đổi, nhưng tình yêu thương thì không đổi."
   }
  ],
  "doan": true
 },
 {
  "scene": "节日的美好记忆 · Ký ức đẹp về những ngày lễ",
  "anh": "/images/hsk4v3/bai-13/kv-4.webp",
  "nguoi": [
   {
    "ten": "小语",
    "anh": "/images/hsk4v3/nv/xiaoyu.webp"
   }
  ],
  "preQuiz": [
   {
    "q": "下列哪个节日没有提到？",
    "opts": [
     "春节",
     "元宵节",
     "端午节",
     "六一儿童节"
    ],
    "ans": 3
   },
   {
    "q": "根据课文，春节到来时，人们会做什么？",
    "opts": [
     "准备美食",
     "外出看花",
     "出去旅游",
     "照顾孩子"
    ],
    "ans": 0
   }
  ],
  "lines": [
   {
    "sp": 0,
    "zh": "中国有很多节日，比如春节、元宵节、端午节、中秋节等。",
    "py": "Zhōngguó yǒu hěn duō jiérì, bǐrú Chūnjié, Yuánxiāojié, Duānwǔjié, Zhōngqiūjié děng.",
    "vn": "Trung Quốc có rất nhiều ngày lễ, ví dụ Tết Nguyên đán, Tết Nguyên tiêu, Tết Đoan ngọ, Tết Trung thu…"
   },
   {
    "sp": 0,
    "zh": "作为一年里最重要的传统节日，春节对中国人来说有着特别的意义。",
    "py": "Zuòwéi yì nián lǐ zuì zhòngyào de chuántǒng jiérì, Chūnjié duì Zhōngguórén láishuō yǒuzhe tèbié de yìyì.",
    "vn": "Là ngày lễ truyền thống quan trọng nhất trong năm, Tết đối với người Trung Quốc có ý nghĩa đặc biệt."
   },
   {
    "sp": 0,
    "zh": "春节到来时，人们不管在哪里，都想回家过年。",
    "py": "Chūnjié dàolái shí, rénmen bùguǎn zài nǎlǐ, dōu xiǎng huíjiā guònián.",
    "vn": "Khi Tết đến, dù ở đâu người ta cũng muốn về nhà ăn Tết."
   },
   {
    "sp": 0,
    "zh": "春节前也最忙，既要收拾房子、打扫卫生，又要准备各种美食。",
    "py": "Chūnjié qián yě zuì máng, jì yào shōushi fángzi, dǎsǎo wèishēng, yòu yào zhǔnbèi gèzhǒng měishí.",
    "vn": "Trước Tết cũng là lúc bận nhất, vừa phải dọn nhà, làm vệ sinh, lại vừa phải chuẩn bị đủ món ngon."
   },
   {
    "sp": 0,
    "zh": "除夕这天晚上，一家人一边吃年夜饭，一边看春晚。",
    "py": "Chúxī zhè tiān wǎnshang, yì jiārén yìbiān chī niányèfàn, yìbiān kàn Chūnwǎn.",
    "vn": "Tối hôm giao thừa, cả nhà vừa ăn cơm tất niên vừa xem Gala Xuân."
   },
   {
    "sp": 0,
    "zh": "零点一到，大家互相祝福新年快乐，到处都是幸福的笑声。",
    "py": "Língdiǎn yí dào, dàjiā hùxiāng zhùfú xīnnián kuàilè, dàochù dōu shì xìngfú de xiàoshēng.",
    "vn": "Đồng hồ vừa điểm không giờ, mọi người chúc nhau năm mới vui vẻ, khắp nơi rộn rã tiếng cười hạnh phúc."
   },
   {
    "sp": 0,
    "zh": "每当回忆起童年，我最美好的记忆很多也发生在过年时。",
    "py": "Měi dāng huíyì qǐ tóngnián, wǒ zuì měihǎo de jìyì hěn duō yě fāshēng zài guònián shí.",
    "vn": "Mỗi khi nhớ lại tuổi thơ, rất nhiều ký ức đẹp nhất của tôi cũng diễn ra vào dịp Tết."
   },
   {
    "sp": 0,
    "zh": "虽然现在已人到中年，离开了家，但是春节仍然是我最喜欢的节日，过年时也更想父母、兄弟姐妹。",
    "py": "Suīrán xiànzài yǐ rén dào zhōngnián, líkāi le jiā, dànshì Chūnjié réngrán shì wǒ zuì xǐhuan de jiérì, guònián shí yě gèng xiǎng fùmǔ, xiōngdì jiěmèi.",
    "vn": "Tuy giờ đã bước vào tuổi trung niên, đã rời xa nhà, nhưng Tết vẫn là ngày lễ tôi thích nhất, đến Tết lại càng nhớ bố mẹ, anh chị em."
   }
  ],
  "doan": true
 }
];
var listenData = [
 {
  "audio": "小王，中秋节晚上剧院有演出，你想去看吗？好啊，几点开始？七点半开始。咱们七点左右在剧院门口见吧。好，我大约六点半从家出发。千万别迟到，演出开始以后就不能进去了。",
  "questions": [
   {
    "q": "他们打算几点在哪儿见面？",
    "opts": [
     "七点左右在剧院门口",
     "七点半在家里",
     "六点半在学校"
    ],
    "ans": 0
   },
   {
    "q": "为什么千万别迟到？",
    "opts": [
     "票会卖完",
     "演出开始以后就不能进去了",
     "剧院离家很远"
    ],
    "ans": 1
   }
  ]
 },
 {
  "audio": "妈妈，这个景区真大！我们已经走了两个小时了，怎么都走不完。是啊，听说这里有几千种植物和动物。现在是节假日，人这么多，你千万别跑丢了。放心吧，我一直跟着您呢。",
  "questions": [
   {
    "q": "他们在景区走了多长时间？",
    "opts": [
     "两个小时",
     "三个小时",
     "半天"
    ],
    "ans": 0
   },
   {
    "q": "妈妈提醒孩子什么？",
    "opts": [
     "多拍照片",
     "千万别跑丢了",
     "不要大喊"
    ],
    "ans": 1
   }
  ]
 },
 {
  "audio": "李文，今年春节你回家吗？当然回。我们家每年除夕都一起吃年夜饭、看春晚，一年比一年热闹。真好！我今年要工作，回不了国。那你来我家过年吧！作为好朋友，我一定要请你尝尝我妈妈包的饺子。",
  "questions": [
   {
    "q": "李文家除夕会做什么？",
    "opts": [
     "吃年夜饭、看春晚",
     "去剧院看演出",
     "出去旅游"
    ],
    "ans": 0
   },
   {
    "q": "李文为什么请朋友去他家过年？",
    "opts": [
     "朋友想学包饺子",
     "朋友春节要工作，回不了国",
     "朋友没去过北京"
    ],
    "ans": 1
   }
  ]
 }
];
var matchData = [
 {
  "left": "国家一级",
  "right": "保护动物"
 },
 {
  "left": "近距离",
  "right": "看看这些动物"
 },
 {
  "left": "过",
  "right": "中秋节"
 },
 {
  "left": "中秋节和生日",
  "right": "赶在了一块儿"
 },
 {
  "left": "反向",
  "right": "团圆"
 },
 {
  "left": "一边吃年夜饭",
  "right": "一边看春晚"
 },
 {
  "left": "回忆起",
  "right": "童年"
 },
 {
  "left": "准备",
  "right": "各种美食"
 },
 {
  "left": "传统",
  "right": "节日"
 },
 {
  "left": "有着",
  "right": "特别的意义"
 }
];
var fillData = [
 {
  "pre": "小明，一会儿",
  "blank": "千万",
  "post": "别跑丢了，我可不是开玩笑呢。",
  "hint": "(tuyệt đối)",
  "ans": "千万",
  "exp": "千万 + 别 + V: lời dặn dò."
 },
 {
  "pre": "那个叫东北虎，是国家一",
  "blank": "级",
  "post": "保护动物。",
  "hint": "(cấp)",
  "ans": "级",
  "exp": "一级保护动物 = động vật bảo vệ cấp một."
 },
 {
  "pre": "我知道北京野生动物园很大，可",
  "blank": "怎么",
  "post": "也没想到这么大！",
  "hint": "(thế nào)",
  "ans": "怎么",
  "exp": "怎么也没想到 = không ngờ."
 },
 {
  "pre": "这几年中秋节一年",
  "blank": "比",
  "post": "一年热闹。",
  "hint": "(hơn)",
  "ans": "比",
  "exp": "一年比一年 + Adj."
 },
 {
  "pre": "好的。这茶闻着真",
  "blank": "香",
  "post": "！",
  "hint": "(thơm)",
  "ans": "香",
  "exp": "闻着真香 = ngửi thấy thơm thật."
 },
 {
  "pre": "中秋节和生日",
  "blank": "赶",
  "post": "在了一块儿，真巧、真好！",
  "hint": "(trùng dịp)",
  "ans": "赶",
  "exp": "赶在了一块儿 = trùng vào một ngày."
 },
 {
  "pre": "早上五点",
  "blank": "左右",
  "post": "他们就坐上了高铁。",
  "hint": "(khoảng — đứng sau)",
  "ans": "左右",
  "exp": "Thời gian + 左右."
 },
 {
  "pre": "",
  "blank": "作为",
  "post": "一年里最重要的传统节日，春节对中国人来说有着特别的意义。",
  "hint": "(là, với tư cách)",
  "ans": "作为",
  "exp": "作为 + N."
 },
 {
  "pre": "周力就是这些人",
  "blank": "之中",
  "post": "的一位。",
  "hint": "(trong số)",
  "ans": "之中",
  "exp": "……之中的一位 = một trong số …"
 },
 {
  "pre": "虽然现在已人到中年，但是春节",
  "blank": "仍然",
  "post": "是我最喜欢的节日。",
  "hint": "(vẫn)",
  "ans": "仍然",
  "exp": "虽然……，但是……仍然……"
 }
];
var sortData = [
 {
  "words": [
   "她",
   "在包里",
   "找了半天",
   "，",
   "怎么",
   "都",
   "没找到",
   "。"
  ],
  "ans": "她在包里找了半天，怎么都没找到。",
  "audio": "她在包里找了半天，怎么都没找到。"
 },
 {
  "words": [
   "这几年",
   "中秋节",
   "一年",
   "比",
   "一年",
   "热闹",
   "。"
  ],
  "ans": "这几年中秋节一年比一年热闹。",
  "audio": "这几年中秋节一年比一年热闹。"
 },
 {
  "words": [
   "他们",
   "大约",
   "七点",
   "就",
   "来到了",
   "儿子工作的城市",
   "。"
  ],
  "ans": "他们大约七点就来到了儿子工作的城市。",
  "audio": "他们大约七点就来到了儿子工作的城市。"
 },
 {
  "words": [
   "作为",
   "好朋友",
   "，",
   "我们",
   "一直",
   "互相帮助",
   "。"
  ],
  "ans": "作为好朋友，我们一直互相帮助。",
  "audio": "作为好朋友，我们一直互相帮助。"
 },
 {
  "words": [
   "一家人",
   "一边",
   "吃年夜饭",
   "，",
   "一边",
   "看春晚",
   "。"
  ],
  "ans": "一家人一边吃年夜饭，一边看春晚。",
  "audio": "一家人一边吃年夜饭，一边看春晚。"
 },
 {
  "words": [
   "景区的车",
   "每到",
   "一个动物区",
   "都会",
   "停",
   "一会儿",
   "。"
  ],
  "ans": "景区的车每到一个动物区都会停一会儿。",
  "audio": "景区的车每到一个动物区都会停一会儿。"
 }
];
var mcData = [
 {
  "q": "小明，一会儿＿＿别跑丢了。",
  "opts": [
   "千万",
   "一定",
   "仍然",
   "已"
  ],
  "ans": 0,
  "exp": "千万 + 别 + V dùng để dặn dò; 一定 không đi với 别."
 },
 {
  "q": "我知道这里很大，可＿＿也没想到这么大！",
  "opts": [
   "怎么",
   "什么",
   "为什么",
   "多么"
  ],
  "ans": 0,
  "exp": "怎么也没想到 = thế nào cũng không ngờ (ngạc nhiên)."
 },
 {
  "q": "这道题太难了，我做了好久，怎么都做＿＿出来。",
  "opts": [
   "不",
   "没",
   "得",
   "了"
  ],
  "ans": 0,
  "exp": "Bổ ngữ khả năng 做不出来."
 },
 {
  "q": "夏天快到了，天气一天比＿＿热。",
  "opts": [
   "一天",
   "两天",
   "昨天",
   "每天"
  ],
  "ans": 0,
  "exp": "一天比一天 — hai vế cùng 一 + cùng lượng từ."
 },
 {
  "q": "早上五点＿＿他们就坐上了高铁。",
  "opts": [
   "左右",
   "大约",
   "大概",
   "已经"
  ],
  "ans": 0,
  "exp": "Sau thời gian dùng 左右; 大约 / 大概 phải đứng trước."
 },
 {
  "q": "他们＿＿七点就来到了儿子工作的城市。",
  "opts": [
   "大约",
   "左右",
   "以后",
   "之中"
  ],
  "ans": 0,
  "exp": "大约 đứng trước thời gian."
 },
 {
  "q": "＿＿父母，我们应该多陪陪孩子。",
  "opts": [
   "作为",
   "成为",
   "因为",
   "对于"
  ],
  "ans": 0,
  "exp": "作为 + thân phận，chủ ngữ + ……"
 },
 {
  "q": "河内是一座＿＿一千多年历史的城市。",
  "opts": [
   "有着",
   "出现",
   "到来",
   "赶"
  ],
  "ans": 0,
  "exp": "有着 + ……历史 (văn viết, danh từ trừu tượng)."
 },
 {
  "q": "中秋节是家人＿＿的节日。",
  "opts": [
   "团圆",
   "团员",
   "反向",
   "演出"
  ],
  "ans": 0,
  "exp": "团圆 = sum họp (bẫy Hán Việt “đoàn viên”); 团员 = thành viên đoàn."
 },
 {
  "q": "每当＿＿起童年，我都觉得很幸福。",
  "opts": [
   "回忆",
   "记忆",
   "意义",
   "美食"
  ],
  "ans": 0,
  "exp": "回忆起 + N = nhớ lại; 记忆 là danh từ (ký ức)."
 }
];
var speakingData = {
 "intro": "Nhấn nút loa nghe câu hỏi (câu hỏi phần Khởi động, câu hỏi đọc hiểu của sách, kể lại bài khoá và thảo luận nhóm), rồi tự ghi âm câu trả lời — cố dùng từ mới và 4 điểm ngữ pháp của bài.",
 "questions": [
  {
   "q_zh": "你的国家有哪些重要节日？这些节日到来时人们会吃什么美食？",
   "q_vn": "Nước bạn có những ngày lễ quan trọng nào? Khi những ngày lễ đó đến, mọi người ăn những món ngon gì?",
   "hint": "我的国家有……、……等重要节日。……到来时，人们会吃……",
   "sample": "越南有春节、中秋节、端午节等重要节日。春节到来时，人们会吃粽子、春卷等传统美食；中秋节的时候，大家会吃月饼；端午节的时候，人们会吃水果、喝米酒。",
   "sample_vn": "Việt Nam có Tết Nguyên đán, Tết Trung thu, Tết Đoan ngọ… Khi Tết đến, mọi người ăn bánh chưng, nem rán và các món truyền thống; Trung thu thì ăn bánh Trung thu; Tết Đoan ngọ thì ăn hoa quả, uống rượu nếp.",
   "note": "Câu hỏi phần Khởi động của sách (热身 2)."
  },
  {
   "q_zh": "你和兄弟姐妹或者好朋友节假日在一起时都会做些什么？",
   "q_vn": "Ngày lễ, bạn và anh chị em hoặc bạn thân ở cùng nhau thường làm những gì?",
   "hint": "节假日的时候，我和……一起……，有时候也……",
   "sample": "节假日的时候，我和哥哥常常一起去看电影、逛街，有时候也和好朋友去景区游玩。晚上我们一边吃饭一边聊天，觉得特别开心。",
   "sample_vn": "Ngày lễ, tôi và anh trai thường đi xem phim, dạo phố, có lúc cũng đi khu du lịch chơi với bạn thân. Buổi tối chúng tôi vừa ăn cơm vừa trò chuyện, vui lắm.",
   "note": "Câu hỏi phần Khởi động của sách (热身 2)."
  },
  {
   "q_zh": "小明在北京野生动物园里先看到了什么动物？北京野生动物园有多少只动物？",
   "q_vn": "Ở Công viên Động vật hoang dã Bắc Kinh, Tiểu Minh nhìn thấy con vật gì trước tiên? Công viên có bao nhiêu con thú?",
   "hint": "他先看到了……。北京野生动物园有……",
   "sample": "他先看到了熊和老虎。北京野生动物园有几千只动物，所以刘明怎么也没想到它这么大。",
   "sample_vn": "Cậu bé nhìn thấy gấu và hổ trước tiên. Công viên có mấy nghìn con thú, nên Lưu Minh thế nào cũng không ngờ nó rộng đến vậy.",
   "note": "Câu hỏi đọc hiểu bài khoá 1."
  },
  {
   "q_zh": "请根据提示复述课文一。",
   "q_vn": "Dựa vào gợi ý, kể lại bài khoá 1.",
   "hint": "六一儿童节，刘明、王一雪带儿子……。小明兴奋地喊着：“……！”王一雪让他……。刘明说，……叫东北虎……",
   "sample": "六一儿童节，刘明、王一雪带儿子刘小明到北京野生动物园游玩。在动物园里，小明兴奋地喊着：“爸爸、妈妈，快看，熊和老虎都在这儿呢！”王一雪让他注意安全，不要一直大喊。刘明说，他们看到的老虎叫东北虎，是国家一级保护动物。刘明还说，那边树林里还有很多动物。小明很想看到那些动物，王一雪告诉他，景区的车每到一个动物区都会停一会儿，让人们能近距离看看这些动物。北京野生动物园很大，刘明说他怎么也没想到这么大。王一雪说，这里有几千只动物呢。同时，王一雪也提醒小明，节假日人多，千万别跑丢了。",
   "sample_vn": "Ngày Quốc tế Thiếu nhi, Lưu Minh và Vương Nhất Tuyết đưa con trai Lưu Tiểu Minh đến Công viên Động vật hoang dã Bắc Kinh chơi… Vương Nhất Tuyết còn nhắc Tiểu Minh: ngày lễ đông người, tuyệt đối đừng chạy lạc.",
   "note": "Bài tập 复述 của sách (trang 27)."
  },
  {
   "q_zh": "白家月以前在中国过过中秋节吗？在加拿大，安妮和中国朋友过中秋节时那里有什么活动？",
   "q_vn": "Bạch Gia Nguyệt trước đây đã từng đón Trung thu ở Trung Quốc chưa? Ở Canada, khi An Ni đón Trung thu với bạn Trung Quốc, ở đó có những hoạt động gì?",
   "hint": "没有，她还是第一次……。安妮记得那天，……有很多……",
   "sample": "没有，她还是第一次在中国过中秋节。安妮记得那天，外面的街道、剧院有很多演出活动。",
   "sample_vn": "Chưa, đây vẫn là lần đầu tiên cô ấy đón Trung thu ở Trung Quốc. An Ni nhớ hôm đó, ngoài đường phố, trong nhà hát có rất nhiều hoạt động biểu diễn.",
   "note": "Câu hỏi đọc hiểu bài khoá 2."
  },
  {
   "q_zh": "“反向团圆”是什么意思？周力为什么感觉特别幸福？",
   "q_vn": "“Sum họp ngược” nghĩa là gì? Vì sao Chu Lực cảm thấy vô cùng hạnh phúc?",
   "hint": "一般是……回家……，“反向团圆”是……。因为……",
   "sample": "一般是孩子回家和父母团圆，“反向团圆”是父母到孩子工作的城市去，和孩子一起过节。周力感觉特别幸福，因为他不能回家，可是父母大约七点就来到了他工作的城市，还给他做了一桌他爱吃的饭菜。",
   "sample_vn": "Thường là con cái về nhà sum họp với bố mẹ, còn “sum họp ngược” là bố mẹ đến thành phố nơi con làm việc để cùng con đón Tết. Chu Lực vô cùng hạnh phúc vì anh không về nhà được, nhưng bố mẹ đã đến thành phố anh làm việc từ khoảng bảy giờ sáng, còn nấu cho anh cả mâm món anh thích.",
   "note": "Câu hỏi đọc hiểu bài khoá 3."
  },
  {
   "q_zh": "请根据提示复述课文三。",
   "q_vn": "Dựa vào gợi ý, kể lại bài khoá 3.",
   "hint": "中秋节时中国人一般都……。但是有些人由于……，不能回家……。周力就是……。周力的父母……就决定来一次……",
   "sample": "中秋节时中国人一般都会回家过节。但是有些人由于工作需要，不能回家，只能一个人留在工作的地方过节。周力就是这些人之中的一位。他是一名铁路工作人员，今年中秋假期，要负责铁路安全检查。周力的父母知道周力这次不能回家后，就决定来一次“反向团圆”。早上五点左右他们就坐上了高铁，大约七点就来到了儿子工作的城市。在儿子家，他们做了一桌儿子爱吃的饭菜，有烤肉、烤鱼、饺子等等，还有西红柿鸡蛋汤。周力下班回家，看到一桌子饭菜和突然出现的父母，他感觉特别幸福。这个中秋节，地点变了，但爱没变。",
   "sample_vn": "Dịp Trung thu người Trung Quốc thường về nhà đón Tết… Trung thu năm nay, địa điểm đã thay đổi, nhưng tình yêu thương thì không đổi.",
   "note": "Bài tập 复述 của sách (trang 32)."
  },
  {
   "q_zh": "为什么说春节对中国人来说有着特别的意义？春节为什么一直是他最喜欢的节日？",
   "q_vn": "Vì sao nói Tết có ý nghĩa đặc biệt đối với người Trung Quốc? Vì sao Tết luôn là ngày lễ ông ấy thích nhất?",
   "hint": "因为作为……，春节到来时，人们不管……都……。他最美好的记忆……",
   "sample": "因为作为一年里最重要的传统节日，春节到来时，人们不管在哪里，都想回家和家人团圆。春节一直是他最喜欢的节日，因为他童年最美好的记忆很多都发生在过年时。虽然现在已人到中年，离开了家，但是过年时他也更想父母、兄弟姐妹。",
   "sample_vn": "Vì là ngày lễ truyền thống quan trọng nhất trong năm, khi Tết đến, dù ở đâu người ta cũng muốn về nhà sum họp với gia đình. Tết luôn là ngày lễ ông thích nhất vì rất nhiều ký ức đẹp nhất tuổi thơ của ông diễn ra vào dịp Tết. Tuy giờ đã trung niên, rời xa nhà, đến Tết ông lại càng nhớ bố mẹ, anh chị em.",
   "note": "Câu hỏi đọc hiểu bài khoá 4; dùng 作为 (điểm 4)."
  },
  {
   "q_zh": "小组讨论：三至四人一组，每人介绍一个你最喜欢的节日，说说为什么喜欢，过节时你都会做什么，等等。讨论后，每人再向大家介绍小组中另一位同学最喜欢的节日。",
   "q_vn": "Thảo luận nhóm: nhóm 3–4 người, mỗi người giới thiệu ngày lễ mình thích nhất, nói vì sao thích, ngày lễ thường làm gì… Thảo luận xong, mỗi người giới thiệu trước lớp ngày lễ yêu thích của một bạn khác trong nhóm.",
   "hint": "我来介绍一下……最喜欢的节日。……最喜欢……，因为……。每当……到来，……都会……。作为……，……。……一年比一年……",
   "sample": "大家好！我来介绍一下我们组安妮最喜欢的节日。安妮最喜欢过中秋节。她说，作为一个外国人，她第一次在中国过中秋节就喜欢上了这个节日，因为中秋节是家人团圆的节日，特别温暖。每当中秋节到来，她都会和中国朋友一起吃月饼、看月亮，有时候还会去剧院看演出。她觉得这几年中秋节的活动一年比一年热闹。去年中秋节，她晚上八点左右到了朋友家，一进门就闻到了月饼的香味。她本来以为自己会想家，可怎么也没想到，那天她过得特别开心。安妮说，中秋节让她明白了：不管在哪儿，有朋友在一起，就像在家一样。",
   "sample_vn": "Chào cả lớp! Em xin giới thiệu ngày lễ yêu thích của bạn An Ni trong nhóm. An Ni thích nhất Tết Trung thu. Bạn nói, là người nước ngoài, lần đầu đón Trung thu ở Trung Quốc bạn đã thích ngày lễ này, vì Trung thu là ngày gia đình sum họp, rất ấm áp. Mỗi khi Trung thu đến, bạn đều cùng bạn bè Trung Quốc ăn bánh, ngắm trăng, có khi còn đi nhà hát xem biểu diễn. Bạn thấy mấy năm nay hoạt động Trung thu năm sau náo nhiệt hơn năm trước. Trung thu năm ngoái, khoảng tám giờ tối bạn đến nhà một người bạn, vừa vào cửa đã ngửi thấy mùi bánh thơm. Bạn tưởng mình sẽ nhớ nhà, nhưng thế nào cũng không ngờ hôm đó lại vui đến thế. An Ni nói, Trung thu giúp bạn hiểu: dù ở đâu, có bạn bè bên cạnh thì cũng như ở nhà.",
   "note": "Hoạt động 任务活动 · 小组讨论 (thảo luận nhóm) của sách, trang 36 — dùng đủ 4 điểm ngữ pháp: 怎么也没想到, 一年比一年, 左右, 作为."
  }
 ]
};
var translateData = [
 {
  "vi": "Tôi biết Công viên Động vật hoang dã Bắc Kinh rất rộng, nhưng thế nào cũng không ngờ lại rộng đến vậy.",
  "zh": "我知道北京野生动物园很大，可怎么也没想到这么大。",
  "py": "Wǒ zhīdao Běijīng yěshēng dòngwùyuán hěn dà, kě zěnme yě méi xiǎngdào zhème dà."
 },
 {
  "vi": "Mấy năm nay, Tết Trung thu năm sau náo nhiệt hơn năm trước.",
  "zh": "这几年中秋节一年比一年热闹。",
  "py": "Zhè jǐ nián Zhōngqiūjié yì nián bǐ yì nián rènao."
 },
 {
  "vi": "Khoảng năm giờ sáng họ đã lên tàu cao tốc, chừng bảy giờ đã đến nơi.",
  "zh": "早上五点左右他们就坐上了高铁，大约七点就到了。",
  "py": "Zǎoshang wǔ diǎn zuǒyòu tāmen jiù zuòshang le gāotiě, dàyuē qī diǎn jiù dào le."
 },
 {
  "vi": "Là ngày lễ truyền thống quan trọng nhất, Tết có ý nghĩa đặc biệt đối với người Trung Quốc.",
  "zh": "作为最重要的传统节日，春节对中国人来说有着特别的意义。",
  "py": "Zuòwéi zuì zhòngyào de chuántǒng jiérì, Chūnjié duì Zhōngguórén láishuō yǒuzhe tèbié de yìyì."
 },
 {
  "vi": "Ngày lễ đông người, con tuyệt đối đừng chạy lạc nhé.",
  "zh": "节假日人多，你千万别跑丢了。",
  "py": "Jiéjiàrì rén duō, nǐ qiānwàn bié pǎo diū le."
 },
 {
  "vi": "Trung thu với sinh nhật trùng vào cùng một ngày, khéo thật!",
  "zh": "中秋节和生日赶在了一块儿，真巧！",
  "py": "Zhōngqiūjié hé shēngrì gǎn zài le yíkuàir, zhēn qiǎo!"
 }
];
var translateDataRev = [
 {
  "vi": "Xe của khu du lịch mỗi lần đến một khu động vật đều dừng một lát.",
  "zh": "景区的车每到一个动物区都会停一会儿。",
  "py": "Jǐngqū de chē měi dào yí gè dòngwù qū dōu huì tíng yíhuìr."
 },
 {
  "vi": "Đây vẫn là lần đầu tiên mình đón Tết Trung thu ở Trung Quốc đấy.",
  "zh": "我还是第一次在中国过中秋节呢。",
  "py": "Wǒ háishi dì yí cì zài Zhōngguó guò Zhōngqiūjié ne."
 },
 {
  "vi": "Chu Lực chính là một trong số những người này.",
  "zh": "周力就是这些人之中的一位。",
  "py": "Zhōu Lì jiùshì zhèxiē rén zhīzhōng de yí wèi."
 },
 {
  "vi": "Tối hôm giao thừa, cả nhà vừa ăn cơm tất niên vừa xem Gala Xuân.",
  "zh": "除夕这天晚上，一家人一边吃年夜饭，一边看春晚。",
  "py": "Chúxī zhè tiān wǎnshang, yì jiārén yìbiān chī niányèfàn, yìbiān kàn Chūnwǎn."
 },
 {
  "vi": "Mỗi khi nhớ lại tuổi thơ, rất nhiều ký ức đẹp nhất của tôi đều diễn ra vào dịp Tết.",
  "zh": "每当回忆起童年，我最美好的记忆很多都发生在过年时。",
  "py": "Měi dāng huíyì qǐ tóngnián, wǒ zuì měihǎo de jìyì hěn duō dōu fāshēng zài guònián shí."
 }
];
var sgkData = [
 {
  "kieu": "kho",
  "de": "选词填空（一）· 综合练习",
  "vn": "Chọn từ thích hợp điền vào chỗ trống (Bài tập tổng hợp, sách trang 34–35). Sách không in đáp án — đây là đáp án tham khảo.",
  "dapSgk": false,
  "tu": [
   "仍然",
   "已",
   "香",
   "之中",
   "有着",
   "出现"
  ],
  "cau": [
   {
    "s": "西安也是一座＿＿三千多年历史的城市，欢迎您参观游玩。",
    "dap": [
     "有着"
    ]
   },
   {
    "s": "他＿＿在中国生活二十年了，生活习惯和我们没什么不同。",
    "dap": [
     "已"
    ]
   },
   {
    "s": "有妈妈细心照顾，孩子们每天都生活在幸福＿＿。",
    "dap": [
     "之中"
    ]
   },
   {
    "s": "妈妈终于＿＿在车站出口，孩子们开心极了。",
    "dap": [
     "出现"
    ]
   },
   {
    "s": "虽然遇到了很大困难，他＿＿坚持下来了。",
    "dap": [
     "仍然"
    ]
   },
   {
    "s": "这是什么咖啡？闻起来真＿＿！",
    "dap": [
     "香"
    ]
   }
  ]
 },
 {
  "kieu": "kho",
  "de": "选词填空（二）· 综合练习",
  "vn": "Chọn từ thích hợp điền vào chỗ trống (hội thoại, sách trang 35). Đáp án tham khảo.",
  "dapSgk": false,
  "tu": [
   "到来",
   "老虎",
   "喊",
   "回忆",
   "千万",
   "巧"
  ],
  "cau": [
   {
    "s": "A：你去的那家动物园有＿＿吗？　B：有，还有熊、大熊猫等好多种动物呢。",
    "dap": [
     "老虎"
    ]
   },
   {
    "s": "A：虽然离开家已四十年，但我还会经常＿＿起小时候在家时的生活。　B：我也是，年龄越大越想家。",
    "dap": [
     "回忆"
    ]
   },
   {
    "s": "A：明天的活动你们一定要来，＿＿别忘了。　B：好的，放心吧，我们会来的。",
    "dap": [
     "千万"
    ]
   },
   {
    "s": "A：我刚才＿＿了你几遍，你都没看我。　B：对不起，我戴着耳机呢，没听见。",
    "dap": [
     "喊"
    ]
   },
   {
    "s": "A：没想到咱们在机场遇见了，真是太＿＿了。我去北京，你呢？　B：是啊，我也去北京出差。",
    "dap": [
     "巧"
    ]
   },
   {
    "s": "A：小雨，你的生日快到了。生日＿＿时，你想要什么礼物？　B：我想要一个大蛋糕。",
    "dap": [
     "到来"
    ]
   }
  ]
 },
 {
  "kieu": "kho",
  "de": "选择合适的内容完成短文",
  "vn": "Chọn nội dung thích hợp (A–D) hoàn thành đoạn văn (sách trang 35). Đáp án tham khảo.",
  "dapSgk": false,
  "tu": [
   "兄弟姐妹都离开了家",
   "很难见面",
   "小时候喜欢过节",
   "一家人聚在一起"
  ],
  "cau": [
   {
    "s": "冬冬从小到大都喜欢过节，特别是春节和元宵节。＿＿，是因为可以吃到很多好吃的。长大后，＿＿，去外地上大学、工作。平时大家很忙，＿＿，但一到重要节日，在外地的兄弟姐妹就都回来了，和父母一起过节。＿＿，特别热闹，也特别开心。",
    "dap": [
     "小时候喜欢过节",
     "兄弟姐妹都离开了家",
     "很难见面",
     "一家人聚在一起"
    ]
   }
  ]
 },
 {
  "kieu": "gx",
  "de": "看图，用词语造句",
  "vn": "Nhìn tranh, đặt câu với từ cho sẵn (câu mẫu chỉ là gợi ý — câu của em đúng ngữ pháp, hợp tranh là đạt).",
  "cau": [
   {
    "anh": "/images/hsk4v3/bai-13/bt-1.webp",
    "s": "",
    "tu": "剧院",
    "dap": "今天晚上我们去剧院看了一场音乐演出，演出一个比一个精彩。",
    "giai": "Tranh: dàn nhạc biểu diễn trong nhà hát. 去剧院看演出; ôn 一个比一个 + Adj (Bài 13 · điểm 2)."
   },
   {
    "anh": "/images/hsk4v3/bai-13/bt-2.webp",
    "s": "",
    "tu": "景区",
    "dap": "长城是中国有名的景区，又大又美，每到节假日都有很多游客。",
    "giai": "Tranh: Vạn Lý Trường Thành giữa núi non. 有名的景区; 又……又……; 每到节假日 (từ mới bài khoá 1)."
   },
   {
    "anh": "/images/hsk4v3/bai-13/bt-3.webp",
    "s": "",
    "tu": "节假日",
    "dap": "节假日的时候，一家人一起去逛街，街道上特别热闹。",
    "giai": "Tranh: cả nhà dạo phố treo đèn lồng đỏ. 节假日的时候 + hoạt động; 街道 (từ mới bài khoá 2)."
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
  "tieuDe": "Kể chuyện ngày lễ (写作)",
  "gioiThieu": "Đề 写作 của sách HSK 4 (3.0) lần này yêu cầu viết một đoạn văn kể chuyện (ít nhất 140 chữ): giới thiệu ngày lễ em thích nhất ở nước mình và kể MỘT câu chuyện đã xảy ra trong dịp lễ đó — giống phần 书写 của đề thi HSK 4 mới.",
  "buoc": [
   "Đọc kỹ đề: phải có HAI phần — (1) ngày lễ em thích nhất và vì sao, (2) một câu chuyện cụ thể xảy ra khi đón lễ.",
   "Lập dàn ý theo các câu hỏi gợi ý: giới thiệu ngày lễ → phong tục, món ăn → câu chuyện (thời gian, địa điểm, chuyện gì, kết quả) → cảm xúc.",
   "Kể chuyện theo trình tự thời gian, dùng 大约 / 左右 cho thời gian, 怎么也没想到 cho điều bất ngờ.",
   "Dùng từ mới (传统、美食、团圆、回忆、记忆、童年、到来…) và ít nhất 2 điểm ngữ pháp của bài; ôn 不管……都……, 既……又……, 虽然……但是…….",
   "Câu kết nói cảm xúc / ý nghĩa của ngày lễ với em; tự soát số chữ (≥ 140) và lỗi chữ Hán trước khi nộp."
  ]
 },
 "de": "在你的国家，你最喜欢过什么节？请写一篇短文，说说过节时发生的故事，不少于140字。",
 "prompt": "Ở đất nước em, em thích đón ngày lễ nào nhất? Hãy viết một đoạn văn ngắn, kể một câu chuyện đã xảy ra khi đón lễ, không ít hơn 140 chữ.",
 "dan": [
  {
   "hoi": "你最喜欢过什么节？为什么？",
   "goiY": "在越南，我最喜欢过……。作为……，……对我们来说有着特别的意义。"
  },
  {
   "hoi": "这个节日有什么传统活动和美食？",
   "goiY": "每当……到来，人们既要……，又要……；大家会吃……等传统美食。"
  },
  {
   "hoi": "哪一年过节时发生了一件让你难忘的事？",
   "goiY": "去年 / 小时候的……，……发生了一件让我难忘的事。"
  },
  {
   "hoi": "事情是怎么发生的？结果怎么样？",
   "goiY": "那天晚上……点左右，……，我怎么也没想到……"
  },
  {
   "hoi": "这件事让你有什么感受？",
   "goiY": "这是我最美好的记忆之一。每当回忆起……，我都……"
  }
 ],
 "tuNen": [
  "传统",
  "节假日",
  "美食",
  "团圆",
  "回忆",
  "记忆",
  "童年",
  "到来",
  "意义",
  "有着",
  "年夜饭",
  "仍然",
  "巧",
  "出现"
 ],
 "cauTruc": [
  {
   "ten": "作为……，……有着……的意义",
   "nhan": "作为",
   "vd": "作为一年里最重要的传统节日，春节对越南人来说有着特别的意义。",
   "khi": "Câu MỞ: giới thiệu ngày lễ."
  },
  {
   "ten": "每当……到来，……都……",
   "nhan": "每当",
   "vd": "每当春节到来，不管在哪里工作，人们都想回家和家人团圆。",
   "khi": "Nói phong tục, hoạt động ngày lễ."
  },
  {
   "ten": "大约 / ……左右",
   "nhan": "左右",
   "vd": "晚上八点左右，突然有人敲门。",
   "khi": "Kể chuyện: nêu thời gian."
  },
  {
   "ten": "怎么也没想到……",
   "nhan": "怎么也没想到",
   "vd": "我打开门一看，怎么也没想到是爸爸妈妈！",
   "khi": "Kể chi tiết bất ngờ, cao trào của câu chuyện."
  },
  {
   "ten": "每当回忆起……，我都……",
   "nhan": "回忆",
   "vd": "每当回忆起那个春节，我都觉得特别幸福。",
   "khi": "Câu KẾT: cảm xúc, ý nghĩa."
  }
 ],
 "checklist": [
  "Đủ ít nhất 140 chữ Hán chưa?",
  "Đã có đủ hai phần: giới thiệu ngày lễ em thích nhất + một câu chuyện cụ thể xảy ra khi đón lễ chưa?",
  "Câu chuyện có đủ thời gian, địa điểm, sự việc, kết quả chưa? Có kể theo trình tự thời gian không?",
  "Đã dùng ít nhất 2 trong 4 điểm ngữ pháp (怎么都 / 也 + 不 / 没, 一+量词+比+一+量词, 大约 / 左右, 作为) và ít nhất 6 từ mới của bài chưa?",
  "Có câu kết nói cảm xúc / ý nghĩa của ngày lễ chưa?"
 ],
 "model": {
  "zh": "在越南，我最喜欢过春节。作为一年里最重要的传统节日，春节对越南人来说有着特别的意义。每当春节到来，不管在哪里工作，人们都想回家和家人团圆。春节前，大家既要打扫卫生，又要准备各种美食。去年春节，发生了一件让我难忘的事。那时我在胡志明市工作，由于工作需要，除夕不能回家，心里很难过。除夕晚上八点左右，突然有人敲门。我打开门一看，怎么也没想到是爸爸妈妈！原来他们大约早上六点就坐上了火车，还带来了妈妈包的粽子。那天晚上，我们一边吃年夜饭，一边聊天，我感觉特别幸福。这是我最美好的记忆之一。每当回忆起那个春节，我都觉得：地点可以变，但家人的爱永远不会变。",
  "py": "Zài Yuènán, wǒ zuì xǐhuan guò Chūnjié. Zuòwéi yì nián lǐ zuì zhòngyào de chuántǒng jiérì, Chūnjié duì Yuènánrén láishuō yǒuzhe tèbié de yìyì. Měi dāng Chūnjié dàolái, bùguǎn zài nǎlǐ gōngzuò, rénmen dōu xiǎng huíjiā hé jiārén tuányuán. Chūnjié qián, dàjiā jì yào dǎsǎo wèishēng, yòu yào zhǔnbèi gèzhǒng měishí. Qùnián Chūnjié, fāshēng le yí jiàn ràng wǒ nánwàng de shì. Nà shí wǒ zài Húzhìmíng Shì gōngzuò, yóuyú gōngzuò xūyào, Chúxī bù néng huíjiā, xīnli hěn nánguò. Chúxī wǎnshang bā diǎn zuǒyòu, tūrán yǒurén qiāo mén. Wǒ dǎ kāimén yí kàn, zěnme yě méi xiǎngdào shì bàba māma! Yuánlái tāmen dàyuē zǎoshang liù diǎn jiù zuòshang le huǒchē, hái dàilái le māma bāo de zòngzi. Nàtiān wǎnshang, wǒmen yìbiān chī niányèfàn, yìbiān liáotiān, wǒ gǎnjué tèbié xìngfú. Zhè shì wǒ zuì měihǎo de jìyì zhīyī. Měi dāng huíyì qǐ nàge Chūnjié, wǒ dōu juéde: dìdiǎn kěyǐ biàn, dàn jiārén de ài yǒngyuǎn bú huì biàn."
 }
};
