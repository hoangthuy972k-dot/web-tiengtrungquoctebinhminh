// HSK 2 (3.0 Mới) · Bài 10 · 就要考试了
// Nguồn: Giáo trình New HSK 2 (bản Trung - Việt), bài 10, trang 084-093.

var vocabData = [
  {
    "n": 1,
    "zh": "开学",
    "py": "kāixué",
    "pos": "Động từ",
    "vn": "khai giảng, vào năm học",
    "hv": "khai học",
    "em": "🏫",
    "img": "/images/hsk2v3-bai-10/kaixue.jpg",
    "lesson": 1,
    "ex_zh": "小明，你们明天开学，你准备好了吗？",
    "ex_py": "Xiǎomíng, nǐmen míngtiān kāixué, nǐ zhǔnbèi hǎo le ma?",
    "ex_vn": "Tiểu Minh, ngày mai khai giảng rồi, con đã chuẩn bị xong chưa?",
    "exList": [
      {
        "zh": "小明，你们明天开学，你准备好了吗？",
        "py": "Xiǎomíng, nǐmen míngtiān kāixué, nǐ zhǔnbèi hǎo le ma?",
        "vn": "Tiểu Minh, ngày mai khai giảng rồi, con đã chuẩn bị xong chưa?"
      },
      {
        "zh": "快要开学了，爸爸帮弟弟准备书包。",
        "py": "Kuàiyào kāixué le, bàba bāng dìdi zhǔnbèi shūbāo.",
        "vn": "Sắp khai giảng rồi, bố giúp em trai chuẩn bị cặp sách."
      }
    ],
    "hanzi": [
      {
        "c": "学",
        "p": "xué",
        "type": "会意字 · Chữ hội ý",
        "st": 8,
        "ord": "⺍ → 冖 → 子",
        "rad": "子 (tử – con)",
        "mean": "học",
        "tip": "开学 = mở đầu năm học; 上学 = đi học.",
        "cf": "",
        "w": "开学 / 上学 / 学生"
      }
    ],
    "colloFull": [
      {
        "zh": "快要开学了",
        "py": "kuàiyào kāixué le",
        "vn": "sắp khai giảng rồi"
      },
      {
        "zh": "开学的时候",
        "py": "kāixué de shíhou",
        "vn": "lúc khai giảng"
      },
      {
        "zh": "九月开学",
        "py": "jiǔ yuè kāixué",
        "vn": "tháng chín khai giảng"
      },
      {
        "zh": "开学了",
        "py": "kāixué le",
        "vn": "khai giảng rồi"
      }
    ],
    "patterns": [
      {
        "s": "快要 + 开学 + 了",
        "m": "Sắp khai giảng rồi"
      },
      {
        "s": "开 + 学",
        "m": "Mở (开) việc học (学) — vào năm học mới"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Sắp khai giảng rồi, tôi phải mua vở mới.",
        "answer": "快要开学了，我要买新本子。",
        "answerPy": "Kuàiyào kāixué le, wǒ yào mǎi xīn běnzi.",
        "note": "快要 + động từ + 了 — hai vế phải đủ.",
        "pair": "快要……了"
      },
      {
        "promptLang": "vi",
        "prompt": "Lúc khai giảng thầy giới thiệu bạn học mới cho chúng tôi.",
        "answer": "开学的时候，老师给我们介绍了新同学。",
        "answerPy": "Kāixué de shíhou, lǎoshī gěi wǒmen jièshàole xīn tóngxué.",
        "note": "给 + người + 介绍 — giới thiệu cho ai.",
        "pair": "……的时候"
      }
    ]
  },
  {
    "n": 2,
    "zh": "门",
    "py": "mén",
    "pos": "Danh từ",
    "vn": "cửa",
    "hv": "môn",
    "em": "🚪",
    "img": "/images/hsk2v3-bai-10/men.jpg",
    "lesson": 1,
    "ex_zh": "书包在门后面。",
    "ex_py": "Shūbāo zài mén hòumiàn.",
    "ex_vn": "Nó ở phía sau cửa.",
    "exList": [
      {
        "zh": "书包在门后面。",
        "py": "Shūbāo zài mén hòumiàn.",
        "vn": "Nó ở phía sau cửa."
      },
      {
        "zh": "门口有家奶茶店。",
        "py": "Ménkǒu yǒu jiā nǎichádiàn.",
        "vn": "Trước cửa có quán trà sữa."
      }
    ],
    "hanzi": [
      {
        "c": "门",
        "p": "mén",
        "type": "象形字 · Chữ tượng hình",
        "st": 3,
        "ord": "丶 → 丨 → 乛",
        "rad": "门 (môn – cửa)",
        "mean": "cửa",
        "tip": "Ôn lại 门口 (bài 9): chỗ cửa ra vào.",
        "cf": "",
        "w": "门 / 门口 / 开门"
      }
    ],
    "colloFull": [
      {
        "zh": "打开门",
        "py": "dǎkāi mén",
        "vn": "mở cửa"
      },
      {
        "zh": "门口",
        "py": "ménkǒu",
        "vn": "cổng, cửa ra vào"
      },
      {
        "zh": "门前",
        "py": "mén qián",
        "vn": "trước cửa"
      },
      {
        "zh": "教室的门",
        "py": "jiàoshì de mén",
        "vn": "cửa phòng học"
      }
    ],
    "patterns": [
      {
        "s": "打开 + 门",
        "m": "Mở cửa"
      },
      {
        "s": "门 là chữ tượng hình — hai nét dọc là hai cánh cửa"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Nóng quá, bạn mở cửa phòng học ra đi.",
        "answer": "太热了，你打开教室的门吧。",
        "answerPy": "Tài rè le, nǐ dǎkāi jiàoshì de mén ba.",
        "note": "打开门 — mở cửa.",
        "pair": "太……了"
      },
      {
        "promptLang": "vi",
        "prompt": "Tôi đợi bạn trước cửa nhé.",
        "answer": "我在门前等你吧。",
        "answerPy": "Wǒ zài mén qián děng nǐ ba.",
        "note": "门 là chữ tượng hình — hai cánh cửa.",
        "pair": "在……等"
      }
    ]
  },
  {
    "n": 3,
    "zh": "后面",
    "py": "hòumiàn",
    "pos": "Danh từ",
    "vn": "phía sau, đằng sau",
    "hv": "hậu diện",
    "em": "⬇️",
    "img": "/images/hsk2v3-bai-10/houmian.jpg",
    "lesson": 1,
    "ex_zh": "书包在门后面。",
    "ex_py": "Shūbāo zài mén hòumiàn.",
    "ex_vn": "Cặp sách ở phía sau cửa.",
    "exList": [
      {
        "zh": "书包在门后面。",
        "py": "Shūbāo zài mén hòumiàn.",
        "vn": "Cặp sách ở phía sau cửa."
      },
      {
        "zh": "我们公司后面有一个商店。",
        "py": "Wǒmen gōngsī hòumiàn yǒu yí ge shāngdiàn.",
        "vn": "Phía sau công ty chúng tôi có một cửa hàng."
      }
    ],
    "hanzi": [
      {
        "c": "后",
        "p": "hòu",
        "type": "会意字 · Chữ hội ý",
        "st": 6,
        "ord": "厂 → 一 → 口",
        "rad": "口 (khẩu)",
        "mean": "sau",
        "tip": "Cùng nhóm phương vị với 旁边 (bài 9), 左边/右边 (bài 8).",
        "cf": "前面 (qiánmiàn – phía trước)",
        "w": "后面 / 以后 / 后边"
      }
    ],
    "colloFull": [
      {
        "zh": "学校后面",
        "py": "xuéxiào hòumiàn",
        "vn": "sau trường"
      },
      {
        "zh": "在后面",
        "py": "zài hòumiàn",
        "vn": "ở phía sau"
      },
      {
        "zh": "我后面",
        "py": "wǒ hòumiàn",
        "vn": "phía sau tôi"
      },
      {
        "zh": "后面有",
        "py": "hòumiàn yǒu",
        "vn": "phía sau có"
      }
    ],
    "patterns": [
      {
        "s": "danh từ + 后面",
        "m": "Phía sau cái gì: 学校后面"
      },
      {
        "s": "后面 ↔ 前面",
        "m": "Sau ↔ trước"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Phía sau trường có một quán cà phê.",
        "answer": "学校后面有一个咖啡店。",
        "answerPy": "Xuéxiào hòumiàn yǒu yí ge kāfēi diàn.",
        "note": "后面 ↔ 前面 — sau và trước.",
        "pair": "nơi chốn + 有 + N"
      },
      {
        "promptLang": "vi",
        "prompt": "Cậu bé ngồi phía sau tôi cao hơn tôi.",
        "answer": "坐在我后面的男孩儿比我高。",
        "answerPy": "Zuò zài wǒ hòumiàn de nánháir bǐ wǒ gāo.",
        "note": "Câu 比 không dùng 很.",
        "pair": "A 比 B + Adj"
      }
    ]
  },
  {
    "n": 4,
    "zh": "笔",
    "py": "bǐ",
    "pos": "Danh từ",
    "vn": "bút, cây viết",
    "hv": "bút",
    "em": "🖊️",
    "img": "/images/hsk2v3-bai-10/bi.jpg",
    "lesson": 1,
    "ex_zh": "书在床上，笔在桌子上。",
    "ex_py": "Shū zài chuáng shang, bǐ zài zhuōzi shang.",
    "ex_vn": "Sách ở trên giường, bút ở trên bàn.",
    "exList": [
      {
        "zh": "书在床上，笔在桌子上。",
        "py": "Shū zài chuáng shang, bǐ zài zhuōzi shang.",
        "vn": "Sách ở trên giường, bút ở trên bàn."
      },
      {
        "zh": "爸爸帮弟弟准备书包、本子和笔。",
        "py": "Bàba bāng dìdi zhǔnbèi shūbāo, běnzi hé bǐ.",
        "vn": "Bố giúp em trai chuẩn bị cặp sách, vở và bút."
      }
    ],
    "hanzi": [
      {
        "c": "笔",
        "p": "bǐ",
        "type": "会意字 · Chữ hội ý",
        "st": 10,
        "ord": "⺮ → 毛",
        "rad": "⺮ (trúc – tre)",
        "mean": "bút",
        "tip": "Ôn lại 画笔 (bài 6) — bút vẽ.",
        "cf": "",
        "w": "笔 / 画笔 / 铅笔"
      }
    ],
    "colloFull": [
      {
        "zh": "买笔",
        "py": "mǎi bǐ",
        "vn": "mua bút"
      },
      {
        "zh": "画笔",
        "py": "huàbǐ",
        "vn": "cọ vẽ"
      },
      {
        "zh": "用笔写",
        "py": "yòng bǐ xiě",
        "vn": "viết bằng bút"
      },
      {
        "zh": "我的笔",
        "py": "wǒ de bǐ",
        "vn": "cây bút của tôi"
      }
    ],
    "patterns": [
      {
        "s": "用 + 笔 + 写",
        "m": "Viết bằng bút"
      },
      {
        "s": "笔 nằm trong 画笔 — cùng một chữ 笔"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tôi viết chữ Hán bằng bút này.",
        "answer": "我用这个笔写汉字。",
        "answerPy": "Wǒ yòng zhège bǐ xiě Hànzì.",
        "note": "用 + công cụ + động từ.",
        "pair": "用……V"
      },
      {
        "promptLang": "vi",
        "prompt": "Sắp khai giảng rồi, tôi muốn mua bút và vở.",
        "answer": "快要开学了，我想买笔和本子。",
        "answerPy": "Kuàiyào kāixué le, wǒ xiǎng mǎi bǐ hé běnzi.",
        "note": "和 chỉ nối danh từ với danh từ.",
        "pair": "快要……了"
      }
    ]
  },
  {
    "n": 5,
    "zh": "帮",
    "py": "bāng",
    "pos": "Động từ",
    "vn": "giúp, giúp đỡ",
    "hv": "bang",
    "em": "🤝",
    "img": "/images/hsk2v3-bai-10/bang.jpg",
    "lesson": 1,
    "ex_zh": "这次爸爸帮你，下次你自己准备，好不好？",
    "ex_py": "Zhè cì bàba bāng nǐ, xià cì nǐ zìjǐ zhǔnbèi, hǎo bu hǎo?",
    "ex_vn": "Lần này bố đã giúp con. Lần sau con phải tự chuẩn bị nhé, được không?",
    "exList": [
      {
        "zh": "这次爸爸帮你，下次你自己准备，好不好？",
        "py": "Zhè cì bàba bāng nǐ, xià cì nǐ zìjǐ zhǔnbèi, hǎo bu hǎo?",
        "vn": "Lần này bố đã giúp con. Lần sau con phải tự chuẩn bị nhé, được không?"
      },
      {
        "zh": "你能帮我叫一下白家月吗？",
        "py": "Nǐ néng bāng wǒ jiào yíxià Bái Jiāyuè ma?",
        "vn": "Bạn có thể giúp mình gọi Bạch Gia Nguyệt một chút không?"
      }
    ],
    "hanzi": [
      {
        "c": "帮",
        "p": "bāng",
        "type": "形声字 · Chữ hình thanh",
        "st": 9,
        "ord": "邦 → 巾",
        "rad": "巾 (cân – khăn)",
        "mean": "giúp đỡ",
        "tip": "帮 + người + làm việc gì: 帮我买、帮他准备.",
        "cf": "",
        "w": "帮 / 帮我 / 帮助"
      }
    ],
    "colloFull": [
      {
        "zh": "帮我",
        "py": "bāng wǒ",
        "vn": "giúp tôi"
      },
      {
        "zh": "帮忙",
        "py": "bāngmáng",
        "vn": "giúp đỡ"
      },
      {
        "zh": "帮你做",
        "py": "bāng nǐ zuò",
        "vn": "giúp bạn làm"
      },
      {
        "zh": "帮他考试",
        "py": "bāng tā kǎoshì",
        "vn": "giúp anh ấy ôn thi"
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
        "prompt": "Bạn giúp tôi xem một chút câu này nhé.",
        "answer": "你帮我看一下这个题吧。",
        "answerPy": "Nǐ bāng wǒ kàn yíxià zhège tí ba.",
        "note": "帮 + người + động từ — giúp ai làm gì.",
        "pair": "帮 + người + V"
      },
      {
        "promptLang": "vi",
        "prompt": "Vì tôi không hiểu nên chị tôi giúp tôi.",
        "answer": "因为我不懂，所以我姐姐帮我。",
        "answerPy": "Yīnwèi wǒ bù dǒng, suǒyǐ wǒ jiějie bāng wǒ.",
        "note": "帮 (có tân ngữ) và 帮忙 (từ ly hợp).",
        "pair": "因为……所以……"
      }
    ]
  },
  {
    "n": 6,
    "zh": "考试",
    "py": "kǎoshì",
    "pos": "Động từ / Danh từ",
    "vn": "thi, kiểm tra; kỳ thi",
    "hv": "khảo thí",
    "em": "📝",
    "img": "/images/hsk2v3-bai-10/kaoshi.jpg",
    "lesson": 2,
    "ex_zh": "明天考试，我在看书呢。",
    "ex_py": "Míngtiān kǎoshì, wǒ zài kàn shū ne.",
    "ex_vn": "Ngày mai con thi, nên con đang học bài.",
    "exList": [
      {
        "zh": "明天考试，我在看书呢。",
        "py": "Míngtiān kǎoshì, wǒ zài kàn shū ne.",
        "vn": "Ngày mai con thi, nên con đang học bài."
      },
      {
        "zh": "我们下星期就要考试了。",
        "py": "Wǒmen xià xīngqī jiù yào kǎoshì le.",
        "vn": "Tuần sau chúng tôi sắp thi rồi."
      }
    ],
    "hanzi": [
      {
        "c": "试",
        "p": "shì",
        "type": "形声字 · Chữ hình thanh",
        "st": 8,
        "ord": "讠 → 式",
        "rad": "讠 (ngôn – lời nói)",
        "mean": "thử; thi",
        "tip": "考试 vừa là động từ vừa là danh từ; 试 cũng có trong 试试 (thử).",
        "cf": "",
        "w": "考试 / 准备考试 / 试试"
      }
    ],
    "colloFull": [
      {
        "zh": "准备考试",
        "py": "zhǔnbèi kǎoshì",
        "vn": "ôn thi"
      },
      {
        "zh": "考试的时候",
        "py": "kǎoshì de shíhou",
        "vn": "lúc thi"
      },
      {
        "zh": "快要考试了",
        "py": "kuàiyào kǎoshì le",
        "vn": "sắp thi rồi"
      },
      {
        "zh": "考完试",
        "py": "kǎo wán shì",
        "vn": "thi xong"
      }
    ],
    "patterns": [
      {
        "s": "快要 + 考试 + 了",
        "m": "Sắp thi rồi"
      },
      {
        "s": "考 + 试",
        "m": "Kiểm (考) tra (试) — 考试 là từ ly hợp: 考了一次试"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tuần sau sắp thi rồi, tôi phải ôn bài.",
        "answer": "下周快要考试了，我要准备考试。",
        "answerPy": "Xià zhōu kuàiyào kǎoshì le, wǒ yào zhǔnbèi kǎoshì.",
        "note": "准备考试 — ôn thi.",
        "pair": "快要……了"
      },
      {
        "promptLang": "vi",
        "prompt": "Lúc thi đừng nói chuyện.",
        "answer": "考试的时候别说话。",
        "answerPy": "Kǎoshì de shíhou bié shuōhuà.",
        "note": "考试 là từ ly hợp: 考了一次试.",
        "pair": "……的时候"
      }
    ]
  },
  {
    "n": 7,
    "zh": "词",
    "py": "cí",
    "pos": "Danh từ",
    "vn": "từ (từ vựng)",
    "hv": "từ",
    "em": "🔤",
    "img": "/images/hsk2v3-bai-10/ci.jpg",
    "lesson": 2,
    "ex_zh": "这些词要好好看看。",
    "ex_py": "Zhèxiē cí yào hǎohāo kànkan.",
    "ex_vn": "Con nên xem lại những từ này thật kỹ nhé.",
    "exList": [
      {
        "zh": "这些词要好好看看。",
        "py": "Zhèxiē cí yào hǎohāo kànkan.",
        "vn": "Con nên xem lại những từ này thật kỹ nhé."
      },
      {
        "zh": "这些词的意思我都懂了。",
        "py": "Zhèxiē cí de yìsi wǒ dōu dǒng le.",
        "vn": "Nghĩa của những từ này con đều hiểu hết rồi."
      }
    ],
    "hanzi": [
      {
        "c": "词",
        "p": "cí",
        "type": "形声字 · Chữ hình thanh",
        "st": 7,
        "ord": "讠 → 司",
        "rad": "讠 (ngôn – lời nói)",
        "mean": "từ, lời",
        "tip": "生词 = từ mới — chính là phần 生词 trong sách.",
        "cf": "",
        "w": "词 / 生词 / 词语"
      }
    ],
    "colloFull": [
      {
        "zh": "新词",
        "py": "xīn cí",
        "vn": "từ mới"
      },
      {
        "zh": "这个词",
        "py": "zhège cí",
        "vn": "từ này"
      },
      {
        "zh": "词的意思",
        "py": "cí de yìsi",
        "vn": "nghĩa của từ"
      },
      {
        "zh": "很多词",
        "py": "hěn duō cí",
        "vn": "rất nhiều từ"
      }
    ],
    "patterns": [
      {
        "s": "……的意思",
        "m": "Nghĩa của từ nào: 这个词的意思"
      },
      {
        "s": "词 (từ) khác 字 (chữ) — một 词 có thể gồm nhiều 字"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Từ này nghĩa là gì?",
        "answer": "这个词是什么意思？",
        "answerPy": "Zhège cí shì shénme yìsi?",
        "note": "词 (từ) khác 字 (chữ).",
        "pair": "……什么意思？"
      },
      {
        "promptLang": "vi",
        "prompt": "Hôm nay chúng tôi học rất nhiều từ mới.",
        "answer": "今天我们学了很多新词。",
        "answerPy": "Jīntiān wǒmen xuéle hěn duō xīn cí.",
        "note": "新词 — từ mới.",
        "pair": "……了……"
      }
    ]
  },
  {
    "n": 8,
    "zh": "本子",
    "py": "běnzi",
    "pos": "Danh từ",
    "vn": "vở, tập ghi chép",
    "hv": "bản tử",
    "em": "📓",
    "img": "/images/hsk2v3-bai-10/benzi.jpg",
    "lesson": 2,
    "ex_zh": "你的本子呢？本子上做错的题也要看一看。",
    "ex_py": "Nǐ de běnzi ne? Běnzi shang zuòcuò de tí yě yào kàn yi kàn.",
    "ex_vn": "Vở của con đâu? Những câu làm sai trong vở con cũng cần xem lại nhé.",
    "exList": [
      {
        "zh": "你的本子呢？本子上做错的题也要看一看。",
        "py": "Nǐ de běnzi ne? Běnzi shang zuòcuò de tí yě yào kàn yi kàn.",
        "vn": "Vở của con đâu? Những câu làm sai trong vở con cũng cần xem lại nhé."
      },
      {
        "zh": "爸爸帮弟弟准备书包、本子和笔。",
        "py": "Bàba bāng dìdi zhǔnbèi shūbāo, běnzi hé bǐ.",
        "vn": "Bố giúp em trai chuẩn bị cặp sách, vở và bút."
      }
    ],
    "hanzi": [
      {
        "c": "本",
        "p": "běn",
        "type": "指事字 · Chữ chỉ sự",
        "st": 5,
        "ord": "木 → 一",
        "rad": "木 (mộc – cây)",
        "mean": "gốc; quyển",
        "tip": "本 cũng là lượng từ của sách: 一本书.",
        "cf": "",
        "w": "本子 / 一本书 / 课本"
      }
    ],
    "colloFull": [
      {
        "zh": "一个本子",
        "py": "yí gè běnzi",
        "vn": "một quyển vở"
      },
      {
        "zh": "买本子",
        "py": "mǎi běnzi",
        "vn": "mua vở"
      },
      {
        "zh": "在本子上写",
        "py": "zài běnzi shàng xiě",
        "vn": "viết vào vở"
      },
      {
        "zh": "我的本子",
        "py": "wǒ de běnzi",
        "vn": "quyển vở của tôi"
      }
    ],
    "patterns": [
      {
        "s": "在 + 本子 + 上 + 写",
        "m": "Viết vào vở"
      },
      {
        "s": "本 + 子",
        "m": "子 là đuôi từ đọc nhẹ, giống 桌子 · 椅子"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tôi viết từ mới vào vở.",
        "answer": "我在本子上写新词。",
        "answerPy": "Wǒ zài běnzi shang xiě xīn cí.",
        "note": "在 + 本子 + 上 + 写 — viết vào vở.",
        "pair": "在……上写"
      },
      {
        "promptLang": "vi",
        "prompt": "Quyển vở này là của ai?",
        "answer": "这个本子是谁的？",
        "answerPy": "Zhège běnzi shì shéi de?",
        "note": "本 + 子 — 子 là đuôi từ đọc nhẹ.",
        "pair": "……是谁的？"
      }
    ]
  },
  {
    "n": 9,
    "zh": "错",
    "py": "cuò",
    "pos": "Tính từ",
    "vn": "sai, nhầm",
    "hv": "thác",
    "em": "❌",
    "img": "/images/hsk2v3-bai-10/cuo.jpg",
    "lesson": 2,
    "ex_zh": "本子上做错的题也要看一看。",
    "ex_py": "Běnzi shang zuòcuò de tí yě yào kàn yi kàn.",
    "ex_vn": "Những câu làm sai trong vở cũng cần xem lại.",
    "exList": [
      {
        "zh": "本子上做错的题也要看一看。",
        "py": "Běnzi shang zuòcuò de tí yě yào kàn yi kàn.",
        "vn": "Những câu làm sai trong vở cũng cần xem lại."
      },
      {
        "zh": "这个字写错了，左边是“口”，不是“日”。",
        "py": "Zhège zì xiěcuò le, zuǒbian shì “kǒu”, bú shì “rì”.",
        "vn": "Chữ này viết sai rồi, bên trái là “口”, không phải “日”."
      }
    ],
    "hanzi": [
      {
        "c": "错",
        "p": "cuò",
        "type": "形声字 · Chữ hình thanh",
        "st": 13,
        "ord": "钅 → 昔",
        "rad": "钅 (kim – kim loại)",
        "mean": "sai, nhầm",
        "tip": "不错 nghĩa là \"khá tốt\", không phải \"không sai\".",
        "cf": "对 (duì – đúng)",
        "w": "错 / 做错 / 写错 / 不错"
      }
    ],
    "colloFull": [
      {
        "zh": "写错了",
        "py": "xiě cuò le",
        "vn": "viết sai rồi"
      },
      {
        "zh": "不错",
        "py": "búcuò",
        "vn": "khá tốt"
      },
      {
        "zh": "说错",
        "py": "shuō cuò",
        "vn": "nói sai"
      },
      {
        "zh": "做错题",
        "py": "zuò cuò tí",
        "vn": "làm sai bài"
      }
    ],
    "patterns": [
      {
        "s": "động từ + 错 + 了",
        "m": "Làm sai việc gì: 我写错了"
      },
      {
        "s": "错 (sai) nhưng 不错 lại là \"khá tốt\" — chú ý không nhầm"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Xin lỗi, tôi viết sai rồi.",
        "answer": "对不起，我写错了。",
        "answerPy": "Duìbuqǐ, wǒ xiěcuò le.",
        "note": "động từ + 错 + 了 — làm sai việc gì.",
        "pair": "V + 错 + 了"
      },
      {
        "promptLang": "vi",
        "prompt": "Tuy tôi làm sai hai câu nhưng thầy vẫn nói tôi làm khá tốt.",
        "answer": "虽然我做错了两个题，但是老师还说我做得不错。",
        "answerPy": "Suīrán wǒ zuòcuòle liǎng ge tí, dànshì lǎoshī hái shuō wǒ zuò de búcuò.",
        "note": "错 là sai, nhưng 不错 lại là khá tốt.",
        "pair": "虽然……但是……"
      }
    ]
  },
  {
    "n": 10,
    "zh": "题",
    "py": "tí",
    "pos": "Danh từ",
    "vn": "câu hỏi, bài tập, đề",
    "hv": "đề",
    "em": "❓",
    "img": "/images/hsk2v3-bai-10/ti.jpg",
    "lesson": 2,
    "ex_zh": "本子上做错的题也要看一看。",
    "ex_py": "Běnzi shang zuòcuò de tí yě yào kàn yi kàn.",
    "ex_vn": "Những câu làm sai trong vở cũng cần xem lại.",
    "exList": [
      {
        "zh": "本子上做错的题也要看一看。",
        "py": "Běnzi shang zuòcuò de tí yě yào kàn yi kàn.",
        "vn": "Những câu làm sai trong vở cũng cần xem lại."
      },
      {
        "zh": "妈妈让我看书、看做错的题。",
        "py": "Māma ràng wǒ kàn shū, kàn zuòcuò de tí.",
        "vn": "Mẹ bảo tôi học bài và xem lại những câu làm sai."
      }
    ],
    "hanzi": [
      {
        "c": "题",
        "p": "tí",
        "type": "形声字 · Chữ hình thanh",
        "st": 15,
        "ord": "是 → 页",
        "rad": "页 (hiệt – đầu)",
        "mean": "đề, câu hỏi",
        "tip": "做题 = làm bài tập; 做错题 = làm sai bài.",
        "cf": "",
        "w": "题 / 做题 / 问题"
      }
    ],
    "colloFull": [
      {
        "zh": "做题",
        "py": "zuò tí",
        "vn": "làm bài tập"
      },
      {
        "zh": "一个题",
        "py": "yí gè tí",
        "vn": "một câu hỏi"
      },
      {
        "zh": "这个题",
        "py": "zhège tí",
        "vn": "câu hỏi này"
      },
      {
        "zh": "做错题",
        "py": "zuò cuò tí",
        "vn": "làm sai bài"
      }
    ],
    "patterns": [
      {
        "s": "做 + 题",
        "m": "Làm bài tập, giải bài"
      },
      {
        "s": "题 (câu hỏi, bài tập) và 问题 (vấn đề, câu hỏi)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Câu này khó quá, tôi không biết làm.",
        "answer": "这个题太难了，我不会做。",
        "answerPy": "Zhège tí tài nán le, wǒ bú huì zuò.",
        "note": "做题 — làm bài tập.",
        "pair": "太……了"
      },
      {
        "promptLang": "vi",
        "prompt": "Bạn giúp tôi xem xem tôi làm sai câu nào.",
        "answer": "你帮我看看我做错了哪个题。",
        "answerPy": "Nǐ bāng wǒ kànkan wǒ zuòcuòle nǎge tí.",
        "note": "题 (bài tập) và 问题 (vấn đề).",
        "pair": "帮 + người + V"
      }
    ]
  },
  {
    "n": 11,
    "zh": "还是",
    "py": "háishi",
    "pos": "Liên từ",
    "vn": "hay, hay là (trong câu hỏi lựa chọn)",
    "hv": "hoàn thị",
    "em": "🔀",
    "lesson": 2,
    "ex_zh": "妈妈，是您准备考试还是我准备考试？",
    "ex_py": "Māma, shì nín zhǔnbèi kǎoshì háishi wǒ zhǔnbèi kǎoshì?",
    "ex_vn": "Mẹ ơi, là mẹ chuẩn bị thi hay là con chuẩn bị thi vậy?",
    "exList": [
      {
        "zh": "妈妈，是您准备考试还是我准备考试？",
        "py": "Māma, shì nín zhǔnbèi kǎoshì háishi wǒ zhǔnbèi kǎoshì?",
        "vn": "Mẹ ơi, là mẹ chuẩn bị thi hay là con chuẩn bị thi vậy?"
      },
      {
        "zh": "我们什么时候去看电影？今天还是明天？",
        "py": "Wǒmen shénme shíhou qù kàn diànyǐng? Jīntiān háishi míngtiān?",
        "vn": "Khi nào chúng ta đi xem phim? Hôm nay hay ngày mai?"
      }
    ],
    "hanzi": [
      {
        "c": "还",
        "p": "hái",
        "type": "形声字 · Chữ hình thanh",
        "st": 7,
        "ord": "不 → 辶",
        "rad": "辶 (sước – đi)",
        "mean": "còn, vẫn; hay là",
        "tip": "还是 trong câu hỏi = \"hay là\"; trong câu trần thuật = \"vẫn nên\".",
        "cf": "或者 (huòzhě – hoặc, dùng trong câu trần thuật)",
        "w": "还是 / A还是B / 还有"
      }
    ],
    "colloFull": [
      {
        "zh": "考试还是休息",
        "py": "kǎoshì háishi xiūxi",
        "vn": "thi hay nghỉ"
      },
      {
        "zh": "还是这个好",
        "py": "háishi zhège hǎo",
        "vn": "vẫn là cái này tốt hơn"
      },
      {
        "zh": "你还是他",
        "py": "nǐ háishi tā",
        "vn": "bạn hay anh ấy"
      },
      {
        "zh": "还是去吧",
        "py": "háishi qù ba",
        "vn": "thôi thì cứ đi"
      }
    ],
    "patterns": [
      {
        "s": "A 还是 B？",
        "m": "Câu hỏi lựa chọn: 你考试还是休息？"
      },
      {
        "s": "还是 + động từ",
        "m": "Thôi thì … — nêu lựa chọn cuối cùng: 还是去吧"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Chiều nay bạn ôn thi hay nghỉ ngơi?",
        "answer": "今天下午你准备考试还是休息？",
        "answerPy": "Jīntiān xiàwǔ nǐ zhǔnbèi kǎoshì háishi xiūxi?",
        "note": "Câu đã có 还是 thì không thêm 吗.",
        "pair": "A 还是 B？"
      },
      {
        "promptLang": "vi",
        "prompt": "Muộn rồi, thôi thì mai chúng ta đi vậy.",
        "answer": "很晚了，我们还是明天去吧。",
        "answerPy": "Hěn wǎn le, wǒmen háishi míngtiān qù ba.",
        "note": "还是 + động từ — thôi thì, nêu lựa chọn cuối cùng.",
        "pair": "还是……吧"
      }
    ]
  },
  {
    "n": 12,
    "zh": "考",
    "py": "kǎo",
    "pos": "Động từ",
    "vn": "thi, kiểm tra",
    "hv": "khảo",
    "em": "✏️",
    "img": "/images/hsk2v3-bai-10/kao.jpg",
    "lesson": 3,
    "ex_zh": "今天考试考得怎么样？",
    "ex_py": "Jīntiān kǎoshì kǎo de zěnmeyàng?",
    "ex_vn": "Hôm nay con thi thế nào?",
    "exList": [
      {
        "zh": "今天考试考得怎么样？",
        "py": "Jīntiān kǎoshì kǎo de zěnmeyàng?",
        "vn": "Hôm nay con thi thế nào?"
      },
      {
        "zh": "我觉得比上次好。",
        "py": "Wǒ juéde bǐ shàng cì hǎo.",
        "vn": "Con thấy tốt hơn lần trước."
      }
    ],
    "hanzi": [
      {
        "c": "考",
        "p": "kǎo",
        "type": "形声字 · Chữ hình thanh",
        "st": 6,
        "ord": "土 → 丿 → 万",
        "rad": "耂 (lão)",
        "mean": "thi, khảo",
        "tip": "考试 là từ li hợp: 考试考得怎么样 (ôn bài 7).",
        "cf": "",
        "w": "考 / 考试 / 考得好"
      }
    ],
    "colloFull": [
      {
        "zh": "考试",
        "py": "kǎoshì",
        "vn": "thi"
      },
      {
        "zh": "考得很好",
        "py": "kǎo de hěn hǎo",
        "vn": "thi rất tốt"
      },
      {
        "zh": "考大学",
        "py": "kǎo dàxué",
        "vn": "thi đại học"
      },
      {
        "zh": "考了一次",
        "py": "kǎo le yí cì",
        "vn": "đã thi một lần"
      }
    ],
    "patterns": [
      {
        "s": "考 + 大学",
        "m": "Thi đại học"
      },
      {
        "s": "考 + 得 + tính từ",
        "m": "Thi thế nào: 考得很好"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Lần này em trai tôi thi rất tốt.",
        "answer": "这次我弟弟考得很好。",
        "answerPy": "Zhè cì wǒ dìdi kǎo de hěn hǎo.",
        "note": "考 + 得 + tính từ — thi thế nào.",
        "pair": "V + 得 + Adj"
      },
      {
        "promptLang": "vi",
        "prompt": "Sang năm chị tôi thi đại học.",
        "answer": "明年我姐姐考大学。",
        "answerPy": "Míngnián wǒ jiějie kǎo dàxué.",
        "note": "考大学 — thi đại học.",
        "pair": "考 + N"
      }
    ]
  },
  {
    "n": 13,
    "zh": "快要",
    "py": "kuàiyào",
    "pos": "Phó từ",
    "vn": "sắp, chuẩn bị",
    "hv": "khoái yếu",
    "em": "⏳",
    "lesson": 3,
    "ex_zh": "饭菜快要做好了。",
    "ex_py": "Fàncài kuàiyào zuòhǎo le.",
    "ex_vn": "Cơm sắp nấu xong rồi.",
    "exList": [
      {
        "zh": "饭菜快要做好了。",
        "py": "Fàncài kuàiyào zuòhǎo le.",
        "vn": "Cơm sắp nấu xong rồi."
      },
      {
        "zh": "快要开学了，爸爸帮弟弟准备书包。",
        "py": "Kuàiyào kāixué le, bàba bāng dìdi zhǔnbèi shūbāo.",
        "vn": "Sắp khai giảng rồi, bố giúp em trai chuẩn bị cặp sách."
      }
    ],
    "hanzi": [
      {
        "c": "快",
        "p": "kuài",
        "type": "形声字 · Chữ hình thanh",
        "st": 7,
        "ord": "忄 → 夬",
        "rad": "忄 (tâm)",
        "mean": "nhanh; sắp",
        "tip": "快要……了 / 就要……了 — luôn có 了 ở cuối câu.",
        "cf": "就要 (jiù yào)",
        "w": "快要 / 快要……了 / 很快"
      }
    ],
    "colloFull": [
      {
        "zh": "快要开学了",
        "py": "kuàiyào kāixué le",
        "vn": "sắp khai giảng rồi"
      },
      {
        "zh": "快要考试了",
        "py": "kuàiyào kǎoshì le",
        "vn": "sắp thi rồi"
      },
      {
        "zh": "快要下雨了",
        "py": "kuàiyào xià yǔ le",
        "vn": "sắp mưa rồi"
      },
      {
        "zh": "快要到了",
        "py": "kuàiyào dào le",
        "vn": "sắp đến rồi"
      }
    ],
    "patterns": [
      {
        "s": "快要 + động từ + 了",
        "m": "Sắp … rồi — HAI vế phải đủ"
      },
      {
        "s": "✗ 快要考试 → ✓ 快要考试了"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Trời sắp mưa rồi, chúng ta mau về nhà đi.",
        "answer": "快要下雨了，我们快回家吧。",
        "answerPy": "Kuàiyào xià yǔ le, wǒmen kuài huí jiā ba.",
        "note": "✗ 快要下雨 → ✓ 快要下雨了.",
        "pair": "快要……了"
      },
      {
        "promptLang": "vi",
        "prompt": "Tàu sắp đến rồi, bạn chuẩn bị đi.",
        "answer": "火车快要到了，你准备一下吧。",
        "answerPy": "Huǒchē kuàiyào dào le, nǐ zhǔnbèi yíxià ba.",
        "note": "快要到了 — sắp đến rồi.",
        "pair": "快要……了"
      }
    ]
  },
  {
    "n": 14,
    "zh": "笑",
    "py": "xiào",
    "pos": "Động từ",
    "vn": "cười",
    "hv": "tiếu",
    "em": "😄",
    "img": "/images/hsk2v3-bai-10/xiao.jpg",
    "lesson": 4,
    "ex_zh": "我问完，他们都笑了。",
    "ex_py": "Wǒ wènwán, tāmen dōu xiào le.",
    "ex_vn": "Tôi hỏi xong, cả hai đều bật cười.",
    "exList": [
      {
        "zh": "我问完，他们都笑了。",
        "py": "Wǒ wènwán, tāmen dōu xiào le.",
        "vn": "Tôi hỏi xong, cả hai đều bật cười."
      },
      {
        "zh": "看到生日礼物，儿子高兴地笑了。",
        "py": "Kàndào shēngrì lǐwù, érzi gāoxìng de xiào le.",
        "vn": "Nhìn thấy quà sinh nhật, con trai vui vẻ bật cười."
      }
    ],
    "hanzi": [
      {
        "c": "笑",
        "p": "xiào",
        "type": "会意字 · Chữ hội ý",
        "st": 10,
        "ord": "⺮ → 夭",
        "rad": "⺮ (trúc – tre)",
        "mean": "cười",
        "tip": "Ôn lại trợ từ 地 (bài 6): 高兴地笑了.",
        "cf": "哭 (kū – khóc)",
        "w": "笑 / 笑了 / 开玩笑"
      }
    ],
    "colloFull": [
      {
        "zh": "笑了",
        "py": "xiào le",
        "vn": "cười rồi"
      },
      {
        "zh": "高兴地笑",
        "py": "gāoxìng de xiào",
        "vn": "vui vẻ cười"
      },
      {
        "zh": "别笑",
        "py": "bié xiào",
        "vn": "đừng cười"
      },
      {
        "zh": "笑着说",
        "py": "xiào zhe shuō",
        "vn": "vừa cười vừa nói"
      }
    ],
    "patterns": [
      {
        "s": "tính từ + 地 + 笑",
        "m": "Cười một cách nào đó: 高兴地笑"
      },
      {
        "s": "笑 ↔ 哭",
        "m": "Cười ↔ khóc"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Thầy vui vẻ cười và nói: các em làm khá tốt!",
        "answer": "老师高兴地笑着说：你们做得不错！",
        "answerPy": "Lǎoshī gāoxìng de xiàozhe shuō: nǐmen zuò de búcuò!",
        "note": "tính từ + 地 + động từ — trạng ngữ cách thức.",
        "pair": "Adj + 地 + V"
      },
      {
        "promptLang": "vi",
        "prompt": "Tôi làm sai rồi, bạn đừng cười tôi.",
        "answer": "我做错了，你别笑我。",
        "answerPy": "Wǒ zuòcuò le, nǐ bié xiào wǒ.",
        "note": "笑 ↔ 哭 — cười và khóc.",
        "pair": "别 + V"
      }
    ]
  }
];

