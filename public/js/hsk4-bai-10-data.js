// ══════════════════════════════════════════
// DATA — HSK4 Bài 10: 幸福的标准 (Tiêu chuẩn của hạnh phúc)
// Nguồn: HSK标准教程4上 (Giáo trình chuẩn HSK 4 — nhantriviet.com)
// ══════════════════════════════════════════
var vocabData = [
  {
    "n": 1,
    "zh": "礼拜天",
    "py": "lǐbàitiān",
    "pos": "Danh từ",
    "vn": "chủ nhật",
    "hv": "lễ bái thiên",
    "em": "📅",
    "lesson": 1,
    "explain": [
      "Ngày cuối cùng trong tuần, ngày nghỉ (cách gọi khác của 星期天)."
    ],
    "usage": "Danh từ; thường đi với 礼拜天有空儿吗.",
    "collo": [
      "礼拜天有空儿吗",
      "礼拜天陪我",
      "这个礼拜天"
    ],
    "ex_zh": "礼拜天有空儿吗？陪我去逛街怎么样？",
    "ex_py": "Lǐbàitiān yǒu kòngr ma? Péi wǒ qù guàng jiē zěnmeyàng?",
    "ex_vn": "Chủ nhật rảnh không? Đi cùng tôi dạo phố thì thế nào?",
    "exList": [
      {
        "zh": "礼拜天有空儿吗？陪我去逛街怎么样？",
        "py": "Lǐbàitiān yǒu kòngr ma? Péi wǒ qù guàng jiē zěnmeyàng?",
        "vn": "Chủ nhật rảnh không? Đi cùng tôi dạo phố thì thế nào?"
      },
      {
        "zh": "我们礼拜天去看电影吧。",
        "py": "Wǒmen lǐbàitiān qù kàn diànyǐng ba.",
        "vn": "Chúng ta chủ nhật đi xem phim đi."
      },
      {
        "zh": "这个礼拜天我要去看望父母。",
        "py": "Zhège lǐbàitiān wǒ yào qù kànwàng fùmǔ.",
        "vn": "Chủ nhật này tôi phải đi thăm bố mẹ."
      }
    ],
    "hanzi": [
      {
        "c": "礼",
        "p": "lǐ",
        "type": "左右结构 · Trái-phải (giản thể)",
        "st": 5,
        "ord": "礻 (kỳ) trái → 乚 phải",
        "rad": "礻 (kỳ – thần linh, lễ nghi)",
        "mean": "lễ nghi",
        "tip": "Bộ 礻(liên quan tế lễ) → mở rộng thành LỄ NGHI, kết hợp 拜(bái - lễ bái) và 天(ngày) thành 礼拜天 = ngày LỄ BÁI (Chủ Nhật, ngày nghỉ để đi lễ nhà thờ theo cách gọi cũ).",
        "cf": "裡 (lǐ – \"bên trong\", phồn thể)",
        "w": "礼拜天 / 礼物 / 礼貌"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Nếu chủ nhật này bạn rảnh thì đi cùng tôi mua quà sinh nhật cho chồng nhé.",
        "answer": "要是这个礼拜天你有空儿，就陪我去买丈夫的生日礼物吧。",
        "answerPy": "Yàoshi zhège lǐbàitiān nǐ yǒu kòngr, jiù péi wǒ qù mǎi zhàngfu de shēngrì lǐwù ba.",
        "note": "陪 là từ bài 2 — 陪 + ai + V.",
        "pair": "要是……就……"
      },
      {
        "promptLang": "vi",
        "prompt": "Tôi định chủ nhật đi thăm bố mẹ, nếu bạn rảnh thì đi cùng luôn.",
        "answer": "我打算礼拜天去看望父母，要是你有空儿，就一起去吧。",
        "answerPy": "Wǒ dǎsuàn lǐbàitiān qù kànwàng fùmǔ, yàoshi nǐ yǒu kòngr, jiù yìqǐ qù ba.",
        "note": "礼拜天 ≈ 星期天, thiên khẩu ngữ.",
        "pair": "要是……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "这个礼拜天",
        "py": "zhège lǐbàitiān",
        "vn": "chủ nhật này"
      },
      {
        "zh": "礼拜天有空儿",
        "py": "lǐbàitiān yǒu kòngr",
        "vn": "chủ nhật rảnh"
      },
      {
        "zh": "礼拜天陪我",
        "py": "lǐbàitiān péi wǒ",
        "vn": "chủ nhật đi cùng tôi"
      },
      {
        "zh": "上个礼拜天",
        "py": "shàng gè lǐbàitiān",
        "vn": "chủ nhật tuần trước"
      },
      {
        "zh": "礼拜天去看父母",
        "py": "lǐbàitiān qù kàn fùmǔ",
        "vn": "chủ nhật đi thăm bố mẹ"
      }
    ],
    "patterns": [
      {
        "s": "礼拜天 ≈ 星期天",
        "m": "礼拜天 thiên khẩu ngữ, 星期天 trung tính"
      },
      {
        "s": "这个 / 上个 + 礼拜天",
        "m": "Chủ nhật này / tuần trước"
      }
    ]
  },
  {
    "n": 2,
    "zh": "空儿",
    "py": "kòngr",
    "pos": "Danh từ",
    "vn": "thời gian rảnh",
    "hv": "khống nhi",
    "em": "🕐",
    "lesson": 1,
    "explain": [
      "Khoảng thời gian rảnh rỗi, không bận việc."
    ],
    "usage": "Danh từ; thường đi với 有空儿吗, 哪天有空儿.",
    "collo": [
      "有空儿吗",
      "哪天有空儿",
      "没空儿"
    ],
    "ex_zh": "礼拜天有空儿吗？陪我去逛街怎么样？",
    "ex_py": "Lǐbàitiān yǒu kòngr ma? Péi wǒ qù guàng jiē zěnmeyàng?",
    "ex_vn": "Chủ nhật rảnh không? Đi cùng tôi dạo phố thì thế nào?",
    "exList": [
      {
        "zh": "礼拜天有空儿吗？陪我去逛街怎么样？",
        "py": "Lǐbàitiān yǒu kòngr ma? Péi wǒ qù guàng jiē zěnmeyàng?",
        "vn": "Chủ nhật rảnh không? Đi cùng tôi dạo phố thì thế nào?"
      },
      {
        "zh": "你最近忙吗？哪天有空儿？",
        "py": "Nǐ zuìjìn máng ma? Nǎ tiān yǒu kòngr?",
        "vn": "Gần đây bạn bận không? Hôm nào rảnh?"
      },
      {
        "zh": "我今天没空儿，改天再说吧。",
        "py": "Wǒ jīntiān méi kòngr, gǎitiān zài shuō ba.",
        "vn": "Hôm nay tôi không rảnh, để hôm khác nói tiếp nhé."
      }
    ],
    "hanzi": [
      {
        "c": "空",
        "p": "kòng",
        "type": "上下结构 · Trên-dưới",
        "st": 8,
        "ord": "穴 (huyệt) trên → 工 (công) dưới",
        "rad": "穴 (huyệt – hang, lỗ)",
        "mean": "trống, rảnh",
        "tip": "Bộ 穴(khoảng trống) + 工(biểu âm) → KHOẢNG TRỐNG, mở rộng thành THỜI GIAN TRỐNG/RẢNH; đọc \"kòng\" (khác \"kōng\" nghĩa \"trên không\").",
        "cf": "空 khi đọc \"kōng\" nghĩa là BẦU TRỜI/TRỐNG RỖNG (天空)",
        "w": "空儿 / 有空 / 空闲"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Dạo này bạn bận không? Hôm nào rảnh thì chúng mình đi uống trà nhé.",
        "answer": "你最近忙吗？哪天有空儿，咱们就一起去喝茶吧。",
        "answerPy": "Nǐ zuìjìn máng ma? Nǎ tiān yǒu kòngr, zánmen jiù yìqǐ qù hē chá ba.",
        "note": "咱们 là từ bài 3 — rủ rê, gồm cả người nghe.",
        "pair": "……就……"
      },
      {
        "promptLang": "vi",
        "prompt": "Tuy hôm nay tôi không rảnh, nhưng hôm khác nhất định sẽ đi cùng bạn.",
        "answer": "虽然我今天没空儿，但是改天一定陪你去。",
        "answerPy": "Suīrán wǒ jīntiān méi kòngr, dànshì gǎitiān yídìng péi nǐ qù.",
        "note": "改天 — hôm khác, dùng khi hẹn lại.",
        "pair": "虽然……但是……"
      }
    ],
    "colloFull": [
      {
        "zh": "有空儿",
        "py": "yǒu kòngr",
        "vn": "có thời gian rảnh"
      },
      {
        "zh": "没空儿",
        "py": "méi kòngr",
        "vn": "không rảnh"
      },
      {
        "zh": "哪天有空儿",
        "py": "nǎ tiān yǒu kòngr",
        "vn": "hôm nào rảnh"
      },
      {
        "zh": "有空儿的时候",
        "py": "yǒu kòngr de shíhou",
        "vn": "lúc rảnh rỗi"
      },
      {
        "zh": "抽空儿",
        "py": "chōu kòngr",
        "vn": "tranh thủ chút thời gian"
      }
    ],
    "patterns": [
      {
        "s": "有 / 没 + 空儿",
        "m": "Có / không có thời gian rảnh"
      },
      {
        "s": "空儿 (kòngr) ≠ 空 (kōng)",
        "m": "kòngr là chỗ trống, thời gian rảnh"
      }
    ]
  },
  {
    "n": 3,
    "zh": "母亲",
    "py": "mǔqīn",
    "pos": "Danh từ",
    "vn": "mẹ",
    "hv": "mẫu thân",
    "em": "👩",
    "lesson": 1,
    "explain": [
      "Cách gọi trang trọng của người mẹ."
    ],
    "usage": "Danh từ; thường đi với 需要照顾, 在母亲面前.",
    "collo": [
      "母亲和儿子",
      "在母亲面前",
      "照顾母亲"
    ],
    "ex_zh": "除了工作以外，家里还有母亲和儿子需要照顾。",
    "ex_py": "Chúle gōngzuò yǐwài, jiā li hái yǒu mǔqīn hé érzi xūyào zhàogù.",
    "ex_vn": "Ngoài công việc ra, trong nhà còn có mẹ và con trai cần chăm sóc.",
    "exList": [
      {
        "zh": "除了工作以外，家里还有母亲和儿子需要照顾。",
        "py": "Chúle gōngzuò yǐwài, jiā li hái yǒu mǔqīn hé érzi xūyào zhàogù.",
        "vn": "Ngoài công việc ra, trong nhà còn có mẹ và con trai cần chăm sóc."
      },
      {
        "zh": "因为在母亲面前我可以做一个永远长不大的孩子。",
        "py": "Yīnwèi zài mǔqīn miànqián wǒ kěyǐ zuò yí ge yǒngyuǎn zhǎng bu dà de háizi.",
        "vn": "Vì trước mặt mẹ tôi có thể làm một đứa trẻ mãi mãi không lớn."
      },
      {
        "zh": "她的母亲是一位教授。",
        "py": "Tā de mǔqīn shì yí wèi jiàoshòu.",
        "vn": "Mẹ của cô ấy là một giáo sư."
      }
    ],
    "hanzi": [
      {
        "c": "亲",
        "p": "qīn",
        "type": "上下结构 · Trên-dưới (giản thể)",
        "st": 9,
        "ord": "亠+木 trên → 见(biến thể) dưới",
        "rad": "木 (mộc)",
        "mean": "thân thiết, người thân",
        "tip": "Chữ giản thể mang nghĩa THÂN THIẾT, kết hợp 母(mẹ) thành 母亲 = MẸ (người thân thiết nhất).",
        "cf": "新 (xīn – \"mới\", tự dạng gần giống nhưng có bộ 斤\")",
        "w": "母亲 / 父亲 / 亲戚"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Ngoài công việc ra, trong nhà còn có mẹ và con trai cần cô ấy chăm sóc.",
        "answer": "除了工作以外，家里还有母亲和儿子需要她照顾。",
        "answerPy": "Chúle gōngzuò yǐwài, jiā li hái yǒu mǔqīn hé érzi xūyào tā zhàogù.",
        "note": "母亲和儿子 — mẹ và con trai.",
        "pair": "除了……以外……"
      },
      {
        "promptLang": "vi",
        "prompt": "Trước mặt mẹ, tôi luôn cảm thấy mình vẫn còn là một đứa trẻ.",
        "answer": "在母亲面前，我总觉得自己还是个孩子。",
        "answerPy": "Zài mǔqīn miànqián, wǒ zǒng juéde zìjǐ háishi ge háizi.",
        "note": "在母亲面前 — trước mặt mẹ.",
        "pair": "……，还是……"
      }
    ],
    "colloFull": [
      {
        "zh": "照顾母亲",
        "py": "zhàogù mǔqīn",
        "vn": "chăm sóc mẹ"
      },
      {
        "zh": "在母亲面前",
        "py": "zài mǔqīn miàn qián",
        "vn": "trước mặt mẹ"
      },
      {
        "zh": "母亲和儿子",
        "py": "mǔqīn hé érzi",
        "vn": "mẹ và con trai"
      },
      {
        "zh": "我的母亲",
        "py": "wǒ de mǔqīn",
        "vn": "mẹ tôi"
      },
      {
        "zh": "母亲节",
        "py": "mǔqīnjié",
        "vn": "ngày của mẹ"
      }
    ],
    "patterns": [
      {
        "s": "母亲 ≈ 妈妈",
        "m": "母亲 trang trọng, dùng khi viết; 妈妈 dùng khi gọi"
      },
      {
        "s": "在 + ai + 面前",
        "m": "Trước mặt ai"
      }
    ]
  },
  {
    "n": 4,
    "zh": "不过",
    "py": "búguò",
    "pos": "Liên từ/Phó từ",
    "vn": "nhưng, song; chỉ, chưa quá",
    "hv": "bất quá",
    "em": "↩️",
    "lesson": 1,
    "explain": [
      "1. (Liên từ) Đứng ở đầu vế câu sau, diễn tả sự chuyển ý, bổ sung/điều chỉnh ý của vế câu trước.",
      "2. (Phó từ) Diễn tả \"chỉ, chưa quá\", nhấn mạnh số lượng/phạm vi nhỏ, thường đi với con số."
    ],
    "usage": "Liên từ: ……不过……(bổ sung, điều chỉnh); phó từ: 不过 + số lượng.",
    "collo": [
      "不过现在我很幸福",
      "不过是给了些建议",
      "不过50公斤"
    ],
    "ex_zh": "没事儿，谢谢！不过现在我很幸福。",
    "ex_py": "Méishìr, xièxie! Búguò xiànzài wǒ hěn xìngfú.",
    "ex_vn": "Không sao, cảm ơn! Nhưng bây giờ tôi rất hạnh phúc.",
    "exList": [
      {
        "zh": "没事儿，谢谢！不过现在我很幸福。",
        "py": "Méishìr, xièxie! Búguò xiànzài wǒ hěn xìngfú.",
        "vn": "Không sao, cảm ơn! Nhưng bây giờ tôi rất hạnh phúc."
      },
      {
        "zh": "不过，现在什么东西都那么贵，生活压力太大了。",
        "py": "Búguò, xiànzài shénme dōngxi dōu nàme guì, shēnghuó yālì tài dà le.",
        "vn": "Nhưng, bây giờ cái gì cũng đắt như vậy, áp lực cuộc sống quá lớn."
      },
      {
        "zh": "你太客气了，我不过是给了些建议，这一切都是你们辛苦努力的结果。",
        "py": "Nǐ tài kèqi le, wǒ búguò shì gěile xiē jiànyì, zhè yíqiè dōu shì nǐmen xīnkǔ nǔlì de jiéguǒ.",
        "vn": "Bạn khách sáo quá rồi, tôi chỉ là đưa ra vài ý kiến thôi, tất cả đây đều là kết quả nỗ lực vất vả của các bạn."
      }
    ],
    "hanzi": [
      {
        "c": "过",
        "p": "guò",
        "type": "半包围结构 · Bán bao vây (giản thể)",
        "st": 6,
        "ord": "讠(biến thể) trái → 寸 phải",
        "rad": "辶 (sước – đi)",
        "mean": "qua, vượt quá",
        "tip": "Bộ đi 辶 + 寸(biểu âm) → hành động ĐI QUA, VƯỢT QUA, kết hợp 不(không) thành 不过 = KHÔNG QUA, mở rộng thành NHƯNG (chuyển ý) hoặc CHỈ (không vượt quá mức).",
        "cf": "讨 (tǎo – \"thảo luận\", bộ 讠\")",
        "w": "不过 / 经过 / 通过"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Chiếc áo đẹp thế này, nhưng giá hơi cao, mua một cái đi.",
        "answer": "这么漂亮的衣服，不过价格有点儿高，买一件吧。",
        "answerPy": "Zhème piàoliang de yīfu, búguò jiàgé yǒudiǎnr gāo, mǎi yí jiàn ba.",
        "note": "不过 (liên từ) kết hợp 价格, ôn lại từ vựng Bài 5.",
        "pair": "……，不过……"
      },
      {
        "promptLang": "vi",
        "prompt": "Năm ngoái tôi chỉ nặng chưa tới 50 cân, sao năm nay ăn càng nhiều lại càng béo thế này?",
        "answer": "去年我不过50公斤，今年怎么越吃越胖了？",
        "answerPy": "Qùnián wǒ búguò 50 gōngjīn, jīnnián zěnme yuè chī yuè pàng le?",
        "note": "不过 + số lượng — chỉ, chưa tới (phó từ).",
        "pair": "越……越……"
      }
    ],
    "colloFull": [
      {
        "zh": "不过现在",
        "py": "búguò xiànzài",
        "vn": "nhưng bây giờ"
      },
      {
        "zh": "不过是",
        "py": "búguò shì",
        "vn": "chỉ là"
      },
      {
        "zh": "不过50公斤",
        "py": "búguò gōngjīn",
        "vn": "chưa tới 50 cân"
      },
      {
        "zh": "……，不过……",
        "py": "búguò",
        "vn": "…, nhưng…"
      },
      {
        "zh": "不过我觉得",
        "py": "búguò wǒ juéde",
        "vn": "nhưng tôi thấy"
      }
    ],
    "patterns": [
      {
        "s": "mệnh đề 1，不过 + mệnh đề 2 (liên từ)",
        "m": "…, nhưng … — nhẹ hơn 但是"
      },
      {
        "s": "不过 + số lượng (phó từ)",
        "m": "Chỉ, chưa tới bao nhiêu"
      }
    ]
  },
  {
    "n": 5,
    "zh": "永远",
    "py": "yǒngyuǎn",
    "pos": "Phó từ",
    "vn": "vĩnh viễn, mãi mãi",
    "hv": "vĩnh viễn",
    "em": "♾️",
    "lesson": 1,
    "explain": [
      "Diễn tả trạng thái không thay đổi, kéo dài mãi mãi."
    ],
    "usage": "Phó từ, đứng trước động từ/tính từ: 永远长不大, 永远不为……烦恼.",
    "collo": [
      "永远长不大的孩子",
      "永远不为……担心",
      "永远都不会想要"
    ],
    "ex_zh": "因为在母亲面前我可以做一个永远长不大的孩子。",
    "ex_py": "Yīnwèi zài mǔqīn miànqián wǒ kěyǐ zuò yí ge yǒngyuǎn zhǎng bu dà de háizi.",
    "ex_vn": "Vì trước mặt mẹ tôi có thể làm một đứa trẻ mãi mãi không lớn.",
    "exList": [
      {
        "zh": "因为在母亲面前我可以做一个永远长不大的孩子。",
        "py": "Yīnwèi zài mǔqīn miànqián wǒ kěyǐ zuò yí ge yǒngyuǎn zhǎng bu dà de háizi.",
        "vn": "Vì trước mặt mẹ tôi có thể làm một đứa trẻ mãi mãi không lớn."
      },
      {
        "zh": "一个不知道自己缺点的人，永远都不会想要去改变。",
        "py": "Yí ge bù zhīdào zìjǐ quēdiǎn de rén, yǒngyuǎn dōu bú huì xiǎng yào qù gǎibiàn.",
        "vn": "Một người không biết khuyết điểm của bản thân, mãi mãi sẽ không muốn thay đổi."
      },
      {
        "zh": "它们永远不为昨天的事烦恼，也不为明天的事担心。",
        "py": "Tāmen yǒngyuǎn bù wèi zuótiān de shì fánnǎo, yě bú wèi míngtiān de shì dānxīn.",
        "vn": "Chúng mãi mãi không phiền muộn vì chuyện hôm qua, cũng không lo lắng vì chuyện ngày mai."
      }
    ],
    "hanzi": [
      {
        "c": "永",
        "p": "yǒng",
        "type": "独体字 · Chữ đơn",
        "st": 5,
        "ord": "nét liền",
        "rad": "水 (thủy, biến thể)",
        "mean": "dài lâu, vĩnh cửu",
        "tip": "Chữ tượng hình DÒNG SÔNG chảy dài không dứt → mở rộng thành DÀI LÂU, VĨNH CỬU, kết hợp 远(xa) thành 永远 = VĨNH VIỄN, MÃI MÃI.",
        "cf": "泳 (yǒng – \"bơi\", bộ 氵\")",
        "w": "永远 / 永久 / 永不"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Một người không biết khuyết điểm của bản thân, mãi mãi sẽ không nghĩ đến việc thay đổi.",
        "answer": "一个不知道自己缺点的人，永远都不会想要去改变。",
        "answerPy": "Yí ge bù zhīdào zìjǐ quēdiǎn de rén, yǒngyuǎn dōu bú huì xiǎng yào qù gǎibiàn.",
        "note": "永远都不会……改变 — mãi mãi sẽ không thay đổi.",
        "pair": "一……都……"
      },
      {
        "promptLang": "vi",
        "prompt": "Chúng không những chẳng vì chuyện hôm qua mà phiền lòng, mà còn chẳng lo chuyện ngày mai.",
        "answer": "它们不但永远不为昨天的事烦恼，而且也不为明天的事担心。",
        "answerPy": "Tāmen búdàn yǒngyuǎn bú wèi zuótiān de shì fánnǎo, érqiě yě bú wèi míngtiān de shì dānxīn.",
        "note": "烦恼 là từ bài 7; 为 + N + 烦恼 — phiền lòng vì cái gì.",
        "pair": "不但……而且……"
      }
    ],
    "colloFull": [
      {
        "zh": "永远不会",
        "py": "yǒngyuǎn bú huì",
        "vn": "mãi mãi sẽ không"
      },
      {
        "zh": "永远长不大",
        "py": "yǒngyuǎn zhǎng bú dà",
        "vn": "mãi không lớn"
      },
      {
        "zh": "永远都不",
        "py": "yǒngyuǎn dōu bù",
        "vn": "vĩnh viễn không"
      },
      {
        "zh": "永远记住",
        "py": "yǒngyuǎn jì zhù",
        "vn": "nhớ mãi"
      },
      {
        "zh": "永远在一起",
        "py": "yǒngyuǎn zài yìqǐ",
        "vn": "mãi bên nhau"
      }
    ],
    "patterns": [
      {
        "s": "永远 + 不 / 都不 + V",
        "m": "Vĩnh viễn không …"
      },
      {
        "s": "✗ 永远的朋友很好 → ✓ 我们永远是朋友",
        "m": "永远 là phó từ, đứng trước vị ngữ"
      }
    ]
  },
  {
    "n": 6,
    "zh": "方向",
    "py": "fāngxiàng",
    "pos": "Danh từ",
    "vn": "phương hướng, sự định hướng",
    "hv": "phương hướng",
    "em": "🧭",
    "lesson": 1,
    "explain": [
      "Hướng đi/mục tiêu mà một người/sự việc hướng tới."
    ],
    "usage": "Danh từ; thường đi với 努力的方向, 有了方向.",
    "collo": [
      "努力的方向",
      "有了方向",
      "正确的方向"
    ],
    "ex_zh": "这让我有了努力的方向。",
    "ex_py": "Zhè ràng wǒ yǒule nǔlì de fāngxiàng.",
    "ex_vn": "Điều này khiến tôi có được phương hướng nỗ lực.",
    "exList": [
      {
        "zh": "这让我有了努力的方向。",
        "py": "Zhè ràng wǒ yǒule nǔlì de fāngxiàng.",
        "vn": "Điều này khiến tôi có được phương hướng nỗ lực."
      },
      {
        "zh": "找到人生的方向很重要。",
        "py": "Zhǎodào rénshēng de fāngxiàng hěn zhòngyào.",
        "vn": "Tìm được phương hướng cuộc đời rất quan trọng."
      },
      {
        "zh": "你走错方向了，应该往左边走。",
        "py": "Nǐ zǒucuò fāngxiàng le, yīnggāi wǎng zuǒbian zǒu.",
        "vn": "Bạn đi sai hướng rồi, nên đi về phía trái."
      }
    ],
    "hanzi": [
      {
        "c": "向",
        "p": "xiàng",
        "type": "独体字 · Chữ đơn",
        "st": 6,
        "ord": "nét liền",
        "rad": "口 (khẩu, biến thể)",
        "mean": "hướng về",
        "tip": "Chữ tượng hình cửa sổ HƯỚNG RA ngoài → nghĩa gốc là HƯỚNG VỀ, kết hợp 方(phương) thành 方向 = PHƯƠNG HƯỚNG.",
        "cf": "尚 (shàng – \"còn, vẫn\", tự dạng gần giống)",
        "w": "方向 / 方面 / 方法"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Chính vì trong lòng có mẹ và con cần chăm lo, nên cô ấy mới có được hướng đi để cố gắng.",
        "answer": "正因为心里有母亲和孩子需要照顾，所以她才有了努力的方向。",
        "answerPy": "Zhèng yīnwèi xīnli yǒu mǔqīn hé háizi xūyào zhàogù, suǒyǐ tā cái yǒule nǔlì de fāngxiàng.",
        "note": "母亲 trang trọng hơn 妈妈, dùng khi kể chuyện.",
        "pair": "因为……所以……"
      },
      {
        "promptLang": "vi",
        "prompt": "Chỉ cần tìm được phương hướng đúng đắn, thành công sẽ không còn xa nữa.",
        "answer": "只要找到正确的方向，成功就不远了。",
        "answerPy": "Zhǐyào zhǎodào zhèngquè de fāngxiàng, chénggōng jiù bù yuǎn le.",
        "note": "正确的方向 kết hợp 正确, ôn lại từ vựng Bài 9.",
        "pair": "只要……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "努力的方向",
        "py": "nǔlì de fāngxiàng",
        "vn": "phương hướng nỗ lực"
      },
      {
        "zh": "有了方向",
        "py": "yǒu le fāngxiàng",
        "vn": "đã có hướng đi"
      },
      {
        "zh": "正确的方向",
        "py": "zhèngquè de fāngxiàng",
        "vn": "hướng đi đúng"
      },
      {
        "zh": "方向不对",
        "py": "fāngxiàng bú duì",
        "vn": "sai hướng"
      },
      {
        "zh": "朝这个方向",
        "py": "cháo zhège fāngxiàng",
        "vn": "theo hướng này"
      }
    ],
    "patterns": [
      {
        "s": "V + 的 + 方向",
        "m": "Phương hướng để làm gì"
      },
      {
        "s": "方向 + 对 / 不对",
        "m": "Hướng đúng / sai"
      }
    ]
  },
  {
    "n": 7,
    "zh": "优秀",
    "py": "yōuxiù",
    "pos": "Tính từ",
    "vn": "xuất sắc, ưu tú",
    "hv": "ưu tú",
    "em": "🌟",
    "lesson": 2,
    "explain": [
      "Nổi trội, giỏi giang hơn mức bình thường."
    ],
    "usage": "Tính từ; thường đi với 那么优秀, 优秀的学生.",
    "collo": [
      "那么优秀",
      "优秀的学生",
      "非常优秀"
    ],
    "ex_zh": "你有一个漂亮的女儿，还那么优秀，硕士毕业后就当了翻译。",
    "ex_py": "Nǐ yǒu yí ge piàoliang de nǚ'ér, hái nàme yōuxiù, shuòshì bìyè hòu jiù dāngle fānyì.",
    "ex_vn": "Bạn có một cô con gái xinh đẹp, lại xuất sắc như vậy, tốt nghiệp thạc sĩ xong liền làm phiên dịch viên.",
    "exList": [
      {
        "zh": "你有一个漂亮的女儿，还那么优秀，硕士毕业后就当了翻译。",
        "py": "Nǐ yǒu yí ge piàoliang de nǚ'ér, hái nàme yōuxiù, shuòshì bìyè hòu jiù dāngle fānyì.",
        "vn": "Bạn có một cô con gái xinh đẹp, lại xuất sắc như vậy, tốt nghiệp thạc sĩ xong liền làm phiên dịch viên."
      },
      {
        "zh": "他是我们班最优秀的学生。",
        "py": "Tā shì wǒmen bān zuì yōuxiù de xuésheng.",
        "vn": "Anh ấy là học sinh xuất sắc nhất lớp chúng tôi."
      },
      {
        "zh": "这家公司有很多优秀的员工。",
        "py": "Zhè jiā gōngsī yǒu hěn duō yōuxiù de yuángōng.",
        "vn": "Công ty này có rất nhiều nhân viên xuất sắc."
      }
    ],
    "hanzi": [
      {
        "c": "秀",
        "p": "xiù",
        "type": "上下结构 · Trên-dưới",
        "st": 7,
        "ord": "禾 (hòa) trên → 乃 dưới",
        "rad": "禾 (hòa – lúa)",
        "mean": "tú lệ, xuất sắc",
        "tip": "Bộ lúa 禾 (bông lúa trổ đẹp) → mở rộng thành TÚ LỆ, XUẤT SẮC, kết hợp 优(ưu tú) thành 优秀 = XUẤT SẮC.",
        "cf": "季 (jì – \"mùa\", bộ 子\")",
        "w": "优秀 / 秀丽 / 优秀员工"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Con gái bạn không những xinh đẹp lại xuất sắc, mà tốt nghiệp thạc sĩ xong là có ngay việc tốt.",
        "answer": "你女儿不但漂亮又优秀，而且硕士毕业后就有了好工作。",
        "answerPy": "Nǐ nǚ'ér búdàn piàoliang yòu yōuxiù, érqiě shuòshì bìyè hòu jiù yǒule hǎo gōngzuò.",
        "note": "毕业 là từ bài 2 — từ ly hợp, không mang tân ngữ.",
        "pair": "不但……而且……"
      },
      {
        "promptLang": "vi",
        "prompt": "Chính vì anh ấy là một phiên dịch xuất sắc, nên rất được mọi người tôn trọng.",
        "answer": "正因为他是一位优秀的翻译，所以很受大家尊重。",
        "answerPy": "Zhèng yīnwèi tā shì yí wèi yōuxiù de fānyì, suǒyǐ hěn shòu dàjiā zūnzhòng.",
        "note": "受 + N — chịu, được; 位 là lượng từ lịch sự.",
        "pair": "因为……所以……"
      }
    ],
    "colloFull": [
      {
        "zh": "优秀的学生",
        "py": "yōuxiù de xuésheng",
        "vn": "học sinh xuất sắc"
      },
      {
        "zh": "非常优秀",
        "py": "fēicháng yōuxiù",
        "vn": "vô cùng xuất sắc"
      },
      {
        "zh": "那么优秀",
        "py": "nàme yōuxiù",
        "vn": "xuất sắc đến vậy"
      },
      {
        "zh": "优秀的翻译",
        "py": "yōuxiù de fānyì",
        "vn": "phiên dịch giỏi"
      },
      {
        "zh": "成绩优秀",
        "py": "chéngjì yōuxiù",
        "vn": "thành tích xuất sắc"
      }
    ],
    "patterns": [
      {
        "s": "优秀的 + N (người)",
        "m": "Người xuất sắc — thường dùng cho người"
      },
      {
        "s": "优秀 ≈ 好",
        "m": "优秀 mạnh hơn, mang tính đánh giá chính thức"
      }
    ]
  },
  {
    "n": 8,
    "zh": "硕士",
    "py": "shuòshì",
    "pos": "Danh từ",
    "vn": "thạc sĩ",
    "hv": "thạc sĩ",
    "em": "🎓",
    "lesson": 2,
    "explain": [
      "Học vị sau đại học, trước tiến sĩ."
    ],
    "usage": "Danh từ; thường đi với 硕士毕业, 读硕士.",
    "collo": [
      "硕士毕业",
      "读硕士",
      "硕士学位"
    ],
    "ex_zh": "硕士毕业后就当了翻译。",
    "ex_py": "Shuòshì bìyè hòu jiù dāngle fānyì.",
    "ex_vn": "Tốt nghiệp thạc sĩ xong liền làm phiên dịch viên.",
    "exList": [
      {
        "zh": "硕士毕业后就当了翻译。",
        "py": "Shuòshì bìyè hòu jiù dāngle fānyì.",
        "vn": "Tốt nghiệp thạc sĩ xong liền làm phiên dịch viên."
      },
      {
        "zh": "你研究生考试考得怎么样？数学可能考得不太理想。",
        "py": "Nǐ yánjiūshēng kǎoshì kǎo de zěnmeyàng? Shùxué kěnéng kǎo de bú tài lǐxiǎng.",
        "vn": "Bạn thi nghiên cứu sinh thế nào? Môn toán có thể thi không được lý tưởng lắm."
      },
      {
        "zh": "她正在读硕士，明年就毕业了。",
        "py": "Tā zhèngzài dú shuòshì, míngnián jiù bìyè le.",
        "vn": "Cô ấy đang học thạc sĩ, sang năm sẽ tốt nghiệp."
      }
    ],
    "hanzi": [
      {
        "c": "硕",
        "p": "shuò",
        "type": "左右结构 · Trái-phải",
        "st": 11,
        "ord": "石 (thạch) trái → 页 (hiệt) phải",
        "rad": "石 (thạch – đá)",
        "mean": "to lớn",
        "tip": "Bộ đá 石 (vững chắc, to lớn) + 页(đầu, biểu âm) → mang nghĩa TO LỚN, kết hợp 士(học giả) thành 硕士 = THẠC SĨ (học vị lớn).",
        "cf": "碩 phồn thể giống hệt cấu trúc",
        "w": "硕士 / 硕大 / 博士"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Cô ấy đang học thạc sĩ, chỉ cần tốt nghiệp là sẽ đi làm phiên dịch.",
        "answer": "她正在读硕士，只要毕业，就打算去当翻译。",
        "answerPy": "Tā zhèngzài dú shuòshì, zhǐyào bìyè, jiù dǎsuàn qù dāng fānyì.",
        "note": "读硕士 — học cao học; 当 + nghề nghiệp.",
        "pair": "只要……就……"
      },
      {
        "promptLang": "vi",
        "prompt": "Anh bạn chẳng phải nói ba giờ đến sao? Đã quá nửa tiếng rồi mà sao vẫn chưa ra?",
        "answer": "你哥不是说三点到吗？虽然已经过去半个小时了，但是怎么还没出来？",
        "answerPy": "Nǐ gē bú shì shuō sān diǎn dào ma? Suīrán yǐjīng guòqù bàn ge xiǎoshí le, dànshì zěnme hái méi chūlái?",
        "note": "不是……吗？ — câu hỏi tu từ, ý nhắc lại điều đã biết.",
        "pair": "虽然……但是……"
      }
    ],
    "colloFull": [
      {
        "zh": "读硕士",
        "py": "dú shuòshì",
        "vn": "học thạc sĩ"
      },
      {
        "zh": "硕士毕业",
        "py": "shuòshì bì yè",
        "vn": "tốt nghiệp thạc sĩ"
      },
      {
        "zh": "硕士学位",
        "py": "shuòshì xuéwèi",
        "vn": "bằng thạc sĩ"
      },
      {
        "zh": "考硕士",
        "py": "kǎo shuòshì",
        "vn": "thi cao học"
      },
      {
        "zh": "硕士研究生",
        "py": "shuòshì yánjiūshēng",
        "vn": "học viên cao học"
      }
    ],
    "patterns": [
      {
        "s": "读 / 考 + 硕士",
        "m": "Học / thi cao học"
      },
      {
        "s": "学士 → 硕士 → 博士",
        "m": "Cử nhân → thạc sĩ → tiến sĩ"
      }
    ]
  },
  {
    "n": 9,
    "zh": "翻译",
    "py": "fānyì",
    "pos": "Danh từ/Động từ",
    "vn": "phiên dịch viên; dịch",
    "hv": "phiên dịch",
    "em": "🗣️",
    "lesson": 2,
    "explain": [
      "1. (Danh từ) Người làm nghề chuyển đổi ngôn ngữ.",
      "2. (Động từ) Chuyển đổi văn bản/lời nói từ ngôn ngữ này sang ngôn ngữ khác."
    ],
    "usage": "Danh từ: 当了翻译; động từ: 翻译成中文.",
    "collo": [
      "当了翻译",
      "翻译成中文",
      "做翻译工作"
    ],
    "ex_zh": "硕士毕业后就当了翻译。",
    "ex_py": "Shuòshì bìyè hòu jiù dāngle fānyì.",
    "ex_vn": "Tốt nghiệp thạc sĩ xong liền làm phiên dịch viên.",
    "exList": [
      {
        "zh": "硕士毕业后就当了翻译。",
        "py": "Shuòshì bìyè hòu jiù dāngle fānyì.",
        "vn": "Tốt nghiệp thạc sĩ xong liền làm phiên dịch viên."
      },
      {
        "zh": "她的工作是把英文小说翻译成中文。",
        "py": "Tā de gōngzuò shì bǎ Yīngwén xiǎoshuō fānyì chéng Zhōngwén.",
        "vn": "Công việc của cô ấy là dịch tiểu thuyết tiếng Anh sang tiếng Trung."
      },
      {
        "zh": "这位翻译的水平非常高。",
        "py": "Zhè wèi fānyì de shuǐpíng fēicháng gāo.",
        "vn": "Trình độ của phiên dịch viên này rất cao."
      }
    ],
    "hanzi": [
      {
        "c": "译",
        "p": "yì",
        "type": "左右结构 · Trái-phải (giản thể)",
        "st": 7,
        "ord": "讠 (ngôn) trái → 尺(biến thể) phải",
        "rad": "讠 (ngôn – lời nói)",
        "mean": "dịch",
        "tip": "Bộ lời nói 讠 + 尺(biểu âm) → chuyển đổi LỜI NÓI sang ngôn ngữ khác, kết hợp 翻(lật, chuyển) thành 翻译 = PHIÊN DỊCH.",
        "cf": "泽 (zé – \"ân trạch/đầm\", bộ 氵\")",
        "w": "翻译 / 口译 / 笔译"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Con gái tôi không những tốt nghiệp thạc sĩ xong là làm phiên dịch ngay, mà công việc còn làm rất xuất sắc.",
        "answer": "我女儿不但硕士毕业后就当了翻译，而且工作做得很优秀。",
        "answerPy": "Wǒ nǚ'ér búdàn shuòshì bìyè hòu jiù dāngle fānyì, érqiě gōngzuò zuò de hěn yōuxiù.",
        "note": "V + 得 + Adj — bổ ngữ trạng thái.",
        "pair": "不但……而且……"
      },
      {
        "promptLang": "vi",
        "prompt": "Cô ấy không những muốn dịch quyển tiểu thuyết này sang tiếng Trung, mà còn muốn tự viết một cuốn.",
        "answer": "她不仅想把这本小说翻译成中文，而且还想自己写一本。",
        "answerPy": "Tā bùjǐn xiǎng bǎ zhè běn xiǎoshuō fānyì chéng Zhōngwén, érqiě hái xiǎng zìjǐ xiě yì běn.",
        "note": "把 + N + 翻译成 + ngôn ngữ — câu chữ 把.",
        "pair": "不仅……而且……"
      }
    ],
    "colloFull": [
      {
        "zh": "当翻译",
        "py": "dāng fānyì",
        "vn": "làm phiên dịch"
      },
      {
        "zh": "做翻译工作",
        "py": "zuò fānyì gōngzuò",
        "vn": "làm công việc dịch"
      },
      {
        "zh": "翻译成中文",
        "py": "fānyì chéng Zhōngwén",
        "vn": "dịch sang tiếng Trung"
      },
      {
        "zh": "一位翻译",
        "py": "yí wèi fānyì",
        "vn": "một phiên dịch viên"
      },
      {
        "zh": "翻译文章",
        "py": "fānyì wénzhāng",
        "vn": "dịch bài viết"
      }
    ],
    "patterns": [
      {
        "s": "把 + N + 翻译成 + ngôn ngữ (động từ)",
        "m": "Dịch cái gì sang tiếng nào"
      },
      {
        "s": "当 + 翻译 (danh từ)",
        "m": "Làm nghề phiên dịch"
      }
    ]
  },
  {
    "n": 10,
    "zh": "确实",
    "py": "quèshí",
    "pos": "Phó từ",
    "vn": "thực sự, quả thực",
    "hv": "xác thực",
    "em": "✅",
    "lesson": 2,
    "explain": [
      "Diễn tả sự khẳng định tính chân thực của một tình huống khách quan."
    ],
    "usage": "Phó từ, đứng trước tính từ/động từ: 确实不错, 确实是……的重要原因.",
    "collo": [
      "确实不错",
      "确实是……原因",
      "确实比以前更……"
    ],
    "ex_zh": "我女儿确实不错，记得她刚拿到第一个月工资时，就兴奋地拉着我和她爸俩去商场。",
    "ex_py": "Wǒ nǚ'ér quèshí búcuò, jìde tā gāng nádào dì-yī ge yuè gōngzī shí, jiù xīngfèn de lāzhe wǒ hé tā bà liǎ qù shāngchǎng.",
    "ex_vn": "Con gái tôi thực sự rất tốt, nhớ lúc nó vừa nhận lương tháng đầu tiên, đã hào hứng kéo tôi và bố nó đi trung tâm mua sắm.",
    "exList": [
      {
        "zh": "我女儿确实不错，记得她刚拿到第一个月工资时，就兴奋地拉着我和她爸俩去商场。",
        "py": "Wǒ nǚ'ér quèshí búcuò, jìde tā gāng nádào dì-yī ge yuè gōngzī shí, jiù xīngfèn de lāzhe wǒ hé tā bà liǎ qù shāngchǎng.",
        "vn": "Con gái tôi thực sự rất tốt, nhớ lúc nó vừa nhận lương tháng đầu tiên, đã hào hứng kéo tôi và bố nó đi trung tâm mua sắm."
      },
      {
        "zh": "爱情确实是结婚的重要原因，但仅有爱情是不够的。",
        "py": "Àiqíng quèshí shì jiéhūn de zhòngyào yuányīn, dàn jǐn yǒu àiqíng shì bú gòu de.",
        "vn": "Tình yêu thực sự là nguyên nhân quan trọng của hôn nhân, nhưng chỉ có tình yêu thôi thì không đủ."
      },
      {
        "zh": "我说的是真的，你确实比以前更年轻、更漂亮了。",
        "py": "Wǒ shuō de shì zhēn de, nǐ quèshí bǐ yǐqián gèng niánqīng, gèng piàoliang le.",
        "vn": "Tôi nói thật đấy, bạn thực sự trẻ hơn, đẹp hơn trước rồi."
      }
    ],
    "hanzi": [
      {
        "c": "确",
        "p": "què",
        "type": "左右结构 · Trái-phải (giản thể)",
        "st": 12,
        "ord": "石 (thạch) trái → 角(biến thể) phải",
        "rad": "石 (thạch – đá)",
        "mean": "chắc chắn",
        "tip": "Bộ đá 石 (vững chắc như đá) → CHẮC CHẮN, kết hợp 实(chân thực) thành 确实 = THỰC SỰ, QUẢ THỰC.",
        "cf": "确 dễ nhầm với 碗 (wǎn – \"cái bát\")",
        "w": "确实 / 正确 / 确定"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tình yêu quả thực là lý do quan trọng để kết hôn, nhưng chỉ có tình yêu thôi thì chưa đủ.",
        "answer": "爱情确实是结婚的重要原因，可是仅有爱情是不够的。",
        "answerPy": "Àiqíng quèshí shì jiéhūn de zhòngyào yuányīn, kěshì jǐn yǒu àiqíng shì bú gòu de.",
        "note": "爱情, 结婚 là từ bài 1 — ôn lại ở bài nói về hạnh phúc.",
        "pair": "虽然……可是……"
      },
      {
        "promptLang": "vi",
        "prompt": "Con gái tôi quả thực khá lắm, chỉ cần tốt nghiệp thạc sĩ là có ngay việc tốt.",
        "answer": "我女儿确实不错，只要硕士一毕业，就有了好工作。",
        "answerPy": "Wǒ nǚ'ér quèshí búcuò, zhǐyào shuòshì yí bìyè, jiù yǒule hǎo gōngzuò.",
        "note": "确实 xác nhận điều người khác vừa khen.",
        "pair": "一……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "确实不错",
        "py": "quèshí búcuò",
        "vn": "quả thực khá tốt"
      },
      {
        "zh": "确实是",
        "py": "quèshí shì",
        "vn": "đúng là"
      },
      {
        "zh": "确实比以前好",
        "py": "quèshí bǐ yǐqián hǎo",
        "vn": "quả thực tốt hơn trước"
      },
      {
        "zh": "确实很难",
        "py": "quèshí hěn nán",
        "vn": "thật sự rất khó"
      },
      {
        "zh": "确实有道理",
        "py": "quèshí yǒu dào lǐ",
        "vn": "quả có lý"
      }
    ],
    "patterns": [
      {
        "s": "Sub + 确实 + V / Adj",
        "m": "Ai đó quả thực … (xác nhận điều người khác nói)"
      },
      {
        "s": "确实 ≈ 实在",
        "m": "确实 xác nhận sự thật; 实在 nhấn mức độ"
      }
    ]
  },
  {
    "n": 11,
    "zh": "兴奋",
    "py": "xīngfèn",
    "pos": "Tính từ",
    "vn": "hăng hái, phấn khởi",
    "hv": "hưng phấn",
    "em": "🤩",
    "lesson": 2,
    "explain": [
      "Trạng thái tâm lý vui mừng, phấn khích cao độ."
    ],
    "usage": "Tính từ; thường đi với 兴奋地拉着, 感到兴奋.",
    "collo": [
      "兴奋地拉着",
      "感到很兴奋",
      "兴奋得睡不着"
    ],
    "ex_zh": "就兴奋地拉着我和她爸俩去商场，给我们买礼物。",
    "ex_py": "Jiù xīngfèn de lāzhe wǒ hé tā bà liǎ qù shāngchǎng, gěi wǒmen mǎi lǐwù.",
    "ex_vn": "Liền hào hứng kéo tôi và bố nó đi trung tâm mua sắm, mua quà cho chúng tôi.",
    "exList": [
      {
        "zh": "就兴奋地拉着我和她爸俩去商场，给我们买礼物。",
        "py": "Jiù xīngfèn de lāzhe wǒ hé tā bà liǎ qù shāngchǎng, gěi wǒmen mǎi lǐwù.",
        "vn": "Liền hào hứng kéo tôi và bố nó đi trung tâm mua sắm, mua quà cho chúng tôi."
      },
      {
        "zh": "听到这个好消息，大家都很兴奋。",
        "py": "Tīngdào zhège hǎo xiāoxi, dàjiā dōu hěn xīngfèn.",
        "vn": "Nghe được tin tốt này, mọi người đều rất phấn khởi."
      },
      {
        "zh": "他兴奋得一晚上都睡不着。",
        "py": "Tā xīngfèn de yì wǎnshang dōu shuì bu zháo.",
        "vn": "Anh ấy hào hứng đến mức cả tối không ngủ được."
      }
    ],
    "hanzi": [
      {
        "c": "奋",
        "p": "fèn",
        "type": "上下结构 · Trên-dưới (giản thể)",
        "st": 8,
        "ord": "大 trên → 田 dưới",
        "rad": "大 (đại)",
        "mean": "phấn chấn, gắng sức",
        "tip": "Chữ giản thể mang nghĩa GẮNG SỨC VƯƠN LÊN (như chim vỗ cánh bay), kết hợp 兴(hứng thú) thành 兴奋 = HĂNG HÁI, PHẤN KHỞI.",
        "cf": "备 (bèi – \"chuẩn bị\", tự dạng khác)",
        "w": "兴奋 / 奋斗 / 兴趣"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Mọi người vừa nghe tin vui này là ai nấy đều phấn khởi.",
        "answer": "大家一听到这个好消息，就都很兴奋。",
        "answerPy": "Dàjiā yì tīngdào zhège hǎo xiāoxi, jiù dōu hěn xīngfèn.",
        "note": "消息 là từ bài 4 — 听到消息.",
        "pair": "一……就……"
      },
      {
        "promptLang": "vi",
        "prompt": "Cô ấy vừa nhận lương tháng đầu tiên, liền hào hứng kéo bố mẹ đi mua sắm.",
        "answer": "她刚拿到第一个月工资，就兴奋地拉着父母去购物。",
        "answerPy": "Tā gāng nádào dì-yī ge yuè gōngzī, jiù xīngfèn de lāzhe fùmǔ qù gòuwù.",
        "note": "兴奋地拉着 kết hợp 购物, ôn lại từ vựng Bài 5.",
        "pair": "一……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "感到兴奋",
        "py": "gǎndào xīngfèn",
        "vn": "cảm thấy phấn khởi"
      },
      {
        "zh": "很兴奋",
        "py": "hěn xīngfèn",
        "vn": "rất hào hứng"
      },
      {
        "zh": "兴奋地拉着",
        "py": "xīngfèn de lā zhe",
        "vn": "hào hứng kéo tay"
      },
      {
        "zh": "兴奋得睡不着",
        "py": "xīngfèn de shuì bù zhe",
        "vn": "phấn khích đến mất ngủ"
      },
      {
        "zh": "太兴奋了",
        "py": "tài xīngfèn le",
        "vn": "phấn khích quá"
      }
    ],
    "patterns": [
      {
        "s": "兴奋 + 得 + kết quả",
        "m": "Phấn khích đến mức nào"
      },
      {
        "s": "兴奋地 + V",
        "m": "Hào hứng làm gì"
      }
    ]
  },
  {
    "n": 12,
    "zh": "拉",
    "py": "lā",
    "pos": "Động từ",
    "vn": "kéo, lôi, dắt",
    "hv": "lạp",
    "em": "🤝",
    "lesson": 2,
    "explain": [
      "Dùng tay kéo/dắt một vật/người theo một hướng."
    ],
    "usage": "Động từ; thường đi với 拉着我, 拉近距离.",
    "collo": [
      "兴奋地拉着我",
      "拉近了距离",
      "拉着手"
    ],
    "ex_zh": "就兴奋地拉着我和她爸俩去商场。",
    "ex_py": "Jiù xīngfèn de lāzhe wǒ hé tā bà liǎ qù shāngchǎng.",
    "ex_vn": "Liền hào hứng kéo tôi và bố nó đi trung tâm mua sắm.",
    "exList": [
      {
        "zh": "就兴奋地拉着我和她爸俩去商场。",
        "py": "Jiù xīngfèn de lāzhe wǒ hé tā bà liǎ qù shāngchǎng.",
        "vn": "Liền hào hứng kéo tôi và bố nó đi trung tâm mua sắm."
      },
      {
        "zh": "在交流过程中，又拉近了人们之间的距离。",
        "py": "Zài jiāoliú guòchéng zhōng, yòu lājìnle rénmen zhījiān de jùlí.",
        "vn": "Trong quá trình giao lưu, còn kéo gần khoảng cách giữa mọi người."
      },
      {
        "zh": "她拉着孩子的手过马路。",
        "py": "Tā lāzhe háizi de shǒu guò mǎlù.",
        "vn": "Cô ấy dắt tay con qua đường."
      }
    ],
    "hanzi": [
      {
        "c": "拉",
        "p": "lā",
        "type": "左右结构 · Trái-phải",
        "st": 8,
        "ord": "扌 (thủ) trái → 立 (lập) phải",
        "rad": "扌 (thủ – tay)",
        "mean": "kéo, lôi",
        "tip": "Bộ tay 扌 + 立(biểu âm) → hành động dùng TAY KÉO, LÔI một vật/người.",
        "cf": "垃 (lā – \"rác\", trong 垃圾, bộ 土\")",
        "w": "拉 / 拉近 / 拉着手"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Trong quá trình giao lưu, một mặt làm phong phú kiến thức, mặt khác còn kéo gần khoảng cách giữa mọi người.",
        "answer": "在交流过程中，一方面丰富了知识，另一方面又拉近了人们之间的距离。",
        "answerPy": "Zài jiāoliú guòchéng zhōng, yì fāngmiàn fēngfùle zhīshi, lìng yì fāngmiàn yòu lājìnle rénmen zhījiān de jùlí.",
        "note": "拉近了……距离 kết hợp 距离, ôn lại từ vựng Bài 8.",
        "pair": "一方面……一方面……"
      },
      {
        "promptLang": "vi",
        "prompt": "Cô ấy vừa nhận lương là hào hứng kéo tôi đi mua sắm ngay.",
        "answer": "她一拿到工资，就兴奋地拉着我去购物。",
        "answerPy": "Tā yì nádào gōngzī, jiù xīngfèn de lāzhe wǒ qù gòuwù.",
        "note": "工资 là từ bài 4, 购物 là từ bài 5.",
        "pair": "一……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "拉着手",
        "py": "lā zhe shǒu",
        "vn": "nắm tay"
      },
      {
        "zh": "拉着我去",
        "py": "lā zhe wǒ qù",
        "vn": "kéo tôi đi"
      },
      {
        "zh": "拉近距离",
        "py": "lā jìn jùlí",
        "vn": "kéo gần khoảng cách"
      },
      {
        "zh": "拉开门",
        "py": "lā kāi mén",
        "vn": "kéo cửa ra"
      },
      {
        "zh": "拉他一把",
        "py": "lā tā yì bǎ",
        "vn": "kéo anh ta một tay"
      }
    ],
    "patterns": [
      {
        "s": "拉 + 着 + ai + V",
        "m": "Kéo tay ai đi làm gì"
      },
      {
        "s": "拉近 + 距离",
        "m": "Kéo gần khoảng cách — 距离 là từ bài 8"
      }
    ]
  },
  {
    "n": 13,
    "zh": "建议",
    "py": "jiànyì",
    "pos": "Danh từ/Động từ",
    "vn": "kiến nghị, sự đề nghị",
    "hv": "kiến nghị",
    "em": "💬",
    "lesson": 3,
    "explain": [
      "1. (Động từ) Đưa ra ý kiến/đề xuất cho ai đó.",
      "2. (Danh từ) Ý kiến/đề xuất đã đưa ra."
    ],
    "usage": "Động từ: 建议我平时多开车; danh từ: 听听你的建议.",
    "collo": [
      "听听你的建议",
      "有什么建议",
      "建议做……"
    ],
    "ex_zh": "我还没想好呢，正想听听你的建议。",
    "ex_py": "Wǒ hái méi xiǎnghǎo ne, zhèng xiǎng tīngting nǐ de jiànyì.",
    "ex_vn": "Tôi vẫn chưa nghĩ kỹ, đang muốn nghe ý kiến của bạn đây.",
    "exList": [
      {
        "zh": "我还没想好呢，正想听听你的建议。",
        "py": "Wǒ hái méi xiǎnghǎo ne, zhèng xiǎng tīngting nǐ de jiànyì.",
        "vn": "Tôi vẫn chưa nghĩ kỹ, đang muốn nghe ý kiến của bạn đây."
      },
      {
        "zh": "朋友建议我平时多开车出去走走，熟悉一下道路情况。",
        "py": "Péngyou jiànyì wǒ píngshí duō kāichē chūqu zǒuzou, shúxī yíxià dàolù qíngkuàng.",
        "vn": "Bạn tôi đề nghị tôi bình thường nên lái xe ra ngoài nhiều hơn, làm quen với tình hình đường xá."
      },
      {
        "zh": "小雨对选择职业有什么建议？",
        "py": "Xiǎoyǔ duì xuǎnzé zhíyè yǒu shénme jiànyì?",
        "vn": "Tiểu Vũ có đề nghị gì về việc chọn nghề nghiệp?"
      }
    ],
    "hanzi": [
      {
        "c": "议",
        "p": "yì",
        "type": "左右结构 · Trái-phải (giản thể)",
        "st": 5,
        "ord": "讠 (ngôn) trái → 义 (nghĩa) phải",
        "rad": "讠 (ngôn – lời nói)",
        "mean": "bàn bạc, ý kiến",
        "tip": "Bộ lời nói 讠 + 义(chính nghĩa, biểu âm) → BÀN BẠC LỜI phải trái, kết hợp 建(đưa ra) thành 建议 = KIẾN NGHỊ, ĐỀ NGHỊ.",
        "cf": "仪 (yí – \"nghi lễ\", bộ 亻\")",
        "w": "建议 / 议论 / 会议"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Vì tôi vẫn chưa nghĩ ra nên chọn nghề gì, nên đang muốn nghe góp ý của bạn.",
        "answer": "因为我还没想好该选择什么职业，所以正想听听你的建议。",
        "answerPy": "Yīnwèi wǒ hái méi xiǎng hǎo gāi xuǎnzé shénme zhíyè, suǒyǐ zhèng xiǎng tīngting nǐ de jiànyì.",
        "note": "听听 — động từ lặp, nghe nhẹ nhàng hơn.",
        "pair": "因为……所以……"
      },
      {
        "promptLang": "vi",
        "prompt": "Bạn tôi khuyên tôi nên lái xe ra ngoài nhiều hơn, vì lái càng nhiều thì càng quen đường.",
        "answer": "朋友建议我平时多开车出去走走，因为开得越多，对道路就越熟悉。",
        "answerPy": "Péngyou jiànyì wǒ píngshí duō kāichē chūqu zǒuzou, yīnwèi kāi de yuè duō, duì dàolù jiù yuè shúxi.",
        "note": "熟悉 là từ bài 1 — 对 + N + 熟悉.",
        "pair": "越……越……"
      }
    ],
    "colloFull": [
      {
        "zh": "听听你的建议",
        "py": "tīngtīng nǐ de jiànyì",
        "vn": "nghe ý kiến của bạn"
      },
      {
        "zh": "有什么建议",
        "py": "yǒu shénme jiànyì",
        "vn": "có đề xuất gì"
      },
      {
        "zh": "提建议",
        "py": "tí jiànyì",
        "vn": "đưa ra kiến nghị"
      },
      {
        "zh": "建议你去",
        "py": "jiànyì nǐ qù",
        "vn": "khuyên bạn nên đi"
      },
      {
        "zh": "接受建议",
        "py": "jiēshòu jiànyì",
        "vn": "tiếp nhận góp ý"
      }
    ],
    "patterns": [
      {
        "s": "建议 + ai + V (động từ)",
        "m": "Đề nghị, khuyên ai làm gì"
      },
      {
        "s": "提 / 听 + 建议 (danh từ)",
        "m": "Đưa ra / lắng nghe góp ý"
      }
    ]
  },
  {
    "n": 14,
    "zh": "职业",
    "py": "zhíyè",
    "pos": "Danh từ",
    "vn": "nghề nghiệp",
    "hv": "chức nghiệp",
    "em": "💼",
    "lesson": 3,
    "explain": [
      "Công việc mà một người làm để kiếm sống."
    ],
    "usage": "Danh từ; thường đi với 选择职业, 职业时.",
    "collo": [
      "选择职业",
      "在选择职业时",
      "对……的职业"
    ],
    "ex_zh": "你觉得在选择职业时，收入重要吗？",
    "ex_py": "Nǐ juéde zài xuǎnzé zhíyè shí, shōurù zhòngyào ma?",
    "ex_vn": "Bạn thấy khi chọn nghề nghiệp, thu nhập có quan trọng không?",
    "exList": [
      {
        "zh": "你觉得在选择职业时，收入重要吗？",
        "py": "Nǐ juéde zài xuǎnzé zhíyè shí, shōurù zhòngyào ma?",
        "vn": "Bạn thấy khi chọn nghề nghiệp, thu nhập có quan trọng không?"
      },
      {
        "zh": "她从事教师这个职业已经十年了。",
        "py": "Tā cóngshì jiàoshī zhège zhíyè yǐjīng shí nián le.",
        "vn": "Cô ấy làm nghề giáo viên này đã mười năm rồi."
      },
      {
        "zh": "每种职业都有自己的价值。",
        "py": "Měi zhǒng zhíyè dōu yǒu zìjǐ de jiàzhí.",
        "vn": "Mỗi nghề nghiệp đều có giá trị riêng của nó."
      }
    ],
    "hanzi": [
      {
        "c": "职",
        "p": "zhí",
        "type": "左右结构 · Trái-phải (giản thể)",
        "st": 8,
        "ord": "耳 (nhĩ) trái → 只 phải",
        "rad": "耳 (nhĩ – tai)",
        "mean": "chức vụ, công việc",
        "tip": "Bộ tai 耳 (lắng nghe, tiếp nhận nhiệm vụ) + 只(biểu âm) → CHỨC VỤ, kết hợp 业(sự nghiệp) thành 职业 = NGHỀ NGHIỆP.",
        "cf": "织 (zhī – \"dệt\", bộ 纟\")",
        "w": "职业 / 职位 / 兼职"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Bạn thấy khi chọn nghề, là tiền lương quan trọng hơn hay hứng thú quan trọng hơn?",
        "answer": "你觉得在选择职业时，不是工资更重要，而是兴趣更重要吗？",
        "answerPy": "Nǐ juéde zài xuǎnzé zhíyè shí, bú shì gōngzī gèng zhòngyào, ér shì xìngqù gèng zhòngyào ma?",
        "note": "在……时 — khi làm gì, thiên văn viết hơn 的时候.",
        "pair": "不是……而是……"
      },
      {
        "promptLang": "vi",
        "prompt": "Bất kể là nghề nào, cũng đều có ưu điểm và khuyết điểm riêng.",
        "answer": "不管是什么职业，都有自己的优点和缺点。",
        "answerPy": "Bùguǎn shì shénme zhíyè, dōu yǒu zìjǐ de yōudiǎn hé quēdiǎn.",
        "note": "优点 là từ bài 5, 缺点 là từ bài 1.",
        "pair": "不管……都……"
      }
    ],
    "colloFull": [
      {
        "zh": "选择职业",
        "py": "xuǎnzé zhíyè",
        "vn": "chọn nghề nghiệp"
      },
      {
        "zh": "每种职业",
        "py": "měi zhǒng zhíyè",
        "vn": "mỗi nghề"
      },
      {
        "zh": "职业的特点",
        "py": "zhíyè de tèdiǎn",
        "vn": "đặc điểm nghề nghiệp"
      },
      {
        "zh": "理想的职业",
        "py": "lǐxiǎng de zhíyè",
        "vn": "nghề lý tưởng"
      },
      {
        "zh": "换职业",
        "py": "huàn zhíyè",
        "vn": "đổi nghề"
      }
    ],
    "patterns": [
      {
        "s": "选择 + 职业",
        "m": "Chọn nghề nghiệp"
      },
      {
        "s": "职业 ≠ 工作",
        "m": "职业 là nghề cả đời; 工作 là công việc cụ thể"
      }
    ]
  },
  {
    "n": 15,
    "zh": "关键",
    "py": "guānjiàn",
    "pos": "Danh từ",
    "vn": "điều quan trọng, điểm mấu chốt",
    "hv": "quan kiện",
    "em": "🔑",
    "lesson": 3,
    "explain": [
      "Yếu tố quyết định, quan trọng nhất trong một vấn đề."
    ],
    "usage": "Danh từ; thường đi với 兴趣才是关键, 关键是.",
    "collo": [
      "兴趣才是关键",
      "关键是……",
      "是……的关键"
    ],
    "ex_zh": "赚钱多少不是最重要的，兴趣才是关键。",
    "ex_py": "Zhuàn qián duōshao bú shì zuì zhòngyào de, xìngqù cái shì guānjiàn.",
    "ex_vn": "Kiếm được nhiều tiền hay không không phải điều quan trọng nhất, hứng thú mới là điều mấu chốt.",
    "exList": [
      {
        "zh": "赚钱多少不是最重要的，兴趣才是关键。",
        "py": "Zhuàn qián duōshao bú shì zuì zhòngyào de, xìngqù cái shì guānjiàn.",
        "vn": "Kiếm được nhiều tiền hay không không phải điều quan trọng nhất, hứng thú mới là điều mấu chốt."
      },
      {
        "zh": "高矮没太大关系，关键是我得喜欢他、爱他。",
        "py": "Gāo ǎi méi tài dà guānxi, guānjiàn shì wǒ děi xǐhuan tā, ài tā.",
        "vn": "Cao thấp không có quan hệ lớn lắm, quan trọng là tôi phải thích anh ấy, yêu anh ấy."
      },
      {
        "zh": "解决这个问题的关键是什么？",
        "py": "Jiějué zhège wèntí de guānjiàn shì shénme?",
        "vn": "Điểm mấu chốt để giải quyết vấn đề này là gì?"
      }
    ],
    "hanzi": [
      {
        "c": "键",
        "p": "jiàn",
        "type": "左右结构 · Trái-phải (giản thể)",
        "st": 9,
        "ord": "钅(kim) trái → 建 (kiến) phải",
        "rad": "钅 (kim – kim loại)",
        "mean": "chốt, phím",
        "tip": "Bộ kim loại 钅 (chốt kim loại) + 建(dựng lên, biểu âm) → CHỐT quan trọng để khóa/mở, kết hợp 关(then chốt) thành 关键 = ĐIỂM MẤU CHỐT.",
        "cf": "健 (jiàn – \"khỏe mạnh\", bộ 亻\")",
        "w": "关键 / 键盘 / 关键词"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Kiếm được nhiều tiền hay không không phải điều quan trọng nhất, hứng thú mới là điểm mấu chốt.",
        "answer": "赚钱多少不是最重要的，兴趣才是关键。",
        "answerPy": "Zhuàn qián duōshao bú shì zuì zhòngyào de, xìngqù cái shì guānjiàn.",
        "note": "兴趣才是关键 — hứng thú mới là điều mấu chốt.",
        "pair": "……，才……"
      },
      {
        "promptLang": "vi",
        "prompt": "Mấu chốt để giảm cân thành công không phải là giảm một tháng, mà là kiên trì lâu dài.",
        "answer": "减肥成功的关键不是只减一个月，而是长期坚持。",
        "answerPy": "Jiǎnféi chénggōng de guānjiàn bú shì zhǐ jiǎn yí ge yuè, ér shì chángqī jiānchí.",
        "note": "减肥 là từ bài 7, 坚持 là từ bài 9.",
        "pair": "不是……而是……"
      }
    ],
    "colloFull": [
      {
        "zh": "关键是",
        "py": "guānjiàn shì",
        "vn": "mấu chốt là"
      },
      {
        "zh": "是……的关键",
        "py": "shì de guānjiàn",
        "vn": "là điểm then chốt của…"
      },
      {
        "zh": "关键问题",
        "py": "guānjiàn wèntí",
        "vn": "vấn đề then chốt"
      },
      {
        "zh": "最关键",
        "py": "zuì guānjiàn",
        "vn": "then chốt nhất"
      },
      {
        "zh": "兴趣才是关键",
        "py": "xìng qù cái shì guānjiàn",
        "vn": "hứng thú mới là mấu chốt"
      }
    ],
    "patterns": [
      {
        "s": "……的关键 + 是 + …",
        "m": "Mấu chốt của việc gì là …"
      },
      {
        "s": "关键 + 是 + mệnh đề",
        "m": "Điều quan trọng là …"
      }
    ]
  },
  {
    "n": 16,
    "zh": "将来",
    "py": "jiānglái",
    "pos": "Danh từ",
    "vn": "tương lai",
    "hv": "tương lai",
    "em": "🔮",
    "lesson": 3,
    "explain": [
      "Khoảng thời gian sắp tới, chưa xảy ra."
    ],
    "usage": "Danh từ; thường đi với 将来也会, 将来的发展.",
    "collo": [
      "将来也会有更好的发展",
      "对将来",
      "将来的打算"
    ],
    "ex_zh": "只有做自己喜欢的事，才会觉得幸福，将来也会有更好的发展。",
    "ex_py": "Zhǐyǒu zuò zìjǐ xǐhuan de shì, cái huì juéde xìngfú, jiānglái yě huì yǒu gèng hǎo de fāzhǎn.",
    "ex_vn": "Chỉ khi làm việc mình thích, mới cảm thấy hạnh phúc, tương lai cũng sẽ có sự phát triển tốt hơn.",
    "exList": [
      {
        "zh": "只有做自己喜欢的事，才会觉得幸福，将来也会有更好的发展。",
        "py": "Zhǐyǒu zuò zìjǐ xǐhuan de shì, cái huì juéde xìngfú, jiānglái yě huì yǒu gèng hǎo de fāzhǎn.",
        "vn": "Chỉ khi làm việc mình thích, mới cảm thấy hạnh phúc, tương lai cũng sẽ có sự phát triển tốt hơn."
      },
      {
        "zh": "你对将来有什么打算？",
        "py": "Nǐ duì jiānglái yǒu shénme dǎsuàn?",
        "vn": "Bạn có kế hoạch gì cho tương lai?"
      },
      {
        "zh": "其实，人们将来做什么工作可能和上学学的专业并没有太大关系。",
        "py": "Qíshí, rénmen jiānglái zuò shénme gōngzuò kěnéng hé shàngxué xué de zhuānyè bìng méiyǒu tài dà guānxi.",
        "vn": "Thực ra, sau này người ta làm công việc gì có thể không liên quan nhiều lắm đến chuyên ngành đã học."
      }
    ],
    "hanzi": [
      {
        "c": "将",
        "p": "jiāng",
        "type": "左右结构 · Trái-phải (giản thể)",
        "st": 9,
        "ord": "丬 trái → 夕+寸 phải",
        "rad": "丬 (biến thể của 爿)",
        "mean": "sắp, sẽ",
        "tip": "Chữ giản thể mang nghĩa SẮP, SẼ (thời tương lai gần), kết hợp 来(đến) thành 将来 = TƯƠNG LAI (thời gian sắp đến).",
        "cf": "奖 (jiǎng – \"phần thưởng\", tự dạng khác)",
        "w": "将来 / 将要 / 未来"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Chỉ có làm việc mình thích, tương lai mới có sự phát triển tốt hơn.",
        "answer": "只有做自己喜欢的事，将来才会有更好的发展。",
        "answerPy": "Zhǐyǒu zuò zìjǐ xǐhuan de shì, jiānglái cái huì yǒu gèng hǎo de fāzhǎn.",
        "note": "将来……发展 kết hợp 发展, ôn lại từ vựng của bài.",
        "pair": "只有……才……"
      },
      {
        "promptLang": "vi",
        "prompt": "Bạn có dự định gì cho tương lai? Nếu chưa nghĩ ra thì cùng bàn với tôi nhé.",
        "answer": "你对将来有什么打算？要是还没想好，就跟我一起商量商量吧。",
        "answerPy": "Nǐ duì jiānglái yǒu shénme dǎsuàn? Yàoshi hái méi xiǎng hǎo, jiù gēn wǒ yìqǐ shāngliang shāngliang ba.",
        "note": "商量商量 — động từ hai âm tiết lặp theo kiểu ABAB.",
        "pair": "要是……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "将来的打算",
        "py": "jiānglái de dǎsuàn",
        "vn": "dự định tương lai"
      },
      {
        "zh": "对将来",
        "py": "duì jiānglái",
        "vn": "đối với tương lai"
      },
      {
        "zh": "将来会更好",
        "py": "jiānglái huì gèng hǎo",
        "vn": "tương lai sẽ tốt hơn"
      },
      {
        "zh": "为了将来",
        "py": "wèile jiānglái",
        "vn": "vì tương lai"
      },
      {
        "zh": "将来的发展",
        "py": "jiānglái de fāzhǎn",
        "vn": "sự phát triển sau này"
      }
    ],
    "patterns": [
      {
        "s": "将来 + Sub + V",
        "m": "Sau này ai đó sẽ làm gì"
      },
      {
        "s": "将来 ≠ 未来",
        "m": "将来 gần và cụ thể hơn; dùng cho dự định cá nhân"
      }
    ]
  },
  {
    "n": 17,
    "zh": "发展",
    "py": "fāzhǎn",
    "pos": "Động từ",
    "vn": "phát triển",
    "hv": "phát triển",
    "em": "📈",
    "lesson": 3,
    "explain": [
      "Mở rộng, tiến bộ theo hướng tốt hơn."
    ],
    "usage": "Động từ; thường đi với 更好的发展, 发展自己.",
    "collo": [
      "更好的发展",
      "发展自己",
      "公司的发展"
    ],
    "ex_zh": "只有做自己喜欢的事，才会觉得幸福，将来也会有更好的发展。",
    "ex_py": "Zhǐyǒu zuò zìjǐ xǐhuan de shì, cái huì juéde xìngfú, jiānglái yě huì yǒu gèng hǎo de fāzhǎn.",
    "ex_vn": "Chỉ khi làm việc mình thích, mới cảm thấy hạnh phúc, tương lai cũng sẽ có sự phát triển tốt hơn.",
    "exList": [
      {
        "zh": "只有做自己喜欢的事，才会觉得幸福，将来也会有更好的发展。",
        "py": "Zhǐyǒu zuò zìjǐ xǐhuan de shì, cái huì juéde xìngfú, jiānglái yě huì yǒu gèng hǎo de fāzhǎn.",
        "vn": "Chỉ khi làm việc mình thích, mới cảm thấy hạnh phúc, tương lai cũng sẽ có sự phát triển tốt hơn."
      },
      {
        "zh": "我们只有了解了自己的兴趣爱好后，才能更好地发展自己。",
        "py": "Wǒmen zhǐyǒu liǎojiěle zìjǐ de xìngqù àihào hòu, cái néng gèng hǎo de fāzhǎn zìjǐ.",
        "vn": "Chúng ta chỉ khi hiểu rõ sở thích của bản thân, mới có thể phát triển bản thân tốt hơn."
      },
      {
        "zh": "这家公司发展得很快。",
        "py": "Zhè jiā gōngsī fāzhǎn de hěn kuài.",
        "vn": "Công ty này phát triển rất nhanh."
      }
    ],
    "hanzi": [
      {
        "c": "展",
        "p": "zhǎn",
        "type": "半包围结构 · Bán bao vây",
        "st": 10,
        "ord": "尸 bao ngoài → 屰+ 衣(biến thể) trong",
        "rad": "尸 (thi)",
        "mean": "mở rộng, triển khai",
        "tip": "Chữ mang nghĩa MỞ RỘNG, TRIỂN KHAI, kết hợp 发(phát ra) thành 发展 = PHÁT TRIỂN.",
        "cf": "展 dễ nhầm với 屈 (qū – \"khuất phục\")",
        "w": "发展 / 展开 / 发展方向"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Chúng ta chỉ khi hiểu rõ sở thích của bản thân, mới có thể phát triển bản thân tốt hơn.",
        "answer": "我们只有了解了自己的兴趣爱好后，才能更好地发展自己。",
        "answerPy": "Wǒmen zhǐyǒu liǎojiěle zìjǐ de xìngqù àihào hòu, cái néng gèng hǎo de fāzhǎn zìjǐ.",
        "note": "发展自己 — phát triển bản thân.",
        "pair": "只有……才……"
      },
      {
        "promptLang": "vi",
        "prompt": "Chỉ cần bạn tìm được phương hướng đúng đắn, công việc sẽ có sự phát triển tốt hơn.",
        "answer": "只要你找到正确的方向，工作就会有更好的发展。",
        "answerPy": "Zhǐyào nǐ zhǎodào zhèngquè de fāngxiàng, gōngzuò jiù huì yǒu gèng hǎo de fāzhǎn.",
        "note": "更好的发展 kết hợp 方向/正确, ôn lại từ vựng của bài.",
        "pair": "只要……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "经济发展",
        "py": "jīngjì fāzhǎn",
        "vn": "kinh tế phát triển"
      },
      {
        "zh": "更好的发展",
        "py": "gèng hǎo de fāzhǎn",
        "vn": "sự phát triển tốt hơn"
      },
      {
        "zh": "发展得很快",
        "py": "fāzhǎn de hěn kuài",
        "vn": "phát triển rất nhanh"
      },
      {
        "zh": "公司的发展",
        "py": "gōngsī de fāzhǎn",
        "vn": "sự phát triển của công ty"
      },
      {
        "zh": "发展自己",
        "py": "fāzhǎn zìjǐ",
        "vn": "phát triển bản thân"
      }
    ],
    "patterns": [
      {
        "s": "Sub + 发展 + 得 + Adj (động từ)",
        "m": "Cái gì phát triển thế nào"
      },
      {
        "s": "……的 + 发展 (danh từ)",
        "m": "Sự phát triển của cái gì"
      }
    ]
  },
  {
    "n": 18,
    "zh": "躺",
    "py": "tǎng",
    "pos": "Động từ",
    "vn": "nằm",
    "hv": "thảng",
    "em": "🛌",
    "lesson": 3,
    "explain": [
      "Đặt thân thể ở tư thế nằm ngang."
    ],
    "usage": "Động từ; thường đi với 躺在床上, 躺着.",
    "collo": [
      "躺在床上",
      "躺在沙发上",
      "本来躺在……"
    ],
    "ex_zh": "然后躺在床上看看书、听听音乐，困了睡睡觉，就很幸福。",
    "ex_py": "Ránhòu tǎng zài chuáng shang kànkan shū, tīngting yīnyuè, kùnle shuìshui jiào, jiù hěn xìngfú.",
    "ex_vn": "Sau đó nằm trên giường đọc sách, nghe nhạc, buồn ngủ thì ngủ một chút, thế là rất hạnh phúc.",
    "exList": [
      {
        "zh": "然后躺在床上看看书、听听音乐，困了睡睡觉，就很幸福。",
        "py": "Ránhòu tǎng zài chuáng shang kànkan shū, tīngting yīnyuè, kùnle shuìshui jiào, jiù hěn xìngfú.",
        "vn": "Sau đó nằm trên giường đọc sách, nghe nhạc, buồn ngủ thì ngủ một chút, thế là rất hạnh phúc."
      },
      {
        "zh": "没有，我本来躺在沙发上看书，结果睡着了。",
        "py": "Méiyǒu, wǒ běnlái tǎng zài shāfā shang kàn shū, jiéguǒ shuìzháo le.",
        "vn": "Không có, tôi vốn đang nằm trên sô pha đọc sách, kết quả ngủ mất rồi."
      },
      {
        "zh": "他累了，躺下就睡着了。",
        "py": "Tā lèi le, tǎngxià jiù shuìzháo le.",
        "vn": "Anh ấy mệt rồi, vừa nằm xuống là ngủ ngay."
      }
    ],
    "hanzi": [
      {
        "c": "躺",
        "p": "tǎng",
        "type": "左右结构 · Trái-phải",
        "st": 15,
        "ord": "身 (thân) trái → 尚 phải",
        "rad": "身 (thân – thân thể)",
        "mean": "nằm",
        "tip": "Bộ thân thể 身 (tư thế cơ thể) + 尚(biểu âm) → tư thế THÂN THỂ NẰM NGANG, mở rộng thành NẰM.",
        "cf": "倘 (tǎng – \"nếu như\", bộ 亻\")",
        "w": "躺 / 躺下 / 躺着"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tôi thấy chỉ cần đi làm về tắm nước nóng rồi nằm đọc sách nghe nhạc, buồn ngủ thì ngủ, là đã rất hạnh phúc.",
        "answer": "我觉得只要工作结束回家后洗个热水澡，躺在床上看看书、听听音乐，困了就睡觉，那就很幸福。",
        "answerPy": "Wǒ juéde zhǐyào gōngzuò jiéshù huí jiā hòu xǐ ge rèshuǐzǎo, tǎng zài chuáng shang kànkan shū, tīngting yīnyuè, kùn le jiù shuìjiào, nà jiù hěn xìngfú.",
        "note": "幸福 là từ bài 1; 躺在 + nơi chốn + 上.",
        "pair": "只要……就……"
      },
      {
        "promptLang": "vi",
        "prompt": "Trong phòng tối thế mà sao không bật đèn? Chẳng lẽ bạn không khỏe nên đang nằm nghỉ?",
        "answer": "房间里这么暗，怎么不开灯呀？难道你身体不舒服，正躺着休息吗？",
        "answerPy": "Fángjiān li zhème àn, zěnme bù kāi dēng ya? Nándào nǐ shēntǐ bù shūfu, zhèng tǎngzhe xiūxi ma?",
        "note": "难道……吗？ — câu hỏi tu từ (bài 9).",
        "pair": "难道……吗？"
      }
    ],
    "colloFull": [
      {
        "zh": "躺在床上",
        "py": "tǎng zài chuáng shàng",
        "vn": "nằm trên giường"
      },
      {
        "zh": "躺在沙发上",
        "py": "tǎng zài shāfā shàng",
        "vn": "nằm trên sô pha"
      },
      {
        "zh": "躺下",
        "py": "tǎng xià",
        "vn": "nằm xuống"
      },
      {
        "zh": "躺着看书",
        "py": "tǎng zhe kàn shū",
        "vn": "nằm đọc sách"
      },
      {
        "zh": "躺一会儿",
        "py": "tǎng yíhuìr",
        "vn": "nằm một lát"
      }
    ],
    "patterns": [
      {
        "s": "躺 + 在 + nơi chốn + 上",
        "m": "Nằm trên cái gì"
      },
      {
        "s": "躺着 + V",
        "m": "Vừa nằm vừa làm gì — 着 chỉ trạng thái kéo dài"
      }
    ]
  },
  {
    "n": 19,
    "zh": "困",
    "py": "kùn",
    "pos": "Tính từ",
    "vn": "buồn ngủ",
    "hv": "khốn",
    "em": "😴",
    "lesson": 3,
    "explain": [
      "Cảm thấy mệt mỏi, muốn ngủ."
    ],
    "usage": "Tính từ; thường đi với 困了睡睡觉, 觉得很困.",
    "collo": [
      "困了睡睡觉",
      "觉得很困",
      "困的时候"
    ],
    "ex_zh": "困了睡睡觉，就很幸福。",
    "ex_py": "Kùnle shuìshui jiào, jiù hěn xìngfú.",
    "ex_vn": "Buồn ngủ thì ngủ một chút, thế là rất hạnh phúc.",
    "exList": [
      {
        "zh": "困了睡睡觉，就很幸福。",
        "py": "Kùnle shuìshui jiào, jiù hěn xìngfú.",
        "vn": "Buồn ngủ thì ngủ một chút, thế là rất hạnh phúc."
      },
      {
        "zh": "它们困的时候才睡觉，饿的时候才吃东西。",
        "py": "Tāmen kùn de shíhou cái shuìjiào, è de shíhou cái chī dōngxi.",
        "vn": "Chúng buồn ngủ mới ngủ, đói mới ăn."
      },
      {
        "zh": "我今天很困，昨晚没睡好。",
        "py": "Wǒ jīntiān hěn kùn, zuówǎn méi shuìhǎo.",
        "vn": "Hôm nay tôi rất buồn ngủ, tối qua không ngủ ngon."
      }
    ],
    "hanzi": [
      {
        "c": "困",
        "p": "kùn",
        "type": "半包围结构 · Bán bao vây",
        "st": 7,
        "ord": "囗 bao ngoài → 木 (mộc) trong",
        "rad": "囗 (vi – vây quanh)",
        "mean": "khốn khó, mệt mỏi",
        "tip": "Chữ tượng hình cây 木 bị VÂY BÓ trong khung 囗 (bị hạn chế) → nghĩa gốc là KHỐN KHÓ, mở rộng thành MỆT MỎI, BUỒN NGỦ.",
        "cf": "因 (yīn – \"nguyên nhân\", cũng có 囗\")",
        "w": "困 / 困难 / 犯困"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Chúng buồn ngủ mới ngủ, đói mới ăn, mãi mãi không phiền muộn vì chuyện hôm qua.",
        "answer": "它们困的时候才睡觉，饿的时候才吃东西，永远不为昨天的事烦恼。",
        "answerPy": "Tāmen kùn de shíhou cái shuìjiào, è de shíhou cái chī dōngxi, yǒngyuǎn bù wèi zuótiān de shì fánnǎo.",
        "note": "困的时候……永远……烦恼 kết hợp 永远/烦恼, ôn lại nhiều từ vựng.",
        "pair": "时……时……"
      },
      {
        "promptLang": "vi",
        "prompt": "Vì hôm nay tôi rất buồn ngủ, nên muốn nằm trên giường ngủ một lát.",
        "answer": "因为我今天很困，所以想躺在床上睡一会儿。",
        "answerPy": "Yīnwèi wǒ jīntiān hěn kùn, suǒyǐ xiǎng tǎng zài chuáng shang shuì yíhuìr.",
        "note": "困 là buồn ngủ, khác 累 (mệt).",
        "pair": "因为……所以……"
      }
    ],
    "colloFull": [
      {
        "zh": "很困",
        "py": "hěn kùn",
        "vn": "rất buồn ngủ"
      },
      {
        "zh": "困了",
        "py": "kùn le",
        "vn": "buồn ngủ rồi"
      },
      {
        "zh": "困的时候",
        "py": "kùn de shíhou",
        "vn": "lúc buồn ngủ"
      },
      {
        "zh": "一点儿也不困",
        "py": "yìdiǎnr yě bú kùn",
        "vn": "chẳng buồn ngủ chút nào"
      },
      {
        "zh": "困得睁不开眼",
        "py": "kùn de zhēng bù kāi yǎn",
        "vn": "buồn ngủ díp mắt"
      }
    ],
    "patterns": [
      {
        "s": "Sub + 很 / 有点儿 + 困",
        "m": "Ai đó rất / hơi buồn ngủ"
      },
      {
        "s": "困 ≠ 累",
        "m": "困 là buồn ngủ; 累 là mệt"
      }
    ]
  },
  {
    "n": 20,
    "zh": "经济",
    "py": "jīngjì",
    "pos": "Danh từ",
    "vn": "kinh tế",
    "hv": "kinh tế",
    "em": "💹",
    "lesson": 4,
    "explain": [
      "Hoạt động sản xuất, trao đổi, tiêu dùng của xã hội; điều kiện tài chính."
    ],
    "usage": "Danh từ; thường đi với 经济条件, 经济越好.",
    "collo": [
      "经济条件越好",
      "经济发展",
      "经济压力"
    ],
    "ex_zh": "认为经济条件越好人就越幸福。",
    "ex_py": "Rènwéi jīngjì tiáojiàn yuè hǎo rén jiù yuè xìngfú.",
    "ex_vn": "Cho rằng điều kiện kinh tế càng tốt thì người ta càng hạnh phúc.",
    "exList": [
      {
        "zh": "认为经济条件越好人就越幸福。",
        "py": "Rènwéi jīngjì tiáojiàn yuè hǎo rén jiù yuè xìngfú.",
        "vn": "Cho rằng điều kiện kinh tế càng tốt thì người ta càng hạnh phúc."
      },
      {
        "zh": "这几年国家的经济发展得很快。",
        "py": "Zhè jǐ nián guójiā de jīngjì fāzhǎn de hěn kuài.",
        "vn": "Mấy năm nay kinh tế đất nước phát triển rất nhanh."
      },
      {
        "zh": "他家的经济情况不太好。",
        "py": "Tā jiā de jīngjì qíngkuàng bú tài hǎo.",
        "vn": "Tình hình kinh tế nhà anh ấy không tốt lắm."
      }
    ],
    "hanzi": [
      {
        "c": "济",
        "p": "jì",
        "type": "左右结构 · Trái-phải (giản thể)",
        "st": 6,
        "ord": "氵 (thủy) trái → 齐 (tề) phải",
        "rad": "氵 (thủy – nước)",
        "mean": "cứu giúp, điều tiết",
        "tip": "Bộ nước 氵 (như dòng chảy điều hòa) + 齐(đồng đều) → ĐIỀU TIẾT CÂN BẰNG, kết hợp 经(quản lý) thành 经济 = KINH TẾ.",
        "cf": "挤 (jǐ – \"chen chúc\", bộ 扌\")",
        "w": "经济 / 经济学 / 节济"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Có người cho rằng điều kiện kinh tế càng tốt thì người ta càng hạnh phúc, nhưng thực tế không hẳn vậy.",
        "answer": "有人认为经济条件越好人就越幸福，但实际并不一定是这样。",
        "answerPy": "Yǒu rén rènwéi jīngjì tiáojiàn yuè hǎo rén jiù yuè xìngfú, dàn shíjì bìng bù yídìng shì zhèyàng.",
        "note": "经济条件 kết hợp 条件/实际, ôn lại từ vựng của bài.",
        "pair": "越……越……"
      },
      {
        "promptLang": "vi",
        "prompt": "Mấy năm nay kinh tế đất nước càng phát triển nhanh thì cuộc sống người dân càng tốt lên.",
        "answer": "这几年国家的经济发展得越快，人们的生活就越好。",
        "answerPy": "Zhè jǐ nián guójiā de jīngjì fāzhǎn de yuè kuài, rénmen de shēnghuó jiù yuè hǎo.",
        "note": "V + 得 + 越 + Adj — hai vế biến đổi cùng chiều.",
        "pair": "越……越……"
      }
    ],
    "colloFull": [
      {
        "zh": "经济发展",
        "py": "jīngjì fāzhǎn",
        "vn": "phát triển kinh tế"
      },
      {
        "zh": "经济条件",
        "py": "jīngjì tiáojiàn",
        "vn": "điều kiện kinh tế"
      },
      {
        "zh": "经济压力",
        "py": "jīngjì yālì",
        "vn": "áp lực kinh tế"
      },
      {
        "zh": "经济不错",
        "py": "jīngjì búcuò",
        "vn": "kinh tế khá"
      },
      {
        "zh": "家里的经济",
        "py": "jiā li de jīngjì",
        "vn": "kinh tế gia đình"
      }
    ],
    "patterns": [
      {
        "s": "经济 + 条件 / 压力 / 发展",
        "m": "Điều kiện, áp lực, phát triển kinh tế"
      },
      {
        "s": "经济 + 好 / 不好",
        "m": "Kinh tế khá / khó khăn"
      }
    ]
  },
  {
    "n": 21,
    "zh": "条件",
    "py": "tiáojiàn",
    "pos": "Danh từ",
    "vn": "điều kiện",
    "hv": "điều kiện",
    "em": "📋",
    "lesson": 4,
    "explain": [
      "Yếu tố cần có để một việc xảy ra/tồn tại."
    ],
    "usage": "Danh từ; thường đi với 经济条件, 条件越好.",
    "collo": [
      "经济条件",
      "条件越好",
      "工作条件"
    ],
    "ex_zh": "认为经济条件越好人就越幸福。",
    "ex_py": "Rènwéi jīngjì tiáojiàn yuè hǎo rén jiù yuè xìngfú.",
    "ex_vn": "Cho rằng điều kiện kinh tế càng tốt thì người ta càng hạnh phúc.",
    "exList": [
      {
        "zh": "认为经济条件越好人就越幸福。",
        "py": "Rènwéi jīngjì tiáojiàn yuè hǎo rén jiù yuè xìngfú.",
        "vn": "Cho rằng điều kiện kinh tế càng tốt thì người ta càng hạnh phúc."
      },
      {
        "zh": "公司的工作条件越来越好了。",
        "py": "Gōngsī de gōngzuò tiáojiàn yuè lái yuè hǎo le.",
        "vn": "Điều kiện làm việc của công ty ngày càng tốt hơn."
      },
      {
        "zh": "这个学校的学习条件很不错。",
        "py": "Zhège xuéxiào de xuéxí tiáojiàn hěn búcuò.",
        "vn": "Điều kiện học tập của trường này khá tốt."
      }
    ],
    "hanzi": [
      {
        "c": "件",
        "p": "jiàn",
        "type": "左右结构 · Trái-phải",
        "st": 6,
        "ord": "亻 (nhân) trái → 牛 (ngưu) phải",
        "rad": "亻 (nhân – người)",
        "mean": "kiện, việc",
        "tip": "Bộ người 亻 + 牛(trâu bò, vật để chia phần) → chỉ MỘT KIỆN/VIỆC riêng biệt, kết hợp 条(điều khoản) thành 条件 = ĐIỀU KIỆN.",
        "cf": "伴 (bàn – \"bạn đồng hành\", bộ 亻\")",
        "w": "条件 / 条款 / 无条件"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Điều kiện làm việc của công ty này ngày càng tốt, nhưng không phải ai cũng cảm thấy hạnh phúc.",
        "answer": "这家公司的工作条件越来越好，但不是每个人都感到幸福。",
        "answerPy": "Zhè jiā gōngsī de gōngzuò tiáojiàn yuè lái yuè hǎo, dàn bú shì měi ge rén dōu gǎndào xìngfú.",
        "note": "工作条件越来越好 — điều kiện làm việc ngày càng tốt.",
        "pair": "越……越……"
      },
      {
        "promptLang": "vi",
        "prompt": "Điều kiện kinh tế của gia đình cô ấy rất tốt, nhưng cô ấy vẫn không cảm thấy hạnh phúc.",
        "answer": "她家的经济条件很好，但她还是不觉得幸福。",
        "answerPy": "Tā jiā de jīngjì tiáojiàn hěn hǎo, dàn tā háishi bù juéde xìngfú.",
        "note": "经济条件 kết hợp 经济, ôn lại từ vựng của bài.",
        "pair": "……，还是……"
      }
    ],
    "colloFull": [
      {
        "zh": "经济条件",
        "py": "jīngjì tiáojiàn",
        "vn": "điều kiện kinh tế"
      },
      {
        "zh": "工作条件",
        "py": "gōngzuò tiáojiàn",
        "vn": "điều kiện làm việc"
      },
      {
        "zh": "条件越好",
        "py": "tiáojiàn yuè hǎo",
        "vn": "điều kiện càng tốt"
      },
      {
        "zh": "符合条件",
        "py": "fúhé tiáojiàn",
        "vn": "đủ điều kiện"
      },
      {
        "zh": "生活条件",
        "py": "shēnghuó tiáojiàn",
        "vn": "điều kiện sống"
      }
    ],
    "patterns": [
      {
        "s": "符合 + 条件",
        "m": "Đủ điều kiện — 符合 là từ bài 3"
      },
      {
        "s": "条件 + 好 / 不好",
        "m": "Điều kiện tốt / kém"
      }
    ]
  },
  {
    "n": 22,
    "zh": "富",
    "py": "fù",
    "pos": "Tính từ",
    "vn": "giàu",
    "hv": "phú",
    "em": "💰",
    "lesson": 4,
    "explain": [
      "Có nhiều tiền của, sung túc về vật chất."
    ],
    "usage": "Tính từ; thường đi với 富人, 过得并不愉快.",
    "collo": [
      "富人",
      "有很多富人",
      "富有的人"
    ],
    "ex_zh": "其实有很多富人过得并不愉快。",
    "ex_py": "Qíshí yǒu hěn duō fù rén guò de bìng bù yúkuài.",
    "ex_vn": "Thực ra có rất nhiều người giàu sống không hề vui vẻ.",
    "exList": [
      {
        "zh": "其实有很多富人过得并不愉快。",
        "py": "Qíshí yǒu hěn duō fù rén guò de bìng bù yúkuài.",
        "vn": "Thực ra có rất nhiều người giàu sống không hề vui vẻ."
      },
      {
        "zh": "他家很富，但是很少有时间陪家人。",
        "py": "Tā jiā hěn fù, dànshì hěn shǎo yǒu shíjiān péi jiārén.",
        "vn": "Nhà anh ấy rất giàu, nhưng rất ít thời gian ở bên gia đình."
      },
      {
        "zh": "这个国家资源丰富，人民生活也比较富裕。",
        "py": "Zhège guójiā zīyuán fēngfù, rénmín shēnghuó yě bǐjiào fùyù.",
        "vn": "Đất nước này tài nguyên phong phú, đời sống nhân dân cũng khá sung túc."
      }
    ],
    "hanzi": [
      {
        "c": "富",
        "p": "fù",
        "type": "上下结构 · Trên-dưới",
        "st": 12,
        "ord": "宀 (miên) trên → 畐 dưới",
        "rad": "宀 (miên – mái nhà)",
        "mean": "giàu có",
        "tip": "Bộ mái nhà 宀 (nhà cửa đầy đủ) + 畐(đầy đủ, biểu âm) → NHÀ CỬA ĐẦY ĐỦ CỦA CẢI, mở rộng thành GIÀU CÓ.",
        "cf": "福 (fú – \"hạnh phúc\", bộ 礻\")",
        "w": "富 / 富人 / 丰富"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Thực ra có rất nhiều người giàu sống không hề vui vẻ, mà có người nghèo lại sống rất hạnh phúc.",
        "answer": "其实有很多富人过得并不愉快，而有些穷人却过得很快乐。",
        "answerPy": "Qíshí yǒu hěn duō fù rén guò de bìng bù yúkuài, ér yǒuxiē qióng rén què guò de hěn kuàilè.",
        "note": "富人……穷人 kết hợp 穷/愉快, ôn lại từ vựng của bài.",
        "pair": "……，却……"
      },
      {
        "promptLang": "vi",
        "prompt": "Nhà anh ấy tuy giàu, nhưng anh ấy vẫn cảm thấy thiếu thứ gì đó.",
        "answer": "他家虽然富，但他还是觉得缺少点儿什么。",
        "answerPy": "Tā jiā suīrán fù, dàn tā háishi juéde quēshǎo diǎnr shénme.",
        "note": "虽然富……缺少 kết hợp 缺少, ôn lại từ vựng Bài 8.",
        "pair": "虽然……还是……"
      }
    ],
    "colloFull": [
      {
        "zh": "富人",
        "py": "fù rén",
        "vn": "người giàu"
      },
      {
        "zh": "很富",
        "py": "hěn fù",
        "vn": "rất giàu"
      },
      {
        "zh": "富有的人",
        "py": "fùyǒu de rén",
        "vn": "người giàu có"
      },
      {
        "zh": "变富了",
        "py": "biàn fù le",
        "vn": "trở nên giàu"
      },
      {
        "zh": "富和穷",
        "py": "fù hé qióng",
        "vn": "giàu và nghèo"
      }
    ],
    "patterns": [
      {
        "s": "富 ↔ 穷",
        "m": "Giàu ↔ nghèo"
      },
      {
        "s": "富 + 人",
        "m": "Người giàu — 富人 / 穷人"
      }
    ]
  },
  {
    "n": 23,
    "zh": "穷",
    "py": "qióng",
    "pos": "Tính từ",
    "vn": "nghèo",
    "hv": "cùng",
    "em": "😔",
    "lesson": 4,
    "explain": [
      "Thiếu thốn về tiền của, vật chất."
    ],
    "usage": "Tính từ; thường đi với 有些穷人, 过得很快乐.",
    "collo": [
      "有些穷人",
      "穷人却过得很快乐",
      "家里很穷"
    ],
    "ex_zh": "有些穷人却过得很快乐。",
    "ex_py": "Yǒuxiē qióng rén què guò de hěn kuàilè.",
    "ex_vn": "Có người nghèo lại sống rất vui vẻ.",
    "exList": [
      {
        "zh": "有些穷人却过得很快乐。",
        "py": "Yǒuxiē qióng rén què guò de hěn kuàilè.",
        "vn": "Có người nghèo lại sống rất vui vẻ."
      },
      {
        "zh": "他小时候家里很穷，但他从不觉得自卑。",
        "py": "Tā xiǎo shíhou jiā li hěn qióng, dàn tā cóng bù juéde zìbēi.",
        "vn": "Lúc nhỏ nhà anh ấy rất nghèo, nhưng anh ấy chưa bao giờ cảm thấy tự ti."
      },
      {
        "zh": "虽然穷，但是他们一家人很幸福。",
        "py": "Suīrán qióng, dànshì tāmen yì jiā rén hěn xìngfú.",
        "vn": "Tuy nghèo, nhưng cả nhà họ rất hạnh phúc."
      }
    ],
    "hanzi": [
      {
        "c": "穷",
        "p": "qióng",
        "type": "半包围结构 · Bán bao vây (giản thể)",
        "st": 7,
        "ord": "穴 (huyệt) trên → 力 dưới",
        "rad": "穴 (huyệt – hang, lỗ)",
        "mean": "nghèo, cùng cực",
        "tip": "Bộ 穴(hang hốc, nơi ở đơn sơ) + 力(sức lực, phải gắng sức) → sống trong cảnh THIẾU THỐN phải gắng sức, mở rộng thành NGHÈO.",
        "cf": "空 (kōng – \"trống rỗng\", cũng bộ 穴\")",
        "w": "穷 / 贫穷 / 穷人"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Có người nghèo lại sống rất vui vẻ, vì họ có tình cảm gia đình mà tiền không mua được.",
        "answer": "有些穷人却过得很快乐，因为他们有钱买不到的家庭感情。",
        "answerPy": "Yǒuxiē qióng rén què guò de hěn kuàilè, yīnwèi tāmen yǒu qián mǎi bu dào de jiātíng gǎnqíng.",
        "note": "穷人……快乐 kết hợp 感情, ôn lại từ vựng Bài 7.",
        "pair": "因为……"
      },
      {
        "promptLang": "vi",
        "prompt": "Tuy lúc nhỏ nhà nghèo, nhưng anh ấy sau này đã trở thành một người thành công.",
        "answer": "虽然小时候家里穷，但他后来成为了一个成功的人。",
        "answerPy": "Suīrán xiǎo shíhou jiā li qióng, dàn tā hòulái chéngwéile yí ge chénggōng de rén.",
        "note": "穷……成为……成功 kết hợp 成为, ôn lại từ vựng Bài 8.",
        "pair": "虽然……但……"
      }
    ],
    "colloFull": [
      {
        "zh": "穷人",
        "py": "qióng rén",
        "vn": "người nghèo"
      },
      {
        "zh": "家里很穷",
        "py": "jiā li hěn qióng",
        "vn": "nhà rất nghèo"
      },
      {
        "zh": "穷得很",
        "py": "qióng de hěn",
        "vn": "nghèo lắm"
      },
      {
        "zh": "以前穷",
        "py": "yǐqián qióng",
        "vn": "trước đây nghèo"
      },
      {
        "zh": "穷人却很快乐",
        "py": "qióng rén què hěn kuàilè",
        "vn": "người nghèo lại rất vui"
      }
    ],
    "patterns": [
      {
        "s": "Sub + 很 + 穷",
        "m": "Ai đó rất nghèo"
      },
      {
        "s": "穷 ↔ 富",
        "m": "Nghèo ↔ giàu"
      }
    ]
  },
  {
    "n": 24,
    "zh": "等",
    "py": "děng",
    "pos": "Trợ từ",
    "vn": "vân vân",
    "hv": "đẳng",
    "em": "➕",
    "lesson": 4,
    "explain": [
      "Trợ từ đặt cuối câu liệt kê, diễn tả còn nhiều điều khác chưa nêu hết."
    ],
    "usage": "A、B、C 等: liệt kê + 等.",
    "collo": [
      "时间、感情、生活经历等",
      "等等",
      "这些东西等"
    ],
    "ex_zh": "因为很多东西都是不能用钱买到的，例如时间、感情、生活经历等。",
    "ex_py": "Yīnwèi hěn duō dōngxi dōu shì bù néng yòng qián mǎidào de, lìrú shíjiān, gǎnqíng, shēnghuó jīnglì děng.",
    "ex_vn": "Vì rất nhiều thứ đều không thể dùng tiền mua được, ví dụ như thời gian, tình cảm, trải nghiệm cuộc sống, vân vân.",
    "exList": [
      {
        "zh": "因为很多东西都是不能用钱买到的，例如时间、感情、生活经历等。",
        "py": "Yīnwèi hěn duō dōngxi dōu shì bù néng yòng qián mǎidào de, lìrú shíjiān, gǎnqíng, shēnghuó jīnglì děng.",
        "vn": "Vì rất nhiều thứ đều không thể dùng tiền mua được, ví dụ như thời gian, tình cảm, trải nghiệm cuộc sống, vân vân."
      },
      {
        "zh": "水果店里有苹果、香蕉、葡萄等。",
        "py": "Shuǐguǒ diàn li yǒu píngguǒ, xiāngjiāo, pútao děng.",
        "vn": "Trong cửa hàng trái cây có táo, chuối, nho, vân vân."
      },
      {
        "zh": "我们需要准备护照、机票、现金等。",
        "py": "Wǒmen xūyào zhǔnbèi hùzhào, jīpiào, xiànjīn děng.",
        "vn": "Chúng ta cần chuẩn bị hộ chiếu, vé máy bay, tiền mặt, vân vân."
      }
    ],
    "hanzi": [
      {
        "c": "等",
        "p": "děng",
        "type": "上下结构 · Trên-dưới",
        "st": 12,
        "ord": "竹(biến thể) trên → 寺 dưới",
        "rad": "竹 (trúc – tre)",
        "mean": "chờ, đẳng cấp, vân vân",
        "tip": "Bộ tre 竹 (thẻ tre xếp theo thứ tự) + 寺(biểu âm) → SẮP XẾP THEO THỨ TỰ, mở rộng thành trợ từ liệt kê VÂN VÂN (còn nhiều điều khác cùng loại).",
        "cf": "等 khi làm động từ nghĩa là CHỜ ĐỢI (等一下)",
        "w": "等 / 等等 / 平等"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Rất nhiều thứ không thể dùng tiền mua được, ví dụ như thời gian, cảm xúc, kinh nghiệm cuộc sống, vân vân.",
        "answer": "很多东西不能用钱买到，例如时间、感情、生活经验等。",
        "answerPy": "Hěn duō dōngxi bù néng yòng qián mǎidào, lìrú shíjiān, gǎnqíng, shēnghuó jīngyàn děng.",
        "note": "例如……等 kết hợp 感情/经验, ôn lại từ vựng của bài.",
        "pair": "例如……"
      },
      {
        "promptLang": "vi",
        "prompt": "Chúng ta không những cần chuẩn bị hồ sơ, hộ chiếu, tiền mặt, v.v., mà còn phải đến sớm một chút.",
        "answer": "我们不但需要准备材料、护照、现金等，而且还得早点儿到。",
        "answerPy": "Wǒmen búdàn xūyào zhǔnbèi cáiliào, hùzhào, xiànjīn děng, érqiě hái děi zǎo diǎnr dào.",
        "note": "等 đặt CUỐI danh sách: A、B、C 等.",
        "pair": "不但……而且……"
      }
    ],
    "colloFull": [
      {
        "zh": "……等",
        "py": "děng",
        "vn": "…vân vân"
      },
      {
        "zh": "等等",
        "py": "děngděng",
        "vn": "vân vân"
      },
      {
        "zh": "时间、感情等",
        "py": "shíjiān gǎnqíng děng",
        "vn": "thời gian, tình cảm, v.v."
      },
      {
        "zh": "材料、现金等",
        "py": "cáiliào xiànjīn děng",
        "vn": "hồ sơ, tiền mặt, v.v."
      },
      {
        "zh": "书、报纸等",
        "py": "shū bàozhǐ děng",
        "vn": "sách, báo, v.v."
      }
    ],
    "patterns": [
      {
        "s": "A、B、C + 等",
        "m": "A, B, C, v.v. — đặt CUỐI danh sách"
      },
      {
        "s": "等 (děng, vân vân) ≠ 等 (děng, chờ đợi)"
      }
    ]
  },
  {
    "n": 25,
    "zh": "由于",
    "py": "yóuyú",
    "pos": "Liên từ/Giới từ",
    "vn": "vì, bởi vì",
    "hv": "do vu",
    "em": "📌",
    "lesson": 4,
    "explain": [
      "1. (Liên từ) Diễn tả nguyên nhân, theo sau là một mệnh đề, thường đứng ở vế đầu của câu.",
      "2. (Giới từ) Cũng diễn tả nguyên nhân, theo sau là cụm danh từ."
    ],
    "usage": "由于 + mệnh đề (liên từ), ……; 由于 + cụm danh từ (giới từ), ……",
    "collo": [
      "由于缺钱",
      "由于种种原因",
      "由于工作的需要"
    ],
    "ex_zh": "如果由于缺钱而不能及时去看医生，你的健康都很难得到保证。",
    "ex_py": "Rúguǒ yóuyú quē qián ér bù néng jíshí qù kàn yīshēng, nǐ de jiànkāng dōu hěn nán dédào bǎozhèng.",
    "ex_vn": "Nếu vì thiếu tiền mà không thể kịp thời đi khám bệnh, sức khỏe của bạn rất khó được đảm bảo.",
    "exList": [
      {
        "zh": "如果由于缺钱而不能及时去看医生，你的健康都很难得到保证。",
        "py": "Rúguǒ yóuyú quē qián ér bù néng jíshí qù kàn yīshēng, nǐ de jiànkāng dōu hěn nán dédào bǎozhèng.",
        "vn": "Nếu vì thiếu tiền mà không thể kịp thời đi khám bệnh, sức khỏe của bạn rất khó được đảm bảo."
      },
      {
        "zh": "由于种种原因，我们不得不改变原来的计划。",
        "py": "Yóuyú zhǒngzhǒng yuányīn, wǒmen bùdébù gǎibiàn yuánlái de jìhuà.",
        "vn": "Vì nhiều nguyên nhân khác nhau, chúng tôi không thể không thay đổi kế hoạch ban đầu."
      },
      {
        "zh": "由于工作的需要，我去年十月去了趟上海，跟一家公司去谈生意。",
        "py": "Yóuyú gōngzuò de xūyào, wǒ qùnián shíyuè qùle tàng Shànghǎi, gēn yì jiā gōngsī qù tán shēngyi.",
        "vn": "Vì nhu cầu công việc, tháng 10 năm ngoái tôi đã đến Thượng Hải, đến đàm phán kinh doanh với một công ty."
      }
    ],
    "hanzi": [
      {
        "c": "由",
        "p": "yóu",
        "type": "独体字 · Chữ đơn",
        "st": 5,
        "ord": "nét liền",
        "rad": "田 (điền, biến thể)",
        "mean": "từ, do",
        "tip": "Chữ tượng hình quả trên cành → mở rộng nghĩa NGUỒN GỐC, TỪ ĐÂU MÀ RA, kết hợp 于(ở) thành 由于 = DO, VÌ (bắt nguồn từ nguyên nhân nào đó).",
        "cf": "甲 (jiǎ – \"giáp, thứ nhất\", tự dạng gần giống)",
        "w": "由于 / 理由 / 自由"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Vì nhiều nguyên nhân, nên chúng tôi buộc phải thay đổi kế hoạch ban đầu.",
        "answer": "由于种种原因，所以我们不得不改变原来的计划。",
        "answerPy": "Yóuyú zhǒngzhǒng yuányīn, suǒyǐ wǒmen bùdébù gǎibiàn yuánlái de jìhuà.",
        "note": "不得不 và 原来的计划 đều là từ bài 4.",
        "pair": "由于……所以……"
      },
      {
        "promptLang": "vi",
        "prompt": "Nếu vì thiếu tiền mà không thể kịp thời đi khám bệnh, sức khỏe khó được đảm bảo, đừng nói đến hạnh phúc nữa.",
        "answer": "如果由于缺钱不能及时看病，健康都难以保证，就更别说幸福了。",
        "answerPy": "Rúguǒ yóuyú quē qián bù néng jíshí kàn bìng, jiànkāng dōu nányǐ bǎozhèng, jiù gèng biéshuō xìngfú le.",
        "note": "由于……保证……幸福 kết hợp 保证, ôn lại từ vựng Bài 4.",
        "pair": "如果……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "由于种种原因",
        "py": "yóuyú zhǒngzhǒng yuányīn",
        "vn": "vì nhiều nguyên nhân"
      },
      {
        "zh": "由于缺钱",
        "py": "yóuyú quē qián",
        "vn": "vì thiếu tiền"
      },
      {
        "zh": "由于工作需要",
        "py": "yóuyú gōngzuò xūyào",
        "vn": "do yêu cầu công việc"
      },
      {
        "zh": "由于天气不好",
        "py": "yóuyú tiānqì bù hǎo",
        "vn": "do thời tiết xấu"
      },
      {
        "zh": "由于……所以……",
        "py": "yóuyú suǒyǐ",
        "vn": "do… nên…"
      }
    ],
    "patterns": [
      {
        "s": "由于 + nguyên nhân，所以 / 因此 + kết quả",
        "m": "Do … nên …"
      },
      {
        "s": "由于 ≈ 因为",
        "m": "由于 thiên văn viết, chỉ đứng ở vế TRƯỚC"
      }
    ]
  },
  {
    "n": 26,
    "zh": "比如",
    "py": "bǐrú",
    "pos": "Động từ",
    "vn": "ví dụ, chẳng hạn",
    "hv": "tỉ như",
    "em": "💡",
    "lesson": 5,
    "explain": [
      "Đưa ra ví dụ để minh họa/giải thích cho một sự vật/tình huống."
    ],
    "usage": "Động từ, đứng đầu vế câu ví dụ: 比如一块橡皮.",
    "collo": [
      "比如一块橡皮",
      "比如说",
      "比如作家爱写小说"
    ],
    "ex_zh": "还有人说，小时候幸福是一件东西，比如一块橡皮、一块糖，得到了就很幸福。",
    "ex_py": "Hái yǒu rén shuō, xiǎo shíhou xìngfú shì yí jiàn dōngxi, bǐrú yí kuài xiàngpí, yí kuài táng, dédàole jiù hěn xìngfú.",
    "ex_vn": "Còn có người nói, lúc nhỏ hạnh phúc là một món đồ, ví dụ như cục tẩy, viên kẹo, có được là rất hạnh phúc.",
    "exList": [
      {
        "zh": "还有人说，小时候幸福是一件东西，比如一块橡皮、一块糖，得到了就很幸福。",
        "py": "Hái yǒu rén shuō, xiǎo shíhou xìngfú shì yí jiàn dōngxi, bǐrú yí kuài xiàngpí, yí kuài táng, dédàole jiù hěn xìngfú.",
        "vn": "Còn có người nói, lúc nhỏ hạnh phúc là một món đồ, ví dụ như cục tẩy, viên kẹo, có được là rất hạnh phúc."
      },
      {
        "zh": "每个人都有自己特别感兴趣的东西，比如，作家爱写小说，画家爱画画儿。",
        "py": "Měi ge rén dōu yǒu zìjǐ tèbié gǎn xìngqù de dōngxi, bǐrú, zuòjiā ài xiě xiǎoshuō, huàjiā ài huà huàr.",
        "vn": "Mỗi người đều có thứ mình đặc biệt hứng thú, ví dụ như, nhà văn thích viết tiểu thuyết, họa sĩ thích vẽ tranh."
      },
      {
        "zh": "旅游前最好做个计划，比如要去几个地方，怎么坐车。",
        "py": "Lǚyóu qián zuìhǎo zuò ge jìhuà, bǐrú yào qù jǐ ge dìfang, zěnme zuò chē.",
        "vn": "Trước khi du lịch tốt nhất nên lập kế hoạch, ví dụ như định đi mấy nơi, đi xe thế nào."
      }
    ],
    "hanzi": [
      {
        "c": "如",
        "p": "rú",
        "type": "左右结构 · Trái-phải",
        "st": 6,
        "ord": "女 (nữ) trái → 口 (khẩu) phải",
        "rad": "女 (nữ – phụ nữ)",
        "mean": "giống như",
        "tip": "Bộ 女(vâng theo lời) + 口(miệng, lời nói) → LÀM THEO LỜI dặn, mở rộng thành GIỐNG NHƯ, kết hợp 比(so sánh) thành 比如 = VÍ DỤ NHƯ (so sánh giống như trường hợp nào đó).",
        "cf": "姑 (gū – \"cô\", bộ 女\")",
        "w": "比如 / 例如 / 如果"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Mỗi người đều có sở thích riêng, chẳng hạn nhà văn thì thích viết tiểu thuyết, còn hoạ sĩ thì thích vẽ tranh.",
        "answer": "每个人都有自己特别的爱好，比如作家爱写小说，而画家爱画画儿。",
        "answerPy": "Měi ge rén dōu yǒu zìjǐ tèbié de àihào, bǐrú zuòjiā ài xiě xiǎoshuō, ér huàjiā ài huà huàr.",
        "note": "作家, 小说 là từ bài 9 và bài 6.",
        "pair": "……，而……"
      },
      {
        "promptLang": "vi",
        "prompt": "Có lúc đồ chất lượng tốt cũng rất rẻ, chẳng hạn cứ sang xuân là quần áo mùa đông giảm giá.",
        "answer": "有时候质量很好的东西也会很便宜，比如春天一来，冬天的衣服就会打折。",
        "answerPy": "Yǒu shíhou zhìliàng hěn hǎo de dōngxi yě huì hěn piányi, bǐrú chūntiān yì lái, dōngtiān de yīfu jiù huì dǎzhé.",
        "note": "质量, 打折 là từ bài 5.",
        "pair": "一……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "比如说",
        "py": "bǐrú shuō",
        "vn": "ví dụ như"
      },
      {
        "zh": "比如一块橡皮",
        "py": "bǐrú yí kuài xiàngpí",
        "vn": "chẳng hạn một cục tẩy"
      },
      {
        "zh": "……，比如……",
        "py": "bǐrú",
        "vn": "…, ví dụ…"
      },
      {
        "zh": "比如这件事",
        "py": "bǐrú zhè jiàn shì",
        "vn": "chẳng hạn chuyện này"
      },
      {
        "zh": "很多，比如",
        "py": "hěn duō bǐrú",
        "vn": "rất nhiều, ví dụ như"
      }
    ],
    "patterns": [
      {
        "s": "……，比如 + N",
        "m": "…, ví dụ như …"
      },
      {
        "s": "比如 ≈ 例如",
        "m": "比如 thiên khẩu ngữ, 例如 (bài 6) thiên văn viết"
      }
    ]
  },
  {
    "n": 27,
    "zh": "橡皮",
    "py": "xiàngpí",
    "pos": "Danh từ",
    "vn": "cục gôm, tẩy",
    "hv": "tượng bì",
    "em": "🧼",
    "lesson": 5,
    "explain": [
      "Dụng cụ dùng để tẩy xóa chữ viết bằng bút chì."
    ],
    "usage": "Danh từ; thường đi với 一块橡皮.",
    "collo": [
      "一块橡皮",
      "买块橡皮",
      "一块糖"
    ],
    "ex_zh": "比如一块橡皮、一块糖，得到了就很幸福。",
    "ex_py": "Bǐrú yí kuài xiàngpí, yí kuài táng, dédàole jiù hěn xìngfú.",
    "ex_vn": "Ví dụ như cục tẩy, viên kẹo, có được là rất hạnh phúc.",
    "exList": [
      {
        "zh": "比如一块橡皮、一块糖，得到了就很幸福。",
        "py": "Bǐrú yí kuài xiàngpí, yí kuài táng, dédàole jiù hěn xìngfú.",
        "vn": "Ví dụ như cục tẩy, viên kẹo, có được là rất hạnh phúc."
      },
      {
        "zh": "我忘带橡皮了，能借我用一下吗？",
        "py": "Wǒ wàng dài xiàngpí le, néng jiè wǒ yòng yíxià ma?",
        "vn": "Tôi quên mang tẩy rồi, có thể cho tôi mượn dùng một chút không?"
      },
      {
        "zh": "这块橡皮是我最喜欢的颜色。",
        "py": "Zhè kuài xiàngpí shì wǒ zuì xǐhuan de yánsè.",
        "vn": "Cục tẩy này là màu tôi thích nhất."
      }
    ],
    "hanzi": [
      {
        "c": "橡",
        "p": "xiàng",
        "type": "左右结构 · Trái-phải",
        "st": 15,
        "ord": "木 (mộc) trái → 象 (tượng) phải",
        "rad": "木 (mộc – cây)",
        "mean": "cây cao su",
        "tip": "Bộ cây 木 + 象(biểu âm) → CÂY CAO SU, kết hợp 皮(da, vỏ) thành 橡皮 = CỤC TẨY (làm từ nhựa cao su).",
        "cf": "像 (xiàng – \"giống như\", bộ 亻\")",
        "w": "橡皮 / 橡皮擦 / 橡树"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Lúc nhỏ, có được một cục tẩy hay một viên kẹo là cảm thấy rất hạnh phúc rồi.",
        "answer": "小时候，得到一块橡皮或者一块糖就觉得很幸福了。",
        "answerPy": "Xiǎo shíhou, dédào yí kuài xiàngpí huòzhě yí kuài táng jiù juéde hěn xìngfú le.",
        "note": "一块橡皮/一块糖 kết hợp 糖, ôn lại từ vựng của bài.",
        "pair": "一……就……"
      },
      {
        "promptLang": "vi",
        "prompt": "Tôi quên mang tẩy rồi, nếu bạn có thừa thì cho tôi mượn một cái nhé.",
        "answer": "我忘带橡皮了，要是你有多余的，就借我一块吧。",
        "answerPy": "Wǒ wàng dài xiàngpí le, yàoshi nǐ yǒu duōyú de, jiù jiè wǒ yí kuài ba.",
        "note": "一块橡皮 / 一块糖 — cùng lượng từ 块.",
        "pair": "要是……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "一块橡皮",
        "py": "yí kuài xiàngpí",
        "vn": "một cục tẩy"
      },
      {
        "zh": "买块橡皮",
        "py": "mǎi kuài xiàngpí",
        "vn": "mua cục tẩy"
      },
      {
        "zh": "借橡皮",
        "py": "jiè xiàngpí",
        "vn": "mượn tẩy"
      },
      {
        "zh": "忘带橡皮",
        "py": "wàng dài xiàngpí",
        "vn": "quên mang tẩy"
      },
      {
        "zh": "用橡皮擦",
        "py": "yòng xiàngpí cā",
        "vn": "dùng tẩy để xóa"
      }
    ],
    "patterns": [
      {
        "s": "một + 块 + 橡皮",
        "m": "Lượng từ 块 cho vật nhỏ dạng khối"
      },
      {
        "s": "橡 + 皮",
        "m": "Cao su (橡) da (皮) — cục tẩy cao su"
      }
    ]
  },
  {
    "n": 28,
    "zh": "糖",
    "py": "táng",
    "pos": "Danh từ",
    "vn": "kẹo",
    "hv": "đường",
    "em": "🍬",
    "lesson": 5,
    "explain": [
      "Đồ ăn ngọt, hoặc chất tạo vị ngọt."
    ],
    "usage": "Danh từ; thường đi với 一块糖, 吃糖.",
    "collo": [
      "一块糖",
      "吃糖",
      "买糖"
    ],
    "ex_zh": "比如一块橡皮、一块糖，得到了就很幸福。",
    "ex_py": "Bǐrú yí kuài xiàngpí, yí kuài táng, dédàole jiù hěn xìngfú.",
    "ex_vn": "Ví dụ như cục tẩy, viên kẹo, có được là rất hạnh phúc.",
    "exList": [
      {
        "zh": "比如一块橡皮、一块糖，得到了就很幸福。",
        "py": "Bǐrú yí kuài xiàngpí, yí kuài táng, dédàole jiù hěn xìngfú.",
        "vn": "Ví dụ như cục tẩy, viên kẹo, có được là rất hạnh phúc."
      },
      {
        "zh": "小孩子都喜欢吃糖。",
        "py": "Xiǎo háizi dōu xǐhuan chī táng.",
        "vn": "Trẻ nhỏ đều thích ăn kẹo."
      },
      {
        "zh": "吃太多糖对牙齿不好。",
        "py": "Chī tài duō táng duì yáchǐ bù hǎo.",
        "vn": "Ăn quá nhiều kẹo không tốt cho răng."
      }
    ],
    "hanzi": [
      {
        "c": "糖",
        "p": "táng",
        "type": "左右结构 · Trái-phải (giản thể)",
        "st": 10,
        "ord": "米 (mễ) trái → 唐 (đường) phải",
        "rad": "米 (mễ – gạo)",
        "mean": "đường, kẹo",
        "tip": "Bộ gạo 米 (nguyên liệu làm đường) + 唐(biểu âm) → ĐƯỜNG (chất ngọt từ gạo/mía), mở rộng thành KẸO.",
        "cf": "塘 (táng – \"cái ao\", bộ 土\")",
        "w": "糖 / 糖果 / 白糖"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Trẻ nhỏ đều thích ăn kẹo, nhưng ăn quá nhiều không tốt cho sức khỏe.",
        "answer": "小孩子都喜欢吃糖，但是吃太多对身体不好。",
        "answerPy": "Xiǎo háizi dōu xǐhuan chī táng, dànshì chī tài duō duì shēntǐ bù hǎo.",
        "note": "吃糖 — ăn kẹo.",
        "pair": "……，但是……"
      },
      {
        "promptLang": "vi",
        "prompt": "Lúc nhỏ được người lớn cho một viên kẹo là cảm thấy rất vui rồi.",
        "answer": "小时候大人给一块糖就觉得很开心了。",
        "answerPy": "Xiǎo shíhou dàren gěi yí kuài táng jiù juéde hěn kāixīn le.",
        "note": "一块糖 — một viên kẹo.",
        "pair": "一……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "一块糖",
        "py": "yí kuài táng",
        "vn": "một viên kẹo"
      },
      {
        "zh": "吃糖",
        "py": "chī táng",
        "vn": "ăn kẹo"
      },
      {
        "zh": "买糖",
        "py": "mǎi táng",
        "vn": "mua kẹo"
      },
      {
        "zh": "不放糖",
        "py": "bú fàng táng",
        "vn": "không cho đường"
      },
      {
        "zh": "糖很甜",
        "py": "táng hěn tián",
        "vn": "kẹo rất ngọt"
      }
    ],
    "patterns": [
      {
        "s": "một + 块 + 糖",
        "m": "Một viên kẹo — cùng lượng từ với 橡皮"
      },
      {
        "s": "糖 vừa là \"kẹo\" vừa là \"đường\""
      }
    ]
  },
  {
    "n": 29,
    "zh": "低",
    "py": "dī",
    "pos": "Tính từ",
    "vn": "thấp",
    "hv": "đê",
    "em": "⬇️",
    "lesson": 5,
    "explain": [
      "Ở mức độ/chiều cao dưới mức trung bình, đối lập với 高."
    ],
    "usage": "Tính từ; thường đi với 分出高低, 幸福感的高低.",
    "collo": [
      "分出高低",
      "幸福感的高低",
      "工资低"
    ],
    "ex_zh": "他们两个人打球的水平差不多，很难分出高低。",
    "ex_py": "Tāmen liǎng ge rén dǎ qiú de shuǐpíng chàbuduō, hěn nán fēnchū gāo dī.",
    "ex_vn": "Trình độ chơi bóng của hai người họ tương đương nhau, rất khó phân biệt cao thấp.",
    "exList": [
      {
        "zh": "他们两个人打球的水平差不多，很难分出高低。",
        "py": "Tāmen liǎng ge rén dǎ qiú de shuǐpíng chàbuduō, hěn nán fēnchū gāo dī.",
        "vn": "Trình độ chơi bóng của hai người họ tương đương nhau, rất khó phân biệt cao thấp."
      },
      {
        "zh": "生活的态度决定了我们幸福感的高低。",
        "py": "Shēnghuó de tàidù juédìngle wǒmen xìngfúgǎn de gāo dī.",
        "vn": "Thái độ sống quyết định mức độ hạnh phúc cao thấp của chúng ta."
      },
      {
        "zh": "她今年的工资比去年低了不少。",
        "py": "Tā jīnnián de gōngzī bǐ qùnián dīle bùshǎo.",
        "vn": "Lương năm nay của cô ấy thấp hơn năm ngoái khá nhiều."
      }
    ],
    "hanzi": [
      {
        "c": "低",
        "p": "dī",
        "type": "左右结构 · Trái-phải",
        "st": 7,
        "ord": "亻 (nhân) trái → 氐 phải",
        "rad": "亻 (nhân – người)",
        "mean": "thấp",
        "tip": "Bộ người 亻 + 氐(biểu âm, gốc rễ ở dưới thấp) → NGƯỜI Ở VỊ TRÍ THẤP, mở rộng thành THẤP (đối lập với cao).",
        "cf": "底 (dǐ – \"đáy\", bộ 广\")",
        "w": "低 / 高低 / 降低"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Vì trình độ chơi bóng của hai người họ ngang nhau, nên rất khó phân cao thấp.",
        "answer": "因为他们两个人打球的水平差不多，所以很难分出高低。",
        "answerPy": "Yīnwèi tāmen liǎng ge rén dǎqiú de shuǐpíng chàbuduō, suǒyǐ hěn nán fēn chū gāodī.",
        "note": "差不多 là từ bài 2 — gần như nhau.",
        "pair": "因为……所以……"
      },
      {
        "promptLang": "vi",
        "prompt": "Thái độ sống của một người quyết định mức độ hạnh phúc cao hay thấp: thái độ càng tích cực thì cảm giác hạnh phúc càng cao.",
        "answer": "一个人的生活态度决定了他幸福感的高低，态度越积极，幸福感就越高。",
        "answerPy": "Yí ge rén de shēnghuó tàidù juédìngle tā xìngfúgǎn de gāodī, tàidù yuè jījí, xìngfúgǎn jiù yuè gāo.",
        "note": "态度, 积极 là từ bài 8 — quay lại nguyên cặp.",
        "pair": "越……越……"
      }
    ],
    "colloFull": [
      {
        "zh": "工资低",
        "py": "gōngzī dī",
        "vn": "lương thấp"
      },
      {
        "zh": "分出高低",
        "py": "fēn chū gāodī",
        "vn": "phân cao thấp"
      },
      {
        "zh": "幸福感的高低",
        "py": "xìngfúgǎn de gāodī",
        "vn": "mức độ hạnh phúc"
      },
      {
        "zh": "价格低",
        "py": "jiàgé dī",
        "vn": "giá thấp"
      },
      {
        "zh": "声音低",
        "py": "shēngyīn dī",
        "vn": "giọng nhỏ"
      }
    ],
    "patterns": [
      {
        "s": "低 ↔ 高",
        "m": "Thấp ↔ cao"
      },
      {
        "s": "分出 + 高低",
        "m": "Phân định hơn kém"
      }
    ]
  },
  {
    "n": 30,
    "zh": "答案",
    "py": "dá'àn",
    "pos": "Danh từ",
    "vn": "đáp án, câu trả lời, lời giải",
    "hv": "đáp án",
    "em": "✅",
    "lesson": 5,
    "explain": [
      "Câu trả lời/kết quả cho một câu hỏi/vấn đề."
    ],
    "usage": "Danh từ; thường đi với 一个标准答案, 正确答案.",
    "collo": [
      "一个标准答案",
      "没有标准答案",
      "正确的答案"
    ],
    "ex_zh": "幸福并没有一个标准答案，每个人对幸福都有不同的理解。",
    "ex_py": "Xìngfú bìng méiyǒu yí ge biāozhǔn dá'àn, měi ge rén duì xìngfú dōu yǒu bùtóng de lǐjiě.",
    "ex_vn": "Hạnh phúc không hề có một đáp án chuẩn nào, mỗi người đều có cách hiểu khác nhau về hạnh phúc.",
    "exList": [
      {
        "zh": "幸福并没有一个标准答案，每个人对幸福都有不同的理解。",
        "py": "Xìngfú bìng méiyǒu yí ge biāozhǔn dá'àn, měi ge rén duì xìngfú dōu yǒu bùtóng de lǐjiě.",
        "vn": "Hạnh phúc không hề có một đáp án chuẩn nào, mỗi người đều có cách hiểu khác nhau về hạnh phúc."
      },
      {
        "zh": "今天考试写答案写到最后，发现少了一个，又来不及改了。",
        "py": "Jīntiān kǎoshì xiě dá'àn xiě dào zuìhòu, fāxiàn shǎole yí ge, yòu láibují gǎi le.",
        "vn": "Hôm nay thi viết đáp án đến cuối cùng, phát hiện thiếu một câu, lại không kịp sửa nữa."
      },
      {
        "zh": "请选择正确的答案。",
        "py": "Qǐng xuǎnzé zhèngquè de dá'àn.",
        "vn": "Xin chọn đáp án đúng."
      }
    ],
    "hanzi": [
      {
        "c": "案",
        "p": "àn",
        "type": "上下结构 · Trên-dưới",
        "st": 10,
        "ord": "安 trên → 木 (mộc) dưới",
        "rad": "木 (mộc – cây, bàn gỗ)",
        "mean": "hồ sơ, phương án",
        "tip": "Bộ cây 木 (cái bàn gỗ để viết) + 安(yên ổn, biểu âm) → BÀN LÀM VIỆC để soạn HỒ SƠ/PHƯƠNG ÁN, kết hợp 答(trả lời) thành 答案 = ĐÁP ÁN.",
        "cf": "桉 (ān – \"cây khuynh diệp\", ít dùng)",
        "w": "答案 / 方案 / 案子"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Hạnh phúc không hề có một đáp án chuẩn, mỗi người đều có cách hiểu riêng.",
        "answer": "幸福并没有一个标准答案，每个人都有自己的理解。",
        "answerPy": "Xìngfú bìng méiyǒu yí ge biāozhǔn dá'àn, měi ge rén dōu yǒu zìjǐ de lǐjiě.",
        "note": "标准答案 — đáp án chuẩn.",
        "pair": "没有……都……"
      },
      {
        "promptLang": "vi",
        "prompt": "Đừng nhắc nữa, hôm nay thi viết đáp án đến cuối cùng mới phát hiện thiếu mất một câu.",
        "answer": "别提了，今天考试写答案写到最后才发现少了一个。",
        "answerPy": "Bié tí le, jīntiān kǎoshì xiě dá'àn xiě dào zuìhòu cái fāxiàn shǎole yí ge.",
        "note": "写答案 kết hợp 提, ôn lại từ vựng Bài 4.",
        "pair": "……，才……"
      }
    ],
    "colloFull": [
      {
        "zh": "标准答案",
        "py": "biāozhǔn dá'àn",
        "vn": "đáp án chuẩn"
      },
      {
        "zh": "正确的答案",
        "py": "zhèngquè de dá'àn",
        "vn": "đáp án đúng"
      },
      {
        "zh": "没有标准答案",
        "py": "méiyǒu biāozhǔn dá'àn",
        "vn": "không có đáp án chuẩn"
      },
      {
        "zh": "找答案",
        "py": "zhǎo dá'àn",
        "vn": "tìm đáp án"
      },
      {
        "zh": "一个答案",
        "py": "yí gè dá'àn",
        "vn": "một đáp án"
      }
    ],
    "patterns": [
      {
        "s": "标准 / 正确的 + 答案",
        "m": "Đáp án chuẩn, đáp án đúng"
      },
      {
        "s": "答案 ≠ 回答",
        "m": "答案 là kết quả; 回答 là hành động trả lời"
      }
    ]
  },
  {
    "n": 31,
    "zh": "孙月",
    "py": "Sūn Yuè",
    "pos": "Danh từ riêng",
    "vn": "Tôn Nguyệt (tên người)",
    "hv": "Tôn Nguyệt",
    "em": "👩",
    "lesson": 1,
    "explain": [
      "Tên riêng của nhân vật nữ, xuất hiện lại từ Bài 2 và Bài 9."
    ],
    "usage": "Danh từ riêng chỉ tên người.",
    "collo": [
      "孙月说",
      "孙月和王静"
    ],
    "ex_zh": "孙月和王静聊王静的生活情况。",
    "ex_py": "Sūn Yuè hé Wáng Jìng liáo Wáng Jìng de shēnghuó qíngkuàng.",
    "ex_vn": "Tôn Nguyệt và Vương Tĩnh nói chuyện về tình hình cuộc sống của Vương Tĩnh.",
    "exList": [
      {
        "zh": "孙月和王静聊王静的生活情况。",
        "py": "Sūn Yuè hé Wáng Jìng liáo Wáng Jìng de shēnghuó qíngkuàng.",
        "vn": "Tôn Nguyệt và Vương Tĩnh nói chuyện về tình hình cuộc sống của Vương Tĩnh."
      }
    ]
  },
  {
    "n": 32,
    "zh": "王静",
    "py": "Wáng Jìng",
    "pos": "Danh từ riêng",
    "vn": "Vương Tĩnh (tên người)",
    "hv": "Vương Tĩnh",
    "em": "👩",
    "lesson": 1,
    "explain": [
      "Tên riêng của nhân vật nữ, xuất hiện lại từ Bài 5 và Bài 6."
    ],
    "usage": "Danh từ riêng chỉ tên người.",
    "collo": [
      "王静说",
      "孙月和王静"
    ],
    "ex_zh": "孙月和王静聊王静的生活情况。",
    "ex_py": "Sūn Yuè hé Wáng Jìng liáo Wáng Jìng de shēnghuó qíngkuàng.",
    "ex_vn": "Tôn Nguyệt và Vương Tĩnh nói chuyện về tình hình cuộc sống của Vương Tĩnh.",
    "exList": [
      {
        "zh": "孙月和王静聊王静的生活情况。",
        "py": "Sūn Yuè hé Wáng Jìng liáo Wáng Jìng de shēnghuó qíngkuàng.",
        "vn": "Tôn Nguyệt và Vương Tĩnh nói chuyện về tình hình cuộc sống của Vương Tĩnh."
      }
    ]
  }
];

