// ══════════════════════════════════════════
// DATA — Bài 13: 门开着呢
// ══════════════════════════════════════════
var vocabData = [
  {
    "n": 1,
    "zh": "着",
    "py": "zhe",
    "pos": "Trợ từ động thái",
    "vn": "đang, duy trì trạng thái",
    "hv": "trứ",
    "em": "🔄",
    "lesson": 1,
    "ex_zh": "门开着呢。",
    "ex_py": "Mén kāizhe ne.",
    "ex_vn": "Cửa đang mở đấy.",
    "exList": [
      {
        "zh": "门开着呢。",
        "py": "Mén kāizhe ne.",
        "vn": "Cửa đang mở đấy."
      },
      {
        "zh": "她手里拿着一本书。",
        "py": "Tā shǒu lǐ názhe yì běn shū.",
        "vn": "Cô ấy tay đang cầm một quyển sách."
      },
      {
        "zh": "他坐着看电视。",
        "py": "Tā zuòzhe kàn diànshì.",
        "vn": "Anh ấy ngồi xem tivi."
      }
    ],
    "hanzi": [
      {
        "c": "着",
        "p": "zhe / zháo / zhuó",
        "type": "上下结构 · Trên-dưới",
        "st": 11,
        "ord": "羊(biến thể) → 目",
        "rad": "目 (mục – mắt)",
        "mean": "đang, duy trì trạng thái",
        "tip": "Đọc nhẹ \"zhe\" khi đứng sau động từ, biểu thị hành động/trạng thái đang được DUY TRÌ.",
        "cf": "差 (chà – \"kém, thiếu\")",
        "w": "开着 / 拿着 / 看着"
      }
    ],
    "colloFull": [
      {
        "zh": "拿着",
        "py": "ná zhe",
        "vn": "đang cầm"
      },
      {
        "zh": "开着",
        "py": "kāi zhe",
        "vn": "đang mở"
      },
      {
        "zh": "坐着看",
        "py": "zuò zhe kàn",
        "vn": "ngồi xem"
      },
      {
        "zh": "穿着白衣服",
        "py": "chuān zhe bái yīfu",
        "vn": "đang mặc áo trắng"
      }
    ],
    "patterns": [
      {
        "s": "động từ + 着",
        "m": "Trạng thái đang duy trì: 门开着"
      },
      {
        "s": "着 (trạng thái kéo dài) ≠ 正在 (việc đang diễn ra)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Cửa đang mở, bạn vào đi.",
        "answer": "门开着呢，你进来吧。",
        "answerPy": "Mén kāizhe ne, nǐ jìnlái ba.",
        "note": "着 nói trạng thái đang duy trì.",
        "pair": "V + 着 + 呢"
      },
      {
        "promptLang": "vi",
        "prompt": "Anh ấy vừa ngồi vừa xem tivi.",
        "answer": "他坐着看电视。",
        "answerPy": "Tā zuòzhe kàn diànshì.",
        "note": "Động từ trước mang 着 là tư thế.",
        "pair": "V着 + V"
      }
    ]
  },
  {
    "n": 2,
    "zh": "手",
    "py": "shǒu",
    "pos": "Danh từ",
    "vn": "tay, bàn tay",
    "hv": "thủ",
    "em": "✋",
    "lesson": 2,
    "ex_zh": "手里拿着铅笔。",
    "ex_py": "Shǒu lǐ názhe qiānbǐ.",
    "ex_vn": "Tay cầm bút chì.",
    "exList": [
      {
        "zh": "手里拿着铅笔。",
        "py": "Shǒu lǐ názhe qiānbǐ.",
        "vn": "Tay cầm bút chì."
      },
      {
        "zh": "请举手。",
        "py": "Qǐng jǔ shǒu.",
        "vn": "Xin hãy giơ tay."
      },
      {
        "zh": "吃饭以前要洗手。",
        "py": "Chīfàn yǐqián yào xǐ shǒu.",
        "vn": "Trước khi ăn cơm phải rửa tay."
      }
    ],
    "hanzi": [
      {
        "c": "手",
        "p": "shǒu",
        "type": "独体字 · Tượng hình",
        "st": 4,
        "ord": "丿→一→𠃌→丿",
        "rad": "手 (thủ – tự thành bộ)",
        "mean": "tay",
        "tip": "Hình bàn tay xoè năm ngón cách điệu → \"TAY\". Đã gặp trong 手机 (Bài 10).",
        "cf": "毛 (máo – \"lông\")",
        "w": "手里 / 手机 / 洗手"
      }
    ],
    "colloFull": [
      {
        "zh": "洗手",
        "py": "xǐ shǒu",
        "vn": "rửa tay"
      },
      {
        "zh": "手里",
        "py": "shǒu li",
        "vn": "trong tay"
      },
      {
        "zh": "手里拿着",
        "py": "shǒu li ná zhe",
        "vn": "trong tay cầm"
      },
      {
        "zh": "两只手",
        "py": "liǎng zhī shǒu",
        "vn": "hai bàn tay"
      }
    ],
    "patterns": [
      {
        "s": "手 + 里",
        "m": "Trong tay: 手里拿着铅笔"
      },
      {
        "s": "手 là chữ tượng hình — vẽ bàn tay năm ngón"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Trong tay em trai tôi đang cầm một cây bút chì.",
        "answer": "我弟弟手里拿着一支铅笔。",
        "answerPy": "Wǒ dìdi shǒu li názhe yì zhī qiānbǐ.",
        "note": "Lượng từ của 铅笔 là 支.",
        "pair": "手里拿着……"
      },
      {
        "promptLang": "vi",
        "prompt": "Trước khi ăn cơm phải rửa tay.",
        "answer": "吃饭以前要洗手。",
        "answerPy": "Chīfàn yǐqián yào xǐ shǒu.",
        "note": "以前 đứng SAU việc, giống 以后.",
        "pair": "……以前"
      }
    ]
  },
  {
    "n": 3,
    "zh": "拿",
    "py": "ná",
    "pos": "Động từ",
    "vn": "cầm, nắm, xách",
    "hv": "nã",
    "em": "🤲",
    "lesson": 2,
    "ex_zh": "那个手里拿着铅笔的呢？",
    "ex_py": "Nàge shǒu lǐ názhe qiānbǐ de ne?",
    "ex_vn": "Thế còn người tay cầm bút chì đằng kia thì sao?",
    "exList": [
      {
        "zh": "那个手里拿着铅笔的呢？",
        "py": "Nàge shǒu lǐ názhe qiānbǐ de ne?",
        "vn": "Thế còn người tay cầm bút chì đằng kia thì sao?"
      },
      {
        "zh": "请帮我拿一下这本书。",
        "py": "Qǐng bāng wǒ ná yíxià zhè běn shū.",
        "vn": "Làm ơn cầm giúp tôi quyển sách này."
      },
      {
        "zh": "他手里拿着手机。",
        "py": "Tā shǒu lǐ názhe shǒujī.",
        "vn": "Anh ấy tay đang cầm điện thoại."
      }
    ],
    "hanzi": [
      {
        "c": "拿",
        "p": "ná",
        "type": "上下结构 · Trên-dưới",
        "st": 10,
        "ord": "合 (hợp) → 手 (thủ)",
        "rad": "手 (thủ – tay)",
        "mean": "cầm, nắm",
        "tip": "合 (khép lại) + 手 (tay) → khép bàn tay lại để CẦM, NẮM đồ vật.",
        "cf": "合 (hé – \"hợp\", thiếu bộ 手\")",
        "w": "拿着 / 拿书 / 拿走"
      }
    ],
    "colloFull": [
      {
        "zh": "拿书",
        "py": "ná shū",
        "vn": "cầm sách"
      },
      {
        "zh": "拿着铅笔",
        "py": "ná zhe qiānbǐ",
        "vn": "cầm bút chì"
      },
      {
        "zh": "帮我拿",
        "py": "bāng wǒ ná",
        "vn": "cầm giúp tôi"
      },
      {
        "zh": "拿一下",
        "py": "ná yíxià",
        "vn": "cầm một chút"
      }
    ],
    "patterns": [
      {
        "s": "拿 + 着 + đồ vật",
        "m": "Đang cầm cái gì: 手里拿着书"
      },
      {
        "s": "拿 có bộ 手 ở dưới — cầm bằng tay"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Bạn cầm giúp tôi cái điện thoại này một chút.",
        "answer": "你帮我拿一下这个手机。",
        "answerPy": "Nǐ bāng wǒ ná yíxià zhège shǒujī.",
        "note": "拿 có bộ 手 — cầm bằng tay.",
        "pair": "帮 + người + V"
      },
      {
        "promptLang": "vi",
        "prompt": "Người con gái đang cầm bút chì kia là bạn cùng lớp tôi.",
        "answer": "那个手里拿着铅笔的女孩子是我同班同学。",
        "answerPy": "Nàge shǒu li názhe qiānbǐ de nǚ háizi shì wǒ tóngbān tóngxué.",
        "note": "Cả cụm dài làm định ngữ, kết thúc bằng 的.",
        "pair": "……的 + N"
      }
    ]
  },
  {
    "n": 4,
    "zh": "铅笔",
    "py": "qiānbǐ",
    "pos": "Danh từ",
    "vn": "bút chì",
    "hv": "duyên bút",
    "em": "✏️",
    "lesson": 2,
    "ex_zh": "手里拿着铅笔。",
    "ex_py": "Shǒu lǐ názhe qiānbǐ.",
    "ex_vn": "Tay đang cầm bút chì.",
    "exList": [
      {
        "zh": "手里拿着铅笔。",
        "py": "Shǒu lǐ názhe qiānbǐ.",
        "vn": "Tay đang cầm bút chì."
      },
      {
        "zh": "请给我一支铅笔。",
        "py": "Qǐng gěi wǒ yì zhī qiānbǐ.",
        "vn": "Xin cho tôi một cây bút chì."
      },
      {
        "zh": "这支铅笔是我的。",
        "py": "Zhè zhī qiānbǐ shì wǒ de.",
        "vn": "Cây bút chì này là của tôi."
      }
    ],
    "hanzi": [
      {
        "c": "铅",
        "p": "qiān",
        "type": "左右结构 · Trái-phải",
        "st": 10,
        "ord": "钅(kim) trái → 几+口 phải",
        "rad": "钅(kim – kim loại)",
        "mean": "chì",
        "tip": "Bộ 钅(kim loại) → ruột bút làm từ chất liệu như kim loại chì.",
        "cf": "船 (chuán – \"thuyền\")",
        "w": "铅笔 / 铅笔盒"
      },
      {
        "c": "笔",
        "p": "bǐ",
        "type": "上下结构 · Trên-dưới",
        "st": 10,
        "ord": "⺮(trúc) → 毛 (mao)",
        "rad": "⺮(trúc – tre)",
        "mean": "bút",
        "tip": "Bộ 竹 (tre, thân bút) + 毛 (lông, đầu bút lông) → cây BÚT truyền thống.",
        "cf": "毛 (máo – \"lông\")",
        "w": "铅笔 / 毛笔 / 用笔"
      }
    ],
    "colloFull": [
      {
        "zh": "一支铅笔",
        "py": "yì zhī qiānbǐ",
        "vn": "một cây bút chì"
      },
      {
        "zh": "用铅笔写",
        "py": "yòng qiānbǐ xiě",
        "vn": "viết bằng bút chì"
      },
      {
        "zh": "拿着铅笔",
        "py": "ná zhe qiānbǐ",
        "vn": "cầm bút chì"
      },
      {
        "zh": "我的铅笔",
        "py": "wǒ de qiānbǐ",
        "vn": "bút chì của tôi"
      }
    ],
    "patterns": [
      {
        "s": "một + 支 + 铅笔",
        "m": "Lượng từ của 铅笔 là 支"
      },
      {
        "s": "铅 + 笔",
        "m": "Cây bút (笔) có ruột chì (铅)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Cho tôi xin một cây bút chì.",
        "answer": "请给我一支铅笔。",
        "answerPy": "Qǐng gěi wǒ yì zhī qiānbǐ.",
        "note": "给 + người + đồ vật.",
        "pair": "请 + V"
      },
      {
        "promptLang": "vi",
        "prompt": "Cây bút chì này rẻ hơn cây kia.",
        "answer": "这支铅笔比那支便宜。",
        "answerPy": "Zhè zhī qiānbǐ bǐ nà zhī piányi.",
        "note": "Sau 比 KHÔNG dùng 很.",
        "pair": "A 比 B + Adj"
      }
    ]
  },
  {
    "n": 5,
    "zh": "班",
    "py": "bān",
    "pos": "Danh từ",
    "vn": "lớp học, lớp",
    "hv": "ban",
    "em": "🏫",
    "lesson": 3,
    "ex_zh": "就是我们班那个女孩。",
    "ex_py": "Jiùshì wǒmen bān nàge nǚhái.",
    "ex_vn": "Chính là cô gái ở lớp chúng mình.",
    "exList": [
      {
        "zh": "就是我们班那个女孩。",
        "py": "Jiùshì wǒmen bān nàge nǚhái.",
        "vn": "Chính là cô gái ở lớp chúng mình."
      },
      {
        "zh": "我们班有二十个学生。",
        "py": "Wǒmen bān yǒu èrshí ge xuésheng.",
        "vn": "Lớp chúng tôi có 20 học sinh."
      },
      {
        "zh": "他是我的同班同学。",
        "py": "Tā shì wǒ de tóngbān tóngxué.",
        "vn": "Anh ấy là bạn cùng lớp với tôi."
      }
    ],
    "hanzi": [
      {
        "c": "班",
        "p": "bān",
        "type": "左右结构 · Trái-phải",
        "st": 10,
        "ord": "王 (vương) trái → 刂 (đao) giữa → 王 phải",
        "rad": "王 (vương – ngọc)",
        "mean": "lớp, nhóm, ca",
        "tip": "Đã học ở Bài 9 (上班) — hai miếng ngọc bị dao tách ra thành từng NHÓM/LỚP.",
        "cf": "斑 (bān – \"vết đốm\")",
        "w": "我们班 / 上班 / 班长"
      }
    ],
    "colloFull": [
      {
        "zh": "我们班",
        "py": "wǒmen bān",
        "vn": "lớp chúng tôi"
      },
      {
        "zh": "一个班",
        "py": "yí gè bān",
        "vn": "một lớp"
      },
      {
        "zh": "班里",
        "py": "bān li",
        "vn": "trong lớp"
      },
      {
        "zh": "同班同学",
        "py": "tóng bān tóngxué",
        "vn": "bạn cùng lớp"
      }
    ],
    "patterns": [
      {
        "s": "ai + 班",
        "m": "Lớp của ai: 我们班"
      },
      {
        "s": "班 (tập thể lớp) ≠ 教室 (căn phòng học)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Lớp chúng tôi có hai mươi học sinh.",
        "answer": "我们班有二十个学生。",
        "answerPy": "Wǒmen bān yǒu èrshí ge xuésheng.",
        "note": "班 là tập thể lớp, 教室 là căn phòng.",
        "pair": "有 + số + M + N"
      },
      {
        "promptLang": "vi",
        "prompt": "Anh ấy là bạn cùng lớp của tôi, anh ấy họ Vương.",
        "answer": "他是我的同班同学，他姓王。",
        "answerPy": "Tā shì wǒ de tóngbān tóngxué, tā xìng Wáng.",
        "note": "姓 là động từ, không thêm 是.",
        "pair": "Sub + 姓 + họ"
      }
    ]
  },
  {
    "n": 6,
    "zh": "长",
    "py": "zhǎng",
    "pos": "Động từ",
    "vn": "mọc, sinh trưởng, lớn",
    "hv": "trưởng",
    "em": "👁️",
    "lesson": 3,
    "ex_zh": "长着两个大眼睛。",
    "ex_py": "Zhǎngzhe liǎng ge dà yǎnjing.",
    "ex_vn": "Có đôi mắt to (mọc hai con mắt to).",
    "exList": [
      {
        "zh": "长着两个大眼睛。",
        "py": "Zhǎngzhe liǎng ge dà yǎnjing.",
        "vn": "Có đôi mắt to."
      },
      {
        "zh": "孩子长得很快。",
        "py": "Háizi zhǎng de hěn kuài.",
        "vn": "Đứa trẻ lớn rất nhanh."
      },
      {
        "zh": "树上长了很多叶子。",
        "py": "Shù shang zhǎngle hěn duō yèzi.",
        "vn": "Trên cây mọc rất nhiều lá."
      }
    ],
    "hanzi": [
      {
        "c": "长",
        "p": "zhǎng / cháng",
        "type": "独体字 · Tượng hình",
        "st": 4,
        "ord": "丿→𠃌→一→乚",
        "rad": "长 (trường – tự thành bộ)",
        "mean": "mọc, lớn lên (zhǎng); dài (cháng)",
        "tip": "Đã học ở Bài 4 với âm \"cháng\" (dài); cùng chữ này đọc \"zhǎng\" khi nghĩa MỌC, LỚN LÊN, trưởng thành.",
        "cf": "常 (cháng – \"thường xuyên\")",
        "w": "长着 / 长大 / 校长"
      }
    ],
    "colloFull": [
      {
        "zh": "长得很高",
        "py": "zhǎng de hěn gāo",
        "vn": "người cao"
      },
      {
        "zh": "长着大眼睛",
        "py": "zhǎng zhe dà yǎnjing",
        "vn": "có đôi mắt to"
      },
      {
        "zh": "长大",
        "py": "zhǎng dà",
        "vn": "lớn lên"
      },
      {
        "zh": "长得很快",
        "py": "zhǎng de hěn kuài",
        "vn": "lớn rất nhanh"
      }
    ],
    "patterns": [
      {
        "s": "长 + 得 + tính từ",
        "m": "Trông như thế nào: 她长得很漂亮"
      },
      {
        "s": "长 zhǎng (lớn lên) ≠ 长 cháng (dài) — một chữ, hai âm"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Cô ấy có đôi mắt to, rất hay cười.",
        "answer": "她长着两个大眼睛，非常爱笑。",
        "answerPy": "Tā zhǎngzhe liǎng ge dà yǎnjing, fēicháng ài xiào.",
        "note": "长 zhǎng ở đây là \"trông có, mọc ra\".",
        "pair": "长着……"
      },
      {
        "promptLang": "vi",
        "prompt": "Con của anh trai tôi lớn rất nhanh.",
        "answer": "我哥哥的孩子长得很快。",
        "answerPy": "Wǒ gēge de háizi zhǎng de hěn kuài.",
        "note": "Sau 得 vẫn phải có 很.",
        "pair": "V + 得 + Adj"
      }
    ]
  },
  {
    "n": 7,
    "zh": "笑",
    "py": "xiào",
    "pos": "Động từ / Tính từ",
    "vn": "cười",
    "hv": "tiếu",
    "em": "😄",
    "lesson": 3,
    "ex_zh": "非常爱笑的女孩。",
    "ex_py": "Fēicháng ài xiào de nǚhái.",
    "ex_vn": "Cô gái rất hay cười.",
    "exList": [
      {
        "zh": "非常爱笑的女孩。",
        "py": "Fēicháng ài xiào de nǚhái.",
        "vn": "Cô gái rất hay cười."
      },
      {
        "zh": "他笑了。",
        "py": "Tā xiào le.",
        "vn": "Anh ấy đã cười."
      },
      {
        "zh": "别笑我。",
        "py": "Bié xiào wǒ.",
        "vn": "Đừng cười tôi."
      }
    ],
    "hanzi": [
      {
        "c": "笑",
        "p": "xiào",
        "type": "上下结构 · Trên-dưới",
        "st": 10,
        "ord": "⺮(trúc) → 夭 (yêu)",
        "rad": "⺮(trúc – tre)",
        "mean": "cười",
        "tip": "Tre 竹 nghiêng ngả trong gió như dáng người CƯỜI nghiêng ngả.",
        "cf": "笔 (bǐ – \"bút\")",
        "w": "笑了 / 爱笑 / 微笑"
      }
    ],
    "colloFull": [
      {
        "zh": "爱笑",
        "py": "ài xiào",
        "vn": "hay cười"
      },
      {
        "zh": "笑了",
        "py": "xiào le",
        "vn": "cười rồi"
      },
      {
        "zh": "笑着说",
        "py": "xiào zhe shuō",
        "vn": "vừa cười vừa nói"
      },
      {
        "zh": "笑得很快乐",
        "py": "xiào de hěn kuàilè",
        "vn": "cười rất vui"
      }
    ],
    "patterns": [
      {
        "s": "笑 + 着 + động từ",
        "m": "Vừa cười vừa làm gì: 笑着说"
      },
      {
        "s": "爱笑 — hay cười, là nét tính cách"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Cô ấy vừa cười vừa nói: Chào mừng bạn đến!",
        "answer": "她笑着说：欢迎你来！",
        "answerPy": "Tā xiàozhe shuō: Huānyíng nǐ lái!",
        "note": "笑着说 — vừa cười vừa nói.",
        "pair": "V着 + V"
      },
      {
        "promptLang": "vi",
        "prompt": "Bọn trẻ cười rất vui.",
        "answer": "孩子们笑得很快乐。",
        "answerPy": "Háizimen xiào de hěn kuàilè.",
        "note": "得 nối động từ với mức độ.",
        "pair": "V + 得 + Adj"
      }
    ]
  },
  {
    "n": 8,
    "zh": "宾馆",
    "py": "bīnguǎn",
    "pos": "Danh từ",
    "vn": "khách sạn, nhà khách",
    "hv": "tân quán",
    "em": "🏨",
    "lesson": 4,
    "ex_zh": "这离新宾馆远吗？",
    "ex_py": "Zhè lí xīn bīnguǎn yuǎn ma?",
    "ex_vn": "Ở đây cách khách sạn mới có xa không?",
    "exList": [
      {
        "zh": "这离新宾馆远吗？",
        "py": "Zhè lí xīn bīnguǎn yuǎn ma?",
        "vn": "Ở đây cách khách sạn mới có xa không?"
      },
      {
        "zh": "我们住在这家宾馆。",
        "py": "Wǒmen zhù zài zhè jiā bīnguǎn.",
        "vn": "Chúng tôi ở khách sạn này."
      },
      {
        "zh": "这个宾馆很不错。",
        "py": "Zhège bīnguǎn hěn búcuò.",
        "vn": "Khách sạn này khá tốt."
      }
    ],
    "hanzi": [
      {
        "c": "宾",
        "p": "bīn",
        "type": "上下结构 · Trên-dưới",
        "st": 9,
        "ord": "宀 (miên) → 兵 (biến thể)",
        "rad": "宀 (miên – mái nhà)",
        "mean": "khách",
        "tip": "Mái nhà 宀 đón tiếp người từ xa đến → KHÁCH.",
        "cf": "宝 (bǎo – \"báu vật\")",
        "w": "宾馆 / 来宾"
      },
      {
        "c": "馆",
        "p": "guǎn",
        "type": "左右结构 · Trái-phải",
        "st": 11,
        "ord": "饣(thực) trái → 官 (quan) phải",
        "rad": "饣(thực – ăn)",
        "mean": "quán, nơi tiếp đón",
        "tip": "Bộ 饣(ăn uống) → nơi cung cấp ăn ở cho khách = QUÁN, KHÁCH SẠN.",
        "cf": "管 (guǎn – \"quản lý\", bộ 竹\")",
        "w": "宾馆 / 图书馆 / 饭馆"
      }
    ],
    "colloFull": [
      {
        "zh": "住宾馆",
        "py": "zhù bīnguǎn",
        "vn": "ở khách sạn"
      },
      {
        "zh": "一个宾馆",
        "py": "yí gè bīnguǎn",
        "vn": "một khách sạn"
      },
      {
        "zh": "宾馆的服务员",
        "py": "bīnguǎn de fúwùyuán",
        "vn": "nhân viên khách sạn"
      },
      {
        "zh": "到宾馆",
        "py": "dào bīnguǎn",
        "vn": "đến khách sạn"
      }
    ],
    "patterns": [
      {
        "s": "住 + 宾馆",
        "m": "Ở khách sạn"
      },
      {
        "s": "宾 + 馆",
        "m": "Toà nhà (馆) đón khách (宾)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Khách sạn này cách sân bay rất gần.",
        "answer": "这个宾馆离机场很近。",
        "answerPy": "Zhège bīnguǎn lí jīchǎng hěn jìn.",
        "note": "离 nói khoảng cách giữa hai nơi.",
        "pair": "A 离 B 很近"
      },
      {
        "promptLang": "vi",
        "prompt": "Chị tôi ở khách sạn bên phải trường học.",
        "answer": "我姐姐住学校右边的宾馆。",
        "answerPy": "Wǒ jiějie zhù xuéxiào yòubian de bīnguǎn.",
        "note": "右边的 + danh từ — cái ở bên phải.",
        "pair": "住 + nơi chốn"
      }
    ]
  },
  {
    "n": 9,
    "zh": "一直",
    "py": "yīzhí",
    "pos": "Phó từ",
    "vn": "đi thẳng, luôn luôn",
    "hv": "nhất trực",
    "em": "➡️",
    "lesson": 4,
    "ex_zh": "从这一直往前走。",
    "ex_py": "Cóng zhè yìzhí wǎng qián zǒu.",
    "ex_vn": "Từ đây đi thẳng về phía trước.",
    "exList": [
      {
        "zh": "从这一直往前走。",
        "py": "Cóng zhè yìzhí wǎng qián zǒu.",
        "vn": "Từ đây đi thẳng về phía trước."
      },
      {
        "zh": "他一直在等你。",
        "py": "Tā yìzhí zài děng nǐ.",
        "vn": "Anh ấy vẫn luôn đợi bạn."
      },
      {
        "zh": "我一直很喜欢跳舞。",
        "py": "Wǒ yìzhí hěn xǐhuan tiàowǔ.",
        "vn": "Tôi luôn luôn thích múa."
      }
    ],
    "hanzi": [
      {
        "c": "一",
        "p": "yī",
        "type": "独体字 · Chữ đơn",
        "st": 1,
        "ord": "一",
        "rad": "一 (nhất)",
        "mean": "một",
        "tip": "Chữ đơn giản nhất, một nét ngang.",
        "cf": "二 (èr)",
        "w": "一直 / 一下 / 一起"
      },
      {
        "c": "直",
        "p": "zhí",
        "type": "独体字 · Chữ đơn",
        "st": 8,
        "ord": "十→目→一",
        "rad": "目 (mục – mắt)",
        "mean": "thẳng",
        "tip": "Mắt 目 nhìn theo một đường thẳng không lệch → THẲNG.",
        "cf": "真 (zhēn – \"thật\")",
        "w": "一直 / 直走 / 直接"
      }
    ],
    "colloFull": [
      {
        "zh": "一直走",
        "py": "yīzhí zǒu",
        "vn": "đi thẳng"
      },
      {
        "zh": "一直等",
        "py": "yīzhí děng",
        "vn": "chờ mãi"
      },
      {
        "zh": "一直在家",
        "py": "yīzhí zài jiā",
        "vn": "luôn ở nhà"
      },
      {
        "zh": "一直往前",
        "py": "yīzhí wǎng qián",
        "vn": "thẳng về phía trước"
      }
    ],
    "patterns": [
      {
        "s": "一直 + động từ",
        "m": "Đi thẳng, làm mãi: 一直走"
      },
      {
        "s": "一直 vừa nói HƯỚNG (đi thẳng), vừa nói THỜI GIAN (suốt)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Bạn đi thẳng, đến ngã tư thứ nhất là thấy bệnh viện.",
        "answer": "你一直走，到第一个路口就是医院。",
        "answerPy": "Nǐ yìzhí zǒu, dào dì-yī ge lùkǒu jiù shì yīyuàn.",
        "note": "一直走 — đi thẳng, không rẽ.",
        "pair": "……就是……"
      },
      {
        "promptLang": "vi",
        "prompt": "Tôi đợi bạn suốt ở ngoài cửa.",
        "answer": "我一直在门外等你。",
        "answerPy": "Wǒ yìzhí zài mén wài děng nǐ.",
        "note": "一直 vừa nói hướng, vừa nói suốt thời gian.",
        "pair": "一直 + V"
      }
    ]
  },
  {
    "n": 10,
    "zh": "往",
    "py": "wǎng",
    "pos": "Giới từ",
    "vn": "hướng về, về phía",
    "hv": "vãng",
    "em": "🧭",
    "lesson": 4,
    "ex_zh": "往前走。",
    "ex_py": "Wǎng qián zǒu.",
    "ex_vn": "Đi về phía trước.",
    "exList": [
      {
        "zh": "往前走。",
        "py": "Wǎng qián zǒu.",
        "vn": "Đi về phía trước."
      },
      {
        "zh": "到了路口再往右走。",
        "py": "Dàole lùkǒu zài wǎng yòu zǒu.",
        "vn": "Đến ngã tư thì rẽ phải."
      },
      {
        "zh": "请往这边看。",
        "py": "Qǐng wǎng zhè biān kàn.",
        "vn": "Xin hãy nhìn về phía này."
      }
    ],
    "hanzi": [
      {
        "c": "往",
        "p": "wǎng",
        "type": "左右结构 · Trái-phải",
        "st": 8,
        "ord": "彳(sách) trái → 主 (chủ) phải",
        "rad": "彳(sách – bước ngắn)",
        "mean": "hướng về",
        "tip": "Bộ 彳(đi) + 主 (hướng chính) → bước đi THEO HƯỚNG nhất định.",
        "cf": "住 (zhù – \"ở\", bộ 亻\")",
        "w": "往前 / 往右 / 往那儿"
      }
    ],
    "colloFull": [
      {
        "zh": "往前走",
        "py": "wǎng qián zǒu",
        "vn": "đi về phía trước"
      },
      {
        "zh": "往右",
        "py": "wǎng yòu",
        "vn": "sang phải"
      },
      {
        "zh": "往学校走",
        "py": "wǎng xuéxiào zǒu",
        "vn": "đi về phía trường"
      },
      {
        "zh": "往那儿",
        "py": "wǎng nàr",
        "vn": "về phía kia"
      }
    ],
    "patterns": [
      {
        "s": "往 + hướng + 走",
        "m": "Đi về hướng nào: 往右走"
      },
      {
        "s": "往 (hướng đi) ≠ 到 (đích đến)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Bạn đi thẳng về phía trước, đến ngã tư thì rẽ phải.",
        "answer": "你一直往前走，到路口往右走。",
        "answerPy": "Nǐ yìzhí wǎng qián zǒu, dào lùkǒu wǎng yòu zǒu.",
        "note": "往 nói hướng đi, 到 nói đích đến.",
        "pair": "往 + hướng + 走"
      },
      {
        "promptLang": "vi",
        "prompt": "Khách sạn ở phía kia, bạn đi về phía đó.",
        "answer": "宾馆在那儿，你往那儿走吧。",
        "answerPy": "Bīnguǎn zài nàr, nǐ wǎng nàr zǒu ba.",
        "note": "往那儿走 — đi về phía đó.",
        "pair": "往 + hướng + 走"
      }
    ]
  },
  {
    "n": 11,
    "zh": "路口",
    "py": "lùkǒu",
    "pos": "Danh từ",
    "vn": "giao lộ, ngã tư, lối rẽ",
    "hv": "lộ khẩu",
    "em": "🚦",
    "lesson": 4,
    "ex_zh": "到了前面的路口。",
    "ex_py": "Dàole qiánmiàn de lùkǒu.",
    "ex_vn": "Đến ngã tư phía trước.",
    "exList": [
      {
        "zh": "到了前面的路口。",
        "py": "Dàole qiánmiàn de lùkǒu.",
        "vn": "Đến ngã tư phía trước."
      },
      {
        "zh": "路口有很多车。",
        "py": "Lùkǒu yǒu hěn duō chē.",
        "vn": "Ở ngã tư có rất nhiều xe."
      },
      {
        "zh": "请在路口等我。",
        "py": "Qǐng zài lùkǒu děng wǒ.",
        "vn": "Xin hãy đợi tôi ở ngã tư."
      }
    ],
    "hanzi": [
      {
        "c": "路",
        "p": "lù",
        "type": "左右结构 · Trái-phải",
        "st": 13,
        "ord": "足 (túc) trái → 各 (các) phải",
        "rad": "足 (túc – chân)",
        "mean": "đường, tuyến đường",
        "tip": "Bộ 足 (chân) → nơi bàn chân mỗi người 各 (tự) đi qua = CON ĐƯỜNG.",
        "cf": "露 (lù – \"lộ ra\", bộ 雨\")",
        "w": "路口 / 马路 / 一直走"
      },
      {
        "c": "口",
        "p": "kǒu",
        "type": "独体字 · Tượng hình",
        "st": 3,
        "ord": "丨→𠃌→一",
        "rad": "口 (khẩu – tự thành bộ)",
        "mean": "miệng; cửa ngõ, lối",
        "tip": "Hình cái miệng cách điệu → nghĩa gốc MIỆNG, mở rộng thành LỐI RA VÀO.",
        "cf": "日 (rì – \"mặt trời\")",
        "w": "路口 / 门口 / 人口"
      }
    ],
    "colloFull": [
      {
        "zh": "第一个路口",
        "py": "dì yí gè lùkǒu",
        "vn": "ngã tư thứ nhất"
      },
      {
        "zh": "到路口",
        "py": "dào lùkǒu",
        "vn": "đến ngã tư"
      },
      {
        "zh": "路口右边",
        "py": "lùkǒu yòubian",
        "vn": "bên phải ngã tư"
      },
      {
        "zh": "在路口等",
        "py": "zài lùkǒu děng",
        "vn": "chờ ở ngã tư"
      }
    ],
    "patterns": [
      {
        "s": "第 + số + 个 + 路口",
        "m": "Ngã tư thứ mấy: 第一个路口"
      },
      {
        "s": "路 + 口",
        "m": "Cái miệng (口) của con đường (路)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Đến ngã tư thứ hai bạn rẽ phải.",
        "answer": "到第二个路口你往右走。",
        "answerPy": "Dào dì-èr ge lùkǒu nǐ wǎng yòu zǒu.",
        "note": "第 + số + lượng từ — chỉ thứ tự.",
        "pair": "第 + số + M"
      },
      {
        "promptLang": "vi",
        "prompt": "Tôi chờ bạn ở ngã tư, bạn đến nhanh một chút.",
        "answer": "我在路口等你，你快一点儿来。",
        "answerPy": "Wǒ zài lùkǒu děng nǐ, nǐ kuài yìdiǎnr lái.",
        "note": "Nơi chốn đứng TRƯỚC động từ.",
        "pair": "在……等"
      }
    ]
  }
];

