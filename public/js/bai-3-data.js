// ══════════════════════════════════════════
// DATA — Bài 3: 左边那个红色的是我的
// ══════════════════════════════════════════
var vocabData = [
  {
    "n": 1,
    "zh": "块",
    "py": "kuài",
    "pos": "Lượng từ",
    "vn": "đồng (tiền); miếng",
    "hv": "khối",
    "em": "💰",
    "lesson": 1,
    "ex_zh": "这块手表花了三千多块。",
    "ex_py": "Zhè kuài shǒubiǎo huāle sānqiān duō kuài.",
    "ex_vn": "Chiếc đồng hồ này tốn hơn 3000 tệ.",
    "exList": [
      {
        "zh": "这块手表花了三千多块。",
        "py": "Zhè kuài shǒubiǎo huāle sānqiān duō kuài.",
        "vn": "Chiếc đồng hồ này tốn hơn 3000 tệ."
      },
      {
        "zh": "一块蛋糕多少钱？",
        "py": "Yí kuài dàngāo duōshao qián?",
        "vn": "Một miếng bánh gato bao nhiêu tiền?"
      },
      {
        "zh": "我只有十块钱。",
        "py": "Wǒ zhǐyǒu shí kuài qián.",
        "vn": "Tôi chỉ có 10 tệ."
      }
    ],
    "hanzi": [
      {
        "c": "块",
        "p": "kuài",
        "type": "左右结构 · Trái-phải",
        "st": 7,
        "ord": "土 (thổ) trái → 夬 (quyết) phải",
        "rad": "土 (thổ – đất)",
        "mean": "miếng, cục; đơn vị tiền",
        "tip": "Đất 土 + 夬 (tách rời) → một MIẾNG đất tách riêng ra. Dùng đếm vật rời rạc và tiền tệ (khẩu ngữ của 元).",
        "cf": "快 (kuài – nhanh, bộ 忄)",
        "w": "一块 / 三千块 / 块钱"
      }
    ],
    "colloFull": [
      {
        "zh": "五块",
        "py": "wǔ kuài",
        "vn": "năm đồng"
      },
      {
        "zh": "十块钱",
        "py": "shí kuài qián",
        "vn": "mười đồng"
      },
      {
        "zh": "几块钱",
        "py": "jǐ kuài qián",
        "vn": "mấy đồng"
      },
      {
        "zh": "一块",
        "py": "yí kuài",
        "vn": "một đồng"
      }
    ],
    "patterns": [
      {
        "s": "số + 块 + (钱)",
        "m": "Đơn vị tiền trong khẩu ngữ: 十块钱"
      },
      {
        "s": "块 dùng khi nói; văn viết dùng 元"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Cái đồng hồ này mười đồng.",
        "answer": "这个手表十块钱。",
        "answerPy": "Zhège shǒubiǎo shí kuài qián.",
        "note": "Nói giá thì không cần động từ 是.",
        "pair": "……块钱"
      },
      {
        "promptLang": "vi",
        "prompt": "Tờ báo này mấy đồng?",
        "answer": "这个报纸几块钱？",
        "answerPy": "Zhège bàozhǐ jǐ kuài qián?",
        "note": "块 dùng khi nói, văn viết dùng 元.",
        "pair": "几块钱？"
      }
    ]
  },
  {
    "n": 2,
    "zh": "手表",
    "py": "shǒubiǎo",
    "pos": "Danh từ",
    "vn": "đồng hồ đeo tay",
    "hv": "thủ biểu",
    "em": "⌚",
    "lesson": 1,
    "ex_zh": "这块手表是你的吗？",
    "ex_py": "Zhè kuài shǒubiǎo shì nǐ de ma?",
    "ex_vn": "Chiếc đồng hồ này có phải của bạn không?",
    "exList": [
      {
        "zh": "这块手表是你的吗？",
        "py": "Zhè kuài shǒubiǎo shì nǐ de ma?",
        "vn": "Chiếc đồng hồ này có phải của bạn không?"
      },
      {
        "zh": "我的手表坏了。",
        "py": "Wǒ de shǒubiǎo huài le.",
        "vn": "Đồng hồ của tôi hỏng rồi."
      },
      {
        "zh": "他戴了一块新手表。",
        "py": "Tā dàile yí kuài xīn shǒubiǎo.",
        "vn": "Anh ấy đeo một chiếc đồng hồ mới."
      }
    ],
    "hanzi": [
      {
        "c": "手",
        "p": "shǒu",
        "type": "独体字 · Tượng hình",
        "st": 4,
        "ord": "丿 → 一 → 一 → 亅",
        "rad": "手 (thủ – tay)",
        "mean": "tay",
        "tip": "Hình vẽ bàn tay xoè 5 ngón cách điệu → \"TAY\".",
        "cf": "毛 (máo – \"lông\", nét cong khác)",
        "w": "手表 / 手机 / 洗手"
      },
      {
        "c": "表",
        "p": "biǎo",
        "type": "上下结构 · Trên-dưới",
        "st": 8,
        "ord": "土 trên → 衣 (biến thể) dưới",
        "rad": "衣 (y – áo)",
        "mean": "đồng hồ; bề mặt; biểu thị",
        "tip": "Liên quan tới bộ 衣 (áo) — cái gì lộ ra bên ngoài, phần mặt ngoài. Sau dùng chỉ mặt đồng hồ đeo TAY.",
        "cf": "衣 (yī – \"áo\", thiếu nét trên)",
        "w": "手表 / 表哥 / 表示"
      }
    ],
    "colloFull": [
      {
        "zh": "一个手表",
        "py": "yí gè shǒubiǎo",
        "vn": "một cái đồng hồ"
      },
      {
        "zh": "买手表",
        "py": "mǎi shǒubiǎo",
        "vn": "mua đồng hồ"
      },
      {
        "zh": "我的手表",
        "py": "wǒ de shǒubiǎo",
        "vn": "đồng hồ của tôi"
      },
      {
        "zh": "新手表",
        "py": "xīn shǒubiǎo",
        "vn": "đồng hồ mới"
      }
    ],
    "patterns": [
      {
        "s": "một + 个 + 手表",
        "m": "Lượng từ của 手表 là 个"
      },
      {
        "s": "手 + 表",
        "m": "Cái đồng hồ (表) đeo trên tay (手)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Cái đồng hồ này là chồng tôi tặng.",
        "answer": "这个手表是我丈夫送的。",
        "answerPy": "Zhège shǒubiǎo shì wǒ zhàngfu sòng de.",
        "note": "手 + 表 — đồng hồ đeo trên tay.",
        "pair": "是……的"
      },
      {
        "promptLang": "vi",
        "prompt": "Tôi muốn mua một cái đồng hồ mới.",
        "answer": "我要买一个新手表。",
        "answerPy": "Wǒ yào mǎi yí ge xīn shǒubiǎo.",
        "note": "Lượng từ của 手表 là 个.",
        "pair": "要 + V"
      }
    ]
  },
  {
    "n": 3,
    "zh": "钱",
    "py": "qián",
    "pos": "Danh từ",
    "vn": "tiền",
    "hv": "tiền",
    "em": "💵",
    "lesson": 1,
    "ex_zh": "多少钱买的？",
    "ex_py": "Duōshao qián mǎi de?",
    "ex_vn": "Mua hết bao nhiêu tiền?",
    "exList": [
      {
        "zh": "多少钱买的？",
        "py": "Duōshao qián mǎi de?",
        "vn": "Mua hết bao nhiêu tiền?"
      },
      {
        "zh": "我没有钱了。",
        "py": "Wǒ méiyǒu qián le.",
        "vn": "Tôi hết tiền rồi."
      },
      {
        "zh": "这个多少钱一个？",
        "py": "Zhège duōshao qián yí ge?",
        "vn": "Cái này bao nhiêu tiền một cái?"
      }
    ],
    "hanzi": [
      {
        "c": "钱",
        "p": "qián",
        "type": "左右结构 · Trái-phải",
        "st": 10,
        "ord": "钅(kim) trái → 戋 (tiễn) phải",
        "rad": "钅(kim – kim loại)",
        "mean": "tiền",
        "tip": "Bộ 钅(kim loại) bên trái → tiền xưa được đúc bằng kim loại (đồng, bạc).",
        "cf": "浅 (qiǎn – \"nông, cạn\", bộ 氵)",
        "w": "多少钱 / 有钱 / 花钱"
      }
    ],
    "colloFull": [
      {
        "zh": "多少钱",
        "py": "duōshao qián",
        "vn": "bao nhiêu tiền"
      },
      {
        "zh": "十块钱",
        "py": "shí kuài qián",
        "vn": "mười đồng"
      },
      {
        "zh": "有钱",
        "py": "yǒu qián",
        "vn": "có tiền"
      },
      {
        "zh": "没有钱",
        "py": "méiyǒu qián",
        "vn": "không có tiền"
      }
    ],
    "patterns": [
      {
        "s": "多少 + 钱",
        "m": "Hỏi giá: 这个手表多少钱？"
      },
      {
        "s": "钱 có bộ 钅 (kim loại) — tiền xưa đúc bằng kim loại"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Cái đồng hồ này bao nhiêu tiền?",
        "answer": "这个手表多少钱？",
        "answerPy": "Zhège shǒubiǎo duōshao qián?",
        "note": "Khung hỏi giá quen thuộc nhất.",
        "pair": "多少钱？"
      },
      {
        "promptLang": "vi",
        "prompt": "Hôm nay tôi không có tiền, mai mua vậy.",
        "answer": "今天我没有钱，明天买吧。",
        "answerPy": "Jīntiān wǒ méiyǒu qián, míngtiān mǎi ba.",
        "note": "Phủ định của 有 là 没有.",
        "pair": "没有 + N"
      }
    ]
  },
  {
    "n": 4,
    "zh": "买",
    "py": "mǎi",
    "pos": "Động từ",
    "vn": "mua",
    "hv": "mãi",
    "em": "🛍️",
    "lesson": 1,
    "ex_zh": "我想买一块新手表。",
    "ex_py": "Wǒ xiǎng mǎi yí kuài xīn shǒubiǎo.",
    "ex_vn": "Tôi muốn mua một chiếc đồng hồ mới.",
    "exList": [
      {
        "zh": "我想买一块新手表。",
        "py": "Wǒ xiǎng mǎi yí kuài xīn shǒubiǎo.",
        "vn": "Tôi muốn mua một chiếc đồng hồ mới."
      },
      {
        "zh": "你在哪儿买的？",
        "py": "Nǐ zài nǎr mǎi de?",
        "vn": "Bạn mua ở đâu vậy?"
      },
      {
        "zh": "这是爸爸买给我的。",
        "py": "Zhè shì bàba mǎi gěi wǒ de.",
        "vn": "Đây là bố mua cho tôi."
      }
    ],
    "hanzi": [
      {
        "c": "买",
        "p": "mǎi",
        "type": "上下结构 · Trên-dưới",
        "st": 6,
        "ord": "𠂉 → 大 (biến thể)",
        "rad": "大 (đại – biến thể)",
        "mean": "mua",
        "tip": "Không có nét sĩ 士 trên đầu — phân biệt với 卖 (bán, có thêm nét trên đầu). Nhớ theo cặp: 买 (mua) ↔ 卖 (bán).",
        "cf": "卖 (mài – \"bán\", thêm nét trên đầu)",
        "w": "买东西 / 买菜 / 买卖"
      }
    ],
    "colloFull": [
      {
        "zh": "买手表",
        "py": "mǎi shǒubiǎo",
        "vn": "mua đồng hồ"
      },
      {
        "zh": "买报纸",
        "py": "mǎi bàozhǐ",
        "vn": "mua báo"
      },
      {
        "zh": "想买",
        "py": "xiǎng mǎi",
        "vn": "muốn mua"
      },
      {
        "zh": "买什么",
        "py": "mǎi shénme",
        "vn": "mua gì"
      }
    ],
    "patterns": [
      {
        "s": "买 + danh từ",
        "m": "Mua cái gì: 买报纸"
      },
      {
        "s": "买 (mǎi, mua) — chú ý thanh 3, khác 卖 (mài, bán)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Hôm qua tôi mua một tờ báo.",
        "answer": "昨天我买了一个报纸。",
        "answerPy": "Zuótiān wǒ mǎile yí ge bàozhǐ.",
        "note": "买 + danh từ — mua cái gì.",
        "pair": "……了"
      },
      {
        "promptLang": "vi",
        "prompt": "Bạn muốn mua gì?",
        "answer": "你要买什么？",
        "answerPy": "Nǐ yào mǎi shénme?",
        "note": "Câu có 什么 thì không thêm 吗.",
        "pair": "……什么？"
      }
    ]
  },
  {
    "n": 5,
    "zh": "报纸",
    "py": "bàozhǐ",
    "pos": "Danh từ",
    "vn": "báo, tờ báo",
    "hv": "báo chỉ",
    "em": "📰",
    "lesson": 2,
    "ex_zh": "这是今天早上的报纸吗？",
    "ex_py": "Zhè shì jīntiān zǎoshang de bàozhǐ ma?",
    "ex_vn": "Đây là tờ báo sáng nay phải không?",
    "exList": [
      {
        "zh": "这是今天早上的报纸吗？",
        "py": "Zhè shì jīntiān zǎoshang de bàozhǐ ma?",
        "vn": "Đây là tờ báo sáng nay phải không?"
      },
      {
        "zh": "爸爸每天看报纸。",
        "py": "Bàba měitiān kàn bàozhǐ.",
        "vn": "Bố đọc báo mỗi ngày."
      },
      {
        "zh": "报纸在桌子上。",
        "py": "Bàozhǐ zài zhuōzi shang.",
        "vn": "Tờ báo ở trên bàn."
      }
    ],
    "hanzi": [
      {
        "c": "报",
        "p": "bào",
        "type": "左右结构 · Trái-phải",
        "st": 7,
        "ord": "扌(thủ) trái → 及 (cập) biến thể phải",
        "rad": "扌(thủ – tay)",
        "mean": "báo cáo; tin tức",
        "tip": "Bộ 扌(tay) → hành động trao/đưa tin bằng tay. 报 dùng trong 报纸 (báo giấy), 报告 (báo cáo).",
        "cf": "服 (fú – \"phục vụ\", bộ 月)",
        "w": "报纸 / 报告 / 日报"
      },
      {
        "c": "纸",
        "p": "zhǐ",
        "type": "左右结构 · Trái-phải",
        "st": 7,
        "ord": "纟(mịch) trái → 氏 (thị) phải",
        "rad": "纟(mịch – tơ, sợi)",
        "mean": "giấy",
        "tip": "Bộ 纟(tơ) → giấy cổ đại làm từ xơ vải, tơ lụa nghiền ra.",
        "cf": "低 (dī – \"thấp\", bộ 亻)",
        "w": "报纸 / 纸张 / 一张纸"
      }
    ],
    "colloFull": [
      {
        "zh": "买报纸",
        "py": "mǎi bàozhǐ",
        "vn": "mua báo"
      },
      {
        "zh": "看报纸",
        "py": "kàn bàozhǐ",
        "vn": "đọc báo"
      },
      {
        "zh": "今天的报纸",
        "py": "jīntiān de bàozhǐ",
        "vn": "báo hôm nay"
      },
      {
        "zh": "一张报纸",
        "py": "yì zhāng bàozhǐ",
        "vn": "một tờ báo"
      }
    ],
    "patterns": [
      {
        "s": "看 + 报纸",
        "m": "Đọc báo — dùng 看, không dùng 读"
      },
      {
        "s": "một + 张 + 报纸",
        "m": "Lượng từ của 报纸 là 张"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Sáng nào bố tôi cũng đọc báo.",
        "answer": "我爸爸每天早上都看报纸。",
        "answerPy": "Wǒ bàba měi tiān zǎoshang dōu kàn bàozhǐ.",
        "note": "Đọc báo dùng 看, không dùng 读.",
        "pair": "每……都……"
      },
      {
        "promptLang": "vi",
        "prompt": "Báo hôm nay ở trên bàn.",
        "answer": "今天的报纸在桌子上。",
        "answerPy": "Jīntiān de bàozhǐ zài zhuōzi shang.",
        "note": "今天的报纸 — báo hôm nay.",
        "pair": "在……上"
      }
    ]
  },
  {
    "n": 6,
    "zh": "昨天",
    "py": "zuótiān",
    "pos": "Danh từ",
    "vn": "hôm qua",
    "hv": "tạc thiên",
    "em": "📅",
    "lesson": 2,
    "ex_zh": "不是，是昨天的。",
    "ex_py": "Bú shì, shì zuótiān de.",
    "ex_vn": "Không phải, là báo ngày hôm qua.",
    "exList": [
      {
        "zh": "不是，是昨天的。",
        "py": "Bú shì, shì zuótiān de.",
        "vn": "Không phải, là báo ngày hôm qua."
      },
      {
        "zh": "昨天我很忙。",
        "py": "Zuótiān wǒ hěn máng.",
        "vn": "Hôm qua tôi rất bận."
      },
      {
        "zh": "昨天的天气比今天冷。",
        "py": "Zuótiān de tiānqì bǐ jīntiān lěng.",
        "vn": "Thời tiết hôm qua lạnh hơn hôm nay."
      }
    ],
    "hanzi": [
      {
        "c": "昨",
        "p": "zuó",
        "type": "左右结构 · Trái-phải",
        "st": 9,
        "ord": "日 (nhật) trái → 乍 (sạ) phải",
        "rad": "日 (nhật – mặt trời)",
        "mean": "hôm qua",
        "tip": "Bộ 日 (mặt trời/ngày) + 乍 (vừa mới) → ngày vừa mới trôi qua = HÔM QUA.",
        "cf": "作 (zuò – \"làm\", bộ 亻)",
        "w": "昨天 / 昨晚 / 昨日"
      },
      {
        "c": "天",
        "p": "tiān",
        "type": "独体字 · Chữ đơn",
        "st": 4,
        "ord": "一 → 一 → 丿 → 捺",
        "rad": "大 (đại)",
        "mean": "ngày; trời",
        "tip": "Đã học ở bài trước — nét ngang trên chữ 大 = bầu trời, cũng dùng đếm NGÀY.",
        "cf": "夫 (fū)",
        "w": "昨天 / 今天 / 明天"
      }
    ],
    "colloFull": [
      {
        "zh": "昨天晚上",
        "py": "zuótiān wǎnshang",
        "vn": "tối qua"
      },
      {
        "zh": "昨天早上",
        "py": "zuótiān zǎoshang",
        "vn": "sáng qua"
      },
      {
        "zh": "昨天买的",
        "py": "zuótiān mǎi de",
        "vn": "mua hôm qua"
      },
      {
        "zh": "昨天没去",
        "py": "zuótiān méi qù",
        "vn": "hôm qua không đi"
      }
    ],
    "patterns": [
      {
        "s": "昨天 + Sub + động từ",
        "m": "Việc đã qua — động từ vẫn giữ nguyên hình thức"
      },
      {
        "s": "昨天 · 今天 · 明天 — ba mốc thời gian đi liền một bộ"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tối qua tôi không xem tivi.",
        "answer": "昨天晚上我没看电视。",
        "answerPy": "Zuótiān wǎnshang wǒ méi kàn diànshì.",
        "note": "Việc đã qua không xảy ra thì dùng 没.",
        "pair": "没 + V"
      },
      {
        "promptLang": "vi",
        "prompt": "Cái đồng hồ này tôi mua hôm qua.",
        "answer": "这个手表是我昨天买的。",
        "answerPy": "Zhège shǒubiǎo shì wǒ zuótiān mǎi de.",
        "note": "Động từ không đổi hình thức theo thời gian.",
        "pair": "是……的"
      }
    ]
  },
  {
    "n": 7,
    "zh": "送",
    "py": "sòng",
    "pos": "Động từ",
    "vn": "đưa, giao, tặng",
    "hv": "tống",
    "em": "🚚",
    "lesson": 2,
    "ex_zh": "是不是送报纸的来了？",
    "ex_py": "Shìbushì sòng bàozhǐ de lái le?",
    "ex_vn": "Có phải người đưa báo đến rồi không?",
    "exList": [
      {
        "zh": "是不是送报纸的来了？",
        "py": "Shìbushì sòng bàozhǐ de lái le?",
        "vn": "Có phải người đưa báo đến rồi không?"
      },
      {
        "zh": "这是他送给我的礼物。",
        "py": "Zhè shì tā sòng gěi wǒ de lǐwù.",
        "vn": "Đây là món quà anh ấy tặng tôi."
      },
      {
        "zh": "谁送你回家？",
        "py": "Shéi sòng nǐ huí jiā?",
        "vn": "Ai đưa bạn về nhà vậy?"
      }
    ],
    "hanzi": [
      {
        "c": "送",
        "p": "sòng",
        "type": "半包围 · Bán bao (辶)",
        "st": 9,
        "ord": "⺈ → 天 → 辶 (viết sau cùng)",
        "rad": "辶 (sước – bước đi)",
        "mean": "đưa, giao, tặng",
        "tip": "Bộ 辶 (đi) → mang một thứ gì đó ĐI đến chỗ người khác = đưa, giao, tặng.",
        "cf": "关 (guān – \"đóng, liên quan\")",
        "w": "送报纸 / 送礼物 / 送人"
      }
    ],
    "colloFull": [
      {
        "zh": "送礼物",
        "py": "sòng lǐwù",
        "vn": "tặng quà"
      },
      {
        "zh": "送给她",
        "py": "sòng gěi tā",
        "vn": "tặng cho cô ấy"
      },
      {
        "zh": "送你回家",
        "py": "sòng nǐ huí jiā",
        "vn": "đưa bạn về nhà"
      },
      {
        "zh": "想送",
        "py": "xiǎng sòng",
        "vn": "muốn tặng"
      }
    ],
    "patterns": [
      {
        "s": "送 + 给 + người",
        "m": "Tặng cho ai: 送给她一个手表"
      },
      {
        "s": "送 vừa là tặng, vừa là đưa tiễn: 送你回家"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Sinh nhật vợ tôi, tôi tặng cô ấy một cái đồng hồ.",
        "answer": "我妻子的生日，我送给她一个手表。",
        "answerPy": "Wǒ qīzi de shēngrì, wǒ sònggěi tā yí ge shǒubiǎo.",
        "note": "送给 + người — tặng cho ai.",
        "pair": "送给 + người"
      },
      {
        "promptLang": "vi",
        "prompt": "Muộn rồi, để tôi đưa bạn về nhà.",
        "answer": "很晚了，我送你回家吧。",
        "answerPy": "Hěn wǎn le, wǒ sòng nǐ huí jiā ba.",
        "note": "送 vừa là tặng, vừa là đưa tiễn.",
        "pair": "送 + người + V"
      }
    ]
  },
  {
    "n": 8,
    "zh": "牛奶",
    "py": "niúnǎi",
    "pos": "Danh từ",
    "vn": "sữa (bò)",
    "hv": "ngưu nãi",
    "em": "🥛",
    "lesson": 2,
    "ex_zh": "不是，是送牛奶的。",
    "ex_py": "Bú shì, shì sòng niúnǎi de.",
    "ex_vn": "Không phải, là người giao sữa.",
    "exList": [
      {
        "zh": "不是，是送牛奶的。",
        "py": "Bú shì, shì sòng niúnǎi de.",
        "vn": "Không phải, là người giao sữa."
      },
      {
        "zh": "我每天早上喝牛奶。",
        "py": "Wǒ měitiān zǎoshang hē niúnǎi.",
        "vn": "Mỗi sáng tôi đều uống sữa."
      },
      {
        "zh": "孩子喜欢喝牛奶。",
        "py": "Háizi xǐhuan hē niúnǎi.",
        "vn": "Trẻ con thích uống sữa."
      }
    ],
    "hanzi": [
      {
        "c": "牛",
        "p": "niú",
        "type": "独体字 · Tượng hình",
        "st": 4,
        "ord": "丿 → 一 → 一 → 丨",
        "rad": "牛 (ngưu – con bò)",
        "mean": "con bò/trâu",
        "tip": "Hình vẽ đầu con bò với 2 cái sừng cách điệu → \"BÒ\".",
        "cf": "午 (wǔ – \"buổi trưa\", thiếu 1 nét)",
        "w": "牛奶 / 牛肉 / 牛年"
      },
      {
        "c": "奶",
        "p": "nǎi",
        "type": "左右结构 · Trái-phải",
        "st": 5,
        "ord": "女 (nữ) trái → 乃 (nãi) phải",
        "rad": "女 (nữ – phụ nữ)",
        "mean": "sữa; bà, mẹ",
        "tip": "Bộ 女 (người mẹ) → liên tưởng người mẹ cho con bú = SỮA.",
        "cf": "奴 (nú – \"nô lệ\", phần phải khác)",
        "w": "牛奶 / 奶奶 / 喝奶"
      }
    ],
    "colloFull": [
      {
        "zh": "买牛奶",
        "py": "mǎi niúnǎi",
        "vn": "mua sữa"
      },
      {
        "zh": "喝牛奶",
        "py": "hē niúnǎi",
        "vn": "uống sữa"
      },
      {
        "zh": "一些牛奶",
        "py": "yìxiē niúnǎi",
        "vn": "một ít sữa"
      },
      {
        "zh": "热牛奶",
        "py": "rè niúnǎi",
        "vn": "sữa nóng"
      }
    ],
    "patterns": [
      {
        "s": "买 / 喝 + 牛奶",
        "m": "Mua sữa, uống sữa"
      },
      {
        "s": "牛 + 奶",
        "m": "Sữa (奶) của con bò (牛)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Sáng nào tôi cũng uống một cốc sữa.",
        "answer": "我每天早上都喝一杯牛奶。",
        "answerPy": "Wǒ měi tiān zǎoshang dōu hē yì bēi niúnǎi.",
        "note": "牛 + 奶 — sữa của con bò.",
        "pair": "每……都……"
      },
      {
        "promptLang": "vi",
        "prompt": "Bạn đi mua một ít sữa nhé.",
        "answer": "你去买一些牛奶吧。",
        "answerPy": "Nǐ qù mǎi yìxiē niúnǎi ba.",
        "note": "一些牛奶 — một ít sữa.",
        "pair": "……吧"
      }
    ]
  },
  {
    "n": 9,
    "zh": "谁",
    "py": "shéi",
    "pos": "Đại từ",
    "vn": "ai",
    "hv": "thùy",
    "em": "❓",
    "lesson": 3,
    "ex_zh": "这是谁的房间？",
    "ex_py": "Zhè shì shéi de fángjiān?",
    "ex_vn": "Đây là phòng của ai vậy?",
    "exList": [
      {
        "zh": "这是谁的房间？",
        "py": "Zhè shì shéi de fángjiān?",
        "vn": "Đây là phòng của ai vậy?"
      },
      {
        "zh": "刚才是谁来了？",
        "py": "Gāngcái shì shéi lái le?",
        "vn": "Vừa nãy là ai đến vậy?"
      },
      {
        "zh": "你在跟谁说话？",
        "py": "Nǐ zài gēn shéi shuōhuà?",
        "vn": "Bạn đang nói chuyện với ai vậy?"
      }
    ],
    "hanzi": [
      {
        "c": "谁",
        "p": "shéi",
        "type": "左右结构 · Trái-phải",
        "st": 10,
        "ord": "讠(ngôn) trái → 隹 (chuy) phải",
        "rad": "讠(ngôn – lời nói)",
        "mean": "ai",
        "tip": "Bộ 讠(lời nói) + 隹 (chim) → cất lời hỏi xem AI đang ở đó.",
        "cf": "难 (nán – \"khó\", cùng phần phải)",
        "w": "谁的 / 是谁 / 谁知道"
      }
    ],
    "colloFull": [
      {
        "zh": "是谁",
        "py": "shì shéi",
        "vn": "là ai"
      },
      {
        "zh": "谁的",
        "py": "shéi de",
        "vn": "của ai"
      },
      {
        "zh": "送给谁",
        "py": "sòng gěi shéi",
        "vn": "tặng cho ai"
      },
      {
        "zh": "谁买的",
        "py": "shéi mǎi de",
        "vn": "ai mua"
      }
    ],
    "patterns": [
      {
        "s": "Sub + 是 + 谁？",
        "m": "Hỏi người nào: 他是谁？"
      },
      {
        "s": "Câu đã có 谁 thì KHÔNG thêm 吗"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Cái đồng hồ này là của ai?",
        "answer": "这个手表是谁的？",
        "answerPy": "Zhège shǒubiǎo shì shéi de?",
        "note": "Câu đã có 谁 thì không thêm 吗.",
        "pair": "……是谁的？"
      },
      {
        "promptLang": "vi",
        "prompt": "Bạn muốn tặng cho ai?",
        "answer": "你要送给谁？",
        "answerPy": "Nǐ yào sònggěi shéi?",
        "note": "送给谁 — tặng cho ai.",
        "pair": "送给谁？"
      }
    ]
  },
  {
    "n": 10,
    "zh": "房间",
    "py": "fángjiān",
    "pos": "Danh từ",
    "vn": "phòng",
    "hv": "phòng gian",
    "em": "🚪",
    "lesson": 3,
    "ex_zh": "这是谁的房间？",
    "ex_py": "Zhè shì shéi de fángjiān?",
    "ex_vn": "Đây là phòng của ai vậy?",
    "exList": [
      {
        "zh": "这是谁的房间？",
        "py": "Zhè shì shéi de fángjiān?",
        "vn": "Đây là phòng của ai vậy?"
      },
      {
        "zh": "我的房间不大。",
        "py": "Wǒ de fángjiān bú dà.",
        "vn": "Phòng của tôi không lớn."
      },
      {
        "zh": "房间里有一张床。",
        "py": "Fángjiān lǐ yǒu yì zhāng chuáng.",
        "vn": "Trong phòng có một cái giường."
      }
    ],
    "hanzi": [
      {
        "c": "房",
        "p": "fáng",
        "type": "半包围 · Bán bao (户)",
        "st": 8,
        "ord": "户 (hộ) → 方 (phương) bên trong",
        "rad": "户 (hộ – cửa nhà)",
        "mean": "phòng, nhà",
        "tip": "Bộ 户 (cửa một cánh) → không gian có cửa riêng = PHÒNG.",
        "cf": "防 (fáng – \"phòng ngừa\", bộ 阝)",
        "w": "房间 / 厨房 / 房子"
      },
      {
        "c": "间",
        "p": "jiān",
        "type": "半包围 · Bán bao (门)",
        "st": 7,
        "ord": "门 (môn) bao ngoài → 日 bên trong",
        "rad": "门 (môn – cửa)",
        "mean": "khoảng, giữa",
        "tip": "Đã học ở bài trước — ánh nắng 日 lọt qua khe cửa 门 → khoảng không gian ở giữa.",
        "cf": "问 (wèn – thay 日 bằng 口)",
        "w": "房间 / 时间 / 中间"
      }
    ],
    "colloFull": [
      {
        "zh": "我的房间",
        "py": "wǒ de fángjiān",
        "vn": "phòng của tôi"
      },
      {
        "zh": "房间里",
        "py": "fángjiān li",
        "vn": "trong phòng"
      },
      {
        "zh": "一个房间",
        "py": "yí gè fángjiān",
        "vn": "một căn phòng"
      },
      {
        "zh": "漂亮的房间",
        "py": "piàoliang de fángjiān",
        "vn": "căn phòng đẹp"
      }
    ],
    "patterns": [
      {
        "s": "房间 + 里",
        "m": "Trong phòng — 里 đứng sau danh từ"
      },
      {
        "s": "房 + 间",
        "m": "Gian (间) nhà (房)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Phòng con gái tôi rất đẹp.",
        "answer": "我女儿的房间很漂亮。",
        "answerPy": "Wǒ nǚ'ér de fángjiān hěn piàoliang.",
        "note": "……的房间 — phòng của ai.",
        "pair": "很 + Adj"
      },
      {
        "promptLang": "vi",
        "prompt": "Trong phòng có một cái bàn và bốn cái ghế.",
        "answer": "房间里有一个桌子和四个椅子。",
        "answerPy": "Fángjiān li yǒu yí ge zhuōzi hé sì ge yǐzi.",
        "note": "房间里 — trong phòng.",
        "pair": "nơi chốn + 有 + N"
      }
    ]
  },
  {
    "n": 11,
    "zh": "丈夫",
    "py": "zhàngfu",
    "pos": "Danh từ",
    "vn": "chồng",
    "hv": "trượng phu",
    "em": "🤵",
    "lesson": 3,
    "ex_zh": "这是我和我丈夫的。",
    "ex_py": "Zhè shì wǒ hé wǒ zhàngfu de.",
    "ex_vn": "Đây là phòng của tôi và chồng tôi.",
    "exList": [
      {
        "zh": "这是我和我丈夫的。",
        "py": "Zhè shì wǒ hé wǒ zhàngfu de.",
        "vn": "Đây là phòng của tôi và chồng tôi."
      },
      {
        "zh": "她丈夫是医生。",
        "py": "Tā zhàngfu shì yīshēng.",
        "vn": "Chồng cô ấy là bác sĩ."
      },
      {
        "zh": "我丈夫喜欢运动。",
        "py": "Wǒ zhàngfu xǐhuan yùndòng.",
        "vn": "Chồng tôi thích vận động."
      }
    ],
    "hanzi": [
      {
        "c": "丈",
        "p": "zhàng",
        "type": "独体字 · Chữ đơn",
        "st": 3,
        "ord": "一 → 丿 → 捺",
        "rad": "一 (nhất)",
        "mean": "trượng (đơn vị đo); người đàn ông",
        "tip": "Ban đầu chỉ đơn vị đo chiều dài (1 trượng ≈ chiều cao người lớn), sau chỉ người đàn ông trưởng thành.",
        "cf": "大 (dà – \"to lớn\")",
        "w": "丈夫 / 岳丈"
      },
      {
        "c": "夫",
        "p": "fū",
        "type": "独体字 · Chữ đơn",
        "st": 4,
        "ord": "一 → 一 → 丿 → 捺",
        "rad": "大 (đại)",
        "mean": "chồng; người đàn ông",
        "tip": "Hình người 大 cài thêm một trâm cài đầu (một nét ngang) → người đàn ông đã trưởng thành, có gia đình.",
        "cf": "天 (tiān – nét ngang ở vị trí khác)",
        "w": "丈夫 / 夫妻 / 农夫"
      }
    ],
    "colloFull": [
      {
        "zh": "我丈夫",
        "py": "wǒ zhàngfu",
        "vn": "chồng tôi"
      },
      {
        "zh": "她的丈夫",
        "py": "tā de zhàngfu",
        "vn": "chồng cô ấy"
      },
      {
        "zh": "丈夫的手表",
        "py": "zhàngfu de shǒubiǎo",
        "vn": "đồng hồ của chồng"
      },
      {
        "zh": "丈夫送的",
        "py": "zhàngfu sòng de",
        "vn": "chồng tặng"
      }
    ],
    "patterns": [
      {
        "s": "ai + 丈夫",
        "m": "Chồng của ai — người thân hay bỏ 的"
      },
      {
        "s": "丈夫 (chồng) ↔ 妻子 (vợ)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Chồng tôi làm việc ở bệnh viện.",
        "answer": "我丈夫在医院工作。",
        "answerPy": "Wǒ zhàngfu zài yīyuàn gōngzuò.",
        "note": "Nơi chốn đứng TRƯỚC động từ.",
        "pair": "在……工作"
      },
      {
        "promptLang": "vi",
        "prompt": "Cái đồng hồ này là chồng cô ấy mua hôm qua.",
        "answer": "这个手表是她丈夫昨天买的。",
        "answerPy": "Zhège shǒubiǎo shì tā zhàngfu zuótiān mǎi de.",
        "note": "丈夫 ↔ 妻子 — chồng và vợ.",
        "pair": "是……的"
      }
    ]
  },
  {
    "n": 12,
    "zh": "旁边",
    "py": "pángbiān",
    "pos": "Danh từ",
    "vn": "bên cạnh",
    "hv": "bàng biên",
    "em": "↔️",
    "lesson": 3,
    "ex_zh": "旁边那个小的房间是我女儿的。",
    "ex_py": "Pángbiān nàge xiǎo de fángjiān shì wǒ nǚ'ér de.",
    "ex_vn": "Căn phòng nhỏ bên cạnh là của con gái tôi.",
    "exList": [
      {
        "zh": "旁边那个小的房间是我女儿的。",
        "py": "Pángbiān nàge xiǎo de fángjiān shì wǒ nǚ'ér de.",
        "vn": "Căn phòng nhỏ bên cạnh là của con gái tôi."
      },
      {
        "zh": "我家旁边有一个商店。",
        "py": "Wǒ jiā pángbiān yǒu yí ge shāngdiàn.",
        "vn": "Cạnh nhà tôi có một cửa hàng."
      },
      {
        "zh": "你可以坐在我旁边。",
        "py": "Nǐ kěyǐ zuò zài wǒ pángbiān.",
        "vn": "Bạn có thể ngồi cạnh tôi."
      }
    ],
    "hanzi": [
      {
        "c": "旁",
        "p": "páng",
        "type": "上下结构 · Trên-dưới",
        "st": 10,
        "ord": "亠 → 冖 → 方 (phương)",
        "rad": "方 (phương – phương hướng)",
        "mean": "bên cạnh",
        "tip": "Liên quan tới bộ 方 (phương hướng) → chỉ vị trí kế bên một hướng nào đó.",
        "cf": "旅 (lǚ – \"du lịch\")",
        "w": "旁边 / 两旁 / 一旁"
      },
      {
        "c": "边",
        "p": "biān",
        "type": "半包围 · Bán bao (辶)",
        "st": 5,
        "ord": "力 (biến thể) → 辶",
        "rad": "辶 (sước – đi)",
        "mean": "bên, cạnh",
        "tip": "Bộ 辶 (đi dọc theo) → đi men theo mép, rìa của vật gì đó = BÊN, CẠNH.",
        "cf": "力 (lì – \"sức lực\")",
        "w": "旁边 / 左边 / 右边"
      }
    ],
    "colloFull": [
      {
        "zh": "我旁边",
        "py": "wǒ pángbiān",
        "vn": "bên cạnh tôi"
      },
      {
        "zh": "房间旁边",
        "py": "fángjiān pángbiān",
        "vn": "bên cạnh phòng"
      },
      {
        "zh": "在旁边",
        "py": "zài pángbiān",
        "vn": "ở bên cạnh"
      },
      {
        "zh": "旁边有",
        "py": "pángbiān yǒu",
        "vn": "bên cạnh có"
      }
    ],
    "patterns": [
      {
        "s": "danh từ + 旁边",
        "m": "Bên cạnh cái gì: 房间旁边"
      },
      {
        "s": "旁边 (ngay cạnh) gần hơn 前面 · 后面"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Bên cạnh phòng tôi là phòng của con gái tôi.",
        "answer": "我房间旁边是我女儿的房间。",
        "answerPy": "Wǒ fángjiān pángbiān shì wǒ nǚ'ér de fángjiān.",
        "note": "旁边 là ngay cạnh, gần hơn 前面 · 后面.",
        "pair": "是……"
      },
      {
        "promptLang": "vi",
        "prompt": "Bên cạnh bàn có hai cái ghế mới.",
        "answer": "桌子旁边有两个新椅子。",
        "answerPy": "Zhuōzi pángbiān yǒu liǎng ge xīn yǐzi.",
        "note": "danh từ + 旁边 — bên cạnh cái gì.",
        "pair": "nơi chốn + 有 + N"
      }
    ]
  },
  {
    "n": 13,
    "zh": "女儿",
    "py": "nǚ'ér",
    "pos": "Danh từ",
    "vn": "con gái",
    "hv": "nữ nhi",
    "em": "👧",
    "lesson": 3,
    "ex_zh": "粉色是我女儿最喜欢的颜色。",
    "ex_py": "Fěnsè shì wǒ nǚ'ér zuì xǐhuan de yánsè.",
    "ex_vn": "Màu hồng là màu con gái tôi thích nhất.",
    "exList": [
      {
        "zh": "粉色是我女儿最喜欢的颜色。",
        "py": "Fěnsè shì wǒ nǚ'ér zuì xǐhuan de yánsè.",
        "vn": "Màu hồng là màu con gái tôi thích nhất."
      },
      {
        "zh": "我女儿今年五岁。",
        "py": "Wǒ nǚ'ér jīnnián wǔ suì.",
        "vn": "Con gái tôi năm nay 5 tuổi."
      },
      {
        "zh": "她是我的女儿。",
        "py": "Tā shì wǒ de nǚ'ér.",
        "vn": "Cô bé đó là con gái tôi."
      }
    ],
    "hanzi": [
      {
        "c": "女",
        "p": "nǚ",
        "type": "独体字 · Tượng hình",
        "st": 3,
        "ord": "撇点 → 撇 → 横",
        "rad": "女 (nữ – tự thành bộ)",
        "mean": "nữ, con gái",
        "tip": "Hình người phụ nữ ngồi khoanh tay cách điệu → \"NỮ\".",
        "cf": "安 (ān – thêm bộ 宀 trên đầu)",
        "w": "女儿 / 女人 / 女生"
      },
      {
        "c": "儿",
        "p": "ér",
        "type": "独体字 · Chữ đơn",
        "st": 2,
        "ord": "丿 → 乚",
        "rad": "儿 (nhi – tự thành bộ)",
        "mean": "con, trẻ em",
        "tip": "Hình đứa trẻ với đôi chân đang co lại → \"CON, TRẺ EM\". Kết hợp 女+儿 = con gái.",
        "cf": "几 (jǐ – \"mấy\", khác nét)",
        "w": "女儿 / 儿子 / 儿童"
      }
    ],
    "colloFull": [
      {
        "zh": "我女儿",
        "py": "wǒ nǚ'ér",
        "vn": "con gái tôi"
      },
      {
        "zh": "她的女儿",
        "py": "tā de nǚ'ér",
        "vn": "con gái của cô ấy"
      },
      {
        "zh": "有女儿",
        "py": "yǒu nǚ'ér",
        "vn": "có con gái"
      },
      {
        "zh": "女儿的房间",
        "py": "nǚ'ér de fángjiān",
        "vn": "phòng của con gái"
      }
    ],
    "patterns": [
      {
        "s": "người + 女儿",
        "m": "Con gái của ai"
      },
      {
        "s": "女 + 儿",
        "m": "Đứa con (儿) là nữ (女)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Con gái tôi năm nay mười tuổi.",
        "answer": "我女儿今年十岁。",
        "answerPy": "Wǒ nǚ'ér jīnnián shí suì.",
        "note": "女 + 儿 — đứa con là nữ.",
        "pair": "……岁"
      },
      {
        "promptLang": "vi",
        "prompt": "Tôi muốn mua cho con gái một cái đồng hồ đẹp.",
        "answer": "我要给女儿买一个漂亮的手表。",
        "answerPy": "Wǒ yào gěi nǚ'ér mǎi yí ge piàoliang de shǒubiǎo.",
        "note": "给 + người + động từ.",
        "pair": "给……买"
      }
    ]
  },
  {
    "n": 14,
    "zh": "漂亮",
    "py": "piàoliang",
    "pos": "Tính từ",
    "vn": "đẹp",
    "hv": "phiêu lượng",
    "em": "✨",
    "lesson": 3,
    "ex_zh": "你女儿的房间真漂亮，都是粉色的。",
    "ex_py": "Nǐ nǚ'ér de fángjiān zhēn piàoliang, dōu shì fěnsè de.",
    "ex_vn": "Phòng con gái bạn đẹp thật đấy, toàn là màu hồng.",
    "exList": [
      {
        "zh": "你女儿的房间真漂亮，都是粉色的。",
        "py": "Nǐ nǚ'ér de fángjiān zhēn piàoliang, dōu shì fěnsè de.",
        "vn": "Phòng con gái bạn đẹp thật đấy, toàn là màu hồng."
      },
      {
        "zh": "这件衣服很漂亮。",
        "py": "Zhè jiàn yīfu hěn piàoliang.",
        "vn": "Chiếc áo này rất đẹp."
      },
      {
        "zh": "她长得很漂亮。",
        "py": "Tā zhǎng de hěn piàoliang.",
        "vn": "Cô ấy trông rất xinh đẹp."
      }
    ],
    "hanzi": [
      {
        "c": "漂",
        "p": "piào",
        "type": "左右结构 · Trái-phải",
        "st": 14,
        "ord": "氵(thủy) trái → 票 (phiếu) phải",
        "rad": "氵(thủy – nước)",
        "mean": "trôi nổi; đẹp",
        "tip": "Bộ 氵(nước) → nghĩa gốc \"trôi nổi trên nước\", mượn âm ghép 漂亮 chỉ vẻ ĐẸP nổi bật, sáng sủa.",
        "cf": "飘 (piāo – \"bay phất phơ\")",
        "w": "漂亮 / 漂浮"
      },
      {
        "c": "亮",
        "p": "liàng",
        "type": "上下结构 · Trên-dưới",
        "st": 9,
        "ord": "亠 → 冖 → 几",
        "rad": "亠 (đầu nắp)",
        "mean": "sáng, sáng đẹp",
        "tip": "Hình ánh sáng phát ra từ trên cao → \"SÁNG\". 漂 + 亮 = sáng đẹp, nổi bật.",
        "cf": "京 (jīng – \"kinh đô\", phần dưới khác)",
        "w": "漂亮 / 明亮 / 天亮"
      }
    ],
    "colloFull": [
      {
        "zh": "很漂亮",
        "py": "hěn piàoliang",
        "vn": "rất đẹp"
      },
      {
        "zh": "不漂亮",
        "py": "bú piàoliang",
        "vn": "không đẹp"
      },
      {
        "zh": "漂亮的房间",
        "py": "piàoliang de fángjiān",
        "vn": "căn phòng đẹp"
      },
      {
        "zh": "最漂亮",
        "py": "zuì piàoliang",
        "vn": "đẹp nhất"
      }
    ],
    "patterns": [
      {
        "s": "很 / 最 + 漂亮",
        "m": "Rất đẹp, đẹp nhất"
      },
      {
        "s": "漂亮 nói về người và đồ vật; 好看 nói được cả phim và sách"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Cái đồng hồ này đẹp thật!",
        "answer": "这个手表真漂亮！",
        "answerPy": "Zhège shǒubiǎo zhēn piàoliang!",
        "note": "真 dùng cho câu cảm thán.",
        "pair": "真 + Adj"
      },
      {
        "promptLang": "vi",
        "prompt": "Trong mấy cái này, cái nào đẹp nhất?",
        "answer": "这些里面，哪个最漂亮？",
        "answerPy": "Zhèxiē lǐmiàn, nǎge zuì piàoliang?",
        "note": "最 là mức cao nhất, không thêm 很.",
        "pair": "最 + Adj"
      }
    ]
  },
  {
    "n": 15,
    "zh": "颜色",
    "py": "yánsè",
    "pos": "Danh từ",
    "vn": "màu sắc",
    "hv": "nhan sắc",
    "em": "🎨",
    "lesson": 3,
    "ex_zh": "粉色是我女儿最喜欢的颜色。",
    "ex_py": "Fěnsè shì wǒ nǚ'ér zuì xǐhuan de yánsè.",
    "ex_vn": "Màu hồng là màu con gái tôi thích nhất.",
    "exList": [
      {
        "zh": "粉色是我女儿最喜欢的颜色。",
        "py": "Fěnsè shì wǒ nǚ'ér zuì xǐhuan de yánsè.",
        "vn": "Màu hồng là màu con gái tôi thích nhất."
      },
      {
        "zh": "你喜欢什么颜色？",
        "py": "Nǐ xǐhuan shénme yánsè?",
        "vn": "Bạn thích màu gì?"
      },
      {
        "zh": "这件衣服的颜色很好看。",
        "py": "Zhè jiàn yīfu de yánsè hěn hǎokàn.",
        "vn": "Màu của chiếc áo này rất đẹp."
      }
    ],
    "hanzi": [
      {
        "c": "颜",
        "p": "yán",
        "type": "左右结构 · Trái-phải",
        "st": 15,
        "ord": "彦 (ngạn) trái → 页 (hiệt) phải",
        "rad": "页 (hiệt – đầu, trang)",
        "mean": "sắc mặt; màu",
        "tip": "Bộ 页 (đầu người) → liên quan tới sắc mặt, diện mạo, dần mở rộng nghĩa thành MÀU SẮC nói chung.",
        "cf": "颁 (bān – \"ban bố\")",
        "w": "颜色 / 颜面"
      },
      {
        "c": "色",
        "p": "sè",
        "type": "上下结构 · Trên-dưới",
        "st": 6,
        "ord": "⺈ → 巴 (ba)",
        "rad": "色 (sắc – tự thành bộ)",
        "mean": "màu sắc",
        "tip": "Chữ 色 tự thành bộ, xuất hiện trong hầu hết các từ chỉ MÀU: 红色, 粉色, 颜色.",
        "cf": "邑 (yì – \"ấp, làng\")",
        "w": "颜色 / 红色 / 粉色"
      }
    ],
    "colloFull": [
      {
        "zh": "什么颜色",
        "py": "shénme yánsè",
        "vn": "màu gì"
      },
      {
        "zh": "这个颜色",
        "py": "zhège yánsè",
        "vn": "màu này"
      },
      {
        "zh": "喜欢的颜色",
        "py": "xǐhuan de yánsè",
        "vn": "màu yêu thích"
      },
      {
        "zh": "漂亮的颜色",
        "py": "piàoliang de yánsè",
        "vn": "màu đẹp"
      }
    ],
    "patterns": [
      {
        "s": "什么 + 颜色？",
        "m": "Màu gì: 你喜欢什么颜色？"
      },
      {
        "s": "颜 + 色",
        "m": "Sắc (色) diện (颜) — hai chữ cùng nghĩa ghép lại"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Bạn thích màu gì?",
        "answer": "你喜欢什么颜色？",
        "answerPy": "Nǐ xǐhuan shénme yánsè?",
        "note": "Câu đã có 什么 thì không thêm 吗.",
        "pair": "……什么？"
      },
      {
        "promptLang": "vi",
        "prompt": "Màu này rất đẹp, tôi muốn mua cái này.",
        "answer": "这个颜色很漂亮，我要买这个。",
        "answerPy": "Zhège yánsè hěn piàoliang, wǒ yào mǎi zhège.",
        "note": "颜 + 色 — hai chữ cùng nghĩa ghép lại.",
        "pair": "要 + V"
      }
    ]
  }
];