var wuData = [
  {img:'🎓',label:'硕士',py:'shuòshì',letter:'A'},
  {img:'🗣️',label:'翻译',py:'fānyì',letter:'B'},
  {img:'🛌',label:'躺',py:'tǎng',letter:'C'},
  {img:'🤝',label:'拉',py:'lā',letter:'D'},
  {img:'😴',label:'困',py:'kùn',letter:'E'},
  {img:'🤩',label:'兴奋',py:'xīngfèn',letter:'F'},
];

var dialogData = [
  {scene:'课文1 · 孙月和王静聊王静的生活情况',
   preQuiz:[{q:'王静为什么现在很幸福？',opts:['因为工作轻松','因为在母亲面前她永远是孩子，在孩子面前她又是母亲','因为她有很多钱'],ans:1},{q:'孙月礼拜天想去做什么？',opts:['给丈夫买生日礼物','看电影','去旅游'],ans:0},{q:'王静除了工作以外还要照顾谁？',opts:['母亲和儿子','丈夫和女儿','爷爷和奶奶'],ans:0}],
   lines:[
     {sp:0,zh:'礼拜天有空儿吗？陪我去逛街怎么样？我想去给丈夫买个生日礼物。',py:'Lǐbàitiān yǒu kòngr ma? Péi wǒ qù guàng jiē zěnmeyàng? Wǒ xiǎng qù gěi zhàngfu mǎi ge shēngrì lǐwù.',vn:'Chủ nhật rảnh không? Đi cùng tôi dạo phố thì thế nào? Tôi muốn đi mua cho chồng một món quà sinh nhật.'},
     {sp:1,zh:'我可能去不了，最近事情多。',py:'Wǒ kěnéng qù bu liǎo, zuìjìn shìqing duō.',vn:'Tôi có thể không đi được, gần đây nhiều việc quá.'},
     {sp:0,zh:'你最近是不是工作特别忙？',py:'Nǐ zuìjìn shì bu shì gōngzuò tèbié máng?',vn:'Gần đây bạn có phải công việc đặc biệt bận không?'},
     {sp:1,zh:'我现在上有老，下有小。除了工作以外，家里还有母亲和儿子需要照顾。',py:'Wǒ xiànzài shàng yǒu lǎo, xià yǒu xiǎo. Chúle gōngzuò yǐwài, jiā li hái yǒu mǔqīn hé érzi xūyào zhàogù.',vn:'Tôi bây giờ trên có già, dưới có nhỏ. Ngoài công việc ra, trong nhà còn có mẹ và con trai cần chăm sóc.'},
     {sp:0,zh:'真是辛苦啊！你最近脸色不太好，是不是哪儿不舒服？要注意身体啊。',py:'Zhēn shì xīnkǔ a! Nǐ zuìjìn liǎnsè bú tài hǎo, shì bu shì nǎr bù shūfu? Yào zhùyì shēntǐ a.',vn:'Thật là vất vả! Gần đây sắc mặt bạn không tốt lắm, có phải chỗ nào không khỏe không? Phải chú ý sức khỏe đấy.'},
     {sp:1,zh:'没事儿，谢谢！不过现在我很幸福，因为在母亲面前我可以做一个永远长不大的孩子；在孩子面前我又是个能照顾他的母亲，这让我有了努力的方向。',py:'Méishìr, xièxie! Búguò xiànzài wǒ hěn xìngfú, yīnwèi zài mǔqīn miànqián wǒ kěyǐ zuò yí ge yǒngyuǎn zhǎng bu dà de háizi; zài háizi miànqián wǒ yòu shì ge néng zhàogù tā de mǔqīn, zhè ràng wǒ yǒule nǔlì de fāngxiàng.',vn:'Không sao, cảm ơn! Nhưng bây giờ tôi rất hạnh phúc, vì trước mặt mẹ tôi có thể làm một đứa trẻ mãi mãi không lớn; trước mặt con tôi lại là một người mẹ có thể chăm sóc nó, điều này khiến tôi có được phương hướng nỗ lực.'},
   ]},
  {scene:'课文2 · 高老师和李老师在谈幸福',
   preQuiz:[{q:'高老师的女儿是做什么工作的？',opts:['教授','翻译','律师'],ans:1},{q:'王老师来这儿工作几年就当了教授？',opts:['一年','三年','十年'],ans:1},{q:'女儿拿到第一个月工资时做了什么？',opts:['拉着父母去商场买礼物','去旅游','请朋友吃饭'],ans:0}],
   lines:[
     {sp:0,zh:'你看人家王老师，刚来这儿工作三年就当了教授，还有个好妻子，真让人羡慕！',py:'Nǐ kàn rénjia Wáng lǎoshī, gāng lái zhèr gōngzuò sān nián jiù dāngle jiàoshòu, hái yǒu ge hǎo qīzi, zhēn ràng rén xiànmù!',vn:'Bạn xem thầy Vương người ta, mới đến đây làm việc ba năm đã làm giáo sư rồi, còn có vợ tốt nữa, thật khiến người ta ngưỡng mộ!'},
     {sp:1,zh:'其实，你在别人眼中也是很幸福的，只是你自己没有发现。',py:'Qíshí, nǐ zài biérén yǎn zhōng yě shì hěn xìngfú de, zhǐshì nǐ zìjǐ méiyǒu fāxiàn.',vn:'Thực ra, trong mắt người khác bạn cũng rất hạnh phúc, chỉ là bản thân bạn chưa phát hiện ra thôi.'},
     {sp:0,zh:'是吗？我哪能跟王老师比啊？',py:'Shì ma? Wǒ nǎ néng gēn Wáng lǎoshī bǐ a?',vn:'Vậy à? Tôi sao có thể so sánh với thầy Vương chứ?'},
     {sp:1,zh:'你有一个漂亮的女儿，还那么优秀，硕士毕业后就当了翻译。',py:'Nǐ yǒu yí ge piàoliang de nǚ\'ér, hái nàme yōuxiù, shuòshì bìyè hòu jiù dāngle fānyì.',vn:'Bạn có một cô con gái xinh đẹp, lại xuất sắc như vậy, tốt nghiệp thạc sĩ xong liền làm phiên dịch viên.'},
     {sp:0,zh:'我女儿确实不错，记得她刚拿到第一个月工资时，就兴奋地拉着我和她爸俩去商场，给我们买礼物，那时我和她爸心里别提多美了！',py:'Wǒ nǚ\'ér quèshí búcuò, jìde tā gāng nádào dì-yī ge yuè gōngzī shí, jiù xīngfèn de lāzhe wǒ hé tā bà liǎ qù shāngchǎng, gěi wǒmen mǎi lǐwù, nà shí wǒ hé tā bà xīn li biétí duō měi le!',vn:'Con gái tôi thực sự rất tốt, nhớ lúc nó vừa nhận lương tháng đầu tiên, đã hào hứng kéo tôi và bố nó đi trung tâm mua sắm, mua quà cho chúng tôi, lúc đó tôi và bố nó trong lòng vui khôn xiết!'},
     {sp:1,zh:'所以说每个人有每个人的生活，不用羡慕别人。你羡慕别人的时候，他们可能也正在羡慕你呢。',py:'Suǒyǐ shuō měi ge rén yǒu měi ge rén de shēnghuó, bú yòng xiànmù biérén. Nǐ xiànmù biérén de shíhou, tāmen kěnéng yě zhèngzài xiànmù nǐ ne.',vn:'Vì vậy nói mỗi người có cuộc sống của riêng mỗi người, không cần ngưỡng mộ người khác. Lúc bạn ngưỡng mộ người khác, họ có thể cũng đang ngưỡng mộ bạn đấy.'},
   ]},
  {scene:'课文3 · 小雨和小夏聊找工作的事情',
   preQuiz:[{q:'小雨认为选择职业时，什么才是关键？',opts:['收入','兴趣','公司大小'],ans:1},{q:'张远觉得生活压力大是因为什么？',opts:['什么东西都那么贵','工作太多','朋友太少'],ans:0},{q:'小雨觉得什么样的生活就很幸福？',opts:['回家洗个热水澡，看看书、听听音乐','有很多钱','住大房子'],ans:0}],
   lines:[
     {sp:0,zh:'时间过得真快，马上就要毕业了。毕业后你打算做什么？',py:'Shíjiān guò de zhēn kuài, mǎshàng jiù yào bìyè le. Bìyè hòu nǐ dǎsuàn zuò shénme?',vn:'Thời gian trôi nhanh thật, sắp tốt nghiệp rồi. Tốt nghiệp xong bạn định làm gì?'},
     {sp:1,zh:'我还没想好呢，正想听听你的建议。你觉得在选择职业时，收入重要吗？',py:'Wǒ hái méi xiǎnghǎo ne, zhèng xiǎng tīngting nǐ de jiànyì. Nǐ juéde zài xuǎnzé zhíyè shí, shōurù zhòngyào ma?',vn:'Tôi vẫn chưa nghĩ kỹ, đang muốn nghe ý kiến của bạn đây. Bạn thấy khi chọn nghề nghiệp, thu nhập có quan trọng không?'},
     {sp:0,zh:'在我看来，赚钱多少不是最重要的，兴趣才是关键。只有做自己喜欢的事，才会觉得幸福，将来也会有更好的发展。',py:'Zài wǒ kànlái, zhuàn qián duōshao bú shì zuì zhòngyào de, xìngqù cái shì guānjiàn. Zhǐyǒu zuò zìjǐ xǐhuan de shì, cái huì juéde xìngfú, jiānglái yě huì yǒu gèng hǎo de fāzhǎn.',vn:'Theo tôi thấy, kiếm được nhiều tiền hay không không phải điều quan trọng nhất, hứng thú mới là điều mấu chốt. Chỉ khi làm việc mình thích, mới cảm thấy hạnh phúc, tương lai cũng sẽ có sự phát triển tốt hơn.'},
     {sp:1,zh:'我也这么想。如果我带着热情去做自己喜欢的工作，就不会感到累。不过，现在什么东西都那么贵，生活压力太大了，没有钱也不会过得幸福啊！',py:'Wǒ yě zhème xiǎng. Rúguǒ wǒ dàizhe rèqíng qù zuò zìjǐ xǐhuan de gōngzuò, jiù bú huì gǎndào lèi. Búguò, xiànzài shénme dōngxi dōu nàme guì, shēnghuó yālì tài dà le, méiyǒu qián yě bú huì guò de xìngfú a!',vn:'Tôi cũng nghĩ vậy. Nếu tôi mang nhiệt tình đi làm công việc mình thích, sẽ không cảm thấy mệt. Nhưng, bây giờ cái gì cũng đắt như vậy, áp lực cuộc sống quá lớn, không có tiền cũng không thể sống hạnh phúc được!'},
     {sp:0,zh:'幸福其实很简单，它不是只要有钱就能买到的。我觉得工作结束回家后，洗个热水澡，然后躺在床上看看书、听听音乐，困了睡睡觉，就很幸福。',py:'Xìngfú qíshí hěn jiǎndān, tā bú shì zhǐyào yǒu qián jiù néng mǎidào de. Wǒ juéde gōngzuò jiéshù huí jiā hòu, xǐ ge rè shuǐzǎo, ránhòu tǎng zài chuáng shang kànkan shū, tīngting yīnyuè, kùnle shuìshui jiào, jiù hěn xìngfú.',vn:'Hạnh phúc thực ra rất đơn giản, nó không phải chỉ cần có tiền là mua được. Tôi thấy sau khi làm việc xong về nhà, tắm nước nóng, rồi nằm trên giường đọc sách nghe nhạc, buồn ngủ thì ngủ, thế là rất hạnh phúc.'},
     {sp:1,zh:'你说的也对。如果能找到一份自己既感兴趣，收入又不错的工作，那就最好了。',py:'Nǐ shuō de yě duì. Rúguǒ néng zhǎodào yí fèn zìjǐ jì gǎn xìngqù, shōurù yòu búcuò de gōngzuò, nà jiù zuì hǎo le.',vn:'Bạn nói cũng đúng. Nếu có thể tìm được một công việc vừa có hứng thú, thu nhập lại không tệ, thì tốt nhất rồi.'},
   ]},
  {scene:'课文4 · Điều kiện kinh tế và hạnh phúc',
   preQuiz:[{q:'哪些东西是不能用钱买到的？',opts:['时间、感情、生活经历','房子和汽车','漂亮的衣服'],ans:0},{q:'有钱一定幸福吗？',opts:['不一定','一定','没有钱才幸福'],ans:0},{q:'如果缺钱不能及时看医生，会怎么样？',opts:['健康很难得到保证','会更幸福','没有关系'],ans:0}],
   lines:[
     {sp:0,zh:'有的人希望穿得再好一些，房子再大一些，认为经济条件越好人就越幸福。',py:'Yǒude rén xīwàng chuān de zài hǎo yìxiē, fángzi zài dà yìxiē, rènwéi jīngjì tiáojiàn yuè hǎo rén jiù yuè xìngfú.',vn:'Có người hy vọng mặc đẹp hơn nữa, nhà to hơn nữa, cho rằng điều kiện kinh tế càng tốt thì người ta càng hạnh phúc.'},
     {sp:0,zh:'其实有很多富人过得并不愉快，而有些穷人却过得很快乐。',py:'Qíshí yǒu hěn duō fù rén guò de bìng bù yúkuài, ér yǒuxiē qióng rén què guò de hěn kuàilè.',vn:'Thực ra có rất nhiều người giàu sống không hề vui vẻ, mà có người nghèo lại sống rất vui vẻ.'},
     {sp:0,zh:'有钱不一定幸福，因为很多东西都是不能用钱买到的，例如时间、感情、生活经历等。',py:'Yǒu qián bù yídìng xìngfú, yīnwèi hěn duō dōngxi dōu shì bù néng yòng qián mǎidào de, lìrú shíjiān, gǎnqíng, shēnghuó jīnglì děng.',vn:'Có tiền không nhất định hạnh phúc, vì rất nhiều thứ đều không thể dùng tiền mua được, ví dụ như thời gian, tình cảm, trải nghiệm cuộc sống, vân vân.'},
     {sp:0,zh:'但是，从另外一个方面看，如果没钱，也很难过得幸福。',py:'Dànshì, cóng lìngwài yí ge fāngmiàn kàn, rúguǒ méi qián, yě hěn nán guò de xìngfú.',vn:'Nhưng, nhìn từ một phương diện khác, nếu không có tiền, cũng rất khó sống hạnh phúc.'},
     {sp:0,zh:'当你生病了，如果由于缺钱而不能及时去看医生，你的健康都很难得到保证，就更别说幸福了。',py:'Dāng nǐ shēng bìng le, rúguǒ yóuyú quē qián ér bù néng jíshí qù kàn yīshēng, nǐ de jiànkāng dōu hěn nán dédào bǎozhèng, jiù gèng biéshuō xìngfú le.',vn:'Khi bạn bị ốm, nếu vì thiếu tiền mà không thể kịp thời đi khám bệnh, sức khỏe của bạn rất khó được đảm bảo, đừng nói đến hạnh phúc nữa.'},
   ]},
  {scene:'课文5 · Tiêu chuẩn của hạnh phúc',
   preQuiz:[{q:'幸福有标准答案吗？',opts:['有，大家都一样','没有，每个人的理解不同','只有有钱人才有'],ans:1},{q:'小时候幸福是什么？',opts:['一件东西，比如一块糖','一种态度','一份工作'],ans:0},{q:'长大后幸福是什么？',opts:['一种态度','一块橡皮','一辆车'],ans:0}],
   lines:[
     {sp:0,zh:'什么是幸福？有的人认为，工资高、能赚钱就是幸福；有的人认为，心情放松、身体健康才是幸福；也有人认为，能帮助别人就是一种幸福。',py:'Shénme shì xìngfú? Yǒude rén rènwéi, gōngzī gāo, néng zhuàn qián jiù shì xìngfú; yǒude rén rènwéi, xīnqíng fàngsōng, shēntǐ jiànkāng cái shì xìngfú; yě yǒu rén rènwéi, néng bāngzhù biérén jiù shì yì zhǒng xìngfú.',vn:'Hạnh phúc là gì? Có người cho rằng, lương cao, kiếm được tiền là hạnh phúc; có người cho rằng, tâm trạng thoải mái, cơ thể khỏe mạnh mới là hạnh phúc; cũng có người cho rằng, có thể giúp đỡ người khác là một loại hạnh phúc.'},
     {sp:0,zh:'还有人说，小时候幸福是一件东西，比如一块橡皮、一块糖，得到了就很幸福；长大后幸福是一种态度，生活的态度决定了我们幸福感的高低。',py:'Hái yǒu rén shuō, xiǎo shíhou xìngfú shì yí jiàn dōngxi, bǐrú yí kuài xiàngpí, yí kuài táng, dédàole jiù hěn xìngfú; zhǎngdà hòu xìngfú shì yì zhǒng tàidù, shēnghuó de tàidù juédìngle wǒmen xìngfúgǎn de gāo dī.',vn:'Còn có người nói, lúc nhỏ hạnh phúc là một món đồ, ví dụ như cục tẩy, viên kẹo, có được là rất hạnh phúc; lớn lên hạnh phúc là một thái độ, thái độ sống quyết định mức độ hạnh phúc cao thấp của chúng ta.'},
     {sp:0,zh:'那怎样才算是真正的幸福？其实，幸福并没有一个标准答案，每个人对幸福都有不同的理解。',py:'Nà zěnyàng cái suàn shì zhēnzhèng de xìngfú? Qíshí, xìngfú bìng méiyǒu yí ge biāozhǔn dá\'àn, měi ge rén duì xìngfú dōu yǒu bùtóng de lǐjiě.',vn:'Vậy thế nào mới tính là hạnh phúc thực sự? Thực ra, hạnh phúc không hề có một đáp án chuẩn nào, mỗi người đều có cách hiểu khác nhau về hạnh phúc.'},
     {sp:0,zh:'不管你认为幸福是什么，只要你用心去找，就一定能发现它。',py:'Bùguǎn nǐ rènwéi xìngfú shì shénme, zhǐyào nǐ yòng xīn qù zhǎo, jiù yídìng néng fāxiàn tā.',vn:'Bất kể bạn cho rằng hạnh phúc là gì, chỉ cần bạn dùng tâm đi tìm, thì nhất định sẽ phát hiện ra nó.'},
   ]},
];

