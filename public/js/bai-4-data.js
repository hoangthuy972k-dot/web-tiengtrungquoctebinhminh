// ══════════════════════════════════════════
// DATA — Bài 4: 这个工作是他帮我介绍的
// ══════════════════════════════════════════
var vocabData = [
  {
    "n": 1,
    "zh": "生日",
    "py": "shēngrì",
    "pos": "Danh từ",
    "vn": "sinh nhật",
    "hv": "sinh nhật",
    "em": "🎂",
    "lesson": 1,
    "ex_zh": "生日快乐！",
    "ex_py": "Shēngrì kuàilè!",
    "ex_vn": "Chúc mừng sinh nhật!",
    "exList": [
      {
        "zh": "生日快乐！",
        "py": "Shēngrì kuàilè!",
        "vn": "Chúc mừng sinh nhật!"
      },
      {
        "zh": "你的生日是几月几号？",
        "py": "Nǐ de shēngrì shì jǐ yuè jǐ hào?",
        "vn": "Sinh nhật bạn là ngày mấy tháng mấy?"
      },
      {
        "zh": "今天是我女儿的生日。",
        "py": "Jīntiān shì wǒ nǚ'ér de shēngrì.",
        "vn": "Hôm nay là sinh nhật con gái tôi."
      }
    ],
    "hanzi": [
      {
        "c": "生",
        "p": "shēng",
        "type": "独体字 · Chữ đơn",
        "st": 5,
        "ord": "丿→一→一→丨→一",
        "rad": "生 (sinh)",
        "mean": "sinh ra, sống",
        "tip": "Hình mầm cây mọc trên đất → \"sinh ra\". 生 + 日 = ngày sinh ra = SINH NHẬT.",
        "cf": "牛 (niú)",
        "w": "生日 / 学生 / 生病"
      },
      {
        "c": "日",
        "p": "rì",
        "type": "独体字 · Tượng hình",
        "st": 4,
        "ord": "丨→フ→一→一",
        "rad": "日 (nhật – mặt trời)",
        "mean": "ngày, mặt trời",
        "tip": "Hình vuông có chấm ở giữa mô phỏng mặt trời → \"ngày, mặt trời\".",
        "cf": "目 (mù – \"mắt\", dài hơn)",
        "w": "生日 / 今天 / 日子"
      }
    ],
    "colloFull": [
      {
        "zh": "过生日",
        "py": "guo shēngrì",
        "vn": "mừng sinh nhật"
      },
      {
        "zh": "生日快乐",
        "py": "shēngrì kuàilè",
        "vn": "chúc mừng sinh nhật"
      },
      {
        "zh": "生日的时候",
        "py": "shēngrì de shíhou",
        "vn": "dịp sinh nhật"
      },
      {
        "zh": "我的生日",
        "py": "wǒ de shēngrì",
        "vn": "sinh nhật của tôi"
      }
    ],
    "patterns": [
      {
        "s": "过 + 生日",
        "m": "Mừng sinh nhật — dùng động từ 过"
      },
      {
        "s": "生日快乐！là câu chúc quen thuộc nhất"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Sinh nhật bạn là ngày mấy tháng mấy?",
        "answer": "你的生日是几月几号？",
        "answerPy": "Nǐ de shēngrì shì jǐ yuè jǐ hào?",
        "note": "Câu đã có 几 thì không thêm 吗.",
        "pair": "几月几号？"
      },
      {
        "promptLang": "vi",
        "prompt": "Hôm nay là sinh nhật con gái tôi.",
        "answer": "今天是我女儿的生日。",
        "answerPy": "Jīntiān shì wǒ nǚ'ér de shēngrì.",
        "note": "……的生日 — sinh nhật của ai.",
        "pair": "是……的"
      }
    ]
  },
  {
    "n": 2,
    "zh": "快乐",
    "py": "kuàilè",
    "pos": "Tính từ",
    "vn": "vui vẻ, hạnh phúc",
    "hv": "khoái lạc",
    "em": "😄",
    "lesson": 1,
    "ex_zh": "祝你天天快乐。",
    "ex_py": "Zhù nǐ tiāntiān kuàilè.",
    "ex_vn": "Chúc bạn ngày nào cũng vui vẻ.",
    "exList": [
      {
        "zh": "祝你天天快乐。",
        "py": "Zhù nǐ tiāntiān kuàilè.",
        "vn": "Chúc bạn ngày nào cũng vui vẻ."
      },
      {
        "zh": "她今天很快乐。",
        "py": "Tā jīntiān hěn kuàilè.",
        "vn": "Hôm nay cô ấy rất vui."
      },
      {
        "zh": "新年快乐！",
        "py": "Xīnnián kuàilè!",
        "vn": "Chúc mừng năm mới!"
      }
    ],
    "hanzi": [
      {
        "c": "快",
        "p": "kuài",
        "type": "左右结构 · Trái-phải",
        "st": 7,
        "ord": "忄(tâm) trái → 夬 (quyết) phải",
        "rad": "忄(tâm – trái tim)",
        "mean": "nhanh; vui",
        "tip": "Bộ 忄(tim) → cảm giác trong lòng nhẹ nhõm, nhanh chóng = VUI, NHANH.",
        "cf": "块 (kuài – bộ 土, đã học ở Bài 3)",
        "w": "快乐 / 很快 / 快来"
      },
      {
        "c": "乐",
        "p": "lè / yuè",
        "type": "独体字 · Chữ đơn",
        "st": 5,
        "ord": "丿→𠃌→丨→乛→乙",
        "rad": "丿",
        "mean": "vui (lè); âm nhạc (yuè)",
        "tip": "Hình chiếc trống có dùi gõ cách điệu → thời xưa nghe nhạc là niềm VUI.",
        "cf": "东 (dōng – \"phía đông\")",
        "w": "快乐 / 音乐 / 乐意"
      }
    ],
    "colloFull": [
      {
        "zh": "生日快乐",
        "py": "shēngrì kuàilè",
        "vn": "sinh nhật vui vẻ"
      },
      {
        "zh": "很快乐",
        "py": "hěn kuàilè",
        "vn": "rất vui"
      },
      {
        "zh": "快乐的一天",
        "py": "kuàilè de yì tiān",
        "vn": "một ngày vui vẻ"
      },
      {
        "zh": "不快乐",
        "py": "bú kuàilè",
        "vn": "không vui"
      }
    ],
    "patterns": [
      {
        "s": "生日快乐！",
        "m": "Chúc mừng sinh nhật — câu chúc quen thuộc nhất"
      },
      {
        "s": "快乐 (vui, hạnh phúc) và 高兴 (vui trong lúc này)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Sinh nhật vui vẻ! Đây là cái đồng hồ tôi tặng bạn.",
        "answer": "生日快乐！这是我送你的手表。",
        "answerPy": "Shēngrì kuàilè! Zhè shì wǒ sòng nǐ de shǒubiǎo.",
        "note": "生日快乐 là câu chúc quen thuộc nhất.",
        "pair": "送 + người + N"
      },
      {
        "promptLang": "vi",
        "prompt": "Hôm nay tôi rất vui.",
        "answer": "今天我很快乐。",
        "answerPy": "Jīntiān wǒ hěn kuàilè.",
        "note": "Tính từ làm vị ngữ cần có 很.",
        "pair": "很 + Adj"
      }
    ]
  },
  {
    "n": 3,
    "zh": "给",
    "py": "gěi",
    "pos": "Giới từ / Động từ",
    "vn": "cho, tặng",
    "hv": "cấp",
    "em": "🎁",
    "lesson": 1,
    "ex_zh": "这是送给你的。",
    "ex_py": "Zhè shì sòng gěi nǐ de.",
    "ex_vn": "Đây là quà tặng bạn.",
    "exList": [
      {
        "zh": "这是送给你的。",
        "py": "Zhè shì sòng gěi nǐ de.",
        "vn": "Đây là quà tặng bạn."
      },
      {
        "zh": "请把这本书给我。",
        "py": "Qǐng bǎ zhè běn shū gěi wǒ.",
        "vn": "Làm ơn đưa quyển sách này cho tôi."
      },
      {
        "zh": "妈妈给我买了一块手表。",
        "py": "Māma gěi wǒ mǎile yí kuài shǒubiǎo.",
        "vn": "Mẹ mua cho tôi một chiếc đồng hồ."
      }
    ],
    "hanzi": [
      {
        "c": "给",
        "p": "gěi",
        "type": "左右结构 · Trái-phải",
        "st": 9,
        "ord": "纟(mịch) trái → 合 (hợp) phải",
        "rad": "纟(mịch – tơ, sợi)",
        "mean": "cho, tặng",
        "tip": "Bộ 纟(tơ lụa) — xưa tặng nhau tơ lụa quý giá, sau mở rộng nghĩa \"CHO, TẶNG\" nói chung.",
        "cf": "合 (hé – \"hợp\", thiếu bộ 纟)",
        "w": "给你 / 送给 / 给我"
      }
    ],
    "colloFull": [
      {
        "zh": "给我",
        "py": "gěi wǒ",
        "vn": "cho tôi"
      },
      {
        "zh": "给他打电话",
        "py": "gěi tā dǎ diànhuà",
        "vn": "gọi điện cho anh ấy"
      },
      {
        "zh": "给你介绍",
        "py": "gěi nǐ jièshào",
        "vn": "giới thiệu cho bạn"
      },
      {
        "zh": "给妈妈买",
        "py": "gěi māma mǎi",
        "vn": "mua cho mẹ"
      }
    ],
    "patterns": [
      {
        "s": "给 + người + động từ",
        "m": "Làm gì cho ai — 给 đứng TRƯỚC động từ"
      },
      {
        "s": "✗ 打电话给我 → ✓ 给我打电话"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tối nay tôi gọi điện cho bạn.",
        "answer": "今天晚上我给你打电话。",
        "answerPy": "Jīntiān wǎnshang wǒ gěi nǐ dǎ diànhuà.",
        "note": "给 đứng TRƯỚC động từ, không đứng sau.",
        "pair": "给 + người + V"
      },
      {
        "promptLang": "vi",
        "prompt": "Mẹ mua cho tôi một cái đồng hồ mới.",
        "answer": "妈妈给我买了一个新手表。",
        "answerPy": "Māma gěi wǒ mǎile yí ge xīn shǒubiǎo.",
        "note": "给我买 — mua cho tôi.",
        "pair": "给……买"
      }
    ]
  },
  {
    "n": 4,
    "zh": "接",
    "py": "jiē",
    "pos": "Động từ",
    "vn": "nhận, đón, nghe máy",
    "hv": "tiếp",
    "em": "📞",
    "lesson": 2,
    "ex_zh": "电话是儿子接的。",
    "ex_py": "Diànhuà shì érzi jiē de.",
    "ex_vn": "Điện thoại là con trai nghe máy.",
    "exList": [
      {
        "zh": "电话是儿子接的。",
        "py": "Diànhuà shì érzi jiē de.",
        "vn": "Điện thoại là con trai nghe máy."
      },
      {
        "zh": "我去机场接你。",
        "py": "Wǒ qù jīchǎng jiē nǐ.",
        "vn": "Tôi đi ra sân bay đón bạn."
      },
      {
        "zh": "请接一下电话。",
        "py": "Qǐng jiē yíxià diànhuà.",
        "vn": "Làm ơn nghe điện thoại một chút."
      }
    ],
    "hanzi": [
      {
        "c": "接",
        "p": "jiē",
        "type": "左右结构 · Trái-phải",
        "st": 11,
        "ord": "扌(thủ) trái → 妾 (thiếp) phải",
        "rad": "扌(thủ – tay)",
        "mean": "nhận, đón, tiếp",
        "tip": "Bộ 扌(tay) → dùng tay đưa ra ĐÓN NHẬN người/vật/cuộc gọi.",
        "cf": "椄 (jiē – \"ghép cây\", bộ 木)",
        "w": "接电话 / 接人 / 迎接"
      }
    ],
    "colloFull": [
      {
        "zh": "接你",
        "py": "jiē nǐ",
        "vn": "đón bạn"
      },
      {
        "zh": "去学校接",
        "py": "qù xuéxiào jiē",
        "vn": "đến trường đón"
      },
      {
        "zh": "接电话",
        "py": "jiē diànhuà",
        "vn": "nghe điện thoại"
      },
      {
        "zh": "来接我",
        "py": "lái jiē wǒ",
        "vn": "đến đón tôi"
      }
    ],
    "patterns": [
      {
        "s": "接 + người",
        "m": "Đón ai: 我去接你"
      },
      {
        "s": "接 + 电话",
        "m": "Nghe điện thoại — cũng dùng 接"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Chiều mai tôi đến trường đón bạn.",
        "answer": "明天下午我去学校接你。",
        "answerPy": "Míngtiān xiàwǔ wǒ qù xuéxiào jiē nǐ.",
        "note": "Thời gian đứng đầu câu, nơi chốn đứng trước động từ.",
        "pair": "去 + nơi chốn + V"
      },
      {
        "promptLang": "vi",
        "prompt": "Ai đến đón bạn?",
        "answer": "谁来接你？",
        "answerPy": "Shéi lái jiē nǐ?",
        "note": "Câu đã có 谁 thì không thêm 吗.",
        "pair": "谁 + V？"
      }
    ]
  },
  {
    "n": 5,
    "zh": "晚上",
    "py": "wǎnshang",
    "pos": "Danh từ",
    "vn": "buổi tối",
    "hv": "vãn thượng",
    "em": "🌙",
    "lesson": 2,
    "ex_zh": "晚上我问一下儿子。",
    "ex_py": "Wǎnshang wǒ wèn yíxià érzi.",
    "ex_vn": "Tối nay tôi sẽ hỏi con trai một chút.",
    "exList": [
      {
        "zh": "晚上我问一下儿子。",
        "py": "Wǎnshang wǒ wèn yíxià érzi.",
        "vn": "Tối nay tôi sẽ hỏi con trai một chút."
      },
      {
        "zh": "晚上你想吃什么？",
        "py": "Wǎnshang nǐ xiǎng chī shénme?",
        "vn": "Tối nay bạn muốn ăn gì?"
      },
      {
        "zh": "他晚上很累。",
        "py": "Tā wǎnshang hěn lèi.",
        "vn": "Buổi tối anh ấy rất mệt."
      }
    ],
    "hanzi": [
      {
        "c": "晚",
        "p": "wǎn",
        "type": "左右结构 · Trái-phải",
        "st": 11,
        "ord": "日 (nhật) trái → 免 (miễn) phải",
        "rad": "日 (nhật – mặt trời)",
        "mean": "muộn, tối",
        "tip": "Bộ 日 (mặt trời) đã lặn muộn → chỉ thời gian buổi TỐI, MUỘN.",
        "cf": "免 (miǎn – \"miễn trừ\", thiếu bộ 日)",
        "w": "晚上 / 晚饭 / 太晚了"
      },
      {
        "c": "上",
        "p": "shàng",
        "type": "独体字 · Chữ đơn",
        "st": 3,
        "ord": "一→丨→一",
        "rad": "一 (nhất)",
        "mean": "trên, lên",
        "tip": "Đã học ở Bài 3 (早上) — nét ngắn phía trên nét ngang dài = hướng lên trên.",
        "cf": "下 (xià)",
        "w": "晚上 / 早上 / 上班"
      }
    ],
    "colloFull": [
      {
        "zh": "今天晚上",
        "py": "jīntiān wǎnshang",
        "vn": "tối nay"
      },
      {
        "zh": "明天晚上",
        "py": "míngtiān wǎnshang",
        "vn": "tối mai"
      },
      {
        "zh": "晚上八点",
        "py": "wǎnshang bā diǎn",
        "vn": "tám giờ tối"
      },
      {
        "zh": "晚上见",
        "py": "wǎnshang jiàn",
        "vn": "tối gặp"
      }
    ],
    "patterns": [
      {
        "s": "ngày + 晚上",
        "m": "Buổi tối của ngày nào: 今天晚上"
      },
      {
        "s": "早上 · 中午 · 晚上 — các buổi trong ngày"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tám giờ tối nay chúng ta cùng đi ăn cơm.",
        "answer": "今天晚上八点我们一起去吃饭。",
        "answerPy": "Jīntiān wǎnshang bā diǎn wǒmen yìqǐ qù chīfàn.",
        "note": "Thứ tự: ngày → buổi → giờ.",
        "pair": "一起 + V"
      },
      {
        "promptLang": "vi",
        "prompt": "Tối mai bạn có thời gian không?",
        "answer": "明天晚上你有时间吗？",
        "answerPy": "Míngtiān wǎnshang nǐ yǒu shíjiān ma?",
        "note": "有时间 — có thời gian, rảnh.",
        "pair": "……吗？"
      }
    ]
  },
  {
    "n": 6,
    "zh": "问",
    "py": "wèn",
    "pos": "Động từ",
    "vn": "hỏi",
    "hv": "vấn",
    "em": "❔",
    "lesson": 2,
    "ex_zh": "晚上我问一下儿子。",
    "ex_py": "Wǎnshang wǒ wèn yíxià érzi.",
    "ex_vn": "Tối nay tôi sẽ hỏi con trai một chút.",
    "exList": [
      {
        "zh": "晚上我问一下儿子。",
        "py": "Wǎnshang wǒ wèn yíxià érzi.",
        "vn": "Tối nay tôi sẽ hỏi con trai một chút."
      },
      {
        "zh": "我想问老师一个问题。",
        "py": "Wǒ xiǎng wèn lǎoshī yí ge wèntí.",
        "vn": "Tôi muốn hỏi thầy giáo một câu hỏi."
      },
      {
        "zh": "你问他了吗？",
        "py": "Nǐ wènle tā ma?",
        "vn": "Bạn hỏi anh ấy chưa?"
      }
    ],
    "hanzi": [
      {
        "c": "问",
        "p": "wèn",
        "type": "半包围 · Bán bao (门)",
        "st": 6,
        "ord": "门 (môn) bao ngoài → 口 (khẩu) bên trong",
        "rad": "门 (môn – cửa)",
        "mean": "hỏi",
        "tip": "Miệng 口 đứng ở cửa 门 cất tiếng gọi/HỎI vào trong.",
        "cf": "间 (jiān – thay 口 bằng 日, đã học ở Bài 2)",
        "w": "问一下 / 问题 / 请问"
      }
    ],
    "colloFull": [
      {
        "zh": "问老师",
        "py": "wèn lǎoshī",
        "vn": "hỏi thầy"
      },
      {
        "zh": "问什么",
        "py": "wèn shénme",
        "vn": "hỏi gì"
      },
      {
        "zh": "请问",
        "py": "qǐngwèn",
        "vn": "xin hỏi"
      },
      {
        "zh": "问一下",
        "py": "wèn yíxià",
        "vn": "hỏi một chút"
      }
    ],
    "patterns": [
      {
        "s": "问 + người",
        "m": "Hỏi ai: 问老师"
      },
      {
        "s": "问 (hỏi) ≠ 说 (nói) — 问 luôn chờ câu trả lời"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tôi muốn hỏi thầy một chút.",
        "answer": "我想问一下老师。",
        "answerPy": "Wǒ xiǎng wèn yíxià lǎoshī.",
        "note": "问一下 — hỏi một chút, nghe nhẹ nhàng hơn.",
        "pair": "想 + V"
      },
      {
        "promptLang": "vi",
        "prompt": "Xin hỏi, bệnh viện ở đâu?",
        "answer": "请问，医院在哪儿？",
        "answerPy": "Qǐngwèn, yīyuàn zài nǎr?",
        "note": "请问 mở đầu khi hỏi người lạ.",
        "pair": "在哪儿？"
      }
    ]
  },
  {
    "n": 7,
    "zh": "非常",
    "py": "fēicháng",
    "pos": "Phó từ",
    "vn": "vô cùng, cực kỳ",
    "hv": "phi thường",
    "em": "❗",
    "lesson": 3,
    "ex_zh": "非常喜欢。",
    "ex_py": "Fēicháng xǐhuan.",
    "ex_vn": "Cực kỳ thích luôn.",
    "exList": [
      {
        "zh": "非常喜欢。",
        "py": "Fēicháng xǐhuan.",
        "vn": "Cực kỳ thích luôn."
      },
      {
        "zh": "这件衣服非常漂亮。",
        "py": "Zhè jiàn yīfu fēicháng piàoliang.",
        "vn": "Chiếc áo này cực kỳ đẹp."
      },
      {
        "zh": "今天非常冷。",
        "py": "Jīntiān fēicháng lěng.",
        "vn": "Hôm nay lạnh cực kỳ."
      }
    ],
    "hanzi": [
      {
        "c": "非",
        "p": "fēi",
        "type": "独体字 · Chữ đơn",
        "st": 8,
        "ord": "丿→丨→一→一→丨→一→一",
        "rad": "非 (phi – tự thành bộ)",
        "mean": "không, phi",
        "tip": "Hình hai cánh chim xoè ngược chiều nhau → biểu thị sự \"trái ngược, không phải\".",
        "cf": "排 (pái – \"xếp hàng\", thêm bộ 扌)",
        "w": "非常 / 非要"
      },
      {
        "c": "常",
        "p": "cháng",
        "type": "上下结构 · Trên-dưới",
        "st": 11,
        "ord": "⺌ → 冖 → 巾",
        "rad": "巾 (cân – khăn)",
        "mean": "thường xuyên",
        "tip": "非 + 常 = mức độ vượt ra ngoài cái \"thường\" = VÔ CÙNG.",
        "cf": "尝 (cháng – \"nếm\", phần dưới khác)",
        "w": "非常 / 经常 / 常常"
      }
    ],
    "colloFull": [
      {
        "zh": "非常好",
        "py": "fēicháng hǎo",
        "vn": "rất tốt"
      },
      {
        "zh": "非常快乐",
        "py": "fēicháng kuàilè",
        "vn": "cực kỳ vui"
      },
      {
        "zh": "非常忙",
        "py": "fēicháng máng",
        "vn": "cực kỳ bận"
      },
      {
        "zh": "非常喜欢",
        "py": "fēicháng xǐhuan",
        "vn": "cực kỳ thích"
      }
    ],
    "patterns": [
      {
        "s": "非常 + tính từ / động từ",
        "m": "Mức độ cao hơn 很: 非常快乐"
      },
      {
        "s": "很 < 非常 < 最 — ba mức từ thấp lên cao"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Hôm nay tôi cực kỳ bận, không có thời gian.",
        "answer": "今天我非常忙，没有时间。",
        "answerPy": "Jīntiān wǒ fēicháng máng, méiyǒu shíjiān.",
        "note": "非常 mạnh hơn 很.",
        "pair": "非常 + Adj"
      },
      {
        "promptLang": "vi",
        "prompt": "Căn phòng này cực kỳ đẹp.",
        "answer": "这个房间非常漂亮。",
        "answerPy": "Zhège fángjiān fēicháng piàoliang.",
        "note": "Đã có 非常 thì không thêm 很.",
        "pair": "非常 + Adj"
      }
    ]
  },
  {
    "n": 8,
    "zh": "开始",
    "py": "kāishǐ",
    "pos": "Động từ",
    "vn": "bắt đầu",
    "hv": "khai thủy",
    "em": "🚦",
    "lesson": 3,
    "ex_zh": "你是什么时候开始踢足球的？",
    "ex_py": "Nǐ shì shénme shíhou kāishǐ tī zúqiú de?",
    "ex_vn": "Bạn bắt đầu đá bóng từ khi nào thế?",
    "exList": [
      {
        "zh": "你是什么时候开始踢足球的？",
        "py": "Nǐ shì shénme shíhou kāishǐ tī zúqiú de?",
        "vn": "Bạn bắt đầu đá bóng từ khi nào thế?"
      },
      {
        "zh": "电影已经开始了。",
        "py": "Diànyǐng yǐjīng kāishǐ le.",
        "vn": "Phim đã bắt đầu rồi."
      },
      {
        "zh": "我们几点开始上课？",
        "py": "Wǒmen jǐ diǎn kāishǐ shàngkè?",
        "vn": "Mấy giờ chúng ta bắt đầu học?"
      }
    ],
    "hanzi": [
      {
        "c": "开",
        "p": "kāi",
        "type": "独体字 · Chữ đơn",
        "st": 4,
        "ord": "一→丨→一→丨",
        "rad": "廾 (củng)",
        "mean": "mở, bắt đầu",
        "tip": "Hình then cài cửa được kéo mở ra → \"MỞ, khởi đầu\".",
        "cf": "关 (guān – \"đóng\", trái nghĩa)",
        "w": "开始 / 开门 / 打开"
      },
      {
        "c": "始",
        "p": "shǐ",
        "type": "左右结构 · Trái-phải",
        "st": 8,
        "ord": "女 (nữ) trái → 台 (đài) phải",
        "rad": "女 (nữ – phụ nữ)",
        "mean": "bắt đầu",
        "tip": "开 (mở ra) + 始 (khởi thủy) = mở ra điểm khởi đầu = BẮT ĐẦU.",
        "cf": "治 (zhì – \"trị\", bộ 氵)",
        "w": "开始 / 始终"
      }
    ],
    "colloFull": [
      {
        "zh": "开始上课",
        "py": "kāishǐ shàngkè",
        "vn": "bắt đầu vào học"
      },
      {
        "zh": "几点开始",
        "py": "jǐ diǎn kāishǐ",
        "vn": "mấy giờ bắt đầu"
      },
      {
        "zh": "开始了",
        "py": "kāishǐ le",
        "vn": "bắt đầu rồi"
      },
      {
        "zh": "开始学习",
        "py": "kāishǐ xuéxí",
        "vn": "bắt đầu học"
      }
    ],
    "patterns": [
      {
        "s": "开始 + động từ",
        "m": "Bắt đầu làm gì: 开始上课"
      },
      {
        "s": "thời gian + 开始",
        "m": "Bắt đầu từ lúc nào: 八点开始"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Mấy giờ bắt đầu học?",
        "answer": "几点开始上课？",
        "answerPy": "Jǐ diǎn kāishǐ shàngkè?",
        "note": "开始 + động từ — bắt đầu làm gì.",
        "pair": "几点……？"
      },
      {
        "promptLang": "vi",
        "prompt": "Tôi bắt đầu học tiếng Trung rồi.",
        "answer": "我开始学习汉语了。",
        "answerPy": "Wǒ kāishǐ xuéxí Hànyǔ le.",
        "note": "了 cuối câu báo tình hình đã đổi.",
        "pair": "……了"
      }
    ]
  },
  {
    "n": 9,
    "zh": "已经",
    "py": "yǐjīng",
    "pos": "Phó từ",
    "vn": "đã",
    "hv": "dĩ kinh",
    "em": "✅",
    "lesson": 4,
    "ex_zh": "已经两年多了。",
    "ex_py": "Yǐjīng liǎng nián duō le.",
    "ex_vn": "Đã hơn hai năm rồi.",
    "exList": [
      {
        "zh": "已经两年多了。",
        "py": "Yǐjīng liǎng nián duō le.",
        "vn": "Đã hơn hai năm rồi."
      },
      {
        "zh": "王老师已经回家了。",
        "py": "Wáng lǎoshī yǐjīng huí jiā le.",
        "vn": "Thầy Vương đã về nhà rồi."
      },
      {
        "zh": "我已经吃饭了。",
        "py": "Wǒ yǐjīng chī fàn le.",
        "vn": "Tôi đã ăn cơm rồi."
      }
    ],
    "hanzi": [
      {
        "c": "已",
        "p": "yǐ",
        "type": "独体字 · Chữ đơn",
        "st": 3,
        "ord": "乙→一→乚",
        "rad": "己 (kỷ – biến thể)",
        "mean": "đã, thôi",
        "tip": "Hình cuộn dây đã hoàn tất, khép lại → biểu thị việc ĐÃ xong.",
        "cf": "己 (jǐ – \"bản thân\", hở đầu)",
        "w": "已经 / 不已"
      },
      {
        "c": "经",
        "p": "jīng",
        "type": "左右结构 · Trái-phải",
        "st": 8,
        "ord": "纟(mịch) trái → 巛+ 工 phải",
        "rad": "纟(mịch – tơ, sợi)",
        "mean": "trải qua, kinh",
        "tip": "已 (xong) + 经 (trải qua) = việc đã trải qua = ĐÃ (xong rồi).",
        "cf": "径 (jìng – \"con đường\", bộ 彳)",
        "w": "已经 / 经常 / 经理"
      }
    ],
    "colloFull": [
      {
        "zh": "已经来了",
        "py": "yǐjīng lái le",
        "vn": "đã đến rồi"
      },
      {
        "zh": "已经知道",
        "py": "yǐjīng zhīdào",
        "vn": "đã biết rồi"
      },
      {
        "zh": "已经开始了",
        "py": "yǐjīng kāishǐ le",
        "vn": "đã bắt đầu rồi"
      },
      {
        "zh": "已经很晚了",
        "py": "yǐjīng hěn wǎn le",
        "vn": "đã muộn lắm rồi"
      }
    ],
    "patterns": [
      {
        "s": "已经 + động từ + 了",
        "m": "Đã … rồi — hai vế thường đi cùng nhau"
      },
      {
        "s": "已经 đứng TRƯỚC động từ, 了 đứng cuối câu"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Bạn tôi đã đến rồi.",
        "answer": "我朋友已经来了。",
        "answerPy": "Wǒ péngyou yǐjīng lái le.",
        "note": "已经 và 了 thường đi cùng nhau.",
        "pair": "已经……了"
      },
      {
        "promptLang": "vi",
        "prompt": "Đã tám giờ rồi, chúng ta bắt đầu thôi.",
        "answer": "已经八点了，我们开始吧。",
        "answerPy": "Yǐjīng bā diǎn le, wǒmen kāishǐ ba.",
        "note": "吧 dùng khi rủ rê, đề nghị.",
        "pair": "……吧"
      }
    ]
  },
  {
    "n": 10,
    "zh": "长",
    "py": "cháng",
    "pos": "Tính từ",
    "vn": "dài, lâu",
    "hv": "trường",
    "em": "📏",
    "lesson": 4,
    "ex_zh": "你在这里工作多长时间了？",
    "ex_py": "Nǐ zài zhèlǐ gōngzuò duō cháng shíjiān le?",
    "ex_vn": "Bạn làm việc ở đây được bao lâu rồi?",
    "exList": [
      {
        "zh": "你在这里工作多长时间了？",
        "py": "Nǐ zài zhèlǐ gōngzuò duō cháng shíjiān le?",
        "vn": "Bạn làm việc ở đây được bao lâu rồi?"
      },
      {
        "zh": "这条河很长。",
        "py": "Zhè tiáo hé hěn cháng.",
        "vn": "Con sông này rất dài."
      },
      {
        "zh": "今天的会开得很长。",
        "py": "Jīntiān de huì kāi de hěn cháng.",
        "vn": "Cuộc họp hôm nay kéo dài lâu."
      }
    ],
    "hanzi": [
      {
        "c": "长",
        "p": "cháng / zhǎng",
        "type": "独体字 · Tượng hình",
        "st": 4,
        "ord": "丿→ 𠃌 → 一 → 乚",
        "rad": "长 (trường – tự thành bộ)",
        "mean": "dài (cháng); lớn lên (zhǎng)",
        "tip": "Hình mái tóc dài được vẽ cách điệu → nghĩa gốc \"DÀI\". Đọc zhǎng khi nghĩa \"trưởng thành, cấp trên\".",
        "cf": "K không có",
        "w": "多长时间 / 长大 / 校长"
      }
    ],
    "colloFull": [
      {
        "zh": "很长",
        "py": "hěn cháng",
        "vn": "rất dài"
      },
      {
        "zh": "长时间",
        "py": "cháng shíjiān",
        "vn": "thời gian dài"
      },
      {
        "zh": "不长",
        "py": "bù cháng",
        "vn": "không dài"
      },
      {
        "zh": "长长的",
        "py": "chángcháng de",
        "vn": "dài dài"
      }
    ],
    "patterns": [
      {
        "s": "很 + 长",
        "m": "Rất dài — nói về vật, về thời gian"
      },
      {
        "s": "长 (cháng, dài) và 长 (zhǎng, lớn lên) — cùng chữ, khác âm"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Thời gian chúng tôi nghỉ không dài.",
        "answer": "我们休息的时间不长。",
        "answerPy": "Wǒmen xiūxi de shíjiān bù cháng.",
        "note": "……的时间 — khoảng thời gian làm gì.",
        "pair": "不 + Adj"
      },
      {
        "promptLang": "vi",
        "prompt": "Tôi đã nghỉ một thời gian dài.",
        "answer": "我休息了很长时间。",
        "answerPy": "Wǒ xiūxile hěn cháng shíjiān.",
        "note": "很长时间 — một thời gian dài.",
        "pair": "……了"
      }
    ]
  },
  {
    "n": 11,
    "zh": "两",
    "py": "liǎng",
    "pos": "Số từ",
    "vn": "hai (dùng trước lượng từ)",
    "hv": "lưỡng",
    "em": "2️⃣",
    "lesson": 4,
    "ex_zh": "已经两年多了。",
    "ex_py": "Yǐjīng liǎng nián duō le.",
    "ex_vn": "Đã hơn hai năm rồi.",
    "exList": [
      {
        "zh": "已经两年多了。",
        "py": "Yǐjīng liǎng nián duō le.",
        "vn": "Đã hơn hai năm rồi."
      },
      {
        "zh": "我有两个孩子。",
        "py": "Wǒ yǒu liǎng ge háizi.",
        "vn": "Tôi có hai đứa con."
      },
      {
        "zh": "桌子上有两块手表。",
        "py": "Zhuōzi shang yǒu liǎng kuài shǒubiǎo.",
        "vn": "Trên bàn có hai chiếc đồng hồ."
      }
    ],
    "hanzi": [
      {
        "c": "两",
        "p": "liǎng",
        "type": "独体字 · Chữ đơn",
        "st": 7,
        "ord": "一→冂→𠆢→一→一",
        "rad": "一 (nhất)",
        "mean": "hai",
        "tip": "Khác với 二 (số 2 khi đếm), 两 dùng khi đi kèm LƯỢNG TỪ: 两个, 两年, 两块.",
        "cf": "辆 (liàng – \"lượng từ xe\", bộ 车)",
        "w": "两年 / 两个 / 两天"
      }
    ],
    "colloFull": [
      {
        "zh": "两个人",
        "py": "liǎng gè rén",
        "vn": "hai người"
      },
      {
        "zh": "两点",
        "py": "liǎng diǎn",
        "vn": "hai giờ"
      },
      {
        "zh": "两个小时",
        "py": "liǎng gè xiǎoshí",
        "vn": "hai tiếng"
      },
      {
        "zh": "两天",
        "py": "liǎng tiān",
        "vn": "hai ngày"
      }
    ],
    "patterns": [
      {
        "s": "两 + lượng từ + danh từ",
        "m": "Hai cái gì: 两个人"
      },
      {
        "s": "两 (đếm số lượng) ≠ 二 (đọc số, thứ tự): 两个 ✓ / 二个 ✗"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tôi có hai người con gái.",
        "answer": "我有两个女儿。",
        "answerPy": "Wǒ yǒu liǎng ge nǚ'ér.",
        "note": "Đếm số lượng dùng 两, không dùng 二.",
        "pair": "有 + số + M + N"
      },
      {
        "promptLang": "vi",
        "prompt": "Hai giờ chúng tôi bắt đầu học.",
        "answer": "我们两点开始上课。",
        "answerPy": "Wǒmen liǎng diǎn kāishǐ shàngkè.",
        "note": "Hai giờ là 两点, không nói 二点.",
        "pair": "……点"
      }
    ]
  },
  {
    "n": 12,
    "zh": "帮",
    "py": "bāng",
    "pos": "Động từ",
    "vn": "giúp, giúp đỡ",
    "hv": "bang",
    "em": "🤝",
    "lesson": 4,
    "ex_zh": "这个工作是他帮我介绍的。",
    "ex_py": "Zhège gōngzuò shì tā bāng wǒ jièshào de.",
    "ex_vn": "Công việc này là do anh ấy giới thiệu cho tôi đấy.",
    "exList": [
      {
        "zh": "这个工作是他帮我介绍的。",
        "py": "Zhège gōngzuò shì tā bāng wǒ jièshào de.",
        "vn": "Công việc này là do anh ấy giới thiệu cho tôi đấy."
      },
      {
        "zh": "你能帮我一下吗？",
        "py": "Nǐ néng bāng wǒ yíxià ma?",
        "vn": "Bạn có thể giúp tôi một chút không?"
      },
      {
        "zh": "谢谢你帮了我这么多。",
        "py": "Xièxie nǐ bāngle wǒ zhème duō.",
        "vn": "Cảm ơn bạn đã giúp tôi nhiều như vậy."
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
        "tip": "Nghĩa gốc liên quan tới \"đoàn thể, phe nhóm\" (邦), sau mở rộng thành \"cùng nhau GIÚP ĐỠ\".",
        "cf": "邦 (bāng – \"quốc gia\")",
        "w": "帮忙 / 帮助 / 帮我"
      }
    ],
    "colloFull": [
      {
        "zh": "帮我",
        "py": "bāng wǒ",
        "vn": "giúp tôi"
      },
      {
        "zh": "帮你买",
        "py": "bāng nǐ mǎi",
        "vn": "mua giúp bạn"
      },
      {
        "zh": "帮忙",
        "py": "bāngmáng",
        "vn": "giúp đỡ"
      },
      {
        "zh": "帮他接",
        "py": "bāng tā jiē",
        "vn": "đón giúp anh ấy"
      }
    ],
    "patterns": [
      {
        "s": "帮 + người + động từ",
        "m": "Giúp ai làm gì: 帮我看一下"
      },
      {
        "s": "帮 (giúp, có tân ngữ) và 帮忙 (giúp đỡ, từ ly hợp)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Bạn hỏi giúp tôi thầy một chút nhé.",
        "answer": "你帮我问一下老师吧。",
        "answerPy": "Nǐ bāng wǒ wèn yíxià lǎoshī ba.",
        "note": "帮我 + động từ — làm giúp tôi.",
        "pair": "帮 + người + V"
      },
      {
        "promptLang": "vi",
        "prompt": "Anh ấy mua báo giúp tôi.",
        "answer": "他帮我买报纸。",
        "answerPy": "Tā bāng wǒ mǎi bàozhǐ.",
        "note": "帮 đứng trước động từ chính.",
        "pair": "帮 + người + V"
      }
    ]
  },
  {
    "n": 13,
    "zh": "介绍",
    "py": "jièshào",
    "pos": "Động từ",
    "vn": "giới thiệu",
    "hv": "giới thiệu",
    "em": "🙋",
    "lesson": 4,
    "ex_zh": "我来介绍一下。",
    "ex_py": "Wǒ lái jièshào yíxià.",
    "ex_vn": "Để tôi giới thiệu một chút.",
    "exList": [
      {
        "zh": "我来介绍一下。",
        "py": "Wǒ lái jièshào yíxià.",
        "vn": "Để tôi giới thiệu một chút."
      },
      {
        "zh": "这个工作是他帮我介绍的。",
        "py": "Zhège gōngzuò shì tā bāng wǒ jièshào de.",
        "vn": "Công việc này là do anh ấy giới thiệu cho tôi đấy."
      },
      {
        "zh": "请介绍一下你自己。",
        "py": "Qǐng jièshào yíxià nǐ zìjǐ.",
        "vn": "Hãy tự giới thiệu về bản thân bạn."
      }
    ],
    "hanzi": [
      {
        "c": "介",
        "p": "jiè",
        "type": "独体字 · Chữ đơn",
        "st": 4,
        "ord": "人 (biến thể) → 丨 → 丨",
        "rad": "人 (nhân)",
        "mean": "ở giữa, trung gian",
        "tip": "Hình người đứng giữa hai ranh giới → vai trò TRUNG GIAN, kết nối hai bên.",
        "cf": "个 (gè)",
        "w": "介绍 / 中介"
      },
      {
        "c": "绍",
        "p": "shào",
        "type": "左右结构 · Trái-phải",
        "st": 8,
        "ord": "纟(mịch) trái → 召 (triệu) phải",
        "rad": "纟(mịch – tơ)",
        "mean": "nối tiếp, giới thiệu",
        "tip": "介 (kết nối) + 绍 (nối tiếp) = kết nối hai người với nhau = GIỚI THIỆU.",
        "cf": "招 (zhāo – \"chiêu\", bộ 扌)",
        "w": "介绍 / 绍兴"
      }
    ],
    "colloFull": [
      {
        "zh": "介绍一下",
        "py": "jièshào yíxià",
        "vn": "giới thiệu một chút"
      },
      {
        "zh": "给你介绍",
        "py": "gěi nǐ jièshào",
        "vn": "giới thiệu cho bạn"
      },
      {
        "zh": "介绍学校",
        "py": "jièshào xuéxiào",
        "vn": "giới thiệu trường"
      },
      {
        "zh": "介绍朋友",
        "py": "jièshào péngyou",
        "vn": "giới thiệu bạn"
      }
    ],
    "patterns": [
      {
        "s": "给 + người + 介绍 + 一下",
        "m": "Giới thiệu cho ai một chút"
      },
      {
        "s": "介 + 绍",
        "m": "Bắc cầu (介) nối (绍) hai bên lại với nhau"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tôi giới thiệu cho bạn một chút, đây là chồng tôi.",
        "answer": "我给你介绍一下，这是我丈夫。",
        "answerPy": "Wǒ gěi nǐ jièshào yíxià, zhè shì wǒ zhàngfu.",
        "note": "介绍一下 — nghe lịch sự, tự nhiên.",
        "pair": "给……介绍"
      },
      {
        "promptLang": "vi",
        "prompt": "Thầy giới thiệu trường học cho chúng tôi.",
        "answer": "老师给我们介绍学校。",
        "answerPy": "Lǎoshī gěi wǒmen jièshào xuéxiào.",
        "note": "给 + người + 介绍 + cái gì.",
        "pair": "给……介绍"
      }
    ]
  }
];

