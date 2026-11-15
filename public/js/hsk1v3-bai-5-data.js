// ══════════════════════════════════════════
// DATA — HSK1 (3.0 Mới) Bài 5: 今天我休息
// Nguồn: Giáo trình New HSK 1 (chuẩn 3.0) - Trung Việt, NXB Dân Trí
// ══════════════════════════════════════════
var vocabData = [
  {
    "n": 1,
    "zh": "今天",
    "py": "jīntiān",
    "pos": "Danh từ",
    "vn": "hôm nay",
    "hv": "kim thiên",
    "em": "📅",
    "lesson": 1,
    "ex_zh": "今天几号？",
    "ex_py": "Jīntiān jǐ hào?",
    "ex_vn": "Hôm nay ngày mấy?",
    "exList": [
      {
        "zh": "今天几号？",
        "py": "Jīntiān jǐ hào?",
        "vn": "Hôm nay ngày mấy?"
      },
      {
        "zh": "今天9月8号。",
        "py": "Jīntiān jiǔ yuè bā hào.",
        "vn": "Hôm nay là ngày 8 tháng 9."
      }
    ],
    "hanzi": [
      {
        "c": "今",
        "p": "jīn",
        "type": "上下结构 · Trên-dưới",
        "st": 4,
        "ord": "𠆢(biến thể của 人) trên → 一 → 𠃌 nét gập dưới",
        "rad": "人 (nhân – người)",
        "mean": "nay, hiện tại, bây giờ",
        "tip": "𠆢(người) đứng trên một vạch ngang 一 và nét gập 𠃌, như đang ở NGAY dưới một mái che → nghĩa HIỆN NAY, BÂY GIỜ.",
        "cf": "令 (lìng – \"ra lệnh\", cũng có 𠆢 ở trên nhưng thêm một nét chấm bên dưới)",
        "w": "今天 / 现在 / 至今"
      },
      {
        "c": "天",
        "p": "tiān",
        "type": "上下结构 · Trên-dưới",
        "st": 4,
        "ord": "一 (nét ngang trên) → 大 (người dang tay) dưới",
        "rad": "大 (đại – lớn)",
        "mean": "trời, ngày",
        "tip": "Một nét NGANG (一) đặt trên chữ 大 (người dang rộng hai tay, nghĩa \"to lớn\") → người đứng dưới bầu TRỜI rộng lớn → nghĩa TRỜI, mở rộng thành NGÀY.",
        "cf": "夫 (fū – \"chồng, đàn ông\", cũng gồm 大 và một nét ngang nhưng vị trí nét ngang khác)",
        "w": "今天 / 明天 / 星期天"
      }
    ],
    "colloFull": [
      {
        "zh": "今天几号",
        "py": "jīntiān jǐ hào",
        "vn": "hôm nay ngày mấy"
      },
      {
        "zh": "今天星期几",
        "py": "jīntiān xīngqī jǐ",
        "vn": "hôm nay thứ mấy"
      },
      {
        "zh": "今天休息",
        "py": "jīntiān xiūxi",
        "vn": "hôm nay nghỉ"
      },
      {
        "zh": "今天很忙",
        "py": "jīntiān hěn máng",
        "vn": "hôm nay rất bận"
      }
    ],
    "patterns": [
      {
        "s": "今天 + Sub + động từ",
        "m": "Từ chỉ thời gian đứng TRƯỚC động từ"
      },
      {
        "s": "今 + 天",
        "m": "Ngày (天) này (今)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Hôm nay ngày mấy?",
        "answer": "今天几号？",
        "answerPy": "Jīntiān jǐ hào?",
        "note": "号 dùng trong khẩu ngữ để nói ngày.",
        "pair": "几号？"
      },
      {
        "promptLang": "vi",
        "prompt": "Hôm nay tôi rất bận.",
        "answer": "今天我很忙。",
        "answerPy": "Jīntiān wǒ hěn máng.",
        "note": "Từ chỉ thời gian đứng trước chủ ngữ hoặc sau chủ ngữ.",
        "pair": "很 + Adj"
      }
    ]
  },
  {
    "n": 2,
    "zh": "号",
    "py": "hào",
    "pos": "Lượng từ",
    "vn": "ngày, mùng",
    "hv": "hiệu",
    "em": "🔢",
    "lesson": 1,
    "ex_zh": "今天9月8号。",
    "ex_py": "Jīntiān jiǔ yuè bā hào.",
    "ex_vn": "Hôm nay là ngày 8 tháng 9.",
    "exList": [
      {
        "zh": "今天9月8号。",
        "py": "Jīntiān jiǔ yuè bā hào.",
        "vn": "Hôm nay là ngày 8 tháng 9."
      }
    ],
    "hanzi": [
      {
        "c": "号",
        "p": "hào",
        "type": "上下结构 · Trên-dưới",
        "st": 5,
        "ord": "口 (khẩu - miệng) trên → 丂 (biến thể) dưới",
        "rad": "口 (khẩu – miệng)",
        "mean": "số, ngày (trong tháng), hiệu, tên gọi",
        "tip": "口 (miệng) hô to phía trên, 丂 (hơi vang) phía dưới → hình ảnh miệng HÔ, GỌI to số hiệu → nghĩa SỐ, NGÀY, TÊN HIỆU.",
        "cf": "亏 (kuī – \"thiệt hại, thua lỗ\", phần dưới giống nhau nhưng không có bộ 口 phía trên)",
        "w": "号码 / 几号 / 8号"
      }
    ],
    "colloFull": [
      {
        "zh": "几号",
        "py": "jǐ hào",
        "vn": "ngày mấy"
      },
      {
        "zh": "五号",
        "py": "wǔ hào",
        "vn": "ngày mùng năm"
      },
      {
        "zh": "今天几号",
        "py": "jīntiān jǐ hào",
        "vn": "hôm nay ngày mấy"
      },
      {
        "zh": "十号",
        "py": "shí hào",
        "vn": "ngày mười"
      }
    ],
    "patterns": [
      {
        "s": "số + 号",
        "m": "Ngày bao nhiêu: 五号 — ngày mùng 5"
      },
      {
        "s": "号 dùng khi nói; văn viết dùng 日"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Hôm nay ngày mùng năm.",
        "answer": "今天五号。",
        "answerPy": "Jīntiān wǔ hào.",
        "note": "Câu nói ngày tháng không cần động từ 是.",
        "pair": "……号"
      },
      {
        "promptLang": "vi",
        "prompt": "Sinh nhật bạn ngày mấy?",
        "answer": "你的生日几号？",
        "answerPy": "Nǐ de shēngrì jǐ hào?",
        "note": "生日 — sinh nhật.",
        "pair": "几号？"
      }
    ]
  },
  {
    "n": 3,
    "zh": "月",
    "py": "yuè",
    "pos": "Danh từ",
    "vn": "tháng",
    "hv": "nguyệt",
    "em": "🌙",
    "lesson": 1,
    "ex_zh": "今天9月8号。",
    "ex_py": "Jīntiān jiǔ yuè bā hào.",
    "ex_vn": "Hôm nay là ngày 8 tháng 9.",
    "exList": [
      {
        "zh": "今天9月8号。",
        "py": "Jīntiān jiǔ yuè bā hào.",
        "vn": "Hôm nay là ngày 8 tháng 9."
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
      }
    ],
    "colloFull": [
      {
        "zh": "几月",
        "py": "jǐ yuè",
        "vn": "tháng mấy"
      },
      {
        "zh": "五月",
        "py": "wǔ yuè",
        "vn": "tháng năm"
      },
      {
        "zh": "六月十号",
        "py": "liù yuè shí hào",
        "vn": "ngày mười tháng sáu"
      },
      {
        "zh": "今年五月",
        "py": "jīnnián wǔ yuè",
        "vn": "tháng năm năm nay"
      }
    ],
    "patterns": [
      {
        "s": "số + 月 + số + 号",
        "m": "Thứ tự: lớn trước nhỏ sau — 六月十号"
      },
      {
        "s": "Tiếng Trung nói năm → tháng → ngày, ngược với tiếng Việt"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Hôm nay ngày mười tháng sáu.",
        "answer": "今天六月十号。",
        "answerPy": "Jīntiān liù yuè shí hào.",
        "note": "Tiếng Trung nói tháng trước, ngày sau.",
        "pair": "……月……号"
      },
      {
        "promptLang": "vi",
        "prompt": "Sinh nhật mẹ tôi vào tháng năm.",
        "answer": "我妈妈的生日是五月。",
        "answerPy": "Wǒ māma de shēngrì shì wǔ yuè.",
        "note": "五月 — tháng năm.",
        "pair": "是……"
      }
    ]
  },
  {
    "n": 4,
    "zh": "日",
    "py": "rì",
    "pos": "Lượng từ",
    "vn": "ngày",
    "hv": "nhật",
    "em": "☀️",
    "lesson": 1,
    "ex_zh": "星期日",
    "ex_py": "Xīngqīrì",
    "ex_vn": "Chủ nhật",
    "exList": [
      {
        "zh": "星期日",
        "py": "Xīngqīrì",
        "vn": "Chủ nhật"
      }
    ],
    "hanzi": [
      {
        "c": "日",
        "p": "rì",
        "type": "独体字 · Chữ đơn (tượng hình)",
        "st": 4,
        "ord": "囗 (khung ngoài) → 一 (nét ngang giữa)",
        "rad": "日 (nhật – tự thành bộ)",
        "mean": "ngày, mặt trời",
        "tip": "Hình vuông có một nét ngang ở giữa, mô phỏng hình MẶT TRỜI nhìn từ xa (hình tròn được vuông hoá) → nghĩa MẶT TRỜI, mở rộng thành NGÀY.",
        "cf": "曰 (yuē – \"nói rằng\", hình dẹt hơn, nét ngang không chạm hai bên)",
        "w": "生日 / 星期日 / 日子"
      }
    ],
    "colloFull": [
      {
        "zh": "五月一日",
        "py": "wǔ yuè yí rì",
        "vn": "ngày 1 tháng 5"
      },
      {
        "zh": "星期日",
        "py": "Xīngqīrì",
        "vn": "chủ nhật"
      },
      {
        "zh": "几月几日",
        "py": "jǐ yuè jǐ rì",
        "vn": "ngày mấy tháng mấy"
      },
      {
        "zh": "生日",
        "py": "shēngrì",
        "vn": "sinh nhật"
      }
    ],
    "patterns": [
      {
        "s": "số + 日",
        "m": "Ngày — dùng trong văn viết, giấy tờ"
      },
      {
        "s": "日 (văn viết) ≠ 号 (khẩu ngữ) — cùng nghĩa là ngày"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Hôm nay là ngày mùng một tháng năm.",
        "answer": "今天是五月一日。",
        "answerPy": "Jīntiān shì wǔ yuè yī rì.",
        "note": "日 dùng trong văn viết, giấy tờ.",
        "pair": "是……"
      },
      {
        "promptLang": "vi",
        "prompt": "Sinh nhật bạn ngày mấy tháng mấy?",
        "answer": "你的生日是几月几日？",
        "answerPy": "Nǐ de shēngrì shì jǐ yuè jǐ rì?",
        "note": "日 và 号 cùng nghĩa, khác sắc thái.",
        "pair": "几月几日？"
      }
    ]
  },
  {
    "n": 5,
    "zh": "星期",
    "py": "xīngqī",
    "pos": "Danh từ",
    "vn": "thứ, tuần",
    "hv": "tinh kỳ",
    "em": "📆",
    "lesson": 1,
    "ex_zh": "星期几？",
    "ex_py": "Xīngqī jǐ?",
    "ex_vn": "Hôm nay thứ mấy?",
    "exList": [
      {
        "zh": "星期几？",
        "py": "Xīngqī jǐ?",
        "vn": "Hôm nay thứ mấy?"
      }
    ],
    "hanzi": [
      {
        "c": "星",
        "p": "xīng",
        "type": "上下结构 · Trên-dưới",
        "st": 9,
        "ord": "日 (nhật - ánh sáng) trên → 生 (sinh) dưới",
        "rad": "日 (nhật – mặt trời/ánh sáng)",
        "mean": "sao, ngôi sao",
        "tip": "日 (đốm sáng nhỏ) phía trên chữ 生 (sinh ra, mọc lên) → những đốm sáng MỌC LÊN trên bầu trời đêm → nghĩa NGÔI SAO.",
        "cf": "猩 (xīng – \"tinh tinh\", thêm bộ 犭bên trái, cùng âm và cùng có 星 bên phải)",
        "w": "星期 / 明星 / 火星"
      },
      {
        "c": "期",
        "p": "qī",
        "type": "左右结构 · Trái-phải",
        "st": 12,
        "ord": "其 (kỳ - biểu âm) trái → 月 (nguyệt) phải",
        "rad": "月 (nguyệt – mặt trăng/chu kỳ)",
        "mean": "kỳ hạn, thời kỳ, tuần",
        "tip": "其 (đó, ấy - biểu âm) đứng cạnh 月 (mặt trăng, biểu thị chu kỳ thời gian) → một chu kỳ MẶT TRĂNG lặp lại → nghĩa KỲ HẠN, TUẦN.",
        "cf": "欺 (qī – \"lừa dối\", cũng có 其ở trái nhưng bên phải là 欠 chứ không phải 月)",
        "w": "星期 / 学期 / 期末"
      }
    ],
    "colloFull": [
      {
        "zh": "星期几",
        "py": "xīngqī jǐ",
        "vn": "thứ mấy"
      },
      {
        "zh": "星期一",
        "py": "xīngqī yī",
        "vn": "thứ hai"
      },
      {
        "zh": "星期三",
        "py": "xīngqī sān",
        "vn": "thứ tư"
      },
      {
        "zh": "今天星期几",
        "py": "jīntiān xīngqī jǐ",
        "vn": "hôm nay thứ mấy"
      }
    ],
    "patterns": [
      {
        "s": "星期 + số",
        "m": "Thứ trong tuần: 星期一 là THỨ HAI, không phải thứ nhất"
      },
      {
        "s": "Chủ nhật gọi riêng là 星期日 hoặc 星期天, không đánh số"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Hôm nay thứ mấy?",
        "answer": "今天星期几？",
        "answerPy": "Jīntiān xīngqī jǐ?",
        "note": "Khung hỏi thứ trong tuần.",
        "pair": "星期几？"
      },
      {
        "promptLang": "vi",
        "prompt": "Hôm nay thứ hai, tôi rất bận.",
        "answer": "今天星期一，我很忙。",
        "answerPy": "Jīntiān xīngqīyī, wǒ hěn máng.",
        "note": "星期一 là THỨ HAI, không phải thứ nhất.",
        "pair": "星期 + số"
      }
    ]
  },
  {
    "n": 6,
    "zh": "星期日",
    "py": "Xīngqīrì",
    "pos": "Danh từ",
    "vn": "Chủ nhật",
    "hv": "Tinh Kỳ Nhật",
    "em": "🌞",
    "lesson": 1,
    "ex_zh": "星期日。今天我休息。",
    "ex_py": "Xīngqīrì. Jīntiān wǒ xiūxi.",
    "ex_vn": "Chủ nhật. Hôm nay anh được nghỉ.",
    "exList": [
      {
        "zh": "星期日。今天我休息。",
        "py": "Xīngqīrì. Jīntiān wǒ xiūxi.",
        "vn": "Chủ nhật. Hôm nay anh được nghỉ."
      }
    ],
    "hanzi": [
      {
        "c": "星",
        "p": "xīng",
        "type": "上下结构 · Trên-dưới",
        "st": 9,
        "ord": "日 (nhật - ánh sáng) trên → 生 (sinh) dưới",
        "rad": "日 (nhật – mặt trời/ánh sáng)",
        "mean": "sao, ngôi sao",
        "tip": "日 (đốm sáng nhỏ) phía trên chữ 生 (sinh ra, mọc lên) → những đốm sáng MỌC LÊN trên bầu trời đêm → nghĩa NGÔI SAO.",
        "cf": "猩 (xīng – \"tinh tinh\", thêm bộ 犭bên trái, cùng âm và cùng có 星 bên phải)",
        "w": "星期 / 明星 / 火星"
      },
      {
        "c": "期",
        "p": "qī",
        "type": "左右结构 · Trái-phải",
        "st": 12,
        "ord": "其 (kỳ - biểu âm) trái → 月 (nguyệt) phải",
        "rad": "月 (nguyệt – mặt trăng/chu kỳ)",
        "mean": "kỳ hạn, thời kỳ, tuần",
        "tip": "其 (đó, ấy - biểu âm) đứng cạnh 月 (mặt trăng, biểu thị chu kỳ thời gian) → một chu kỳ MẶT TRĂNG lặp lại → nghĩa KỲ HẠN, TUẦN.",
        "cf": "欺 (qī – \"lừa dối\", cũng có 其ở trái nhưng bên phải là 欠 chứ không phải 月)",
        "w": "星期 / 学期 / 期末"
      },
      {
        "c": "日",
        "p": "rì",
        "type": "独体字 · Chữ đơn (tượng hình)",
        "st": 4,
        "ord": "囗 (khung ngoài) → 一 (nét ngang giữa)",
        "rad": "日 (nhật – tự thành bộ)",
        "mean": "ngày, mặt trời",
        "tip": "Hình vuông có một nét ngang ở giữa, mô phỏng hình MẶT TRỜI nhìn từ xa → nghĩa MẶT TRỜI, mở rộng thành NGÀY; 星期日 nghĩa đen là \"ngày của mặt trời\" (Chủ nhật).",
        "cf": "曰 (yuē – \"nói rằng\", hình dẹt hơn, nét ngang không chạm hai bên)",
        "w": "星期日 / 生日 / 日子"
      }
    ],
    "colloFull": [
      {
        "zh": "今天星期日",
        "py": "jīntiān Xīngqīrì",
        "vn": "hôm nay chủ nhật"
      },
      {
        "zh": "星期日休息",
        "py": "Xīngqīrì xiūxi",
        "vn": "chủ nhật nghỉ"
      },
      {
        "zh": "这个星期日",
        "py": "zhège Xīngqīrì",
        "vn": "chủ nhật này"
      }
    ],
    "patterns": [
      {
        "s": "星期 + 日",
        "m": "Chủ nhật — cách nói thiên văn viết"
      },
      {
        "s": "星期日 = 星期天, chỉ khác sắc thái trang trọng"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Hôm nay là chủ nhật.",
        "answer": "今天是星期日。",
        "answerPy": "Jīntiān shì xīngqīrì.",
        "note": "星期日 nghe trang trọng hơn 星期天.",
        "pair": "是……"
      },
      {
        "promptLang": "vi",
        "prompt": "Chủ nhật tôi nghỉ ở nhà.",
        "answer": "星期日我在家休息。",
        "answerPy": "Xīngqīrì wǒ zài jiā xiūxi.",
        "note": "在家 — ở nhà.",
        "pair": "在……休息"
      }
    ]
  },
  {
    "n": 7,
    "zh": "星期天",
    "py": "Xīngqītiān",
    "pos": "Danh từ",
    "vn": "Chủ nhật",
    "hv": "Tinh Kỳ Thiên",
    "em": "🌞",
    "lesson": 2,
    "ex_zh": "星期天我也做饭。",
    "ex_py": "Xīngqītiān wǒ yě zuò fàn.",
    "ex_vn": "Chủ nhật tôi cũng nấu ăn.",
    "exList": [
      {
        "zh": "星期天我也做饭。",
        "py": "Xīngqītiān wǒ yě zuò fàn.",
        "vn": "Chủ nhật tôi cũng nấu ăn."
      }
    ],
    "hanzi": [
      {
        "c": "星",
        "p": "xīng",
        "type": "上下结构 · Trên-dưới",
        "st": 9,
        "ord": "日 (nhật - ánh sáng) trên → 生 (sinh) dưới",
        "rad": "日 (nhật – mặt trời/ánh sáng)",
        "mean": "sao, ngôi sao",
        "tip": "日 (đốm sáng nhỏ) phía trên chữ 生 (sinh ra, mọc lên) → những đốm sáng MỌC LÊN trên bầu trời đêm → nghĩa NGÔI SAO.",
        "cf": "猩 (xīng – \"tinh tinh\", thêm bộ 犭bên trái, cùng âm và cùng có 星 bên phải)",
        "w": "星期 / 明星 / 火星"
      },
      {
        "c": "期",
        "p": "qī",
        "type": "左右结构 · Trái-phải",
        "st": 12,
        "ord": "其 (kỳ - biểu âm) trái → 月 (nguyệt) phải",
        "rad": "月 (nguyệt – mặt trăng/chu kỳ)",
        "mean": "kỳ hạn, thời kỳ, tuần",
        "tip": "其 (đó, ấy - biểu âm) đứng cạnh 月 (mặt trăng, biểu thị chu kỳ thời gian) → một chu kỳ MẶT TRĂNG lặp lại → nghĩa KỲ HẠN, TUẦN.",
        "cf": "欺 (qī – \"lừa dối\", cũng có 其ở trái nhưng bên phải là 欠 chứ không phải 月)",
        "w": "星期 / 学期 / 期末"
      },
      {
        "c": "天",
        "p": "tiān",
        "type": "上下结构 · Trên-dưới",
        "st": 4,
        "ord": "一 (nét ngang trên) → 大 (người dang tay) dưới",
        "rad": "大 (đại – lớn)",
        "mean": "trời, ngày",
        "tip": "Một nét NGANG (一) đặt trên chữ 大 (người dang rộng hai tay) → người đứng dưới bầu TRỜI rộng lớn → nghĩa TRỜI, mở rộng thành NGÀY; 星期天 nghĩa đen là \"ngày trời\" (Chủ nhật).",
        "cf": "夫 (fū – \"chồng, đàn ông\", cũng gồm 大 và một nét ngang nhưng vị trí khác)",
        "w": "星期天 / 今天 / 明天"
      }
    ],
    "colloFull": [
      {
        "zh": "今天星期天",
        "py": "jīntiān Xīngqītiān",
        "vn": "hôm nay chủ nhật"
      },
      {
        "zh": "星期天休息",
        "py": "Xīngqītiān xiūxi",
        "vn": "chủ nhật nghỉ"
      },
      {
        "zh": "星期天做饭",
        "py": "Xīngqītiān zuò fàn",
        "vn": "chủ nhật nấu cơm"
      }
    ],
    "patterns": [
      {
        "s": "星期 + 天",
        "m": "Chủ nhật — cách nói khẩu ngữ, hay dùng hơn"
      },
      {
        "s": "星期天 nghe gần gũi; 星期日 nghe trang trọng"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Chủ nhật bạn có nghỉ không?",
        "answer": "星期天你休息吗？",
        "answerPy": "Xīngqītiān nǐ xiūxi ma?",
        "note": "星期天 là cách nói khẩu ngữ, hay dùng hơn.",
        "pair": "……吗？"
      },
      {
        "promptLang": "vi",
        "prompt": "Chủ nhật mẹ tôi nấu sủi cảo.",
        "answer": "星期天我妈妈做饺子。",
        "answerPy": "Xīngqītiān wǒ māma zuò jiǎozi.",
        "note": "做饺子 — gói sủi cảo.",
        "pair": "做 + N"
      }
    ]
  },
  {
    "n": 8,
    "zh": "休息",
    "py": "xiūxi",
    "pos": "Động từ",
    "vn": "nghỉ, nghỉ ngơi",
    "hv": "hưu tức",
    "em": "😴",
    "lesson": 1,
    "ex_zh": "今天我休息。",
    "ex_py": "Jīntiān wǒ xiūxi.",
    "ex_vn": "Hôm nay anh được nghỉ.",
    "exList": [
      {
        "zh": "今天我休息。",
        "py": "Jīntiān wǒ xiūxi.",
        "vn": "Hôm nay anh được nghỉ."
      }
    ],
    "hanzi": [
      {
        "c": "休",
        "p": "xiū",
        "type": "左右结构 · Trái-phải",
        "st": 6,
        "ord": "亻(nhân) trái → 木(mộc) phải",
        "rad": "亻 (nhân – người)",
        "mean": "nghỉ ngơi",
        "tip": "亻(người) dựa vào 木(cây) → hình ảnh người ngồi tựa gốc cây để NGHỈ NGƠI.",
        "cf": "体 (tǐ – \"thân thể\", cũng bộ 亻\")",
        "w": "休息 / 休假"
      },
      {
        "c": "息",
        "p": "xi",
        "type": "上下结构 · Trên-dưới",
        "st": 10,
        "ord": "自 (tự - mũi) trên → 心 (tâm) dưới",
        "rad": "心 (tâm – trái tim, tấm lòng)",
        "mean": "nghỉ, hơi thở, tin tức",
        "tip": "自 (chỉ cái MŨI, nơi hít thở) đặt trên 心 (trái tim) → hơi thở đi từ mũi xuống tim, nhịp thở đều đặn khi NGHỈ NGƠI → nghĩa NGHỈ, HƠI THỞ.",
        "cf": "自 (zì – \"tự, bản thân\", chính là phần trên của 息 nhưng đứng riêng lẻ mang nghĩa khác)",
        "w": "休息 / 消息 / 信息"
      }
    ],
    "colloFull": [
      {
        "zh": "星期天休息",
        "py": "Xīngqītiān xiūxi",
        "vn": "chủ nhật nghỉ"
      },
      {
        "zh": "想休息",
        "py": "xiǎng xiūxi",
        "vn": "muốn nghỉ"
      },
      {
        "zh": "不休息",
        "py": "bù xiūxi",
        "vn": "không nghỉ"
      },
      {
        "zh": "在家休息",
        "py": "zài jiā xiūxi",
        "vn": "nghỉ ở nhà"
      }
    ],
    "patterns": [
      {
        "s": "thời gian + 休息",
        "m": "Nghỉ vào lúc nào: 星期天休息"
      },
      {
        "s": "休 = 亻 + 木",
        "m": "Người (亻) tựa vào gốc cây (木) — nghỉ ngơi"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tôi muốn nghỉ một chút.",
        "answer": "我想休息。",
        "answerPy": "Wǒ xiǎng xiūxi.",
        "note": "想 + động từ — muốn làm gì.",
        "pair": "想 + V"
      },
      {
        "promptLang": "vi",
        "prompt": "Hôm nay tôi không nghỉ, tôi rất bận.",
        "answer": "今天我不休息，我很忙。",
        "answerPy": "Jīntiān wǒ bù xiūxi, wǒ hěn máng.",
        "note": "不 đặt ngay trước động từ.",
        "pair": "不 + V"
      }
    ]
  },
  {
    "n": 9,
    "zh": "会",
    "py": "huì",
    "pos": "Động từ năng nguyện",
    "vn": "biết, có thể",
    "hv": "hội",
    "em": "✅",
    "lesson": 2,
    "ex_zh": "你会做饭吗？",
    "ex_py": "Nǐ huì zuò fàn ma?",
    "ex_vn": "Em có biết nấu ăn không?",
    "exList": [
      {
        "zh": "你会做饭吗？",
        "py": "Nǐ huì zuò fàn ma?",
        "vn": "Em có biết nấu ăn không?"
      },
      {
        "zh": "我会做。",
        "py": "Wǒ huì zuò.",
        "vn": "Em biết."
      }
    ],
    "hanzi": [
      {
        "c": "会",
        "p": "huì",
        "type": "上下结构 · Trên-dưới",
        "st": 6,
        "ord": "𠆢(nhân, biến thể) trên → 云-dạng giản thể dưới",
        "rad": "人 (nhân – người)",
        "mean": "biết, có thể, hội, gặp gỡ",
        "tip": "𠆢(người) đứng trên phần dưới giống mây 云 (tụ hội lại) → nhiều người TỤ HỘI, học hỏi lẫn nhau nên BIẾT làm việc gì đó → nghĩa BIẾT, CÓ THỂ, HỘI.",
        "cf": "云 (yún – \"mây, nói rằng\", là phần dưới của 会 nhưng đứng riêng mang nghĩa khác)",
        "w": "会说 / 开会 / 机会"
      }
    ],
    "colloFull": [
      {
        "zh": "会做饭",
        "py": "huì zuò fàn",
        "vn": "biết nấu ăn"
      },
      {
        "zh": "不会",
        "py": "bú huì",
        "vn": "không biết"
      },
      {
        "zh": "会做菜",
        "py": "huì zuò cài",
        "vn": "biết nấu món ăn"
      },
      {
        "zh": "会说中文",
        "py": "huì shuō Zhōngwén",
        "vn": "biết nói tiếng Trung"
      }
    ],
    "patterns": [
      {
        "s": "Sub + 会 + động từ",
        "m": "Biết làm gì nhờ học mà có: 我会做饭"
      },
      {
        "s": "Phủ định là 不会, KHÔNG nói 没会"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Mẹ tôi biết nấu ăn.",
        "answer": "我妈妈会做饭。",
        "answerPy": "Wǒ māma huì zuò fàn.",
        "note": "会 chỉ khả năng có được nhờ học.",
        "pair": "会 + V"
      },
      {
        "promptLang": "vi",
        "prompt": "Tôi không biết nấu món Trung Quốc.",
        "answer": "我不会做中国菜。",
        "answerPy": "Wǒ bú huì zuò Zhōngguó cài.",
        "note": "Phủ định của 会 là 不会.",
        "pair": "不会 + V"
      }
    ]
  },
  {
    "n": 10,
    "zh": "做饭",
    "py": "zuò fàn",
    "pos": "Cụm từ",
    "vn": "nấu ăn",
    "hv": "tố phạn",
    "em": "🍳",
    "lesson": 2,
    "ex_zh": "你会做饭吗？",
    "ex_py": "Nǐ huì zuò fàn ma?",
    "ex_vn": "Em có biết nấu ăn không?",
    "exList": [
      {
        "zh": "你会做饭吗？",
        "py": "Nǐ huì zuò fàn ma?",
        "vn": "Em có biết nấu ăn không?"
      },
      {
        "zh": "星期天我也做饭。",
        "py": "Xīngqītiān wǒ yě zuò fàn.",
        "vn": "Chủ nhật tôi cũng nấu ăn."
      }
    ],
    "hanzi": [
      {
        "c": "做",
        "p": "zuò",
        "type": "左右结构 · Trái-phải",
        "st": 11,
        "ord": "亻 (nhân) trái → 古 (cổ) → 攵 (phốc) phải",
        "rad": "亻 (nhân – người)",
        "mean": "làm, chế tạo, nấu (thức ăn)",
        "tip": "亻(người) đứng cạnh 故 (việc, công việc) → người bắt tay vào công việc, tự tay LÀM ra thứ gì đó → nghĩa LÀM, thường dùng cho 做饭, 做菜.",
        "cf": "作 (zuò – cùng âm \"làm\", cũng bộ 亻, nhưng phải là 乍; 做 dùng cho hành động cụ thể như nấu ăn, 作 dùng trừu tượng hơn như sáng tác)",
        "w": "做饭 / 做菜 / 做作业"
      },
      {
        "c": "饭",
        "p": "fàn",
        "type": "左右结构 · Trái-phải",
        "st": 7,
        "ord": "饣(thực, biến thể của 食) trái → 反 (phản) phải",
        "rad": "饣 (thực – ăn, đồ ăn)",
        "mean": "cơm, bữa ăn",
        "tip": "饣(bộ ăn) đứng cạnh 反 (lật qua lật lại, biểu âm \"fàn\") → hành động XỚI, LẬT cơm trong bát khi ăn → nghĩa CƠM, BỮA ĂN.",
        "cf": "饱 (bǎo – \"no bụng\", cũng bộ 饣, thêm phần 包)",
        "w": "做饭 / 吃饭 / 米饭"
      }
    ],
    "colloFull": [
      {
        "zh": "会做饭",
        "py": "huì zuò fàn",
        "vn": "biết nấu ăn"
      },
      {
        "zh": "想做饭",
        "py": "xiǎng zuò fàn",
        "vn": "muốn nấu ăn"
      },
      {
        "zh": "在家做饭",
        "py": "zài jiā zuò fàn",
        "vn": "nấu ăn ở nhà"
      },
      {
        "zh": "不会做饭",
        "py": "bú huì zuò fàn",
        "vn": "không biết nấu ăn"
      }
    ],
    "patterns": [
      {
        "s": "会 / 想 + 做饭",
        "m": "Biết nấu ăn, muốn nấu ăn"
      },
      {
        "s": "做 + 饭",
        "m": "Làm (做) cơm (饭) — nấu ăn nói chung"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Chủ nhật tôi nấu ăn ở nhà.",
        "answer": "星期天我在家做饭。",
        "answerPy": "Xīngqītiān wǒ zài jiā zuò fàn.",
        "note": "Nơi chốn đứng trước động từ.",
        "pair": "在……做饭"
      },
      {
        "promptLang": "vi",
        "prompt": "Bạn có biết nấu ăn không?",
        "answer": "你会做饭吗？",
        "answerPy": "Nǐ huì zuò fàn ma?",
        "note": "做饭 — nấu ăn nói chung.",
        "pair": "……吗？"
      }
    ]
  },
  {
    "n": 11,
    "zh": "做",
    "py": "zuò",
    "pos": "Động từ",
    "vn": "làm, nấu",
    "hv": "tố",
    "em": "👨‍🍳",
    "lesson": 2,
    "ex_zh": "你会做什么？",
    "ex_py": "Nǐ huì zuò shénme?",
    "ex_vn": "Em biết nấu món gì?",
    "exList": [
      {
        "zh": "你会做什么？",
        "py": "Nǐ huì zuò shénme?",
        "vn": "Em biết nấu món gì?"
      }
    ],
    "hanzi": [
      {
        "c": "做",
        "p": "zuò",
        "type": "左右结构 · Trái-phải",
        "st": 11,
        "ord": "亻 (nhân) trái → 古 (cổ) → 攵 (phốc) phải",
        "rad": "亻 (nhân – người)",
        "mean": "làm, chế tạo, nấu (thức ăn)",
        "tip": "亻(người) đứng cạnh 故 (việc, công việc) → người bắt tay vào công việc, tự tay LÀM ra thứ gì đó → nghĩa LÀM, thường dùng cho 做饭, 做菜.",
        "cf": "作 (zuò – cùng âm \"làm\", cũng bộ 亻, nhưng phải là 乍; 做 dùng cho hành động cụ thể như nấu ăn, 作 dùng trừu tượng hơn như sáng tác)",
        "w": "做饭 / 做菜 / 做作业"
      }
    ],
    "colloFull": [
      {
        "zh": "做饭",
        "py": "zuò fàn",
        "vn": "nấu ăn"
      },
      {
        "zh": "做菜",
        "py": "zuò cài",
        "vn": "nấu món ăn"
      },
      {
        "zh": "做什么",
        "py": "zuò shénme",
        "vn": "làm gì"
      },
      {
        "zh": "会做",
        "py": "huì zuò",
        "vn": "biết làm"
      }
    ],
    "patterns": [
      {
        "s": "做 + danh từ",
        "m": "Làm việc gì: 做饭 · 做菜"
      },
      {
        "s": "做 là làm ra một thứ gì đó, khác 工作 (đi làm việc)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Chủ nhật bạn làm gì?",
        "answer": "星期天你做什么？",
        "answerPy": "Xīngqītiān nǐ zuò shénme?",
        "note": "Câu có 什么 thì không thêm 吗.",
        "pair": "……什么？"
      },
      {
        "promptLang": "vi",
        "prompt": "Chị tôi biết làm mì.",
        "answer": "我姐姐会做面条儿。",
        "answerPy": "Wǒ jiějie huì zuò miàntiáor.",
        "note": "做 là làm ra một thứ gì đó.",
        "pair": "会 + V"
      }
    ]
  },
  {
    "n": 12,
    "zh": "面条儿",
    "py": "miàntiáor",
    "pos": "Danh từ",
    "vn": "mì, mì sợi",
    "hv": "diện điều nhi",
    "em": "🍜",
    "lesson": 2,
    "ex_zh": "我会做面条儿、饺子。",
    "ex_py": "Wǒ huì zuò miàntiáor, jiǎozi.",
    "ex_vn": "Em biết nấu mì, sủi cảo.",
    "exList": [
      {
        "zh": "我会做面条儿、饺子。",
        "py": "Wǒ huì zuò miàntiáor, jiǎozi.",
        "vn": "Em biết nấu mì, sủi cảo."
      }
    ],
    "hanzi": [
      {
        "c": "面",
        "p": "miàn",
        "type": "独体字 · Chữ đơn (tượng hình)",
        "st": 9,
        "ord": "一 → 丆 → 囗 bao quanh → các nét ngang bên trong (đường nét khuôn mặt)",
        "rad": "面 (diện – tự thành bộ)",
        "mean": "mặt, mặt phẳng; sợi (mì)",
        "tip": "Hình vẽ khuôn MẶT người với đường viền ngoài và các nét bên trong tượng trưng cho mắt, mũi → nghĩa MẶT; mở rộng sang MẶT PHẲNG, rồi chỉ sợi mì dẹt, phẳng như MẶT (面条儿).",
        "cf": "而 (ér – \"mà, mà còn\", phần trên cũng có nét ngang và nét dọc nhưng không có khung bao quanh đầy đủ)",
        "w": "面条儿 / 见面 / 后面"
      },
      {
        "c": "条",
        "p": "tiáo",
        "type": "上下结构 · Trên-dưới",
        "st": 7,
        "ord": "夊(tuy, biến thể - bước chân) trên → 木 (mộc - cây) dưới",
        "rad": "木 (mộc – cây, gỗ)",
        "mean": "sợi, nhánh (lượng từ vật dài, mảnh)",
        "tip": "Phần trên giống bước chân đi (夊), phần dưới là 木 (cây) → hình ảnh một CÀNH CÂY dài, mảnh, đung đưa → dùng làm lượng từ cho vật dài, mảnh như sợi mì, con đường.",
        "cf": "各 (gè – \"mỗi, từng\", phần trên gần giống nhưng bên dưới là 口 chứ không phải 木)",
        "w": "面条儿 / 一条 / 条件"
      },
      {
        "c": "儿",
        "p": "r",
        "type": "独体字 · Chữ đơn",
        "st": 2,
        "ord": "丿 → 乚 (đôi chân người)",
        "rad": "儿 (nhi – tự thành bộ, chân người)",
        "mean": "con, hậu tố nhi hoá (đọc lướt thành \"r\" khi ghép vần)",
        "tip": "Hình vẽ đôi CHÂN của một đứa trẻ đang đi → nghĩa CON, TRẺ NHỎ; khi đứng sau âm tiết khác như 条, nó chỉ còn giữ lại âm cuốn lưỡi \"r\" gọi là nhi hoá, không tách thành âm tiết riêng (miàn-tiáor).",
        "cf": "几 (jǐ – \"mấy, bao nhiêu\", hình dáng gần giống nhưng nét trên cong ở vị trí khác)",
        "w": "面条儿 / 儿子 / 女儿"
      }
    ],
    "colloFull": [
      {
        "zh": "做面条儿",
        "py": "zuò miàntiáor",
        "vn": "làm mì"
      },
      {
        "zh": "吃面条儿",
        "py": "chī miàntiáor",
        "vn": "ăn mì"
      },
      {
        "zh": "一些面条儿",
        "py": "yìxiē miàntiáor",
        "vn": "một ít mì"
      },
      {
        "zh": "好吃的面条儿",
        "py": "hǎochī de miàntiáor",
        "vn": "mì ngon"
      }
    ],
    "patterns": [
      {
        "s": "做 / 吃 + 面条儿",
        "m": "Làm mì, ăn mì"
      },
      {
        "s": "面 + 条 + 儿",
        "m": "Sợi (条) bột mì (面) — 儿 là đuôi uốn lưỡi"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tôi rất thích ăn mì.",
        "answer": "我很喜欢吃面条儿。",
        "answerPy": "Wǒ hěn xǐhuan chī miàntiáor.",
        "note": "吃面条儿 — ăn mì.",
        "pair": "喜欢 + V"
      },
      {
        "promptLang": "vi",
        "prompt": "Tôi rất thích món mì mẹ tôi làm.",
        "answer": "我很喜欢我妈妈做的面条儿。",
        "answerPy": "Wǒ hěn xǐhuan wǒ māma zuò de miàntiáor.",
        "note": "做的面条儿 — mì do ai đó làm.",
        "pair": "喜欢 + N"
      }
    ]
  },
  {
    "n": 13,
    "zh": "饺子",
    "py": "jiǎozi",
    "pos": "Danh từ",
    "vn": "sủi cảo",
    "hv": "giảo tử",
    "em": "🥟",
    "lesson": 2,
    "ex_zh": "我会做面条儿、饺子。",
    "ex_py": "Wǒ huì zuò miàntiáor, jiǎozi.",
    "ex_vn": "Em biết nấu mì, sủi cảo.",
    "exList": [
      {
        "zh": "我会做面条儿、饺子。",
        "py": "Wǒ huì zuò miàntiáor, jiǎozi.",
        "vn": "Em biết nấu mì, sủi cảo."
      }
    ],
    "hanzi": [
      {
        "c": "饺",
        "p": "jiǎo",
        "type": "左右结构 · Trái-phải",
        "st": 9,
        "ord": "饣(thực) trái → 交 (giao) phải",
        "rad": "饣 (thực – ăn, đồ ăn)",
        "mean": "sủi cảo, bánh chẻo",
        "tip": "饣(bộ ăn) đứng cạnh 交 (giao nhau, gấp chéo) → phần bột được GẤP CHÉO lại ôm lấy nhân bên trong khi làm món ăn → nghĩa SỦI CẢO.",
        "cf": "较 (jiào – \"so sánh\", bộ 车 bên trái thay vì 饣, cùng có 交 bên phải)",
        "w": "饺子 / 水饺 / 包饺子"
      },
      {
        "c": "子",
        "p": "zi",
        "type": "独体字 · Chữ đơn (tượng hình)",
        "st": 3,
        "ord": "了 (nét móc) → 一 ngang bên dưới",
        "rad": "子 (tử – tự thành bộ)",
        "mean": "con, hậu tố danh từ (đọc nhẹ)",
        "tip": "Hình vẽ đứa TRẺ SƠ SINH quấn tã, hai tay dang ra → nghĩa CON, CON CÁI; khi đọc nhẹ (轻声), đứng sau danh từ chỉ là hậu tố không mang nghĩa riêng, như 饺子, 儿子.",
        "cf": "了 (le – trợ từ hoàn thành, hình gần giống phần trên của 子 nhưng thiếu nét ngang)",
        "w": "饺子 / 儿子 / 桌子"
      }
    ],
    "colloFull": [
      {
        "zh": "做饺子",
        "py": "zuò jiǎozi",
        "vn": "gói sủi cảo"
      },
      {
        "zh": "吃饺子",
        "py": "chī jiǎozi",
        "vn": "ăn sủi cảo"
      },
      {
        "zh": "一些饺子",
        "py": "yìxiē jiǎozi",
        "vn": "một ít sủi cảo"
      },
      {
        "zh": "中国饺子",
        "py": "Zhōngguó jiǎozi",
        "vn": "sủi cảo Trung Quốc"
      }
    ],
    "patterns": [
      {
        "s": "做 / 吃 + 饺子",
        "m": "Gói sủi cảo, ăn sủi cảo"
      },
      {
        "s": "饺子 là món người Trung Quốc hay làm vào dịp lễ"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Chị tôi rất thích sủi cảo Trung Quốc.",
        "answer": "我姐姐很喜欢中国饺子。",
        "answerPy": "Wǒ jiějie hěn xǐhuan Zhōngguó jiǎozi.",
        "note": "中国饺子 — sủi cảo Trung Quốc.",
        "pair": "喜欢 + N"
      },
      {
        "promptLang": "vi",
        "prompt": "Chủ nhật chúng tôi gói sủi cảo.",
        "answer": "星期天我们做饺子。",
        "answerPy": "Xīngqītiān wǒmen zuò jiǎozi.",
        "note": "Người Trung Quốc hay gói sủi cảo vào dịp lễ.",
        "pair": "做 + N"
      }
    ]
  },
  {
    "n": 14,
    "zh": "一些",
    "py": "yìxiē",
    "pos": "Số lượng từ",
    "vn": "một số, một vài",
    "hv": "nhất ta",
    "em": "🔸",
    "lesson": 2,
    "ex_zh": "也会做一些菜。",
    "ex_py": "Yě huì zuò yìxiē cài.",
    "ex_vn": "Cũng biết chế biến một số món ăn khác.",
    "exList": [
      {
        "zh": "也会做一些菜。",
        "py": "Yě huì zuò yìxiē cài.",
        "vn": "Cũng biết chế biến một số món ăn khác."
      }
    ],
    "hanzi": [
      {
        "c": "一",
        "p": "yì",
        "type": "独体字 · Chữ đơn",
        "st": 1,
        "ord": "một nét ngang duy nhất",
        "rad": "一 (nhất – tự thành bộ)",
        "mean": "một, số 1",
        "tip": "Một NÉT NGANG duy nhất tượng trưng cho số ĐẦU TIÊN, đơn giản nhất trong các con số. Trước âm tiết thanh 1 như 些 (xiē), \"一\" biến điệu đọc thành thanh 4: yì xiē.",
        "cf": "丨 (gǔn – nét sổ, không phải chữ độc lập mang nghĩa, dễ nhầm hướng nét)",
        "w": "一些 / 一个 / 星期一"
      },
      {
        "c": "些",
        "p": "xiē",
        "type": "上下结构 · Trên-dưới",
        "st": 8,
        "ord": "此 (thử - này) trên → 二 (nhị) dưới",
        "rad": "二 (nhị – hai)",
        "mean": "một vài, một số (số lượng không xác định)",
        "tip": "此 (này, chỉ định) đặt trên 二 (số hai, tượng trưng số nhiều hơn một) → chỉ \"những cái NÀY\" với số lượng nhiều hơn một → nghĩa MỘT VÀI, MỘT SỐ.",
        "cf": "此 (cǐ – \"này, đây\", chính là phần trên của 些 nhưng đứng riêng, không có 二 bên dưới)",
        "w": "一些 / 这些 / 那些"
      }
    ],
    "colloFull": [
      {
        "zh": "一些菜",
        "py": "yìxiē cài",
        "vn": "một ít thức ăn"
      },
      {
        "zh": "一些饺子",
        "py": "yìxiē jiǎozi",
        "vn": "một ít sủi cảo"
      },
      {
        "zh": "一些人",
        "py": "yìxiē rén",
        "vn": "một vài người"
      },
      {
        "zh": "做一些",
        "py": "zuò yìxiē",
        "vn": "làm một ít"
      }
    ],
    "patterns": [
      {
        "s": "一些 + danh từ",
        "m": "Một vài, một ít — thay cho số cụ thể"
      },
      {
        "s": "些 đã mang nghĩa nhiều, nên KHÔNG thêm lượng từ nữa"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Mẹ tôi nấu một ít món ăn.",
        "answer": "我妈妈做一些菜。",
        "answerPy": "Wǒ māma zuò yìxiē cài.",
        "note": "些 đã mang nghĩa nhiều nên không thêm lượng từ.",
        "pair": "一些 + N"
      },
      {
        "promptLang": "vi",
        "prompt": "Có một vài bạn học mới.",
        "answer": "有一些新同学。",
        "answerPy": "Yǒu yìxiē xīn tóngxué.",
        "note": "一些人 — một vài người.",
        "pair": "……有……"
      }
    ]
  },
  {
    "n": 15,
    "zh": "菜",
    "py": "cài",
    "pos": "Danh từ",
    "vn": "món ăn, rau",
    "hv": "thái",
    "em": "🥘",
    "lesson": 2,
    "ex_zh": "也会做一些菜。",
    "ex_py": "Yě huì zuò yìxiē cài.",
    "ex_vn": "Cũng biết chế biến một số món ăn khác.",
    "exList": [
      {
        "zh": "也会做一些菜。",
        "py": "Yě huì zuò yìxiē cài.",
        "vn": "Cũng biết chế biến một số món ăn khác."
      },
      {
        "zh": "你会做这两个菜吗？",
        "py": "Nǐ huì zuò zhè liǎng gè cài ma?",
        "vn": "Bạn có biết làm hai món này không?"
      }
    ],
    "hanzi": [
      {
        "c": "菜",
        "p": "cài",
        "type": "上下结构 · Trên-dưới",
        "st": 11,
        "ord": "艹 (thảo - cỏ) trên → 采 (thái - hái) dưới",
        "rad": "艹 (thảo – cỏ, thực vật)",
        "mean": "rau, món ăn",
        "tip": "艹(cỏ cây) phía trên chữ 采 (hái, thu hoạch bằng tay từ cây) → hành động HÁI RAU CỎ từ cây → nghĩa RAU, mở rộng thành MÓN ĂN nói chung.",
        "cf": "采 (cǎi – \"hái, thu thập\", chính là phần dưới của 菜 nhưng không có bộ 艹 phía trên)",
        "w": "青菜 / 做菜 / 菜单"
      }
    ],
    "colloFull": [
      {
        "zh": "做菜",
        "py": "zuò cài",
        "vn": "nấu món ăn"
      },
      {
        "zh": "中国菜",
        "py": "Zhōngguó cài",
        "vn": "món Trung Quốc"
      },
      {
        "zh": "一些菜",
        "py": "yìxiē cài",
        "vn": "một ít thức ăn"
      },
      {
        "zh": "好吃的菜",
        "py": "hǎochī de cài",
        "vn": "món ngon"
      }
    ],
    "patterns": [
      {
        "s": "做 + 菜",
        "m": "Nấu món ăn — dùng 做"
      },
      {
        "s": "菜 vừa là rau, vừa là món ăn nói chung"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tôi rất thích món Trung Quốc.",
        "answer": "我很喜欢中国菜。",
        "answerPy": "Wǒ hěn xǐhuan Zhōngguó cài.",
        "note": "喜欢 + danh từ — thích cái gì.",
        "pair": "喜欢 + N"
      },
      {
        "promptLang": "vi",
        "prompt": "Chị tôi biết nấu món ăn.",
        "answer": "我姐姐会做菜。",
        "answerPy": "Wǒ jiějie huì zuò cài.",
        "note": "做菜 — nấu món ăn, luôn dùng 做.",
        "pair": "会 + V"
      }
    ]
  },
  {
    "n": 16,
    "zh": "下班",
    "py": "xiàbān",
    "pos": "Động từ",
    "vn": "tan làm, tan ca",
    "hv": "hạ ban",
    "em": "🏁",
    "lesson": 3,
    "ex_zh": "同乐，下班吗？",
    "ex_py": "Tónglè, xiàbān ma?",
    "ex_vn": "Đồng Lạc, tan làm chưa?",
    "exList": [
      {
        "zh": "同乐，下班吗？",
        "py": "Tónglè, xiàbān ma?",
        "vn": "Đồng Lạc, tan làm chưa?"
      },
      {
        "zh": "下班。",
        "py": "Xiàbān.",
        "vn": "Tan làm rồi."
      }
    ],
    "hanzi": [
      {
        "c": "下",
        "p": "xià",
        "type": "独体字 · Chữ đơn (chỉ sự)",
        "st": 3,
        "ord": "一 (đường chuẩn) trên → 卜 (nét sổ + chấm) dưới, chỉ điểm ở dưới đường chuẩn",
        "rad": "一 (nhất – đường chuẩn, số một)",
        "mean": "dưới, xuống, lần (thứ)",
        "tip": "Một nét ngang 一 làm ĐƯỜNG CHUẨN, một nét ngắn đặt PHÍA DƯỚI đường đó → chỉ vị trí ở DƯỚI, hướng ĐI XUỐNG, như 下班 (xuống ca, tan làm).",
        "cf": "上 (shàng – \"trên, lên\", cùng kiểu chỉ sự nhưng nét ngắn đặt phía TRÊN đường chuẩn thay vì dưới)",
        "w": "下班 / 下午 / 下雨"
      },
      {
        "c": "班",
        "p": "bān",
        "type": "左中右结构 · Trái-giữa-phải",
        "st": 10,
        "ord": "王 (ngọc) trái → 刂 (đao) giữa → 王 (ngọc) phải",
        "rad": "王 (vương/ngọc – vua, ngọc)",
        "mean": "ca (làm việc), lớp, nhóm",
        "tip": "Hai chữ 王 (viên ngọc quý) đặt hai bên, ở giữa là 刂(con dao) dùng để CẮT, PHÂN CHIA ngọc thành từng phần đều nhau → nghĩa PHÂN thành từng NHÓM, từng CA làm việc, từng LỚP học.",
        "cf": "斑 (bān – \"đốm, vết\", cũng có hai chữ 王 nhưng ở giữa là 文 chứ không phải 刂)",
        "w": "下班 / 上班 / 班级"
      }
    ],
    "colloFull": [
      {
        "zh": "下班休息",
        "py": "xiàbān xiūxi",
        "vn": "tan làm rồi nghỉ"
      },
      {
        "zh": "几点下班",
        "py": "jǐ diǎn xiàbān",
        "vn": "mấy giờ tan làm"
      },
      {
        "zh": "下班做饭",
        "py": "xiàbān zuò fàn",
        "vn": "tan làm về nấu cơm"
      },
      {
        "zh": "不下班",
        "py": "bù xiàbān",
        "vn": "chưa tan làm"
      }
    ],
    "patterns": [
      {
        "s": "下班 + động từ",
        "m": "Tan làm rồi làm gì: 下班做饭"
      },
      {
        "s": "下班 (tan làm) ↔ 上班 (đi làm)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tan làm rồi tôi về nhà nấu cơm.",
        "answer": "下班我在家做饭。",
        "answerPy": "Xiàbān wǒ zài jiā zuò fàn.",
        "note": "下班 rồi mới làm việc tiếp theo.",
        "pair": "在……做饭"
      },
      {
        "promptLang": "vi",
        "prompt": "Hôm nay bố tôi không tan làm.",
        "answer": "今天我爸爸不下班。",
        "answerPy": "Jīntiān wǒ bàba bú xiàbān.",
        "note": "不下班 — chưa tan làm.",
        "pair": "不 + V"
      }
    ]
  },
  {
    "n": 17,
    "zh": "新",
    "py": "xīn",
    "pos": "Tính từ",
    "vn": "mới",
    "hv": "tân",
    "em": "✨",
    "lesson": 3,
    "ex_zh": "这是你的新电脑吗？",
    "ex_py": "Zhè shì nǐ de xīn diànnǎo ma?",
    "ex_vn": "Đây là máy tính mới của em à?",
    "exList": [
      {
        "zh": "这是你的新电脑吗？",
        "py": "Zhè shì nǐ de xīn diànnǎo ma?",
        "vn": "Đây là máy tính mới của em à?"
      }
    ],
    "hanzi": [
      {
        "c": "新",
        "p": "xīn",
        "type": "左右结构 · Trái-phải",
        "st": 13,
        "ord": "亲 (thân) trái → 斤 (cân/rìu) phải",
        "rad": "斤 (cân – cái rìu)",
        "mean": "mới",
        "tip": "亲 (cây non mới trồng, gần gũi) đứng cạnh 斤 (cái rìu, dùng để chặt, đẽo gỗ) → dùng rìu đẽo gỗ MỚI, tạo ra vật dụng MỚI → nghĩa MỚI.",
        "cf": "亲 (qīn – \"thân thiết, cha mẹ\", chính là phần trái của 新 nhưng đứng riêng không có bộ 斤)",
        "w": "新电脑 / 新年 / 新的"
      }
    ],
    "colloFull": [
      {
        "zh": "新电脑",
        "py": "xīn diànnǎo",
        "vn": "máy tính mới"
      },
      {
        "zh": "新同学",
        "py": "xīn tóngxué",
        "vn": "bạn học mới"
      },
      {
        "zh": "新老师",
        "py": "xīn lǎoshī",
        "vn": "giáo viên mới"
      },
      {
        "zh": "很新",
        "py": "hěn xīn",
        "vn": "rất mới"
      }
    ],
    "patterns": [
      {
        "s": "新 + danh từ",
        "m": "Cái gì mới: 新电脑"
      },
      {
        "s": "新 + danh từ chỉ người",
        "m": "Cũng dùng được cho người: 新同学, 新老师"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Đây là máy tính mới của tôi.",
        "answer": "这是我的新电脑。",
        "answerPy": "Zhè shì wǒ de xīn diànnǎo.",
        "note": "新 đứng trước danh từ làm định ngữ.",
        "pair": "这是……"
      },
      {
        "promptLang": "vi",
        "prompt": "Cô ấy là bạn học mới của chúng tôi.",
        "answer": "她是我们的新同学。",
        "answerPy": "Tā shì wǒmen de xīn tóngxué.",
        "note": "新 cũng dùng được cho người.",
        "pair": "是……"
      }
    ]
  },
  {
    "n": 18,
    "zh": "电脑",
    "py": "diànnǎo",
    "pos": "Danh từ",
    "vn": "máy tính, máy vi tính",
    "hv": "điện não",
    "em": "💻",
    "lesson": 3,
    "ex_zh": "这是你的新电脑吗？",
    "ex_py": "Zhè shì nǐ de xīn diànnǎo ma?",
    "ex_vn": "Đây là máy tính mới của em à?",
    "exList": [
      {
        "zh": "这是你的新电脑吗？",
        "py": "Zhè shì nǐ de xīn diànnǎo ma?",
        "vn": "Đây là máy tính mới của em à?"
      }
    ],
    "hanzi": [
      {
        "c": "脑",
        "p": "nǎo",
        "type": "左右结构 · Trái-phải (giản thể)",
        "st": 10,
        "ord": "月(nhục) trái → 恼(biến thể) phải",
        "rad": "月 (nhục – cơ thể)",
        "mean": "não, đầu óc",
        "tip": "月(bộ phận cơ thể) + phần biểu âm → bộ phận suy nghĩ trong đầu = NÃO; máy tính = \"điện não\" (bộ não điện tử).",
        "cf": "恼 (nǎo – \"phiền não\")",
        "w": "电脑 / 头脑"
      },
      {
        "c": "电",
        "p": "diàn",
        "type": "独体字 · Chữ đơn (tượng hình, biến thể của 申)",
        "st": 5,
        "ord": "曰 (khung ngoài) → 乚 (nét móc xuyên qua, tia chớp)",
        "rad": "电 (điện – tự thành bộ)",
        "mean": "điện",
        "tip": "Hình ảnh cách điệu của một TIA CHỚP xẹt ngang qua bầu trời (từ chữ 申 - tia sét) → nghĩa ĐIỆN; 电脑 (máy tính) nghĩa đen là \"não điện\".",
        "cf": "由 (yóu – \"từ, do\", hình dáng gần giống nhưng nét sổ xuyên thẳng ra ngoài phía trên thay vì móc câu phía dưới)",
        "w": "电脑 / 电话 / 电视"
      }
    ],
    "colloFull": [
      {
        "zh": "新电脑",
        "py": "xīn diànnǎo",
        "vn": "máy tính mới"
      },
      {
        "zh": "我的电脑",
        "py": "wǒ de diànnǎo",
        "vn": "máy tính của tôi"
      },
      {
        "zh": "一个电脑",
        "py": "yí gè diànnǎo",
        "vn": "một cái máy tính"
      },
      {
        "zh": "他的电脑",
        "py": "tā de diànnǎo",
        "vn": "máy tính của anh ấy"
      }
    ],
    "patterns": [
      {
        "s": "新 + 电脑",
        "m": "Máy tính mới"
      },
      {
        "s": "电 + 脑",
        "m": "Bộ óc (脑) chạy bằng điện (电)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Máy tính của tôi rất đẹp.",
        "answer": "我的电脑很好看。",
        "answerPy": "Wǒ de diànnǎo hěn hǎokàn.",
        "note": "我的电脑 — máy tính của tôi.",
        "pair": "很 + Adj"
      },
      {
        "promptLang": "vi",
        "prompt": "Đây có phải máy tính của anh ấy không?",
        "answer": "这是他的电脑吗？",
        "answerPy": "Zhè shì tā de diànnǎo ma?",
        "note": "他的电脑 — máy tính của anh ấy.",
        "pair": "……吗？"
      }
    ]
  },
  {
    "n": 19,
    "zh": "真",
    "py": "zhēn",
    "pos": "Phó từ",
    "vn": "thật, thực sự",
    "hv": "chân",
    "em": "💯",
    "lesson": 3,
    "ex_zh": "真好看！",
    "ex_py": "Zhēn hǎokàn!",
    "ex_vn": "Đẹp thật đấy!",
    "exList": [
      {
        "zh": "真好看！",
        "py": "Zhēn hǎokàn!",
        "vn": "Đẹp thật đấy!"
      }
    ],
    "hanzi": [
      {
        "c": "真",
        "p": "zhēn",
        "type": "上下结构 · Trên-dưới",
        "st": 10,
        "ord": "十 → 目 (mắt) → 八 (đáy)",
        "rad": "目 (mục – con mắt)",
        "mean": "thật, chân thật",
        "tip": "Bên trong có chữ 目 (con mắt) nhìn thẳng, phía trên có nét 十 như đang tập trung quan sát, phía dưới có 八 như đôi chân trụ vững → MẮT NHÌN THẬT KỸ, đứng vững để thấy điều CHÂN THẬT → nghĩa THẬT.",
        "cf": "直 (zhí – \"thẳng\", cũng chứa 目 ở giữa nhưng phần dưới là 十, không có 八 tách hai bên)",
        "w": "真好看 / 真的 / 认真"
      }
    ],
    "colloFull": [
      {
        "zh": "真好",
        "py": "zhēn hǎo",
        "vn": "tốt thật"
      },
      {
        "zh": "真好看",
        "py": "zhēn hǎokàn",
        "vn": "đẹp thật"
      },
      {
        "zh": "真忙",
        "py": "zhēn máng",
        "vn": "bận thật"
      },
      {
        "zh": "真高兴",
        "py": "zhēn gāoxìng",
        "vn": "vui thật"
      }
    ],
    "patterns": [
      {
        "s": "真 + tính từ",
        "m": "Cảm thán, không cần 了: 真好看！"
      },
      {
        "s": "真 (cảm thán) ≠ 很 (kể lại) — 真好看！/ 很好看。"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Đẹp thật!",
        "answer": "真好看！",
        "answerPy": "Zhēn hǎokàn!",
        "note": "真 dùng cho câu cảm thán, không cần 了.",
        "pair": "真 + Adj"
      },
      {
        "promptLang": "vi",
        "prompt": "Hôm nay bận thật!",
        "answer": "今天真忙！",
        "answerPy": "Jīntiān zhēn máng!",
        "note": "真忙！là cảm thán; 很忙。là câu kể.",
        "pair": "真 + Adj"
      }
    ]
  },
  {
    "n": 20,
    "zh": "好看",
    "py": "hǎokàn",
    "pos": "Tính từ",
    "vn": "đẹp",
    "hv": "hảo khán",
    "em": "😍",
    "lesson": 3,
    "ex_zh": "真好看！",
    "ex_py": "Zhēn hǎokàn!",
    "ex_vn": "Đẹp thật đấy!",
    "exList": [
      {
        "zh": "真好看！",
        "py": "Zhēn hǎokàn!",
        "vn": "Đẹp thật đấy!"
      }
    ],
    "hanzi": [
      {
        "c": "好",
        "p": "hǎo",
        "type": "左右结构 · Trái-phải",
        "st": 6,
        "ord": "女 (nữ) trái → 子 (tử) phải",
        "rad": "女 (nữ – phụ nữ)",
        "mean": "tốt, đẹp, khoẻ",
        "tip": "女 (người mẹ) bên cạnh 子 (đứa con) → hình ảnh MẸ và CON bên nhau, một cảnh tượng TỐT ĐẸP, hạnh phúc → nghĩa TỐT, ĐẸP.",
        "cf": "如 (rú – \"như, giống như\", cũng có bộ 女 bên trái nhưng bên phải là 口 chứ không phải 子)",
        "w": "好看 / 你好 / 很好"
      },
      {
        "c": "看",
        "p": "kàn",
        "type": "上下结构 · Trên-dưới",
        "st": 9,
        "ord": "手 (thủ, biến thể) trên → 目 (mục - mắt) dưới",
        "rad": "目 (mục – con mắt)",
        "mean": "xem, nhìn",
        "tip": "Bàn TAY (手) che phía trên con MẮT (目) → động tác lấy tay che nắng để NHÌN XA cho rõ → nghĩa XEM, NHÌN.",
        "cf": "着 (zhe/zháo – trợ từ/\"chạm\", phần trên cũng giống 手 biến thể nhưng bên dưới nối liền khác cấu trúc, dễ nhầm khi viết nhanh)",
        "w": "好看 / 看书 / 看见"
      }
    ],
    "colloFull": [
      {
        "zh": "真好看",
        "py": "zhēn hǎokàn",
        "vn": "đẹp thật"
      },
      {
        "zh": "很好看",
        "py": "hěn hǎokàn",
        "vn": "rất đẹp"
      },
      {
        "zh": "不好看",
        "py": "bù hǎokàn",
        "vn": "không đẹp"
      },
      {
        "zh": "好看的电脑",
        "py": "hǎokàn de diànnǎo",
        "vn": "cái máy tính đẹp"
      }
    ],
    "patterns": [
      {
        "s": "真 / 很 + 好看",
        "m": "Đẹp — nói về vật, người, phim, sách"
      },
      {
        "s": "好 + 看",
        "m": "Nhìn (看) thấy tốt (好) — cùng kiểu với 好吃"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Máy tính mới này đẹp thật!",
        "answer": "这个新电脑真好看！",
        "answerPy": "Zhège xīn diànnǎo zhēn hǎokàn!",
        "note": "好 + 看 — nhìn thấy tốt, tức là đẹp.",
        "pair": "真 + Adj"
      },
      {
        "promptLang": "vi",
        "prompt": "Cái này không đẹp.",
        "answer": "这个不好看。",
        "answerPy": "Zhège bù hǎokàn.",
        "note": "Phủ định tính từ thì bỏ 很, dùng 不.",
        "pair": "不 + Adj"
      }
    ]
  },
  {
    "n": 21,
    "zh": "喜欢",
    "py": "xǐhuan",
    "pos": "Động từ",
    "vn": "thích",
    "hv": "hỉ hoan",
    "em": "😊",
    "lesson": 3,
    "ex_zh": "我也很喜欢它。",
    "ex_py": "Wǒ yě hěn xǐhuan tā.",
    "ex_vn": "Em cũng rất thích nó.",
    "exList": [
      {
        "zh": "我也很喜欢它。",
        "py": "Wǒ yě hěn xǐhuan tā.",
        "vn": "Em cũng rất thích nó."
      }
    ],
    "hanzi": [
      {
        "c": "喜",
        "p": "xǐ",
        "type": "上下结构 · Trên-dưới",
        "st": 12,
        "ord": "士 → 冖 → 豆 (dạng cái trống) → 口 (miệng) dưới cùng",
        "rad": "口 (khẩu – miệng)",
        "mean": "vui mừng, thích",
        "tip": "Phần trên tượng hình cái TRỐNG được đánh vang lên, phía dưới là 口 (miệng) đang CA HÁT → cảnh đánh trống, ca hát VUI MỪNG → nghĩa VUI, THÍCH.",
        "cf": "嘉 (jiā – \"tốt đẹp\", cấu trúc phần trên khá giống 喜, dễ nhầm khi viết nhanh)",
        "w": "喜欢 / 恭喜 / 欢喜"
      },
      {
        "c": "欢",
        "p": "huan",
        "type": "左右结构 · Trái-phải",
        "st": 6,
        "ord": "又 (hựu, giản thể) trái → 欠 (khiếm - ngáp/thở) phải",
        "rad": "欠 (khiếm – hà hơi, thở dốc)",
        "mean": "vui vẻ, hoan hỉ",
        "tip": "又 (bàn tay, lặp lại động tác) đứng cạnh 欠 (miệng mở to như hà hơi, reo hò) → vỗ tay REO HÒ VUI VẺ → nghĩa VUI, dùng trong 喜欢 (thích).",
        "cf": "汉 (hàn – \"người Hán, chữ Hán\", cũng có 又 bên phải nhưng bộ 氵bên trái thay vì 欠)",
        "w": "喜欢 / 欢迎 / 欢乐"
      }
    ],
    "colloFull": [
      {
        "zh": "喜欢做饭",
        "py": "xǐhuan zuò fàn",
        "vn": "thích nấu ăn"
      },
      {
        "zh": "喜欢中国菜",
        "py": "xǐhuan Zhōngguó cài",
        "vn": "thích món Trung Quốc"
      },
      {
        "zh": "很喜欢",
        "py": "hěn xǐhuan",
        "vn": "rất thích"
      },
      {
        "zh": "不喜欢",
        "py": "bù xǐhuan",
        "vn": "không thích"
      }
    ],
    "patterns": [
      {
        "s": "喜欢 + danh từ / động từ",
        "m": "Thích cái gì, thích làm gì"
      },
      {
        "s": "喜 + 欢",
        "m": "Hai chữ đều mang nghĩa vui thích"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tôi rất thích nấu ăn.",
        "answer": "我很喜欢做饭。",
        "answerPy": "Wǒ hěn xǐhuan zuò fàn.",
        "note": "喜欢 + động từ — thích làm gì.",
        "pair": "喜欢 + V"
      },
      {
        "promptLang": "vi",
        "prompt": "Chị tôi không thích ăn sủi cảo.",
        "answer": "我姐姐不喜欢吃饺子。",
        "answerPy": "Wǒ jiějie bù xǐhuan chī jiǎozi.",
        "note": "不喜欢 — không thích.",
        "pair": "不 + V"
      }
    ]
  },
  {
    "n": 22,
    "zh": "它",
    "py": "tā",
    "pos": "Đại từ",
    "vn": "nó",
    "hv": "tha",
    "em": "📦",
    "lesson": 3,
    "ex_zh": "我也很喜欢它。",
    "ex_py": "Wǒ yě hěn xǐhuan tā.",
    "ex_vn": "Em cũng rất thích nó.",
    "exList": [
      {
        "zh": "我也很喜欢它。",
        "py": "Wǒ yě hěn xǐhuan tā.",
        "vn": "Em cũng rất thích nó."
      }
    ],
    "hanzi": [
      {
        "c": "它",
        "p": "tā",
        "type": "上下结构 · Trên-dưới",
        "st": 5,
        "ord": "宀 (miên - mái nhà) trên → 匕 (chuỷ) dưới",
        "rad": "宀 (miên – mái nhà)",
        "mean": "nó (đại từ chỉ vật, con vật)",
        "tip": "宀(mái nhà) che trên một hình 匕(giống con vật nhỏ cuộn mình) trú ẩn bên trong → nguyên nghĩa cổ chỉ con vật trong hang, sau dùng làm đại từ chỉ vật/con vật không phải người → nghĩa NÓ.",
        "cf": "宅 (zhái – \"nhà ở\", cũng bộ 宀 trên nhưng bên dưới là 乇 khác 匕)",
        "w": "喜欢它 / 它们 / 它是"
      }
    ],
    "colloFull": [
      {
        "zh": "喜欢它",
        "py": "xǐhuan tā",
        "vn": "thích nó"
      },
      {
        "zh": "它是",
        "py": "tā shì",
        "vn": "nó là"
      },
      {
        "zh": "它的名字",
        "py": "tā de míngzi",
        "vn": "tên của nó"
      }
    ],
    "patterns": [
      {
        "s": "它 thay cho ĐỒ VẬT hoặc con vật, không thay cho người"
      },
      {
        "s": "他 (nam) · 她 (nữ) · 它 (vật) — ba chữ đọc giống nhau là tā"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tôi rất thích nó.",
        "answer": "我很喜欢它。",
        "answerPy": "Wǒ hěn xǐhuan tā.",
        "note": "它 thay cho đồ vật, không thay cho người.",
        "pair": "喜欢 + N"
      },
      {
        "promptLang": "vi",
        "prompt": "Máy tính này mới, nó rất đẹp.",
        "answer": "这个电脑很新，它很好看。",
        "answerPy": "Zhège diànnǎo hěn xīn, tā hěn hǎokàn.",
        "note": "他 · 她 · 它 đọc giống nhau là tā.",
        "pair": "很 + Adj"
      }
    ]
  }
];

