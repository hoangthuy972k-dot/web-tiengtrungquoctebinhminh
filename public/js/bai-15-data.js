// ══════════════════════════════════════════
// DATA — Bài 15: 新年就要到了
// ══════════════════════════════════════════
var vocabData = [
  {
    "n": 1,
    "zh": "新年",
    "py": "xīnnián",
    "pos": "Danh từ",
    "vn": "năm mới",
    "hv": "tân niên",
    "em": "🎉",
    "lesson": 1,
    "ex_zh": "新年就要到了，你有什么计划？",
    "ex_py": "Xīnnián jiùyào dào le, nǐ yǒu shénme jìhuà?",
    "ex_vn": "Năm mới sắp đến rồi, bạn có kế hoạch gì không?",
    "exList": [
      {
        "zh": "新年就要到了，你有什么计划？",
        "py": "Xīnnián jiùyào dào le, nǐ yǒu shénme jìhuà?",
        "vn": "Năm mới sắp đến rồi, bạn có kế hoạch gì không?"
      },
      {
        "zh": "新年快乐！",
        "py": "Xīnnián kuàilè!",
        "vn": "Chúc mừng năm mới!"
      },
      {
        "zh": "新年的时候我们都回家。",
        "py": "Xīnnián de shíhou wǒmen dōu huíjiā.",
        "vn": "Vào dịp năm mới, chúng tôi đều về nhà."
      }
    ],
    "hanzi": [
      {
        "c": "新",
        "p": "xīn",
        "type": "左右结构 · Trái-phải",
        "st": 13,
        "ord": "立 → 木 → 斤",
        "rad": "斤 (cân – cái rìu)",
        "mean": "mới",
        "tip": "斤(rìu) chặt 木(cây) 立(dựng) lên → tạo ra vật MỚI.",
        "cf": "亲 (qīn – \"thân thiết\")",
        "w": "新年 / 新的 / 更新"
      },
      {
        "c": "年",
        "p": "nián",
        "type": "独体字 · Tượng hình",
        "st": 6,
        "ord": "丿→𠂉→干biến thể",
        "rad": "干 (can)",
        "mean": "năm",
        "tip": "Hình người vác bó lúa sau vụ mùa → mỗi vụ mùa là một chu kỳ = NĂM.",
        "cf": "午 (wǔ – \"buổi trưa\")",
        "w": "新年 / 今年 / 去年"
      }
    ],
    "colloFull": [
      {
        "zh": "过新年",
        "py": "guo xīnnián",
        "vn": "đón năm mới"
      },
      {
        "zh": "新年快乐",
        "py": "xīnnián kuàilè",
        "vn": "chúc mừng năm mới"
      },
      {
        "zh": "新年的时候",
        "py": "xīnnián de shíhou",
        "vn": "dịp năm mới"
      },
      {
        "zh": "新年回家",
        "py": "xīnnián huí jiā",
        "vn": "về nhà dịp năm mới"
      }
    ],
    "patterns": [
      {
        "s": "过 + 新年",
        "m": "Đón năm mới — dùng động từ 过, giống 过生日"
      },
      {
        "s": "新年快乐！— câu chúc quen thuộc nhất dịp đầu năm"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Chúc mừng năm mới! Chúc cả nhà sức khoẻ tốt.",
        "answer": "新年快乐！希望大家身体好。",
        "answerPy": "Xīnnián kuàilè! Xīwàng dàjiā shēntǐ hǎo.",
        "note": "Sau 希望 là cả một câu.",
        "pair": "希望 + câu"
      },
      {
        "promptLang": "vi",
        "prompt": "Năm mới tôi muốn về nhà đón Tết với bố mẹ.",
        "answer": "新年我要回家和爸爸妈妈一起过。",
        "answerPy": "Xīnnián wǒ yào huí jiā hé bàba māma yìqǐ guò.",
        "note": "过新年 — đón năm mới, dùng động từ 过.",
        "pair": "和……一起"
      }
    ]
  },
  {
    "n": 2,
    "zh": "票",
    "py": "piào",
    "pos": "Danh từ",
    "vn": "vé",
    "hv": "phiếu",
    "em": "🎫",
    "lesson": 1,
    "ex_zh": "票已经买好了。",
    "ex_py": "Piào yǐjīng mǎihǎo le.",
    "ex_vn": "Vé đã mua xong rồi.",
    "exList": [
      {
        "zh": "票已经买好了。",
        "py": "Piào yǐjīng mǎihǎo le.",
        "vn": "Vé đã mua xong rồi."
      },
      {
        "zh": "火车票多少钱？",
        "py": "Huǒchēpiào duōshao qián?",
        "vn": "Vé tàu bao nhiêu tiền?"
      },
      {
        "zh": "这张票是我的。",
        "py": "Zhè zhāng piào shì wǒ de.",
        "vn": "Tấm vé này là của tôi."
      }
    ],
    "hanzi": [
      {
        "c": "票",
        "p": "piào",
        "type": "上下结构 · Trên-dưới",
        "st": 11,
        "ord": "覀(biến thể) → 示",
        "rad": "示 (thị – chỉ ra)",
        "mean": "vé, phiếu",
        "tip": "Phần trên giống 覀(che phủ), dưới 示(tờ giấy chỉ ra) → tờ giấy làm bằng chứng = VÉ.",
        "cf": "漂 (piāo – \"trôi nổi\")",
        "w": "火车票 / 电影票 / 买票"
      }
    ],
    "colloFull": [
      {
        "zh": "买票",
        "py": "mǎi piào",
        "vn": "mua vé"
      },
      {
        "zh": "一张票",
        "py": "yì zhāng piào",
        "vn": "một cái vé"
      },
      {
        "zh": "火车票",
        "py": "huǒchē piào",
        "vn": "vé tàu"
      },
      {
        "zh": "票很贵",
        "py": "piào hěn guì",
        "vn": "vé rất đắt"
      }
    ],
    "patterns": [
      {
        "s": "một + 张 + 票",
        "m": "Lượng từ của 票 là 张, giống 报纸"
      },
      {
        "s": "买 + 票",
        "m": "Mua vé — 火车票 · 飞机票"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tôi đã mua vé tàu rồi.",
        "answer": "我已经买了火车票。",
        "answerPy": "Wǒ yǐjīng mǎile huǒchēpiào.",
        "note": "Lượng từ của 票 là 张.",
        "pair": "已经……了"
      },
      {
        "promptLang": "vi",
        "prompt": "Vé máy bay đắt hơn vé tàu.",
        "answer": "飞机票比火车票更贵。",
        "answerPy": "Fēijīpiào bǐ huǒchēpiào gèng guì.",
        "note": "更 nói mức hơn nữa.",
        "pair": "A 比 B 更 + Adj"
      }
    ]
  },
  {
    "n": 3,
    "zh": "火车站",
    "py": "huǒchēzhàn",
    "pos": "Danh từ",
    "vn": "ga tàu hoả",
    "hv": "hỏa xa trạm",
    "em": "🚉",
    "lesson": 1,
    "ex_zh": "火车站人多不多？",
    "ex_py": "Huǒchēzhàn rén duō bu duō?",
    "ex_vn": "Ga tàu có đông người không?",
    "exList": [
      {
        "zh": "火车站人多不多？",
        "py": "Huǒchēzhàn rén duō bu duō?",
        "vn": "Ga tàu có đông người không?"
      },
      {
        "zh": "我在火车站等你。",
        "py": "Wǒ zài huǒchēzhàn děng nǐ.",
        "vn": "Tôi đợi bạn ở ga tàu."
      },
      {
        "zh": "火车站离这儿不远。",
        "py": "Huǒchēzhàn lí zhèr bù yuǎn.",
        "vn": "Ga tàu cách đây không xa."
      }
    ],
    "hanzi": [
      {
        "c": "火",
        "p": "huǒ",
        "type": "独体字 · Tượng hình",
        "st": 4,
        "ord": "丶→丿→丿→丶",
        "rad": "火 (hoả – tự thành bộ)",
        "mean": "lửa",
        "tip": "Hình ngọn lửa đang cháy → LỬA, mở rộng thành \"tàu hoả\" (xe chạy bằng hơi nước/lửa).",
        "cf": "灯 (dēng – \"đèn\")",
        "w": "火车 / 火车站"
      },
      {
        "c": "站",
        "p": "zhàn",
        "type": "左右结构 · Trái-phải",
        "st": 10,
        "ord": "立 (lập) trái → 占 (chiếm) phải",
        "rad": "立 (lập – đứng)",
        "mean": "trạm, ga",
        "tip": "立(đứng) + 占(chiếm chỗ) → nơi đứng lại chờ = TRẠM, GA.",
        "cf": "古 (gǔ – \"cổ xưa\")",
        "w": "火车站 / 车站 / 站着"
      }
    ],
    "colloFull": [
      {
        "zh": "去火车站",
        "py": "qù huǒchēzhàn",
        "vn": "ra ga tàu"
      },
      {
        "zh": "在火车站等",
        "py": "zài huǒchēzhàn děng",
        "vn": "đợi ở ga tàu"
      },
      {
        "zh": "火车站很远",
        "py": "huǒchēzhàn hěn yuǎn",
        "vn": "ga tàu rất xa"
      },
      {
        "zh": "到火车站",
        "py": "dào huǒchēzhàn",
        "vn": "đến ga tàu"
      }
    ],
    "patterns": [
      {
        "s": "去 / 到 + 火车站",
        "m": "Ra ga, đến ga"
      },
      {
        "s": "火车 + 站",
        "m": "Bến (站) của tàu hoả (火车)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Ga tàu cách đây không xa, đi bộ nửa tiếng.",
        "answer": "火车站离这儿不远，走路半个小时。",
        "answerPy": "Huǒchēzhàn lí zhèr bù yuǎn, zǒulù bàn ge xiǎoshí.",
        "note": "离 nói khoảng cách giữa hai nơi.",
        "pair": "A 离 B 不远"
      },
      {
        "promptLang": "vi",
        "prompt": "Tối mai tôi đợi bạn ở ga tàu.",
        "answer": "明天晚上我在火车站等你。",
        "answerPy": "Míngtiān wǎnshang wǒ zài huǒchēzhàn děng nǐ.",
        "note": "Nơi chốn đứng TRƯỚC động từ.",
        "pair": "在……等"
      }
    ]
  },
  {
    "n": 4,
    "zh": "大家",
    "py": "dàjiā",
    "pos": "Đại từ",
    "vn": "mọi người",
    "hv": "đại gia",
    "em": "👨‍👩‍👧‍👦",
    "lesson": 2,
    "ex_zh": "大家都在准备回家。",
    "ex_py": "Dàjiā dōu zài zhǔnbèi huíjiā.",
    "ex_vn": "Mọi người đều đang chuẩn bị về nhà.",
    "exList": [
      {
        "zh": "大家都在准备回家。",
        "py": "Dàjiā dōu zài zhǔnbèi huíjiā.",
        "vn": "Mọi người đều đang chuẩn bị về nhà."
      },
      {
        "zh": "大家好！",
        "py": "Dàjiā hǎo!",
        "vn": "Xin chào mọi người!"
      },
      {
        "zh": "大家都很高兴。",
        "py": "Dàjiā dōu hěn gāoxìng.",
        "vn": "Mọi người đều rất vui."
      }
    ],
    "hanzi": [
      {
        "c": "大",
        "p": "dà",
        "type": "独体字 · Tượng hình",
        "st": 3,
        "ord": "一→ノ→㇏",
        "rad": "大 (đại – tự thành bộ)",
        "mean": "to, lớn",
        "tip": "Hình người dang rộng tay chân → TO LỚN.",
        "cf": "太 (tài – \"quá\")",
        "w": "大家 / 大学 / 长大"
      },
      {
        "c": "家",
        "p": "jiā",
        "type": "上下结构 · Trên-dưới",
        "st": 10,
        "ord": "宀 (miên) → 豕 (thỉ)",
        "rad": "宀 (miên – mái nhà)",
        "mean": "nhà, gia đình",
        "tip": "Mái nhà 宀 có con lợn 豕 bên dưới — thời xưa nuôi lợn dưới nhà sàn → biểu tượng của NHÀ.",
        "cf": "豪 (háo – \"hào hiệp\")",
        "w": "大家 / 回家 / 家人"
      }
    ],
    "colloFull": [
      {
        "zh": "大家好",
        "py": "dàjiā hǎo",
        "vn": "chào mọi người"
      },
      {
        "zh": "大家都来了",
        "py": "dàjiā dōu lái le",
        "vn": "mọi người đều đến rồi"
      },
      {
        "zh": "欢迎大家",
        "py": "huānyíng dàjiā",
        "vn": "chào mừng mọi người"
      },
      {
        "zh": "告诉大家",
        "py": "gàosu dàjiā",
        "vn": "nói với mọi người"
      }
    ],
    "patterns": [
      {
        "s": "大家 + 都 + động từ",
        "m": "Mọi người đều …: 大家都来了"
      },
      {
        "s": "大家 (mọi người có mặt) — luôn đi với 都"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Chào mọi người, tôi họ Vương, rất vui được gặp mọi người.",
        "answer": "大家好，我姓王，欢迎大家。",
        "answerPy": "Dàjiā hǎo, wǒ xìng Wáng, huānyíng dàjiā.",
        "note": "大家好 — câu chào khi đứng trước nhiều người.",
        "pair": "Sub + 姓 + họ"
      },
      {
        "promptLang": "vi",
        "prompt": "Mọi người đều đến rồi, chúng ta bắt đầu thôi.",
        "answer": "大家都来了，我们开始吧。",
        "answerPy": "Dàjiā dōu lái le, wǒmen kāishǐ ba.",
        "note": "大家 luôn đi với 都.",
        "pair": "大家都……"
      }
    ]
  },
  {
    "n": 5,
    "zh": "更",
    "py": "gèng",
    "pos": "Phó từ",
    "vn": "càng, hơn",
    "hv": "cánh",
    "em": "📈",
    "lesson": 2,
    "ex_zh": "今天阴，比昨天更冷。",
    "ex_py": "Jīntiān yīn, bǐ zuótiān gèng lěng.",
    "ex_vn": "Hôm nay âm u, lạnh hơn hôm qua.",
    "exList": [
      {
        "zh": "今天阴，比昨天更冷。",
        "py": "Jīntiān yīn, bǐ zuótiān gèng lěng.",
        "vn": "Hôm nay âm u, lạnh hơn hôm qua."
      },
      {
        "zh": "我觉得今年比去年更热闹。",
        "py": "Wǒ juéde jīnnián bǐ qùnián gèng rènao.",
        "vn": "Tôi thấy năm nay náo nhiệt hơn năm ngoái."
      },
      {
        "zh": "他比我更忙。",
        "py": "Tā bǐ wǒ gèng máng.",
        "vn": "Anh ấy còn bận hơn tôi."
      }
    ],
    "hanzi": [
      {
        "c": "更",
        "p": "gèng",
        "type": "上下结构 · Trên-dưới",
        "st": 7,
        "ord": "一 → 日 → 㐅biến thể",
        "rad": "一 (nhất)",
        "mean": "càng, hơn",
        "tip": "Ghi nhớ qua cụm 比……更…… (so sánh hơn nữa) — mức độ tăng thêm so với gốc.",
        "cf": "夏 (xià – \"mùa hè\")",
        "w": "更冷 / 更好 / 更热闹"
      }
    ],
    "colloFull": [
      {
        "zh": "更好",
        "py": "gèng hǎo",
        "vn": "tốt hơn"
      },
      {
        "zh": "更贵",
        "py": "gèng guì",
        "vn": "đắt hơn"
      },
      {
        "zh": "更快",
        "py": "gèng kuài",
        "vn": "nhanh hơn"
      },
      {
        "zh": "比他更高",
        "py": "bǐ tā gèng gāo",
        "vn": "cao hơn anh ấy nữa"
      }
    ],
    "patterns": [
      {
        "s": "A + 比 + B + 更 + tính từ",
        "m": "A còn hơn B: 他比我更高"
      },
      {
        "s": "更 (hơn nữa, đã hơn sẵn) ≠ 最 (nhất)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Hôm nay lạnh hơn hôm qua nữa.",
        "answer": "今天比昨天更冷。",
        "answerPy": "Jīntiān bǐ zuótiān gèng lěng.",
        "note": "更 dùng khi cả hai đều đã ở mức đó.",
        "pair": "A 比 B 更 + Adj"
      },
      {
        "promptLang": "vi",
        "prompt": "Em gái tôi hát hay hơn tôi nữa.",
        "answer": "我妹妹唱歌唱得比我更好。",
        "answerPy": "Wǒ mèimei chànggē chàng de bǐ wǒ gèng hǎo.",
        "note": "Từ ly hợp phải nhắc lại động từ trước 得.",
        "pair": "V + 得 + 比……"
      }
    ]
  },
  {
    "n": 6,
    "zh": "妹妹",
    "py": "mèimei",
    "pos": "Danh từ",
    "vn": "em gái",
    "hv": "muội muội",
    "em": "👧",
    "lesson": 3,
    "ex_zh": "你妹妹呢？",
    "ex_py": "Nǐ mèimei ne?",
    "ex_vn": "Em gái bạn đâu rồi?",
    "exList": [
      {
        "zh": "你妹妹呢？",
        "py": "Nǐ mèimei ne?",
        "vn": "Em gái bạn đâu rồi?"
      },
      {
        "zh": "我妹妹今年十岁。",
        "py": "Wǒ mèimei jīnnián shí suì.",
        "vn": "Em gái tôi năm nay 10 tuổi."
      },
      {
        "zh": "她是我妹妹。",
        "py": "Tā shì wǒ mèimei.",
        "vn": "Cô ấy là em gái tôi."
      }
    ],
    "hanzi": [
      {
        "c": "妹",
        "p": "mèi",
        "type": "左右结构 · Trái-phải",
        "st": 8,
        "ord": "女 (nữ) trái → 未 (vị) phải",
        "rad": "女 (nữ – con gái)",
        "mean": "em gái",
        "tip": "女(con gái) + 未(chưa) → người con gái CHƯA lớn bằng chị = EM GÁI.",
        "cf": "妈 (mā – \"mẹ\")",
        "w": "妹妹 / 姐妹"
      }
    ],
    "colloFull": [
      {
        "zh": "我妹妹",
        "py": "wǒ mèimei",
        "vn": "em gái tôi"
      },
      {
        "zh": "妹妹的票",
        "py": "mèimei de piào",
        "vn": "vé của em gái"
      },
      {
        "zh": "两个妹妹",
        "py": "liǎng gè mèimei",
        "vn": "hai đứa em gái"
      },
      {
        "zh": "妹妹上学",
        "py": "mèimei shàngxué",
        "vn": "em gái đi học"
      }
    ],
    "patterns": [
      {
        "s": "ai + 妹妹",
        "m": "Em gái của ai"
      },
      {
        "s": "姐姐 · 妹妹 · 哥哥 · 弟弟 — bốn cách gọi anh chị em"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Em gái tôi năm nay mười tuổi, học ở trường gần đây.",
        "answer": "我妹妹今年十岁，在很近的学校上学。",
        "answerPy": "Wǒ mèimei jīnnián shí suì, zài hěn jìn de xuéxiào shàngxué.",
        "note": "妹妹 — em gái, gọi hai lần.",
        "pair": "在……上学"
      },
      {
        "promptLang": "vi",
        "prompt": "Cái vé này là của em gái tôi, đừng cầm nhầm.",
        "answer": "这张票是我妹妹的，别拿错了。",
        "answerPy": "Zhè zhāng piào shì wǒ mèimei de, bié nácuò le.",
        "note": "别 dùng khi khuyên ai đừng làm gì.",
        "pair": "V + 错了"
      }
    ]
  },
  {
    "n": 7,
    "zh": "阴",
    "py": "yīn",
    "pos": "Tính từ",
    "vn": "âm u, râm mát",
    "hv": "âm",
    "em": "☁️",
    "lesson": 3,
    "ex_zh": "今天阴，比昨天更冷。",
    "ex_py": "Jīntiān yīn, bǐ zuótiān gèng lěng.",
    "ex_vn": "Hôm nay âm u, lạnh hơn hôm qua.",
    "exList": [
      {
        "zh": "今天阴，比昨天更冷。",
        "py": "Jīntiān yīn, bǐ zuótiān gèng lěng.",
        "vn": "Hôm nay âm u, lạnh hơn hôm qua."
      },
      {
        "zh": "今天是阴天。",
        "py": "Jīntiān shì yīntiān.",
        "vn": "Hôm nay là trời âm u."
      },
      {
        "zh": "天气预报说明天阴转晴。",
        "py": "Tiānqì yùbào shuō míngtiān yīn zhuǎn qíng.",
        "vn": "Dự báo thời tiết nói ngày mai âm u chuyển quang."
      }
    ],
    "hanzi": [
      {
        "c": "阴",
        "p": "yīn",
        "type": "左右结构 · Trái-phải",
        "st": 6,
        "ord": "阝(phụ) trái → 月 (nguyệt) phải",
        "rad": "阝(phụ – gò đất)",
        "mean": "âm u",
        "tip": "阝(sườn đồi) + 月(trăng, chỉ bóng tối) → phía khuất ánh nắng của quả đồi = ÂM U.",
        "cf": "阳 (yáng – \"nắng, dương\")",
        "w": "阴天 / 阴转晴"
      }
    ],
    "colloFull": [
      {
        "zh": "阴天",
        "py": "yīn tiān",
        "vn": "trời âm u"
      },
      {
        "zh": "天阴了",
        "py": "tiān yīn le",
        "vn": "trời râm rồi"
      },
      {
        "zh": "阴天很冷",
        "py": "yīn tiān hěn lěng",
        "vn": "trời râm rất lạnh"
      },
      {
        "zh": "今天阴",
        "py": "jīntiān yīn",
        "vn": "hôm nay trời âm u"
      }
    ],
    "patterns": [
      {
        "s": "天 + 阴 + 了",
        "m": "Trời râm rồi — tình hình đã đổi"
      },
      {
        "s": "阴 ↔ 晴 — trời râm và trời nắng"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Hôm nay trời âm u, có thể sắp mưa.",
        "answer": "今天是阴天，可能要下雨了。",
        "answerPy": "Jīntiān shì yīntiān, kěnéng yào xià yǔ le.",
        "note": "阴 ↔ 晴 — trời râm và trời nắng.",
        "pair": "可能……了"
      },
      {
        "promptLang": "vi",
        "prompt": "Trời râm rồi, chúng ta về nhà thôi.",
        "answer": "天阴了，我们回家吧。",
        "answerPy": "Tiān yīn le, wǒmen huí jiā ba.",
        "note": "了 cuối câu báo tình hình đã đổi.",
        "pair": "……了"
      }
    ]
  },
  {
    "n": 8,
    "zh": "公共汽车",
    "py": "gōnggòngqìchē",
    "pos": "Danh từ",
    "vn": "xe buýt",
    "hv": "công cộng khí xa",
    "em": "🚌",
    "lesson": 3,
    "ex_zh": "她坐公共汽车去火车站。",
    "ex_py": "Tā zuò gōnggòngqìchē qù huǒchēzhàn.",
    "ex_vn": "Cô ấy đi xe buýt đến ga tàu.",
    "exList": [
      {
        "zh": "她坐公共汽车去火车站。",
        "py": "Tā zuò gōnggòngqìchē qù huǒchēzhàn.",
        "vn": "Cô ấy đi xe buýt đến ga tàu."
      },
      {
        "zh": "我每天坐公共汽车上班。",
        "py": "Wǒ měitiān zuò gōnggòngqìchē shàngbān.",
        "vn": "Ngày nào tôi cũng đi xe buýt đi làm."
      },
      {
        "zh": "公共汽车来了！",
        "py": "Gōnggòngqìchē lái le!",
        "vn": "Xe buýt đến rồi!"
      }
    ],
    "hanzi": [
      {
        "c": "公",
        "p": "gōng",
        "type": "上下结构 · Trên-dưới",
        "st": 4,
        "ord": "八 → 厶",
        "rad": "八 (bát – chia)",
        "mean": "công cộng",
        "tip": "八(chia ra) trên 厶(riêng tư) → chia sẻ chung, thuộc về mọi người = CÔNG CỘNG.",
        "cf": "公司 (gōngsī – đã học ở Bài 7)",
        "w": "公共汽车 / 公司 / 公园"
      },
      {
        "c": "共",
        "p": "gòng",
        "type": "上下结构 · Trên-dưới",
        "st": 6,
        "ord": "廿 → 八",
        "rad": "八 (bát)",
        "mean": "cùng, chung",
        "tip": "Nhiều tay cùng nâng một vật → làm CÙNG NHAU, CHUNG.",
        "cf": "具 (jù – \"dụng cụ\")",
        "w": "公共 / 一共"
      }
    ],
    "colloFull": [
      {
        "zh": "坐公共汽车",
        "py": "zuò gōnggòngqìchē",
        "vn": "đi xe buýt"
      },
      {
        "zh": "公共汽车站",
        "py": "gōnggòngqìchē zhàn",
        "vn": "bến xe buýt"
      },
      {
        "zh": "公共汽车票",
        "py": "gōnggòngqìchē piào",
        "vn": "vé xe buýt"
      },
      {
        "zh": "等公共汽车",
        "py": "děng gōnggòngqìchē",
        "vn": "chờ xe buýt"
      }
    ],
    "patterns": [
      {
        "s": "坐 + 公共汽车 + 去",
        "m": "Đi xe buýt đến đâu: 坐公共汽车去火车站"
      },
      {
        "s": "坐 dùng cho xe buýt, tàu, máy bay; 骑 dùng cho xe đạp"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Bạn đi xe buýt ra ga tàu nhé.",
        "answer": "你坐公共汽车去火车站吧。",
        "answerPy": "Nǐ zuò gōnggòng qìchē qù huǒchēzhàn ba.",
        "note": "坐 dùng cho xe buýt, 骑 dùng cho xe đạp.",
        "pair": "坐……去……"
      },
      {
        "promptLang": "vi",
        "prompt": "Bến xe buýt ở bên phải ngã tư.",
        "answer": "公共汽车站在路口右边。",
        "answerPy": "Gōnggòng qìchē zhàn zài lùkǒu yòubian.",
        "note": "danh từ + 右边 — bên phải cái gì.",
        "pair": "在……右边"
      }
    ]
  }
];