var wuData = [
  { img: '📝', label: '考试', py: 'kǎoshì', letter: 'A' },
  { img: '📓', label: '本子', py: 'běnzi', letter: 'B' },
  { img: '🖊️', label: '笔', py: 'bǐ', letter: 'C' },
  { img: '❌', label: '错', py: 'cuò', letter: 'D' },
  { img: '🚪', label: '门', py: 'mén', letter: 'E' },
  { img: '😄', label: '笑', py: 'xiào', letter: 'F' }
];

var dialogData = [
  {
    scene: '在房间 · Trong phòng (chuẩn bị đồ đi học)',
    preQuiz: [
      { q: '书包在哪儿？', opts: ['床上', '桌子上', '门后面'], ans: 2 },
      { q: '笔在哪儿？', opts: ['床上', '桌子上', '门后面'], ans: 1 }
    ],
    lines: [
      { sp: 0, zh: '小明，你们明天开学，你准备好了吗？', py: 'Xiǎomíng, nǐmen míngtiān kāixué, nǐ zhǔnbèi hǎo le ma?', vn: 'Tiểu Minh, ngày mai khai giảng rồi, con đã chuẩn bị xong chưa?' },
      { sp: 1, zh: '明天就开学啊？爸爸，我的书包你看见了吗？', py: 'Míngtiān jiù kāixué a? Bàba, wǒ de shūbāo nǐ kànjiàn le ma?', vn: 'Ngày mai khai giảng ạ? Bố ơi, bố có thấy cặp sách của con không?' },
      { sp: 0, zh: '书包在门后面。', py: 'Shūbāo zài mén hòumiàn.', vn: 'Nó ở phía sau cửa.' },
      { sp: 1, zh: '书在哪儿呢？笔呢？', py: 'Shū zài nǎr ne? Bǐ ne?', vn: 'Sách ở đâu nhỉ? Cả bút nữa?' },
      { sp: 0, zh: '书在床上，笔在桌子上。', py: 'Shū zài chuáng shang, bǐ zài zhuōzi shang.', vn: 'Sách ở trên giường, bút ở trên bàn.' },
      { sp: 1, zh: '太好了！现在都准备好了。', py: 'Tài hǎo le! Xiànzài dōu zhǔnbèi hǎo le.', vn: 'May quá! Bây giờ đã chuẩn bị xong rồi.' },
      { sp: 0, zh: '这次爸爸帮你，下次你自己准备，好不好？', py: 'Zhè cì bàba bāng nǐ, xià cì nǐ zìjǐ zhǔnbèi, hǎo bu hǎo?', vn: 'Lần này bố đã giúp con. Lần sau con phải tự chuẩn bị nhé, được không?' },
      { sp: 1, zh: '好！', py: 'Hǎo!', vn: 'Vâng ạ!' }
    ]
  },
  {
    scene: '在房间 · Trong phòng (ôn bài trước kỳ thi)',
    preQuiz: [
      { q: '刘小雪在做什么？', opts: ['看书', '考试', '找本子'], ans: 0 },
      { q: '做错的题在哪儿？', opts: ['书上', '本子上', '书包里'], ans: 1 }
    ],
    lines: [
      { sp: 0, zh: '小雪，你在做什么呢？', py: 'Xiǎoxuě, nǐ zài zuò shénme ne?', vn: 'Tiểu Tuyết, con đang làm gì vậy?' },
      { sp: 1, zh: '明天考试，我在看书呢。', py: 'Míngtiān kǎoshì, wǒ zài kàn shū ne.', vn: 'Ngày mai con thi, nên con đang học bài.' },
      { sp: 0, zh: '这些词要好好看看。', py: 'Zhèxiē cí yào hǎohāo kànkan.', vn: 'Con nên xem lại những từ này thật kỹ nhé.' },
      { sp: 1, zh: '我看过了，意思也都懂了。', py: 'Wǒ kànguo le, yìsi yě dōu dǒng le.', vn: 'Con đã xem rồi, cũng đã hiểu hết nghĩa của chúng rồi.' },
      { sp: 0, zh: '你的本子呢？本子上做错的题也要看一看。', py: 'Nǐ de běnzi ne? Běnzi shang zuòcuò de tí yě yào kàn yi kàn.', vn: 'Vở của con đâu? Những câu làm sai trong vở con cũng cần xem lại nhé.' },
      { sp: 1, zh: '妈妈，是您准备考试还是我准备考试？', py: 'Māma, shì nín zhǔnbèi kǎoshì háishi wǒ zhǔnbèi kǎoshì?', vn: 'Mẹ ơi, là mẹ chuẩn bị thi hay là con chuẩn bị thi vậy?' }
    ]
  },
  {
    scene: '在客厅 · Trong phòng khách (sau khi thi về)',
    preQuiz: [
      { q: '刘小雪考试考得怎么样？', opts: ['很不好', '没上次好', '比上次好'], ans: 2 },
      { q: '王一雪正在做什么？', opts: ['考试', '做菜', '洗手'], ans: 1 }
    ],
    lines: [
      { sp: 1, zh: '妈妈，我回来了！', py: 'Māma, wǒ huílái le!', vn: 'Mẹ ơi, con về rồi!' },
      { sp: 0, zh: '我买了奶茶，就在桌子上，自己去拿吧。', py: 'Wǒ mǎile nǎichá, jiù zài zhuōzi shang, zìjǐ qù ná ba.', vn: 'Mẹ đã mua trà sữa, để ngay trên bàn, con tự đi lấy nhé.' },
      { sp: 1, zh: '谢谢妈妈！', py: 'Xièxie māma!', vn: 'Cảm ơn mẹ!' },
      { sp: 0, zh: '今天考试考得怎么样？', py: 'Jīntiān kǎoshì kǎo de zěnmeyàng?', vn: 'Hôm nay con thi thế nào?' },
      { sp: 1, zh: '我觉得比上次好。', py: 'Wǒ juéde bǐ shàng cì hǎo.', vn: 'Con thấy tốt hơn lần trước.' },
      { sp: 0, zh: '真不错！饭菜快要做好了，你叫弟弟一起去洗手吧。', py: 'Zhēn búcuò! Fàncài kuàiyào zuòhǎo le, nǐ jiào dìdi yìqǐ qù xǐshǒu ba.', vn: 'Thật tuyệt! Cơm sắp nấu xong rồi, con gọi em trai cùng đi rửa tay nhé.' },
      { sp: 2, zh: '妈妈，我是第一名，姐姐还没洗完呢。', py: 'Māma, wǒ shì dì-yī míng, jiějie hái méi xǐwán ne.', vn: 'Mẹ ơi, con xong nhanh nhất, chị vẫn chưa rửa tay xong.' },
      { sp: 0, zh: '你洗得真快啊！', py: 'Nǐ xǐ de zhēn kuài a!', vn: 'Con rửa tay nhanh thật đấy!' }
    ]
  },
  {
    scene: '在房间 · Trong phòng (Lưu Tiểu Tuyết viết nhật ký)',
    preQuiz: [
      { q: '爸爸为什么帮弟弟准备书包、本子和笔？', opts: ['快要上课了', '快要开学了', '快要考试了'], ans: 1 },
      { q: '爸爸、妈妈为什么笑了？', opts: ['孩子们去上学了', '孩子们考得很好', '孩子上学，他们比孩子还忙'], ans: 2 }
    ],
    lines: [
      { sp: 0, zh: '快要开学了，爸爸帮弟弟准备书包、本子和笔。', py: 'Kuàiyào kāixué le, bàba bāng dìdi zhǔnbèi shūbāo, běnzi hé bǐ.', vn: 'Sắp khai giảng rồi, bố giúp em trai chuẩn bị cặp sách, vở và bút.' },
      { sp: 0, zh: '我就要考试了，妈妈让我看书、看做错的题。', py: 'Wǒ jiù yào kǎoshì le, māma ràng wǒ kàn shū, kàn zuòcuò de tí.', vn: 'Tôi sắp thi, mẹ bảo tôi học bài và xem lại những câu làm sai.' },
      { sp: 0, zh: '我们上学，爸爸、妈妈比我们还忙。', py: 'Wǒmen shàngxué, bàba, māma bǐ wǒmen hái máng.', vn: 'Chúng tôi đi học, nhưng bố mẹ còn bận hơn cả chúng tôi.' },
      { sp: 0, zh: '我问他们：“是我和弟弟上学还是你们上学？”我问完，他们都笑了。', py: 'Wǒ wèn tāmen: “Shì wǒ hé dìdi shàngxué háishi nǐmen shàngxué?” Wǒ wènwán, tāmen dōu xiào le.', vn: 'Tôi hỏi bố mẹ rằng: “Là em trai và con đi học hay là bố mẹ đi học vậy?” Tôi hỏi xong, cả hai đều bật cười.' }
    ]
  }
];