const wuData = [
  {img:'🎂',label:'生日',py:'shēngrì',letter:'A'},
  {img:'📞',label:'接',py:'jiē',letter:'B'},
  {img:'☕',label:'非常',py:'fēicháng',letter:'C'},
  {img:'🤝',label:'帮',py:'bāng',letter:'D'},
  {img:'🙋',label:'介绍',py:'jièshào',letter:'E'},
  {img:'🌙',label:'晚上',py:'wǎnshang',letter:'F'},
];

var dialogData = [
  {scene:'在教室 · Trong lớp học',
   preQuiz:[
     {q:'那份生日礼物是什么？',opts:['一本书','一件衣服','一支笔'],ans:0},
     {q:'那本书是谁写的？',opts:['送礼物的人自己写的','是买的','是借的'],ans:0},
   ],
   lines:[
     {sp:0,zh:'生日快乐！这是送给你的。',py:'Shēngrì kuàilè! Zhè shì sòng gěi nǐ de.',vn:'Sinh nhật vui vẻ! Đây là quà tặng bạn.'},
     {sp:1,zh:'是什么？是一本书吗？',py:'Shì shénme? Shì yì běn shū ma?',vn:'Cái gì thế? Là một quyển sách à?'},
     {sp:0,zh:'对，这本书是我写的。',py:'Duì, zhè běn shū shì wǒ xiě de.',vn:'Đúng vậy, quyển sách này là do tôi viết đấy.'},
     {sp:1,zh:'太谢谢你了！',py:'Tài xièxie nǐ le!',vn:'Cảm ơn bạn nhiều nhé!'},
   ]},
  {scene:'在家里 · Ở nhà',
   preQuiz:[
     {q:'早上的电话是谁接的？',opts:['儿子','女儿','说话人自己'],ans:0},
     {q:'女的打算什么时候问儿子？',opts:['现在','晚上','明天'],ans:1},
   ],
   lines:[
     {sp:0,zh:'早上有你一个电话。',py:'Zǎoshang yǒu nǐ yí ge diànhuà.',vn:'Buổi sáng có một cuộc điện thoại gọi cho bạn đấy.'},
     {sp:1,zh:'电话是谁打的？',py:'Diànhuà shì shéi dǎ de?',vn:'Điện thoại là do ai gọi thế?'},
     {sp:0,zh:'不知道，是儿子接的。',py:'Bù zhīdào, shì érzi jiē de.',vn:'Không biết nữa, là con trai nghe máy.'},
     {sp:1,zh:'好，晚上我问一下儿子。',py:'Hǎo, wǎnshang wǒ wèn yíxià érzi.',vn:'Được rồi, tối nay tôi sẽ hỏi con trai một chút.'},
   ]},
  {scene:'在运动场 · Trên sân vận động',
   preQuiz:[
     {q:'男的几岁开始踢足球？',opts:['10岁','11岁','12岁'],ans:1},
     {q:'他已经踢了多少年足球？',opts:['五年','十年','十五年'],ans:1},
   ],
   lines:[
     {sp:0,zh:'你喜欢踢足球吗？',py:'Nǐ xǐhuan tī zúqiú ma?',vn:'Bạn có thích đá bóng không?'},
     {sp:1,zh:'非常喜欢。',py:'Fēicháng xǐhuan.',vn:'Cực kỳ thích luôn.'},
     {sp:0,zh:'你是什么时候开始踢足球的？',py:'Nǐ shì shénme shíhou kāishǐ tī zúqiú de?',vn:'Bạn bắt đầu đá bóng từ khi nào thế?'},
     {sp:1,zh:'我11岁的时候开始踢足球，已经踢了十年了。',py:'Wǒ shíyī suì de shíhou kāishǐ tī zúqiú, yǐjīng tī le shí nián le.',vn:'Tôi bắt đầu đá bóng từ lúc 11 tuổi, đến nay đã đá được 10 năm rồi.'},
   ]},
  {scene:'在公司 · Ở công ty',
   preQuiz:[
     {q:'女的在这家公司工作多久了？',opts:['一年多','两年多','三年多'],ans:1},
     {q:'女的是哪一年来的？',opts:['2010年','2011年','2012年'],ans:1},
     {q:'这个工作是谁帮女的介绍的？',opts:['谢先生','张先生','她自己找的'],ans:0},
   ],
   lines:[
     {sp:0,zh:'你在这里工作多长时间了？',py:'Nǐ zài zhèlǐ gōngzuò duō cháng shíjiān le?',vn:'Bạn làm việc ở đây được bao lâu rồi?'},
     {sp:1,zh:'已经两年多了，我是2011年来的。',py:'Yǐjīng liǎng nián duō le, wǒ shì èrlíngyīyī nián lái de.',vn:'Đã hơn hai năm rồi, tôi đến đây từ năm 2011.'},
     {sp:0,zh:'你认识谢先生吗？',py:'Nǐ rènshi Xiè xiānsheng ma?',vn:'Bạn có quen biết ông Tạ không?'},
     {sp:1,zh:'认识，我们是大学同学。这个工作是他帮我介绍的。',py:'Rènshi, wǒmen shì dàxué tóngxué. Zhège gōngzuò shì tā bāng wǒ jièshào de.',vn:'Quen chứ, chúng tôi là bạn học đại học. Công việc này là do anh ấy giới thiệu cho tôi đấy.'},
   ]},
];