const wuData = [
  {img:'🎉',label:'新年',py:'xīnnián',letter:'A'},
  {img:'🎫',label:'票',py:'piào',letter:'B'},
  {img:'🚉',label:'火车站',py:'huǒchēzhàn',letter:'C'},
  {img:'👧',label:'妹妹',py:'mèimei',letter:'D'},
  {img:'☁️',label:'阴',py:'yīn',letter:'E'},
  {img:'🚌',label:'公共汽车',py:'gōnggòngqìchē',letter:'F'},
];

var dialogData = [
  {scene:'谈论新年 · Nói về năm mới',
   preQuiz:[
     {q:'女的新年打算做什么？',opts:['回家过年','去旅游','在家休息'],ans:0},
     {q:'火车站人多吗？',opts:['人很多','人不多','不知道'],ans:0},
   ],
   lines:[
     {sp:0,zh:'新年就要到了，你有什么计划？',py:'Xīnnián jiùyào dào le, nǐ yǒu shénme jìhuà?',vn:'Năm mới sắp đến rồi, bạn có kế hoạch gì không?'},
     {sp:1,zh:'我要回家过年，票已经买好了。',py:'Wǒ yào huíjiā guònián, piào yǐjīng mǎihǎo le.',vn:'Tôi sẽ về nhà ăn Tết, vé đã mua xong rồi.'},
     {sp:0,zh:'火车站人多不多？',py:'Huǒchēzhàn rén duō bu duō?',vn:'Ga tàu có đông người không?'},
     {sp:1,zh:'大家都在准备回家，人很多。',py:'Dàjiā dōu zài zhǔnbèi huíjiā, rén hěn duō.',vn:'Mọi người đều đang chuẩn bị về nhà, rất đông người.'},
   ]},
  {scene:'谈论天气 · Nói về sự thay đổi thời tiết',
   preQuiz:[
     {q:'今天天气怎么样？',opts:['阴，比昨天更冷','晴，很暖和','下雨'],ans:0},
     {q:'天气预报说明天会怎么样？',opts:['下雪','下雨','晴天'],ans:0},
   ],
   lines:[
     {sp:0,zh:'今天天气怎么样？',py:'Jīntiān tiānqì zěnmeyàng?',vn:'Hôm nay thời tiết thế nào?'},
     {sp:1,zh:'今天阴，比昨天更冷。',py:'Jīntiān yīn, bǐ zuótiān gèng lěng.',vn:'Hôm nay âm u, lạnh hơn hôm qua.'},
     {sp:0,zh:'快要下雪了吧？',py:'Kuàiyào xiàxuě le ba?',vn:'Sắp có tuyết rơi rồi phải không?'},
     {sp:1,zh:'是啊，天气预报说明天会下雪。',py:'Shì a, tiānqì yùbào shuō míngtiān huì xiàxuě.',vn:'Đúng vậy, dự báo thời tiết nói ngày mai sẽ có tuyết.'},
   ]},
  {scene:'妹妹的事情 · Chuyện của em gái',
   preQuiz:[
     {q:'妹妹去哪儿了？',opts:['去火车站接朋友','去买东西','去上班'],ans:0},
     {q:'妹妹怎么去的？',opts:['坐公共汽车','走路','骑自行车'],ans:0},
     {q:'妹妹快回来了吗？',opts:['快回来了','还早','不回来了'],ans:0},
   ],
   lines:[
     {sp:0,zh:'你妹妹呢？',py:'Nǐ mèimei ne?',vn:'Em gái bạn đâu rồi?'},
     {sp:1,zh:'她坐公共汽车去火车站接朋友了。',py:'Tā zuò gōnggòngqìchē qù huǒchēzhàn jiē péngyou le.',vn:'Cô ấy đi xe buýt đến ga tàu đón bạn rồi.'},
     {sp:0,zh:'都几点了，她还没回来吗？',py:'Dōu jǐ diǎn le, tā hái méi huílai ma?',vn:'Mấy giờ rồi mà cô ấy vẫn chưa về à?'},
     {sp:1,zh:'快要回来了，你等一下。',py:'Kuàiyào huílai le, nǐ děng yíxià.',vn:'Sắp về rồi, bạn đợi một chút.'},
   ]},
  {scene:'准备过年 · Chuẩn bị đón năm mới',
   preQuiz:[
     {q:'女的新年准备得怎么样了？',opts:['差不多了，衣服买好了','还没开始','都准备好了'],ans:0},
     {q:'男的觉得今年和去年比怎么样？',opts:['今年更热闹','去年更热闹','差不多'],ans:0},
   ],
   lines:[
     {sp:0,zh:'新年快到了，你准备好了吗？',py:'Xīnnián kuài dào le, nǐ zhǔnbèi hǎo le ma?',vn:'Năm mới sắp đến rồi, bạn chuẩn bị xong chưa?'},
     {sp:1,zh:'差不多了，衣服都买好了。',py:'Chàbuduō le, yīfu dōu mǎihǎo le.',vn:'Gần xong rồi, quần áo đều mua xong cả rồi.'},
     {sp:0,zh:'我觉得今年比去年更热闹。',py:'Wǒ juéde jīnnián bǐ qùnián gèng rènao.',vn:'Tôi thấy năm nay náo nhiệt hơn năm ngoái.'},
     {sp:1,zh:'是啊，大家都很高兴。',py:'Shì a, dàjiā dōu hěn gāoxìng.',vn:'Đúng vậy, mọi người đều rất vui.'},
   ]},
];

