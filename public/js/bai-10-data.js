// ══════════════════════════════════════════
// DATA — Bài 10: 别找了，手机在桌子上呢
// ══════════════════════════════════════════
var vocabData = [
  {
    "n": 1,
    "zh": "课",
    "py": "kè",
    "pos": "Danh từ",
    "vn": "bài học, tiết học, môn học",
    "hv": "khóa",
    "em": "📖",
    "lesson": 1,
    "ex_zh": "我们下课了。",
    "ex_py": "Wǒmen xiàkè le.",
    "ex_vn": "Chúng tôi tan học rồi.",
    "exList": [
      {
        "zh": "我们下课了。",
        "py": "Wǒmen xiàkè le.",
        "vn": "Chúng tôi tan học rồi. (下课 — tan học)"
      },
      {
        "zh": "明天的课是汉语课。",
        "py": "Míngtiān de kè shì Hànyǔ kè.",
        "vn": "Tiết học ngày mai là tiết tiếng Trung. (汉语课 — tiết tiếng Trung)"
      },
      {
        "zh": "我上午有汉语课，下午有英语课。",
        "py": "Wǒ shàngwǔ yǒu Hànyǔ kè, xiàwǔ yǒu Yīngyǔ kè.",
        "vn": "Sáng tôi có tiết tiếng Trung, chiều có tiết tiếng Anh. (英语课 — tiết tiếng Anh)"
      }
    ],
    "hanzi": [
      {
        "c": "课",
        "p": "kè",
        "type": "左右结构 · Trái-phải",
        "st": 10,
        "ord": "讠(ngôn) trái → 果 (quả) phải",
        "rad": "讠(ngôn – lời nói)",
        "mean": "bài học, môn học",
        "tip": "Bộ 讠(lời nói/giảng dạy) + 果 (kết quả) → lời giảng mang lại KẾT QUẢ học tập = BÀI HỌC.",
        "cf": "棵 (kē – lượng từ cây)",
        "w": "汉语课 / 上课 / 下课"
      }
    ],
    "colloFull": [
      {
        "zh": "上课",
        "py": "shàngkè",
        "vn": "lên lớp"
      },
      {
        "zh": "下课",
        "py": "xiàkè",
        "vn": "tan học"
      },
      {
        "zh": "汉语课",
        "py": "Hànyǔ kè",
        "vn": "tiết tiếng Trung"
      },
      {
        "zh": "上汉语课",
        "py": "shàng Hànyǔ kè",
        "vn": "học tiết tiếng Trung"
      }
    ],
    "patterns": [
      {
        "s": "上 / 下 + 课",
        "m": "Vào học và tan học"
      },
      {
        "s": "课 có bộ 讠 (lời nói) — lớp học là nơi nói và nghe"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tám giờ vào học, mười một giờ tan học.",
        "answer": "八点上课，十一点下课。",
        "answerPy": "Bā diǎn shàngkè, shíyī diǎn xiàkè.",
        "note": "上课 ↔ 下课 — vào học và tan học.",
        "pair": "……点"
      },
      {
        "promptLang": "vi",
        "prompt": "Hôm nay có tiết tiếng Trung, tôi không được đến muộn.",
        "answer": "今天有汉语课，我不可以来晚。",
        "answerPy": "Jīntiān yǒu Hànyǔ kè, wǒ bù kěyǐ lái wǎn.",
        "note": "不可以 — không được phép.",
        "pair": "不可以 + V"
      }
    ]
  },
  {
    "n": 2,
    "zh": "帮助",
    "py": "bāngzhù",
    "pos": "Động từ / Danh từ",
    "vn": "giúp đỡ, có ích",
    "hv": "bang trợ",
    "em": "🤝",
    "lesson": 1,
    "ex_zh": "他常常帮助同学。",
    "ex_py": "Tā chángcháng bāngzhù tóngxué.",
    "ex_vn": "Anh ấy thường xuyên giúp đỡ bạn học.",
    "exList": [
      {
        "zh": "他常常帮助同学。",
        "py": "Tā chángcháng bāngzhù tóngxué.",
        "vn": "Anh ấy thường xuyên giúp đỡ bạn học. (帮助 + người)"
      },
      {
        "zh": "你能帮助一下大卫吗？",
        "py": "Nǐ néng bāngzhù yíxià Dàwèi ma?",
        "vn": "Bạn có thể giúp David một chút được không? (khẩu ngữ: 帮 + người, ví dụ 帮我一下)"
      },
      {
        "zh": "看书对学习有帮助。",
        "py": "Kàn shū duì xuéxí yǒu bāngzhù.",
        "vn": "Đọc sách có ích cho việc học. (cấu trúc: 对…有帮助)"
      }
    ],
    "hanzi": [
      {
        "c": "帮",
        "p": "bāng",
        "type": "上下结构 · Trên-dưới",
        "st": 9,
        "ord": "邦 (biến thể) → 巾 (cân)",
        "rad": "巾 (cân – khăn)",
        "mean": "giúp đỡ",
        "tip": "Đã học ở Bài 4 (帮我介绍) — cùng nhau hỗ trợ.",
        "cf": "邦 (bāng – \"quốc gia\")",
        "w": "帮助 / 帮忙 / 帮我"
      },
      {
        "c": "助",
        "p": "zhù",
        "type": "左右结构 · Trái-phải",
        "st": 7,
        "ord": "且 (thả) trái → 力 (lực) phải",
        "rad": "力 (lực – sức mạnh)",
        "mean": "trợ giúp",
        "tip": "Bộ 力 (sức lực) → góp thêm sức để TRỢ GIÚP người khác.",
        "cf": "昨 (zuó – khác bộ trái)",
        "w": "帮助 / 助手 / 互助"
      }
    ],
    "colloFull": [
      {
        "zh": "帮助我",
        "py": "bāngzhù wǒ",
        "vn": "giúp đỡ tôi"
      },
      {
        "zh": "帮助同学",
        "py": "bāngzhù tóngxué",
        "vn": "giúp bạn học"
      },
      {
        "zh": "帮助哥哥",
        "py": "bāngzhù gēge",
        "vn": "giúp đỡ anh trai"
      },
      {
        "zh": "谢谢你的帮助",
        "py": "xièxie nǐ de bāngzhù",
        "vn": "cảm ơn sự giúp đỡ"
      }
    ],
    "patterns": [
      {
        "s": "帮助 + người",
        "m": "Giúp đỡ ai: 老师帮助我们"
      },
      {
        "s": "帮助 (trang trọng hơn) và 帮 (khẩu ngữ): 帮我看一下"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Cảm ơn sự giúp đỡ của thầy.",
        "answer": "谢谢老师的帮助。",
        "answerPy": "Xièxie lǎoshī de bāngzhù.",
        "note": "帮助 trang trọng hơn 帮.",
        "pair": "……的帮助"
      },
      {
        "promptLang": "vi",
        "prompt": "Anh trai tôi thường giúp đỡ tôi học tiếng Trung.",
        "answer": "我哥哥经常帮助我学习汉语。",
        "answerPy": "Wǒ gēge jīngcháng bāngzhù wǒ xuéxí Hànyǔ.",
        "note": "经常 đứng TRƯỚC động từ.",
        "pair": "帮助 + người + V"
      }
    ]
  },
  {
    "n": 3,
    "zh": "别",
    "py": "bié",
    "pos": "Phó từ",
    "vn": "đừng",
    "hv": "biệt",
    "em": "🚫",
    "lesson": 2,
    "ex_zh": "别看电视了。",
    "ex_py": "Bié kàn diànshì le.",
    "ex_vn": "Đừng xem tivi nữa.",
    "exList": [
      {
        "zh": "别看电视了。",
        "py": "Bié kàn diànshì le.",
        "vn": "Đừng xem tivi nữa. (别 + Động từ + 了)"
      },
      {
        "zh": "别看报纸了，医生说你要多休息。",
        "py": "Bié kàn bàozhǐ le, yīshēng shuō nǐ yào duō xiūxi.",
        "vn": "Đừng đọc báo nữa, bác sĩ bảo bạn cần nghỉ ngơi nhiều."
      },
      {
        "zh": "别着急，我们还有时间。",
        "py": "Bié zháojí, wǒmen hái yǒu shíjiān.",
        "vn": "Đừng vội, chúng ta vẫn còn thời gian."
      }
    ],
    "hanzi": [
      {
        "c": "别",
        "p": "bié",
        "type": "左右结构 · Trái-phải",
        "st": 7,
        "ord": "另 (lánh) trái → 刂 (đao) phải",
        "rad": "刂(đao – dao)",
        "mean": "đừng; khác",
        "tip": "Bộ 刂(dao) cắt lìa, tách biệt → dùng để NGĂN CẢN, bảo \"đừng\" làm nữa.",
        "cf": "列 (liè – \"hàng, dãy\")",
        "w": "别…了 / 别的 / 特别"
      }
    ],
    "colloFull": [
      {
        "zh": "别走",
        "py": "bié zǒu",
        "vn": "đừng đi"
      },
      {
        "zh": "别看电视",
        "py": "bié kàn diànshì",
        "vn": "đừng xem tivi"
      },
      {
        "zh": "别问",
        "py": "bié wèn",
        "vn": "đừng hỏi"
      },
      {
        "zh": "别太累",
        "py": "bié tài lèi",
        "vn": "đừng quá mệt"
      }
    ],
    "patterns": [
      {
        "s": "别 + động từ",
        "m": "Đừng làm gì: 别走"
      },
      {
        "s": "别 (đừng) dùng khi khuyên; 不 chỉ là phủ định"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Đã muộn rồi, đừng xem tivi nữa.",
        "answer": "很晚了，别看电视了。",
        "answerPy": "Hěn wǎn le, bié kàn diànshì le.",
        "note": "别 dùng khi khuyên ai đừng làm gì.",
        "pair": "别……了"
      },
      {
        "promptLang": "vi",
        "prompt": "Bạn ốm rồi, đừng đi làm, ở nhà nghỉ đi.",
        "answer": "你生病了，别去上班，在家休息吧。",
        "answerPy": "Nǐ shēngbìng le, bié qù shàngbān, zài jiā xiūxi ba.",
        "note": "别 + động từ — đừng làm gì.",
        "pair": "别 + V"
      }
    ]
  },
  {
    "n": 4,
    "zh": "哥哥",
    "py": "gēge",
    "pos": "Danh từ",
    "vn": "anh trai",
    "hv": "ca ca",
    "em": "👨",
    "lesson": 3,
    "ex_zh": "哥哥今天中午回来吃饭。",
    "ex_py": "Gēge jīntiān zhōngwǔ huílái chīfàn.",
    "ex_vn": "Trưa nay anh trai về ăn cơm.",
    "exList": [
      {
        "zh": "哥哥今天中午回来吃饭。",
        "py": "Gēge jīntiān zhōngwǔ huílái chīfàn.",
        "vn": "Trưa nay anh trai về ăn cơm."
      },
      {
        "zh": "我哥哥在北京工作。",
        "py": "Wǒ gēge zài Běijīng gōngzuò.",
        "vn": "Anh trai tôi làm việc ở Bắc Kinh."
      },
      {
        "zh": "哥哥比我大五岁。",
        "py": "Gēge bǐ wǒ dà wǔ suì.",
        "vn": "Anh trai lớn hơn tôi 5 tuổi."
      }
    ],
    "hanzi": [
      {
        "c": "哥",
        "p": "gē",
        "type": "上下结构 · Trên-dưới",
        "st": 10,
        "ord": "可→可 (hai chữ 可 chồng nhau)",
        "rad": "口 (khẩu – miệng)",
        "mean": "anh trai",
        "tip": "Hai chữ 可 (đồng ý) chồng lên nhau → hình ảnh người anh luôn gật đầu chỉ bảo em.",
        "cf": "歌 (gē – \"bài hát\")",
        "w": "哥哥 / 大哥"
      }
    ],
    "colloFull": [
      {
        "zh": "我哥哥",
        "py": "wǒ gēge",
        "vn": "anh trai tôi"
      },
      {
        "zh": "哥哥的手机",
        "py": "gēge de shǒujī",
        "vn": "điện thoại của anh"
      },
      {
        "zh": "两个哥哥",
        "py": "liǎng gè gēge",
        "vn": "hai người anh"
      },
      {
        "zh": "哥哥上班",
        "py": "gēge shàngbān",
        "vn": "anh đi làm"
      }
    ],
    "patterns": [
      {
        "s": "ai + 哥哥",
        "m": "Anh của ai — người thân hay bỏ 的"
      },
      {
        "s": "哥哥 (anh) · 姐姐 (chị) — đều nói hai lần"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Anh trai tôi làm việc ở một công ty rất xa.",
        "answer": "我哥哥在一个很远的公司上班。",
        "answerPy": "Wǒ gēge zài yí ge hěn yuǎn de gōngsī shàngbān.",
        "note": "Nơi chốn đứng TRƯỚC động từ.",
        "pair": "在……上班"
      },
      {
        "promptLang": "vi",
        "prompt": "Điện thoại của anh tôi màu đen.",
        "answer": "我哥哥的手机是黑的。",
        "answerPy": "Wǒ gēge de shǒujī shì hēi de.",
        "note": "……的 cuối câu thay cho danh từ đã biết.",
        "pair": "是……的"
      }
    ]
  },
  {
    "n": 5,
    "zh": "鸡蛋",
    "py": "jīdàn",
    "pos": "Danh từ",
    "vn": "trứng gà",
    "hv": "kê đản",
    "em": "🥚",
    "lesson": 3,
    "ex_zh": "我今天早上吃了一个鸡蛋。",
    "ex_py": "Wǒ jīntiān zǎoshang chīle yí ge jīdàn.",
    "ex_vn": "Sáng nay tôi đã ăn một quả trứng gà.",
    "exList": [
      {
        "zh": "我今天早上吃了一个鸡蛋。",
        "py": "Wǒ jīntiān zǎoshang chīle yí ge jīdàn.",
        "vn": "Sáng nay tôi đã ăn một quả trứng gà."
      },
      {
        "zh": "你会做鸡蛋汤吗？",
        "py": "Nǐ huì zuò jīdàn tāng ma?",
        "vn": "Bạn có biết làm canh trứng không? (鸡蛋汤 — canh trứng)"
      },
      {
        "zh": "我去超市买了一些鸡蛋。",
        "py": "Wǒ qù chāoshì mǎile yìxiē jīdàn.",
        "vn": "Tôi đã đi siêu thị mua một ít trứng gà."
      }
    ],
    "hanzi": [
      {
        "c": "鸡",
        "p": "jī",
        "type": "左右结构 · Trái-phải",
        "st": 7,
        "ord": "又 (hựu) trái → 鸟 (điểu) phải",
        "rad": "鸟 (điểu – chim)",
        "mean": "gà",
        "tip": "Bộ 鸟 (chim) → gà cũng thuộc họ nhà chim, chỉ là không bay được xa.",
        "cf": "鸭 (yā – \"vịt\")",
        "w": "鸡蛋 / 鸡肉 / 小鸡"
      },
      {
        "c": "蛋",
        "p": "dàn",
        "type": "上下结构 · Trên-dưới",
        "st": 11,
        "ord": "疋 (sơ) → 虫 (trùng)",
        "rad": "疋 (sơ)",
        "mean": "trứng",
        "tip": "Hình quả trứng cách điệu bên trên phần thân → nghĩa \"TRỨNG\" nói chung.",
        "cf": "蜑 (dàn – ít dùng)",
        "w": "鸡蛋 / 鸭蛋"
      }
    ],
    "colloFull": [
      {
        "zh": "吃鸡蛋",
        "py": "chī jīdàn",
        "vn": "ăn trứng"
      },
      {
        "zh": "买鸡蛋",
        "py": "mǎi jīdàn",
        "vn": "mua trứng"
      },
      {
        "zh": "一个鸡蛋",
        "py": "yí gè jīdàn",
        "vn": "một quả trứng"
      },
      {
        "zh": "鸡蛋面条",
        "py": "jīdàn miàntiáo",
        "vn": "mì trứng"
      }
    ],
    "patterns": [
      {
        "s": "吃 / 买 + 鸡蛋",
        "m": "Ăn trứng, mua trứng"
      },
      {
        "s": "鸡 + 蛋",
        "m": "Quả trứng (蛋) của con gà (鸡)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Sáng nào tôi cũng ăn một quả trứng.",
        "answer": "我每天早上都吃一个鸡蛋。",
        "answerPy": "Wǒ měi tiān zǎoshang dōu chī yí ge jīdàn.",
        "note": "每 đi với 都 thành một cặp.",
        "pair": "每……都……"
      },
      {
        "promptLang": "vi",
        "prompt": "Bạn mua giúp tôi hai cân trứng nhé.",
        "answer": "你帮我买两公斤鸡蛋吧。",
        "answerPy": "Nǐ bāng wǒ mǎi liǎng gōngjīn jīdàn ba.",
        "note": "公斤 đứng giữa số và danh từ.",
        "pair": "帮 + người + V"
      }
    ]
  },
  {
    "n": 6,
    "zh": "西瓜",
    "py": "xīguā",
    "pos": "Danh từ",
    "vn": "dưa hấu",
    "hv": "tây qua",
    "em": "🍉",
    "lesson": 3,
    "ex_zh": "我买了一点儿西瓜。",
    "ex_py": "Wǒ mǎile yìdiǎnr xīguā.",
    "ex_vn": "Tôi đã mua một ít dưa hấu.",
    "exList": [
      {
        "zh": "我买了一点儿西瓜。",
        "py": "Wǒ mǎile yìdiǎnr xīguā.",
        "vn": "Tôi đã mua một ít dưa hấu. (买西瓜 — mua dưa hấu)"
      },
      {
        "zh": "西瓜很甜。",
        "py": "Xīguā hěn tián.",
        "vn": "Dưa hấu rất ngọt."
      },
      {
        "zh": "西瓜多少钱？",
        "py": "Xīguā duōshao qián?",
        "vn": "Dưa hấu bao nhiêu tiền?"
      }
    ],
    "hanzi": [
      {
        "c": "西",
        "p": "xī",
        "type": "独体字 · Chữ đơn",
        "st": 6,
        "ord": "一→儿→一→凵",
        "rad": "西 (tây – tự thành bộ)",
        "mean": "phía Tây",
        "tip": "Hình cái tổ chim lúc mặt trời lặn về phía Tây → chỉ HƯỚNG TÂY.",
        "cf": "酉 (yǒu – \"chi Dậu\")",
        "w": "西瓜 / 东西 / 西边"
      },
      {
        "c": "瓜",
        "p": "guā",
        "type": "独体字 · Tượng hình",
        "st": 5,
        "ord": "丶→ᄼ→㇈→丨",
        "rad": "瓜 (qua – tự thành bộ)",
        "mean": "dưa, bầu bí",
        "tip": "Hình quả dưa lủng lẳng trên dây leo → \"DƯA\".",
        "cf": "爪 (zhǎo – \"móng vuốt\")",
        "w": "西瓜 / 木瓜 / 黄瓜"
      }
    ],
    "colloFull": [
      {
        "zh": "吃西瓜",
        "py": "chī xīguā",
        "vn": "ăn dưa hấu"
      },
      {
        "zh": "买西瓜",
        "py": "mǎi xīguā",
        "vn": "mua dưa hấu"
      },
      {
        "zh": "一个西瓜",
        "py": "yí gè xīguā",
        "vn": "một quả dưa hấu"
      },
      {
        "zh": "西瓜很好吃",
        "py": "xīguā hěn hǎochī",
        "vn": "dưa hấu rất ngon"
      }
    ],
    "patterns": [
      {
        "s": "吃 + 西瓜",
        "m": "Ăn dưa hấu"
      },
      {
        "s": "西 + 瓜",
        "m": "Quả dưa (瓜) đến từ phía tây (西)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Dưa hấu ở đây rất ngon mà lại không đắt.",
        "answer": "这儿的西瓜很好吃，也不贵。",
        "answerPy": "Zhèr de xīguā hěn hǎochī, yě bú guì.",
        "note": "也 đứng TRƯỚC tính từ.",
        "pair": "也 + Adj"
      },
      {
        "promptLang": "vi",
        "prompt": "Trời nóng quá, chúng ta ăn dưa hấu đi.",
        "answer": "天太热了，我们吃西瓜吧。",
        "answerPy": "Tiān tài rè le, wǒmen chī xīguā ba.",
        "note": "太……了 phải đủ hai vế.",
        "pair": "太……了"
      }
    ]
  },
  {
    "n": 7,
    "zh": "正在",
    "py": "zhèngzài",
    "pos": "Phó từ",
    "vn": "đang",
    "hv": "chính tại",
    "em": "⏳",
    "lesson": 3,
    "ex_zh": "妈妈正在准备午饭呢。",
    "ex_py": "Māma zhèngzài zhǔnbèi wǔfàn ne.",
    "ex_vn": "Mẹ đang chuẩn bị bữa trưa kìa.",
    "exList": [
      {
        "zh": "妈妈正在准备午饭呢。",
        "py": "Māma zhèngzài zhǔnbèi wǔfàn ne.",
        "vn": "Mẹ đang chuẩn bị bữa trưa kìa."
      },
      {
        "zh": "他们正在教室里上课。",
        "py": "Tāmen zhèngzài jiàoshì lǐ shàngkè.",
        "vn": "Họ đang học trong lớp học."
      },
      {
        "zh": "正在下大雨，我不能出去。",
        "py": "Zhèngzài xià dàyǔ, wǒ bùnéng chūqù.",
        "vn": "Trời đang mưa to, tôi không thể ra ngoài. (lưu ý: không dùng 正在 với động từ trạng thái như 知道/认识/喜欢/爱)"
      }
    ],
    "hanzi": [
      {
        "c": "正",
        "p": "zhèng",
        "type": "独体字 · Chữ đơn",
        "st": 5,
        "ord": "一→丨→一→乛→一",
        "rad": "止 (chỉ)",
        "mean": "đúng, chính",
        "tip": "Một nét ngang (mốc chuẩn) trên chữ 止 (dừng đúng chỗ) → nghĩa \"ĐÚNG, CHÍNH\".",
        "cf": "政 (zhèng – \"chính trị\")",
        "w": "正在 / 正好 / 正常"
      },
      {
        "c": "在",
        "p": "zài",
        "type": "半包围 · Bán bao",
        "st": 6,
        "ord": "土 → 才 bao ngoài",
        "rad": "土 (thổ – đất)",
        "mean": "ở, đang",
        "tip": "Đã học nhiều lần — chỉ vị trí/trạng thái đang diễn ra.",
        "cf": "再 (zài – \"lại\")",
        "w": "正在 / 在家 / 现在"
      }
    ],
    "colloFull": [
      {
        "zh": "正在上课",
        "py": "zhèngzài shàngkè",
        "vn": "đang trong giờ học"
      },
      {
        "zh": "正在吃饭",
        "py": "zhèngzài chī fàn",
        "vn": "đang ăn cơm"
      },
      {
        "zh": "正在工作",
        "py": "zhèngzài gōngzuò",
        "vn": "đang làm việc"
      },
      {
        "zh": "正在洗",
        "py": "zhèngzài xǐ",
        "vn": "đang rửa"
      }
    ],
    "patterns": [
      {
        "s": "正在 + động từ",
        "m": "Đang làm gì: 他正在上课"
      },
      {
        "s": "正在 (ngay lúc này) mạnh hơn 在; cuối câu hay thêm 呢"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Thầy đang trong giờ dạy, bạn chờ một chút nhé.",
        "answer": "老师正在上课，你等一下吧。",
        "answerPy": "Lǎoshī zhèngzài shàngkè, nǐ děng yíxià ba.",
        "note": "正在 — ngay lúc này đang làm.",
        "pair": "正在 + V"
      },
      {
        "promptLang": "vi",
        "prompt": "Anh trai tôi đang giặt quần áo.",
        "answer": "我哥哥正在洗衣服呢。",
        "answerPy": "Wǒ gēge zhèngzài xǐ yīfu ne.",
        "note": "正在 đầu câu, 呢 cuối câu.",
        "pair": "正在……呢"
      }
    ]
  },
  {
    "n": 8,
    "zh": "手机",
    "py": "shǒujī",
    "pos": "Danh từ",
    "vn": "điện thoại di động",
    "hv": "thủ cơ",
    "em": "📱",
    "lesson": 4,
    "ex_zh": "手机在桌子上呢。",
    "ex_py": "Shǒujī zài zhuōzi shang ne.",
    "ex_vn": "Điện thoại ở trên bàn kìa.",
    "exList": [
      {
        "zh": "手机在桌子上呢。",
        "py": "Shǒujī zài zhuōzi shang ne.",
        "vn": "Điện thoại ở trên bàn kìa."
      },
      {
        "zh": "我的手机没电了。",
        "py": "Wǒ de shǒujī méi diàn le.",
        "vn": "Điện thoại của tôi hết pin rồi. (没电了 — hết pin rồi)"
      },
      {
        "zh": "我的手机快没电了，我要去充电。",
        "py": "Wǒ de shǒujī kuài méi diàn le, wǒ yào qù chōngdiàn.",
        "vn": "Điện thoại của tôi sắp hết pin rồi, tôi phải đi sạc. (充电 — sạc pin)"
      }
    ],
    "hanzi": [
      {
        "c": "手",
        "p": "shǒu",
        "type": "独体字 · Tượng hình",
        "st": 4,
        "ord": "丿→一→𠃌→丿",
        "rad": "手 (thủ – tự thành bộ)",
        "mean": "tay",
        "tip": "Hình bàn tay xoè năm ngón cách điệu → \"TAY\". Sẽ học kỹ hơn ở Bài 13.",
        "cf": "毛 (máo – \"lông\")",
        "w": "手机 / 手表 / 洗手"
      },
      {
        "c": "机",
        "p": "jī",
        "type": "左右结构 · Trái-phải",
        "st": 6,
        "ord": "木 (mộc) trái → 几 (kỷ) phải",
        "rad": "木 (mộc – cây/gỗ)",
        "mean": "máy móc",
        "tip": "Bộ 木 (gỗ) — máy móc xưa làm từ khung gỗ → nghĩa mở rộng \"MÁY\".",
        "cf": "几 (jǐ – \"mấy\")",
        "w": "手机 / 飞机 / 机场"
      }
    ],
    "colloFull": [
      {
        "zh": "我的手机",
        "py": "wǒ de shǒujī",
        "vn": "điện thoại của tôi"
      },
      {
        "zh": "买手机",
        "py": "mǎi shǒujī",
        "vn": "mua điện thoại"
      },
      {
        "zh": "新手机",
        "py": "xīn shǒujī",
        "vn": "điện thoại mới"
      },
      {
        "zh": "手机在哪儿",
        "py": "shǒujī zài nǎr",
        "vn": "điện thoại ở đâu"
      }
    ],
    "patterns": [
      {
        "s": "một + 个 + 手机",
        "m": "Lượng từ của 手机 là 个"
      },
      {
        "s": "手 + 机",
        "m": "Cái máy (机) cầm trên tay (手)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Điện thoại của tôi đâu rồi? Tôi chưa tìm thấy.",
        "answer": "我的手机在哪儿？我没找到。",
        "answerPy": "Wǒ de shǒujī zài nǎr? Wǒ méi zhǎodào.",
        "note": "Câu có 哪儿 thì không thêm 吗.",
        "pair": "在哪儿？"
      },
      {
        "promptLang": "vi",
        "prompt": "Cái điện thoại mới này đắt quá, tôi không mua.",
        "answer": "这个新手机太贵了，我不买。",
        "answerPy": "Zhège xīn shǒujī tài guì le, wǒ bù mǎi.",
        "note": "太……了 nói mức độ vượt quá.",
        "pair": "太……了"
      }
    ]
  },
  {
    "n": 9,
    "zh": "洗",
    "py": "xǐ",
    "pos": "Động từ",
    "vn": "rửa, giặt",
    "hv": "tẩy",
    "em": "🧼",
    "lesson": 4,
    "ex_zh": "那件衣服我帮你洗了。",
    "ex_py": "Nà jiàn yīfu wǒ bāng nǐ xǐ le.",
    "ex_vn": "Chiếc áo đó tớ giặt giúp bạn rồi.",
    "exList": [
      {
        "zh": "那件衣服我帮你洗了。",
        "py": "Nà jiàn yīfu wǒ bāng nǐ xǐ le.",
        "vn": "Chiếc áo đó tớ giặt giúp bạn rồi."
      },
      {
        "zh": "我每天都洗衣服。",
        "py": "Wǒ měitiān dōu xǐ yīfu.",
        "vn": "Ngày nào tôi cũng giặt quần áo. (洗衣服 — giặt quần áo)"
      },
      {
        "zh": "你能帮我洗一下这些碗吗？",
        "py": "Nǐ néng bāng wǒ xǐ yíxià zhèxiē wǎn ma?",
        "vn": "Bạn có thể giúp tôi rửa mấy cái bát này một chút không?"
      }
    ],
    "hanzi": [
      {
        "c": "洗",
        "p": "xǐ",
        "type": "左右结构 · Trái-phải",
        "st": 9,
        "ord": "氵(thủy) trái → 先 (tiên) phải",
        "rad": "氵(thủy – nước)",
        "mean": "rửa, giặt",
        "tip": "Bộ 氵(nước) → dùng nước để RỬA SẠCH đồ vật/quần áo.",
        "cf": "先 (xiān – \"trước\", thiếu bộ 氵)",
        "w": "洗手 / 洗衣服 / 洗澡"
      }
    ],
    "colloFull": [
      {
        "zh": "洗手",
        "py": "xǐ shǒu",
        "vn": "rửa tay"
      },
      {
        "zh": "洗衣服",
        "py": "xǐ yīfu",
        "vn": "giặt quần áo"
      },
      {
        "zh": "洗西瓜",
        "py": "xǐ xīguā",
        "vn": "rửa dưa hấu"
      },
      {
        "zh": "洗完了",
        "py": "xǐ wán le",
        "vn": "rửa xong rồi"
      }
    ],
    "patterns": [
      {
        "s": "洗 + đồ vật",
        "m": "Rửa, giặt cái gì: 洗衣服"
      },
      {
        "s": "洗 có bộ 氵 (nước) — việc gì cũng cần nước"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Mẹ đang rửa dưa hấu.",
        "answer": "妈妈正在洗西瓜呢。",
        "answerPy": "Māma zhèngzài xǐ xīguā ne.",
        "note": "洗 có bộ 氵 — việc gì cũng cần nước.",
        "pair": "正在……呢"
      },
      {
        "promptLang": "vi",
        "prompt": "Tôi giặt xong quần áo rồi mới đi ngủ.",
        "answer": "我洗完衣服就去睡觉。",
        "answerPy": "Wǒ xǐwán yīfu jiù qù shuìjiào.",
        "note": "完 đứng SAU động từ, nói việc đã hết.",
        "pair": "V完……就……"
      }
    ]
  }
];

