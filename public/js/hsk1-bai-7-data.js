// ══════════════════════════════════════════
// DATA — HSK1 Bài 7: 今天几号?
// ══════════════════════════════════════════
var vocabData = [
  {
    "n": 1,
    "zh": "请",
    "py": "qǐng",
    "pos": "Động từ",
    "vn": "mời, xin (lịch sự)",
    "hv": "thỉnh",
    "em": "🙏",
    "lesson": 1,
    "ex_zh": "请问，今天几号？",
    "ex_py": "Qǐngwèn, jīntiān jǐ hào?",
    "ex_vn": "Xin hỏi hôm nay là ngày mấy?",
    "exList": [
      {
        "zh": "请问，今天几号？",
        "py": "Qǐngwèn, jīntiān jǐ hào?",
        "vn": "Xin hỏi hôm nay là ngày mấy?"
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
        "w": "请问 / 请坐"
      }
    ],
    "colloFull": [
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
        "zh": "请写",
        "py": "qǐng xiě",
        "vn": "mời viết"
      },
      {
        "zh": "请读",
        "py": "qǐng dú",
        "vn": "mời đọc"
      }
    ],
    "patterns": [
      {
        "s": "请 + động từ",
        "m": "Lời mời lịch sự: 请说 · 请写"
      },
      {
        "s": "请问 đặt ở ĐẦU câu hỏi cho lễ phép"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Xin hỏi, hôm nay ngày mấy ạ?",
        "answer": "请问，今天几号？",
        "answerPy": "Qǐngwèn, jīntiān jǐ hào?",
        "note": "请问 đặt ở đầu câu hỏi cho lễ phép.",
        "pair": "请问，……？"
      },
      {
        "promptLang": "vi",
        "prompt": "Mời thầy nói ạ.",
        "answer": "老师，请说。",
        "answerPy": "Lǎoshī, qǐng shuō.",
        "note": "请 + động từ là lời mời lịch sự.",
        "pair": "请 + V"
      }
    ]
  },
  {
    "n": 2,
    "zh": "问",
    "py": "wèn",
    "pos": "Động từ",
    "vn": "hỏi",
    "hv": "vấn",
    "em": "❓",
    "lesson": 1,
    "ex_zh": "请问，今天几号？",
    "ex_py": "Qǐngwèn, jīntiān jǐ hào?",
    "ex_vn": "Xin hỏi hôm nay là ngày mấy?",
    "exList": [
      {
        "zh": "请问，今天几号？",
        "py": "Qǐngwèn, jīntiān jǐ hào?",
        "vn": "Xin hỏi hôm nay là ngày mấy?"
      }
    ],
    "hanzi": [
      {
        "c": "问",
        "p": "wèn",
        "type": "半包围结构 · Bán bao vây",
        "st": 6,
        "ord": "门(môn) ngoài → 口(khẩu) trong",
        "rad": "门 (môn – cửa)",
        "mean": "hỏi",
        "tip": "门(cửa) + 口(miệng) → đứng trước cửa cất tiếng HỎI.",
        "cf": "间 (jiān – \"khoảng giữa\")",
        "w": "请问 / 问题"
      }
    ],
    "colloFull": [
      {
        "zh": "请问",
        "py": "qǐngwèn",
        "vn": "xin hỏi"
      },
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
        "zh": "问同学",
        "py": "wèn tóngxué",
        "vn": "hỏi bạn cùng lớp"
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
        "prompt": "Không biết thì hỏi thầy đi.",
        "answer": "不会，问老师。",
        "answerPy": "Bú huì, wèn lǎoshī.",
        "note": "问 + người — hỏi ai.",
        "pair": "问 + người"
      },
      {
        "promptLang": "vi",
        "prompt": "Bạn muốn hỏi gì?",
        "answer": "你问什么？",
        "answerPy": "Nǐ wèn shénme?",
        "note": "问什么 — hỏi cái gì.",
        "pair": "……什么？"
      }
    ]
  },
  {
    "n": 3,
    "zh": "今天",
    "py": "jīntiān",
    "pos": "Danh từ",
    "vn": "hôm nay",
    "hv": "kim thiên",
    "em": "📆",
    "lesson": 1,
    "ex_zh": "今天9月1号。",
    "ex_py": "Jīntiān jiǔ yuè yī hào.",
    "ex_vn": "Hôm nay ngày 1 tháng 9.",
    "exList": [
      {
        "zh": "今天9月1号。",
        "py": "Jīntiān jiǔ yuè yī hào.",
        "vn": "Hôm nay ngày 1 tháng 9."
      }
    ],
    "hanzi": [
      {
        "c": "天",
        "p": "tiān",
        "type": "独体字 · Chữ đơn",
        "st": 4,
        "ord": "一 trên → 大(biến thể) dưới",
        "rad": "大 (đại – lớn, biến thể)",
        "mean": "trời, ngày",
        "tip": "一(nét ngang chỉ bầu trời) trên đầu người 大(lớn) → khoảng không rộng lớn trên đầu = TRỜI, NGÀY.",
        "cf": "夫 (fū – \"chồng, đàn ông\")",
        "w": "今天 / 明天 / 昨天"
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
        "zh": "今天去学校",
        "py": "jīntiān qù xuéxiào",
        "vn": "hôm nay đi học"
      },
      {
        "zh": "今天不去",
        "py": "jīntiān bú qù",
        "vn": "hôm nay không đi"
      }
    ],
    "patterns": [
      {
        "s": "今天 + Sub + động từ",
        "m": "Từ chỉ thời gian đứng TRƯỚC động từ"
      },
      {
        "s": "今天 · 昨天 · 明天 — ba mốc thời gian đi liền một bộ"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Hôm nay tôi đi học.",
        "answer": "今天我去学校。",
        "answerPy": "Jīntiān wǒ qù xuéxiào.",
        "note": "Từ chỉ thời gian đứng trước động từ.",
        "pair": "今天……"
      },
      {
        "promptLang": "vi",
        "prompt": "Hôm nay thứ mấy?",
        "answer": "今天星期几？",
        "answerPy": "Jīntiān xīngqī jǐ?",
        "note": "Khung hỏi thứ trong tuần.",
        "pair": "星期几？"
      }
    ]
  },
  {
    "n": 4,
    "zh": "号",
    "py": "hào",
    "pos": "Danh từ",
    "vn": "ngày, mồng (khẩu ngữ)",
    "hv": "hiệu",
    "em": "🔢",
    "lesson": 1,
    "ex_zh": "今天9月1号。",
    "ex_py": "Jīntiān jiǔ yuè yī hào.",
    "ex_vn": "Hôm nay ngày 1 tháng 9.",
    "exList": [
      {
        "zh": "今天9月1号。",
        "py": "Jīntiān jiǔ yuè yī hào.",
        "vn": "Hôm nay ngày 1 tháng 9."
      }
    ],
    "hanzi": [
      {
        "c": "号",
        "p": "hào",
        "type": "上下结构 · Trên-dưới",
        "st": 5,
        "ord": "口(khẩu) trên → 万(biến thể) dưới",
        "rad": "口 (khẩu – miệng)",
        "mean": "ngày, số hiệu",
        "tip": "口(miệng hô to) + 万(số lớn) → hô SỐ để gọi tên, đánh dấu NGÀY, SỐ HIỆU.",
        "cf": "另 (lìng – \"khác\")",
        "w": "9月1号"
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
        "prompt": "Hôm nay ngày mấy?",
        "answer": "今天几号？",
        "answerPy": "Jīntiān jǐ hào?",
        "note": "号 dùng trong khẩu ngữ để nói ngày.",
        "pair": "几号？"
      },
      {
        "promptLang": "vi",
        "prompt": "Hôm qua ngày mùng năm.",
        "answer": "昨天五号。",
        "answerPy": "Zuótiān wǔ hào.",
        "note": "Câu nói ngày tháng không cần động từ 是.",
        "pair": "……号"
      }
    ]
  },
  {
    "n": 5,
    "zh": "月",
    "py": "yuè",
    "pos": "Danh từ",
    "vn": "tháng",
    "hv": "nguyệt",
    "em": "🌙",
    "lesson": 1,
    "ex_zh": "今天9月1号。",
    "ex_py": "Jīntiān jiǔ yuè yī hào.",
    "ex_vn": "Hôm nay ngày 1 tháng 9.",
    "exList": [
      {
        "zh": "今天9月1号。",
        "py": "Jīntiān jiǔ yuè yī hào.",
        "vn": "Hôm nay ngày 1 tháng 9."
      }
    ],
    "hanzi": [
      {
        "c": "月",
        "p": "yuè",
        "type": "独体字 · Tượng hình",
        "st": 4,
        "ord": "丿→𠃌→一→一",
        "rad": "月 (nguyệt – tự thành bộ)",
        "mean": "tháng, mặt trăng",
        "tip": "Hình mặt trăng khuyết → chu kỳ trăng tròn khuyết đánh dấu một THÁNG.",
        "cf": "肉 (ròu – \"thịt\", bộ 月 dạng thịt dễ nhầm\")",
        "w": "9月 / 月亮"
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
        "prompt": "Ngày mai tháng mấy ngày mấy?",
        "answer": "明天几月几号？",
        "answerPy": "Míngtiān jǐ yuè jǐ hào?",
        "note": "Hỏi cả tháng lẫn ngày trong một câu.",
        "pair": "几月几号？"
      }
    ]
  },
  {
    "n": 6,
    "zh": "星期",
    "py": "xīngqī",
    "pos": "Danh từ",
    "vn": "tuần, thứ",
    "hv": "tinh kỳ",
    "em": "📆",
    "lesson": 2,
    "ex_zh": "今天星期几？",
    "ex_py": "Jīntiān xīngqī jǐ?",
    "ex_vn": "Hôm nay là thứ mấy?",
    "exList": [
      {
        "zh": "今天星期几？",
        "py": "Jīntiān xīngqī jǐ?",
        "vn": "Hôm nay là thứ mấy?"
      }
    ],
    "hanzi": [
      {
        "c": "星",
        "p": "xīng",
        "type": "上下结构 · Trên-dưới",
        "st": 9,
        "ord": "日(nhật) trên → 生(sinh) dưới",
        "rad": "日 (nhật – mặt trời)",
        "mean": "ngôi sao",
        "tip": "日(vật sáng nhỏ) + 生(mọc lên) → ánh sáng mọc lên ban đêm = NGÔI SAO.",
        "cf": "猩 (xīng – \"tinh tinh\")",
        "w": "星期 / 星星"
      },
      {
        "c": "期",
        "p": "qī",
        "type": "左右结构 · Trái-phải",
        "st": 12,
        "ord": "其(kỳ) trái → 月(nguyệt) phải",
        "rad": "月 (nguyệt – mặt trăng)",
        "mean": "kỳ hạn, thời kỳ",
        "tip": "其(khung định sẵn) + 月(chu kỳ trăng) → một CHU KỲ THỜI GIAN nhất định.",
        "cf": "欺 (qī – \"lừa dối\")",
        "w": "星期 / 学期"
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
        "s": "Chủ nhật gọi riêng là 星期天, không đánh số"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Ngày mai thứ hai.",
        "answer": "明天星期一。",
        "answerPy": "Míngtiān xīngqīyī.",
        "note": "星期一 là THỨ HAI, không phải thứ nhất.",
        "pair": "星期 + số"
      },
      {
        "promptLang": "vi",
        "prompt": "Hôm qua thứ mấy?",
        "answer": "昨天星期几？",
        "answerPy": "Zuótiān xīngqī jǐ?",
        "note": "几 dùng để hỏi số nhỏ, hợp với thứ trong tuần.",
        "pair": "星期几？"
      }
    ]
  },
  {
    "n": 7,
    "zh": "昨天",
    "py": "zuótiān",
    "pos": "Danh từ",
    "vn": "hôm qua",
    "hv": "tạc thiên",
    "em": "⏮️",
    "lesson": 2,
    "ex_zh": "昨天是8月31号，星期二。",
    "ex_py": "Zuótiān shì bā yuè sānshíyī hào, xīngqī èr.",
    "ex_vn": "Hôm qua là thứ ba, ngày 31 tháng 8.",
    "exList": [
      {
        "zh": "昨天是8月31号，星期二。",
        "py": "Zuótiān shì bā yuè sānshíyī hào, xīngqī èr.",
        "vn": "Hôm qua là thứ ba, ngày 31 tháng 8."
      }
    ],
    "hanzi": [
      {
        "c": "昨",
        "p": "zuó",
        "type": "左右结构 · Trái-phải",
        "st": 9,
        "ord": "日(nhật) trái → 乍(sạ) phải",
        "rad": "日 (nhật – mặt trời)",
        "mean": "hôm qua, trước đây",
        "tip": "日(mặt trời) + 乍(vừa mới) → mặt trời của ngày vừa qua = HÔM QUA.",
        "cf": "作 (zuò – \"làm\", cùng phần 乍\")",
        "w": "昨天"
      }
    ],
    "colloFull": [
      {
        "zh": "昨天去",
        "py": "zuótiān qù",
        "vn": "hôm qua đi"
      },
      {
        "zh": "昨天不去",
        "py": "zuótiān bú qù",
        "vn": "hôm qua không đi"
      },
      {
        "zh": "昨天星期几",
        "py": "zuótiān xīngqī jǐ",
        "vn": "hôm qua thứ mấy"
      },
      {
        "zh": "昨天看书",
        "py": "zuótiān kàn shū",
        "vn": "hôm qua đọc sách"
      }
    ],
    "patterns": [
      {
        "s": "昨天 + Sub + động từ",
        "m": "Việc đã qua — tiếng Trung không đổi hình thức động từ"
      },
      {
        "s": "昨 + 天",
        "m": "Ngày (天) hôm trước (昨)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Hôm qua tôi không đi học.",
        "answer": "昨天我不去学校。",
        "answerPy": "Zuótiān wǒ bú qù xuéxiào.",
        "note": "Động từ tiếng Trung không đổi hình thức theo thời gian.",
        "pair": "不 + V"
      },
      {
        "promptLang": "vi",
        "prompt": "Hôm qua bạn đọc sách phải không?",
        "answer": "昨天你看书吗？",
        "answerPy": "Zuótiān nǐ kàn shū ma?",
        "note": "看书 — đọc sách.",
        "pair": "……吗？"
      }
    ]
  },
  {
    "n": 8,
    "zh": "明天",
    "py": "míngtiān",
    "pos": "Danh từ",
    "vn": "ngày mai",
    "hv": "minh thiên",
    "em": "⏭️",
    "lesson": 2,
    "ex_zh": "明天是9月2号，星期四。",
    "ex_py": "Míngtiān shì jiǔ yuè èr hào, xīngqī sì.",
    "ex_vn": "Ngày mai là thứ năm, ngày 2 tháng 9.",
    "exList": [
      {
        "zh": "明天是9月2号，星期四。",
        "py": "Míngtiān shì jiǔ yuè èr hào, xīngqī sì.",
        "vn": "Ngày mai là thứ năm, ngày 2 tháng 9."
      }
    ],
    "hanzi": [
      {
        "c": "明",
        "p": "míng",
        "type": "左右结构 · Trái-phải",
        "st": 8,
        "ord": "日(nhật) trái → 月(nguyệt) phải",
        "rad": "日 (nhật – mặt trời)",
        "mean": "sáng, ngày mai",
        "tip": "日(mặt trời) + 月(mặt trăng) → hai ánh sáng cùng chiếu → SÁNG RÕ, và \"ngày kế tiếp\" = NGÀY MAI.",
        "cf": "朋 (péng – \"bạn bè\", cùng bộ 月\")",
        "w": "明天"
      }
    ],
    "colloFull": [
      {
        "zh": "明天去",
        "py": "míngtiān qù",
        "vn": "ngày mai đi"
      },
      {
        "zh": "明天不去",
        "py": "míngtiān bú qù",
        "vn": "ngày mai không đi"
      },
      {
        "zh": "明天星期几",
        "py": "míngtiān xīngqī jǐ",
        "vn": "mai thứ mấy"
      },
      {
        "zh": "明天看书",
        "py": "míngtiān kàn shū",
        "vn": "mai đọc sách"
      }
    ],
    "patterns": [
      {
        "s": "明天 + Sub + động từ",
        "m": "Việc sắp tới — vẫn dùng động từ như thường"
      },
      {
        "s": "明 + 天",
        "m": "Ngày (天) sáng sau (明)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Ngày mai tôi đi trường.",
        "answer": "明天我去学校。",
        "answerPy": "Míngtiān wǒ qù xuéxiào.",
        "note": "Việc sắp tới vẫn dùng động từ như thường.",
        "pair": "明天……"
      },
      {
        "promptLang": "vi",
        "prompt": "Ngày mai bạn có đi không?",
        "answer": "明天你去吗？",
        "answerPy": "Míngtiān nǐ qù ma?",
        "note": "Câu hỏi ngắn, lược bỏ nơi đến cho gọn.",
        "pair": "……吗？"
      }
    ]
  },
  {
    "n": 9,
    "zh": "去",
    "py": "qù",
    "pos": "Động từ",
    "vn": "đi, đi đến",
    "hv": "khứ",
    "em": "🚶",
    "lesson": 3,
    "ex_zh": "我去学校。",
    "ex_py": "Wǒ qù xuéxiào.",
    "ex_vn": "Tôi đến trường.",
    "exList": [
      {
        "zh": "我去学校。",
        "py": "Wǒ qù xuéxiào.",
        "vn": "Tôi đến trường."
      }
    ],
    "hanzi": [
      {
        "c": "去",
        "p": "qù",
        "type": "上下结构 · Trên-dưới",
        "st": 5,
        "ord": "土(biến thể) trên → 厶(khư) dưới",
        "rad": "厶 (khư, biến thể)",
        "mean": "đi, đi đến",
        "tip": "土(mặt đất, nơi đứng) rời khỏi để ĐI đến nơi khác.",
        "cf": "丢 (diū – \"đánh mất\")",
        "w": "去学校 / 去哪儿"
      }
    ],
    "colloFull": [
      {
        "zh": "去学校",
        "py": "qù xuéxiào",
        "vn": "đi đến trường"
      },
      {
        "zh": "去中国",
        "py": "qù Zhōngguó",
        "vn": "đi Trung Quốc"
      },
      {
        "zh": "不去",
        "py": "bú qù",
        "vn": "không đi"
      },
      {
        "zh": "明天去",
        "py": "míngtiān qù",
        "vn": "mai đi"
      }
    ],
    "patterns": [
      {
        "s": "去 + nơi chốn",
        "m": "Đi đến đâu: 去学校"
      },
      {
        "s": "Sau 去 là NƠI CHỐN, không cần thêm giới từ"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Ngày mai tôi đi Trung Quốc.",
        "answer": "我明天去中国。",
        "answerPy": "Wǒ míngtiān qù Zhōngguó.",
        "note": "Sau 去 là nơi chốn, không cần giới từ.",
        "pair": "去 + nơi chốn"
      },
      {
        "promptLang": "vi",
        "prompt": "Cô ấy hôm nay không đi học.",
        "answer": "她今天不去学校。",
        "answerPy": "Tā jīntiān bú qù xuéxiào.",
        "note": "不 đặt trước động từ để phủ định.",
        "pair": "不 + V"
      }
    ]
  },
  {
    "n": 10,
    "zh": "学校",
    "py": "xuéxiào",
    "pos": "Danh từ",
    "vn": "trường học",
    "hv": "học hiệu",
    "em": "🏫",
    "lesson": 3,
    "ex_zh": "我去学校看书。",
    "ex_py": "Wǒ qù xuéxiào kàn shū.",
    "ex_vn": "Tôi đến trường đọc sách.",
    "exList": [
      {
        "zh": "我去学校看书。",
        "py": "Wǒ qù xuéxiào kàn shū.",
        "vn": "Tôi đến trường đọc sách."
      }
    ],
    "hanzi": [
      {
        "c": "校",
        "p": "xiào",
        "type": "左右结构 · Trái-phải",
        "st": 10,
        "ord": "木(mộc) trái → 交(giao) phải",
        "rad": "木 (mộc – gỗ)",
        "mean": "trường học",
        "tip": "木(gỗ, xây trường) + 交(giao lưu, gặp gỡ) → nơi mọi người gặp gỡ để học = TRƯỜNG. (学 đã học ở Bài 3)",
        "cf": "较 (jiào – \"so sánh\")",
        "w": "学校"
      }
    ],
    "colloFull": [
      {
        "zh": "去学校",
        "py": "qù xuéxiào",
        "vn": "đến trường"
      },
      {
        "zh": "学校的老师",
        "py": "xuéxiào de lǎoshī",
        "vn": "giáo viên của trường"
      },
      {
        "zh": "我的学校",
        "py": "wǒ de xuéxiào",
        "vn": "trường của tôi"
      },
      {
        "zh": "中国学校",
        "py": "Zhōngguó xuéxiào",
        "vn": "trường học Trung Quốc"
      }
    ],
    "patterns": [
      {
        "s": "去 + 学校",
        "m": "Đi học, đến trường"
      },
      {
        "s": "学 + 校",
        "m": "Nơi (校) để học (学)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Giáo viên của trường tôi rất tốt.",
        "answer": "我学校的老师很好。",
        "answerPy": "Wǒ xuéxiào de lǎoshī hěn hǎo.",
        "note": "……的老师 — giáo viên của nơi nào.",
        "pair": "很 + Adj"
      },
      {
        "promptLang": "vi",
        "prompt": "Ngày mai bạn có đến trường không?",
        "answer": "明天你去学校吗？",
        "answerPy": "Míngtiān nǐ qù xuéxiào ma?",
        "note": "去学校 — đi học, đến trường.",
        "pair": "……吗？"
      }
    ]
  },
  {
    "n": 11,
    "zh": "看",
    "py": "kàn",
    "pos": "Động từ",
    "vn": "nhìn, xem, đọc",
    "hv": "khán",
    "em": "👀",
    "lesson": 3,
    "ex_zh": "我去学校看书。",
    "ex_py": "Wǒ qù xuéxiào kàn shū.",
    "ex_vn": "Tôi đến trường đọc sách.",
    "exList": [
      {
        "zh": "我去学校看书。",
        "py": "Wǒ qù xuéxiào kàn shū.",
        "vn": "Tôi đến trường đọc sách."
      }
    ],
    "hanzi": [
      {
        "c": "看",
        "p": "kàn",
        "type": "上下结构 · Trên-dưới",
        "st": 9,
        "ord": "手(biến thể) trên → 目(mục) dưới",
        "rad": "目 (mục – mắt)",
        "mean": "nhìn, xem, đọc",
        "tip": "手(bàn tay) che trên 目(mắt) để NHÌN xa hơn, rõ hơn.",
        "cf": "着 (zhe – \"trợ từ động thái\")",
        "w": "看书 / 看电视"
      }
    ],
    "colloFull": [
      {
        "zh": "看书",
        "py": "kàn shū",
        "vn": "đọc sách"
      },
      {
        "zh": "看什么",
        "py": "kàn shénme",
        "vn": "xem gì"
      },
      {
        "zh": "看汉字",
        "py": "kàn Hànzì",
        "vn": "nhìn chữ Hán"
      },
      {
        "zh": "不看",
        "py": "bú kàn",
        "vn": "không xem"
      }
    ],
    "patterns": [
      {
        "s": "看 + 书",
        "m": "Đọc sách — người Trung Quốc nói 看书, không nói 读书 khi đọc thầm"
      },
      {
        "s": "看 (nhìn, xem bằng mắt) ≠ 读 (đọc thành tiếng)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Hôm nay tôi đọc sách tiếng Trung.",
        "answer": "今天我看汉语书。",
        "answerPy": "Jīntiān wǒ kàn Hànyǔ shū.",
        "note": "Đọc thầm thì nói 看书, không nói 读书.",
        "pair": "看 + N"
      },
      {
        "promptLang": "vi",
        "prompt": "Bạn đang xem gì thế?",
        "answer": "你看什么？",
        "answerPy": "Nǐ kàn shénme?",
        "note": "看什么 — xem cái gì.",
        "pair": "……什么？"
      }
    ]
  },
  {
    "n": 12,
    "zh": "书",
    "py": "shū",
    "pos": "Danh từ",
    "vn": "sách",
    "hv": "thư",
    "em": "📚",
    "lesson": 3,
    "ex_zh": "我去学校看书。",
    "ex_py": "Wǒ qù xuéxiào kàn shū.",
    "ex_vn": "Tôi đến trường đọc sách.",
    "exList": [
      {
        "zh": "我去学校看书。",
        "py": "Wǒ qù xuéxiào kàn shū.",
        "vn": "Tôi đến trường đọc sách."
      }
    ],
    "hanzi": [
      {
        "c": "书",
        "p": "shū",
        "type": "独体字 · Chữ đơn",
        "st": 4,
        "ord": "ㄋ→乛→丨→丶",
        "rad": "亅 (quyết, biến thể)",
        "mean": "sách",
        "tip": "Hình cuộn giấy/thẻ tre buộc lại thời cổ → SÁCH.",
        "cf": "与 (yǔ – \"và, cho\")",
        "w": "看书 / 一本书"
      }
    ],
    "colloFull": [
      {
        "zh": "看书",
        "py": "kàn shū",
        "vn": "đọc sách"
      },
      {
        "zh": "汉语书",
        "py": "Hànyǔ shū",
        "vn": "sách tiếng Trung"
      },
      {
        "zh": "我的书",
        "py": "wǒ de shū",
        "vn": "sách của tôi"
      },
      {
        "zh": "老师的书",
        "py": "lǎoshī de shū",
        "vn": "sách của thầy"
      }
    ],
    "patterns": [
      {
        "s": "看 + 书",
        "m": "Đọc sách"
      },
      {
        "s": "汉语 + 书",
        "m": "Sách tiếng Trung — ghép thẳng, không cần 的"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Sách của thầy rất hay.",
        "answer": "老师的书很好。",
        "answerPy": "Lǎoshī de shū hěn hǎo.",
        "note": "老师的书 — sách của thầy.",
        "pair": "很 + Adj"
      },
      {
        "promptLang": "vi",
        "prompt": "Bạn có sách tiếng Trung không?",
        "answer": "你有汉语书吗？",
        "answerPy": "Nǐ yǒu Hànyǔ shū ma?",
        "note": "汉语书 ghép thẳng, không cần 的.",
        "pair": "……吗？"
      }
    ]
  }
];