var matchData = [
  {left:'不过',right:'不过现在我很幸福'},
  {left:'确实',right:'我女儿确实不错'},
  {left:'建议',right:'听听你的建议'},
  {left:'关键',right:'兴趣才是关键'},
  {left:'由于',right:'由于缺钱'},
  {left:'比如',right:'比如一块橡皮'},
  {left:'将来',right:'将来也会有更好的发展'},
  {left:'经济',right:'经济条件越好'},
  {left:'答案',right:'一个标准答案'},
  {left:'方向',right:'努力的方向'},
];

var fillData = [
  {pre:'礼拜天有',blank:'',post:'吗？陪我去逛街怎么样？',hint:'kòngr',ans:'空儿'},
  {pre:'除了工作以外，家里还有',blank:'',post:'和儿子需要照顾。',hint:'mǔqīn',ans:'母亲'},
  {pre:'',blank:'',post:'现在我很幸福。',hint:'búguò',ans:'不过'},
  {pre:'在母亲面前我可以做一个',blank:'',post:'长不大的孩子。',hint:'yǒngyuǎn',ans:'永远'},
  {pre:'这让我有了努力的',blank:'',post:'。',hint:'fāngxiàng',ans:'方向'},
  {pre:'硕士毕业后就当了',blank:'',post:'。',hint:'fānyì',ans:'翻译'},
  {pre:'我女儿',blank:'',post:'不错。',hint:'quèshí',ans:'确实'},
  {pre:'就',blank:'',post:'地拉着我和她爸俩去商场。',hint:'xīngfèn',ans:'兴奋'},
  {pre:'正想听听你的',blank:'',post:'。',hint:'jiànyì',ans:'建议'},
  {pre:'兴趣才是',blank:'',post:'。',hint:'guānjiàn',ans:'关键'},
  {pre:'',blank:'',post:'也会有更好的发展。',hint:'jiānglái',ans:'将来'},
  {pre:'将来也会有更好的',blank:'',post:'。',hint:'fāzhǎn',ans:'发展'},
  {pre:'然后',blank:'',post:'在床上看看书。',hint:'tǎng',ans:'躺'},
  {pre:'',blank:'',post:'了睡睡觉，就很幸福。',hint:'kùn',ans:'困'},
  {pre:'认为',blank:'',post:'条件越好人就越幸福。',hint:'jīngjì',ans:'经济'},
];

