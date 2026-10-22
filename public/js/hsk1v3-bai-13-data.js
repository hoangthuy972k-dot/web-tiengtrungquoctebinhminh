// ══════════════════════════════════════════
// DATA — HSK1 (3.0 Mới) Bài 13: 请给我一杯茶
// Nguồn: Giáo trình New HSK 1 (chuẩn 3.0) - Trung Việt, NXB Dân Trí
// ══════════════════════════════════════════
var vocabData = [
  {
    "n": 1,
    "zh": "可以",
    "py": "kěyǐ",
    "pos": "Động từ năng nguyện",
    "vn": "có thể, được (cho phép làm gì)",
    "hv": "khả dĩ",
    "em": "👍",
    "lesson": 1,
    "ex_zh": "王老师，我可以再问您一个问题吗？",
    "ex_py": "Wáng lǎoshī, wǒ kěyǐ zài wèn nín yí gè wèntí ma?",
    "ex_vn": "Thưa cô Vương, em có thể hỏi thêm cô một câu nữa không ạ?",
    "exList": [
      {
        "zh": "王老师，我可以再问您一个问题吗？",
        "py": "Wáng lǎoshī, wǒ kěyǐ zài wèn nín yí gè wèntí ma?",
        "vn": "Thưa cô Vương, em có thể hỏi thêm cô một câu nữa không ạ?"
      }
    ],
    "hanzi": [
      {
        "c": "可",
        "p": "kě",
        "type": "半包围结构 · Bán bao vây",
        "st": 5,
        "ord": "丂(bao trên-trái) → 口(khẩu) trong",
        "rad": "口 (khẩu – miệng)",
        "mean": "có thể, được phép",
        "tip": "丂(hình miệng há ra ngập ngừng) ôm lấy 口(miệng) → gật đầu mở miệng ưng thuận, cho phép làm gì → CÓ THỂ, ĐƯỢC.",
        "cf": "何 (hé – \"cái gì, sao\", thêm bộ 亻 bên trái\")",
        "w": "可以 / 可是 / 可爱"
      },
      {
        "c": "以",
        "p": "yǐ",
        "type": "左右结构 · Trái-phải",
        "st": 4,
        "ord": "㇒㇙(chấm-phẩy) trái → 人(nhân) phải",
        "rad": "人 (nhân – người)",
        "mean": "dùng, bằng, để; (trong 可以: có thể)",
        "tip": "亻(người) cầm công cụ (nét chấm-phẩy bên trái) để làm việc gì → nghĩa DÙNG, mở rộng thành ĐỂ, BẰNG.",
        "cf": "似 (sì – \"giống như\", chính là 亻 + 以 ghép lại\")",
        "w": "可以 / 所以 / 以为"
      }
    ],
    "colloFull": [
      {
        "zh": "可以吗",
        "py": "kěyǐ ma",
        "vn": "được không"
      },
      {
        "zh": "可以坐",
        "py": "kěyǐ zuò",
        "vn": "có thể ngồi"
      },
      {
        "zh": "不可以",
        "py": "bù kěyǐ",
        "vn": "không được"
      },
      {
        "zh": "可以问问题",
        "py": "kěyǐ wèn wèntí",
        "vn": "có thể hỏi"
      }
    ],
    "patterns": [
      {
        "s": "Sub + 可以 + động từ",
        "m": "Được phép làm gì: 我可以坐这里吗？"
      },
      {
        "s": "可以 (được phép) ≠ 能 (hoàn cảnh cho phép) ≠ 会 (học rồi nên biết)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tôi ngồi đây được không ạ?",
        "answer": "我可以坐这里吗？",
        "answerPy": "Wǒ kěyǐ zuò zhèli ma?",
        "note": "可以 là được phép làm gì.",
        "pair": "可以……吗？"
      },
      {
        "promptLang": "vi",
        "prompt": "Ở đây không được ăn uống đâu.",
        "answer": "这里不可以吃东西。",
        "answerPy": "Zhèli bù kěyǐ chī dōngxi.",
        "note": "不可以 — không được phép.",
        "pair": "不可以 + V"
      }
    ]
  },
  {
    "n": 2,
    "zh": "再",
    "py": "zài",
    "pos": "Phó từ",
    "vn": "lại, thêm lần nữa",
    "hv": "tái",
    "em": "🔁",
    "lesson": 1,
    "ex_zh": "王老师，我可以再问您一个问题吗？",
    "ex_py": "Wáng lǎoshī, wǒ kěyǐ zài wèn nín yí gè wèntí ma?",
    "ex_vn": "Thưa cô Vương, em có thể hỏi thêm cô một câu nữa không ạ?",
    "exList": [
      {
        "zh": "王老师，我可以再问您一个问题吗？",
        "py": "Wáng lǎoshī, wǒ kěyǐ zài wèn nín yí gè wèntí ma?",
        "vn": "Thưa cô Vương, em có thể hỏi thêm cô một câu nữa không ạ?"
      }
    ],
    "hanzi": [
      {
        "c": "再",
        "p": "zài",
        "type": "独体字 · Chữ đơn",
        "st": 6,
        "ord": "一(nét ngang trên) → 冉(thân dưới, giống chồng thêm một lớp)",
        "rad": "再 (tái – tự thành bộ)",
        "mean": "lại, thêm một lần nữa",
        "tip": "Hình ảnh một vật được xếp CHỒNG thêm một lớp nữa lên trên lớp cũ → biểu thị lặp LẠI, làm THÊM một lần nữa.",
        "cf": "冉 (rǎn – ít dùng, thiếu nét ngang trên đầu\")",
        "w": "再见 / 再问 / 再来"
      }
    ],
    "colloFull": [
      {
        "zh": "再来一个",
        "py": "zài lái yí gè",
        "vn": "lấy thêm một cái"
      },
      {
        "zh": "再说",
        "py": "zài shuō",
        "vn": "nói lại"
      },
      {
        "zh": "再问一下",
        "py": "zài wèn yíxià",
        "vn": "hỏi lại một chút"
      },
      {
        "zh": "再吃一点儿",
        "py": "zài chī yìdiǎnr",
        "vn": "ăn thêm chút nữa"
      }
    ],
    "patterns": [
      {
        "s": "再 + động từ",
        "m": "Làm thêm lần nữa: 再来一个"
      },
      {
        "s": "再来一个 là câu gọi thêm món rất hay dùng"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Cho tôi thêm một cốc trà nữa.",
        "answer": "再来一杯茶。",
        "answerPy": "Zài lái yì bēi chá.",
        "note": "再来一个 là câu gọi thêm món rất hay dùng.",
        "pair": "再 + V"
      },
      {
        "promptLang": "vi",
        "prompt": "Bạn nói lại một lần nữa đi.",
        "answer": "你再说一下吧。",
        "answerPy": "Nǐ zài shuō yíxià ba.",
        "note": "động từ + 一下 nghe lịch sự hơn.",
        "pair": "……吧"
      }
    ]
  },
  {
    "n": 3,
    "zh": "问题",
    "py": "wèntí",
    "pos": "Danh từ",
    "vn": "câu hỏi, vấn đề",
    "hv": "vấn đề",
    "em": "❓",
    "lesson": 1,
    "ex_zh": "可以。你有什么问题？",
    "ex_py": "Kěyǐ. Nǐ yǒu shénme wèntí?",
    "ex_vn": "Được chứ. Em có vấn đề gì nào?",
    "exList": [
      {
        "zh": "可以。你有什么问题？",
        "py": "Kěyǐ. Nǐ yǒu shénme wèntí?",
        "vn": "Được chứ. Em có vấn đề gì nào?"
      }
    ],
    "hanzi": [
      {
        "c": "问",
        "p": "wèn",
        "type": "半包围结构 · Bán bao vây",
        "st": 6,
        "ord": "门(môn) bao ngoài → 口(khẩu) trong",
        "rad": "门 (môn – cửa)",
        "mean": "hỏi",
        "tip": "门(cửa) + 口(miệng) → đứng ở CỬA mở miệng ra HỎI thăm.",
        "cf": "闻 (wén – \"nghe\", có 耳 thay vì 口 bên trong\")",
        "w": "问题 / 请问 / 问一下"
      },
      {
        "c": "题",
        "p": "tí",
        "type": "左右结构 · Trái-phải",
        "st": 15,
        "ord": "是(thị) trái → 页(hiệt) phải",
        "rad": "页 (hiệt – đầu, trang)",
        "mean": "đề, vấn đề, chủ đề",
        "tip": "页(cái đầu/trang giấy) đi cùng 是(là, khẳng định) → nội dung được ghi ra để hỏi \"là\" gì, tức ĐỀ BÀI, VẤN ĐỀ.",
        "cf": "提 (tí – \"nêu ra\", bộ 扌thay vì 页\")",
        "w": "问题 / 题目"
      }
    ],
    "colloFull": [
      {
        "zh": "有问题",
        "py": "yǒu wèntí",
        "vn": "có câu hỏi"
      },
      {
        "zh": "问问题",
        "py": "wèn wèntí",
        "vn": "đặt câu hỏi"
      },
      {
        "zh": "没问题",
        "py": "méi wèntí",
        "vn": "không vấn đề gì"
      },
      {
        "zh": "一个问题",
        "py": "yí gè wèntí",
        "vn": "một câu hỏi"
      }
    ],
    "patterns": [
      {
        "s": "有 / 问 + 问题",
        "m": "Có câu hỏi, đặt câu hỏi"
      },
      {
        "s": "没问题 vừa là \"không có câu hỏi\", vừa là \"được thôi\""
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tôi có một câu hỏi.",
        "answer": "我有一个问题。",
        "answerPy": "Wǒ yǒu yí ge wèntí.",
        "note": "有问题 — có câu hỏi.",
        "pair": "……有……"
      },
      {
        "promptLang": "vi",
        "prompt": "Không vấn đề gì, bạn hỏi đi.",
        "answer": "没问题，你问吧。",
        "answerPy": "Méi wèntí, nǐ wèn ba.",
        "note": "没问题 cũng có nghĩa là được thôi.",
        "pair": "……吧"
      }
    ]
  },
  {
    "n": 4,
    "zh": "卖",
    "py": "mài",
    "pos": "Động từ",
    "vn": "bán",
    "hv": "mại",
    "em": "🏪",
    "lesson": 1,
    "ex_zh": "那个小店卖不卖手机？",
    "ex_py": "Nàge xiǎo diàn mài bu mài shǒujī?",
    "ex_vn": "Cửa hàng nhỏ kia có bán điện thoại di động không ạ?",
    "exList": [
      {
        "zh": "那个小店卖不卖手机？",
        "py": "Nàge xiǎo diàn mài bu mài shǒujī?",
        "vn": "Cửa hàng nhỏ kia có bán điện thoại di động không ạ?"
      }
    ],
    "hanzi": [
      {
        "c": "卖",
        "p": "mài",
        "type": "上下结构 · Trên-dưới",
        "st": 8,
        "ord": "十(thập) trên → 买(mãi) dưới",
        "rad": "十 (thập – số mười)",
        "mean": "bán",
        "tip": "十(nhiều, đầy đủ) trên + 买(mua) dưới → có nhiều hàng đưa ra cho người MUA, tức là BÁN.",
        "cf": "买 (mǎi – \"mua\", nghĩa ngược lại, thiếu nét 十 ở trên\")",
        "w": "卖不卖 / 买卖"
      }
    ],
    "colloFull": [
      {
        "zh": "卖东西",
        "py": "mài dōngxi",
        "vn": "bán hàng"
      },
      {
        "zh": "卖水果",
        "py": "mài shuǐguǒ",
        "vn": "bán hoa quả"
      },
      {
        "zh": "卖多少钱",
        "py": "mài duōshao qián",
        "vn": "bán bao nhiêu tiền"
      },
      {
        "zh": "不卖",
        "py": "bú mài",
        "vn": "không bán"
      }
    ],
    "patterns": [
      {
        "s": "卖 + danh từ",
        "m": "Bán cái gì: 卖水果"
      },
      {
        "s": "卖 (mài, bán) ↔ 买 (mǎi, mua) — chú ý thanh điệu, dễ nhầm"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Cửa hàng này bán hoa quả.",
        "answer": "这个商店卖水果。",
        "answerPy": "Zhège shāngdiàn mài shuǐguǒ.",
        "note": "卖 (bán) ↔ 买 (mua) — chú ý thanh điệu.",
        "pair": "卖 + N"
      },
      {
        "promptLang": "vi",
        "prompt": "Bánh mì này bán bao nhiêu tiền?",
        "answer": "这个面包卖多少钱？",
        "answerPy": "Zhège miànbāo mài duōshao qián?",
        "note": "卖多少钱 — bán bao nhiêu tiền.",
        "pair": "多少钱？"
      }
    ]
  },
  {
    "n": 5,
    "zh": "打电话",
    "py": "dǎ diànhuà",
    "pos": "Cụm động từ",
    "vn": "gọi điện thoại",
    "hv": "đả điện thoại",
    "em": "📞",
    "lesson": 1,
    "ex_zh": "我不知道。你可以打电话问一下。",
    "ex_py": "Wǒ bù zhīdào. Nǐ kěyǐ dǎ diànhuà wèn yíxià.",
    "ex_vn": "Cô không biết. Em có thể gọi điện thoại hỏi xem.",
    "exList": [
      {
        "zh": "我不知道。你可以打电话问一下。",
        "py": "Wǒ bù zhīdào. Nǐ kěyǐ dǎ diànhuà wèn yíxià.",
        "vn": "Cô không biết. Em có thể gọi điện thoại hỏi xem."
      }
    ],
    "hanzi": [
      {
        "c": "打",
        "p": "dǎ",
        "type": "左右结构 · Trái-phải",
        "st": 5,
        "ord": "扌(thủ) trái → 丁(đinh) phải",
        "rad": "扌 (thủ – tay)",
        "mean": "đánh, gọi (điện thoại), làm",
        "tip": "扌(bàn tay) + 丁(cái đinh, gợi âm \"dīng~dǎ\") → dùng TAY gõ, ĐÁNH; mở rộng nghĩa \"gọi\" trong 打电话.",
        "cf": "扛 (káng – \"vác\", bộ 扌+ 工\")",
        "w": "打电话 / 打字"
      },
      {
        "c": "电",
        "p": "diàn",
        "type": "独体字 · Chữ đơn",
        "st": 5,
        "ord": "冂(khung ngoài) → 乚(nét gấp khúc như tia chớp) giữa",
        "rad": "电 (điện – tự thành bộ)",
        "mean": "điện, sấm chớp",
        "tip": "Hình ảnh TIA CHỚP lóe sáng ngoằn ngoèo trong không trung → nghĩa ĐIỆN (hiện tượng phóng điện tự nhiên), mở rộng thành điện thoại, điện lực.",
        "cf": "由 (yóu – \"từ, bởi\", thiếu nét ngoặc phía dưới\")",
        "w": "电话 / 电脑 / 打电话"
      },
      {
        "c": "话",
        "p": "huà",
        "type": "左右结构 · Trái-phải",
        "st": 8,
        "ord": "讠(ngôn) trái → 舌(thiệt) phải",
        "rad": "讠 (ngôn – lời nói)",
        "mean": "lời nói, chuyện",
        "tip": "讠(lời nói) + 舌(cái lưỡi) → dùng LƯỠI để NÓI CHUYỆN, phát ra LỜI.",
        "cf": "活 (huó – \"sống\", bộ 氵thay vì 讠\")",
        "w": "电话 / 说话 / 汉语"
      }
    ],
    "colloFull": [
      {
        "zh": "给我打电话",
        "py": "gěi wǒ dǎ diànhuà",
        "vn": "gọi điện cho tôi"
      },
      {
        "zh": "打电话问",
        "py": "dǎ diànhuà wèn",
        "vn": "gọi điện hỏi"
      },
      {
        "zh": "想打电话",
        "py": "xiǎng dǎ diànhuà",
        "vn": "muốn gọi điện"
      },
      {
        "zh": "几点打电话",
        "py": "jǐ diǎn dǎ diànhuà",
        "vn": "mấy giờ gọi điện"
      }
    ],
    "patterns": [
      {
        "s": "给 + người + 打电话",
        "m": "Gọi điện cho ai"
      },
      {
        "s": "打 + 电话",
        "m": "Gọi điện dùng động từ 打, không dùng 做"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tối nay tôi gọi điện cho bạn.",
        "answer": "今天晚上我给你打电话。",
        "answerPy": "Jīntiān wǎnshang wǒ gěi nǐ dǎ diànhuà.",
        "note": "给 đứng trước động từ, không đứng sau.",
        "pair": "给……打电话"
      },
      {
        "promptLang": "vi",
        "prompt": "Bạn gọi điện hỏi nhân viên phục vụ đi.",
        "answer": "你打电话问服务员吧。",
        "answerPy": "Nǐ dǎ diànhuà wèn fúwùyuán ba.",
        "note": "打电话问 — gọi điện để hỏi.",
        "pair": "……吧"
      }
    ]
  },
  {
    "n": 6,
    "zh": "一下",
    "py": "yíxià",
    "pos": "Số lượng từ",
    "vn": "một chút, thử (dùng sau động từ, biểu thị hành động xảy ra nhanh hoặc thử làm)",
    "hv": "nhất hạ",
    "em": "⏱️",
    "lesson": 1,
    "ex_zh": "我不知道。你可以打电话问一下。",
    "ex_py": "Wǒ bù zhīdào. Nǐ kěyǐ dǎ diànhuà wèn yíxià.",
    "ex_vn": "Cô không biết. Em có thể gọi điện thoại hỏi xem.",
    "exList": [
      {
        "zh": "我不知道。你可以打电话问一下。",
        "py": "Wǒ bù zhīdào. Nǐ kěyǐ dǎ diànhuà wèn yíxià.",
        "vn": "Cô không biết. Em có thể gọi điện thoại hỏi xem."
      }
    ],
    "hanzi": [
      {
        "c": "一",
        "p": "yí",
        "type": "独体字 · Chữ đơn",
        "st": 1,
        "ord": "một nét ngang duy nhất",
        "rad": "一 (nhất – tự thành bộ)",
        "mean": "một, số 1",
        "tip": "Một nét NGANG duy nhất tượng trưng cho số MỘT — số đầu tiên, đơn giản nhất trong hệ đếm.",
        "cf": "乙 (yǐ – nét gập, khác hẳn hình dáng\")",
        "w": "一下 / 一个 / 一半"
      },
      {
        "c": "下",
        "p": "xià",
        "type": "独体字 · Chữ đơn",
        "st": 3,
        "ord": "一(đường ngang, mốc) → 卜(nét chỉ xuống dưới)",
        "rad": "一 (nhất – tự thành bộ)",
        "mean": "dưới, xuống",
        "tip": "Một nét NGANG làm mốc, nét chấm/móc bên dưới chỉ vị trí THẤP hơn mốc đó → nghĩa DƯỚI, XUỐNG.",
        "cf": "卡 (kǎ – \"thẻ\", ghép 上 + 下\")",
        "w": "一下 / 下午 / 楼下"
      }
    ],
    "colloFull": [
      {
        "zh": "问一下",
        "py": "wèn yíxià",
        "vn": "hỏi một chút"
      },
      {
        "zh": "看一下",
        "py": "kàn yíxià",
        "vn": "xem một chút"
      },
      {
        "zh": "说一下",
        "py": "shuō yíxià",
        "vn": "nói một chút"
      },
      {
        "zh": "等一下",
        "py": "děng yíxià",
        "vn": "chờ một chút"
      }
    ],
    "patterns": [
      {
        "s": "động từ + 一下",
        "m": "Làm nhẹ đi, nghe lịch sự hơn: 问一下"
      },
      {
        "s": "一下 đứng SAU động từ, không đứng trước"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Cho tôi hỏi một chút được không?",
        "answer": "我可以问一下吗？",
        "answerPy": "Wǒ kěyǐ wèn yíxià ma?",
        "note": "động từ + 一下 nghe nhẹ và lịch sự hơn.",
        "pair": "可以……吗？"
      },
      {
        "promptLang": "vi",
        "prompt": "Bạn xem thử một chút đi.",
        "answer": "你看一下吧。",
        "answerPy": "Nǐ kàn yíxià ba.",
        "note": "一下 đứng SAU động từ.",
        "pair": "……吧"
      }
    ]
  },
  {
    "n": 7,
    "zh": "服务员",
    "py": "fúwùyuán",
    "pos": "Danh từ",
    "vn": "nhân viên phục vụ, người phục vụ",
    "hv": "phục vụ viên",
    "em": "🧑‍🍳",
    "lesson": 2,
    "ex_zh": "女士，请坐！您喝什么？",
    "ex_py": "Nǚshì, qǐng zuò! Nín hē shénme?",
    "ex_vn": "Mời cô ngồi! Cô uống gì ạ?",
    "exList": [
      {
        "zh": "女士，请坐！您喝什么？",
        "py": "Nǚshì, qǐng zuò! Nín hē shénme?",
        "vn": "Mời cô ngồi! Cô uống gì ạ?"
      }
    ],
    "hanzi": [
      {
        "c": "服",
        "p": "fú",
        "type": "左右结构 · Trái-phải",
        "st": 8,
        "ord": "月(biến thể của 舟) trái → 𠬝(bàn tay điều khiển) phải",
        "rad": "月 (nguyệt – biến thể của 舟/nhục)",
        "mean": "phục vụ, quần áo, uống (thuốc)",
        "tip": "月(thân thuyền/thân người) + phần phải như bàn tay điều khiển, khuất phục → PHỤC VỤ, khiến người khác thuận theo; cũng chỉ trang PHỤC.",
        "cf": "朋 (péng – \"bạn\", cũng có bộ 月 nhưng lặp lại 月 ở bên phải\")",
        "w": "服务员 / 衣服"
      },
      {
        "c": "务",
        "p": "wù",
        "type": "上下结构 · Trên-dưới",
        "st": 5,
        "ord": "夂(biến thể) trên → 力(lực) dưới",
        "rad": "力 (lực – sức mạnh)",
        "mean": "công việc, nhiệm vụ, phải làm",
        "tip": "力(sức lực) ở dưới gánh vác phần việc phía trên → NHIỆM VỤ, công VIỆC cần dốc sức làm.",
        "cf": "各 (gè – \"mỗi\", phần trên giống nhưng dưới là 口\")",
        "w": "服务员 / 服务 / 任务"
      },
      {
        "c": "员",
        "p": "yuán",
        "type": "上下结构 · Trên-dưới",
        "st": 7,
        "ord": "口(khẩu) trên → 贝(bối) dưới",
        "rad": "口 (khẩu – miệng)",
        "mean": "người (làm việc trong một tổ chức/nhóm)",
        "tip": "口(miệng, chỉ số đếm người) trên 贝(tiền của, công ty) dưới → chỉ một THÀNH VIÊN, NHÂN VIÊN làm việc hưởng lương.",
        "cf": "贝 (bèi – \"vật báu, tiền\", thiếu phần 口 phía trên\")",
        "w": "服务员 / 学员 / 演员"
      }
    ],
    "colloFull": [
      {
        "zh": "问服务员",
        "py": "wèn fúwùyuán",
        "vn": "hỏi nhân viên phục vụ"
      },
      {
        "zh": "饭店的服务员",
        "py": "fàndiàn de fúwùyuán",
        "vn": "nhân viên nhà hàng"
      },
      {
        "zh": "是服务员",
        "py": "shì fúwùyuán",
        "vn": "là nhân viên phục vụ"
      },
      {
        "zh": "那个服务员",
        "py": "nàge fúwùyuán",
        "vn": "người phục vụ kia"
      }
    ],
    "patterns": [
      {
        "s": "问 + 服务员",
        "m": "Hỏi nhân viên phục vụ"
      },
      {
        "s": "服务 + 员",
        "m": "Người (员) phục vụ (服务) — cùng kiểu với 售货员"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Nhân viên phục vụ ơi, cho tôi một cốc trà.",
        "answer": "服务员，给我一杯茶。",
        "answerPy": "Fúwùyuán, gěi wǒ yì bēi chá.",
        "note": "Gọi người ta trước rồi mới gọi món.",
        "pair": "给 + người + N"
      },
      {
        "promptLang": "vi",
        "prompt": "Nhân viên của nhà hàng này rất tốt.",
        "answer": "这个饭店的服务员很好。",
        "answerPy": "Zhège fàndiàn de fúwùyuán hěn hǎo.",
        "note": "服务 + 员 — người phục vụ.",
        "pair": "很 + Adj"
      }
    ]
  },
  {
    "n": 8,
    "zh": "女士",
    "py": "nǚshì",
    "pos": "Danh từ",
    "vn": "bà, cô, quý bà, quý cô",
    "hv": "nữ sĩ",
    "em": "👩",
    "lesson": 2,
    "ex_zh": "女士，请坐！您喝什么？",
    "ex_py": "Nǚshì, qǐng zuò! Nín hē shénme?",
    "ex_vn": "Mời cô ngồi! Cô uống gì ạ?",
    "exList": [
      {
        "zh": "女士，请坐！您喝什么？",
        "py": "Nǚshì, qǐng zuò! Nín hē shénme?",
        "vn": "Mời cô ngồi! Cô uống gì ạ?"
      }
    ],
    "hanzi": [
      {
        "c": "女",
        "p": "nǚ",
        "type": "独体字 · Chữ đơn",
        "st": 3,
        "ord": "hình người phụ nữ khoanh tay quỳ, cách điệu thành 3 nét",
        "rad": "女 (nữ – tự thành bộ)",
        "mean": "phụ nữ, con gái",
        "tip": "Chữ tượng hình mô phỏng dáng người PHỤ NỮ ngồi quỳ, hai tay khoanh trước ngực thời cổ → nghĩa NỮ GIỚI.",
        "cf": "安 (ān – \"an toàn\", có 女 dưới mái nhà 宀\")",
        "w": "女士 / 女儿 / 女朋友"
      },
      {
        "c": "士",
        "p": "shì",
        "type": "独体字 · Chữ đơn",
        "st": 3,
        "ord": "一(nét ngang dài) trên → 十 dưới",
        "rad": "士 (sĩ – tự thành bộ)",
        "mean": "người có học vấn/địa vị, chiến sĩ, học vị",
        "tip": "Nét ngang trên DÀI hơn nét dưới, tượng trưng người có ĐỊA VỊ vững vàng, đứng thẳng → dùng làm kính ngữ như trong 女士, tương tự 先生.",
        "cf": "土 (tǔ – \"đất\", nét ngang trên NGẮN hơn nét dưới, ngược với 士\")",
        "w": "女士 / 士兵 / 博士"
      }
    ],
    "colloFull": [
      {
        "zh": "王女士",
        "py": "wáng nǚshì",
        "vn": "bà Vương"
      },
      {
        "zh": "那个女士",
        "py": "nàge nǚshì",
        "vn": "bà kia"
      },
      {
        "zh": "女士的杯子",
        "py": "nǚshì de bēizi",
        "vn": "cái cốc của bà ấy"
      },
      {
        "zh": "女士和先生",
        "py": "nǚshì hé xiānsheng",
        "vn": "các quý bà và quý ông"
      }
    ],
    "patterns": [
      {
        "s": "họ + 女士",
        "m": "Cách gọi trang trọng: 王女士"
      },
      {
        "s": "女士 (quý bà) ↔ 先生 (quý ông) — dùng ở nơi trang trọng"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Chào bà Vương ạ!",
        "answer": "王女士好！",
        "answerPy": "Wáng nǚshì hǎo!",
        "note": "Họ + 女士 — cách gọi trang trọng.",
        "pair": "……好！"
      },
      {
        "promptLang": "vi",
        "prompt": "Bà ấy muốn lấy một cốc sữa.",
        "answer": "那个女士要一杯牛奶。",
        "answerPy": "Nàge nǚshì yào yì bēi niúnǎi.",
        "note": "女士 ↔ 先生 — quý bà và quý ông.",
        "pair": "要 + N"
      }
    ]
  },
  {
    "n": 9,
    "zh": "请",
    "py": "qǐng",
    "pos": "Động từ",
    "vn": "mời, xin, hãy",
    "hv": "thỉnh",
    "em": "🙏",
    "lesson": 2,
    "ex_zh": "女士，请坐！您喝什么？",
    "ex_py": "Nǚshì, qǐng zuò! Nín hē shénme?",
    "ex_vn": "Mời cô ngồi! Cô uống gì ạ?",
    "exList": [
      {
        "zh": "女士，请坐！您喝什么？",
        "py": "Nǚshì, qǐng zuò! Nín hē shénme?",
        "vn": "Mời cô ngồi! Cô uống gì ạ?"
      }
    ],
    "hanzi": [
      {
        "c": "请",
        "p": "qǐng",
        "type": "左右结构 · Trái-phải",
        "st": 10,
        "ord": "讠(ngôn) trái → 青(thanh) phải",
        "rad": "讠 (ngôn – lời nói)",
        "mean": "mời, xin (lịch sự)",
        "tip": "讠(lời nói) + 青(trong sáng, thanh nhã) → lời MỜI trang trọng, lịch sự.",
        "cf": "情 (qíng – \"tình cảm\")",
        "w": "请坐 / 请问"
      }
    ],
    "colloFull": [
      {
        "zh": "请坐",
        "py": "qǐng zuò",
        "vn": "mời ngồi"
      },
      {
        "zh": "请问",
        "py": "qǐngwèn",
        "vn": "xin hỏi"
      },
      {
        "zh": "请说",
        "py": "qǐng shuō",
        "vn": "mời nói"
      },
      {
        "zh": "请喝茶",
        "py": "qǐng hē chá",
        "vn": "mời uống trà"
      }
    ],
    "patterns": [
      {
        "s": "请 + động từ",
        "m": "Lời mời lịch sự: 请坐 · 请喝茶"
      },
      {
        "s": "请问 đặt ở ĐẦU câu hỏi cho lễ phép"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Mời ngồi, mời uống trà ạ!",
        "answer": "请坐，请喝茶！",
        "answerPy": "Qǐng zuò, qǐng hē chá!",
        "note": "请 + động từ là lời mời lịch sự.",
        "pair": "请 + V"
      },
      {
        "promptLang": "vi",
        "prompt": "Xin hỏi, ở đây có bán bánh mì không ạ?",
        "answer": "请问，这里卖面包吗？",
        "answerPy": "Qǐngwèn, zhèli mài miànbāo ma?",
        "note": "请问 đặt ở đầu câu hỏi.",
        "pair": "请问，……？"
      }
    ]
  },
  {
    "n": 10,
    "zh": "坐",
    "py": "zuò",
    "pos": "Động từ",
    "vn": "ngồi",
    "hv": "tọa",
    "em": "🪑",
    "lesson": 2,
    "ex_zh": "女士，请坐！您喝什么？",
    "ex_py": "Nǚshì, qǐng zuò! Nín hē shénme?",
    "ex_vn": "Mời cô ngồi! Cô uống gì ạ?",
    "exList": [
      {
        "zh": "女士，请坐！您喝什么？",
        "py": "Nǚshì, qǐng zuò! Nín hē shénme?",
        "vn": "Mời cô ngồi! Cô uống gì ạ?"
      }
    ],
    "hanzi": [
      {
        "c": "坐",
        "p": "zuò",
        "type": "上下结构 · Trên-dưới",
        "st": 7,
        "ord": "从(biến thể) trên → 土(thổ) dưới",
        "rad": "土 (thổ – đất)",
        "mean": "ngồi",
        "tip": "从(hai người) ngồi trên 土(đất/ghế) → NGỒI.",
        "cf": "座 (zuò – \"chỗ ngồi\")",
        "w": "请坐 / 坐这儿"
      }
    ],
    "colloFull": [
      {
        "zh": "请坐",
        "py": "qǐng zuò",
        "vn": "mời ngồi"
      },
      {
        "zh": "坐这里",
        "py": "zuò zhèlǐ",
        "vn": "ngồi đây"
      },
      {
        "zh": "可以坐吗",
        "py": "kěyǐ zuò ma",
        "vn": "ngồi được không"
      },
      {
        "zh": "坐车",
        "py": "zuò chē",
        "vn": "đi xe"
      }
    ],
    "patterns": [
      {
        "s": "请 + 坐",
        "m": "Mời ngồi — câu lịch sự rất hay dùng"
      },
      {
        "s": "坐 vừa là ngồi, vừa là đi bằng phương tiện"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Mời thầy ngồi đây ạ.",
        "answer": "老师，请坐这里。",
        "answerPy": "Lǎoshī, qǐng zuò zhèli.",
        "note": "坐这里 — ngồi đây.",
        "pair": "请 + V"
      },
      {
        "promptLang": "vi",
        "prompt": "Chúng ta đi xe đến nhà hàng nhé.",
        "answer": "我们坐车去饭店吧。",
        "answerPy": "Wǒmen zuò chē qù fàndiàn ba.",
        "note": "坐 vừa là ngồi, vừa là đi bằng phương tiện.",
        "pair": "……吧"
      }
    ]
  },
  {
    "n": 11,
    "zh": "给",
    "py": "gěi",
    "pos": "Động từ",
    "vn": "đưa cho, cho",
    "hv": "cấp",
    "em": "🤲",
    "lesson": 2,
    "ex_zh": "我看一下。请给我一杯牛奶。",
    "ex_py": "Wǒ kàn yíxià. Qǐng gěi wǒ yì bēi niúnǎi.",
    "ex_vn": "Để tôi xem một chút. Cho tôi một cốc sữa.",
    "exList": [
      {
        "zh": "我看一下。请给我一杯牛奶。",
        "py": "Wǒ kàn yíxià. Qǐng gěi wǒ yì bēi niúnǎi.",
        "vn": "Để tôi xem một chút. Cho tôi một cốc sữa."
      }
    ],
    "hanzi": [
      {
        "c": "给",
        "p": "gěi",
        "type": "左右结构 · Trái-phải",
        "st": 9,
        "ord": "纟(mịch) trái → 合(hợp) phải",
        "rad": "纟 (mịch – tơ, sợi)",
        "mean": "cho, tặng",
        "tip": "Bộ 纟(tơ lụa) — xưa tặng nhau tơ lụa quý giá, sau mở rộng nghĩa CHO, TẶNG nói chung.",
        "cf": "合 (hé – \"hợp\", thiếu bộ 纟)",
        "w": "给我 / 请给我"
      }
    ],
    "colloFull": [
      {
        "zh": "给我",
        "py": "gěi wǒ",
        "vn": "cho tôi"
      },
      {
        "zh": "给我一杯茶",
        "py": "gěi wǒ yì bēi chá",
        "vn": "cho tôi một cốc trà"
      },
      {
        "zh": "给他打电话",
        "py": "gěi tā dǎ diànhuà",
        "vn": "gọi điện cho anh ấy"
      },
      {
        "zh": "给你",
        "py": "gěi nǐ",
        "vn": "cho bạn"
      }
    ],
    "patterns": [
      {
        "s": "给 + người + danh từ",
        "m": "Đưa cho ai cái gì: 给我一杯茶"
      },
      {
        "s": "给 + người + động từ",
        "m": "Làm gì cho ai: 给我打电话"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Cho tôi một cốc trà.",
        "answer": "给我一杯茶。",
        "answerPy": "Gěi wǒ yì bēi chá.",
        "note": "给 + người + danh từ — đưa cho ai cái gì.",
        "pair": "给 + người + N"
      },
      {
        "promptLang": "vi",
        "prompt": "Chiều nay bạn gọi điện cho anh ấy đi.",
        "answer": "今天下午你给他打电话吧。",
        "answerPy": "Jīntiān xiàwǔ nǐ gěi tā dǎ diànhuà ba.",
        "note": "给 + người + động từ — làm gì cho ai.",
        "pair": "给……打电话"
      }
    ]
  },
  {
    "n": 12,
    "zh": "杯",
    "py": "bēi",
    "pos": "Danh từ",
    "vn": "ly, cốc, tách",
    "hv": "bôi",
    "em": "🥛",
    "lesson": 2,
    "ex_zh": "我看一下。请给我一杯牛奶。",
    "ex_py": "Wǒ kàn yíxià. Qǐng gěi wǒ yì bēi niúnǎi.",
    "ex_vn": "Để tôi xem một chút. Cho tôi một cốc sữa.",
    "exList": [
      {
        "zh": "我看一下。请给我一杯牛奶。",
        "py": "Wǒ kàn yíxià. Qǐng gěi wǒ yì bēi niúnǎi.",
        "vn": "Để tôi xem một chút. Cho tôi một cốc sữa."
      }
    ],
    "hanzi": [
      {
        "c": "杯",
        "p": "bēi",
        "type": "左右结构 · Trái-phải",
        "st": 8,
        "ord": "木(mộc) trái → 不(bất) phải",
        "rad": "木 (mộc – cây, gỗ)",
        "mean": "cái ly, cốc, tách",
        "tip": "木(gỗ, vật liệu làm đồ đựng thời xưa) + 不(gợi âm đọc \"bēi\") → dụng cụ đựng nước làm từ gỗ/sứ: CÁI CỐC.",
        "cf": "杜 (dù – \"họ Đỗ; ngăn chặn\", phải là 土 chứ không phải 不\")",
        "w": "一杯 / 杯子 / 茶杯"
      }
    ],
    "colloFull": [
      {
        "zh": "一杯茶",
        "py": "yì bēi chá",
        "vn": "một cốc trà"
      },
      {
        "zh": "两杯水",
        "py": "liǎng bēi shuǐ",
        "vn": "hai cốc nước"
      },
      {
        "zh": "一杯牛奶",
        "py": "yì bēi niúnǎi",
        "vn": "một cốc sữa"
      },
      {
        "zh": "几杯",
        "py": "jǐ bēi",
        "vn": "mấy cốc"
      }
    ],
    "patterns": [
      {
        "s": "số + 杯 + đồ uống",
        "m": "Lượng từ 杯 cho đồ uống: 一杯茶"
      },
      {
        "s": "杯 (lượng từ) và 杯子 (cái cốc) — cùng chữ 杯"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tôi lấy hai cốc nước.",
        "answer": "我要两杯水。",
        "answerPy": "Wǒ yào liǎng bēi shuǐ.",
        "note": "Lượng từ 杯 dùng cho đồ uống.",
        "pair": "要 + N"
      },
      {
        "promptLang": "vi",
        "prompt": "Bạn muốn uống mấy cốc trà?",
        "answer": "你想喝几杯茶？",
        "answerPy": "Nǐ xiǎng hē jǐ bēi chá?",
        "note": "几杯 — mấy cốc.",
        "pair": "几……？"
      }
    ]
  },
  {
    "n": 13,
    "zh": "要",
    "py": "yào",
    "pos": "Động từ",
    "vn": "cần, muốn",
    "hv": "yếu",
    "em": "🙋",
    "lesson": 2,
    "ex_zh": "好的。您还要什么？",
    "ex_py": "Hǎo de. Nín hái yào shénme?",
    "ex_vn": "Vâng. Cô còn dùng thêm gì nữa không?",
    "exList": [
      {
        "zh": "好的。您还要什么？",
        "py": "Hǎo de. Nín hái yào shénme?",
        "vn": "Vâng. Cô còn dùng thêm gì nữa không?"
      }
    ],
    "hanzi": [
      {
        "c": "要",
        "p": "yào",
        "type": "上下结构 · Trên-dưới",
        "st": 9,
        "ord": "覀(biến thể của 西) trên → 女(nữ) dưới",
        "rad": "覀 (biến thể của 西 – phía tây)",
        "mean": "cần, muốn, sẽ, quan trọng",
        "tip": "覀(giống mái che/nắp đậy) trên 女(người) dưới — hình ảnh gợi điều gì đó được che chở, giữ gìn cẩn thận vì QUAN TRỌNG → mở rộng thành CẦN, MUỐN có được.",
        "cf": "腰 (yāo – \"eo lưng\", thêm bộ 月\")",
        "w": "要什么 / 不要 / 要是"
      }
    ],
    "colloFull": [
      {
        "zh": "要一杯茶",
        "py": "yào yì bēi chá",
        "vn": "lấy một cốc trà"
      },
      {
        "zh": "要什么",
        "py": "yào shénme",
        "vn": "muốn gì"
      },
      {
        "zh": "不要",
        "py": "búyào",
        "vn": "không cần"
      },
      {
        "zh": "要一个面包",
        "py": "yào yí gè miànbāo",
        "vn": "lấy một cái bánh mì"
      }
    ],
    "patterns": [
      {
        "s": "要 + danh từ",
        "m": "Gọi món, lấy cái gì: 我要一杯茶"
      },
      {
        "s": "要 + động từ",
        "m": "Định làm gì: 我要去上课"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tôi lấy một cái bánh mì và một quả trứng.",
        "answer": "我要一个面包和一个鸡蛋。",
        "answerPy": "Wǒ yào yí ge miànbāo hé yí ge jīdàn.",
        "note": "要 + danh từ — gọi món.",
        "pair": "A 和 B"
      },
      {
        "promptLang": "vi",
        "prompt": "Bạn muốn lấy gì?",
        "answer": "你要什么？",
        "answerPy": "Nǐ yào shénme?",
        "note": "Câu có 什么 thì không thêm 吗.",
        "pair": "……什么？"
      }
    ]
  },
  {
    "n": 14,
    "zh": "早饭",
    "py": "zǎofàn",
    "pos": "Danh từ",
    "vn": "bữa sáng",
    "hv": "tảo phạn",
    "em": "🍳",
    "lesson": 2,
    "ex_zh": "我还没吃早饭，再要这个面包和鸡蛋吧。",
    "ex_py": "Wǒ hái méi chī zǎofàn, zài yào zhège miànbāo hé jīdàn ba.",
    "ex_vn": "Tôi vẫn chưa ăn sáng, cho tôi cái bánh mì này và trứng nhé.",
    "exList": [
      {
        "zh": "我还没吃早饭，再要这个面包和鸡蛋吧。",
        "py": "Wǒ hái méi chī zǎofàn, zài yào zhège miànbāo hé jīdàn ba.",
        "vn": "Tôi vẫn chưa ăn sáng, cho tôi cái bánh mì này và trứng nhé."
      }
    ],
    "hanzi": [
      {
        "c": "早",
        "p": "zǎo",
        "type": "上下结构 · Trên-dưới",
        "st": 6,
        "ord": "日(nhật) trên → 十(thập) dưới",
        "rad": "日 (nhật – mặt trời)",
        "mean": "sớm, buổi sáng",
        "tip": "日(mặt trời) mọc lên trên đầu ngọn cây/vạch 十 → chỉ thời điểm SỚM trong ngày.",
        "cf": "旱 (hàn – \"hạn hán\", dưới là 干 chứ không phải 十\")",
        "w": "早饭 / 早上 / 早安"
      },
      {
        "c": "饭",
        "p": "fàn",
        "type": "左右结构 · Trái-phải",
        "st": 7,
        "ord": "饣(thực) trái → 反(phản) phải",
        "rad": "饣 (thực – ăn uống)",
        "mean": "cơm, bữa ăn",
        "tip": "饣(bộ ăn uống) + 反(gợi âm đọc \"fàn\") → chỉ CƠM, bữa ĂN nói chung.",
        "cf": "饱 (bǎo – \"no\", bộ 饣+ 包\")",
        "w": "早饭 / 米饭 / 吃饭"
      }
    ],
    "colloFull": [
      {
        "zh": "吃早饭",
        "py": "chī zǎofàn",
        "vn": "ăn sáng"
      },
      {
        "zh": "做早饭",
        "py": "zuò zǎofàn",
        "vn": "nấu bữa sáng"
      },
      {
        "zh": "在家吃早饭",
        "py": "zài jiā chī zǎofàn",
        "vn": "ăn sáng ở nhà"
      },
      {
        "zh": "早饭的面包",
        "py": "zǎofàn de miànbāo",
        "vn": "bánh mì bữa sáng"
      }
    ],
    "patterns": [
      {
        "s": "吃 / 做 + 早饭",
        "m": "Ăn sáng, nấu bữa sáng"
      },
      {
        "s": "早饭 · 午饭 · 晚饭 — ba bữa trong ngày"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Sáng nay tôi ăn sáng ở nhà.",
        "answer": "今天早上我在家吃早饭。",
        "answerPy": "Jīntiān zǎoshang wǒ zài jiā chī zǎofàn.",
        "note": "早饭 · 午饭 · 晚饭 — ba bữa trong ngày.",
        "pair": "在……吃"
      },
      {
        "promptLang": "vi",
        "prompt": "Bữa sáng mẹ tôi nấu rất ngon.",
        "answer": "我妈妈做的早饭很好吃。",
        "answerPy": "Wǒ māma zuò de zǎofàn hěn hǎochī.",
        "note": "做的早饭 — bữa sáng do ai đó nấu.",
        "pair": "很 + Adj"
      }
    ]
  },
  {
    "n": 15,
    "zh": "这个",
    "py": "zhège",
    "pos": "Đại từ",
    "vn": "cái này",
    "hv": "giá cá",
    "em": "👉",
    "lesson": 2,
    "ex_zh": "我还没吃早饭，再要这个面包和鸡蛋吧。",
    "ex_py": "Wǒ hái méi chī zǎofàn, zài yào zhège miànbāo hé jīdàn ba.",
    "ex_vn": "Tôi vẫn chưa ăn sáng, cho tôi cái bánh mì này và trứng nhé.",
    "exList": [
      {
        "zh": "我还没吃早饭，再要这个面包和鸡蛋吧。",
        "py": "Wǒ hái méi chī zǎofàn, zài yào zhège miànbāo hé jīdàn ba.",
        "vn": "Tôi vẫn chưa ăn sáng, cho tôi cái bánh mì này và trứng nhé."
      }
    ],
    "hanzi": [
      {
        "c": "这",
        "p": "zhè",
        "type": "半包围结构 · Bán bao vây",
        "st": 7,
        "ord": "文(văn) trong → 辶(sước) bao ngoài dưới-trái",
        "rad": "辶 (sước – đi, chợt bước)",
        "mean": "này, cái này",
        "tip": "辶(đi, di chuyển lại gần) + 文(chỉ sự vật/lời nói) → chỉ vào sự vật đang ở NGAY GẦN: cái NÀY.",
        "cf": "达 (dá – \"đạt tới\", cũng có 辶nhưng phần trong là 大\")",
        "w": "这个 / 这里 / 这是"
      },
      {
        "c": "个",
        "p": "ge",
        "type": "独体字 · Chữ đơn",
        "st": 3,
        "ord": "𠆢(nhân, biến thể mái) trên → 丨(nét sổ) dưới",
        "rad": "人 (nhân – người, biến thể phía trên)",
        "mean": "cái, chiếc (lượng từ phổ biến nhất)",
        "tip": "Hình dáng giống một NGƯỜI (𠆢) đứng cùng một nét thẳng đứng — dùng làm LƯỢNG TỪ đếm đồ vật/người phổ biến nhất trong tiếng Hán.",
        "cf": "介 (jiè – \"giới thiệu\", thêm hai nét 丿丶 ở giữa\")",
        "w": "这个 / 一个 / 那个"
      }
    ],
    "colloFull": [
      {
        "zh": "这个人",
        "py": "zhège rén",
        "vn": "người này"
      },
      {
        "zh": "这个面包",
        "py": "zhège miànbāo",
        "vn": "cái bánh mì này"
      },
      {
        "zh": "这个多少钱",
        "py": "zhège duōshao qián",
        "vn": "cái này bao nhiêu tiền"
      },
      {
        "zh": "这个怎么样",
        "py": "zhège zěnmeyàng",
        "vn": "cái này thế nào"
      }
    ],
    "patterns": [
      {
        "s": "这 + 个 + danh từ",
        "m": "Cái này — vật ở gần người nói"
      },
      {
        "s": "这个 (gần) ↔ 那个 (xa)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Cái này bao nhiêu tiền?",
        "answer": "这个多少钱？",
        "answerPy": "Zhège duōshao qián?",
        "note": "这个 dùng khi không nhắc lại tên đồ vật.",
        "pair": "多少钱？"
      },
      {
        "promptLang": "vi",
        "prompt": "Cái bánh mì này cực kỳ ngon.",
        "answer": "这个面包非常好吃。",
        "answerPy": "Zhège miànbāo fēicháng hǎochī.",
        "note": "这个 (gần) ↔ 那个 (xa).",
        "pair": "非常 + Adj"
      }
    ]
  },
  {
    "n": 16,
    "zh": "面包",
    "py": "miànbāo",
    "pos": "Danh từ",
    "vn": "bánh mì",
    "hv": "diện bao",
    "em": "🍞",
    "lesson": 2,
    "ex_zh": "我还没吃早饭，再要这个面包和鸡蛋吧。",
    "ex_py": "Wǒ hái méi chī zǎofàn, zài yào zhège miànbāo hé jīdàn ba.",
    "ex_vn": "Tôi vẫn chưa ăn sáng, cho tôi cái bánh mì này và trứng nhé.",
    "exList": [
      {
        "zh": "我还没吃早饭，再要这个面包和鸡蛋吧。",
        "py": "Wǒ hái méi chī zǎofàn, zài yào zhège miànbāo hé jīdàn ba.",
        "vn": "Tôi vẫn chưa ăn sáng, cho tôi cái bánh mì này và trứng nhé."
      }
    ],
    "hanzi": [
      {
        "c": "面",
        "p": "miàn",
        "type": "独体字 · Chữ đơn",
        "st": 9,
        "ord": "一(đỉnh) trên → 囗(khung ngoài) → 三(nét ngang trong)",
        "rad": "面 (diện – tự thành bộ)",
        "mean": "mặt, bề mặt; mì, bột mì",
        "tip": "Hình khuôn MẶT người cách điệu (khung ngoài là đường viền mặt, các nét ngang trong là mắt/mũi) → nghĩa MẶT, bề mặt; mở rộng chỉ bột MÌ được cán phẳng như mặt bàn.",
        "cf": "而 (ér – \"mà, nhưng\", chỉ giống phần dưới của 面\")",
        "w": "面包 / 面条 / 见面"
      },
      {
        "c": "包",
        "p": "bāo",
        "type": "半包围结构 · Bán bao vây",
        "st": 5,
        "ord": "勹(bao) ngoài → 巳(biến thể) trong",
        "rad": "勹 (bao – bọc)",
        "mean": "gói, bọc, cái túi; bánh bao",
        "tip": "勹(hình người cúi khom ôm bọc) ôm lấy 巳(vật nhỏ bên trong) → nghĩa BỌC, GÓI lại; mở rộng chỉ bánh mì/bánh BAO.",
        "cf": "饱 (bǎo – \"no\", thêm bộ 饣\")",
        "w": "面包 / 书包 / 包子"
      }
    ],
    "colloFull": [
      {
        "zh": "吃面包",
        "py": "chī miànbāo",
        "vn": "ăn bánh mì"
      },
      {
        "zh": "买面包",
        "py": "mǎi miànbāo",
        "vn": "mua bánh mì"
      },
      {
        "zh": "一个面包",
        "py": "yí gè miànbāo",
        "vn": "một cái bánh mì"
      },
      {
        "zh": "好吃的面包",
        "py": "hǎochī de miànbāo",
        "vn": "bánh mì ngon"
      }
    ],
    "patterns": [
      {
        "s": "吃 / 买 + 面包",
        "m": "Ăn, mua bánh mì"
      },
      {
        "s": "面 + 包",
        "m": "Bọc (包) bột mì (面) — cùng chữ 面 với 面条儿"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Sáng nay tôi ăn một cái bánh mì.",
        "answer": "今天早上我吃一个面包。",
        "answerPy": "Jīntiān zǎoshang wǒ chī yí ge miànbāo.",
        "note": "一个面包 — một cái bánh mì.",
        "pair": "……吃……"
      },
      {
        "promptLang": "vi",
        "prompt": "Cửa hàng này bán bánh mì phải không?",
        "answer": "这个商店卖面包吗？",
        "answerPy": "Zhège shāngdiàn mài miànbāo ma?",
        "note": "卖面包 — bán bánh mì.",
        "pair": "……吗？"
      }
    ]
  },
  {
    "n": 17,
    "zh": "鸡蛋",
    "py": "jīdàn",
    "pos": "Danh từ",
    "vn": "trứng gà",
    "hv": "kê đản",
    "em": "🥚",
    "lesson": 2,
    "ex_zh": "我还没吃早饭，再要这个面包和鸡蛋吧。",
    "ex_py": "Wǒ hái méi chī zǎofàn, zài yào zhège miànbāo hé jīdàn ba.",
    "ex_vn": "Tôi vẫn chưa ăn sáng, cho tôi cái bánh mì này và trứng nhé.",
    "exList": [
      {
        "zh": "我还没吃早饭，再要这个面包和鸡蛋吧。",
        "py": "Wǒ hái méi chī zǎofàn, zài yào zhège miànbāo hé jīdàn ba.",
        "vn": "Tôi vẫn chưa ăn sáng, cho tôi cái bánh mì này và trứng nhé."
      }
    ],
    "hanzi": [
      {
        "c": "蛋",
        "p": "dàn",
        "type": "上下结构 · Trên-dưới",
        "st": 11,
        "ord": "疋(sơ) → 虫(trùng)",
        "rad": "疋 (sơ)",
        "mean": "trứng",
        "tip": "Hình quả trứng cách điệu bên trên phần thân → nghĩa TRỨNG nói chung.",
        "cf": "蜑 (dàn – ít dùng)",
        "w": "鸡蛋"
      },
      {
        "c": "鸡",
        "p": "jī",
        "type": "左右结构 · Trái-phải",
        "st": 7,
        "ord": "又(hựu, giản hoá) trái → 鸟(điểu) phải",
        "rad": "鸟 (điểu – chim)",
        "mean": "con gà",
        "tip": "鸟(bộ chim) bên phải cho biết đây là loài CHIM; phần trái 又 là ký hiệu giản hoá từ chữ phồn thể (gợi âm đọc \"jī\") → chỉ con GÀ.",
        "cf": "鸦 (yā – \"quạ\", cũng có bộ 鸟\")",
        "w": "鸡蛋 / 公鸡 / 小鸡"
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
        "zh": "鸡蛋和面包",
        "py": "jīdàn hé miànbāo",
        "vn": "trứng và bánh mì"
      }
    ],
    "patterns": [
      {
        "s": "số + 个 + 鸡蛋",
        "m": "Lượng từ của 鸡蛋 là 个"
      },
      {
        "s": "鸡 + 蛋",
        "m": "Trứng (蛋) gà (鸡)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tôi muốn mua một ít trứng.",
        "answer": "我想买一些鸡蛋。",
        "answerPy": "Wǒ xiǎng mǎi yìxiē jīdàn.",
        "note": "Lượng từ của 鸡蛋 là 个.",
        "pair": "想 + V"
      },
      {
        "promptLang": "vi",
        "prompt": "Bữa sáng tôi ăn trứng và bánh mì.",
        "answer": "早饭我吃鸡蛋和面包。",
        "answerPy": "Zǎofàn wǒ chī jīdàn hé miànbāo.",
        "note": "和 chỉ nối danh từ với danh từ.",
        "pair": "A 和 B"
      }
    ]
  },
  {
    "n": 18,
    "zh": "先生",
    "py": "xiānsheng",
    "pos": "Danh từ",
    "vn": "anh, ông, ngài, quý ông",
    "hv": "tiên sinh",
    "em": "🤵",
    "lesson": 3,
    "ex_zh": "先生，请坐！您要什么？",
    "ex_py": "Xiānsheng, qǐng zuò! Nín yào shénme?",
    "ex_vn": "Mời anh ngồi! Anh cần gì ạ?",
    "exList": [
      {
        "zh": "先生，请坐！您要什么？",
        "py": "Xiānsheng, qǐng zuò! Nín yào shénme?",
        "vn": "Mời anh ngồi! Anh cần gì ạ?"
      }
    ],
    "hanzi": [
      {
        "c": "先",
        "p": "xiān",
        "type": "上下结构 · Trên-dưới",
        "st": 6,
        "ord": "丿(biến thể) trên → 儿(nhân) dưới",
        "rad": "儿 (nhân – người, biến thể)",
        "mean": "trước, đầu tiên; ông (kính ngữ)",
        "tip": "Hình người bước ra TRƯỚC tiên → ĐẦU TIÊN; 先生 vốn nghĩa \"người sinh ra trước\", dùng gọi ÔNG một cách kính trọng.",
        "cf": "洗 (xǐ – \"rửa\")",
        "w": "先生"
      },
      {
        "c": "生",
        "p": "sheng",
        "type": "独体字 · Chữ đơn",
        "st": 5,
        "ord": "丿(mầm cây) trên → 土(thổ) dưới",
        "rad": "生 (sinh – tự thành bộ)",
        "mean": "sinh ra, sống; sinh viên/tiên sinh",
        "tip": "Hình mầm cây (丿) nhú lên khỏi mặt ĐẤT (土) → nghĩa SINH RA, sự SỐNG; 先生 nghĩa gốc \"người sinh trước\", dùng làm kính ngữ.",
        "cf": "牛 (niú – \"con bò\", thiếu nét sổ xuyên suốt phía trên\")",
        "w": "先生 / 学生 / 生日"
      }
    ],
    "colloFull": [
      {
        "zh": "王先生",
        "py": "wáng xiānsheng",
        "vn": "ông Vương"
      },
      {
        "zh": "那个先生",
        "py": "nàge xiānsheng",
        "vn": "ông kia"
      },
      {
        "zh": "先生的茶",
        "py": "xiānsheng de chá",
        "vn": "trà của ông ấy"
      },
      {
        "zh": "先生和女士",
        "py": "xiānsheng hé nǚshì",
        "vn": "quý ông và quý bà"
      }
    ],
    "patterns": [
      {
        "s": "họ + 先生",
        "m": "Cách gọi trang trọng: 王先生"
      },
      {
        "s": "先生 (quý ông) ↔ 女士 (quý bà)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Chào ông Vương ạ!",
        "answer": "王先生好！",
        "answerPy": "Wáng xiānsheng hǎo!",
        "note": "Họ + 先生 — cách gọi trang trọng.",
        "pair": "……好！"
      },
      {
        "promptLang": "vi",
        "prompt": "Ông ấy muốn lấy một cốc trà.",
        "answer": "那个先生要一杯茶。",
        "answerPy": "Nàge xiānsheng yào yì bēi chá.",
        "note": "先生 ↔ 女士.",
        "pair": "要 + N"
      }
    ]
  },
  {
    "n": 19,
    "zh": "饺子",
    "py": "jiǎozi",
    "pos": "Danh từ",
    "vn": "sủi cảo, bánh chẻo",
    "hv": "giảo tử",
    "em": "🥟",
    "lesson": 3,
    "ex_zh": "我要一斤饺子。",
    "ex_py": "Wǒ yào yì jīn jiǎozi.",
    "ex_vn": "Cho tôi một cân sủi cảo.",
    "exList": [
      {
        "zh": "我要一斤饺子。",
        "py": "Wǒ yào yì jīn jiǎozi.",
        "vn": "Cho tôi một cân sủi cảo."
      }
    ],
    "hanzi": [
      {
        "c": "饺",
        "p": "jiǎo",
        "type": "左右结构 · Trái-phải",
        "st": 9,
        "ord": "饣(thực) trái → 交(giao) phải",
        "rad": "饣 (thực – ăn uống)",
        "mean": "sủi cảo, bánh chẻo",
        "tip": "饣(bộ ăn uống) + 交(giao, gấp bắt chéo mép bột lại) → chỉ loại bánh bột gấp MÉP rồi luộc/hấp: SỦI CẢO.",
        "cf": "较 (jiào – \"so sánh\", bộ 车thay vì 饣\")",
        "w": "饺子 / 水饺"
      },
      {
        "c": "子",
        "p": "zi",
        "type": "独体字 · Chữ đơn",
        "st": 3,
        "ord": "hình đứa trẻ đầu to, hai tay dang ngang, thân quấn",
        "rad": "子 (tử – tự thành bộ)",
        "mean": "con, con trai / hậu tố danh từ",
        "tip": "Hình tượng một ĐỨA TRẺ SƠ SINH quấn tã, đầu to, tay dang ngang → nghĩa CON; khi làm hậu tố (như 饺子, 桌子) mất nghĩa gốc, chỉ đọc nhẹ \"zi\".",
        "cf": "孑 (jié – \"cô độc\", thiếu một nét ngang bên phải\")",
        "w": "饺子 / 儿子 / 桌子"
      }
    ],
    "colloFull": [
      {
        "zh": "吃饺子",
        "py": "chī jiǎozi",
        "vn": "ăn sủi cảo"
      },
      {
        "zh": "做饺子",
        "py": "zuò jiǎozi",
        "vn": "gói sủi cảo"
      },
      {
        "zh": "一些饺子",
        "py": "yìxiē jiǎozi",
        "vn": "một ít sủi cảo"
      },
      {
        "zh": "要一半饺子",
        "py": "yào yíbàn jiǎozi",
        "vn": "lấy một nửa phần sủi cảo"
      }
    ],
    "patterns": [
      {
        "s": "吃 / 做 + 饺子",
        "m": "Ăn, gói sủi cảo"
      },
      {
        "s": "饺子 là món người Trung Quốc hay làm vào dịp lễ"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tôi lấy một ít sủi cảo.",
        "answer": "我要一些饺子。",
        "answerPy": "Wǒ yào yìxiē jiǎozi.",
        "note": "一些饺子 — một ít sủi cảo.",
        "pair": "要 + N"
      },
      {
        "promptLang": "vi",
        "prompt": "Sủi cảo của nhà hàng này cực kỳ ngon.",
        "answer": "这个饭店的饺子非常好吃。",
        "answerPy": "Zhège fàndiàn de jiǎozi fēicháng hǎochī.",
        "note": "饭店的饺子 — sủi cảo của nhà hàng.",
        "pair": "非常 + Adj"
      }
    ]
  },
  {
    "n": 20,
    "zh": "一半",
    "py": "yíbàn",
    "pos": "Số từ",
    "vn": "một nửa",
    "hv": "nhất bán",
    "em": "➗",
    "lesson": 3,
    "ex_zh": "四十个太多了，我要一半吧。",
    "ex_py": "Sìshí gè tài duō le, wǒ yào yíbàn ba.",
    "ex_vn": "40 cái thì nhiều quá, tôi lấy nửa cân thôi nhé.",
    "exList": [
      {
        "zh": "四十个太多了，我要一半吧。",
        "py": "Sìshí gè tài duō le, wǒ yào yíbàn ba.",
        "vn": "40 cái thì nhiều quá, tôi lấy nửa cân thôi nhé."
      }
    ],
    "hanzi": [
      {
        "c": "一",
        "p": "yí",
        "type": "独体字 · Chữ đơn",
        "st": 1,
        "ord": "một nét ngang duy nhất",
        "rad": "一 (nhất – tự thành bộ)",
        "mean": "một, số 1",
        "tip": "Một nét NGANG duy nhất tượng trưng cho số MỘT — số đầu tiên, đơn giản nhất trong hệ đếm.",
        "cf": "乙 (yǐ – nét gập, khác hẳn hình dáng\")",
        "w": "一半 / 一个 / 一下"
      },
      {
        "c": "半",
        "p": "bàn",
        "type": "独体字 · Chữ đơn",
        "st": 5,
        "ord": "八(chia đôi) trên → 十(thập) dưới, nét sổ giữa xuyên suốt cả hai phần",
        "rad": "十 (thập – số mười)",
        "mean": "nửa, một nửa",
        "tip": "八(chia làm đôi) trên vật được một nét sổ dọc xuyên suốt cắt đôi ở giữa → nghĩa MỘT NỬA.",
        "cf": "华 (huá – \"hoa lệ, Trung Hoa\", có 十 ở giữa nhưng thêm nét khác\")",
        "w": "一半 / 半年 / 半个"
      }
    ],
    "colloFull": [
      {
        "zh": "一半的钱",
        "py": "yíbàn de qián",
        "vn": "một nửa số tiền"
      },
      {
        "zh": "吃一半",
        "py": "chī yíbàn",
        "vn": "ăn một nửa"
      },
      {
        "zh": "一半的饺子",
        "py": "yíbàn de jiǎozi",
        "vn": "một nửa phần sủi cảo"
      },
      {
        "zh": "给我一半",
        "py": "gěi wǒ yíbàn",
        "vn": "cho tôi một nửa"
      }
    ],
    "patterns": [
      {
        "s": "一半 + 的 + danh từ",
        "m": "Một nửa cái gì: 一半的钱"
      },
      {
        "s": "一 + 半",
        "m": "Một (一) nửa (半) — 半 cũng dùng cho giờ: 两点半"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Cho tôi một nửa thôi.",
        "answer": "给我一半吧。",
        "answerPy": "Gěi wǒ yíbàn ba.",
        "note": "给我一半 — cho tôi một nửa.",
        "pair": "……吧"
      },
      {
        "promptLang": "vi",
        "prompt": "Một nửa số tiền này là của em trai tôi.",
        "answer": "这一半的钱是我弟弟的。",
        "answerPy": "Zhè yíbàn de qián shì wǒ dìdi de.",
        "note": "一半 + 的 + danh từ.",
        "pair": "是……的"
      }
    ]
  },
  {
    "n": 21,
    "zh": "茶",
    "py": "chá",
    "pos": "Danh từ",
    "vn": "trà, chè",
    "hv": "trà",
    "em": "🍵",
    "lesson": 3,
    "ex_zh": "请给我一杯茶吧。",
    "ex_py": "Qǐng gěi wǒ yì bēi chá ba.",
    "ex_vn": "Cho tôi một cốc trà nhé.",
    "exList": [
      {
        "zh": "请给我一杯茶吧。",
        "py": "Qǐng gěi wǒ yì bēi chá ba.",
        "vn": "Cho tôi một cốc trà nhé."
      }
    ],
    "hanzi": [
      {
        "c": "茶",
        "p": "chá",
        "type": "上下结构 · Trên-dưới",
        "st": 9,
        "ord": "艹(thảo) trên → 余(biến thể) dưới",
        "rad": "艹 (thảo – cỏ cây)",
        "mean": "trà",
        "tip": "艹(lá cây) pha thành thức uống → TRÀ.",
        "cf": "茶 dễ nhầm 荼 (tú – \"cỏ đắng\")",
        "w": "喝茶 / 一杯茶"
      }
    ],
    "colloFull": [
      {
        "zh": "喝茶",
        "py": "hē chá",
        "vn": "uống trà"
      },
      {
        "zh": "一杯茶",
        "py": "yì bēi chá",
        "vn": "một cốc trà"
      },
      {
        "zh": "中国茶",
        "py": "Zhōngguó chá",
        "vn": "trà Trung Quốc"
      },
      {
        "zh": "请喝茶",
        "py": "qǐng hē chá",
        "vn": "mời uống trà"
      }
    ],
    "patterns": [
      {
        "s": "喝 + 茶",
        "m": "Uống trà"
      },
      {
        "s": "茶 có bộ 艹 (cỏ) ở trên — trà làm từ lá cây"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Mời bạn uống trà.",
        "answer": "请你喝茶。",
        "answerPy": "Qǐng nǐ hē chá.",
        "note": "请喝茶 — mời uống trà.",
        "pair": "请 + V"
      },
      {
        "promptLang": "vi",
        "prompt": "Tôi muốn uống một cốc trà Trung Quốc.",
        "answer": "我想喝一杯中国茶。",
        "answerPy": "Wǒ xiǎng hē yì bēi Zhōngguó chá.",
        "note": "一杯茶 — một cốc trà.",
        "pair": "想 + V"
      }
    ]
  }
];

