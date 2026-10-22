// ══════════════════════════════════════════
// DATA — Bài 12: 你穿得太少了
// ══════════════════════════════════════════
var vocabData = [
  {
    "n": 1,
    "zh": "得",
    "py": "de",
    "pos": "Trợ từ kết cấu",
    "vn": "dùng sau động từ để nối bổ ngữ trạng thái",
    "hv": "đắc",
    "em": "🔗",
    "lesson": 1,
    "ex_zh": "你吃得太少了。",
    "ex_py": "Nǐ chī de tài shǎo le.",
    "ex_vn": "Bạn ăn ít quá.",
    "exList": [
      {
        "zh": "你吃得太少了。",
        "py": "Nǐ chī de tài shǎo le.",
        "vn": "Bạn ăn ít quá."
      },
      {
        "zh": "他说得很清楚。",
        "py": "Tā shuō de hěn qīngchu.",
        "vn": "Anh ấy nói rất rõ ràng."
      },
      {
        "zh": "我起得不早。",
        "py": "Wǒ qǐ de bù zǎo.",
        "vn": "Tôi dậy không sớm."
      }
    ],
    "hanzi": [
      {
        "c": "得",
        "p": "de / dé",
        "type": "左右结构 · Trái-phải",
        "st": 11,
        "ord": "彳(sách) trái → 旦+寸 phải",
        "rad": "彳(sách – bước ngắn)",
        "mean": "trợ từ nối bổ ngữ; đạt được",
        "tip": "Bộ 彳(bước đi) → trên đường đi mà ĐẠT ĐƯỢC điều gì; đọc \"de\" khi nối động từ với phần miêu tả.",
        "cf": "德 (dé – \"đạo đức\")",
        "w": "V + 得 + Tính từ / 得到 / 觉得"
      }
    ],
    "colloFull": [
      {
        "zh": "说得很快",
        "py": "shuō de hěn kuài",
        "vn": "nói rất nhanh"
      },
      {
        "zh": "走得很慢",
        "py": "zǒu de hěn màn",
        "vn": "đi rất chậm"
      },
      {
        "zh": "做得不错",
        "py": "zuò de búcuò",
        "vn": "làm khá tốt"
      },
      {
        "zh": "唱得很好",
        "py": "chàng de hěn hǎo",
        "vn": "hát rất hay"
      }
    ],
    "patterns": [
      {
        "s": "động từ + 得 + tính từ",
        "m": "Làm việc gì ĐẾN MỨC nào: 他说得很快"
      },
      {
        "s": "Sau 得 vẫn phải có 很: ✗ 说得快 → ✓ 说得很快"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Anh ấy nói nhanh quá, tôi nghe không hiểu.",
        "answer": "他说得很快，我没听懂。",
        "answerPy": "Tā shuō de hěn kuài, wǒ méi tīngdǒng.",
        "note": "Sau 得 vẫn phải có 很.",
        "pair": "V + 得 + Adj"
      },
      {
        "promptLang": "vi",
        "prompt": "Chị tôi hát rất hay, múa cũng rất đẹp.",
        "answer": "我姐姐唱得很好，跳舞也跳得很漂亮。",
        "answerPy": "Wǒ jiějie chàng de hěn hǎo, tiàowǔ yě tiào de hěn piàoliang.",
        "note": "Từ ly hợp phải nhắc lại động từ trước 得.",
        "pair": "V + 得 + Adj"
      }
    ]
  },
  {
    "n": 2,
    "zh": "妻子",
    "py": "qīzi",
    "pos": "Danh từ",
    "vn": "vợ",
    "hv": "thê tử",
    "em": "👰",
    "lesson": 2,
    "ex_zh": "我妻子比我做得好。",
    "ex_py": "Wǒ qīzi bǐ wǒ zuò de hǎo.",
    "ex_vn": "Vợ tớ nấu ngon hơn tớ nhiều.",
    "exList": [
      {
        "zh": "我妻子比我做得好。",
        "py": "Wǒ qīzi bǐ wǒ zuò de hǎo.",
        "vn": "Vợ tớ nấu ngon hơn tớ nhiều."
      },
      {
        "zh": "他和妻子一起去旅游。",
        "py": "Tā hé qīzi yìqǐ qù lǚyóu.",
        "vn": "Anh ấy cùng vợ đi du lịch."
      },
      {
        "zh": "我的妻子是老师。",
        "py": "Wǒ de qīzi shì lǎoshī.",
        "vn": "Vợ tôi là giáo viên."
      }
    ],
    "hanzi": [
      {
        "c": "妻",
        "p": "qī",
        "type": "上下结构 · Trên-dưới",
        "st": 8,
        "ord": "彐→女",
        "rad": "女 (nữ – phụ nữ)",
        "mean": "vợ",
        "tip": "Bộ 女 (phụ nữ) ở dưới → người phụ nữ trong nhà = VỢ.",
        "cf": "妾 (qiè – \"thiếp\")",
        "w": "妻子 / 夫妻"
      }
    ],
    "colloFull": [
      {
        "zh": "我妻子",
        "py": "wǒ qīzi",
        "vn": "vợ tôi"
      },
      {
        "zh": "他的妻子",
        "py": "tā de qīzi",
        "vn": "vợ anh ấy"
      },
      {
        "zh": "妻子和孩子",
        "py": "qīzi hé háizi",
        "vn": "vợ và con"
      },
      {
        "zh": "妻子在家",
        "py": "qīzi zài jiā",
        "vn": "vợ ở nhà"
      }
    ],
    "patterns": [
      {
        "s": "ai + 妻子",
        "m": "Vợ của ai — người thân hay bỏ 的"
      },
      {
        "s": "妻子 (vợ) ↔ 丈夫 (chồng)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Vợ tôi làm việc ở một công ty gần đây.",
        "answer": "我妻子在一个很近的公司上班。",
        "answerPy": "Wǒ qīzi zài yí ge hěn jìn de gōngsī shàngbān.",
        "note": "妻子 ↔ 丈夫 — vợ và chồng.",
        "pair": "在……上班"
      },
      {
        "promptLang": "vi",
        "prompt": "Vợ và con anh ấy đều ở nhà.",
        "answer": "他的妻子和孩子都在家。",
        "answerPy": "Tā de qīzi hé háizi dōu zài jiā.",
        "note": "都 đứng SAU cả hai chủ ngữ.",
        "pair": "……和……都……"
      }
    ]
  },
  {
    "n": 3,
    "zh": "雪",
    "py": "xuě",
    "pos": "Danh từ",
    "vn": "tuyết",
    "hv": "tuyết",
    "em": "❄️",
    "lesson": 3,
    "ex_zh": "下雪了，今天真冷。",
    "ex_py": "Xià xuě le, jīntiān zhēn lěng.",
    "ex_vn": "Tuyết rơi rồi, hôm nay lạnh thật.",
    "exList": [
      {
        "zh": "下雪了，今天真冷。",
        "py": "Xià xuě le, jīntiān zhēn lěng.",
        "vn": "Tuyết rơi rồi, hôm nay lạnh thật."
      },
      {
        "zh": "这里冬天常常下雪。",
        "py": "Zhèlǐ dōngtiān chángcháng xià xuě.",
        "vn": "Ở đây mùa đông thường xuyên có tuyết rơi."
      },
      {
        "zh": "外面的雪很大。",
        "py": "Wàimian de xuě hěn dà.",
        "vn": "Tuyết bên ngoài rất dày."
      }
    ],
    "hanzi": [
      {
        "c": "雪",
        "p": "xuě",
        "type": "上下结构 · Trên-dưới",
        "st": 11,
        "ord": "雨 (vũ) trên → 彐 dưới",
        "rad": "雨 (vũ – mưa)",
        "mean": "tuyết",
        "tip": "Bộ 雨 (mưa) ở trên → trời lạnh khiến mưa đóng băng thành TUYẾT.",
        "cf": "雨 (yǔ – \"mưa\", thiếu phần dưới)",
        "w": "下雪 / 大雪 / 雪天"
      }
    ],
    "colloFull": [
      {
        "zh": "下雪",
        "py": "xià xuě",
        "vn": "có tuyết"
      },
      {
        "zh": "下雪了",
        "py": "xià xuě le",
        "vn": "tuyết rơi rồi"
      },
      {
        "zh": "大雪",
        "py": "dà xuě",
        "vn": "tuyết lớn"
      },
      {
        "zh": "雪很大",
        "py": "xuě hěn dà",
        "vn": "tuyết rất to"
      }
    ],
    "patterns": [
      {
        "s": "下 + 雪",
        "m": "Tuyết rơi — giống 下雨"
      },
      {
        "s": "✗ 雪下 → ✓ 下雪了 — hiện tượng thời tiết đảo ngược trật tự"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Ngoài trời có tuyết rồi, bạn mặc nhiều một chút.",
        "answer": "外面下雪了，你穿多一点儿。",
        "answerPy": "Wàimiàn xià xuě le, nǐ chuān duō yìdiǎnr.",
        "note": "✗ 雪下 → ✓ 下雪了.",
        "pair": "……了"
      },
      {
        "promptLang": "vi",
        "prompt": "Tuyết năm ngoái to hơn năm nay.",
        "answer": "去年的雪比今年大。",
        "answerPy": "Qùnián de xuě bǐ jīnnián dà.",
        "note": "Sau 比 KHÔNG dùng 很.",
        "pair": "A 比 B + Adj"
      }
    ]
  },
  {
    "n": 4,
    "zh": "零",
    "py": "líng",
    "pos": "Số từ",
    "vn": "không, số không",
    "hv": "linh",
    "em": "0️⃣",
    "lesson": 3,
    "ex_zh": "有零下十度吧。",
    "ex_py": "Yǒu líng xià shí dù ba.",
    "ex_vn": "Phải âm 10 độ ấy nhỉ.",
    "exList": [
      {
        "zh": "有零下十度吧。",
        "py": "Yǒu líng xià shí dù ba.",
        "vn": "Phải âm 10 độ ấy nhỉ."
      },
      {
        "zh": "现在是零下五度。",
        "py": "Xiànzài shì líng xià wǔ dù.",
        "vn": "Bây giờ là âm 5 độ."
      },
      {
        "zh": "我的电话号码有两个零。",
        "py": "Wǒ de diànhuà hàomǎ yǒu liǎng ge líng.",
        "vn": "Số điện thoại của tôi có hai số 0."
      }
    ],
    "hanzi": [
      {
        "c": "零",
        "p": "líng",
        "type": "上下结构 · Trên-dưới",
        "st": 13,
        "ord": "雨 (vũ) → 令 (lệnh)",
        "rad": "雨 (vũ – mưa)",
        "mean": "số không, lẻ",
        "tip": "Bộ 雨 (mưa) → mưa nhỏ giọt lẻ tẻ, dần hết → nghĩa \"KHÔNG, số 0\".",
        "cf": "铃 (líng – \"chuông\", bộ 钅)",
        "w": "零下 / 零钱 / 三十零五"
      }
    ],
    "colloFull": [
      {
        "zh": "零度",
        "py": "líng dù",
        "vn": "không độ"
      },
      {
        "zh": "零下",
        "py": "líng xià",
        "vn": "dưới không"
      },
      {
        "zh": "零下十度",
        "py": "líng xià shí dù",
        "vn": "âm mười độ"
      },
      {
        "zh": "零点",
        "py": "líng diǎn",
        "vn": "không giờ"
      }
    ],
    "patterns": [
      {
        "s": "零下 + số + 度",
        "m": "Nhiệt độ âm: 零下十度"
      },
      {
        "s": "零 là chữ viết đầy đủ của số 0"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Hôm nay âm mười độ, lạnh quá.",
        "answer": "今天零下十度，太冷了。",
        "answerPy": "Jīntiān líng xià shí dù, tài lěng le.",
        "note": "零下 + số + 度 — nhiệt độ âm.",
        "pair": "太……了"
      },
      {
        "promptLang": "vi",
        "prompt": "Ngày mai không độ, có thể có tuyết.",
        "answer": "明天零度，可能下雪。",
        "answerPy": "Míngtiān líng dù, kěnéng xià xuě.",
        "note": "可能 (đoán) đứng TRƯỚC động từ.",
        "pair": "可能 + V"
      }
    ]
  },
  {
    "n": 5,
    "zh": "度",
    "py": "dù",
    "pos": "Lượng từ",
    "vn": "độ (nhiệt độ)",
    "hv": "độ",
    "em": "🌡️",
    "lesson": 3,
    "ex_zh": "零下十度",
    "ex_py": "líng xià shí dù",
    "ex_vn": "âm 10 độ",
    "exList": [
      {
        "zh": "今天三十五度，太热了。",
        "py": "Jīntiān sānshíwǔ dù, tài rè le.",
        "vn": "Hôm nay 35 độ, nóng quá."
      },
      {
        "zh": "水一百度就开了。",
        "py": "Shuǐ yìbǎi dù jiù kāi le.",
        "vn": "Nước 100 độ là sôi."
      },
      {
        "zh": "今天的温度是十五度。",
        "py": "Jīntiān de wēndù shì shíwǔ dù.",
        "vn": "Nhiệt độ hôm nay là 15 độ."
      }
    ],
    "hanzi": [
      {
        "c": "度",
        "p": "dù",
        "type": "半包围 · Bán bao (广)",
        "st": 9,
        "ord": "广 (nghiễm) → 廿+又",
        "rad": "广 (nghiễm – mái che)",
        "mean": "độ, mức độ",
        "tip": "Mái nhà 广 che một khoảng đo lường → đơn vị đo MỨC ĐỘ (nhiệt độ, góc độ).",
        "cf": "渡 (dù – \"vượt qua\", bộ 氵)",
        "w": "度 / 温度 / 态度"
      }
    ],
    "colloFull": [
      {
        "zh": "十度",
        "py": "shí dù",
        "vn": "mười độ"
      },
      {
        "zh": "零下五度",
        "py": "líng xià wǔ dù",
        "vn": "âm năm độ"
      },
      {
        "zh": "多少度",
        "py": "duōshao dù",
        "vn": "bao nhiêu độ"
      },
      {
        "zh": "三十度",
        "py": "sānshí dù",
        "vn": "ba mươi độ"
      }
    ],
    "patterns": [
      {
        "s": "số + 度",
        "m": "Nói nhiệt độ: 今天十五度"
      },
      {
        "s": "多少度？ — khung hỏi nhiệt độ quen thuộc nhất"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Hôm nay bao nhiêu độ?",
        "answer": "今天多少度？",
        "answerPy": "Jīntiān duōshao dù?",
        "note": "Câu có 多少 thì không thêm 吗.",
        "pair": "多少度？"
      },
      {
        "promptLang": "vi",
        "prompt": "Hôm nay ba mươi độ, nóng hơn hôm qua.",
        "answer": "今天三十度，比昨天热。",
        "answerPy": "Jīntiān sānshí dù, bǐ zuótiān rè.",
        "note": "Khung so sánh cơ bản nhất.",
        "pair": "A 比 B + Adj"
      }
    ]
  },
  {
    "n": 6,
    "zh": "穿",
    "py": "chuān",
    "pos": "Động từ",
    "vn": "mặc (quần áo), đi (giày)",
    "hv": "xuyên",
    "em": "👔",
    "lesson": 3,
    "ex_zh": "你穿得太少了。",
    "ex_py": "Nǐ chuān de tài shǎo le.",
    "ex_vn": "Bạn mặc ít quá.",
    "exList": [
      {
        "zh": "你穿得太少了。",
        "py": "Nǐ chuān de tài shǎo le.",
        "vn": "Bạn mặc ít quá."
      },
      {
        "zh": "今天你穿这件红色的衣服吧。",
        "py": "Jīntiān nǐ chuān zhè jiàn hóngsè de yīfu ba.",
        "vn": "Hôm nay bạn mặc chiếc áo màu đỏ này đi."
      },
      {
        "zh": "他喜欢穿白色的鞋。",
        "py": "Tā xǐhuan chuān báisè de xié.",
        "vn": "Anh ấy thích đi giày màu trắng."
      }
    ],
    "hanzi": [
      {
        "c": "穿",
        "p": "chuān",
        "type": "上下结构 · Trên-dưới",
        "st": 9,
        "ord": "穴 (huyệt) → 牙 (nha)",
        "rad": "穴 (huyệt – hang, lỗ)",
        "mean": "mặc, xỏ qua",
        "tip": "穴 (lỗ) + 牙 (răng, vật nhọn) → xỏ vật nhọn XUYÊN QUA lỗ → MẶC, ĐI (giày/quần áo).",
        "cf": "空 (kōng – \"trống rỗng\")",
        "w": "穿衣服 / 穿鞋 / 穿得多"
      }
    ],
    "colloFull": [
      {
        "zh": "穿衣服",
        "py": "chuān yīfu",
        "vn": "mặc quần áo"
      },
      {
        "zh": "穿得少",
        "py": "chuān de shǎo",
        "vn": "mặc ít"
      },
      {
        "zh": "穿白衣服",
        "py": "chuān bái yīfu",
        "vn": "mặc áo trắng"
      },
      {
        "zh": "穿得多",
        "py": "chuān de duō",
        "vn": "mặc nhiều"
      }
    ],
    "patterns": [
      {
        "s": "穿 + 衣服",
        "m": "Mặc quần áo"
      },
      {
        "s": "穿 (mặc vào người) — quần áo, giày đều dùng 穿"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Bên ngoài lạnh quá, bạn mặc thêm một cái áo đi.",
        "answer": "外面太冷了，你穿一件衣服吧。",
        "answerPy": "Wàimiàn tài lěng le, nǐ chuān yí jiàn yīfu ba.",
        "note": "Lượng từ của 衣服 là 件.",
        "pair": "太……了"
      },
      {
        "promptLang": "vi",
        "prompt": "Em trai tôi hôm nay mặc áo trắng.",
        "answer": "我弟弟今天穿白衣服。",
        "answerPy": "Wǒ dìdi jīntiān chuān bái yīfu.",
        "note": "Quần áo, giày đều dùng 穿.",
        "pair": "穿 + N"
      }
    ]
  },
  {
    "n": 7,
    "zh": "进",
    "py": "jìn",
    "pos": "Động từ",
    "vn": "vào, đi vào",
    "hv": "tiến",
    "em": "🚪",
    "lesson": 3,
    "ex_zh": "我们进房间吧。",
    "ex_py": "Wǒmen jìn fángjiān ba.",
    "ex_vn": "Chúng ta vào phòng đi.",
    "exList": [
      {
        "zh": "我们进房间吧。",
        "py": "Wǒmen jìn fángjiān ba.",
        "vn": "Chúng ta vào phòng đi."
      },
      {
        "zh": "请进！",
        "py": "Qǐng jìn!",
        "vn": "Mời vào!"
      },
      {
        "zh": "他刚进公司工作。",
        "py": "Tā gāng jìn gōngsī gōngzuò.",
        "vn": "Anh ấy vừa mới vào công ty làm việc."
      }
    ],
    "hanzi": [
      {
        "c": "进",
        "p": "jìn",
        "type": "半包围 · Bán bao (辶)",
        "st": 7,
        "ord": "井 (tỉnh) → 辶 (viết sau cùng)",
        "rad": "辶 (sước – đi)",
        "mean": "vào, tiến vào",
        "tip": "Bộ 辶 (đi) + 井 (giếng, lối vào) → bước chân TIẾN VÀO một không gian.",
        "cf": "出 (chū – \"ra\", trái nghĩa, đã học Bài 2)",
        "w": "进来 / 进房间 / 请进"
      }
    ],
    "colloFull": [
      {
        "zh": "进来",
        "py": "jìnlái",
        "vn": "vào đây"
      },
      {
        "zh": "进去",
        "py": "jìnqù",
        "vn": "đi vào"
      },
      {
        "zh": "进教室",
        "py": "jìn jiàoshì",
        "vn": "vào lớp"
      },
      {
        "zh": "请进",
        "py": "qǐng jìn",
        "vn": "mời vào"
      }
    ],
    "patterns": [
      {
        "s": "进 + nơi chốn",
        "m": "Vào chỗ nào: 进教室"
      },
      {
        "s": "进来 (vào chỗ tôi) ↔ 进去 (vào chỗ kia)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Mời vào, bạn ngồi một chút.",
        "answer": "请进，你坐一下。",
        "answerPy": "Qǐng jìn, nǐ zuò yíxià.",
        "note": "请进 — câu mời khách vào nhà.",
        "pair": "请 + V"
      },
      {
        "promptLang": "vi",
        "prompt": "Thầy đã vào lớp rồi, các bạn đừng nói chuyện.",
        "answer": "老师已经进教室了，你们别说话。",
        "answerPy": "Lǎoshī yǐjīng jìn jiàoshì le, nǐmen bié shuōhuà.",
        "note": "进 + nơi chốn — vào chỗ nào.",
        "pair": "已经……了"
      }
    ]
  },
  {
    "n": 8,
    "zh": "弟弟",
    "py": "dìdi",
    "pos": "Danh từ",
    "vn": "em trai",
    "hv": "đệ đệ",
    "em": "👦",
    "lesson": 4,
    "ex_zh": "我弟弟让我帮他找个房子。",
    "ex_py": "Wǒ dìdi ràng wǒ bāng tā zhǎo ge fángzi.",
    "ex_vn": "Em trai tớ nhờ tớ tìm giúp nó một căn nhà.",
    "exList": [
      {
        "zh": "我弟弟让我帮他找个房子。",
        "py": "Wǒ dìdi ràng wǒ bāng tā zhǎo ge fángzi.",
        "vn": "Em trai tớ nhờ tớ tìm giúp nó một căn nhà."
      },
      {
        "zh": "我弟弟比我小两岁。",
        "py": "Wǒ dìdi bǐ wǒ xiǎo liǎng suì.",
        "vn": "Em trai tôi nhỏ hơn tôi 2 tuổi."
      },
      {
        "zh": "弟弟在学校学习汉语。",
        "py": "Dìdi zài xuéxiào xuéxí Hànyǔ.",
        "vn": "Em trai đang học tiếng Trung ở trường."
      }
    ],
    "hanzi": [
      {
        "c": "弟",
        "p": "dì",
        "type": "独体字 · Chữ đơn",
        "st": 7,
        "ord": "丷→丨→一→㇃→一→一",
        "rad": "弓 (cung, biến thể)",
        "mean": "em trai",
        "tip": "Hình sợi dây quấn quanh cây gậy theo thứ tự dưới lên → chỉ THỨ BẬC dưới trong nhà = em trai.",
        "cf": "第 (dì – \"thứ tự\", đã học Bài 9)",
        "w": "弟弟 / 兄弟"
      }
    ],
    "colloFull": [
      {
        "zh": "我弟弟",
        "py": "wǒ dìdi",
        "vn": "em trai tôi"
      },
      {
        "zh": "弟弟的手机",
        "py": "dìdi de shǒujī",
        "vn": "điện thoại của em"
      },
      {
        "zh": "两个弟弟",
        "py": "liǎng gè dìdi",
        "vn": "hai đứa em trai"
      },
      {
        "zh": "弟弟上学",
        "py": "dìdi shàngxué",
        "vn": "em đi học"
      }
    ],
    "patterns": [
      {
        "s": "ai + 弟弟",
        "m": "Em trai của ai"
      },
      {
        "s": "哥哥 · 弟弟 · 姐姐 — ba cách gọi anh chị em"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Em trai tôi cao hơn tôi.",
        "answer": "我弟弟比我高。",
        "answerPy": "Wǒ dìdi bǐ wǒ gāo.",
        "note": "Sau 比 KHÔNG dùng 很.",
        "pair": "A 比 B + Adj"
      },
      {
        "promptLang": "vi",
        "prompt": "Em trai tôi đang giặt quần áo.",
        "answer": "我弟弟正在洗衣服呢。",
        "answerPy": "Wǒ dìdi zhèngzài xǐ yīfu ne.",
        "note": "正在 đầu câu, 呢 cuối câu.",
        "pair": "正在……呢"
      }
    ]
  },
  {
    "n": 9,
    "zh": "近",
    "py": "jìn",
    "pos": "Tính từ",
    "vn": "gần",
    "hv": "cận",
    "em": "📍",
    "lesson": 4,
    "ex_zh": "他也希望能住得近一点儿。",
    "ex_py": "Tā yě xīwàng néng zhù de jìn yìdiǎnr.",
    "ex_vn": "Nó cũng hy vọng có thể ở gần hơn một chút.",
    "exList": [
      {
        "zh": "他也希望能住得近一点儿。",
        "py": "Tā yě xīwàng néng zhù de jìn yìdiǎnr.",
        "vn": "Nó cũng hy vọng có thể ở gần hơn một chút."
      },
      {
        "zh": "我家离学校很近。",
        "py": "Wǒ jiā lí xuéxiào hěn jìn.",
        "vn": "Nhà tôi cách trường học rất gần."
      },
      {
        "zh": "这儿离公司近吗？",
        "py": "Zhèr lí gōngsī jìn ma?",
        "vn": "Ở đây cách công ty có gần không?"
      }
    ],
    "hanzi": [
      {
        "c": "近",
        "p": "jìn",
        "type": "半包围 · Bán bao (辶)",
        "st": 7,
        "ord": "斤 (cân) → 辶 (viết sau cùng)",
        "rad": "辶 (sước – đi)",
        "mean": "gần",
        "tip": "Bộ 辶 (đi) + 斤 (rìu, khoảng cách ngắn) → đi một đoạn NGẮN là tới = GẦN.",
        "cf": "远 (yuǎn – trái nghĩa, đã học Bài 7)",
        "w": "很近 / 附近 / 住得近"
      }
    ],
    "colloFull": [
      {
        "zh": "很近",
        "py": "hěn jìn",
        "vn": "rất gần"
      },
      {
        "zh": "不近",
        "py": "bú jìn",
        "vn": "không gần"
      },
      {
        "zh": "离这儿很近",
        "py": "lí zhèr hěn jìn",
        "vn": "cách đây rất gần"
      },
      {
        "zh": "近一点儿",
        "py": "jìn yìdiǎnr",
        "vn": "gần một chút"
      }
    ],
    "patterns": [
      {
        "s": "A + 离 + B + 很近",
        "m": "A cách B rất gần"
      },
      {
        "s": "近 ↔ 远 — gần và xa"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Nhà tôi cách trường rất gần, đi bộ mười phút.",
        "answer": "我家离学校很近，走路十分钟。",
        "answerPy": "Wǒ jiā lí xuéxiào hěn jìn, zǒulù shí fēnzhōng.",
        "note": "近 ↔ 远 — gần và xa.",
        "pair": "A 离 B 很近"
      },
      {
        "promptLang": "vi",
        "prompt": "Bệnh viện gần hơn sân bay.",
        "answer": "医院比机场近。",
        "answerPy": "Yīyuàn bǐ jīchǎng jìn.",
        "note": "Sau 比 dùng tính từ trần.",
        "pair": "A 比 B + Adj"
      }
    ]
  }
];