var sortData = [
  {words:['礼拜天','有','空儿','吗','？'],ans:'礼拜天有空儿吗？',audio:'礼拜天有空儿吗？'},
  {words:['除了','工作','以外','，','家里','还有','母亲','和','儿子','需要','照顾','。'],ans:'除了工作以外，家里还有母亲和儿子需要照顾。',audio:'除了工作以外，家里还有母亲和儿子需要照顾。'},
  {words:['因为','在','母亲','面前','我','可以','做','一个','永远','长','不','大','的','孩子'],ans:'因为在母亲面前我可以做一个永远长不大的孩子',audio:'因为在母亲面前我可以做一个永远长不大的孩子'},
  {words:['你','有','一个','漂亮','的','女儿','，','还','那么','优秀'],ans:'你有一个漂亮的女儿，还那么优秀',audio:'你有一个漂亮的女儿，还那么优秀'},
  {words:['硕士','毕业','后','就','当','了','翻译'],ans:'硕士毕业后就当了翻译',audio:'硕士毕业后就当了翻译'},
  {words:['兴趣','才','是','关键'],ans:'兴趣才是关键',audio:'兴趣才是关键'},
  {words:['只有','做','自己','喜欢','的','事','，','才会','觉得','幸福'],ans:'只有做自己喜欢的事，才会觉得幸福',audio:'只有做自己喜欢的事，才会觉得幸福'},
  {words:['幸福','并','没有','一个','标准','答案'],ans:'幸福并没有一个标准答案',audio:'幸福并没有一个标准答案'},
];

