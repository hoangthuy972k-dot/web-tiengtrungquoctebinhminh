// ══════════════════════════════════════════
// DATA — HSK3 Bài 7: 我跟她都认识五年了 (Tôi và cô ấy quen nhau được năm năm rồi)
// Nguồn: HSK标准教程3 (Giáo trình chuẩn HSK 3 — nhantriviet.com)
// ══════════════════════════════════════════
var vocabData = [
  {
    "n": 1,
    "zh": "同事",
    "py": "tóngshì",
    "pos": "Danh từ",
    "vn": "đồng nghiệp",
    "hv": "đồng sự",
    "em": "👔",
    "lesson": 1,
    "explain": [
      "Người cùng làm việc trong một cơ quan, công ty."
    ],
    "usage": "Danh từ; làm định ngữ với 的 hoặc trực tiếp trước danh từ khác: 新同事.",
    "collo": [
      "新同事",
      "老同事",
      "我的同事"
    ],
    "ex_zh": "那个漂亮的新同事是谁？",
    "ex_py": "Nàge piàoliang de xīn tóngshì shì shéi?",
    "ex_vn": "Đồng nghiệp mới xinh đẹp kia là ai vậy?",
    "exList": [
      {
        "zh": "那个漂亮的新同事是谁？",
        "py": "Nàge piàoliang de xīn tóngshì shì shéi?",
        "vn": "Đồng nghiệp mới xinh đẹp kia là ai vậy?"
      },
      {
        "zh": "你今天的工作我还没做完，你来帮帮我好吗？",
        "py": "Jīntiān de gōngzuò wǒ hái méi zuòwán, nǐ lái bāngbang wǒ hǎo ma?",
        "vn": "Công việc hôm nay tôi vẫn chưa làm xong, bạn qua giúp tôi được không?"
      },
      {
        "zh": "她是我们公司新来的同事。",
        "py": "Tā shì wǒmen gōngsī xīn lái de tóngshì.",
        "vn": "Cô ấy là đồng nghiệp mới đến công ty chúng tôi."
      }
    ],
    "hanzi": [
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
        "prompt": "Cô ấy làm ở công ty này ba năm rồi, nên đồng nghiệp ai cũng quen cô ấy.",
        "answer": "因为她在这家公司工作三年了，所以同事们都认识她。",
        "answerPy": "Yīnwèi tā zài zhè jiā gōngsī gōngzuò sān nián le, suǒyǐ tóngshìmen dōu rènshi tā.",
        "note": "同事 (cùng làm) / 同学 (cùng học) — cùng một cách ghép.",
        "pair": "因为……所以……"
      },
      {
        "promptLang": "vi",
        "prompt": "Vì cô ấy vừa đến công ty nên mọi người chưa quen cô ấy.",
        "answer": "因为她刚来公司，所以大家还不认识她。",
        "answerPy": "Yīnwèi tā gāng lái gōngsī, suǒyǐ dàjiā hái bú rènshi tā.",
        "note": "因为……所以…… nêu nguyên nhân — kết quả.",
        "pair": "因为……所以……"
      }
    ],
    "colloFull": [
      {
        "zh": "新同事",
        "py": "xīn tóngshì",
        "vn": "đồng nghiệp mới"
      },
      {
        "zh": "老同事",
        "py": "lǎo tóngshì",
        "vn": "đồng nghiệp cũ"
      },
      {
        "zh": "我的同事",
        "py": "wǒ de tóngshì",
        "vn": "đồng nghiệp của tôi"
      },
      {
        "zh": "跟同事一起",
        "py": "gēn tóngshì yìqǐ",
        "vn": "cùng với đồng nghiệp"
      },
      {
        "zh": "同事们",
        "py": "tóngshì men",
        "vn": "các đồng nghiệp"
      }
    ],
    "patterns": [
      {
        "s": "同 + 事",
        "m": "Người cùng (同) làm việc (事)"
      },
      {
        "s": "同事 (cùng làm) / 同学 (cùng học) / 同屋 (cùng phòng)"
      }
    ]
  },
  {
    "n": 2,
    "zh": "以前",
    "py": "yǐqián",
    "pos": "Danh từ",
    "vn": "trước đây, trước kia",
    "hv": "dĩ tiền",
    "em": "⏳",
    "lesson": 1,
    "explain": [
      "Khoảng thời gian đã qua so với hiện tại."
    ],
    "usage": "Danh từ, thường đứng đầu câu hoặc trước động từ: 以前 + [câu].",
    "collo": [
      "以前工作",
      "以前在哪儿",
      "以前没有"
    ],
    "ex_zh": "以前她在哪儿工作？",
    "ex_py": "Yǐqián tā zài nǎr gōngzuò?",
    "ex_vn": "Trước đây cô ấy làm việc ở đâu?",
    "exList": [
      {
        "zh": "以前她在哪儿工作？",
        "py": "Yǐqián tā zài nǎr gōngzuò?",
        "vn": "Trước đây cô ấy làm việc ở đâu?"
      },
      {
        "zh": "我以前在学校工作，现在在银行工作。",
        "py": "Wǒ yǐqián zài xuéxiào gōngzuò, xiànzài zài yínháng gōngzuò.",
        "vn": "Trước đây tôi làm việc ở trường học, bây giờ làm ở ngân hàng."
      },
      {
        "zh": "你为什么不在书店工作了？那不是我以前喜欢的。",
        "py": "Nǐ wèishénme bú zài shūdiàn gōngzuò le? Nà bú shì wǒ yǐqián xǐhuan de.",
        "vn": "Sao bạn không làm ở hiệu sách nữa? Đó không phải điều tôi từng thích."
      }
    ],
    "hanzi": [
      {
        "c": "前",
        "p": "qián",
        "type": "上下结构 · Trên-dưới",
        "st": 9,
        "ord": "⺈+月 trên → 刂 dưới",
        "rad": "刂 (đao)",
        "mean": "trước, phía trước",
        "tip": "Chữ mô phỏng chiếc thuyền đi VỀ PHÍA TRƯỚC → mở rộng nghĩa THỜI GIAN TRƯỚC (以前 = khoảng trước đây).",
        "cf": "剪 (jiǎn – \"cắt\", có 刀 trên thay vì 月\")",
        "w": "以前 / 前边 / 前年"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Trước đây tôi thích chơi thể thao, nhưng bây giờ thích nghe nhạc hơn.",
        "answer": "我以前喜欢运动，但是现在更喜欢听音乐。",
        "answerPy": "Wǒ yǐqián xǐhuan yùndòng, dànshì xiànzài gèng xǐhuan tīng yīnyuè.",
        "note": "更 là từ bài 6 — dùng khi so với tình trạng trước.",
        "pair": "虽然……但是……"
      },
      {
        "promptLang": "vi",
        "prompt": "Tuy trước đây tôi không thích âm nhạc nhưng bây giờ lại rất thích.",
        "answer": "虽然我以前不喜欢音乐，但是现在很喜欢。",
        "answerPy": "Suīrán wǒ yǐqián bù xǐhuan yīnyuè, dànshì xiànzài hěn xǐhuan.",
        "note": "虽然……但是…… diễn tả sự tương phản.",
        "pair": "虽然……但是……"
      }
    ],
    "colloFull": [
      {
        "zh": "以前在哪儿",
        "py": "yǐqián zài nǎr",
        "vn": "trước đây ở đâu"
      },
      {
        "zh": "以前没有",
        "py": "yǐqián méiyǒu",
        "vn": "trước đây không có"
      },
      {
        "zh": "很久以前",
        "py": "hěn jiǔ yǐqián",
        "vn": "rất lâu trước đây"
      },
      {
        "zh": "来中国以前",
        "py": "lái Zhōngguó yǐqián",
        "vn": "trước khi đến Trung Quốc"
      },
      {
        "zh": "跟以前一样",
        "py": "gēn yǐqián yíyàng",
        "vn": "giống như trước"
      }
    ],
    "patterns": [
      {
        "s": "V + 以前",
        "m": "Trước khi làm gì — 以前 đứng SAU"
      },
      {
        "s": "以前 ↔ 以后",
        "m": "Trước đây ↔ sau này"
      }
    ]
  },
  {
    "n": 3,
    "zh": "银行",
    "py": "yínháng",
    "pos": "Danh từ",
    "vn": "ngân hàng",
    "hv": "ngân hàng",
    "em": "🏦",
    "lesson": 1,
    "explain": [
      "Tổ chức tài chính nhận gửi tiền, cho vay và các dịch vụ liên quan."
    ],
    "usage": "Danh từ; đi cùng động từ 在/去: 在银行工作, 去银行.",
    "collo": [
      "在银行工作",
      "去银行",
      "银行经理"
    ],
    "ex_zh": "她在银行工作了两年以后来的我们公司。",
    "ex_py": "Tā zài yínháng gōngzuòle liǎng nián yǐhòu lái de wǒmen gōngsī.",
    "ex_vn": "Cô ấy làm việc ở ngân hàng hai năm rồi mới đến công ty chúng tôi.",
    "exList": [
      {
        "zh": "她在银行工作了两年以后来的我们公司。",
        "py": "Tā zài yínháng gōngzuòle liǎng nián yǐhòu lái de wǒmen gōngsī.",
        "vn": "Cô ấy làm việc ở ngân hàng hai năm rồi mới đến công ty chúng tôi."
      },
      {
        "zh": "欢迎你来我们银行。",
        "py": "Huānyíng nǐ lái wǒmen yínháng.",
        "vn": "Hoan nghênh bạn đến ngân hàng chúng tôi."
      },
      {
        "zh": "我是2010年开始工作的，在银行工作了两年以后，来到了这家公司。",
        "py": "Wǒ shì èr líng yī líng nián kāishǐ gōngzuò de, zài yínháng gōngzuòle liǎng nián yǐhòu, láidàole zhè jiā gōngsī.",
        "vn": "Tôi bắt đầu làm việc từ năm 2010, làm ở ngân hàng hai năm rồi mới đến công ty này."
      }
    ],
    "hanzi": [
      {
        "c": "银",
        "p": "yín",
        "type": "左右结构 · Trái-phải",
        "st": 11,
        "ord": "钅 trái → 艮 phải",
        "rad": "钅 (kim – kim loại)",
        "mean": "bạc",
        "tip": "钅(kim loại) + 艮(cứng, bền) → kim loại quý bền chắc = BẠC; 银行 vốn nghĩa \"cửa hàng đổi bạc\" thời cổ.",
        "cf": "很 (hěn – \"rất\", có 彳 thay vì 钅\")",
        "w": "银行 / 银色"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Nếu bạn cần đổi tiền thì đi ngân hàng đi.",
        "answer": "如果你需要换钱，就去银行吧。",
        "answerPy": "Rúguǒ nǐ xūyào huàn qián, jiù qù yínháng ba.",
        "note": "如果……就…… diễn tả giả thiết — kết quả.",
        "pair": "如果……就……"
      },
      {
        "promptLang": "vi",
        "prompt": "Đồng nghiệp mới của tôi trước đây không những làm ở ngân hàng, mà còn làm rất lâu.",
        "answer": "我的新同事以前不但在银行工作，而且工作了很久。",
        "answerPy": "Wǒ de xīn tóngshì yǐqián búdàn zài yínháng gōngzuò, érqiě gōngzuòle hěn jiǔ.",
        "note": "在 + nơi chốn + 工作 — làm việc ở đâu.",
        "pair": "不但……而且……"
      }
    ],
    "colloFull": [
      {
        "zh": "去银行",
        "py": "qù yínháng",
        "vn": "đi ngân hàng"
      },
      {
        "zh": "在银行工作",
        "py": "zài yínháng gōngzuò",
        "vn": "làm ở ngân hàng"
      },
      {
        "zh": "银行经理",
        "py": "yínháng jīnglǐ",
        "vn": "giám đốc ngân hàng"
      },
      {
        "zh": "银行门口",
        "py": "yínháng ménkǒu",
        "vn": "cửa ngân hàng"
      },
      {
        "zh": "银行开门了",
        "py": "yínháng kāi mén le",
        "vn": "ngân hàng mở cửa rồi"
      }
    ],
    "patterns": [
      {
        "s": "在 + 银行 + 工作",
        "m": "Làm việc ở ngân hàng"
      },
      {
        "s": "银 + 行",
        "m": "Nơi (行) giữ bạc (银)"
      }
    ]
  },
  {
    "n": 4,
    "zh": "久",
    "py": "jiǔ",
    "pos": "Tính từ",
    "vn": "lâu, lâu dài",
    "hv": "cửu",
    "em": "⏱️",
    "lesson": 2,
    "explain": [
      "Khoảng thời gian dài."
    ],
    "usage": "Tính từ, thường dùng trong câu hỏi 多久 (bao lâu) hoặc 很久 (rất lâu).",
    "collo": [
      "多久",
      "很久",
      "等了很久"
    ],
    "ex_zh": "你们唱了多久？",
    "ex_py": "Nǐmen chàngle duō jiǔ?",
    "ex_vn": "Các bạn hát bao lâu?",
    "exList": [
      {
        "zh": "你们唱了多久？",
        "py": "Nǐmen chàngle duō jiǔ?",
        "vn": "Các bạn hát bao lâu?"
      },
      {
        "zh": "男的看了多长时间电影？很久。",
        "py": "Nánde kànle duō cháng shíjiān diànyǐng? Hěn jiǔ.",
        "vn": "Người nam xem phim bao lâu? Rất lâu."
      },
      {
        "zh": "我在这儿等了很久了。",
        "py": "Wǒ zài zhèr děngle hěn jiǔ le.",
        "vn": "Tôi đợi ở đây rất lâu rồi."
      }
    ],
    "hanzi": [
      {
        "c": "久",
        "p": "jiǔ",
        "type": "独体字 · Chữ đơn",
        "st": 3,
        "ord": "nét liền",
        "rad": "丿 (phiệt)",
        "mean": "lâu",
        "tip": "Chữ cổ mô phỏng hình người bị giữ lại phía sau (chân bị kéo) → ý nghĩa KÉO DÀI THỜI GIAN = LÂU.",
        "cf": "夂 (zhǐ – bộ thủ \"đi chậm\", hình dáng gần giống\")",
        "w": "多久 / 很久 / 长久"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Chỉ cần bạn đợi thêm chút nữa thôi, không lâu đâu.",
        "answer": "只要你再等一会儿，不会很久的。",
        "answerPy": "Zhǐyào nǐ zài děng yíhuìr, bú huì hěn jiǔ de.",
        "note": "只要……就…… (ở đây rút gọn 就) diễn tả điều kiện đủ.",
        "pair": "只要……"
      },
      {
        "promptLang": "vi",
        "prompt": "Bà tôi làm ở ngân hàng rất lâu rồi, nên quen rất nhiều người ở đó.",
        "answer": "因为我奶奶在银行工作很久了，所以认识那儿很多人。",
        "answerPy": "Yīnwèi wǒ nǎinai zài yínháng gōngzuò hěn jiǔ le, suǒyǐ rènshi nàr hěn duō rén.",
        "note": "V + 了 + 很久 — làm gì đã lâu.",
        "pair": "因为……所以……"
      }
    ],
    "colloFull": [
      {
        "zh": "多久",
        "py": "duō jiǔ",
        "vn": "bao lâu"
      },
      {
        "zh": "很久",
        "py": "hěn jiǔ",
        "vn": "rất lâu"
      },
      {
        "zh": "等了很久",
        "py": "děng le hěn jiǔ",
        "vn": "đợi rất lâu"
      },
      {
        "zh": "好久不见",
        "py": "hǎo jiǔ bú jiàn",
        "vn": "lâu rồi không gặp"
      },
      {
        "zh": "住了很久",
        "py": "zhù le hěn jiǔ",
        "vn": "sống rất lâu"
      }
    ],
    "patterns": [
      {
        "s": "V + 了 + 很久",
        "m": "Làm gì đã lâu"
      },
      {
        "s": "多久？",
        "m": "Bao lâu? — hỏi thời lượng"
      }
    ]
  },
  {
    "n": 5,
    "zh": "感兴趣",
    "py": "gǎn xìngqù",
    "pos": "Cụm động từ",
    "vn": "có hứng thú, thích",
    "hv": "cảm hứng thú",
    "em": "✨",
    "lesson": 2,
    "explain": [
      "Cảm thấy hứng thú, quan tâm đến điều gì đó."
    ],
    "usage": "Cấu trúc: 对 + [đối tượng] + (phó từ mức độ) + 感兴趣; phủ định: 对……不感兴趣.",
    "collo": [
      "对……感兴趣",
      "很感兴趣",
      "不感兴趣"
    ],
    "ex_zh": "你们都对音乐感兴趣吗？",
    "ex_py": "Nǐmen dōu duì yīnyuè gǎn xìngqù ma?",
    "ex_vn": "Cả hai đều thích âm nhạc à?",
    "exList": [
      {
        "zh": "你们都对音乐感兴趣吗？",
        "py": "Nǐmen dōu duì yīnyuè gǎn xìngqù ma?",
        "vn": "Cả hai đều thích âm nhạc à?"
      },
      {
        "zh": "她对音乐感兴趣，我对她更感兴趣。",
        "py": "Tā duì yīnyuè gǎn xìngqù, wǒ duì tā gèng gǎn xìngqù.",
        "vn": "Cô ấy thích âm nhạc, còn tôi thích cô ấy hơn."
      },
      {
        "zh": "我对爬山不感兴趣，爬山太累了。",
        "py": "Wǒ duì páshān bù gǎn xìngqù, páshān tài lèi le.",
        "vn": "Tôi không thích leo núi, leo núi mệt lắm."
      }
    ],
    "hanzi": [
      {
        "c": "趣",
        "p": "qù",
        "type": "半包围结构 · Bán bao vây",
        "st": 15,
        "ord": "走 bao ngoài → 取 trong",
        "rad": "走 (tẩu – đi)",
        "mean": "thú vị, hứng thú",
        "tip": "走(đi, hướng đến) + 取(chọn lấy) → hướng đến, chọn lấy điều mình thích = HỨNG THÚ.",
        "cf": "取 (qǔ – \"lấy\", không có bộ 走\")",
        "w": "感兴趣 / 有意思 / 兴趣"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Bạn thích môn thể thao nào? Nếu thích bóng đá thì chiều nay đi xem cùng tôi.",
        "answer": "你对什么运动感兴趣？如果你对足球感兴趣，就下午跟我一起去看吧。",
        "answerPy": "Nǐ duì shénme yùndòng gǎn xìngqù? Rúguǒ nǐ duì zúqiú gǎn xìngqù, jiù xiàwǔ gēn wǒ yìqǐ qù kàn ba.",
        "note": "对 + N + 感兴趣 — bắt buộc có 对.",
        "pair": "如果……就……"
      },
      {
        "promptLang": "vi",
        "prompt": "Nếu bạn thích âm nhạc thì cùng đi nghe hòa nhạc với tôi đi.",
        "answer": "如果你对音乐感兴趣，就跟我一起去听音乐会吧。",
        "answerPy": "Rúguǒ nǐ duì yīnyuè gǎn xìngqù, jiù gēn wǒ yìqǐ qù tīng yīnyuèhuì ba.",
        "note": "如果……就…… diễn tả giả thiết — kết quả (ôn lại 音乐会 đã học ở Bài 6).",
        "pair": "如果……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "对音乐感兴趣",
        "py": "duì yīnyuè gǎn xìngqù",
        "vn": "thích âm nhạc"
      },
      {
        "zh": "很感兴趣",
        "py": "hěn gǎn xìngqù",
        "vn": "rất hứng thú"
      },
      {
        "zh": "不感兴趣",
        "py": "bù gǎn xìngqù",
        "vn": "không hứng thú"
      },
      {
        "zh": "对什么感兴趣",
        "py": "duì shénme gǎn xìngqù",
        "vn": "thích cái gì"
      },
      {
        "zh": "越来越感兴趣",
        "py": "yuè lái yuè gǎn xìngqù",
        "vn": "ngày càng thích"
      }
    ],
    "patterns": [
      {
        "s": "对 + N + 感兴趣",
        "m": "Có hứng thú với cái gì — bắt buộc có 对"
      },
      {
        "s": "✗ 我感兴趣音乐 → ✓ 我对音乐感兴趣"
      }
    ]
  },
  {
    "n": 6,
    "zh": "结婚",
    "py": "jiéhūn",
    "pos": "Động từ",
    "vn": "kết hôn, cưới",
    "hv": "kết hôn",
    "em": "💍",
    "lesson": 3,
    "explain": [
      "Nam nữ chính thức trở thành vợ chồng."
    ],
    "usage": "Động từ ly hợp; thường đi cùng 跟/和 + người: 跟她结婚.",
    "collo": [
      "跟她结婚",
      "下个月结婚",
      "结婚了"
    ],
    "ex_zh": "我跟小丽下个月结婚，到时候欢迎你来。",
    "ex_py": "Wǒ gēn Xiǎolì xià ge yuè jié hūn, dào shíhou huānyíng nǐ lái.",
    "ex_vn": "Tháng sau tôi và Tiểu Lệ kết hôn, đến lúc đó hoan nghênh bạn đến nhé.",
    "exList": [
      {
        "zh": "我跟小丽下个月结婚，到时候欢迎你来。",
        "py": "Wǒ gēn Xiǎolì xià ge yuè jié hūn, dào shíhou huānyíng nǐ lái.",
        "vn": "Tháng sau tôi và Tiểu Lệ kết hôn, đến lúc đó hoan nghênh bạn đến nhé."
      },
      {
        "zh": "什么？结婚？",
        "py": "Shénme? Jié hūn?",
        "vn": "Gì cơ? Kết hôn?"
      },
      {
        "zh": "你跟她结婚，那我怎么办啊？",
        "py": "Nǐ gēn tā jié hūn, nà wǒ zěnme bàn a?",
        "vn": "Bạn cưới cô ấy, vậy tôi phải làm sao đây?"
      }
    ],
    "hanzi": [
      {
        "c": "婚",
        "p": "hūn",
        "type": "左右结构 · Trái-phải",
        "st": 11,
        "ord": "女 trái → 昏 phải",
        "rad": "女 (nữ)",
        "mean": "kết hôn, hôn nhân",
        "tip": "女(người phụ nữ) + 昏(hoàng hôn, thời cổ rước dâu vào buổi chiều tối) → nghi lễ CƯỚI HỎI = KẾT HÔN.",
        "cf": "昏 (hūn – \"hoàng hôn, mê man\", không có bộ 女\")",
        "w": "结婚 / 结婚了 / 婚礼"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tháng sau chúng tôi kết hôn, nếu bạn rảnh thì nhất định phải đến nhé.",
        "answer": "我们下个月结婚，如果你有空儿，就一定要来。",
        "answerPy": "Wǒmen xià ge yuè jiéhūn, rúguǒ nǐ yǒu kòngr, jiù yídìng yào lái.",
        "note": "结婚 là từ ly hợp: 跟她结婚 ✓ / 结婚她 ✗.",
        "pair": "如果……就……"
      },
      {
        "promptLang": "vi",
        "prompt": "Anh trai tôi và vợ anh ấy quen nhau bảy năm rồi mới cưới.",
        "answer": "我哥哥和他妻子认识了七年，然后才结婚。",
        "answerPy": "Wǒ gēge hé tā qīzi rènshile qī nián, ránhòu cái jiéhūn.",
        "note": "才 nhấn việc xảy ra muộn hơn mong đợi.",
        "pair": "先……然后……"
      }
    ],
    "colloFull": [
      {
        "zh": "跟她结婚",
        "py": "gēn tā jiéhūn",
        "vn": "kết hôn với cô ấy"
      },
      {
        "zh": "下个月结婚",
        "py": "xià gè yuè jiéhūn",
        "vn": "tháng sau cưới"
      },
      {
        "zh": "结婚了",
        "py": "jiéhūn le",
        "vn": "đã kết hôn"
      },
      {
        "zh": "结了婚",
        "py": "jié le hūn",
        "vn": "đã lập gia đình"
      },
      {
        "zh": "结婚的时候",
        "py": "jiéhūn de shíhou",
        "vn": "lúc kết hôn"
      }
    ],
    "patterns": [
      {
        "s": "跟 + ai + 结婚",
        "m": "Kết hôn với ai"
      },
      {
        "s": "结 + 了 + 婚",
        "m": "结婚 là từ ly hợp: ✗ 结婚她 → ✓ 跟她结婚"
      }
    ]
  },
  {
    "n": 7,
    "zh": "欢迎",
    "py": "huānyíng",
    "pos": "Động từ",
    "vn": "hoan nghênh, chào mừng",
    "hv": "hoan nghênh",
    "em": "🎉",
    "lesson": 3,
    "explain": [
      "Vui vẻ đón tiếp, mời gọi ai đó đến."
    ],
    "usage": "Động từ, mang tân ngữ trực tiếp là người hoặc mệnh đề: 欢迎 + [người] + [V].",
    "collo": [
      "欢迎你来",
      "欢迎光临",
      "受欢迎"
    ],
    "ex_zh": "我跟小丽下个月结婚，到时候欢迎你来。",
    "ex_py": "Wǒ gēn Xiǎolì xià ge yuè jié hūn, dào shíhou huānyíng nǐ lái.",
    "ex_vn": "Tháng sau tôi và Tiểu Lệ kết hôn, đến lúc đó hoan nghênh bạn đến nhé.",
    "exList": [
      {
        "zh": "我跟小丽下个月结婚，到时候欢迎你来。",
        "py": "Wǒ gēn Xiǎolì xià ge yuè jié hūn, dào shíhou huānyíng nǐ lái.",
        "vn": "Tháng sau tôi và Tiểu Lệ kết hôn, đến lúc đó hoan nghênh bạn đến nhé."
      },
      {
        "zh": "欢迎你来我们银行。",
        "py": "Huānyíng nǐ lái wǒmen yínháng.",
        "vn": "Hoan nghênh bạn đến ngân hàng chúng tôi."
      },
      {
        "zh": "经理您好，我一定好好儿工作。",
        "py": "Jīnglǐ nín hǎo, wǒ yídìng hǎohāor gōngzuò.",
        "vn": "Chào giám đốc, tôi nhất định sẽ làm việc chăm chỉ."
      }
    ],
    "hanzi": [
      {
        "c": "迎",
        "p": "yíng",
        "type": "半包围结构 · Bán bao vây",
        "st": 7,
        "ord": "辶 bao ngoài → 卬 trong",
        "rad": "辶 (sước – đi)",
        "mean": "đón tiếp",
        "tip": "辶(đi) + 卬(ngẩng đầu trông ngóng) → đi ra NGÊNH ĐÓN người khác = ĐÓN TIẾP, HOAN NGHÊNH.",
        "cf": "仰 (yǎng – \"ngưỡng mộ\", có 亻 thay vì 辶\")",
        "w": "欢迎 / 迎接"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Chỉ cần bạn có thời gian, chúng tôi rất hoan nghênh bạn đến.",
        "answer": "只要你有时间，我们就很欢迎你来。",
        "answerPy": "Zhǐyào nǐ yǒu shíjiān, wǒmen jiù hěn huānyíng nǐ lái.",
        "note": "只要……就…… diễn tả điều kiện đủ.",
        "pair": "只要……就……"
      },
      {
        "promptLang": "vi",
        "prompt": "Vì đồng nghiệp mới vừa nhiệt tình vừa chăm chỉ, nên rất được mọi người quý mến.",
        "answer": "因为新同事又热情又努力，所以很受大家欢迎。",
        "answerPy": "Yīnwèi xīn tóngshì yòu rèqíng yòu nǔlì, suǒyǐ hěn shòu dàjiā huānyíng.",
        "note": "热情 và 努力 là từ bài 4; 受欢迎 — được yêu thích.",
        "pair": "因为……所以……"
      }
    ],
    "colloFull": [
      {
        "zh": "欢迎你来",
        "py": "huānyíng nǐ lái",
        "vn": "hoan nghênh bạn đến"
      },
      {
        "zh": "欢迎光临",
        "py": "huānyíng guānglín",
        "vn": "hoan nghênh quý khách"
      },
      {
        "zh": "受欢迎",
        "py": "shòu huānyíng",
        "vn": "được ưa thích"
      },
      {
        "zh": "很受欢迎",
        "py": "hěn shòu huānyíng",
        "vn": "rất được yêu thích"
      },
      {
        "zh": "欢迎新同事",
        "py": "huānyíng xīn tóngshì",
        "vn": "chào mừng đồng nghiệp mới"
      }
    ],
    "patterns": [
      {
        "s": "欢迎 + ai + V",
        "m": "Hoan nghênh ai làm gì"
      },
      {
        "s": "受 + 欢迎",
        "m": "Được hoan nghênh, được ưa chuộng"
      }
    ]
  },
  {
    "n": 8,
    "zh": "迟到",
    "py": "chídào",
    "pos": "Động từ",
    "vn": "đến muộn",
    "hv": "trì đáo",
    "em": "⏰",
    "lesson": 4,
    "explain": [
      "Đến trễ hơn thời gian đã hẹn hoặc quy định."
    ],
    "usage": "Động từ ly hợp, thường đi cùng 了 hoặc thời lượng: 迟到了, 迟到了一刻钟.",
    "collo": [
      "迟到了",
      "没迟到",
      "怎么迟到了"
    ],
    "ex_zh": "你看看手表，怎么迟到了？",
    "ex_py": "Nǐ kànkan shǒubiǎo, zěnme chídào le?",
    "ex_vn": "Bạn xem đồng hồ đi, sao lại đến muộn vậy?",
    "exList": [
      {
        "zh": "你看看手表，怎么迟到了？",
        "py": "Nǐ kànkan shǒubiǎo, zěnme chídào le?",
        "vn": "Bạn xem đồng hồ đi, sao lại đến muộn vậy?"
      },
      {
        "zh": "没迟到啊。",
        "py": "Méi chídào a.",
        "vn": "Không có muộn đâu."
      },
      {
        "zh": "不是我迟到了，是你的表快了一刻钟。",
        "py": "Bú shì wǒ chídào le, shì nǐ de biǎo kuàile yí kè zhōng.",
        "vn": "Không phải tôi đến muộn, mà là đồng hồ của bạn chạy nhanh mười lăm phút."
      }
    ],
    "hanzi": [
      {
        "c": "迟",
        "p": "chí",
        "type": "半包围结构 · Bán bao vây",
        "st": 7,
        "ord": "辶 bao ngoài → 尺 trong",
        "rad": "辶 (sước – đi)",
        "mean": "muộn, trễ",
        "tip": "辶(đi) + 尺(cây thước, ý chỉ đo lường chậm) → đi CHẬM hơn mức quy định = MUỘN, TRỄ.",
        "cf": "尺 (chǐ – \"cái thước\", không có bộ 辶\")",
        "w": "迟到 / 迟早"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Bạn chẳng phải nói tám giờ đến đón tôi sao? Giờ bạn đến muộn rồi.",
        "answer": "你不是说八点来接我吗？现在你迟到了。",
        "answerPy": "Nǐ bú shì shuō bā diǎn lái jiē wǒ ma? Xiànzài nǐ chídào le.",
        "note": "迟到 ↔ 准时.",
        "pair": "不是……吗？"
      },
      {
        "promptLang": "vi",
        "prompt": "Chỉ cần bạn đến sớm mười lăm phút thì sẽ không muộn.",
        "answer": "只要你早来一刻钟，就不会迟到。",
        "answerPy": "Zhǐyào nǐ zǎo lái yí kè zhōng, jiù bú huì chídào.",
        "note": "只要……就…… diễn tả điều kiện đủ (ôn lại 刻 sẽ học ngay bên dưới trong bài này).",
        "pair": "只要……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "迟到了",
        "py": "chídào le",
        "vn": "đến muộn rồi"
      },
      {
        "zh": "没迟到",
        "py": "méi chídào",
        "vn": "không muộn"
      },
      {
        "zh": "经常迟到",
        "py": "jīngcháng chídào",
        "vn": "thường xuyên đi muộn"
      },
      {
        "zh": "迟到了十分钟",
        "py": "chídào le shífēn zhōng",
        "vn": "muộn mười phút"
      },
      {
        "zh": "别迟到",
        "py": "bié chídào",
        "vn": "đừng đến muộn"
      }
    ],
    "patterns": [
      {
        "s": "Sub + 迟到 + 了",
        "m": "Ai đó đến muộn rồi"
      },
      {
        "s": "迟到 ↔ 准时",
        "m": "Đến muộn ↔ đúng giờ"
      }
    ]
  },
  {
    "n": 9,
    "zh": "半",
    "py": "bàn",
    "pos": "Số từ",
    "vn": "một nửa, rưỡi",
    "hv": "bán",
    "em": "🕧",
    "lesson": 4,
    "explain": [
      "Một nửa của một đơn vị; dùng trong giờ để chỉ 30 phút."
    ],
    "usage": "Số từ, đứng sau giờ để chỉ 30 phút: [giờ] + 半 (七点半 = 7 giờ rưỡi); hoặc trước lượng từ: 半个小时.",
    "collo": [
      "七点半",
      "半个小时",
      "一半"
    ],
    "ex_zh": "你不是说七点半来接我吗？",
    "ex_py": "Nǐ bú shì shuō qī diǎn bàn lái jiē wǒ ma?",
    "ex_vn": "Chẳng phải bạn nói 7h30 đến đón tôi sao?",
    "exList": [
      {
        "zh": "你不是说七点半来接我吗？",
        "py": "Nǐ bú shì shuō qī diǎn bàn lái jiē wǒ ma?",
        "vn": "Chẳng phải bạn nói 7h30 đến đón tôi sao?"
      },
      {
        "zh": "我都在这儿坐了半个小时了。",
        "py": "Wǒ dōu zài zhèr zuòle bàn ge xiǎoshí le.",
        "vn": "Tôi ngồi đây nửa tiếng rồi đấy."
      },
      {
        "zh": "我坐出租车半个小时就回去了。",
        "py": "Wǒ zuò chūzūchē bàn ge xiǎoshí jiù huíqu le.",
        "vn": "Tôi đi taxi nửa tiếng là về đến nhà rồi."
      }
    ],
    "hanzi": [
      {
        "c": "半",
        "p": "bàn",
        "type": "独体字 · Chữ đơn",
        "st": 5,
        "ord": "nét liền",
        "rad": "八 (bát – tám, chia)",
        "mean": "một nửa",
        "tip": "Chữ tượng hình mô phỏng vật bị CHIA làm đôi (nét 八 ở trên chỉ sự phân chia) → MỘT NỬA.",
        "cf": "伴 (bàn – \"bạn đồng hành\", có 亻 thêm vào\")",
        "w": "一半 / 半个 / 点半"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Nếu bạn rảnh thì bảy giờ rưỡi đến đón tôi được không?",
        "answer": "如果你有空儿，就七点半来接我，好吗？",
        "answerPy": "Rúguǒ nǐ yǒu kòngr, jiù qī diǎn bàn lái jiē wǒ, hǎo ma?",
        "note": "七点半 — 半 đứng SAU giờ; 半个小时 — 半 đứng TRƯỚC lượng từ.",
        "pair": "如果……就……"
      },
      {
        "promptLang": "vi",
        "prompt": "Anh ấy đợi tôi ở cửa công ty nửa tiếng rồi, chúng ta đi nhanh thôi.",
        "answer": "他在公司门口等了我半个小时了，我们就快点儿走吧。",
        "answerPy": "Tā zài gōngsī ménkǒu děngle wǒ bàn ge xiǎoshí le, wǒmen jiù kuài diǎnr zǒu ba.",
        "note": "V + 了 + thời lượng + 了 — đã làm bao lâu và còn tiếp.",
        "pair": "……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "七点半",
        "py": "qī diǎn bàn",
        "vn": "bảy giờ rưỡi"
      },
      {
        "zh": "半个小时",
        "py": "bàn gè xiǎoshí",
        "vn": "nửa tiếng"
      },
      {
        "zh": "一半",
        "py": "yíbàn",
        "vn": "một nửa"
      },
      {
        "zh": "半年",
        "py": "bàn nián",
        "vn": "nửa năm"
      },
      {
        "zh": "一个半小时",
        "py": "yí gè bàn xiǎoshí",
        "vn": "một tiếng rưỡi"
      }
    ],
    "patterns": [
      {
        "s": "số giờ + 半",
        "m": "Mấy giờ rưỡi — 半 đứng SAU giờ"
      },
      {
        "s": "半 + 个 + 小时",
        "m": "Nửa tiếng — 半 đứng TRƯỚC lượng từ"
      }
    ]
  },
  {
    "n": 10,
    "zh": "接",
    "py": "jiē",
    "pos": "Động từ",
    "vn": "đón",
    "hv": "tiếp",
    "em": "🚗",
    "lesson": 4,
    "explain": [
      "Ra đón ai đó đến một nơi."
    ],
    "usage": "Động từ, mang tân ngữ trực tiếp là người: 接 + [người] (接我, 接你).",
    "collo": [
      "来接我",
      "接人",
      "去接"
    ],
    "ex_zh": "你不是说七点半来接我吗？",
    "ex_py": "Nǐ bú shì shuō qī diǎn bàn lái jiē wǒ ma?",
    "ex_vn": "Chẳng phải bạn nói 7h30 đến đón tôi sao?",
    "exList": [
      {
        "zh": "你不是说七点半来接我吗？",
        "py": "Nǐ bú shì shuō qī diǎn bàn lái jiē wǒ ma?",
        "vn": "Chẳng phải bạn nói 7h30 đến đón tôi sao?"
      },
      {
        "zh": "就是那天来公司接你的那个？",
        "py": "Jiùshì nàtiān lái gōngsī jiē nǐ de nàge?",
        "vn": "Chính là người hôm đó đến công ty đón bạn đấy à?"
      },
      {
        "zh": "我已经等了半个小时了，你在哪儿呢？",
        "py": "Wǒ yǐjīng děngle bàn ge xiǎoshí le, nǐ zài nǎr ne?",
        "vn": "Tôi đã đợi nửa tiếng rồi, bạn đang ở đâu vậy?"
      }
    ],
    "hanzi": [
      {
        "c": "接",
        "p": "jiē",
        "type": "左右结构 · Trái-phải",
        "st": 11,
        "ord": "扌 trái → 妾 phải",
        "rad": "扌 (thủ – tay)",
        "mean": "đón, tiếp nhận",
        "tip": "扌(tay) + 妾(người phụ nữ được đón về) → dùng TAY đón nhận ai đó = ĐÓN.",
        "cf": "妾 (qiè – \"thiếp\", không có bộ 扌\")",
        "w": "接我 / 接人 / 迎接"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Ai đến sân bay đón bạn vậy? Nếu không có ai thì tôi đi đón.",
        "answer": "谁来机场接你？如果没有人，我就去接你。",
        "answerPy": "Shéi lái jīchǎng jiē nǐ? Rúguǒ méiyǒu rén, wǒ jiù qù jiē nǐ.",
        "note": "接 vừa là \"đón người\" vừa là \"nghe điện thoại\".",
        "pair": "如果……就……"
      },
      {
        "promptLang": "vi",
        "prompt": "Nếu bạn đến muộn thì tôi sẽ không đến đón bạn nữa.",
        "answer": "如果你迟到，我就不来接你了。",
        "answerPy": "Rúguǒ nǐ chídào, wǒ jiù bù lái jiē nǐ le.",
        "note": "如果……就…… diễn tả giả thiết — kết quả (ôn lại 迟到 vừa học trong bài này).",
        "pair": "如果……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "来接我",
        "py": "lái jiē wǒ",
        "vn": "đến đón tôi"
      },
      {
        "zh": "去机场接人",
        "py": "qù jīchǎng jiē rén",
        "vn": "ra sân bay đón người"
      },
      {
        "zh": "接电话",
        "py": "jiē diànhuà",
        "vn": "nghe điện thoại"
      },
      {
        "zh": "接孩子",
        "py": "jiē háizi",
        "vn": "đón con"
      },
      {
        "zh": "谁来接你",
        "py": "shéi lái jiē nǐ",
        "vn": "ai đến đón bạn"
      }
    ],
    "patterns": [
      {
        "s": "去 + nơi chốn + 接 + ai",
        "m": "Đi đâu đón ai"
      },
      {
        "s": "接 + 电话",
        "m": "Nghe điện thoại — nghĩa riêng cần nhớ"
      }
    ]
  },
  {
    "n": 11,
    "zh": "刻",
    "py": "kè",
    "pos": "Lượng từ",
    "vn": "mười lăm phút",
    "hv": "khắc",
    "em": "🕒",
    "lesson": 4,
    "explain": [
      "Đơn vị thời gian bằng 15 phút, dùng để nói giờ hoặc khoảng thời gian."
    ],
    "usage": "Lượng từ; đứng sau số từ: 一刻 (15 phút), 三刻 (45 phút); 一刻钟 là cách nói đầy đủ chỉ khoảng thời gian.",
    "collo": [
      "一刻钟",
      "三刻",
      "差一刻"
    ],
    "ex_zh": "你迟到了一刻钟。",
    "ex_py": "Nǐ chídàole yí kè zhōng.",
    "ex_vn": "Bạn đến muộn mười lăm phút rồi.",
    "exList": [
      {
        "zh": "你迟到了一刻钟。",
        "py": "Nǐ chídàole yí kè zhōng.",
        "vn": "Bạn đến muộn mười lăm phút rồi."
      },
      {
        "zh": "不是我迟到了，是你的表快了一刻钟。",
        "py": "Bú shì wǒ chídào le, shì nǐ de biǎo kuàile yí kè zhōng.",
        "vn": "Không phải tôi đến muộn, mà là đồng hồ của bạn chạy nhanh mười lăm phút."
      },
      {
        "zh": "现在差一刻九点。",
        "py": "Xiànzài chà yí kè jiǔ diǎn.",
        "vn": "Bây giờ là kém mười lăm phút nữa 9 giờ."
      }
    ],
    "hanzi": [
      {
        "c": "刻",
        "p": "kè",
        "type": "左右结构 · Trái-phải",
        "st": 8,
        "ord": "亥 trái → 刂 phải",
        "rad": "刂 (đao – dao)",
        "mean": "khắc, chạm",
        "tip": "亥(một khoảng thời gian trong 12 canh giờ cổ) + 刂(dao, dùng để khắc vạch trên đồng hồ nước cổ) → mở rộng thành đơn vị 15 PHÚT.",
        "cf": "该 (gāi – \"nên, phải\", có 讠 thay vì 刂\")",
        "w": "一刻钟 / 三刻 / 立刻"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Bây giờ kém mười lăm phút nữa là sáu giờ, chúng ta đi thôi kẻo muộn.",
        "answer": "现在差一刻六点，我们走吧，不然就迟到了。",
        "answerPy": "Xiànzài chà yí kè liù diǎn, wǒmen zǒu ba, bùrán jiù chídào le.",
        "note": "差一刻六点 = 5 giờ 45 — cách nói giờ rất hay dùng.",
        "pair": "不然……"
      },
      {
        "promptLang": "vi",
        "prompt": "Chúng tôi vừa hát vừa trò chuyện suốt hai tiếng, ai cũng vui.",
        "answer": "我们一边唱歌一边聊天儿，聊了两个小时，大家都很高兴。",
        "answerPy": "Wǒmen yìbiān chànggē yìbiān liáotiānr, liáole liǎng ge xiǎoshí, dàjiā dōu hěn gāoxìng.",
        "note": "聊天儿 là từ bài 6.",
        "pair": "一边……一边……"
      }
    ],
    "colloFull": [
      {
        "zh": "一刻钟",
        "py": "yí kè zhōng",
        "vn": "mười lăm phút"
      },
      {
        "zh": "三刻",
        "py": "sān kè",
        "vn": "bốn lăm phút"
      },
      {
        "zh": "差一刻",
        "py": "chà yí kè",
        "vn": "kém mười lăm"
      },
      {
        "zh": "两点一刻",
        "py": "liǎng diǎn yí kè",
        "vn": "hai giờ mười lăm"
      },
      {
        "zh": "差一刻六点",
        "py": "chà yí kè liù diǎn",
        "vn": "kém mười lăm phút nữa sáu giờ"
      }
    ],
    "patterns": [
      {
        "s": "giờ + 一刻 / 三刻",
        "m": "2 giờ 15 = 两点一刻; 2 giờ 45 = 两点三刻"
      },
      {
        "s": "差 + 一刻 + giờ",
        "m": "Kém 15 phút nữa tới mấy giờ"
      }
    ]
  },
  {
    "n": 12,
    "zh": "差",
    "py": "chà",
    "pos": "Động từ",
    "vn": "kém, thiếu",
    "hv": "sai",
    "em": "➖",
    "lesson": 4,
    "explain": [
      "Còn thiếu, chưa đủ; dùng trong cách nói giờ để chỉ \"còn thiếu bao nhiêu phút nữa đến giờ tròn\"."
    ],
    "usage": "Động từ; cấu trúc nói giờ: 差 + [khoảng thời gian] + [giờ] (差一刻八点 = 7:45).",
    "collo": [
      "差一刻",
      "差五分",
      "差不多"
    ],
    "ex_zh": "已经差一刻八点了！",
    "ex_py": "Yǐjīng chà yí kè bā diǎn le!",
    "ex_vn": "Đã kém mười lăm phút nữa là 8 giờ rồi!",
    "exList": [
      {
        "zh": "已经差一刻八点了！",
        "py": "Yǐjīng chà yí kè bā diǎn le!",
        "vn": "Đã kém mười lăm phút nữa là 8 giờ rồi!"
      },
      {
        "zh": "我都在这儿坐了半个小时了。",
        "py": "Wǒ dōu zài zhèr zuòle bàn ge xiǎoshí le.",
        "vn": "Tôi ngồi đây nửa tiếng rồi đấy."
      },
      {
        "zh": "现在差五分十二点。",
        "py": "Xiànzài chà wǔ fēn shí'èr diǎn.",
        "vn": "Bây giờ là kém 5 phút nữa 12 giờ."
      }
    ],
    "hanzi": [
      {
        "c": "差",
        "p": "chà",
        "type": "上下结构 · Trên-dưới",
        "st": 9,
        "ord": "𝒁+羊(biến thể) trên → 工 dưới",
        "rad": "工 (công)",
        "mean": "kém, thiếu; sai lệch",
        "tip": "Chữ cổ vốn chỉ sự SAI LỆCH, không đồng đều → mở rộng nghĩa THIẾU, KÉM so với mức chuẩn.",
        "cf": "着 (zhe/zháo – hình trên gần giống nhưng bộ khác\")",
        "w": "差一刻 / 差不多 / 差点儿"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Bây giờ kém mười lăm phút nữa chín giờ, nếu không đi nhanh thì sẽ muộn.",
        "answer": "现在差一刻九点，如果不快点儿走，就会迟到。",
        "answerPy": "Xiànzài chà yí kè jiǔ diǎn, rúguǒ bú kuài diǎnr zǒu, jiù huì chídào.",
        "note": "差 (chà, kém) khác 差 (chāi) trong 出差.",
        "pair": "如果……就……"
      },
      {
        "promptLang": "vi",
        "prompt": "Nếu đồng hồ của bạn chạy chậm thì bạn sẽ đến muộn đấy.",
        "answer": "如果你的表慢了，你就会迟到的。",
        "answerPy": "Rúguǒ nǐ de biǎo màn le, nǐ jiù huì chídào de.",
        "note": "如果……就…… diễn tả giả thiết — kết quả (ôn lại 迟到 vừa học trong bài này).",
        "pair": "如果……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "差一刻",
        "py": "chà yí kè",
        "vn": "kém mười lăm phút"
      },
      {
        "zh": "差五分",
        "py": "chà wǔ fēn",
        "vn": "kém năm phút"
      },
      {
        "zh": "差不多",
        "py": "chàbuduō",
        "vn": "gần như, xấp xỉ"
      },
      {
        "zh": "差一点儿",
        "py": "chà yìdiǎnr",
        "vn": "suýt nữa"
      },
      {
        "zh": "还差两个",
        "py": "hái chà liǎng gè",
        "vn": "còn thiếu hai cái"
      }
    ],
    "patterns": [
      {
        "s": "差 + thời lượng + giờ",
        "m": "Kém bao nhiêu nữa tới mấy giờ"
      },
      {
        "s": "差 (chà, kém) ≠ 差 (chāi, công tác — 出差)"
      }
    ]
  }
];