const wuData = [
  {img:'🥚',label:'鸡蛋',py:'jīdàn',letter:'A'},
  {img:'🍉',label:'西瓜',py:'xīguā',letter:'B'},
  {img:'📱',label:'手机',py:'shǒujī',letter:'C'},
  {img:'🧼',label:'洗',py:'xǐ',letter:'D'},
  {img:'👨',label:'哥哥',py:'gēge',letter:'E'},
  {img:'📖',label:'课',py:'kè',letter:'F'},
];

var dialogData = [
  {scene:'在家里 · Xem tivi hay học bài',
   preQuiz:[
     {q:'女的觉得看电视对什么有帮助？',opts:['学汉语','工作','睡觉'],ans:0},
     {q:'明天的课女的准备好了吗？',opts:['准备好了','还没准备','不知道'],ans:0},
   ],
   lines:[
     {sp:0,zh:'不要看电视了，明天上午还有汉语课呢。',py:'Bú yào kàn diànshì le, míngtiān shàngwǔ hái yǒu Hànyǔ kè ne.',vn:'Đừng xem tivi nữa, sáng mai còn có tiết học tiếng Trung đấy.'},
     {sp:1,zh:'看电视对学汉语有帮助。',py:'Kàn diànshì duì xué Hànyǔ yǒu bāngzhù.',vn:'Xem tivi có ích cho việc học tiếng Trung mà.'},
     {sp:0,zh:'明天的课你都准备好了吗？',py:'Míngtiān de kè nǐ dōu zhǔnbèi hǎo le ma?',vn:'Mấy tiết học ngày mai bạn đã chuẩn bị tốt hết chưa?'},
     {sp:1,zh:'都准备好了。',py:'Dōu zhǔnbèi hǎo le.',vn:'Tớ chuẩn bị tốt hết rồi.'},
   ]},
  {scene:'在医院 · Trong bệnh viện',
   preQuiz:[
     {q:'男的为什么让女的别看报纸？',opts:['医生说要多休息','太晚了','没有报纸'],ans:0},
     {q:'吃药后多长时间不能喝茶？',opts:['一个小时','两个小时','三个小时'],ans:1},
   ],
   lines:[
     {sp:0,zh:'别看报纸了，医生说你要多休息。',py:'Bié kàn bàozhǐ le, yīshēng shuō nǐ yào duō xiūxi.',vn:'Đừng đọc báo nữa, bác sĩ bảo bạn cần nghỉ ngơi nhiều đấy.'},
     {sp:1,zh:'好，不看了。给我一杯茶吧。',py:'Hǎo, bú kàn le. Gěi wǒ yì bēi chá ba.',vn:'Được rồi, không đọc nữa. Cho tôi một cốc trà đi.'},
     {sp:0,zh:'医生说吃药后两个小时不要喝茶。',py:'Yīshēng shuō chī yào hòu liǎng ge xiǎoshí bú yào hē chá.',vn:'Bác sĩ bảo sau khi uống thuốc hai tiếng thì không được uống trà.'},
     {sp:1,zh:'医生还说什么了？',py:'Yīshēng hái shuō shénme le?',vn:'Bác sĩ còn dặn gì nữa không?'},
   ]},
  {scene:'在家里 · Đi chợ về',
   preQuiz:[
     {q:'女的买这么多东西是为了什么？',opts:['哥哥中午回来吃饭','过节','招待客人'],ans:0},
     {q:'女的买了哪些东西？',opts:['羊肉、鸡蛋、面条、西瓜','只有水果','只有肉'],ans:0},
     {q:'妈妈在做什么？',opts:['正在准备午饭','在睡觉','出去了'],ans:0},
   ],
   lines:[
     {sp:0,zh:'你怎么买了这么多东西呀？',py:'Nǐ zěnme mǎile zhème duō dōngxi ya?',vn:'Sao bạn mua nhiều đồ thế này?'},
     {sp:1,zh:'哥哥今天中午回来吃饭。',py:'Gēge jīntiān zhōngwǔ huílái chīfàn.',vn:'Trưa nay anh trai về ăn cơm.'},
     {sp:0,zh:'我看看买什么了。羊肉、鸡蛋、面条、西瓜，真不少！妈妈呢？',py:'Wǒ kànkan mǎi shénme le. Yángròu, jīdàn, miàntiáo, xīguā, zhēn bù shǎo! Māma ne?',vn:'Để tớ xem mua những gì nào. Thịt dê, trứng gà, mì sợi, dưa hấu, thật không ít nha! Mẹ đâu rồi?'},
     {sp:1,zh:'正在准备午饭呢。',py:'Zhèngzài zhǔnbèi wǔfàn ne.',vn:'Mẹ đang chuẩn bị bữa trưa kìa.'},
   ]},
  {scene:'在家里 · Tìm điện thoại',
   preQuiz:[
     {q:'女的在找什么？',opts:['手机','钱包','钥匙'],ans:0},
     {q:'手机是什么颜色的？',opts:['白色','黑色','红色'],ans:0},
     {q:'手机在哪儿？',opts:['桌子上，电脑旁边','床上','包里'],ans:0},
   ],
   lines:[
     {sp:0,zh:'你在找什么？',py:'Nǐ zài zhǎo shénme?',vn:'Bạn đang tìm gì thế?'},
     {sp:1,zh:'你看见我的手机了吗？白色的。',py:'Nǐ kànjiàn wǒ de shǒujī le ma? Báisè de.',vn:'Bạn có thấy điện thoại của tớ đâu không? Cái màu trắng ấy.'},
     {sp:0,zh:'别找了，手机在桌子上呢，电脑旁边。',py:'Bié zhǎo le, shǒujī zài zhuōzi shang ne, diànnǎo pángbiān.',vn:'Đừng tìm nữa, điện thoại ở trên bàn kìa, ngay bên cạnh máy tính.'},
     {sp:1,zh:'你看见我的衣服了吗？红色的那件。',py:'Nǐ kànjiàn wǒ de yīfu le ma? Hóngsè de nà jiàn.',vn:'Thế bạn có nhìn thấy quần áo của tớ đâu không? Bộ màu đỏ ấy.'},
   ]},
];