var wuData = [
  {img:'/images/hsk1v3-bai-13/mianbao.jpg',label:'面包',py:'miànbāo',letter:'A'},
  {img:'/images/hsk1v3-bai-13/shuo.jpg',label:'说',py:'shuō',letter:'B'},
  {img:'/images/hsk1v3-bai-13/gei.jpg',label:'给',py:'gěi',letter:'C'},
  {img:'/images/hsk1v3-bai-13/cha.jpg',label:'茶',py:'chá',letter:'D'},
  {img:'/images/hsk1v3-bai-13/yiban.jpg',label:'一半',py:'yíbàn',letter:'E'},
  {img:'/images/hsk1v3-bai-13/qing.jpg',label:'请',py:'qǐng',letter:'F'},
];

// ══════════════════════════════════════════
// LUYỆN TẬP SÁCH BÀI TẬP (New HSK Course 1 Workbook, Bài 13: Ngữ âm + Hán tự + Mô phỏng đề thi)
// ══════════════════════════════════════════
var wbData = {
  sections: [
    {
      title: 'Ngữ âm',
      audio: '/audio/hsk1v3-bai-13/wb-yuyin.mp3',
      blocks: [
        { type: 'tonemc', caption: 'Phân biệt thanh điệu — chọn âm tiết có thanh điệu KHÁC trong nhóm',
          items: [
            {before:'', after:'', answer:'shuǐguǒ', options:['jiǎozi','shuǐguǒ','zǎoshang']},
            {before:'', after:'', answer:'xuéxí', options:['xuéxí','fángjiān','míngtiān']},
            {before:'', after:'', answer:'xiěHànzì', options:['mǎibāozi','xiěHànzì','yǒubēizi']},
            {before:'', after:'', answer:'zhǎotóngxué', options:['mánggōngzuò','láishūdiàn','zhǎotóngxué']}
          ] },
        { type: 'pymatch', caption: 'Nghe âm tiết, ghép với từ đúng',
          items: [{py:'nǐ hǎo', hz:'你好'}, {py:'gōngsī', hz:'公司'}, {py:'xiānsheng', hz:'先生'}, {py:'gōngzuò', hz:'工作'}, {py:'jiǎozi', hz:'饺子'}, {py:'péngyou', hz:'朋友'}] },
        { type: 'table', caption: 'Chữ Hán (汉字) — Cấu trúc độc thể/hợp thể, chữ hình thanh',
          rows: [
            ['独体字 (chữ độc thể)', 'Không thể tách thành 2 bộ phận trở lên — ví dụ: 口, 上, 下'],
            ['合体字 (chữ hợp thể)', 'Gồm 2 bộ phận/bộ thủ trở lên — ví dụ: 和, 认, 什'],
            ['形声字 (chữ hình thanh)', 'Hợp thể gồm hình bàng (gợi nghĩa) + thanh bàng (gợi âm) — ví dụ: 奶/姥/妈/姐/妹 đều có bộ "女" (gợi nghĩa liên quan nữ giới) ghép với 乃/老/马/且/未 (gợi âm đọc)']
          ] },
        { type: 'table', caption: 'Cấu trúc chữ hợp thể — luyện viết',
          rows: [
            ['左右结构 (trái-phải)', '和 (hé)'],
            ['左中右结构 (trái-giữa-phải)', '做 (zuò)']
          ] },
        { type: 'table', caption: 'Ví dụ luyện viết từ',
          rows: [
            ['儿 (ér) → 女儿 (nǚ\'ér)', '弟 (dì) → 弟弟 (dìdi)'],
            ['汉 (Hàn) → 汉语 (Hànyǔ)', '谢 (xiè) → 谢谢 (xièxie)']
          ],
          note: 'Phần luyện viết tay theo từng nét cần thực hành trực tiếp trên giấy/vở theo mẫu trong sách.' }
      ]
    },
    {
      title: 'Mô phỏng đề thi',
      audio: '/audio/hsk1v3-bai-13/wb-mocktest.mp3',
      blocks: [
        { type: 'mocktest',
          listening: [
            { n: 1, options: [
              {key:'A', img:'/images/hsk1v3-bai-13-wb/q1a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-13-wb/q1b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-13-wb/q1c.jpg'}
            ], answer: 'C' },
            { n: 2, options: [
              {key:'A', img:'/images/hsk1v3-bai-13-wb/q2a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-13-wb/q2b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-13-wb/q2c.jpg'}
            ], answer: 'A' },
            { n: 3, options: [
              {key:'A', img:'/images/hsk1v3-bai-13-wb/q3a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-13-wb/q3b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-13-wb/q3c.jpg'}
            ], answer: 'C' },
            { n: 4, options: [
              {key:'A', text:'给你', py:'gěi nǐ'},
              {key:'B', text:'吃早饭', py:'chī zǎofàn'},
              {key:'C', text:'要一杯茶', py:'yào yì bēi chá'}
            ], answer: 'C' },
            { n: 5, options: [
              {key:'A', text:'学习', py:'xuéxí'},
              {key:'B', text:'不对', py:'bú duì'},
              {key:'C', text:'没问题', py:'méi wèntí'}
            ], answer: 'C' },
            { n: 6, options: [
              {key:'A', img:'/images/hsk1v3-bai-13-wb/q6to8_a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-13-wb/q6to8_b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-13-wb/q6to8_c.jpg'},
              {key:'D', img:'/images/hsk1v3-bai-13-wb/q6to8_d.jpg'}
            ], answer: 'C' },
            { n: 7, options: [
              {key:'A', img:'/images/hsk1v3-bai-13-wb/q6to8_a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-13-wb/q6to8_b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-13-wb/q6to8_c.jpg'},
              {key:'D', img:'/images/hsk1v3-bai-13-wb/q6to8_d.jpg'}
            ], answer: 'D' },
            { n: 8, options: [
              {key:'A', img:'/images/hsk1v3-bai-13-wb/q6to8_a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-13-wb/q6to8_b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-13-wb/q6to8_c.jpg'},
              {key:'D', img:'/images/hsk1v3-bai-13-wb/q6to8_d.jpg'}
            ], answer: 'B' },
            { n: 9, options: [
              {key:'A', text:'问问题', py:'wèn wèntí'},
              {key:'B', text:'找人玩', py:'zhǎo rén wán'},
              {key:'C', text:'看医生', py:'kàn yīshēng'}
            ], answer: 'B' },
            { n: 10, options: [
              {key:'A', text:'饭店', py:'fàndiàn'},
              {key:'B', text:'学校', py:'xuéxiào'},
              {key:'C', text:'朋友家', py:'péngyou jiā'}
            ], answer: 'A' }
          ],
          reading: [
            { n: 11, prompt: '她太小了，这个苹果给她一半吧。', promptPy: 'Tā tài xiǎo le, zhège píngguǒ gěi tā yíbàn ba.', options: [
              {key:'A', img:'/images/hsk1v3-bai-13-wb/q11to13_a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-13-wb/q11to13_b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-13-wb/q11to13_c.jpg'},
              {key:'D', img:'/images/hsk1v3-bai-13-wb/q11to13_d.jpg'}
            ], answer: 'B' },
            { n: 12, prompt: '请给我一杯牛奶，谢谢。', promptPy: 'Qǐng gěi wǒ yì bēi niúnǎi, xièxie.', options: [
              {key:'A', img:'/images/hsk1v3-bai-13-wb/q11to13_a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-13-wb/q11to13_b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-13-wb/q11to13_c.jpg'},
              {key:'D', img:'/images/hsk1v3-bai-13-wb/q11to13_d.jpg'}
            ], answer: 'D' },
            { n: 13, prompt: '我打电话问一下吧。', promptPy: 'Wǒ dǎ diànhuà wèn yíxià ba.', options: [
              {key:'A', img:'/images/hsk1v3-bai-13-wb/q11to13_a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-13-wb/q11to13_b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-13-wb/q11to13_c.jpg'},
              {key:'D', img:'/images/hsk1v3-bai-13-wb/q11to13_d.jpg'}
            ], answer: 'C' },
            { n: 14, prompt: '那里卖不卖手机？', promptPy: 'Nàlǐ mài bu mài shǒujī?', options: [
              {key:'A', text:'不客气。', py:'Bú kèqi.'},
              {key:'B', text:'一个面包。', py:'Yí gè miànbāo.'},
              {key:'C', text:'不知道。', py:'Bù zhīdào.'},
              {key:'D', text:'好的，谢谢！', py:'Hǎo de, xièxie!'}
            ], answer: 'C' },
            { n: 15, prompt: '我会写了，谢谢老师。', promptPy: 'Wǒ huì xiě le, xièxie lǎoshī.', options: [
              {key:'A', text:'不客气。', py:'Bú kèqi.'},
              {key:'B', text:'一个面包。', py:'Yí gè miànbāo.'},
              {key:'C', text:'不知道。', py:'Bù zhīdào.'},
              {key:'D', text:'好的，谢谢！', py:'Hǎo de, xièxie!'}
            ], answer: 'A' },
            { n: 16, prompt: '你要什么？', promptPy: 'Nǐ yào shénme?', options: [
              {key:'A', text:'不客气。', py:'Bú kèqi.'},
              {key:'B', text:'一个面包。', py:'Yí gè miànbāo.'},
              {key:'C', text:'不知道。', py:'Bù zhīdào.'},
              {key:'D', text:'好的，谢谢！', py:'Hǎo de, xièxie!'}
            ], answer: 'B' },
            { n: 17, prompt: '你看（　），你要什么？', promptPy: 'Nǐ kàn ( ), nǐ yào shénme?', options: [
              {key:'A', text:'给', py:'gěi'},
              {key:'B', text:'一下', py:'yíxià'},
              {key:'C', text:'名字', py:'míngzi'}
            ], answer: 'B' },
            { n: 18, prompt: '男：请坐，您要什么？\n女：请（　）我一杯茶。', promptPy: 'Qǐng zuò, nín yào shénme? / Qǐng ( ) wǒ yì bēi chá.', options: [
              {key:'A', text:'给', py:'gěi'},
              {key:'B', text:'一下', py:'yíxià'},
              {key:'C', text:'名字', py:'míngzi'}
            ], answer: 'A' },
            { n: 19, prompt: '明天星期天，我们可以去饭店吃饺子吗？\n★明天是：', promptPy: 'Míngtiān Xīngqītiān, wǒmen kěyǐ qù fàndiàn chī jiǎozi ma?', options: [
              {key:'A', text:'星期五', py:'Xīngqīwǔ'},
              {key:'B', text:'星期六', py:'Xīngqīliù'},
              {key:'C', text:'星期日', py:'Xīngqīrì'}
            ], answer: 'C' },
            { n: 20, prompt: '爸爸今天在家里工作，我们不要去他的房间。\n★爸爸今天：', promptPy: 'Bàba jīntiān zài jiā li gōngzuò, wǒmen búyào qù tā de fángjiān.', options: [
              {key:'A', text:'在家里工作', py:'zài jiā li gōngzuò'},
              {key:'B', text:'做了面条儿', py:'zuòle miàntiáor'},
              {key:'C', text:'不能去公司', py:'bù néng qù gōngsī'}
            ], answer: 'A' }
          ]
        }
      ]
    }
  ]
};

