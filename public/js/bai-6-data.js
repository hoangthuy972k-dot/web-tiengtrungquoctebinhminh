// ══════════════════════════════════════════
// DATA — Bài 6: 你怎么不吃了？
// ══════════════════════════════════════════
var vocabData = [
  {
    "n": 1,
    "zh": "门",
    "py": "mén",
    "pos": "Danh từ",
    "vn": "cửa",
    "hv": "môn",
    "em": "🚪",
    "lesson": 1,
    "ex_zh": "我在门外看见他的自行车了。",
    "ex_py": "Wǒ zài mén wài kànjiàn tā de zìxíngchē le.",
    "ex_vn": "Tôi nhìn thấy xe đạp của cậu ấy ở ngoài cửa rồi.",
    "exList": [
      {
        "zh": "我在门外看见他的自行车了。",
        "py": "Wǒ zài mén wài kànjiàn tā de zìxíngchē le.",
        "vn": "Tôi nhìn thấy xe đạp của cậu ấy ở ngoài cửa rồi."
      },
      {
        "zh": "请把门关上。",
        "py": "Qǐng bǎ mén guān shàng.",
        "vn": "Làm ơn đóng cửa lại."
      },
      {
        "zh": "他在门口等你。",
        "py": "Tā zài ménkǒu děng nǐ.",
        "vn": "Anh ấy đang đợi bạn ở cửa."
      }
    ],
    "hanzi": [
      {
        "c": "门",
        "p": "mén",
        "type": "独体字 · Tượng hình",
        "st": 3,
        "ord": "丶→𠃌→丨",
        "rad": "门 (môn – tự thành bộ)",
        "mean": "cửa",
        "tip": "Hình hai cánh cửa gỗ ghép lại → \"CỬA\". Là bộ thủ của nhiều chữ liên quan không gian: 问, 间.",
        "cf": "们 (men – hậu tố số nhiều, thêm bộ 亻)",
        "w": "门口 / 出门 / 大门"
      }
    ],
    "colloFull": [
      {
        "zh": "开门",
        "py": "kāi mén",
        "vn": "mở cửa"
      },
      {
        "zh": "门外",
        "py": "mén wài",
        "vn": "ngoài cửa"
      },
      {
        "zh": "学校的门",
        "py": "xuéxiào de mén",
        "vn": "cửa trường"
      },
      {
        "zh": "一个门",
        "py": "yí gè mén",
        "vn": "một cái cửa"
      }
    ],
    "patterns": [
      {
        "s": "开 + 门",
        "m": "Mở cửa — 开门 là từ ly hợp: 请开门"
      },
      {
        "s": "门 là chữ tượng hình — vẽ hai cánh cửa"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Ngoài cửa có người, bạn mở cửa đi.",
        "answer": "门外有人，你开门吧。",
        "answerPy": "Mén wài yǒu rén, nǐ kāi mén ba.",
        "note": "开门 là từ ly hợp.",
        "pair": "……吧"
      },
      {
        "promptLang": "vi",
        "prompt": "Chị tôi đang ở ngoài cửa.",
        "answer": "我姐姐在门外。",
        "answerPy": "Wǒ jiějie zài mén wài.",
        "note": "门外 — ngoài cửa.",
        "pair": "在 + nơi chốn"
      }
    ]
  },
  {
    "n": 2,
    "zh": "外",
    "py": "wài",
    "pos": "Danh từ",
    "vn": "ngoài, bên ngoài",
    "hv": "ngoại",
    "em": "🌤️",
    "lesson": 1,
    "ex_zh": "门外有一个人。",
    "ex_py": "Mén wài yǒu yí ge rén.",
    "ex_vn": "Ngoài cửa có một người.",
    "exList": [
      {
        "zh": "门外有一个人。",
        "py": "Mén wài yǒu yí ge rén.",
        "vn": "Ngoài cửa có một người."
      },
      {
        "zh": "外面在下雨。",
        "py": "Wàimian zài xià yǔ.",
        "vn": "Bên ngoài đang mưa."
      },
      {
        "zh": "他是外国人。",
        "py": "Tā shì wàiguórén.",
        "vn": "Anh ấy là người nước ngoài."
      }
    ],
    "hanzi": [
      {
        "c": "外",
        "p": "wài",
        "type": "左右结构 · Trái-phải",
        "st": 5,
        "ord": "夕 (tịch) trái → 卜 (bốc) phải",
        "rad": "夕 (tịch – buổi tối)",
        "mean": "ngoài",
        "tip": "Đã học ở Bài 5 (外面) — chữ đơn 外 dùng khi ghép trực tiếp: 门外, 外国.",
        "cf": "处 (chù)",
        "w": "门外 / 外国 / 外面"
      }
    ],
    "colloFull": [
      {
        "zh": "门外",
        "py": "mén wài",
        "vn": "ngoài cửa"
      },
      {
        "zh": "外面",
        "py": "wàimian",
        "vn": "bên ngoài"
      },
      {
        "zh": "在外",
        "py": "zài wài",
        "vn": "ở bên ngoài"
      },
      {
        "zh": "外边",
        "py": "wàibian",
        "vn": "phía ngoài"
      }
    ],
    "patterns": [
      {
        "s": "danh từ + 外",
        "m": "Ngoài cái gì: 门外 · 学校外"
      },
      {
        "s": "外 ↔ 里 — ngoài và trong"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Ngoài cửa có một chiếc xe đạp mới.",
        "answer": "门外有一个新自行车。",
        "answerPy": "Mén wài yǒu yí ge xīn zìxíngchē.",
        "note": "Câu tồn tại: nơi chốn đứng đầu.",
        "pair": "nơi chốn + 有 + N"
      },
      {
        "promptLang": "vi",
        "prompt": "Vì trời mưa nên tôi không ra ngoài.",
        "answer": "因为下雨，所以我不去外面。",
        "answerPy": "Yīnwèi xià yǔ, suǒyǐ wǒ bú qù wàimiàn.",
        "note": "Tiếng Trung dùng cả hai vế.",
        "pair": "因为……所以……"
      }
    ]
  },
  {
    "n": 3,
    "zh": "自行车",
    "py": "zìxíngchē",
    "pos": "Danh từ",
    "vn": "xe đạp",
    "hv": "tự hành xa",
    "em": "🚲",
    "lesson": 1,
    "ex_zh": "他的自行车是红色的。",
    "ex_py": "Tā de zìxíngchē shì hóngsè de.",
    "ex_vn": "Xe đạp của anh ấy màu đỏ.",
    "exList": [
      {
        "zh": "他的自行车是红色的。",
        "py": "Tā de zìxíngchē shì hóngsè de.",
        "vn": "Xe đạp của anh ấy màu đỏ."
      },
      {
        "zh": "我每天骑自行车上班。",
        "py": "Wǒ měitiān qí zìxíngchē shàngbān.",
        "vn": "Mỗi ngày tôi đạp xe đi làm."
      },
      {
        "zh": "这辆自行车是新的。",
        "py": "Zhè liàng zìxíngchē shì xīn de.",
        "vn": "Chiếc xe đạp này là mới."
      }
    ],
    "hanzi": [
      {
        "c": "自",
        "p": "zì",
        "type": "独体字 · Tượng hình",
        "st": 6,
        "ord": "丿→𠃌→一→一→一",
        "rad": "自 (tự – tự thành bộ)",
        "mean": "tự, bản thân",
        "tip": "Hình cái mũi cách điệu — người xưa chỉ vào mũi khi nói về \"BẢN THÂN mình\".",
        "cf": "目 (mù – \"mắt\")",
        "w": "自行车 / 自己 / 自由"
      },
      {
        "c": "行",
        "p": "xíng / háng",
        "type": "左右结构 · Trái-phải",
        "st": 6,
        "ord": "彳(xích) trái → 亍 phải",
        "rad": "行 (hành – tự thành bộ)",
        "mean": "đi lại; được",
        "tip": "Hình ngã tư đường cách điệu → nghĩa \"ĐI LẠI, di chuyển\". 自行 = tự di chuyển = xe đạp.",
        "cf": "往 (wǎng – \"đi tới\")",
        "w": "自行车 / 行不行 / 银行"
      }
    ],
    "colloFull": [
      {
        "zh": "骑自行车",
        "py": "qí zìxíngchē",
        "vn": "đi xe đạp"
      },
      {
        "zh": "买自行车",
        "py": "mǎi zìxíngchē",
        "vn": "mua xe đạp"
      },
      {
        "zh": "一个自行车",
        "py": "yí gè zìxíngchē",
        "vn": "một chiếc xe đạp"
      },
      {
        "zh": "新自行车",
        "py": "xīn zìxíngchē",
        "vn": "xe đạp mới"
      }
    ],
    "patterns": [
      {
        "s": "骑 + 自行车",
        "m": "Đi xe đạp — dùng 骑, không dùng 坐"
      },
      {
        "s": "自行车 — cái xe (车) tự (自) chạy (行)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Sáng nào tôi cũng đạp xe đi học.",
        "answer": "我每天早上都骑自行车去学校。",
        "answerPy": "Wǒ měi tiān zǎoshang dōu qí zìxíngchē qù xuéxiào.",
        "note": "Đi xe đạp dùng 骑, không dùng 坐.",
        "pair": "每……都……"
      },
      {
        "promptLang": "vi",
        "prompt": "Chiếc xe đạp này là chị tôi mua.",
        "answer": "这个自行车是我姐姐买的。",
        "answerPy": "Zhège zìxíngchē shì wǒ jiějie mǎi de.",
        "note": "是……的 nhấn vào ai làm, làm khi nào.",
        "pair": "是……的"
      }
    ]
  },
  {
    "n": 4,
    "zh": "羊肉",
    "py": "yángròu",
    "pos": "Danh từ",
    "vn": "thịt dê, thịt cừu",
    "hv": "dương nhục",
    "em": "🍖",
    "lesson": 2,
    "ex_zh": "今天的羊肉很好吃。",
    "ex_py": "Jīntiān de yángròu hěn hǎochī.",
    "ex_vn": "Thịt dê hôm nay ngon thế.",
    "exList": [
      {
        "zh": "今天的羊肉很好吃。",
        "py": "Jīntiān de yángròu hěn hǎochī.",
        "vn": "Thịt dê hôm nay ngon thế."
      },
      {
        "zh": "我不太喜欢吃羊肉。",
        "py": "Wǒ bú tài xǐhuan chī yángròu.",
        "vn": "Tôi không thích ăn thịt dê lắm."
      },
      {
        "zh": "这家饭馆的羊肉很有名。",
        "py": "Zhè jiā fànguǎn de yángròu hěn yǒumíng.",
        "vn": "Thịt dê của nhà hàng này rất nổi tiếng."
      }
    ],
    "hanzi": [
      {
        "c": "羊",
        "p": "yáng",
        "type": "独体字 · Tượng hình",
        "st": 6,
        "ord": "丷→王 (biến thể)",
        "rad": "羊 (dương – tự thành bộ)",
        "mean": "con dê, con cừu",
        "tip": "Hình đầu con dê với 2 chiếc sừng cong → \"DÊ, CỪU\".",
        "cf": "洋 (yáng – \"đại dương\", thêm bộ 氵)",
        "w": "羊肉 / 山羊 / 绵羊"
      },
      {
        "c": "肉",
        "p": "ròu",
        "type": "独体字 · Chữ đơn",
        "st": 6,
        "ord": "冂→人→人→一",
        "rad": "肉 (nhục – tự thành bộ)",
        "mean": "thịt",
        "tip": "Hình miếng thịt có vân thớ cách điệu → \"THỊT\". 羊 + 肉 = thịt dê.",
        "cf": "内 (nèi – \"bên trong\", thiếu nét)",
        "w": "羊肉 / 牛肉 / 肉包"
      }
    ],
    "colloFull": [
      {
        "zh": "吃羊肉",
        "py": "chī yángròu",
        "vn": "ăn thịt cừu"
      },
      {
        "zh": "买羊肉",
        "py": "mǎi yángròu",
        "vn": "mua thịt cừu"
      },
      {
        "zh": "羊肉好吃",
        "py": "yángròu hǎochī",
        "vn": "thịt cừu ngon"
      },
      {
        "zh": "一公斤羊肉",
        "py": "yì gōngjīn yángròu",
        "vn": "một cân thịt cừu"
      }
    ],
    "patterns": [
      {
        "s": "吃 + 羊肉",
        "m": "Ăn thịt cừu"
      },
      {
        "s": "羊 + 肉",
        "m": "Thịt (肉) của con dê, con cừu (羊)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tôi muốn mua hai cân thịt cừu.",
        "answer": "我要买两公斤羊肉。",
        "answerPy": "Wǒ yào mǎi liǎng gōngjīn yángròu.",
        "note": "公斤 đứng giữa số và danh từ.",
        "pair": "要 + V"
      },
      {
        "promptLang": "vi",
        "prompt": "Thịt cừu ở đây rất ngon.",
        "answer": "这儿的羊肉很好吃。",
        "answerPy": "Zhèr de yángròu hěn hǎochī.",
        "note": "这儿的 + danh từ — cái gì ở đây.",
        "pair": "很 + Adj"
      }
    ]
  },
  {
    "n": 5,
    "zh": "好吃",
    "py": "hǎochī",
    "pos": "Tính từ",
    "vn": "ngon",
    "hv": "hảo ngật",
    "em": "😋",
    "lesson": 2,
    "ex_zh": "妈妈做的饭很好吃。",
    "ex_py": "Māma zuò de fàn hěn hǎochī.",
    "ex_vn": "Cơm mẹ nấu rất ngon.",
    "exList": [
      {
        "zh": "妈妈做的饭很好吃。",
        "py": "Māma zuò de fàn hěn hǎochī.",
        "vn": "Cơm mẹ nấu rất ngon."
      },
      {
        "zh": "这个蛋糕非常好吃。",
        "py": "Zhège dàngāo fēicháng hǎochī.",
        "vn": "Cái bánh này ngon cực kỳ."
      },
      {
        "zh": "你觉得好吃吗？",
        "py": "Nǐ juéde hǎochī ma?",
        "vn": "Bạn thấy có ngon không?"
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
        "mean": "tốt, ngon",
        "tip": "女 (mẹ) + 子 (con) đứng cạnh nhau → hình ảnh viên mãn, TỐT ĐẸP.",
        "cf": "如 (rú – \"như, giống\")",
        "w": "好吃 / 你好 / 好看"
      },
      {
        "c": "吃",
        "p": "chī",
        "type": "左右结构 · Trái-phải",
        "st": 6,
        "ord": "口 (khẩu) trái → 乞 (khất) phải",
        "rad": "口 (khẩu – miệng)",
        "mean": "ăn",
        "tip": "Bộ 口 (miệng) → hành động ĂN dùng miệng.",
        "cf": "吗 (ma – trợ từ nghi vấn)",
        "w": "好吃 / 吃饭 / 吃药"
      }
    ],
    "colloFull": [
      {
        "zh": "很好吃",
        "py": "hěn hǎochī",
        "vn": "rất ngon"
      },
      {
        "zh": "不好吃",
        "py": "bù hǎochī",
        "vn": "không ngon"
      },
      {
        "zh": "好吃的面条",
        "py": "hǎochī de miàntiáo",
        "vn": "mì ngon"
      },
      {
        "zh": "最好吃",
        "py": "zuìhǎo chī",
        "vn": "ngon nhất"
      }
    ],
    "patterns": [
      {
        "s": "很 / 最 + 好吃",
        "m": "Rất ngon, ngon nhất"
      },
      {
        "s": "好吃 (ăn ngon) · 好看 (nhìn đẹp) — 好 + động từ"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Mì chị tôi làm ngon nhất.",
        "answer": "我姐姐做的面条最好吃。",
        "answerPy": "Wǒ jiějie zuò de miàntiáo zuì hǎochī.",
        "note": "……做的 + danh từ — cái do ai làm.",
        "pair": "最 + Adj"
      },
      {
        "promptLang": "vi",
        "prompt": "Món này không ngon, tôi không muốn ăn.",
        "answer": "这个菜不好吃，我不想吃。",
        "answerPy": "Zhège cài bù hǎochī, wǒ bù xiǎng chī.",
        "note": "不想 — không muốn.",
        "pair": "不想 + V"
      }
    ]
  },
  {
    "n": 6,
    "zh": "面条",
    "py": "miàntiáo",
    "pos": "Danh từ",
    "vn": "mì, mì sợi",
    "hv": "diện điều",
    "em": "🍜",
    "lesson": 2,
    "ex_zh": "来一点儿面条吧。",
    "ex_py": "Lái yìdiǎnr miàntiáo ba.",
    "ex_vn": "Cho một ít mì sợi đi.",
    "exList": [
      {
        "zh": "来一点儿面条吧。",
        "py": "Lái yìdiǎnr miàntiáo ba.",
        "vn": "Cho một ít mì sợi đi."
      },
      {
        "zh": "我喜欢吃牛肉面条。",
        "py": "Wǒ xǐhuan chī niúròu miàntiáo.",
        "vn": "Tôi thích ăn mì thịt bò."
      },
      {
        "zh": "这碗面条很好吃。",
        "py": "Zhè wǎn miàntiáo hěn hǎochī.",
        "vn": "Bát mì này rất ngon."
      }
    ],
    "hanzi": [
      {
        "c": "面",
        "p": "miàn",
        "type": "独体字 · Chữ đơn",
        "st": 9,
        "ord": "一→フ→丨→三 ngang giữa",
        "rad": "面 (diện – tự thành bộ)",
        "mean": "mặt; mì (bột mì)",
        "tip": "Đã học ở Bài 5 (外面) nghĩa \"mặt\". Ở đây 面 còn mang nghĩa \"bột mì\" → 面条 = sợi làm từ bột mì.",
        "cf": "画 (huà)",
        "w": "面条 / 面包 / 见面"
      },
      {
        "c": "条",
        "p": "tiáo",
        "type": "上下结构 · Trên-dưới",
        "st": 7,
        "ord": "夂→木",
        "rad": "木 (mộc – cây)",
        "mean": "sợi, dải; lượng từ vật dài",
        "tip": "Cành cây dài mảnh 木 → lượng từ cho vật DÀI, SỢI: 面条, 一条鱼.",
        "cf": "各 (gè)",
        "w": "面条 / 一条 / 条件"
      }
    ],
    "colloFull": [
      {
        "zh": "吃面条",
        "py": "chī miàntiáo",
        "vn": "ăn mì"
      },
      {
        "zh": "做面条",
        "py": "zuò miàntiáo",
        "vn": "làm mì"
      },
      {
        "zh": "爱吃面条",
        "py": "ài chī miàntiáo",
        "vn": "thích ăn mì"
      },
      {
        "zh": "羊肉面条",
        "py": "yángròu miàntiáo",
        "vn": "mì thịt cừu"
      }
    ],
    "patterns": [
      {
        "s": "吃 + 面条",
        "m": "Ăn mì"
      },
      {
        "s": "面 + 条",
        "m": "Bột mì (面) cắt thành sợi (条)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Trưa nay chúng ta cùng đi ăn mì nhé.",
        "answer": "今天中午我们一起去吃面条吧。",
        "answerPy": "Jīntiān zhōngwǔ wǒmen yìqǐ qù chī miàntiáo ba.",
        "note": "吧 dùng khi rủ rê, đề nghị.",
        "pair": "一起 + V"
      },
      {
        "promptLang": "vi",
        "prompt": "Chị tôi thường làm mì thịt cừu.",
        "answer": "我姐姐经常做羊肉面条。",
        "answerPy": "Wǒ jiějie jīngcháng zuò yángròu miàntiáo.",
        "note": "经常 đứng TRƯỚC động từ.",
        "pair": "经常 + V"
      }
    ]
  },
  {
    "n": 7,
    "zh": "打篮球",
    "py": "dǎ lánqiú",
    "pos": "Động từ",
    "vn": "chơi bóng rổ",
    "hv": "đả lam cầu",
    "em": "🏀",
    "lesson": 3,
    "ex_zh": "昨天你们怎么都没去打篮球？",
    "ex_py": "Zuótiān nǐmen zěnme dōu méi qù dǎ lánqiú?",
    "ex_vn": "Hôm qua sao các bạn đều không đi chơi bóng rổ thế?",
    "exList": [
      {
        "zh": "昨天你们怎么都没去打篮球？",
        "py": "Zuótiān nǐmen zěnme dōu méi qù dǎ lánqiú?",
        "vn": "Hôm qua sao các bạn đều không đi chơi bóng rổ thế?"
      },
      {
        "zh": "他每个星期都打篮球。",
        "py": "Tā měige xīngqī dōu dǎ lánqiú.",
        "vn": "Anh ấy tuần nào cũng chơi bóng rổ."
      },
      {
        "zh": "你会打篮球吗？",
        "py": "Nǐ huì dǎ lánqiú ma?",
        "vn": "Bạn biết chơi bóng rổ không?"
      }
    ],
    "hanzi": [
      {
        "c": "打",
        "p": "dǎ",
        "type": "左右结构 · Trái-phải",
        "st": 5,
        "ord": "扌(thủ) trái → 丁 (đinh) phải",
        "rad": "扌(thủ – tay)",
        "mean": "đánh, chơi (thể thao)",
        "tip": "Bộ 扌(tay) → dùng tay để ĐÁNH, CHƠI (các môn dùng tay như bóng rổ, bóng bàn).",
        "cf": "汀 (tīng – \"bãi bồi\", bộ 氵)",
        "w": "打篮球 / 打电话 / 打球"
      },
      {
        "c": "篮",
        "p": "lán",
        "type": "上下结构 · Trên-dưới",
        "st": 16,
        "ord": "⺮(trúc) trên → 监 (giám) dưới",
        "rad": "⺮(trúc – tre)",
        "mean": "giỏ, rổ",
        "tip": "Bộ ⺮(tre) → giỏ đan bằng tre, chỉ cái RỔ (đựng bóng vào rổ).",
        "cf": "蓝 (lán – \"màu xanh lam\", bộ 艹)",
        "w": "篮球 / 打篮球 / 篮子"
      }
    ],
    "colloFull": [
      {
        "zh": "去打篮球",
        "py": "qù dǎ lánqiú",
        "vn": "đi chơi bóng rổ"
      },
      {
        "zh": "喜欢打篮球",
        "py": "xǐhuan dǎ lánqiú",
        "vn": "thích chơi bóng rổ"
      },
      {
        "zh": "经常打篮球",
        "py": "jīngcháng dǎ lánqiú",
        "vn": "thường chơi bóng rổ"
      },
      {
        "zh": "一起打篮球",
        "py": "yìqǐ dǎ lánqiú",
        "vn": "cùng chơi bóng rổ"
      }
    ],
    "patterns": [
      {
        "s": "打 + 篮球",
        "m": "Bóng dùng tay thì 打; bóng dùng chân thì 踢"
      },
      {
        "s": "打篮球 · 踢足球 — hai môn, hai động từ khác nhau"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Chiều nay tôi đi chơi bóng rổ với bạn.",
        "answer": "今天下午我和朋友去打篮球。",
        "answerPy": "Jīntiān xiàwǔ wǒ hé péngyou qù dǎ lánqiú.",
        "note": "Bóng dùng tay thì 打, dùng chân thì 踢.",
        "pair": "和……一起"
      },
      {
        "promptLang": "vi",
        "prompt": "Bạn tôi cực kỳ thích chơi bóng rổ.",
        "answer": "我朋友非常喜欢打篮球。",
        "answerPy": "Wǒ péngyou fēicháng xǐhuan dǎ lánqiú.",
        "note": "非常 mạnh hơn 很.",
        "pair": "非常 + V"
      }
    ]
  },
  {
    "n": 8,
    "zh": "因为",
    "py": "yīnwèi",
    "pos": "Liên từ",
    "vn": "bởi vì, vì",
    "hv": "nhân vị",
    "em": "🔗",
    "lesson": 3,
    "ex_zh": "因为下雨了，所以天气很冷。",
    "ex_py": "Yīnwèi xià yǔ le, suǒyǐ tiānqì hěn lěng.",
    "ex_vn": "Vì trời mưa nên thời tiết rất lạnh.",
    "exList": [
      {
        "zh": "因为下雨了，所以天气很冷。",
        "py": "Yīnwèi xià yǔ le, suǒyǐ tiānqì hěn lěng.",
        "vn": "Vì trời mưa nên thời tiết rất lạnh."
      },
      {
        "zh": "因为工作忙，我没时间休息。",
        "py": "Yīnwèi gōngzuò máng, wǒ méi shíjiān xiūxi.",
        "vn": "Vì công việc bận nên tôi không có thời gian nghỉ."
      },
      {
        "zh": "因为生病，他没来上课。",
        "py": "Yīnwèi shēngbìng, tā méi lái shàngkè.",
        "vn": "Vì bị ốm nên anh ấy không đến lớp."
      }
    ],
    "hanzi": [
      {
        "c": "因",
        "p": "yīn",
        "type": "全包围 · Bao bọc",
        "st": 6,
        "ord": "囗 (vi) bao ngoài → 大 (đại) bên trong",
        "rad": "囗 (vi – vây quanh)",
        "mean": "nguyên nhân, do",
        "tip": "囗 (khung bao quanh) + 大 (người) → cái làm nền tảng, căn NGUYÊN cho sự việc.",
        "cf": "困 (kùn – \"khốn khó\", bộ 木 bên trong)",
        "w": "因为 / 原因"
      },
      {
        "c": "为",
        "p": "wèi / wéi",
        "type": "独体字 · Chữ đơn",
        "st": 4,
        "ord": "丶→フ→捺→乀",
        "rad": "丶",
        "mean": "vì, cho (wèi); làm (wéi)",
        "tip": "因 (nguyên nhân) + 为 (vì) = VÌ, BỞI VÌ.",
        "cf": "办 (bàn – \"làm việc\")",
        "w": "因为 / 为什么 / 以为"
      }
    ],
    "colloFull": [
      {
        "zh": "因为下雨",
        "py": "yīnwèi xià yǔ",
        "vn": "vì trời mưa"
      },
      {
        "zh": "因为忙",
        "py": "yīnwèi máng",
        "vn": "vì bận"
      },
      {
        "zh": "因为生病",
        "py": "yīnwèi shēngbìng",
        "vn": "vì bị ốm"
      },
      {
        "zh": "因为好吃",
        "py": "yīnwèi hǎochī",
        "vn": "vì ngon"
      }
    ],
    "patterns": [
      {
        "s": "因为 + lý do，所以 + kết quả",
        "m": "Vì … nên …"
      },
      {
        "s": "Tiếng Trung dùng CẢ HAI vế, tiếng Việt chỉ dùng một"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Vì bị ốm nên hôm nay tôi không đi học.",
        "answer": "因为生病，所以今天我不去学校。",
        "answerPy": "Yīnwèi shēngbìng, suǒyǐ jīntiān wǒ bú qù xuéxiào.",
        "note": "因为 nói lý do, 所以 nói kết quả.",
        "pair": "因为……所以……"
      },
      {
        "promptLang": "vi",
        "prompt": "Vì bận quá nên tôi không có thời gian đi bơi.",
        "answer": "因为太忙了，所以我没有时间去游泳。",
        "answerPy": "Yīnwèi tài máng le, suǒyǐ wǒ méiyǒu shíjiān qù yóuyǒng.",
        "note": "太……了 nằm gọn trong vế 因为.",
        "pair": "因为……所以……"
      }
    ]
  },
  {
    "n": 9,
    "zh": "所以",
    "py": "suǒyǐ",
    "pos": "Liên từ",
    "vn": "cho nên, nên",
    "hv": "sở dĩ",
    "em": "➡️",
    "lesson": 3,
    "ex_zh": "因为生病，所以没上课。",
    "ex_py": "Yīnwèi shēngbìng, suǒyǐ méi shàngkè.",
    "ex_vn": "Vì bị ốm nên không lên lớp.",
    "exList": [
      {
        "zh": "因为生病，所以没上课。",
        "py": "Yīnwèi shēngbìng, suǒyǐ méi shàngkè.",
        "vn": "Vì bị ốm nên không lên lớp."
      },
      {
        "zh": "今天很累，所以我想早点儿休息。",
        "py": "Jīntiān hěn lèi, suǒyǐ wǒ xiǎng zǎo diǎnr xiūxi.",
        "vn": "Hôm nay mệt quá nên tôi muốn nghỉ sớm một chút."
      },
      {
        "zh": "外面下雨，所以我们没去打篮球。",
        "py": "Wàimian xià yǔ, suǒyǐ wǒmen méi qù dǎ lánqiú.",
        "vn": "Bên ngoài trời mưa nên chúng tôi không đi chơi bóng rổ."
      }
    ],
    "hanzi": [
      {
        "c": "所",
        "p": "suǒ",
        "type": "左右结构 · Trái-phải",
        "st": 8,
        "ord": "户 (hộ) trái → 斤 (cân) phải",
        "rad": "户 (hộ – cửa)",
        "mean": "nơi, chỗ",
        "tip": "户 (nhà) + 斤 (rìu, công cụ) → nơi làm việc, chốn ở → mở rộng thành từ nối kết QUẢ.",
        "cf": "近 (jìn – \"gần\", bộ 辶)",
        "w": "所以 / 所有 / 场所"
      },
      {
        "c": "以",
        "p": "yǐ",
        "type": "独体字 · Chữ đơn",
        "st": 4,
        "ord": "丶→フ→丿→乀",
        "rad": "人 (nhân – biến thể)",
        "mean": "dùng để, do đó",
        "tip": "Đã học ở Bài 5 (可以, 以后) — 所 + 以 = CHO NÊN, do đó.",
        "cf": "已 (yǐ)",
        "w": "所以 / 可以 / 以后"
      }
    ],
    "colloFull": [
      {
        "zh": "所以不去",
        "py": "suǒyǐ bú qù",
        "vn": "nên không đi"
      },
      {
        "zh": "所以喜欢",
        "py": "suǒyǐ xǐhuan",
        "vn": "nên thích"
      },
      {
        "zh": "所以休息",
        "py": "suǒyǐ xiūxi",
        "vn": "nên nghỉ"
      },
      {
        "zh": "所以来了",
        "py": "suǒyǐ lái le",
        "vn": "nên đã đến"
      }
    ],
    "patterns": [
      {
        "s": "因为……，所以……",
        "m": "Cặp liên từ đi liền một bộ"
      },
      {
        "s": "所以 đứng đầu vế sau, nói kết quả"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Mì ở đây rất ngon nên tôi thường đến.",
        "answer": "因为这儿的面条很好吃，所以我经常来。",
        "answerPy": "Yīnwèi zhèr de miàntiáo hěn hǎochī, suǒyǐ wǒ jīngcháng lái.",
        "note": "所以 đứng đầu vế sau.",
        "pair": "因为……所以……"
      },
      {
        "promptLang": "vi",
        "prompt": "Vì bên ngoài mưa nên chúng tôi không chơi bóng đá.",
        "answer": "因为外面下雨，所以我们不踢足球。",
        "answerPy": "Yīnwèi wàimiàn xià yǔ, suǒyǐ wǒmen bù tī zúqiú.",
        "note": "Cặp liên từ đi liền một bộ.",
        "pair": "因为……所以……"
      }
    ]
  },
  {
    "n": 10,
    "zh": "游泳",
    "py": "yóuyǒng",
    "pos": "Động từ",
    "vn": "bơi lội",
    "hv": "du vịnh",
    "em": "🏊",
    "lesson": 3,
    "ex_zh": "我这个月天天游泳。",
    "ex_py": "Wǒ zhège yuè tiāntiān yóuyǒng.",
    "ex_vn": "Tháng này ngày nào tôi cũng đi bơi.",
    "exList": [
      {
        "zh": "我这个月天天游泳。",
        "py": "Wǒ zhège yuè tiāntiān yóuyǒng.",
        "vn": "Tháng này ngày nào tôi cũng đi bơi."
      },
      {
        "zh": "你会游泳吗？",
        "py": "Nǐ huì yóuyǒng ma?",
        "vn": "Bạn biết bơi không?"
      },
      {
        "zh": "夏天我们常常去游泳。",
        "py": "Xiàtiān wǒmen chángcháng qù yóuyǒng.",
        "vn": "Mùa hè chúng tôi thường đi bơi."
      }
    ],
    "hanzi": [
      {
        "c": "游",
        "p": "yóu",
        "type": "左右结构 · Trái-phải",
        "st": 12,
        "ord": "氵(thủy) trái → 斿 (biến thể) phải",
        "rad": "氵(thủy – nước)",
        "mean": "bơi; du ngoạn",
        "tip": "Bộ 氵(nước) → hoạt động di chuyển trong nước = BƠI.",
        "cf": "旅 (lǚ – \"du lịch\")",
        "w": "游泳 / 旅游 / 游戏"
      },
      {
        "c": "泳",
        "p": "yǒng",
        "type": "左右结构 · Trái-phải",
        "st": 8,
        "ord": "氵(thủy) trái → 永 (vĩnh) phải",
        "rad": "氵(thủy – nước)",
        "mean": "bơi",
        "tip": "Cũng mang bộ 氵(nước) → 游 + 泳 cùng nghĩa BƠI, ghép đôi nhấn mạnh.",
        "cf": "永 (yǒng – \"vĩnh viễn\", thiếu bộ 氵)",
        "w": "游泳 / 泳衣 / 游泳池"
      }
    ],
    "colloFull": [
      {
        "zh": "去游泳",
        "py": "qù yóuyǒng",
        "vn": "đi bơi"
      },
      {
        "zh": "喜欢游泳",
        "py": "xǐhuan yóuyǒng",
        "vn": "thích bơi"
      },
      {
        "zh": "会游泳",
        "py": "huì yóuyǒng",
        "vn": "biết bơi"
      },
      {
        "zh": "经常游泳",
        "py": "jīngcháng yóuyǒng",
        "vn": "thường đi bơi"
      }
    ],
    "patterns": [
      {
        "s": "会 + 游泳",
        "m": "Biết bơi — 会 là kỹ năng học được"
      },
      {
        "s": "游泳 là từ ly hợp — 游 và 泳 tách ra được"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Chị tôi biết bơi, tôi không biết bơi.",
        "answer": "我姐姐会游泳，我不会游泳。",
        "answerPy": "Wǒ jiějie huì yóuyǒng, wǒ bú huì yóuyǒng.",
        "note": "会 là kỹ năng học được.",
        "pair": "会 + V"
      },
      {
        "promptLang": "vi",
        "prompt": "Tôi thường đi bơi vào buổi sáng.",
        "answer": "我经常早上去游泳。",
        "answerPy": "Wǒ jīngcháng zǎoshang qù yóuyǒng.",
        "note": "Thời gian đứng trước động từ.",
        "pair": "经常 + V"
      }
    ]
  },
  {
    "n": 11,
    "zh": "经常",
    "py": "jīngcháng",
    "pos": "Phó từ",
    "vn": "thường xuyên",
    "hv": "kinh thường",
    "em": "🔁",
    "lesson": 4,
    "ex_zh": "你经常游泳吗？",
    "ex_py": "Nǐ jīngcháng yóuyǒng ma?",
    "ex_vn": "Bạn có thường xuyên đi bơi không?",
    "exList": [
      {
        "zh": "你经常游泳吗？",
        "py": "Nǐ jīngcháng yóuyǒng ma?",
        "vn": "Bạn có thường xuyên đi bơi không?"
      },
      {
        "zh": "我经常去图书馆。",
        "py": "Wǒ jīngcháng qù túshūguǎn.",
        "vn": "Tôi thường xuyên đi thư viện."
      },
      {
        "zh": "他经常迟到。",
        "py": "Tā jīngcháng chídào.",
        "vn": "Anh ấy thường xuyên đến muộn."
      }
    ],
    "hanzi": [
      {
        "c": "经",
        "p": "jīng",
        "type": "左右结构 · Trái-phải",
        "st": 8,
        "ord": "纟(mịch) trái → 巛+工 phải",
        "rad": "纟(mịch – tơ)",
        "mean": "trải qua; kinh",
        "tip": "Đã học ở Bài 4 (已经) — 经 + 常 = trải qua một cách thường xuyên = THƯỜNG XUYÊN.",
        "cf": "径 (jìng)",
        "w": "经常 / 已经 / 经理"
      },
      {
        "c": "常",
        "p": "cháng",
        "type": "上下结构 · Trên-dưới",
        "st": 11,
        "ord": "⺌→冖→巾",
        "rad": "巾 (cân – khăn)",
        "mean": "thường xuyên",
        "tip": "Đã học ở Bài 4 (非常). Đứng riêng/ghép với 经 đều mang nghĩa THƯỜNG XUYÊN.",
        "cf": "尝 (cháng)",
        "w": "经常 / 非常 / 常常"
      }
    ],
    "colloFull": [
      {
        "zh": "经常去",
        "py": "jīngcháng qù",
        "vn": "thường đi"
      },
      {
        "zh": "经常运动",
        "py": "jīngcháng yùndòng",
        "vn": "thường vận động"
      },
      {
        "zh": "不经常",
        "py": "bù jīngcháng",
        "vn": "không thường xuyên"
      },
      {
        "zh": "经常吃",
        "py": "jīngcháng chī",
        "vn": "thường ăn"
      }
    ],
    "patterns": [
      {
        "s": "经常 + động từ",
        "m": "Thường làm gì: 我经常游泳"
      },
      {
        "s": "经常 (thường) mạnh hơn 常常; 经常 đứng TRƯỚC động từ"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Bố tôi thường vận động nên sức khoẻ khá tốt.",
        "answer": "因为我爸爸经常运动，所以身体不错。",
        "answerPy": "Yīnwèi wǒ bàba jīngcháng yùndòng, suǒyǐ shēntǐ búcuò.",
        "note": "经常运动 — thường xuyên vận động.",
        "pair": "因为……所以……"
      },
      {
        "promptLang": "vi",
        "prompt": "Tôi không thường ăn thịt cừu.",
        "answer": "我不经常吃羊肉。",
        "answerPy": "Wǒ bù jīngcháng chī yángròu.",
        "note": "不 đứng trước 经常.",
        "pair": "不经常 + V"
      }
    ]
  },
  {
    "n": 12,
    "zh": "公斤",
    "py": "gōngjīn",
    "pos": "Lượng từ",
    "vn": "ki-lô-gam",
    "hv": "công cân",
    "em": "⚖️",
    "lesson": 4,
    "ex_zh": "我现在70公斤了。",
    "ex_py": "Wǒ xiànzài qīshí gōngjīn le.",
    "ex_vn": "Bây giờ tôi được 70 kg rồi đấy.",
    "exList": [
      {
        "zh": "我现在70公斤了。",
        "py": "Wǒ xiànzài qīshí gōngjīn le.",
        "vn": "Bây giờ tôi được 70 kg rồi đấy."
      },
      {
        "zh": "这条鱼有两公斤。",
        "py": "Zhè tiáo yú yǒu liǎng gōngjīn.",
        "vn": "Con cá này nặng hai cân."
      },
      {
        "zh": "你的体重是多少公斤？",
        "py": "Nǐ de tǐzhòng shì duōshao gōngjīn?",
        "vn": "Cân nặng của bạn là bao nhiêu kg?"
      }
    ],
    "hanzi": [
      {
        "c": "公",
        "p": "gōng",
        "type": "上下结构 · Trên-dưới",
        "st": 4,
        "ord": "八 (bát) trên → 厶 (khư) dưới",
        "rad": "八 (bát)",
        "mean": "công, chung",
        "tip": "八 (chia ra) trên 厶 (riêng tư) → chia cái riêng thành cái CHUNG. 公斤 là đơn vị đo chung, quốc tế.",
        "cf": "私 (sī)",
        "w": "公斤 / 公司 / 公园"
      },
      {
        "c": "斤",
        "p": "jīn",
        "type": "独体字 · Chữ đơn",
        "st": 4,
        "ord": "丿→一→丨→一",
        "rad": "斤 (cân – tự thành bộ)",
        "mean": "cân, rìu",
        "tip": "Hình chiếc rìu cách điệu, xưa cũng là đơn vị cân trọng lượng → dùng đo KHỐI LƯỢNG.",
        "cf": "欣 (xīn – \"vui mừng\")",
        "w": "公斤 / 斤两"
      }
    ],
    "colloFull": [
      {
        "zh": "一公斤",
        "py": "yì gōngjīn",
        "vn": "một cân"
      },
      {
        "zh": "两公斤羊肉",
        "py": "liǎng gōngjīn yángròu",
        "vn": "hai cân thịt cừu"
      },
      {
        "zh": "多少公斤",
        "py": "duōshao gōngjīn",
        "vn": "bao nhiêu cân"
      },
      {
        "zh": "五公斤",
        "py": "wǔ gōngjīn",
        "vn": "năm cân"
      }
    ],
    "patterns": [
      {
        "s": "số + 公斤 + danh từ",
        "m": "Đơn vị cân nặng: 一公斤羊肉"
      },
      {
        "s": "一公斤 = 1 kg; 米 đo dài, 公斤 đo nặng"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Cân thịt cừu này bao nhiêu tiền?",
        "answer": "这一公斤羊肉多少钱？",
        "answerPy": "Zhè yì gōngjīn yángròu duōshao qián?",
        "note": "Khung hỏi giá quen thuộc nhất.",
        "pair": "多少钱？"
      },
      {
        "promptLang": "vi",
        "prompt": "Tôi mua năm cân hoa quả.",
        "answer": "我买了五公斤水果。",
        "answerPy": "Wǒ mǎile wǔ gōngjīn shuǐguǒ.",
        "note": "公斤 đo nặng, 米 đo dài.",
        "pair": "……了"
      }
    ]
  },
  {
    "n": 13,
    "zh": "姐姐",
    "py": "jiějie",
    "pos": "Danh từ",
    "vn": "chị gái",
    "hv": "thư thư",
    "em": "👩",
    "lesson": 4,
    "ex_zh": "他去北京看他姐姐。",
    "ex_py": "Tā qù Běijīng kàn tā jiějie.",
    "ex_vn": "Anh ấy đi Bắc Kinh thăm chị gái.",
    "exList": [
      {
        "zh": "他去北京看他姐姐。",
        "py": "Tā qù Běijīng kàn tā jiějie.",
        "vn": "Anh ấy đi Bắc Kinh thăm chị gái."
      },
      {
        "zh": "我姐姐是医生。",
        "py": "Wǒ jiějie shì yīshēng.",
        "vn": "Chị gái tôi là bác sĩ."
      },
      {
        "zh": "姐姐比我大三岁。",
        "py": "Jiějie bǐ wǒ dà sān suì.",
        "vn": "Chị gái lớn hơn tôi ba tuổi."
      }
    ],
    "hanzi": [
      {
        "c": "姐",
        "p": "jiě",
        "type": "左右结构 · Trái-phải",
        "st": 8,
        "ord": "女 (nữ) trái → 且 (thả) phải",
        "rad": "女 (nữ – phụ nữ)",
        "mean": "chị gái",
        "tip": "Bộ 女 (nữ) → chỉ người con gái lớn hơn trong nhà = CHỊ GÁI. Lặp 姐姐 để xưng hô thân mật.",
        "cf": "组 (zǔ – \"tổ, nhóm\", bộ 纟)",
        "w": "姐姐 / 姐妹 / 大姐"
      }
    ],
    "colloFull": [
      {
        "zh": "我姐姐",
        "py": "wǒ jiějie",
        "vn": "chị tôi"
      },
      {
        "zh": "姐姐的房间",
        "py": "jiějie de fángjiān",
        "vn": "phòng của chị"
      },
      {
        "zh": "两个姐姐",
        "py": "liǎng gè jiějie",
        "vn": "hai người chị"
      },
      {
        "zh": "姐姐会游泳",
        "py": "jiějie huì yóuyǒng",
        "vn": "chị biết bơi"
      }
    ],
    "patterns": [
      {
        "s": "ai + 姐姐",
        "m": "Chị của ai — người thân hay bỏ 的"
      },
      {
        "s": "姐姐 (chị) — cùng bộ 女 với 妈妈 · 女儿"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Chị tôi năm nay hai mươi tuổi.",
        "answer": "我姐姐今年二十岁。",
        "answerPy": "Wǒ jiějie jīnnián èrshí suì.",
        "note": "Nói tuổi không cần động từ 是.",
        "pair": "……岁"
      },
      {
        "promptLang": "vi",
        "prompt": "Phòng của chị tôi bên cạnh phòng tôi.",
        "answer": "我姐姐的房间在我房间旁边。",
        "answerPy": "Wǒ jiějie de fángjiān zài wǒ fángjiān pángbiān.",
        "note": "danh từ + 旁边 — bên cạnh cái gì.",
        "pair": "在……旁边"
      }
    ]
  }
];

