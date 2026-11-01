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
        "c": "开",
        "p": "kāi",
        "type": "独体字 · Chữ đơn",
        "st": 4,
        "ord": "一(ngang) trên → 廾(hai tay) dưới",
        "rad": "廾 (củng – hai tay nâng lên)",
        "mean": "mở, bật, lái, khai",
        "tip": "Hình thanh chắn ngang cửa được hai tay (廾) nâng lên → MỞ, BẬT, khởi động.",
        "cf": "井 (jǐng – \"giếng\", hình dạng rất gần giống, thêm 1 chấm)",
        "w": "开学 / 开车 / 开门"
      },
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
      },
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
        "w": "后面 / 面包 / 面条"
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
        "c": "考",
        "p": "kǎo",
        "type": "独体字 · Chữ đơn",
        "st": 6,
        "ord": "土→ 一 →耂 (biến thể)",
        "rad": "耂 (lão – biến thể)",
        "mean": "thi, kiểm tra",
        "tip": "Liên quan tới việc người lớn tuổi/có kinh nghiệm ra đề kiểm tra kiến thức.",
        "cf": "老 (lǎo – \"già\", cùng bộ 耂)",
        "w": "考试 / 考虑 / 高考"
      },
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
      },
      {
        "c": "子",
        "p": "zi",
        "type": "独体字 · Chữ đơn",
        "st": 3,
        "ord": "𠃉(đầu, tay) → 一(chân quấn tã)",
        "rad": "子 (tử – tự thành bộ, con)",
        "mean": "con; hậu tố danh từ không mang nghĩa riêng",
        "tip": "Hình đứa TRẺ sơ sinh đầu to, hai tay đưa lên, chân quấn tã → CON; khi đọc nhẹ (zi) thường làm hậu tố danh từ như 杯子, 桌子.",
        "cf": "孑 (jié – \"cô độc, lẻ loi\", thiếu nét móc dưới)",
        "w": "本子 / 儿子 / 杯子"
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
      },
      {
        "c": "是",
        "p": "shì",
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
      },
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
        "w": "快要 / 要什么 / 不要"
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
  { pre: '这个字写', blank: '错', post: '了，左边是“口”，不是“日”。', hint: '(sai)', ans: '错', exp: '错 là bổ ngữ kết quả: 写错了 = viết sai rồi.' },
  { pre: '看到生日礼物，儿子高兴地', blank: '笑', post: '了。', hint: '(cười)', ans: '笑' },
  { pre: '明天', blank: '考试', post: '，我在看书呢。', hint: '(thi)', ans: '考试' },
  { pre: '饭菜', blank: '快要', post: '做好了。', hint: '(sắp)', ans: '快要', exp: '快要…了 = sắp… rồi: 饭菜快要做好了.' },
  { pre: '是您准备考试', blank: '还是', post: '我准备考试？', hint: '(hay là)', ans: '还是', exp: 'Câu hỏi lựa chọn: A 还是 B？= A hay B?' }
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
  { q: '看到生日礼物，儿子高兴地＿＿了。', opts: ['笑', '帮', '考', '错'], ans: 0, exp: '高兴地 là trạng ngữ chỉ cách cười; 笑 = cười.' },
  { q: '这个字写＿＿了，左边是“口”，不是“日”。', opts: ['错', '好', '完', '对'], ans: 0, exp: '错 là bổ ngữ kết quả: 写错了 = viết sai, câu sau giải thích chỗ sai.' },
  { q: '火车＿＿开了。', opts: ['快要', '很要', '太要', '真要'], ans: 0, exp: '快要…了 = sắp… rồi; không nói 很要/太要/真要.' },
  { q: '我们下星期＿＿考试了。', opts: ['就要', '快要', '要快', '就快'], ans: 0, exp: 'Có từ chỉ thời gian (下星期) thì dùng 就要…了, không dùng 快要…了.' },
  { q: 'Câu nào là câu hỏi lựa chọn?', opts: ['你喝奶茶还是喝咖啡？', '你喝奶茶吗？', '你喝不喝奶茶？', '你喝什么？'], ans: 0, exp: 'Câu hỏi lựa chọn dùng A 还是 B, đưa ra hai khả năng: 喝奶茶还是喝咖啡？' },
  { q: '“弟弟手很小。” là loại câu gì?', opts: ['Câu có cụm chủ vị làm vị ngữ', 'Câu so sánh', 'Câu hỏi lựa chọn', 'Câu chữ 把'], ans: 0, exp: 'Vị ngữ là một cụm chủ vị: 弟弟 (chủ ngữ lớn) + 手很小 (cụm chủ vị).' },
  { q: 'Khi trong câu có trạng ngữ chỉ thời gian (下星期) thì thường dùng cấu trúc nào?', opts: ['就要……了', '快要……了', '快……了', '要……了'], ans: 0, exp: '快要…了 không đi với từ chỉ thời gian cụ thể; có 下星期 thì dùng 就要…了.' },
  { q: '“不错” nghĩa là gì?', opts: ['Khá tốt', 'Không sai', 'Rất tệ', 'Không biết'], ans: 0, exp: '不错 = khá tốt, được đấy (lời khen), không hiểu theo nghĩa đen “không sai”.' }
];