const wuData = [
  {img:'✏️',label:'铅笔',py:'qiānbǐ',letter:'A'},
  {img:'😄',label:'笑',py:'xiào',letter:'B'},
  {img:'🏨',label:'宾馆',py:'bīnguǎn',letter:'C'},
  {img:'✋',label:'手',py:'shǒu',letter:'D'},
  {img:'🏫',label:'班',py:'bān',letter:'E'},
  {img:'🚦',label:'路口',py:'lùkǒu',letter:'F'},
];

var dialogData = [
  {scene:'在办公室 · Tìm người trong văn phòng',
   preQuiz:[
     {q:'张先生在办公室吗？',opts:['在','不在，出去了','生病请假'],ans:1},
     {q:'什么时候可以再来？',opts:['明天','下午','晚上'],ans:1},
   ],
   lines:[
     {sp:0,zh:'门开着呢，请进。',py:'Mén kāizhe ne, qǐng jìn.',vn:'Cửa đang mở đấy, mời vào.'},
     {sp:1,zh:'请问张先生在吗？',py:'Qǐngwèn Zhāng xiānsheng zài ma?',vn:'Xin hỏi có ông Trương ở đây không ạ?'},
     {sp:0,zh:'他出去了，你下午再来吧。',py:'Tā chūqu le, nǐ xiàwǔ zài lái ba.',vn:'Anh ấy ra ngoài rồi, chiều bạn quay lại nhé.'},
     {sp:1,zh:'好的，谢谢。',py:'Hǎode, xièxie.',vn:'Vâng, cảm ơn bạn.'},
   ]},
  {scene:'在办公室 · Hỏi thăm về đồng nghiệp',
   preQuiz:[
     {q:'那个正在说话的女孩子姓什么？',opts:['杨','王','李'],ans:0},
     {q:'女的怎么认识杨笑笑的？',opts:['她姐姐是女的的同学','自己是同学','是邻居'],ans:0},
     {q:'男的认识拿铅笔的那个人吗？',opts:['认识','不认识','不确定'],ans:1},
   ],
   lines:[
     {sp:0,zh:'那个正在说话的女孩子是谁？',py:'Nàge zhèngzài shuōhuà de nǚháizi shì shéi?',vn:'Cô gái đang nói chuyện đằng kia là ai thế?'},
     {sp:1,zh:'我知道她的名字，她姓杨，叫杨笑笑，她姐姐是我的同学。',py:'Wǒ zhīdào tā de míngzi, tā xìng Yáng, jiào Yáng Xiàoxiao, tā jiějie shì wǒ de tóngxué.',vn:'Tôi biết tên cô ấy, cô ấy họ Dương, tên là Dương Tiếu Tiếu. Chị gái cô ấy là bạn học của tớ.'},
     {sp:0,zh:'那个手里拿着铅笔的呢？',py:'Nàge shǒu lǐ názhe qiānbǐ de ne?',vn:'Thế còn người tay cầm bút chì đằng kia thì sao?'},
     {sp:1,zh:'我不认识。',py:'Wǒ bú rènshi.',vn:'Tớ không quen.'},
   ]},
  {scene:'在运动场 · Hỏi thăm chuyện tình cảm',
   preQuiz:[
     {q:'男的的女朋友是什么样子的？',opts:['长着两个大眼睛，非常爱笑','很矮很瘦','戴眼镜'],ans:0},
     {q:'那个女孩子以前的男朋友现在怎么样了？',opts:['已经是前男友','还在一起','不知道'],ans:0},
   ],
   lines:[
     {sp:0,zh:'听说你有女朋友了？我认识她吗？',py:'Tīngshuō nǐ yǒu nǚpéngyou le? Wǒ rènshi tā ma?',vn:'Nghe nói bạn có bạn gái rồi à? Tớ có quen cô ấy không?'},
     {sp:1,zh:'就是我们班那个长着两个大眼睛、非常爱笑的女孩。',py:'Jiùshì wǒmen bān nàge zhǎngzhe liǎng ge dà yǎnjing, fēicháng ài xiào de nǚhái.',vn:'Chính là cô gái có đôi mắt to, rất hay cười ở lớp chúng mình ấy.'},
     {sp:0,zh:'她不是有男朋友吗？',py:'Tā bú shì yǒu nánpéngyou ma?',vn:'Cô ấy không phải là có bạn trai rồi sao?'},
     {sp:1,zh:'那个已经是她的前男友了。',py:'Nàge yǐjīng shì tā de qián nányǒu le.',vn:'Người đó đã là bạn trai cũ của cô ấy rồi.'},
   ]},
  {scene:'在路上 · Hỏi đường',
   preQuiz:[
     {q:'离新宾馆远吗？',opts:['不远，走路20分钟','很远，要坐车','就在旁边'],ans:0},
     {q:'怎么走？',opts:['一直往前走，到路口往右走','往左走','坐公交车'],ans:0},
   ],
   lines:[
     {sp:0,zh:'请问这离新宾馆远吗？',py:'Qǐngwèn zhè lí xīn bīnguǎn yuǎn ma?',vn:'Xin hỏi ở đây cách khách sạn mới có xa không?'},
     {sp:1,zh:'不远，走路二十分钟就到。',py:'Bù yuǎn, zǒulù èrshí fēnzhōng jiù dào.',vn:'Không xa đâu, đi bộ 20 phút là đến nơi.'},
     {sp:0,zh:'你能告诉我怎么走吗？',py:'Nǐ néng gàosu wǒ zěnme zǒu ma?',vn:'Bạn có thể chỉ đường giúp tôi không?'},
     {sp:1,zh:'从这一直往前走，到了前面的路口再往右走。',py:'Cóng zhè yìzhí wǎng qián zǒu, dàole qiánmiàn de lùkǒu zài wǎng yòu zǒu.',vn:'Từ đây đi thẳng về phía trước, đến ngã tư phía trước thì rẽ phải.'},
   ]},
];

