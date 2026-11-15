// ══════════════════════════════════════════
// DATA — Bài 8: 让我想想再告诉你
// ══════════════════════════════════════════
var vocabData = [
  {
    "n": 1,
    "zh": "让",
    "py": "ràng",
    "pos": "Động từ",
    "vn": "để, bảo, cho phép",
    "hv": "nhượng",
    "em": "🙏",
    "lesson": 1,
    "ex_zh": "让我想想。",
    "ex_py": "Ràng wǒ xiǎngxiang.",
    "ex_vn": "Để tôi suy nghĩ một chút.",
    "exList": [
      {
        "zh": "让我想想。",
        "py": "Ràng wǒ xiǎngxiang.",
        "vn": "Để tôi suy nghĩ một chút."
      },
      {
        "zh": "老师让我给大卫打个电话。",
        "py": "Lǎoshī ràng wǒ gěi Dàwèi dǎ ge diànhuà.",
        "vn": "Thầy giáo bảo tôi gọi điện thoại cho David."
      },
      {
        "zh": "请让一下。",
        "py": "Qǐng ràng yíxià.",
        "vn": "Làm ơn tránh ra một chút."
      }
    ],
    "hanzi": [
      {
        "c": "让",
        "p": "ràng",
        "type": "左右结构 · Trái-phải",
        "st": 5,
        "ord": "讠(ngôn) trái → 上 (thượng) phải",
        "rad": "讠(ngôn – lời nói)",
        "mean": "để, bảo, nhường",
        "tip": "Bộ 讠(lời nói) → dùng lời nói khiến người khác làm gì, hoặc NHƯỜNG cho ai đó.",
        "cf": "样 (yàng, kiểu dáng)",
        "w": "让我 / 让开 / 谦让"
      }
    ],
    "colloFull": [
      {
        "zh": "让我去",
        "py": "ràng wǒ qù",
        "vn": "để tôi đi"
      },
      {
        "zh": "让他来",
        "py": "ràng tā lái",
        "vn": "cho anh ấy đến"
      },
      {
        "zh": "不让",
        "py": "bú ràng",
        "vn": "không cho"
      },
      {
        "zh": "让我看看",
        "py": "ràng wǒ kànkàn",
        "vn": "cho tôi xem"
      }
    ],
    "patterns": [
      {
        "s": "让 + người + động từ",
        "m": "Để ai làm gì: 让我看看"
      },
      {
        "s": "让 (cho phép, sai ai làm) — người đứng giữa 让 và động từ"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Cho tôi xem một chút cái áo trắng này.",
        "answer": "让我看一下这件白衣服。",
        "answerPy": "Ràng wǒ kàn yíxià zhè jiàn bái yīfu.",
        "note": "Người đứng giữa 让 và động từ.",
        "pair": "让 + người + V"
      },
      {
        "promptLang": "vi",
        "prompt": "Mẹ không cho tôi uống cà phê.",
        "answer": "妈妈不让我喝咖啡。",
        "answerPy": "Māma bú ràng wǒ hē kāfēi.",
        "note": "不 đứng TRƯỚC 让.",
        "pair": "不让 + người + V"
      }
    ]
  },
  {
    "n": 2,
    "zh": "告诉",
    "py": "gàosu",
    "pos": "Động từ",
    "vn": "nói cho biết, mách",
    "hv": "cáo tố",
    "em": "💬",
    "lesson": 1,
    "ex_zh": "再告诉你。",
    "ex_py": "Zài gàosu nǐ.",
    "ex_vn": "Rồi nói cho bạn biết sau.",
    "exList": [
      {
        "zh": "再告诉你。",
        "py": "Zài gàosu nǐ.",
        "vn": "Rồi nói cho bạn biết sau."
      },
      {
        "zh": "请告诉我你的名字。",
        "py": "Qǐng gàosu wǒ nǐ de míngzi.",
        "vn": "Làm ơn cho tôi biết tên bạn."
      },
      {
        "zh": "我告诉他了。",
        "py": "Wǒ gàosu tā le.",
        "vn": "Tôi đã nói cho anh ấy biết rồi."
      }
    ],
    "hanzi": [
      {
        "c": "告",
        "p": "gào",
        "type": "上下结构 · Trên-dưới",
        "st": 7,
        "ord": "牛(biến thể) trên → 口 dưới",
        "rad": "口 (khẩu – miệng)",
        "mean": "báo, nói",
        "tip": "Bộ 口 (miệng) → dùng lời BÁO cho người khác biết.",
        "cf": "吿 (dạng cổ của 告)",
        "w": "告诉 / 报告 / 广告"
      },
      {
        "c": "诉",
        "p": "sù",
        "type": "左右结构 · Trái-phải",
        "st": 7,
        "ord": "讠(ngôn) trái → 斥 (xích) phải",
        "rad": "讠(ngôn – lời nói)",
        "mean": "kể, nói ra",
        "tip": "Bộ 讠(lời nói) → 告 + 诉 = nói ra cho ai đó biết = MÁCH, NÓI CHO BIẾT.",
        "cf": "折 (zhé, gãy, bộ 扌)",
        "w": "告诉 / 诉说"
      }
    ],
    "colloFull": [
      {
        "zh": "告诉我",
        "py": "gàosu wǒ",
        "vn": "nói cho tôi"
      },
      {
        "zh": "告诉他",
        "py": "gàosu tā",
        "vn": "nói với anh ấy"
      },
      {
        "zh": "告诉老师",
        "py": "gàosu lǎoshī",
        "vn": "nói với thầy"
      },
      {
        "zh": "不告诉",
        "py": "bú gàosu",
        "vn": "không nói"
      }
    ],
    "patterns": [
      {
        "s": "告诉 + người + việc gì",
        "m": "Cho ai biết việc gì: 告诉我你的名字"
      },
      {
        "s": "告诉 phải có người nghe; 说 thì không cần"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Bạn nói cho tôi biết, mấy giờ bắt đầu thi?",
        "answer": "你告诉我，几点开始考试？",
        "answerPy": "Nǐ gàosu wǒ, jǐ diǎn kāishǐ kǎoshì?",
        "note": "告诉 phải có người nghe.",
        "pair": "告诉 + người"
      },
      {
        "promptLang": "vi",
        "prompt": "Tôi chưa nói với thầy việc này.",
        "answer": "这件事情我还没告诉老师。",
        "answerPy": "Zhè jiàn shìqing wǒ hái méi gàosu lǎoshī.",
        "note": "还没 — việc chưa xảy ra.",
        "pair": "还没 + V"
      }
    ]
  },
  {
    "n": 3,
    "zh": "等",
    "py": "děng",
    "pos": "Động từ",
    "vn": "chờ, đợi",
    "hv": "đẳng",
    "em": "⏳",
    "lesson": 2,
    "ex_zh": "你等等我好吗？",
    "ex_py": "Nǐ děngděng wǒ hǎoma?",
    "ex_vn": "Bạn đợi tôi một chút được không?",
    "exList": [
      {
        "zh": "你等等我好吗？",
        "py": "Nǐ děngděng wǒ hǎoma?",
        "vn": "Bạn đợi tôi một chút được không?"
      },
      {
        "zh": "我在门口等你。",
        "py": "Wǒ zài ménkǒu děng nǐ.",
        "vn": "Tôi đợi bạn ở cửa."
      },
      {
        "zh": "请等一下。",
        "py": "Qǐng děng yíxià.",
        "vn": "Làm ơn đợi một chút."
      }
    ],
    "hanzi": [
      {
        "c": "等",
        "p": "děng",
        "type": "上下结构 · Trên-dưới",
        "st": 12,
        "ord": "⺮(trúc) trên → 寺 (tự) dưới",
        "rad": "⺮(trúc – tre)",
        "mean": "chờ, đợi; cấp bậc",
        "tip": "Xưa dùng thẻ tre 竹 xếp hàng theo thứ tự tại 寺 (nha môn) → phải CHỜ ĐỢI đến lượt.",
        "cf": "待 (dài, chờ đợi, bộ 彳)",
        "w": "等等 / 等一下 / 平等"
      }
    ],
    "colloFull": [
      {
        "zh": "等我",
        "py": "děng wǒ",
        "vn": "chờ tôi"
      },
      {
        "zh": "等一下",
        "py": "děng yíxià",
        "vn": "chờ một chút"
      },
      {
        "zh": "等公共汽车",
        "py": "děng gōnggòngqìchē",
        "vn": "chờ xe buýt"
      },
      {
        "zh": "在门外等",
        "py": "zài mén wài děng",
        "vn": "chờ ngoài cửa"
      }
    ],
    "patterns": [
      {
        "s": "等 + người / vật",
        "m": "Chờ ai, chờ cái gì: 等公共汽车"
      },
      {
        "s": "等一下 — câu nói lịch sự khi cần người khác chờ"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Bạn chờ tôi một chút, tôi đến ngay.",
        "answer": "你等我一下，我就来。",
        "answerPy": "Nǐ děng wǒ yíxià, wǒ jiù lái.",
        "note": "就来 — đến ngay lập tức.",
        "pair": "就 + V"
      },
      {
        "promptLang": "vi",
        "prompt": "Tôi chờ xe buýt nửa tiếng rồi.",
        "answer": "我等了半个小时公共汽车。",
        "answerPy": "Wǒ děngle bàn ge xiǎoshí gōnggòng qìchē.",
        "note": "Thời lượng đứng SAU động từ.",
        "pair": "……了 + thời lượng"
      }
    ]
  },
  {
    "n": 4,
    "zh": "找",
    "py": "zhǎo",
    "pos": "Động từ",
    "vn": "tìm, kiếm",
    "hv": "trảo",
    "em": "🔍",
    "lesson": 2,
    "ex_zh": "我想找时间去看看。",
    "ex_py": "Wǒ xiǎng zhǎo shíjiān qù kànkan.",
    "ex_vn": "Tôi muốn tìm thời gian ghé thăm cậu ấy.",
    "exList": [
      {
        "zh": "我想找时间去看看。",
        "py": "Wǒ xiǎng zhǎo shíjiān qù kànkan.",
        "vn": "Tôi muốn tìm thời gian ghé thăm cậu ấy."
      },
      {
        "zh": "你在找什么？",
        "py": "Nǐ zài zhǎo shénme?",
        "vn": "Bạn đang tìm gì vậy?"
      },
      {
        "zh": "我找不到我的手表了。",
        "py": "Wǒ zhǎo bú dào wǒ de shǒubiǎo le.",
        "vn": "Tôi tìm không thấy đồng hồ của mình."
      }
    ],
    "hanzi": [
      {
        "c": "找",
        "p": "zhǎo",
        "type": "左右结构 · Trái-phải",
        "st": 7,
        "ord": "扌(thủ) trái → 戈 (qua) phải",
        "rad": "扌(thủ – tay)",
        "mean": "tìm, kiếm",
        "tip": "Bộ 扌(tay) → dùng tay lục lọi, TÌM KIẾM vật gì đó.",
        "cf": "我 (wǒ, tôi, cùng chứa 戈)",
        "w": "找到 / 找工作 / 找时间"
      }
    ],
    "colloFull": [
      {
        "zh": "找我",
        "py": "zhǎo wǒ",
        "vn": "tìm tôi"
      },
      {
        "zh": "找什么",
        "py": "zhǎo shénme",
        "vn": "tìm gì"
      },
      {
        "zh": "找到",
        "py": "zhǎo dào",
        "vn": "tìm được"
      },
      {
        "zh": "找工作",
        "py": "zhǎo gōngzuò",
        "vn": "tìm việc làm"
      }
    ],
    "patterns": [
      {
        "s": "找 + người / vật",
        "m": "Tìm ai, tìm cái gì"
      },
      {
        "s": "找 có bộ 扌 (tay) — tìm bằng tay"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Có người tìm bạn ngoài cửa.",
        "answer": "门外有人找你。",
        "answerPy": "Mén wài yǒu rén zhǎo nǐ.",
        "note": "有人 + động từ — có người làm gì.",
        "pair": "nơi chốn + 有人 + V"
      },
      {
        "promptLang": "vi",
        "prompt": "Chị tôi muốn tìm một công việc mới.",
        "answer": "我姐姐想找一个新工作。",
        "answerPy": "Wǒ jiějie xiǎng zhǎo yí ge xīn gōngzuò.",
        "note": "找工作 — tìm việc làm.",
        "pair": "想 + V"
      }
    ]
  },
  {
    "n": 5,
    "zh": "事情",
    "py": "shìqing",
    "pos": "Danh từ",
    "vn": "sự việc, việc, chuyện",
    "hv": "sự tình",
    "em": "📋",
    "lesson": 2,
    "ex_zh": "大卫有什么事情吗？",
    "ex_py": "Dàwèi yǒu shénme shìqing ma?",
    "ex_vn": "David có chuyện gì vậy?",
    "exList": [
      {
        "zh": "大卫有什么事情吗？",
        "py": "Dàwèi yǒu shénme shìqing ma?",
        "vn": "David có chuyện gì vậy?"
      },
      {
        "zh": "我今天有很多事情要做。",
        "py": "Wǒ jīntiān yǒu hěn duō shìqing yào zuò.",
        "vn": "Hôm nay tôi có nhiều việc phải làm."
      },
      {
        "zh": "这件事情很重要。",
        "py": "Zhè jiàn shìqing hěn zhòngyào.",
        "vn": "Việc này rất quan trọng."
      }
    ],
    "hanzi": [
      {
        "c": "事",
        "p": "shì",
        "type": "独体字 · Chữ đơn",
        "st": 8,
        "ord": "一→口→彐→亅",
        "rad": "亅 (quyết)",
        "mean": "việc, sự việc",
        "tip": "Hình bàn tay cầm dụng cụ hành sự cách điệu → \"VIỆC, CÔNG VIỆC\".",
        "cf": "吏 (lì, quan lại)",
        "w": "事情 / 有事 / 工作的事"
      },
      {
        "c": "情",
        "p": "qíng",
        "type": "左右结构 · Trái-phải",
        "st": 11,
        "ord": "忄(tâm) trái → 青 (thanh) phải",
        "rad": "忄(tâm – trái tim)",
        "mean": "tình cảm; tình huống",
        "tip": "Bộ 忄(tâm) → 事 + 情 = việc liên quan tới cảm xúc/tình huống cụ thể = SỰ VIỆC.",
        "cf": "请 (qǐng, mời, bộ 讠)",
        "w": "事情 / 心情 / 事情多"
      }
    ],
    "colloFull": [
      {
        "zh": "一件事情",
        "py": "yí jiàn shìqing",
        "vn": "một việc"
      },
      {
        "zh": "什么事情",
        "py": "shénme shìqing",
        "vn": "việc gì"
      },
      {
        "zh": "很多事情",
        "py": "hěn duō shìqing",
        "vn": "rất nhiều việc"
      },
      {
        "zh": "公司的事情",
        "py": "gōngsī de shìqing",
        "vn": "việc của công ty"
      }
    ],
    "patterns": [
      {
        "s": "số + 件 + 事情",
        "m": "Lượng từ của 事情 là 件"
      },
      {
        "s": "事 + 情",
        "m": "Hai chữ cùng nghĩa ghép lại thành một từ"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Hôm nay tôi có rất nhiều việc, không có thời gian đi bơi.",
        "answer": "今天我有很多事情，没有时间去游泳。",
        "answerPy": "Jīntiān wǒ yǒu hěn duō shìqing, méiyǒu shíjiān qù yóuyǒng.",
        "note": "很多 đứng trước danh từ.",
        "pair": "很多 + N"
      },
      {
        "promptLang": "vi",
        "prompt": "Tôi muốn nói với bạn một việc.",
        "answer": "我想告诉你一件事情。",
        "answerPy": "Wǒ xiǎng gàosu nǐ yí jiàn shìqing.",
        "note": "Lượng từ của 事情 là 件.",
        "pair": "一件事情"
      }
    ]
  },
  {
    "n": 6,
    "zh": "服务员",
    "py": "fúwùyuán",
    "pos": "Danh từ",
    "vn": "nhân viên phục vụ",
    "hv": "phục vụ viên",
    "em": "🛎️",
    "lesson": 3,
    "ex_zh": "服务员，门打不开了。",
    "ex_py": "Fúwùyuán, mén dǎ bù kāi le.",
    "ex_vn": "Lễ tân ơi, cửa không mở được rồi.",
    "exList": [
      {
        "zh": "服务员，门打不开了。",
        "py": "Fúwùyuán, mén dǎ bù kāi le.",
        "vn": "Lễ tân ơi, cửa không mở được rồi."
      },
      {
        "zh": "服务员，请给我一杯水。",
        "py": "Fúwùyuán, qǐng gěi wǒ yì bēi shuǐ.",
        "vn": "Phục vụ ơi, cho tôi một ly nước."
      },
      {
        "zh": "这里的服务员很热情。",
        "py": "Zhèlǐ de fúwùyuán hěn rèqíng.",
        "vn": "Nhân viên phục vụ ở đây rất nhiệt tình."
      }
    ],
    "hanzi": [
      {
        "c": "服",
        "p": "fú",
        "type": "左右结构 · Trái-phải",
        "st": 8,
        "ord": "月(nhục) trái → 𠬝(phục) phải",
        "rad": "月 (nhục – thịt/thân thể)",
        "mean": "phục vụ; quần áo",
        "tip": "Bộ 月(thân thể) → hành động chăm sóc thân thể người khác = PHỤC VỤ.",
        "cf": "报 (bào, báo, Bài 4: 报纸)",
        "w": "服务员 / 衣服 / 服务"
      },
      {
        "c": "务",
        "p": "wù",
        "type": "上下结构 · Trên-dưới",
        "st": 5,
        "ord": "夂→力",
        "rad": "力 (lực – sức lực)",
        "mean": "công việc, nhiệm vụ",
        "tip": "Bộ 力(sức lực) → dồn sức làm CÔNG VIỆC, nhiệm vụ.",
        "cf": "雾 (wù, sương mù, bộ 雨)",
        "w": "服务 / 任务 / 事务"
      }
    ],
    "colloFull": [
      {
        "zh": "叫服务员",
        "py": "jiào fúwùyuán",
        "vn": "gọi nhân viên"
      },
      {
        "zh": "问服务员",
        "py": "wèn fúwùyuán",
        "vn": "hỏi nhân viên"
      },
      {
        "zh": "服务员来了",
        "py": "fúwùyuán lái le",
        "vn": "nhân viên đến rồi"
      },
      {
        "zh": "饭店的服务员",
        "py": "fàndiàn de fúwùyuán",
        "vn": "nhân viên nhà hàng"
      }
    ],
    "patterns": [
      {
        "s": "问 / 叫 + 服务员",
        "m": "Hỏi, gọi nhân viên"
      },
      {
        "s": "服务 + 员",
        "m": "Người (员) làm công việc phục vụ (服务)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Bạn gọi nhân viên đến một chút.",
        "answer": "你让服务员过来一下。",
        "answerPy": "Nǐ ràng fúwùyuán guòlái yíxià.",
        "note": "过来 — đến chỗ người nói.",
        "pair": "让 + người + V"
      },
      {
        "promptLang": "vi",
        "prompt": "Nhân viên nhà hàng này cực kỳ tốt.",
        "answer": "这个饭店的服务员非常好。",
        "answerPy": "Zhège fàndiàn de fúwùyuán fēicháng hǎo.",
        "note": "……的服务员 — nhân viên của nơi nào.",
        "pair": "非常 + Adj"
      }
    ]
  },
  {
    "n": 7,
    "zh": "白",
    "py": "bái",
    "pos": "Tính từ",
    "vn": "trắng, màu trắng",
    "hv": "bạch",
    "em": "⚪",
    "lesson": 4,
    "ex_zh": "这件白的有点儿长。",
    "ex_py": "Zhè jiàn bái de yǒudiǎnr cháng.",
    "ex_vn": "Chiếc màu trắng này hơi dài một chút.",
    "exList": [
      {
        "zh": "这件白的有点儿长。",
        "py": "Zhè jiàn bái de yǒudiǎnr cháng.",
        "vn": "Chiếc màu trắng này hơi dài một chút."
      },
      {
        "zh": "她喜欢穿白色的衣服。",
        "py": "Tā xǐhuan chuān báisè de yīfu.",
        "vn": "Cô ấy thích mặc quần áo màu trắng."
      },
      {
        "zh": "这只猫是白色的。",
        "py": "Zhè zhī māo shì báisè de.",
        "vn": "Con mèo này màu trắng."
      }
    ],
    "hanzi": [
      {
        "c": "白",
        "p": "bái",
        "type": "独体字 · Tượng hình",
        "st": 5,
        "ord": "丿→𠃌→一→一→一",
        "rad": "白 (bạch – tự thành bộ)",
        "mean": "trắng",
        "tip": "Hình ánh mặt trời/hạt gạo trắng cách điệu → \"TRẮNG\".",
        "cf": "百 (bǎi, trăm, thêm nét)",
        "w": "白色 / 白天 / 明白"
      }
    ],
    "colloFull": [
      {
        "zh": "白的",
        "py": "bái de",
        "vn": "cái màu trắng"
      },
      {
        "zh": "白衣服",
        "py": "bái yīfu",
        "vn": "áo trắng"
      },
      {
        "zh": "白猫",
        "py": "bái māo",
        "vn": "con mèo trắng"
      },
      {
        "zh": "白颜色",
        "py": "bái yánsè",
        "vn": "màu trắng"
      }
    ],
    "patterns": [
      {
        "s": "白 + danh từ",
        "m": "Cái gì màu trắng: 白衣服"
      },
      {
        "s": "白 ↔ 黑 — trắng và đen"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Cái áo trắng này bao nhiêu tiền?",
        "answer": "这件白衣服多少钱？",
        "answerPy": "Zhè jiàn bái yīfu duōshao qián?",
        "note": "白 + danh từ — cái gì màu trắng.",
        "pair": "多少钱？"
      },
      {
        "promptLang": "vi",
        "prompt": "Tôi không thích màu trắng, tôi thích màu đen.",
        "answer": "我不喜欢白颜色，我喜欢黑颜色。",
        "answerPy": "Wǒ bù xǐhuan bái yánsè, wǒ xǐhuan hēi yánsè.",
        "note": "白 ↔ 黑 — trắng và đen.",
        "pair": "喜欢 + N"
      }
    ]
  },
  {
    "n": 8,
    "zh": "黑",
    "py": "hēi",
    "pos": "Tính từ",
    "vn": "đen, màu đen",
    "hv": "hắc",
    "em": "⚫",
    "lesson": 4,
    "ex_zh": "那件黑的有点儿贵。",
    "ex_py": "Nà jiàn hēi de yǒudiǎnr guì.",
    "ex_vn": "Chiếc màu đen kia thì hơi đắt.",
    "exList": [
      {
        "zh": "那件黑的有点儿贵。",
        "py": "Nà jiàn hēi de yǒudiǎnr guì.",
        "vn": "Chiếc màu đen kia thì hơi đắt."
      },
      {
        "zh": "他的头发是黑色的。",
        "py": "Tā de tóufa shì hēisè de.",
        "vn": "Tóc anh ấy màu đen."
      },
      {
        "zh": "天已经黑了。",
        "py": "Tiān yǐjīng hēi le.",
        "vn": "Trời đã tối rồi."
      }
    ],
    "hanzi": [
      {
        "c": "黑",
        "p": "hēi",
        "type": "上下结构 · Trên-dưới",
        "st": 12,
        "ord": "里 (lý) trên → 灬 (hỏa) dưới",
        "rad": "黑 (hắc – tự thành bộ)",
        "mean": "đen, tối",
        "tip": "Hình ống khói ám khói đen 灬 phía dưới → \"ĐEN, TỐI\".",
        "cf": "墨 (mò, mực đen, thêm bộ 土)",
        "w": "黑色 / 黑板 / 天黑了"
      }
    ],
    "colloFull": [
      {
        "zh": "黑的",
        "py": "hēi de",
        "vn": "cái màu đen"
      },
      {
        "zh": "黑衣服",
        "py": "hēi yīfu",
        "vn": "áo đen"
      },
      {
        "zh": "黑颜色",
        "py": "hēi yánsè",
        "vn": "màu đen"
      },
      {
        "zh": "天黑了",
        "py": "tiān hēi le",
        "vn": "trời tối rồi"
      }
    ],
    "patterns": [
      {
        "s": "黑 + danh từ",
        "m": "Cái gì màu đen: 黑衣服"
      },
      {
        "s": "天黑了 — trời tối, cũng dùng chữ 黑"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Trời tối rồi, chúng ta về nhà thôi.",
        "answer": "天黑了，我们回家吧。",
        "answerPy": "Tiān hēi le, wǒmen huí jiā ba.",
        "note": "天黑了 — trời tối, tình hình đã đổi.",
        "pair": "……了"
      },
      {
        "promptLang": "vi",
        "prompt": "Cái xe đạp màu đen kia là của chị tôi.",
        "answer": "那个黑自行车是我姐姐的。",
        "answerPy": "Nàge hēi zìxíngchē shì wǒ jiějie de.",
        "note": "……的 cuối câu thay cho danh từ đã biết.",
        "pair": "是……的"
      }
    ]
  },
  {
    "n": 9,
    "zh": "贵",
    "py": "guì",
    "pos": "Tính từ",
    "vn": "đắt, sang trọng",
    "hv": "quý",
    "em": "💎",
    "lesson": 4,
    "ex_zh": "他的自行车很贵。",
    "ex_py": "Tā de zìxíngchē hěn guì.",
    "ex_vn": "Xe đạp của anh ấy rất đắt.",
    "exList": [
      {
        "zh": "他的自行车很贵。",
        "py": "Tā de zìxíngchē hěn guì.",
        "vn": "Xe đạp của anh ấy rất đắt."
      },
      {
        "zh": "这块手表太贵了。",
        "py": "Zhè kuài shǒubiǎo tài guì le.",
        "vn": "Chiếc đồng hồ này đắt quá."
      },
      {
        "zh": "这里的咖啡不贵。",
        "py": "Zhèlǐ de kāfēi bú guì.",
        "vn": "Cà phê ở đây không đắt."
      }
    ],
    "hanzi": [
      {
        "c": "贵",
        "p": "guì",
        "type": "上下结构 · Trên-dưới",
        "st": 9,
        "ord": "中→一→贝 (bối)",
        "rad": "贝 (bối – vỏ sò, tiền cổ)",
        "mean": "đắt, quý",
        "tip": "Bộ 贝(tiền tệ cổ) → liên quan tới giá trị lớn = ĐẮT, QUÝ GIÁ.",
        "cf": "柜 (guì, tủ, bộ 木)",
        "w": "很贵 / 贵姓 / 名贵"
      }
    ],
    "colloFull": [
      {
        "zh": "很贵",
        "py": "hěn guì",
        "vn": "rất đắt"
      },
      {
        "zh": "不贵",
        "py": "bú guì",
        "vn": "không đắt"
      },
      {
        "zh": "太贵了",
        "py": "tài guì le",
        "vn": "đắt quá"
      },
      {
        "zh": "贵的衣服",
        "py": "guì de yīfu",
        "vn": "quần áo đắt"
      }
    ],
    "patterns": [
      {
        "s": "太 + 贵 + 了",
        "m": "Đắt quá — hai vế đi liền nhau"
      },
      {
        "s": "贵 ↔ 不贵 — 太贵了 là câu nói khi mặc cả"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Cái áo này đắt quá, tôi không mua.",
        "answer": "这件衣服太贵了，我不买。",
        "answerPy": "Zhè jiàn yīfu tài guì le, wǒ bù mǎi.",
        "note": "太……了 phải đủ hai vế.",
        "pair": "太……了"
      },
      {
        "promptLang": "vi",
        "prompt": "Thịt cừu ở đây không đắt, một cân hai mươi đồng.",
        "answer": "这儿的羊肉不贵，一公斤二十块钱。",
        "answerPy": "Zhèr de yángròu bú guì, yì gōngjīn èrshí kuài qián.",
        "note": "Nói giá thì không cần động từ 是.",
        "pair": "……块钱"
      }
    ]
  }
];

