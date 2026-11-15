// ══════════════════════════════════════════
// DATA — HSK3 Bài 20: 我被他影响了 (Mình chịu ảnh hưởng từ anh ấy)
// Nguồn: HSK标准教程3 (Giáo trình chuẩn HSK 3 — nhantriviet.com)
// ══════════════════════════════════════════
var vocabData = [
  {
    "n": 1,
    "zh": "照相机",
    "py": "zhàoxiàngjī",
    "pos": "Danh từ",
    "vn": "máy chụp ảnh",
    "hv": "chiếu tướng cơ",
    "em": "📷",
    "lesson": 1,
    "explain": [
      "Thiết bị dùng để chụp ảnh."
    ],
    "usage": "Danh từ; đi cùng động từ 拿走/带: 照相机被拿走了.",
    "collo": [
      "照相机被拿走",
      "带照相机",
      "新买的照相机"
    ],
    "ex_zh": "我的照相机被谁拿走了？",
    "ex_py": "Wǒ de zhàoxiàngjī bèi shéi ná zǒu le?",
    "ex_vn": "Máy ảnh của tôi bị ai lấy mất rồi?",
    "exList": [
      {
        "zh": "我的照相机被谁拿走了？怎么找不到了？",
        "py": "Wǒ de zhàoxiàngjī bèi shéi ná zǒu le? Zěnme zhǎo bu dào le?",
        "vn": "Máy ảnh của tôi bị ai lấy mất rồi? Sao tìm không thấy nữa?"
      },
      {
        "zh": "奶奶喜欢那个新买的照相机吗？",
        "py": "Nǎinai xǐhuan nàge xīn mǎi de zhàoxiàngjī ma?",
        "vn": "Bà nội có thích cái máy ảnh mới mua đó không?"
      },
      {
        "zh": "如果带上照相机就好了。",
        "py": "Rúguǒ dàishang zhàoxiàngjī jiù hǎo le.",
        "vn": "Nếu mang theo máy ảnh thì tốt rồi."
      }
    ],
    "hanzi": [
      {
        "c": "相",
        "p": "xiàng",
        "type": "左右结构 · Trái-phải",
        "st": 9,
        "ord": "木 trái → 目 phải",
        "rad": "木 (mộc – gỗ)",
        "mean": "lẫn nhau; ảnh",
        "tip": "木(cây, vật thể) + 目(mắt, nhìn) → dùng MẮT nhìn vật thể LẪN NHAU; 照(chiếu sáng)+相(hình ảnh) = ẢNH, chụp ảnh.",
        "cf": "想 (xiǎng – \"nghĩ\", có thêm bộ 心\")",
        "w": "照相机 / 照相 / 相机"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Chiếc máy ảnh mới mua này tuy đắt, nhưng chụp ảnh cực kỳ rõ nét.",
        "answer": "这台新买的照相机虽然贵，但是拍照特别清楚。",
        "answerPy": "Zhè tái xīn mǎi de zhàoxiàngjī suīrán guì, dànshì pāizhào tèbié qīngchu.",
        "note": "新 + động từ + 的 làm định ngữ.",
        "pair": "虽然……但是……"
      },
      {
        "promptLang": "vi",
        "prompt": "Nếu bạn mất máy ảnh thì tôi cho bạn mượn cái của tôi.",
        "answer": "如果你的照相机丢了，我就把我的借给你。",
        "answerPy": "Rúguǒ nǐ de zhàoxiàngjī diū le, wǒ jiù bǎ wǒ de jiè gěi nǐ.",
        "note": "如果……就…… diễn tả giả thiết — kết quả (ôn lại đã học ở Bài 16).",
        "pair": "如果……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "一个照相机",
        "py": "yí gè zhàoxiàngjī",
        "vn": "một cái máy ảnh"
      },
      {
        "zh": "买照相机",
        "py": "mǎi zhàoxiàngjī",
        "vn": "mua máy ảnh"
      },
      {
        "zh": "用照相机",
        "py": "yòng zhàoxiàngjī",
        "vn": "dùng máy ảnh"
      },
      {
        "zh": "新照相机",
        "py": "xīn zhàoxiàngjī",
        "vn": "máy ảnh mới"
      },
      {
        "zh": "照相机坏了",
        "py": "zhàoxiàngjī huài le",
        "vn": "máy ảnh hỏng rồi"
      }
    ],
    "patterns": [
      {
        "s": "照相 + 机",
        "m": "Máy (机) chụp ảnh (照相)"
      },
      {
        "s": "N + 坏了",
        "m": "Cái gì hỏng rồi — 坏 là từ bài 13"
      }
    ]
  },
  {
    "n": 2,
    "zh": "被",
    "py": "bèi",
    "pos": "Giới từ",
    "vn": "bị (dùng để chỉ thể bị động)",
    "hv": "bị",
    "em": "🔄",
    "lesson": 1,
    "explain": [
      "Nêu chủ ngữ là đối tượng chịu tác động của hành động."
    ],
    "usage": "Chủ ngữ + 被 + [chủ thể hành động] + động từ + thành phần khác.",
    "collo": [
      "被拿走",
      "被影响",
      "被认错"
    ],
    "ex_zh": "我的照相机被谁拿走了？",
    "ex_py": "Wǒ de zhàoxiàngjī bèi shéi ná zǒu le?",
    "ex_vn": "Máy ảnh của tôi bị ai lấy mất rồi?",
    "exList": [
      {
        "zh": "我的照相机被谁拿走了？怎么找不到了？",
        "py": "Wǒ de zhàoxiàngjī bèi shéi ná zǒu le? Zěnme zhǎo bu dào le?",
        "vn": "Máy ảnh của tôi bị ai lấy mất rồi? Sao tìm không thấy nữa?"
      },
      {
        "zh": "我被他影响的。",
        "py": "Wǒ bèi tā yǐngxiǎng de.",
        "vn": "Mình bị anh ấy ảnh hưởng đấy."
      },
      {
        "zh": "我们经常被别人认错。",
        "py": "Wǒmen jīngcháng bèi biéren rèncuò.",
        "vn": "Chúng tôi thường bị người khác nhận nhầm."
      }
    ],
    "hanzi": [
      {
        "c": "被",
        "p": "bèi",
        "type": "左右结构 · Trái-phải",
        "st": 10,
        "ord": "衤 trái → 皮 phải",
        "rad": "衤 (y – áo)",
        "mean": "chăn, bị (thể bị động)",
        "tip": "衤(quần áo, chăn) + 皮(da, bề mặt) → tấm CHĂN phủ lên người; mở rộng nghĩa \"chịu tác động phủ lên\" = BỊ.",
        "cf": "披 (pī – \"khoác\", có bộ 扌\")",
        "w": "被 / 被子"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Chỉ khi tự mình trải qua một lần, cách nghĩ của bạn mới bị thay đổi.",
        "answer": "只有自己经历一次，你的想法才会被影响。",
        "answerPy": "Zhǐyǒu zìjǐ jīnglì yí cì, nǐ de xiǎngfǎ cái huì bèi yǐngxiǎng.",
        "note": "只有……才…… là khung trọng tâm bài này; sau 被 động từ phải có 了 hoặc bổ ngữ.",
        "pair": "只有……才……"
      },
      {
        "promptLang": "vi",
        "prompt": "Tuy vấn đề vẫn chưa được giải quyết, nhưng chúng tôi đã nghĩ ra cách rồi.",
        "answer": "虽然问题还没有被解决，但是我们已经想到办法了。",
        "answerPy": "Suīrán wèntí hái méiyǒu bèi jiějué, dànshì wǒmen yǐjīng xiǎngdào bànfǎ le.",
        "note": "办法 là từ bài 17; 被 + V + 了 — dạng bị động hoàn chỉnh.",
        "pair": "虽然……但是……"
      }
    ],
    "colloFull": [
      {
        "zh": "被他拿走了",
        "py": "bèi tā ná zǒu le",
        "vn": "bị anh ấy lấy đi"
      },
      {
        "zh": "被哥哥用了",
        "py": "bèi gēge yòng le",
        "vn": "bị anh trai dùng mất"
      },
      {
        "zh": "被解决了",
        "py": "bèi jiějué le",
        "vn": "đã được giải quyết"
      },
      {
        "zh": "被妈妈看见了",
        "py": "bèi māma kànjiàn le",
        "vn": "bị mẹ nhìn thấy"
      },
      {
        "zh": "没被发现",
        "py": "méi bèi fāxiàn",
        "vn": "chưa bị phát hiện"
      }
    ],
    "patterns": [
      {
        "s": "Sub + 被 + (ai) + V + 了 / 过 / bổ ngữ",
        "m": "Câu bị động: động từ phải có thành phần đi kèm"
      },
      {
        "s": "✗ 我的书被他拿 → ✓ 我的书被他拿走了",
        "m": "Sau 被 không được dừng ở động từ trần"
      }
    ]
  },
  {
    "n": 3,
    "zh": "难过",
    "py": "nánguò",
    "pos": "Tính từ",
    "vn": "buồn",
    "hv": "nan quá",
    "em": "😢",
    "lesson": 1,
    "explain": [
      "Cảm thấy đau lòng, không vui."
    ],
    "usage": "Tính từ, làm vị ngữ: 别难过.",
    "collo": [
      "别难过",
      "很难过",
      "怎么这么难过"
    ],
    "ex_zh": "别难过，再买一个吧。",
    "ex_py": "Bié nánguò, zài mǎi yí ge ba.",
    "ex_vn": "Đừng buồn, mua cái khác đi.",
    "exList": [
      {
        "zh": "别难过，再买一个吧，公司东门外不就有一个大商场吗？",
        "py": "Bié nánguò, zài mǎi yí ge ba, gōngsī dōngmén wài bú jiù yǒu yí ge dà shāngchǎng ma?",
        "vn": "Đừng buồn, mua cái khác đi, ngoài cổng đông công ty chẳng phải có một khu thương mại lớn sao?"
      },
      {
        "zh": "你怎么这么难过啊？怎么了？",
        "py": "Nǐ zěnme zhème nánguò a? Zěnme le?",
        "vn": "Sao bạn buồn thế? Sao vậy?"
      },
      {
        "zh": "你别难过了，我们一起帮你想办法。",
        "py": "Nǐ bié nánguò le, wǒmen yìqǐ bāng nǐ xiǎng bànfǎ.",
        "vn": "Bạn đừng buồn nữa, chúng tôi cùng giúp bạn nghĩ cách."
      }
    ],
    "hanzi": [
      {
        "c": "过",
        "p": "guò",
        "type": "半包围结构 · Bán bao vây",
        "st": 6,
        "ord": "辶 ngoài → 寸 trong",
        "rad": "辶 (sước – đi)",
        "mean": "trải qua",
        "tip": "辶(đi) + 寸(khoảng thời gian) → trải qua một khoảng thời gian KHÓ khăn; 难(khó)+过(trải qua) = BUỒN, khó chịu trong lòng.",
        "cf": "过 (guò – cùng chữ đã học ở Bài 19\")",
        "w": "难过 / 难受"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Đừng buồn nữa, chỉ cần chúng ta cùng nghĩ cách thì vấn đề sẽ giải quyết được.",
        "answer": "别难过了，只要我们一起想办法，问题就能解决。",
        "answerPy": "Bié nánguò le, zhǐyào wǒmen yìqǐ xiǎng bànfǎ, wèntí jiù néng jiějué.",
        "note": "只要……就…… (đủ điều kiện) khác 只有……才…… (điều kiện duy nhất).",
        "pair": "只要……就……"
      },
      {
        "promptLang": "vi",
        "prompt": "Nếu bạn buồn thì cứ nói cho tôi biết.",
        "answer": "如果你难过，就告诉我吧。",
        "answerPy": "Rúguǒ nǐ nánguò, jiù gàosu wǒ ba.",
        "note": "如果……就…… diễn tả giả thiết — kết quả.",
        "pair": "如果……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "很难过",
        "py": "hěn nánguò",
        "vn": "rất buồn"
      },
      {
        "zh": "别难过",
        "py": "bié nánguò",
        "vn": "đừng buồn"
      },
      {
        "zh": "心里难过",
        "py": "xīn li nánguò",
        "vn": "trong lòng buồn"
      },
      {
        "zh": "难过得哭了",
        "py": "nánguò de kū le",
        "vn": "buồn đến phát khóc"
      },
      {
        "zh": "难过极了",
        "py": "nánguò jí le",
        "vn": "buồn vô cùng"
      }
    ],
    "patterns": [
      {
        "s": "别 + 难过 + 了",
        "m": "Đừng buồn nữa — lời an ủi"
      },
      {
        "s": "难过 (buồn) ≠ 难 (khó) — 难过 nói về cảm xúc"
      }
    ]
  },
  {
    "n": 4,
    "zh": "东",
    "py": "dōng",
    "pos": "Danh từ",
    "vn": "phía đông",
    "hv": "đông",
    "em": "🧭",
    "lesson": 1,
    "explain": [
      "Một trong bốn hướng chính, hướng mặt trời mọc."
    ],
    "usage": "Danh từ chỉ phương hướng; đi cùng 门/边: 东门, 东边.",
    "collo": [
      "东门",
      "往东走",
      "东边"
    ],
    "ex_zh": "公司东门外不就有一个大商场吗？",
    "ex_py": "Gōngsī dōngmén wài bú jiù yǒu yí ge dà shāngchǎng ma?",
    "ex_vn": "Ngoài cổng đông công ty chẳng phải có một khu thương mại lớn sao?",
    "exList": [
      {
        "zh": "别难过，再买一个吧，公司东门外不就有一个大商场吗？",
        "py": "Bié nánguò, zài mǎi yí ge ba, gōngsī dōngmén wài bú jiù yǒu yí ge dà shāngchǎng ma?",
        "vn": "Đừng buồn, mua cái khác đi, ngoài cổng đông công ty chẳng phải có một khu thương mại lớn sao?"
      },
      {
        "zh": "只有往东走才能到国家公园。",
        "py": "Zhǐyǒu wǎng dōng zǒu cái néng dào guójiā gōngyuán.",
        "vn": "Chỉ có đi về hướng đông mới đến được công viên quốc gia."
      },
      {
        "zh": "中国在东边。",
        "py": "Zhōngguó zài dōngbian.",
        "vn": "Trung Quốc ở phía đông."
      }
    ],
    "hanzi": [
      {
        "c": "东",
        "p": "dōng",
        "type": "独体字 · Chữ đơn (giản thể)",
        "st": 5,
        "ord": "nét liền",
        "rad": "一 (nhất)",
        "mean": "phía đông",
        "tip": "Chữ tượng hình cổ mô phỏng mặt trời (日) mọc lên sau CÂY (木) vào buổi sáng → PHÍA ĐÔNG.",
        "cf": "车 (chē – \"xe\", hình dáng gần giống\")",
        "w": "东 / 东边 / 东西"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Chỉ có đi về hướng đông, mới tìm được nhà hàng mới khai trương đó.",
        "answer": "只有往东走，才能找到那家新开的饭馆。",
        "answerPy": "Zhǐyǒu wǎng dōng zǒu, cái néng zhǎodào nà jiā xīn kāi de fànguǎn.",
        "note": "只有……才…… diễn tả điều kiện duy nhất (điểm ngữ pháp trọng tâm bài này).",
        "pair": "只有……才……"
      },
      {
        "promptLang": "vi",
        "prompt": "Nếu bạn đi về phía đông thì sẽ thấy trường học.",
        "answer": "如果你往东走，就会看到学校。",
        "answerPy": "Rúguǒ nǐ wǎng dōng zǒu, jiù huì kàndào xuéxiào.",
        "note": "如果……就…… diễn tả giả thiết — kết quả.",
        "pair": "如果……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "东边",
        "py": "dōng biān",
        "vn": "phía đông"
      },
      {
        "zh": "往东走",
        "py": "wǎng dōng zǒu",
        "vn": "đi về phía đông"
      },
      {
        "zh": "东面",
        "py": "dōng miàn",
        "vn": "mặt phía đông"
      },
      {
        "zh": "在城市的东边",
        "py": "zài chéngshì de dōng biān",
        "vn": "ở phía đông thành phố"
      },
      {
        "zh": "东南西北",
        "py": "dōng nán xī běi",
        "vn": "đông nam tây bắc"
      }
    ],
    "patterns": [
      {
        "s": "往 + 东 + 走",
        "m": "Đi về phía đông — so với 向左走 (bài 18)"
      },
      {
        "s": "东 · 南 · 西 · 北 — bốn phương, thêm 边 thành nơi chốn"
      }
    ]
  },
  {
    "n": 5,
    "zh": "信用卡",
    "py": "xìnyòngkǎ",
    "pos": "Danh từ",
    "vn": "thẻ tín dụng",
    "hv": "tín dụng tạp",
    "em": "💳",
    "lesson": 1,
    "explain": [
      "Loại thẻ ngân hàng dùng để thanh toán, có thể chi tiêu trước trả sau."
    ],
    "usage": "Danh từ; đi cùng động từ 用/花: 用信用卡.",
    "collo": [
      "信用卡里的钱",
      "用信用卡",
      "这张信用卡"
    ],
    "ex_zh": "我这个月信用卡里的钱已经花得差不多了。",
    "ex_py": "Wǒ zhège yuè xìnyòngkǎ li de qián yǐjīng huā de chà bu duō le.",
    "ex_vn": "Tiền trong thẻ tín dụng của tôi tháng này đã tiêu gần hết rồi.",
    "exList": [
      {
        "zh": "但是我这个月信用卡里的钱已经花得差不多了。",
        "py": "Dànshì wǒ zhège yuè xìnyòngkǎ li de qián yǐjīng huā de chà bu duō le.",
        "vn": "Nhưng tiền trong thẻ tín dụng của tôi tháng này đã tiêu gần hết rồi."
      },
      {
        "zh": "服务员说我这张信用卡不能用了。",
        "py": "Fúwùyuán shuō wǒ zhè zhāng xìnyòngkǎ bù néng yòng le.",
        "vn": "Nhân viên nói thẻ tín dụng của tôi không dùng được nữa."
      },
      {
        "zh": "我去银行，我的信用卡该还钱了。",
        "py": "Wǒ qù yínháng, wǒ de xìnyòngkǎ gāi huán qián le.",
        "vn": "Tôi đi ngân hàng đây, thẻ tín dụng của tôi phải trả tiền rồi."
      }
    ],
    "hanzi": [
      {
        "c": "卡",
        "p": "kǎ",
        "type": "上下结构 · Trên-dưới",
        "st": 5,
        "ord": "上 trên → 卜 dưới",
        "rad": "卜 (bốc)",
        "mean": "thẻ",
        "tip": "Chữ ghép từ 上(trên) và 下(dưới, giản lược thành 卜) mô phỏng vật MẮC KẸT ở giữa → mượn âm để chỉ THẺ (card).",
        "cf": "卞 (biàn – họ Biện\", hình dáng gần giống\")",
        "w": "信用卡 / 卡片"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Cô bán hàng nói tấm thẻ tín dụng này không phải của tôi, vì tên trên thẻ không đúng.",
        "answer": "因为卡上的名字不对，所以售货员说这张信用卡不是我的。",
        "answerPy": "Yīnwèi kǎ shàng de míngzi bú duì, suǒyǐ shòuhuòyuán shuō zhè zhāng xìnyòngkǎ bú shì wǒ de.",
        "note": "一 + 张 + 信用卡 — lượng từ 张 của bài 19.",
        "pair": "因为……所以……"
      },
      {
        "promptLang": "vi",
        "prompt": "Nếu thẻ tín dụng của bạn không dùng được thì đi ngân hàng hỏi thử đi.",
        "answer": "如果你的信用卡不能用，就去银行问问吧。",
        "answerPy": "Rúguǒ nǐ de xìnyòngkǎ bù néng yòng, jiù qù yínháng wènwen ba.",
        "note": "如果……就…… diễn tả giả thiết — kết quả.",
        "pair": "如果……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "用信用卡",
        "py": "yòng xìnyòngkǎ",
        "vn": "dùng thẻ tín dụng"
      },
      {
        "zh": "一张信用卡",
        "py": "yì zhāng xìnyòngkǎ",
        "vn": "một chiếc thẻ tín dụng"
      },
      {
        "zh": "信用卡不见了",
        "py": "xìnyòngkǎ bú jiàn le",
        "vn": "thẻ tín dụng không thấy đâu"
      },
      {
        "zh": "办信用卡",
        "py": "bàn xìnyòngkǎ",
        "vn": "làm thẻ tín dụng"
      },
      {
        "zh": "这张信用卡",
        "py": "zhè zhāng xìnyòngkǎ",
        "vn": "chiếc thẻ này"
      }
    ],
    "patterns": [
      {
        "s": "một + 张 + 信用卡",
        "m": "Lượng từ 张 (bài 19) cho vật mặt phẳng"
      },
      {
        "s": "信用 + 卡",
        "m": "Thẻ (卡) tín dụng (信用)"
      }
    ]
  },
  {
    "n": 6,
    "zh": "关心",
    "py": "guānxīn",
    "pos": "Động từ",
    "vn": "quan tâm, chú ý",
    "hv": "quan tâm",
    "em": "💗",
    "lesson": 2,
    "explain": [
      "Để tâm, lo lắng cho ai đó hoặc việc gì đó."
    ],
    "usage": "Động từ, mang tân ngữ: 关心 + [người/việc].",
    "collo": [
      "关心体育",
      "关心学生",
      "不关心"
    ],
    "ex_zh": "你怎么突然关心起体育来了？",
    "ex_py": "Nǐ zěnme tūrán guānxīn qǐ tǐyù lái le?",
    "ex_vn": "Sao đột nhiên bạn lại quan tâm đến thể thao vậy?",
    "exList": [
      {
        "zh": "你怎么突然关心起体育来了？",
        "py": "Nǐ zěnme tūrán guānxīn qǐ tǐyù lái le?",
        "vn": "Sao đột nhiên bạn lại quan tâm đến thể thao vậy?"
      },
      {
        "zh": "我还一直觉得你不关心我的学习呢。",
        "py": "Wǒ hái yìzhí juéde nǐ bù guānxīn wǒ de xuéxí ne.",
        "vn": "Em cứ nghĩ là anh không quan tâm việc học của em đấy."
      },
      {
        "zh": "他一直都很关心我。",
        "py": "Tā yìzhí dōu hěn guānxīn wǒ.",
        "vn": "Anh ấy luôn luôn rất quan tâm tôi."
      }
    ],
    "hanzi": [
      {
        "c": "关",
        "p": "guān",
        "type": "独体字 · Chữ đơn (giản thể)",
        "st": 6,
        "ord": "nét liền",
        "rad": "丷 (bát)",
        "mean": "liên quan, đóng",
        "tip": "Chữ giản thể mô phỏng cánh CỬA đóng lại, liên kết hai bên → LIÊN QUAN, ĐÓNG; 关(liên quan)+心(tâm) = QUAN TÂM.",
        "cf": "吴 (wú – \"họ Ngô\", hình dáng khác\")",
        "w": "关心 / 关于 / 关系"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Cô giáo luôn luôn rất quan tâm đến thành tích của mỗi học sinh.",
        "answer": "老师一直都很关心每个学生的成绩。",
        "answerPy": "Lǎoshī yìzhí dōu hěn guānxīn měi ge xuéshēng de chéngjì.",
        "note": "一直都 diễn tả trạng thái duy trì liên tục.",
        "pair": "一……都……"
      },
      {
        "promptLang": "vi",
        "prompt": "Nếu bạn quan tâm đến sức khỏe thì nên tập thể dục thường xuyên.",
        "answer": "如果你关心健康，就应该经常锻炼。",
        "answerPy": "Rúguǒ nǐ guānxīn jiànkāng, jiù yīnggāi jīngcháng duànliàn.",
        "note": "如果……就…… diễn tả giả thiết — kết quả.",
        "pair": "如果……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "关心别人",
        "py": "guānxīn biérén",
        "vn": "quan tâm người khác"
      },
      {
        "zh": "关心孩子",
        "py": "guānxīn háizi",
        "vn": "quan tâm con cái"
      },
      {
        "zh": "很关心我",
        "py": "hěn guānxīn wǒ",
        "vn": "rất quan tâm tôi"
      },
      {
        "zh": "关心健康",
        "py": "guānxīn jiànkāng",
        "vn": "quan tâm sức khoẻ"
      },
      {
        "zh": "谢谢你的关心",
        "py": "xièxie nǐ de guānxīn",
        "vn": "cảm ơn sự quan tâm của bạn"
      }
    ],
    "patterns": [
      {
        "s": "关心 + ai / cái gì",
        "m": "Quan tâm ai, quan tâm việc gì"
      },
      {
        "s": "关 + 心",
        "m": "Đặt lòng (心) mình vào (关) — ghép nghĩa dễ nhớ"
      }
    ]
  },
  {
    "n": 7,
    "zh": "只有……才……",
    "py": "zhǐyǒu……cái……",
    "pos": "Liên từ",
    "vn": "chỉ có... (thì) mới...",
    "hv": "chỉ hữu tài",
    "em": "🔑",
    "lesson": 2,
    "explain": [
      "Diễn tả điều kiện duy nhất để có kết quả nào đó."
    ],
    "usage": "只有 + [điều kiện duy nhất]，才 + [kết quả].",
    "collo": [
      "只有爱，才能……",
      "只有真正……才能……",
      "只有你们……才能……"
    ],
    "ex_zh": "看来只有爱，才能让人有变化。",
    "ex_py": "Kànlái zhǐyǒu ài, cái néng ràng rén yǒu biànhuà.",
    "ex_vn": "Xem ra chỉ có tình yêu mới có thể khiến người ta thay đổi.",
    "exList": [
      {
        "zh": "看来只有爱，才能让人有变化。",
        "py": "Kànlái zhǐyǒu ài, cái néng ràng rén yǒu biànhuà.",
        "vn": "Xem ra chỉ có tình yêu mới có thể khiến người ta thay đổi."
      },
      {
        "zh": "只有你们的爸爸妈妈才能分出来哪个是哥哥，哪个是弟弟吧。",
        "py": "Zhǐyǒu nǐmen de bàba māma cái néng fēn chulai nǎge shì gēge, nǎge shì dìdi ba.",
        "vn": "Chỉ có bố mẹ các bạn mới phân biệt được ai là anh, ai là em nhỉ."
      },
      {
        "zh": "所以只有真正做事情的时候，才能了解有多难。",
        "py": "Suǒyǐ zhǐyǒu zhēnzhèng zuò shìqing de shíhou, cái néng liǎojiě yǒu duō nán.",
        "vn": "Vì vậy chỉ khi thực sự bắt tay vào làm mới hiểu được nó khó đến đâu."
      }
    ],
    "hanzi": [
      {
        "c": "只",
        "p": "zhǐ",
        "type": "独体字 · Chữ đơn (đa âm)",
        "st": 5,
        "ord": "nét liền",
        "rad": "口 (khẩu)",
        "mean": "chỉ, duy nhất",
        "tip": "Cùng chữ với 只(zhī - lượng từ con vật), nhưng khi đọc zhǐ nghĩa là CHỈ, DUY NHẤT.",
        "cf": "只 (zhī – \"con\" (lượng từ), cùng chữ khác âm đọc\")",
        "w": "只有 / 只是 / 只要"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Chỉ có bố mẹ các bạn mới phân biệt được ai là anh, ai là em.",
        "answer": "只有你们的爸爸妈妈才能分出来哪个是哥哥，哪个是弟弟。",
        "answerPy": "Zhǐyǒu nǐmen de bàba māma cái néng fēn chulai nǎge shì gēge, nǎge shì dìdi.",
        "note": "只有……才…… diễn tả điều kiện duy nhất (điểm ngữ pháp trọng tâm bài này).",
        "pair": "只有……才……"
      },
      {
        "promptLang": "vi",
        "prompt": "Chỉ có làm xong bài tập mới được xem tivi.",
        "answer": "只有写完作业，才能看电视。",
        "answerPy": "Zhǐyǒu xiěwán zuòyè, cái néng kàn diànshì.",
        "note": "只有……才…… diễn tả điều kiện duy nhất.",
        "pair": "只有……才……"
      }
    ],
    "colloFull": [
      {
        "zh": "只有……才……",
        "py": "zhǐyǒu cái",
        "vn": "chỉ có… mới…"
      },
      {
        "zh": "只有努力才能成功",
        "py": "zhǐyǒu nǔlì cái néng chénggōng",
        "vn": "chỉ có nỗ lực mới thành công"
      },
      {
        "zh": "只有休息好才有精神",
        "py": "zhǐyǒu xiūxi hǎo cái yǒu jīngshén",
        "vn": "chỉ khi nghỉ đủ mới tỉnh táo"
      },
      {
        "zh": "只有你才能帮我",
        "py": "zhǐyǒu nǐ cái néng bāng wǒ",
        "vn": "chỉ có bạn mới giúp được tôi"
      },
      {
        "zh": "只有这样才行",
        "py": "zhǐyǒu zhèyàng cái xíng",
        "vn": "chỉ có thế mới được"
      }
    ],
    "patterns": [
      {
        "s": "只有 A，才 B",
        "m": "Chỉ khi A thì mới B — A là điều kiện DUY NHẤT"
      },
      {
        "s": "只有……才…… (duy nhất) ≠ 只要……就…… (đủ rồi) — so sánh kỹ hai khung"
      }
    ]
  },
  {
    "n": 8,
    "zh": "成绩",
    "py": "chéngjì",
    "pos": "Danh từ",
    "vn": "thành tích, kết quả (công tác, học tập)",
    "hv": "thành tích",
    "em": "📊",
    "lesson": 2,
    "explain": [
      "Kết quả đạt được qua học tập hoặc công việc."
    ],
    "usage": "Danh từ; đi cùng tính từ: 成绩差/好.",
    "collo": [
      "成绩差",
      "考试成绩",
      "数学成绩"
    ],
    "ex_zh": "我的成绩差极了。",
    "ex_py": "Wǒ de chéngjì chà jí le.",
    "ex_vn": "Thành tích của mình tệ lắm.",
    "exList": [
      {
        "zh": "我最近天天上网玩儿游戏，我的成绩差极了。",
        "py": "Wǒ zuìjìn tiāntiān shàng wǎng wánr yóuxì, wǒ de chéngjì chà jí le.",
        "vn": "Gần đây mình lên mạng chơi game hàng ngày, thành tích của mình tệ lắm."
      },
      {
        "zh": "你是怎么提高历史成绩的？",
        "py": "Nǐ shì zěnme tígāo lìshǐ chéngjì de?",
        "vn": "Bạn đã nâng cao thành tích môn lịch sử thế nào vậy?"
      },
      {
        "zh": "考试成绩出来了吗？",
        "py": "Kǎoshì chéngjì chulai le ma?",
        "vn": "Kết quả thi ra chưa?"
      }
    ],
    "hanzi": [
      {
        "c": "绩",
        "p": "jì",
        "type": "左右结构 · Trái-phải",
        "st": 11,
        "ord": "纟 trái → 责 phải (giản thể)",
        "rad": "纟 (mịch – tơ lụa)",
        "mean": "thành tích",
        "tip": "纟(sợi tơ, dệt thành sản phẩm) + 责(trách nhiệm) → kết quả từ công việc có TRÁCH NHIỆM = THÀNH TÍCH.",
        "cf": "责 (zé – \"trách nhiệm\", không có bộ 纟\")",
        "w": "成绩 / 业绩"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Bạn vừa thi xong là kết quả sẽ có ngay thôi.",
        "answer": "你一考完试，成绩就出来了。",
        "answerPy": "Nǐ yì kǎowán shì, chéngjì jiù chūlai le.",
        "note": "一……就…… — vừa … là …; 成绩出来了 — kết quả đã có.",
        "pair": "一……就……"
      },
      {
        "promptLang": "vi",
        "prompt": "Nếu bạn học chăm chỉ thì thành tích sẽ tốt hơn.",
        "answer": "如果你认真学习，成绩就会更好。",
        "answerPy": "Rúguǒ nǐ rènzhēn xuéxí, chéngjì jiù huì gèng hǎo.",
        "note": "如果……就…… diễn tả giả thiết — kết quả.",
        "pair": "如果……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "考试成绩",
        "py": "kǎoshì chéngjì",
        "vn": "kết quả thi"
      },
      {
        "zh": "成绩很好",
        "py": "chéngjì hěn hǎo",
        "vn": "kết quả tốt"
      },
      {
        "zh": "提高成绩",
        "py": "tí gāo chéngjì",
        "vn": "nâng cao thành tích"
      },
      {
        "zh": "成绩出来了",
        "py": "chéngjì chū lái le",
        "vn": "kết quả có rồi"
      },
      {
        "zh": "这次的成绩",
        "py": "zhè cì de chéngjì",
        "vn": "kết quả lần này"
      }
    ],
    "patterns": [
      {
        "s": "提高 + 成绩",
        "m": "Nâng cao thành tích — 提高 là từ bài 15"
      },
      {
        "s": "成绩 + 出来了",
        "m": "Kết quả đã có — 出来 là bổ ngữ xu hướng"
      }
    ]
  },
  {
    "n": 9,
    "zh": "碗",
    "py": "wǎn",
    "pos": "Danh từ",
    "vn": "bát",
    "hv": "oản",
    "em": "🥣",
    "lesson": 3,
    "explain": [
      "Vật dụng hình tròn dùng để đựng cơm, canh."
    ],
    "usage": "Danh từ; đi cùng động từ 拿着/洗: 拿着碗.",
    "collo": [
      "拿着碗",
      "洗碗",
      "一个碗"
    ],
    "ex_zh": "那个拿着碗吃饭的人是你哥哥吗？",
    "ex_py": "Nàge názhe wǎn chī fàn de rén shì nǐ gēge ma?",
    "ex_vn": "Người cầm bát ăn cơm đó là anh trai bạn à?",
    "exList": [
      {
        "zh": "那个拿着碗吃饭的人是你哥哥吗？他和你长得真像。",
        "py": "Nàge názhe wǎn chī fàn de rén shì nǐ gēge ma? Tā hé nǐ zhǎng de zhēn xiàng.",
        "vn": "Người cầm bát ăn cơm đó là anh trai bạn à? Anh ấy trông giống bạn thật đấy."
      },
      {
        "zh": "我来洗碗筷，你去看电视吧。",
        "py": "Wǒ lái xǐ wǎnkuài, nǐ qù kàn diànshì ba.",
        "vn": "Tôi rửa bát đũa, bạn đi xem tivi đi."
      },
      {
        "zh": "你先吃，一会儿多来一碗饭。",
        "py": "Nǐ xiān chī, yíhuìr duō lái yì wǎn fàn.",
        "vn": "Bạn ăn trước đi, lát nữa lấy thêm một bát cơm."
      }
    ],
    "hanzi": [
      {
        "c": "碗",
        "p": "wǎn",
        "type": "左右结构 · Trái-phải",
        "st": 13,
        "ord": "石 trái → 宛 phải",
        "rad": "石 (thạch – đá)",
        "mean": "bát",
        "tip": "石(đá, sứ) + 宛(cong, uốn lượn) → vật liệu ĐÁ/SỨ tạo thành hình CONG tròn = BÁT.",
        "cf": "椀 (dạng cổ của 碗, làm bằng gỗ\")",
        "w": "碗 / 洗碗"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Để tôi rửa bát trước, sau đó bạn hãy đi nghỉ một lát.",
        "answer": "先让我洗碗，然后你再去休息一会儿吧。",
        "answerPy": "Xiān ràng wǒ xǐ wǎn, ránhòu nǐ zài qù xiūxi yíhuìr ba.",
        "note": "把 + 碗 + 洗干净 cũng nói được; 干净 là từ bài 14.",
        "pair": "先……然后……"
      },
      {
        "promptLang": "vi",
        "prompt": "Nếu bát bẩn thì bạn rửa giúp tôi đi.",
        "answer": "如果碗脏了，你就帮我洗洗吧。",
        "answerPy": "Rúguǒ wǎn zāng le, nǐ jiù bāng wǒ xǐxi ba.",
        "note": "如果……就…… diễn tả giả thiết — kết quả.",
        "pair": "如果……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "洗碗",
        "py": "xǐ wǎn",
        "vn": "rửa bát"
      },
      {
        "zh": "一个碗",
        "py": "yí gè wǎn",
        "vn": "một cái bát"
      },
      {
        "zh": "一碗面条",
        "py": "yì wǎn miàntiáo",
        "vn": "một bát mì"
      },
      {
        "zh": "把碗洗干净",
        "py": "bǎ wǎn xǐ gānjìng",
        "vn": "rửa bát cho sạch"
      },
      {
        "zh": "碗里",
        "py": "wǎn li",
        "vn": "trong bát"
      }
    ],
    "patterns": [
      {
        "s": "把 + 碗 + 洗干净",
        "m": "Rửa bát cho sạch — 干净 là từ bài 14"
      },
      {
        "s": "一 + 个 + 碗 (danh từ) / 一 + 碗 + 面条 (lượng từ)"
      }
    ]
  },
  {
    "n": 10,
    "zh": "分",
    "py": "fēn",
    "pos": "Động từ",
    "vn": "phân biệt",
    "hv": "phân",
    "em": "✂️",
    "lesson": 3,
    "explain": [
      "Chia tách, nhận biết sự khác nhau giữa các đối tượng."
    ],
    "usage": "Động từ, thường đi cùng bổ ngữ 出来: 分出来.",
    "collo": [
      "分出来",
      "分不清",
      "分开"
    ],
    "ex_zh": "只有你们的爸爸妈妈才能分出来哪个是哥哥，哪个是弟弟吧。",
    "ex_py": "Zhǐyǒu nǐmen de bàba māma cái néng fēn chulai nǎge shì gēge, nǎge shì dìdi ba.",
    "ex_vn": "Chỉ có bố mẹ các bạn mới phân biệt được ai là anh, ai là em nhỉ.",
    "exList": [
      {
        "zh": "只有你们的爸爸妈妈才能分出来哪个是哥哥，哪个是弟弟吧。",
        "py": "Zhǐyǒu nǐmen de bàba māma cái néng fēn chulai nǎge shì gēge, nǎge shì dìdi ba.",
        "vn": "Chỉ có bố mẹ các bạn mới phân biệt được ai là anh, ai là em nhỉ."
      },
      {
        "zh": "除了父母以外，还有我们自己也能啊。",
        "py": "Chúle fùmǔ yǐwài, hái yǒu wǒmen zìjǐ yě néng a.",
        "vn": "Ngoài bố mẹ ra, còn có chính chúng tôi cũng phân biệt được đấy."
      },
      {
        "zh": "我怎么也分不清这两个字。",
        "py": "Wǒ zěnme yě fēn bu qīng zhè liǎng ge zì.",
        "vn": "Tôi thế nào cũng không phân biệt rõ được hai chữ này."
      }
    ],
    "hanzi": [
      {
        "c": "分",
        "p": "fēn",
        "type": "上下结构 · Trên-dưới",
        "st": 4,
        "ord": "八 trên → 刀 dưới",
        "rad": "刀 (đao – dao)",
        "mean": "chia, phân biệt",
        "tip": "八(hình chia đôi) + 刀(dao) → dùng DAO CHIA vật ra làm hai = CHIA, PHÂN BIỆT.",
        "cf": "刀 (dāo – \"dao\", không có bộ 八\")",
        "w": "分 / 分开 / 分数"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Hai loại trà này không những nhìn giống nhau, mà mùi vị tôi cũng không tài nào phân biệt được.",
        "answer": "这两种茶不但看起来一样，而且味道我怎么也分不出来。",
        "answerPy": "Zhè liǎng zhǒng chá búdàn kànqǐlai yíyàng, érqiě wèidào wǒ zěnme yě fēn bu chūlái.",
        "note": "分不出来 — bổ ngữ khả năng phủ định; 种 là lượng từ chủng loại (bài 18).",
        "pair": "不但……而且……"
      },
      {
        "promptLang": "vi",
        "prompt": "Nếu bạn phân biệt được hai anh em thì thật giỏi.",
        "answer": "如果你能分出来他们兄弟俩，就真厉害。",
        "answerPy": "Rúguǒ nǐ néng fēn chulai tāmen xiōngdì liǎ, jiù zhēn lìhai.",
        "note": "如果……就…… diễn tả giả thiết — kết quả.",
        "pair": "如果……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "分不出来",
        "py": "fēn bù chū lái",
        "vn": "không phân biệt được"
      },
      {
        "zh": "分开",
        "py": "fēn kāi",
        "vn": "tách ra"
      },
      {
        "zh": "分成两种",
        "py": "fēn chéng liǎng zhǒng",
        "vn": "chia thành hai loại"
      },
      {
        "zh": "分清楚",
        "py": "fēn qīngchu",
        "vn": "phân biệt rõ"
      },
      {
        "zh": "很难分",
        "py": "hěn nán fēn",
        "vn": "rất khó phân biệt"
      }
    ],
    "patterns": [
      {
        "s": "分 + 不 + 出来",
        "m": "Bổ ngữ khả năng phủ định: không phân biệt nổi"
      },
      {
        "s": "分 (fēn, phân biệt) ≠ 分 (fēn, phút, điểm) — cùng chữ, nhiều nghĩa"
      }
    ]
  },
  {
    "n": 11,
    "zh": "解决",
    "py": "jiějué",
    "pos": "Động từ",
    "vn": "giải quyết",
    "hv": "giải quyết",
    "em": "✅",
    "lesson": 4,
    "explain": [
      "Xử lý, tìm ra cách khắc phục vấn đề."
    ],
    "usage": "Động từ, mang tân ngữ: 解决问题.",
    "collo": [
      "解决问题",
      "解决办法",
      "被解决"
    ],
    "ex_zh": "不同的问题有不同的解决办法。",
    "ex_py": "Bùtóng de wèntí yǒu bùtóng de jiějué bànfǎ.",
    "ex_vn": "Những vấn đề khác nhau có cách giải quyết khác nhau.",
    "exList": [
      {
        "zh": "其实，不同的问题有不同的解决办法。",
        "py": "Qíshí, bùtóng de wèntí yǒu bùtóng de jiějué bànfǎ.",
        "vn": "Thực ra, những vấn đề khác nhau có cách giải quyết khác nhau."
      },
      {
        "zh": "多么难的问题，都会被解决的。",
        "py": "Duōme nán de wèntí, dōu huì bèi jiějué de.",
        "vn": "Vấn đề dù khó đến mấy cũng sẽ được giải quyết."
      },
      {
        "zh": "我试着帮你解决电脑的问题。",
        "py": "Wǒ shìzhe bāng nǐ jiějué diànnǎo de wèntí.",
        "vn": "Tôi thử giúp bạn giải quyết vấn đề máy tính."
      }
    ],
    "hanzi": [
      {
        "c": "决",
        "p": "jué",
        "type": "左右结构 · Trái-phải",
        "st": 6,
        "ord": "冫 trái → 夬 phải",
        "rad": "冫 (băng – nước đá)",
        "mean": "quyết định, giải quyết",
        "tip": "冫(nước, dòng chảy) + 夬(khai thông, mở ra) → khơi thông dòng nước bị tắc = GIẢI QUYẾT, QUYẾT ĐỊNH.",
        "cf": "快 (kuài – \"nhanh\", có bộ 忄\")",
        "w": "解决 / 决定"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Chỉ khi tự mình thử làm, tôi mới giải quyết được vấn đề thẻ tín dụng này.",
        "answer": "只有自己试着做，我才能解决这个信用卡的问题。",
        "answerPy": "Zhǐyǒu zìjǐ shìzhe zuò, wǒ cái néng jiějué zhège xìnyòngkǎ de wèntí.",
        "note": "试着 + V — thử làm gì; 解决问题 là kết hợp cố định.",
        "pair": "只有……才……"
      },
      {
        "promptLang": "vi",
        "prompt": "Nếu bạn không giải quyết được thì cứ hỏi tôi.",
        "answer": "如果你解决不了，就问我吧。",
        "answerPy": "Rúguǒ nǐ jiějué bu liǎo, jiù wèn wǒ ba.",
        "note": "如果……就…… diễn tả giả thiết — kết quả.",
        "pair": "如果……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "解决问题",
        "py": "jiějué wèntí",
        "vn": "giải quyết vấn đề"
      },
      {
        "zh": "解决办法",
        "py": "jiějué bànfǎ",
        "vn": "cách giải quyết"
      },
      {
        "zh": "很难解决",
        "py": "hěn nán jiějué",
        "vn": "rất khó giải quyết"
      },
      {
        "zh": "自己解决",
        "py": "zìjǐ jiějué",
        "vn": "tự giải quyết"
      },
      {
        "zh": "还没解决",
        "py": "hái méi jiějué",
        "vn": "vẫn chưa giải quyết"
      }
    ],
    "patterns": [
      {
        "s": "解决 + 问题",
        "m": "Giải quyết vấn đề — kết hợp cố định"
      },
      {
        "s": "想 + 办法 + 解决",
        "m": "Nghĩ cách giải quyết — 办法 là từ bài 17"
      }
    ]
  },
  {
    "n": 12,
    "zh": "试",
    "py": "shì",
    "pos": "Động từ",
    "vn": "thử",
    "hv": "thí",
    "em": "🧪",
    "lesson": 4,
    "explain": [
      "Làm thử để xem kết quả hoặc kiểm tra."
    ],
    "usage": "Động từ; thường đi cùng 着: 试着做.",
    "collo": [
      "试着做",
      "试一试",
      "试试看"
    ],
    "ex_zh": "所以得试着做做。",
    "ex_py": "Suǒyǐ děi shìzhe zuòzuo.",
    "ex_vn": "Nên phải thử làm xem.",
    "exList": [
      {
        "zh": "有些问题看上去很难，但是做起来非常简单，所以得试着做做。",
        "py": "Yǒuxiē wèntí kàn shangqu hěn nán, dànshì zuò qilai fēicháng jiǎndān, suǒyǐ děi shìzhe zuòzuo.",
        "vn": "Có những vấn đề nhìn có vẻ khó, nhưng làm thì lại rất đơn giản, nên phải thử làm xem."
      },
      {
        "zh": "帮您找双43号的试试？",
        "py": "Bāng nín zhǎo shuāng sìshísān hào de shìshi?",
        "vn": "Tôi tìm giúp anh đôi cỡ 43 thử nhé?"
      },
      {
        "zh": "你有更好的办法来解决这个问题吗？",
        "py": "Nǐ yǒu gèng hǎo de bànfǎ lái jiějué zhège wèntí ma?",
        "vn": "Bạn có cách nào tốt hơn để giải quyết vấn đề này không?"
      }
    ],
    "hanzi": [
      {
        "c": "试",
        "p": "shì",
        "type": "左右结构 · Trái-phải",
        "st": 8,
        "ord": "讠 trái → 式 phải (giản thể)",
        "rad": "讠 (ngôn – lời nói)",
        "mean": "thử",
        "tip": "讠(lời nói) + 式(hình thức, cách thức) → nói ra để kiểm tra CÁCH THỨC = THỬ.",
        "cf": "式 (shì – \"kiểu cách\", không có bộ 讠\")",
        "w": "试 / 试试 / 考试"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Nếu bạn thấy đôi giày này đẹp thì mặc thử xem sao.",
        "answer": "如果你觉得这双鞋好看，就穿着试试吧。",
        "answerPy": "Rúguǒ nǐ juéde zhè shuāng xié hǎokàn, jiù chuānzhe shìshi ba.",
        "note": "双 là lượng từ bài 11; 试试 — dạng lặp động từ, làm nhẹ ngữ khí.",
        "pair": "如果……就……"
      },
      {
        "promptLang": "vi",
        "prompt": "Nếu bạn không chắc thì cứ thử làm xem.",
        "answer": "如果你不确定，就试着做做吧。",
        "answerPy": "Rúguǒ nǐ bú quèdìng, jiù shìzhe zuòzuo ba.",
        "note": "如果……就…… diễn tả giả thiết — kết quả.",
        "pair": "如果……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "试一试",
        "py": "shì yí shì",
        "vn": "thử một chút"
      },
      {
        "zh": "试试看",
        "py": "shìshì kàn",
        "vn": "thử xem"
      },
      {
        "zh": "穿着试试",
        "py": "chuān zhe shìshì",
        "vn": "mặc thử xem"
      },
      {
        "zh": "试着自己做",
        "py": "shì zhe zìjǐ zuò",
        "vn": "thử tự làm"
      },
      {
        "zh": "再试一次",
        "py": "zài shì yí cì",
        "vn": "thử lại một lần"
      }
    ],
    "patterns": [
      {
        "s": "V + 一 + V / VV",
        "m": "Dạng lặp động từ: 试一试, 试试 — làm nhẹ đi"
      },
      {
        "s": "试着 + V",
        "m": "Thử làm gì đó"
      }
    ]
  },
  {
    "n": 13,
    "zh": "真正",
    "py": "zhēnzhèng",
    "pos": "Phó từ",
    "vn": "thật sự",
    "hv": "chân chính",
    "em": "💯",
    "lesson": 4,
    "explain": [
      "Diễn tả tính chất chân thực, không giả tạo."
    ],
    "usage": "Phó từ, đứng trước động từ/danh từ: 真正做事情.",
    "collo": [
      "真正做事情",
      "真正的朋友",
      "真正了解"
    ],
    "ex_zh": "只有真正做事情的时候，才能了解有多难。",
    "ex_py": "Zhǐyǒu zhēnzhèng zuò shìqing de shíhou, cái néng liǎojiě yǒu duō nán.",
    "ex_vn": "Chỉ khi thực sự bắt tay vào làm mới hiểu được nó khó đến đâu.",
    "exList": [
      {
        "zh": "所以只有真正做事情的时候，才能了解有多难。",
        "py": "Suǒyǐ zhǐyǒu zhēnzhèng zuò shìqing de shíhou, cái néng liǎojiě yǒu duō nán.",
        "vn": "Vì vậy chỉ khi thực sự bắt tay vào làm mới hiểu được nó khó đến đâu."
      },
      {
        "zh": "难过的时候我们应该做一些真正能使自己快乐的事。",
        "py": "Nánguò de shíhou wǒmen yīnggāi zuò yìxiē zhēnzhèng néng shǐ zìjǐ kuàilè de shì.",
        "vn": "Lúc buồn chúng ta nên làm một số việc thật sự khiến bản thân vui vẻ."
      },
      {
        "zh": "只有真的好牛皮做出来的鞋，穿着才舒服。",
        "py": "Zhǐyǒu zhēn de hǎo niúpí zuò chulai de xié, chuānzhe cái shūfu.",
        "vn": "Chỉ có giày làm từ da bò tốt thật, mang mới thoải mái."
      }
    ],
    "hanzi": [
      {
        "c": "正",
        "p": "zhèng",
        "type": "独体字 · Chữ đơn",
        "st": 5,
        "ord": "nét liền",
        "rad": "止 (chỉ – dừng)",
        "mean": "đúng, chính",
        "tip": "Chữ tượng hình mô phỏng bước chân ĐÚNG hướng, không lệch → CHÍNH XÁC, ĐÚNG ĐẮN; 真(thật)+正(đúng) = THẬT SỰ.",
        "cf": "止 (zhǐ – \"dừng lại\", không có nét ngang trên\")",
        "w": "真正 / 正在 / 正常"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Vận động không những giúp vui vẻ, mà còn là việc thật sự làm cơ thể khoẻ lên.",
        "answer": "运动不但能让人高兴，而且是一件真正能使身体变得健康的事。",
        "answerPy": "Yùndòng búdàn néng ràng rén gāoxìng, érqiě shì yí jiàn zhēnzhèng néng shǐ shēntǐ biàn de jiànkāng de shì.",
        "note": "真正 + 的 + N hoặc 真正 + V — đích thực; khác 真 (rất).",
        "pair": "不但……而且……"
      },
      {
        "promptLang": "vi",
        "prompt": "Chỉ khi bạn thực sự cố gắng thì mới thành công.",
        "answer": "只有你真正努力，才会成功。",
        "answerPy": "Zhǐyǒu nǐ zhēnzhèng nǔlì, cái huì chénggōng.",
        "note": "只有……才…… diễn tả điều kiện duy nhất.",
        "pair": "只有……才……"
      }
    ],
    "colloFull": [
      {
        "zh": "真正的朋友",
        "py": "zhēnzhèng de péngyou",
        "vn": "người bạn thật sự"
      },
      {
        "zh": "真正明白",
        "py": "zhēnzhèng míngbai",
        "vn": "thật sự hiểu"
      },
      {
        "zh": "真正喜欢",
        "py": "zhēnzhèng xǐhuan",
        "vn": "thật lòng thích"
      },
      {
        "zh": "真正的原因",
        "py": "zhēnzhèng de yuányīn",
        "vn": "nguyên nhân thật sự"
      },
      {
        "zh": "真正能帮你的人",
        "py": "zhēnzhèng néng bāng nǐ de rén",
        "vn": "người thật sự giúp được bạn"
      }
    ],
    "patterns": [
      {
        "s": "真正 + 的 + N / 真正 + V",
        "m": "Đích thực, thật sự"
      },
      {
        "s": "真正 (đích thực) ≠ 真 (rất, quả là) — 真好 ✓ / 真正好 ✗"
      }
    ]
  },
  {
    "n": 14,
    "zh": "多么",
    "py": "duōme",
    "pos": "Phó từ",
    "vn": "(mức độ tương đối cao) mấy, bao nhiêu",
    "hv": "đa ma",
    "em": "❗",
    "lesson": 4,
    "explain": [
      "Nhấn mạnh mức độ cao trong câu cảm thán hoặc câu điều kiện."
    ],
    "usage": "多么 + [Adj]，都/也……: diễn tả bất kể mức độ cao đến đâu.",
    "collo": [
      "多么难的问题",
      "多么漂亮",
      "多么希望"
    ],
    "ex_zh": "多么难的问题，都会被解决的。",
    "ex_py": "Duōme nán de wèntí, dōu huì bèi jiějué de.",
    "ex_vn": "Vấn đề dù khó đến mấy cũng sẽ được giải quyết.",
    "exList": [
      {
        "zh": "不过，我们一定要相信：多么难的问题，都会被解决的。",
        "py": "Búguò, wǒmen yídìng yào xiāngxìn: duōme nán de wèntí, dōu huì bèi jiějué de.",
        "vn": "Tuy nhiên, chúng ta nhất định phải tin: vấn đề dù khó đến mấy cũng sẽ được giải quyết."
      },
      {
        "zh": "春天来了，公园里的花儿都开了，多么漂亮啊！",
        "py": "Chūntiān lái le, gōngyuán li de huār dōu kāi le, duōme piàoliang a!",
        "vn": "Mùa xuân đến rồi, hoa trong công viên đều nở hết, đẹp biết bao!"
      },
      {
        "zh": "我多么希望早点儿好啊。",
        "py": "Wǒ duōme xīwàng zǎo diǎnr hǎo a.",
        "vn": "Tôi mong sao mau khỏi biết bao."
      }
    ],
    "hanzi": [
      {
        "c": "么",
        "p": "me",
        "type": "独体字 · Chữ đơn (giản thể, nhẹ)",
        "st": 3,
        "ord": "nét liền",
        "rad": "丿 (phiệt)",
        "mean": "trợ từ nghi vấn/cảm thán",
        "tip": "Chữ giản thể đơn giản hóa, thường kết hợp với các từ khác (多么, 什么, 怎么) làm TRỢ TỪ không mang nghĩa riêng.",
        "cf": "公 (gōng – \"công cộng\", hình dáng khác\")",
        "w": "多么 / 什么 / 怎么"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Mùa đông vừa đến là tuyết bên ngoài đã rơi lớn biết bao!",
        "answer": "冬天一到，外面的雪就下得多么大啊！",
        "answerPy": "Dōngtiān yí dào, wàimiàn de xuě jiù xià de duōme dà a!",
        "note": "多么 + Adj + 啊 — câu cảm thán; 冬天 là từ bài 17.",
        "pair": "一……就……"
      },
      {
        "promptLang": "vi",
        "prompt": "Nếu bạn tin tưởng thì vấn đề dù khó đến mấy cũng sẽ được giải quyết.",
        "answer": "如果你相信，多么难的问题都会被解决的。",
        "answerPy": "Rúguǒ nǐ xiāngxìn, duōme nán de wèntí dōu huì bèi jiějué de.",
        "note": "如果……就…… diễn tả giả thiết — kết quả (ôn lại 相信 đã học ở Bài 18).",
        "pair": "如果……会……"
      }
    ],
    "colloFull": [
      {
        "zh": "多么漂亮",
        "py": "duōme piàoliang",
        "vn": "đẹp biết bao"
      },
      {
        "zh": "多么高兴",
        "py": "duōme gāoxìng",
        "vn": "vui biết mấy"
      },
      {
        "zh": "多么大的雪",
        "py": "duōme dà de xuě",
        "vn": "tuyết lớn biết bao"
      },
      {
        "zh": "多么好的机会",
        "py": "duōme hǎo de jīhuì",
        "vn": "cơ hội tốt biết bao"
      },
      {
        "zh": "多么可爱",
        "py": "duōme kě'ài",
        "vn": "đáng yêu biết bao"
      }
    ],
    "patterns": [
      {
        "s": "多么 + Adj + 啊",
        "m": "Câu cảm thán: … biết bao!"
      },
      {
        "s": "多么 ≈ 多",
        "m": "Khẩu ngữ hay rút thành 多: 多好啊！"
      }
    ]
  }
];