// ══════════════════════════════════════════
// PHẦN 1 · GHÉP TỪ (Collocation) — ghép hai nửa thành cụm dùng được ngay
// Không copy câu bài khoá — chỉ ghép CỤM TỪ để phản xạ collocation.
// ══════════════════════════════════════════
var matchData = [
  {left:'手里拿着',right:'两本书'},
  {left:'长着',right:'大眼睛'},
  {left:'门',right:'开着'},
  {left:'笑着',right:'说话'},
  {left:'过了路口',right:'往右走'},
  {left:'住在',right:'新宾馆'},
  {left:'我们班',right:'有三十多个学生'},
];

// ══════════════════════════════════════════
// PHẦN 2 · NGHE — tình huống MỚI: đón bạn ở sân bay.
// ══════════════════════════════════════════
var listenData = {
  type: 'workbook',
  audio: '/audio/bai-13/listen-full.mp3',
  dictation: [
    {num:1, lines:[
      {pre:'大卫', blank:'开着车出去了', post:'。', py:'Dàwèi kāizhe chē chūqù le.', vn:'David lái xe ra ngoài rồi.'},
    ]},
    {num:2, lines:[
      {pre:'那个笑着说话的女孩儿', blank:'是谁', post:'？', py:'Nàge xiàozhe shuōhuà de nǚháir shì shéi?', vn:'Cô bé đang cười nói kia là ai vậy?'},
    ]},
    {num:3, lines:[
      {pre:'那个手里拿着铅笔的人', blank:'是我朋友', post:'。', py:'Nàge shǒu lǐ ná zhe qiānbǐ de rén shì wǒ péngyou.', vn:'Người cầm bút chì trên tay kia là bạn tôi.'},
    ]},
    {num:4, lines:[
      {pre:'我的女朋友长着两个大眼睛，', blank:'非常爱笑', post:'。', py:'Wǒ de nǚpéngyou zhǎngzhe liǎng gè dà yǎnjīng, fēicháng ài xiào.', vn:'Bạn gái tôi có đôi mắt to, rất hay cười.'},
    ]},
    {num:5, lines:[
      {pre:'这儿离新京宾馆不太远，', blank:'到前面的路口再往右', post:'。', py:'Zhèr lí Xīnjīng Bīnguǎn bú tài yuǎn, dào qiánmiàn de lùkǒu zài wǎng yòu.', vn:'Chỗ này cách khách sạn Tân Kinh không xa lắm, đến ngã tư phía trước rẽ phải.'},
    ]},
    {num:6, lines:[
      {speaker:'男', pre:'那个非常爱笑的女孩儿', blank:'是谁', post:'？', py:'Nàge fēicháng ài xiào de nǚháir shì shéi?', vn:'Cô bé rất hay cười kia là ai vậy?'},
      {speaker:'女', pre:'你不认识她吗？她叫笑笑，', blank:'是王老师的女儿', post:'。', py:'Nǐ bú rènshi tā ma? Tā jiào Xiàoxiao, shì Wáng lǎoshī de nǚ\'ér.', vn:'Bạn không quen à? Cô ấy tên Tiếu Tiếu, là con gái cô Vương.'},
    ]},
    {num:7, lines:[
      {speaker:'女', pre:'请问，这儿离商店', blank:'远吗', post:'？', py:'Qǐngwèn, zhèr lí shāngdiàn yuǎn ma?', vn:'Xin hỏi, chỗ này cách cửa hàng xa không?'},
      {speaker:'男', pre:'不远，', blank:'往前走，下一个路口就是', post:'。', py:'Bù yuǎn, wǎng qián zǒu, xià yí gè lùkǒu jiù shì.', vn:'Không xa, đi thẳng, ngã tư tiếp theo là đến.'},
    ]},
    {num:8, lines:[
      {speaker:'男', pre:'那个手里拿着铅笔的孩子是', blank:'你妹妹吗', post:'？', py:'Nàge shǒu lǐ ná zhe qiānbǐ de háizi shì nǐ mèimei ma?', vn:'Đứa trẻ cầm bút chì kia là em gái bạn à?'},
      {speaker:'女', pre:'不是，她是', blank:'我同学的妹妹', post:'。', py:'Bú shì, tā shì wǒ tóngxué de mèimei.', vn:'Không phải, đó là em gái bạn học của tôi.'},
    ]},
    {num:9, lines:[
      {speaker:'女', pre:'椅子上坐着的那个人', blank:'是谁', post:'？', py:'Yǐzi shàng zuòzhe de nàge rén shì shéi?', vn:'Người đang ngồi trên ghế kia là ai?'},
      {speaker:'男', pre:'是我爸爸。他', blank:'有点儿累，正休息呢', post:'。', py:'Shì wǒ bàba. Tā yǒudiǎnr lèi, zhèng xiūxi ne.', vn:'Là bố tôi. Ông ấy hơi mệt, đang nghỉ ngơi.'},
    ]},
    {num:10, lines:[
      {speaker:'男', pre:'现在八点十分了，你', blank:'到机场了吗', post:'？', py:'Xiànzài bā diǎn shí fēn le, nǐ dào jīchǎng le ma?', vn:'Bây giờ 8 giờ 10 rồi, bạn đến sân bay chưa?'},
      {speaker:'女', pre:'没有，我', blank:'还在出租车上呢，很快就到', post:'。', py:'Méiyǒu, wǒ hái zài chūzūchē shàng ne, hěn kuài jiù dào.', vn:'Chưa, tôi vẫn đang ở trên taxi, sắp đến rồi.'},
    ]},
  ],
  mc: [
    {num:11, options:['在公司','在家里','在外面'], ans:2,
     explain:'男：请问李先生在公司吗？女：他开着车出去了，你下午再来吧。问：李先生在哪儿？ → 在外面。'},
    {num:12, options:['是','不是','不知道'], ans:1,
     explain:'女：大卫是杨笑笑的男朋友吗？男：是杨笑笑的前男友。问：大卫现在是杨笑笑的男朋友吗？ → 不是。'},
    {num:13, options:['书太大','书太多','书太贵'], ans:1,
     explain:'男：你的书太多了，我帮你拿着吧。女：不用了，我一个人就可以了。问：男的为什么要帮女的拿书？ → 书太多。'},
    {num:14, options:['喜欢红色','喜欢衣服','别人说好看'], ans:2,
     explain:'男：为什么你每天都穿着红色的衣服？女：因为别人都说我穿红色的衣服好看。问：女的为什么每天都穿着红色的衣服？ → 别人说好看。'},
    {num:15, options:['男的认识','女的认识','男的和女的都不认识'], ans:2,
     explain:'男：那个笑着说话的女孩儿是谁？女：哪个？是穿红衣服的那个吗？男：对，就是她。女：她是新来的学生，我也不认识。问：谁认识那个女孩儿？ → 男的和女的都不认识。'},
  ],
};