const wuData = [
  {img:'⌚',label:'手表',py:'shǒubiǎo',letter:'A'},
  {img:'📰',label:'报纸',py:'bàozhǐ',letter:'B'},
  {img:'🥛',label:'牛奶',py:'niúnǎi',letter:'C'},
  {img:'👧',label:'女儿',py:'nǚ\'ér',letter:'D'},
  {img:'🎨',label:'颜色',py:'yánsè',letter:'E'},
  {img:'🚪',label:'房间',py:'fángjiān',letter:'F'},
];

var dialogData = [
  {scene:'在房间 · Trong phòng',
   preQuiz:[
     {q:'那块手表是谁的？',opts:['说话人自己的','他爸爸的','他妈妈的'],ans:1},
     {q:'手表花了多少钱？',opts:['300多块','3000多块','30块'],ans:1},
   ],
   lines:[
     {sp:0,zh:'这块手表是你的吗？',py:'Zhè kuài shǒubiǎo shì nǐ de ma?',vn:'Chiếc đồng hồ đeo tay này có phải của bạn không?'},
     {sp:1,zh:'不是我的，是我爸爸的。',py:'Bú shì wǒ de, shì wǒ bàba de.',vn:'Không phải của tôi, là của bố tôi đấy.'},
     {sp:0,zh:'多少钱买的？',py:'Duōshao qián mǎi de?',vn:'Mua hết bao nhiêu tiền thế?'},
     {sp:1,zh:'3000多块。',py:'Sānqiān duō kuài.',vn:'Hơn 3000 tệ.'},
   ]},
  {scene:'在家里 · Ở nhà',
   preQuiz:[
     {q:'那份报纸是今天的还是昨天的？',opts:['今天的','昨天的','前天的'],ans:1},
     {q:'来敲门的是谁？',opts:['送报纸的','送牛奶的','邻居'],ans:1},
   ],
   lines:[
     {sp:0,zh:'这是今天早上的报纸吗？',py:'Zhè shì jīntiān zǎoshang de bàozhǐ ma?',vn:'Đây là tờ báo sáng nay phải không?'},
     {sp:1,zh:'不是，是昨天的。',py:'Bú shì, shì zuótiān de.',vn:'Không phải, là báo ngày hôm qua.'},
     {sp:0,zh:'你听，是不是送报纸的来了？',py:'Nǐ tīng, shìbushì sòng bàozhǐ de lái le?',vn:'Bạn nghe xem, có phải người đưa báo đến rồi không?'},
     {sp:1,zh:'我看一下。不是，是送牛奶的。',py:'Wǒ kàn yíxià. Bú shì, shì sòng niúnǎi de.',vn:'Để tôi xem một chút. Không phải, là người giao sữa.'},
   ]},
  {scene:'在家里 · Ở nhà',
   preQuiz:[
     {q:'旁边那间小房间是谁的？',opts:['女儿的','儿子的','客人的'],ans:0},
     {q:'女儿的房间是什么颜色的？',opts:['粉色','白色','蓝色'],ans:0},
     {q:'为什么女儿的房间都是粉色的？',opts:['因为那是她最喜欢的颜色','因为便宜','因为妈妈喜欢'],ans:0},
   ],
   lines:[
     {sp:0,zh:'这是谁的房间？',py:'Zhè shì shéi de fángjiān?',vn:'Đây là phòng của ai vậy?'},
     {sp:1,zh:'这是我和我丈夫的。旁边那个小的房间是我女儿的。',py:'Zhè shì wǒ hé wǒ zhàngfu de. Pángbiān nàge xiǎo de fángjiān shì wǒ nǚ\'ér de.',vn:'Đây là phòng của tôi và chồng tôi. Căn phòng nhỏ bên cạnh là của con gái tôi.'},
     {sp:0,zh:'你女儿的房间真漂亮，都是粉色的。',py:'Nǐ nǚ\'ér de fángjiān zhēn piàoliang, dōu shì fěnsè de.',vn:'Phòng con gái bạn đẹp thật đấy, toàn là màu hồng thôi.'},
     {sp:1,zh:'是啊，粉色是我女儿最喜欢的颜色。',py:'Shì a, fěnsè shì wǒ nǚ\'ér zuì xǐhuan de yánsè.',vn:'Đúng vậy, màu hồng là màu sắc con gái tôi thích nhất.'},
   ]},
];