const wuData = [
  {img:'📷',label:'照相机',py:'zhàoxiàngjī',letter:'A'},
  {img:'💳',label:'信用卡',py:'xìnyòngkǎ',letter:'B'},
  {img:'🥣',label:'碗',py:'wǎn',letter:'C'},
  {img:'😢',label:'难过',py:'nánguò',letter:'D'},
  {img:'🧭',label:'东',py:'dōng',letter:'E'},
  {img:'📊',label:'成绩',py:'chéngjì',letter:'F'},
];

var dialogData = [
  {scene:'在休息室 · Trong phòng giải lao',
   preQuiz:[
     {q:'小丽的照相机怎么了？',opts:['被谁拿走了，找不到','坏了','丢在家里'],ans:0},
     {q:'同事建议怎么做？',opts:['再买一个','报警','借同事的'],ans:0},
     {q:'小丽为什么犹豫？',opts:['信用卡里的钱花得差不多了','没时间去买','商场太远'],ans:0},
   ],
   lines:[
     {sp:0,zh:'我的照相机被谁拿走了？怎么找不到了？',py:'Wǒ de zhàoxiàngjī bèi shéi ná zǒu le? Zěnme zhǎo bu dào le?',vn:'Máy ảnh của tôi bị ai lấy mất rồi? Sao tìm không thấy nữa?'},
     {sp:1,zh:'你再找找。是不是没带来？',py:'Nǐ zài zhǎozhao. Shì bu shì méi dàilai?',vn:'Bạn tìm lại xem. Có phải không mang theo không?'},
     {sp:0,zh:'我找了，没找到啊。',py:'Wǒ zhǎo le, méi zhǎodào a.',vn:'Tôi tìm rồi, không thấy đâu.'},
     {sp:1,zh:'别难过，再买一个吧，公司东门外不就有一个大商场吗？',py:'Bié nánguò, zài mǎi yí ge ba, gōngsī dōngmén wài bú jiù yǒu yí ge dà shāngchǎng ma?',vn:'Đừng buồn, mua cái khác đi, ngoài cổng đông công ty chẳng phải có một khu thương mại lớn sao?'},
     {sp:0,zh:'但是我这个月信用卡里的钱已经花得差不多了。',py:'Dànshì wǒ zhège yuè xìnyòngkǎ li de qián yǐjīng huā de chà bu duō le.',vn:'Nhưng tiền trong thẻ tín dụng của tôi tháng này đã tiêu gần hết rồi.'},
   ]},
  {scene:'在教室 · Trong lớp học',
   preQuiz:[
     {q:'她最近关心什么？',opts:['体育，天天看足球比赛','音乐','做饭'],ans:0},
     {q:'她为什么有这样的变化？',opts:['被男朋友影响的','自己一直喜欢','为了工作'],ans:0},
     {q:'这对她的学习有什么影响？',opts:['成绩差极了','成绩更好了','没有影响'],ans:0},
   ],
   lines:[
     {sp:0,zh:'你怎么突然关心起体育来了？',py:'Nǐ zěnme tūrán guānxīn qǐ tǐyù lái le?',vn:'Sao đột nhiên bạn lại quan tâm đến thể thao vậy?'},
     {sp:1,zh:'我的男朋友喜欢看足球比赛，我被他影响的。',py:'Wǒ de nánpéngyou xǐhuan kàn zúqiú bǐsài, wǒ bèi tā yǐngxiǎng de.',vn:'Bạn trai mình thích xem bóng đá, mình bị anh ấy ảnh hưởng đấy.'},
     {sp:0,zh:'看来只有爱，才能让人有变化。',py:'Kànlái zhǐyǒu ài, cái néng ràng rén yǒu biànhuà.',vn:'Xem ra chỉ có tình yêu mới có thể khiến người ta thay đổi.'},
     {sp:1,zh:'是啊，为了和他的爱好一样，我天天看球赛。',py:'Shì a, wèile hé tā de àihào yíyàng, wǒ tiāntiān kàn qiúsài.',vn:'Đúng vậy, để có cùng sở thích với anh ấy, mình xem bóng đá hàng ngày.'},
     {sp:0,zh:'除了足球，他还影响你什么了？',py:'Chúle zúqiú, tā hái yǐngxiǎng nǐ shénme le?',vn:'Ngoài bóng đá ra, anh ấy còn ảnh hưởng gì đến bạn nữa?'},
     {sp:1,zh:'我最近天天上网玩儿游戏，我的成绩差极了。',py:'Wǒ zuìjìn tiāntiān shàng wǎng wánr yóuxì, wǒ de chéngjì chà jí le.',vn:'Gần đây mình lên mạng chơi game hàng ngày, thành tích của mình tệ lắm.'},
   ]},
  {scene:'在饭馆儿 · Ở quán ăn',
   preQuiz:[
     {q:'他常常被别人认错成谁？',opts:['他哥哥','他弟弟','他同学'],ans:0},
     {q:'谁能分出来哪个是哥哥，哪个是弟弟？',opts:['他们的父母和他们自己','他们的老师','他们的朋友'],ans:0},
     {q:'除了长得像，他们还有什么相同的地方？',opts:['住在同一个楼、同一个房间','爱好相同','工作相同'],ans:0},
   ],
   lines:[
     {sp:1,zh:'那个拿着碗吃饭的人是你哥哥吗？他和你长得真像。',py:'Nàge názhe wǎn chī fàn de rén shì nǐ gēge ma? Tā hé nǐ zhǎng de zhēn xiàng.',vn:'Người cầm bát ăn cơm đó là anh trai bạn à? Anh ấy trông giống bạn thật đấy.'},
     {sp:0,zh:'我们经常被别人认错。',py:'Wǒmen jīngcháng bèi biéren rèncuò.',vn:'Chúng tôi thường bị người khác nhận nhầm.'},
     {sp:1,zh:'只有你们的爸爸妈妈才能分出来哪个是哥哥，哪个是弟弟吧。',py:'Zhǐyǒu nǐmen de bàba māma cái néng fēn chulai nǎge shì gēge, nǎge shì dìdi ba.',vn:'Chỉ có bố mẹ các bạn mới phân biệt được ai là anh, ai là em nhỉ.'},
     {sp:0,zh:'除了父母以外，还有我们自己也能啊。',py:'Chúle fùmǔ yǐwài, hái yǒu wǒmen zìjǐ yě néng a.',vn:'Ngoài bố mẹ ra, còn có chính chúng tôi cũng phân biệt được đấy.'},
     {sp:1,zh:'你们两个除了长得像，还有什么相同的地方？',py:'Nǐmen liǎng ge chúle zhǎng de xiàng, hái yǒu shénme xiāngtóng de dìfang?',vn:'Hai bạn ngoài giống nhau về ngoại hình, còn có điểm gì giống nhau nữa?'},
     {sp:0,zh:'我们住在同一个楼、同一个房间……',py:'Wǒmen zhù zài tóng yí ge lóu, tóng yí ge fángjiān……',vn:'Chúng tôi sống cùng một tòa nhà, cùng một phòng…'},
   ]},
  {scene:'独白 · Tự thuật (triết lý giải quyết vấn đề)',
   preQuiz:[
     {q:'年轻人遇到难题的时候常常怎么样？',opts:['很着急，不知道怎么办','很快就解决了','一点儿也不管'],ans:0},
     {q:'有些问题看上去很难，做起来怎么样？',opts:['非常简单','更难了','解决不了'],ans:0},
     {q:'什么时候才能了解问题有多难？',opts:['真正做事情的时候','问别人的时候','看书的时候'],ans:0},
   ],
   lines:[
     {sp:0,zh:'年轻人遇到难题，常常很着急，不知道怎么办。其实，不同的问题有不同的解决办法。',py:'Niánqīng rén yùdào nántí, chángcháng hěn zháojí, bù zhīdào zěnme bàn. Qíshí, bùtóng de wèntí yǒu bùtóng de jiějué bànfǎ.',vn:'Người trẻ gặp phải vấn đề khó, thường rất lo lắng, không biết làm sao. Thực ra, những vấn đề khác nhau có cách giải quyết khác nhau.'},
     {sp:0,zh:'有些问题看上去很难，但是做起来非常简单，所以得试着做做。',py:'Yǒuxiē wèntí kàn shangqu hěn nán, dànshì zuò qilai fēicháng jiǎndān, suǒyǐ děi shìzhe zuòzuo.',vn:'Có những vấn đề nhìn có vẻ khó, nhưng làm thì lại rất đơn giản, nên phải thử làm xem.'},
     {sp:0,zh:'有些问题看上去虽然简单，但是解决起来难极了。',py:'Yǒuxiē wèntí kàn shangqu suīrán jiǎndān, dànshì jiějué qilai nán jí le.',vn:'Có những vấn đề nhìn tuy đơn giản, nhưng giải quyết thì lại khó vô cùng.'},
     {sp:0,zh:'所以只有真正做事情的时候，才能了解有多难。',py:'Suǒyǐ zhǐyǒu zhēnzhèng zuò shìqing de shíhou, cái néng liǎojiě yǒu duō nán.',vn:'Vì vậy chỉ khi thực sự bắt tay vào làm mới hiểu được nó khó đến đâu.'},
     {sp:0,zh:'不过，我们一定要相信：多么难的问题，都会被解决的。',py:'Búguò, wǒmen yídìng yào xiāngxìn: duōme nán de wèntí, dōu huì bèi jiějué de.',vn:'Tuy nhiên, chúng ta nhất định phải tin: vấn đề dù khó đến mấy cũng sẽ được giải quyết.'},
   ]},
];