var wuData = [
  {img:'📅',label:'2025 年 5 月',py:'èr líng èr wǔ nián wǔ yuè',letter:'A'},
  {img:'🈷️',label:'星期一',py:'Xīngqīyī',letter:'B'},
  {img:'💻',label:'电脑',py:'diànnǎo',letter:'C'},
  {img:'🍳',label:'做饭',py:'zuò fàn',letter:'D'},
  {img:'😴',label:'休息',py:'xiūxi',letter:'E'},
  {img:'🥟',label:'饺子',py:'jiǎozi',letter:'F'},
];

// ══════════════════════════════════════════
// LUYỆN TẬP SÁCH BÀI TẬP (New HSK Course 1 Workbook, Bài 5: Ngữ âm + Mô phỏng đề thi)
// ══════════════════════════════════════════
var wbData = {
  sections: [
    {
      title: 'Ngữ âm',
      audio: '/audio/hsk1v3-bai-5/wb-yuyin.mp3',
      blocks: [
        { type: 'table', caption: 'Biến điệu của "不" (bù)',
          rows: [
            ['不 (bù) + shì (是)', '→  bú + shì (不是)'],
            ['不 (bù) + huì (会)', '→  bú + huì (不会)'],
            ['不 (bù) + dà (大)', '→  bú + dà (不大)'],
            ['不 (bù) + duì (对)', '→  bú + duì (不对)']
          ],
          note: '"不 (bù)" khi đứng một mình hoặc đứng trước âm tiết thanh 1, 2, 3 thì không đổi thanh. Khi đứng trước âm tiết thanh 4 thì đọc thành thanh 2: 不 (bù) + thanh 4 → 不 (bú) + thanh 4.' },
        { type: 'table', caption: 'Biến điệu của "一" (yī) — trường hợp (1): trước thanh 1/2/3, đọc thành thanh 4',
          rows: [
            ['yī (一) + xiē (些)', '→  yì + xiē (一些)'],
            ['yī (一) + nián (年)', '→  yì + nián (一年)'],
            ['yī (一) + kǒu (口)', '→  yì + kǒu (一口)']
          ] },
        { type: 'table', caption: 'Biến điệu của "一" (yī) — trường hợp (2): trước thanh 4, đọc thành thanh 2',
          rows: [
            ['yī (一) + gè (个)', '→  yí + gè (一个)'],
            ['yī (一) + rì (日)', '→  yí + rì (一日)'],
            ['yī (一) + suì (岁)', '→  yí + suì (一岁)']
          ],
          note: '"一 (yī)" khi đứng một mình hoặc biểu thị số thứ tự thì không đổi thanh. Có 2 trường hợp cần biến điệu: trước thanh 1/2/3 đọc thành thanh 4; trước thanh 4 đọc thành thanh 2.' }
      ]
    },
    {
      title: 'Nghe và đọc luyện tập',
      audio: '/audio/hsk1v3-bai-5/wb-tingdu.mp3',
      blocks: [
        { type: 'tonemc', caption: 'Nghe và chọn âm tiết nghe được, đọc to',
          items: [
            {before:'', after:'', answer:'gē', options:['gē','kē']},
            {before:'', after:'', answer:'qiǎng', options:['jiǎng','qiǎng']},
            {before:'', after:'', answer:'sóng', options:['cóng','sóng']},
            {before:'', after:'', answer:'nìng', options:['nìng','lìng']},
            {before:'', after:'', answer:'jiā', options:['jiā','xiā']},
            {before:'', after:'', answer:'cuàn', options:['zuàn','cuàn']},
            {before:'', after:'', answer:'tōu', options:['tōu','gōu']},
            {before:'', after:'', answer:'shí', options:['zhí','shí']}
          ] },
        { type: 'wordlist', caption: 'Nghe và đọc theo, chú ý biến điệu của "不"',
          items: ['búyào', 'bú kèqi', 'bù hē', 'bù lái', 'bù lěng', 'bù zhīdào', 'bù xuéxí', 'bù hǎotīng'] },
        { type: 'wordlist', caption: 'Nghe và đọc theo, chú ý biến điệu của "一"',
          items: ['yìtiān', 'yì yuán', 'yìdiǎnr', 'yíbàn', 'yì chē', 'yì rén', 'yì wǎn', 'yíxià'] }
      ]
    },
    {
      title: 'Mô phỏng đề thi',
      audio: '/audio/hsk1v3-bai-5/wb-mocktest.mp3',
      blocks: [
        { type: 'mocktest',
          listening: [
            { n: 1, options: [
              {key:'A', img:'/images/hsk1v3-bai-5-wb/q1a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-5-wb/q1b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-5-wb/q1c.jpg'}
            ], answer: 'C' },
            { n: 2, options: [
              {key:'A', img:'/images/hsk1v3-bai-5-wb/q2a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-5-wb/q2b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-5-wb/q2c.jpg'}
            ], answer: 'A' },
            { n: 3, options: [
              {key:'A', img:'/images/hsk1v3-bai-5-wb/q3a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-5-wb/q3b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-5-wb/q3c.jpg'}
            ], answer: 'B' },
            { n: 4, options: [
              {key:'A', text:'我不会', py:'wǒ bú huì'},
              {key:'B', text:'我吃饺子', py:'wǒ chī jiǎozi'},
              {key:'C', text:'做面条儿', py:'zuò miàntiáor'}
            ], answer: 'A' },
            { n: 5, options: [
              {key:'A', text:'休息', py:'xiūxi'},
              {key:'B', text:'星期四', py:'Xīngqīsì'},
              {key:'C', text:'五口人', py:'wǔ kǒu rén'}
            ], answer: 'B' },
            { n: 6, options: [
              {key:'A', img:'/images/hsk1v3-bai-5-wb/q6to8_a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-5-wb/q6to8_b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-5-wb/q6to8_c.jpg'},
              {key:'D', img:'/images/hsk1v3-bai-5-wb/q6to8_d.jpg'}
            ], answer: 'C' },
            { n: 7, options: [
              {key:'A', img:'/images/hsk1v3-bai-5-wb/q6to8_a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-5-wb/q6to8_b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-5-wb/q6to8_c.jpg'},
              {key:'D', img:'/images/hsk1v3-bai-5-wb/q6to8_d.jpg'}
            ], answer: 'B' },
            { n: 8, options: [
              {key:'A', img:'/images/hsk1v3-bai-5-wb/q6to8_a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-5-wb/q6to8_b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-5-wb/q6to8_c.jpg'},
              {key:'D', img:'/images/hsk1v3-bai-5-wb/q6to8_d.jpg'}
            ], answer: 'D' },
            { n: 9, options: [
              {key:'A', text:'菜', py:'cài'},
              {key:'B', text:'饺子', py:'jiǎozi'},
              {key:'C', text:'面条儿', py:'miàntiáor'}
            ], answer: 'B' },
            { n: 10, options: [
              {key:'A', text:'4号', py:'sì hào'},
              {key:'B', text:'10号', py:'shí hào'},
              {key:'C', text:'14号', py:'shísì hào'}
            ], answer: 'B' }
          ],
          reading: [
            { n: 11, prompt: '王老师，再见。', promptPy: 'Wáng lǎoshī, zàijiàn.', options: [
              {key:'A', img:'/images/hsk1v3-bai-5-wb/q11to13_a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-5-wb/q11to13_b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-5-wb/q11to13_c.jpg'},
              {key:'D', img:'/images/hsk1v3-bai-5-wb/q11to13_d.jpg'}
            ], answer: 'D' },
            { n: 12, prompt: '今天我休息。', promptPy: 'Jīntiān wǒ xiūxi.', options: [
              {key:'A', img:'/images/hsk1v3-bai-5-wb/q11to13_a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-5-wb/q11to13_b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-5-wb/q11to13_c.jpg'},
              {key:'D', img:'/images/hsk1v3-bai-5-wb/q11to13_d.jpg'}
            ], answer: 'C' },
            { n: 13, prompt: '我有一个儿子，他今年7岁。', promptPy: 'Wǒ yǒu yí gè érzi, tā jīnnián 7 suì.', options: [
              {key:'A', img:'/images/hsk1v3-bai-5-wb/q11to13_a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-5-wb/q11to13_b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-5-wb/q11to13_c.jpg'},
              {key:'D', img:'/images/hsk1v3-bai-5-wb/q11to13_d.jpg'}
            ], answer: 'B' },
            { n: 14, prompt: '你去超市买什么？', promptPy: 'Nǐ qù chāoshì mǎi shénme?', options: [
              {key:'A', text:'好的，谢谢！', py:'Hǎo de, xièxie!'},
              {key:'B', text:'我不会。', py:'Wǒ bú huì.'},
              {key:'C', text:'面条儿。', py:'Miàntiáor.'},
              {key:'D', text:'5月6号。', py:'Wǔ yuè liù hào.'}
            ], answer: 'C' },
            { n: 15, prompt: '你会做饭吗？', promptPy: 'Nǐ huì zuò fàn ma?', options: [
              {key:'A', text:'好的，谢谢！', py:'Hǎo de, xièxie!'},
              {key:'B', text:'我不会。', py:'Wǒ bú huì.'},
              {key:'C', text:'面条儿。', py:'Miàntiáor.'},
              {key:'D', text:'5月6号。', py:'Wǔ yuè liù hào.'}
            ], answer: 'B' },
            { n: 16, prompt: '今天几号？', promptPy: 'Jīntiān jǐ hào?', options: [
              {key:'A', text:'好的，谢谢！', py:'Hǎo de, xièxie!'},
              {key:'B', text:'我不会。', py:'Wǒ bú huì.'},
              {key:'C', text:'面条儿。', py:'Miàntiáor.'},
              {key:'D', text:'5月6号。', py:'Wǔ yuè liù hào.'}
            ], answer: 'D' },
            { n: 17, prompt: '今天（　）号？', promptPy: 'Jīntiān ( ) hào?', options: [
              {key:'A', text:'几', py:'jǐ'},
              {key:'B', text:'好看', py:'hǎokàn'},
              {key:'C', text:'名字', py:'míngzi'}
            ], answer: 'A' },
            { n: 18, prompt: '男：你的新电脑真（　）！\n女：谢谢，我也很喜欢。', promptPy: 'Nǐ de xīn diànnǎo zhēn ( )! / Xièxie, wǒ yě hěn xǐhuan.', options: [
              {key:'A', text:'几', py:'jǐ'},
              {key:'B', text:'好看', py:'hǎokàn'},
              {key:'C', text:'名字', py:'míngzi'}
            ], answer: 'B' },
            { n: 19, prompt: '我非常喜欢我的中文名字。\n★说话人喜欢什么？', promptPy: 'Wǒ fēicháng xǐhuan wǒ de Zhōngwén míngzi.', options: [
              {key:'A', text:'新电脑', py:'xīn diànnǎo'},
              {key:'B', text:'中国菜', py:'Zhōngguó cài'},
              {key:'C', text:'中文名字', py:'Zhōngwén míngzi'}
            ], answer: 'C' },
            { n: 20, prompt: '今天8号，你几号休息？\n★说话人想知道什么？', promptPy: 'Jīntiān 8 hào, nǐ jǐ hào xiūxi?', options: [
              {key:'A', text:'今天几号', py:'jīntiān jǐ hào'},
              {key:'B', text:'哪天休息', py:'nǎ tiān xiūxi'},
              {key:'C', text:'星期几上班', py:'xīngqī jǐ shàngbān'}
            ], answer: 'B' }
          ]
        }
      ]
    }
  ]
};