var listenData = [
  {
    audio: '小明，你们明天开学，你准备好了吗？爸爸，我的书包你看见了吗？书包在门后面。书在哪儿呢？笔呢？书在床上，笔在桌子上。',
    questions: [
      { q: '书包在哪儿？', opts: ['床上', '桌子上', '门后面'], ans: 2 },
      { q: '笔在哪儿？', opts: ['床上', '桌子上', '门后面'], ans: 1 }
    ]
  },
  {
    audio: '小雪，你在做什么呢？明天考试，我在看书呢。这些词要好好看看。你的本子呢？本子上做错的题也要看一看。',
    questions: [
      { q: '刘小雪在做什么？', opts: ['看书', '考试', '找本子'], ans: 0 },
      { q: '妈妈让她看什么？', opts: ['词和做错的题', '电影', '奶茶'], ans: 0 }
    ]
  },
  {
    audio: '今天考试考得怎么样？我觉得比上次好。真不错！饭菜快要做好了，你叫弟弟一起去洗手吧。',
    questions: [
      { q: '她考得怎么样？', opts: ['很不好', '没上次好', '比上次好'], ans: 2 },
      { q: '饭菜怎么样了？', opts: ['快要做好了', '还没开始做', '已经吃完了'], ans: 0 }
    ]
  },
  {
    audio: '快要开学了，爸爸帮弟弟准备书包、本子和笔。我就要考试了，妈妈让我看书、看做错的题。我们上学，爸爸、妈妈比我们还忙。',
    questions: [
      { q: '爸爸帮弟弟准备什么？', opts: ['书包、本子和笔', '奶茶和蛋糕', '衣服和裤子'], ans: 0 },
      { q: '谁更忙？', opts: ['爸爸妈妈', '孩子们', '一样忙'], ans: 0 }
    ]
  }
];