const wuData = [
  {img:'👔',label:'同事',py:'tóngshì',letter:'A'},
  {img:'🏦',label:'银行',py:'yínháng',letter:'B'},
  {img:'💍',label:'结婚',py:'jiéhūn',letter:'C'},
  {img:'⏰',label:'迟到',py:'chídào',letter:'D'},
  {img:'🎉',label:'欢迎',py:'huānyíng',letter:'E'},
  {img:'🚗',label:'接',py:'jiē',letter:'F'},
];

var dialogData = [
  {scene:'在办公室 · Trong văn phòng',
   preQuiz:[
     {q:'小丽是谁？',opts:['新同事','经理','客人'],ans:0},
     {q:'小丽在北京工作多久了？',opts:['三年','一年','五年'],ans:0},
     {q:'小丽以前在哪儿工作？',opts:['银行','学校','超市'],ans:0},
   ],
   lines:[
     {sp:0,zh:'那个漂亮的新同事是谁？',py:'Nàge piàoliang de xīn tóngshì shì shéi?',vn:'Đồng nghiệp mới xinh đẹp kia là ai vậy?'},
     {sp:1,zh:'那是小丽。',py:'Nà shì Xiǎolì.',vn:'Đó là Tiểu Lệ.'},
     {sp:0,zh:'她刚来北京吗？',py:'Tā gāng lái Běijīng ma?',vn:'Cô ấy vừa đến Bắc Kinh à?'},
     {sp:1,zh:'不，她在北京工作三年了。',py:'Bù, tā zài Běijīng gōngzuò sān nián le.',vn:'Không, cô ấy làm việc ở Bắc Kinh ba năm rồi.'},
     {sp:0,zh:'以前她在哪儿工作？',py:'Yǐqián tā zài nǎr gōngzuò?',vn:'Trước đây cô ấy làm việc ở đâu?'},
     {sp:1,zh:'她在银行工作了两年以后来的我们公司。',py:'Tā zài yínháng gōngzuòle liǎng nián yǐhòu lái de wǒmen gōngsī.',vn:'Cô ấy làm việc ở ngân hàng hai năm rồi mới đến công ty chúng tôi.'},
   ]},
  {scene:'在休息室 · Trong phòng giải lao (kể chuyện cuối tuần)',
   preQuiz:[
     {q:'小刚和小丽周末做了什么？',opts:['去唱歌','去爬山','去公园'],ans:0},
     {q:'他们唱了多久的歌？',opts:['两个小时','一个小时','三个小时'],ans:0},
     {q:'小刚对什么更感兴趣？',opts:['小丽','音乐','唱歌'],ans:0},
   ],
   lines:[
     {sp:0,zh:'周末你跟小丽去哪儿玩儿了？',py:'Zhōumò nǐ gēn Xiǎolì qù nǎr wánr le?',vn:'Cuối tuần bạn với Tiểu Lệ đi chơi đâu vậy?'},
     {sp:1,zh:'我们去唱歌了。',py:'Wǒmen qù chàng gē le.',vn:'Chúng tôi đi hát rồi.'},
     {sp:0,zh:'你们唱了多久？',py:'Nǐmen chàngle duō jiǔ?',vn:'Các bạn hát bao lâu?'},
     {sp:1,zh:'我们唱了两个小时歌，晚上还去听音乐会了。',py:'Wǒmen chàngle liǎng ge xiǎoshí gē, wǎnshang hái qù tīng yīnyuèhuì le.',vn:'Chúng tôi hát hai tiếng, buổi tối còn đi nghe hòa nhạc nữa.'},
     {sp:0,zh:'你们都对音乐感兴趣吗？',py:'Nǐmen dōu duì yīnyuè gǎn xìngqù ma?',vn:'Cả hai đều thích âm nhạc à?'},
     {sp:1,zh:'她对音乐感兴趣，我对她更感兴趣。',py:'Tā duì yīnyuè gǎn xìngqù, wǒ duì tā gèng gǎn xìngqù.',vn:'Cô ấy thích âm nhạc, còn tôi thích cô ấy hơn.'},
   ]},
  {scene:'在休息室 · Trong phòng giải lao (tin kết hôn)',
   preQuiz:[
     {q:'小刚下个月要做什么？',opts:['结婚','搬家','出国'],ans:0},
     {q:'小刚和小丽认识多久了？',opts:['五年','一年','两年'],ans:0},
     {q:'同事听到消息后是什么反应？',opts:['很惊讶','很高兴','没有反应'],ans:0},
   ],
   lines:[
     {sp:1,zh:'我跟小丽下个月结婚，到时候欢迎你来。',py:'Wǒ gēn Xiǎolì xià ge yuè jié hūn, dào shíhou huānyíng nǐ lái.',vn:'Tháng sau tôi và Tiểu Lệ kết hôn, đến lúc đó hoan nghênh bạn đến nhé.'},
     {sp:0,zh:'什么？结婚？',py:'Shénme? Jié hūn?',vn:'Gì cơ? Kết hôn?'},
     {sp:1,zh:'对啊，突然吗？',py:'Duì a, tūrán ma?',vn:'Đúng vậy, bất ngờ à?'},
     {sp:0,zh:'你们不是刚认识吗？',py:'Nǐmen bú shì gāng rènshi ma?',vn:'Các bạn chẳng phải mới quen nhau sao?'},
     {sp:1,zh:'我跟她都认识五年了。',py:'Wǒ gēn tā dōu rènshi wǔ nián le.',vn:'Tôi và cô ấy quen nhau năm năm rồi.'},
     {sp:0,zh:'你跟她结婚，那我怎么办啊？',py:'Nǐ gēn tā jié hūn, nà wǒ zěnme bàn a?',vn:'Bạn cưới cô ấy, vậy tôi phải làm sao đây?'},
   ]},
  {scene:'在公司门口 · Ở trước cửa công ty',
   preQuiz:[
     {q:'小刚迟到了吗？',opts:['他说没有','迟到了半小时','迟到了一小时'],ans:0},
     {q:'小丽在那儿坐了多久？',opts:['半个小时','一刻钟','一个小时'],ans:0},
     {q:'最后发现是什么原因？',opts:['小丽的表快了','小刚起晚了','堵车了'],ans:0},
   ],
   lines:[
     {sp:1,zh:'你看看手表，怎么迟到了？',py:'Nǐ kànkan shǒubiǎo, zěnme chídào le?',vn:'Bạn xem đồng hồ đi, sao lại đến muộn vậy?'},
     {sp:0,zh:'没迟到啊。',py:'Méi chídào a.',vn:'Không có muộn đâu.'},
     {sp:1,zh:'你不是说七点半来接我吗？你迟到了一刻钟。',py:'Nǐ bú shì shuō qī diǎn bàn lái jiē wǒ ma? Nǐ chídàole yí kè zhōng.',vn:'Chẳng phải bạn nói 7h30 đến đón tôi sao? Bạn đến muộn mười lăm phút rồi.'},
     {sp:0,zh:'现在不是七点半吗？',py:'Xiànzài bú shì qī diǎn bàn ma?',vn:'Bây giờ chẳng phải 7h30 sao?'},
     {sp:1,zh:'已经差一刻八点了！我都在这儿坐了半个小时了。',py:'Yǐjīng chà yí kè bā diǎn le! Wǒ dōu zài zhèr zuòle bàn ge xiǎoshí le.',vn:'Đã kém mười lăm phút nữa là 8 giờ rồi! Tôi ngồi đây nửa tiếng rồi đấy.'},
     {sp:0,zh:'不是我迟到了，是你的表快了一刻钟。',py:'Bú shì wǒ chídào le, shì nǐ de biǎo kuàile yí kè zhōng.',vn:'Không phải tôi đến muộn, mà là đồng hồ của bạn chạy nhanh mười lăm phút.'},
   ]},
];