// ══════════════════════════════════════════
// PHẦN 1 · GHÉP TỪ (Collocation) — ghép hai nửa thành cụm dùng được ngay
// Không copy câu bài khoá — chỉ ghép CỤM TỪ để phản xạ collocation.
// ══════════════════════════════════════════
var matchData = [
  {left:'洗',right:'衣服'},
  {left:'上',right:'汉语课'},
  {left:'多吃鸡蛋',right:'对身体好'},
  {left:'给哥哥',right:'打电话'},
  {left:'爸爸正在',right:'开车呢'},
  {left:'买了一个大',right:'西瓜'},
  {left:'我的新手机',right:'是白色的'},
];

// ══════════════════════════════════════════
// PHẦN 2 · NGHE — tình huống MỚI: ở phòng tập gym.
// Ôn lại 有点儿(Bài 5), 已经(Bài 4/9), 一下(Bài 3), 完(Bài 9).
// ══════════════════════════════════════════
var listenData = {
  type: 'workbook',
  audio: '/audio/bai-10/listen-full.mp3',
  dictation: [
    {num:1, lines:[
      {pre:'看电影对', blank:'学习汉语有帮助', post:'。', py:'Kàn diànyǐng duì xuéxí Hànyǔ yǒu bāngzhù.', vn:'Xem phim có ích cho việc học tiếng Trung.'},
    ]},
    {num:2, lines:[
      {pre:'妈妈，', blank:'别走了，我们休息休息吧', post:'。', py:'Māma, bié zǒu le, wǒmen xiūxi xiūxi ba.', vn:'Mẹ ơi, đừng đi vội, chúng ta nghỉ ngơi một chút đi.'},
    ]},
    {num:3, lines:[
      {pre:'妈妈正在', blank:'准备午饭呢', post:'。', py:'Māma zhèngzài zhǔnbèi wǔfàn ne.', vn:'Mẹ đang chuẩn bị bữa trưa.'},
    ]},
    {num:4, lines:[
      {pre:'张老师的手机', blank:'在桌子上呢', post:'。', py:'Zhāng lǎoshī de shǒujī zài zhuōzi shang ne.', vn:'Điện thoại của cô Trương ở trên bàn kìa.'},
    ]},
    {num:5, lines:[
      {pre:'你的衣服我', blank:'帮你洗了', post:'。', py:'Nǐ de yīfu wǒ bāng nǐ xǐ le.', vn:'Quần áo của bạn tôi đã giặt giúp rồi.'},
    ]},
    {num:6, lines:[
      {speaker:'男', pre:'别看电视了，', blank:'长时间看电视对眼睛不好', post:'。', py:'Bié kàn diànshì le, chángshíjiān kàn diànshì duì yǎnjīng bù hǎo.', vn:'Đừng xem tivi nữa, xem lâu không tốt cho mắt.'},
      {speaker:'女', pre:'好的，我', blank:'去睡觉了', post:'。', py:'Hǎo de, wǒ qù shuìjiào le.', vn:'Được, tôi đi ngủ đây.'},
    ]},
    {num:7, lines:[
      {speaker:'女', pre:'明天的课你都', blank:'准备好了没有', post:'？', py:'Míngtiān de kè nǐ dōu zhǔnbèi hǎo le méiyǒu?', vn:'Bài học ngày mai bạn chuẩn bị xong hết chưa?'},
      {speaker:'男', pre:'还没有呢，', blank:'正在准备', post:'。', py:'Hái méiyǒu ne, zhèngzài zhǔnbèi.', vn:'Chưa xong, đang chuẩn bị.'},
    ]},
    {num:8, lines:[
      {speaker:'男', pre:'医生，这个药', blank:'怎么吃', post:'？', py:'Yīshēng, zhège yào zěnme chī?', vn:'Bác sĩ, thuốc này uống thế nào?'},
      {speaker:'女', pre:'饭后吃，', blank:'吃药以后两个小时不要喝茶', post:'。', py:'Fàn hòu chī, chī yào yǐhòu liǎng gè xiǎoshí bú yào hē chá.', vn:'Uống sau bữa ăn, sau khi uống thuốc 2 tiếng đừng uống trà.'},
    ]},
    {num:9, lines:[
      {speaker:'男', pre:'你怎么', blank:'买了这么多东西', post:'？', py:'Nǐ zěnme mǎile zhème duō dōngxi?', vn:'Sao bạn mua nhiều đồ thế?'},
      {speaker:'女', pre:'今天有朋友', blank:'来我家吃饭', post:'。', py:'Jīntiān yǒu péngyou lái wǒ jiā chīfàn.', vn:'Hôm nay có bạn đến nhà tôi ăn cơm.'},
    ]},
    {num:10, lines:[
      {speaker:'女', pre:'你看见我', blank:'那件红色的衣服了吗', post:'？', py:'Nǐ kànjiàn wǒ nà jiàn hóngsè de yīfu le ma?', vn:'Bạn có thấy cái áo màu đỏ của tôi không?'},
      {speaker:'男', pre:'我帮你洗了，', blank:'在外面呢', post:'。', py:'Wǒ bāng nǐ xǐ le, zài wàimian ne.', vn:'Tôi giặt giúp bạn rồi, đang phơi ngoài kia.'},
    ]},
  ],
  mc: [
    {num:11, options:['电视好看','他不想睡觉','他想学习汉语'], ans:2,
     explain:'女：大卫，不要看电视了，去睡觉吧。男：看电视对学习汉语有帮助，我再看一会儿。问：大卫为什么要看电视？ → 他想学习汉语。'},
    {num:12, options:['茶不好喝','他生病了','他吃药了'], ans:2,
     explain:'男：我想喝茶。女：医生说吃药后一个小时不要喝茶。问：男的为什么不能喝茶？ → 他吃药了。'},
    {num:13, options:['不知道','床上','桌子上'], ans:0,
     explain:'女：你看见我的手机了吗？我昨天晚上放在桌子上了。男：桌子上没有，你看看床上吧。问：女的的手机在哪儿？ → 不知道（男的只是建议去床上找找，并没有确认）。'},
    {num:14, options:['不太忙','不太累','想休息'], ans:1,
     explain:'男：过来喝杯水，休息一下吧。女：我不累。问：女的是什么意思？ → 不太累。'},
    {num:15, options:['没有米饭','吃完了','很快就可以吃饭'], ans:2,
     explain:'男：你别忙了，我不在这儿吃饭。女：菜很快就好了，吃了再走吧。问：女的是什么意思？ → 很快就可以吃饭。'},
  ],
};