// ══════════════════════════════════════════
// PHẦN 1 · GHÉP TỪ (Collocation) — ghép hai nửa thành cụm dùng được ngay
// Không copy câu bài khoá — chỉ ghép CỤM TỪ để phản xạ collocation.
// ══════════════════════════════════════════
var matchData = [
  {left:'坐',right:'公共汽车'},
  {left:'去火车站',right:'接妹妹'},
  {left:'都十一点了',right:'怎么还不睡觉'},
  {left:'买两张',right:'电影票'},
  {left:'比去年',right:'更热闹'},
  {left:'妈妈的生日',right:'快要到了'},
];

// ══════════════════════════════════════════
// PHẦN 2 · NGHE — tình huống MỚI: tiệc tất niên ở công ty.
// ══════════════════════════════════════════
var listenData = {
  type: 'workbook',
  audio: '/audio/bai-15/listen-full.mp3',
  dictation: [
    {num:1, lines:[
      {pre:'明天我要', blank:'去火车站买票', post:'。', py:'Míngtiān wǒ yào qù huǒchēzhàn mǎi piào.', vn:'Ngày mai tôi phải ra ga tàu mua vé.'},
    ]},
    {num:2, lines:[
      {pre:'新年快要到了，', blank:'我想和朋友一起去旅游', post:'。', py:'Xīnnián kuàiyào dào le, wǒ xiǎng hé péngyou yìqǐ qù lǚyóu.', vn:'Năm mới sắp đến rồi, tôi muốn cùng bạn đi du lịch.'},
    ]},
    {num:3, lines:[
      {pre:'她在公共汽车上呢，', blank:'我们等她一会儿吧', post:'。', py:'Tā zài gōnggòngqìchē shàng ne, wǒmen děng tā yíhuìr ba.', vn:'Cô ấy đang ở trên xe buýt, chúng ta đợi cô ấy một chút đi.'},
    ]},
    {num:4, lines:[
      {pre:'今天天气不太好，', blank:'有点儿阴', post:'。', py:'Jīntiān tiānqì bú tài hǎo, yǒudiǎnr yīn.', vn:'Hôm nay thời tiết không tốt lắm, hơi âm u.'},
    ]},
    {num:5, lines:[
      {pre:'王方是我妹妹，', blank:'她的歌唱得非常好', post:'。', py:'Wáng Fāng shì wǒ mèimei, tā de gē chàng de fēicháng hǎo.', vn:'Vương Phương là em gái tôi, cô ấy hát rất hay.'},
    ]},
    {num:6, lines:[
      {speaker:'女', pre:'你好！我的车出问题了，你们能', blank:'来帮我看一下吗', post:'？', py:'Nǐ hǎo! Wǒ de chē chū wèntí le, nǐmen néng lái bāng wǒ kàn yíxià ma?', vn:'Chào bạn! Xe tôi có vấn đề rồi, các bạn đến giúp tôi xem được không?'},
      {speaker:'男', pre:'好的，请', blank:'告诉我您在哪儿', post:'。', py:'Hǎo de, qǐng gàosu wǒ nín zài nǎr.', vn:'Được, xin cho tôi biết bạn đang ở đâu.'},
    ]},
    {num:7, lines:[
      {speaker:'男', pre:'都六点了，你怎么', blank:'还不回家', post:'？', py:'Dōu liù diǎn le, nǐ zěnme hái bù huí jiā?', vn:'Đã 6 giờ rồi, sao bạn còn chưa về nhà?'},
      {speaker:'女', pre:'我在想', blank:'晚饭吃什么呢', post:'。', py:'Wǒ zài xiǎng wǎnfàn chī shénme ne.', vn:'Tôi đang nghĩ tối nay ăn gì.'},
    ]},
    {num:8, lines:[
      {speaker:'男', pre:'这是你妹妹让我买的火车票，你能', blank:'帮我给她吗', post:'？', py:'Zhè shì nǐ mèimei ràng wǒ mǎi de huǒchēpiào, nǐ néng bāng wǒ gěi tā ma?', vn:'Đây là vé tàu em gái bạn nhờ tôi mua, bạn đưa giúp tôi cho cô ấy được không?'},
      {speaker:'女', pre:'没问题，我', blank:'一会儿就给她', post:'。', py:'Méi wèntí, wǒ yíhuìr jiù gěi tā.', vn:'Không vấn đề gì, lát nữa tôi đưa cho cô ấy ngay.'},
    ]},
    {num:9, lines:[
      {speaker:'女', pre:'快要下课了，', blank:'还有哪位同学有问题', post:'？', py:'Kuàiyào xiàkè le, hái yǒu nǎ wèi tóngxué yǒu wèntí?', vn:'Sắp hết giờ rồi, còn bạn nào có câu hỏi không?'},
      {speaker:'男', pre:'老师，我想', blank:'问一个问题', post:'。', py:'Lǎoshī, wǒ xiǎng wèn yí gè wèntí.', vn:'Thưa cô, em muốn hỏi một câu.'},
    ]},
    {num:10, lines:[
      {speaker:'男', pre:'你的狗怎么', blank:'不吃东西了', post:'？', py:'Nǐ de gǒu zěnme bù chī dōngxi le?', vn:'Sao con chó của bạn không ăn gì vậy?'},
      {speaker:'女', pre:'它这几天', blank:'病了', post:'。', py:'Tā zhè jǐ tiān bìng le.', vn:'Mấy hôm nay nó bị ốm.'},
    ]},
  ],
  mc: [
    {num:11, options:['去过','没有','去过很多次'], ans:1,
     explain:'男：新年快要到了，你准备做什么？女：我听说北京很不错，我想和妈妈一起去北京旅游。问：女的去过北京吗？ → 没有（只是听说，还没去过）。'},
    {num:12, options:['飞机票','汽车票','火车票'], ans:2,
     explain:'男：你不是想回家过新年吗？买票了没有？女：还没有呢，明天我就去火车站买。问：女的想买什么票？ → 火车票。'},
    {num:13, options:['来了','还没来','不知道'], ans:1,
     explain:'女：都等了半个小时了，公共汽车怎么还没来？男：上班时间路上车多，再等一会儿吧，就快来了。问：公共汽车来了没有？ → 还没来。'},
    {num:14, options:['不太好','下雨了','下雪了'], ans:0,
     explain:'男：快要下雪了，我觉得比昨天更冷了。女：没关系，我穿的衣服比昨天多。问：今天天气怎么样？ → 不太好。'},
    {num:15, options:['饭馆','学校','家里'], ans:2,
     explain:'女：儿子，多吃菜啊。男：好，您做的菜比饭店的还好吃。问：他们最可能在哪儿说话？ → 家里。'},
  ],
};