var errorFixMode = 'wordchoice';
var errorFixData = [
  {wrong:'一个不知道自己缺点的人，____都不会想要去改变。',
   opts:['困','拉','永远','建议'],ans:2,
   exp:'永远 (mãi mãi) đi với 都不会……改变: 永远都不会想要去改变. Các từ còn lại không phù hợp nghĩa.'},
  {wrong:'他们两个人打球的水平差不多，很难分出高____。',
   opts:['低','困','拉','永远'],ans:0,
   exp:'低 (thấp) đi với 高: 分出高低 = phân biệt cao thấp. Các từ còn lại không phù hợp nghĩa.'},
  {wrong:'我刚学会开车，水平一般，还经常走错路。朋友____我平时多开车出去走走，熟悉一下道路情况，这样慢慢就好了。',
   opts:['低','困','永远','建议'],ans:3,
   exp:'建议 (đề nghị) đi với đối tượng + động từ: 朋友建议我……. Các từ còn lại không phù hợp nghĩa.'},
  {wrong:'解决问题时，一个人的知识常常是不够的，所以人与人之间需要交流。在交流过程中，一方面，丰富了知识，提高了能力，另一方面，又____近了人们之间的距离。',
   opts:['困','拉','永远','建议'],ans:1,
   exp:'拉 (kéo) đi với 近: 拉近了……距离 = kéo gần khoảng cách. Các từ còn lại không phù hợp nghĩa.'},
  {wrong:'人比动物聪明，但动物仍然有很多值得人学习的地方。拿狮子来说，它们____的时候才睡觉，饿的时候才吃东西，永远不为昨天的事烦恼，也不为明天的事担心。',
   opts:['低','困','拉','建议'],ans:1,
   exp:'困 (buồn ngủ) đi với 睡觉: 困的时候才睡觉. Các từ còn lại không phù hợp nghĩa.'},
  {wrong:'A：你最近忙吗？哪天有____？B：干什么？又想让我陪你去逛街呀？',
   opts:['空儿','答案','关键','躺'],ans:0,
   exp:'空儿 (thời gian rảnh) đi với 有: 哪天有空儿. Các từ còn lại không phù hợp nghĩa.'},
  {wrong:'A：____我们去学校的体育馆打网球吧？B：好啊，不过周末人会不会很多？',
   opts:['空儿','答案','礼拜天','关键'],ans:2,
   exp:'礼拜天 (chủ nhật) làm trạng ngữ chỉ thời gian đứng đầu câu đề nghị: 礼拜天我们去……吧？. Các từ còn lại không phù hợp nghĩa.'},
  {wrong:'A：房间里这么暗，怎么不开灯呀？你身体不舒服？B：没有，我本来____在沙发上看书，结果睡着了。',
   opts:['空儿','答案','礼拜天','躺'],ans:3,
   exp:'躺 (nằm) đi với 在沙发上: 躺在沙发上看书. Các từ còn lại không phù hợp nghĩa.'},
  {wrong:'A：很多女孩子都希望找一个个子高的男朋友，你呢？B：高矮没太大关系，____是我得喜欢他、爱他。',
   opts:['空儿','礼拜天','关键','躺'],ans:2,
   exp:'关键 (điểm mấu chốt) đi với 是: ……关键是我得…….Các từ còn lại không phù hợp nghĩa.'},
  {wrong:'A：怎么了？什么事这么不高兴？B：别提了，今天考试写____写到最后，发现少了一个，又来不及改了。',
   opts:['答案','礼拜天','关键','躺'],ans:0,
   exp:'答案 (đáp án) đi với 写: 写答案. Các từ còn lại không phù hợp nghĩa.'},
];