// ══════════════════════════════════════════
// PHẦN 3a · ĐIỀN TỪ — mỗi câu một tình huống mới (别/不要……了 · 对 · 正在……呢 + từ mới bài 10, ôn bài trước)
// ══════════════════════════════════════════
var fillData = [
  {pre:'Thấy bạn cùng phòng gọi điện thoại đến khuya, bạn nói: “已经十二点了，别打电话',blank:'了',post:'，快睡觉吧。”',hint:'(nữa)',ans:'了',exp:'别 + động từ + tân ngữ + 了 = đừng … nữa (bảo dừng việc đang làm); 了 đứng cuối cụm.'},
  {pre:'Về nhà, bạn kể: “今天老师',blank:'对',post:'我们说：‘明天上午不上课。’”',hint:'(với — nói với ai)',ans:'对',exp:'Nói với ai = 对 + người + 说; 对 đứng trước 说, không nói 说对我们.'},
  {pre:'“你的新老师怎么样？” — “王老师',blank:'对',post:'学生非常好，我们都很喜欢她。”',hint:'(đối với)',ans:'对',exp:'对 + người + 很好 = tốt với ai; 对 đặt trước người, tính từ đứng sau cùng.'},
  {pre:'Bạn khuyên bạn mình: “每天看一点儿报纸，对你的汉语很有',blank:'帮助',post:'。”',hint:'(ích, giúp ích)',ans:'帮助',exp:'A 对 B (很)有帮助 = A có ích cho B; trước 帮助 phải có 有.'},
  {pre:'“喂，你现在能来公司吗？” — “不能，我',blank:'正在',post:'给学生上课呢。”',hint:'(đang)',ans:'正在',exp:'正在 + động từ (+ 呢) = đang làm việc gì ngay lúc đó; 正在 đứng trước động từ.'},
  {pre:'“哥哥在家吗？” — “在，他正在房间里准备考试',blank:'呢',post:'。”',hint:'(đấy — việc đang làm)',ans:'呢',exp:'正在……呢: 呢 cuối câu nhấn việc đang diễn ra; không dùng 了 ở đây.'},
  {pre:'Trời đang mưa, bạn dặn con: “外面下雨呢，',blank:'别',post:'去踢足球了。”',hint:'(đừng)',ans:'别',exp:'别 + động từ + 了 = thôi đừng (làm) nữa; 别 đứng ngay trước động từ.'},
  {pre:'“这是你的朋友吗？” — “不是，这是我',blank:'哥哥',post:'，他在机场工作。”',hint:'(anh trai)',ans:'哥哥',exp:'哥哥 = anh trai; nói 我哥哥 hay 我的哥哥 đều được.'},
  {pre:'早上我吃了两个',blank:'鸡蛋',post:'，喝了一杯牛奶。',hint:'(trứng gà)',ans:'鸡蛋',exp:'Lượng từ của 鸡蛋 là 个: 两个鸡蛋 (dùng 两, không dùng 二).'},
  {pre:'“天气太热了，我们买个',blank:'西瓜',post:'吧！” — “好啊，我最喜欢吃了。”',hint:'(dưa hấu)',ans:'西瓜',exp:'买个西瓜 = 买一个西瓜 (khẩu ngữ bỏ 一); rủ rê dùng 吧.'},
  {pre:'“你的',blank:'手机',post:'是白色的吗？” — “不是，是黑色的。”',hint:'(điện thoại di động)',ans:'手机',exp:'手机 = điện thoại di động; 白色的 / 黑色的 = cái màu trắng / cái màu đen.'},
  {pre:'Mẹ nhờ bạn: “你帮我',blank:'洗',post:'一下这些杯子，好吗？”',hint:'(rửa)',ans:'洗',exp:'洗 + 一下 + đồ vật = rửa giúp một chút; ……，好吗？ để nhờ lịch sự.'},
  {pre:'“明天下午你有',blank:'课',post:'吗？” — “没有，我上午去学校。”',hint:'(tiết học)',ans:'课',exp:'有课 = có tiết học; 上课 = vào học, 下课 = tan học.'},
];