// ══════════════════════════════════════════
// PHẦN 1 · GHÉP TỪ (Collocation)
// ══════════════════════════════════════════
var matchData = [
  {left:'她对中国音乐很', right:'感兴趣'},
  {left:'七点半去机场', right:'接客人'},
  {left:'下个月小丽要', right:'结婚'},
  {left:'她以前在', right:'银行工作'},
  {left:'对不起，让你等了这么', right:'久'},
  {left:'公司来了一个新', right:'同事'},
  {left:'路上车太多，今天上班', right:'迟到了'},
];

// ══════════════════════════════════════════
// PHẦN 3a · ĐIỀN TỪ
// ══════════════════════════════════════════
var fillData = [
  {pre:'A：那个穿红衣服的人是谁？B：她是我的', blank:'同事', post:'，我们在一个办公室工作。', hint:'(đồng nghiệp)', ans:'同事', exp:'同事 = đồng nghiệp, người làm cùng công ty / cùng văn phòng.'},
  {pre:'我', blank:'以前', post:'不喜欢吃鱼，来中国以后越来越喜欢了。', hint:'(trước đây)', ans:'以前', exp:'以前 = trước đây, đứng sau chủ ngữ hoặc đầu câu; ôn 越来越 + tính từ/động từ tâm lý (bài 5).'},
  {pre:'A：你去哪儿？B：我去', blank:'银行', post:'，钱都用完了。', hint:'(ngân hàng)', ans:'银行', exp:'去银行 = đi ngân hàng; 用完了 = dùng hết rồi (ôn bổ ngữ kết quả 完).'},
  {pre:'A：对不起，让你等了这么', blank:'久', post:'。B：没关系，我也没等多长时间。', hint:'(lâu)', ans:'久', exp:'等了这么久 = đợi lâu như vậy; 久 đứng sau 这么 / 很 / 多, giữ vị trí bổ ngữ thời lượng sau động từ.'},
  {pre:'我妈妈对做菜特别', blank:'感兴趣', post:'，每个周末都给我们做好吃的。', hint:'(có hứng thú)', ans:'感兴趣', exp:'对 + việc/người + (特别/很) 感兴趣; phó từ mức độ đứng ngay trước 感兴趣, không đứng trước 对.'},
  {pre:'姐姐和她男朋友认识六年了，今年夏天就要', blank:'结婚', post:'了。', hint:'(kết hôn)', ans:'结婚', exp:'就要……了 = sắp (HSK2); 认识六年了 = quen nhau sáu năm rồi (thời lượng + 了).'},
  {pre:'A：八点上课，现在已经七点五十了！B：别着急，坐出租车不会', blank:'迟到', post:'的。', hint:'(đến muộn)', ans:'迟到', exp:'不会……的 = chắc chắn sẽ không …; 迟到 = đến muộn; ôn 别着急 (bài 1).'},
  {pre:'从北京到这儿，坐飞机要两个', blank:'半', post:'小时。', hint:'(rưỡi)', ans:'半', exp:'两个半小时 = hai tiếng rưỡi: 半 đứng sau 个, trước 小时 — không nói 两个小时半 như tiếng Việt.'},
  {pre:'A：电影几点开始？B：八点半。现在是八点一', blank:'刻', post:'，我们还有十五分钟。', hint:'(mười lăm phút)', ans:'刻', exp:'一刻 = 15 phút: 八点一刻 = 8 giờ 15; 八点半 = 8 giờ 30.'},
  {pre:'我的手表慢了十分钟，现在不是七点四十五，是', blank:'差', post:'五分八点。', hint:'(kém)', ans:'差', exp:'差 + số phút + giờ = … kém …: 差五分八点 = 8 giờ kém 5 (7:55).'},
  {pre:'明天你的朋友几点到机场？我开车去', blank:'接', post:'她吧。', hint:'(đón)', ans:'接', exp:'去 + 接 + người = đi đón ai; 接 cũng là “nghe máy” (接电话), ở đây là đón.'},
  {pre:'爸爸在这家公司工作', blank:'了', post:'二十年了，大家都认识他。', hint:'(đã … được)', ans:'了', exp:'V + 了 + thời lượng + 了 = đã làm được … (đến giờ vẫn tiếp tục).'},
  {pre:'昨天晚上我看电视', blank:'看', post:'了两个小时，作业还没做完呢。', hint:'(xem)', ans:'看', exp:'Động từ có tân ngữ + thời lượng thì lặp lại động từ: 看电视看了两个小时; 还没……呢 = vẫn chưa (HSK2).'},
];