var dialogData = [
  {scene:'白家月下课后问王老师问题 · Hỏi thêm một câu',
   preQuiz:[
     {q:'白家月想再问王老师（　）。',opts:['一个问题','两个问题','这个问题'],ans:0},
     {q:'王老师（　）那里卖不卖手机。',opts:['知道','不知道','也想知道'],ans:1},
   ],
   lines:[
     {sp:0,zh:'王老师，我可以再问您一个问题吗？',py:'Wáng lǎoshī, wǒ kěyǐ zài wèn nín yí gè wèntí ma?',vn:'Thưa cô Vương, em có thể hỏi thêm cô một câu nữa không ạ?'},
     {sp:1,zh:'可以。你有什么问题？',py:'Kěyǐ. Nǐ yǒu shénme wèntí?',vn:'Được chứ. Em có vấn đề gì nào?'},
     {sp:0,zh:'那个小店卖不卖手机？',py:'Nàge xiǎo diàn mài bu mài shǒujī?',vn:'Cửa hàng nhỏ kia có bán điện thoại di động không ạ?'},
     {sp:1,zh:'我不知道。你可以打电话问一下。',py:'Wǒ bù zhīdào. Nǐ kěyǐ dǎ diànhuà wèn yíxià.',vn:'Cô không biết. Em có thể gọi điện thoại hỏi xem.'},
   ]},
  {scene:'王一雪在咖啡馆里点早餐 · Gọi đồ uống',
   preQuiz:[
     {q:'王一雪要喝（　）。',opts:['水','茶','牛奶'],ans:2},
     {q:'王一雪还想吃（　）。',opts:['包子','面条儿','面包和鸡蛋'],ans:2},
   ],
   lines:[
     {sp:0,zh:'女士，请坐！您喝什么？',py:'Nǚshì, qǐng zuò! Nín hē shénme?',vn:'Mời cô ngồi! Cô uống gì ạ?'},
     {sp:1,zh:'我看一下。请给我一杯牛奶。',py:'Wǒ kàn yíxià. Qǐng gěi wǒ yì bēi niúnǎi.',vn:'Để tôi xem một chút. Cho tôi một cốc sữa.'},
     {sp:0,zh:'好的。您还要什么？',py:'Hǎo de. Nín hái yào shénme?',vn:'Vâng. Cô còn dùng thêm gì nữa không?'},
     {sp:1,zh:'我还没吃早饭，再要这个面包和鸡蛋吧。',py:'Wǒ hái méi chī zǎofàn, zài yào zhège miànbāo hé jīdàn ba.',vn:'Tôi vẫn chưa ăn sáng, cho tôi cái bánh mì này và trứng nhé.'},
   ]},
  {scene:'刘明在餐馆点餐 · Gọi sủi cảo',
   preQuiz:[
     {q:'刘明想吃（　）。',opts:['米饭','饺子','米饭和饺子'],ans:1},
     {q:'刘明想喝（　）。',opts:['水','茶','牛奶'],ans:1},
   ],
   lines:[
     {sp:0,zh:'先生，请坐！您要什么？',py:'Xiānsheng, qǐng zuò! Nín yào shénme?',vn:'Mời anh ngồi! Anh cần gì ạ?'},
     {sp:1,zh:'我要一斤饺子。',py:'Wǒ yào yì jīn jiǎozi.',vn:'Cho tôi một cân sủi cảo.'},
     {sp:0,zh:'好的。一斤饺子四十个。',py:'Hǎo de. Yì jīn jiǎozi sìshí gè.',vn:'Vâng ạ. Một cân sủi cảo có 40 cái.'},
     {sp:1,zh:'四十个太多了，我要一半吧。',py:'Sìshí gè tài duō le, wǒ yào yíbàn ba.',vn:'40 cái thì nhiều quá, tôi lấy nửa cân thôi nhé.'},
     {sp:0,zh:'半斤20个。您想喝什么？',py:'Bàn jīn èrshí gè. Nín xiǎng hē shénme?',vn:'Nửa cân là 20 cái. Anh muốn uống gì không ạ?'},
     {sp:1,zh:'请给我一杯茶吧。',py:'Qǐng gěi wǒ yì bēi chá ba.',vn:'Cho tôi một cốc trà nhé.'},
   ]},
];