var matchData = [
  { left: '快要', right: '开学了' },
  { left: '就要', right: '考试了' },
  { left: '书包在', right: '门后面' },
  { left: '做错', right: '的题' },
  { left: '爸爸', right: '帮弟弟准备书包' },
  { left: '是你上学', right: '还是我上学？' }
];

var fillData = [
  { pre: '小雪，你们什么时候', blank: '开学', post: '？你准备好了吗？', hint: '(khai giảng)', ans: '开学' },
  { pre: '我们公司', blank: '后面', post: '有一个商店。', hint: '(phía sau)', ans: '后面' },
  { pre: '不好意思，你能', blank: '帮', post: '我叫一下白家月吗？', hint: '(giúp)', ans: '帮' },
  { pre: '这个字写', blank: '错', post: '了，左边是“口”，不是“日”。', hint: '(sai)', ans: '错' },
  { pre: '看到生日礼物，儿子高兴地', blank: '笑', post: '了。', hint: '(cười)', ans: '笑' },
  { pre: '明天', blank: '考试', post: '，我在看书呢。', hint: '(thi)', ans: '考试' },
  { pre: '饭菜', blank: '快要', post: '做好了。', hint: '(sắp)', ans: '快要' },
  { pre: '是您准备考试', blank: '还是', post: '我准备考试？', hint: '(hay là)', ans: '还是' }
];