const wuData = [
  {img:'📅',label:'号',py:'hào',letter:'A'},
  {img:'🌙',label:'月',py:'yuè',letter:'B'},
  {img:'📆',label:'星期',py:'xīngqī',letter:'C'},
  {img:'⏮️',label:'昨天',py:'zuótiān',letter:'D'},
  {img:'⏭️',label:'明天',py:'míngtiān',letter:'E'},
  {img:'📚',label:'书',py:'shū',letter:'F'},
];

var dialogData = [
  {scene:'Ở ngân hàng · Hỏi ngày tháng',
   lines:[
     {sp:0,zh:'请问，今天几号？',py:'Qǐngwèn, jīntiān jǐ hào?',vn:'Xin hỏi hôm nay là ngày mấy?'},
     {sp:1,zh:'今天9月1号。',py:'Jīntiān jiǔ yuè yī hào.',vn:'Hôm nay ngày 1 tháng 9.'},
     {sp:0,zh:'今天星期几？',py:'Jīntiān xīngqī jǐ?',vn:'Hôm nay là thứ mấy?'},
     {sp:1,zh:'星期三。',py:'Xīngqī sān.',vn:'Thứ tư.'},
   ]},
  {scene:'Xem lịch · Hôm qua, ngày mai',
   lines:[
     {sp:0,zh:'昨天是几月几号？',py:'Zuótiān shì jǐ yuè jǐ hào?',vn:'Hôm qua là ngày mấy tháng mấy?'},
     {sp:1,zh:'昨天是8月31号，星期二。',py:'Zuótiān shì bā yuè sānshíyī hào, xīngqī èr.',vn:'Hôm qua là thứ ba, ngày 31 tháng 8.'},
     {sp:0,zh:'明天呢？',py:'Míngtiān ne?',vn:'Còn ngày mai?'},
     {sp:1,zh:'明天是9月2号，星期四。',py:'Míngtiān shì jiǔ yuè èr hào, xīngqī sì.',vn:'Ngày mai là thứ năm, ngày 2 tháng 9.'},
   ]},
  {scene:'Ở quán cà phê · Đi học làm gì',
   lines:[
     {sp:0,zh:'明天星期六，你去学校吗？',py:'Míngtiān xīngqī liù, nǐ qù xuéxiào ma?',vn:'Ngày mai là thứ bảy, bạn có đến trường không?'},
     {sp:1,zh:'我去学校。',py:'Wǒ qù xuéxiào.',vn:'Có, tôi đến trường.'},
     {sp:0,zh:'去学校做什么？',py:'Qù xuéxiào zuò shénme?',vn:'Bạn đến trường để làm gì?'},
     {sp:1,zh:'我去学校看书。',py:'Wǒ qù xuéxiào kàn shū.',vn:'Để đọc sách.'},
   ]},
];