var dialogData = [
  {scene:'刘明和王一雪聊天 · Hỏi ngày tháng',
   preQuiz:[
     {q:'今天几月几号？',opts:['9月8号','8月9号','9月18号'],ans:0},
     {q:'今天星期几？',opts:['星期一','星期日','星期六'],ans:1},
     {q:'今天男的要做什么？',opts:['休息','上班','做饭'],ans:0},
   ],
   lines:[
     {sp:1,zh:'今天几号？',py:'Jīntiān jǐ hào?',vn:'Hôm nay ngày mấy anh nhỉ?'},
     {sp:0,zh:'今天9月8号。',py:'Jīntiān jiǔ yuè bā hào.',vn:'Hôm nay là ngày 8 tháng 9.'},
     {sp:1,zh:'星期几？',py:'Xīngqī jǐ?',vn:'Thứ mấy vậy?'},
     {sp:0,zh:'星期日。今天我休息。',py:'Xīngqīrì. Jīntiān wǒ xiūxi.',vn:'Chủ nhật. Hôm nay anh được nghỉ.'},
   ]},
  {scene:'王一雪和杨同乐聊天 · Hỏi chuyện nấu ăn',
   preQuiz:[
     {q:'杨同乐会做饭吗？',opts:['会','不会','不知道'],ans:0},
     {q:'杨同乐会做什么菜？',opts:['面条儿、饺子','米饭、汤','水果沙拉'],ans:0},
   ],
   lines:[
     {sp:0,zh:'你会做饭吗？',py:'Nǐ huì zuò fàn ma?',vn:'Em có biết nấu ăn không?'},
     {sp:1,zh:'我会做。',py:'Wǒ huì zuò.',vn:'Em biết.'},
     {sp:0,zh:'你会做什么？',py:'Nǐ huì zuò shénme?',vn:'Em biết nấu món gì?'},
     {sp:1,zh:'我会做面条儿、饺子，也会做一些菜。星期天我也做饭。',py:'Wǒ huì zuò miàntiáor, jiǎozi, yě huì zuò yìxiē cài. Xīngqītiān wǒ yě zuò fàn.',vn:'Em biết nấu mì, sủi cảo và biết chế biến một số món ăn khác. Chủ nhật em cũng nấu ăn.'},
   ]},
  {scene:'王一雪和杨同乐下班聊天 · Khen máy tính mới',
   preQuiz:[
     {q:'这台新电脑是谁的？',opts:['杨同乐的','王一雪的','别人的'],ans:0},
     {q:'王一雪觉得这台电脑怎么样？',opts:['真好看','不好看','太贵了'],ans:0},
   ],
   lines:[
     {sp:0,zh:'同乐，下班吗？',py:'Tónglè, xiàbān ma?',vn:'Đồng Lạc, em tan làm chưa?'},
     {sp:1,zh:'下班。',py:'Xiàbān.',vn:'Em tan làm rồi.'},
     {sp:0,zh:'这是你的新电脑吗？',py:'Zhè shì nǐ de xīn diànnǎo ma?',vn:'Đây là máy tính mới của em à?'},
     {sp:1,zh:'是的，是我的新电脑。',py:'Shì de, shì wǒ de xīn diànnǎo.',vn:'Đúng vậy, đây là máy tính mới của em.'},
     {sp:0,zh:'真好看！',py:'Zhēn hǎokàn!',vn:'Đẹp thật đấy!'},
     {sp:1,zh:'我也很喜欢它。',py:'Wǒ yě hěn xǐhuan tā.',vn:'Em cũng rất thích nó.'},
   ]},
];