var sortData = [
  { words: ['我', '的', '书包', '你', '看见', '了', '吗', '？'], ans: '我的书包你看见了吗？', audio: '我的书包你看见了吗？' },
  { words: ['书包', '在', '门', '后面', '。'], ans: '书包在门后面。', audio: '书包在门后面。' },
  { words: ['饭菜', '快要', '做', '好', '了', '。'], ans: '饭菜快要做好了。', audio: '饭菜快要做好了。' },
  { words: ['我们', '下', '星期', '就要', '考试', '了', '。'], ans: '我们下星期就要考试了。', audio: '我们下星期就要考试了。' },
  { words: ['是', '您', '准备', '考试', '还是', '我', '准备', '考试', '？'], ans: '是您准备考试还是我准备考试？', audio: '是您准备考试还是我准备考试？' },
  { words: ['爸爸', '妈妈', '比', '我们', '还', '忙', '。'], ans: '爸爸妈妈比我们还忙。', audio: '爸爸妈妈比我们还忙。' }
];

var mcData = [
  { q: '看到生日礼物，儿子高兴地＿＿了。', opts: ['笑', '帮', '考', '错'], ans: 0 },
  { q: '这个字写＿＿了，左边是“口”，不是“日”。', opts: ['错', '好', '完', '对'], ans: 0 },
  { q: '火车＿＿开了。', opts: ['快要', '很要', '太要', '真要'], ans: 0 },
  { q: '我们下星期＿＿考试了。', opts: ['就要', '快要', '要快', '就快'], ans: 0 },
  { q: 'Câu nào là câu hỏi lựa chọn?', opts: ['你喝奶茶还是喝咖啡？', '你喝奶茶吗？', '你喝不喝奶茶？', '你喝什么？'], ans: 0 },
  { q: '“弟弟手很小。” là loại câu gì?', opts: ['Câu có cụm chủ vị làm vị ngữ', 'Câu so sánh', 'Câu hỏi lựa chọn', 'Câu chữ 把'], ans: 0 },
  { q: 'Khi trong câu có trạng ngữ chỉ thời gian (下星期) thì thường dùng cấu trúc nào?', opts: ['就要……了', '快要……了', '快……了', '要……了'], ans: 0 },
  { q: '“不错” nghĩa là gì?', opts: ['Khá tốt', 'Không sai', 'Rất tệ', 'Không biết'], ans: 0 }
];