// ══════════════════════════════════════════
// PHẦN 3a · ĐIỀN TỪ — mỗi câu một tình huống mới (着 · 不是……吗 · 往 + từ mới bài 13, ôn bài trước)
// ══════════════════════════════════════════
var fillData = [
  {pre:'Bạn chỉ cho bạn mới thầy giáo mới: “你看，那个在椅子上坐',blank:'着',post:'看书的人就是我们的新老师。”',hint:'(đang — trạng thái)',ans:'着',exp:'Động từ + 着 + động từ 2: 坐着看书 = ngồi đọc sách (tư thế 坐 kéo dài trong lúc làm việc khác).'},
  {pre:'“你手里',blank:'拿',post:'着什么？” — “是我给儿子买的牛奶。”',hint:'(cầm)',ans:'拿',exp:'手里拿着 + đồ vật = trong tay đang cầm…; 着 gắn ngay sau 拿.'},
  {pre:'“你为什么一直',blank:'笑',post:'？” — “今天是我的生日啊！”',hint:'(cười)',ans:'笑',exp:'一直笑 = cười mãi; 笑 là động từ, đứng ngay sau phó từ 一直.'},
  {pre:'Trời mưa cả ngày, bạn nhắn cho đội bóng: “今天从早上就',blank:'一直',post:'下雨，我们不能去踢足球了。”',hint:'(liên tục, suốt)',ans:'一直',exp:'从…就一直 + động từ = suốt từ … đến giờ: 一直下雨 = mưa liên tục.'},
  {pre:'Thấy bạn vẫn ở nhà, bạn ngạc nhiên: “你',blank:'不是',post:'去机场接你哥哥了吗？怎么还在家？”',hint:'(chẳng phải… sao)',ans:'不是',exp:'不是……吗？ = chẳng phải … sao? — nhắc lại điều mình tưởng là đúng, tỏ ý ngạc nhiên.'},
  {pre:'“请问，去医院怎么走？” — “',blank:'往',post:'前走，过了第一个路口就是。”',hint:'(về phía)',ans:'往',exp:'往 + hướng + động từ: 往前走 = đi về phía trước; 往 đứng TRƯỚC từ chỉ hướng.'},
  {pre:'Bạn chỉ đường cho khách: “过了这个',blank:'路口',post:'往右走，就能看见宾馆了。”',hint:'(ngã tư)',ans:'路口',exp:'过了路口 = qua ngã tư rồi; 过 ở đây là “đi qua”.'},
  {pre:'“这次来北京，你住在哪儿？” — “住在公司旁边的一个',blank:'宾馆',post:'，离公司很近。”',hint:'(khách sạn)',ans:'宾馆',exp:'住在 + nơi chốn: 住在宾馆 = ở khách sạn; 一个宾馆 dùng lượng từ 个.'},
  {pre:'“你们',blank:'班',post:'有多少个学生？” — “二十五个，男孩子比女孩子多。”',hint:'(lớp)',ans:'班',exp:'你们班 = lớp các bạn; 班 đứng ngay sau đại từ, không cần 的.'},
  {pre:'Gặp lại con trai bạn sau một năm: “你儿子',blank:'长',post:'得真高！” — “是啊，他现在比我高了。”',hint:'(lớn lên, trông — đọc zhǎng)',ans:'长',exp:'长得 + tính từ = trông …, lớn lên …: 长得真高 = cao lớn thật; 长 ở đây đọc zhǎng.'},
  {pre:'“你有',blank:'铅笔',post:'吗？我想写几个汉字。” — “有，给你。”',hint:'(bút chì)',ans:'铅笔',exp:'铅笔 = bút chì; hỏi mượn đồ: 你有……吗？'},
  {pre:'Bạn bảo bạn đi nhanh lên: “你快一点儿！我们都在门口等',blank:'着',post:'你呢。”',hint:'(đang — trạng thái)',ans:'着',exp:'等着 + người = đang chờ ai đó; cuối câu thêm 呢 cho tự nhiên: 等着你呢.'},
];