// ══════════════════════════════════════════
// PHẦN 1 · GHÉP TỪ (Collocation)
// ══════════════════════════════════════════
var matchData = [
  {left:'星', right:'期'},
  {left:'休', right:'息'},
  {left:'做', right:'饭'},
  {left:'面', right:'条儿'},
  {left:'下', right:'班'},
  {left:'喜', right:'欢'},
  {left:'好', right:'看'},
  {left:'电', right:'脑'},
];

// ══════════════════════════════════════════
// PHẦN 2 · NGHE — nghe câu (giọng đọc máy) → chọn đáp án
// ══════════════════════════════════════════
var listenData = [
  {audio:'今天9月8号，星期日。',
   questions:[
     {q:'Hôm nay là ngày nào?', opts:['Ngày 9 tháng 8', 'Ngày 8 tháng 9', 'Ngày 18 tháng 9'], ans:1, exp:'9月8号: tháng nói trước, ngày nói sau → ngày 8 tháng 9.'},
   ]},
  {audio:'今天星期六，我休息。',
   questions:[
     {q:'Hôm nay người nói làm gì?', opts:['Nghỉ ngơi', 'Đi làm', 'Nấu cơm'], ans:0, exp:'休息 = nghỉ ngơi.'},
   ]},
  {audio:'我会做面条儿，不会做饺子。',
   questions:[
     {q:'Người nói KHÔNG biết làm món gì?', opts:['面条儿', '饺子', '菜'], ans:1, exp:'不会做饺子 = không biết làm sủi cảo.'},
   ]},
  {audio:'这是我的新电脑，真好看！',
   questions:[
     {q:'Người nói đang nói về cái gì?', opts:['Một món ăn', 'Bạn gái', 'Máy tính mới'], ans:2, exp:'新电脑 = máy tính mới; 真好看 = đẹp thật.'},
   ]},
  {audio:'你会做饭吗？我会做，星期天我也做饭。',
   questions:[
     {q:'Chủ nhật người thứ hai làm gì?', opts:['Nấu cơm', 'Nghỉ, không nấu', 'Đi làm'], ans:0, exp:'星期天我也做饭 = Chủ nhật tôi cũng nấu cơm.'},
   ]},
  {audio:'今天几号？今天十月一号。',
   questions:[
     {q:'Bạn nghe được ngày nào?', opts:['1月10号', '10月7号', '10月1号'], ans:2, exp:'十月一号 = ngày 1 tháng 10 (tháng trước, ngày sau).'},
   ]},
  {audio:'我妹妹今年八岁，她不会做饭。',
   questions:[
     {q:'Em gái năm nay bao nhiêu tuổi?', opts:['18 tuổi', '8 tuổi', '10 tuổi'], ans:1, exp:'八岁 = 8 tuổi; nói tuổi không cần 是.'},
   ]},
];

