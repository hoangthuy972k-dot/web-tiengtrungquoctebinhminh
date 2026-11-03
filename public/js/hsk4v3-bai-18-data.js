// HSK 4 (3.0) · Bai 18 — sinh boi tools/hsk4v3/gan.js tu tools/hsk4v3/bai-18/ (dung sua tay).
var vocabData = [
 {
  "n": 1,
  "zh": "猜",
  "py": "cāi",
  "pos": "Động từ",
  "vn": "đoán",
  "hv": "sai",
  "em": "🤔",
  "lesson": 1,
  "explain": [
   "Đoán, phỏng đoán điều mình chưa biết. Rất hay dùng khi muốn gây tò mò: 你猜……？ (bạn đoán xem …?), 猜一猜."
  ],
  "usage": "猜 + câu hỏi (你们猜我是怎么过来的？) · 猜对 / 猜错 / 猜不到 / 猜不出来.",
  "collo": [
   "猜一猜",
   "猜对了",
   "猜不出来",
   "让大家猜"
  ],
  "colloFull": [
   {
    "zh": "猜一猜",
    "py": "Cāi yi cāi",
    "vn": "đoán thử xem"
   },
   {
    "zh": "猜对了",
    "py": "Cāiduì le",
    "vn": "đoán đúng rồi"
   },
   {
    "zh": "猜不出来",
    "py": "Cāi bu chūlai",
    "vn": "không đoán ra được"
   },
   {
    "zh": "让大家猜",
    "py": "Ràng dàjiā cāi",
    "vn": "để mọi người đoán"
   }
  ],
  "patterns": [
   {
    "s": "你猜 + câu hỏi？",
    "m": "Bạn đoán xem …? — mở đầu câu chuyện gây tò mò"
   },
   {
    "s": "猜 + 对 / 错 / 不到 / 不出来",
    "m": "bổ ngữ kết quả / bổ ngữ khả năng (ôn Bài 4)"
   }
  ],
  "ex_zh": "天中、家月，你们猜我是怎么过来的？",
  "ex_py": "Tiānzhōng, Jiāyuè, nǐmen cāi wǒ shì zěnme guòlai de?",
  "ex_vn": "Thiên Trung, Gia Nguyệt, các cậu đoán xem tớ đến đây bằng cách nào?",
  "exList": [
   {
    "zh": "天中、家月，你们猜我是怎么过来的？",
    "py": "Tiānzhōng, Jiāyuè, nǐmen cāi wǒ shì zěnme guòlai de?",
    "vn": "Thiên Trung, Gia Nguyệt, các cậu đoán xem tớ đến đây bằng cách nào?"
   },
   {
    "zh": "你猜得没错，这些小吃都是她自己做的。",
    "py": "Nǐ cāi de méicuò, zhèxiē xiǎochī dōu shì tā zìjǐ zuò de.",
    "vn": "Bạn đoán không sai, mấy món ăn vặt này đều do cô ấy tự làm."
   }
  ],
  "hanzi": [
   {
    "c": "猜",
    "p": "cāi",
    "type": "左右结构 · Trái-phải",
    "st": 11,
    "ord": "犭 (khuyển) trái → 青 phải",
    "rad": "犭 (khuyển – chó)",
    "mean": "đoán, nghi ngờ",
    "tip": "Bộ khuyển 犭 (thú vật đánh hơi, đoán mò) + 青(biểu âm) → mở rộng nghĩa ĐOÁN, SUY ĐOÁN.",
    "cf": "猎 (liè – \"săn bắn\", cũng bộ 犭\")",
    "w": "猜 / 猜测 / 猜想"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Các bạn đoán xem rốt cuộc trong tay tôi cầm cái gì?",
    "answer": "你们猜一下，我手里到底拿的是什么？",
    "answerPy": "Nǐmen cāi yíxià, wǒ shǒu lǐ dàodǐ ná de shì shénme?",
    "note": "Ôn 到底 (điểm 3 của bài này).",
    "pair": "猜一下 + câu hỏi có 到底"
   },
   {
    "promptLang": "vi",
    "prompt": "Câu đố này khó quá, tôi đoán thế nào cũng không ra.",
    "answer": "这个问题太难了，我怎么也猜不出来。",
    "answerPy": "Zhège wèntí tài nán le, wǒ zěnme yě cāi bu chūlai.",
    "note": "Ôn 怎么也 + 不…… (Bài 13 · điểm 1).",
    "pair": "怎么也 + V不出来"
   }
  ]
 },
 {
  "n": 2,
  "zh": "共享单车",
  "py": "gòngxiǎng dānchē",
  "pos": "Danh từ",
  "vn": "xe đạp công cộng (xe đạp chia sẻ)",
  "hv": "cộng hưởng đơn xa",
  "em": "🚲",
  "lesson": 1,
  "explain": [
   "Xe đạp cho thuê công cộng đặt khắp đường phố Trung Quốc: dùng điện thoại quét mã QR để mở khoá, đi xong đỗ đúng chỗ, trả tiền qua App. 共享 = chia sẻ, dùng chung; 单车 = xe đạp (= 自行车).",
   "⚠ Bẫy Hán Việt: 单车 “đơn xa” không phải “xe một người” mà là XE ĐẠP; 共享 “cộng hưởng” nghĩa là dùng chung, không phải “cộng hưởng” âm thanh."
  ],
  "usage": "骑共享单车 · 扫共享单车上的二维码 · 共享 + N: 共享经济 (kinh tế chia sẻ).",
  "collo": [
   "骑共享单车",
   "扫共享单车",
   "共享经济",
   "共享充电宝"
  ],
  "colloFull": [
   {
    "zh": "骑共享单车",
    "py": "Qí gòngxiǎng dānchē",
    "vn": "đi xe đạp công cộng"
   },
   {
    "zh": "扫共享单车",
    "py": "Sǎo gòngxiǎng dānchē",
    "vn": "quét mã xe đạp công cộng"
   },
   {
    "zh": "共享经济",
    "py": "Gòngxiǎng jīngjì",
    "vn": "kinh tế chia sẻ"
   },
   {
    "zh": "共享充电宝",
    "py": "Gòngxiǎng chōngdiànbǎo",
    "vn": "sạc dự phòng dùng chung"
   }
  ],
  "patterns": [
   {
    "s": "骑 + 共享单车 + 去 / 到 + nơi chốn",
    "m": "đạp xe công cộng đi đâu"
   },
   {
    "s": "共享 + N",
    "m": "dùng chung: 共享经济, 共享充电宝"
   }
  ],
  "ex_zh": "我先坐的公交车，然后骑共享单车，快到那边那个出口时又推了一小段。",
  "ex_py": "Wǒ xiān zuò de gōngjiāochē, ránhòu qí gòngxiǎng dānchē, kuài dào nàbiān nàge chūkǒu shí yòu tuī le yì xiǎo duàn.",
  "ex_vn": "Tớ đi xe buýt trước, sau đó đạp xe đạp công cộng, sắp đến cái cổng ra đằng kia thì lại dắt xe đi một đoạn ngắn.",
  "exList": [
   {
    "zh": "我先坐的公交车，然后骑共享单车，快到那边那个出口时又推了一小段。",
    "py": "Wǒ xiān zuò de gōngjiāochē, ránhòu qí gòngxiǎng dānchē, kuài dào nàbiān nàge chūkǒu shí yòu tuī le yì xiǎo duàn.",
    "vn": "Tớ đi xe buýt trước, sau đó đạp xe đạp công cộng, sắp đến cái cổng ra đằng kia thì lại dắt xe đi một đoạn ngắn."
   },
   {
    "zh": "即使下小雨，他也骑共享单车去上班。",
    "py": "Jíshǐ xià xiǎoyǔ, tā yě qí gòngxiǎng dānchē qù shàngbān.",
    "vn": "Cho dù trời mưa nhỏ, anh ấy vẫn đạp xe đạp công cộng đi làm."
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
    "c": "享",
    "p": "xiǎng",
    "type": "形声字 · Chữ hình thanh",
    "st": 8,
    "ord": "亠 → 口 → 子",
    "rad": "亠 (đầu – nắp)",
    "mean": "hưởng, hưởng thụ; (共享) dùng chung",
    "tip": "Trên là mái nhà (亠 + 口 – gian nhà), dưới là đứa con (子): con cháu được ở trong nhà, hưởng phúc → hưởng thụ; 共享 = cùng hưởng, dùng chung.",
    "cf": "亨 hēng (hanh thông) — dưới là 了; 京 jīng (kinh đô) — dưới là 小",
    "w": "共享 / 享受 / 分享"
   },
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
    "c": "车",
    "p": "chē",
    "type": "独体字 · Chữ đơn",
    "st": 4,
    "ord": "一→𠃌→丨",
    "rad": "车 (xa – tự thành bộ)",
    "mean": "xe",
    "tip": "Hình bánh xe nhìn từ trên xuống → XE.",
    "cf": "东 (dōng – \"phía đông\", hình dạng gần giống\")",
    "w": "公交车 / 开车 / 坐车"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Tôi đi xe buýt trước, sau đó đạp xe đạp công cộng đến trường.",
    "answer": "我先坐公交车，然后骑共享单车到学校。",
    "answerPy": "Wǒ xiān zuò gōngjiāochē, ránhòu qí gòngxiǎng dānchē dào xuéxiào.",
    "note": "Ôn 先……，然后…… (HSK 3).",
    "pair": "先……，然后……"
   },
   {
    "promptLang": "vi",
    "prompt": "So với đi taxi, đi xe đạp công cộng vừa rẻ vừa tốt cho sức khoẻ.",
    "answer": "跟打车相比，骑共享单车既便宜又对身体好。",
    "answerPy": "Gēn dǎchē xiāngbǐ, qí gòngxiǎng dānchē jì piányi yòu duì shēntǐ hǎo.",
    "note": "Ôn 跟……相比 (Bài 8 · điểm 3) và 既……又…… (Bài 4 · điểm 3).",
    "pair": "跟……相比，……既……又……"
   }
  ]
 },
 {
  "n": 3,
  "zh": "出口",
  "py": "chūkǒu",
  "pos": "Danh từ",
  "vn": "lối ra, cửa ra",
  "hv": "xuất khẩu",
  "em": "🚪",
  "lesson": 1,
  "explain": [
   "Lối ra, cửa ra (của ga tàu, sân bay, toà nhà, công viên…); trái nghĩa 入口 (lối vào).",
   "⚠ Bẫy Hán Việt: 出口 “xuất khẩu” — trong bài này là LỐI RA (A出口 = cửa ra A của ga tàu điện ngầm); nghĩa “xuất khẩu hàng hoá” là một cách dùng khác."
  ],
  "usage": "地铁站出口 · A / B出口 · 在出口等 · 快到出口时.",
  "collo": [
   "地铁站出口",
   "A出口",
   "安全出口",
   "在出口等"
  ],
  "colloFull": [
   {
    "zh": "地铁站出口",
    "py": "Dìtiězhàn chūkǒu",
    "vn": "lối ra ga tàu điện ngầm"
   },
   {
    "zh": "A出口",
    "py": "A chūkǒu",
    "vn": "cửa ra A"
   },
   {
    "zh": "安全出口",
    "py": "Ānquán chūkǒu",
    "vn": "lối thoát hiểm"
   },
   {
    "zh": "在出口等",
    "py": "Zài chūkǒu děng",
    "vn": "đợi ở lối ra"
   }
  ],
  "patterns": [
   {
    "s": "在 + ……出口 + V",
    "m": "在B出口等你 — hẹn gặp ở cửa ra"
   },
   {
    "s": "出口 ↔ 入口",
    "m": "lối ra ↔ lối vào"
   }
  ],
  "ex_zh": "我先坐的公交车，然后骑共享单车，快到那边那个出口时又推了一小段。",
  "ex_py": "Wǒ xiān zuò de gōngjiāochē, ránhòu qí gòngxiǎng dānchē, kuài dào nàbiān nàge chūkǒu shí yòu tuī le yì xiǎo duàn.",
  "ex_vn": "Tớ đi xe buýt trước, sau đó đạp xe đạp công cộng, sắp đến cái cổng ra đằng kia thì lại dắt xe đi một đoạn ngắn.",
  "exList": [
   {
    "zh": "我先坐的公交车，然后骑共享单车，快到那边那个出口时又推了一小段。",
    "py": "Wǒ xiān zuò de gōngjiāochē, ránhòu qí gòngxiǎng dānchē, kuài dào nàbiān nàge chūkǒu shí yòu tuī le yì xiǎo duàn.",
    "vn": "Tớ đi xe buýt trước, sau đó đạp xe đạp công cộng, sắp đến cái cổng ra đằng kia thì lại dắt xe đi một đoạn ngắn."
   },
   {
    "zh": "我们约好了在地铁站A出口见面。",
    "py": "Wǒmen yuēhǎo le zài dìtiězhàn A chūkǒu jiànmiàn.",
    "vn": "Chúng tôi đã hẹn gặp nhau ở cửa ra A của ga tàu điện ngầm."
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
    "prompt": "Tôi đợi bạn ở cửa ra B của ga tàu điện ngầm nhé.",
    "answer": "我在地铁站B出口等你吧。",
    "answerPy": "Wǒ zài dìtiězhàn B chūkǒu děng nǐ ba.",
    "note": "Ôn 吧 đề nghị (HSK 2).",
    "pair": "在……出口等……"
   },
   {
    "promptLang": "vi",
    "prompt": "Lối ra của sân bay này xa lắm, đi bộ ít nhất mười phút.",
    "answer": "这个机场的出口很远，走路至少要十分钟。",
    "answerPy": "Zhège jīchǎng de chūkǒu hěn yuǎn, zǒulù zhìshǎo yào shí fēnzhōng.",
    "note": "Ôn 至少 (Bài 5 · điểm 1).",
    "pair": "至少 + V + thời lượng"
   }
  ]
 },
 {
  "n": 4,
  "zh": "推",
  "py": "tuī",
  "pos": "Động từ",
  "vn": "đẩy; dắt (xe)",
  "hv": "thôi (suy)",
  "em": "👐",
  "lesson": 1,
  "explain": [
   "Dùng lực đẩy vật ra xa mình: đẩy cửa, đẩy xe. Với xe đạp, 推车 = xuống xe, tay đẩy xe đi bộ — tiếng Việt nói “dắt xe”. Trái nghĩa: 拉 (kéo)."
  ],
  "usage": "推门 / 推车 · 推着自行车走 · 推开 · 推了一小段 (dắt / đẩy một đoạn ngắn).",
  "collo": [
   "推门",
   "推车",
   "推开",
   "推着走"
  ],
  "colloFull": [
   {
    "zh": "推门",
    "py": "Tuī mén",
    "vn": "đẩy cửa"
   },
   {
    "zh": "推车",
    "py": "Tuī chē",
    "vn": "đẩy / dắt xe"
   },
   {
    "zh": "推开",
    "py": "Tuīkāi",
    "vn": "đẩy ra"
   },
   {
    "zh": "推着走",
    "py": "Tuī zhe zǒu",
    "vn": "đẩy (xe) mà đi"
   }
  ],
  "patterns": [
   {
    "s": "推 + 着 + N + 走",
    "m": "推着自行车走 — dắt xe đi bộ"
   },
   {
    "s": "推 ↔ 拉",
    "m": "đẩy ↔ kéo"
   }
  ],
  "ex_zh": "我先坐的公交车，然后骑共享单车，快到那边那个出口时又推了一小段。",
  "ex_py": "Wǒ xiān zuò de gōngjiāochē, ránhòu qí gòngxiǎng dānchē, kuài dào nàbiān nàge chūkǒu shí yòu tuī le yì xiǎo duàn.",
  "ex_vn": "Tớ đi xe buýt trước, sau đó đạp xe đạp công cộng, sắp đến cái cổng ra đằng kia thì lại dắt xe đi một đoạn ngắn.",
  "exList": [
   {
    "zh": "我先坐的公交车，然后骑共享单车，快到那边那个出口时又推了一小段。",
    "py": "Wǒ xiān zuò de gōngjiāochē, ránhòu qí gòngxiǎng dānchē, kuài dào nàbiān nàge chūkǒu shí yòu tuī le yì xiǎo duàn.",
    "vn": "Tớ đi xe buýt trước, sau đó đạp xe đạp công cộng, sắp đến cái cổng ra đằng kia thì lại dắt xe đi một đoạn ngắn."
   },
   {
    "zh": "门上写着“推”，你别拉了。",
    "py": "Mén shàng xiě zhe “tuī”, nǐ bié lā le.",
    "vn": "Trên cửa ghi “đẩy”, bạn đừng kéo nữa."
   }
  ],
  "hanzi": [
   {
    "c": "推",
    "p": "tuī",
    "type": "左右结构 · Trái-phải",
    "st": 11,
    "ord": "扌 trái → 隹 phải",
    "rad": "扌 (thủ)",
    "mean": "đẩy",
    "tip": "Tay 扌 + 隹(chim) → dùng tay ĐẨY. 推迟 = hoãn; 推出 = tung ra; 推荐 = giới thiệu.",
    "cf": "堆 (duī – đống)",
    "w": "推 / 推迟 / 推出 / 推荐"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Xe hỏng rồi, chúng tôi đành dắt xe đi bộ về nhà.",
    "answer": "车坏了，我们只好推着车走回家。",
    "answerPy": "Chē huài le, wǒmen zhǐhǎo tuī zhe chē zǒu huíjiā.",
    "note": "Ôn 只好 (HSK 3) + V着 (HSK 2).",
    "pair": "只好 + 推着……走"
   },
   {
    "promptLang": "vi",
    "prompt": "Bạn đẩy nhẹ cửa một cái là mở ra.",
    "answer": "你把门轻轻推一下就开了。",
    "answerPy": "Nǐ bǎ mén qīngqīng tuī yíxià jiù kāi le.",
    "note": "Ôn câu chữ 把 (Bài 15 · điểm 3).",
    "pair": "把 + 门 + 推一下"
   }
  ]
 },
 {
  "n": 5,
  "zh": "对",
  "py": "duì",
  "pos": "Động từ",
  "vn": "hướng vào, nhắm vào",
  "hv": "đối",
  "em": "🎯",
  "lesson": 1,
  "explain": [
   "Ở bài này 对 là ĐỘNG TỪ: hướng vào, nhắm vào (một vật); thường dùng dạng 对着 + N + V: 对着二维码扫一下.",
   "⚠ Từ đa nghĩa: đã học 对 = đúng (tính từ) và 对 = đối với (giới từ: 对……感兴趣); ở đây là “hướng vào”."
  ],
  "usage": "对着 + N + V: 对着二维码扫 / 对着镜子练习 / 对着电脑工作.",
  "collo": [
   "对着二维码",
   "对着镜子",
   "对着电脑",
   "对着大家笑"
  ],
  "colloFull": [
   {
    "zh": "对着二维码",
    "py": "Duìzhe èrwéimǎ",
    "vn": "hướng vào mã QR"
   },
   {
    "zh": "对着镜子",
    "py": "Duìzhe jìngzi",
    "vn": "hướng vào gương"
   },
   {
    "zh": "对着电脑",
    "py": "Duìzhe diànnǎo",
    "vn": "nhìn vào máy tính"
   },
   {
    "zh": "对着大家笑",
    "py": "Duìzhe dàjiā xiào",
    "vn": "cười với mọi người"
   }
  ],
  "patterns": [
   {
    "s": "对着 + N + V",
    "m": "hướng vào cái gì mà làm gì"
   },
   {
    "s": "对 (động từ) / 对 (giới từ) / 对 (tính từ)",
    "m": "hướng vào / đối với / đúng"
   }
  ],
  "ex_zh": "你打开微信，对着共享单车上的二维码扫一下。",
  "ex_py": "Nǐ dǎkāi wēixìn, duìzhe gòngxiǎng dānchē shàng de èrwéimǎ sǎo yíxià.",
  "ex_vn": "Cậu mở WeChat, hướng vào mã QR trên xe đạp công cộng quét một cái.",
  "exList": [
   {
    "zh": "你打开微信，对着共享单车上的二维码扫一下。",
    "py": "Nǐ dǎkāi wēixìn, duìzhe gòngxiǎng dānchē shàng de èrwéimǎ sǎo yíxià.",
    "vn": "Cậu mở WeChat, hướng vào mã QR trên xe đạp công cộng quét một cái."
   },
   {
    "zh": "她每天早上对着镜子练习说中文。",
    "py": "Tā měitiān zǎoshang duìzhe jìngzi liànxí shuō Zhōngwén.",
    "vn": "Sáng nào cô ấy cũng đứng trước gương luyện nói tiếng Trung."
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
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Bạn hướng điện thoại vào mã QR quét một cái là được.",
    "answer": "你把手机对着二维码扫一下就行了。",
    "answerPy": "Nǐ bǎ shǒujī duìzhe èrwéimǎ sǎo yíxià jiù xíng le.",
    "note": "Ôn câu chữ 把 (Bài 15–16).",
    "pair": "把 + 手机 + 对着……扫一下"
   },
   {
    "promptLang": "vi",
    "prompt": "Ngày nào tôi cũng nhìn máy tính làm việc, mắt mỏi quá.",
    "answer": "我每天对着电脑工作，眼睛太累了。",
    "answerPy": "Wǒ měitiān duìzhe diànnǎo gōngzuò, yǎnjing tài lèi le.",
    "note": "Ôn 太……了 (HSK 2).",
    "pair": "对着 + N + V"
   }
  ]
 },
 {
  "n": 6,
  "zh": "二维码",
  "py": "èrwéimǎ",
  "pos": "Danh từ",
  "vn": "mã QR",
  "hv": "nhị duy mã",
  "em": "🔳",
  "lesson": 1,
  "explain": [
   "Mã vạch hai chiều (二维 = hai chiều, 码 = mã), quét bằng điện thoại để thanh toán, đăng ký, gọi món, mở khoá xe… Tiếng Việt quen gọi là mã QR."
  ],
  "usage": "扫二维码 · 扫一下二维码 · 二维码支付 · 用手机扫码.",
  "collo": [
   "扫二维码",
   "二维码支付",
   "付款二维码",
   "微信二维码"
  ],
  "colloFull": [
   {
    "zh": "扫二维码",
    "py": "Sǎo èrwéimǎ",
    "vn": "quét mã QR"
   },
   {
    "zh": "二维码支付",
    "py": "Èrwéimǎ zhīfù",
    "vn": "thanh toán bằng mã QR"
   },
   {
    "zh": "付款二维码",
    "py": "Fùkuǎn èrwéimǎ",
    "vn": "mã QR thanh toán"
   },
   {
    "zh": "微信二维码",
    "py": "Wēixìn èrwéimǎ",
    "vn": "mã QR WeChat"
   }
  ],
  "patterns": [
   {
    "s": "扫 + 一下 + 二维码",
    "m": "quét mã QR (ôn Bài 3 “手机扫一下”)"
   },
   {
    "s": "扫二维码 + V",
    "m": "quét mã để làm gì: 扫码点菜, 扫码支付"
   }
  ],
  "ex_zh": "你打开微信，对着共享单车上的二维码扫一下。",
  "ex_py": "Nǐ dǎkāi wēixìn, duìzhe gòngxiǎng dānchē shàng de èrwéimǎ sǎo yíxià.",
  "ex_vn": "Cậu mở WeChat, hướng vào mã QR trên xe đạp công cộng quét một cái.",
  "exList": [
   {
    "zh": "你打开微信，对着共享单车上的二维码扫一下。",
    "py": "Nǐ dǎkāi wēixìn, duìzhe gòngxiǎng dānchē shàng de èrwéimǎ sǎo yíxià.",
    "vn": "Cậu mở WeChat, hướng vào mã QR trên xe đạp công cộng quét một cái."
   },
   {
    "zh": "在这家饭店，扫一下桌子上的二维码就能点菜。",
    "py": "Zài zhè jiā fàndiàn, sǎo yíxià zhuōzi shàng de èrwéimǎ jiù néng diǎn cài.",
    "vn": "Ở nhà hàng này, quét mã QR trên bàn là gọi món được."
   }
  ],
  "hanzi": [
   {
    "c": "二",
    "p": "èr",
    "type": "独体字 · Chữ đơn",
    "st": 2,
    "ord": "一→一",
    "rad": "二 (nhị – tự thành bộ)",
    "mean": "hai",
    "tip": "Hai nét ngang xếp chồng → số HAI.",
    "cf": "一 (yī – \"một\")",
    "w": "一，二，三"
   },
   {
    "c": "维",
    "p": "wéi",
    "type": "形声字 · Chữ hình thanh",
    "st": 11,
    "ord": "纟 → 隹",
    "rad": "纟 (mịch – sợi tơ)",
    "mean": "buộc, giữ gìn; chiều (không gian)",
    "tip": "Sợi tơ (纟) + 隹 (zhuī, chim đuôi ngắn, gợi âm wéi): sợi dây buộc giữ → giữ gìn (维护); nghĩa mở rộng “chiều”: 二维 = hai chiều, 三维 = ba chiều (3D).",
    "cf": "谁 shéi (ai) — bên trái là 讠; 准 zhǔn (chuẩn) — bên trái là 冫",
    "w": "二维码 / 维护 / 思维"
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
    "prompt": "Bây giờ đi đâu cũng có thể quét mã QR, cho dù không mang tiền mặt cũng không sao.",
    "answer": "现在去哪儿都可以扫二维码，即使不带现金也没关系。",
    "answerPy": "Xiànzài qù nǎr dōu kěyǐ sǎo èrwéimǎ, jíshǐ bú dài xiànjīn yě méiguānxì.",
    "note": "Ôn 即使……也…… (Bài 11 · điểm 1).",
    "pair": "即使……也……"
   },
   {
    "promptLang": "vi",
    "prompt": "Quét mã QR không những thanh toán được mà còn gọi món được.",
    "answer": "扫二维码不仅可以支付，还可以点菜。",
    "answerPy": "Sǎo èrwéimǎ bùjǐn kěyǐ zhīfù, hái kěyǐ diǎn cài.",
    "note": "Ôn 不仅……还…… (Bài 3 · điểm 2).",
    "pair": "不仅……，还……"
   }
  ]
 },
 {
  "n": 7,
  "zh": "注册",
  "py": "zhùcè",
  "pos": "Động từ",
  "vn": "đăng ký (tài khoản, thông tin)",
  "hv": "chú sách",
  "em": "📝",
  "lesson": 1,
  "explain": [
   "Đăng ký tài khoản / thông tin trên App, trang web, hoặc đăng ký với cơ quan, trường học. Phân biệt: 报名 = ghi danh tham gia (thi, lớp học, hoạt động)."
  ],
  "usage": "在App上注册 · 完成注册 · 注册成功 · 注册账号.",
  "collo": [
   "完成注册",
   "注册成功",
   "注册账号",
   "网上注册"
  ],
  "colloFull": [
   {
    "zh": "完成注册",
    "py": "Wánchéng zhùcè",
    "vn": "hoàn tất đăng ký"
   },
   {
    "zh": "注册成功",
    "py": "Zhùcè chénggōng",
    "vn": "đăng ký thành công"
   },
   {
    "zh": "注册账号",
    "py": "Zhùcè zhànghào",
    "vn": "đăng ký tài khoản"
   },
   {
    "zh": "网上注册",
    "py": "Wǎngshang zhùcè",
    "vn": "đăng ký trên mạng"
   }
  ],
  "patterns": [
   {
    "s": "在 + App / 网站 + 上 + 注册",
    "m": "đăng ký trên App / trang web"
   },
   {
    "s": "注册 ≠ 报名",
    "m": "đăng ký tài khoản ≠ ghi danh tham gia (报名参加比赛)"
   }
  ],
  "ex_zh": "第一次骑的时候，你打开微信，对着二维码扫一下，在App上完成注册就可以了。",
  "ex_py": "Dì yí cì qí de shíhou, nǐ dǎkāi wēixìn, duìzhe èrwéimǎ sǎo yíxià, zài App shàng wánchéng zhùcè jiù kěyǐ le.",
  "ex_vn": "Lần đầu đi, cậu mở WeChat, hướng vào mã QR quét một cái, hoàn tất đăng ký trên App là được.",
  "exList": [
   {
    "zh": "第一次骑的时候，你打开微信，对着二维码扫一下，在App上完成注册就可以了。",
    "py": "Dì yí cì qí de shíhou, nǐ dǎkāi wēixìn, duìzhe èrwéimǎ sǎo yíxià, zài App shàng wánchéng zhùcè jiù kěyǐ le.",
    "vn": "Lần đầu đi, cậu mở WeChat, hướng vào mã QR quét một cái, hoàn tất đăng ký trên App là được."
   },
   {
    "zh": "我用手机号注册了一个新账号。",
    "py": "Wǒ yòng shǒujīhào zhùcè le yí gè xīn zhànghào.",
    "vn": "Tôi dùng số điện thoại đăng ký một tài khoản mới."
   }
  ],
  "hanzi": [
   {
    "c": "注",
    "p": "zhù",
    "type": "形声字 · Chữ hình thanh",
    "st": 8,
    "ord": "氵 → 主",
    "rad": "氵 (thuỷ – nước)",
    "mean": "rót vào; dồn (sự chú ý) vào",
    "tip": "氵 (nước) + 主 (zhǔ, chỉ âm): rót nước vào → dồn tâm trí vào. Ôn: 注意 (HSK3 Bài 8). 关注 = dồn sự quan tâm vào.",
    "cf": "住 zhù (HSK1 Bài 15) — cùng 主 nhưng bên trái là 亻",
    "w": "关注 / 注意"
   },
   {
    "c": "册",
    "p": "cè",
    "type": "象形字 · Chữ tượng hình",
    "st": 5,
    "ord": "丿 → 冂 → 丨 → 一 (nét ngang dài xuyên qua)",
    "rad": "冂 (quynh – khung)",
    "mean": "quyển, tập; sổ sách; (注册) đăng ký",
    "tip": "Vẽ những thẻ tre (丨丨) được dây buộc ngang (一) thành sách thời xưa → quyển sổ; 注册 = ghi tên vào sổ → đăng ký; 手册 = sổ tay.",
    "cf": "再 zài (lại) — trên có nét ngang, giữa là 土; 冊 là dạng phồn thể",
    "w": "注册 / 手册 / 一册书"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Lần đầu dùng App này, trước tiên phải đăng ký, sau đó mới dùng được.",
    "answer": "第一次用这个App，首先要注册，然后才能使用。",
    "answerPy": "Dì yí cì yòng zhège App, shǒuxiān yào zhùcè, ránhòu cáinéng shǐyòng.",
    "note": "Ôn 首先……然后…… (Bài 14 · điểm 2).",
    "pair": "首先……，然后才……"
   },
   {
    "promptLang": "vi",
    "prompt": "Tôi vừa đăng ký xong thì nhận được một tin nhắn.",
    "answer": "我刚完成注册，就收到了一条短信。",
    "answerPy": "Wǒ gāng wánchéng zhùcè, jiù shōudào le yì tiáo duǎnxìn.",
    "note": "Ôn 刚……就…… (HSK 3).",
    "pair": "刚……，就……"
   }
  ]
 },
 {
  "n": 8,
  "zh": "费用",
  "py": "fèiyong",
  "pos": "Danh từ",
  "vn": "chi phí, phí",
  "hv": "phí dụng",
  "em": "💰",
  "lesson": 1,
  "explain": [
   "Khoản tiền phải chi cho một việc (đi lại, học tập, du lịch, dịch vụ). Trang trọng hơn 钱. Sách ghi 用 đọc nhẹ: fèiyong."
  ],
  "usage": "费用标准 (mức phí) · 支付费用 · 旅行的费用 · 费用很高 / 不高.",
  "collo": [
   "费用标准",
   "支付费用",
   "旅行费用",
   "学习费用"
  ],
  "colloFull": [
   {
    "zh": "费用标准",
    "py": "Fèiyong biāozhǔn",
    "vn": "mức phí"
   },
   {
    "zh": "支付费用",
    "py": "Zhīfù fèiyong",
    "vn": "thanh toán chi phí"
   },
   {
    "zh": "旅行费用",
    "py": "Lǚxíng fèiyong",
    "vn": "chi phí du lịch"
   },
   {
    "zh": "学习费用",
    "py": "Xuéxí fèiyong",
    "vn": "chi phí học tập"
   }
  ],
  "patterns": [
   {
    "s": "支付 + 费用",
    "m": "thanh toán chi phí"
   },
   {
    "s": "……的费用 + 是 / 要 + số tiền",
    "m": "chi phí … là bao nhiêu"
   }
  ],
  "ex_zh": "怎么使用、费用标准什么的App上都有说明。",
  "ex_py": "Zěnme shǐyòng, fèiyong biāozhǔn shénme de App shàng dōu yǒu shuōmíng.",
  "ex_vn": "Cách sử dụng, mức phí các thứ thì trên App đều có hướng dẫn.",
  "exList": [
   {
    "zh": "怎么使用、费用标准什么的App上都有说明。",
    "py": "Zěnme shǐyòng, fèiyong biāozhǔn shénme de App shàng dōu yǒu shuōmíng.",
    "vn": "Cách sử dụng, mức phí các thứ thì trên App đều có hướng dẫn."
   },
   {
    "zh": "这次旅行的费用到底是多少？咱们还是一起算一下吧。",
    "py": "Zhè cì lǚxíng de fèiyong dàodǐ shì duōshao? Zánmen háishi yìqǐ suàn yíxià ba.",
    "vn": "Rốt cuộc chi phí chuyến du lịch này là bao nhiêu? Chúng ta cùng tính thử đi."
   }
  ],
  "hanzi": [
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
    "prompt": "Chi phí du lịch tốt nghiệp do mỗi người tự trả.",
    "answer": "毕业旅行的费用由每个人自己支付。",
    "answerPy": "Bìyè lǚxíng de fèiyong yóu měi gè rén zìjǐ zhīfù.",
    "note": "Ôn 由 (Bài 15 · điểm 2).",
    "pair": "……由……支付"
   },
   {
    "promptLang": "vi",
    "prompt": "Chi phí không cao lắm, hơn nữa đi lại cũng rất tiện.",
    "answer": "费用不太高，再说交通也很方便。",
    "answerPy": "Fèiyong bú tài gāo, Zàishuō jiāotōng yě hěn fāngbiàn.",
    "note": "Ôn 再说 (Bài 4 · điểm 2).",
    "pair": "……，再说……"
   }
  ]
 },
 {
  "n": 9,
  "zh": "说明",
  "py": "shuōmíng",
  "pos": "Danh từ / Động từ",
  "vn": "(bản) hướng dẫn; giải thích, nói rõ",
  "hv": "thuyết minh",
  "em": "📄",
  "lesson": 1,
  "explain": [
   "Danh từ: lời / bản hướng dẫn (使用说明 = hướng dẫn sử dụng). Động từ: giải thích, nói rõ (说明原因, 说明一下)."
  ],
  "usage": "使用说明 · 有说明 · 按说明做 · 说明原因 / 说明情况 · 给 / 向 + ai + 说明一下.",
  "collo": [
   "使用说明",
   "按说明做",
   "说明原因",
   "说明情况"
  ],
  "colloFull": [
   {
    "zh": "使用说明",
    "py": "Shǐyòng shuōmíng",
    "vn": "hướng dẫn sử dụng"
   },
   {
    "zh": "按说明做",
    "py": "Àn shuōmíng zuò",
    "vn": "làm theo hướng dẫn"
   },
   {
    "zh": "说明原因",
    "py": "Shuōmíng yuányīn",
    "vn": "giải thích lý do"
   },
   {
    "zh": "说明情况",
    "py": "Shuōmíng qíngkuàng",
    "vn": "trình bày tình hình"
   }
  ],
  "patterns": [
   {
    "s": "按 + 说明 + V",
    "m": "làm theo hướng dẫn"
   },
   {
    "s": "向 / 给 + ai + 说明 + việc",
    "m": "giải thích việc gì cho ai"
   }
  ],
  "ex_zh": "怎么使用、费用标准什么的App上都有说明。",
  "ex_py": "Zěnme shǐyòng, fèiyong biāozhǔn shénme de App shàng dōu yǒu shuōmíng.",
  "ex_vn": "Cách sử dụng, mức phí các thứ thì trên App đều có hướng dẫn.",
  "exList": [
   {
    "zh": "怎么使用、费用标准什么的App上都有说明。",
    "py": "Zěnme shǐyòng, fèiyong biāozhǔn shénme de App shàng dōu yǒu shuōmíng.",
    "vn": "Cách sử dụng, mức phí các thứ thì trên App đều có hướng dẫn."
   },
   {
    "zh": "你从手机上打开使用说明，按说明一步一步做就行了。",
    "py": "Nǐ cóng shǒujī shàng dǎkāi shǐyòng shuōmíng, àn shuōmíng yí bù yi bù zuò jiù xíng le.",
    "vn": "Bạn mở hướng dẫn sử dụng trên điện thoại, cứ làm theo hướng dẫn từng bước là được."
   }
  ],
  "hanzi": [
   {
    "c": "说",
    "p": "shuō",
    "type": "左右结构 · Trái-phải (giản thể)",
    "st": 9,
    "ord": "讠 (ngôn) trái → 兑 (đoài) phải",
    "rad": "讠 (ngôn – lời nói)",
    "mean": "nói, kể",
    "tip": "Bộ lời nói 讠 (kể chuyện) + 兑(biểu âm) → KỂ LẠI câu chuyện, kết hợp 小(nhỏ, vụn vặt) thành 小说 = TIỂU THUYẾT (chuyện kể).",
    "cf": "脱 (tuō – \"cởi bỏ\", bộ 月\")",
    "w": "小说 / 说话 / 小说家"
   },
   {
    "c": "明",
    "p": "míng",
    "type": "左右结构 · Trái-phải",
    "st": 8,
    "ord": "日 (nhật) trái → 月 (nguyệt) phải",
    "rad": "日 (nhật – mặt trời)",
    "mean": "sáng tỏ",
    "tip": "Bộ mặt trời 日 + mặt trăng 月 (hai nguồn sáng) → SÁNG TỎ, kết hợp 说(nói) thành 说明 = NÓI RÕ, GIẢI THÍCH.",
    "cf": "朋 (péng – \"bạn\", hai chữ 月\")",
    "w": "说明 / 明白 / 证明"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Bạn đến muộn thì phải giải thích lý do với thầy giáo.",
    "answer": "你迟到了，就要向老师说明原因。",
    "answerPy": "Nǐ chídào le, jiù yào xiàng lǎoshī shuōmíng yuányīn.",
    "note": "Từ mới 原因 (bài này).",
    "pair": "向 + ai + 说明原因"
   },
   {
    "promptLang": "vi",
    "prompt": "Rốt cuộc cái kính AI này dùng thế nào? Hay là nhờ anh ấy hướng dẫn cho chúng ta đi.",
    "answer": "这个AI眼镜到底怎么用？还是请他给我们说明一下吧。",
    "answerPy": "Zhège AI yǎnjìng dàodǐ zěnme yòng? Háishi qǐng tā gěi wǒmen shuōmíng yíxià ba.",
    "note": "Ôn 还是 (đề nghị, HSK 3) + 到底 (điểm 3).",
    "pair": "到底……？还是请……说明一下吧"
   }
  ]
 },
 {
  "n": 10,
  "zh": "办事",
  "py": "bànshì",
  "pos": "Động từ",
  "vn": "làm việc, giải quyết công việc, làm thủ tục",
  "hv": "biện sự",
  "em": "🏢",
  "lesson": 1,
  "explain": [
   "Đi làm một việc cụ thể (ra ngân hàng, cơ quan làm thủ tục, đi giải quyết việc riêng). Động từ li hợp: 办点儿事, 办完事, 办了一件事."
  ],
  "usage": "出去办事 · 去银行办事 · 办完事 · 办事认真.",
  "collo": [
   "出去办事",
   "去银行办事",
   "办完事",
   "办事认真"
  ],
  "colloFull": [
   {
    "zh": "出去办事",
    "py": "Chūqu bànshì",
    "vn": "ra ngoài làm việc"
   },
   {
    "zh": "去银行办事",
    "py": "Qù yínháng bànshì",
    "vn": "ra ngân hàng làm thủ tục"
   },
   {
    "zh": "办完事",
    "py": "Bàn wán shì",
    "vn": "làm xong việc"
   },
   {
    "zh": "办事认真",
    "py": "Bànshì rènzhēn",
    "vn": "làm việc cẩn thận"
   }
  ],
  "patterns": [
   {
    "s": "去 + nơi chốn + 办事",
    "m": "đi đâu đó làm việc / làm thủ tục"
   },
   {
    "s": "办 + 点儿 / 完 + 事",
    "m": "động từ li hợp, xen thành phần ở giữa"
   }
  ],
  "ex_zh": "好啊！哪天我出去办事时也试试。",
  "ex_py": "Hǎo a! Nǎ tiān wǒ chūqu bànshì shí yě shìshi.",
  "ex_vn": "Hay đấy! Hôm nào ra ngoài làm việc tớ cũng thử xem.",
  "exList": [
   {
    "zh": "好啊！哪天我出去办事时也试试。",
    "py": "Hǎo a! Nǎ tiān wǒ chūqu bànshì shí yě shìshi.",
    "vn": "Hay đấy! Hôm nào ra ngoài làm việc tớ cũng thử xem."
   },
   {
    "zh": "我下午要去银行办点儿事，晚一点儿回来。",
    "py": "Wǒ xiàwǔ yào qù yínháng bàn diǎnr shì, wǎn yìdiǎnr huílai.",
    "vn": "Chiều tôi phải ra ngân hàng làm chút việc, về muộn một chút."
   }
  ],
  "hanzi": [
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
   },
   {
    "c": "事",
    "p": "shì",
    "type": "独体字 · Chữ đơn",
    "st": 8,
    "ord": "nét liền",
    "rad": "亅 (quyết)",
    "mean": "việc, sự việc",
    "tip": "Chữ tượng hình mô phỏng tay cầm dụng cụ làm việc → nghĩa CÔNG VIỆC, SỰ VIỆC; 同(cùng)+事(việc) = người cùng làm việc.",
    "cf": "吏 (lì – \"quan lại\", gần giống phần trên\")",
    "w": "同事 / 事情 / 没事"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Anh ấy làm việc rất cẩn thận, giao việc cho anh ấy tôi rất yên tâm.",
    "answer": "他办事很认真，把事情交给他，我很放心。",
    "answerPy": "Tā bànshì hěn rènzhēn, bǎ shìqing jiāogěi tā, wǒ hěn fàngxīn.",
    "note": "Ôn câu chữ 把 (Bài 15–16).",
    "pair": "把……交给……"
   },
   {
    "promptLang": "vi",
    "prompt": "Tôi làm xong việc là về ngay, bạn không cần đợi tôi.",
    "answer": "我办完事就回来，你不必等我。",
    "answerPy": "Wǒ bàn wán shì jiù huílai, nǐ búbì děng wǒ.",
    "note": "Từ mới 不必 (bài này).",
    "pair": "办完事就……"
   }
  ]
 },
 {
  "n": 11,
  "zh": "差点儿",
  "py": "chàdiǎnr",
  "pos": "Phó từ",
  "vn": "suýt nữa, suýt",
  "hv": "sai điểm nhi",
  "em": "😅",
  "lesson": 2,
  "explain": [
   "Suýt nữa: sự việc đã đến rất gần nhưng cuối cùng không xảy ra. Việc KHÔNG mong muốn: 差点儿 + V (差点儿忘了, 差点儿迟到) = suýt … may mà không.",
   "Việc MONG MUỐN: 差点儿没 + V = suýt không làm được, may mà vẫn làm được: 差点儿没赶上飞机 = suýt lỡ máy bay (cuối cùng vẫn kịp)."
  ],
  "usage": "差点儿 + V (+了) · 差点儿没 + V · 差点儿忘了 / 差点儿迟到 / 差点儿没赶上.",
  "collo": [
   "差点儿忘了",
   "差点儿迟到",
   "差点儿没赶上",
   "差点儿哭了"
  ],
  "colloFull": [
   {
    "zh": "差点儿忘了",
    "py": "Chàdiǎnr wàng le",
    "vn": "suýt quên"
   },
   {
    "zh": "差点儿迟到",
    "py": "Chàdiǎnr chídào",
    "vn": "suýt muộn"
   },
   {
    "zh": "差点儿没赶上",
    "py": "Chàdiǎnr méi gǎnshang",
    "vn": "suýt không kịp"
   },
   {
    "zh": "差点儿哭了",
    "py": "Chàdiǎnr kū le",
    "vn": "suýt khóc"
   }
  ],
  "patterns": [
   {
    "s": "差点儿 + V (việc không mong muốn)",
    "m": "suýt …, may mà không"
   },
   {
    "s": "差点儿没 + V (việc mong muốn)",
    "m": "suýt không …, may mà vẫn làm được"
   }
  ],
  "ex_zh": "差点儿忘了，我给你们看个短视频。",
  "ex_py": "Chàdiǎnr wàng le, wǒ gěi nǐmen kàn gè duǎn shìpín.",
  "ex_vn": "Suýt nữa thì quên, tớ cho các cậu xem một video ngắn.",
  "exList": [
   {
    "zh": "差点儿忘了，我给你们看个短视频。",
    "py": "Chàdiǎnr wàng le, wǒ gěi nǐmen kàn gè duǎn shìpín.",
    "vn": "Suýt nữa thì quên, tớ cho các cậu xem một video ngắn."
   },
   {
    "zh": "由于早上起晚了，他们差点儿没赶上飞机。",
    "py": "Yóuyú zǎoshang qǐwǎn le, tāmen chàdiǎnr méi gǎnshang fēijī.",
    "vn": "Vì sáng dậy muộn, họ suýt nữa thì lỡ máy bay."
   }
  ],
  "hanzi": [
   {
    "c": "差",
    "p": "chà",
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
    "c": "儿",
    "p": "ér",
    "type": "独体字 · Chữ đơn",
    "st": 2,
    "ord": "丿→乚 (hai nét: phẩy và nét cong móc)",
    "rad": "儿 (nhân – người, dạng chân đứng, tự thành bộ)",
    "mean": "con, nhi (đứa trẻ); hậu tố tạo âm uốn lưỡi chỉ địa điểm",
    "tip": "Hình đôi CHÂN của một đứa trẻ đang đứng → TRẺ EM (儿子, 女儿). Đứng cuối từ thì đọc nhẹ thành âm uốn lưỡi -r: 一会儿 (yíhuìr), 男孩儿 (nánháir).",
    "cf": "几 (jǐ – \"mấy, bao nhiêu\", hình dạng gần giống)",
    "w": "小孩儿 / 这儿 / 那儿"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Đường tắc quá, tôi suýt nữa thì muộn.",
    "answer": "路上太堵了，我差点儿迟到了。",
    "answerPy": "Lùshang tài dǔ le, wǒ chàdiǎnr chídào le.",
    "note": "Ôn 太……了 (HSK 2).",
    "pair": "差点儿 + V + 了"
   },
   {
    "promptLang": "vi",
    "prompt": "Ga tàu điện ngầm có quá nhiều lối ra, tôi suýt đi nhầm.",
    "answer": "地铁站的出口太多了，我差点儿走错了。",
    "answerPy": "Dìtiězhàn de chūkǒu tài duō le, wǒ chàdiǎnr zǒucuò le.",
    "note": "Từ mới 出口 (bài này).",
    "pair": "差点儿 + V错了"
   }
  ]
 },
 {
  "n": 12,
  "zh": "拍",
  "py": "pāi",
  "pos": "Động từ",
  "vn": "chụp (ảnh), quay (phim, video)",
  "hv": "phách",
  "em": "🎬",
  "lesson": 2,
  "explain": [
   "Chụp ảnh, quay phim, quay video: 拍照 / 拍照片 / 拍视频 / 拍电影. (Nghĩa gốc: vỗ, đập nhẹ — 拍手 = vỗ tay.)"
  ],
  "usage": "拍照片 · 拍视频 · 拍电影 · 用手机拍.",
  "collo": [
   "拍照",
   "拍视频",
   "拍电影",
   "拍手"
  ],
  "colloFull": [
   {
    "zh": "拍照",
    "py": "Pāizhào",
    "vn": "chụp ảnh"
   },
   {
    "zh": "拍视频",
    "py": "Pāi shìpín",
    "vn": "quay video"
   },
   {
    "zh": "拍电影",
    "py": "Pāi diànyǐng",
    "vn": "quay phim"
   },
   {
    "zh": "拍手",
    "py": "Pāi shǒu",
    "vn": "vỗ tay"
   }
  ],
  "patterns": [
   {
    "s": "拍 + 照片 / 视频 / 电影",
    "m": "chụp / quay"
   },
   {
    "s": "用 + công cụ + 拍",
    "m": "dùng gì để quay: 用手机拍"
   }
  ],
  "ex_zh": "啊？你们拍的？真不错！",
  "ex_py": "A? Nǐmen pāi de? Zhēn búcuò!",
  "ex_vn": "Hả? Các cậu quay à? Hay thật đấy!",
  "exList": [
   {
    "zh": "啊？你们拍的？真不错！",
    "py": "A? Nǐmen pāi de? Zhēn búcuò!",
    "vn": "Hả? Các cậu quay à? Hay thật đấy!"
   },
   {
    "zh": "这张照片是用手机拍的，效果特别好。",
    "py": "Zhè zhāng zhàopiàn shì yòng shǒujī pāi de, xiàoguǒ tèbié hǎo.",
    "vn": "Bức ảnh này chụp bằng điện thoại, hiệu quả rất tốt."
   }
  ],
  "hanzi": [
   {
    "c": "拍",
    "p": "pāi",
    "type": "形声字 · Chữ hình thanh",
    "st": 8,
    "ord": "扌 → 白",
    "rad": "扌 (thủ – tay)",
    "mean": "vỗ, đập; chụp",
    "tip": "扌 (tay) + 白 (chỉ âm): dùng tay vỗ, bấm → 拍照 = bấm máy chụp ảnh.",
    "cf": "怕 pà (sợ) — bên trái là 忄",
    "w": "拍照 / 拍手"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Video ngắn này là chúng tôi dùng điện thoại quay đấy.",
    "answer": "这个短视频是我们用手机拍的。",
    "answerPy": "Zhège duǎn shìpín shì wǒmen yòng shǒujī pāi de.",
    "note": "Ôn 是……的 nhấn mạnh cách thức (HSK 2–3).",
    "pair": "是 + 用……拍 + 的"
   },
   {
    "promptLang": "vi",
    "prompt": "Ảnh tôi chụp bị bạn tôi đăng lên mạng rồi.",
    "answer": "我拍的照片让朋友放到网上了。",
    "answerPy": "Wǒ pāi de zhàopiàn ràng péngyou fàngdào wǎngshang le.",
    "note": "Câu bị động 让 (điểm 2 của bài này).",
    "pair": "……让 + người + 放到……上了"
   }
  ]
 },
 {
  "n": 13,
  "zh": "各个",
  "py": "gègè",
  "pos": "Đại từ / Phó từ",
  "vn": "các, mọi (từng cái); lần lượt từng cái",
  "hv": "các cá",
  "em": "👥",
  "lesson": 2,
  "explain": [
   "Đại từ: các, mọi — nhấn mạnh từng cái trong cả tổng thể: 各个小组, 各个方面, 各个国家. Phó từ: lần lượt từng cái một (ít dùng hơn)."
  ],
  "usage": "各个 + N (各个小组 / 各个国家 / 各个方面) — gần nghĩa 每个.",
  "collo": [
   "各个小组",
   "各个国家",
   "各个方面",
   "各个部门"
  ],
  "colloFull": [
   {
    "zh": "各个小组",
    "py": "Gègè xiǎozǔ",
    "vn": "các nhóm"
   },
   {
    "zh": "各个国家",
    "py": "Gègè guójiā",
    "vn": "các nước"
   },
   {
    "zh": "各个方面",
    "py": "Gègè fāngmiàn",
    "vn": "mọi phương diện"
   },
   {
    "zh": "各个部门",
    "py": "Gègè bùmén",
    "vn": "các phòng ban"
   }
  ],
  "patterns": [
   {
    "s": "各个 + N",
    "m": "các / mọi … (từng cái)"
   },
   {
    "s": "各个 ≈ 每个",
    "m": "各个 nhấn mạnh toàn bộ nhiều cái; 每个 nhấn mạnh từng cái riêng lẻ"
   }
  ],
  "ex_zh": "前段时间老师留了个作业，叫各个小组拍个短视频，介绍中国美食。",
  "ex_py": "Qián duàn shíjiān lǎoshī liú le gè zuòyè, jiào gègè xiǎozǔ pāi gè duǎn shìpín, jièshào Zhōngguó měishí.",
  "ex_vn": "Thời gian trước cô giáo giao một bài tập, bảo các nhóm quay một video ngắn giới thiệu ẩm thực Trung Quốc.",
  "exList": [
   {
    "zh": "前段时间老师留了个作业，叫各个小组拍个短视频，介绍中国美食。",
    "py": "Qián duàn shíjiān lǎoshī liú le gè zuòyè, jiào gègè xiǎozǔ pāi gè duǎn shìpín, jièshào Zhōngguó měishí.",
    "vn": "Thời gian trước cô giáo giao một bài tập, bảo các nhóm quay một video ngắn giới thiệu ẩm thực Trung Quốc."
   },
   {
    "zh": "我们班的同学来自世界各个国家。",
    "py": "Wǒmen bān de tóngxué láizì shìjiè gègè guójiā.",
    "vn": "Các bạn lớp tôi đến từ khắp các nước trên thế giới."
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
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Thầy giáo bảo các nhóm mỗi nhóm thảo luận một vấn đề.",
    "answer": "老师叫各个小组讨论一个问题。",
    "answerPy": "Lǎoshī jiào gègè xiǎozǔ tǎolùn yí gè wèntí.",
    "note": "叫 sai khiến (phân biệt với 叫 bị động – điểm 2).",
    "pair": "叫 + 各个小组 + V"
   },
   {
    "promptLang": "vi",
    "prompt": "Trên mạng có thể tìm được tài liệu học tập về mọi phương diện.",
    "answer": "在网上可以找到各个方面的学习资料。",
    "answerPy": "Zài wǎngshang kěyǐ zhǎodào gègè fāngmiàn de xuéxí zīliào.",
    "note": "Ôn từ 资料 (Bài 11) và 在……方面 (Bài 7 · điểm 1).",
    "pair": "各个方面的 + N"
   }
  ]
 },
 {
  "n": 14,
  "zh": "小组",
  "py": "xiǎozǔ",
  "pos": "Danh từ",
  "vn": "nhóm (nhỏ), tổ",
  "hv": "tiểu tổ",
  "em": "🧑‍🤝‍🧑",
  "lesson": 2,
  "explain": [
   "Nhóm nhỏ trong lớp học, công ty, tổ chức để cùng làm việc, học tập, thảo luận."
  ],
  "usage": "分成小组 · 小组讨论 · 学习小组 · 小组作业 · 我们小组.",
  "collo": [
   "分成小组",
   "小组讨论",
   "学习小组",
   "小组作业"
  ],
  "colloFull": [
   {
    "zh": "分成小组",
    "py": "Fēnchéng xiǎozǔ",
    "vn": "chia nhóm"
   },
   {
    "zh": "小组讨论",
    "py": "Xiǎozǔ tǎolùn",
    "vn": "thảo luận nhóm"
   },
   {
    "zh": "学习小组",
    "py": "Xuéxí xiǎozǔ",
    "vn": "nhóm học tập"
   },
   {
    "zh": "小组作业",
    "py": "Xiǎozǔ zuòyè",
    "vn": "bài tập nhóm"
   }
  ],
  "patterns": [
   {
    "s": "分成 + số + 个小组",
    "m": "chia thành mấy nhóm"
   },
   {
    "s": "我们 / 他们 + 小组",
    "m": "nhóm chúng tôi / nhóm của họ (không cần 的)"
   }
  ],
  "ex_zh": "我们小组讨论后决定，由AI小语演厨师，做出中国各地的著名小吃。",
  "ex_py": "Wǒmen xiǎozǔ tǎolùn hòu juédìng, yóu AI Xiǎoyǔ yǎn chúshī, zuòchū Zhōngguó gèdì de zhùmíng xiǎochī.",
  "ex_vn": "Nhóm tớ thảo luận xong quyết định để AI Tiểu Ngữ đóng vai đầu bếp, làm ra những món ăn vặt nổi tiếng của các vùng Trung Quốc.",
  "exList": [
   {
    "zh": "我们小组讨论后决定，由AI小语演厨师，做出中国各地的著名小吃。",
    "py": "Wǒmen xiǎozǔ tǎolùn hòu juédìng, yóu AI Xiǎoyǔ yǎn chúshī, zuòchū Zhōngguó gèdì de zhùmíng xiǎochī.",
    "vn": "Nhóm tớ thảo luận xong quyết định để AI Tiểu Ngữ đóng vai đầu bếp, làm ra những món ăn vặt nổi tiếng của các vùng Trung Quốc."
   },
   {
    "zh": "老师让我们分成几个小组讨论。",
    "py": "Lǎoshī ràng wǒmen fēnchéng jǐ gè xiǎozǔ tǎolùn.",
    "vn": "Cô giáo cho chúng tôi chia thành mấy nhóm để thảo luận."
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
    "c": "组",
    "p": "zǔ",
    "type": "形声字 · Chữ hình thanh",
    "st": 8,
    "ord": "纟 → 且",
    "rad": "纟 (mịch – sợi tơ)",
    "mean": "tổ, nhóm; tổ chức, kết hợp",
    "tip": "Sợi tơ (纟) + 且 (qiě, gợi âm zǔ): những sợi tơ được bện lại với nhau → hợp thành nhóm → 小组 (nhóm nhỏ), 组成 (hợp thành), 组织 (tổ chức).",
    "cf": "租 zū (thuê) — bên trái là 禾; 祖 zǔ (tổ tiên) — bên trái là 礻",
    "w": "小组 / 组织 / 组成"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Mỗi nhóm ba đến bốn người, thảo luận xong do một người báo cáo.",
    "answer": "三至四人一个小组，讨论后由一人报告。",
    "answerPy": "Sān zhì sì rén yí gè xiǎozǔ, tǎolùn hòu yóu yì rén bàogào.",
    "note": "Ôn 由 (Bài 15 · điểm 2).",
    "pair": "由 + một người + 报告"
   },
   {
    "promptLang": "vi",
    "prompt": "Nhóm chúng tôi không phải đang chơi, mà là đang làm bài tập nhóm.",
    "answer": "我们小组不是在玩儿，而是在做小组作业。",
    "answerPy": "Wǒmen xiǎozǔ bú shì zài wánr, érshì zài zuò xiǎozǔ zuòyè.",
    "note": "Ôn 不是……而是…… (Bài 11 · điểm 3).",
    "pair": "不是……，而是……"
   }
  ]
 },
 {
  "n": 15,
  "zh": "讨论",
  "py": "tǎolùn",
  "pos": "Động từ",
  "vn": "thảo luận",
  "hv": "thảo luận",
  "em": "💬",
  "lesson": 2,
  "explain": [
   "Cùng nhau trao đổi, bàn bạc ý kiến về một vấn đề."
  ],
  "usage": "讨论 + vấn đề · 讨论一下 · 讨论后决定 · 和 / 跟 + ai + 讨论.",
  "collo": [
   "讨论问题",
   "小组讨论",
   "讨论一下",
   "讨论后决定"
  ],
  "colloFull": [
   {
    "zh": "讨论问题",
    "py": "Tǎolùn wèntí",
    "vn": "thảo luận vấn đề"
   },
   {
    "zh": "小组讨论",
    "py": "Xiǎozǔ tǎolùn",
    "vn": "thảo luận nhóm"
   },
   {
    "zh": "讨论一下",
    "py": "Tǎolùn yíxià",
    "vn": "thảo luận một chút"
   },
   {
    "zh": "讨论后决定",
    "py": "Tǎolùn hòu juédìng",
    "vn": "thảo luận xong quyết định"
   }
  ],
  "patterns": [
   {
    "s": "讨论 + 一下 + vấn đề",
    "m": "bàn thử về …"
   },
   {
    "s": "和 / 跟 + ai + 讨论 + ……",
    "m": "thảo luận với ai"
   }
  ],
  "ex_zh": "我们小组讨论后决定，由AI小语演厨师，做出中国各地的著名小吃。",
  "ex_py": "Wǒmen xiǎozǔ tǎolùn hòu juédìng, yóu AI Xiǎoyǔ yǎn chúshī, zuòchū Zhōngguó gèdì de zhùmíng xiǎochī.",
  "ex_vn": "Nhóm tớ thảo luận xong quyết định để AI Tiểu Ngữ đóng vai đầu bếp, làm ra những món ăn vặt nổi tiếng của các vùng Trung Quốc.",
  "exList": [
   {
    "zh": "我们小组讨论后决定，由AI小语演厨师，做出中国各地的著名小吃。",
    "py": "Wǒmen xiǎozǔ tǎolùn hòu juédìng, yóu AI Xiǎoyǔ yǎn chúshī, zuòchū Zhōngguó gèdì de zhùmíng xiǎochī.",
    "vn": "Nhóm tớ thảo luận xong quyết định để AI Tiểu Ngữ đóng vai đầu bếp, làm ra những món ăn vặt nổi tiếng của các vùng Trung Quốc."
   },
   {
    "zh": "我们周五开个会，讨论一下怎么解决这个问题。",
    "py": "Wǒmen zhōuwǔ kāi gè huì, tǎolùn yíxià zěnme jiějué zhège wèntí.",
    "vn": "Thứ Sáu chúng ta họp một buổi, thảo luận xem giải quyết vấn đề này thế nào."
   }
  ],
  "hanzi": [
   {
    "c": "讨",
    "p": "tǎo",
    "type": "左右结构 · Trái-phải (giản thể)",
    "st": 5,
    "ord": "讠 (ngôn) trái → 寸 phải",
    "rad": "讠 (ngôn)",
    "mean": "bàn, đòi",
    "tip": "Bộ lời nói 讠 + 寸(tấc, quy tắc) → BÀN theo lý lẽ, kết hợp 论 thành 讨论 = THẢO LUẬN (ôn lại 无论 Bài 11).",
    "cf": "付 (fù – \"trả\", bộ 亻)",
    "w": "讨论 / 讨厌 / 无论"
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
    "prompt": "Chúng ta thảo luận xem rốt cuộc nên quay video gì đi.",
    "answer": "我们讨论一下到底拍什么视频吧。",
    "answerPy": "Wǒmen tǎolùn yíxià dàodǐ pāi shénme shìpín ba.",
    "note": "到底 (điểm 3 của bài này).",
    "pair": "讨论一下 + 到底……"
   },
   {
    "promptLang": "vi",
    "prompt": "Cùng với việc học trực tuyến ngày càng phổ biến, nhiều lớp đều thảo luận trên mạng.",
    "answer": "随着网上学习越来越流行，很多班都在网上讨论。",
    "answerPy": "Suízhe wǎngshang xuéxí yuèláiyuè liúxíng, hěn duō bān dōu zài wǎngshang tǎolùn.",
    "note": "Ôn 随着 (Bài 1 · điểm 3).",
    "pair": "随着……，……"
   }
  ]
 },
 {
  "n": 16,
  "zh": "演",
  "py": "yǎn",
  "pos": "Động từ",
  "vn": "đóng (vai), diễn",
  "hv": "diễn",
  "em": "🎭",
  "lesson": 2,
  "explain": [
   "Đóng vai, biểu diễn: 演 + vai (演厨师 = đóng vai đầu bếp), 演电影 (đóng phim). Liên hệ: 演员 (diễn viên), 表演 (biểu diễn)."
  ],
  "usage": "演 + vai · 演电影 · 演得很好 · 由 + ai + 演.",
  "collo": [
   "演厨师",
   "演电影",
   "演得很好",
   "演员"
  ],
  "colloFull": [
   {
    "zh": "演厨师",
    "py": "Yǎn chúshī",
    "vn": "đóng vai đầu bếp"
   },
   {
    "zh": "演电影",
    "py": "Yǎn diànyǐng",
    "vn": "đóng phim"
   },
   {
    "zh": "演得很好",
    "py": "Yǎn de hěn hǎo",
    "vn": "diễn rất hay"
   },
   {
    "zh": "演员",
    "py": "Yǎnyuán",
    "vn": "diễn viên"
   }
  ],
  "patterns": [
   {
    "s": "由 + ai + 演 + vai",
    "m": "do ai đóng vai gì (ôn 由 – Bài 15)"
   },
   {
    "s": "演 + 得 + Adj",
    "m": "diễn thế nào: 演得很好"
   }
  ],
  "ex_zh": "我们小组讨论后决定，由AI小语演厨师，做出中国各地的著名小吃。",
  "ex_py": "Wǒmen xiǎozǔ tǎolùn hòu juédìng, yóu AI Xiǎoyǔ yǎn chúshī, zuòchū Zhōngguó gèdì de zhùmíng xiǎochī.",
  "ex_vn": "Nhóm tớ thảo luận xong quyết định để AI Tiểu Ngữ đóng vai đầu bếp, làm ra những món ăn vặt nổi tiếng của các vùng Trung Quốc.",
  "exList": [
   {
    "zh": "我们小组讨论后决定，由AI小语演厨师，做出中国各地的著名小吃。",
    "py": "Wǒmen xiǎozǔ tǎolùn hòu juédìng, yóu AI Xiǎoyǔ yǎn chúshī, zuòchū Zhōngguó gèdì de zhùmíng xiǎochī.",
    "vn": "Nhóm tớ thảo luận xong quyết định để AI Tiểu Ngữ đóng vai đầu bếp, làm ra những món ăn vặt nổi tiếng của các vùng Trung Quốc."
   },
   {
    "zh": "她在这部电影里演一位老师。",
    "py": "Tā zài zhè bù diànyǐng lǐ yǎn yí wèi lǎoshī.",
    "vn": "Trong bộ phim này cô ấy đóng vai một cô giáo."
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
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Tiết mục này do học sinh lớp chúng tôi diễn.",
    "answer": "这个节目由我们班的学生演。",
    "answerPy": "Zhège jiémù yóu wǒmen bān de xuésheng yǎn.",
    "note": "Ôn 由 (Bài 15 · điểm 2).",
    "pair": "由 + ai + 演"
   },
   {
    "promptLang": "vi",
    "prompt": "Anh ấy diễn hay đến mức mọi người đều cảm động.",
    "answer": "他演得特别好，大家都被感动了。",
    "answerPy": "Tā yǎn de tèbié hǎo, dàjiā dōu bèi gǎndòng le.",
    "note": "Ôn bổ ngữ trạng thái V得 (HSK 2–3) + 被 (HSK 3).",
    "pair": "演得 + Adj"
   }
  ]
 },
 {
  "n": 17,
  "zh": "厨师",
  "py": "chúshī",
  "pos": "Danh từ",
  "vn": "đầu bếp",
  "hv": "trù sư",
  "em": "👨‍🍳",
  "lesson": 2,
  "explain": [
   "Người nấu ăn chuyên nghiệp (nhà hàng, khách sạn).",
   "⚠ Hán Việt “trù sư” — tiếng Việt nói “đầu bếp”; 师 chỉ người có nghề chuyên môn (老师, 律师 – Bài 11)."
  ],
  "usage": "当厨师 · 饭店的厨师 · 演厨师 · 一名 / 一位厨师.",
  "collo": [
   "当厨师",
   "饭店的厨师",
   "演厨师",
   "著名厨师"
  ],
  "colloFull": [
   {
    "zh": "当厨师",
    "py": "Dāng chúshī",
    "vn": "làm đầu bếp"
   },
   {
    "zh": "饭店的厨师",
    "py": "Fàndiàn de chúshī",
    "vn": "đầu bếp nhà hàng"
   },
   {
    "zh": "演厨师",
    "py": "Yǎn chúshī",
    "vn": "đóng vai đầu bếp"
   },
   {
    "zh": "著名厨师",
    "py": "Zhùmíng chúshī",
    "vn": "đầu bếp nổi tiếng"
   }
  ],
  "patterns": [
   {
    "s": "当 + 一名 + 厨师",
    "m": "làm nghề đầu bếp"
   },
   {
    "s": "……师",
    "m": "người làm nghề: 厨师, 老师, 律师"
   }
  ],
  "ex_zh": "我们小组讨论后决定，由AI小语演厨师，做出中国各地的著名小吃。",
  "ex_py": "Wǒmen xiǎozǔ tǎolùn hòu juédìng, yóu AI Xiǎoyǔ yǎn chúshī, zuòchū Zhōngguó gèdì de zhùmíng xiǎochī.",
  "ex_vn": "Nhóm tớ thảo luận xong quyết định để AI Tiểu Ngữ đóng vai đầu bếp, làm ra những món ăn vặt nổi tiếng của các vùng Trung Quốc.",
  "exList": [
   {
    "zh": "我们小组讨论后决定，由AI小语演厨师，做出中国各地的著名小吃。",
    "py": "Wǒmen xiǎozǔ tǎolùn hòu juédìng, yóu AI Xiǎoyǔ yǎn chúshī, zuòchū Zhōngguó gèdì de zhùmíng xiǎochī.",
    "vn": "Nhóm tớ thảo luận xong quyết định để AI Tiểu Ngữ đóng vai đầu bếp, làm ra những món ăn vặt nổi tiếng của các vùng Trung Quốc."
   },
   {
    "zh": "这家饭店的厨师做的菜又好看又好吃。",
    "py": "Zhè jiā fàndiàn de chúshī zuò de cài yòu hǎokàn yòu hǎochī.",
    "vn": "Món ăn đầu bếp nhà hàng này nấu vừa đẹp mắt vừa ngon."
   }
  ],
  "hanzi": [
   {
    "c": "厨",
    "p": "chú",
    "type": "半包围结构 · Nửa bao quanh",
    "st": 12,
    "ord": "厂 bao → 豆寸 trong",
    "rad": "厂 (hán)",
    "mean": "bếp",
    "tip": "Mái 厂 + 豆(đồ đựng) + 寸(tay) → nơi nấu nướng → BẾP. 厨房 = nhà bếp; 厨师 = đầu bếp.",
    "cf": "橱 (chú – tủ)",
    "w": "厨房 / 厨师"
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
    "prompt": "Ước mơ của anh trai tôi là làm một đầu bếp.",
    "answer": "我哥哥的理想是当一名厨师。",
    "answerPy": "Wǒ gēge de lǐxiǎng shì dāng yì míng chúshī.",
    "note": "当 = làm (nghề).",
    "pair": "当 + 一名 + 厨师"
   },
   {
    "promptLang": "vi",
    "prompt": "Món này do đầu bếp nổi tiếng nhất của nhà hàng làm.",
    "answer": "这道菜是由饭店最有名的厨师做的。",
    "answerPy": "Zhè dào cài shì yóu fàndiàn zuì yǒumíng de chúshī zuò de.",
    "note": "Ôn 由 (Bài 15 · điểm 2) + 是……的.",
    "pair": "是由……做的"
   }
  ]
 },
 {
  "n": 18,
  "zh": "各地",
  "py": "gèdì",
  "pos": "Danh từ",
  "vn": "các nơi, khắp nơi",
  "hv": "các địa",
  "em": "🗺️",
  "lesson": 2,
  "explain": [
   "Các địa phương, khắp các nơi: 中国各地, 世界各地, 全国各地."
  ],
  "usage": "中国各地 / 世界各地 / 全国各地 · 各地的 + N.",
  "collo": [
   "中国各地",
   "世界各地",
   "全国各地",
   "各地的小吃"
  ],
  "colloFull": [
   {
    "zh": "中国各地",
    "py": "Zhōngguó gèdì",
    "vn": "các nơi ở Trung Quốc"
   },
   {
    "zh": "世界各地",
    "py": "Shìjiè gèdì",
    "vn": "khắp nơi trên thế giới"
   },
   {
    "zh": "全国各地",
    "py": "Quánguó gèdì",
    "vn": "khắp cả nước"
   },
   {
    "zh": "各地的小吃",
    "py": "Gèdì de xiǎochī",
    "vn": "món ăn vặt các vùng"
   }
  ],
  "patterns": [
   {
    "s": "到 + ……各地 + 走一走、看一看",
    "m": "đi đây đi đó khắp nơi"
   },
   {
    "s": "来自 + 世界各地",
    "m": "đến từ khắp nơi trên thế giới"
   }
  ],
  "ex_zh": "我们小组讨论后决定，由AI小语演厨师，做出中国各地的著名小吃。",
  "ex_py": "Wǒmen xiǎozǔ tǎolùn hòu juédìng, yóu AI Xiǎoyǔ yǎn chúshī, zuòchū Zhōngguó gèdì de zhùmíng xiǎochī.",
  "ex_vn": "Nhóm tớ thảo luận xong quyết định để AI Tiểu Ngữ đóng vai đầu bếp, làm ra những món ăn vặt nổi tiếng của các vùng Trung Quốc.",
  "exList": [
   {
    "zh": "我们小组讨论后决定，由AI小语演厨师，做出中国各地的著名小吃。",
    "py": "Wǒmen xiǎozǔ tǎolùn hòu juédìng, yóu AI Xiǎoyǔ yǎn chúshī, zuòchū Zhōngguó gèdì de zhùmíng xiǎochī.",
    "vn": "Nhóm tớ thảo luận xong quyết định để AI Tiểu Ngữ đóng vai đầu bếp, làm ra những món ăn vặt nổi tiếng của các vùng Trung Quốc."
   },
   {
    "zh": "春节前，各地火车站都增加了服务人员，保证大家出行安全。",
    "py": "Chūnjié qián, gèdì huǒchēzhàn dōu zēngjiā le fúwù rényuán, bǎozhèng dàjiā chūxíng ānquán.",
    "vn": "Trước Tết, ga tàu hoả các nơi đều tăng thêm nhân viên phục vụ, bảo đảm mọi người đi lại an toàn."
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
    "prompt": "Học sinh của trường này đến từ khắp nơi trên thế giới.",
    "answer": "这个学校的学生来自世界各地。",
    "answerPy": "Zhège xuéxiào de xuésheng láizì shìjiè gèdì.",
    "note": "来自 = đến từ.",
    "pair": "来自 + 世界各地"
   },
   {
    "promptLang": "vi",
    "prompt": "Món ăn vặt của mỗi vùng đều có đặc điểm riêng.",
    "answer": "各地的小吃各有各的特点。",
    "answerPy": "Gèdì de xiǎochī gè yǒu gè de tèdiǎn.",
    "note": "Ôn 各×各的 (Bài 5 · điểm 3).",
    "pair": "各有各的 + N"
   }
  ]
 },
 {
  "n": 19,
  "zh": "著名",
  "py": "zhùmíng",
  "pos": "Tính từ",
  "vn": "nổi tiếng",
  "hv": "trứ danh",
  "em": "🌟",
  "lesson": 2,
  "explain": [
   "Nổi tiếng, có tiếng — trang trọng hơn 有名, thường làm định ngữ: 著名 + N (著名小吃, 著名景点, 著名作家). Khẩu ngữ hằng ngày hay nói 有名."
  ],
  "usage": "著名 + N · 著名的 + N · 非常著名.",
  "collo": [
   "著名小吃",
   "著名景点",
   "著名作家",
   "著名大学"
  ],
  "colloFull": [
   {
    "zh": "著名小吃",
    "py": "Zhùmíng xiǎochī",
    "vn": "món ăn vặt nổi tiếng"
   },
   {
    "zh": "著名景点",
    "py": "Zhùmíng jǐngdiǎn",
    "vn": "danh thắng nổi tiếng"
   },
   {
    "zh": "著名作家",
    "py": "Zhùmíng zuòjiā",
    "vn": "nhà văn nổi tiếng"
   },
   {
    "zh": "著名大学",
    "py": "Zhùmíng dàxué",
    "vn": "trường đại học nổi tiếng"
   }
  ],
  "patterns": [
   {
    "s": "著名 + N",
    "m": "… nổi tiếng (định ngữ, văn viết)"
   },
   {
    "s": "著名 ≈ 有名",
    "m": "著名 trang trọng; 有名 khẩu ngữ"
   }
  ],
  "ex_zh": "我们小组讨论后决定，由AI小语演厨师，做出中国各地的著名小吃。",
  "ex_py": "Wǒmen xiǎozǔ tǎolùn hòu juédìng, yóu AI Xiǎoyǔ yǎn chúshī, zuòchū Zhōngguó gèdì de zhùmíng xiǎochī.",
  "ex_vn": "Nhóm tớ thảo luận xong quyết định để AI Tiểu Ngữ đóng vai đầu bếp, làm ra những món ăn vặt nổi tiếng của các vùng Trung Quốc.",
  "exList": [
   {
    "zh": "我们小组讨论后决定，由AI小语演厨师，做出中国各地的著名小吃。",
    "py": "Wǒmen xiǎozǔ tǎolùn hòu juédìng, yóu AI Xiǎoyǔ yǎn chúshī, zuòchū Zhōngguó gèdì de zhùmíng xiǎochī.",
    "vn": "Nhóm tớ thảo luận xong quyết định để AI Tiểu Ngữ đóng vai đầu bếp, làm ra những món ăn vặt nổi tiếng của các vùng Trung Quốc."
   },
   {
    "zh": "北京有很多著名的景点，比如长城和故宫。",
    "py": "Běijīng yǒu hěn duō zhùmíng de jǐngdiǎn, bǐrú Chángchéng hé Gùgōng.",
    "vn": "Bắc Kinh có rất nhiều danh thắng nổi tiếng, ví dụ Vạn Lý Trường Thành và Cố Cung."
   }
  ],
  "hanzi": [
   {
    "c": "著",
    "p": "zhù",
    "type": "上下结构 · Trên-dưới",
    "st": 11,
    "ord": "艹 (thảo) trên → 者 dưới",
    "rad": "艹 (thảo – cỏ)",
    "mean": "nổi bật, trứ tác",
    "tip": "Bộ cỏ 艹 + 者(biểu âm) → nghĩa gốc là RÕ RÀNG, NỔI BẬT, kết hợp 名(tên) thành 著名 = TÊN TUỔI NỔI BẬT, NỔI TIẾNG.",
    "cf": "着 (zhe – trợ từ, chữ giản thể tách ra từ 著)",
    "w": "著名 / 著作 / 名著"
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
    "prompt": "Ông ấy không chỉ là nhà văn nổi tiếng mà cũng là giáo sư đại học.",
    "answer": "他不仅是著名作家，也是大学教授。",
    "answerPy": "Tā bùjǐn shì zhùmíng zuòjiā, yě shì dàxué jiàoshòu.",
    "note": "Ôn 不仅……也…… (Bài 3 · điểm 2) + 教授 (Bài 11).",
    "pair": "不仅是……，也是……"
   },
   {
    "promptLang": "vi",
    "prompt": "Tiểu Ngữ dẫn mọi người đi thăm các danh thắng nổi tiếng của Trung Quốc.",
    "answer": "小语带大家去看中国著名的景点。",
    "answerPy": "Xiǎoyǔ dài dàjiā qù kàn Zhōngguó zhùmíng de jǐngdiǎn.",
    "note": "Từ 景点 (danh thắng).",
    "pair": "著名的 + N"
   }
  ]
 },
 {
  "n": 20,
  "zh": "小吃",
  "py": "xiǎochī",
  "pos": "Danh từ",
  "vn": "món ăn vặt, đồ ăn nhẹ (đặc sản bình dân)",
  "hv": "tiểu ngật",
  "em": "🥟",
  "lesson": 2,
  "explain": [
   "Món ăn vặt, đặc sản bình dân của một vùng (bánh bao, sủi cảo chiên, bánh rán…), thường bán ở quán nhỏ, phố ẩm thực. ⚠ Không phải “ăn ít”."
  ],
  "usage": "著名小吃 · 小吃街 · 北京小吃 · 地方小吃.",
  "collo": [
   "著名小吃",
   "小吃街",
   "北京小吃",
   "地方小吃"
  ],
  "colloFull": [
   {
    "zh": "著名小吃",
    "py": "Zhùmíng xiǎochī",
    "vn": "món ăn vặt nổi tiếng"
   },
   {
    "zh": "小吃街",
    "py": "Xiǎochījiē",
    "vn": "phố ăn vặt"
   },
   {
    "zh": "北京小吃",
    "py": "Běijīng xiǎochī",
    "vn": "món ăn vặt Bắc Kinh"
   },
   {
    "zh": "地方小吃",
    "py": "Dìfang xiǎochī",
    "vn": "món ăn vặt địa phương"
   }
  ],
  "patterns": [
   {
    "s": "地名 + 小吃",
    "m": "món ăn vặt của vùng nào"
   },
   {
    "s": "吃小吃",
    "m": "ăn đồ ăn vặt"
   }
  ],
  "ex_zh": "视频里，小语做的小吃丰富多样，看起来好吃极了。",
  "ex_py": "Shìpín lǐ, Xiǎoyǔ zuò de xiǎochī fēngfù duōyàng, kànqǐlai hǎochī jí le.",
  "ex_vn": "Trong video, các món ăn vặt Tiểu Ngữ làm phong phú đa dạng, trông ngon cực kỳ.",
  "exList": [
   {
    "zh": "视频里，小语做的小吃丰富多样，看起来好吃极了。",
    "py": "Shìpín lǐ, Xiǎoyǔ zuò de xiǎochī fēngfù duōyàng, kànqǐlai hǎochī jí le.",
    "vn": "Trong video, các món ăn vặt Tiểu Ngữ làm phong phú đa dạng, trông ngon cực kỳ."
   },
   {
    "zh": "这条小吃街有中国各地的著名小吃。",
    "py": "Zhè tiáo xiǎochījiē yǒu Zhōngguó gèdì de zhùmíng xiǎochī.",
    "vn": "Phố ăn vặt này có các món ăn vặt nổi tiếng của khắp nơi ở Trung Quốc."
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
    "c": "吃",
    "p": "chī",
    "type": "左右结构 · Trái-phải",
    "st": 6,
    "ord": "口 trái → 乞 phải",
    "rad": "口 (khẩu)",
    "mean": "ăn",
    "tip": "Miệng 口 + 乞 → ĂN. 小吃 = món ăn nhỏ; 吃惊 (Bài 13); 吃苦 (Bài 13).",
    "cf": "乞 (qǐ – xin)",
    "w": "小吃 / 吃惊 / 吃苦 / 好吃"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Món ăn vặt này trông ngon cực kỳ.",
    "answer": "这个小吃看起来好吃极了。",
    "answerPy": "Zhège xiǎochī kànqǐlai hǎochī jí le.",
    "note": "Ôn 看起来 (HSK 3) + ……极了.",
    "pair": "看起来 + Adj + 极了"
   },
   {
    "promptLang": "vi",
    "prompt": "Đến Trung Quốc, tôi nhất định phải nếm thử các món ăn vặt địa phương.",
    "answer": "到了中国，我说什么也得尝尝地方小吃。",
    "answerPy": "Dào le Zhōngguó, wǒ shuō shénme yě děi chángchang dìfang xiǎochī.",
    "note": "Ôn 说什么也得× (Bài 10 · điểm 1).",
    "pair": "说什么也得 + V"
   }
  ]
 },
 {
  "n": 21,
  "zh": "互联网",
  "py": "hùliánwǎng",
  "pos": "Danh từ",
  "vn": "mạng Internet",
  "hv": "hỗ liên võng",
  "em": "🌐",
  "lesson": 2,
  "explain": [
   "Mạng Internet (cách nói trang trọng); khẩu ngữ hay nói 网 / 网上. Hay làm định ngữ: 互联网医院, 互联网技术, 互联网公司."
  ],
  "usage": "放到互联网上 · 互联网技术 · 互联网医院 · 互联网公司.",
  "collo": [
   "放到互联网上",
   "互联网技术",
   "互联网医院",
   "互联网公司"
  ],
  "colloFull": [
   {
    "zh": "放到互联网上",
    "py": "Fàngdào hùliánwǎng shàng",
    "vn": "đăng lên mạng"
   },
   {
    "zh": "互联网技术",
    "py": "Hùliánwǎng jìshù",
    "vn": "công nghệ Internet"
   },
   {
    "zh": "互联网医院",
    "py": "Hùliánwǎng yīyuàn",
    "vn": "bệnh viện trực tuyến"
   },
   {
    "zh": "互联网公司",
    "py": "Hùliánwǎng gōngsī",
    "vn": "công ty Internet"
   }
  ],
  "patterns": [
   {
    "s": "放到 / 发到 + 互联网上",
    "m": "đăng lên mạng"
   },
   {
    "s": "互联网 + N",
    "m": "… trên nền Internet"
   }
  ],
  "ex_zh": "后来这个视频让我同学放到了互联网上，很多人都来点赞。",
  "ex_py": "Hòulái zhège shìpín ràng wǒ tóngxué fàngdào le hùliánwǎng shàng, hěn duō rén dōu lái diǎnzàn.",
  "ex_vn": "Sau đó video này được bạn cùng lớp tớ đăng lên mạng, rất nhiều người vào bấm thích.",
  "exList": [
   {
    "zh": "后来这个视频让我同学放到了互联网上，很多人都来点赞。",
    "py": "Hòulái zhège shìpín ràng wǒ tóngxué fàngdào le hùliánwǎng shàng, hěn duō rén dōu lái diǎnzàn.",
    "vn": "Sau đó video này được bạn cùng lớp tớ đăng lên mạng, rất nhiều người vào bấm thích."
   },
   {
    "zh": "互联网让我们的生活越来越方便，我们可以在网上购物，也可以和在外地的父母视频聊天儿。",
    "py": "Hùliánwǎng ràng wǒmen de shēnghuó yuèláiyuè fāngbiàn, wǒmen kěyǐ zài wǎngshang gòuwù, yě kěyǐ hé zài wàidì de fùmǔ shìpín liáotiānr.",
    "vn": "Internet làm cuộc sống của chúng ta ngày càng tiện lợi, ta có thể mua sắm trên mạng, cũng có thể gọi video trò chuyện với bố mẹ ở nơi xa."
   }
  ],
  "hanzi": [
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
   },
   {
    "c": "联",
    "p": "lián",
    "type": "左右结构 · Trái-phải (giản thể)",
    "st": 12,
    "ord": "耳 (nhĩ) trái → 关 phải",
    "rad": "耳 (nhĩ – tai)",
    "mean": "liên kết",
    "tip": "Bộ tai 耳 + 关 → NỐI LIỀN, kết hợp 互(lẫn nhau) + 网(mạng) thành 互联网 = INTERNET.",
    "cf": "耶 (yē – bộ 耳 + 阝)",
    "w": "互联网 / 联系 / 联合"
   },
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
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Cùng với sự phát triển của công nghệ Internet, cuộc sống của chúng ta ngày càng tiện lợi.",
    "answer": "随着互联网技术的发展，我们的生活越来越方便了。",
    "answerPy": "Suízhe hùliánwǎng jìshù de fāzhǎn, wǒmen de shēnghuó yuèláiyuè fāngbiàn le.",
    "note": "Ôn 随着 (Bài 1 · điểm 3).",
    "pair": "随着……的发展，……"
   },
   {
    "promptLang": "vi",
    "prompt": "Đối với người cao tuổi, Internet vừa tiện lợi vừa hơi khó dùng.",
    "answer": "对于老年人来说，互联网既方便又有点儿难用。",
    "answerPy": "Duìyú lǎoniánrén láishuō, hùliánwǎng jì fāngbiàn yòu yǒudiǎnr nán yòng.",
    "note": "Ôn 对于 (Bài 14 · điểm 4) + 既……又…… (Bài 4).",
    "pair": "对于……来说，……"
   }
  ]
 },
 {
  "n": 22,
  "zh": "点赞",
  "py": "diǎnzàn",
  "pos": "Động từ",
  "vn": "bấm thích (like); khen ngợi",
  "hv": "điểm tán",
  "em": "👍",
  "lesson": 2,
  "explain": [
   "Bấm nút “thích” (like) trên mạng; nghĩa mở rộng: khen ngợi, tán thưởng. Cấu trúc: 给 + ai / cái gì + 点赞. Động từ li hợp: 点了个赞, 点了很多赞."
  ],
  "usage": "给……点赞 · 来点赞 · 点个赞 · 点赞的人很多.",
  "collo": [
   "给……点赞",
   "来点赞",
   "点个赞",
   "点赞的人"
  ],
  "colloFull": [
   {
    "zh": "给……点赞",
    "py": "Gěi…… diǎnzàn",
    "vn": "bấm thích cho …"
   },
   {
    "zh": "来点赞",
    "py": "Lái diǎnzàn",
    "vn": "vào bấm thích"
   },
   {
    "zh": "点个赞",
    "py": "Diǎn gè zàn",
    "vn": "bấm một like"
   },
   {
    "zh": "点赞的人",
    "py": "Diǎnzàn de rén",
    "vn": "người bấm thích"
   }
  ],
  "patterns": [
   {
    "s": "给 + ai / cái gì + 点赞",
    "m": "bấm thích cho …"
   },
   {
    "s": "点 + 了个 + 赞",
    "m": "li hợp: xen thành phần ở giữa"
   }
  ],
  "ex_zh": "后来这个视频让我同学放到了互联网上，很多人都来点赞。",
  "ex_py": "Hòulái zhège shìpín ràng wǒ tóngxué fàngdào le hùliánwǎng shàng, hěn duō rén dōu lái diǎnzàn.",
  "ex_vn": "Sau đó video này được bạn cùng lớp tớ đăng lên mạng, rất nhiều người vào bấm thích.",
  "exList": [
   {
    "zh": "后来这个视频让我同学放到了互联网上，很多人都来点赞。",
    "py": "Hòulái zhège shìpín ràng wǒ tóngxué fàngdào le hùliánwǎng shàng, hěn duō rén dōu lái diǎnzàn.",
    "vn": "Sau đó video này được bạn cùng lớp tớ đăng lên mạng, rất nhiều người vào bấm thích."
   },
   {
    "zh": "大家都给他做的小吃视频点了赞。",
    "py": "Dàjiā dōu gěi tā zuò de xiǎochī shìpín diǎn le zàn.",
    "vn": "Mọi người đều bấm thích video món ăn vặt anh ấy làm."
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
    "c": "赞",
    "p": "zàn",
    "type": "形声字 · Chữ hình thanh",
    "st": 16,
    "ord": "先 → 先 → 贝",
    "rad": "贝 (bối – tiền, của quý)",
    "mean": "khen ngợi, tán thành; (点赞) bấm thích",
    "tip": "Hai chữ 先 (đi trước) đứng cạnh nhau trên 贝 (vật quý): người đi trước mang lễ vật đến chúc mừng, khen ngợi → 赞美 (ca ngợi), 赞成 (tán thành), 点赞 (bấm thích).",
    "cf": "费 fèi (phí) — trên là 弗; 质 zhì (chất) — trên là 斤",
    "w": "点赞 / 赞成 / 称赞"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Rốt cuộc video này có bao nhiêu người bấm thích?",
    "answer": "这个视频到底有多少人点赞？",
    "answerPy": "Zhège shìpín dàodǐ yǒu duōshao rén diǎnzàn?",
    "note": "到底 (điểm 3 của bài này).",
    "pair": "到底 + 有多少……"
   },
   {
    "promptLang": "vi",
    "prompt": "Cho dù không quen biết, nhiều người vẫn bấm thích cho anh ấy.",
    "answer": "就是不认识，很多人也给他点赞。",
    "answerPy": "Jiùshì bú rènshi, hěn duō rén yě gěi tā diǎnzàn.",
    "note": "Ôn 就是……也…… (Bài 11 · điểm 2).",
    "pair": "就是……，……也……"
   }
  ]
 },
 {
  "n": 23,
  "zh": "AI眼镜",
  "py": "AI yǎnjìng",
  "pos": "Danh từ",
  "vn": "kính AI, kính thông minh",
  "hv": "AI nhãn kính",
  "em": "🕶️",
  "lesson": 3,
  "explain": [
   "Kính thông minh có trí tuệ nhân tạo (AI): chụp ảnh, dịch, chỉ đường, trả lời câu hỏi bằng giọng nói. 眼镜 = kính đeo mắt; lượng từ là 副 (一副眼镜)."
  ],
  "usage": "戴AI眼镜 · 用AI眼镜拍照 / 翻译 · 一副AI眼镜.",
  "collo": [
   "戴AI眼镜",
   "用AI眼镜拍照",
   "一副眼镜",
   "AI眼镜翻译"
  ],
  "colloFull": [
   {
    "zh": "戴AI眼镜",
    "py": "Dài AI yǎnjìng",
    "vn": "đeo kính AI"
   },
   {
    "zh": "用AI眼镜拍照",
    "py": "Yòng AI yǎnjìng pāizhào",
    "vn": "chụp ảnh bằng kính AI"
   },
   {
    "zh": "一副眼镜",
    "py": "Yí fù yǎnjìng",
    "vn": "một cặp kính"
   },
   {
    "zh": "AI眼镜翻译",
    "py": "AI yǎnjìng fānyì",
    "vn": "kính AI dịch"
   }
  ],
  "patterns": [
   {
    "s": "戴 + 眼镜",
    "m": "đeo kính"
   },
   {
    "s": "一副 + 眼镜",
    "m": "lượng từ của kính là 副"
   }
  ],
  "ex_zh": "三人从共享单车聊到AI眼镜和3D打印机。",
  "ex_py": "Sān rén cóng gòngxiǎng dānchē liáo dào AI yǎnjìng hé 3D dǎyìnjī.",
  "ex_vn": "Ba người trò chuyện từ xe đạp công cộng đến kính AI và máy in 3D.",
  "exList": [
   {
    "zh": "三人从共享单车聊到AI眼镜和3D打印机。",
    "py": "Sān rén cóng gòngxiǎng dānchē liáo dào AI yǎnjìng hé 3D dǎyìnjī.",
    "vn": "Ba người trò chuyện từ xe đạp công cộng đến kính AI và máy in 3D."
   },
   {
    "zh": "戴上AI眼镜，看中文菜单时就能马上知道越南语的意思。",
    "py": "Dàishang AI yǎnjìng, kàn Zhōngwén càidān shí jiù néng mǎshàng zhīdao Yuènányǔ de yìsi.",
    "vn": "Đeo kính AI vào, xem thực đơn tiếng Trung là biết ngay nghĩa tiếng Việt."
   }
  ],
  "hanzi": [
   {
    "c": "眼",
    "p": "yǎn",
    "type": "左右结构 · Trái-phải",
    "st": 11,
    "ord": "目(mục) trái → 艮(cấn) phải",
    "rad": "目 (mục – mắt)",
    "mean": "mắt",
    "tip": "目(mắt) + 艮(nhìn chăm chú) → bộ phận để NHÌN = MẮT.",
    "cf": "银 (yín – \"bạc\")",
    "w": "眼睛"
   },
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
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Rốt cuộc cái kính AI này dùng thế nào?",
    "answer": "这个AI眼镜到底怎么用？",
    "answerPy": "Zhège AI yǎnjìng dàodǐ zěnme yòng?",
    "note": "到底 (điểm 3 của bài này).",
    "pair": "到底 + 怎么 + V"
   },
   {
    "promptLang": "vi",
    "prompt": "Kính AI tuy tiện lợi, thế nhưng giá vẫn hơi đắt.",
    "answer": "AI眼镜很方便，然而价格还有点儿贵。",
    "answerPy": "AI yǎnjìng hěn fāngbiàn, rán'ér jiàgé hái yǒudiǎnr guì.",
    "note": "然而 (điểm 4 của bài này).",
    "pair": "……，然而……"
   }
  ]
 },
 {
  "n": 24,
  "zh": "3D打印机",
  "py": "3D dǎyìnjī",
  "pos": "Danh từ",
  "vn": "máy in 3D",
  "hv": "3D đả ấn cơ",
  "em": "🖨️",
  "lesson": 3,
  "explain": [
   "Máy in ba chiều: “in” ra đồ vật thật (cốc, bình, đồ chơi, linh kiện) từng lớp từng lớp. 打印 = in (giấy tờ); 打印机 = máy in; 机 = máy. Lượng từ cho máy móc: 台."
  ],
  "usage": "一台3D打印机 · 用3D打印机打印 · 3D打印.",
  "collo": [
   "一台3D打印机",
   "3D打印",
   "打印机",
   "打印文件"
  ],
  "colloFull": [
   {
    "zh": "一台3D打印机",
    "py": "Yì tái 3D dǎyìnjī",
    "vn": "một máy in 3D"
   },
   {
    "zh": "3D打印",
    "py": "3D dǎyìn",
    "vn": "in 3D"
   },
   {
    "zh": "打印机",
    "py": "Dǎyìnjī",
    "vn": "máy in"
   },
   {
    "zh": "打印文件",
    "py": "Dǎyìn wénjiàn",
    "vn": "in tài liệu"
   }
  ],
  "patterns": [
   {
    "s": "用 + 3D打印机 + 做 / 打印 + N",
    "m": "dùng máy in 3D làm ra …"
   },
   {
    "s": "一台 + 机器",
    "m": "lượng từ 台 cho máy móc"
   }
  ],
  "ex_zh": "三人从共享单车聊到AI眼镜和3D打印机。",
  "ex_py": "Sān rén cóng gòngxiǎng dānchē liáo dào AI yǎnjìng hé 3D dǎyìnjī.",
  "ex_vn": "Ba người trò chuyện từ xe đạp công cộng đến kính AI và máy in 3D.",
  "exList": [
   {
    "zh": "三人从共享单车聊到AI眼镜和3D打印机。",
    "py": "Sān rén cóng gòngxiǎng dānchē liáo dào AI yǎnjìng hé 3D dǎyìnjī.",
    "vn": "Ba người trò chuyện từ xe đạp công cộng đến kính AI và máy in 3D."
   },
   {
    "zh": "这些漂亮的花瓶都是用3D打印机做出来的。",
    "py": "Zhèxiē piàoliang de huāpíng dōu shì yòng 3D dǎyìnjī zuò chūlai de.",
    "vn": "Những chiếc bình hoa đẹp này đều được làm ra bằng máy in 3D."
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
    "c": "机",
    "p": "jī",
    "type": "形声字 · Chữ hình thanh",
    "st": 6,
    "ord": "木 → 几",
    "rad": "木 (mộc – cây)",
    "mean": "máy; thời cơ",
    "tip": "木 + 几 (chỉ âm): khung máy bằng gỗ → máy móc; cũng chỉ \"thời cơ\". Ôn: 手机 (HSK1 Bài 6), 机场 (HSK1 Bài 15), 开机 (HSK3 Bài 7).",
    "cf": "几 jǐ — không có 木",
    "w": "机会 / 手机 / 机场"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Trường chúng tôi mới mua một máy in 3D, các bạn đều muốn thử.",
    "answer": "我们学校新买了一台3D打印机，同学们都想试一试。",
    "answerPy": "Wǒmen xuéxiào xīn mǎi le yì tái 3D dǎyìnjī, tóngxuémen dōu xiǎng shì yi shì.",
    "note": "Lượng từ 台; V一V (HSK 2).",
    "pair": "一台 + 3D打印机"
   },
   {
    "promptLang": "vi",
    "prompt": "Đồ vật máy in 3D làm ra cái sau đẹp hơn cái trước.",
    "answer": "3D打印机做出来的东西一个比一个漂亮。",
    "answerPy": "3D dǎyìnjī zuò chūlai de dōngxi yí gè bǐ yí gè piàoliang.",
    "note": "Ôn 一+量词+比+一+量词 (Bài 13 · điểm 2).",
    "pair": "一个比一个 + Adj"
   }
  ]
 },
 {
  "n": 25,
  "zh": "上门",
  "py": "shàngmén",
  "pos": "Động từ",
  "vn": "đến tận nhà",
  "hv": "thượng môn",
  "em": "🏠",
  "lesson": 3,
  "explain": [
   "Đến tận nhà (để phục vụ, làm việc). 上门 + V: 上门服务, 上门做饭, 上门取快递. 上门经济 = kinh tế dịch vụ tận nhà."
  ],
  "usage": "上门服务 · 上门做饭 · 上门取快递 · 上门经济.",
  "collo": [
   "上门服务",
   "上门做饭",
   "上门取快递",
   "上门经济"
  ],
  "colloFull": [
   {
    "zh": "上门服务",
    "py": "Shàngmén fúwù",
    "vn": "dịch vụ tận nhà"
   },
   {
    "zh": "上门做饭",
    "py": "Shàngmén zuòfàn",
    "vn": "nấu cơm tại nhà"
   },
   {
    "zh": "上门取快递",
    "py": "Shàngmén qǔ kuàidì",
    "vn": "lấy bưu kiện tận nhà"
   },
   {
    "zh": "上门经济",
    "py": "Shàngmén jīngjì",
    "vn": "kinh tế dịch vụ tận nhà"
   }
  ],
  "patterns": [
   {
    "s": "上门 + V",
    "m": "đến tận nhà làm gì"
   },
   {
    "s": "按……要求 + 上门 + V",
    "m": "đến tận nhà làm theo yêu cầu"
   }
  ],
  "ex_zh": "三人从共享单车聊到AI眼镜和3D打印机，从绿色经济聊到上门经济。",
  "ex_py": "Sān rén cóng gòngxiǎng dānchē liáo dào AI yǎnjìng hé 3D dǎyìnjī, cóng lǜsè jīngjì liáo dào shàngmén jīngjì.",
  "ex_vn": "Ba người trò chuyện từ xe đạp công cộng đến kính AI và máy in 3D, từ kinh tế xanh đến kinh tế dịch vụ tận nhà.",
  "exList": [
   {
    "zh": "三人从共享单车聊到AI眼镜和3D打印机，从绿色经济聊到上门经济。",
    "py": "Sān rén cóng gòngxiǎng dānchē liáo dào AI yǎnjìng hé 3D dǎyìnjī, cóng lǜsè jīngjì liáo dào shàngmén jīngjì.",
    "vn": "Ba người trò chuyện từ xe đạp công cộng đến kính AI và máy in 3D, từ kinh tế xanh đến kinh tế dịch vụ tận nhà."
   },
   {
    "zh": "在网上预约后，明天会有人上门修空调。",
    "py": "Zài wǎngshang yùyuē hòu, míngtiān huì yǒurén shàngmén xiū kōngtiáo.",
    "vn": "Đặt lịch trên mạng xong, ngày mai sẽ có người đến tận nhà sửa điều hoà."
   }
  ],
  "hanzi": [
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
    "prompt": "Đầu bếp đến tận nhà nấu cơm, bạn không cần tự nấu nữa.",
    "answer": "厨师上门做饭，你不必自己做了。",
    "answerPy": "Chúshī shàngmén zuòfàn, nǐ búbì zìjǐ zuò le.",
    "note": "Từ mới 厨师, 不必 (bài này).",
    "pair": "上门 + V"
   },
   {
    "promptLang": "vi",
    "prompt": "Dịch vụ tận nhà tuy tiện, thế nhưng chi phí hơi cao.",
    "answer": "上门服务很方便，然而费用有点儿高。",
    "answerPy": "Shàngmén fúwù hěn fāngbiàn, rán'ér fèiyong yǒudiǎnr gāo.",
    "note": "然而 (điểm 4 của bài này).",
    "pair": "……，然而……"
   }
  ]
 },
 {
  "n": 26,
  "zh": "到底",
  "py": "dàodǐ",
  "pos": "Phó từ",
  "vn": "rốt cuộc, rốt cục (truy hỏi)",
  "hv": "đáo để",
  "em": "❓",
  "lesson": 3,
  "explain": [
   "Phó từ ngữ khí dùng trong câu hỏi để truy hỏi cho ra lẽ: rốt cuộc, rốt cục (xem Ngữ pháp điểm 3).",
   "⚠ Bẫy Hán Việt: “đáo để” trong tiếng Việt nghĩa là “ghê gớm, lợi hại” — hoàn toàn khác!"
  ],
  "usage": "S + 到底 + câu hỏi (đại từ nghi vấn / V不V / A还是B) · 到底 + 谁……? · không dùng với 吗.",
  "collo": [
   "到底是谁",
   "到底怎么办",
   "到底去不去",
   "到底为什么"
  ],
  "colloFull": [
   {
    "zh": "到底是谁",
    "py": "Dàodǐ shì shuí",
    "vn": "rốt cuộc là ai"
   },
   {
    "zh": "到底怎么办",
    "py": "Dàodǐ zěnmebàn",
    "vn": "rốt cuộc làm sao đây"
   },
   {
    "zh": "到底去不去",
    "py": "Dàodǐ qù bu qù",
    "vn": "rốt cuộc có đi không"
   },
   {
    "zh": "到底为什么",
    "py": "Dàodǐ wèishénme",
    "vn": "rốt cuộc tại sao"
   }
  ],
  "patterns": [
   {
    "s": "S + 到底 + câu hỏi?",
    "m": "rốt cuộc …?"
   },
   {
    "s": "到底 ≈ 究竟",
    "m": "究竟 trang trọng hơn (Bài 14 · điểm 1)"
   }
  ],
  "ex_zh": "科技到底对世界产生了怎样的影响？",
  "ex_py": "Kējì dàodǐ duì shìjiè chǎnshēng le zěnyàng de yǐngxiǎng?",
  "ex_vn": "Rốt cuộc công nghệ đã tạo ra ảnh hưởng như thế nào đối với thế giới?",
  "exList": [
   {
    "zh": "科技到底对世界产生了怎样的影响？",
    "py": "Kējì dàodǐ duì shìjiè chǎnshēng le zěnyàng de yǐngxiǎng?",
    "vn": "Rốt cuộc công nghệ đã tạo ra ảnh hưởng như thế nào đối với thế giới?"
   },
   {
    "zh": "你们到底还来不来？",
    "py": "Nǐmen dàodǐ hái lái bu lái?",
    "vn": "Rốt cuộc các bạn còn đến hay không?"
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
    "c": "底",
    "p": "dǐ",
    "type": "半包围结构 · Nửa bao quanh",
    "st": 8,
    "ord": "广 bao → 氐 trong",
    "rad": "广 (nghiễm)",
    "mean": "đáy",
    "tip": "Mái 广 + 氐(thấp) → phần thấp nhất → ĐÁY. 到底 = đến đáy = đến cùng / rốt cuộc; 月底 = cuối tháng (Bài 11).",
    "cf": "低 (dī – thấp)",
    "w": "到底 / 月底 / 年底 / 底下"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Rốt cuộc bạn có đồng ý hay không?",
    "answer": "你到底同意不同意？",
    "answerPy": "Nǐ dàodǐ tóngyì bù tóngyì?",
    "note": "到底 + V不V.",
    "pair": "到底 + V不V"
   },
   {
    "promptLang": "vi",
    "prompt": "Rốt cuộc bánh trung thu bị ai ăn mất rồi?",
    "answer": "月饼到底让谁吃了？",
    "answerPy": "Yuèbing dàodǐ ràng shuí chī le?",
    "note": "Kết hợp câu bị động 让 (điểm 2).",
    "pair": "……到底让谁 + V + 了？"
   }
  ]
 },
 {
  "n": 27,
  "zh": "仅",
  "py": "jǐn",
  "pos": "Phó từ",
  "vn": "chỉ",
  "hv": "cận",
  "em": "☝️",
  "lesson": 3,
  "explain": [
   "Chỉ (= 只), nhưng trang trọng, thiên về văn viết: 仅用几天, 仅有一个. Liên hệ: 不仅 (Bài 3) = không chỉ; 仅仅 = chỉ, vẻn vẹn."
  ],
  "usage": "仅 + V + số lượng (仅用几天 / 仅有十个人) · 仅仅.",
  "collo": [
   "仅用几天",
   "仅有",
   "仅仅",
   "不仅"
  ],
  "colloFull": [
   {
    "zh": "仅用几天",
    "py": "Jǐn yòng jǐ tiān",
    "vn": "chỉ mất vài ngày"
   },
   {
    "zh": "仅有",
    "py": "Jǐn yǒu",
    "vn": "chỉ có"
   },
   {
    "zh": "仅仅",
    "py": "Jǐnjǐn",
    "vn": "vẻn vẹn, chỉ"
   },
   {
    "zh": "不仅",
    "py": "Bùjǐn",
    "vn": "không chỉ"
   }
  ],
  "patterns": [
   {
    "s": "仅 + 用 + thời gian + 就 + V",
    "m": "chỉ mất … đã …"
   },
   {
    "s": "仅 ≈ 只",
    "m": "仅 văn viết; 只 khẩu ngữ"
   }
  ],
  "ex_zh": "他们装了一些免费的App，仅用几天就拍完了。",
  "ex_py": "Tāmen zhuāng le yìxiē miǎnfèi de App, jǐn yòng jǐ tiān jiù pāi wán le.",
  "ex_vn": "Họ cài một vài App miễn phí, chỉ mất vài ngày là quay xong.",
  "exList": [
   {
    "zh": "他们装了一些免费的App，仅用几天就拍完了。",
    "py": "Tāmen zhuāng le yìxiē miǎnfèi de App, jǐn yòng jǐ tiān jiù pāi wán le.",
    "vn": "Họ cài một vài App miễn phí, chỉ mất vài ngày là quay xong."
   },
   {
    "zh": "这道题我们都做不出来，他仅用不到五分钟就做出来了。",
    "py": "Zhè dào tí wǒmen dōu zuò bu chūlai, tā jǐn yòng bu dào wǔ fēnzhōng jiù zuò chūlai le.",
    "vn": "Bài này chúng tôi đều không làm được, cậu ấy chỉ mất chưa đến năm phút đã làm ra."
   }
  ],
  "hanzi": [
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
    "prompt": "Anh ấy chỉ mất ba ngày đã quay xong video này.",
    "answer": "他仅用三天就把这个视频拍完了。",
    "answerPy": "Tā jǐn yòng sān tiān jiù bǎ zhège shìpín pāi wán le.",
    "note": "Ôn câu chữ 把 + V完 (Bài 15–16).",
    "pair": "仅用……就把……V完了"
   },
   {
    "promptLang": "vi",
    "prompt": "Năm ngoái chỉ có mười người tham gia, năm nay đã hơn một trăm người.",
    "answer": "去年仅有十个人参加，今年已经有一百多人了。",
    "answerPy": "Qùnián jǐn yǒu shí gè rén cānjiā, jīnnián yǐjīng yǒu yìbǎi duō rén le.",
    "note": "Ôn số ước lượng 多 (HSK 3).",
    "pair": "仅有 + số lượng"
   }
  ]
 },
 {
  "n": 28,
  "zh": "多样",
  "py": "duōyàng",
  "pos": "Tính từ",
  "vn": "đa dạng, nhiều kiểu",
  "hv": "đa dạng",
  "em": "🌈",
  "lesson": 3,
  "explain": [
   "Nhiều kiểu, nhiều loại; hay đi đôi: 丰富多样 (phong phú đa dạng), 多种多样 (đủ loại đủ kiểu)."
  ],
  "usage": "丰富多样 · 多种多样 · 方式多样 · 越来越多样.",
  "collo": [
   "丰富多样",
   "多种多样",
   "方式多样",
   "内容多样"
  ],
  "colloFull": [
   {
    "zh": "丰富多样",
    "py": "Fēngfù duōyàng",
    "vn": "phong phú đa dạng"
   },
   {
    "zh": "多种多样",
    "py": "Duōzhǒng duōyàng",
    "vn": "đủ loại đủ kiểu"
   },
   {
    "zh": "方式多样",
    "py": "Fāngshì duōyàng",
    "vn": "hình thức đa dạng"
   },
   {
    "zh": "内容多样",
    "py": "Nèiróng duōyàng",
    "vn": "nội dung đa dạng"
   }
  ],
  "patterns": [
   {
    "s": "N + 丰富多样",
    "m": "… phong phú đa dạng"
   },
   {
    "s": "越来越多样",
    "m": "ngày càng đa dạng"
   }
  ],
  "ex_zh": "视频里，小语做的小吃丰富多样，看起来好吃极了。",
  "ex_py": "Shìpín lǐ, Xiǎoyǔ zuò de xiǎochī fēngfù duōyàng, kànqǐlai hǎochī jí le.",
  "ex_vn": "Trong video, các món ăn vặt Tiểu Ngữ làm phong phú đa dạng, trông ngon cực kỳ.",
  "exList": [
   {
    "zh": "视频里，小语做的小吃丰富多样，看起来好吃极了。",
    "py": "Shìpín lǐ, Xiǎoyǔ zuò de xiǎochī fēngfù duōyàng, kànqǐlai hǎochī jí le.",
    "vn": "Trong video, các món ăn vặt Tiểu Ngữ làm phong phú đa dạng, trông ngon cực kỳ."
   },
   {
    "zh": "现在的学习方式越来越多样，在家里也可以上课。",
    "py": "Xiànzài de xuéxí fāngshì yuèláiyuè duōyàng, zài jiāli yě kěyǐ shàngkè.",
    "vn": "Cách học bây giờ ngày càng đa dạng, ở nhà cũng có thể lên lớp."
   }
  ],
  "hanzi": [
   {
    "c": "多",
    "p": "duō",
    "type": "会意字 · Chữ hội ý",
    "st": 6,
    "ord": "夕 → 夕",
    "rad": "夕 (tịch – buổi tối)",
    "mean": "nhiều",
    "tip": "Hai chữ 夕 chồng lên nhau: hết đêm này sang đêm khác → nhiều. 好多 = 很多 (好 ở đây = rất, như 好久 – HSK3 Bài 2).",
    "cf": "名 míng (名字) — dưới là 口",
    "w": "好多 / 很多 / 多少"
   },
   {
    "c": "样",
    "p": "yàng",
    "type": "左右结构 · Trái-phải (giản thể)",
    "st": 10,
    "ord": "木 (mộc) trái → 羊 (dương) phải",
    "rad": "木 (mộc – cây)",
    "mean": "kiểu mẫu, dáng vẻ",
    "tip": "Bộ cây 木 (khuôn mẫu bằng gỗ) + 羊(biểu âm) → KHUÔN MẪU để tạo hình, mở rộng thành KIỂU DÁNG, DÁNG VẺ.",
    "cf": "洋 (yáng – \"đại dương\", bộ 氵\")",
    "w": "样子 / 一样 / 怎么样"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Nội dung video ngắn ngày càng đa dạng.",
    "answer": "短视频的内容越来越多样了。",
    "answerPy": "Duǎn shìpín de nèiróng yuèláiyuè duōyàng le.",
    "note": "Ôn 越来越 (HSK 3).",
    "pair": "越来越 + 多样"
   },
   {
    "promptLang": "vi",
    "prompt": "Các hoạt động của trường không những đa dạng mà còn rất thú vị.",
    "answer": "学校的活动不仅多样，而且很有意思。",
    "answerPy": "Xuéxiào de huódòng bùjǐn duōyàng, érqiě hěn yǒu yìsi.",
    "note": "Ôn 不仅……而且…… (Bài 3 · điểm 2).",
    "pair": "不仅……，而且……"
   }
  ]
 },
 {
  "n": 29,
  "zh": "推出",
  "py": "tuīchū",
  "pos": "Động từ",
  "vn": "tung ra, cho ra mắt",
  "hv": "thôi xuất",
  "em": "🚀",
  "lesson": 3,
  "explain": [
   "Đưa ra, tung ra, cho ra mắt (sản phẩm mới, món mới, dịch vụ mới, video…). Phân biệt với 提出 (đưa ra ý kiến, yêu cầu, đề nghị)."
  ],
  "usage": "推出 + 新产品 / 新菜 / 新服务 / 视频 · 新推出的 + N · N + 推出后.",
  "collo": [
   "推出新产品",
   "推出新菜",
   "推出服务",
   "新推出的"
  ],
  "colloFull": [
   {
    "zh": "推出新产品",
    "py": "Tuīchū xīn chǎnpǐn",
    "vn": "tung ra sản phẩm mới"
   },
   {
    "zh": "推出新菜",
    "py": "Tuīchū xīn cài",
    "vn": "ra mắt món mới"
   },
   {
    "zh": "推出服务",
    "py": "Tuīchū fúwù",
    "vn": "tung ra dịch vụ"
   },
   {
    "zh": "新推出的",
    "py": "Xīn tuīchū de",
    "vn": "mới ra mắt"
   }
  ],
  "patterns": [
   {
    "s": "推出 + sản phẩm / dịch vụ mới",
    "m": "tung ra"
   },
   {
    "s": "推出 ≠ 提出",
    "m": "推出 sản phẩm; 提出 ý kiến / yêu cầu"
   }
  ],
  "ex_zh": "短视频推出后，大家认为非常精彩。",
  "ex_py": "Duǎn shìpín tuīchū hòu, dàjiā rènwéi fēicháng jīngcǎi.",
  "ex_vn": "Sau khi video ngắn được tung ra, mọi người cho rằng rất đặc sắc.",
  "exList": [
   {
    "zh": "短视频推出后，大家认为非常精彩。",
    "py": "Duǎn shìpín tuīchū hòu, dàjiā rènwéi fēicháng jīngcǎi.",
    "vn": "Sau khi video ngắn được tung ra, mọi người cho rằng rất đặc sắc."
   },
   {
    "zh": "这是我们新推出的一道菜，叫香辣鱼块。",
    "py": "Zhè shì wǒmen xīn tuīchū de yí dào cài, jiào xiāng là yú kuài.",
    "vn": "Đây là món mới nhà hàng chúng tôi vừa ra mắt, tên là cá miếng cay thơm."
   }
  ],
  "hanzi": [
   {
    "c": "推",
    "p": "tuī",
    "type": "左右结构 · Trái-phải",
    "st": 11,
    "ord": "扌 trái → 隹 phải",
    "rad": "扌 (thủ)",
    "mean": "đẩy",
    "tip": "Tay 扌 + 隹(chim) → dùng tay ĐẨY. 推迟 = hoãn; 推出 = tung ra; 推荐 = giới thiệu.",
    "cf": "堆 (duī – đống)",
    "w": "推 / 推迟 / 推出 / 推荐"
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
    "prompt": "Công ty này năm nay đã tung ra ba App mới.",
    "answer": "这家公司今年推出了三个新App。",
    "answerPy": "Zhè jiā gōngsī jīnnián tuīchū le sān gè xīn App.",
    "note": "推出 + 新 + N.",
    "pair": "推出了 + số lượng + N"
   },
   {
    "promptLang": "vi",
    "prompt": "Món mới nhà hàng ra mắt rốt cuộc có vị thế nào?",
    "answer": "饭店新推出的菜到底是什么味道？",
    "answerPy": "Fàndiàn xīn tuīchū de cài dàodǐ shì shénme wèidào?",
    "note": "到底 (điểm 3 của bài này).",
    "pair": "新推出的 + N + 到底……"
   }
  ]
 },
 {
  "n": 30,
  "zh": "预约",
  "py": "yùyuē",
  "pos": "Động từ",
  "vn": "đặt lịch, đặt trước, hẹn trước",
  "hv": "dự ước",
  "em": "📅",
  "lesson": 4,
  "explain": [
   "Hẹn trước, đặt lịch trước (khám bệnh, dịch vụ, tham quan…). 预约者 = người đặt lịch."
  ],
  "usage": "网上预约 · 提前预约 · 预约时间 · 预约好了.",
  "collo": [
   "网上预约",
   "提前预约",
   "预约时间",
   "预约服务"
  ],
  "colloFull": [
   {
    "zh": "网上预约",
    "py": "Wǎngshang yùyuē",
    "vn": "đặt lịch qua mạng"
   },
   {
    "zh": "提前预约",
    "py": "Tíqián yùyuē",
    "vn": "đặt trước"
   },
   {
    "zh": "预约时间",
    "py": "Yùyuē shíjiān",
    "vn": "thời gian hẹn"
   },
   {
    "zh": "预约服务",
    "py": "Yùyuē fúwù",
    "vn": "đặt dịch vụ"
   }
  ],
  "patterns": [
   {
    "s": "在网上 + 预约 + N",
    "m": "đặt lịch … trên mạng"
   },
   {
    "s": "提前 + 预约",
    "m": "đặt trước (sớm hơn)"
   }
  ],
  "ex_zh": "上门经济，就是预约者通过网上预约，让服务人员在合适的时间到家里或者约好的地点服务。",
  "ex_py": "Shàngmén jīngjì, jiùshì yùyuē zhě tōngguò wǎngshang yùyuē, ràng fúwù rényuán zài héshì de shíjiān dào jiāli huòzhě yuēhǎo de dìdiǎn fúwù.",
  "ex_vn": "Kinh tế dịch vụ tận nhà, tức là người đặt hẹn đặt lịch qua mạng, để nhân viên phục vụ đến nhà hoặc đến địa điểm đã hẹn vào thời gian thích hợp.",
  "exList": [
   {
    "zh": "上门经济，就是预约者通过网上预约，让服务人员在合适的时间到家里或者约好的地点服务。",
    "py": "Shàngmén jīngjì, jiùshì yùyuē zhě tōngguò wǎngshang yùyuē, ràng fúwù rényuán zài héshì de shíjiān dào jiāli huòzhě yuēhǎo de dìdiǎn fúwù.",
    "vn": "Kinh tế dịch vụ tận nhà, tức là người đặt hẹn đặt lịch qua mạng, để nhân viên phục vụ đến nhà hoặc đến địa điểm đã hẹn vào thời gian thích hợp."
   },
   {
    "zh": "去那家医院看病要先在网上预约。",
    "py": "Qù nà jiā yīyuàn kànbìng yào xiān zài wǎngshang yùyuē.",
    "vn": "Đi khám ở bệnh viện đó phải đặt lịch trên mạng trước."
   }
  ],
  "hanzi": [
   {
    "c": "预",
    "p": "yù",
    "type": "左右结构 · Trái-phải",
    "st": 10,
    "ord": "予 trái → 页 phải",
    "rad": "页 (hiệt)",
    "mean": "trước, dự",
    "tip": "予 + 页 → DỰ trước. 预习 = học trước; 预报 = dự báo (Bài 1); 预订 = đặt trước.",
    "cf": "预 vs 顶 (dǐng – đỉnh)",
    "w": "预习 / 预报 / 预订 / 预习"
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
    "prompt": "Bảo tàng này phải đặt lịch trước, nếu không thì không vào được.",
    "answer": "这个博物馆要提前预约，否则进不去。",
    "answerPy": "Zhège bówùguǎn yào tíqián yùyuē, fǒuzé jìn bu qù.",
    "note": "Ôn 否则 (Bài 8 · điểm 2).",
    "pair": "……，否则……"
   },
   {
    "promptLang": "vi",
    "prompt": "Tôi đặt lịch xong rồi, ngày mai nhân viên phục vụ sẽ đến tận nhà.",
    "answer": "我已经预约好了，明天服务人员会上门。",
    "answerPy": "Wǒ yǐjīng yùyuē hǎo le, míngtiān fúwù rényuán huì shàngmén.",
    "note": "Từ mới 上门 (bài này).",
    "pair": "预约好了"
   }
  ]
 },
 {
  "n": 31,
  "zh": "取",
  "py": "qǔ",
  "pos": "Động từ",
  "vn": "lấy, nhận (về)",
  "hv": "thủ",
  "em": "📦",
  "lesson": 4,
  "explain": [
   "Lấy, đến nơi nào đó nhận về thứ của mình: 取快递 (lấy bưu kiện), 取钱 (rút tiền), 取票 (lấy vé). Khác 拿 (cầm, lấy nói chung)."
  ],
  "usage": "取快递 · 取钱 · 取票 · 取东西 · 去 / 来 + 取.",
  "collo": [
   "取快递",
   "取钱",
   "取票",
   "取东西"
  ],
  "colloFull": [
   {
    "zh": "取快递",
    "py": "Qǔ kuàidì",
    "vn": "lấy bưu kiện"
   },
   {
    "zh": "取钱",
    "py": "Qǔ qián",
    "vn": "rút tiền"
   },
   {
    "zh": "取票",
    "py": "Qǔ piào",
    "vn": "lấy vé"
   },
   {
    "zh": "取东西",
    "py": "Qǔ dōngxi",
    "vn": "lấy đồ"
   }
  ],
  "patterns": [
   {
    "s": "去 + 取 + N",
    "m": "đi lấy …"
   },
   {
    "s": "取 ≠ 拿",
    "m": "取: đến nơi nhận về; 拿: cầm, lấy nói chung"
   }
  ],
  "ex_zh": "服务内容有上门做饭、照顾小动物、取东西等。",
  "ex_py": "Fúwù nèiróng yǒu shàngmén zuòfàn, zhàogu xiǎo dòngwù, qǔ dōngxi děng.",
  "ex_vn": "Nội dung dịch vụ có nấu cơm tại nhà, chăm sóc thú cưng, lấy đồ giúp, v.v.",
  "exList": [
   {
    "zh": "服务内容有上门做饭、照顾小动物、取东西等。",
    "py": "Fúwù nèiróng yǒu shàngmén zuòfàn, zhàogu xiǎo dòngwù, qǔ dōngxi děng.",
    "vn": "Nội dung dịch vụ có nấu cơm tại nhà, chăm sóc thú cưng, lấy đồ giúp, v.v."
   },
   {
    "zh": "我去取个快递，顺便买个早餐，你想吃什么？",
    "py": "Wǒ qù qǔ gè kuàidì, shùnbiàn mǎi gè zǎocān, nǐ xiǎng chī shénme?",
    "vn": "Tôi đi lấy bưu kiện, tiện thể mua bữa sáng, bạn muốn ăn gì?"
   }
  ],
  "hanzi": [
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
    "prompt": "Tan làm tôi tiện thể đi lấy bưu kiện.",
    "answer": "下班后我顺便去取快递。",
    "answerPy": "Xiàbān hòu wǒ shùnbiàn qù qǔ kuàidì.",
    "note": "顺便 = tiện thể.",
    "pair": "顺便 + 去取……"
   },
   {
    "promptLang": "vi",
    "prompt": "Bưu kiện của tôi đã được bạn cùng phòng lấy về giúp rồi.",
    "answer": "我的快递叫室友给取回来了。",
    "answerPy": "Wǒ de kuàidì jiào shìyǒu gěi qǔ huílai le.",
    "note": "Câu bị động 叫……给…… (điểm 2 của bài này).",
    "pair": "叫 + người + 给 + V回来了"
   }
  ]
 },
 {
  "n": 32,
  "zh": "原因",
  "py": "yuányīn",
  "pos": "Danh từ",
  "vn": "nguyên nhân, lý do",
  "hv": "nguyên nhân",
  "em": "🔍",
  "lesson": 4,
  "explain": [
   "Nguyên nhân, lý do dẫn đến sự việc. Hay dùng: 由于……(等)原因 (vì … và những lý do khác), ……的原因是……"
  ],
  "usage": "什么原因 · 主要原因 · 说明原因 · 由于……等原因.",
  "collo": [
   "什么原因",
   "主要原因",
   "说明原因",
   "由于……原因"
  ],
  "colloFull": [
   {
    "zh": "什么原因",
    "py": "Shénme yuányīn",
    "vn": "lý do gì"
   },
   {
    "zh": "主要原因",
    "py": "Zhǔyào yuányīn",
    "vn": "nguyên nhân chính"
   },
   {
    "zh": "说明原因",
    "py": "Shuōmíng yuányīn",
    "vn": "giải thích lý do"
   },
   {
    "zh": "由于……原因",
    "py": "Yóuyú…… yuányīn",
    "vn": "vì lý do …"
   }
  ],
  "patterns": [
   {
    "s": "由于 + ……(等) + 原因",
    "m": "vì … (ôn 由于 – Bài 2 · điểm 4)"
   },
   {
    "s": "……的原因是……",
    "m": "nguyên nhân của … là …"
   }
  ],
  "ex_zh": "由于工作等原因，她需要经常出差，然而又很担心猫的安全。",
  "ex_py": "Yóuyú gōngzuò děng yuányīn, tā xūyào jīngcháng chūchāi, rán'ér yòu hěn dānxīn māo de ānquán.",
  "ex_vn": "Vì công việc và những lý do khác, chị phải thường xuyên đi công tác, thế nhưng lại rất lo cho sự an toàn của con mèo.",
  "exList": [
   {
    "zh": "由于工作等原因，她需要经常出差，然而又很担心猫的安全。",
    "py": "Yóuyú gōngzuò děng yuányīn, tā xūyào jīngcháng chūchāi, rán'ér yòu hěn dānxīn māo de ānquán.",
    "vn": "Vì công việc và những lý do khác, chị phải thường xuyên đi công tác, thế nhưng lại rất lo cho sự an toàn của con mèo."
   },
   {
    "zh": "他迟到的原因是路上堵车。",
    "py": "Tā chídào de yuányīn shì lùshang dǔchē.",
    "vn": "Lý do anh ấy đến muộn là đường bị tắc."
   }
  ],
  "hanzi": [
   {
    "c": "原",
    "p": "yuán",
    "type": "半包围结构 · Bán bao vây",
    "st": 10,
    "ord": "厂 bao ngoài → 白+小 trong",
    "rad": "厂 (hán – vách núi)",
    "mean": "nguồn gốc, ban đầu",
    "tip": "Hình tượng dòng nước chảy ra từ khe núi 厂 → NGUỒN GỐC, mở rộng thành NGUYÊN NHÂN (nguồn gốc của sự việc).",
    "cf": "源 (yuán – \"nguồn\", thêm bộ 氵\" giữ nghĩa gốc \"nguồn nước\")",
    "w": "原因 / 原来 / 原谅"
   },
   {
    "c": "因",
    "p": "yīn",
    "type": "会意字 · Chữ hội ý",
    "st": 6,
    "ord": "囗 (hai nét đầu) → 大 → nét đóng khung",
    "rad": "囗 (vi – vây quanh)",
    "mean": "nguyên nhân, vì",
    "tip": "Người (大) nằm trên chiếc chiếu trong khung 囗: dựa vào, nhờ vào → nguyên nhân — 因为, 因此, 原因.",
    "cf": "困 kùn (buồn ngủ, khó khăn) — trong là 木; 回 huí — trong là 口",
    "w": "因为 / 因此 / 原因"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Lý do anh ấy không đến không phải vì bận, mà vì bị ốm.",
    "answer": "他没来的原因不是太忙，而是生病了。",
    "answerPy": "Tā méi lái de yuányīn bú shì tài máng, érshì shēngbìng le.",
    "note": "Ôn 不是……而是…… (Bài 11 · điểm 3).",
    "pair": "……的原因不是……，而是……"
   },
   {
    "promptLang": "vi",
    "prompt": "Rốt cuộc lý do bạn không đồng ý là gì?",
    "answer": "你不同意的原因到底是什么？",
    "answerPy": "Nǐ bù tóngyì de yuányīn dàodǐ shì shénme?",
    "note": "到底 (điểm 3 của bài này).",
    "pair": "……的原因到底是什么？"
   }
  ]
 },
 {
  "n": 33,
  "zh": "然而",
  "py": "rán'ér",
  "pos": "Liên từ",
  "vn": "thế nhưng, tuy nhiên, vậy mà",
  "hv": "nhiên nhi",
  "em": "🔄",
  "lesson": 4,
  "explain": [
   "Liên từ chuyển ngoặt, đứng đầu vế sau: nội dung sau 然而 trái với vế trước hoặc trái với dự đoán (xem Ngữ pháp điểm 4). Trang trọng hơn 但是 / 可是."
  ],
  "usage": "……，然而…… · 然而又 / 然而却 · 然而由于…….",
  "collo": [
   "然而又",
   "然而却",
   "然而由于",
   "然而现在"
  ],
  "colloFull": [
   {
    "zh": "然而又",
    "py": "Rán'ér yòu",
    "vn": "thế nhưng lại"
   },
   {
    "zh": "然而却",
    "py": "Rán'ér què",
    "vn": "vậy mà lại"
   },
   {
    "zh": "然而由于",
    "py": "Rán'ér yóuyú",
    "vn": "tuy nhiên vì"
   },
   {
    "zh": "然而现在",
    "py": "Rán'ér xiànzài",
    "vn": "vậy mà bây giờ"
   }
  ],
  "patterns": [
   {
    "s": "Vế 1，然而 + vế 2",
    "m": "…, thế nhưng …"
   },
   {
    "s": "然而 ≈ 但是",
    "m": "然而 trang trọng, văn viết"
   }
  ],
  "ex_zh": "由于工作等原因，她需要经常出差，然而又很担心猫的安全。",
  "ex_py": "Yóuyú gōngzuò děng yuányīn, tā xūyào jīngcháng chūchāi, rán'ér yòu hěn dānxīn māo de ānquán.",
  "ex_vn": "Vì công việc và những lý do khác, chị phải thường xuyên đi công tác, thế nhưng lại rất lo cho sự an toàn của con mèo.",
  "exList": [
   {
    "zh": "由于工作等原因，她需要经常出差，然而又很担心猫的安全。",
    "py": "Yóuyú gōngzuò děng yuányīn, tā xūyào jīngcháng chūchāi, rán'ér yòu hěn dānxīn māo de ānquán.",
    "vn": "Vì công việc và những lý do khác, chị phải thường xuyên đi công tác, thế nhưng lại rất lo cho sự an toàn của con mèo."
   },
   {
    "zh": "他很想出去旅行，然而工作太忙，一直没有时间。",
    "py": "Tā hěn xiǎng chūqu lǚxíng, rán'ér gōngzuò tài máng, yìzhí méiyǒu shíjiān.",
    "vn": "Anh ấy rất muốn đi du lịch, thế nhưng công việc bận quá, mãi không có thời gian."
   }
  ],
  "hanzi": [
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
   },
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
    "prompt": "Mùa xuân lẽ ra là mùa hoa nở, vậy mà năm nay hoa vẫn chưa nở.",
    "answer": "春天应该是花开的季节，然而今年花还没开。",
    "answerPy": "Chūntiān yīnggāi shì huā kāi de jìjié, rán'ér jīnnián huā hái méi kāi.",
    "note": "Dự đoán ↔ thực tế.",
    "pair": "应该……，然而……"
   },
   {
    "promptLang": "vi",
    "prompt": "Anh ấy học tiếng Trung chưa đến một năm, thế nhưng nói rất lưu loát.",
    "answer": "他学中文还不到一年，然而说得非常流利。",
    "answerPy": "Tā xué Zhōngwén hái bú dào yì nián, rán'ér shuō de fēicháng liúlì.",
    "note": "Ôn bổ ngữ trạng thái V得 (HSK 2–3).",
    "pair": "……，然而 + V得……"
   }
  ]
 },
 {
  "n": 34,
  "zh": "不必",
  "py": "búbì",
  "pos": "Phó từ",
  "vn": "không cần, không phải",
  "hv": "bất tất",
  "em": "🙅",
  "lesson": 4,
  "explain": [
   "Không cần, không phải (= 不用, 不需要, hơi trang trọng). Hán Việt “bất tất” — cùng nghĩa “không cần thiết”. Phủ định của 必须 là 不必 / 不用 (✗ 不必须)."
  ],
  "usage": "不必 + V · 不必担心 / 不必客气 / 不必着急 · 不必再…….",
  "collo": [
   "不必担心",
   "不必客气",
   "不必着急",
   "不必再"
  ],
  "colloFull": [
   {
    "zh": "不必担心",
    "py": "Búbì dānxīn",
    "vn": "không cần lo"
   },
   {
    "zh": "不必客气",
    "py": "Búbì kèqi",
    "vn": "không cần khách sáo"
   },
   {
    "zh": "不必着急",
    "py": "Búbì zháojí",
    "vn": "không cần vội"
   },
   {
    "zh": "不必再",
    "py": "Búbì zài",
    "vn": "không cần … nữa"
   }
  ],
  "patterns": [
   {
    "s": "不必 + V",
    "m": "không cần làm gì"
   },
   {
    "s": "必须 ↔ 不必",
    "m": "phải ↔ không cần"
   }
  ],
  "ex_zh": "有了上门服务后，她觉得方便多了，不必再找亲戚帮忙。",
  "ex_py": "Yǒu le shàngmén fúwù hòu, tā juéde fāngbiàn duō le, búbì zài zhǎo qīnqi bāngmáng.",
  "ex_vn": "Từ khi có dịch vụ tận nhà, chị thấy tiện hơn nhiều, không cần phải nhờ họ hàng giúp nữa.",
  "exList": [
   {
    "zh": "有了上门服务后，她觉得方便多了，不必再找亲戚帮忙。",
    "py": "Yǒu le shàngmén fúwù hòu, tā juéde fāngbiàn duō le, búbì zài zhǎo qīnqi bāngmáng.",
    "vn": "Từ khi có dịch vụ tận nhà, chị thấy tiện hơn nhiều, không cần phải nhờ họ hàng giúp nữa."
   },
   {
    "zh": "时间还早，你不必着急。",
    "py": "Shíjiān hái zǎo, nǐ búbì zháojí.",
    "vn": "Thời gian vẫn còn sớm, bạn không cần vội."
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
    "c": "必",
    "p": "bì",
    "type": "形声字 · Chữ hình thanh",
    "st": 5,
    "ord": "chấm → nằm cong móc → chấm → phẩy → chấm",
    "rad": "心 (tâm – tim)",
    "mean": "tất, nhất định",
    "tip": "Trông như chữ 心 có thêm nét phẩy xuyên qua: lòng đã quyết → nhất định phải. Viết nét nằm cong móc trước, nét phẩy sau.",
    "cf": "心 xīn — không có nét phẩy",
    "w": "必须"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Bạn không cần lo, con mèo đã có người đến tận nhà chăm sóc.",
    "answer": "你不必担心，小猫有人上门照顾。",
    "answerPy": "Nǐ búbì dānxīn, xiǎomāo yǒurén shàngmén zhàogu.",
    "note": "Từ mới 上门 (bài này).",
    "pair": "不必 + 担心"
   },
   {
    "promptLang": "vi",
    "prompt": "Đã là bạn bè thì không cần khách sáo.",
    "answer": "既然是朋友，就不必客气了。",
    "answerPy": "Jìrán shì péngyou, jiù búbì kèqi le.",
    "note": "Ôn 既然……就…… (Bài 7 · điểm 2).",
    "pair": "既然……，就不必……"
   }
  ]
 },
 {
  "n": 35,
  "zh": "亲戚",
  "py": "qīnqi",
  "pos": "Danh từ",
  "vn": "họ hàng, bà con",
  "hv": "thân thích",
  "em": "👪",
  "lesson": 4,
  "explain": [
   "Họ hàng, bà con (người có quan hệ máu mủ hoặc thông gia). 走亲戚 = đi thăm họ hàng (dịp Tết). Sách ghi 戚 đọc nhẹ: qīnqi."
  ],
  "usage": "走亲戚 · 亲戚朋友 · 找亲戚帮忙 · 家里的亲戚.",
  "collo": [
   "走亲戚",
   "亲戚朋友",
   "找亲戚帮忙",
   "家里的亲戚"
  ],
  "colloFull": [
   {
    "zh": "走亲戚",
    "py": "Zǒu qīnqi",
    "vn": "đi thăm họ hàng"
   },
   {
    "zh": "亲戚朋友",
    "py": "Qīnqi péngyou",
    "vn": "họ hàng bạn bè"
   },
   {
    "zh": "找亲戚帮忙",
    "py": "Zhǎo qīnqi bāngmáng",
    "vn": "nhờ họ hàng giúp"
   },
   {
    "zh": "家里的亲戚",
    "py": "Jiāli de qīnqi",
    "vn": "họ hàng trong nhà"
   }
  ],
  "patterns": [
   {
    "s": "找 + 亲戚 + 帮忙",
    "m": "nhờ họ hàng giúp"
   },
   {
    "s": "亲戚们",
    "m": "các họ hàng"
   }
  ],
  "ex_zh": "有了上门服务后，她觉得方便多了，不必再找亲戚帮忙。",
  "ex_py": "Yǒu le shàngmén fúwù hòu, tā juéde fāngbiàn duō le, búbì zài zhǎo qīnqi bāngmáng.",
  "ex_vn": "Từ khi có dịch vụ tận nhà, chị thấy tiện hơn nhiều, không cần phải nhờ họ hàng giúp nữa.",
  "exList": [
   {
    "zh": "有了上门服务后，她觉得方便多了，不必再找亲戚帮忙。",
    "py": "Yǒu le shàngmén fúwù hòu, tā juéde fāngbiàn duō le, búbì zài zhǎo qīnqi bāngmáng.",
    "vn": "Từ khi có dịch vụ tận nhà, chị thấy tiện hơn nhiều, không cần phải nhờ họ hàng giúp nữa."
   },
   {
    "zh": "春节的时候，很多亲戚都来我家聚会。",
    "py": "Chūnjié de shíhou, hěn duō qīnqi dōu lái wǒ jiā jùhuì.",
    "vn": "Dịp Tết, nhiều họ hàng đến nhà tôi tụ họp."
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
    "c": "戚",
    "p": "qi",
    "type": "半包围结构 · Bán bao vây",
    "st": 11,
    "ord": "戊 bao ngoài → 尗 trong",
    "rad": "戈 (qua – vũ khí)",
    "mean": "thân thích",
    "tip": "Chữ mượn âm, kết hợp 亲(thân, gần gũi) thành 亲戚 = HỌ HÀNG THÂN THÍCH (người thân gần gũi trong dòng họ).",
    "cf": "戚 dễ nhầm với 戏 (xì – \"trò chơi, kịch\")",
    "w": "亲戚 / 亲戚朋友 / 探亲"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Ăn Tết tôi thường cùng bố mẹ đi thăm họ hàng.",
    "answer": "过春节时，我常常和父母一起去走亲戚。",
    "answerPy": "Guò Chūnjié shí, wǒ chángcháng hé fùmǔ yìqǐ qù zǒu qīnqi.",
    "note": "走亲戚 = đi thăm họ hàng.",
    "pair": "和……一起去走亲戚"
   },
   {
    "promptLang": "vi",
    "prompt": "Không chỉ họ hàng mà bạn bè cũng đều đến giúp.",
    "answer": "不光亲戚，朋友们也都来帮忙了。",
    "answerPy": "Bùguāng qīnqi, péngyoumen yě dōu lái bāngmáng le.",
    "note": "Ôn 不光……也…… (Bài 3 · điểm 2).",
    "pair": "不光……，……也……"
   }
  ]
 },
 {
  "n": 36,
  "zh": "按",
  "py": "àn",
  "pos": "Giới từ / Động từ",
  "vn": "theo, dựa theo; ấn, bấm",
  "hv": "án",
  "em": "👆",
  "lesson": 4,
  "explain": [
   "Giới từ: theo, dựa theo (按要求, 按说明, 按时 = đúng giờ). Động từ: ấn, bấm (按一下, 按门铃). Trong bài: 按她提出的要求 = theo yêu cầu chị ấy đưa ra."
  ],
  "usage": "按 + 要求 / 说明 / 计划 + V · 按时 · 按一下.",
  "collo": [
   "按要求",
   "按说明",
   "按时",
   "按一下"
  ],
  "colloFull": [
   {
    "zh": "按要求",
    "py": "Àn yāoqiú",
    "vn": "theo yêu cầu"
   },
   {
    "zh": "按说明",
    "py": "Àn shuōmíng",
    "vn": "theo hướng dẫn"
   },
   {
    "zh": "按时",
    "py": "Ànshí",
    "vn": "đúng giờ"
   },
   {
    "zh": "按一下",
    "py": "Àn yíxià",
    "vn": "ấn một cái"
   }
  ],
  "patterns": [
   {
    "s": "按 + N + V",
    "m": "làm gì theo …"
   },
   {
    "s": "按 + 一下",
    "m": "ấn một cái (động từ)"
   }
  ],
  "ex_zh": "服务人员就会按她提出的要求上门照顾小猫。",
  "ex_py": "Fúwù rényuán jiù huì àn tā tíchū de yāoqiú shàngmén zhàogu xiǎomāo.",
  "ex_vn": "Nhân viên phục vụ sẽ đến tận nhà chăm sóc mèo con theo yêu cầu chị đưa ra.",
  "exList": [
   {
    "zh": "服务人员就会按她提出的要求上门照顾小猫。",
    "py": "Fúwù rényuán jiù huì àn tā tíchū de yāoqiú shàngmén zhàogu xiǎomāo.",
    "vn": "Nhân viên phục vụ sẽ đến tận nhà chăm sóc mèo con theo yêu cầu chị đưa ra."
   },
   {
    "zh": "你从手机上打开使用说明，按说明一步一步做就行了。",
    "py": "Nǐ cóng shǒujī shàng dǎkāi shǐyòng shuōmíng, àn shuōmíng yí bù yi bù zuò jiù xíng le.",
    "vn": "Bạn mở hướng dẫn sử dụng trên điện thoại, cứ làm theo hướng dẫn từng bước là được."
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
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Hãy làm theo yêu cầu của thầy giáo.",
    "answer": "请按老师的要求做。",
    "answerPy": "Qǐng àn lǎoshī de yāoqiú zuò.",
    "note": "按 giới từ.",
    "pair": "按 + ……的要求 + V"
   },
   {
    "promptLang": "vi",
    "prompt": "Bạn ấn chỗ này một cái là đèn sáng.",
    "answer": "你按一下这里，灯就亮了。",
    "answerPy": "Nǐ àn yíxià zhèli, dēng jiù liàng le.",
    "note": "按 động từ.",
    "pair": "按一下……，……就……"
   }
  ]
 },
 {
  "n": 37,
  "zh": "提出",
  "py": "tíchū",
  "pos": "Động từ",
  "vn": "đưa ra, nêu ra, đề xuất",
  "hv": "đề xuất",
  "em": "🙋",
  "lesson": 4,
  "explain": [
   "Đưa ra, nêu ra (yêu cầu, ý kiến, đề nghị, vấn đề). Phân biệt với 推出 (tung ra sản phẩm, dịch vụ)."
  ],
  "usage": "提出要求 · 提出建议 · 提出问题 · 提出意见 · 提出来.",
  "collo": [
   "提出要求",
   "提出建议",
   "提出问题",
   "提出意见"
  ],
  "colloFull": [
   {
    "zh": "提出要求",
    "py": "Tíchū yāoqiú",
    "vn": "đưa ra yêu cầu"
   },
   {
    "zh": "提出建议",
    "py": "Tíchū jiànyì",
    "vn": "đưa ra đề xuất"
   },
   {
    "zh": "提出问题",
    "py": "Tíchū wèntí",
    "vn": "nêu vấn đề"
   },
   {
    "zh": "提出意见",
    "py": "Tíchū yìjiàn",
    "vn": "góp ý kiến"
   }
  ],
  "patterns": [
   {
    "s": "提出 + 要求 / 建议 / 问题",
    "m": "đưa ra …"
   },
   {
    "s": "提出 ≠ 推出",
    "m": "ý kiến, yêu cầu ≠ sản phẩm, dịch vụ"
   }
  ],
  "ex_zh": "服务人员就会按她提出的要求上门照顾小猫。",
  "ex_py": "Fúwù rényuán jiù huì àn tā tíchū de yāoqiú shàngmén zhàogu xiǎomāo.",
  "ex_vn": "Nhân viên phục vụ sẽ đến tận nhà chăm sóc mèo con theo yêu cầu chị đưa ra.",
  "exList": [
   {
    "zh": "服务人员就会按她提出的要求上门照顾小猫。",
    "py": "Fúwù rényuán jiù huì àn tā tíchū de yāoqiú shàngmén zhàogu xiǎomāo.",
    "vn": "Nhân viên phục vụ sẽ đến tận nhà chăm sóc mèo con theo yêu cầu chị đưa ra."
   },
   {
    "zh": "他们提出了一个能够更好地保护环境的建议。",
    "py": "Tāmen tíchū le yí gè nénggòu gèng hǎo de bǎohù huánjìng de jiànyì.",
    "vn": "Họ đã đưa ra một đề xuất có thể bảo vệ môi trường tốt hơn."
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
    "prompt": "Nếu có vấn đề gì, mọi người có thể nêu ra bất cứ lúc nào.",
    "answer": "如果有什么问题，大家可以随时提出来。",
    "answerPy": "Rúguǒ yǒu shénme wèntí, dàjiā kěyǐ suíshí tíchū lái.",
    "note": "Ôn bổ ngữ xu hướng 出来 (HSK 3).",
    "pair": "提出来"
   },
   {
    "promptLang": "vi",
    "prompt": "Đối với ý kiến khách hàng đưa ra, chúng tôi rất coi trọng.",
    "answer": "对于客人提出的意见，我们非常重视。",
    "answerPy": "Duìyú kèrén tíchū de yìjiàn, wǒmen fēicháng zhòngshì.",
    "note": "Ôn 对于 (Bài 14 · điểm 4).",
    "pair": "对于……提出的……"
   }
  ]
 },
 {
  "n": 38,
  "zh": "大大",
  "py": "dàdà",
  "pos": "Phó từ",
  "vn": "rất nhiều, đáng kể",
  "hv": "đại đại",
  "em": "📈",
  "lesson": 4,
  "explain": [
   "Phó từ chỉ mức độ rất lớn, đứng trước động từ biểu thị sự thay đổi: 大大减轻 / 大大提高 / 大大方便了. ⚠ Khác 大大的 (tính từ lặp lại: to to) — 大大的眼睛."
  ],
  "usage": "大大 + 减轻 / 提高 / 增加 / 方便 + 了.",
  "collo": [
   "大大减轻",
   "大大提高",
   "大大方便了",
   "大大增加"
  ],
  "colloFull": [
   {
    "zh": "大大减轻",
    "py": "Dàdà jiǎnqīng",
    "vn": "giảm nhẹ rất nhiều"
   },
   {
    "zh": "大大提高",
    "py": "Dàdà tígāo",
    "vn": "nâng cao đáng kể"
   },
   {
    "zh": "大大方便了",
    "py": "Dàdà fāngbiàn le",
    "vn": "tiện hơn rất nhiều"
   },
   {
    "zh": "大大增加",
    "py": "Dàdà zēngjiā",
    "vn": "tăng lên rất nhiều"
   }
  ],
  "patterns": [
   {
    "s": "大大 + V(thay đổi) + 了",
    "m": "… rất nhiều / đáng kể"
   },
   {
    "s": "大大 (phó từ) ≠ 大大的 (tính từ)",
    "m": "rất nhiều ≠ to to"
   }
  ],
  "ex_zh": "服务人员就会按她提出的要求上门照顾小猫，大大减轻了她的压力。",
  "ex_py": "Fúwù rényuán jiù huì àn tā tíchū de yāoqiú shàngmén zhàogu xiǎomāo, dàdà jiǎnqīng le tā de yālì.",
  "ex_vn": "Nhân viên phục vụ sẽ đến tận nhà chăm sóc mèo con theo yêu cầu của chị, giảm nhẹ rất nhiều áp lực cho chị.",
  "exList": [
   {
    "zh": "服务人员就会按她提出的要求上门照顾小猫，大大减轻了她的压力。",
    "py": "Fúwù rényuán jiù huì àn tā tíchū de yāoqiú shàngmén zhàogu xiǎomāo, dàdà jiǎnqīng le tā de yālì.",
    "vn": "Nhân viên phục vụ sẽ đến tận nhà chăm sóc mèo con theo yêu cầu của chị, giảm nhẹ rất nhiều áp lực cho chị."
   },
   {
    "zh": "共享单车大大方便了我们的出行。",
    "py": "Gòngxiǎng dānchē dàdà fāngbiàn le wǒmen de chūxíng.",
    "vn": "Xe đạp công cộng đã làm việc đi lại của chúng ta tiện lợi hơn rất nhiều."
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
    "prompt": "Công nghệ mới đã nâng cao đáng kể chất lượng dịch vụ.",
    "answer": "新技术大大提高了服务质量。",
    "answerPy": "Xīn jìshù dàdà tígāo le fúwù zhìliàng.",
    "note": "大大 + 提高.",
    "pair": "大大 + V + 了 + N"
   },
   {
    "promptLang": "vi",
    "prompt": "Có App này rồi, việc học tiếng Trung của tôi tiện hơn rất nhiều.",
    "answer": "有了这个App，我学中文大大方便了。",
    "answerPy": "Yǒu le zhège App, wǒ xué Zhōngwén dàdà fāngbiàn le.",
    "note": "Ôn 有了……(以后) (HSK 3).",
    "pair": "有了……，……大大……了"
   }
  ]
 },
 {
  "n": 39,
  "zh": "现有",
  "py": "xiànyǒu",
  "pos": "Tính từ",
  "vn": "hiện có",
  "hv": "hiện hữu",
  "em": "📋",
  "lesson": 4,
  "explain": [
   "Hiện có, đang có bây giờ; làm định ngữ: 现有 + N (现有服务人员, 现有条件, 现有的资料). Không dùng làm vị ngữ."
  ],
  "usage": "现有 + N · 现有的 + N.",
  "collo": [
   "现有人员",
   "现有条件",
   "现有的资料",
   "现有技术"
  ],
  "colloFull": [
   {
    "zh": "现有人员",
    "py": "Xiànyǒu rényuán",
    "vn": "nhân viên hiện có"
   },
   {
    "zh": "现有条件",
    "py": "Xiànyǒu tiáojiàn",
    "vn": "điều kiện hiện có"
   },
   {
    "zh": "现有的资料",
    "py": "Xiànyǒu de zīliào",
    "vn": "tài liệu hiện có"
   },
   {
    "zh": "现有技术",
    "py": "Xiànyǒu jìshù",
    "vn": "công nghệ hiện có"
   }
  ],
  "patterns": [
   {
    "s": "现有 + N",
    "m": "… hiện có (định ngữ)"
   },
   {
    "s": "在现有的条件下",
    "m": "trong điều kiện hiện có"
   }
  ],
  "ex_zh": "特别是现有服务人员有些还不够专业，需要重新学习，提高服务质量。",
  "ex_py": "Tèbié shì xiànyǒu fúwù rényuán yǒuxiē hái bú gòu zhuānyè, xūyào chóngxīn xuéxí, tígāo fúwù zhìliàng.",
  "ex_vn": "Đặc biệt là trong số nhân viên phục vụ hiện có, một số người vẫn chưa đủ chuyên nghiệp, cần học lại để nâng cao chất lượng dịch vụ.",
  "exList": [
   {
    "zh": "特别是现有服务人员有些还不够专业，需要重新学习，提高服务质量。",
    "py": "Tèbié shì xiànyǒu fúwù rényuán yǒuxiē hái bú gòu zhuānyè, xūyào chóngxīn xuéxí, tígāo fúwù zhìliàng.",
    "vn": "Đặc biệt là trong số nhân viên phục vụ hiện có, một số người vẫn chưa đủ chuyên nghiệp, cần học lại để nâng cao chất lượng dịch vụ."
   },
   {
    "zh": "现有的资料还不够，我们得再去图书馆找找。",
    "py": "Xiànyǒu de zīliào hái bú gòu, wǒmen děi zài qù túshūguǎn zhǎozhao.",
    "vn": "Tài liệu hiện có vẫn chưa đủ, chúng ta phải đến thư viện tìm thêm."
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
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Trong điều kiện hiện có, chúng ta có thể hoàn thành nhiệm vụ này.",
    "answer": "在现有的条件下，我们能完成这个任务。",
    "answerPy": "Zài xiànyǒu de tiáojiàn xià, wǒmen néng wánchéng zhège rènwu.",
    "note": "在……下 = trong (điều kiện) ….",
    "pair": "在现有的条件下，……"
   },
   {
    "promptLang": "vi",
    "prompt": "Nhân viên hiện có không đủ, công ty quyết định tuyển thêm vài người.",
    "answer": "现有人员不够，公司决定再招几个人。",
    "answerPy": "Xiànyǒu rényuán bú gòu, gōngsī juédìng zài zhāo jǐ gè rén.",
    "note": "Ôn 够 (Bài 5 · điểm 2).",
    "pair": "现有 + N + 不够"
   }
  ]
 }
];
var wuData = [
 {
  "img": "/images/hsk4v3/bai-18/wu-A.webp",
  "label": "厨师",
  "py": "chúshī",
  "letter": "A"
 },
 {
  "img": "/images/hsk4v3/bai-18/wu-B.webp",
  "label": "推",
  "py": "tuī",
  "letter": "B"
 },
 {
  "img": "/images/hsk4v3/bai-18/wu-C.webp",
  "label": "小吃",
  "py": "xiǎochī",
  "letter": "C"
 },
 {
  "img": "/images/hsk4v3/bai-18/wu-D.webp",
  "label": "拍",
  "py": "pāi",
  "letter": "D"
 },
 {
  "img": "/images/hsk4v3/bai-18/wu-E.webp",
  "label": "取",
  "py": "qǔ",
  "letter": "E"
 },
 {
  "img": "/images/hsk4v3/bai-18/wu-F.webp",
  "label": "3D打印机",
  "py": "3D dǎyìnjī",
  "letter": "F"
 }
];
var dialogData = [
 {
  "scene": "学校咖啡馆 · Quán cà phê trong trường (chiều cuối tuần, Annie đạp xe đạp công cộng đến trường của Bạch Gia Nguyệt và Trần Thiên Trung)",
  "anh": "/images/hsk4v3/bai-18/kv-1.webp",
  "nguoi": [
   {
    "ten": "白家月",
    "anh": "/images/hsk4v3/nv/bai.webp"
   },
   {
    "ten": "安妮",
    "anh": "/images/hsk4v3/nv/annie.webp"
   },
   {
    "ten": "陈天中",
    "anh": "/images/hsk4v3/nv/chen.webp"
   }
  ],
  "preQuiz": [
   {
    "q": "安妮是怎么到白家月的学校的？",
    "opts": [
     "先骑车后坐地铁",
     "先坐地铁后骑车",
     "先骑车后坐公交车",
     "先坐公交车后骑车"
    ],
    "ans": 3
   },
   {
    "q": "第一次骑共享单车，需要扫码后再在App上：",
    "opts": [
     "进行支付",
     "完成注册",
     "查看信息",
     "找回密码"
    ],
    "ans": 1
   }
  ],
  "lines": [
   {
    "sp": 0,
    "zh": "安妮，我们在这儿呢。",
    "py": "Ānní, wǒmen zài zhèr ne.",
    "vn": "Annie ơi, bọn mình ở đây này."
   },
   {
    "sp": 1,
    "zh": "天中、家月，你们猜我是怎么过来的？",
    "py": "Tiānzhōng, Jiāyuè, nǐmen cāi wǒ shì zěnme guòlai de?",
    "vn": "Thiên Trung, Gia Nguyệt, các cậu đoán xem tớ đến đây bằng cách nào?"
   },
   {
    "sp": 0,
    "zh": "坐公交车吗？",
    "py": "Zuò gōngjiāochē ma?",
    "vn": "Đi xe buýt à?"
   },
   {
    "sp": 1,
    "zh": "我先坐的公交车，然后骑共享单车，快到那边那个出口时又推了一小段。",
    "py": "Wǒ xiān zuò de gōngjiāochē, ránhòu qí gòngxiǎng dānchē, kuài dào nàbiān nàge chūkǒu shí yòu tuī le yì xiǎo duàn.",
    "vn": "Tớ đi xe buýt trước, sau đó đạp xe đạp công cộng, sắp đến cái cổng ra đằng kia thì lại dắt xe đi bộ một đoạn ngắn."
   },
   {
    "sp": 0,
    "zh": "我看很多人都骑共享单车，我还没骑过呢。",
    "py": "Wǒ kàn hěn duō rén dōu qí gòngxiǎng dānchē, wǒ hái méi qí guò ne.",
    "vn": "Tớ thấy rất nhiều người đi xe đạp công cộng, mà tớ thì chưa đi bao giờ."
   },
   {
    "sp": 2,
    "zh": "我骑过，很方便的。第一次骑的时候，你打开微信，对着共享单车上的二维码扫一下，在App上完成注册就可以了，怎么使用、费用标准什么的App上都有说明。",
    "py": "Wǒ qí guò, hěn fāngbiàn de. Dì yí cì qí de shíhou, nǐ dǎkāi wēixìn, duìzhe gòngxiǎng dānchē shàng de èrwéimǎ sǎo yíxià, zài App shàng wánchéng zhùcè jiù kěyǐ le, zěnme shǐyòng, fèiyong biāozhǔn shénme de App shàng dōu yǒu shuōmíng.",
    "vn": "Tớ đi rồi, tiện lắm. Lần đầu đi, cậu mở WeChat, hướng vào mã QR trên xe đạp quét một cái, hoàn tất đăng ký trên App là được, còn cách sử dụng, mức phí các thứ thì trên App đều có hướng dẫn."
   },
   {
    "sp": 0,
    "zh": "好啊！哪天我出去办事时也试试。",
    "py": "Hǎo a! Nǎ tiān wǒ chūqu bànshì shí yě shìshi.",
    "vn": "Hay đấy! Hôm nào ra ngoài làm việc tớ cũng thử xem."
   }
  ]
 },
 {
  "scene": "学校咖啡馆 · Quán cà phê trong trường (Annie, Bạch Gia Nguyệt và Trần Thiên Trung tiếp tục trò chuyện)",
  "anh": "/images/hsk4v3/bai-18/kv-2.webp",
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
    "ten": "陈天中",
    "anh": "/images/hsk4v3/nv/chen.webp"
   }
  ],
  "preQuiz": [
   {
    "q": "老师留的短视频作业是关于什么的？",
    "opts": [
     "中国美食",
     "饮料广告",
     "校园生活",
     "著名景点"
    ],
    "ans": 0
   },
   {
    "q": "大家觉得安妮他们小组拍的短视频怎么样？",
    "opts": [
     "有些无聊",
     "效果一般",
     "非常精彩",
     "让人感动"
    ],
    "ans": 2
   }
  ],
  "lines": [
   {
    "sp": 0,
    "zh": "差点儿忘了，我给你们看个短视频。",
    "py": "Chàdiǎnr wàng le, wǒ gěi nǐmen kàn gè duǎn shìpín.",
    "vn": "Suýt nữa thì quên, tớ cho các cậu xem một video ngắn."
   },
   {
    "sp": 1,
    "zh": "啊？你们拍的？真不错！",
    "py": "A? Nǐmen pāi de? Zhēn búcuò!",
    "vn": "Hả? Các cậu quay à? Hay thật đấy!"
   },
   {
    "sp": 0,
    "zh": "对！前段时间老师留了个作业，叫各个小组拍个短视频，介绍中国美食。我们小组讨论后决定，由AI小语演厨师，做出中国各地的著名小吃。拍完后，老师说很不错。",
    "py": "Duì! Qián duàn shíjiān lǎoshī liú le gè zuòyè, jiào gègè xiǎozǔ pāi gè duǎn shìpín, jièshào Zhōngguó měishí. Wǒmen xiǎozǔ tǎolùn hòu juédìng, yóu AI Xiǎoyǔ yǎn chúshī, zuòchū Zhōngguó gèdì de zhùmíng xiǎochī. Pāi wán hòu, lǎoshī shuō hěn búcuò.",
    "vn": "Đúng thế! Thời gian trước cô giáo giao một bài tập, bảo các nhóm mỗi nhóm quay một video ngắn giới thiệu ẩm thực Trung Quốc. Nhóm tớ thảo luận xong quyết định để AI Tiểu Ngữ đóng vai đầu bếp, làm ra những món ăn vặt nổi tiếng của các vùng miền Trung Quốc. Quay xong, cô giáo khen rất hay."
   },
   {
    "sp": 2,
    "zh": "嗯，语言也很幽默！",
    "py": "Ǹg, yǔyán yě hěn yōumò!",
    "vn": "Ừ, lời thoại cũng rất hài hước!"
   },
   {
    "sp": 0,
    "zh": "后来这个视频让我同学放到了互联网上，很多人都来点赞。",
    "py": "Hòulái zhège shìpín ràng wǒ tóngxué fàngdào le hùliánwǎng shàng, hěn duō rén dōu lái diǎnzàn.",
    "vn": "Sau đó video này được bạn cùng lớp tớ đăng lên mạng, rất nhiều người vào bấm thích."
   },
   {
    "sp": 1,
    "zh": "看来大家都喜欢这个视频。",
    "py": "Kànlái dàjiā dōu xǐhuan zhège shìpín.",
    "vn": "Xem ra mọi người đều thích video này."
   },
   {
    "sp": 0,
    "zh": "后边我们打算拍第二个、第三个，让小语带大家到中国各地走一走、看一看。",
    "py": "Hòubian wǒmen dǎsuàn pāi dì èr gè, dì sān gè, ràng Xiǎoyǔ dài dàjiā dào Zhōngguó gèdì zǒu yi zǒu, kàn yi kàn.",
    "vn": "Sắp tới bọn tớ định quay video thứ hai, thứ ba, để Tiểu Ngữ dẫn mọi người đi đây đi đó khắp các nơi ở Trung Quốc."
   },
   {
    "sp": 2,
    "zh": "这样大家就能通过你们的视频了解中国了，我支持你们！",
    "py": "Zhèyàng dàjiā jiù néng tōngguò nǐmen de shìpín liǎojiě Zhōngguó le, wǒ zhīchí nǐmen!",
    "vn": "Như vậy mọi người có thể hiểu về Trung Quốc qua video của các cậu rồi, tớ ủng hộ các cậu!"
   }
  ]
 },
 {
  "scene": "科技正在改变我们的生活 · Công nghệ đang thay đổi cuộc sống của chúng ta",
  "anh": "",
  "nguoi": [
   {
    "ten": "小语",
    "anh": "/images/hsk4v3/nv/xiaoyu.webp"
   }
  ],
  "preQuiz": [
   {
    "q": "安妮和朋友们怎么看科技的发展？",
    "opts": [
     "科技发展很快",
     "科技不影响世界",
     "科技改变了人们的生活",
     "科技能帮人减轻工作压力"
    ],
    "ans": 2
   },
   {
    "q": "安妮他们的短视频是用什么拍的？",
    "opts": [
     "相机",
     "手机",
     "电脑",
     "电视"
    ],
    "ans": 1
   }
  ],
  "lines": [
   {
    "sp": 0,
    "zh": "安妮骑共享单车到了白家月、陈天中的学校，三人从共享单车聊到AI眼镜和3D打印机，从绿色经济聊到上门经济。",
    "py": "Ānní qí gòngxiǎng dānchē dào le Bái Jiāyuè, Chén Tiānzhōng de xuéxiào, sān rén cóng gòngxiǎng dānchē liáo dào AI yǎnjìng hé 3D dǎyìnjī, cóng lǜsè jīngjì liáo dào shàngmén jīngjì.",
    "vn": "Annie đạp xe đạp công cộng đến trường của Bạch Gia Nguyệt và Trần Thiên Trung, ba người trò chuyện từ xe đạp công cộng đến kính AI và máy in 3D, từ kinh tế xanh (mô hình kinh tế vừa phát triển kinh tế, vừa tiết kiệm tài nguyên và bảo vệ môi trường) đến kinh tế dịch vụ tận nhà."
   },
   {
    "sp": 0,
    "zh": "科技到底对世界产生了怎样的影响？",
    "py": "Kējì dàodǐ duì shìjiè chǎnshēng le zěnyàng de yǐngxiǎng?",
    "vn": "Rốt cuộc công nghệ đã tạo ra ảnh hưởng như thế nào đối với thế giới?"
   },
   {
    "sp": 0,
    "zh": "他们都认为，科技确实改变了人们的生活。",
    "py": "Tāmen dōu rènwéi, kējì quèshí gǎibiàn le rénmen de shēnghuó.",
    "vn": "Họ đều cho rằng công nghệ quả thực đã thay đổi cuộc sống của con người."
   },
   {
    "sp": 0,
    "zh": "接着，安妮给大家看了她和同学们拍的短视频。",
    "py": "Jiēzhe, Ānní gěi dàjiā kàn le tā hé tóngxuémen pāi de duǎn shìpín.",
    "vn": "Tiếp đó, Annie cho mọi người xem video ngắn mà cô và các bạn cùng lớp đã quay."
   },
   {
    "sp": 0,
    "zh": "安妮说，短视频是用手机拍的，他们装了一些免费的App，仅用几天就拍完了。",
    "py": "Ānní shuō, duǎn shìpín shì yòng shǒujī pāi de, tāmen zhuāng le yìxiē miǎnfèi de App, jǐn yòng jǐ tiān jiù pāi wán le.",
    "vn": "Annie kể, video ngắn được quay bằng điện thoại, họ cài một vài App miễn phí, chỉ mất vài ngày là quay xong."
   },
   {
    "sp": 0,
    "zh": "视频里，小语做的小吃丰富多样，看起来好吃极了。",
    "py": "Shìpín lǐ, Xiǎoyǔ zuò de xiǎochī fēngfù duōyàng, kànqǐlai hǎochī jí le.",
    "vn": "Trong video, các món ăn vặt Tiểu Ngữ làm phong phú đa dạng, trông ngon cực kỳ."
   },
   {
    "sp": 0,
    "zh": "短视频推出后，大家认为非常精彩，白家月和陈天中看后也特别喜欢，并且表示支持他们拍更多的视频。",
    "py": "Duǎn shìpín tuīchū hòu, dàjiā rènwéi fēicháng jīngcǎi, Bái Jiāyuè hé Chén Tiānzhōng kàn hòu yě tèbié xǐhuan, bìngqiě biǎoshì zhīchí tāmen pāi gèng duō de shìpín.",
    "vn": "Sau khi video ngắn được tung ra, mọi người cho rằng rất đặc sắc, Bạch Gia Nguyệt và Trần Thiên Trung xem xong cũng đặc biệt thích, đồng thời bày tỏ ủng hộ họ quay thêm nhiều video nữa."
   }
  ],
  "doan": true
 },
 {
  "scene": "当代新经济——上门经济 · Kinh tế mới thời nay: kinh tế dịch vụ tận nhà",
  "anh": "/images/hsk4v3/bai-18/kv-4.webp",
  "nguoi": [
   {
    "ten": "小语",
    "anh": "/images/hsk4v3/nv/xiaoyu.webp"
   }
  ],
  "preQuiz": [
   {
    "q": "根据课文，上门服务怎么预约？",
    "opts": [
     "直接打电话",
     "在网上预约",
     "在线下预约",
     "让服务员预约"
    ],
    "ans": 1
   },
   {
    "q": "赵女士觉得上门服务怎么样？",
    "opts": [
     "很方便",
     "难预约",
     "价格低",
     "不安全"
    ],
    "ans": 0
   }
  ],
  "lines": [
   {
    "sp": 0,
    "zh": "随着互联网技术的发展，现在又出现了一种新的服务方式——上门经济，就是预约者通过网上预约，让服务人员在合适的时间到家里或者约好的地点服务，服务内容有上门做饭、照顾小动物、取东西等。",
    "py": "Suízhe hùliánwǎng jìshù de fāzhǎn, xiànzài yòu chūxiàn le yì zhǒng xīn de fúwù fāngshì — shàngmén jīngjì, jiùshì yùyuē zhě tōngguò wǎngshang yùyuē, ràng fúwù rényuán zài héshì de shíjiān dào jiāli huòzhě yuēhǎo de dìdiǎn fúwù, fúwù nèiróng yǒu shàngmén zuòfàn, zhàogu xiǎo dòngwù, qǔ dōngxi děng.",
    "vn": "Cùng với sự phát triển của công nghệ Internet, nay lại xuất hiện một hình thức dịch vụ mới — kinh tế dịch vụ tận nhà, tức là người đặt hẹn đặt lịch qua mạng, để nhân viên phục vụ đến nhà hoặc đến địa điểm đã hẹn vào thời gian thích hợp để phục vụ; nội dung dịch vụ có nấu cơm tại nhà, chăm sóc thú cưng, lấy đồ giúp, v.v."
   },
   {
    "sp": 0,
    "zh": "赵女士养了一只猫，由于工作等原因，她需要经常出差，然而又很担心猫的安全。",
    "py": "Zhào nǚshì yǎng le yì zhī māo, yóuyú gōngzuò děng yuányīn, tā xūyào jīngcháng chūchāi, rán'ér yòu hěn dānxīn māo de ānquán.",
    "vn": "Chị Triệu nuôi một con mèo, vì công việc và những lý do khác, chị phải thường xuyên đi công tác, thế nhưng lại rất lo cho sự an toàn của con mèo."
   },
   {
    "sp": 0,
    "zh": "有了上门服务后，她觉得方便多了，不必再找亲戚帮忙。",
    "py": "Yǒu le shàngmén fúwù hòu, tā juéde fāngbiàn duō le, búbì zài zhǎo qīnqi bāngmáng.",
    "vn": "Từ khi có dịch vụ tận nhà, chị thấy tiện hơn nhiều, không cần phải nhờ họ hàng giúp nữa."
   },
   {
    "sp": 0,
    "zh": "每次出差，在网上预约并支付费用后，服务人员就会按她提出的要求上门照顾小猫，大大减轻了她的压力，赵女士也特别满意。",
    "py": "Měi cì chūchāi, zài wǎngshang yùyuē bìng zhīfù fèiyong hòu, fúwù rényuán jiù huì àn tā tíchū de yāoqiú shàngmén zhàogu xiǎomāo, dàdà jiǎnqīng le tā de yālì, Zhào nǚshì yě tèbié mǎnyì.",
    "vn": "Mỗi lần đi công tác, sau khi đặt lịch và thanh toán chi phí trên mạng, nhân viên phục vụ sẽ đến tận nhà chăm sóc mèo con theo yêu cầu chị đưa ra, giảm nhẹ rất nhiều áp lực cho chị, chị Triệu cũng đặc biệt hài lòng."
   },
   {
    "sp": 0,
    "zh": "当然，上门经济也有一些问题，特别是现有服务人员有些还不够专业，需要重新学习，提高服务质量。",
    "py": "Dāngrán, shàngmén jīngjì yě yǒu yìxiē wèntí, tèbié shì xiànyǒu fúwù rényuán yǒuxiē hái bú gòu zhuānyè, xūyào chóngxīn xuéxí, tígāo fúwù zhìliàng.",
    "vn": "Tất nhiên, kinh tế dịch vụ tận nhà cũng có một số vấn đề, đặc biệt là trong đội ngũ nhân viên phục vụ hiện có, một số người vẫn chưa đủ chuyên nghiệp, cần học lại để nâng cao chất lượng dịch vụ."
   }
  ],
  "doan": true
 }
];
var listenData = [
 {
  "audio": "你今天怎么来得这么早？我骑共享单车来的，比坐公交车快多了。我还没骑过呢，难不难？一点儿都不难，打开App，对着车上的二维码扫一下就行了。不过第一次骑要先注册。费用贵吗？不贵，骑半个小时才一块五。",
  "questions": [
   {
    "q": "说话人今天是怎么来的？",
    "opts": [
     "坐公交车",
     "骑共享单车",
     "坐地铁"
    ],
    "ans": 1
   },
   {
    "q": "第一次骑共享单车要先做什么？",
    "opts": [
     "支付费用",
     "找出口",
     "注册"
    ],
    "ans": 2
   }
  ]
 },
 {
  "audio": "妈，下周您过生日，我在网上预约了上门做饭的服务。上门做饭？厨师会到家里来吗？对，厨师会按我们提出的要求做菜，您就不必自己做饭了。那费用贵不贵啊？不贵，跟去饭店吃差不多，还不用出门。",
  "questions": [
   {
    "q": "说话人在网上预约了什么服务？",
    "opts": [
     "上门做饭",
     "上门照顾小猫",
     "上门取快递"
    ],
    "ans": 0
   },
   {
    "q": "厨师会怎么做菜？",
    "opts": [
     "做各地的著名小吃",
     "按他们提出的要求做",
     "只做一道菜"
    ],
    "ans": 1
   }
  ]
 },
 {
  "audio": "你昨天拍的那个短视频呢？我怎么找不到了？别提了，叫我弟弟不小心给删了。啊？那你到底还拍不拍了？拍啊，我们小组已经讨论好了，周末重新拍一个介绍学校的视频。",
  "questions": [
   {
    "q": "那个短视频为什么找不到了？",
    "opts": [
     "还没拍完",
     "放到互联网上了",
     "让弟弟删了"
    ],
    "ans": 2
   },
   {
    "q": "他们周末打算做什么？",
    "opts": [
     "重新拍一个视频",
     "去看弟弟",
     "讨论作业"
    ],
    "ans": 0
   }
  ]
 }
];
var matchData = [
 {
  "left": "骑",
  "right": "共享单车"
 },
 {
  "left": "扫",
  "right": "二维码"
 },
 {
  "left": "完成",
  "right": "注册"
 },
 {
  "left": "支付",
  "right": "费用"
 },
 {
  "left": "演",
  "right": "厨师"
 },
 {
  "left": "中国各地的",
  "right": "著名小吃"
 },
 {
  "left": "预约",
  "right": "上门服务"
 },
 {
  "left": "提出",
  "right": "要求"
 },
 {
  "left": "提高",
  "right": "服务质量"
 },
 {
  "left": "……，然而",
  "right": "又很担心猫的安全"
 }
];
var fillData = [
 {
  "pre": "天中、家月，你们",
  "blank": "猜",
  "post": "我是怎么过来的？",
  "hint": "(đoán)",
  "ans": "猜",
  "exp": "猜 + câu hỏi = đoán xem."
 },
 {
  "pre": "快到那边那个出口时又",
  "blank": "推",
  "post": "了一小段。",
  "hint": "(đẩy, dắt xe)",
  "ans": "推",
  "exp": "推车 = dắt / đẩy xe."
 },
 {
  "pre": "你打开微信，对着共享单车上的",
  "blank": "二维码",
  "post": "扫一下。",
  "hint": "(mã QR)",
  "ans": "二维码",
  "exp": "扫二维码 = quét mã QR."
 },
 {
  "pre": "在App上完成",
  "blank": "注册",
  "post": "就可以了。",
  "hint": "(đăng ký)",
  "ans": "注册",
  "exp": "完成注册 = hoàn tất đăng ký."
 },
 {
  "pre": "",
  "blank": "差点儿",
  "post": "忘了，我给你们看个短视频。",
  "hint": "(suýt nữa)",
  "ans": "差点儿",
  "exp": "差点儿 + V = suýt nữa thì."
 },
 {
  "pre": "我们小组",
  "blank": "讨论",
  "post": "后决定，由AI小语演厨师。",
  "hint": "(thảo luận)",
  "ans": "讨论",
  "exp": "讨论 = thảo luận."
 },
 {
  "pre": "后来这个视频让我同学放到了互联网上，很多人都来",
  "blank": "点赞",
  "post": "。",
  "hint": "(bấm thích)",
  "ans": "点赞",
  "exp": "给……点赞 = bấm thích cho …"
 },
 {
  "pre": "他们装了一些免费的App，",
  "blank": "仅",
  "post": "用几天就拍完了。",
  "hint": "(chỉ)",
  "ans": "仅",
  "exp": "仅 = 只 (văn viết)."
 },
 {
  "pre": "有了上门服务后，她觉得方便多了，",
  "blank": "不必",
  "post": "再找亲戚帮忙。",
  "hint": "(không cần)",
  "ans": "不必",
  "exp": "不必 = 不用 / 不需要."
 },
 {
  "pre": "服务人员就会按她提出的要求上门照顾小猫，",
  "blank": "大大",
  "post": "减轻了她的压力。",
  "hint": "(rất nhiều, đáng kể)",
  "ans": "大大",
  "exp": "大大 + V (减轻 / 提高 / 方便)."
 }
];
var sortData = [
 {
  "words": [
   "快到出口时",
   "，",
   "我",
   "又",
   "推了",
   "一小段",
   "。"
  ],
  "ans": "快到出口时，我又推了一小段。",
  "audio": "快到出口时，我又推了一小段。"
 },
 {
  "words": [
   "后来",
   "这个视频",
   "让",
   "我同学",
   "放到了",
   "互联网上",
   "。"
  ],
  "ans": "后来这个视频让我同学放到了互联网上。",
  "audio": "后来这个视频让我同学放到了互联网上。"
 },
 {
  "words": [
   "科技",
   "到底",
   "对世界",
   "产生了",
   "怎样的",
   "影响",
   "？"
  ],
  "ans": "科技到底对世界产生了怎样的影响？",
  "audio": "科技到底对世界产生了怎样的影响？"
 },
 {
  "words": [
   "她",
   "需要经常出差",
   "，",
   "然而",
   "又",
   "很担心",
   "猫的安全",
   "。"
  ],
  "ans": "她需要经常出差，然而又很担心猫的安全。",
  "audio": "她需要经常出差，然而又很担心猫的安全。"
 },
 {
  "words": [
   "你",
   "打开微信",
   "，",
   "对着",
   "二维码",
   "扫一下",
   "。"
  ],
  "ans": "你打开微信，对着二维码扫一下。",
  "audio": "你打开微信，对着二维码扫一下。"
 },
 {
  "words": [
   "短视频",
   "是",
   "用手机",
   "拍",
   "的",
   "。"
  ],
  "ans": "短视频是用手机拍的。",
  "audio": "短视频是用手机拍的。"
 }
];
var mcData = [
 {
  "q": "中午饿极了，我吃了＿＿面条儿。",
  "opts": [
   "一大碗",
   "一碗大",
   "一很大碗",
   "大一碗"
  ],
  "ans": 0,
  "exp": "一 + 大 + 量词 (+ N): 一大碗面条儿."
 },
 {
  "q": "不好意思，月饼都＿＿我吃了。",
  "opts": [
   "让",
   "把",
   "对",
   "向"
  ],
  "ans": 0,
  "exp": "Bị động khẩu ngữ: 主语 + 让 / 叫 + 宾语 + V + 了."
 },
 {
  "q": "你们到底还来＿＿来？",
  "opts": [
   "不",
   "吗",
   "没",
   "也"
  ],
  "ans": 0,
  "exp": "到底 + V不V; 到底 không đi với 吗."
 },
 {
  "q": "她需要经常出差，＿＿又很担心猫的安全。",
  "opts": [
   "然而",
   "而且",
   "于是",
   "所以"
  ],
  "ans": 0,
  "exp": "Hai vế trái ngược → 然而."
 },
 {
  "q": "第一次骑的时候，在App上完成＿＿就可以了。",
  "opts": [
   "注册",
   "预约",
   "讨论",
   "点赞"
  ],
  "ans": 0,
  "exp": "完成注册 = hoàn tất đăng ký."
 },
 {
  "q": "我们小组讨论后决定，由AI小语＿＿厨师。",
  "opts": [
   "演",
   "拍",
   "推",
   "取"
  ],
  "ans": 0,
  "exp": "演 + vai = đóng vai."
 },
 {
  "q": "视频里，小语做的小吃丰富＿＿，看起来好吃极了。",
  "opts": [
   "多样",
   "著名",
   "现有",
   "大大"
  ],
  "ans": 0,
  "exp": "丰富多样 = phong phú đa dạng."
 },
 {
  "q": "上门经济，就是预约者通过网上＿＿，让服务人员到家里服务。",
  "opts": [
   "预约",
   "推出",
   "提出",
   "说明"
  ],
  "ans": 0,
  "exp": "网上预约 = đặt lịch qua mạng."
 },
 {
  "q": "由于工作等＿＿，她需要经常出差。",
  "opts": [
   "原因",
   "费用",
   "说明",
   "亲戚"
  ],
  "ans": 0,
  "exp": "由于……等原因 = vì … và các lý do khác (ôn 由于 – Bài 2)."
 },
 {
  "q": "服务人员就会＿＿她提出的要求上门照顾小猫。",
  "opts": [
   "按",
   "对",
   "推",
   "取"
  ],
  "ans": 0,
  "exp": "按 + 要求 / 说明 = theo yêu cầu / hướng dẫn."
 }
];
var speakingData = {
 "intro": "Nhấn nút loa nghe câu hỏi (câu hỏi phần Khởi động, câu hỏi đọc hiểu của 4 bài khoá, kể lại bài khoá và thảo luận nhóm), rồi tự ghi âm câu trả lời — cố dùng từ mới và 4 điểm ngữ pháp của bài.",
 "questions": [
  {
   "q_zh": "你喜欢看什么样的短视频？",
   "q_vn": "Bạn thích xem những video ngắn như thế nào?",
   "hint": "我最喜欢看……的短视频，比如……。因为……。不过……，然而……",
   "sample": "我最喜欢看介绍美食和旅游的短视频，比如介绍中国各地著名小吃的视频。这些视频一般只有一两分钟，语言也很幽默，看完以后我就特别想去那个地方走一走、尝一尝。我常常给好看的视频点赞。然而，有时候一看就是一大段时间，作业都忘了写，所以我现在每天只看半个小时。",
   "sample_vn": "Tôi thích nhất là xem video ngắn giới thiệu ẩm thực và du lịch, ví dụ như video giới thiệu các món ăn vặt nổi tiếng của các vùng Trung Quốc. Những video này thường chỉ một hai phút, lời thoại cũng hài hước, xem xong tôi rất muốn đến nơi đó đi dạo, nếm thử. Tôi thường bấm thích cho video hay. Thế nhưng có lúc xem một lúc là cả một quãng thời gian dài, quên cả làm bài, nên bây giờ mỗi ngày tôi chỉ xem nửa tiếng.",
   "note": "Câu hỏi phần Khởi động của sách; dùng 然而 (điểm 4), 一大段 (điểm 1)."
  },
  {
   "q_zh": "你拍过短视频吗？如果拍过，请介绍一下你拍的短视频；如果没拍过，你想不想试试拍短视频？",
   "q_vn": "Bạn đã từng quay video ngắn chưa? Nếu đã quay, hãy giới thiệu video bạn quay; nếu chưa, bạn có muốn thử quay video ngắn không?",
   "hint": "我拍过……。那个视频是用……拍的，……。后来视频让……放到了互联网上，……",
   "sample": "我拍过一个短视频，介绍我们学校的秋天。视频是用手机拍的，我装了一个免费的App，仅用两天就拍完了。后来这个视频让我朋友放到了互联网上，没想到有一百多个人给我点赞。下次我还想拍一个介绍越南小吃的视频，让大家更了解越南。",
   "sample_vn": "Tôi từng quay một video ngắn giới thiệu mùa thu ở trường. Video quay bằng điện thoại, tôi cài một App miễn phí, chỉ mất hai ngày là quay xong. Sau đó video được bạn tôi đăng lên mạng, không ngờ có hơn một trăm người bấm thích. Lần sau tôi còn muốn quay một video giới thiệu món ăn vặt Việt Nam để mọi người hiểu Việt Nam hơn.",
   "note": "Câu hỏi phần Khởi động của sách; dùng câu bị động 让 (điểm 2) + từ mới 仅, 点赞, 小吃."
  },
  {
   "q_zh": "白家月骑过共享单车吗？如果没骑过，她想什么时候骑？第一次骑共享单车时应该做些什么？了解些什么？",
   "q_vn": "Bạch Gia Nguyệt đã đi xe đạp công cộng chưa? Nếu chưa, cô ấy định khi nào đi? Lần đầu đi xe đạp công cộng nên làm gì? Tìm hiểu những gì?",
   "hint": "她还没……。她想哪天……。第一次骑的时候，要先……，对着……扫一下，在App上……。还要了解……",
   "sample": "白家月还没骑过共享单车，她想哪天出去办事时也试试。第一次骑共享单车的时候，要先打开微信，对着共享单车上的二维码扫一下，在App上完成注册。另外，还要了解怎么使用、费用标准什么的，这些App上都有说明。",
   "sample_vn": "Bạch Gia Nguyệt chưa từng đi xe đạp công cộng, cô định hôm nào ra ngoài làm việc cũng sẽ thử. Lần đầu đi, trước tiên mở WeChat, hướng vào mã QR trên xe quét một cái, hoàn tất đăng ký trên App. Ngoài ra còn phải tìm hiểu cách sử dụng, mức phí…, những thứ này App đều có hướng dẫn.",
   "note": "Câu hỏi bài khoá 1."
  },
  {
   "q_zh": "请根据提示复述课文一。",
   "q_vn": "Dựa vào gợi ý, kể lại bài khoá 1.",
   "hint": "安妮到白家月和陈天中的学校玩，她先坐……，然后……，快到一个出口时又……。白家月说……。陈天中介绍说……。白家月听完表示……",
   "sample": "安妮到白家月和陈天中的学校玩，她先坐的公交车，然后骑共享单车，快到一个出口时又推了一小段。白家月说她看很多人都骑共享单车，但她还没骑过呢。陈天中介绍说，他骑过共享单车，很方便。第一次骑的时候，打开微信，对着共享单车上的二维码扫一下，在App上完成注册就可以了，而且，怎么使用、费用标准什么的App上都有说明。白家月听完表示，她哪天出去办事时也试试。",
   "sample_vn": "Annie đến trường của Bạch Gia Nguyệt và Trần Thiên Trung chơi, cô đi xe buýt trước, sau đó đạp xe đạp công cộng, sắp đến một cổng ra thì lại dắt xe đi một đoạn ngắn… Bạch Gia Nguyệt nghe xong nói hôm nào ra ngoài làm việc cũng sẽ thử.",
   "note": "Bài tập 复述 của sách (trang 88); dùng 一小段 (điểm 1)."
  },
  {
   "q_zh": "老师留作业后，安妮和同学们拍了什么样的短视频？安妮后边还想拍什么短视频？",
   "q_vn": "Sau khi cô giáo giao bài tập, Annie và các bạn đã quay video ngắn như thế nào? Sắp tới Annie còn muốn quay video gì?",
   "hint": "他们小组讨论后决定，由……演……，做出……。后来视频让……放到了……。后边他们打算……，让小语……",
   "sample": "老师叫各个小组拍个短视频，介绍中国美食。安妮他们小组讨论后决定，由AI小语演厨师，做出中国各地的著名小吃。后来这个视频让安妮的同学放到了互联网上，很多人都来点赞。后边他们打算拍第二个、第三个，让小语带大家到中国各地走一走、看一看。",
   "sample_vn": "Cô giáo bảo các nhóm quay video ngắn giới thiệu ẩm thực Trung Quốc. Nhóm Annie thảo luận xong quyết định để AI Tiểu Ngữ đóng vai đầu bếp, làm các món ăn vặt nổi tiếng của các vùng Trung Quốc. Sau đó video được bạn của Annie đăng lên mạng, rất nhiều người vào bấm thích. Sắp tới họ định quay video thứ hai, thứ ba, để Tiểu Ngữ dẫn mọi người đi khắp các nơi ở Trung Quốc.",
   "note": "Câu hỏi bài khoá 2; phân biệt 叫 sai khiến (老师叫各个小组……) và 让 bị động (视频让同学放到了……) — điểm 2; ôn 由 (Bài 15)."
  },
  {
   "q_zh": "安妮和同学们的短视频是怎么拍的？对于安妮他们拍的短视频，白家月和陈天中有什么想法？",
   "q_vn": "Video ngắn của Annie và các bạn được quay như thế nào? Đối với video đó, Bạch Gia Nguyệt và Trần Thiên Trung có suy nghĩ gì?",
   "hint": "短视频是用……拍的，他们装了……，仅用……。对于这个视频，白家月和陈天中……，并且表示……",
   "sample": "短视频是用手机拍的，他们装了一些免费的App，仅用几天就拍完了。对于这个短视频，白家月和陈天中看后都特别喜欢，并且表示支持他们拍更多的视频。",
   "sample_vn": "Video ngắn được quay bằng điện thoại, họ cài vài App miễn phí, chỉ mất vài ngày là quay xong. Đối với video này, Bạch Gia Nguyệt và Trần Thiên Trung xem xong đều rất thích, đồng thời bày tỏ ủng hộ họ quay thêm nhiều video.",
   "note": "Câu hỏi bài khoá 3; ôn 对于 (Bài 14 · điểm 4) và 并且 (Bài 16 · điểm 2)."
  },
  {
   "q_zh": "请根据提示复述课文三。",
   "q_vn": "Dựa vào gợi ý, kể lại bài khoá 3.",
   "hint": "安妮骑……到了白家月、陈天中的学校，三人从……聊到……，从……聊到……。科技到底……？他们都认为……。接着……。安妮说，短视频是……。视频里……。短视频推出后……",
   "sample": "安妮骑共享单车到了白家月、陈天中的学校，三人从共享单车聊到AI眼镜和3D打印机，从绿色经济聊到上门经济。科技到底对世界产生了怎样的影响？他们都认为，科技确实改变了人们的生活。接着，安妮给大家看了她和同学们拍的短视频。安妮说，短视频是用手机拍的，他们装了一些免费的App，仅用几天就拍完了。视频里，小语做的小吃丰富多样，看起来好吃极了。短视频推出后，大家认为非常精彩，白家月和陈天中看后也特别喜欢，并且表示支持他们拍更多的视频。",
   "sample_vn": "Annie đạp xe đạp công cộng đến trường của Bạch Gia Nguyệt và Trần Thiên Trung, ba người trò chuyện từ xe đạp công cộng đến kính AI và máy in 3D… Bạch Gia Nguyệt và Trần Thiên Trung xem xong cũng rất thích, đồng thời bày tỏ ủng hộ họ quay thêm nhiều video.",
   "note": "Bài tập 复述 của sách (trang 92); dùng 到底 (điểm 3)."
  },
  {
   "q_zh": "什么是上门经济？上门经济还有什么问题？",
   "q_vn": "Kinh tế dịch vụ tận nhà là gì? Kinh tế dịch vụ tận nhà còn có vấn đề gì?",
   "hint": "上门经济就是……通过网上预约，让服务人员……。比如……。上门服务很方便，然而……",
   "sample": "上门经济是一种新的服务方式，就是预约者通过网上预约，让服务人员在合适的时间到家里或者约好的地点服务，比如上门做饭、照顾小动物、取东西等。上门服务很方便，然而也有一些问题，特别是现有服务人员有些还不够专业，需要重新学习，提高服务质量。",
   "sample_vn": "Kinh tế dịch vụ tận nhà là một hình thức dịch vụ mới, tức là người đặt hẹn đặt lịch qua mạng để nhân viên phục vụ đến nhà hoặc đến địa điểm đã hẹn vào thời gian thích hợp, ví dụ nấu cơm tại nhà, chăm sóc thú cưng, lấy đồ giúp… Dịch vụ tận nhà rất tiện, tuy nhiên cũng có một số vấn đề, đặc biệt là một số nhân viên hiện có chưa đủ chuyên nghiệp, cần học lại để nâng cao chất lượng dịch vụ.",
   "note": "Câu hỏi bài khoá 4; dùng 然而 (điểm 4) + ôn 就是说 (Bài 11)."
  },
  {
   "q_zh": "小组讨论：三至四人一组，根据亲身经历，谈谈科技的发展给人们生活带来的便利，讨论后由一人报告小组讨论结果。",
   "q_vn": "Thảo luận nhóm: Nhóm 3–4 người, dựa vào trải nghiệm của bản thân, nói về những tiện lợi mà sự phát triển của công nghệ mang lại cho cuộc sống; thảo luận xong một người báo cáo kết quả của nhóm.",
   "hint": "首先，……共享单车……；其次，……上门服务……；另外，……短视频……。然而……。科技到底……？我们认为……",
   "sample": "大家好！我们小组讨论的题目是“科技的发展给生活带来的便利”。首先是出行。以前我们出门只能坐公交车或者打车，现在路边到处都是共享单车，用手机对着二维码扫一下就能骑，费用也不高。我们组的小王每天都先坐地铁，然后骑一小段共享单车到学校，比以前节约了二十分钟。其次是生活服务。有了上门经济，在网上预约后，就会有人上门做饭、取快递、照顾小动物。小李的姐姐经常出差，她家的猫就是让上门服务人员照顾的，大大减轻了她的压力。另外，短视频也让我们的生活更丰富了。我们用手机就能拍视频，放到互联网上，让更多的人了解我们的生活。然而，科技也带来了一些问题，比如有人一看短视频就是一大段时间。科技到底是好还是坏？我们认为，关键是怎么用它。只要合理使用，科技就会让我们的生活越来越方便。",
   "sample_vn": "Chào cả lớp! Chủ đề nhóm em thảo luận là “Những tiện lợi mà sự phát triển công nghệ mang lại cho cuộc sống”. Trước hết là đi lại. Trước đây ra ngoài chỉ có thể đi xe buýt hoặc gọi taxi, bây giờ ven đường đâu đâu cũng có xe đạp công cộng, dùng điện thoại quét mã QR là đi được, phí cũng không cao. Bạn Vương trong nhóm em ngày nào cũng đi tàu điện ngầm trước rồi đạp xe công cộng một đoạn ngắn đến trường, tiết kiệm được hai mươi phút so với trước. Tiếp theo là dịch vụ sinh hoạt. Có kinh tế dịch vụ tận nhà, đặt lịch trên mạng là sẽ có người đến nấu cơm, lấy bưu kiện, chăm sóc thú cưng. Chị của bạn Lý thường xuyên đi công tác, con mèo nhà chị ấy chính là do nhân viên dịch vụ tận nhà chăm sóc, giảm nhẹ rất nhiều áp lực cho chị. Ngoài ra, video ngắn cũng làm cuộc sống phong phú hơn. Chỉ cần điện thoại là quay được video, đăng lên mạng để nhiều người hiểu cuộc sống của chúng ta hơn. Tuy nhiên, công nghệ cũng mang lại một số vấn đề, ví dụ có người cứ xem video ngắn là mất cả một quãng thời gian dài. Rốt cuộc công nghệ tốt hay xấu? Chúng em cho rằng mấu chốt là dùng nó như thế nào. Chỉ cần sử dụng hợp lý, công nghệ sẽ làm cuộc sống ngày càng tiện lợi.",
   "note": "Hoạt động 任务活动 · 小组讨论 (thảo luận nhóm) của sách, trang 96 — dùng đủ 4 điểm ngữ pháp: 一小段 / 一大段, 让 bị động, 到底, 然而; ôn 首先……其次…… (Bài 14 · điểm 2)."
  }
 ]
};
var translateData = [
 {
  "vi": "Tớ đi xe buýt trước, sau đó đạp xe đạp công cộng, sắp đến cổng ra thì lại dắt xe đi một đoạn ngắn.",
  "zh": "我先坐的公交车，然后骑共享单车，快到出口时又推了一小段。",
  "py": "Wǒ xiān zuò de gōngjiāochē, ránhòu qí gòngxiǎng dānchē, kuài dào chūkǒu shí yòu tuī le yì xiǎo duàn."
 },
 {
  "vi": "Sau đó video này được bạn cùng lớp tôi đăng lên mạng, rất nhiều người vào bấm thích.",
  "zh": "后来这个视频让我同学放到了互联网上，很多人都来点赞。",
  "py": "Hòulái zhège shìpín ràng wǒ tóngxué fàngdào le hùliánwǎng shàng, hěn duō rén dōu lái diǎnzàn."
 },
 {
  "vi": "Rốt cuộc công nghệ đã tạo ra ảnh hưởng như thế nào đối với thế giới?",
  "zh": "科技到底对世界产生了怎样的影响？",
  "py": "Kējì dàodǐ duì shìjiè chǎnshēng le zěnyàng de yǐngxiǎng?"
 },
 {
  "vi": "Chị ấy phải thường xuyên đi công tác, thế nhưng lại rất lo cho sự an toàn của con mèo.",
  "zh": "她需要经常出差，然而又很担心猫的安全。",
  "py": "Tā xūyào jīngcháng chūchāi, rán'ér yòu hěn dānxīn māo de ānquán."
 },
 {
  "vi": "Lần đầu đi, cậu hướng vào mã QR trên xe quét một cái, hoàn tất đăng ký trên App là được.",
  "zh": "第一次骑的时候，你对着车上的二维码扫一下，在App上完成注册就可以了。",
  "py": "Dì yí cì qí de shíhou, nǐ duìzhe chē shàng de èrwéimǎ sǎo yíxià, zài App shàng wánchéng zhùcè jiù kěyǐ le."
 },
 {
  "vi": "Có dịch vụ tận nhà rồi, cô ấy thấy tiện hơn nhiều, không cần nhờ họ hàng giúp nữa.",
  "zh": "有了上门服务后，她觉得方便多了，不必再找亲戚帮忙。",
  "py": "Yǒu le shàngmén fúwù hòu, tā juéde fāngbiàn duō le, búbì zài zhǎo qīnqi bāngmáng."
 }
];
var translateDataRev = [
 {
  "vi": "Nhóm chúng tôi thảo luận xong quyết định để AI Tiểu Ngữ đóng vai đầu bếp.",
  "zh": "我们小组讨论后决定，由AI小语演厨师。",
  "py": "Wǒmen xiǎozǔ tǎolùn hòu juédìng, yóu AI Xiǎoyǔ yǎn chúshī."
 },
 {
  "vi": "Họ cài vài App miễn phí, chỉ mất vài ngày là quay xong.",
  "zh": "他们装了一些免费的App，仅用几天就拍完了。",
  "py": "Tāmen zhuāng le yìxiē miǎnfèi de App, jǐn yòng jǐ tiān jiù pāi wán le."
 },
 {
  "vi": "Các món ăn vặt Tiểu Ngữ làm phong phú đa dạng, trông ngon cực kỳ.",
  "zh": "小语做的小吃丰富多样，看起来好吃极了。",
  "py": "Xiǎoyǔ zuò de xiǎochī fēngfù duōyàng, kànqǐlai hǎochī jí le."
 },
 {
  "vi": "Nhân viên phục vụ sẽ đến tận nhà chăm sóc mèo con theo yêu cầu chị ấy đưa ra.",
  "zh": "服务人员会按她提出的要求上门照顾小猫。",
  "py": "Fúwù rényuán huì àn tā tíchū de yāoqiú shàngmén zhàogu xiǎomāo."
 },
 {
  "vi": "Một số nhân viên phục vụ hiện có vẫn chưa đủ chuyên nghiệp, cần nâng cao chất lượng dịch vụ.",
  "zh": "现有服务人员有些还不够专业，需要提高服务质量。",
  "py": "Xiànyǒu fúwù rényuán yǒuxiē hái bú gòu zhuānyè, xūyào tígāo fúwù zhìliàng."
 }
];
var sgkData = [
 {
  "kieu": "kho",
  "de": "选词填空（一）· 综合练习",
  "vn": "Chọn từ thích hợp điền vào chỗ trống (Bài tập tổng hợp, sách trang 95, câu 1–6). Sách 4下 chưa có đáp án — đây là đáp án tham khảo.",
  "dapSgk": false,
  "tu": [
   "互联网",
   "猜",
   "提出",
   "按",
   "差点儿",
   "各地"
  ],
  "cau": [
   {
    "s": "请大家＿＿一下，我手里拿的是什么东西？",
    "dap": [
     "猜"
    ]
   },
   {
    "s": "你从手机上打开使用说明，＿＿说明一步一步做就行了。",
    "dap": [
     "按"
    ]
   },
   {
    "s": "春节前，＿＿火车站都增加了服务人员，保证大家出行安全。",
    "dap": [
     "各地"
    ]
   },
   {
    "s": "他们＿＿了一个能够更好地保护环境的建议。",
    "dap": [
     "提出"
    ]
   },
   {
    "s": "由于早上起晚了，他们＿＿没赶上飞机。",
    "dap": [
     "差点儿"
    ]
   },
   {
    "s": "＿＿让我们的生活越来越方便，我们可以在网上购物，也可以和在外地的父母视频聊天儿。",
    "dap": [
     "互联网"
    ]
   }
  ]
 },
 {
  "kieu": "kho",
  "de": "选词填空（二）· 综合练习",
  "vn": "Chọn từ thích hợp điền vào chỗ trống (hội thoại, sách trang 95, câu 7–12). Đáp án tham khảo.",
  "dapSgk": false,
  "tu": [
   "推出",
   "不必",
   "到底",
   "讨论",
   "仅",
   "取"
  ],
  "cau": [
   {
    "s": "A：经理，这次调查发现，还是有一些客人对我们酒店的服务不太满意。　B：我们周五开个会，＿＿下怎么解决这个问题。",
    "dap": [
     "讨论"
    ]
   },
   {
    "s": "A：这是什么菜？味道真好，我以前都没吃过。　B：您好，这是我们新＿＿的一道菜，叫香辣鱼块。",
    "dap": [
     "推出"
    ]
   },
   {
    "s": "A：你们的这个小船＿＿是不是用纸做的？　B：是用纸做的，但不是普通的纸。",
    "dap": [
     "到底"
    ]
   },
   {
    "s": "A：我去＿＿个快递，顺便买个早餐，你想吃什么？　B：给我带两个包子吧。",
    "dap": [
     "取"
    ]
   },
   {
    "s": "A：这把伞我明天就还给你。　B：你用吧，＿＿还给我了，我还有一把。",
    "dap": [
     "不必"
    ]
   },
   {
    "s": "A：这道题我们都做不出来，他＿＿用不到五分钟就做出来了。　B：我知道他特别聪明。",
    "dap": [
     "仅"
    ]
   }
  ]
 },
 {
  "kieu": "kho",
  "de": "选择合适的内容完成短文",
  "vn": "Chọn nội dung thích hợp (A–D) hoàn thành đoạn văn (sách trang 96). Đáp án tham khảo.",
  "dapSgk": false,
  "tu": [
   "线上看病一般分为以下几步",
   "病人只要有手机和网络",
   "给人们看病提供了方便",
   "最后才能和医生线上交流"
  ],
  "cau": [
   {
    "s": "随着科技的发展，社会上有了一种新的看病方式——线上看病，互联网医院就这样出现了。＿＿，就可以在互联网医院线上看病。＿＿：首先病人根据病情（bìngqíng, bệnh tình）选择好医院和科室（kēshì, khoa khám bệnh），然后在网上填写姓名、身体情况和看病经历等，＿＿。互联网医院的出现，＿＿，这种方式也越来越受到欢迎。",
    "dap": [
     "病人只要有手机和网络",
     "线上看病一般分为以下几步",
     "最后才能和医生线上交流",
     "给人们看病提供了方便"
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
    "anh": "/images/hsk4v3/bai-18/bt-1.webp",
    "s": "",
    "tu": "小组",
    "dap": "他们小组正在一起讨论怎么完成这个任务。",
    "giai": "小组 làm định ngữ cho chủ ngữ (他们小组 = nhóm của họ); 正在……讨论: đang thảo luận; ôn từ mới 讨论."
   },
   {
    "anh": "/images/hsk4v3/bai-18/bt-2.webp",
    "s": "",
    "tu": "亲戚",
    "dap": "春节的时候，亲戚们都来我家聚会，大家一起拍了一张照片。",
    "giai": "亲戚们 = bà con họ hàng; ôn 拍照片 (từ mới 拍) và lượng từ 张."
   },
   {
    "anh": "/images/hsk4v3/bai-18/bt-3.webp",
    "s": "",
    "tu": "办事",
    "dap": "他今天去银行办事，工作人员正在给他说明怎么填表。",
    "giai": "去 + nơi chốn + 办事 (đi đâu đó làm việc / làm thủ tục); 办事 là động từ li hợp: 办点儿事, 办完事."
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
  "tieuDe": "Viết đoạn văn: 我也想拍个短视频 (写作)",
  "gioiThieu": "Đề 写作 của sách HSK 4 (3.0) yêu cầu viết một đoạn văn ngắn (ít nhất 140 chữ) với nhan đề 「我也想拍个短视频」 — nói em muốn quay video ngắn như thế nào và định quay ra sao, giống phần 书写 của đề thi HSK 4 mới.",
  "buoc": [
   "Đọc kỹ đề: hai yêu cầu bắt buộc — (1) em muốn quay video ngắn VỀ CÁI GÌ (loại video, nội dung), (2) em định quay THẾ NÀO (dùng gì, ai đóng vai, mất bao lâu, đăng ở đâu).",
   "Lập dàn ý theo các câu hỏi gợi ý: vì sao muốn quay → nội dung → cách quay → khó khăn có thể gặp → mong muốn.",
   "Dùng từ mới và 4 điểm ngữ pháp của bài (khung “Từ, cấu trúc nên dùng”): 一大 / 一小 + lượng từ, 让 / 叫 bị động, 到底, 然而.",
   "Nối các ý bằng từ nối: 首先 / 然后 / 其次 (Bài 14) / 另外 / 最后.",
   "Câu mở nêu lý do muốn quay, câu kết nói mong muốn; tự soát số chữ (≥ 140) và lỗi chữ Hán trước khi nộp."
  ]
 },
 "de": "安妮和同学们拍的短视频很有意思，很多人点赞。请以“我也想拍个短视频”为题目，写一篇短文，谈谈你想拍什么样的短视频，想怎么拍，不少于140字。",
 "prompt": "Video ngắn mà Annie và các bạn quay rất thú vị, nhiều người bấm thích. Hãy lấy nhan đề “Tôi cũng muốn quay một video ngắn”, viết một đoạn văn ngắn, nói em muốn quay video ngắn như thế nào, định quay ra sao, không ít hơn 140 chữ.",
 "dan": [
  {
   "hoi": "你为什么也想拍短视频？",
   "goiY": "看了安妮他们的视频以后，我……；很多人……点赞"
  },
  {
   "hoi": "你想拍什么样的短视频？",
   "goiY": "我想拍一个介绍……的短视频，比如……各地的著名小吃"
  },
  {
   "hoi": "你打算怎么拍？用什么拍？谁来演？",
   "goiY": "首先……讨论；然后用手机……，装一个免费的App；由……演……"
  },
  {
   "hoi": "拍的时候可能会遇到什么问题？",
   "goiY": "……很想……，然而……；到底……？"
  },
  {
   "hoi": "拍完以后你想怎么做？",
   "goiY": "让朋友放到互联网上；希望大家通过视频了解……"
  }
 ],
 "tuNen": [
  "拍",
  "短视频",
  "小组",
  "讨论",
  "演",
  "厨师",
  "各地",
  "著名",
  "小吃",
  "互联网",
  "点赞",
  "仅",
  "推出",
  "多样",
  "差点儿"
 ],
 "cauTruc": [
  {
   "ten": "一大 / 一小 + lượng từ",
   "nhan": "一大",
   "vd": "视频里，我要做一大桌子越南菜，让大家看看越南小吃有多丰富。",
   "khi": "Miêu tả nội dung video một cách sinh động, khoa trương."
  },
  {
   "ten": "……让 / 叫 + người + V + ……",
   "nhan": "让",
   "vd": "上次我拍的小视频让朋友放到了互联网上，可是只有几个人点赞。",
   "khi": "Kể lại trải nghiệm cũ (câu bị động — thường nói việc ĐÃ xảy ra)."
  },
  {
   "ten": "……到底……？",
   "nhan": "到底",
   "vd": "拍什么内容大家才喜欢看呢？我们到底应该拍多长时间？",
   "khi": "Nêu câu hỏi băn khoăn khi lên kế hoạch."
  },
  {
   "ten": "……，然而……",
   "nhan": "然而",
   "vd": "我很想拍一个有意思的视频，然而我从来没拍过，有点儿担心。",
   "khi": "Nói về khó khăn có thể gặp."
  },
  {
   "ten": "首先……，然后……",
   "nhan": "首先",
   "vd": "首先和同学们讨论内容，然后用手机拍，最后用免费的App做好。",
   "khi": "Trình bày các bước quay (ôn Bài 14)."
  }
 ],
 "checklist": [
  "Đủ ít nhất 140 chữ Hán chưa?",
  "Có nhan đề 「我也想拍个短视频」 và nói rõ cả hai ý: muốn quay video gì + định quay thế nào chưa?",
  "Đã dùng ít nhất 3 trong 4 điểm ngữ pháp của bài (一大 / 一小 + lượng từ、让 / 叫 bị động、到底、然而) chưa?",
  "Đã dùng ít nhất 6 từ mới của bài chưa?",
  "Đoạn văn có câu mở và câu kết rõ ràng, các bước nối với nhau bằng từ nối chưa?"
 ],
 "model": {
  "zh": "看了安妮他们拍的短视频以后，我也想拍一个。上次我随便拍的一个小视频让朋友放到了互联网上，可是只有几个人点赞，这次我想认真拍一个。我想拍一个介绍越南著名小吃的短视频，让更多的中国朋友了解越南美食。首先，我会和小组的同学一起讨论，选出越南各地最有名的五种小吃。然后，由我来演厨师，在视频里做一大桌子越南菜，一边做一边用中文介绍。视频就用手机拍，再装一个免费的App，顺利的话，仅用一个星期就能拍完。我很想把视频拍得幽默一点儿，然而我从来没拍过视频，也有点儿担心：大家到底喜欢看什么样的内容呢？所以拍之前，我打算先看看别人的视频，多学习学习。拍完以后，我会把它放到互联网上。如果点赞的人很多，我还要推出第二个、第三个，带大家到越南各地走一走、看一看。",
  "py": "Kàn le Ānní tāmen pāi de duǎn shìpín yǐhòu, wǒ yě xiǎng pāi yí gè. Shàng cì wǒ suíbiàn pāi de yí gè xiǎo shìpín ràng péngyou fàngdào le hùliánwǎng shàng, kěshì zhǐyǒu jǐ gè rén diǎnzàn, zhè cì wǒ xiǎng rènzhēn pāi yí gè. Wǒ xiǎng pāi yí gè jièshào Yuènán zhùmíng xiǎochī de duǎn shìpín, ràng gèng duō de Zhōngguó péngyou liǎojiě Yuènán měishí. Shǒuxiān, wǒ huì hé xiǎozǔ de tóngxué yìqǐ tǎolùn, xuǎnchū Yuènán gèdì zuì yǒumíng de wǔ zhǒng xiǎochī. Ránhòu, yóu wǒ lái yǎn chúshī, zài shìpín lǐ zuò yí dà zhuōzi Yuènán cài, yìbiān zuò yìbiān yòng Zhōngwén jièshào. Shìpín jiù yòng shǒujī pāi, zài zhuāng yí gè miǎnfèi de App, shùnlì dehuà, jǐn yòng yí gè xīngqī jiù néng pāi wán. Wǒ hěn xiǎng bǎ shìpín pāi de yōumò yìdiǎnr, rán'ér wǒ cónglái méi pāi guò shìpín, yě yǒudiǎnr dānxīn: dàjiā dàodǐ xǐhuan kàn shénmeyàng de nèiróng ne? Suǒyǐ pāi zhīqián, wǒ dǎsuàn xiān kànkan biérén de shìpín, duō xuéxí xuéxí. Pāi wán yǐhòu, wǒ huì bǎ tā fàngdào hùliánwǎng shàng. Rúguǒ diǎnzàn de rén hěn duō, wǒ hái yào tuīchū dì èr gè, dì sān gè, dài dàjiā dào Yuènán gèdì zǒu yi zǒu, kàn yi kàn."
 }
};
