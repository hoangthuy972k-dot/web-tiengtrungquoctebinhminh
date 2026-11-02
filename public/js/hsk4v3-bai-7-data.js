// HSK 4 (3.0) · Bai 7 — sinh boi tools/hsk4v3/gan.js tu tools/hsk4v3/bai-7/ (dung sua tay).
var vocabData = [
 {
  "n": 1,
  "zh": "打扰",
  "py": "dǎrǎo",
  "pos": "Động từ",
  "vn": "làm phiền, quấy rầy",
  "hv": "đả nhiễu",
  "em": "🙇",
  "lesson": 1,
  "explain": [
   "Làm ảnh hưởng đến công việc, việc nghỉ ngơi của người khác. 「打扰您一下」 là câu mở đầu lịch sự khi muốn hỏi / nhờ cấp trên, người lạ: “xin lỗi làm phiền anh / chị một chút”."
  ],
  "usage": "打扰一下 · 打扰您了 · 别打扰他 · 不好意思，打扰了.",
  "collo": [
   "打扰一下",
   "打扰您了",
   "别打扰他",
   "不想打扰别人"
  ],
  "colloFull": [
   {
    "zh": "打扰一下",
    "py": "Dǎrǎo yíxià",
    "vn": "làm phiền một chút"
   },
   {
    "zh": "打扰您了",
    "py": "Dǎrǎo nín le",
    "vn": "đã làm phiền anh / chị rồi"
   },
   {
    "zh": "别打扰他",
    "py": "Bié dǎrǎo tā",
    "vn": "đừng quấy rầy anh ấy"
   },
   {
    "zh": "不想打扰别人",
    "py": "Bù xiǎng dǎrǎo biérén",
    "vn": "không muốn làm phiền người khác"
   }
  ],
  "patterns": [
   {
    "s": "打扰 + 您 / 你 + 一下",
    "m": "Mở đầu lịch sự khi cần hỏi, nhờ"
   },
   {
    "s": "不好意思，打扰了",
    "m": "Câu xin lỗi khi đến nhà / gọi điện làm phiền"
   }
  ],
  "ex_zh": "经理，打扰您一下。市场调查的计划书我昨天发到您邮箱了。",
  "ex_py": "Jīnglǐ, dǎrǎo nín yíxià. Shìchǎng diàochá de jìhuà shū wǒ zuótiān fā dào nín yóuxiāng le.",
  "ex_vn": "Giám đốc, em làm phiền chị một chút ạ. Bản kế hoạch khảo sát thị trường em đã gửi vào hộp thư của chị hôm qua rồi.",
  "exList": [
   {
    "zh": "经理，打扰您一下。市场调查的计划书我昨天发到您邮箱了。",
    "py": "Jīnglǐ, dǎrǎo nín yíxià. Shìchǎng diàochá de jìhuà shū wǒ zuótiān fā dào nín yóuxiāng le.",
    "vn": "Giám đốc, em làm phiền chị một chút ạ. Bản kế hoạch khảo sát thị trường em đã gửi vào hộp thư của chị hôm qua rồi."
   },
   {
    "zh": "他正在准备明天的考试，我们别打扰他了。",
    "py": "Tā zhèngzài zhǔnbèi míngtiān de kǎoshì, wǒmen bié dǎrǎo tā le.",
    "vn": "Anh ấy đang chuẩn bị cho kỳ thi ngày mai, chúng ta đừng làm phiền anh ấy nữa."
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
    "c": "扰",
    "p": "rǎo",
    "type": "左右结构 · Trái-phải (giản thể)",
    "st": 7,
    "ord": "扌 (thủ) trái → 尤(vưu) phải",
    "rad": "扌 (thủ – tay)",
    "mean": "quấy nhiễu",
    "tip": "Bộ tay 扌 + 尤(biểu âm) → hành động dùng tay QUẤY ĐỘNG, kết hợp 打(đánh, gây ra) thành 打扰 = QUẤY RẦY, LÀM PHIỀN.",
    "cf": "扰 dễ nhầm với 忧 (yōu – \"lo lắng\", bộ 忄\")",
    "w": "打扰 / 骚扰 / 别打扰"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Xin lỗi, muộn thế này còn đến làm phiền chị nghỉ ngơi.",
    "answer": "不好意思，这么晚还来打扰您休息。",
    "answerPy": "Bùhǎoyìsi, zhème wǎn hái lái dǎrǎo nín xiūxi.",
    "note": "Câu bài tập chọn từ của sách.",
    "pair": "打扰 + ai + V"
   },
   {
    "promptLang": "vi",
    "prompt": "Nếu anh không bận thì tôi xin làm phiền anh mười phút.",
    "answer": "要是你不忙，我就打扰你十分钟。",
    "answerPy": "Yàoshi nǐ bù máng, wǒ jiù dǎrǎo nǐ shí fēnzhōng.",
    "note": "Ôn 要是……就…… (Bài 1 · điểm 2).",
    "pair": "要是……就……"
   }
  ]
 },
 {
  "n": 2,
  "zh": "市场",
  "py": "shìchǎng",
  "pos": "Danh từ",
  "vn": "chợ; thị trường",
  "hv": "thị trường",
  "em": "🏪",
  "lesson": 1,
  "explain": [
   "Nơi mua bán hàng hóa (chợ). Nghĩa rộng: thị trường — nơi sản phẩm được mua bán, nhu cầu của khách hàng. Bài này hay đi với 调查: 市场调查 = khảo sát thị trường."
  ],
  "usage": "去市场买菜 · 菜市场 · 市场调查 · 国际市场.",
  "collo": [
   "菜市场",
   "市场调查",
   "国际市场",
   "打开市场"
  ],
  "colloFull": [
   {
    "zh": "菜市场",
    "py": "Cài shìchǎng",
    "vn": "chợ (rau, thịt, cá)"
   },
   {
    "zh": "市场调查",
    "py": "Shìchǎng diàochá",
    "vn": "khảo sát thị trường"
   },
   {
    "zh": "国际市场",
    "py": "Guójì shìchǎng",
    "vn": "thị trường quốc tế"
   },
   {
    "zh": "打开市场",
    "py": "Dǎkāi shìchǎng",
    "vn": "mở được thị trường"
   }
  ],
  "patterns": [
   {
    "s": "市场 + 调查 / 经济 / 价格",
    "m": "Danh từ làm định ngữ"
   },
   {
    "s": "菜市场 ≠ 超市",
    "m": "菜市场 = chợ; 超市 = siêu thị"
   }
  ],
  "ex_zh": "市场调查的计划书我昨天发到您邮箱了。",
  "ex_py": "Shìchǎng diàochá de jìhuà shū wǒ zuótiān fā dào nín yóuxiāng le.",
  "ex_vn": "Bản kế hoạch khảo sát thị trường em đã gửi vào hộp thư của chị hôm qua rồi.",
  "exList": [
   {
    "zh": "市场调查的计划书我昨天发到您邮箱了。",
    "py": "Shìchǎng diàochá de jìhuà shū wǒ zuótiān fā dào nín yóuxiāng le.",
    "vn": "Bản kế hoạch khảo sát thị trường em đã gửi vào hộp thư của chị hôm qua rồi."
   },
   {
    "zh": "周末我常常陪妈妈去菜市场买菜。",
    "py": "Zhōumò wǒ chángcháng péi māma qù cài shìchǎng mǎi cài.",
    "vn": "Cuối tuần tôi thường đi cùng mẹ ra chợ mua thức ăn."
   }
  ],
  "hanzi": [
   {
    "c": "市",
    "p": "shì",
    "type": "上下结构 · Trên-dưới",
    "st": 5,
    "ord": "亠 trên → 巾(cân) dưới",
    "rad": "巾 (cân – khăn, vải)",
    "mean": "chợ, thành phố",
    "tip": "亠(mái che) trên + 巾(vải, hàng hoá) dưới → nơi bày VẢI VÓC hàng hoá để buôn bán, tức CHỢ.",
    "cf": "布 (bù – \"vải\", cũng có bộ 巾 nhưng phần trên là 十\")",
    "w": "超市 / 市场 / 城市"
   },
   {
    "c": "场",
    "p": "chǎng",
    "type": "左右结构 · Trái-phải",
    "st": 6,
    "ord": "土 trái → 𠃓 phải",
    "rad": "土 (thổ)",
    "mean": "sân; trận",
    "tip": "Đất 土 + 𠃓 → khoảng đất rộng → SÂN (广场, 停车场); lượng từ cho sự kiện diễn ra trên sân → TRẬN. 扬 (Bài 15) cùng bộ phải.",
    "cf": "扬 (yáng – 表扬)",
    "w": "一场 / 广场 / 停车场 / 场所"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Sáng nào mẹ tôi cũng ra chợ mua thức ăn, không chỉ rẻ mà còn tươi.",
    "answer": "我妈妈每天早上都去菜市场买菜，不仅便宜，而且新鲜。",
    "answerPy": "Wǒ māma měi tiān zǎoshang dōu qù cài shìchǎng mǎi cài, bùjǐn piányi, érqiě xīnxiān.",
    "note": "Ôn 不仅……而且…… (Bài 3 · điểm 2).",
    "pair": "不仅……而且……"
   },
   {
    "promptLang": "vi",
    "prompt": "Cùng với kinh tế phát triển, thị trường của sản phẩm này ngày càng lớn.",
    "answer": "随着经济的发展，这种产品的市场越来越大。",
    "answerPy": "Suízhe jīngjì de fāzhǎn, zhè zhǒng chǎnpǐn de shìchǎng yuèláiyuè dà.",
    "note": "Ôn 随着 (Bài 1 · điểm 3).",
    "pair": "随着……，越来越……"
   }
  ]
 },
 {
  "n": 3,
  "zh": "调查",
  "py": "diàochá",
  "pos": "Động từ",
  "vn": "điều tra, khảo sát",
  "hv": "điều tra",
  "em": "📋",
  "lesson": 1,
  "explain": [
   "Đi tìm hiểu, hỏi han, thu thập thông tin để biết rõ tình hình thực tế. Trong công việc: 市场调查 = khảo sát thị trường. Chữ 调 ở đây đọc diào; đọc tiáo là “điều chỉnh, điều hòa” (空调 kōngtiáo)."
  ],
  "usage": "做调查 · 进行调查 · 市场调查 · 调查一下 · 调查结果.",
  "collo": [
   "做市场调查",
   "进行调查",
   "调查结果",
   "调查一下"
  ],
  "colloFull": [
   {
    "zh": "做市场调查",
    "py": "Zuò shìchǎng diàochá",
    "vn": "làm khảo sát thị trường"
   },
   {
    "zh": "进行调查",
    "py": "Jìnxíng diàochá",
    "vn": "tiến hành khảo sát"
   },
   {
    "zh": "调查结果",
    "py": "Diàochá jiéguǒ",
    "vn": "kết quả khảo sát"
   },
   {
    "zh": "调查一下",
    "py": "Diàochá yíxià",
    "vn": "tìm hiểu một chút"
   }
  ],
  "patterns": [
   {
    "s": "做 / 进行 + 调查",
    "m": "进行 (Bài 3) + động từ hai âm tiết"
   },
   {
    "s": "调查 + 内容 / 地点 / 结果",
    "m": "Làm định ngữ"
   }
  ],
  "ex_zh": "我看过了，写得不错，就是调查的地点只有超市，不太够。",
  "ex_py": "Wǒ kàn guò le, xiě de búcuò, jiù shì diàochá de dìdiǎn zhǐyǒu chāoshì, bú tài gòu.",
  "ex_vn": "Chị xem rồi, viết khá tốt, chỉ có điều địa điểm khảo sát chỉ có siêu thị, chưa đủ lắm.",
  "exList": [
   {
    "zh": "我看过了，写得不错，就是调查的地点只有超市，不太够。",
    "py": "Wǒ kàn guò le, xiě de búcuò, jiù shì diàochá de dìdiǎn zhǐyǒu chāoshì, bú tài gòu.",
    "vn": "Chị xem rồi, viết khá tốt, chỉ có điều địa điểm khảo sát chỉ có siêu thị, chưa đủ lắm."
   },
   {
    "zh": "于是，这位同事又认真地进行了几次市场调查。",
    "py": "Yúshì, zhè wèi tóngshì yòu rènzhēn de jìnxíng le jǐ cì shìchǎng diàochá.",
    "vn": "Thế là cô đồng nghiệp ấy lại nghiêm túc tiến hành mấy cuộc khảo sát thị trường."
   }
  ],
  "hanzi": [
   {
    "c": "调",
    "p": "diào",
    "type": "左右结构 · Trái-phải",
    "st": 10,
    "ord": "讠 (ngôn) trái → 周 (chu) phải",
    "rad": "讠 (ngôn – lời nói)",
    "mean": "điều tra, phối hợp",
    "tip": "Bộ lời nói 讠 + 周 (khắp, đầy đủ) → HỎI KHẮP để tìm hiểu, kết hợp 查 (tra xét) thành 调查 = ĐIỀU TRA.",
    "cf": "调 khi đọc \"tiáo\" nghĩa là \"điều chỉnh\" (调整)",
    "w": "调查 / 空调 / 调整"
   },
   {
    "c": "查",
    "p": "chá",
    "type": "会意字 · Chữ hội ý",
    "st": 9,
    "ord": "木 → 旦 (日 + nét ngang)",
    "rad": "木 (mộc – cây)",
    "mean": "tra xét, kiểm tra",
    "tip": "木 (gỗ, bè gỗ) ở trên + 旦: xưa đi bè gỗ xem xét dòng nước → xem xét, tra. 查词典 = tra từ điển; 检查 = kiểm tra (HSK3 Bài 6).",
    "cf": "香 xiāng (香蕉 – HSK3 Bài 7) — trên là 禾, dưới là 日",
    "w": "查 / 检查 / 查词典"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Cô ấy đang cùng khách hàng làm khảo sát thị trường.",
    "answer": "她正在跟客户做市场调查。",
    "answerPy": "Tā zhèngzài gēn kèhù zuò shìchǎng diàochá.",
    "note": "Đáp án gợi ý của sách (看图造句).",
    "pair": "正在 + 做调查"
   },
   {
    "promptLang": "vi",
    "prompt": "Trước khi làm khảo sát, ít nhất phải chuẩn bị mười câu hỏi.",
    "answer": "做调查以前，至少要准备十个问题。",
    "answerPy": "Zuò diàochá yǐqián, zhìshǎo yào zhǔnbèi shí gè wèntí.",
    "note": "Ôn 至少 (Bài 5 · điểm 1).",
    "pair": "至少 + 要 + V + số lượng"
   }
  ]
 },
 {
  "n": 4,
  "zh": "计划",
  "py": "jìhuà",
  "pos": "Danh từ / Động từ",
  "vn": "kế hoạch; lên kế hoạch, dự định",
  "hv": "kế hoạch",
  "em": "🗓️",
  "lesson": 1,
  "explain": [
   "Danh từ: kế hoạch, dự định (做计划; 计划书 = bản kế hoạch).",
   "Động từ: dự định, lên kế hoạch làm gì (计划 + V) — trang trọng hơn 打算."
  ],
  "usage": "做计划 · 工作计划 · 计划书 · 计划 + 明年去…….",
  "collo": [
   "做计划",
   "学习计划",
   "计划书",
   "按计划完成"
  ],
  "colloFull": [
   {
    "zh": "做计划",
    "py": "Zuò jìhuà",
    "vn": "lập kế hoạch"
   },
   {
    "zh": "学习计划",
    "py": "Xuéxí jìhuà",
    "vn": "kế hoạch học tập"
   },
   {
    "zh": "计划书",
    "py": "Jìhuà shū",
    "vn": "bản kế hoạch"
   },
   {
    "zh": "按计划完成",
    "py": "Àn jìhuà wánchéng",
    "vn": "hoàn thành theo kế hoạch"
   }
  ],
  "patterns": [
   {
    "s": "做 / 改 + 计划",
    "m": "Danh từ"
   },
   {
    "s": "计划 + V (去 / 买 / 学……)",
    "m": "Động từ = 打算, trang trọng hơn"
   }
  ],
  "ex_zh": "市场调查的计划书我昨天发到您邮箱了。",
  "ex_py": "Shìchǎng diàochá de jìhuà shū wǒ zuótiān fā dào nín yóuxiāng le.",
  "ex_vn": "Bản kế hoạch khảo sát thị trường em đã gửi vào hộp thư của chị hôm qua rồi.",
  "exList": [
   {
    "zh": "市场调查的计划书我昨天发到您邮箱了。",
    "py": "Shìchǎng diàochá de jìhuà shū wǒ zuótiān fā dào nín yóuxiāng le.",
    "vn": "Bản kế hoạch khảo sát thị trường em đã gửi vào hộp thư của chị hôm qua rồi."
   },
   {
    "zh": "我计划明年去中国读研究生。",
    "py": "Wǒ jìhuà míngnián qù Zhōngguó dú yánjiū shēng.",
    "vn": "Tôi dự định sang năm sang Trung Quốc học cao học."
   }
  ],
  "hanzi": [
   {
    "c": "计",
    "p": "jì",
    "type": "会意字 · Chữ hội ý",
    "st": 4,
    "ord": "讠 → 十",
    "rad": "讠 (ngôn – lời nói)",
    "mean": "tính, đếm; kế, mưu kế",
    "tip": "Nói (讠) + 十 (số mười): miệng đếm từ một đến mười → tính toán; tính trước thì thành “kế” — 计划 (kế hoạch), 设计, 计算.",
    "cf": "什 shén — bên trái là 亻; 汁 zhī (nước ép) — bên trái là 氵",
    "w": "计划 / 设计 / 会计"
   },
   {
    "c": "划",
    "p": "huà",
    "type": "左右结构 · Trái-phải (giản thể)",
    "st": 6,
    "ord": "戈 (qua) trái → 刂 (đao) phải",
    "rad": "刂 (đao – dao)",
    "mean": "vạch ra, hoạch định",
    "tip": "Bộ dao 刂 (dùng để VẠCH, khắc) → VẠCH RA đường hướng, kết hợp 计(tính toán) thành 计划 = LẬP KẾ HOẠCH.",
    "cf": "话 (huà – \"lời nói\", bộ 讠\")",
    "w": "计划 / 划船 / 规划"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Kế hoạch này một mặt phải xem thời gian, mặt khác phải xem tiền.",
    "answer": "这个计划一方面要看时间，另一方面要看钱。",
    "answerPy": "Zhège jìhuà yìfāngmiàn yào kàn shíjiān, lìngyìfāngmiàn yào kàn qián.",
    "note": "Ôn 一方面……另一方面…… (Bài 1 · điểm 4).",
    "pair": "一方面……另一方面……"
   },
   {
    "promptLang": "vi",
    "prompt": "Nếu kế hoạch có thay đổi thì anh cứ báo tôi là được.",
    "answer": "要是计划有变化，你告诉我就是了。",
    "answerPy": "Yàoshi jìhuà yǒu biànhuà, nǐ gàosu wǒ jiù shì le.",
    "note": "Ôn 要是 (Bài 1) + 就是了 (Bài 2 · điểm 1).",
    "pair": "要是……，V就是了"
   }
  ]
 },
 {
  "n": 5,
  "zh": "内容",
  "py": "nèiróng",
  "pos": "Danh từ",
  "vn": "nội dung",
  "hv": "nội dung",
  "em": "📄",
  "lesson": 1,
  "explain": [
   "Những gì có bên trong một bài viết, cuốn sách, cuộc nói chuyện, công việc… Hán Việt “nội dung” — giống hệt tiếng Việt, rất dễ nhớ."
  ],
  "usage": "……的内容 · 内容丰富 · 主要内容 · 在内容方面.",
  "collo": [
   "主要内容",
   "工作内容",
   "内容丰富",
   "调查内容"
  ],
  "colloFull": [
   {
    "zh": "主要内容",
    "py": "Zhǔyào nèiróng",
    "vn": "nội dung chính"
   },
   {
    "zh": "工作内容",
    "py": "Gōngzuò nèiróng",
    "vn": "nội dung công việc"
   },
   {
    "zh": "内容丰富",
    "py": "Nèiróng fēngfù",
    "vn": "nội dung phong phú"
   },
   {
    "zh": "调查内容",
    "py": "Diàochá nèiróng",
    "vn": "nội dung khảo sát"
   }
  ],
  "patterns": [
   {
    "s": "在内容方面，……",
    "m": "Bài 7 · điểm 1"
   },
   {
    "s": "内容 + 丰富 / 简单 / 有意思",
    "m": "Nhận xét nội dung"
   }
  ],
  "ex_zh": "在内容方面，您觉得有需要改的吗？",
  "ex_py": "Zài nèiróng fāngmiàn, nín juéde yǒu xūyào gǎi de ma?",
  "ex_vn": "Về mặt nội dung, chị thấy có chỗ nào cần sửa không ạ?",
  "exList": [
   {
    "zh": "在内容方面，您觉得有需要改的吗？",
    "py": "Zài nèiróng fāngmiàn, nín juéde yǒu xūyào gǎi de ma?",
    "vn": "Về mặt nội dung, chị thấy có chỗ nào cần sửa không ạ?"
   },
   {
    "zh": "你要去几天？主要调查什么内容？",
    "py": "Nǐ yào qù jǐ tiān? Zhǔyào diàochá shénme nèiróng?",
    "vn": "Em đi mấy ngày? Chủ yếu khảo sát nội dung gì?"
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
    "c": "容",
    "p": "róng",
    "type": "上下结构 · Trên-dưới",
    "st": 10,
    "ord": "宀 (miên) trên → 谷 dưới",
    "rad": "宀 (miên – mái nhà)",
    "mean": "chứa đựng, dung nạp",
    "tip": "Bộ mái nhà 宀 + 谷(thung lũng, chỗ chứa) → CHỨA ĐỰNG, kết hợp 内(bên trong) thành 内容 = NỘI DUNG (những gì chứa bên trong).",
    "cf": "客 (kè – \"khách\", cũng bộ 宀)",
    "w": "内容 / 容易 / 容许"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Nội dung cuốn sách này vừa bổ ích vừa thú vị.",
    "answer": "这本书的内容既有用又有意思。",
    "answerPy": "Zhè běn shū de nèiróng jì yǒuyòng yòu yǒuyìsī.",
    "note": "Ôn 既……又…… (Bài 4 · điểm 3).",
    "pair": "既……又……"
   },
   {
    "promptLang": "vi",
    "prompt": "Về mặt nội dung, bản kế hoạch này chẳng có gì phải sửa.",
    "answer": "在内容方面，这个计划书没有什么好改的。",
    "answerPy": "Zài nèiróng fāngmiàn, zhège jìhuà shū méiyǒu shénme hǎo gǎi de.",
    "note": "Ôn (没)有什么好×的 (Bài 6 · điểm 2) + 在……方面.",
    "pair": "没有什么好 V 的"
   }
  ]
 },
 {
  "n": 6,
  "zh": "改",
  "py": "gǎi",
  "pos": "Động từ",
  "vn": "sửa, sửa đổi, thay đổi",
  "hv": "cải",
  "em": "✏️",
  "lesson": 1,
  "explain": [
   "Làm cho khác đi: sửa lỗi, sửa bài, đổi kế hoạch / thời gian / thói quen. Hán Việt “cải” (cải tiến, cải cách)."
  ],
  "usage": "改错 · 改作业 · 改一下 · 改时间 · 改不了.",
  "collo": [
   "改一下",
   "改错字",
   "改时间",
   "改习惯"
  ],
  "colloFull": [
   {
    "zh": "改一下",
    "py": "Gǎi yíxià",
    "vn": "sửa một chút"
   },
   {
    "zh": "改错字",
    "py": "Gǎi cuò zì",
    "vn": "sửa chữ sai"
   },
   {
    "zh": "改时间",
    "py": "Gǎi shíjiān",
    "vn": "đổi thời gian"
   },
   {
    "zh": "改习惯",
    "py": "Gǎi xíguàn",
    "vn": "sửa thói quen"
   }
  ],
  "patterns": [
   {
    "s": "改 + 一下 / 好 / 完",
    "m": "Sửa một chút / sửa xong"
   },
   {
    "s": "改 + 时间 / 计划 / 地址",
    "m": "Đổi cái gì"
   }
  ],
  "ex_zh": "在内容方面，您觉得有需要改的吗？",
  "ex_py": "Zài nèiróng fāngmiàn, nín juéde yǒu xūyào gǎi de ma?",
  "ex_vn": "Về mặt nội dung, chị thấy có chỗ nào cần sửa không ạ?",
  "exList": [
   {
    "zh": "在内容方面，您觉得有需要改的吗？",
    "py": "Zài nèiróng fāngmiàn, nín juéde yǒu xūyào gǎi de ma?",
    "vn": "Về mặt nội dung, chị thấy có chỗ nào cần sửa không ạ?"
   },
   {
    "zh": "既然你们已经决定了，就不要再改了。",
    "py": "Jìrán nǐmen yǐjīng juédìng le, jiù búyào zài gǎi le.",
    "vn": "Các bạn đã quyết định rồi thì đừng sửa nữa."
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
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Tôi vừa viết sai địa chỉ nhà, có thể sửa lại một chút không?",
    "answer": "我刚才把家庭地址写错了，可以改一下吗？",
    "answerPy": "Wǒ gāngcái bǎ jiātíng dìzhǐ xiě cuò le, kěyǐ gǎi yíxià ma?",
    "note": "Câu bài tập chọn từ của sách; ôn 地址 (Bài 6).",
    "pair": "把……写错了，改一下"
   },
   {
    "promptLang": "vi",
    "prompt": "Thói quen ngủ muộn của anh ấy e là sửa không được.",
    "answer": "他晚睡的习惯恐怕改不了。",
    "answerPy": "Tā wǎn shuì de xíguàn kǒngpà gǎi bù liǎo.",
    "note": "Ôn V不了 (Bài 4 · điểm 1) + 恐怕 (Bài 2).",
    "pair": "V不了"
   }
  ]
 },
 {
  "n": 7,
  "zh": "细心",
  "py": "xìxīn",
  "pos": "Tính từ",
  "vn": "cẩn thận, tỉ mỉ, chu đáo",
  "hv": "tế tâm",
  "em": "🔍",
  "lesson": 1,
  "explain": [
   "Làm việc kỹ, để ý từng chi tiết nhỏ, không qua loa. 细 = nhỏ, tỉ mỉ; 心 = lòng. Trái nghĩa: 粗心 (cẩu thả, đểnh đoảng)."
  ],
  "usage": "很细心 · 做事细心 · 细心地 + V · 不够细心.",
  "collo": [
   "做事细心",
   "细心的人",
   "细心地检查",
   "不够细心"
  ],
  "colloFull": [
   {
    "zh": "做事细心",
    "py": "Zuò shì xìxīn",
    "vn": "làm việc cẩn thận"
   },
   {
    "zh": "细心的人",
    "py": "Xìxīn de rén",
    "vn": "người chu đáo"
   },
   {
    "zh": "细心地检查",
    "py": "Xìxīn de jiǎnchá",
    "vn": "kiểm tra kỹ lưỡng"
   },
   {
    "zh": "不够细心",
    "py": "Bú gòu xìxīn",
    "vn": "chưa đủ cẩn thận"
   }
  ],
  "patterns": [
   {
    "s": "Sub + 很 / 特别 + 细心",
    "m": "Tính từ làm vị ngữ"
   },
   {
    "s": "细心 ↔ 粗心",
    "m": "cẩn thận ↔ cẩu thả"
   }
  ],
  "ex_zh": "做调查的时候要细心，注意了解客户真正的想法。",
  "ex_py": "Zuò diàochá de shíhou yào xìxīn, zhùyì liǎojiě kèhù zhēnzhèng de xiǎngfǎ.",
  "ex_vn": "Lúc làm khảo sát phải cẩn thận, chú ý tìm hiểu suy nghĩ thật sự của khách hàng.",
  "exList": [
   {
    "zh": "做调查的时候要细心，注意了解客户真正的想法。",
    "py": "Zuò diàochá de shíhou yào xìxīn, zhùyì liǎojiě kèhù zhēnzhèng de xiǎngfǎ.",
    "vn": "Lúc làm khảo sát phải cẩn thận, chú ý tìm hiểu suy nghĩ thật sự của khách hàng."
   },
   {
    "zh": "这个小男孩儿写作业很细心。",
    "py": "Zhège xiǎo nánháir xiě zuòyè hěn xìxīn.",
    "vn": "Cậu bé này làm bài tập rất cẩn thận."
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
    "prompt": "Cậu bé này làm bài tập rất cẩn thận.",
    "answer": "这个小男孩儿写作业很细心。",
    "answerPy": "Zhège xiǎo nánháir xiě zuòyè hěn xìxīn.",
    "note": "Đáp án gợi ý của sách (看图造句).",
    "pair": "V + 很细心"
   },
   {
    "promptLang": "vi",
    "prompt": "Làm khảo sát mà chưa đủ cẩn thận thì kết quả sẽ có vấn đề.",
    "answer": "做调查不够细心的话，结果就会有问题。",
    "answerPy": "Zuò diàochá bú gòu xìxīn dehuà, jiéguǒ jiù huì yǒu wèntí.",
    "note": "Ôn 不够 + Adj (Bài 5 · điểm 2).",
    "pair": "不够 + Adj"
   }
  ]
 },
 {
  "n": 8,
  "zh": "客户",
  "py": "kèhù",
  "pos": "Danh từ",
  "vn": "khách hàng",
  "hv": "khách hộ",
  "em": "🤝",
  "lesson": 1,
  "explain": [
   "Người hoặc công ty mua hàng, dùng dịch vụ của công ty mình (thường là khách quen, khách làm ăn). Khác 客人 (khách đến nhà, khách mời) và 顾客 (khách mua lẻ ở cửa hàng)."
  ],
  "usage": "老客户 · 新客户 · 采访客户 · 和客户交流.",
  "collo": [
   "老客户",
   "采访客户",
   "和客户交流",
   "客户的想法"
  ],
  "colloFull": [
   {
    "zh": "老客户",
    "py": "Lǎo kèhù",
    "vn": "khách hàng quen"
   },
   {
    "zh": "采访客户",
    "py": "Cǎifǎng kèhù",
    "vn": "phỏng vấn khách hàng"
   },
   {
    "zh": "和客户交流",
    "py": "Hé kèhù jiāoliú",
    "vn": "trao đổi với khách hàng"
   },
   {
    "zh": "客户的想法",
    "py": "Kèhù de xiǎngfǎ",
    "vn": "suy nghĩ của khách hàng"
   }
  ],
  "patterns": [
   {
    "s": "和 / 跟 + 客户 + 交流 / 谈",
    "m": "Làm việc với khách hàng"
   },
   {
    "s": "客户 ≠ 客人",
    "m": "客户: khách hàng của công ty; 客人: khách đến nhà"
   }
  ],
  "ex_zh": "做调查的时候要细心，注意了解客户真正的想法。",
  "ex_py": "Zuò diàochá de shíhou yào xìxīn, zhùyì liǎojiě kèhù zhēnzhèng de xiǎngfǎ.",
  "ex_vn": "Lúc làm khảo sát phải cẩn thận, chú ý tìm hiểu suy nghĩ thật sự của khách hàng.",
  "exList": [
   {
    "zh": "做调查的时候要细心，注意了解客户真正的想法。",
    "py": "Zuò diàochá de shíhou yào xìxīn, zhùyì liǎojiě kèhù zhēnzhèng de xiǎngfǎ.",
    "vn": "Lúc làm khảo sát phải cẩn thận, chú ý tìm hiểu suy nghĩ thật sự của khách hàng."
   },
   {
    "zh": "那你要提前准备好问题，便于和客户交流。",
    "py": "Nà nǐ yào tíqián zhǔnbèi hǎo wèntí, biànyú hé kèhù jiāoliú.",
    "vn": "Vậy em phải chuẩn bị sẵn câu hỏi từ trước, để tiện trao đổi với khách hàng."
   }
  ],
  "hanzi": [
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
   },
   {
    "c": "户",
    "p": "hù",
    "type": "象形字 · Chữ tượng hình",
    "st": 4,
    "ord": "丶 → 尸 (横折、横、撇)",
    "rad": "户 (hộ – cửa một cánh)",
    "mean": "cửa; hộ, nhà; (khách) hàng",
    "tip": "Vẽ một cánh cửa đơn (cửa hai cánh là 门) → nhà, hộ gia đình; người đến “gõ cửa” làm ăn → 客户 (khách hàng).",
    "cf": "尸 shī — không có chấm trên; 产 chǎn — trên là 亠 + 丷",
    "w": "客户 / 窗户 / 户口"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Khách hàng ở độ tuổi khác nhau thì suy nghĩ cũng khác nhau.",
    "answer": "不同年龄的客户，想法也不一样。",
    "answerPy": "Bùtóng niánlíng de kèhù, xiǎngfǎ yě bù yíyàng.",
    "note": "Ôn 年龄 (Bài 5 · từ mới).",
    "pair": "不同 + N"
   },
   {
    "promptLang": "vi",
    "prompt": "Gặp bất kỳ khách hàng nào cũng phải nhiệt tình.",
    "answer": "见到任何客户都要热情。",
    "answerPy": "Jiàn dào rènhé kèhù dōu yào rèqíng.",
    "note": "Ôn 任何……都…… (Bài 1 · điểm 1).",
    "pair": "任何……都……"
   }
  ]
 },
 {
  "n": 9,
  "zh": "真正",
  "py": "zhēnzhèng",
  "pos": "Tính từ / Phó từ",
  "vn": "thật sự, đích thực, chân chính",
  "hv": "chân chính",
  "em": "💯",
  "lesson": 1,
  "explain": [
   "Tính từ: thật, đúng nghĩa (真正的 + N): 真正的想法 = suy nghĩ thật.",
   "Phó từ: thật sự (真正 + V): 真正了解. Khác 真 (真好, 真漂亮 — “thật là”) đứng trước tính từ để cảm thán."
  ],
  "usage": "真正的 + N · 真正 + 了解 / 明白 / 喜欢.",
  "collo": [
   "真正的想法",
   "真正的朋友",
   "真正了解",
   "真正明白"
  ],
  "colloFull": [
   {
    "zh": "真正的想法",
    "py": "Zhēnzhèng de xiǎngfǎ",
    "vn": "suy nghĩ thật sự"
   },
   {
    "zh": "真正的朋友",
    "py": "Zhēnzhèng de péngyou",
    "vn": "người bạn thật sự"
   },
   {
    "zh": "真正了解",
    "py": "Zhēnzhèng liǎojiě",
    "vn": "thật sự hiểu"
   },
   {
    "zh": "真正明白",
    "py": "Zhēnzhèng míngbai",
    "vn": "thật sự hiểu rõ"
   }
  ],
  "patterns": [
   {
    "s": "真正的 + N",
    "m": "Định ngữ: … đích thực"
   },
   {
    "s": "真正 + V (了解 / 明白 / 喜欢)",
    "m": "Phó từ"
   }
  ],
  "ex_zh": "做调查的时候要细心，注意了解客户真正的想法。",
  "ex_py": "Zuò diàochá de shíhou yào xìxīn, zhùyì liǎojiě kèhù zhēnzhèng de xiǎngfǎ.",
  "ex_vn": "Lúc làm khảo sát phải cẩn thận, chú ý tìm hiểu suy nghĩ thật sự của khách hàng.",
  "exList": [
   {
    "zh": "做调查的时候要细心，注意了解客户真正的想法。",
    "py": "Zuò diàochá de shíhou yào xìxīn, zhùyì liǎojiě kèhù zhēnzhèng de xiǎngfǎ.",
    "vn": "Lúc làm khảo sát phải cẩn thận, chú ý tìm hiểu suy nghĩ thật sự của khách hàng."
   },
   {
    "zh": "在中国住了一年，我才真正了解了中国人的生活。",
    "py": "Zài Zhōngguó zhù le yì nián, wǒ cái zhēnzhèng liǎojiě le zhōngguórén de shēnghuó.",
    "vn": "Sống ở Trung Quốc một năm, tôi mới thật sự hiểu cuộc sống của người Trung Quốc."
   }
  ],
  "hanzi": [
   {
    "c": "真",
    "p": "zhēn",
    "type": "独体字 · Chữ đơn",
    "st": 10,
    "ord": "nét liền",
    "rad": "目 (mục, biến thể)",
    "mean": "thật, chân thật",
    "tip": "Chữ tượng hình mô phỏng việc dùng mắt 目 nhìn thấy TẬN MẮT sự việc → xác nhận điều đó là THẬT.",
    "cf": "真 dễ nhầm với 直 (zhí – \"thẳng\", thiếu nét trên)",
    "w": "真正 / 真的 / 认真"
   },
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
    "prompt": "Bạn thật sự là người sẽ giúp bạn khi bạn gặp khó khăn.",
    "answer": "真正的朋友是你遇到困难时会帮助你的人。",
    "answerPy": "Zhēnzhèng de péngyou shì nǐ yùdào kùnnan shí huì bāngzhù nǐ de rén.",
    "note": "真正的 + N; 困难 (từ mới bài này).",
    "pair": "真正的 + N"
   },
   {
    "promptLang": "vi",
    "prompt": "Thông qua lần khảo sát này, chúng tôi mới thật sự hiểu khách hàng.",
    "answer": "通过这次调查，我们才真正了解了客户。",
    "answerPy": "Tōngguò zhè cì diàochá, wǒmen cái zhēnzhèng liǎojiě le kèhù.",
    "note": "Ôn 通过 (Bài 1 · từ mới).",
    "pair": "通过……，才真正……"
   }
  ]
 },
 {
  "n": 10,
  "zh": "想法",
  "py": "xiǎngfǎ",
  "pos": "Danh từ",
  "vn": "suy nghĩ, ý kiến, ý tưởng",
  "hv": "tưởng pháp",
  "em": "💭",
  "lesson": 1,
  "explain": [
   "Điều mình nghĩ trong đầu về một việc; ý tưởng. Gần nghĩa 看法 (cách nhìn, quan điểm — thiên về nhận xét, đánh giá)."
  ],
  "usage": "有想法 · 你的想法 · 真正的想法 · 好想法.",
  "collo": [
   "好想法",
   "真正的想法",
   "说说你的想法",
   "了解大家的想法"
  ],
  "colloFull": [
   {
    "zh": "好想法",
    "py": "Hǎo xiǎngfǎ",
    "vn": "ý tưởng hay"
   },
   {
    "zh": "真正的想法",
    "py": "Zhēnzhèng de xiǎngfǎ",
    "vn": "suy nghĩ thật sự"
   },
   {
    "zh": "说说你的想法",
    "py": "Shuō shuō nǐ de xiǎngfǎ",
    "vn": "nói suy nghĩ của bạn đi"
   },
   {
    "zh": "了解大家的想法",
    "py": "Liǎojiě dàjiā de xiǎngfǎ",
    "vn": "hiểu suy nghĩ của mọi người"
   }
  ],
  "patterns": [
   {
    "s": "了解 / 说说 + (ai) 的想法",
    "m": "Tìm hiểu / nói ra suy nghĩ"
   },
   {
    "s": "想法 ≈ 看法",
    "m": "想法 rộng hơn (cả ý tưởng); 看法 = nhận xét, đánh giá"
   }
  ],
  "ex_zh": "做调查的时候要细心，注意了解客户真正的想法。",
  "ex_py": "Zuò diàochá de shíhou yào xìxīn, zhùyì liǎojiě kèhù zhēnzhèng de xiǎngfǎ.",
  "ex_vn": "Lúc làm khảo sát phải cẩn thận, chú ý tìm hiểu suy nghĩ thật sự của khách hàng.",
  "exList": [
   {
    "zh": "做调查的时候要细心，注意了解客户真正的想法。",
    "py": "Zuò diàochá de shíhou yào xìxīn, zhùyì liǎojiě kèhù zhēnzhèng de xiǎngfǎ.",
    "vn": "Lúc làm khảo sát phải cẩn thận, chú ý tìm hiểu suy nghĩ thật sự của khách hàng."
   },
   {
    "zh": "他和同事交流了一下，了解了大家的想法。",
    "py": "Tā hé tóngshì jiāoliú le yíxià, liǎojiě le dàjiā de xiǎngfǎ.",
    "vn": "Anh ấy trao đổi với đồng nghiệp một chút, hiểu được suy nghĩ của mọi người."
   }
  ],
  "hanzi": [
   {
    "c": "想",
    "p": "xiǎng",
    "type": "上下结构 · Trên-dưới",
    "st": 13,
    "ord": "相 trên → 心 dưới",
    "rad": "心 (tâm)",
    "mean": "nghĩ, mong muốn",
    "tip": "Bộ tâm 心 (suy nghĩ trong lòng) + 相(biểu âm) → NGHĨ TỚI, MONG MUỐN, kết hợp 理(lý lẽ, đạo lý) thành 理想 = LÝ TƯỞNG (điều mong muốn hợp lý lẽ).",
    "cf": "相 (xiàng – \"tướng mạo\", không có bộ 心\")",
    "w": "理想 / 思想 / 梦想"
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
    "prompt": "Anh ấy trao đổi với đồng nghiệp một chút, hiểu được suy nghĩ của mọi người.",
    "answer": "他和同事交流了一下，了解了大家的想法。",
    "answerPy": "Tā hé tóngshì jiāoliú le yíxià, liǎojiě le dàjiā de xiǎngfǎ.",
    "note": "Câu bài tập chọn từ của sách; ôn 交流 (Bài 1).",
    "pair": "了解 + 想法"
   },
   {
    "promptLang": "vi",
    "prompt": "Có ý tưởng hay thì cứ nói ra là được.",
    "answer": "有好想法，说出来就是了。",
    "answerPy": "Yǒu hǎo xiǎngfǎ, shuō chū lái jiù shì le.",
    "note": "Ôn ×就是了 (Bài 2 · điểm 1).",
    "pair": "……就是了"
   }
  ]
 },
 {
  "n": 11,
  "zh": "任务",
  "py": "rènwù",
  "pos": "Danh từ",
  "vn": "nhiệm vụ, công việc được giao",
  "hv": "nhiệm vụ",
  "em": "🎯",
  "lesson": 1,
  "explain": [
   "Công việc được giao, phải hoàn thành (thường có thời hạn). Hán Việt “nhiệm vụ” — giống tiếng Việt. Khẩu ngữ hay đọc nhẹ rènwu."
  ],
  "usage": "完成任务 · 接到任务 · 工作任务 · 学习任务.",
  "collo": [
   "完成任务",
   "接到任务",
   "工作任务",
   "任务很重"
  ],
  "colloFull": [
   {
    "zh": "完成任务",
    "py": "Wánchéng rènwù",
    "vn": "hoàn thành nhiệm vụ"
   },
   {
    "zh": "接到任务",
    "py": "Jiē dào rènwù",
    "vn": "nhận nhiệm vụ"
   },
   {
    "zh": "工作任务",
    "py": "Gōngzuò rènwù",
    "vn": "nhiệm vụ công việc"
   },
   {
    "zh": "任务很重",
    "py": "Rènwù hěn zhòng",
    "vn": "nhiệm vụ rất nặng"
   }
  ],
  "patterns": [
   {
    "s": "接到 / 完成 + 任务",
    "m": "Nhận / hoàn thành nhiệm vụ"
   },
   {
    "s": "按时完成任务",
    "m": "按时 (Bài 6) = đúng hạn"
   }
  ],
  "ex_zh": "明白了，我会认真准备，按时完成任务。",
  "ex_py": "Míngbai le, wǒ huì rènzhēn zhǔnbèi, ànshí wánchéng rènwù.",
  "ex_vn": "Em hiểu rồi, em sẽ chuẩn bị nghiêm túc, hoàn thành nhiệm vụ đúng hạn.",
  "exList": [
   {
    "zh": "明白了，我会认真准备，按时完成任务。",
    "py": "Míngbai le, wǒ huì rènzhēn zhǔnbèi, ànshí wánchéng rènwù.",
    "vn": "Em hiểu rồi, em sẽ chuẩn bị nghiêm túc, hoàn thành nhiệm vụ đúng hạn."
   },
   {
    "zh": "上周，小张接到经理的任务，去几家公司做市场调查了。",
    "py": "Shàng zhōu, xiǎo zhāng jiē dào jīnglǐ de rènwù, qù jǐ jiā gōngsī zuò shìchǎng diàochá le.",
    "vn": "Tuần trước, Tiểu Trương nhận nhiệm vụ của giám đốc, đi mấy công ty làm khảo sát thị trường."
   }
  ],
  "hanzi": [
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
   },
   {
    "c": "务",
    "p": "wu",
    "type": "形声字 · Chữ hình thanh",
    "st": 5,
    "ord": "夂 → 力",
    "rad": "力 (lực – sức)",
    "mean": "việc, công việc",
    "tip": "夂 + 力 (sức): bỏ sức ra làm việc → công việc, phục vụ. 服务员 (HSK1 Bài 13) = người phục vụ.",
    "cf": "各 gè — phía trên cũng là 夂",
    "w": "服务 / 服务员 / 服务台"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Nhiệm vụ lần này nhiều quá, một tuần e là không hoàn thành nổi.",
    "answer": "这次的任务太多了，一个星期恐怕完成不了。",
    "answerPy": "Zhè cì de rènwù tài duō le, yí gè xīngqī kǒngpà wánchéng bù liǎo.",
    "note": "Ôn V不了 (Bài 4 · điểm 1) + 恐怕 (Bài 2).",
    "pair": "完成不了"
   },
   {
    "promptLang": "vi",
    "prompt": "Chỉ cần mọi người cùng cố gắng thì nhất định hoàn thành nhiệm vụ đúng hạn.",
    "answer": "只要大家一起努力，就一定能按时完成任务。",
    "answerPy": "Zhǐyào dàjiā yìqǐ nǔlì, jiù yídìng néng ànshí wánchéng rènwù.",
    "note": "只要……就…… (HSK 3) + 按时 (Bài 6).",
    "pair": "只要……就……"
   }
  ]
 },
 {
  "n": 12,
  "zh": "及时",
  "py": "jíshí",
  "pos": "Phó từ / Tính từ",
  "vn": "kịp thời, ngay (không chậm trễ)",
  "hv": "cập thời",
  "em": "⏱️",
  "lesson": 1,
  "explain": [
   "Phó từ: làm ngay, không để chậm trễ (及时 + V): 及时联系 = liên hệ ngay.",
   "Tính từ: đúng lúc, kịp thời (来得很及时). Phân biệt: 按时 = đúng thời gian quy định; 准时 = đúng giờ; 来得及 (Bài 4) = còn kịp."
  ],
  "usage": "及时联系 · 及时解决 · 及时告诉 · 来得很及时.",
  "collo": [
   "及时联系",
   "及时解决",
   "及时告诉",
   "来得很及时"
  ],
  "colloFull": [
   {
    "zh": "及时联系",
    "py": "Jíshí liánxì",
    "vn": "liên hệ kịp thời"
   },
   {
    "zh": "及时解决",
    "py": "Jíshí jiějué",
    "vn": "giải quyết kịp thời"
   },
   {
    "zh": "及时告诉",
    "py": "Jíshí gàosu",
    "vn": "báo ngay"
   },
   {
    "zh": "来得很及时",
    "py": "Lái de hěn jíshí",
    "vn": "đến rất đúng lúc"
   }
  ],
  "patterns": [
   {
    "s": "及时 + V",
    "m": "Phó từ: làm ngay"
   },
   {
    "s": "及时 ≠ 按时",
    "m": "按时 = đúng thời hạn quy định; 及时 = ngay khi cần"
   }
  ],
  "ex_zh": "嗯，如果遇到什么问题，及时跟我联系。",
  "ex_py": "Ǹg, rúguǒ yùdào shénme wèntí, jíshí gēn wǒ liánxì.",
  "ex_vn": "Ừ, nếu gặp vấn đề gì thì liên hệ với chị ngay nhé.",
  "exList": [
   {
    "zh": "嗯，如果遇到什么问题，及时跟我联系。",
    "py": "Ǹg, rúguǒ yùdào shénme wèntí, jíshí gēn wǒ liánxì.",
    "vn": "Ừ, nếu gặp vấn đề gì thì liên hệ với chị ngay nhé."
   },
   {
    "zh": "你来得真及时，我们正需要人帮忙呢。",
    "py": "Nǐ lái de zhēn jíshí, wǒmen zhèng xūyào rén bāngmáng ne.",
    "vn": "Bạn đến thật đúng lúc, chúng tôi đang cần người giúp đây."
   }
  ],
  "hanzi": [
   {
    "c": "及",
    "p": "jí",
    "type": "独体字 · Chữ đơn",
    "st": 3,
    "ord": "nét liền",
    "rad": "又 (hựu, biến thể)",
    "mean": "kịp, đến",
    "tip": "Chữ tượng hình tay với tới người phía trước → nghĩa KỊP, ĐẠT ĐẾN, kết hợp 来得(có thể) thành 来得及 = KỊP THỜI GIAN.",
    "cf": "乃 (nǎi – \"bèn, là\", tự dạng gần giống)",
    "w": "来得及 / 来不及 / 及时"
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
    "prompt": "Phát hiện vấn đề rồi, chúng ta phải giải quyết kịp thời.",
    "answer": "发现问题以后，我们要及时解决。",
    "answerPy": "Fāxiàn wèntí yǐhòu, wǒmen yào jíshí jiějué.",
    "note": "Câu bài tập chọn từ của sách.",
    "pair": "及时 + V"
   },
   {
    "promptLang": "vi",
    "prompt": "Có bất kỳ vấn đề gì xin liên hệ với tôi ngay.",
    "answer": "有任何问题，请及时跟我联系。",
    "answerPy": "Yǒu rènhé wèntí, qǐng jíshí gēn wǒ liánxì.",
    "note": "Ôn 任何 (Bài 1 · điểm 1).",
    "pair": "任何 + N"
   }
  ]
 },
 {
  "n": 13,
  "zh": "出差",
  "py": "chūchāi",
  "pos": "Động từ",
  "vn": "đi công tác",
  "hv": "xuất sai",
  "em": "🧳",
  "lesson": 2,
  "explain": [
   "Được cơ quan cử đi nơi khác làm việc một thời gian ngắn. Động từ ly hợp: 出了三天差, 出过差; không mang tân ngữ nơi chốn (✗ 出差上海 → ✓ 去上海出差). Bẫy Hán Việt: “xuất sai” không liên quan “sai sót”; 差 ở đây đọc chāi."
  ],
  "usage": "去 + nơi + 出差 · 经常出差 · 出差三天 · 出差回来.",
  "collo": [
   "去上海出差",
   "经常出差",
   "出了三天差",
   "出差回来"
  ],
  "colloFull": [
   {
    "zh": "去上海出差",
    "py": "Qù Shànghǎi chūchāi",
    "vn": "đi Thượng Hải công tác"
   },
   {
    "zh": "经常出差",
    "py": "Jīngcháng chūchāi",
    "vn": "thường xuyên đi công tác"
   },
   {
    "zh": "出了三天差",
    "py": "Chū le sān tiān chà",
    "vn": "đi công tác ba ngày"
   },
   {
    "zh": "出差回来",
    "py": "Chūchāi huílái",
    "vn": "đi công tác về"
   }
  ],
  "patterns": [
   {
    "s": "去 + nơi + 出差",
    "m": "✗ 出差上海"
   },
   {
    "s": "出 + 了 / 过 + (thời gian) + 差",
    "m": "Động từ ly hợp"
   }
  ],
  "ex_zh": "杨哥，经理让我下周去上海出差，做市场调查，你有这方面的经验吗？",
  "ex_py": "Yáng gē, jīnglǐ ràng wǒ xià zhōu qù Shànghǎi chūchāi, zuò shìchǎng diàochá, nǐ yǒu zhè fāngmiàn de jīngyàn ma?",
  "ex_vn": "Anh Dương, giám đốc bảo em tuần sau đi Thượng Hải công tác, làm khảo sát thị trường, anh có kinh nghiệm về mặt này không?",
  "exList": [
   {
    "zh": "杨哥，经理让我下周去上海出差，做市场调查，你有这方面的经验吗？",
    "py": "Yáng gē, jīnglǐ ràng wǒ xià zhōu qù Shànghǎi chūchāi, zuò shìchǎng diàochá, nǐ yǒu zhè fāngmiàn de jīngyàn ma?",
    "vn": "Anh Dương, giám đốc bảo em tuần sau đi Thượng Hải công tác, làm khảo sát thị trường, anh có kinh nghiệm về mặt này không?"
   },
   {
    "zh": "既然出差时间不长，就要安排好时间，多获得有用的信息。",
    "py": "Jìrán chūchāi shíjiān bù cháng, jiù yào ānpái hǎo shíjiān, duō huòdé yǒuyòng de xìnxī.",
    "vn": "Đã đi công tác không lâu thì phải sắp xếp thời gian cho tốt, thu được nhiều thông tin hữu ích."
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
    "c": "差",
    "p": "chāi",
    "type": "上下结构 · Trên-dưới",
    "st": 9,
    "ord": "𦍌 trên → 工 dưới",
    "rad": "工 (công)",
    "mean": "sai phái",
    "tip": "Chữ 差 đọc chāi = SAI PHÁI (cử đi làm việc), 出差 = ĐI CÔNG TÁC. Chú ý cùng chữ đọc chà = KÉM (差不多) và chā = SAI SỐ.",
    "cf": "着 (zhe – trợ từ)",
    "w": "出差 / 差不多 / 差别"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Bố tôi thường xuyên đi công tác, thỉnh thoảng mới ở nhà.",
    "answer": "我爸爸经常出差，偶尔才在家。",
    "answerPy": "Wǒ bàba jīngcháng chūchāi, ǒu'ěr cái zài jiā.",
    "note": "Ôn 偶尔 (Bài 6 · điểm 3).",
    "pair": "偶尔才……"
   },
   {
    "promptLang": "vi",
    "prompt": "Lần này đi công tác chỉ có hai ngày, hơn nữa việc lại nhiều, chẳng có thời gian đi chơi.",
    "answer": "这次出差只有两天，再说工作也多，没时间出去玩。",
    "answerPy": "Zhè cì chūchāi zhǐyǒu liǎng tiān, zài shuō gōngzuò yě duō, méi shíjiān chūqù wán.",
    "note": "Ôn 再说 (Bài 4 · điểm 2).",
    "pair": "……，再说……"
   }
  ]
 },
 {
  "n": 14,
  "zh": "经验",
  "py": "jīngyàn",
  "pos": "Danh từ",
  "vn": "kinh nghiệm",
  "hv": "kinh nghiệm",
  "em": "🧠",
  "lesson": 2,
  "explain": [
   "Hiểu biết, kỹ năng có được nhờ đã làm, đã trải qua. Hán Việt “kinh nghiệm” giống tiếng Việt. Phân biệt 经历 jīnglì = trải nghiệm, những việc mình đã trải qua."
  ],
  "usage": "有经验 · 工作经验 · 积累经验 · 这方面的经验.",
  "collo": [
   "工作经验",
   "有经验",
   "积累经验",
   "经验丰富"
  ],
  "colloFull": [
   {
    "zh": "工作经验",
    "py": "Gōngzuò jīngyàn",
    "vn": "kinh nghiệm làm việc"
   },
   {
    "zh": "有经验",
    "py": "Yǒu jīngyàn",
    "vn": "có kinh nghiệm"
   },
   {
    "zh": "积累经验",
    "py": "Jīlěi jīngyàn",
    "vn": "tích lũy kinh nghiệm"
   },
   {
    "zh": "经验丰富",
    "py": "Jīngyàn fēngfù",
    "vn": "giàu kinh nghiệm"
   }
  ],
  "patterns": [
   {
    "s": "有 / 没有 + (……方面的) + 经验",
    "m": "Có kinh nghiệm về mặt …"
   },
   {
    "s": "经验 ≠ 经历",
    "m": "经验 = kinh nghiệm (kỹ năng); 经历 = trải nghiệm"
   }
  ],
  "ex_zh": "杨哥，经理让我下周去上海出差，做市场调查，你有这方面的经验吗？",
  "ex_py": "Yáng gē, jīnglǐ ràng wǒ xià zhōu qù Shànghǎi chūchāi, zuò shìchǎng diàochá, nǐ yǒu zhè fāngmiàn de jīngyàn ma?",
  "ex_vn": "Anh Dương, giám đốc bảo em tuần sau đi Thượng Hải công tác, làm khảo sát thị trường, anh có kinh nghiệm về mặt này không?",
  "exList": [
   {
    "zh": "杨哥，经理让我下周去上海出差，做市场调查，你有这方面的经验吗？",
    "py": "Yáng gē, jīnglǐ ràng wǒ xià zhōu qù Shànghǎi chūchāi, zuò shìchǎng diàochá, nǐ yǒu zhè fāngmiàn de jīngyàn ma?",
    "vn": "Anh Dương, giám đốc bảo em tuần sau đi Thượng Hải công tác, làm khảo sát thị trường, anh có kinh nghiệm về mặt này không?"
   },
   {
    "zh": "通过这次调查，她也积累了不少经验。",
    "py": "Tōngguò zhè cì diàochá, tā yě jīlěi le bù shǎo jīngyàn.",
    "vn": "Qua lần khảo sát này, cô ấy cũng tích lũy được không ít kinh nghiệm."
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
    "c": "验",
    "p": "yàn",
    "type": "左右结构 · Trái-phải (giản thể)",
    "st": 10,
    "ord": "马 (mã) trái → 佥 phải",
    "rad": "马 (mã – ngựa)",
    "mean": "kiểm nghiệm, trải qua",
    "tip": "Bộ 马 (liên quan kiểm tra ngựa xưa) + 佥(biểu âm) → KIỂM NGHIỆM qua thực tế, kết hợp 经(trải qua) thành 经验 = KINH NGHIỆM.",
    "cf": "验 dễ nhầm với 检 (jiǎn – \"kiểm tra\")",
    "w": "经验 / 经历 / 考验"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Anh có kinh nghiệm về mặt này không?",
    "answer": "你有这方面的经验吗？",
    "answerPy": "Nǐ yǒu zhè fāngmiàn de jīngyàn ma?",
    "note": "Câu trong bài khoá 2; 这方面 (điểm 1).",
    "pair": "有……方面的经验"
   },
   {
    "promptLang": "vi",
    "prompt": "Anh ấy không chỉ có kinh nghiệm mà còn rất cẩn thận.",
    "answer": "他不仅有经验，而且很细心。",
    "answerPy": "Tā bùjǐn yǒu jīngyàn, érqiě hěn xìxīn.",
    "note": "Ôn 不仅……而且…… (Bài 3 · điểm 2).",
    "pair": "不仅……而且……"
   }
  ]
 },
 {
  "n": 15,
  "zh": "采访",
  "py": "cǎifǎng",
  "pos": "Động từ",
  "vn": "phỏng vấn; hỏi chuyện để lấy thông tin",
  "hv": "thái phỏng",
  "em": "🎤",
  "lesson": 2,
  "explain": [
   "Gặp và hỏi chuyện ai đó để thu thập thông tin (phóng viên phỏng vấn, công ty lấy ý kiến khách hàng). Lưu ý: “phỏng vấn xin việc” là 面试, không dùng 采访."
  ],
  "usage": "采访客户 · 采访了几位老师 · 接受采访.",
  "collo": [
   "采访客户",
   "接受采访",
   "采访了几位老师",
   "电视台采访"
  ],
  "colloFull": [
   {
    "zh": "采访客户",
    "py": "Cǎifǎng kèhù",
    "vn": "phỏng vấn khách hàng"
   },
   {
    "zh": "接受采访",
    "py": "Jiēshòu cǎifǎng",
    "vn": "nhận lời phỏng vấn"
   },
   {
    "zh": "采访了几位老师",
    "py": "Cǎifǎng le jǐ wèi lǎoshī",
    "vn": "phỏng vấn mấy thầy cô"
   },
   {
    "zh": "电视台采访",
    "py": "Diànshì tái cǎifǎng",
    "vn": "đài truyền hình phỏng vấn"
   }
  ],
  "patterns": [
   {
    "s": "采访 + người",
    "m": "Phỏng vấn ai"
   },
   {
    "s": "采访 ≠ 面试",
    "m": "面试 = phỏng vấn xin việc"
   }
  ],
  "ex_zh": "去四天，打算采访一些客户，了解他们对新产品的看法。",
  "ex_py": "Qù sì tiān, dǎsuàn cǎifǎng yìxiē kèhù, liǎojiě tāmen duì xīn chǎnpǐn de kànfǎ.",
  "ex_vn": "Đi bốn ngày, em định phỏng vấn một số khách hàng, tìm hiểu ý kiến của họ về sản phẩm mới.",
  "exList": [
   {
    "zh": "去四天，打算采访一些客户，了解他们对新产品的看法。",
    "py": "Qù sì tiān, dǎsuàn cǎifǎng yìxiē kèhù, liǎojiě tāmen duì xīn chǎnpǐn de kànfǎ.",
    "vn": "Đi bốn ngày, em định phỏng vấn một số khách hàng, tìm hiểu ý kiến của họ về sản phẩm mới."
   },
   {
    "zh": "记者采访了几位参加比赛的学生。",
    "py": "Jìzhě cǎifǎng le jǐ wèi cānjiā bǐsài de xuésheng.",
    "vn": "Phóng viên phỏng vấn mấy học sinh tham gia cuộc thi."
   }
  ],
  "hanzi": [
   {
    "c": "采",
    "p": "cǎi",
    "type": "会意字 · Chữ hội ý",
    "st": 8,
    "ord": "爫 → 木",
    "rad": "爫 (trảo – móng vuốt, bàn tay)",
    "mean": "hái, ngắt; thu thập, chọn lấy",
    "tip": "Bàn tay (爫) đặt trên cây (木): đưa tay hái quả, hái lá → hái; mở rộng thành thu thập — 采访 (đi hỏi để thu thập tin), 采用.",
    "cf": "菜 cài (rau) — thêm 艹 trên đầu; 彩 cǎi (màu) — thêm 彡 bên phải",
    "w": "采访 / 采用 / 采茶"
   },
   {
    "c": "访",
    "p": "fǎng",
    "type": "形声字 · Chữ hình thanh",
    "st": 6,
    "ord": "讠 → 方",
    "rad": "讠 (ngôn – lời nói)",
    "mean": "thăm, hỏi han",
    "tip": "Lời nói (讠) + 方 fāng (chỉ âm): đến tận nơi để nói chuyện, hỏi han → thăm hỏi — 采访, 访问.",
    "cf": "放 fàng (thả) — bên phải là 攵; 房 fáng (phòng) — trên có 户",
    "w": "采访 / 访问 / 拜访"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Lần khảo sát này chúng tôi ít nhất phải phỏng vấn năm mươi khách hàng.",
    "answer": "这次调查我们至少要采访五十位客户。",
    "answerPy": "Zhè cì diàochá wǒmen zhìshǎo yào cǎifǎng wǔ shí wèi kèhù.",
    "note": "Ôn 至少 (Bài 5 · điểm 1); 位 là lượng từ lịch sự.",
    "pair": "至少 + 要 + V + số lượng"
   },
   {
    "promptLang": "vi",
    "prompt": "Phỏng vấn khách hàng, một mặt hiểu được suy nghĩ của họ, mặt khác nghe được ý kiến về sản phẩm mới.",
    "answer": "采访客户，一方面能了解他们的想法，另一方面能听听他们对新产品的看法。",
    "answerPy": "Cǎifǎng kèhù, yìfāngmiàn néng lejiě tāmen de xiǎngfǎ, lìngyìfāngmiàn néng tīng tīng tāmen duì xīn chǎnpǐn de kànfǎ.",
    "note": "Ôn 一方面……另一方面…… (Bài 1 · điểm 4).",
    "pair": "一方面……另一方面……"
   }
  ]
 },
 {
  "n": 16,
  "zh": "产品",
  "py": "chǎnpǐn",
  "pos": "Danh từ",
  "vn": "sản phẩm",
  "hv": "sản phẩm",
  "em": "📦",
  "lesson": 2,
  "explain": [
   "Hàng hóa do nhà máy, công ty làm ra để bán. Hán Việt “sản phẩm” — giống tiếng Việt."
  ],
  "usage": "新产品 · 介绍产品 · 产品的优缺点 · 电子产品.",
  "collo": [
   "新产品",
   "介绍产品",
   "产品的价格",
   "电子产品"
  ],
  "colloFull": [
   {
    "zh": "新产品",
    "py": "Xīn chǎnpǐn",
    "vn": "sản phẩm mới"
   },
   {
    "zh": "介绍产品",
    "py": "Jièshào chǎnpǐn",
    "vn": "giới thiệu sản phẩm"
   },
   {
    "zh": "产品的价格",
    "py": "Chǎnpǐn de jiàgé",
    "vn": "giá sản phẩm"
   },
   {
    "zh": "电子产品",
    "py": "Diàn zǐ chǎnpǐn",
    "vn": "sản phẩm điện tử"
   }
  ],
  "patterns": [
   {
    "s": "对 + 产品 + 的看法",
    "m": "Ý kiến về sản phẩm"
   },
   {
    "s": "产品 + 的 + 优点 / 缺点 / 价格",
    "m": "Định ngữ"
   }
  ],
  "ex_zh": "去四天，打算采访一些客户，了解他们对新产品的看法。",
  "ex_py": "Qù sì tiān, dǎsuàn cǎifǎng yìxiē kèhù, liǎojiě tāmen duì xīn chǎnpǐn de kànfǎ.",
  "ex_vn": "Đi bốn ngày, em định phỏng vấn một số khách hàng, tìm hiểu ý kiến của họ về sản phẩm mới.",
  "exList": [
   {
    "zh": "去四天，打算采访一些客户，了解他们对新产品的看法。",
    "py": "Qù sì tiān, dǎsuàn cǎifǎng yìxiē kèhù, liǎojiě tāmen duì xīn chǎnpǐn de kànfǎ.",
    "vn": "Đi bốn ngày, em định phỏng vấn một số khách hàng, tìm hiểu ý kiến của họ về sản phẩm mới."
   },
   {
    "zh": "后来她在面对不同客户时，能根据他们的情况介绍产品。",
    "py": "Hòulái tā zài miànduì bùtóng kèhù shí, néng gēnjù tāmen de qíngkuàng jièshào chǎnpǐn.",
    "vn": "Về sau, khi gặp những khách hàng khác nhau, cô ấy biết giới thiệu sản phẩm theo tình hình của từng người."
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
    "prompt": "Sản phẩm mới này vừa đẹp vừa dễ dùng.",
    "answer": "这个新产品既好看又好用。",
    "answerPy": "Zhège xīn chǎnpǐn jì hǎokàn yòu hǎo yòng.",
    "note": "Ôn 既……又…… (Bài 4 · điểm 3).",
    "pair": "既……又……"
   },
   {
    "promptLang": "vi",
    "prompt": "Do giá quá cao nên sản phẩm này bán không chạy lắm.",
    "answer": "由于价格太高，所以这个产品卖得不太好。",
    "answerPy": "Yóuyú jiàgé tài gāo, suǒyǐ zhège chǎnpǐn mài de bú tài hǎo.",
    "note": "Ôn 由于 (Bài 2 · điểm 4).",
    "pair": "由于……，所以……"
   }
  ]
 },
 {
  "n": 17,
  "zh": "看法",
  "py": "kànfǎ",
  "pos": "Danh từ",
  "vn": "cách nhìn, quan điểm, ý kiến",
  "hv": "khán pháp",
  "em": "👀",
  "lesson": 2,
  "explain": [
   "Ý kiến, đánh giá của mình về một người / một việc. Mẫu hay gặp: 对 + N + 的看法 (ý kiến về …)."
  ],
  "usage": "我的看法 · 对……的看法 · 有不同看法 · 谈谈看法.",
  "collo": [
   "我的看法",
   "对……的看法",
   "有不同看法",
   "谈谈看法"
  ],
  "colloFull": [
   {
    "zh": "我的看法",
    "py": "Wǒ de kànfǎ",
    "vn": "quan điểm của tôi"
   },
   {
    "zh": "对……的看法",
    "py": "Duì…… de kànfǎ",
    "vn": "ý kiến về …"
   },
   {
    "zh": "有不同看法",
    "py": "Yǒu bùtóng kànfǎ",
    "vn": "có ý kiến khác"
   },
   {
    "zh": "谈谈看法",
    "py": "Tán tán kànfǎ",
    "vn": "nói qua quan điểm"
   }
  ],
  "patterns": [
   {
    "s": "对 + N + 有 + 什么看法",
    "m": "Có ý kiến gì về …"
   },
   {
    "s": "谈谈 / 说说 + 你的看法",
    "m": "Mời ai nói ý kiến"
   }
  ],
  "ex_zh": "去四天，打算采访一些客户，了解他们对新产品的看法。",
  "ex_py": "Qù sì tiān, dǎsuàn cǎifǎng yìxiē kèhù, liǎojiě tāmen duì xīn chǎnpǐn de kànfǎ.",
  "ex_vn": "Đi bốn ngày, em định phỏng vấn một số khách hàng, tìm hiểu ý kiến của họ về sản phẩm mới.",
  "exList": [
   {
    "zh": "去四天，打算采访一些客户，了解他们对新产品的看法。",
    "py": "Qù sì tiān, dǎsuàn cǎifǎng yìxiē kèhù, liǎojiě tāmen duì xīn chǎnpǐn de kànfǎ.",
    "vn": "Đi bốn ngày, em định phỏng vấn một số khách hàng, tìm hiểu ý kiến của họ về sản phẩm mới."
   },
   {
    "zh": "关于换工作，你有什么看法？",
    "py": "Guānyú huàn gōngzuò, nǐ yǒu shénme kànfǎ?",
    "vn": "Về chuyện đổi việc, bạn có quan điểm gì?"
   }
  ],
  "hanzi": [
   {
    "c": "看",
    "p": "kàn",
    "type": "会意字 · Chữ hội ý",
    "st": 9,
    "ord": "phần 手 biến thể (phẩy → ngang → ngang → phẩy) → 目",
    "rad": "目 (mục – mắt)",
    "mean": "nhìn, xem",
    "tip": "Bàn tay 手 đặt trên mắt 目 để che nắng nhìn xa → nhìn. 看来 = nhìn tình hình mà rút ra kết luận. Ôn: 看见 (HSK1 Bài 8), 看上去 (HSK3 Bài 1).",
    "cf": "着 zhe — phần trên giống 羊",
    "w": "看来 / 看上去 / 看起来"
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
    "prompt": "Bạn có cách nhìn thế nào về việc người trẻ thường xuyên đổi việc?",
    "answer": "你对年轻人经常换工作有什么看法？",
    "answerPy": "Nǐ duì niánqīngrén jīngcháng huàn gōngzuò yǒu shénme kànfǎ?",
    "note": "对……有什么看法.",
    "pair": "对……的看法"
   },
   {
    "promptLang": "vi",
    "prompt": "Mỗi người có quan điểm riêng của mình, không cần giống nhau.",
    "answer": "大家各有各的看法，不用都一样。",
    "answerPy": "Dàjiā gè yǒu gè de kànfǎ, búyòng dōu yíyàng.",
    "note": "Ôn 各×各的 (Bài 5 · điểm 3).",
    "pair": "各有各的……"
   }
  ]
 },
 {
  "n": 18,
  "zh": "提前",
  "py": "tíqián",
  "pos": "Động từ",
  "vn": "làm trước, sớm hơn (thời gian định trước); dời lên sớm",
  "hv": "đề tiền",
  "em": "⏩",
  "lesson": 2,
  "explain": [
   "Làm việc gì sớm hơn thời gian đã định, chuẩn bị từ trước. Thường đứng trước động từ: 提前准备, 提前到, 提前十分钟. Trái nghĩa: 推迟 (hoãn lại)."
  ],
  "usage": "提前准备 · 提前到 · 提前一天 · 时间提前了.",
  "collo": [
   "提前准备",
   "提前到",
   "提前一天",
   "时间提前了"
  ],
  "colloFull": [
   {
    "zh": "提前准备",
    "py": "Tíqián zhǔnbèi",
    "vn": "chuẩn bị trước"
   },
   {
    "zh": "提前到",
    "py": "Tíqián dào",
    "vn": "đến sớm"
   },
   {
    "zh": "提前一天",
    "py": "Tíqián yì tiān",
    "vn": "sớm một ngày"
   },
   {
    "zh": "时间提前了",
    "py": "Shíjiān tíqián le",
    "vn": "thời gian được dời lên sớm"
   }
  ],
  "patterns": [
   {
    "s": "提前 + (thời gian) + V",
    "m": "提前十分钟到"
   },
   {
    "s": "N + 提前了",
    "m": "Thời gian bị dời lên sớm"
   }
  ],
  "ex_zh": "那你要提前准备好问题，便于和客户交流。",
  "ex_py": "Nà nǐ yào tíqián zhǔnbèi hǎo wèntí, biànyú hé kèhù jiāoliú.",
  "ex_vn": "Vậy em phải chuẩn bị sẵn câu hỏi từ trước, để tiện trao đổi với khách hàng.",
  "exList": [
   {
    "zh": "那你要提前准备好问题，便于和客户交流。",
    "py": "Nà nǐ yào tíqián zhǔnbèi hǎo wèntí, biànyú hé kèhù jiāoliú.",
    "vn": "Vậy em phải chuẩn bị sẵn câu hỏi từ trước, để tiện trao đổi với khách hàng."
   },
   {
    "zh": "明天的会很重要，大家最好提前十分钟到。",
    "py": "Míngtiān de huì hěn zhòngyào, dàjiā zuìhǎo tíqián shí fēnzhōng dào.",
    "vn": "Cuộc họp ngày mai rất quan trọng, mọi người tốt nhất đến sớm mười phút."
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
    "c": "前",
    "p": "qián",
    "type": "会意字 · Chữ hội ý",
    "st": 9,
    "ord": "丷 → nét ngang → 月 → 刂",
    "rad": "刂 (đao đứng – dao)",
    "mean": "phía trước; trước",
    "tip": "Phần trên 丷 + 一, phần dưới là 月 (vốn là chiếc thuyền) và 刂: thuyền rẽ nước tiến lên → phía trước. 前天 = ngày trước hôm qua → hôm kia. Đối: 后天 (ngày kia – HSK3 Bài 11).",
    "cf": "后 hòu (以后 – HSK3 Bài 8) — nghĩa đối lập: 前天 ↔ 后天",
    "w": "前天 / 以前 / 前面"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Chuyến bay sáng mai, chúng ta phải đến sân bay trước hai tiếng mới kịp.",
    "answer": "明天早上的飞机，我们要提前两个小时到机场才来得及。",
    "answerPy": "Míngtiān zǎoshang de fēijī, wǒmen yào tíqián liǎng gè xiǎoshí dào jīchǎng cái láidejí.",
    "note": "Ôn 来得及 (Bài 4 · điểm 4).",
    "pair": "提前……才来得及"
   },
   {
    "promptLang": "vi",
    "prompt": "Chuẩn bị sẵn câu hỏi từ trước, để lúc phỏng vấn dễ trao đổi với khách hàng.",
    "answer": "提前把问题准备好，采访时好跟客户交流。",
    "answerPy": "Tíqián bǎ wèntí zhǔnbèi hǎo, cǎifǎng shí hǎo gēn kèhù jiāoliú.",
    "note": "Ôn ……，好…… (Bài 6 · điểm 4).",
    "pair": "……，好 + V"
   }
  ]
 },
 {
  "n": 19,
  "zh": "便于",
  "py": "biànyú",
  "pos": "Động từ",
  "vn": "tiện cho, thuận tiện để, dễ (làm gì)",
  "hv": "tiện vu",
  "em": "👌",
  "lesson": 2,
  "explain": [
   "Làm cho việc gì đó dễ dàng, thuận tiện hơn; thường đứng đầu vế sau nói mục đích: ……，便于 + V. Văn viết, trang trọng. Chữ 便 đọc biàn (方便); đọc pián trong 便宜."
  ],
  "usage": "……，便于 + V · 便于交流 · 便于管理.",
  "collo": [
   "便于交流",
   "便于复习",
   "便于管理",
   "便于查找"
  ],
  "colloFull": [
   {
    "zh": "便于交流",
    "py": "Biànyú jiāoliú",
    "vn": "tiện trao đổi"
   },
   {
    "zh": "便于复习",
    "py": "Biànyú fùxí",
    "vn": "tiện ôn tập"
   },
   {
    "zh": "便于管理",
    "py": "Biànyú guǎnlǐ",
    "vn": "dễ quản lý"
   },
   {
    "zh": "便于查找",
    "py": "Biànyú chá zhǎo",
    "vn": "dễ tìm kiếm"
   }
  ],
  "patterns": [
   {
    "s": "……，便于 + V",
    "m": "Vế sau nói mục đích (để tiện …)"
   },
   {
    "s": "便于 ≈ ……，好…… (Bài 6 · điểm 4)",
    "m": "便于 trang trọng hơn 好"
   }
  ],
  "ex_zh": "那你要提前准备好问题，便于和客户交流。",
  "ex_py": "Nà nǐ yào tíqián zhǔnbèi hǎo wèntí, biànyú hé kèhù jiāoliú.",
  "ex_vn": "Vậy em phải chuẩn bị sẵn câu hỏi từ trước, để tiện trao đổi với khách hàng.",
  "exList": [
   {
    "zh": "那你要提前准备好问题，便于和客户交流。",
    "py": "Nà nǐ yào tíqián zhǔnbèi hǎo wèntí, biànyú hé kèhù jiāoliú.",
    "vn": "Vậy em phải chuẩn bị sẵn câu hỏi từ trước, để tiện trao đổi với khách hàng."
   },
   {
    "zh": "老师把学习材料放到了网上，便于学生们复习。",
    "py": "Lǎoshī bǎ xuéxí cáiliào fàng dào le wǎngshàng, biànyú xuésheng men fùxí.",
    "vn": "Thầy giáo đưa tài liệu học tập lên mạng, tiện cho học sinh ôn tập."
   }
  ],
  "hanzi": [
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
    "prompt": "Thầy giáo đưa tài liệu học tập lên mạng, tiện cho học sinh ôn tập.",
    "answer": "老师把学习材料放到了网上，便于学生们复习。",
    "answerPy": "Lǎoshī bǎ xuéxí cáiliào fàng dào le wǎngshàng, biànyú xuésheng men fùxí.",
    "note": "Câu bài tập chọn từ của sách; ôn 材料 (Bài 1).",
    "pair": "……，便于 + V"
   },
   {
    "promptLang": "vi",
    "prompt": "Ghi số điện thoại của khách hàng vào sổ, để tiện liên hệ kịp thời.",
    "answer": "把客户的电话号码记在本子上，便于及时联系。",
    "answerPy": "Bǎ kèhù de diànhuà hàomǎ jì zài běnzi shàng, biànyú jíshí liánxì.",
    "note": "Câu chữ 把 + 记在 (HSK 3) + 及时 (từ mới).",
    "pair": "把……记在……，便于……"
   }
  ]
 },
 {
  "n": 20,
  "zh": "既然",
  "py": "jìrán",
  "pos": "Liên từ",
  "vn": "đã … (thì …), một khi đã …",
  "hv": "ký nhiên",
  "em": "☝️",
  "lesson": 2,
  "explain": [
   "Đứng ở vế TRƯỚC, nêu một sự thật đã rõ / đã xảy ra làm tiền đề; vế sau rút ra kết luận, thường có 就 / 也 / 还: 既然……，就…… = “đã … thì …”. Đừng nhầm với 既……又…… (Bài 4)."
  ],
  "usage": "既然……，就…… · 既然这样 · 既然来了.",
  "collo": [
   "既然这样",
   "既然来了",
   "既然决定了",
   "既然不舒服"
  ],
  "colloFull": [
   {
    "zh": "既然这样",
    "py": "Jìrán zhèyàng",
    "vn": "đã vậy thì"
   },
   {
    "zh": "既然来了",
    "py": "Jìrán lái le",
    "vn": "đã đến rồi"
   },
   {
    "zh": "既然决定了",
    "py": "Jìrán juédìng le",
    "vn": "đã quyết định rồi"
   },
   {
    "zh": "既然不舒服",
    "py": "Jìrán bù shūfu",
    "vn": "đã không khỏe"
   }
  ],
  "patterns": [
   {
    "s": "既然 + sự thật，(Sub) + 就 + kết luận",
    "m": "Bài 7 · điểm 2"
   },
   {
    "s": "既然 ≠ 既 (Bài 4)",
    "m": "既……又…… = vừa … vừa …; 既然 = đã … thì …"
   }
  ],
  "ex_zh": "很好。既然出差时间不长，就要安排好时间，多获得有用的信息。",
  "ex_py": "Hěn hǎo. Jìrán chūchāi shíjiān bù cháng, jiù yào ānpái hǎo shíjiān, duō huòdé yǒuyòng de xìnxī.",
  "ex_vn": "Tốt lắm. Đã đi công tác không lâu thì phải sắp xếp thời gian cho tốt, thu được nhiều thông tin hữu ích.",
  "exList": [
   {
    "zh": "很好。既然出差时间不长，就要安排好时间，多获得有用的信息。",
    "py": "Hěn hǎo. Jìrán chūchāi shíjiān bù cháng, jiù yào ānpái hǎo shíjiān, duō huòdé yǒuyòng de xìnxī.",
    "vn": "Tốt lắm. Đã đi công tác không lâu thì phải sắp xếp thời gian cho tốt, thu được nhiều thông tin hữu ích."
   },
   {
    "zh": "既然大家都同意，我们就这么做吧。",
    "py": "Jìrán dàjiā dōu tóngyì, wǒmen jiù zhème zuò ba.",
    "vn": "Mọi người đã đồng ý cả thì chúng ta làm như vậy đi."
   }
  ],
  "hanzi": [
   {
    "c": "既",
    "p": "jì",
    "type": "左右结构 · Trái-phải",
    "st": 9,
    "ord": "旣 trái → 旡 phải",
    "rad": "旡 (ký)",
    "mean": "đã",
    "tip": "Hình người ăn xong quay đầu đi → ĐÃ XONG. 既然 = đã như vậy; 既……又 = vừa … vừa (Bài 7).",
    "cf": "即 (jí – tức là)",
    "w": "既然 / 既……又……"
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
    "prompt": "Đã không khỏe thì về nhà nghỉ đi.",
    "answer": "既然不舒服，就回家休息吧。",
    "answerPy": "Jìrán bù shūfu, jiù huí jiā xiūxi ba.",
    "note": "Đáp án gợi ý của sách (Bài 7 · điểm 2).",
    "pair": "既然……，就……"
   },
   {
    "promptLang": "vi",
    "prompt": "Đã không kịp nữa rồi thì mai hẵng đi.",
    "answer": "既然来不及了，就明天再去吧。",
    "answerPy": "Jìrán láibùjí le, jiù míngtiān zài qù ba.",
    "note": "Ôn 来不及 (Bài 4 · điểm 4).",
    "pair": "既然……，就……"
   }
  ]
 },
 {
  "n": 21,
  "zh": "谈",
  "py": "tán",
  "pos": "Động từ",
  "vn": "nói chuyện, bàn bạc, trao đổi",
  "hv": "đàm",
  "em": "💬",
  "lesson": 3,
  "explain": [
   "Nói chuyện, trao đổi nghiêm túc về một việc (công việc, làm ăn). 谈成 = bàn thành công, chốt được. Trang trọng hơn 说 / 聊. Hán Việt “đàm” (đàm phán, đàm thoại)."
  ],
  "usage": "谈工作 · 谈生意 · 谈成了 · 谈谈看法.",
  "collo": [
   "谈生意",
   "谈工作",
   "谈成了",
   "谈谈你的看法"
  ],
  "colloFull": [
   {
    "zh": "谈生意",
    "py": "Tán shēngyi",
    "vn": "bàn chuyện làm ăn"
   },
   {
    "zh": "谈工作",
    "py": "Tán gōngzuò",
    "vn": "bàn công việc"
   },
   {
    "zh": "谈成了",
    "py": "Tán chéng le",
    "vn": "bàn thành công"
   },
   {
    "zh": "谈谈你的看法",
    "py": "Tán tán nǐ de kànfǎ",
    "vn": "nói qua ý kiến của bạn"
   }
  ],
  "patterns": [
   {
    "s": "谈 + 成 / 好",
    "m": "Bổ ngữ kết quả: bàn thành công"
   },
   {
    "s": "谈谈 + 看法 / 想法",
    "m": "Lặp động từ: nói qua về …"
   }
  ],
  "ex_zh": "前段时间，杨同乐的同事谈成了一笔不错的生意。",
  "ex_py": "Qián duàn shíjiān, Yáng Tónglè de tóngshì tán chéng le yì bǐ búcuò de shēngyi.",
  "ex_vn": "Thời gian trước, đồng nghiệp của Dương Đồng Lạc đã bàn thành một vụ làm ăn khá tốt.",
  "exList": [
   {
    "zh": "前段时间，杨同乐的同事谈成了一笔不错的生意。",
    "py": "Qián duàn shíjiān, Yáng Tónglè de tóngshì tán chéng le yì bǐ búcuò de shēngyi.",
    "vn": "Thời gian trước, đồng nghiệp của Dương Đồng Lạc đã bàn thành một vụ làm ăn khá tốt."
   },
   {
    "zh": "请你谈谈对这个问题的看法。",
    "py": "Qǐng nǐ tán tán duì zhège wèntí de kànfǎ.",
    "vn": "Mời bạn nói qua quan điểm của mình về vấn đề này."
   }
  ],
  "hanzi": [
   {
    "c": "谈",
    "p": "tán",
    "type": "左右结构 · Trái-phải (giản thể)",
    "st": 10,
    "ord": "讠 (ngôn) trái → 炎 (viêm) phải",
    "rad": "讠 (ngôn – lời nói)",
    "mean": "nói chuyện",
    "tip": "Bộ lời nói 讠 + 炎 (lửa cháy bừng, biểu âm) → LỜI NÓI qua lại sôi nổi, mở rộng thành NÓI CHUYỆN, THẢO LUẬN.",
    "cf": "淡 (dàn – \"nhạt\", bộ 氵\")",
    "w": "谈生意 / 谈话 / 谈成"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Vì họ rất có năng lực nên đã bàn thành một vụ làm ăn lớn.",
    "answer": "因为他们很有能力，所以谈成了一笔大生意。",
    "answerPy": "Yīnwèi tāmen hěn yǒu nénglì, suǒyǐ tán chéng le yì bǐ dà shēngyi.",
    "note": "Đáp án gợi ý của sách (看图造句).",
    "pair": "谈成了一笔生意"
   },
   {
    "promptLang": "vi",
    "prompt": "Đợi khách hàng đến rồi chúng ta bàn tiếp.",
    "answer": "等客户来了，我们再接着谈。",
    "answerPy": "Děng kèhù lái le, wǒmen zài jiēzhe tán.",
    "note": "Ôn 等……再…… (Bài 5 · điểm 4) + 接着 (Bài 2).",
    "pair": "等……再……"
   }
  ]
 },
 {
  "n": 22,
  "zh": "笔",
  "py": "bǐ",
  "pos": "Lượng từ",
  "vn": "khoản, món, vụ (tiền bạc, làm ăn)",
  "hv": "bút",
  "em": "💰",
  "lesson": 3,
  "explain": [
   "Lượng từ cho tiền bạc, vụ làm ăn: 一笔钱 (một khoản tiền), 一笔生意 (một vụ làm ăn). Cùng chữ với danh từ 笔 “cây bút” (HSK 1) — khác cách dùng."
  ],
  "usage": "一笔钱 · 一笔生意 · 一大笔钱.",
  "collo": [
   "一笔钱",
   "一笔生意",
   "一大笔钱",
   "一笔不错的生意"
  ],
  "colloFull": [
   {
    "zh": "一笔钱",
    "py": "Yì bǐ qián",
    "vn": "một khoản tiền"
   },
   {
    "zh": "一笔生意",
    "py": "Yì bǐ shēngyi",
    "vn": "một vụ làm ăn"
   },
   {
    "zh": "一大笔钱",
    "py": "Yí dà bǐ qián",
    "vn": "một khoản tiền lớn"
   },
   {
    "zh": "一笔不错的生意",
    "py": "Yì bǐ búcuò de shēngyi",
    "vn": "một vụ làm ăn khá tốt"
   }
  ],
  "patterns": [
   {
    "s": "一 + 笔 + 钱 / 生意",
    "m": "Lượng từ"
   },
   {
    "s": "一笔钱 ≠ 一支笔",
    "m": "一支笔 = một cây bút"
   }
  ],
  "ex_zh": "前段时间，杨同乐的同事谈成了一笔不错的生意。",
  "ex_py": "Qián duàn shíjiān, Yáng Tónglè de tóngshì tán chéng le yì bǐ búcuò de shēngyi.",
  "ex_vn": "Thời gian trước, đồng nghiệp của Dương Đồng Lạc đã bàn thành một vụ làm ăn khá tốt.",
  "exList": [
   {
    "zh": "前段时间，杨同乐的同事谈成了一笔不错的生意。",
    "py": "Qián duàn shíjiān, Yáng Tónglè de tóngshì tán chéng le yì bǐ búcuò de shēngyi.",
    "vn": "Thời gian trước, đồng nghiệp của Dương Đồng Lạc đã bàn thành một vụ làm ăn khá tốt."
   },
   {
    "zh": "他工作了三年，存了一笔钱，打算自己开一家小店。",
    "py": "Tā gōngzuò le sān nián, cún le yì bǐ qián, dǎsuàn zìjǐ kāi yì jiā xiǎo diàn.",
    "vn": "Anh ấy đi làm ba năm, dành dụm được một khoản tiền, định tự mở một cửa hàng nhỏ."
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
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Tháng trước công ty chúng tôi bàn thành một vụ làm ăn lớn.",
    "answer": "上个月我们公司谈成了一笔大生意。",
    "answerPy": "Shàng gè yuè wǒmen gōngsī tán chéng le yì bǐ dà shēngyi.",
    "note": "一笔 + 生意.",
    "pair": "一笔生意"
   },
   {
    "promptLang": "vi",
    "prompt": "Khoản tiền này ít nhất đủ cho tôi đi du lịch hai lần.",
    "answer": "这笔钱至少够我去旅游两次。",
    "answerPy": "Zhè bǐ qián zhìshǎo gòu wǒ qù lǚyóu liǎng cì.",
    "note": "Ôn 至少 (Bài 5 · điểm 1) + 够 (Bài 5 · điểm 2).",
    "pair": "至少够……"
   }
  ]
 },
 {
  "n": 23,
  "zh": "生意",
  "py": "shēngyi",
  "pos": "Danh từ",
  "vn": "việc làm ăn, kinh doanh, buôn bán",
  "hv": "sinh ý",
  "em": "💼",
  "lesson": 3,
  "explain": [
   "Việc mua bán, kinh doanh để kiếm tiền. Đọc shēngyi (意 thanh nhẹ). Bẫy Hán Việt: “sinh ý” nhưng nghĩa là LÀM ĂN; “ý tưởng” là 想法 / 主意."
  ],
  "usage": "做生意 · 谈生意 · 生意很好 · 一笔生意.",
  "collo": [
   "做生意",
   "谈生意",
   "生意很好",
   "生意人"
  ],
  "colloFull": [
   {
    "zh": "做生意",
    "py": "Zuò shēngyi",
    "vn": "làm ăn, buôn bán"
   },
   {
    "zh": "谈生意",
    "py": "Tán shēngyi",
    "vn": "bàn chuyện làm ăn"
   },
   {
    "zh": "生意很好",
    "py": "Shēngyi hěn hǎo",
    "vn": "buôn bán đắt khách"
   },
   {
    "zh": "生意人",
    "py": "Shēngyi rén",
    "vn": "người làm ăn"
   }
  ],
  "patterns": [
   {
    "s": "做 / 谈 + 生意",
    "m": "Làm ăn / bàn chuyện làm ăn"
   },
   {
    "s": "(cửa hàng) + 生意 + 好 / 不好",
    "m": "Đông khách / ế khách"
   }
  ],
  "ex_zh": "前段时间，杨同乐的同事谈成了一笔不错的生意。",
  "ex_py": "Qián duàn shíjiān, Yáng Tónglè de tóngshì tán chéng le yì bǐ búcuò de shēngyi.",
  "ex_vn": "Thời gian trước, đồng nghiệp của Dương Đồng Lạc đã bàn thành một vụ làm ăn khá tốt.",
  "exList": [
   {
    "zh": "前段时间，杨同乐的同事谈成了一笔不错的生意。",
    "py": "Qián duàn shíjiān, Yáng Tónglè de tóngshì tán chéng le yì bǐ búcuò de shēngyi.",
    "vn": "Thời gian trước, đồng nghiệp của Dương Đồng Lạc đã bàn thành một vụ làm ăn khá tốt."
   },
   {
    "zh": "这家饭馆的菜又便宜又好吃，生意特别好。",
    "py": "Zhè jiā fànguǎn de cài yòu piányi yòu hǎochī, shēngyi tèbié hǎo.",
    "vn": "Món ăn của quán này vừa rẻ vừa ngon, làm ăn cực kỳ phát đạt."
   }
  ],
  "hanzi": [
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
    "prompt": "Bố anh ấy làm ăn ở Thượng Hải, thường xuyên đi công tác.",
    "answer": "他爸爸在上海做生意，经常出差。",
    "answerPy": "Tā bàba zài Shànghǎi zuò shēngyi, jīngcháng chūchāi.",
    "note": "做生意 + 出差 (từ mới).",
    "pair": "做生意"
   },
   {
    "promptLang": "vi",
    "prompt": "Quán này buôn bán rất đắt khách, ngày nào cũng nhiều người xếp hàng, thậm chí trời mưa cũng vậy.",
    "answer": "这家店生意特别好，每天都有很多人排队，甚至下雨天也一样。",
    "answerPy": "Zhè jiā diàn shēngyi tèbié hǎo, měi tiān dōu yǒu hěn duō rén páiduì, shènzhì xiàyǔ tiān yě yíyàng.",
    "note": "Ôn 甚至 (Bài 3 · điểm 3) + 排队 (Bài 6).",
    "pair": "甚至……"
   }
  ]
 },
 {
  "n": 24,
  "zh": "困难",
  "py": "kùnnan",
  "pos": "Danh từ / Tính từ",
  "vn": "khó khăn",
  "hv": "khốn nan",
  "em": "🧗",
  "lesson": 3,
  "explain": [
   "Danh từ: khó khăn, trở ngại (遇到困难). Tính từ: khó khăn, gian nan (生活很困难).",
   "Sách ghi kùnnan (难 thanh nhẹ); khi đọc chậm, nhấn mạnh vẫn nghe kùnnán. Bẫy Hán Việt: âm “khốn nan” nhưng nghĩa chỉ là KHÓ KHĂN, không liên quan “khốn nạn”."
  ],
  "usage": "遇到困难 · 有困难 · 克服困难 · 很困难.",
  "collo": [
   "遇到困难",
   "有困难",
   "克服困难",
   "生活困难"
  ],
  "colloFull": [
   {
    "zh": "遇到困难",
    "py": "Yùdào kùnnan",
    "vn": "gặp khó khăn"
   },
   {
    "zh": "有困难",
    "py": "Yǒu kùnnan",
    "vn": "có khó khăn"
   },
   {
    "zh": "克服困难",
    "py": "Kèfú kùnnan",
    "vn": "vượt qua khó khăn"
   },
   {
    "zh": "生活困难",
    "py": "Shēnghuó kùnnan",
    "vn": "cuộc sống khó khăn"
   }
  ],
  "patterns": [
   {
    "s": "遇到 / 有 + 困难",
    "m": "Danh từ"
   },
   {
    "s": "困难 ≠ 难",
    "m": "难 đứng trước động từ (难学, 难写); 困难 không dùng như vậy"
   }
  ],
  "ex_zh": "刚开始，这位同事也遇到了一些困难。",
  "ex_py": "Gāng kāishǐ, zhè wèi tóngshì yě yùdào le yìxiē kùnnan.",
  "ex_vn": "Lúc mới bắt đầu, cô đồng nghiệp này cũng gặp một số khó khăn.",
  "exList": [
   {
    "zh": "刚开始，这位同事也遇到了一些困难。",
    "py": "Gāng kāishǐ, zhè wèi tóngshì yě yùdào le yìxiē kùnnan.",
    "vn": "Lúc mới bắt đầu, cô đồng nghiệp này cũng gặp một số khó khăn."
   },
   {
    "zh": "这个问题虽然很困难，但是我们一定能解决。",
    "py": "Zhège wèntí suīrán hěn kùnnan, dànshì wǒmen yídìng néng jiějué.",
    "vn": "Vấn đề này tuy rất khó, nhưng chúng ta nhất định giải quyết được."
   }
  ],
  "hanzi": [
   {
    "c": "困",
    "p": "kùn",
    "type": "半包围结构 · Bán bao vây",
    "st": 7,
    "ord": "囗 bao ngoài → 木 (mộc) trong",
    "rad": "囗 (vi – vây quanh)",
    "mean": "khốn khó, mệt mỏi",
    "tip": "Chữ tượng hình cây 木 bị VÂY BÓ trong khung 囗 (bị hạn chế) → nghĩa gốc là KHỐN KHÓ, mở rộng thành MỆT MỎI, BUỒN NGỦ.",
    "cf": "因 (yīn – \"nguyên nhân\", cũng có 囗\")",
    "w": "困 / 困难 / 犯困"
   },
   {
    "c": "难",
    "p": "nán",
    "type": "左右结构 · Trái-phải (giản thể)",
    "st": 10,
    "ord": "又 trái → 隹 (chuy) phải",
    "rad": "又 (hựu)",
    "mean": "khó",
    "tip": "难 (khó) + 道(nói, đường) → khó mà NÓI RẰNG không phải vậy, mở rộng thành phó từ phản vấn CHẲNG LẼ.",
    "cf": "滩 (tān – \"bãi cát\", bộ 氵\")",
    "w": "难道 / 难过 / 困难"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Lúc mới bắt đầu, cô ấy cũng gặp một số khó khăn.",
    "answer": "刚开始，她也遇到了一些困难。",
    "answerPy": "Gāng kāishǐ, tā yě yùdào le yìxiē kùnnan.",
    "note": "Câu trong bài khoá 3.",
    "pair": "遇到 + 困难"
   },
   {
    "promptLang": "vi",
    "prompt": "Có bất kỳ khó khăn gì, cứ báo tôi kịp thời là được.",
    "answer": "有任何困难，及时告诉我就是了。",
    "answerPy": "Yǒu rènhé kùnnan, jíshí gàosu wǒ jiù shì le.",
    "note": "Ôn 任何 (Bài 1) + 就是了 (Bài 2) + 及时 (từ mới).",
    "pair": "任何……，……就是了"
   }
  ]
 },
 {
  "n": 25,
  "zh": "优点",
  "py": "yōudiǎn",
  "pos": "Danh từ",
  "vn": "ưu điểm, điểm mạnh",
  "hv": "ưu điểm",
  "em": "👍",
  "lesson": 3,
  "explain": [
   "Điểm tốt, điểm mạnh của người / vật. Trái nghĩa 缺点. Sách lưu ý: 优缺点 là dạng rút gọn của 优点和缺点."
  ],
  "usage": "有很多优点 · 他的优点是…… · 优缺点.",
  "collo": [
   "很多优点",
   "最大的优点",
   "优缺点",
   "学习别人的优点"
  ],
  "colloFull": [
   {
    "zh": "很多优点",
    "py": "Hěn duō yōudiǎn",
    "vn": "nhiều ưu điểm"
   },
   {
    "zh": "最大的优点",
    "py": "Zuì dà de yōudiǎn",
    "vn": "ưu điểm lớn nhất"
   },
   {
    "zh": "优缺点",
    "py": "Yōu quēdiǎn",
    "vn": "ưu nhược điểm"
   },
   {
    "zh": "学习别人的优点",
    "py": "Xuéxí biérén de yōudiǎn",
    "vn": "học ưu điểm của người khác"
   }
  ],
  "patterns": [
   {
    "s": "Sub + 的优点是 + ……",
    "m": "Giới thiệu điểm mạnh"
   },
   {
    "s": "优缺点 = 优点 + 缺点",
    "m": "Dạng rút gọn"
   }
  ],
  "ex_zh": "虽然她能把产品的优缺点说得很清楚，但实际效果并不理想。",
  "ex_py": "Suīrán tā néng bǎ chǎnpǐn de yōu quēdiǎn shuō de hěn qīngchu, dàn shíjì xiàoguǒ bìng bù lǐxiǎng.",
  "ex_vn": "Tuy cô ấy nói rất rõ ưu nhược điểm của sản phẩm, nhưng hiệu quả thực tế chẳng lý tưởng chút nào.",
  "exList": [
   {
    "zh": "虽然她能把产品的优缺点说得很清楚，但实际效果并不理想。",
    "py": "Suīrán tā néng bǎ chǎnpǐn de yōu quēdiǎn shuō de hěn qīngchu, dàn shíjì xiàoguǒ bìng bù lǐxiǎng.",
    "vn": "Tuy cô ấy nói rất rõ ưu nhược điểm của sản phẩm, nhưng hiệu quả thực tế chẳng lý tưởng chút nào."
   },
   {
    "zh": "经理说他的优点是很会和别人交流。",
    "py": "Jīnglǐ shuō tā de yōudiǎn shì hěn huì hé biérén jiāoliú.",
    "vn": "Giám đốc nói ưu điểm của cậu ấy là rất giỏi giao tiếp với người khác."
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
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Giám đốc nói ưu điểm của cậu ấy là rất giỏi giao tiếp với người khác.",
    "answer": "经理说他的优点是很会和别人交流。",
    "answerPy": "Jīnglǐ shuō tā de yōudiǎn shì hěn huì hé biérén jiāoliú.",
    "note": "Câu bài tập chọn từ của sách; ôn 交流 (Bài 1).",
    "pair": "……的优点是……"
   },
   {
    "promptLang": "vi",
    "prompt": "Xe điện có rất nhiều ưu điểm, chẳng hạn vừa rẻ vừa tiện.",
    "answer": "电动车有很多优点，比如既便宜又方便。",
    "answerPy": "Diàn dòng chē yǒu hěn duō yōudiǎn, bǐrú jì piányi yòu fāngbiàn.",
    "note": "Ôn 电动车 + 既……又…… (Bài 4).",
    "pair": "既……又……"
   }
  ]
 },
 {
  "n": 26,
  "zh": "缺点",
  "py": "quēdiǎn",
  "pos": "Danh từ",
  "vn": "khuyết điểm, nhược điểm",
  "hv": "khuyết điểm",
  "em": "👎",
  "lesson": 3,
  "explain": [
   "Điểm chưa tốt, điểm yếu. Trái nghĩa 优点. 缺 = thiếu (缺少)."
  ],
  "usage": "有缺点 · 改缺点 · 最大的缺点.",
  "collo": [
   "有缺点",
   "改缺点",
   "最大的缺点",
   "优点和缺点"
  ],
  "colloFull": [
   {
    "zh": "有缺点",
    "py": "Yǒu quēdiǎn",
    "vn": "có khuyết điểm"
   },
   {
    "zh": "改缺点",
    "py": "Gǎi quēdiǎn",
    "vn": "sửa khuyết điểm"
   },
   {
    "zh": "最大的缺点",
    "py": "Zuì dà de quēdiǎn",
    "vn": "khuyết điểm lớn nhất"
   },
   {
    "zh": "优点和缺点",
    "py": "Yōudiǎn hé quēdiǎn",
    "vn": "ưu điểm và khuyết điểm"
   }
  ],
  "patterns": [
   {
    "s": "Sub + 的缺点是 + ……",
    "m": "Nói điểm yếu"
   },
   {
    "s": "改 + 缺点",
    "m": "Sửa khuyết điểm"
   }
  ],
  "ex_zh": "虽然她能把产品的优缺点说得很清楚，但实际效果并不理想。",
  "ex_py": "Suīrán tā néng bǎ chǎnpǐn de yōu quēdiǎn shuō de hěn qīngchu, dàn shíjì xiàoguǒ bìng bù lǐxiǎng.",
  "ex_vn": "Tuy cô ấy nói rất rõ ưu nhược điểm của sản phẩm, nhưng hiệu quả thực tế chẳng lý tưởng chút nào.",
  "exList": [
   {
    "zh": "虽然她能把产品的优缺点说得很清楚，但实际效果并不理想。",
    "py": "Suīrán tā néng bǎ chǎnpǐn de yōu quēdiǎn shuō de hěn qīngchu, dàn shíjì xiàoguǒ bìng bù lǐxiǎng.",
    "vn": "Tuy cô ấy nói rất rõ ưu nhược điểm của sản phẩm, nhưng hiệu quả thực tế chẳng lý tưởng chút nào."
   },
   {
    "zh": "每个人都有缺点，有缺点没关系，改了就是了。",
    "py": "Měi gè rén dōu yǒu quēdiǎn, yǒu quēdiǎn méiguānxì, gǎi le jiù shì le.",
    "vn": "Ai cũng có khuyết điểm, có khuyết điểm không sao, sửa là được."
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
   },
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
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Khuyết điểm lớn nhất của tôi là làm việc chưa đủ cẩn thận.",
    "answer": "我最大的缺点是做事不够细心。",
    "answerPy": "Wǒ zuì dà de quēdiǎn shì zuò shì bú gòu xìxīn.",
    "note": "Ôn 不够 + Adj (Bài 5 · điểm 2).",
    "pair": "不够 + Adj"
   },
   {
    "promptLang": "vi",
    "prompt": "Căn nhà này tốt thì tốt, có điều có một khuyết điểm: cách công ty quá xa.",
    "answer": "这个房子好是好，不过有一个缺点：离公司太远。",
    "answerPy": "Zhège fángzi hǎo shì hǎo, búguò yǒu yí gè quēdiǎn: lí gōngsī tài yuǎn.",
    "note": "Ôn A是A，不过…… (Bài 3 · điểm 1).",
    "pair": "A是A，不过……"
   }
  ]
 },
 {
  "n": 27,
  "zh": "实际",
  "py": "shíjì",
  "pos": "Tính từ / Danh từ",
  "vn": "thực tế",
  "hv": "thực tế",
  "em": "📊",
  "lesson": 3,
  "explain": [
   "Danh từ: thực tế, tình hình thật (联系实际).",
   "Tính từ: thực tế, sát với thực tế; 实际 + N: 实际效果 = hiệu quả thực tế. 实际上 = thực ra (≈ 其实)."
  ],
  "usage": "实际效果 · 实际情况 · 实际上 · 不太实际.",
  "collo": [
   "实际效果",
   "实际情况",
   "实际上",
   "不太实际"
  ],
  "colloFull": [
   {
    "zh": "实际效果",
    "py": "Shíjì xiàoguǒ",
    "vn": "hiệu quả thực tế"
   },
   {
    "zh": "实际情况",
    "py": "Shíjì qíngkuàng",
    "vn": "tình hình thực tế"
   },
   {
    "zh": "实际上",
    "py": "Shíjì shang",
    "vn": "thực ra"
   },
   {
    "zh": "不太实际",
    "py": "Bú tài shíjì",
    "vn": "không thực tế lắm"
   }
  ],
  "patterns": [
   {
    "s": "实际 + 效果 / 情况 / 问题",
    "m": "Tính từ làm định ngữ"
   },
   {
    "s": "实际上 = 其实",
    "m": "Thực ra"
   }
  ],
  "ex_zh": "虽然她能把产品的优缺点说得很清楚，但实际效果并不理想。",
  "ex_py": "Suīrán tā néng bǎ chǎnpǐn de yōu quēdiǎn shuō de hěn qīngchu, dàn shíjì xiàoguǒ bìng bù lǐxiǎng.",
  "ex_vn": "Tuy cô ấy nói rất rõ ưu nhược điểm của sản phẩm, nhưng hiệu quả thực tế chẳng lý tưởng chút nào.",
  "exList": [
   {
    "zh": "虽然她能把产品的优缺点说得很清楚，但实际效果并不理想。",
    "py": "Suīrán tā néng bǎ chǎnpǐn de yōu quēdiǎn shuō de hěn qīngchu, dàn shíjì xiàoguǒ bìng bù lǐxiǎng.",
    "vn": "Tuy cô ấy nói rất rõ ưu nhược điểm của sản phẩm, nhưng hiệu quả thực tế chẳng lý tưởng chút nào."
   },
   {
    "zh": "这个计划很好，但是不太实际。",
    "py": "Zhège jìhuà hěn hǎo, dànshì bú tài shíjì.",
    "vn": "Kế hoạch này rất hay, nhưng không thực tế lắm."
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
    "c": "际",
    "p": "jì",
    "type": "左右结构 · Trái-phải (giản thể)",
    "st": 7,
    "ord": "阝(phụ) trái → 示(thị, biến thể) phải",
    "rad": "阝 (phụ – gò đất)",
    "mean": "ranh giới, thực tại",
    "tip": "Bộ 阝(gò đất, ranh giới) → nơi TIẾP GIÁP giữa hai vùng, mở rộng thành THỰC TẠI (nơi lý thuyết gặp thực tế); kết hợp 实(chân thực) thành 实际 = THỰC TẾ.",
    "cf": "察 (chá – \"xem xét\", bộ 宀\")",
    "w": "实际 / 国际 / 实际上"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Kế hoạch tuy viết rất hay, nhưng hiệu quả thực tế chẳng lý tưởng chút nào.",
    "answer": "计划虽然写得很好，但实际效果并不理想。",
    "answerPy": "Jìhuà suīrán xiě de hěn hǎo, dàn shíjì xiàoguǒ bìng bù lǐxiǎng.",
    "note": "Ôn 并不 (Bài 2 · điểm 3).",
    "pair": "并不 + Adj"
   },
   {
    "promptLang": "vi",
    "prompt": "Phải căn cứ vào tình hình thực tế để sắp xếp công việc.",
    "answer": "要根据实际情况安排工作。",
    "answerPy": "Yào gēnjù shíjì qíngkuàng ānpái gōngzuò.",
    "note": "根据 (HSK 3) + 安排 (Bài 5).",
    "pair": "根据实际情况"
   }
  ]
 },
 {
  "n": 28,
  "zh": "效果",
  "py": "xiàoguǒ",
  "pos": "Danh từ",
  "vn": "hiệu quả, kết quả (tốt)",
  "hv": "hiệu quả",
  "em": "✨",
  "lesson": 3,
  "explain": [
   "Kết quả do một việc làm / phương pháp mang lại (thường nói tốt hay chưa tốt). Hán Việt “hiệu quả” — giống tiếng Việt."
  ],
  "usage": "效果很好 · 有效果 · 效果不理想 · 学习效果.",
  "collo": [
   "效果很好",
   "实际效果",
   "学习效果",
   "没有效果"
  ],
  "colloFull": [
   {
    "zh": "效果很好",
    "py": "Xiàoguǒ hěn hǎo",
    "vn": "hiệu quả rất tốt"
   },
   {
    "zh": "实际效果",
    "py": "Shíjì xiàoguǒ",
    "vn": "hiệu quả thực tế"
   },
   {
    "zh": "学习效果",
    "py": "Xuéxí xiàoguǒ",
    "vn": "hiệu quả học tập"
   },
   {
    "zh": "没有效果",
    "py": "Méiyǒu xiàoguǒ",
    "vn": "không có hiệu quả"
   }
  ],
  "patterns": [
   {
    "s": "效果 + 好 / 不错 / 不理想",
    "m": "Nhận xét hiệu quả"
   },
   {
    "s": "有 / 没有 + 效果",
    "m": "Có / không có hiệu quả"
   }
  ],
  "ex_zh": "后来她……能根据他们的情况介绍产品，效果一下就好了很多。",
  "ex_py": "Hòulái tā…… néng gēnjù tāmen de qíngkuàng jièshào chǎnpǐn, xiàoguǒ yíxià jiù hǎo le hěn duō.",
  "ex_vn": "Về sau cô ấy biết giới thiệu sản phẩm theo tình hình của từng khách, hiệu quả lập tức tốt lên rất nhiều.",
  "exList": [
   {
    "zh": "后来她……能根据他们的情况介绍产品，效果一下就好了很多。",
    "py": "Hòulái tā…… néng gēnjù tāmen de qíngkuàng jièshào chǎnpǐn, xiàoguǒ yíxià jiù hǎo le hěn duō.",
    "vn": "Về sau cô ấy biết giới thiệu sản phẩm theo tình hình của từng khách, hiệu quả lập tức tốt lên rất nhiều."
   },
   {
    "zh": "我最近一直坚持跑步，我觉得效果很好，身体比以前好多了。",
    "py": "Wǒ zuìjìn yìzhí jiānchí pǎobù, wǒ juéde xiàoguǒ hěn hǎo, shēntǐ bǐ yǐqián hǎoduō le.",
    "vn": "Gần đây tôi luôn kiên trì chạy bộ, tôi thấy hiệu quả rất tốt, sức khỏe tốt hơn trước nhiều."
   }
  ],
  "hanzi": [
   {
    "c": "效",
    "p": "xiào",
    "type": "左右结构 · Trái-phải",
    "st": 10,
    "ord": "交 (giao) trái → 攵 (phốc) phải",
    "rad": "攵 (phốc – hành động)",
    "mean": "kết quả, hiệu lực",
    "tip": "Bộ 攵(hành động) + 交(giao thoa, tương tác) → hành động tạo ra KẾT QUẢ, kết hợp 果(quả, kết quả) thành 效果 = HIỆU QUẢ.",
    "cf": "郊 (jiāo – \"ngoại ô\", bộ 阝\")",
    "w": "效果 / 有效 / 效率"
   },
   {
    "c": "果",
    "p": "guǒ",
    "type": "独体字 · Chữ đơn",
    "st": 8,
    "ord": "田 trên → 木 dưới",
    "rad": "木 (mộc – cây)",
    "mean": "quả, kết quả",
    "tip": "Chữ tượng hình QUẢ trên cây → mở rộng thành KẾT QUẢ (thành quả cuối cùng), kết hợp 结(kết thành) thành 结果 = KẾT QUẢ.",
    "cf": "东 (dōng – \"phương đông\", không liên quan)",
    "w": "结果 / 效果 / 成果"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Gần đây tôi luôn kiên trì chạy bộ, thấy hiệu quả rất tốt.",
    "answer": "我最近一直坚持跑步，觉得效果很好。",
    "answerPy": "Wǒ zuìjìn yìzhí jiānchí pǎobù, juéde xiàoguǒ hěn hǎo.",
    "note": "Câu bài tập chọn từ của sách.",
    "pair": "效果很好"
   },
   {
    "promptLang": "vi",
    "prompt": "Cùng với việc thay đổi phương pháp, hiệu quả học tập ngày càng tốt.",
    "answer": "随着方法的改变，学习效果越来越好。",
    "answerPy": "Suízhe fāngfǎ de gǎibiàn, xuéxí xiàoguǒ yuèláiyuè hǎo.",
    "note": "Ôn 随着 (Bài 1 · điểm 3) + 改变 (Bài 3).",
    "pair": "随着……，越来越……"
   }
  ]
 },
 {
  "n": 29,
  "zh": "点",
  "py": "diǎn",
  "pos": "Danh từ",
  "vn": "điểm (mặt, khía cạnh)",
  "hv": "điểm",
  "em": "📍",
  "lesson": 3,
  "explain": [
   "Một mặt, một khía cạnh của sự việc: 关注点 (điểm quan tâm), 优点, 缺点, 重点 (trọng điểm). Khác 点 chỉ giờ (三点) hay 一点儿 (một chút) đã học."
  ],
  "usage": "关注点 · 这一点 · 有两点 · 重点.",
  "collo": [
   "关注点",
   "这一点",
   "重点",
   "有几点建议"
  ],
  "colloFull": [
   {
    "zh": "关注点",
    "py": "Guānzhù diǎn",
    "vn": "điểm quan tâm"
   },
   {
    "zh": "这一点",
    "py": "Zhè yì diǎn",
    "vn": "điểm này"
   },
   {
    "zh": "重点",
    "py": "Zhòngdiǎn",
    "vn": "trọng điểm"
   },
   {
    "zh": "有几点建议",
    "py": "Yǒu jǐ diǎn jiànyì",
    "vn": "có vài điểm đề nghị"
   }
  ],
  "patterns": [
   {
    "s": "这一点 / 两点 + N",
    "m": "Lượng: một điểm, mấy điểm"
   },
   {
    "s": "N / V + 点",
    "m": "关注点, 优点, 缺点, 重点"
   }
  ],
  "ex_zh": "其实，不同年龄、不同性别的客户对产品的关注点是不一样的。",
  "ex_py": "Qíshí, bùtóng niánlíng, bùtóng xìngbié de kèhù duì chǎnpǐn de guānzhù diǎn shì bù yíyàng de.",
  "ex_vn": "Thực ra, khách hàng khác tuổi, khác giới tính có điểm quan tâm đến sản phẩm không giống nhau.",
  "exList": [
   {
    "zh": "其实，不同年龄、不同性别的客户对产品的关注点是不一样的。",
    "py": "Qíshí, bùtóng niánlíng, bùtóng xìngbié de kèhù duì chǎnpǐn de guānzhù diǎn shì bù yíyàng de.",
    "vn": "Thực ra, khách hàng khác tuổi, khác giới tính có điểm quan tâm đến sản phẩm không giống nhau."
   },
   {
    "zh": "这一点很重要，大家一定要注意。",
    "py": "Zhè yì diǎn hěn zhòngyào, dàjiā yídìng yào zhùyì.",
    "vn": "Điểm này rất quan trọng, mọi người nhất định phải chú ý."
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
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Về điểm này, tôi đồng ý với quan điểm của bạn.",
    "answer": "在这一点上，我同意你的看法。",
    "answerPy": "Zài zhè yì diǎn shàng, wǒ tóngyì nǐ de kànfǎ.",
    "note": "这一点 + 看法 (từ mới).",
    "pair": "在这一点上"
   },
   {
    "promptLang": "vi",
    "prompt": "Tôi có hai điểm đề nghị, mong mọi người tham khảo.",
    "answer": "我有两点建议，希望大家参考。",
    "answerPy": "Wǒ yǒu liǎng diǎn jiànyì, xīwàng dàjiā cānkǎo.",
    "note": "Ôn 建议 (Bài 2 · từ mới).",
    "pair": "两点 + 建议"
   }
  ]
 },
 {
  "n": 30,
  "zh": "一下",
  "py": "yíxià",
  "pos": "Phó từ",
  "vn": "ngay lập tức, bỗng chốc, một cái là",
  "hv": "nhất hạ",
  "em": "⚡",
  "lesson": 3,
  "explain": [
   "Phó từ chỉ việc xảy ra rất nhanh, đột ngột; thường đi với 就: 效果一下就好了很多 = hiệu quả lập tức tốt lên nhiều. Khác 一下 sau động từ (看一下 = xem một chút) đã học ở HSK 2. Viết yíxià vì 一 biến điệu trước thanh 4."
  ],
  "usage": "一下就…… · 一下子 (khẩu ngữ).",
  "collo": [
   "一下就明白了",
   "一下就好了",
   "一下就找到了",
   "一下子"
  ],
  "colloFull": [
   {
    "zh": "一下就明白了",
    "py": "Yíxià jiù míngbai le",
    "vn": "hiểu ngay"
   },
   {
    "zh": "一下就好了",
    "py": "Yíxià jiù hǎo le",
    "vn": "khỏi / tốt lên ngay"
   },
   {
    "zh": "一下就找到了",
    "py": "Yíxià jiù zhǎo dào le",
    "vn": "tìm thấy ngay"
   },
   {
    "zh": "一下子",
    "py": "Yíxià zǐ",
    "vn": "bỗng chốc"
   }
  ],
  "patterns": [
   {
    "s": "一下 + 就 + V / Adj + 了",
    "m": "Phó từ: ngay lập tức"
   },
   {
    "s": "V + 一下 ≠ 一下 + 就 + V",
    "m": "看一下 (xem chút) / 一下就看到了 (thấy ngay)"
   }
  ],
  "ex_zh": "后来她……能根据他们的情况介绍产品，效果一下就好了很多。",
  "ex_py": "Hòulái tā…… néng gēnjù tāmen de qíngkuàng jièshào chǎnpǐn, xiàoguǒ yíxià jiù hǎo le hěn duō.",
  "ex_vn": "Về sau cô ấy biết giới thiệu sản phẩm theo tình hình của từng khách, hiệu quả lập tức tốt lên rất nhiều.",
  "exList": [
   {
    "zh": "后来她……能根据他们的情况介绍产品，效果一下就好了很多。",
    "py": "Hòulái tā…… néng gēnjù tāmen de qíngkuàng jièshào chǎnpǐn, xiàoguǒ yíxià jiù hǎo le hěn duō.",
    "vn": "Về sau cô ấy biết giới thiệu sản phẩm theo tình hình của từng khách, hiệu quả lập tức tốt lên rất nhiều."
   },
   {
    "zh": "您讲得真好，讲完我一下就明白了。",
    "py": "Nín jiǎng de zhēn hǎo, jiǎng wán wǒ yíxià jiù míngbai le.",
    "vn": "Thầy giảng hay quá, giảng xong em hiểu ngay."
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
    "prompt": "Thầy giảng hay quá, giảng xong em hiểu ngay.",
    "answer": "您讲得真好，讲完我一下就明白了。",
    "answerPy": "Nín jiǎng de zhēn hǎo, jiǎng wán wǒ yíxià jiù míngbai le.",
    "note": "Câu bài tập chọn từ của sách.",
    "pair": "一下就……了"
   },
   {
    "promptLang": "vi",
    "prompt": "Thấy rẻ như vậy, cô ấy mua luôn ba cái, thậm chí chẳng hỏi có dễ dùng không.",
    "answer": "看到这么便宜，她一下就买了三个，甚至没问好不好用。",
    "answerPy": "Kàn dào zhème piányi, tā yíxià jiù mǎi le sān gè, shènzhì méi wèn hǎo bu hǎo yòng.",
    "note": "Ôn 甚至 (Bài 3 · điểm 3).",
    "pair": "一下就……，甚至……"
   }
  ]
 },
 {
  "n": 31,
  "zh": "份",
  "py": "fèn",
  "pos": "Lượng từ",
  "vn": "phần, bản, suất; (một) công việc",
  "hv": "phần",
  "em": "📑",
  "lesson": 4,
  "explain": [
   "Lượng từ cho: công việc (一份工作), tài liệu / báo (一份报纸, 一份计划书), phần ăn (一份饭), món quà (一份礼物)."
  ],
  "usage": "一份工作 · 一份材料 · 一份礼物 · 两份饭.",
  "collo": [
   "一份工作",
   "一份报纸",
   "一份礼物",
   "两份饭"
  ],
  "colloFull": [
   {
    "zh": "一份工作",
    "py": "Yí fèn gōngzuò",
    "vn": "một công việc"
   },
   {
    "zh": "一份报纸",
    "py": "Yí fèn bàozhǐ",
    "vn": "một tờ báo"
   },
   {
    "zh": "一份礼物",
    "py": "Yí fèn lǐwù",
    "vn": "một món quà"
   },
   {
    "zh": "两份饭",
    "py": "Liǎng fèn fàn",
    "vn": "hai suất cơm"
   }
  ],
  "patterns": [
   {
    "s": "一份 + 工作 / 礼物 / 材料",
    "m": "Lượng từ"
   },
   {
    "s": "下一份工作",
    "m": "Công việc tiếp theo"
   }
  ],
  "ex_zh": "有的年轻人经常换工作，总觉得下一份工作会更好。",
  "ex_py": "Yǒude niánqīngrén jīngcháng huàn gōngzuò, zǒng juéde xià yí fèn gōngzuò huì gèng hǎo.",
  "ex_vn": "Có những người trẻ thường xuyên đổi việc, luôn cho rằng công việc tiếp theo sẽ tốt hơn.",
  "exList": [
   {
    "zh": "有的年轻人经常换工作，总觉得下一份工作会更好。",
    "py": "Yǒude niánqīngrén jīngcháng huàn gōngzuò, zǒng juéde xià yí fèn gōngzuò huì gèng hǎo.",
    "vn": "Có những người trẻ thường xuyên đổi việc, luôn cho rằng công việc tiếp theo sẽ tốt hơn."
   },
   {
    "zh": "我想找一份离家近的工作。",
    "py": "Wǒ xiǎng zhǎo yí fèn lí jiā jìn de gōngzuò.",
    "vn": "Tôi muốn tìm một công việc gần nhà."
   }
  ],
  "hanzi": [
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
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Cô ấy tìm được một công việc vừa nhẹ nhàng vừa lương cao.",
    "answer": "她找到了一份既轻松又工资高的工作。",
    "answerPy": "Tā zhǎo dào le yí fèn jì qīngsōng yòu gōngzī gāo de gōngzuò.",
    "note": "Ôn 既……又…… (Bài 4 · điểm 3).",
    "pair": "一份 + 工作"
   },
   {
    "promptLang": "vi",
    "prompt": "Mỗi người ít nhất phải chuẩn bị hai bản tài liệu.",
    "answer": "每个人至少要准备两份材料。",
    "answerPy": "Měi gè rén zhìshǎo yào zhǔnbèi liǎng fèn cáiliào.",
    "note": "Ôn 至少 (Bài 5 · điểm 1) + 材料 (Bài 1).",
    "pair": "至少 + 两份"
   }
  ]
 },
 {
  "n": 32,
  "zh": "积累",
  "py": "jīlěi",
  "pos": "Động từ",
  "vn": "tích lũy, gom góp",
  "hv": "tích lũy",
  "em": "🧱",
  "lesson": 4,
  "explain": [
   "Gom góp dần dần từng chút: kinh nghiệm, kiến thức, tiền bạc… Chữ 累 ở đây đọc lěi; đọc lèi là “mệt” (很累) — cùng chữ khác âm."
  ],
  "usage": "积累经验 · 积累知识 · 慢慢积累.",
  "collo": [
   "积累经验",
   "积累知识",
   "积累词语",
   "慢慢积累"
  ],
  "colloFull": [
   {
    "zh": "积累经验",
    "py": "Jīlěi jīngyàn",
    "vn": "tích lũy kinh nghiệm"
   },
   {
    "zh": "积累知识",
    "py": "Jīlěi zhīshi",
    "vn": "tích lũy kiến thức"
   },
   {
    "zh": "积累词语",
    "py": "Jīlěi cíyǔ",
    "vn": "tích lũy từ vựng"
   },
   {
    "zh": "慢慢积累",
    "py": "Màn màn jīlěi",
    "vn": "tích lũy dần dần"
   }
  ],
  "patterns": [
   {
    "s": "积累 + 经验 / 知识 / 钱",
    "m": "Tích lũy cái gì"
   },
   {
    "s": "积累 lěi ≠ 累 lèi",
    "m": "积累 (tích lũy) / 很累 (mệt)"
   }
  ],
  "ex_zh": "如果总是换工作，不但很难积累经验，还可能会使自己的发展受到影响。",
  "ex_py": "Rúguǒ zǒngshì huàn gōngzuò, búdàn hěn nán jīlěi jīngyàn, hái kěnéng huì shǐ zìjǐ de fāzhǎn shòudào yǐngxiǎng.",
  "ex_vn": "Nếu cứ đổi việc mãi thì không những khó tích lũy kinh nghiệm, mà còn có thể khiến sự phát triển của bản thân bị ảnh hưởng.",
  "exList": [
   {
    "zh": "如果总是换工作，不但很难积累经验，还可能会使自己的发展受到影响。",
    "py": "Rúguǒ zǒngshì huàn gōngzuò, búdàn hěn nán jīlěi jīngyàn, hái kěnéng huì shǐ zìjǐ de fāzhǎn shòudào yǐngxiǎng.",
    "vn": "Nếu cứ đổi việc mãi thì không những khó tích lũy kinh nghiệm, mà còn có thể khiến sự phát triển của bản thân bị ảnh hưởng."
   },
   {
    "zh": "通过这次调查，她也积累了不少经验。",
    "py": "Tōngguò zhè cì diàochá, tā yě jīlěi le bù shǎo jīngyàn.",
    "vn": "Qua lần khảo sát này, cô ấy cũng tích lũy được không ít kinh nghiệm."
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
    "c": "累",
    "p": "lěi",
    "type": "形声字 · Chữ hình thanh",
    "st": 11,
    "ord": "田 → 糸",
    "rad": "糸 (mịch – sợi tơ)",
    "mean": "mệt (lèi); chồng chất, tích lại (lěi)",
    "tip": "田 ở trên + 糸 (sợi tơ) ở dưới: sợi tơ cuộn chồng lớp này lên lớp khác → chồng chất, tích lũy (积累 jīlěi); làm nhiều quá thì “mệt” (很累 lèi).",
    "cf": "紧 jǐn (chặt) — trên là 〢 + 又; 系 xì — trên là 丿",
    "w": "积累 / 很累 / 累了"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Qua lần khảo sát này, cô ấy cũng tích lũy được không ít kinh nghiệm.",
    "answer": "通过这次调查，她也积累了不少经验。",
    "answerPy": "Tōngguò zhè cì diàochá, tā yě jīlěi le bù shǎo jīngyàn.",
    "note": "Câu trong bài tập hoàn thành đoạn văn của sách.",
    "pair": "积累了 + 经验"
   },
   {
    "promptLang": "vi",
    "prompt": "Lần đi công tác này tôi không chỉ tích lũy kinh nghiệm mà còn quen được nhiều khách hàng.",
    "answer": "这次出差，我不仅积累了经验，还认识了很多客户。",
    "answerPy": "Zhè cì chūchāi, wǒ bùjǐn jīlěi le jīngyàn, hái rènshi le hěn duō kèhù.",
    "note": "Ôn 不仅……还…… (Bài 3 · điểm 2).",
    "pair": "不仅……还……"
   }
  ]
 },
 {
  "n": 33,
  "zh": "使",
  "py": "shǐ",
  "pos": "Động từ",
  "vn": "làm cho, khiến cho",
  "hv": "sử",
  "em": "🔄",
  "lesson": 4,
  "explain": [
   "Dùng trong câu kiêm ngữ: A + 使 + B + V / Adj — A (nguyên nhân, sự việc) làm cho B thay đổi / có kết quả. Trang trọng hơn 让. Không dùng 使 để “bảo ai làm gì” (✗ 经理使我去出差 → ✓ 经理让我去出差)."
  ],
  "usage": "使人高兴 · 使……受到影响 · 使……变得…… · 使我明白了.",
  "collo": [
   "使人高兴",
   "使……受到影响",
   "使……变得……",
   "使我明白了"
  ],
  "colloFull": [
   {
    "zh": "使人高兴",
    "py": "Shǐ rén gāoxìng",
    "vn": "khiến người ta vui"
   },
   {
    "zh": "使……受到影响",
    "py": "Shǐ…… shòudào yǐngxiǎng",
    "vn": "khiến … bị ảnh hưởng"
   },
   {
    "zh": "使……变得……",
    "py": "Shǐ…… biàn de……",
    "vn": "làm … trở nên …"
   },
   {
    "zh": "使我明白了",
    "py": "Shǐ wǒ míngbai le",
    "vn": "giúp tôi hiểu ra"
   }
  ],
  "patterns": [
   {
    "s": "A + 使 + B + V / Adj",
    "m": "Bài 7 · điểm 4"
   },
   {
    "s": "使 ≠ 让 (bảo, nhờ)",
    "m": "使 không dùng cho mệnh lệnh"
   }
  ],
  "ex_zh": "如果总是换工作，不但很难积累经验，还可能会使自己的发展受到影响。",
  "ex_py": "Rúguǒ zǒngshì huàn gōngzuò, búdàn hěn nán jīlěi jīngyàn, hái kěnéng huì shǐ zìjǐ de fāzhǎn shòudào yǐngxiǎng.",
  "ex_vn": "Nếu cứ đổi việc mãi thì không những khó tích lũy kinh nghiệm, mà còn có thể khiến sự phát triển của bản thân bị ảnh hưởng.",
  "exList": [
   {
    "zh": "如果总是换工作，不但很难积累经验，还可能会使自己的发展受到影响。",
    "py": "Rúguǒ zǒngshì huàn gōngzuò, búdàn hěn nán jīlěi jīngyàn, hái kěnéng huì shǐ zìjǐ de fāzhǎn shòudào yǐngxiǎng.",
    "vn": "Nếu cứ đổi việc mãi thì không những khó tích lũy kinh nghiệm, mà còn có thể khiến sự phát triển của bản thân bị ảnh hưởng."
   },
   {
    "zh": "这个新方法使工作变得更加简单了。",
    "py": "Zhège xīn fāngfǎ shǐ gōngzuò biàn de gèng jiā jiǎndān le.",
    "vn": "Phương pháp mới này khiến công việc trở nên đơn giản hơn."
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
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Trao đổi nhiều với đồng nghiệp có thể khiến bạn nhanh chóng thích nghi với môi trường làm việc mới.",
    "answer": "和同事多交流可以使你更快适应新的工作环境。",
    "answerPy": "Hé tóngshì duō jiāoliú kěyǐ shǐ nǐ gèng kuài shìyìng xīn de gōngzuò huánjìng.",
    "note": "Đáp án gợi ý của sách (Bài 7 · điểm 4); ôn 适应 (Bài 1).",
    "pair": "A 使 B + V"
   },
   {
    "promptLang": "vi",
    "prompt": "Cùng với sự phát triển của mua sắm trên mạng, chuyển phát nhanh khiến cuộc sống của mọi người ngày càng tiện lợi.",
    "answer": "随着网购的发展，快递使人们的生活越来越方便。",
    "answerPy": "Suízhe wǎng gòu de fāzhǎn, kuài dì shǐ rén men de shēnghuó yuèláiyuè fāngbiàn.",
    "note": "Ôn 随着 (Bài 1) + 网购, 快递 (Bài 3).",
    "pair": "随着……，A 使 B……"
   }
  ]
 },
 {
  "n": 34,
  "zh": "进入",
  "py": "jìnrù",
  "pos": "Động từ",
  "vn": "bước vào, đi vào",
  "hv": "tiến nhập",
  "em": "🚪",
  "lesson": 4,
  "explain": [
   "Đi vào một nơi, một phạm vi hay một giai đoạn mới: 进入社会 (bước vào đời — bắt đầu đi làm), 进入大学. Trang trọng hơn 进; phía sau không cần 去 / 来."
  ],
  "usage": "进入社会 · 进入大学 · 进入公司 · 进入冬天.",
  "collo": [
   "进入社会",
   "进入大学",
   "进入公司",
   "进入冬天"
  ],
  "colloFull": [
   {
    "zh": "进入社会",
    "py": "Jìnrù shèhuì",
    "vn": "bước vào xã hội"
   },
   {
    "zh": "进入大学",
    "py": "Jìnrù dàxué",
    "vn": "vào đại học"
   },
   {
    "zh": "进入公司",
    "py": "Jìnrù gōngsī",
    "vn": "vào công ty"
   },
   {
    "zh": "进入冬天",
    "py": "Jìnrù dōngtiān",
    "vn": "bước vào mùa đông"
   }
  ],
  "patterns": [
   {
    "s": "进入 + nơi / giai đoạn",
    "m": "Không cần 去 / 来 phía sau"
   },
   {
    "s": "刚进入社会",
    "m": "Vừa bước vào đời"
   }
  ],
  "ex_zh": "我认为，年轻人刚进入社会时，不能只关心工资的高低，更要重视学习。",
  "ex_py": "Wǒ rènwéi, niánqīngrén gāng jìnrù shèhuì shí, bù néng zhǐ guānxīn gōngzī de gāo dī, gèng yào zhòngshì xuéxí.",
  "ex_vn": "Tôi cho rằng người trẻ vừa bước vào xã hội không thể chỉ quan tâm lương cao hay thấp, mà càng phải coi trọng việc học.",
  "exList": [
   {
    "zh": "我认为，年轻人刚进入社会时，不能只关心工资的高低，更要重视学习。",
    "py": "Wǒ rènwéi, niánqīngrén gāng jìnrù shèhuì shí, bù néng zhǐ guānxīn gōngzī de gāo dī, gèng yào zhòngshì xuéxí.",
    "vn": "Tôi cho rằng người trẻ vừa bước vào xã hội không thể chỉ quan tâm lương cao hay thấp, mà càng phải coi trọng việc học."
   },
   {
    "zh": "随着天气越来越冷，北京已经进入了冬天。",
    "py": "Suízhe tiānqì yuèláiyuè lěng, Běijīng yǐjīng jìnrù le dōngtiān.",
    "vn": "Thời tiết ngày càng lạnh, Bắc Kinh đã bước vào mùa đông."
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
    "prompt": "Tốt nghiệp xong anh ấy vào làm ở một công ty quốc tế.",
    "answer": "毕业以后，他进入了一家国际公司工作。",
    "answerPy": "Bìyè yǐhòu, tā jìnrù le yì jiā guójì gōngsī gōngzuò.",
    "note": "Ôn 毕业 (Bài 2) + 国际 (Bài 1).",
    "pair": "进入 + 公司"
   },
   {
    "promptLang": "vi",
    "prompt": "Mới bước vào xã hội, gặp khó khăn là chuyện bình thường, chẳng có gì phải sợ.",
    "answer": "刚进入社会，遇到困难很正常，没有什么好怕的。",
    "answerPy": "Gāng jìnrù shèhuì, yùdào kùnnan hěn zhèngcháng, méiyǒu shénme hǎo pà de.",
    "note": "Ôn 没有什么好×的 (Bài 6 · điểm 2).",
    "pair": "没有什么好 V 的"
   }
  ]
 },
 {
  "n": 35,
  "zh": "社会",
  "py": "shèhuì",
  "pos": "Danh từ",
  "vn": "xã hội",
  "hv": "xã hội",
  "em": "🌏",
  "lesson": 4,
  "explain": [
   "Cộng đồng người cùng sống và làm việc. 进入社会 = ra trường đi làm, bắt đầu cuộc sống tự lập. Hán Việt giống tiếng Việt."
  ],
  "usage": "进入社会 · 社会经验 · 社会发展 · 社会活动.",
  "collo": [
   "进入社会",
   "社会经验",
   "社会发展",
   "社会活动"
  ],
  "colloFull": [
   {
    "zh": "进入社会",
    "py": "Jìnrù shèhuì",
    "vn": "bước vào xã hội"
   },
   {
    "zh": "社会经验",
    "py": "Shèhuì jīngyàn",
    "vn": "kinh nghiệm xã hội"
   },
   {
    "zh": "社会发展",
    "py": "Shèhuì fāzhǎn",
    "vn": "sự phát triển xã hội"
   },
   {
    "zh": "社会活动",
    "py": "Shèhuì huódòng",
    "vn": "hoạt động xã hội"
   }
  ],
  "patterns": [
   {
    "s": "社会 + 经验 / 发展 / 问题",
    "m": "Làm định ngữ"
   },
   {
    "s": "进入 + 社会",
    "m": "Bước vào đời"
   }
  ],
  "ex_zh": "我认为，年轻人刚进入社会时，不能只关心工资的高低，更要重视学习。",
  "ex_py": "Wǒ rènwéi, niánqīngrén gāng jìnrù shèhuì shí, bù néng zhǐ guānxīn gōngzī de gāo dī, gèng yào zhòngshì xuéxí.",
  "ex_vn": "Tôi cho rằng người trẻ vừa bước vào xã hội không thể chỉ quan tâm lương cao hay thấp, mà càng phải coi trọng việc học.",
  "exList": [
   {
    "zh": "我认为，年轻人刚进入社会时，不能只关心工资的高低，更要重视学习。",
    "py": "Wǒ rènwéi, niánqīngrén gāng jìnrù shèhuì shí, bù néng zhǐ guānxīn gōngzī de gāo dī, gèng yào zhòngshì xuéxí.",
    "vn": "Tôi cho rằng người trẻ vừa bước vào xã hội không thể chỉ quan tâm lương cao hay thấp, mà càng phải coi trọng việc học."
   },
   {
    "zh": "大学生应该多参加社会活动，积累一些经验。",
    "py": "Dàxuéshēng yīnggāi duō cānjiā shèhuì huódòng, jīlěi yìxiē jīngyàn.",
    "vn": "Sinh viên nên tham gia nhiều hoạt động xã hội, tích lũy chút kinh nghiệm."
   }
  ],
  "hanzi": [
   {
    "c": "社",
    "p": "shè",
    "type": "左右结构 · Trái-phải",
    "st": 7,
    "ord": "礻 trái → 土 phải",
    "rad": "礻 (thị)",
    "mean": "xã",
    "tip": "礻(thần) + 土(đất) → thần đất, nơi dân làng tụ họp → XÃ. 社会 = xã hội; 报社 = tòa soạn.",
    "cf": "土 (tǔ – đất)",
    "w": "社会 / 报社 / 社区"
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
    "prompt": "Kinh nghiệm xã hội của anh ấy còn chưa đủ, phải học hỏi nhiều.",
    "answer": "他的社会经验还不够，要多学习。",
    "answerPy": "Tā de shèhuì jīngyàn hái bú gòu, yào duō xuéxí.",
    "note": "Ôn 不够 (Bài 5 · điểm 2).",
    "pair": "N + 不够"
   },
   {
    "promptLang": "vi",
    "prompt": "Cùng với sự phát triển của xã hội, người đổi việc ngày càng nhiều.",
    "answer": "随着社会的发展，换工作的人越来越多。",
    "answerPy": "Suízhe shèhuì de fāzhǎn, huàn gōngzuò de rén yuèláiyuè duō.",
    "note": "Ôn 随着 (Bài 1 · điểm 3).",
    "pair": "随着……的发展"
   }
  ]
 },
 {
  "n": 36,
  "zh": "管理",
  "py": "guǎnlǐ",
  "pos": "Động từ",
  "vn": "quản lý",
  "hv": "quản lý",
  "em": "🗂️",
  "lesson": 4,
  "explain": [
   "Phụ trách, sắp xếp, trông coi người / việc / tiền bạc cho có trật tự. Cũng làm định ngữ: 管理方式 (cách quản lý), 酒店管理 (ngành quản trị khách sạn)."
  ],
  "usage": "管理公司 · 管理方式 · 酒店管理 · 时间管理.",
  "collo": [
   "管理公司",
   "管理方式",
   "酒店管理",
   "时间管理"
  ],
  "colloFull": [
   {
    "zh": "管理公司",
    "py": "Guǎnlǐ gōngsī",
    "vn": "quản lý công ty"
   },
   {
    "zh": "管理方式",
    "py": "Guǎnlǐ fāngshì",
    "vn": "cách quản lý"
   },
   {
    "zh": "酒店管理",
    "py": "Jiǔdiàn guǎnlǐ",
    "vn": "quản trị khách sạn"
   },
   {
    "zh": "时间管理",
    "py": "Shíjiān guǎnlǐ",
    "vn": "quản lý thời gian"
   }
  ],
  "patterns": [
   {
    "s": "管理 + N (公司 / 时间 / 钱)",
    "m": "Động từ"
   },
   {
    "s": "N + 管理 + 专业",
    "m": "Ngành quản lý …"
   }
  ],
  "ex_zh": "比如，学习课本中没有的专业知识，了解公司的管理方式，学会和同事有效交流，等等。",
  "ex_py": "Bǐrú, xuéxí kèběn zhōng méiyǒu de zhuānyè zhīshí, liǎojiě gōngsī de guǎnlǐ fāngshì, xué huì hé tóngshì yǒuxiào jiāoliú, děng děng.",
  "ex_vn": "Ví dụ: học kiến thức chuyên môn không có trong sách vở, tìm hiểu cách quản lý của công ty, học cách giao tiếp hiệu quả với đồng nghiệp, v.v.",
  "exList": [
   {
    "zh": "比如，学习课本中没有的专业知识，了解公司的管理方式，学会和同事有效交流，等等。",
    "py": "Bǐrú, xuéxí kèběn zhōng méiyǒu de zhuānyè zhīshí, liǎojiě gōngsī de guǎnlǐ fāngshì, xué huì hé tóngshì yǒuxiào jiāoliú, děng děng.",
    "vn": "Ví dụ: học kiến thức chuyên môn không có trong sách vở, tìm hiểu cách quản lý của công ty, học cách giao tiếp hiệu quả với đồng nghiệp, v.v."
   },
   {
    "zh": "我学的是酒店管理专业，现在在一家酒店工作。",
    "py": "Wǒ xué de shì jiǔdiàn guǎnlǐ zhuānyè, xiànzài zài yì jiā jiǔdiàn gōngzuò.",
    "vn": "Tôi học chuyên ngành quản trị khách sạn, giờ đang làm ở một khách sạn."
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
    "prompt": "Tôi học chuyên ngành quản trị khách sạn, giờ đang làm ở một khách sạn.",
    "answer": "我学的是酒店管理专业，现在在一家酒店工作。",
    "answerPy": "Wǒ xué de shì jiǔdiàn guǎnlǐ zhuānyè, xiànzài zài yì jiā jiǔdiàn gōngzuò.",
    "note": "Câu bài tập chọn từ của sách; ôn 专业 (Bài 1).",
    "pair": "N + 管理专业"
   },
   {
    "promptLang": "vi",
    "prompt": "Người biết quản lý thời gian vừa học tốt lại vừa có thời gian nghỉ ngơi.",
    "answer": "会管理时间的人，既能学好，又有时间休息。",
    "answerPy": "Huì guǎnlǐ shíjiān de rén, jì néng xué hǎo, yòu yǒu shíjiān xiūxi.",
    "note": "Ôn 既……又…… (Bài 4 · điểm 3).",
    "pair": "既……又……"
   }
  ]
 },
 {
  "n": 37,
  "zh": "基础",
  "py": "jīchǔ",
  "pos": "Danh từ",
  "vn": "nền tảng, cơ sở, căn bản",
  "hv": "cơ sở",
  "em": "🏗️",
  "lesson": 4,
  "explain": [
   "Phần nền móng làm chỗ dựa cho sự phát triển sau này: 基础知识 (kiến thức cơ bản), 打好基础 (xây chắc nền tảng — dùng động từ 打)."
  ],
  "usage": "打好基础 · 基础知识 · 中文基础 · 基础很好.",
  "collo": [
   "打好基础",
   "基础知识",
   "中文基础",
   "基础很好"
  ],
  "colloFull": [
   {
    "zh": "打好基础",
    "py": "Dǎ hǎo jīchǔ",
    "vn": "xây chắc nền tảng"
   },
   {
    "zh": "基础知识",
    "py": "Jīchǔ zhīshi",
    "vn": "kiến thức cơ bản"
   },
   {
    "zh": "中文基础",
    "py": "Zhōngwén jīchǔ",
    "vn": "nền tảng tiếng Trung"
   },
   {
    "zh": "基础很好",
    "py": "Jīchǔ hěn hǎo",
    "vn": "nền tảng rất tốt"
   }
  ],
  "patterns": [
   {
    "s": "把 + 基础 + 打好",
    "m": "Câu chữ 把"
   },
   {
    "s": "基础 + 好 / 差 / 不错",
    "m": "Nhận xét nền tảng"
   }
  ],
  "ex_zh": "只有把这些基础打好，提高工作能力，今后才会有更好的发展机会。",
  "ex_py": "Zhǐyǒu bǎ zhèxiē jīchǔ dǎ hǎo, tígāo gōngzuò nénglì, jīnhòu cái huì yǒu gèng hǎo de fāzhǎn jīhuì.",
  "ex_vn": "Chỉ có xây chắc những nền tảng này, nâng cao năng lực làm việc, sau này mới có cơ hội phát triển tốt hơn.",
  "exList": [
   {
    "zh": "只有把这些基础打好，提高工作能力，今后才会有更好的发展机会。",
    "py": "Zhǐyǒu bǎ zhèxiē jīchǔ dǎ hǎo, tígāo gōngzuò nénglì, jīnhòu cái huì yǒu gèng hǎo de fāzhǎn jīhuì.",
    "vn": "Chỉ có xây chắc những nền tảng này, nâng cao năng lực làm việc, sau này mới có cơ hội phát triển tốt hơn."
   },
   {
    "zh": "刚开始的时候别太着急，先把基础打好。",
    "py": "Gāng kāishǐ de shíhou bié tài zháojí, xiān bǎ jīchǔ dǎ hǎo.",
    "vn": "Lúc mới bắt đầu đừng vội quá, trước tiên hãy xây chắc nền tảng."
   }
  ],
  "hanzi": [
   {
    "c": "基",
    "p": "jī",
    "type": "形声字 · Chữ hình thanh",
    "st": 11,
    "ord": "其 → 土",
    "rad": "土 (thổ – đất)",
    "mean": "nền móng, cơ sở",
    "tip": "其 qí (chỉ âm) đặt trên 土 (đất): nền đất đặt móng nhà → cơ bản, nền tảng (基本上).",
    "cf": "期 qī (kỳ hạn) — bên phải là 月; 甚 shèn",
    "w": "基本 / 基本上 / 基础"
   },
   {
    "c": "础",
    "p": "chǔ",
    "type": "左右结构 · Trái-phải (giản thể)",
    "st": 10,
    "ord": "石 (thạch) trái → 出 phải",
    "rad": "石 (thạch – đá)",
    "mean": "đá tảng kê cột",
    "tip": "Bộ đá 石 + 出 → ĐÁ TẢNG kê chân cột, kết hợp 基(nền) thành 基础 = NỀN TẢNG.",
    "cf": "出 (chū – \"ra\", phần bên phải)",
    "w": "基础 / 基本 / 基础知识"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Lúc mới bắt đầu đừng vội quá, trước tiên hãy xây chắc nền tảng.",
    "answer": "刚开始的时候别太着急，先把基础打好。",
    "answerPy": "Gāng kāishǐ de shíhou bié tài zháojí, xiān bǎ jīchǔ dǎ hǎo.",
    "note": "Câu bài tập chọn từ của sách.",
    "pair": "把基础打好"
   },
   {
    "promptLang": "vi",
    "prompt": "Nền tảng tiếng Trung của cô ấy rất tốt, thậm chí đọc hiểu được cả báo Trung Quốc.",
    "answer": "她的中文基础很好，甚至能看懂中文报纸。",
    "answerPy": "Tā de Zhōngwén jīchǔ hěn hǎo, shènzhì néng kàn dǒng Zhōngwén bàozhǐ.",
    "note": "Ôn 甚至 (Bài 3 · điểm 3).",
    "pair": "甚至……"
   }
  ]
 },
 {
  "n": 38,
  "zh": "能力",
  "py": "nénglì",
  "pos": "Danh từ",
  "vn": "năng lực, khả năng",
  "hv": "năng lực",
  "em": "💪",
  "lesson": 4,
  "explain": [
   "Khả năng làm được việc gì đó. Hán Việt “năng lực” — giống tiếng Việt."
  ],
  "usage": "工作能力 · 学习能力 · 很有能力 · 提高能力.",
  "collo": [
   "工作能力",
   "学习能力",
   "很有能力",
   "提高能力"
  ],
  "colloFull": [
   {
    "zh": "工作能力",
    "py": "Gōngzuò nénglì",
    "vn": "năng lực làm việc"
   },
   {
    "zh": "学习能力",
    "py": "Xuéxí nénglì",
    "vn": "khả năng học tập"
   },
   {
    "zh": "很有能力",
    "py": "Hěn yǒu nénglì",
    "vn": "rất có năng lực"
   },
   {
    "zh": "提高能力",
    "py": "Tígāo nénglì",
    "vn": "nâng cao năng lực"
   }
  ],
  "patterns": [
   {
    "s": "提高 + 能力",
    "m": "Nâng cao năng lực"
   },
   {
    "s": "有能力 + V",
    "m": "Có khả năng làm gì"
   }
  ],
  "ex_zh": "只有把这些基础打好，提高工作能力，今后才会有更好的发展机会。",
  "ex_py": "Zhǐyǒu bǎ zhèxiē jīchǔ dǎ hǎo, tígāo gōngzuò nénglì, jīnhòu cái huì yǒu gèng hǎo de fāzhǎn jīhuì.",
  "ex_vn": "Chỉ có xây chắc những nền tảng này, nâng cao năng lực làm việc, sau này mới có cơ hội phát triển tốt hơn.",
  "exList": [
   {
    "zh": "只有把这些基础打好，提高工作能力，今后才会有更好的发展机会。",
    "py": "Zhǐyǒu bǎ zhèxiē jīchǔ dǎ hǎo, tígāo gōngzuò nénglì, jīnhòu cái huì yǒu gèng hǎo de fāzhǎn jīhuì.",
    "vn": "Chỉ có xây chắc những nền tảng này, nâng cao năng lực làm việc, sau này mới có cơ hội phát triển tốt hơn."
   },
   {
    "zh": "因为他们很有能力，所以谈成了一笔大生意。",
    "py": "Yīnwèi tāmen hěn yǒu nénglì, suǒyǐ tán chéng le yì bǐ dà shēngyi.",
    "vn": "Vì họ rất có năng lực nên đã bàn thành một vụ làm ăn lớn."
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
    "prompt": "Năng lực làm việc của anh ấy rất mạnh, giám đốc giao bất kỳ nhiệm vụ nào anh ấy cũng làm tốt.",
    "answer": "他的工作能力很强，经理交给他任何任务，他都能做好。",
    "answerPy": "Tā de gōngzuò nénglì hěn qiáng, jīnglǐ jiāo gěi tā rènhé rènwù, tā dōu néng zuò hǎo.",
    "note": "Ôn 任何……都…… (Bài 1 · điểm 1).",
    "pair": "任何……都……"
   },
   {
    "promptLang": "vi",
    "prompt": "Nếu muốn nâng cao năng lực thì phải học nhiều, luyện nhiều.",
    "answer": "要是想提高能力，就得多学多练。",
    "answerPy": "Yàoshi xiǎng tígāo nénglì, jiù děi duō xué duō liàn.",
    "note": "Ôn 要是……就…… (Bài 1 · điểm 2).",
    "pair": "要是……就……"
   }
  ]
 },
 {
  "n": 39,
  "zh": "今后",
  "py": "jīnhòu",
  "pos": "Danh từ",
  "vn": "từ nay về sau, sau này",
  "hv": "kim hậu",
  "em": "🔮",
  "lesson": 4,
  "explain": [
   "Khoảng thời gian từ bây giờ trở đi. Trang trọng hơn 以后; gần nghĩa 将来 (Bài 1) nhưng 今后 tính ngay từ hiện tại."
  ],
  "usage": "今后 + V · 今后的工作 · 今后的发展 · 今后的打算.",
  "collo": [
   "今后的工作",
   "今后的发展",
   "今后的打算",
   "今后一定"
  ],
  "colloFull": [
   {
    "zh": "今后的工作",
    "py": "Jīnhòu de gōngzuò",
    "vn": "công việc sau này"
   },
   {
    "zh": "今后的发展",
    "py": "Jīnhòu de fāzhǎn",
    "vn": "sự phát triển sau này"
   },
   {
    "zh": "今后的打算",
    "py": "Jīnhòu de dǎsuàn",
    "vn": "dự định sau này"
   },
   {
    "zh": "今后一定",
    "py": "Jīnhòu yídìng",
    "vn": "từ nay nhất định"
   }
  ],
  "patterns": [
   {
    "s": "今后 + (Sub) + V",
    "m": "Đứng đầu câu / trước động từ"
   },
   {
    "s": "今后 ≈ 以后 / 将来",
    "m": "今后 tính từ bây giờ"
   }
  ],
  "ex_zh": "只有把这些基础打好，提高工作能力，今后才会有更好的发展机会。",
  "ex_py": "Zhǐyǒu bǎ zhèxiē jīchǔ dǎ hǎo, tígāo gōngzuò nénglì, jīnhòu cái huì yǒu gèng hǎo de fāzhǎn jīhuì.",
  "ex_vn": "Chỉ có xây chắc những nền tảng này, nâng cao năng lực làm việc, sau này mới có cơ hội phát triển tốt hơn.",
  "exList": [
   {
    "zh": "只有把这些基础打好，提高工作能力，今后才会有更好的发展机会。",
    "py": "Zhǐyǒu bǎ zhèxiē jīchǔ dǎ hǎo, tígāo gōngzuò nénglì, jīnhòu cái huì yǒu gèng hǎo de fāzhǎn jīhuì.",
    "vn": "Chỉ có xây chắc những nền tảng này, nâng cao năng lực làm việc, sau này mới có cơ hội phát triển tốt hơn."
   },
   {
    "zh": "今后我一定按时完成任务。",
    "py": "Jīnhòu wǒ yídìng ànshí wánchéng rènwù.",
    "vn": "Từ nay về sau tôi nhất định hoàn thành nhiệm vụ đúng hạn."
   }
  ],
  "hanzi": [
   {
    "c": "今",
    "p": "jīn",
    "type": "上下结构 · Trên-dưới",
    "st": 4,
    "ord": "人(nhân, biến thể) trên → 一乛(gập) dưới",
    "rad": "人 (nhân – người)",
    "mean": "nay, hiện tại",
    "tip": "Phần trên giống người 人 cúi xuống nhìn ngay thứ trước mắt (phần dưới) — chỉ thời điểm NGAY LÚC NÀY, HIỆN NAY.",
    "cf": "令 (lìng – \"ra lệnh\", thêm một nét chấm ở vị trí khác\")",
    "w": "今年 / 今天"
   },
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
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Từ nay về sau tôi nhất định hoàn thành nhiệm vụ đúng hạn.",
    "answer": "今后我一定按时完成任务。",
    "answerPy": "Jīnhòu wǒ yídìng ànshí wánchéng rènwù.",
    "note": "按时 (Bài 6) + 任务 (từ mới).",
    "pair": "今后 + V"
   },
   {
    "promptLang": "vi",
    "prompt": "Bạn có dự định gì cho sau này? — Đợi tốt nghiệp rồi hẵng tính.",
    "answer": "你今后有什么打算？——等毕业了再说吧。",
    "answerPy": "Nǐ jīnhòu yǒu shénme dǎsuàn? — Děng bìyè le zài shuō ba.",
    "note": "Ôn 等……再…… (Bài 5 · điểm 4).",
    "pair": "等……再说"
   }
  ]
 }
];
var wuData = [
 {
  "img": "/images/hsk4v3/bai-7/wu-A.webp",
  "label": "市场",
  "py": "shìchǎng",
  "letter": "A"
 },
 {
  "img": "/images/hsk4v3/bai-7/wu-B.webp",
  "label": "想法",
  "py": "xiǎngfǎ",
  "letter": "B"
 },
 {
  "img": "/images/hsk4v3/bai-7/wu-C.webp",
  "label": "打扰",
  "py": "dǎrǎo",
  "letter": "C"
 },
 {
  "img": "/images/hsk4v3/bai-7/wu-D.webp",
  "label": "谈",
  "py": "tán",
  "letter": "D"
 },
 {
  "img": "/images/hsk4v3/bai-7/wu-E.webp",
  "label": "计划",
  "py": "jìhuà",
  "letter": "E"
 },
 {
  "img": "/images/hsk4v3/bai-7/wu-F.webp",
  "label": "出差",
  "py": "chūchāi",
  "letter": "F"
 }
];
var dialogData = [
 {
  "scene": "在王一雪办公室 · Ở văn phòng Vương Nhất Tuyết (một đồng nghiệp đến báo cáo công việc với chị)",
  "anh": "/images/hsk4v3/bai-7/kv-1.webp",
  "nguoi": [
   {
    "ten": "同事",
    "anh": "/images/hsk4v3/bai-7/tongshi.webp"
   },
   {
    "ten": "王一雪",
    "anh": "/images/hsk4v3/nv/yixue.webp"
   }
  ],
  "preQuiz": [
   {
    "q": "同事把什么发到王一雪的邮箱了？",
    "opts": [
     "网店的名字",
     "客户的信息",
     "要买的东西",
     "调查的计划"
    ],
    "ans": 3
   },
   {
    "q": "除了超市，同事还打算在哪儿进行调查？",
    "opts": [
     "网店",
     "大学",
     "菜市场",
     "国际公司"
    ],
    "ans": 0
   }
  ],
  "lines": [
   {
    "sp": 0,
    "zh": "经理，打扰您一下。市场调查的计划书我昨天发到您邮箱了。在内容方面，您觉得有需要改的吗？",
    "py": "Jīnglǐ, dǎrǎo nín yíxià. Shìchǎng diàochá de jìhuà shū wǒ zuótiān fā dào nín yóuxiāng le. Zài nèiróng fāngmiàn, nín juéde yǒu xūyào gǎi de ma?",
    "vn": "Giám đốc, em làm phiền chị một chút ạ. Bản kế hoạch khảo sát thị trường em đã gửi vào hộp thư của chị hôm qua rồi. Về mặt nội dung, chị thấy có chỗ nào cần sửa không ạ?"
   },
   {
    "sp": 1,
    "zh": "我看过了，写得不错，就是调查的地点只有超市，不太够。",
    "py": "Wǒ kàn guò le, xiě de búcuò, jiù shì diàochá de dìdiǎn zhǐyǒu chāoshì, bú tài gòu.",
    "vn": "Chị xem rồi, viết khá tốt, chỉ có điều địa điểm khảo sát mới có siêu thị, chưa đủ lắm."
   },
   {
    "sp": 0,
    "zh": "好的，那我再加一些网店。",
    "py": "Hǎo de, nà wǒ zài jiā yìxiē wǎng diàn.",
    "vn": "Vâng ạ, vậy em thêm một số cửa hàng trên mạng."
   },
   {
    "sp": 1,
    "zh": "行。做调查的时候要细心，注意了解客户真正的想法。",
    "py": "Xíng. Zuò diàochá de shíhou yào xìxīn, zhùyì liǎojiě kèhù zhēnzhèng de xiǎngfǎ.",
    "vn": "Được. Lúc làm khảo sát phải cẩn thận, chú ý tìm hiểu suy nghĩ thật sự của khách hàng."
   },
   {
    "sp": 0,
    "zh": "明白了，我会认真准备，按时完成任务。",
    "py": "Míngbai le, wǒ huì rènzhēn zhǔnbèi, ànshí wánchéng rènwù.",
    "vn": "Em hiểu rồi, em sẽ chuẩn bị nghiêm túc, hoàn thành nhiệm vụ đúng hạn."
   },
   {
    "sp": 1,
    "zh": "嗯，如果遇到什么问题，及时跟我联系。",
    "py": "Ǹg, rúguǒ yùdào shénme wèntí, jíshí gēn wǒ liánxì.",
    "vn": "Ừ, nếu gặp vấn đề gì thì liên hệ với chị ngay nhé."
   }
  ]
 },
 {
  "scene": "在公司 · Ở công ty (đồng nghiệp xin lời khuyên của Dương Đồng Lạc; nơi công sở Trung Quốc hay gọi đồng nghiệp lớn tuổi hơn, thân thiết là “×哥 / ×姐” — anh …, chị …, còn ở dịp trang trọng thì gọi chức danh như 经理)",
  "anh": "/images/hsk4v3/bai-7/kv-2.webp",
  "nguoi": [
   {
    "ten": "同事",
    "anh": "/images/hsk4v3/bai-7/tongshi.webp"
   },
   {
    "ten": "杨同乐",
    "anh": "/images/hsk4v3/nv/tongle.webp"
   }
  ],
  "preQuiz": [
   {
    "q": "同事要去上海做什么？",
    "opts": [
     "出差",
     "旅游",
     "购物",
     "看朋友"
    ],
    "ans": 0
   },
   {
    "q": "同事已经准备好什么了？",
    "opts": [
     "行李",
     "新产品",
     "要问的问题",
     "给客户的礼物"
    ],
    "ans": 2
   }
  ],
  "lines": [
   {
    "sp": 0,
    "zh": "杨哥，经理让我下周去上海出差，做市场调查，你有这方面的经验吗？",
    "py": "Yáng gē, jīnglǐ ràng wǒ xià zhōu qù Shànghǎi chūchāi, zuò shìchǎng diàochá, nǐ yǒu zhè fāngmiàn de jīngyàn ma?",
    "vn": "Anh Dương, giám đốc bảo em tuần sau đi Thượng Hải công tác, làm khảo sát thị trường, anh có kinh nghiệm về mặt này không?"
   },
   {
    "sp": 1,
    "zh": "你要去几天？主要调查什么内容？",
    "py": "Nǐ yào qù jǐ tiān? Zhǔyào diàochá shénme nèiróng?",
    "vn": "Em đi mấy ngày? Chủ yếu khảo sát nội dung gì?"
   },
   {
    "sp": 0,
    "zh": "去四天，打算采访一些客户，了解他们对新产品的看法。",
    "py": "Qù sì tiān, dǎsuàn cǎifǎng yìxiē kèhù, liǎojiě tāmen duì xīn chǎnpǐn de kànfǎ.",
    "vn": "Đi bốn ngày, em định phỏng vấn một số khách hàng, tìm hiểu ý kiến của họ về sản phẩm mới."
   },
   {
    "sp": 1,
    "zh": "那你要提前准备好问题，便于和客户交流。",
    "py": "Nà nǐ yào tíqián zhǔnbèi hǎo wèntí, biànyú hé kèhù jiāoliú.",
    "vn": "Vậy em phải chuẩn bị sẵn câu hỏi từ trước, để tiện trao đổi với khách hàng."
   },
   {
    "sp": 0,
    "zh": "好的，我已经准备了一些问题。",
    "py": "Hǎo de, wǒ yǐjīng zhǔnbèi le yìxiē wèntí.",
    "vn": "Vâng, em đã chuẩn bị một số câu hỏi rồi."
   },
   {
    "sp": 1,
    "zh": "很好。既然出差时间不长，就要安排好时间，多获得有用的信息。",
    "py": "Hěn hǎo. Jìrán chūchāi shíjiān bù cháng, jiù yào ānpái hǎo shíjiān, duō huòdé yǒuyòng de xìnxī.",
    "vn": "Tốt lắm. Đã đi công tác không lâu thì phải sắp xếp thời gian cho tốt, thu được nhiều thông tin hữu ích."
   }
  ]
 },
 {
  "scene": "不同客户，不同方法 · Khách hàng khác nhau, cách làm khác nhau",
  "anh": "/images/hsk4v3/bai-7/kv-3.webp",
  "nguoi": [
   {
    "ten": "小语",
    "anh": "/images/hsk4v3/nv/xiaoyu.webp"
   }
  ],
  "preQuiz": [
   {
    "q": "前段时间，杨同乐的同事怎么了？",
    "opts": [
     "生病了",
     "休假了",
     "当上了经理",
     "谈成了生意"
    ],
    "ans": 3
   },
   {
    "q": "同事是通过什么办法解决问题的？",
    "opts": [
     "找经理帮忙",
     "做市场调查",
     "请客户吃饭",
     "提前准备问题"
    ],
    "ans": 1
   }
  ],
  "lines": [
   {
    "sp": 0,
    "zh": "前段时间，杨同乐的同事谈成了一笔不错的生意。",
    "py": "Qián duàn shíjiān, Yáng Tónglè de tóngshì tán chéng le yì bǐ búcuò de shēngyi.",
    "vn": "Thời gian trước, đồng nghiệp của Dương Đồng Lạc đã bàn thành một vụ làm ăn khá tốt."
   },
   {
    "sp": 0,
    "zh": "刚开始，这位同事也遇到了一些困难。",
    "py": "Gāng kāishǐ, zhè wèi tóngshì yě yùdào le yìxiē kùnnan.",
    "vn": "Lúc mới bắt đầu, cô đồng nghiệp này cũng gặp một số khó khăn."
   },
   {
    "sp": 0,
    "zh": "拿和客户交流来说，虽然她能把产品的优缺点说得很清楚，但实际效果并不理想。",
    "py": "Ná hé kèhù jiāoliú láishuō, suīrán tā néng bǎ chǎnpǐn de yōu quēdiǎn shuō de hěn qīngchu, dàn shíjì xiàoguǒ bìng bù lǐxiǎng.",
    "vn": "Lấy việc trao đổi với khách hàng mà nói, tuy cô ấy nói rất rõ ưu nhược điểm của sản phẩm, nhưng hiệu quả thực tế chẳng lý tưởng chút nào."
   },
   {
    "sp": 0,
    "zh": "杨同乐告诉她，这是因为她介绍的方式都一样。",
    "py": "Yáng Tónglè gàosu tā, zhè shì yīnwèi tā jièshào de fāngshì dōu yíyàng.",
    "vn": "Dương Đồng Lạc nói với cô ấy rằng đó là vì cách cô giới thiệu với ai cũng như nhau."
   },
   {
    "sp": 0,
    "zh": "其实，不同年龄、不同性别的客户对产品的关注点是不一样的。",
    "py": "Qíshí, bùtóng niánlíng, bùtóng xìngbié de kèhù duì chǎnpǐn de guānzhù diǎn shì bù yíyàng de.",
    "vn": "Thực ra, khách hàng khác tuổi, khác giới tính có điểm quan tâm đến sản phẩm không giống nhau."
   },
   {
    "sp": 0,
    "zh": "于是，这位同事又认真地进行了几次市场调查，了解不同客户的想法。",
    "py": "Yúshì, zhè wèi tóngshì yòu rènzhēn de jìnxíng le jǐ cì shìchǎng diàochá, liǎojiě bùtóng kèhù de xiǎngfǎ.",
    "vn": "Thế là cô đồng nghiệp ấy lại nghiêm túc tiến hành mấy cuộc khảo sát thị trường, tìm hiểu suy nghĩ của từng nhóm khách hàng."
   },
   {
    "sp": 0,
    "zh": "后来她在面对不同客户时，能根据他们的情况介绍产品，效果一下就好了很多。",
    "py": "Hòulái tā zài miànduì bùtóng kèhù shí, néng gēnjù tāmen de qíngkuàng jièshào chǎnpǐn, xiàoguǒ yíxià jiù hǎo le hěn duō.",
    "vn": "Về sau, khi gặp những khách hàng khác nhau, cô ấy biết giới thiệu sản phẩm theo tình hình của từng người, hiệu quả lập tức tốt lên rất nhiều."
   }
  ],
  "doan": true
 },
 {
  "scene": "工作的选择与发展 · Chọn việc và phát triển nghề nghiệp",
  "anh": "/images/hsk4v3/bai-7/kv-4.webp",
  "nguoi": [
   {
    "ten": "小语",
    "anh": "/images/hsk4v3/nv/xiaoyu.webp"
   }
  ],
  "preQuiz": [
   {
    "q": "根据课文，为什么有的年轻人经常换工作？",
    "opts": [
     "工资太低",
     "工作没意思",
     "对自己要求高",
     "觉得下一份工作会更好"
    ],
    "ans": 3
   },
   {
    "q": "他认为，年轻人刚进入社会时，应该更重视什么？",
    "opts": [
     "工资",
     "学习",
     "休息",
     "心情"
    ],
    "ans": 1
   }
  ],
  "lines": [
   {
    "sp": 0,
    "zh": "有的年轻人经常换工作，总觉得下一份工作会更好。",
    "py": "Yǒude niánqīngrén jīngcháng huàn gōngzuò, zǒng juéde xià yí fèn gōngzuò huì gèng hǎo.",
    "vn": "Có những người trẻ thường xuyên đổi việc, luôn cho rằng công việc tiếp theo sẽ tốt hơn."
   },
   {
    "sp": 0,
    "zh": "但是，适应新工作往往需要比较长的时间。",
    "py": "Dànshì, shìyìng xīn gōngzuò wǎngwǎng xūyào bǐjiào cháng de shíjiān.",
    "vn": "Nhưng thích nghi với công việc mới thường cần khá nhiều thời gian."
   },
   {
    "sp": 0,
    "zh": "如果总是换工作，不但很难积累经验，还可能会使自己的发展受到影响。",
    "py": "Rúguǒ zǒngshì huàn gōngzuò, búdàn hěn nán jīlěi jīngyàn, hái kěnéng huì shǐ zìjǐ de fāzhǎn shòudào yǐngxiǎng.",
    "vn": "Nếu cứ đổi việc mãi thì không những khó tích lũy kinh nghiệm, mà còn có thể khiến sự phát triển của bản thân bị ảnh hưởng."
   },
   {
    "sp": 0,
    "zh": "我认为，年轻人刚进入社会时，不能只关心工资的高低，更要重视学习。",
    "py": "Wǒ rènwéi, niánqīngrén gāng jìnrù shèhuì shí, bù néng zhǐ guānxīn gōngzī de gāo dī, gèng yào zhòngshì xuéxí.",
    "vn": "Tôi cho rằng người trẻ vừa bước vào xã hội không thể chỉ quan tâm lương cao hay thấp, mà càng phải coi trọng việc học hỏi."
   },
   {
    "sp": 0,
    "zh": "比如，学习课本中没有的专业知识，了解公司的管理方式，学会和同事有效交流，等等。",
    "py": "Bǐrú, xuéxí kèběn zhōng méiyǒu de zhuānyè zhīshí, liǎojiě gōngsī de guǎnlǐ fāngshì, xué huì hé tóngshì yǒuxiào jiāoliú, děng děng.",
    "vn": "Ví dụ như học kiến thức chuyên môn không có trong sách vở, tìm hiểu cách quản lý của công ty, học cách giao tiếp hiệu quả với đồng nghiệp, v.v."
   },
   {
    "sp": 0,
    "zh": "只有把这些基础打好，提高工作能力，今后才会有更好的发展机会。",
    "py": "Zhǐyǒu bǎ zhèxiē jīchǔ dǎ hǎo, tígāo gōngzuò nénglì, jīnhòu cái huì yǒu gèng hǎo de fāzhǎn jīhuì.",
    "vn": "Chỉ có xây chắc những nền tảng này, nâng cao năng lực làm việc, sau này mới có cơ hội phát triển tốt hơn."
   }
  ],
  "doan": true
 }
];
var listenData = [
 {
  "audio": "王经理，打扰您一下，明天跟客户见面的时间能不能提前？可以，你打算提前到几点？九点吧，客户下午要去机场。行，那你及时通知大家，再把要谈的内容准备好。好的，我现在就去。",
  "questions": [
   {
    "q": "说话人想做什么？",
    "opts": [
     "把见面时间提前",
     "去机场接客户",
     "改调查的内容"
    ],
    "ans": 0
   },
   {
    "q": "客户下午要做什么？",
    "opts": [
     "去机场",
     "来公司",
     "做市场调查"
    ],
    "ans": 0
   }
  ]
 },
 {
  "audio": "小林，你对现在的工作满意吗？说实话，工资不太高，不过在学习方面收获很大。拿和客户交流来说，以前我很紧张，现在一点儿也不紧张了。既然能学到东西，就先别换工作了。嗯，我也是这么想的。",
  "questions": [
   {
    "q": "小林觉得现在的工作怎么样？",
    "opts": [
     "工资很高",
     "能学到很多东西",
     "没有发展机会"
    ],
    "ans": 1
   },
   {
    "q": "以前小林和客户交流时怎么样？",
    "opts": [
     "很紧张",
     "很细心",
     "很及时"
    ],
    "ans": 0
   }
  ]
 },
 {
  "audio": "这次市场调查你们采访了多少客户？至少一百位。结果怎么样？年轻客户更关心价格，年纪大一点儿的客户更关心产品好不好用。这次调查使我们更了解客户了，下次介绍产品的时候，效果一定会更好。",
  "questions": [
   {
    "q": "这次调查采访了多少客户？",
    "opts": [
     "十几位",
     "至少一百位",
     "一千多位"
    ],
    "ans": 1
   },
   {
    "q": "年轻客户更关心什么？",
    "opts": [
     "价格",
     "产品好不好用",
     "产品的样子"
    ],
    "ans": 0
   }
  ]
 }
];
var matchData = [
 {
  "left": "打扰",
  "right": "您一下"
 },
 {
  "left": "做",
  "right": "市场调查"
 },
 {
  "left": "按时完成",
  "right": "任务"
 },
 {
  "left": "提前准备",
  "right": "问题"
 },
 {
  "left": "谈成了一笔",
  "right": "生意"
 },
 {
  "left": "积累",
  "right": "经验"
 },
 {
  "left": "进入",
  "right": "社会"
 },
 {
  "left": "提高",
  "right": "工作能力"
 },
 {
  "left": "既然……",
  "right": "就……"
 }
];
var fillData = [
 {
  "pre": "经理，",
  "blank": "打扰",
  "post": "您一下。",
  "hint": "(làm phiền)",
  "ans": "打扰",
  "exp": "打扰您一下: câu mở đầu lịch sự."
 },
 {
  "pre": "在内容",
  "blank": "方面",
  "post": "，您觉得有需要改的吗？",
  "hint": "(về mặt)",
  "ans": "方面",
  "exp": "在……方面 khoanh vùng phạm vi."
 },
 {
  "pre": "做调查的时候要",
  "blank": "细心",
  "post": "，注意了解客户真正的想法。",
  "hint": "(cẩn thận)",
  "ans": "细心",
  "exp": "细心 = cẩn thận, tỉ mỉ."
 },
 {
  "pre": "如果遇到什么问题，",
  "blank": "及时",
  "post": "跟我联系。",
  "hint": "(kịp thời)",
  "ans": "及时",
  "exp": "及时 + V = làm ngay."
 },
 {
  "pre": "经理让我下周去上海",
  "blank": "出差",
  "post": "，做市场调查。",
  "hint": "(đi công tác)",
  "ans": "出差",
  "exp": "去 + nơi + 出差."
 },
 {
  "pre": "那你要",
  "blank": "提前",
  "post": "准备好问题，便于和客户交流。",
  "hint": "(trước)",
  "ans": "提前",
  "exp": "提前 + V = làm trước."
 },
 {
  "pre": "",
  "blank": "既然",
  "post": "出差时间不长，就要安排好时间。",
  "hint": "(đã … thì)",
  "ans": "既然",
  "exp": "既然……，就……"
 },
 {
  "pre": "",
  "blank": "拿",
  "post": "和客户交流来说，实际效果并不理想。",
  "hint": "(lấy … mà nói)",
  "ans": "拿",
  "exp": "拿……来说 dẫn ví dụ."
 },
 {
  "pre": "虽然她能把产品的优缺点说得很清楚，但实际",
  "blank": "效果",
  "post": "并不理想。",
  "hint": "(hiệu quả)",
  "ans": "效果",
  "exp": "实际效果 = hiệu quả thực tế."
 },
 {
  "pre": "如果总是换工作，还可能会",
  "blank": "使",
  "post": "自己的发展受到影响。",
  "hint": "(khiến)",
  "ans": "使",
  "exp": "A + 使 + B + 受到影响."
 }
];
var sortData = [
 {
  "words": [
   "市场调查的",
   "计划书",
   "我昨天",
   "发到",
   "您邮箱",
   "了",
   "。"
  ],
  "ans": "市场调查的计划书我昨天发到您邮箱了。",
  "audio": "市场调查的计划书我昨天发到您邮箱了。"
 },
 {
  "words": [
   "在",
   "内容",
   "方面",
   "，",
   "您",
   "觉得",
   "有需要改的吗",
   "？"
  ],
  "ans": "在内容方面，您觉得有需要改的吗？",
  "audio": "在内容方面，您觉得有需要改的吗？"
 },
 {
  "words": [
   "既然",
   "出差时间",
   "不长",
   "，",
   "就要",
   "安排好",
   "时间",
   "。"
  ],
  "ans": "既然出差时间不长，就要安排好时间。",
  "audio": "既然出差时间不长，就要安排好时间。"
 },
 {
  "words": [
   "拿",
   "吃饭",
   "来说",
   "，",
   "一般",
   "南方人",
   "更爱吃",
   "米饭",
   "。"
  ],
  "ans": "拿吃饭来说，一般南方人更爱吃米饭。",
  "audio": "拿吃饭来说，一般南方人更爱吃米饭。"
 },
 {
  "words": [
   "这个",
   "新方法",
   "使",
   "工作",
   "变得",
   "更加简单了",
   "。"
  ],
  "ans": "这个新方法使工作变得更加简单了。",
  "audio": "这个新方法使工作变得更加简单了。"
 },
 {
  "words": [
   "只有",
   "把这些基础",
   "打好",
   "，",
   "今后",
   "才会有",
   "更好的",
   "发展机会",
   "。"
  ],
  "ans": "只有把这些基础打好，今后才会有更好的发展机会。",
  "audio": "只有把这些基础打好，今后才会有更好的发展机会。"
 }
];
var mcData = [
 {
  "q": "在内容＿＿，您觉得有需要改的吗？",
  "opts": [
   "方面",
   "一方面",
   "地方",
   "里面"
  ],
  "ans": 0,
  "exp": "Cấu trúc cố định 「在……方面」 = về mặt …"
 },
 {
  "q": "＿＿大家都同意，我们就这么做吧。",
  "opts": [
   "既然",
   "既",
   "虽然",
   "由于"
  ],
  "ans": 0,
  "exp": "Tiền đề đã biết → kết luận: 既然……，就……"
 },
 {
  "q": "现在的生活很方便。＿＿购物来说，人们不出门就能买到想要的东西。",
  "opts": [
   "拿",
   "对",
   "把",
   "给"
  ],
  "ans": 0,
  "exp": "Dẫn ví dụ cho nhận định chung → 拿……来说."
 },
 {
  "q": "这个新方法＿＿工作变得更加简单了。",
  "opts": [
   "使",
   "把",
   "被",
   "对"
  ],
  "ans": 0,
  "exp": "Câu kiêm ngữ: A 使 B + V / Adj."
 },
 {
  "q": "经理＿＿我下周去上海出差。",
  "opts": [
   "让",
   "使",
   "被",
   "把"
  ],
  "ans": 0,
  "exp": "Sai bảo, giao việc dùng 让; 使 chỉ “khiến cho”."
 },
 {
  "q": "你要提前准备好问题，＿＿和客户交流。",
  "opts": [
   "便于",
   "由于",
   "及时",
   "提前"
  ],
  "ans": 0,
  "exp": "……，便于 + V = để tiện làm gì."
 },
 {
  "q": "如果遇到什么问题，＿＿跟我联系。",
  "opts": [
   "及时",
   "按时",
   "准时",
   "同时"
  ],
  "ans": 0,
  "exp": "及时 = ngay khi cần, không chậm trễ."
 },
 {
  "q": "前段时间，他谈成了一＿＿不错的生意。",
  "opts": [
   "笔",
   "份",
   "张",
   "条"
  ],
  "ans": 0,
  "exp": "Lượng từ cho vụ làm ăn, khoản tiền: 笔."
 },
 {
  "q": "有的年轻人经常换工作，总觉得下一＿＿工作会更好。",
  "opts": [
   "份",
   "笔",
   "台",
   "本"
  ],
  "ans": 0,
  "exp": "Lượng từ cho công việc: 一份工作."
 },
 {
  "q": "只有把这些基础打好，今后＿＿会有更好的发展机会。",
  "opts": [
   "才",
   "就",
   "都",
   "再"
  ],
  "ans": 0,
  "exp": "只有……才…… = chỉ có … mới …"
 }
];
var speakingData = {
 "intro": "Nhấn nút loa nghe câu hỏi (câu hỏi phần Khởi động, câu hỏi đọc hiểu của 4 bài khoá, kể lại bài khoá và tranh luận nhóm), rồi tự ghi âm câu trả lời — cố dùng từ mới và 4 điểm ngữ pháp của bài.",
 "questions": [
  {
   "q_zh": "你最想做什么工作？为什么？",
   "q_vn": "Bạn muốn làm công việc gì nhất? Vì sao?",
   "hint": "我最想当……。一方面……，另一方面……。拿……来说，……",
   "sample": "我最想当中文老师。一方面，我很喜欢中文，也喜欢和学生交流；另一方面，当老师可以一边工作一边学习，积累很多经验。拿上课来说，每次准备课的时候，我自己也能学到新的知识。我觉得这样的工作使我每天都有进步。",
   "sample_vn": "Tôi muốn làm giáo viên tiếng Trung nhất. Một mặt, tôi rất thích tiếng Trung, cũng thích giao lưu với học sinh; mặt khác, làm giáo viên có thể vừa làm vừa học, tích lũy nhiều kinh nghiệm. Lấy việc lên lớp mà nói, mỗi lần soạn bài bản thân tôi cũng học được kiến thức mới. Tôi thấy công việc như vậy khiến mỗi ngày tôi đều tiến bộ.",
   "note": "Câu hỏi phần Khởi động của sách; ôn 一方面……另一方面…… (Bài 1) + 拿……来说, 使 (điểm 3, 4)."
  },
  {
   "q_zh": "你觉得刚开始工作时，要注意什么？",
   "q_vn": "Bạn thấy lúc mới bắt đầu đi làm cần chú ý điều gì?",
   "hint": "我觉得刚开始工作时，在……方面要……；遇到问题要及时……；还要多……",
   "sample": "我觉得刚开始工作时，在工作方面要细心，按时完成任务；遇到不懂的问题，要及时问同事或者经理。另外，还要多和同事交流，了解公司的管理方式。既然是新人，就不能只关心工资，更要重视学习，积累经验。",
   "sample_vn": "Tôi thấy lúc mới đi làm, về mặt công việc phải cẩn thận, hoàn thành nhiệm vụ đúng hạn; gặp vấn đề không hiểu thì hỏi đồng nghiệp hoặc giám đốc ngay. Ngoài ra còn phải trao đổi nhiều với đồng nghiệp, hiểu cách quản lý của công ty. Đã là người mới thì không thể chỉ quan tâm lương, mà càng phải coi trọng việc học, tích lũy kinh nghiệm.",
   "note": "Câu hỏi phần Khởi động của sách; dùng 在……方面 + 既然……就……"
  },
  {
   "q_zh": "同事交的计划书有什么问题？王一雪建议调查的时候要怎么做？",
   "q_vn": "Bản kế hoạch đồng nghiệp nộp có vấn đề gì? Vương Nhất Tuyết khuyên lúc khảo sát nên làm thế nào?",
   "hint": "计划书写得……，就是……。王一雪建议……要……，注意……；如果……，及时……",
   "sample": "计划书写得不错，就是调查的地点只有超市，不太够，所以同事打算再加一些网店。王一雪建议做调查的时候要细心，注意了解客户真正的想法；如果遇到什么问题，要及时跟她联系。",
   "sample_vn": "Bản kế hoạch viết khá tốt, chỉ có điều địa điểm khảo sát mới có siêu thị, chưa đủ, nên đồng nghiệp định thêm một số cửa hàng trên mạng. Vương Nhất Tuyết khuyên khi khảo sát phải cẩn thận, chú ý tìm hiểu suy nghĩ thật của khách hàng; gặp vấn đề gì thì liên hệ ngay với chị.",
   "note": "Câu hỏi bài khoá 1; ôn ……，就是…… (Bài 3 · điểm 1)."
  },
  {
   "q_zh": "请根据提示复述课文一。",
   "q_vn": "Dựa vào gợi ý, kể lại bài khoá 1.",
   "hint": "昨天同事把……发到……，并请她看看……。王一雪觉得……，就是……。同事说她会再加……，并……。王一雪建议她……",
   "sample": "昨天同事把市场调查的计划书发到王一雪的邮箱，并请她看看在内容方面有没有需要改的。王一雪觉得计划书写得不错，就是调查的地点只有超市，不太够。同事说她会再加一些网店，并认真准备，按时完成任务。王一雪建议她做调查的时候要细心，注意了解客户真正的想法，如果遇到什么问题，及时跟她联系。",
   "sample_vn": "Hôm qua đồng nghiệp gửi bản kế hoạch khảo sát thị trường vào hộp thư của Vương Nhất Tuyết, nhờ chị xem về nội dung có gì cần sửa không… Vương Nhất Tuyết khuyên cô ấy khảo sát phải cẩn thận, gặp vấn đề thì liên hệ ngay.",
   "note": "Bài tập 复述 của sách (trang 73); ôn 并 (Bài 2 · điểm 3)."
  },
  {
   "q_zh": "同事要调查什么内容？杨同乐提了什么建议？",
   "q_vn": "Đồng nghiệp sẽ khảo sát nội dung gì? Dương Đồng Lạc đã đưa ra lời khuyên gì?",
   "hint": "同事打算采访……，了解……。杨同乐建议她提前……，便于……；既然……，就……",
   "sample": "同事打算去上海出差四天，采访一些客户，了解他们对新产品的看法。杨同乐建议她提前准备好问题，便于和客户交流；他还说，既然出差时间不长，就要安排好时间，多获得有用的信息。",
   "sample_vn": "Đồng nghiệp định đi Thượng Hải công tác bốn ngày, phỏng vấn một số khách hàng, tìm hiểu ý kiến của họ về sản phẩm mới. Dương Đồng Lạc khuyên cô ấy chuẩn bị sẵn câu hỏi từ trước để tiện trao đổi; anh còn nói đã đi công tác không lâu thì phải sắp xếp thời gian tốt, thu được nhiều thông tin hữu ích.",
   "note": "Câu hỏi bài khoá 2 (提 ở đây = 提出, đưa ra); dùng 便于 + 既然……就……"
  },
  {
   "q_zh": "刚开始的时候，同事遇到了什么困难？后来同事是怎么做的？",
   "q_vn": "Lúc mới bắt đầu, đồng nghiệp gặp khó khăn gì? Về sau cô ấy đã làm thế nào?",
   "hint": "拿……来说，虽然她能……，但……。这是因为……。于是，她……。后来她……，效果……",
   "sample": "拿和客户交流来说，虽然她能把产品的优缺点说得很清楚，但实际效果并不理想，这是因为她介绍的方式都一样。于是，她又认真地进行了几次市场调查，了解不同客户的想法。后来她能根据客户的情况介绍产品，效果一下就好了很多。",
   "sample_vn": "Lấy việc trao đổi với khách hàng mà nói, tuy cô ấy nói rõ ưu nhược điểm của sản phẩm nhưng hiệu quả thực tế chẳng lý tưởng, vì cách giới thiệu với ai cũng như nhau. Thế là cô ấy lại nghiêm túc làm mấy cuộc khảo sát thị trường, tìm hiểu suy nghĩ của từng nhóm khách. Về sau cô biết giới thiệu theo tình hình của từng khách, hiệu quả lập tức tốt lên nhiều.",
   "note": "Câu hỏi bài khoá 3; dùng 拿……来说 (điểm 3) + 于是 (Bài 3 · điểm 4)."
  },
  {
   "q_zh": "请根据提示复述课文三。",
   "q_vn": "Dựa vào gợi ý, kể lại bài khoá 3.",
   "hint": "前段时间，杨同乐的同事……。刚开始，这位同事……。拿……来说，虽然她能……，但实际效果……。杨同乐告诉她，……。于是，……",
   "sample": "前段时间，杨同乐的同事谈成了一笔不错的生意。刚开始，这位同事也遇到了一些困难。拿和客户交流来说，虽然她能把产品的优缺点说得很清楚，但实际效果并不理想。杨同乐告诉她，这是因为她介绍的方式都一样。其实，不同年龄、不同性别的客户对产品的关注点是不一样的。于是，这位同事又认真地进行了几次市场调查，了解不同客户的想法。后来她在面对不同客户时，能根据他们的情况介绍产品，效果一下就好了很多。",
   "sample_vn": "Thời gian trước, đồng nghiệp của Dương Đồng Lạc đã bàn thành một vụ làm ăn khá tốt. Lúc đầu cô ấy cũng gặp khó khăn… Về sau, gặp khách nào cô cũng giới thiệu theo tình hình của khách đó, hiệu quả lập tức tốt lên nhiều.",
   "note": "Bài tập 复述 của sách (trang 76–77)."
  },
  {
   "q_zh": "为什么不建议年轻人总换工作？年轻人怎样才能获得更好的发展机会？",
   "q_vn": "Vì sao không khuyên người trẻ cứ đổi việc mãi? Người trẻ làm thế nào mới có được cơ hội phát triển tốt hơn?",
   "hint": "因为适应新工作往往……。如果总是换工作，不但……，还可能会使……。年轻人刚进入社会时，……。只有……，今后才……",
   "sample": "因为适应新工作往往需要比较长的时间。如果总是换工作，不但很难积累经验，还可能会使自己的发展受到影响。年轻人刚进入社会时，不能只关心工资的高低，更要重视学习，比如学习专业知识，了解公司的管理方式，学会和同事有效交流。只有把这些基础打好，提高工作能力，今后才会有更好的发展机会。",
   "sample_vn": "Vì thích nghi với việc mới thường cần khá nhiều thời gian. Nếu cứ đổi việc mãi thì không những khó tích lũy kinh nghiệm mà còn có thể ảnh hưởng đến sự phát triển của bản thân. Người trẻ vừa bước vào xã hội không thể chỉ quan tâm lương cao hay thấp, mà càng phải coi trọng việc học… Chỉ có xây chắc nền tảng, nâng cao năng lực, sau này mới có cơ hội phát triển tốt hơn.",
   "note": "Câu hỏi bài khoá 4; dùng 使 (điểm 4) + 只有……才……"
  },
  {
   "q_zh": "小组辩论（正方）：年轻人应该多换几份工作，找到最适合自己的。",
   "q_vn": "Tranh luận nhóm (phe ủng hộ): Người trẻ nên đổi vài công việc để tìm ra việc hợp với mình nhất.",
   "hint": "我们认为……。第一，……；第二，拿……来说，……；既然……，就……",
   "sample": "我们认为，年轻人应该多换几份工作，找到最适合自己的。第一，刚毕业的时候，很多人并不知道自己真正喜欢什么，多试几份工作，才能了解自己的优点和缺点。第二，不同的工作能使我们积累不同方面的经验。拿我哥哥来说，他做过销售，也做过市场调查，现在在一家国际公司做管理，这些经验对他帮助很大。第三，既然现在的工作没有发展机会，就没有必要一直做下去。所以，我们觉得年轻时多换几份工作并不是坏事。",
   "sample_vn": "Chúng tôi cho rằng người trẻ nên đổi vài công việc để tìm ra việc hợp nhất. Thứ nhất, mới tốt nghiệp nhiều người chưa biết mình thật sự thích gì, thử vài việc mới hiểu được ưu nhược điểm của bản thân. Thứ hai, công việc khác nhau giúp ta tích lũy kinh nghiệm ở nhiều mặt. Lấy anh trai tôi mà nói, anh từng làm bán hàng, làm khảo sát thị trường, giờ làm quản lý ở một công ty quốc tế, những kinh nghiệm đó giúp anh rất nhiều. Thứ ba, công việc hiện tại đã không có cơ hội phát triển thì chẳng cần làm mãi. Vì vậy chúng tôi thấy lúc trẻ đổi vài việc chẳng phải chuyện xấu.",
   "note": "Hoạt động 小组辩论 (任务活动) của sách, trang 80 — phe 正方; dùng đủ 4 điểm ngữ pháp + 并不 (Bài 2)."
  },
  {
   "q_zh": "小组辩论（反方）：年轻人应该坚持一份工作，积累更多工作经验。",
   "q_vn": "Tranh luận nhóm (phe phản đối): Người trẻ nên kiên trì một công việc, tích lũy thêm kinh nghiệm làm việc.",
   "hint": "我们认为……。因为……往往……；如果总是换工作，……会使……；在……方面……；只有……才……",
   "sample": "我们认为，年轻人应该坚持一份工作，积累更多工作经验。因为适应新工作往往需要比较长的时间，如果总是换工作，每次都要从头开始，会使自己的发展受到影响。在专业知识方面，一份工作做得久了，才能真正学到东西。拿我们公司的经理来说，她在公司工作了十年，从一个新人慢慢成为了经理。既然选择了一份工作，就要认真做下去。只有把基础打好，提高工作能力，今后才会有更好的发展机会。",
   "sample_vn": "Chúng tôi cho rằng người trẻ nên kiên trì một công việc, tích lũy thêm kinh nghiệm. Vì thích nghi với việc mới thường mất khá nhiều thời gian, nếu cứ đổi việc mãi, lần nào cũng phải bắt đầu lại từ đầu, sẽ khiến sự phát triển của bản thân bị ảnh hưởng. Về mặt kiến thức chuyên môn, làm một việc lâu mới thật sự học được điều gì đó. Lấy giám đốc công ty chúng tôi mà nói, chị ấy làm ở công ty mười năm, từ một người mới dần trở thành giám đốc. Đã chọn một công việc thì phải làm cho nghiêm túc. Chỉ có xây chắc nền tảng, nâng cao năng lực làm việc, sau này mới có cơ hội phát triển tốt hơn.",
   "note": "Hoạt động 小组辩论 (任务活动) của sách, trang 80 — phe 反方; dùng đủ 4 điểm ngữ pháp + 成为 (Bài 1)."
  }
 ]
};
var translateData = [
 {
  "vi": "Xin lỗi làm phiền chị một chút, bản kế hoạch em đã gửi vào hộp thư của chị rồi.",
  "zh": "打扰您一下，计划书我已经发到您邮箱了。",
  "py": "Dǎrǎo nín yíxià, jìhuà shū wǒ yǐjīng fā dào nín yóuxiāng le."
 },
 {
  "vi": "Về mặt nội dung, chị thấy có chỗ nào cần sửa không?",
  "zh": "在内容方面，您觉得有需要改的吗？",
  "py": "Zài nèiróng fāngmiàn, nín juéde yǒu xūyào gǎi de ma?"
 },
 {
  "vi": "Đã đi công tác không lâu thì phải sắp xếp thời gian cho tốt.",
  "zh": "既然出差时间不长，就要安排好时间。",
  "py": "Jìrán chūchāi shíjiān bù cháng, jiù yào ānpái hǎo shíjiān."
 },
 {
  "vi": "Lấy việc trao đổi với khách hàng mà nói, hiệu quả thực tế chẳng lý tưởng chút nào.",
  "zh": "拿和客户交流来说，实际效果并不理想。",
  "py": "Ná hé kèhù jiāoliú láishuō, shíjì xiàoguǒ bìng bù lǐxiǎng."
 },
 {
  "vi": "Thường xuyên đổi việc có thể khiến sự phát triển của bản thân bị ảnh hưởng.",
  "zh": "经常换工作可能会使自己的发展受到影响。",
  "py": "Jīngcháng huàn gōngzuò kěnéng huì shǐ zìjǐ de fāzhǎn shòudào yǐngxiǎng."
 },
 {
  "vi": "Người trẻ vừa bước vào xã hội càng phải coi trọng việc học.",
  "zh": "年轻人刚进入社会时，更要重视学习。",
  "py": "Niánqīngrén gāng jìnrù shèhuì shí, gèng yào zhòngshì xuéxí."
 }
];
var translateDataRev = [
 {
  "vi": "Lúc làm khảo sát phải cẩn thận, chú ý tìm hiểu suy nghĩ thật sự của khách hàng.",
  "zh": "做调查的时候要细心，注意了解客户真正的想法。",
  "py": "Zuò diàochá de shíhou yào xìxīn, zhùyì liǎojiě kèhù zhēnzhèng de xiǎngfǎ."
 },
 {
  "vi": "Em phải chuẩn bị sẵn câu hỏi từ trước, để tiện trao đổi với khách hàng.",
  "zh": "你要提前准备好问题，便于和客户交流。",
  "py": "Nǐ yào tíqián zhǔnbèi hǎo wèntí, biànyú hé kèhù jiāoliú."
 },
 {
  "vi": "Thời gian trước, đồng nghiệp của Dương Đồng Lạc đã bàn thành một vụ làm ăn khá tốt.",
  "zh": "前段时间，杨同乐的同事谈成了一笔不错的生意。",
  "py": "Qián duàn shíjiān, Yáng Tónglè de tóngshì tán chéng le yì bǐ búcuò de shēngyi."
 },
 {
  "vi": "Khách hàng khác tuổi, khác giới tính có điểm quan tâm đến sản phẩm không giống nhau.",
  "zh": "不同年龄、不同性别的客户对产品的关注点是不一样的。",
  "py": "Bùtóng niánlíng, bùtóng xìngbié de kèhù duì chǎnpǐn de guānzhù diǎn shì bù yíyàng de."
 },
 {
  "vi": "Chỉ có xây chắc nền tảng, nâng cao năng lực làm việc, sau này mới có cơ hội phát triển tốt hơn.",
  "zh": "只有把基础打好，提高工作能力，今后才会有更好的发展机会。",
  "py": "Zhǐyǒu bǎ jīchǔ dǎ hǎo, tígāo gōngzuò nénglì, jīnhòu cái huì yǒu gèng hǎo de fāzhǎn jīhuì."
 }
];
var sgkData = [
 {
  "kieu": "kho",
  "de": "选词填空（一）· 综合练习",
  "vn": "Chọn từ thích hợp điền vào chỗ trống (Bài tập tổng hợp, sách trang 79).",
  "dapSgk": true,
  "tu": [
   "改",
   "想法",
   "便于",
   "打扰",
   "及时"
  ],
  "cau": [
   {
    "s": "发现问题以后，我们要＿＿解决。",
    "dap": [
     "及时"
    ]
   },
   {
    "s": "不好意思，这么晚还来＿＿您休息。",
    "dap": [
     "打扰"
    ]
   },
   {
    "s": "我刚才把家庭地址写错了，可以＿＿一下吗？",
    "dap": [
     "改"
    ]
   },
   {
    "s": "他和同事交流了一下，了解了大家的＿＿。",
    "dap": [
     "想法"
    ]
   },
   {
    "s": "老师把学习材料放到了网上，＿＿学生们复习。",
    "dap": [
     "便于"
    ]
   }
  ]
 },
 {
  "kieu": "kho",
  "de": "选词填空（二）· 综合练习",
  "vn": "Chọn từ thích hợp điền vào chỗ trống (hội thoại, sách trang 79).",
  "dapSgk": true,
  "tu": [
   "一下",
   "基础",
   "优点",
   "效果",
   "管理"
  ],
  "cau": [
   {
    "s": "A：听说你最近一直坚持跑步。　B：是的，我觉得＿＿很好，身体比以前好多了。",
    "dap": [
     "效果"
    ]
   },
   {
    "s": "A：经理为什么让小王去做市场调查？　B：经理说他的＿＿是很会和别人交流。",
    "dap": [
     "优点"
    ]
   },
   {
    "s": "A：我想学好中文，有什么建议吗？　B：刚开始的时候别太着急，先把＿＿打好。",
    "dap": [
     "基础"
    ]
   },
   {
    "s": "A：你在大学学的是什么专业？　B：我学的是酒店＿＿专业，现在在一家酒店工作。",
    "dap": [
     "管理"
    ]
   },
   {
    "s": "A：您讲得真好，讲完我＿＿就明白了。谢谢您！　B：别客气，还有不懂的就来问我。",
    "dap": [
     "一下"
    ]
   }
  ]
 },
 {
  "kieu": "kho",
  "de": "选择合适的内容完成短文",
  "vn": "Chọn nội dung thích hợp (A–D) hoàn thành đoạn văn (sách trang 80).",
  "dapSgk": true,
  "tu": [
   "按时完成了任务",
   "也积累了不少经验",
   "去几家公司做市场调查了",
   "了解他们对新产品的看法"
  ],
  "cau": [
   {
    "s": "上周，小张接到经理的任务，＿＿。她和一些客户交流了一下，＿＿。有的客户觉得价格有点儿高，有的客户更关心产品好用不好用。昨天，小张按照客户的年龄和性别，写好了调查结果，并交给了经理，＿＿。通过这次调查，她对客户的想法有了更多了解，＿＿。",
    "dap": [
     "去几家公司做市场调查了",
     "了解他们对新产品的看法",
     "按时完成了任务",
     "也积累了不少经验"
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
    "anh": "/images/hsk4v3/bai-7/bt-1.webp",
    "s": "",
    "tu": "调查",
    "dap": "她正在跟客户做市场调查。",
    "giai": "正在 + V (đang làm); 做市场调查 = làm khảo sát thị trường; 跟 + ai = cùng với ai."
   },
   {
    "anh": "/images/hsk4v3/bai-7/bt-2.webp",
    "s": "",
    "tu": "能力",
    "dap": "因为他们很有能力，所以谈成了一笔大生意。",
    "giai": "很有能力 = rất có năng lực; 谈成了一笔生意 — lượng từ 笔 cho vụ làm ăn (bài khoá 3)."
   },
   {
    "anh": "/images/hsk4v3/bai-7/bt-3.webp",
    "s": "",
    "tu": "细心",
    "dap": "这个小男孩儿写作业很细心。",
    "giai": "细心 làm vị ngữ: V + O + 很细心 (làm … rất cẩn thận)."
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
  "tieuDe": "Viết thư (email) khuyên bạn về công việc (写作)",
  "gioiThieu": "Đề 写作 của sách HSK 4 (3.0) yêu cầu viết một đoạn văn ngắn (ít nhất 120 chữ) dựa trên nội dung đã học — lần này là một EMAIL gửi người bạn đang buồn vì không thích công việc hiện tại, dựa vào nội dung buổi tranh luận “đổi việc hay làm tiếp”.",
  "buoc": [
   "Đọc kỹ đề: người đọc là BẠN của em (đang phiền não, thấy việc không có cơ hội phát triển) — giọng thân mật, vừa thông cảm vừa khuyên nhủ.",
   "Chọn lập trường: khuyên bạn kiên trì (phe 反方) hay khuyên bạn đổi việc (phe 正方), hoặc phân tích cả hai mặt rồi đưa lời khuyên.",
   "Lập dàn ý theo các câu hỏi gợi ý: mỗi câu hỏi là một ý, viết 1–2 câu cho mỗi ý (thông cảm — quan điểm — lý do + ví dụ — lời khuyên cụ thể — động viên).",
   "Dùng từ mới và 4 điểm ngữ pháp của bài (khung “Từ, cấu trúc nên dùng”): 在……方面, 既然……就……, 拿……来说, A 使 B……",
   "Viết đúng thể thức thư: dòng xưng hô (小明：), câu chào 你好！, phần thân, lời chúc cuối (祝你工作顺利！) và tên người viết; tự soát số chữ (≥ 120) và lỗi chữ Hán."
  ]
 },
 "de": "你的一个朋友最近很苦恼，他/她不喜欢现在的工作，觉得没有发展机会。请你根据上面辩论的内容，给他/她写一封邮件，谈谈你的看法，不少于120字。",
 "prompt": "Một người bạn của em gần đây rất phiền não, bạn ấy không thích công việc hiện tại, thấy không có cơ hội phát triển. Hãy dựa vào nội dung buổi tranh luận ở trên, viết cho bạn ấy một email, nói về quan điểm của em, không ít hơn 120 chữ.",
 "dan": [
  {
   "hoi": "你知道朋友怎么了？你理解他/她的心情吗？",
   "goiY": "收到你的邮件，知道你最近很苦恼……，我很理解你的心情"
  },
  {
   "hoi": "你的看法是什么？换工作还是继续做？",
   "goiY": "我觉得你可以先坚持一段时间 / 既然……，就……"
  },
  {
   "hoi": "为什么？有什么理由？",
   "goiY": "适应新工作往往需要……；总是换工作会使……；在……方面你已经……"
  },
  {
   "hoi": "能举一个例子吗？",
   "goiY": "拿我来说 / 拿我的同事来说，刚开始……，后来……"
  },
  {
   "hoi": "你给朋友什么具体建议？怎么结束邮件？",
   "goiY": "多和同事交流，积累经验，提高能力……；有什么困难，及时跟我联系就是了。祝你……"
  }
 ],
 "tuNen": [
  "经验",
  "积累",
  "能力",
  "基础",
  "今后",
  "进入",
  "社会",
  "任务",
  "想法",
  "看法",
  "困难",
  "优点",
  "缺点",
  "实际",
  "效果",
  "真正",
  "管理"
 ],
 "cauTruc": [
  {
   "ten": "既然……，就……",
   "nhan": "既然",
   "vd": "既然你觉得现在的工作没有发展机会，就先想清楚自己真正想做什么。",
   "khi": "Đưa ra lời khuyên dựa trên tình hình của bạn."
  },
  {
   "ten": "在……方面",
   "nhan": "在……方面",
   "vd": "在和客户交流方面，你已经积累了不少经验。",
   "khi": "Chỉ ra mặt mạnh / cái bạn đã học được."
  },
  {
   "ten": "拿……来说",
   "nhan": "拿……来说",
   "vd": "拿我来说，刚开始工作的时候，我也觉得每天的任务又多又没意思。",
   "khi": "Đưa ví dụ (kinh nghiệm của em / người quen)."
  },
  {
   "ten": "A 使 B + V / Adj",
   "nhan": "使",
   "vd": "总是换工作可能会使你的发展受到影响。",
   "khi": "Nói hậu quả / tác dụng của một việc."
  },
  {
   "ten": "一方面……，另一方面……",
   "nhan": "一方面",
   "vd": "现在的工作一方面能使你积累经验，另一方面也能帮你打好基础。",
   "khi": "Phân tích hai mặt lợi ích (ôn Bài 1)."
  }
 ],
 "checklist": [
  "Đủ ít nhất 120 chữ Hán chưa?",
  "Đúng thể thức email: xưng hô, chào, lời chúc cuối, tên người viết chưa?",
  "Đã nói rõ quan điểm của em (khuyên kiên trì / khuyên đổi việc) và đưa lý do chưa?",
  "Có ít nhất một ví dụ cụ thể (拿……来说) chưa?",
  "Đã dùng ít nhất 3 trong 4 điểm ngữ pháp của bài (在……方面、既然……就……、拿……来说、使) và ít nhất 6 từ mới chưa?"
 ],
 "model": {
  "zh": "小明：你好！收到你的邮件，知道你最近很苦恼，觉得现在的工作没有发展机会。我很理解你的心情，不过我想谈谈我的看法。你刚进入社会一年，适应新工作往往需要比较长的时间。拿我来说，刚开始工作的时候，我也觉得每天的任务又多又没意思，后来才发现，在和客户交流方面，我学到了很多课本中没有的知识。我觉得，现在的工作一方面能使你积累经验，另一方面也能帮你打好基础。如果总是换工作，可能会使你的发展受到影响。当然，既然你真的不喜欢这份工作，也可以先想清楚自己最想做什么，再做决定。有什么困难，及时跟我联系就是了。祝你工作顺利！你的朋友小林",
  "py": "Xiǎomíng: nǐhǎo! Shōudào nǐ de yóujiàn, zhīdao nǐ zuìjìn hěn kǔ nǎo, juéde xiànzài de gōngzuò méiyǒu fāzhǎn jīhuì. Wǒ hěn lǐjiě nǐ de xīnqíng, búguò wǒ xiǎng tán tán wǒ de kànfǎ. Nǐ gāng jìnrù shèhuì yì nián, shìyìng xīn gōngzuò wǎngwǎng xūyào bǐjiào cháng de shíjiān. Ná wǒ láishuō, gāng kāishǐ gōngzuò de shíhou, wǒ yě juéde měi tiān de rènwù yòu duō yòu méiyìsi, hòulái cái fāxiàn, zài hé kèhù jiāoliú fāngmiàn, wǒ xué dào le hěn duō kèběn zhōng méiyǒu de zhīshí. Wǒ juéde, xiànzài de gōngzuò yìfāngmiàn néng shǐ nǐ jīlěi jīngyàn, lìngyìfāngmiàn yě néng bāng nǐ dǎ hǎo jīchǔ. Rúguǒ zǒngshì huàn gōngzuò, kěnéng huì shǐ nǐ de fāzhǎn shòudào yǐngxiǎng. Dāngrán, jìrán nǐ zhēn de bù xǐhuan zhè fèn gōngzuò, yě kěyǐ xiān xiǎng qīngchu zìjǐ zuì xiǎng zuò shénme, zài zuò juédìng. Yǒu shénme kùnnan, jíshí gēn wǒ liánxì jiù shì le. Zhù nǐ gōngzuò shùnlì! Nǐ de péngyou xiǎo lín"
 }
};