// ══════════════════════════════════════════
// PHẦN 1 · GHÉP TỪ (Collocation) — ghép hai nửa thành cụm dùng được ngay
// Không copy câu bài khoá — chỉ ghép CỤM TỪ để phản xạ collocation.
// ══════════════════════════════════════════
var matchData = [
  {left:'接',right:'电话'},
  {left:'生日',right:'快乐'},
  {left:'帮我',right:'介绍一下'},
  {left:'你去问',right:'一下王老师'},
  {left:'已经',right:'十点了'},
  {left:'今天晚上',right:'你有时间吗？'},
];

// ══════════════════════════════════════════
// PHẦN 2 · NGHE — tình huống MỚI: phỏng vấn hỏi kinh nghiệm làm việc/sở thích.
// Ôn lại 几/觉得 (Bài 1).
// ══════════════════════════════════════════
var listenData = {
  type: 'workbook',
  audio: '/audio/bai-4/listen-full.mp3',
  dictation: [
    {num:1, lines:[
      {pre:'妈妈知道电话', blank:'是谁打的', post:'。', py:'Māma zhīdào diànhuà shì shéi dǎ de.', vn:'Mẹ biết điện thoại là ai gọi đến.'},
    ]},
    {num:2, lines:[
      {pre:'看，这是我', blank:'在和小王一起跑步', post:'。', py:'Kàn, zhè shì wǒ zài hé Xiǎo Wáng yìqǐ pǎobù.', vn:'Xem này, đây là tôi đang chạy bộ cùng Tiểu Vương.'},
    ]},
    {num:3, lines:[
      {pre:'今天的晚饭', blank:'是我和丈夫一起做的', post:'。', py:'Jīntiān de wǎnfàn shì wǒ hé zhàngfu yìqǐ zuò de.', vn:'Bữa tối hôm nay là tôi và chồng cùng nấu.'},
    ]},
    {num:4, lines:[
      {pre:'今天报纸', blank:'是王小姐买的', post:'。', py:'Jīntiān bàozhǐ shì Wáng xiǎojiě mǎi de.', vn:'Báo hôm nay là cô Vương mua.'},
    ]},
    {num:5, lines:[
      {pre:'我非常喜欢这个工作，', blank:'已经工作两年了', post:'。', py:'Wǒ fēicháng xǐhuan zhège gōngzuò, yǐjīng gōngzuò liǎng nián le.', vn:'Tôi rất thích công việc này, đã làm được hai năm rồi.'},
    ]},
    {num:6, lines:[
      {speaker:'男', pre:'你喜欢', blank:'吃中国菜吗', post:'？', py:'Nǐ xǐhuan chī Zhōngguó cài ma?', vn:'Bạn thích ăn món Trung Quốc không?'},
      {speaker:'女', pre:'我非常喜欢吃，', blank:'我也会做', post:'。', py:'Wǒ fēicháng xǐhuan chī, wǒ yě huì zuò.', vn:'Tôi rất thích ăn, tôi cũng biết nấu.'},
    ]},
    {num:7, lines:[
      {speaker:'男', pre:'这个是', blank:'谁买的', post:'？', py:'Zhège shì shéi mǎi de?', vn:'Cái này ai mua vậy?'},
      {speaker:'女', pre:'这个是安娜买的，', blank:'今天是大卫的生日', post:'。', py:'Zhège shì Ānnà mǎi de, jīntiān shì Dàwèi de shēngrì.', vn:'Cái này Anna mua, hôm nay là sinh nhật David.'},
    ]},
    {num:8, lines:[
      {speaker:'女', pre:'李先生出院', blank:'多长时间了', post:'？', py:'Lǐ xiānsheng chūyuàn duō cháng shíjiān le?', vn:'Ông Lý xuất viện được bao lâu rồi?'},
      {speaker:'女', pre:'我不知道，', blank:'你问一下张医生吧', post:'。', py:'Wǒ bù zhīdào, nǐ wèn yíxià Zhāng yīshēng ba.', vn:'Tôi không biết, bạn hỏi bác sĩ Trương xem.'},
    ]},
    {num:9, lines:[
      {speaker:'女', pre:'你怎么', blank:'认识芳芳的', post:'？', py:'Nǐ zěnme rènshi Fāngfāng de?', vn:'Bạn quen Phương Phương bằng cách nào?'},
      {speaker:'男', pre:'是小明', blank:'帮我介绍的', post:'。', py:'Shì Xiǎomíng bāng wǒ jièshào de.', vn:'Là Tiểu Minh giới thiệu cho tôi.'},
    ]},
    {num:10, lines:[
      {speaker:'男', pre:'女儿，你去', blank:'接一下电话', post:'。', py:'Nǚ\'ér, nǐ qù jiē yíxià diànhuà.', vn:'Con gái, con nghe điện thoại hộ bố.'},
      {speaker:'女', pre:'对不起，爸爸，我', blank:'没时间接电话，我在做饭呢', post:'。', py:'Duìbuqǐ, bàba, wǒ méi shíjiān jiē diànhuà, wǒ zài zuò fàn ne.', vn:'Xin lỗi bố, con không có thời gian nghe điện thoại, con đang nấu cơm.'},
    ]},
  ],
  mc: [
    {num:11, options:['张老师','小王','王老师'], ans:0,
     explain:'女：小王，今天是张老师的生日。男：我知道。这本书是我买的，要送给张老师。问：这本书是送给谁的？ → 张老师。'},
    {num:12, options:['大卫','李先生','不知道'], ans:1,
     explain:'女：大卫，上午有你的一个电话。男：我知道，是李先生打的。问：上午的电话是谁打的？ → 李先生。'},
    {num:13, options:['一年前','一年多了','两年前'], ans:2,
     explain:'女：你的汉语真好！你是什么时候开始学汉语的？男：两年前开始的，我来中国已经一年多了。问：男的是什么时候开始学汉语的？ → 两年前。'},
    {num:14, options:['很不喜欢','非常喜欢','不太喜欢'], ans:1,
     explain:'女：你喜欢现在的工作吗？男：非常喜欢，我已经做了三年多了。问：他喜欢现在的工作吗？ → 非常喜欢。'},
    {num:15, options:['十年','不到十年','十几年'], ans:0,
     explain:'女：你什么时候认识谢先生的？男：我们十年前认识的，他是我的大学同学。问：男的和谢先生认识多长时间了？ → 十年。'},
  ],
};