// ══════════════════════════════════════════
// PHẦN 3a · ĐIỀN TỪ
// ══════════════════════════════════════════
var fillData = [
  {pre:'今天', blank:'6月22号', post:'。', hint:'(ngày 22 tháng 6)', ans:'6月22号', exp:'Ngày tháng nói từ lớn đến nhỏ: tháng trước, ngày sau (6月22号); câu nói ngày tháng không cần 是.'},
  {pre:'杨同乐有一个', blank:'新', post:'电脑。', hint:'(mới)', ans:'新', exp:'新 đứng ngay trước danh từ: 新电脑 = máy tính mới (không nói 电脑新 như tiếng Việt).'},
  {pre:'王一雪：你会做这两个', blank:'菜', post:'吗？', hint:'(món ăn)', ans:'菜', exp:'两个菜 = hai món ăn; trước lượng từ 个 dùng 两, không dùng 二.'},
  {pre:'你的电脑', blank:'真', post:'好看！', hint:'(thật, thực sự)', ans:'真', exp:'真 + tính từ = … thật!, dùng để cảm thán: 真好看 = đẹp thật!'},
  {pre:'我也很', blank:'喜欢', post:'它。', hint:'(thích)', ans:'喜欢', exp:'很 đứng trước 喜欢: 很喜欢它 = rất thích nó.'},
  {pre:'今天几号？今天9月8', blank:'号', post:'。', hint:'(ngày — đứng sau số ngày)', ans:'号', exp:'号 = ngày (mùng) trong khẩu ngữ, đứng sau số ngày: 9月8号.'},
  {pre:'你', blank:'会', post:'做饭吗？', hint:'(biết — kỹ năng học được)', ans:'会', exp:'会 + động từ = biết làm gì (kỹ năng có được nhờ học): 会做饭 = biết nấu cơm.'},
  {pre:'我会做面条儿、', blank:'饺子', post:'。', hint:'(sủi cảo)', ans:'饺子', exp:'会做 + món ăn: 会做面条儿、饺子.'},
  {pre:'Hôm nay Chủ nhật (khẩu ngữ): “今天', blank:'星期天', post:'。”', hint:'(Chủ nhật — cách nói khẩu ngữ)', ans:'星期天', exp:'Chủ nhật là 星期天 / 星期日, không nói 星期七 — lỗi suy từ 星期一…星期六.'},
  {pre:'Hôm nay không phải ngày 8: “今天', blank:'不是', post:'8号。”', hint:'(không phải)', ans:'不是', exp:'Câu ngày tháng bình thường không cần 是, nhưng phủ định thì phải nói 不是, không nói 今天不8号.'},
  {pre:'Tôi không biết nấu cơm: “我', blank:'不会', post:'做饭。”', hint:'(không biết)', ans:'不会', exp:'Phủ định của 会 là 不会; không dùng 没有 trước 会.'},
  {pre:'A：你妹妹几岁？B：我妹妹十二', blank:'岁', post:'。', hint:'(tuổi)', ans:'岁', exp:'Nói tuổi không cần 是: 我妹妹十二岁 — học sinh Việt hay thêm 是 vì tiếng Việt nói “là 12 tuổi”.'},
  {pre:'Hôm nay Chủ nhật, tôi được nghỉ: “今天我', blank:'休息', post:'。”', hint:'(nghỉ ngơi)', ans:'休息', exp:'Từ chỉ thời gian 今天 đứng đầu câu hoặc sau chủ ngữ, trước động từ 休息.'},
  {pre:'王一雪：同乐，', blank:'下班', post:'吗？', hint:'(tan làm)', ans:'下班', exp:'下班 = tan làm; hỏi có/không thì thêm 吗 cuối câu.'},
  {pre:'我会做面条儿，也会做', blank:'一些', post:'菜。', hint:'(một số, một ít)', ans:'一些', exp:'一些 + danh từ = một số…: 一些菜 = một số món ăn.'},
  {pre:'今天十', blank:'月', post:'一号，星期三。', hint:'(tháng)', ans:'月', exp:'Tháng đứng trước ngày, thứ đứng cuối: 十月一号，星期三.'},
];