// Điền từ — đổi ngày/thứ so với bài khoá
var fillData = [
  {pre:'Bạn hỏi lịch sự về ngày hôm nay: “',blank:'请',post:'问，今天几号？”',hint:'(mời, xin — lịch sự)',ans:'请'},
  {pre:'Bạn hỏi thứ trong tuần: “今天',blank:'星期',post:'几？”',hint:'(tuần, thứ)',ans:'星期'},
  {pre:'Nói hôm nay là ngày 5 tháng 10: “今天10',blank:'月',post:'5号。”',hint:'(tháng)',ans:'月'},
  {pre:'Nói hôm qua là thứ hai: “',blank:'昨',post:'天是星期一。”',hint:'(hôm qua)',ans:'昨'},
  {pre:'Nói ngày mai là thứ sáu: “',blank:'明',post:'天是星期五。”',hint:'(ngày mai)',ans:'明'},
  {pre:'Bạn hỏi ai đó có đi học không: “你',blank:'去',post:'学校吗？”',hint:'(đi, đi đến)',ans:'去'},
  {pre:'Bạn nói mục đích đến trường là đọc sách: “我去学校看',blank:'书',post:'。”',hint:'(sách)',ans:'书'},
  {pre:'Bạn hỏi ngày cụ thể: “今天几',blank:'号',post:'？”',hint:'(ngày, mồng)',ans:'号'},
];