// ══════════════════════════════════════════
// PHẦN 1 · GHÉP TỪ (Collocation)
// ══════════════════════════════════════════
var matchData = [
  {left:'桌子上的蛋糕', right:'被弟弟吃完了'},
  {left:'吃完饭，我来', right:'洗碗'},
  {left:'这件衬衫很漂亮，你可以', right:'试一试'},
  {left:'爷爷奶奶最', right:'关心我们的身体'},
  {left:'这家超市买东西可以用', right:'信用卡'},
  {left:'学校的东门外', right:'有一家小饭馆'},
  {left:'别着急，这个问题我们一起想办法', right:'解决'},
];

// ══════════════════════════════════════════
// PHẦN 3a · ĐIỀN TỪ
// ══════════════════════════════════════════
var fillData = [
  {pre:'A：你的新', blank:'照相机', post:'真漂亮，多少钱？B：不太贵，三千多块。', hint:'(máy chụp ảnh)', ans:'照相机', exp:'照相机 = máy ảnh; ôn 多 sau số tròn: 三千多块 = hơn ba nghìn tệ.'},
  {pre:'A：我的面包呢？B：对不起，', blank:'被', post:'我吃了，我再给你买一个吧。', hint:'(bị)', ans:'被', exp:'Câu bị động: (vật) + 被 + người làm + động từ + 了; 面包 đã nói ở câu A nên B lược chủ ngữ.'},
  {pre:'我的小狗病了，我很', blank:'难过', post:'，一天都没吃饭。', hint:'(buồn)', ans:'难过', exp:'难过 = buồn; ôn 一 + lượng từ + 都没… (一天都没吃饭 = cả ngày không ăn gì).'},
  {pre:'学校的', blank:'东', post:'门旁边有一个超市，下课以后很多学生去那儿买饮料。', hint:'(phía đông)', ans:'东', exp:'东门 = cổng phía đông; 东 ↔ 西 (bài 12), đứng trước danh từ chỉ nơi: 东门, 西门.'},
  {pre:'奶奶一个人住在南方，我每个星期都给她打电话，很', blank:'关心', post:'她的身体。', hint:'(quan tâm)', ans:'关心', exp:'关心 + người / việc = quan tâm đến…, tân ngữ đứng ngay sau (关心她的身体).'},
  {pre:'A：妈妈，我能看电视吗？B：', blank:'只有', post:'写完作业，你才能看电视。', hint:'(chỉ có)', ans:'只有', exp:'只有 + điều kiện duy nhất, … 才 + kết quả = chỉ có… mới…; khác 只要…就 (bài 18: chỉ cần… là).'},
  {pre:'只有每天练习，你的汉语', blank:'才', post:'能越来越好。', hint:'(mới)', ans:'才', exp:'只有 đi với 才, 才 đứng sau chủ ngữ, trước 能; không dùng 就 sau 只有.'},
  {pre:'这个月他非常努力，考试', blank:'成绩', post:'比上个月好多了。', hint:'(thành tích, điểm)', ans:'成绩', exp:'考试成绩 = điểm thi; ôn 比 + tính từ + 多了 (không thêm 很).'},
  {pre:'吃完饭以后，请把', blank:'碗', post:'和筷子都洗干净。', hint:'(bát)', ans:'碗', exp:'碗 = bát; ôn 把 + vật + V + 干净 (làm cho sạch).'},
  {pre:'这两个孩子长得太像了，我', blank:'分', post:'不清楚哪个是哥哥。', hint:'(phân biệt)', ans:'分', exp:'分不清楚 = không phân biệt rõ được: 不 chen giữa 分 và 清楚.'},
  {pre:'A：我的电脑突然不能上网了。B：别着急，我来帮你', blank:'解决', post:'。', hint:'(giải quyết)', ans:'解决', exp:'解决 + vấn đề = giải quyết; 我来 + V = để tôi làm (ôn 突然, bài 6).'},
  {pre:'学了三年汉语，到了中国我才', blank:'真正', post:'了解中国人的生活。', hint:'(thật sự)', ans:'真正', exp:'真正 + động từ = thật sự…; 才 = mới (muộn hơn mình nghĩ).'},
  {pre:'你看，这儿的花', blank:'多么', post:'漂亮啊！', hint:'(biết bao, sao mà)', ans:'多么', exp:'多么 + tính từ + 啊 = … biết bao! (câu cảm thán).'},
];