// ══════════════════════════════════════════
// PHẦN 3b · SẮP XẾP
// ══════════════════════════════════════════
var sortData = [
  {words:['今天','几','号','？'], ans:'今天几号？', audio:'今天几号？'},
  {words:['今天','我','休息','。'], ans:'今天我休息。', audio:'今天我休息。', alt:['我今天休息。']},
  {words:['你','会','做饭','吗','？'], ans:'你会做饭吗？', audio:'你会做饭吗？'},
  {words:['我','会','做','面条儿','。'], ans:'我会做面条儿。', audio:'我会做面条儿。'},
  {words:['这','是','你','的','新','电脑','吗','？'], ans:'这是你的新电脑吗？', audio:'这是你的新电脑吗？'},
  {words:['我','也','很','喜欢','它','。'], ans:'我也很喜欢它。', audio:'我也很喜欢它。'},
  {words:['今天','9月','8号','，','星期日','。'], ans:'今天9月8号，星期日。', audio:'今天9月8号，星期日。'},
  {words:['我','不','会','做','饺子','。'], ans:'我不会做饺子。', audio:'我不会做饺子。'},
  {words:['今天','不是','星期六','。'], ans:'今天不是星期六。', audio:'今天不是星期六。'},
  {words:['你','的','电脑','真','好看','！'], ans:'你的电脑真好看！', audio:'你的电脑真好看！'},
  {words:['我','妹妹','今年','十二','岁','。'], ans:'我妹妹今年十二岁。', audio:'我妹妹今年十二岁。', alt:['今年我妹妹十二岁。']},
  {words:['星期天','我','也','做饭','。'], ans:'星期天我也做饭。', audio:'星期天我也做饭。', alt:['我星期天也做饭。']},
];