// ══════════════════════════════════════════
// PHẦN 1 · GHÉP TỪ (Collocation)
// ══════════════════════════════════════════
var matchData = [
  {left:'买',right:'手表'},
  {left:'送',right:'牛奶'},
  {left:'什么',right:'颜色'},
  {left:'旁边',right:'房间'},
  {left:'多少',right:'钱'},
  {left:'真',right:'漂亮'},
];

// ══════════════════════════════════════════
// PHẦN 2 · NGHE — tình huống MỚI: đi chợ mua đồng hồ, hỏi giá, hỏi màu.
// Ôn lại 新/几/觉得 (Bài 1).
// ══════════════════════════════════════════
var listenData = {
  type: 'workbook',
  audio: '/audio/bai-3/listen-full.mp3',
  dictation: [
    {num:1, lines:[
      {pre:'这块手表不是她的，', blank:'是她丈夫的', post:'。', py:'Zhè kuài shǒubiǎo bú shì tā de, shì tā zhàngfu de.', vn:'Chiếc đồng hồ này không phải của cô ấy, mà là của chồng cô ấy.'},
    ]},
    {num:2, lines:[
      {pre:'他每天早上都要', blank:'喝茶、看报纸', post:'。', py:'Tā měitiān zǎoshang dōu yào hē chá, kàn bàozhǐ.', vn:'Anh ấy sáng nào cũng uống trà, đọc báo.'},
    ]},
    {num:3, lines:[
      {pre:'你女儿的房间真漂亮，', blank:'颜色也好看', post:'。', py:'Nǐ nǚ\'ér de fángjiān zhēn piàoliang, yánsè yě hǎokàn.', vn:'Phòng của con gái bạn thật đẹp, màu sắc cũng đẹp.'},
    ]},
    {num:4, lines:[
      {pre:'送牛奶的来了，', blank:'你去开门吧', post:'。', py:'Sòng niúnǎi de lái le, nǐ qù kāimén ba.', vn:'Người giao sữa đến rồi, bạn ra mở cửa đi.'},
    ]},
    {num:5, lines:[
      {pre:'旁边那个大点儿的杯子', blank:'是我的', post:'。', py:'Pángbiān nàge dà diǎnr de bēizi shì wǒ de.', vn:'Cái cốc to hơn ở bên cạnh là của tôi.'},
    ]},
    {num:6, lines:[
      {speaker:'男', pre:'今天早上', blank:'送牛奶的来了吗', post:'？', py:'Jīntiān zǎoshang sòng niúnǎi de lái le ma?', vn:'Sáng nay người giao sữa đến chưa?'},
      {speaker:'女', pre:'我不知道，', blank:'你看看外边有没有牛奶', post:'。', py:'Wǒ bù zhīdào, nǐ kànkan wàibian yǒu méiyǒu niúnǎi.', vn:'Tôi không biết, bạn xem bên ngoài có sữa không.'},
    ]},
    {num:7, lines:[
      {speaker:'女', pre:'今天的报纸', blank:'在哪儿', post:'？', py:'Jīntiān de bàozhǐ zài nǎr?', vn:'Báo hôm nay ở đâu?'},
      {speaker:'男', pre:'', blank:'在电脑旁边', post:'。', py:'Zài diànnǎo pángbiān.', vn:'Ở cạnh máy tính.'},
    ]},
    {num:8, lines:[
      {speaker:'女', pre:'这个房间', blank:'真漂亮', post:'！', py:'Zhège fángjiān zhēn piàoliang!', vn:'Phòng này đẹp thật đấy!'},
      {speaker:'男', pre:'这是我女儿的房间，', blank:'旁边的是我儿子的', post:'。', py:'Zhè shì wǒ nǚ\'ér de fángjiān, pángbiān de shì wǒ érzi de.', vn:'Đây là phòng của con gái tôi, bên cạnh là của con trai tôi.'},
    ]},
    {num:9, lines:[
      {speaker:'女', pre:'你喜欢', blank:'哪件衣服', post:'？', py:'Nǐ xǐhuan nǎ jiàn yīfu?', vn:'Bạn thích cái áo nào?'},
      {speaker:'男', pre:'我喜欢', blank:'白色的', post:'。', py:'Wǒ xǐhuan báisè de.', vn:'Tôi thích cái màu trắng.'},
    ]},
    {num:10, lines:[
      {speaker:'女', pre:'哪本书', blank:'是你的', post:'？', py:'Nǎ běn shū shì nǐ de?', vn:'Quyển sách nào là của bạn?'},
      {speaker:'男', pre:'这几本书', blank:'都是我的', post:'。', py:'Zhè jǐ běn shū dōu shì wǒ de.', vn:'Mấy quyển sách này đều là của tôi.'},
    ]},
  ],
  mc: [
    {num:11, options:['左边的','旁边的','右边的'], ans:0,
     explain:'女：你最喜欢哪块手表？男：我最喜欢左边的。问：男的最喜欢哪块手表？ → 左边的。'},
    {num:12, options:['昨天的','今天的','明天的'], ans:1,
     explain:'女：今天的报纸在桌子上，你看吧。男：好，我知道了。问：桌子上的报纸是哪天的？ → 今天的。'},
    {num:13, options:['送饭的','送牛奶的','送报纸的'], ans:2,
     explain:'女：你听，送牛奶的来了，你去看一下。男：不是送牛奶的，是送报纸的。问：谁来了？ → 送报纸的。'},
    {num:14, options:['爸爸妈妈的','丽丽的','哥哥的'], ans:0,
     explain:'男：丽丽，这个房间真大，这是谁的房间？女：这是我爸爸妈妈的房间。问：这是谁的房间？ → 爸爸妈妈的。'},
    {num:15, options:['新的','都不是','都是'], ans:1,
     explain:'女：哪个杯子是你的？男：都不是我的，给我一个新的吧。问：哪个杯子是男的的？ → 都不是。'},
  ],
};