const wuData = [
  {img:'❄️',label:'雪',py:'xuě',letter:'A'},
  {img:'👔',label:'穿',py:'chuān',letter:'B'},
  {img:'🚪',label:'进',py:'jìn',letter:'C'},
  {img:'👦',label:'弟弟',py:'dìdi',letter:'D'},
  {img:'👰',label:'妻子',py:'qīzi',letter:'E'},
  {img:'🌡️',label:'度',py:'dù',letter:'F'},
];

var dialogData = [
  {scene:'在教室 · Giờ giấc sinh hoạt',
   preQuiz:[
     {q:'女的每天几点起床？',opts:['五点多','六点多','七点多'],ans:1},
     {q:'女的每天晚上几点睡觉？',opts:['九点','十点','十一点'],ans:1},
   ],
   lines:[
     {sp:0,zh:'你每天早上几点起床？',py:'Nǐ měitiān zǎoshang jǐ diǎn qǐchuáng?',vn:'Mỗi sáng bạn thức dậy lúc mấy giờ?'},
     {sp:1,zh:'六点多。',py:'Liù diǎn duō.',vn:'Hơn 6 giờ một chút.'},
     {sp:0,zh:'你比我早起一个小时。',py:'Nǐ bǐ wǒ zǎo qǐ yí ge xiǎoshí.',vn:'Bạn dậy sớm hơn tớ một tiếng cơ à.'},
     {sp:1,zh:'我睡得也早，我每天晚上十点就睡觉。早睡早起身体好。',py:'Wǒ shuì de yě zǎo, wǒ měitiān wǎnshang shí diǎn jiù shuìjiào. Zǎo shuì zǎo qǐ shēntǐ hǎo.',vn:'Tớ ngủ cũng sớm nữa, mỗi tối 10 giờ tớ đã đi ngủ rồi. Ngủ sớm dậy sớm tốt cho sức khỏe.'},
   ]},
  {scene:'在朋友家 · Mời khách ăn cơm',
   preQuiz:[
     {q:'男的觉得女的吃得怎么样？',opts:['吃得太少','吃得刚好','吃得太多'],ans:0},
     {q:'谁做饭做得更好？',opts:['男的','男的的妻子','两人一样'],ans:1},
   ],
   lines:[
     {sp:0,zh:'再来点儿米饭吧，你吃得太少了。',py:'Zài lái diǎnr mǐfàn ba, nǐ chī de tài shǎo le.',vn:'Ăn thêm chút cơm nữa đi, bạn ăn ít quá.'},
     {sp:1,zh:'不少了，今天吃得很好，太谢谢你了。',py:'Bù shǎo le, jīntiān chī de hěn hǎo, tài xièxie nǐ le.',vn:'Không ít đâu, hôm nay tớ ăn ngon lắm, cảm ơn bạn rất nhiều nhé.'},
     {sp:0,zh:'你做饭做得怎么样？',py:'Nǐ zuò fàn zuò de zěnmeyàng?',vn:'Bạn nấu ăn thế nào?'},
     {sp:1,zh:'不怎么样，我妻子比我做得好。',py:'Bù zěnmeyàng, wǒ qīzi bǐ wǒ zuò de hǎo.',vn:'Không ra làm sao cả, vợ tớ nấu ngon hơn tớ nhiều.'},
   ]},
  {scene:'在家门口 · Trời tuyết lạnh',
   preQuiz:[
     {q:'今天天气怎么样？',opts:['下雪，很冷','下雨','很热'],ans:0},
     {q:'大概多少度？',opts:['零下十度','零度','十度'],ans:0},
     {q:'他们决定怎么做？',opts:['进房间','继续在外面','去买衣服'],ans:0},
   ],
   lines:[
     {sp:0,zh:'下雪了，今天真冷。',py:'Xià xuě le, jīntiān zhēn lěng.',vn:'Tuyết rơi rồi, hôm nay lạnh thật.'},
     {sp:1,zh:'有零下十度吧。',py:'Yǒu líng xià shí dù ba.',vn:'Phải âm 10 độ ấy nhỉ.'},
     {sp:0,zh:'是啊，你穿得太少了，我们进房间吧。',py:'Shì a, nǐ chuān de tài shǎo le, wǒmen jìn fángjiān ba.',vn:'Đúng thế, bạn mặc ít quá, chúng ta vào phòng đi.'},
     {sp:1,zh:'好吧。',py:'Hǎo ba.',vn:'Được thôi.'},
   ]},
  {scene:'在家里 · Nhờ tìm nhà',
   preQuiz:[
     {q:'女的在忙什么？',opts:['帮弟弟找房子','找工作','做饭'],ans:0},
     {q:'弟弟为什么想换房子？',opts:['家离公司太远','房子太小','房租太贵'],ans:0},
   ],
   lines:[
     {sp:0,zh:'你在忙什么呢？',py:'Nǐ zài máng shénme ne?',vn:'Bạn đang bận gì thế?'},
     {sp:1,zh:'我弟弟让我帮他找个房子。现在家离公司住得远，真的很累。',py:'Wǒ dìdi ràng wǒ bāng tā zhǎo ge fángzi. Xiànzài jiā lí gōngsī zhù de yuǎn, zhēnde hěn lèi.',vn:'Em trai tớ nhờ tớ tìm giúp nó một căn nhà. Hiện tại nhà nó ở cách xa công ty quá, đi lại mệt lắm.'},
     {sp:0,zh:'是啊，他也希望能住得近一点儿。',py:'Shì a, tā yě xīwàng néng zhù de jìn yìdiǎnr.',vn:'Ừ đúng vậy, nó cũng hy vọng có thể ở gần hơn một chút.'},
   ]},
];