// ══════════════════════════════════════════
// PHẦN 3c · TRẮC NGHIỆM
// ══════════════════════════════════════════
var mcData = [
  {q:'Hôm nay là ngày 8 tháng 9. Câu đúng là:', opts:['今天9月8号。', '今天8号9月。', '今天号8月9。', '今天8月9号。'], ans:0, exp:'Tháng trước, ngày sau: 9月8号; nói theo tiếng Việt “ngày 8 tháng 9” thành 8号9月 là sai, 8月9号 lại là ngày 9 tháng 8.'},
  {q:'Bạn muốn nói “Hôm nay Chủ nhật.” Câu đúng là:', opts:['今天星期天。', '今天星期七。', '今天是星期七。', '今天七星期。'], ans:0, exp:'Chủ nhật là 星期天 / 星期日; nói 星期七 là lỗi suy từ 星期一…星期六.'},
  {q:'A: “今天几号？” — B đáp:', opts:['今天6月22号。', '今天星期三。', '今天我休息。', '今天几月？'], ans:0, exp:'几号 hỏi ngày; 星期三 trả lời câu 星期几 — hay bị nhầm.'},
  {q:'A: “今天星期几？” — B đáp:', opts:['星期五。', '5号。', '5月。', '五个。'], ans:0, exp:'星期几 hỏi thứ → trả lời 星期 + số; 5号 là ngày, 5月 là tháng.'},
  {q:'Câu nào SAI?', opts:['今天不星期四。', '今天不是星期四。', '今天星期四。', '我妹妹12岁。'], ans:0, exp:'Câu ngày tháng khẳng định không cần 是, nhưng phủ định phải nói 不是: 今天不是星期四.'},
  {q:'Bạn muốn nói “Em gái tôi 12 tuổi.” Câu đúng là:', opts:['我妹妹12岁。', '我妹妹有12岁。', '我妹妹岁12。', '12岁我妹妹。'], ans:0, exp:'Nói tuổi: Chủ ngữ + số + 岁, không cần động từ; không nói 有12岁.'},
  {q:'Hôm nay không phải thứ Bảy: “今天＿＿星期六。”', opts:['不是', '不', '没有', '是不'], ans:0, exp:'Phủ định câu vị ngữ danh từ phải dùng 不是; 不 luôn đứng trước 是.'},
  {q:'A: “你会做饭吗？” — Bạn không biết nấu. B đáp:', opts:['我不会做饭。', '我会不做饭。', '我没有会做饭。', '我会做饭不。'], ans:0, exp:'Phủ định của 会 là 不会, 不 đứng trước 会; không dùng 没有 trước 会.'},
  {q:'Anh ấy biết làm sủi cảo: “他＿＿做饺子。”', opts:['会', '是', '有', '很'], ans:0, exp:'会 + động từ = biết làm (nhờ học mà biết): 会做饺子.'},
  {q:'Bạn muốn nói “Tôi không biết làm món ăn Trung Quốc.” Câu đúng là:', opts:['我不会做中国菜。', '我会不做中国菜。', '我不做会中国菜。', '不我会做中国菜。'], ans:0, exp:'Trật tự: Chủ ngữ + 不会 + động từ + tân ngữ.'},
  {q:'Bạn muốn hỏi bạn học có biết nấu mì không:', opts:['你会做面条儿吗？', '你会面条儿吗？', '你做会面条儿吗？', '我会做面条儿吗？'], ans:0, exp:'会 phải đi với động từ (会做), không đứng thẳng trước danh từ (会面条儿).'},
  {q:'Mẹ hỏi: “你会做什么菜？” — Câu trả lời đúng:', opts:['我会做饺子，也会做一些菜。', '我会饺子，也会一些菜。', '我做会饺子，会也做菜。', '我也会做饺子吗？'], ans:0, exp:'会 + 做 + món ăn; 也 đứng trước 会: 也会做.'},
  {q:'Đồng nghiệp hỏi: “这是你的新电脑吗？” — Bạn đáp:', opts:['是的，是我的。', '是的，我会做。', '我也很忙。', '今天星期日。'], ans:0, exp:'Hỏi “có phải của bạn không” thì đáp 是的，是我的 (的 chỉ sở hữu).'},
  {q:'Bạn khen máy tính mới của bạn mình: “Đẹp thật!”', opts:['真好看！', '好看真！', '真很好看！', '太好看吗！'], ans:0, exp:'真 đứng trước tính từ: 真好看; không ghép 真 với 很.'},
  {q:'Bạn mình hỏi: “你喜欢它吗？” — Bạn đáp “Tôi rất thích nó.”', opts:['我很喜欢它。', '我喜欢很它。', '我很它喜欢。', '它很我喜欢。'], ans:0, exp:'Phó từ 很 đứng trước động từ 喜欢, tân ngữ 它 đứng sau động từ.'},
  {q:'Hôm nay Chủ nhật, bạn được nghỉ. Bạn nói:', opts:['今天星期天，我休息。', '今天星期天，我休息是。', '我休息今天星期天。', '今天是星期天休息我。'], ans:0, exp:'Câu ngày tháng không cần 是; thời gian đứng trước động từ 休息.'},
];