// ══════════════════════════════════════════
// PHẦN 3b · SẮP XẾP
// ══════════════════════════════════════════
var sortData = [
  {words:['我的','照相机','被','朋友','借','走','了','。'], ans:'我的照相机被朋友借走了。', audio:'我的照相机被朋友借走了。'},
  {words:['这个','问题','到','现在','还','没有','被','解决','。'], ans:'这个问题到现在还没有被解决。', audio:'这个问题到现在还没有被解决。'},
  {words:['只有','到了','冬天','，','这儿','才','会','下雪','。'], ans:'只有到了冬天，这儿才会下雪。', audio:'只有到了冬天，这儿才会下雪。'},
  {words:['我的','蛋糕','被','小狗','吃','了','一半','。'], ans:'我的蛋糕被小狗吃了一半。', audio:'我的蛋糕被小狗吃了一半。'},
  {words:['外面','的','雪','下','得','多么','大','啊','！'], ans:'外面的雪下得多么大啊！', audio:'外面的雪下得多么大啊！'},
  {words:['他','总是','关心','别人','，','大家','都','很','喜欢','他','。'], ans:'他总是关心别人，大家都很喜欢他。', audio:'他总是关心别人，大家都很喜欢他。'},
  {words:['因为','经常','玩儿','游戏','，','他的','成绩','越来越','差','。'], ans:'因为经常玩儿游戏，他的成绩越来越差。', audio:'因为经常玩儿游戏，他的成绩越来越差。'},
  {words:['从','东门','进去','，','往','右','走','就是','图书馆','。'], ans:'从东门进去，往右走就是图书馆。', audio:'从东门进去，往右走就是图书馆。'},
];