const wuData = [
  {img:'⏳',label:'等',py:'děng',letter:'A'},
  {img:'🔍',label:'找',py:'zhǎo',letter:'B'},
  {img:'⚪',label:'白',py:'bái',letter:'C'},
  {img:'⚫',label:'黑',py:'hēi',letter:'D'},
  {img:'💎',label:'贵',py:'guì',letter:'E'},
  {img:'🛎️',label:'服务员',py:'fúwùyuán',letter:'F'},
];

var dialogData = [
  {scene:'在教室 · Trong lớp học',
   preQuiz:[
     {q:'他们今天下午去看电影了吗？',opts:['去了','没去，改明天','取消了'],ans:1},
     {q:'女的想看什么电影，她怎么回答？',opts:['马上告诉他','让他想想再告诉他','不想看'],ans:1},
   ],
   lines:[
     {sp:0,zh:'我们下午去看电影好吗？',py:'Wǒmen xiàwǔ qù kàn diànyǐng hǎoma?',vn:'Chiều nay chúng ta cùng đi xem phim được không?'},
     {sp:1,zh:'今天下午没有时间，明天下午再去吧。',py:'Jīntiān xiàwǔ méiyǒu shíjiān, míngtiān xiàwǔ zài qù ba.',vn:'Chiều nay tôi không có thời gian, chiều mai hẵng đi nhé.'},
     {sp:0,zh:'你想看什么电影？',py:'Nǐ xiǎng kàn shénme diànyǐng?',vn:'Bạn muốn xem phim gì?'},
     {sp:1,zh:'让我想想再告诉你。',py:'Ràng wǒ xiǎngxiang zài gàosu nǐ.',vn:'Để tôi suy nghĩ một chút rồi nói cho bạn biết sau.'},
   ]},
  {scene:'在宿舍 · Trong phòng ký túc xá',
   preQuiz:[
     {q:'女的要给谁打电话？',opts:['大卫','老师','家人'],ans:0},
     {q:'为什么要打这个电话？',opts:['老师让她打的','大卫叫她打的','随便打的'],ans:0},
     {q:'大卫怎么了？',opts:['生病了','搬家了','考试没过'],ans:0},
   ],
   lines:[
     {sp:0,zh:'外面天气很好，我们出去运动运动吧。',py:'Wàimiàn tiānqì hěn hǎo, wǒmen chūqu yùndòng yùndòng ba.',vn:'Bên ngoài thời tiết đẹp lắm, chúng ta ra ngoài vận động chút đi.'},
     {sp:1,zh:'你等等我好吗？老师让我给大卫打个电话。',py:'Nǐ děngděng wǒ hǎoma? Lǎoshī ràng wǒ gěi Dàwèi dǎ ge diànhuà.',vn:'Bạn đợi tôi một chút được không? Thầy giáo bảo tôi gọi điện thoại cho David.'},
     {sp:0,zh:'回来再打吧。大卫有什么事情吗？',py:'Huílái zài dǎ ba. Dàwèi yǒu shénme shìqing ma?',vn:'Về rồi hãy gọi. David có chuyện gì vậy?'},
     {sp:1,zh:'大卫病了，我想找时间去看看。',py:'Dàwèi bìng le, wǒ xiǎng zhǎo shíjiān qù kànkan.',vn:'David bị bệnh rồi, tôi muốn tìm thời gian ghé thăm cậu ấy.'},
   ]},
  {scene:'在宾馆的前台 · Tại quầy lễ tân khách sạn',
   preQuiz:[
     {q:'房间的门怎么了？',opts:['打不开','坏了没锁上','钥匙丢了'],ans:0},
     {q:'客人住在哪个房间？',opts:['317','713','371'],ans:0},
     {q:'服务员打算怎么处理？',opts:['叫人去看看','给他换房间','让他自己修'],ans:0},
   ],
   lines:[
     {sp:0,zh:'服务员，我房间的门打不开了。',py:'Fúwùyuán, wǒ fángjiān de mén dǎ bù kāi le.',vn:'Lễ tân ơi, cửa phòng của tôi không mở được rồi.'},
     {sp:1,zh:'您住哪个房间？',py:'Nín zhù nǎge fángjiān?',vn:'Quý khách ở phòng nào ạ?'},
     {sp:0,zh:'317。',py:'Sān yāo qī.',vn:'Phòng 317.'},
     {sp:1,zh:'好的，我叫人去看看。',py:'Hǎode, wǒ jiào rén qù kànkan.',vn:'Dạ vâng, để em gọi người lên kiểm tra xem sao ạ.'},
   ]},
  {scene:'在商店 · Trong cửa hàng',
   preQuiz:[
     {q:'白色的衣服有什么问题？',opts:['有点儿长','有点儿贵','颜色不好'],ans:0},
     {q:'黑色的衣服有什么问题？',opts:['有点儿长','有点儿贵','不好看'],ans:1},
     {q:'红色的衣服是什么时候到的？',opts:['今天','昨天','上星期'],ans:0},
   ],
   lines:[
     {sp:0,zh:'你看看这几件衣服怎么样？',py:'Nǐ kànkan zhè jǐ jiàn yīfu zěnmeyàng?',vn:'Bạn xem giúp tôi mấy chiếc áo này thế nào?'},
     {sp:1,zh:'这件白的有点儿长，那件黑的有点儿贵。',py:'Zhè jiàn bái de yǒudiǎnr cháng, nà jiàn hēi de yǒudiǎnr guì.',vn:'Chiếc màu trắng này hơi dài một chút, còn chiếc màu đen kia thì hơi đắt.'},
     {sp:0,zh:'这件红的呢？这是今天新来的。',py:'Zhè jiàn hóng de ne? Zhè shì jīntiān xīn lái de.',vn:'Thế chiếc màu đỏ này thì sao? Chiếc này hôm nay mới về đấy.'},
     {sp:1,zh:'让我再看看。',py:'Ràng wǒ zài kànkan.',vn:'Để tôi xem lại lần nữa xem nào.'},
   ]},
];