// ══════════════════════════════════════════
// PHẦN 3b · SẮP XẾP
// ══════════════════════════════════════════
var sortData = [
  {words:['我们','在','机场','等','了','一个多','小时','，','飞机','还','没','到','。'], ans:'我们在机场等了一个多小时，飞机还没到。', audio:'我们在机场等了一个多小时，飞机还没到。'},
  {words:['这个','周末','我们','去','爬山','，','你','感兴趣','吗','？'], ans:'这个周末我们去爬山，你感兴趣吗？', audio:'这个周末我们去爬山，你感兴趣吗？'},
  {words:['下午','的','课','两点半','开始','，','我们','别','迟到','了','。'], ans:'下午的课两点半开始，我们别迟到了。', audio:'下午的课两点半开始，我们别迟到了。'},
  {words:['她','以前','在','银行','工作','，','现在','是','我们','公司','的','经理','。'], ans:'她以前在银行工作，现在是我们公司的经理。', audio:'她以前在银行工作，现在是我们公司的经理。'},
  {words:['我','姐姐','结婚','已经','五年','了','，','孩子','都','三岁','了','。'], ans:'我姐姐结婚已经五年了，孩子都三岁了。', audio:'我姐姐结婚已经五年了，孩子都三岁了。'},
  {words:['差','一刻','九点','的','时候','，','客人','都','到','了','。'], ans:'差一刻九点的时候，客人都到了。', audio:'差一刻九点的时候，客人都到了。'},
  {words:['电影','太','长','了','，','我','看','了','一半','就','睡着','了','。'], ans:'电影太长了，我看了一半就睡着了。', audio:'电影太长了，我看了一半就睡着了。'},
  {words:['欢迎','你们','周末','来','我家','玩儿','！'], ans:'欢迎你们周末来我家玩儿！', audio:'欢迎你们周末来我家玩儿！'},
];