// ══════════════════════════════════════════
// PHẦN 3a · ĐIỀN TỪ — mỗi câu một tình huống mới (是……的 · ……的时候 · 已经……了 + từ mới bài 4, ôn bài 1–3 và HSK1)
// ══════════════════════════════════════════
var fillData = [
  {pre:'Bạn đến lớp muộn, cô giáo hỏi: “你今天',blank:'是',post:'几点起床的？” — “八点，对不起！”',hint:'(là — đi cùng 的 ở cuối câu)',ans:'是',exp:'Việc đã xảy ra, muốn hỏi rõ thời gian thì dùng 是 + thời gian + động từ + 的: 是几点起床的？'},
  {pre:'“你的衣服真漂亮！是谁买',blank:'的',post:'？” — “是我丈夫买的。”',hint:'(… đấy — cuối câu)',ans:'的',exp:'Hỏi AI đã làm việc đó: 是谁 + động từ + 的？ Trả lời: 是 + người + động từ + 的.'},
  {pre:'“你的汉语非常好！你是',blank:'在',post:'哪儿学习的？” — “在北京。”',hint:'(ở)',ans:'在',exp:'Hỏi NƠI đã làm việc gì: 是 + 在哪儿 + động từ + 的？ Nơi chốn đứng trước động từ.'},
  {pre:'Bác sĩ dặn: “这个药你吃饭',blank:'的时候',post:'吃。”',hint:'(khi, lúc)',ans:'的时候',exp:'Việc / thời điểm + 的时候 = khi …; cụm này đứng TRƯỚC động từ chính: 吃饭的时候吃.'},
  {pre:'Bạn kể chuyện hồi du học: “我在美国',blank:'的时候',post:'，每天早上都去跑步。”',hint:'(hồi, khi)',ans:'的时候',exp:'在 + nơi + 的时候 = hồi ở …; câu sau nói việc xảy ra trong thời gian đó (ôn 每天…都).'},
  {pre:'“你要喝茶吗？” — “不喝了，我',blank:'已经',post:'喝了很多水。”',hint:'(đã … rồi)',ans:'已经',exp:'已经 + động từ + 了 = đã … rồi; 已经 đứng trước động từ.'},
  {pre:'“你们认识多长时间了？” — “已经十年',blank:'了',post:'，她是我最好的朋友。”',hint:'(rồi)',ans:'了',exp:'已经 + khoảng thời gian + 了 = đã được … rồi; thiếu 了 ở cuối câu thì câu chưa trọn.'},
  {pre:'“你每天跑步多',blank:'长',post:'时间？” — “四十分钟。”',hint:'(lâu, dài)',ans:'长',exp:'多长时间 = bao lâu (hỏi khoảng thời gian); 几点 mới là hỏi giờ.'},
  {pre:'Điện thoại reo, bạn đang viết chữ: “妈妈，你帮我',blank:'接',post:'一下电话，好吗？”',hint:'(nghe máy)',ans:'接',exp:'接电话 = nghe máy; 打电话 = gọi điện. 帮我 + động từ = giúp tôi …'},
  {pre:'“这个字怎么读？” — “我也不知道，你去',blank:'问',post:'老师吧。”',hint:'(hỏi)',ans:'问',exp:'问 + người = hỏi ai: 问老师; không cần thêm giới từ như “hỏi với”.'},
  {pre:'Ở bữa tiệc, bạn nói với mọi người: “我来',blank:'介绍',post:'一下，这是我的大学同学小王。”',hint:'(giới thiệu)',ans:'介绍',exp:'我来介绍一下 = để tôi giới thiệu một chút — câu mở đầu quen thuộc khi giới thiệu người.'},
  {pre:'“北京的天气怎么样？” — “',blank:'非常',post:'冷，你要买新衣服。”',hint:'(cực kỳ)',ans:'非常',exp:'非常 + tính từ = cực kỳ, mạnh hơn 很: 非常冷.'},
];