// ══════════════════════════════════════════
// PHẦN 1 · GHÉP TỪ (Collocation)
// ══════════════════════════════════════════
var matchData = [
  {left:'问', right:'题'},
  {left:'打电', right:'话'},
  {left:'服务', right:'员'},
  {left:'早', right:'饭'},
  {left:'面', right:'包'},
  {left:'鸡', right:'蛋'},
];

// ══════════════════════════════════════════
// PHẦN 2 · NGHE — để trống, chờ tài liệu gốc giáo trình HSK1 3.0
// ══════════════════════════════════════════
var listenData = [];

// ══════════════════════════════════════════
// PHẦN 3a · ĐIỀN TỪ
// ══════════════════════════════════════════
var fillData = [
  {pre:'王老师，我', blank:'可以再问您', post:'一个问题吗？', hint:'(có thể hỏi thêm)', ans:'可以再问您'},
  {pre:'那个小店', blank:'卖不卖', post:'手机？', hint:'(có bán không)', ans:'卖不卖'},
  {pre:'你可以打电话', blank:'问一下', post:'。', hint:'(hỏi thử)', ans:'问一下'},
  {pre:'请', blank:'给我一杯', post:'牛奶。', hint:'(cho tôi một cốc)', ans:'给我一杯'},
  {pre:'我还没吃早饭，', blank:'再要这个面包和鸡蛋', post:'吧。', hint:'(lấy thêm bánh mì và trứng)', ans:'再要这个面包和鸡蛋'},
  {pre:'我要一斤', blank:'饺子', post:'。', hint:'(sủi cảo)', ans:'饺子'},
  {pre:'四十个太多了，我要', blank:'一半', post:'吧。', hint:'(một nửa)', ans:'一半'},
  {pre:'请给我一杯', blank:'茶', post:'吧。', hint:'(trà)', ans:'茶'},
];

