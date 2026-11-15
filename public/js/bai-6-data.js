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
        "py": "wàimiàn",
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
// PHẦN 1 · GHÉP TỪ (Collocation) — ghép hai nửa thành cụm dùng được ngay
// Không copy câu bài khoá — chỉ ghép CỤM TỪ để phản xạ collocation.
// ══════════════════════════════════════════
var matchData = [
  {left:'开一下',right:'门'},
  {left:'七十',right:'公斤'},
  {left:'在水里',right:'游泳'},
  {left:'这个饭店的羊肉',right:'非常好吃'},
  {left:'坐出租车去看',right:'姐姐'},
  {left:'中午吃一点儿',right:'面条'},
  {left:'这些衣服',right:'件件都漂亮'},
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
// PHẦN 3a · ĐIỀN TỪ — mỗi câu một tình huống mới (怎么 hỏi lý do · lượng từ lặp · 因为……所以…… + từ mới bài 6, ôn bài 1–5)
// ══════════════════════════════════════════
var fillData = [
  {pre:'Cả tối bạn chờ điện thoại của bạn thân: “你昨天晚上',blank:'怎么',post:'没给我打电话？” — “对不起，我工作太忙了。”',hint:'(sao — hỏi lý do)',ans:'怎么',exp:'怎么 + 没/不 + động từ = sao lại không…? (hỏi lý do, có ý ngạc nhiên); 怎么 đứng sau chủ ngữ.'},
  {pre:'“你的中国朋友喜欢吃羊肉吗？” — “喜欢，',blank:'个个',post:'都喜欢，每个星期都去饭店吃。”',hint:'(ai cũng)',ans:'个个',exp:'Lượng từ lặp 个个 = ai cũng, người nào cũng; phía sau luôn có 都.'},
  {pre:'“你怎么喝了三杯咖啡？” — “',blank:'因为',post:'晚上要准备考试，所以我不想睡觉。”',hint:'(vì)',ans:'因为',exp:'因为 mở đầu vế nguyên nhân, vế sau dùng 所以 nói kết quả.'},
  {pre:'因为我姐姐最喜欢吃鱼，',blank:'所以',post:'我们经常去那个饭店。',hint:'(cho nên)',ans:'所以',exp:'所以 đứng đầu vế kết quả (trước chủ ngữ 我们), đi cặp với 因为 ở vế trước.'},
  {pre:'Bạn hỏi người bạn mới quen: “你',blank:'经常',post:'去游泳吗？” — “不经常，我太忙了，没有时间。”',hint:'(thường xuyên)',ans:'经常',exp:'经常 đứng trước động từ: 经常去游泳; trả lời phủ định là 不经常.'},
  {pre:'“你买了多少羊肉？” — “两',blank:'公斤',post:'，晚上我们一起吃吧。”',hint:'(ki-lô-gam)',ans:'公斤',exp:'公斤 tự là lượng từ: 两公斤羊肉, không thêm 个.'},
  {pre:'Phòng nóng quá, bạn nhờ em: “房间里太热了，你开一下',blank:'门',post:'吧。”',hint:'(cửa)',ans:'门',exp:'开门 = mở cửa; 开一下门 = mở cửa một chút (động từ + 一下 cho nhẹ nhàng).'},
  {pre:'“这是谁的',blank:'自行车',post:'？” — “是我姐姐的，是她生日的时候爸爸送的。”',hint:'(xe đạp)',ans:'自行车',exp:'自行车 = xe đạp; 谁的 + danh từ để hỏi đồ của ai.'},
  {pre:'Bạn giới thiệu món ở nhà hàng quen: “你吃不吃',blank:'羊肉',post:'？这个饭店的羊肉最好吃。”',hint:'(thịt dê, thịt cừu)',ans:'羊肉',exp:'吃不吃 + món = có ăn … không? (câu hỏi chính phản); 羊肉 = thịt dê/cừu.'},
  {pre:'“中午你想吃什么？” — “我有点儿累，我们去外面吃',blank:'面条',post:'吧。”',hint:'(mì sợi)',ans:'面条',exp:'吃面条 = ăn mì; 去外面吃 = ra ngoài ăn (không nấu ở nhà).'},
  {pre:'“你',blank:'姐姐',post:'多大了？” — “她二十五岁，已经工作了。”',hint:'(chị gái)',ans:'姐姐',exp:'你姐姐 = chị gái bạn (người thân thì bỏ 的); 多大 hỏi tuổi người lớn.'},
  {pre:'Trời nóng, bạn rủ bạn cùng lớp: “今天太热了，下午我们一起去',blank:'游泳',post:'吧！”',hint:'(bơi)',ans:'游泳',exp:'去游泳 = đi bơi; 游泳 là động từ, không cần thêm động từ khác.'},
];

// ══════════════════════════════════════════
// PHẦN 3b · SẮP XẾP — câu MỚI, dùng 怎么 / lượng từ lặp / 因为……所以…… / 经常
// ══════════════════════════════════════════
var sortData = [
  {words:['这些','衣服','件件','都','很','漂亮','。'],ans:'这些衣服件件都很漂亮。',audio:'这些衣服件件都很漂亮。'},
  {words:['因为','今天','是','我','的','生日','，','所以','姐姐','送给','我','一','块','手表','。'],ans:'因为今天是我的生日，所以姐姐送给我一块手表。',audio:'因为今天是我的生日，所以姐姐送给我一块手表。'},
  {words:['爸爸','天天','早上','都','去','跑步','。'],ans:'爸爸天天早上都去跑步。',audio:'爸爸天天早上都去跑步。',alt:['天天早上爸爸都去跑步。']},
  {words:['门外','的','自行车','是','谁','的','？'],ans:'门外的自行车是谁的？',audio:'门外的自行车是谁的？'},
  {words:['我','姐姐','最','喜欢','吃','妈妈','做','的','羊肉','面条','。'],ans:'我姐姐最喜欢吃妈妈做的羊肉面条。',audio:'我姐姐最喜欢吃妈妈做的羊肉面条。'},
  {words:['今天','你','姐姐','怎么','没','和','你','一起','来','？'],ans:'今天你姐姐怎么没和你一起来？',audio:'今天你姐姐怎么没和你一起来？',alt:['你姐姐今天怎么没和你一起来？']},
  {words:['星期天','我们','经常','在','学校','外面','打篮球','。'],ans:'星期天我们经常在学校外面打篮球。',audio:'星期天我们经常在学校外面打篮球。',alt:['我们星期天经常在学校外面打篮球。']},
  {words:['你','今天','怎么','没','喝','咖啡','？'],ans:'你今天怎么没喝咖啡？',audio:'你今天怎么没喝咖啡？',alt:['今天你怎么没喝咖啡？']},
];

// ══════════════════════════════════════════
// PHẦN 3c · SỬA LỖI SAI — lỗi học sinh Việt hay mắc
// (怎么/怎么样, 吗 với từ để hỏi, 所以 sau chủ ngữ, 没…了, 经常 cuối câu, 都 sai chỗ, "ngoài cửa" = 外门, 有 + tính từ, 已经 sai chỗ...)
// ══════════════════════════════════════════
var errorFixData = [
  {wrong:'你怎么样没吃羊肉？（ý: sao bạn không ăn）',
   opts:['你怎么没吃羊肉吗？','你怎么没吃羊肉？','你没吃羊肉怎么？','你怎么样不吃羊肉？'],ans:1,
   exp:'Hỏi lý do dùng 怎么 (怎么样 = thế nào); 怎么 đứng sau chủ ngữ, câu đã có 怎么 thì không thêm 吗.'},
  {wrong:'因为我生病了，我所以没去游泳。',
   opts:['因为我生病了，所以我没去游泳了。','所以我生病了，因为我没去游泳。','因为我生病了，因为我没去游泳。','因为我生病了，所以我没去游泳。'],ans:3,
   exp:'所以 đứng đầu vế sau, trước chủ ngữ; việc đã không làm dùng 没 + động từ, không thêm 了.'},
  {wrong:'我吃面条经常在外面。',
   opts:['我经常在外面吃面条。','我经常吃面条在外面。','我在外面吃面条经常。','我经常在外面吃了面条。'],ans:0,
   exp:'Trật tự: chủ ngữ + 经常 + 在 nơi chốn + động từ; thói quen không dùng 了.'},
  {wrong:'这个月姐姐每天天都去游泳。',
   opts:['这个月姐姐都天天去游泳。','这个月姐姐天天去游泳都。','这个月姐姐天天都去游泳。','这个月姐姐每天都天天去游泳。'],ans:2,
   exp:'天天 đã là “ngày nào cũng”, không thêm 每; 都 đứng sau 天天, ngay trước động từ.'},
  {wrong:'我的朋友都个个会说汉语。',
   opts:['我的朋友个个会都说汉语。','我的个个朋友都会说汉语。','我的朋友每个个都会说汉语。','我的朋友个个都会说汉语。'],ans:3,
   exp:'Danh từ + 个个 + 都 + động từ: 朋友个个都会…; 个个 không đứng trước danh từ, không thêm 每.'},
  {wrong:'我的自行车在外门。（ý: ở ngoài cửa）',
   opts:['我的自行车在门外。','我的自行车是外门。','我的自行车在门的外。','我的自行车有在门外。'],ans:0,
   exp:'“Ngoài cửa” = 门外 (vật mốc trước, 外 sau), không dịch từng chữ thành 外门; chỉ vị trí dùng 在.'},
  {wrong:'这个饭店的面条是好吃。',
   opts:['这个饭店的面条好吃很。','这个饭店的面条很好吃。','这个饭店面条的很好吃。','这个饭店的面条有好吃。'],ans:1,
   exp:'Trước tính từ dùng 很, không dùng 是 hay 有 (“có ngon”); 很 đứng trước tính từ.'},
  {wrong:'我儿子今年八岁，三十公斤已经了。',
   opts:['我儿子今年八岁，已经了三十公斤。','我儿子今年八岁，已经三十个公斤了。','我儿子今年八岁，已经三十公斤了。','我儿子今年八岁，是已经三十公斤了。'],ans:2,
   exp:'已经 + số lượng + 了: 已经三十公斤了; 公斤 là lượng từ nên không thêm 个.'},
];

// ══════════════════════════════════════════
// PHẦN 4 · LUYỆN NÓI 3 TẦNG (tầng 3 có ghi âm thật + chấm điểm AI)
// ══════════════════════════════════════════
// Luyen noi voi AI (mode 'ai-speak'): moi cau hoi la mot tinh huong doi song
// lien quan den bai khoa; hoc sinh tu ghi am cau tra loi, AI nghe lai (nhan
// dien giong noi tieng Trung) roi cham diem theo 4 tieu chi va nhan xet.
var speakingData = {
  mode: 'ai-speak',
  intro: 'Mỗi câu hỏi là một tình huống thật trong đời sống, dùng đúng từ vựng và mẫu câu của Bài 6. Bấm 🎙️ rồi trả lời bằng tiếng Trung — AI sẽ nghe, ghi lại câu bạn nói và chấm điểm theo Nội dung · Mẫu câu · Từ vựng · Độ trôi chảy. Nên tự trả lời trước rồi mới mở “Câu mẫu” để đối chiếu.',
  tasks: [
    {
      situation: 'Tối qua cả nhóm bạn ăn cơm cùng nhau mà bạn không đến; hôm nay một bạn hỏi lý do.',
      q_zh: '昨天晚上你怎么没来吃饭？',
      q_py: 'Zuótiān wǎnshang nǐ zěnme méi lái chī fàn?',
      q_vn: 'Tối qua sao bạn không đến ăn cơm?',
      grammar: { label: '因为…，所以…', any: ['因为', '所以'] },
      need: [
        { label: 'Dùng 因为 nêu lý do', any: ['因为'] },
        { label: 'Dùng 所以 nêu kết quả', any: ['所以'] },
        { label: 'Nói việc đã không làm (没来 / 没去 / 不能来)', any: ['没', '不能', '不'] }
      ],
      bonus: { label: 'Nói thêm bạn đã ở đâu / làm gì (在医院 / 在家 / 工作)', any: ['在', '医院', '家', '工作', '学习', '考试', '生病'] },
      vocab: ['因为', '所以', '姐姐'],
      minLen: 12,
      sample: '因为昨天晚上我姐姐生病了，所以我在医院，没来吃饭。对不起！',
      sample_py: 'Yīnwèi zuótiān wǎnshang wǒ jiějie shēngbìng le, suǒyǐ wǒ zài yīyuàn, méi lái chī fàn. Duìbuqǐ!',
      sample_vn: 'Vì tối qua chị gái tôi bị ốm nên tôi ở bệnh viện, không đến ăn cơm được. Xin lỗi nhé!',
      tip: 'Tiếng Trung thường dùng đủ cặp 因为…，所以…; 所以 đứng đầu vế sau, trước chủ ngữ.'
    },
    {
      situation: 'Bạn ăn cơm ở nhà một người bạn Trung Quốc; chủ nhà thấy bạn ngừng đũa và hỏi.',
      q_zh: '菜不好吃吗？你怎么不吃了？',
      q_py: 'Cài bù hǎochī ma? Nǐ zěnme bù chī le?',
      q_vn: 'Món ăn không ngon à? Sao bạn không ăn nữa?',
      grammar: { label: 'Khen món ăn + 因为…所以…', any: ['因为', '所以', '好吃'] },
      need: [
        { label: 'Khen món ăn (很好吃 / 非常好吃)', any: ['好吃', '不错'] },
        { label: 'Nêu lý do không ăn nữa', any: ['因为', '已经', '吃了', '不想', '太多', '很多'] },
        { label: 'Nói món đã ăn (面条 / 羊肉 / 米饭…)', any: ['面条', '羊肉', '米饭', '菜', '鱼', '水果', '东西'] }
      ],
      bonus: { label: 'Cảm ơn chủ nhà (谢谢)', any: ['谢谢', '太好吃'] },
      vocab: ['好吃', '面条', '羊肉'],
      minLen: 12,
      sample: '菜非常好吃！因为中午我吃了很多面条，所以现在不想吃了。谢谢你！',
      sample_py: 'Cài fēicháng hǎochī! Yīnwèi zhōngwǔ wǒ chī le hěn duō miàntiáo, suǒyǐ xiànzài bù xiǎng chī le. Xièxie nǐ!',
      sample_vn: 'Đồ ăn rất ngon! Vì trưa nay tôi ăn nhiều mì quá nên bây giờ không muốn ăn nữa. Cảm ơn bạn!',
      tip: '怎么不…了？ = sao không … nữa? Khi từ chối khéo, khen món ăn trước rồi mới nêu lý do.'
    },
    {
      situation: 'Bạn cùng phòng hỏi về thói quen thể thao của bạn.',
      q_zh: '你经常运动吗？你经常做什么运动？',
      q_py: 'Nǐ jīngcháng yùndòng ma? Nǐ jīngcháng zuò shénme yùndòng?',
      q_vn: 'Bạn có thường vận động không? Bạn hay tập môn gì?',
      grammar: { label: '我经常 / 天天 + động từ', any: ['经常', '天天', '每天', '每个星期'] },
      need: [
        { label: 'Nói tần suất (经常 / 天天 / 每个星期…)', any: ['经常', '天天', '每天', '每个', '不经常', '很少'] },
        { label: 'Nói môn thể thao', any: ['游泳', '打篮球', '跑步', '踢足球', '运动', '打球'] },
        { label: 'Nói thêm cảm nhận / kết quả', any: ['身体', '觉得', '公斤', '高兴', '累', '好'] }
      ],
      bonus: { label: 'Nói cân nặng (公斤)', any: ['公斤'] },
      vocab: ['经常', '游泳', '打篮球', '公斤'],
      minLen: 12,
      sample: '我经常游泳，一个星期去四五天。游泳以后我觉得身体很好，现在我六十公斤。',
      sample_py: 'Wǒ jīngcháng yóuyǒng, yí ge xīngqī qù sì-wǔ tiān. Yóuyǒng yǐhòu wǒ juéde shēntǐ hěn hǎo, xiànzài wǒ liùshí gōngjīn.',
      sample_vn: 'Tôi thường xuyên bơi, một tuần đi bốn năm ngày. Bơi xong tôi thấy cơ thể rất khỏe, bây giờ tôi 60 ký.',
      tip: '经常 đứng TRƯỚC động từ: 我经常游泳 — không nói 我游泳经常.'
    },
    {
      situation: 'Bạn về đến nhà, chưa vào đã biết chị gái về rồi; mẹ hỏi sao bạn biết.',
      q_zh: '你怎么知道姐姐已经回家了？',
      q_py: 'Nǐ zěnme zhīdào jiějie yǐjīng huí jiā le?',
      q_vn: 'Sao con biết chị đã về nhà rồi?',
      grammar: { label: '因为…，所以我知道…', any: ['因为', '所以', '看见'] },
      need: [
        { label: 'Nói dấu hiệu (自行车 / 车 / 衣服…)', any: ['自行车', '车', '衣服', '东西', '书', '杯子', '电脑'] },
        { label: 'Nói vị trí (门外 / 在…里 / 在…上)', any: ['门外', '外', '里', '旁边', '上', '前面', '下面'] },
        { label: 'Dùng 已经…了', any: ['已经'] }
      ],
      bonus: { label: 'Dùng 看见', any: ['看见'] },
      vocab: ['门', '外', '自行车'],
      minLen: 12,
      sample: '因为门外有她的自行车，所以我知道她已经回来了。',
      sample_py: 'Yīnwèi mén wài yǒu tā de zìxíngchē, suǒyǐ wǒ zhīdào tā yǐjīng huílai le.',
      sample_vn: 'Vì ngoài cửa có xe đạp của chị ấy nên con biết chị ấy về rồi.',
      tip: '“Ngoài cửa” là 门外 (vật mốc đứng trước); 怎么知道 hỏi “sao biết / làm sao biết”.'
    },
    {
      situation: 'Một người bạn mới hỏi về anh chị em trong nhà bạn.',
      q_zh: '你有姐姐吗？她经常做什么？',
      q_py: 'Nǐ yǒu jiějie ma? Tā jīngcháng zuò shénme?',
      q_vn: 'Bạn có chị gái không? Chị ấy hay làm gì? (Không có thì kể về một người thân khác.)',
      grammar: { label: '她经常 + động từ', any: ['经常', '天天', '每天', '每个星期'] },
      need: [
        { label: 'Giới thiệu người thân', any: ['姐姐', '爸爸', '妈妈', '儿子', '女儿', '朋友', '哥哥', '妹妹', '弟弟'] },
        { label: 'Nói tuổi hoặc công việc', any: ['岁', '工作', '医生', '老师', '学生', '医院', '学校'] },
        { label: 'Nói việc người đó hay làm', any: ['游泳', '打篮球', '跑步', '看', '做', '买', '吃', '喝', '去', '运动', '学习'] }
      ],
      bonus: { label: 'Nói thêm lý do (因为…所以…)', any: ['因为', '所以'] },
      vocab: ['姐姐', '经常', '打篮球'],
      minLen: 12,
      sample: '我有一个姐姐，她今年二十六岁，是一个医生。她很喜欢运动，经常去打篮球。',
      sample_py: 'Wǒ yǒu yí ge jiějie, tā jīnnián èrshíliù suì, shì yí ge yīshēng. Tā hěn xǐhuan yùndòng, jīngcháng qù dǎ lánqiú.',
      sample_vn: 'Tôi có một chị gái, năm nay 26 tuổi, là bác sĩ. Chị ấy rất thích vận động, thường xuyên đi chơi bóng rổ.',
      tip: 'Tần suất (经常 / 天天) đặt sau chủ ngữ, trước động từ: 她经常去打篮球.'
    }
  ]
};

// ══════════════════════════════════════════
// LUYỆN DỊCH — câu mới, dùng từ bài 6 + ôn bài 1–5 và HSK1
// ══════════════════════════════════════════
var translateData = [
  {vi:'Mấy hôm nay sao bạn không đi chạy bộ?', zh:'你这两天怎么没去跑步？', py:'Nǐ zhè liǎng tiān zěnme méi qù pǎobù?'},
  {vi:'Vì thời tiết nóng quá nên ngày nào chúng tôi cũng đi bơi.', zh:'因为天气太热了，所以我们天天去游泳。', py:'Yīnwèi tiānqì tài rè le, suǒyǐ wǒmen tiāntiān qù yóuyǒng.'},
  {vi:'Những quyển sách này quyển nào tôi cũng đọc rồi.', zh:'这些书我本本都看了。', py:'Zhèxiē shū wǒ běnběn dōu kàn le.'},
  {vi:'Chị gái tôi thường xuyên chạy bộ, bây giờ chị ấy nặng 50 cân rồi.', zh:'我姐姐经常跑步，现在她五十公斤了。', py:'Wǒ jiějie jīngcháng pǎobù, xiànzài tā wǔshí gōngjīn le.'},
];

// ══════════════════════════════════════════
// LUYỆN DỊCH (chiều Trung→Việt) — noi dung KHAC voi chieu Viet->Trung o tren
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:'Hôm nay trời mưa, sao bạn không lái xe đến?', zh:'今天下雨，你怎么没开车来？', py:'Jīntiān xià yǔ, nǐ zěnme méi kāi chē lái?'},
  {vi:'Vì tôi thường xuyên uống sữa nên sức khỏe rất tốt.', zh:'因为我经常喝牛奶，所以身体非常好。', py:'Yīnwèi wǒ jīngcháng hē niúnǎi, suǒyǐ shēntǐ fēicháng hǎo.'},
  {vi:'Nhà tôi ai cũng biết bơi.', zh:'我家人人都会游泳。', py:'Wǒ jiā rénrén dōu huì yóuyǒng.'},
];