var speakingData = {
  mode: 'ai-speak',
  intro: 'Mỗi câu hỏi là một tình huống thật trong đời sống, dùng đúng từ vựng và mẫu câu của Bài 10. Bấm 🎙️ rồi trả lời bằng tiếng Trung — AI sẽ nghe, ghi lại câu bạn nói và chấm điểm theo Nội dung · Mẫu câu · Từ vựng · Độ trôi chảy. Nên tự trả lời trước rồi mới mở “Câu mẫu” để đối chiếu.',
  tasks: [
    {
      situation: 'Nhóm bạn cùng nói về ý nghĩa của hạnh phúc.',
      q_zh: '你觉得什么是幸福？',
      q_py: 'Nǐ juéde shénme shì xìngfú?',
      q_vn: 'Bạn thấy hạnh phúc là gì?',
      grammar: { label: '并没有……; 每个人对……有不同的理解', any: ['并没有', '并不', '理解'] },
      need: [
        { label: 'Nêu quan điểm riêng', any: ['幸福', '我觉得', '对我来说', '答案'] },
        { label: 'Đưa ví dụ cụ thể', any: ['家人', '健康', '工作', '朋友', '生活', '比如'] }
      ],
      bonus: { label: 'Dùng 并 phủ định nhấn mạnh', any: ['并没有', '并不'] },
      vocab: ['答案', '比如', '永远'],
      minLen: 22,
      sample: '我觉得幸福并没有一个标准答案，每个人的理解都不一样。对我来说，家人永远健康、工作做得开心，就是幸福。',
      sample_py: 'Wǒ juéde xìngfú bìng méiyǒu yí ge biāozhǔn dá\'àn, měi ge rén de lǐjiě dōu bù yí yàng. Duì wǒ lái shuō, jiārén yǒngyuǎn jiànkāng, gōngzuò zuò děi kāixīn, jiù shì xìngfú.',
      sample_vn: 'Tôi thấy hạnh phúc không có một đáp án chuẩn, mỗi người hiểu một khác. Với tôi, người nhà luôn khỏe mạnh, công việc làm vui vẻ, đó là hạnh phúc.',
      tip: '并 + 不/没有 dùng để phủ định điều người ta hay nghĩ: 事情并不简单。'
    },
    {
      situation: 'Trên mạng đang tranh luận giàu có và hạnh phúc.',
      q_zh: '你觉得经济条件越好，人就越幸福吗？',
      q_py: 'Nǐ juéde jīngjì tiáojiàn yuè hǎo, rén jiù yuè xìngfú ma?',
      q_vn: 'Bạn thấy điều kiện kinh tế càng tốt thì càng hạnh phúc không?',
      grammar: { label: '……却…… (nhưng lại) / 由于……', any: ['却', '由于'] },
      need: [
        { label: 'Nêu quan điểm', any: ['不一定', '同意', '不同意', '我觉得'] },
        { label: 'So sánh giàu và nghèo', any: ['富', '穷', '经济', '条件', '钱'] }
      ],
      bonus: { label: 'Dùng 却 nêu điều trái ngược', any: ['却'] },
      vocab: ['经济', '条件', '富', '穷'],
      minLen: 22,
      sample: '不一定。有的人经济条件很好，生活却并不愉快；有些人虽然比较穷，却过得很快乐。幸福主要看自己怎么想。',
      sample_py: 'Bù yí dìng. Yǒude rén jīngjì tiáojiàn hěn hǎo, shēnghuó què bìng bù yúkuài; yǒuxiē rén suīrán bǐjiào qióng, què guo děi hěn kuàilè. Xìngfú zhǔyào kàn zìjǐ zěnme xiǎng.',
      sample_vn: 'Không hẳn. Có người điều kiện kinh tế rất tốt nhưng sống lại chẳng vui; có người tuy khá nghèo lại sống rất vui vẻ. Hạnh phúc chủ yếu là do mình nghĩ thế nào.',
      tip: '却 đứng trước động từ, nhấn mạnh sự trái ngược: 他很累，却很开心。'
    },
    {
      situation: 'Bạn đang cân nhắc giữa hai lời mời làm việc.',
      q_zh: '在选择职业时，你觉得收入和兴趣哪个更重要？',
      q_py: 'Zài xuǎnzé zhíyè shí, nǐ juéde shōurù hé xìng qù nǎge gèng zhòngyào?',
      q_vn: 'Khi chọn nghề, bạn thấy thu nhập và hứng thú cái nào quan trọng hơn?',
      grammar: { label: '在……看来 (theo cách nhìn của…)', any: ['在我看来', '看来'] },
      need: [
        { label: 'Nêu lựa chọn', any: ['兴趣', '收入', '关键', '重要'] },
        { label: 'Nêu lý do', any: ['喜欢', '坚持', '发展', '将来', '快乐', '努力'] }
      ],
      bonus: { label: 'Dùng 在我看来 mở đầu', any: ['在我看来'] },
      vocab: ['职业', '关键', '将来', '发展'],
      minLen: 22,
      sample: '在我看来，赚钱多少不是最重要的，兴趣才是关键。做自己喜欢的职业，将来才愿意坚持下去，发展也会更好。',
      sample_py: 'Zài wǒ kàn lái, zhuàn qián duōshao bú shì zuì zhòngyào de, xìng qù cái shì guānjiàn. Zuò zìjǐ xǐhuan de zhíyè, jiānglái cái yuànyì jiānchí xià qù, fāzhǎn yě huì gèng hǎo.',
      sample_vn: 'Theo tôi, kiếm được bao nhiêu không phải quan trọng nhất, hứng thú mới là mấu chốt. Làm nghề mình thích thì sau này mới chịu theo đuổi, phát triển cũng tốt hơn.',
      tip: '在……看来 nêu quan điểm: 在他看来，这件事很简单。'
    },
    {
      situation: 'Sau một ngày làm việc mệt, bạn về đến nhà.',
      q_zh: '工作结束回家后，你一般做什么让自己感到幸福？',
      q_py: 'Gōngzuò jiéshù huí jiā hòu, nǐ yìbān zuò shénme ràng zìjǐ gǎn dào xìngfú?',
      q_vn: 'Sau khi làm việc xong về nhà, bạn thường làm gì để thấy hạnh phúc?',
      grammar: { label: '躺在……上 + 动词; ……就很幸福', any: ['躺', '幸福'] },
      need: [
        { label: 'Kể hoạt động thư giãn', any: ['洗澡', '躺', '看书', '音乐', '电视', '睡', '做饭'] },
        { label: 'Nói cảm giác', any: ['幸福', '舒服', '轻松', '愉快'] }
      ],
      bonus: { label: 'Dùng 困 hoặc 空儿 nói thói quen', any: ['困', '空儿'] },
      vocab: ['躺', '困', '空儿'],
      minLen: 22,
      sample: '我一般先洗个热水澡，然后躺在床上看看书、听听音乐，困了就睡觉。有空儿的时候跟家人打个电话，这样我就觉得很幸福。',
      sample_py: 'Wǒ yìbān xiān xǐ ge rè shuǐ zǎo, ránhòu tǎng zài chuáng shàng kànkan shū, tīngting yīnyuè, kùn le jiù shuìjiào. Yǒu kòngr de shíhou gēn jiārén dǎ ge diànhuà, zhè yàng wǒ jiù juéde hěn xìngfú.',
      sample_vn: 'Tôi thường tắm nước nóng trước, rồi nằm trên giường đọc sách, nghe nhạc, buồn ngủ thì đi ngủ. Lúc rảnh thì gọi điện cho người nhà, như vậy tôi thấy rất hạnh phúc.',
      tip: '躺在 + nơi chốn + 上: 躺在沙发上看电视。'
    },
    {
      situation: 'Bạn thấy bạn bè trên mạng xã hội có cuộc sống rất đẹp.',
      q_zh: '你羡慕过别人的生活吗？后来是怎么想的？',
      q_py: 'Nǐ xiànmù guo biérén de shēnghuó ma? Hòulái shì zěnme xiǎng de?',
      q_vn: 'Bạn từng ngưỡng mộ cuộc sống của người khác chưa? Sau đó bạn nghĩ thế nào?',
      grammar: { label: '不过…… (nhưng, song) — nhẹ hơn 但是', any: ['不过'] },
      need: [
        { label: 'Nói từng ngưỡng mộ điều gì', any: ['羡慕', '生活', '工作', '房子', '旅游', '朋友'] },
        { label: 'Nói suy nghĩ về sau', any: ['后来', '发现', '每个人', '自己', '不用'] }
      ],
      bonus: { label: 'Dùng 不过 hoặc 确实 để chuyển ý', any: ['不过', '确实'] },
      vocab: ['羡慕', '不过', '确实'],
      minLen: 22,
      sample: '羡慕过。我确实羡慕过同学能常常去旅游，不过后来我发现，每个人有每个人的生活和困难，过好自己的日子最重要。',
      sample_py: 'Xiànmù guo. Wǒ quèshí xiànmù guo tóngxué néng chángcháng qù lǚyóu, búguò hòulái wǒ fāxiàn, měi ge rén yǒu měi ge rén de shēnghuó hé kùnnan, guo hǎo zìjǐ de rì zi zuì zhòngyào.',
      sample_vn: 'Có chứ. Tôi từng thật sự ngưỡng mộ bạn học hay được đi du lịch, nhưng sau đó tôi nhận ra mỗi người có cuộc sống và khó khăn riêng, sống tốt ngày của mình mới là quan trọng nhất.',
      tip: '不过 dùng trong khẩu ngữ, ý chuyển nhẹ hơn 但是.'
    }
  ]
};