// ══════════════════════════════════════════
// PHẦN 3c · SỬA LỖI SAI
// ══════════════════════════════════════════
var errorFixData = [
  {wrong:'我的手机被拿走了弟弟。',
   opts:['我的手机弟弟被拿走了。','我的手机被弟弟拿走了。','我的手机被弟弟拿了走。','被我的手机弟弟拿走了。'], ans:1,
   exp:'Câu 被: vật + 被 + người làm + động từ + kết quả: người làm (弟弟) đứng ngay sau 被, không đặt cuối câu; 拿走 không tách ra.'},
  {wrong:'我的自行车被没有骑走，还在楼下。',
   opts:['我的自行车被骑走没有，还在楼下。','我的自行车没有被骑走了，还在楼下。','我的自行车不被骑走，还在楼下。','我的自行车没有被骑走，还在楼下。'], ans:3,
   exp:'Phủ định 没(有) đứng TRƯỚC 被; câu phủ định với 没 không dùng 了, cũng không dùng 不 cho việc đã xảy ra.'},
  {wrong:'只有多听多说，就能学好汉语。',
   opts:['只有多听多说，才能学好汉语。','只有多听多说，能才学好汉语。','只要多听多说，才能学好汉语。','只有多听多说，才学好汉语能。'], ans:0,
   exp:'只有 đi với 才 (chỉ có… mới…), 只要 đi với 就 (bài 18); 才 đứng ngay trước 能.'},
  {wrong:'我的电脑被哥哥用了坏。',
   opts:['我的电脑被用哥哥坏了。','我的电脑被哥哥坏用了。','我的电脑被哥哥用坏了。','我的电脑哥哥被用坏了。'], ans:2,
   exp:'Bổ ngữ kết quả (坏) đi liền sau động từ: 用坏了, 了 đứng sau cả cụm; người làm đứng ngay sau 被.'},
  {wrong:'他是一个朋友真正。',
   opts:['他是一个真正朋友的。','他是真正一个的朋友。','他是一个真正地朋友。','他是一个真正的朋友。'], ans:3,
   exp:'Định ngữ đứng TRƯỚC danh từ (khác tiếng Việt “bạn thật sự”): 一个真正的朋友; trước danh từ dùng 的, không dùng 地.'},
  {wrong:'妈妈很关心对我的学习。',
   opts:['妈妈对很关心我的学习。','妈妈很关心我的学习。','妈妈很关心了我的学习。','妈妈关心很我的学习。'], ans:1,
   exp:'关心 là động từ, tân ngữ đứng ngay sau: 关心我的学习, không thêm 对 (khác 对…感兴趣, bài 7); 很 đứng trước động từ.'},
  {wrong:'我的信用卡被拿走了昨天。',
   opts:['我的信用卡昨天被拿走了。','我的信用卡被昨天拿走了。','我的信用卡被拿走昨天了。','我的信用卡昨天被拿了走。'], ans:0,
   exp:'Thời gian (昨天) đứng sau chủ ngữ, trước 被 — không đặt cuối câu như tiếng Việt; 走 đi liền sau 拿.'},
  {wrong:'我吃了两个碗米饭。',
   opts:['我吃了米饭两碗。','我吃两碗了米饭。','我吃了两碗米饭。','我吃了两只碗米饭。'], ans:2,
   exp:'碗 vừa là “cái bát” vừa làm lượng từ: 两碗米饭 = hai bát cơm, không thêm 个 / 只; số lượng đứng trước danh từ.'},
];

