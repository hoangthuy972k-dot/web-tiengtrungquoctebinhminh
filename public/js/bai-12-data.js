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
// PHẦN 1 · GHÉP TỪ (Collocation) — ghép hai nửa thành cụm dùng được ngay
// Không copy câu bài khoá — chỉ ghép CỤM TỪ để phản xạ collocation.
// ══════════════════════════════════════════
var matchData = [
  {left:'零下',right:'五度'},
  {left:'今天比昨天',right:'冷三度'},
  {left:'外面很冷，快',right:'进房间吧'},
  {left:'我有一个',right:'弟弟'},
  {left:'家离学校',right:'很近'},
  {left:'他汉字',right:'写得很漂亮'},
  {left:'晚上十点',right:'就睡觉了'},
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
// PHẦN 3a · ĐIỀN TỪ — mỗi câu một tình huống mới (V + 得 + adj · 比 (2) · 还 + từ mới bài 12, ôn bài 1–11 và HSK1)
// ══════════════════════════════════════════
var fillData = [
  {pre:'“你昨天晚上睡',blank:'得',post:'怎么样？” — “很好，十点就睡了。”',hint:'(… thế nào — nối động từ với lời nhận xét)',ans:'得',exp:'Động từ + 得 + 怎么样 / tính từ: 睡得怎么样 = ngủ thế nào; 得 đứng ngay sau động từ.'},
  {pre:'“这是我妈妈做',blank:'的',post:'面条，你吃吧。” — “太好吃了！”',hint:'(… mà — nối với danh từ)',ans:'的',exp:'Trước danh từ dùng 的 (妈妈做的面条); sau động từ, trước lời nhận xét mới dùng 得 (做得很好).'},
  {pre:'Ngoài trời đang có tuyết, bạn dặn em: “天太冷了，你多',blank:'穿',post:'一件衣服吧。”',hint:'(mặc)',ans:'穿',exp:'穿 + quần áo = mặc: 多穿一件衣服 = mặc thêm một chiếc áo.'},
  {pre:'“你的房间是多少号？” — “三',blank:'零',post:'五号。”',hint:'(số không)',ans:'零',exp:'Số 0 trong số phòng, số điện thoại đọc là 零: 三零五 = 305.'},
  {pre:'Có người gõ cửa: “可以',blank:'进',post:'来吗？” — “请进！”',hint:'(vào)',ans:'进',exp:'进来 = đi vào (về phía người nói); mời vào: 请进.'},
  {pre:'“你家离公司远吗？” — “不远，很',blank:'近',post:'，坐公共汽车十分钟。”',hint:'(gần)',ans:'近',exp:'A 离 B + 很近 / 很远: nhà cách công ty rất gần; 近 là tính từ, đứng sau 很.'},
  {pre:'“你',blank:'弟弟',post:'多大了？” — “他今年十六岁，比我小四岁。”',hint:'(em trai)',ans:'弟弟',exp:'弟弟 = em trai; hỏi tuổi người trẻ dùng 多大.'},
  {pre:'王先生和他',blank:'妻子',post:'都是老师，在一个学校工作。',hint:'(vợ)',ans:'妻子',exp:'妻子 = vợ, 丈夫 = chồng: 他和他妻子 = anh ấy và vợ anh ấy.'},
  {pre:'“你看，外面下',blank:'雪',post:'了，都是白的！” — “真漂亮啊！”',hint:'(tuyết)',ans:'雪',exp:'下雪 = tuyết rơi (giống 下雨 = mưa); 下雪了 = tuyết rơi rồi.'},
  {pre:'“你和你哥哥谁开车开得好？” — “哥哥开得',blank:'比',post:'我好。”',hint:'(hơn, so với)',ans:'比',exp:'So sánh cách làm: A + V得 + 比 + B + tính từ: 开得比我好 (cũng nói 比我开得好).'},
  {pre:'“小王打篮球打得很好。” — “他弟弟打得比他',blank:'还',post:'好！”',hint:'(còn … hơn)',ans:'还',exp:'Sau 比 muốn nhấn mạnh dùng 还 + tính từ (比他还好), không dùng 很 / 非常.'},
  {pre:'“你汉语说得怎么样？” — “说得',blank:'不',post:'太好，我还要多学习。”',hint:'(không)',ans:'不',exp:'Phủ định bổ ngữ trạng thái: V得 + 不 + tính từ (说得不太好); 不 không đặt trước động từ.'},
];

// ══════════════════════════════════════════
// PHẦN 3b · SẮP XẾP — câu MỚI, dùng V + 得 + adj / 比 / 还
// ══════════════════════════════════════════
var sortData = [
  {words:['哥哥','写','汉字','写','得','很','快','。'],ans:'哥哥写汉字写得很快。',audio:'哥哥写汉字写得很快。'},
  {words:['北京','今天','零','下','八','度','。'],ans:'北京今天零下八度。',audio:'北京今天零下八度。',alt:['今天北京零下八度。']},
  {words:['弟弟','比','我','吃','得','多','。'],ans:'弟弟比我吃得多。',audio:'弟弟比我吃得多。'},
  {words:['你','昨天','睡','得','好','吗','？'],ans:'你昨天睡得好吗？',audio:'你昨天睡得好吗？',alt:['昨天你睡得好吗？']},
  {words:['外面','在','下','雪','，','别','开','车','了','。'],ans:'外面在下雪，别开车了。',audio:'外面在下雪，别开车了。'},
  {words:['我们','住','得','离','医院','很','近','。'],ans:'我们住得离医院很近。',audio:'我们住得离医院很近。'},
  {words:['今天','你','来','得','很','早','啊','！'],ans:'今天你来得很早啊！',audio:'今天你来得很早啊！',alt:['你今天来得很早啊！']},
  {words:['妻子','让','我','多','穿','点儿','衣服','。'],ans:'妻子让我多穿点儿衣服。',audio:'妻子让我多穿点儿衣服。'},
];

// ══════════════════════════════════════════
// PHẦN 3c · SỬA LỖI SAI — lỗi học sinh Việt hay mắc
// (得 sau tân ngữ, 的/得, 不 trước động từ, 比…很…, vị trí 比, "5 độ âm", 进去 + nơi chốn, thiếu 得 khi tả cách ở)
// ══════════════════════════════════════════
var errorFixData = [
  {wrong:'他说汉语得很好。',
   opts:['他说汉语说得很好。','他说得汉语很好。','他汉语说的很好。','他说汉语很好得。'],ans:0,
   exp:'Động từ có tân ngữ thì lặp lại động từ rồi mới thêm 得: 说汉语说得很好 (hoặc 汉语说得很好); 得 không dùng 的.'},
  {wrong:'你今天来的很早。',
   opts:['你今天很早来得。','你今天来很早得。','你今天来得很早。','你今天得来很早。'],ans:2,
   exp:'Nhận xét cách làm: động từ + 得 + 很 + tính từ (来得很早); 的 chỉ dùng trước danh từ.'},
  {wrong:'他不写汉字写得好。',
   opts:['他写汉字不写得好。','他写汉字写得不好。','他写汉字写不得好。','他不写汉字写得很好。'],ans:1,
   exp:'不 phủ định phần nhận xét nên đứng SAU 得: 写得不好 = viết không đẹp.'},
  {wrong:'哥哥比我打篮球打得很好。',
   opts:['哥哥打篮球打得比我很好。','哥哥比我打篮球打得非常好。','哥哥打篮球比我打得太好了。','哥哥打篮球打得比我好。'],ans:3,
   exp:'Câu 比 không dùng 很 / 非常 / 太 trước tính từ: 打得比我好 (muốn nhấn mạnh thì dùng 还好 / 好多了).'},
  {wrong:'这个孩子吃得多比我。',
   opts:['这个孩子吃得比我多。','这个孩子比我多吃得。','这个孩子吃比我得多。','这个孩子吃得比我很多。'],ans:0,
   exp:'比 + B đặt ngay sau 得 và trước tính từ: 吃得比我多 (hoặc 比我吃得多); không để 比 cuối câu như tiếng Việt “ăn nhiều hơn tôi”.'},
  {wrong:'今天是五度零下。（ý: âm năm độ）',
   opts:['今天是零五度下。','今天是零下五度。','今天是下零五度。','今天是零下五个度。'],ans:1,
   exp:'Nhiệt độ âm nói 零下 + số + 度 (零下五度), không nói theo tiếng Việt “năm độ âm”; 度 đã là lượng từ, không thêm 个.'},
  {wrong:'外面很冷，快进去教室吧。',
   opts:['外面很冷，快教室进吧。','外面很冷，快进在教室吧。','外面很冷，快进教室吧。','外面很冷，快去教室进吧。'],ans:2,
   exp:'进 + nơi chốn: 进教室 = vào lớp; không đặt 去 giữa 进 và nơi chốn, không thêm 在.'},
  {wrong:'我住离公司很近。（ý: tôi ở gần công ty）',
   opts:['我住得离公司很近。','我住在离公司很近。','我离公司住很近。','我住得很近离公司。'],ans:0,
   exp:'Tả cách ở dùng 住得 + 离…很近: 我住得离公司很近; 离 + nơi chốn đứng trước 很近.'},
];

// ══════════════════════════════════════════
// PHẦN 4 · LUYỆN NÓI 3 TẦNG (tầng 3 có ghi âm thật + chấm điểm AI)
// ══════════════════════════════════════════
// Luyen noi voi AI (mode 'ai-speak'): moi cau hoi la mot tinh huong doi song
// lien quan den bai khoa; hoc sinh tu ghi am cau tra loi, AI nghe lai (nhan
// dien giong noi tieng Trung) roi cham diem theo 4 tieu chi va nhan xet.
var speakingData = {
  mode: 'ai-speak',
  intro: 'Mỗi câu hỏi là một tình huống thật trong đời sống, dùng đúng từ vựng và mẫu câu của Bài 12. Bấm 🎙️ rồi trả lời bằng tiếng Trung — AI sẽ nghe, ghi lại câu bạn nói và chấm điểm theo Nội dung · Mẫu câu · Từ vựng · Độ trôi chảy. Nên tự trả lời trước rồi mới mở “Câu mẫu” để đối chiếu.',
  tasks: [
    {
      situation: 'Bạn cùng lớp hỏi về giờ giấc sinh hoạt của bạn.',
      q_zh: '你每天几点睡觉？睡得早吗？',
      q_py: 'Nǐ měi tiān jǐ diǎn shuìjiào? Shuì de zǎo ma?',
      q_vn: 'Hằng ngày bạn đi ngủ lúc mấy giờ? Bạn ngủ có sớm không?',
      grammar: { label: 'động từ + 得 + tính từ (睡得早 / 睡得不太早)', any: ['得'] },
      need: [
        { label: 'Dùng 睡得 / 起得', any: ['睡得', '起得', '得'] },
        { label: 'Nói giờ cụ thể', any: ['点', '半'] },
        { label: 'Dùng 早 hoặc 晚', any: ['早', '晚'] }
      ],
      bonus: { label: 'Nói giờ dậy buổi sáng (早上…起床)', any: ['起床', '早上'] },
      vocab: ['得'],
      minLen: 12,
      sample: '我睡得不太早，每天晚上十一点多睡觉，早上七点起床。',
      sample_py: 'Wǒ shuì de bú tài zǎo, měi tiān wǎnshang shíyī diǎn duō shuìjiào, zǎoshang qī diǎn qǐchuáng.',
      sample_vn: 'Tôi ngủ không sớm lắm, tối nào cũng hơn 11 giờ mới ngủ, sáng 7 giờ dậy.',
      tip: 'Bổ ngữ trạng thái: động từ + 得 + tính từ — 睡得早; phủ định: 睡得不早.'
    },
    {
      situation: 'Bạn mới đến nhà chơi, hỏi chuyện nấu ăn trong gia đình bạn.',
      q_zh: '你家里谁做饭做得最好？你会做饭吗？',
      q_py: 'Nǐ jiā li shéi zuòfàn zuò de zuì hǎo? Nǐ huì zuòfàn ma?',
      q_vn: 'Trong nhà bạn ai nấu ăn ngon nhất? Bạn có biết nấu ăn không?',
      grammar: { label: '…做饭做得… / …比我做得好', any: ['得'] },
      need: [
        { label: 'Nói người nấu ngon nhất', any: ['妈妈', '爸爸', '妻子', '丈夫', '姐姐', '哥哥', '弟弟', '我'] },
        { label: 'Dùng 做得 + nhận xét', any: ['做得', '得'] },
        { label: 'Nhận xét (好 / 好吃 / 不太好 / 还可以)', any: ['好', '好吃', '不错', '还可以', '不怎么样'] }
      ],
      bonus: { label: 'So sánh bằng 比 (…比我做得好)', any: ['比'] },
      vocab: ['得', '妻子'],
      minLen: 12,
      sample: '我妈妈做饭做得最好，她做的鱼非常好吃。我也会做饭，妈妈比我做得好多了。',
      sample_py: 'Wǒ māma zuòfàn zuò de zuì hǎo, tā zuò de yú fēicháng hǎochī. Wǒ yě huì zuòfàn, māma bǐ wǒ zuò de hǎo duō le.',
      sample_vn: 'Mẹ tôi nấu ăn ngon nhất, cá mẹ nấu rất ngon. Tôi cũng biết nấu, mẹ nấu ngon hơn tôi nhiều.',
      tip: 'Động từ có tân ngữ thì lặp lại động từ: 做饭做得好; trước danh từ dùng 的: 她做的鱼.'
    },
    {
      situation: 'Bạn nước ngoài hỏi về thời tiết lạnh ở quê bạn.',
      q_zh: '你们那儿十二月冷吗？最冷的时候多少度？下雪吗？',
      q_py: 'Nǐmen nàr shí\'èr yuè lěng ma? Zuì lěng de shíhou duōshao dù? Xià xuě ma?',
      q_vn: 'Chỗ bạn tháng mười hai có lạnh không? Lúc lạnh nhất bao nhiêu độ? Có tuyết không?',
      grammar: { label: '最冷的时候 + (零下) + số + 度', any: ['度'] },
      need: [
        { label: 'Nói lạnh hay không (冷 / 不太冷)', any: ['冷', '热', '不冷'] },
        { label: 'Nói có tuyết không (下雪 / 不下雪)', any: ['雪'] },
        { label: 'Nói mặc thế nào (穿…)', any: ['穿', '衣服'] }
      ],
      bonus: { label: 'Dùng 零下 hoặc so sánh 比', any: ['零下', '零', '比'] },
      vocab: ['雪', '零', '度', '穿'],
      minLen: 12,
      sample: '我们那儿十二月不太冷，最冷的时候五度，不下雪，穿两件衣服就可以了。',
      sample_py: 'Wǒmen nàr shí\'èr yuè bú tài lěng, zuì lěng de shíhou wǔ dù, bú xià xuě, chuān liǎng jiàn yīfu jiù kěyǐ le.',
      sample_vn: 'Chỗ chúng tôi tháng mười hai không lạnh lắm, lúc lạnh nhất năm độ, không có tuyết, mặc hai áo là được.',
      tip: 'Nhiệt độ dưới 0 nói 零下 + số + 度: 零下十度; tuyết rơi = 下雪.'
    },
    {
      situation: 'Bạn kể chuyện em trai (hoặc bạn) muốn tìm nhà gần chỗ làm.',
      q_zh: '你弟弟（朋友）住得离公司远吗？他想住在哪儿？',
      q_py: 'Nǐ dìdi (péngyou) zhù de lí gōngsī yuǎn ma? Tā xiǎng zhù zài nǎr?',
      q_vn: 'Em trai (bạn) của bạn ở cách công ty có xa không? Cậu ấy muốn ở đâu?',
      grammar: { label: '住得离… + 远 / 近', any: ['住得', '得'] },
      need: [
        { label: 'Dùng 远 / 近', any: ['远', '近'] },
        { label: 'Dùng 离 để nói khoảng cách', any: ['离'] },
        { label: 'Nói mong muốn (希望 / 想 / 找)', any: ['希望', '想', '找'] }
      ],
      bonus: { label: 'Nói đi lại mất bao lâu (一个多小时)', any: ['小时', '分钟'] },
      vocab: ['得', '近', '弟弟'],
      minLen: 12,
      sample: '我弟弟住得离公司很远，每天坐公共汽车要一个多小时。他想找一个近一点儿的房子。',
      sample_py: 'Wǒ dìdi zhù de lí gōngsī hěn yuǎn, měi tiān zuò gōnggòng qìchē yào yí ge duō xiǎoshí. Tā xiǎng zhǎo yí ge jìn yìdiǎnr de fángzi.',
      sample_vn: 'Em trai tôi ở cách công ty rất xa, ngày nào đi xe buýt cũng mất hơn một tiếng. Cậu ấy muốn tìm một căn nhà gần hơn một chút.',
      tip: '住得离公司很远 = ở cách công ty rất xa; 近一点儿的房子 = căn nhà gần hơn một chút.'
    },
    {
      situation: 'Giáo viên hỏi bạn tự đánh giá tiếng Trung của mình.',
      q_zh: '老师说你汉语说得很好，是吗？汉字写得好不好？',
      q_py: 'Lǎoshī shuō nǐ Hànyǔ shuō de hěn hǎo, shì ma? Hànzì xiě de hǎo bu hǎo?',
      q_vn: 'Cô giáo nói bạn nói tiếng Trung rất giỏi, phải không? Chữ Hán viết có đẹp không?',
      grammar: { label: '汉语说得… / 汉字写得…', any: ['得'] },
      need: [
        { label: 'Nhận xét việc nói (说得…)', any: ['说得', '说'] },
        { label: 'Nhận xét việc viết (写得…)', any: ['写得', '写'] },
        { label: 'Nói mức độ (不错 / 不太好 / 还可以 / 很快)', any: ['不错', '好', '不太好', '慢', '快', '还可以', '漂亮'] }
      ],
      bonus: { label: 'So sánh với bạn học (…比我写得快 / 写得比我好)', any: ['比'] },
      vocab: ['得'],
      minLen: 12,
      sample: '我汉语说得还可以，汉字写得不太好，我的同学写得比我快多了。',
      sample_py: 'Wǒ Hànyǔ shuō de hái kěyǐ, Hànzì xiě de bú tài hǎo, wǒ de tóngxué xiě de bǐ wǒ kuài duō le.',
      sample_vn: 'Tiếng Trung tôi nói tạm được, chữ Hán viết không đẹp lắm, bạn học tôi viết nhanh hơn tôi nhiều.',
      tip: 'So sánh cách làm: A + V得 + 比 + B + tính từ (写得比我快) — sau 比 không dùng 很.'
    }
  ]
};

// ══════════════════════════════════════════
// LUYỆN DỊCH — câu mới, dùng từ bài 12 + ôn bài 1–11 và HSK1
// ══════════════════════════════════════════
var translateData = [
  {vi:'Em trai tôi đá bóng giỏi hơn tôi nhiều.', zh:'我弟弟足球踢得比我好多了。', py:'Wǒ dìdi zúqiú tī de bǐ wǒ hǎo duō le.'},
  {vi:'Tuyết tối qua rơi rất nhiều, hôm nay âm hai độ.', zh:'昨天晚上的雪很大，今天零下两度。', py:'Zuótiān wǎnshang de xuě hěn dà, jīntiān língxià liǎng dù.'},
  {vi:'Ngày nào tôi cũng đến sớm hơn anh ấy.', zh:'我每天都比他来得早。', py:'Wǒ měi tiān dōu bǐ tā lái de zǎo.'},
  {vi:'Bạn vào đi, mẹ tôi đang nấu cơm.', zh:'你进来吧，我妈妈正在做饭呢。', py:'Nǐ jìnlai ba, wǒ māma zhèngzài zuòfàn ne.'},
];

// ══════════════════════════════════════════
// LUYỆN DỊCH (chiều Trung→Việt) — noi dung KHAC voi chieu Viet->Trung o tren
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:'Anh ấy mặc rất ít, có lẽ không biết hôm nay âm ba độ.', zh:'他穿得很少，可能不知道今天零下三度。', py:'Tā chuān de hěn shǎo, kěnéng bù zhīdào jīntiān língxià sān dù.'},
  {vi:'Vợ tôi bảo tôi về nhà sớm một chút.', zh:'我妻子让我早点儿回家。', py:'Wǒ qīzi ràng wǒ zǎo diǎnr huí jiā.'},
  {vi:'Món ăn ở nhà hàng này nấu khá ngon, lại rẻ.', zh:'这个饭店的菜做得不错，也很便宜。', py:'Zhège fàndiàn de cài zuò de búcuò, yě hěn piányi.'},
];