// ══════════════════════════════════════════
// PHẦN 1 · GHÉP TỪ (Collocation) — ghép hai nửa thành cụm dùng được ngay
// Không copy câu bài khoá — chỉ ghép CỤM TỪ để phản xạ collocation.
// ══════════════════════════════════════════
var matchData = [
  {left:'找',right:'一个新工作'},
  {left:'等',right:'公共汽车'},
  {left:'告诉',right:'老师我病了'},
  {left:'叫服务员',right:'送两杯咖啡'},
  {left:'我们出去',right:'运动运动'},
  {left:'这件白的',right:'太贵了'},
];

// ══════════════════════════════════════════
// PHẦN 2 · NGHE — tình huống MỚI: gọi lễ tân sửa phòng, mua áo hỏi màu.
// Ôn lại 有点儿 (Bài 5), 颜色/觉得 (Bài 1, 3).
// ══════════════════════════════════════════
var listenData = {
  type: 'workbook',
  audio: '/audio/bai-8/listen-full.mp3',
  dictation: [
    {num:1, lines:[
      {pre:'我喜欢', blank:'黑色的', post:'。', py:'Wǒ xǐhuan hēisè de.', vn:'Tôi thích cái màu đen.'},
    ]},
    {num:2, lines:[
      {pre:'这个商店的', blank:'衣服很多', post:'。', py:'Zhège shāngdiàn de yīfu hěn duō.', vn:'Cửa hàng này có rất nhiều quần áo.'},
    ]},
    {num:3, lines:[
      {pre:'公司的大门每天早上', blank:'六点开', post:'。', py:'Gōngsī de dàmén měitiān zǎoshang liù diǎn kāi.', vn:'Cổng công ty mở lúc 6 giờ sáng mỗi ngày.'},
    ]},
    {num:4, lines:[
      {pre:'小张昨天', blank:'告诉我一件事', post:'。', py:'Xiǎo Zhāng zuótiān gàosu wǒ yí jiàn shì.', vn:'Tiểu Trương hôm qua nói cho tôi biết một việc.'},
    ]},
    {num:5, lines:[
      {pre:'你的衣服', blank:'太长了，不好看', post:'。', py:'Nǐ de yīfu tài cháng le, bù hǎokàn.', vn:'Áo của bạn dài quá, không đẹp.'},
    ]},
    {num:6, lines:[
      {speaker:'女', pre:'中午我们一起', blank:'吃饭吧', post:'。', py:'Zhōngwǔ wǒmen yìqǐ chīfàn ba.', vn:'Trưa nay chúng ta cùng ăn cơm đi.'},
      {speaker:'男', pre:'我现在很忙，你', blank:'五分钟后再给我打电话', post:'，好吗？', py:'Wǒ xiànzài hěn máng, nǐ wǔ fēnzhōng hòu zài gěi wǒ dǎ diànhuà, hǎo ma?', vn:'Tôi đang bận, lát nữa 5 phút gọi lại cho tôi nhé?'},
    ]},
    {num:7, lines:[
      {speaker:'女', pre:'这件衣服', blank:'太贵了', post:'。', py:'Zhè jiàn yīfu tài guì le.', vn:'Bộ quần áo này đắt quá.'},
      {speaker:'男', pre:'那你再看看', blank:'那件红的吧', post:'。', py:'Nà nǐ zài kànkan nà jiàn hóng de ba.', vn:'Vậy bạn xem thử cái màu đỏ kia đi.'},
    ]},
    {num:8, lines:[
      {speaker:'男', pre:'大卫病了，我想', blank:'去医院看看他', post:'。', py:'Dàwèi bìng le, wǒ xiǎng qù yīyuàn kànkan tā.', vn:'David ốm rồi, tôi muốn đến bệnh viện thăm cậu ấy.'},
      {speaker:'女', pre:'我跟你', blank:'一起去吧', post:'。', py:'Wǒ gēn nǐ yìqǐ qù ba.', vn:'Tôi đi cùng bạn nhé.'},
    ]},
    {num:9, lines:[
      {speaker:'女', pre:'房间的门', blank:'打不开了', post:'。', py:'Fángjiān de mén dǎ bu kāi le.', vn:'Cửa phòng không mở được nữa.'},
      {speaker:'男', pre:'我', blank:'叫人去看看', post:'。', py:'Wǒ jiào rén qù kànkan.', vn:'Tôi sẽ gọi người đến xem thử.'},
    ]},
    {num:10, lines:[
      {speaker:'女', pre:'这是王小姐的报纸，你能', blank:'帮我给她吗', post:'？', py:'Zhè shì Wáng xiǎojiě de bàozhǐ, nǐ néng bāng wǒ gěi tā ma?', vn:'Đây là báo của cô Vương, bạn giúp tôi đưa cho cô ấy được không?'},
      {speaker:'男', pre:'', blank:'好的', post:'。', py:'Hǎo de.', vn:'Được.'},
    ]},
  ],
  mc: [
    {num:11, options:['手机','手表','自行车'], ans:0,
     explain:'男：你看见我的手机了吗？女：让我想想，你看是不是在床上？问：男的在找什么？ → 手机。'},
    {num:12, options:['想唱歌','想看电影','想看电视'], ans:1,
     explain:'男：你给我打电话了？有什么事情吗？女：我想问问你晚上去不去看电影。问：女的为什么给男的打电话？ → 想看电影。'},
    {num:13, options:['踢足球','跑步','打篮球'], ans:2,
     explain:'女：外面天气很好，我们出去运动运动吧。男：好，打篮球怎么样？问：男的想做什么？ → 打篮球。'},
    {num:14, options:['老师','医生','服务员'], ans:2,
     explain:'男：你好，我房间的门打不开了。女：好的，先生。我叫人去看看。问：女的可能是做什么工作的？ → 服务员。'},
    {num:15, options:['都不好','黑的','白的'], ans:0,
     explain:'男：我想给妈妈买件衣服，你看这两件怎么样？女：这件白的有点儿长，那件黑的有点儿贵。问：女的觉得哪件衣服不错？ → 都不好。'},
  ],
};