// ══════════════════════════════════════════
// PHẦN 3b · SẮP XẾP — câu MỚI, dùng 是……的 / ……的时候 / 已经……了
// ══════════════════════════════════════════
var sortData = [
  {words:['这','本','书','是','我','在','北京','买','的','。'],ans:'这本书是我在北京买的。',audio:'这本书是我在北京买的。'},
  {words:['这','本','书','是','谁','给','你','的','？'],ans:'这本书是谁给你的？',audio:'这本书是谁给你的？'},
  {words:['我','在','北京','的','时候','非常','喜欢','踢','足球','。'],ans:'我在北京的时候非常喜欢踢足球。',audio:'我在北京的时候非常喜欢踢足球。'},
  {words:['我','和','他','已经','认识','两','年','多','了','。'],ans:'我和他已经认识两年多了。',audio:'我和他已经认识两年多了。'},
  {words:['晚上','我','给','你','打','电话','。'],ans:'晚上我给你打电话。',audio:'晚上我给你打电话。',alt:['我晚上给你打电话。']},
  {words:['我们','七','点','开始','吃饭','吧','。'],ans:'我们七点开始吃饭吧。',audio:'我们七点开始吃饭吧。'},
  {words:['你','学习','汉语','多','长','时间','了','？'],ans:'你学习汉语多长时间了？',audio:'你学习汉语多长时间了？'},
  {words:['医生','说','我','已经','能','出院','了','。'],ans:'医生说我已经能出院了。',audio:'医生说我已经能出院了。'},
];

