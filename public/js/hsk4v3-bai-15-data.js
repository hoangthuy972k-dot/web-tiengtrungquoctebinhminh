// HSK 4 (3.0) · Bai 15 — sinh boi tools/hsk4v3/gan.js tu tools/hsk4v3/bai-15/ (dung sua tay).
var vocabData = [
 {
  "n": 1,
  "zh": "期中",
  "py": "qīzhōng",
  "pos": "Danh từ",
  "vn": "giữa kỳ (học kỳ)",
  "hv": "kỳ trung",
  "em": "📝",
  "lesson": 1,
  "explain": [
   "Khoảng giữa một học kỳ; gặp nhiều nhất trong 期中考试 (thi giữa kỳ). Cuối kỳ là 期末."
  ],
  "usage": "期中考试 · 期中成绩 · 期中 ↔ 期末 (cuối kỳ).",
  "collo": [
   "期中考试",
   "期中成绩",
   "期中以后",
   "期中和期末"
  ],
  "colloFull": [
   {
    "zh": "期中考试",
    "py": "Qīzhōng kǎoshì",
    "vn": "thi giữa kỳ"
   },
   {
    "zh": "期中成绩",
    "py": "Qīzhōng chéngjì",
    "vn": "điểm giữa kỳ"
   },
   {
    "zh": "期中以后",
    "py": "Qīzhōng yǐhòu",
    "vn": "sau giữa kỳ"
   },
   {
    "zh": "期中和期末",
    "py": "Qīzhōng hé qīmò",
    "vn": "giữa kỳ và cuối kỳ"
   }
  ],
  "patterns": [
   {
    "s": "期中 / 期末 + 考试",
    "m": "Thi giữa kỳ / cuối kỳ"
   }
  ],
  "ex_zh": "李文，期中考试后就再也没见过你了，你这段时间在忙什么呢？",
  "ex_py": "Lǐ Wén, qīzhōng kǎoshì hòu jiù zài yě méi jiàn guò nǐ le, nǐ zhè duàn shíjiān zài máng shénme ne?",
  "ex_vn": "Lý Văn, từ sau kỳ thi giữa kỳ là không gặp lại cậu nữa, dạo này cậu bận gì thế?",
  "exList": [
   {
    "zh": "李文，期中考试后就再也没见过你了，你这段时间在忙什么呢？",
    "py": "Lǐ Wén, qīzhōng kǎoshì hòu jiù zài yě méi jiàn guò nǐ le, nǐ zhè duàn shíjiān zài máng shénme ne?",
    "vn": "Lý Văn, từ sau kỳ thi giữa kỳ là không gặp lại cậu nữa, dạo này cậu bận gì thế?"
   },
   {
    "zh": "下周就要期中考试了，图书馆里的人特别多。",
    "py": "Xià zhōu jiù yào qīzhōng kǎoshì le, túshūguǎn lǐ de rén tèbié duō.",
    "vn": "Tuần sau là thi giữa kỳ rồi, trong thư viện đông người lắm."
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
    "prompt": "Kỳ thi giữa kỳ lần này khó hơn lần trước nhiều.",
    "answer": "这次期中考试比上次难多了。",
    "answerPy": "Zhè cì qīzhōng kǎoshì bǐ shàng cì nánduō le.",
    "note": "Ôn câu so sánh 比 + 多了 (HSK 3).",
    "pair": "A比B + Adj + 多了"
   },
   {
    "promptLang": "vi",
    "prompt": "Cho dù thi giữa kỳ không tốt, em cũng đừng buồn.",
    "answer": "即使期中考试没考好，你也别难过。",
    "answerPy": "Jíshǐ qīzhōng kǎoshì méi kǎohǎo, nǐ yě bié nánguò.",
    "note": "Ôn 即使……也…… (Bài 11 · điểm 1).",
    "pair": "即使……也……"
   }
  ]
 },
 {
  "n": 2,
  "zh": "医药",
  "py": "yīyào",
  "pos": "Danh từ",
  "vn": "y dược, thuốc men",
  "hv": "y dược",
  "em": "💊",
  "lesson": 1,
  "explain": [
   "Gọi chung ngành y và thuốc men; hay làm định ngữ: 医药公司, 医药专业."
  ],
  "usage": "医药公司 · 医药专业 · 医药费 (tiền thuốc men).",
  "collo": [
   "医药公司",
   "医药专业",
   "医药费",
   "医药行业"
  ],
  "colloFull": [
   {
    "zh": "医药公司",
    "py": "Yīyào gōngsī",
    "vn": "công ty dược"
   },
   {
    "zh": "医药专业",
    "py": "Yīyào zhuānyè",
    "vn": "ngành y dược"
   },
   {
    "zh": "医药费",
    "py": "Yīyàofèi",
    "vn": "tiền thuốc men, viện phí"
   },
   {
    "zh": "医药行业",
    "py": "Yīyào hángyè",
    "vn": "ngành y dược"
   }
  ],
  "patterns": [
   {
    "s": "医药 + 公司 / 专业 / 费",
    "m": "医药 làm định ngữ, không thêm 的"
   }
  ],
  "ex_zh": "我最近去一家医药公司应聘了，他们正在招聘实习生。",
  "ex_py": "Wǒ zuìjìn qù yì jiā yīyào gōngsī yìngpìn le, tāmen zhèngzài zhāopìn shíxíshēng.",
  "ex_vn": "Dạo này mình đi ứng tuyển ở một công ty dược, họ đang tuyển thực tập sinh.",
  "exList": [
   {
    "zh": "我最近去一家医药公司应聘了，他们正在招聘实习生。",
    "py": "Wǒ zuìjìn qù yì jiā yīyào gōngsī yìngpìn le, tāmen zhèngzài zhāopìn shíxíshēng.",
    "vn": "Dạo này mình đi ứng tuyển ở một công ty dược, họ đang tuyển thực tập sinh."
   },
   {
    "zh": "她是学医药的，毕业后想去医院工作。",
    "py": "Tā shì xué yīyào de, bìyè hòu xiǎng qù yīyuàn gōngzuò.",
    "vn": "Cô ấy học ngành y dược, tốt nghiệp xong muốn làm ở bệnh viện."
   }
  ],
  "hanzi": [
   {
    "c": "医",
    "p": "yī",
    "type": "半包围结构 · Bán bao vây",
    "st": 7,
    "ord": "匚(khuông) bao ngoài → 矢(thỉ) bên trong",
    "rad": "匚 (khuông – vật đựng hình hộp)",
    "mean": "y học, chữa bệnh, bác sĩ",
    "tip": "匚(hộp đựng dụng cụ) + 矢(mũi tên, dụng cụ y tế thời xưa) → hộp đựng DỤNG CỤ chữa bệnh = Y HỌC.",
    "cf": "区 (qū – \"khu vực\", cũng có bộ 匚)",
    "w": "医生 / 学医 / 医院"
   },
   {
    "c": "药",
    "p": "yào",
    "type": "上下结构 · Trên-dưới",
    "st": 9,
    "ord": "艹(thảo đầu) trên → 约(ước) dưới",
    "rad": "艹 (thảo – cỏ cây)",
    "mean": "thuốc",
    "tip": "Bộ 艹(cỏ) ở trên → thuốc xưa làm từ cây cỏ, thảo dược.",
    "cf": "约 (yuē – \"hẹn\", thiếu 艹)",
    "w": "药店 / 吃药 / 一点儿药"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Anh trai tôi làm ở một công ty dược, công việc rất bận.",
    "answer": "我哥哥在一家医药公司工作，工作很忙。",
    "answerPy": "Wǒ gēge zài yì jiā yīyào gōngsī gōngzuò, gōngzuò hěn máng.",
    "note": "Lượng từ 家 cho công ty (HSK 3).",
    "pair": "一家 + 公司"
   },
   {
    "promptLang": "vi",
    "prompt": "Cùng với khoa học phát triển, ngành y dược cũng phát triển ngày càng nhanh.",
    "answer": "随着科学的发展，医药行业也发展得越来越快。",
    "answerPy": "Suízhe kēxué de fāzhǎn, yīyào hángyè yě fāzhǎn de yuèláiyuè kuài.",
    "note": "Ôn 随着 (Bài 1 · điểm 3) + 越来越 (HSK 3).",
    "pair": "随着……，……也越来越……"
   }
  ]
 },
 {
  "n": 3,
  "zh": "应聘",
  "py": "yìngpìn",
  "pos": "Động từ",
  "vn": "ứng tuyển, dự tuyển (xin việc)",
  "hv": "ứng sính",
  "em": "🙋",
  "lesson": 1,
  "explain": [
   "Đáp lại thông báo tuyển người: nộp hồ sơ, thi, phỏng vấn để xin vào làm. Người đi ứng tuyển là 应聘者."
  ],
  "usage": "去 + công ty + 应聘 · 应聘 + vị trí (应聘翻译) · 应聘者.",
  "collo": [
   "去公司应聘",
   "应聘工作",
   "应聘者",
   "应聘成功"
  ],
  "colloFull": [
   {
    "zh": "去公司应聘",
    "py": "Qù gōngsī yìngpìn",
    "vn": "đến công ty ứng tuyển"
   },
   {
    "zh": "应聘工作",
    "py": "Yìngpìn gōngzuò",
    "vn": "ứng tuyển việc làm"
   },
   {
    "zh": "应聘者",
    "py": "Yìngpìnzhě",
    "vn": "người ứng tuyển"
   },
   {
    "zh": "应聘成功",
    "py": "Yìngpìn chénggōng",
    "vn": "ứng tuyển thành công"
   }
  ],
  "patterns": [
   {
    "s": "去 + nơi + 应聘 (+ vị trí)",
    "m": "Đi đâu ứng tuyển"
   },
   {
    "s": "应聘 ↔ 招聘",
    "m": "应聘 = người xin việc; 招聘 = công ty tuyển người"
   }
  ],
  "ex_zh": "我最近去一家医药公司应聘了，他们正在招聘实习生。",
  "ex_py": "Wǒ zuìjìn qù yì jiā yīyào gōngsī yìngpìn le, tāmen zhèngzài zhāopìn shíxíshēng.",
  "ex_vn": "Dạo này mình đi ứng tuyển ở một công ty dược, họ đang tuyển thực tập sinh.",
  "exList": [
   {
    "zh": "我最近去一家医药公司应聘了，他们正在招聘实习生。",
    "py": "Wǒ zuìjìn qù yì jiā yīyào gōngsī yìngpìn le, tāmen zhèngzài zhāopìn shíxíshēng.",
    "vn": "Dạo này mình đi ứng tuyển ở một công ty dược, họ đang tuyển thực tập sinh."
   },
   {
    "zh": "他去那家公司应聘翻译，下周就去面试。",
    "py": "Tā qù nà jiā gōngsī yìngpìn fānyì, xià zhōu jiù qù miànshì.",
    "vn": "Anh ấy ứng tuyển vị trí phiên dịch ở công ty đó, tuần sau đi phỏng vấn."
   }
  ],
  "hanzi": [
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
   },
   {
    "c": "聘",
    "p": "pìn",
    "type": "左右结构 · Trái-phải",
    "st": 13,
    "ord": "耳 (nhĩ) trái → 甹 phải",
    "rad": "耳 (nhĩ – tai)",
    "mean": "mời, tuyển",
    "tip": "Bộ tai 耳 (nghe tin, thông báo) + 甹 (biểu âm) → thông báo MỜI người đến làm việc = TUYỂN DỤNG.",
    "cf": "聘 dễ nhầm với 骋 (chěng – \"rong ruổi\", bộ 马\")",
    "w": "招聘 / 聘请 / 应聘"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Lý Văn ứng tuyển thành công chưa?",
    "answer": "李文应聘成功了吗？",
    "answerPy": "Lǐ Wén yìngpìn chénggōng le ma?",
    "note": "Câu hỏi đọc hiểu bài khoá 1.",
    "pair": "V + 成功了吗"
   },
   {
    "promptLang": "vi",
    "prompt": "Không phải tôi không muốn đi ứng tuyển, mà là chưa chuẩn bị xong.",
    "answer": "不是我不想去应聘，而是还没准备好。",
    "answerPy": "Bú shì wǒ bù xiǎng qù yìngpìn, érshì hái méi zhǔnbèi hǎo.",
    "note": "Ôn 不是……而是…… (Bài 11 · điểm 3).",
    "pair": "不是……而是……"
   }
  ]
 },
 {
  "n": 4,
  "zh": "招聘",
  "py": "zhāopìn",
  "pos": "Động từ",
  "vn": "tuyển dụng, tuyển người",
  "hv": "chiêu sính",
  "em": "📢",
  "lesson": 1,
  "explain": [
   "Công ty / đơn vị thông báo tìm người vào làm việc."
  ],
  "usage": "招聘 + người (实习生 / 毕业生) · 招聘信息 · 招聘会.",
  "collo": [
   "招聘实习生",
   "招聘信息",
   "招聘会",
   "招聘毕业生"
  ],
  "colloFull": [
   {
    "zh": "招聘实习生",
    "py": "Zhāopìn shíxíshēng",
    "vn": "tuyển thực tập sinh"
   },
   {
    "zh": "招聘信息",
    "py": "Zhāopìn xìnxī",
    "vn": "thông tin tuyển dụng"
   },
   {
    "zh": "招聘会",
    "py": "Zhāopìnhuì",
    "vn": "hội chợ việc làm"
   },
   {
    "zh": "招聘毕业生",
    "py": "Zhāopìn bìyèshēng",
    "vn": "tuyển sinh viên mới ra trường"
   }
  ],
  "patterns": [
   {
    "s": "单位 / 公司 + 招聘 + người",
    "m": "Ai tuyển ai"
   },
   {
    "s": "在 + 招聘 + ……时",
    "m": "Khi tuyển …"
   }
  ],
  "ex_zh": "现在很多单位在招聘毕业生时，都很重视有没有实习经历。",
  "ex_py": "Xiànzài hěn duō dānwèi zài zhāopìn bìyèshēng shí, dōu hěn zhòngshì yǒu méiyǒu shíxí jīnglì.",
  "ex_vn": "Bây giờ nhiều đơn vị khi tuyển sinh viên tốt nghiệp đều rất coi trọng có kinh nghiệm thực tập hay không.",
  "exList": [
   {
    "zh": "现在很多单位在招聘毕业生时，都很重视有没有实习经历。",
    "py": "Xiànzài hěn duō dānwèi zài zhāopìn bìyèshēng shí, dōu hěn zhòngshì yǒu méiyǒu shíxí jīnglì.",
    "vn": "Bây giờ nhiều đơn vị khi tuyển sinh viên tốt nghiệp đều rất coi trọng có kinh nghiệm thực tập hay không."
   },
   {
    "zh": "学校下周有一个招聘会，很多公司都会来招聘。",
    "py": "Xuéxiào xià zhōu yǒu yí gè zhāopìnhuì, hěn duō gōngsī dōu huì lái zhāopìn.",
    "vn": "Tuần sau trường có hội chợ việc làm, nhiều công ty sẽ đến tuyển người."
   }
  ],
  "hanzi": [
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
    "c": "聘",
    "p": "pìn",
    "type": "左右结构 · Trái-phải",
    "st": 13,
    "ord": "耳 (nhĩ) trái → 甹 phải",
    "rad": "耳 (nhĩ – tai)",
    "mean": "mời, tuyển",
    "tip": "Bộ tai 耳 (nghe tin, thông báo) + 甹 (biểu âm) → thông báo MỜI người đến làm việc = TUYỂN DỤNG.",
    "cf": "聘 dễ nhầm với 骋 (chěng – \"rong ruổi\", bộ 马\")",
    "w": "招聘 / 聘请 / 应聘"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Công ty chúng tôi đang tuyển thực tập sinh, bạn có muốn thử không?",
    "answer": "我们公司正在招聘实习生，你想试试吗？",
    "answerPy": "Wǒmen gōngsī zhèngzài zhāopìn shíxíshēng, nǐ xiǎng shìshi ma?",
    "note": "正在 + V (HSK 2/3).",
    "pair": "正在招聘"
   },
   {
    "promptLang": "vi",
    "prompt": "Mỗi lần tuyển người, công ty đều đăng thông báo trên mạng.",
    "answer": "公司每次招聘，都会在网上发通知。",
    "answerPy": "Gōngsī měi cì zhāopìn, dōu huì zài wǎngshang fā tōngzhī.",
    "note": "Ôn 每次……都…… (HSK 3) + 通知 (Bài 1).",
    "pair": "每次……都……"
   }
  ]
 },
 {
  "n": 5,
  "zh": "实习",
  "py": "shíxí",
  "pos": "Động từ",
  "vn": "thực tập",
  "hv": "thực tập",
  "em": "🧑‍💼",
  "lesson": 1,
  "explain": [
   "Đến nơi làm việc thật để vừa làm vừa học, thường là trước khi tốt nghiệp. Người thực tập: 实习生."
  ],
  "usage": "去 + nơi + 实习 · 实习生 · 实习经历.",
  "collo": [
   "去公司实习",
   "实习生",
   "实习经历",
   "实习机会"
  ],
  "colloFull": [
   {
    "zh": "去公司实习",
    "py": "Qù gōngsī shíxí",
    "vn": "đến công ty thực tập"
   },
   {
    "zh": "实习生",
    "py": "Shíxíshēng",
    "vn": "thực tập sinh"
   },
   {
    "zh": "实习经历",
    "py": "Shíxí jīnglì",
    "vn": "kinh nghiệm thực tập"
   },
   {
    "zh": "实习机会",
    "py": "Shíxí jīhuì",
    "vn": "cơ hội thực tập"
   }
  ],
  "patterns": [
   {
    "s": "在 / 去 + nơi + 实习",
    "m": "Thực tập ở đâu"
   },
   {
    "s": "实习 + 了 + thời gian",
    "m": "实习了三个月"
   }
  ],
  "ex_zh": "你这么早就考虑实习了？",
  "ex_py": "Nǐ zhème zǎojiù kǎolǜ shíxí le?",
  "ex_vn": "Cậu đã tính chuyện thực tập sớm vậy à?",
  "exList": [
   {
    "zh": "你这么早就考虑实习了？",
    "py": "Nǐ zhème zǎojiù kǎolǜ shíxí le?",
    "vn": "Cậu đã tính chuyện thực tập sớm vậy à?"
   },
   {
    "zh": "你以前实习过吗？是在哪儿实习的？",
    "py": "Nǐ yǐqián shíxí guò ma? Shì zài nǎr shíxí de?",
    "vn": "Trước đây bạn thực tập chưa? Thực tập ở đâu?"
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
    "c": "习",
    "p": "xí",
    "type": "独体字 · Chữ đơn (giản thể)",
    "st": 3,
    "ord": "nét liền",
    "rad": "乙 (ất)",
    "mean": "học tập, luyện tập",
    "tip": "Chữ giản thể tượng hình cánh chim non tập bay lặp đi lặp lại → nghĩa LUYỆN TẬP, ÔN LẠI nhiều lần.",
    "cf": "刁 (diāo – \"xảo trá\", hình gần giống\")",
    "w": "复习 / 学习 / 习惯"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Bạn thực tập ở đâu? — Tôi thực tập ở một bệnh viện.",
    "answer": "你是在哪儿实习的？——我是在一家医院实习的。",
    "answerPy": "Nǐ shì zài nǎr shíxí de? — Wǒ shì zài yì jiā yīyuàn shíxí de.",
    "note": "Ôn 是……的 nhấn mạnh nơi chốn (HSK 3); câu hỏi phần Khởi động.",
    "pair": "是在……的"
   },
   {
    "promptLang": "vi",
    "prompt": "Tôi đã thực tập ở công ty đó khoảng ba tháng.",
    "answer": "我在那家公司实习了三个月左右。",
    "answerPy": "Wǒ zài nà jiā gōngsī shíxí le sān gè yuè zuǒyòu.",
    "note": "Ôn 左右 (Bài 13 · điểm 3).",
    "pair": "thời gian + 左右"
   }
  ]
 },
 {
  "n": 6,
  "zh": "考虑",
  "py": "kǎolǜ",
  "pos": "Động từ",
  "vn": "suy nghĩ, cân nhắc, tính đến",
  "hv": "khảo lự",
  "em": "🤔",
  "lesson": 1,
  "explain": [
   "Suy nghĩ kỹ về một việc để quyết định. Hán Việt “khảo lự” ít dùng — nhớ nghĩa “cân nhắc”."
  ],
  "usage": "考虑 + việc · 考虑一下 · 认真考虑 · 考虑清楚.",
  "collo": [
   "考虑问题",
   "认真考虑",
   "考虑一下",
   "考虑清楚"
  ],
  "colloFull": [
   {
    "zh": "考虑问题",
    "py": "Kǎolǜ wèntí",
    "vn": "suy nghĩ vấn đề"
   },
   {
    "zh": "认真考虑",
    "py": "Rènzhēn kǎolǜ",
    "vn": "cân nhắc kỹ"
   },
   {
    "zh": "考虑一下",
    "py": "Kǎolǜ yíxià",
    "vn": "suy nghĩ một chút"
   },
   {
    "zh": "考虑清楚",
    "py": "Kǎolǜ qīngchu",
    "vn": "nghĩ cho rõ"
   }
  ],
  "patterns": [
   {
    "s": "考虑 + N / V",
    "m": "Tính đến việc gì"
   },
   {
    "s": "考虑考虑 / 考虑一下",
    "m": "Lặp động từ: cân nhắc chút"
   }
  ],
  "ex_zh": "你这么早就考虑实习了？",
  "ex_py": "Nǐ zhème zǎojiù kǎolǜ shíxí le?",
  "ex_vn": "Cậu đã tính chuyện thực tập sớm vậy à?",
  "exList": [
   {
    "zh": "你这么早就考虑实习了？",
    "py": "Nǐ zhème zǎojiù kǎolǜ shíxí le?",
    "vn": "Cậu đã tính chuyện thực tập sớm vậy à?"
   },
   {
    "zh": "买房子是大事，你一定要好好考虑考虑。",
    "py": "Mǎi fángzi shì dàshì, nǐ yídìng yào hǎohāo kǎolǜ kǎolǜ.",
    "vn": "Mua nhà là việc lớn, bạn nhất định phải cân nhắc cho kỹ."
   }
  ],
  "hanzi": [
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
   },
   {
    "c": "虑",
    "p": "lǜ",
    "type": "半包围结构 · Bán bao vây (giản thể)",
    "st": 10,
    "ord": "虍 bao ngoài → 心(biến thể) trong",
    "rad": "心 (tâm – lòng)",
    "mean": "lo nghĩ, suy xét",
    "tip": "Bộ tâm 心 (suy nghĩ trong lòng) → SUY XÉT, kết hợp 考(xem xét) thành 考虑 = CÂN NHẮC, SUY XÉT.",
    "cf": "虚 (xū – \"hư không\", cũng bộ 虍\")",
    "w": "考虑 / 考试 / 思考"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Việc này khá quan trọng, tôi cần suy nghĩ thêm cho kỹ.",
    "answer": "这件事比较重要，我需要再认真考虑一下。",
    "answerPy": "Zhè jiàn shì bǐjiào zhòngyào, wǒ xūyào zài rènzhēn kǎolǜ yíxià.",
    "note": "Bài tập chọn từ của sách (câu 4).",
    "pair": "考虑一下"
   },
   {
    "promptLang": "vi",
    "prompt": "Bạn nghĩ cho rõ rồi hãy quyết định, nếu không sẽ hối hận đấy.",
    "answer": "你考虑清楚再决定，否则会后悔的。",
    "answerPy": "Nǐ kǎolǜ qīngchu zài juédìng, fǒuzé huì hòuhuǐ de.",
    "note": "Ôn 否则 (Bài 8 · điểm 2).",
    "pair": "……，否则……"
   }
  ]
 },
 {
  "n": 7,
  "zh": "单位",
  "py": "dānwèi",
  "pos": "Danh từ",
  "vn": "đơn vị, cơ quan (nơi làm việc)",
  "hv": "đơn vị",
  "em": "🏢",
  "lesson": 1,
  "explain": [
   "Nơi một người làm việc nói chung: công ty, trường học, bệnh viện, cơ quan nhà nước…"
  ],
  "usage": "工作单位 · 很多单位 · 在单位.",
  "collo": [
   "工作单位",
   "用人单位",
   "单位领导",
   "在单位"
  ],
  "colloFull": [
   {
    "zh": "工作单位",
    "py": "Gōngzuò dānwèi",
    "vn": "nơi làm việc"
   },
   {
    "zh": "用人单位",
    "py": "Yòng rén dānwèi",
    "vn": "đơn vị tuyển dụng"
   },
   {
    "zh": "单位领导",
    "py": "Dānwèi lǐngdǎo",
    "vn": "lãnh đạo cơ quan"
   },
   {
    "zh": "在单位",
    "py": "Zài dānwèi",
    "vn": "ở cơ quan"
   }
  ],
  "patterns": [
   {
    "s": "在 + 单位 + 工作 / 加班",
    "m": "Ở cơ quan"
   },
   {
    "s": "单位 = 公司 / 学校 / 医院…",
    "m": "Từ gọi chung nơi làm việc"
   }
  ],
  "ex_zh": "现在很多单位在招聘毕业生时，都很重视有没有实习经历。",
  "ex_py": "Xiànzài hěn duō dānwèi zài zhāopìn bìyèshēng shí, dōu hěn zhòngshì yǒu méiyǒu shíxí jīnglì.",
  "ex_vn": "Bây giờ nhiều đơn vị khi tuyển sinh viên tốt nghiệp đều rất coi trọng có kinh nghiệm thực tập hay không.",
  "exList": [
   {
    "zh": "现在很多单位在招聘毕业生时，都很重视有没有实习经历。",
    "py": "Xiànzài hěn duō dānwèi zài zhāopìn bìyèshēng shí, dōu hěn zhòngshì yǒu méiyǒu shíxí jīnglì.",
    "vn": "Bây giờ nhiều đơn vị khi tuyển sinh viên tốt nghiệp đều rất coi trọng có kinh nghiệm thực tập hay không."
   },
   {
    "zh": "我们单位离家很近，我每天骑车上班。",
    "py": "Wǒmen dānwèi lí jiā hěn jìn, wǒ měitiān qíchē shàngbān.",
    "vn": "Cơ quan tôi gần nhà, ngày nào tôi cũng đạp xe đi làm."
   }
  ],
  "hanzi": [
   {
    "c": "单",
    "p": "dān",
    "type": "象形字 · Chữ tượng hình",
    "st": 8,
    "ord": "chấm → phẩy → khung 日 (sổ, ngang gập, ngang, ngang) → ngang dài → sổ",
    "rad": "十 (thập – mười)",
    "mean": "đơn, một; tờ danh sách",
    "tip": "菜 (món ăn) + 单 (tờ liệt kê): tờ giấy liệt kê các món → thực đơn. Chữ 单 còn gặp trong 简单 (từ mới bài này).",
    "cf": "弟 dì (弟弟) — phía trên cũng có 丷",
    "w": "菜单 / 简单"
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
    "prompt": "Bạn làm việc ở đơn vị nào?",
    "answer": "你在哪个单位工作？",
    "answerPy": "Nǐ zài nǎge dānwèi gōngzuò?",
    "note": "Câu hỏi thường gặp khi làm quen.",
    "pair": "在哪个单位"
   },
   {
    "promptLang": "vi",
    "prompt": "Đối với nhiều đơn vị, kinh nghiệm thực tập rất quan trọng.",
    "answer": "对于很多单位来说，实习经历非常重要。",
    "answerPy": "Duìyú hěn duō dānwèi láishuō, shíxí jīnglì fēicháng zhòngyào.",
    "note": "Ôn 对于……来说 (Bài 14 · điểm 4).",
    "pair": "对于……来说"
   }
  ]
 },
 {
  "n": 8,
  "zh": "毕业生",
  "py": "bìyèshēng",
  "pos": "Danh từ",
  "vn": "sinh viên tốt nghiệp, người mới ra trường",
  "hv": "tất nghiệp sinh",
  "em": "🎓",
  "lesson": 1,
  "explain": [
   "Người vừa / sắp học xong ở một trường; hay chỉ sinh viên mới ra trường đi tìm việc. 毕业 = tốt nghiệp."
  ],
  "usage": "大学毕业生 · 招聘毕业生 · 应届毕业生 (SV tốt nghiệp năm nay).",
  "collo": [
   "大学毕业生",
   "招聘毕业生",
   "应届毕业生",
   "毕业生找工作"
  ],
  "colloFull": [
   {
    "zh": "大学毕业生",
    "py": "Dàxué bìyèshēng",
    "vn": "sinh viên tốt nghiệp đại học"
   },
   {
    "zh": "招聘毕业生",
    "py": "Zhāopìn bìyèshēng",
    "vn": "tuyển sinh viên mới ra trường"
   },
   {
    "zh": "应届毕业生",
    "py": "Yīngjiè bìyèshēng",
    "vn": "sinh viên tốt nghiệp năm nay"
   },
   {
    "zh": "毕业生找工作",
    "py": "Bìyèshēng zhǎo gōngzuò",
    "vn": "người mới ra trường tìm việc"
   }
  ],
  "patterns": [
   {
    "s": "毕业 (tốt nghiệp) + 生 (người học)",
    "m": "毕业生 = người tốt nghiệp"
   }
  ],
  "ex_zh": "现在很多单位在招聘毕业生时，都很重视有没有实习经历。",
  "ex_py": "Xiànzài hěn duō dānwèi zài zhāopìn bìyèshēng shí, dōu hěn zhòngshì yǒu méiyǒu shíxí jīnglì.",
  "ex_vn": "Bây giờ nhiều đơn vị khi tuyển sinh viên tốt nghiệp đều rất coi trọng có kinh nghiệm thực tập hay không.",
  "exList": [
   {
    "zh": "现在很多单位在招聘毕业生时，都很重视有没有实习经历。",
    "py": "Xiànzài hěn duō dānwèi zài zhāopìn bìyèshēng shí, dōu hěn zhòngshì yǒu méiyǒu shíxí jīnglì.",
    "vn": "Bây giờ nhiều đơn vị khi tuyển sinh viên tốt nghiệp đều rất coi trọng có kinh nghiệm thực tập hay không."
   },
   {
    "zh": "今年的大学毕业生比去年多了不少。",
    "py": "Jīnnián de dàxué bìyèshēng bǐ qùnián duō le bùshǎo.",
    "vn": "Sinh viên tốt nghiệp năm nay nhiều hơn năm ngoái không ít."
   }
  ],
  "hanzi": [
   {
    "c": "毕",
    "p": "bì",
    "type": "独体字 · Chữ đơn (giản thể)",
    "st": 6,
    "ord": "nét liền",
    "rad": "比 (tỷ, biến thể)",
    "mean": "xong, hết",
    "tip": "Chữ giản thể mang nghĩa HOÀN TẤT, KẾT THÚC (một quá trình) → 毕业 = KẾT THÚC việc học, TỐT NGHIỆP.",
    "cf": "毕 dễ nhầm với 华 (huá – \"Trung Hoa\", không liên quan nghĩa)",
    "w": "毕业 / 完毕"
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
    "prompt": "Năm nào cũng có rất nhiều sinh viên tốt nghiệp đến những thành phố như Bắc Kinh, Thượng Hải tìm việc.",
    "answer": "每年都有很多毕业生到北京、上海这些城市找工作。",
    "answerPy": "Měinián dōu yǒu hěn duō bìyèshēng dào Běijīng, Shànghǎi zhèxiē chéngshì zhǎo gōngzuò.",
    "note": "每年都…… (HSK 3).",
    "pair": "每年都……"
   },
   {
    "promptLang": "vi",
    "prompt": "Tuy là sinh viên mới ra trường nhưng cô ấy làm việc rất nghiêm túc.",
    "answer": "尽管她是一名刚毕业的学生，但是工作起来非常认真。",
    "answerPy": "Jǐnguǎn tā shì yì míng gāng bìyè de xuésheng, dànshì gōngzuò qǐlai fēicháng rènzhēn.",
    "note": "Ôn 尽管……但是…… (Bài 9 · điểm 2).",
    "pair": "尽管……但是……"
   }
  ]
 },
 {
  "n": 9,
  "zh": "经历",
  "py": "jīnglì",
  "pos": "Danh từ / Động từ",
  "vn": "trải nghiệm, những việc đã trải qua; trải qua",
  "hv": "kinh lịch",
  "em": "📖",
  "lesson": 1,
  "explain": [
   "Danh từ: những việc mình đã từng làm, từng gặp (实习经历, 学习经历).",
   "Động từ: trải qua (经历了很多事)."
  ],
  "usage": "实习经历 · 学习经历 · 这次经历 · 经历了很多.",
  "collo": [
   "实习经历",
   "学习经历",
   "工作经历",
   "经历困难"
  ],
  "colloFull": [
   {
    "zh": "实习经历",
    "py": "Shíxí jīnglì",
    "vn": "kinh nghiệm thực tập"
   },
   {
    "zh": "学习经历",
    "py": "Xuéxí jīnglì",
    "vn": "quá trình học tập"
   },
   {
    "zh": "工作经历",
    "py": "Gōngzuò jīnglì",
    "vn": "quá trình làm việc"
   },
   {
    "zh": "经历困难",
    "py": "Jīnglì kùnnan",
    "vn": "trải qua khó khăn"
   }
  ],
  "patterns": [
   {
    "s": "N + 经历 (danh từ)",
    "m": "实习 / 学习 / 工作经历"
   },
   {
    "s": "经历 ≠ 经验",
    "m": "经历 = việc đã trải qua; 经验 = kinh nghiệm rút ra (积累经验)"
   }
  ],
  "ex_zh": "现在很多单位在招聘毕业生时，都很重视有没有实习经历。",
  "ex_py": "Xiànzài hěn duō dānwèi zài zhāopìn bìyèshēng shí, dōu hěn zhòngshì yǒu méiyǒu shíxí jīnglì.",
  "ex_vn": "Bây giờ nhiều đơn vị khi tuyển sinh viên tốt nghiệp đều rất coi trọng có kinh nghiệm thực tập hay không.",
  "exList": [
   {
    "zh": "现在很多单位在招聘毕业生时，都很重视有没有实习经历。",
    "py": "Xiànzài hěn duō dānwèi zài zhāopìn bìyèshēng shí, dōu hěn zhòngshì yǒu méiyǒu shíxí jīnglì.",
    "vn": "Bây giờ nhiều đơn vị khi tuyển sinh viên tốt nghiệp đều rất coi trọng có kinh nghiệm thực tập hay không."
   },
   {
    "zh": "这几年，他经历了很多困难，也变得更成熟了。",
    "py": "Zhè jǐ nián, tā jīnglì le hěn duō kùnnan, yě biànde gèng chéngshú le.",
    "vn": "Mấy năm nay anh ấy trải qua nhiều khó khăn, cũng trở nên chín chắn hơn."
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
    "c": "历",
    "p": "lì",
    "type": "半包围结构 · Bán bao vây (giản thể)",
    "st": 4,
    "ord": "厂 bao ngoài → 力 trong",
    "rad": "厂 (xưởng)",
    "mean": "trải qua",
    "tip": "Chữ giản thể mang nghĩa TRẢI QUA THỜI GIAN, kết hợp 经(đi qua) thành 经历 = TRẢI QUA (kinh nghiệm sống).",
    "cf": "厉 (lì – \"nghiêm khắc\", tự dạng gần giống)",
    "w": "经历 / 历史 / 经验"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Tôi thấy trải nghiệm lần này rất có ích.",
    "answer": "我觉得这次经历很有用。",
    "answerPy": "Wǒ juéde zhè cì jīnglì hěn yǒuyòng.",
    "note": "Câu trong bài khoá 2.",
    "pair": "这次经历"
   },
   {
    "promptLang": "vi",
    "prompt": "Anh ấy chưa từng trải qua chuyện như vậy, nên hơi căng thẳng.",
    "answer": "他从来没经历过这样的事，所以有点儿紧张。",
    "answerPy": "Tā cónglái méi jīnglì guò zhèyàng de shì, suǒyǐ yǒudiǎnr jǐnzhāng.",
    "note": "Ôn 从来没……过 (Bài 9 · điểm 4).",
    "pair": "从来没V过"
   }
  ]
 },
 {
  "n": 10,
  "zh": "消息",
  "py": "xiāoxi",
  "pos": "Danh từ",
  "vn": "tin, tin tức",
  "hv": "tiêu tức",
  "em": "📩",
  "lesson": 1,
  "explain": [
   "Tin báo cho biết tình hình, kết quả; 等消息 = chờ tin."
  ],
  "usage": "等消息 · 好消息 · 收到消息 · 没有消息.",
  "collo": [
   "等消息",
   "好消息",
   "收到消息",
   "没有消息"
  ],
  "colloFull": [
   {
    "zh": "等消息",
    "py": "Děng xiāoxi",
    "vn": "chờ tin"
   },
   {
    "zh": "好消息",
    "py": "Hǎo xiāoxi",
    "vn": "tin tốt"
   },
   {
    "zh": "收到消息",
    "py": "Shōudào xiāoxi",
    "vn": "nhận được tin"
   },
   {
    "zh": "没有消息",
    "py": "Méiyǒu xiāoxi",
    "vn": "không có tin tức"
   }
  ],
  "patterns": [
   {
    "s": "等 / 收到 / 告诉 + 消息",
    "m": "Chờ / nhận / báo tin"
   },
   {
    "s": "消息 ≠ 信息",
    "m": "消息 = tin (về việc gì, của ai); 信息 = thông tin, dữ liệu"
   }
  ],
  "ex_zh": "我还在等消息，希望能有好结果。",
  "ex_py": "Wǒ hái zài děng xiāoxi, xīwàng néng yǒu hǎo jiéguǒ.",
  "ex_vn": "Mình vẫn đang chờ tin, mong là có kết quả tốt.",
  "exList": [
   {
    "zh": "我还在等消息，希望能有好结果。",
    "py": "Wǒ hái zài děng xiāoxi, xīwàng néng yǒu hǎo jiéguǒ.",
    "vn": "Mình vẫn đang chờ tin, mong là có kết quả tốt."
   },
   {
    "zh": "我已经等了好几天了，还是没有收到他的消息。",
    "py": "Wǒ yǐjīng děng le hǎojǐ tiān le, háishi méiyǒu shōudào tā de xiāoxi.",
    "vn": "Tôi đã đợi mấy ngày rồi mà vẫn chưa nhận được tin của anh ấy."
   }
  ],
  "hanzi": [
   {
    "c": "消",
    "p": "xiāo",
    "type": "形声字 · Chữ hình thanh",
    "st": 10,
    "ord": "氵 → 肖",
    "rad": "氵 (thủy – nước)",
    "mean": "tan biến, mất đi; tiêu (dùng); tin tức (消息)",
    "tip": "Nước (氵) làm vật nhỏ dần (肖, cũng chỉ âm xiāo) rồi tan mất → tiêu tan — 消失; tin truyền đi rồi tan vào tai người nghe → 消息 (tin tức).",
    "cf": "销 xiāo (bán, tiêu thụ) — bên trái là 钅; 削 xiāo (gọt) — bên phải là 刂",
    "w": "消息 / 消失 / 取消"
   },
   {
    "c": "息",
    "p": "xī",
    "type": "上下结构 · Trên-dưới",
    "st": 10,
    "ord": "自 trên → 心 dưới",
    "rad": "心 (tâm)",
    "mean": "tin; nghỉ",
    "tip": "自(mũi) + 心(tim) → hơi thở → TIN TỨC (信息), NGHỈ (休息). 消息 (Bài 9).",
    "cf": "自 (zì – tự)",
    "w": "信息 / 消息 / 休息"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Có tin tốt gì thì nhớ báo cho tôi đầu tiên nhé.",
    "answer": "有什么好消息，记得第一个告诉我。",
    "answerPy": "Yǒu shénme hǎo xiāoxi, jìde dì yí gè gàosu wǒ.",
    "note": "Ôn đại từ nghi vấn phiếm chỉ 什么 (HSK 3).",
    "pair": "有什么……"
   },
   {
    "promptLang": "vi",
    "prompt": "Dù tin tốt hay xấu, bạn cũng phải gọi điện cho tôi.",
    "answer": "不管消息好不好，你都要给我打个电话。",
    "answerPy": "Bùguǎn xiāoxi hǎo bu hǎo, nǐ dōu yào gěi wǒ dǎ gè diànhuà.",
    "note": "Ôn 不管……都…… (Bài 8 · điểm 1).",
    "pair": "不管……都……"
   }
  ]
 },
 {
  "n": 11,
  "zh": "报名",
  "py": "bàomíng",
  "pos": "Động từ",
  "vn": "đăng ký (tham gia)",
  "hv": "báo danh",
  "em": "🖊️",
  "lesson": 2,
  "explain": [
   "Ghi tên đăng ký tham gia kỳ thi, khóa học, cuộc thi, ứng tuyển… Là động từ ly hợp: 报了名."
  ],
  "usage": "在网上报名 · 报名参加 + hoạt động · 报名时间 · 报了名.",
  "collo": [
   "网上报名",
   "报名参加",
   "报名时间",
   "报了名"
  ],
  "colloFull": [
   {
    "zh": "网上报名",
    "py": "Wǎngshang bàomíng",
    "vn": "đăng ký trên mạng"
   },
   {
    "zh": "报名参加",
    "py": "Bàomíng cānjiā",
    "vn": "đăng ký tham gia"
   },
   {
    "zh": "报名时间",
    "py": "Bàomíng shíjiān",
    "vn": "thời gian đăng ký"
   },
   {
    "zh": "报了名",
    "py": "Bào le míng",
    "vn": "đã đăng ký"
   }
  ],
  "patterns": [
   {
    "s": "报名 + 参加 + N",
    "m": "Đăng ký tham gia gì"
   },
   {
    "s": "报 + 了 + 名",
    "m": "Động từ ly hợp, 了 chen vào giữa"
   }
  ],
  "ex_zh": "我先在网上报名，填写个人信息，然后等公司通知我去参加笔试。",
  "ex_py": "Wǒ xiān zài wǎngshang bàomíng, tiánxiě gèrén xìnxī, ránhòu děng gōngsī tōngzhī wǒ qù cānjiā bǐshì.",
  "ex_vn": "Mình đăng ký trên mạng trước, điền thông tin cá nhân, sau đó chờ công ty báo đi thi viết.",
  "exList": [
   {
    "zh": "我先在网上报名，填写个人信息，然后等公司通知我去参加笔试。",
    "py": "Wǒ xiān zài wǎngshang bàomíng, tiánxiě gèrén xìnxī, ránhòu děng gōngsī tōngzhī wǒ qù cānjiā bǐshì.",
    "vn": "Mình đăng ký trên mạng trước, điền thông tin cá nhân, sau đó chờ công ty báo đi thi viết."
   },
   {
    "zh": "我已经报名参加HSK四级考试了。",
    "py": "Wǒ yǐjīng bàomíng cānjiā HSK sì jí kǎoshì le.",
    "vn": "Tôi đã đăng ký thi HSK cấp 4 rồi."
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
    "prompt": "Tôi đã đăng ký tham gia cuộc thi nói tiếng Hán rồi.",
    "answer": "我报名参加汉语比赛了。",
    "answerPy": "Wǒ bàomíng cānjiā Hànyǔ bǐsài le.",
    "note": "报名参加 + N.",
    "pair": "报名参加……"
   },
   {
    "promptLang": "vi",
    "prompt": "Thời gian đăng ký sắp hết rồi, cậu mau đăng ký đi, không thì không kịp đâu.",
    "answer": "报名时间快结束了，你快报名吧，要不然就来不及了。",
    "answerPy": "Bàomíng shíjiān kuài jiéshù le, nǐ kuài bàomíng ba, yàobùrán jiù láibují le.",
    "note": "Ôn 来不及 (Bài 4 · điểm 4).",
    "pair": "来不及"
   }
  ]
 },
 {
  "n": 12,
  "zh": "填写",
  "py": "tiánxiě",
  "pos": "Động từ",
  "vn": "điền (vào mẫu, đơn)",
  "hv": "điền tả",
  "em": "✍️",
  "lesson": 2,
  "explain": [
   "Viết thông tin vào chỗ trống của tờ khai, phiếu, đơn."
  ],
  "usage": "填写信息 · 填写表格 · 填写清楚.",
  "collo": [
   "填写个人信息",
   "填写表格",
   "填写清楚",
   "认真填写"
  ],
  "colloFull": [
   {
    "zh": "填写个人信息",
    "py": "Tiánxiě gèrén xìnxī",
    "vn": "điền thông tin cá nhân"
   },
   {
    "zh": "填写表格",
    "py": "Tiánxiě biǎogé",
    "vn": "điền bảng biểu"
   },
   {
    "zh": "填写清楚",
    "py": "Tiánxiě qīngchu",
    "vn": "điền rõ ràng"
   },
   {
    "zh": "认真填写",
    "py": "Rènzhēn tiánxiě",
    "vn": "điền cẩn thận"
   }
  ],
  "patterns": [
   {
    "s": "填写 + 信息 / 表格 / 地址",
    "m": "Điền gì"
   }
  ],
  "ex_zh": "我先在网上报名，填写个人信息，然后等公司通知我去参加笔试。",
  "ex_py": "Wǒ xiān zài wǎngshang bàomíng, tiánxiě gèrén xìnxī, ránhòu děng gōngsī tōngzhī wǒ qù cānjiā bǐshì.",
  "ex_vn": "Mình đăng ký trên mạng trước, điền thông tin cá nhân, sau đó chờ công ty báo đi thi viết.",
  "exList": [
   {
    "zh": "我先在网上报名，填写个人信息，然后等公司通知我去参加笔试。",
    "py": "Wǒ xiān zài wǎngshang bàomíng, tiánxiě gèrén xìnxī, ránhòu děng gōngsī tōngzhī wǒ qù cānjiā bǐshì.",
    "vn": "Mình đăng ký trên mạng trước, điền thông tin cá nhân, sau đó chờ công ty báo đi thi viết."
   },
   {
    "zh": "请大家先填写这张表，然后交给我。",
    "py": "Qǐng dàjiā xiān tiánxiě zhè zhāng biǎo, ránhòu jiāogěi wǒ.",
    "vn": "Mời mọi người điền vào bảng này trước rồi nộp cho tôi."
   }
  ],
  "hanzi": [
   {
    "c": "填",
    "p": "tián",
    "type": "左右结构 · Trái-phải",
    "st": 13,
    "ord": "土 (thổ) trái → 真 phải",
    "rad": "土 (thổ – đất)",
    "mean": "lấp đầy, điền vào",
    "tip": "Bộ đất 土 (lấp đầy chỗ trũng) → mở rộng nghĩa ĐIỀN VÀO, LẤP ĐẦY, kết hợp 空(chỗ trống) thành 填空 = ĐIỀN VÀO CHỖ TRỐNG.",
    "cf": "镇 (zhèn – \"thị trấn\", bộ 钅\")",
    "w": "填空 / 填写 / 填表"
   },
   {
    "c": "写",
    "p": "xiě",
    "type": "上下结构 · Trên-dưới",
    "st": 5,
    "ord": "冖(mịch) trên → 与(biến thể) dưới",
    "rad": "冖 (mịch – trùm khăn)",
    "mean": "viết",
    "tip": "冖(gói ghém ý tưởng) → dùng bút để VIẾT ra thành chữ.",
    "cf": "冠 (guān – \"vương miện\")",
    "w": "写汉字 / 会写"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Khi đăng ký phải điền thông tin cá nhân trên mạng.",
    "answer": "报名的时候要在网上填写个人信息。",
    "answerPy": "Bàomíng de shíhou yào zài wǎngshang tiánxiě gèrén xìnxī.",
    "note": "Câu dựa vào bài khoá 2.",
    "pair": "在网上填写……"
   },
   {
    "promptLang": "vi",
    "prompt": "Trước khi nộp, bạn kiểm tra lại thông tin đã điền một chút nhé.",
    "answer": "交以前，你把填写的信息检查检查。",
    "answerPy": "Jiāo yǐqián, nǐ bǎ tiánxiě de xìnxī jiǎnchá jiǎnchá.",
    "note": "把 + tân ngữ + VV (điểm 3 bài này).",
    "pair": "把……VV"
   }
  ]
 },
 {
  "n": 13,
  "zh": "笔试",
  "py": "bǐshì",
  "pos": "Động từ",
  "vn": "thi viết",
  "hv": "bút thí",
  "em": "📃",
  "lesson": 2,
  "explain": [
   "Hình thức thi làm bài viết (trên giấy / máy). Sách ghi là động từ, nhưng rất hay dùng như danh từ: 参加笔试. Đối lập: 面试 (phỏng vấn, thi vấn đáp)."
  ],
  "usage": "参加笔试 · 笔试成绩 · 先笔试，后面试.",
  "collo": [
   "参加笔试",
   "笔试成绩",
   "通过笔试",
   "笔试和面试"
  ],
  "colloFull": [
   {
    "zh": "参加笔试",
    "py": "Cānjiā bǐshì",
    "vn": "dự thi viết"
   },
   {
    "zh": "笔试成绩",
    "py": "Bǐshì chéngjì",
    "vn": "điểm thi viết"
   },
   {
    "zh": "通过笔试",
    "py": "Tōngguò bǐshì",
    "vn": "qua vòng thi viết"
   },
   {
    "zh": "笔试和面试",
    "py": "Bǐshì hé miànshì",
    "vn": "thi viết và phỏng vấn"
   }
  ],
  "patterns": [
   {
    "s": "参加 / 通过 + 笔试",
    "m": "Dự / qua vòng thi viết"
   },
   {
    "s": "笔试 ↔ 面试",
    "m": "Thi viết ↔ phỏng vấn"
   }
  ],
  "ex_zh": "我先在网上报名，填写个人信息，然后等公司通知我去参加笔试。",
  "ex_py": "Wǒ xiān zài wǎngshang bàomíng, tiánxiě gèrén xìnxī, ránhòu děng gōngsī tōngzhī wǒ qù cānjiā bǐshì.",
  "ex_vn": "Mình đăng ký trên mạng trước, điền thông tin cá nhân, sau đó chờ công ty báo đi thi viết.",
  "exList": [
   {
    "zh": "我先在网上报名，填写个人信息，然后等公司通知我去参加笔试。",
    "py": "Wǒ xiān zài wǎngshang bàomíng, tiánxiě gèrén xìnxī, ránhòu děng gōngsī tōngzhī wǒ qù cānjiā bǐshì.",
    "vn": "Mình đăng ký trên mạng trước, điền thông tin cá nhân, sau đó chờ công ty báo đi thi viết."
   },
   {
    "zh": "这次笔试考得不太好，我有点儿担心。",
    "py": "Zhè cì bǐshì kǎo de bú tài hǎo, wǒ yǒudiǎnr dānxīn.",
    "vn": "Lần thi viết này làm không tốt lắm, tôi hơi lo."
   }
  ],
  "hanzi": [
   {
    "c": "笔",
    "p": "bǐ",
    "type": "会意字 · Chữ hội ý",
    "st": 10,
    "ord": "⺮ → 毛",
    "rad": "⺮ (trúc – tre)",
    "mean": "cây bút; khoản (tiền), vụ (làm ăn)",
    "tip": "Tre (⺮) làm cán + lông (毛) làm đầu bút: cây bút lông → bút; làm lượng từ cho khoản tiền, vụ làm ăn — 一笔生意.",
    "cf": "毛 máo (lông) — không có ⺮; 第 dì — dưới là 弔",
    "w": "一支笔 / 一笔钱 / 笔记"
   },
   {
    "c": "试",
    "p": "shì",
    "type": "形声字 · Chữ hình thanh",
    "st": 8,
    "ord": "讠 → 式",
    "rad": "讠 (ngôn – lời nói)",
    "mean": "thử; thi",
    "tip": "讠 (lời nói) + 式 (shì – chỉ âm): dùng lời để hỏi, thử → thử, thi (考试 – HSK2 Bài 10).",
    "cf": "式 shì — không có bộ 讠",
    "w": "试一下 / 考试"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Thi viết chủ yếu thi kiến thức chuyên ngành.",
    "answer": "笔试主要考专业知识。",
    "answerPy": "Bǐshì zhǔyào kǎo zhuānyè zhīshi.",
    "note": "Câu dựa vào bài khoá 2; ôn 专业, 知识 (Bài 1).",
    "pair": "主要考……"
   },
   {
    "promptLang": "vi",
    "prompt": "Thi viết xong không lâu, họ đã bảo tôi đi phỏng vấn.",
    "answer": "笔试结束没多久，他们就让我去面试了。",
    "answerPy": "Bǐshì jiéshù méi duōjiǔ, tāmen jiù ràng wǒ qù miànshì le.",
    "note": "Ôn câu kiêm ngữ 让 (HSK 3).",
    "pair": "让 + ai + V"
   }
  ]
 },
 {
  "n": 14,
  "zh": "面试",
  "py": "miànshì",
  "pos": "Động từ",
  "vn": "phỏng vấn, thi vấn đáp",
  "hv": "diện thí",
  "em": "🤝",
  "lesson": 2,
  "explain": [
   "Gặp mặt trực tiếp để người tuyển dụng hỏi và đánh giá người ứng tuyển. Người phỏng vấn: 面试官."
  ],
  "usage": "去面试 · 参加面试 · 通过面试 · 面试官.",
  "collo": [
   "去面试",
   "通过面试",
   "面试官",
   "面试的时候"
  ],
  "colloFull": [
   {
    "zh": "去面试",
    "py": "Qù miànshì",
    "vn": "đi phỏng vấn"
   },
   {
    "zh": "通过面试",
    "py": "Tōngguò miànshì",
    "vn": "qua vòng phỏng vấn"
   },
   {
    "zh": "面试官",
    "py": "Miànshì guān",
    "vn": "người phỏng vấn"
   },
   {
    "zh": "面试的时候",
    "py": "Miànshì de shíhou",
    "vn": "lúc phỏng vấn"
   }
  ],
  "patterns": [
   {
    "s": "去 / 参加 / 通过 + 面试",
    "m": "面试 làm danh từ"
   },
   {
    "s": "由 + ai + 来面试",
    "m": "Ai phỏng vấn (điểm 2)"
   }
  ],
  "ex_zh": "考完没多久，他们就让我去面试了。",
  "ex_py": "Kǎowán méi duōjiǔ, tāmen jiù ràng wǒ qù miànshì le.",
  "ex_vn": "Thi xong không lâu, họ đã bảo mình đi phỏng vấn.",
  "exList": [
   {
    "zh": "考完没多久，他们就让我去面试了。",
    "py": "Kǎowán méi duōjiǔ, tāmen jiù ràng wǒ qù miànshì le.",
    "vn": "Thi xong không lâu, họ đã bảo mình đi phỏng vấn."
   },
   {
    "zh": "你觉得面试的时候需要注意哪些方面？",
    "py": "Nǐ juéde miànshì de shíhou xūyào zhùyì nǎxiē fāngmiàn?",
    "vn": "Bạn thấy khi phỏng vấn cần chú ý những mặt nào?"
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
    "c": "试",
    "p": "shì",
    "type": "形声字 · Chữ hình thanh",
    "st": 8,
    "ord": "讠 → 式",
    "rad": "讠 (ngôn – lời nói)",
    "mean": "thử; thi",
    "tip": "讠 (lời nói) + 式 (shì – chỉ âm): dùng lời để hỏi, thử → thử, thi (考试 – HSK2 Bài 10).",
    "cf": "式 shì — không có bộ 讠",
    "w": "试一下 / 考试"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Khi phỏng vấn nhất định phải ăn mặc trang trọng một chút.",
    "answer": "面试的时候一定要穿得正式一点儿。",
    "answerPy": "Miànshì de shíhou yídìng yào chuān de zhèngshì yìdiǎnr.",
    "note": "Bổ ngữ trạng thái 得 (HSK 3).",
    "pair": "V得 + Adj"
   },
   {
    "promptLang": "vi",
    "prompt": "Để chuẩn bị cho buổi phỏng vấn, anh ấy chuẩn bị rất lâu, chắc chắn sẽ qua.",
    "answer": "为了这次面试，他准备了很长时间，肯定能通过。",
    "answerPy": "Wèile zhè cì miànshì, tā zhǔnbèi le hěn chángshíjiān, kěndìng néng tōngguò.",
    "note": "Ôn 为了 (HSK 3) + 通过 (Bài 1).",
    "pair": "为了……"
   }
  ]
 },
 {
  "n": 15,
  "zh": "答",
  "py": "dá",
  "pos": "Động từ",
  "vn": "trả lời, làm bài",
  "hv": "đáp",
  "em": "💬",
  "lesson": 2,
  "explain": [
   "Trả lời câu hỏi hoặc làm bài thi; trong bài: 答得不错 = làm bài khá tốt."
  ],
  "usage": "答题 · 答得不错 · 答对 / 答错 · 答不出来.",
  "collo": [
   "答题",
   "答对",
   "答错",
   "答得很好"
  ],
  "colloFull": [
   {
    "zh": "答题",
    "py": "Dátí",
    "vn": "làm bài, trả lời câu hỏi"
   },
   {
    "zh": "答对",
    "py": "Dá duì",
    "vn": "trả lời đúng"
   },
   {
    "zh": "答错",
    "py": "Dá cuò",
    "vn": "trả lời sai"
   },
   {
    "zh": "答得很好",
    "py": "Dá de hěn hǎo",
    "vn": "làm bài rất tốt"
   }
  ],
  "patterns": [
   {
    "s": "答 + 得 + Adj",
    "m": "Bổ ngữ trạng thái: 答得不错"
   },
   {
    "s": "答 + 对 / 错 / 完 / 出来",
    "m": "Bổ ngữ kết quả / xu hướng"
   }
  ],
  "ex_zh": "看来你笔试答得不错，那你面试得怎么样？",
  "ex_py": "Kànlái nǐ bǐshì dá de búcuò, nà nǐ miànshì de zěnmeyàng?",
  "ex_vn": "Xem ra cậu làm bài thi viết khá tốt, thế phỏng vấn thế nào?",
  "exList": [
   {
    "zh": "看来你笔试答得不错，那你面试得怎么样？",
    "py": "Kànlái nǐ bǐshì dá de búcuò, nà nǐ miànshì de zěnmeyàng?",
    "vn": "Xem ra cậu làm bài thi viết khá tốt, thế phỏng vấn thế nào?"
   },
   {
    "zh": "这道题太难了，我没答出来。",
    "py": "Zhè dào tí tài nán le, wǒ méi dá chūlai.",
    "vn": "Câu này khó quá, tôi không trả lời ra được."
   }
  ],
  "hanzi": [
   {
    "c": "答",
    "p": "dá",
    "type": "形声字 · Chữ hình thanh",
    "st": 12,
    "ord": "⺮ → 合 (人, nét ngang, 口)",
    "rad": "⺮ (trúc – tre)",
    "mean": "đáp, trả lời",
    "tip": "⺮ (tre) + 合 (hé, chỉ âm; “khớp lại”): xưa viết lên thẻ tre lời đáp khớp với câu hỏi → trả lời. 回答 = đáp lại.",
    "cf": "笔 bǐ (HSK2 Bài 10) — cũng có ⺮ ở trên",
    "w": "回答 / 回答问题"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Lần thi viết này anh ấy làm bài rất tốt.",
    "answer": "这次笔试他答得很好。",
    "answerPy": "Zhè cì bǐshì tā dá de hěn hǎo.",
    "note": "V得 + Adj.",
    "pair": "答得……"
   },
   {
    "promptLang": "vi",
    "prompt": "Câu hỏi đó tôi nghĩ thế nào cũng không trả lời được.",
    "answer": "那个问题我怎么想也答不出来。",
    "answerPy": "Nàge wèntí wǒ zěnme xiǎng yě dá bu chūlai.",
    "note": "Ôn 怎么也 + 不 (Bài 13 · điểm 1).",
    "pair": "怎么也……不……"
   }
  ]
 },
 {
  "n": 16,
  "zh": "由",
  "py": "yóu",
  "pos": "Giới từ",
  "vn": "do (ai làm)",
  "hv": "do",
  "em": "👉",
  "lesson": 2,
  "explain": [
   "Dẫn ra người thực hiện hành động: việc này DO ai làm / phụ trách."
  ],
  "usage": "由 + ai + (来) + V · 是由……来……的.",
  "collo": [
   "由我来负责",
   "由谁来做",
   "由学校举办",
   "由他决定"
  ],
  "colloFull": [
   {
    "zh": "由我来负责",
    "py": "Yóu wǒ lái fùzé",
    "vn": "do tôi phụ trách"
   },
   {
    "zh": "由谁来做",
    "py": "Yóu shuí lái zuò",
    "vn": "do ai làm"
   },
   {
    "zh": "由学校举办",
    "py": "Yóu xuéxiào jǔbàn",
    "vn": "do trường tổ chức"
   },
   {
    "zh": "由他决定",
    "py": "Yóu tā juédìng",
    "vn": "do anh ấy quyết định"
   }
  ],
  "patterns": [
   {
    "s": "由 + người + (来) + V",
    "m": "Điểm ngữ pháp 2"
   },
   {
    "s": "由 ≠ 由于",
    "m": "由于 = do, vì (nguyên nhân) — Bài 2 · điểm 4"
   }
  ],
  "ex_zh": "那天是由部门负责人来面试的，我有点儿紧张。",
  "ex_py": "Nàtiān shì yóu bùmén fùzérén lái miànshì de, wǒ yǒudiǎnr jǐnzhāng.",
  "ex_vn": "Hôm đó là người phụ trách bộ phận phỏng vấn, mình hơi căng thẳng.",
  "exList": [
   {
    "zh": "那天是由部门负责人来面试的，我有点儿紧张。",
    "py": "Nàtiān shì yóu bùmén fùzérén lái miànshì de, wǒ yǒudiǎnr jǐnzhāng.",
    "vn": "Hôm đó là người phụ trách bộ phận phỏng vấn, mình hơi căng thẳng."
   },
   {
    "zh": "这次活动是由他们公司来安排的。",
    "py": "Zhè cì huódòng shì yóu tāmen gōngsī lái ānpái de.",
    "vn": "Hoạt động lần này do công ty họ sắp xếp."
   }
  ],
  "hanzi": [
   {
    "c": "由",
    "p": "yóu",
    "type": "独体字 · Chữ đơn",
    "st": 5,
    "ord": "nét liền",
    "rad": "田 (điền, biến thể)",
    "mean": "từ, do",
    "tip": "Chữ tượng hình quả trên cành → mở rộng nghĩa NGUỒN GỐC, TỪ ĐÂU MÀ RA, kết hợp 于(ở) thành 由于 = DO, VÌ (bắt nguồn từ nguyên nhân nào đó).",
    "cf": "甲 (jiǎ – \"giáp, thứ nhất\", tự dạng gần giống)",
    "w": "由于 / 理由 / 自由"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Việc này rốt cuộc do ai phụ trách giải quyết?",
    "answer": "这件事究竟由谁来负责解决？",
    "answerPy": "Zhè jiàn shì jiūjìng yóu shuí lái fùzé jiějué?",
    "note": "Ôn 究竟 (Bài 14 · điểm 1).",
    "pair": "究竟由谁……"
   },
   {
    "promptLang": "vi",
    "prompt": "Với tư cách lớp trưởng, buổi liên hoan lần này do tôi sắp xếp.",
    "answer": "作为班长，这次晚会由我来安排。",
    "answerPy": "Zuòwéi bānzhǎng, zhè cì wǎnhuì yóu wǒ lái ānpái.",
    "note": "Ôn 作为 (Bài 13 · điểm 4).",
    "pair": "作为……，由……来……"
   }
  ]
 },
 {
  "n": 17,
  "zh": "部门",
  "py": "bùmén",
  "pos": "Danh từ",
  "vn": "bộ phận, phòng ban",
  "hv": "bộ môn",
  "em": "🗂️",
  "lesson": 2,
  "explain": [
   "Một phần trong công ty / cơ quan phụ trách một mảng việc. Bẫy Hán Việt: 部门 đọc “bộ môn” nhưng nghĩa là PHÒNG BAN, không phải bộ môn trong trường."
  ],
  "usage": "部门负责人 · 哪个部门 · 销售部门.",
  "collo": [
   "部门负责人",
   "部门经理",
   "不同部门",
   "政府部门"
  ],
  "colloFull": [
   {
    "zh": "部门负责人",
    "py": "Bùmén fùzérén",
    "vn": "người phụ trách bộ phận"
   },
   {
    "zh": "部门经理",
    "py": "Bùmén jīnglǐ",
    "vn": "trưởng phòng"
   },
   {
    "zh": "不同部门",
    "py": "Bùtóng bùmén",
    "vn": "các phòng ban khác nhau"
   },
   {
    "zh": "政府部门",
    "py": "Zhèngfǔ bùmén",
    "vn": "cơ quan nhà nước"
   }
  ],
  "patterns": [
   {
    "s": "部门 + 负责人 / 经理",
    "m": "Trưởng bộ phận"
   }
  ],
  "ex_zh": "那天是由部门负责人来面试的，我有点儿紧张。",
  "ex_py": "Nàtiān shì yóu bùmén fùzérén lái miànshì de, wǒ yǒudiǎnr jǐnzhāng.",
  "ex_vn": "Hôm đó là người phụ trách bộ phận phỏng vấn, mình hơi căng thẳng.",
  "exList": [
   {
    "zh": "那天是由部门负责人来面试的，我有点儿紧张。",
    "py": "Nàtiān shì yóu bùmén fùzérén lái miànshì de, wǒ yǒudiǎnr jǐnzhāng.",
    "vn": "Hôm đó là người phụ trách bộ phận phỏng vấn, mình hơi căng thẳng."
   },
   {
    "zh": "你在公司哪个部门工作？",
    "py": "Nǐ zài gōngsī nǎge bùmén gōngzuò?",
    "vn": "Bạn làm ở phòng ban nào của công ty?"
   }
  ],
  "hanzi": [
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
    "prompt": "Tôi làm ở bộ phận kinh doanh của công ty.",
    "answer": "我在公司的销售部门工作。",
    "answerPy": "Wǒ zài gōngsī de xiāoshòu bùmén gōngzuò.",
    "note": "销售 xiāoshòu = bán hàng, kinh doanh.",
    "pair": "在……部门"
   },
   {
    "promptLang": "vi",
    "prompt": "Các phòng ban phải trao đổi với nhau nhiều hơn, như vậy công việc mới làm nhanh được.",
    "answer": "不同部门之间要多交流，这样工作才能做得快。",
    "answerPy": "Bùtóng bùmén zhījiān yào duō jiāoliú, zhèyàng gōngzuò cáinéng zuò de kuài.",
    "note": "Ôn 交流 (Bài 1) + 才 (HSK 3).",
    "pair": "……才……"
   }
  ]
 },
 {
  "n": 18,
  "zh": "负责人",
  "py": "fùzérén",
  "pos": "Danh từ",
  "vn": "người phụ trách",
  "hv": "phụ trách nhân",
  "em": "🧑‍💼",
  "lesson": 2,
  "explain": [
   "Người chịu trách nhiệm chính về một việc / một bộ phận. 负责 = phụ trách."
  ],
  "usage": "部门负责人 · 活动负责人 · 跟负责人联系.",
  "collo": [
   "部门负责人",
   "活动负责人",
   "找负责人",
   "跟负责人联系"
  ],
  "colloFull": [
   {
    "zh": "部门负责人",
    "py": "Bùmén fùzérén",
    "vn": "người phụ trách bộ phận"
   },
   {
    "zh": "活动负责人",
    "py": "Huódòng fùzérén",
    "vn": "người phụ trách hoạt động"
   },
   {
    "zh": "找负责人",
    "py": "Zhǎo fùzérén",
    "vn": "tìm người phụ trách"
   },
   {
    "zh": "跟负责人联系",
    "py": "Gēn fùzérén liánxì",
    "vn": "liên hệ người phụ trách"
   }
  ],
  "patterns": [
   {
    "s": "负责 + 人",
    "m": "Người phụ trách"
   },
   {
    "s": "负责 + việc",
    "m": "Động từ: 负责安排活动"
   }
  ],
  "ex_zh": "那天是由部门负责人来面试的，我有点儿紧张。",
  "ex_py": "Nàtiān shì yóu bùmén fùzérén lái miànshì de, wǒ yǒudiǎnr jǐnzhāng.",
  "ex_vn": "Hôm đó là người phụ trách bộ phận phỏng vấn, mình hơi căng thẳng.",
  "exList": [
   {
    "zh": "那天是由部门负责人来面试的，我有点儿紧张。",
    "py": "Nàtiān shì yóu bùmén fùzérén lái miànshì de, wǒ yǒudiǎnr jǐnzhāng.",
    "vn": "Hôm đó là người phụ trách bộ phận phỏng vấn, mình hơi căng thẳng."
   },
   {
    "zh": "这次活动的负责人是王老师。",
    "py": "Zhè cì huódòng de fùzérén shì Wáng lǎoshī.",
    "vn": "Người phụ trách hoạt động lần này là thầy Vương."
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
    "prompt": "Có vấn đề gì bạn có thể liên hệ trực tiếp với người phụ trách.",
    "answer": "有什么问题，你可以直接跟负责人联系。",
    "answerPy": "Yǒu shénme wèntí, nǐ kěyǐ zhíjiē gēn fùzérén liánxì.",
    "note": "Bài tập chọn từ của sách (câu 2).",
    "pair": "跟……联系"
   },
   {
    "promptLang": "vi",
    "prompt": "Hôm phỏng vấn là do người phụ trách bộ phận đến phỏng vấn.",
    "answer": "面试那天是由部门负责人来面试的。",
    "answerPy": "Miànshì nàtiān shì yóu bùmén fùzérén lái miànshì de.",
    "note": "由 + ai + 来 + V (điểm 2).",
    "pair": "是由……来……的"
   }
  ]
 },
 {
  "n": 19,
  "zh": "不论",
  "py": "búlùn",
  "pos": "Liên từ",
  "vn": "bất kể, bất luận, dù",
  "hv": "bất luận",
  "em": "🔁",
  "lesson": 2,
  "explain": [
   "Dù điều kiện thế nào thì kết quả cũng không đổi; vế sau có 都 / 也. Nghĩa giống 无论 (Bài 12) và 不管 (Bài 8)."
  ],
  "usage": "不论 + 怎么样 / 什么 / A还是B / 多……，都 / 也……",
  "collo": [
   "不论怎么样",
   "不论什么时候",
   "不论是谁",
   "不论多忙"
  ],
  "colloFull": [
   {
    "zh": "不论怎么样",
    "py": "Búlùn zěnmeyàng",
    "vn": "bất kể thế nào"
   },
   {
    "zh": "不论什么时候",
    "py": "Búlùn shénme shíhou",
    "vn": "bất kể lúc nào"
   },
   {
    "zh": "不论是谁",
    "py": "Búlùn shì shuí",
    "vn": "bất kể là ai"
   },
   {
    "zh": "不论多忙",
    "py": "Búlùn duō máng",
    "vn": "dù bận đến mấy"
   }
  ],
  "patterns": [
   {
    "s": "不论 + từ nghi vấn / A还是B / 多 + Adj，都 / 也 + V",
    "m": "Giống 无论……都 (Bài 12 · điểm 3)"
   },
   {
    "s": "✗ 不论下雨 → ✓ 不论下不下雨",
    "m": "Sau 不论 phải có ý lựa chọn / nghi vấn"
   }
  ],
  "ex_zh": "不论结果怎么样，对我以后找工作肯定有帮助。",
  "ex_py": "Búlùn jiéguǒ zěnmeyàng, duì wǒ yǐhòu zhǎo gōngzuò kěndìng yǒu bāngzhù.",
  "ex_vn": "Bất kể kết quả thế nào, đối với việc tìm việc sau này của mình chắc chắn đều có ích.",
  "exList": [
   {
    "zh": "不论结果怎么样，对我以后找工作肯定有帮助。",
    "py": "Búlùn jiéguǒ zěnmeyàng, duì wǒ yǐhòu zhǎo gōngzuò kěndìng yǒu bāngzhù.",
    "vn": "Bất kể kết quả thế nào, đối với việc tìm việc sau này của mình chắc chắn đều có ích."
   },
   {
    "zh": "不论刮风还是下雨，他每天都去跑步。",
    "py": "Búlùn guāfēng háishi xiàyǔ, tā měitiān dōu qù pǎobù.",
    "vn": "Bất kể trời gió hay mưa, ngày nào anh ấy cũng đi chạy bộ."
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
    "c": "论",
    "p": "lùn",
    "type": "左右结构 · Trái-phải (giản thể)",
    "st": 6,
    "ord": "讠 (ngôn) trái → 仑 phải",
    "rad": "讠 (ngôn – lời nói)",
    "mean": "bàn luận",
    "tip": "Bộ lời nói 讠 + 仑(biểu âm) → BÀN LUẬN, kết hợp 无(không) thành 无论 = KHÔNG CẦN BÀN, tức BẤT KỂ.",
    "cf": "轮 (lún – \"bánh xe\", bộ 车)",
    "w": "无论 / 讨论 / 结论"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Bất kể bạn có đồng ý hay không, tôi đều sẽ làm theo kế hoạch.",
    "answer": "不论你同不同意，我都会按照计划去做。",
    "answerPy": "Búlùn nǐ tóng bu tóngyì, wǒ dōu huì ànzhào jìhuà qù zuò.",
    "note": "Bài tập chọn từ của sách (câu 3).",
    "pair": "不论……都……"
   },
   {
    "promptLang": "vi",
    "prompt": "Dù bận đến mấy, mỗi ngày anh ấy đều học tiếng Trung ít nhất nửa tiếng.",
    "answer": "不论多忙，他每天都至少学习半个小时中文。",
    "answerPy": "Búlùn duō máng, tā měitiān dōu zhìshǎo xuéxí bàn gè xiǎoshí Zhōngwén.",
    "note": "Ôn 至少 (Bài 5 · điểm 1).",
    "pair": "不论多……，都至少……"
   }
  ]
 },
 {
  "n": 20,
  "zh": "肯定",
  "py": "kěndìng",
  "pos": "Phó từ / Tính từ",
  "vn": "chắc chắn, nhất định; khẳng định",
  "hv": "khẳng định",
  "em": "✔️",
  "lesson": 2,
  "explain": [
   "Phó từ: chắc chắn (đứng trước động từ / tính từ): 肯定有帮助.",
   "Tính từ: khẳng định, chắc chắn (他的回答很肯定)."
  ],
  "usage": "肯定 + V / Adj · 肯定会 / 肯定能 · 很肯定.",
  "collo": [
   "肯定会",
   "肯定能",
   "肯定没问题",
   "很肯定"
  ],
  "colloFull": [
   {
    "zh": "肯定会",
    "py": "Kěndìng huì",
    "vn": "chắc chắn sẽ"
   },
   {
    "zh": "肯定能",
    "py": "Kěndìng néng",
    "vn": "chắc chắn có thể"
   },
   {
    "zh": "肯定没问题",
    "py": "Kěndìng méi wèntí",
    "vn": "chắc chắn không vấn đề gì"
   },
   {
    "zh": "很肯定",
    "py": "Hěn kěndìng",
    "vn": "rất chắc chắn"
   }
  ],
  "patterns": [
   {
    "s": "Sub + 肯定 + V / Adj",
    "m": "Phó từ, đứng sau chủ ngữ"
   },
   {
    "s": "肯定 ≈ 一定",
    "m": "肯定 nghiêng về phán đoán chắc chắn"
   }
  ],
  "ex_zh": "不论结果怎么样，对我以后找工作肯定有帮助。",
  "ex_py": "Búlùn jiéguǒ zěnmeyàng, duì wǒ yǐhòu zhǎo gōngzuò kěndìng yǒu bāngzhù.",
  "ex_vn": "Bất kể kết quả thế nào, đối với việc tìm việc sau này của mình chắc chắn đều có ích.",
  "exList": [
   {
    "zh": "不论结果怎么样，对我以后找工作肯定有帮助。",
    "py": "Búlùn jiéguǒ zěnmeyàng, duì wǒ yǐhòu zhǎo gōngzuò kěndìng yǒu bāngzhù.",
    "vn": "Bất kể kết quả thế nào, đối với việc tìm việc sau này của mình chắc chắn đều có ích."
   },
   {
    "zh": "他今天没来上课，肯定是生病了。",
    "py": "Tā jīntiān méi lái shàngkè, kěndìng shì shēngbìng le.",
    "vn": "Hôm nay cậu ấy không đi học, chắc chắn là bị ốm rồi."
   }
  ],
  "hanzi": [
   {
    "c": "肯",
    "p": "kěn",
    "type": "上下结构 · Trên-dưới",
    "st": 8,
    "ord": "止 trên → 月 (nhục) dưới",
    "rad": "月 (nhục – thịt)",
    "mean": "bằng lòng, chắc chắn",
    "tip": "Chữ mô phỏng phần THỊT dính chặt vào xương → mở rộng thành BẰNG LÒNG, CHẮC CHẮN (gắn chặt với ý kiến); kết hợp 定(cố định) thành 肯定 = CHẮC CHẮN, XÁC ĐỊNH.",
    "cf": "肯 dễ nhầm với 冒 (mào – \"liều lĩnh\")",
    "w": "肯定 / 肯 / 不肯"
   },
   {
    "c": "定",
    "p": "dìng",
    "type": "形声字 · Chữ hình thanh",
    "st": 8,
    "ord": "宀 → 正 (biến thể: nét cuối là mác)",
    "rad": "宀 (miên – mái nhà)",
    "mean": "định, ổn định",
    "tip": "宀 (mái nhà) + 正 (ngay ngắn, biến thể): nhà cửa ngay ngắn, yên ổn → định. 一定 = đã định rồi → chắc chắn.",
    "cf": "走 zǒu — phần dưới giống nhưng không có mái 宀",
    "w": "一定 / 不一定"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Bạn chăm chỉ thế này, lần thi này chắc chắn sẽ qua.",
    "answer": "你这么努力，这次考试肯定能通过。",
    "answerPy": "Nǐ zhème nǔlì, zhè cì kǎoshì kěndìng néng tōngguò.",
    "note": "Bài tập chọn từ của sách (câu 1).",
    "pair": "肯定能……"
   },
   {
    "promptLang": "vi",
    "prompt": "Cho dù không qua được phỏng vấn, trải nghiệm này chắc chắn cũng có ích cho bạn.",
    "answer": "即使没通过面试，这次经历对你也肯定有帮助。",
    "answerPy": "Jíshǐ méi tōngguò miànshì, zhè cì jīnglì duì nǐ yě kěndìng yǒu bāngzhù.",
    "note": "Ôn 即使……也…… (Bài 11 · điểm 1).",
    "pair": "即使……也……"
   }
  ]
 },
 {
  "n": 21,
  "zh": "短信",
  "py": "duǎnxìn",
  "pos": "Danh từ",
  "vn": "tin nhắn (điện thoại)",
  "hv": "đoản tín",
  "em": "📱",
  "lesson": 3,
  "explain": [
   "Tin nhắn ngắn gửi qua điện thoại. Lượng từ: 条."
  ],
  "usage": "发短信 · 收到一条短信 · 回短信.",
  "collo": [
   "发短信",
   "收到短信",
   "回短信",
   "一条短信"
  ],
  "colloFull": [
   {
    "zh": "发短信",
    "py": "Fā duǎnxìn",
    "vn": "gửi tin nhắn"
   },
   {
    "zh": "收到短信",
    "py": "Shōudào duǎnxìn",
    "vn": "nhận được tin nhắn"
   },
   {
    "zh": "回短信",
    "py": "Huí duǎnxìn",
    "vn": "trả lời tin nhắn"
   },
   {
    "zh": "一条短信",
    "py": "Yì tiáo duǎnxìn",
    "vn": "một tin nhắn"
   }
  ],
  "patterns": [
   {
    "s": "给 + ai + 发短信",
    "m": "Nhắn tin cho ai"
   },
   {
    "s": "一 + 条 + 短信",
    "m": "Lượng từ 条"
   }
  ],
  "ex_zh": "一天下午，李文突然收到一条短信，说他通过了面试，让他下周一到公司实习。",
  "ex_py": "Yì tiān xiàwǔ, Lǐ Wén tūrán shōudào yì tiáo duǎnxìn, shuō tā tōngguò le miànshì, ràng tā xià zhōuyī dào gōngsī shíxí.",
  "ex_vn": "Một buổi chiều, Lý Văn bỗng nhận được một tin nhắn, nói cậu ấy đã qua phỏng vấn, bảo thứ Hai tuần sau đến công ty thực tập.",
  "exList": [
   {
    "zh": "一天下午，李文突然收到一条短信，说他通过了面试，让他下周一到公司实习。",
    "py": "Yì tiān xiàwǔ, Lǐ Wén tūrán shōudào yì tiáo duǎnxìn, shuō tā tōngguò le miànshì, ràng tā xià zhōuyī dào gōngsī shíxí.",
    "vn": "Một buổi chiều, Lý Văn bỗng nhận được một tin nhắn, nói cậu ấy đã qua phỏng vấn, bảo thứ Hai tuần sau đến công ty thực tập."
   },
   {
    "zh": "到了以后给我发个短信，我就放心了。",
    "py": "Dào le yǐhòu gěi wǒ fā gè duǎnxìn, wǒ jiù fàngxīn le.",
    "vn": "Đến nơi thì nhắn tin cho mình, mình mới yên tâm."
   }
  ],
  "hanzi": [
   {
    "c": "短",
    "p": "duǎn",
    "type": "左右结构 · Trái-phải",
    "st": 12,
    "ord": "矢 trái → 豆 phải",
    "rad": "矢 (thỉ – mũi tên)",
    "mean": "ngắn",
    "tip": "矢(mũi tên, vật ngắn) + 豆(hạt đậu, cũng nhỏ) → hai vật đều NGẮN, NHỎ để so sánh = NGẮN.",
    "cf": "豆 (dòu – \"đậu\", không có bộ 矢\")",
    "w": "短 / 短头发 / 短信"
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
    "prompt": "Tôi gửi cho anh ấy mấy tin nhắn mà anh ấy mãi không trả lời.",
    "answer": "我给他发了好几条短信，他一直没回。",
    "answerPy": "Wǒ gěi tā fā le hǎojǐ tiáo duǎnxìn, tā yìzhí méi huí.",
    "note": "Lượng từ 条; ôn 好几 (HSK 3).",
    "pair": "好几条"
   },
   {
    "promptLang": "vi",
    "prompt": "Từ hôm đó trở đi, cô ấy không nhắn tin cho tôi nữa.",
    "answer": "从那天以后，她就再也没给我发过短信。",
    "answerPy": "Cóng nàtiān yǐhòu, tā jiù zài yě méi gěi wǒ fā guò duǎnxìn.",
    "note": "再也没 + V过 (điểm 1).",
    "pair": "再也没……过"
   }
  ]
 },
 {
  "n": 22,
  "zh": "激动",
  "py": "jīdòng",
  "pos": "Tính từ / Động từ",
  "vn": "xúc động, phấn khích; làm xúc động",
  "hv": "kích động",
  "em": "🤩",
  "lesson": 3,
  "explain": [
   "Tính từ: cảm xúc dâng trào (vui quá, cảm động quá).",
   "Động từ: làm ai xúc động (激动人心). Lưu ý: “kích động” trong tiếng Việt hay mang nghĩa xấu, còn 激动 thường là xúc động, phấn khích."
  ],
  "usage": "很激动 · 激动得 + V · 别激动 · 激动人心.",
  "collo": [
   "非常激动",
   "激动得哭了",
   "激动得跳起来",
   "激动人心"
  ],
  "colloFull": [
   {
    "zh": "非常激动",
    "py": "Fēicháng jīdòng",
    "vn": "vô cùng xúc động"
   },
   {
    "zh": "激动得哭了",
    "py": "Jīdòng de kū le",
    "vn": "xúc động đến phát khóc"
   },
   {
    "zh": "激动得跳起来",
    "py": "Jīdòng de tiàoqǐ lái",
    "vn": "phấn khích nhảy cẫng lên"
   },
   {
    "zh": "激动人心",
    "py": "Jīdòng rénxīn",
    "vn": "làm lòng người xúc động"
   }
  ],
  "patterns": [
   {
    "s": "Sub + 激动得 + V / câu",
    "m": "Bổ ngữ trạng thái chỉ mức độ"
   },
   {
    "s": "别激动",
    "m": "Bình tĩnh, đừng kích động"
   }
  ],
  "ex_zh": "李文看到信息后，激动得把手机扔到床上，在屋子里跳了起来。",
  "ex_py": "Lǐ Wén kàndào xìnxī hòu, jīdòng de bǎ shǒujī rēngdào chuáng shàng, zài wūzi lǐ tiào le qǐlai.",
  "ex_vn": "Lý Văn đọc tin xong, phấn khích đến mức ném điện thoại lên giường, nhảy cẫng lên trong phòng.",
  "exList": [
   {
    "zh": "李文看到信息后，激动得把手机扔到床上，在屋子里跳了起来。",
    "py": "Lǐ Wén kàndào xìnxī hòu, jīdòng de bǎ shǒujī rēngdào chuáng shàng, zài wūzi lǐ tiào le qǐlai.",
    "vn": "Lý Văn đọc tin xong, phấn khích đến mức ném điện thoại lên giường, nhảy cẫng lên trong phòng."
   },
   {
    "zh": "是的，我激动得昨天晚上都没睡好。",
    "py": "Shì de, wǒ jīdòng de zuótiān wǎnshang dōu méi shuìhǎo.",
    "vn": "Đúng vậy, tôi phấn khích đến mức tối qua ngủ cũng không ngon."
   }
  ],
  "hanzi": [
   {
    "c": "激",
    "p": "jī",
    "type": "左右结构 · Trái-phải",
    "st": 16,
    "ord": "氵 trái → 敫 phải",
    "rad": "氵 (thủy)",
    "mean": "kích",
    "tip": "Nước 氵 + 敫 → nước bắn tung lên → KÍCH động. 激动 = xúc động; 刺激 = kích thích.",
    "cf": "敫 (jiǎo)",
    "w": "激动 / 刺激 / 激烈"
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
    "prompt": "Nghe được tin tốt này, mẹ xúc động đến phát khóc.",
    "answer": "听到这个好消息，妈妈激动得哭了。",
    "answerPy": "Tīngdào zhège hǎo xiāoxi, māma jīdòng de kū le.",
    "note": "激动得 + V (bổ ngữ trạng thái).",
    "pair": "激动得……"
   },
   {
    "promptLang": "vi",
    "prompt": "Nghe nói nhận được học bổng, tôi phấn khích đến mức tối qua ngủ không ngon.",
    "answer": "听说获得了奖学金，我激动得昨天晚上都没睡好。",
    "answerPy": "Tīngshuō huòdé le jiǎngxuéjīn, wǒ jīdòng de zuótiān wǎnshang dōu méi shuìhǎo.",
    "note": "Bài tập chọn từ của sách (câu 8); ôn 获得, 奖学金 (Bài 1).",
    "pair": "激动得……"
   }
  ]
 },
 {
  "n": 23,
  "zh": "扔",
  "py": "rēng",
  "pos": "Động từ",
  "vn": "ném, quăng; vứt (bỏ)",
  "hv": "nhưng",
  "em": "🗑️",
  "lesson": 3,
  "explain": [
   "Dùng tay ném vật đi; cũng có nghĩa vứt bỏ (扔垃圾, 扔掉)."
  ],
  "usage": "把 + vật + 扔到 / 扔进 + nơi · 扔垃圾 · 扔掉.",
  "collo": [
   "扔垃圾",
   "扔到床上",
   "扔掉",
   "扔球"
  ],
  "colloFull": [
   {
    "zh": "扔垃圾",
    "py": "Rēng lājī",
    "vn": "vứt rác"
   },
   {
    "zh": "扔到床上",
    "py": "Rēngdào chuáng shàng",
    "vn": "ném lên giường"
   },
   {
    "zh": "扔掉",
    "py": "Rēngdiào",
    "vn": "vứt đi"
   },
   {
    "zh": "扔球",
    "py": "Rēng qiú",
    "vn": "ném bóng"
   }
  ],
  "patterns": [
   {
    "s": "把 + O + 扔到 / 扔进 + nơi",
    "m": "Câu chữ 把 + bổ ngữ nơi chốn (HSK 3)"
   },
   {
    "s": "扔 + 掉",
    "m": "Vứt đi"
   }
  ],
  "ex_zh": "李文看到信息后，激动得把手机扔到床上，在屋子里跳了起来。",
  "ex_py": "Lǐ Wén kàndào xìnxī hòu, jīdòng de bǎ shǒujī rēngdào chuáng shàng, zài wūzi lǐ tiào le qǐlai.",
  "ex_vn": "Lý Văn đọc tin xong, phấn khích đến mức ném điện thoại lên giường, nhảy cẫng lên trong phòng.",
  "exList": [
   {
    "zh": "李文看到信息后，激动得把手机扔到床上，在屋子里跳了起来。",
    "py": "Lǐ Wén kàndào xìnxī hòu, jīdòng de bǎ shǒujī rēngdào chuáng shàng, zài wūzi lǐ tiào le qǐlai.",
    "vn": "Lý Văn đọc tin xong, phấn khích đến mức ném điện thoại lên giường, nhảy cẫng lên trong phòng."
   },
   {
    "zh": "别把垃圾扔在地上，扔到垃圾桶里吧。",
    "py": "Bié bǎ lājī rēng zài dìshang, rēngdào lājītǒng lǐ ba.",
    "vn": "Đừng vứt rác ra đất, vứt vào thùng rác đi."
   }
  ],
  "hanzi": [
   {
    "c": "扔",
    "p": "rēng",
    "type": "左右结构 · Trái-phải",
    "st": 5,
    "ord": "扌 trái → 乃 phải",
    "rad": "扌 (thủ)",
    "mean": "ném",
    "tip": "Bộ tay 扌 + 乃 → dùng tay NÉM, VỨT. Chữ chỉ 5 nét, rất dễ nhớ.",
    "cf": "仍 (réng – vẫn)",
    "w": "扔 / 扔掉 / 乱扔"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Cậu ấy phấn khích đến mức ném điện thoại lên giường.",
    "answer": "他激动得把手机扔到了床上。",
    "answerPy": "Tā jīdòng de bǎ shǒujī rēngdào le chuáng shàng.",
    "note": "Câu dựa vào bài khoá 3.",
    "pair": "把……扔到……"
   },
   {
    "promptLang": "vi",
    "prompt": "Cậu ấy tức quá, thậm chí ném luôn cả chiếc điện thoại mới mua.",
    "answer": "他气坏了，甚至把新买的手机也扔了。",
    "answerPy": "Tā qì huài le, shènzhì bǎ xīn mǎi de shǒujī yě rēng le.",
    "note": "Ôn 甚至 (Bài 3 · điểm 3).",
    "pair": "甚至……也……"
   }
  ]
 },
 {
  "n": 24,
  "zh": "理发",
  "py": "lǐfà",
  "pos": "Động từ",
  "vn": "cắt tóc",
  "hv": "lý phát",
  "em": "💇",
  "lesson": 3,
  "explain": [
   "Cắt, sửa tóc. Là động từ ly hợp: 理了发, 理个发; tách ra thì 头发 làm tân ngữ: 把头发理了理. Tiệm cắt tóc: 理发店."
  ],
  "usage": "去理发 · 理发店 · 理了个发.",
  "collo": [
   "去理发",
   "理发店",
   "理发师",
   "帮他理发"
  ],
  "colloFull": [
   {
    "zh": "去理发",
    "py": "Qù lǐfà",
    "vn": "đi cắt tóc"
   },
   {
    "zh": "理发店",
    "py": "Lǐfàdiàn",
    "vn": "tiệm cắt tóc"
   },
   {
    "zh": "理发师",
    "py": "Lǐfàshī",
    "vn": "thợ cắt tóc"
   },
   {
    "zh": "帮他理发",
    "py": "Bāng tā lǐfà",
    "vn": "cắt tóc cho anh ấy"
   }
  ],
  "patterns": [
   {
    "s": "理 + 了 + (个) + 发",
    "m": "Ly hợp: ✗ 理发了头发"
   },
   {
    "s": "把头发理一理 / 理了理",
    "m": "Câu 把 + động từ lặp (điểm 3)"
   }
  ],
  "ex_zh": "为了给大家留个好印象，他去理发店把头发理了理。",
  "ex_py": "Wèile gěi dàjiā liú gè hǎo yìnxiàng, tā qù lǐfàdiàn bǎ tóufa lǐ le lǐ.",
  "ex_vn": "Để để lại ấn tượng tốt với mọi người, cậu ấy ra tiệm cắt tóc sửa lại tóc một chút.",
  "exList": [
   {
    "zh": "为了给大家留个好印象，他去理发店把头发理了理。",
    "py": "Wèile gěi dàjiā liú gè hǎo yìnxiàng, tā qù lǐfàdiàn bǎ tóufa lǐ le lǐ.",
    "vn": "Để để lại ấn tượng tốt với mọi người, cậu ấy ra tiệm cắt tóc sửa lại tóc một chút."
   },
   {
    "zh": "下午我去理发，你想跟我一起去吗？",
    "py": "Xiàwǔ wǒ qù lǐfà, nǐ xiǎng gēn wǒ yìqǐ qù ma?",
    "vn": "Chiều tôi đi cắt tóc, bạn muốn đi cùng không?"
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
    "prompt": "Dạo này tóc tôi hơi dài, đúng lúc chiều nay rảnh nên đi cắt.",
    "answer": "我最近头发有点儿长了，正好下午有时间去理发。",
    "answerPy": "Wǒ zuìjìn tóufa yǒudiǎnr cháng le, zhènghǎo xiàwǔ yǒu shíjiān qù lǐfà.",
    "note": "Bài tập chọn từ của sách (câu 10).",
    "pair": "正好……"
   },
   {
    "promptLang": "vi",
    "prompt": "Trước khi đi phỏng vấn, anh ấy ra tiệm cắt tóc sửa lại tóc một chút.",
    "answer": "去面试以前，他去理发店把头发理了理。",
    "answerPy": "Qù miànshì yǐqián, tā qù lǐfàdiàn bǎ tóufa lǐ le lǐ.",
    "note": "把 + O + V了V (điểm 3).",
    "pair": "把……V了V"
   }
  ]
 },
 {
  "n": 25,
  "zh": "镜子",
  "py": "jìngzi",
  "pos": "Danh từ",
  "vn": "gương soi",
  "hv": "kính tử",
  "em": "🪞",
  "lesson": 3,
  "explain": [
   "Đồ vật để soi mặt. Lượng từ: 面. Soi gương: 照镜子."
  ],
  "usage": "照镜子 · 在镜子前 · 一面镜子.",
  "collo": [
   "照镜子",
   "在镜子前",
   "一面镜子",
   "镜子里"
  ],
  "colloFull": [
   {
    "zh": "照镜子",
    "py": "Zhào jìngzi",
    "vn": "soi gương"
   },
   {
    "zh": "在镜子前",
    "py": "Zài jìngzi qián",
    "vn": "trước gương"
   },
   {
    "zh": "一面镜子",
    "py": "Yí miàn jìngzi",
    "vn": "một chiếc gương"
   },
   {
    "zh": "镜子里",
    "py": "Jìngzi lǐ",
    "vn": "trong gương"
   }
  ],
  "patterns": [
   {
    "s": "照 + 镜子",
    "m": "Soi gương"
   },
   {
    "s": "一面 + 镜子",
    "m": "Lượng từ 面"
   }
  ],
  "ex_zh": "他还打算在镜子前把自我介绍练一练。",
  "ex_py": "Tā hái dǎsuàn zài jìngzi qián bǎ zìwǒ jièshào liàn yi liàn.",
  "ex_vn": "Cậu ấy còn định tập phần tự giới thiệu trước gương một chút.",
  "exList": [
   {
    "zh": "他还打算在镜子前把自我介绍练一练。",
    "py": "Tā hái dǎsuàn zài jìngzi qián bǎ zìwǒ jièshào liàn yi liàn.",
    "vn": "Cậu ấy còn định tập phần tự giới thiệu trước gương một chút."
   },
   {
    "zh": "她出门前总是要照照镜子。",
    "py": "Tā chūmén qián zǒngshì yào zhàozhao jìngzi.",
    "vn": "Trước khi ra ngoài cô ấy luôn soi gương một chút."
   }
  ],
  "hanzi": [
   {
    "c": "镜",
    "p": "jìng",
    "type": "左右结构 · Trái-phải",
    "st": 16,
    "ord": "钅 trái → 竟 phải",
    "rad": "钅 (kim)",
    "mean": "gương, kính",
    "tip": "Kim loại 钅 + 竟 → GƯƠNG, KÍNH. 眼镜 = kính mắt; 镜子 = gương (Bài 14). Phân biệt 睛 (con ngươi, 眼睛).",
    "cf": "睛 (jīng – 眼睛 con mắt)",
    "w": "眼镜 / 镜子 / 太阳镜"
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
    "prompt": "Tôi tập nói trước gương mấy lần rồi mới đi phỏng vấn.",
    "answer": "我在镜子前练了好几遍，然后才去面试。",
    "answerPy": "Wǒ zài jìngzi qián liàn le hǎojǐ biàn, ránhòu cái qù miànshì.",
    "note": "Ôn lượng từ động tác 遍 + 才 (HSK 3).",
    "pair": "V了好几遍"
   },
   {
    "promptLang": "vi",
    "prompt": "Tự tập một mình trước gương không bằng nhờ bạn bè nghe giúp.",
    "answer": "在镜子前自己练，不如请朋友帮你听听。",
    "answerPy": "Zài jìngzi qián zìjǐ liàn, bùrú qǐng péngyou bāng nǐ tīngting.",
    "note": "A不如B (điểm 4).",
    "pair": "A不如B"
   }
  ]
 },
 {
  "n": 26,
  "zh": "自我",
  "py": "zìwǒ",
  "pos": "Đại từ",
  "vn": "bản thân, tự (mình)",
  "hv": "tự ngã",
  "em": "🙋‍♂️",
  "lesson": 3,
  "explain": [
   "Chính bản thân mình; thường đứng trước động từ hai âm tiết: 自我介绍 (tự giới thiệu)."
  ],
  "usage": "自我介绍 · 自我管理 · 自我检查.",
  "collo": [
   "自我介绍",
   "自我管理",
   "自我检查",
   "自我学习"
  ],
  "colloFull": [
   {
    "zh": "自我介绍",
    "py": "Zìwǒ jièshào",
    "vn": "tự giới thiệu"
   },
   {
    "zh": "自我管理",
    "py": "Zìwǒ guǎnlǐ",
    "vn": "tự quản lý"
   },
   {
    "zh": "自我检查",
    "py": "Zìwǒ jiǎnchá",
    "vn": "tự kiểm tra"
   },
   {
    "zh": "自我学习",
    "py": "Zìwǒ xuéxí",
    "vn": "tự học"
   }
  ],
  "patterns": [
   {
    "s": "自我 + V hai âm tiết",
    "m": "自我介绍 ✓ / ✗ 自我说"
   }
  ],
  "ex_zh": "他还打算在镜子前把自我介绍练一练。",
  "ex_py": "Tā hái dǎsuàn zài jìngzi qián bǎ zìwǒ jièshào liàn yi liàn.",
  "ex_vn": "Cậu ấy còn định tập phần tự giới thiệu trước gương một chút.",
  "exList": [
   {
    "zh": "他还打算在镜子前把自我介绍练一练。",
    "py": "Tā hái dǎsuàn zài jìngzi qián bǎ zìwǒ jièshào liàn yi liàn.",
    "vn": "Cậu ấy còn định tập phần tự giới thiệu trước gương một chút."
   },
   {
    "zh": "请先做一个简单的自我介绍吧。",
    "py": "Qǐng xiān zuò yí gè jiǎndān de zìwǒ jièshào ba.",
    "vn": "Mời bạn tự giới thiệu ngắn gọn trước nhé."
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
    "c": "我",
    "p": "wǒ",
    "type": "独体字 · Chữ đơn",
    "st": 7,
    "ord": "手(biến thể, nét tay) trái → 戈(qua) phải, viết liền một khối",
    "rad": "戈 (qua – vũ khí, cây giáo)",
    "mean": "tôi, mình",
    "tip": "Chữ 我 vốn là hình người TỰ cầm 戈(vũ khí) bảo vệ bản thân → mở rộng thành đại từ ngôi thứ nhất TÔI, MÌNH.",
    "cf": "找 (zhǎo – \"tìm\", cũng có bộ 戈\")",
    "w": "我们 / 我是 / 我叫"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Khi phỏng vấn, trước hết thường phải tự giới thiệu.",
    "answer": "面试的时候，首先一般要做自我介绍。",
    "answerPy": "Miànshì de shíhou, shǒuxiān yìbān yào zuò zìwǒ jièshào.",
    "note": "Ôn 首先 (Bài 14 · điểm 2).",
    "pair": "首先……"
   },
   {
    "promptLang": "vi",
    "prompt": "Trước khi phỏng vấn, tôi định tập phần tự giới thiệu trước gương một chút.",
    "answer": "面试前，我打算在镜子前把自我介绍练一练。",
    "answerPy": "Miànshì qián, wǒ dǎsuàn zài jìngzi qián bǎ zìwǒ jièshào liàn yi liàn.",
    "note": "把 + O + V一V (điểm 3).",
    "pair": "把……V一V"
   }
  ]
 },
 {
  "n": 27,
  "zh": "能够",
  "py": "nénggòu",
  "pos": "Động từ",
  "vn": "có thể, có khả năng",
  "hv": "năng cấu",
  "em": "💪",
  "lesson": 3,
  "explain": [
   "Động từ năng nguyện, như 能: có năng lực / điều kiện làm gì; hơi trang trọng, hay dùng trong văn viết."
  ],
  "usage": "能够 + V · 不仅能够……，还能够……",
  "collo": [
   "能够完成",
   "能够理解",
   "能够参加",
   "不能够"
  ],
  "colloFull": [
   {
    "zh": "能够完成",
    "py": "Nénggòu wánchéng",
    "vn": "có thể hoàn thành"
   },
   {
    "zh": "能够理解",
    "py": "Nénggòu lǐjiě",
    "vn": "có thể hiểu"
   },
   {
    "zh": "能够参加",
    "py": "Nénggòu cānjiā",
    "vn": "có thể tham gia"
   },
   {
    "zh": "不能够",
    "py": "Bù nénggòu",
    "vn": "không thể"
   }
  ],
  "patterns": [
   {
    "s": "能够 + V",
    "m": "= 能 (trang trọng hơn)"
   },
   {
    "s": "不仅能够……，还能够……",
    "m": "Ôn 不仅……还…… (Bài 3 · điểm 2)"
   }
  ],
  "ex_zh": "他希望不仅能够运用专业知识完成任务，还能够积累更多经验。",
  "ex_py": "Tā xīwàng bùjǐn nénggòu yùnyòng zhuānyè zhīshi wánchéng rènwu, hái nénggòu jīlěi gèng duō jīngyàn.",
  "ex_vn": "Cậu ấy mong không chỉ có thể vận dụng kiến thức chuyên ngành để hoàn thành nhiệm vụ, mà còn có thể tích lũy thêm kinh nghiệm.",
  "exList": [
   {
    "zh": "他希望不仅能够运用专业知识完成任务，还能够积累更多经验。",
    "py": "Tā xīwàng bùjǐn nénggòu yùnyòng zhuānyè zhīshi wánchéng rènwu, hái nénggòu jīlěi gèng duō jīngyàn.",
    "vn": "Cậu ấy mong không chỉ có thể vận dụng kiến thức chuyên ngành để hoàn thành nhiệm vụ, mà còn có thể tích lũy thêm kinh nghiệm."
   },
   {
    "zh": "我已经能够和中国朋友进行简单交流了。",
    "py": "Wǒ yǐjīng nénggòu hé Zhōngguó péngyou jìnxíng jiǎndān jiāoliú le.",
    "vn": "Tôi đã có thể giao tiếp đơn giản với bạn Trung Quốc rồi."
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
    "prompt": "Bây giờ tôi đã có thể giao tiếp đơn giản với bạn bè Trung Quốc.",
    "answer": "我现在已经能够和中国朋友进行简单交流了。",
    "answerPy": "Wǒ xiànzài yǐjīng nénggòu hé Zhōngguó péngyou jìnxíng jiǎndān jiāoliú le.",
    "note": "Bài tập chọn từ của sách (câu 9).",
    "pair": "能够……"
   },
   {
    "promptLang": "vi",
    "prompt": "Thông qua thực tập, sinh viên không chỉ có thể tích lũy kinh nghiệm mà còn có thể hiểu xã hội sớm hơn.",
    "answer": "通过实习，学生不仅能够积累经验，还能够提前了解社会。",
    "answerPy": "Tōngguò shíxí, xuésheng bùjǐn nénggòu jīlěi jīngyàn, hái nénggòu tíqián liǎojiě shèhuì.",
    "note": "Ôn 不仅……还…… (Bài 3 · điểm 2).",
    "pair": "不仅……还……"
   }
  ]
 },
 {
  "n": 28,
  "zh": "运用",
  "py": "yùnyòng",
  "pos": "Động từ",
  "vn": "vận dụng, sử dụng",
  "hv": "vận dụng",
  "em": "🛠️",
  "lesson": 3,
  "explain": [
   "Đem kiến thức, kỹ năng, phương pháp ra dùng vào thực tế."
  ],
  "usage": "运用知识 · 运用语法 · 运用到工作中.",
  "collo": [
   "运用知识",
   "运用语法",
   "灵活运用",
   "运用到工作中"
  ],
  "colloFull": [
   {
    "zh": "运用知识",
    "py": "Yùnyòng zhīshi",
    "vn": "vận dụng kiến thức"
   },
   {
    "zh": "运用语法",
    "py": "Yùnyòng yǔfǎ",
    "vn": "vận dụng ngữ pháp"
   },
   {
    "zh": "灵活运用",
    "py": "Línghuó yùnyòng",
    "vn": "vận dụng linh hoạt"
   },
   {
    "zh": "运用到工作中",
    "py": "Yùnyòng dào gōngzuò zhōng",
    "vn": "vận dụng vào công việc"
   }
  ],
  "patterns": [
   {
    "s": "运用 + 知识 / 方法 / 语言",
    "m": "Tân ngữ trừu tượng"
   },
   {
    "s": "运用 vs 使用",
    "m": "使用 dùng cho đồ vật cụ thể: 使用电脑"
   }
  ],
  "ex_zh": "他希望不仅能够运用专业知识完成任务，还能够积累更多经验。",
  "ex_py": "Tā xīwàng bùjǐn nénggòu yùnyòng zhuānyè zhīshi wánchéng rènwu, hái nénggòu jīlěi gèng duō jīngyàn.",
  "ex_vn": "Cậu ấy mong không chỉ có thể vận dụng kiến thức chuyên ngành để hoàn thành nhiệm vụ, mà còn có thể tích lũy thêm kinh nghiệm.",
  "exList": [
   {
    "zh": "他希望不仅能够运用专业知识完成任务，还能够积累更多经验。",
    "py": "Tā xīwàng bùjǐn nénggòu yùnyòng zhuānyè zhīshi wánchéng rènwu, hái nénggòu jīlěi gèng duō jīngyàn.",
    "vn": "Cậu ấy mong không chỉ có thể vận dụng kiến thức chuyên ngành để hoàn thành nhiệm vụ, mà còn có thể tích lũy thêm kinh nghiệm."
   },
   {
    "zh": "学了语法，还要多在生活中运用。",
    "py": "Xué le yǔfǎ, hái yào duō zài shēnghuó zhōng yùnyòng.",
    "vn": "Học ngữ pháp rồi còn phải vận dụng nhiều trong cuộc sống."
   }
  ],
  "hanzi": [
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
    "prompt": "Tôi hy vọng có thể vận dụng kiến thức chuyên ngành vào công việc.",
    "answer": "我希望能够把专业知识运用到工作中。",
    "answerPy": "Wǒ xīwàng nénggòu bǎ zhuānyè zhīshi yùnyòng dào gōngzuò zhōng.",
    "note": "Câu chữ 把 + V到 (HSK 3).",
    "pair": "把……运用到……"
   },
   {
    "promptLang": "vi",
    "prompt": "Học ngôn ngữ không phải để thi, mà là để vận dụng trong cuộc sống.",
    "answer": "学语言不是为了考试，而是为了在生活中运用。",
    "answerPy": "Xué yǔyán bú shì wèile kǎoshì, érshì wèile zài shēnghuó zhōng yùnyòng.",
    "note": "Ôn 不是……而是…… (Bài 11 · điểm 3).",
    "pair": "不是……而是……"
   }
  ]
 },
 {
  "n": 29,
  "zh": "工厂",
  "py": "gōngchǎng",
  "pos": "Danh từ",
  "vn": "nhà máy, xưởng",
  "hv": "công xưởng",
  "em": "🏭",
  "lesson": 4,
  "explain": [
   "Nơi sản xuất hàng hóa bằng máy móc. Lượng từ: 家 / 个."
  ],
  "usage": "在工厂工作 · 一家工厂 · 汽车工厂.",
  "collo": [
   "一家工厂",
   "汽车工厂",
   "在工厂上班",
   "工厂工人"
  ],
  "colloFull": [
   {
    "zh": "一家工厂",
    "py": "Yì jiā gōngchǎng",
    "vn": "một nhà máy"
   },
   {
    "zh": "汽车工厂",
    "py": "Qìchē gōngchǎng",
    "vn": "nhà máy ô tô"
   },
   {
    "zh": "在工厂上班",
    "py": "Zài gōngchǎng shàngbān",
    "vn": "đi làm ở nhà máy"
   },
   {
    "zh": "工厂工人",
    "py": "Gōngchǎng gōngrén",
    "vn": "công nhân nhà máy"
   }
  ],
  "patterns": [
   {
    "s": "在 + 工厂 + 工作 / 实习",
    "m": "Làm / thực tập ở nhà máy"
   }
  ],
  "ex_zh": "实习的地方有公司、工厂，也有学校和医院。",
  "ex_py": "Shíxí de dìfang yǒu gōngsī, gōngchǎng, yě yǒu xuéxiào hé yīyuàn.",
  "ex_vn": "Nơi thực tập có công ty, nhà máy, cũng có trường học và bệnh viện.",
  "exList": [
   {
    "zh": "实习的地方有公司、工厂，也有学校和医院。",
    "py": "Shíxí de dìfang yǒu gōngsī, gōngchǎng, yě yǒu xuéxiào hé yīyuàn.",
    "vn": "Nơi thực tập có công ty, nhà máy, cũng có trường học và bệnh viện."
   },
   {
    "zh": "这家工厂有三百多个工人。",
    "py": "Zhè jiā gōngchǎng yǒu sānbǎi duō gè gōngrén.",
    "vn": "Nhà máy này có hơn ba trăm công nhân."
   }
  ],
  "hanzi": [
   {
    "c": "工",
    "p": "gōng",
    "type": "独体字 · Chữ đơn",
    "st": 3,
    "ord": "横(ngang trên) → 竖(sổ giữa) → 横(ngang dưới)",
    "rad": "工 (công – tự thành bộ, nghĩa: công cụ, thợ)",
    "mean": "công việc, thợ, công cụ",
    "tip": "Hình vẽ giống cây THƯỚC THỢ (dụng cụ xây dựng) với hai đầu ngang và một trục dọc → tượng trưng cho LAO ĐỘNG, CÔNG VIỆC.",
    "cf": "土 (tǔ – \"đất\", nét ngang dưới ngắn hơn thay vì dài bằng, hình dáng gần giống 工\")",
    "w": "工作 / 工人"
   },
   {
    "c": "厂",
    "p": "chǎng",
    "type": "象形字 · Chữ tượng hình",
    "st": 2,
    "ord": "一 → 丿",
    "rad": "厂 (hán – sườn núi)",
    "mean": "nhà máy, xưởng",
    "tip": "Hình một vách đá / mái che nhô ra (một nét ngang + một nét phẩy) → nơi có mái che để làm việc → xưởng, nhà máy — 工厂.",
    "cf": "广 guǎng (rộng) — có thêm chấm 丶 ở trên; 厅 tīng (sảnh) — 厂 + 丁",
    "w": "工厂 / 厂长 / 药厂"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Anh ấy hiện làm ở một nhà máy, chủ yếu phụ trách kiểm tra chất lượng sản phẩm.",
    "answer": "他现在在一家工厂工作，主要负责检查产品的质量。",
    "answerPy": "Tā xiànzài zài yì jiā gōngchǎng gōngzuò, zhǔyào fùzé jiǎnchá chǎnpǐn de zhìliàng.",
    "note": "Bài tập chọn từ của sách (câu 12).",
    "pair": "在一家工厂……"
   },
   {
    "promptLang": "vi",
    "prompt": "Nhà máy này có khoảng hai trăm công nhân.",
    "answer": "这家工厂大约有两百个工人。",
    "answerPy": "Zhè jiā gōngchǎng dàyuē yǒu liǎngbǎi gè gōngrén.",
    "note": "Ôn 大约 (Bài 13 · điểm 3).",
    "pair": "大约 + số"
   }
  ]
 },
 {
  "n": 30,
  "zh": "规定",
  "py": "guīdìng",
  "pos": "Danh từ / Động từ",
  "vn": "quy định",
  "hv": "quy định",
  "em": "📜",
  "lesson": 4,
  "explain": [
   "Danh từ: điều được đặt ra để mọi người làm theo.",
   "Động từ: đặt ra quy định (学校规定……)."
  ],
  "usage": "管理规定 · 遵守规定 · 按照规定 · 公司规定…….",
  "collo": [
   "管理规定",
   "遵守规定",
   "公司规定",
   "按照规定"
  ],
  "colloFull": [
   {
    "zh": "管理规定",
    "py": "Guǎnlǐ guīdìng",
    "vn": "quy định quản lý"
   },
   {
    "zh": "遵守规定",
    "py": "Zūnshǒu guīdìng",
    "vn": "tuân thủ quy định"
   },
   {
    "zh": "公司规定",
    "py": "Gōngsī guīdìng",
    "vn": "công ty quy định"
   },
   {
    "zh": "按照规定",
    "py": "Ànzhào guīdìng",
    "vn": "theo quy định"
   }
  ],
  "patterns": [
   {
    "s": "按照 / 遵守 + 规定",
    "m": "Danh từ"
   },
   {
    "s": "Sub + 规定 + câu",
    "m": "Động từ: 学校规定……"
   }
  ],
  "ex_zh": "学生们通过实习，可以积累工作经验，熟悉工作内容和单位的管理规定。",
  "ex_py": "Xuéshengmen tōngguò shíxí, kěyǐ jīlěi gōngzuò jīngyàn, shúxi gōngzuò nèiróng hé dānwèi de guǎnlǐ guīdìng.",
  "ex_vn": "Thông qua thực tập, sinh viên có thể tích lũy kinh nghiệm làm việc, làm quen với nội dung công việc và quy định quản lý của đơn vị.",
  "exList": [
   {
    "zh": "学生们通过实习，可以积累工作经验，熟悉工作内容和单位的管理规定。",
    "py": "Xuéshengmen tōngguò shíxí, kěyǐ jīlěi gōngzuò jīngyàn, shúxi gōngzuò nèiróng hé dānwèi de guǎnlǐ guīdìng.",
    "vn": "Thông qua thực tập, sinh viên có thể tích lũy kinh nghiệm làm việc, làm quen với nội dung công việc và quy định quản lý của đơn vị."
   },
   {
    "zh": "学校规定，上课的时候不能玩手机。",
    "py": "Xuéxiào guīdìng, shàngkè de shíhou bù néng wán shǒujī.",
    "vn": "Trường quy định khi lên lớp không được chơi điện thoại."
   }
  ],
  "hanzi": [
   {
    "c": "规",
    "p": "guī",
    "type": "左右结构 · Trái-phải (giản thể)",
    "st": 8,
    "ord": "夫 trái → 见 phải",
    "rad": "见 (kiến)",
    "mean": "compa, phép tắc",
    "tip": "Nghĩa gốc là cái COMPA vẽ vòng tròn (夫 người + 见 nhìn) → mở rộng thành PHÉP TẮC, kết hợp 定 thành 规定 = QUY ĐỊNH.",
    "cf": "现 (xiàn – \"hiện\", cũng có 见)",
    "w": "规定 / 规则 / 规律"
   },
   {
    "c": "定",
    "p": "dìng",
    "type": "形声字 · Chữ hình thanh",
    "st": 8,
    "ord": "宀 → 正 (biến thể: nét cuối là mác)",
    "rad": "宀 (miên – mái nhà)",
    "mean": "định, ổn định",
    "tip": "宀 (mái nhà) + 正 (ngay ngắn, biến thể): nhà cửa ngay ngắn, yên ổn → định. 一定 = đã định rồi → chắc chắn.",
    "cf": "走 zǒu — phần dưới giống nhưng không có mái 宀",
    "w": "一定 / 不一定"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Theo quy định của công ty, nhân viên mới phải thực tập ba tháng.",
    "answer": "按照公司的规定，新员工要实习三个月。",
    "answerPy": "Ànzhào gōngsī de guīdìng, xīn yuángōng yào shíxí sān gè yuè.",
    "note": "按照 + N (HSK 3).",
    "pair": "按照……规定"
   },
   {
    "promptLang": "vi",
    "prompt": "Bất kỳ ai cũng phải tuân thủ quy định của đơn vị.",
    "answer": "任何人都要遵守单位的规定。",
    "answerPy": "Rènhé rén dōu yào zūnshǒu dānwèi de guīdìng.",
    "note": "Ôn 任何……都…… (Bài 1 · điểm 1).",
    "pair": "任何……都……"
   }
  ]
 },
 {
  "n": 31,
  "zh": "课堂",
  "py": "kètáng",
  "pos": "Danh từ",
  "vn": "lớp học, giờ học trên lớp",
  "hv": "khóa đường",
  "em": "🏫",
  "lesson": 4,
  "explain": [
   "Lớp học — nhấn vào hoạt động dạy học trên lớp (课堂上, 课堂活动); khác 教室 là căn phòng học."
  ],
  "usage": "课堂上 · 课堂活动 · 课堂练习.",
  "collo": [
   "课堂上",
   "课堂活动",
   "课堂练习",
   "课堂气氛"
  ],
  "colloFull": [
   {
    "zh": "课堂上",
    "py": "Kètáng shàng",
    "vn": "trên lớp"
   },
   {
    "zh": "课堂活动",
    "py": "Kètáng huódòng",
    "vn": "hoạt động trên lớp"
   },
   {
    "zh": "课堂练习",
    "py": "Kètáng liànxí",
    "vn": "bài tập trên lớp"
   },
   {
    "zh": "课堂气氛",
    "py": "Kètáng qìfēn",
    "vn": "không khí lớp học"
   }
  ],
  "patterns": [
   {
    "s": "课堂 + 上",
    "m": "Trên lớp"
   },
   {
    "s": "课堂 ≠ 教室",
    "m": "教室 = phòng học (nơi chốn cụ thể)"
   }
  ],
  "ex_zh": "在实习中，学生常常会发现，课堂上学到的知识和实际工作并不完全一样。",
  "ex_py": "Zài shíxí zhōng, xuésheng chángcháng huì fāxiàn, kètáng shàng xuédào de zhīshi hé shíjì gōngzuò bìng bu wánquán yíyàng.",
  "ex_vn": "Trong thực tập, sinh viên thường phát hiện kiến thức học trên lớp và công việc thực tế không hoàn toàn giống nhau.",
  "exList": [
   {
    "zh": "在实习中，学生常常会发现，课堂上学到的知识和实际工作并不完全一样。",
    "py": "Zài shíxí zhōng, xuésheng chángcháng huì fāxiàn, kètáng shàng xuédào de zhīshi hé shíjì gōngzuò bìng bu wánquán yíyàng.",
    "vn": "Trong thực tập, sinh viên thường phát hiện kiến thức học trên lớp và công việc thực tế không hoàn toàn giống nhau."
   },
   {
    "zh": "王老师的课堂特别活跃，大家都很喜欢。",
    "py": "Wáng lǎoshī de kètáng tèbié huóyuè, dàjiā dōu hěn xǐhuan.",
    "vn": "Giờ học của thầy Vương rất sôi nổi, ai cũng thích."
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
    "prompt": "Kiến thức học trên lớp và công việc thực tế không hoàn toàn giống nhau.",
    "answer": "课堂上学到的知识和实际工作并不完全一样。",
    "answerPy": "Kètáng shàng xuédào de zhīshi hé shíjì gōngzuò bìng bu wánquán yíyàng.",
    "note": "Câu trong bài khoá 4; ôn 并 + phủ định (Bài 2 · điểm 3).",
    "pair": "并不……"
   },
   {
    "promptLang": "vi",
    "prompt": "Không chỉ phải chăm chú nghe trên lớp, mà còn phải luyện tập nhiều ngoài giờ học.",
    "answer": "不光要在课堂上认真听，还要在课下多练习。",
    "answerPy": "Bùguāng yào zài kètáng shàng rènzhēn tīng, hái yào zài kè xià duō liànxí.",
    "note": "Ôn 不光……还…… (Bài 3 · điểm 2).",
    "pair": "不光……还……"
   }
  ]
 },
 {
  "n": 32,
  "zh": "完全",
  "py": "wánquán",
  "pos": "Phó từ / Tính từ",
  "vn": "hoàn toàn; đầy đủ, trọn vẹn",
  "hv": "hoàn toàn",
  "em": "💯",
  "lesson": 4,
  "explain": [
   "Phó từ: hoàn toàn (完全一样, 完全不懂).",
   "Tính từ: đầy đủ, trọn vẹn (说得不完全)."
  ],
  "usage": "完全 + 一样 / 不同 / 明白 · 不完全一样.",
  "collo": [
   "完全一样",
   "完全不同",
   "完全明白",
   "不完全"
  ],
  "colloFull": [
   {
    "zh": "完全一样",
    "py": "Wánquán yíyàng",
    "vn": "hoàn toàn giống nhau"
   },
   {
    "zh": "完全不同",
    "py": "Wánquán bùtóng",
    "vn": "hoàn toàn khác"
   },
   {
    "zh": "完全明白",
    "py": "Wánquán míngbai",
    "vn": "hiểu hoàn toàn"
   },
   {
    "zh": "不完全",
    "py": "Bù wánquán",
    "vn": "không hoàn toàn"
   }
  ],
  "patterns": [
   {
    "s": "完全 + Adj / V",
    "m": "Phó từ"
   },
   {
    "s": "不完全 ≠ 完全不",
    "m": "不完全一样 = không hẳn giống; 完全不一样 = khác hoàn toàn"
   }
  ],
  "ex_zh": "在实习中，学生常常会发现，课堂上学到的知识和实际工作并不完全一样。",
  "ex_py": "Zài shíxí zhōng, xuésheng chángcháng huì fāxiàn, kètáng shàng xuédào de zhīshi hé shíjì gōngzuò bìng bu wánquán yíyàng.",
  "ex_vn": "Trong thực tập, sinh viên thường phát hiện kiến thức học trên lớp và công việc thực tế không hoàn toàn giống nhau.",
  "exList": [
   {
    "zh": "在实习中，学生常常会发现，课堂上学到的知识和实际工作并不完全一样。",
    "py": "Zài shíxí zhōng, xuésheng chángcháng huì fāxiàn, kètáng shàng xuédào de zhīshi hé shíjì gōngzuò bìng bu wánquán yíyàng.",
    "vn": "Trong thực tập, sinh viên thường phát hiện kiến thức học trên lớp và công việc thực tế không hoàn toàn giống nhau."
   },
   {
    "zh": "他说什么我完全听不懂。",
    "py": "Tā shuō shénme wǒ wánquán tīngbudǒng.",
    "vn": "Anh ấy nói gì tôi hoàn toàn nghe không hiểu."
   }
  ],
  "hanzi": [
   {
    "c": "完",
    "p": "wán",
    "type": "上下结构 · Trên-dưới",
    "st": 7,
    "ord": "宀 (miên) trên → 元 (nguyên) dưới",
    "rad": "宀 (miên – mái nhà)",
    "mean": "xong, đầy đủ",
    "tip": "Bộ mái nhà 宀 + 元 (đầu, gốc) → một ngôi nhà XÂY XONG TRỌN VẸN, mở rộng thành HOÀN TOÀN, XONG.",
    "cf": "莞 (wǎn – địa danh, có bộ 艹\")",
    "w": "完全 / 完成 / 完了"
   },
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
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Điều anh ấy nói và điều tôi nghĩ khác nhau hoàn toàn.",
    "answer": "他说的和我想的完全不一样。",
    "answerPy": "Tā shuō de hé wǒ xiǎng de wánquán bù yíyàng.",
    "note": "完全不一样 ≠ 不完全一样.",
    "pair": "完全不……"
   },
   {
    "promptLang": "vi",
    "prompt": "Tuy hai câu này nhìn thì giống nhau, nhưng ý nghĩa không hoàn toàn như nhau.",
    "answer": "尽管这两个句子看起来差不多，但是意思并不完全一样。",
    "answerPy": "Jǐnguǎn zhè liǎng gè jùzi kànqǐlai chàbuduō, dànshì yìsi bìng bu wánquán yíyàng.",
    "note": "Ôn 尽管……但是…… (Bài 9 · điểm 2).",
    "pair": "尽管……但是……"
   }
  ]
 },
 {
  "n": 33,
  "zh": "例如",
  "py": "lìrú",
  "pos": "Động từ",
  "vn": "ví dụ như, chẳng hạn",
  "hv": "lệ như",
  "em": "💡",
  "lesson": 4,
  "explain": [
   "Dùng để đưa ra ví dụ cho điều vừa nói; hay đứng đầu câu, sau có dấu hai chấm hoặc dấu phẩy."
  ],
  "usage": "例如：…… · ……，例如 A、B、C.",
  "collo": [
   "例如：……",
   "例如这件事",
   "例如游泳",
   "例如北京、上海"
  ],
  "colloFull": [
   {
    "zh": "例如：……",
    "py": "Lìrú:……",
    "vn": "ví dụ: …"
   },
   {
    "zh": "例如这件事",
    "py": "Lìrú zhè jiàn shì",
    "vn": "chẳng hạn việc này"
   },
   {
    "zh": "例如游泳",
    "py": "Lìrú yóuyǒng",
    "vn": "ví dụ như bơi"
   },
   {
    "zh": "例如北京、上海",
    "py": "Lìrú Běijīng, Shànghǎi",
    "vn": "chẳng hạn Bắc Kinh, Thượng Hải"
   }
  ],
  "patterns": [
   {
    "s": "……，例如 + A、B、C",
    "m": "Liệt kê ví dụ"
   },
   {
    "s": "例如 ≈ 比如",
    "m": "比如 khẩu ngữ hơn"
   }
  ],
  "ex_zh": "例如：有些事情，在课本上学不如自己做一遍。",
  "ex_py": "Lìrú: yǒuxiē shìqing, zài kèběn shàngxué bùrú zìjǐ zuò yí biàn.",
  "ex_vn": "Ví dụ: có những việc, học trên sách không bằng tự mình làm một lần.",
  "exList": [
   {
    "zh": "例如：有些事情，在课本上学不如自己做一遍。",
    "py": "Lìrú: yǒuxiē shìqing, zài kèběn shàngxué bùrú zìjǐ zuò yí biàn.",
    "vn": "Ví dụ: có những việc, học trên sách không bằng tự mình làm một lần."
   },
   {
    "zh": "我喜欢很多运动，例如游泳、跑步和打篮球。",
    "py": "Wǒ xǐhuan hěn duō yùndòng, lìrú yóuyǒng, pǎobù hé dǎ lánqiú.",
    "vn": "Tôi thích nhiều môn thể thao, chẳng hạn như bơi, chạy bộ và chơi bóng rổ."
   }
  ],
  "hanzi": [
   {
    "c": "例",
    "p": "lì",
    "type": "左右结构 · Trái-phải",
    "st": 8,
    "ord": "亻 (nhân) trái → 列 (liệt) phải",
    "rad": "亻 (nhân – người)",
    "mean": "ví dụ, trường hợp",
    "tip": "Bộ người 亻 + 列(sắp xếp) → một TRƯỜNG HỢP được sắp xếp ra để minh họa, kết hợp 如(như) thành 例如 = VÍ DỤ NHƯ.",
    "cf": "列 (liè – \"hàng, dãy\", không có bộ 亻\")",
    "w": "例如 / 例子 / 举例"
   },
   {
    "c": "如",
    "p": "rú",
    "type": "左右结构 · Trái-phải",
    "st": 6,
    "ord": "女 (nữ) trái → 口 (khẩu) phải",
    "rad": "女 (nữ – phụ nữ)",
    "mean": "giống như",
    "tip": "Bộ 女(vâng theo lời) + 口(miệng, lời nói) → LÀM THEO LỜI dặn, mở rộng thành GIỐNG NHƯ, kết hợp 比(so sánh) thành 比如 = VÍ DỤ NHƯ (so sánh giống như trường hợp nào đó).",
    "cf": "姑 (gū – \"cô\", bộ 女\")",
    "w": "比如 / 例如 / 如果"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Thực tập có nhiều cái thu hoạch, chẳng hạn tích lũy kinh nghiệm, hiểu xã hội.",
    "answer": "实习有很多收获，例如积累经验、了解社会。",
    "answerPy": "Shíxí yǒu hěn duō shōuhuò, lìrú jīlěi jīngyàn, liǎojiě shèhuì.",
    "note": "例如 + liệt kê.",
    "pair": "例如……"
   },
   {
    "promptLang": "vi",
    "prompt": "Có nhiều cách học tiếng Trung, lấy tôi mà nói, tôi thích xem phim Trung Quốc.",
    "answer": "学中文的方法有很多，拿我来说，我喜欢看中国电影。",
    "answerPy": "Xué Zhōngwén de fāngfǎ yǒu hěn duō, ná wǒ láishuō, wǒ xǐhuan kàn Zhōngguó diànyǐng.",
    "note": "Ôn 拿……来说 (Bài 7 · điểm 3) — cũng dùng để nêu ví dụ.",
    "pair": "拿……来说"
   }
  ]
 },
 {
  "n": 34,
  "zh": "不如",
  "py": "bùrú",
  "pos": "Động từ",
  "vn": "không bằng; chi bằng",
  "hv": "bất như",
  "em": "⚖️",
  "lesson": 4,
  "explain": [
   "So sánh: A 不如 B = A không bằng B (B tốt hơn).",
   "Đề nghị: ……，不如 + V = chi bằng (làm cách khác thì hơn)."
  ],
  "usage": "A不如B (+ Adj) · 不如 + V (đề nghị).",
  "collo": [
   "不如他",
   "不如以前",
   "不如自己做",
   "不如去问问"
  ],
  "colloFull": [
   {
    "zh": "不如他",
    "py": "Bùrú tā",
    "vn": "không bằng anh ấy"
   },
   {
    "zh": "不如以前",
    "py": "Bùrú yǐqián",
    "vn": "không bằng trước đây"
   },
   {
    "zh": "不如自己做",
    "py": "Bùrú zìjǐ zuò",
    "vn": "chẳng bằng tự làm"
   },
   {
    "zh": "不如去问问",
    "py": "Bùrú qù wènwen",
    "vn": "chi bằng đi hỏi thử"
   }
  ],
  "patterns": [
   {
    "s": "A + 不如 + B + (Adj)",
    "m": "Điểm ngữ pháp 4"
   },
   {
    "s": "……，不如 + V + 吧",
    "m": "Chi bằng …"
   }
  ],
  "ex_zh": "例如：有些事情，在课本上学不如自己做一遍。",
  "ex_py": "Lìrú: yǒuxiē shìqing, zài kèběn shàngxué bùrú zìjǐ zuò yí biàn.",
  "ex_vn": "Ví dụ: có những việc, học trên sách không bằng tự mình làm một lần.",
  "exList": [
   {
    "zh": "例如：有些事情，在课本上学不如自己做一遍。",
    "py": "Lìrú: yǒuxiē shìqing, zài kèběn shàngxué bùrú zìjǐ zuò yí biàn.",
    "vn": "Ví dụ: có những việc, học trên sách không bằng tự mình làm một lần."
   },
   {
    "zh": "这家店不如那家店环境好。",
    "py": "Zhè jiā diàn bùrú nà jiā diàn huánjìng hǎo.",
    "vn": "Cửa hàng này môi trường không tốt bằng cửa hàng kia."
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
    "c": "如",
    "p": "rú",
    "type": "左右结构 · Trái-phải",
    "st": 6,
    "ord": "女 (nữ) trái → 口 (khẩu) phải",
    "rad": "女 (nữ – phụ nữ)",
    "mean": "giống như",
    "tip": "Bộ 女(vâng theo lời) + 口(miệng, lời nói) → LÀM THEO LỜI dặn, mở rộng thành GIỐNG NHƯ, kết hợp 比(so sánh) thành 比如 = VÍ DỤ NHƯ (so sánh giống như trường hợp nào đó).",
    "cf": "姑 (gū – \"cô\", bộ 女\")",
    "w": "比如 / 例如 / 如果"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Tôi thấy đi xe buýt không tiện bằng đi tàu điện ngầm.",
    "answer": "我觉得坐公交不如坐地铁方便。",
    "answerPy": "Wǒ juéde zuò gōngjiāo bùrú zuò dìtiě fāngbiàn.",
    "note": "A不如B + Adj (điểm 4).",
    "pair": "A不如B + Adj"
   },
   {
    "promptLang": "vi",
    "prompt": "Đi một mình chi bằng đi cùng mọi người, vừa an toàn vừa vui vẻ.",
    "answer": "一个人去不如跟大家一起去，既安全又开心。",
    "answerPy": "Yí gè rén qù bùrú gēn dàjiā yìqǐ qù, jì ānquán yòu kāixīn.",
    "note": "Ôn 既……又…… (Bài 4 · điểm 3).",
    "pair": "既……又……"
   }
  ]
 },
 {
  "n": 35,
  "zh": "细节",
  "py": "xìjié",
  "pos": "Danh từ",
  "vn": "chi tiết",
  "hv": "tế tiết",
  "em": "🔍",
  "lesson": 4,
  "explain": [
   "Những phần nhỏ, cụ thể của một việc."
  ],
  "usage": "注意细节 · 很多细节 · 生活细节.",
  "collo": [
   "注意细节",
   "很多细节",
   "生活细节",
   "细节问题"
  ],
  "colloFull": [
   {
    "zh": "注意细节",
    "py": "Zhùyì xìjié",
    "vn": "chú ý chi tiết"
   },
   {
    "zh": "很多细节",
    "py": "Hěn duō xìjié",
    "vn": "nhiều chi tiết"
   },
   {
    "zh": "生活细节",
    "py": "Shēnghuó xìjié",
    "vn": "chi tiết trong cuộc sống"
   },
   {
    "zh": "细节问题",
    "py": "Xìjié wèntí",
    "vn": "vấn đề chi tiết"
   }
  ],
  "patterns": [
   {
    "s": "注意 + 细节",
    "m": "Chú ý chi tiết"
   }
  ],
  "ex_zh": "因为只有在做的时候，才会发现有很多细节需要注意。",
  "ex_py": "Yīnwèi zhǐyǒu zài zuò de shíhou, cái huì fāxiàn yǒu hěn duō xìjié xūyào zhùyì.",
  "ex_vn": "Vì chỉ khi làm mới phát hiện có rất nhiều chi tiết cần chú ý.",
  "exList": [
   {
    "zh": "因为只有在做的时候，才会发现有很多细节需要注意。",
    "py": "Yīnwèi zhǐyǒu zài zuò de shíhou, cái huì fāxiàn yǒu hěn duō xìjié xūyào zhùyì.",
    "vn": "Vì chỉ khi làm mới phát hiện có rất nhiều chi tiết cần chú ý."
   },
   {
    "zh": "面试的时候，穿衣服、说话这些细节都很重要。",
    "py": "Miànshì de shíhou, chuān yīfu, shuōhuà zhèxiē xìjié dōu hěn zhòngyào.",
    "vn": "Khi phỏng vấn, những chi tiết như ăn mặc, nói năng đều rất quan trọng."
   }
  ],
  "hanzi": [
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
    "prompt": "Chỉ khi tự làm mới phát hiện có nhiều chi tiết cần chú ý.",
    "answer": "只有自己做的时候，才会发现很多细节需要注意。",
    "answerPy": "Zhǐyǒu zìjǐ zuò de shíhou, cái huì fāxiàn hěn duō xìjié xūyào zhùyì.",
    "note": "Ôn 只有……才…… (HSK 3).",
    "pair": "只有……才……"
   },
   {
    "promptLang": "vi",
    "prompt": "Không thể không chú ý chi tiết, nếu không rất dễ làm sai.",
    "answer": "不能不注意细节，否则很容易出错。",
    "answerPy": "Bù néng bú zhùyì xìjié, fǒuzé hěn róngyì chūcuò.",
    "note": "Ôn 双重否定 不能不 (Bài 12 · điểm 2) + 否则 (Bài 8 · điểm 2).",
    "pair": "不能不……"
   }
  ]
 },
 {
  "n": 36,
  "zh": "答案",
  "py": "dá'àn",
  "pos": "Danh từ",
  "vn": "đáp án, lời giải",
  "hv": "đáp án",
  "em": "🅰️",
  "lesson": 4,
  "explain": [
   "Lời giải đúng của câu hỏi / bài tập; cũng là lời giải cho vấn đề trong cuộc sống."
  ],
  "usage": "找到答案 · 正确答案 · 这道题的答案.",
  "collo": [
   "正确答案",
   "找到答案",
   "标准答案",
   "这道题的答案"
  ],
  "colloFull": [
   {
    "zh": "正确答案",
    "py": "Zhèngquè dá'àn",
    "vn": "đáp án đúng"
   },
   {
    "zh": "找到答案",
    "py": "Zhǎodào dá'àn",
    "vn": "tìm ra đáp án"
   },
   {
    "zh": "标准答案",
    "py": "Biāozhǔn dá'àn",
    "vn": "đáp án chuẩn"
   },
   {
    "zh": "这道题的答案",
    "py": "Zhè dào tí de dá'àn",
    "vn": "đáp án câu này"
   }
  ],
  "patterns": [
   {
    "s": "找 + 到 / 不到 + 答案",
    "m": "Bổ ngữ kết quả / khả năng (HSK 3)"
   },
   {
    "s": "答案 vs 回答",
    "m": "回答 là động từ “trả lời”; 答案 là đáp án"
   }
  ],
  "ex_zh": "还有一些问题，在书上找不到答案，只能通过日常工作慢慢理解。",
  "ex_py": "Hái yǒu yìxiē wèntí, zài shū shàng zhǎobudào dá'àn, zhǐnéng tōngguò rìcháng gōngzuò mànmàn lǐjiě.",
  "ex_vn": "Còn có những vấn đề không tìm được đáp án trong sách, chỉ có thể dần dần hiểu ra qua công việc hằng ngày.",
  "exList": [
   {
    "zh": "还有一些问题，在书上找不到答案，只能通过日常工作慢慢理解。",
    "py": "Hái yǒu yìxiē wèntí, zài shū shàng zhǎobudào dá'àn, zhǐnéng tōngguò rìcháng gōngzuò mànmàn lǐjiě.",
    "vn": "Còn có những vấn đề không tìm được đáp án trong sách, chỉ có thể dần dần hiểu ra qua công việc hằng ngày."
   },
   {
    "zh": "你知道这道题的答案吗？",
    "py": "Nǐ zhīdao zhè dào tí de dá'àn ma?",
    "vn": "Bạn biết đáp án câu này không?"
   }
  ],
  "hanzi": [
   {
    "c": "答",
    "p": "dá",
    "type": "形声字 · Chữ hình thanh",
    "st": 12,
    "ord": "⺮ → 合 (人, nét ngang, 口)",
    "rad": "⺮ (trúc – tre)",
    "mean": "đáp, trả lời",
    "tip": "⺮ (tre) + 合 (hé, chỉ âm; “khớp lại”): xưa viết lên thẻ tre lời đáp khớp với câu hỏi → trả lời. 回答 = đáp lại.",
    "cf": "笔 bǐ (HSK2 Bài 10) — cũng có ⺮ ở trên",
    "w": "回答 / 回答问题"
   },
   {
    "c": "案",
    "p": "àn",
    "type": "上下结构 · Trên-dưới",
    "st": 10,
    "ord": "安 trên → 木 (mộc) dưới",
    "rad": "木 (mộc – cây, bàn gỗ)",
    "mean": "hồ sơ, phương án",
    "tip": "Bộ cây 木 (cái bàn gỗ để viết) + 安(yên ổn, biểu âm) → BÀN LÀM VIỆC để soạn HỒ SƠ/PHƯƠNG ÁN, kết hợp 答(trả lời) thành 答案 = ĐÁP ÁN.",
    "cf": "桉 (ān – \"cây khuynh diệp\", ít dùng)",
    "w": "答案 / 方案 / 案子"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Bạn biết đáp án câu này không? — Biết, tôi đã viết lên giấy rồi.",
    "answer": "你知道这道题的答案吗？——知道，我已经写在纸上了。",
    "answerPy": "Nǐ zhīdao zhè dào tí de dá'àn ma? — Zhīdao, wǒ yǐjīng xiě zài zhǐshàng le.",
    "note": "Bài tập chọn từ của sách (câu 7).",
    "pair": "……的答案"
   },
   {
    "promptLang": "vi",
    "prompt": "Câu hỏi này tôi tìm thế nào cũng không ra đáp án.",
    "answer": "这个问题我怎么找都找不到答案。",
    "answerPy": "Zhège wèntí wǒ zěnme zhǎo dōu zhǎobudào dá'àn.",
    "note": "Ôn 怎么都 + 不 (Bài 13 · điểm 1).",
    "pair": "怎么都……不……"
   }
  ]
 },
 {
  "n": 37,
  "zh": "职业",
  "py": "zhíyè",
  "pos": "Danh từ",
  "vn": "nghề nghiệp",
  "hv": "chức nghiệp",
  "em": "👷",
  "lesson": 4,
  "explain": [
   "Công việc người ta làm lâu dài để kiếm sống; hay đi với 发展 / 方向: 职业发展方向."
  ],
  "usage": "职业发展 · 什么职业 · 职业方向.",
  "collo": [
   "职业发展",
   "职业方向",
   "选择职业",
   "职业习惯"
  ],
  "colloFull": [
   {
    "zh": "职业发展",
    "py": "Zhíyè fāzhǎn",
    "vn": "phát triển nghề nghiệp"
   },
   {
    "zh": "职业方向",
    "py": "Zhíyè fāngxiàng",
    "vn": "định hướng nghề nghiệp"
   },
   {
    "zh": "选择职业",
    "py": "Xuǎnzé zhíyè",
    "vn": "chọn nghề"
   },
   {
    "zh": "职业习惯",
    "py": "Zhíyè xíguàn",
    "vn": "thói quen nghề nghiệp"
   }
  ],
  "patterns": [
   {
    "s": "职业 + 发展 / 方向",
    "m": "Làm định ngữ"
   },
   {
    "s": "职业 vs 工作",
    "m": "职业 = nghề (lâu dài); 工作 = công việc cụ thể"
   }
  ],
  "ex_zh": "在这样的过程中，学生能够对学到的知识有更好的认识，也更清楚自己的职业发展方向。",
  "ex_py": "Zài zhèyàng de guòchéng zhōng, xuésheng nénggòu duì xuédào de zhīshi yǒu gèng hǎo de rènshi, yě gèng qīngchu zìjǐ de zhíyè fāzhǎn fāngxiàng.",
  "ex_vn": "Trong quá trình đó, sinh viên có thể hiểu rõ hơn kiến thức đã học, cũng rõ hơn hướng phát triển nghề nghiệp của mình.",
  "exList": [
   {
    "zh": "在这样的过程中，学生能够对学到的知识有更好的认识，也更清楚自己的职业发展方向。",
    "py": "Zài zhèyàng de guòchéng zhōng, xuésheng nénggòu duì xuédào de zhīshi yǒu gèng hǎo de rènshi, yě gèng qīngchu zìjǐ de zhíyè fāzhǎn fāngxiàng.",
    "vn": "Trong quá trình đó, sinh viên có thể hiểu rõ hơn kiến thức đã học, cũng rõ hơn hướng phát triển nghề nghiệp của mình."
   },
   {
    "zh": "你对自己的职业发展有什么打算？",
    "py": "Nǐ duì zìjǐ de zhíyè fāzhǎn yǒu shénme dǎsuàn?",
    "vn": "Bạn có dự định gì cho sự phát triển nghề nghiệp của mình?"
   }
  ],
  "hanzi": [
   {
    "c": "职",
    "p": "zhí",
    "type": "左右结构 · Trái-phải (giản thể)",
    "st": 11,
    "ord": "耳 (nhĩ) trái → 只 phải",
    "rad": "耳 (nhĩ – tai)",
    "mean": "chức vụ, công việc",
    "tip": "Bộ tai 耳 (lắng nghe, tiếp nhận nhiệm vụ) + 只(biểu âm) → CHỨC VỤ, kết hợp 业(sự nghiệp) thành 职业 = NGHỀ NGHIỆP.",
    "cf": "织 (zhī – \"dệt\", bộ 纟\")",
    "w": "职业 / 职位 / 兼职"
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
    "prompt": "Bạn có dự định gì cho sự phát triển nghề nghiệp? — Tôi muốn vào công ty lớn tích lũy kinh nghiệm trước, rồi tự mở công ty.",
    "answer": "你对自己的职业发展有什么打算？——我希望先去大公司工作，积累一些经验，然后自己开一家公司。",
    "answerPy": "Nǐ duì zìjǐ de zhíyè fāzhǎn yǒu shénme dǎsuàn? — Wǒ xīwàng xiān qù dà gōngsī gōngzuò, jīlěi yìxiē jīngyàn, ránhòu zìjǐ kāi yì jiā gōngsī.",
    "note": "Bài tập chọn từ của sách (câu 11).",
    "pair": "先……然后……"
   },
   {
    "promptLang": "vi",
    "prompt": "Đối với sinh viên, chọn nghề là một việc rất quan trọng.",
    "answer": "对于大学生来说，选择职业是一件很重要的事。",
    "answerPy": "Duìyú dàxuéshēng láishuō, xuǎnzé zhíyè shì yí jiàn hěn zhòngyào de shì.",
    "note": "Ôn 对于……来说 (Bài 14 · điểm 4).",
    "pair": "对于……来说"
   }
  ]
 }
];
var wuData = [
 {
  "img": "/images/hsk4v3/bai-15/wu-A.webp",
  "label": "工厂",
  "py": "gōngchǎng",
  "letter": "A"
 },
 {
  "img": "/images/hsk4v3/bai-15/wu-B.webp",
  "label": "镜子",
  "py": "jìngzi",
  "letter": "B"
 },
 {
  "img": "/images/hsk4v3/bai-15/wu-C.webp",
  "label": "理发",
  "py": "lǐfà",
  "letter": "C"
 },
 {
  "img": "/images/hsk4v3/bai-15/wu-D.webp",
  "label": "面试",
  "py": "miànshì",
  "letter": "D"
 },
 {
  "img": "/images/hsk4v3/bai-15/wu-E.webp",
  "label": "短信",
  "py": "duǎnxìn",
  "letter": "E"
 },
 {
  "img": "/images/hsk4v3/bai-15/wu-F.webp",
  "label": "毕业生",
  "py": "bìyèshēng",
  "letter": "F"
 }
];
var dialogData = [
 {
  "scene": "在陈天中的学校 · Lý Văn đến trường của Trần Thiên Trung, hai người vừa đi vừa trò chuyện",
  "anh": "/images/hsk4v3/bai-15/kv-1.webp",
  "nguoi": [
   {
    "ten": "陈天中",
    "anh": "/images/hsk4v3/nv/chen.webp"
   },
   {
    "ten": "李文",
    "anh": "/images/hsk4v3/nv/liwen.webp"
   }
  ],
  "preQuiz": [
   {
    "q": "李文最近在忙什么？",
    "opts": [
     "去公司应聘",
     "在公司实习",
     "准备期中考试",
     "为毕业做准备"
    ],
    "ans": 0
   },
   {
    "q": "很多单位招聘毕业生时，比较重视什么？",
    "opts": [
     "身体情况",
     "学习成绩",
     "实习经历",
     "毕业的学校"
    ],
    "ans": 2
   }
  ],
  "lines": [
   {
    "sp": 0,
    "zh": "李文，期中考试后就再也没见过你了，你这段时间在忙什么呢？",
    "py": "Lǐ Wén, qīzhōng kǎoshì hòu jiù zài yě méi jiàn guò nǐ le, nǐ zhè duàn shíjiān zài máng shénme ne?",
    "vn": "Lý Văn, từ sau kỳ thi giữa kỳ là không gặp lại cậu nữa, dạo này cậu bận gì thế?"
   },
   {
    "sp": 1,
    "zh": "我最近去一家医药公司应聘了，他们正在招聘实习生。",
    "py": "Wǒ zuìjìn qù yì jiā yīyào gōngsī yìngpìn le, tāmen zhèngzài zhāopìn shíxíshēng.",
    "vn": "Dạo này mình đi ứng tuyển ở một công ty dược, họ đang tuyển thực tập sinh."
   },
   {
    "sp": 0,
    "zh": "你这么早就考虑实习了？",
    "py": "Nǐ zhème zǎojiù kǎolǜ shíxí le?",
    "vn": "Cậu đã tính chuyện thực tập sớm vậy à?"
   },
   {
    "sp": 1,
    "zh": "现在很多单位在招聘毕业生时，都很重视有没有实习经历，所以我想提前去锻炼一下，积累一些经验。",
    "py": "Xiànzài hěn duō dānwèi zài zhāopìn bìyèshēng shí, dōu hěn zhòngshì yǒu méiyǒu shíxí jīnglì, suǒyǐ wǒ xiǎng tíqián qù duànliàn yíxià, jīlěi yìxiē jīngyàn.",
    "vn": "Bây giờ nhiều đơn vị khi tuyển sinh viên tốt nghiệp đều rất coi trọng có kinh nghiệm thực tập hay không, nên mình muốn đi rèn luyện trước một chút, tích lũy ít kinh nghiệm."
   },
   {
    "sp": 0,
    "zh": "那现在有结果了吗？",
    "py": "Nà xiànzài yǒu jiéguǒ le ma?",
    "vn": "Thế bây giờ có kết quả chưa?"
   },
   {
    "sp": 1,
    "zh": "我还在等消息，希望能有好结果。",
    "py": "Wǒ hái zài děng xiāoxi, xīwàng néng yǒu hǎo jiéguǒ.",
    "vn": "Mình vẫn đang chờ tin, mong là có kết quả tốt."
   }
  ]
 },
 {
  "scene": "在校园 · Trong khuôn viên trường, Trần Thiên Trung và Lý Văn vừa đi vừa trò chuyện",
  "anh": "/images/hsk4v3/bai-15/kv-2.webp",
  "nguoi": [
   {
    "ten": "陈天中",
    "anh": "/images/hsk4v3/nv/chen.webp"
   },
   {
    "ten": "李文",
    "anh": "/images/hsk4v3/nv/liwen.webp"
   }
  ],
  "preQuiz": [
   {
    "q": "李文应聘时，第一步做的是什么？",
    "opts": [
     "参加笔试",
     "参加面试",
     "在网上报名",
     "给负责人打电话"
    ],
    "ans": 2
   },
   {
    "q": "公司的笔试主要考什么？",
    "opts": [
     "外语水平",
     "专业知识",
     "兴趣爱好",
     "对工作的想法"
    ],
    "ans": 1
   }
  ],
  "lines": [
   {
    "sp": 0,
    "zh": "李文，你是怎么应聘的？",
    "py": "Lǐ Wén, nǐ shì zěnme yìngpìn de?",
    "vn": "Lý Văn, cậu ứng tuyển như thế nào?"
   },
   {
    "sp": 1,
    "zh": "我先在网上报名，填写个人信息，然后等公司通知我去参加笔试。",
    "py": "Wǒ xiān zài wǎngshang bàomíng, tiánxiě gèrén xìnxī, ránhòu děng gōngsī tōngzhī wǒ qù cānjiā bǐshì.",
    "vn": "Mình đăng ký trên mạng trước, điền thông tin cá nhân, sau đó chờ công ty báo đi thi viết."
   },
   {
    "sp": 0,
    "zh": "笔试都考些什么？",
    "py": "Bǐshì dōu kǎo xiē shénme?",
    "vn": "Thi viết thì thi những gì?"
   },
   {
    "sp": 1,
    "zh": "主要是一些专业知识。考完没多久，他们就让我去面试了。",
    "py": "Zhǔyào shì yìxiē zhuānyè zhīshi. Kǎowán méi duōjiǔ, tāmen jiù ràng wǒ qù miànshì le.",
    "vn": "Chủ yếu là kiến thức chuyên ngành. Thi xong không lâu, họ đã bảo mình đi phỏng vấn."
   },
   {
    "sp": 0,
    "zh": "看来你笔试答得不错，那你面试得怎么样？",
    "py": "Kànlái nǐ bǐshì dá de búcuò, nà nǐ miànshì de zěnmeyàng?",
    "vn": "Xem ra cậu làm bài thi viết khá tốt, thế phỏng vấn thế nào?"
   },
   {
    "sp": 1,
    "zh": "那天是由部门负责人来面试的，我有点儿紧张。他让我介绍了自己的学习经历、兴趣爱好和对工作的想法。",
    "py": "Nàtiān shì yóu bùmén fùzérén lái miànshì de, wǒ yǒudiǎnr jǐnzhāng. Tā ràng wǒ jièshào le zìjǐ de xuéxí jīnglì, xìngqù àihào hé duì gōngzuò de xiǎngfǎ.",
    "vn": "Hôm đó là người phụ trách bộ phận phỏng vấn, mình hơi căng thẳng. Anh ấy bảo mình giới thiệu quá trình học tập, sở thích và suy nghĩ của mình về công việc."
   },
   {
    "sp": 0,
    "zh": "听起来挺正式的。",
    "py": "Tīng qǐlai tǐng zhèngshì de.",
    "vn": "Nghe có vẻ khá trang trọng nhỉ."
   },
   {
    "sp": 1,
    "zh": "是啊，我觉得这次经历很有用。不论结果怎么样，对我以后找工作肯定有帮助。",
    "py": "Shì a, wǒ juéde zhè cì jīnglì hěn yǒuyòng. Búlùn jiéguǒ zěnmeyàng, duì wǒ yǐhòu zhǎo gōngzuò kěndìng yǒu bāngzhù.",
    "vn": "Đúng vậy, mình thấy lần trải nghiệm này rất có ích. Bất kể kết quả thế nào, đối với việc tìm việc sau này của mình chắc chắn đều có ích."
   }
  ]
 },
 {
  "scene": "在家里 · Ở nhà, Lý Văn nhận được tin nhắn công ty gửi đến",
  "anh": "/images/hsk4v3/bai-15/kv-3.webp",
  "nguoi": [
   {
    "ten": "小语",
    "anh": "/images/hsk4v3/nv/xiaoyu.webp"
   }
  ],
  "preQuiz": [
   {
    "q": "李文收到的短信内容是什么？",
    "opts": [
     "他通过面试了",
     "他周末得加班",
     "他明天要开始工作",
     "他下周工作任务多"
    ],
    "ans": 0
   },
   {
    "q": "李文做了什么准备？",
    "opts": [
     "搬到了公司附近",
     "买了一个新手机",
     "买了一身新衣服",
     "去商场买礼物了"
    ],
    "ans": 2
   }
  ],
  "lines": [
   {
    "sp": 0,
    "zh": "一天下午，李文突然收到一条短信，说他通过了面试，让他下周一到公司实习。",
    "py": "Yì tiān xiàwǔ, Lǐ Wén tūrán shōudào yì tiáo duǎnxìn, shuō tā tōngguò le miànshì, ràng tā xià zhōuyī dào gōngsī shíxí.",
    "vn": "Một buổi chiều, Lý Văn bỗng nhận được một tin nhắn, nói cậu ấy đã qua phỏng vấn, bảo thứ Hai tuần sau đến công ty thực tập."
   },
   {
    "sp": 0,
    "zh": "李文看到信息后，激动得把手机扔到床上，在屋子里跳了起来。",
    "py": "Lǐ Wén kàndào xìnxī hòu, jīdòng de bǎ shǒujī rēngdào chuáng shàng, zài wūzi lǐ tiào le qǐlai.",
    "vn": "Đọc tin xong, Lý Văn phấn khích đến mức ném điện thoại lên giường, nhảy cẫng lên trong phòng."
   },
   {
    "sp": 0,
    "zh": "之后的几天，李文忙着做各种准备。",
    "py": "Zhīhòu de jǐ tiān, Lǐ Wén máng zhe zuò gèzhǒng zhǔnbèi.",
    "vn": "Mấy ngày sau đó, Lý Văn tất bật làm đủ thứ chuẩn bị."
   },
   {
    "sp": 0,
    "zh": "为了给大家留个好印象，他去理发店把头发理了理，又去商店买了一身正式的衣服，还打算在镜子前把自我介绍练一练。",
    "py": "Wèile gěi dàjiā liú gè hǎo yìnxiàng, tā qù lǐfàdiàn bǎ tóufa lǐ le lǐ, yòu qù shāngdiàn mǎi le yì shēn zhèngshì de yīfu, hái dǎsuàn zài jìngzi qián bǎ zìwǒ jièshào liàn yi liàn.",
    "vn": "Để để lại ấn tượng tốt với mọi người, cậu ra tiệm cắt tóc sửa lại tóc một chút, lại đi cửa hàng mua một bộ quần áo lịch sự, còn định tập phần tự giới thiệu trước gương một chút."
   },
   {
    "sp": 0,
    "zh": "在他看来，这次实习是一个新的开始。",
    "py": "Zài tā kànlái, zhè cì shíxí shì yí gè xīn de kāishǐ.",
    "vn": "Theo cậu ấy, lần thực tập này là một khởi đầu mới."
   },
   {
    "sp": 0,
    "zh": "他希望不仅能够运用专业知识完成任务，还能够积累更多经验，为将来找工作打下基础。",
    "py": "Tā xīwàng bùjǐn nénggòu yùnyòng zhuānyè zhīshi wánchéng rènwu, hái nénggòu jīlěi gèng duō jīngyàn, wèi jiānglái zhǎo gōngzuò dǎxià jīchǔ.",
    "vn": "Cậu mong không chỉ có thể vận dụng kiến thức chuyên ngành để hoàn thành nhiệm vụ, mà còn có thể tích lũy thêm kinh nghiệm, đặt nền móng cho việc tìm việc sau này."
   }
  ],
  "doan": true
 },
 {
  "scene": "实习的收获 · Thu hoạch từ kỳ thực tập",
  "anh": "/images/hsk4v3/bai-15/kv-4.webp",
  "nguoi": [
   {
    "ten": "小语",
    "anh": "/images/hsk4v3/nv/xiaoyu.webp"
   }
  ],
  "preQuiz": [
   {
    "q": "根据课文，为什么很多大学生要去实习？",
    "opts": [
     "想认识新朋友",
     "便于了解社会",
     "想减轻经济压力",
     "为了达到毕业要求"
    ],
    "ans": 1
   },
   {
    "q": "在实习中，学生们会有什么发现？",
    "opts": [
     "工作比学习更简单",
     "书上的知识没有用",
     "学习时要注意细节",
     "有的问题要慢慢理解"
    ],
    "ans": 3
   }
  ],
  "lines": [
   {
    "sp": 0,
    "zh": "在中国，很多大学生在毕业前都会去实习。",
    "py": "Zài Zhōngguó, hěn duō dàxuéshēng zài bìyè qián dōu huì qù shíxí.",
    "vn": "Ở Trung Quốc, nhiều sinh viên đại học trước khi tốt nghiệp đều đi thực tập."
   },
   {
    "sp": 0,
    "zh": "实习的地方有公司、工厂，也有学校和医院。",
    "py": "Shíxí de dìfang yǒu gōngsī, gōngchǎng, yě yǒu xuéxiào hé yīyuàn.",
    "vn": "Nơi thực tập có công ty, nhà máy, cũng có trường học và bệnh viện."
   },
   {
    "sp": 0,
    "zh": "学生们通过实习，可以积累工作经验，熟悉工作内容和单位的管理规定，提前了解并适应社会。",
    "py": "Xuéshengmen tōngguò shíxí, kěyǐ jīlěi gōngzuò jīngyàn, shúxi gōngzuò nèiróng hé dānwèi de guǎnlǐ guīdìng, tíqián liǎojiě bìng shìyìng shèhuì.",
    "vn": "Thông qua thực tập, sinh viên có thể tích lũy kinh nghiệm làm việc, làm quen với nội dung công việc và quy định quản lý của đơn vị, hiểu và thích nghi với xã hội từ sớm."
   },
   {
    "sp": 0,
    "zh": "在实习中，学生常常会发现，课堂上学到的知识和实际工作并不完全一样。",
    "py": "Zài shíxí zhōng, xuésheng chángcháng huì fāxiàn, kètáng shàng xuédào de zhīshi hé shíjì gōngzuò bìng bu wánquán yíyàng.",
    "vn": "Trong khi thực tập, sinh viên thường phát hiện kiến thức học trên lớp và công việc thực tế không hoàn toàn giống nhau."
   },
   {
    "sp": 0,
    "zh": "例如：有些事情，在课本上学不如自己做一遍，因为只有在做的时候，才会发现有很多细节需要注意；还有一些问题，在书上找不到答案，只能通过日常工作慢慢理解。",
    "py": "Lìrú: yǒuxiē shìqing, zài kèběn shàngxué bùrú zìjǐ zuò yí biàn, yīnwèi zhǐyǒu zài zuò de shíhou, cái huì fāxiàn yǒu hěn duō xìjié xūyào zhùyì; hái yǒu yìxiē wèntí, zài shū shàng zhǎobudào dá'àn, zhǐnéng tōngguò rìcháng gōngzuò mànmàn lǐjiě.",
    "vn": "Ví dụ: có những việc, học trên sách không bằng tự mình làm một lần, vì chỉ khi bắt tay làm mới phát hiện có rất nhiều chi tiết cần chú ý; còn có những vấn đề không tìm được đáp án trong sách, chỉ có thể dần dần hiểu ra qua công việc hằng ngày."
   },
   {
    "sp": 0,
    "zh": "在这样的过程中，学生能够对学到的知识有更好的认识，也更清楚自己的职业发展方向。",
    "py": "Zài zhèyàng de guòchéng zhōng, xuésheng nénggòu duì xuédào de zhīshi yǒu gèng hǎo de rènshi, yě gèng qīngchu zìjǐ de zhíyè fāzhǎn fāngxiàng.",
    "vn": "Trong quá trình đó, sinh viên có thể hiểu rõ hơn những kiến thức đã học, cũng rõ hơn hướng phát triển nghề nghiệp của mình."
   }
  ],
  "doan": true
 }
];
var listenData = [
 {
  "audio": "小林，你最近怎么总是在看手机？我在等一家公司的消息。上周我去应聘了，笔试答得还不错，可是面试的时候有点儿紧张。别担心，你准备得那么认真，肯定没问题。希望吧。不论结果怎么样，这次经历对我都很有帮助。",
  "questions": [
   {
    "q": "小林在等什么？",
    "opts": [
     "朋友的短信",
     "公司的消息",
     "考试成绩"
    ],
    "ans": 1
   },
   {
    "q": "小林面试的时候怎么样？",
    "opts": [
     "答得很好",
     "非常放松",
     "有点儿紧张"
    ],
    "ans": 2
   }
  ]
 },
 {
  "audio": "您好，请问你们公司还在招聘实习生吗？在招聘。你先在网上报名，填写个人信息就可以了。需要参加笔试吗？需要，笔试以后还有面试，面试由我们部门的负责人来做。好的，谢谢您！",
  "questions": [
   {
    "q": "应聘实习生，第一步要做什么？",
    "opts": [
     "在网上报名",
     "参加面试",
     "给负责人打电话"
    ],
    "ans": 0
   },
   {
    "q": "面试由谁来做？",
    "opts": [
     "公司经理",
     "学校老师",
     "部门负责人"
    ],
    "ans": 2
   }
  ]
 },
 {
  "audio": "王明，你在那家工厂实习得怎么样？挺好的，学到了很多课本上没有的东西。我发现在书上看不如自己做一遍，很多细节只有做的时候才能发现。是啊，实习还能让我们更清楚自己的职业方向。",
  "questions": [
   {
    "q": "王明在哪儿实习？",
    "opts": [
     "医院",
     "工厂",
     "学校"
    ],
    "ans": 1
   },
   {
    "q": "王明觉得怎么学更好？",
    "opts": [
     "自己做一遍",
     "在书上看",
     "问老师"
    ],
    "ans": 0
   }
  ]
 }
];
var matchData = [
 {
  "left": "招聘",
  "right": "实习生"
 },
 {
  "left": "填写",
  "right": "个人信息"
 },
 {
  "left": "积累",
  "right": "工作经验"
 },
 {
  "left": "参加",
  "right": "笔试"
 },
 {
  "left": "运用",
  "right": "专业知识"
 },
 {
  "left": "注意",
  "right": "细节"
 },
 {
  "left": "部门",
  "right": "负责人"
 },
 {
  "left": "收到",
  "right": "一条短信"
 },
 {
  "left": "留个",
  "right": "好印象"
 }
];
var fillData = [
 {
  "pre": "期中考试后就",
  "blank": "再也",
  "post": "没见过你了。",
  "hint": "(không … nữa)",
  "ans": "再也",
  "exp": "再也 + 没 + V过: từ đó đến nay không … nữa."
 },
 {
  "pre": "他们正在",
  "blank": "招聘",
  "post": "实习生。",
  "hint": "(tuyển dụng)",
  "ans": "招聘",
  "exp": "招聘 = công ty tuyển người; 应聘 = người đi xin việc."
 },
 {
  "pre": "很多单位都很重视有没有实习",
  "blank": "经历",
  "post": "。",
  "hint": "(kinh nghiệm đã trải qua)",
  "ans": "经历",
  "exp": "实习经历 = quá trình / kinh nghiệm thực tập."
 },
 {
  "pre": "我还在等",
  "blank": "消息",
  "post": "，希望能有好结果。",
  "hint": "(tin tức)",
  "ans": "消息",
  "exp": "等消息 = chờ tin."
 },
 {
  "pre": "我先在网上报名，",
  "blank": "填写",
  "post": "个人信息。",
  "hint": "(điền)",
  "ans": "填写",
  "exp": "填写 + 信息 / 表格."
 },
 {
  "pre": "那天是",
  "blank": "由",
  "post": "部门负责人来面试的。",
  "hint": "(do ai làm)",
  "ans": "由",
  "exp": "由 + người + 来 + V."
 },
 {
  "pre": "",
  "blank": "不论",
  "post": "结果怎么样，对我以后找工作肯定有帮助。",
  "hint": "(bất kể)",
  "ans": "不论",
  "exp": "不论……，都 / 也……"
 },
 {
  "pre": "李文激动得把手机",
  "blank": "扔",
  "post": "到床上。",
  "hint": "(ném)",
  "ans": "扔",
  "exp": "把 + O + 扔到 + nơi chốn."
 },
 {
  "pre": "他去理发店把头发",
  "blank": "理了理",
  "post": "。",
  "hint": "(sửa qua một chút — việc đã làm)",
  "ans": "理了理",
  "exp": "把 + O + V了V (điểm 3)."
 },
 {
  "pre": "有些事情，在课本上学",
  "blank": "不如",
  "post": "自己做一遍。",
  "hint": "(không bằng)",
  "ans": "不如",
  "exp": "A不如B (điểm 4)."
 }
];
var sortData = [
 {
  "words": [
   "期中考试后",
   "就",
   "再也没",
   "见过",
   "你了",
   "。"
  ],
  "ans": "期中考试后就再也没见过你了。",
  "audio": "期中考试后就再也没见过你了。"
 },
 {
  "words": [
   "那天",
   "是",
   "由",
   "部门负责人",
   "来",
   "面试",
   "的",
   "。"
  ],
  "ans": "那天是由部门负责人来面试的。",
  "audio": "那天是由部门负责人来面试的。"
 },
 {
  "words": [
   "他",
   "去理发店",
   "把",
   "头发",
   "理了理",
   "。"
  ],
  "ans": "他去理发店把头发理了理。",
  "audio": "他去理发店把头发理了理。"
 },
 {
  "words": [
   "在课本上学",
   "不如",
   "自己",
   "做一遍",
   "。"
  ],
  "ans": "在课本上学不如自己做一遍。",
  "audio": "在课本上学不如自己做一遍。"
 },
 {
  "words": [
   "我",
   "先",
   "在网上",
   "报名",
   "，",
   "然后",
   "等",
   "公司",
   "通知我",
   "。"
  ],
  "ans": "我先在网上报名，然后等公司通知我。",
  "audio": "我先在网上报名，然后等公司通知我。"
 },
 {
  "words": [
   "学生们",
   "通过",
   "实习",
   "，",
   "可以",
   "积累",
   "工作经验",
   "。"
  ],
  "ans": "学生们通过实习，可以积累工作经验。",
  "audio": "学生们通过实习，可以积累工作经验。"
 }
];
var mcData = [
 {
  "q": "期中考试后就再也＿＿见过你了。",
  "opts": [
   "不",
   "别",
   "没",
   "也"
  ],
  "ans": 2,
  "exp": "Kể việc từ quá khứ đến nay, có 过 → 再也没."
 },
 {
  "q": "对不起，我以后再也＿＿迟到了。",
  "opts": [
   "不",
   "没",
   "别",
   "还"
  ],
  "ans": 0,
  "exp": "Lời hứa về tương lai → 再也不."
 },
 {
  "q": "那天是＿＿部门负责人来面试的。",
  "opts": [
   "由于",
   "被",
   "从",
   "由"
  ],
  "ans": 3,
  "exp": "由 dẫn ra người thực hiện; 由于 chỉ nguyên nhân."
 },
 {
  "q": "你先把作业＿＿，然后再交给老师。",
  "opts": [
   "检查",
   "检查检查",
   "检查一检查",
   "检查了检查了"
  ],
  "ans": 1,
  "exp": "把 + O + ABAB; động từ hai âm tiết không chen 一."
 },
 {
  "q": "坐公交要换两次车，我觉得坐公交＿＿坐地铁方便。",
  "opts": [
   "不如",
   "比",
   "跟",
   "被"
  ],
  "ans": 0,
  "exp": "A不如B + Adj = A không … bằng B."
 },
 {
  "q": "＿＿结果怎么样，这次经历对我都很有帮助。",
  "opts": [
   "虽然",
   "不论",
   "因为",
   "即使"
  ],
  "ans": 1,
  "exp": "不论 + từ nghi vấn (怎么样)，都……"
 },
 {
  "q": "现在很多单位在＿＿毕业生时，都很重视实习经历。",
  "opts": [
   "应聘",
   "报名",
   "招聘",
   "面试"
  ],
  "ans": 2,
  "exp": "Đơn vị tuyển người → 招聘."
 },
 {
  "q": "我先在网上报名，＿＿个人信息。",
  "opts": [
   "填写",
   "运用",
   "考虑",
   "规定"
  ],
  "ans": 0,
  "exp": "填写 + 信息 / 表格."
 },
 {
  "q": "只有在做的时候，才会发现有很多＿＿需要注意。",
  "opts": [
   "答案",
   "细节",
   "职业",
   "课堂"
  ],
  "ans": 1,
  "exp": "注意细节 = chú ý chi tiết."
 },
 {
  "q": "他希望能够＿＿专业知识完成任务。",
  "opts": [
   "激动",
   "扔",
   "运用",
   "理发"
  ],
  "ans": 2,
  "exp": "运用 + 知识 = vận dụng kiến thức."
 }
];
var speakingData = {
 "intro": "Nhấn nút loa nghe câu hỏi (câu hỏi phần Khởi động, câu hỏi đọc hiểu của 4 bài khoá, kể lại bài khoá và đóng vai phỏng vấn), rồi tự ghi âm câu trả lời — cố dùng từ mới và 4 điểm ngữ pháp của bài.",
 "questions": [
  {
   "q_zh": "你以前实习过吗？是在哪儿实习的？",
   "q_vn": "Trước đây bạn đã thực tập chưa? Thực tập ở đâu?",
   "hint": "我实习过 / 还没实习过。我是在……实习的，……",
   "sample": "我实习过一次。去年暑假，我是在一家贸易公司实习的，实习了两个月左右。在那里，我不仅积累了一些工作经验，还了解了公司的管理规定。",
   "sample_vn": "Tôi đã thực tập một lần. Hè năm ngoái tôi thực tập ở một công ty thương mại, khoảng hai tháng. Ở đó tôi không chỉ tích lũy được ít kinh nghiệm làm việc mà còn hiểu được quy định quản lý của công ty.",
   "note": "Câu hỏi phần Khởi động của sách; ôn 左右 (Bài 13), 不仅……还…… (Bài 3)."
  },
  {
   "q_zh": "你觉得面试的时候需要注意哪些方面？",
   "q_vn": "Bạn thấy khi phỏng vấn cần chú ý những mặt nào?",
   "hint": "首先……，其次……，另外……",
   "sample": "我觉得首先要穿得正式一点儿，给面试官留个好印象；其次要提前把自我介绍练一练，回答问题的时候不要太紧张；另外，还要了解一下公司的情况，注意说话的细节。",
   "sample_vn": "Tôi nghĩ trước hết phải ăn mặc trang trọng một chút, để lại ấn tượng tốt cho người phỏng vấn; thứ hai là tập trước phần tự giới thiệu, khi trả lời đừng quá căng thẳng; ngoài ra còn phải tìm hiểu tình hình công ty, chú ý chi tiết khi nói.",
   "note": "Câu hỏi phần Khởi động; ôn 首先……其次…… (Bài 14), 把……V一V (điểm 3)."
  },
  {
   "q_zh": "李文为什么现在就想去实习？他应聘成功了吗？",
   "q_vn": "Vì sao Lý Văn bây giờ đã muốn đi thực tập? Cậu ấy ứng tuyển thành công chưa?",
   "hint": "因为现在很多单位……，所以他想……。他还在……",
   "sample": "因为现在很多单位在招聘毕业生时，都很重视有没有实习经历，所以他想提前去锻炼一下，积累一些经验。现在还不知道结果，他还在等消息。",
   "sample_vn": "Vì bây giờ nhiều đơn vị khi tuyển sinh viên tốt nghiệp đều rất coi trọng kinh nghiệm thực tập, nên cậu ấy muốn đi rèn luyện trước, tích lũy ít kinh nghiệm. Hiện chưa biết kết quả, cậu ấy vẫn đang chờ tin.",
   "note": "Câu hỏi đọc hiểu bài khoá 1."
  },
  {
   "q_zh": "请根据提示复述课文一。",
   "q_vn": "Dựa vào gợi ý, kể lại bài khoá 1.",
   "hint": "陈天中很久没有……。他问李文这段时间……。李文说他最近去……，因为那家公司……。他觉得现在很多单位……，所以他想提前……。李文说他还在……，希望……。",
   "sample": "陈天中很久没有见到李文了。他问李文这段时间在忙什么。李文说他最近去一家医药公司应聘了，因为那家公司正在招聘实习生。他觉得现在很多单位在招聘毕业生时，都很重视有没有实习经历，所以他想提前去锻炼一下，积累一些经验。陈天中又问李文现在有没有结果。李文说他还在等消息，希望能有好结果。",
   "sample_vn": "Trần Thiên Trung lâu rồi không gặp Lý Văn. Cậu hỏi dạo này Lý Văn bận gì. Lý Văn nói gần đây đi ứng tuyển ở một công ty dược vì công ty đó đang tuyển thực tập sinh… Lý Văn nói vẫn đang chờ tin, mong có kết quả tốt.",
   "note": "Bài tập 复述 của sách (trang 52)."
  },
  {
   "q_zh": "李文面试的内容是什么？他觉得这次应聘经历怎么样？",
   "q_vn": "Nội dung buổi phỏng vấn của Lý Văn là gì? Cậu ấy thấy lần ứng tuyển này thế nào?",
   "hint": "那天是由……来面试的，他让李文介绍了……。李文觉得……，不论……，都……",
   "sample": "那天是由部门负责人来面试的，他让李文介绍了自己的学习经历、兴趣爱好和对工作的想法。李文觉得这次经历很有用，不论结果怎么样，对他以后找工作肯定有帮助。",
   "sample_vn": "Hôm đó người phụ trách bộ phận phỏng vấn, bảo Lý Văn giới thiệu quá trình học tập, sở thích và suy nghĩ về công việc. Lý Văn thấy trải nghiệm này rất có ích, bất kể kết quả thế nào, chắc chắn có ích cho việc tìm việc sau này.",
   "note": "Câu hỏi đọc hiểu bài khoá 2; dùng 由 (điểm 2)."
  },
  {
   "q_zh": "李文看到信息后做什么了？他是怎么看这次实习的？",
   "q_vn": "Đọc tin xong Lý Văn đã làm gì? Cậu ấy nhìn nhận lần thực tập này thế nào?",
   "hint": "他激动得……。为了……，他把……V了V……。在他看来，……",
   "sample": "他激动得把手机扔到床上，在屋子里跳了起来。为了给大家留个好印象，他去理发店把头发理了理，又买了一身正式的衣服。在他看来，这次实习是一个新的开始，他希望能够运用专业知识完成任务，积累更多经验。",
   "sample_vn": "Cậu ấy phấn khích đến mức ném điện thoại lên giường, nhảy cẫng lên trong phòng. Để để lại ấn tượng tốt, cậu đi cắt sửa tóc, mua một bộ quần áo lịch sự. Theo cậu, lần thực tập này là một khởi đầu mới; cậu mong vận dụng được kiến thức chuyên ngành để hoàn thành nhiệm vụ, tích lũy thêm kinh nghiệm.",
   "note": "Câu hỏi đọc hiểu bài khoá 3; dùng 把……V了V (điểm 3)."
  },
  {
   "q_zh": "请根据提示复述课文三。",
   "q_vn": "Dựa vào gợi ý, kể lại bài khoá 3.",
   "hint": "李文收到了一条短信，告诉他……。他看到信息后，激动得……。为了给大家……，他去理发店……，又去商店……，还打算……。他觉得这次实习是……。他希望不仅能够……，还能够……",
   "sample": "李文收到了一条短信，告诉他通过了面试，让他下周一到公司实习。他看到信息后，激动得把手机扔到床上，在屋子里跳了起来。为了给大家留个好印象，他去理发店把头发理了理，又去商店买了一身正式的衣服，还打算在镜子前把自我介绍练一练。他觉得这次实习是一个新的开始。他希望不仅能够运用专业知识完成任务，还能够积累更多经验，为将来找工作打下基础。",
   "sample_vn": "Lý Văn nhận được một tin nhắn báo cậu đã qua phỏng vấn, thứ Hai tuần sau đến công ty thực tập… Cậu mong không chỉ vận dụng được kiến thức chuyên ngành mà còn tích lũy thêm kinh nghiệm, đặt nền móng cho việc tìm việc sau này.",
   "note": "Bài tập 复述 của sách (trang 56)."
  },
  {
   "q_zh": "通过实习，学生可以学到什么？为什么说有些事情需要自己做一遍？",
   "q_vn": "Thông qua thực tập, sinh viên học được gì? Vì sao nói có những việc cần tự mình làm một lần?",
   "hint": "学生可以……，熟悉……，提前……。因为只有在做的时候，才……",
   "sample": "通过实习，学生可以积累工作经验，熟悉工作内容和单位的管理规定，提前了解并适应社会。有些事情在课本上学不如自己做一遍，因为只有在做的时候，才会发现有很多细节需要注意。",
   "sample_vn": "Qua thực tập, sinh viên có thể tích lũy kinh nghiệm làm việc, làm quen nội dung công việc và quy định quản lý của đơn vị, hiểu và thích nghi với xã hội sớm. Có những việc học trên sách không bằng tự làm một lần, vì chỉ khi làm mới phát hiện nhiều chi tiết cần chú ý.",
   "note": "Câu hỏi đọc hiểu bài khoá 4; dùng A不如B (điểm 4)."
  },
  {
   "q_zh": "角色扮演：两人一组，一人扮演面试官，一人扮演应聘者，模拟面试的过程。面试官可以询问应聘者的学习经历，了解其能力和想法；应聘者可以介绍自己的基本情况，说明应聘的原因，并谈谈自己的优缺点。",
   "q_vn": "Đóng vai: nhóm hai người, một người làm người phỏng vấn, một người làm ứng viên, mô phỏng buổi phỏng vấn. Người phỏng vấn có thể hỏi về quá trình học tập của ứng viên, tìm hiểu năng lực và suy nghĩ của họ; ứng viên giới thiệu tình hình bản thân, nói lý do ứng tuyển và nói về ưu, khuyết điểm của mình.",
   "hint": "面试官：请先做一个简单的自我介绍。/ 你为什么来应聘？/ 你有什么优点和缺点？ 应聘者：我叫……，是……专业的学生。我来应聘，一方面……，另一方面……。我的优点是……，缺点是……，不过……",
   "sample": "面试官：你好，请坐。今天的面试由我来负责。请你先做一个简单的自我介绍吧。应聘者：您好！我叫阮明，是河内大学国际贸易专业的大三学生。我学了三年中文，已经能够和中国人进行简单的交流了。面试官：你为什么来我们公司应聘？应聘者：一方面，贵公司是一家国际公司，有很多机会运用我的专业知识；另一方面，我想提前积累一些工作经验，为将来的职业发展打下基础。面试官：你以前有过实习经历吗？应聘者：有过。去年暑假我在一家工厂实习了两个月，主要负责翻译工作。在那儿我发现，有些事情在课本上学不如自己做一遍。面试官：那你觉得自己有什么优点和缺点？应聘者：我的优点是认真，很注意细节，不论多忙，都会把工作检查检查再交。缺点是有时候说话太快，不过我现在每天都在镜子前练一练，已经好多了。面试官：好的，请回去等消息吧。应聘者：谢谢您！",
   "sample_vn": "Người PV: Chào bạn, mời ngồi. Hôm nay tôi phụ trách phỏng vấn. Bạn tự giới thiệu ngắn gọn trước nhé. Ứng viên: Chào anh/chị! Em tên Nguyễn Minh, sinh viên năm ba ngành thương mại quốc tế Đại học Hà Nội. Em đã học tiếng Trung ba năm, có thể giao tiếp đơn giản với người Trung Quốc. Người PV: Vì sao bạn ứng tuyển vào công ty chúng tôi? Ứng viên: Một mặt, quý công ty là công ty quốc tế, có nhiều cơ hội vận dụng kiến thức chuyên ngành của em; mặt khác, em muốn tích lũy kinh nghiệm làm việc sớm, đặt nền móng cho sự phát triển nghề nghiệp sau này. Người PV: Trước đây bạn đã từng thực tập chưa? Ứng viên: Rồi ạ. Hè năm ngoái em thực tập hai tháng ở một nhà máy, chủ yếu phụ trách phiên dịch. Ở đó em thấy có những việc học trên sách không bằng tự làm một lần. Người PV: Vậy bạn thấy mình có ưu điểm, khuyết điểm gì? Ứng viên: Ưu điểm của em là cẩn thận, rất chú ý chi tiết, bận đến mấy cũng kiểm tra lại công việc rồi mới nộp. Khuyết điểm là đôi khi nói quá nhanh, nhưng giờ ngày nào em cũng tập trước gương, đã đỡ nhiều rồi. Người PV: Được rồi, bạn về chờ tin nhé. Ứng viên: Em cảm ơn anh/chị!",
   "note": "Hoạt động 任务活动 · 角色扮演 (đóng vai phỏng vấn) của sách, trang 60 — dùng 由, 把……VV, 不如, 不论 cùng từ mới về ứng tuyển; ôn 一方面……另一方面…… (Bài 1)."
  }
 ]
};
var translateData = [
 {
  "vi": "Từ sau kỳ thi giữa kỳ là không gặp lại cậu nữa.",
  "zh": "期中考试后就再也没见过你了。",
  "py": "Qīzhōng kǎoshì hòu jiù zài yě méi jiàn guò nǐ le."
 },
 {
  "vi": "Bây giờ nhiều đơn vị khi tuyển sinh viên tốt nghiệp đều rất coi trọng kinh nghiệm thực tập.",
  "zh": "现在很多单位在招聘毕业生时，都很重视实习经历。",
  "py": "Xiànzài hěn duō dānwèi zài zhāopìn bìyèshēng shí, dōu hěn zhòngshì shíxí jīnglì."
 },
 {
  "vi": "Hôm đó là người phụ trách bộ phận đến phỏng vấn, tôi hơi căng thẳng.",
  "zh": "那天是由部门负责人来面试的，我有点儿紧张。",
  "py": "Nàtiān shì yóu bùmén fùzérén lái miànshì de, wǒ yǒudiǎnr jǐnzhāng."
 },
 {
  "vi": "Bất kể kết quả thế nào, trải nghiệm này chắc chắn có ích cho việc tìm việc sau này của tôi.",
  "zh": "不论结果怎么样，这次经历对我以后找工作肯定有帮助。",
  "py": "Búlùn jiéguǒ zěnmeyàng, zhè cì jīnglì duì wǒ yǐhòu zhǎo gōngzuò kěndìng yǒu bāngzhù."
 },
 {
  "vi": "Cậu ấy ra tiệm cắt tóc sửa lại tóc một chút.",
  "zh": "他去理发店把头发理了理。",
  "py": "Tā qù lǐfàdiàn bǎ tóufa lǐ le lǐ."
 },
 {
  "vi": "Có những việc, học trên sách không bằng tự mình làm một lần.",
  "zh": "有些事情，在课本上学不如自己做一遍。",
  "py": "Yǒuxiē shìqing, zài kèběn shàngxué bùrú zìjǐ zuò yí biàn."
 }
];
var translateDataRev = [
 {
  "vi": "Mình vẫn đang chờ tin, mong là có kết quả tốt.",
  "zh": "我还在等消息，希望能有好结果。",
  "py": "Wǒ hái zài děng xiāoxi, xīwàng néng yǒu hǎo jiéguǒ."
 },
 {
  "vi": "Mình đăng ký trên mạng trước, điền thông tin cá nhân, sau đó chờ công ty báo đi thi viết.",
  "zh": "我先在网上报名，填写个人信息，然后等公司通知我去参加笔试。",
  "py": "Wǒ xiān zài wǎngshang bàomíng, tiánxiě gèrén xìnxī, ránhòu děng gōngsī tōngzhī wǒ qù cānjiā bǐshì."
 },
 {
  "vi": "Lý Văn phấn khích đến mức ném điện thoại lên giường.",
  "zh": "李文激动得把手机扔到床上。",
  "py": "Lǐ Wén jīdòng de bǎ shǒujī rēngdào chuáng shàng."
 },
 {
  "vi": "Thông qua thực tập, sinh viên có thể tích lũy kinh nghiệm làm việc.",
  "zh": "学生们通过实习，可以积累工作经验。",
  "py": "Xuéshengmen tōngguò shíxí, kěyǐ jīlěi gōngzuò jīngyàn."
 },
 {
  "vi": "Sinh viên cũng rõ hơn hướng phát triển nghề nghiệp của mình.",
  "zh": "学生也更清楚自己的职业发展方向。",
  "py": "Xuésheng yě gèng qīngchu zìjǐ de zhíyè fāzhǎn fāngxiàng."
 }
];
var sgkData = [
 {
  "kieu": "kho",
  "de": "选词填空（一）· 综合练习",
  "vn": "Chọn từ thích hợp điền vào chỗ trống (Bài tập tổng hợp, sách trang 58). Sách 4下 chưa có đáp án — đây là đáp án tham khảo.",
  "dapSgk": false,
  "tu": [
   "考虑",
   "笔试",
   "不论",
   "消息",
   "肯定",
   "负责人"
  ],
  "cau": [
   {
    "s": "你这么努力，这次考试＿＿能通过。",
    "dap": [
     "肯定"
    ]
   },
   {
    "s": "您有什么问题，可以直接跟＿＿联系。",
    "dap": [
     "负责人"
    ]
   },
   {
    "s": "＿＿你同不同意，我都会按照计划去做。",
    "dap": [
     "不论"
    ]
   },
   {
    "s": "这件事比较重要，我需要再认真＿＿一下。",
    "dap": [
     "考虑"
    ]
   },
   {
    "s": "我们要先进行＿＿，了解一下大家的专业能力。",
    "dap": [
     "笔试"
    ]
   },
   {
    "s": "我已经等了好几天了，还是没有收到他的＿＿。",
    "dap": [
     "消息"
    ]
   }
  ]
 },
 {
  "kieu": "kho",
  "de": "选词填空（二）· 综合练习",
  "vn": "Chọn từ thích hợp điền vào chỗ trống (hội thoại, sách trang 59).",
  "dapSgk": false,
  "tu": [
   "能够",
   "理发",
   "答案",
   "工厂",
   "激动",
   "职业"
  ],
  "cau": [
   {
    "s": "A：你知道这道题的＿＿吗？　B：知道，我已经写在纸上了。",
    "dap": [
     "答案"
    ]
   },
   {
    "s": "A：听说你获得奖学金了？　B：是的，我＿＿得昨天晚上都没睡好。",
    "dap": [
     "激动"
    ]
   },
   {
    "s": "A：你现在中文说得怎么样了？　B：我已经＿＿和中国朋友进行简单交流了。",
    "dap": [
     "能够"
    ]
   },
   {
    "s": "A：下午我去＿＿，你想跟我一起去吗？　B：好啊，我最近头发有点儿长了，正好下午有时间。",
    "dap": [
     "理发"
    ]
   },
   {
    "s": "A：你对自己的＿＿发展有什么打算？　B：我希望先去大公司工作，积累一些经验，然后自己开一家公司。",
    "dap": [
     "职业"
    ]
   },
   {
    "s": "A：听说你哥哥换工作了，他现在在哪儿工作？　B：他现在在一家＿＿工作，主要负责检查产品的质量。",
    "dap": [
     "工厂"
    ]
   }
  ]
 },
 {
  "kieu": "kho",
  "de": "选择合适的内容完成短文",
  "vn": "Chọn nội dung thích hợp (A–D) hoàn thành đoạn văn.",
  "dapSgk": false,
  "tu": [
   "面试结束后",
   "练习介绍自己的学习经历",
   "不仅让他了解了应聘的过程",
   "他在网上看到了几条招聘信息"
  ],
  "cau": [
   {
    "s": "王明是一名大三学生，最近正在找实习机会。＿＿，选了一家自己感兴趣的单位报名。为了顺利通过面试，他提前准备了很多内容，比如了解公司的情况，＿＿。面试那天，他刚开始有点儿紧张，不过慢慢放松了一些。＿＿，他觉得自己的表现没有那么好。虽然最后没有通过面试，但是他认为这次应聘的经历很有用，＿＿，也让他在交流方面更有信心（xìnxīn, sự tự tin）了。",
    "dap": [
     "他在网上看到了几条招聘信息",
     "练习介绍自己的学习经历",
     "面试结束后",
     "不仅让他了解了应聘的过程"
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
    "anh": "/images/hsk4v3/bai-15/bt-1.webp",
    "s": "",
    "tu": "扔",
    "dap": "他把喝完的瓶子扔进了垃圾桶。",
    "giai": "把 + O + 扔进 / 扔到 + nơi chốn (câu chữ 把 với bổ ngữ nơi chốn)."
   },
   {
    "anh": "/images/hsk4v3/bai-15/bt-2.webp",
    "s": "",
    "tu": "答案",
    "dap": "她想了很久，还是不知道这道题的答案。",
    "giai": "这道题的答案 — lượng từ 道 cho câu hỏi, bài tập."
   },
   {
    "anh": "/images/hsk4v3/bai-15/bt-3.webp",
    "s": "",
    "tu": "激动",
    "dap": "他收到了公司的短信，激动得跳了起来。",
    "giai": "激动得 + V: bổ ngữ trạng thái chỉ mức độ (giống câu của bài khoá 3)."
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
  "tieuDe": "Viết danh sách lời khuyên ứng tuyển (写作)",
  "gioiThieu": "Đề 写作 của bài này yêu cầu viết một 「应聘建议清单」 — danh sách lời khuyên cho người bạn sắp đi phỏng vấn ở công ty quốc tế, dựa vào nội dung vừa đóng vai phỏng vấn (ít nhất 140 chữ). Đây là dạng văn thực dụng, giống phần 书写 của đề thi HSK 4 mới.",
  "buoc": [
   "Đọc kỹ đề: người đọc là BẠN của em, sắp đi ứng tuyển ở công ty quốc tế; mục đích là đưa ra lời khuyên thiết thực.",
   "Lập dàn ý theo trình tự ứng tuyển: trước khi đăng ký → thi viết → chuẩn bị phỏng vấn → trong buổi phỏng vấn → thái độ với kết quả. Mỗi bước là một mục trong danh sách.",
   "Dùng từ mới (报名、填写、笔试、面试、负责人、自我介绍、细节…) và 4 điểm ngữ pháp: 把……V一V, 由……来……, A不如B, 再也不/没.",
   "Đánh số các mục (一、二、三…) hoặc dùng 首先 / 其次 / 另外 / 最后 (Bài 14) để danh sách rõ ràng.",
   "Mở đầu bằng lời gọi tên bạn và lý do viết; kết thúc bằng lời động viên (不论结果怎么样…, 祝你成功!); tự soát số chữ (≥ 140) và lỗi chữ Hán."
  ]
 },
 "de": "你的一个朋友要去一家国际公司应聘。请你根据上面表演的内容，给他/她写一份应聘建议清单，不少于140字。",
 "prompt": "Một người bạn của em sắp đi ứng tuyển ở một công ty quốc tế. Hãy dựa vào nội dung vừa đóng vai ở trên, viết cho bạn ấy một danh sách lời khuyên khi ứng tuyển, không ít hơn 140 chữ.",
 "dan": [
  {
   "hoi": "报名以前要做什么准备？",
   "goiY": "先把公司的情况了解了解，例如……；在网上填写个人信息时……"
  },
  {
   "hoi": "笔试一般考什么？怎么准备？",
   "goiY": "笔试主要考专业知识，可以把……复习复习"
  },
  {
   "hoi": "面试一般由谁来面试？会问什么？",
   "goiY": "面试一般由部门负责人来……，他会让你介绍……"
  },
  {
   "hoi": "面试那天要注意哪些细节？",
   "goiY": "穿得正式一点儿，理理发；一个人练不如……；在镜子前把自我介绍……"
  },
  {
   "hoi": "你自己有什么经验或教训？最后想对朋友说什么？",
   "goiY": "上次我……，从那以后我再也不……了。不论结果怎么样……，祝你成功！"
  }
 ],
 "tuNen": [
  "应聘",
  "招聘",
  "报名",
  "填写",
  "笔试",
  "面试",
  "负责人",
  "部门",
  "自我介绍",
  "经历",
  "细节",
  "肯定"
 ],
 "cauTruc": [
  {
   "ten": "把 + O + V一V / VV",
   "nhan": "把",
   "vd": "报名以前，先把公司的情况了解了解。",
   "khi": "Đưa lời khuyên làm một việc nhỏ, nhẹ nhàng."
  },
  {
   "ten": "由……来……",
   "nhan": "由",
   "vd": "面试一般由部门负责人来做。",
   "khi": "Giới thiệu ai sẽ phỏng vấn / phụ trách."
  },
  {
   "ten": "A不如B (+ Adj)",
   "nhan": "不如",
   "vd": "一个人在家练不如请朋友帮你听听。",
   "khi": "So sánh hai cách chuẩn bị, khuyên cách tốt hơn."
  },
  {
   "ten": "再也不 / 再也没……",
   "nhan": "再也",
   "vd": "上次面试我迟到了，从那以后我再也不敢晚出门了。",
   "khi": "Kể bài học kinh nghiệm của bản thân."
  },
  {
   "ten": "不论……，都……",
   "nhan": "不论",
   "vd": "不论结果怎么样，这次经历对你都肯定有帮助。",
   "khi": "Câu KẾT: động viên bạn."
  }
 ],
 "checklist": [
  "Đủ ít nhất 140 chữ Hán chưa?",
  "Có lời gọi tên bạn ở đầu, lời chúc ở cuối, và các lời khuyên được đánh số / sắp theo trình tự (đăng ký → thi viết → phỏng vấn) chưa?",
  "Đã dùng ít nhất 3 trong 4 điểm ngữ pháp của bài (再也不/没、由、把……V一V/V了V、A不如B) chưa?",
  "Đã dùng ít nhất 6 từ mới của bài chưa?",
  "Lời khuyên có cụ thể, thiết thực cho việc ứng tuyển ở công ty quốc tế chưa?"
 ],
 "model": {
  "zh": "安妮：听说你要去一家国际公司应聘，我根据上次我们一起练习面试的经验，给你写了几条建议。一、报名以前，先把公司的情况了解了解，例如公司主要做什么、在招聘什么样的人。二、在网上填写个人信息的时候要认真，最好把每一项都检查检查再提交。三、笔试主要考专业知识，你可以把学过的内容复习复习。四、面试一般由部门负责人来做，他会让你介绍自己的学习经历、实习经历和对工作的想法。一个人在家练不如请朋友帮你听听，你也可以在镜子前把自我介绍练一练。五、面试那天要穿得正式一点儿，注意细节，回答问题时别太紧张。上次面试我迟到了五分钟，从那以后我再也不敢晚出门了，所以你一定要早点儿出发。不论结果怎么样，这次经历对你都肯定有帮助。祝你成功！",
  "py": "Ānní: tīngshuō nǐ yào qù yì jiā guójì gōngsī yìngpìn, wǒ gēnjù shàng cì wǒmen yìqǐ liànxí miànshì de jīngyàn, gěi nǐ xiě le jǐ tiáo jiànyì. Yī, bàomíng yǐqián, xiān bǎ gōngsī de qíngkuàng liǎojiě liǎojiě, lìrú gōngsī zhǔyào zuò shénme, zài zhāopìn shénmeyàng de rén. Èr, zài wǎngshang tiánxiě gèrén xìnxī de shíhou yào rènzhēn, zuìhǎo bǎ měi yí xiàng dōu jiǎnchá jiǎnchá zài tíjiāo. Sān, bǐshì zhǔyào kǎo zhuānyè zhīshi, nǐ kěyǐ bǎ xué guò de nèiróng fùxí fùxí. Sì, miànshì yìbān yóu bùmén fùzérén lái zuò, tā huì ràng nǐ jièshào zìjǐ de xuéxí jīnglì, shíxí jīnglì hé duì gōngzuò de xiǎngfǎ. Yí gè rén zài jiā liàn bùrú qǐng péngyou bāng nǐ tīngting, nǐ yě kěyǐ zài jìngzi qián bǎ zìwǒ jièshào liàn yi liàn. Wǔ, miànshì nàtiān yào chuān de zhèngshì yìdiǎnr, zhùyì xìjié, huídá wèntí shí bié tài jǐnzhāng. Shàng cì miànshì wǒ chídào le wǔ fēnzhōng, cóng nà yǐhòu wǒ zài yě bù gǎn wǎn chūmén le, suǒyǐ nǐ yídìng yào zǎodiǎnr chūfā. Búlùn jiéguǒ zěnmeyàng, zhè cì jīnglì duì nǐ dōu kěndìng yǒu bāngzhù. Zhù nǐ chénggōng!"
 }
};