// ══════════════════════════════════════════
// PHẦN 3b · SẮP XẾP
// ══════════════════════════════════════════
var sortData = [
  {words:['我','可以','再','问','您','一个','问题','吗','？'], ans:'我可以再问您一个问题吗？', audio:'我可以再问您一个问题吗？'},
  {words:['那个','小店','卖','不','卖','手机','？'], ans:'那个小店卖不卖手机？', audio:'那个小店卖不卖手机？'},
  {words:['请','给','我','一杯','牛奶','。'], ans:'请给我一杯牛奶。', audio:'请给我一杯牛奶。'},
  {words:['我','还','没','吃','早饭','。'], ans:'我还没吃早饭。', audio:'我还没吃早饭。'},
  {words:['我','要','一斤','饺子','。'], ans:'我要一斤饺子。', audio:'我要一斤饺子。'},
  {words:['请','给','我','一杯','茶','吧','。'], ans:'请给我一杯茶吧。', audio:'请给我一杯茶吧。'},
];

// ══════════════════════════════════════════
// PHẦN 3c · TRẮC NGHIỆM
// ══════════════════════════════════════════
var mcData = [
  {q:'"我可以再问您一个问题吗？" nghĩa là gì?', opts:['Em có thể hỏi thêm cô một câu nữa không ạ?', 'Em không hiểu câu hỏi này.', 'Cô có câu hỏi gì cho em không?', 'Em đã hỏi xong rồi.'], ans:0},
  {q:'Động từ năng nguyện "可以" biểu thị điều gì?', opts:['khả năng, năng lực hoặc sự cho phép', 'mong muốn, dự định', 'mệnh lệnh, bắt buộc', 'phủ định'], ans:0},
  {q:'"你可以打电话问一下。" — "一下" trong câu này biểu thị điều gì?', opts:['hành động thử làm/xảy ra trong thời gian ngắn', 'hành động lặp lại nhiều lần', 'hành động đã hoàn thành', 'hành động phủ định'], ans:0},
  {q:'"请给我一杯牛奶。" nghĩa là gì?', opts:['Cho tôi một cốc sữa.', 'Cho tôi một cốc trà.', 'Cho tôi một cốc nước.', 'Tôi không muốn uống sữa.'], ans:0},
  {q:'Câu "白家月给安妮一个苹果。" có mấy tân ngữ?', opts:['hai tân ngữ (安妮 và 苹果)', 'một tân ngữ', 'không có tân ngữ', 'ba tân ngữ'], ans:0},
  {q:'"四十个太多了，我要一半吧。" nghĩa là gì?', opts:['40 cái nhiều quá, tôi lấy một nửa thôi.', '40 cái vừa đủ, tôi lấy hết.', 'Tôi muốn thêm 40 cái nữa.', 'Tôi không muốn ăn cái nào.'], ans:0},
  {q:'"请给我一杯茶吧。" nghĩa là gì?', opts:['Cho tôi một cốc trà nhé.', 'Tôi không uống trà.', 'Trà này có ngon không?', 'Cho tôi xem thực đơn.'], ans:0},
  {q:'Câu có hai tân ngữ trong bài này được tạo bởi động từ nào?', opts:['给 và 问', '是 và 有', '去 và 来', '在 và 要'], ans:0},
];