// ══════════════════════════════════════════
// PHẦN 3c · SỬA LỖI SAI — lỗi học sinh Việt hay mắc
// (thời gian đặt sau động từ, 是……了 thay 是……的, thiếu 的, “khi” đặt đầu câu, thiếu 了 sau 已经, 二/两, 打/接 điện thoại, 非常 đặt sau)
// ══════════════════════════════════════════
var errorFixData = [
  {wrong:'我是来中国九月的。',
   opts:['我是九月来中国的。','我九月来中国是的。','我是来中国在九月的。','我是九月来中国了。'],ans:0,
   exp:'Thời gian đứng TRƯỚC động từ: 是 + 九月 + 来中国 + 的; việc đã xảy ra nhấn thời gian dùng 是…的, không dùng 是…了.'},
  {wrong:'我是坐出租车来了。',
   opts:['我坐出租车是来的。','我是坐出租车来的。','我是坐出租车了来的。','我是出租车坐来的。'],ans:1,
   exp:'Nhấn CÁCH đi (bằng gì): 是 + 坐出租车 + 来 + 的; cuối câu là 的, không phải 了.'},
  {wrong:'这些汉字是我儿子写。',
   opts:['这些汉字我儿子是写的。','这些汉字是写我儿子的。','这些汉字是我儿子写的。','这些汉字是我儿子的写。'],ans:2,
   exp:'Nhấn AI làm: 是 + người + động từ + 的; thiếu 的 ở cuối thì câu chưa đúng.'},
  {wrong:'时候天气不好，我们在家看电视。（ý: khi thời tiết xấu）',
   opts:['的时候天气不好，我们在家看电视。','天气不好时候的，我们在家看电视。','天气不好的时候，我们看电视在家。','天气不好的时候，我们在家看电视。'],ans:3,
   exp:'“Khi thời tiết xấu” = 天气不好的时候: sự việc đứng TRƯỚC, 的时候 đứng SAU (ngược với tiếng Việt); nơi chốn 在家 đứng trước động từ.'},
  {wrong:'我已经吃药。',
   opts:['我已经吃药了。','我吃药已经了。','我已经是吃药了。','我已经吃药的。'],ans:0,
   exp:'已经 + động từ + 了: cuối câu cần 了 (không phải 的); không thêm 是.'},
  {wrong:'我学习汉语已经一年。',
   opts:['我已经一年学习汉语了。','我学习汉语已经一年了。','我学习汉语一年已经了。','我学习汉语已经了一年。'],ans:1,
   exp:'Động từ + 已经 + khoảng thời gian + 了: 学习汉语已经一年了; 了 đứng cuối câu.'},
  {wrong:'他在北京住了二年。',
   opts:['他住了二年在北京。','他在北京住了两个年。','他在北京住了两年。','他两年在北京住了。'],ans:2,
   exp:'Trước lượng từ dùng 两, không dùng 二: 两年; 年 tự là lượng từ nên không thêm 个.'},
  {wrong:'电话来了，你去打一下。（ý: ra nghe máy）',
   opts:['电话来了，你去接电话一下。','电话来了，你一下去接。','电话来了，你去给接一下。','电话来了，你去接一下。'],ans:3,
   exp:'Nghe máy = 接电话 (打电话 là gọi đi); 一下 đứng ngay sau động từ: 接一下.'},
  {wrong:'我喜欢非常这个工作。',
   opts:['我非常喜欢这个工作。','我非常这个工作喜欢。','我很非常喜欢这个工作。','我喜欢这个工作非常。'],ans:0,
   exp:'非常 đứng TRƯỚC động từ tâm lý / tính từ: 非常喜欢; không đi cùng 很, không đặt cuối câu.'},
];

