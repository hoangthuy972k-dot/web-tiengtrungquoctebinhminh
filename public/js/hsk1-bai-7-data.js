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
      },
      {
        "zh": "请说汉语。",
        "py": "Qǐng shuō Hànyǔ.",
        "vn": "Xin hãy nói tiếng Trung."
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
      },
      {
        "zh": "请问，你叫什么名字？",
        "py": "Qǐngwèn, nǐ jiào shénme míngzi?",
        "vn": "Xin hỏi, bạn tên là gì?"
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
      },
      {
        "zh": "今天星期三。",
        "py": "Jīntiān xīngqī sān.",
        "vn": "Hôm nay là thứ Tư."
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
      },
      {
        "zh": "明天几号？",
        "py": "Míngtiān jǐ hào?",
        "vn": "Ngày mai là ngày mấy?"
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
      },
      {
        "zh": "今天是几月几号？",
        "py": "Jīntiān shì jǐ yuè jǐ hào?",
        "vn": "Hôm nay là ngày mấy tháng mấy?"
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
      },
      {
        "zh": "明天星期几？",
        "py": "Míngtiān xīngqī jǐ?",
        "vn": "Ngày mai là thứ mấy?"
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
      },
      {
        "zh": "昨天是星期二。",
        "py": "Zuótiān shì xīngqī èr.",
        "vn": "Hôm qua là thứ Ba."
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
      },
      {
        "zh": "明天你去学校吗？",
        "py": "Míngtiān nǐ qù xuéxiào ma?",
        "vn": "Ngày mai bạn có đến trường không?"
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
      },
      {
        "zh": "你去学校做什么？",
        "py": "Nǐ qù xuéxiào zuò shénme?",
        "vn": "Bạn đến trường làm gì?"
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
      },
      {
        "zh": "明天我不去学校。",
        "py": "Míngtiān wǒ bú qù xuéxiào.",
        "vn": "Ngày mai tôi không đến trường."
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
      },
      {
        "zh": "你看，这个字怎么读？",
        "py": "Nǐ kàn, zhège zì zěnme dú?",
        "vn": "Bạn xem này, chữ này đọc thế nào?"
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
      },
      {
        "zh": "我看汉语书。",
        "py": "Wǒ kàn Hànyǔ shū.",
        "vn": "Tôi đọc sách tiếng Trung."
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

// Điền từ — ngày tháng, câu vị ngữ danh từ, 去 + nơi chốn + việc làm; ôn 会/很/怎么/几/岁/了/的
var fillData = [
  {pre:'Ở trường, bạn gặp một cô lạ mặt và muốn hỏi cho lịch sự: “',blank:'请问',post:'，您是汉语老师吗？”',hint:'(xin hỏi)',ans:'请问',exp:'请问 = xin hỏi, đặt đầu câu khi hỏi người lạ cho lịch sự.'},
  {pre:'Bạn không biết chữ “书” đọc thế nào, bạn nói với bạn cùng bàn: ““书”怎么读？我去',blank:'问',post:'老师。”',hint:'(hỏi)',ans:'问',exp:'问 + người = hỏi ai: 问老师 = hỏi cô giáo.'},
  {pre:'Bạn rủ bạn cùng lớp đến nhà chơi. A: “你几',blank:'号',post:'去我家？” — B: “十五号。”',hint:'(ngày)',ans:'号',exp:'几号 hỏi ngày mấy trong tháng; trả lời bằng số + 号.'},
  {pre:'Mẹ bạn kể về chuyến đi sắp tới: “我妈妈五',blank:'月',post:'去中国。”',hint:'(tháng)',ans:'月',exp:'Tiếng Trung nói từ lớn đến nhỏ: tháng (月) → ngày (号) → thứ (星期).'},
  {pre:'Bạn kể kế hoạch cuối tuần: “明天',blank:'星期',post:'六，我去李月家做菜。”',hint:'(thứ)',ans:'星期',exp:'星期六 = thứ bảy; câu 明天星期六 không cần 是.'},
  {pre:'Bạn cần ghi ngày của hôm qua vào vở. A: “',blank:'昨天',post:'是几号？” — B: “九号。”',hint:'(hôm qua)',ans:'昨天',exp:'昨天 = hôm qua; 昨天是几号 = hôm qua là ngày mấy.'},
  {pre:'A: “',blank:'明天',post:'你去学校做什么？” — B: “我去学校读汉字。”',hint:'(ngày mai)',ans:'明天',exp:'明天 = ngày mai; từ chỉ thời gian đứng trước động từ.'},
  {pre:'Bạn rủ bạn cùng lớp: “星期六你',blank:'去',post:'我家吗？”',hint:'(đi, đến)',ans:'去',exp:'去 + nơi chốn: 去我家 = đến nhà tôi.'},
  {pre:'Bạn khen trường của con gái: “我女儿的',blank:'学校',post:'很大。”',hint:'(trường học)',ans:'学校',exp:'学校 = trường học; 学校很大 = trường rất to.'},
  {pre:'A: “你去朋友家',blank:'看',post:'书吗？” — B: “不，我去朋友家写汉字。”',hint:'(xem, đọc)',ans:'看',exp:'看书 = đọc sách; 去 + nơi chốn + việc làm.'},
  {pre:'Phòng con gái bạn toàn sách là sách: “我女儿有很多',blank:'书',post:'。”',hint:'(sách)',ans:'书',exp:'书 = sách; 很多书 = rất nhiều sách.'},
  {pre:'Sinh nhật con gái, bạn vui vẻ nói với bạn bè: “',blank:'今天',post:'我女儿八岁了！”',hint:'(hôm nay)',ans:'今天',exp:'今天 = hôm nay; 八岁了 = tròn tám tuổi rồi (了 báo thay đổi).'},
];

// Sắp xếp — thời gian đứng trước động từ; 去 + nơi chốn + việc làm
var sortData = [
  {words:['我','星期六','去','老师','家','看','书','。'],ans:'我星期六去老师家看书。',audio:'我星期六去老师家看书。'},
  {words:['十二月','二十五号','是','星期几','？'],ans:'十二月二十五号是星期几？',audio:'十二月二十五号是星期几？'},
  {words:['我朋友','去','中国','看','她妈妈','。'],ans:'我朋友去中国看她妈妈。',audio:'我朋友去中国看她妈妈。'},
  {words:['今天','星期五','，','明天','我','不','去','学校','。'],ans:'今天星期五，明天我不去学校。',audio:'今天星期五，明天我不去学校。'},
  {words:['请','你','读','你的','名字','。'],ans:'请你读你的名字。',audio:'请你读你的名字。'},
  {words:['你','妈妈','几','号','去','美国','？'],ans:'你妈妈几号去美国？',audio:'你妈妈几号去美国？'},
];

// Nối — câu hỏi ↔ câu trả lời
var matchData = [
  {left:'今天几月几号？',right:'十月一号。'},
  {left:'昨天星期几？',right:'星期二。'},
  {left:'你去学校做什么？',right:'我去看书。'},
  {left:'你女儿今年几岁？',right:'她七岁。'},
  {left:'你明天去谁家？',right:'我去李月家。'},
];

// Trắc nghiệm — chọn câu đúng tình huống, chọn câu đáp, tìm câu sai
var mcData = [
  {q:'Bạn muốn nói: “Hôm nay thứ năm, ngày 3 tháng 10.”',opts:['今天十月三号，星期四。','今天星期四，三号十月。','今天十月三号，星期五。','今天三号十月，星期四。'],ans:0,exp:'Thứ tự tháng → ngày → thứ; “thứ năm” tiếng Việt là 星期四 (thứ hai = 星期一).'},
  {q:'Bạn muốn nói: “Ngày mai tôi đến trường hỏi cô giáo.”',opts:['明天我去学校问老师。','我去学校明天问老师。','明天我问老师去学校。','我去明天学校问老师。'],ans:0,exp:'Thời gian đứng trước động từ; 去 + nơi chốn rồi mới đến việc làm (问老师).'},
  {q:'Bạn của bạn nói hôm nay thứ tư, nhưng không phải. Bạn nói: “Hôm nay không phải thứ tư.”',opts:['今天不是星期三。','今天不星期三。','今天是不星期三。','不今天是星期三。'],ans:0,exp:'Câu vị ngữ danh từ khẳng định có thể bỏ 是, nhưng phủ định phải nói 不是.'},
  {q:'A: “你星期几去李月家？” — B đáp:',opts:['我星期五去。','我去星期五。','我五星期去。','星期我五去。'],ans:0,exp:'Từ chỉ thời gian (星期五) đứng trước động từ 去, không đặt sau như tiếng Việt.'},
  {q:'Bạn muốn hỏi bạn: “Tháng mấy bạn đi Trung Quốc?”',opts:['你几月去中国？','你去中国几月？','你什么月去中国？','你几月去中国吗？'],ans:0,exp:'Hỏi tháng dùng 几月, đặt trước động từ; đã có 几 thì không thêm 吗.'},
  {q:'A: “你去中国做什么？” — B đáp hợp lý:',opts:['我去看朋友。','我是中国人。','十月去。','我会说汉语。'],ans:0,exp:'Hỏi 做什么 (làm gì) thì đáp việc làm: 去看朋友 = đi thăm bạn.'},
  {q:'Có khách đến văn phòng, bạn lịch sự mời khách viết tên:',opts:['请您写您的名字。','请问您写名字。','您请写名字吗？','问您写名字。'],ans:0,exp:'请 + động từ = mời, xin (lịch sự); 请问 chỉ dùng để mở đầu câu hỏi.'},
  {q:'Hôm nay là 星期三 (thứ tư). Bạn muốn nói “Ngày mai là thứ năm”:',opts:['明天是星期四。','明天是星期五。','昨天是星期四。','明天是四号。'],ans:0,exp:'Thứ năm = 星期四 (số trong tiếng Trung nhỏ hơn tiếng Việt 1); ngày mai là 明天.'},
  {q:'Câu nào SAI?',opts:['我去学校明天。','我女儿的书很多。','我妈妈去美国看我。','你今天去学校吗？'],ans:0,exp:'Từ chỉ thời gian phải đứng trước động từ: 我明天去学校 / 明天我去学校.'},
];

var speakingData = {
  t1:{
    intro:'Nhấn nút loa nghe từng câu mẫu, đọc to theo cho tới khi trôi chảy. Chú ý 请问 đọc liền: qǐngwèn; 星期 đọc xīngqī.',
    models:[
      {zh:'请问，今天几号？',py:'Qǐngwèn, jīntiān jǐ hào?',vn:'Xin hỏi, hôm nay ngày mấy?'},
      {zh:'我去学校看书。',py:'Wǒ qù xuéxiào kàn shū.',vn:'Tôi đến trường đọc sách.'},
      {zh:'我去朋友家做中国菜。',py:'Wǒ qù péngyou jiā zuò Zhōngguó cài.',vn:'Tôi đến nhà bạn nấu món Trung Quốc.'},
      {zh:'我妈妈今年五十岁。',py:'Wǒ māma jīnnián wǔshí suì.',vn:'Mẹ tôi năm nay năm mươi tuổi.'},
    ],
  },
  t2:{
    intro:'Dùng khung câu cho sẵn, thay phần gạch chân bằng cụm từ trong ô gợi ý. Nhấn nút loa để nghe rồi nói to mỗi câu bạn tạo được.',
    drills:[
      {frame:'星期六我去＿＿。',frame_py:'Xīngqī liù wǒ qù ___.',vn:'Thứ bảy tôi đi ＿＿.',options:['老师家写汉字','美国看女儿','同学家做菜'],samples:['星期六我去老师家写汉字。','星期六我去美国看女儿。','星期六我去同学家做菜。']},
      {frame:'＿＿是星期几？',frame_py:'___ shì xīngqī jǐ?',vn:'＿＿ là thứ mấy?',options:['明天','昨天','五月一号'],samples:['明天是星期几？','昨天是星期几？','五月一号是星期几？']},
    ],
  },
  t3:{
    intro:'Không nhìn câu mẫu, hãy tưởng tượng bạn đang ở trong tình huống thực tế và tự nói ra câu phù hợp.',
    tasks:[
      {role:'📅 Tình huống 1 — Hỏi ngày ở bưu điện',
       guide:'Bạn cần điền ngày vào phiếu gửi hàng nhưng quên mất hôm nay ngày mấy, thứ mấy. Hãy hỏi nhân viên thật lịch sự.',
       structure:['请问，＿＿？','＿＿星期几？'],
       sample:'请问，今天几月几号？星期几？',
       sample_vn:'Xin hỏi, hôm nay ngày mấy tháng mấy? Thứ mấy ạ?',
       note:'Hỏi người lạ nên mở đầu bằng 请问. Đã có 几 trong câu thì không thêm 吗.'},
      {role:'🎒 Tình huống 2 — Kể kế hoạch cuối tuần',
       guide:'Bạn cùng lớp hỏi cuối tuần bạn làm gì. Hãy nói thứ bảy bạn đến nhà ai và đến đó làm gì.',
       structure:['星期＿＿我去＿＿家＿＿。'],
       sample:'星期六我去李月家看书。',
       sample_vn:'Thứ bảy tôi đến nhà Lý Nguyệt đọc sách.',
       note:'Người Việt hay nói “我去朋友家星期六” theo thứ tự tiếng Việt. Tiếng Trung đặt thời gian TRƯỚC động từ: 星期六我去… / 我星期六去…'},
      {role:'🗓️ Tình huống 3 — Giới thiệu hôm nay',
       guide:'Đầu giờ học, cô giáo gọi bạn lên nói hôm nay là ngày mấy, thứ mấy, và hôm qua là thứ mấy.',
       structure:['今天＿＿月＿＿号，星期＿＿。','昨天星期＿＿。'],
       sample:'今天十一月十七号，星期二。昨天星期一。',
       sample_vn:'Hôm nay ngày 17 tháng 11, thứ ba. Hôm qua thứ hai.',
       note:'Đừng đọc thẳng số thứ kiểu tiếng Việt: thứ ba = 星期二 (số tiếng Trung nhỏ hơn 1). Câu ngày tháng không cần 是: 今天星期二.'},
    ],
  },
};

// ══════════════════════════════════════════
// LUYỆN DỊCH — dùng từ bài 7 + ôn lại từ bài 1-6
// ══════════════════════════════════════════
var translateData = [
  {vi:'Thứ bảy là ngày 20 tháng 12.', zh:'星期六是十二月二十号。', py:'Xīngqī liù shì shí\'èr yuè èrshí hào.'},
  {vi:'Ngày mai tôi đến nhà bạn cùng lớp viết chữ Hán.', zh:'明天我去同学家写汉字。', py:'Míngtiān wǒ qù tóngxué jiā xiě Hànzì.'},
  {vi:'Sách của bạn nhiều quá!', zh:'你的书很多！', py:'Nǐ de shū hěn duō!'},
];

// ══════════════════════════════════════════
// LUYỆN DỊCH (chiều Trung→Việt) — noi dung KHAC voi chieu Viet->Trung o tren
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:'Ngày mai bạn tôi đi Mỹ thăm con gái cô ấy.', zh:'我朋友明天去美国看她女儿。', py:'Wǒ péngyou míngtiān qù Měiguó kàn tā nǚ\'ér.'},
  {vi:'Ngày mai tôi không đến trường, tôi đi thăm cô giáo tiếng Trung của tôi.', zh:'我明天不去学校，我去看我的汉语老师。', py:'Wǒ míngtiān bú qù xuéxiào, wǒ qù kàn wǒ de Hànyǔ lǎoshī.'},
];