const wuData = [
  {img:'🚲',label:'自行车',py:'zìxíngchē',letter:'A'},
  {img:'🍜',label:'面条',py:'miàntiáo',letter:'B'},
  {img:'🏀',label:'打篮球',py:'dǎ lánqiú',letter:'C'},
  {img:'🏊',label:'游泳',py:'yóuyǒng',letter:'D'},
  {img:'⚖️',label:'公斤',py:'gōngjīn',letter:'E'},
  {img:'🚪',label:'门',py:'mén',letter:'F'},
];

var dialogData = [
  {scene:'在学校 · Ở trường học',
   preQuiz:[
     {q:'小王来学校了吗？',opts:['来了','没来','不知道'],ans:0},
     {q:'女的怎么知道小王来了？',opts:['看见他自行车了','他打电话了','老师说的'],ans:0},
   ],
   lines:[
     {sp:0,zh:'你知道小王今天什么时候来学校吗？',py:'Nǐ zhīdào Xiǎo Wáng jīntiān shénme shíhou lái xuéxiào ma?',vn:'Bạn có biết hôm nay khi nào Tiểu Vương đến trường không?'},
     {sp:1,zh:'他已经来了。',py:'Tā yǐjīng lái le.',vn:'Cậu ấy đến rồi đấy.'},
     {sp:0,zh:'你怎么知道他来了？',py:'Nǐ zěnme zhīdào tā lái le?',vn:'Sao bạn biết cậu ấy đến rồi?'},
     {sp:1,zh:'我在门外看见他的自行车了。',py:'Wǒ zài mén wài kànjiàn tā de zìxíngchē le.',vn:'Tôi nhìn thấy xe đạp của cậu ấy ở ngoài cửa rồi.'},
   ]},
  {scene:'在饭馆 · Trong nhà hàng',
   preQuiz:[
     {q:'男的为什么不想吃羊肉了？',opts:['这周天天吃羊肉','羊肉不好吃','羊肉太贵'],ans:0},
     {q:'男的接下来想吃什么？',opts:['面条','米饭','饺子'],ans:0},
   ],
   lines:[
     {sp:0,zh:'今天的羊肉很好吃，你怎么不吃了？',py:'Jīntiān de yángròu hěn hǎochī, nǐ zěnme bù chī le?',vn:'Thịt dê hôm nay ngon thế, sao bạn không ăn nữa?'},
     {sp:1,zh:'这个星期天天都吃羊肉，不想吃了。',py:'Zhège xīngqī tiāntiān dōu chī yángròu, bù xiǎng chī le.',vn:'Tuần này ngày nào cũng ăn thịt dê rồi, tôi không muốn ăn nữa.'},
     {sp:0,zh:'那你还想吃什么？',py:'Nà nǐ hái xiǎng chī shénme?',vn:'Thế bạn còn muốn ăn món gì khác không?'},
     {sp:1,zh:'来一点儿面条吧。',py:'Lái yìdiǎnr miàntiáo ba.',vn:'Cho một ít mì sợi đi.'},
   ]},
  {scene:'在健身房 · Trong phòng tập thể hình',
   preQuiz:[
     {q:'昨天为什么没去打篮球？',opts:['下雨','没时间','生病了'],ans:0},
     {q:'男的昨天做了什么运动？',opts:['游泳','跑步','打篮球'],ans:0},
     {q:'男的现在多少公斤？',opts:['60公斤','70公斤','80公斤'],ans:1},
   ],
   lines:[
     {sp:0,zh:'昨天你们怎么都没去打篮球？',py:'Zuótiān nǐmen zěnme dōu méi qù dǎ lánqiú?',vn:'Hôm qua sao các bạn đều không đi chơi bóng rổ thế?'},
     {sp:1,zh:'因为昨天下雨，所以我们都没去。我去游泳了。',py:'Yīnwèi zuótiān xià yǔ, suǒyǐ wǒmen dōu méi qù. Wǒ qù yóuyǒng le.',vn:'Tại vì hôm qua trời mưa nên chúng tôi đều không đi. Tôi thì đi bơi rồi.'},
     {sp:0,zh:'你经常游泳吗？',py:'Nǐ jīngcháng yóuyǒng ma?',vn:'Bạn có thường xuyên đi bơi không?'},
     {sp:1,zh:'这个月我天天游泳，我现在70公斤了。',py:'Zhège yuè wǒ tiāntiān yóuyǒng, wǒ xiànzài qīshí gōngjīn le.',vn:'Tháng này ngày nào tôi cũng đi bơi, bây giờ tôi được 70 kg rồi đấy.'},
   ]},
  {scene:'在办公室 · Trong văn phòng',
   preQuiz:[
     {q:'小张去哪儿了？',opts:['北京','上海','广州'],ans:0},
     {q:'小张是去旅游吗？',opts:['是','不是，去看姐姐','不知道'],ans:1},
   ],
   lines:[
     {sp:0,zh:'这两天怎么没看见小张？',py:'Zhè liǎng tiān zěnme méi kànjiàn Xiǎo Zhāng?',vn:'Hai ngày nay sao không thấy Tiểu Trương nhỉ?'},
     {sp:1,zh:'他去北京了。',py:'Tā qù Běijīng le.',vn:'Cậu ấy đi Bắc Kinh rồi.'},
     {sp:0,zh:'去北京了？是去旅游吗？',py:'Qù Běijīng le? Shì qù lǚyóu ma?',vn:'Đi Bắc Kinh á? Có phải đi du lịch không?'},
     {sp:1,zh:'不是，听说是去看他姐姐。',py:'Bú shì, tīngshuō shì qù kàn tā jiějie.',vn:'Không phải, nghe nói là đi thăm chị gái cậu ấy.'},
   ]},
];