// ══════════════════════════════════════════
// PHẦN 1 · GHÉP TỪ (Collocation)
// ══════════════════════════════════════════
var matchData = [
  {left:'穿',right:'衣服'},
  {left:'进',right:'房间'},
  {left:'下',right:'雪'},
  {left:'零',right:'下'},
  {left:'近',right:'一点儿'},
  {left:'得',right:'很好'},
];

// ══════════════════════════════════════════
// PHẦN 2 · NGHE — tình huống MỚI: giải chạy marathon mùa đông.
// Ôn lại 已经(Bài 4/9/10), 一下(Bài 3), 远(Bài 7).
// ══════════════════════════════════════════
var listenData = {
  type: 'workbook',
  audio: '/audio/bai-12/listen-full.mp3',
  dictation: [
    {num:1, lines:[
      {pre:'你今天', blank:'起得真早', post:'。', py:'Nǐ jīntiān qǐ de zhēn zǎo.', vn:'Hôm nay bạn dậy sớm thật đấy.'},
    ]},
    {num:2, lines:[
      {pre:'再来点儿米饭吧，', blank:'你吃得太少了', post:'。', py:'Zài lái diǎnr mǐfàn ba, nǐ chī de tài shǎo le.', vn:'Ăn thêm chút cơm đi, bạn ăn ít quá.'},
    ]},
    {num:3, lines:[
      {pre:'下雪了，', blank:'今天真冷', post:'。', py:'Xiàxuě le, jīntiān zhēn lěng.', vn:'Tuyết rơi rồi, hôm nay lạnh thật.'},
    ]},
    {num:4, lines:[
      {pre:'我觉得很热，', blank:'今天穿得太多了', post:'。', py:'Wǒ juéde hěn rè, jīntiān chuān de tài duō le.', vn:'Tôi thấy nóng quá, hôm nay mặc nhiều đồ quá.'},
    ]},
    {num:5, lines:[
      {pre:'这件衣服', blank:'比弟弟送给我的那件漂亮', post:'。', py:'Zhè jiàn yīfu bǐ dìdi sòng gěi wǒ de nà jiàn piàoliang.', vn:'Bộ quần áo này đẹp hơn bộ mà em trai tặng tôi.'},
    ]},
    {num:6, lines:[
      {speaker:'男', pre:'我今天早上', blank:'七点就起床了', post:'。', py:'Wǒ jīntiān zǎoshang qī diǎn jiù qǐchuáng le.', vn:'Sáng nay tôi 7 giờ đã dậy rồi.'},
      {speaker:'女', pre:'你比我', blank:'早起一个小时呢', post:'。', py:'Nǐ bǐ wǒ zǎo qǐ yí gè xiǎoshí ne.', vn:'Bạn dậy sớm hơn tôi một tiếng đấy.'},
    ]},
    {num:7, lines:[
      {speaker:'女', pre:'你做饭', blank:'做得怎么样', post:'？', py:'Nǐ zuò fàn zuò de zěnmeyàng?', vn:'Bạn nấu ăn thế nào?'},
      {speaker:'男', pre:'不怎么样，', blank:'我妻子比我做得好', post:'。', py:'Bù zěnmeyàng, wǒ qīzi bǐ wǒ zuò de hǎo.', vn:'Không giỏi lắm, vợ tôi nấu ngon hơn tôi.'},
    ]},
    {num:8, lines:[
      {speaker:'男', pre:'今天天气', blank:'真冷啊', post:'！', py:'Jīntiān tiānqì zhēn lěng a!', vn:'Hôm nay trời lạnh thật đấy!'},
      {speaker:'女', pre:'是啊，我觉得', blank:'晚上可能下雪', post:'。', py:'Shì a, wǒ juéde wǎnshang kěnéng xiàxuě.', vn:'Đúng vậy, tôi thấy tối nay có thể có tuyết.'},
    ]},
    {num:9, lines:[
      {speaker:'女', pre:'大卫很喜欢', blank:'跑步', post:'。', py:'Dàwèi hěn xǐhuan pǎobù.', vn:'David rất thích chạy bộ.'},
      {speaker:'男', pre:'是啊，他', blank:'跑得非常快', post:'。', py:'Shì a, tā pǎo de fēicháng kuài.', vn:'Đúng vậy, cậu ấy chạy rất nhanh.'},
    ]},
    {num:10, lines:[
      {speaker:'男', pre:'你今天', blank:'穿得真漂亮', post:'。', py:'Nǐ jīntiān chuān de zhēn piàoliang.', vn:'Hôm nay bạn mặc đẹp thật đấy.'},
      {speaker:'女', pre:'谢谢，', blank:'今天是我的生日', post:'。', py:'Xièxie, jīntiān shì wǒ de shēngrì.', vn:'Cảm ơn, hôm nay là sinh nhật tôi.'},
    ]},
  ],
  mc: [
    {num:11, options:['学习好','太累了','对身体好'], ans:2,
     explain:'男：你每天几点睡觉？女：我每天十点就睡觉了，早睡早起身体好。问：女的为什么睡得很早？ → 对身体好。'},
    {num:12, options:['很冷','不太冷','很热'], ans:0,
     explain:'男：明天天气怎么样？女：零下十度，比今天冷多了。你要多穿点儿衣服。问：明天冷吗？ → 很冷。'},
    {num:13, options:['男的','男的的妻子','女的'], ans:1,
     explain:'女：你们家谁做饭做得好？男：我做得还可以，我妻子做的比我好吃。问：谁做饭做得最好？ → 男的的妻子。'},
    {num:14, options:['离公司远','工作太累','离家有点儿远'], ans:0,
     explain:'男：你这几天在忙什么呢？女：我弟弟让我帮他找个房子，他家离公司有点儿远。问：她弟弟为什么要找个房子？ → 离公司远。'},
    {num:15, options:['不太好','非常好','还可以'], ans:2,
     explain:'男：儿子这次考试考得怎么样？女：还不错，比上次好一些。问：儿子考得怎么样？ → 还可以。'},
  ],
};