// ══════════════════════════════════════════
// PHẦN 3b · SẮP XẾP — câu MỚI, dùng 别……了 / 对 / 正在……呢 (ôn 已经、完、的时候)
// ══════════════════════════════════════════
var sortData = [
  {words:['你','别','在','这儿','等','我','了','。'],ans:'你别在这儿等我了。',audio:'你别在这儿等我了。'},
  {words:['哥哥','正在','机场','接','朋友','呢','。'],ans:'哥哥正在机场接朋友呢。',audio:'哥哥正在机场接朋友呢。'},
  {words:['经常','游泳','对','身体','有','帮助','吗','？'],ans:'经常游泳对身体有帮助吗？',audio:'经常游泳对身体有帮助吗？'},
  {words:['爸爸','对','我','说','他','今天','不','回来','吃饭','了','。'],ans:'爸爸对我说他今天不回来吃饭了。',audio:'爸爸对我说他今天不回来吃饭了。'},
  {words:['你','要','的','西瓜','我','已经','买','回来','了','。'],ans:'你要的西瓜我已经买回来了。',audio:'你要的西瓜我已经买回来了。'},
  {words:['下课','以后','我们','一起','去','打篮球','吧','。'],ans:'下课以后我们一起去打篮球吧。',audio:'下课以后我们一起去打篮球吧。'},
  {words:['我','的','手机','是','哥哥','送','我','的','。'],ans:'我的手机是哥哥送我的。',audio:'我的手机是哥哥送我的。'},
  {words:['这','件','衣服','你','洗','完','了','吗','？'],ans:'这件衣服你洗完了吗？',audio:'这件衣服你洗完了吗？'},
];