// ══════════════════════════════════════════
// PHẦN 3b · SẮP XẾP — câu MỚI, dùng 着 / 不是……吗 / 往 / 一直
// ══════════════════════════════════════════
var sortData = [
  {words:['她','手里','拿着','两','个','西瓜','。'],ans:'她手里拿着两个西瓜。',audio:'她手里拿着两个西瓜。'},
  {words:['你','不是','不','喜欢','吃','鱼','吗','？'],ans:'你不是不喜欢吃鱼吗？',audio:'你不是不喜欢吃鱼吗？'},
  {words:['到了','下','一','个','路口','往','右','走','。'],ans:'到了下一个路口往右走。',audio:'到了下一个路口往右走。'},
  {words:['那个','坐着','看','报纸','的','男孩子','是','我','弟弟','。'],ans:'那个坐着看报纸的男孩子是我弟弟。',audio:'那个坐着看报纸的男孩子是我弟弟。'},
  {words:['我们','班','的','同学','都','很','爱','笑','。'],ans:'我们班的同学都很爱笑。',audio:'我们班的同学都很爱笑。'},
  {words:['从','宾馆','到','公司','坐','公共汽车','要','一','个','小时','。'],ans:'从宾馆到公司坐公共汽车要一个小时。',audio:'从宾馆到公司坐公共汽车要一个小时。'},
  {words:['他','一直','在','门口','等','你','。'],ans:'他一直在门口等你。',audio:'他一直在门口等你。'},
  {words:['你','往','外','看','，','下雪','了','！'],ans:'你往外看，下雪了！',audio:'你往外看，下雪了！'},
];