// ══════════════════════════════════════════
// PHẦN 3a · ĐIỀN TỪ — hội thoại MỚI: ngày chạy marathon mùa đông
// ══════════════════════════════════════════
var fillData = [
  {pre:'今天是',blank:'零',post:'下五度，很冷。',hint:'(số 0, âm)',ans:'零'},
  {pre:'弟弟',blank:'穿',post:'得不多，我让他多穿点儿。',hint:'(mặc)',ans:'穿'},
  {pre:'他跑步的时候穿',blank:'得',post:'不多，说这样才好。',hint:'(trợ từ nối bổ ngữ trạng thái)',ans:'得',exp:'Động từ + 得 + Tính từ = miêu tả mức độ/trạng thái của hành động.'},
  {pre:'妻子跑',blank:'得',post:'比我快多了。',hint:'(trợ từ nối bổ ngữ trạng thái)',ans:'得',exp:'Khi kết hợp so sánh: Động từ + 得 + 比 + B + Tính từ.'},
  {pre:'她已经',blank:'进',post:'房间了，我还在后面。',hint:'(vào, tiến vào)',ans:'进'},
  {pre:'房间里比外面好，离家也',blank:'近',post:'，走一下就到了。',hint:'(gần)',ans:'近'},
  {pre:'',blank:'弟弟',post:'说明年还要去跑步。',hint:'(em trai)',ans:'弟弟'},
  {pre:'',blank:'妻子',post:'在家等我们，还给我们做菜了。',hint:'(vợ)',ans:'妻子'},
];