// ══════════════════════════════════════════
// PHẦN 3c · SỬA LỖI SAI
// ══════════════════════════════════════════
var errorFixData = [
  {wrong:'我一个小时找了你。',
   opts:['我找了一个小时你。','我找你了一个小时。','我找了你一个小时。','我一个小时找你了。'], ans:2,
   exp:'Thời lượng đứng SAU động từ; tân ngữ là đại từ (你) thì đặt giữa: 找了你一个小时 — không đặt thời lượng trước động từ.'},
  {wrong:'我对中国菜感兴趣很。',
   opts:['我很感兴趣对中国菜。','我对中国菜很感兴趣。','我对很中国菜感兴趣。','我对中国菜是感兴趣。'], ans:1,
   exp:'对 + đối tượng + 很 + 感兴趣: 很 đứng ngay trước 感兴趣; không chèn 是, không đưa 对 ra sau.'},
  {wrong:'电影一刻差七点开始。',
   opts:['电影差一刻七点开始。','电影差七点一刻开始。','电影开始差一刻七点。','电影七点开始差一刻。'], ans:0,
   exp:'Giờ kém: 差 + số phút + giờ (差一刻七点 = 6:45); giờ là trạng ngữ nên đứng trước động từ 开始.'},
  {wrong:'从我家到机场，坐车要一个小时半。',
   opts:['从我家到机场，坐车要一半个小时。','从我家到机场，要一个半小时坐车。','从我家到机场，坐车一个半小时要。','从我家到机场，坐车要一个半小时。'], ans:3,
   exp:'“Một tiếng rưỡi” = 一个半小时 (半 đứng trước 小时), không dịch từng chữ thành 一个小时半.'},
  {wrong:'他工作在银行三年了。',
   opts:['他在银行工作三年了。','他在银行三年了工作。','他工作三年了在银行。','他三年在银行工作了。'], ans:0,
   exp:'在 + nơi chốn đứng TRƯỚC động từ, thời lượng đứng SAU động từ: 在银行工作三年了.'},
  {wrong:'今天他十分钟迟到了。',
   opts:['今天他迟到得十分钟。','今天他是十分钟迟到。','今天他迟到了十分钟。','今天他迟到十分钟的。'], ans:2,
   exp:'迟到 + 了 + thời lượng: 迟到了十分钟; thời lượng không đứng trước động từ, không tách 迟到.'},
  {wrong:'我昨天看了电视三个小时。',
   opts:['我昨天看电视了三个小时。','我昨天看电视看了三个小时。','我昨天三个小时看了电视。','我昨天看了电视看三个小时。'], ans:1,
   exp:'Có tân ngữ thì lặp động từ: 看电视 + 看了 + thời lượng; 了 đi sau động từ lặp lại.'},
  {wrong:'弟弟给足球一点儿也不感兴趣。',
   opts:['弟弟跟足球一点儿也不感兴趣。','弟弟对足球不一点儿也感兴趣。','弟弟对足球一点儿感兴趣也不。','弟弟对足球一点儿也不感兴趣。'], ans:3,
   exp:'Hứng thú với cái gì dùng 对, không dùng 给/跟; 一点儿也不 đứng ngay trước 感兴趣 (ôn bài 1).'},
];