// ══════════════════════════════════════════
// PHẦN 3a · ĐIỀN TỪ — mỗi câu một tình huống mới (要/快要/快/就要……了 · 都……了 + từ mới bài 15, ôn bài trước)
// ══════════════════════════════════════════
var fillData = [
  {pre:'Lớp trưởng nhắc cả lớp: “下个星期一',blank:'就要',post:'考试了，大家好好准备吧。”',hint:'(sắp — có thời gian cụ thể)',ans:'就要',exp:'Có từ chỉ thời gian cụ thể (下个星期一) thì dùng 就要……了, không dùng 快要……了.'},
  {pre:'“公共汽车',blank:'快要',post:'到了，你在哪儿？” — “我已经在路口了。”',hint:'(sắp)',ans:'快要',exp:'快要 + động từ + 了 = sắp … rồi; cuối câu phải có 了.'},
  {pre:'“你儿子多大了？” — “',blank:'快',post:'十岁了，比我女儿大两岁。”',hint:'(sắp, gần)',ans:'快',exp:'快 + số + 了 = gần (đến số đó) rồi: 快十岁了 = sắp mười tuổi.'},
  {pre:'“现在',blank:'都',post:'十点了，你怎么还在看电视？” — “我看完这个就去睡觉。”',hint:'(đã … rồi mà)',ans:'都',exp:'都 + thời gian + 了 = đã … rồi (nhấn mạnh là muộn): 都十点了.'},
  {pre:'Bạn so sánh hai chiếc áo: “这件白衣服很漂亮，那件黑的',blank:'更',post:'漂亮。”',hint:'(càng, hơn)',ans:'更',exp:'A 很 + tính từ，B 更 + tính từ = B còn … hơn; 更 đứng ngay trước tính từ.'},
  {pre:'Ngày đầu năm, bạn chúc thầy giáo: “老师，',blank:'新年',post:'快乐！”',hint:'(năm mới)',ans:'新年',exp:'新年快乐！= Chúc mừng năm mới! (快乐 = vui vẻ).'},
  {pre:'“你买到',blank:'票',post:'了吗？” — “买到了，是明天上午九点的。”',hint:'(vé)',ans:'票',exp:'买到票了 = mua được vé rồi; 到 là bổ ngữ kết quả (đạt được).'},
  {pre:'“从这儿去',blank:'火车站',post:'远吗？” — “不远，走路十分钟。”',hint:'(ga tàu hoả)',ans:'火车站',exp:'从 A 去 B = từ A đi B: 从这儿去火车站.'},
  {pre:'Lớp trưởng hỏi: “',blank:'大家',post:'都来了吗？我们开始上课吧。”',hint:'(mọi người)',ans:'大家',exp:'大家 + 都 + động từ = mọi người đều …; 都 đứng sau 大家.'},
  {pre:'“她是你姐姐吗？” — “不是，她是我',blank:'妹妹',post:'，比我小两岁。”',hint:'(em gái)',ans:'妹妹',exp:'妹妹 = em gái; 比我小两岁 = nhỏ hơn tôi hai tuổi.'},
  {pre:'上午天气很好，下午天',blank:'阴',post:'了，可能要下雨。',hint:'(âm u, râm)',ans:'阴',exp:'天阴了 = trời âm u rồi; 了 chỉ sự thay đổi thời tiết.'},
  {pre:'“你妻子怎么去上班？” — “坐',blank:'公共汽车',post:'，很便宜。”',hint:'(xe buýt)',ans:'公共汽车',exp:'坐 + phương tiện (+ 去 + nơi): 坐公共汽车 = đi xe buýt.'},
];