// ══════════════════════════════════════════
// LUYỆN NÓI
// ══════════════════════════════════════════
var speakingData = {
  mode: 'ai-speak',
  intro: 'Mỗi câu là một tình huống thật, trả lời về chính bạn bằng từ và mẫu câu của Bài 20 (câu chữ 被, 只有……才……). Bấm 🎙️ rồi nói bằng tiếng Trung — AI sẽ nghe, ghi lại câu bạn nói và chấm theo Nội dung · Mẫu câu · Từ vựng · Độ trôi chảy. Tự trả lời trước rồi mới mở “Câu mẫu” để đối chiếu.',
  tasks: [
    {
      situation: 'Bạn bè hỏi bạn đã bao giờ bị mất đồ chưa và sau đó giải quyết thế nào.',
      q_zh: '你的东西被别人拿走过吗？后来怎么解决的？',
      q_py: 'Nǐ de dōngxi bèi biérén názǒuguo ma? Hòulái zěnme jiějué de?',
      q_vn: 'Đồ của bạn đã bao giờ bị người khác lấy đi chưa? Sau đó giải quyết thế nào?',
      grammar: { label: 'Câu chữ 被: vật + 被 + (người) + động từ + kết quả', any: ['被'] },
      need: [
        { label: 'Nói đồ gì bị mất', any: ['手机', '钱包', '照相机', '信用卡', '伞', '衣服', '书', '自行车'] },
        { label: 'Nói cách giải quyết', any: ['解决', '找到', '打电话', '还', '问', '买'] }
      ],
      bonus: { label: 'Nói cảm xúc bằng 难过 / 着急', any: ['难过', '着急', '生气'] },
      vocab: ['被', '难过', '解决', '东'],
      minLen: 18,
      sample: '上个月我的自行车被人骑走了，我难过了好几天。后来我在学校东门旁边找到了它，问题终于解决了。',
      sample_py: 'Shàng ge yuè wǒ de zìxíngchē bèi rén qízǒu le, wǒ nánguòle hǎo jǐ tiān. Hòulái wǒ zài xuéxiào dōngmén pángbiān zhǎodàole tā, wèntí zhōngyú jiějué le.',
      sample_vn: 'Tháng trước xe đạp của tôi bị người ta lấy mất, tôi buồn mấy ngày liền. Sau đó tôi tìm thấy nó cạnh cổng đông của trường, cuối cùng chuyện cũng được giải quyết.',
      tip: 'Câu 被 hay dùng cho việc không mong muốn; kết quả (走 / 坏 / 完) đứng ngay sau động từ: 被人骑走了.'
    },
    {
      situation: 'Thầy giáo hỏi cả lớp: muốn điểm thi tốt hơn thì phải làm gì.',
      q_zh: '你觉得怎么做才能提高考试成绩？',
      q_py: 'Nǐ juéde zěnme zuò cái néng tígāo kǎoshì chéngjì?',
      q_vn: 'Bạn thấy phải làm thế nào mới nâng được điểm thi?',
      grammar: { label: '只有……，才……', any: ['只有'] },
      need: [
        { label: 'Nói cách học cụ thể', any: ['练习', '复习', '每天', '听', '写', '问', '课'] },
        { label: 'Nói kết quả', any: ['成绩', '提高', '水平', '好'] }
      ],
      bonus: { label: 'Dùng 真正 nhấn mạnh', any: ['真正'] },
      vocab: ['只有', '才', '成绩'],
      minLen: 16,
      sample: '我觉得只有每天复习，考试成绩才能真正提高。不懂的地方，我会马上问老师。',
      sample_py: 'Wǒ juéde zhǐyǒu měi tiān fùxí, kǎoshì chéngjì cái néng zhēnzhèng tígāo. Bù dǒng de dìfang, wǒ huì mǎshàng wèn lǎoshī.',
      sample_vn: 'Tôi thấy chỉ có ôn bài mỗi ngày thì điểm thi mới thật sự tăng lên. Chỗ nào không hiểu, tôi sẽ hỏi thầy ngay.',
      tip: '只有 đi với 才, 只要 đi với 就 — đừng nói 只有……就…….'
    },
    {
      situation: 'Bạn kể ai là người hiểu và quan tâm bạn nhất khi bạn buồn.',
      q_zh: '你难过的时候，谁最关心你？',
      q_py: 'Nǐ nánguò de shíhou, shéi zuì guānxīn nǐ?',
      q_vn: 'Lúc bạn buồn, ai quan tâm bạn nhất?',
      grammar: { label: '只有……才…… (chỉ có ai mới…)', any: ['只有'] },
      need: [
        { label: 'Nói người đó là ai', any: ['妈妈', '爸爸', '姐姐', '哥哥', '妹妹', '弟弟', '朋友', '奶奶', '爷爷'] },
        { label: 'Nói người đó làm gì', any: ['关心', '问', '带', '听', '陪', '打电话', '吃'] }
      ],
      vocab: ['难过', '关心'],
      minLen: 18,
      sample: '我难过的时候，只有我姐姐才知道我在想什么。她最关心我，经常带我去吃好吃的。',
      sample_py: 'Wǒ nánguò de shíhou, zhǐyǒu wǒ jiějie cái zhīdao wǒ zài xiǎng shénme. Tā zuì guānxīn wǒ, jīngcháng dài wǒ qù chī hǎochī de.',
      sample_vn: 'Lúc tôi buồn, chỉ có chị gái tôi mới biết tôi đang nghĩ gì. Chị ấy quan tâm tôi nhất, hay dẫn tôi đi ăn món ngon.',
      tip: '只有 + người, 才 + V: 只有我姐姐才知道 — 才 đứng sau chủ ngữ, trước động từ.'
    },
    {
      situation: 'Bạn kể việc nhà: ở nhà ai rửa bát, có lần nào bát đĩa bị làm vỡ không.',
      q_zh: '在你家，吃完饭谁洗碗？碗被打坏过吗？',
      q_py: 'Zài nǐ jiā, chīwán fàn shéi xǐ wǎn? Wǎn bèi dǎhuàiguo ma?',
      q_vn: 'Ở nhà bạn, ăn xong ai rửa bát? Bát đã bao giờ bị làm vỡ chưa?',
      grammar: { label: 'Câu chữ 被', any: ['被'] },
      need: [
        { label: 'Nói ai rửa bát', any: ['我', '妈妈', '爸爸', '哥哥', '姐姐', '弟弟', '妹妹'] },
        { label: 'Kể chuyện bát / đĩa', any: ['打坏', '坏', '碗', '盘子', '杯子'] }
      ],
      bonus: { label: 'Kể bố mẹ nói gì bằng 叫 / 让', any: ['叫', '让'] },
      vocab: ['碗', '被'],
      minLen: 18,
      sample: '在我家，一般是我洗碗。有一次两个盘子被我打坏了，妈妈没有生气，只叫我下次小心一点儿。',
      sample_py: 'Zài wǒ jiā, yìbān shì wǒ xǐ wǎn. Yǒu yí cì liǎng ge pánzi bèi wǒ dǎhuài le, māma méiyǒu shēngqì, zhǐ jiào wǒ xià cì xiǎoxīn yìdiǎnr.',
      sample_vn: 'Ở nhà tôi, thường là tôi rửa bát. Có lần hai cái đĩa bị tôi làm vỡ, mẹ không giận, chỉ bảo tôi lần sau cẩn thận một chút.',
      tip: 'Câu 被 có kết quả sau động từ: 被我打坏了 — không nói 被我打了坏.'
    },
    {
      situation: 'Bạn được giao một việc trông có vẻ rất khó. Bạn bè hỏi bạn có dám thử không.',
      q_zh: '遇到看上去很难的事情，你会先试一试吗？',
      q_py: 'Yùdào kàn shangqu hěn nán de shìqing, nǐ huì xiān shì yi shì ma?',
      q_vn: 'Gặp việc trông có vẻ rất khó, bạn có thử trước không?',
      grammar: { label: '只有……才…… / 多么……都……', any: ['只有', '多么'] },
      need: [
        { label: 'Trả lời có thử hay không', any: ['试', '会', '不会', '先'] },
        { label: 'Nêu suy nghĩ', any: ['难', '简单', '真正', '办法', '相信'] }
      ],
      bonus: { label: 'Dùng 多么 + tính từ', any: ['多么'] },
      vocab: ['试', '真正', '多么', '解决'],
      minLen: 18,
      sample: '我会先试一试，只有真正做了，才知道它难不难。我相信多么难的问题，大家一起想办法都能解决。',
      sample_py: 'Wǒ huì xiān shì yi shì, zhǐyǒu zhēnzhèng zuò le, cái zhīdao tā nán bu nán. Wǒ xiāngxìn duōme nán de wèntí, dàjiā yìqǐ xiǎng bànfǎ dōu néng jiějué.',
      sample_vn: 'Tôi sẽ thử trước, chỉ khi thật sự làm rồi mới biết nó có khó hay không. Tôi tin vấn đề khó đến mấy, mọi người cùng nghĩ cách đều giải quyết được.',
      tip: '多么 + tính từ + 的 + danh từ, … 都 … = dù… đến mấy cũng…; 试一试 = thử xem.'
    }
  ]
};