// ══════════════════════════════════════════
// LUYỆN NGHE — nghe câu → chọn đáp án (đọc bằng giọng máy), chỉ dùng từ đã học
// ══════════════════════════════════════════
var listenData = [
  {audio:'今天十二月九号，星期一。',
   questions:[
     {q:'Hôm nay là ngày nào?',opts:['Ngày 12 tháng 9','Ngày 9 tháng 12','Ngày 19 tháng 12'],ans:1,exp:'十二月九号 = ngày 9 tháng 12 (tháng nói trước, ngày nói sau).'},
     {q:'Hôm nay là thứ mấy?',opts:['Chủ nhật','Thứ ba','Thứ hai'],ans:2,exp:'星期一 = thứ hai.'},
   ]},
  {audio:'星期六我去朋友家，她妈妈会做中国菜。',
   questions:[
     {q:'Thứ bảy người nói đi đâu?',opts:['Đến nhà bạn','Đến trường','Đến nhà cô giáo'],ans:0,exp:'去朋友家 = đến nhà bạn.'},
     {q:'Mẹ của người bạn biết làm gì?',opts:['Viết chữ Hán','Nấu món Trung Quốc','Nói tiếng Anh'],ans:1,exp:'会做中国菜 = biết nấu món Trung Quốc.'},
   ]},
  {audio:'我女儿明天去学校，她今年六岁。',
   questions:[
     {q:'Con gái người nói mấy tuổi?',opts:['Mười sáu tuổi','Sáu mươi tuổi','Sáu tuổi'],ans:2,exp:'六岁 = sáu tuổi.'},
   ]},
  {audio:'请问，“学校”怎么写？',
   questions:[
     {q:'Người nói muốn biết điều gì?',opts:['Cách viết từ “trường học”','Cách đọc từ “trường học”','Trường học ở đâu'],ans:0,exp:'怎么写 = viết thế nào; 学校 = trường học.'},
   ]},
  {audio:'我九月去中国看我的同学。',
   questions:[
     {q:'Người nói sang Trung Quốc làm gì?',opts:['Đi học','Thăm bạn cùng lớp','Nấu ăn'],ans:1,exp:'看我的同学 = thăm bạn cùng lớp của tôi (看 ở đây là thăm).'},
     {q:'Khi nào người nói đi?',opts:['Thứ hai','Ngày mồng chín','Tháng chín'],ans:2,exp:'九月 = tháng chín; ngày mồng chín là 九号.'},
   ]},
];