// Sắp xếp — đổi ngày/thứ so với bài khoá
var sortData = [
  {words:['请','问','，','今天','几','号','？'],ans:'请问，今天几号？',audio:'请问，今天几号？'},
  {words:['今天','10','月','5','号','。'],ans:'今天10月5号。',audio:'今天10月5号。'},
  {words:['昨天','是','星期','一','。'],ans:'昨天是星期一。',audio:'昨天是星期一。'},
  {words:['明天','是','星期','五','。'],ans:'明天是星期五。',audio:'明天是星期五。'},
  {words:['你','去','学校','吗','？'],ans:'你去学校吗？',audio:'你去学校吗？'},
  {words:['我','去','学校','看','书','。'],ans:'我去学校看书。',audio:'我去学校看书。'},
];

var matchData = [
  {left:'今天几号？',right:'今天9月1号。'},
  {left:'今天星期几？',right:'星期三。'},
  {left:'昨天是几月几号？',right:'昨天是8月31号，星期二。'},
  {left:'明天星期六，你去学校吗？',right:'我去学校。'},
  {left:'去学校做什么？',right:'我去学校看书。'},
];

// Trắc nghiệm — trọng tâm ngày tháng & câu liên động 去, không audio
var mcData = [
  {q:'请问，今天＿＿号？',opts:['几','什么','怎么','哪'],ans:0},
  {q:'今天＿＿几？(hỏi thứ)',opts:['星期','号','月','今天'],ans:0},
  {q:'Thứ tự đúng khi nói ngày tháng trong tiếng Trung là?',opts:['Tháng → Ngày → Thứ','Thứ → Ngày → Tháng','Ngày → Tháng → Thứ','Thứ → Tháng → Ngày'],ans:0},
  {q:'Trong khẩu ngữ, từ nào thường dùng thay cho "日" khi nói ngày?',opts:['号','月','星期','天'],ans:0},
  {q:'Câu liên động với "去": Chủ ngữ + 去 + Nơi chốn + ＿＿ + Tân ngữ',opts:['Động từ 2','Tính từ','Danh từ','Trợ từ'],ans:0},
  {q:'"学校" nghĩa là gì?',opts:['trường học','thư viện','ngân hàng','quán cà phê'],ans:0},
  {q:'"书" nghĩa là gì?',opts:['sách','bút','bàn','ghế'],ans:0},
  {q:'Câu nào ĐÚNG khi nói "Tôi đi trường học đọc sách"?',opts:['我去学校看书','我看书去学校','我学校去看书','看书我去学校'],ans:0},
  {q:'"昨天" nghĩa là gì?',opts:['hôm qua','hôm nay','ngày mai','tuần trước'],ans:0},
  {q:'"明天" nghĩa là gì?',opts:['ngày mai','hôm qua','hôm nay','tuần sau'],ans:0},
];