// ══════════════════════════════════════════
// PHẦN 4 · LUYỆN NÓI
// ══════════════════════════════════════════
var speakingData = {
  intro: 'Nhấn nút loa nghe câu hỏi/tình huống, rồi tự ghi âm câu trả lời của bạn dựa theo nội dung 3 bài khoá.',
  questions: [
    {q_zh: '服务员问你："您喝什么？" 你怎么回答？', q_vn: 'Nhân viên phục vụ hỏi bạn: "Cô/anh uống gì ạ?" Bạn trả lời thế nào?',
     hint: '请给我一杯……', sample: '请给我一杯茶。', sample_vn: 'Cho tôi một cốc trà.',
     note: 'Cấu trúc câu hai tân ngữ với "给": 给 + người + vật.'},
    {q_zh: '你想向老师多问一个问题，你怎么说？', q_vn: 'Bạn muốn hỏi thêm cô giáo một câu, bạn nói thế nào?',
     hint: '我可以再问您……吗？', sample: '我可以再问您一个问题吗？', sample_vn: 'Em có thể hỏi thêm cô một câu nữa không ạ?',
     note: 'Động từ năng nguyện "可以" đặt trước động từ để xin phép.'},
    {q_zh: '有人问你："这个商店卖不卖手机？" 你不知道，你怎么回答？', q_vn: 'Có người hỏi bạn: "Cửa hàng này có bán điện thoại không?" Bạn không biết, bạn trả lời thế nào?',
     hint: '我不知道，你可以……一下。', sample: '我不知道，你可以打电话问一下。', sample_vn: 'Tôi không biết, bạn có thể gọi điện thoại hỏi thử.',
     note: 'Cấu trúc "động từ + 一下" dùng khi đề nghị ai đó thử làm việc gì.'},
  ],
};