var speakingData = {
  intro: 'Nhấn 🔊 nghe câu hỏi/tình huống, rồi tự ghi âm câu trả lời của bạn dựa theo nội dung 4 bài khoá.',
  questions: [
    {
      q_zh: '你们什么时候开学？你准备好了吗？',
      q_vn: 'Khi nào các bạn khai giảng? Bạn đã chuẩn bị xong chưa?',
      hint: '快要开学了，我准备了……',
      sample: '快要开学了，我准备好了书包、本子和笔，这次是我自己准备的。',
      sample_vn: 'Sắp khai giảng rồi, tôi đã chuẩn bị xong cặp sách, vở và bút, lần này là tôi tự chuẩn bị.',
      note: '快要……了 dùng khi việc gì đó sắp xảy ra.'
    },
    {
      q_zh: '考试以前你会做什么准备？',
      q_vn: 'Trước kỳ thi bạn chuẩn bị thế nào?',
      hint: '我要看……，还要看做错的题。',
      sample: '就要考试了，我要好好看看这些词，本子上做错的题也要看一看。',
      sample_vn: 'Sắp thi rồi, tôi phải xem kỹ những từ này, những câu làm sai trong vở cũng phải xem lại.',
      note: '就要……了 dùng khi có mốc thời gian cụ thể.'
    },
    {
      q_zh: '你今天考试考得怎么样？',
      q_vn: 'Hôm nay bạn thi thế nào?',
      hint: '我考得……，比上次……',
      sample: '我觉得考得还可以，比上次好，虽然有几个题做错了，但是词我都懂了。',
      sample_vn: 'Tôi thấy thi cũng tàm tạm, tốt hơn lần trước, tuy có vài câu làm sai nhưng các từ tôi đều hiểu.',
      note: 'Ôn bổ ngữ trạng thái (bài 7) và 虽然……但是…… (bài 8).'
    },
    {
      q_zh: '你更喜欢打篮球、踢足球还是游泳？',
      q_vn: 'Bạn thích chơi bóng rổ, đá bóng hay bơi hơn?',
      hint: '我更喜欢……，因为……',
      sample: '我更喜欢游泳，因为游泳比打篮球有意思，也没有踢足球那么累。',
      sample_vn: 'Tôi thích bơi hơn, vì bơi thú vị hơn chơi bóng rổ, cũng không mệt bằng đá bóng.',
      note: 'Câu hỏi lựa chọn A 还是 B; trả lời dùng 比 và 没有 (bài 8, 9).'
    },
    {
      q_zh: '在你家，谁帮你准备上学的东西？',
      q_vn: 'Ở nhà bạn, ai giúp bạn chuẩn bị đồ đi học?',
      hint: '……帮我准备……，下次我自己……',
      sample: '以前爸爸帮我准备书包和本子，现在我自己准备，爸爸妈妈比我还忙。',
      sample_vn: 'Trước đây bố giúp tôi chuẩn bị cặp và vở, bây giờ tôi tự chuẩn bị, bố mẹ còn bận hơn cả tôi.',
      note: '帮 + người + việc; 比……还 nhấn mức độ cao hơn.'
    }
  ]
};