// ══════════════════════════════════════════
// PHẦN 1 · GHÉP TỪ (Collocation)
// ══════════════════════════════════════════
var matchData = [
  {left:'好吃',right:'面条'},
  {left:'打',right:'篮球'},
  {left:'经常',right:'游泳'},
  {left:'因为',right:'所以'},
  {left:'买',right:'自行车'},
  {left:'门',right:'外'},
];

// ══════════════════════════════════════════
// PHẦN 2 · NGHE — tình huống MỚI: hỏi lý do vắng mặt, gọi món khác ở quán ăn.
// Ôn lại 生病/休息 (Bài 2), 觉得/运动 (Bài 1), 对 (Bài 5).
// ══════════════════════════════════════════
var listenData = {
  type: 'workbook',
  audio: '/audio/bai-6/listen-full.mp3',
  dictation: [
    {num:1, lines:[
      {pre:'这个星期', blank:'天天吃羊肉', post:'。', py:'Zhège xīngqī tiāntiān chī yángròu.', vn:'Tuần này ngày nào cũng ăn thịt cừu.'},
    ]},
    {num:2, lines:[
      {pre:'我每天', blank:'吃很多面条', post:'。', py:'Wǒ měitiān chī hěn duō miàntiáo.', vn:'Tôi ngày nào cũng ăn rất nhiều mì.'},
    ]},
    {num:3, lines:[
      {pre:'这是我', blank:'房间的门', post:'。', py:'Zhè shì wǒ fángjiān de mén.', vn:'Đây là cửa phòng của tôi.'},
    ]},
    {num:4, lines:[
      {pre:'他们', blank:'经常踢足球', post:'。', py:'Tāmen jīngcháng tī zúqiú.', vn:'Họ thường xuyên đá bóng.'},
    ]},
    {num:5, lines:[
      {pre:'我', blank:'天天去游泳', post:'。', py:'Wǒ tiāntiān qù yóuyǒng.', vn:'Tôi ngày nào cũng đi bơi.'},
    ]},
    {num:6, lines:[
      {speaker:'男', pre:'小王', blank:'来了吗', post:'？', py:'Xiǎo Wáng lái le ma?', vn:'Tiểu Vương đến chưa?'},
      {speaker:'女', pre:'我在门外', blank:'看见他的自行车了', post:'。', py:'Wǒ zài mén wài kànjiàn tā de zìxíngchē le.', vn:'Tôi thấy xe đạp của cậu ấy ở ngoài cửa rồi.'},
    ]},
    {num:7, lines:[
      {speaker:'男', pre:'你还想', blank:'吃什么', post:'？', py:'Nǐ hái xiǎng chī shénme?', vn:'Bạn còn muốn ăn gì nữa?'},
      {speaker:'女', pre:'', blank:'来点儿米饭吧', post:'。', py:'Lái diǎnr mǐfàn ba.', vn:'Cho thêm ít cơm đi.'},
    ]},
    {num:8, lines:[
      {speaker:'女', pre:'昨天你们怎么', blank:'没去打篮球', post:'？', py:'Zuótiān nǐmen zěnme méi qù dǎ lánqiú?', vn:'Hôm qua sao các bạn không đi chơi bóng rổ?'},
      {speaker:'男', pre:'因为下雨，', blank:'我们都没去', post:'。', py:'Yīnwèi xiàyǔ, wǒmen dōu méi qù.', vn:'Vì trời mưa, chúng tôi đều không đi.'},
    ]},
    {num:9, lines:[
      {speaker:'女', pre:'你经常', blank:'游泳吗', post:'？', py:'Nǐ jīngcháng yóuyǒng ma?', vn:'Bạn có thường xuyên bơi không?'},
      {speaker:'男', pre:'这个月我', blank:'天天游泳', post:'。', py:'Zhège yuè wǒ tiāntiān yóuyǒng.', vn:'Tháng này tôi ngày nào cũng bơi.'},
    ]},
    {num:10, lines:[
      {speaker:'女', pre:'这两天怎么没', blank:'看见小张', post:'？', py:'Zhè liǎng tiān zěnme méi kànjiàn Xiǎo Zhāng?', vn:'Mấy hôm nay sao không thấy Tiểu Trương?'},
      {speaker:'男', pre:'听说他', blank:'坐飞机去旅游了', post:'。', py:'Tīngshuō tā zuò fēijī qù lǚyóu le.', vn:'Nghe nói cậu ấy đi máy bay đi du lịch rồi.'},
    ]},
  ],
  mc: [
    {num:11, options:['女的','男的','没有人看见小卫'], ans:2,
     explain:'女：你看见小卫了吗？他的车在门外呢。男：我没看见。问：谁看见小卫了？ → 没有人看见小卫。'},
    {num:12, options:['羊肉不好吃','羊肉太贵了','每天都吃'], ans:2,
     explain:'女：你多吃一点儿羊肉吧。男：这个星期天天吃羊肉，我不想吃了，你吃吧。问：男的为什么不想吃羊肉？ → 每天都吃。'},
    {num:13, options:['天气不好','天气太冷了','工作太忙了'], ans:0,
     explain:'女：昨天你们怎么没去踢足球？男：因为昨天天气不太好，所以我们都没去。问：他们为什么没去踢足球？ → 天气不好。'},
    {num:14, options:['八十公斤','六十五公斤','七十公斤'], ans:0,
     explain:'女：你每天都运动吗？男：这个月我天天游泳，现在七十公斤了。问：男的以前可能多少公斤？ → 八十公斤（游泳后瘦了，以前应该更重）。'},
    {num:15, options:['小王','小张','姐姐'], ans:1,
     explain:'女：这几天怎么没看见小张？男：听小王说小张去北京看他姐姐了。问：谁去北京了？ → 小张。'},
  ],
};