var translateData = [
  {vi:'Chủ nhật rảnh không? Đi cùng tôi dạo phố thì thế nào?',zh:'礼拜天有空儿吗？陪我去逛街怎么样？',py:'Lǐbàitiān yǒu kòngr ma? Péi wǒ qù guàng jiē zěnmeyàng?'},
  {vi:'Ngoài công việc ra, trong nhà còn có mẹ và con trai cần chăm sóc.',zh:'除了工作以外，家里还有母亲和儿子需要照顾。',py:'Chúle gōngzuò yǐwài, jiā li hái yǒu mǔqīn hé érzi xūyào zhàogù.'},
  {vi:'Bạn có một cô con gái xinh đẹp, lại xuất sắc như vậy, tốt nghiệp thạc sĩ xong liền làm phiên dịch viên.',zh:'你有一个漂亮的女儿，还那么优秀，硕士毕业后就当了翻译。',py:'Nǐ yǒu yí ge piàoliang de nǚ\'ér, hái nàme yōuxiù, shuòshì bìyè hòu jiù dāngle fānyì.'},
  {vi:'Theo tôi thấy, kiếm được nhiều tiền hay không không phải điều quan trọng nhất, hứng thú mới là điều mấu chốt.',zh:'在我看来，赚钱多少不是最重要的，兴趣才是关键。',py:'Zài wǒ kànlái, zhuàn qián duōshao bú shì zuì zhòngyào de, xìngqù cái shì guānjiàn.'},
  {vi:'Có tiền không nhất định hạnh phúc, vì rất nhiều thứ đều không thể dùng tiền mua được.',zh:'有钱不一定幸福，因为很多东西都是不能用钱买到的。',py:'Yǒu qián bù yídìng xìngfú, yīnwèi hěn duō dōngxi dōu shì bù néng yòng qián mǎidào de.'},
  {vi:'Nếu vì thiếu tiền mà không thể kịp thời đi khám bệnh, sức khỏe của bạn rất khó được đảm bảo.',zh:'如果由于缺钱而不能及时去看医生，你的健康都很难得到保证。',py:'Rúguǒ yóuyú quē qián ér bù néng jíshí qù kàn yīshēng, nǐ de jiànkāng dōu hěn nán dédào bǎozhèng.'},
  {vi:'Còn có người nói, lúc nhỏ hạnh phúc là một món đồ, ví dụ như cục tẩy, viên kẹo, có được là rất hạnh phúc.',zh:'还有人说，小时候幸福是一件东西，比如一块橡皮、一块糖，得到了就很幸福。',py:'Hái yǒu rén shuō, xiǎo shíhou xìngfú shì yí jiàn dōngxi, bǐrú yí kuài xiàngpí, yí kuài táng, dédàole jiù hěn xìngfú.'},
  {vi:'Hạnh phúc không hề có một đáp án chuẩn nào, mỗi người đều có cách hiểu khác nhau về hạnh phúc.',zh:'幸福并没有一个标准答案，每个人对幸福都有不同的理解。',py:'Xìngfú bìng méiyǒu yí ge biāozhǔn dá\'àn, měi ge rén duì xìngfú dōu yǒu bùtóng de lǐjiě.'},
];
var translateDataRev = [
  {vi:'Không sao, cảm ơn! Nhưng bây giờ tôi rất hạnh phúc.',zh:'没事儿，谢谢！不过现在我很幸福。',py:'Méishìr, xièxie! Búguò xiànzài wǒ hěn xìngfú.'},
  {vi:'Thực ra, trong mắt người khác bạn cũng rất hạnh phúc, chỉ là bản thân bạn chưa phát hiện ra thôi.',zh:'其实，你在别人眼中也是很幸福的，只是你自己没有发现。',py:'Qíshí, nǐ zài biérén yǎn zhōng yě shì hěn xìngfú de, zhǐshì nǐ zìjǐ méiyǒu fāxiàn.'},
  {vi:'Con gái tôi thực sự rất tốt, nhớ lúc nó vừa nhận lương tháng đầu tiên, đã hào hứng kéo tôi và bố nó đi trung tâm mua sắm.',zh:'我女儿确实不错，记得她刚拿到第一个月工资时，就兴奋地拉着我和她爸俩去商场。',py:'Wǒ nǚ\'ér quèshí búcuò, jìde tā gāng nádào dì-yī ge yuè gōngzī shí, jiù xīngfèn de lāzhe wǒ hé tā bà liǎ qù shāngchǎng.'},
  {vi:'Chỉ khi làm việc mình thích, mới cảm thấy hạnh phúc, tương lai cũng sẽ có sự phát triển tốt hơn.',zh:'只有做自己喜欢的事，才会觉得幸福，将来也会有更好的发展。',py:'Zhǐyǒu zuò zìjǐ xǐhuan de shì, cái huì juéde xìngfú, jiānglái yě huì yǒu gèng hǎo de fāzhǎn.'},
  {vi:'Thực ra có rất nhiều người giàu sống không hề vui vẻ, mà có người nghèo lại sống rất vui vẻ.',zh:'其实有很多富人过得并不愉快，而有些穷人却过得很快乐。',py:'Qíshí yǒu hěn duō fù rén guò de bìng bù yúkuài, ér yǒuxiē qióng rén què guò de hěn kuàilè.'},
  {vi:'Nhưng, nhìn từ một phương diện khác, nếu không có tiền, cũng rất khó sống hạnh phúc.',zh:'但是，从另外一个方面看，如果没钱，也很难过得幸福。',py:'Dànshì, cóng lìngwài yí ge fāngmiàn kàn, rúguǒ méi qián, yě hěn nán guò de xìngfú.'},
  {vi:'Lớn lên hạnh phúc là một thái độ, thái độ sống quyết định mức độ hạnh phúc cao thấp của chúng ta.',zh:'长大后幸福是一种态度，生活的态度决定了我们幸福感的高低。',py:'Zhǎngdà hòu xìngfú shì yì zhǒng tàidù, shēnghuó de tàidù juédìngle wǒmen xìngfúgǎn de gāo dī.'},
  {vi:'Bất kể bạn cho rằng hạnh phúc là gì, chỉ cần bạn dùng tâm đi tìm, thì nhất định sẽ phát hiện ra nó.',zh:'不管你认为幸福是什么，只要你用心去找，就一定能发现它。',py:'Bùguǎn nǐ rènwéi xìngfú shì shénme, zhǐyào nǐ yòng xīn qù zhǎo, jiù yídìng néng fāxiàn tā.'},
];