// ══════════════════════════════════════════
// PHẦN 3b · SẮP XẾP — câu MỚI, dùng 快要/就要……了 / 都……了 / 更
// ══════════════════════════════════════════
var sortData = [
  {words:['飞机','快要','到','了','，','我们','去','机场','吧','。'],ans:'飞机快要到了，我们去机场吧。',audio:'飞机快要到了，我们去机场吧。'},
  {words:['你','都','二十','岁','了','，','还','不','会','做饭','？'],ans:'你都二十岁了，还不会做饭？',audio:'你都二十岁了，还不会做饭？'},
  {words:['弟弟','比','我','更','喜欢','踢','足球','。'],ans:'弟弟比我更喜欢踢足球。',audio:'弟弟比我更喜欢踢足球。'},
  {words:['我们','下个月','就要','去','北京','了','。'],ans:'我们下个月就要去北京了。',audio:'我们下个月就要去北京了。',alt:['下个月我们就要去北京了。']},
  {words:['天','阴','了','，','别','去','公园','了','。'],ans:'天阴了，别去公园了。',audio:'天阴了，别去公园了。'},
  {words:['电影','票','是','我','妹妹','买','的','。'],ans:'电影票是我妹妹买的。',audio:'电影票是我妹妹买的。'},
  {words:['火车站','离','这儿','不','太','远','。'],ans:'火车站离这儿不太远。',audio:'火车站离这儿不太远。'},
  {words:['大家','快','进','来','吧','，','饭','已经','做','好','了','。'],ans:'大家快进来吧，饭已经做好了。',audio:'大家快进来吧，饭已经做好了。'},
];