// ══════════════════════════════════════════
// LUYỆN DỊCH (Việt → Trung)
// ══════════════════════════════════════════
var translateData = [
  {vi:'Em có thể hỏi thêm cô một câu nữa không ạ?', zh:'我可以再问您一个问题吗？', py:'Wǒ kěyǐ zài wèn nín yí gè wèntí ma?'},
  {vi:'Cửa hàng nhỏ kia có bán điện thoại di động không ạ?', zh:'那个小店卖不卖手机？', py:'Nàge xiǎo diàn mài bu mài shǒujī?'},
  {vi:'Cho tôi một cốc sữa.', zh:'请给我一杯牛奶。', py:'Qǐng gěi wǒ yì bēi niúnǎi.'},
  {vi:'40 cái thì nhiều quá, tôi lấy nửa cân thôi nhé.', zh:'四十个太多了，我要一半吧。', py:'Sìshí gè tài duō le, wǒ yào yíbàn ba.'},
];

// ══════════════════════════════════════════
// LUYỆN DỊCH (Trung → Việt) — nội dung KHÁC với chiều Việt→Trung ở trên
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:'Cô có thể gọi điện thoại hỏi thử.', zh:'您可以打电话问一下。', py:'Nín kěyǐ dǎ diànhuà wèn yíxià.'},
  {vi:'Cô còn dùng thêm gì nữa không?', zh:'您还要什么？', py:'Nín hái yào shénme?'},
  {vi:'Tôi vẫn chưa ăn sáng.', zh:'我还没吃早饭。', py:'Wǒ hái méi chī zǎofàn.'},
  {vi:'Anh muốn uống gì không ạ?', zh:'您想喝什么？', py:'Nín xiǎng hē shénme?'},
];