// ══════════════════════════════════════════
// PHẦN 4 · LUYỆN NÓI 3 TẦNG (tầng 3 có ghi âm thật + chấm điểm AI)
// ══════════════════════════════════════════
// Luyen noi voi AI (mode 'ai-speak'): moi cau hoi la mot tinh huong doi song
// lien quan den bai khoa; hoc sinh tu ghi am cau tra loi, AI nghe lai (nhan
// dien giong noi tieng Trung) roi cham diem theo 4 tieu chi va nhan xet.
var speakingData = {
  mode: 'ai-speak',
  intro: 'Mỗi câu hỏi là một tình huống thật trong đời sống, dùng đúng từ vựng và mẫu câu của Bài 4. Bấm 🎙️ rồi trả lời bằng tiếng Trung — AI sẽ nghe, ghi lại câu bạn nói và chấm điểm theo Nội dung · Mẫu câu · Từ vựng · Độ trôi chảy. Nên tự trả lời trước rồi mới mở “Câu mẫu” để đối chiếu.',
  tasks: [
    {
      situation: 'Bạn mới quen hỏi về sinh nhật của bạn.',
      q_zh: '你的生日是几月几号？生日的时候你想做什么？',
      q_py: 'Nǐ de shēngrì shì jǐ yuè jǐ hào? Shēngrì de shíhou nǐ xiǎng zuò shénme?',
      q_vn: 'Sinh nhật bạn là ngày mấy tháng mấy? Vào dịp sinh nhật bạn muốn làm gì?',
      grammar: { label: '生日的时候 + việc muốn làm', any: ['的时候', '时候'] },
      need: [
        { label: 'Nói ngày tháng (月 / 号)', any: ['月', '号', '日'] },
        { label: 'Nói việc muốn làm', any: ['吃', '去', '看', '买', '喝', '玩', '唱', '旅游', '运动', '踢'] },
        { label: 'Nói làm cùng ai (和 / 一起)', any: ['和', '跟', '一起', '朋友', '家', '同学', '妈妈', '爸爸'] }
      ],
      bonus: { label: 'Dùng 非常 / 快乐', any: ['非常', '快乐', '高兴'] },
      vocab: ['生日', '的时候', '快乐'],
      minLen: 12,
      sample: '我的生日是九月六号。生日的时候，我想和朋友一起去饭店吃饭。',
      sample_py: 'Wǒ de shēngrì shì jiǔ yuè liù hào. Shēngrì de shíhou, wǒ xiǎng hé péngyou yìqǐ qù fàndiàn chīfàn.',
      sample_vn: 'Sinh nhật tôi là ngày 6 tháng 9. Vào dịp sinh nhật, tôi muốn cùng bạn bè đi nhà hàng ăn.',
      tip: 'Ngày tháng nói từ lớn đến nhỏ: 九月六号; “vào dịp / khi …” = … 的时候, đặt ở đầu câu.'
    },
    {
      situation: 'Bạn cùng lớp hỏi về việc học tiếng Trung của bạn.',
      q_zh: '你是什么时候开始学习汉语的？已经多长时间了？',
      q_py: 'Nǐ shì shénme shíhou kāishǐ xuéxí Hànyǔ de? Yǐjīng duō cháng shíjiān le?',
      q_vn: 'Bạn bắt đầu học tiếng Trung từ khi nào? Đã được bao lâu rồi?',
      grammar: { label: '我是 + thời gian + 开始学习汉语的', any: ['是', '的'] },
      need: [
        { label: 'Nói thời gian bắt đầu (年 / 月 / 的时候)', any: ['年', '月', '时候', '岁', '昨天', '星期'] },
        { label: 'Dùng 开始', any: ['开始'] },
        { label: 'Nói đã bao lâu (已经…了)', any: ['已经', '了'] }
      ],
      bonus: { label: 'Nói cảm nhận (非常喜欢 / 觉得…)', any: ['非常', '喜欢', '觉得', '有意思'] },
      vocab: ['开始', '已经', '长'],
      minLen: 14,
      sample: '我是今年三月开始学习汉语的，已经八个多月了。',
      sample_py: 'Wǒ shì jīnnián sān yuè kāishǐ xuéxí Hànyǔ de, yǐjīng bā ge duō yuè le.',
      sample_vn: 'Tôi bắt đầu học tiếng Trung từ tháng 3 năm nay, đã được hơn tám tháng rồi.',
      tip: 'Việc đã xảy ra, nhấn THỜI GIAN: 是 + thời gian + động từ + 的; độ dài: 已经 + khoảng thời gian + 了.'
    },
    {
      situation: 'Bạn giới thiệu một người bạn thân với người nhà.',
      q_zh: '请你介绍一下你的一个好朋友。你们是在哪儿认识的？',
      q_py: 'Qǐng nǐ jièshào yíxià nǐ de yí ge hǎo péngyou. Nǐmen shì zài nǎr rènshi de?',
      q_vn: 'Hãy giới thiệu một người bạn thân của bạn. Hai bạn quen nhau ở đâu?',
      grammar: { label: '我们是在 + nơi + 认识的', any: ['认识的', '是在', '的'] },
      need: [
        { label: 'Giới thiệu tên (这是… / 他叫…)', any: ['叫', '介绍', '这是', '名字'] },
        { label: 'Nói nơi quen nhau', any: ['在', '学校', '大学', '医院', '公司', '饭店', '北京', '中国'] },
        { label: 'Nói đã quen bao lâu (已经…了)', any: ['已经', '年', '时候', '了'] }
      ],
      bonus: { label: 'Nói thêm về người đó (工作 / 喜欢 / 漂亮…)', any: ['工作', '喜欢', '漂亮', '高', '医生', '老师', '学生'] },
      vocab: ['介绍', '已经', '两'],
      minLen: 14,
      sample: '这是我的朋友小李。我们是在医院认识的，已经认识五年了。',
      sample_py: 'Zhè shì wǒ de péngyou Xiǎo Lǐ. Wǒmen shì zài yīyuàn rènshi de, yǐjīng rènshi wǔ nián le.',
      sample_vn: 'Đây là bạn tôi, Tiểu Lý. Chúng tôi quen nhau ở bệnh viện, đã quen năm năm rồi.',
      tip: 'Nhấn NƠI của việc đã xảy ra: 是在 + nơi + động từ + 的; giới thiệu người thì mở đầu 这是…, 他/她叫….'
    },
    {
      situation: 'Bạn về nhà, người nhà nói chiều nay có người gọi điện cho bạn.',
      q_zh: '下午有人给你打电话，你知道是谁吗？你晚上要做什么？',
      q_py: 'Xiàwǔ yǒu rén gěi nǐ dǎ diànhuà, nǐ zhīdào shì shéi ma? Nǐ wǎnshang yào zuò shénme?',
      q_vn: 'Chiều nay có người gọi điện cho bạn, bạn biết là ai không? Tối nay bạn sẽ làm gì?',
      grammar: { label: '是 + người + 打的', any: ['打的', '是', '的'] },
      need: [
        { label: 'Nói ai gọi / ai nghe máy', any: ['同学', '朋友', '老师', '妈妈', '爸爸', '儿子', '女儿', '丈夫', '医生', '不知道'] },
        { label: 'Dùng 电话 / 接 / 打', any: ['电话', '接', '打'] },
        { label: 'Nói việc buổi tối (晚上 + 问 / 给…打电话)', any: ['晚上', '问', '给'] }
      ],
      bonus: { label: 'Dùng 一下 (问一下)', any: ['一下'] },
      vocab: ['接', '晚上', '问', '给'],
      minLen: 12,
      sample: '是我同学小王打的。晚上我问一下他明天去不去学校。',
      sample_py: 'Shì wǒ tóngxué Xiǎo Wáng dǎ de. Wǎnshang wǒ wèn yíxià tā míngtiān qù bu qù xuéxiào.',
      sample_vn: 'Là bạn học Tiểu Vương gọi. Tối nay tôi sẽ hỏi cậu ấy xem mai có đến trường không.',
      tip: '打电话 = gọi điện, 接电话 = nghe máy. Nhấn ai làm: 是 + người + 打的.'
    },
    {
      situation: 'Bạn của bạn thấy một chiếc cốc rất đẹp trên bàn bạn.',
      q_zh: '这个杯子真漂亮！是谁送给你的？',
      q_py: 'Zhège bēizi zhēn piàoliang! Shì shéi sòng gěi nǐ de?',
      q_vn: 'Cái cốc này đẹp thật! Ai tặng bạn thế?',
      grammar: { label: '是 + người + 送给我的', any: ['的'] },
      need: [
        { label: 'Nói ai tặng', any: ['妈妈', '爸爸', '朋友', '同学', '女儿', '儿子', '丈夫', '老师', '我'] },
        { label: 'Dùng 送 / 给 / 买', any: ['送', '给', '买'] },
        { label: 'Nói khi nào / ở đâu (的时候 / 在…)', any: ['时候', '生日', '在', '昨天', '月'] }
      ],
      bonus: { label: 'Dùng 非常喜欢', any: ['非常', '喜欢'] },
      vocab: ['生日', '给', '非常'],
      minLen: 12,
      sample: '是我女儿送给我的，我生日的时候她在北京买的。',
      sample_py: 'Shì wǒ nǚ\'ér sòng gěi wǒ de, wǒ shēngrì de shíhou tā zài Běijīng mǎi de.',
      sample_vn: 'Là con gái tôi tặng tôi, cháu mua ở Bắc Kinh vào dịp sinh nhật tôi.',
      tip: 'Nhấn NGƯỜI làm: 是 + người + 送给我的; 送给 + người = tặng cho ai.'
    }
  ]
};