// ══════════════════════════════════════════
// PHẦN 3a · ĐIỀN TỪ — mỗi câu một tình huống mới (……好吗？ · 再 · 让/叫 · động từ lặp + từ mới bài 8, ôn bài 1–7 và HSK1)
// ══════════════════════════════════════════
var fillData = [
  {pre:'Bạn rủ bạn cùng lớp: “星期六我们一起去游泳，',blank:'好吗',post:'？” — “好啊！”',hint:'(được không?)',ans:'好吗',exp:'Đề nghị + ，好吗？ đặt cuối câu = …, được không? (hỏi ý kiến người nghe).'},
  {pre:'这个苹果很好吃，我想',blank:'再',post:'吃一个。',hint:'(thêm, nữa)',ans:'再',exp:'再 + động từ = làm thêm lần nữa (việc chưa xảy ra): 再吃一个 = ăn thêm một quả.'},
  {pre:'下雨了，我们吃饭以后',blank:'再',post:'走吧。',hint:'(rồi hẵng)',ans:'再',exp:'A 以后再 B = làm A xong rồi hẵng làm B (hoãn lại sau).'},
  {pre:'医生',blank:'让',post:'我在家休息两天。',hint:'(bảo, cho)',ans:'让',exp:'让 + người + động từ = bảo / để ai làm gì: 医生让我休息.'},
  {pre:'“你明天几点到？',blank:'告诉',post:'我，我去机场接你。” — “下午三点。”',hint:'(nói cho biết)',ans:'告诉',exp:'告诉 + người (+ việc) = nói cho ai biết; 说 không đi thẳng với người nghe.'},
  {pre:'Bạn ra ngoài trước: “你在门口',blank:'等',post:'我，我五分钟就到。”',hint:'(đợi)',ans:'等',exp:'等 + người = đợi ai: 等我 = đợi tôi.'},
  {pre:'“你在',blank:'找',post:'什么？” — “我的杯子，你看见它了吗？”',hint:'(tìm)',ans:'找',exp:'找 = tìm (đang tìm); 看见 = nhìn thấy (đã thấy).'},
  {pre:'“你今天怎么不高兴？有什么',blank:'事情',post:'吗？” — “我的新手表没有了。”',hint:'(chuyện, việc)',ans:'事情',exp:'有什么事情吗？ = có chuyện gì không?'},
  {pre:'我姐姐在饭店工作，她是',blank:'服务员',post:'。',hint:'(nhân viên phục vụ)',ans:'服务员',exp:'服务员 = nhân viên phục vụ (nhà hàng, khách sạn); khi gọi cũng nói 服务员！'},
  {pre:'这件衣服很漂亮，就是太',blank:'贵',post:'了，我不买。',hint:'(đắt)',ans:'贵',exp:'太贵了 = đắt quá; 就是 = chỉ có điều.'},
  {pre:'我的猫是',blank:'白',post:'的，它的眼睛是黑的。',hint:'(trắng)',ans:'白',exp:'Màu + 的 = (cái / con) màu …: 白的 = màu trắng.'},
  {pre:'“工作了一上午，太累了！” — “我们去喝杯咖啡，',blank:'休息休息',post:'吧。”',hint:'(nghỉ một chút)',ans:'休息休息',exp:'Động từ hai âm tiết lặp ABAB = làm một chút cho nhẹ nhàng: 休息休息.'},
];