// ══════════════════════════════════════════
// PHẦN 3c · SỬA LỖI SAI — lỗi học sinh Việt hay mắc
// (快要 + thời gian cụ thể, thiếu 了, 都……了 sai chỗ, 比…是更…, 都 trước chủ ngữ, phương tiện đặt sau, 要…了 đặt sai, bổ ngữ 好)
// ══════════════════════════════════════════
var errorFixData = [
  {wrong:'明天快要考试了，我还没准备好。',
   opts:['明天快要考试，我还没准备好。','明天要考试快了，我还没准备好。','明天就要考试了，我还没准备好。','明天就要考试了，我没还准备好。'],ans:2,
   exp:'Có thời gian cụ thể (明天) thì dùng 就要……了, không dùng 快要; cuối câu phải có 了; 还 đứng trước 没.'},
  {wrong:'电影快要开始，我们快进去吧。',
   opts:['电影快要开始了，我们快进去吧。','电影要快开始了，我们快进去吧。','电影快开始要了，我们快进去吧。','电影快要开始了，我们进去快吧。'],ans:0,
   exp:'快要 + động từ + 了: 快要开始了 (không thiếu 了); “mau vào” là 快进去, 快 đứng trước động từ.'},
  {wrong:'十二月都了，天气还很热。',
   opts:['都十二月，天气还很热。','十二月了都，天气还很热。','都十二月了，天气很还热。','都十二月了，天气还很热。'],ans:3,
   exp:'都 + thời gian + 了 đặt ở đầu câu: 都十二月了 (đã tháng Mười Hai rồi mà…); 还 đứng trước 很.'},
  {wrong:'这个公园比那个是更大。',
   opts:['这个公园比那个很大。','这个公园比那个更大。','这个公园比那个大更。','这个公园是比那个更大的。'],ans:1,
   exp:'A 比 B + 更 + tính từ: 比那个更大; không dùng 很, không thêm 是, 更 đứng trước tính từ.'},
  {wrong:'都大家到了，可以开始了。',
   opts:['大家到了都，可以开始了。','大家都是到了，可以开始了。','大家都到了，可以开始了。','大家都到了，开始可以了。'],ans:2,
   exp:'都 đứng SAU chủ ngữ, trước động từ: 大家都到了; không thêm 是; 可以 đứng trước động từ 开始.'},
  {wrong:'我去学校坐公共汽车。（ý: tôi đi học bằng xe buýt）',
   opts:['我坐公共汽车去学校。','我坐公共汽车去在学校。','我在公共汽车去学校。','我坐在公共汽车去学校。'],ans:0,
   exp:'Phương tiện đứng TRƯỚC: 坐 + phương tiện + 去 + nơi chốn; không thêm 在.'},
  {wrong:'外面天很阴，可能下雨要了。',
   opts:['外面天很阴，要可能下雨了。','外面天很阴，可能要下雨了。','外面天很阴，可能要了下雨。','外面天是很阴，可能要下雨了。'],ans:1,
   exp:'要 + động từ + 了 = sắp …: 要下雨了; 可能 đứng trước 要; trước tính từ không thêm 是.'},
  {wrong:'新年的东西我们买好了都。',
   opts:['新年的东西都我们买好了。','新年的东西我们都买了好。','新年的东西我们都好买了。','新年的东西我们都买好了。'],ans:3,
   exp:'都 đứng sau chủ ngữ, trước động từ; bổ ngữ kết quả 好 đứng ngay sau động từ, 了 sau cùng: 都买好了.'},
];