// ══════════════════════════════════════════
// LUYỆN NÓI
// ══════════════════════════════════════════
var speakingData = {
  mode: 'ai-speak',
  intro: 'Mỗi câu là một tình huống thật, trả lời về chính bạn bằng từ và mẫu câu của Bài 7 (bổ ngữ thời lượng, 对……感兴趣, nói giờ với 半 / 刻 / 差). Bấm 🎙️ rồi nói bằng tiếng Trung — AI sẽ nghe, ghi lại câu bạn nói và chấm theo Nội dung · Mẫu câu · Từ vựng · Độ trôi chảy. Tự trả lời trước rồi mới mở “Câu mẫu” để đối chiếu.',
  tasks: [
    {
      situation: 'Một người bạn Trung Quốc mới quen hỏi bạn học tiếng Hán bao lâu rồi.',
      q_zh: '你学了多长时间汉语了？每天学多久？',
      q_py: 'Nǐ xuéle duō cháng shíjiān Hànyǔ le? Měi tiān xué duō jiǔ?',
      q_vn: 'Bạn học tiếng Hán được bao lâu rồi? Mỗi ngày học bao lâu?',
      grammar: { label: 'Bổ ngữ thời lượng: V + (O + V) + 了 + thời gian', any: ['年', '个月', '小时', '分钟'] },
      need: [
        { label: 'Nói học được bao lâu', any: ['年', '个月', '星期'] },
        { label: 'Nói mỗi ngày học bao lâu', any: ['小时', '分钟', '半', '每天'] }
      ],
      bonus: { label: 'So sánh cuối tuần với ngày thường', any: ['周末', '更', '久'] },
      vocab: ['久', '半'],
      minLen: 18,
      sample: '我学汉语学了一年半了，每天学一个小时。周末没有课，有时候我学三个小时。',
      sample_py: 'Wǒ xué Hànyǔ xuéle yì nián bàn le, měi tiān xué yí ge xiǎoshí. Zhōumò méiyǒu kè, yǒu shíhou wǒ xué sān ge xiǎoshí.',
      sample_vn: 'Tôi học tiếng Hán được một năm rưỡi rồi, mỗi ngày học một tiếng. Cuối tuần không có lớp, có khi tôi học ba tiếng.',
      tip: 'Thời lượng đứng sau động từ; có tân ngữ thì lặp động từ: 学汉语学了一年半 — “một năm rưỡi” là 一年半.'
    },
    {
      situation: 'Trong buổi làm quen ở lớp, mọi người kể sở thích của mình.',
      q_zh: '你对什么感兴趣？以前也感兴趣吗？',
      q_py: 'Nǐ duì shénme gǎn xìngqù? Yǐqián yě gǎn xìngqù ma?',
      q_vn: 'Bạn có hứng thú với cái gì? Trước đây cũng thích vậy à?',
      grammar: { label: '对 + đối tượng + 感兴趣', any: ['感兴趣'] },
      need: [
        { label: 'Nói bạn thích cái gì (dùng 对)', any: ['对'] },
        { label: 'So sánh với trước đây', any: ['以前', '现在'] }
      ],
      bonus: { label: 'Nói ai làm bạn bắt đầu thích', any: ['朋友', '同事', '老师', '让'] },
      vocab: ['感兴趣', '以前', '同事'],
      minLen: 18,
      sample: '我对爬山特别感兴趣，每个月都跟同事去一次。以前我对运动一点儿也不感兴趣，现在身体越来越好了。',
      sample_py: 'Wǒ duì páshān tèbié gǎn xìngqù, měi ge yuè dōu gēn tóngshì qù yí cì. Yǐqián wǒ duì yùndòng yìdiǎnr yě bù gǎn xìngqù, xiànzài shēntǐ yuè lái yuè hǎo le.',
      sample_vn: 'Tôi cực kỳ thích leo núi, tháng nào cũng đi một lần với đồng nghiệp. Trước đây tôi chẳng hứng thú gì với thể thao, bây giờ sức khoẻ ngày càng tốt.',
      tip: '很 / 特别 đứng ngay trước 感兴趣: 对爬山特别感兴趣 — không nói 很对音乐感兴趣.'
    },
    {
      situation: 'Một người bạn nước ngoài hỏi lịch buổi sáng của bạn.',
      q_zh: '星期一到星期五，你早上几点起床？几点到学校或者公司？',
      q_py: 'Xīngqīyī dào xīngqīwǔ, nǐ zǎoshang jǐ diǎn qǐchuáng? Jǐ diǎn dào xuéxiào huòzhě gōngsī?',
      q_vn: 'Từ thứ hai đến thứ sáu, buổi sáng bạn dậy lúc mấy giờ? Mấy giờ đến trường hoặc công ty?',
      grammar: { label: 'Nói giờ với 半 / 刻 / 差', any: ['半', '刻', '差'] },
      need: [
        { label: 'Nói giờ dậy', any: ['起床'] },
        { label: 'Nói giờ đến nơi', any: ['到'] }
      ],
      bonus: { label: 'Nói đi đường mất bao lâu', any: ['分钟', '小时'] },
      vocab: ['半', '刻', '差'],
      minLen: 18,
      sample: '我每天六点半起床，坐四十分钟公共汽车，差一刻八点到公司。',
      sample_py: 'Wǒ měi tiān liù diǎn bàn qǐchuáng, zuò sìshí fēnzhōng gōnggòng qìchē, chà yí kè bā diǎn dào gōngsī.',
      sample_vn: 'Mỗi ngày tôi dậy lúc 6 rưỡi, đi xe buýt bốn mươi phút, 8 giờ kém 15 đến công ty.',
      tip: '差一刻八点 = 7:45; 八点一刻 = 8:15; 八点半 = 8:30. Giờ đứng trước động từ: 六点半起床.'
    },
    {
      situation: 'Bạn học hỏi lần gần nhất bạn đến muộn là khi nào.',
      q_zh: '你上次迟到是什么时候？迟到了多久？为什么？',
      q_py: 'Nǐ shàng cì chídào shì shénme shíhou? Chídàole duō jiǔ? Wèi shénme?',
      q_vn: 'Lần trước bạn đến muộn là khi nào? Muộn bao lâu? Vì sao?',
      grammar: { label: '迟到了 + thời lượng', any: ['分钟', '小时', '一刻'] },
      need: [
        { label: 'Nói muộn bao lâu', any: ['迟到了'] },
        { label: 'Nêu lý do', any: ['因为', '下雨', '车', '起床', '睡'] }
      ],
      bonus: { label: 'Nói kết quả hoặc bài học', any: ['以后', '早', '所以'] },
      vocab: ['迟到', '久'],
      minLen: 18,
      sample: '上个星期一我迟到了二十分钟，因为早上下雨，公共汽车走得特别慢。以后下雨天我要早点儿起床。',
      sample_py: 'Shàng ge xīngqīyī wǒ chídàole èrshí fēnzhōng, yīnwèi zǎoshang xià yǔ, gōnggòng qìchē zǒu de tèbié màn. Yǐhòu xià yǔ tiān wǒ yào zǎo diǎnr qǐchuáng.',
      sample_vn: 'Thứ hai tuần trước tôi đến muộn hai mươi phút, vì sáng mưa, xe buýt đi cực kỳ chậm. Sau này trời mưa tôi sẽ dậy sớm hơn.',
      tip: 'Thời lượng đứng sau 迟到了: 迟到了二十分钟 — không nói 二十分钟迟到.'
    },
    {
      situation: 'Bạn thân sắp cưới, nhờ bạn ra sân bay đón khách và hỏi mấy giờ bạn đi.',
      q_zh: '我结婚那天，你能去机场接我的客人吗？几点去？',
      q_py: 'Wǒ jiéhūn nà tiān, nǐ néng qù jīchǎng jiē wǒ de kèrén ma? Jǐ diǎn qù?',
      q_vn: 'Hôm mình cưới, cậu ra sân bay đón khách giúp mình được không? Mấy giờ đi?',
      grammar: { label: 'Nói giờ hẹn với 半 / 刻', any: ['半', '刻', '差'] },
      need: [
        { label: 'Đồng ý giúp', any: ['当然', '可以', '能', '没问题'] },
        { label: 'Nói giờ máy bay đến / giờ đi', any: ['点'] }
      ],
      bonus: { label: 'Chào đón khách bằng 欢迎', any: ['欢迎'] },
      vocab: ['结婚', '接', '欢迎'],
      minLen: 18,
      sample: '当然可以！飞机不是十点一刻到吗？我九点半就从家里走，在机场等你的客人。',
      sample_py: 'Dāngrán kěyǐ! Fēijī bú shì shí diǎn yí kè dào ma? Wǒ jiǔ diǎn bàn jiù cóng jiā li zǒu, zài jīchǎng děng nǐ de kèrén.',
      sample_vn: 'Tất nhiên được! Máy bay chẳng phải 10 giờ 15 đến sao? 9 rưỡi mình đi từ nhà, đợi khách của cậu ở sân bay.',
      tip: '不是……吗？= chẳng phải … sao? dùng để xác nhận điều mình nhớ; 九点半就走 = 9 rưỡi đã đi (sớm).'
    }
  ]
};