// ══════════════════════════════════════════
// PHẦN 3b · SẮP XẾP
// ══════════════════════════════════════════
var sortData = [
  {words:['现在','是','零','下','十','度','。'],ans:'现在是零下十度。',audio:'现在是零下十度。'},
  {words:['弟弟','穿','得','太','少','了','。'],ans:'弟弟穿得太少了。',audio:'弟弟穿得太少了。'},
  {words:['妻子','跑','得','比','我','快','。'],ans:'妻子跑得比我快。',audio:'妻子跑得比我快。'},
  {words:['大家','都','进','房间','休息','了','。'],ans:'大家都进房间休息了。',audio:'大家都进房间休息了。'},
  {words:['我家','离','公司','很','近','。'],ans:'我家离公司很近。',audio:'我家离公司很近。'},
  {words:['外面','下雪','了','，','真','冷','啊','。'],ans:'外面下雪了，真冷啊。',audio:'外面下雪了，真冷啊。'},
];

// ══════════════════════════════════════════
// PHẦN 3c · SỬA LỖI SAI
// ══════════════════════════════════════════
var errorFixData = [
  {wrong:'他跑很快得。',
   opts:['他跑得很快。','他跑很快得。','他得跑很快。','很快他跑得。'],ans:0,
   exp:'得 phải đứng NGAY SAU động từ, rồi mới đến phần miêu tả mức độ/trạng thái: Động từ + 得 + Tính từ.'},
  {wrong:'弟弟穿不得多。',
   opts:['弟弟穿得不多。','弟弟穿不得多。','弟弟不穿得多。','弟弟穿多得不。'],ans:0,
   exp:'Phủ định (不) đứng SAU 得, không chen vào giữa động từ và 得: Động từ + 得 + 不 + Tính từ.'},
  {wrong:'她跑得我比快。',
   opts:['她跑得比我快。','她跑得我比快。','她比我快跑得。','跑得她比我快。'],ans:0,
   exp:'Khi kết hợp so sánh với bổ ngữ trạng thái, 比 + đối tượng đứng NGAY SAU 得, trước tính từ: Động từ + 得 + 比 + B + Tính từ.'},
  {wrong:'我们房间进休息了。',
   opts:['我们进房间休息了。','我们房间进休息了。','我们进休息房间了。','房间我们进休息了。'],ans:0,
   exp:'进 (động từ) phải đứng NGAY TRƯỚC tân ngữ chỉ nơi chốn (房间), không đảo tân ngữ lên trước động từ.'},
  {wrong:'离家近很。',
   opts:['离家很近。','离家近很。','很离家近。','近离家很。'],ans:0,
   exp:'Phó từ mức độ 很 đứng TRƯỚC tính từ (近), không đặt phía sau: 很 + Tính từ.'},
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
  intro: 'Mỗi câu hỏi là một tình huống thật trong đời sống, dùng đúng từ vựng và mẫu câu của Bài 12. Bấm 🎙️ rồi trả lời bằng tiếng Trung — AI sẽ nghe, ghi lại câu bạn nói và chấm điểm theo Nội dung · Mẫu câu · Từ vựng · Độ trôi chảy. Nên tự trả lời trước rồi mới mở “Câu mẫu” để đối chiếu.',
  tasks: [
    {
      situation: 'Bạn cùng lớp hỏi về giờ giấc sinh hoạt của bạn.',
      q_zh: '你每天睡得早吗？起得早不早？',
      q_py: 'Nǐ měi tiān shuì de zǎo ma? Qǐ de zǎo bu zǎo?',
      q_vn: 'Hằng ngày bạn ngủ sớm không? Dậy có sớm không?',
      grammar: { label: '动词 + 得 + tính từ (睡得早 / 起得早)', any: ['得'] },
      need: [
        { label: 'Dùng 得 với 睡 hoặc 起', any: ['睡得', '起得', '得'] },
        { label: 'Nói giờ cụ thể', any: ['点', '半'] },
        { label: 'Dùng 早 hoặc 晚', any: ['早', '晚'] }
      ],
      bonus: { label: 'Thêm câu nói về sức khoẻ (早睡早起身体好)', any: ['身体', '好'] },
      vocab: ['得', '近'],
      minLen: 12,
      sample: '我睡得很早，每天晚上十点就睡觉，早上六点多起床。早睡早起身体好。',
      sample_py: 'Wǒ shuì de hěn zǎo, měi tiān wǎnshang shí diǎn jiù shuìjiào, zǎoshang liù diǎn duō qǐchuáng. Zǎo shuì zǎo qǐ shēntǐ hǎo.',
      sample_vn: 'Tôi ngủ rất sớm, tối nào cũng 10 giờ là đi ngủ, sáng hơn 6 giờ dậy. Ngủ sớm dậy sớm thì khoẻ.',
      tip: 'Bổ ngữ trạng thái: động từ + 得 + tính từ — 睡得早、吃得多、说得好.'
    },
    {
      situation: 'Bạn được mời đến nhà bạn ăn cơm, chủ nhà mời thêm.',
      q_zh: '再来点儿米饭吧，你吃得太少了。你做饭做得怎么样？',
      q_py: 'Zài lái diǎnr mǐfàn ba, nǐ chī de tài shǎo le. Nǐ zuòfàn zuò de zěnmeyàng?',
      q_vn: 'Ăn thêm chút cơm đi, bạn ăn ít quá. Bạn nấu ăn thế nào?',
      grammar: { label: '我做饭做得… / …比我做得好', any: ['得'] },
      need: [
        { label: 'Dùng 得 nhận xét việc nấu ăn', any: ['做得', '得'] },
        { label: 'Trả lời về việc ăn no hay ít', any: ['不少', '吃', '饱', '够', '谢谢'] },
        { label: 'So sánh với người khác hoặc tự nhận xét', any: ['比', '不怎么样', '好', '不好'] }
      ],
      bonus: { label: 'Dùng 妻子 / 丈夫 / 妈妈 để so sánh', any: ['妻子', '丈夫', '妈妈', '爸爸'] },
      vocab: ['得', '妻子'],
      minLen: 12,
      sample: '不少了，今天吃得很好，太谢谢你了。我做饭做得不怎么样，我妻子比我做得好。',
      sample_py: 'Bù shǎo le, jīntiān chī de hěn hǎo, tài xièxie nǐ le. Wǒ zuòfàn zuò de bù zěnmeyàng, wǒ qīzi bǐ wǒ zuò de hǎo.',
      sample_vn: 'Không ít đâu, hôm nay tôi ăn rất ngon, cảm ơn bạn nhiều. Tôi nấu ăn không giỏi lắm, vợ tôi nấu ngon hơn tôi.',
      tip: 'Động từ có tân ngữ thì lặp lại động từ: 做饭做得好、说汉语说得好.'
    },
    {
      situation: 'Trời trở lạnh, bạn gặp bạn ở cửa nhà.',
      q_zh: '下雪了，今天真冷，有零下几度吧？你穿得多不多？',
      q_py: 'Xià xuě le, jīntiān zhēn lěng, yǒu língxià jǐ dù ba? Nǐ chuān de duō bu duō?',
      q_vn: 'Tuyết rơi rồi, hôm nay lạnh thật, chắc âm mấy độ nhỉ? Bạn mặc nhiều không?',
      grammar: { label: '零下…度 + 你穿得太少了', any: ['度', '穿得', '得'] },
      need: [
        { label: 'Nói nhiệt độ (零下十度)', any: ['度', '零下', '零'] },
        { label: 'Dùng 穿得 + 多/少', any: ['穿得', '穿', '得'] },
        { label: 'Đề nghị vào nhà hoặc mặc thêm', any: ['进', '房间', '多穿', '衣服', '回'] }
      ],
      bonus: { label: 'Nói về 雪 hoặc 冷', any: ['雪', '冷'] },
      vocab: ['雪', '零', '度', '穿', '进'],
      minLen: 12,
      sample: '有零下十度吧，真冷。你穿得太少了，我们进房间吧。',
      sample_py: 'Yǒu língxià shí dù ba, zhēn lěng. Nǐ chuān de tài shǎo le, wǒmen jìn fángjiān ba.',
      sample_vn: 'Chắc âm mười độ, lạnh thật. Bạn mặc ít quá, chúng ta vào phòng đi.',
      tip: 'Nhiệt độ dưới 0 đọc là 零下 + số + 度: 零下十度.'
    },
    {
      situation: 'Bạn kể chuyện em trai (hoặc bạn) muốn chuyển nhà cho gần công ty.',
      q_zh: '你弟弟（朋友）住得离公司远吗？他想住在哪儿？',
      q_py: 'Nǐ dìdi (péngyou) zhù de lí gōngsī yuǎn ma? Tā xiǎng zhù zài nǎr?',
      q_vn: 'Em trai (bạn) của bạn ở cách công ty có xa không? Anh ấy muốn ở đâu?',
      grammar: { label: '住得远 / 住得近一点儿', any: ['住得', '得'] },
      need: [
        { label: 'Dùng 住得 + 远/近', any: ['住得', '得', '远', '近'] },
        { label: 'Dùng 离 để nói khoảng cách', any: ['离'] },
        { label: 'Nói mong muốn (希望 / 想 + 住得近)', any: ['希望', '想', '找'] }
      ],
      bonus: { label: 'Nói cảm giác (很累 / 太远)', any: ['累', '太'] },
      vocab: ['得', '近', '弟弟'],
      minLen: 12,
      sample: '他现在住得离公司很远，每天很累，所以他希望能住得近一点儿。',
      sample_py: 'Tā xiànzài zhù de lí gōngsī hěn yuǎn, měi tiān hěn lèi, suǒyǐ tā xīwàng néng zhù de jìn yìdiǎnr.',
      sample_vn: 'Giờ cậu ấy ở cách công ty rất xa, ngày nào cũng mệt, nên cậu ấy mong ở gần hơn một chút.',
      tip: '住得近一点儿 = ở gần hơn chút; "一点儿" đặt sau tính từ.'
    },
    {
      situation: 'Giáo viên hỏi bạn tự đánh giá tiếng Trung của mình.',
      q_zh: '你汉语说得怎么样？写汉字写得快吗？',
      q_py: 'Nǐ Hànyǔ shuō de zěnmeyàng? Xiě Hànzì xiě de kuài ma?',
      q_vn: 'Tiếng Trung bạn nói thế nào? Viết chữ Hán có nhanh không?',
      grammar: { label: '说得… / 写得…', any: ['得'] },
      need: [
        { label: 'Dùng 说得 + nhận xét', any: ['说得', '得'] },
        { label: 'Dùng 写得 + nhận xét', any: ['写得', '写'] },
        { label: 'Nói mức độ (不错 / 不太好 / 很慢)', any: ['不错', '好', '不太好', '慢', '快', '还可以'] }
      ],
      bonus: { label: 'So sánh với bạn học (比…)', any: ['比'] },
      vocab: ['得'],
      minLen: 12,
      sample: '我汉语说得还可以，但是写汉字写得很慢，同学都比我写得快。',
      sample_py: 'Wǒ Hànyǔ shuō de hái kěyǐ, dànshì xiě Hànzì xiě de hěn màn, tóngxué dōu bǐ wǒ xiě de kuài.',
      sample_vn: 'Tiếng Trung tôi nói tạm được, nhưng viết chữ Hán rất chậm, bạn học đều viết nhanh hơn tôi.',
      tip: 'So sánh có bổ ngữ: A 比 B + động từ + 得 + tính từ — 他比我写得快.'
    }
  ]
};