// ══════════════════════════════════════════
// PHẦN 4 · LUYỆN NÓI 3 TẦNG (tầng 3 có ghi âm thật + chấm điểm AI)
// ══════════════════════════════════════════
// Luyen noi voi AI (mode 'ai-speak'): moi cau hoi la mot tinh huong doi song
// lien quan den bai khoa; hoc sinh tu ghi am cau tra loi, AI nghe lai (nhan
// dien giong noi tieng Trung) roi cham diem theo 4 tieu chi va nhan xet.
var speakingData = {
  mode: 'ai-speak',
  intro: 'Mỗi câu hỏi là một tình huống thật trong đời sống, dùng đúng từ vựng và mẫu câu của Bài 15. Bấm 🎙️ rồi trả lời bằng tiếng Trung — AI sẽ nghe, ghi lại câu bạn nói và chấm điểm theo Nội dung · Mẫu câu · Từ vựng · Độ trôi chảy. Nên tự trả lời trước rồi mới mở “Câu mẫu” để đối chiếu.',
  tasks: [
    {
      situation: 'Sắp đến năm mới, bạn học hỏi kế hoạch của bạn.',
      q_zh: '快过新年了，你想和谁一起过？',
      q_py: 'Kuài guò xīnnián le, nǐ xiǎng hé shéi yìqǐ guò?',
      q_vn: 'Sắp đến năm mới rồi, bạn muốn đón cùng ai?',
      grammar: { label: '快要 / 就要 / 快……了', any: ['就要', '快要', '快', '要'] },
      need: [
        { label: 'Nói đón năm mới cùng ai', any: ['爸爸', '妈妈', '家', '朋友', '同学', '姐姐', '妹妹', '哥哥', '弟弟', '大家', '妻子', '丈夫'] },
        { label: 'Nói việc định làm (回家 / 旅游…)', any: ['回家', '过年', '旅游', '吃饭', '看', '玩', '休息', '去'] },
        { label: 'Nhắc đến 新年 hoặc thời gian', any: ['新年', '年', '星期', '月', '号'] }
      ],
      bonus: { label: 'Nói việc đã chuẩn bị (票买好了)', any: ['票', '买好', '准备'] },
      vocab: ['新年', '票', '快要'],
      minLen: 12,
      sample: '还有五天就是新年了，我要回家和爸爸妈妈一起过，票我已经买好了。',
      sample_py: 'Hái yǒu wǔ tiān jiù shì xīnnián le, wǒ yào huí jiā hé bàba māma yìqǐ guò, piào wǒ yǐjīng mǎihǎo le.',
      sample_vn: 'Còn năm ngày nữa là năm mới rồi, tôi sẽ về nhà đón cùng bố mẹ, vé tôi đã mua xong rồi.',
      tip: '快要…了 / 就要…了 đều là “sắp … rồi”; có thời gian cụ thể thì dùng 就要.'
    },
    {
      situation: 'Bạn mới chuyển nhà, đồng nghiệp hỏi đường đến ga tàu.',
      q_zh: '你家离火车站远吗？你怎么去火车站？',
      q_py: 'Nǐ jiā lí huǒchēzhàn yuǎn ma? Nǐ zěnme qù huǒchēzhàn?',
      q_vn: 'Nhà bạn cách ga tàu có xa không? Bạn đến ga tàu bằng cách nào?',
      grammar: { label: '离…远/近 + 坐…去', any: ['离', '远', '近'] },
      need: [
        { label: 'Nói phương tiện (坐公共汽车 / 走路…)', any: ['公共汽车', '出租车', '坐', '走路', '自行车', '开车'] },
        { label: 'Nói thời gian đi đường', any: ['分钟', '小时', '一会儿'] },
        { label: 'Nhắc đến 火车站', any: ['火车站'] }
      ],
      bonus: { label: 'Dùng 就 (… phút là đến)', any: ['就'] },
      vocab: ['火车站', '公共汽车'],
      minLen: 12,
      sample: '我家离火车站不太远，坐公共汽车二十分钟就到了。',
      sample_py: 'Wǒ jiā lí huǒchēzhàn bú tài yuǎn, zuò gōnggòngqìchē èrshí fēnzhōng jiù dào le.',
      sample_vn: 'Nhà tôi cách ga tàu không xa lắm, đi xe buýt hai mươi phút là đến.',
      tip: 'Phương tiện đứng trước động từ chính: 坐公共汽车去…, không nói 去…坐公共汽车.'
    },
    {
      situation: 'Buổi sáng, bạn cùng phòng hỏi có nên mặc thêm áo không.',
      q_zh: '外面冷不冷？明天会更冷吗？',
      q_py: 'Wàimiàn lěng bu lěng? Míngtiān huì gèng lěng ma?',
      q_vn: 'Bên ngoài có lạnh không? Ngày mai có lạnh hơn nữa không?',
      grammar: { label: '更 + tính từ', any: ['更'] },
      need: [
        { label: 'Nói kiểu thời tiết (阴 / 晴 / 下雪…)', any: ['阴', '晴', '雪', '雨', '冷', '热'] },
        { label: 'Dùng 会 / 要…了 để dự đoán', any: ['会', '要', '可能', '快'] },
        { label: 'Khuyên mặc thêm áo / mang gì', any: ['穿', '衣服', '多', '别'] }
      ],
      bonus: { label: 'Dùng 比 để so sánh', any: ['比'] },
      vocab: ['更', '阴'],
      minLen: 12,
      sample: '今天是阴天，已经很冷了，我觉得明天会更冷，你多穿点儿衣服吧。',
      sample_py: 'Jīntiān shì yīntiān, yǐjīng hěn lěng le, wǒ juéde míngtiān huì gèng lěng, nǐ duō chuān diǎnr yīfu ba.',
      sample_vn: 'Hôm nay trời âm u, đã rất lạnh rồi, tôi thấy ngày mai sẽ còn lạnh hơn, bạn mặc thêm áo vào nhé.',
      tip: '更 đứng ngay trước tính từ: 更冷、更热闹; có thể dùng không cần 比.'
    },
    {
      situation: 'Đã muộn mà em gái chưa về, bố mẹ hỏi bạn.',
      q_zh: '你妹妹怎么还不回家？你给她打电话了吗？',
      q_py: 'Nǐ mèimei zěnme hái bù huí jiā? Nǐ gěi tā dǎ diànhuà le ma?',
      q_vn: 'Sao em gái con vẫn chưa về nhà? Con đã gọi điện cho em chưa?',
      grammar: { label: '就 / 快要……了 (sắp đến)', any: ['快要', '就要', '快', '就'] },
      need: [
        { label: 'Nói đã gọi điện chưa', any: ['电话', '打了', '问'] },
        { label: 'Nói em gái đang ở đâu / làm gì', any: ['公共汽车', '路上', '学校', '朋友', '商店', '公司', '火车站', '在'] },
        { label: 'Bảo bố mẹ đừng lo / chờ một chút', any: ['等', '别', '没关系', '一下'] }
      ],
      bonus: { label: 'Nêu lý do về muộn (因为…)', any: ['因为', '所以', '人多', '下雪', '下雨'] },
      vocab: ['妹妹', '公共汽车'],
      minLen: 12,
      sample: '我给她打电话了。她在公共汽车上，路上人太多了，她说十分钟以后就到。您等一下吧。',
      sample_py: 'Wǒ gěi tā dǎ diànhuà le. Tā zài gōnggòngqìchē shang, lùshang rén tài duō le, tā shuō shí fēnzhōng yǐhòu jiù dào. Nín děng yíxià ba.',
      sample_vn: 'Con gọi cho em rồi. Em đang ở trên xe buýt, trên đường đông người quá, em nói mười phút nữa là đến. Bố mẹ đợi một chút nhé.',
      tip: 'Nói “… phút nữa là đến” = 十分钟以后就到; 就 nhấn mạnh sắp tới, nhanh.'
    },
    {
      situation: 'Bạn người Trung Quốc hỏi về Tết ở quê bạn.',
      q_zh: '你们那儿过新年热闹吗？大家都做什么？',
      q_py: 'Nǐmen nàr guò xīnnián rènao ma? Dàjiā dōu zuò shénme?',
      q_vn: 'Ở chỗ bạn đón năm mới có nhộn nhịp không? Mọi người đều làm gì?',
      grammar: { label: '大家都 + động từ', any: ['大家', '都'] },
      need: [
        { label: 'Nhận xét: nhộn nhịp / vui', any: ['热闹', '高兴', '快乐', '有意思'] },
        { label: 'Nói việc mọi người làm', any: ['回家', '吃', '买', '看', '玩', '唱歌', '跳舞', '穿', '送'] },
        { label: 'Dùng 更 / 比 so sánh với năm trước', any: ['更', '比'] }
      ],
      bonus: { label: 'Kể thêm món ăn hoặc quần áo mới', any: ['新衣服', '菜', '鱼', '水果', '新'] },
      vocab: ['大家', '新年', '更'],
      minLen: 14,
      sample: '很热闹。大家都穿新衣服，和家里人一起吃饭、唱歌。今年的人比去年更多。',
      sample_py: 'Hěn rènao. Dàjiā dōu chuān xīn yīfu, hé jiā li rén yìqǐ chī fàn, chàng gē. Jīnnián de rén bǐ qùnián gèng duō.',
      sample_vn: 'Rất nhộn nhịp. Mọi người đều mặc quần áo mới, cùng người nhà ăn cơm, hát hò. Năm nay người còn đông hơn năm ngoái.',
      tip: '大家都 + động từ = mọi người đều …; A 比 B 更 + tính từ.'
    }
  ]
};