// ══════════════════════════════════════════
// PHẦN 3b · SẮP XẾP — câu MỚI, dùng 再 / 让 / 叫 / động từ lặp
// ══════════════════════════════════════════
var sortData = [
  {words:['我们','晚上','再','给','妈妈','打','电话','吧','。'],ans:'我们晚上再给妈妈打电话吧。',audio:'我们晚上再给妈妈打电话吧。',alt:['晚上我们再给妈妈打电话吧。']},
  {words:['老师','让','我们','每天','写','汉字','。'],ans:'老师让我们每天写汉字。',audio:'老师让我们每天写汉字。'},
  {words:['妈妈','叫','我','去','商店','买','水果','。'],ans:'妈妈叫我去商店买水果。',audio:'妈妈叫我去商店买水果。'},
  {words:['这','件','黑','衣服','是','我','姐姐','的','。'],ans:'这件黑衣服是我姐姐的。',audio:'这件黑衣服是我姐姐的。'},
  {words:['我','去','找','服务员','要','一','杯','水','。'],ans:'我去找服务员要一杯水。',audio:'我去找服务员要一杯水。'},
  {words:['红','的','和','白','的','我','都','喜欢','。'],ans:'红的和白的我都喜欢。',audio:'红的和白的我都喜欢。'},
  {words:['下午','我们','去','医院','看看','王','老师','吧','。'],ans:'下午我们去医院看看王老师吧。',audio:'下午我们去医院看看王老师吧。',alt:['我们下午去医院看看王老师吧。']},
  {words:['这','个','菜','有点儿','贵','，','我们','不','要','了','。'],ans:'这个菜有点儿贵，我们不要了。',audio:'这个菜有点儿贵，我们不要了。'},
];