// ══════════════════════════════════════════
// PHẦN 3a · ĐIỀN TỪ — hội thoại MỚI: hỏi lý do vắng tập, gọi món khác
// ══════════════════════════════════════════
var fillData = [
  {pre:'你',blank:'怎么',post:'没去打篮球？',hint:'(sao, tại sao)',ans:'怎么',exp:'怎么 đứng sau chủ ngữ, trước động từ, dùng hỏi lý do.'},
  {pre:'',blank:'因为',post:'昨天下雨，',hint:'(vì)',ans:'因为'},
  {pre:'',blank:'所以',post:'我没去。',hint:'(nên, cho nên)',ans:'所以',exp:'因为……，所以…… luôn đi thành cặp, không đảo ngược.'},
  {pre:'你',blank:'经常',post:'游泳吗？',hint:'(thường xuyên)',ans:'经常'},
  {pre:'这个饭店的面条很',blank:'好吃',post:'。',hint:'(ngon)',ans:'好吃'},
  {pre:'你',blank:'怎么',post:'不吃羊肉了？',hint:'(sao — ôn lại)',ans:'怎么'},
  {pre:'我这个星期天天都吃羊肉，',blank:'所以',post:'不想吃了。',hint:'(nên)',ans:'所以'},
  {pre:'我姐姐',blank:'经常',post:'打篮球。',hint:'(thường xuyên)',ans:'经常'},
];