// ══════════════════════════════════════════
// LUYỆN DỊCH — câu mới, dùng từ bài 15 + ôn bài trước và HSK1
// ══════════════════════════════════════════
var translateData = [
  {vi:'Tuần sau anh trai tôi sẽ đi làm ở Bắc Kinh rồi.', zh:'下个星期我哥哥就要去北京工作了。', py:'Xià ge xīngqī wǒ gēge jiù yào qù Běijīng gōngzuò le.'},
  {vi:'Con đã chơi cả buổi chiều rồi, mau đi viết chữ Hán đi!', zh:'你都玩儿了一个下午了，快去写汉字吧！', py:'Nǐ dōu wánrle yí ge xiàwǔ le, kuài qù xiě Hànzì ba!'},
  {vi:'Em gái tôi cao hơn tôi, cũng đẹp hơn.', zh:'我妹妹比我高，也比我更漂亮。', py:'Wǒ mèimei bǐ wǒ gāo, yě bǐ wǒ gèng piàoliang.'},
  {vi:'Trời âm u cả ngày nhưng không mưa.', zh:'天阴了一天，但是没有下雨。', py:'Tiān yīnle yì tiān, dànshì méiyǒu xià yǔ.'},
];

// ══════════════════════════════════════════
// LUYỆN DỊCH (chiều Trung→Việt) — noi dung KHAC voi chieu Viet->Trung o tren
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:'Vé dịp năm mới rất khó mua, tôi đã ra ga tàu ba lần mà vẫn chưa mua được.', zh:'新年的票很难买，我去了三次火车站，还没买到。', py:'Xīnnián de piào hěn nán mǎi, wǒ qùle sān cì huǒchēzhàn, hái méi mǎidào.'},
  {vi:'Mình sắp đến nhà bạn rồi, bạn đợi mình ở cửa một chút nhé.', zh:'我快到你家了，你在门口等我一下。', py:'Wǒ kuài dào nǐ jiā le, nǐ zài ménkǒu děng wǒ yíxià.'},
  {vi:'Đã trưa rồi mà anh ấy vẫn chưa ngủ dậy.', zh:'都中午了，他还没起床。', py:'Dōu zhōngwǔ le, tā hái méi qǐchuáng.'},
];
