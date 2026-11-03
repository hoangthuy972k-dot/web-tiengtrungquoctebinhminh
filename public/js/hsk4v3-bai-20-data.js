// HSK 4 (3.0) · Bai 20 — sinh boi tools/hsk4v3/gan.js tu tools/hsk4v3/bai-20/ (dung sua tay).
var vocabData = [
 {
  "n": 1,
  "zh": "堵车",
  "py": "dǔchē",
  "pos": "Động từ",
  "vn": "tắc đường, kẹt xe",
  "hv": "đổ xa",
  "em": "🚗",
  "lesson": 1,
  "explain": [
   "Đường bị tắc, xe cộ không đi được hoặc đi rất chậm.",
   "Là động từ li hợp (堵 + 车): có thể nói 堵了半个小时(的车); hay đi với nơi chốn đứng trước: 路上堵车, 桥上堵车."
  ],
  "usage": "路上堵车 · 堵车了 · 堵得很厉害 · 堵了半个小时(的车).",
  "collo": [
   "路上堵车",
   "堵车很厉害",
   "堵了一个小时",
   "上下班堵车"
  ],
  "colloFull": [
   {
    "zh": "路上堵车",
    "py": "Lùshang dǔchē",
    "vn": "trên đường bị tắc"
   },
   {
    "zh": "堵车很厉害",
    "py": "Dǔchē hěn lìhai",
    "vn": "tắc đường rất nghiêm trọng"
   },
   {
    "zh": "堵了一个小时",
    "py": "Dǔ le yí gè xiǎoshí",
    "vn": "tắc mất một tiếng"
   },
   {
    "zh": "上下班堵车",
    "py": "Shàngxiàbān dǔchē",
    "vn": "tắc đường giờ đi làm, tan làm"
   }
  ],
  "patterns": [
   {
    "s": "(nơi chốn) + 堵车",
    "m": "Nơi chốn đứng trước: 路上堵车 / 桥上堵车"
   },
   {
    "s": "堵 + thời lượng + (的车)",
    "m": "Li hợp: 堵了半个小时(的车)"
   }
  ],
  "ex_zh": "终于上车了，刚刚路上堵车，差点儿晚了。",
  "ex_py": "Zhōngyú shàng chē le, gānggāng lùshang dǔchē, chàdiǎnr wǎn le.",
  "ex_vn": "Cuối cùng cũng lên được tàu, vừa nãy trên đường tắc xe, suýt nữa thì muộn.",
  "exList": [
   {
    "zh": "终于上车了，刚刚路上堵车，差点儿晚了。",
    "py": "Zhōngyú shàng chē le, gānggāng lùshang dǔchē, chàdiǎnr wǎn le.",
    "vn": "Cuối cùng cũng lên được tàu, vừa nãy trên đường tắc xe, suýt nữa thì muộn."
   },
   {
    "zh": "下班时间路上车多，经常堵车。",
    "py": "Xiàbān shíjiān lùshang chē duō, jīngcháng dǔchē.",
    "vn": "Giờ tan tầm trên đường nhiều xe, thường xuyên tắc đường."
   }
  ],
  "hanzi": [
   {
    "c": "堵",
    "p": "dǔ",
    "type": "左右结构 · Trái-phải",
    "st": 11,
    "ord": "土 (thổ) trái → 者 (giả) phải",
    "rad": "土 (thổ – đất)",
    "mean": "chặn, tắc",
    "tip": "Bộ đất 土 (bức tường bằng đất chắn ngang) + 者(biểu âm) → CHẶN LẠI, TẮC NGHẼN, kết hợp 车(xe) thành 堵车 = KẸT XE (xe bị chặn tắc).",
    "cf": "赌 (dǔ – \"cờ bạc\", bộ 贝\")",
    "w": "堵车 / 堵住 / 拥堵"
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
    "prompt": "Hôm nay tắc đường kinh khủng, tôi đến muộn mất nửa tiếng.",
    "answer": "今天堵车堵得很厉害，我晚到了半个小时。",
    "answerPy": "Jīntiān dǔchē dǔ de hěn lìhai, wǒ wǎn dào le bàn gè xiǎoshí.",
    "note": "Ôn 厉害 (Bài 6 · điểm 1) + bổ ngữ trình độ lặp động từ.",
    "pair": "堵车堵得很厉害"
   },
   {
    "promptLang": "vi",
    "prompt": "Đi tàu điện ngầm thì không sợ tắc đường, chắc chắn đến kịp.",
    "answer": "坐地铁的话，不怕堵车，肯定来得及。",
    "answerPy": "Zuò dìtiě de huà, bú pà dǔchē, kěndìng láidejí.",
    "note": "Ôn 来得及 (Bài 4 · điểm 4).",
    "pair": "不怕堵车，来得及"
   }
  ]
 },
 {
  "n": 2,
  "zh": "乘",
  "py": "chéng",
  "pos": "Động từ",
  "vn": "đi, đáp (tàu, xe, máy bay)",
  "hv": "thừa",
  "em": "🚆",
  "lesson": 1,
  "explain": [
   "Đi, ngồi trên phương tiện giao thông — nghĩa như 坐 nhưng trang trọng hơn, hay gặp trong văn viết, thông báo ở ga, sân bay: 乘车, 乘飞机, 乘客 (hành khách).",
   "改乘 = đổi sang đi (chuyến / phương tiện khác)."
  ],
  "usage": "乘 + 车 / 飞机 / 地铁 · 改乘下一趟 · 乘客.",
  "collo": [
   "乘车",
   "乘飞机",
   "改乘下一趟",
   "乘客"
  ],
  "colloFull": [
   {
    "zh": "乘车",
    "py": "Chéng chē",
    "vn": "đi xe"
   },
   {
    "zh": "乘飞机",
    "py": "Chéng fēijī",
    "vn": "đi máy bay"
   },
   {
    "zh": "改乘下一趟",
    "py": "Gǎi chéng xià yí tàng",
    "vn": "đổi sang chuyến sau"
   },
   {
    "zh": "乘客",
    "py": "Chéngkè",
    "vn": "hành khách"
   }
  ],
  "patterns": [
   {
    "s": "乘 + phương tiện",
    "m": "= 坐 + phương tiện (trang trọng hơn)"
   },
   {
    "s": "改乘 + phương tiện / 下一趟",
    "m": "Đổi sang đi …"
   }
  ],
  "ex_zh": "没关系，晚了就改乘下一趟。",
  "ex_py": "Méiguānxì, wǎn le jiù gǎi chéng xià yí tàng.",
  "ex_vn": "Không sao, muộn thì đổi sang đi chuyến sau.",
  "exList": [
   {
    "zh": "没关系，晚了就改乘下一趟。",
    "py": "Méiguānxì, wǎn le jiù gǎi chéng xià yí tàng.",
    "vn": "Không sao, muộn thì đổi sang đi chuyến sau."
   },
   {
    "zh": "要是路上堵车，你们就改乘地铁。",
    "py": "Yàoshi lùshang dǔchē, nǐmen jiù gǎi chéng dìtiě.",
    "vn": "Nếu trên đường tắc xe thì các bạn đổi sang đi tàu điện ngầm."
   }
  ],
  "hanzi": [
   {
    "c": "乘",
    "p": "chéng",
    "type": "独体字 · Chữ đơn thể",
    "st": 10,
    "ord": "禾 → 北 (hai bên)",
    "rad": "丿 (phiệt)",
    "mean": "cưỡi, đi",
    "tip": "Hình người trèo lên cây 木 → LEO LÊN, CƯỠI, ĐI (xe). 乘坐 = đáp (phương tiện), 乘客 = hành khách.",
    "cf": "剩 (shèng – thừa)",
    "w": "乘坐 / 乘客"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Hành khách đi chuyến bay này xin lên máy bay theo thứ tự.",
    "answer": "乘这个航班的旅客请按顺序登机。",
    "answerPy": "Chéng zhège hángbān de lǚkè qǐng àn shùnxù dēngjī.",
    "note": "Từ mới 航班, 旅客, 登机 của bài.",
    "pair": "乘 + 航班"
   },
   {
    "promptLang": "vi",
    "prompt": "Máy bay bị trễ, chúng tôi đành đổi sang đi tàu cao tốc.",
    "answer": "飞机晚点了，我们只好改乘动车。",
    "answerPy": "Fēijī wǎndiǎn le, wǒmen zhǐhǎo gǎi chéng dòngchē.",
    "note": "Ôn 只好 (HSK 3).",
    "pair": "只好改乘……"
   }
  ]
 },
 {
  "n": 3,
  "zh": "难道",
  "py": "nándào",
  "pos": "Phó từ",
  "vn": "lẽ nào, chẳng lẽ",
  "hv": "nan đạo",
  "em": "🤨",
  "lesson": 1,
  "explain": [
   "Phó từ ngữ khí dùng trong câu hỏi tu từ (phản vấn) 「难道……吗？」 để nhấn mạnh: hình thức khẳng định → ý phủ định; hình thức phủ định → ý khẳng định.",
   "Cũng biểu thị phỏng đoán, nghi ngờ: 难道他不来了？ = lẽ nào anh ấy không đến nữa?"
  ],
  "usage": "难道……吗？ · 难道……不……吗？ · 难道你不知道吗？",
  "collo": [
   "难道……吗？",
   "难道你不知道吗？",
   "难道是我错了？",
   "难道他不来了？"
  ],
  "colloFull": [
   {
    "zh": "难道……吗？",
    "py": "Nándào…… ma?",
    "vn": "lẽ nào … sao?"
   },
   {
    "zh": "难道你不知道吗？",
    "py": "Nándào nǐ bù zhīdao ma?",
    "vn": "chẳng lẽ bạn không biết?"
   },
   {
    "zh": "难道是我错了？",
    "py": "Nándào shì wǒ cuò le?",
    "vn": "lẽ nào là tôi sai?"
   },
   {
    "zh": "难道他不来了？",
    "py": "Nándào tā bù lái le?",
    "vn": "chẳng lẽ anh ấy không đến nữa?"
   }
  ],
  "patterns": [
   {
    "s": "难道 + khẳng định + 吗？",
    "m": "= ý phủ định (难道我会骗你吗？ → tôi không lừa bạn đâu)"
   },
   {
    "s": "难道 + phủ định + 吗？",
    "m": "= ý khẳng định (难道你不知道吗？ → bạn phải biết chứ)"
   }
  ],
  "ex_zh": "看你一直不坐下，我还在想，难道你买的是无座票吗？",
  "ex_py": "Kàn nǐ yìzhí bú zuòxia, wǒ hái zài xiǎng, nándào nǐ mǎi de shì wú zuò piào ma?",
  "ex_vn": "Thấy cậu cứ đứng mãi không ngồi, tớ còn đang nghĩ, chẳng lẽ cậu mua vé không có chỗ ngồi à?",
  "exList": [
   {
    "zh": "看你一直不坐下，我还在想，难道你买的是无座票吗？",
    "py": "Kàn nǐ yìzhí bú zuòxia, wǒ hái zài xiǎng, nándào nǐ mǎi de shì wú zuò piào ma?",
    "vn": "Thấy cậu cứ đứng mãi không ngồi, tớ còn đang nghĩ, chẳng lẽ cậu mua vé không có chỗ ngồi à?"
   },
   {
    "zh": "这么冷的天，你只穿了一件衬衫，难道不怕感冒吗？",
    "py": "Zhème lěng de tiān, nǐ zhǐ chuān le yí jiàn chènshān, nándào bú pà gǎnmào ma?",
    "vn": "Trời lạnh thế này mà cậu chỉ mặc mỗi một chiếc áo sơ mi, lẽ nào không sợ bị cảm à?"
   }
  ],
  "hanzi": [
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
    "prompt": "Chuyện này ai cũng biết, lẽ nào bạn không biết?",
    "answer": "这件事大家都知道，难道你不知道吗？",
    "answerPy": "Zhè jiàn shì dàjiā dōu zhīdao, nándào nǐ bù zhīdao ma?",
    "note": "Hình thức phủ định → ý khẳng định.",
    "pair": "难道……不……吗？"
   },
   {
    "promptLang": "vi",
    "prompt": "Tàu sắp chạy rồi mà anh ấy vẫn chưa tới, chẳng lẽ anh ấy không đi nữa?",
    "answer": "车快开了他还没到，难道他不去了？",
    "answerPy": "Chē kuài kāi le tā hái méi dào, nándào tā bú qù le?",
    "note": "Câu ví dụ của sách; ôn 快……了 (HSK 2).",
    "pair": "快……了，难道……？"
   }
  ]
 },
 {
  "n": 4,
  "zh": "无",
  "py": "wú",
  "pos": "Động từ",
  "vn": "không có",
  "hv": "vô",
  "em": "🚫",
  "lesson": 1,
  "explain": [
   "Không có — nghĩa như 没有 nhưng mang màu văn viết, ngắn gọn; hay dùng trong từ ghép, biển báo, vé: 无座 (không có chỗ ngồi), 无人 (không có người), 无法 (không có cách nào), 无聊 (Bài 11)."
  ],
  "usage": "无座票 · 无人 · 无法 + V · 无关.",
  "collo": [
   "无座票",
   "无人",
   "无法解决",
   "无关"
  ],
  "colloFull": [
   {
    "zh": "无座票",
    "py": "Wú zuò piào",
    "vn": "vé không có chỗ ngồi (vé đứng)"
   },
   {
    "zh": "无人",
    "py": "Wú rén",
    "vn": "không có người"
   },
   {
    "zh": "无法解决",
    "py": "Wúfǎ jiějué",
    "vn": "không có cách nào giải quyết"
   },
   {
    "zh": "无关",
    "py": "Wúguān",
    "vn": "không liên quan"
   }
  ],
  "patterns": [
   {
    "s": "无 + N",
    "m": "= 没有 + N (văn viết, ngắn gọn)"
   },
   {
    "s": "有 ↔ 无",
    "m": "有座票 ↔ 无座票"
   }
  ],
  "ex_zh": "难道你买的是无座票吗？",
  "ex_py": "Nándào nǐ mǎi de shì wú zuò piào ma?",
  "ex_vn": "Chẳng lẽ cậu mua vé không có chỗ ngồi à?",
  "exList": [
   {
    "zh": "难道你买的是无座票吗？",
    "py": "Nándào nǐ mǎi de shì wú zuò piào ma?",
    "vn": "Chẳng lẽ cậu mua vé không có chỗ ngồi à?"
   },
   {
    "zh": "节假日火车票很难买，有时候只能买到无座票。",
    "py": "Jiéjiàrì huǒchēpiào hěn nán mǎi, yǒushíhou zhǐnéng mǎidào wú zuò piào.",
    "vn": "Dịp lễ vé tàu rất khó mua, có lúc chỉ mua được vé không có chỗ ngồi."
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
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Vé có chỗ ngồi bán hết rồi, chỉ còn vé không có chỗ ngồi.",
    "answer": "有座票都卖完了，只有无座票了。",
    "answerPy": "Yǒu zuò piào dōu màiwán le, zhǐyǒu wú zuò piào le.",
    "note": "有 ↔ 无.",
    "pair": "有座票 / 无座票"
   },
   {
    "promptLang": "vi",
    "prompt": "Cho dù mua phải vé không có chỗ ngồi, tôi cũng phải về nhà ăn Tết.",
    "answer": "即使买的是无座票，我也要回家过春节。",
    "answerPy": "Jíshǐ mǎi de shì wú zuò piào, wǒ yě yào huíjiā guò Chūnjié.",
    "note": "Ôn 即使……也…… (Bài 11 · điểm 1).",
    "pair": "即使……也……"
   }
  ]
 },
 {
  "n": 5,
  "zh": "动车",
  "py": "dòngchē",
  "pos": "Danh từ",
  "vn": "tàu cao tốc (tàu động lực phân tán)",
  "hv": "động xa",
  "em": "🚄",
  "lesson": 1,
  "explain": [
   "Loại tàu nhanh ở Trung Quốc (số hiệu bắt đầu bằng chữ D), chạy khoảng 200–250 km/h; nhanh hơn tàu thường, chậm hơn 高铁 (tàu cao tốc loại G)."
  ],
  "usage": "坐动车 · 动车票 · 一列动车 · 乘动车去…….",
  "collo": [
   "坐动车",
   "动车票",
   "一列动车",
   "动车站"
  ],
  "colloFull": [
   {
    "zh": "坐动车",
    "py": "Zuò dòngchē",
    "vn": "đi tàu cao tốc"
   },
   {
    "zh": "动车票",
    "py": "Dòngchē piào",
    "vn": "vé tàu cao tốc"
   },
   {
    "zh": "一列动车",
    "py": "Yí liè dòngchē",
    "vn": "một đoàn tàu cao tốc"
   },
   {
    "zh": "动车站",
    "py": "Dòngchē zhàn",
    "vn": "ga tàu cao tốc"
   }
  ],
  "patterns": [
   {
    "s": "坐 / 乘 + 动车 + 去 + nơi chốn",
    "m": "Đi tàu cao tốc đến … (câu liên động)"
   }
  ],
  "ex_zh": "动车车速也挺快啊！",
  "ex_py": "Dòngchē chēsù yě tǐng kuài a!",
  "ex_vn": "Tàu cao tốc tốc độ cũng nhanh ghê!",
  "exList": [
   {
    "zh": "动车车速也挺快啊！",
    "py": "Dòngchē chēsù yě tǐng kuài a!",
    "vn": "Tàu cao tốc tốc độ cũng nhanh ghê!"
   },
   {
    "zh": "从上海坐动车去杭州，一个多小时就到了。",
    "py": "Cóng Shànghǎi zuò dòngchē qù Hángzhōu, yí gè duō xiǎoshí jiù dào le.",
    "vn": "Từ Thượng Hải đi tàu cao tốc đến Hàng Châu, hơn một tiếng là tới."
   }
  ],
  "hanzi": [
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
    "prompt": "Đi tàu cao tốc vừa nhanh vừa thoải mái.",
    "answer": "坐动车既快又舒服。",
    "answerPy": "Zuò dòngchē jì kuài yòu shūfu.",
    "note": "Ôn 既……又…… (Bài 4 · điểm 3).",
    "pair": "既……又……"
   },
   {
    "promptLang": "vi",
    "prompt": "So với đi xe khách, đi tàu cao tốc nhanh hơn nhiều.",
    "answer": "跟坐大巴相比，坐动车快多了。",
    "answerPy": "Gēn zuò dàbā xiāngbǐ, zuò dòngchē kuài duō le.",
    "note": "Ôn 跟……相比 (Bài 8 · điểm 3).",
    "pair": "跟……相比"
   }
  ]
 },
 {
  "n": 6,
  "zh": "车速",
  "py": "chēsù",
  "pos": "Danh từ",
  "vn": "tốc độ xe (tàu)",
  "hv": "xa tốc",
  "em": "🏎️",
  "lesson": 1,
  "explain": [
   "Tốc độ chạy của xe, tàu: 车 (xe) + 速 (速度 – tốc độ)."
  ],
  "usage": "车速很快 · 车速太慢 · 注意车速.",
  "collo": [
   "车速很快",
   "注意车速",
   "车速太慢",
   "车速不能太快"
  ],
  "colloFull": [
   {
    "zh": "车速很快",
    "py": "Chēsù hěn kuài",
    "vn": "tốc độ xe rất nhanh"
   },
   {
    "zh": "注意车速",
    "py": "Zhùyì chēsù",
    "vn": "chú ý tốc độ"
   },
   {
    "zh": "车速太慢",
    "py": "Chēsù tài màn",
    "vn": "tốc độ quá chậm"
   },
   {
    "zh": "车速不能太快",
    "py": "Chēsù bù néng tài kuài",
    "vn": "tốc độ không được quá nhanh"
   }
  ],
  "patterns": [
   {
    "s": "车速 + 快 / 慢",
    "m": "Tính từ làm vị ngữ"
   }
  ],
  "ex_zh": "动车车速也挺快啊！",
  "ex_py": "Dòngchē chēsù yě tǐng kuài a!",
  "ex_vn": "Tàu cao tốc tốc độ cũng nhanh ghê!",
  "exList": [
   {
    "zh": "动车车速也挺快啊！",
    "py": "Dòngchē chēsù yě tǐng kuài a!",
    "vn": "Tàu cao tốc tốc độ cũng nhanh ghê!"
   },
   {
    "zh": "下雨天路滑，开车时一定要注意车速。",
    "py": "Xiàyǔtiān lù huá, kāichē shí yídìng yào zhùyì chēsù.",
    "vn": "Trời mưa đường trơn, khi lái xe nhất định phải chú ý tốc độ."
   }
  ],
  "hanzi": [
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
    "prompt": "Tốc độ của tàu cao tốc nhanh hơn xe khách nhiều.",
    "answer": "动车的车速比大巴快得多。",
    "answerPy": "Dòngchē de chēsù bǐ dàbā kuài de duō.",
    "note": "Ôn câu so sánh 比 + 得多 (HSK 3).",
    "pair": "A比B + Adj + 得多"
   },
   {
    "promptLang": "vi",
    "prompt": "Đường này nhiều xe, tốc độ không thể quá nhanh.",
    "answer": "这条路车多，车速不能太快。",
    "answerPy": "Zhè tiáo lù chē duō, chēsù bù néng tài kuài.",
    "note": "Ôn câu chủ vị làm vị ngữ (这条路 + 车多).",
    "pair": "车速不能太快"
   }
  ]
 },
 {
  "n": 7,
  "zh": "列",
  "py": "liè",
  "pos": "Lượng từ",
  "vn": "đoàn, chuyến (tàu); hàng, dãy",
  "hv": "liệt",
  "em": "🚃",
  "lesson": 1,
  "explain": [
   "Lượng từ cho những vật xếp thành hàng dài, hay gặp nhất với tàu hỏa: 一列火车, 一列动车. Trong bài, 这列车 = chuyến tàu này (列车 cũng là một từ: đoàn tàu)."
  ],
  "usage": "一列火车 · 这列车 · 一列动车.",
  "collo": [
   "一列火车",
   "这列车",
   "一列动车",
   "那列高铁"
  ],
  "colloFull": [
   {
    "zh": "一列火车",
    "py": "Yí liè huǒchē",
    "vn": "một đoàn tàu"
   },
   {
    "zh": "这列车",
    "py": "Zhè lièchē",
    "vn": "chuyến tàu này"
   },
   {
    "zh": "一列动车",
    "py": "Yí liè dòngchē",
    "vn": "một đoàn tàu cao tốc"
   },
   {
    "zh": "那列高铁",
    "py": "Nà liè gāotiě",
    "vn": "đoàn tàu cao tốc loại G kia"
   }
  ],
  "patterns": [
   {
    "s": "数 + 列 + 火车 / 动车",
    "m": "Lượng từ của tàu hỏa"
   },
   {
    "s": "这 / 那 + 列车",
    "m": "Chuyến tàu này / kia"
   }
  ],
  "ex_zh": "这列车晚上七点多到杭州。",
  "ex_py": "Zhè lièchē wǎnshang qī diǎn duō dào Hángzhōu.",
  "ex_vn": "Chuyến tàu này hơn bảy giờ tối đến Hàng Châu.",
  "exList": [
   {
    "zh": "这列车晚上七点多到杭州。",
    "py": "Zhè lièchē wǎnshang qī diǎn duō dào Hángzhōu.",
    "vn": "Chuyến tàu này hơn bảy giờ tối đến Hàng Châu."
   },
   {
    "zh": "我们还没有看清楚，一列火车就快速开了过去。",
    "py": "Wǒmen hái méiyǒu kàn qīngchu, yí liè huǒchē jiù kuàisù kāi le guòqu.",
    "vn": "Chúng tôi còn chưa nhìn rõ, một đoàn tàu đã chạy vụt qua."
   }
  ],
  "hanzi": [
   {
    "c": "列",
    "p": "liè",
    "type": "左右结构 · Trái-phải",
    "st": 6,
    "ord": "歹 trái → 刂 phải",
    "rad": "刂 (đao)",
    "mean": "hàng, liệt kê",
    "tip": "歹 + 刂(dao) → chia thành từng HÀNG → LIỆT. 排列 = sắp xếp; 列车 = đoàn tàu.",
    "cf": "例 (lì – ví dụ, Bài 10)",
    "w": "排列 / 列车 / 列"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Đoàn tàu này chạy từ Bắc Kinh đến Thượng Hải.",
    "answer": "这列火车从北京开到上海。",
    "answerPy": "Zhè liè huǒchē cóng Běijīng kāidào Shànghǎi.",
    "note": "从……到…… (HSK 2).",
    "pair": "这列火车"
   },
   {
    "promptLang": "vi",
    "prompt": "Một đoàn tàu vừa chạy qua, tàu của chúng ta chắc sắp đến rồi.",
    "answer": "一列火车刚开过去，咱们的车应该快到了。",
    "answerPy": "Yí liè huǒchē gāng kāi guòqu, zánmen de chē yīnggāi kuài dào le.",
    "note": "Ôn 应该 (phỏng đoán) + 快……了.",
    "pair": "一列火车……"
   }
  ]
 },
 {
  "n": 8,
  "zh": "晚餐",
  "py": "wǎncān",
  "pos": "Danh từ",
  "vn": "bữa tối",
  "hv": "vãn xan",
  "em": "🍽️",
  "lesson": 1,
  "explain": [
   "Bữa ăn buổi tối — nghĩa như 晚饭 nhưng trang trọng hơn; tương tự 早餐 (bữa sáng), 午餐 (bữa trưa)."
  ],
  "usage": "吃晚餐 · 准备晚餐 · 晚餐时间 · 在车上吃晚餐.",
  "collo": [
   "吃晚餐",
   "准备晚餐",
   "丰富的晚餐",
   "晚餐时间"
  ],
  "colloFull": [
   {
    "zh": "吃晚餐",
    "py": "Chī wǎncān",
    "vn": "ăn tối"
   },
   {
    "zh": "准备晚餐",
    "py": "Zhǔnbèi wǎncān",
    "vn": "chuẩn bị bữa tối"
   },
   {
    "zh": "丰富的晚餐",
    "py": "Fēngfù de wǎncān",
    "vn": "bữa tối thịnh soạn"
   },
   {
    "zh": "晚餐时间",
    "py": "Wǎncān shíjiān",
    "vn": "giờ ăn tối"
   }
  ],
  "patterns": [
   {
    "s": "早餐 / 午餐 / 晚餐",
    "m": "bữa sáng / trưa / tối (trang trọng hơn 早饭 / 午饭 / 晚饭)"
   }
  ],
  "ex_zh": "咱们在车上吃晚餐，到站后就先去西湖吧。",
  "ex_py": "Zánmen zài chē shàng chī wǎncān, dào zhàn hòu jiù xiān qù Xī Hú ba.",
  "ex_vn": "Mình ăn tối trên tàu, đến ga thì đi Tây Hồ trước luôn nhé.",
  "exList": [
   {
    "zh": "咱们在车上吃晚餐，到站后就先去西湖吧。",
    "py": "Zánmen zài chē shàng chī wǎncān, dào zhàn hòu jiù xiān qù Xī Hú ba.",
    "vn": "Mình ăn tối trên tàu, đến ga thì đi Tây Hồ trước luôn nhé."
   },
   {
    "zh": "酒店的晚餐六点开始，七点半结束。",
    "py": "Jiǔdiàn de wǎncān liù diǎn kāishǐ, qī diǎn bàn jiéshù.",
    "vn": "Bữa tối của khách sạn bắt đầu lúc sáu giờ, kết thúc lúc bảy rưỡi."
   }
  ],
  "hanzi": [
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
   },
   {
    "c": "餐",
    "p": "cān",
    "type": "上下结构 · Trên-dưới",
    "st": 16,
    "ord": "歺+又 trên → 食 dưới",
    "rad": "食 (thực – ăn)",
    "mean": "bữa ăn",
    "tip": "Bộ ăn 食 ở dưới + phần trên biểu âm → BỮA ĂN, kết hợp 厅(sảnh) thành 餐厅 = NHÀ HÀNG (ôn lại 客厅 Bài 11).",
    "cf": "同字词: 客厅 / 餐厅 / 大厅",
    "w": "餐厅 / 早餐 / 西餐"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Bữa tối hôm nay rất thịnh soạn, có cá có thịt.",
    "answer": "今天的晚餐很丰富，有鱼有肉。",
    "answerPy": "Jīntiān de wǎncān hěn fēngfù, yǒu yú yǒu ròu.",
    "note": "Ôn 有A有B (Bài 8 · điểm 4) + 丰富 (Bài 11).",
    "pair": "有A有B"
   },
   {
    "promptLang": "vi",
    "prompt": "Bố mẹ tan làm muộn, tối nay để tôi chuẩn bị bữa tối.",
    "answer": "爸爸妈妈下班晚，今天我来准备晚餐。",
    "answerPy": "Bàba māma xiàbān wǎn, jīntiān wǒ lái zhǔnbèi wǎncān.",
    "note": "来 + V: chủ động nhận làm (HSK 3).",
    "pair": "我来准备……"
   }
  ]
 },
 {
  "n": 9,
  "zh": "夜",
  "py": "yè",
  "pos": "Danh từ / Lượng từ",
  "vn": "đêm; (lượng từ) đêm",
  "hv": "dạ",
  "em": "🌙",
  "lesson": 1,
  "explain": [
   "Danh từ: ban đêm — 夜里, 夜晚, 半夜.",
   "Lượng từ đếm số đêm: 三天两夜 (ba ngày hai đêm), 一夜没睡 (cả đêm không ngủ)."
  ],
  "usage": "夜里 · 半夜 · 一夜 · 三天两夜.",
  "collo": [
   "夜里",
   "半夜",
   "一夜没睡",
   "三天两夜"
  ],
  "colloFull": [
   {
    "zh": "夜里",
    "py": "Yèli",
    "vn": "ban đêm"
   },
   {
    "zh": "半夜",
    "py": "Bànyè",
    "vn": "nửa đêm"
   },
   {
    "zh": "一夜没睡",
    "py": "Yí yè méi shuì",
    "vn": "cả đêm không ngủ"
   },
   {
    "zh": "三天两夜",
    "py": "Sān tiān liǎng yè",
    "vn": "ba ngày hai đêm"
   }
  ],
  "patterns": [
   {
    "s": "夜里 / 夜晚 + 的 + N",
    "m": "Danh từ chỉ thời gian làm định ngữ"
   },
   {
    "s": "数 + 夜",
    "m": "Lượng từ: 两夜, 一夜"
   }
  ],
  "ex_zh": "夜里的西湖更美。",
  "ex_py": "Yèli de Xī Hú gèng měi.",
  "ex_vn": "Tây Hồ ban đêm càng đẹp hơn.",
  "exList": [
   {
    "zh": "夜里的西湖更美。",
    "py": "Yèli de Xī Hú gèng měi.",
    "vn": "Tây Hồ ban đêm càng đẹp hơn."
   },
   {
    "zh": "我们在杭州玩了三天两夜。",
    "py": "Wǒmen zài Hángzhōu wán le sān tiān liǎng yè.",
    "vn": "Chúng tôi chơi ở Hàng Châu ba ngày hai đêm."
   }
  ],
  "hanzi": [
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
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Để làm xong tài liệu, anh ấy cả đêm không ngủ.",
    "answer": "为了把材料做完，他一夜没睡。",
    "answerPy": "Wèile bǎ cáiliào zuòwán, tā yí yè méi shuì.",
    "note": "Ôn 为了 + câu chữ 把 (HSK 3).",
    "pair": "为了……，一夜没睡"
   },
   {
    "promptLang": "vi",
    "prompt": "Chuyến du lịch này năm ngày bốn đêm, giá ba nghìn tệ.",
    "answer": "这次旅行五天四夜，价格三千块。",
    "answerPy": "Zhè cì lǚxíng wǔ tiān sì yè, jiàgé sānqiān kuài.",
    "note": "Lượng từ 夜 đứng sau số từ.",
    "pair": "五天四夜"
   }
  ]
 },
 {
  "n": 10,
  "zh": "大巴",
  "py": "dàbā",
  "pos": "Danh từ",
  "vn": "xe khách (xe buýt) cỡ lớn",
  "hv": "đại ba",
  "em": "🚌",
  "lesson": 1,
  "explain": [
   "Xe khách cỡ lớn (chở nhiều người, đi đường dài hoặc đưa đón đoàn du lịch); 巴 phiên âm từ “bus”. Xe nhỏ hơn gọi là 小巴."
  ],
  "usage": "坐大巴 · 机场大巴 · 一辆大巴 · 旅游大巴.",
  "collo": [
   "坐大巴",
   "机场大巴",
   "一辆大巴",
   "旅游大巴"
  ],
  "colloFull": [
   {
    "zh": "坐大巴",
    "py": "Zuò dàbā",
    "vn": "đi xe khách"
   },
   {
    "zh": "机场大巴",
    "py": "Jīchǎng dàbā",
    "vn": "xe buýt sân bay"
   },
   {
    "zh": "一辆大巴",
    "py": "Yí liàng dàbā",
    "vn": "một chiếc xe khách"
   },
   {
    "zh": "旅游大巴",
    "py": "Lǚyóu dàbā",
    "vn": "xe du lịch"
   }
  ],
  "patterns": [
   {
    "s": "坐 + 大巴 + 去 + nơi chốn",
    "m": "Phương tiện + mục đích (câu liên động)"
   },
   {
    "s": "一辆大巴",
    "m": "Lượng từ 辆"
   }
  ],
  "ex_zh": "后天我们坐大巴去苏州，看苏州园林。",
  "ex_py": "Hòutiān wǒmen zuò dàbā qù Sūzhōu, kàn Sūzhōu Yuánlín.",
  "ex_vn": "Ngày kia chúng ta đi xe khách đến Tô Châu, ngắm vườn Tô Châu.",
  "exList": [
   {
    "zh": "后天我们坐大巴去苏州，看苏州园林。",
    "py": "Hòutiān wǒmen zuò dàbā qù Sūzhōu, kàn Sūzhōu Yuánlín.",
    "vn": "Ngày kia chúng ta đi xe khách đến Tô Châu, ngắm vườn Tô Châu."
   },
   {
    "zh": "从机场到市中心，可以坐机场大巴。",
    "py": "Cóng jīchǎng dào shì zhōngxīn, kěyǐ zuò jīchǎng dàbā.",
    "vn": "Từ sân bay vào trung tâm thành phố có thể đi xe buýt sân bay."
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
    "c": "巴",
    "p": "bā",
    "type": "象形字 · Chữ tượng hình",
    "st": 4,
    "ord": "𠃑 → 丨 → 一 → 乚",
    "rad": "巳 (tị) / 乙",
    "mean": "mong mỏi; bám vào; (phiên âm) xe buýt — 大巴",
    "tip": "Vốn vẽ con trăn lớn há miệng; nay hay dùng phiên âm: 巴士 (bus) → 大巴, 小巴; 巴 cũng gợi âm trong 爸 (bà), 吧 (ba), 把 (bǎ), 爬 (pá).",
    "cf": "把 bǎ (cầm, giới từ 把) — thêm 扌; 吧 ba (trợ từ) — thêm 口; 色 sè (màu) — trên có ⺈",
    "w": "大巴 / 巴士 / 尾巴"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Đi xe khách tuy chậm một chút nhưng rẻ hơn tàu cao tốc nhiều.",
    "answer": "坐大巴虽然慢一点儿，但是比动车便宜多了。",
    "answerPy": "Zuò dàbā suīrán màn yìdiǎnr, dànshì bǐ dòngchē piányi duō le.",
    "note": "Ôn 虽然……但是…… (HSK 3).",
    "pair": "虽然……但是……"
   },
   {
    "promptLang": "vi",
    "prompt": "Chúng tôi đi xe khách đến Tô Châu, mất khoảng hai tiếng.",
    "answer": "我们坐大巴去苏州，大约用了两个小时。",
    "answerPy": "Wǒmen zuò dàbā qù Sūzhōu, dàyuē yòng le liǎng gè xiǎoshí.",
    "note": "Ôn 大约 (Bài 13 · điểm 3).",
    "pair": "大约 + thời lượng"
   }
  ]
 },
 {
  "n": 11,
  "zh": "杭州",
  "py": "Hángzhōu",
  "pos": "Danh từ riêng",
  "vn": "Hàng Châu (thủ phủ tỉnh Chiết Giang)",
  "hv": "Hàng Châu",
  "em": "🏞️",
  "lesson": 1,
  "explain": [
   "Thành phố ở miền Đông Trung Quốc, thủ phủ tỉnh Chiết Giang (浙江), nổi tiếng với Tây Hồ và trà Long Tỉnh; câu quen thuộc: 上有天堂，下有苏杭 (trên có thiên đường, dưới có Tô – Hàng)."
  ],
  "usage": "去杭州 · 到杭州 · 杭州西湖.",
  "collo": [
   "去杭州",
   "到杭州",
   "杭州西湖",
   "杭州的茶"
  ],
  "colloFull": [
   {
    "zh": "去杭州",
    "py": "Qù Hángzhōu",
    "vn": "đi Hàng Châu"
   },
   {
    "zh": "到杭州",
    "py": "Dào Hángzhōu",
    "vn": "đến Hàng Châu"
   },
   {
    "zh": "杭州西湖",
    "py": "Hángzhōu Xī Hú",
    "vn": "Tây Hồ Hàng Châu"
   },
   {
    "zh": "杭州的茶",
    "py": "Hángzhōu de chá",
    "vn": "trà Hàng Châu"
   }
  ],
  "patterns": [
   {
    "s": "A + 离 + B + 远 / 近",
    "m": "Khoảng cách (HSK 2)"
   }
  ],
  "ex_zh": "这列车晚上七点多到杭州。",
  "ex_py": "Zhè lièchē wǎnshang qī diǎn duō dào Hángzhōu.",
  "ex_vn": "Chuyến tàu này hơn bảy giờ tối đến Hàng Châu.",
  "exList": [
   {
    "zh": "这列车晚上七点多到杭州。",
    "py": "Zhè lièchē wǎnshang qī diǎn duō dào Hángzhōu.",
    "vn": "Chuyến tàu này hơn bảy giờ tối đến Hàng Châu."
   },
   {
    "zh": "杭州离上海不远，坐动车一个多小时就到了。",
    "py": "Hángzhōu lí Shànghǎi bù yuǎn, zuò dòngchē yí gè duō xiǎoshí jiù dào le.",
    "vn": "Hàng Châu cách Thượng Hải không xa, đi tàu cao tốc hơn một tiếng là tới."
   }
  ],
  "hanzi": [
   {
    "c": "杭",
    "p": "háng",
    "type": "形声字 · Chữ hình thanh",
    "st": 8,
    "ord": "木 → 亢",
    "rad": "木 (mộc – cây)",
    "mean": "Hàng (tên đất: Hàng Châu)",
    "tip": "Cây (木) + 亢 (kàng, gợi âm háng): hầu như chỉ dùng trong 杭州 (Hàng Châu); nhớ: Hàng Châu nhiều cây xanh bên Tây Hồ.",
    "cf": "航 háng (bay, đi thuyền) — bên trái là 舟; 抗 kàng (chống) — bên trái là 扌",
    "w": "杭州 / 苏杭"
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
    "prompt": "Hàng Châu có rất nhiều cảnh đẹp, xem mãi cũng không hết.",
    "answer": "杭州有很多美景，看也看不完。",
    "answerPy": "Hángzhōu yǒu hěn duō měijǐng, kàn yě kàn bu wán.",
    "note": "Mẫu V也V不完 trong tên bài.",
    "pair": "看也看不完"
   },
   {
    "promptLang": "vi",
    "prompt": "Nếu bạn đến Hàng Châu thì nhất định phải đi Tây Hồ.",
    "answer": "要是你去杭州，就一定要去西湖。",
    "answerPy": "Yàoshi nǐ qù Hángzhōu, jiù yídìng yào qù Xī Hú.",
    "note": "Ôn 要是……就…… (Bài 1 · điểm 2).",
    "pair": "要是……就……"
   }
  ]
 },
 {
  "n": 12,
  "zh": "西湖",
  "py": "Xī Hú",
  "pos": "Danh từ riêng",
  "vn": "Tây Hồ (Hàng Châu)",
  "hv": "Tây Hồ",
  "em": "🛶",
  "lesson": 1,
  "explain": [
   "Hồ nổi tiếng ở Hàng Châu, di sản văn hóa thế giới, cảnh đẹp bốn mùa. ⚠ Hồ Tây ở Hà Nội cũng viết 西湖 (河内西湖)."
  ],
  "usage": "去西湖 · 西湖边 · 夜里的西湖.",
  "collo": [
   "去西湖",
   "西湖边",
   "夜里的西湖",
   "杭州西湖"
  ],
  "colloFull": [
   {
    "zh": "去西湖",
    "py": "Qù Xī Hú",
    "vn": "đi Tây Hồ"
   },
   {
    "zh": "西湖边",
    "py": "Xī Hú biān",
    "vn": "bên Tây Hồ"
   },
   {
    "zh": "夜里的西湖",
    "py": "Yèli de Xī Hú",
    "vn": "Tây Hồ ban đêm"
   },
   {
    "zh": "杭州西湖",
    "py": "Hángzhōu Xī Hú",
    "vn": "Tây Hồ Hàng Châu"
   }
  ],
  "patterns": [
   {
    "s": "夜里的 / 春天的 + 西湖",
    "m": "Định ngữ thời gian + 的 + danh từ"
   }
  ],
  "ex_zh": "到站后就先去西湖吧，夜里的西湖更美。",
  "ex_py": "Dào zhàn hòu jiù xiān qù Xī Hú ba, yèli de Xī Hú gèng měi.",
  "ex_vn": "Đến ga thì đi Tây Hồ trước nhé, Tây Hồ ban đêm càng đẹp hơn.",
  "exList": [
   {
    "zh": "到站后就先去西湖吧，夜里的西湖更美。",
    "py": "Dào zhàn hòu jiù xiān qù Xī Hú ba, yèli de Xī Hú gèng měi.",
    "vn": "Đến ga thì đi Tây Hồ trước nhé, Tây Hồ ban đêm càng đẹp hơn."
   },
   {
    "zh": "河内也有一个西湖，晚上很多人去那儿散步。",
    "py": "Hénèi yě yǒu yí gè Xī Hú, wǎnshang hěn duō rén qù nàr sànbù.",
    "vn": "Hà Nội cũng có một Hồ Tây, buổi tối rất nhiều người đến đó đi dạo."
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
    "c": "湖",
    "p": "hú",
    "type": "形声字 · Chữ hình thanh",
    "st": 12,
    "ord": "氵 → 古 → 月",
    "rad": "氵 (thủy – nước)",
    "mean": "hồ (nước)",
    "tip": "Nước (氵) + 胡 (hú, gợi âm): nơi nước đọng lại thành vùng rộng → hồ — 西湖 (Tây Hồ), 湖边 (bên hồ).",
    "cf": "胡 hú (họ Hồ, râu) — không có 氵; 糊 hú (hồ dán, mơ hồ) — bên trái là 米",
    "w": "西湖 / 湖边 / 湖水"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Tây Hồ mùa xuân đẹp nhất, năm nào cũng có rất nhiều du khách.",
    "answer": "春天的西湖最美，每年都有很多游客。",
    "answerPy": "Chūntiān de Xī Hú zuì měi, měinián dōu yǒu hěn duō yóukè.",
    "note": "游客 = du khách.",
    "pair": "春天的西湖"
   },
   {
    "promptLang": "vi",
    "prompt": "Đi dạo bên Tây Hồ, ngay cả người không thích du lịch cũng thấy rất thư thái.",
    "answer": "在西湖边散步，连不喜欢旅行的人也觉得很放松。",
    "answerPy": "Zài Xī Hú biān sànbù, lián bù xǐhuan lǚxíng de rén yě juéde hěn fàngsōng.",
    "note": "Ôn 连……也…… (Bài 17 · điểm 4).",
    "pair": "连……也……"
   }
  ]
 },
 {
  "n": 13,
  "zh": "苏州",
  "py": "Sūzhōu",
  "pos": "Danh từ riêng",
  "vn": "Tô Châu (tỉnh Giang Tô)",
  "hv": "Tô Châu",
  "em": "🏯",
  "lesson": 1,
  "explain": [
   "Thành phố cổ ở tỉnh Giang Tô (江苏), gần Thượng Hải, nổi tiếng với vườn cổ điển và kênh rạch, được gọi là “Venice phương Đông”."
  ],
  "usage": "去苏州 · 苏州园林 · 苏杭.",
  "collo": [
   "去苏州",
   "苏州园林",
   "苏州的小河",
   "从上海到苏州"
  ],
  "colloFull": [
   {
    "zh": "去苏州",
    "py": "Qù Sūzhōu",
    "vn": "đi Tô Châu"
   },
   {
    "zh": "苏州园林",
    "py": "Sūzhōu Yuánlín",
    "vn": "vườn Tô Châu"
   },
   {
    "zh": "苏州的小河",
    "py": "Sūzhōu de xiǎohé",
    "vn": "những con sông nhỏ ở Tô Châu"
   },
   {
    "zh": "从上海到苏州",
    "py": "Cóng Shànghǎi dào Sūzhōu",
    "vn": "từ Thượng Hải đến Tô Châu"
   }
  ],
  "patterns": [
   {
    "s": "上有天堂，下有苏杭",
    "m": "Câu nói ca ngợi Tô Châu – Hàng Châu đẹp như thiên đường"
   }
  ],
  "ex_zh": "后天我们坐大巴去苏州，看苏州园林。",
  "ex_py": "Hòutiān wǒmen zuò dàbā qù Sūzhōu, kàn Sūzhōu Yuánlín.",
  "ex_vn": "Ngày kia chúng ta đi xe khách đến Tô Châu, ngắm vườn Tô Châu.",
  "exList": [
   {
    "zh": "后天我们坐大巴去苏州，看苏州园林。",
    "py": "Hòutiān wǒmen zuò dàbā qù Sūzhōu, kàn Sūzhōu Yuánlín.",
    "vn": "Ngày kia chúng ta đi xe khách đến Tô Châu, ngắm vườn Tô Châu."
   },
   {
    "zh": "苏州园林很有名，每年都有很多外国游客来参观。",
    "py": "Sūzhōu Yuánlín hěn yǒumíng, měinián dōu yǒu hěn duō wàiguó yóukè lái cānguān.",
    "vn": "Vườn Tô Châu rất nổi tiếng, năm nào cũng có nhiều du khách nước ngoài đến tham quan."
   }
  ],
  "hanzi": [
   {
    "c": "苏",
    "p": "sū",
    "type": "形声字 · Chữ hình thanh",
    "st": 7,
    "ord": "艹 → 办",
    "rad": "艹 (thảo – cỏ)",
    "mean": "Tô (Tô Châu, tỉnh Giang Tô); tỉnh lại, hồi phục",
    "tip": "Cỏ (艹) + 办 (dạng giản thể): cây cỏ hồi sinh → tỉnh lại (复苏); nay hay gặp trong tên đất 苏州 (Tô Châu), 江苏 (Giang Tô).",
    "cf": "办 bàn (làm) — không có 艹; 药 yào (thuốc) — dưới là 约",
    "w": "苏州 / 江苏 / 苏杭"
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
    "prompt": "Lần này chúng tôi không những đi Hàng Châu mà còn đi Tô Châu.",
    "answer": "这次我们不仅去了杭州，还去了苏州。",
    "answerPy": "Zhè cì wǒmen bùjǐn qù le Hángzhōu, hái qù le Sūzhōu.",
    "note": "Ôn 不仅……还…… (Bài 3 · điểm 2).",
    "pair": "不仅……还……"
   },
   {
    "promptLang": "vi",
    "prompt": "Ở đây gần Tô Châu thế, sao chúng ta lại không đi Tô Châu chơi một chút?",
    "answer": "这里离苏州这么近，我们为什么不去苏州玩玩呢？",
    "answerPy": "Zhèli lí Sūzhōu zhème jìn, wǒmen wèishénme bú qù Sūzhōu wánwan ne?",
    "note": "Câu phản vấn bằng 为什么 (Bài 20 · điểm 2).",
    "pair": "为什么不……呢？"
   }
  ]
 },
 {
  "n": 14,
  "zh": "苏州园林",
  "py": "Sūzhōu Yuánlín",
  "pos": "Danh từ riêng",
  "vn": "vườn cổ điển Tô Châu",
  "hv": "Tô Châu viên lâm",
  "em": "🌳",
  "lesson": 1,
  "explain": [
   "Quần thể vườn cổ điển ở Tô Châu (như 拙政园, 留园), di sản thế giới; nổi tiếng với núi giả, hồ nước, hành lang bố trí tinh tế. 园林 = vườn cảnh lớn."
  ],
  "usage": "看苏州园林 · 参观苏州园林.",
  "collo": [
   "看苏州园林",
   "参观苏州园林",
   "苏州园林的特点",
   "在苏州园林拍照"
  ],
  "colloFull": [
   {
    "zh": "看苏州园林",
    "py": "Kàn Sūzhōu Yuánlín",
    "vn": "ngắm vườn Tô Châu"
   },
   {
    "zh": "参观苏州园林",
    "py": "Cānguān Sūzhōu Yuánlín",
    "vn": "tham quan vườn Tô Châu"
   },
   {
    "zh": "苏州园林的特点",
    "py": "Sūzhōu Yuánlín de tèdiǎn",
    "vn": "đặc điểm của vườn Tô Châu"
   },
   {
    "zh": "在苏州园林拍照",
    "py": "Zài Sūzhōu Yuánlín pāizhào",
    "vn": "chụp ảnh ở vườn Tô Châu"
   }
  ],
  "patterns": [
   {
    "s": "参观 + 景点",
    "m": "参观苏州园林 / 参观故宫"
   }
  ],
  "ex_zh": "后天我们坐大巴去苏州，看苏州园林。",
  "ex_py": "Hòutiān wǒmen zuò dàbā qù Sūzhōu, kàn Sūzhōu Yuánlín.",
  "ex_vn": "Ngày kia chúng ta đi xe khách đến Tô Châu, ngắm vườn Tô Châu.",
  "exList": [
   {
    "zh": "后天我们坐大巴去苏州，看苏州园林。",
    "py": "Hòutiān wǒmen zuò dàbā qù Sūzhōu, kàn Sūzhōu Yuánlín.",
    "vn": "Ngày kia chúng ta đi xe khách đến Tô Châu, ngắm vườn Tô Châu."
   },
   {
    "zh": "苏州园林很美，一年四季都有不同的美景。",
    "py": "Sūzhōu Yuánlín hěn měi, yì nián sìjì dōu yǒu bùtóng de měijǐng.",
    "vn": "Vườn Tô Châu rất đẹp, bốn mùa trong năm đều có cảnh đẹp khác nhau."
   }
  ],
  "hanzi": [
   {
    "c": "苏",
    "p": "sū",
    "type": "形声字 · Chữ hình thanh",
    "st": 7,
    "ord": "艹 → 办",
    "rad": "艹 (thảo – cỏ)",
    "mean": "Tô (Tô Châu, tỉnh Giang Tô); tỉnh lại, hồi phục",
    "tip": "Cỏ (艹) + 办 (dạng giản thể): cây cỏ hồi sinh → tỉnh lại (复苏); nay hay gặp trong tên đất 苏州 (Tô Châu), 江苏 (Giang Tô).",
    "cf": "办 bàn (làm) — không có 艹; 药 yào (thuốc) — dưới là 约",
    "w": "苏州 / 江苏 / 苏杭"
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
    "prompt": "Vườn Tô Châu du khách rất đông, chúng ta đi sớm một chút nhé.",
    "answer": "苏州园林游客很多，我们早点儿去吧。",
    "answerPy": "Sūzhōu Yuánlín yóukè hěn duō, wǒmen zǎodiǎnr qù ba.",
    "note": "Ôn 早点儿 + V + 吧 (HSK 3).",
    "pair": "早点儿……吧"
   },
   {
    "promptLang": "vi",
    "prompt": "Vườn Tô Châu rốt cuộc đẹp đến mức nào? Bạn tự đi xem là biết.",
    "answer": "苏州园林到底有多美？你自己去看看就知道了。",
    "answerPy": "Sūzhōu Yuánlín dàodǐ yǒu duō měi? Nǐ zìjǐ qù kànkan jiù zhīdao le.",
    "note": "Ôn 到底 (Bài 18 · điểm 3).",
    "pair": "到底……？"
   }
  ]
 },
 {
  "n": 15,
  "zh": "安检",
  "py": "ānjiǎn",
  "pos": "Động từ",
  "vn": "kiểm tra an ninh (soi chiếu)",
  "hv": "an kiểm",
  "em": "🛂",
  "lesson": 2,
  "explain": [
   "Viết tắt của 安全检查 — ở sân bay, ga tàu, tàu điện ngầm, hành khách và hành lý phải qua máy soi.",
   "Cũng dùng như danh từ: 过安检 (qua cửa an ninh), 安检口 (cửa kiểm tra an ninh)."
  ],
  "usage": "安检完 · 过安检 · 安检口 · 排队安检.",
  "collo": [
   "过安检",
   "安检口",
   "排队安检",
   "安检完"
  ],
  "colloFull": [
   {
    "zh": "过安检",
    "py": "Guò ānjiǎn",
    "vn": "qua kiểm tra an ninh"
   },
   {
    "zh": "安检口",
    "py": "Ānjiǎn kǒu",
    "vn": "cửa kiểm tra an ninh"
   },
   {
    "zh": "排队安检",
    "py": "Páiduì ānjiǎn",
    "vn": "xếp hàng kiểm tra an ninh"
   },
   {
    "zh": "安检完",
    "py": "Ānjiǎn wán",
    "vn": "kiểm tra an ninh xong"
   }
  ],
  "patterns": [
   {
    "s": "安检 = 安全 + 检查",
    "m": "Từ rút gọn"
   },
   {
    "s": "V + 完 + 就……",
    "m": "Làm xong việc này thì …"
   }
  ],
  "ex_zh": "安检完就等着登机了。",
  "ex_py": "Ānjiǎn wán jiù děng zhe dēngjī le.",
  "ex_vn": "Kiểm tra an ninh xong là chờ lên máy bay thôi.",
  "exList": [
   {
    "zh": "安检完就等着登机了。",
    "py": "Ānjiǎn wán jiù děng zhe dēngjī le.",
    "vn": "Kiểm tra an ninh xong là chờ lên máy bay thôi."
   },
   {
    "zh": "坐地铁也要安检，所以要提前出门。",
    "py": "Zuò dìtiě yě yào ānjiǎn, suǒyǐ yào tíqián chūmén.",
    "vn": "Đi tàu điện ngầm cũng phải kiểm tra an ninh, vì vậy phải ra khỏi nhà sớm."
   }
  ],
  "hanzi": [
   {
    "c": "安",
    "p": "ān",
    "type": "上下结构 · Trên-dưới",
    "st": 6,
    "ord": "宀 trên → 女 dưới",
    "rad": "宀 (miên)",
    "mean": "yên",
    "tip": "Người phụ nữ 女 ở trong nhà 宀 → YÊN ỔN, AN. 安全, 安静 (Bài 2), 安排 (Bài 6).",
    "cf": "案 (àn – án)",
    "w": "安全 / 安静 / 安排 / 平安"
   },
   {
    "c": "检",
    "p": "jiǎn",
    "type": "左右结构 · Trái-phải",
    "st": 11,
    "ord": "木 trái → 佥 phải (giản thể)",
    "rad": "木 (mộc – gỗ)",
    "mean": "kiểm tra",
    "tip": "木(gỗ, thẻ tre ghi chép) + 佥(mọi người cùng xem) → mọi người cùng XEM XÉT thẻ ghi = KIỂM TRA.",
    "cf": "验 (yàn – \"kiểm nghiệm\", có bộ 马\")",
    "w": "检查 / 检验"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Người qua kiểm tra an ninh rất đông, chúng ta ít nhất phải đến sân bay trước hai tiếng.",
    "answer": "安检的人很多，我们至少要提前两个小时到机场。",
    "answerPy": "Ānjiǎn de rén hěn duō, wǒmen zhìshǎo yào tíqián liǎng gè xiǎoshí dào jīchǎng.",
    "note": "Ôn 至少 (Bài 5 · điểm 1).",
    "pair": "至少要……"
   },
   {
    "promptLang": "vi",
    "prompt": "Qua cửa an ninh xong, chúng tôi ngồi chờ lên máy bay.",
    "answer": "过了安检，我们就坐着等登机。",
    "answerPy": "Guò le ānjiǎn, wǒmen jiù zuò zhe děng dēngjī.",
    "note": "V着 + V (HSK 3).",
    "pair": "坐着等……"
   }
  ]
 },
 {
  "n": 16,
  "zh": "登机",
  "py": "dēngjī",
  "pos": "Động từ",
  "vn": "lên máy bay",
  "hv": "đăng cơ",
  "em": "🛫",
  "lesson": 2,
  "explain": [
   "Lên máy bay (登 = bước lên; 机 = 飞机). 登机牌 = thẻ lên máy bay; 登机口 = cửa ra máy bay."
  ],
  "usage": "开始登机 · 等着登机 · 登机牌 · 登机口.",
  "collo": [
   "开始登机",
   "登机牌",
   "登机口",
   "等着登机"
  ],
  "colloFull": [
   {
    "zh": "开始登机",
    "py": "Kāishǐ dēngjī",
    "vn": "bắt đầu lên máy bay"
   },
   {
    "zh": "登机牌",
    "py": "Dēngjīpái",
    "vn": "thẻ lên máy bay"
   },
   {
    "zh": "登机口",
    "py": "Dēngjī kǒu",
    "vn": "cửa lên máy bay"
   },
   {
    "zh": "等着登机",
    "py": "Děng zhe dēngjī",
    "vn": "chờ lên máy bay"
   }
  ],
  "patterns": [
   {
    "s": "登机 + 牌 / 口 / 时间",
    "m": "Từ ghép liên quan"
   }
  ],
  "ex_zh": "去西安的旅客开始登机，请拿好登机牌按顺序排队。",
  "ex_py": "Qù Xī'ān de lǚkè kāishǐ dēngjī, qǐng náhǎo dēngjīpái àn shùnxù páiduì.",
  "ex_vn": "Hành khách đi Tây An bắt đầu lên máy bay, xin cầm sẵn thẻ lên máy bay và xếp hàng theo thứ tự.",
  "exList": [
   {
    "zh": "去西安的旅客开始登机，请拿好登机牌按顺序排队。",
    "py": "Qù Xī'ān de lǚkè kāishǐ dēngjī, qǐng náhǎo dēngjīpái àn shùnxù páiduì.",
    "vn": "Hành khách đi Tây An bắt đầu lên máy bay, xin cầm sẵn thẻ lên máy bay và xếp hàng theo thứ tự."
   },
   {
    "zh": "还有半个小时就要登机了，我们快走吧。",
    "py": "Hái yǒu bàn gè xiǎoshí jiù yào dēngjī le, wǒmen kuài zǒu ba.",
    "vn": "Còn nửa tiếng nữa là lên máy bay rồi, chúng ta đi nhanh thôi."
   }
  ],
  "hanzi": [
   {
    "c": "登",
    "p": "dēng",
    "type": "上下结构 · Trên-dưới",
    "st": 12,
    "ord": "癶 trên → 豆 dưới",
    "rad": "癶 (bát)",
    "mean": "leo lên",
    "tip": "Hai chân 癶 bước lên bệ 豆 → LEO LÊN, ĐĂNG. 登机 = lên máy bay; 登山 = leo núi; 登记 = đăng ký.",
    "cf": "凳 (dèng – ghế đẩu)",
    "w": "登机牌 / 登山 / 登记"
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
    "prompt": "Còn mười phút nữa là lên máy bay rồi, sao anh ấy vẫn chưa đến?",
    "answer": "还有十分钟就登机了，他怎么还没到？",
    "answerPy": "Hái yǒu shí fēnzhōng jiù dēngjī le, tā zěnme hái méi dào?",
    "note": "Ôn 还有……就……了 (HSK 3).",
    "pair": "还有……就……了"
   },
   {
    "promptLang": "vi",
    "prompt": "Lên máy bay rồi mới phát hiện hộ chiếu không thấy đâu, cô ấy lo cuống lên.",
    "answer": "登机以后才发现护照找不到了，她着急极了。",
    "answerPy": "Dēngjī yǐhòu cái fāxiàn hùzhào zhǎobudào le, tā zháojí jí le.",
    "note": "才 (muộn hơn dự kiến) + Adj + 极了.",
    "pair": "……以后才发现……"
   }
  ]
 },
 {
  "n": 17,
  "zh": "小说",
  "py": "xiǎoshuō",
  "pos": "Danh từ",
  "vn": "tiểu thuyết, truyện",
  "hv": "tiểu thuyết",
  "em": "📖",
  "lesson": 2,
  "explain": [
   "Tác phẩm văn học kể chuyện (truyện ngắn, truyện dài, tiểu thuyết); lượng từ 本 / 部 / 篇."
  ],
  "usage": "看 / 读小说 · 写小说 · 一本小说 · 历史小说.",
  "collo": [
   "看小说",
   "写小说",
   "一本小说",
   "小说家"
  ],
  "colloFull": [
   {
    "zh": "看小说",
    "py": "Kàn xiǎoshuō",
    "vn": "đọc tiểu thuyết"
   },
   {
    "zh": "写小说",
    "py": "Xiě xiǎoshuō",
    "vn": "viết tiểu thuyết"
   },
   {
    "zh": "一本小说",
    "py": "Yì běn xiǎoshuō",
    "vn": "một cuốn tiểu thuyết"
   },
   {
    "zh": "小说家",
    "py": "Xiǎoshuō jiā",
    "vn": "tiểu thuyết gia"
   }
  ],
  "patterns": [
   {
    "s": "读 / 看 + 小说",
    "m": "đọc tiểu thuyết"
   },
   {
    "s": "一本 / 一部 + 小说",
    "m": "Lượng từ"
   }
  ],
  "ex_zh": "我在读老舍的小说。",
  "ex_py": "Wǒ zài dú Lǎoshě de xiǎoshuō.",
  "ex_vn": "Mình đang đọc tiểu thuyết của Lão Xá.",
  "exList": [
   {
    "zh": "我在读老舍的小说。",
    "py": "Wǒ zài dú Lǎoshě de xiǎoshuō.",
    "vn": "Mình đang đọc tiểu thuyết của Lão Xá."
   },
   {
    "zh": "这本小说太有意思了，我一个晚上就看完了。",
    "py": "Zhè běn xiǎoshuō tài yǒu yìsi le, wǒ yí gè wǎnshang jiù kànwán le.",
    "vn": "Cuốn tiểu thuyết này hay quá, tôi đọc xong chỉ trong một buổi tối."
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
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Cuốn tiểu thuyết này tôi đọc đi đọc lại, đã đọc ba lần rồi.",
    "answer": "这本小说我看了又看，已经看了三遍了。",
    "answerPy": "Zhè běn xiǎoshuō wǒ kàn le yòu kàn, yǐjīng kàn le sān biàn le.",
    "note": "V了又V + động lượng 遍 (HSK 3).",
    "pair": "看了三遍"
   },
   {
    "promptLang": "vi",
    "prompt": "Tôi thích đọc tiểu thuyết lịch sử, chỉ có điều không có mấy thời gian.",
    "answer": "我喜欢看历史小说，就是没什么时间。",
    "answerPy": "Wǒ xǐhuan kàn lìshǐ xiǎoshuō, jiùshì méi shénme shíjiān.",
    "note": "Ôn ……，就是…… (Bài 3 · điểm 1).",
    "pair": "……，就是……"
   }
  ]
 },
 {
  "n": 18,
  "zh": "航班",
  "py": "hángbān",
  "pos": "Danh từ",
  "vn": "chuyến bay",
  "hv": "hàng ban",
  "em": "✈️",
  "lesson": 2,
  "explain": [
   "Chuyến bay theo lịch cố định của hãng hàng không; mỗi chuyến có số hiệu (航班号)."
  ],
  "usage": "这个航班 · 航班号 · 国际航班 · 航班晚点.",
  "collo": [
   "航班号",
   "国际航班",
   "航班晚点",
   "早上的航班"
  ],
  "colloFull": [
   {
    "zh": "航班号",
    "py": "Hángbān hào",
    "vn": "số hiệu chuyến bay"
   },
   {
    "zh": "国际航班",
    "py": "Guójì hángbān",
    "vn": "chuyến bay quốc tế"
   },
   {
    "zh": "航班晚点",
    "py": "Hángbān wǎndiǎn",
    "vn": "chuyến bay bị trễ"
   },
   {
    "zh": "早上的航班",
    "py": "Zǎoshang de hángbān",
    "vn": "chuyến bay buổi sáng"
   }
  ],
  "patterns": [
   {
    "s": "这个 / 那个 + 航班",
    "m": "Lượng từ 个"
   },
   {
    "s": "航班 + 起飞 / 到达 / 晚点",
    "m": "Chuyến bay cất cánh / hạ cánh / bị trễ"
   }
  ],
  "ex_zh": "航班的值机员在叫大家登机呢。",
  "ex_py": "Hángbān de zhíjī yuán zài jiào dàjiā dēngjī ne.",
  "ex_vn": "Nhân viên làm thủ tục của chuyến bay đang gọi mọi người lên máy bay kìa.",
  "exList": [
   {
    "zh": "航班的值机员在叫大家登机呢。",
    "py": "Hángbān de zhíjī yuán zài jiào dàjiā dēngjī ne.",
    "vn": "Nhân viên làm thủ tục của chuyến bay đang gọi mọi người lên máy bay kìa."
   },
   {
    "zh": "因为天气不好，今天很多航班都晚点了。",
    "py": "Yīnwèi tiānqì bù hǎo, jīntiān hěn duō hángbān dōu wǎndiǎn le.",
    "vn": "Vì thời tiết xấu, hôm nay rất nhiều chuyến bay đều bị trễ."
   }
  ],
  "hanzi": [
   {
    "c": "航",
    "p": "háng",
    "type": "左右结构 · Trái-phải",
    "st": 10,
    "ord": "舟 trái → 亢 phải",
    "rad": "舟 (chu)",
    "mean": "đi thuyền, bay",
    "tip": "Thuyền 舟 + 亢 → đi thuyền → mở rộng: HÀNG không. 航班 = chuyến bay; 航空 = hàng không.",
    "cf": "船 (chuán – thuyền)",
    "w": "航班 / 航空 / 航空公司"
   },
   {
    "c": "班",
    "p": "bān",
    "type": "左右结构 · Trái-phải",
    "st": 10,
    "ord": "王 trái → 刂 → 王 (biến thể lặp)",
    "rad": "王 (vương – bộ ngọc)",
    "mean": "ca làm việc, lớp",
    "tip": "Hai bộ 王 (ngọc) được 刂 (dao) CHIA thành từng phần đều nhau → chia thành từng NHÓM, từng CA làm việc.",
    "cf": "班 dễ nhầm với 斑 (bān – \"đốm, vằn\")",
    "w": "加班 / 上班 / 班级"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Chuyến bay của bạn mấy giờ cất cánh?",
    "answer": "你的航班几点起飞？",
    "answerPy": "Nǐ de hángbān jǐ diǎn qǐfēi?",
    "note": "起飞 (HSK 3).",
    "pair": "航班 + 起飞"
   },
   {
    "promptLang": "vi",
    "prompt": "Mưa to rồi, nói không chừng chuyến bay sẽ bị trễ.",
    "answer": "下大雨了，说不定航班会晚点。",
    "answerPy": "Xià dàyǔ le, shuōbudìng hángbān huì wǎndiǎn.",
    "note": "Ôn 说不定 (Bài 16 · điểm 3).",
    "pair": "说不定……"
   }
  ]
 },
 {
  "n": 19,
  "zh": "值机",
  "py": "zhíjī",
  "pos": "Động từ",
  "vn": "làm thủ tục lên máy bay (check-in)",
  "hv": "trị cơ",
  "em": "🧾",
  "lesson": 2,
  "explain": [
   "Làm thủ tục check-in ở sân bay: xuất trình hộ chiếu / giấy tờ, gửi hành lý, nhận 登机牌. 值机员 = nhân viên làm thủ tục; 网上值机 = check-in trực tuyến."
  ],
  "usage": "值机员 · 网上值机 · 办理值机.",
  "collo": [
   "值机员",
   "网上值机",
   "办理值机",
   "值机时间"
  ],
  "colloFull": [
   {
    "zh": "值机员",
    "py": "Zhíjī yuán",
    "vn": "nhân viên làm thủ tục"
   },
   {
    "zh": "网上值机",
    "py": "Wǎngshang zhíjī",
    "vn": "check-in trực tuyến"
   },
   {
    "zh": "办理值机",
    "py": "Bànlǐ zhíjī",
    "vn": "làm thủ tục check-in"
   },
   {
    "zh": "值机时间",
    "py": "Zhíjī shíjiān",
    "vn": "thời gian check-in"
   }
  ],
  "patterns": [
   {
    "s": "值机 → 安检 → 登机",
    "m": "Trình tự ở sân bay"
   }
  ],
  "ex_zh": "航班的值机员在叫大家登机呢。",
  "ex_py": "Hángbān de zhíjī yuán zài jiào dàjiā dēngjī ne.",
  "ex_vn": "Nhân viên làm thủ tục của chuyến bay đang gọi mọi người lên máy bay kìa.",
  "exList": [
   {
    "zh": "航班的值机员在叫大家登机呢。",
    "py": "Hángbān de zhíjī yuán zài jiào dàjiā dēngjī ne.",
    "vn": "Nhân viên làm thủ tục của chuyến bay đang gọi mọi người lên máy bay kìa."
   },
   {
    "zh": "现在可以在手机上值机，又方便又节约时间。",
    "py": "Xiànzài kěyǐ zài shǒujī shàng zhíjī, yòu fāngbiàn yòu jiéyuē shíjiān.",
    "vn": "Bây giờ có thể check-in trên điện thoại, vừa tiện vừa tiết kiệm thời gian."
   }
  ],
  "hanzi": [
   {
    "c": "值",
    "p": "zhí",
    "type": "左右结构 · Trái-phải",
    "st": 10,
    "ord": "亻 (nhân) trái → 直 (trực) phải",
    "rad": "亻 (nhân – người)",
    "mean": "giá trị",
    "tip": "Bộ người 亻 + 直(thẳng, xứng đáng) → NGƯỜI đánh giá đúng GIÁ TRỊ, kết hợp 得(được) thành 值得 = ĐÁNG (giá), XỨNG ĐÁNG.",
    "cf": "植 (zhí – \"trồng cây\", bộ 木\")",
    "w": "值得 / 价值 / 值班"
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
    "prompt": "Chúng ta đi làm thủ tục check-in trước, sau đó đi kiểm tra an ninh.",
    "answer": "我们首先去值机，然后去安检。",
    "answerPy": "Wǒmen shǒuxiān qù zhíjī, ránhòu qù ānjiǎn.",
    "note": "Ôn 首先……然后…… (Bài 14 · điểm 2).",
    "pair": "首先……然后……"
   },
   {
    "promptLang": "vi",
    "prompt": "Check-in trực tuyến xong là có thể đi thẳng đến cửa an ninh.",
    "answer": "在网上值机以后，就可以直接去安检了。",
    "answerPy": "Zài wǎngshang zhíjī yǐhòu, jiù kěyǐ zhíjiē qù ānjiǎn le.",
    "note": "……以后，就…… (HSK 3).",
    "pair": "……以后，就……"
   }
  ]
 },
 {
  "n": 20,
  "zh": "旅客",
  "py": "lǚkè",
  "pos": "Danh từ",
  "vn": "hành khách, lữ khách",
  "hv": "lữ khách",
  "em": "🧳",
  "lesson": 2,
  "explain": [
   "Người đi đường, hành khách (đi tàu, máy bay, ở khách sạn). Phân biệt: 游客 = du khách tham quan; 乘客 = người ngồi trên phương tiện."
  ],
  "usage": "各位旅客 · 这位旅客 · 旅客朋友们.",
  "collo": [
   "各位旅客",
   "这位旅客",
   "旅客朋友们",
   "旅客很多"
  ],
  "colloFull": [
   {
    "zh": "各位旅客",
    "py": "Gèwèi lǚkè",
    "vn": "quý vị hành khách"
   },
   {
    "zh": "这位旅客",
    "py": "Zhè wèi lǚkè",
    "vn": "vị hành khách này"
   },
   {
    "zh": "旅客朋友们",
    "py": "Lǚkè péngyoumen",
    "vn": "các bạn hành khách"
   },
   {
    "zh": "旅客很多",
    "py": "Lǚkè hěn duō",
    "vn": "hành khách rất đông"
   }
  ],
  "patterns": [
   {
    "s": "各位旅客 / 旅客朋友们",
    "m": "Cách gọi trong thông báo ở ga, sân bay"
   },
   {
    "s": "旅客 ≈ 乘客 ≠ 游客",
    "m": "hành khách ≈ người đi xe ≠ du khách"
   }
  ],
  "ex_zh": "去西安的旅客开始登机，请拿好登机牌按顺序排队。",
  "ex_py": "Qù Xī'ān de lǚkè kāishǐ dēngjī, qǐng náhǎo dēngjīpái àn shùnxù páiduì.",
  "ex_vn": "Hành khách đi Tây An bắt đầu lên máy bay, xin cầm sẵn thẻ lên máy bay và xếp hàng theo thứ tự.",
  "exList": [
   {
    "zh": "去西安的旅客开始登机，请拿好登机牌按顺序排队。",
    "py": "Qù Xī'ān de lǚkè kāishǐ dēngjī, qǐng náhǎo dēngjīpái àn shùnxù páiduì.",
    "vn": "Hành khách đi Tây An bắt đầu lên máy bay, xin cầm sẵn thẻ lên máy bay và xếp hàng theo thứ tự."
   },
   {
    "zh": "这位旅客，请问您有什么需要？",
    "py": "Zhè wèi lǚkè, qǐngwèn nín yǒu shénme xūyào?",
    "vn": "Thưa quý khách, xin hỏi quý khách cần gì ạ?"
   }
  ],
  "hanzi": [
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
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Dịp lễ, hành khách ở ga tàu mỗi ngày một đông.",
    "answer": "节假日，火车站的旅客一天比一天多。",
    "answerPy": "Jiéjiàrì, huǒchēzhàn de lǚkè yì tiān bǐ yì tiān duō.",
    "note": "Ôn 一天比一天 (Bài 13 · điểm 2).",
    "pair": "一天比一天……"
   },
   {
    "promptLang": "vi",
    "prompt": "Thưa quý vị hành khách, chuyến bay đi Tây An bắt đầu lên máy bay.",
    "answer": "各位旅客，去西安的航班开始登机了。",
    "answerPy": "Gèwèi lǚkè, qù Xī'ān de hángbān kāishǐ dēngjī le.",
    "note": "各位 (Bài 14).",
    "pair": "各位旅客"
   }
  ]
 },
 {
  "n": 21,
  "zh": "牌",
  "py": "pái",
  "pos": "Danh từ",
  "vn": "biển, bảng, thẻ",
  "hv": "bài",
  "em": "🪧",
  "lesson": 2,
  "explain": [
   "Tấm biển, tấm thẻ có chữ ghi thông tin: 登机牌 (thẻ lên máy bay), 车牌 (biển số xe), 门牌 (biển số nhà). ⚠ 牌子 (Bài 14) = nhãn hiệu / tấm biển."
  ],
  "usage": "登机牌 · 车牌 · 门牌.",
  "collo": [
   "登机牌",
   "车牌",
   "门牌",
   "牌子"
  ],
  "colloFull": [
   {
    "zh": "登机牌",
    "py": "Dēngjīpái",
    "vn": "thẻ lên máy bay"
   },
   {
    "zh": "车牌",
    "py": "Chē pái",
    "vn": "biển số xe"
   },
   {
    "zh": "门牌",
    "py": "Mén pái",
    "vn": "biển số nhà"
   },
   {
    "zh": "牌子",
    "py": "Páizi",
    "vn": "nhãn hiệu, tấm biển"
   }
  ],
  "patterns": [
   {
    "s": "N + 牌",
    "m": "Danh từ ghép: 登机牌 / 车牌 / 门牌"
   }
  ],
  "ex_zh": "请拿好登机牌按顺序排队。",
  "ex_py": "Qǐng náhǎo dēngjīpái àn shùnxù páiduì.",
  "ex_vn": "Xin cầm sẵn thẻ lên máy bay và xếp hàng theo thứ tự.",
  "exList": [
   {
    "zh": "请拿好登机牌按顺序排队。",
    "py": "Qǐng náhǎo dēngjīpái àn shùnxù páiduì.",
    "vn": "Xin cầm sẵn thẻ lên máy bay và xếp hàng theo thứ tự."
   },
   {
    "zh": "这辆车的车牌号是多少？",
    "py": "Zhè liàng chē de chē pái hào shì duōshao?",
    "vn": "Biển số của chiếc xe này là bao nhiêu?"
   }
  ],
  "hanzi": [
   {
    "c": "牌",
    "p": "pái",
    "type": "左右结构 · Trái-phải",
    "st": 12,
    "ord": "片 trái → 卑 phải",
    "rad": "片 (phiến)",
    "mean": "thẻ, biển",
    "tip": "Miếng 片 + 卑 → tấm THẺ, BIỂN. 登机牌, 牌子 (nhãn hiệu), 名牌.",
    "cf": "片 (piàn – miếng)",
    "w": "登机牌 / 牌子 / 名牌"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Thẻ lên máy bay của tôi đâu? Lẽ nào tôi để quên ở chỗ kiểm tra an ninh?",
    "answer": "我的登机牌呢？难道我忘在安检那儿了？",
    "answerPy": "Wǒ de dēngjīpái ne? Nándào wǒ wàng zài ānjiǎn nàr le?",
    "note": "Dùng 难道 (Bài 20 · điểm 1).",
    "pair": "难道……？"
   },
   {
    "promptLang": "vi",
    "prompt": "Bạn cất kỹ thẻ lên máy bay đi, lát nữa còn dùng.",
    "answer": "你把登机牌放好，一会儿还要用。",
    "answerPy": "Nǐ bǎ dēngjīpái fànghǎo, yíhuìr hái yào yòng.",
    "note": "Câu chữ 把 + V + 好 (HSK 3).",
    "pair": "把……放好"
   }
  ]
 },
 {
  "n": 22,
  "zh": "靠",
  "py": "kào",
  "pos": "Động từ",
  "vn": "sát, cạnh; tựa vào, dựa vào",
  "hv": "kháo",
  "em": "💺",
  "lesson": 2,
  "explain": [
   "Ở sát bên, gần kề: 靠窗户 (cạnh cửa sổ), 靠门 (cạnh cửa).",
   "Tựa, dựa vào: 靠在椅子上; nghĩa bóng: dựa vào (ai, cái gì) — 靠自己."
  ],
  "usage": "靠窗户 · 靠窗的座位 · 靠在……上 · 靠自己.",
  "collo": [
   "靠窗户",
   "靠窗的座位",
   "靠在墙上",
   "靠自己"
  ],
  "colloFull": [
   {
    "zh": "靠窗户",
    "py": "Kào chuānghu",
    "vn": "cạnh cửa sổ"
   },
   {
    "zh": "靠窗的座位",
    "py": "Kào chuāng de zuòwèi",
    "vn": "chỗ ngồi cạnh cửa sổ"
   },
   {
    "zh": "靠在墙上",
    "py": "Kào zài qiáng shàng",
    "vn": "dựa vào tường"
   },
   {
    "zh": "靠自己",
    "py": "Kào zìjǐ",
    "vn": "dựa vào bản thân"
   }
  ],
  "patterns": [
   {
    "s": "座位 + 靠 + 窗户 / 门",
    "m": "Vị trí sát cạnh"
   },
   {
    "s": "靠在 + N + 上",
    "m": "Tựa vào …"
   }
  ],
  "ex_zh": "终于上来了，我的座位靠窗户。",
  "ex_py": "Zhōngyú shànglai le, wǒ de zuòwèi kào chuānghu.",
  "ex_vn": "Cuối cùng cũng lên được rồi, chỗ của mình cạnh cửa sổ.",
  "exList": [
   {
    "zh": "终于上来了，我的座位靠窗户。",
    "py": "Zhōngyú shànglai le, wǒ de zuòwèi kào chuānghu.",
    "vn": "Cuối cùng cũng lên được rồi, chỗ của mình cạnh cửa sổ."
   },
   {
    "zh": "他累极了，靠在椅子上就睡着了。",
    "py": "Tā lèi jí le, kào zài yǐzi shàng jiù shuìzháo le.",
    "vn": "Anh ấy mệt quá, dựa vào ghế là ngủ thiếp đi."
   }
  ],
  "hanzi": [
   {
    "c": "靠",
    "p": "kào",
    "type": "形声字 · Chữ hình thanh",
    "st": 15,
    "ord": "告 → 非",
    "rad": "非 (phi – không phải)",
    "mean": "tựa, dựa vào; sát gần; nhờ vào",
    "tip": "告 (gào, gợi âm kào) ở trên + 非 ở dưới: hai bên 非 như hai người tựa lưng vào nhau → dựa, tựa — 靠窗户 (cạnh cửa sổ), 靠自己 (dựa vào bản thân).",
    "cf": "告 gào (báo) — không có 非; 非 fēi (không phải) — không có 告",
    "w": "靠窗 / 靠近 / 依靠"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Tôi thích ngồi chỗ cạnh cửa sổ, có thể ngắm phong cảnh bên ngoài.",
    "answer": "我喜欢坐靠窗户的座位，可以看外边的风景。",
    "answerPy": "Wǒ xǐhuan zuò kào chuānghu de zuòwèi, kěyǐ kàn wàibian de fēngjǐng.",
    "note": "靠窗户 làm định ngữ + 的.",
    "pair": "靠窗户的座位"
   },
   {
    "promptLang": "vi",
    "prompt": "Muốn học giỏi tiếng Trung, ngoài thầy cô ra còn phải dựa vào chính mình.",
    "answer": "要想学好中文，除了老师，还要靠自己。",
    "answerPy": "Yào xiǎng xuéhǎo Zhōngwén, chúle lǎoshī, hái yào kào zìjǐ.",
    "note": "Ôn 除了……还…… (HSK 3).",
    "pair": "除了……还要靠……"
   }
  ]
 },
 {
  "n": 23,
  "zh": "窗户",
  "py": "chuānghu",
  "pos": "Danh từ",
  "vn": "cửa sổ",
  "hv": "song hộ",
  "em": "🪟",
  "lesson": 2,
  "explain": [
   "Cửa sổ (户 đọc nhẹ hu). Phân biệt: 窗口 = ô cửa (giao dịch, bán vé), cửa sổ (máy tính)."
  ],
  "usage": "开窗户 · 关上窗户 · 靠窗户 · 把窗户打开.",
  "collo": [
   "开窗户",
   "关上窗户",
   "靠窗户",
   "擦窗户"
  ],
  "colloFull": [
   {
    "zh": "开窗户",
    "py": "Kāi chuānghu",
    "vn": "mở cửa sổ"
   },
   {
    "zh": "关上窗户",
    "py": "Guānshàng chuānghu",
    "vn": "đóng cửa sổ"
   },
   {
    "zh": "靠窗户",
    "py": "Kào chuānghu",
    "vn": "cạnh cửa sổ"
   },
   {
    "zh": "擦窗户",
    "py": "Cā chuānghu",
    "vn": "lau cửa sổ"
   }
  ],
  "patterns": [
   {
    "s": "把窗户 + 打开 / 关上",
    "m": "Câu chữ 把 với 窗户"
   }
  ],
  "ex_zh": "终于上来了，我的座位靠窗户。",
  "ex_py": "Zhōngyú shànglai le, wǒ de zuòwèi kào chuānghu.",
  "ex_vn": "Cuối cùng cũng lên được rồi, chỗ của mình cạnh cửa sổ.",
  "exList": [
   {
    "zh": "终于上来了，我的座位靠窗户。",
    "py": "Zhōngyú shànglai le, wǒ de zuòwèi kào chuānghu.",
    "vn": "Cuối cùng cũng lên được rồi, chỗ của mình cạnh cửa sổ."
   },
   {
    "zh": "外边下雨了，快把窗户关上吧。",
    "py": "Wàibian xiàyǔ le, kuài bǎ chuānghu guānshàng ba.",
    "vn": "Bên ngoài mưa rồi, mau đóng cửa sổ lại đi."
   }
  ],
  "hanzi": [
   {
    "c": "窗",
    "p": "chuāng",
    "type": "上下结构 · Trên-dưới",
    "st": 12,
    "ord": "穴 (huyệt) trên → 囱(biến thể) dưới",
    "rad": "穴 (huyệt – hang, lỗ)",
    "mean": "cửa sổ",
    "tip": "Bộ 穴(lỗ hổng trên tường) + 囱(ống khói, biểu âm) → LỖ HỔNG để lấy ánh sáng/gió, mở rộng thành CỬA SỔ.",
    "cf": "窗 dễ nhầm với 密 (mì – \"kín, mật\")",
    "w": "窗户 / 窗帘 / 车窗"
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
    "prompt": "Trong phòng nóng quá, bạn mở cửa sổ ra được không?",
    "answer": "房间里太热了，你把窗户打开，好吗？",
    "answerPy": "Fángjiān lǐ tài rè le, nǐ bǎ chuānghu dǎkāi, hǎo ma?",
    "note": "Câu 把 + V + bổ ngữ (HSK 3).",
    "pair": "把窗户打开"
   },
   {
    "promptLang": "vi",
    "prompt": "Nếu trời mưa thì các bạn đóng cửa sổ lại, nếu không nước mưa sẽ vào phòng.",
    "answer": "要是下雨，你们就关上窗户，否则雨水会进到房间里。",
    "answerPy": "Yàoshi xiàyǔ, nǐmen jiù guānshàng chuānghu, fǒuzé yǔshuǐ huì jìndào fángjiān lǐ.",
    "note": "要是……就……，否则…… (Bài 20 · điểm 4).",
    "pair": "要是……就……，否则……"
   }
  ]
 },
 {
  "n": 24,
  "zh": "转机",
  "py": "zhuǎnjī",
  "pos": "Động từ",
  "vn": "chuyển máy bay, bay nối chuyến",
  "hv": "chuyển cơ",
  "em": "🔁",
  "lesson": 2,
  "explain": [
   "Đổi sang chuyến bay khác ở một sân bay trung gian để đến đích (nối chuyến); trái nghĩa: 直飞 (bay thẳng)."
  ],
  "usage": "在 + nơi + 转机 · 转机比直飞便宜 · 不用转机.",
  "collo": [
   "在西安转机",
   "转机比直飞便宜",
   "转机时间",
   "不用转机"
  ],
  "colloFull": [
   {
    "zh": "在西安转机",
    "py": "Zài Xī'ān zhuǎnjī",
    "vn": "nối chuyến ở Tây An"
   },
   {
    "zh": "转机比直飞便宜",
    "py": "Zhuǎnjī bǐ zhífēi piányi",
    "vn": "nối chuyến rẻ hơn bay thẳng"
   },
   {
    "zh": "转机时间",
    "py": "Zhuǎnjī shíjiān",
    "vn": "thời gian nối chuyến"
   },
   {
    "zh": "不用转机",
    "py": "Búyòng zhuǎnjī",
    "vn": "không phải nối chuyến"
   }
  ],
  "patterns": [
   {
    "s": "在 + nơi + 转机",
    "m": "Nối chuyến ở đâu"
   },
   {
    "s": "转机 ↔ 直飞",
    "m": "nối chuyến ↔ bay thẳng"
   }
  ],
  "ex_zh": "咱们是在西安转机，然后再飞西双版纳。",
  "ex_py": "Zánmen shì zài Xī'ān zhuǎnjī, ránhòu zài fēi Xīshuāngbǎnnà.",
  "ex_vn": "Chúng ta nối chuyến ở Tây An, sau đó mới bay đi Tây Song Bản Nạp.",
  "exList": [
   {
    "zh": "咱们是在西安转机，然后再飞西双版纳。",
    "py": "Zánmen shì zài Xī'ān zhuǎnjī, ránhòu zài fēi Xīshuāngbǎnnà.",
    "vn": "Chúng ta nối chuyến ở Tây An, sau đó mới bay đi Tây Song Bản Nạp."
   },
   {
    "zh": "转机会比直飞更便宜。",
    "py": "Zhuǎnjī huì bǐ zhífēi gèng piányi.",
    "vn": "Bay nối chuyến sẽ rẻ hơn bay thẳng."
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
    "prompt": "Từ Hà Nội đi Tây Song Bản Nạp không có chuyến bay thẳng, chỉ có thể nối chuyến.",
    "answer": "从河内去西双版纳没有直飞的航班，只能转机。",
    "answerPy": "Cóng Hénèi qù Xīshuāngbǎnnà méiyǒu zhífēi de hángbān, zhǐnéng zhuǎnjī.",
    "note": "转机 ↔ 直飞; 只能 = chỉ có thể.",
    "pair": "没有直飞……，只能转机"
   },
   {
    "promptLang": "vi",
    "prompt": "Bay thẳng tuy tiện, nhưng về giá thì không rẻ bằng bay nối chuyến.",
    "answer": "直飞虽然方便，但是价格不如转机便宜。",
    "answerPy": "Zhífēi suīrán fāngbiàn, dànshì jiàgé bùrú zhuǎnjī piányi.",
    "note": "Ôn A不如B (Bài 15 · điểm 4).",
    "pair": "A不如B + Adj"
   }
  ]
 },
 {
  "n": 25,
  "zh": "老舍",
  "py": "Lǎoshě",
  "pos": "Danh từ riêng",
  "vn": "Lão Xá (nhà văn Trung Quốc)",
  "hv": "Lão Xá",
  "em": "✍️",
  "lesson": 2,
  "explain": [
   "Nhà văn, nhà soạn kịch nổi tiếng của Trung Quốc (1899–1966), người Bắc Kinh; tác phẩm tiêu biểu: tiểu thuyết 《骆驼祥子》 (Lạc Đà Tường Tử), kịch 《茶馆》 (Quán trà)."
  ],
  "usage": "老舍的小说 · 作家老舍.",
  "collo": [
   "老舍的小说",
   "老舍的话剧",
   "作家老舍",
   "读老舍"
  ],
  "colloFull": [
   {
    "zh": "老舍的小说",
    "py": "Lǎoshě de xiǎoshuō",
    "vn": "tiểu thuyết của Lão Xá"
   },
   {
    "zh": "老舍的话剧",
    "py": "Lǎoshě de huàjù",
    "vn": "kịch nói của Lão Xá"
   },
   {
    "zh": "作家老舍",
    "py": "Zuòjiā Lǎoshě",
    "vn": "nhà văn Lão Xá"
   },
   {
    "zh": "读老舍",
    "py": "Dú Lǎoshě",
    "vn": "đọc Lão Xá"
   }
  ],
  "patterns": [
   {
    "s": "老舍的 + tác phẩm",
    "m": "Tác phẩm của Lão Xá"
   }
  ],
  "ex_zh": "我在读老舍的小说。",
  "ex_py": "Wǒ zài dú Lǎoshě de xiǎoshuō.",
  "ex_vn": "Mình đang đọc tiểu thuyết của Lão Xá.",
  "exList": [
   {
    "zh": "我在读老舍的小说。",
    "py": "Wǒ zài dú Lǎoshě de xiǎoshuō.",
    "vn": "Mình đang đọc tiểu thuyết của Lão Xá."
   },
   {
    "zh": "老舍是北京人，他的小说写了很多北京人的生活。",
    "py": "Lǎoshě shì Běijīngrén, tā de xiǎoshuō xiě le hěn duō Běijīngrén de shēnghuó.",
    "vn": "Lão Xá là người Bắc Kinh, tiểu thuyết của ông viết rất nhiều về cuộc sống của người Bắc Kinh."
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
    "c": "舍",
    "p": "shè",
    "type": "象形字 · Chữ tượng hình",
    "st": 8,
    "ord": "人 → 干 → 口",
    "rad": "人 (nhân – người)",
    "mean": "nhà, chỗ ở (shè); bỏ, xả (shě)",
    "tip": "Vẽ ngôi nhà có mái (人) che, cột (干) và nền (口) → nhà ở: 宿舍 (ký túc xá, đọc shè). Đọc shě: bỏ, nỡ — 舍不得 (không nỡ). Tên nhà văn 老舍 đọc Lǎoshě.",
    "cf": "含 hán (ngậm) — dưới là 今 + 口; 全 quán (toàn) — dưới là 王",
    "w": "宿舍 / 舍不得 / 老舍"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Tiểu thuyết của Lão Xá tôi đọc không hiểu lắm, có nhiều từ tôi chưa học.",
    "answer": "老舍的小说我不怎么看得懂，有很多词我没学过。",
    "answerPy": "Lǎoshě de xiǎoshuō wǒ bù zěnme kàn de dǒng, yǒu hěn duō cí wǒ méi xué guò.",
    "note": "Ôn 不怎么 (Bài 12 · điểm 1) + bổ ngữ khả năng.",
    "pair": "不怎么看得懂"
   },
   {
    "promptLang": "vi",
    "prompt": "Muốn hiểu Bắc Kinh xưa, bạn có thể đọc tiểu thuyết của Lão Xá.",
    "answer": "要想了解老北京，你可以读读老舍的小说。",
    "answerPy": "Yào xiǎng liǎojiě lǎo Běijīng, nǐ kěyǐ dúdu Lǎoshě de xiǎoshuō.",
    "note": "Lặp động từ 读读 (HSK 3).",
    "pair": "读读……"
   }
  ]
 },
 {
  "n": 26,
  "zh": "唐诗",
  "py": "Tángshī",
  "pos": "Danh từ riêng",
  "vn": "thơ Đường",
  "hv": "Đường thi",
  "em": "📜",
  "lesson": 2,
  "explain": [
   "Thơ thời nhà Đường (618–907) — đỉnh cao thơ ca Trung Quốc, với các nhà thơ 李白 (Lý Bạch), 杜甫 (Đỗ Phủ)…; người Việt quen thuộc với bài 《静夜思》 (Tĩnh dạ tứ)."
  ],
  "usage": "读唐诗 · 背唐诗 · 一首唐诗.",
  "collo": [
   "读唐诗",
   "背唐诗",
   "一首唐诗",
   "唐诗三百首"
  ],
  "colloFull": [
   {
    "zh": "读唐诗",
    "py": "Dú Tángshī",
    "vn": "đọc thơ Đường"
   },
   {
    "zh": "背唐诗",
    "py": "Bèi Tángshī",
    "vn": "học thuộc thơ Đường"
   },
   {
    "zh": "一首唐诗",
    "py": "Yì shǒu Tángshī",
    "vn": "một bài thơ Đường"
   },
   {
    "zh": "唐诗三百首",
    "py": "Tángshī sānbǎi shǒu",
    "vn": "Đường thi tam bách thủ"
   }
  ],
  "patterns": [
   {
    "s": "一首 + 诗 / 歌",
    "m": "Lượng từ 首 cho thơ, bài hát"
   }
  ],
  "ex_zh": "我读唐诗呢。几千年的中国文化，真是读也读不完。",
  "ex_py": "Wǒ dú Tángshī ne. Jǐqiān nián de Zhōngguó wénhuà, zhēnshì dú yě dú bu wán.",
  "ex_vn": "Mình đọc thơ Đường. Văn hóa Trung Quốc mấy nghìn năm, đúng là đọc cũng đọc không hết.",
  "exList": [
   {
    "zh": "我读唐诗呢。几千年的中国文化，真是读也读不完。",
    "py": "Wǒ dú Tángshī ne. Jǐqiān nián de Zhōngguó wénhuà, zhēnshì dú yě dú bu wán.",
    "vn": "Mình đọc thơ Đường. Văn hóa Trung Quốc mấy nghìn năm, đúng là đọc cũng đọc không hết."
   },
   {
    "zh": "中国的孩子从小就开始背唐诗。",
    "py": "Zhōngguó de háizi cóng xiǎo jiù kāishǐ bèi Tángshī.",
    "vn": "Trẻ em Trung Quốc từ nhỏ đã bắt đầu học thuộc thơ Đường."
   }
  ],
  "hanzi": [
   {
    "c": "唐",
    "p": "táng",
    "type": "形声字 · Chữ hình thanh",
    "st": 10,
    "ord": "广 → 肀 → 口",
    "rad": "广 (nghiễm – mái nhà)",
    "mean": "nhà Đường (618–907); họ Đường",
    "tip": "Mái rộng (广) + tay cầm vật (肀) + miệng (口): nghĩa gốc là lời nói to, rộng; nay chủ yếu chỉ triều Đường — 唐诗 (thơ Đường), 唐装 (áo Đường trang), 唐朝.",
    "cf": "糖 táng (đường ăn) — thêm 米 bên trái; 康 kāng (khỏe) — dưới là 氺",
    "w": "唐诗 / 唐装 / 唐朝"
   },
   {
    "c": "诗",
    "p": "shī",
    "type": "形声字 · Chữ hình thanh",
    "st": 8,
    "ord": "讠 → 寺",
    "rad": "讠 (ngôn – lời nói)",
    "mean": "thơ",
    "tip": "Lời nói (讠) + 寺 (sì, gợi âm shī): lời nói có vần điệu → thơ — 唐诗, 诗人 (nhà thơ), 写诗.",
    "cf": "持 chí (cầm, giữ) — bên trái là 扌; 等 děng (đợi) — trên là ⺮; 时 shí (thời) — bên trái là 日",
    "w": "唐诗 / 诗人 / 写诗"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Annie thích thơ Đường, cô ấy thuộc được hơn năm mươi bài.",
    "answer": "安妮喜欢唐诗，她能背五十多首。",
    "answerPy": "Ānní xǐhuan Tángshī, tā néng bèi wǔshí duō shǒu.",
    "note": "Lượng từ 首 + số ước lượng 多.",
    "pair": "五十多首"
   },
   {
    "promptLang": "vi",
    "prompt": "Thơ Đường càng đọc càng thấy hay.",
    "answer": "唐诗越读越有意思。",
    "answerPy": "Tángshī yuè dú yuè yǒu yìsi.",
    "note": "Ôn 越……越…… (HSK 3).",
    "pair": "越……越……"
   }
  ]
 },
 {
  "n": 27,
  "zh": "泼水节",
  "py": "Pōshuǐjié",
  "pos": "Danh từ riêng",
  "vn": "Tết té nước (lễ hội năm mới của dân tộc Thái)",
  "hv": "Bát thủy tiết",
  "em": "💦",
  "lesson": 2,
  "explain": [
   "Lễ hội năm mới của dân tộc Thái (傣族) ở Tây Song Bản Nạp, Vân Nam, thường vào giữa tháng 4; mọi người té nước vào nhau để chúc phúc — giống Tết Songkran của Thái Lan, Bunpimay của Lào."
  ],
  "usage": "过泼水节 · 感受泼水节 · 泼水节上.",
  "collo": [
   "过泼水节",
   "感受泼水节",
   "泼水节上",
   "泼水节快乐"
  ],
  "colloFull": [
   {
    "zh": "过泼水节",
    "py": "Guò Pōshuǐjié",
    "vn": "đón Tết té nước"
   },
   {
    "zh": "感受泼水节",
    "py": "Gǎnshòu Pōshuǐjié",
    "vn": "trải nghiệm Tết té nước"
   },
   {
    "zh": "泼水节上",
    "py": "Pōshuǐjié shàng",
    "vn": "trong Tết té nước"
   },
   {
    "zh": "泼水节快乐",
    "py": "Pōshuǐjié kuàilè",
    "vn": "chúc mừng Tết té nước"
   }
  ],
  "patterns": [
   {
    "s": "过 + 节日",
    "m": "过春节 / 过泼水节"
   }
  ],
  "ex_zh": "这么多人，是不是跟咱们一样，都是去感受泼水节的啊？",
  "ex_py": "Zhème duō rén, shì bu shì gēn zánmen yíyàng, dōu shì qù gǎnshòu Pōshuǐjié de a?",
  "ex_vn": "Đông người thế này, có phải cũng giống chúng mình, đều đi trải nghiệm Tết té nước không nhỉ?",
  "exList": [
   {
    "zh": "这么多人，是不是跟咱们一样，都是去感受泼水节的啊？",
    "py": "Zhème duō rén, shì bu shì gēn zánmen yíyàng, dōu shì qù gǎnshòu Pōshuǐjié de a?",
    "vn": "Đông người thế này, có phải cũng giống chúng mình, đều đi trải nghiệm Tết té nước không nhỉ?"
   },
   {
    "zh": "泼水节上，大家互相泼水，祝对方新年幸福。",
    "py": "Pōshuǐjié shàng, dàjiā hùxiāng pō shuǐ, zhù duìfāng xīnnián xìngfú.",
    "vn": "Trong Tết té nước, mọi người té nước vào nhau, chúc nhau năm mới hạnh phúc."
   }
  ],
  "hanzi": [
   {
    "c": "泼",
    "p": "pō",
    "type": "左右结构 · Trái-phải",
    "st": 8,
    "ord": "氵 trái → 发 phải",
    "rad": "氵 (thủy)",
    "mean": "hắt nước",
    "tip": "Nước 氵 + 发 → HẮT nước tung tóe → sống động. 活泼 = hoạt bát; 泼水节 = Tết té nước.",
    "cf": "发 (fā – phát)",
    "w": "活泼 / 泼水"
   },
   {
    "c": "水",
    "p": "shuǐ",
    "type": "独体字 · Chữ đơn",
    "st": 4,
    "ord": "亅→丶→丿→丶 (nét thẳng giữa và các nhánh nước hai bên)",
    "rad": "水 (thuỷ – nước, tự thành bộ)",
    "mean": "nước",
    "tip": "Hình dòng NƯỚC đang chảy, giữa thẳng, hai bên có các nhánh nhỏ toé ra → NƯỚC.",
    "cf": "冰 (bīng – \"băng, đá\", thêm bộ 冫\")",
    "w": "水果 / 喝水 / 汽水"
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
    "prompt": "Là năm mới của dân tộc thiểu số, Tết té nước vô cùng náo nhiệt.",
    "answer": "作为少数民族的新年，泼水节非常热闹。",
    "answerPy": "Zuòwéi shǎoshù mínzú de xīnnián, Pōshuǐjié fēicháng rènao.",
    "note": "Ôn 作为 (Bài 13 · điểm 4).",
    "pair": "作为……"
   },
   {
    "promptLang": "vi",
    "prompt": "Năm nay chúng tôi định đi Tây Song Bản Nạp đón Tết té nước.",
    "answer": "今年我们打算去西双版纳过泼水节。",
    "answerPy": "Jīnnián wǒmen dǎsuàn qù Xīshuāngbǎnnà guò Pōshuǐjié.",
    "note": "打算 + V (HSK 3).",
    "pair": "去……过泼水节"
   }
  ]
 },
 {
  "n": 28,
  "zh": "西双版纳",
  "py": "Xīshuāngbǎnnà",
  "pos": "Danh từ riêng",
  "vn": "Tây Song Bản Nạp (Vân Nam)",
  "hv": "Tây Song Bản Nạp",
  "em": "🌴",
  "lesson": 2,
  "explain": [
   "Châu tự trị dân tộc Thái ở cực nam tỉnh Vân Nam (云南), giáp Lào và Myanmar; có rừng nhiệt đới, voi rừng và Tết té nước nổi tiếng."
  ],
  "usage": "去西双版纳 · 飞西双版纳 · 西双版纳的泼水节.",
  "collo": [
   "飞西双版纳",
   "去西双版纳",
   "西双版纳的泼水节",
   "云南西双版纳"
  ],
  "colloFull": [
   {
    "zh": "飞西双版纳",
    "py": "Fēi Xīshuāngbǎnnà",
    "vn": "bay đi Tây Song Bản Nạp"
   },
   {
    "zh": "去西双版纳",
    "py": "Qù Xīshuāngbǎnnà",
    "vn": "đi Tây Song Bản Nạp"
   },
   {
    "zh": "西双版纳的泼水节",
    "py": "Xīshuāngbǎnnà de Pōshuǐjié",
    "vn": "Tết té nước ở Tây Song Bản Nạp"
   },
   {
    "zh": "云南西双版纳",
    "py": "Yúnnán Xīshuāngbǎnnà",
    "vn": "Tây Song Bản Nạp, Vân Nam"
   }
  ],
  "patterns": [
   {
    "s": "飞 + nơi chốn",
    "m": "飞西双版纳 = bay đến Tây Song Bản Nạp (khẩu ngữ)"
   }
  ],
  "ex_zh": "你别忘了，咱们是在西安转机，然后再飞西双版纳。",
  "ex_py": "Nǐ bié wàng le, zánmen shì zài Xī'ān zhuǎnjī, ránhòu zài fēi Xīshuāngbǎnnà.",
  "ex_vn": "Cậu đừng quên, chúng ta nối chuyến ở Tây An, sau đó mới bay đi Tây Song Bản Nạp.",
  "exList": [
   {
    "zh": "你别忘了，咱们是在西安转机，然后再飞西双版纳。",
    "py": "Nǐ bié wàng le, zánmen shì zài Xī'ān zhuǎnjī, ránhòu zài fēi Xīshuāngbǎnnà.",
    "vn": "Cậu đừng quên, chúng ta nối chuyến ở Tây An, sau đó mới bay đi Tây Song Bản Nạp."
   },
   {
    "zh": "西双版纳一年四季都很暖和，冬天去旅行特别舒服。",
    "py": "Xīshuāngbǎnnà yì nián sìjì dōu hěn nuǎnhuo, dōngtiān qù lǚxíng tèbié shūfu.",
    "vn": "Tây Song Bản Nạp bốn mùa đều ấm áp, mùa đông đi du lịch đặc biệt dễ chịu."
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
    "c": "双",
    "p": "shuāng",
    "type": "会意字 · Chữ hội ý",
    "st": 4,
    "ord": "ngang phẩy → chấm → ngang phẩy → mác",
    "rad": "又 (hựu – bàn tay)",
    "mean": "đôi, cặp",
    "tip": "Hai chữ 又 (bàn tay) đứng cạnh nhau → một đôi. 一双筷子 = một đôi đũa.",
    "cf": "对 duì (đúng) — bên trái cũng là 又",
    "w": "一双筷子 / 两双"
   },
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
   },
   {
    "c": "纳",
    "p": "nà",
    "type": "形声字 · Chữ hình thanh",
    "st": 7,
    "ord": "纟 → 内",
    "rad": "纟 (mịch – sợi tơ)",
    "mean": "nhận vào, thu nạp; (phiên âm) nà",
    "tip": "Sợi tơ (纟) + 内 (nèi, gợi âm nà, “bên trong”): đưa sợi tơ vào trong → nhận vào, thu nạp (接纳); trong bài dùng phiên âm tên đất 西双版纳.",
    "cf": "内 nèi (trong) — không có 纟; 呐 nà (trợ từ) — bên trái là 口",
    "w": "西双版纳 / 接纳 / 纳税"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Tây Song Bản Nạp cách Việt Nam không xa lắm.",
    "answer": "西双版纳离越南不太远。",
    "answerPy": "Xīshuāngbǎnnà lí Yuènán bú tài yuǎn.",
    "note": "离 (HSK 2).",
    "pair": "A离B不太远"
   },
   {
    "promptLang": "vi",
    "prompt": "Họ muốn tìm hiểu Tết té nước, thế là đã đi Tây Song Bản Nạp.",
    "answer": "他们想了解泼水节，于是去了西双版纳。",
    "answerPy": "Tāmen xiǎng liǎojiě Pōshuǐjié, yúshì qù le Xīshuāngbǎnnà.",
    "note": "Ôn 于是 (Bài 3 · điểm 4).",
    "pair": "……，于是……"
   }
  ]
 },
 {
  "n": 29,
  "zh": "从中",
  "py": "cóngzhōng",
  "pos": "Phó từ",
  "vn": "từ trong đó, qua đó",
  "hv": "tòng trung",
  "em": "🔍",
  "lesson": 3,
  "explain": [
   "Từ trong đó, thông qua việc vừa nói (đứng trước động từ): 从中了解 / 从中学到 / 从中发现. 中 chỉ sự việc đã nhắc ở trước."
  ],
  "usage": "从中了解 · 从中学到 · 从中发现.",
  "collo": [
   "从中了解",
   "从中学到",
   "从中发现",
   "从中得到"
  ],
  "colloFull": [
   {
    "zh": "从中了解",
    "py": "Cóngzhōng liǎojiě",
    "vn": "qua đó tìm hiểu"
   },
   {
    "zh": "从中学到",
    "py": "Cóngzhōng xuédào",
    "vn": "học được từ đó"
   },
   {
    "zh": "从中发现",
    "py": "Cóngzhōng fāxiàn",
    "vn": "phát hiện ra từ đó"
   },
   {
    "zh": "从中得到",
    "py": "Cóngzhōng dédào",
    "vn": "nhận được từ đó"
   }
  ],
  "patterns": [
   {
    "s": "(vế trước nói một việc)，从中 + V",
    "m": "Từ việc đó mà …"
   }
  ],
  "ex_zh": "白家月、安妮和陈天中常外出旅行，从中了解中国。",
  "ex_py": "Bái Jiāyuè, Ānní hé Chén Tiānzhōng cháng wàichū lǚxíng, cóngzhōng liǎojiě Zhōngguó.",
  "ex_vn": "Bạch Gia Nguyệt, Annie và Trần Thiên Trung thường ra ngoài du lịch, qua đó tìm hiểu Trung Quốc.",
  "exList": [
   {
    "zh": "白家月、安妮和陈天中常外出旅行，从中了解中国。",
    "py": "Bái Jiāyuè, Ānní hé Chén Tiānzhōng cháng wàichū lǚxíng, cóngzhōng liǎojiě Zhōngguó.",
    "vn": "Bạch Gia Nguyệt, Annie và Trần Thiên Trung thường ra ngoài du lịch, qua đó tìm hiểu Trung Quốc."
   },
   {
    "zh": "这次失败让他从中学到了很多。",
    "py": "Zhè cì shībài ràng tā cóngzhōng xuédào le hěn duō.",
    "vn": "Lần thất bại này giúp anh ấy học được rất nhiều điều từ đó."
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
    "prompt": "Tôi thích đọc tiểu thuyết Trung Quốc, qua đó tìm hiểu văn hóa Trung Quốc.",
    "answer": "我喜欢读中国小说，从中了解中国文化。",
    "answerPy": "Wǒ xǐhuan dú Zhōngguó xiǎoshuō, cóngzhōng liǎojiě Zhōngguó wénhuà.",
    "note": "从中 + V đứng ở vế sau.",
    "pair": "……，从中了解……"
   },
   {
    "promptLang": "vi",
    "prompt": "Làm thêm tuy mệt, nhưng tôi học được rất nhiều kinh nghiệm từ đó.",
    "answer": "打工虽然累，但是我从中学到了很多经验。",
    "answerPy": "Dǎgōng suīrán lèi, dànshì wǒ cóngzhōng xuédào le hěn duō jīngyàn.",
    "note": "Ôn 虽然……但是…….",
    "pair": "从中学到……"
   }
  ]
 },
 {
  "n": 30,
  "zh": "总结",
  "py": "zǒngjié",
  "pos": "Động từ",
  "vn": "tổng kết, đúc kết",
  "hv": "tổng kết",
  "em": "📝",
  "lesson": 3,
  "explain": [
   "Nhìn lại và rút ra những điểm chính, kinh nghiệm từ một quá trình: 总结经验, 总结一下. Cũng là danh từ: 工作总结 (bản tổng kết công việc)."
  ],
  "usage": "总结经验 · 总结出几点 · 总结一下.",
  "collo": [
   "总结经验",
   "总结出几点",
   "总结一下",
   "工作总结"
  ],
  "colloFull": [
   {
    "zh": "总结经验",
    "py": "Zǒngjié jīngyàn",
    "vn": "đúc kết kinh nghiệm"
   },
   {
    "zh": "总结出几点",
    "py": "Zǒngjié chū jǐ diǎn",
    "vn": "đúc kết ra mấy điểm"
   },
   {
    "zh": "总结一下",
    "py": "Zǒngjié yíxià",
    "vn": "tổng kết một chút"
   },
   {
    "zh": "工作总结",
    "py": "Gōngzuò zǒngjié",
    "vn": "bản tổng kết công việc"
   }
  ],
  "patterns": [
   {
    "s": "总结 + 出 + 经验 / 方法",
    "m": "Bổ ngữ xu hướng 出: rút ra được"
   }
  ],
  "ex_zh": "他们还总结出几点旅行经验。",
  "ex_py": "Tāmen hái zǒngjié chū jǐ diǎn lǚxíng jīngyàn.",
  "ex_vn": "Họ còn đúc kết ra mấy kinh nghiệm du lịch.",
  "exList": [
   {
    "zh": "他们还总结出几点旅行经验。",
    "py": "Tāmen hái zǒngjié chū jǐ diǎn lǚxíng jīngyàn.",
    "vn": "Họ còn đúc kết ra mấy kinh nghiệm du lịch."
   },
   {
    "zh": "旅行回来以后，我们一起总结了这次的经验。",
    "py": "Lǚxíng huílai yǐhòu, wǒmen yìqǐ zǒngjié le zhè cì de jīngyàn.",
    "vn": "Đi du lịch về, chúng tôi cùng nhau đúc kết kinh nghiệm của chuyến đi này."
   }
  ],
  "hanzi": [
   {
    "c": "总",
    "p": "zǒng",
    "type": "上下结构 · Trên-dưới (giản thể)",
    "st": 9,
    "ord": "⺈ trên → 心 dưới",
    "rad": "心 (tâm)",
    "mean": "tổng, toàn bộ",
    "tip": "Bộ tâm 心 (gom lại trong lòng) → mở rộng thành TỔNG, TOÀN BỘ, kết hợp 结(kết lại) thành 总结 = TỔNG KẾT.",
    "cf": "忽 (hū – \"bỗng nhiên\", bộ 心\")",
    "w": "总结 / 总是 / 总共"
   },
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
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Sau mỗi kỳ thi, tôi đều tổng kết lại những chỗ mình làm sai.",
    "answer": "每次考试以后，我都会总结一下自己做错的地方。",
    "answerPy": "Měi cì kǎoshì yǐhòu, wǒ dōu huì zǒngjié yíxià zìjǐ zuòcuò de dìfang.",
    "note": "每次……都…… (HSK 3).",
    "pair": "总结一下"
   },
   {
    "promptLang": "vi",
    "prompt": "Thầy giáo bảo chúng tôi đúc kết phương pháp học tiếng Trung.",
    "answer": "老师让我们总结学习中文的方法。",
    "answerPy": "Lǎoshī ràng wǒmen zǒngjié xuéxí Zhōngwén de fāngfǎ.",
    "note": "Câu kiêm ngữ 让 (Bài 18 · điểm 2).",
    "pair": "让 + ai + 总结……"
   }
  ]
 },
 {
  "n": 31,
  "zh": "道路",
  "py": "dàolù",
  "pos": "Danh từ",
  "vn": "đường sá, con đường",
  "hv": "đạo lộ",
  "em": "🛣️",
  "lesson": 3,
  "explain": [
   "Đường đi (chỉ chung hệ thống đường sá; trang trọng hơn 路); nghĩa bóng: con đường (phát triển, cuộc đời)."
  ],
  "usage": "道路交通 · 城市道路 · 人生道路.",
  "collo": [
   "道路交通",
   "城市道路",
   "道路很宽",
   "人生道路"
  ],
  "colloFull": [
   {
    "zh": "道路交通",
    "py": "Dàolù jiāotōng",
    "vn": "giao thông đường bộ"
   },
   {
    "zh": "城市道路",
    "py": "Chéngshì dàolù",
    "vn": "đường sá thành phố"
   },
   {
    "zh": "道路很宽",
    "py": "Dàolù hěn kuān",
    "vn": "đường rất rộng"
   },
   {
    "zh": "人生道路",
    "py": "Rénshēng dàolù",
    "vn": "con đường đời"
   }
  ],
  "patterns": [
   {
    "s": "道路 ≈ 路",
    "m": "道路 trang trọng, hay dùng trong văn viết; 路 dùng hằng ngày"
   }
  ],
  "ex_zh": "旅行前，要了解目的地天气、道路交通特点等。",
  "ex_py": "Lǚxíng qián, yào liǎojiě mùdìdì tiānqì, dàolù jiāotōng tèdiǎn děng.",
  "ex_vn": "Trước khi đi du lịch, phải tìm hiểu thời tiết, đặc điểm đường sá giao thông… ở nơi đến.",
  "exList": [
   {
    "zh": "旅行前，要了解目的地天气、道路交通特点等。",
    "py": "Lǚxíng qián, yào liǎojiě mùdìdì tiānqì, dàolù jiāotōng tèdiǎn děng.",
    "vn": "Trước khi đi du lịch, phải tìm hiểu thời tiết, đặc điểm đường sá giao thông… ở nơi đến."
   },
   {
    "zh": "下雪以后，道路很滑，开车要小心。",
    "py": "Xià xuě yǐhòu, dàolù hěn huá, kāichē yào xiǎoxīn.",
    "vn": "Sau khi tuyết rơi, đường rất trơn, lái xe phải cẩn thận."
   }
  ],
  "hanzi": [
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
    "prompt": "Đường sá ở thành phố này ngày càng rộng.",
    "answer": "这个城市的道路越来越宽了。",
    "answerPy": "Zhège chéngshì de dàolù yuèláiyuè kuān le.",
    "note": "越来越 + Adj (HSK 3).",
    "pair": "越来越……"
   },
   {
    "promptLang": "vi",
    "prompt": "Cùng với sự phát triển kinh tế, đường sá ở nông thôn cũng tốt lên rồi.",
    "answer": "随着经济的发展，农村的道路也变好了。",
    "answerPy": "Suízhe jīngjì de fāzhǎn, nóngcūn de dàolù yě biànhǎo le.",
    "note": "Ôn 随着 (Bài 1 · điểm 3).",
    "pair": "随着……"
   }
  ]
 },
 {
  "n": 32,
  "zh": "特点",
  "py": "tèdiǎn",
  "pos": "Danh từ",
  "vn": "đặc điểm",
  "hv": "đặc điểm",
  "em": "⭐",
  "lesson": 3,
  "explain": [
   "Nét riêng, điểm nổi bật khác với những cái khác."
  ],
  "usage": "……的特点 · 特点是…… · 有特点.",
  "collo": [
   "……的特点",
   "有特点",
   "主要特点",
   "特点是……"
  ],
  "colloFull": [
   {
    "zh": "……的特点",
    "py": "…… De tèdiǎn",
    "vn": "đặc điểm của …"
   },
   {
    "zh": "有特点",
    "py": "Yǒu tèdiǎn",
    "vn": "có nét riêng"
   },
   {
    "zh": "主要特点",
    "py": "Zhǔyào tèdiǎn",
    "vn": "đặc điểm chính"
   },
   {
    "zh": "特点是……",
    "py": "Tèdiǎn shì……",
    "vn": "đặc điểm là …"
   }
  ],
  "patterns": [
   {
    "s": "N + 的特点是 + ……",
    "m": "Giới thiệu đặc điểm"
   }
  ],
  "ex_zh": "旅行前，要了解目的地天气、道路交通特点等。",
  "ex_py": "Lǚxíng qián, yào liǎojiě mùdìdì tiānqì, dàolù jiāotōng tèdiǎn děng.",
  "ex_vn": "Trước khi đi du lịch, phải tìm hiểu thời tiết, đặc điểm đường sá giao thông… ở nơi đến.",
  "exList": [
   {
    "zh": "旅行前，要了解目的地天气、道路交通特点等。",
    "py": "Lǚxíng qián, yào liǎojiě mùdìdì tiānqì, dàolù jiāotōng tèdiǎn děng.",
    "vn": "Trước khi đi du lịch, phải tìm hiểu thời tiết, đặc điểm đường sá giao thông… ở nơi đến."
   },
   {
    "zh": "这个手机的特点是拍照好看，很适合年轻人。",
    "py": "Zhège shǒujī de tèdiǎn shì pāizhào hǎokàn, hěn shìhé niánqīngrén.",
    "vn": "Đặc điểm của chiếc điện thoại này là chụp ảnh đẹp, rất hợp với người trẻ."
   }
  ],
  "hanzi": [
   {
    "c": "特",
    "p": "tè",
    "type": "左右结构 · Trái-phải",
    "st": 10,
    "ord": "牛 (ngưu) trái → 寺 (tự) phải",
    "rad": "牛 (ngưu – trâu bò)",
    "mean": "đặc biệt",
    "tip": "Bộ trâu bò 牛 (con vật đặc biệt được chọn để tế lễ) + 寺(biểu âm) → ĐẶC BIỆT, kết hợp 点(điểm) thành 特点 = ĐẶC ĐIỂM (điểm đặc biệt).",
    "cf": "持 (chí – \"giữ\", bộ 扌\")",
    "w": "特点 / 特别 / 特色"
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
    "prompt": "Đặc điểm của món ăn Tứ Xuyên là vừa tê vừa cay.",
    "answer": "川菜的特点是又麻又辣。",
    "answerPy": "Chuāncài de tèdiǎn shì yòu má yòu là.",
    "note": "Ôn 又……又…… (HSK 3).",
    "pair": "……的特点是……"
   },
   {
    "promptLang": "vi",
    "prompt": "Mỗi thành phố đều có đặc điểm riêng của nó.",
    "answer": "每个城市都有自己的特点。",
    "answerPy": "Měi gè chéngshì dōu yǒu zìjǐ de tèdiǎn.",
    "note": "每……都…… (HSK 2).",
    "pair": "有自己的特点"
   }
  ]
 },
 {
  "n": 33,
  "zh": "所有",
  "py": "suǒyǒu",
  "pos": "Tính từ",
  "vn": "tất cả, mọi",
  "hv": "sở hữu",
  "em": "👥",
  "lesson": 3,
  "explain": [
   "Tất cả, toàn bộ — đứng trước danh từ (thường + 的), vị ngữ hay có 都: 所有(的)人都…….",
   "⚠ Bẫy Hán Việt: 所有 (sở hữu) ở đây nghĩa là “tất cả”, không phải “sở hữu”."
  ],
  "usage": "所有人 · 所有的工作 · 所有……都…….",
  "collo": [
   "所有人",
   "所有的工作",
   "所有问题",
   "所有的钱"
  ],
  "colloFull": [
   {
    "zh": "所有人",
    "py": "Suǒyǒu rén",
    "vn": "tất cả mọi người"
   },
   {
    "zh": "所有的工作",
    "py": "Suǒyǒu de gōngzuò",
    "vn": "tất cả công việc"
   },
   {
    "zh": "所有问题",
    "py": "Suǒyǒu wèntí",
    "vn": "tất cả vấn đề"
   },
   {
    "zh": "所有的钱",
    "py": "Suǒyǒu de qián",
    "vn": "toàn bộ số tiền"
   }
  ],
  "patterns": [
   {
    "s": "所有(的) + N + 都 + V",
    "m": "Tất cả … đều …"
   }
  ],
  "ex_zh": "安排好每天的活动，保证所有人对计划都没意见。",
  "ex_py": "Ānpái hǎo měitiān de huódòng, bǎozhèng suǒyǒu rén duì jìhuà dōu méi yìjiàn.",
  "ex_vn": "Sắp xếp tốt hoạt động mỗi ngày, đảm bảo mọi người đều không có ý kiến gì về kế hoạch.",
  "exList": [
   {
    "zh": "安排好每天的活动，保证所有人对计划都没意见。",
    "py": "Ānpái hǎo měitiān de huódòng, bǎozhèng suǒyǒu rén duì jìhuà dōu méi yìjiàn.",
    "vn": "Sắp xếp tốt hoạt động mỗi ngày, đảm bảo mọi người đều không có ý kiến gì về kế hoạch."
   },
   {
    "zh": "所有的工作都要在这周末前完成。",
    "py": "Suǒyǒu de gōngzuò dōu yào zài zhè zhōumò qián wánchéng.",
    "vn": "Tất cả công việc đều phải hoàn thành trước cuối tuần này."
   }
  ],
  "hanzi": [
   {
    "c": "所",
    "p": "suǒ",
    "type": "左右结构 · Trái-phải",
    "st": 8,
    "ord": "户 (hộ) trái → 斤 (cân) phải",
    "rad": "户 (hộ – cửa)",
    "mean": "nơi, cái mà",
    "tip": "Bộ 户(cửa, nhà) + 斤(rìu, biểu âm) → NƠI CHỐN, mở rộng thành trợ từ \"cái mà\", kết hợp 有(có) thành 所有 = TẤT CẢ (những cái có).",
    "cf": "所 dễ nhầm với 近 (jìn – \"gần\")",
    "w": "所有 / 所以 / 场所"
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
    "prompt": "Tất cả các bạn trong lớp đều đến rồi, chỉ có anh ấy là chưa đến.",
    "answer": "所有的同学都来了，只有他还没来。",
    "answerPy": "Suǒyǒu de tóngxué dōu lái le, zhǐyǒu tā hái méi lái.",
    "note": "所有……都…… + 只有.",
    "pair": "所有……都……"
   },
   {
    "promptLang": "vi",
    "prompt": "Bất kể là ai, tất cả mọi người đều phải xếp hàng.",
    "answer": "不管是谁，所有人都要排队。",
    "answerPy": "Bùguǎn shì shuí, suǒyǒu rén dōu yào páiduì.",
    "note": "Ôn 不管……都…… (Bài 8 · điểm 1).",
    "pair": "不管……都……"
   }
  ]
 },
 {
  "n": 34,
  "zh": "意见",
  "py": "yìjiàn",
  "pos": "Danh từ",
  "vn": "ý kiến; ý kiến phản đối",
  "hv": "ý kiến",
  "em": "💬",
  "lesson": 3,
  "explain": [
   "Ý kiến, quan điểm: 提意见 (góp ý), 听听大家的意见.",
   "对……有意见 = không hài lòng, có ý kiến phản đối; 没意见 = không phản đối, đồng ý (nghĩa trong bài)."
  ],
  "usage": "提意见 · 没意见 · 对……有意见.",
  "collo": [
   "提意见",
   "没意见",
   "对……有意见",
   "听听大家的意见"
  ],
  "colloFull": [
   {
    "zh": "提意见",
    "py": "Tí yìjiàn",
    "vn": "góp ý"
   },
   {
    "zh": "没意见",
    "py": "Méi yìjiàn",
    "vn": "không có ý kiến (đồng ý)"
   },
   {
    "zh": "对……有意见",
    "py": "Duì…… yǒu yìjiàn",
    "vn": "không hài lòng với …"
   },
   {
    "zh": "听听大家的意见",
    "py": "Tīngting dàjiā de yìjiàn",
    "vn": "nghe ý kiến của mọi người"
   }
  ],
  "patterns": [
   {
    "s": "对 + ai / việc + 有 / 没有意见",
    "m": "Có / không có ý kiến phản đối"
   }
  ],
  "ex_zh": "保证所有人对计划都没意见。",
  "ex_py": "Bǎozhèng suǒyǒu rén duì jìhuà dōu méi yìjiàn.",
  "ex_vn": "Đảm bảo mọi người đều không có ý kiến gì về kế hoạch.",
  "exList": [
   {
    "zh": "保证所有人对计划都没意见。",
    "py": "Bǎozhèng suǒyǒu rén duì jìhuà dōu méi yìjiàn.",
    "vn": "Đảm bảo mọi người đều không có ý kiến gì về kế hoạch."
   },
   {
    "zh": "您好，您对我们的服务有什么意见吗？",
    "py": "Nín hǎo, nín duì wǒmen de fúwù yǒu shénme yìjiàn ma?",
    "vn": "Chào quý khách, quý khách có ý kiến gì về dịch vụ của chúng tôi không ạ?"
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
    "c": "见",
    "p": "jiàn",
    "type": "会意字 · Chữ hội ý",
    "st": 4,
    "ord": "冂 → phẩy → sổ cong móc",
    "rad": "见 (kiến – thấy)",
    "mean": "thấy, gặp",
    "tip": "Phía trên là con mắt, phía dưới là người → người mở mắt nhìn → thấy. 不见了 = không thấy đâu nữa.",
    "cf": "贝 bèi — dưới là hai chấm",
    "w": "看见 / 再见 / 不见了"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Nếu mọi người không có ý kiến gì thì chúng ta quyết định như vậy nhé.",
    "answer": "要是大家都没意见，咱们就这么决定吧。",
    "answerPy": "Yàoshi dàjiā dōu méi yìjiàn, zánmen jiù zhème juédìng ba.",
    "note": "Ôn 要是……就…… (Bài 1 · điểm 2).",
    "pair": "没意见"
   },
   {
    "promptLang": "vi",
    "prompt": "Anh ấy không hài lòng với kế hoạch này, thế nhưng lại không nói ra.",
    "answer": "他对这个计划有意见，却没有说出来。",
    "answerPy": "Tā duì zhège jìhuà yǒu yìjiàn, què méiyǒu shuō chūlai.",
    "note": "Ôn 却 (Bài 16 · điểm 4).",
    "pair": "对……有意见，却……"
   }
  ]
 },
 {
  "n": 35,
  "zh": "细",
  "py": "xì",
  "pos": "Tính từ",
  "vn": "kỹ, tỉ mỉ; mảnh, nhỏ",
  "hv": "tế",
  "em": "🧵",
  "lesson": 3,
  "explain": [
   "Tỉ mỉ, kỹ lưỡng (nghĩa trong bài): 准备得很细, 想得很细.",
   "Mảnh, nhỏ (vật dài hoặc hạt nhỏ): 细线, 细雨 ↔ 粗 (to, thô)."
  ],
  "usage": "准备得很细 · 想得很细 · 越细越好 · 细雨.",
  "collo": [
   "想得很细",
   "准备得细",
   "细雨",
   "仔细"
  ],
  "colloFull": [
   {
    "zh": "想得很细",
    "py": "Xiǎng de hěn xì",
    "vn": "nghĩ rất kỹ"
   },
   {
    "zh": "准备得细",
    "py": "Zhǔnbèi de xì",
    "vn": "chuẩn bị kỹ"
   },
   {
    "zh": "细雨",
    "py": "Xì yǔ",
    "vn": "mưa phùn"
   },
   {
    "zh": "仔细",
    "py": "Zǐxì",
    "vn": "tỉ mỉ, cẩn thận"
   }
  ],
  "patterns": [
   {
    "s": "V + 得 + 很细",
    "m": "Bổ ngữ trình độ: làm rất kỹ"
   },
   {
    "s": "越细，越……",
    "m": "越……越…… với 细"
   }
  ],
  "ex_zh": "准备越细，烦恼越少。",
  "ex_py": "Zhǔnbèi yuè xì, fánnǎo yuè shǎo.",
  "ex_vn": "Chuẩn bị càng kỹ, phiền não càng ít.",
  "exList": [
   {
    "zh": "准备越细，烦恼越少。",
    "py": "Zhǔnbèi yuè xì, fánnǎo yuè shǎo.",
    "vn": "Chuẩn bị càng kỹ, phiền não càng ít."
   },
   {
    "zh": "这件事你再想细一点儿，别着急决定。",
    "py": "Zhè jiàn shì nǐ zài xiǎng xì yìdiǎnr, bié zháojí juédìng.",
    "vn": "Việc này bạn nghĩ kỹ thêm chút nữa, đừng vội quyết định."
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
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Kế hoạch lần này anh ấy làm rất tỉ mỉ, ngay cả thời tiết từng ngày cũng tìm hiểu rồi.",
    "answer": "这次的计划他做得很细，连每天的天气都了解了。",
    "answerPy": "Zhè cì de jìhuà tā zuò de hěn xì, lián měitiān de tiānqì dōu liǎojiě le.",
    "note": "Ôn 连……都…… (Bài 17 · điểm 4).",
    "pair": "V得很细"
   },
   {
    "promptLang": "vi",
    "prompt": "Mưa phùn rơi cả ngày, đường hơi trơn.",
    "answer": "细雨下了一整天，路有点儿滑。",
    "answerPy": "Xì yǔ xià le yì zhěngtiān, lù yǒudiǎnr huá.",
    "note": "细 = mảnh, nhỏ.",
    "pair": "细雨"
   }
  ]
 },
 {
  "n": 36,
  "zh": "烦恼",
  "py": "fánnǎo",
  "pos": "Tính từ",
  "vn": "phiền não, buồn phiền; (danh từ) nỗi phiền muộn",
  "hv": "phiền não",
  "em": "😩",
  "lesson": 3,
  "explain": [
   "Buồn phiền, khó chịu trong lòng; cũng hay dùng như danh từ: 烦恼越少 / 忘记烦恼 / 有很多烦恼 (nỗi phiền muộn). So sánh: 烦 (Bài 12) = bực, phiền — ngắn và khẩu ngữ hơn."
  ],
  "usage": "很烦恼 · 忘记烦恼 · 为……烦恼 · 没有烦恼.",
  "collo": [
   "忘记烦恼",
   "很烦恼",
   "没有烦恼",
   "为……烦恼"
  ],
  "colloFull": [
   {
    "zh": "忘记烦恼",
    "py": "Wàngjì fánnǎo",
    "vn": "quên phiền muộn"
   },
   {
    "zh": "很烦恼",
    "py": "Hěn fánnǎo",
    "vn": "rất buồn phiền"
   },
   {
    "zh": "没有烦恼",
    "py": "Méiyǒu fánnǎo",
    "vn": "không có phiền não"
   },
   {
    "zh": "为……烦恼",
    "py": "Wèi…… fánnǎo",
    "vn": "buồn phiền vì …"
   }
  ],
  "patterns": [
   {
    "s": "为 + việc + 烦恼",
    "m": "Buồn phiền vì việc gì"
   },
   {
    "s": "烦恼 + 越 + 少 / 多",
    "m": "Dùng như danh từ"
   }
  ],
  "ex_zh": "准备越细，烦恼越少。",
  "ex_py": "Zhǔnbèi yuè xì, fánnǎo yuè shǎo.",
  "ex_vn": "Chuẩn bị càng kỹ, phiền não càng ít.",
  "exList": [
   {
    "zh": "准备越细，烦恼越少。",
    "py": "Zhǔnbèi yuè xì, fánnǎo yuè shǎo.",
    "vn": "Chuẩn bị càng kỹ, phiền não càng ít."
   },
   {
    "zh": "我心情不好的时候，就会干点儿自己喜欢的事情，这样能让我暂时忘记烦恼。",
    "py": "Wǒ xīnqíng bù hǎo de shíhou, jiù huì gàn diǎnr zìjǐ xǐhuan de shìqing, zhèyàng néng ràng wǒ zànshí wàngjì fánnǎo.",
    "vn": "Lúc tâm trạng không tốt, tôi sẽ làm chút việc mình thích, như vậy có thể giúp tôi tạm quên phiền muộn."
   }
  ],
  "hanzi": [
   {
    "c": "烦",
    "p": "fán",
    "type": "左右结构 · Trái-phải",
    "st": 10,
    "ord": "火 (hỏa) trái → 页 (hiệt) phải",
    "rad": "火 (hỏa – lửa)",
    "mean": "phiền toái",
    "tip": "Bộ lửa 火 (nóng nảy trong đầu 页) → PHIỀN TOÁI, BỰC BỘI, kết hợp 恼(buồn bực) thành 烦恼 = PHIỀN MUỘN.",
    "cf": "烦 dễ nhầm với 炎 (yán – \"viêm, nóng\")",
    "w": "烦恼 / 麻烦 / 心烦"
   },
   {
    "c": "恼",
    "p": "nǎo",
    "type": "形声字 · Chữ hình thanh",
    "st": 9,
    "ord": "忄 → 亠 → 凶",
    "rad": "忄 (tâm – lòng)",
    "mean": "bực bội, phiền não, giận",
    "tip": "Lòng (忄) + phần 㐫 (giống 脑 bỏ 月): trong lòng rối như đầu óc bị đè nặng → phiền não — 烦恼, 恼火 (bực tức).",
    "cf": "脑 nǎo (não, đầu óc) — bên trái là 月; 烦 fán (phiền) — bên trái là 火",
    "w": "烦恼 / 恼火 / 苦恼"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Đừng buồn phiền vì chuyện nhỏ này nữa.",
    "answer": "别为这点儿小事烦恼了。",
    "answerPy": "Bié wèi zhè diǎnr xiǎoshì fánnǎo le.",
    "note": "为……烦恼; 别……了.",
    "pair": "为……烦恼"
   },
   {
    "promptLang": "vi",
    "prompt": "Ai cũng có những phiền muộn của riêng mình.",
    "answer": "每个人都有自己的烦恼。",
    "answerPy": "Měi gè rén dōu yǒu zìjǐ de fánnǎo.",
    "note": "烦恼 dùng như danh từ.",
    "pair": "有……的烦恼"
   }
  ]
 },
 {
  "n": 37,
  "zh": "百分之",
  "py": "bǎi fēn zhī",
  "pos": "Cụm từ",
  "vn": "phần trăm (… %)",
  "hv": "bách phân chi",
  "em": "💯",
  "lesson": 3,
  "explain": [
   "Cách đọc phần trăm: 百分之 + số = … %. Ví dụ 40% đọc 百分之四十, 85% → 百分之八十五, 100% → 百分之百. ⚠ Thứ tự ngược tiếng Việt: nói “phần trăm” trước, con số sau."
  ],
  "usage": "百分之五十 · 百分之百 · 百分之四十多.",
  "collo": [
   "百分之五十",
   "百分之百",
   "百分之四十多",
   "百分之几"
  ],
  "colloFull": [
   {
    "zh": "百分之五十",
    "py": "Bǎi fēn zhī wǔshí",
    "vn": "50%"
   },
   {
    "zh": "百分之百",
    "py": "Bǎi fēn zhī bǎi",
    "vn": "100%, hoàn toàn"
   },
   {
    "zh": "百分之四十多",
    "py": "Bǎi fēn zhī sìshí duō",
    "vn": "hơn 40%"
   },
   {
    "zh": "百分之几",
    "py": "Bǎi fēn zhī jǐ",
    "vn": "mấy phần trăm"
   }
  ],
  "patterns": [
   {
    "s": "百分之 + số",
    "m": "Đọc phần trăm"
   },
   {
    "s": "A 比 B + Adj + 了 + 百分之……",
    "m": "So sánh hơn kém bao nhiêu phần trăm"
   }
  ],
  "ex_zh": "机票价格比直飞便宜了百分之四十多。",
  "ex_py": "Jīpiào jiàgé bǐ zhífēi piányi le bǎi fēn zhī sìshí duō.",
  "ex_vn": "Giá vé máy bay rẻ hơn bay thẳng hơn 40%.",
  "exList": [
   {
    "zh": "机票价格比直飞便宜了百分之四十多。",
    "py": "Jīpiào jiàgé bǐ zhífēi piányi le bǎi fēn zhī sìshí duō.",
    "vn": "Giá vé máy bay rẻ hơn bay thẳng hơn 40%."
   },
   {
    "zh": "这次考试，我们班百分之九十的同学都通过了。",
    "py": "Zhè cì kǎoshì, wǒmen bān bǎi fēn zhī jiǔshí de tóngxué dōu tōngguò le.",
    "vn": "Kỳ thi lần này, 90% học sinh lớp chúng tôi đều đỗ."
   }
  ],
  "hanzi": [
   {
    "c": "百",
    "p": "bǎi",
    "type": "形声字 · Chữ hình thanh",
    "st": 6,
    "ord": "一 → 白",
    "rad": "白 (bạch – trắng) / 一",
    "mean": "một trăm; nhiều",
    "tip": "一 (một) đặt trên 白 (bái, gợi âm bǎi) → một trăm. Mẹo: 白 thêm một nét ngang trên đầu là thành 百.",
    "cf": "白 bái (trắng) — không có nét ngang trên; 自 zì (tự) — bên trong có hai nét ngang",
    "w": "一百 / 百分之 / 百货"
   },
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
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Hơn 60% học sinh lớp chúng tôi đã từng đến Trung Quốc.",
    "answer": "我们班百分之六十多的学生去过中国。",
    "answerPy": "Wǒmen bān bǎi fēn zhī liùshí duō de xuésheng qù guò Zhōngguó.",
    "note": "百分之 + số + 多 (hơn).",
    "pair": "百分之六十多"
   },
   {
    "promptLang": "vi",
    "prompt": "Năm nay giá vé rẻ hơn năm ngoái 20%.",
    "answer": "今年的票价比去年便宜了百分之二十。",
    "answerPy": "Jīnnián de piàojià bǐ qùnián piányi le bǎi fēn zhī èrshí.",
    "note": "Câu so sánh 比 + mức chênh lệch.",
    "pair": "比……便宜了百分之……"
   }
  ]
 },
 {
  "n": 38,
  "zh": "节省",
  "py": "jiéshěng",
  "pos": "Động từ",
  "vn": "tiết kiệm",
  "hv": "tiết tỉnh",
  "em": "💰",
  "lesson": 3,
  "explain": [
   "Dùng ít đi, không lãng phí (tiền, thời gian, sức lực): 节省钱, 节省时间. Gần nghĩa 节约."
  ],
  "usage": "节省时间 · 节省钱 · 节省下来的钱.",
  "collo": [
   "节省时间",
   "节省钱",
   "节省下来",
   "节省力气"
  ],
  "colloFull": [
   {
    "zh": "节省时间",
    "py": "Jiéshěng shíjiān",
    "vn": "tiết kiệm thời gian"
   },
   {
    "zh": "节省钱",
    "py": "Jiéshěng qián",
    "vn": "tiết kiệm tiền"
   },
   {
    "zh": "节省下来",
    "py": "Jiéshěng xiàlai",
    "vn": "tiết kiệm được"
   },
   {
    "zh": "节省力气",
    "py": "Jiéshěng lìqi",
    "vn": "đỡ tốn sức"
   }
  ],
  "patterns": [
   {
    "s": "节省 + 下来 + 的 + N",
    "m": "Bổ ngữ xu hướng 下来: giữ lại được"
   },
   {
    "s": "节省 ≈ 节约",
    "m": "Gần nghĩa: tiết kiệm"
   }
  ],
  "ex_zh": "节省下来的钱就当是给自己的大“红包”了。",
  "ex_py": "Jiéshěng xiàlai de qián jiù dàng shì gěi zìjǐ de dà “hóngbāo” le.",
  "ex_vn": "Số tiền tiết kiệm được thì coi như là một “phong bao lì xì” lớn tặng cho chính mình.",
  "exList": [
   {
    "zh": "节省下来的钱就当是给自己的大“红包”了。",
    "py": "Jiéshěng xiàlai de qián jiù dàng shì gěi zìjǐ de dà “hóngbāo” le.",
    "vn": "Số tiền tiết kiệm được thì coi như là một “phong bao lì xì” lớn tặng cho chính mình."
   },
   {
    "zh": "坐地铁上班，可以节省很多时间。",
    "py": "Zuò dìtiě shàngbān, kěyǐ jiéshěng hěn duō shíjiān.",
    "vn": "Đi tàu điện ngầm đi làm có thể tiết kiệm rất nhiều thời gian."
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
    "c": "省",
    "p": "shěng",
    "type": "上下结构 · Trên-dưới",
    "st": 9,
    "ord": "少 trên → 目 dưới",
    "rad": "目 (mục – mắt)",
    "mean": "tỉnh; tiết kiệm",
    "tip": "Chữ hội ý mắt 目 nhìn KỸ (少) → xem xét; mượn chỉ đơn vị hành chính TỈNH. Đọc \"xǐng\" khi nghĩa là \"tỉnh ngộ\".",
    "cf": "少 (shǎo – \"ít\", phần trên)",
    "w": "省 / 广东省 / 省钱"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Để tiết kiệm tiền, chúng tôi chọn bay nối chuyến.",
    "answer": "为了节省钱，我们选择了转机。",
    "answerPy": "Wèile jiéshěng qián, wǒmen xuǎnzé le zhuǎnjī.",
    "note": "为了 (HSK 3).",
    "pair": "为了节省……"
   },
   {
    "promptLang": "vi",
    "prompt": "Số tiền tiết kiệm được tôi định dùng để đi du lịch.",
    "answer": "节省下来的钱，我打算用来旅行。",
    "answerPy": "Jiéshěng xiàlai de qián, wǒ dǎsuàn yònglái lǚxíng.",
    "note": "V + 下来 + 的 + N.",
    "pair": "节省下来的钱"
   }
  ]
 },
 {
  "n": 39,
  "zh": "当",
  "py": "dàng",
  "pos": "Động từ",
  "vn": "coi như, xem như",
  "hv": "đáng",
  "em": "💭",
  "lesson": 3,
  "explain": [
   "Đọc dàng: coi như, xem như (dù thật ra không phải vậy): 就当是…… / 把 A 当 B.",
   "⚠ Khác 当 dāng (Bài 1) = làm (nghề, chức vụ): 当老师. Cùng một chữ, khác âm, khác nghĩa."
  ],
  "usage": "(就)当是…… · 把……当…… · 就当没听见.",
  "collo": [
   "就当是……",
   "把他当朋友",
   "就当没听见",
   "别当真"
  ],
  "colloFull": [
   {
    "zh": "就当是……",
    "py": "Jiù dàng shì……",
    "vn": "coi như là …"
   },
   {
    "zh": "把他当朋友",
    "py": "Bǎ tā dàng péngyou",
    "vn": "coi anh ấy là bạn"
   },
   {
    "zh": "就当没听见",
    "py": "Jiù dàng méi tīngjiàn",
    "vn": "coi như không nghe thấy"
   },
   {
    "zh": "别当真",
    "py": "Bié dàngzhēn",
    "vn": "đừng tưởng thật"
   }
  ],
  "patterns": [
   {
    "s": "(就)当(是) + N / mệnh đề",
    "m": "Coi như là …"
   },
   {
    "s": "把 + A + 当 + B",
    "m": "Coi A như B"
   }
  ],
  "ex_zh": "节省下来的钱就当是给自己的大“红包”了。",
  "ex_py": "Jiéshěng xiàlai de qián jiù dàng shì gěi zìjǐ de dà “hóngbāo” le.",
  "ex_vn": "Số tiền tiết kiệm được thì coi như là một “phong bao lì xì” lớn tặng cho chính mình.",
  "exList": [
   {
    "zh": "节省下来的钱就当是给自己的大“红包”了。",
    "py": "Jiéshěng xiàlai de qián jiù dàng shì gěi zìjǐ de dà “hóngbāo” le.",
    "vn": "Số tiền tiết kiệm được thì coi như là một “phong bao lì xì” lớn tặng cho chính mình."
   },
   {
    "zh": "这次没考好，就当是一次经验吧，下次努力就是了。",
    "py": "Zhè cì méi kǎohǎo, jiù dàng shì yí cì jīngyàn ba, xià cì nǔlì jiùshì le.",
    "vn": "Lần này thi không tốt thì cứ coi như là một lần rút kinh nghiệm, lần sau cố gắng là được."
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
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Bạn cứ coi đây như nhà mình, đừng khách sáo.",
    "answer": "你就当这是自己家，别客气。",
    "answerPy": "Nǐ jiù dàng zhè shì zìjǐ jiā, bié kèqi.",
    "note": "当 dàng = coi như.",
    "pair": "就当……"
   },
   {
    "promptLang": "vi",
    "prompt": "Lần này thi không tốt cũng không sao, cứ coi như là một lần rút kinh nghiệm.",
    "answer": "这次没考好也没关系，就当是一次经验，下次努力就是了。",
    "answerPy": "Zhè cì méi kǎohǎo yě méiguānxì, jiù dàng shì yí cì jīngyàn, xià cì nǔlì jiùshì le.",
    "note": "Ôn ×就是了 (Bài 2 · điểm 1).",
    "pair": "就当是……，……就是了"
   }
  ]
 },
 {
  "n": 40,
  "zh": "红包",
  "py": "hóngbāo",
  "pos": "Danh từ",
  "vn": "phong bao lì xì; tiền thưởng",
  "hv": "hồng bao",
  "em": "🧧",
  "lesson": 3,
  "explain": [
   "Phong bì đỏ đựng tiền mừng (Tết, cưới, sinh nhật) — giống lì xì của Việt Nam; nghĩa rộng: tiền thưởng. Ngày nay còn có 微信红包 (lì xì điện tử)."
  ],
  "usage": "发红包 · 给红包 · 收红包 · 大红包.",
  "collo": [
   "发红包",
   "给红包",
   "收红包",
   "大红包"
  ],
  "colloFull": [
   {
    "zh": "发红包",
    "py": "Fā hóngbāo",
    "vn": "phát lì xì"
   },
   {
    "zh": "给红包",
    "py": "Gěi hóngbāo",
    "vn": "cho lì xì"
   },
   {
    "zh": "收红包",
    "py": "Shōu hóngbāo",
    "vn": "nhận lì xì"
   },
   {
    "zh": "大红包",
    "py": "Dà hóngbāo",
    "vn": "phong bao lì xì lớn"
   }
  ],
  "patterns": [
   {
    "s": "给 + ai + 红包",
    "m": "Cho ai lì xì (tân ngữ kép)"
   }
  ],
  "ex_zh": "节省下来的钱就当是给自己的大“红包”了。",
  "ex_py": "Jiéshěng xiàlai de qián jiù dàng shì gěi zìjǐ de dà “hóngbāo” le.",
  "ex_vn": "Số tiền tiết kiệm được thì coi như là một “phong bao lì xì” lớn tặng cho chính mình.",
  "exList": [
   {
    "zh": "节省下来的钱就当是给自己的大“红包”了。",
    "py": "Jiéshěng xiàlai de qián jiù dàng shì gěi zìjǐ de dà “hóngbāo” le.",
    "vn": "Số tiền tiết kiệm được thì coi như là một “phong bao lì xì” lớn tặng cho chính mình."
   },
   {
    "zh": "过春节的时候，爷爷奶奶给了我一个大红包。",
    "py": "Guò Chūnjié de shíhou, yéye nǎinai gěi le wǒ yí gè dà hóngbāo.",
    "vn": "Lúc ăn Tết, ông bà cho tôi một phong bao lì xì to."
   }
  ],
  "hanzi": [
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
    "c": "包",
    "p": "bāo",
    "type": "半包围结构 · Nửa bao quanh",
    "st": 5,
    "ord": "勹 bao → 巳 trong",
    "rad": "勹 (bao)",
    "mean": "bọc, túi",
    "tip": "勹(bọc) + 巳 → BỌC, GÓI. 包子 = bánh bọc nhân; 包饺子 (Bài 3); 面包; 抱 (Bài 17) có 包.",
    "cf": "抱 (bào – ôm)",
    "w": "包子 / 包饺子 / 面包 / 书包"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Tết năm nay tôi nhận được rất nhiều lì xì.",
    "answer": "今年春节我收到了很多红包。",
    "answerPy": "Jīnnián Chūnjié wǒ shōudào le hěn duō hóngbāo.",
    "note": "收到 + N.",
    "pair": "收到红包"
   },
   {
    "promptLang": "vi",
    "prompt": "Ở Việt Nam, ngày Tết người lớn cũng lì xì cho trẻ con.",
    "answer": "在越南，过春节时大人也给孩子发红包。",
    "answerPy": "Zài Yuènán, guò Chūnjié shí dàrén yě gěi háizi fā hóngbāo.",
    "note": "给 + ai + 发红包.",
    "pair": "给……发红包"
   }
  ]
 },
 {
  "n": 41,
  "zh": "卷",
  "py": "juàn",
  "pos": "Lượng từ",
  "vn": "quyển, cuốn (sách); tập",
  "hv": "quyển",
  "em": "📚",
  "lesson": 4,
  "explain": [
   "Lượng từ cho sách (nghĩa cổ: cuộn sách), hay gặp trong câu 读万卷书 (đọc vạn quyển sách); cũng chỉ tập sách: 上卷 / 下卷. ⚠ Chữ 卷 đọc juǎn là động từ “cuộn”."
  ],
  "usage": "万卷书 · 上卷 · 下卷 · 第一卷.",
  "collo": [
   "万卷书",
   "上卷",
   "下卷",
   "第一卷"
  ],
  "colloFull": [
   {
    "zh": "万卷书",
    "py": "Wàn juàn shū",
    "vn": "vạn quyển sách"
   },
   {
    "zh": "上卷",
    "py": "Shàng juàn",
    "vn": "tập một (quyển thượng)"
   },
   {
    "zh": "下卷",
    "py": "Xià juàn",
    "vn": "tập hai (quyển hạ)"
   },
   {
    "zh": "第一卷",
    "py": "Dì yí juàn",
    "vn": "tập thứ nhất"
   }
  ],
  "patterns": [
   {
    "s": "数 + 卷 + 书",
    "m": "Lượng từ (văn viết) của sách"
   }
  ],
  "ex_zh": "读万卷书，行万里路。",
  "ex_py": "Dú wàn juàn shū, xíng wànlǐ lù.",
  "ex_vn": "Đọc vạn quyển sách, đi vạn dặm đường.",
  "exList": [
   {
    "zh": "读万卷书，行万里路。",
    "py": "Dú wàn juàn shū, xíng wànlǐ lù.",
    "vn": "Đọc vạn quyển sách, đi vạn dặm đường."
   },
   {
    "zh": "这套小说一共有三卷，我已经看完两卷了。",
    "py": "Zhè tào xiǎoshuō yígòng yǒu sān juàn, wǒ yǐjīng kànwán liǎng juàn le.",
    "vn": "Bộ tiểu thuyết này có tổng cộng ba tập, tôi đã đọc xong hai tập rồi."
   }
  ],
  "hanzi": [
   {
    "c": "卷",
    "p": "juàn",
    "type": "形声字 · Chữ hình thanh",
    "st": 8,
    "ord": "龹 → 㔾",
    "rad": "㔾 (tiết)",
    "mean": "cuộn (juǎn); quyển, tập sách (juàn)",
    "tip": "Phần trên (龹) như hai tay vo tròn + 㔾 (người cuộn mình): cuộn lại → juǎn (cuộn); sách xưa viết trên thẻ tre cuộn tròn → lượng từ juàn: 万卷书 (vạn quyển sách), 试卷 (bài thi).",
    "cf": "券 quàn (vé, phiếu) — dưới là 刀; 拳 quán (nắm đấm) — dưới là 手",
    "w": "万卷书 / 试卷 / 卷起来"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Cuốn sách này chia làm hai tập thượng và hạ.",
    "answer": "这本书分为上下两卷。",
    "answerPy": "Zhè běn shū fēnwéi shàngxià liǎng juàn.",
    "note": "Ôn 分为 (Bài 14).",
    "pair": "分为……卷"
   },
   {
    "promptLang": "vi",
    "prompt": "Đọc vạn quyển sách không bằng đi vạn dặm đường.",
    "answer": "读万卷书不如行万里路。",
    "answerPy": "Dú wàn juàn shū bùrú xíng wànlǐ lù.",
    "note": "Ôn A不如B (Bài 15 · điểm 4).",
    "pair": "A不如B"
   }
  ]
 },
 {
  "n": 42,
  "zh": "里",
  "py": "lǐ",
  "pos": "Lượng từ",
  "vn": "dặm (đơn vị đo chiều dài Trung Quốc, 1 dặm = 500 m)",
  "hv": "lý",
  "em": "📏",
  "lesson": 4,
  "explain": [
   "Đơn vị đo độ dài của Trung Quốc: 1 里 = 500 mét (公里 = km). 万里 chỉ đường rất xa; 万里长城 = Vạn Lý Trường Thành."
  ],
  "usage": "万里路 · 几里路 · 万里长城 · 公里.",
  "collo": [
   "万里路",
   "万里长城",
   "公里",
   "几里路"
  ],
  "colloFull": [
   {
    "zh": "万里路",
    "py": "Wànlǐ lù",
    "vn": "vạn dặm đường"
   },
   {
    "zh": "万里长城",
    "py": "Wànlǐ Chángchéng",
    "vn": "Vạn Lý Trường Thành"
   },
   {
    "zh": "公里",
    "py": "Gōnglǐ",
    "vn": "ki-lô-mét"
   },
   {
    "zh": "几里路",
    "py": "Jǐ lǐ lù",
    "vn": "mấy dặm đường"
   }
  ],
  "patterns": [
   {
    "s": "数 + 里 + 路",
    "m": "Mấy dặm đường"
   }
  ],
  "ex_zh": "读万卷书，行万里路。",
  "ex_py": "Dú wàn juàn shū, xíng wànlǐ lù.",
  "ex_vn": "Đọc vạn quyển sách, đi vạn dặm đường.",
  "exList": [
   {
    "zh": "读万卷书，行万里路。",
    "py": "Dú wàn juàn shū, xíng wànlǐ lù.",
    "vn": "Đọc vạn quyển sách, đi vạn dặm đường."
   },
   {
    "zh": "我家离学校只有两里路，走路十分钟就到了。",
    "py": "Wǒ jiā lí xuéxiào zhǐyǒu liǎng lǐ lù, zǒulù shí fēnzhōng jiù dào le.",
    "vn": "Nhà tôi cách trường chỉ có hai dặm (1 km), đi bộ mười phút là tới."
   }
  ],
  "hanzi": [
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
    "prompt": "Vạn Lý Trường Thành dài hơn một vạn dặm.",
    "answer": "万里长城有一万多里长。",
    "answerPy": "Wànlǐ Chángchéng yǒu yíwàn duō lǐ cháng.",
    "note": "Số + 里 + 长 (dài bao nhiêu).",
    "pair": "有……里长"
   },
   {
    "promptLang": "vi",
    "prompt": "Từ đây đến ga tàu khoảng năm dặm.",
    "answer": "从这儿到火车站大约有五里路。",
    "answerPy": "Cóng zhèr dào huǒchēzhàn dàyuē yǒu wǔ lǐ lù.",
    "note": "Ôn 大约 (Bài 13 · điểm 3).",
    "pair": "大约……里"
   }
  ]
 },
 {
  "n": 43,
  "zh": "要是",
  "py": "yàoshi",
  "pos": "Liên từ",
  "vn": "nếu, nếu như",
  "hv": "yếu thị",
  "em": "🤔",
  "lesson": 4,
  "explain": [
   "Nếu (khẩu ngữ, = 如果), đã học ở Bài 1 với 要是……，就……; bài này kết hợp thêm 否则 (Bài 8): 要是……，(就)……，否则……. Có thể thêm 的话 ở cuối vế giả thiết."
  ],
  "usage": "要是……就…… · 要是……的话 · 要是……，否则…….",
  "collo": [
   "要是……就……",
   "要是……的话",
   "要是你同意",
   "要是下雨"
  ],
  "colloFull": [
   {
    "zh": "要是……就……",
    "py": "Yàoshi…… jiù……",
    "vn": "nếu … thì …"
   },
   {
    "zh": "要是……的话",
    "py": "Yàoshi…… dehuà",
    "vn": "nếu như …"
   },
   {
    "zh": "要是你同意",
    "py": "Yàoshi nǐ tóngyì",
    "vn": "nếu bạn đồng ý"
   },
   {
    "zh": "要是下雨",
    "py": "Yàoshi xiàyǔ",
    "vn": "nếu trời mưa"
   }
  ],
  "patterns": [
   {
    "s": "要是 + giả thiết，(chủ ngữ) + 就 + kết quả",
    "m": "Ôn Bài 1 · điểm 2"
   },
   {
    "s": "要是……，就……，否则……",
    "m": "Bài 20 · điểm 4"
   }
  ],
  "ex_zh": "你们要是想多了解中国，就不能只通过读书，还要多出门旅行，否则只能认识课本里的中国。",
  "ex_py": "Nǐmen yàoshi xiǎng duō liǎojiě Zhōngguó, jiù bù néng zhǐ tōngguò dúshū, hái yào duō chūmén lǚxíng, fǒuzé zhǐnéng rènshi kèběn lǐ de Zhōngguó.",
  "ex_vn": "Các em nếu muốn hiểu thêm về Trung Quốc thì không thể chỉ qua sách vở, còn phải ra ngoài du lịch nhiều, nếu không thì chỉ biết một Trung Quốc trong sách giáo khoa.",
  "exList": [
   {
    "zh": "你们要是想多了解中国，就不能只通过读书，还要多出门旅行，否则只能认识课本里的中国。",
    "py": "Nǐmen yàoshi xiǎng duō liǎojiě Zhōngguó, jiù bù néng zhǐ tōngguò dúshū, hái yào duō chūmén lǚxíng, fǒuzé zhǐnéng rènshi kèběn lǐ de Zhōngguó.",
    "vn": "Các em nếu muốn hiểu thêm về Trung Quốc thì không thể chỉ qua sách vở, còn phải ra ngoài du lịch nhiều, nếu không thì chỉ biết một Trung Quốc trong sách giáo khoa."
   },
   {
    "zh": "要是出去的话，咱们就爬山，否则我哪儿都不去。",
    "py": "Yàoshi chūqu dehuà, zánmen jiù páshān, fǒuzé wǒ nǎr dōu bú qù.",
    "vn": "Nếu đi ra ngoài thì mình đi leo núi, nếu không thì tớ chẳng đi đâu cả."
   }
  ],
  "hanzi": [
   {
    "c": "要",
    "p": "yào",
    "type": "上下结构 · Trên-dưới",
    "st": 9,
    "ord": "覀(biến thể) trên → 女 dưới",
    "rad": "覀 (biến thể của 西)",
    "mean": "muốn, cần, nếu",
    "tip": "要 vốn nghĩa MUỐN/CẦN, mượn dùng làm liên từ giả thiết khi kết hợp 是(là) thành 要是 = NẾU (là trường hợp này).",
    "cf": "腰 (yāo – \"thắt lưng\", bộ 月\")",
    "w": "要是 / 要不 / 主要"
   },
   {
    "c": "是",
    "p": "shi",
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
    "prompt": "Nếu ngày mai trời đẹp, chúng ta đi leo núi nhé.",
    "answer": "要是明天天气好，我们就去爬山吧。",
    "answerPy": "Yàoshi míngtiān tiānqì hǎo, wǒmen jiù qù páshān ba.",
    "note": "要是……就…… (Bài 1 · điểm 2).",
    "pair": "要是……就……"
   },
   {
    "promptLang": "vi",
    "prompt": "Nếu bạn đồng ý thì kế hoạch này thông qua, nếu không có thể phải thảo luận lại.",
    "answer": "要是你同意的话，这个计划就通过，否则可能需要重新讨论。",
    "answerPy": "Yàoshi nǐ tóngyì dehuà, zhège jìhuà jiù tōngguò, fǒuzé kěnéng xūyào chóngxīn tǎolùn.",
    "note": "Câu ví dụ của sách (Bài 20 · điểm 4).",
    "pair": "要是……就……，否则……"
   }
  ]
 },
 {
  "n": 44,
  "zh": "少数",
  "py": "shǎoshù",
  "pos": "Danh từ",
  "vn": "thiểu số, số ít",
  "hv": "thiểu số",
  "em": "🧩",
  "lesson": 4,
  "explain": [
   "Số ít, phần nhỏ ↔ 多数 (đa số). 少数民族 = dân tộc thiểu số — Trung Quốc có 56 dân tộc, ngoài người Hán (汉族) có 55 dân tộc thiểu số."
  ],
  "usage": "少数民族 · 少数人 · 少数服从多数.",
  "collo": [
   "少数民族",
   "少数人",
   "极少数",
   "少数服从多数"
  ],
  "colloFull": [
   {
    "zh": "少数民族",
    "py": "Shǎoshù mínzú",
    "vn": "dân tộc thiểu số"
   },
   {
    "zh": "少数人",
    "py": "Shǎoshù rén",
    "vn": "số ít người"
   },
   {
    "zh": "极少数",
    "py": "Jí shǎoshù",
    "vn": "cực ít"
   },
   {
    "zh": "少数服从多数",
    "py": "Shǎoshù fúcóng duōshù",
    "vn": "thiểu số phục tùng đa số"
   }
  ],
  "patterns": [
   {
    "s": "少数 ↔ 多数",
    "m": "số ít ↔ đa số"
   }
  ],
  "ex_zh": "白家月等人想了解少数民族泼水节，就去了西双版纳。",
  "ex_py": "Bái Jiāyuè děng rén xiǎng liǎojiě shǎoshù mínzú Pōshuǐjié, jiù qù le Xīshuāngbǎnnà.",
  "ex_vn": "Bạch Gia Nguyệt và mọi người muốn tìm hiểu Tết té nước của dân tộc thiểu số nên đã đến Tây Song Bản Nạp.",
  "exList": [
   {
    "zh": "白家月等人想了解少数民族泼水节，就去了西双版纳。",
    "py": "Bái Jiāyuè děng rén xiǎng liǎojiě shǎoshù mínzú Pōshuǐjié, jiù qù le Xīshuāngbǎnnà.",
    "vn": "Bạch Gia Nguyệt và mọi người muốn tìm hiểu Tết té nước của dân tộc thiểu số nên đã đến Tây Song Bản Nạp."
   },
   {
    "zh": "只有少数人反对这个计划，多数人都同意。",
    "py": "Zhǐyǒu shǎoshù rén fǎnduì zhège jìhuà, duōshù rén dōu tóngyì.",
    "vn": "Chỉ có số ít người phản đối kế hoạch này, đa số đều đồng ý."
   }
  ],
  "hanzi": [
   {
    "c": "少",
    "p": "shǎo",
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
    "prompt": "Việt Nam cũng có rất nhiều dân tộc thiểu số.",
    "answer": "越南也有很多少数民族。",
    "answerPy": "Yuènán yě yǒu hěn duō shǎoshù mínzú.",
    "note": "少数民族.",
    "pair": "少数民族"
   },
   {
    "promptLang": "vi",
    "prompt": "Đối với kế hoạch này, chỉ có số ít người có ý kiến.",
    "answer": "对于这个计划，只有少数人有意见。",
    "answerPy": "Duìyú zhège jìhuà, zhǐyǒu shǎoshù rén yǒu yìjiàn.",
    "note": "Ôn 对于 (Bài 14 · điểm 4).",
    "pair": "对于……，只有少数人……"
   }
  ]
 },
 {
  "n": 45,
  "zh": "民族",
  "py": "mínzú",
  "pos": "Danh từ",
  "vn": "dân tộc",
  "hv": "dân tộc",
  "em": "🎎",
  "lesson": 4,
  "explain": [
   "Cộng đồng người có chung ngôn ngữ, văn hóa, phong tục; ⚠ đọc mínzú (zú thanh 2)."
  ],
  "usage": "少数民族 · 民族文化 · 民族服装.",
  "collo": [
   "少数民族",
   "民族文化",
   "民族服装",
   "各个民族"
  ],
  "colloFull": [
   {
    "zh": "少数民族",
    "py": "Shǎoshù mínzú",
    "vn": "dân tộc thiểu số"
   },
   {
    "zh": "民族文化",
    "py": "Mínzú wénhuà",
    "vn": "văn hóa dân tộc"
   },
   {
    "zh": "民族服装",
    "py": "Mínzú fúzhuāng",
    "vn": "trang phục dân tộc"
   },
   {
    "zh": "各个民族",
    "py": "Gège mínzú",
    "vn": "các dân tộc"
   }
  ],
  "patterns": [
   {
    "s": "民族 + 文化 / 服装 / 节日",
    "m": "Làm định ngữ không cần 的"
   }
  ],
  "ex_zh": "白家月等人想了解少数民族泼水节，就去了西双版纳。",
  "ex_py": "Bái Jiāyuè děng rén xiǎng liǎojiě shǎoshù mínzú Pōshuǐjié, jiù qù le Xīshuāngbǎnnà.",
  "ex_vn": "Bạch Gia Nguyệt và mọi người muốn tìm hiểu Tết té nước của dân tộc thiểu số nên đã đến Tây Song Bản Nạp.",
  "exList": [
   {
    "zh": "白家月等人想了解少数民族泼水节，就去了西双版纳。",
    "py": "Bái Jiāyuè děng rén xiǎng liǎojiě shǎoshù mínzú Pōshuǐjié, jiù qù le Xīshuāngbǎnnà.",
    "vn": "Bạch Gia Nguyệt và mọi người muốn tìm hiểu Tết té nước của dân tộc thiểu số nên đã đến Tây Song Bản Nạp."
   },
   {
    "zh": "中国有56个民族，越南有54个民族。",
    "py": "Zhōngguó yǒu 56 gè mínzú, Yuènán yǒu 54 gè mínzú.",
    "vn": "Trung Quốc có 56 dân tộc, Việt Nam có 54 dân tộc."
   }
  ],
  "hanzi": [
   {
    "c": "民",
    "p": "mín",
    "type": "象形字 · Chữ tượng hình",
    "st": 5,
    "ord": "𠃍 → 𠃊 → 一 → 乚",
    "rad": "乙 (ất)",
    "mean": "dân, người dân; dân gian",
    "tip": "Chữ cổ vẽ con mắt bị gai đâm (người nô lệ) → dần thành nghĩa “dân thường”. Nay: 人民 (nhân dân), 民族 (dân tộc), 农民 (nông dân).",
    "cf": "氏 shì (họ, thị) — không có nét ngang gập ở giữa; 眠 mián (ngủ) — thêm 目",
    "w": "人民 / 民族 / 农民"
   },
   {
    "c": "族",
    "p": "zú",
    "type": "左右结构 · Trái-phải",
    "st": 11,
    "ord": "方 trái → 𠂉矢 phải",
    "rad": "方 (phương)",
    "mean": "tộc",
    "tip": "Cờ 方 + tên 矢 → nhóm người cùng chiến đấu dưới một lá cờ → TỘC. 民族, 家族, 汉族.",
    "cf": "旅 (lǚ – lữ, cùng bộ)",
    "w": "民族 / 少数民族 / 家族"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Mỗi dân tộc đều có ngày lễ của riêng mình.",
    "answer": "每个民族都有自己的节日。",
    "answerPy": "Měi gè mínzú dōu yǒu zìjǐ de jiérì.",
    "note": "每……都…….",
    "pair": "民族 + 节日"
   },
   {
    "promptLang": "vi",
    "prompt": "Trang phục dân tộc của họ vừa đẹp vừa có nét riêng.",
    "answer": "他们的民族服装既漂亮又有特点。",
    "answerPy": "Tāmen de mínzú fúzhuāng jì piàoliang yòu yǒu tèdiǎn.",
    "note": "Ôn 既……又…… (Bài 4 · điểm 3).",
    "pair": "既……又……"
   }
  ]
 },
 {
  "n": 46,
  "zh": "导游",
  "py": "dǎoyóu",
  "pos": "Danh từ / Động từ",
  "vn": "hướng dẫn viên du lịch; dẫn đoàn tham quan",
  "hv": "đạo du",
  "em": "🚩",
  "lesson": 4,
  "explain": [
   "Danh từ: hướng dẫn viên du lịch (导 = dẫn; 游 = đi chơi).",
   "Động từ: dẫn đoàn tham quan, hướng dẫn du lịch."
  ],
  "usage": "做导游 · 中文导游 · 导游向……解释 / 介绍.",
  "collo": [
   "做导游",
   "中文导游",
   "导游证",
   "跟着导游"
  ],
  "colloFull": [
   {
    "zh": "做导游",
    "py": "Zuò dǎoyóu",
    "vn": "làm hướng dẫn viên"
   },
   {
    "zh": "中文导游",
    "py": "Zhōngwén dǎoyóu",
    "vn": "hướng dẫn viên tiếng Trung"
   },
   {
    "zh": "导游证",
    "py": "Dǎoyóu zhèng",
    "vn": "thẻ hướng dẫn viên"
   },
   {
    "zh": "跟着导游",
    "py": "Gēnzhe dǎoyóu",
    "vn": "đi theo hướng dẫn viên"
   }
  ],
  "patterns": [
   {
    "s": "是 / 做 + 导游",
    "m": "Nghề nghiệp"
   },
   {
    "s": "导游 + 向 + ai + 解释 / 介绍",
    "m": "Hướng dẫn viên giải thích / giới thiệu với ai"
   }
  ],
  "ex_zh": "泼水节上，导游向他们解释说，被泼的水越多，新的一年就会越健康、幸福。",
  "ex_py": "Pōshuǐjié shàng, dǎoyóu xiàng tāmen jiěshì shuō, bèi pō de shuǐ yuè duō, xīn de yì nián jiù huì yuè jiànkāng, xìngfú.",
  "ex_vn": "Trong Tết té nước, hướng dẫn viên giải thích với họ rằng càng bị té nhiều nước thì năm mới càng khỏe mạnh, hạnh phúc.",
  "exList": [
   {
    "zh": "泼水节上，导游向他们解释说，被泼的水越多，新的一年就会越健康、幸福。",
    "py": "Pōshuǐjié shàng, dǎoyóu xiàng tāmen jiěshì shuō, bèi pō de shuǐ yuè duō, xīn de yì nián jiù huì yuè jiànkāng, xìngfú.",
    "vn": "Trong Tết té nước, hướng dẫn viên giải thích với họ rằng càng bị té nhiều nước thì năm mới càng khỏe mạnh, hạnh phúc."
   },
   {
    "zh": "我姐姐是导游，经常带外国游客去长城。",
    "py": "Wǒ jiějie shì dǎoyóu, jīngcháng dài wàiguó yóukè qù Chángchéng.",
    "vn": "Chị tôi là hướng dẫn viên du lịch, thường dẫn khách nước ngoài đi Trường Thành."
   }
  ],
  "hanzi": [
   {
    "c": "导",
    "p": "dǎo",
    "type": "上下结构 · Trên-dưới",
    "st": 6,
    "ord": "巳 trên → 寸 dưới",
    "rad": "寸 (thốn)",
    "mean": "dẫn",
    "tip": "Giản thể của 導 (đường 道 + tay 寸 dẫn đi) → DẪN ĐƯỜNG, HƯỚNG DẪN. 导游 = dẫn du lịch; 领导 = lãnh đạo.",
    "cf": "异 (yì – khác)",
    "w": "导游 / 领导 / 导演"
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
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Hướng dẫn viên giới thiệu với chúng tôi lịch sử của Tây An.",
    "answer": "导游向我们介绍了西安的历史。",
    "answerPy": "Dǎoyóu xiàng wǒmen jièshào le Xī'ān de lìshǐ.",
    "note": "向 + ai + 介绍 (HSK 3).",
    "pair": "导游向……介绍……"
   },
   {
    "promptLang": "vi",
    "prompt": "Làm hướng dẫn viên tuy vất vả nhưng được đi rất nhiều nơi.",
    "answer": "做导游虽然辛苦，但是能去很多地方。",
    "answerPy": "Zuò dǎoyóu suīrán xīnkǔ, dànshì néng qù hěn duō dìfang.",
    "note": "Ôn 虽然……但是…….",
    "pair": "做导游"
   }
  ]
 },
 {
  "n": 47,
  "zh": "解释",
  "py": "jiěshì",
  "pos": "Động từ",
  "vn": "giải thích",
  "hv": "giải thích",
  "em": "🗣️",
  "lesson": 4,
  "explain": [
   "Nói rõ ý nghĩa, lý do của việc gì để người khác hiểu: 解释问题, 向 + ai + 解释."
  ],
  "usage": "解释清楚 · 向……解释 · 解释一下 · 听我解释.",
  "collo": [
   "解释清楚",
   "向老师解释",
   "解释原因",
   "听我解释"
  ],
  "colloFull": [
   {
    "zh": "解释清楚",
    "py": "Jiěshì qīngchu",
    "vn": "giải thích rõ"
   },
   {
    "zh": "向老师解释",
    "py": "Xiàng lǎoshī jiěshì",
    "vn": "giải thích với thầy"
   },
   {
    "zh": "解释原因",
    "py": "Jiěshì yuányīn",
    "vn": "giải thích nguyên nhân"
   },
   {
    "zh": "听我解释",
    "py": "Tīng wǒ jiěshì",
    "vn": "nghe tôi giải thích"
   }
  ],
  "patterns": [
   {
    "s": "向 + ai + 解释 + việc",
    "m": "Giải thích với ai"
   },
   {
    "s": "解释 + 清楚 / 一下",
    "m": "Bổ ngữ kết quả / động lượng"
   }
  ],
  "ex_zh": "泼水节上，导游向他们解释说，被泼的水越多，新的一年就会越健康、幸福。",
  "ex_py": "Pōshuǐjié shàng, dǎoyóu xiàng tāmen jiěshì shuō, bèi pō de shuǐ yuè duō, xīn de yì nián jiù huì yuè jiànkāng, xìngfú.",
  "ex_vn": "Trong Tết té nước, hướng dẫn viên giải thích với họ rằng càng bị té nhiều nước thì năm mới càng khỏe mạnh, hạnh phúc.",
  "exList": [
   {
    "zh": "泼水节上，导游向他们解释说，被泼的水越多，新的一年就会越健康、幸福。",
    "py": "Pōshuǐjié shàng, dǎoyóu xiàng tāmen jiěshì shuō, bèi pō de shuǐ yuè duō, xīn de yì nián jiù huì yuè jiànkāng, xìngfú.",
    "vn": "Trong Tết té nước, hướng dẫn viên giải thích với họ rằng càng bị té nhiều nước thì năm mới càng khỏe mạnh, hạnh phúc."
   },
   {
    "zh": "这个问题你都解释清楚了，我们完全理解，会支持你们的。",
    "py": "Zhège wèntí nǐ dōu jiěshì qīngchu le, wǒmen wánquán lǐjiě, huì zhīchí nǐmen de.",
    "vn": "Vấn đề này anh đã giải thích rõ rồi, chúng tôi hoàn toàn hiểu, sẽ ủng hộ các anh."
   }
  ],
  "hanzi": [
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
   },
   {
    "c": "释",
    "p": "shì",
    "type": "左右结构 · Trái-phải (giản thể)",
    "st": 12,
    "ord": "釆 trái → 尺 phải",
    "rad": "釆 (biện – phân biệt)",
    "mean": "giải, thả",
    "tip": "Bộ 釆 (phân biệt, tách ra) + 尺 → THÁO GỠ, kết hợp 解(cởi) thành 解释 = GIẢI THÍCH.",
    "cf": "择 (zé – \"chọn\", bộ 扌)",
    "w": "解释 / 解决 / 了解"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Bạn đừng giận, nghe tôi giải thích một chút đã.",
    "answer": "你别生气，先听我解释一下。",
    "answerPy": "Nǐ bié shēngqì, xiān tīng wǒ jiěshì yíxià.",
    "note": "先……一下.",
    "pair": "听我解释"
   },
   {
    "promptLang": "vi",
    "prompt": "Thầy giáo giải thích câu này ba lần, cuối cùng chúng tôi cũng hiểu.",
    "answer": "老师把这个句子解释了三遍，我们终于明白了。",
    "answerPy": "Lǎoshī bǎ zhège jùzi jiěshì le sān biàn, wǒmen zhōngyú míngbai le.",
    "note": "Ôn 把 + V + động lượng (Bài 19 · điểm 3).",
    "pair": "把……解释了三遍"
   }
  ]
 },
 {
  "n": 48,
  "zh": "泼",
  "py": "pō",
  "pos": "Động từ",
  "vn": "té, hắt (nước)",
  "hv": "bát",
  "em": "🪣",
  "lesson": 4,
  "explain": [
   "Hắt, té chất lỏng ra: 泼水 (té nước). Trong bài có câu bị động: 被泼的水 (nước bị té vào người)."
  ],
  "usage": "泼水 · 互相泼水 · 被泼了一身水.",
  "collo": [
   "泼水",
   "互相泼水",
   "被泼了一身水",
   "往身上泼"
  ],
  "colloFull": [
   {
    "zh": "泼水",
    "py": "Pō shuǐ",
    "vn": "té nước"
   },
   {
    "zh": "互相泼水",
    "py": "Hùxiāng pō shuǐ",
    "vn": "té nước vào nhau"
   },
   {
    "zh": "被泼了一身水",
    "py": "Bèi pō le yì shēn shuǐ",
    "vn": "bị té ướt cả người"
   },
   {
    "zh": "往身上泼",
    "py": "Wǎng shēnshang pō",
    "vn": "hắt vào người"
   }
  ],
  "patterns": [
   {
    "s": "泼 + 水",
    "m": "té nước"
   },
   {
    "s": "被 + 泼",
    "m": "Câu bị động: 被泼的水"
   }
  ],
  "ex_zh": "被泼的水越多，新的一年就会越健康、幸福。",
  "ex_py": "Bèi pō de shuǐ yuè duō, xīn de yì nián jiù huì yuè jiànkāng, xìngfú.",
  "ex_vn": "Càng bị té nhiều nước thì năm mới càng khỏe mạnh, hạnh phúc.",
  "exList": [
   {
    "zh": "被泼的水越多，新的一年就会越健康、幸福。",
    "py": "Bèi pō de shuǐ yuè duō, xīn de yì nián jiù huì yuè jiànkāng, xìngfú.",
    "vn": "Càng bị té nhiều nước thì năm mới càng khỏe mạnh, hạnh phúc."
   },
   {
    "zh": "孩子们互相泼水，玩得特别开心。",
    "py": "Háizimen hùxiāng pō shuǐ, wán de tèbié kāixīn.",
    "vn": "Bọn trẻ té nước vào nhau, chơi cực kỳ vui."
   }
  ],
  "hanzi": [
   {
    "c": "泼",
    "p": "pō",
    "type": "左右结构 · Trái-phải",
    "st": 8,
    "ord": "氵 trái → 发 phải",
    "rad": "氵 (thủy)",
    "mean": "hắt nước",
    "tip": "Nước 氵 + 发 → HẮT nước tung tóe → sống động. 活泼 = hoạt bát; 泼水节 = Tết té nước.",
    "cf": "发 (fā – phát)",
    "w": "活泼 / 泼水"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Trong Tết té nước, ai bị té nhiều nước nhất thì người đó may mắn nhất.",
    "answer": "泼水节上，谁被泼的水最多，谁就最幸运。",
    "answerPy": "Pōshuǐjié shàng, shuí bèi pō de shuǐ zuì duō, shuí jiù zuì xìngyùn.",
    "note": "Đại từ nghi vấn phiếm chỉ 谁……谁…….",
    "pair": "谁……谁就……"
   },
   {
    "promptLang": "vi",
    "prompt": "Cô ấy bị té ướt cả người nhưng lại không giận chút nào.",
    "answer": "她被泼了一身水，却一点儿也不生气。",
    "answerPy": "Tā bèi pō le yì shēn shuǐ, què yìdiǎnr yě bù shēngqì.",
    "note": "Ôn 却 (Bài 16 · điểm 4) + câu bị động 被.",
    "pair": "被……，却……"
   }
  ]
 },
 {
  "n": 49,
  "zh": "流利",
  "py": "liúlì",
  "pos": "Tính từ",
  "vn": "lưu loát, trôi chảy",
  "hv": "lưu lợi",
  "em": "🗨️",
  "lesson": 4,
  "explain": [
   "Nói, đọc, viết trôi chảy, không vấp váp: 说得很流利, 流利地说出. ⚠ Hán Việt “lưu lợi” nhưng nghĩa là lưu loát."
  ],
  "usage": "说得很流利 · 流利的中文 · 流利地回答.",
  "collo": [
   "说得很流利",
   "流利的中文",
   "流利地回答",
   "不太流利"
  ],
  "colloFull": [
   {
    "zh": "说得很流利",
    "py": "Shuō de hěn liúlì",
    "vn": "nói rất lưu loát"
   },
   {
    "zh": "流利的中文",
    "py": "Liúlì de Zhōngwén",
    "vn": "tiếng Trung lưu loát"
   },
   {
    "zh": "流利地回答",
    "py": "Liúlì de huídá",
    "vn": "trả lời trôi chảy"
   },
   {
    "zh": "不太流利",
    "py": "Bú tài liúlì",
    "vn": "chưa lưu loát lắm"
   }
  ],
  "patterns": [
   {
    "s": "V + 得 + 很流利",
    "m": "Bổ ngữ trình độ"
   },
   {
    "s": "流利地 + V",
    "m": "Trạng ngữ + 地"
   }
  ],
  "ex_zh": "对诗人说上句，游客就能流利地说出下句。",
  "ex_py": "Duì shīrén shuōshang jù, yóukè jiù néng liúlì de shuōchū xià jù.",
  "ex_vn": "Người đối thơ đọc câu trên, du khách liền đọc trôi chảy câu dưới.",
  "exList": [
   {
    "zh": "对诗人说上句，游客就能流利地说出下句。",
    "py": "Duì shīrén shuōshang jù, yóukè jiù néng liúlì de shuōchū xià jù.",
    "vn": "Người đối thơ đọc câu trên, du khách liền đọc trôi chảy câu dưới."
   },
   {
    "zh": "你中文说得真流利！学了多久了？",
    "py": "Nǐ Zhōngwén shuō de zhēn liúlì! Xué le duōjiǔ le?",
    "vn": "Bạn nói tiếng Trung lưu loát thật! Học bao lâu rồi?"
   }
  ],
  "hanzi": [
   {
    "c": "流",
    "p": "liú",
    "type": "左右结构 · Trái-phải",
    "st": 10,
    "ord": "氵 (thủy) trái → 㐬 phải",
    "rad": "氵 (thủy – nước)",
    "mean": "chảy, trôi chảy",
    "tip": "Bộ nước 氵 (dòng nước chảy liên tục) → mở rộng nghĩa TRÔI CHẢY, kết hợp 利(lợi, thuận lợi) thành 流利 = LƯU LOÁT (nói trôi chảy như nước chảy).",
    "cf": "留 (liú – \"ở lại\", bộ 田\")",
    "w": "流利 / 流水 / 交流"
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
    "prompt": "Bạn tôi học tiếng Trung bốn năm rồi, nói rất lưu loát.",
    "answer": "我朋友学了四年中文，说得很流利。",
    "answerPy": "Wǒ péngyou xué le sì nián Zhōngwén, shuō de hěn liúlì.",
    "note": "Thời lượng + bổ ngữ trình độ.",
    "pair": "说得很流利"
   },
   {
    "promptLang": "vi",
    "prompt": "Nếu muốn nói tiếng Trung lưu loát thì phải luyện nói mỗi ngày, nếu không sẽ quên.",
    "answer": "要是想把中文说得流利，就得每天练口语，否则会忘的。",
    "answerPy": "Yàoshi xiǎng bǎ Zhōngwén shuō de liúlì, jiù děi měitiān liàn kǒuyǔ, fǒuzé huì wàng de.",
    "note": "要是……就……，否则…… (Bài 20 · điểm 4).",
    "pair": "要是……就……，否则……"
   }
  ]
 },
 {
  "n": 50,
  "zh": "唐装",
  "py": "Tángzhuāng",
  "pos": "Danh từ riêng",
  "vn": "áo Đường trang (trang phục truyền thống Trung Quốc)",
  "hv": "Đường trang",
  "em": "🥻",
  "lesson": 4,
  "explain": [
   "Kiểu áo truyền thống của Trung Quốc (cổ đứng, cài khuy vải), hay mặc dịp Tết, lễ hội; tên gọi lấy từ 唐 (nhà Đường), chỉ chung trang phục kiểu Trung Hoa."
  ],
  "usage": "穿唐装 · 身穿唐装 · 一件唐装.",
  "collo": [
   "穿唐装",
   "身穿唐装",
   "一件唐装",
   "红色的唐装"
  ],
  "colloFull": [
   {
    "zh": "穿唐装",
    "py": "Chuān Tángzhuāng",
    "vn": "mặc áo Đường trang"
   },
   {
    "zh": "身穿唐装",
    "py": "Shēn chuān Tángzhuāng",
    "vn": "mình mặc áo Đường trang"
   },
   {
    "zh": "一件唐装",
    "py": "Yí jiàn Tángzhuāng",
    "vn": "một chiếc áo Đường trang"
   },
   {
    "zh": "红色的唐装",
    "py": "Hóngsè de Tángzhuāng",
    "vn": "áo Đường trang màu đỏ"
   }
  ],
  "patterns": [
   {
    "s": "身穿 + trang phục",
    "m": "(văn viết) mình mặc …"
   }
  ],
  "ex_zh": "安妮在那里遇到身穿唐装的“对诗人”。",
  "ex_py": "Ānní zài nàli yùdào shēn chuān Tángzhuāng de “duì shīrén”.",
  "ex_vn": "Annie ở đó gặp những “người đối thơ” mặc áo Đường trang.",
  "exList": [
   {
    "zh": "安妮在那里遇到身穿唐装的“对诗人”。",
    "py": "Ānní zài nàli yùdào shēn chuān Tángzhuāng de “duì shīrén”.",
    "vn": "Annie ở đó gặp những “người đối thơ” mặc áo Đường trang."
   },
   {
    "zh": "过春节的时候，爷爷喜欢穿唐装。",
    "py": "Guò Chūnjié de shíhou, yéye xǐhuan chuān Tángzhuāng.",
    "vn": "Lúc đón Tết, ông thích mặc áo Đường trang."
   }
  ],
  "hanzi": [
   {
    "c": "唐",
    "p": "táng",
    "type": "形声字 · Chữ hình thanh",
    "st": 10,
    "ord": "广 → 肀 → 口",
    "rad": "广 (nghiễm – mái nhà)",
    "mean": "nhà Đường (618–907); họ Đường",
    "tip": "Mái rộng (广) + tay cầm vật (肀) + miệng (口): nghĩa gốc là lời nói to, rộng; nay chủ yếu chỉ triều Đường — 唐诗 (thơ Đường), 唐装 (áo Đường trang), 唐朝.",
    "cf": "糖 táng (đường ăn) — thêm 米 bên trái; 康 kāng (khỏe) — dưới là 氺",
    "w": "唐诗 / 唐装 / 唐朝"
   },
   {
    "c": "装",
    "p": "zhuāng",
    "type": "形声字 · Chữ hình thanh",
    "st": 12,
    "ord": "壮 → 衣",
    "rad": "衣 (y – áo)",
    "mean": "đựng, cho vào; lắp đặt; trang phục; giả vờ",
    "tip": "Áo quần (衣) xếp vào hành lý của chàng trai khỏe (壮, cũng chỉ âm zhuàng → zhuāng) → đựng, cho vào; áo quần mặc lên người → trang phục (服装).",
    "cf": "壮 zhuàng (khỏe mạnh) — không có 衣; 袋 dài (túi) — trên là 代",
    "w": "装进 / 服装 / 安装"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Ở Tây An có rất nhiều người mặc áo Đường trang chụp ảnh.",
    "answer": "在西安，有很多人穿着唐装拍照。",
    "answerPy": "Zài Xī'ān, yǒu hěn duō rén chuān zhe Tángzhuāng pāizhào.",
    "note": "V着 + V (HSK 3).",
    "pair": "穿着……拍照"
   },
   {
    "promptLang": "vi",
    "prompt": "Chiếc áo Đường trang này vừa đẹp vừa không đắt.",
    "answer": "这件唐装既好看又不贵。",
    "answerPy": "Zhè jiàn Tángzhuāng jì hǎokàn yòu bú guì.",
    "note": "Ôn 既……又…… (Bài 4 · điểm 3).",
    "pair": "既……又……"
   }
  ]
 }
];
var wuData = [
 {
  "img": "/images/hsk4v3/bai-20/wu-A.webp",
  "label": "道路",
  "py": "dàolù",
  "letter": "A"
 },
 {
  "img": "/images/hsk4v3/bai-20/wu-B.webp",
  "label": "堵车",
  "py": "dǔchē",
  "letter": "B"
 },
 {
  "img": "/images/hsk4v3/bai-20/wu-C.webp",
  "label": "导游",
  "py": "dǎoyóu",
  "letter": "C"
 },
 {
  "img": "/images/hsk4v3/bai-20/wu-D.webp",
  "label": "安检",
  "py": "ānjiǎn",
  "letter": "D"
 },
 {
  "img": "/images/hsk4v3/bai-20/wu-E.webp",
  "label": "航班",
  "py": "hángbān",
  "letter": "E"
 },
 {
  "img": "/images/hsk4v3/bai-20/wu-F.webp",
  "label": "窗户",
  "py": "chuānghu",
  "letter": "F"
 }
];
var dialogData = [
 {
  "scene": "在动车上 · Trên tàu cao tốc (Bạch Gia Nguyệt, Annie và Trần Thiên Trung đi tàu cao tốc đến Hàng Châu, Tô Châu chơi)",
  "anh": "/images/hsk4v3/bai-20/kv-1.webp",
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
    "q": "如果安妮没有坐上车，白家月有什么建议？",
    "opts": [
     "明天再去",
     "改坐飞机",
     "坐下一趟车",
     "买张无座票"
    ],
    "ans": 2
   },
   {
    "q": "安妮为什么建议下车后就去西湖？",
    "opts": [
     "西湖离得近",
     "去西湖方便",
     "西湖不要门票",
     "晚上西湖更好看"
    ],
    "ans": 3
   }
  ],
  "lines": [
   {
    "sp": 0,
    "zh": "终于上车了，刚刚路上堵车，差点儿晚了。",
    "py": "Zhōngyú shàng chē le, gānggāng lùshang dǔchē, chàdiǎnr wǎn le.",
    "vn": "Cuối cùng cũng lên được tàu, vừa nãy trên đường tắc xe, suýt nữa thì muộn."
   },
   {
    "sp": 1,
    "zh": "没关系，晚了就改乘下一趟。天中，你坐哪儿？看你一直不坐下，我还在想，难道你买的是无座票吗？",
    "py": "Méiguānxì, wǎn le jiù gǎi chéng xià yí tàng. Tiānzhōng, nǐ zuò nǎr? Kàn nǐ yìzhí bú zuòxia, wǒ hái zài xiǎng, nándào nǐ mǎi de shì wú zuò piào ma?",
    "vn": "Không sao, muộn thì đổi sang đi chuyến sau. Thiên Trung, cậu ngồi đâu? Thấy cậu cứ đứng mãi không ngồi, tớ còn đang nghĩ, chẳng lẽ cậu mua vé không có chỗ ngồi à?"
   },
   {
    "sp": 2,
    "zh": "我的座位就在前边，我想先站这儿跟你们说说话。",
    "py": "Wǒ de zuòwèi jiù zài qiánbian, wǒ xiǎng xiān zhàn zhèr gēn nǐmen shuō shuōhuà.",
    "vn": "Chỗ của tớ ở ngay phía trước thôi, tớ muốn đứng đây nói chuyện với các cậu một lát đã."
   },
   {
    "sp": 0,
    "zh": "动车车速也挺快啊！对了，这列车晚上七点多到杭州，咱们在车上吃晚餐，到站后就先去西湖吧，夜里的西湖更美。",
    "py": "Dòngchē chēsù yě tǐng kuài a! Duì le, zhè lièchē wǎnshang qī diǎn duō dào Hángzhōu, zánmen zài chē shàng chī wǎncān, dào zhàn hòu jiù xiān qù Xī Hú ba, yèli de Xī Hú gèng měi.",
    "vn": "Tàu cao tốc tốc độ cũng nhanh ghê! À đúng rồi, chuyến tàu này hơn bảy giờ tối đến Hàng Châu, mình ăn tối trên tàu, đến ga thì đi Tây Hồ trước luôn nhé, Tây Hồ ban đêm còn đẹp hơn."
   },
   {
    "sp": 2,
    "zh": "好！后天我们坐大巴去苏州，看苏州园林。",
    "py": "Hǎo! Hòutiān wǒmen zuò dàbā qù Sūzhōu, kàn Sūzhōu Yuánlín.",
    "vn": "Được! Ngày kia chúng ta đi xe khách đến Tô Châu, ngắm vườn Tô Châu."
   },
   {
    "sp": 1,
    "zh": "嗯。中国太大了！真是看也看不完啊。",
    "py": "Ǹg. Zhōngguó tài dà le! Zhēnshì kàn yě kàn bu wán a.",
    "vn": "Ừ. Trung Quốc rộng lớn quá! Đúng là xem cũng xem không hết."
   }
  ]
 },
 {
  "scene": "在机场 · Ở sân bay (Lý Văn cùng Bạch Gia Nguyệt, Annie, Trần Thiên Trung qua kiểm tra an ninh, chuẩn bị lên máy bay đi Tây Song Bản Nạp, nối chuyến ở Tây An)",
  "anh": "/images/hsk4v3/bai-20/kv-2.webp",
  "nguoi": [
   {
    "ten": "李文",
    "anh": "/images/hsk4v3/nv/liwen.webp"
   },
   {
    "ten": "白家月",
    "anh": "/images/hsk4v3/nv/bai.webp"
   },
   {
    "ten": "陈天中",
    "anh": "/images/hsk4v3/nv/chen.webp"
   },
   {
    "ten": "安妮",
    "anh": "/images/hsk4v3/nv/annie.webp"
   },
   {
    "ten": "值机员",
    "anh": "/images/hsk4v3/bai-20/zhijiyuan.webp"
   }
  ],
  "preQuiz": [
   {
    "q": "安检完后，白家月、陈天中和安妮都在干什么？",
    "opts": [
     "看书",
     "买东西",
     "看电影",
     "听中文歌"
    ],
    "ans": 0
   },
   {
    "q": "他们这次去西双版纳要做什么？",
    "opts": [
     "吃美食",
     "听演唱会",
     "参加比赛",
     "感受泼水节"
    ],
    "ans": 3
   }
  ],
  "lines": [
   {
    "sp": 0,
    "zh": "安检完就等着登机了。你们在看什么？",
    "py": "Ānjiǎn wán jiù děng zhe dēngjī le. Nǐmen zài kàn shénme?",
    "vn": "Kiểm tra an ninh xong là chờ lên máy bay thôi. Các cậu đang xem gì thế?"
   },
   {
    "sp": 1,
    "zh": "我在读老舍的小说。",
    "py": "Wǒ zài dú Lǎoshě de xiǎoshuō.",
    "vn": "Mình đang đọc tiểu thuyết của Lão Xá."
   },
   {
    "sp": 2,
    "zh": "我读的是一本中国历史书。",
    "py": "Wǒ dú de shì yì běn Zhōngguó lìshǐshū.",
    "vn": "Cái mình đọc là một cuốn sách lịch sử Trung Quốc."
   },
   {
    "sp": 3,
    "zh": "我读唐诗呢。几千年的中国文化，真是读也读不完。",
    "py": "Wǒ dú Tángshī ne. Jǐqiān nián de Zhōngguó wénhuà, zhēnshì dú yě dú bu wán.",
    "vn": "Mình đang đọc thơ Đường. Văn hóa Trung Quốc mấy nghìn năm, đúng là đọc cũng đọc không hết."
   },
   {
    "sp": 0,
    "zh": "谁说不是呢？不过，现在咱们得去排队，航班的值机员在叫大家登机呢——",
    "py": "Shuí shuō bú shì ne? Búguò, xiànzài zánmen děi qù páiduì, hángbān de zhíjī yuán zài jiào dàjiā dēngjī ne —",
    "vn": "Ai bảo không phải chứ? (Đúng thế!) Có điều bây giờ chúng mình phải đi xếp hàng thôi, nhân viên làm thủ tục của chuyến bay đang gọi mọi người lên máy bay kìa —"
   },
   {
    "sp": 4,
    "zh": "去西安的旅客开始登机，请拿好登机牌按顺序排队。",
    "py": "Qù Xī'ān de lǚkè kāishǐ dēngjī, qǐng náhǎo dēngjīpái àn shùnxù páiduì.",
    "vn": "(Lời nhân viên làm thủ tục) Hành khách đi Tây An bắt đầu lên máy bay, xin cầm sẵn thẻ lên máy bay và xếp hàng theo thứ tự. …"
   },
   {
    "sp": 1,
    "zh": "终于上来了，我的座位靠窗户。",
    "py": "Zhōngyú shànglai le, wǒ de zuòwèi kào chuānghu.",
    "vn": "Cuối cùng cũng lên được rồi, chỗ của mình cạnh cửa sổ."
   },
   {
    "sp": 3,
    "zh": "我在最外边。这么多人，是不是跟咱们一样，都是去感受泼水节的啊？",
    "py": "Wǒ zài zuì wàibian. Zhème duō rén, shì bu shì gēn zánmen yíyàng, dōu shì qù gǎnshòu Pōshuǐjié de a?",
    "vn": "Mình ngồi ngoài cùng. Đông người thế này, có phải cũng giống chúng mình, đều đi trải nghiệm Tết té nước không nhỉ?"
   },
   {
    "sp": 0,
    "zh": "应该不是。很多人的目的地是西安，你别忘了，咱们是在西安转机，然后再飞西双版纳。",
    "py": "Yīnggāi bú shì. Hěn duō rén de mùdìdì shì Xī'ān, nǐ bié wàng le, zánmen shì zài Xī'ān zhuǎnjī, ránhòu zài fēi Xīshuāngbǎnnà.",
    "vn": "Chắc không phải đâu. Nhiều người điểm đến là Tây An, cậu đừng quên, chúng ta nối chuyến ở Tây An, sau đó mới bay đi Tây Song Bản Nạp."
   }
  ]
 },
 {
  "scene": "旅行经验谈 · Bàn về kinh nghiệm du lịch",
  "anh": "/images/hsk4v3/bai-20/kv-3.webp",
  "nguoi": [
   {
    "ten": "小语",
    "anh": "/images/hsk4v3/nv/xiaoyu.webp"
   }
  ],
  "preQuiz": [
   {
    "q": "白家月、安妮和陈天中想通过旅行：",
    "opts": [
     "放松心情",
     "交到朋友",
     "了解中国",
     "积累知识"
    ],
    "ans": 2
   },
   {
    "q": "白家月、安妮和陈天中的旅行经验首先是：",
    "opts": [
     "提前订好酒店",
     "做好旅行计划",
     "提前订好门票",
     "仔细检查行李"
    ],
    "ans": 1
   }
  ],
  "lines": [
   {
    "sp": 0,
    "zh": "来中国留学后，白家月、安妮和陈天中常外出旅行，从中了解中国。",
    "py": "Lái Zhōngguó liúxué hòu, Bái Jiāyuè, Ānní hé Chén Tiānzhōng cháng wàichū lǚxíng, cóngzhōng liǎojiě Zhōngguó.",
    "vn": "Sau khi đến Trung Quốc du học, Bạch Gia Nguyệt, Annie và Trần Thiên Trung thường ra ngoài du lịch, qua đó tìm hiểu Trung Quốc."
   },
   {
    "sp": 0,
    "zh": "他们还总结出几点旅行经验：",
    "py": "Tāmen hái zǒngjié chū jǐ diǎn lǚxíng jīngyàn:",
    "vn": "Họ còn đúc kết ra mấy kinh nghiệm du lịch:"
   },
   {
    "sp": 0,
    "zh": "第一，好计划是成功的一半。",
    "py": "Dì yī, hǎo jìhuà shì chénggōng de yíbàn.",
    "vn": "Thứ nhất, kế hoạch tốt là một nửa thành công."
   },
   {
    "sp": 0,
    "zh": "旅行前，要了解目的地天气、道路交通特点等，安排好每天的活动，保证所有人对计划都没意见。",
    "py": "Lǚxíng qián, yào liǎojiě mùdìdì tiānqì, dàolù jiāotōng tèdiǎn děng, ānpái hǎo měitiān de huódòng, bǎozhèng suǒyǒu rén duì jìhuà dōu méi yìjiàn.",
    "vn": "Trước khi đi, phải tìm hiểu thời tiết, đặc điểm đường sá giao thông… ở nơi đến, sắp xếp ổn thỏa hoạt động mỗi ngày, đảm bảo tất cả mọi người đều không có ý kiến gì về kế hoạch."
   },
   {
    "sp": 0,
    "zh": "准备越细，烦恼越少。",
    "py": "Zhǔnbèi yuè xì, fánnǎo yuè shǎo.",
    "vn": "Chuẩn bị càng kỹ, phiền não càng ít."
   },
   {
    "sp": 0,
    "zh": "第二，节假日早点儿订机票、酒店和各种门票，否则很难订到。",
    "py": "Dì èr, jiéjiàrì zǎodiǎnr dìng jīpiào, jiǔdiàn hé gèzhǒng ménpiào, fǒuzé hěn nán dìng dào.",
    "vn": "Thứ hai, dịp lễ phải đặt vé máy bay, khách sạn và các loại vé vào cửa sớm một chút, nếu không thì rất khó đặt được."
   },
   {
    "sp": 0,
    "zh": "第三，转机会比直飞更便宜。",
    "py": "Dì sān, zhuǎnjī huì bǐ zhífēi gèng piányi.",
    "vn": "Thứ ba, bay nối chuyến sẽ rẻ hơn bay thẳng."
   },
   {
    "sp": 0,
    "zh": "此次去西双版纳，在西安转机，机票价格比直飞便宜了百分之四十多。",
    "py": "Cǐ cì qù Xīshuāngbǎnnà, zài Xī'ān zhuǎnjī, jīpiào jiàgé bǐ zhífēi piányi le bǎi fēn zhī sìshí duō.",
    "vn": "Lần này đi Tây Song Bản Nạp, nối chuyến ở Tây An, giá vé máy bay rẻ hơn bay thẳng hơn 40%."
   },
   {
    "sp": 0,
    "zh": "虽然有些累，但累就累点儿吧，花更少的钱去看更多的地方，很值得，节省下来的钱就当是给自己的大“红包”了。",
    "py": "Suīrán yǒuxiē lèi, dàn lèi jiù lèi diǎnr ba, huā gèng shǎo de qián qù kàn gèng duō de dìfang, hěn zhíde, jiéshěng xiàlai de qián jiù dàng shì gěi zìjǐ de dà “hóngbāo” le.",
    "vn": "Tuy hơi mệt, nhưng mệt thì mệt một chút thôi, tiêu ít tiền hơn mà đi được nhiều nơi hơn, rất đáng; số tiền tiết kiệm được thì coi như là một “phong bao lì xì” lớn tặng cho chính mình."
   }
  ],
  "doan": true
 },
 {
  "scene": "读万卷书，行万里路 · Đọc vạn quyển sách, đi vạn dặm đường",
  "anh": "/images/hsk4v3/bai-20/kv-4.webp",
  "nguoi": [
   {
    "ten": "小语",
    "anh": "/images/hsk4v3/nv/xiaoyu.webp"
   }
  ],
  "preQuiz": [
   {
    "q": "“读万卷书，行万里路”的意思是：",
    "opts": [
     "既学习也运动",
     "边看书边走路",
     "读一万本书，走一万里路",
     "既读书学习，也外出看世界"
    ],
    "ans": 3
   },
   {
    "q": "根据课文，旅行除了能看自然景色外，还能：",
    "opts": [
     "吃美食",
     "认识朋友",
     "了解历史文化",
     "了解旅行过程"
    ],
    "ans": 2
   }
  ],
  "lines": [
   {
    "sp": 0,
    "zh": "王一飞常对她的学生说：“读万卷书，行万里路。你们要是想多了解中国，就不能只通过读书，还要多出门旅行，否则只能认识课本里的中国。”",
    "py": "Wáng Yīfēi cháng duì tā de xuésheng shuō: “dú wàn juàn shū, xíng wànlǐ lù. Nǐmen yàoshi xiǎng duō liǎojiě Zhōngguó, jiù bù néng zhǐ tōngguò dúshū, hái yào duō chūmén lǚxíng, fǒuzé zhǐnéng rènshi kèběn lǐ de Zhōngguó.”",
    "vn": "Vương Nhất Phi thường nói với học sinh của mình: “Đọc vạn quyển sách, đi vạn dặm đường. Các em nếu muốn hiểu thêm về Trung Quốc thì không thể chỉ qua sách vở, mà còn phải ra ngoài du lịch nhiều, nếu không thì chỉ biết một Trung Quốc trong sách giáo khoa.”"
   },
   {
    "sp": 0,
    "zh": "旅行，不仅能看到自然美景，还能近距离感受不同的历史文化。",
    "py": "Lǚxíng, bùjǐn néng kàndào zìrán měijǐng, hái néng jìn jùlí gǎnshòu bùtóng de lìshǐ wénhuà.",
    "vn": "Du lịch không những được ngắm cảnh đẹp thiên nhiên, mà còn được cảm nhận tận mắt những nền văn hóa, lịch sử khác nhau."
   },
   {
    "sp": 0,
    "zh": "比如，白家月等人想了解少数民族泼水节，就去了西双版纳。",
    "py": "Bǐrú, Bái Jiāyuè děng rén xiǎng liǎojiě shǎoshù mínzú Pōshuǐjié, jiù qù le Xīshuāngbǎnnà.",
    "vn": "Chẳng hạn, Bạch Gia Nguyệt và mọi người muốn tìm hiểu Tết té nước của dân tộc thiểu số, liền đến Tây Song Bản Nạp."
   },
   {
    "sp": 0,
    "zh": "泼水节上，导游向他们解释说，被泼的水越多，新的一年就会越健康、幸福。",
    "py": "Pōshuǐjié shàng, dǎoyóu xiàng tāmen jiěshì shuō, bèi pō de shuǐ yuè duō, xīn de yì nián jiù huì yuè jiànkāng, xìngfú.",
    "vn": "Trong Tết té nước, hướng dẫn viên giải thích với họ rằng càng bị té nhiều nước thì năm mới sẽ càng khỏe mạnh, hạnh phúc."
   },
   {
    "sp": 0,
    "zh": "安妮喜欢唐诗，就来到了西安，在那里遇到身穿唐装的“对诗人”，对诗人说上句，游客就能流利地说出下句。",
    "py": "Ānní xǐhuan Tángshī, jiù láidào le Xī'ān, zài nàli yùdào shēn chuān Tángzhuāng de “duì shīrén”, duì shīrén shuōshang jù, yóukè jiù néng liúlì de shuōchū xià jù.",
    "vn": "Annie thích thơ Đường nên đã đến Tây An, ở đó gặp những “người đối thơ” mặc áo Đường trang: người đối thơ đọc câu trên, du khách liền đọc trôi chảy câu dưới. (“Đối thơ” là một người ngâm câu thơ, người khác đối lại câu tiếp theo, thường diễn ra giữa hai hay nhiều người; người tham gia gọi là “người đối thơ”.)"
   },
   {
    "sp": 0,
    "zh": "安妮觉得在西安，唐诗活了。",
    "py": "Ānní juéde zài Xī'ān, Tángshī huó le.",
    "vn": "Annie cảm thấy ở Tây An, thơ Đường như sống lại."
   },
   {
    "sp": 0,
    "zh": "虽然已经去了很多地方，但是白家月他们觉得还不够。",
    "py": "Suīrán yǐjīng qù le hěn duō dìfang, dànshì Bái Jiāyuè tāmen juéde hái bú gòu.",
    "vn": "Tuy đã đi rất nhiều nơi, nhưng Bạch Gia Nguyệt và các bạn vẫn thấy chưa đủ."
   },
   {
    "sp": 0,
    "zh": "他们也认为，美丽中国，不只是在书中，更是在脚下。",
    "py": "Tāmen yě rènwéi, měilì Zhōngguó, bù zhǐshì zài shū zhōng, gèng shì zài jiǎoxià.",
    "vn": "Họ cũng cho rằng, một Trung Quốc tươi đẹp không chỉ ở trong sách, mà còn ở dưới chân mình."
   }
  ],
  "doan": true
 }
];
var listenData = [
 {
  "audio": "师傅，去火车站还要多长时间？路上堵车，可能还得二十分钟。哎呀，我的动车七点开，难道要来不及了？别着急，要是真来不及，就改乘下一趟吧。晚就晚点儿吧，安全最重要。",
  "questions": [
   {
    "q": "女的坐的动车几点开？",
    "opts": [
     "六点",
     "七点",
     "八点"
    ],
    "ans": 1
   },
   {
    "q": "司机建议她怎么做？",
    "opts": [
     "改坐飞机",
     "改乘下一趟",
     "明天再去"
    ],
    "ans": 1
   }
  ]
 },
 {
  "audio": "您好，我去西双版纳，这是我的护照。您是在昆明转机，需要给您安排靠窗户的座位吗？好啊，谢谢！请拿好登机牌，九点开始登机。要是听到广播，就去十二号登机口排队，否则可能会错过航班。",
  "questions": [
   {
    "q": "男的在哪儿转机？",
    "opts": [
     "西安",
     "昆明",
     "杭州"
    ],
    "ans": 1
   },
   {
    "q": "男的的座位在哪儿？",
    "opts": [
     "靠窗户",
     "靠门",
     "最外边"
    ],
    "ans": 0
   }
  ]
 },
 {
  "audio": "小王，国庆节你打算去哪儿旅行？我想去西安看看，我喜欢唐诗，想去感受一下唐朝文化。那你得早点儿订票，否则节假日很难订到。我已经订好了，转机比直飞便宜了百分之三十呢。转机多累啊！累就累点儿吧，节省下来的钱可以多买几本书。",
  "questions": [
   {
    "q": "小王为什么想去西安？",
    "opts": [
     "喜欢唐诗",
     "去看朋友",
     "去那儿工作"
    ],
    "ans": 0
   },
   {
    "q": "转机的机票比直飞便宜了多少？",
    "opts": [
     "百分之二十",
     "百分之三十",
     "百分之四十"
    ],
    "ans": 1
   }
  ]
 }
];
var matchData = [
 {
  "left": "改乘",
  "right": "下一趟车"
 },
 {
  "left": "拿好",
  "right": "登机牌"
 },
 {
  "left": "总结",
  "right": "旅行经验"
 },
 {
  "left": "节省",
  "right": "时间和钱"
 },
 {
  "left": "少数",
  "right": "民族"
 },
 {
  "left": "身穿",
  "right": "唐装"
 },
 {
  "left": "流利地",
  "right": "说出下句"
 },
 {
  "left": "读万卷书",
  "right": "行万里路"
 },
 {
  "left": "要是……就……",
  "right": "否则……"
 },
 {
  "left": "累就累点儿",
  "right": "吧"
 }
];
var fillData = [
 {
  "pre": "刚刚路上",
  "blank": "堵车",
  "post": "，差点儿晚了。",
  "hint": "(tắc đường)",
  "ans": "堵车",
  "exp": "路上堵车 = trên đường bị tắc."
 },
 {
  "pre": "没关系，晚了就改",
  "blank": "乘",
  "post": "下一趟。",
  "hint": "(đi, đáp)",
  "ans": "乘",
  "exp": "改乘 = đổi sang đi."
 },
 {
  "pre": "看你一直不坐下，我还在想，",
  "blank": "难道",
  "post": "你买的是无座票吗？",
  "hint": "(chẳng lẽ)",
  "ans": "难道",
  "exp": "难道……吗？ câu tu từ / phỏng đoán."
 },
 {
  "pre": "安检完就等着",
  "blank": "登机",
  "post": "了。",
  "hint": "(lên máy bay)",
  "ans": "登机",
  "exp": "等着登机 = chờ lên máy bay."
 },
 {
  "pre": "终于上来了，我的座位",
  "blank": "靠",
  "post": "窗户。",
  "hint": "(sát, cạnh)",
  "ans": "靠",
  "exp": "靠窗户 = cạnh cửa sổ."
 },
 {
  "pre": "咱们是在西安",
  "blank": "转机",
  "post": "，然后再飞西双版纳。",
  "hint": "(nối chuyến)",
  "ans": "转机",
  "exp": "在 + nơi + 转机."
 },
 {
  "pre": "安排好每天的活动，保证所有人对计划都没",
  "blank": "意见",
  "post": "。",
  "hint": "(ý kiến)",
  "ans": "意见",
  "exp": "对……没意见 = không phản đối."
 },
 {
  "pre": "准备越细，",
  "blank": "烦恼",
  "post": "越少。",
  "hint": "(phiền não)",
  "ans": "烦恼",
  "exp": "越……越…… với 细 / 烦恼."
 },
 {
  "pre": "导游向他们",
  "blank": "解释",
  "post": "说，被泼的水越多，新的一年就会越健康、幸福。",
  "hint": "(giải thích)",
  "ans": "解释",
  "exp": "向 + ai + 解释."
 },
 {
  "pre": "对诗人说上句，游客就能",
  "blank": "流利",
  "post": "地说出下句。",
  "hint": "(trôi chảy)",
  "ans": "流利",
  "exp": "流利地 + V."
 }
];
var sortData = [
 {
  "words": [
   "难道",
   "你",
   "买的",
   "是",
   "无座票",
   "吗",
   "？"
  ],
  "ans": "难道你买的是无座票吗？",
  "audio": "难道你买的是无座票吗？"
 },
 {
  "words": [
   "这里",
   "离苏州",
   "这么近",
   "，",
   "我们",
   "为什么不",
   "去苏州",
   "玩玩呢",
   "？"
  ],
  "ans": "这里离苏州这么近，我们为什么不去苏州玩玩呢？",
  "audio": "这里离苏州这么近，我们为什么不去苏州玩玩呢？"
 },
 {
  "words": [
   "累就累",
   "点儿吧",
   "，",
   "花更少的钱",
   "去看",
   "更多的地方",
   "。"
  ],
  "ans": "累就累点儿吧，花更少的钱去看更多的地方。",
  "audio": "累就累点儿吧，花更少的钱去看更多的地方。"
 },
 {
  "words": [
   "要是",
   "出去的话",
   "，",
   "咱们",
   "就爬山",
   "，",
   "否则",
   "我哪儿都不去",
   "。"
  ],
  "ans": "要是出去的话，咱们就爬山，否则我哪儿都不去。",
  "audio": "要是出去的话，咱们就爬山，否则我哪儿都不去。"
 },
 {
  "words": [
   "准备",
   "越细",
   "，",
   "烦恼",
   "越少",
   "。"
  ],
  "ans": "准备越细，烦恼越少。",
  "audio": "准备越细，烦恼越少。"
 },
 {
  "words": [
   "美丽中国",
   "，",
   "不只是",
   "在书中",
   "，",
   "更是",
   "在脚下",
   "。"
  ],
  "ans": "美丽中国，不只是在书中，更是在脚下。",
  "audio": "美丽中国，不只是在书中，更是在脚下。"
 }
];
var mcData = [
 {
  "q": "＿＿你买的是无座票吗？",
  "opts": [
   "难道",
   "到底",
   "究竟",
   "要是"
  ],
  "ans": 0,
  "exp": "Câu tu từ 难道……吗？; 到底 / 究竟 hỏi thật, không đi với 吗."
 },
 {
  "q": "我已经检查好几遍了，怎么会出错＿＿？",
  "opts": [
   "呢",
   "吗",
   "吧",
   "了"
  ],
  "ans": 0,
  "exp": "Câu tu từ có đại từ nghi vấn dùng 呢, không dùng 吗."
 },
 {
  "q": "这里离苏州这么近，我们为什么＿＿去苏州玩玩呢？",
  "opts": [
   "不",
   "也",
   "就",
   "才"
  ],
  "ans": 0,
  "exp": "为什么不……呢？ = nên làm (phủ định → khẳng định)."
 },
 {
  "q": "虽然有些累，但累就累＿＿吧，很值得。",
  "opts": [
   "点儿",
   "很",
   "极了",
   "得很"
  ],
  "ans": 0,
  "exp": "×就×点儿吧 — 点儿 giảm nhẹ, đứng trước 吧."
 },
 {
  "q": "要是出去的话，咱们就爬山，＿＿我哪儿都不去。",
  "opts": [
   "否则",
   "于是",
   "然后",
   "而且"
  ],
  "ans": 0,
  "exp": "否则 = nếu không thì."
 },
 {
  "q": "去西安的旅客开始＿＿，请拿好登机牌按顺序排队。",
  "opts": [
   "登机",
   "安检",
   "转机",
   "值机"
  ],
  "ans": 0,
  "exp": "开始登机 = bắt đầu lên máy bay."
 },
 {
  "q": "节省下来的钱就＿＿是给自己的大“红包”了。",
  "opts": [
   "当",
   "让",
   "把",
   "被"
  ],
  "ans": 0,
  "exp": "当 (dàng) = coi như."
 },
 {
  "q": "在西安转机，机票价格比直飞便宜了＿＿四十多。",
  "opts": [
   "百分之",
   "一半",
   "多少",
   "左右"
  ],
  "ans": 0,
  "exp": "百分之 + số = … %."
 },
 {
  "q": "白家月等人想了解少数＿＿泼水节，就去了西双版纳。",
  "opts": [
   "民族",
   "特点",
   "道路",
   "意见"
  ],
  "ans": 0,
  "exp": "少数民族 = dân tộc thiểu số."
 },
 {
  "q": "这么冷的天，你只穿了一件衬衫，＿＿不怕感冒吗？",
  "opts": [
   "难道",
   "要是",
   "否则",
   "所有"
  ],
  "ans": 0,
  "exp": "难道 + 不 + V + 吗？ = ý khẳng định (sẽ bị cảm đấy)."
 }
];
var speakingData = {
 "intro": "Nhấn nút loa nghe câu hỏi (câu hỏi phần Khởi động, câu hỏi đọc hiểu của 4 bài khoá, kể lại bài khoá và thảo luận nhóm), rồi tự ghi âm câu trả lời — cố dùng từ mới và 4 điểm ngữ pháp của bài.",
 "questions": [
  {
   "q_zh": "你喜欢旅行吗？如果喜欢，你喜欢去看自然景色还是去历史文化景点？",
   "q_vn": "Bạn có thích du lịch không? Nếu thích, bạn thích đi ngắm cảnh thiên nhiên hay đến các điểm văn hóa lịch sử?",
   "hint": "我很喜欢旅行。比起……，我更喜欢……，因为……。要是……，就……，否则……",
   "sample": "我很喜欢旅行。比起自然景色，我更喜欢去历史文化景点，因为我对历史特别感兴趣。去年我去了西安，看了很多古代的建筑，还遇到了身穿唐装的人，感觉自己好像回到了唐朝。我觉得，要是想真正了解一个国家，就要去看看它的历史文化景点，否则只能认识书里的它。",
   "sample_vn": "Tôi rất thích du lịch. So với cảnh thiên nhiên, tôi thích đến các điểm văn hóa lịch sử hơn, vì tôi đặc biệt hứng thú với lịch sử. Năm ngoái tôi đi Tây An, xem rất nhiều công trình cổ, còn gặp người mặc áo Đường trang, cảm giác như mình quay về thời nhà Đường. Tôi thấy, nếu muốn thật sự hiểu một đất nước thì phải đi xem các điểm văn hóa lịch sử của nó, nếu không chỉ biết nó qua sách thôi.",
   "note": "Câu hỏi phần Khởi động của sách; dùng 要是……就……否则…… (điểm 4)."
  },
  {
   "q_zh": "旅行时，你一般会坐火车还是坐飞机？为什么？",
   "q_vn": "Khi đi du lịch, bạn thường đi tàu hỏa hay đi máy bay? Vì sao?",
   "hint": "我一般坐……，因为……。……就……点儿吧，……",
   "sample": "旅行时，如果不太远，我一般坐动车，因为动车车速快，还能一边看窗户外边的风景，一边和朋友聊天儿。要是去很远的地方，我就坐飞机，否则在路上的时间太长了。有时候我会选择转机，虽然有些累，但累就累点儿吧，机票便宜不少，节省下来的钱可以多去几个地方。",
   "sample_vn": "Khi đi du lịch, nếu không xa lắm tôi thường đi tàu cao tốc, vì tàu cao tốc nhanh, lại vừa ngắm cảnh ngoài cửa sổ vừa trò chuyện với bạn được. Nếu đi nơi rất xa thì tôi đi máy bay, nếu không thời gian trên đường quá dài. Có lúc tôi chọn bay nối chuyến, tuy hơi mệt nhưng mệt thì mệt một chút thôi, vé rẻ hơn khá nhiều, tiền tiết kiệm được có thể đi thêm mấy nơi.",
   "note": "Câu hỏi phần Khởi động của sách; dùng ×就×点儿吧 (điểm 3), 要是……就……否则…… (điểm 4)."
  },
  {
   "q_zh": "上车后，陈天中为什么没有直接坐到自己的座位上？安妮都有哪些安排？",
   "q_vn": "Lên tàu rồi, vì sao Trần Thiên Trung không ngồi ngay vào chỗ của mình? Annie có những sắp xếp gì?",
   "hint": "因为他的座位……，他想先……。安妮建议……，到站后……，因为……",
   "sample": "陈天中没有直接坐到自己的座位上，是因为他的座位就在前边，他想先站在那儿跟大家说说话。安妮的安排是：这列车晚上七点多到杭州，大家在车上吃晚餐，到站后就先去西湖，因为夜里的西湖更美。",
   "sample_vn": "Trần Thiên Trung không ngồi ngay vào chỗ vì chỗ của cậu ấy ở ngay phía trước, cậu ấy muốn đứng đó nói chuyện với mọi người một lát. Sắp xếp của Annie là: chuyến tàu này hơn bảy giờ tối đến Hàng Châu, mọi người ăn tối trên tàu, đến ga thì đi Tây Hồ trước, vì Tây Hồ ban đêm đẹp hơn.",
   "note": "Câu hỏi bài khoá 1."
  },
  {
   "q_zh": "请根据提示复述课文一。",
   "q_vn": "Dựa vào gợi ý, kể lại bài khoá 1.",
   "hint": "安妮、白家月和陈天中坐动车去旅行。由于路上堵车，安妮……。白家月说，晚了……。接着，白家月问陈天中……，难道……吗？……",
   "sample": "安妮、白家月和陈天中坐动车去旅行。由于路上堵车，安妮差点儿晚了。白家月说，晚了就改乘下一趟。接着，白家月问陈天中坐哪儿，难道买的是无座票吗？陈天中说他的座位就在前边，他想先站着跟大家说说话。安妮说这列车晚上七点多到杭州，建议在车上吃晚餐，到站后就先去西湖，夜里的西湖更美。陈天中说，后天坐大巴去苏州，看苏州园林。白家月说，中国太大了，真是看也看不完。",
   "sample_vn": "Annie, Bạch Gia Nguyệt và Trần Thiên Trung đi tàu cao tốc đi du lịch. Do tắc đường, Annie suýt nữa thì muộn. Bạch Gia Nguyệt nói, muộn thì đổi sang chuyến sau… Bạch Gia Nguyệt nói, Trung Quốc rộng quá, đúng là xem cũng xem không hết.",
   "note": "Bài tập 复述 của sách (trang 113); ôn 由于 (Bài 2 · điểm 4)."
  },
  {
   "q_zh": "安妮为什么觉得中国文化读也读不完？李文他们的目的地是西安吗？为什么？",
   "q_vn": "Vì sao Annie thấy văn hóa Trung Quốc đọc cũng không hết? Điểm đến của nhóm Lý Văn có phải là Tây An không? Vì sao?",
   "hint": "因为中国文化有……。不是，他们是在西安……，然后……",
   "sample": "安妮觉得中国文化读也读不完，因为中国文化有几千年的历史，内容非常丰富，光是唐诗就有很多很多。李文他们的目的地不是西安，而是西双版纳，他们只是在西安转机，然后再飞西双版纳，去感受泼水节。",
   "sample_vn": "Annie thấy văn hóa Trung Quốc đọc cũng không hết vì văn hóa Trung Quốc có lịch sử mấy nghìn năm, nội dung vô cùng phong phú, riêng thơ Đường thôi đã rất nhiều. Điểm đến của nhóm Lý Văn không phải Tây An mà là Tây Song Bản Nạp; họ chỉ nối chuyến ở Tây An rồi bay tiếp đến Tây Song Bản Nạp để trải nghiệm Tết té nước.",
   "note": "Câu hỏi bài khoá 2; ôn 不是……而是…… (Bài 11 · điểm 3)."
  },
  {
   "q_zh": "为什么节假日要早点儿订机票？为什么他们觉得转机虽然累，但值得？",
   "q_vn": "Vì sao dịp lễ phải đặt vé máy bay sớm? Vì sao họ thấy bay nối chuyến tuy mệt nhưng đáng?",
   "hint": "因为节假日……，否则……。因为转机比直飞……，累就累点儿吧，……",
   "sample": "节假日出去旅行的人特别多，所以要早点儿订机票，否则很难订到。他们觉得转机虽然累，但值得，因为转机比直飞便宜，这次去西双版纳，机票价格便宜了百分之四十多。累就累点儿吧，花更少的钱可以去看更多的地方，节省下来的钱就当是给自己的大红包了。",
   "sample_vn": "Dịp lễ người đi du lịch rất đông, nên phải đặt vé máy bay sớm, nếu không rất khó đặt được. Họ thấy nối chuyến tuy mệt nhưng đáng, vì nối chuyến rẻ hơn bay thẳng, lần này đi Tây Song Bản Nạp giá vé rẻ hơn hơn 40%. Mệt thì mệt một chút thôi, tiêu ít tiền hơn mà đi được nhiều nơi hơn, tiền tiết kiệm được coi như phong bao lì xì lớn tặng mình.",
   "note": "Câu hỏi bài khoá 3; dùng ×就×点儿吧 (điểm 3), ôn 否则 (Bài 8)."
  },
  {
   "q_zh": "请根据提示复述课文三。",
   "q_vn": "Dựa vào gợi ý, kể lại bài khoá 3.",
   "hint": "来中国留学后，白家月、安妮和陈天中常……，从中……。他们还总结出几点……：第一，……。第二，……，否则……。第三，……",
   "sample": "来中国留学后，白家月、安妮和陈天中常外出旅行，从中了解中国。他们还总结出几点旅行经验：第一，好计划是成功的一半。旅行前，要了解目的地天气、道路交通特点等，安排好每天的活动，保证所有人对计划都没意见。准备越细，烦恼越少。第二，节假日早点儿订机票、酒店和各种门票，否则很难订到。第三，转机会比直飞更便宜。此次去西双版纳，在西安转机，机票价格比直飞便宜了百分之四十多。虽然有些累，但累就累点儿吧，花更少的钱去看更多的地方，很值得，节省下来的钱就当是给自己的大“红包”了。",
   "sample_vn": "Sau khi đến Trung Quốc du học, Bạch Gia Nguyệt, Annie và Trần Thiên Trung thường ra ngoài du lịch, qua đó tìm hiểu Trung Quốc. Họ còn đúc kết mấy kinh nghiệm du lịch… số tiền tiết kiệm được coi như phong bao lì xì lớn tặng chính mình.",
   "note": "Bài tập 复述 của sách (trang 118)."
  },
  {
   "q_zh": "安妮在西安遇见了什么人？有什么感受？外出旅行后，白家月他们有什么感受？",
   "q_vn": "Annie gặp ai ở Tây An? Cô ấy cảm nhận thế nào? Sau khi đi du lịch, nhóm Bạch Gia Nguyệt có cảm nhận gì?",
   "hint": "她遇见了身穿……的“对诗人”，对诗人说上句，……。她觉得……。虽然……，但是……。他们认为，美丽中国，不只是……，更是……",
   "sample": "安妮在西安遇见了身穿唐装的“对诗人”。对诗人说上句，游客就能流利地说出下句，所以她觉得在西安，唐诗活了。外出旅行后，白家月他们虽然已经去了很多地方，但是觉得还不够。他们认为，美丽中国，不只是在书中，更是在脚下。要是想真正了解中国，就要多出门看看。",
   "sample_vn": "Ở Tây An, Annie gặp những “người đối thơ” mặc áo Đường trang. Người đối thơ đọc câu trên, du khách liền đọc trôi chảy câu dưới, nên cô thấy ở Tây An thơ Đường như sống lại. Sau khi đi du lịch, nhóm Bạch Gia Nguyệt tuy đã đi rất nhiều nơi nhưng vẫn thấy chưa đủ. Họ cho rằng Trung Quốc tươi đẹp không chỉ ở trong sách mà còn ở dưới chân. Nếu muốn thật sự hiểu Trung Quốc thì phải ra ngoài xem nhiều hơn.",
   "note": "Câu hỏi bài khoá 4; dùng 要是……就…… (điểm 4)."
  },
  {
   "q_zh": "小组讨论：三至四人一组，互相介绍外出旅行时，哪个地方给自己留下的印象最深，为什么？讨论后，由一人向大家介绍。",
   "q_vn": "Thảo luận nhóm: Nhóm 3–4 người, giới thiệu cho nhau khi đi du lịch, nơi nào để lại cho mình ấn tượng sâu sắc nhất, vì sao? Thảo luận xong, một người đại diện trình bày trước lớp.",
   "hint": "给我留下印象最深的地方是……。那里的特点是……。难道……吗？……就……点儿吧。要是……，就……，否则……。我们组认为……",
   "sample": "大家好！我们组讨论的题目是“给自己留下印象最深的地方”。我先说说我自己：给我留下印象最深的地方是云南的西双版纳。去年四月，我们坐飞机去那儿，在昆明转机，虽然有些累，但累就累点儿吧，机票便宜了百分之三十多。那里的特点是少数民族多，文化很丰富。我们正好赶上泼水节，导游向我们解释说，被泼的水越多，新的一年就越幸福。所以虽然我被泼了一身水，却一点儿也不生气。小林说，给她留下印象最深的是西安，她遇到了身穿唐装的“对诗人”，觉得唐诗活了。阿明最喜欢杭州的西湖，他说夜里的西湖更美，谁看了不喜欢呢？讨论以后，我们组都认为：读书很重要，但是难道只读书就够了吗？要是想真正了解一个地方，就要亲自去看看，否则只能认识书里的它。这就是“读万卷书，行万里路”。",
   "sample_vn": "Chào cả lớp! Chủ đề nhóm em thảo luận là “Nơi để lại ấn tượng sâu sắc nhất”. Trước hết em nói về mình: nơi để lại cho em ấn tượng sâu nhất là Tây Song Bản Nạp ở Vân Nam. Tháng Tư năm ngoái, chúng em đi máy bay đến đó, nối chuyến ở Côn Minh, tuy hơi mệt nhưng mệt thì mệt chút thôi, vé rẻ hơn hơn 30%. Đặc điểm ở đó là có nhiều dân tộc thiểu số, văn hóa rất phong phú. Chúng em đúng lúc gặp Tết té nước, hướng dẫn viên giải thích rằng càng bị té nhiều nước thì năm mới càng hạnh phúc, nên dù bị té ướt cả người em cũng chẳng giận chút nào. Tiểu Lâm nói nơi ấn tượng nhất với bạn ấy là Tây An, bạn ấy gặp “người đối thơ” mặc áo Đường trang, thấy thơ Đường như sống lại. A Minh thích nhất Tây Hồ ở Hàng Châu, bạn ấy nói Tây Hồ ban đêm còn đẹp hơn, ai xem mà chẳng thích? Thảo luận xong, cả nhóm cho rằng: đọc sách rất quan trọng, nhưng chẳng lẽ chỉ đọc sách là đủ sao? Nếu muốn thật sự hiểu một nơi thì phải tự mình đến xem, nếu không chỉ biết nó qua sách. Đó chính là “đọc vạn quyển sách, đi vạn dặm đường”.",
   "note": "Hoạt động 任务活动 · 小组讨论 (thảo luận nhóm) của sách, trang 122 — dùng đủ 4 điểm ngữ pháp: 难道, câu tu từ với đại từ nghi vấn (谁……呢？), ×就×点儿吧, 要是……就……否则……; ôn 却 (Bài 16)."
  }
 ]
};
var translateData = [
 {
  "vi": "Muộn thì đổi sang đi chuyến sau.",
  "zh": "晚了就改乘下一趟。",
  "py": "Wǎn le jiù gǎi chéng xià yí tàng."
 },
 {
  "vi": "Chẳng lẽ cậu mua vé không có chỗ ngồi à?",
  "zh": "难道你买的是无座票吗？",
  "py": "Nándào nǐ mǎi de shì wú zuò piào ma?"
 },
 {
  "vi": "Văn hóa Trung Quốc mấy nghìn năm, đúng là đọc cũng đọc không hết.",
  "zh": "几千年的中国文化，真是读也读不完。",
  "py": "Jǐqiān nián de Zhōngguó wénhuà, zhēnshì dú yě dú bu wán."
 },
 {
  "vi": "Mệt thì mệt một chút thôi, tiêu ít tiền hơn mà đi được nhiều nơi hơn, rất đáng.",
  "zh": "累就累点儿吧，花更少的钱去看更多的地方，很值得。",
  "py": "Lèi jiù lèi diǎnr ba, huā gèng shǎo de qián qù kàn gèng duō de dìfang, hěn zhíde."
 },
 {
  "vi": "Dịp lễ phải đặt vé máy bay sớm một chút, nếu không thì rất khó đặt được.",
  "zh": "节假日要早点儿订机票，否则很难订到。",
  "py": "Jiéjiàrì yào zǎodiǎnr dìng jīpiào, fǒuzé hěn nán dìng dào."
 },
 {
  "vi": "Các em nếu muốn hiểu thêm về Trung Quốc thì không thể chỉ qua sách vở.",
  "zh": "你们要是想多了解中国，就不能只通过读书。",
  "py": "Nǐmen yàoshi xiǎng duō liǎojiě Zhōngguó, jiù bù néng zhǐ tōngguò dúshū."
 }
];
var translateDataRev = [
 {
  "vi": "Kiểm tra an ninh xong là chờ lên máy bay thôi.",
  "zh": "安检完就等着登机了。",
  "py": "Ānjiǎn wán jiù děng zhe dēngjī le."
 },
 {
  "vi": "Cuối cùng cũng lên được rồi, chỗ của mình cạnh cửa sổ.",
  "zh": "终于上来了，我的座位靠窗户。",
  "py": "Zhōngyú shànglai le, wǒ de zuòwèi kào chuānghu."
 },
 {
  "vi": "Chúng ta nối chuyến ở Tây An, sau đó mới bay đi Tây Song Bản Nạp.",
  "zh": "咱们是在西安转机，然后再飞西双版纳。",
  "py": "Zánmen shì zài Xī'ān zhuǎnjī, ránhòu zài fēi Xīshuāngbǎnnà."
 },
 {
  "vi": "Chuẩn bị càng kỹ, phiền não càng ít.",
  "zh": "准备越细，烦恼越少。",
  "py": "Zhǔnbèi yuè xì, fánnǎo yuè shǎo."
 },
 {
  "vi": "Trung Quốc tươi đẹp không chỉ ở trong sách, mà còn ở dưới chân.",
  "zh": "美丽中国，不只是在书中，更是在脚下。",
  "py": "Měilì Zhōngguó, bù zhǐshì zài shū zhōng, gèng shì zài jiǎoxià."
 }
];
var sgkData = [
 {
  "kieu": "kho",
  "de": "选词填空（一）· 综合练习",
  "vn": "Chọn từ thích hợp điền vào chỗ trống (Bài tập tổng hợp, sách trang 121). Sách 4下 chưa có đáp án — đây là đáp án tham khảo.",
  "dapSgk": false,
  "tu": [
   "总结",
   "百分之",
   "登机",
   "烦恼",
   "特点",
   "列"
  ],
  "cau": [
   {
    "s": "我们还没有看清楚，一＿＿火车就快速开了过去。",
    "dap": [
     "列"
    ]
   },
   {
    "s": "四点开始＿＿，我们准备下午两点到机场。",
    "dap": [
     "登机"
    ]
   },
   {
    "s": "经过努力，我们完成了一个大项目，得好好＿＿下经验。",
    "dap": [
     "总结"
    ]
   },
   {
    "s": "我心情不好的时候，就会干点儿自己喜欢的事情，比如听音乐，这样能让我暂时忘记＿＿。",
    "dap": [
     "烦恼"
    ]
   },
   {
    "s": "由于有＿＿八十五的人支持，这项建议终于通过了。",
    "dap": [
     "百分之"
    ]
   },
   {
    "s": "这个手机的＿＿是拍照好看，很适合年轻人。",
    "dap": [
     "特点"
    ]
   }
  ]
 },
 {
  "kieu": "kho",
  "de": "选词填空（二）· 综合练习",
  "vn": "Chọn từ thích hợp điền vào chỗ trống (hội thoại, sách trang 121). Đáp án tham khảo.",
  "dapSgk": false,
  "tu": [
   "旅客",
   "流利",
   "意见",
   "难道",
   "转机",
   "解释"
  ],
  "cau": [
   {
    "s": "A：您好，您对我们的服务有什么＿＿吗？　B：没有，挺好的，服务员很热情。",
    "dap": [
     "意见"
    ]
   },
   {
    "s": "A：这次出国旅行，你们也要＿＿吗？　B：不，这次旅行时间紧张，我们要直接飞过去。",
    "dap": [
     "转机"
    ]
   },
   {
    "s": "A：这位＿＿，请问您有什么需要？　B：我想要一杯水。",
    "dap": [
     "旅客"
    ]
   },
   {
    "s": "A：这个问题你都＿＿清楚了，我们完全理解，会支持你们的。　B：感谢你们的理解与支持！",
    "dap": [
     "解释"
    ]
   },
   {
    "s": "A：这么冷的天，你只穿了一件衬衫，＿＿不怕感冒吗？　B：我刚锻炼完，现在不觉得冷。",
    "dap": [
     "难道"
    ]
   },
   {
    "s": "A：你中文说得真＿＿！学了多久了？　B：谢谢，我已经学了四年了。",
    "dap": [
     "流利"
    ]
   }
  ]
 },
 {
  "kieu": "kho",
  "de": "选择合适的内容完成短文",
  "vn": "Chọn nội dung thích hợp (A–D) hoàn thành đoạn văn (sách trang 121–122). Đáp án tham khảo.",
  "dapSgk": false,
  "tu": [
   "我就出去旅行",
   "为了更好地了解自己国家的历史",
   "当时给我留下了很深的印象",
   "让我看见了更大的世界"
  ],
  "cau": [
   {
    "s": "我小时候就喜欢看历史方面的书。有一天上课时，老师说中华文明（Zhōnghuá wénmíng, văn minh Trung Hoa）有五千多年的历史，＿＿。直到后来，学校开了历史课，老师从古代（gǔdài, thời cổ đại）讲到现在的中国，我才真正感受到中国历史之长。＿＿，我希望自己也能够“读万卷书，行万里路”。于是，放假时，＿＿，参观万里长城、故宫等历史文化景点。读书和旅行，＿＿。将来我也想去其他国家看看，了解更多国家的历史文化。",
    "dap": [
     "当时给我留下了很深的印象",
     "为了更好地了解自己国家的历史",
     "我就出去旅行",
     "让我看见了更大的世界"
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
    "anh": "/images/hsk4v3/bai-20/bt-1.webp",
    "s": "",
    "tu": "旅客",
    "dap": "这位旅客拉着行李箱，正在机场等着登机。",
    "giai": "Lượng từ lịch sự 位 cho người; V着 + V (拉着……等着); ôn 正在 (HSK 2)."
   },
   {
    "anh": "/images/hsk4v3/bai-20/bt-2.webp",
    "s": "",
    "tu": "红包",
    "dap": "过春节的时候，爷爷奶奶给了我好几个红包。",
    "giai": "给 + ai + 红包 (tân ngữ kép); lượng từ 个; 好几 = nhiều."
   },
   {
    "anh": "/images/hsk4v3/bai-20/bt-3.webp",
    "s": "",
    "tu": "大巴",
    "dap": "这辆大巴是去机场的，坐大巴比打车便宜多了。",
    "giai": "Lượng từ 辆; câu 是……的 nói đích đến; so sánh 比 + 多了."
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
  "tieuDe": "Viết “mẹo nhỏ” cho chuyến đi xa (写作)",
  "gioiThieu": "Đề 写作 của sách HSK 4 (3.0) yêu cầu dựa vào kinh nghiệm du lịch của bản thân, viết một bản 小贴士 (mẹo nhỏ, lời nhắc) ít nhất 140 chữ, nhắc người đi du lịch đường dài cần đặc biệt chú ý những vấn đề gì — giống phần 书写 của đề thi HSK 4 mới.",
  "buoc": [
   "Đọc kỹ đề: thể loại là 小贴士 — viết thành các điểm nhắc nhở rõ ràng (第一、第二…) dựa vào kinh nghiệm thật của em.",
   "Lập dàn ý theo các câu hỏi gợi ý: trước khi đi → đặt vé → ở sân bay / ga tàu → đồ đạc mang theo → đến nơi.",
   "Dùng từ mới và 4 điểm ngữ pháp của bài (khung “Từ, cấu trúc nên dùng”): 要是……就……否则……, ×就×点儿吧, 难道……吗？, câu tu từ với 怎么 / 谁.",
   "Nối các ý bằng 第一 / 第二 / 第三 / 最后 hoặc 首先……然后…… (Bài 14).",
   "Câu mở nói vì sao cần kế hoạch, câu kết nói ý nghĩa của du lịch; tự soát số chữ (≥ 140) và lỗi chữ Hán trước khi nộp."
  ]
 },
 "de": "远距离旅行一般都要做详细计划。请根据旅行经验，写一个小贴士，提醒旅行者应该特别注意哪些问题，不少于140字。",
 "prompt": "Du lịch đường dài thường phải lập kế hoạch chi tiết. Hãy dựa vào kinh nghiệm du lịch của em, viết một bản “mẹo nhỏ” nhắc người đi du lịch cần đặc biệt chú ý những vấn đề gì, không ít hơn 140 chữ.",
 "dan": [
  {
   "hoi": "出发前要做哪些准备？",
   "goiY": "了解目的地的天气、道路交通特点……；准备越细，烦恼越少"
  },
  {
   "hoi": "怎么订票又方便又便宜？",
   "goiY": "节假日要早点儿订票，否则……；转机虽然累，但累就累点儿吧……"
  },
  {
   "hoi": "在机场或火车站要注意什么？",
   "goiY": "要是坐飞机，就要提前……到机场，否则……；值机、安检……"
  },
  {
   "hoi": "带东西要注意什么？",
   "goiY": "护照、登机牌……要放好，难道你想……吗？"
  },
  {
   "hoi": "到了目的地以后要注意什么？",
   "goiY": "尊重少数民族的习惯；听导游的解释；旅行不只是……，更是……"
  }
 ],
 "tuNen": [
  "计划",
  "道路",
  "特点",
  "所有",
  "细",
  "烦恼",
  "节省",
  "转机",
  "值机",
  "安检",
  "登机",
  "航班",
  "旅客",
  "导游",
  "解释",
  "少数民族",
  "百分之"
 ],
 "cauTruc": [
  {
   "ten": "要是……，就……，否则……",
   "nhan": "否则",
   "vd": "要是节假日出去玩，就要早点儿订机票，否则很难订到。",
   "khi": "Nhắc việc phải làm và hậu quả nếu không làm."
  },
  {
   "ten": "×就×(点儿)吧",
   "nhan": "就×点儿吧",
   "vd": "转机虽然有些累，但累就累点儿吧，可以节省不少钱。",
   "khi": "Khuyên chấp nhận một điều chưa hoàn hảo để có lợi hơn."
  },
  {
   "ten": "难道……吗？",
   "nhan": "难道",
   "vd": "难道你愿意到了机场才发现忘带护照吗？",
   "khi": "Nhấn mạnh lời nhắc bằng câu tu từ."
  },
  {
   "ten": "怎么能 / 谁……呢？",
   "nhan": "怎么",
   "vd": "不提前了解天气，怎么能带对衣服呢？",
   "khi": "Câu tu từ với đại từ nghi vấn — tăng sức thuyết phục."
  },
  {
   "ten": "越……，越……",
   "nhan": "越",
   "vd": "准备越细，烦恼越少。",
   "khi": "Câu MỞ hoặc KẾT: chốt ý quan trọng của kế hoạch."
  }
 ],
 "checklist": [
  "Đủ ít nhất 140 chữ Hán chưa?",
  "Đã viết đúng thể loại 小贴士 — các điểm nhắc nhở rõ ràng (第一、第二…), dựa vào kinh nghiệm thật chưa?",
  "Đã dùng ít nhất 3 trong 4 điểm ngữ pháp của bài (难道、câu tu từ với đại từ nghi vấn、×就×点儿吧、要是……就……否则……) chưa?",
  "Đã dùng ít nhất 6 từ mới của bài chưa?",
  "Có câu mở và câu kết rõ ràng, các ý nối với nhau bằng từ nối chưa?"
 ],
 "model": {
  "zh": "远距离旅行要注意什么呢？好计划是成功的一半，准备越细，烦恼越少。第一，出发前要了解目的地的天气和道路交通特点，安排好每天的活动。不提前了解天气，怎么能带对衣服呢？第二，节假日要早点儿订机票、酒店和门票，否则很难订到。要是想节省钱，可以选择转机，机票有时能便宜百分之三十以上。虽然有些累，但累就累点儿吧，节省下来的钱可以多去几个地方。第三，坐飞机至少要提前两个小时到机场，值机、安检都需要时间，要是晚了，就可能错过航班。第四，护照、登机牌等重要的东西一定要放好，难道你愿意到了机场才发现忘带护照吗？最后，到了少数民族地区，要尊重那里的文化和习惯，多听听导游的解释。旅行不只是看风景，更是了解世界的好机会。",
  "py": "Yuǎn jùlí lǚxíng yào zhùyì shénme ne? Hǎo jìhuà shì chénggōng de yíbàn, zhǔnbèi yuè xì, fánnǎo yuè shǎo. Dì yī, chūfā qián yào liǎojiě mùdìdì de tiānqì hé dàolù jiāotōng tèdiǎn, ānpái hǎo měitiān de huódòng. Bù tíqián liǎojiě tiānqì, zěnme néng dài duì yīfu ne? Dì èr, jiéjiàrì yào zǎodiǎnr dìng jīpiào, jiǔdiàn hé ménpiào, fǒuzé hěn nán dìng dào. Yàoshi xiǎng jiéshěng qián, kěyǐ xuǎnzé zhuǎnjī, jīpiào yǒushí néng piányi bǎi fēn zhī sānshí yǐshàng. Suīrán yǒuxiē lèi, dàn lèi jiù lèi diǎnr ba, jiéshěng xiàlai de qián kěyǐ duō qù jǐ gè dìfang. Dì sān, zuò fēijī zhìshǎo yào tíqián liǎng gè xiǎoshí dào jīchǎng, zhíjī, ānjiǎn dōu xūyào shíjiān, yàoshi wǎn le, jiù kěnéng cuòguò hángbān. Dì sì, hùzhào, dēngjīpái děng zhòngyào de dōngxi yídìng yào fànghǎo, nándào nǐ yuànyì dào le jīchǎng cái fāxiàn wàng dài hùzhào ma? Zuìhòu, dào le shǎoshù mínzú dìqū, yào zūnzhòng nàli de wénhuà hé xíguàn, duō tīngting dǎoyóu de jiěshì. Lǚxíng bù zhǐshì kàn fēngjǐng, gèng shì liǎojiě shìjiè de hǎo jīhuì."
 }
};