// ══════════════════════════════════════════
// PHẦN 3b · SẮP XẾP
// ══════════════════════════════════════════
var sortData = [
  {words:['你','怎么','没','去','打篮球','？'],ans:'你怎么没去打篮球？',audio:'你怎么没去打篮球？'},
  {words:['因为','昨天','下雨','，','所以','我','没','去','。'],ans:'因为昨天下雨，所以我没去。',audio:'因为昨天下雨，所以我没去。'},
  {words:['你','经常','游泳','吗','？'],ans:'你经常游泳吗？',audio:'你经常游泳吗？'},
  {words:['这个','饭店','的','面条','很','好吃','。'],ans:'这个饭店的面条很好吃。',audio:'这个饭店的面条很好吃。'},
  {words:['我','姐姐','经常','打篮球','。'],ans:'我姐姐经常打篮球。',audio:'我姐姐经常打篮球。'},
  {words:['我','天天','都','吃','羊肉','，','不想','吃','了','。'],ans:'我天天都吃羊肉，不想吃了。',audio:'我天天都吃羊肉，不想吃了。'},
];

// ══════════════════════════════════════════
// PHẦN 3c · SỬA LỖI SAI
// ══════════════════════════════════════════
var errorFixData = [
  {wrong:'没去打篮球你怎么？',
   opts:['你怎么没去打篮球？','怎么你没去打篮球？','你没去怎么打篮球？','你没打篮球怎么去？'],ans:0,
   exp:'怎么 đứng SAU chủ ngữ, TRƯỚC động từ, dùng để hỏi lý do (= tại sao).'},
  {wrong:'昨天下雨，我没去所以因为。',
   opts:['因为昨天下雨，所以我没去。','所以昨天下雨，因为我没去。','昨天下雨因为，所以我没去。','因为昨天下雨我没去所以。'],ans:0,
   exp:'因为 đứng đầu vế NGUYÊN NHÂN, 所以 đứng đầu vế KẾT QUẢ — không đảo ngược vị trí hai từ này.'},
  {wrong:'我游泳经常。',
   opts:['我经常游泳。','经常我游泳。','我游泳常经。','游泳经常我。'],ans:0,
   exp:'经常 (phó từ tần suất) đứng TRƯỚC động từ, không đặt sau như tiếng Việt "tôi bơi thường xuyên".'},
  {wrong:'我每天天都吃羊肉。',
   opts:['我天天都吃羊肉。','我每天天都吃羊肉。','我天每天都吃羊肉。','我都天天吃羊肉每。'],ans:0,
   exp:'天天 (lặp lại danh từ thời gian) đã mang nghĩa "mỗi ngày", KHÔNG cần thêm 每 phía trước nữa.'},
  {wrong:'你怎么样没去打篮球？',
   opts:['你怎么没去打篮球？','你怎么样没去打篮球？','你没去怎么样打篮球？','你没怎么样去打篮球？'],ans:0,
   exp:'怎么 hỏi LÝ DO (tại sao), còn 怎么样 hỏi Ý KIẾN/TÌNH TRẠNG (thế nào) — hai từ khác nghĩa, học sinh Việt hay nhầm lẫn.'},
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
  intro: 'Mỗi câu hỏi là một tình huống thật trong đời sống, dùng đúng từ vựng và mẫu câu của Bài 6. Bấm 🎙️ rồi trả lời bằng tiếng Trung — AI sẽ nghe, ghi lại câu bạn nói và chấm điểm theo Nội dung · Mẫu câu · Từ vựng · Độ trôi chảy. Nên tự trả lời trước rồi mới mở “Câu mẫu” để đối chiếu.',
  tasks: [
    {
      situation: 'Hôm qua cả nhóm đi chơi bóng rổ mà bạn không đến, bạn học hỏi lý do.',
      q_zh: '昨天你怎么没去打篮球？',
      q_py: 'Zuótiān nǐ zěnme méi qù dǎ lánqiú?',
      q_vn: 'Hôm qua sao bạn không đi chơi bóng rổ?',
      grammar: { label: '因为…，所以…', any: ['因为', '所以'] },
      need: [
        { label: 'Dùng 因为 nêu lý do', any: ['因为'] },
        { label: 'Dùng 所以 nêu kết quả', any: ['所以'] },
        { label: 'Nói việc bạn đã làm thay vào đó', any: ['游泳', '学习', '工作', '休息', '看', '去', '在家'] }
      ],
      bonus: { label: 'Nói thêm thời tiết hoặc tình huống (下雨)', any: ['下雨', '天气', '生病', '忙'] },
      vocab: ['因为', '所以', '打篮球', '游泳'],
      minLen: 12,
      sample: '因为昨天下雨，所以我没去打篮球。我去游泳了。',
      sample_py: 'Yīnwèi zuótiān xià yǔ, suǒyǐ wǒ méi qù dǎ lánqiú. Wǒ qù yóuyǒng le.',
      sample_vn: 'Vì hôm qua trời mưa nên tôi không đi chơi bóng rổ. Tôi đi bơi.',
      tip: 'Tiếng Trung dùng đủ cặp 因为…所以…, khác tiếng Việt chỉ cần một vế.'
    },
    {
      situation: 'Trong nhà hàng, bạn ăn ít đi và người bạn hỏi.',
      q_zh: '今天的羊肉很好吃，你怎么不吃了？',
      q_py: 'Jīntiān de yángròu hěn hǎochī, nǐ zěnme bù chī le?',
      q_vn: 'Thịt dê hôm nay ngon lắm, sao bạn không ăn nữa?',
      grammar: { label: '因为…，所以不想吃了 + 来一点儿…吧', any: ['因为', '不想', '来'] },
      need: [
        { label: 'Nêu lý do không ăn nữa', any: ['因为', '天天', '不想', '吃过', '饱', '太'] },
        { label: 'Nói món muốn ăn thay', any: ['面条', '米饭', '菜', '鱼', '汤', '水果'] },
        { label: 'Dùng 好吃 hoặc 吃', any: ['好吃', '吃'] }
      ],
      bonus: { label: 'Dùng 来一点儿…吧 để gọi món', any: ['来一点儿', '来', '吧'] },
      vocab: ['羊肉', '好吃', '面条'],
      minLen: 12,
      sample: '因为这个星期天天都吃羊肉，所以不想吃了。来一点儿面条吧。',
      sample_py: 'Yīnwèi zhège xīngqī tiāntiān dōu chī yángròu, suǒyǐ bù xiǎng chī le. Lái yìdiǎnr miàntiáo ba.',
      sample_vn: 'Vì cả tuần này ngày nào cũng ăn thịt dê nên tôi không muốn ăn nữa. Cho tôi ít mì đi.',
      tip: '天天 = ngày nào cũng; 来一点儿… là cách gọi món rất tự nhiên.'
    },
    {
      situation: 'Bạn cùng phòng hỏi về thói quen bơi lội của bạn.',
      q_zh: '你经常游泳吗？你现在多少公斤？',
      q_py: 'Nǐ jīngcháng yóuyǒng ma? Nǐ xiànzài duōshao gōngjīn?',
      q_vn: 'Bạn có hay đi bơi không? Bây giờ bạn nặng bao nhiêu ký?',
      grammar: { label: '我经常 / 天天 + động từ', any: ['经常', '天天', '常常'] },
      need: [
        { label: 'Trả lời có hay bơi không', any: ['经常', '常常', '天天', '不常', '很少'] },
        { label: 'Dùng 游泳 hoặc môn khác', any: ['游泳', '运动', '跑步', '打篮球'] },
        { label: 'Nói cân nặng (公斤)', any: ['公斤', '斤'] }
      ],
      bonus: { label: 'Nói thay đổi (这个月 / 以前)', any: ['这个月', '以前', '现在', '了'] },
      vocab: ['经常', '游泳', '公斤'],
      minLen: 12,
      sample: '这个月我天天游泳。我现在七十公斤，比以前瘦了。',
      sample_py: 'Zhège yuè wǒ tiāntiān yóuyǒng. Wǒ xiànzài qīshí gōngjīn, bǐ yǐqián shòu le.',
      sample_vn: 'Tháng này ngày nào tôi cũng bơi. Giờ tôi 70 ký, gầy hơn trước.',
      tip: '经常 và 常常 đều là "thường xuyên", đứng trước động từ.'
    },
    {
      situation: 'Bạn nhìn thấy dấu hiệu bạn mình đã đến trường.',
      q_zh: '你怎么知道小王已经来学校了？',
      q_py: 'Nǐ zěnme zhīdào Xiǎo Wáng yǐjīng lái xuéxiào le?',
      q_vn: 'Sao bạn biết Tiểu Vương đã đến trường rồi?',
      grammar: { label: '我在…看见他的…了', any: ['看见', '看到'] },
      need: [
        { label: 'Dùng 看见 / 看到', any: ['看见', '看到'] },
        { label: 'Nói dấu hiệu (自行车 / 车 / 包 / 书)', any: ['自行车', '车', '包', '书', '衣服', '手机'] },
        { label: 'Nói vị trí (门外 / 教室里)', any: ['门外', '外', '里', '旁边', '上', '下'] }
      ],
      bonus: { label: 'Dùng 已经…了', any: ['已经'] },
      vocab: ['门', '外', '自行车'],
      minLen: 12,
      sample: '我在门外看见他的自行车了，所以我知道他已经来了。',
      sample_py: 'Wǒ zài ménwài kànjiàn tā de zìxíngchē le, suǒyǐ wǒ zhīdào tā yǐjīng lái le.',
      sample_vn: 'Tôi thấy xe đạp của cậu ấy ở ngoài cửa nên tôi biết cậu ấy đến rồi.',
      tip: 'Vị trí đặt trước động từ: 在门外看见…, không nói 看见在门外.'
    },
    {
      situation: 'Đồng nghiệp hỏi vì sao mấy hôm nay không thấy một người bạn.',
      q_zh: '这两天怎么没看见你的家人（朋友）？他去哪儿了？',
      q_py: 'Zhè liǎng tiān zěnme méi kànjiàn nǐ de jiārén (péngyou)? Tā qù nǎr le?',
      q_vn: 'Mấy hôm nay sao không thấy người nhà (bạn) của bạn? Anh ấy đi đâu rồi?',
      grammar: { label: '他去…了，是去…的', any: ['去', '了'] },
      need: [
        { label: 'Nói nơi người đó đi', any: ['北京', '上海', '中国', '家', '学校', '公司', '医院', '国外', '旅游'] },
        { label: 'Nói mục đích (去看 / 去旅游 / 去工作)', any: ['看', '旅游', '工作', '学习', '玩', '上班'] },
        { label: 'Nói người đó là ai', any: ['姐姐', '哥哥', '弟弟', '妹妹', '朋友', '同事', '同学'] }
      ],
      bonus: { label: 'Dùng 听说 để dẫn nguồn tin', any: ['听说'] },
      vocab: ['姐姐', '因为', '所以'],
      minLen: 12,
      sample: '他去北京了。听说不是去旅游，是去看他姐姐。',
      sample_py: 'Tā qù Běijīng le. Tīngshuō bú shì qù lǚyóu, shì qù kàn tā jiějie.',
      sample_vn: 'Anh ấy đi Bắc Kinh rồi. Nghe nói không phải đi du lịch, là đi thăm chị gái.',
      tip: '听说 = nghe nói, đặt ở đầu câu để dẫn lại thông tin.'
    }
  ]
};