// ══════════════════════════════════════════
// PHẦN 3c · SỬA LỖI SAI — lỗi học sinh Việt hay mắc
// (好吗 sai chỗ, 再 sai chỗ / nhầm 还, 让 + người, lặp động từ sai, thời lượng, 告诉/说, tính từ sau danh từ...)
// ══════════════════════════════════════════
var errorFixData = [
  {wrong:'好吗我们明天一起去游泳？',
   opts:['我们明天一起去游泳，好不好吗？','我们一起去游泳明天，好吗？','我们明天一起去游泳，好吗？','我们明天去一起游泳，好吗？'],ans:2,
   exp:'……，好吗？ đứng CUỐI câu; thời gian đứng trước động từ, 一起 đứng trước 去; 好不好 đã là câu hỏi, không thêm 吗.'},
  {wrong:'今天我还要工作，我们明天去再吧。',
   opts:['今天我还要工作，我们明天再去吧。','今天我还要工作，我们再明天去吧。','今天我还要工作，我们明天去吧再。','今天我还要工作，我们明天还去吧。'],ans:0,
   exp:'Thời gian + 再 + động từ = để (lúc đó) hẵng làm: 明天再去; 再 đứng ngay trước động từ, không dùng 还.'},
  {wrong:'妈妈让买牛奶我。',
   opts:['妈妈我让买牛奶。','妈妈让给我买牛奶。','妈妈让我买牛奶。','妈妈是让我买牛奶。'],ans:2,
   exp:'让 + NGƯỜI + động từ: 让我买牛奶 — người được bảo đứng ngay sau 让.'},
  {wrong:'你看看一下这件衣服。',
   opts:['你看看了这件衣服。','你看一下这件衣服。','你一下看看这件衣服。','你看看这件衣服一下。'],ans:1,
   exp:'Động từ lặp (看看) và 一下 cùng nghĩa “một chút” — chỉ dùng một trong hai: 看一下 hoặc 看看.'},
  {wrong:'明天要考试，你今天晚上准备一准备吧。',
   opts:['明天要考试，你今天晚上准备准备了吧。','明天要考试，你准备准备今天晚上吧。','明天要考试，你今天晚上很准备准备吧。','明天要考试，你今天晚上准备准备吧。'],ans:3,
   exp:'Động từ hai âm tiết lặp ABAB (准备准备), không chen 一 như 看一看; không thêm 了 hay 很.'},
  {wrong:'我一个小时等你了。',
   opts:['我等了你一个小时。','我等你了一个小时。','我一个小时等了你。','我等了一个小时你。'],ans:0,
   exp:'Động từ + 了 + người + thời lượng: 等了你一个小时; thời lượng không đứng trước động từ.'},
  {wrong:'我说你一件事情。',
   opts:['我告诉一件事情你。','我告诉你一件事情。','我对你告诉一件事情。','我给你告诉一件事情。'],ans:1,
   exp:'告诉 + người + việc = nói cho ai biết việc gì; 说 không đi thẳng với người nghe, 告诉 không cần 对 / 给.'},
  {wrong:'我想买一件衣服白的。',
   opts:['我想买一件衣服是白的。','我想买一个白衣服。','我想买白一件衣服。','我想买一件白衣服。'],ans:3,
   exp:'Tính từ màu đứng TRƯỚC danh từ: 白衣服; số + lượng từ đứng trước cả cụm: 一件白衣服 (衣服 dùng 件).'},
];