// Sach bai tap bai 7 (Doc + Chu Han, khong pinyin)
var wbData = { sections: [
  { title: 'Sách bài tập · Đọc & Chữ Hán', blocks: [
    { type: 'mocktest',
      note: 'Phần Nghe và Ngữ âm của sách cần file nghe nên chưa có ở đây. Bài viết chữ theo thứ tự nét (Chữ Hán – Phần 2) không chấm được trên máy, hãy luyện viết vào vở.',
      listening: [],
      reading: [
        { n: 13, part: 'Phần 1 · Nhìn tranh: từ dưới tranh đúng hay sai?', img: '/images/hsk1-bai-7-wb/q13.jpg', prompt: '看书', options: [{ key: 'A', text: '✓ Đúng' }, { key: 'B', text: '✗ Sai' }], answer: 'A', vn: '看书: đọc sách. Tranh chàng trai đang cầm sách đọc → Đúng.' },
        { n: 14, img: '/images/hsk1-bai-7-wb/q14.jpg', prompt: '学校', options: [{ key: 'A', text: '✓ Đúng' }, { key: 'B', text: '✗ Sai' }], answer: 'B', vn: '学校: trường học. Tranh là một chi nhánh ngân hàng (biển 中国银行), không phải trường học → Sai.' },
        { n: 15, img: '/images/hsk1-bai-7-wb/q15.jpg', prompt: '六月六号', options: [{ key: 'A', text: '✓ Đúng' }, { key: 'B', text: '✗ Sai' }], answer: 'A', vn: '六月六号: ngày 6 tháng 6. Lịch ghi June (tháng 6), ngày 6 → Đúng.' },
        { n: 16, img: '/images/hsk1-bai-7-wb/q16.jpg', prompt: '吃中国菜', options: [{ key: 'A', text: '✓ Đúng' }, { key: 'B', text: '✗ Sai' }], answer: 'B', vn: '吃中国菜: ăn món Trung Quốc. Tranh cô gái ngồi quán cà phê với máy tính, không có món Trung Quốc → Sai.' },
        { n: 17, img: '/images/hsk1-bai-7-wb/q17.jpg', prompt: '去学校', options: [{ key: 'A', text: '✓ Đúng' }, { key: 'B', text: '✗ Sai' }], answer: 'B', vn: '去学校: đi đến trường. Tranh ba cô gái xách túi đi dạo trung tâm mua sắm → Sai.' },
        { n: 18, part: 'Phần 2 · Đọc câu hỏi, chọn câu trả lời đúng', bank: [
          { key: 'A', text: '她29岁。' },
          { key: 'B', text: '今天星期日。' },
          { key: 'C', text: '我去同学家看书。' },
          { key: 'D', text: '我不会，我爸爸会。' },
          { key: 'E', text: '今天是10月5号。' },
          { key: 'F', text: '好的，谢谢！' }
        ], letters: ['A', 'B', 'C', 'D', 'E', 'F'], prompt: '今天星期几？', answer: 'B', vn: 'Hôm nay thứ mấy? — B: Hôm nay Chủ nhật. (星期几 hỏi thứ → trả lời 星期日)' },
        { n: 19, letters: ['A', 'B', 'C', 'D', 'E', 'F'], prompt: '今天是几月几号？', answer: 'E', vn: 'Hôm nay là ngày mấy tháng mấy? — E: Hôm nay là ngày 5 tháng 10. (几月几号 → 10月5号)' },
        { n: 20, letters: ['A', 'B', 'C', 'D', 'E', 'F'], prompt: '你的汉语老师多大了？', answer: 'A', vn: 'Cô giáo tiếng Trung của bạn bao nhiêu tuổi rồi? — A: Cô ấy 29 tuổi. (多大了 hỏi tuổi người lớn, như ở bài 5)' },
        { n: 21, letters: ['A', 'B', 'C', 'D', 'E', 'F'], prompt: '明天你做什么？', answer: 'C', vn: 'Ngày mai bạn làm gì? — C: Tôi đến nhà bạn học đọc sách.' },
        { n: 22, letters: ['A', 'B', 'C', 'D', 'E', 'F'], prompt: '你会说汉语吗？', answer: 'D', vn: 'Bạn có biết nói tiếng Trung không? — D: Tôi không biết, bố tôi biết. (会 của bài 6)' },
        { n: 23, part: 'Phần 3 · Chọn từ điền vào chỗ trống', bank: [
          { key: 'A', text: '几' },
          { key: 'B', text: '月' },
          { key: 'C', text: '号' },
          { key: 'D', text: '名字' },
          { key: 'E', text: '星期' }
        ], letters: ['A', 'B', 'C', 'D', 'E'], prompt: '昨天是（　）三。', answer: 'E', vn: 'Hôm qua là thứ Tư. — 星期三: thứ Tư (星期 + số).' },
        { n: 24, letters: ['A', 'B', 'C', 'D', 'E'], prompt: '明天星期（　）？', answer: 'A', vn: 'Ngày mai thứ mấy? — 星期几: thứ mấy (几 hỏi số nhỏ).' },
        { n: 25, letters: ['A', 'B', 'C', 'D', 'E'], prompt: '今天是9（　）31号，星期六。', answer: 'B', vn: 'Hôm nay là ngày 31 tháng 9, thứ Bảy. — Thứ tự trong tiếng Trung: tháng (月) trước, ngày (号) sau, rồi đến thứ.' },
        { n: 26, letters: ['A', 'B', 'C', 'D', 'E'], prompt: '你10月几（　）去中国？', answer: 'C', vn: 'Ngày mấy tháng 10 bạn đi Trung Quốc? — 几号: ngày mấy; thời gian đứng trước động từ 去.' },
        { n: 27, bank: [
          { key: 'F', text: '问' },
          { key: 'G', text: '去' },
          { key: 'H', text: '做' },
          { key: 'I', text: '会' }
        ], letters: ['F', 'G', 'H', 'I'], prompt: '明天我（　）一个中国朋友家吃饭。', answer: 'G', vn: 'Ngày mai tôi đến nhà một người bạn Trung Quốc ăn cơm. — 去 + nơi chốn + làm gì.' },
        { n: 28, letters: ['F', 'G', 'H', 'I'], prompt: '明天星期六，你（　）什么？', answer: 'H', vn: 'Ngày mai thứ Bảy, bạn làm gì? — 做什么: làm gì.' },
        { n: 29, letters: ['F', 'G', 'H', 'I'], prompt: '我（　）说汉语，不（　）写汉字。', answer: 'I', vn: 'Tôi biết nói tiếng Trung, không biết viết chữ Hán. — Cả hai chỗ trống đều là 会 (会 / 不会 + động từ).' },
        { n: 30, letters: ['F', 'G', 'H', 'I'], prompt: '请（　），这个汉字怎么读？', answer: 'F', vn: 'Xin hỏi, chữ Hán này đọc thế nào? — 请问: xin hỏi (mở đầu câu hỏi lịch sự).' }
      ],
      writing: [
        { n: '1a', part: 'Chữ Hán · Phần 1 · Tìm chữ có bộ cho sẵn (A 酒 · B 说 · C 谁 · D 让 · E 海 · F 认 · G 没 · H 河)', prompt: 'Chữ nào dưới đây có bộ 氵 (ba chấm thủy)?', options: [{ key: 'A', text: '酒' }, { key: 'B', text: '说' }, { key: 'C', text: '谁' }, { key: 'D', text: '认' }], answer: 'A', vn: '酒 (rượu) có bộ 氵 bên trái — liên quan đến nước, chất lỏng. 说, 谁, 认 có bộ 讠.' },
        { n: '1b', prompt: 'Chữ nào dưới đây có bộ 氵 (ba chấm thủy)?', options: [{ key: 'A', text: '让' }, { key: 'B', text: '海' }, { key: 'C', text: '说' }, { key: 'D', text: '谁' }], answer: 'B', vn: '海 (biển) có bộ 氵. 让, 说, 谁 có bộ 讠.' },
        { n: '1c', prompt: 'Chữ nào dưới đây có bộ 氵 (ba chấm thủy)?', options: [{ key: 'A', text: '认' }, { key: 'B', text: '让' }, { key: 'C', text: '没' }, { key: 'D', text: '说' }], answer: 'C', vn: '没 (không có) có bộ 氵. 认, 让, 说 có bộ 讠.' },
        { n: '1d', prompt: 'Chữ nào dưới đây có bộ 氵 (ba chấm thủy)?', options: [{ key: 'A', text: '谁' }, { key: 'B', text: '认' }, { key: 'C', text: '让' }, { key: 'D', text: '河' }], answer: 'D', vn: '河 (sông) có bộ 氵. 谁, 认, 让 có bộ 讠.' },
        { n: '2a', prompt: 'Chữ nào dưới đây có bộ 讠 (bộ ngôn – lời nói)?', options: [{ key: 'A', text: '说' }, { key: 'B', text: '酒' }, { key: 'C', text: '海' }, { key: 'D', text: '河' }], answer: 'A', vn: '说 (nói) có bộ 讠 — liên quan đến lời nói. 酒, 海, 河 có bộ 氵.' },
        { n: '2b', prompt: 'Chữ nào dưới đây có bộ 讠 (bộ ngôn – lời nói)?', options: [{ key: 'A', text: '没' }, { key: 'B', text: '谁' }, { key: 'C', text: '河' }, { key: 'D', text: '酒' }], answer: 'B', vn: '谁 (ai) có bộ 讠. 没, 河, 酒 có bộ 氵.' },
        { n: '2c', prompt: 'Chữ nào dưới đây có bộ 讠 (bộ ngôn – lời nói)?', options: [{ key: 'A', text: '海' }, { key: 'B', text: '没' }, { key: 'C', text: '让' }, { key: 'D', text: '河' }], answer: 'C', vn: '让 (để, bảo) có bộ 讠. 海, 没, 河 có bộ 氵.' },
        { n: '2d', prompt: 'Chữ nào dưới đây có bộ 讠 (bộ ngôn – lời nói)?', options: [{ key: 'A', text: '酒' }, { key: 'B', text: '海' }, { key: 'C', text: '没' }, { key: 'D', text: '认' }], answer: 'D', vn: '认 (nhận biết, như 认识) có bộ 讠. 酒, 海, 没 có bộ 氵.' }
      ]
    }
  ]}
] };
