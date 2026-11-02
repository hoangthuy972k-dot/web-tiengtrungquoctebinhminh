// HSK 4 (3.0) · Bai 9 — sinh boi tools/hsk4v3/gan.js tu tools/hsk4v3/bai-9/ (dung sua tay).
var vocabData = [
 {
  "n": 1,
  "zh": "祝",
  "py": "zhù",
  "pos": "Động từ",
  "vn": "chúc",
  "hv": "chúc",
  "em": "🎂",
  "lesson": 1,
  "explain": [
   "Nói lời mong điều tốt đẹp sẽ đến với người khác: 祝你生日快乐, 祝你成功."
  ],
  "usage": "祝 + người + điều tốt đẹp · 祝你生日快乐 · 祝大家新年快乐 · 祝他们越来越幸福.",
  "collo": [
   "祝你生日快乐",
   "祝你成功",
   "祝他们幸福",
   "祝你一路平安"
  ],
  "colloFull": [
   {
    "zh": "祝你生日快乐",
    "py": "Zhù nǐ shēngrì kuàilè",
    "vn": "chúc bạn sinh nhật vui vẻ"
   },
   {
    "zh": "祝你成功",
    "py": "Zhù nǐ chénggōng",
    "vn": "chúc bạn thành công"
   },
   {
    "zh": "祝他们幸福",
    "py": "Zhù tāmen xìngfú",
    "vn": "chúc họ hạnh phúc"
   },
   {
    "zh": "祝你一路平安",
    "py": "Zhù nǐ yí lù píng'ān",
    "vn": "chúc bạn thượng lộ bình an"
   }
  ],
  "patterns": [
   {
    "s": "祝 + (người) + Adj / V-O",
    "m": "Lời chúc: 祝你考试顺利"
   },
   {
    "s": "祝 ≠ 祝贺",
    "m": "祝 = chúc điều sắp tới; 祝贺 = chúc mừng việc đã đạt được (祝贺你考上大学)"
   }
  ],
  "ex_zh": "家月，给你的，祝你生日快乐！",
  "ex_py": "Jiāyuè, gěi nǐ de, zhù nǐ shēngrì kuàilè!",
  "ex_vn": "Gia Nguyệt, tặng em này, chúc em sinh nhật vui vẻ!",
  "exList": [
   {
    "zh": "家月，给你的，祝你生日快乐！",
    "py": "Jiāyuè, gěi nǐ de, zhù nǐ shēngrì kuàilè!",
    "vn": "Gia Nguyệt, tặng em này, chúc em sinh nhật vui vẻ!"
   },
   {
    "zh": "祝你在新的一年里身体健康，工作顺利！",
    "py": "Zhù nǐ zài xīn de yì nián lǐ shēntǐ jiànkāng, gōngzuò shùnlì!",
    "vn": "Chúc bạn năm mới sức khỏe dồi dào, công việc thuận lợi!"
   }
  ],
  "hanzi": [
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
    "prompt": "Bất kể bận đến đâu, đến sinh nhật mẹ tôi đều gọi điện chúc mẹ sinh nhật vui vẻ.",
    "answer": "不管多忙，妈妈生日的时候我都会打电话祝她生日快乐。",
    "answerPy": "Bùguǎn duō máng, māma shēngrì de shíhou wǒ dōu huì dǎdiànhuà zhù tā shēngrì kuàilè.",
    "note": "Ôn 不管……都…… (Bài 8 · điểm 1).",
    "pair": "不管……都……"
   },
   {
    "promptLang": "vi",
    "prompt": "Nếu bạn thi đỗ, tôi sẽ mời bạn ăn cơm. Chúc bạn thi tốt!",
    "answer": "要是你考上了，我就请你吃饭。祝你考试顺利！",
    "answerPy": "Yàoshi nǐ kǎo shàng le, wǒ jiù qǐng nǐ chīfàn. Zhù nǐ kǎoshì shùnlì!",
    "note": "Ôn 要是……就…… (Bài 1 · điểm 2).",
    "pair": "要是……就……"
   }
  ]
 },
 {
  "n": 2,
  "zh": "巧克力",
  "py": "qiǎokèlì",
  "pos": "Danh từ",
  "vn": "sô-cô-la",
  "hv": "xảo khắc lực",
  "em": "🍫",
  "lesson": 1,
  "explain": [
   "Đồ ăn ngọt làm từ ca cao. Là từ phiên âm (chocolate) nên âm Hán Việt không mang nghĩa — chỉ cần nhớ âm qiǎokèlì."
  ],
  "usage": "一块巧克力 · 一盒巧克力 · 吃巧克力 · 巧克力蛋糕 · 送巧克力.",
  "collo": [
   "一块巧克力",
   "一盒巧克力",
   "巧克力蛋糕",
   "送巧克力"
  ],
  "colloFull": [
   {
    "zh": "一块巧克力",
    "py": "Yí kuài qiǎokèlì",
    "vn": "một miếng sô-cô-la"
   },
   {
    "zh": "一盒巧克力",
    "py": "Yì hé qiǎokèlì",
    "vn": "một hộp sô-cô-la"
   },
   {
    "zh": "巧克力蛋糕",
    "py": "Qiǎokèlì dàngāo",
    "vn": "bánh kem sô-cô-la"
   },
   {
    "zh": "送巧克力",
    "py": "Sòng qiǎokèlì",
    "vn": "tặng sô-cô-la"
   }
  ],
  "patterns": [
   {
    "s": "一块 / 一盒 + 巧克力",
    "m": "Lượng từ: 块 (miếng, thanh), 盒 (hộp)"
   },
   {
    "s": "花和巧克力",
    "m": "Món quà quen thuộc ngày sinh nhật, lễ tình nhân"
   }
  ],
  "ex_zh": "啊，好漂亮的花！还有巧克力！",
  "ex_py": "A, hǎo piàoliang de huā! Hái yǒu qiǎokèlì!",
  "ex_vn": "A, hoa đẹp quá! Còn có cả sô-cô-la nữa!",
  "exList": [
   {
    "zh": "啊，好漂亮的花！还有巧克力！",
    "py": "A, hǎo piàoliang de huā! Hái yǒu qiǎokèlì!",
    "vn": "A, hoa đẹp quá! Còn có cả sô-cô-la nữa!"
   },
   {
    "zh": "情人节那天，他送了女朋友一盒巧克力。",
    "py": "Qíng rén jié nà tiān, tā sòng le nǚpéngyǒu yì hé qiǎokèlì.",
    "vn": "Hôm lễ tình nhân, anh ấy tặng bạn gái một hộp sô-cô-la."
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
   },
   {
    "c": "克",
    "p": "kè",
    "type": "象形字 · Chữ tượng hình",
    "st": 7,
    "ord": "十 → 口 → 儿",
    "rad": "十 (thập – mười)",
    "mean": "khắc phục, chiến thắng; gam (g); dùng phiên âm (巧克力)",
    "tip": "Hình người đội chiếc mũ trụ nặng mà vẫn đứng vững → chịu được, thắng được → khắc phục; còn là đơn vị gam (克) và chữ phiên âm trong 巧克力.",
    "cf": "免 miǎn (miễn) — trên là 𠂊; 兑 duì — trên là 丷",
    "w": "巧克力 / 克服 / 公克"
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
    "prompt": "Sô-cô-la ngon thì ngon thật, có điều ăn nhiều dễ béo.",
    "answer": "巧克力好吃是好吃，不过吃多了容易胖。",
    "answerPy": "Qiǎokèlì hǎochī shì hǎochī, búguò chī duō le róngyì pàng.",
    "note": "Ôn ×是×，不过…… (Bài 3 · điểm 1).",
    "pair": "×是×，不过……"
   },
   {
    "promptLang": "vi",
    "prompt": "Sô-cô-la ở cửa hàng này có loại đắng có loại ngọt, bạn thích loại nào?",
    "answer": "这家店的巧克力有苦的有甜的，你喜欢哪种？",
    "answerPy": "Zhè jiā diàn de qiǎokèlì yǒu kǔ de yǒu tián de, nǐ xǐhuan nǎ zhǒng?",
    "note": "Ôn 有A有B (Bài 8 · điểm 4).",
    "pair": "有A有B"
   }
  ]
 },
 {
  "n": 3,
  "zh": "感动",
  "py": "gǎndòng",
  "pos": "Tính từ / Động từ",
  "vn": "cảm động; làm cảm động",
  "hv": "cảm động",
  "em": "😢",
  "lesson": 1,
  "explain": [
   "Trong lòng xúc động vì tình cảm, việc tốt của người khác. Vừa là tính từ (很感动, 好感动 = cảm động quá) vừa là động từ (感动了我 = làm tôi cảm động)."
  ],
  "usage": "好感动 · 很感动 · 感动得哭了 · ……感动了大家 · 让人感动.",
  "collo": [
   "好感动",
   "感动得哭了",
   "感动了大家",
   "让人感动"
  ],
  "colloFull": [
   {
    "zh": "好感动",
    "py": "Hǎo gǎndòng",
    "vn": "cảm động quá"
   },
   {
    "zh": "感动得哭了",
    "py": "Gǎndòng de kū le",
    "vn": "cảm động đến phát khóc"
   },
   {
    "zh": "感动了大家",
    "py": "Gǎndòng le dàjiā",
    "vn": "làm mọi người cảm động"
   },
   {
    "zh": "让人感动",
    "py": "Ràng rén gǎndòng",
    "vn": "khiến người ta cảm động"
   }
  ],
  "patterns": [
   {
    "s": "(Sub) + 很 / 好 + 感动",
    "m": "Tính từ: tôi rất cảm động"
   },
   {
    "s": "A + 感动了 + B / A + 让 + B + 很感动",
    "m": "Động từ: A làm B cảm động"
   }
  ],
  "ex_zh": "好感动！我不说你也懂我在想什么。",
  "ex_py": "Hǎo gǎndòng! Wǒ bù shuō nǐ yě dǒng wǒ zài xiǎng shénme.",
  "ex_vn": "Cảm động quá! Em không nói anh cũng hiểu em đang nghĩ gì.",
  "exList": [
   {
    "zh": "好感动！我不说你也懂我在想什么。",
    "py": "Hǎo gǎndòng! Wǒ bù shuō nǐ yě dǒng wǒ zài xiǎng shénme.",
    "vn": "Cảm động quá! Em không nói anh cũng hiểu em đang nghĩ gì."
   },
   {
    "zh": "这个电影让很多人感动得哭了。",
    "py": "Zhège diànyǐng ràng hěn duō rén gǎndòng de kū le.",
    "vn": "Bộ phim này khiến rất nhiều người cảm động đến phát khóc."
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
    "prompt": "Nhận được món quà của bạn, tôi cảm động đến mức không nói nên lời.",
    "answer": "收到你的礼物，我感动得说不出话来。",
    "answerPy": "Shōudào nǐ de lǐwù, wǒ gǎndòng de shuō bù chū huà lái.",
    "note": "Ôn bổ ngữ trạng thái Adj + 得 + … (HSK 3).",
    "pair": "感动得……"
   },
   {
    "promptLang": "vi",
    "prompt": "Câu chuyện của cô ấy đã làm mọi người cảm động, khiến chúng tôi hiểu tình bạn hơn.",
    "answer": "她的故事感动了大家，使我们更理解友情。",
    "answerPy": "Tā de gùshì gǎndòng le dàjiā, shǐ wǒmen gèng lǐjiě yǒuqíng.",
    "note": "Ôn 使 (Bài 7 · điểm 4).",
    "pair": "使 + người + V / Adj"
   }
  ]
 },
 {
  "n": 4,
  "zh": "浪漫",
  "py": "làngmàn",
  "pos": "Tính từ",
  "vn": "lãng mạn",
  "hv": "lãng mạn",
  "em": "🌹",
  "lesson": 1,
  "explain": [
   "Có không khí, cách làm đầy chất thơ và tình cảm, khiến người khác thấy ngọt ngào (thường nói về tình yêu, hẹn hò)."
  ],
  "usage": "很浪漫 · 浪漫的人 · 细心又浪漫 · 浪漫的晚餐.",
  "collo": [
   "很浪漫",
   "浪漫的晚餐",
   "浪漫的爱情",
   "细心又浪漫"
  ],
  "colloFull": [
   {
    "zh": "很浪漫",
    "py": "Hěn làngmàn",
    "vn": "rất lãng mạn"
   },
   {
    "zh": "浪漫的晚餐",
    "py": "Làngmàn de wǎn cān",
    "vn": "bữa tối lãng mạn"
   },
   {
    "zh": "浪漫的爱情",
    "py": "Làngmàn de àiqíng",
    "vn": "tình yêu lãng mạn"
   },
   {
    "zh": "细心又浪漫",
    "py": "Xì xīn yòu làngmàn",
    "vn": "chu đáo lại lãng mạn"
   }
  ],
  "patterns": [
   {
    "s": "(既 / 又) + Adj + 又 + 浪漫",
    "m": "Hai tính chất cùng lúc: 细心又浪漫"
   },
   {
    "s": "浪漫 + 的 + N",
    "m": "Làm định ngữ: 浪漫的晚上"
   }
  ],
  "ex_zh": "你真是细心又浪漫。",
  "ex_py": "Nǐ zhēn shì xì xīn yòu làngmàn.",
  "ex_vn": "Anh đúng là vừa chu đáo vừa lãng mạn.",
  "exList": [
   {
    "zh": "你真是细心又浪漫。",
    "py": "Nǐ zhēn shì xì xīn yòu làngmàn.",
    "vn": "Anh đúng là vừa chu đáo vừa lãng mạn."
   },
   {
    "zh": "在海边看日落，既浪漫又舒服。",
    "py": "Zài hǎi biān kàn rì luò, jì làngmàn yòu shūfu.",
    "vn": "Ngắm hoàng hôn bên bờ biển vừa lãng mạn vừa dễ chịu."
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
    "c": "漫",
    "p": "màn",
    "type": "左右结构 · Trái-phải",
    "st": 14,
    "ord": "氵 (thủy) trái → 曼 (mạn) phải",
    "rad": "氵 (thủy – nước)",
    "mean": "tràn lan, mênh mông",
    "tip": "Bộ nước 氵 (lan tràn khắp nơi) + 曼 (kéo dài) → nước TRÀN LAN không giới hạn, mở rộng thành cảm xúc BAY BỔNG, LÃNG MẠN.",
    "cf": "慢 (màn – \"chậm\", bộ 忄 khác)",
    "w": "浪漫 / 漫画 / 弥漫"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Anh ấy vừa hài hước vừa lãng mạn, các bạn nữ đều rất thích anh ấy.",
    "answer": "他既幽默又浪漫，女同学都很喜欢他。",
    "answerPy": "Tā jì yōumò yòu làngmàn, nǚ tóngxué dōu hěn xǐhuan tā.",
    "note": "Ôn 既……又…… (Bài 4 · điểm 3).",
    "pair": "既……又……"
   },
   {
    "promptLang": "vi",
    "prompt": "Nếu muốn lãng mạn một chút thì chúng ta ra biển ngắm hoàng hôn đi.",
    "answer": "要是想浪漫一点儿，我们就去海边看日落吧。",
    "answerPy": "Yàoshi xiǎng làngmàn yìdiǎnr, wǒmen jiù qù hǎi biān kàn rì luò ba.",
    "note": "Ôn 要是……就…… (Bài 1 · điểm 2).",
    "pair": "要是……就……"
   }
  ]
 },
 {
  "n": 5,
  "zh": "幽默",
  "py": "yōumò",
  "pos": "Tính từ",
  "vn": "hài hước, dí dỏm",
  "hv": "u mặc",
  "em": "😄",
  "lesson": 1,
  "explain": [
   "Nói năng, cư xử vui, có duyên, khiến người khác bật cười. Là từ phiên âm (humour). Danh từ hay gặp: 幽默感 = khiếu hài hước."
  ],
  "usage": "很幽默 · 幽默的人 · 你的幽默 · 有幽默感.",
  "collo": [
   "很幽默",
   "幽默的话",
   "有幽默感",
   "特别幽默"
  ],
  "colloFull": [
   {
    "zh": "很幽默",
    "py": "Hěn yōumò",
    "vn": "rất hài hước"
   },
   {
    "zh": "幽默的话",
    "py": "Yōumò dehuà",
    "vn": "câu nói dí dỏm"
   },
   {
    "zh": "有幽默感",
    "py": "Yǒu yōumò gǎn",
    "vn": "có khiếu hài hước"
   },
   {
    "zh": "特别幽默",
    "py": "Tèbié yōumò",
    "vn": "đặc biệt hài hước"
   }
  ],
  "patterns": [
   {
    "s": "Sub + 很 / 特别 + 幽默",
    "m": "Nhận xét tính cách"
   },
   {
    "s": "幽默 ≠ 好笑",
    "m": "幽默 = khen người có duyên; 好笑 = buồn cười (đôi khi là chê)"
   }
  ],
  "ex_zh": "其实刚认识不久，你的幽默与耐心就很吸引我。",
  "ex_py": "Qíshí gāng rènshi bùjiǔ, nǐ de yōumò yǔ nàixīn jiù hěn xīyǐn wǒ.",
  "ex_vn": "Thật ra mới quen không lâu, sự hài hước và kiên nhẫn của anh đã rất thu hút em.",
  "exList": [
   {
    "zh": "其实刚认识不久，你的幽默与耐心就很吸引我。",
    "py": "Qíshí gāng rènshi bùjiǔ, nǐ de yōumò yǔ nàixīn jiù hěn xīyǐn wǒ.",
    "vn": "Thật ra mới quen không lâu, sự hài hước và kiên nhẫn của anh đã rất thu hút em."
   },
   {
    "zh": "我们的中文老师特别幽默，上课时大家总是笑个不停。",
    "py": "Wǒmen de Zhōngwén lǎoshī tèbié yōumò, shàngkè shí dàjiā zǒngshì xiào gè bù tíng.",
    "vn": "Thầy dạy tiếng Trung của chúng tôi đặc biệt hài hước, trong giờ học mọi người cười không ngớt."
   }
  ],
  "hanzi": [
   {
    "c": "幽",
    "p": "yōu",
    "type": "半包围结构 · Bán bao vây",
    "st": 9,
    "ord": "山 bao ngoài → 幺+幺 trong",
    "rad": "山 (sơn – núi)",
    "mean": "sâu kín, u tịch",
    "tip": "Bộ núi 山 bao quanh hai sợi tơ nhỏ 幺幺 (mờ nhạt) → nơi SÂU KÍN trong núi, mượn âm để phiên âm từ \"humor\" thành 幽默.",
    "cf": "幽 dễ nhầm với 幼 (yòu – \"trẻ nhỏ\", bộ 力 khác)",
    "w": "幽默 / 幽静 / 幽会"
   },
   {
    "c": "默",
    "p": "mò",
    "type": "形声字 · Chữ hình thanh",
    "st": 16,
    "ord": "黑 → 犬",
    "rad": "黑 (hắc – đen)",
    "mean": "im lặng, lặng lẽ; (viết) thuộc lòng",
    "tip": "Con chó (犬) trong bóng tối (黑, cũng chỉ âm mò) nằm im không sủa → im lặng — 沉默, 默默; trong 幽默 là phiên âm humour.",
    "cf": "墨 mò (mực) — dưới là 土; 黑 hēi (đen) — không có 犬",
    "w": "幽默 / 默默 / 沉默"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Anh ấy nói chuyện rất hài hước, ở bên anh ấy mọi người đều rất vui.",
    "answer": "他说话很幽默，跟他在一起，大家都很开心。",
    "answerPy": "Tā shuōhuà hěn yōumò, gēn tā zài yìqǐ, dàjiā dōu hěn kāixīn.",
    "note": "Mẫu 跟……在一起 (HSK 3).",
    "pair": "Sub + 很幽默"
   },
   {
    "promptLang": "vi",
    "prompt": "Lấy tính cách mà nói, anh ấy vừa hài hước vừa có kiên nhẫn.",
    "answer": "拿性格来说，他既幽默又有耐心。",
    "answerPy": "Ná xìnggé láishuō, tā jì yōumò yòu yǒu nàixīn.",
    "note": "Ôn 拿……来说 (Bài 7 · điểm 3) + 既……又…… (Bài 4 · điểm 3).",
    "pair": "拿……来说"
   }
  ]
 },
 {
  "n": 6,
  "zh": "耐心",
  "py": "nàixīn",
  "pos": "Tính từ / Danh từ",
  "vn": "kiên nhẫn; sự kiên nhẫn",
  "hv": "nại tâm",
  "em": "🧩",
  "lesson": 1,
  "explain": [
   "Không vội, không bực, bình tĩnh làm hoặc chờ đến cùng. Tính từ: 很耐心; danh từ: 有耐心 / 没有耐心."
  ],
  "usage": "很耐心 · 有耐心 / 没有耐心 · 耐心地 + V (耐心地解释).",
  "collo": [
   "有耐心",
   "没有耐心",
   "耐心地解释",
   "耐心等"
  ],
  "colloFull": [
   {
    "zh": "有耐心",
    "py": "Yǒu nàixīn",
    "vn": "có kiên nhẫn"
   },
   {
    "zh": "没有耐心",
    "py": "Méiyǒu nàixīn",
    "vn": "không có kiên nhẫn"
   },
   {
    "zh": "耐心地解释",
    "py": "Nàixīn de jiěshì",
    "vn": "kiên nhẫn giải thích"
   },
   {
    "zh": "耐心等",
    "py": "Nàixīn děng",
    "vn": "kiên nhẫn chờ"
   }
  ],
  "patterns": [
   {
    "s": "很 + 耐心 / 有 + 耐心",
    "m": "Tính từ / danh từ"
   },
   {
    "s": "耐心 + 地 + V",
    "m": "Làm trạng ngữ: kiên nhẫn làm gì"
   }
  ],
  "ex_zh": "你的幽默与耐心就很吸引我。",
  "ex_py": "Nǐ de yōumò yǔ nàixīn jiù hěn xīyǐn wǒ.",
  "ex_vn": "Sự hài hước và kiên nhẫn của anh đã rất thu hút em.",
  "exList": [
   {
    "zh": "你的幽默与耐心就很吸引我。",
    "py": "Nǐ de yōumò yǔ nàixīn jiù hěn xīyǐn wǒ.",
    "vn": "Sự hài hước và kiên nhẫn của anh đã rất thu hút em."
   },
   {
    "zh": "玩拼图需要很多耐心，我玩了一会儿就玩不下去了。",
    "py": "Wán pīn tú xūyào hěn duō nàixīn, wǒ wán le yíhuìr jiù wán bú xiàqù le.",
    "vn": "Chơi xếp hình cần rất nhiều kiên nhẫn, tôi chơi một lúc là không chơi nổi nữa."
   }
  ],
  "hanzi": [
   {
    "c": "耐",
    "p": "nài",
    "type": "左右结构 · Trái-phải",
    "st": 9,
    "ord": "而 (nhi) trái → 寸 (thốn) phải",
    "rad": "而 (nhi)",
    "mean": "chịu đựng",
    "tip": "Bộ 而 + 寸(biểu âm) → CHỊU ĐỰNG được lâu dài, kết hợp 心(lòng) thành 耐心 = KIÊN NHẪN (lòng chịu đựng bền bỉ).",
    "cf": "耐 dễ nhầm với 而 đơn lẻ (liên từ \"mà\")",
    "w": "耐心 / 忍耐 / 耐用"
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
    "prompt": "Dạy trẻ con nhất định phải có kiên nhẫn, nếu không trẻ sẽ không muốn học.",
    "answer": "教孩子一定要有耐心，否则孩子会不想学。",
    "answerPy": "Jiào háizi yídìng yào yǒu nàixīn, fǒuzé háizi huì bù xiǎng xué.",
    "note": "Ôn 否则 (Bài 8 · điểm 2).",
    "pair": "……，否则……"
   },
   {
    "promptLang": "vi",
    "prompt": "Bất kể học sinh hỏi bao nhiêu lần, cô giáo đều kiên nhẫn giải thích.",
    "answer": "不管学生问多少次，老师都耐心地解释。",
    "answerPy": "Bùguǎn xuésheng wèn duōshǎo cì, lǎoshī dōu nàixīn de jiěshì.",
    "note": "Ôn 不管……都…… (Bài 8 · điểm 1).",
    "pair": "不管……都……"
   }
  ]
 },
 {
  "n": 7,
  "zh": "吸引",
  "py": "xīyǐn",
  "pos": "Động từ",
  "vn": "thu hút, lôi cuốn",
  "hv": "hấp dẫn",
  "em": "🧲",
  "lesson": 1,
  "explain": [
   "Làm cho người khác chú ý, thích và muốn đến gần. Lưu ý: 吸引 là ĐỘNG TỪ (A 吸引 B). Muốn nói “rất hấp dẫn” (tính từ) thì dùng 很吸引人 / 有吸引力."
  ],
  "usage": "A + 吸引 + B · 很吸引我 · 吸引了很多人 · 被……吸引住.",
  "collo": [
   "吸引人",
   "吸引顾客",
   "被……吸引住",
   "吸引注意"
  ],
  "colloFull": [
   {
    "zh": "吸引人",
    "py": "Xīyǐn rén",
    "vn": "thu hút người ta"
   },
   {
    "zh": "吸引顾客",
    "py": "Xīyǐn gùkè",
    "vn": "thu hút khách hàng"
   },
   {
    "zh": "被……吸引住",
    "py": "Bèi…… xīyǐn zhù",
    "vn": "bị … thu hút"
   },
   {
    "zh": "吸引注意",
    "py": "Xīyǐn zhùyì",
    "vn": "thu hút sự chú ý"
   }
  ],
  "patterns": [
   {
    "s": "A + 吸引 + B",
    "m": "A thu hút B"
   },
   {
    "s": "B + 被 + A + 吸引住了",
    "m": "Câu bị động: B bị A thu hút"
   }
  ],
  "ex_zh": "其实刚认识不久，你的幽默与耐心就很吸引我。",
  "ex_py": "Qíshí gāng rènshi bùjiǔ, nǐ de yōumò yǔ nàixīn jiù hěn xīyǐn wǒ.",
  "ex_vn": "Thật ra mới quen không lâu, sự hài hước và kiên nhẫn của anh đã rất thu hút em.",
  "exList": [
   {
    "zh": "其实刚认识不久，你的幽默与耐心就很吸引我。",
    "py": "Qíshí gāng rènshi bùjiǔ, nǐ de yōumò yǔ nàixīn jiù hěn xīyǐn wǒ.",
    "vn": "Thật ra mới quen không lâu, sự hài hước và kiên nhẫn của anh đã rất thu hút em."
   },
   {
    "zh": "这家小店的咖啡又香又便宜，吸引了不少年轻人。",
    "py": "Zhè jiā xiǎo diàn de kāfēi yòu xiāng yòu piányi, xīyǐn le bù shào niánqīngrén.",
    "vn": "Cà phê của tiệm nhỏ này vừa thơm vừa rẻ, thu hút không ít người trẻ."
   }
  ],
  "hanzi": [
   {
    "c": "吸",
    "p": "xī",
    "type": "左右结构 · Trái-phải",
    "st": 6,
    "ord": "口 (khẩu) trái → 及 (cập) phải",
    "rad": "口 (khẩu – miệng)",
    "mean": "hút vào",
    "tip": "Bộ miệng 口 (hít thở) + 及 (đạt tới, kéo tới) → dùng MIỆNG kéo không khí vào = HÍT, mở rộng thành THU HÚT.",
    "cf": "吸 dễ nhầm với 极 (jí – \"cực kỳ\", bộ khác)",
    "w": "吸引 / 呼吸 / 吸烟"
   },
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
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Tôi đã bị sự hài hước của anh ấy thu hút.",
    "answer": "我被他的幽默吸引住了。",
    "answerPy": "Wǒ bèi tā de yōumò xīyǐn zhù le.",
    "note": "Câu bị động chữ 被 (HSK 3).",
    "pair": "被……吸引住"
   },
   {
    "promptLang": "vi",
    "prompt": "Thành phố này có núi có sông, thu hút rất nhiều du khách.",
    "answer": "这个城市有山有水，吸引了很多游客。",
    "answerPy": "Zhège chéngshì yǒu shān yǒu shuǐ, xīyǐn le hěn duō yóukè.",
    "note": "Ôn 有A有B (Bài 8 · điểm 4).",
    "pair": "有A有B"
   }
  ]
 },
 {
  "n": 8,
  "zh": "当时",
  "py": "dāngshí",
  "pos": "Danh từ",
  "vn": "lúc đó, khi ấy",
  "hv": "đương thời",
  "em": "⏳",
  "lesson": 1,
  "explain": [
   "Chỉ thời điểm trong quá khứ vừa được nhắc tới: “lúc đó, khi ấy”. Bẫy Hán Việt: “đương thời” trong tiếng Việt là “thời bấy giờ”, còn 当时 dùng được cả cho một khoảnh khắc cụ thể."
  ],
  "usage": "当时 + (Sub) + V · Sub + 当时 + V · 当时的情况.",
  "collo": [
   "当时的情况",
   "我当时",
   "当时还不知道",
   "在当时"
  ],
  "colloFull": [
   {
    "zh": "当时的情况",
    "py": "Dāngshí de qíngkuàng",
    "vn": "tình hình lúc đó"
   },
   {
    "zh": "我当时",
    "py": "Wǒ dāngshí",
    "vn": "tôi lúc đó"
   },
   {
    "zh": "当时还不知道",
    "py": "Dāngshí hái bù zhīdao",
    "vn": "lúc đó còn chưa biết"
   },
   {
    "zh": "在当时",
    "py": "Zài dāngshí",
    "vn": "vào thời điểm ấy"
   }
  ],
  "patterns": [
   {
    "s": "当时 + Sub + V / Sub + 当时 + V",
    "m": "当时 đứng trước hoặc sau chủ ngữ"
   },
   {
    "s": "当时……，现在……",
    "m": "So sánh lúc đó – bây giờ"
   }
  ],
  "ex_zh": "不过我当时也只把你当普通朋友。",
  "ex_py": "Búguò wǒ dāngshí yě zhǐ bǎ nǐ dāng pǔ tōng péngyou.",
  "ex_vn": "Có điều lúc đó em cũng chỉ coi anh là bạn bình thường.",
  "exList": [
   {
    "zh": "不过我当时也只把你当普通朋友。",
    "py": "Búguò wǒ dāngshí yě zhǐ bǎ nǐ dāng pǔ tōng péngyou.",
    "vn": "Có điều lúc đó em cũng chỉ coi anh là bạn bình thường."
   },
   {
    "zh": "我当时太紧张了，一句话也说不出来。",
    "py": "Wǒ dāngshí tài jǐnzhāng le, yí jù huà yě shuō bù chū lái.",
    "vn": "Lúc đó tôi căng thẳng quá, một câu cũng không nói ra được."
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
    "prompt": "Lúc đó tôi không kịp nói cảm ơn anh ấy.",
    "answer": "我当时没来得及跟他说谢谢。",
    "answerPy": "Wǒ dāngshí méi láidejí gēn tā shuō xièxiè.",
    "note": "Ôn 来得及 / 来不及 (Bài 4 · điểm 4).",
    "pair": "当时没来得及……"
   },
   {
    "promptLang": "vi",
    "prompt": "Lúc đó tôi chỉ coi cô ấy là bạn bình thường, có điều bây giờ cô ấy là bạn gái tôi rồi.",
    "answer": "我当时只把她当普通朋友，不过现在她是我的女朋友了。",
    "answerPy": "Wǒ dāngshí zhǐ bǎ tā dāng pǔ tōng péngyou, búguò xiànzài tā shì wǒ de nǚpéngyǒu le.",
    "note": "Ôn 不过 (Bài 2 · điểm 2); 把……当…… = coi … là ….",
    "pair": "把……当……"
   }
  ]
 },
 {
  "n": 9,
  "zh": "错过",
  "py": "cuòguò",
  "pos": "Động từ",
  "vn": "bỏ lỡ, lỡ",
  "hv": "thác quá",
  "em": "🚆",
  "lesson": 1,
  "explain": [
   "Để mất cơ hội, thời gian, chuyến xe… vì không kịp hoặc không nắm lấy. Bẫy: 错过 không phải “làm sai” (做错)."
  ],
  "usage": "错过机会 · 错过飞机 / 火车 · 错过了 · 哪能错过呢.",
  "collo": [
   "错过机会",
   "错过飞机",
   "错过时间",
   "错过了你"
  ],
  "colloFull": [
   {
    "zh": "错过机会",
    "py": "Cuòguò jīhuì",
    "vn": "bỏ lỡ cơ hội"
   },
   {
    "zh": "错过飞机",
    "py": "Cuòguò fēijī",
    "vn": "lỡ chuyến bay"
   },
   {
    "zh": "错过时间",
    "py": "Cuòguò shíjiān",
    "vn": "lỡ giờ"
   },
   {
    "zh": "错过了你",
    "py": "Cuòguò le nǐ",
    "vn": "bỏ lỡ bạn"
   }
  ],
  "patterns": [
   {
    "s": "错过 + N (机会 / 车 / 比赛)",
    "m": "Bỏ lỡ cái gì"
   },
   {
    "s": "哪能错过呢？",
    "m": "Câu hỏi tu từ: sao mà bỏ lỡ được (= nhất định không bỏ lỡ)"
   }
  ],
  "ex_zh": "如果你没有一直找我聊天儿，我们可能就错过了。",
  "ex_py": "Rúguǒ nǐ méiyǒu yìzhí zhǎo wǒ liáotiānr, wǒmen kěnéng jiù cuòguò le.",
  "ex_vn": "Nếu anh không luôn tìm em trò chuyện, có lẽ chúng mình đã lỡ nhau rồi.",
  "exList": [
   {
    "zh": "如果你没有一直找我聊天儿，我们可能就错过了。",
    "py": "Rúguǒ nǐ méiyǒu yìzhí zhǎo wǒ liáotiānr, wǒmen kěnéng jiù cuòguò le.",
    "vn": "Nếu anh không luôn tìm em trò chuyện, có lẽ chúng mình đã lỡ nhau rồi."
   },
   {
    "zh": "快走吧，再不走就来不及了，我们会错过火车的。",
    "py": "Kuài zǒu ba, zài bù zǒu jiù láibùjí le, wǒmen huì cuòguò huǒchē de.",
    "vn": "Đi nhanh thôi, không đi ngay thì không kịp, chúng ta sẽ lỡ tàu mất."
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
    "prompt": "Mau dậy đi, nếu không sẽ lỡ máy bay đấy.",
    "answer": "快起床吧，否则会错过飞机的。",
    "answerPy": "Kuài qǐchuáng ba, fǒuzé huì cuòguò fēijī de.",
    "note": "Ôn 否则 (Bài 8 · điểm 2).",
    "pair": "……，否则……"
   },
   {
    "promptLang": "vi",
    "prompt": "Cơ hội tốt như vậy có gì mà phải nghĩ, đừng bỏ lỡ.",
    "answer": "这么好的机会，有什么好想的，别错过了。",
    "answerPy": "Zhème hǎo de jīhuì, yǒu shénme hǎo xiǎng de, bié cuòguò le.",
    "note": "Ôn (没)有什么(好)×的 (Bài 6 · điểm 2).",
    "pair": "有什么好×的"
   }
  ]
 },
 {
  "n": 10,
  "zh": "幸运",
  "py": "xìngyùn",
  "pos": "Tính từ / Danh từ",
  "vn": "may mắn; sự may mắn",
  "hv": "hạnh vận",
  "em": "🍀",
  "lesson": 1,
  "explain": [
   "Gặp được điều tốt mà không phải ai cũng có: “may mắn”. Phân biệt với 幸福 (hạnh phúc) — từ số 11."
  ],
  "usage": "很幸运 · 觉得很幸运 · 幸运的是…… · 幸运的人.",
  "collo": [
   "很幸运",
   "幸运的是",
   "幸运的人",
   "双份幸运"
  ],
  "colloFull": [
   {
    "zh": "很幸运",
    "py": "Hěn xìngyùn",
    "vn": "rất may mắn"
   },
   {
    "zh": "幸运的是",
    "py": "Xìngyùn de shì",
    "vn": "điều may mắn là"
   },
   {
    "zh": "幸运的人",
    "py": "Xìngyùn de rén",
    "vn": "người may mắn"
   },
   {
    "zh": "双份幸运",
    "py": "Shuāng fèn xìngyùn",
    "vn": "may mắn nhân đôi"
   }
  ],
  "patterns": [
   {
    "s": "Sub + (觉得) + 很幸运",
    "m": "Thấy mình may mắn"
   },
   {
    "s": "幸运的是，……",
    "m": "Mở câu: điều may là …"
   }
  ],
  "ex_zh": "遇见你，我也觉得很幸运。",
  "ex_py": "Yùjiàn nǐ, wǒ yě juéde hěn xìngyùn.",
  "ex_vn": "Gặp được anh, em cũng thấy mình rất may mắn.",
  "exList": [
   {
    "zh": "遇见你，我也觉得很幸运。",
    "py": "Yùjiàn nǐ, wǒ yě juéde hěn xìngyùn.",
    "vn": "Gặp được anh, em cũng thấy mình rất may mắn."
   },
   {
    "zh": "我很幸运，刚到中国就认识了几个热情的中国朋友。",
    "py": "Wǒ hěn xìngyùn, gāng dào Zhōngguó jiù rènshi le jǐ gè rèqíng de Zhōngguó péngyou.",
    "vn": "Tôi rất may mắn, vừa đến Trung Quốc đã quen được mấy người bạn Trung Quốc nhiệt tình."
   }
  ],
  "hanzi": [
   {
    "c": "幸",
    "p": "xìng",
    "type": "会意字 · Chữ hội ý",
    "st": 8,
    "ord": "土 → 丷 → 干",
    "rad": "干 (can)",
    "mean": "may mắn, hạnh phúc",
    "tip": "Hình cái gông cùm — thoát được gông cùm là điều may → may mắn — 幸运, 幸福, 幸好.",
    "cf": "辛 xīn (cay, vất vả) — trên là 立; 李 lǐ — trên là 木, dưới là 子",
    "w": "幸运 / 幸福 / 幸好"
   },
   {
    "c": "运",
    "p": "yùn",
    "type": "形声字 · Chữ hình thanh",
    "st": 7,
    "ord": "云 → 辶",
    "rad": "辶 (sước – bước đi)",
    "mean": "chuyển động, vận chuyển",
    "tip": "辶 (bước đi) + 云 (mây, chỉ âm): mây trôi đi khắp nơi → chuyển động. 运动 (HSK2 Bài 7) = vận động, thể thao.",
    "cf": "远 yuǎn (xa – HSK2 Bài 2) — bên trong là 元",
    "w": "运动会 / 运动 / 运动员"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "May mắn là thời gian vẫn còn kịp, chúng tôi không lỡ chuyến bay.",
    "answer": "幸运的是，时间还来得及，我们没错过飞机。",
    "answerPy": "Xìngyùn de shì, shíjiān hái láidejí, wǒmen méi cuòguò fēijī.",
    "note": "Ôn 来得及 (Bài 4 · điểm 4).",
    "pair": "幸运的是……"
   },
   {
    "promptLang": "vi",
    "prompt": "Bạn không chỉ may mắn mà còn rất nỗ lực.",
    "answer": "你不仅很幸运，而且非常努力。",
    "answerPy": "Nǐ bùjǐn hěn xìngyùn, érqiě fēicháng nǔlì.",
    "note": "Ôn 不仅……而且…… (Bài 3 · điểm 2).",
    "pair": "不仅……而且……"
   }
  ]
 },
 {
  "n": 11,
  "zh": "幸福",
  "py": "xìngfú",
  "pos": "Tính từ / Danh từ",
  "vn": "hạnh phúc",
  "hv": "hạnh phúc",
  "em": "🏡",
  "lesson": 2,
  "explain": [
   "Cuộc sống, tình cảm đầy đủ, vui vẻ lâu dài. Phân biệt: 幸福 = trạng thái sống lâu dài; 快乐 / 开心 = vui trong lúc đó; 幸运 = gặp may."
  ],
  "usage": "很幸福 · 幸福的家庭 · 越来越幸福 · 生活幸福.",
  "collo": [
   "很幸福",
   "幸福的家庭",
   "幸福的生活",
   "越来越幸福"
  ],
  "colloFull": [
   {
    "zh": "很幸福",
    "py": "Hěn xìngfú",
    "vn": "rất hạnh phúc"
   },
   {
    "zh": "幸福的家庭",
    "py": "Xìngfú de jiātíng",
    "vn": "gia đình hạnh phúc"
   },
   {
    "zh": "幸福的生活",
    "py": "Xìngfú de shēnghuó",
    "vn": "cuộc sống hạnh phúc"
   },
   {
    "zh": "越来越幸福",
    "py": "Yuèláiyuè xìngfú",
    "vn": "ngày càng hạnh phúc"
   }
  ],
  "patterns": [
   {
    "s": "祝 + 你们 + 越来越幸福",
    "m": "Lời chúc đám cưới"
   },
   {
    "s": "幸福 ≠ 幸运",
    "m": "Hạnh phúc (trạng thái lâu dài) ≠ may mắn (gặp điều tốt)"
   }
  ],
  "ex_zh": "看到一飞和同乐结婚后这么幸福，我这个介绍人也特别开心。",
  "ex_py": "Kàn dào Yīfēi hé Tónglè jiéhūn hòu zhème xìngfú, wǒ zhège jièshào rén yě tèbié kāixīn.",
  "ex_vn": "Thấy Nhất Phi và Đồng Lạc cưới nhau xong hạnh phúc như vậy, người làm mai như em cũng đặc biệt vui.",
  "exList": [
   {
    "zh": "看到一飞和同乐结婚后这么幸福，我这个介绍人也特别开心。",
    "py": "Kàn dào Yīfēi hé Tónglè jiéhūn hòu zhème xìngfú, wǒ zhège jièshào rén yě tèbié kāixīn.",
    "vn": "Thấy Nhất Phi và Đồng Lạc cưới nhau xong hạnh phúc như vậy, người làm mai như em cũng đặc biệt vui."
   },
   {
    "zh": "随着生活越来越好，老人们也越来越幸福。",
    "py": "Suízhe shēnghuó yuèláiyuè hǎo, lǎorén men yě yuèláiyuè xìngfú.",
    "vn": "Cùng với cuộc sống ngày càng tốt lên, người già cũng ngày càng hạnh phúc."
   }
  ],
  "hanzi": [
   {
    "c": "幸",
    "p": "xìng",
    "type": "会意字 · Chữ hội ý",
    "st": 8,
    "ord": "土 → 丷 → 干",
    "rad": "干 (can)",
    "mean": "may mắn, hạnh phúc",
    "tip": "Hình cái gông cùm — thoát được gông cùm là điều may → may mắn — 幸运, 幸福, 幸好.",
    "cf": "辛 xīn (cay, vất vả) — trên là 立; 李 lǐ — trên là 木, dưới là 子",
    "w": "幸运 / 幸福 / 幸好"
   },
   {
    "c": "福",
    "p": "fú",
    "type": "左右结构 · Trái-phải",
    "st": 13,
    "ord": "礻 (kỳ) trái → 畐 phải",
    "rad": "礻 (kỳ – thần linh, cúng tế)",
    "mean": "phúc, may mắn",
    "tip": "Bộ 礻 (thần linh phù hộ) + 畐 (đầy đủ, sung túc) → được THẦN PHÙ HỘ cho ĐẦY ĐỦ, sung túc = PHÚC, HẠNH PHÚC.",
    "cf": "副 (fù – \"phó, phụ\", cũng có 畐\" nhưng bộ khác)",
    "w": "幸福 / 福气 / 祝福"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Chúc hai bạn ngày càng hạnh phúc!",
    "answer": "祝你们越来越幸福！",
    "answerPy": "Zhù nǐmen yuèláiyuè xìngfú!",
    "note": "Lời chúc ở cuối bài khoá 2.",
    "pair": "祝……越来越……"
   },
   {
    "promptLang": "vi",
    "prompt": "Bất kể cuộc sống thế nào, cả nhà ở bên nhau là rất hạnh phúc rồi.",
    "answer": "不管生活怎么样，一家人在一起都很幸福。",
    "answerPy": "Bùguǎn shēnghuó zěnmeyàng, yì jiārén zài yìqǐ dōu hěn xìngfú.",
    "note": "Ôn 不管……都…… (Bài 8 · điểm 1).",
    "pair": "不管……都……"
   }
  ]
 },
 {
  "n": 12,
  "zh": "尽管",
  "py": "jǐnguǎn",
  "pos": "Liên từ",
  "vn": "mặc dù, tuy",
  "hv": "tận quản",
  "em": "🔀",
  "lesson": 2,
  "explain": [
   "Liên từ nhượng bộ, nghĩa như 虽然: vế trước thừa nhận một sự thật, vế sau dùng 但是 / 可是 (+ 还是) nói kết quả trái lại. Âm Hán Việt “tận quản” không giúp đoán nghĩa — nhớ: 尽管 = mặc dù."
  ],
  "usage": "尽管……，但是 / 可是……(还是)…… · Sub + 尽管…… / 尽管 + Sub…….",
  "collo": [
   "尽管如此",
   "尽管很累",
   "尽管……，但是……",
   "尽管……，还是……"
  ],
  "colloFull": [
   {
    "zh": "尽管如此",
    "py": "Jǐnguǎn rú cǐ",
    "vn": "mặc dù vậy"
   },
   {
    "zh": "尽管很累",
    "py": "Jǐnguǎn hěn lèi",
    "vn": "mặc dù rất mệt"
   },
   {
    "zh": "尽管……，但是……",
    "py": "Jǐnguǎn……, dànshì……",
    "vn": "tuy … nhưng …"
   },
   {
    "zh": "尽管……，还是……",
    "py": "Jǐnguǎn……, háishì……",
    "vn": "dù … vẫn …"
   }
  ],
  "patterns": [
   {
    "s": "尽管 + A，但是 / 可是 + B",
    "m": "A là sự thật, B là kết quả trái chiều"
   },
   {
    "s": "尽管 ≈ 虽然",
    "m": "尽管 trang trọng hơn một chút"
   }
  ],
  "ex_zh": "他们尽管性格不同，但是有很多共同爱好。",
  "ex_py": "Tāmen jǐnguǎn xìnggé bùtóng, dànshì yǒu hěn duō gòngtóng àihào.",
  "ex_vn": "Họ tuy tính cách khác nhau nhưng có rất nhiều sở thích chung.",
  "exList": [
   {
    "zh": "他们尽管性格不同，但是有很多共同爱好。",
    "py": "Tāmen jǐnguǎn xìnggé bùtóng, dànshì yǒu hěn duō gòngtóng àihào.",
    "vn": "Họ tuy tính cách khác nhau nhưng có rất nhiều sở thích chung."
   },
   {
    "zh": "尽管外边下着大雨，可是来看比赛的人还是很多。",
    "py": "Jǐnguǎn wàibian xià zhe dà yǔ, kěshì lái kàn bǐsài de rén háishì hěn duō.",
    "vn": "Mặc dù bên ngoài đang mưa to nhưng người đến xem trận đấu vẫn rất đông."
   }
  ],
  "hanzi": [
   {
    "c": "尽",
    "p": "jǐn",
    "type": "独体字 · Chữ đơn (giản thể)",
    "st": 6,
    "ord": "nét liền",
    "rad": "尸 (thi, biến thể)",
    "mean": "hết, tận",
    "tip": "Chữ giản thể mang nghĩa ĐẾN TẬN CÙNG, HẾT MỨC; 尽管 mang nghĩa CHO DÙ (đến mức độ nào đó vẫn không đổi kết quả).",
    "cf": "尽 khi đọc \"jìn\" nghĩa là \"hết sức\" (尽力); đọc \"jǐn\" nghĩa là \"cho dù\" (尽管)",
    "w": "尽管 / 尽量 / 尽力"
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
    "prompt": "Mặc dù đã muộn, nhưng chúng tôi vẫn kịp bắt chuyến xe cuối cùng.",
    "answer": "尽管已经很晚了，但是我们还来得及坐最后一班车。",
    "answerPy": "Jǐnguǎn yǐjīng hěn wǎn le, dànshì wǒmen hái láidejí zuò zuìhòu yì bān chē.",
    "note": "Ôn 来得及 (Bài 4 · điểm 4).",
    "pair": "尽管……，但是……"
   },
   {
    "promptLang": "vi",
    "prompt": "Mặc dù công việc rất bận, nhưng mỗi tuần anh ấy gọi điện cho bố mẹ ít nhất hai lần.",
    "answer": "尽管工作很忙，但是他每个星期至少给父母打两次电话。",
    "answerPy": "Jǐnguǎn gōngzuò hěn máng, dànshì tā měi gè xīngqī zhìshǎo gěi fù mǔ dǎ liǎng cì diànhuà.",
    "note": "Ôn 至少 (Bài 5 · điểm 1).",
    "pair": "尽管……，但是……"
   }
  ]
 },
 {
  "n": 13,
  "zh": "性格",
  "py": "xìnggé",
  "pos": "Danh từ",
  "vn": "tính cách",
  "hv": "tính cách",
  "em": "🎭",
  "lesson": 2,
  "explain": [
   "Đặc điểm tâm lý, cách đối xử với người và việc của một người: “tính cách”."
  ],
  "usage": "性格好 · 性格不同 · 性格阳光 · 性格很像.",
  "collo": [
   "性格好",
   "性格不同",
   "性格阳光",
   "性格特点"
  ],
  "colloFull": [
   {
    "zh": "性格好",
    "py": "Xìnggé hǎo",
    "vn": "tính cách tốt"
   },
   {
    "zh": "性格不同",
    "py": "Xìnggé bùtóng",
    "vn": "tính cách khác nhau"
   },
   {
    "zh": "性格阳光",
    "py": "Xìnggé yángguāng",
    "vn": "tính cách vui tươi"
   },
   {
    "zh": "性格特点",
    "py": "Xìnggé tèdiǎn",
    "vn": "đặc điểm tính cách"
   }
  ],
  "patterns": [
   {
    "s": "Ai đó + 性格 + Adj",
    "m": "Ai đó tính cách thế nào: 她性格很好"
   },
   {
    "s": "人好，性格也好",
    "m": "Khen một người toàn diện"
   }
  ],
  "ex_zh": "特别是同乐人好，性格也好，很有责任感。",
  "ex_py": "Tèbié shì Tónglè rén hǎo, xìnggé yě hǎo, hěn yǒu zérèn gǎn.",
  "ex_vn": "Đặc biệt là Đồng Lạc người tốt, tính cách cũng tốt, rất có tinh thần trách nhiệm.",
  "exList": [
   {
    "zh": "特别是同乐人好，性格也好，很有责任感。",
    "py": "Tèbié shì Tónglè rén hǎo, xìnggé yě hǎo, hěn yǒu zérèn gǎn.",
    "vn": "Đặc biệt là Đồng Lạc người tốt, tính cách cũng tốt, rất có tinh thần trách nhiệm."
   },
   {
    "zh": "我和姐姐性格不一样，她喜欢安静，我喜欢热闹。",
    "py": "Wǒ hé jiějie xìnggé bù yíyàng, tā xǐhuan ānjìng, wǒ xǐhuan rènao.",
    "vn": "Tôi và chị gái tính cách không giống nhau, chị ấy thích yên tĩnh, tôi thích náo nhiệt."
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
    "prompt": "Hai người họ tính cách khác nhau, mỗi người có sở thích riêng.",
    "answer": "他们俩性格不同，各有各的爱好。",
    "answerPy": "Tāmen liǎ xìnggé bùtóng, gè yǒu gè de àihào.",
    "note": "Ôn 各×各的 (Bài 5 · điểm 3).",
    "pair": "各有各的……"
   },
   {
    "promptLang": "vi",
    "prompt": "So với anh trai, tính cách em trai sôi nổi hơn.",
    "answer": "跟哥哥相比，弟弟的性格更活泼。",
    "answerPy": "Gēn gēge xiāngbǐ, dìdi de xìnggé gèng huópō.",
    "note": "Ôn 跟……相比 (Bài 8 · điểm 3).",
    "pair": "跟……相比"
   }
  ]
 },
 {
  "n": 14,
  "zh": "共同",
  "py": "gòngtóng",
  "pos": "Tính từ",
  "vn": "chung; cùng (nhau)",
  "hv": "cộng đồng",
  "em": "🤝",
  "lesson": 2,
  "explain": [
   "Thuộc về nhiều người, hoặc cùng nhau làm: “chung, cùng”. Bẫy Hán Việt lớn: 共同 KHÔNG phải “cộng đồng” (cộng đồng = 社区 / 群体). Làm định ngữ: 共同爱好; làm trạng ngữ: 共同努力, 共同经营."
  ],
  "usage": "共同爱好 · 共同的朋友 · 共同 + V (共同努力 / 共同经营).",
  "collo": [
   "共同爱好",
   "共同的朋友",
   "共同努力",
   "共同经营"
  ],
  "colloFull": [
   {
    "zh": "共同爱好",
    "py": "Gòngtóng àihào",
    "vn": "sở thích chung"
   },
   {
    "zh": "共同的朋友",
    "py": "Gòngtóng de péngyou",
    "vn": "bạn chung"
   },
   {
    "zh": "共同努力",
    "py": "Gòngtóng nǔlì",
    "vn": "cùng nhau nỗ lực"
   },
   {
    "zh": "共同经营",
    "py": "Gòngtóng jīngyíng",
    "vn": "cùng nhau vun đắp"
   }
  ],
  "patterns": [
   {
    "s": "共同(的) + N",
    "m": "Định ngữ: 共同爱好, 共同的目标"
   },
   {
    "s": "共同 + V",
    "m": "Trạng ngữ: cùng nhau làm"
   }
  ],
  "ex_zh": "他们尽管性格不同，但是有很多共同爱好。",
  "ex_py": "Tāmen jǐnguǎn xìnggé bùtóng, dànshì yǒu hěn duō gòngtóng àihào.",
  "ex_vn": "Họ tuy tính cách khác nhau nhưng có rất nhiều sở thích chung.",
  "exList": [
   {
    "zh": "他们尽管性格不同，但是有很多共同爱好。",
    "py": "Tāmen jǐnguǎn xìnggé bùtóng, dànshì yǒu hěn duō gòngtóng àihào.",
    "vn": "Họ tuy tính cách khác nhau nhưng có rất nhiều sở thích chung."
   },
   {
    "zh": "我们班同学来自不同国家，不过学中文是我们共同的目标。",
    "py": "Wǒmen bān tóngxué láizì bùtóng guójiā, búguò xué Zhōngwén shì wǒmen gòngtóng de mùbiāo.",
    "vn": "Bạn lớp tôi đến từ nhiều nước khác nhau, có điều học tiếng Trung là mục tiêu chung của chúng tôi."
   }
  ],
  "hanzi": [
   {
    "c": "共",
    "p": "gòng",
    "type": "独体字 · Chữ đơn",
    "st": 6,
    "ord": "廿 trên → 八 dưới",
    "rad": "八 (bát – chia)",
    "mean": "cùng, chung",
    "tip": "Hình tượng nhiều tay CÙNG NÂNG một vật → CÙNG NHAU, CHUNG.",
    "cf": "共 dễ nhầm với 兵 (bīng – \"binh lính\")",
    "w": "共同 / 一共 / 公共"
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
    "prompt": "Chúng tôi có nhiều sở thích chung, lấy thể thao mà nói, cả hai đều thích đá bóng.",
    "answer": "我们有很多共同爱好，拿运动来说，我们都喜欢踢足球。",
    "answerPy": "Wǒmen yǒu hěn duō gòngtóng àihào, ná yùndòng láishuō, wǒmen dōu xǐhuan tī zúqiú.",
    "note": "Ôn 拿……来说 (Bài 7 · điểm 3).",
    "pair": "拿……来说"
   },
   {
    "promptLang": "vi",
    "prompt": "Chỉ cần mọi người cùng nhau cố gắng, ít nhất có thể giành giải ba.",
    "answer": "只要大家共同努力，至少能拿第三名。",
    "answerPy": "Zhǐyào dàjiā gòngtóng nǔlì, zhìshǎo néng ná dì sān míng.",
    "note": "Ôn 至少 (Bài 5 · điểm 1).",
    "pair": "共同 + V"
   }
  ]
 },
 {
  "n": 15,
  "zh": "责任",
  "py": "zérèn",
  "pos": "Danh từ",
  "vn": "trách nhiệm",
  "hv": "trách nhiệm",
  "em": "🛡️",
  "lesson": 2,
  "explain": [
   "Việc mình phải làm, phải gánh vác. 责任感 = tinh thần trách nhiệm (感 – hậu tố đã học ở Bài 2). Lưu ý: 责任 là danh từ, không nói ✗ 他很责任."
  ],
  "usage": "有责任 · 很有责任感 · 是……的责任 · 负责任.",
  "collo": [
   "责任感",
   "有责任",
   "负责任",
   "共同的责任"
  ],
  "colloFull": [
   {
    "zh": "责任感",
    "py": "Zérèn gǎn",
    "vn": "tinh thần trách nhiệm"
   },
   {
    "zh": "有责任",
    "py": "Yǒu zérèn",
    "vn": "có trách nhiệm"
   },
   {
    "zh": "负责任",
    "py": "Fù zérèn",
    "vn": "chịu trách nhiệm"
   },
   {
    "zh": "共同的责任",
    "py": "Gòngtóng de zérèn",
    "vn": "trách nhiệm chung"
   }
  ],
  "patterns": [
   {
    "s": "很有 + 责任感",
    "m": "Khen người có trách nhiệm"
   },
   {
    "s": "责任 (danh từ) ≠ 负责 (tính từ / động từ)",
    "m": "✗ 他很责任 → ✓ 他很负责 / 他很有责任感"
   }
  ],
  "ex_zh": "特别是同乐人好，性格也好，很有责任感。",
  "ex_py": "Tèbié shì Tónglè rén hǎo, xìnggé yě hǎo, hěn yǒu zérèn gǎn.",
  "ex_vn": "Đặc biệt là Đồng Lạc người tốt, tính cách cũng tốt, rất có tinh thần trách nhiệm.",
  "exList": [
   {
    "zh": "特别是同乐人好，性格也好，很有责任感。",
    "py": "Tèbié shì Tónglè rén hǎo, xìnggé yě hǎo, hěn yǒu zérèn gǎn.",
    "vn": "Đặc biệt là Đồng Lạc người tốt, tính cách cũng tốt, rất có tinh thần trách nhiệm."
   },
   {
    "zh": "照顾好孩子是父母的责任。",
    "py": "Zhàogu hǎo háizi shì fù mǔ de zérèn.",
    "vn": "Chăm sóc tốt con cái là trách nhiệm của cha mẹ."
   }
  ],
  "hanzi": [
   {
    "c": "责",
    "p": "zé",
    "type": "上下结构 · Trên-dưới",
    "st": 8,
    "ord": "龶 trên → 贝 (bối) dưới",
    "rad": "贝 (bối – tiền, vật quý)",
    "mean": "trách nhiệm",
    "tip": "Bộ 贝 (của cải, nghĩa vụ) → nghĩa vụ phải HOÀN TRẢ/ĐẢM NHIỆM, mở rộng thành TRÁCH NHIỆM.",
    "cf": "责 dễ nhầm với 素 (sù – \"tố chất\")",
    "w": "负责 / 责任 / 负责人"
   },
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
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Bảo vệ môi trường là trách nhiệm chung của mọi người.",
    "answer": "保护环境是大家共同的责任。",
    "answerPy": "Bǎohù huánjìng shì dàjiā gòngtóng de zérèn.",
    "note": "Dùng từ mới 共同 + 责任.",
    "pair": "是……的责任"
   },
   {
    "promptLang": "vi",
    "prompt": "Anh ấy làm việc rất có trách nhiệm, hơn nữa người cũng nhiệt tình, nên mọi người đều thích làm việc cùng anh ấy.",
    "answer": "他工作很有责任感，再说人也热情，所以大家都喜欢跟他一起工作。",
    "answerPy": "Tā gōngzuò hěn yǒu zérèn gǎn, zài shuō rén yě rèqíng, suǒyǐ dàjiā dōu xǐhuan gēn tā yìqǐ gōngzuò.",
    "note": "Ôn 再说 (Bài 4 · điểm 2).",
    "pair": "……，再说……"
   }
  ]
 },
 {
  "n": 16,
  "zh": "相互",
  "py": "xiānghù",
  "pos": "Phó từ",
  "vn": "lẫn nhau, với nhau",
  "hv": "tương hỗ",
  "em": "🔁",
  "lesson": 2,
  "explain": [
   "Hai bên cùng làm điều đó cho nhau: “lẫn nhau” — nghĩa như 互相 nhưng trang trọng hơn. Đặt TRƯỚC động từ (thường là động từ hai âm tiết): 相互理解, 相互支持."
  ],
  "usage": "相互 + V (理解 / 支持 / 帮助 / 尊重 / 学习).",
  "collo": [
   "相互理解",
   "相互支持",
   "相互帮助",
   "相互尊重"
  ],
  "colloFull": [
   {
    "zh": "相互理解",
    "py": "Xiānghù lǐjiě",
    "vn": "thấu hiểu lẫn nhau"
   },
   {
    "zh": "相互支持",
    "py": "Xiānghù zhīchí",
    "vn": "ủng hộ lẫn nhau"
   },
   {
    "zh": "相互帮助",
    "py": "Xiānghù bāngzhù",
    "vn": "giúp đỡ nhau"
   },
   {
    "zh": "相互尊重",
    "py": "Xiānghù zūnzhòng",
    "vn": "tôn trọng nhau"
   }
  ],
  "patterns": [
   {
    "s": "相互 + V (hai âm tiết)",
    "m": "相互理解 / 相互支持 / 相互帮助"
   },
   {
    "s": "相互 ≈ 互相",
    "m": "互相 khẩu ngữ hơn"
   }
  ],
  "ex_zh": "希望他们能一直相互理解、相互支持。",
  "ex_py": "Xīwàng tāmen néng yìzhí xiānghù lǐjiě, xiānghù zhīchí.",
  "ex_vn": "Mong họ có thể luôn thấu hiểu nhau, ủng hộ nhau.",
  "exList": [
   {
    "zh": "希望他们能一直相互理解、相互支持。",
    "py": "Xīwàng tāmen néng yìzhí xiānghù lǐjiě, xiānghù zhīchí.",
    "vn": "Mong họ có thể luôn thấu hiểu nhau, ủng hộ nhau."
   },
   {
    "zh": "同学之间应该相互帮助，相互学习。",
    "py": "Tóngxué zhī jiān yīnggāi xiānghù bāngzhù, xiānghù xuéxí.",
    "vn": "Giữa bạn học với nhau nên giúp đỡ nhau, học hỏi lẫn nhau."
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
    "c": "互",
    "p": "hù",
    "type": "独体字 · Chữ đơn",
    "st": 4,
    "ord": "nét liền, hình sợi dây tết chéo",
    "rad": "一 (nhất)",
    "mean": "lẫn nhau, qua lại",
    "tip": "Hình tượng cổ mô phỏng một dụng cụ đan XEN KẼ qua lại → mở rộng nghĩa thành LẪN NHAU.",
    "cf": "瓦 (wǎ – \"ngói\", hình gần giống nhưng không liên quan nghĩa)",
    "w": "互相 / 相互 / 互联网"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Vợ chồng nên thấu hiểu lẫn nhau, nếu không sẽ hay cãi nhau.",
    "answer": "夫妻之间应该相互理解，否则会经常吵架。",
    "answerPy": "Fūqī zhī jiān yīnggāi xiānghù lǐjiě, fǒuzé huì jīngcháng chǎojià.",
    "note": "Ôn 否则 (Bài 8 · điểm 2).",
    "pair": "相互 + V，否则……"
   },
   {
    "promptLang": "vi",
    "prompt": "Đã là bạn tốt thì nên giúp đỡ lẫn nhau.",
    "answer": "既然是好朋友，就应该相互帮助。",
    "answerPy": "Jìrán shì hǎo péngyou, jiù yīnggāi xiānghù bāngzhù.",
    "note": "Ôn 既然……就…… (Bài 7 · điểm 2).",
    "pair": "既然……就……"
   }
  ]
 },
 {
  "n": 17,
  "zh": "理解",
  "py": "lǐjiě",
  "pos": "Động từ",
  "vn": "hiểu, thấu hiểu, thông cảm",
  "hv": "lý giải",
  "em": "💡",
  "lesson": 2,
  "explain": [
   "Hiểu rõ ý nghĩa, lý do hoặc nỗi lòng của người khác. Bẫy Hán Việt: “lý giải” trong tiếng Việt là giải thích; còn 理解 là HIỂU, thông cảm (giải thích = 解释)."
  ],
  "usage": "理解 + người / ý · 相互理解 · 我理解你 · 理解……的意思.",
  "collo": [
   "相互理解",
   "理解别人",
   "理解意思",
   "能理解"
  ],
  "colloFull": [
   {
    "zh": "相互理解",
    "py": "Xiānghù lǐjiě",
    "vn": "thấu hiểu nhau"
   },
   {
    "zh": "理解别人",
    "py": "Lǐjiě biérén",
    "vn": "thông cảm cho người khác"
   },
   {
    "zh": "理解意思",
    "py": "Lǐjiě yìsi",
    "vn": "hiểu ý"
   },
   {
    "zh": "能理解",
    "py": "Néng lǐjiě",
    "vn": "có thể hiểu"
   }
  ],
  "patterns": [
   {
    "s": "理解 vs 了解",
    "m": "理解 = hiểu thấu, thông cảm (lý do, nỗi lòng); 了解 = biết rõ, nắm thông tin (tình hình, con người)"
   },
   {
    "s": "理解 ≠ 解释",
    "m": "理解 = hiểu; 解释 = giải thích"
   }
  ],
  "ex_zh": "希望他们能一直相互理解、相互支持。",
  "ex_py": "Xīwàng tāmen néng yìzhí xiānghù lǐjiě, xiānghù zhīchí.",
  "ex_vn": "Mong họ có thể luôn thấu hiểu nhau, ủng hộ nhau.",
  "exList": [
   {
    "zh": "希望他们能一直相互理解、相互支持。",
    "py": "Xīwàng tāmen néng yìzhí xiānghù lǐjiě, xiānghù zhīchí.",
    "vn": "Mong họ có thể luôn thấu hiểu nhau, ủng hộ nhau."
   },
   {
    "zh": "你的心情我很理解，不过别太难过了。",
    "py": "Nǐ de xīnqíng wǒ hěn lǐjiě, búguò bié tài nánguò le.",
    "vn": "Tâm trạng của bạn tôi rất hiểu, có điều đừng buồn quá."
   }
  ],
  "hanzi": [
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
   },
   {
    "c": "解",
    "p": "jiě",
    "type": "左右结构 · Trái-phải",
    "st": 13,
    "ord": "角 trái → 刀+牛 phải",
    "rad": "角 (giác – sừng)",
    "mean": "giải, hiểu",
    "tip": "Hình tượng dùng dao 刀 mổ xẻ con trâu 牛 để tách riêng từng phần (角=sừng) → PHÂN TÁCH RÕ RÀNG, mở rộng thành HIỂU, GIẢI THÍCH.",
    "cf": "解 khi đọc \"jiè\" nghĩa là \"áp giải\" (ít dùng)",
    "w": "理解 / 解决 / 了解"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Bố mẹ không hiểu mình thì có gì mà phải buồn, nói chuyện nhiều với họ là được.",
    "answer": "父母不理解我，有什么好难过的，多跟他们聊聊就是了。",
    "answerPy": "Fù mǔ bù lǐjiě wǒ, yǒu shénme hǎo nánguò de, duō gēn tāmen liáo liáo jiù shì le.",
    "note": "Ôn 有什么好×的 (Bài 6 · điểm 2) + 就是了 (Bài 2 · điểm 1).",
    "pair": "有什么好×的"
   },
   {
    "promptLang": "vi",
    "prompt": "Câu này tôi đọc mấy lần mà vẫn không hiểu nổi.",
    "answer": "这句话我看了好几遍，还是理解不了。",
    "answerPy": "Zhè jù huà wǒ kàn le hǎo jǐ biàn, háishì lǐjiě bù liǎo.",
    "note": "Ôn V不了 (Bài 4 · điểm 1).",
    "pair": "V不了"
   }
  ]
 },
 {
  "n": 18,
  "zh": "支持",
  "py": "zhīchí",
  "pos": "Động từ",
  "vn": "ủng hộ, hỗ trợ",
  "hv": "chi trì",
  "em": "💪",
  "lesson": 2,
  "explain": [
   "Đứng về phía ai, giúp đỡ và cổ vũ người đó: “ủng hộ”. Âm Hán Việt “chi trì” không dùng trong tiếng Việt — nhớ: 支持 = ủng hộ."
  ],
  "usage": "支持 + người / việc · 相互支持 · 得到……的支持 · 我支持你.",
  "collo": [
   "支持你",
   "相互支持",
   "家人的支持",
   "得到支持"
  ],
  "colloFull": [
   {
    "zh": "支持你",
    "py": "Zhīchí nǐ",
    "vn": "ủng hộ bạn"
   },
   {
    "zh": "相互支持",
    "py": "Xiānghù zhīchí",
    "vn": "ủng hộ lẫn nhau"
   },
   {
    "zh": "家人的支持",
    "py": "Jiārén de zhīchí",
    "vn": "sự ủng hộ của gia đình"
   },
   {
    "zh": "得到支持",
    "py": "Dédào zhīchí",
    "vn": "nhận được sự ủng hộ"
   }
  ],
  "patterns": [
   {
    "s": "A + 支持 + B",
    "m": "A ủng hộ B"
   },
   {
    "s": "得到 + ai đó + 的支持",
    "m": "Nhận được sự ủng hộ (dùng như danh từ)"
   }
  ],
  "ex_zh": "希望他们能一直相互理解、相互支持。",
  "ex_py": "Xīwàng tāmen néng yìzhí xiānghù lǐjiě, xiānghù zhīchí.",
  "ex_vn": "Mong họ có thể luôn thấu hiểu nhau, ủng hộ nhau.",
  "exList": [
   {
    "zh": "希望他们能一直相互理解、相互支持。",
    "py": "Xīwàng tāmen néng yìzhí xiānghù lǐjiě, xiānghù zhīchí.",
    "vn": "Mong họ có thể luôn thấu hiểu nhau, ủng hộ nhau."
   },
   {
    "zh": "不管你做什么决定，我们都支持你。",
    "py": "Bùguǎn nǐ zuò shénme juédìng, wǒmen dōu zhīchí nǐ.",
    "vn": "Bất kể bạn quyết định gì, chúng tôi đều ủng hộ bạn."
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
    "c": "持",
    "p": "chí",
    "type": "左右结构 · Trái-phải",
    "st": 9,
    "ord": "扌 (thủ) trái → 寺 (tự) phải",
    "rad": "扌 (thủ – tay)",
    "mean": "giữ, nắm",
    "tip": "Bộ tay 扌 + 寺(biểu âm) → dùng TAY GIỮ VỮNG, mở rộng thành ỦNG HỘ (giữ vững lập trường ủng hộ), kết hợp 支(chống đỡ) thành 支持 = ỦNG HỘ.",
    "cf": "持 dễ nhầm với 待 (dài – \"chờ đợi\", bộ 彳\")",
    "w": "支持 / 坚持 / 支持者"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Nhờ có sự ủng hộ của gia đình, tôi mới có thể sang Trung Quốc du học.",
    "answer": "由于家人的支持，我才能来中国留学。",
    "answerPy": "Yóuyú jiārén de zhīchí, wǒ cái néng lái Zhōngguó liúxué.",
    "note": "Ôn 由于 (Bài 2 · điểm 4).",
    "pair": "由于……"
   },
   {
    "promptLang": "vi",
    "prompt": "Bố mẹ không chỉ ủng hộ tôi, thậm chí còn giúp tôi tìm trường.",
    "answer": "父母不仅支持我，甚至还帮我找学校。",
    "answerPy": "Fù mǔ bùjǐn zhīchí wǒ, shènzhì hái bāng wǒ zhǎo xuéxiào.",
    "note": "Ôn 不仅 (Bài 3 · điểm 2) + 甚至 (Bài 3 · điểm 3).",
    "pair": "不仅……甚至……"
   }
  ]
 },
 {
  "n": 19,
  "zh": "印象",
  "py": "yìnxiàng",
  "pos": "Danh từ",
  "vn": "ấn tượng",
  "hv": "ấn tượng",
  "em": "👀",
  "lesson": 3,
  "explain": [
   "Hình ảnh, cảm nhận còn lại trong đầu sau khi gặp một người, một việc. Mẫu quan trọng: 对 + ai/gì + 印象很好 / 很深 (không nói ✗ 印象他很好)."
  ],
  "usage": "对……印象很好 · 给……留下很深的印象 · 第一印象 · 印象很深.",
  "collo": [
   "印象很好",
   "第一印象",
   "留下印象",
   "印象很深"
  ],
  "colloFull": [
   {
    "zh": "印象很好",
    "py": "Yìnxiàng hěn hǎo",
    "vn": "ấn tượng rất tốt"
   },
   {
    "zh": "第一印象",
    "py": "Dì yī yìnxiàng",
    "vn": "ấn tượng đầu tiên"
   },
   {
    "zh": "留下印象",
    "py": "Liú xià yìnxiàng",
    "vn": "để lại ấn tượng"
   },
   {
    "zh": "印象很深",
    "py": "Yìnxiàng hěn shēn",
    "vn": "ấn tượng sâu sắc"
   }
  ],
  "patterns": [
   {
    "s": "A + 对 + B + 印象 + Adj",
    "m": "A có ấn tượng về B thế nào"
   },
   {
    "s": "B + 给 + A + 留下了……的印象",
    "m": "B để lại cho A ấn tượng …"
   }
  ],
  "ex_zh": "杨同乐刚来不久，王一雪对他印象就非常好。",
  "ex_py": "Yáng Tónglè gāng lái bùjiǔ, Wáng Yīxuě duì tā yìnxiàng jiù fēicháng hǎo.",
  "ex_vn": "Dương Đồng Lạc mới đến không lâu, Vương Nhất Tuyết đã có ấn tượng rất tốt về anh ấy.",
  "exList": [
   {
    "zh": "杨同乐刚来不久，王一雪对他印象就非常好。",
    "py": "Yáng Tónglè gāng lái bùjiǔ, Wáng Yīxuě duì tā yìnxiàng jiù fēicháng hǎo.",
    "vn": "Dương Đồng Lạc mới đến không lâu, Vương Nhất Tuyết đã có ấn tượng rất tốt về anh ấy."
   },
   {
    "zh": "这次旅行给我留下了很深的印象。",
    "py": "Zhè cì lǚxíng gěi wǒ liú xià le hěn shēn de yìnxiàng.",
    "vn": "Chuyến du lịch lần này để lại cho tôi ấn tượng rất sâu."
   }
  ],
  "hanzi": [
   {
    "c": "印",
    "p": "yìn",
    "type": "左右结构 · Trái-phải",
    "st": 5,
    "ord": "爫 trên trái → 卩 dưới phải",
    "rad": "卩 (tiết – dấu triện, đầu gối quỳ)",
    "mean": "in, dấu ấn",
    "tip": "Hình tượng bàn tay 爫 ấn con dấu 卩 xuống → để lại DẤU VẾT, mở rộng thành ẤN TƯỢNG (dấu vết trong tâm trí).",
    "cf": "却 (què – cũng có bộ 卩 bên phải)",
    "w": "印象 / 打印 / 印章"
   },
   {
    "c": "象",
    "p": "xiàng",
    "type": "象形字 · Chữ tượng hình",
    "st": 11,
    "ord": "⺈ → 口 → 豕 (phần thân)",
    "rad": "⺈ (đao)",
    "mean": "con voi; hình dạng, hình ảnh",
    "tip": "Vẽ con voi dựng đứng: đầu, vòi dài, thân và bốn chân → con voi (大象); mượn chỉ hình ảnh — 印象 (ấn tượng), 现象.",
    "cf": "像 xiàng (giống) — thêm 亻 bên trái; 豫 yù — bên trái là 予",
    "w": "印象 / 大象 / 现象"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Trong những thành phố tôi từng đến, tôi có ấn tượng với Hàng Châu sâu nhất.",
    "answer": "在我去过的城市中，我对杭州的印象最深。",
    "answerPy": "Zài wǒ qù guò de chéngshì zhōng, wǒ duì háng zhōu de yìnxiàng zuì shēn.",
    "note": "Mẫu 对……印象最深 (dùng từ 深 – từ số 34).",
    "pair": "对……印象……"
   },
   {
    "promptLang": "vi",
    "prompt": "So với lần đầu gặp mặt, bây giờ ấn tượng của tôi về anh ấy tốt hơn nhiều.",
    "answer": "跟第一次见面相比，现在我对他的印象好多了。",
    "answerPy": "Gēn dì yī cì jiànmiàn xiāngbǐ, xiànzài wǒ duì tā de yìnxiàng hǎoduō le.",
    "note": "Ôn 跟……相比 (Bài 8 · điểm 3).",
    "pair": "跟……相比"
   }
  ]
 },
 {
  "n": 20,
  "zh": "实在",
  "py": "shízài",
  "pos": "Tính từ / Phó từ",
  "vn": "thật thà, chân thật; thật sự, quả thật",
  "hv": "thực tại",
  "em": "🙂",
  "lesson": 3,
  "explain": [
   "Tính từ (nghĩa trong bài): người thật thà, chân thành, đáng tin (人很实在). Phó từ: “thật sự, quả thật” (实在太累了). Bẫy Hán Việt: “thực tại” (hiện thực) không phải nghĩa ở đây."
  ],
  "usage": "人很实在 · 实在 + 太 + Adj + 了 · 实在 + 不 / 没 + V.",
  "collo": [
   "人很实在",
   "实在太好了",
   "实在没办法",
   "实在的人"
  ],
  "colloFull": [
   {
    "zh": "人很实在",
    "py": "Rén hěn shízài",
    "vn": "người rất thật thà"
   },
   {
    "zh": "实在太好了",
    "py": "Shízài tài hǎo le",
    "vn": "thật sự quá tốt"
   },
   {
    "zh": "实在没办法",
    "py": "Shízài méi bànfǎ",
    "vn": "thật sự hết cách"
   },
   {
    "zh": "实在的人",
    "py": "Shízài de rén",
    "vn": "người chân thật"
   }
  ],
  "patterns": [
   {
    "s": "Sub + (很) + 实在",
    "m": "Tính từ: thật thà, chân thật"
   },
   {
    "s": "实在 + 太……了 / 不……",
    "m": "Phó từ: thật sự, quả thật"
   }
  ],
  "ex_zh": "人很实在，性格阳光，工作负责，表现积极……",
  "ex_py": "Rén hěn shízài, xìnggé yángguāng, gōngzuò fùzé, biǎoxiàn jījí……",
  "ex_vn": "Con người rất thật thà, tính cách vui tươi, làm việc có trách nhiệm, biểu hiện tích cực…",
  "exList": [
   {
    "zh": "人很实在，性格阳光，工作负责，表现积极……",
    "py": "Rén hěn shízài, xìnggé yángguāng, gōngzuò fùzé, biǎoxiàn jījí……",
    "vn": "Con người rất thật thà, tính cách vui tươi, làm việc có trách nhiệm, biểu hiện tích cực…"
   },
   {
    "zh": "这件事我实在不知道怎么办，你帮我想想办法吧。",
    "py": "Zhè jiàn shì wǒ shízài bù zhīdao zěnmebàn, nǐ bāng wǒ xiǎng xiǎng bànfǎ ba.",
    "vn": "Chuyện này tôi thật sự không biết làm thế nào, bạn nghĩ cách giúp tôi với."
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
    "c": "在",
    "p": "zài",
    "type": "半包围结构 · Bán bao vây",
    "st": 6,
    "ord": "ナ(biến thể) bao ngoài → 土(thổ) trong",
    "rad": "土 (thổ – đất)",
    "mean": "ở, tại, đang (phó từ)",
    "tip": "Mái che nghiêng (ナ) phủ trên chữ 土(đất) → nơi có ĐẤT có mái che là nơi con người sinh sống, tồn tại = Ở, TẠI, ĐANG.",
    "cf": "左 (zuǒ – \"bên trái\", phần trên viết gần giống nhưng dưới là 工)",
    "w": "正在 / 在家 / 你在哪里"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Anh ấy là người rất thật thà, có gì nói nấy, mọi người đều tin anh ấy.",
    "answer": "他这个人很实在，有什么说什么，大家都相信他。",
    "answerPy": "Tā zhège rén hěn shízài, yǒu shénme shuō shénme, dàjiā dōu xiāngxìn tā.",
    "note": "Mẫu 有什么说什么 (nghĩ gì nói nấy).",
    "pair": "人很实在"
   },
   {
    "promptLang": "vi",
    "prompt": "Món này thật sự cay quá, tôi ăn không nổi.",
    "answer": "这个菜实在太辣了，我吃不了。",
    "answerPy": "Zhège cài shízài tài là le, wǒ chī bù liǎo.",
    "note": "Ôn V不了 (Bài 4 · điểm 1).",
    "pair": "实在太……了"
   }
  ]
 },
 {
  "n": 21,
  "zh": "阳光",
  "py": "yángguāng",
  "pos": "Tính từ / Danh từ",
  "vn": "tươi sáng, lạc quan, năng động; ánh nắng",
  "hv": "dương quang",
  "em": "☀️",
  "lesson": 3,
  "explain": [
   "Danh từ: ánh nắng mặt trời. Tính từ (nghĩa trong bài): người vui vẻ, lạc quan, năng động như ánh nắng — 性格阳光, 阳光男孩."
  ],
  "usage": "性格阳光 · 很阳光 · 阳光男孩 · 阳光很好 (danh từ).",
  "collo": [
   "性格阳光",
   "阳光男孩",
   "阳光很好",
   "阳光的笑容"
  ],
  "colloFull": [
   {
    "zh": "性格阳光",
    "py": "Xìnggé yángguāng",
    "vn": "tính cách tươi sáng"
   },
   {
    "zh": "阳光男孩",
    "py": "Yángguāng nán hái",
    "vn": "chàng trai năng động"
   },
   {
    "zh": "阳光很好",
    "py": "Yángguāng hěn hǎo",
    "vn": "nắng đẹp"
   },
   {
    "zh": "阳光的笑容",
    "py": "Yángguāng de xiào róng",
    "vn": "nụ cười rạng rỡ"
   }
  ],
  "patterns": [
   {
    "s": "(性格) + 很 + 阳光",
    "m": "Tính từ: lạc quan, vui tươi"
   },
   {
    "s": "阳光 + 很好",
    "m": "Danh từ: ánh nắng đẹp"
   }
  ],
  "ex_zh": "人很实在，性格阳光，工作负责，表现积极……",
  "ex_py": "Rén hěn shízài, xìnggé yángguāng, gōngzuò fùzé, biǎoxiàn jījí……",
  "ex_vn": "Con người rất thật thà, tính cách vui tươi, làm việc có trách nhiệm, biểu hiện tích cực…",
  "exList": [
   {
    "zh": "人很实在，性格阳光，工作负责，表现积极……",
    "py": "Rén hěn shízài, xìnggé yángguāng, gōngzuò fùzé, biǎoxiàn jījí……",
    "vn": "Con người rất thật thà, tính cách vui tươi, làm việc có trách nhiệm, biểu hiện tích cực…"
   },
   {
    "zh": "今天阳光很好，我们去公园走走吧。",
    "py": "Jīntiān yángguāng hěn hǎo, wǒmen qù gōngyuán zǒu zǒu ba.",
    "vn": "Hôm nay nắng đẹp, chúng ta ra công viên đi dạo đi."
   }
  ],
  "hanzi": [
   {
    "c": "阳",
    "p": "yáng",
    "type": "左右结构 · Trái-phải (giản thể)",
    "st": 6,
    "ord": "阝(phụ) trái → 日+一(biến thể) phải",
    "rad": "阝 (phụ – gò đất)",
    "mean": "ánh nắng, dương",
    "tip": "Bộ 阝(gò đất hướng ra ánh sáng) + 日(mặt trời) → phía có ÁNH NẮNG chiếu vào, kết hợp 光(ánh sáng) thành 阳光 = ÁNH NẮNG, mở rộng thành TÍNH CÁCH TƯƠI SÁNG.",
    "cf": "阴 (yīn – \"âm u\", trái nghĩa)",
    "w": "阳光 / 太阳 / 阳台"
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
    "prompt": "Cô ấy tính cách rất vui tươi, đi đến đâu cũng mang lại niềm vui cho mọi người.",
    "answer": "她性格很阳光，走到哪儿都给大家带来快乐。",
    "answerPy": "Tā xìnggé hěn yángguāng, zǒu dào nǎr dōu gěi dàjiā dài lái kuàilè.",
    "note": "带来 (giống bài khoá 3).",
    "pair": "性格阳光"
   },
   {
    "promptLang": "vi",
    "prompt": "Anh ấy tính cách vui tươi, chỉ thỉnh thoảng mới không vui.",
    "answer": "他性格很阳光，只是偶尔不太开心。",
    "answerPy": "Tā xìnggé hěn yángguāng, zhǐshì ǒu'ěr bú tài kāixīn.",
    "note": "Ôn 偶尔 (Bài 6 · điểm 3).",
    "pair": "偶尔"
   }
  ]
 },
 {
  "n": 22,
  "zh": "负责",
  "py": "fùzé",
  "pos": "Tính từ / Động từ",
  "vn": "có trách nhiệm; phụ trách, chịu trách nhiệm",
  "hv": "phụ trách",
  "em": "📋",
  "lesson": 3,
  "explain": [
   "Tính từ: làm việc chu đáo, có trách nhiệm (工作很负责). Động từ: phụ trách việc gì (负责这个项目), chịu trách nhiệm về (对……负责)."
  ],
  "usage": "工作负责 · 很负责 · 负责 + việc · 对 + ai/việc + 负责.",
  "collo": [
   "工作负责",
   "负责这个项目",
   "对……负责",
   "负责人"
  ],
  "colloFull": [
   {
    "zh": "工作负责",
    "py": "Gōngzuò fùzé",
    "vn": "làm việc có trách nhiệm"
   },
   {
    "zh": "负责这个项目",
    "py": "Fùzé zhège xiàngmù",
    "vn": "phụ trách dự án này"
   },
   {
    "zh": "对……负责",
    "py": "Duì…… fùzé",
    "vn": "chịu trách nhiệm về …"
   },
   {
    "zh": "负责人",
    "py": "Fùzé rén",
    "vn": "người phụ trách"
   }
  ],
  "patterns": [
   {
    "s": "对 + N + 负责",
    "m": "Chịu trách nhiệm về …"
   },
   {
    "s": "负责 + công việc",
    "m": "Phụ trách việc gì"
   }
  ],
  "ex_zh": "人很实在，性格阳光，工作负责，表现积极……",
  "ex_py": "Rén hěn shízài, xìnggé yángguāng, gōngzuò fùzé, biǎoxiàn jījí……",
  "ex_vn": "Con người rất thật thà, tính cách vui tươi, làm việc có trách nhiệm, biểu hiện tích cực…",
  "exList": [
   {
    "zh": "人很实在，性格阳光，工作负责，表现积极……",
    "py": "Rén hěn shízài, xìnggé yángguāng, gōngzuò fùzé, biǎoxiàn jījí……",
    "vn": "Con người rất thật thà, tính cách vui tươi, làm việc có trách nhiệm, biểu hiện tích cực…"
   },
   {
    "zh": "这次活动由小王负责，有问题可以找他。",
    "py": "Zhè cì huódòng yóu xiǎo wáng fùzé, yǒu wèntí kěyǐ zhǎo tā.",
    "vn": "Hoạt động lần này do Tiểu Vương phụ trách, có vấn đề có thể tìm anh ấy."
   }
  ],
  "hanzi": [
   {
    "c": "负",
    "p": "fù",
    "type": "会意字 · Chữ hội ý",
    "st": 6,
    "ord": "⺈ → 贝",
    "rad": "贝 (bối – vỏ sò, tiền)",
    "mean": "gánh vác, chịu; thua; âm (số âm)",
    "tip": "Người (⺈ ở trên) cõng tiền của (贝) trên lưng → gánh, mang, chịu → 负责 (chịu trách nhiệm); cũng có nghĩa thua (胜负).",
    "cf": "员 yuán (nhân viên) — trên là 口; 页 yè (trang) — trên là 一丿",
    "w": "负责 / 胜负 / 负担"
   },
   {
    "c": "责",
    "p": "zé",
    "type": "上下结构 · Trên-dưới",
    "st": 8,
    "ord": "龶 trên → 贝 (bối) dưới",
    "rad": "贝 (bối – tiền, vật quý)",
    "mean": "trách nhiệm",
    "tip": "Bộ 贝 (của cải, nghĩa vụ) → nghĩa vụ phải HOÀN TRẢ/ĐẢM NHIỆM, mở rộng thành TRÁCH NHIỆM.",
    "cf": "责 dễ nhầm với 素 (sù – \"tố chất\")",
    "w": "负责 / 责任 / 负责人"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Phải chịu trách nhiệm với việc mình làm, nếu không người khác sẽ không tin bạn.",
    "answer": "要对自己做的事负责，否则别人不会相信你。",
    "answerPy": "Yào duì zìjǐ zuò de shì fùzé, fǒuzé biérén bú huì xiāngxìn nǐ.",
    "note": "Ôn 否则 (Bài 8 · điểm 2).",
    "pair": "对……负责"
   },
   {
    "promptLang": "vi",
    "prompt": "Bất kể công việc mệt đến đâu, anh ấy đều làm rất có trách nhiệm.",
    "answer": "不管工作多累，他都做得很负责。",
    "answerPy": "Bùguǎn gōngzuò duō lèi, tā dōu zuò de hěn fùzé.",
    "note": "Ôn 不管……都…… (Bài 8 · điểm 1).",
    "pair": "不管……都……"
   }
  ]
 },
 {
  "n": 23,
  "zh": "积极",
  "py": "jījí",
  "pos": "Tính từ",
  "vn": "tích cực, hăng hái",
  "hv": "tích cực",
  "em": "🙋",
  "lesson": 3,
  "explain": [
   "Chủ động, hăng hái làm việc, tham gia (表现积极, 积极参加); cũng có nghĩa lạc quan, hướng tốt (积极的态度)."
  ],
  "usage": "表现积极 · 积极参加 · 积极 + V · 很积极.",
  "collo": [
   "表现积极",
   "积极参加",
   "积极回答",
   "积极的态度"
  ],
  "colloFull": [
   {
    "zh": "表现积极",
    "py": "Biǎoxiàn jījí",
    "vn": "biểu hiện tích cực"
   },
   {
    "zh": "积极参加",
    "py": "Jījí cānjiā",
    "vn": "hăng hái tham gia"
   },
   {
    "zh": "积极回答",
    "py": "Jījí huídá",
    "vn": "hăng hái trả lời"
   },
   {
    "zh": "积极的态度",
    "py": "Jījí de tàidù",
    "vn": "thái độ tích cực"
   }
  ],
  "patterns": [
   {
    "s": "积极 + V",
    "m": "Làm trạng ngữ: hăng hái làm gì"
   },
   {
    "s": "积极 ↔ 消极",
    "m": "Trái nghĩa: tiêu cực"
   }
  ],
  "ex_zh": "工作负责，表现积极……",
  "ex_py": "Gōngzuò fùzé, biǎoxiàn jījí……",
  "ex_vn": "Làm việc có trách nhiệm, biểu hiện tích cực…",
  "exList": [
   {
    "zh": "工作负责，表现积极……",
    "py": "Gōngzuò fùzé, biǎoxiàn jījí……",
    "vn": "Làm việc có trách nhiệm, biểu hiện tích cực…"
   },
   {
    "zh": "随着比赛越来越近，大家练习得越来越积极。",
    "py": "Suízhe bǐsài yuèláiyuè jìn, dàjiā liànxí de yuèláiyuè jījí.",
    "vn": "Cùng với trận đấu ngày càng đến gần, mọi người luyện tập ngày càng hăng hái."
   }
  ],
  "hanzi": [
   {
    "c": "积",
    "p": "jī",
    "type": "左右结构 · Trái-phải (giản thể)",
    "st": 10,
    "ord": "禾 (hòa) trái → 只 phải",
    "rad": "禾 (hòa – lúa)",
    "mean": "chất chứa, tích góp",
    "tip": "Bộ lúa 禾 (thu hoạch dần) + 只 (biểu âm) → CHẤT lúa thành đống dần dần, mở rộng thành TÍCH LŨY, kết hợp 累(chồng chất) thành 积累.",
    "cf": "积 dễ nhầm với 只 riêng lẻ (không có bộ 禾)",
    "w": "积累 / 面积 / 积极"
   },
   {
    "c": "极",
    "p": "jí",
    "type": "形声字 · Chữ hình thanh",
    "st": 7,
    "ord": "木 → 及",
    "rad": "木 (mộc – cây)",
    "mean": "đỉnh, cực điểm; cực kỳ",
    "tip": "木 (gỗ) + 及 (jí – chỉ âm): vốn là cây xà cao nhất của nóc nhà → điểm cao nhất → cực kỳ.",
    "cf": "级 jí (cấp) — bên trái là 纟",
    "w": "极了 / 好极了"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Lớp tiếng Trung có bất kỳ hoạt động nào, cô ấy cũng hăng hái tham gia.",
    "answer": "中文课有任何活动，她都积极参加。",
    "answerPy": "Zhōngwén kè yǒu rènhé huódòng, tā dōu jījí cānjiā.",
    "note": "Ôn 任何……都…… (Bài 1 · điểm 1).",
    "pair": "任何……都……"
   },
   {
    "promptLang": "vi",
    "prompt": "Trong giờ học anh ấy hăng hái trả lời câu hỏi, thậm chí còn chủ động giúp các bạn.",
    "answer": "上课时他积极回答问题，甚至还主动帮助同学。",
    "answerPy": "Shàngkè shí tā jījí huídá wèntí, shènzhì hái zhǔdòng bāngzhù tóngxué.",
    "note": "Ôn 甚至 (Bài 3 · điểm 3).",
    "pair": "甚至"
   }
  ]
 },
 {
  "n": 24,
  "zh": "此",
  "py": "cǐ",
  "pos": "Đại từ",
  "vn": "này, đây (văn viết, trang trọng)",
  "hv": "thử",
  "em": "👉",
  "lesson": 3,
  "explain": [
   "Đại từ chỉ thị, nghĩa như 这 / 这个 nhưng dùng trong văn viết hoặc lúc trang trọng: 此次 (lần này), 此人 (người này), 此时 (lúc này), 对此 (về việc này)."
  ],
  "usage": "此 + lượng từ / N (此次, 此人, 此项) · 对此 · 从此 · 因此.",
  "collo": [
   "此次",
   "此人",
   "此时",
   "对此"
  ],
  "colloFull": [
   {
    "zh": "此次",
    "py": "Cǐ cì",
    "vn": "lần này"
   },
   {
    "zh": "此人",
    "py": "Cǐ rén",
    "vn": "người này"
   },
   {
    "zh": "此时",
    "py": "Cǐ shí",
    "vn": "lúc này"
   },
   {
    "zh": "对此",
    "py": "Duì cǐ",
    "vn": "về việc này"
   }
  ],
  "patterns": [
   {
    "s": "此 + (lượng từ) + N",
    "m": "此次活动 / 此项工作 (= 这次 / 这项)"
   },
   {
    "s": "对此 + V",
    "m": "对此负责 / 对此很满意 (về việc này)"
   }
  ],
  "ex_zh": "此次出差，让两人熟悉了起来，从此成了好朋友。",
  "ex_py": "Cǐ cì chūchāi, ràng liǎng rén shúxī le qǐlái, cóngcǐ chéng le hǎo péngyou.",
  "ex_vn": "Chuyến công tác lần này khiến hai người trở nên thân quen, từ đó thành bạn tốt.",
  "exList": [
   {
    "zh": "此次出差，让两人熟悉了起来，从此成了好朋友。",
    "py": "Cǐ cì chūchāi, ràng liǎng rén shúxī le qǐlái, cóngcǐ chéng le hǎo péngyou.",
    "vn": "Chuyến công tác lần này khiến hai người trở nên thân quen, từ đó thành bạn tốt."
   },
   {
    "zh": "此时此刻，我想对大家说一声谢谢。",
    "py": "Cǐ shí cǐ kè, wǒ xiǎng duì dàjiā shuō yì shēng xièxiè.",
    "vn": "Ngay lúc này đây, tôi muốn nói với mọi người một lời cảm ơn."
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
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Chuyến công tác lần này tôi ít nhất phải ở Thượng Hải một tuần.",
    "answer": "此次出差，我至少要在上海待一个星期。",
    "answerPy": "Cǐ cì chūchāi, wǒ zhìshǎo yào zài Shànghǎi dài yí gè xīngqī.",
    "note": "Ôn 至少 (Bài 5 · điểm 1).",
    "pair": "此次 + N"
   },
   {
    "promptLang": "vi",
    "prompt": "Người này vừa có năng lực vừa có trách nhiệm, việc này giao cho anh ấy là được.",
    "answer": "此人既有能力又负责，这件事交给他就是了。",
    "answerPy": "Cǐ rén jì yǒu nénglì yòu fùzé, zhè jiàn shì jiāo gěi tā jiù shì le.",
    "note": "Ôn 既……又…… (Bài 4 · điểm 3) + 就是了 (Bài 2 · điểm 1).",
    "pair": "此人……"
   }
  ]
 },
 {
  "n": 25,
  "zh": "从此",
  "py": "cóngcǐ",
  "pos": "Phó từ",
  "vn": "từ đó, từ nay về sau",
  "hv": "tòng thử",
  "em": "➡️",
  "lesson": 3,
  "explain": [
   "Từ thời điểm / sự việc vừa nói trở về sau: “từ đó, từ đây”. Thường đứng đầu vế sau, sau một sự việc làm mốc."
  ],
  "usage": "Sự việc mốc，从此 + (Sub) + V · 从此以后.",
  "collo": [
   "从此以后",
   "从此成了朋友",
   "从此喜欢上",
   "从此不再"
  ],
  "colloFull": [
   {
    "zh": "从此以后",
    "py": "Cóngcǐ yǐhòu",
    "vn": "từ đó về sau"
   },
   {
    "zh": "从此成了朋友",
    "py": "Cóngcǐ chéng le péngyou",
    "vn": "từ đó thành bạn"
   },
   {
    "zh": "从此喜欢上",
    "py": "Cóngcǐ xǐhuan shàng",
    "vn": "từ đó thích …"
   },
   {
    "zh": "从此不再",
    "py": "Cóngcǐ bú zài",
    "vn": "từ đó không còn …"
   }
  ],
  "patterns": [
   {
    "s": "Sự việc mốc，从此 + kết quả lâu dài",
    "m": "从此 nối hai vế"
   },
   {
    "s": "从此 vs 从来",
    "m": "从此 = từ mốc đó trở đi; 从来 = từ trước đến nay (điểm 4)"
   }
  ],
  "ex_zh": "此次出差，让两人熟悉了起来，从此成了好朋友。",
  "ex_py": "Cǐ cì chūchāi, ràng liǎng rén shúxī le qǐlái, cóngcǐ chéng le hǎo péngyou.",
  "ex_vn": "Chuyến công tác lần này khiến hai người trở nên thân quen, từ đó thành bạn tốt.",
  "exList": [
   {
    "zh": "此次出差，让两人熟悉了起来，从此成了好朋友。",
    "py": "Cǐ cì chūchāi, ràng liǎng rén shúxī le qǐlái, cóngcǐ chéng le hǎo péngyou.",
    "vn": "Chuyến công tác lần này khiến hai người trở nên thân quen, từ đó thành bạn tốt."
   },
   {
    "zh": "他大学毕业后去了上海，从此我们就很少见面了。",
    "py": "Tā dàxué bìyè hòu qù le Shànghǎi, cóngcǐ wǒmen jiù hěn shǎo jiànmiàn le.",
    "vn": "Tốt nghiệp đại học xong anh ấy đi Thượng Hải, từ đó chúng tôi rất ít gặp nhau."
   }
  ],
  "hanzi": [
   {
    "c": "从",
    "p": "cóng",
    "type": "左右结构 · Trái-phải (giản thể)",
    "st": 4,
    "ord": "人 trái → 人 phải",
    "rad": "人 (nhân – người)",
    "mean": "từ, theo",
    "tip": "Hai chữ 人 nối tiếp nhau → người này ĐI THEO người kia, mở rộng thành TỪ (một mốc thời gian/nơi chốn) đến nay.",
    "cf": "丛 (cóng – \"bụi cây\", hình gần giống nhưng bộ khác\")",
    "w": "从来 / 从……到…… / 自从"
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
    "prompt": "Chúng tôi phát hiện có rất nhiều sở thích chung, thế là càng nói chuyện càng nhiều, từ đó thành bạn tốt.",
    "answer": "我们发现有很多共同爱好，于是越聊越多，从此成了好朋友。",
    "answerPy": "Wǒmen fāxiàn yǒu hěn duō gòngtóng àihào, yúshì yuè liáo yuè duō, cóngcǐ chéng le hǎo péngyou.",
    "note": "Ôn 于是 (Bài 3 · điểm 4).",
    "pair": "于是……，从此……"
   },
   {
    "promptLang": "vi",
    "prompt": "Từ đó về sau, bất kể gặp khó khăn gì, hai người đều giúp đỡ lẫn nhau.",
    "answer": "从此以后，不管遇到什么困难，两个人都相互帮助。",
    "answerPy": "Cóngcǐ yǐhòu, bùguǎn yùdào shénme kùnnán, liǎng gè rén dōu xiānghù bāngzhù.",
    "note": "Ôn 不管……都…… (Bài 8 · điểm 1).",
    "pair": "从此以后"
   }
  ]
 },
 {
  "n": 26,
  "zh": "产生",
  "py": "chǎnshēng",
  "pos": "Động từ",
  "vn": "nảy sinh, sinh ra",
  "hv": "sản sinh",
  "em": "🌱",
  "lesson": 3,
  "explain": [
   "Từ chỗ không có mà sinh ra, xuất hiện — thường đi với danh từ trừu tượng: 产生爱情, 产生兴趣, 产生问题, 产生影响."
  ],
  "usage": "产生 + 爱情 / 感情 / 兴趣 / 问题 / 影响 · ……之间产生了…….",
  "collo": [
   "产生爱情",
   "产生兴趣",
   "产生问题",
   "产生影响"
  ],
  "colloFull": [
   {
    "zh": "产生爱情",
    "py": "Chǎnshēng àiqíng",
    "vn": "nảy sinh tình yêu"
   },
   {
    "zh": "产生兴趣",
    "py": "Chǎnshēng xìngqù",
    "vn": "nảy sinh hứng thú"
   },
   {
    "zh": "产生问题",
    "py": "Chǎnshēng wèntí",
    "vn": "phát sinh vấn đề"
   },
   {
    "zh": "产生影响",
    "py": "Chǎnshēng yǐngxiǎng",
    "vn": "gây ảnh hưởng"
   }
  ],
  "patterns": [
   {
    "s": "A + 对 + B + 产生 + 兴趣",
    "m": "Nảy sinh hứng thú với …"
   },
   {
    "s": "A和B之间 + 产生了 + N",
    "m": "Giữa A và B nảy sinh …"
   }
  ],
  "ex_zh": "杨同乐和王一飞认识后，很聊得来，两人之间慢慢产生了爱情。",
  "ex_py": "Yáng Tónglè hé Wáng Yīfēi rènshi hòu, hěn liáo de lái, liǎng rén zhī jiān màn màn chǎnshēng le àiqíng.",
  "ex_vn": "Dương Đồng Lạc và Vương Nhất Phi quen nhau rồi rất hợp chuyện, giữa hai người dần dần nảy sinh tình yêu.",
  "exList": [
   {
    "zh": "杨同乐和王一飞认识后，很聊得来，两人之间慢慢产生了爱情。",
    "py": "Yáng Tónglè hé Wáng Yīfēi rènshi hòu, hěn liáo de lái, liǎng rén zhī jiān màn màn chǎnshēng le àiqíng.",
    "vn": "Dương Đồng Lạc và Vương Nhất Phi quen nhau rồi rất hợp chuyện, giữa hai người dần dần nảy sinh tình yêu."
   },
   {
    "zh": "看了这个电影以后，我对中国历史产生了很大的兴趣。",
    "py": "Kàn le zhège diànyǐng yǐhòu, wǒ duì Zhōngguó lìshǐ chǎnshēng le hěn dà de xìngqù.",
    "vn": "Xem bộ phim này xong, tôi nảy sinh hứng thú lớn với lịch sử Trung Quốc."
   }
  ],
  "hanzi": [
   {
    "c": "产",
    "p": "chǎn",
    "type": "会意字 · Chữ hội ý",
    "st": 6,
    "ord": "亠 → 丷 → 厂",
    "rad": "亠 (đầu – nắp)",
    "mean": "sinh ra, sản xuất; sản phẩm",
    "tip": "Trên là 亠 + 丷 (như cây non nhú lên), dưới là 厂 (xưởng): nhà xưởng làm ra đồ → sản xuất — 产品, 生产.",
    "cf": "严 yán (nghiêm) — trên là 一 + 业; 户 hù — trên chỉ có một chấm",
    "w": "产品 / 生产 / 产生"
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
    "prompt": "Cùng với việc hiểu nhau ngày càng nhiều, giữa hai người dần dần nảy sinh tình cảm.",
    "answer": "随着相互了解越来越多，两人之间慢慢产生了感情。",
    "answerPy": "Suízhe xiānghù liǎojiě yuèláiyuè duō, liǎng rén zhī jiān màn màn chǎnshēng le gǎnqíng.",
    "note": "Ôn 随着 (Bài 1 · điểm 3).",
    "pair": "随着……"
   },
   {
    "promptLang": "vi",
    "prompt": "Mỗi ngày phải ngủ đủ, nếu không sẽ ảnh hưởng đến sức khỏe.",
    "answer": "每天要睡够，否则会对身体产生影响。",
    "answerPy": "Měi tiān yào shuì gòu, fǒuzé huì duì shēntǐ chǎnshēng yǐngxiǎng.",
    "note": "Ôn 够 (Bài 5 · điểm 2) + 否则 (Bài 8 · điểm 2).",
    "pair": "对……产生影响"
   }
  ]
 },
 {
  "n": 27,
  "zh": "爱情",
  "py": "àiqíng",
  "pos": "Danh từ",
  "vn": "tình yêu (đôi lứa)",
  "hv": "ái tình",
  "em": "❤️",
  "lesson": 3,
  "explain": [
   "Tình yêu giữa hai người yêu nhau, vợ chồng. Phân biệt: 爱情 (tình yêu đôi lứa) – 友情 (tình bạn) – 感情 (tình cảm nói chung) – 亲情 (tình thân)."
  ],
  "usage": "美好的爱情 · 产生爱情 · 爱情故事 · 爱情观.",
  "collo": [
   "美好的爱情",
   "爱情故事",
   "产生爱情",
   "爱情观"
  ],
  "colloFull": [
   {
    "zh": "美好的爱情",
    "py": "Měihǎo de àiqíng",
    "vn": "tình yêu đẹp"
   },
   {
    "zh": "爱情故事",
    "py": "Àiqíng gùshì",
    "vn": "chuyện tình yêu"
   },
   {
    "zh": "产生爱情",
    "py": "Chǎnshēng àiqíng",
    "vn": "nảy sinh tình yêu"
   },
   {
    "zh": "爱情观",
    "py": "Àiqíng guān",
    "vn": "quan niệm về tình yêu"
   }
  ],
  "patterns": [
   {
    "s": "爱情 / 友情 / 亲情",
    "m": "Tình yêu – tình bạn – tình thân"
   },
   {
    "s": "爱 (động từ) ≠ 爱情 (danh từ)",
    "m": "✗ 我爱情你 → ✓ 我爱你"
   }
  ],
  "ex_zh": "两人之间慢慢产生了爱情，最后成了夫妻。",
  "ex_py": "Liǎng rén zhī jiān màn màn chǎnshēng le àiqíng, zuìhòu chéng le fūqī.",
  "ex_vn": "Giữa hai người dần dần nảy sinh tình yêu, cuối cùng thành vợ chồng.",
  "exList": [
   {
    "zh": "两人之间慢慢产生了爱情，最后成了夫妻。",
    "py": "Liǎng rén zhī jiān màn màn chǎnshēng le àiqíng, zuìhòu chéng le fūqī.",
    "vn": "Giữa hai người dần dần nảy sinh tình yêu, cuối cùng thành vợ chồng."
   },
   {
    "zh": "这是一个关于爱情的电影，很多人看完都感动得哭了。",
    "py": "Zhè shì yí gè guānyú àiqíng de diànyǐng, hěn duō rén kànwán dōu gǎndòng de kū le.",
    "vn": "Đây là bộ phim về tình yêu, nhiều người xem xong cảm động đến phát khóc."
   }
  ],
  "hanzi": [
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
   },
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
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Lấy tôi mà nói, tôi cho rằng trong tình yêu, thấu hiểu là quan trọng nhất.",
    "answer": "拿我来说，我觉得在爱情中，理解是最重要的。",
    "answerPy": "Ná wǒ láishuō, wǒ juéde zài àiqíng zhōng, lǐjiě shì zuì zhòngyào de.",
    "note": "Ôn 拿……来说 (Bài 7 · điểm 3).",
    "pair": "拿……来说"
   },
   {
    "promptLang": "vi",
    "prompt": "Tình yêu có ngọt có đắng, như thế mới là cuộc sống.",
    "answer": "爱情有甜有苦，这才是生活。",
    "answerPy": "Àiqíng yǒu tián yǒu kǔ, zhè cái shì shēnghuó.",
    "note": "Ôn 有A有B (Bài 8 · điểm 4).",
    "pair": "有A有B"
   }
  ]
 },
 {
  "n": 28,
  "zh": "间",
  "py": "jiān",
  "pos": "Danh từ",
  "vn": "giữa (khoảng giữa, quan hệ giữa)",
  "hv": "gian",
  "em": "↔️",
  "lesson": 3,
  "explain": [
   "Khoảng giữa, quan hệ giữa hai hay nhiều người / vật; hay dùng trong 之间, hoặc N + 间 (同事间, 朋友间, 夫妻间). Lưu ý: 间 còn là lượng từ của phòng (一间房) — nghĩa khác."
  ],
  "usage": "A和B之间 · 同事间 / 朋友间 / 夫妻间 (+ 的 + N).",
  "collo": [
   "同事间",
   "朋友间",
   "两人之间",
   "夫妻间"
  ],
  "colloFull": [
   {
    "zh": "同事间",
    "py": "Tóngshì jiān",
    "vn": "giữa đồng nghiệp"
   },
   {
    "zh": "朋友间",
    "py": "Péngyou jiān",
    "vn": "giữa bạn bè"
   },
   {
    "zh": "两人之间",
    "py": "Liǎng rén zhī jiān",
    "vn": "giữa hai người"
   },
   {
    "zh": "夫妻间",
    "py": "Fūqī jiān",
    "vn": "giữa vợ chồng"
   }
  ],
  "patterns": [
   {
    "s": "N (người) + 间 + 的 + N",
    "m": "同事间的友情 = tình bạn giữa đồng nghiệp"
   },
   {
    "s": "A和B + 之间",
    "m": "Giữa A và B"
   }
  ],
  "ex_zh": "杨同乐说自己很幸运，和王一雪这份同事间的友情，给他带来了美好的爱情。",
  "ex_py": "Yáng Tónglè shuō zìjǐ hěn xìngyùn, hé Wáng Yīxuě zhè fèn tóngshì jiān de yǒuqíng, gěi tā dài lái le měihǎo de àiqíng.",
  "ex_vn": "Dương Đồng Lạc nói mình rất may mắn, tình bạn đồng nghiệp với Vương Nhất Tuyết đã mang đến cho anh một tình yêu đẹp.",
  "exList": [
   {
    "zh": "杨同乐说自己很幸运，和王一雪这份同事间的友情，给他带来了美好的爱情。",
    "py": "Yáng Tónglè shuō zìjǐ hěn xìngyùn, hé Wáng Yīxuě zhè fèn tóngshì jiān de yǒuqíng, gěi tā dài lái le měihǎo de àiqíng.",
    "vn": "Dương Đồng Lạc nói mình rất may mắn, tình bạn đồng nghiệp với Vương Nhất Tuyết đã mang đến cho anh một tình yêu đẹp."
   },
   {
    "zh": "朋友间应该相互帮助。",
    "py": "Péngyou jiān yīnggāi xiānghù bāngzhù.",
    "vn": "Giữa bạn bè với nhau nên giúp đỡ lẫn nhau."
   }
  ],
  "hanzi": [
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
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "So với tình bạn giữa bạn học, tình bạn giữa đồng nghiệp càng không dễ có.",
    "answer": "跟同学间的友情相比，同事间的友情更不容易。",
    "answerPy": "Gēn tóngxué jiān de yǒuqíng xiāngbǐ, tóngshì jiān de yǒuqíng gèng bù róngyì.",
    "note": "Ôn 跟……相比 (Bài 8 · điểm 3).",
    "pair": "跟……相比"
   },
   {
    "promptLang": "vi",
    "prompt": "Giữa hai người họ có rất nhiều sở thích chung.",
    "answer": "他们两人之间有很多共同爱好。",
    "answerPy": "Tāmen liǎng rén zhī jiān yǒu hěn duō gòngtóng àihào.",
    "note": "Mẫu ……之间 + từ mới 共同.",
    "pair": "……之间"
   }
  ]
 },
 {
  "n": 29,
  "zh": "友情",
  "py": "yǒuqíng",
  "pos": "Danh từ",
  "vn": "tình bạn",
  "hv": "hữu tình",
  "em": "🤗",
  "lesson": 3,
  "explain": [
   "Tình cảm giữa bạn bè: “tình bạn” (gần nghĩa 友谊). Bẫy Hán Việt: tiếng Việt “hữu tình” là “nên thơ, có tình” (phong cảnh hữu tình) — còn 友情 là TÌNH BẠN."
  ],
  "usage": "美好的友情 · 同事间的友情 · 很深的友情 · 一份友情.",
  "collo": [
   "美好的友情",
   "很深的友情",
   "一份友情",
   "友情和爱情"
  ],
  "colloFull": [
   {
    "zh": "美好的友情",
    "py": "Měihǎo de yǒuqíng",
    "vn": "tình bạn đẹp"
   },
   {
    "zh": "很深的友情",
    "py": "Hěn shēn de yǒuqíng",
    "vn": "tình bạn sâu đậm"
   },
   {
    "zh": "一份友情",
    "py": "Yí fèn yǒuqíng",
    "vn": "một tình bạn"
   },
   {
    "zh": "友情和爱情",
    "py": "Yǒuqíng hé àiqíng",
    "vn": "tình bạn và tình yêu"
   }
  ],
  "patterns": [
   {
    "s": "一份 + 友情 / 爱情 / 感情",
    "m": "Lượng từ 份 cho tình cảm"
   },
   {
    "s": "有 + 很深的 + 友情",
    "m": "Có tình bạn sâu đậm"
   }
  ],
  "ex_zh": "和王一雪这份同事间的友情，给他带来了美好的爱情。",
  "ex_py": "Hé Wáng Yīxuě zhè fèn tóngshì jiān de yǒuqíng, gěi tā dài lái le měihǎo de àiqíng.",
  "ex_vn": "Tình bạn đồng nghiệp với Vương Nhất Tuyết đã mang đến cho anh một tình yêu đẹp.",
  "exList": [
   {
    "zh": "和王一雪这份同事间的友情，给他带来了美好的爱情。",
    "py": "Hé Wáng Yīxuě zhè fèn tóngshì jiān de yǒuqíng, gěi tā dài lái le měihǎo de àiqíng.",
    "vn": "Tình bạn đồng nghiệp với Vương Nhất Tuyết đã mang đến cho anh một tình yêu đẹp."
   },
   {
    "zh": "我们从小一起长大，这份友情对我来说特别重要。",
    "py": "Wǒmen cóng xiǎo yìqǐ zhǎng dà, zhè fèn yǒuqíng duì wǒ láishuō tèbié zhòngyào.",
    "vn": "Chúng tôi lớn lên cùng nhau từ nhỏ, tình bạn này đối với tôi đặc biệt quan trọng."
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
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Ba người họ có tình bạn rất sâu đậm.",
    "answer": "她们三个有很深的友情。",
    "answerPy": "Tāmen sān gè yǒu hěn shēn de yǒuqíng.",
    "note": "Câu mẫu 看图 của sách.",
    "pair": "有很深的友情"
   },
   {
    "promptLang": "vi",
    "prompt": "Bất kể đi đến đâu, tình bạn này tôi đều sẽ luôn nhớ.",
    "answer": "不管去哪儿，这份友情我都会一直记得。",
    "answerPy": "Bùguǎn qù nǎr, zhè fèn yǒuqíng wǒ dōu huì yìzhí jìde.",
    "note": "Ôn 不管……都…… (Bài 8 · điểm 1).",
    "pair": "不管……都……"
   }
  ]
 },
 {
  "n": 30,
  "zh": "美好",
  "py": "měihǎo",
  "pos": "Tính từ",
  "vn": "tốt đẹp, đẹp đẽ",
  "hv": "mỹ hảo",
  "em": "🌈",
  "lesson": 3,
  "explain": [
   "Tốt đẹp, khiến người ta vui và mong muốn — thường dùng cho điều trừu tượng: cuộc sống, tình cảm, tương lai, kỷ niệm. Người, đồ vật cụ thể đẹp thì dùng 漂亮 / 好看."
  ],
  "usage": "美好的生活 / 爱情 / 未来 / 回忆 · 美好的遇见 · 越来越美好.",
  "collo": [
   "美好的生活",
   "美好的爱情",
   "美好的未来",
   "美好的回忆"
  ],
  "colloFull": [
   {
    "zh": "美好的生活",
    "py": "Měihǎo de shēnghuó",
    "vn": "cuộc sống tốt đẹp"
   },
   {
    "zh": "美好的爱情",
    "py": "Měihǎo de àiqíng",
    "vn": "tình yêu đẹp"
   },
   {
    "zh": "美好的未来",
    "py": "Měihǎo de wèilái",
    "vn": "tương lai tươi sáng"
   },
   {
    "zh": "美好的回忆",
    "py": "Měihǎo de huíyì",
    "vn": "kỷ niệm đẹp"
   }
  ],
  "patterns": [
   {
    "s": "美好 + 的 + N (trừu tượng)",
    "m": "生活 / 未来 / 爱情 / 回忆"
   },
   {
    "s": "美好 vs 漂亮",
    "m": "美好: điều trừu tượng; 漂亮: người, đồ vật cụ thể"
   }
  ],
  "ex_zh": "和王一雪这份同事间的友情，给他带来了美好的爱情。",
  "ex_py": "Hé Wáng Yīxuě zhè fèn tóngshì jiān de yǒuqíng, gěi tā dài lái le měihǎo de àiqíng.",
  "ex_vn": "Tình bạn đồng nghiệp với Vương Nhất Tuyết đã mang đến cho anh một tình yêu đẹp.",
  "exList": [
   {
    "zh": "和王一雪这份同事间的友情，给他带来了美好的爱情。",
    "py": "Hé Wáng Yīxuě zhè fèn tóngshì jiān de yǒuqíng, gěi tā dài lái le měihǎo de àiqíng.",
    "vn": "Tình bạn đồng nghiệp với Vương Nhất Tuyết đã mang đến cho anh một tình yêu đẹp."
   },
   {
    "zh": "大学四年是我人生中最美好的日子。",
    "py": "Dàxué sì nián shì wǒ rénshēng zhōng zuì měihǎo de rìzi.",
    "vn": "Bốn năm đại học là những ngày tháng đẹp nhất trong đời tôi."
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
    "prompt": "Chỉ cần chúng ta cùng nhau cố gắng, cuộc sống sẽ ngày càng tốt đẹp.",
    "answer": "只要我们共同努力，生活就会越来越美好。",
    "answerPy": "Zhǐyào wǒmen gòngtóng nǔlì, shēnghuó jiù huì yuèláiyuè měihǎo.",
    "note": "Mẫu 只要……就…… (HSK 3) + từ mới 共同.",
    "pair": "越来越美好"
   },
   {
    "promptLang": "vi",
    "prompt": "Tôi thỉnh thoảng nhớ lại những ngày tháng đẹp đẽ thời đại học.",
    "answer": "我偶尔会想起大学时那些美好的日子。",
    "answerPy": "Wǒ ǒu'ěr huì xiǎng qǐ dàxué shí nàxiē měihǎo de rìzi.",
    "note": "Ôn 偶尔 (Bài 6 · điểm 3).",
    "pair": "偶尔"
   }
  ]
 },
 {
  "n": 31,
  "zh": "人生",
  "py": "rénshēng",
  "pos": "Danh từ",
  "vn": "đời người, cuộc đời",
  "hv": "nhân sinh",
  "em": "🛤️",
  "lesson": 4,
  "explain": [
   "Cả cuộc đời của một con người. Phân biệt: 人生 = cả đời người (nghĩa rộng, sâu); 生活 = cuộc sống, sinh hoạt hằng ngày."
  ],
  "usage": "人生变得更精彩 · 人生中 · 人生路 · 人生目标.",
  "collo": [
   "精彩的人生",
   "人生目标",
   "人生中",
   "人生的路"
  ],
  "colloFull": [
   {
    "zh": "精彩的人生",
    "py": "Jīngcǎi de rénshēng",
    "vn": "cuộc đời rực rỡ"
   },
   {
    "zh": "人生目标",
    "py": "Rénshēng mùbiāo",
    "vn": "mục tiêu cuộc đời"
   },
   {
    "zh": "人生中",
    "py": "Rénshēng zhōng",
    "vn": "trong cuộc đời"
   },
   {
    "zh": "人生的路",
    "py": "Rénshēng de lù",
    "vn": "đường đời"
   }
  ],
  "patterns": [
   {
    "s": "人生 vs 生活",
    "m": "人生 = cả đời người; 生活 = cuộc sống hằng ngày"
   },
   {
    "s": "(在) + 人生中",
    "m": "Trong cuộc đời …"
   }
  ],
  "ex_zh": "李文在校园里遇见白家月，从此，他们的人生变得更加精彩。",
  "ex_py": "Lǐ Wén zài xiàoyuán lǐ yùjiàn Bái Jiāyuè, cóngcǐ, tāmen de rénshēng biàn de gèng jiā jīngcǎi.",
  "ex_vn": "Lý Văn gặp Bạch Gia Nguyệt trong khuôn viên trường, từ đó cuộc đời họ trở nên rực rỡ hơn.",
  "exList": [
   {
    "zh": "李文在校园里遇见白家月，从此，他们的人生变得更加精彩。",
    "py": "Lǐ Wén zài xiàoyuán lǐ yùjiàn Bái Jiāyuè, cóngcǐ, tāmen de rénshēng biàn de gèng jiā jīngcǎi.",
    "vn": "Lý Văn gặp Bạch Gia Nguyệt trong khuôn viên trường, từ đó cuộc đời họ trở nên rực rỡ hơn."
   },
   {
    "zh": "上大学是我人生中的一件大事。",
    "py": "Shàng dàxué shì wǒ rénshēng zhōng de yí jiàn dà shì.",
    "vn": "Vào đại học là một việc lớn trong đời tôi."
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
    "prompt": "Đời người có đắng có ngọt, quan trọng là có người cùng bạn đi tiếp.",
    "answer": "人生有苦有甜，重要的是有人陪你一起走下去。",
    "answerPy": "Rénshēng yǒu kǔ yǒu tián, zhòngyào de shì yǒurén péi nǐ yìqǐ zǒu xiàqù.",
    "note": "Ôn 有A有B (Bài 8 · điểm 4).",
    "pair": "有A有B"
   },
   {
    "promptLang": "vi",
    "prompt": "Đã là cuộc đời của mình thì nên tự mình quyết định.",
    "answer": "既然是自己的人生，就应该自己做决定。",
    "answerPy": "Jìrán shì zìjǐ de rénshēng, jiù yīnggāi zìjǐ zuò juédìng.",
    "note": "Ôn 既然……就…… (Bài 7 · điểm 2).",
    "pair": "既然……就……"
   }
  ]
 },
 {
  "n": 32,
  "zh": "精彩",
  "py": "jīngcǎi",
  "pos": "Tính từ",
  "vn": "đặc sắc, hấp dẫn, tuyệt vời",
  "hv": "tinh thái",
  "em": "🎉",
  "lesson": 4,
  "explain": [
   "Rất hay, hấp dẫn, đáng xem (trận đấu, biểu diễn, bài nói…); nói về cuộc sống: phong phú, rực rỡ."
  ],
  "usage": "比赛 / 表演 + 很精彩 · 精彩的人生 · V得很精彩.",
  "collo": [
   "精彩的比赛",
   "精彩的表演",
   "精彩的人生",
   "踢得很精彩"
  ],
  "colloFull": [
   {
    "zh": "精彩的比赛",
    "py": "Jīngcǎi de bǐsài",
    "vn": "trận đấu hấp dẫn"
   },
   {
    "zh": "精彩的表演",
    "py": "Jīngcǎi de biǎoyǎn",
    "vn": "màn biểu diễn đặc sắc"
   },
   {
    "zh": "精彩的人生",
    "py": "Jīngcǎi de rénshēng",
    "vn": "cuộc đời rực rỡ"
   },
   {
    "zh": "踢得很精彩",
    "py": "Tī de hěn jīngcǎi",
    "vn": "đá rất hay"
   }
  ],
  "patterns": [
   {
    "s": "N + 很 / 非常 + 精彩",
    "m": "Khen hoạt động, sự kiện"
   },
   {
    "s": "V + 得 + 很精彩",
    "m": "Bổ ngữ trạng thái: 踢得很精彩"
   }
  ],
  "ex_zh": "从此，他们的人生变得更加精彩。",
  "ex_py": "Cóngcǐ, tāmen de rénshēng biàn de gèng jiā jīngcǎi.",
  "ex_vn": "Từ đó, cuộc đời họ trở nên rực rỡ hơn.",
  "exList": [
   {
    "zh": "从此，他们的人生变得更加精彩。",
    "py": "Cóngcǐ, tāmen de rénshēng biàn de gèng jiā jīngcǎi.",
    "vn": "Từ đó, cuộc đời họ trở nên rực rỡ hơn."
   },
   {
    "zh": "这场演出太精彩了，可惜你没来，你错过了！",
    "py": "Zhè chǎng yǎnchū tài jīngcǎi le, kěxī nǐ méi lái, nǐ cuòguò le!",
    "vn": "Buổi biểu diễn này đặc sắc quá, tiếc là bạn không đến, bạn bỏ lỡ rồi!"
   }
  ],
  "hanzi": [
   {
    "c": "精",
    "p": "jīng",
    "type": "形声字 · Chữ hình thanh",
    "st": 14,
    "ord": "米 → 青",
    "rad": "米 (mễ – gạo)",
    "mean": "tinh túy, tinh xảo; tinh thần",
    "tip": "Gạo (米) đã giã sạch, chọn hạt ngon nhất + 青 qīng (chỉ âm) → phần tinh túy nhất → 精彩 (đặc sắc), 精神 (tinh thần).",
    "cf": "请 qǐng — bên trái là 讠; 情 qíng — bên trái là 忄; 晴 qíng — bên trái là 日",
    "w": "精彩 / 精神 / 精心"
   },
   {
    "c": "彩",
    "p": "cǎi",
    "type": "左右结构 · Trái-phải",
    "st": 11,
    "ord": "采 trái → 彡 (sam) phải",
    "rad": "彡 (sam – vệt màu, lông)",
    "mean": "màu sắc rực rỡ",
    "tip": "Bộ 彡 (vệt màu, hoa văn) + 采(biểu âm) → MÀU SẮC RỰC RỠ, kết hợp 精(tinh, tốt) thành 精彩 = ĐẶC SẮC, TUYỆT VỜI.",
    "cf": "采 (cǎi – \"hái\", phần bên trái)",
    "w": "精彩 / 彩色 / 光彩"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Trận bóng rổ của họ vô cùng hấp dẫn.",
    "answer": "她们的篮球比赛非常精彩。",
    "answerPy": "Tāmen de lánqiú bǐsài fēicháng jīngcǎi.",
    "note": "Câu mẫu 看图 của sách.",
    "pair": "非常精彩"
   },
   {
    "promptLang": "vi",
    "prompt": "Trận đấu này hay thì hay thật, có điều kết thúc muộn quá.",
    "answer": "这场比赛精彩是精彩，不过结束得太晚了。",
    "answerPy": "Zhè chǎng bǐsài jīngcǎi shì jīngcǎi, búguò jiéshù de tài wǎn le.",
    "note": "Ôn ×是×，不过…… (Bài 3 · điểm 1).",
    "pair": "×是×，不过……"
   }
  ]
 },
 {
  "n": 33,
  "zh": "感情",
  "py": "gǎnqíng",
  "pos": "Danh từ",
  "vn": "tình cảm",
  "hv": "cảm tình",
  "em": "💞",
  "lesson": 4,
  "explain": [
   "Tình cảm giữa người với người (vợ chồng, người yêu, bạn bè, gia đình). Bẫy Hán Việt: tiếng Việt “cảm tình” = thiện cảm; 感情 = TÌNH CẢM. 一段感情 = một mối tình, một mối quan hệ."
  ],
  "usage": "感情很好 / 很深 · 感情越来越深 · 一段感情 · 夫妻感情.",
  "collo": [
   "感情很好",
   "感情很深",
   "一段感情",
   "夫妻感情"
  ],
  "colloFull": [
   {
    "zh": "感情很好",
    "py": "Gǎnqíng hěn hǎo",
    "vn": "tình cảm rất tốt"
   },
   {
    "zh": "感情很深",
    "py": "Gǎnqíng hěn shēn",
    "vn": "tình cảm sâu đậm"
   },
   {
    "zh": "一段感情",
    "py": "Yí duàn gǎnqíng",
    "vn": "một mối tình"
   },
   {
    "zh": "夫妻感情",
    "py": "Fūqī gǎnqíng",
    "vn": "tình cảm vợ chồng"
   }
  ],
  "patterns": [
   {
    "s": "A和B + 感情 + Adj",
    "m": "Tình cảm giữa A và B thế nào"
   },
   {
    "s": "在一段感情中",
    "m": "Trong một mối quan hệ tình cảm"
   }
  ],
  "ex_zh": "王一飞和杨同乐通过王一雪介绍认识后，感情越来越深。",
  "ex_py": "Wáng Yīfēi hé Yáng Tónglè tōngguò Wáng Yīxuě jièshào rènshi hòu, gǎnqíng yuèláiyuè shēn.",
  "ex_vn": "Vương Nhất Phi và Dương Đồng Lạc quen nhau qua sự giới thiệu của Vương Nhất Tuyết, tình cảm ngày càng sâu đậm.",
  "exList": [
   {
    "zh": "王一飞和杨同乐通过王一雪介绍认识后，感情越来越深。",
    "py": "Wáng Yīfēi hé Yáng Tónglè tōngguò Wáng Yīxuě jièshào rènshi hòu, gǎnqíng yuèláiyuè shēn.",
    "vn": "Vương Nhất Phi và Dương Đồng Lạc quen nhau qua sự giới thiệu của Vương Nhất Tuyết, tình cảm ngày càng sâu đậm."
   },
   {
    "zh": "我们是十年的老朋友了，感情一直很好。",
    "py": "Wǒmen shì shí nián de lǎo péngyou le, gǎnqíng yìzhí hěn hǎo.",
    "vn": "Chúng tôi là bạn cũ mười năm rồi, tình cảm luôn rất tốt."
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
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Tình cảm của họ ngày càng sâu đậm, thế là năm ngoái đã kết hôn.",
    "answer": "他们的感情越来越深，于是去年结婚了。",
    "answerPy": "Tāmen de gǎnqíng yuèláiyuè shēn, yúshì qùnián jiéhūn le.",
    "note": "Ôn 于是 (Bài 3 · điểm 4).",
    "pair": "于是"
   },
   {
    "promptLang": "vi",
    "prompt": "Hai vợ chồng mỗi người bận việc riêng, có điều tình cảm luôn rất tốt.",
    "answer": "夫妻俩各忙各的工作，不过感情一直很好。",
    "answerPy": "Fūqī liǎ gè máng gè de gōngzuò, búguò gǎnqíng yìzhí hěn hǎo.",
    "note": "Ôn 各×各的 (Bài 5 · điểm 3) + 不过 (Bài 2 · điểm 2).",
    "pair": "各V各的"
   }
  ]
 },
 {
  "n": 34,
  "zh": "深",
  "py": "shēn",
  "pos": "Tính từ",
  "vn": "sâu; sâu đậm, sâu sắc",
  "hv": "thâm",
  "em": "🌊",
  "lesson": 4,
  "explain": [
   "Nghĩa gốc: sâu (nước sâu). Nghĩa trong bài: tình cảm, ấn tượng, hiểu biết sâu đậm — 感情很深, 印象很深."
  ],
  "usage": "感情越来越深 · 印象很深 · 很深的友情 · 水很深.",
  "collo": [
   "感情很深",
   "印象很深",
   "很深的友情",
   "水很深"
  ],
  "colloFull": [
   {
    "zh": "感情很深",
    "py": "Gǎnqíng hěn shēn",
    "vn": "tình cảm sâu đậm"
   },
   {
    "zh": "印象很深",
    "py": "Yìnxiàng hěn shēn",
    "vn": "ấn tượng sâu sắc"
   },
   {
    "zh": "很深的友情",
    "py": "Hěn shēn de yǒuqíng",
    "vn": "tình bạn sâu đậm"
   },
   {
    "zh": "水很深",
    "py": "Shuǐ hěn shēn",
    "vn": "nước rất sâu"
   }
  ],
  "patterns": [
   {
    "s": "感情 / 印象 / 友情 + 很深",
    "m": "Nghĩa bóng: sâu đậm"
   },
   {
    "s": "深 ↔ 浅 (qiǎn)",
    "m": "Trái nghĩa: nông, nhạt"
   }
  ],
  "ex_zh": "感情越来越深，最后两人幸福地走到了一起。",
  "ex_py": "Gǎnqíng yuèláiyuè shēn, zuìhòu liǎng rén xìngfú de zǒu dào le yìqǐ.",
  "ex_vn": "Tình cảm ngày càng sâu đậm, cuối cùng hai người hạnh phúc về chung một nhà.",
  "exList": [
   {
    "zh": "感情越来越深，最后两人幸福地走到了一起。",
    "py": "Gǎnqíng yuèláiyuè shēn, zuìhòu liǎng rén xìngfú de zǒu dào le yìqǐ.",
    "vn": "Tình cảm ngày càng sâu đậm, cuối cùng hai người hạnh phúc về chung một nhà."
   },
   {
    "zh": "这条河很深，小孩子不能在这儿游泳。",
    "py": "Zhè tiáo hé hěn shēn, xiǎo háizi bù néng zài zhèr yóuyǒng.",
    "vn": "Con sông này rất sâu, trẻ con không được bơi ở đây."
   }
  ],
  "hanzi": [
   {
    "c": "深",
    "p": "shēn",
    "type": "左右结构 · Trái-phải",
    "st": 11,
    "ord": "氵 (thủy) trái → 罙 phải",
    "rad": "氵 (thủy – nước)",
    "mean": "sâu",
    "tip": "Bộ nước 氵 + phần biểu âm 罙 → chỉ mực NƯỚC SÂU, mở rộng nghĩa thành SÂU SẮC (tình cảm, ấn tượng).",
    "cf": "探 (tàn – \"thăm dò\", cũng có phần bên phải gần giống)",
    "w": "很深 / 深夜 / 加深"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Cùng với thời gian trôi qua, tình bạn của họ ngày càng sâu đậm.",
    "answer": "随着时间的过去，他们的友情越来越深。",
    "answerPy": "Suízhe shíjiān de guòqù, tāmen de yǒuqíng yuèláiyuè shēn.",
    "note": "Ôn 随着 (Bài 1 · điểm 3).",
    "pair": "随着……"
   },
   {
    "promptLang": "vi",
    "prompt": "Chúng tôi một mặt là đồng nghiệp, mặt khác cũng là bạn tốt, tình cảm rất sâu.",
    "answer": "我们一方面是同事，另一方面也是好朋友，感情很深。",
    "answerPy": "Wǒmen yìfāngmiàn shì tóngshì, lìngyìfāngmiàn yě shì hǎo péngyou, gǎnqíng hěn shēn.",
    "note": "Ôn 一方面……另一方面…… (Bài 1 · điểm 4).",
    "pair": "一方面……另一方面……"
   }
  ]
 },
 {
  "n": 35,
  "zh": "经营",
  "py": "jīngyíng",
  "pos": "Động từ",
  "vn": "vun đắp, gây dựng; kinh doanh, quản lý",
  "hv": "kinh doanh",
  "em": "🏡",
  "lesson": 4,
  "explain": [
   "Nghĩa gốc: kinh doanh, điều hành (经营一家饭馆) — Hán Việt của 经营 chính là “kinh doanh”. Nghĩa trong bài (nghĩa bóng): bỏ công sức vun đắp, gìn giữ — 经营感情, 经营家庭."
  ],
  "usage": "经营 + 感情 / 家庭 / 爱情 · 经营好 · 经营一家店.",
  "collo": [
   "经营感情",
   "经营家庭",
   "经营饭馆",
   "共同经营"
  ],
  "colloFull": [
   {
    "zh": "经营感情",
    "py": "Jīngyíng gǎnqíng",
    "vn": "vun đắp tình cảm"
   },
   {
    "zh": "经营家庭",
    "py": "Jīngyíng jiātíng",
    "vn": "vun vén gia đình"
   },
   {
    "zh": "经营饭馆",
    "py": "Jīngyíng fànguǎn",
    "vn": "kinh doanh quán ăn"
   },
   {
    "zh": "共同经营",
    "py": "Gòngtóng jīngyíng",
    "vn": "cùng nhau vun đắp"
   }
  ],
  "patterns": [
   {
    "s": "经营 + 感情 / 家庭",
    "m": "Nghĩa bóng: vun đắp"
   },
   {
    "s": "经营 + 公司 / 饭馆",
    "m": "Nghĩa gốc: kinh doanh, điều hành"
   }
  ],
  "ex_zh": "不过美好的遇见只是爱的开始，爱更需要经营。",
  "ex_py": "Búguò měihǎo de yùjiàn zhǐshì ài de kāishǐ, ài gèng xūyào jīngyíng.",
  "ex_vn": "Có điều cuộc gặp gỡ đẹp đẽ chỉ là khởi đầu của tình yêu, tình yêu càng cần được vun đắp.",
  "exList": [
   {
    "zh": "不过美好的遇见只是爱的开始，爱更需要经营。",
    "py": "Búguò měihǎo de yùjiàn zhǐshì ài de kāishǐ, ài gèng xūyào jīngyíng.",
    "vn": "Có điều cuộc gặp gỡ đẹp đẽ chỉ là khởi đầu của tình yêu, tình yêu càng cần được vun đắp."
   },
   {
    "zh": "他爸爸在学校附近经营一家小饭馆。",
    "py": "Tā bàba zài xuéxiào fùjìn jīngyíng yì jiā xiǎo fànguǎn.",
    "vn": "Bố anh ấy kinh doanh một quán ăn nhỏ gần trường."
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
    "c": "营",
    "p": "yíng",
    "type": "形声字 · Chữ hình thanh",
    "st": 11,
    "ord": "艹 → 冖 → 吕",
    "rad": "艹 (thảo – cỏ)",
    "mean": "doanh trại; kinh doanh, quản lý",
    "tip": "Phía trên như mái che (艹 冖), phía dưới hai gian nhà nối nhau (吕) → khu doanh trại, nơi sắp đặt quản lý → 经营 (kinh doanh, vun đắp), 营业.",
    "cf": "宫 gōng (cung) — trên là 宀; 管 guǎn — trên là ⺮",
    "w": "经营 / 营业 / 夏令营"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Kết hôn rồi, hai người phải cùng nhau vun vén tốt gia đình.",
    "answer": "结婚以后，两个人要共同经营好家庭。",
    "answerPy": "Jiéhūn yǐhòu, liǎng gè rén yào gòngtóng jīngyíng hǎo jiātíng.",
    "note": "Theo câu trong bài khoá 4.",
    "pair": "共同经营"
   },
   {
    "promptLang": "vi",
    "prompt": "Tình cảm cần được vun đắp bằng cả tấm lòng, nếu không sẽ ngày càng nhạt.",
    "answer": "感情需要用心经营，否则会越来越淡。",
    "answerPy": "Gǎnqíng xūyào yòng xīn jīngyíng, fǒuzé huì yuèláiyuè dàn.",
    "note": "Ôn 否则 (Bài 8 · điểm 2).",
    "pair": "……，否则……"
   }
  ]
 },
 {
  "n": 36,
  "zh": "对方",
  "py": "duìfāng",
  "pos": "Danh từ",
  "vn": "đối phương, người kia, bên kia",
  "hv": "đối phương",
  "em": "🔄",
  "lesson": 4,
  "explain": [
   "Người / bên còn lại trong quan hệ hai bên (người yêu, bạn bè, đối tác, người nghe điện thoại…). Lưu ý: tiếng Việt “đối phương” hay mang nghĩa đối thủ; 对方 trung tính, chỉ “người kia”."
  ],
  "usage": "关注对方 · 对方的感受 · 理解对方 · 尊重对方.",
  "collo": [
   "关注对方",
   "理解对方",
   "对方的感受",
   "尊重对方"
  ],
  "colloFull": [
   {
    "zh": "关注对方",
    "py": "Guānzhù duìfāng",
    "vn": "quan tâm người kia"
   },
   {
    "zh": "理解对方",
    "py": "Lǐjiě duìfāng",
    "vn": "thấu hiểu đối phương"
   },
   {
    "zh": "对方的感受",
    "py": "Duìfāng de gǎnshòu",
    "vn": "cảm nhận của người kia"
   },
   {
    "zh": "尊重对方",
    "py": "Zūnzhòng duìfāng",
    "vn": "tôn trọng người kia"
   }
  ],
  "patterns": [
   {
    "s": "关注 / 理解 / 尊重 + 对方",
    "m": "Cách đối xử với người kia"
   },
   {
    "s": "对方 + 的 + N",
    "m": "对方的感受 / 想法"
   }
  ],
  "ex_zh": "在一段感情中，两个人要多关注对方的感受。",
  "ex_py": "Zài yí duàn gǎnqíng zhōng, liǎng gè rén yào duō guānzhù duìfāng de gǎnshòu.",
  "ex_vn": "Trong một mối quan hệ tình cảm, hai người phải quan tâm nhiều hơn đến cảm nhận của đối phương.",
  "exList": [
   {
    "zh": "在一段感情中，两个人要多关注对方的感受。",
    "py": "Zài yí duàn gǎnqíng zhōng, liǎng gè rén yào duō guānzhù duìfāng de gǎnshòu.",
    "vn": "Trong một mối quan hệ tình cảm, hai người phải quan tâm nhiều hơn đến cảm nhận của đối phương."
   },
   {
    "zh": "我给她打了好几次电话，可是对方一直没接。",
    "py": "Wǒ gěi tā dǎ le hǎo jǐ cì diànhuà, kěshì duìfāng yìzhí méi jiē.",
    "vn": "Tôi gọi cho cô ấy mấy lần liền, nhưng bên kia mãi không nghe máy."
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
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Một câu nói ấm áp có thể khiến người kia cảm thấy rất hạnh phúc.",
    "answer": "一句温暖的话能使对方感到很幸福。",
    "answerPy": "Yí jù wēnnuǎn dehuà néng shǐ duìfāng gǎndào hěn xìngfú.",
    "note": "Ôn 使 (Bài 7 · điểm 4).",
    "pair": "使 + 对方 + ……"
   },
   {
    "promptLang": "vi",
    "prompt": "Đã ở bên nhau rồi thì phải tôn trọng người kia.",
    "answer": "既然在一起了，就要尊重对方。",
    "answerPy": "Jìrán zài yìqǐ le, jiù yào zūnzhòng duìfāng.",
    "note": "Ôn 既然……就…… (Bài 7 · điểm 2).",
    "pair": "既然……就……"
   }
  ]
 },
 {
  "n": 37,
  "zh": "感受",
  "py": "gǎnshòu",
  "pos": "Danh từ / Động từ",
  "vn": "cảm nhận, cảm giác; cảm nhận được",
  "hv": "cảm thụ",
  "em": "💭",
  "lesson": 4,
  "explain": [
   "Danh từ: điều mình cảm thấy sau khi trải qua (你有什么感受？). Động từ: cảm nhận được (感受到温暖). Âm Hán Việt “cảm thụ” (cảm thụ văn học) chỉ là một phần nghĩa."
  ],
  "usage": "对方的感受 · 有什么感受 · 感受到 + N · 谈谈感受.",
  "collo": [
   "对方的感受",
   "有什么感受",
   "感受到温暖",
   "谈谈感受"
  ],
  "colloFull": [
   {
    "zh": "对方的感受",
    "py": "Duìfāng de gǎnshòu",
    "vn": "cảm nhận của người kia"
   },
   {
    "zh": "有什么感受",
    "py": "Yǒu shénme gǎnshòu",
    "vn": "có cảm nhận gì"
   },
   {
    "zh": "感受到温暖",
    "py": "Gǎnshòu dào wēnnuǎn",
    "vn": "cảm nhận được sự ấm áp"
   },
   {
    "zh": "谈谈感受",
    "py": "Tán tán gǎnshòu",
    "vn": "nói cảm nhận"
   }
  ],
  "patterns": [
   {
    "s": "Danh từ: 有 / 说说 + 感受",
    "m": "Hỏi cảm nhận: 你有什么感受？"
   },
   {
    "s": "Động từ: 感受 + 到 + N",
    "m": "Cảm nhận được …"
   }
  ],
  "ex_zh": "两个人要多关注对方的感受。",
  "ex_py": "Liǎng gè rén yào duō guānzhù duìfāng de gǎnshòu.",
  "ex_vn": "Hai người phải quan tâm nhiều hơn đến cảm nhận của đối phương.",
  "exList": [
   {
    "zh": "两个人要多关注对方的感受。",
    "py": "Liǎng gè rén yào duō guānzhù duìfāng de gǎnshòu.",
    "vn": "Hai người phải quan tâm nhiều hơn đến cảm nhận của đối phương."
   },
   {
    "zh": "来中国以后，我感受到了中国人的热情。",
    "py": "Lái Zhōngguó yǐhòu, wǒ gǎnshòu dào le zhōngguórén de rèqíng.",
    "vn": "Đến Trung Quốc rồi, tôi cảm nhận được sự nhiệt tình của người Trung Quốc."
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
    "prompt": "Học ở Trung Quốc một năm, tôi cảm nhận được tiếng Trung của mình tiến bộ, thậm chí đã nghe hiểu phim Trung Quốc.",
    "answer": "在中国学习了一年，我感受到自己的中文进步了，甚至能听懂中国电影了。",
    "answerPy": "Zài Zhōngguó xuéxí le yì nián, wǒ gǎnshòu dào zìjǐ de Zhōngwén jìnbù le, shènzhì néng tīng dǒng Zhōngguó diànyǐng le.",
    "note": "Ôn 甚至 (Bài 3 · điểm 3).",
    "pair": "感受到……"
   },
   {
    "promptLang": "vi",
    "prompt": "Bất kể làm gì, đều phải quan tâm đến cảm nhận của người khác.",
    "answer": "不管做什么，都要关注别人的感受。",
    "answerPy": "Bùguǎn zuò shénme, dōu yào guānzhù biérén de gǎnshòu.",
    "note": "Ôn 不管……都…… (Bài 8 · điểm 1).",
    "pair": "不管……都……"
   }
  ]
 },
 {
  "n": 38,
  "zh": "尤其",
  "py": "yóuqí",
  "pos": "Phó từ",
  "vn": "đặc biệt là, nhất là",
  "hv": "vưu kỳ",
  "em": "⭐",
  "lesson": 4,
  "explain": [
   "Nhấn mạnh một phần nổi bật hơn cả trong những điều đã nói: “đặc biệt là, nhất là”. Thường đứng ở vế sau: 尤其是 + N, hoặc 尤其 + V / Adj."
  ],
  "usage": "……，尤其是 + N · ……，尤其 + V / Adj.",
  "collo": [
   "尤其是",
   "尤其喜欢",
   "尤其重要",
   "尤其是晚上"
  ],
  "colloFull": [
   {
    "zh": "尤其是",
    "py": "Yóuqí shì",
    "vn": "đặc biệt là"
   },
   {
    "zh": "尤其喜欢",
    "py": "Yóuqí xǐhuan",
    "vn": "đặc biệt thích"
   },
   {
    "zh": "尤其重要",
    "py": "Yóuqí zhòngyào",
    "vn": "đặc biệt quan trọng"
   },
   {
    "zh": "尤其是晚上",
    "py": "Yóuqí shì wǎnshang",
    "vn": "nhất là buổi tối"
   }
  ],
  "patterns": [
   {
    "s": "Cả nhóm……，尤其是 + một phần",
    "m": "Nhấn mạnh phần nổi bật"
   },
   {
    "s": "尤其 + V / Adj",
    "m": "尤其喜欢 / 尤其重要"
   }
  ],
  "ex_zh": "在一段感情中，两个人要多关注对方的感受，尤其是结婚后，更要共同经营好家庭。",
  "ex_py": "Zài yí duàn gǎnqíng zhōng, liǎng gè rén yào duō guānzhù duìfāng de gǎnshòu, yóuqí shì jiéhūn hòu, gèng yào gòngtóng jīngyíng hǎo jiātíng.",
  "ex_vn": "Trong một mối quan hệ tình cảm, hai người phải quan tâm nhiều hơn đến cảm nhận của nhau, nhất là sau khi kết hôn, càng phải cùng nhau vun vén gia đình.",
  "exList": [
   {
    "zh": "在一段感情中，两个人要多关注对方的感受，尤其是结婚后，更要共同经营好家庭。",
    "py": "Zài yí duàn gǎnqíng zhōng, liǎng gè rén yào duō guānzhù duìfāng de gǎnshòu, yóuqí shì jiéhūn hòu, gèng yào gòngtóng jīngyíng hǎo jiātíng.",
    "vn": "Trong một mối quan hệ tình cảm, hai người phải quan tâm nhiều hơn đến cảm nhận của nhau, nhất là sau khi kết hôn, càng phải cùng nhau vun vén gia đình."
   },
   {
    "zh": "我喜欢吃中国菜，尤其喜欢吃饺子。",
    "py": "Wǒ xǐhuan chī Zhōngguó cài, yóuqí xǐhuan chī jiǎozi.",
    "vn": "Tôi thích ăn món Trung Quốc, nhất là thích ăn sủi cảo."
   }
  ],
  "hanzi": [
   {
    "c": "尤",
    "p": "yóu",
    "type": "半包围结构 · Bán bao vây",
    "st": 4,
    "ord": "尢 bao ngoài → 丶 trong",
    "rad": "尢 (uông)",
    "mean": "đặc biệt, nổi trội",
    "tip": "Chữ mang nghĩa NỔI TRỘI, KHÁC BIỆT so với thông thường, kết hợp 其(cái đó) thành 尤其 = ĐẶC BIỆT LÀ (nhấn mạnh cái nổi bật nhất).",
    "cf": "龙 (lóng – \"rồng\", không liên quan)",
    "w": "尤其 / 尤为 / 尤其是"
   },
   {
    "c": "其",
    "p": "qí",
    "type": "独体字 · Chữ đơn",
    "st": 8,
    "ord": "nét liền",
    "rad": "八 (bát, biến thể)",
    "mean": "cái đó, của nó",
    "tip": "其 là đại từ chỉ định (cái đó, của nó), kết hợp 中(giữa, trong) thành 其中 = TRONG ĐÓ, TRONG SỐ ĐÓ.",
    "cf": "期 (qī – \"kỳ hạn\", bộ 月\")",
    "w": "其中 / 其他 / 其次"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Về mặt học tập, cô ấy rất chăm chỉ, nhất là môn khẩu ngữ.",
    "answer": "在学习方面，她很努力，尤其是口语。",
    "answerPy": "Zài xuéxí fāngmiàn, tā hěn nǔlì, yóuqí shì kǒu yǔ.",
    "note": "Ôn 在……方面 (Bài 7 · điểm 1).",
    "pair": "在……方面"
   },
   {
    "promptLang": "vi",
    "prompt": "So với các môn khác, tôi đặc biệt thích môn tiếng Trung.",
    "answer": "跟别的课相比，我尤其喜欢中文课。",
    "answerPy": "Gēn biéde kè xiāngbǐ, wǒ yóuqí xǐhuan Zhōngwén kè.",
    "note": "Ôn 跟……相比 (Bài 8 · điểm 3).",
    "pair": "跟……相比"
   }
  ]
 },
 {
  "n": 39,
  "zh": "日子",
  "py": "rìzi",
  "pos": "Danh từ",
  "vn": "ngày; cuộc sống, ngày tháng",
  "hv": "nhật tử",
  "em": "📅",
  "lesson": 4,
  "explain": [
   "(1) Ngày (cụ thể, có ý nghĩa): 结婚的日子 (ngày cưới). (2) Cuộc sống, ngày tháng: 过日子 (sống), 日子越过越好 (cuộc sống ngày càng tốt)."
  ],
  "usage": "过日子 · 日子越过越好 · 好日子 · 结婚的日子.",
  "collo": [
   "过日子",
   "好日子",
   "结婚的日子",
   "日子越过越好"
  ],
  "colloFull": [
   {
    "zh": "过日子",
    "py": "Guò rìzi",
    "vn": "sống, sinh sống"
   },
   {
    "zh": "好日子",
    "py": "Hǎo rìzi",
    "vn": "cuộc sống tốt; ngày đẹp"
   },
   {
    "zh": "结婚的日子",
    "py": "Jiéhūn de rìzi",
    "vn": "ngày cưới"
   },
   {
    "zh": "日子越过越好",
    "py": "Rìzi yuè guò yuè hǎo",
    "vn": "cuộc sống ngày càng tốt"
   }
  ],
  "patterns": [
   {
    "s": "日子 + 过得 + Adj",
    "m": "Cuộc sống thế nào: 日子过得很幸福"
   },
   {
    "s": "越 + V + 越 + Adj",
    "m": "日子越过越好 (càng sống càng tốt)"
   }
  ],
  "ex_zh": "尤其是结婚后，更要共同经营好家庭，日子才能越过越好。",
  "ex_py": "Yóuqí shì jiéhūn hòu, gèng yào gòngtóng jīngyíng hǎo jiātíng, rìzi cái néng yuè guò yuè hǎo.",
  "ex_vn": "Nhất là sau khi kết hôn, càng phải cùng nhau vun vén gia đình, cuộc sống mới ngày càng tốt đẹp.",
  "exList": [
   {
    "zh": "尤其是结婚后，更要共同经营好家庭，日子才能越过越好。",
    "py": "Yóuqí shì jiéhūn hòu, gèng yào gòngtóng jīngyíng hǎo jiātíng, rìzi cái néng yuè guò yuè hǎo.",
    "vn": "Nhất là sau khi kết hôn, càng phải cùng nhau vun vén gia đình, cuộc sống mới ngày càng tốt đẹp."
   },
   {
    "zh": "退休以后，爷爷奶奶每天种种花、散散步，日子过得很舒服。",
    "py": "Tuìxiū yǐhòu, yéye-nǎinai měi tiān zhǒng zhǒng huā, sàn sànbù, rìzi guò de hěn shūfu.",
    "vn": "Sau khi nghỉ hưu, ông bà mỗi ngày trồng hoa, đi dạo, sống rất thoải mái."
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
    "prompt": "Những ngày sống ở nước ngoài, tôi thỉnh thoảng lại nhớ nhà.",
    "answer": "在国外的日子里，我偶尔会想家。",
    "answerPy": "Zài guó wài de rìzi lǐ, wǒ ǒu'ěr huì xiǎng jiā.",
    "note": "Ôn 偶尔 (Bài 6 · điểm 3).",
    "pair": "在……的日子里"
   },
   {
    "promptLang": "vi",
    "prompt": "Nếu hai người có thể thấu hiểu lẫn nhau, cuộc sống sẽ ngày càng tốt.",
    "answer": "要是两个人能相互理解，日子就会越过越好。",
    "answerPy": "Yàoshi liǎng gè rén néng xiānghù lǐjiě, rìzi jiù huì yuè guò yuè hǎo.",
    "note": "Ôn 要是……就…… (Bài 1 · điểm 2).",
    "pair": "要是……就……"
   }
  ]
 },
 {
  "n": 40,
  "zh": "从来",
  "py": "cónglái",
  "pos": "Phó từ",
  "vn": "từ trước đến nay (luôn / chưa từng)",
  "hv": "tòng lai",
  "em": "🔒",
  "lesson": 4,
  "explain": [
   "Từ quá khứ đến hiện tại luôn như vậy. Hay dùng trong câu phủ định: 从来不 + V (thói quen, nguyên tắc), 从来没(有) + V + 过 (chưa từng). Câu khẳng định thường có 都: 从来都是……"
  ],
  "usage": "从来不 + V · 从来没(有) + V + 过 · 从来都 + 是…….",
  "collo": [
   "从来不",
   "从来没……过",
   "从来都是",
   "从来没见过"
  ],
  "colloFull": [
   {
    "zh": "从来不",
    "py": "Cónglái bù",
    "vn": "trước giờ không bao giờ"
   },
   {
    "zh": "从来没……过",
    "py": "Cónglái méi…… guò",
    "vn": "chưa từng"
   },
   {
    "zh": "从来都是",
    "py": "Cónglái dōu shì",
    "vn": "từ trước đến nay luôn là"
   },
   {
    "zh": "从来没见过",
    "py": "Cónglái méi jiàn guò",
    "vn": "chưa từng thấy"
   }
  ],
  "patterns": [
   {
    "s": "从来 + 不 + V",
    "m": "Thói quen / nguyên tắc: 从来不喝酒"
   },
   {
    "s": "从来 + 没(有) + V + 过",
    "m": "Kinh nghiệm: chưa từng"
   }
  ],
  "ex_zh": "爱，从来都是相互尊重、理解与支持，不是吗？",
  "ex_py": "Ài, cónglái dōu shì xiānghù zūnzhòng, lǐjiě yǔ zhīchí, bú shì ma?",
  "ex_vn": "Tình yêu, từ trước đến nay luôn là tôn trọng, thấu hiểu và ủng hộ lẫn nhau, không phải sao?",
  "exList": [
   {
    "zh": "爱，从来都是相互尊重、理解与支持，不是吗？",
    "py": "Ài, cónglái dōu shì xiānghù zūnzhòng, lǐjiě yǔ zhīchí, bú shì ma?",
    "vn": "Tình yêu, từ trước đến nay luôn là tôn trọng, thấu hiểu và ủng hộ lẫn nhau, không phải sao?"
   },
   {
    "zh": "他从来不迟到，今天怎么还没来？",
    "py": "Tā cónglái bù chídào, jīntiān zěnme hái méi lái?",
    "vn": "Anh ấy trước giờ chưa bao giờ đến muộn, sao hôm nay vẫn chưa đến?"
   }
  ],
  "hanzi": [
   {
    "c": "从",
    "p": "cóng",
    "type": "左右结构 · Trái-phải (giản thể)",
    "st": 4,
    "ord": "人 trái → 人 phải",
    "rad": "人 (nhân – người)",
    "mean": "từ, theo",
    "tip": "Hai chữ 人 nối tiếp nhau → người này ĐI THEO người kia, mở rộng thành TỪ (một mốc thời gian/nơi chốn) đến nay.",
    "cf": "丛 (cóng – \"bụi cây\", hình gần giống nhưng bộ khác\")",
    "w": "从来 / 从……到…… / 自从"
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
    "prompt": "Bất kể bận đến đâu, anh ấy chưa bao giờ quên sinh nhật vợ.",
    "answer": "不管多忙，他从来没忘过妻子的生日。",
    "answerPy": "Bùguǎn duō máng, tā cónglái méi wàng guò qīzi de shēngrì.",
    "note": "Ôn 不管 (Bài 8 · điểm 1).",
    "pair": "从来没 + V + 过"
   },
   {
    "promptLang": "vi",
    "prompt": "Anh ấy trước nay không ăn cay, việc này có gì mà lạ.",
    "answer": "他从来不吃辣的，这有什么好奇怪的？",
    "answerPy": "Tā cónglái bù chī là de, zhè yǒu shénme hǎo qíguài de?",
    "note": "Ôn (没)有什么(好)×的 (Bài 6 · điểm 2).",
    "pair": "从来不 + V"
   }
  ]
 }
];
var wuData = [
 {
  "img": "/images/hsk4v3/bai-9/wu-A.webp",
  "label": "浪漫",
  "py": "làngmàn",
  "letter": "A"
 },
 {
  "img": "/images/hsk4v3/bai-9/wu-B.webp",
  "label": "人生",
  "py": "rénshēng",
  "letter": "B"
 },
 {
  "img": "/images/hsk4v3/bai-9/wu-C.webp",
  "label": "巧克力",
  "py": "qiǎokèlì",
  "letter": "C"
 },
 {
  "img": "/images/hsk4v3/bai-9/wu-D.webp",
  "label": "支持",
  "py": "zhīchí",
  "letter": "D"
 },
 {
  "img": "/images/hsk4v3/bai-9/wu-E.webp",
  "label": "耐心",
  "py": "nàixīn",
  "letter": "E"
 },
 {
  "img": "/images/hsk4v3/bai-9/wu-F.webp",
  "label": "祝",
  "py": "zhù",
  "letter": "F"
 }
];
var dialogData = [
 {
  "scene": "在餐馆里 · Trong nhà hàng (Lý Văn tổ chức sinh nhật cho Bạch Gia Nguyệt)",
  "anh": "/images/hsk4v3/bai-9/kv-1.webp",
  "nguoi": [
   {
    "ten": "李文",
    "anh": "/images/hsk4v3/nv/liwen.webp"
   },
   {
    "ten": "白家月",
    "anh": "/images/hsk4v3/nv/bai.webp"
   }
  ],
  "preQuiz": [
   {
    "q": "白家月过生日时，李文送了什么生日礼物？",
    "opts": [
     "水果",
     "生日蛋糕",
     "花和巧克力",
     "什么都没送"
    ],
    "ans": 2
   },
   {
    "q": "白家月认为李文是个什么样的人？",
    "opts": [
     "非常负责",
     "没有耐心",
     "喜欢运动",
     "特别幽默"
    ],
    "ans": 3
   }
  ],
  "lines": [
   {
    "sp": 0,
    "zh": "家月，给你的，祝你生日快乐！",
    "py": "Jiāyuè, gěi nǐ de, zhù nǐ shēngrì kuàilè!",
    "vn": "Gia Nguyệt, tặng em này, chúc em sinh nhật vui vẻ!"
   },
   {
    "sp": 1,
    "zh": "啊，好漂亮的花！还有巧克力！你怎么知道我喜欢这个巧克力？",
    "py": "A, hǎo piàoliang de huā! Hái yǒu qiǎokèlì! Nǐ zěnme zhīdao wǒ xǐhuan zhège qiǎokèlì?",
    "vn": "A, hoa đẹp quá! Còn có cả sô-cô-la nữa! Sao anh biết em thích loại sô-cô-la này?"
   },
   {
    "sp": 0,
    "zh": "上次咱们去超市，看你拿起来看了看又放下了，我就记住了。",
    "py": "Shàng cì zánmen qù chāoshì, kàn nǐ ná qǐlái kàn le kàn yòu fàng xià le, wǒ jiù jì zhù le.",
    "vn": "Lần trước chúng mình đi siêu thị, anh thấy em cầm lên xem xem rồi lại đặt xuống, thế là anh nhớ luôn."
   },
   {
    "sp": 1,
    "zh": "好感动！我不说你也懂我在想什么，你真是细心又浪漫。其实刚认识不久，你的幽默与耐心就很吸引我，不过我当时也只把你当普通朋友。如果你没有一直找我聊天儿，我们可能就错过了。",
    "py": "Hǎo gǎndòng! Wǒ bù shuō nǐ yě dǒng wǒ zài xiǎng shénme, nǐ zhēn shì xì xīn yòu làngmàn. Qíshí gāng rènshi bùjiǔ, nǐ de yōumò yǔ nàixīn jiù hěn xīyǐn wǒ, búguò wǒ dāngshí yě zhǐ bǎ nǐ dāng pǔ tōng péngyou. Rúguǒ nǐ méiyǒu yìzhí zhǎo wǒ liáotiānr, wǒmen kěnéng jiù cuòguò le.",
    "vn": "Cảm động quá! Em không nói anh cũng hiểu em đang nghĩ gì, anh đúng là vừa chu đáo vừa lãng mạn. Thật ra mới quen không lâu, sự hài hước và kiên nhẫn của anh đã rất thu hút em, có điều lúc đó em cũng chỉ coi anh là bạn bình thường. Nếu anh không luôn tìm em trò chuyện, có lẽ chúng mình đã lỡ nhau rồi."
   },
   {
    "sp": 0,
    "zh": "我终于遇见了对的人，哪能错过呢？",
    "py": "Wǒ zhōngyú yùjiàn le duì de rén, nǎ néng cuòguò ne?",
    "vn": "Cuối cùng anh đã gặp được đúng người, sao có thể bỏ lỡ được chứ?"
   },
   {
    "sp": 1,
    "zh": "遇见你，我也觉得很幸运。",
    "py": "Yùjiàn nǐ, wǒ yě juéde hěn xìngyùn.",
    "vn": "Gặp được anh, em cũng thấy mình rất may mắn."
   }
  ]
 },
 {
  "scene": "在家里 · Ở nhà (Vương Nhất Tuyết và Lưu Minh nói chuyện về cuộc hôn nhân của Vương Nhất Phi và Dương Đồng Lạc)",
  "anh": "/images/hsk4v3/bai-9/kv-2.webp",
  "nguoi": [
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
    "q": "王一飞和杨同乐结婚后怎么样？",
    "opts": [
     "比较高兴",
     "不太适应",
     "非常幸福",
     "不太开心"
    ],
    "ans": 2
   },
   {
    "q": "刘明对王一飞和杨同乐有什么希望？",
    "opts": [
     "互相学习",
     "相互理解与支持",
     "有更多共同爱好",
     "把爱情放在第一位"
    ],
    "ans": 1
   }
  ],
  "lines": [
   {
    "sp": 0,
    "zh": "看到一飞和同乐结婚后这么幸福，我这个介绍人也特别开心。",
    "py": "Kàn dào Yīfēi hé Tónglè jiéhūn hòu zhème xìngfú, wǒ zhège jièshào rén yě tèbié kāixīn.",
    "vn": "Thấy Nhất Phi và Đồng Lạc cưới nhau xong hạnh phúc như vậy, người làm mai như em cũng đặc biệt vui."
   },
   {
    "sp": 1,
    "zh": "是啊，同乐是你的好朋友，一飞是你妹妹，你都很了解。",
    "py": "Shì a, Tónglè shì nǐ de hǎo péngyou, Yīfēi shì nǐ mèimei, nǐ dōu hěn liǎojiě.",
    "vn": "Đúng thế, Đồng Lạc là bạn tốt của em, Nhất Phi là em gái em, cả hai em đều rất hiểu."
   },
   {
    "sp": 0,
    "zh": "嗯，他们尽管性格不同，但是有很多共同爱好。特别是同乐人好，性格也好，很有责任感。",
    "py": "Ǹg, tāmen jǐnguǎn xìnggé bùtóng, dànshì yǒu hěn duō gòngtóng àihào. Tèbié shì Tónglè rén hǎo, xìnggé yě hǎo, hěn yǒu zérèn gǎn.",
    "vn": "Vâng, họ tuy tính cách khác nhau nhưng có rất nhiều sở thích chung. Đặc biệt là Đồng Lạc người tốt, tính cách cũng tốt, rất có tinh thần trách nhiệm."
   },
   {
    "sp": 1,
    "zh": "是的，一飞也算在对的时间遇到了对的人。后边的路还很长，希望他们能一直相互理解、相互支持。",
    "py": "Shì de, Yīfēi yě suàn zài duì de shíjiān yùdào le duì de rén. Hòubian de lù hái hěn cháng, xīwàng tāmen néng yìzhí xiānghù lǐjiě, xiānghù zhīchí.",
    "vn": "Đúng vậy, Nhất Phi cũng coi như gặp đúng người vào đúng thời điểm. Con đường phía trước còn rất dài, mong họ có thể luôn thấu hiểu nhau, ủng hộ nhau."
   },
   {
    "sp": 0,
    "zh": "我了解同乐，更了解一飞，相信他们会一直走下去的。",
    "py": "Wǒ liǎojiě Tónglè, gèng liǎojiě Yīfēi, xiāngxìn tāmen huì yìzhí zǒu xiàqù de.",
    "vn": "Em hiểu Đồng Lạc, càng hiểu Nhất Phi hơn, em tin họ sẽ luôn cùng nhau đi tiếp."
   },
   {
    "sp": 1,
    "zh": "祝他们越来越幸福。",
    "py": "Zhù tāmen yuèláiyuè xìngfú.",
    "vn": "Chúc họ ngày càng hạnh phúc."
   }
  ]
 },
 {
  "scene": "杨同乐的双份幸运 · May mắn nhân đôi của Dương Đồng Lạc",
  "anh": "/images/hsk4v3/bai-9/kv-3.webp",
  "nguoi": [
   {
    "ten": "小语",
    "anh": "/images/hsk4v3/nv/xiaoyu.webp"
   }
  ],
  "preQuiz": [
   {
    "q": "杨同乐是什么时候认识王一雪的？",
    "opts": [
     "打篮球时",
     "看电影时",
     "来公司后",
     "来公司前"
    ],
    "ans": 2
   },
   {
    "q": "王一雪和杨同乐是怎么熟悉起来的？",
    "opts": [
     "一起开会",
     "一起出差",
     "一起做项目",
     "一起吃午饭"
    ],
    "ans": 1
   }
  ],
  "lines": [
   {
    "sp": 0,
    "zh": "王一雪比杨同乐更早进入公司。",
    "py": "Wáng Yīxuě bǐ Yáng Tónglè gèng zǎo jìn rù gōngsī.",
    "vn": "Vương Nhất Tuyết vào công ty sớm hơn Dương Đồng Lạc."
   },
   {
    "sp": 0,
    "zh": "杨同乐刚来不久，王一雪对他印象就非常好：人很实在，性格阳光，工作负责，表现积极……",
    "py": "Yáng Tónglè gāng lái bùjiǔ, Wáng Yīxuě duì tā yìnxiàng jiù fēicháng hǎo: rén hěn shízài, xìnggé yángguāng, gōngzuò fùzé, biǎoxiàn jījí……",
    "vn": "Dương Đồng Lạc mới đến không lâu, Vương Nhất Tuyết đã có ấn tượng rất tốt về anh ấy: con người thật thà, tính cách vui tươi, làm việc có trách nhiệm, biểu hiện tích cực…"
   },
   {
    "sp": 0,
    "zh": "后来他们一起出了次差，此次出差，让两人熟悉了起来，从此成了好朋友。",
    "py": "Hòulái tāmen yìqǐ chū le cì chà, cǐ cì chūchāi, ràng liǎng rén shúxī le qǐlái, cóngcǐ chéng le hǎo péngyou.",
    "vn": "Sau đó họ cùng đi công tác một chuyến, chuyến công tác này khiến hai người trở nên thân quen, từ đó thành bạn tốt."
   },
   {
    "sp": 0,
    "zh": "一次聊天儿时，王一雪了解到杨同乐还没女朋友，正好自己的妹妹王一飞也没有男朋友，于是王一雪就把王一飞介绍给了他。",
    "py": "Yí cì liáotiānr shí, Wáng Yīxuě liǎojiě dào Yáng Tónglè hái méi nǚpéngyǒu, zhènghǎo zìjǐ de mèimei Wáng Yīfēi yě méiyǒu nánpéngyǒu, yúshì Wáng Yīxuě jiù bǎ Wáng Yīfēi jièshào gěi le tā.",
    "vn": "Một lần trò chuyện, Vương Nhất Tuyết biết được Dương Đồng Lạc chưa có bạn gái, vừa hay em gái mình là Vương Nhất Phi cũng chưa có bạn trai, thế là Vương Nhất Tuyết giới thiệu Vương Nhất Phi cho anh ấy."
   },
   {
    "sp": 0,
    "zh": "杨同乐和王一飞认识后，很聊得来，两人之间慢慢产生了爱情，最后成了夫妻。",
    "py": "Yáng Tónglè hé Wáng Yīfēi rènshi hòu, hěn liáo de lái, liǎng rén zhī jiān màn màn chǎnshēng le àiqíng, zuìhòu chéng le fūqī.",
    "vn": "Dương Đồng Lạc và Vương Nhất Phi quen nhau rồi rất hợp chuyện, giữa hai người dần dần nảy sinh tình yêu, cuối cùng thành vợ chồng."
   },
   {
    "sp": 0,
    "zh": "杨同乐说自己很幸运，和王一雪这份同事间的友情，给他带来了美好的爱情。",
    "py": "Yáng Tónglè shuō zìjǐ hěn xìngyùn, hé Wáng Yīxuě zhè fèn tóngshì jiān de yǒuqíng, gěi tā dài lái le měihǎo de àiqíng.",
    "vn": "Dương Đồng Lạc nói mình rất may mắn: tình bạn đồng nghiệp với Vương Nhất Tuyết đã mang đến cho anh một tình yêu đẹp."
   }
  ],
  "doan": true
 },
 {
  "scene": "爱更需要经营 · Tình yêu càng cần được vun đắp",
  "anh": "/images/hsk4v3/bai-9/kv-4.webp",
  "nguoi": [
   {
    "ten": "小语",
    "anh": "/images/hsk4v3/nv/xiaoyu.webp"
   }
  ],
  "preQuiz": [
   {
    "q": "李文是在哪儿遇见白家月的？",
    "opts": [
     "饭馆里",
     "超市里",
     "校园里",
     "书店外"
    ],
    "ans": 2
   },
   {
    "q": "“遇见你，刚刚好”是什么意思？",
    "opts": [
     "刚刚才认识你",
     "遇到你时天气刚刚好",
     "在合适的地点遇见你",
     "在合适的时间遇到合适的人"
    ],
    "ans": 3
   }
  ],
  "lines": [
   {
    "sp": 0,
    "zh": "李文在校园里遇见白家月，从此，他们的人生变得更加精彩；王一飞和杨同乐通过王一雪介绍认识后，感情越来越深，最后两人幸福地走到了一起。",
    "py": "Lǐ Wén zài xiàoyuán lǐ yùjiàn Bái Jiāyuè, cóngcǐ, tāmen de rénshēng biàn de gèng jiā jīngcǎi; Wáng Yīfēi hé Yáng Tónglè tōngguò Wáng Yīxuě jièshào rènshi hòu, gǎnqíng yuèláiyuè shēn, zuìhòu liǎng rén xìngfú de zǒu dào le yìqǐ.",
    "vn": "Lý Văn gặp Bạch Gia Nguyệt trong khuôn viên trường, từ đó cuộc đời họ trở nên rực rỡ hơn; Vương Nhất Phi và Dương Đồng Lạc quen nhau qua sự giới thiệu của Vương Nhất Tuyết, tình cảm ngày càng sâu đậm, cuối cùng hai người hạnh phúc về chung một nhà."
   },
   {
    "sp": 0,
    "zh": "在我看来，遇见爱情的方式并不重要，重要的是在合适的时间遇到了合适的人。",
    "py": "Zài wǒ kànlái, yùjiàn àiqíng de fāngshì bìng bú zhòngyào, zhòngyào de shì zài héshì de shíjiān yùdào le héshì de rén.",
    "vn": "Theo tôi, gặp được tình yêu bằng cách nào không quan trọng, quan trọng là gặp đúng người vào đúng thời điểm."
   },
   {
    "sp": 0,
    "zh": "遇见你，刚刚好。",
    "py": "Yùjiàn nǐ, gānggāng hǎo.",
    "vn": "Gặp được bạn, thật vừa đúng lúc."
   },
   {
    "sp": 0,
    "zh": "不过美好的遇见只是爱的开始，爱更需要经营。",
    "py": "Búguò měihǎo de yùjiàn zhǐshì ài de kāishǐ, ài gèng xūyào jīngyíng.",
    "vn": "Có điều cuộc gặp gỡ đẹp đẽ chỉ là khởi đầu của tình yêu, tình yêu càng cần được vun đắp."
   },
   {
    "sp": 0,
    "zh": "在一段感情中，两个人要多关注对方的感受，尤其是结婚后，更要共同经营好家庭，日子才能越过越好。",
    "py": "Zài yí duàn gǎnqíng zhōng, liǎng gè rén yào duō guānzhù duìfāng de gǎnshòu, yóuqí shì jiéhūn hòu, gèng yào gòngtóng jīngyíng hǎo jiātíng, rìzi cái néng yuè guò yuè hǎo.",
    "vn": "Trong một mối quan hệ tình cảm, hai người phải quan tâm nhiều hơn đến cảm nhận của đối phương, nhất là sau khi kết hôn, càng phải cùng nhau vun vén gia đình, cuộc sống mới ngày càng tốt đẹp."
   },
   {
    "sp": 0,
    "zh": "爱，从来都是相互尊重、理解与支持，不是吗？",
    "py": "Ài, cónglái dōu shì xiānghù zūnzhòng, lǐjiě yǔ zhīchí, bú shì ma?",
    "vn": "Tình yêu, từ trước đến nay luôn là tôn trọng, thấu hiểu và ủng hộ lẫn nhau, không phải sao?"
   }
  ],
  "doan": true
 }
];
var listenData = [
 {
  "audio": "小林，下周六是你的生日吧？你打算怎么过？我男朋友说要给我过生日，不过他没告诉我去哪儿。哇，好浪漫啊！他上次送了你什么礼物？一大束花和一盒巧克力。他真细心，我不说他也知道我喜欢什么。是啊，遇见他，我觉得自己很幸运。",
  "questions": [
   {
    "q": "谁要给小林过生日？",
    "opts": [
     "她的同学",
     "她的男朋友",
     "她的妈妈"
    ],
    "ans": 1
   },
   {
    "q": "小林的男朋友上次送了她什么？",
    "opts": [
     "花和巧克力",
     "生日蛋糕",
     "一本书"
    ],
    "ans": 0
   }
  ]
 },
 {
  "audio": "听说你姐姐下个月结婚？对，日子已经定了，在五月二十号。她和她男朋友是怎么认识的？他们是同事，一起出过一次差，从此就熟悉了起来。他们性格一样吗？不太一样，姐姐很安静，她男朋友很幽默。尽管性格不同，但是他们有很多共同爱好，都喜欢旅游。",
  "questions": [
   {
    "q": "姐姐和她男朋友是怎么熟悉起来的？",
    "opts": [
     "一起上大学",
     "一起出差",
     "一起旅游"
    ],
    "ans": 1
   },
   {
    "q": "关于姐姐和她男朋友，可以知道什么？",
    "opts": [
     "性格一样",
     "有共同爱好",
     "都很幽默"
    ],
    "ans": 1
   }
  ]
 },
 {
  "audio": "你和王明是怎么成为好朋友的？我们是大学同学。刚认识的时候，我对他印象不太好，觉得他不爱说话。后来呢？后来有一次我生病了，他每天给我送饭，还帮我复习。尽管毕业后我们去了不同的城市，但是我们的友情一直很深。真好！朋友之间就应该相互支持。",
  "questions": [
   {
    "q": "说话人刚认识王明的时候，对他的印象怎么样？",
    "opts": [
     "非常好",
     "不太好",
     "觉得他很幽默"
    ],
    "ans": 1
   },
   {
    "q": "毕业后，他们怎么样？",
    "opts": [
     "在一个城市工作",
     "很少联系了",
     "友情一直很深"
    ],
    "ans": 2
   }
  ]
 }
];
var matchData = [
 {
  "left": "祝你",
  "right": "生日快乐"
 },
 {
  "left": "相互",
  "right": "理解、相互支持"
 },
 {
  "left": "产生",
  "right": "爱情"
 },
 {
  "left": "共同",
  "right": "经营好家庭"
 },
 {
  "left": "对他印象",
  "right": "非常好"
 },
 {
  "left": "关注",
  "right": "对方的感受"
 },
 {
  "left": "尽管……",
  "right": "但是……"
 },
 {
  "left": "从来没",
  "right": "见过"
 },
 {
  "left": "一段",
  "right": "感情"
 },
 {
  "left": "错过",
  "right": "机会"
 }
];
var fillData = [
 {
  "pre": "我不说你",
  "blank": "也",
  "post": "懂我在想什么。",
  "hint": "(cũng)",
  "ans": "也",
  "exp": "不……也……: không … cũng …"
 },
 {
  "pre": "其实刚认识不久，你的幽默与耐心就很",
  "blank": "吸引",
  "post": "我。",
  "hint": "(thu hút)",
  "ans": "吸引",
  "exp": "A + 吸引 + B."
 },
 {
  "pre": "不过我",
  "blank": "当时",
  "post": "也只把你当普通朋友。",
  "hint": "(lúc đó)",
  "ans": "当时",
  "exp": "当时 = lúc đó (quá khứ)."
 },
 {
  "pre": "他们",
  "blank": "尽管",
  "post": "性格不同，但是有很多共同爱好。",
  "hint": "(mặc dù)",
  "ans": "尽管",
  "exp": "尽管……，但是……"
 },
 {
  "pre": "希望他们能一直",
  "blank": "相互",
  "post": "理解、相互支持。",
  "hint": "(lẫn nhau)",
  "ans": "相互",
  "exp": "相互 + V hai âm tiết."
 },
 {
  "pre": "杨同乐刚来不久，王一雪对他",
  "blank": "印象",
  "post": "就非常好。",
  "hint": "(ấn tượng)",
  "ans": "印象",
  "exp": "对……印象很好."
 },
 {
  "pre": "",
  "blank": "此",
  "post": "次出差，让两人熟悉了起来。",
  "hint": "(này — văn viết)",
  "ans": "此",
  "exp": "此次 = 这次."
 },
 {
  "pre": "两人之间慢慢",
  "blank": "产生",
  "post": "了爱情，最后成了夫妻。",
  "hint": "(nảy sinh)",
  "ans": "产生",
  "exp": "产生 + 爱情 / 兴趣 / 问题."
 },
 {
  "pre": "在一段感情中，两个人要多关注对方的",
  "blank": "感受",
  "post": "。",
  "hint": "(cảm nhận)",
  "ans": "感受",
  "exp": "对方的感受 = cảm nhận của người kia."
 },
 {
  "pre": "爱，",
  "blank": "从来",
  "post": "都是相互尊重、理解与支持。",
  "hint": "(từ trước đến nay)",
  "ans": "从来",
  "exp": "从来都是…… (khẳng định)."
 }
];
var sortData = [
 {
  "words": [
   "我",
   "不说",
   "你",
   "也",
   "懂",
   "我在想什么",
   "。"
  ],
  "ans": "我不说你也懂我在想什么。",
  "audio": "我不说你也懂我在想什么。"
 },
 {
  "words": [
   "他们",
   "尽管",
   "性格不同",
   "，",
   "但是",
   "有很多",
   "共同爱好",
   "。"
  ],
  "ans": "他们尽管性格不同，但是有很多共同爱好。",
  "audio": "他们尽管性格不同，但是有很多共同爱好。"
 },
 {
  "words": [
   "此次",
   "出差",
   "，",
   "让",
   "两人",
   "熟悉了起来",
   "。"
  ],
  "ans": "此次出差，让两人熟悉了起来。",
  "audio": "此次出差，让两人熟悉了起来。"
 },
 {
  "words": [
   "爱",
   "从来",
   "都是",
   "相互尊重",
   "、",
   "理解与支持",
   "。"
  ],
  "ans": "爱从来都是相互尊重、理解与支持。",
  "audio": "爱从来都是相互尊重、理解与支持。"
 },
 {
  "words": [
   "两人",
   "之间",
   "慢慢",
   "产生了",
   "爱情",
   "。"
  ],
  "ans": "两人之间慢慢产生了爱情。",
  "audio": "两人之间慢慢产生了爱情。"
 },
 {
  "words": [
   "他们的",
   "人生",
   "变得",
   "更加",
   "精彩",
   "了",
   "。"
  ],
  "ans": "他们的人生变得更加精彩了。",
  "audio": "他们的人生变得更加精彩了。"
 }
];
var mcData = [
 {
  "q": "我不说你＿＿懂我在想什么。",
  "opts": [
   "也",
   "才",
   "再",
   "又"
  ],
  "ans": 0,
  "exp": "Câu phức rút gọn 不……也……: không … cũng …"
 },
 {
  "q": "＿＿他们性格不同，但是有很多共同爱好。",
  "opts": [
   "尽管",
   "不管",
   "由于",
   "既然"
  ],
  "ans": 0,
  "exp": "Sự thật cụ thể + kết quả trái chiều → 尽管……，但是……"
 },
 {
  "q": "＿＿天气怎么样，他每天都去跑步。",
  "opts": [
   "不管",
   "尽管",
   "虽然",
   "由于"
  ],
  "ans": 0,
  "exp": "Điều kiện bất kỳ (怎么样) + 都 → 不管 (Bài 8), không dùng 尽管."
 },
 {
  "q": "＿＿次活动的地点是校图书馆。",
  "opts": [
   "此",
   "这儿",
   "那儿",
   "哪"
  ],
  "ans": 0,
  "exp": "此次 = 这次 (văn viết, thông báo)."
 },
 {
  "q": "我＿＿没见过这个颜色的花。",
  "opts": [
   "从来",
   "从此",
   "当时",
   "已经"
  ],
  "ans": 0,
  "exp": "从来没 + V + 过 = chưa từng."
 },
 {
  "q": "他们一起出了次差，＿＿成了好朋友。",
  "opts": [
   "从此",
   "从来",
   "尤其",
   "当时"
  ],
  "ans": 0,
  "exp": "从此 = từ đó về sau (sau một sự việc làm mốc)."
 },
 {
  "q": "杨同乐刚来不久，王一雪对他＿＿就非常好。",
  "opts": [
   "印象",
   "感受",
   "性格",
   "责任"
  ],
  "ans": 0,
  "exp": "对 + ai + 印象很好."
 },
 {
  "q": "这里冬天很冷，＿＿是晚上。",
  "opts": [
   "尤其",
   "从来",
   "相互",
   "共同"
  ],
  "ans": 0,
  "exp": "……，尤其是 + N: nhấn mạnh phần nổi bật."
 },
 {
  "q": "在一段感情中，两个人要多关注＿＿的感受。",
  "opts": [
   "对方",
   "对面",
   "对此",
   "方面"
  ],
  "ans": 0,
  "exp": "对方 = người kia; 对面 = phía đối diện."
 },
 {
  "q": "看到他们结婚后这么＿＿，我这个介绍人也特别开心。",
  "opts": [
   "幸福",
   "幸运",
   "浪漫",
   "精彩"
  ],
  "ans": 0,
  "exp": "Cuộc sống hôn nhân → 幸福 (hạnh phúc); 幸运 = may mắn."
 }
];
var speakingData = {
 "intro": "Nhấn nút loa nghe câu hỏi (câu hỏi phần Khởi động, câu hỏi đọc hiểu của 4 bài khoá, kể lại bài khoá và thảo luận nhóm), rồi tự ghi âm câu trả lời — cố dùng từ mới và 4 điểm ngữ pháp của bài.",
 "questions": [
  {
   "q_zh": "生日这天你一般都怎么过？",
   "q_vn": "Ngày sinh nhật bạn thường đón thế nào?",
   "hint": "生日那天，我一般……。尽管……，但是……。最难忘的一次是……",
   "sample": "生日那天，我一般和家人一起吃饭，晚上再跟几个好朋友去唱歌。尽管我从来不要求大家送礼物，但是朋友们每年都会给我准备一个小惊喜。最难忘的一次是去年，我男朋友给我买了花和巧克力，我不说他也知道我喜欢什么，我特别感动。",
   "sample_vn": "Ngày sinh nhật, tôi thường ăn cơm cùng gia đình, buổi tối đi hát với mấy người bạn thân. Mặc dù tôi chưa bao giờ đòi mọi người tặng quà, nhưng năm nào bạn bè cũng chuẩn bị cho tôi một bất ngờ nhỏ. Lần khó quên nhất là năm ngoái, bạn trai mua cho tôi hoa và sô-cô-la, tôi không nói anh ấy cũng biết tôi thích gì, tôi rất cảm động.",
   "note": "Câu hỏi phần Khởi động của sách; dùng 尽管……但是…… và 不……也……"
  },
  {
   "q_zh": "你和好朋友是怎么认识的？你们经常见面吗？",
   "q_vn": "Bạn và bạn thân quen nhau thế nào? Các bạn có hay gặp nhau không?",
   "hint": "我和……是在……认识的。刚认识不久，……，从此……。现在……",
   "sample": "我和我的好朋友是在高中认识的。刚认识不久，我们发现有很多共同爱好，都喜欢看书和打篮球，从此就成了好朋友。现在我们在不同的城市上大学，不能经常见面，不过我们每个星期都在网上聊天儿，放假的时候一定会见面。",
   "sample_vn": "Tôi và bạn thân quen nhau hồi cấp ba. Mới quen không lâu, chúng tôi phát hiện có nhiều sở thích chung, đều thích đọc sách và chơi bóng rổ, từ đó thành bạn tốt. Bây giờ chúng tôi học đại học ở hai thành phố khác nhau, không thể gặp thường xuyên, có điều tuần nào cũng trò chuyện trên mạng, nghỉ lễ nhất định gặp nhau.",
   "note": "Câu hỏi phần Khởi động của sách; dùng 从此, 共同, 不过 (Bài 2)."
  },
  {
   "q_zh": "李文是怎么知道白家月喜欢那个巧克力的？白家月是怎么被李文吸引住的？",
   "q_vn": "Lý Văn làm sao biết Bạch Gia Nguyệt thích loại sô-cô-la đó? Bạch Gia Nguyệt bị Lý Văn thu hút như thế nào?",
   "hint": "上次他们去超市，……，他就记住了。刚认识不久，李文的……就很吸引她……",
   "sample": "上次他们去超市，李文看到白家月把那个巧克力拿起来看了看又放下了，他就记住了。刚认识不久，李文的幽默与耐心就很吸引白家月，不过她当时只把李文当普通朋友。因为李文一直找她聊天儿，所以他们没有错过对方。",
   "sample_vn": "Lần trước họ đi siêu thị, Lý Văn thấy Bạch Gia Nguyệt cầm sô-cô-la đó lên xem rồi lại đặt xuống, anh liền nhớ. Mới quen không lâu, sự hài hước và kiên nhẫn của Lý Văn đã thu hút cô, có điều lúc đó cô chỉ coi anh là bạn bình thường. Vì Lý Văn luôn tìm cô trò chuyện nên họ đã không bỏ lỡ nhau.",
   "note": "Câu hỏi bài khoá 1."
  },
  {
   "q_zh": "请根据提示复述课文一。",
   "q_vn": "Dựa vào gợi ý, kể lại bài khoá 1.",
   "hint": "白家月……时，李文给她买了……。李文告诉她，上次……，他就记住了。白家月特别……，觉得自己不说李文也……。白家月告诉李文，……",
   "sample": "白家月过生日时，李文给她买了花和巧克力。李文告诉她，上次他们去超市时，看到白家月拿起了这个巧克力看了看又放下了，他就记住了。白家月特别感动，觉得自己不说李文也懂她在想什么，他真是个细心又浪漫的人。白家月告诉李文，其实刚认识不久，李文的幽默与耐心就很吸引她，不过她当时也只把李文当普通朋友。如果李文没有一直找她聊天儿，他们可能就错过了。李文认为自己终于遇见了对的人，哪能错过呢？遇见李文，白家月也觉得很幸运。",
   "sample_vn": "Sinh nhật Bạch Gia Nguyệt, Lý Văn mua cho cô hoa và sô-cô-la… Gặp được Lý Văn, Bạch Gia Nguyệt cũng thấy mình rất may mắn.",
   "note": "Bài tập 复述 của sách (trang 97)."
  },
  {
   "q_zh": "杨同乐和王一飞为什么能成为夫妻？王一雪为什么相信他们“会一直走下去的”？",
   "q_vn": "Vì sao Dương Đồng Lạc và Vương Nhất Phi có thể thành vợ chồng? Vì sao Vương Nhất Tuyết tin họ “sẽ luôn cùng nhau đi tiếp”?",
   "hint": "他们尽管……，但是……。特别是杨同乐……。王一雪了解……，更了解……",
   "sample": "他们尽管性格不同，但是有很多共同爱好。特别是杨同乐人好，性格也好，很有责任感，王一飞也算在对的时间遇到了对的人。王一雪相信他们会一直走下去，因为杨同乐是她的好朋友，王一飞是她妹妹，她了解杨同乐，更了解王一飞。",
   "sample_vn": "Họ tuy tính cách khác nhau nhưng có nhiều sở thích chung. Đặc biệt Dương Đồng Lạc người tốt, tính cách tốt, rất có trách nhiệm; Vương Nhất Phi cũng coi như gặp đúng người vào đúng thời điểm. Vương Nhất Tuyết tin họ sẽ đi tiếp cùng nhau, vì Đồng Lạc là bạn tốt của cô, Nhất Phi là em gái cô — cô hiểu Đồng Lạc, càng hiểu Nhất Phi hơn.",
   "note": "Câu hỏi bài khoá 2; dùng 尽管……但是…… (điểm 2)."
  },
  {
   "q_zh": "杨同乐进入公司后，王一雪对他的印象怎么样？杨同乐为什么感觉自己很幸运？",
   "q_vn": "Sau khi Dương Đồng Lạc vào công ty, Vương Nhất Tuyết có ấn tượng về anh thế nào? Vì sao Dương Đồng Lạc thấy mình rất may mắn?",
   "hint": "王一雪对他印象……：人……，性格……。杨同乐觉得……，因为和王一雪这份……",
   "sample": "杨同乐刚来不久，王一雪对他印象就非常好：人很实在，性格阳光，工作负责，表现积极。杨同乐觉得自己很幸运，因为他和王一雪这份同事间的友情，给他带来了美好的爱情。他既有了一个好朋友，又遇到了自己的妻子，所以是“双份幸运”。",
   "sample_vn": "Dương Đồng Lạc mới đến không lâu, Vương Nhất Tuyết đã có ấn tượng rất tốt: người thật thà, tính cách vui tươi, làm việc có trách nhiệm, biểu hiện tích cực. Đồng Lạc thấy mình may mắn vì tình bạn đồng nghiệp với Nhất Tuyết đã mang đến cho anh tình yêu đẹp — vừa có bạn tốt, vừa gặp được vợ, nên là “may mắn nhân đôi”.",
   "note": "Câu hỏi bài khoá 3; ôn 既……又…… (Bài 4)."
  },
  {
   "q_zh": "请根据提示复述课文三。",
   "q_vn": "Dựa vào gợi ý, kể lại bài khoá 3.",
   "hint": "王一雪比杨同乐……。杨同乐刚来不久，王一雪对他……。后来他们一起……，此次出差，让两人……，从此……。一次聊天儿时，……，于是……",
   "sample": "王一雪比杨同乐更早进入公司。杨同乐刚来不久，王一雪对他印象就非常好：人很实在，性格阳光，工作负责，表现积极……后来他们一起出了次差，此次出差，让两人熟悉了起来，从此成了好朋友。一次聊天儿时，王一雪了解到杨同乐还没女朋友，正好自己的妹妹王一飞也没有男朋友，于是王一雪就把王一飞介绍给了他。杨同乐和王一飞认识后，很聊得来，两人之间慢慢产生了爱情，最后成了夫妻。杨同乐说自己很幸运，和王一雪这份同事间的友情，给他带来了美好的爱情。",
   "sample_vn": "Vương Nhất Tuyết vào công ty sớm hơn Dương Đồng Lạc… Dương Đồng Lạc nói mình rất may mắn, tình bạn đồng nghiệp với Vương Nhất Tuyết đã mang đến cho anh một tình yêu đẹp.",
   "note": "Bài tập 复述 của sách (trang 101); dùng 此次, 从此 (điểm 3)."
  },
  {
   "q_zh": "遇见爱情的方式并不重要，重要的是什么？爱需要怎样经营？",
   "q_vn": "Gặp tình yêu bằng cách nào không quan trọng, vậy điều quan trọng là gì? Tình yêu cần vun đắp như thế nào?",
   "hint": "重要的是……。在一段感情中，两个人要……，尤其是……。爱，从来都是……",
   "sample": "重要的是在合适的时间遇到了合适的人。不过美好的遇见只是爱的开始，爱更需要经营。在一段感情中，两个人要多关注对方的感受，尤其是结婚后，更要共同经营好家庭，日子才能越过越好。爱，从来都是相互尊重、理解与支持。",
   "sample_vn": "Quan trọng là gặp đúng người vào đúng thời điểm. Có điều cuộc gặp gỡ đẹp chỉ là khởi đầu, tình yêu càng cần vun đắp. Trong một mối quan hệ, hai người phải quan tâm nhiều hơn đến cảm nhận của nhau, nhất là sau khi cưới càng phải cùng nhau vun vén gia đình, cuộc sống mới ngày càng tốt. Tình yêu từ trước đến nay luôn là tôn trọng, thấu hiểu và ủng hộ lẫn nhau.",
   "note": "Câu hỏi bài khoá 4; dùng 尤其, 从来 (điểm 4)."
  },
  {
   "q_zh": "小组讨论：两人一组，对比你们国家的人和中国人的爱情观或友情观有哪些相同的地方，有哪些不同的地方，选出一位同学向全班介绍你们讨论的内容。",
   "q_vn": "Thảo luận nhóm: hai người một nhóm, so sánh quan niệm về tình yêu hoặc tình bạn của người nước mình và người Trung Quốc có những điểm giống và khác nhau nào (điền vào bảng 相同点 / 不同点), rồi cử một bạn giới thiệu với cả lớp.",
   "hint": "我们组讨论了……。相同的地方是：不管在中国还是在越南，大家都觉得……。不同的地方是：在中国，……；在越南，……。拿……来说，……。尽管……，但是……",
   "sample": "大家好！我们组讨论了中国人和越南人的爱情观和友情观。相同的地方是：不管在中国还是在越南，大家都觉得爱情需要相互理解、相互支持，结婚以后两个人要共同经营好家庭；朋友之间也要相互帮助，真正的友情从来不会因为离得远就变淡。不同的地方也有一些。拿结婚来说，在中国，很多年轻人觉得有房才有家，结婚前最好先买房；在越南，不少年轻人结婚后先和父母住在一起，过几年再买房。另外，在中国，通过朋友或家人介绍认识对象的人比较多，比如王一雪就把妹妹介绍给了杨同乐；在越南，尽管也有朋友介绍的，但是在学校或者公司里自己认识的更多。总的来说，尽管两个国家的习惯有些不同，但是大家对美好爱情和友情的希望是一样的。谢谢大家！",
   "sample_vn": "Chào cả lớp! Nhóm mình đã thảo luận về quan niệm tình yêu và tình bạn của người Trung Quốc và người Việt Nam. Điểm giống: dù ở Trung Quốc hay Việt Nam, mọi người đều cho rằng tình yêu cần thấu hiểu, ủng hộ nhau, cưới rồi hai người phải cùng nhau vun vén gia đình; bạn bè cũng phải giúp đỡ nhau, tình bạn thật sự chưa bao giờ phai nhạt chỉ vì ở xa. Điểm khác cũng có. Lấy chuyện kết hôn mà nói, ở Trung Quốc nhiều bạn trẻ cho rằng có nhà mới có tổ ấm, trước khi cưới tốt nhất nên mua nhà; ở Việt Nam, không ít bạn trẻ cưới xong ở cùng bố mẹ trước, vài năm sau mới mua nhà. Ngoài ra, ở Trung Quốc khá nhiều người quen người yêu qua bạn bè, gia đình giới thiệu, như Vương Nhất Tuyết giới thiệu em gái cho Dương Đồng Lạc; ở Việt Nam tuy cũng có người được giới thiệu, nhưng tự quen nhau ở trường hay công ty thì nhiều hơn. Tóm lại, dù thói quen hai nước có khác nhau, nhưng mong ước về tình yêu và tình bạn đẹp thì giống nhau. Cảm ơn cả lớp!",
   "note": "Hoạt động 小组讨论 (thảo luận nhóm) trong 任务活动 của sách, trang 105 — dùng 尽管……但是……, 从来, 不管 (Bài 8), 拿……来说 (Bài 7)."
  }
 ]
};
var translateData = [
 {
  "vi": "Em không nói anh cũng hiểu em đang nghĩ gì.",
  "zh": "我不说你也懂我在想什么。",
  "py": "Wǒ bù shuō nǐ yě dǒng wǒ zài xiǎng shénme."
 },
 {
  "vi": "Họ tuy tính cách khác nhau nhưng có rất nhiều sở thích chung.",
  "zh": "他们尽管性格不同，但是有很多共同爱好。",
  "py": "Tāmen jǐnguǎn xìnggé bùtóng, dànshì yǒu hěn duō gòngtóng àihào."
 },
 {
  "vi": "Chuyến công tác lần này khiến hai người trở nên thân quen, từ đó thành bạn tốt.",
  "zh": "此次出差，让两人熟悉了起来，从此成了好朋友。",
  "py": "Cǐ cì chūchāi, ràng liǎng rén shúxī le qǐlái, cóngcǐ chéng le hǎo péngyou."
 },
 {
  "vi": "Tình yêu từ trước đến nay luôn là tôn trọng, thấu hiểu và ủng hộ lẫn nhau.",
  "zh": "爱从来都是相互尊重、理解与支持。",
  "py": "Ài cónglái dōu shì xiānghù zūnzhòng, lǐjiě yǔ zhīchí."
 },
 {
  "vi": "Mong họ có thể luôn thấu hiểu nhau, ủng hộ nhau.",
  "zh": "希望他们能一直相互理解、相互支持。",
  "py": "Xīwàng tāmen néng yìzhí xiānghù lǐjiě, xiānghù zhīchí."
 },
 {
  "vi": "Gặp được anh, em cũng thấy mình rất may mắn.",
  "zh": "遇见你，我也觉得很幸运。",
  "py": "Yùjiàn nǐ, wǒ yě juéde hěn xìngyùn."
 }
];
var translateDataRev = [
 {
  "vi": "Thật ra mới quen không lâu, sự hài hước và kiên nhẫn của anh đã rất thu hút em.",
  "zh": "其实刚认识不久，你的幽默与耐心就很吸引我。",
  "py": "Qíshí gāng rènshi bùjiǔ, nǐ de yōumò yǔ nàixīn jiù hěn xīyǐn wǒ."
 },
 {
  "vi": "Nếu anh không luôn tìm em trò chuyện, có lẽ chúng mình đã lỡ nhau rồi.",
  "zh": "如果你没有一直找我聊天儿，我们可能就错过了。",
  "py": "Rúguǒ nǐ méiyǒu yìzhí zhǎo wǒ liáotiānr, wǒmen kěnéng jiù cuòguò le."
 },
 {
  "vi": "Giữa hai người dần dần nảy sinh tình yêu, cuối cùng thành vợ chồng.",
  "zh": "两人之间慢慢产生了爱情，最后成了夫妻。",
  "py": "Liǎng rén zhī jiān màn màn chǎnshēng le àiqíng, zuìhòu chéng le fūqī."
 },
 {
  "vi": "Trong một mối quan hệ tình cảm, hai người phải quan tâm nhiều hơn đến cảm nhận của đối phương.",
  "zh": "在一段感情中，两个人要多关注对方的感受。",
  "py": "Zài yí duàn gǎnqíng zhōng, liǎng gè rén yào duō guānzhù duìfāng de gǎnshòu."
 },
 {
  "vi": "Gặp được bạn, thật vừa đúng lúc.",
  "zh": "遇见你，刚刚好。",
  "py": "Yùjiàn nǐ, gānggāng hǎo."
 }
];
var sgkData = [
 {
  "kieu": "kho",
  "de": "选词填空（一）· 综合练习",
  "vn": "Chọn từ thích hợp điền vào chỗ trống (Bài tập tổng hợp, sách trang 103).",
  "dapSgk": true,
  "tu": [
   "祝",
   "尤其",
   "性格",
   "吸引",
   "负责"
  ],
  "cau": [
   {
    "s": "这次比赛＿＿了很多同学参加，大家都表现得非常积极。",
    "dap": [
     "吸引"
    ]
   },
   {
    "s": "我特别喜欢吃水果，＿＿喜欢吃香蕉。",
    "dap": [
     "尤其"
    ]
   },
   {
    "s": "今天是妈妈的生日，我和爸爸给她买了生日蛋糕，一起给她唱生日歌，＿＿她永远（yǒngyuǎn, forever）年轻、美丽。",
    "dap": [
     "祝"
    ]
   },
   {
    "s": "人要对自己说过的话＿＿，说到就一定要做到。",
    "dap": [
     "负责"
    ]
   },
   {
    "s": "这位新同事做事积极，＿＿也很好，大家都很喜欢她。",
    "dap": [
     "性格"
    ]
   }
  ]
 },
 {
  "kieu": "kho",
  "de": "选词填空（二）· 综合练习",
  "vn": "Chọn từ thích hợp điền vào chỗ trống (hội thoại, sách trang 104).",
  "dapSgk": true,
  "tu": [
   "日子",
   "感受",
   "感情",
   "深",
   "爱情"
  ],
  "cau": [
   {
    "s": "A：他们夫妻两人的＿＿一直特别好。　B：是的，他们家真是一个幸福的家庭。",
    "dap": [
     "感情"
    ]
   },
   {
    "s": "A：你结婚的＿＿定（dìng, set）了吗？　B：嗯，定在了下周六，到时候你一定要来啊！",
    "dap": [
     "日子"
    ]
   },
   {
    "s": "A：我希望自己遇见的＿＿简单、美好，你呢？　B：我的想法和你一样，我也希望遇到简单的人，结婚后过简单的日子。",
    "dap": [
     "爱情"
    ]
   },
   {
    "s": "A：我记得第一次看这个电影时，我都感动得哭了。　B：嗯，我对它的印象也很＿＿。",
    "dap": [
     "深"
    ]
   },
   {
    "s": "A：看完刚才的足球比赛，你有什么＿＿？　B：我觉得球员们踢得很精彩，尤其是8号，表现特别好。",
    "dap": [
     "感受"
    ]
   }
  ]
 },
 {
  "kieu": "kho",
  "de": "选择合适的内容完成短文",
  "vn": "Chọn nội dung thích hợp (A–D) hoàn thành đoạn văn (sách trang 104).",
  "dapSgk": true,
  "tu": [
   "于是她们相互加了微信",
   "后来去了不同城市上大学",
   "尽管这么多年过去了",
   "她看了好一会儿"
  ],
  "cau": [
   {
    "s": "去年，我刷短视频（shìpín, video clip）时看到有个人发了很多老照片，照片里有个女孩儿特别像我妈妈。我给妈妈看了这个视频，＿＿，说那就是她。原来那些照片是她和她以前的好朋友小江一起拍的。她们从小一起长大，＿＿，从此就慢慢失去了联系。我跟发视频的人联系了一下，对方马上向我要了妈妈的微信号，＿＿。从此，她们常在网上聊天儿，好像回到了年轻时。妈妈说，＿＿，但是她们还能联系上，而且美好的友情还在，她觉得很幸运。",
    "dap": [
     "她看了好一会儿",
     "后来去了不同城市上大学",
     "于是她们相互加了微信",
     "尽管这么多年过去了"
    ]
   }
  ]
 },
 {
  "kieu": "gx",
  "de": "看图，用词语造句",
  "vn": "Nhìn tranh, đặt câu với từ cho sẵn (câu của sách chỉ là gợi ý — câu của em đúng ngữ pháp, hợp tranh là đạt).",
  "cau": [
   {
    "anh": "/images/hsk4v3/bai-9/bt-1.webp",
    "s": "",
    "tu": "精彩",
    "dap": "她们的篮球比赛非常精彩。",
    "giai": "N + 非常 / 很 + 精彩: khen trận đấu, buổi biểu diễn hấp dẫn."
   },
   {
    "anh": "/images/hsk4v3/bai-9/bt-2.webp",
    "s": "",
    "tu": "友情",
    "dap": "她们三个有很深的友情。",
    "giai": "有 + 很深的 + 友情; có thể nói thêm: 她们之间的友情很深。"
   },
   {
    "anh": "/images/hsk4v3/bai-9/bt-3.webp",
    "s": "",
    "tu": "错过",
    "dap": "他由于起晚了，错过了飞机。",
    "giai": "错过 + 飞机 / 火车 / 机会; câu mẫu còn ôn 由于 (Bài 2 · điểm 4)."
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
  "tieuDe": "Viết đoạn văn: quan điểm của em về tình yêu hoặc tình bạn (写作)",
  "gioiThieu": "Đề 写作 của sách HSK 4 (3.0) yêu cầu viết một đoạn văn ngắn (ít nhất 120 chữ) dựa trên nội dung bài khoá — lần này là nói CÁCH NHÌN của em về tình yêu hoặc tình bạn, giống phần 书写 của đề thi HSK 4 mới. Cách dễ nhất: nêu quan điểm → kể một câu chuyện thật của mình làm ví dụ → rút ra điều em tin.",
  "buoc": [
   "Chọn MỘT chủ đề: tình yêu (爱情) hoặc tình bạn (友情) — đừng viết cả hai cho lan man.",
   "Câu mở nêu quan điểm: 在我看来，友情 / 爱情是…… (bắt chước câu 在我看来 của bài khoá 4).",
   "Thân bài kể một ví dụ thật: quen nhau thế nào (刚认识不久……，从此……), một việc khiến em cảm động (尽管……，但是……; 不……也……).",
   "Rút ra điều quan trọng nhất của tình bạn / tình yêu: 相互理解、相互支持、关注对方的感受, 尤其是……; dùng 从来 để khẳng định.",
   "Câu kết: cảm nghĩ, lời chúc (遇见……，我觉得很幸运 / 祝……); tự soát số chữ (≥ 120) và lỗi chữ Hán trước khi nộp."
  ]
 },
 "de": "请根据课文内容写一篇短文，说说你对爱情或友情的看法，不少于120字。",
 "prompt": "Dựa vào nội dung bài khoá, hãy viết một đoạn văn ngắn nói về cách nhìn của em đối với tình yêu hoặc tình bạn, không ít hơn 120 chữ.",
 "dan": [
  {
   "hoi": "你想写爱情还是友情？在你看来，它是什么？",
   "goiY": "在我看来，友情是人生中最美好的东西之一……"
  },
  {
   "hoi": "你和他 / 她是怎么认识的？对他 / 她的第一印象怎么样？",
   "goiY": "我们是在……认识的。刚认识不久，我对他 / 她印象就……，从此……"
  },
  {
   "hoi": "你们之间发生过什么让你感动的事？",
   "goiY": "有一次……，我不说他 / 她也知道……；尽管……，但是他 / 她还是……"
  },
  {
   "hoi": "你觉得好的爱情 / 友情需要什么？",
   "goiY": "……需要相互理解、相互支持，要多关注对方的感受，尤其是……"
  },
  {
   "hoi": "最后，你想说什么？",
   "goiY": "遇见他 / 她，我觉得很幸运。希望我们的友情 / 感情越来越深。"
  }
 ],
 "tuNen": [
  "友情",
  "爱情",
  "感情",
  "幸运",
  "幸福",
  "印象",
  "性格",
  "共同",
  "相互",
  "理解",
  "支持",
  "感动",
  "美好",
  "日子",
  "尤其",
  "从此",
  "对方",
  "感受"
 ],
 "cauTruc": [
  {
   "ten": "不……也……",
   "nhan": "不……也",
   "vd": "我们认识了十年，我不说她也知道我在想什么。",
   "khi": "Kể sự thấu hiểu giữa hai người."
  },
  {
   "ten": "尽管……，但是 / 可是……",
   "nhan": "尽管",
   "vd": "尽管我们住在不同的城市，但是我们的友情从来没有变过。",
   "khi": "Nói khó khăn — nhưng tình cảm vẫn tốt."
  },
  {
   "ten": "此次 / 从此",
   "nhan": "此",
   "vd": "那次旅行让我们熟悉了起来，从此成了最好的朋友。",
   "khi": "Kể sự việc làm mốc và kết quả về sau."
  },
  {
   "ten": "从来不 / 从来没……过 / 从来都是……",
   "nhan": "从来",
   "vd": "真正的友情从来都是相互理解、相互支持的。",
   "khi": "Khẳng định một điều luôn đúng — hợp làm câu kết luận."
  },
  {
   "ten": "在我看来，……",
   "nhan": "在我看来",
   "vd": "在我看来，遇见爱情的方式并不重要，重要的是遇到对的人。",
   "khi": "Câu MỞ: nêu quan điểm (như bài khoá 4)."
  }
 ],
 "checklist": [
  "Đủ ít nhất 120 chữ Hán chưa?",
  "Đã nêu rõ quan điểm của em (在我看来……) và có một ví dụ thật để chứng minh chưa?",
  "Đã dùng ít nhất 3 trong 4 điểm ngữ pháp của bài (不……也……、尽管……但是……、此、从来) chưa?",
  "Đã dùng ít nhất 6 từ mới của bài (友情、爱情、印象、相互、理解、支持、幸运…) chưa?",
  "Có câu mở (quan điểm) và câu kết (cảm nghĩ / lời chúc) chưa? Đã soát lỗi chữ Hán chưa?"
 ],
 "model": {
  "zh": "在我看来，友情是人生中最美好的东西之一。我和小美是在大学里认识的。刚认识不久，我对她印象就非常好：人很实在，性格阳光，做事也很负责。尽管我们性格不同，她喜欢热闹，我喜欢安静，但是我们有很多共同爱好，都喜欢看书和旅游。有一次我生病了，我不说她也知道我不舒服，每天给我送饭，还帮我复习，我特别感动。从此，我们成了最好的朋友。毕业后，我们去了不同的城市工作，见面的机会少了，不过我们从来没有失去联系，常常在网上聊天儿。我觉得好的友情需要相互理解、相互支持，要多关注对方的感受，尤其是在对方遇到困难的时候。遇见她，我觉得很幸运。",
  "py": "Zài wǒ kànlái, yǒuqíng shì rénshēng zhōng zuì měihǎo de dōngxi zhī yī. Wǒ hé xiǎo měi shì zài dàxué lǐ rènshi de. Gāng rènshi bùjiǔ, wǒ duì tā yìnxiàng jiù fēicháng hǎo: rén hěn shízài, xìnggé yángguāng, zuò shì yě hěn fùzé. Jǐnguǎn wǒmen xìnggé bùtóng, tā xǐhuan rènao, wǒ xǐhuan ānjìng, dànshì wǒmen yǒu hěn duō gòngtóng àihào, dōu xǐhuan kàn shū hé lǚyóu. Yǒu yí cì wǒ shēngbìng le, wǒ bù shuō tā yě zhīdao wǒ bù shūfu, měi tiān gěi wǒ sòng fàn, hái bāng wǒ fùxí, wǒ tèbié gǎndòng. Cóngcǐ, wǒmen chéng le zuìhǎo de péngyou. Bìyè hòu, wǒmen qù le bùtóng de chéngshì gōngzuò, jiànmiàn de jīhuì shǎo le, búguò wǒmen cónglái méiyǒu shīqù liánxì, chángcháng zài wǎngshàng liáotiānr. Wǒ juéde hǎo de yǒuqíng xūyào xiānghù lǐjiě, xiānghù zhīchí, yào duō guānzhù duìfāng de gǎnshòu, yóuqí shì zài duìfāng yùdào kùnnán de shíhou. Yùjiàn tā, wǒ juéde hěn xìngyùn."
 }
};