var listenData = {
  type: 'workbook',
  audioParts: [
    { src: '/audio/hsk4-bai-10/listen-1.mp3', from: 1, to: 5 },
    { src: '/audio/hsk4-bai-10/listen-2.mp3', from: 6, to: 12 },
    { src: '/audio/hsk4-bai-10/listen-3.mp3', from: 13, to: 22 }
  ],
  dictation: [
    {num:1, stmt:'笑使人更健康。', judge:true, lines:[
      {pre:'科学研究发现，', blank:'经常笑的人更容易感到幸福', post:'，而且更不容易生病。',
       py:'Kēxué yánjiū fāxiàn, jīngcháng xiào de rén gèng róngyì gǎndào xìngfú, érqiě gèng bù róngyì shēngbìng.',
       vn:'Nghiên cứu khoa học phát hiện, người hay cười dễ cảm thấy hạnh phúc hơn, và càng ít bị bệnh hơn.'}]},
    {num:2, stmt:'他的职业是大夫。', judge:false, lines:[
      {pre:'我爸爸是医生，妈妈是老师。我的性格很像我爸爸，', blank:'我现在学医', post:'，理想就是以后成为一个像他那样的医生。',
       py:'Wǒ bàba shì yīshēng, māma shì lǎoshī. Wǒ de xìnggé hěn xiàng wǒ bàba, wǒ xiànzài xué yī, lǐxiǎng jiù shì yǐhòu chéngwéi yí ge xiàng tā nàyàng de yīshēng.',
       vn:'Bố tôi là bác sĩ, mẹ là giáo viên. Tính cách tôi rất giống bố, hiện tôi đang học y, lý tưởng là sau này trở thành một bác sĩ như ông.'}]},
    {num:3, stmt:'幸福是件很简单的事情。', judge:true, lines:[
      {pre:'在我看来，幸福其实很简单，', blank:'比如一天的工作结束后，洗个热水澡', post:'，然后躺在床上看看书，就很幸福。',
       py:'Zài wǒ kànlái, xìngfú qíshí hěn jiǎndān, bǐrú yì tiān de gōngzuò jiéshù hòu, xǐ ge rèshuǐzǎo, ránhòu tǎng zài chuáng shang kànkan shū, jiù hěn xìngfú.',
       vn:'Theo tôi, hạnh phúc thực ra rất đơn giản, ví dụ sau một ngày làm việc, tắm nước nóng, rồi nằm trên giường đọc sách, thế là rất hạnh phúc.'}]},
    {num:4, stmt:'那家公司在招人。', judge:true, lines:[
      {pre:'昨天我在报纸上', blank:'看见一家公司在招聘高级翻译', post:'，要硕士，给出的条件还不错，你要不要去试试？',
       py:'Zuótiān wǒ zài bàozhǐ shang kànjiàn yì jiā gōngsī zài zhāopìn gāojí fānyì, yào shuòshì, gěichū de tiáojiàn hái búcuò, nǐ yào bu yào qù shìshi?',
       vn:'Hôm qua tôi thấy trên báo một công ty đang tuyển phiên dịch cao cấp, yêu cầu thạc sĩ, điều kiện đưa ra khá tốt, cậu có muốn thử không?'}]},
    {num:5, stmt:'幸福有标准答案。', judge:false, lines:[
      {pre:'什么是幸福？究竟怎样才算是真正的幸福？', blank:'一百个人有一百个答案', post:'，每个人对幸福都有不同的理解。',
       py:'Shénme shì xìngfú? Jiūjìng zěnyàng cái suàn shì zhēnzhèng de xìngfú? Yìbǎi ge rén yǒu yìbǎi ge dá\'àn, měi ge rén duì xìngfú dōu yǒu bùtóng de lǐjiě.',
       vn:'Hạnh phúc là gì? Rốt cuộc thế nào mới là hạnh phúc thật sự? Một trăm người có một trăm câu trả lời, mỗi người đều có cách hiểu khác nhau về hạnh phúc.'}]}
  ],
  mc: [
    {num:6, options:['明天','下星期','下个月','明年'], ans:1, q:'新超市什么时候开？',
     lines:[
       {speaker:'女', pre:'听说', blank:'下周附近要开一家新超市', post:'。', py:'Tīngshuō xià zhōu fùjìn yào kāi yì jiā xīn chāoshì.', vn:'Nghe nói tuần sau gần đây sẽ mở một siêu thị mới.'},
       {speaker:'男', pre:'真的吗？那到时候', blank:'咱们购物就方便多了', post:'。', py:'Zhēn de ma? Nà dào shíhou zánmen gòuwù jiù fāngbiàn duō le.', vn:'Thật à? Vậy lúc đó mình mua sắm tiện hơn nhiều rồi.'}
     ],
     explain:'问：新超市什么时候开？ "下周" = 下星期 → B.'},
    {num:7, options:['老师','母亲','丈夫','孩子'], ans:1, q:'女的准备给谁打电话？',
     lines:[
       {speaker:'男', pre:'今天是母亲节，', blank:'记得给你妈妈打个电话', post:'。', py:'Jīntiān shì Mǔqīnjié, jìde gěi nǐ māma dǎ ge diànhuà.', vn:'Hôm nay là Ngày của Mẹ, nhớ gọi điện cho mẹ em nhé.'},
       {speaker:'女', pre:'谢谢您的提醒，差点儿忘记了，', blank:'我现在就打', post:'。', py:'Xièxie nín de tíxǐng, chàdiǎnr wàngjì le, wǒ xiànzài jiù dǎ.', vn:'Cảm ơn anh nhắc, suýt quên mất, em gọi ngay đây.'}
     ],
     explain:'问：女的准备给谁打电话？ "给你妈妈打个电话…我现在就打" → B 母亲.'},
    {num:8, options:['他认识路','他很准时','他上网查查','他们一起去'], ans:2, q:'男的是什么意思？',
     lines:[
       {speaker:'女', pre:'你知道怎么去动物园吗？', blank:'我明天要去动物园附近办点儿事', post:'。', py:'Nǐ zhīdào zěnme qù dòngwùyuán ma? Wǒ míngtiān yào qù dòngwùyuán fùjìn bàn diǎnr shì.', vn:'Anh biết đi sở thú thế nào không? Mai em phải đến gần sở thú làm chút việc.'},
       {speaker:'男', pre:'我对那儿也不太熟悉，不过网上有地图，', blank:'我帮你查查', post:'。', py:'Wǒ duì nàr yě bú tài shúxi, búguò wǎngshàng yǒu dìtú, wǒ bāng nǐ chácha.', vn:'Anh cũng không quen chỗ đó lắm, nhưng trên mạng có bản đồ, anh tra giúp em.'}
     ],
     explain:'问：男的是什么意思？ "网上有地图，我帮你查查" → C 他上网查查. A sai vì "不太熟悉".'},
    {num:9, options:['东边','西边','南边','北边'], ans:0, q:'女的认为应该往哪个方向走？',
     lines:[
       {speaker:'男', pre:'真的是往东走吗？', blank:'我怎么觉得是在西边呢', post:'？', py:'Zhēn de shì wǎng dōng zǒu ma? Wǒ zěnme juéde shì zài xībian ne?', vn:'Thật là đi về phía đông à? Sao anh thấy nó ở phía tây nhỉ?'},
       {speaker:'女', pre:'', blank:'肯定是往东走', post:'，我以前来过这儿，相信我，保证错不了。', py:'Kěndìng shì wǎng dōng zǒu, wǒ yǐqián láiguo zhèr, xiāngxìn wǒ, bǎozhèng cuòbuliǎo.', vn:'Chắc chắn là đi về phía đông, em từng đến đây rồi, tin em đi, đảm bảo không sai đâu.'}
     ],
     explain:'问：女的认为应该往哪个方向走？ "肯定是往东走" → A 东边. 西边 là ý nghi ngờ của người nam.'},
    {num:10, options:['女的要旅游','男的有女友','男的是硕士','男的在北京'], ans:1, q:'根据对话，可以知道什么？',
     lines:[
       {speaker:'女', pre:'我听说', blank:'过两天你要去旅游', post:'？', py:'Wǒ tīngshuō guò liǎng tiān nǐ yào qù lǚyóu?', vn:'Tôi nghe nói vài hôm nữa anh đi du lịch?'},
       {speaker:'男', pre:'算是吧，', blank:'我女朋友在北京读研究生', post:'，我去看看她。', py:'Suàn shì ba, wǒ nǚpéngyou zài Běijīng dú yánjiūshēng, wǒ qù kànkan tā.', vn:'Cũng coi như vậy, bạn gái tôi học cao học ở Bắc Kinh, tôi đi thăm cô ấy.'}
     ],
     explain:'问：根据对话，可以知道什么？ "我女朋友在北京读研究生" → B 男的有女友. Người học cao học và ở Bắc Kinh là bạn gái, nên C, D sai.'},
    {num:11, options:['自己','李律师','王教授','翻译公司'], ans:3, q:'女的准备找谁翻译这份材料？',
     lines:[
       {speaker:'男', pre:'您这次', blank:'打算安排谁来翻译这份材料', post:'？', py:'Nín zhè cì dǎsuàn ānpái shéi lái fānyì zhè fèn cáiliào?', vn:'Lần này chị định sắp xếp ai dịch tài liệu này?'},
       {speaker:'女', pre:'我看', blank:'还是联系一家专业的翻译公司吧', post:'，他们翻译得也快一些。', py:'Wǒ kàn háishi liánxì yì jiā zhuānyè de fānyì gōngsī ba, tāmen fānyì de yě kuài yìxiē.', vn:'Tôi thấy nên liên hệ một công ty dịch thuật chuyên nghiệp, họ dịch cũng nhanh hơn.'}
     ],
     explain:'问：女的准备找谁翻译这份材料？ "联系一家专业的翻译公司" → D 翻译公司.'},
    {num:12, options:['能力高','应聘的人少','专业好','长得好'], ans:0, q:'男的认为什么是关键？',
     lines:[
       {speaker:'女', pre:'你看电视上说了吗？', blank:'今年一个工作有一百个大学毕业生去面试', post:'。', py:'Nǐ kàn diànshì shang shuō le ma? Jīnnián yí ge gōngzuò yǒu yìbǎi ge dàxué bìyèshēng qù miànshì.', vn:'Anh xem tivi nói chưa? Năm nay một vị trí có một trăm sinh viên tốt nghiệp đến phỏng vấn.'},
       {speaker:'男', pre:'关键还是看能力，', blank:'有能力的人不怕找不到好工作', post:'。', py:'Guānjiàn háishi kàn nénglì, yǒu nénglì de rén bú pà zhǎobudào hǎo gōngzuò.', vn:'Mấu chốt vẫn là năng lực, người có năng lực không sợ không tìm được việc tốt.'}
     ],
     explain:'问：男的认为什么是关键？ "关键还是看能力" → A 能力高.'},
    {num:13, options:['饿了','想喝水','不想做饭','身体不舒服'], ans:3, q:'女的怎么了？',
     lines:[
       {speaker:'男', pre:'', blank:'你先去床上躺一会儿吧', post:'，等饭好了我叫你。', py:'Nǐ xiān qù chuáng shang tǎng yíhuìr ba, děng fàn hǎo le wǒ jiào nǐ.', vn:'Em lên giường nằm một lát đi, cơm xong anh gọi.'},
       {speaker:'女', pre:'我没事，', blank:'还是我来做吧', post:'。', py:'Wǒ méi shì, háishi wǒ lái zuò ba.', vn:'Em không sao, để em làm cho.'},
       {speaker:'男', pre:'', blank:'你不舒服', post:'，今天我来做，马上就好。', py:'Nǐ bù shūfu, jīntiān wǒ lái zuò, mǎshàng jiù hǎo.', vn:'Em không khoẻ, hôm nay anh làm, sắp xong rồi.'},
       {speaker:'女', pre:'那你', blank:'简单做一点儿就行了', post:'。', py:'Nà nǐ jiǎndān zuò yìdiǎnr jiù xíng le.', vn:'Vậy anh làm đơn giản chút là được.'}
     ],
     explain:'问：女的怎么了？ "你不舒服，今天我来做" → D 身体不舒服. C sai vì cô ấy vẫn muốn tự nấu.'},
    {num:14, options:['要出差','去旅游','叔叔一家来','很多同学来'], ans:2, q:'男的为什么要找宾馆？',
     lines:[
       {speaker:'男', pre:'附近', blank:'有没有条件好一点儿的宾馆', post:'？', py:'Fùjìn yǒu méiyǒu tiáojiàn hǎo yìdiǎnr de bīnguǎn?', vn:'Gần đây có khách sạn nào điều kiện tốt một chút không?'},
       {speaker:'女', pre:'有啊，', blank:'怎么了', post:'？', py:'Yǒu a, zěnme le?', vn:'Có chứ, sao vậy?'},
       {speaker:'男', pre:'', blank:'我叔叔一家下周要来旅游', post:'，家里住不下。', py:'Wǒ shūshu yì jiā xià zhōu yào lái lǚyóu, jiā li zhùbuxià.', vn:'Cả nhà chú tôi tuần sau đến du lịch, nhà tôi không đủ chỗ ở.'},
       {speaker:'女', pre:'北边不远就有一家，', blank:'条件好，价格也不算贵', post:'。', py:'Běibian bù yuǎn jiù yǒu yì jiā, tiáojiàn hǎo, jiàgé yě bú suàn guì.', vn:'Phía bắc không xa có một khách sạn, điều kiện tốt, giá cũng không đắt lắm.'}
     ],
     explain:'问：男的为什么要找宾馆？ "我叔叔一家下周要来旅游，家里住不下" → C 叔叔一家来.'},
    {num:15, options:['在学法律','读一年级','在读研究生','已经工作了'], ans:2, q:'关于男的，下列哪个正确？',
     lines:[
       {speaker:'女', pre:'见到你真高兴，', blank:'听说你在读研究生', post:'？', py:'Jiàndào nǐ zhēn gāoxìng, tīngshuō nǐ zài dú yánjiūshēng?', vn:'Gặp cậu vui thật, nghe nói cậu đang học cao học?'},
       {speaker:'男', pre:'是的，', blank:'现在读二年级', post:'。', py:'Shì de, xiànzài dú èr niánjí.', vn:'Đúng vậy, giờ đang học năm hai.'},
       {speaker:'女', pre:'', blank:'还是原来的专业吗', post:'？', py:'Háishi yuánlái de zhuānyè ma?', vn:'Vẫn là chuyên ngành cũ à?'},
       {speaker:'男', pre:'不是，', blank:'我现在学的是经济学', post:'。', py:'Bú shì, wǒ xiànzài xué de shì jīngjìxué.', vn:'Không, giờ tôi học kinh tế học.'}
     ],
     explain:'问：关于男的，下列哪个正确？ "在读研究生…是的" → C. B sai vì đang học năm hai; A sai vì học kinh tế.'},
    {num:16, options:['冷了','腿疼','要去举办活动','想去公园走走'], ans:3, q:'关于男的，可以知道什么？',
     lines:[
       {speaker:'男', pre:'', blank:'你陪我去公园走走', post:'？', py:'Nǐ péi wǒ qù gōngyuán zǒuzou?', vn:'Em đi dạo công viên với anh nhé?'},
       {speaker:'女', pre:'可是', blank:'你的腿', post:'……', py:'Kěshì nǐ de tuǐ……', vn:'Nhưng chân anh…'},
       {speaker:'男', pre:'不用担心，已经不疼了，', blank:'医生说要多活动活动才会好得快', post:'。', py:'Búyòng dānxīn, yǐjīng bù téng le, yīshēng shuō yào duō huódòng huódòng cái huì hǎo de kuài.', vn:'Đừng lo, không đau nữa rồi, bác sĩ bảo phải vận động nhiều mới nhanh khỏi.'},
       {speaker:'女', pre:'那好，我帮你拿件衣服，', blank:'外面有点儿冷', post:'。', py:'Nà hǎo, wǒ bāng nǐ ná jiàn yīfu, wàimiàn yǒudiǎnr lěng.', vn:'Vậy được, em lấy cho anh cái áo, bên ngoài hơi lạnh.'}
     ],
     explain:'问：关于男的，可以知道什么？ "你陪我去公园走走" → D 想去公园走走. B sai vì "已经不疼了".'},
    {num:17, options:['房子不好','交通不方便','离公司太远','房租太贵'], ans:3, q:'男的认为房子怎么样？',
     lines:[
       {speaker:'女', pre:'', blank:'昨天看的房子怎么样', post:'？', py:'Zuótiān kàn de fángzi zěnmeyàng?', vn:'Căn nhà xem hôm qua thế nào?'},
       {speaker:'男', pre:'还可以，', blank:'交通比较方便', post:'，离咱公司也不远。', py:'Hái kěyǐ, jiāotōng bǐjiào fāngbiàn, lí zán gōngsī yě bù yuǎn.', vn:'Cũng được, giao thông khá thuận tiện, cách công ty mình cũng không xa.'},
       {speaker:'女', pre:'那就', blank:'快点儿租下来', post:'啊。', py:'Nà jiù kuài diǎnr zū xiàlai a.', vn:'Vậy thì mau thuê đi.'},
       {speaker:'男', pre:'其他都好，', blank:'关键是房租太高', post:'。', py:'Qítā dōu hǎo, guānjiàn shì fángzū tài gāo.', vn:'Mọi thứ đều tốt, mấu chốt là tiền thuê quá cao.'}
     ],
     explain:'问：男的认为房子怎么样？ "关键是房租太高" → D 房租太贵. B, C ngược với nội dung.'},
    {num:18, options:['国际关系','教学','法律','经济'], ans:2, q:'女的学的是哪个专业？',
     lines:[
       {speaker:'男', pre:'你硕士', blank:'读的什么专业', post:'？', py:'Nǐ shuòshì dú de shénme zhuānyè?', vn:'Thạc sĩ cậu học chuyên ngành gì?'},
       {speaker:'女', pre:'法律，', blank:'国际法', post:'。', py:'Fǎlǜ, guójìfǎ.', vn:'Luật, luật quốc tế.'},
       {speaker:'男', pre:'那你是', blank:'打算将来当律师', post:'？', py:'Nà nǐ shì dǎsuàn jiānglái dāng lǜshī?', vn:'Vậy cậu định sau này làm luật sư?'},
       {speaker:'女', pre:'不一定，我还是比较喜欢在学校工作，', blank:'可以的话，我想留校当老师', post:'。', py:'Bù yídìng, wǒ háishi bǐjiào xǐhuan zài xuéxiào gōngzuò, kěyǐ de huà, wǒ xiǎng liúxiào dāng lǎoshī.', vn:'Chưa chắc, tôi vẫn thích làm việc ở trường hơn, nếu được, tôi muốn ở lại trường làm giảng viên.'}
     ],
     explain:'问：女的学的是哪个专业？ "法律，国际法" → C 法律. A 国际关系 là bẫy gần giống 国际法.'},
    {num:19, options:['哭了','笑了','生气了','后悔了'], ans:0, q:'想起妈妈的话，说话人怎么了？',
     lines:[
       {speaker:'旁白', pre:'十五岁时，我问母亲她最幸福的事是什么，母亲回答说："', blank:'你第一次叫我"妈妈"', post:'。"', py:'Shíwǔ suì shí, wǒ wèn mǔqīn tā zuì xìngfú de shì shì shénme, mǔqīn huídá shuō: "Nǐ dì-yī cì jiào wǒ \'māma\'."', vn:'Năm mười lăm tuổi, tôi hỏi mẹ điều hạnh phúc nhất của bà là gì, mẹ trả lời: "Lần đầu tiên con gọi mẹ là \'mẹ\'."'},
       {speaker:'旁白', pre:'二十五岁时，我也有了自己的女儿，回想起母亲当时说的这句话，不知为什么，', blank:'我一下子哭了', post:'。', py:'Èrshíwǔ suì shí, wǒ yě yǒule zìjǐ de nǚ\'ér, huíxiǎng qǐ mǔqīn dāngshí shuō de zhè jù huà, bù zhī wèishénme, wǒ yíxiàzi kū le.', vn:'Năm hai mươi lăm tuổi, tôi cũng có con gái của mình, nhớ lại câu nói ấy của mẹ, không hiểu sao tôi bỗng bật khóc.'}
     ],
     explain:'问：想起妈妈的话，说话人怎么了？ "我一下子哭了" → A 哭了.'},
    {num:20, options:['有个女儿','有个儿子','二十岁了','母亲病了'], ans:0, q:'关于说话人，可以知道什么？',
     lines:[
       {speaker:'旁白', pre:'（同一段话）二十五岁时，', blank:'我也有了自己的女儿', post:'。', py:'(Tóng yí duàn huà) Èrshíwǔ suì shí, wǒ yě yǒule zìjǐ de nǚ\'ér.', vn:'(Cùng đoạn văn) Năm hai mươi lăm tuổi, tôi cũng có con gái của mình.'}
     ],
     explain:'问：关于说话人，可以知道什么？ "我也有了自己的女儿" → A 有个女儿. C sai vì người nói 25 tuổi.'},
    {num:21, options:['相信朋友','理解别人','有房子和汽车','知道想要什么'], ans:3, q:'怎样才更容易快乐？',
     lines:[
       {speaker:'旁白', pre:'幸福的标准是不同的。', blank:'有人觉得有房子和汽车就是幸福', post:'，有人认为找到真正的爱情就是幸福，有人却相信在工作中获得肯定和成功才是幸福。', py:'Xìngfú de biāozhǔn shì bùtóng de. Yǒu rén juéde yǒu fángzi hé qìchē jiù shì xìngfú, yǒu rén rènwéi zhǎodào zhēnzhèng de àiqíng jiù shì xìngfú, yǒu rén què xiāngxìn zài gōngzuò zhōng huòdé kěndìng hé chénggōng cái shì xìngfú.', vn:'Tiêu chuẩn hạnh phúc là khác nhau. Có người thấy có nhà có xe là hạnh phúc, có người cho rằng tìm được tình yêu đích thực là hạnh phúc, có người lại tin rằng được công nhận và thành công trong công việc mới là hạnh phúc.'},
       {speaker:'旁白', pre:'所以，', blank:'了解自己想要的', post:'，才容易获得幸福和快乐。', py:'Suǒyǐ, liǎojiě zìjǐ xiǎng yào de, cái róngyì huòdé xìngfú hé kuàilè.', vn:'Vì vậy, hiểu rõ điều mình muốn thì mới dễ có được hạnh phúc và niềm vui.'}
     ],
     explain:'问：怎样才更容易快乐？ "了解自己想要的，才容易获得幸福和快乐" → D 知道想要什么.'},
    {num:22, options:['钱','幸福','爱情','成功'], ans:1, q:'这段话主要谈什么？',
     lines:[
       {speaker:'旁白', pre:'（同一段话）', blank:'幸福的标准是不同的', post:'。…所以，了解自己想要的，才容易获得幸福和快乐。', py:'(Tóng yí duàn huà) Xìngfú de biāozhǔn shì bùtóng de. … Suǒyǐ, liǎojiě zìjǐ xiǎng yào de, cái róngyì huòdé xìngfú hé kuàilè.', vn:'(Cùng đoạn văn) Tiêu chuẩn hạnh phúc là khác nhau. … Vì vậy, hiểu rõ điều mình muốn thì mới dễ có được hạnh phúc và niềm vui.'}
     ],
     explain:'问：这段话主要谈什么？ Cả đoạn nói về 幸福的标准 → B 幸福. 钱, 爱情, 成功 chỉ là các ví dụ.'}
  ]
};