// ══════════════════════════════════════════
// PHẦN 3a · ĐIỀN TỪ — hội thoại MỚI: ở cửa hàng mua đồng hồ, hỏi màu
// ══════════════════════════════════════════
var fillData = [
  {pre:'你好，这块手表',blank:'多',post:'少钱？',hint:'(bao nhiêu — trong "多少")',ans:'多'},
  {pre:'3000',blank:'多',post:'块，不贵。',hint:'(hơn — ôn Bài 1)',ans:'多'},
  {pre:'这块手表真',blank:'漂亮',post:'！',hint:'(đẹp)',ans:'漂亮'},
  {pre:'是啊，这是我',blank:'昨天',post:'买的。',hint:'(hôm qua)',ans:'昨天',exp:'的 sau động từ để danh hoá cả cụm "hành động + thời gian".'},
  {pre:'这是谁',blank:'的',post:'房间？',hint:'(trợ từ sở hữu/danh hoá)',ans:'的',exp:'的 dùng để danh hoá: 谁的 = của ai.'},
  {pre:'是我',blank:'丈夫',post:'的房间。',hint:'(chồng)',ans:'丈夫'},
  {pre:'你',blank:'要',post:'看一下这个颜色。',hint:'(hãy — ôn Bài 1)',ans:'要'},
  {pre:'我',blank:'觉得',post:'这个颜色很漂亮。',hint:'(cảm thấy — ôn Bài 1)',ans:'觉得'},
];