// ══════════════════════════════════════════
// PHẦN 3c · SỬA LỖI SAI — lỗi học sinh Việt hay mắc
// (着 đặt sai chỗ, 不/没 với 着, 不是……吗 tách sai, 往 nhầm với 在/去/从, 一直 cuối câu, 长得/长着...)
// ══════════════════════════════════════════
var errorFixData = [
  {wrong:'今天她着穿红衣服。',
   opts:['今天她穿着红衣服。','今天她穿红衣服着。','今天她穿了着红衣服。','今天她穿得红衣服。'],ans:0,
   exp:'着 đứng NGAY SAU động từ, trước tân ngữ: 穿着红衣服; không dùng 了 cùng 着, không nhầm 得.'},
  {wrong:'你看，门不开着，他不在家。',
   opts:['你看，门没开了，他不在家。','你看，门没开着，他不在家。','你看，门不开着了，他不在家。','你看，门是不开着，他不在家。'],ans:1,
   exp:'Phủ định trạng thái V着 dùng 没: 门没开着; không dùng 不, không thêm 了 hay 是.'},
  {wrong:'你喜欢不是踢足球吗？（ý: chẳng phải bạn thích đá bóng sao）',
   opts:['你不喜欢是踢足球吗？','你不是喜欢踢足球呢？','你不是喜欢踢足球吗？','你没喜欢踢足球吗？'],ans:2,
   exp:'不是 đứng sau chủ ngữ, trước cả cụm động từ: 你不是喜欢……吗？; cuối câu dùng 吗, không dùng 呢; 喜欢 không đi với 没.'},
  {wrong:'你走往前，过了路口就到了。',
   opts:['你在前走，过了路口就到了。','你去前走，过了路口就到了。','你从前走，过了路口就到了。','你往前走，过了路口就到了。'],ans:3,
   exp:'往 + hướng đứng TRƯỚC động từ: 往前走; không dịch kiểu “đi về phía trước” thành 走往前, không nhầm 在/去/从.'},
  {wrong:'他看电视一直，不想睡觉。',
   opts:['他一直看电视，不想睡觉。','他看一直电视，不想睡觉。','他一直看电视着，不想睡觉。','他一直看着电视了，不想睡觉。'],ans:0,
   exp:'一直 là phó từ, đứng TRƯỚC động từ: 一直看电视; không đặt cuối câu như tiếng Việt “xem mãi”.'},
  {wrong:'我同学长着很高。（ý: bạn tôi cao）',
   opts:['我同学长的很高。','我同学长得很高。','我同学长了很高。','我同学很长得高。'],ans:1,
   exp:'Nhận xét ngoại hình: 长得 + tính từ (长得很高); 长着 + danh từ (长着大眼睛); không viết 的 thay 得.'},
  {wrong:'我们去走着吧，宾馆不远。',
   opts:['我们走去着吧，宾馆不远。','我们着走去吧，宾馆不远。','我们走着去吗，宾馆不远。','我们走着去吧，宾馆不远。'],ans:3,
   exp:'走着去 = đi bộ đến: V1着 (cách thức) đứng trước V2 (去); rủ rê dùng 吧, không dùng 吗.'},
  {wrong:'“你看见我的铅笔了吗？” — “你手里是不拿着吗？”',
   opts:['“你看见我的铅笔了吗？” — “你手里不是拿着吗？”','“你看见我的铅笔了吗？” — “你手里不是拿着了吗？”','“你看见我的铅笔了吗？” — “你手里不是着拿吗？”','“你看见我的铅笔了吗？” — “你手里没是拿着吗？”'],ans:0,
   exp:'不是 không tách và không đổi thành 没是: 你手里不是拿着吗？ = chẳng phải bạn đang cầm trên tay sao?'},
];

