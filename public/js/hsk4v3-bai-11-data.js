// HSK 4 (3.0) · Bai 11 — sinh boi tools/hsk4v3/gan.js tu tools/hsk4v3/bai-11/ (dung sua tay).
var vocabData = [
 {
  "n": 1,
  "zh": "老年",
  "py": "lǎonián",
  "pos": "Danh từ",
  "vn": "tuổi già, người cao tuổi",
  "hv": "lão niên",
  "em": "👴",
  "lesson": 1,
  "explain": [
   "Giai đoạn tuổi già của đời người (thường từ 60 tuổi trở lên); hay đứng trước danh từ khác: 老年人, 老年班, 老年大学."
  ],
  "usage": "老年人 (người cao tuổi) · 老年班 (lớp cho người cao tuổi) · 老年大学 (trường đại học dành cho người cao tuổi).",
  "collo": [
   "老年人",
   "老年班",
   "老年大学",
   "老年生活"
  ],
  "colloFull": [
   {
    "zh": "老年人",
    "py": "Lǎoniánrén",
    "vn": "người cao tuổi"
   },
   {
    "zh": "老年班",
    "py": "Lǎoniánbān",
    "vn": "lớp học cho người cao tuổi"
   },
   {
    "zh": "老年大学",
    "py": "Lǎonián dàxué",
    "vn": "trường đại học người cao tuổi"
   },
   {
    "zh": "老年生活",
    "py": "Lǎonián shēnghuó",
    "vn": "cuộc sống tuổi già"
   }
  ],
  "patterns": [
   {
    "s": "老年 + N",
    "m": "老年人 / 老年班 / 老年生活 — thường làm định ngữ, không thêm 的"
   },
   {
    "s": "老年 ↔ 青年 / 中年",
    "m": "tuổi già ↔ thanh niên / trung niên"
   }
  ],
  "ex_zh": "这里的老年人真不少。",
  "ex_py": "Zhèli de lǎoniánrén zhēn bùshǎo.",
  "ex_vn": "Người cao tuổi ở đây đông thật.",
  "exList": [
   {
    "zh": "这里的老年人真不少。",
    "py": "Zhèli de lǎoniánrén zhēn bùshǎo.",
    "vn": "Người cao tuổi ở đây đông thật."
   },
   {
    "zh": "我奶奶退休以后，每周都去老年大学上课。",
    "py": "Wǒ nǎinai tuìxiū yǐhòu, měi zhōu dōu qù lǎonián dàxué shàngkè.",
    "vn": "Bà tôi sau khi nghỉ hưu, tuần nào cũng đi học ở trường đại học người cao tuổi."
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
    "prompt": "Người cao tuổi ở khu này, có người đi dạo, có người đánh Thái Cực quyền.",
    "answer": "这个小区的老年人，有的散步，有的打太极拳。",
    "answerPy": "Zhège xiǎoqū de lǎoniánrén, yǒude sànbù, yǒude dǎ Tàijíquán.",
    "note": "Ôn 有的……，有的…… (HSK 3).",
    "pair": "有的……，有的……"
   },
   {
    "promptLang": "vi",
    "prompt": "Cùng với cuộc sống ngày càng tốt, cuộc sống của người cao tuổi cũng ngày càng phong phú.",
    "answer": "随着生活越来越好，老年人的生活也越来越丰富。",
    "answerPy": "Suízhe shēnghuó yuèláiyuè hǎo, lǎoniánrén de shēnghuó yě yuèláiyuè fēngfù.",
    "note": "Ôn 随着 (Bài 1 · điểm 3).",
    "pair": "随着……，……也越来越……"
   }
  ]
 },
 {
  "n": 2,
  "zh": "散步",
  "py": "sànbù",
  "pos": "Động từ",
  "vn": "đi dạo, tản bộ",
  "hv": "tản bộ",
  "em": "🚶",
  "lesson": 1,
  "explain": [
   "Đi bộ thong thả để thư giãn, không có mục đích đến nơi nào cụ thể.",
   "Là động từ li hợp (散 + 步): có thể tách ra — 散散步, 散了一会儿步."
  ],
  "usage": "去公园散步 · 散散步 · 饭后散步 · 散了一会儿步.",
  "collo": [
   "去公园散步",
   "散散步",
   "饭后散步",
   "散了一会儿步"
  ],
  "colloFull": [
   {
    "zh": "去公园散步",
    "py": "Qù gōngyuán sànbù",
    "vn": "đi dạo công viên"
   },
   {
    "zh": "散散步",
    "py": "Sàn sànbù",
    "vn": "đi dạo một chút"
   },
   {
    "zh": "饭后散步",
    "py": "Fàn hòu sànbù",
    "vn": "đi dạo sau bữa ăn"
   },
   {
    "zh": "散了一会儿步",
    "py": "Sàn le yíhuìr bù",
    "vn": "đi dạo một lúc"
   }
  ],
  "patterns": [
   {
    "s": "散散步 / 散一会儿步",
    "m": "Li hợp: lặp lại hoặc chèn thời lượng vào giữa"
   },
   {
    "s": "✗ 散步公园 → ✓ 在公园散步",
    "m": "散步 không mang tân ngữ chỉ nơi chốn"
   }
  ],
  "ex_zh": "李文和白家月在公园里散步聊天儿。",
  "ex_py": "Lǐ Wén hé Bái Jiāyuè zài gōngyuán lǐ sànbù liáotiānr.",
  "ex_vn": "Lý Văn và Bạch Gia Nguyệt vừa đi dạo trong công viên vừa trò chuyện.",
  "exList": [
   {
    "zh": "李文和白家月在公园里散步聊天儿。",
    "py": "Lǐ Wén hé Bái Jiāyuè zài gōngyuán lǐ sànbù liáotiānr.",
    "vn": "Lý Văn và Bạch Gia Nguyệt vừa đi dạo trong công viên vừa trò chuyện."
   },
   {
    "zh": "晚饭后出去散散步，对身体有好处。",
    "py": "Wǎnfàn hòu chūqu sàn sànbù, duì shēntǐ yǒu hǎochù.",
    "vn": "Ăn tối xong ra ngoài đi dạo một chút, tốt cho sức khỏe."
   }
  ],
  "hanzi": [
   {
    "c": "散",
    "p": "sàn",
    "type": "左右结构 · Trái-phải",
    "st": 12,
    "ord": "⺩(biến thể) trái → 攵 (phốc) phải",
    "rad": "攵 (phốc – hành động)",
    "mean": "phân tán, thong thả",
    "tip": "Bộ 攵(hành động) → hành động PHÂN TÁN, THONG THẢ (bước đi tự do), kết hợp 步(bước chân) thành 散步 = ĐI DẠO.",
    "cf": "撒 (sǎ – \"rắc, vãi\", bộ 扌\")",
    "w": "散步 / 散心 / 分散"
   },
   {
    "c": "步",
    "p": "bù",
    "type": "会意字 · Chữ hội ý",
    "st": 7,
    "ord": "止 → 丨 → 丿 → 丿 (phần dưới)",
    "rad": "止 (chỉ – bàn chân, dừng)",
    "mean": "bước; bước (giai đoạn)",
    "tip": "Hai bàn chân (止 trên, chân kia dưới) nối tiếp nhau = bước đi. Phần dưới KHÔNG phải 少: không có nét chấm 丶 bên phải — học sinh rất hay viết thừa nét này!",
    "cf": "少 shǎo (ít) — có nét chấm 丶 bên phải; 涉 shè (lội qua) — thêm 氵",
    "w": "一步一步 / 跑步 / 散步"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Ăn tối xong, ông bà tôi thường đi dạo bên hồ một lúc.",
    "answer": "吃完晚饭，我爷爷奶奶经常在湖边散一会儿步。",
    "answerPy": "Chīwán wǎnfàn, wǒ yéye nǎinai jīngcháng zài húbiān sàn yíhuìr bù.",
    "note": "散步 là động từ li hợp: chèn thời lượng vào giữa.",
    "pair": "散一会儿步"
   },
   {
    "promptLang": "vi",
    "prompt": "Cho dù trời rất lạnh, ông ngày nào cũng đi dạo.",
    "answer": "即使天气很冷，爷爷也每天都去散步。",
    "answerPy": "Jíshǐ tiānqì hěn lěng, yéye yě měitiān dōu qù sànbù.",
    "note": "Dùng 即使……也…… (Bài 11 · điểm 1).",
    "pair": "即使……也……"
   }
  ]
 },
 {
  "n": 3,
  "zh": "丰富",
  "py": "fēngfù",
  "pos": "Tính từ",
  "vn": "phong phú, dồi dào",
  "hv": "phong phú",
  "em": "🌈",
  "lesson": 1,
  "explain": [
   "Nhiều về số lượng, đa dạng về chủng loại: 生活丰富, 经验丰富, 内容丰富.",
   "Cũng dùng làm động từ: 丰富 + tân ngữ = làm cho phong phú (丰富我们的生活)."
  ],
  "usage": "生活很丰富 · 丰富的经验 · 丰富了不少 · 丰富……的生活.",
  "collo": [
   "生活丰富",
   "丰富的经验",
   "内容丰富",
   "丰富了不少"
  ],
  "colloFull": [
   {
    "zh": "生活丰富",
    "py": "Shēnghuó fēngfù",
    "vn": "cuộc sống phong phú"
   },
   {
    "zh": "丰富的经验",
    "py": "Fēngfù de jīngyàn",
    "vn": "kinh nghiệm dồi dào"
   },
   {
    "zh": "内容丰富",
    "py": "Nèiróng fēngfù",
    "vn": "nội dung phong phú"
   },
   {
    "zh": "丰富了不少",
    "py": "Fēngfù le bùshǎo",
    "vn": "phong phú hơn nhiều"
   }
  ],
  "patterns": [
   {
    "s": "N + 很 / 真 + 丰富",
    "m": "Tính từ làm vị ngữ"
   },
   {
    "s": "丰富 + 的 + 经验 / 知识 / 内容",
    "m": "Tính từ làm định ngữ"
   }
  ],
  "ex_zh": "他们的生活真丰富，让人羡慕。",
  "ex_py": "Tāmen de shēnghuó zhēn fēngfù, ràng rén xiànmù.",
  "ex_vn": "Cuộc sống của họ thật phong phú, khiến người ta ngưỡng mộ.",
  "exList": [
   {
    "zh": "他们的生活真丰富，让人羡慕。",
    "py": "Tāmen de shēnghuó zhēn fēngfù, ràng rén xiànmù.",
    "vn": "Cuộc sống của họ thật phong phú, khiến người ta ngưỡng mộ."
   },
   {
    "zh": "老王工作三十年了，有很丰富的工作经验。",
    "py": "Lǎo Wáng gōngzuò sānshí nián le, yǒu hěn fēngfù de gōngzuò jīngyàn.",
    "vn": "Ông Vương làm việc ba mươi năm rồi, có kinh nghiệm làm việc rất phong phú."
   }
  ],
  "hanzi": [
   {
    "c": "丰",
    "p": "fēng",
    "type": "独体字 · Chữ đơn (giản thể)",
    "st": 4,
    "ord": "nét liền",
    "rad": "一 (nhất)",
    "mean": "phong phú, nhiều",
    "tip": "Chữ giản thể tượng hình bó lúa đầy đặn → mùa màng SUNG TÚC, ĐẦY ĐỦ, mở rộng thành PHONG PHÚ.",
    "cf": "丰 dễ nhầm với 车 (chē – \"xe\")",
    "w": "丰富 / 丰收 / 丰满"
   },
   {
    "c": "富",
    "p": "fù",
    "type": "上下结构 · Trên-dưới",
    "st": 12,
    "ord": "宀 (miên) trên → 畐 dưới",
    "rad": "宀 (miên – mái nhà)",
    "mean": "giàu có",
    "tip": "Bộ mái nhà 宀 (nhà cửa đầy đủ) + 畐(đầy đủ, biểu âm) → NHÀ CỬA ĐẦY ĐỦ CỦA CẢI, mở rộng thành GIÀU CÓ.",
    "cf": "福 (fú – \"hạnh phúc\", bộ 礻\")",
    "w": "富 / 富人 / 丰富"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Hoạt động trong trường rất phong phú, có hát, nhảy múa, còn có cả đánh Thái Cực quyền.",
    "answer": "学校的活动很丰富，有唱歌、跳舞，还有打太极拳。",
    "answerPy": "Xuéxiào de huódòng hěn fēngfù, yǒu chànggē, tiàowǔ, hái yǒu dǎ Tàijíquán.",
    "note": "丰富 làm vị ngữ; ôn từ 活动 (Bài 1).",
    "pair": "N + 很丰富"
   },
   {
    "promptLang": "vi",
    "prompt": "Những thay đổi này làm cách lên lớp phong phú hơn không ít.",
    "answer": "这些变化让上课方式丰富了不少。",
    "answerPy": "Zhèxiē biànhuà ràng shàngkè fāngshì fēngfù le bùshǎo.",
    "note": "Câu trong bài tập tổng hợp; ôn câu kiêm ngữ 让 (HSK 3).",
    "pair": "让 + N + 丰富了不少"
   }
  ]
 },
 {
  "n": 4,
  "zh": "羡慕",
  "py": "xiànmù",
  "pos": "Động từ",
  "vn": "ngưỡng mộ, ước ao (được như người khác)",
  "hv": "tiện mộ",
  "em": "🤩",
  "lesson": 1,
  "explain": [
   "Thấy người khác có điều tốt mà mình cũng mong có được — gần như “ghen tị” nhưng mang nghĩa tích cực: “ước gì mình cũng được như thế”."
  ],
  "usage": "让人羡慕 · 羡慕 + ai · 太羡慕你了 · 羡慕 + ai + 的 + N.",
  "collo": [
   "让人羡慕",
   "羡慕别人",
   "太羡慕你了",
   "羡慕的眼光"
  ],
  "colloFull": [
   {
    "zh": "让人羡慕",
    "py": "Ràng rén xiànmù",
    "vn": "khiến người ta ngưỡng mộ"
   },
   {
    "zh": "羡慕别人",
    "py": "Xiànmù biérén",
    "vn": "ngưỡng mộ người khác"
   },
   {
    "zh": "太羡慕你了",
    "py": "Tài xiànmù nǐ le",
    "vn": "ngưỡng mộ bạn quá"
   },
   {
    "zh": "羡慕的眼光",
    "py": "Xiànmù de yǎnguāng",
    "vn": "ánh mắt ngưỡng mộ"
   }
  ],
  "patterns": [
   {
    "s": "让人 + 羡慕",
    "m": "Đáng ngưỡng mộ"
   },
   {
    "s": "羡慕 + ai (+ 的 + N)",
    "m": "Ngưỡng mộ ai / cái gì của ai"
   }
  ],
  "ex_zh": "他们的生活真丰富，让人羡慕。",
  "ex_py": "Tāmen de shēnghuó zhēn fēngfù, ràng rén xiànmù.",
  "ex_vn": "Cuộc sống của họ thật phong phú, khiến người ta ngưỡng mộ.",
  "exList": [
   {
    "zh": "他们的生活真丰富，让人羡慕。",
    "py": "Tāmen de shēnghuó zhēn fēngfù, ràng rén xiànmù.",
    "vn": "Cuộc sống của họ thật phong phú, khiến người ta ngưỡng mộ."
   },
   {
    "zh": "姐姐，我太羡慕你的工作了！从来不加班，而且工资高。",
    "py": "Jiějie, wǒ tài xiànmù nǐ de gōngzuò le! Cónglái bù jiābān, érqiě gōngzī gāo.",
    "vn": "Chị ơi, em ngưỡng mộ công việc của chị quá! Chưa bao giờ phải tăng ca, mà lương lại cao."
   }
  ],
  "hanzi": [
   {
    "c": "羡",
    "p": "xiàn",
    "type": "形声字 · Chữ hình thanh",
    "st": 12,
    "ord": "⺶ (羊 biến thể) → 次",
    "rad": "羊 (dương – con dê)",
    "mean": "ngưỡng mộ, thèm muốn (được như người khác)",
    "tip": "Thấy món thịt dê (⺶) ngon của người khác mà thèm chảy nước miếng (次 vốn là hình người há miệng chảy nước dãi) → thèm muốn, ước ao → 羡慕.",
    "cf": "美 měi (đẹp) — dưới là 大; 盖 gài (đậy) — dưới là 皿",
    "w": "羡慕 / 让人羡慕"
   },
   {
    "c": "慕",
    "p": "mù",
    "type": "上下结构 · Trên-dưới",
    "st": 14,
    "ord": "莫 trên → 心 dưới",
    "rad": "心 (tâm – trái tim)",
    "mean": "ngưỡng mộ, mến mộ",
    "tip": "Bộ tâm 心 (trong lòng) ở dưới + 莫 (không gì bằng) → trong lòng cho rằng KHÔNG GÌ BẰNG điều đó, mở rộng thành NGƯỠNG MỘ.",
    "cf": "幕 (mù – \"màn che\", cũng có 莫\" trên nhưng bộ 巾 dưới)",
    "w": "羡慕 / 慕名 / 爱慕"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Tôi rất ngưỡng mộ những người già học đến già như vậy.",
    "answer": "我很羡慕那些活到老学到老的老年人。",
    "answerPy": "Wǒ hěn xiànmù nàxiē huó dào lǎo xuédào lǎo de lǎoniánrén.",
    "note": "羡慕 + tân ngữ là người.",
    "pair": "羡慕 + ai"
   },
   {
    "promptLang": "vi",
    "prompt": "Bạn chưa bao giờ phải tăng ca, thật khiến người ta ngưỡng mộ.",
    "answer": "你从来不加班，真让人羡慕。",
    "answerPy": "Nǐ cónglái bù jiābān, zhēn ràng rén xiànmù.",
    "note": "Ôn 从来 (Bài 9 · điểm 4).",
    "pair": "从来不……"
   }
  ]
 },
 {
  "n": 5,
  "zh": "即使",
  "py": "jíshǐ",
  "pos": "Liên từ",
  "vn": "cho dù, dù cho, ngay cả khi",
  "hv": "tức sử",
  "em": "🛡️",
  "lesson": 1,
  "explain": [
   "Đứng ở vế trước của câu phức nhượng bộ, nêu một GIẢ THIẾT (thường bất lợi hoặc cực đoan); vế sau dùng 也 để nói kết quả không thay đổi."
  ],
  "usage": "即使……，也…… · 即使再忙，也…… · 即使年龄大了，也…….",
  "collo": [
   "即使……也……",
   "即使再忙",
   "即使下雨",
   "即使失败"
  ],
  "colloFull": [
   {
    "zh": "即使……也……",
    "py": "Jíshǐ…… yě……",
    "vn": "cho dù … cũng …"
   },
   {
    "zh": "即使再忙",
    "py": "Jíshǐ zài máng",
    "vn": "cho dù bận đến mấy"
   },
   {
    "zh": "即使下雨",
    "py": "Jíshǐ xiàyǔ",
    "vn": "cho dù trời mưa"
   },
   {
    "zh": "即使失败",
    "py": "Jíshǐ shībài",
    "vn": "cho dù thất bại"
   }
  ],
  "patterns": [
   {
    "s": "即使 + giả thiết，(Sub) + 也 + V",
    "m": "Cho dù … thì … vẫn …"
   },
   {
    "s": "即使 ≠ 虽然",
    "m": "虽然 nói sự thật; 即使 nói giả thiết"
   }
  ],
  "ex_zh": "有些人即使年龄大了，也坚持去老年班学习。",
  "ex_py": "Yǒuxiē rén jíshǐ niánlíng dà le, yě jiānchí qù lǎoniánbān xuéxí.",
  "ex_vn": "Có những người dù tuổi đã cao vẫn kiên trì đi học lớp người cao tuổi.",
  "exList": [
   {
    "zh": "有些人即使年龄大了，也坚持去老年班学习。",
    "py": "Yǒuxiē rén jíshǐ niánlíng dà le, yě jiānchí qù lǎoniánbān xuéxí.",
    "vn": "Có những người dù tuổi đã cao vẫn kiên trì đi học lớp người cao tuổi."
   },
   {
    "zh": "即使明天下大雨，我们也会按时出发。",
    "py": "Jíshǐ míngtiān xià dàyǔ, wǒmen yě huì ànshí chūfā.",
    "vn": "Cho dù ngày mai mưa to, chúng ta cũng sẽ xuất phát đúng giờ."
   }
  ],
  "hanzi": [
   {
    "c": "即",
    "p": "jí",
    "type": "左右结构 · Trái-phải",
    "st": 7,
    "ord": "皀 trái → 卩 phải",
    "rad": "卩 (tiết – quỳ gối)",
    "mean": "liền, ngay",
    "tip": "Hình tượng người 卩 quỳ NGAY bên mâm thức ăn 皀 để ăn → hành động xảy ra NGAY LẬP TỨC, mở rộng thành LIÊN TỪ nhượng bộ \"cho dù ngay cả khi\".",
    "cf": "既 (jì – \"đã\", hình gần giống nhưng nghĩa khác hẳn)",
    "w": "即使 / 立即 / 即将"
   },
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
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Cho dù mọi người đều nói rất khó, tôi cũng muốn thử một lần.",
    "answer": "即使大家都说很难，我也要试一试。",
    "answerPy": "Jíshǐ dàjiā dōu shuō hěn nán, wǒ yě yào shì yi shì.",
    "note": "Câu ví dụ của sách.",
    "pair": "即使……也……"
   },
   {
    "promptLang": "vi",
    "prompt": "Cho dù bận đến mấy, mỗi ngày anh ấy cũng đọc sách ít nhất nửa tiếng.",
    "answer": "即使再忙，他每天也至少看半个小时书。",
    "answerPy": "Jíshǐ zài máng, tā měitiān yě zhìshǎo kàn bàn gè xiǎoshí shū.",
    "note": "Ôn 至少 (Bài 5 · điểm 1).",
    "pair": "即使再……也……"
   }
  ]
 },
 {
  "n": 6,
  "zh": "活",
  "py": "huó",
  "pos": "Động từ / Tính từ / Danh từ",
  "vn": "sống; sinh động, linh hoạt; việc, công việc",
  "hv": "hoạt",
  "em": "🌱",
  "lesson": 1,
  "explain": [
   "Động từ (nghĩa trong bài): sống, còn sống — 活到老学到老 = sống đến già học đến già.",
   "Tính từ: linh hoạt, sinh động (他脑子很活); danh từ (khẩu ngữ): việc làm, công việc (干活 = làm việc)."
  ],
  "usage": "活到老学到老 · 活到一百岁 · 干活 (làm việc) · 活儿.",
  "collo": [
   "活到老学到老",
   "活到一百岁",
   "干活",
   "活儿很多"
  ],
  "colloFull": [
   {
    "zh": "活到老学到老",
    "py": "Huó dào lǎo xuédào lǎo",
    "vn": "sống đến già học đến già"
   },
   {
    "zh": "活到一百岁",
    "py": "Huó dào yìbǎi suì",
    "vn": "sống đến trăm tuổi"
   },
   {
    "zh": "干活",
    "py": "Gàn huó",
    "vn": "làm việc (chân tay)"
   },
   {
    "zh": "活儿很多",
    "py": "Huór hěn duō",
    "vn": "việc rất nhiều"
   }
  ],
  "patterns": [
   {
    "s": "活到 + tuổi / thời điểm",
    "m": "Sống đến …"
   },
   {
    "s": "干活 / 活儿",
    "m": "Nghĩa danh từ trong khẩu ngữ: công việc"
   }
  ],
  "ex_zh": "真是活到老学到老啊。",
  "ex_py": "Zhēnshì huó dào lǎo xuédào lǎo a.",
  "ex_vn": "Đúng là sống đến già học đến già.",
  "exList": [
   {
    "zh": "真是活到老学到老啊。",
    "py": "Zhēnshì huó dào lǎo xuédào lǎo a.",
    "vn": "Đúng là sống đến già học đến già."
   },
   {
    "zh": "我奶奶说，她想健健康康地活到一百岁。",
    "py": "Wǒ nǎinai shuō, tā xiǎng jiànjiàn-kāngkāng de huó dào yìbǎi suì.",
    "vn": "Bà tôi nói, bà muốn sống khỏe mạnh đến một trăm tuổi."
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
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Ông tôi thường nói: sống đến già học đến già.",
    "answer": "我爷爷常说：活到老，学到老。",
    "answerPy": "Wǒ yéye cháng shuō: huó dào lǎo, xuédào lǎo.",
    "note": "Thành ngữ là tên bài.",
    "pair": "活到老学到老"
   },
   {
    "promptLang": "vi",
    "prompt": "Hôm nay việc nhiều quá, tôi không làm xong được.",
    "answer": "今天活儿太多了，我干不完。",
    "answerPy": "Jīntiān huór tài duō le, wǒ gàn bu wán.",
    "note": "Ôn bổ ngữ khả năng V不完 (HSK 3).",
    "pair": "V + 不 + 完"
   }
  ]
 },
 {
  "n": 7,
  "zh": "继续",
  "py": "jìxù",
  "pos": "Động từ",
  "vn": "tiếp tục",
  "hv": "kế tục",
  "em": "▶️",
  "lesson": 1,
  "explain": [
   "Làm tiếp một việc đang làm, không dừng lại; sau 继续 thường là động từ hoặc cụm động từ."
  ],
  "usage": "继续学习 · 继续工作 · 继续加班 · 继续下去.",
  "collo": [
   "继续学习",
   "继续加班",
   "继续努力",
   "继续下去"
  ],
  "colloFull": [
   {
    "zh": "继续学习",
    "py": "Jìxù xuéxí",
    "vn": "tiếp tục học"
   },
   {
    "zh": "继续加班",
    "py": "Jìxù jiābān",
    "vn": "tiếp tục tăng ca"
   },
   {
    "zh": "继续努力",
    "py": "Jìxù nǔlì",
    "vn": "tiếp tục cố gắng"
   },
   {
    "zh": "继续下去",
    "py": "Jìxù xiàqu",
    "vn": "tiếp tục (làm) tiếp"
   }
  ],
  "patterns": [
   {
    "s": "继续 + V",
    "m": "Tiếp tục làm gì"
   },
   {
    "s": "V + 下去",
    "m": "Cũng có nghĩa “tiếp tục”: 说下去 = nói tiếp"
   }
  ],
  "ex_zh": "他总说，老年人也要继续学习。",
  "ex_py": "Tā zǒng shuō, lǎoniánrén yě yào jìxù xuéxí.",
  "ex_vn": "Ông luôn nói, người cao tuổi cũng phải tiếp tục học tập.",
  "exList": [
   {
    "zh": "他总说，老年人也要继续学习。",
    "py": "Tā zǒng shuō, lǎoniánrén yě yào jìxù xuéxí.",
    "vn": "Ông luôn nói, người cao tuổi cũng phải tiếp tục học tập."
   },
   {
    "zh": "A：你们还要继续加班吗？B：对，今天必须要把这些货全部发出去。",
    "py": "A: nǐmen hái yào jìxù jiābān ma? B: duì, jīntiān bìxū yào bǎ zhèxiē huò quánbù fāchū qù.",
    "vn": "A: Các anh còn phải tiếp tục tăng ca à? B: Đúng, hôm nay phải gửi hết chỗ hàng này đi."
   }
  ],
  "hanzi": [
   {
    "c": "继",
    "p": "jì",
    "type": "形声字 · Chữ hình thanh",
    "st": 10,
    "ord": "纟 → 米 → nét sổ gập (bao bên trái và bên dưới 米)",
    "rad": "纟 (mịch – sợi tơ)",
    "mean": "nối tiếp",
    "tip": "纟 (sợi tơ) + phần phải (chỉ âm): nối sợi tơ bị đứt cho liền lại → nối tiếp. 续 cũng có 纟 → 继续 = nối liền không đứt → tiếp tục.",
    "cf": "经 jīng (经过 – HSK3 Bài 15) — cũng bộ 纟 bên trái",
    "w": "继续 / 继续学习"
   },
   {
    "c": "续",
    "p": "xù",
    "type": "左右结构 · Trái-phải (giản thể)",
    "st": 11,
    "ord": "纟 (mịch) trái → 卖 phải",
    "rad": "纟 (mịch – sợi tơ)",
    "mean": "nối tiếp",
    "tip": "Bộ sợi 纟 (nối sợi tơ) + 卖 → NỐI TIẾP, kết hợp 继 thành 继续 = TIẾP TỤC.",
    "cf": "读 (dú – \"đọc\", bộ 讠 + 卖)",
    "w": "继续 / 连续 / 手续"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Tốt nghiệp đại học rồi, cô ấy muốn tiếp tục học thạc sĩ.",
    "answer": "大学毕业以后，她想继续读硕士。",
    "answerPy": "Dàxué bìyè yǐhòu, tā xiǎng jìxù dú shuòshì.",
    "note": "Ôn từ 硕士 (Bài 1).",
    "pair": "继续 + V"
   },
   {
    "promptLang": "vi",
    "prompt": "Cho dù về hưu rồi, ông vẫn tiếp tục học vẽ.",
    "answer": "即使退休了，爷爷也继续学画画儿。",
    "answerPy": "Jíshǐ tuìxiū le, yéye yě jìxù xué huà huàr.",
    "note": "即使……也…… (Bài 11 · điểm 1).",
    "pair": "即使……也继续……"
   }
  ]
 },
 {
  "n": 8,
  "zh": "网友",
  "py": "wǎngyǒu",
  "pos": "Danh từ",
  "vn": "bạn trên mạng, cư dân mạng",
  "hv": "võng hữu",
  "em": "💻",
  "lesson": 1,
  "explain": [
   "Người quen biết qua mạng Internet; cũng dùng để gọi chung người dùng mạng (cư dân mạng)."
  ],
  "usage": "和网友聊天儿 · 很多网友认为…… · 网友们.",
  "collo": [
   "和网友聊天儿",
   "网友们",
   "很多网友",
   "认识网友"
  ],
  "colloFull": [
   {
    "zh": "和网友聊天儿",
    "py": "Hé wǎngyǒu liáotiānr",
    "vn": "trò chuyện với bạn trên mạng"
   },
   {
    "zh": "网友们",
    "py": "Wǎngyǒumen",
    "vn": "các bạn trên mạng"
   },
   {
    "zh": "很多网友",
    "py": "Hěn duō wǎngyǒu",
    "vn": "nhiều cư dân mạng"
   },
   {
    "zh": "认识网友",
    "py": "Rènshi wǎngyǒu",
    "vn": "quen bạn qua mạng"
   }
  ],
  "patterns": [
   {
    "s": "和 + 网友 + V",
    "m": "Làm gì với bạn trên mạng"
   }
  ],
  "ex_zh": "你看，我都七八十岁了，还上网和网友们聊天儿呢。",
  "ex_py": "Nǐ kàn, wǒ dōu qī bāshí suì le, hái shàngwǎng hé wǎngyǒumen liáotiānr ne.",
  "ex_vn": "Cháu xem, ông bảy tám mươi tuổi rồi mà còn lên mạng trò chuyện với bạn trên mạng đấy.",
  "exList": [
   {
    "zh": "你看，我都七八十岁了，还上网和网友们聊天儿呢。",
    "py": "Nǐ kàn, wǒ dōu qī bāshí suì le, hái shàngwǎng hé wǎngyǒumen liáotiānr ne.",
    "vn": "Cháu xem, ông bảy tám mươi tuổi rồi mà còn lên mạng trò chuyện với bạn trên mạng đấy."
   },
   {
    "zh": "很多网友在网上分享自己的学习经验。",
    "py": "Hěn duō wǎngyǒu zài wǎngshang fēnxiǎng zìjǐ de xuéxí jīngyàn.",
    "vn": "Nhiều cư dân mạng chia sẻ kinh nghiệm học tập của mình trên mạng."
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
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Ông tôi lên mạng tìm được không ít bạn cùng thích Thái Cực quyền.",
    "answer": "我爷爷在网上认识了不少喜欢太极拳的网友。",
    "answerPy": "Wǒ yéye zài wǎngshang rènshi le bùshǎo xǐhuan Tàijíquán de wǎngyǒu.",
    "note": "网友 = bạn quen qua mạng.",
    "pair": "认识网友"
   },
   {
    "promptLang": "vi",
    "prompt": "Nhiều cư dân mạng cho rằng không phải người già không muốn học, mà là không có cơ hội.",
    "answer": "很多网友认为，不是老年人不想学习，而是没有机会。",
    "answerPy": "Hěn duō wǎngyǒu rènwéi, bú shì lǎoniánrén bù xiǎng xuéxí, érshì méiyǒu jīhuì.",
    "note": "不是……而是…… (Bài 11 · điểm 3).",
    "pair": "不是……而是……"
   }
  ]
 },
 {
  "n": 9,
  "zh": "无聊",
  "py": "wúliáo",
  "pos": "Tính từ",
  "vn": "buồn chán, nhàm chán; vô vị",
  "hv": "vô liêu",
  "em": "🥱",
  "lesson": 1,
  "explain": [
   "(Người) thấy buồn chán vì không có gì làm; (việc) nhàm chán, không có ý nghĩa."
  ],
  "usage": "生活不无聊 · 觉得很无聊 · 一点儿都不无聊 · 无聊的电影.",
  "collo": [
   "觉得无聊",
   "一点儿都不无聊",
   "无聊的电影",
   "生活无聊"
  ],
  "colloFull": [
   {
    "zh": "觉得无聊",
    "py": "Juéde wúliáo",
    "vn": "thấy chán"
   },
   {
    "zh": "一点儿都不无聊",
    "py": "Yìdiǎnr dōu bù wúliáo",
    "vn": "chẳng chán chút nào"
   },
   {
    "zh": "无聊的电影",
    "py": "Wúliáo de diànyǐng",
    "vn": "bộ phim nhàm chán"
   },
   {
    "zh": "生活无聊",
    "py": "Shēnghuó wúliáo",
    "vn": "cuộc sống buồn tẻ"
   }
  ],
  "patterns": [
   {
    "s": "一点儿都不 + 无聊",
    "m": "Phủ định hoàn toàn: chẳng … chút nào (HSK 3)"
   }
  ],
  "ex_zh": "生活一点儿都不无聊。",
  "ex_py": "Shēnghuó yìdiǎnr dōu bù wúliáo.",
  "ex_vn": "Cuộc sống chẳng buồn chán chút nào.",
  "exList": [
   {
    "zh": "生活一点儿都不无聊。",
    "py": "Shēnghuó yìdiǎnr dōu bù wúliáo.",
    "vn": "Cuộc sống chẳng buồn chán chút nào."
   },
   {
    "zh": "周末一个人在家，我觉得特别无聊。",
    "py": "Zhōumò yí gè rén zài jiā, wǒ juéde tèbié wúliáo.",
    "vn": "Cuối tuần ở nhà một mình, tôi thấy chán vô cùng."
   }
  ],
  "hanzi": [
   {
    "c": "无",
    "p": "wú",
    "type": "独体字 · Chữ đơn (giản thể)",
    "st": 4,
    "ord": "一 → 一 → 丿 → 乚",
    "rad": "一 (nhất)",
    "mean": "không có",
    "tip": "Chữ giản thể của 無, nghĩa KHÔNG CÓ, kết hợp 法(cách) thành 无法 = KHÔNG CÓ CÁCH.",
    "cf": "天 (tiān – \"trời\", tự dạng gần giống)",
    "w": "无法 / 无论 / 无处不在"
   },
   {
    "c": "聊",
    "p": "liáo",
    "type": "左右结构 · Trái-phải",
    "st": 11,
    "ord": "耳 (nhĩ) trái → 卯 (mão) phải",
    "rad": "耳 (nhĩ – tai)",
    "mean": "chuyện phiếm, tán gẫu",
    "tip": "Bộ tai 耳(lắng nghe) + 卯 (biểu âm) → cùng LẮNG NGHE nhau TÁN GẪU; 无聊 = không có gì để TÁN GẪU/GIẢI TRÍ = NHÀM CHÁN.",
    "cf": "聊 dễ nhầm với 卿 (qīng – \"khanh tướng\", ít dùng)",
    "w": "无聊 / 聊天儿 / 闲聊"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Từ khi học đánh đàn piano, cuộc sống của bà chẳng buồn chán chút nào.",
    "answer": "自从学了弹钢琴，奶奶的生活一点儿都不无聊了。",
    "answerPy": "Zìcóng xué le tángāngqín, nǎinai de shēnghuó yìdiǎnr dōu bù wúliáo le.",
    "note": "Ôn 自从 + 一点儿都不 (HSK 3).",
    "pair": "一点儿都不无聊"
   },
   {
    "promptLang": "vi",
    "prompt": "Có gì đáng chán đâu? Chúng ta cùng đi dạo đi.",
    "answer": "有什么好无聊的？咱们一起去散散步吧。",
    "answerPy": "Yǒu shénme hǎo wúliáo de? Zánmen yìqǐ qù sàn sànbù ba.",
    "note": "Ôn 有什么好×的 (Bài 6 · điểm 2).",
    "pair": "有什么好……的"
   }
  ]
 },
 {
  "n": 10,
  "zh": "太极拳",
  "py": "Tàijíquán",
  "pos": "Danh từ riêng",
  "vn": "Thái Cực quyền",
  "hv": "Thái Cực quyền",
  "em": "🥋",
  "lesson": 1,
  "explain": [
   "Môn võ thuật truyền thống của Trung Quốc, động tác chậm, mềm mại; nhiều người cao tuổi tập buổi sáng ở công viên để rèn luyện sức khỏe."
  ],
  "usage": "打太极拳 (đánh / tập Thái Cực quyền) · 学太极拳.",
  "collo": [
   "打太极拳",
   "学太极拳",
   "太极拳班",
   "教太极拳"
  ],
  "colloFull": [
   {
    "zh": "打太极拳",
    "py": "Dǎ Tàijíquán",
    "vn": "đánh Thái Cực quyền"
   },
   {
    "zh": "学太极拳",
    "py": "Xué Tàijíquán",
    "vn": "học Thái Cực quyền"
   },
   {
    "zh": "太极拳班",
    "py": "Tàijíquán bān",
    "vn": "lớp Thái Cực quyền"
   },
   {
    "zh": "教太极拳",
    "py": "Jiào Tàijíquán",
    "vn": "dạy Thái Cực quyền"
   }
  ],
  "patterns": [
   {
    "s": "打 + 太极拳",
    "m": "Động từ đi kèm là 打 (không dùng 做 / 玩)"
   }
  ],
  "ex_zh": "住在附近的老年人都会来这儿，有的散步，有的唱歌、跳舞，还有的打太极拳。",
  "ex_py": "Zhù zài fùjìn de lǎoniánrén dōu huì lái zhèr, yǒude sànbù, yǒude chànggē, tiàowǔ, hái yǒude dǎ Tàijíquán.",
  "ex_vn": "Người già sống gần đây đều đến chỗ này, có người đi dạo, có người hát, nhảy múa, còn có người đánh Thái Cực quyền.",
  "exList": [
   {
    "zh": "住在附近的老年人都会来这儿，有的散步，有的唱歌、跳舞，还有的打太极拳。",
    "py": "Zhù zài fùjìn de lǎoniánrén dōu huì lái zhèr, yǒude sànbù, yǒude chànggē, tiàowǔ, hái yǒude dǎ Tàijíquán.",
    "vn": "Người già sống gần đây đều đến chỗ này, có người đi dạo, có người hát, nhảy múa, còn có người đánh Thái Cực quyền."
   },
   {
    "zh": "每天早上，公园里都有很多人在打太极拳。",
    "py": "Měitiān zǎoshang, gōngyuán lǐ dōu yǒu hěn duō rén zài dǎ Tàijíquán.",
    "vn": "Sáng nào trong công viên cũng có rất nhiều người đang tập Thái Cực quyền."
   }
  ],
  "hanzi": [
   {
    "c": "太",
    "p": "tài",
    "type": "独体字 · Chữ đơn",
    "st": 4,
    "ord": "大 → 丶(chấm) dưới",
    "rad": "大 (đại – to lớn)",
    "mean": "quá, thái",
    "tip": "To lớn 大 + thêm một chấm 丶bên dưới → \"THÁI\", ý mức độ cao/trang trọng; ghép với 太太 = cách gọi lịch sự người vợ.",
    "cf": "犬 (quǎn – \"con chó\")",
    "w": "太太 / 太大了"
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
   },
   {
    "c": "拳",
    "p": "quán",
    "type": "形声字 · Chữ hình thanh",
    "st": 10,
    "ord": "龹 → 手",
    "rad": "手 (thủ – tay)",
    "mean": "nắm đấm; quyền (môn võ)",
    "tip": "Bàn tay (手) cuộn tròn lại (龹 = cuộn) → nắm đấm → môn võ dùng nắm đấm → 太极拳.",
    "cf": "卷 juǎn (cuộn) — dưới là 㔾; 券 quàn (vé) — dưới là 刀",
    "w": "太极拳 / 打拳 / 拳头"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Ông tôi tập Thái Cực quyền mười mấy năm rồi.",
    "answer": "我爷爷打太极拳打了十几年了。",
    "answerPy": "Wǒ yéye dǎ Tàijíquán dǎ le shíjǐ nián le.",
    "note": "Ôn câu thời lượng lặp động từ (HSK 3): V + O + V + 了 + thời gian.",
    "pair": "打……打了……"
   },
   {
    "promptLang": "vi",
    "prompt": "Tập Thái Cực quyền một mặt rèn luyện thân thể, mặt khác còn quen được bạn mới.",
    "answer": "打太极拳一方面能锻炼身体，另一方面还能认识新朋友。",
    "answerPy": "Dǎ Tàijíquán yìfāngmiàn néng duànliàn shēntǐ, lìngyìfāngmiàn hái néng rènshi xīn péngyou.",
    "note": "Ôn 一方面……另一方面…… (Bài 1 · điểm 4).",
    "pair": "一方面……另一方面……"
   }
  ]
 },
 {
  "n": 11,
  "zh": "数字",
  "py": "shùzì",
  "pos": "Tính từ / Danh từ",
  "vn": "(kỹ thuật) số; con số, chữ số",
  "hv": "số tự",
  "em": "🔢",
  "lesson": 2,
  "explain": [
   "Tính từ (nghĩa trong bài): dùng công nghệ số, kỹ thuật số — 数字教室 (lớp học số), 数字社会 (xã hội số).",
   "Danh từ: con số, chữ số (1, 2, 3…)."
  ],
  "usage": "数字教室 · 数字社会 · 数字技术 · 记住这些数字.",
  "collo": [
   "数字教室",
   "数字社会",
   "数字技术",
   "一串数字"
  ],
  "colloFull": [
   {
    "zh": "数字教室",
    "py": "Shùzì jiàoshì",
    "vn": "lớp học số"
   },
   {
    "zh": "数字社会",
    "py": "Shùzì shèhuì",
    "vn": "xã hội số"
   },
   {
    "zh": "数字技术",
    "py": "Shùzì jìshù",
    "vn": "công nghệ số"
   },
   {
    "zh": "一串数字",
    "py": "Yí chuàn shùzì",
    "vn": "một dãy số"
   }
  ],
  "patterns": [
   {
    "s": "数字 + N",
    "m": "Làm định ngữ: 数字教室 / 数字社会"
   },
   {
    "s": "记 / 写 + 数字",
    "m": "Danh từ: con số"
   }
  ],
  "ex_zh": "家月，我们今天的课是在数字教室上的，感觉挺不一样的。",
  "ex_py": "Jiāyuè, wǒmen jīntiān de kè shì zài shùzì jiàoshì shàng de, gǎnjué tǐng bù yíyàng de.",
  "ex_vn": "Gia Nguyệt, hôm nay chúng mình học ở lớp học số, cảm giác khá khác.",
  "exList": [
   {
    "zh": "家月，我们今天的课是在数字教室上的，感觉挺不一样的。",
    "py": "Jiāyuè, wǒmen jīntiān de kè shì zài shùzì jiàoshì shàng de, gǎnjué tǐng bù yíyàng de.",
    "vn": "Gia Nguyệt, hôm nay chúng mình học ở lớp học số, cảm giác khá khác."
   },
   {
    "zh": "真是数字社会啊，我要的信息马上就查到了。",
    "py": "Zhēnshì shùzì shèhuì a, wǒ yào de xìnxī mǎshàng jiù chádào le.",
    "vn": "Đúng là xã hội số, thông tin tôi cần tra một cái là ra ngay."
   }
  ],
  "hanzi": [
   {
    "c": "数",
    "p": "shù",
    "type": "左右结构 · Trái-phải (giản thể)",
    "st": 13,
    "ord": "娄(biến thể) trái → 攵 (phốc) phải",
    "rad": "攵 (phốc – hành động)",
    "mean": "số, đếm",
    "tip": "Bộ 攵(hành động đếm) → hành động ĐẾM, kết hợp 字(chữ, ký hiệu) thành 数字 = CON SỐ (ký hiệu để đếm).",
    "cf": "数 khi đọc \"shǔ\" nghĩa là ĐẾM (数一数)",
    "w": "数字 / 数学 / 岁数"
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
    "prompt": "Lớp học số làm cách lên lớp phong phú hơn không ít.",
    "answer": "数字教室让上课方式丰富了不少。",
    "answerPy": "Shùzì jiàoshì ràng shàngkè fāngshì fēngfù le bùshǎo.",
    "note": "Ôn câu kiêm ngữ 使 / 让 (Bài 7 · điểm 4).",
    "pair": "让 + N + V"
   },
   {
    "promptLang": "vi",
    "prompt": "Đúng là xã hội số, có điện thoại thì cái gì cũng tra được.",
    "answer": "真是数字社会，有了手机，什么都能查到。",
    "answerPy": "Zhēnshì shùzì shèhuì, yǒu le shǒujī, shénme dōu néng chádào.",
    "note": "Ôn đại từ nghi vấn phiếm chỉ 什么都 (HSK 3).",
    "pair": "什么都能……"
   }
  ]
 },
 {
  "n": 12,
  "zh": "点名",
  "py": "diǎnmíng",
  "pos": "Động từ",
  "vn": "điểm danh",
  "hv": "điểm danh",
  "em": "📋",
  "lesson": 2,
  "explain": [
   "Gọi tên từng người để kiểm tra ai có mặt; cũng là động từ li hợp (点了名, 点完名)."
  ],
  "usage": "上课点名 · 拍照点名 · 在线上点名 · 点完名.",
  "collo": [
   "上课点名",
   "拍照点名",
   "线上点名",
   "点完名"
  ],
  "colloFull": [
   {
    "zh": "上课点名",
    "py": "Shàngkè diǎnmíng",
    "vn": "điểm danh trên lớp"
   },
   {
    "zh": "拍照点名",
    "py": "Pāizhào diǎnmíng",
    "vn": "chụp ảnh điểm danh"
   },
   {
    "zh": "线上点名",
    "py": "Xiànshàng diǎnmíng",
    "vn": "điểm danh trực tuyến"
   },
   {
    "zh": "点完名",
    "py": "Diǎn wán míng",
    "vn": "điểm danh xong"
   }
  ],
  "patterns": [
   {
    "s": "点完名 / 点了名",
    "m": "Li hợp: chèn bổ ngữ / 了 vào giữa"
   }
  ],
  "ex_zh": "数字教室可以拍照点名，教授在线上点名，不用像线下那样一个个叫名字。",
  "ex_py": "Shùzì jiàoshì kěyǐ pāizhào diǎnmíng, jiàoshòu zài xiànshàng diǎnmíng, búyòng xiàng xiànxià nàyàng yígègè jiào míngzi.",
  "ex_vn": "Lớp học số có thể chụp ảnh điểm danh, giáo sư điểm danh trên mạng, không cần gọi tên từng người như học trực tiếp.",
  "exList": [
   {
    "zh": "数字教室可以拍照点名，教授在线上点名，不用像线下那样一个个叫名字。",
    "py": "Shùzì jiàoshì kěyǐ pāizhào diǎnmíng, jiàoshòu zài xiànshàng diǎnmíng, búyòng xiàng xiànxià nàyàng yígègè jiào míngzi.",
    "vn": "Lớp học số có thể chụp ảnh điểm danh, giáo sư điểm danh trên mạng, không cần gọi tên từng người như học trực tiếp."
   },
   {
    "zh": "老师点完名，我们就开始上课了。",
    "py": "Lǎoshī diǎn wán míng, wǒmen jiù kāishǐ shàngkè le.",
    "vn": "Thầy điểm danh xong, chúng tôi bắt đầu vào học."
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
    "c": "名",
    "p": "míng",
    "type": "会意字 · Chữ hội ý",
    "st": 6,
    "ord": "夕 → 口",
    "rad": "口 (khẩu – miệng)",
    "mean": "tên; nổi tiếng",
    "tip": "夕 (buổi tối) + 口 (miệng): trời tối không nhìn rõ nhau nên phải gọi tên → tên. Ôn: 名字 (HSK1 Bài 2). 名人 = người có tên tuổi.",
    "cf": "各 gè — 夂 ở trên",
    "w": "名人 / 名字 / 书名"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Lúc thầy điểm danh, Lý Văn vẫn chưa đến.",
    "answer": "老师点名的时候，李文还没来呢。",
    "answerPy": "Lǎoshī diǎnmíng de shíhou, Lǐ Wén hái méi lái ne.",
    "note": "……的时候 + 还没……呢 (HSK 2–3).",
    "pair": "……的时候"
   },
   {
    "promptLang": "vi",
    "prompt": "Điểm danh bằng cách chụp ảnh rất tiết kiệm thời gian.",
    "answer": "拍照点名特别节约时间。",
    "answerPy": "Pāizhào diǎnmíng tèbié jiéyuē shíjiān.",
    "note": "Ôn từ 节约 (Bài 10).",
    "pair": "节约时间"
   }
  ]
 },
 {
  "n": 13,
  "zh": "教授",
  "py": "jiàoshòu",
  "pos": "Danh từ",
  "vn": "giáo sư",
  "hv": "giáo thụ",
  "em": "👨‍🏫",
  "lesson": 2,
  "explain": [
   "Chức danh cao nhất của giảng viên đại học; gọi kèm họ: 李教授, 王教授."
  ],
  "usage": "李教授 · 大学教授 · 当教授 · 请教授……",
  "collo": [
   "李教授",
   "大学教授",
   "请教教授",
   "当教授"
  ],
  "colloFull": [
   {
    "zh": "李教授",
    "py": "Lǐ jiàoshòu",
    "vn": "giáo sư Lý"
   },
   {
    "zh": "大学教授",
    "py": "Dàxué jiàoshòu",
    "vn": "giáo sư đại học"
   },
   {
    "zh": "请教教授",
    "py": "Qǐngjiào jiàoshòu",
    "vn": "thỉnh giáo giáo sư"
   },
   {
    "zh": "当教授",
    "py": "Dāng jiàoshòu",
    "vn": "làm giáo sư"
   }
  ],
  "patterns": [
   {
    "s": "Họ + 教授",
    "m": "Cách xưng hô lịch sự"
   },
   {
    "s": "⚠ 教授 = giáo sư",
    "m": "Không phải “người dạy” chung chung (đó là 老师 / 教师)"
   }
  ],
  "ex_zh": "教授在线上点名，不用像线下那样一个个叫名字。",
  "ex_py": "Jiàoshòu zài xiànshàng diǎnmíng, búyòng xiàng xiànxià nàyàng yígègè jiào míngzi.",
  "ex_vn": "Giáo sư điểm danh trực tuyến, không phải gọi tên từng người như học trực tiếp.",
  "exList": [
   {
    "zh": "教授在线上点名，不用像线下那样一个个叫名字。",
    "py": "Jiàoshòu zài xiànshàng diǎnmíng, búyòng xiàng xiànxià nàyàng yígègè jiào míngzi.",
    "vn": "Giáo sư điểm danh trực tuyến, không phải gọi tên từng người như học trực tiếp."
   },
   {
    "zh": "李教授不在北京，这个问题咱们可以和他在线上交流。",
    "py": "Lǐ jiàoshòu bú zài Běijīng, zhège wèntí zánmen kěyǐ hé tā zài xiànshàng jiāoliú.",
    "vn": "Giáo sư Lý không ở Bắc Kinh, vấn đề này chúng ta có thể trao đổi trực tuyến với ông ấy."
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
    "c": "授",
    "p": "shòu",
    "type": "左右结构 · Trái-phải",
    "st": 11,
    "ord": "扌 (thủ) trái → 受 (thụ) phải",
    "rad": "扌 (thủ – tay)",
    "mean": "trao, dạy",
    "tip": "Bộ tay 扌 + 受(nhận) → TRAO cho người khác nhận, mở rộng thành DẠY (kiến thức), kết hợp 教(dạy) thành 教授 = GIÁO SƯ (người dạy).",
    "cf": "受 (shòu – \"nhận\", không có bộ 扌\")",
    "w": "教授 / 教师 / 传授"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Giáo sư Vương không những giảng bài hay mà còn rất quan tâm đến sinh viên.",
    "answer": "王教授不仅课讲得好，而且很关心学生。",
    "answerPy": "Wáng jiàoshòu bùjǐn kè jiǎng de hǎo, érqiě hěn guānxīn xuésheng.",
    "note": "Ôn 不仅……而且…… (Bài 3 · điểm 2).",
    "pair": "不仅……而且……"
   },
   {
    "promptLang": "vi",
    "prompt": "Cho dù giáo sư không ở trường, chúng ta cũng có thể hỏi ông ấy trên mạng.",
    "answer": "即使教授不在学校，我们也可以在网上问他。",
    "answerPy": "Jíshǐ jiàoshòu bú zài xuéxiào, wǒmen yě kěyǐ zài wǎngshang wèn tā.",
    "note": "即使……也…… (Bài 11 · điểm 1).",
    "pair": "即使……也……"
   }
  ]
 },
 {
  "n": 14,
  "zh": "线上",
  "py": "xiànshàng",
  "pos": "Danh từ",
  "vn": "trực tuyến, online",
  "hv": "tuyến thượng",
  "em": "🌐",
  "lesson": 2,
  "explain": [
   "Hoạt động diễn ra qua mạng Internet: 线上课 (lớp online), 线上会议 (họp trực tuyến); thường dùng 在线上 + V."
  ],
  "usage": "在线上点名 · 线上会议 · 线上上课 · 线上交流.",
  "collo": [
   "线上教学",
   "线上会议",
   "在线上交流",
   "线上购物"
  ],
  "colloFull": [
   {
    "zh": "线上教学",
    "py": "Xiànshàng jiàoxué",
    "vn": "dạy học trực tuyến"
   },
   {
    "zh": "线上会议",
    "py": "Xiànshàng huìyì",
    "vn": "cuộc họp trực tuyến"
   },
   {
    "zh": "在线上交流",
    "py": "Zài xiànshàng jiāoliú",
    "vn": "trao đổi trực tuyến"
   },
   {
    "zh": "线上购物",
    "py": "Xiànshàng gòuwù",
    "vn": "mua sắm trực tuyến"
   }
  ],
  "patterns": [
   {
    "s": "在线上 + V",
    "m": "Làm gì một cách trực tuyến"
   },
   {
    "s": "线上 ↔ 线下",
    "m": "trực tuyến ↔ trực tiếp"
   }
  ],
  "ex_zh": "教授在线上点名，特别节约时间。",
  "ex_py": "Jiàoshòu zài xiànshàng diǎnmíng, tèbié jiéyuē shíjiān.",
  "ex_vn": "Giáo sư điểm danh trực tuyến, rất tiết kiệm thời gian.",
  "exList": [
   {
    "zh": "教授在线上点名，特别节约时间。",
    "py": "Jiàoshòu zài xiànshàng diǎnmíng, tèbié jiéyuē shíjiān.",
    "vn": "Giáo sư điểm danh trực tuyến, rất tiết kiệm thời gian."
   },
   {
    "zh": "他们不是在聊天儿，而是在开线上会议。",
    "py": "Tāmen bú shì zài liáotiānr, érshì zài kāi xiànshàng huìyì.",
    "vn": "Họ không phải đang tán gẫu, mà là đang họp trực tuyến."
   }
  ],
  "hanzi": [
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
    "prompt": "Bạn đã từng học trực tuyến chưa? Bạn thấy thế nào?",
    "answer": "你在线上上过课吗？你觉得怎么样？",
    "answerPy": "Nǐ zàixiàn shàngshang guò kè ma? Nǐ juéde zěnmeyàng?",
    "note": "Biến thể câu hỏi phần Khởi động; ôn V + 过 (HSK 2).",
    "pair": "V过……吗"
   },
   {
    "promptLang": "vi",
    "prompt": "Giáo sư Lý không ở Bắc Kinh, chúng ta có thể trao đổi trực tuyến với ông ấy.",
    "answer": "李教授不在北京，咱们可以和他在线上交流。",
    "answerPy": "Lǐ jiàoshòu bú zài Běijīng, zánmen kěyǐ hé tā zài xiànshàng jiāoliú.",
    "note": "Câu bài tập SGK.",
    "pair": "和 + ai + 在线上 + V"
   }
  ]
 },
 {
  "n": 15,
  "zh": "线下",
  "py": "xiànxià",
  "pos": "Danh từ",
  "vn": "trực tiếp, offline (ngoài đời thực)",
  "hv": "tuyến hạ",
  "em": "🏫",
  "lesson": 2,
  "explain": [
   "Hoạt động diễn ra trực tiếp, mặt đối mặt, không qua mạng: 线下课 (học trực tiếp), 线下活动."
  ],
  "usage": "像线下那样 · 线下上课 · 线下活动 · 线上线下.",
  "collo": [
   "线下教学",
   "线下活动",
   "线上线下",
   "像线下那样"
  ],
  "colloFull": [
   {
    "zh": "线下教学",
    "py": "Xiànxià jiàoxué",
    "vn": "dạy học trực tiếp"
   },
   {
    "zh": "线下活动",
    "py": "Xiànxià huódòng",
    "vn": "hoạt động trực tiếp"
   },
   {
    "zh": "线上线下",
    "py": "Xiànshàng xiànxià",
    "vn": "trực tuyến lẫn trực tiếp"
   },
   {
    "zh": "像线下那样",
    "py": "Xiàng xiànxià nàyàng",
    "vn": "như (học) trực tiếp"
   }
  ],
  "patterns": [
   {
    "s": "像 + 线下 + 那样",
    "m": "Giống như khi trực tiếp (ôn 像……那样 HSK 3)"
   }
  ],
  "ex_zh": "教授在线上点名，不用像线下那样一个个叫名字。",
  "ex_py": "Jiàoshòu zài xiànshàng diǎnmíng, búyòng xiàng xiànxià nàyàng yígègè jiào míngzi.",
  "ex_vn": "Giáo sư điểm danh trực tuyến, không phải gọi tên từng người như khi học trực tiếp.",
  "exList": [
   {
    "zh": "教授在线上点名，不用像线下那样一个个叫名字。",
    "py": "Jiàoshòu zài xiànshàng diǎnmíng, búyòng xiàng xiànxià nàyàng yígègè jiào míngzi.",
    "vn": "Giáo sư điểm danh trực tuyến, không phải gọi tên từng người như khi học trực tiếp."
   },
   {
    "zh": "这门课一半在线上上，一半在线下上。",
    "py": "Zhè mén kè yíbàn zàixiàn shàngshang, yíbàn zài xiànxià shàng.",
    "vn": "Môn này một nửa học trực tuyến, một nửa học trực tiếp."
   }
  ],
  "hanzi": [
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
    "prompt": "Tôi thích học trực tiếp hơn, vì có thể nói chuyện mặt đối mặt với thầy cô.",
    "answer": "我更喜欢在线下上课，因为可以和老师面对面地交流。",
    "answerPy": "Wǒ gèng xǐhuan zài xiànxià shàngkè, yīnwèi kěyǐ hé lǎoshī miàn duìmiàn de jiāoliú.",
    "note": "线下 ↔ 线上.",
    "pair": "在线下上课"
   },
   {
    "promptLang": "vi",
    "prompt": "So với học trực tiếp, học trực tuyến tiện hơn một chút.",
    "answer": "跟在线下上课相比，在线上上课方便一些。",
    "answerPy": "Gēn zài xiànxià shàngkè xiāngbǐ, zài xiànshàng shàngkè fāngbiàn yìxiē.",
    "note": "Ôn 跟……相比 (Bài 8 · điểm 3).",
    "pair": "跟……相比"
   }
  ]
 },
 {
  "n": 16,
  "zh": "视频",
  "py": "shìpín",
  "pos": "Danh từ",
  "vn": "video",
  "hv": "thị tần",
  "em": "🎬",
  "lesson": 2,
  "explain": [
   "Đoạn phim, hình ảnh động ghi lại (quay video, xem video, gọi video)."
  ],
  "usage": "看视频 · 视频记录 · 放视频 · 打视频电话.",
  "collo": [
   "看视频",
   "放视频",
   "视频记录",
   "视频电话"
  ],
  "colloFull": [
   {
    "zh": "看视频",
    "py": "Kàn shìpín",
    "vn": "xem video"
   },
   {
    "zh": "放视频",
    "py": "Fàng shìpín",
    "vn": "chiếu video"
   },
   {
    "zh": "视频记录",
    "py": "Shìpín jìlù",
    "vn": "video ghi lại (bài giảng)"
   },
   {
    "zh": "视频电话",
    "py": "Shìpín diànhuà",
    "vn": "cuộc gọi video"
   }
  ],
  "patterns": [
   {
    "s": "给 + ai + 放视频",
    "m": "Chiếu video cho ai"
   },
   {
    "s": "打视频电话 / 视频聊天儿",
    "m": "Gọi video"
   }
  ],
  "ex_zh": "课上没听明白时，课后还能在学校网站上找到视频记录看。",
  "ex_py": "Kè shàng méi tīng míngbai shí, kèhòu hái néng zài xuéxiào wǎngzhàn shàng zhǎodào shìpín jìlù kàn.",
  "ex_vn": "Trên lớp nghe chưa hiểu thì sau giờ học còn có thể tìm video ghi lại trên trang web của trường để xem.",
  "exList": [
   {
    "zh": "课上没听明白时，课后还能在学校网站上找到视频记录看。",
    "py": "Kè shàng méi tīng míngbai shí, kèhòu hái néng zài xuéxiào wǎngzhàn shàng zhǎodào shìpín jìlù kàn.",
    "vn": "Trên lớp nghe chưa hiểu thì sau giờ học còn có thể tìm video ghi lại trên trang web của trường để xem."
   },
   {
    "zh": "老师不仅可以在屏幕上写字，还可以直接给大家放视频。",
    "py": "Lǎoshī bùjǐn kěyǐ zài píngmù shàng xiězì, hái kěyǐ zhíjiē gěi dàjiā fàng shìpín.",
    "vn": "Thầy cô không những viết được lên màn hình mà còn có thể chiếu video trực tiếp cho mọi người."
   }
  ],
  "hanzi": [
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
   },
   {
    "c": "频",
    "p": "pín",
    "type": "会意字 · Chữ hội ý",
    "st": 13,
    "ord": "步 → 页",
    "rad": "页 (hiệt – đầu)",
    "mean": "nhiều lần, liên tục; tần số",
    "tip": "Bước chân (步) đi tới đi lui, đầu (页) ngoảnh lại liên tục → nhiều lần, thường xuyên → tần số; 视频 = hình ảnh tần số → video.",
    "cf": "颗 kē (hạt) — trái là 果; 顺 shùn — trái là 川",
    "w": "视频 / 频道 / 频繁"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Cuối tuần tôi gọi video cho bố mẹ.",
    "answer": "周末我给爸爸妈妈打视频电话。",
    "answerPy": "Zhōumò wǒ gěi bàba māma dǎ shìpín diànhuà.",
    "note": "给 + ai + 打电话 (HSK 2).",
    "pair": "给……打视频电话"
   },
   {
    "promptLang": "vi",
    "prompt": "Xem video này thì sẽ biết làm thế nào ngay.",
    "answer": "看了这个视频，你就知道怎么做了。",
    "answerPy": "Kàn le zhège shìpín, nǐ jiù zhīdao zěnme zuò le.",
    "note": "Câu điều kiện ngầm: 了……就…… (HSK 3).",
    "pair": "V了……就……"
   }
  ]
 },
 {
  "n": 17,
  "zh": "记录",
  "py": "jìlù",
  "pos": "Danh từ",
  "vn": "bản ghi, biên bản; (động từ) ghi lại",
  "hv": "ký lục",
  "em": "📝",
  "lesson": 2,
  "explain": [
   "Danh từ (nghĩa trong bài): những gì được ghi lại (bằng chữ, âm thanh, hình ảnh) — 视频记录, 会议记录.",
   "Cũng là động từ: ghi chép lại (记录下来). ⚠ Hán Việt “ký lục” nhưng không phải “kỷ lục” (kỷ lục là 纪录)."
  ],
  "usage": "视频记录 · 会议记录 · 做记录 · 记录下来.",
  "collo": [
   "视频记录",
   "会议记录",
   "做记录",
   "记录下来"
  ],
  "colloFull": [
   {
    "zh": "视频记录",
    "py": "Shìpín jìlù",
    "vn": "video ghi lại"
   },
   {
    "zh": "会议记录",
    "py": "Huìyì jìlù",
    "vn": "biên bản cuộc họp"
   },
   {
    "zh": "做记录",
    "py": "Zuò jìlù",
    "vn": "ghi chép, ghi biên bản"
   },
   {
    "zh": "记录下来",
    "py": "Jìlù xiàlai",
    "vn": "ghi lại"
   }
  ],
  "patterns": [
   {
    "s": "做 + 记录",
    "m": "Danh từ: làm biên bản / ghi chép"
   },
   {
    "s": "把 + N + 记录下来",
    "m": "Động từ: ghi lại (ôn 把 + bổ ngữ xu hướng)"
   }
  ],
  "ex_zh": "课后还能在学校网站上找到视频记录看。",
  "ex_py": "Kèhòu hái néng zài xuéxiào wǎngzhàn shàng zhǎodào shìpín jìlù kàn.",
  "ex_vn": "Sau giờ học còn có thể tìm video ghi lại trên trang web của trường để xem.",
  "exList": [
   {
    "zh": "课后还能在学校网站上找到视频记录看。",
    "py": "Kèhòu hái néng zài xuéxiào wǎngzhàn shàng zhǎodào shìpín jìlù kàn.",
    "vn": "Sau giờ học còn có thể tìm video ghi lại trên trang web của trường để xem."
   },
   {
    "zh": "开会的时候，我负责做记录。",
    "py": "Kāihuì de shíhou, wǒ fùzé zuò jìlù.",
    "vn": "Lúc họp, tôi phụ trách ghi biên bản."
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
    "c": "录",
    "p": "lù",
    "type": "象形字 · Chữ tượng hình",
    "st": 8,
    "ord": "彐 → 一 → 水 (biến thể)",
    "rad": "彐 (ký – đầu con nhím)",
    "mean": "ghi chép, ghi lại; thu (âm, hình)",
    "tip": "Hình chiếc gàu múc nước nhỏ từng giọt (水 bên dưới) → nhỏ giọt từng chút → ghi chép từng dòng → 记录, 录音.",
    "cf": "绿 lǜ (xanh lá) — thêm 纟; 球 qiú — bên phải là 求",
    "w": "记录 / 录音 / 录取"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Tôi ghi lại tất cả những gì giáo sư nói.",
    "answer": "我把教授讲的内容都记录下来了。",
    "answerPy": "Wǒ bǎ jiàoshòu jiǎng de nèiróng dōu jìlù xiàlai le.",
    "note": "Ôn câu chữ 把 + bổ ngữ xu hướng 下来 (HSK 3).",
    "pair": "把……记录下来"
   },
   {
    "promptLang": "vi",
    "prompt": "Không cần vội ghi chép, sau buổi học có video ghi lại.",
    "answer": "不用着急记笔记，课后有视频记录。",
    "answerPy": "Búyòng zháojí jì bǐjì, kèhòu yǒu shìpín jìlù.",
    "note": "Ôn 不用 + V (HSK 2).",
    "pair": "不用……"
   }
  ]
 },
 {
  "n": 18,
  "zh": "资料",
  "py": "zīliào",
  "pos": "Danh từ",
  "vn": "tài liệu, tư liệu",
  "hv": "tư liệu",
  "em": "📚",
  "lesson": 2,
  "explain": [
   "Sách vở, giấy tờ, thông tin dùng để tham khảo, học tập, nghiên cứu. So với 材料 (Bài 1 — hồ sơ, vật liệu), 资料 thiên về tài liệu tham khảo."
  ],
  "usage": "学习资料 · 查资料 · 找资料 · 准备资料.",
  "collo": [
   "学习资料",
   "查资料",
   "找资料",
   "整理资料"
  ],
  "colloFull": [
   {
    "zh": "学习资料",
    "py": "Xuéxí zīliào",
    "vn": "tài liệu học tập"
   },
   {
    "zh": "查资料",
    "py": "Chá zīliào",
    "vn": "tra tài liệu"
   },
   {
    "zh": "找资料",
    "py": "Zhǎo zīliào",
    "vn": "tìm tài liệu"
   },
   {
    "zh": "整理资料",
    "py": "Zhěnglǐ zīliào",
    "vn": "sắp xếp tài liệu"
   }
  ],
  "patterns": [
   {
    "s": "查 / 找 + 资料",
    "m": "Tra / tìm tài liệu"
   },
   {
    "s": "资料 ≠ 材料",
    "m": "资料: tài liệu tham khảo; 材料: hồ sơ nộp, vật liệu"
   }
  ],
  "ex_zh": "现在网上到处是学习资料，想查什么都能查到。",
  "ex_py": "Xiànzài wǎngshang dàochù shì xuéxí zīliào, xiǎng chá shénme dōu néng chádào.",
  "ex_vn": "Bây giờ trên mạng đâu đâu cũng là tài liệu học tập, muốn tra gì cũng tra được.",
  "exList": [
   {
    "zh": "现在网上到处是学习资料，想查什么都能查到。",
    "py": "Xiànzài wǎngshang dàochù shì xuéxí zīliào, xiǎng chá shénme dōu néng chádào.",
    "vn": "Bây giờ trên mạng đâu đâu cũng là tài liệu học tập, muốn tra gì cũng tra được."
   },
   {
    "zh": "为了写这篇文章，他在图书馆查了很多资料。",
    "py": "Wèile xiě zhè piān wénzhāng, tā zài túshūguǎn chá le hěn duō zīliào.",
    "vn": "Để viết bài này, anh ấy đã tra rất nhiều tài liệu ở thư viện."
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
    "prompt": "Trên mạng tài liệu học tập có khối, cậu không cần mua sách nữa.",
    "answer": "网上的学习资料有的是，你不用买书了。",
    "answerPy": "Wǎngshang de xuéxí zīliào yǒudeshì, nǐ búyòng mǎi shū le.",
    "note": "Ôn 有的是 (Bài 10 · điểm 2).",
    "pair": "有的是"
   },
   {
    "promptLang": "vi",
    "prompt": "Không những tra tài liệu, mà nhiều việc khác cũng có thể giải quyết trên mạng.",
    "answer": "不仅是查资料，现在很多事情也都可以在网上解决了。",
    "answerPy": "Bùjǐn shì chá zīliào, xiànzài hěn duō shìqing yě dōu kěyǐ zài wǎngshang jiějué le.",
    "note": "Câu bài tập tổng hợp; ôn 不仅……也…… (Bài 3).",
    "pair": "不仅……也……"
   }
  ]
 },
 {
  "n": 19,
  "zh": "自学",
  "py": "zìxué",
  "pos": "Động từ",
  "vn": "tự học",
  "hv": "tự học",
  "em": "🧑‍💻",
  "lesson": 2,
  "explain": [
   "Tự mình học, không có thầy dạy trực tiếp; 自学 + môn học / 自学成才."
  ],
  "usage": "自学中文 · 在网上自学 · 自学能力 · 自学也更方便了.",
  "collo": [
   "自学中文",
   "在网上自学",
   "自学能力",
   "自学成才"
  ],
  "colloFull": [
   {
    "zh": "自学中文",
    "py": "Zìxué Zhōngwén",
    "vn": "tự học tiếng Trung"
   },
   {
    "zh": "在网上自学",
    "py": "Zài wǎngshang zìxué",
    "vn": "tự học trên mạng"
   },
   {
    "zh": "自学能力",
    "py": "Zìxué nénglì",
    "vn": "khả năng tự học"
   },
   {
    "zh": "自学成才",
    "py": "Zìxué chéng cái",
    "vn": "tự học mà thành tài"
   }
  ],
  "patterns": [
   {
    "s": "自学 + môn học",
    "m": "Tự học môn gì"
   },
   {
    "s": "是 + 自学 + 的",
    "m": "Nhấn mạnh cách học (是……的)"
   }
  ],
  "ex_zh": "现在网上到处是学习资料，想查什么都能查到，自学也更方便了。",
  "ex_py": "Xiànzài wǎngshang dàochù shì xuéxí zīliào, xiǎng chá shénme dōu néng chádào, zìxué yě gèng fāngbiàn le.",
  "ex_vn": "Bây giờ trên mạng đâu đâu cũng là tài liệu học tập, muốn tra gì cũng tra được, tự học cũng tiện hơn.",
  "exList": [
   {
    "zh": "现在网上到处是学习资料，想查什么都能查到，自学也更方便了。",
    "py": "Xiànzài wǎngshang dàochù shì xuéxí zīliào, xiǎng chá shénme dōu néng chádào, zìxué yě gèng fāngbiàn le.",
    "vn": "Bây giờ trên mạng đâu đâu cũng là tài liệu học tập, muốn tra gì cũng tra được, tự học cũng tiện hơn."
   },
   {
    "zh": "我哥哥是自学弹钢琴的，没上过一节课。",
    "py": "Wǒ gēge shì zìxué tángāngqín de, méi shàng guò yì jié kè.",
    "vn": "Anh tôi tự học đàn piano, chưa từng học một buổi nào."
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
    "prompt": "Cô ấy tự học tiếng Trung, không có thầy dạy.",
    "answer": "她是自学中文的，没有老师教。",
    "answerPy": "Tā shì zìxué Zhōngwén de, méiyǒu lǎoshī jiào.",
    "note": "Ôn 是……的 nhấn mạnh cách thức (HSK 2–3).",
    "pair": "是……的"
   },
   {
    "promptLang": "vi",
    "prompt": "Muốn học tốt thì phải nâng cao khả năng tự học.",
    "answer": "要想学好，就得提高自学能力。",
    "answerPy": "Yào xiǎng xuéhǎo, jiù děi tígāo zìxué nénglì.",
    "note": "Ôn 要想……就得…… (HSK 3–4).",
    "pair": "要想……就……"
   }
  ]
 },
 {
  "n": 20,
  "zh": "口语",
  "py": "kǒuyǔ",
  "pos": "Danh từ",
  "vn": "khẩu ngữ, (kỹ năng) nói",
  "hv": "khẩu ngữ",
  "em": "🗣️",
  "lesson": 2,
  "explain": [
   "Ngôn ngữ nói hằng ngày (đối lập với 书面语 — văn viết); 练口语 = luyện nói."
  ],
  "usage": "练口语 · 口语课 · 口语很好 · 重视口语.",
  "collo": [
   "练口语",
   "口语课",
   "口语水平",
   "重视口语"
  ],
  "colloFull": [
   {
    "zh": "练口语",
    "py": "Liàn kǒuyǔ",
    "vn": "luyện nói"
   },
   {
    "zh": "口语课",
    "py": "Kǒuyǔ kè",
    "vn": "giờ khẩu ngữ"
   },
   {
    "zh": "口语水平",
    "py": "Kǒuyǔ shuǐpíng",
    "vn": "trình độ nói"
   },
   {
    "zh": "重视口语",
    "py": "Zhòngshì kǒuyǔ",
    "vn": "coi trọng kỹ năng nói"
   }
  ],
  "patterns": [
   {
    "s": "练 + 口语",
    "m": "Luyện nói"
   },
   {
    "s": "口语 ↔ 书面语",
    "m": "Khẩu ngữ ↔ văn viết"
   }
  ],
  "ex_zh": "我就是不在教室，也可以学习中文，和同学一起练口语。",
  "ex_py": "Wǒ jiùshì bú zài jiàoshì, yě kěyǐ xuéxí Zhōngwén, hé tóngxué yìqǐ liàn kǒuyǔ.",
  "ex_vn": "Mình cho dù không ở lớp cũng có thể học tiếng Trung, luyện nói cùng bạn học.",
  "exList": [
   {
    "zh": "我就是不在教室，也可以学习中文，和同学一起练口语。",
    "py": "Wǒ jiùshì bú zài jiàoshì, yě kěyǐ xuéxí Zhōngwén, hé tóngxué yìqǐ liàn kǒuyǔ.",
    "vn": "Mình cho dù không ở lớp cũng có thể học tiếng Trung, luyện nói cùng bạn học."
   },
   {
    "zh": "我自己学外语的经验是，开始学习时要特别重视口语，多听多说。",
    "py": "Wǒ zìjǐ xué wàiyǔ de jīngyàn shì, kāishǐ xuéxí shí yào tèbié zhòngshì kǒuyǔ, duō tīng duō shuō.",
    "vn": "Kinh nghiệm học ngoại ngữ của tôi là lúc mới học phải đặc biệt coi trọng kỹ năng nói, nghe nhiều nói nhiều."
   }
  ],
  "hanzi": [
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
   },
   {
    "c": "语",
    "p": "yǔ",
    "type": "左右结构 · Trái-phải (giản thể)",
    "st": 9,
    "ord": "讠 (ngôn) trái → 吾 phải",
    "rad": "讠 (ngôn)",
    "mean": "lời nói",
    "tip": "Bộ lời nói 讠 + 吾(tôi) → LỜI NÓI, kết hợp 言 thành 语言 = NGÔN NGỮ.",
    "cf": "悟 (wù – \"ngộ ra\", bộ 忄)",
    "w": "语言 / 汉语 / 语法"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Muốn luyện nói tốt, một mặt phải nghe nhiều, mặt khác phải nói nhiều.",
    "answer": "要想练好口语，一方面要多听，另一方面要多说。",
    "answerPy": "Yào xiǎng liàn hǎo kǒuyǔ, yìfāngmiàn yào duō tīng, lìngyìfāngmiàn yào duō shuō.",
    "note": "Ôn 一方面……另一方面…… (Bài 1 · điểm 4).",
    "pair": "一方面……另一方面……"
   },
   {
    "promptLang": "vi",
    "prompt": "Trình độ nói tiếng Trung của anh ấy càng ngày càng tốt.",
    "answer": "他的中文口语越来越好了。",
    "answerPy": "Tā de Zhōngwén kǒuyǔ yuèláiyuè hǎo le.",
    "note": "Ôn 越来越 (HSK 3).",
    "pair": "越来越……"
   }
  ]
 },
 {
  "n": 21,
  "zh": "科技",
  "py": "kējì",
  "pos": "Danh từ",
  "vn": "khoa học kỹ thuật, công nghệ",
  "hv": "khoa kỹ",
  "em": "🔬",
  "lesson": 2,
  "explain": [
   "Viết tắt của 科学技术 — khoa học và kỹ thuật, công nghệ."
  ],
  "usage": "科技发展 · 高科技 · 科技公司 · 现代科技.",
  "collo": [
   "科技发展",
   "高科技",
   "科技公司",
   "现代科技"
  ],
  "colloFull": [
   {
    "zh": "科技发展",
    "py": "Kējì fāzhǎn",
    "vn": "khoa học kỹ thuật phát triển"
   },
   {
    "zh": "高科技",
    "py": "Gāo kējì",
    "vn": "công nghệ cao"
   },
   {
    "zh": "科技公司",
    "py": "Kējì gōngsī",
    "vn": "công ty công nghệ"
   },
   {
    "zh": "现代科技",
    "py": "Xiàndài kējì",
    "vn": "công nghệ hiện đại"
   }
  ],
  "patterns": [
   {
    "s": "科技 + 让 / 使 + N + V / Adj",
    "m": "Công nghệ làm cho … (câu kiêm ngữ)"
   }
  ],
  "ex_zh": "科技真是让获取知识变得简单多了。",
  "ex_py": "Kējì zhēnshì ràng huòqǔ zhīshi biànde jiǎndān duō le.",
  "ex_vn": "Công nghệ đúng là đã làm cho việc tiếp thu kiến thức trở nên đơn giản hơn nhiều.",
  "exList": [
   {
    "zh": "科技真是让获取知识变得简单多了。",
    "py": "Kējì zhēnshì ràng huòqǔ zhīshi biànde jiǎndān duō le.",
    "vn": "Công nghệ đúng là đã làm cho việc tiếp thu kiến thức trở nên đơn giản hơn nhiều."
   },
   {
    "zh": "随着科技的发展，我们的生活越来越方便了。",
    "py": "Suízhe kējì de fāzhǎn, wǒmen de shēnghuó yuèláiyuè fāngbiàn le.",
    "vn": "Cùng với sự phát triển của khoa học kỹ thuật, cuộc sống của chúng ta ngày càng tiện lợi."
   }
  ],
  "hanzi": [
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
   },
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
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Cùng với sự phát triển của công nghệ, học trực tuyến ngày càng được ưa chuộng.",
    "answer": "随着科技的发展，线上学习越来越受欢迎了。",
    "answerPy": "Suízhe kējì de fāzhǎn, xiànshàng xuéxí yuèláiyuè shòu huānyíng le.",
    "note": "Ôn 随着 (Bài 1 · điểm 3).",
    "pair": "随着……的发展"
   },
   {
    "promptLang": "vi",
    "prompt": "Công nghệ khiến cuộc sống của người cao tuổi phong phú hơn.",
    "answer": "科技使老年人的生活更丰富了。",
    "answerPy": "Kējì shǐ lǎoniánrén de shēnghuó gèng fēngfù le.",
    "note": "Ôn câu kiêm ngữ 使 (Bài 7 · điểm 4).",
    "pair": "使 + N + Adj"
   }
  ]
 },
 {
  "n": 22,
  "zh": "获取",
  "py": "huòqǔ",
  "pos": "Động từ",
  "vn": "thu được, tiếp nhận, lấy được",
  "hv": "hoạch thủ",
  "em": "📥",
  "lesson": 2,
  "explain": [
   "Lấy được, thu được (thông tin, kiến thức, tài liệu…); văn viết, trang trọng hơn 得到. Phân biệt 获得 (Bài 1): giành được (học bổng, giải thưởng)."
  ],
  "usage": "获取知识 · 获取信息 · 获取资料.",
  "collo": [
   "获取知识",
   "获取信息",
   "获取资料",
   "获取方式"
  ],
  "colloFull": [
   {
    "zh": "获取知识",
    "py": "Huòqǔ zhīshi",
    "vn": "tiếp thu kiến thức"
   },
   {
    "zh": "获取信息",
    "py": "Huòqǔ xìnxī",
    "vn": "thu nhận thông tin"
   },
   {
    "zh": "获取资料",
    "py": "Huòqǔ zīliào",
    "vn": "lấy tài liệu"
   },
   {
    "zh": "获取方式",
    "py": "Huòqǔ fāngshì",
    "vn": "cách tiếp nhận"
   }
  ],
  "patterns": [
   {
    "s": "获取 + 知识 / 信息",
    "m": "Tân ngữ là thông tin, kiến thức"
   },
   {
    "s": "获取 ≠ 获得",
    "m": "获得: giành được (奖学金, 第一名)"
   }
  ],
  "ex_zh": "科技真是让获取知识变得简单多了。",
  "ex_py": "Kējì zhēnshì ràng huòqǔ zhīshi biànde jiǎndān duō le.",
  "ex_vn": "Công nghệ đúng là đã làm cho việc tiếp thu kiến thức trở nên đơn giản hơn nhiều.",
  "exList": [
   {
    "zh": "科技真是让获取知识变得简单多了。",
    "py": "Kējì zhēnshì ràng huòqǔ zhīshi biànde jiǎndān duō le.",
    "vn": "Công nghệ đúng là đã làm cho việc tiếp thu kiến thức trở nên đơn giản hơn nhiều."
   },
   {
    "zh": "现在人们主要通过手机获取信息。",
    "py": "Xiànzài rénmen zhǔyào tōngguò shǒujī huòqǔ xìnxī.",
    "vn": "Bây giờ mọi người chủ yếu tiếp nhận thông tin qua điện thoại."
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
    "c": "取",
    "p": "qǔ",
    "type": "左右结构 · Trái-phải",
    "st": 8,
    "ord": "耳 (nhĩ) trái → 又 phải",
    "rad": "又 (hựu – tay phải)",
    "mean": "lấy",
    "tip": "Chữ tượng hình bàn tay 又 cầm lấy TAI 耳 (tục cổ đại cắt tai chiến lợi phẩm) → nghĩa gốc là LẤY, mở rộng thành ĐẠT ĐƯỢC.",
    "cf": "职 (zhí – \"chức vụ\", bộ 耳\")",
    "w": "取 / 取得 / 获取"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Thông qua mạng Internet, chúng ta có thể tiếp nhận rất nhiều thông tin.",
    "answer": "通过网络，我们可以获取很多信息。",
    "answerPy": "Tōngguò wǎngluò, wǒmen kěyǐ huòqǔ hěn duō xìnxī.",
    "note": "Ôn 通过 (Bài 1).",
    "pair": "通过……获取……"
   },
   {
    "promptLang": "vi",
    "prompt": "Cô ấy học rất chăm, năm nay lại giành được học bổng.",
    "answer": "她学习很努力，今年又获得了奖学金。",
    "answerPy": "Tā xuéxí hěn nǔlì, jīnnián yòu huòdé le jiǎngxuéjīn.",
    "note": "Phân biệt 获得 (Bài 1) với 获取.",
    "pair": "获得奖学金"
   }
  ]
 },
 {
  "n": 23,
  "zh": "礼貌",
  "py": "lǐmào",
  "pos": "Danh từ / Tính từ",
  "vn": "lễ phép, lịch sự",
  "hv": "lễ mạo",
  "em": "🙇",
  "lesson": 3,
  "explain": [
   "Danh từ: phép lịch sự — 有礼貌 / 没有礼貌 / 讲礼貌.",
   "Tính từ: lịch sự, lễ phép — 不礼貌, 很礼貌地说."
  ],
  "usage": "很有礼貌 · 没有礼貌 · 不礼貌 · 礼貌地说.",
  "collo": [
   "有礼貌",
   "没有礼貌",
   "不礼貌",
   "礼貌地说"
  ],
  "colloFull": [
   {
    "zh": "有礼貌",
    "py": "Yǒu lǐmào",
    "vn": "lễ phép"
   },
   {
    "zh": "没有礼貌",
    "py": "Méiyǒu lǐmào",
    "vn": "vô lễ, bất lịch sự"
   },
   {
    "zh": "不礼貌",
    "py": "Bù lǐmào",
    "vn": "không lịch sự"
   },
   {
    "zh": "礼貌地说",
    "py": "Lǐmào de shuō",
    "vn": "nói một cách lịch sự"
   }
  ],
  "patterns": [
   {
    "s": "(很 / 真)有 + 礼貌",
    "m": "Danh từ: rất lễ phép"
   },
   {
    "s": "礼貌 + 地 + V",
    "m": "Tính từ làm trạng ngữ"
   }
  ],
  "ex_zh": "姐姐家的两个孩子很有礼貌。",
  "ex_py": "Jiějie jiā de liǎng gè háizi hěn yǒu lǐmào.",
  "ex_vn": "Hai đứa con nhà chị rất lễ phép.",
  "exList": [
   {
    "zh": "姐姐家的两个孩子很有礼貌。",
    "py": "Jiějie jiā de liǎng gè háizi hěn yǒu lǐmào.",
    "vn": "Hai đứa con nhà chị rất lễ phép."
   },
   {
    "zh": "A：你女儿真有礼貌。B：谢谢，从小我们就教她要尊重别人。",
    "py": "A: nǐ nǚ'ér zhēn yǒu lǐmào. B: xièxie, cóng xiǎo wǒmen jiù jiào tā yào zūnzhòng biérén.",
    "vn": "A: Con gái chị lễ phép thật. B: Cảm ơn, từ nhỏ chúng tôi đã dạy cháu phải tôn trọng người khác."
   }
  ],
  "hanzi": [
   {
    "c": "礼",
    "p": "lǐ",
    "type": "左右结构 · Trái-phải (giản thể)",
    "st": 5,
    "ord": "礻 (kỳ) trái → 乚 phải",
    "rad": "礻 (kỳ – thần linh, lễ nghi)",
    "mean": "lễ nghi",
    "tip": "Bộ 礻(liên quan tế lễ) → mở rộng thành LỄ NGHI, kết hợp 拜(bái - lễ bái) và 天(ngày) thành 礼拜天 = ngày LỄ BÁI (Chủ Nhật, ngày nghỉ để đi lễ nhà thờ theo cách gọi cũ).",
    "cf": "裡 (lǐ – \"bên trong\", phồn thể)",
    "w": "礼拜天 / 礼物 / 礼貌"
   },
   {
    "c": "貌",
    "p": "mào",
    "type": "左右结构 · Trái-phải",
    "st": 14,
    "ord": "豸 trái → 皃 phải",
    "rad": "豸 (trãi)",
    "mean": "dáng vẻ",
    "tip": "豸 + 皃(khuôn mặt) → DÁNG VẺ, MẠO. 礼貌 = dáng vẻ có lễ = lịch sự.",
    "cf": "猫 (māo – mèo)",
    "w": "礼貌 / 外貌"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Nói to trong thư viện là không lịch sự.",
    "answer": "在图书馆大声说话是不礼貌的。",
    "answerPy": "Zài túshūguǎn dàshēng shuōhuà shì bù lǐmào de.",
    "note": "是……的 nhấn mạnh nhận xét (HSK 3).",
    "pair": "是不礼貌的"
   },
   {
    "promptLang": "vi",
    "prompt": "Cậu ấy không phải vô lễ, mà là quá căng thẳng.",
    "answer": "他不是没有礼貌，而是太紧张了。",
    "answerPy": "Tā bú shì méiyǒu lǐmào, érshì tài jǐnzhāng le.",
    "note": "不是……而是…… (Bài 11 · điểm 3).",
    "pair": "不是……而是……"
   }
  ]
 },
 {
  "n": 24,
  "zh": "打招呼",
  "py": "dǎ zhāohu",
  "pos": "Cụm động từ",
  "vn": "chào hỏi",
  "hv": "đả chiêu hô",
  "em": "👋",
  "lesson": 3,
  "explain": [
   "Chào hỏi khi gặp nhau (bằng lời, gật đầu, vẫy tay…); cũng có nghĩa là báo trước cho ai biết. Cấu trúc: 和 / 跟 + ai + 打招呼."
  ],
  "usage": "和……打招呼 · 跟大家打个招呼 · 打了个招呼.",
  "collo": [
   "和……打招呼",
   "跟大家打招呼",
   "主动打招呼",
   "笑着打招呼"
  ],
  "colloFull": [
   {
    "zh": "和……打招呼",
    "py": "Hé…… dǎ zhāohu",
    "vn": "chào hỏi ai"
   },
   {
    "zh": "跟大家打招呼",
    "py": "Gēn dàjiā dǎ zhāohu",
    "vn": "chào mọi người"
   },
   {
    "zh": "主动打招呼",
    "py": "Zhǔdòng dǎ zhāohu",
    "vn": "chủ động chào"
   },
   {
    "zh": "笑着打招呼",
    "py": "Xiào zhe dǎ zhāohu",
    "vn": "cười chào"
   }
  ],
  "patterns": [
   {
    "s": "和 / 跟 + ai + 打招呼",
    "m": "✗ 打招呼他 → ✓ 跟他打招呼"
   },
   {
    "s": "打 + 个 + 招呼",
    "m": "Chèn lượng từ vào giữa (cụm li hợp): 打个招呼"
   }
  ],
  "ex_zh": "我们一进门，就马上和我们打招呼。",
  "ex_py": "Wǒmen yí jìn mén, jiù mǎshàng hé wǒmen dǎ zhāohu.",
  "ex_vn": "Chúng tôi vừa vào cửa, (các cháu) đã lập tức chào hỏi chúng tôi.",
  "exList": [
   {
    "zh": "我们一进门，就马上和我们打招呼。",
    "py": "Wǒmen yí jìn mén, jiù mǎshàng hé wǒmen dǎ zhāohu.",
    "vn": "Chúng tôi vừa vào cửa, (các cháu) đã lập tức chào hỏi chúng tôi."
   },
   {
    "zh": "我刚坐下，她就过来和我打招呼。",
    "py": "Wǒ gāng zuòxia, tā jiù guòlai hé wǒ dǎ zhāohu.",
    "vn": "Tôi vừa ngồi xuống, cô ấy đã đến chào hỏi tôi."
   }
  ],
  "hanzi": [
   {
    "c": "打",
    "p": "dǎ",
    "type": "形声字 · Chữ hình thanh",
    "st": 5,
    "ord": "扌 → 丁",
    "rad": "扌 (thủ – tay)",
    "mean": "đánh; chơi; gọi",
    "tip": "Môn thể thao dùng tay thì đi với 打 (打篮球), dùng chân thì đi với 踢 (踢足球).",
    "cf": "踢 (tī – đá)",
    "w": "打篮球 / 打电话 / 打开"
   },
   {
    "c": "招",
    "p": "zhāo",
    "type": "左右结构 · Trái-phải",
    "st": 8,
    "ord": "扌 trái → 召 phải",
    "rad": "扌 (thủ)",
    "mean": "vẫy gọi",
    "tip": "Tay 扌 + 召(gọi) → vẫy tay GỌI → CHIÊU. 打招呼 = chào hỏi; 招聘 (Bài 10) = tuyển dụng.",
    "cf": "超 (chāo – vượt)",
    "w": "打招呼 / 招聘 / 招手"
   },
   {
    "c": "呼",
    "p": "hū",
    "type": "左右结构 · Trái-phải",
    "st": 8,
    "ord": "口 trái → 乎 phải",
    "rad": "口 (khẩu)",
    "mean": "gọi, thở ra",
    "tip": "Miệng 口 + 乎 → tiếng gọi → HÔ. 打招呼, 呼吸 (hô hấp).",
    "cf": "乎 (hū)",
    "w": "打招呼 / 呼吸"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Tôi vừa vào cửa, con chó đã chạy đến 'chào' tôi.",
    "answer": "我一进门，小狗就跑过来和我打招呼。",
    "answerPy": "Wǒ yí jìn mén, xiǎogǒu jiù pǎo guòlai hé wǒ dǎ zhāohu.",
    "note": "Ôn 一……就…… (HSK 3).",
    "pair": "一……就……"
   },
   {
    "promptLang": "vi",
    "prompt": "Gặp thầy cô phải chủ động chào hỏi.",
    "answer": "见到老师要主动打招呼。",
    "answerPy": "Jiàndào lǎoshī yào zhǔdòng dǎ zhāohu.",
    "note": "和 / 跟 + ai + 打招呼; ở đây lược bỏ đối tượng.",
    "pair": "主动打招呼"
   }
  ]
 },
 {
  "n": 25,
  "zh": "家长",
  "py": "jiāzhǎng",
  "pos": "Danh từ",
  "vn": "phụ huynh",
  "hv": "gia trưởng",
  "em": "👨‍👩‍👧",
  "lesson": 3,
  "explain": [
   "Cha mẹ hoặc người giám hộ của học sinh (dùng trong ngữ cảnh trường học). ⚠ Hán Việt “gia trưởng” nhưng nghĩa là phụ huynh, không mang nghĩa “độc đoán”."
  ],
  "usage": "家长会 (họp phụ huynh) · 学生家长 · 很多家长.",
  "collo": [
   "家长会",
   "学生家长",
   "很多家长",
   "家长和老师"
  ],
  "colloFull": [
   {
    "zh": "家长会",
    "py": "Jiāzhǎng huì",
    "vn": "họp phụ huynh"
   },
   {
    "zh": "学生家长",
    "py": "Xuésheng jiāzhǎng",
    "vn": "phụ huynh học sinh"
   },
   {
    "zh": "很多家长",
    "py": "Hěn duō jiāzhǎng",
    "vn": "nhiều phụ huynh"
   },
   {
    "zh": "家长和老师",
    "py": "Jiāzhǎng hé lǎoshī",
    "vn": "phụ huynh và giáo viên"
   }
  ],
  "patterns": [
   {
    "s": "和 + 很多家长 + 一样",
    "m": "Giống như nhiều phụ huynh (ôn 和……一样 HSK 2)"
   }
  ],
  "ex_zh": "以前他们和很多家长一样，觉得孩子上个好大学，人生才是成功的。",
  "ex_py": "Yǐqián tāmen hé hěn duō jiāzhǎng yíyàng, juéde háizi shàng gè hǎo dàxué, rénshēng cái shì chénggōng de.",
  "ex_vn": "Trước đây họ cũng như nhiều phụ huynh khác, cho rằng con vào được đại học tốt thì đời mới là thành công.",
  "exList": [
   {
    "zh": "以前他们和很多家长一样，觉得孩子上个好大学，人生才是成功的。",
    "py": "Yǐqián tāmen hé hěn duō jiāzhǎng yíyàng, juéde háizi shàng gè hǎo dàxué, rénshēng cái shì chénggōng de.",
    "vn": "Trước đây họ cũng như nhiều phụ huynh khác, cho rằng con vào được đại học tốt thì đời mới là thành công."
   },
   {
    "zh": "明天下午学校开家长会，你爸爸妈妈会来吗？",
    "py": "Míngtiān xiàwǔ xuéxiào kāi jiāzhǎng huì, nǐ bàba māma huì lái ma?",
    "vn": "Chiều mai trường họp phụ huynh, bố mẹ cậu có đến không?"
   }
  ],
  "hanzi": [
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
    "c": "长",
    "p": "zhǎng",
    "type": "象形字 · Chữ tượng hình",
    "st": 4,
    "ord": "phẩy → ngang → sổ hất → mác",
    "rad": "长 (trường – dài)",
    "mean": "dài (cháng); lớn lên (zhǎng)",
    "tip": "Hình người già tóc dài. Đọc cháng = dài (HSK2 Bài 6), đọc zhǎng = lớn lên, có vẻ ngoài.",
    "cf": "长 cháng (dài) ≠ 长 zhǎng (lớn lên)",
    "w": "长得 / 长大 / 很长"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Nhiều phụ huynh chỉ quan tâm đến điểm số của con.",
    "answer": "很多家长只关心孩子的分数。",
    "answerPy": "Hěn duō jiāzhǎng zhǐ guānxīn háizi de fēnshù.",
    "note": "只 + V (HSK 2–3).",
    "pair": "只关心……"
   },
   {
    "promptLang": "vi",
    "prompt": "Cho dù công việc bận đến đâu, phụ huynh cũng nên dành thời gian cho con.",
    "answer": "即使工作再忙，家长也应该给孩子留出时间。",
    "answerPy": "Jíshǐ gōngzuò zài máng, jiāzhǎng yě yīnggāi gěi háizi liúchū shíjiān.",
    "note": "即使……也…… (Bài 11 · điểm 1).",
    "pair": "即使……也……"
   }
  ]
 },
 {
  "n": 26,
  "zh": "成功",
  "py": "chénggōng",
  "pos": "Tính từ / Động từ",
  "vn": "thành công",
  "hv": "thành công",
  "em": "🏆",
  "lesson": 3,
  "explain": [
   "Tính từ: đạt được kết quả mong muốn (很成功, 成功的人生).",
   "Động từ: thành công (他成功了)."
  ],
  "usage": "人生是成功的 · 很成功 · 成功地 + V · 成功的人.",
  "collo": [
   "很成功",
   "成功的人生",
   "获得成功",
   "成功地完成"
  ],
  "colloFull": [
   {
    "zh": "很成功",
    "py": "Hěn chénggōng",
    "vn": "rất thành công"
   },
   {
    "zh": "成功的人生",
    "py": "Chénggōng de rénshēng",
    "vn": "cuộc đời thành công"
   },
   {
    "zh": "获得成功",
    "py": "Huòdé chénggōng",
    "vn": "đạt được thành công"
   },
   {
    "zh": "成功地完成",
    "py": "Chénggōng de wánchéng",
    "vn": "hoàn thành thành công"
   }
  ],
  "patterns": [
   {
    "s": "……才是成功的",
    "m": "Nhấn mạnh điều kiện (才 + 是……的)"
   },
   {
    "s": "成功 + 地 + V",
    "m": "Làm trạng ngữ: 成功地完成了任务"
   }
  ],
  "ex_zh": "觉得孩子上个好大学，人生才是成功的。",
  "ex_py": "Juéde háizi shàng gè hǎo dàxué, rénshēng cái shì chénggōng de.",
  "ex_vn": "Cho rằng con vào được đại học tốt thì cuộc đời mới là thành công.",
  "exList": [
   {
    "zh": "觉得孩子上个好大学，人生才是成功的。",
    "py": "Juéde háizi shàng gè hǎo dàxué, rénshēng cái shì chénggōng de.",
    "vn": "Cho rằng con vào được đại học tốt thì cuộc đời mới là thành công."
   },
   {
    "zh": "这次活动举办得很成功。",
    "py": "Zhè cì huódòng jǔbàn de hěn chénggōng.",
    "vn": "Hoạt động lần này tổ chức rất thành công."
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
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Tôi cho rằng thành công không phải là có nhiều tiền, mà là làm việc mình thích.",
    "answer": "我认为成功不是有很多钱，而是做自己喜欢的事情。",
    "answerPy": "Wǒ rènwéi chénggōng bú shì yǒu hěn duō qián, érshì zuò zìjǐ xǐhuan de shìqing.",
    "note": "不是……而是…… (Bài 11 · điểm 3).",
    "pair": "不是……而是……"
   },
   {
    "promptLang": "vi",
    "prompt": "Chỉ cần kiên trì, bạn nhất định sẽ thành công.",
    "answer": "只要坚持下去，你就一定会成功。",
    "answerPy": "Zhǐyào jiānchí xiàqu, nǐ jiù yídìng huì chénggōng.",
    "note": "Ôn 只要……就…… (HSK 3).",
    "pair": "只要……就……"
   }
  ]
 },
 {
  "n": 27,
  "zh": "分数",
  "py": "fēnshù",
  "pos": "Danh từ",
  "vn": "điểm số",
  "hv": "phân số",
  "em": "💯",
  "lesson": 3,
  "explain": [
   "Số điểm đạt được trong bài thi, bài kiểm tra. ⚠ Hán Việt “phân số” nhưng trong bài nghĩa là ĐIỂM SỐ (nghĩa “phân số” trong toán học ít gặp hơn)."
  ],
  "usage": "考试分数 · 分数很高 · 只关心分数 · 考高分 (thi được điểm cao).",
  "collo": [
   "考试分数",
   "分数很高",
   "只关心分数",
   "查分数"
  ],
  "colloFull": [
   {
    "zh": "考试分数",
    "py": "Kǎoshì fēnshù",
    "vn": "điểm thi"
   },
   {
    "zh": "分数很高",
    "py": "Fēnshù hěn gāo",
    "vn": "điểm rất cao"
   },
   {
    "zh": "只关心分数",
    "py": "Zhǐ guānxīn fēnshù",
    "vn": "chỉ quan tâm điểm số"
   },
   {
    "zh": "查分数",
    "py": "Chá fēnshù",
    "vn": "tra điểm"
   }
  ],
  "patterns": [
   {
    "s": "分数 + 高 / 低",
    "m": "Điểm cao / thấp"
   },
   {
    "s": "考 + 高分",
    "m": "Thi được điểm cao (分 = điểm)"
   }
  ],
  "ex_zh": "所以，他们只关心孩子的分数，结果孩子压力特别大。",
  "ex_py": "Suǒyǐ, tāmen zhǐ guānxīn háizi de fēnshù, jiéguǒ háizi yālì tèbié dà.",
  "ex_vn": "Vì vậy họ chỉ quan tâm điểm số của con, kết quả là con bị áp lực vô cùng lớn.",
  "exList": [
   {
    "zh": "所以，他们只关心孩子的分数，结果孩子压力特别大。",
    "py": "Suǒyǐ, tāmen zhǐ guānxīn háizi de fēnshù, jiéguǒ háizi yālì tèbié dà.",
    "vn": "Vì vậy họ chỉ quan tâm điểm số của con, kết quả là con bị áp lực vô cùng lớn."
   },
   {
    "zh": "这次考试的分数明天就能查到。",
    "py": "Zhè cì kǎoshì de fēnshù míngtiān jiù néng chádào.",
    "vn": "Điểm kỳ thi lần này mai là tra được."
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
    "c": "数",
    "p": "shù",
    "type": "左右结构 · Trái-phải (giản thể)",
    "st": 13,
    "ord": "娄(biến thể) trái → 攵 (phốc) phải",
    "rad": "攵 (phốc – hành động)",
    "mean": "số, đếm",
    "tip": "Bộ 攵(hành động đếm) → hành động ĐẾM, kết hợp 字(chữ, ký hiệu) thành 数字 = CON SỐ (ký hiệu để đếm).",
    "cf": "数 khi đọc \"shǔ\" nghĩa là ĐẾM (数一数)",
    "w": "数字 / 数学 / 岁数"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Điểm số không phải là quan trọng nhất, mà là đã học được gì.",
    "answer": "分数不是最重要的，最重要的是学到了什么。",
    "answerPy": "Fēnshù bú shì zuì zhòngyào de, zuì zhòngyào de shì xuédào le shénme.",
    "note": "Ôn ý 不是……而是 / 最重要的是…….",
    "pair": "……不是……"
   },
   {
    "promptLang": "vi",
    "prompt": "Cho dù điểm không cao, mẹ cũng không phê bình con.",
    "answer": "即使分数不高，妈妈也没有批评孩子。",
    "answerPy": "Jíshǐ fēnshù bù gāo, māma yě méiyǒu pīpíng háizi.",
    "note": "即使……也…… (Bài 11 · điểm 1).",
    "pair": "即使……也……"
   }
  ]
 },
 {
  "n": 28,
  "zh": "目的",
  "py": "mùdì",
  "pos": "Danh từ",
  "vn": "mục đích",
  "hv": "mục đích",
  "em": "🎯",
  "lesson": 3,
  "explain": [
   "Điều muốn đạt được khi làm một việc. Cấu trúc hay gặp: ……的目的是……; 目的不是……，而是……"
  ],
  "usage": "教育的目的 · ……的目的是…… · 达到目的 · 学习目的.",
  "collo": [
   "教育的目的",
   "学习目的",
   "达到目的",
   "目的是……"
  ],
  "colloFull": [
   {
    "zh": "教育的目的",
    "py": "Jiàoyù de mùdì",
    "vn": "mục đích của giáo dục"
   },
   {
    "zh": "学习目的",
    "py": "Xuéxí mùdì",
    "vn": "mục đích học tập"
   },
   {
    "zh": "达到目的",
    "py": "Dádào mùdì",
    "vn": "đạt được mục đích"
   },
   {
    "zh": "目的是……",
    "py": "Mùdì shì……",
    "vn": "mục đích là …"
   }
  ],
  "patterns": [
   {
    "s": "……的目的是……",
    "m": "Mục đích của … là …"
   },
   {
    "s": "目的 ≠ 目的地",
    "m": "目的地 (Bài 3) = nơi đến"
   }
  ],
  "ex_zh": "后来，他们认识到，教育的目的不是让孩子考高分，而是帮助孩子养成好习惯。",
  "ex_py": "Hòulái, tāmen rènshi dào, jiàoyù de mùdì bú shì ràng háizi kǎo gāofēn, érshì bāngzhù háizi yǎngchéng hǎo xíguàn.",
  "ex_vn": "Về sau họ nhận ra, mục đích của giáo dục không phải là để con thi được điểm cao, mà là giúp con hình thành thói quen tốt.",
  "exList": [
   {
    "zh": "后来，他们认识到，教育的目的不是让孩子考高分，而是帮助孩子养成好习惯。",
    "py": "Hòulái, tāmen rènshi dào, jiàoyù de mùdì bú shì ràng háizi kǎo gāofēn, érshì bāngzhù háizi yǎngchéng hǎo xíguàn.",
    "vn": "Về sau họ nhận ra, mục đích của giáo dục không phải là để con thi được điểm cao, mà là giúp con hình thành thói quen tốt."
   },
   {
    "zh": "你来中国留学的目的是什么？",
    "py": "Nǐ lái Zhōngguó liúxué de mùdì shì shénme?",
    "vn": "Mục đích bạn sang Trung Quốc du học là gì?"
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
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Mục đích anh ấy học tiếng Trung là để làm thương mại quốc tế sau này.",
    "answer": "他学中文的目的是将来做国际贸易。",
    "answerPy": "Tā xué Zhōngwén de mùdì shì jiānglái zuò guójì màoyì.",
    "note": "Ôn từ 将来, 国际贸易 (Bài 1).",
    "pair": "……的目的是……"
   },
   {
    "promptLang": "vi",
    "prompt": "Mục đích tôi đi du lịch không phải là mua sắm, mà là hiểu văn hóa địa phương.",
    "answer": "我旅游的目的不是购物，而是了解那里的文化。",
    "answerPy": "Wǒ lǚyóu de mùdì bú shì gòuwù, érshì liǎojiě nàli de wénhuà.",
    "note": "不是……而是…… (Bài 11 · điểm 3).",
    "pair": "目的不是……而是……"
   }
  ]
 },
 {
  "n": 29,
  "zh": "养成",
  "py": "yǎngchéng",
  "pos": "Động từ",
  "vn": "hình thành, tạo thành (thói quen)",
  "hv": "dưỡng thành",
  "em": "🌿",
  "lesson": 3,
  "explain": [
   "Dần dần tạo ra (thói quen, tính cách) qua thời gian dài; tân ngữ thường là 习惯."
  ],
  "usage": "养成好习惯 · 养成……的习惯 · 从小养成.",
  "collo": [
   "养成好习惯",
   "养成……的习惯",
   "从小养成",
   "养成坏习惯"
  ],
  "colloFull": [
   {
    "zh": "养成好习惯",
    "py": "Yǎngchéng hǎo xíguàn",
    "vn": "hình thành thói quen tốt"
   },
   {
    "zh": "养成……的习惯",
    "py": "Yǎngchéng…… de xíguàn",
    "vn": "tạo thói quen …"
   },
   {
    "zh": "从小养成",
    "py": "Cóng xiǎo yǎngchéng",
    "vn": "hình thành từ nhỏ"
   },
   {
    "zh": "养成坏习惯",
    "py": "Yǎngchéng huài xíguàn",
    "vn": "nhiễm thói quen xấu"
   }
  ],
  "patterns": [
   {
    "s": "养成 + (……的) + 习惯",
    "m": "Hình thành thói quen gì"
   }
  ],
  "ex_zh": "教育的目的不是让孩子考高分，而是帮助孩子养成好习惯。",
  "ex_py": "Jiàoyù de mùdì bú shì ràng háizi kǎo gāofēn, érshì bāngzhù háizi yǎngchéng hǎo xíguàn.",
  "ex_vn": "Mục đích của giáo dục không phải là để con thi điểm cao, mà là giúp con hình thành thói quen tốt.",
  "exList": [
   {
    "zh": "教育的目的不是让孩子考高分，而是帮助孩子养成好习惯。",
    "py": "Jiàoyù de mùdì bú shì ràng háizi kǎo gāofēn, érshì bāngzhù háizi yǎngchéng hǎo xíguàn.",
    "vn": "Mục đích của giáo dục không phải là để con thi điểm cao, mà là giúp con hình thành thói quen tốt."
   },
   {
    "zh": "我从小就养成了早睡早起的习惯。",
    "py": "Wǒ cóng xiǎo jiù yǎngchéng le zǎo shuì zǎoqǐ de xíguàn.",
    "vn": "Từ nhỏ tôi đã có thói quen ngủ sớm dậy sớm."
   }
  ],
  "hanzi": [
   {
    "c": "养",
    "p": "yǎng",
    "type": "上下结构 · Trên-dưới (giản thể)",
    "st": 9,
    "ord": "𦍌 (dương) trên → 𧘇 dưới",
    "rad": "羊 (dương – dê)",
    "mean": "nuôi dưỡng",
    "tip": "Bộ dê 羊 (nuôi dê) → NUÔI DƯỠNG, kết hợp 成(thành) thành 养成 = NUÔI DƯỠNG THÀNH (thói quen).",
    "cf": "美 (měi – \"đẹp\", cũng có 羊 ở trên)",
    "w": "养成 / 养 / 营养"
   },
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
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Từ nhỏ cô ấy đã có thói quen đọc sách mỗi ngày.",
    "answer": "她从小就养成了每天看书的习惯。",
    "answerPy": "Tā cóng xiǎo jiù yǎngchéng le měitiān kànshū de xíguàn.",
    "note": "养成 + ……的习惯.",
    "pair": "养成……的习惯"
   },
   {
    "promptLang": "vi",
    "prompt": "Muốn con hình thành thói quen tốt, một mặt cha mẹ phải ở bên con nhiều hơn, mặt khác phải kiên trì.",
    "answer": "要让孩子养成好习惯，一方面家长要多陪孩子，另一方面要坚持。",
    "answerPy": "Yào ràng háizi yǎngchéng hǎo xíguàn, yìfāngmiàn jiāzhǎng yào duō péi háizi, lìngyìfāngmiàn yào jiānchí.",
    "note": "Ôn 一方面……另一方面…… (Bài 1).",
    "pair": "一方面……另一方面……"
   }
  ]
 },
 {
  "n": 30,
  "zh": "留",
  "py": "liú",
  "pos": "Động từ",
  "vn": "để lại, dành ra; ở lại",
  "hv": "lưu",
  "em": "⏳",
  "lesson": 3,
  "explain": [
   "Dành ra, để lại (thời gian, chỗ, đồ…) — 留出时间 (dành thời gian), 给……留……",
   "Ở lại một nơi: 留在北京, 留学."
  ],
  "usage": "留出时间 · 给孩子留时间 · 留在…… · 留作业.",
  "collo": [
   "留出时间",
   "留作业",
   "留在北京",
   "给……留座位"
  ],
  "colloFull": [
   {
    "zh": "留出时间",
    "py": "Liúchū shíjiān",
    "vn": "dành ra thời gian"
   },
   {
    "zh": "留作业",
    "py": "Liú zuòyè",
    "vn": "giao bài tập về nhà"
   },
   {
    "zh": "留在北京",
    "py": "Liú zài Běijīng",
    "vn": "ở lại Bắc Kinh"
   },
   {
    "zh": "给……留座位",
    "py": "Gěi…… liú zuòwèi",
    "vn": "giữ chỗ ngồi cho …"
   }
  ],
  "patterns": [
   {
    "s": "给 + ai + 留(出) + N",
    "m": "Dành / để lại cho ai cái gì"
   },
   {
    "s": "留 + 在 + nơi chốn",
    "m": "Ở lại đâu"
   }
  ],
  "ex_zh": "每天都给孩子留出时间外出锻炼身体，或者看些自己感兴趣的书。",
  "ex_py": "Měitiān dōu gěi háizi liúchū shíjiān wàichū duànliàn shēntǐ, huòzhě kàn xiē zìjǐ gǎnxìngqù de shū.",
  "ex_vn": "Ngày nào cũng dành thời gian cho con ra ngoài rèn luyện thân thể, hoặc đọc vài cuốn sách mình thích.",
  "exList": [
   {
    "zh": "每天都给孩子留出时间外出锻炼身体，或者看些自己感兴趣的书。",
    "py": "Měitiān dōu gěi háizi liúchū shíjiān wàichū duànliàn shēntǐ, huòzhě kàn xiē zìjǐ gǎnxìngqù de shū.",
    "vn": "Ngày nào cũng dành thời gian cho con ra ngoài rèn luyện thân thể, hoặc đọc vài cuốn sách mình thích."
   },
   {
    "zh": "即使每天工作很忙，我也会留出时间读书。",
    "py": "Jíshǐ měitiān gōngzuò hěn máng, wǒ yě huì liúchū shíjiān dúshū.",
    "vn": "Cho dù mỗi ngày công việc rất bận, tôi cũng sẽ dành thời gian đọc sách."
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
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Tốt nghiệp rồi, anh ấy quyết định ở lại Bắc Kinh làm việc.",
    "answer": "毕业以后，他决定留在北京工作。",
    "answerPy": "Bìyè yǐhòu, tā juédìng liú zài Běijīng gōngzuò.",
    "note": "留 + 在 + nơi chốn.",
    "pair": "留在……"
   },
   {
    "promptLang": "vi",
    "prompt": "Hôm nay thầy giao nhiều bài tập quá, tôi e là làm không xong.",
    "answer": "今天老师留的作业太多了，我恐怕做不完。",
    "answerPy": "Jīntiān lǎoshī liú de zuòyè tài duō le, wǒ kǒngpà zuò bu wán.",
    "note": "Ôn 恐怕 (Bài 2) + bổ ngữ khả năng.",
    "pair": "恐怕 + V不完"
   }
  ]
 },
 {
  "n": 31,
  "zh": "做法",
  "py": "zuòfǎ",
  "pos": "Danh từ",
  "vn": "cách làm",
  "hv": "tố pháp",
  "em": "🛠️",
  "lesson": 3,
  "explain": [
   "Cách thức làm một việc, cách xử lý (thái độ, hành động) — 他们的做法; cũng là cách chế biến món ăn (这道菜的做法)."
  ],
  "usage": "……的做法很好 · 这种做法 · 改变做法 · 菜的做法.",
  "collo": [
   "他们的做法",
   "这种做法",
   "改变做法",
   "菜的做法"
  ],
  "colloFull": [
   {
    "zh": "他们的做法",
    "py": "Tāmen de zuòfǎ",
    "vn": "cách làm của họ"
   },
   {
    "zh": "这种做法",
    "py": "Zhè zhǒng zuòfǎ",
    "vn": "cách làm này"
   },
   {
    "zh": "改变做法",
    "py": "Gǎibiàn zuòfǎ",
    "vn": "thay đổi cách làm"
   },
   {
    "zh": "菜的做法",
    "py": "Cài de zuòfǎ",
    "vn": "cách nấu món ăn"
   }
  ],
  "patterns": [
   {
    "s": "Ai / việc + 的 + 做法",
    "m": "Cách làm của ai / của việc gì"
   }
  ],
  "ex_zh": "我觉得他们的做法真棒。",
  "ex_py": "Wǒ juéde tāmen de zuòfǎ zhēn bàng.",
  "ex_vn": "Tôi thấy cách làm của họ thật tuyệt.",
  "exList": [
   {
    "zh": "我觉得他们的做法真棒。",
    "py": "Wǒ juéde tāmen de zuòfǎ zhēn bàng.",
    "vn": "Tôi thấy cách làm của họ thật tuyệt."
   },
   {
    "zh": "这道菜的做法很简单，你一学就会。",
    "py": "Zhè dào cài de zuòfǎ hěn jiǎndān, nǐ yì xué jiù huì.",
    "vn": "Cách nấu món này rất đơn giản, bạn học một cái là biết ngay."
   }
  ],
  "hanzi": [
   {
    "c": "做",
    "p": "zuò",
    "type": "形声字 · Chữ hình thanh",
    "st": 11,
    "ord": "亻 → 古 → 攵",
    "rad": "亻 (nhân đứng – người)",
    "mean": "làm",
    "tip": "亻 (người) + 故 (chỉ âm): con người làm việc. Ôn: 做饭 (HSK1 Bài 5). 做客 = \"làm khách\".",
    "cf": "作 zuò (工作 – HSK1 Bài 3) — bên phải là 乍",
    "w": "做客 / 做饭 / 做法"
   },
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
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Tôi không đồng ý với cách làm này.",
    "answer": "我不同意这种做法。",
    "answerPy": "Wǒ bù tóngyì zhè zhǒng zuòfǎ.",
    "note": "这种 + 做法.",
    "pair": "这种做法"
   },
   {
    "promptLang": "vi",
    "prompt": "So với trước đây, cách làm bây giờ tiết kiệm thời gian hơn.",
    "answer": "跟以前的做法相比，现在的做法更节约时间。",
    "answerPy": "Gēn yǐqián de zuòfǎ xiāngbǐ, xiànzài de zuòfǎ gèng jiéyuē shíjiān.",
    "note": "Ôn 跟……相比 (Bài 8 · điểm 3).",
    "pair": "跟……相比"
   }
  ]
 },
 {
  "n": 32,
  "zh": "棒",
  "py": "bàng",
  "pos": "Tính từ",
  "vn": "giỏi, tuyệt, cừ",
  "hv": "bổng",
  "em": "👍",
  "lesson": 3,
  "explain": [
   "(Khẩu ngữ) rất tốt, rất giỏi, xuất sắc — dùng để khen: 真棒! 太棒了!"
  ],
  "usage": "真棒 · 太棒了 · 做得很棒 · 棒极了.",
  "collo": [
   "真棒",
   "太棒了",
   "棒极了",
   "做得很棒"
  ],
  "colloFull": [
   {
    "zh": "真棒",
    "py": "Zhēn bàng",
    "vn": "giỏi thật, tuyệt thật"
   },
   {
    "zh": "太棒了",
    "py": "Tài bàng le",
    "vn": "tuyệt quá"
   },
   {
    "zh": "棒极了",
    "py": "Bàng jí le",
    "vn": "tuyệt vời"
   },
   {
    "zh": "做得很棒",
    "py": "Zuò de hěn bàng",
    "vn": "làm rất tốt"
   }
  ],
  "patterns": [
   {
    "s": "V + 得 + 很棒",
    "m": "Bổ ngữ trình độ (HSK 2–3)"
   }
  ],
  "ex_zh": "我觉得他们的做法真棒。",
  "ex_py": "Wǒ juéde tāmen de zuòfǎ zhēn bàng.",
  "ex_vn": "Tôi thấy cách làm của họ thật tuyệt.",
  "exList": [
   {
    "zh": "我觉得他们的做法真棒。",
    "py": "Wǒ juéde tāmen de zuòfǎ zhēn bàng.",
    "vn": "Tôi thấy cách làm của họ thật tuyệt."
   },
   {
    "zh": "你的中文说得真棒！",
    "py": "Nǐ de Zhōngwén shuō de zhēn bàng!",
    "vn": "Bạn nói tiếng Trung giỏi thật!"
   }
  ],
  "hanzi": [
   {
    "c": "棒",
    "p": "bàng",
    "type": "左右结构 · Trái-phải",
    "st": 12,
    "ord": "木 trái → 奉 phải",
    "rad": "木 (mộc)",
    "mean": "gậy; giỏi",
    "tip": "Gỗ 木 + 奉 → cây GẬY; khẩu ngữ mở rộng thành GIỎI, TUYỆT (như tiếng Việt \"đỉnh\").",
    "cf": "捧 (pěng – bưng)",
    "w": "真棒 / 太棒了 / 棒球"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Ông bảy mươi tuổi rồi mà vẫn đánh đàn piano, thật cừ!",
    "answer": "爷爷都七十岁了，还会弹钢琴，真棒！",
    "answerPy": "Yéye dōu qīshí suì le, hái huì tángāngqín, zhēn bàng!",
    "note": "Ôn 都……了，还…… (bài khoá 1).",
    "pair": "都……了，还……"
   },
   {
    "promptLang": "vi",
    "prompt": "Lần này bạn thi tốt quá, đúng là giỏi hết chỗ nói.",
    "answer": "你这次考得太好了，真是棒极了。",
    "answerPy": "Nǐ zhè cì kǎo de tài hǎo le, zhēnshì bàng jí le.",
    "note": "Ôn V得 + Adj, Adj + 极了 (HSK 3).",
    "pair": "棒极了"
   }
  ]
 },
 {
  "n": 33,
  "zh": "一生",
  "py": "yìshēng",
  "pos": "Danh từ",
  "vn": "cả đời, suốt đời",
  "hv": "nhất sinh",
  "em": "⌛",
  "lesson": 4,
  "explain": [
   "Toàn bộ cuộc đời của một người, từ khi sinh ra đến lúc mất. Chữ 一 đọc thanh 4 (yì) vì đứng trước thanh 1."
  ],
  "usage": "人一生的事情 · 一生只做了一件事 · 一生中.",
  "collo": [
   "一生的事情",
   "一生中",
   "一生只……",
   "影响一生"
  ],
  "colloFull": [
   {
    "zh": "一生的事情",
    "py": "Yìshēng de shìqing",
    "vn": "việc cả đời"
   },
   {
    "zh": "一生中",
    "py": "Yìshēng zhōng",
    "vn": "trong cả cuộc đời"
   },
   {
    "zh": "一生只……",
    "py": "Yìshēng zhǐ……",
    "vn": "cả đời chỉ …"
   },
   {
    "zh": "影响一生",
    "py": "Yǐngxiǎng yìshēng",
    "vn": "ảnh hưởng cả đời"
   }
  ],
  "patterns": [
   {
    "s": "人 + 一生 + 的 + N",
    "m": "Làm định ngữ"
   },
   {
    "s": "一生 + 只 / 都 + V",
    "m": "Làm trạng ngữ thời gian"
   }
  ],
  "ex_zh": "学习是人一生的事情，要活到老学到老。",
  "ex_py": "Xuéxí shì rén yìshēng de shìqing, yào huó dào lǎo xuédào lǎo.",
  "ex_vn": "Học tập là việc cả đời của con người, phải sống đến già học đến già.",
  "exList": [
   {
    "zh": "学习是人一生的事情，要活到老学到老。",
    "py": "Xuéxí shì rén yìshēng de shìqing, yào huó dào lǎo xuédào lǎo.",
    "vn": "Học tập là việc cả đời của con người, phải sống đến già học đến già."
   },
   {
    "zh": "他一生只做了一件事，那就是研究数学。",
    "py": "Tā yìshēng zhǐ zuò le yí jiàn shì, nà jiùshì yánjiū shùxué.",
    "vn": "Cả đời ông ấy chỉ làm một việc, đó là nghiên cứu toán học."
   }
  ],
  "hanzi": [
   {
    "c": "一",
    "p": "yī",
    "type": "独体字 · Chỉ sự",
    "st": 1,
    "ord": "一 (một nét ngang duy nhất)",
    "rad": "一 (nhất – tự thành bộ, số một)",
    "mean": "một, số 1",
    "tip": "Một nét NGANG đơn giản nhất, tượng trưng cho đơn vị ÍT NHẤT → SỐ MỘT. Đọc yī; đứng trước thanh 4 đổi thành yí (一会儿), trước thanh 1, 2, 3 đổi thành yì (一起).",
    "cf": "二 (èr – \"số hai\", thêm một nét ngang thứ hai)",
    "w": "一起 / 一点儿 / 第一"
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
    "prompt": "Thói quen tốt sẽ ảnh hưởng cả đời một người.",
    "answer": "好习惯会影响人的一生。",
    "answerPy": "Hǎo xíguàn huì yǐngxiǎng rén de yìshēng.",
    "note": "Ôn từ 养成 / 习惯.",
    "pair": "影响……一生"
   },
   {
    "promptLang": "vi",
    "prompt": "Cả đời bà chưa bao giờ rời quê.",
    "answer": "奶奶一生从来没离开过老家。",
    "answerPy": "Nǎinai yìshēng cónglái méi líkāi guò lǎojiā.",
    "note": "Ôn 从来没 + V过 (Bài 9 · điểm 4).",
    "pair": "从来没……过"
   }
  ]
 },
 {
  "n": 34,
  "zh": "快速",
  "py": "kuàisù",
  "pos": "Tính từ",
  "vn": "nhanh chóng, tốc độ cao",
  "hv": "khoái tốc",
  "em": "⚡",
  "lesson": 4,
  "explain": [
   "Tốc độ nhanh; hay làm định ngữ hoặc trạng ngữ, mang sắc thái văn viết: 快速变化, 快速发展."
  ],
  "usage": "快速变化 · 快速发展 · 快速地 + V · 快速阅读.",
  "collo": [
   "快速变化",
   "快速发展",
   "快速阅读",
   "快速地完成"
  ],
  "colloFull": [
   {
    "zh": "快速变化",
    "py": "Kuàisù biànhuà",
    "vn": "thay đổi nhanh chóng"
   },
   {
    "zh": "快速发展",
    "py": "Kuàisù fāzhǎn",
    "vn": "phát triển nhanh"
   },
   {
    "zh": "快速阅读",
    "py": "Kuàisù yuèdú",
    "vn": "đọc nhanh"
   },
   {
    "zh": "快速地完成",
    "py": "Kuàisù de wánchéng",
    "vn": "hoàn thành nhanh chóng"
   }
  ],
  "patterns": [
   {
    "s": "快速 + V (变化 / 发展)",
    "m": "Làm trạng ngữ, thường không cần 地"
   }
  ],
  "ex_zh": "在世界快速变化的今天，“学而不厌”变得更加重要。",
  "ex_py": "Zài shìjiè kuàisù biànhuà de jīntiān, “xué ér bú yàn” biànde gèngjiā zhòngyào.",
  "ex_vn": "Trong thời đại ngày nay khi thế giới thay đổi nhanh chóng, “học không biết chán” càng trở nên quan trọng.",
  "exList": [
   {
    "zh": "在世界快速变化的今天，“学而不厌”变得更加重要。",
    "py": "Zài shìjiè kuàisù biànhuà de jīntiān, “xué ér bú yàn” biànde gèngjiā zhòngyào.",
    "vn": "Trong thời đại ngày nay khi thế giới thay đổi nhanh chóng, “học không biết chán” càng trở nên quan trọng."
   },
   {
    "zh": "这个城市这几年发展得很快速。",
    "py": "Zhège chéngshì zhè jǐ nián fāzhǎn de hěn kuàisù.",
    "vn": "Mấy năm nay thành phố này phát triển rất nhanh chóng."
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
    "c": "速",
    "p": "sù",
    "type": "半包围结构 · Nửa bao quanh",
    "st": 10,
    "ord": "束 trong → 辶 bao",
    "rad": "辶 (sước)",
    "mean": "nhanh",
    "tip": "Bộ đi 辶 + 束(bó, buộc) → đi nhanh như bó tên bắn → TỐC, NHANH. 速度 = TỐC ĐỘ.",
    "cf": "束 (shù – bó)",
    "w": "速度 / 高速 / 快速"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Cùng với khoa học kỹ thuật phát triển nhanh, cuộc sống của chúng ta thay đổi rất nhiều.",
    "answer": "随着科技的快速发展，我们的生活发生了很大的变化。",
    "answerPy": "Suízhe kējì de kuàisù fāzhǎn, wǒmen de shēnghuó fāshēng le hěn dà de biànhuà.",
    "note": "Ôn 随着 (Bài 1 · điểm 3).",
    "pair": "随着……的快速发展"
   },
   {
    "promptLang": "vi",
    "prompt": "Đọc nhanh đoạn văn, chọn đáp án đúng.",
    "answer": "快速阅读短文，选择正确答案。",
    "answerPy": "Kuàisù yuèdú duǎn wén, xuǎnzé zhèngquè dá'àn.",
    "note": "Câu yêu cầu trong sách.",
    "pair": "快速阅读"
   }
  ]
 },
 {
  "n": 35,
  "zh": "优秀",
  "py": "yōuxiù",
  "pos": "Tính từ",
  "vn": "ưu tú, xuất sắc",
  "hv": "ưu tú",
  "em": "🌟",
  "lesson": 4,
  "explain": [
   "(Người, thành tích, tác phẩm) rất tốt, vượt trội — trang trọng hơn 好 / 棒."
  ],
  "usage": "很优秀 · 优秀的学生 · 优秀的律师 · 成绩优秀.",
  "collo": [
   "优秀的学生",
   "成绩优秀",
   "非常优秀",
   "优秀员工"
  ],
  "colloFull": [
   {
    "zh": "优秀的学生",
    "py": "Yōuxiù de xuésheng",
    "vn": "học sinh ưu tú"
   },
   {
    "zh": "成绩优秀",
    "py": "Chéngjì yōuxiù",
    "vn": "thành tích xuất sắc"
   },
   {
    "zh": "非常优秀",
    "py": "Fēicháng yōuxiù",
    "vn": "vô cùng xuất sắc"
   },
   {
    "zh": "优秀员工",
    "py": "Yōuxiù yuángōng",
    "vn": "nhân viên xuất sắc"
   }
  ],
  "patterns": [
   {
    "s": "优秀 + 的 + N",
    "m": "Làm định ngữ"
   },
   {
    "s": "N + 很 / 非常 + 优秀",
    "m": "Làm vị ngữ"
   }
  ],
  "ex_zh": "我有一位很优秀的律师朋友，他一直在学习新的法律知识。",
  "ex_py": "Wǒ yǒu yí wèi hěn yōuxiù de lǜshī péngyou, tā yìzhí zài xuéxí xīn de fǎlǜ zhīshi.",
  "ex_vn": "Tôi có một người bạn là luật sư rất xuất sắc, anh ấy luôn học kiến thức pháp luật mới.",
  "exList": [
   {
    "zh": "我有一位很优秀的律师朋友，他一直在学习新的法律知识。",
    "py": "Wǒ yǒu yí wèi hěn yōuxiù de lǜshī péngyou, tā yìzhí zài xuéxí xīn de fǎlǜ zhīshi.",
    "vn": "Tôi có một người bạn là luật sư rất xuất sắc, anh ấy luôn học kiến thức pháp luật mới."
   },
   {
    "zh": "他非常优秀，把任务交给他，我很放心。",
    "py": "Tā fēicháng yōuxiù, bǎ rènwu jiāogěi tā, wǒ hěn fàngxīn.",
    "vn": "Anh ấy rất xuất sắc, giao nhiệm vụ cho anh ấy tôi rất yên tâm."
   }
  ],
  "hanzi": [
   {
    "c": "优",
    "p": "yōu",
    "type": "左右结构 · Trái-phải (giản thể)",
    "st": 6,
    "ord": "亻 (nhân) trái → 尤(vưu) phải",
    "rad": "亻 (nhân – người)",
    "mean": "ưu tú, tốt đẹp",
    "tip": "Bộ người 亻 + 尤(đặc biệt, nổi trội) → NGƯỜI có điểm NỔI TRỘI, mở rộng thành ƯU TÚ, kết hợp 点(điểm) thành 优点 = ƯU ĐIỂM.",
    "cf": "忧 (yōu – \"lo lắng\", bộ 忄\")",
    "w": "优点 / 优秀 / 优势"
   },
   {
    "c": "秀",
    "p": "xiù",
    "type": "上下结构 · Trên-dưới",
    "st": 7,
    "ord": "禾 (hòa) trên → 乃 dưới",
    "rad": "禾 (hòa – lúa)",
    "mean": "tú lệ, xuất sắc",
    "tip": "Bộ lúa 禾 (bông lúa trổ đẹp) → mở rộng thành TÚ LỆ, XUẤT SẮC, kết hợp 优(ưu tú) thành 优秀 = XUẤT SẮC.",
    "cf": "季 (jì – \"mùa\", bộ 子\")",
    "w": "优秀 / 秀丽 / 优秀员工"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Cô ấy không những thành tích xuất sắc mà còn rất lễ phép.",
    "answer": "她不仅成绩优秀，而且很有礼貌。",
    "answerPy": "Tā bùjǐn chéngjì yōuxiù, érqiě hěn yǒu lǐmào.",
    "note": "Ôn 不仅……而且…… (Bài 3 · điểm 2).",
    "pair": "不仅……而且……"
   },
   {
    "promptLang": "vi",
    "prompt": "Những học sinh xuất sắc như vậy, trường chúng tôi có khối.",
    "answer": "这么优秀的学生，我们学校有的是。",
    "answerPy": "Zhème yōuxiù de xuésheng, wǒmen xuéxiào yǒudeshì.",
    "note": "Ôn 有的是 (Bài 10 · điểm 2).",
    "pair": "有的是"
   }
  ]
 },
 {
  "n": 36,
  "zh": "律师",
  "py": "lǜshī",
  "pos": "Danh từ",
  "vn": "luật sư",
  "hv": "luật sư",
  "em": "⚖️",
  "lesson": 4,
  "explain": [
   "Người làm nghề tư vấn, bào chữa về pháp luật."
  ],
  "usage": "当律师 · 做律师的 · 请律师 · 律师朋友.",
  "collo": [
   "当律师",
   "请律师",
   "律师朋友",
   "做律师的"
  ],
  "colloFull": [
   {
    "zh": "当律师",
    "py": "Dāng lǜshī",
    "vn": "làm luật sư"
   },
   {
    "zh": "请律师",
    "py": "Qǐng lǜshī",
    "vn": "thuê luật sư"
   },
   {
    "zh": "律师朋友",
    "py": "Lǜshī péngyou",
    "vn": "bạn là luật sư"
   },
   {
    "zh": "做律师的",
    "py": "Zuò lǜshī de",
    "vn": "người làm nghề luật sư"
   }
  ],
  "patterns": [
   {
    "s": "做 + nghề + 的",
    "m": "Người làm nghề … (khẩu ngữ): 做律师的"
   }
  ],
  "ex_zh": "我有一位很优秀的律师朋友。",
  "ex_py": "Wǒ yǒu yí wèi hěn yōuxiù de lǜshī péngyou.",
  "ex_vn": "Tôi có một người bạn là luật sư rất xuất sắc.",
  "exList": [
   {
    "zh": "我有一位很优秀的律师朋友。",
    "py": "Wǒ yǒu yí wèi hěn yōuxiù de lǜshī péngyou.",
    "vn": "Tôi có một người bạn là luật sư rất xuất sắc."
   },
   {
    "zh": "A：你们做律师的，平时工作一定很忙吧？B：也不一定，有时候周末也不能休息，有时候就能按时下班。",
    "py": "A: nǐmen zuò lǜshī de, píngshí gōngzuò yídìng hěn máng ba? B: yě bùyídìng, yǒushíhou zhōumò yě bù néng xiūxi, yǒushíhou jiù néng ànshí xiàbān.",
    "vn": "A: Các anh làm luật sư chắc ngày thường bận lắm nhỉ? B: Cũng không hẳn, có khi cuối tuần cũng không được nghỉ, có khi lại tan làm đúng giờ."
   }
  ],
  "hanzi": [
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
    "prompt": "Làm luật sư phải luôn học kiến thức pháp luật mới.",
    "answer": "当律师要一直学习新的法律知识。",
    "answerPy": "Dāng lǜshī yào yìzhí xuéxí xīn de fǎlǜ zhīshi.",
    "note": "Ôn từ 法律 (Bài 3).",
    "pair": "当律师"
   },
   {
    "promptLang": "vi",
    "prompt": "Đối với luật sư mà nói, học tập vừa là trách nhiệm, vừa là phương pháp nâng cao năng lực.",
    "answer": "对律师来说，学习既是责任，也是提高能力的方法。",
    "answerPy": "Duì lǜshī láishuō, xuéxí jì shì zérèn, yě shì tígāo nénglì de fāngfǎ.",
    "note": "Ôn 既……也…… (Bài 4 · điểm 3) + 对……来说.",
    "pair": "既……也……"
   }
  ]
 },
 {
  "n": 37,
  "zh": "仍",
  "py": "réng",
  "pos": "Phó từ",
  "vn": "vẫn, vẫn còn",
  "hv": "nhưng",
  "em": "🔁",
  "lesson": 4,
  "explain": [
   "Vẫn như trước, không thay đổi; nghĩa như 仍然 / 还是 nhưng mang tính văn viết; đứng trước động từ / tính từ."
  ],
  "usage": "仍很重要 · 仍在…… · 仍然 · 仍没有……",
  "collo": [
   "仍很重要",
   "仍在工作",
   "仍没有",
   "仍然"
  ],
  "colloFull": [
   {
    "zh": "仍很重要",
    "py": "Réng hěn zhòngyào",
    "vn": "vẫn rất quan trọng"
   },
   {
    "zh": "仍在工作",
    "py": "Réng zài gōngzuò",
    "vn": "vẫn đang làm việc"
   },
   {
    "zh": "仍没有",
    "py": "Réng méiyǒu",
    "vn": "vẫn chưa"
   },
   {
    "zh": "仍然",
    "py": "Réngrán",
    "vn": "vẫn (dạng hai âm tiết)"
   }
  ],
  "patterns": [
   {
    "s": "Sub + 仍 + V / Adj",
    "m": "Vẫn … (văn viết của 还)"
   }
  ],
  "ex_zh": "人就是不再工作了，坚持学习仍很重要。",
  "ex_py": "Rén jiùshì bú zài gōngzuò le, jiānchí xuéxí réng hěn zhòngyào.",
  "ex_vn": "Con người cho dù không còn đi làm nữa, kiên trì học tập vẫn rất quan trọng.",
  "exList": [
   {
    "zh": "人就是不再工作了，坚持学习仍很重要。",
    "py": "Rén jiùshì bú zài gōngzuò le, jiānchí xuéxí réng hěn zhòngyào.",
    "vn": "Con người cho dù không còn đi làm nữa, kiên trì học tập vẫn rất quan trọng."
   },
   {
    "zh": "已经十点了，他仍在办公室工作。",
    "py": "Yǐjīng shí diǎn le, tā réng zài bàngōngshì gōngzuò.",
    "vn": "Đã mười giờ rồi, anh ấy vẫn đang làm việc ở văn phòng."
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
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Cho dù đã bảy mươi tuổi, ông vẫn ngày nào cũng đi học.",
    "answer": "即使七十岁了，爷爷仍每天去上课。",
    "answerPy": "Jíshǐ qīshí suì le, yéye réng měitiān qù shàngkè.",
    "note": "即使……仍…… (điểm 1 + từ mới).",
    "pair": "即使……仍……"
   },
   {
    "promptLang": "vi",
    "prompt": "Tuy đã học ba năm, nhưng kỹ năng nói của anh ấy vẫn chưa tốt lắm.",
    "answer": "尽管学了三年，但是他的口语仍不太好。",
    "answerPy": "Jǐnguǎn xué le sān nián, dànshì tā de kǒuyǔ réng bú tài hǎo.",
    "note": "Ôn 尽管……但是…… (Bài 9 · điểm 2).",
    "pair": "尽管……但是……仍……"
   }
  ]
 },
 {
  "n": 38,
  "zh": "准时",
  "py": "zhǔnshí",
  "pos": "Tính từ",
  "vn": "đúng giờ",
  "hv": "chuẩn thời",
  "em": "⏰",
  "lesson": 4,
  "explain": [
   "Đúng thời gian đã định, không sớm không muộn; hay làm trạng ngữ: 准时到, 准时出发."
  ],
  "usage": "准时上课 · 准时到 · 很准时 · 准时出发.",
  "collo": [
   "准时上课",
   "准时到达",
   "准时出发",
   "很准时"
  ],
  "colloFull": [
   {
    "zh": "准时上课",
    "py": "Zhǔnshí shàngkè",
    "vn": "lên lớp đúng giờ"
   },
   {
    "zh": "准时到达",
    "py": "Zhǔnshí dàodá",
    "vn": "đến đúng giờ"
   },
   {
    "zh": "准时出发",
    "py": "Zhǔnshí chūfā",
    "vn": "xuất phát đúng giờ"
   },
   {
    "zh": "很准时",
    "py": "Hěn zhǔnshí",
    "vn": "rất đúng giờ"
   }
  ],
  "patterns": [
   {
    "s": "准时 + V",
    "m": "Làm trạng ngữ (= 按时)"
   },
   {
    "s": "N + 很准时",
    "m": "Làm vị ngữ"
   }
  ],
  "ex_zh": "虽然七十多岁了，每天还准时去老年大学上课。",
  "ex_py": "Suīrán qīshí duō suì le, měitiān hái zhǔnshí qù lǎonián dàxué shàngkè.",
  "ex_vn": "Tuy đã hơn bảy mươi tuổi, ngày nào ông cũng đi học đúng giờ ở trường đại học người cao tuổi.",
  "exList": [
   {
    "zh": "虽然七十多岁了，每天还准时去老年大学上课。",
    "py": "Suīrán qīshí duō suì le, měitiān hái zhǔnshí qù lǎonián dàxué shàngkè.",
    "vn": "Tuy đã hơn bảy mươi tuổi, ngày nào ông cũng đi học đúng giờ ở trường đại học người cao tuổi."
   },
   {
    "zh": "这趟飞机准时起飞了。",
    "py": "Zhè tàng fēijī zhǔnshí qǐfēi le.",
    "vn": "Chuyến bay này cất cánh đúng giờ."
   }
  ],
  "hanzi": [
   {
    "c": "准",
    "p": "zhǔn",
    "type": "左右结构 · Trái-phải (giản thể)",
    "st": 10,
    "ord": "冫 (băng) trái → 隹 (chuy) phải",
    "rad": "冫 (băng – nước đá)",
    "mean": "chuẩn xác, đúng",
    "tip": "Bộ 冫(bằng phẳng như mặt băng) + 隹(chim, biểu âm) → CHUẨN XÁC, ĐÚNG MỰC, kết hợp 时(giờ) thành 准时 = ĐÚNG GIỜ.",
    "cf": "准 dễ nhầm với 淮 (huái – \"sông Hoài\")",
    "w": "准时 / 准备 / 标准"
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
    "prompt": "Cho dù trời mưa to, chúng ta cũng sẽ xuất phát đúng giờ.",
    "answer": "就是下大雨，我们也会准时出发。",
    "answerPy": "Jiùshì xià dàyǔ, wǒmen yě huì zhǔnshí chūfā.",
    "note": "就是……也…… (Bài 11 · điểm 2).",
    "pair": "就是……也……"
   },
   {
    "promptLang": "vi",
    "prompt": "Ngày mai họp lúc 9 giờ, ai cũng không được đến muộn, phải đến đúng giờ.",
    "answer": "明天九点开会，任何人都不能迟到，一定要准时到。",
    "answerPy": "Míngtiān jiǔ diǎn kāihuì, rènhé rén dōu bù néng chídào, yídìng yào zhǔnshí dào.",
    "note": "Ôn 任何 (Bài 1 · điểm 1).",
    "pair": "任何……都……"
   }
  ]
 },
 {
  "n": 39,
  "zh": "网页",
  "py": "wǎngyè",
  "pos": "Danh từ",
  "vn": "trang web",
  "hv": "võng hiệt",
  "em": "🖥️",
  "lesson": 4,
  "explain": [
   "Một trang trên mạng Internet; 做网页 = thiết kế, làm trang web. (网站 là cả website, 网页 là từng trang.)"
  ],
  "usage": "做网页 · 打开网页 · 网页设计.",
  "collo": [
   "做网页",
   "打开网页",
   "网页设计",
   "学校的网页"
  ],
  "colloFull": [
   {
    "zh": "做网页",
    "py": "Zuò wǎngyè",
    "vn": "làm trang web"
   },
   {
    "zh": "打开网页",
    "py": "Dǎkāi wǎngyè",
    "vn": "mở trang web"
   },
   {
    "zh": "网页设计",
    "py": "Wǎngyè shèjì",
    "vn": "thiết kế trang web"
   },
   {
    "zh": "学校的网页",
    "py": "Xuéxiào de wǎngyè",
    "vn": "trang web của trường"
   }
  ],
  "patterns": [
   {
    "s": "网页 ≠ 网站",
    "m": "网站: cả website; 网页: một trang"
   }
  ],
  "ex_zh": "每天还准时去老年大学上课，学习做网页、弹钢琴。",
  "ex_py": "Měitiān hái zhǔnshí qù lǎonián dàxué shàngkè, xuéxí zuò wǎngyè, tángāngqín.",
  "ex_vn": "Ngày nào cũng đi học đúng giờ ở trường người cao tuổi, học làm trang web, đánh đàn piano.",
  "exList": [
   {
    "zh": "每天还准时去老年大学上课，学习做网页、弹钢琴。",
    "py": "Měitiān hái zhǔnshí qù lǎonián dàxué shàngkè, xuéxí zuò wǎngyè, tángāngqín.",
    "vn": "Ngày nào cũng đi học đúng giờ ở trường người cao tuổi, học làm trang web, đánh đàn piano."
   },
   {
    "zh": "这个网页打不开，你帮我看看吧。",
    "py": "Zhège wǎngyè dǎ bu kāi, nǐ bāng wǒ kànkan ba.",
    "vn": "Trang web này không mở được, bạn xem giúp mình với."
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
    "c": "页",
    "p": "yè",
    "type": "独体字 · Chữ đơn (giản thể)",
    "st": 6,
    "ord": "nét liền",
    "rad": "页 (hiệt – đầu)",
    "mean": "trang sách, đầu",
    "tip": "Chữ tượng hình cái ĐẦU người (nghĩa gốc), sau mượn dùng làm lượng từ TRANG SÁCH (mỗi trang như một \"đầu\" của tờ giấy).",
    "cf": "贝 (bèi – \"vỏ sò\", tự dạng gần giống)",
    "w": "页 / 一页 / 网页"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Trang web này không mở được.",
    "answer": "这个网页打不开。",
    "answerPy": "Zhège wǎngyè dǎ bu kāi.",
    "note": "Ôn bổ ngữ khả năng V不开 (HSK 3).",
    "pair": "V不开"
   },
   {
    "promptLang": "vi",
    "prompt": "Ông tôi không những biết làm trang web, mà còn biết dùng nhiều phần mềm.",
    "answer": "我爷爷不仅会做网页，还会用很多软件。",
    "answerPy": "Wǒ yéye bùjǐn huì zuò wǎngyè, hái huì yòng hěn duō ruǎnjiàn.",
    "note": "Ôn 不仅……还…… (Bài 3) + 软件.",
    "pair": "不仅……还……"
   }
  ]
 },
 {
  "n": 40,
  "zh": "弹",
  "py": "tán",
  "pos": "Động từ",
  "vn": "đánh, gảy (đàn)",
  "hv": "đàn",
  "em": "🎹",
  "lesson": 4,
  "explain": [
   "Dùng ngón tay đánh đàn: 弹钢琴, 弹吉他. ⚠ Chữ đa âm: đọc tán khi là “đánh đàn”; đọc dàn trong 子弹 (viên đạn)."
  ],
  "usage": "弹钢琴 · 弹吉他 · 弹得很好.",
  "collo": [
   "弹钢琴",
   "弹吉他",
   "弹得很好",
   "弹一首歌"
  ],
  "colloFull": [
   {
    "zh": "弹钢琴",
    "py": "Tángāngqín",
    "vn": "đánh đàn piano"
   },
   {
    "zh": "弹吉他",
    "py": "Tán jítā",
    "vn": "chơi guitar"
   },
   {
    "zh": "弹得很好",
    "py": "Tán de hěn hǎo",
    "vn": "đánh rất hay"
   },
   {
    "zh": "弹一首歌",
    "py": "Tán yì shǒu gē",
    "vn": "đánh một bản nhạc"
   }
  ],
  "patterns": [
   {
    "s": "弹 + nhạc cụ có dây / phím",
    "m": "钢琴 / 吉他 dùng 弹; 打鼓 (đánh trống) dùng 打"
   }
  ],
  "ex_zh": "每天还准时去老年大学上课，学习做网页、弹钢琴。",
  "ex_py": "Měitiān hái zhǔnshí qù lǎonián dàxué shàngkè, xuéxí zuò wǎngyè, tángāngqín.",
  "ex_vn": "Ngày nào cũng đi học đúng giờ, học làm trang web, đánh đàn piano.",
  "exList": [
   {
    "zh": "每天还准时去老年大学上课，学习做网页、弹钢琴。",
    "py": "Měitiān hái zhǔnshí qù lǎonián dàxué shàngkè, xuéxí zuò wǎngyè, tángāngqín.",
    "vn": "Ngày nào cũng đi học đúng giờ, học làm trang web, đánh đàn piano."
   },
   {
    "zh": "小雪很喜欢弹钢琴，每天都会练习至少两个小时。",
    "py": "Xiǎoxuě hěn xǐhuan tángāngqín, měitiān dōu huì liànxí zhìshǎo liǎng gè xiǎoshí.",
    "vn": "Tiểu Tuyết rất thích đánh đàn piano, ngày nào cũng tập ít nhất hai tiếng."
   }
  ],
  "hanzi": [
   {
    "c": "弹",
    "p": "tán",
    "type": "左右结构 · Trái-phải",
    "st": 11,
    "ord": "弓 trái → 单 phải",
    "rad": "弓 (cung)",
    "mean": "gảy, bật",
    "tip": "Bộ cung 弓 + 单 → dây cung BẬT ra → GẢY đàn (tán). Đọc dàn = đạn (子弹).",
    "cf": "单 (dān – đơn)",
    "w": "弹钢琴 / 弹吉他"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Cô ấy đánh đàn piano rất hay.",
    "answer": "她钢琴弹得很好。",
    "answerPy": "Tā gāngqín tán de hěn hǎo.",
    "note": "Bổ ngữ trình độ có tân ngữ: (V) O + V得 + Adj (HSK 3).",
    "pair": "O + V得 + Adj"
   },
   {
    "promptLang": "vi",
    "prompt": "Tiểu Tuyết ngày nào cũng tập đàn ít nhất hai tiếng.",
    "answer": "小雪每天至少弹两个小时钢琴。",
    "answerPy": "Xiǎoxuě měitiān zhìshǎo tán liǎng gè xiǎoshí gāngqín.",
    "note": "Ôn 至少 (Bài 5 · điểm 1).",
    "pair": "至少……"
   }
  ]
 },
 {
  "n": 41,
  "zh": "钢琴",
  "py": "gāngqín",
  "pos": "Danh từ",
  "vn": "đàn piano, dương cầm",
  "hv": "cương cầm",
  "em": "🎹",
  "lesson": 4,
  "explain": [
   "Nhạc cụ có phím; lượng từ là 架 (一架钢琴)."
  ],
  "usage": "弹钢琴 · 学钢琴 · 一架钢琴 · 钢琴课.",
  "collo": [
   "弹钢琴",
   "学钢琴",
   "一架钢琴",
   "钢琴课"
  ],
  "colloFull": [
   {
    "zh": "弹钢琴",
    "py": "Tángāngqín",
    "vn": "đánh đàn piano"
   },
   {
    "zh": "学钢琴",
    "py": "Xué gāngqín",
    "vn": "học piano"
   },
   {
    "zh": "一架钢琴",
    "py": "Yí jià gāngqín",
    "vn": "một chiếc đàn piano"
   },
   {
    "zh": "钢琴课",
    "py": "Gāngqín kè",
    "vn": "giờ học piano"
   }
  ],
  "patterns": [
   {
    "s": "一架 + 钢琴",
    "m": "Lượng từ 架"
   }
  ],
  "ex_zh": "学习做网页、弹钢琴。",
  "ex_py": "Xuéxí zuò wǎngyè, tángāngqín.",
  "ex_vn": "Học làm trang web, đánh đàn piano.",
  "exList": [
   {
    "zh": "学习做网页、弹钢琴。",
    "py": "Xuéxí zuò wǎngyè, tángāngqín.",
    "vn": "Học làm trang web, đánh đàn piano."
   },
   {
    "zh": "我女儿从五岁开始学钢琴。",
    "py": "Wǒ nǚ'ér cóng wǔ suì kāishǐ xué gāngqín.",
    "vn": "Con gái tôi bắt đầu học piano từ năm tuổi."
   }
  ],
  "hanzi": [
   {
    "c": "钢",
    "p": "gāng",
    "type": "形声字 · Chữ hình thanh",
    "st": 9,
    "ord": "钅 → 冈",
    "rad": "钅 (kim – kim loại)",
    "mean": "thép",
    "tip": "Kim loại (钅) cứng như sườn núi (冈 gāng, cũng chỉ âm) → thép; đàn piano có khung và dây thép nên gọi 钢琴.",
    "cf": "刚 gāng (vừa mới) — bên phải là 刂; 岗 gǎng — thêm 山",
    "w": "钢琴 / 钢笔 / 钢铁"
   },
   {
    "c": "琴",
    "p": "qín",
    "type": "上下结构 · Trên-dưới",
    "st": 12,
    "ord": "玨 trên → 今 dưới",
    "rad": "王 (ngọc)",
    "mean": "đàn",
    "tip": "Hai chữ 王 (dây đàn) + 今(biểu âm) → ĐÀN. 钢琴 = đàn thép = piano.",
    "cf": "今 (jīn – nay)",
    "w": "钢琴 / 小提琴"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Từ năm năm tuổi con gái tôi đã bắt đầu học piano.",
    "answer": "我女儿从五岁就开始学钢琴了。",
    "answerPy": "Wǒ nǚ'ér cóng wǔ suì jiù kāishǐ xué gāngqín le.",
    "note": "从……就开始…… (HSK 3).",
    "pair": "从……就……"
   },
   {
    "promptLang": "vi",
    "prompt": "Cô ấy học piano không phải vì thi cử, mà là vì thật sự thích.",
    "answer": "她学钢琴不是为了考试，而是因为真的喜欢。",
    "answerPy": "Tā xué gāngqín bú shì wèile kǎoshì, érshì yīnwèi zhēn de xǐhuan.",
    "note": "不是……而是…… (Bài 11 · điểm 3).",
    "pair": "不是……而是……"
   }
  ]
 },
 {
  "n": 42,
  "zh": "重新",
  "py": "chóngxīn",
  "pos": "Phó từ",
  "vn": "lại (từ đầu), làm lại",
  "hv": "trùng tân",
  "em": "🔄",
  "lesson": 4,
  "explain": [
   "Làm lại một lần nữa (thường làm lại từ đầu, theo cách mới). ⚠ 重 ở đây đọc chóng (lại, lặp), không đọc zhòng (nặng)."
  ],
  "usage": "重新开始 · 重新写 · 重新当一回学生.",
  "collo": [
   "重新开始",
   "重新写",
   "重新认识",
   "重新当学生"
  ],
  "colloFull": [
   {
    "zh": "重新开始",
    "py": "Chóngxīn kāishǐ",
    "vn": "bắt đầu lại"
   },
   {
    "zh": "重新写",
    "py": "Chóngxīn xiě",
    "vn": "viết lại"
   },
   {
    "zh": "重新认识",
    "py": "Chóngxīn rènshi",
    "vn": "nhìn nhận lại"
   },
   {
    "zh": "重新当学生",
    "py": "Chóngxīn dāng xuésheng",
    "vn": "làm học sinh lại"
   }
  ],
  "patterns": [
   {
    "s": "重新 + V (+ 一遍 / 一回)",
    "m": "Làm lại từ đầu"
   },
   {
    "s": "重新 ≠ 再次",
    "m": "再次 (Bài 10): thêm một lần; 重新: làm lại (thường từ đầu)"
   }
  ],
  "ex_zh": "他说，重新当一回学生，生活更有意思了。",
  "ex_py": "Tā shuō, chóngxīn dāng yì huí xuésheng, shēnghuó gèng yǒu yìsi le.",
  "ex_vn": "Ông nói, được làm học sinh lại một lần nữa, cuộc sống thú vị hơn nhiều.",
  "exList": [
   {
    "zh": "他说，重新当一回学生，生活更有意思了。",
    "py": "Tā shuō, chóngxīn dāng yì huí xuésheng, shēnghuó gèng yǒu yìsi le.",
    "vn": "Ông nói, được làm học sinh lại một lần nữa, cuộc sống thú vị hơn nhiều."
   },
   {
    "zh": "这篇作文写得不好，我想重新写一遍。",
    "py": "Zhè piān zuòwén xiě de bù hǎo, wǒ xiǎng chóngxīn xiě yí biàn.",
    "vn": "Bài văn này viết chưa tốt, tôi muốn viết lại một lần."
   }
  ],
  "hanzi": [
   {
    "c": "重",
    "p": "chóng",
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
    "c": "新",
    "p": "xīn",
    "type": "形声字 · Chữ hình thanh",
    "st": 13,
    "ord": "立 → 木 (thành 亲) → 斤",
    "rad": "斤 (cân – cái rìu)",
    "mean": "mới",
    "tip": "亲 (chỉ âm) + 斤 (cái rìu): dùng rìu chặt cây lấy gỗ mới → mới. Ôn: 新年 (HSK2 Bài 13), 新鲜 (HSK3 Bài 7).",
    "cf": "亲 qīn — không có 斤",
    "w": "新年 / 新鲜 / 新"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Máy tính hỏng rồi, tài liệu phải làm lại từ đầu.",
    "answer": "电脑坏了，资料要重新做了。",
    "answerPy": "Diànnǎo huài le, zīliào yào chóngxīn zuò le.",
    "note": "要 + V = phải (HSK 2).",
    "pair": "要重新……"
   },
   {
    "promptLang": "vi",
    "prompt": "Hơn sáu mươi tuổi được làm học sinh lại, bà thấy mình trẻ ra.",
    "answer": "六十多岁重新当学生，奶奶觉得自己变年轻了。",
    "answerPy": "Liùshí duō suì chóngxīn dāng xuésheng, nǎinai juéde zìjǐ biàn niánqīng le.",
    "note": "Ôn 变 + Adj (HSK 3).",
    "pair": "重新……，变……了"
   }
  ]
 },
 {
  "n": 43,
  "zh": "孔子",
  "py": "Kǒngzǐ",
  "pos": "Danh từ riêng",
  "vn": "Khổng Tử",
  "hv": "Khổng Tử",
  "em": "📜",
  "lesson": 4,
  "explain": [
   "Nhà tư tưởng, nhà giáo dục lớn của Trung Quốc cách đây hơn 2500 năm, người sáng lập Nho giáo; nhiều câu nói của ông được ghi trong sách 《论语》 (Luận Ngữ)."
  ],
  "usage": "孔子说过 · 孔子的话 · 教育家孔子.",
  "collo": [
   "孔子说过",
   "孔子的思想",
   "教育家孔子",
   "孔子学院"
  ],
  "colloFull": [
   {
    "zh": "孔子说过",
    "py": "Kǒngzǐ shuō guò",
    "vn": "Khổng Tử từng nói"
   },
   {
    "zh": "孔子的思想",
    "py": "Kǒngzǐ de sīxiǎng",
    "vn": "tư tưởng của Khổng Tử"
   },
   {
    "zh": "教育家孔子",
    "py": "Jiàoyùjiā Kǒngzǐ",
    "vn": "nhà giáo dục Khổng Tử"
   },
   {
    "zh": "孔子学院",
    "py": "Kǒngzǐ xuéyuàn",
    "vn": "Học viện Khổng Tử"
   }
  ],
  "patterns": [
   {
    "s": "孔子说过的话",
    "m": "Lời Khổng Tử từng nói (V + 过 + 的 + N)"
   }
  ],
  "ex_zh": "“学而不厌”是两千多年前中国教育家孔子说过的话。",
  "ex_py": "“Xué ér bú yàn” shì liǎngqiān duō nián qián Zhōngguó jiàoyùjiā Kǒngzǐ shuō guò de huà.",
  "ex_vn": "“Học nhi bất yếm” là câu nói của nhà giáo dục Trung Quốc Khổng Tử hơn hai nghìn năm trước.",
  "exList": [
   {
    "zh": "“学而不厌”是两千多年前中国教育家孔子说过的话。",
    "py": "“Xué ér bú yàn” shì liǎngqiān duō nián qián Zhōngguó jiàoyùjiā Kǒngzǐ shuō guò de huà.",
    "vn": "“Học nhi bất yếm” là câu nói của nhà giáo dục Trung Quốc Khổng Tử hơn hai nghìn năm trước."
   },
   {
    "zh": "孔子有很多学生，他一生都在教书。",
    "py": "Kǒngzǐ yǒu hěn duō xuésheng, tā yìshēng dōu zài jiāoshū.",
    "vn": "Khổng Tử có rất nhiều học trò, cả đời ông đều dạy học."
   }
  ],
  "hanzi": [
   {
    "c": "孔",
    "p": "kǒng",
    "type": "会意字 · Chữ hội ý",
    "st": 4,
    "ord": "子 → 乚",
    "rad": "子 (tử – con)",
    "mean": "lỗ; họ Khổng",
    "tip": "Em bé (子) bú sữa qua cái lỗ (乚) của bầu vú mẹ → lỗ hổng; cũng là họ Khổng của Khổng Tử (孔子).",
    "cf": "扎 zhā — bên trái là 扌; 礼 lǐ — bên trái là 礻",
    "w": "孔子 / 面孔 / 孔雀"
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
    "prompt": "Ở Việt Nam, rất nhiều người biết Khổng Tử.",
    "answer": "在越南，很多人都知道孔子。",
    "answerPy": "Zài Yuènán, hěn duō rén dōu zhīdao Kǒngzǐ.",
    "note": "都 tổng kết (HSK 1–2).",
    "pair": "很多人都……"
   },
   {
    "promptLang": "vi",
    "prompt": "Khổng Tử nói “học nhi bất yếm”, nghĩa là người ta phải luôn kiên trì học tập.",
    "answer": "孔子说“学而不厌”，就是说，人要一直坚持学习。",
    "answerPy": "Kǒngzǐ shuō “xué ér bú yàn”, jiùshì shuō, rén yào yìzhí jiānchí xuéxí.",
    "note": "就是说 (Bài 11 · điểm 4).",
    "pair": "……，就是说，……"
   }
  ]
 }
];
var wuData = [
 {
  "img": "/images/hsk4v3/bai-11/wu-A.webp",
  "label": "分数",
  "py": "fēnshù",
  "letter": "A"
 },
 {
  "img": "/images/hsk4v3/bai-11/wu-B.webp",
  "label": "资料",
  "py": "zīliào",
  "letter": "B"
 },
 {
  "img": "/images/hsk4v3/bai-11/wu-C.webp",
  "label": "自学",
  "py": "zìxué",
  "letter": "C"
 },
 {
  "img": "/images/hsk4v3/bai-11/wu-D.webp",
  "label": "钢琴",
  "py": "gāngqín",
  "letter": "D"
 },
 {
  "img": "/images/hsk4v3/bai-11/wu-E.webp",
  "label": "网页",
  "py": "wǎngyè",
  "letter": "E"
 },
 {
  "img": "/images/hsk4v3/bai-11/wu-F.webp",
  "label": "家长",
  "py": "jiāzhǎng",
  "letter": "F"
 }
];
var dialogData = [
 {
  "scene": "在公园里 · Trong công viên (Lý Văn và Bạch Gia Nguyệt vừa đi dạo vừa trò chuyện)",
  "anh": "/images/hsk4v3/bai-11/kv-1.webp",
  "nguoi": [
   {
    "ten": "白家月",
    "anh": "/images/hsk4v3/nv/bai.webp"
   },
   {
    "ten": "李文",
    "anh": "/images/hsk4v3/nv/liwen.webp"
   }
  ],
  "preQuiz": [
   {
    "q": "白家月觉得公园里老年人的生活怎么样？",
    "opts": [
     "很开心",
     "很丰富",
     "很辛苦",
     "很无聊"
    ],
    "ans": 1
   },
   {
    "q": "李文的爷爷每周去老年班做什么？",
    "opts": [
     "学电脑",
     "学唱歌",
     "学写字",
     "学太极拳"
    ],
    "ans": 0
   }
  ],
  "lines": [
   {
    "sp": 0,
    "zh": "这里的老年人真不少。",
    "py": "Zhèli de lǎoniánrén zhēn bùshǎo.",
    "vn": "Người cao tuổi ở đây đông thật."
   },
   {
    "sp": 1,
    "zh": "嗯，住在附近的老年人都会来这儿，有的散步，有的唱歌、跳舞，还有的打太极拳。",
    "py": "Ǹg, zhù zài fùjìn de lǎoniánrén dōu huì lái zhèr, yǒude sànbù, yǒude chànggē, tiàowǔ, hái yǒude dǎ Tàijíquán.",
    "vn": "Ừ, người già sống gần đây đều đến chỗ này, có người đi dạo, có người hát, nhảy múa, còn có người đánh Thái Cực quyền."
   },
   {
    "sp": 0,
    "zh": "他们的生活真丰富，让人羡慕。",
    "py": "Tāmen de shēnghuó zhēn fēngfù, ràng rén xiànmù.",
    "vn": "Cuộc sống của họ thật phong phú, khiến người ta ngưỡng mộ."
   },
   {
    "sp": 1,
    "zh": "是的。有些人即使年龄大了，也坚持去老年班学习。",
    "py": "Shì de. Yǒuxiē rén jíshǐ niánlíng dà le, yě jiānchí qù lǎoniánbān xuéxí.",
    "vn": "Đúng vậy. Có những người dù tuổi đã cao vẫn kiên trì đi học lớp dành cho người cao tuổi."
   },
   {
    "sp": 0,
    "zh": "真是活到老学到老啊。",
    "py": "Zhēnshì huó dào lǎo xuédào lǎo a.",
    "vn": "Đúng là sống đến già học đến già nhỉ."
   },
   {
    "sp": 1,
    "zh": "对，我爷爷就每周都去老年班学电脑。他总说，老年人也要继续学习，“你看，我都七八十岁了，还上网和网友们聊天儿呢，生活一点儿都不无聊。”",
    "py": "Duì, wǒ yéye jiù měi zhōu dōu qù lǎoniánbān xué diànnǎo. Tā zǒng shuō, lǎoniánrén yě yào jìxù xuéxí, “nǐ kàn, wǒ dōu qī bāshí suì le, hái shàngwǎng hé wǎngyǒumen liáotiānr ne, shēnghuó yìdiǎnr dōu bù wúliáo.”",
    "vn": "Đúng thế, ông tớ tuần nào cũng đi lớp người cao tuổi học máy tính đấy. Ông luôn nói người già cũng phải tiếp tục học tập: “Cháu xem, ông bảy tám mươi tuổi rồi mà còn lên mạng trò chuyện với bạn trên mạng đấy, cuộc sống chẳng buồn chán chút nào.”"
   }
  ]
 },
 {
  "scene": "在餐馆 · Ở nhà hàng (Lý Văn mời Bạch Gia Nguyệt và Annie đi ăn, ba người nói về lớp học số)",
  "anh": "/images/hsk4v3/bai-11/kv-2.webp",
  "nguoi": [
   {
    "ten": "安妮",
    "anh": "/images/hsk4v3/nv/annie.webp"
   },
   {
    "ten": "白家月",
    "anh": "/images/hsk4v3/nv/bai.webp"
   },
   {
    "ten": "李文",
    "anh": "/images/hsk4v3/nv/liwen.webp"
   }
  ],
  "preQuiz": [
   {
    "q": "白家月认为线上点名怎么样？",
    "opts": [
     "节约时间",
     "不太方便",
     "比较随意",
     "很吸引学生"
    ],
    "ans": 0
   },
   {
    "q": "对安妮来说，线上上课时，自己不用急着做的事情是：",
    "opts": [
     "写作业",
     "找资料",
     "记笔记",
     "提问题"
    ],
    "ans": 2
   }
  ],
  "lines": [
   {
    "sp": 0,
    "zh": "家月，我们今天的课是在数字教室上的，感觉挺不一样的。",
    "py": "Jiāyuè, wǒmen jīntiān de kè shì zài shùzì jiàoshì shàng de, gǎnjué tǐng bù yíyàng de.",
    "vn": "Gia Nguyệt, buổi học hôm nay của chúng mình học ở lớp học số, cảm giác khá là khác."
   },
   {
    "sp": 1,
    "zh": "是的，数字教室可以拍照点名，教授在线上点名，不用像线下那样一个个叫名字，特别节约时间。",
    "py": "Shì de, shùzì jiàoshì kěyǐ pāizhào diǎnmíng, jiàoshòu zài xiànshàng diǎnmíng, búyòng xiàng xiànxià nàyàng yígègè jiào míngzi, tèbié jiéyuē shíjiān.",
    "vn": "Đúng vậy, lớp học số có thể chụp ảnh điểm danh, giáo sư điểm danh trực tuyến, không phải gọi tên từng người như học trực tiếp, cực kỳ tiết kiệm thời gian."
   },
   {
    "sp": 2,
    "zh": "最方便的是，课上没听明白时，课后还能在学校网站上找到视频记录看。",
    "py": "Zuì fāngbiàn de shì, kè shàng méi tīng míngbai shí, kèhòu hái néng zài xuéxiào wǎngzhàn shàng zhǎodào shìpín jìlù kàn.",
    "vn": "Tiện nhất là trên lớp nghe chưa hiểu thì sau giờ học còn có thể lên trang web của trường tìm video ghi lại bài giảng để xem."
   },
   {
    "sp": 0,
    "zh": "对，上课我都不用着急记笔记了。",
    "py": "Duì, shàngkè wǒ dōu búyòng zháojí jì bǐjì le.",
    "vn": "Đúng thế, lên lớp mình chẳng cần vội vàng ghi chép nữa."
   },
   {
    "sp": 2,
    "zh": "不仅数字教室很方便，现在网上到处是学习资料，想查什么都能查到，自学也更方便了。",
    "py": "Bùjǐn shùzì jiàoshì hěn fāngbiàn, xiànzài wǎngshang dàochù shì xuéxí zīliào, xiǎng chá shénme dōu néng chádào, zìxué yě gèng fāngbiàn le.",
    "vn": "Không chỉ lớp học số tiện lợi, bây giờ trên mạng đâu đâu cũng là tài liệu học tập, muốn tra gì cũng tra được, tự học cũng tiện hơn."
   },
   {
    "sp": 1,
    "zh": "是的，只要有手机或电脑，我就是不在教室，也可以学习中文，和同学一起练口语。",
    "py": "Shì de, zhǐyào yǒu shǒujī huò diànnǎo, wǒ jiùshì bú zài jiàoshì, yě kěyǐ xuéxí Zhōngwén, hé tóngxué yìqǐ liàn kǒuyǔ.",
    "vn": "Đúng vậy, chỉ cần có điện thoại hoặc máy tính, mình dù không ở lớp vẫn có thể học tiếng Trung, luyện nói cùng các bạn."
   },
   {
    "sp": 0,
    "zh": "科技真是让获取知识变得简单多了。",
    "py": "Kējì zhēnshì ràng huòqǔ zhīshi biànde jiǎndān duō le.",
    "vn": "Công nghệ đúng là đã làm việc tiếp thu kiến thức trở nên đơn giản hơn nhiều."
   }
  ]
 },
 {
  "scene": "白家月的日记 · Nhật ký của Bạch Gia Nguyệt sau khi cùng Lý Văn đến chơi nhà Vương Nhất Tuyết",
  "anh": "/images/hsk4v3/bai-11/kv-3.webp",
  "nguoi": [
   {
    "ten": "白家月",
    "anh": "/images/hsk4v3/nv/bai.webp"
   }
  ],
  "preQuiz": [
   {
    "q": "以前，王一雪和刘明认为孩子的人生怎样才是成功的？",
    "opts": [
     "变得有名",
     "有很多钱",
     "上个好大学",
     "有个好工作"
    ],
    "ans": 2
   },
   {
    "q": "后来，王一雪和刘明认为教育是为了让孩子：",
    "opts": [
     "获得高分",
     "按时做作业",
     "有个好身体",
     "养成好习惯"
    ],
    "ans": 3
   }
  ],
  "lines": [
   {
    "sp": 0,
    "zh": "今天星期六，我们去了一雪姐姐家。",
    "py": "Jīntiān xīngqīliù, wǒmen qù le Yīxuě jiějie jiā.",
    "vn": "Hôm nay thứ Bảy, chúng tôi đến nhà chị Nhất Tuyết."
   },
   {
    "sp": 0,
    "zh": "姐姐家的两个孩子很有礼貌，我们一进门，就马上和我们打招呼。",
    "py": "Jiějie jiā de liǎng gè háizi hěn yǒu lǐmào, wǒmen yí jìn mén, jiù mǎshàng hé wǒmen dǎ zhāohu.",
    "vn": "Hai đứa con nhà chị rất lễ phép, chúng tôi vừa vào cửa, các cháu đã lập tức chào hỏi chúng tôi."
   },
   {
    "sp": 0,
    "zh": "在姐姐家，我们也聊到了孩子的教育。",
    "py": "Zài jiějie jiā, wǒmen yě liáo dào le háizi de jiàoyù.",
    "vn": "Ở nhà chị, chúng tôi cũng nói đến chuyện giáo dục con cái."
   },
   {
    "sp": 0,
    "zh": "姐姐说，以前他们和很多家长一样，觉得孩子上个好大学，人生才是成功的。",
    "py": "Jiějie shuō, yǐqián tāmen hé hěn duō jiāzhǎng yíyàng, juéde háizi shàng gè hǎo dàxué, rénshēng cái shì chénggōng de.",
    "vn": "Chị kể, trước đây anh chị cũng như nhiều phụ huynh khác, cho rằng con vào được một trường đại học tốt thì cuộc đời mới là thành công."
   },
   {
    "sp": 0,
    "zh": "所以，他们只关心孩子的分数，结果孩子压力特别大，每天都很不开心。",
    "py": "Suǒyǐ, tāmen zhǐ guānxīn háizi de fēnshù, jiéguǒ háizi yālì tèbié dà, měitiān dōu hěn bù kāixīn.",
    "vn": "Vì vậy, anh chị chỉ quan tâm đến điểm số của con, kết quả là con bị áp lực vô cùng lớn, ngày nào cũng không vui."
   },
   {
    "sp": 0,
    "zh": "后来，他们认识到，教育的目的不是让孩子考高分，而是帮助孩子养成好习惯。",
    "py": "Hòulái, tāmen rènshi dào, jiàoyù de mùdì bú shì ràng háizi kǎo gāofēn, érshì bāngzhù háizi yǎngchéng hǎo xíguàn.",
    "vn": "Về sau, anh chị nhận ra rằng mục đích của giáo dục không phải là để con thi được điểm cao, mà là giúp con hình thành những thói quen tốt."
   },
   {
    "sp": 0,
    "zh": "于是，他们做出改变，每天都给孩子留出时间外出锻炼身体，或者看些自己感兴趣的书。",
    "py": "Yúshì, tāmen zuòchū gǎibiàn, měitiān dōu gěi háizi liúchū shíjiān wàichū duànliàn shēntǐ, huòzhě kàn xiē zìjǐ gǎnxìngqù de shū.",
    "vn": "Thế là anh chị đã thay đổi, ngày nào cũng dành thời gian cho con ra ngoài rèn luyện thân thể, hoặc đọc vài cuốn sách mà các cháu thích."
   },
   {
    "sp": 0,
    "zh": "我觉得他们的做法真棒。",
    "py": "Wǒ juéde tāmen de zuòfǎ zhēn bàng.",
    "vn": "Tôi thấy cách làm của anh chị thật tuyệt."
   }
  ],
  "doan": true
 },
 {
  "scene": "学习，让生活更有意义 · Học tập làm cuộc sống thêm ý nghĩa",
  "anh": "/images/hsk4v3/bai-11/kv-4.webp",
  "nguoi": [
   {
    "ten": "小语",
    "anh": "/images/hsk4v3/nv/xiaoyu.webp"
   }
  ],
  "preQuiz": [
   {
    "q": "“学而不厌”是孔子什么时候说的？",
    "opts": [
     "二十多年前",
     "两百多年前",
     "两千多年前",
     "五千多年前"
    ],
    "ans": 2
   },
   {
    "q": "坚持学习，爷爷觉得怎么样？",
    "opts": [
     "很开心",
     "有点儿累",
     "更健康了",
     "年轻起来了"
    ],
    "ans": 3
   }
  ],
  "lines": [
   {
    "sp": 0,
    "zh": "“学而不厌”是两千多年前中国教育家孔子说过的话，意思是人要一直坚持学习，就是说，学习是人一生的事情，要活到老学到老。",
    "py": "“Xué ér bú yàn” shì liǎngqiān duō nián qián Zhōngguó jiàoyùjiā Kǒngzǐ shuō guò dehuà, yìsi shì rén yào yìzhí jiānchí xuéxí, jiùshì shuō, xuéxí shì rén yìshēng de shìqing, yào huó dào lǎo xuédào lǎo.",
    "vn": "“Học nhi bất yếm” (học không biết chán) là câu nói của nhà giáo dục Trung Quốc Khổng Tử hơn hai nghìn năm trước, ý là con người phải luôn kiên trì học tập, nghĩa là học tập là việc cả đời, phải sống đến già học đến già."
   },
   {
    "sp": 0,
    "zh": "在世界快速变化的今天，“学而不厌”变得更加重要。",
    "py": "Zài shìjiè kuàisù biànhuà de jīntiān, “xué ér bú yàn” biànde gèngjiā zhòngyào.",
    "vn": "Ngày nay, khi thế giới thay đổi nhanh chóng, “học không biết chán” càng trở nên quan trọng."
   },
   {
    "sp": 0,
    "zh": "我有一位很优秀的律师朋友，他一直在学习新的法律知识。",
    "py": "Wǒ yǒu yí wèi hěn yōuxiù de lǜshī péngyou, tā yìzhí zài xuéxí xīn de fǎlǜ zhīshi.",
    "vn": "Tôi có một người bạn là luật sư rất xuất sắc, anh ấy luôn học kiến thức pháp luật mới."
   },
   {
    "sp": 0,
    "zh": "他说，这不仅是律师的要求和责任，也是提高自己能力的重要方法。",
    "py": "Tā shuō, zhè bùjǐn shì lǜshī de yāoqiú hé zérèn, yě shì tígāo zìjǐ nénglì de zhòngyào fāngfǎ.",
    "vn": "Anh ấy nói, đây không chỉ là yêu cầu và trách nhiệm của luật sư, mà còn là cách quan trọng để nâng cao năng lực của bản thân."
   },
   {
    "sp": 0,
    "zh": "同时我也认为，人就是不再工作了，坚持学习仍很重要。",
    "py": "Tóngshí wǒ yě rènwéi, rén jiùshì bú zài gōngzuò le, jiānchí xuéxí réng hěn zhòngyào.",
    "vn": "Đồng thời tôi cũng cho rằng, con người cho dù không còn đi làm nữa, kiên trì học tập vẫn rất quan trọng."
   },
   {
    "sp": 0,
    "zh": "就像我爷爷，虽然七十多岁了，每天还准时去老年大学上课，学习做网页、弹钢琴。",
    "py": "Jiù xiàng wǒ yéye, suīrán qīshí duō suì le, měitiān hái zhǔnshí qù lǎonián dàxué shàngkè, xuéxí zuò wǎngyè, tángāngqín.",
    "vn": "Giống như ông tôi, tuy đã hơn bảy mươi tuổi, ngày nào cũng đến trường đại học người cao tuổi học đúng giờ, học làm trang web, đánh đàn piano."
   },
   {
    "sp": 0,
    "zh": "他说，重新当一回学生，生活更有意思了，也感觉自己变年轻了。",
    "py": "Tā shuō, chóngxīn dāng yì huí xuésheng, shēnghuó gèng yǒu yìsi le, yě gǎnjué zìjǐ biàn niánqīng le.",
    "vn": "Ông nói, được làm học sinh lại một lần nữa, cuộc sống thú vị hơn, cũng cảm thấy mình trẻ ra."
   }
  ],
  "doan": true
 }
];
var listenData = [
 {
  "audio": "奶奶，您每周二都去哪儿啊？我去老年大学学用手机。您都七十多岁了，还学这个？即使年龄大了，也要继续学习嘛！现在我会在网上和网友聊天儿了，还能给你发视频呢。您的生活真丰富，真让人羡慕！",
  "questions": [
   {
    "q": "奶奶每周二去老年大学学什么？",
    "opts": [
     "学用手机",
     "学弹钢琴",
     "学打太极拳"
    ],
    "ans": 0
   },
   {
    "q": "奶奶现在会做什么了？",
    "opts": [
     "自己做网页",
     "在网上和网友聊天儿",
     "教别人用电脑"
    ],
    "ans": 1
   }
  ]
 },
 {
  "audio": "小王，今天的课怎么是在线上上的？教授去外地开会了，就是说，这两周我们都在线上上课。那要是网不好，没听明白怎么办？没关系，课后可以在学校网站上找到视频记录，再看一遍就是了。",
  "questions": [
   {
    "q": "这两周为什么在线上上课？",
    "opts": [
     "教授去外地开会了",
     "教室坏了",
     "学生都生病了"
    ],
    "ans": 0
   },
   {
    "q": "没听明白可以怎么办？",
    "opts": [
     "给教授打电话",
     "课后看视频记录",
     "去图书馆找资料"
    ],
    "ans": 1
   }
  ]
 },
 {
  "audio": "李老师，我儿子这次数学只考了七十分，我特别着急。其实分数不是最重要的，孩子已经很努力了。那我应该怎么做呢？教育的目的不是让孩子考高分，而是帮助他养成好习惯。您可以每天留出时间陪他看看书、锻炼锻炼身体。",
  "questions": [
   {
    "q": "孩子这次数学考了多少分？",
    "opts": [
     "七十分",
     "九十分",
     "一百分"
    ],
    "ans": 0
   },
   {
    "q": "李老师认为教育的目的是什么？",
    "opts": [
     "让孩子考高分",
     "帮助孩子养成好习惯",
     "让孩子上好大学"
    ],
    "ans": 1
   }
  ]
 }
];
var matchData = [
 {
  "left": "养成",
  "right": "好习惯"
 },
 {
  "left": "获取",
  "right": "知识"
 },
 {
  "left": "弹",
  "right": "钢琴"
 },
 {
  "left": "打",
  "right": "太极拳"
 },
 {
  "left": "拍照",
  "right": "点名"
 },
 {
  "left": "优秀的",
  "right": "律师"
 },
 {
  "left": "丰富的",
  "right": "工作经验"
 },
 {
  "left": "和孩子",
  "right": "打招呼"
 },
 {
  "left": "即使……",
  "right": "也……"
 },
 {
  "left": "不是……",
  "right": "而是……"
 }
];
var fillData = [
 {
  "pre": "有些人即使年龄大了，也",
  "blank": "坚持",
  "post": "去老年班学习。",
  "hint": "(kiên trì)",
  "ans": "坚持",
  "exp": "坚持 + V."
 },
 {
  "pre": "他们的生活真丰富，让人",
  "blank": "羡慕",
  "post": "。",
  "hint": "(ngưỡng mộ)",
  "ans": "羡慕",
  "exp": "让人羡慕 = đáng ngưỡng mộ."
 },
 {
  "pre": "我都七八十岁了，还上网和网友们聊天儿呢，生活一点儿都不",
  "blank": "无聊",
  "post": "。",
  "hint": "(buồn chán)",
  "ans": "无聊",
  "exp": "一点儿都不 + Adj."
 },
 {
  "pre": "教授在线上点名，不用像",
  "blank": "线下",
  "post": "那样一个个叫名字。",
  "hint": "(trực tiếp, offline)",
  "ans": "线下",
  "exp": "线上 ↔ 线下."
 },
 {
  "pre": "我就是不在教室，也可以学习中文，和同学一起练",
  "blank": "口语",
  "post": "。",
  "hint": "(kỹ năng nói)",
  "ans": "口语",
  "exp": "练口语 = luyện nói."
 },
 {
  "pre": "科技真是让",
  "blank": "获取",
  "post": "知识变得简单多了。",
  "hint": "(tiếp nhận, thu được)",
  "ans": "获取",
  "exp": "获取 + 知识 / 信息."
 },
 {
  "pre": "姐姐家的两个孩子很有",
  "blank": "礼貌",
  "post": "。",
  "hint": "(lễ phép)",
  "ans": "礼貌",
  "exp": "有礼貌 = lễ phép."
 },
 {
  "pre": "教育的目的不是让孩子考高分，而是帮助孩子",
  "blank": "养成",
  "post": "好习惯。",
  "hint": "(hình thành)",
  "ans": "养成",
  "exp": "养成 + 习惯."
 },
 {
  "pre": "学习是人",
  "blank": "一生",
  "post": "的事情，要活到老学到老。",
  "hint": "(cả đời)",
  "ans": "一生",
  "exp": "一生 = cả đời."
 },
 {
  "pre": "爷爷虽然七十多岁了，每天还",
  "blank": "准时",
  "post": "去老年大学上课。",
  "hint": "(đúng giờ)",
  "ans": "准时",
  "exp": "准时 + V."
 }
];
var sortData = [
 {
  "words": [
   "有些人",
   "即使",
   "年龄大了",
   "，",
   "也",
   "坚持",
   "去老年班学习",
   "。"
  ],
  "ans": "有些人即使年龄大了，也坚持去老年班学习。",
  "audio": "有些人即使年龄大了，也坚持去老年班学习。"
 },
 {
  "words": [
   "我",
   "就是",
   "不在教室",
   "，",
   "也",
   "可以",
   "学习中文",
   "。"
  ],
  "ans": "我就是不在教室，也可以学习中文。",
  "audio": "我就是不在教室，也可以学习中文。"
 },
 {
  "words": [
   "教育的目的",
   "不是",
   "让孩子考高分",
   "，",
   "而是",
   "帮助孩子",
   "养成好习惯",
   "。"
  ],
  "ans": "教育的目的不是让孩子考高分，而是帮助孩子养成好习惯。",
  "audio": "教育的目的不是让孩子考高分，而是帮助孩子养成好习惯。"
 },
 {
  "words": [
   "人",
   "要",
   "一直坚持学习",
   "，",
   "就是说",
   "，",
   "学习是",
   "人一生的事情",
   "。"
  ],
  "ans": "人要一直坚持学习，就是说，学习是人一生的事情。",
  "audio": "人要一直坚持学习，就是说，学习是人一生的事情。"
 },
 {
  "words": [
   "现在",
   "网上",
   "到处是",
   "学习资料",
   "。"
  ],
  "ans": "现在网上到处是学习资料。",
  "audio": "现在网上到处是学习资料。"
 },
 {
  "words": [
   "重新",
   "当一回",
   "学生",
   "，",
   "生活",
   "更有意思了",
   "。"
  ],
  "ans": "重新当一回学生，生活更有意思了。",
  "audio": "重新当一回学生，生活更有意思了。"
 }
];
var mcData = [
 {
  "q": "＿＿明天下大雨，我们也会按时出发。",
  "opts": [
   "即使",
   "虽然",
   "因为",
   "只要"
  ],
  "ans": 0,
  "exp": "Giả thiết + 也 → 即使……也……; 虽然 nói sự thật, đi với 但是."
 },
 {
  "q": "锻炼身体很重要，就是再忙，＿＿要坚持运动。",
  "opts": [
   "也",
   "就",
   "才",
   "却"
  ],
  "ans": 0,
  "exp": "就是……，也…… (khẩu ngữ của 即使……也……)."
 },
 {
  "q": "教育的目的不是让孩子考高分，＿＿帮助孩子养成好习惯。",
  "opts": [
   "而是",
   "而且",
   "还是",
   "但是"
  ],
  "ans": 0,
  "exp": "不是……，而是…… phủ định A, khẳng định B."
 },
 {
  "q": "人要一直坚持学习，＿＿，学习是人一生的事情。",
  "opts": [
   "就是说",
   "就是了",
   "而是",
   "即使"
  ],
  "ans": 0,
  "exp": "就是说 = tức là, giải thích lại câu trước."
 },
 {
  "q": "数字教室可以拍照＿＿，特别节约时间。",
  "opts": [
   "点名",
   "记录",
   "自学",
   "获取"
  ],
  "ans": 0,
  "exp": "拍照点名 = chụp ảnh điểm danh."
 },
 {
  "q": "他非常＿＿，把任务交给他，我很放心。",
  "opts": [
   "优秀",
   "无聊",
   "快速",
   "礼貌"
  ],
  "ans": 0,
  "exp": "优秀 = xuất sắc → giao việc thì yên tâm."
 },
 {
  "q": "小雪很喜欢＿＿钢琴，每天都会练习至少两个小时。",
  "opts": [
   "弹",
   "打",
   "玩",
   "唱"
  ],
  "ans": 0,
  "exp": "弹 (tán) + 钢琴 / 吉他."
 },
 {
  "q": "课上没听明白时，课后还能在学校网站上找到＿＿记录看。",
  "opts": [
   "视频",
   "分数",
   "口语",
   "网友"
  ],
  "ans": 0,
  "exp": "视频记录 = video ghi lại bài giảng."
 },
 {
  "q": "我们一进门，两个孩子就马上和我们＿＿。",
  "opts": [
   "打招呼",
   "散步",
   "点名",
   "留"
  ],
  "ans": 0,
  "exp": "和 + ai + 打招呼 = chào hỏi ai."
 },
 {
  "q": "爷爷虽然七十多岁了，每天还＿＿去老年大学上课。",
  "opts": [
   "准时",
   "快速",
   "重新",
   "仍"
  ],
  "ans": 0,
  "exp": "准时 + V = làm gì đúng giờ."
 }
];
var speakingData = {
 "intro": "Nhấn nút loa nghe câu hỏi (câu hỏi phần Khởi động, câu hỏi đọc hiểu của 4 bài khoá, kể lại bài khoá và thảo luận nhóm), rồi tự ghi âm câu trả lời — cố dùng từ mới và 4 điểm ngữ pháp của bài.",
 "questions": [
  {
   "q_zh": "你上过线上课吗？你觉得怎么样？",
   "q_vn": "Bạn đã từng học lớp trực tuyến chưa? Bạn thấy thế nào?",
   "hint": "我上过……。我觉得线上课……，就是说……。不过……",
   "sample": "我上过线上课。我觉得线上课很方便，只要有手机或电脑，就是不在教室，也可以上课。课后还能看视频记录，就是说，没听明白的地方可以再听一遍。不过，线上课不能和老师、同学面对面地交流，练口语的机会少一些。",
   "sample_vn": "Tôi từng học lớp trực tuyến. Tôi thấy học trực tuyến rất tiện, chỉ cần có điện thoại hoặc máy tính thì dù không ở lớp vẫn học được. Sau giờ học còn xem được video ghi lại, tức là chỗ nào chưa hiểu có thể nghe lại. Có điều học trực tuyến không trao đổi trực tiếp với thầy cô, bạn bè được, ít cơ hội luyện nói hơn.",
   "note": "Câu hỏi phần Khởi động của sách; dùng 就是……也…… (điểm 2), 就是说 (điểm 4), ôn 不过 (Bài 2)."
  },
  {
   "q_zh": "在你的国家，老年人都怎么生活？",
   "q_vn": "Ở nước bạn, người cao tuổi sống như thế nào?",
   "hint": "在越南，很多老年人……，有的……，有的……。即使……，也……",
   "sample": "在越南，很多老年人退休以后，每天早上去公园散步、跳舞，有的打太极拳，有的和朋友一起喝茶聊天儿。现在也有不少老年人学用手机，上网看新闻、和孩子打视频电话。即使年龄大了，他们也希望生活丰富一点儿，不想在家里一个人觉得无聊。",
   "sample_vn": "Ở Việt Nam, nhiều người cao tuổi sau khi nghỉ hưu, sáng nào cũng ra công viên đi bộ, nhảy múa, có người tập Thái Cực quyền, có người cùng bạn bè uống trà trò chuyện. Bây giờ cũng có không ít người già học dùng điện thoại, lên mạng đọc tin, gọi video cho con cháu. Dù tuổi đã cao, họ cũng mong cuộc sống phong phú hơn, không muốn ở nhà một mình buồn chán.",
   "note": "Câu hỏi phần Khởi động của sách; dùng 即使……也…… (điểm 1) + ôn 有的……有的……"
  },
  {
   "q_zh": "在公园里，老年人都会做些什么活动？李文的爷爷为什么去老年班学习？",
   "q_vn": "Trong công viên, người cao tuổi thường làm những hoạt động gì? Vì sao ông của Lý Văn đi học lớp người cao tuổi?",
   "hint": "有的……，有的……，还有的……。因为他觉得老年人也要……",
   "sample": "在公园里，老年人有的散步，有的唱歌、跳舞，还有的打太极拳。李文的爷爷去老年班学习，是因为他觉得老年人也要继续学习。他学了电脑以后，还能上网和网友们聊天儿，生活一点儿都不无聊。",
   "sample_vn": "Trong công viên, người cao tuổi có người đi dạo, có người hát, nhảy múa, còn có người đánh Thái Cực quyền. Ông của Lý Văn đi học lớp người cao tuổi vì ông thấy người già cũng phải tiếp tục học tập. Học máy tính xong, ông còn lên mạng trò chuyện với bạn trên mạng, cuộc sống chẳng buồn chán chút nào.",
   "note": "Câu hỏi bài khoá 1."
  },
  {
   "q_zh": "请根据提示复述课文一。",
   "q_vn": "Dựa vào gợi ý, kể lại bài khoá 1.",
   "hint": "李文和白家月在公园里散步。白家月觉得……。李文说，住在附近的老年人都……。白家月说……，让人……。李文告诉她，有些老年人即使……，也……。比如，他爷爷……",
   "sample": "李文和白家月在公园里散步。白家月觉得公园里的老年人真不少。李文说，住在附近的老年人都会来这儿，有的散步，有的唱歌、跳舞，还有的打太极拳。白家月说，这里的老年人生活真丰富，让人羡慕。李文告诉她，有些老年人即使年龄大了，也坚持去老年班学习。比如，他爷爷每周都去老年班学电脑。爷爷说：“你看，我都七八十岁了，还上网和网友们聊天儿呢，生活一点儿都不无聊。”",
   "sample_vn": "Lý Văn và Bạch Gia Nguyệt đi dạo trong công viên. Bạch Gia Nguyệt thấy người cao tuổi trong công viên đông thật… Ông nói: “Cháu xem, ông bảy tám mươi tuổi rồi mà còn lên mạng trò chuyện với bạn trên mạng, cuộc sống chẳng buồn chán chút nào.”",
   "note": "Bài tập 复述 của sách (trang 3)."
  },
  {
   "q_zh": "李文说，线上上课时，如果没听懂，课后还可以怎么做？人们自学为什么变得越来越方便了？",
   "q_vn": "Lý Văn nói, khi học trực tuyến nếu nghe chưa hiểu, sau giờ học còn có thể làm gì? Vì sao việc tự học ngày càng tiện lợi?",
   "hint": "课后还能……。因为现在网上到处是……，想查什么……。只要……，就是……，也……",
   "sample": "李文说，课上没听明白时，课后还能在学校网站上找到视频记录看。人们自学越来越方便，是因为现在网上到处是学习资料，想查什么都能查到。而且只要有手机或电脑，就是不在教室，也可以学习。",
   "sample_vn": "Lý Văn nói, trên lớp nghe chưa hiểu thì sau giờ học còn có thể tìm video ghi lại trên trang web của trường để xem. Tự học ngày càng tiện vì bây giờ trên mạng đâu đâu cũng là tài liệu học tập, muốn tra gì cũng tra được. Hơn nữa chỉ cần có điện thoại hoặc máy tính, dù không ở lớp vẫn có thể học.",
   "note": "Câu hỏi bài khoá 2; dùng 就是……也…… (điểm 2)."
  },
  {
   "q_zh": "以前，王一雪的孩子为什么不开心？王一雪和刘明做出了什么样的改变？",
   "q_vn": "Trước đây, vì sao con của Vương Nhất Tuyết không vui? Vương Nhất Tuyết và Lưu Minh đã thay đổi như thế nào?",
   "hint": "因为以前他们只关心……，结果……。后来他们认识到，教育的目的不是……，而是……。于是……",
   "sample": "因为以前王一雪和刘明只关心孩子的分数，结果孩子压力特别大，每天都很不开心。后来他们认识到，教育的目的不是让孩子考高分，而是帮助孩子养成好习惯。于是，他们每天都给孩子留出时间外出锻炼身体，或者看些自己感兴趣的书。",
   "sample_vn": "Vì trước đây Vương Nhất Tuyết và Lưu Minh chỉ quan tâm điểm số của con, kết quả là con bị áp lực rất lớn, ngày nào cũng không vui. Về sau họ nhận ra mục đích của giáo dục không phải là để con thi điểm cao, mà là giúp con hình thành thói quen tốt. Thế là ngày nào họ cũng dành thời gian cho con ra ngoài rèn luyện thân thể hoặc đọc sách mình thích.",
   "note": "Câu hỏi bài khoá 3; dùng 不是……而是…… (điểm 3) + ôn 于是 (Bài 3)."
  },
  {
   "q_zh": "请根据提示复述课文三。",
   "q_vn": "Dựa vào gợi ý, kể lại bài khoá 3.",
   "hint": "星期六，白家月和李文去了……。王一雪的两个孩子……。王一雪说，以前他们……，所以……，结果……。后来，他们认识到，教育的目的不是……，而是……。于是……",
   "sample": "星期六，白家月和李文去了王一雪家。王一雪的两个孩子很有礼貌，他们一进门，两个孩子就马上和他们打招呼。在王一雪家，他们也聊到了孩子的教育。王一雪说，以前他们和很多家长一样，觉得孩子上个好大学，人生才是成功的。所以，他们只关心孩子的分数，结果孩子压力特别大，每天都很不开心。后来，他们认识到，教育的目的不是让孩子考高分，而是帮助孩子养成好习惯。于是，他们做出改变，每天都给孩子留出时间外出锻炼身体，或者看些自己感兴趣的书。白家月觉得王一雪和刘明的做法真棒。",
   "sample_vn": "Thứ Bảy, Bạch Gia Nguyệt và Lý Văn đến nhà Vương Nhất Tuyết. Hai đứa con của chị rất lễ phép… Bạch Gia Nguyệt thấy cách làm của Vương Nhất Tuyết và Lưu Minh thật tuyệt.",
   "note": "Bài tập 复述 của sách (trang 7)."
  },
  {
   "q_zh": "“活到老学到老”是什么意思？那位律师为什么一直坚持学习法律知识？",
   "q_vn": "“Sống đến già học đến già” nghĩa là gì? Vì sao người luật sư kia luôn kiên trì học kiến thức pháp luật?",
   "hint": "“活到老学到老”，就是说……。因为他认为，这不仅是……，也是……",
   "sample": "“活到老学到老”，就是说，学习是人一生的事情，人要一直坚持学习。那位律师一直坚持学习新的法律知识，因为他认为，这不仅是律师的要求和责任，也是提高自己能力的重要方法。",
   "sample_vn": "“Sống đến già học đến già” nghĩa là học tập là việc cả đời, con người phải luôn kiên trì học. Người luật sư kia luôn kiên trì học kiến thức pháp luật mới, vì anh ấy cho rằng đó không chỉ là yêu cầu và trách nhiệm của luật sư, mà còn là cách quan trọng để nâng cao năng lực bản thân.",
   "note": "Câu hỏi bài khoá 4; dùng 就是说 (điểm 4) + ôn 不仅……也…… (Bài 3)."
  },
  {
   "q_zh": "小组讨论：现在，人们越来越离不开网络，上网成为很多人每天一定要做的事情。三人一组，请以“网络给我们带来的影响”为题，从好的影响和坏的影响两方面进行讨论，讨论后填写表格，再向全班介绍。",
   "q_vn": "Thảo luận nhóm: Ngày nay con người ngày càng không thể rời xa mạng Internet, lên mạng trở thành việc nhiều người ngày nào cũng làm. Nhóm 3 người, lấy chủ đề “Ảnh hưởng của mạng Internet đối với chúng ta”, thảo luận từ hai mặt: ảnh hưởng tốt và ảnh hưởng xấu; thảo luận xong điền vào bảng rồi trình bày trước lớp.",
   "hint": "好的影响：获取知识……；线上……；自学……；就是……也……。坏的影响：……不是……，而是……；即使……也……。我们认为，……就是说……",
   "sample": "大家好！我们组讨论的题目是“网络给我们带来的影响”。先说好的影响：第一，网上到处是学习资料，获取知识变得简单多了，想查什么都能查到；第二，有了线上课和视频记录，我们就是不在教室，也可以学习，自学也更方便了；第三，老年人也可以上网和网友聊天儿，生活更丰富了。再说坏的影响：有些人每天花太多时间玩游戏、看视频，结果没有时间运动和休息；还有人觉得在网上什么都能查到，就不认真读书、不自己思考了。另外，网上的信息不一定都是对的。我们认为，网络本身不是问题，问题是怎么用它。即使网络再方便，我们也要合理安排上网的时间，就是说，要让网络帮助我们学习和生活，而不是让它管着我们。",
   "sample_vn": "Chào cả lớp! Chủ đề nhóm em thảo luận là “Ảnh hưởng của mạng Internet đối với chúng ta”. Trước hết là ảnh hưởng tốt: một là, trên mạng đâu đâu cũng là tài liệu học tập, tiếp thu kiến thức trở nên đơn giản hơn nhiều; hai là, có lớp trực tuyến và video ghi lại, chúng ta dù không ở lớp vẫn học được, tự học cũng tiện hơn; ba là, người già cũng có thể lên mạng trò chuyện với bạn bè, cuộc sống phong phú hơn. Còn ảnh hưởng xấu: có người mỗi ngày dành quá nhiều thời gian chơi game, xem video, kết quả không có thời gian vận động và nghỉ ngơi; có người thấy trên mạng cái gì cũng tra được nên không chăm đọc sách, không tự suy nghĩ. Ngoài ra, thông tin trên mạng chưa chắc đã đúng hết. Chúng em cho rằng bản thân mạng Internet không phải là vấn đề, vấn đề là dùng nó thế nào. Dù mạng tiện đến mấy, chúng ta cũng phải sắp xếp thời gian lên mạng hợp lý, tức là để mạng giúp ta học tập và sinh hoạt, chứ không để nó điều khiển ta.",
   "note": "Hoạt động 任务活动 · 小组讨论 (thảo luận nhóm) của sách, trang 11 — dùng đủ 4 điểm ngữ pháp: 即使……也……, 就是……也……, 不是……而是……, 就是说."
  }
 ]
};
var translateData = [
 {
  "vi": "Có những người dù tuổi đã cao vẫn kiên trì đi học lớp người cao tuổi.",
  "zh": "有些人即使年龄大了，也坚持去老年班学习。",
  "py": "Yǒuxiē rén jíshǐ niánlíng dà le, yě jiānchí qù lǎoniánbān xuéxí."
 },
 {
  "vi": "Tôi chỉ cần có điện thoại hoặc máy tính thì dù không ở lớp cũng có thể học tiếng Trung.",
  "zh": "我只要有手机或电脑，就是不在教室，也可以学习中文。",
  "py": "Wǒ zhǐyào yǒu shǒujī huò diànnǎo, jiùshì bú zài jiàoshì, yě kěyǐ xuéxí Zhōngwén."
 },
 {
  "vi": "Mục đích của giáo dục không phải là để con thi được điểm cao, mà là giúp con hình thành thói quen tốt.",
  "zh": "教育的目的不是让孩子考高分，而是帮助孩子养成好习惯。",
  "py": "Jiàoyù de mùdì bú shì ràng háizi kǎo gāofēn, érshì bāngzhù háizi yǎngchéng hǎo xíguàn."
 },
 {
  "vi": "Học tập là việc cả đời của con người, nghĩa là phải sống đến già học đến già.",
  "zh": "学习是人一生的事情，就是说，要活到老学到老。",
  "py": "Xuéxí shì rén yìshēng de shìqing, jiùshì shuō, yào huó dào lǎo xuédào lǎo."
 },
 {
  "vi": "Công nghệ đã làm cho việc tiếp thu kiến thức trở nên đơn giản hơn nhiều.",
  "zh": "科技让获取知识变得简单多了。",
  "py": "Kējì ràng huòqǔ zhīshi biànde jiǎndān duō le."
 },
 {
  "vi": "Hai đứa con nhà chị rất lễ phép, vừa vào cửa đã chào hỏi chúng tôi.",
  "zh": "姐姐家的两个孩子很有礼貌，一进门就和我们打招呼。",
  "py": "Jiějie jiā de liǎng gè háizi hěn yǒu lǐmào, yí jìn mén jiù hé wǒmen dǎ zhāohu."
 }
];
var translateDataRev = [
 {
  "vi": "Cuộc sống của họ thật phong phú, khiến người ta ngưỡng mộ.",
  "zh": "他们的生活真丰富，让人羡慕。",
  "py": "Tāmen de shēnghuó zhēn fēngfù, ràng rén xiànmù."
 },
 {
  "vi": "Giáo sư điểm danh trực tuyến, không phải gọi tên từng người như học trực tiếp.",
  "zh": "教授在线上点名，不用像线下那样一个个叫名字。",
  "py": "Jiàoshòu zài xiànshàng diǎnmíng, búyòng xiàng xiànxià nàyàng yígègè jiào míngzi."
 },
 {
  "vi": "Bây giờ trên mạng đâu đâu cũng là tài liệu học tập, muốn tra gì cũng tra được.",
  "zh": "现在网上到处是学习资料，想查什么都能查到。",
  "py": "Xiànzài wǎngshang dàochù shì xuéxí zīliào, xiǎng chá shénme dōu néng chádào."
 },
 {
  "vi": "Ngày nào họ cũng dành thời gian cho con ra ngoài rèn luyện thân thể.",
  "zh": "他们每天都给孩子留出时间外出锻炼身体。",
  "py": "Tāmen měitiān dōu gěi háizi liúchū shíjiān wàichū duànliàn shēntǐ."
 },
 {
  "vi": "Được làm học sinh lại một lần nữa, cuộc sống thú vị hơn, cũng cảm thấy mình trẻ ra.",
  "zh": "重新当一回学生，生活更有意思了，也感觉自己变年轻了。",
  "py": "Chóngxīn dāng yì huí xuésheng, shēnghuó gèng yǒu yìsi le, yě gǎnjué zìjǐ biàn niánqīng le."
 }
];
var sgkData = [
 {
  "kieu": "kho",
  "de": "选词填空（一）· 综合练习",
  "vn": "Chọn từ thích hợp điền vào chỗ trống (Bài tập tổng hợp, sách trang 10). Sách 4下 chưa có đáp án — đây là đáp án tham khảo.",
  "dapSgk": false,
  "tu": [
   "一生",
   "打招呼",
   "丰富",
   "留",
   "弹",
   "优秀"
  ],
  "cau": [
   {
    "s": "即使每天工作很忙，我也会＿＿出时间读书。",
    "dap": [
     "留"
    ]
   },
   {
    "s": "我刚坐下，她就过来和我＿＿。",
    "dap": [
     "打招呼"
    ]
   },
   {
    "s": "他＿＿只做了一件事，那就是研究数学，最后他成为了一位很有名的数学家。",
    "dap": [
     "一生"
    ]
   },
   {
    "s": "小雪很喜欢＿＿钢琴，每天都会练习至少两个小时。",
    "dap": [
     "弹"
    ]
   },
   {
    "s": "他非常＿＿，把任务交给他，我很放心。",
    "dap": [
     "优秀"
    ]
   },
   {
    "s": "老王工作三十年了，有很＿＿的工作经验，这个问题他能解决。",
    "dap": [
     "丰富"
    ]
   }
  ]
 },
 {
  "kieu": "kho",
  "de": "选词填空（二）· 综合练习",
  "vn": "Chọn từ thích hợp điền vào chỗ trống (hội thoại, sách trang 10). Đáp án tham khảo.",
  "dapSgk": false,
  "tu": [
   "羡慕",
   "礼貌",
   "律师",
   "数字",
   "继续",
   "口语"
  ],
  "cau": [
   {
    "s": "A：你们还要＿＿加班吗？　B：对，今天必须要把这些货全部发出去。",
    "dap": [
     "继续"
    ]
   },
   {
    "s": "A：你觉得怎样才能学好外语？　B：我自己学外语的经验是，开始学习时要特别重视＿＿，多听多说。",
    "dap": [
     "口语"
    ]
   },
   {
    "s": "A：你女儿真有＿＿。　B：谢谢，从小我们就教她要尊重别人，得到别人的帮助时，要说“谢谢”。",
    "dap": [
     "礼貌"
    ]
   },
   {
    "s": "A：你们做＿＿的，平时工作一定很忙吧？　B：也不一定，有时候周末也不能休息，有时候就能按时下班。",
    "dap": [
     "律师"
    ]
   },
   {
    "s": "A：姐姐，我太＿＿你的工作了！从来不加班，而且工资高。　B：可是我们经常出差，很累的。",
    "dap": [
     "羡慕"
    ]
   },
   {
    "s": "A：真是＿＿社会啊，我要的信息马上就查到了。　B：是啊，不仅是查资料，现在很多事情也都可以在网上解决了。",
    "dap": [
     "数字"
    ]
   }
  ]
 },
 {
  "kieu": "kho",
  "de": "选择合适的内容完成短文",
  "vn": "Chọn nội dung thích hợp (A–D) hoàn thành đoạn văn (sách trang 10–11). Đáp án tham khảo.",
  "dapSgk": false,
  "tu": [
   "还可以直接给大家放视频",
   "第一个进教室的人",
   "老师和学生都觉得方便",
   "上课时"
  ],
  "cau": [
   {
    "s": "现在有了数字教室，上课方式和以前大不相同了。＿＿，只要按（àn, ấn）下门口的“上课”，灯和空调就会自己打开，不用一个一个去开。＿＿，用到的“黑板”是一块能上网的电子屏幕（píngmù, màn hình），老师不仅可以在上面写字，＿＿。数字教室里的桌椅也分成几个小组（xiǎozǔ, nhóm），小组里的人聚在一起，都能互相看到对方，这样方便大家交流。这些变化让上课方式丰富了不少，＿＿，所以数字教室很受欢迎。",
    "dap": [
     "第一个进教室的人",
     "上课时",
     "还可以直接给大家放视频",
     "老师和学生都觉得方便"
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
    "anh": "/images/hsk4v3/bai-11/bt-1.webp",
    "s": "",
    "tu": "老年人",
    "dap": "这两位老年人虽然年龄大了，但是每天都过得很开心。",
    "giai": "老年人 làm chủ ngữ; 两位 — lượng từ lịch sự 位 cho người; ôn 虽然……但是……"
   },
   {
    "anh": "/images/hsk4v3/bai-11/bt-2.webp",
    "s": "",
    "tu": "准时",
    "dap": "这架飞机准时起飞了。",
    "giai": "准时 làm trạng ngữ đứng trước động từ 起飞; lượng từ của 飞机 là 架."
   },
   {
    "anh": "/images/hsk4v3/bai-11/bt-3.webp",
    "s": "",
    "tu": "散步",
    "dap": "他们每天晚饭后都去河边散步。",
    "giai": "Nơi chốn đứng trước 散步 (✗ 散步河边); 散步 là động từ li hợp: 散散步, 散一会儿步."
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
  "tieuDe": "Viết đoạn văn: cách dạy học em thích (写作)",
  "gioiThieu": "Đề 写作 của sách HSK 4 (3.0) yêu cầu viết một đoạn văn ngắn (ít nhất 140 chữ) dựa trên trải nghiệm của bản thân — lần này là nói về cách dạy học trên lớp mà em thích và giải thích lý do, giống phần 书写 của đề thi HSK 4 mới.",
  "buoc": [
   "Đọc kỹ đề: hai yêu cầu bắt buộc — (1) em thích thầy cô dạy THẾ NÀO, (2) VÌ SAO; phải dựa vào trải nghiệm thật của em.",
   "Lập dàn ý theo các câu hỏi gợi ý: trước đây em học thế nào → cách dạy em thích → lợi ích → so sánh trực tuyến / trực tiếp → mong muốn sau này.",
   "Dùng từ mới và 4 điểm ngữ pháp của bài (khung “Từ, cấu trúc nên dùng”): 不是……而是……, 就是说, 即使……也……, 就是……也…….",
   "Nối các ý bằng từ nối: 以前 / 后来 / 首先 / 另外 / 一方面……另一方面…… / 跟……相比.",
   "Câu mở nêu thẳng cách dạy em thích, câu kết nói ý nghĩa (học suốt đời); tự soát số chữ (≥ 140) và lỗi chữ Hán trước khi nộp."
  ]
 },
 "de": "你喜欢老师怎样上课？请根据你的经历，写一篇短文，说说你喜欢的课堂教学方式，并说明理由，不少于140字。",
 "prompt": "Em thích thầy cô lên lớp như thế nào? Hãy dựa vào trải nghiệm của mình, viết một đoạn văn ngắn nói về cách dạy học trên lớp mà em thích và giải thích lý do, không ít hơn 140 chữ.",
 "dan": [
  {
   "hoi": "你以前上的课是什么样的？",
   "goiY": "以前，老师在上面讲，我们在下面记笔记……"
  },
  {
   "hoi": "你最喜欢老师怎样上课？",
   "goiY": "我最喜欢的上课方式不是……，而是……"
  },
  {
   "hoi": "这样上课有什么好处？",
   "goiY": "……，就是说……；一方面……，另一方面……"
  },
  {
   "hoi": "线上课和线下课，你更喜欢哪一种？为什么？",
   "goiY": "跟线下课相比，线上课……；即使……，也……"
  },
  {
   "hoi": "以后你打算怎样学习？",
   "goiY": "就是以后不在学校了，我也会……，活到老学到老"
  }
 ],
 "tuNen": [
  "线上",
  "线下",
  "数字",
  "教授",
  "点名",
  "视频",
  "记录",
  "资料",
  "自学",
  "口语",
  "科技",
  "获取",
  "丰富",
  "养成",
  "继续"
 ],
 "cauTruc": [
  {
   "ten": "不是……，而是……",
   "nhan": "不是",
   "vd": "我最喜欢的上课方式不是老师一个人讲，而是老师和学生一起交流。",
   "khi": "Câu MỞ: nêu cách dạy em thích (phủ định cách cũ, khẳng định cách mới)."
  },
  {
   "ten": "……，就是说，……",
   "nhan": "就是说",
   "vd": "老师会让我们分成小组讨论，就是说，每个人都有机会练口语。",
   "khi": "Giải thích rõ lợi ích của cách dạy đó."
  },
  {
   "ten": "即使……，也……",
   "nhan": "即使",
   "vd": "即使课上没听明白，我也能在学校网站上找到视频记录再看一遍。",
   "khi": "Nói về ưu điểm của lớp học số / trực tuyến."
  },
  {
   "ten": "跟……相比",
   "nhan": "相比",
   "vd": "跟线下课相比，线上课更方便，不过和同学面对面交流的机会少一些。",
   "khi": "So sánh trực tuyến – trực tiếp (ôn Bài 8)."
  },
  {
   "ten": "就是……，也……",
   "nhan": "就是",
   "vd": "就是以后不在学校了，我也会继续用这种方法学习。",
   "khi": "Câu KẾT: quyết tâm học suốt đời."
  }
 ],
 "checklist": [
  "Đủ ít nhất 140 chữ Hán chưa?",
  "Đã nói rõ cách dạy em thích VÀ giải thích lý do (dựa vào trải nghiệm thật) chưa?",
  "Đã dùng ít nhất 3 trong 4 điểm ngữ pháp của bài (即使……也……、就是……也……、不是……而是……、就是说) chưa?",
  "Đã dùng ít nhất 6 từ mới của bài chưa?",
  "Đoạn văn có câu mở và câu kết rõ ràng, các ý nối với nhau bằng từ nối chưa?"
 ],
 "model": {
  "zh": "我最喜欢的课堂教学方式，不是老师一个人在上面讲、学生在下面记笔记，而是老师和学生一起交流、线上线下结合的方式。上大学以后，我们经常在数字教室上课。教授拍照点名，特别节约时间；课上老师会给我们放视频，还会让我们分成小组讨论，就是说，每个人都有机会练口语，不只是听，还要自己说、自己想。课后，即使课上没听明白，我也能在学校网站上找到视频记录再看一遍。网上到处是学习资料，自学也更方便了。我觉得这种上课方式一方面让课堂变得更丰富、更有趣，另一方面也让我养成了自学的好习惯。就是以后不在学校了，我也会继续用这种方法学习，活到老学到老。",
  "py": "Wǒ zuì xǐhuan de kètáng jiàoxué fāngshì, bú shì lǎoshī yí gè rén zài shàngmian jiǎng, xuésheng zài xiàmian jì bǐjì, érshì lǎoshī hé xuésheng yìqǐ jiāoliú, xiànshàng xiànxià jiéhé de fāngshì. Shàng dàxué yǐhòu, wǒmen jīngcháng zài shùzì jiàoshì shàngkè. Jiàoshòu pāizhào diǎnmíng, tèbié jiéyuē shíjiān; kè shàng lǎoshī huì gěi wǒmen fàng shìpín, hái huì ràng wǒmen fēnchéng xiǎozǔ tǎolùn, jiùshì shuō, měi gè rén dōu yǒu jīhuì liàn kǒuyǔ, bù zhǐshì tīng, hái yào zìjǐ shuō, zìjǐ xiǎng. Kèhòu, jíshǐ kè shàng méi tīng míngbai, wǒ yě néng zài xuéxiào wǎngzhàn shàng zhǎodào shìpín jìlù zài kàn yí biàn. Wǎngshang dàochù shì xuéxí zīliào, zìxué yě gèng fāngbiàn le. Wǒ juéde zhè zhǒng shàngkè fāngshì yìfāngmiàn ràng kètáng biànde gèng fēngfù, gèng yǒuqù, lìngyìfāngmiàn yě ràng wǒ yǎngchéng le zìxué de hǎo xíguàn. Jiùshì yǐhòu bú zài xuéxiào le, wǒ yě huì jìxù yòng zhè zhǒng fāngfǎ xuéxí, huó dào lǎo xuédào lǎo."
 }
};