// ══════════════════════════════════════════
// PHẦN 3b · SẮP XẾP
// ══════════════════════════════════════════
var sortData = [
  {words:['这','块','手表','是','谁','的','？'],ans:'这块手表是谁的？',audio:'这块手表是谁的？'},
  {words:['我','昨天','买','了','一','块','新','手表','。'],ans:'我昨天买了一块新手表。',audio:'我昨天买了一块新手表。'},
  {words:['你','看','一下','这个','颜色','。'],ans:'你看一下这个颜色。',audio:'你看一下这个颜色。'},
  {words:['这个','房间','真','漂亮','。'],ans:'这个房间真漂亮。',audio:'这个房间真漂亮。'},
  {words:['谁','送','来','了','牛奶','？'],ans:'谁送来了牛奶？',audio:'谁送来了牛奶？'},
  {words:['我','觉得','这个','颜色','最','漂亮','。'],ans:'我觉得这个颜色最漂亮。',audio:'我觉得这个颜色最漂亮。'},
];

// ══════════════════════════════════════════
// PHẦN 3c · SỬA LỖI SAI
// ══════════════════════════════════════════
var errorFixData = [
  {wrong:'这是手表谁的？',
   opts:['这块手表是谁的？','这是谁手表的？','手表这是谁的？','这谁是手表的？'],ans:0,
   exp:'Cấu trúc hỏi sở hữu: Danh từ + 是 + 谁 + 的？'},
  {wrong:'我一下看。',
   opts:['我看一下。','一下我看。','我一下看了。','看我一下。'],ans:0,
   exp:'一下 luôn đứng NGAY SAU động từ, không đặt trước như "một chút" có thể đứng linh hoạt trong tiếng Việt.'},
  {wrong:'漂亮真这个房间。',
   opts:['这个房间真漂亮。','这个真房间漂亮。','真这个房间漂亮。','这个房间漂亮真。'],ans:0,
   exp:'真 đứng NGAY TRƯỚC tính từ, không đặt sau như "đẹp thật" trong tiếng Việt.'},
  {wrong:'这是我爸爸手表。',
   opts:['这是我爸爸的手表。','这是我的爸爸手表。','这我爸爸是的手表。','这是的我爸爸手表。'],ans:0,
   exp:'Khi nói "của ai", giữa danh từ sở hữu và vật phải có 的: 我爸爸的手表.'},
  {wrong:'颜色什么这是？',
   opts:['这是什么颜色？','什么这是颜色？','这什么是颜色？','是这什么颜色？'],ans:0,
   exp:'什么 đứng NGAY TRƯỚC danh từ nó hỏi: 什么颜色, giống 什么时候, 什么运动.'},
];