// ══════════════════════════════════════════
// LUYỆN DỊCH — dùng từ bài 12 + ôn lại từ bài 1-11 và HSK1
// ══════════════════════════════════════════
var translateData = [
  {vi:'Anh ấy nói tiếng Trung rất tốt.', zh:'他汉语说得很好。', py:'Tā Hànyǔ shuō de hěn hǎo.'},
  {vi:'Món ăn vợ tôi nấu rất ngon.', zh:'我妻子做的菜很好吃。', py:'Wǒ qīzi zuò de cài hěn hǎochī.'},
  {vi:'Hôm nay không độ, có tuyết rơi.', zh:'今天零度，下雪了。', py:'Jīntiān líng dù, xià xuě le.'},
  {vi:'Anh ấy mặc áo mới vào phòng học.', zh:'他穿新衣服进教室。', py:'Tā chuān xīn yīfu jìn jiàoshì.'},
];

// ══════════════════════════════════════════
// LUYỆN DỊCH (chiều Trung→Việt) — noi dung KHAC voi chieu Viet->Trung o tren
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:'Vợ tôi nói rất giỏi, cũng nấu ăn rất ngon.', zh:'我妻子说得很好，也做得很好吃。', py:'Wǒ qīzi shuō de hěn hǎo, yě zuò de hěn hǎochī.'},
  {vi:'Em trai mặc áo mới rồi vào phòng học.', zh:'弟弟穿新衣服进了教室。', py:'Dìdi chuān xīn yīfu jìnle jiàoshì.'},
  {vi:'Bên ngoài không độ, có tuyết rơi, rất lạnh.', zh:'外面零度，下雪了，很冷。', py:'Wàimiàn líng dù, xià xuě le, hěn lěng.'},
  {vi:'Anh ấy nói giỏi hơn tôi.', zh:'他比我说得好。', py:'Tā bǐ wǒ shuō de hǎo.'},
];