// ══════════════════════════════════════════
// PHẦN 4 · LUYỆN NÓI 3 TẦNG (tầng 3 có ghi âm thật + chấm điểm AI)
// ══════════════════════════════════════════
// Luyen noi voi AI (mode 'ai-speak'): moi cau hoi la mot tinh huong doi song
// lien quan den bai khoa; hoc sinh tu ghi am cau tra loi, AI nghe lai (nhan
// dien giong noi tieng Trung) roi cham diem theo 4 tieu chi va nhan xet.
var speakingData = {
  mode: 'ai-speak',
  intro: 'Mỗi câu hỏi là một tình huống thật trong đời sống, dùng đúng từ vựng và mẫu câu của Bài 13. Bấm 🎙️ rồi trả lời bằng tiếng Trung — AI sẽ nghe, ghi lại câu bạn nói và chấm điểm theo Nội dung · Mẫu câu · Từ vựng · Độ trôi chảy. Nên tự trả lời trước rồi mới mở “Câu mẫu” để đối chiếu.',
  tasks: [
    {
      situation: 'Bạn ra sân bay đón một người bạn mới, người đó chưa từng gặp bạn.',
      q_zh: '你在机场等一个朋友，他不认识你。你怎么告诉他你在哪儿、穿着什么？',
      q_py: 'Nǐ zài jīchǎng děng yí ge péngyou, tā bú rènshi nǐ. Nǐ zěnme gàosu tā nǐ zài nǎr, chuānzhe shénme?',
      q_vn: 'Bạn đang đợi một người bạn ở sân bay, người đó không biết mặt bạn. Bạn nói với họ thế nào về chỗ bạn đứng và quần áo bạn mặc?',
      grammar: { label: 'Động từ + 着 (穿着 / 拿着)', any: ['着'] },
      need: [
        { label: 'Nói chỗ bạn đang ở', any: ['在', '门口', '前面', '旁边', '里', '外面', '后面'] },
        { label: 'Tả quần áo / màu sắc', any: ['衣服', '白', '黑', '红', '颜色', '穿'] },
        { label: 'Thêm một đặc điểm để nhận ra (手里拿着… / 长着…)', any: ['拿', '手', '长', '眼睛', '高', '书', '手机'] }
      ],
      bonus: { label: 'Dặn thêm (你到了给我打电话 / 等着你)', any: ['打电话', '等', '告诉', '到了'] },
      vocab: ['着', '穿', '拿', '手'],
      minLen: 14,
      sample: '我在机场门口等你，穿着黑衣服，手里拿着一本汉语书。你到了给我打电话吧。',
      sample_py: 'Wǒ zài jīchǎng ménkǒu děng nǐ, chuānzhe hēi yīfu, shǒu li názhe yì běn Hànyǔ shū. Nǐ dàole gěi wǒ dǎ diànhuà ba.',
      sample_vn: 'Mình đợi bạn ở cổng sân bay, mặc áo đen, tay cầm một quyển sách tiếng Hán. Bạn đến thì gọi cho mình nhé.',
      tip: '着 đứng ngay sau động từ: 穿着、拿着; tả nhiều chi tiết thì nối bằng dấu phẩy.'
    },
    {
      situation: 'Bạn của bạn nói hôm nay phải đi làm, nhưng chiều nay bạn lại gặp họ ở cửa hàng.',
      q_zh: '你朋友说今天要上班。今天下午你在商店看见了他，你会问他什么？',
      q_py: 'Nǐ péngyou shuō jīntiān yào shàngbān. Jīntiān xiàwǔ nǐ zài shāngdiàn kànjiànle tā, nǐ huì wèn tā shénme?',
      q_vn: 'Bạn bạn nói hôm nay phải đi làm. Chiều nay bạn lại thấy họ ở cửa hàng, bạn sẽ hỏi gì?',
      grammar: { label: '你不是……吗？', any: ['不是'] },
      need: [
        { label: 'Kết thúc câu hỏi bằng 吗', any: ['吗'] },
        { label: 'Nhắc lại điều họ đã nói (上班 / 很忙 / 工作)', any: ['上班', '忙', '工作', '公司', '说'] },
        { label: 'Hỏi lý do (怎么 / 为什么)', any: ['怎么', '为什么'] }
      ],
      bonus: { label: 'Rủ thêm một việc (一起…吧)', any: ['一起', '吧'] },
      vocab: ['不是', '上班'],
      minLen: 12,
      sample: '你不是要上班吗？怎么在这儿买东西？公司今天休息吗？',
      sample_py: 'Nǐ bú shì yào shàngbān ma? Zěnme zài zhèr mǎi dōngxi? Gōngsī jīntiān xiūxi ma?',
      sample_vn: 'Chẳng phải hôm nay bạn phải đi làm sao? Sao lại ở đây mua đồ? Hôm nay công ty nghỉ à?',
      tip: '不是……吗？ để nhắc lại điều bạn tưởng là đúng và tỏ ý ngạc nhiên; tiếp theo hỏi 怎么…？'
    },
    {
      situation: 'Một bạn học mới muốn đến nhà bạn chơi nhưng không biết đường.',
      q_zh: '从学校到你家怎么走？远不远？',
      q_py: 'Cóng xuéxiào dào nǐ jiā zěnme zǒu? Yuǎn bu yuǎn?',
      q_vn: 'Từ trường đến nhà bạn đi thế nào? Có xa không?',
      grammar: { label: '往 + hướng + 走 / 一直往前走', any: ['往'] },
      need: [
        { label: 'Dùng hướng đi (前 / 右 / 右边 / 左边)', any: ['前', '右', '左边', '后'] },
        { label: 'Dùng 路口 hoặc mốc đường', any: ['路口', '门口', '商店', '医院', '饭店', '宾馆'] },
        { label: 'Nói xa / gần hoặc mất bao lâu', any: ['远', '近', '分钟', '小时', '就到'] }
      ],
      bonus: { label: 'Dùng 一直', any: ['一直'] },
      vocab: ['往', '一直', '路口'],
      minLen: 16,
      sample: '从学校门口往右走，过了两个路口一直往前走，十分钟就到我家了，不远。',
      sample_py: 'Cóng xuéxiào ménkǒu wǎng yòu zǒu, guòle liǎng ge lùkǒu yìzhí wǎng qián zǒu, shí fēnzhōng jiù dào wǒ jiā le, bù yuǎn.',
      sample_vn: 'Từ cổng trường rẽ phải, qua hai ngã tư thì cứ đi thẳng, mười phút là đến nhà mình, không xa.',
      tip: '往 + hướng đứng trước động từ: 往右走、往前走; 一直 đứng trước 往.'
    },
    {
      situation: 'Bạn mới chuyển trường hỏi bạn về các bạn trong lớp.',
      q_zh: '你们班谁最爱笑？他（她）长得怎么样？',
      q_py: 'Nǐmen bān shéi zuì ài xiào? Tā zhǎng de zěnmeyàng?',
      q_vn: 'Lớp bạn ai hay cười nhất? Bạn ấy trông thế nào?',
      grammar: { label: '长得 + tính từ / 长着 + đặc điểm', any: ['长得', '长着', '长'] },
      need: [
        { label: 'Nói người đó là ai (我们班的…)', any: ['班', '同学', '朋友', '叫', '姓'] },
        { label: 'Dùng 笑', any: ['笑'] },
        { label: 'Tả ngoại hình (高 / 眼睛 / 漂亮…)', any: ['高', '眼睛', '漂亮', '大', '小', '好看'] }
      ],
      bonus: { label: 'Dùng 最 hoặc so sánh 比', any: ['最', '比'] },
      vocab: ['班', '笑', '长'],
      minLen: 12,
      sample: '我们班的小王最爱笑。他长得很高，眼睛大大的，同学都喜欢和他说话。',
      sample_py: 'Wǒmen bān de Xiǎo Wáng zuì ài xiào. Tā zhǎng de hěn gāo, yǎnjing dàdà de, tóngxué dōu xǐhuan hé tā shuōhuà.',
      sample_vn: 'Lớp mình Tiểu Vương hay cười nhất. Bạn ấy cao, mắt to, các bạn đều thích nói chuyện với bạn ấy.',
      tip: '长得 + tính từ (长得很高); 长着 + danh từ (长着大眼睛). 长 ở đây đọc zhǎng.'
    },
    {
      situation: 'Bạn gọi điện cho người nhà đang đi xa, kể cảnh ở nhà lúc này.',
      q_zh: '现在你家里怎么样？门开着吗？家里人在做什么？',
      q_py: 'Xiànzài nǐ jiā li zěnmeyàng? Mén kāizhe ma? Jiā li rén zài zuò shénme?',
      q_vn: 'Bây giờ ở nhà bạn thế nào? Cửa có đang mở không? Người nhà đang làm gì?',
      grammar: { label: 'Động từ + 着 (开着 / 坐着 / 等着…)', any: ['着'] },
      need: [
        { label: 'Nói về cửa (门开着 / 门没开着)', any: ['门'] },
        { label: 'Nói người trong nhà', any: ['妈妈', '爸爸', '妻子', '丈夫', '儿子', '女儿', '哥哥', '姐姐', '弟弟', '家里人'] },
        { label: 'Nói việc họ đang làm', any: ['看', '吃', '喝', '做', '写', '睡', '听', '说话', '休息', '洗'] }
      ],
      bonus: { label: 'Dùng 正在…呢', any: ['正在', '呢'] },
      vocab: ['着', '门'],
      minLen: 12,
      sample: '门开着，妈妈坐着看电视，爸爸正在做饭呢。我们都在等着你回来。',
      sample_py: 'Mén kāizhe, māma zuòzhe kàn diànshì, bàba zhèngzài zuò fàn ne. Wǒmen dōu zài děngzhe nǐ huílai.',
      sample_vn: 'Cửa đang mở, mẹ ngồi xem tivi, bố đang nấu cơm. Cả nhà đều đang chờ bạn về.',
      tip: 'Động từ + 着 tả trạng thái (门开着) hoặc tư thế khi làm việc khác (坐着看电视).'
    }
  ]
};