// ══════════════════════════════════════════
// PHẦN 4 · LUYỆN NÓI 3 TẦNG (tầng 3 có ghi âm + chấm điểm AI)
// ══════════════════════════════════════════
// Luyen noi voi AI (mode 'ai-speak'): moi cau hoi la mot tinh huong doi song
// lien quan den bai khoa; hoc sinh tu ghi am cau tra loi, AI nghe lai (nhan
// dien giong noi tieng Trung) roi cham diem theo 4 tieu chi va nhan xet.
// Luyen noi voi AI (mode 'ai-speak'): moi cau hoi la mot tinh huong doi song
// lien quan den bai khoa; hoc sinh tu ghi am cau tra loi, AI nghe lai (nhan
// dien giong noi tieng Trung) roi cham diem theo 4 tieu chi va nhan xet.
// Luyen noi voi AI (mode 'ai-speak'): moi cau hoi la mot tinh huong doi song
// lien quan den bai khoa; hoc sinh tu ghi am cau tra loi, AI nghe lai (nhan
// dien giong noi tieng Trung) roi cham diem theo 4 tieu chi va nhan xet.
// Luyen noi voi AI (mode 'ai-speak'): moi cau hoi la mot tinh huong doi song
// lien quan den bai khoa; hoc sinh tu ghi am cau tra loi, AI nghe lai (nhan
// dien giong noi tieng Trung) roi cham diem theo 4 tieu chi va nhan xet.
// Luyen noi voi AI (mode 'ai-speak'): moi cau hoi la mot tinh huong doi song
// lien quan den bai khoa; hoc sinh tu ghi am cau tra loi, AI nghe lai (nhan
// dien giong noi tieng Trung) roi cham diem theo 4 tieu chi va nhan xet.
var speakingData = {
  mode: 'ai-speak',
  intro: 'Mỗi câu hỏi là một tình huống thật trong đời sống, dùng đúng từ vựng và mẫu câu của Bài 3. Bấm 🎙️ rồi trả lời bằng tiếng Trung — AI sẽ nghe, ghi lại câu bạn nói và chấm điểm theo Nội dung · Mẫu câu · Từ vựng · Độ trôi chảy. Nên tự trả lời trước rồi mới mở “Câu mẫu” để đối chiếu.',
  tasks: [
    {
      situation: 'Bạn học khen đồng hồ của bạn và hỏi giá.',
      q_zh: '这块手表是你的吗？多少钱买的？',
      q_py: 'Zhè kuài shǒubiǎo shì nǐ de ma? Duōshao qián mǎi de?',
      q_vn: 'Chiếc đồng hồ này của bạn à? Mua bao nhiêu tiền?',
      grammar: { label: '是我的 / 是我爸爸的 + 多少块', any: ['的'] },
      need: [
        { label: 'Trả lời của ai (我的 / 我爸爸的)', any: ['我的', '爸爸', '妈妈', '哥哥', '姐姐', '朋友', '不是'] },
        { label: 'Nói giá tiền (块)', any: ['块', '钱', '元'] },
        { label: 'Dùng 买 để nói mua', any: ['买'] }
      ],
      bonus: { label: 'Nói thêm thời gian mua (去年 / 昨天)', any: ['去年', '昨天', '上个月', '今年'] },
      vocab: ['块', '手表', '钱', '买'],
      minLen: 12,
      sample: '不是我的，是我爸爸的。三千多块钱买的。',
      sample_py: 'Bú shì wǒ de, shì wǒ bàba de. Sānqiān duō kuài qián mǎi de.',
      sample_vn: 'Không phải của tôi, là của bố tôi. Mua hơn ba nghìn tệ.',
      tip: 'Nói sở hữu chỉ cần 是…的: 是我的、是我爸爸的; 块 là lượng từ của đồng hồ và cũng là đơn vị tiền.'
    },
    {
      situation: 'Bạn dẫn khách đi xem nhà mình.',
      q_zh: '这是谁的房间？旁边的房间是谁的？',
      q_py: 'Zhè shì shéi de fángjiān? Pángbiān de fángjiān shì shéi de?',
      q_vn: 'Đây là phòng của ai? Phòng bên cạnh là của ai?',
      grammar: { label: '这是我的… / 旁边那个是…的', any: ['的'] },
      need: [
        { label: 'Nói phòng này của ai', any: ['我', '我们', '爸爸', '妈妈', '哥哥', '姐姐', '弟弟', '妹妹', '丈夫', '女儿'] },
        { label: 'Dùng 旁边 để chỉ phòng bên cạnh', any: ['旁边', '边'] },
        { label: 'Dùng 房间', any: ['房间', '屋子'] }
      ],
      bonus: { label: 'Tả thêm màu sắc hoặc 漂亮', any: ['漂亮', '颜色', '红', '白', '粉', '蓝', '大', '小'] },
      vocab: ['房间', '旁边', '漂亮', '颜色'],
      minLen: 12,
      sample: '这是我和我丈夫的房间，旁边那个小的是我女儿的。她的房间很漂亮。',
      sample_py: 'Zhè shì wǒ hé wǒ zhàngfu de fángjiān, pángbiān nàge xiǎo de shì wǒ nǚ\'ér de. Tā de fángjiān hěn piàoliang.',
      sample_vn: 'Đây là phòng của tôi và chồng, phòng nhỏ bên cạnh là của con gái tôi. Phòng của cháu rất đẹp.',
      tip: 'Có thể lược danh từ sau 的: 旁边那个小的 = căn phòng nhỏ bên cạnh.'
    },
    {
      situation: 'Bạn cùng lớp hỏi về sở thích màu sắc của bạn.',
      q_zh: '你最喜欢什么颜色？你家里人喜欢什么颜色？',
      q_py: 'Nǐ zuì xǐhuan shénme yánsè? Nǐ jiā lǐ rén xǐhuan shénme yánsè?',
      q_vn: 'Bạn thích màu gì nhất? Người nhà bạn thích màu gì?',
      grammar: { label: '…是我最喜欢的颜色', any: ['颜色'] },
      need: [
        { label: 'Nói màu mình thích', any: ['红', '白', '黑', '蓝', '粉', '绿', '黄', '色'] },
        { label: 'Dùng 最喜欢', any: ['最喜欢', '喜欢'] },
        { label: 'Nói màu người nhà thích', any: ['爸爸', '妈妈', '女儿', '丈夫', '姐姐', '哥哥', '弟弟', '妹妹', '家里人'] }
      ],
      bonus: { label: 'Thêm đồ vật màu đó (房间 / 衣服)', any: ['房间', '衣服', '手表', '手机', '车'] },
      vocab: ['颜色', '漂亮'],
      minLen: 12,
      sample: '粉色是我最喜欢的颜色。我女儿也喜欢粉色，她的房间都是粉色的。',
      sample_py: 'Fěnsè shì wǒ zuì xǐhuan de yánsè. Wǒ nǚ\'ér yě xǐhuan fěnsè, tā de fángjiān dōu shì fěnsè de.',
      sample_vn: 'Màu hồng là màu tôi thích nhất. Con gái tôi cũng thích màu hồng, phòng của cháu toàn màu hồng.',
      tip: 'Nói màu sắc: màu + 色 (红色、白色、黑色); "toàn là màu…" dùng 都是…的.'
    },
    {
      situation: 'Sáng sớm có tiếng gõ cửa, người nhà hỏi bạn.',
      q_zh: '你听，是不是送报纸的来了？',
      q_py: 'Nǐ tīng, shì bu shì sòng bàozhǐ de lái le?',
      q_vn: 'Bạn nghe xem, có phải người giao báo đến rồi không?',
      grammar: { label: '不是…，是送…的', any: ['是', '不是'] },
      need: [
        { label: 'Trả lời phải hay không phải', any: ['是', '不是'] },
        { label: 'Nói người giao gì (报纸 / 牛奶)', any: ['报纸', '牛奶', '东西', '快递'] },
        { label: 'Dùng 送 hoặc 来', any: ['送', '来'] }
      ],
      bonus: { label: 'Nói thêm 我看一下 / 早上', any: ['看一下', '看看', '早上'] },
      vocab: ['报纸', '送', '牛奶'],
      minLen: 10,
      sample: '我看一下。不是送报纸的，是送牛奶的。',
      sample_py: 'Wǒ kàn yíxià. Bú shì sòng bàozhǐ de, shì sòng niúnǎi de.',
      sample_vn: 'Để tôi xem. Không phải người giao báo, là người giao sữa.',
      tip: '送报纸的 = người giao báo; cấu trúc "động từ + 的" dùng để gọi người làm việc đó.'
    },
    {
      situation: 'Bạn kể cho bạn học về món đồ mới mua hôm qua.',
      q_zh: '昨天你买了什么？多少钱？',
      q_py: 'Zuótiān nǐ mǎile shénme? Duōshao qián?',
      q_vn: 'Hôm qua bạn mua gì? Bao nhiêu tiền?',
      grammar: { label: '昨天我买了 + đồ vật + …块钱', any: ['买'] },
      need: [
        { label: 'Nói món đồ đã mua', any: ['手表', '报纸', '牛奶', '衣服', '手机', '书', '东西', '鞋', '包', '水果'] },
        { label: 'Nói giá (块 / 钱)', any: ['块', '钱', '元'] },
        { label: 'Dùng 昨天', any: ['昨天'] }
      ],
      bonus: { label: 'Nói thêm màu sắc hoặc cho ai', any: ['颜色', '红', '白', '黑', '给', '送'] },
      vocab: ['买', '块', '钱', '昨天'],
      minLen: 12,
      sample: '昨天我买了一块手表，九十多块钱，很好看。',
      sample_py: 'Zuótiān wǒ mǎile yí kuài shǒubiǎo, jiǔshí duō kuài qián, hěn hǎokàn.',
      sample_vn: 'Hôm qua tôi mua một chiếc đồng hồ, hơn chín mươi tệ, rất đẹp.',
      tip: 'Đã làm xong thì thêm 了 sau động từ: 买了、看了、吃了.'
    }
  ]
};