// ══════════════════════════════════════════
// PHẦN 3c · SỬA LỖI SAI — lỗi học sinh Việt hay mắc
// (了 chen giữa 别 và động từ, 对 đặt cuối câu như “cho”, 很帮助, 说给, 正在……了, 别要, 二个, bổ ngữ sau tân ngữ, 很好对我)
// ══════════════════════════════════════════
var errorFixData = [
  {wrong:'你已经看了两个小时了，别看了电视。',
   opts:['你已经看了两个小时了，别看电视了。','你已经看了两个小时了，别了看电视。','你已经看了两个小时了，没看电视了。','你已经两个小时看了，别看电视了。'],ans:0,
   exp:'“Đừng … nữa” = 别 + động từ + tân ngữ + 了: 别看电视了; 了 không chen vào giữa, không dùng 没 để cấm.'},
  {wrong:'多吃水果对眼睛很帮助。',
   opts:['多吃水果给眼睛很有帮助。','多吃水果有帮助对眼睛。','多吃水果对眼睛很有帮助。','多吃水果对眼睛是很帮助。'],ans:2,
   exp:'“Có ích cho …” = 对 + đối tượng + (很)有帮助; không bỏ 有, không dùng 给, không đặt 对… ở cuối câu.'},
  {wrong:'医生说给我要多喝水。',
   opts:['医生说对我要多喝水。','医生对我说要多喝水。','医生对我说要喝水多。','医生对我说要很多喝水。'],ans:1,
   exp:'“Nói với tôi” = 对我说 (对 + người đứng TRƯỚC 说); “uống nhiều” = 多喝, 多 đứng trước động từ.'},
  {wrong:'“喂，你在做什么？” — “我正在吃饭了。”',
   opts:['“喂，你在做什么？” — “我正在了吃饭。”','“喂，你在做什么？” — “我吃饭正在呢。”','“喂，你在做什么？” — “我正在吃饭了呢。”','“喂，你在做什么？” — “我正在吃饭呢。”'],ans:3,
   exp:'Việc đang làm: 正在 + động từ + 呢; không dùng 了 (đã xong) với 正在, 正在 đứng trước động từ.'},
  {wrong:'他已经睡觉了，你别要给他打电话了。',
   opts:['他已经睡觉了，你别给他打电话了。','他已经睡觉了，你要别给他打电话了。','他已经睡觉了，你没给他打电话了。','他已经睡觉了，你别给他了打电话。'],ans:0,
   exp:'别 đã nghĩa là “đừng”, không ghép thành 别要; 给他 đứng trước 打电话, 了 ở cuối câu.'},
  {wrong:'哥哥买了二个西瓜。',
   opts:['哥哥买了两西瓜。','哥哥买了两件西瓜。','哥哥买了二西瓜。','哥哥买了两个西瓜。'],ans:3,
   exp:'Trước lượng từ dùng 两 (không dùng 二), và phải có lượng từ 个: 两个西瓜.'},
  {wrong:'我已经洗衣服完了。',
   opts:['我已经完洗衣服了。','我洗完衣服已经了。','我已经洗完衣服了。','我已经洗了完衣服。'],ans:2,
   exp:'Bổ ngữ kết quả 完 đứng ngay sau động từ, trước tân ngữ: 洗完衣服; 已经 đứng trước động từ, 了 ở cuối.'},
  {wrong:'我哥哥很好对我，经常帮我。',
   opts:['我哥哥对我很好，经常帮我。','我哥哥对很好我，经常帮我。','我哥哥给我很好，经常帮我。','我哥哥很对我好，经常帮我。'],ans:0,
   exp:'“Tốt với tôi” = 对我很好: 对 + người đứng trước, 很好 ở sau; không dịch từng chữ thành 很好对我.'},
];