// ══════════════════════════════════════════
// LUYỆN DỊCH — câu mới, dùng từ bài 13 + ôn bài trước
// ══════════════════════════════════════════
var translateData = [
  {vi:'Tay tôi đang cầm hai cốc cà phê, bạn mở cửa giúp tôi một chút nhé.', zh:'我手里拿着两杯咖啡，你帮我开一下门吧。', py:'Wǒ shǒu li názhe liǎng bēi kāfēi, nǐ bāng wǒ kāi yíxià mén ba.'},
  {vi:'Chẳng phải khách sạn này rất đắt sao? Sao bạn lại ở đây?', zh:'这个宾馆不是很贵吗？你怎么住这儿？', py:'Zhège bīnguǎn bú shì hěn guì ma? Nǐ zěnme zhù zhèr?'},
  {vi:'Cô ấy cứ cười mãi, không nói gì cả.', zh:'她一直笑着，什么也不说。', py:'Tā yìzhí xiàozhe, shénme yě bù shuō.'},
  {vi:'Con trai tôi lớn lên rồi, năm nay còn cao hơn tôi.', zh:'我儿子长高了，今年比我还高。', py:'Wǒ érzi zhǎng gāo le, jīnnián bǐ wǒ hái gāo.'},
];

// ══════════════════════════════════════════
// LUYỆN DỊCH (chiều Trung→Việt) — noi dung KHAC voi chieu Viet->Trung o tren
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:'Khách sạn ở ngay bên phải ngã tư phía trước.', zh:'宾馆就在前面那个路口的右边。', py:'Bīnguǎn jiù zài qiánmiàn nàge lùkǒu de yòubian.'},
  {vi:'Đừng nhìn ra sau, đi về phía trước đi!', zh:'别往后看，往前走吧！', py:'Bié wǎng hòu kàn, wǎng qián zǒu ba!'},
  {vi:'Đứa bé tay cầm bút chì, đang viết chữ.', zh:'孩子手里拿着铅笔，正在写字呢。', py:'Háizi shǒu li názhe qiānbǐ, zhèngzài xiě zì ne.'},
];