// ══════════════════════════════════════════
// LUYỆN DỊCH (Việt → Trung)
// ══════════════════════════════════════════
var translateData = [
  {vi:'Trước đây mẹ tôi làm ở ngân hàng, bây giờ ở nhà chăm em trai tôi.', zh:'以前我妈妈在银行工作，现在在家照顾我弟弟。', py:'Yǐqián wǒ māma zài yínháng gōngzuò, xiànzài zài jiā zhàogù wǒ dìdi.'},
  {vi:'Tôi đã đợi bạn ở cổng trường bốn mươi phút rồi.', zh:'我在学校门口等了你四十分钟了。', py:'Wǒ zài xuéxiào ménkǒu děngle nǐ sìshí fēnzhōng le.'},
  {vi:'Bạn có hứng thú với phim Trung Quốc không? Chỗ mình có nhiều lắm.', zh:'你对中国电影感兴趣吗？我这儿有很多。', py:'Nǐ duì Zhōngguó diànyǐng gǎn xìngqù ma? Wǒ zhèr yǒu hěn duō.'},
  {vi:'Chín giờ kém mười lăm vào học, tám rưỡi chúng ta gặp nhau ở cửa lớp nhé.', zh:'差一刻九点上课，我们八点半在教室门口见吧。', py:'Chà yí kè jiǔ diǎn shàngkè, wǒmen bā diǎn bàn zài jiàoshì ménkǒu jiàn ba.'},
  {vi:'Hôm qua tôi đá bóng với đồng nghiệp hai tiếng.', zh:'昨天我跟同事踢了两个小时足球。', py:'Zuótiān wǒ gēn tóngshì tīle liǎng ge xiǎoshí zúqiú.'},
];

// ══════════════════════════════════════════
// LUYỆN DỊCH (Trung → Việt) — nội dung KHÁC với chiều Việt→Trung ở trên
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:'Bạn đến muộn mười lăm phút, chúng tôi đợi bạn lâu lắm rồi.', zh:'你迟到了一刻，我们等你等了很久了。', py:'Nǐ chídàole yí kè, wǒmen děng nǐ děngle hěn jiǔ le.'},
  {vi:'Trước khi kết hôn, anh ấy sống ở miền Nam năm năm.', zh:'结婚以前，他在南方住了五年。', py:'Jiéhūn yǐqián, tā zài nánfāng zhùle wǔ nián.'},
  {vi:'Tối nào tôi cũng tập thể dục nửa tiếng trong công viên.', zh:'每天晚上我都在公园锻炼半个小时。', py:'Měi tiān wǎnshang wǒ dōu zài gōngyuán duànliàn bàn ge xiǎoshí.'},
];