// ══════════════════════════════════════════
// LUYỆN DỊCH — dùng từ bài 3 + ôn lại từ bài 1-2 và HSK1
// ══════════════════════════════════════════
var translateData = [
  {vi:'Cái đồng hồ đeo tay này của ai vậy?', zh:'这块手表是谁的？', py:'Zhè kuài shǒubiǎo shì shéi de?'},
  {vi:'Hôm qua chồng tôi tặng tôi báo.', zh:'昨天我丈夫送我报纸。', py:'Zuótiān wǒ zhàngfu sòng wǒ bàozhǐ.'},
  {vi:'Phòng của con gái bạn thật đẹp.', zh:'你女儿的房间真漂亮。', py:"Nǐ nǚ'ér de fángjiān zhēn piàoliang."},
  {vi:'Màu này rất đẹp.', zh:'这个颜色很漂亮。', py:'Zhège yánsè hěn piàoliang.'},
];

// ══════════════════════════════════════════
// LUYỆN DỊCH (chiều Trung→Việt) — noi dung KHAC voi chieu Viet->Trung o tren
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:'Đây là đồng hồ của ai? Là của chồng tôi.', zh:'这是谁的手表？是我丈夫的。', py:'Zhè shì shéi de shǒubiǎo? Shì wǒ zhàngfu de.'},
  {vi:'Phòng của con gái tôi rất đẹp, màu sắc cũng rất đẹp.', zh:'我女儿的房间很漂亮，颜色也很好。', py:"Wǒ nǚ'ér de fángjiān hěn piàoliang, yánsè yě hěn hǎo."},
  {vi:'Hôm qua tôi đã mua báo và sữa.', zh:'昨天我买了报纸和牛奶。', py:'Zuótiān wǒ mǎile bàozhǐ hé niúnǎi.'},
  {vi:'Cái đồng hồ này là mới à?', zh:'这块手表是新的吗？', py:'Zhè kuài shǒubiǎo shì xīn de ma?'},
];