// ══════════════════════════════════════════
// LUYỆN DỊCH (Việt → Trung)
// ══════════════════════════════════════════
var translateData = [
  {vi:'Cái bánh mì tôi để trong tủ lạnh bị ai ăn rồi?', zh:'我放在冰箱里的面包被谁吃了？', py:'Wǒ fàng zài bīngxiāng li de miànbāo bèi shéi chī le?'},
  {vi:'Chỉ có tự bạn thử một lần mới biết ngon hay không.', zh:'只有你自己试一次，才知道好吃不好吃。', py:'Zhǐyǒu nǐ zìjǐ shì yí cì, cái zhīdao hǎochī bu hǎochī.'},
  {vi:'Đừng buồn, lần sau thành tích của bạn nhất định sẽ tốt hơn.', zh:'别难过，下次你的成绩一定会更好。', py:'Bié nánguò, xià cì nǐ de chéngjì yídìng huì gèng hǎo.'},
  {vi:'Quán ăn này không dùng được thẻ tín dụng, chỉ có thể dùng điện thoại.', zh:'这家饭馆不能用信用卡，只能用手机。', py:'Zhè jiā fànguǎn bù néng yòng xìnyòngkǎ, zhǐ néng yòng shǒujī.'},
  {vi:'Chiếc ô của tôi bị người khác cầm nhầm rồi.', zh:'我的伞被别人拿错了。', py:'Wǒ de sǎn bèi biérén nácuò le.'},
];

// ══════════════════════════════════════════
// LUYỆN DỊCH (Trung → Việt) — nội dung KHÁC với chiều Việt→Trung ở trên
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:'Vấn đề này trông thì đơn giản, nhưng thật sự giải quyết thì rất khó.', zh:'这个问题看起来很简单，但是真正解决起来很难。', py:'Zhège wèntí kàn qǐlai hěn jiǎndān, dànshì zhēnzhèng jiějué qǐlai hěn nán.'},
  {vi:'Chỉ có mẹ tôi mới phân biệt rõ được giọng của tôi và em gái tôi.', zh:'只有我妈妈才能分清楚我和我妹妹的声音。', py:'Zhǐyǒu wǒ māma cái néng fēn qīngchu wǒ hé wǒ mèimei de shēngyīn.'},
  {vi:'Ngày nào ông nội cũng quan tâm đến tin tức, đọc báo xong còn xem tivi.', zh:'爷爷每天都关心新闻，看完报纸还要看电视。', py:'Yéye měi tiān dōu guānxīn xīnwén, kànwán bàozhǐ hái yào kàn diànshì.'},
];