// ══════════════════════════════════════════
// PHẦN 4 · LUYỆN NÓI 3 TẦNG (tầng 3 có ghi âm thật + chấm điểm AI)
// ══════════════════════════════════════════
// Luyen noi voi AI (mode 'ai-speak'): moi cau hoi la mot tinh huong doi song
// lien quan den bai khoa; hoc sinh tu ghi am cau tra loi, AI nghe lai (nhan
// dien giong noi tieng Trung) roi cham diem theo 4 tieu chi va nhan xet.
var speakingData = {
  mode: 'ai-speak',
  intro: 'Mỗi câu hỏi là một tình huống thật trong đời sống, dùng đúng từ vựng và mẫu câu của Bài 8. Bấm 🎙️ rồi trả lời bằng tiếng Trung — AI sẽ nghe, ghi lại câu bạn nói và chấm điểm theo Nội dung · Mẫu câu · Từ vựng · Độ trôi chảy. Nên tự trả lời trước rồi mới mở “Câu mẫu” để đối chiếu.',
  tasks: [
    {
      situation: 'Bạn muốn rủ một người bạn cuối tuần này đi chơi cùng.',
      q_zh: '这个星期六你想做什么？请你问问朋友想不想一起去。',
      q_py: 'Zhège xīngqīliù nǐ xiǎng zuò shénme? Qǐng nǐ wènwen péngyou xiǎng bu xiǎng yìqǐ qù.',
      q_vn: 'Thứ Bảy này bạn muốn làm gì? Hãy hỏi bạn của bạn có muốn đi cùng không.',
      grammar: { label: 'Đề nghị + ，好吗？', any: ['好吗', '好不好', '怎么样', '行吗', '可以吗'] },
      need: [
        { label: 'Nói việc định làm', any: ['看电影', '游泳', '打篮球', '踢足球', '吃饭', '买', '旅游', '跑步', '运动', '去', '看', '喝'] },
        { label: 'Nói thời gian', any: ['星期', '上午', '下午', '晚上', '点', '明天', '周末'] },
        { label: 'Dùng 一起', any: ['一起'] }
      ],
      bonus: { label: 'Hẹn chỗ gặp (在…见)', any: ['见', '门口', '等'] },
      vocab: ['一起', '等'],
      minLen: 12,
      sample: '星期六下午我们一起去看电影，好吗？电影两点开始，我在学校门口等你。',
      sample_py: 'Xīngqīliù xiàwǔ wǒmen yìqǐ qù kàn diànyǐng, hǎo ma? Diànyǐng liǎng diǎn kāishǐ, wǒ zài xuéxiào ménkǒu děng nǐ.',
      sample_vn: 'Chiều thứ Bảy chúng mình cùng đi xem phim nhé, được không? Phim bắt đầu lúc hai giờ, mình đợi bạn ở cổng trường.',
      tip: '……，好吗？ luôn đặt cuối câu; 等 + người = đợi ai.'
    },
    {
      situation: 'Bạn bè rủ tối nay đi ăn, nhưng bạn bận — hãy hẹn hôm khác.',
      q_zh: '今天晚上我们一起去吃饭，好吗？',
      q_py: 'Jīntiān wǎnshang wǒmen yìqǐ qù chīfàn, hǎo ma?',
      q_vn: 'Tối nay chúng mình cùng đi ăn nhé, được không?',
      grammar: { label: 'Thời gian + 再 + động từ', any: ['再'] },
      need: [
        { label: 'Nói lý do không đi được', any: ['没有时间', '没时间', '忙', '要', '考试', '工作', '病', '累'] },
        { label: 'Hẹn lúc khác', any: ['明天', '星期', '下个', '以后', '后天', '周末'] },
        { label: 'Lời từ chối lịch sự', any: ['对不起', '不好意思', '不行', '不能', '谢谢'] }
      ],
      bonus: { label: 'Kết thúc bằng 好吗 / 吧', any: ['好吗', '吧'] },
      vocab: ['再', '事情'],
      minLen: 12,
      sample: '对不起，今天晚上我要准备考试，太忙了。我们星期五再去，好吗？',
      sample_py: 'Duìbuqǐ, jīntiān wǎnshang wǒ yào zhǔnbèi kǎoshì, tài máng le. Wǒmen xīngqīwǔ zài qù, hǎo ma?',
      sample_vn: 'Xin lỗi, tối nay mình phải ôn thi, bận quá. Thứ Sáu chúng mình hẵng đi nhé, được không?',
      tip: '再 đứng sau thời gian, ngay trước động từ: 星期五再去 = thứ Sáu hẵng đi.'
    },
    {
      situation: 'Bạn đi mua quần áo, cửa hàng có áo trắng, đen, đỏ.',
      q_zh: '这里有白的、黑的、红的衣服，你想买哪件？为什么？',
      q_py: 'Zhèlǐ yǒu bái de, hēi de, hóng de yīfu, nǐ xiǎng mǎi nǎ jiàn? Wèi shénme?',
      q_vn: 'Ở đây có áo màu trắng, đen, đỏ, bạn muốn mua cái nào? Tại sao?',
      grammar: { label: 'Màu + 的 (白的 / 黑的 / 红的)', any: ['白的', '黑的', '红的', '白', '黑', '红'] },
      need: [
        { label: 'Nhận xét giá (贵 / 不贵)', any: ['贵', '便宜', '钱', '块'] },
        { label: 'Nêu lý do', any: ['因为', '有点儿', '太', '很', '漂亮', '长', '大', '小'] },
        { label: 'Nói chọn mua cái nào', any: ['买', '要', '喜欢'] }
      ],
      bonus: { label: 'Muốn xem thử (看看 / 让我想想)', any: ['看看', '想想', '让我'] },
      vocab: ['白', '黑', '贵'],
      minLen: 12,
      sample: '我想买那件白的，很漂亮，也不贵。黑的有点儿大，红的太贵了。',
      sample_py: 'Wǒ xiǎng mǎi nà jiàn bái de, hěn piàoliang, yě bú guì. Hēi de yǒudiǎnr dà, hóng de tài guì le.',
      sample_vn: 'Tôi muốn mua cái màu trắng kia, rất đẹp mà cũng không đắt. Cái đen hơi rộng, cái đỏ đắt quá.',
      tip: 'Màu + 的 thay cho danh từ đã nhắc: 白的 = cái màu trắng; 有点儿 + tính từ = hơi … (không như ý).'
    },
    {
      situation: 'Bạn kể cho bạn cùng phòng nghe hôm nay thầy cô / bố mẹ giao việc gì.',
      q_zh: '今天老师（妈妈）让你做什么了？',
      q_py: 'Jīntiān lǎoshī (māma) ràng nǐ zuò shénme le?',
      q_vn: 'Hôm nay thầy cô hoặc mẹ bảo bạn làm gì?',
      grammar: { label: 'A 让 / 叫 + người + làm gì', any: ['让', '叫'] },
      need: [
        { label: 'Nói ai bảo', any: ['老师', '妈妈', '爸爸', '医生', '姐姐', '朋友', '同学'] },
        { label: 'Nói việc phải làm', any: ['写', '准备', '买', '打电话', '告诉', '看', '做', '学习', '休息', '找', '去', '回'] },
        { label: 'Thêm một chi tiết (thời gian / người / nơi)', any: ['明天', '今天', '晚上', '下午', '点', '给', '和'] }
      ],
      bonus: { label: 'Dùng 告诉 (nói cho ai biết)', any: ['告诉'] },
      vocab: ['让', '告诉', '事情'],
      minLen: 12,
      sample: '今天老师让我们回家准备考试，还叫我给小王打电话，告诉他明天的事情。',
      sample_py: 'Jīntiān lǎoshī ràng wǒmen huí jiā zhǔnbèi kǎoshì, hái jiào wǒ gěi Xiǎo Wáng dǎ diànhuà, gàosu tā míngtiān de shìqing.',
      sample_vn: 'Hôm nay thầy bảo chúng tôi về nhà ôn thi, còn bảo tôi gọi điện cho Tiểu Vương, báo cho cậu ấy chuyện ngày mai.',
      tip: '让 / 叫 + người + động từ: 老师让我们…; 告诉 + người + việc.'
    },
    {
      situation: 'Ở nhà hàng, bạn gọi món đã lâu mà chưa thấy mang ra.',
      q_zh: '你的菜还没来，你怎么对服务员说？',
      q_py: 'Nǐ de cài hái méi lái, nǐ zěnme duì fúwùyuán shuō?',
      q_vn: 'Món của bạn vẫn chưa ra, bạn nói với nhân viên phục vụ thế nào?',
      grammar: { label: 'Gọi 服务员 + đề nghị', any: ['服务员'] },
      need: [
        { label: 'Nói đã đợi bao lâu (等了…)', any: ['等', '分钟', '小时'] },
        { label: 'Nói món vẫn chưa ra (还没…)', any: ['还没', '没来', '没有来', '菜'] },
        { label: 'Lời nhờ lịch sự', any: ['请', '能', '帮', '看看', '好吗', '可以'] }
      ],
      bonus: { label: 'Dùng động từ lặp (看看 / 问问)', any: ['看看', '问问', '找找'] },
      vocab: ['服务员', '等', '找'],
      minLen: 12,
      sample: '服务员，我们等了四十分钟了，菜还没来，你能帮我们看看吗？',
      sample_py: 'Fúwùyuán, wǒmen děng le sìshí fēnzhōng le, cài hái méi lái, nǐ néng bāng wǒmen kànkan ma?',
      sample_vn: 'Anh/chị phục vụ ơi, chúng tôi đợi bốn mươi phút rồi mà món vẫn chưa ra, anh/chị xem giúp chúng tôi được không?',
      tip: '等了 + thời lượng + 了 = đã đợi … rồi (vẫn đang đợi); 看看 = xem thử một chút.'
    }
  ]
};