// ══════════════════════════════════════════
// LUYỆN DỊCH — dùng từ bài 6 + ôn lại từ bài 1-5 và HSK1
// ══════════════════════════════════════════
var translateData = [
  {vi:'Sao bạn lại không ăn cơm thế?', zh:'你怎么不吃饭？', py:'Nǐ zěnme bù chī fàn?'},
  {vi:'Vì trời mưa nên chúng tôi không đi chơi bóng rổ.', zh:'因为下雨，所以我们没去打篮球。', py:'Yīnwèi xià yǔ, suǒyǐ wǒmen méi qù dǎ lánqiú.'},
  {vi:'Tuần này ngày nào tôi cũng ăn thịt dê.', zh:'这个星期我天天都吃羊肉。', py:'Zhège xīngqī wǒ tiāntiān dōu chī yángròu.'},
  {vi:'Chị gái tôi thường xuyên đi bơi.', zh:'我姐姐经常去游泳。', py:'Wǒ jiějie jīngcháng qù yóuyǒng.'},
];

// ══════════════════════════════════════════
// LUYỆN DỊCH (chiều Trung→Việt) — noi dung KHAC voi chieu Viet->Trung o tren
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:'Vì tôi rất bận nên chưa ăn cơm.', zh:'因为我很忙，所以没吃饭。', py:'Yīnwèi wǒ hěn máng, suǒyǐ méi chī fàn.'},
  {vi:'Chị gái tôi thường xuyên chơi bóng rổ, cũng thường xuyên đi bơi.', zh:'我姐姐经常打篮球，也经常游泳。', py:'Wǒ jiějie jīngcháng dǎ lánqiú, yě jīngcháng yóuyǒng.'},
  {vi:'Mì rất ngon, thịt dê cũng rất ngon.', zh:'面条很好吃，羊肉也很好吃。', py:'Miàntiáo hěn hǎochī, yángròu yě hěn hǎochī.'},
  {vi:'Anh ấy đi xe đạp đến trường.', zh:'他骑自行车去学校。', py:'Tā qí zìxíngchē qù xuéxiào.'},
];
