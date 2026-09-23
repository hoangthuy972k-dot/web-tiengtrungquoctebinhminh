// HSK 2 (3.0 Mới) · Bài 1 · 她请我们吃了北京烤鸭
// Nguồn: Giáo trình New HSK 2 (bản Trung - Việt), bài 1, trang 001-009.

var vocabData = [
  {
    "n": 1,
    "zh": "就",
    "py": "jiù",
    "pos": "Phó từ",
    "vn": "chính (là), thì",
    "hv": "tựu",
    "em": "👉",
    "lesson": 1,
    "ex_zh": "你们就是她的学生吧？",
    "ex_py": "Nǐmen jiù shì tā de xuésheng ba?",
    "ex_vn": "Các em chính là học sinh của cô ấy phải không?",
    "exList": [
      {
        "zh": "你们就是她的学生吧？",
        "py": "Nǐmen jiù shì tā de xuésheng ba?",
        "vn": "Các em chính là học sinh của cô ấy phải không?"
      },
      {
        "zh": "你们有事就找我。",
        "py": "Nǐmen yǒu shì jiù zhǎo wǒ.",
        "vn": "Các em có việc gì thì cứ tìm chị."
      }
    ],
    "hanzi": [
      {
        "c": "就",
        "p": "jiù",
        "type": "形声字 · Chữ hình thanh",
        "st": 12,
        "ord": "亠 → 口 → 小 → 尤",
        "rad": "尢 (uông)",
        "mean": "liền, ngay, chính là",
        "tip": "Bên trái là 京 (kinh đô) rút gọn, bên phải là 尤 — nhớ \"đến kinh đô là đi ngay\".",
        "cf": "",
        "w": "就是 / 就要 / 有事就找我"
      }
    ],
    "colloFull": [
      {
        "zh": "就来",
        "py": "jiù lái",
        "vn": "đến ngay"
      },
      {
        "zh": "就在这里",
        "py": "jiù zài zhèlǐ",
        "vn": "ngay ở đây"
      },
      {
        "zh": "就是他",
        "py": "jiù shì tā",
        "vn": "chính là anh ấy"
      },
      {
        "zh": "现在就去",
        "py": "xiànzài jiù qù",
        "vn": "bây giờ đi luôn"
      }
    ],
    "patterns": [
      {
        "s": "就 + động từ",
        "m": "Ngay lập tức, không chần chừ: 我就来"
      },
      {
        "s": "就 + 是",
        "m": "Chính là — nhấn mạnh: 他就是我的老师"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Bạn chờ một chút, tôi đến ngay.",
        "answer": "你等一下，我就来。",
        "answerPy": "Nǐ děng yíxià, wǒ jiù lái.",
        "note": "就 nhấn ý ngay lập tức, không chần chừ.",
        "pair": "就 + V"
      },
      {
        "promptLang": "vi",
        "prompt": "Anh ấy chính là giáo viên tiếng Trung của tôi.",
        "answer": "他就是我的中文老师。",
        "answerPy": "Tā jiù shì wǒ de Zhōngwén lǎoshī.",
        "note": "就是 dùng để nhấn mạnh.",
        "pair": "就是……"
      }
    ]
  },
  {
    "n": 2,
    "zh": "给",
    "py": "gěi",
    "pos": "Giới từ / Động từ",
    "vn": "cho",
    "hv": "cấp",
    "em": "🎁",
    "img": "/images/hsk2v3-bai-1/gei.jpg",
    "lesson": 1,
    "ex_zh": "一飞给我打电话了。",
    "ex_py": "Yīfēi gěi wǒ dǎ diànhuà le.",
    "ex_vn": "Nhất Phi đã gọi điện thoại cho chị.",
    "exList": [
      {
        "zh": "一飞给我打电话了。",
        "py": "Yīfēi gěi wǒ dǎ diànhuà le.",
        "vn": "Nhất Phi đã gọi điện thoại cho chị."
      },
      {
        "zh": "她还给我们介绍了很多东西。",
        "py": "Tā hái gěi wǒmen jièshàole hěn duō dōngxi.",
        "vn": "Chị ấy còn giới thiệu cho chúng em rất nhiều thứ."
      }
    ],
    "hanzi": [
      {
        "c": "给",
        "p": "gěi",
        "type": "形声字 · Chữ hình thanh",
        "st": 9,
        "ord": "纟 → 人 → 一 → 口",
        "rad": "纟 (mịch – sợi tơ)",
        "mean": "đưa cho, cấp cho",
        "tip": "Bộ 纟 (sợi tơ) + 合 (hợp): ngày xưa vải vóc là thứ đem cho, tặng.",
        "cf": "",
        "w": "给我 / 给你打电话"
      }
    ],
    "colloFull": [
      {
        "zh": "给我打电话",
        "py": "gěi wǒ dǎ diànhuà",
        "vn": "gọi điện cho tôi"
      },
      {
        "zh": "给他介绍",
        "py": "gěi tā jièshào",
        "vn": "giới thiệu cho anh ấy"
      },
      {
        "zh": "给你介绍一下",
        "py": "gěi nǐ jièshào yíxià",
        "vn": "giới thiệu cho bạn một chút"
      },
      {
        "zh": "给我帮忙",
        "py": "gěi wǒ bāngmáng",
        "vn": "giúp đỡ tôi"
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
        "note": "给 đứng trước động từ, không đứng sau.",
        "pair": "给……打电话"
      },
      {
        "promptLang": "vi",
        "prompt": "Để tôi giới thiệu cho bạn một chút.",
        "answer": "我给你介绍一下。",
        "answerPy": "Wǒ gěi nǐ jièshào yíxià.",
        "note": "động từ + 一下 nghe nhẹ và lịch sự hơn.",
        "pair": "给……介绍"
      }
    ]
  },
  {
    "n": 3,
    "zh": "让",
    "py": "ràng",
    "pos": "Động từ",
    "vn": "bảo, để, cho phép, nhờ",
    "hv": "nhượng",
    "em": "🙏",
    "img": "/images/hsk2v3-bai-1/rang.jpg",
    "lesson": 1,
    "ex_zh": "一飞让我来接你们。",
    "ex_py": "Yīfēi ràng wǒ lái jiē nǐmen.",
    "ex_vn": "Nhất Phi nhờ chị đến đón các em.",
    "exList": [
      {
        "zh": "一飞让我来接你们。",
        "py": "Yīfēi ràng wǒ lái jiē nǐmen.",
        "vn": "Nhất Phi nhờ chị đến đón các em."
      },
      {
        "zh": "王老师让我们说中文。",
        "py": "Wáng lǎoshī ràng wǒmen shuō Zhōngwén.",
        "vn": "Cô Vương bảo chúng tôi nói tiếng Trung."
      }
    ],
    "hanzi": [
      {
        "c": "让",
        "p": "ràng",
        "type": "形声字 · Chữ hình thanh",
        "st": 5,
        "ord": "讠 → 上",
        "rad": "讠 (ngôn – lời nói)",
        "mean": "nhường, để cho, bảo",
        "tip": "Bộ 讠 (lời nói) + 上: dùng lời bảo ai đó làm việc gì.",
        "cf": "",
        "w": "让我来 / 让孩子回家"
      }
    ],
    "colloFull": [
      {
        "zh": "让我来",
        "py": "ràng wǒ lái",
        "vn": "để tôi làm"
      },
      {
        "zh": "让他去",
        "py": "ràng tā qù",
        "vn": "để anh ấy đi"
      },
      {
        "zh": "让我介绍一下",
        "py": "ràng wǒ jièshào yíxià",
        "vn": "để tôi giới thiệu một chút"
      },
      {
        "zh": "不让",
        "py": "bú ràng",
        "vn": "không cho phép"
      }
    ],
    "patterns": [
      {
        "s": "让 + người + động từ",
        "m": "Để, bảo ai làm gì: 让我来"
      },
      {
        "s": "让我来 là câu nói rất lịch sự khi muốn giúp ai đó"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Để tôi làm, bạn nghỉ đi.",
        "answer": "让我来，你休息吧。",
        "answerPy": "Ràng wǒ lái, nǐ xiūxi ba.",
        "note": "让我来 là câu rất lịch sự khi muốn giúp ai.",
        "pair": "让 + người + V"
      },
      {
        "promptLang": "vi",
        "prompt": "Mẹ tôi không cho em trai tôi đi.",
        "answer": "我妈妈不让我弟弟去。",
        "answerPy": "Wǒ māma bú ràng wǒ dìdi qù.",
        "note": "不让 — không cho phép.",
        "pair": "不让 + người + V"
      }
    ]
  },
  {
    "n": 4,
    "zh": "接",
    "py": "jiē",
    "pos": "Động từ",
    "vn": "đón; nhận (điện thoại)",
    "hv": "tiếp",
    "em": "🤝",
    "img": "/images/hsk2v3-bai-1/jie.jpg",
    "lesson": 1,
    "ex_zh": "让我来接你们。",
    "ex_py": "Ràng wǒ lái jiē nǐmen.",
    "ex_vn": "Nhờ chị đến đón các em.",
    "exList": [
      {
        "zh": "让我来接你们。",
        "py": "Ràng wǒ lái jiē nǐmen.",
        "vn": "Nhờ chị đến đón các em."
      },
      {
        "zh": "白家月接了个电话。",
        "py": "Bái Jiāyuè jiēle ge diànhuà.",
        "vn": "Bạch Gia Nguyệt nhận một cuộc điện thoại."
      }
    ],
    "hanzi": [
      {
        "c": "接",
        "p": "jiē",
        "type": "形声字 · Chữ hình thanh",
        "st": 11,
        "ord": "扌 → 立 → 女",
        "rad": "扌 (thủ – tay)",
        "mean": "đón, nối, nhận",
        "tip": "Bộ 扌 (tay) — đón người, nhận đồ đều làm bằng tay.",
        "cf": "",
        "w": "接人 / 接电话 / 接机"
      }
    ],
    "colloFull": [
      {
        "zh": "接你",
        "py": "jiē nǐ",
        "vn": "đón bạn"
      },
      {
        "zh": "去机场接",
        "py": "qù jīchǎng jiē",
        "vn": "ra sân bay đón"
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
        "m": "Đón ai: 去机场接你"
      },
      {
        "s": "接 + 电话",
        "m": "Nghe điện thoại — cũng dùng 接"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Sáng mai tôi ra sân bay đón bạn.",
        "answer": "明天早上我去机场接你。",
        "answerPy": "Míngtiān zǎoshang wǒ qù jīchǎng jiē nǐ.",
        "note": "去机场接 — ra sân bay đón.",
        "pair": "接 + người"
      },
      {
        "promptLang": "vi",
        "prompt": "Thầy đang nghe điện thoại, bạn chờ một chút nhé.",
        "answer": "老师正在接电话，你等一下吧。",
        "answerPy": "Lǎoshī zhèngzài jiē diànhuà, nǐ děng yíxià ba.",
        "note": "接电话 — nghe điện thoại, cũng dùng 接.",
        "pair": "正在 + V"
      }
    ]
  },
  {
    "n": 5,
    "zh": "次",
    "py": "cì",
    "pos": "Lượng từ",
    "vn": "lần",
    "hv": "thứ",
    "em": "🔢",
    "lesson": 2,
    "ex_zh": "你们是第一次来北京吗？",
    "ex_py": "Nǐmen shì dì-yī cì lái Běijīng ma?",
    "ex_vn": "Đây là lần đầu các em đến Bắc Kinh phải không?",
    "exList": [
      {
        "zh": "你们是第一次来北京吗？",
        "py": "Nǐmen shì dì-yī cì lái Běijīng ma?",
        "vn": "Đây là lần đầu các em đến Bắc Kinh phải không?"
      },
      {
        "zh": "这已经是我第三次来北京了。",
        "py": "Zhè yǐjīng shì wǒ dì-sān cì lái Běijīng le.",
        "vn": "Đây đã là lần thứ ba tôi đến Bắc Kinh rồi."
      }
    ],
    "hanzi": [
      {
        "c": "次",
        "p": "cì",
        "type": "会意字 · Chữ hội ý",
        "st": 6,
        "ord": "冫 → 欠",
        "rad": "冫 (băng)",
        "mean": "lần, thứ tự",
        "tip": "Đếm số lần: 第一次 (lần đầu), 第二次 (lần hai).",
        "cf": "",
        "w": "第一次 / 一次 / 下次"
      }
    ],
    "colloFull": [
      {
        "zh": "一次",
        "py": "yí cì",
        "vn": "một lần"
      },
      {
        "zh": "第一次",
        "py": "dì yí cì",
        "vn": "lần đầu tiên"
      },
      {
        "zh": "来过一次",
        "py": "lái guo yí cì",
        "vn": "đã đến một lần"
      },
      {
        "zh": "下次",
        "py": "xià cì",
        "vn": "lần sau"
      }
    ],
    "patterns": [
      {
        "s": "số + 次",
        "m": "Bao nhiêu lần: 去过三次"
      },
      {
        "s": "第一次 + động từ",
        "m": "Lần đầu tiên làm gì: 我第一次来北京"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Đây là lần đầu tiên tôi đến Bắc Kinh.",
        "answer": "这是我第一次来北京。",
        "answerPy": "Zhè shì wǒ dì-yī cì lái Běijīng.",
        "note": "第一次 — lần đầu tiên.",
        "pair": "第一次 + V"
      },
      {
        "promptLang": "vi",
        "prompt": "Năm ngoái tôi đã đi Tây An ba lần.",
        "answer": "去年我去了三次西安。",
        "answerPy": "Qùnián wǒ qùle sān cì Xī'ān.",
        "note": "三次 — ba lần, đặt sau động từ.",
        "pair": "số + 次"
      }
    ]
  },
  {
    "n": 6,
    "zh": "旅游",
    "py": "lǚyóu",
    "pos": "Động từ",
    "vn": "du lịch",
    "hv": "lữ du",
    "em": "🧳",
    "img": "/images/hsk2v3-bai-1/luyou.jpg",
    "lesson": 2,
    "ex_zh": "我们是来旅游的。",
    "ex_py": "Wǒmen shì lái lǚyóu de.",
    "ex_vn": "Chúng em đến du lịch ạ.",
    "exList": [
      {
        "zh": "我们是来旅游的。",
        "py": "Wǒmen shì lái lǚyóu de.",
        "vn": "Chúng em đến du lịch ạ."
      },
      {
        "zh": "我想去西安旅游。",
        "py": "Wǒ xiǎng qù Xī’ān lǚyóu.",
        "vn": "Tôi muốn đi Tây An du lịch."
      }
    ],
    "hanzi": [
      {
        "c": "旅",
        "p": "lǚ",
        "type": "会意字 · Chữ hội ý",
        "st": 10,
        "ord": "方 → 人 → 衣 phần dưới",
        "rad": "方 (phương)",
        "mean": "đi xa, lữ hành",
        "tip": "Gắn với việc rời nhà đi xa: 旅游 (du lịch), 旅行 (lữ hành).",
        "cf": "",
        "w": "旅游 / 旅行"
      }
    ],
    "colloFull": [
      {
        "zh": "去旅游",
        "py": "qù lǚyóu",
        "vn": "đi du lịch"
      },
      {
        "zh": "来北京旅游",
        "py": "lái Běijīng lǚyóu",
        "vn": "đến Bắc Kinh du lịch"
      },
      {
        "zh": "喜欢旅游",
        "py": "xǐhuan lǚyóu",
        "vn": "thích du lịch"
      },
      {
        "zh": "旅游的时候",
        "py": "lǚyóu de shíhou",
        "vn": "lúc đi du lịch"
      }
    ],
    "patterns": [
      {
        "s": "去 + nơi chốn + 旅游",
        "m": "Đi đâu du lịch: 去西安旅游"
      },
      {
        "s": "旅 + 游",
        "m": "Đi xa (旅) và ngao du (游)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Sang năm tôi định đi Trung Quốc du lịch.",
        "answer": "明年我要去中国旅游。",
        "answerPy": "Míngnián wǒ yào qù Zhōngguó lǚyóu.",
        "note": "去 + nơi chốn + 旅游.",
        "pair": "要 + V"
      },
      {
        "promptLang": "vi",
        "prompt": "Lúc đi du lịch tôi thích chụp ảnh.",
        "answer": "旅游的时候我喜欢照相。",
        "answerPy": "Lǚyóu de shíhou wǒ xǐhuan zhàoxiàng.",
        "note": "động từ + 的时候 — lúc làm gì.",
        "pair": "……的时候"
      }
    ]
  },
  {
    "n": 7,
    "zh": "帮忙",
    "py": "bāngmáng",
    "pos": "Động từ (ly hợp)",
    "vn": "giúp đỡ",
    "hv": "bang mang",
    "em": "🤲",
    "img": "/images/hsk2v3-bai-1/bangmang.jpg",
    "lesson": 3,
    "ex_zh": "我想请你帮个忙。",
    "ex_py": "Wǒ xiǎng qǐng nǐ bāng ge máng.",
    "ex_vn": "Mình muốn nhờ bạn giúp một việc.",
    "exList": [
      {
        "zh": "我想请你帮个忙。",
        "py": "Wǒ xiǎng qǐng nǐ bāng ge máng.",
        "vn": "Mình muốn nhờ bạn giúp một việc."
      },
      {
        "zh": "你有事可以叫李文帮忙。",
        "py": "Nǐ yǒu shì kěyǐ jiào Lǐ Wén bāngmáng.",
        "vn": "Bạn có việc thì có thể nhờ Lý Văn giúp."
      }
    ],
    "hanzi": [
      {
        "c": "帮",
        "p": "bāng",
        "type": "形声字 · Chữ hình thanh",
        "st": 9,
        "ord": "丰 → 阝 → 巾",
        "rad": "巾 (cân – khăn)",
        "mean": "giúp",
        "tip": "帮忙 là từ ly hợp: nói 帮个忙, không nói 帮忙你.",
        "cf": "",
        "w": "帮忙 / 帮我 / 帮个忙"
      }
    ],
    "colloFull": [
      {
        "zh": "帮忙",
        "py": "bāngmáng",
        "vn": "giúp đỡ"
      },
      {
        "zh": "给我帮忙",
        "py": "gěi wǒ bāngmáng",
        "vn": "giúp tôi"
      },
      {
        "zh": "请你帮忙",
        "py": "qǐng nǐ bāngmáng",
        "vn": "nhờ bạn giúp"
      },
      {
        "zh": "帮了一个忙",
        "py": "bāng le yí gè máng",
        "vn": "đã giúp một việc"
      }
    ],
    "patterns": [
      {
        "s": "给 + người + 帮忙",
        "m": "Giúp ai — 帮忙 là từ ly hợp"
      },
      {
        "s": "帮忙 tách ra được: 帮了一个忙 ✓ / 帮忙了一个 ✗"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Bạn giúp tôi một chút được không?",
        "answer": "你可以给我帮忙吗？",
        "answerPy": "Nǐ kěyǐ gěi wǒ bāngmáng ma?",
        "note": "帮忙 là từ ly hợp, dùng 给 để nêu người được giúp.",
        "pair": "可以……吗？"
      },
      {
        "promptLang": "vi",
        "prompt": "Hôm qua anh ấy đã giúp tôi một việc.",
        "answer": "昨天他帮了我一个忙。",
        "answerPy": "Zuótiān tā bāngle wǒ yí ge máng.",
        "note": "帮了一个忙 ✓ / 帮忙了一个 ✗.",
        "pair": "帮 + người + 一个忙"
      }
    ]
  },
  {
    "n": 8,
    "zh": "不好意思",
    "py": "bù hǎoyìsi",
    "pos": "Cụm từ",
    "vn": "xin lỗi, ngại, áy náy",
    "hv": "bất hảo ý tư",
    "em": "😅",
    "img": "/images/hsk2v3-bai-1/buhaoyisi.jpg",
    "lesson": 3,
    "ex_zh": "不好意思，我已经到北京了。",
    "ex_py": "Bù hǎoyìsi, wǒ yǐjīng dào Běijīng le.",
    "ex_vn": "Xin lỗi nhé, mình đã đến Bắc Kinh rồi.",
    "exList": [
      {
        "zh": "不好意思，我已经到北京了。",
        "py": "Bù hǎoyìsi, wǒ yǐjīng dào Běijīng le.",
        "vn": "Xin lỗi nhé, mình đã đến Bắc Kinh rồi."
      },
      {
        "zh": "不好意思，让你久等了。",
        "py": "Bù hǎoyìsi, ràng nǐ jiǔ děng le.",
        "vn": "Ngại quá, để bạn đợi lâu rồi."
      }
    ],
    "hanzi": [
      {
        "c": "意",
        "p": "yì",
        "type": "会意字 · Chữ hội ý",
        "st": 13,
        "ord": "立 → 曰 → 心",
        "rad": "心 (tâm – trái tim)",
        "mean": "ý, ý nghĩ",
        "tip": "音 (âm thanh) + 心 (tim): tiếng lòng — chính là \"ý\".",
        "cf": "",
        "w": "不好意思 / 意思"
      }
    ],
    "colloFull": [
      {
        "zh": "不好意思",
        "py": "bù hǎoyìsi",
        "vn": "ngại quá"
      },
      {
        "zh": "真不好意思",
        "py": "zhēn bù hǎoyìsi",
        "vn": "thật ngại quá"
      },
      {
        "zh": "不好意思问",
        "py": "bù hǎoyìsi wèn",
        "vn": "ngại không dám hỏi"
      },
      {
        "zh": "有点儿不好意思",
        "py": "yǒudiǎnr bù hǎoyìsi",
        "vn": "hơi ngại"
      }
    ],
    "patterns": [
      {
        "s": "不好意思 + câu",
        "m": "Mở đầu khi làm phiền ai: 不好意思，请问……"
      },
      {
        "s": "不好意思 nhẹ hơn 对不起 — dùng khi ngại, làm phiền nhẹ"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Ngại quá, xin hỏi sân bay ở đâu ạ?",
        "answer": "不好意思，请问机场在哪里？",
        "answerPy": "Bù hǎoyìsi, qǐngwèn jīchǎng zài nǎli?",
        "note": "不好意思 nhẹ hơn 对不起.",
        "pair": "不好意思，……"
      },
      {
        "promptLang": "vi",
        "prompt": "Tôi hơi ngại không dám hỏi thầy.",
        "answer": "我有点儿不好意思问老师。",
        "answerPy": "Wǒ yǒudiǎnr bù hǎoyìsi wèn lǎoshī.",
        "note": "有点儿 mang ý không thoải mái.",
        "pair": "有点儿 + Adj"
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
    "lesson": 3,
    "ex_zh": "我已经到北京了。",
    "ex_py": "Wǒ yǐjīng dào Běijīng le.",
    "ex_vn": "Mình đã đến Bắc Kinh rồi.",
    "exList": [
      {
        "zh": "我已经到北京了。",
        "py": "Wǒ yǐjīng dào Běijīng le.",
        "vn": "Mình đã đến Bắc Kinh rồi."
      },
      {
        "zh": "我们已经到北京了。",
        "py": "Wǒmen yǐjīng dào Běijīng le.",
        "vn": "Chúng em đã tới Bắc Kinh rồi."
      }
    ],
    "hanzi": [
      {
        "c": "已",
        "p": "yǐ",
        "type": "象形字 · Chữ tượng hình",
        "st": 3,
        "ord": "𠃌 → 乚",
        "mean": "đã, xong",
        "rad": "己 (kỷ)",
        "tip": "Rất giống 己 (bản thân) và 巳: 已 hở nửa nét trên.",
        "cf": "己 (jǐ – bản thân), 巳 (sì)",
        "w": "已经 / 已"
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
        "zh": "已经三次了",
        "py": "yǐjīng sān cì le",
        "vn": "đã ba lần rồi"
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
        "prompt": "Thầy đã đến rồi.",
        "answer": "老师已经来了。",
        "answerPy": "Lǎoshī yǐjīng lái le.",
        "note": "已经 đứng trước động từ, 了 đứng cuối câu.",
        "pair": "已经……了"
      },
      {
        "promptLang": "vi",
        "prompt": "Muộn lắm rồi, chúng ta về nhà thôi.",
        "answer": "已经很晚了，我们回家吧。",
        "answerPy": "Yǐjīng hěn wǎn le, wǒmen huí jiā ba.",
        "note": "已经很晚了 — đã muộn lắm rồi.",
        "pair": "已经……了"
      }
    ]
  },
  {
    "n": 10,
    "zh": "那",
    "py": "nà",
    "pos": "Liên từ",
    "vn": "vậy, vậy thì, thế thì",
    "hv": "na",
    "em": "➡️",
    "lesson": 3,
    "ex_zh": "那我给他打个电话。",
    "ex_py": "Nà wǒ gěi tā dǎ ge diànhuà.",
    "ex_vn": "Vậy mình sẽ gọi điện cho bạn ấy.",
    "exList": [
      {
        "zh": "那我给他打个电话。",
        "py": "Nà wǒ gěi tā dǎ ge diànhuà.",
        "vn": "Vậy mình sẽ gọi điện cho bạn ấy."
      },
      {
        "zh": "那我们明天再去学校找她。",
        "py": "Nà wǒmen míngtiān zài qù xuéxiào zhǎo tā.",
        "vn": "Vậy mai chúng ta lại đến trường tìm cô ấy."
      }
    ],
    "hanzi": [
      {
        "c": "那",
        "p": "nà",
        "type": "形声字 · Chữ hình thanh",
        "st": 6,
        "ord": "刀 phần trái → 阝",
        "rad": "阝 (ấp)",
        "mean": "kia, đó; vậy thì",
        "tip": "Ở đầu câu 那 là liên từ \"vậy thì\", khác với 那 chỉ định \"cái kia\".",
        "cf": "哪 (nǎ – nào)",
        "w": "那我们走吧 / 那个"
      }
    ],
    "colloFull": [
      {
        "zh": "那我们去吧",
        "py": "nà wǒmen qù ba",
        "vn": "vậy thì chúng ta đi"
      },
      {
        "zh": "那好吧",
        "py": "nà hǎo ba",
        "vn": "vậy được thôi"
      },
      {
        "zh": "那你呢",
        "py": "nà nǐ ne",
        "vn": "vậy còn bạn"
      },
      {
        "zh": "那个人",
        "py": "nàge rén",
        "vn": "người kia"
      }
    ],
    "patterns": [
      {
        "s": "那 + câu",
        "m": "Nối câu, nghĩa là \"vậy thì\": 那我们走吧"
      },
      {
        "s": "那 (vậy thì, nối câu) và 那 (kia, chỉ định) — cùng chữ, hai cách dùng"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Vậy thì chúng ta đi ăn vịt quay Bắc Kinh nhé.",
        "answer": "那我们去吃北京烤鸭吧。",
        "answerPy": "Nà wǒmen qù chī Běijīng kǎoyā ba.",
        "note": "那 ở đây nghĩa là vậy thì, dùng để nối câu.",
        "pair": "那……吧"
      },
      {
        "promptLang": "vi",
        "prompt": "Chiều nay tôi bận, vậy còn bạn?",
        "answer": "今天下午我很忙，那你呢？",
        "answerPy": "Jīntiān xiàwǔ wǒ hěn máng, nà nǐ ne?",
        "note": "那你呢 — vậy còn bạn thì sao.",
        "pair": "……，……呢？"
      }
    ]
  },
  {
    "n": 11,
    "zh": "介绍",
    "py": "jièshào",
    "pos": "Động từ",
    "vn": "giới thiệu",
    "hv": "giới thiệu",
    "em": "🗣️",
    "img": "/images/hsk2v3-bai-1/jieshao.jpg",
    "lesson": 4,
    "ex_zh": "她还给我们介绍了很多东西。",
    "ex_py": "Tā hái gěi wǒmen jièshàole hěn duō dōngxi.",
    "ex_vn": "Chị ấy còn giới thiệu cho chúng em rất nhiều thứ.",
    "exList": [
      {
        "zh": "她还给我们介绍了很多东西。",
        "py": "Tā hái gěi wǒmen jièshàole hěn duō dōngxi.",
        "vn": "Chị ấy còn giới thiệu cho chúng em rất nhiều thứ."
      },
      {
        "zh": "安妮，我给你介绍一下，这是我的中国朋友李文。",
        "py": "Ānnī, wǒ gěi nǐ jièshào yíxià, zhè shì wǒ de Zhōngguó péngyou Lǐ Wén.",
        "vn": "Annie, mình giới thiệu một chút, đây là bạn Trung Quốc của mình — Lý Văn."
      }
    ],
    "hanzi": [
      {
        "c": "绍",
        "p": "shào",
        "type": "形声字 · Chữ hình thanh",
        "st": 8,
        "ord": "纟 → 刀 → 口",
        "rad": "纟 (mịch – sợi tơ)",
        "mean": "nối, tiếp nối",
        "tip": "介绍 = \"đứng giữa nối hai bên lại\", tức giới thiệu người này với người kia.",
        "cf": "",
        "w": "介绍 / 自我介绍"
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
        "zh": "自我介绍",
        "py": "zì wǒ jièshào",
        "vn": "tự giới thiệu"
      },
      {
        "zh": "介绍北京",
        "py": "jièshào Běijīng",
        "vn": "giới thiệu Bắc Kinh"
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
        "prompt": "Để tôi tự giới thiệu một chút.",
        "answer": "让我自我介绍一下。",
        "answerPy": "Ràng wǒ zìwǒ jièshào yíxià.",
        "note": "自我介绍 — tự giới thiệu.",
        "pair": "让 + người + V"
      },
      {
        "promptLang": "vi",
        "prompt": "Bạn giới thiệu Bắc Kinh cho chúng tôi một chút đi.",
        "answer": "你给我们介绍一下北京吧。",
        "answerPy": "Nǐ gěi wǒmen jièshào yíxià Běijīng ba.",
        "note": "给 + người + 介绍 + 一下.",
        "pair": "给……介绍"
      }
    ]
  },
  {
    "n": 12,
    "zh": "有时",
    "py": "yǒushí",
    "pos": "Phó từ",
    "vn": "có lúc, có khi",
    "hv": "hữu thời",
    "em": "⏰",
    "lesson": 4,
    "ex_zh": "有时不太懂她的意思。",
    "ex_py": "Yǒushí bú tài dǒng tā de yìsi.",
    "ex_vn": "Đôi khi chưa hiểu hết ý của chị ấy.",
    "exList": [
      {
        "zh": "有时不太懂她的意思。",
        "py": "Yǒushí bú tài dǒng tā de yìsi.",
        "vn": "Đôi khi chưa hiểu hết ý của chị ấy."
      },
      {
        "zh": "我有时去电影院看个电影。",
        "py": "Wǒ yǒushí qù diànyǐngyuàn kàn ge diànyǐng.",
        "vn": "Có khi tôi đi rạp xem một bộ phim."
      }
    ],
    "hanzi": [
      {
        "c": "时",
        "p": "shí",
        "type": "形声字 · Chữ hình thanh",
        "st": 7,
        "ord": "日 → 寸",
        "rad": "日 (nhật – mặt trời)",
        "mean": "thời gian, lúc",
        "tip": "Bộ 日 (mặt trời) cho biết chữ liên quan đến thời gian.",
        "cf": "",
        "w": "有时 / 时候 / 小时"
      }
    ],
    "colloFull": [
      {
        "zh": "有时去",
        "py": "yǒushí qù",
        "vn": "có lúc đi"
      },
      {
        "zh": "有时在家",
        "py": "yǒushí zài jiā",
        "vn": "có lúc ở nhà"
      },
      {
        "zh": "有时……有时……",
        "py": "yǒushí yǒushí",
        "vn": "lúc thì… lúc thì…"
      },
      {
        "zh": "有时很忙",
        "py": "yǒushí hěn máng",
        "vn": "có lúc rất bận"
      }
    ],
    "patterns": [
      {
        "s": "有时 + V1，有时 + V2",
        "m": "Lúc thì …, lúc thì … — hai vế đối nhau"
      },
      {
        "s": "有时 = 有时候 — cách nói ngắn hơn"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Có lúc tôi ở nhà, có lúc tôi đi thư viện.",
        "answer": "有时我在家，有时我去书店。",
        "answerPy": "Yǒushí wǒ zài jiā, yǒushí wǒ qù shūdiàn.",
        "note": "Hai vế đối nhau, cấu trúc giống nhau.",
        "pair": "有时……有时……"
      },
      {
        "promptLang": "vi",
        "prompt": "Có lúc chị tôi rất bận, không về nhà được.",
        "answer": "有时我姐姐很忙，不能回家。",
        "answerPy": "Yǒushí wǒ jiějie hěn máng, bù néng huí jiā.",
        "note": "有时 = 有时候 — cách nói ngắn hơn.",
        "pair": "有时……"
      }
    ]
  },
  {
    "n": 13,
    "zh": "懂",
    "py": "dǒng",
    "pos": "Động từ",
    "vn": "hiểu",
    "hv": "đổng",
    "em": "💡",
    "img": "/images/hsk2v3-bai-1/dong.jpg",
    "lesson": 4,
    "ex_zh": "有时不太懂她的意思。",
    "ex_py": "Yǒushí bú tài dǒng tā de yìsi.",
    "ex_vn": "Có khi chưa hiểu lắm ý của chị ấy.",
    "exList": [
      {
        "zh": "有时不太懂她的意思。",
        "py": "Yǒushí bú tài dǒng tā de yìsi.",
        "vn": "Có khi chưa hiểu lắm ý của chị ấy."
      },
      {
        "zh": "你懂我的意思吗？",
        "py": "Nǐ dǒng wǒ de yìsi ma?",
        "vn": "Bạn hiểu ý tôi không?"
      }
    ],
    "hanzi": [
      {
        "c": "懂",
        "p": "dǒng",
        "type": "形声字 · Chữ hình thanh",
        "st": 15,
        "ord": "忄 → 艹 → 重",
        "rad": "忄 (tâm đứng – trái tim)",
        "mean": "hiểu, thông tỏ",
        "tip": "Bộ 忄 (tim) + 董: hiểu là việc của trái tim và trí óc.",
        "cf": "",
        "w": "懂 / 听懂 / 看懂"
      }
    ],
    "colloFull": [
      {
        "zh": "听懂",
        "py": "tīng dǒng",
        "vn": "nghe hiểu"
      },
      {
        "zh": "看懂",
        "py": "kàn dǒng",
        "vn": "đọc hiểu"
      },
      {
        "zh": "不懂",
        "py": "bù dǒng",
        "vn": "không hiểu"
      },
      {
        "zh": "懂中文",
        "py": "dǒng Zhōngwén",
        "vn": "hiểu tiếng Trung"
      }
    ],
    "patterns": [
      {
        "s": "听 / 看 + 懂",
        "m": "Nghe hiểu, đọc hiểu — 懂 là kết quả"
      },
      {
        "s": "懂 (hiểu ra) khác 知道 (biết một chuyện)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Thầy nói gì tôi đều nghe hiểu.",
        "answer": "老师说什么我都听懂了。",
        "answerPy": "Lǎoshī shuō shénme wǒ dōu tīngdǒng le.",
        "note": "听懂 — nghe và hiểu được.",
        "pair": "都 + V"
      },
      {
        "promptLang": "vi",
        "prompt": "Quyển sách này tôi đọc không hiểu.",
        "answer": "这本书我看不懂。",
        "answerPy": "Zhè běn shū wǒ kàn bu dǒng.",
        "note": "看不懂 — đọc mà không hiểu nổi.",
        "pair": "V 不 + kết quả"
      }
    ]
  },
  {
    "n": 14,
    "zh": "意思",
    "py": "yìsi",
    "pos": "Danh từ",
    "vn": "ý, ý nghĩa",
    "hv": "ý tư",
    "em": "💭",
    "img": "/images/hsk2v3-bai-1/yisi.jpg",
    "lesson": 4,
    "ex_zh": "你懂我的意思吗？",
    "ex_py": "Nǐ dǒng wǒ de yìsi ma?",
    "ex_vn": "Bạn hiểu ý tôi không?",
    "exList": [
      {
        "zh": "你懂我的意思吗？",
        "py": "Nǐ dǒng wǒ de yìsi ma?",
        "vn": "Bạn hiểu ý tôi không?"
      },
      {
        "zh": "有时不太懂她的意思。",
        "py": "Yǒushí bú tài dǒng tā de yìsi.",
        "vn": "Có khi chưa hiểu lắm ý của chị ấy."
      }
    ],
    "hanzi": [
      {
        "c": "思",
        "p": "sī",
        "type": "会意字 · Chữ hội ý",
        "st": 9,
        "ord": "田 → 心",
        "rad": "心 (tâm – trái tim)",
        "mean": "nghĩ, suy nghĩ",
        "tip": "田 (ruộng, tượng trưng cho đầu óc) + 心 (tim) = suy nghĩ.",
        "cf": "",
        "w": "意思 / 思想"
      }
    ],
    "colloFull": [
      {
        "zh": "什么意思",
        "py": "shénme yìsi",
        "vn": "nghĩa là gì"
      },
      {
        "zh": "有意思",
        "py": "yǒuyìsi",
        "vn": "thú vị"
      },
      {
        "zh": "这个字的意思",
        "py": "zhège zì de yìsi",
        "vn": "nghĩa của chữ này"
      },
      {
        "zh": "不好意思",
        "py": "bù hǎoyìsi",
        "vn": "ngại quá"
      }
    ],
    "patterns": [
      {
        "s": "……的意思 + 是……",
        "m": "Nghĩa của … là …"
      },
      {
        "s": "有意思 (thú vị) và 不好意思 (ngại) — hai cụm quen thuộc với 意思"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Chữ này nghĩa là gì?",
        "answer": "这个字是什么意思？",
        "answerPy": "Zhège zì shì shénme yìsi?",
        "note": "Câu hỏi rất hay dùng trên lớp.",
        "pair": "……什么意思？"
      },
      {
        "promptLang": "vi",
        "prompt": "Bộ phim này rất thú vị.",
        "answer": "这个电影很有意思。",
        "answerPy": "Zhège diànyǐng hěn yǒuyìsi.",
        "note": "有意思 — thú vị.",
        "pair": "很 + Adj"
      }
    ]
  },
  {
    "n": 15,
    "zh": "北京烤鸭",
    "py": "Běijīng Kǎoyā",
    "pos": "Danh từ riêng",
    "vn": "vịt quay Bắc Kinh",
    "hv": "Bắc Kinh khảo áp",
    "em": "🦆",
    "img": "/images/hsk2v3-bai-1/beijingkaoya.jpg",
    "lesson": 4,
    "ex_zh": "她请我们吃了北京烤鸭。",
    "ex_py": "Tā qǐng wǒmen chīle Běijīng Kǎoyā.",
    "ex_vn": "Chị ấy đã mời chúng em ăn vịt quay Bắc Kinh.",
    "exList": [
      {
        "zh": "她请我们吃了北京烤鸭。",
        "py": "Tā qǐng wǒmen chīle Běijīng Kǎoyā.",
        "vn": "Chị ấy đã mời chúng em ăn vịt quay Bắc Kinh."
      },
      {
        "zh": "北京烤鸭是北京的名菜。",
        "py": "Běijīng Kǎoyā shì Běijīng de míngcài.",
        "vn": "Vịt quay Bắc Kinh là món nổi tiếng của Bắc Kinh."
      }
    ],
    "hanzi": [
      {
        "c": "鸭",
        "p": "yā",
        "type": "形声字 · Chữ hình thanh",
        "st": 10,
        "ord": "甲 → 鸟",
        "rad": "鸟 (điểu – chim)",
        "mean": "con vịt",
        "tip": "甲 (giáp) chỉ âm + 鸟 (chim) chỉ nghĩa: vịt là một loài chim.",
        "cf": "",
        "w": "烤鸭 / 北京烤鸭"
      }
    ],
    "colloFull": [
      {
        "zh": "吃北京烤鸭",
        "py": "chī Běijīng Kǎoyā",
        "vn": "ăn vịt quay Bắc Kinh"
      },
      {
        "zh": "一只北京烤鸭",
        "py": "yì zhī Běijīng Kǎoyā",
        "vn": "một con vịt quay Bắc Kinh"
      },
      {
        "zh": "好吃的北京烤鸭",
        "py": "hǎochī de Běijīng Kǎoyā",
        "vn": "vịt quay Bắc Kinh ngon"
      },
      {
        "zh": "请你吃北京烤鸭",
        "py": "qǐng nǐ chī Běijīng Kǎoyā",
        "vn": "mời bạn ăn vịt quay Bắc Kinh"
      }
    ],
    "patterns": [
      {
        "s": "吃 + 北京烤鸭",
        "m": "Ăn vịt quay Bắc Kinh — món nổi tiếng nhất của Bắc Kinh"
      },
      {
        "s": "北京 + 烤鸭",
        "m": "Vịt quay (烤鸭) kiểu Bắc Kinh (北京)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tôi mời bạn ăn vịt quay Bắc Kinh nhé.",
        "answer": "我请你吃北京烤鸭吧。",
        "answerPy": "Wǒ qǐng nǐ chī Běijīng kǎoyā ba.",
        "note": "请 + người + động từ — mời ai làm gì.",
        "pair": "请 + người + V"
      },
      {
        "promptLang": "vi",
        "prompt": "Đây là lần đầu tiên tôi ăn vịt quay Bắc Kinh, ngon cực kỳ.",
        "answer": "这是我第一次吃北京烤鸭，非常好吃。",
        "answerPy": "Zhè shì wǒ dì-yī cì chī Běijīng kǎoyā, fēicháng hǎochī.",
        "note": "北京烤鸭 là món nổi tiếng nhất của Bắc Kinh.",
        "pair": "第一次 + V"
      }
    ]
  }
];

var wuData = [
  { img: '😅', label: '不好意思', py: 'bù hǎoyìsi', letter: 'A' },
  { img: '🧳', label: '旅游', py: 'lǚyóu', letter: 'B' },
  { img: '🗣️', label: '介绍', py: 'jièshào', letter: 'C' },
  { img: '🤲', label: '帮忙', py: 'bāngmáng', letter: 'D' },
  { img: '🤝', label: '接', py: 'jiē', letter: 'E' },
  { img: '🦆', label: '北京烤鸭', py: 'Běijīng Kǎoyā', letter: 'F' }
];

var dialogData = [
  {
    scene: '在机场 · Ở sân bay (Vương Nhất Tuyết đón Bạch Gia Nguyệt và Annie)',
    preQuiz: [
      { q: '谁来接白家月了？', opts: ['王一飞', '王一雪', '她的姐姐'], ans: 1 },
      { q: '王一飞给谁打电话了？', opts: ['安妮', '白家月', '王一雪'], ans: 2 }
    ],
    lines: [
      { sp: 0, zh: '请问，您是王一飞老师的姐姐吗？', py: 'Qǐngwèn, nín shì Wáng Yīfēi lǎoshī de jiějie ma?', vn: 'Xin hỏi, chị là chị gái của cô Vương Nhất Phi phải không ạ?' },
      { sp: 1, zh: '是的，你们就是她的学生吧？', py: 'Shì de, nǐmen jiù shì tā de xuésheng ba?', vn: 'Đúng rồi, các em là học sinh của cô ấy phải không?' },
      { sp: 0, zh: '对。我是白家月，她是安妮。', py: 'Duì. Wǒ shì Bái Jiāyuè, tā shì Ānnī.', vn: 'Vâng ạ, em là Bạch Gia Nguyệt, bạn ấy là Annie.' },
      { sp: 1, zh: '你们好，我叫王一雪。一飞给我打电话了，让我来接你们。', py: 'Nǐmen hǎo, wǒ jiào Wáng Yīxuě. Yīfēi gěi wǒ dǎ diànhuà le, ràng wǒ lái jiē nǐmen.', vn: 'Chào các em. Chị tên là Vương Nhất Tuyết. Nhất Phi đã gọi điện thoại cho chị, nhờ chị đến đón các em.' },
      { sp: 0, zh: '谢谢您。', py: 'Xièxie nín.', vn: 'Chúng em cảm ơn chị ạ.' },
      { sp: 1, zh: '不客气。', py: 'Bú kèqi.', vn: 'Đừng khách sáo vậy.' }
    ]
  },
  {
    scene: '在车里 · Trong xe (nói chuyện trên đường về)',
    preQuiz: [
      { q: '白家月是第几次来北京？', opts: ['第一次', '第四次', '第七次'], ans: 0 },
      { q: '白家月和安妮是来北京做什么的？', opts: ['旅游', '学中文', '找王一雪'], ans: 0 }
    ],
    lines: [
      { sp: 1, zh: '你们是第一次来北京吗？', py: 'Nǐmen shì dì-yī cì lái Běijīng ma?', vn: 'Đây là lần đầu các em đến Bắc Kinh phải không?' },
      { sp: 0, zh: '是的，我们都是第一次来。', py: 'Shì de, wǒmen dōu shì dì-yī cì lái.', vn: 'Vâng ạ, chúng em đều là lần đầu tiên đến đây ạ.' },
      { sp: 1, zh: '你们是来学中文的吗？', py: 'Nǐmen shì lái xué Zhōngwén de ma?', vn: 'Các em đến học tiếng Trung Quốc à?' },
      { sp: 0, zh: '不是，我们是来旅游的。', py: 'Bú shì, wǒmen shì lái lǚyóu de.', vn: 'Không phải, chúng em đến du lịch ạ.' },
      { sp: 1, zh: '我这几天都不忙，你们有事就找我。', py: 'Wǒ zhè jǐ tiān dōu bù máng, nǐmen yǒu shì jiù zhǎo wǒ.', vn: 'Mấy hôm nay chị đều không bận, các em có việc gì thì cứ tìm chị nhé.' },
      { sp: 0, zh: '好的，谢谢您。', py: 'Hǎo de, xièxie nín.', vn: 'Vâng ạ, cảm ơn chị.' }
    ]
  },
  {
    scene: '接电话 · Nghe điện thoại (Trần Thiên Trung gọi cho Bạch Gia Nguyệt)',
    preQuiz: [
      { q: '陈天中为什么给白家月打电话？', opts: ['找她帮忙', '请她吃饭', '让她接个朋友'], ans: 0 },
      { q: '白家月是什么时候到北京的？', opts: ['昨天中午', '昨天晚上', '今天早上'], ans: 2 }
    ],
    lines: [
      { sp: 1, zh: '喂，家月，你明天有时间吗？我想请你帮个忙。', py: 'Wèi, Jiāyuè, nǐ míngtiān yǒu shíjiān ma? Wǒ xiǎng qǐng nǐ bāng ge máng.', vn: 'A lô, Gia Nguyệt à, mai bạn có thời gian không? Mình muốn nhờ bạn giúp một việc.' },
      { sp: 0, zh: '不好意思，天中，我已经到北京了。', py: 'Bù hǎoyìsi, Tiānzhōng, wǒ yǐjīng dào Běijīng le.', vn: 'Xin lỗi Thiên Trung nhé, mình đã đến Bắc Kinh rồi.' },
      { sp: 1, zh: '你是什么时候到的？', py: 'Nǐ shì shénme shíhou dào de?', vn: 'Bạn đến khi nào vậy?' },
      { sp: 0, zh: '我是今天早上到的。你有事可以叫李文帮忙，他还在学校呢。', py: 'Wǒ shì jīntiān zǎoshang dào de. Nǐ yǒu shì kěyǐ jiào Lǐ Wén bāngmáng, tā hái zài xuéxiào ne.', vn: 'Sáng hôm nay mình đến. Nếu bạn cần giúp việc gì thì có thể nhờ Lý Văn nhé, bạn ấy vẫn đang ở trường.' },
      { sp: 1, zh: '好的，那我给他打个电话。', py: 'Hǎo de, nà wǒ gěi tā dǎ ge diànhuà.', vn: 'Được rồi, vậy mình sẽ gọi điện thoại cho bạn ấy.' },
      { sp: 0, zh: '好，再见！', py: 'Hǎo, zàijiàn!', vn: 'Ừ, tạm biệt nhé.' }
    ]
  },
  {
    scene: '在酒店 · Ở khách sạn (Bạch Gia Nguyệt nhắn tin cho cô Vương Nhất Phi)',
    preQuiz: [
      { q: '王老师的姐姐请白家月吃什么了？', opts: ['面包', '饺子', '北京烤鸭'], ans: 2 },
      { q: '白家月为什么不懂王老师姐姐的意思？', opts: ['她不会中文', '她的中文不太好', '没有王老师帮忙'], ans: 1 }
    ],
    lines: [
      { sp: 0, zh: '王老师，我们已经到北京了，是您姐姐来接的我们。', py: 'Wáng lǎoshī, wǒmen yǐjīng dào Běijīng le, shì nín jiějie lái jiē de wǒmen.', vn: 'Thưa cô Vương, chúng em đã tới Bắc Kinh rồi, chị gái của cô đã tới đón chúng em.' },
      { sp: 0, zh: '她请我们吃了北京烤鸭，还给我们介绍了很多东西。', py: 'Tā qǐng wǒmen chīle Běijīng Kǎoyā, hái gěi wǒmen jièshàole hěn duō dōngxi.', vn: 'Chị ấy đã mời chúng em ăn vịt quay Bắc Kinh, còn giới thiệu cho chúng em rất nhiều thứ.' },
      { sp: 0, zh: '我们的中文不太好，有时不太懂她的意思。', py: 'Wǒmen de Zhōngwén bú tài hǎo, yǒushí bú tài dǒng tā de yìsi.', vn: 'Tiếng Trung Quốc của chúng em không tốt lắm, đôi khi chưa hiểu hết ý của chị ấy.' }
    ]
  }
];

var listenData = [
  {
    audio: '请问，您是王一飞老师的姐姐吗？是的，你们就是她的学生吧？我叫王一雪，一飞给我打电话了，让我来接你们。',
    questions: [
      { q: '谁来接白家月了？', opts: ['王一飞', '王一雪', '她的姐姐'], ans: 1 },
      { q: '王一飞给谁打电话了？', opts: ['安妮', '白家月', '王一雪'], ans: 2 }
    ]
  },
  {
    audio: '你们是第一次来北京吗？是的，我们都是第一次来。你们是来学中文的吗？不是，我们是来旅游的。',
    questions: [
      { q: '白家月是第几次来北京？', opts: ['第一次', '第四次', '第七次'], ans: 0 },
      { q: '她们是来北京做什么的？', opts: ['旅游', '学中文', '找王一雪'], ans: 0 }
    ]
  },
  {
    audio: '喂，家月，你明天有时间吗？我想请你帮个忙。不好意思，天中，我已经到北京了。你是什么时候到的？我是今天早上到的。',
    questions: [
      { q: '陈天中为什么给白家月打电话？', opts: ['找她帮忙', '请她吃饭', '让她接个朋友'], ans: 0 },
      { q: '白家月是什么时候到北京的？', opts: ['昨天中午', '昨天晚上', '今天早上'], ans: 2 }
    ]
  },
  {
    audio: '王老师，我们已经到北京了，是您姐姐来接的我们。她请我们吃了北京烤鸭，还给我们介绍了很多东西。',
    questions: [
      { q: '王老师到北京了吗？', opts: ['到了', '没到，是学生到了北京', '不知道'], ans: 1 },
      { q: '她们吃了什么？', opts: ['面包', '饺子', '北京烤鸭'], ans: 2 }
    ]
  }
];

var matchData = [
  { left: '帮个', right: '忙' },
  { left: '打个', right: '电话' },
  { left: '第一', right: '次' },
  { left: '来', right: '旅游' },
  { left: '不好', right: '意思' },
  { left: '北京', right: '烤鸭' }
];

var fillData = [
  { pre: '一飞给我打电话了，', blank: '让', post: '我来接你们。', hint: '(nhờ, bảo)', ans: '让' },
  { pre: '你们是第一', blank: '次', post: '来北京吗？', hint: '(lần)', ans: '次' },
  { pre: '不是，我们是来', blank: '旅游', post: '的。', hint: '(du lịch)', ans: '旅游' },
  { pre: '不好意思，我', blank: '已经', post: '到北京了。', hint: '(đã)', ans: '已经' },
  { pre: '我想请你帮个', blank: '忙', post: '。', hint: '(giúp đỡ)', ans: '忙' },
  { pre: '安妮，我给你', blank: '介绍', post: '一下。', hint: '(giới thiệu)', ans: '介绍' },
  { pre: '我', blank: '有时', post: '不太懂她的意思。', hint: '(có lúc)', ans: '有时' },
  { pre: '好的，', blank: '那', post: '我给他打个电话。', hint: '(vậy thì)', ans: '那' }
];

var sortData = [
  { words: ['一飞', '让', '我', '来', '接', '你们', '。'], ans: '一飞让我来接你们。', audio: '一飞让我来接你们。' },
  { words: ['我们', '是', '来', '旅游', '的', '。'], ans: '我们是来旅游的。', audio: '我们是来旅游的。' },
  { words: ['你', '是', '什么时候', '到', '的', '？'], ans: '你是什么时候到的？', audio: '你是什么时候到的？' },
  { words: ['我', '想', '请', '你', '帮个忙', '。'], ans: '我想请你帮个忙。', audio: '我想请你帮个忙。' },
  { words: ['她', '请', '我们', '吃', '了', '北京烤鸭', '。'], ans: '她请我们吃了北京烤鸭。', audio: '她请我们吃了北京烤鸭。' },
  { words: ['你们', '就', '是', '她的', '学生', '吧', '？'], ans: '你们就是她的学生吧？', audio: '你们就是她的学生吧？' }
];

var mcData = [
  { q: '我＿＿去电影院看个电影。(có khi)', opts: ['有时', '已经', '意思', '介绍'], ans: 0 },
  { q: '上课要多听、多说，你懂我的＿＿吗？', opts: ['帮忙', '意思', '已经', '旅游'], ans: 1 },
  { q: '我很喜欢北京，这＿＿是我第三次来北京了。', opts: ['有时', '介绍', '已经', '帮忙'], ans: 2 },
  { q: '安妮，我给你＿＿一下，这是我的中国朋友李文。', opts: ['介绍', '帮忙', '意思', '有时'], ans: 0 },
  { q: '今天的工作太多了！那你找个人来＿＿吧。', opts: ['意思', '旅游', '帮忙', '已经'], ans: 2 },
  { q: '"你们就是她的学生吧？" — 「吧」ở đây diễn đạt điều gì?', opts: ['Sự suy đoán, ước tính', 'Mệnh lệnh', 'Phủ định', 'Cảm thán'], ans: 0 },
  { q: 'Câu nào dùng đúng cấu trúc "是……的"?', opts: ['我是今天早上到的。', '我今天早上到的是。', '是我今天早上到。', '我到的是今天早上。'], ans: 0 },
  { q: 'Câu kiêm ngữ nào đúng?', opts: ['妈妈叫孩子们回家。', '妈妈回家叫孩子们。', '孩子们叫回家妈妈。', '叫妈妈孩子们回家。'], ans: 0 }
];

var speakingData = {
  intro: 'Nhấn 🔊 nghe câu hỏi/tình huống, rồi tự ghi âm câu trả lời của bạn dựa theo nội dung 4 bài khoá.',
  questions: [
    {
      q_zh: '有人来机场接你，你想确认对方是谁，你怎么问？',
      q_vn: 'Có người ra sân bay đón bạn, bạn muốn xác nhận họ là ai, bạn hỏi thế nào?',
      hint: '请问，您是……吗？',
      sample: '请问，您是王一飞老师的姐姐吗？',
      sample_vn: 'Xin hỏi, chị là chị gái của cô Vương Nhất Phi phải không ạ?',
      note: '请问 dùng để hỏi lịch sự; 您 là cách xưng hô kính trọng.'
    },
    {
      q_zh: '你是什么时候到北京的？',
      q_vn: 'Bạn đến Bắc Kinh khi nào?',
      hint: '我是……到的。',
      sample: '我是今天早上到的。',
      sample_vn: 'Tôi đến vào sáng nay.',
      note: 'Câu "是……的" nhấn mạnh thời gian xảy ra sự việc trong quá khứ.'
    },
    {
      q_zh: '你们是来学中文的吗？',
      q_vn: 'Các bạn đến để học tiếng Trung à?',
      hint: '不是，我们是来……的。',
      sample: '不是，我们是来旅游的。',
      sample_vn: 'Không phải, chúng tôi đến du lịch.',
      note: 'Câu phủ định của "是……的" không được lược bỏ chữ 是.'
    },
    {
      q_zh: '你想请朋友帮你一个忙，你怎么说？',
      q_vn: 'Bạn muốn nhờ bạn mình giúp một việc, bạn nói thế nào?',
      hint: '我想请你帮个忙。',
      sample: '你明天有时间吗？我想请你帮个忙。',
      sample_vn: 'Mai bạn có thời gian không? Mình muốn nhờ bạn giúp một việc.',
      note: 'Câu kiêm ngữ: 请/让/叫 + người + động từ. 帮忙 là từ ly hợp nên nói 帮个忙.'
    },
    {
      q_zh: '请介绍一下你的中国朋友。',
      q_vn: 'Hãy giới thiệu một chút về người bạn Trung Quốc của bạn.',
      hint: '我给你介绍一下，这是……',
      sample: '我给你介绍一下，这是我的中国朋友李文。',
      sample_vn: 'Mình giới thiệu một chút, đây là bạn Trung Quốc của mình — Lý Văn.',
      note: '给 + người + 介绍一下 là mẫu câu giới thiệu rất hay dùng.'
    }
  ]
};

var translateData = [
  { vi: 'Nhất Phi đã gọi điện thoại cho chị, nhờ chị đến đón các em.', zh: '一飞给我打电话了，让我来接你们。', py: 'Yīfēi gěi wǒ dǎ diànhuà le, ràng wǒ lái jiē nǐmen.' },
  { vi: 'Không phải, chúng em đến du lịch ạ.', zh: '不是，我们是来旅游的。', py: 'Bú shì, wǒmen shì lái lǚyóu de.' },
  { vi: 'Mình muốn nhờ bạn giúp một việc.', zh: '我想请你帮个忙。', py: 'Wǒ xiǎng qǐng nǐ bāng ge máng.' },
  { vi: 'Chị ấy đã mời chúng em ăn vịt quay Bắc Kinh.', zh: '她请我们吃了北京烤鸭。', py: 'Tā qǐng wǒmen chīle Běijīng Kǎoyā.' },
  { vi: 'Có khi em chưa hiểu lắm ý của chị ấy.', zh: '有时不太懂她的意思。', py: 'Yǒushí bú tài dǒng tā de yìsi.' }
];

var translateDataRev = [
  { vi: 'Các em chính là học sinh của cô ấy phải không?', zh: '你们就是她的学生吧？', py: 'Nǐmen jiù shì tā de xuésheng ba?' },
  { vi: 'Đây là lần đầu các em đến Bắc Kinh phải không?', zh: '你们是第一次来北京吗？', py: 'Nǐmen shì dì-yī cì lái Běijīng ma?' },
  { vi: 'Mấy hôm nay chị đều không bận, các em có việc gì thì cứ tìm chị.', zh: '我这几天都不忙，你们有事就找我。', py: 'Wǒ zhè jǐ tiān dōu bù máng, nǐmen yǒu shì jiù zhǎo wǒ.' },
  { vi: 'Xin lỗi nhé, mình đã đến Bắc Kinh rồi.', zh: '不好意思，我已经到北京了。', py: 'Bù hǎoyìsi, wǒ yǐjīng dào Běijīng le.' },
  { vi: 'Được rồi, vậy mình sẽ gọi điện thoại cho bạn ấy.', zh: '好的，那我给他打个电话。', py: 'Hǎo de, nà wǒ gěi tā dǎ ge diànhuà.' }
];