// ══════════════════════════════════════════
// PHẦN 4 · LUYỆN NÓI
// ══════════════════════════════════════════
var speakingData = {
  intro: 'Nhấn nút loa nghe câu hỏi, rồi tự ghi âm câu trả lời về chính bạn.',
  questions: [
    {q_zh: '今天几号？星期几？', q_vn: 'Bạn học hỏi hôm nay ngày mấy, thứ mấy. Hãy trả lời theo đúng ngày hôm nay.',
     hint: '今天……月……号，星期……。', sample: '今天9月8号，星期日。', sample_vn: 'Hôm nay là ngày 8 tháng 9, Chủ nhật.',
     note: 'Tháng trước, ngày sau, thứ ở cuối; câu nói ngày tháng không cần 是.'},
    {q_zh: '你会做饭吗？你会做什么？', q_vn: 'Bạn học hỏi bạn có biết nấu ăn không, biết làm món gì. Hãy nói thật về bạn.',
     hint: '我会/不会做……。', sample: '我会做饭，我会做面条儿，不会做饺子。', sample_vn: 'Tôi biết nấu ăn, tôi biết nấu mì, không biết làm sủi cảo.',
     note: '会 + động từ diễn đạt khả năng có được nhờ học tập; phủ định là 不会.'},
    {q_zh: '这是我的新电脑。', q_vn: 'Bạn của bạn khoe máy tính mới. Hãy khen và nói bạn cũng thích nó.',
     hint: '真……！我也很……', sample: '真好看！我也很喜欢它。', sample_vn: 'Đẹp thật đấy! Tôi cũng rất thích nó.',
     note: '真 + tính từ dùng để nhấn mạnh cảm xúc thật sự.'},
    {q_zh: '你今年多大？', q_vn: 'Bạn mới quen hỏi tuổi bạn. Hãy nói tuổi của bạn và một người trong gia đình.',
     hint: '我今年……岁，我……', sample: '我今年二十岁，我妹妹十二岁。', sample_vn: 'Năm nay tôi 20 tuổi, em gái tôi 12 tuổi.',
     note: 'Nói tuổi là câu vị ngữ danh từ: không cần 是.'},
    {q_zh: '星期天你做什么？', q_vn: 'Bạn học hỏi Chủ nhật bạn thường làm gì. Hãy nói về bạn.',
     hint: '星期天我……', sample: '星期天我休息，我也做饭。', sample_vn: 'Chủ nhật tôi nghỉ, tôi cũng nấu cơm.',
     note: 'Từ chỉ thời gian (星期天) đứng trước động từ.'},
  ],
};

// ══════════════════════════════════════════
// LUYỆN DỊCH (Việt → Trung)
// ══════════════════════════════════════════
var translateData = [
  {vi:'Hôm nay ngày mấy? — Hôm nay là ngày 8 tháng 9, Chủ nhật.', zh:'今天几号？——今天9月8号，星期日。', py:'Jīntiān jǐ hào? — Jīntiān jiǔ yuè bā hào, Xīngqīrì.'},
  {vi:'Bạn có biết nấu ăn không? — Tôi biết, tôi biết nấu mì và sủi cảo.', zh:'你会做饭吗？——我会，我会做面条儿和饺子。', py:'Nǐ huì zuò fàn ma? — Wǒ huì, wǒ huì zuò miàntiáor hé jiǎozi.'},
  {vi:'Đây là máy tính mới của bạn à? — Đúng vậy, tôi rất thích nó.', zh:'这是你的新电脑吗？——是的，我很喜欢它。', py:'Zhè shì nǐ de xīn diànnǎo ma? — Shì de, wǒ hěn xǐhuan tā.'},
  {vi:'Hôm nay Chủ nhật, tôi được nghỉ, tôi cũng nấu ăn.', zh:'今天星期日，我休息，我也做饭。', py:'Jīntiān Xīngqīrì, wǒ xiūxi, wǒ yě zuò fàn.'},
  {vi:'Em gái tôi năm nay 12 tuổi, em ấy không biết nấu ăn.', zh:'我妹妹今年十二岁，她不会做饭。', py:'Wǒ mèimei jīnnián shí\'èr suì, tā bú huì zuò fàn.'},
  {vi:'Hôm nay không phải thứ Bảy, hôm nay Chủ nhật.', zh:'今天不是星期六，今天星期天。', py:'Jīntiān bú shì Xīngqīliù, jīntiān Xīngqītiān.'},
];

// ══════════════════════════════════════════
// LUYỆN DỊCH (Trung → Việt) — nội dung KHÁC với chiều Việt→Trung ở trên
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:'Hôm nay thứ mấy? — Hôm nay thứ Hai, tôi không được nghỉ.', zh:'今天星期几？——今天星期一，我不休息。', py:'Jīntiān xīngqī jǐ? — Jīntiān Xīngqīyī, wǒ bù xiūxi.'},
  {vi:'Tôi không biết nấu ăn, mẹ tôi biết làm sủi cảo.', zh:'我不会做饭，我妈妈会做饺子。', py:'Wǒ bú huì zuò fàn, wǒ māma huì zuò jiǎozi.'},
  {vi:'Máy tính mới của tôi thật đẹp, tôi rất thích nó.', zh:'我的新电脑真好看，我很喜欢它。', py:'Wǒ de xīn diànnǎo zhēn hǎokàn, wǒ hěn xǐhuan tā.'},
  {vi:'Thứ Bảy tôi nghỉ, Chủ nhật tôi cũng nghỉ.', zh:'星期六我休息，星期日我也休息。', py:'Xīngqīliù wǒ xiūxi, Xīngqīrì wǒ yě xiūxi.'},
];