var translateData = [
  { vi: 'Cặp sách ở phía sau cửa.', zh: '书包在门后面。', py: 'Shūbāo zài mén hòumiàn.' },
  { vi: 'Ngày mai con thi, nên con đang học bài.', zh: '明天考试，我在看书呢。', py: 'Míngtiān kǎoshì, wǒ zài kàn shū ne.' },
  { vi: 'Mẹ ơi, là mẹ chuẩn bị thi hay là con chuẩn bị thi vậy?', zh: '妈妈，是您准备考试还是我准备考试？', py: 'Māma, shì nín zhǔnbèi kǎoshì háishi wǒ zhǔnbèi kǎoshì?' },
  { vi: 'Cơm sắp nấu xong rồi.', zh: '饭菜快要做好了。', py: 'Fàncài kuàiyào zuòhǎo le.' },
  { vi: 'Chúng tôi đi học, nhưng bố mẹ còn bận hơn cả chúng tôi.', zh: '我们上学，爸爸、妈妈比我们还忙。', py: 'Wǒmen shàngxué, bàba, māma bǐ wǒmen hái máng.' }
];

var translateDataRev = [
  { vi: 'Ngày mai khai giảng rồi, con đã chuẩn bị xong chưa?', zh: '你们明天开学，你准备好了吗？', py: 'Nǐmen míngtiān kāixué, nǐ zhǔnbèi hǎo le ma?' },
  { vi: 'Con nên xem lại những từ này thật kỹ nhé.', zh: '这些词要好好看看。', py: 'Zhèxiē cí yào hǎohāo kànkan.' },
  { vi: 'Những câu làm sai trong vở cũng cần xem lại.', zh: '本子上做错的题也要看一看。', py: 'Běnzi shang zuòcuò de tí yě yào kàn yi kàn.' },
  { vi: 'Con thấy tốt hơn lần trước.', zh: '我觉得比上次好。', py: 'Wǒ juéde bǐ shàng cì hǎo.' },
  { vi: 'Tôi hỏi xong, cả hai đều bật cười.', zh: '我问完，他们都笑了。', py: 'Wǒ wènwán, tāmen dōu xiào le.' }
];