// ══════════════════════════════════════════
// LUYỆN DỊCH — câu mới, dùng từ bài 8 + ôn bài 1–7 và HSK1
// ══════════════════════════════════════════
var translateData = [
  {vi:'Bác sĩ bảo bố tôi uống ít cà phê.', zh:'医生让我爸爸少喝咖啡。', py:'Yīshēng ràng wǒ bàba shǎo hē kāfēi.'},
  {vi:'Cái màu đen kia hơi đắt, tôi muốn xem cái màu trắng.', zh:'那个黑的有点儿贵，我想看看白的。', py:'Nàge hēi de yǒudiǎnr guì, wǒ xiǎng kànkan bái de.'},
  {vi:'Bạn đợi tôi một chút được không? Tôi đi tìm thầy Vương.', zh:'你等我一下，好吗？我去找王老师。', py:'Nǐ děng wǒ yíxià, hǎo ma? Wǒ qù zhǎo Wáng lǎoshī.'},
  {vi:'Bây giờ tôi đang bận, chiều tôi gọi lại cho bạn.', zh:'我现在很忙，下午再给你打电话。', py:'Wǒ xiànzài hěn máng, xiàwǔ zài gěi nǐ dǎ diànhuà.'},
];

// ══════════════════════════════════════════
// LUYỆN DỊCH (chiều Trung→Việt) — noi dung KHAC voi chieu Viet->Trung o tren
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:'Phục vụ nói món của chúng ta đợi thêm mười phút nữa là xong.', zh:'服务员说，我们的菜再等十分钟就好。', py:'Fúwùyuán shuō, wǒmen de cài zài děng shí fēnzhōng jiù hǎo.'},
  {vi:'Chuyện này đừng nói cho mẹ biết, được không?', zh:'这件事情不要告诉妈妈，好吗？', py:'Zhè jiàn shìqing búyào gàosu māma, hǎo ma?'},
  {vi:'Chúng mình vào cửa hàng xem thử đi, tôi muốn mua một chiếc đồng hồ mới.', zh:'我们去商店看看吧，我想买一个新手表。', py:'Wǒmen qù shāngdiàn kànkan ba, wǒ xiǎng mǎi yí ge xīn shǒubiǎo.'},
];