// ══════════════════════════════════════════
// LUYỆN DỊCH — câu mới, dùng từ bài 4 + ôn bài 1–3 và HSK1
// ══════════════════════════════════════════
var translateData = [
  {vi:'Bạn đến Trung Quốc năm nào? — Tôi đến từ hai năm trước.', zh:'你是哪一年来中国的？——我是两年前来的。', py:'Nǐ shì nǎ yì nián lái Zhōngguó de? —— Wǒ shì liǎng nián qián lái de.'},
  {vi:'Lúc tôi về đến nhà, bố mẹ đã đi ngủ rồi.', zh:'我回家的时候，爸爸妈妈已经睡觉了。', py:'Wǒ huí jiā de shíhou, bàba māma yǐjīng shuìjiào le.'},
  {vi:'Tối nào bố tôi cũng đọc báo ở nhà.', zh:'我爸爸每天晚上都在家看报纸。', py:'Wǒ bàba měi tiān wǎnshang dōu zài jiā kàn bàozhǐ.'},
  {vi:'Bạn có thể giúp tôi hỏi bác sĩ một chút không?', zh:'你能帮我问一下医生吗？', py:'Nǐ néng bāng wǒ wèn yíxià yīshēng ma?'},
];

// ══════════════════════════════════════════
// LUYỆN DỊCH (chiều Trung→Việt) — noi dung KHAC voi chieu Viet->Trung o tren
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:'Hôm sinh nhật tôi, các bạn đều đến, tôi vui lắm.', zh:'生日那天，朋友都来了，我非常快乐。', py:'Shēngrì nà tiān, péngyou dōu lái le, wǒ fēicháng kuàilè.'},
  {vi:'Cậu ấy đã hai ngày không đến trường rồi, có phải bị ốm không?', zh:'他已经两天没有来学校了，是不是生病了？', py:'Tā yǐjīng liǎng tiān méiyǒu lái xuéxiào le, shì bu shì shēngbìng le?'},
  {vi:'Bộ phim tối qua bắt đầu lúc mấy giờ? Tôi không xem.', zh:'昨天晚上的电影是几点开始的？我没有看。', py:'Zuótiān wǎnshang de diànyǐng shì jǐ diǎn kāishǐ de? Wǒ méiyǒu kàn.'},
];