// ══════════════════════════════════════════
// LUYỆN NGHE — đề nghe THẬT từ HSK标准教程3 练习册 (sách bài tập Bài 7)
// Audio gốc duy nhất chứa đủ 20 câu (Phần 1+2+3+4 của đề gốc):
//  - Phần 1 (câu 1-5, gốc: nghe chọn tranh) + Phần 2 (câu 6-10, gốc: nghe
//    phán đoán đúng/sai) → gộp thành 10 câu ĐIỀN CHÍNH TẢ.
//  - Phần 3 (câu 11-15) + Phần 4 (câu 16-20) → 10 câu TRẮC NGHIỆM, kèm các
//    dòng nghe-điền-cụm-từ-ngắn trước khi chọn đáp án, giữ đúng như đề gốc.
// ══════════════════════════════════════════
var listenData = {
  type: 'workbook',
  audio: "/audio/hsk3-bai-7/listen-full.mp3",
  dictation: [
    {num:1, lines:[
      {speaker:"男", pre:"", blank:"你看看，只有半个小时了，快要迟到了", post:"。",
       py:"Nǐ kànkan, zhǐ yǒu bàn ge xiǎoshí le, kuàiyào chídào le.",
       vn:"Bạn xem, chỉ còn nửa tiếng thôi, sắp muộn rồi."},
      {speaker:"女", pre:"你别着急，", blank:"走路十五分钟就到了", post:"。",
       py:"Nǐ bié zháojí, zǒulù shíwǔ fēnzhōng jiù dào le.",
       vn:"Bạn đừng vội, đi bộ mười lăm phút là đến rồi."}]},
    {num:2, lines:[
      {speaker:"女", pre:"", blank:"你都睡了十几个钟头了，快要迟到了", post:"！",
       py:"Nǐ dōu shuìle shí jǐ ge zhōngtóu le, kuàiyào chídào le!",
       vn:"Bạn ngủ mười mấy tiếng rồi, sắp muộn rồi đấy!"},
      {speaker:"男", pre:"", blank:"我想多睡会儿，太累了", post:"。",
       py:"Wǒ xiǎng duō shuì huìr, tài lèi le.",
       vn:"Tôi muốn ngủ thêm chút nữa, mệt quá."}]},
    {num:3, lines:[
      {speaker:"女1", pre:"", blank:"你慢点儿走", post:"。",
       py:"Nǐ màn diǎnr zǒu.",
       vn:"Bạn đi chậm chút thôi."},
      {speaker:"女2", pre:"", blank:"刚爬了几分钟，你就累了", post:"？",
       py:"Gāng pále jǐ fēnzhōng, nǐ jiù lèi le?",
       vn:"Vừa leo mấy phút mà bạn đã mệt rồi à?"}]},
    {num:4, lines:[
      {speaker:"男", pre:"", blank:"我都看了二十分钟报纸了，车怎么还不来", post:"？",
       py:"Wǒ dōu kànle èrshí fēnzhōng bàozhǐ le, chē zěnme hái bù lái?",
       vn:"Tôi đã đọc báo hai mươi phút rồi, sao xe vẫn chưa đến vậy?"},
      {speaker:"女", pre:"", blank:"再等等，快来了", post:"。",
       py:"Zài děngdeng, kuài lái le.",
       vn:"Đợi thêm chút nữa, sắp đến rồi."}]},
    {num:5, lines:[
      {speaker:"男1", pre:"", blank:"欢迎你来我们银行", post:"。",
       py:"Huānyíng nǐ lái wǒmen yínháng.",
       vn:"Hoan nghênh bạn đến ngân hàng chúng tôi."},
      {speaker:"男2", pre:"经理您好，", blank:"我一定好好儿工作", post:"。",
       py:"Jīnglǐ nín hǎo, wǒ yídìng hǎohāor gōngzuò.",
       vn:"Chào giám đốc, tôi nhất định sẽ làm việc chăm chỉ."}]},
    {num:6, stmt:"他现在在银行上班。", judge:false, lines:[
      {pre:"我是2010年开始工作的，", blank:"在银行工作了两年以后，来到了这家公司", post:"。",
       py:"Wǒ shì èr líng yī líng nián kāishǐ gōngzuò de, zài yínháng gōngzuòle liǎng nián yǐhòu, láidàole zhè jiā gōngsī.",
       vn:"Tôi bắt đầu làm việc từ năm 2010, làm ở ngân hàng hai năm rồi mới đến công ty này."}]},
    {num:7, stmt:"他们还要等。", judge:true, lines:[
      {pre:"飞机可能晚到十分钟，", blank:"您再等一会儿吧", post:"。",
       py:"Fēijī kěnéng wǎn dào shí fēnzhōng, nín zài děng yíhuìr ba.",
       vn:"Máy bay có thể sẽ trễ mười phút, bạn đợi thêm chút nữa nhé."}]},
    {num:8, stmt:"他喜欢跟朋友一起去爬山。", judge:false, lines:[
      {pre:"我对爬山不感兴趣，", blank:"爬山太累了", post:"。",
       py:"Wǒ duì páshān bù gǎn xìngqù, páshān tài lèi le.",
       vn:"Tôi không thích leo núi, leo núi mệt lắm."}]},
    {num:9, stmt:"小刚在等人。", judge:true, lines:[
      {pre:"小刚在门口站了一个小时，", blank:"小方也没出来", post:"。",
       py:"Xiǎogāng zài ménkǒu zhànle yí ge xiǎoshí, Xiǎofāng yě méi chūlai.",
       vn:"Tiểu Cương đứng trước cửa một tiếng, Tiểu Phương cũng chưa ra."}]},
    {num:10, stmt:"她对音乐不感兴趣。", judge:false, lines:[
      {pre:"她已经80多岁了，", blank:"可是身体好，爱运动，还喜欢听年轻人唱的歌", post:"。",
       py:"Tā yǐjīng bāshí duō suì le, kěshì shēntǐ hǎo, ài yùndòng, hái xǐhuan tīng niánqīngrén chàng de gē.",
       vn:"Bà ấy đã hơn 80 tuổi rồi, nhưng sức khỏe tốt, thích vận động, còn thích nghe bài hát người trẻ hát."}]}
  ],
  mc: [
    {num:11, options:["打车","坐公共汽车","走路"], ans:0, q:"女的准备怎么回去？",
     lines:[
      {speaker:"男", pre:"雨下得这么大，", blank:"你家离这儿太远了，怎么办啊", post:"？",
       py:"Yǔ xià de zhème dà, nǐ jiā lí zhèr tài yuǎn le, zěnme bàn a?",
       vn:"Mưa to thế này, nhà bạn xa đây quá, làm sao đây?"},
      {speaker:"女", pre:"没关系，", blank:"我坐出租车半个小时就回去了", post:"。",
       py:"Méi guānxi, wǒ zuò chūzūchē bàn ge xiǎoshí jiù huíqu le.",
       vn:"Không sao đâu, tôi đi taxi nửa tiếng là về đến nhà rồi."}
     ],
     explain:"男：雨下得这么大，你家离这儿太远了，怎么办啊？女：没关系，我坐出租车半个小时就回去了。问：女的准备怎么回去？ → 打车。"},
    {num:12, options:["她病了","她迟到了","她没去工作"], ans:0, q:"女的怎么了？",
     lines:[
      {speaker:"男", pre:"", blank:"你哪儿不舒服", post:"？",
       py:"Nǐ nǎr bù shūfu?",
       vn:"Bạn chỗ nào không khỏe?"},
      {speaker:"女", pre:"白医生，", blank:"我头疼了一个星期了，都没去上课。怎么办呢", post:"？",
       py:"Bái yīshēng, wǒ tóu téngle yí ge xīngqī le, dōu méi qù shàngkè. Zěnme bàn ne?",
       vn:"Bác sĩ Bạch ơi, đầu tôi đau cả tuần rồi, không đi học được. Làm sao bây giờ?"}
     ],
     explain:"男：你哪儿不舒服？女：白医生，我头疼了一个星期了，都没去上课。怎么办呢？问：女的怎么了？ → 她病了。"},
    {num:13, options:["看电视","运动","周末"], ans:1, q:"女的对什么没有兴趣？",
     lines:[
      {speaker:"男", pre:"", blank:"你周末喜欢做什么", post:"？",
       py:"Nǐ zhōumò xǐhuan zuò shénme?",
       vn:"Cuối tuần bạn thích làm gì?"},
      {speaker:"女", pre:"我不爱运动，", blank:"周末就在家看看电视", post:"。",
       py:"Wǒ bú ài yùndòng, zhōumò jiù zài jiā kànkan diànshì.",
       vn:"Tôi không thích vận động, cuối tuần chỉ ở nhà xem tivi thôi."}
     ],
     explain:"男：你周末喜欢做什么？女：我不爱运动，周末就在家看看电视。问：女的对什么没有兴趣？ → 运动。"},
    {num:14, options:["同学","同事","师生"], ans:1, q:"男的和女的可能是什么关系？",
     lines:[
      {speaker:"男", pre:"今天的工作我还没做完，", blank:"你来帮帮我好吗", post:"？",
       py:"Jīntiān de gōngzuò wǒ hái méi zuòwán, nǐ lái bāngbang wǒ hǎo ma?",
       vn:"Công việc hôm nay tôi vẫn chưa làm xong, bạn qua giúp tôi được không?"},
      {speaker:"女", pre:"行啊，不过", blank:"到时候你要请我吃饭", post:"。",
       py:"Xíng a, búguò dào shíhou nǐ yào qǐng wǒ chīfàn.",
       vn:"Được đấy, nhưng lúc đó bạn phải mời tôi ăn cơm."}
     ],
     explain:"男：今天的工作我还没做完，你来帮帮我好吗？女：行啊，不过到时候你要请我吃饭。问：男的和女的可能是什么关系？ → 同事。"},
    {num:15, options:["一会儿","十二个小时","很久"], ans:2, q:"男的看了多长时间电影了？",
     lines:[
      {speaker:"男", pre:"这是什么电影啊？", blank:"我看了半天也没看懂", post:"。",
       py:"Zhè shì shénme diànyǐng a? Wǒ kànle bàntiān yě méi kàndǒng.",
       vn:"Đây là phim gì vậy? Tôi xem lâu rồi mà vẫn không hiểu."},
      {speaker:"女", pre:"很多人都是这样，", blank:"你再看一会儿就明白了", post:"。",
       py:"Hěn duō rén dōu shì zhèyàng, nǐ zài kàn yíhuìr jiù míngbai le.",
       vn:"Nhiều người cũng vậy, bạn xem thêm chút nữa là hiểu thôi."}
     ],
     explain:"男：这是什么电影啊？我看了半天也没看懂。女：很多人都是这样，你再看一会儿就明白了。问：男的看了多长时间电影？ → 很久。"},
    {num:16, options:["欢迎男的来公司","要结婚了","在迎接新同事"], ans:1, q:"关于女的，可以知道什么？",
     lines:[
      {speaker:"女", pre:"我下个月结婚，", blank:"到时候欢迎你来", post:"。",
       py:"Wǒ xià ge yuè jié hūn, dào shíhou huānyíng nǐ lái.",
       vn:"Tháng sau tôi kết hôn, đến lúc đó hoan nghênh bạn đến nhé."},
      {speaker:"男", pre:"", blank:"什么？结婚", post:"？",
       py:"Shénme? Jié hūn?",
       vn:"Gì cơ? Kết hôn?"},
      {speaker:"女", pre:"突然吗？", blank:"其实我和我男朋友认识已经五年了", post:"。",
       py:"Tūrán ma? Qíshí wǒ hé wǒ nánpéngyou rènshi yǐjīng wǔ nián le.",
       vn:"Bất ngờ à? Thực ra tôi và bạn trai quen nhau năm năm rồi."},
      {speaker:"男", pre:"", blank:"就是那天来公司接你的那个", post:"？",
       py:"Jiùshì nàtiān lái gōngsī jiē nǐ de nàge?",
       vn:"Chính là người hôm đó đến công ty đón bạn đấy à?"}
     ],
     explain:"女：我下个月结婚，到时候欢迎你来。男：什么？结婚？女：突然吗？其实我和我男朋友认识已经五年了。男：就是那天来公司接你的那个？问：关于女的，可以知道什么？ → 要结婚了。"},
    {num:17, options:["等车","接人","买东西"], ans:1, q:"男的在做什么？",
     lines:[
      {speaker:"男", pre:"喂，", blank:"我已经等了半个小时了，你在哪儿呢", post:"？",
       py:"Wéi, wǒ yǐjīng děngle bàn ge xiǎoshí le, nǐ zài nǎr ne?",
       vn:"Alo, tôi đã đợi nửa tiếng rồi, bạn đang ở đâu vậy?"},
      {speaker:"女", pre:"我刚下飞机，", blank:"我穿着红衣服，你呢", post:"？",
       py:"Wǒ gāng xià fēijī, wǒ chuānzhe hóng yīfu, nǐ ne?",
       vn:"Tôi vừa xuống máy bay, tôi mặc áo đỏ, còn bạn?"},
      {speaker:"男", pre:"我穿着白裤子，", blank:"你看见我了吗", post:"？",
       py:"Wǒ chuānzhe bái kùzi, nǐ kànjiàn wǒ le ma?",
       vn:"Tôi mặc quần trắng, bạn thấy tôi chưa?"},
      {speaker:"女", pre:"", blank:"看见了，看见了", post:"。",
       py:"Kànjiàn le, kànjiàn le.",
       vn:"Thấy rồi, thấy rồi."}
     ],
     explain:"男：喂，我已经等了半个小时了，你在哪儿呢？女：我刚下飞机，我穿着红衣服，你呢？男：我穿着白裤子，你看见我了吗？女：看见了，看见了。问：男的在做什么？ → 接人。"},
    {num:18, options:["银行","书店","学校"], ans:0, q:"女的现在在哪儿工作？",
     lines:[
      {speaker:"男", pre:"", blank:"你为什么不在书店工作了", post:"？",
       py:"Nǐ wèishénme bú zài shūdiàn gōngzuò le?",
       vn:"Sao bạn không làm ở hiệu sách nữa?"},
      {speaker:"女", pre:"那不是我喜欢的。", blank:"我在那儿工作了半年以后，就来了这家银行", post:"。",
       py:"Nà bú shì wǒ xǐhuan de. Wǒ zài nàr gōngzuòle bàn nián yǐhòu, jiù láile zhè jiā yínháng.",
       vn:"Đó không phải điều tôi thích. Tôi làm ở đó nửa năm rồi liền đến ngân hàng này."},
      {speaker:"男", pre:"", blank:"现在的工作怎么样", post:"？",
       py:"Xiànzài de gōngzuò zěnmeyàng?",
       vn:"Công việc hiện tại thế nào?"},
      {speaker:"女", pre:"很好，", blank:"我很喜欢", post:"。",
       py:"Hěn hǎo, wǒ hěn xǐhuan.",
       vn:"Rất tốt, tôi rất thích."}
     ],
     explain:"男：你为什么不在书店工作了？女：那不是我喜欢的。我在那儿工作了半年以后，就来了这家银行。男：现在的工作怎么样？女：很好，我很喜欢。问：女的现在在哪儿工作？ → 银行。"},
    {num:19, options:["唱歌","吃饭","看电视"], ans:0, q:"女的的儿子喜欢什么？",
     lines:[
      {speaker:"女", pre:"", blank:"我两岁大的儿子对音乐感兴趣", post:"。",
       py:"Wǒ liǎng suì dà de érzi duì yīnyuè gǎn xìngqù.",
       vn:"Con trai hai tuổi của tôi rất thích âm nhạc."},
      {speaker:"男", pre:"是吗？", blank:"你是怎么知道的", post:"？",
       py:"Shì ma? Nǐ shì zěnme zhīdào de?",
       vn:"Vậy à? Bạn biết bằng cách nào?"},
      {speaker:"女", pre:"电视上有人唱歌，", blank:"他也一起唱。有时候大家在吃饭，他也唱", post:"。",
       py:"Diànshì shang yǒu rén chàng gē, tā yě yìqǐ chàng. Yǒu shíhou dàjiā zài chīfàn, tā yě chàng.",
       vn:"Trên tivi có người hát, cháu cũng hát theo. Có lúc mọi người đang ăn cơm, cháu cũng hát."}
     ],
     explain:"女：我两岁大的儿子对音乐感兴趣。男：是吗？你是怎么知道的？女：电视上有人唱歌，他也一起唱。有时候大家在吃饭，他也唱。问：女的的儿子喜欢什么？ → 唱歌。"},
    {num:20, options:["电影","运动","音乐"], ans:2, q:"女的对什么感兴趣？",
     lines:[
      {speaker:"男", pre:"祝你生日快乐，", blank:"这个送给你", post:"。",
       py:"Zhù nǐ shēngrì kuàilè, zhège sòng gěi nǐ.",
       vn:"Chúc bạn sinh nhật vui vẻ, cái này tặng bạn."},
      {speaker:"女", pre:"", blank:"什么啊", post:"？",
       py:"Shénme a?",
       vn:"Cái gì vậy?"},
      {speaker:"男", pre:"", blank:"打开看看", post:"。",
       py:"Dǎkāi kànkan.",
       vn:"Mở ra xem thử đi."},
      {speaker:"女", pre:"音乐会的票！", blank:"我太喜欢了，谢谢你", post:"。",
       py:"Yīnyuèhuì de piào! Wǒ tài xǐhuan le, xièxie nǐ.",
       vn:"Vé buổi hòa nhạc! Tôi thích quá, cảm ơn bạn."}
     ],
     explain:"男：祝你生日快乐，这个送给你。女：什么啊？男：打开看看。女：音乐会的票！我太喜欢了，谢谢你。问：女的对什么感兴趣？ → 音乐。"}
  ]
};