// ══════════════════════════════════════════
// PHẦN 4 · LUYỆN NÓI 3 TẦNG (tầng 3 có ghi âm thật + chấm điểm AI)
// ══════════════════════════════════════════
// Luyen noi voi AI (mode 'ai-speak'): moi cau hoi la mot tinh huong doi song
// lien quan den bai khoa; hoc sinh tu ghi am cau tra loi, AI nghe lai (nhan
// dien giong noi tieng Trung) roi cham diem theo 4 tieu chi va nhan xet.
var speakingData = {
  mode: 'ai-speak',
  intro: 'Mỗi câu hỏi là một tình huống thật trong đời sống, dùng đúng từ vựng và mẫu câu của Bài 10. Bấm 🎙️ rồi trả lời bằng tiếng Trung — AI sẽ nghe, ghi lại câu bạn nói và chấm điểm theo Nội dung · Mẫu câu · Từ vựng · Độ trôi chảy. Nên tự trả lời trước rồi mới mở “Câu mẫu” để đối chiếu.',
  tasks: [
    {
      situation: 'Người nhà đang tìm điện thoại khắp nhà, bạn biết nó ở đâu. Hãy trả lời họ.',
      q_zh: '你知道我的手机在哪儿吗？我找了很长时间了。',
      q_py: 'Nǐ zhīdao wǒ de shǒujī zài nǎr ma? Wǒ zhǎole hěn cháng shíjiān le.',
      q_vn: 'Bạn có biết điện thoại của tôi ở đâu không? Tôi tìm lâu lắm rồi.',
      grammar: { label: '别找了，…在…呢', any: ['别', '呢'] },
      need: [
        { label: 'Dùng 别…了 để bảo đừng tìm nữa', any: ['别', '不要'] },
        { label: 'Nói vị trí đồ vật', any: ['桌子', '上', '旁边', '里', '下', '床', '包', '房间', '前面', '后面'] },
        { label: 'Nói rõ đồ vật (手机 / 电脑…)', any: ['手机', '电脑', '书', '衣服', '钱', '钥匙'] }
      ],
      bonus: { label: 'Thêm màu sắc để nhận ra (白色的)', any: ['白', '黑', '红', '色'] },
      vocab: ['别', '手机', '找'],
      minLen: 10,
      sample: '你别找了，你的手机在哥哥房间的椅子上呢，是白色的那个。',
      sample_py: 'Nǐ bié zhǎo le, nǐ de shǒujī zài gēge fángjiān de yǐzi shang ne, shì báisè de nàge.',
      sample_vn: 'Bạn đừng tìm nữa, điện thoại của bạn ở trên ghế trong phòng anh trai kìa, cái màu trắng ấy.',
      tip: '别 + động từ + 了 = đừng… nữa. 呢 ở cuối câu nhấn “đang ở đó kìa”.'
    },
    {
      situation: 'Bạn gọi điện về nhà, mẹ hỏi cả nhà đang làm gì.',
      q_zh: '现在你家里人正在做什么呢？',
      q_py: 'Xiànzài nǐ jiā li rén zhèngzài zuò shénme ne?',
      q_vn: 'Bây giờ người nhà bạn đang làm gì thế?',
      grammar: { label: '…正在 + động từ + 呢', any: ['正在', '在'] },
      need: [
        { label: 'Dùng 正在…呢', any: ['正在', '在'] },
        { label: 'Nói người đó là ai', any: ['妈妈', '爸爸', '哥哥', '姐姐', '弟弟', '妹妹', '丈夫', '妻子', '孩子', '我'] },
        { label: 'Nói việc đang làm', any: ['准备', '做饭', '看', '洗', '吃', '睡', '工作', '学习', '打电话', '上课', '开车'] }
      ],
      bonus: { label: 'Nói thêm bữa ăn hoặc đồ vật (午饭 / 衣服 / 报纸)', any: ['午饭', '晚饭', '衣服', '碗', '菜', '报纸', '电视'] },
      vocab: ['正在', '洗', '哥哥'],
      minLen: 10,
      sample: '爸爸正在看报纸呢，哥哥在洗衣服，我在给朋友打电话。',
      sample_py: 'Bàba zhèngzài kàn bàozhǐ ne, gēge zài xǐ yīfu, wǒ zài gěi péngyou dǎ diànhuà.',
      sample_vn: 'Bố đang đọc báo, anh trai đang giặt quần áo, còn tôi đang gọi điện cho bạn.',
      tip: '正在 + động từ + 呢 = đang làm gì đó ngay lúc này; câu sau có thể chỉ dùng 在.'
    },
    {
      situation: 'Bạn học hỏi bạn: làm gì thì có ích cho việc học tiếng Trung?',
      q_zh: '你觉得做什么对学汉语有帮助？为什么？',
      q_py: 'Nǐ juéde zuò shénme duì xué Hànyǔ yǒu bāngzhù? Wèi shénme?',
      q_vn: 'Bạn thấy làm gì thì có ích cho việc học tiếng Trung? Vì sao?',
      grammar: { label: '…对…有帮助', any: ['帮助'] },
      need: [
        { label: 'Dùng 对…有帮助', any: ['帮助'] },
        { label: 'Nêu việc cụ thể (看电影 / 听 / 读 / 写汉字…)', any: ['看', '听', '读', '写', '说', '电影', '电视', '报纸', '朋友'] },
        { label: 'Nêu lý do (因为…)', any: ['因为', '可以', '能', '所以'] }
      ],
      bonus: { label: 'Nói thêm về giờ học (课 / 准备)', any: ['课', '准备', '学习', '老师'] },
      vocab: ['帮助', '课'],
      minLen: 12,
      sample: '我觉得看中国电影对学汉语很有帮助，因为可以听中国人说汉语。',
      sample_py: 'Wǒ juéde kàn Zhōngguó diànyǐng duì xué Hànyǔ hěn yǒu bāngzhù, yīnwèi kěyǐ tīng Zhōngguórén shuō Hànyǔ.',
      sample_vn: 'Tôi thấy xem phim Trung Quốc rất có ích cho việc học tiếng Trung, vì được nghe người Trung Quốc nói tiếng Trung.',
      tip: 'A 对 B 有帮助 = A có ích cho B; muốn nói “rất có ích” thì dùng 很有帮助.'
    },
    {
      situation: 'Tối nay có khách đến nhà, bạn vừa đi chợ về. Người nhà hỏi bạn.',
      q_zh: '今天晚上谁来你家吃饭？你去商店买了什么？',
      q_py: 'Jīntiān wǎnshang shéi lái nǐ jiā chīfàn? Nǐ qù shāngdiàn mǎile shénme?',
      q_vn: 'Tối nay ai đến nhà bạn ăn cơm? Bạn đã đi cửa hàng mua những gì?',
      grammar: { label: '…来吃饭，所以我买了…', any: ['买', '来', '回来'] },
      need: [
        { label: 'Nói ai đến / về ăn cơm', any: ['哥哥', '姐姐', '弟弟', '妹妹', '爸爸', '妈妈', '朋友', '同学', '老师', '家里人'] },
        { label: 'Kể ít nhất hai món đã mua', any: ['鸡蛋', '西瓜', '羊肉', '面条', '牛奶', '水果', '菜', '鱼', '米', '苹果'] },
        { label: 'Dùng 买了', any: ['买'] }
      ],
      bonus: { label: 'Nói thêm ai đang nấu ăn (正在准备)', any: ['正在', '准备', '做饭'] },
      vocab: ['鸡蛋', '西瓜', '哥哥'],
      minLen: 12,
      sample: '今天晚上姐姐和她的朋友来我家吃饭，所以我买了羊肉、鸡蛋和一个大西瓜。',
      sample_py: 'Jīntiān wǎnshang jiějie hé tā de péngyou lái wǒ jiā chīfàn, suǒyǐ wǒ mǎile yángròu, jīdàn hé yí ge dà xīguā.',
      sample_vn: 'Tối nay chị gái và bạn của chị ấy đến nhà tôi ăn cơm, nên tôi mua thịt dê, trứng gà và một quả dưa hấu to.',
      tip: 'Liệt kê nhiều món dùng dấu 、 giữa các từ, trước món cuối dùng 和.'
    },
    {
      situation: 'Bố bạn bị ốm nhưng vẫn ngồi làm việc trước máy tính. Hãy nhắc bố.',
      q_zh: '爸爸生病了，现在还在电脑前面工作。你对他说什么？',
      q_py: 'Bàba shēngbìng le, xiànzài hái zài diànnǎo qiánmiàn gōngzuò. Nǐ duì tā shuō shénme?',
      q_vn: 'Bố bị ốm mà bây giờ vẫn làm việc trước máy tính. Bạn nói gì với bố?',
      grammar: { label: '别…了，医生让/说…', any: ['别', '不要'] },
      need: [
        { label: 'Dùng 别…了 / 不要…了', any: ['别', '不要'] },
        { label: 'Nhắc tới lời bác sĩ', any: ['医生', '大夫', '说', '让'] },
        { label: 'Đề nghị việc nên làm (休息 / 吃药 / 喝水)', any: ['休息', '吃药', '药', '喝', '睡'] }
      ],
      bonus: { label: 'Đề nghị giúp đỡ (我给你… / 我帮你…吧)', any: ['吧', '给', '帮'] },
      vocab: ['别', '洗'],
      minLen: 12,
      sample: '爸爸，别工作了，医生让你多休息。我给你洗个苹果吧。',
      sample_py: 'Bàba, bié gōngzuò le, yīshēng ràng nǐ duō xiūxi. Wǒ gěi nǐ xǐ ge píngguǒ ba.',
      sample_vn: 'Bố ơi, đừng làm việc nữa, bác sĩ bảo bố nghỉ ngơi nhiều vào. Con rửa cho bố quả táo nhé.',
      tip: '别…了 = đừng… nữa; 让 + người + động từ = bảo ai làm gì (bài 8).'
    }
  ]
};