// ══════════════════════════════════════════
// LUYỆN NGHE — đề nghe THẬT từ HSK标准教程3 练习册 (sách bài tập Bài 20)
// ══════════════════════════════════════════
var listenData = {
  type: 'workbook',
  audio: "/audio/hsk3-bai-20/listen-full.mp3",
  dictation: [
    {num:1, lines:[
      {speaker:"女", pre:"", blank:"奶奶喜欢那个新买的照相机吗", post:"？",
       py:"Nǎinai xǐhuan nàge xīn mǎi de zhàoxiàngjī ma?",
       vn:"Bà nội có thích cái máy ảnh mới mua đó không?"},
      {speaker:"男", pre:"喜欢，", blank:"她说很好用，她很满意", post:"。",
       py:"Xǐhuan, tā shuō hěn hǎoyòng, tā hěn mǎnyì.",
       vn:"Thích, bà nói dùng tốt lắm, bà rất hài lòng."}]},
    {num:2, lines:[
      {speaker:"男", pre:"", blank:"我来洗碗筷，你去看电视吧", post:"。",
       py:"Wǒ lái xǐ wǎnkuài, nǐ qù kàn diànshì ba.",
       vn:"Tôi rửa bát đũa, bạn đi xem tivi đi."},
      {speaker:"女", pre:"不用，", blank:"你把桌子上的鱼放冰箱里就可以了", post:"。",
       py:"Búyòng, nǐ bǎ zhuōzi shang de yú fàng bīngxiāng li jiù kěyǐ le.",
       vn:"Không cần đâu, bạn để con cá trên bàn vào tủ lạnh là được rồi."}]},
    {num:3, lines:[
      {speaker:"女", pre:"", blank:"北方人是不是都像你一样这么喜欢吃面", post:"？",
       py:"Běifāngrén shì bu shì dōu xiàng nǐ yíyàng zhème xǐhuan chī miàn?",
       vn:"Người miền Bắc có phải ai cũng thích ăn mì như bạn vậy không?"},
      {speaker:"男", pre:"", blank:"不一定，东北人就更爱吃米饭", post:"。",
       py:"Bù yídìng, dōngběirén jiù gèng ài chī mǐfàn.",
       vn:"Không nhất định đâu, người Đông Bắc lại thích ăn cơm hơn."}]},
    {num:4, lines:[
      {speaker:"女", pre:"", blank:"今天风太大了，伞都要被刮走了", post:"。",
       py:"Jīntiān fēng tài dà le, sǎn dōu yào bèi guā zǒu le.",
       vn:"Hôm nay gió to quá, ô sắp bị thổi bay rồi."},
      {speaker:"男", pre:"", blank:"真希望明天天气能好点儿", post:"。",
       py:"Zhēn xīwàng míngtiān tiānqì néng hǎo diǎnr.",
       vn:"Thật mong ngày mai thời tiết tốt hơn một chút."}]},
    {num:5, lines:[
      {speaker:"女", pre:"", blank:"你怎么这么难过啊？怎么了", post:"？",
       py:"Nǐ zěnme zhème nánguò a? Zěnme le?",
       vn:"Sao bạn buồn thế? Sao vậy?"},
      {speaker:"男", pre:"", blank:"你昨天给我买的蛋糕被弟弟和妹妹吃了", post:"。",
       py:"Nǐ zuótiān gěi wǒ mǎi de dàngāo bèi dìdi hé mèimei chī le.",
       vn:"Cái bánh kem hôm qua bạn mua cho tôi bị em trai và em gái ăn mất rồi."}]},
    {num:6, stmt:"他没带照相机。", judge:true, lines:[
      {pre:"春天来了，公园里的花儿都开了，多么漂亮啊，", blank:"如果带上照相机就好了", post:"。",
       py:"Chūntiān lái le, gōngyuán li de huār dōu kāi le, duōme piàoliang a, rúguǒ dàishang zhàoxiàngjī jiù hǎo le.",
       vn:"Mùa xuân đến rồi, hoa trong công viên đều nở hết, đẹp biết bao, nếu mang theo máy ảnh thì tốt rồi."}]},
    {num:7, stmt:"那家店不能用信用卡。", judge:false, lines:[
      {pre:"今天中午在商店买东西时，服务员说我这张信用卡不能用了。", blank:"我打算下午去银行问问是怎么回事", post:"。",
       py:"Jīntiān zhōngwǔ zài shāngdiàn mǎi dōngxi shí, fúwùyuán shuō wǒ zhè zhāng xìnyòngkǎ bù néng yòng le. Wǒ dǎsuàn xiàwǔ qù yínháng wènwen shì zěnme huí shì.",
       vn:"Trưa nay lúc mua đồ ở cửa hàng, nhân viên nói thẻ tín dụng của tôi không dùng được nữa. Tôi định chiều đi ngân hàng hỏi xem là chuyện gì."}]},
    {num:8, stmt:"不高兴时做什么都不好。", judge:false, lines:[
      {pre:"难过的时候我们应该做一些真正能使自己快乐的事，", blank:"像听音乐、玩儿游戏或者去运动，这些都是不错的选择", post:"。",
       py:"Nánguò de shíhou wǒmen yīnggāi zuò yìxiē zhēnzhèng néng shǐ zìjǐ kuàilè de shì, xiàng tīng yīnyuè, wánr yóuxì huòzhě qù yùndòng, zhèxiē dōu shì búcuò de xuǎnzé.",
       vn:"Lúc buồn chúng ta nên làm một số việc thật sự khiến bản thân vui vẻ, như nghe nhạc, chơi game hoặc đi vận động, những cái này đều là lựa chọn không tệ."}]},
    {num:9, stmt:"爱有很多种。", judge:true, lines:[
      {pre:"爱可以是爸爸妈妈对孩子的照顾，可以是丈夫对妻子的关心，", blank:"也可以是你对朋友的帮助", post:"。",
       py:"Ài kěyǐ shì bàba māma duì háizi de zhàogù, kěyǐ shì zhàngfu duì qīzi de guānxīn, yě kěyǐ shì nǐ duì péngyou de bāngzhù.",
       vn:"Yêu thương có thể là sự chăm sóc của bố mẹ dành cho con cái, có thể là sự quan tâm của chồng dành cho vợ, cũng có thể là sự giúp đỡ của bạn dành cho bạn bè."}]},
    {num:10, stmt:"问题已经被他们解决了。", judge:false, lines:[
      {pre:"你别难过了，我们一起帮你想办法。", blank:"先把这个最难的问题解决了，其他问题就容易多了", post:"。",
       py:"Nǐ bié nánguò le, wǒmen yìqǐ bāng nǐ xiǎng bànfǎ. Xiān bǎ zhège zuì nán de wèntí jiějué le, qítā wèntí jiù róngyì duō le.",
       vn:"Bạn đừng buồn nữa, chúng tôi cùng giúp bạn nghĩ cách. Trước tiên giải quyết vấn đề khó nhất này, những vấn đề khác sẽ dễ hơn nhiều."}]}
  ],
  mc: [
    {num:11, options:["今天过生日","买了本字典","正在学汉语"], ans:2, q:"关于女的，可以知道什么？",
     lines:[
      {speaker:"男", pre:"妹妹，", blank:"明天是你的生日，我给你买了本汉语字典", post:"。",
       py:"Mèimei, míngtiān shì nǐ de shēngrì, wǒ gěi nǐ mǎile běn Hànyǔ zìdiǎn.",
       vn:"Em gái, mai là sinh nhật em, anh mua cho em quyển từ điển tiếng Trung."},
      {speaker:"女", pre:"你怎么知道我在学汉语？", blank:"我还一直觉得你不关心我的学习呢", post:"。",
       py:"Nǐ zěnme zhīdào wǒ zài xué Hànyǔ? Wǒ hái yìzhí juéde nǐ bù guānxīn wǒ de xuéxí ne.",
       vn:"Sao anh biết em đang học tiếng Trung? Em cứ nghĩ là anh không quan tâm việc học của em đấy."}
     ],
     explain:"男：妹妹，明天是你的生日，我给你买了本汉语字典。女：你怎么知道我在学汉语？我还一直觉得你不关心我的学习呢。问：关于女的，可以知道什么？ → 正在学汉语。"},
    {num:12, options:["往东走","往南走","往车站那边走"], ans:0, q:"男的觉得到国家公园怎么走？",
     lines:[
      {speaker:"男", pre:"放心，你就听我的吧，", blank:"只有往东走才能到国家公园", post:"。",
       py:"Fàngxīn, nǐ jiù tīng wǒ de ba, zhǐyǒu wǎng dōng zǒu cái néng dào guójiā gōngyuán.",
       vn:"Yên tâm, nghe tôi đi, chỉ có đi về hướng đông mới đến được công viên quốc gia."},
      {speaker:"女", pre:"但是从地图上看，", blank:"走南边那条路才对。我们还是去车站问问那些等车的人吧", post:"。",
       py:"Dànshì cóng dìtú shang kàn, zǒu nánbian nà tiáo lù cái duì. Wǒmen háishi qù chēzhàn wènwen nàxiē děng chē de rén ba.",
       vn:"Nhưng nhìn trên bản đồ, đi con đường phía nam mới đúng. Chúng ta ra trạm xe hỏi những người đang chờ xe thì hơn."}
     ],
     explain:"男：放心，你就听我的吧，只有往东走才能到国家公园。女：但是从地图上看，走南边那条路才对。我们还是去车站问问那些等车的人吧。问：男的觉得到国家公园怎么走？ → 往东走。"},
    {num:13, options:["帽子","书","地图"], ans:2, q:"女的在找什么？",
     lines:[
      {speaker:"男", pre:"快点儿，拿上帽子走吧，", blank:"明天你再找书", post:"。",
       py:"Kuài diǎnr, náshang màozi zǒu ba, míngtiān nǐ zài zhǎo shū.",
       vn:"Nhanh lên, cầm mũ đi thôi, mai tìm sách sau."},
      {speaker:"女", pre:"我没找书，出去玩儿还是得带上地图啊，", blank:"被你放哪儿了", post:"？",
       py:"Wǒ méi zhǎo shū, chūqu wánr háishi děi dàishang dìtú a, bèi nǐ fàng nǎr le?",
       vn:"Tôi không tìm sách, đi chơi vẫn phải mang theo bản đồ chứ, bị anh để đâu rồi?"}
     ],
     explain:"男：快点儿，拿上帽子走吧，明天你再找书。女：我没找书，出去玩儿还是得带上地图啊，被你放哪儿了？问：女的在找什么？ → 地图。"},
    {num:14, options:["在找运动服","准备去跑步","穿好了运动服"], ans:0, q:"关于女的，可以知道什么？",
     lines:[
      {speaker:"女", pre:"看见我的运动服了吗？", blank:"怎么找不到了", post:"？",
       py:"Kànjiàn wǒ de yùndòngfú le ma? Zěnme zhǎo bu dào le?",
       vn:"Có thấy đồ thể thao của tôi không? Sao tìm không thấy nữa?"},
      {speaker:"男", pre:"是不是被笑笑穿走了？", blank:"她刚才说要出去跑步", post:"。",
       py:"Shì bu shì bèi Xiàoxiao chuān zǒu le? Tā gāngcái shuō yào chūqu pǎobù.",
       vn:"Có phải bị Tiếu Tiếu mặc đi rồi không? Vừa nãy nó nói định ra ngoài chạy bộ."}
     ],
     explain:"女：看见我的运动服了吗？怎么找不到了？男：是不是被笑笑穿走了？她刚才说要出去跑步。问：关于女的，可以知道什么？ → 在找运动服。"},
    {num:15, options:["去找服务员","去拿房卡","回房间去"], ans:2, q:"男的要做什么？",
     lines:[
      {speaker:"男", pre:"我的房卡找不到了，", blank:"我怎么进去啊", post:"？",
       py:"Wǒ de fángkǎ zhǎo bu dào le, wǒ zěnme jìnqu a?",
       vn:"Thẻ phòng của tôi tìm không thấy, tôi vào bằng cách nào đây?"},
      {speaker:"女", pre:"你给服务员打个电话，", blank:"他们会帮你想办法解决的", post:"。",
       py:"Nǐ gěi fúwùyuán dǎ ge diànhuà, tāmen huì bāng nǐ xiǎng bànfǎ jiějué de.",
       vn:"Bạn gọi điện cho nhân viên đi, họ sẽ giúp bạn nghĩ cách giải quyết."}
     ],
     explain:"男：我的房卡找不到了，我怎么进去啊？女：你给服务员打个电话，他们会帮你想办法解决的。问：男的要做什么？ → 回房间去。"},
    {num:16, options:["去银行还钱","去教室上课","去借照相机"], ans:1, q:"男的要做什么？",
     lines:[
      {speaker:"女", pre:"你这么着急，", blank:"是要去哪儿啊", post:"？",
       py:"Nǐ zhème zháojí, shì yào qù nǎr a?",
       vn:"Bạn gấp gáp thế, định đi đâu vậy?"},
      {speaker:"男", pre:"我去银行，", blank:"我的信用卡该还钱了。你去哪儿", post:"？",
       py:"Wǒ qù yínháng, wǒ de xìnyòngkǎ gāi huán qián le. Nǐ qù nǎr?",
       vn:"Tôi đi ngân hàng, thẻ tín dụng của tôi phải trả tiền rồi. Bạn đi đâu?"},
      {speaker:"女", pre:"", blank:"我去教室上课", post:"。",
       py:"Wǒ qù jiàoshì shàngkè.",
       vn:"Tôi đi lớp học."},
      {speaker:"男", pre:"这个照相机是小晴的，", blank:"请你帮我还给她吧", post:"。",
       py:"Zhège zhàoxiàngjī shì Xiǎoqíng de, qǐng nǐ bāng wǒ huán gěi tā ba.",
       vn:"Cái máy ảnh này là của Tiểu Tình, nhờ bạn trả lại giúp tôi."}
     ],
     explain:"女：你这么着急，是要去哪儿啊？男：我去银行，我的信用卡该还钱了。你去哪儿？女：我去教室上课。男：这个照相机是小晴的，请你帮我还给她吧。问：男的要去做什么？ → 去教室上课。"},
    {num:17, options:["找不到照相机","忘了去教室","男的不帮她找"], ans:0, q:"女的为什么难过？",
     lines:[
      {speaker:"男", pre:"小云，", blank:"这个照相机是你要找的吗", post:"？",
       py:"Xiǎoyún, zhège zhàoxiàngjī shì nǐ yào zhǎo de ma?",
       vn:"Tiểu Vân, cái máy ảnh này có phải bạn đang tìm không?"},
      {speaker:"女", pre:"是啊，太谢谢你了。", blank:"刚才我觉得找不到了，还很难过。你在哪儿找到的", post:"？",
       py:"Shì a, tài xièxie nǐ le. Gāngcái wǒ juéde zhǎo bu dào le, hái hěn nánguò. Nǐ zài nǎr zhǎodào de?",
       vn:"Đúng rồi, cảm ơn bạn nhiều lắm. Vừa nãy tôi tưởng không tìm thấy, còn buồn lắm. Bạn tìm thấy ở đâu vậy?"},
      {speaker:"男", pre:"我是在教室找到的，", blank:"一定是被你忘在教室里了", post:"。",
       py:"Wǒ shì zài jiàoshì zhǎodào de, yídìng shì bèi nǐ wàng zài jiàoshì li le.",
       vn:"Tôi tìm thấy ở lớp học, chắc chắn là bị bạn để quên trong lớp rồi."},
      {speaker:"女", pre:"真奇怪，教室我也找过了，", blank:"怎么没发现呢", post:"？",
       py:"Zhēn qíguài, jiàoshì wǒ yě zhǎoguo le, zěnme méi fāxiàn ne?",
       vn:"Lạ thật, lớp học tôi cũng tìm rồi, sao lại không phát hiện ra nhỉ?"}
     ],
     explain:"男：小云，这个照相机是你要找的吗？女：是啊，太谢谢你了。刚才我觉得找不到了，还很难过。你在哪儿找到的？男：我是在教室找到的，一定是被你忘在教室里了。女：真奇怪，教室我也找过了，怎么没发现呢？问：女的为什么难过？ → 找不到照相机。"},
    {num:18, options:["客人已经离开了","客人对房间很满意","客人可以换个房间"], ans:2, q:"根据这段话，可以知道什么？",
     lines:[
      {speaker:"女", pre:"我觉得这样做，", blank:"客人是不会满意的", post:"。",
       py:"Wǒ juéde zhèyàng zuò, kèrén shì bú huì mǎnyì de.",
       vn:"Tôi thấy làm vậy, khách sẽ không hài lòng đâu."},
      {speaker:"男", pre:"", blank:"那你有更好的办法来解决这个问题吗", post:"？",
       py:"Nà nǐ yǒu gèng hǎo de bànfǎ lái jiějué zhège wèntí ma?",
       vn:"Vậy bạn có cách nào tốt hơn để giải quyết vấn đề này không?"},
      {speaker:"女", pre:"我觉得可以给客人换一个房间，他离开时，", blank:"我们还可以找车送他去机场", post:"。",
       py:"Wǒ juéde kěyǐ gěi kèrén huàn yí ge fángjiān, tā líkāi shí, wǒmen hái kěyǐ zhǎo chē sòng tā qù jīchǎng.",
       vn:"Tôi thấy có thể đổi cho khách một phòng khác, lúc khách rời đi, chúng ta còn có thể tìm xe đưa khách ra sân bay."},
      {speaker:"男", pre:"行，", blank:"那你去帮他换张房卡吧", post:"。",
       py:"Xíng, nà nǐ qù bāng tā huàn zhāng fángkǎ ba.",
       vn:"Được, vậy bạn đi đổi thẻ phòng giúp khách đi."}
     ],
     explain:"女：我觉得这样做，客人是不会满意的。男：那你有更好的办法来解决这个问题吗？女：我觉得可以给客人换一个房间，他离开时，我们还可以找车送他去机场。男：行，那你去帮他换张房卡吧。问：根据这段话，可以知道什么？ → 客人可以换个房间。"},
    {num:19, options:["不能再跳舞了","脚就快好了","坐电梯不小心"], ans:1, q:"关于女的，可以知道什么？",
     lines:[
      {speaker:"男", pre:"电梯来了，", blank:"您小心点儿。您的脚怎么样了", post:"？",
       py:"Diàntī lái le, nín xiǎoxīn diǎnr. Nín de jiǎo zěnme yàng le?",
       vn:"Thang máy đến rồi, chị cẩn thận chút. Chân chị thế nào rồi?"},
      {speaker:"女", pre:"谢谢你送我回来。", blank:"脚好一些了，只要再休息几天，就能跟你们出去跳舞了", post:"。",
       py:"Xièxie nǐ sòng wǒ huílai. Jiǎo hǎo yìxiē le, zhǐyào zài xiūxi jǐ tiān, jiù néng gēn nǐmen chūqu tiàowǔ le.",
       vn:"Cảm ơn anh đưa tôi về. Chân đỡ hơn rồi, chỉ cần nghỉ thêm mấy ngày, là có thể đi khiêu vũ cùng mọi người rồi."},
      {speaker:"男", pre:"那太好了，只有您来了，", blank:"我们才能跳得更快乐", post:"。",
       py:"Nà tài hǎo le, zhǐyǒu nín lái le, wǒmen cái néng tiào de gèng kuàilè.",
       vn:"Vậy tốt quá, chỉ có chị đến, chúng tôi mới nhảy vui hơn được."},
      {speaker:"女", pre:"跟你们一起玩儿我也更快乐，", blank:"我多么希望早点儿好啊", post:"。",
       py:"Gēn nǐmen yìqǐ wánr wǒ yě gèng kuàilè, wǒ duōme xīwàng zǎo diǎnr hǎo a.",
       vn:"Chơi cùng mọi người tôi cũng vui hơn, tôi mong sao mau khỏi biết bao."}
     ],
     explain:"男：电梯来了，您小心点儿。您的脚怎么样了？女：谢谢你送我回来。脚好一些了，只要再休息几天，就能跟你们出去跳舞了。男：那太好了，只有您来了，我们才能跳得更快乐。女：跟你们一起玩儿我也更快乐，我多么希望早点儿好啊。问：关于女的，可以知道什么？ → 脚就快好了。"},
    {num:20, options:["饭馆","商店","动物园"], ans:1, q:"他们最可能在哪儿？",
     lines:[
      {speaker:"男", pre:"小姐，这双黑色的皮鞋多少钱？", blank:"有43号的吗", post:"？",
       py:"Xiǎojiě, zhè shuāng hēisè de píxié duōshao qián? Yǒu sìshísān hào de ma?",
       vn:"Cô ơi, đôi giày da đen này bao nhiêu tiền? Có cỡ 43 không?"},
      {speaker:"女", pre:"六百八，", blank:"帮您找双43号的试试", post:"？",
       py:"Liùbǎi bā, bāng nín zhǎo shuāng sìshísān hào de shìshi?",
       vn:"Sáu trăm tám, tôi tìm giúp anh đôi cỡ 43 thử nhé?"},
      {speaker:"男", pre:"这么贵，", blank:"是真牛皮的吗", post:"？",
       py:"Zhème guì, shì zhēn niúpí de ma?",
       vn:"Đắt thế, có phải da bò thật không?"},
      {speaker:"女", pre:"当然了，只有真的好牛皮做出来的鞋，", blank:"穿着才舒服", post:"。",
       py:"Dāngrán le, zhǐyǒu zhēn de hǎo niúpí zuò chulai de xié, chuānzhe cái shūfu.",
       vn:"Đương nhiên rồi, chỉ có giày làm từ da bò tốt thật, mang mới thoải mái."}
     ],
     explain:"男：小姐，这双黑色的皮鞋多少钱？有43号的吗？女：六百八，帮您找双43号的试试？男：这么贵，是真牛皮的吗？女：当然了，只有真的好牛皮做出来的鞋，穿着才舒服。问：他们最可能在哪儿？ → 商店。"}
  ]
};