var speakingData = {
  intro: 'Nhấn nút loa nghe câu hỏi/tình huống, rồi tự ghi âm câu trả lời của bạn dựa theo nội dung 4 bài khoá.',
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

// ══════════════════════════════════════════
// LUYỆN TẬP SÁCH BÀI TẬP (新HSK教程2 学练手册, Bài 10: Hán tự + Từ mới + Mô phỏng đề thi)
// ══════════════════════════════════════════
var wbData = {
  sections: [
    { title: 'Hán tự & từ mới', blocks: [
      { type: 'table', caption: 'Bộ thủ (偏旁) — tên gọi và chữ ví dụ', headers: ['Tên gọi', 'Bộ thủ', 'Chữ ví dụ'], rows: [
        ['言字旁 yánzìpáng', '讠', '词 cí (từ) · 试 shì (thử, thi)'],
        ['日字旁 rìzìpáng', '日', '昨 zuó (hôm qua) · 明 míng (sáng; ngày mai)']
      ] },
      { type: 'table', caption: 'Tập viết (摹写) — chữ → từ → câu', headers: ['Chữ', 'Từ', 'Câu'], rows: [
        ['词 cí', '生词 shēngcí — từ mới', '要学习生词了，请打开书。— Sắp học từ mới rồi, các em mở sách ra nhé.'],
        ['试 shì', '考试 kǎoshì — thi, kiểm tra', '我们快要考试了。— Chúng ta sắp thi rồi.'],
        ['昨 zuó', '昨天 zuótiān — hôm qua', '昨天天气很好。— Hôm qua trời rất đẹp.'],
        ['明 míng', '明天 míngtiān — ngày mai', '你今天去还是明天去？— Bạn đi hôm nay hay ngày mai?']
      ],
        note: 'Luyện viết tay từng nét theo mẫu trong sách (bấm vào chữ ở phần Từ vựng để xem nét viết).' },
      { type: 'table', caption: 'Từ ghép mới (学一学)', headers: ['Từ đã biết', 'Từ mới', 'Nghĩa'], rows: [
        ['说话 shuōhuà · 错 cuò', '说错 shuōcuò', 'nói sai, nói nhầm'],
        ['门 mén · 后面 hòumiàn', '门后 mén hòu', 'sau cánh cửa'],
        ['汉字 Hànzì · 本子 běnzi', '汉字本 hànzìběn', 'vở tập viết chữ Hán']
      ] },
      { type: 'blankdrill', caption: 'Điền từ mới vào chỗ trống (做一做)', hint: 'Gõ từ mới (chữ Hán) vào ô trống rồi bấm "Xem đáp án" để đối chiếu.', maxlength: 4,
        items: [
          { before: '你看见我的', after: '了吗？', answer: '汉字本' },
          { before: '考试一点开始，不是七点，她', after: '了。', answer: '说错' },
          { before: '篮球在', after: '，你别忘了拿。', answer: '门后' }
        ] }
    ]},
    { title: 'Mô phỏng đề thi', audio: '/audio/hsk2v3-bai-10/wb-mocktest.mp3', blocks: [
      { type: 'mocktest',
        listening: [
          { n: 1, part: 'Phần 1 · Nghe một câu, chọn tranh đúng', options: [
            { key: 'A', img: '/images/hsk2v3-bai-10-wb/q1a.jpg' },
            { key: 'B', img: '/images/hsk2v3-bai-10-wb/q1b.jpg' },
            { key: 'C', img: '/images/hsk2v3-bai-10-wb/q1c.jpg' }
          ], answer: 'C',
            script: '小猫在门后面，你看见了吗？', vn: 'Con mèo ở sau cánh cửa, bạn thấy chưa? (Tranh C: con mèo ngồi cạnh cửa; tranh B mèo ở dưới gầm giường)' },
          { n: 2, options: [
            { key: 'A', img: '/images/hsk2v3-bai-10-wb/q2a.jpg' },
            { key: 'B', img: '/images/hsk2v3-bai-10-wb/q2b.jpg' },
            { key: 'C', img: '/images/hsk2v3-bai-10-wb/q2c.jpg' }
          ], answer: 'C',
            script: '学生们在教室里考试，你现在别进去。', vn: 'Các học sinh đang thi trong lớp, bây giờ bạn đừng vào.' },
          { n: 3, options: [
            { key: 'A', img: '/images/hsk2v3-bai-10-wb/q3a.jpg' },
            { key: 'B', img: '/images/hsk2v3-bai-10-wb/q3b.jpg' },
            { key: 'C', img: '/images/hsk2v3-bai-10-wb/q3c.jpg' }
          ], answer: 'B',
            script: '这次考试，她是第一名。', vn: 'Kỳ thi lần này, cô bé đứng thứ nhất. (Tranh B: học sinh vui mừng giơ bài thi)' },
          { n: 4, part: 'Phần 2 · Nghe hội thoại, chọn tranh phù hợp', bank: [
            { key: 'A', img: '/images/hsk2v3-bai-10-wb/q4to6_a.jpg' },
            { key: 'B', img: '/images/hsk2v3-bai-10-wb/q4to6_b.jpg' },
            { key: 'C', img: '/images/hsk2v3-bai-10-wb/q4to6_c.jpg' },
            { key: 'D', img: '/images/hsk2v3-bai-10-wb/q4to6_d.jpg' }
          ], letters: ['A', 'B', 'C', 'D'], answer: 'A',
            script: '女：你吃包子还是饺子？\n男：包子好吃，吃包子吧。', vn: 'Nữ: Anh ăn bánh bao hay sủi cảo?\nNam: Bánh bao ngon, ăn bánh bao đi.' },
          { n: 5, letters: ['A', 'B', 'C', 'D'], answer: 'C',
            script: '男：快要到家了，你别睡了。\n女：这么快啊！', vn: 'Nam: Sắp về đến nhà rồi, em đừng ngủ nữa.\nNữ: Nhanh thế à! (Tranh C: cô gái ngủ trên ô tô)' },
          { n: 6, letters: ['A', 'B', 'C', 'D'], answer: 'B',
            script: '女：我还不知道你的手机号呢。\n男：我给你写在本子上吧。', vn: 'Nữ: Em vẫn chưa biết số điện thoại của anh đấy.\nNam: Để anh viết vào vở cho em nhé.' },
          { n: 7, part: 'Phần 3 · Nghe hội thoại, chọn đáp án đúng', options: [
            { key: 'A', text: '水', py: 'shuǐ' },
            { key: 'B', text: '奶茶', py: 'nǎichá' },
            { key: 'C', text: '咖啡', py: 'kāfēi' }
          ], answer: 'A',
            script: '女：你喝奶茶还是咖啡？\n男：我都不想喝，给我杯水吧。\n问：男的要喝什么？', vn: 'Nữ: Anh uống trà sữa hay cà phê?\nNam: Anh đều không muốn uống, cho anh cốc nước đi.\nHỏi: Người nam muốn uống gì? → Nước.' },
          { n: 8, options: [
            { key: 'A', text: '小雨的同学', py: 'Xiǎoyǔ de tóngxué' },
            { key: 'B', text: '小雨的哥哥', py: 'Xiǎoyǔ de gēge' },
            { key: 'C', text: '小雨的男朋友', py: 'Xiǎoyǔ de nánpéngyou' }
          ], answer: 'B',
            script: '男：小雨，这个男孩儿是你同学还是你男朋友？\n女：都不是，他是我哥哥。\n问：那个男孩儿是谁？', vn: 'Nam: Tiểu Vũ, cậu bé này là bạn học hay bạn trai của em?\nNữ: Đều không phải, anh ấy là anh trai em.\nHỏi: Cậu bé đó là ai? → Anh trai của Tiểu Vũ.' },
          { n: 9, options: [
            { key: 'A', text: '书包里', py: 'shūbāo li' },
            { key: 'B', text: '桌子上', py: 'zhuōzi shang' },
            { key: 'C', text: '椅子下面', py: 'yǐzi xiàmiàn' }
          ], answer: 'C',
            script: '女：我的本子你看见了吗？\n男：没在书包里吗？\n女：没有，桌子上也没有，你帮我找找。\n男：找到了，在椅子下面。\n问：本子在哪儿？', vn: 'Nữ: Anh có thấy quyển vở của em không?\nNam: Không có trong cặp sách à?\nNữ: Không có, trên bàn cũng không có, anh tìm giúp em với.\nNam: Tìm thấy rồi, ở dưới ghế.\nHỏi: Quyển vở ở đâu? → Dưới ghế.' },
          { n: 10, options: [
            { key: 'A', text: '看书', py: 'kàn shū' },
            { key: 'B', text: '出去玩', py: 'chūqù wán' },
            { key: 'C', text: '在家休息', py: 'zài jiā xiūxi' }
          ], answer: 'C',
            script: '男：就要考试了，你准备得怎么样？\n女：还可以吧，这几天我再好好看看书。\n男：考完就没事了，你想去哪儿玩啊？\n女：不出去玩了，准备考试太累了，就在家休息休息。\n问：考试后女的要做什么？', vn: 'Nam: Sắp thi rồi, em chuẩn bị thế nào rồi?\nNữ: Cũng tạm ổn, mấy hôm nay em sẽ đọc sách kỹ thêm.\nNam: Thi xong là rảnh rồi, em muốn đi đâu chơi?\nNữ: Không đi chơi đâu, ôn thi mệt quá, cứ ở nhà nghỉ ngơi thôi.\nHỏi: Thi xong cô gái sẽ làm gì? → Ở nhà nghỉ ngơi (đọc sách là việc trước khi thi).' }
        ],
        reading: [
          { n: 11, part: 'Phần 1 · Chọn tranh phù hợp với câu', bank: [
            { key: 'A', img: '/images/hsk2v3-bai-10-wb/q11to13_a.jpg' },
            { key: 'B', img: '/images/hsk2v3-bai-10-wb/q11to13_b.jpg' },
            { key: 'C', img: '/images/hsk2v3-bai-10-wb/q11to13_c.jpg' },
            { key: 'D', img: '/images/hsk2v3-bai-10-wb/q11to13_d.jpg' }
          ], letters: ['A', 'B', 'C', 'D'], prompt: '就要开学了，今天我去买了一个新书包。', promptPy: 'Jiù yào kāixué le, jīntiān wǒ qù mǎile yí gè xīn shūbāo.', answer: 'C',
            vn: 'Sắp khai giảng rồi, hôm nay mình đi mua một chiếc cặp sách mới. — tranh C: cậu bé chọn cặp sách trong cửa hàng.' },
          { n: 12, letters: ['A', 'B', 'C', 'D'], prompt: '请帮我拿一下本子。', promptPy: 'Qǐng bāng wǒ ná yíxià běnzi.', answer: 'A',
            vn: 'Lấy giúp mình quyển vở với. — tranh A: quyển vở gáy lò xo.' },
          { n: 13, letters: ['A', 'B', 'C', 'D'], prompt: '这次考试我考得非常好。', promptPy: 'Zhè cì kǎoshì wǒ kǎo de fēicháng hǎo.', answer: 'B',
            vn: 'Kỳ thi lần này mình làm bài rất tốt. — tranh B: cô bé giơ bài thi được điểm 优 (giỏi).' },
          { n: 14, part: 'Phần 2 · Chọn từ điền vào chỗ trống', bank: [
            { key: 'A', text: '题', py: 'tí' },
            { key: 'B', text: '考试', py: 'kǎoshì' },
            { key: 'C', text: '本子', py: 'běnzi' },
            { key: 'D', text: '后面', py: 'hòumiàn' },
            { key: 'E', text: '完', py: 'wán' }
          ], letters: ['A', 'B', 'C', 'D', 'E'], prompt: '这个（　）你做错了，再看一下。', promptPy: 'Zhège (　) nǐ zuòcuò le, zài kàn yíxià.', answer: 'A',
            vn: 'Câu này bạn làm sai rồi, xem lại một chút đi. — 做题: làm bài/câu hỏi → 题.' },
          { n: 15, letters: ['A', 'B', 'C', 'D', 'E'], prompt: '这是你的（　）吧？上边有你的名字。', promptPy: 'Zhè shì nǐ de (　) ba? Shàngbian yǒu nǐ de míngzi.', answer: 'C',
            vn: 'Đây là vở của bạn phải không? Trên đó có tên bạn. — cần danh từ chỉ đồ vật có thể ghi tên: 本子.' },
          { n: 16, letters: ['A', 'B', 'C', 'D', 'E'], prompt: '女：这次（　）你考得怎么样？\n男：这次比上次好。', promptPy: 'Zhè cì (　) nǐ kǎo de zěnmeyàng? / Zhè cì bǐ shàng cì hǎo.', answer: 'B',
            vn: 'Nữ: Kỳ thi lần này bạn làm bài thế nào? Nam: Lần này tốt hơn lần trước. — 这次考试 + 考得…… → 考试.' },
          { n: 17, letters: ['A', 'B', 'C', 'D', 'E'], prompt: '男：小红坐在哪儿？\n女：她个子比我高，坐在我（　）。', promptPy: 'Xiǎohóng zuò zài nǎr? / Tā gèzi bǐ wǒ gāo, zuò zài wǒ (　).', answer: 'D',
            vn: 'Nam: Tiểu Hồng ngồi ở đâu? Nữ: Bạn ấy cao hơn mình nên ngồi sau mình. — 坐在 + 我后面 (chỉ vị trí).' },
          { n: 18, part: 'Phần 3 · Ghép câu hỏi với câu trả lời', bank: [
            { key: 'A', text: '我26号回去。', py: 'Wǒ 26 hào huíqù.' },
            { key: 'B', text: '我也不知道，你去问问老师吧。', py: 'Wǒ yě bù zhīdào, nǐ qù wènwen lǎoshī ba.' },
            { key: 'C', text: '都不是，是我自己。', py: 'Dōu bú shì, shì wǒ zìjǐ.' },
            { key: 'D', text: '别去了，我有两个本子，给你一个。', py: 'Bié qù le, wǒ yǒu liǎng gè běnzi, gěi nǐ yí gè.' },
            { key: 'E', text: '他出去了，一会儿就回来。', py: 'Tā chūqù le, yíhuìr jiù huílái.' }
          ], letters: ['A', 'B', 'C', 'D', 'E'], prompt: '谁帮你准备的画笔？是爸爸还是妈妈？', promptPy: 'Shéi bāng nǐ zhǔnbèi de huàbǐ? Shì bàba háishi māma?', answer: 'C',
            vn: 'Ai chuẩn bị bút vẽ giúp bạn? Bố hay mẹ? — C: Đều không phải, là tự mình (hỏi "A还是B" → đáp "都不是").' },
          { n: 19, letters: ['A', 'B', 'C', 'D', 'E'], prompt: '你看，这个题做对了还是做错了？', promptPy: 'Nǐ kàn, zhège tí zuòduìle háishi zuòcuò le?', answer: 'B',
            vn: 'Bạn xem, câu này làm đúng hay sai? — B: Mình cũng không biết, bạn đi hỏi thầy cô đi.' },
          { n: 20, letters: ['A', 'B', 'C', 'D', 'E'], prompt: '我忘了拿本子，现在去商店买一个。', promptPy: 'Wǒ wàngle ná běnzi, xiànzài qù shāngdiàn mǎi yí gè.', answer: 'D',
            vn: 'Mình quên mang vở, giờ đi cửa hàng mua một quyển. — D: Đừng đi nữa, mình có hai quyển, cho bạn một quyển.' },
          { n: 21, letters: ['A', 'B', 'C', 'D', 'E'], prompt: '快要开学了，你什么时候回来？', promptPy: 'Kuàiyào kāixué le, nǐ shénme shíhou huílái?', answer: 'A',
            vn: 'Sắp khai giảng rồi, khi nào bạn quay về? — A: Ngày 26 mình về (hỏi 什么时候 → đáp ngày).' },
          { n: 22, part: 'Phần 4 · Đọc đoạn văn, chọn đáp án đúng', prompt: '女儿已经上小学了，她学习不错，她的本子我看过，错题不多，字写得也很好。\n★女儿现在：', promptPy: 'Nǚ\'ér yǐjīng shàng xiǎoxué le, tā xuéxí búcuò, tā de běnzi wǒ kànguo, cuò tí bù duō, zì xiě de yě hěn hǎo.\nNǚ\'ér xiànzài:', options: [
            { key: 'A', text: '很少写字', py: 'hěn shǎo xiě zì' },
            { key: 'B', text: '是小学生', py: 'shì xiǎoxuéshēng' },
            { key: 'C', text: '没有本子', py: 'méiyǒu běnzi' }
          ], answer: 'B',
            vn: 'Con gái đã vào tiểu học rồi, con học khá, vở của con tôi đã xem, câu sai không nhiều, chữ viết cũng rất đẹp. — "已经上小学了" → bây giờ là học sinh tiểu học.' },
          { n: 23, prompt: '还有一个星期爷爷就要过生日了。爸爸想去饭馆给爷爷过生日，但是爷爷觉得饭馆的菜没有家里的好吃，所以今年还是在家里过。\n★爷爷要在家里过生日，因为：', promptPy: 'Hái yǒu yí gè xīngqī yéye jiù yào guò shēngrì le. Bàba xiǎng qù fànguǎn gěi yéye guò shēngrì, dànshì yéye juéde fànguǎn de cài méiyǒu jiā li de hǎochī, suǒyǐ jīnnián háishi zài jiā li guò.\nYéye yào zài jiā li guò shēngrì, yīnwèi:', options: [
            { key: 'A', text: '饭馆人太多', py: 'fànguǎn rén tài duō' },
            { key: 'B', text: '爸爸不去饭馆', py: 'bàba bú qù fànguǎn' },
            { key: 'C', text: '家里的菜好吃', py: 'jiā li de cài hǎochī' }
          ], answer: 'C',
            vn: 'Còn một tuần nữa là sinh nhật ông. Bố muốn ra nhà hàng tổ chức sinh nhật cho ông, nhưng ông thấy món ở nhà hàng không ngon bằng ở nhà, nên năm nay vẫn tổ chức ở nhà. — "饭馆的菜没有家里的好吃" → món ở nhà ngon hơn.' },
          { n: 24, prompt: '就要开学了，儿子的笔、本子什么的都没有准备好。我在网上看了看，网上有很多，今天买完，明天就能送到家，真不错！\n★他在网上给儿子买什么？', promptPy: 'Jiù yào kāixué le, érzi de bǐ, běnzi shénmede dōu méiyǒu zhǔnbèi hǎo. Wǒ zài wǎngshang kànle kàn, wǎngshang yǒu hěn duō, jīntiān mǎiwán, míngtiān jiù néng sòngdào jiā, zhēn búcuò!\nTā zài wǎngshang gěi érzi mǎi shénme?', options: [
            { key: 'A', text: '笔', py: 'bǐ' },
            { key: 'B', text: '衣服', py: 'yīfu' },
            { key: 'C', text: '电影票', py: 'diànyǐngpiào' }
          ], answer: 'A',
            vn: 'Sắp khai giảng rồi, bút, vở… của con trai đều chưa chuẩn bị. Tôi lên mạng xem thử, trên mạng có rất nhiều, hôm nay mua xong thì mai đã giao đến nhà, thật tuyệt! — đồ dùng học tập chưa chuẩn bị là 笔、本子 → A.' }
        ],
        writing: [
          { n: 25, part: 'Viết · Phần 1 · Chọn bộ phận ghép thành chữ', bank: [
            { key: 'A', text: '是' }, { key: 'B', text: '钅' }, { key: 'C', text: '⺮' }, { key: 'D', text: '十' }
          ], letters: ['A', 'B', 'C', 'D'], prompt: '写（昔）— xiě cuò', answer: 'B', vn: '错 = 钅 + 昔 → 写错 (viết sai)' },
          { n: 26, letters: ['A', 'B', 'C', 'D'], prompt: '做（页）— zuò tí', answer: 'A', vn: '题 = 是 + 页 → 做题 (làm bài tập)' },
          { n: 27, letters: ['A', 'B', 'C', 'D'], prompt: '（夭）了 — xiào le', answer: 'C', vn: '笑 = ⺮ + 夭 → 笑了 (cười rồi)' },
          { n: 28, part: 'Viết · Phần 2 · Viết chữ Hán theo pinyin', input: true, prompt: '你的书包在门（ hòu ）面呢。', promptPy: 'Nǐ de shūbāo zài mén hòumiàn ne.', answer: '后', vn: 'Cặp sách của bạn ở sau cửa đấy. — 后面: phía sau.' },
          { n: 29, input: true, prompt: '我们明天就要开（ xué ）了。', promptPy: 'Wǒmen míngtiān jiù yào kāixué le.', answer: '学', vn: 'Ngày mai chúng tôi khai giảng rồi. — 就要……了: sắp…; 开学: khai giảng.' },
          { n: 30, input: true, prompt: '这个（ cí ）写得对还是错？', promptPy: 'Zhège cí xiě de duì háishi cuò?', answer: '词', vn: 'Từ này viết đúng hay sai? — 词 (bộ 讠): từ, như 生词.' }
        ] }
    ]}
  ]
};