var speakingData = {
  t1:{
    intro:'Nhấn 🔊 nghe từng câu mẫu, đọc to theo cho tới khi trôi chảy.',
    models:[
      {zh:'请问，今天几号？',py:'Qǐngwèn, jīntiān jǐ hào?',vn:'Xin hỏi hôm nay là ngày mấy?'},
      {zh:'今天9月1号，星期三。',py:'Jīntiān jiǔ yuè yī hào, xīngqī sān.',vn:'Hôm nay ngày 1 tháng 9, thứ tư.'},
      {zh:'昨天是8月31号，星期二。',py:'Zuótiān shì bā yuè sānshíyī hào, xīngqī èr.',vn:'Hôm qua là thứ ba, ngày 31 tháng 8.'},
      {zh:'明天是9月2号，星期四。',py:'Míngtiān shì jiǔ yuè èr hào, xīngqī sì.',vn:'Ngày mai là thứ năm, ngày 2 tháng 9.'},
      {zh:'我去学校看书。',py:'Wǒ qù xuéxiào kàn shū.',vn:'Tôi đến trường đọc sách.'},
    ],
  },
  t2:{
    intro:'Dùng khung câu cho sẵn, thay thế phần gạch chân bằng số trong ô gợi ý. Nhấn 🔊 để nghe rồi nói to mỗi câu bạn tạo được.',
    drills:[
      {frame:'今天是星期＿＿。',frame_py:'Jīntiān shì xīngqī ___.',vn:'Hôm nay là thứ ＿＿.',options:['一','三','五'],samples:['今天是星期一。','今天是星期三。','今天是星期五。']},
    ],
  },
  t3:{
    intro:'Không nhìn câu mẫu, hãy tưởng tượng bạn đang ở trong tình huống thực tế và tự nói ra câu phù hợp.',
    tasks:[
      {role:'📅 Tình huống 1 — Hỏi ngày ở nơi công cộng',
       guide:'Bạn cần hỏi ngày hôm nay khi đang ở ngân hàng hoặc một nơi công cộng, nên hỏi thật lịch sự.',
       structure:['请问，今天几号？','今天是星期几？'],
       sample:'请问，今天几号？今天是星期几？',
       sample_vn:'Xin hỏi hôm nay là ngày mấy? Hôm nay là thứ mấy?',
       note:'请问 là cách mở đầu câu hỏi LỊCH SỰ bắt buộc phải có khi hỏi người lạ ở nơi công cộng — bỏ 请问 sẽ nghe cộc lốc, thiếu lịch sự.'},
      {role:'🗓️ Tình huống 2 — Xem lịch, nói về hôm qua và ngày mai',
       guide:'Bạn xem lịch và muốn nói cho bạn bè biết hôm qua, ngày mai là thứ mấy.',
       structure:['昨天是星期＿＿，','明天是星期＿＿。'],
       sample:'昨天是星期二，明天是星期四。',
       sample_vn:'Hôm qua là thứ ba, ngày mai là thứ năm.',
       note:'Thứ tự nói luôn từ đơn vị LỚN đến NHỎ: Tháng → Ngày → Thứ — không bao giờ đảo ngược kiểu tiếng Việt.'},
      {role:'🎒 Tình huống 3 — Nói về mục đích đi học',
       guide:'Bạn bè hỏi bạn có đến trường vào cuối tuần không và để làm gì.',
       structure:['你去学校吗？','我去学校看书。'],
       sample:'你去学校吗？我去学校看书。',
       sample_vn:'Bạn có đến trường không? Tôi đến trường đọc sách.',
       note:'Câu liên động "去 + Nơi chốn + Động từ" rất phổ biến để diễn tả MỤC ĐÍCH của việc di chuyển — không cần thêm giới từ nối như tiếng Việt ("để").'},
    ],
  },
};