// ══════════════════════════════════════════
// LUYỆN DỊCH — câu mới, dùng từ bài 10 + ôn bài trước
// ══════════════════════════════════════════
var translateData = [
  {vi:'Anh trai tôi đang làm việc ở công ty, chiều nay bạn gọi lại cho anh ấy nhé.', zh:'我哥哥正在公司工作呢，你下午再给他打电话吧。', py:'Wǒ gēge zhèngzài gōngsī gōngzuò ne, nǐ xiàwǔ zài gěi tā dǎ diànhuà ba.'},
  {vi:'Cảm ơn sự giúp đỡ của bạn, bây giờ tôi đã đọc hiểu câu này rồi.', zh:'谢谢你的帮助，现在我已经看懂这个题了。', py:'Xièxie nǐ de bāngzhù, xiànzài wǒ yǐjīng kàndǒng zhège tí le.'},
  {vi:'Đừng làm nữa, bạn đã làm việc cả buổi sáng rồi, nghỉ một chút đi.', zh:'别做了，你已经工作了一个上午了，休息一下吧。', py:'Bié zuò le, nǐ yǐjīng gōngzuòle yí ge shàngwǔ le, xiūxi yíxià ba.'},
  {vi:'Lúc bạn gọi điện cho tôi, tôi đang giặt quần áo.', zh:'你给我打电话的时候，我正在洗衣服呢。', py:'Nǐ gěi wǒ dǎ diànhuà de shíhou, wǒ zhèngzài xǐ yīfu ne.'},
];

// ══════════════════════════════════════════
// LUYỆN DỊCH (chiều Trung→Việt) — noi dung KHAC voi chieu Viet->Trung o tren
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:'Bạn Trung Quốc của tôi rất tốt với tôi, thường mời tôi đến nhà cô ấy ăn cơm.', zh:'我的中国朋友对我很好，经常请我去她家吃饭。', py:'Wǒ de Zhōngguó péngyou duì wǒ hěn hǎo, jīngcháng qǐng wǒ qù tā jiā chīfàn.'},
  {vi:'Quả dưa hấu này to thật, tối nay chúng ta cùng ăn nhé.', zh:'这个西瓜真大，我们晚上一起吃吧。', py:'Zhège xīguā zhēn dà, wǒmen wǎnshang yìqǐ chī ba.'},
  {vi:'Trong giờ học đừng xem điện thoại, cô giáo sẽ không vui đâu.', zh:'上课的时候别看手机，老师会不高兴的。', py:'Shàngkè de shíhou bié kàn shǒujī, lǎoshī huì bù gāoxìng de.'},
];