// ══════════════════════════════════════════
// LUYỆN DỊCH — dùng từ bài 7 + ôn lại từ bài 1-6
// ══════════════════════════════════════════
var translateData = [
  {vi:'Hôm nay là ngày mấy?', zh:'今天几号？', py:'Jīntiān jǐ hào?'},
  {vi:'Xin hỏi, hôm nay là thứ mấy?', zh:'请问，今天星期几？', py:'Qǐngwèn, jīntiān xīngqī jǐ?'},
  {vi:'Ngày mai tôi đi trường xem sách.', zh:'明天我去学校看书。', py:'Míngtiān wǒ qù xuéxiào kàn shū.'},
  {vi:'Hôm qua bạn cùng lớp của tôi đi trường xem sách rồi.', zh:'昨天我同学去学校看书了。', py:'Zuótiān wǒ tóngxué qù xuéxiào kàn shū le.'},
];

// ══════════════════════════════════════════
// LUYỆN DỊCH (chiều Trung→Việt) — noi dung KHAC voi chieu Viet->Trung o tren
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:'Hôm nay là ngày mấy tháng mấy?', zh:'今天几月几号？', py:'Jīntiān jǐ yuè jǐ hào?'},
  {vi:'Hôm nay bạn có đi học không?', zh:'你今天去学校吗？', py:'Nǐ jīntiān qù xuéxiào ma?'},
  {vi:'Ngày mai là thứ mấy?', zh:'明天是星期几？', py:'Míngtiān shì xīngqī jǐ?'},
  {vi:'Hôm qua cô giáo mời tôi xem sách.', zh:'昨天老师请我看书。', py:'Zuótiān lǎoshī qǐng wǒ kàn shū.'},
];
