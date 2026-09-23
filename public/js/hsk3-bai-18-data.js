// ══════════════════════════════════════════
// DATA — HSK3 Bài 18: 我相信他们会同意的 (Tôi tin họ sẽ đồng ý)
// Nguồn: HSK标准教程3 (Giáo trình chuẩn HSK 3 — nhantriviet.com)
// ══════════════════════════════════════════
var vocabData = [
  {
    "n": 1,
    "zh": "向",
    "py": "xiàng",
    "pos": "Giới từ",
    "vn": "đối với, về phía (chỉ hướng của hành động)",
    "hv": "hướng",
    "em": "➡️",
    "lesson": 1,
    "explain": [
      "Chỉ đối tượng hoặc hướng của một hành động."
    ],
    "usage": "向 + [đối tượng] + [động từ]: 向你借钱.",
    "collo": [
      "向你借钱",
      "向左走",
      "向别人问路"
    ],
    "ex_zh": "我打算买房子了，想向你借点儿钱。",
    "ex_py": "Wǒ dǎsuàn mǎi fángzi le, xiǎng xiàng nǐ jiè diǎnr qián.",
    "ex_vn": "Tôi định mua nhà rồi, muốn mượn anh chút tiền.",
    "exList": [
      {
        "zh": "老周，我打算买房子了，想向你借点儿钱。",
        "py": "Lǎo Zhōu, wǒ dǎsuàn mǎi fángzi le, xiǎng xiàng nǐ jiè diǎnr qián.",
        "vn": "Lão Chu ơi, tôi định mua nhà rồi, muốn mượn anh chút tiền."
      },
      {
        "zh": "一个外地人向我问路。",
        "py": "Yí ge wàidìrén xiàng wǒ wènlù.",
        "vn": "Một người từ nơi khác hỏi đường tôi."
      },
      {
        "zh": "到了地铁站以后再向右走。",
        "py": "Dàole dìtiězhàn yǐhòu zài xiàng yòu zǒu.",
        "vn": "Đến ga tàu điện ngầm rồi thì rẽ phải."
      }
    ],
    "hanzi": [
      {
        "c": "向",
        "p": "xiàng",
        "type": "独体字 · Chữ đơn (tượng hình)",
        "st": 6,
        "ord": "nét liền",
        "rad": "口 (khẩu)",
        "mean": "hướng về",
        "tip": "Chữ tượng hình cổ mô phỏng cửa sổ nhà HƯỚNG ra một phía → HƯỚNG VỀ, ĐỐI VỚI.",
        "cf": "问 (wèn – \"hỏi\", có 门 thay vì 冂\")",
        "w": "向 / 方向"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Vì trời tối nhìn không rõ đường, nên tôi hỏi đường chú bên cạnh.",
        "answer": "因为天黑了看不清路，所以我向旁边的叔叔问路。",
        "answerPy": "Yīnwèi tiān hēi le kàn bu qīng lù, suǒyǐ wǒ xiàng pángbiān de shūshu wènlù.",
        "note": "向 + đối tượng + động từ diễn tả hướng của hành động.",
        "pair": "因为……所以……"
      },
      {
        "promptLang": "vi",
        "prompt": "Nếu bạn không biết đường thì hỏi cảnh sát đi.",
        "answer": "如果你不知道路，就向警察问路吧。",
        "answerPy": "Rúguǒ nǐ bù zhīdào lù, jiù xiàng jǐngchá wènlù ba.",
        "note": "如果……就…… diễn tả giả thiết — kết quả (ôn lại đã học ở Bài 16).",
        "pair": "如果……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "向你借钱",
        "py": "xiàng nǐ jiè qián",
        "vn": "vay tiền bạn"
      },
      {
        "zh": "向左走",
        "py": "xiàng zuǒ zǒu",
        "vn": "đi về bên trái"
      },
      {
        "zh": "向别人问路",
        "py": "xiàng biérén wèn lù",
        "vn": "hỏi đường người khác"
      },
      {
        "zh": "向前走",
        "py": "xiàng qián zǒu",
        "vn": "đi về phía trước"
      },
      {
        "zh": "向老师学习",
        "py": "xiàng lǎoshī xuéxí",
        "vn": "học tập thầy cô"
      }
    ],
    "patterns": [
      {
        "s": "向 + đối tượng + V",
        "m": "Hướng về ai mà làm gì: 向他借, 向我问"
      },
      {
        "s": "向 (hướng của hành động) ≠ 往 (hướng di chuyển) — 向他笑 ✓ / 往他笑 ✗"
      }
    ]
  },
  {
    "n": 2,
    "zh": "万",
    "py": "wàn",
    "pos": "Số từ",
    "vn": "vạn, mười nghìn",
    "hv": "vạn",
    "em": "🔢",
    "lesson": 1,
    "explain": [
      "Đơn vị số đếm bằng 10.000."
    ],
    "usage": "Số từ, đi trước lượng từ/danh từ: 5万块.",
    "collo": [
      "5万块钱",
      "三万块",
      "一万米"
    ],
    "ex_zh": "还差5万块钱。",
    "ex_py": "Hái chà wǔ wàn kuài qián.",
    "ex_vn": "Còn thiếu 5 vạn đồng.",
    "exList": [
      {
        "zh": "还差5万块钱。",
        "py": "Hái chà wǔ wàn kuài qián.",
        "vn": "Còn thiếu 5 vạn đồng."
      },
      {
        "zh": "我买这画儿花了三万块呢。",
        "py": "Wǒ mǎi zhè huàr huāle sān wàn kuài ne.",
        "vn": "Tôi mua bức tranh này tốn ba vạn đồng đấy."
      },
      {
        "zh": "一米九一，我都不相信自己能长这么高。",
        "py": "Yì mǐ jiǔ yī, wǒ dōu bù xiāngxìn zìjǐ néng zhǎng zhème gāo.",
        "vn": "Một mét chín mươi mốt, tôi còn không tin mình có thể cao đến thế."
      }
    ],
    "hanzi": [
      {
        "c": "万",
        "p": "wàn",
        "type": "独体字 · Chữ đơn (giản thể)",
        "st": 3,
        "ord": "nét liền",
        "rad": "一 (nhất)",
        "mean": "vạn, mười nghìn",
        "tip": "Chữ giản thể đơn giản hóa từ hình con bọ cạp với nhiều chân (số lượng lớn) → mở rộng nghĩa VẠN, số lượng lớn.",
        "cf": "方 (fāng – \"phương hướng\", hình dáng khác\")",
        "w": "万 / 一万"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Dù chiếc áo đó rất đắt, nhưng mẹ vẫn tốn hai vạn đồng mua cho tôi.",
        "answer": "虽然那件衣服很贵，但是妈妈还是花了两万块买给我。",
        "answerPy": "Suīrán nà jiàn yīfu hěn guì, dànshì māma háishi huāle liǎng wàn kuài mǎi gěi wǒ.",
        "note": "花 + tiền diễn tả tiêu tốn (ôn lại 花 đã học ở Bài 15).",
        "pair": "虽然……但是……"
      },
      {
        "promptLang": "vi",
        "prompt": "Nếu bạn có một vạn đồng thì có thể mua căn nhà này không?",
        "answer": "如果你有一万块，就能买这个房子吗？",
        "answerPy": "Rúguǒ nǐ yǒu yíwàn kuài, jiù néng mǎi zhège fángzi ma?",
        "note": "如果……就…… diễn tả giả thiết — kết quả.",
        "pair": "如果……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "一万块",
        "py": "yíwàn kuài",
        "vn": "một vạn đồng"
      },
      {
        "zh": "两万人",
        "py": "liǎngwàn rén",
        "vn": "hai vạn người"
      },
      {
        "zh": "十万",
        "py": "shíwàn",
        "vn": "mười vạn"
      },
      {
        "zh": "花了三万",
        "py": "huā le sānwàn",
        "vn": "tiêu ba vạn"
      },
      {
        "zh": "一万多",
        "py": "yíwàn duō",
        "vn": "hơn một vạn"
      }
    ],
    "patterns": [
      {
        "s": "số + 万 + lượng từ",
        "m": "Bao nhiêu vạn — 一万块, 两万人"
      },
      {
        "s": "百 → 千 → 万",
        "m": "Tiếng Trung đếm theo vạn, không theo \"chục nghìn\""
      }
    ]
  },
  {
    "n": 3,
    "zh": "只",
    "py": "zhī",
    "pos": "Lượng từ",
    "vn": "con (dùng cho động vật)",
    "hv": "chích",
    "em": "🐾",
    "lesson": 2,
    "explain": [
      "Lượng từ dùng để đếm động vật, cũng dùng cho một số vật thành đôi."
    ],
    "usage": "一 + 只 + [động vật]: 一只狗.",
    "collo": [
      "一只狗",
      "那只狗",
      "一只猫"
    ],
    "ex_zh": "你看那只狗多可爱。",
    "ex_py": "Nǐ kàn nà zhī gǒu duō kě'ài.",
    "ex_vn": "Mẹ xem con chó đó đáng yêu chưa.",
    "exList": [
      {
        "zh": "妈妈，你看那只狗多可爱，眼睛大大的，嘴小小的。",
        "py": "Māma, nǐ kàn nà zhī gǒu duō kě'ài, yǎnjing dàdà de, zuǐ xiǎoxiǎo de.",
        "vn": "Mẹ ơi, mẹ xem con chó đó đáng yêu chưa, mắt to to, miệng nhỏ nhỏ."
      },
      {
        "zh": "你下星期去北京？你的那只狗怎么办？",
        "py": "Nǐ xià xīngqī qù Běijīng? Nǐ de nà zhī gǒu zěnme bàn?",
        "vn": "Tuần sau bạn đi Bắc Kinh à? Con chó của bạn tính sao?"
      },
      {
        "zh": "我有个同学很喜欢小动物，她同意帮我照顾几天。",
        "py": "Wǒ yǒu ge tóngxué hěn xǐhuan xiǎo dòngwù, tā tóngyì bāng wǒ zhàogù jǐ tiān.",
        "vn": "Tôi có một bạn học rất thích động vật nhỏ, bạn ấy đồng ý giúp tôi chăm mấy hôm."
      }
    ],
    "hanzi": [
      {
        "c": "只",
        "p": "zhī",
        "type": "独体字 · Chữ đơn (giản thể, đa âm)",
        "st": 5,
        "ord": "nét liền",
        "rad": "口 (khẩu)",
        "mean": "con (lượng từ); chỉ (phó từ)",
        "tip": "Chữ tượng hình mô phỏng CON CHIM chỉ còn MỘT chân, một cánh → dùng làm lượng từ cho vật/con đơn lẻ; khi đọc zhǐ nghĩa là CHỈ, DUY NHẤT.",
        "cf": "口 (kǒu – \"miệng\", không có 八ở dưới\")",
        "w": "一只狗 / 只有"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Dù ban đầu bố không đồng ý, nhưng cuối cùng vẫn mua cho tôi một con mèo con.",
        "answer": "虽然爸爸一开始不同意，但是最后还是给我买了一只小猫。",
        "answerPy": "Suīrán bàba yì kāishǐ bù tóngyì, dànshì zuìhòu háishi gěi wǒ mǎile yì zhī xiǎomāo.",
        "note": "同意 sẽ học ngay bên dưới trong bài này.",
        "pair": "虽然……但是……"
      },
      {
        "promptLang": "vi",
        "prompt": "Nếu bạn thích con chó đó thì chúng ta mua về đi.",
        "answer": "如果你喜欢那只狗，我们就买回去吧。",
        "answerPy": "Rúguǒ nǐ xǐhuan nà zhī gǒu, wǒmen jiù mǎi huiqu ba.",
        "note": "如果……就…… diễn tả giả thiết — kết quả.",
        "pair": "如果……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "一只猫",
        "py": "yì zhī māo",
        "vn": "một con mèo"
      },
      {
        "zh": "两只小动物",
        "py": "liǎng zhī xiǎo dòngwù",
        "vn": "hai con vật nhỏ"
      },
      {
        "zh": "一只小狗",
        "py": "yì zhī xiǎo gǒu",
        "vn": "một con chó nhỏ"
      },
      {
        "zh": "三只手表",
        "py": "sān zhī shǒubiǎo",
        "vn": "ba cái đồng hồ"
      },
      {
        "zh": "那只狗",
        "py": "nà zhī gǒu",
        "vn": "con chó kia"
      }
    ],
    "patterns": [
      {
        "s": "số + 只 + động vật nhỏ",
        "m": "Lượng từ 只 cho chim, mèo, chó, gà"
      },
      {
        "s": "只 (zhī, lượng từ) ≠ 只 (zhǐ, chỉ) — cùng chữ, khác âm khác nghĩa"
      }
    ]
  },
  {
    "n": 4,
    "zh": "嘴",
    "py": "zuǐ",
    "pos": "Danh từ",
    "vn": "miệng",
    "hv": "chủy",
    "em": "👄",
    "lesson": 2,
    "explain": [
      "Bộ phận trên khuôn mặt dùng để ăn, nói."
    ],
    "usage": "Danh từ; thường đi cùng tính từ lặp: 嘴小小的.",
    "collo": [
      "嘴小小的",
      "他的嘴",
      "嘴像爸爸"
    ],
    "ex_zh": "嘴小小的，我们买回去吧。",
    "ex_py": "Zuǐ xiǎoxiǎo de, wǒmen mǎi huiqu ba.",
    "ex_vn": "Miệng nhỏ nhỏ, mình mua về đi.",
    "exList": [
      {
        "zh": "眼睛大大的，嘴小小的，我们买回去吧。",
        "py": "Yǎnjing dàdà de, zuǐ xiǎoxiǎo de, wǒmen mǎi huiqu ba.",
        "vn": "Mắt to to, miệng nhỏ nhỏ, mình mua về đi."
      },
      {
        "zh": "他跟你长得真像啊，但是他的嘴更像他爸爸。",
        "py": "Tā gēn nǐ zhǎng de zhēn xiàng a, dànshì tā de zuǐ gèng xiàng tā bàba.",
        "vn": "Nó giống bạn thật đấy, nhưng miệng nó lại giống bố nó hơn."
      },
      {
        "zh": "她的嘴小小的，笑起来很可爱。",
        "py": "Tā de zuǐ xiǎoxiǎo de, xiào qilai hěn kě'ài.",
        "vn": "Miệng cô ấy nhỏ nhỏ, cười lên trông đáng yêu lắm."
      }
    ],
    "hanzi": [
      {
        "c": "嘴",
        "p": "zuǐ",
        "type": "左右结构 · Trái-phải",
        "st": 16,
        "ord": "口 trái → 觜 phải",
        "rad": "口 (khẩu)",
        "mean": "miệng",
        "tip": "口(miệng) + 觜(mỏ chim, tóc mai) → bộ phận trên MẶT dùng để ăn nói, mở rộng từ hình MỎ = MIỆNG.",
        "cf": "嗤 (chī – \"cười khẩy\", có 齿 thay vì 此\")",
        "w": "嘴 / 张嘴"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Mắt em gái giống mẹ, nhưng miệng lại giống bố hơn.",
        "answer": "妹妹的眼睛像妈妈，但是嘴更像爸爸。",
        "answerPy": "Mèimei de yǎnjing xiàng māma, dànshì zuǐ gèng xiàng bàba.",
        "note": "像 diễn tả sự giống nhau (ôn lại đã học ở Bài 14).",
        "pair": "……，但……"
      },
      {
        "promptLang": "vi",
        "prompt": "Nếu miệng bé giống bố thì chắc chắn nhỏ nhỏ.",
        "answer": "如果孩子的嘴像爸爸，就一定是小小的。",
        "answerPy": "Rúguǒ háizi de zuǐ xiàng bàba, jiù yídìng shì xiǎoxiǎo de.",
        "note": "如果……就…… diễn tả giả thiết — kết quả.",
        "pair": "如果……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "嘴很小",
        "py": "zuǐ hěn xiǎo",
        "vn": "miệng rất nhỏ"
      },
      {
        "zh": "嘴像爸爸",
        "py": "zuǐ xiàng bàba",
        "vn": "miệng giống bố"
      },
      {
        "zh": "张开嘴",
        "py": "zhāng kāi zuǐ",
        "vn": "há miệng"
      },
      {
        "zh": "小小的嘴",
        "py": "xiǎoxiǎo de zuǐ",
        "vn": "cái miệng nho nhỏ"
      },
      {
        "zh": "嘴不舒服",
        "py": "zuǐ bù shūfu",
        "vn": "miệng khó chịu"
      }
    ],
    "patterns": [
      {
        "s": "bộ phận + 像 + ai",
        "m": "Bộ phận nào giống ai — 像 là từ bài 14"
      },
      {
        "s": "嘴 (cái miệng) và 口 (miệng, ngụm — bài 17) — 嘴 thiên khẩu ngữ"
      }
    ]
  },
  {
    "n": 5,
    "zh": "动物",
    "py": "dòngwù",
    "pos": "Danh từ",
    "vn": "động vật, loài vật",
    "hv": "động vật",
    "em": "🐾",
    "lesson": 2,
    "explain": [
      "Sinh vật có khả năng di chuyển, khác với thực vật."
    ],
    "usage": "Danh từ; đi cùng tính từ 小: 小动物.",
    "collo": [
      "小动物",
      "动物园",
      "喜欢动物"
    ],
    "ex_zh": "动物和小孩儿一样，都需要人照顾。",
    "ex_py": "Dòngwù hé xiǎoháir yíyàng, dōu xūyào rén zhàogù.",
    "ex_vn": "Động vật cũng như trẻ con, đều cần người chăm sóc.",
    "exList": [
      {
        "zh": "动物和小孩儿一样，都需要人照顾。",
        "py": "Dòngwù hé xiǎoháir yíyàng, dōu xūyào rén zhàogù.",
        "vn": "Động vật cũng như trẻ con, đều cần người chăm sóc."
      },
      {
        "zh": "孩子对动物很感兴趣。",
        "py": "Háizi duì dòngwù hěn gǎn xìngqù.",
        "vn": "Đứa trẻ rất hứng thú với động vật."
      },
      {
        "zh": "你怎么总是带孩子到动物园看动物？",
        "py": "Nǐ zěnme zǒngshì dài háizi dào dòngwùyuán kàn dòngwù?",
        "vn": "Sao bạn cứ dẫn con đến sở thú xem động vật vậy?"
      }
    ],
    "hanzi": [
      {
        "c": "物",
        "p": "wù",
        "type": "左右结构 · Trái-phải",
        "st": 8,
        "ord": "牛 trái → 勿 phải",
        "rad": "牛 (ngưu – trâu, bò)",
        "mean": "vật, đồ vật",
        "tip": "牛(con trâu, đại diện gia súc) + 勿(đừng) → mọi VẬT tồn tại quanh ta; 动(chuyển động)+物(vật) = ĐỘNG VẬT.",
        "cf": "物 vs 牛 (niú – chỉ riêng con trâu\")",
        "w": "动物 / 东西"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Dù em gái sợ chó con, nhưng bé lại rất hứng thú với những động vật khác.",
        "answer": "虽然妹妹害怕小狗，但是她对别的动物很感兴趣。",
        "answerPy": "Suīrán mèimei hàipà xiǎogǒu, dànshì tā duì bié de dòngwù hěn gǎn xìngqù.",
        "note": "对……感兴趣 diễn tả sự hứng thú (ôn lại đã học ở Bài 15).",
        "pair": "虽然……但是……"
      },
      {
        "promptLang": "vi",
        "prompt": "Nếu bạn thích động vật thì đi sở thú chơi đi.",
        "answer": "如果你喜欢动物，就去动物园玩儿吧。",
        "answerPy": "Rúguǒ nǐ xǐhuan dòngwù, jiù qù dòngwùyuán wánr ba.",
        "note": "如果……就…… diễn tả giả thiết — kết quả.",
        "pair": "如果……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "喜欢动物",
        "py": "xǐhuan dòngwù",
        "vn": "thích động vật"
      },
      {
        "zh": "动物园",
        "py": "dòngwù yuán",
        "vn": "sở thú"
      },
      {
        "zh": "别的动物",
        "py": "bié de dòngwù",
        "vn": "các động vật khác"
      },
      {
        "zh": "小动物",
        "py": "xiǎo dòngwù",
        "vn": "con vật nhỏ"
      },
      {
        "zh": "可爱的动物",
        "py": "kě'ài de dòngwù",
        "vn": "con vật đáng yêu"
      }
    ],
    "patterns": [
      {
        "s": "动物 + 园",
        "m": "Sở thú — vườn (园) thú (动物)"
      },
      {
        "s": "动 + 物",
        "m": "Vật (物) biết cử động (动)"
      }
    ]
  },
  {
    "n": 6,
    "zh": "段",
    "py": "duàn",
    "pos": "Lượng từ",
    "vn": "khoảng, quãng",
    "hv": "đoạn",
    "em": "📏",
    "lesson": 2,
    "explain": [
      "Lượng từ dùng cho khoảng thời gian hoặc đoạn đường."
    ],
    "usage": "一 + 段 + [时间/路]: 一段时间.",
    "collo": [
      "这段时间",
      "一段时间",
      "一段路"
    ],
    "ex_zh": "这段时间你自己的衣服都没洗。",
    "ex_py": "Zhè duàn shíjiān nǐ zìjǐ de yīfu dōu méi xǐ.",
    "ex_vn": "Thời gian này quần áo của con còn chưa giặt.",
    "exList": [
      {
        "zh": "这段时间你自己的衣服都没洗，你能照顾好它吗？",
        "py": "Zhè duàn shíjiān nǐ zìjǐ de yīfu dōu méi xǐ, nǐ néng zhàogù hǎo tā ma?",
        "vn": "Thời gian này quần áo của con còn chưa giặt, con chăm nó nổi không?"
      },
      {
        "zh": "只要经过一段时间，就会慢慢地习惯。",
        "py": "Zhǐyào jīngguò yí duàn shíjiān, jiù huì mànman de xíguàn.",
        "vn": "Chỉ cần trải qua một khoảng thời gian, sẽ dần dần quen thôi."
      },
      {
        "zh": "奇怪，这段时间怎么没看见小周来上班？",
        "py": "Qíguài, zhè duàn shíjiān zěnme méi kànjiàn Xiǎo Zhōu lái shàngbān?",
        "vn": "Lạ thật, dạo này sao không thấy Tiểu Chu đi làm nhỉ?"
      }
    ],
    "hanzi": [
      {
        "c": "段",
        "p": "duàn",
        "type": "左右结构 · Trái-phải",
        "st": 9,
        "ord": "⇃ trái → 殳 phải",
        "rad": "殳 (thù – cây gậy)",
        "mean": "đoạn, quãng",
        "tip": "Hình ảnh vật thể bị chia thành từng ĐOẠN bởi công cụ (殳); mở rộng nghĩa ĐOẠN, QUÃNG thời gian/không gian.",
        "cf": "锻 (duàn – \"tôi luyện\", có bộ 钅\")",
        "w": "一段时间 / 阶段"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Lạ thật, dạo này sao anh ấy cứ luôn bận vậy?",
        "answer": "奇怪，这段时间他怎么总是很忙？",
        "answerPy": "Qíguài, zhè duàn shíjiān tā zěnme zǒngshì hěn máng?",
        "note": "奇怪 sẽ học ngay bên dưới trong bài này.",
        "pair": "总是……"
      },
      {
        "promptLang": "vi",
        "prompt": "Nếu bạn có một khoảng thời gian rảnh thì cùng tôi đi du lịch đi.",
        "answer": "如果你有一段空闲时间，就跟我一起去旅游吧。",
        "answerPy": "Rúguǒ nǐ yǒu yí duàn kòngxián shíjiān, jiù gēn wǒ yìqǐ qù lǚyóu ba.",
        "note": "如果……就…… diễn tả giả thiết — kết quả.",
        "pair": "如果……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "一段时间",
        "py": "yí duàn shíjiān",
        "vn": "một khoảng thời gian"
      },
      {
        "zh": "这段话",
        "py": "zhè duàn huà",
        "vn": "đoạn lời này"
      },
      {
        "zh": "一段路",
        "py": "yí duàn lù",
        "vn": "một đoạn đường"
      },
      {
        "zh": "那段日子",
        "py": "nà duàn rì zi",
        "vn": "quãng ngày đó"
      },
      {
        "zh": "第一段",
        "py": "dì yí duàn",
        "vn": "đoạn thứ nhất"
      }
    ],
    "patterns": [
      {
        "s": "số + 段 + 时间 / 路 / 话",
        "m": "Lượng từ 段 cho khoảng thời gian, đoạn đường, đoạn văn"
      },
      {
        "s": "一段时间 ≈ 一些日子",
        "m": "段 nhấn một quãng liền mạch"
      }
    ]
  },
  {
    "n": 7,
    "zh": "不但……而且……",
    "py": "búdàn……érqiě……",
    "pos": "Liên từ",
    "vn": "không những... mà còn...",
    "hv": "bất đãn nhi thả",
    "em": "➕",
    "lesson": 3,
    "explain": [
      "Diễn tả sự bổ sung tăng tiến, vế sau có mức độ cao hơn hoặc bổ sung thêm vế trước."
    ],
    "usage": "不但 + [A]，而且 + [B].",
    "collo": [
      "不但很有名，而且……",
      "不但环境好，而且……"
    ],
    "ex_zh": "贵公司不但很有名，而且工作环境好。",
    "ex_py": "Guì gōngsī búdàn hěn yǒumíng, érqiě gōngzuò huánjìng hǎo.",
    "ex_vn": "Quý công ty không những rất nổi tiếng, mà còn có môi trường làm việc tốt.",
    "exList": [
      {
        "zh": "贵公司不但很有名，而且工作环境好。",
        "py": "Guì gōngsī búdàn hěn yǒumíng, érqiě gōngzuò huánjìng hǎo.",
        "vn": "Quý công ty không những rất nổi tiếng, mà còn có môi trường làm việc tốt."
      },
      {
        "zh": "动物园不但环境好，而且孩子对动物很感兴趣。",
        "py": "Dòngwùyuán búdàn huánjìng hǎo, érqiě háizi duì dòngwù hěn gǎn xìngqù.",
        "vn": "Sở thú không những môi trường tốt, mà đứa trẻ còn rất hứng thú với động vật."
      },
      {
        "zh": "今天不但来了很多北京人，而且还有很多外地人。",
        "py": "Jīntiān búdàn láile hěn duō Běijīngrén, érqiě hái yǒu hěn duō wàidìrén.",
        "vn": "Hôm nay không những đến rất nhiều người Bắc Kinh, mà còn có rất nhiều người ngoại tỉnh."
      }
    ],
    "hanzi": [
      {
        "c": "但",
        "p": "dàn",
        "type": "左右结构 · Trái-phải",
        "st": 7,
        "ord": "亻 trái → 旦 phải",
        "rad": "亻 (nhân – người)",
        "mean": "nhưng, chỉ",
        "tip": "亻(người) + 旦(bình minh, chỉ điều đơn giản) → người CHỈ nói điều đơn giản, mở rộng thành liên từ chuyển ý NHƯNG.",
        "cf": "旦 (dàn – \"bình minh\", không có bộ 亻\")",
        "w": "不但 / 但是"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Công viên không những rất rộng, mà bên trong còn có rất nhiều hoa đẹp.",
        "answer": "公园不但很大，而且里面有很多好看的花。",
        "answerPy": "Gōngyuán búdàn hěn dà, érqiě lǐmiàn yǒu hěn duō hǎokàn de huā.",
        "note": "不但……而且…… diễn tả sự bổ sung tăng tiến.",
        "pair": "不但……而且……"
      },
      {
        "promptLang": "vi",
        "prompt": "Nhà hàng này cá không những tươi mà còn rẻ.",
        "answer": "这家饭馆的鱼不但新鲜，而且便宜。",
        "answerPy": "Zhè jiā fànguǎn de yú búdàn xīnxiān, érqiě piányi.",
        "note": "不但……而且…… diễn tả sự bổ sung tăng tiến.",
        "pair": "不但……而且……"
      }
    ],
    "colloFull": [
      {
        "zh": "不但……而且……",
        "py": "búdàn érqiě",
        "vn": "không những… mà còn…"
      },
      {
        "zh": "不但便宜而且新鲜",
        "py": "búdàn piányi érqiě xīnxiān",
        "vn": "vừa rẻ vừa tươi"
      },
      {
        "zh": "不但会说而且说得好",
        "py": "búdàn huì shuō érqiě shuō de hǎo",
        "vn": "không những biết nói mà còn nói hay"
      },
      {
        "zh": "不但很大",
        "py": "búdàn hěn dà",
        "vn": "không những rất rộng"
      },
      {
        "zh": "而且有很多花",
        "py": "érqiě yǒu hěn duō huā",
        "vn": "mà còn có nhiều hoa"
      }
    ],
    "patterns": [
      {
        "s": "不但 A，而且 B",
        "m": "Không những A mà còn B — B mạnh hơn A"
      },
      {
        "s": "Cùng chủ ngữ: 不但 đứng SAU chủ ngữ. Khác chủ ngữ: 不但 đứng TRƯỚC"
      }
    ]
  },
  {
    "n": 8,
    "zh": "有名",
    "py": "yǒumíng",
    "pos": "Tính từ",
    "vn": "có tiếng, nổi tiếng",
    "hv": "hữu danh",
    "em": "⭐",
    "lesson": 3,
    "explain": [
      "Được nhiều người biết đến vì có đặc điểm nổi bật."
    ],
    "usage": "Tính từ, làm vị ngữ: 很有名.",
    "collo": [
      "很有名",
      "非常有名",
      "公司很有名"
    ],
    "ex_zh": "贵公司不但很有名，而且工作环境好。",
    "ex_py": "Guì gōngsī búdàn hěn yǒumíng, érqiě gōngzuò huánjìng hǎo.",
    "ex_vn": "Quý công ty không những rất nổi tiếng, mà còn có môi trường làm việc tốt.",
    "exList": [
      {
        "zh": "贵公司不但很有名，而且工作环境好。",
        "py": "Guì gōngsī búdàn hěn yǒumíng, érqiě gōngzuò huánjìng hǎo.",
        "vn": "Quý công ty không những rất nổi tiếng, mà còn có môi trường làm việc tốt."
      },
      {
        "zh": "这是黄老师的画儿吧，他的画都非常有名。",
        "py": "Zhè shì Huáng lǎoshī de huàr ba, tā de huà dōu fēicháng yǒumíng.",
        "vn": "Đây là tranh của thầy Hoàng phải không, tranh của thầy đều rất nổi tiếng."
      },
      {
        "zh": "听说这家饭馆的羊肉非常有名。",
        "py": "Tīngshuō zhè jiā fànguǎn de yángròu fēicháng yǒumíng.",
        "vn": "Nghe nói thịt cừu của nhà hàng này rất nổi tiếng."
      }
    ],
    "hanzi": [
      {
        "c": "名",
        "p": "míng",
        "type": "上下结构 · Trên-dưới",
        "st": 6,
        "ord": "夕 trên → 口 dưới",
        "rad": "口 (khẩu)",
        "mean": "tên, danh tiếng",
        "tip": "夕(buổi tối, tối trời) + 口(miệng, gọi tên) → trời tối phải GỌI TÊN mới nhận ra nhau = TÊN, mở rộng DANH TIẾNG.",
        "cf": "各 (gè – \"mỗi\", có 夂 thay vì 夕\")",
        "w": "有名 / 名字"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Vị hoạ sĩ này không những nổi tiếng ở Trung Quốc, mà tranh của ông còn rất đắt.",
        "answer": "这位画家不但在中国非常有名，而且他的画也很贵。",
        "answerPy": "Zhè wèi huàjiā búdàn zài Zhōngguó fēicháng yǒumíng, érqiě tā de huà yě hěn guì.",
        "note": "不但……而且…… là khung trọng tâm của bài này; 画家 đã học ở bài 15.",
        "pair": "不但……而且……"
      },
      {
        "promptLang": "vi",
        "prompt": "Nếu quán ăn này nổi tiếng thì chắc chắn có nhiều khách.",
        "answer": "如果这家饭馆很有名，就一定有很多客人。",
        "answerPy": "Rúguǒ zhè jiā fànguǎn hěn yǒumíng, jiù yídìng yǒu hěn duō kèrén.",
        "note": "如果……就…… diễn tả giả thiết — kết quả.",
        "pair": "如果……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "很有名",
        "py": "hěn yǒumíng",
        "vn": "rất nổi tiếng"
      },
      {
        "zh": "有名的画家",
        "py": "yǒumíng de huàjiā",
        "vn": "hoạ sĩ nổi tiếng"
      },
      {
        "zh": "在中国很有名",
        "py": "zài Zhōngguó hěn yǒumíng",
        "vn": "rất nổi tiếng ở Trung Quốc"
      },
      {
        "zh": "有名的地方",
        "py": "yǒumíng de dìfang",
        "vn": "nơi nổi tiếng"
      },
      {
        "zh": "越来越有名",
        "py": "yuè lái yuè yǒumíng",
        "vn": "ngày càng nổi tiếng"
      }
    ],
    "patterns": [
      {
        "s": "有名 + 的 + N",
        "m": "Cái gì nổi tiếng"
      },
      {
        "s": "有 + 名",
        "m": "Có (有) tiếng tăm (名) — cùng kiểu 有意思, 有用"
      }
    ]
  },
  {
    "n": 9,
    "zh": "同意",
    "py": "tóngyì",
    "pos": "Động từ",
    "vn": "đồng ý, tán thành",
    "hv": "đồng ý",
    "em": "✅",
    "lesson": 3,
    "explain": [
      "Chấp nhận, tán thành với ý kiến hoặc đề nghị."
    ],
    "usage": "Động từ, mang tân ngữ: 同意 + [việc]; hoặc đứng độc lập.",
    "collo": [
      "你家人同意吗",
      "同意帮忙",
      "不同意"
    ],
    "ex_zh": "你家人同意吗？",
    "ex_py": "Nǐ jiārén tóngyì ma?",
    "ex_vn": "Gia đình bạn có đồng ý không?",
    "exList": [
      {
        "zh": "做这个工作有点儿累，需要经常去外地。你家人同意吗？",
        "py": "Zuò zhège gōngzuò yǒudiǎnr lèi, xūyào jīngcháng qù wàidì. Nǐ jiārén tóngyì ma?",
        "vn": "Làm công việc này hơi vất vả, cần thường xuyên đi công tác xa. Gia đình bạn có đồng ý không?"
      },
      {
        "zh": "我有个同学很喜欢小动物，她同意帮我照顾几天。",
        "py": "Wǒ yǒu ge tóngxué hěn xǐhuan xiǎo dòngwù, tā tóngyì bāng wǒ zhàogù jǐ tiān.",
        "vn": "Tôi có một bạn học rất thích động vật nhỏ, bạn ấy đồng ý giúp tôi chăm mấy hôm."
      },
      {
        "zh": "关于这一点，我同意，可是吃太少，我晚上睡不着觉。",
        "py": "Guānyú zhè yì diǎn, wǒ tóngyì, kěshì chī tài shǎo, wǒ wǎnshang shuì bu zháo jiào.",
        "vn": "Về điểm này, tôi đồng ý, nhưng ăn ít quá thì tối tôi không ngủ được."
      }
    ],
    "hanzi": [
      {
        "c": "意",
        "p": "yì",
        "type": "上下结构 · Trên-dưới",
        "st": 13,
        "ord": "立 trên → 心 dưới",
        "rad": "心 (tâm)",
        "mean": "ý nghĩ, ý kiến",
        "tip": "音(âm thanh, lời nói) + 心(trái tim) → LỜI NÓI xuất phát từ TRÁI TIM = Ý NGHĨ; 同(giống nhau)+意(ý) = ĐỒNG Ý.",
        "cf": "音 (yīn – \"âm thanh\", không có bộ 心\")",
        "w": "同意 / 意思"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Về chuyến du lịch này, tôi đồng ý với ý kiến của bạn, nhưng chúng ta vẫn cần hỏi mẹ thêm.",
        "answer": "关于这次旅行，我同意你的看法，可是我们还需要问问妈妈。",
        "answerPy": "Guānyú zhè cì lǚxíng, wǒ tóngyì nǐ de kànfǎ, kěshì wǒmen hái xūyào wènwen māma.",
        "note": "关于 sẽ học ngay bên dưới trong bài này.",
        "pair": "……，可是……"
      },
      {
        "promptLang": "vi",
        "prompt": "Nếu bố mẹ đồng ý thì tôi sẽ đi du học.",
        "answer": "如果爸爸妈妈同意，我就去留学。",
        "answerPy": "Rúguǒ bàba māma tóngyì, wǒ jiù qù liú xué.",
        "note": "如果……就…… diễn tả giả thiết — kết quả (ôn lại 留学 đã học ở Bài 15).",
        "pair": "如果……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "同意你的看法",
        "py": "tóngyì nǐ de kànfǎ",
        "vn": "đồng ý với ý kiến của bạn"
      },
      {
        "zh": "不同意",
        "py": "bù tóngyì",
        "vn": "không đồng ý"
      },
      {
        "zh": "完全同意",
        "py": "wánquán tóngyì",
        "vn": "hoàn toàn nhất trí"
      },
      {
        "zh": "爸爸妈妈同意",
        "py": "bàba māma tóngyì",
        "vn": "bố mẹ đồng ý"
      },
      {
        "zh": "同意去",
        "py": "tóngyì qù",
        "vn": "đồng ý đi"
      }
    ],
    "patterns": [
      {
        "s": "同意 + N / mệnh đề",
        "m": "Đồng ý điều gì"
      },
      {
        "s": "同 + 意",
        "m": "Cùng (同) ý (意) — ghép nghĩa dễ nhớ"
      }
    ]
  },
  {
    "n": 10,
    "zh": "相信",
    "py": "xiāngxìn",
    "pos": "Động từ",
    "vn": "tin, tin tưởng",
    "hv": "tương tín",
    "em": "🤝",
    "lesson": 3,
    "explain": [
      "Tin rằng điều gì đó là đúng, đáng tin cậy."
    ],
    "usage": "Động từ, mang tân ngữ là mệnh đề: 相信 + [việc].",
    "collo": [
      "我相信",
      "相信自己",
      "没办法相信"
    ],
    "ex_zh": "我相信他们会同意的。",
    "ex_py": "Wǒ xiāngxìn tāmen huì tóngyì de.",
    "ex_vn": "Tôi tin họ sẽ đồng ý.",
    "exList": [
      {
        "zh": "只要我愿意，我相信他们就会同意的。",
        "py": "Zhǐyào wǒ yuànyì, wǒ xiāngxìn tāmen jiù huì tóngyì de.",
        "vn": "Chỉ cần tôi muốn, tôi tin họ sẽ đồng ý thôi."
      },
      {
        "zh": "孩子怎么了，变化这么大，我真没办法相信。",
        "py": "Háizi zěnme le, biànhuà zhème dà, wǒ zhēn méi bànfǎ xiāngxìn.",
        "vn": "Đứa trẻ sao thế, thay đổi nhiều vậy, tôi thật sự không tin nổi."
      },
      {
        "zh": "一米九一，我都不相信自己能长这么高。",
        "py": "Yì mǐ jiǔ yī, wǒ dōu bù xiāngxìn zìjǐ néng zhǎng zhème gāo.",
        "vn": "Một mét chín mươi mốt, tôi còn không tin mình có thể cao đến thế."
      }
    ],
    "hanzi": [
      {
        "c": "信",
        "p": "xìn",
        "type": "左右结构 · Trái-phải",
        "st": 9,
        "ord": "亻 trái → 言 phải",
        "rad": "亻 (nhân – người)",
        "mean": "tin tưởng; lá thư",
        "tip": "亻(người) + 言(lời nói) → lời nói của NGƯỜI đáng TIN CẬY; 相(lẫn nhau)+信(tin) = TIN TƯỞNG lẫn nhau.",
        "cf": "言 (yán – \"lời nói\", không có bộ 亻\")",
        "w": "相信 / 信 (lá thư)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tuy tin này đến quá bất ngờ, nhưng tôi vẫn tin là thật.",
        "answer": "虽然这个消息太突然了，但是我还是相信是真的。",
        "answerPy": "Suīrán zhège xiāoxi tài tūrán le, dànshì wǒ háishi xiāngxìn shì zhēn de.",
        "note": "相信 dùng cho việc tin là thật, khác 认为 (cho rằng) ở bài 16.",
        "pair": "虽然……但是……"
      },
      {
        "promptLang": "vi",
        "prompt": "Nếu bạn tin tôi thì hãy cho tôi cơ hội thử một lần.",
        "answer": "如果你相信我，就给我一次机会吧。",
        "answerPy": "Rúguǒ nǐ xiāngxìn wǒ, jiù gěi wǒ yí cì jīhuì ba.",
        "note": "如果……就…… diễn tả giả thiết — kết quả.",
        "pair": "如果……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "相信我",
        "py": "xiāngxìn wǒ",
        "vn": "tin tôi"
      },
      {
        "zh": "不能相信",
        "py": "bù néng xiāngxìn",
        "vn": "không thể tin"
      },
      {
        "zh": "相信他们会同意",
        "py": "xiāngxìn tāmen huì tóngyì",
        "vn": "tin họ sẽ đồng ý"
      },
      {
        "zh": "我相信",
        "py": "wǒ xiāngxìn",
        "vn": "tôi tin rằng"
      },
      {
        "zh": "相信自己",
        "py": "xiāngxìn zìjǐ",
        "vn": "tin vào bản thân"
      }
    ],
    "patterns": [
      {
        "s": "相信 + ai / mệnh đề",
        "m": "Tin ai, tin rằng …"
      },
      {
        "s": "相信 (tin là thật) ≠ 认为 (cho rằng, bài 16)"
      }
    ]
  },
  {
    "n": 11,
    "zh": "关于",
    "py": "guānyú",
    "pos": "Giới từ",
    "vn": "về",
    "hv": "quan vu",
    "em": "📌",
    "lesson": 3,
    "explain": [
      "Nêu chủ đề, đối tượng mà nội dung sau đó liên quan đến."
    ],
    "usage": "关于 + [chủ đề]，[nội dung].",
    "collo": [
      "关于这个工作",
      "关于这件事",
      "关于中国文化"
    ],
    "ex_zh": "关于这个工作，还有什么问题吗？",
    "ex_py": "Guānyú zhège gōngzuò, hái yǒu shénme wèntí ma?",
    "ex_vn": "Về công việc này, còn vấn đề gì không?",
    "exList": [
      {
        "zh": "关于这个工作，还有什么问题吗？",
        "py": "Guānyú zhège gōngzuò, hái yǒu shénme wèntí ma?",
        "vn": "Về công việc này, còn vấn đề gì không?"
      },
      {
        "zh": "我最近看了一些关于中国文化的电影。",
        "py": "Wǒ zuìjìn kànle yìxiē guānyú Zhōngguó wénhuà de diànyǐng.",
        "vn": "Gần đây tôi xem một số phim về văn hóa Trung Quốc."
      },
      {
        "zh": "关于中国的节日，除了春节以外，别的我都不了解。",
        "py": "Guānyú Zhōngguó de jiérì, chúle Chūnjié yǐwài, biéde wǒ dōu bù liǎojiě.",
        "vn": "Về ngày lễ của Trung Quốc, ngoài Tết Nguyên đán ra, những cái khác tôi đều không hiểu rõ."
      }
    ],
    "hanzi": [
      {
        "c": "于",
        "p": "yú",
        "type": "独体字 · Chữ đơn",
        "st": 3,
        "ord": "nét liền",
        "rad": "二 (nhị)",
        "mean": "ở, tại, về",
        "tip": "Chữ tượng hình cổ mô phỏng dòng khí đi TỚI một nơi → mở rộng nghĩa Ở, TẠI, VỀ (một vấn đề).",
        "cf": "干 (gān – \"khô\", hình dáng gần giống\")",
        "w": "关于 / 对于 / 由于"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Trước hết tôi đọc một quyển sách về lịch sử Trung Quốc, sau đó mới đi Bắc Kinh.",
        "answer": "我先读了一本关于中国历史的书，然后才去北京。",
        "answerPy": "Wǒ xiān dúle yì běn guānyú Zhōngguó lìshǐ de shū, ránhòu cái qù Běijīng.",
        "note": "关于 + N + 的 + N — sách, bài về cái gì; 先……然后…… là khung bài 14.",
        "pair": "先……然后……"
      },
      {
        "promptLang": "vi",
        "prompt": "Nếu bạn có vấn đề gì về công việc này thì hỏi tôi đi.",
        "answer": "如果你对这个工作有什么问题，就问我吧。",
        "answerPy": "Rúguǒ nǐ duì zhège gōngzuò yǒu shénme wèntí, jiù wèn wǒ ba.",
        "note": "如果……就…… diễn tả giả thiết — kết quả.",
        "pair": "如果……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "关于中国历史",
        "py": "guānyú Zhōngguó lìshǐ",
        "vn": "về lịch sử Trung Quốc"
      },
      {
        "zh": "关于这次旅行",
        "py": "guānyú zhè cì lǚxíng",
        "vn": "về chuyến đi này"
      },
      {
        "zh": "关于这个问题",
        "py": "guānyú zhège wèntí",
        "vn": "về vấn đề này"
      },
      {
        "zh": "关于他的事",
        "py": "guānyú tā de shì",
        "vn": "chuyện về anh ấy"
      },
      {
        "zh": "一本关于……的书",
        "py": "yì běn guānyú de shū",
        "vn": "một quyển sách về…"
      }
    ],
    "patterns": [
      {
        "s": "关于 + N + 的 + N",
        "m": "Sách, bài, tin về cái gì"
      },
      {
        "s": "关于 đứng ĐẦU câu hoặc làm định ngữ; 对于 nhấn đối tượng tác động"
      }
    ]
  },
  {
    "n": 12,
    "zh": "机会",
    "py": "jīhuì",
    "pos": "Danh từ",
    "vn": "cơ hội",
    "hv": "cơ hội",
    "em": "🎯",
    "lesson": 3,
    "explain": [
      "Thời điểm hoặc điều kiện thuận lợi để làm việc gì đó."
    ],
    "usage": "Danh từ; đi cùng động từ 有/给: 有机会, 给机会.",
    "collo": [
      "这个机会",
      "有机会",
      "给我机会"
    ],
    "ex_zh": "谢谢您给我这个机会。",
    "ex_py": "Xièxie nín gěi wǒ zhège jīhuì.",
    "ex_vn": "Cảm ơn anh đã cho tôi cơ hội này.",
    "exList": [
      {
        "zh": "没有了，谢谢您给我这个机会，我会努力的。",
        "py": "Méiyǒu le, xièxie nín gěi wǒ zhège jīhuì, wǒ huì nǔlì de.",
        "vn": "Không còn ạ, cảm ơn anh đã cho tôi cơ hội này, tôi sẽ cố gắng."
      },
      {
        "zh": "她有这么好的机会啊。",
        "py": "Tā yǒu zhème hǎo de jīhuì a.",
        "vn": "Cô ấy có cơ hội tốt vậy đấy."
      },
      {
        "zh": "在我们那儿很少有机会骑自行车。",
        "py": "Zài wǒmen nàr hěn shǎo yǒu jīhuì qí zìxíngchē.",
        "vn": "Ở chỗ chúng tôi rất ít khi có cơ hội đi xe đạp."
      }
    ],
    "hanzi": [
      {
        "c": "会",
        "p": "huì",
        "type": "上下结构 · Trên-dưới",
        "st": 6,
        "ord": "人 trên → 云 dưới (giản thể)",
        "rad": "人 (nhân)",
        "mean": "gặp gỡ, dịp",
        "tip": "人(người) + 云(mây, tụ hội) → NGƯỜI tụ hội gặp nhau = GẶP GỠ; 机(máy móc, thời điểm)+会(gặp) = CƠ HỘI.",
        "cf": "云 (yún – \"mây\", không có bộ 人\")",
        "w": "机会 / 会议"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Vì thành phố này mùa đông không lạnh, nên chúng tôi rất ít có cơ hội thấy tuyết.",
        "answer": "因为这个城市的冬天不冷，所以我们很少有机会看到雪。",
        "answerPy": "Yīnwèi zhège chéngshì de dōngtiān bù lěng, suǒyǐ wǒmen hěn shǎo yǒu jīhuì kàndào xuě.",
        "note": "冬天 là từ bài 17; 有机会 + V — có cơ hội làm gì.",
        "pair": "因为……所以……"
      },
      {
        "promptLang": "vi",
        "prompt": "Nếu bạn có cơ hội thì nên nắm bắt lấy.",
        "answer": "如果你有机会，就应该抓住它。",
        "answerPy": "Rúguǒ nǐ yǒu jīhuì, jiù yīnggāi zhuāzhù tā.",
        "note": "如果……就…… diễn tả giả thiết — kết quả.",
        "pair": "如果……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "有机会",
        "py": "yǒu jīhuì",
        "vn": "có cơ hội"
      },
      {
        "zh": "一次机会",
        "py": "yí cì jīhuì",
        "vn": "một lần cơ hội"
      },
      {
        "zh": "很少有机会",
        "py": "hěn shǎo yǒu jīhuì",
        "vn": "ít khi có cơ hội"
      },
      {
        "zh": "好机会",
        "py": "hǎo jīhuì",
        "vn": "cơ hội tốt"
      },
      {
        "zh": "给我一次机会",
        "py": "gěi wǒ yí cì jīhuì",
        "vn": "cho tôi một cơ hội"
      }
    ],
    "patterns": [
      {
        "s": "有 / 没有 + 机会 + V",
        "m": "Có, không có cơ hội làm gì"
      },
      {
        "s": "机 + 会",
        "m": "Thời (机) cơ gặp được (会)"
      }
    ]
  },
  {
    "n": 13,
    "zh": "国家",
    "py": "guójiā",
    "pos": "Danh từ",
    "vn": "đất nước, quốc gia",
    "hv": "quốc gia",
    "em": "🇻🇳",
    "lesson": 4,
    "explain": [
      "Một lãnh thổ có chủ quyền, chính phủ riêng."
    ],
    "usage": "Danh từ; đi cùng tính từ 不同: 不同的国家.",
    "collo": [
      "不同的国家",
      "哪个国家",
      "国家的文化"
    ],
    "ex_zh": "不同的国家有不同的文化。",
    "ex_py": "Bùtóng de guójiā yǒu bùtóng de wénhuà.",
    "ex_vn": "Các quốc gia khác nhau có văn hóa khác nhau.",
    "exList": [
      {
        "zh": "不同的国家有不同的文化，每种文化都有自己的特点。",
        "py": "Bùtóng de guójiā yǒu bùtóng de wénhuà, měi zhǒng wénhuà dōu yǒu zìjǐ de tèdiǎn.",
        "vn": "Các quốc gia khác nhau có văn hóa khác nhau, mỗi loại văn hóa đều có đặc điểm riêng."
      },
      {
        "zh": "有些国家的人名写在姓前面。",
        "py": "Yǒuxiē guójiā de rénmíng xiě zài xìng qiánmiàn.",
        "vn": "Có những nước tên người viết trước họ."
      },
      {
        "zh": "你是从哪个国家来的？",
        "py": "Nǐ shì cóng nǎge guójiā lái de?",
        "vn": "Bạn từ quốc gia nào đến vậy?"
      }
    ],
    "hanzi": [
      {
        "c": "国",
        "p": "guó",
        "type": "全包围结构 · Bao vây toàn phần",
        "st": 8,
        "ord": "囗 ngoài → 玉 trong (giản thể)",
        "rad": "囗 (vi – bao vây)",
        "mean": "quốc gia",
        "tip": "囗(biên giới bao quanh) + 玉(ngọc quý, tượng trưng của cải) → vùng đất có BIÊN GIỚI chứa của cải quý = QUỐC GIA.",
        "cf": "固 (gù – \"vững chắc\", có 古 thay vì 玉\")",
        "w": "国家 / 中国"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Anh ấy không những đến từ một quốc gia khác, mà tiếng Trung còn nói rất tốt.",
        "answer": "他不但是从别的国家来的，而且汉语说得很好。",
        "answerPy": "Tā búdàn shì cóng biéde guójiā lái de, érqiě Hànyǔ shuō de hěn hǎo.",
        "note": "从 + 国家 + 来 — đến từ nước nào; 得 bổ ngữ trình độ.",
        "pair": "不但……而且……"
      },
      {
        "promptLang": "vi",
        "prompt": "Nếu mỗi quốc gia đều tôn trọng văn hóa của nhau thì thế giới sẽ tốt đẹp hơn.",
        "answer": "如果每个国家都尊重对方的文化，世界就会更美好。",
        "answerPy": "Rúguǒ měi ge guójiā dōu zūnzhòng duìfāng de wénhuà, shìjiè jiù huì gèng měihǎo.",
        "note": "如果……就…… diễn tả giả thiết — kết quả (ôn lại 世界 đã học ở Bài 15).",
        "pair": "如果……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "哪个国家",
        "py": "nǎge guójiā",
        "vn": "quốc gia nào"
      },
      {
        "zh": "别的国家",
        "py": "bié de guójiā",
        "vn": "nước khác"
      },
      {
        "zh": "每个国家",
        "py": "měi gè guójiā",
        "vn": "mỗi quốc gia"
      },
      {
        "zh": "国家的文化",
        "py": "guójiā de wénhuà",
        "vn": "văn hoá của một nước"
      },
      {
        "zh": "来自这个国家",
        "py": "láizì zhège guójiā",
        "vn": "đến từ nước này"
      }
    ],
    "patterns": [
      {
        "s": "从 + 哪个国家 + 来",
        "m": "Đến từ quốc gia nào"
      },
      {
        "s": "国 + 家",
        "m": "Nước (国) và nhà (家) — nghĩa mở rộng thành quốc gia"
      }
    ]
  },
  {
    "n": 14,
    "zh": "种",
    "py": "zhǒng",
    "pos": "Lượng từ",
    "vn": "loại",
    "hv": "chủng",
    "em": "📦",
    "lesson": 4,
    "explain": [
      "Lượng từ dùng để phân loại sự vật."
    ],
    "usage": "一 + 种 + [danh từ]: 一种文化.",
    "collo": [
      "每种文化",
      "一种药",
      "哪种茶"
    ],
    "ex_zh": "每种文化都有自己的特点。",
    "ex_py": "Měi zhǒng wénhuà dōu yǒu zìjǐ de tèdiǎn.",
    "ex_vn": "Mỗi loại văn hóa đều có đặc điểm riêng.",
    "exList": [
      {
        "zh": "不同的国家有不同的文化，每种文化都有自己的特点。",
        "py": "Bùtóng de guójiā yǒu bùtóng de wénhuà, měi zhǒng wénhuà dōu yǒu zìjǐ de tèdiǎn.",
        "vn": "Các quốc gia khác nhau có văn hóa khác nhau, mỗi loại văn hóa đều có đặc điểm riêng."
      },
      {
        "zh": "你喜欢喝哪种茶？",
        "py": "Nǐ xǐhuan hē nǎ zhǒng chá?",
        "vn": "Bạn thích uống loại trà nào?"
      },
      {
        "zh": "这种药你吃过吗？",
        "py": "Zhè zhǒng yào nǐ chīguo ma?",
        "vn": "Loại thuốc này bạn uống qua chưa?"
      }
    ],
    "hanzi": [
      {
        "c": "种",
        "p": "zhǒng",
        "type": "左右结构 · Trái-phải",
        "st": 9,
        "ord": "禾 trái → 中 phải (giản thể)",
        "rad": "禾 (hoà – lúa)",
        "mean": "loại, giống",
        "tip": "禾(cây lúa) + 中(ở giữa, trồng vào) → gieo trồng LÚA theo từng GIỐNG khác nhau = LOẠI, GIỐNG.",
        "cf": "重 (zhòng – \"nặng\", có bộ 里\")",
        "w": "种 / 种类"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Ngoài táo ra, bạn còn muốn ăn loại trái cây nào nữa?",
        "answer": "除了苹果以外，你还想吃哪种水果？",
        "answerPy": "Chúle píngguǒ yǐwài, nǐ hái xiǎng chī nǎ zhǒng shuǐguǒ?",
        "note": "除了……以外，还…… là khung bài 15 — A THUỘC nhóm; 种 là lượng từ chủng loại.",
        "pair": "除了……以外，还……"
      },
      {
        "promptLang": "vi",
        "prompt": "Nếu bạn thích loại văn hóa này thì hãy tìm hiểu thêm.",
        "answer": "如果你喜欢这种文化，就多了解一下吧。",
        "answerPy": "Rúguǒ nǐ xǐhuan zhè zhǒng wénhuà, jiù duō liǎojiě yíxià ba.",
        "note": "如果……就…… diễn tả giả thiết — kết quả.",
        "pair": "如果……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "哪种水果",
        "py": "nǎ zhǒng shuǐguǒ",
        "vn": "loại trái cây nào"
      },
      {
        "zh": "这种文化",
        "py": "zhè zhǒng wénhuà",
        "vn": "loại văn hoá này"
      },
      {
        "zh": "两种茶",
        "py": "liǎng zhǒng chá",
        "vn": "hai loại trà"
      },
      {
        "zh": "各种",
        "py": "gè zhǒng",
        "vn": "các loại"
      },
      {
        "zh": "这种情况",
        "py": "zhè zhǒng qíngkuàng",
        "vn": "tình huống loại này"
      }
    ],
    "patterns": [
      {
        "s": "số / chỉ định + 种 + N",
        "m": "Lượng từ 种 — chủng loại: 这种, 哪种, 各种"
      },
      {
        "s": "种 (zhǒng, loại) ≠ 种 (zhòng, trồng) — cùng chữ, khác âm"
      }
    ]
  },
  {
    "n": 15,
    "zh": "特点",
    "py": "tèdiǎn",
    "pos": "Danh từ",
    "vn": "đặc điểm",
    "hv": "đặc điểm",
    "em": "🔖",
    "lesson": 4,
    "explain": [
      "Nét riêng, điểm nổi bật của một sự vật, hiện tượng."
    ],
    "usage": "Danh từ; đi cùng động từ 有: 有特点.",
    "collo": [
      "自己的特点",
      "有特点",
      "文化的特点"
    ],
    "ex_zh": "每种文化都有自己的特点。",
    "ex_py": "Měi zhǒng wénhuà dōu yǒu zìjǐ de tèdiǎn.",
    "ex_vn": "Mỗi loại văn hóa đều có đặc điểm riêng.",
    "exList": [
      {
        "zh": "不同的国家有不同的文化，每种文化都有自己的特点。",
        "py": "Bùtóng de guójiā yǒu bùtóng de wénhuà, měi zhǒng wénhuà dōu yǒu zìjǐ de tèdiǎn.",
        "vn": "Các quốc gia khác nhau có văn hóa khác nhau, mỗi loại văn hóa đều có đặc điểm riêng."
      },
      {
        "zh": "这个地方的街道很有特点。",
        "py": "Zhège dìfang de jiēdào hěn yǒu tèdiǎn.",
        "vn": "Đường phố ở nơi này rất có đặc điểm riêng."
      },
      {
        "zh": "每个人都有自己的特点。",
        "py": "Měi ge rén dōu yǒu zìjǐ de tèdiǎn.",
        "vn": "Mỗi người đều có đặc điểm riêng của mình."
      }
    ],
    "hanzi": [
      {
        "c": "特",
        "p": "tè",
        "type": "左右结构 · Trái-phải",
        "st": 10,
        "ord": "牛 trái → 寺 phải",
        "rad": "牛 (ngưu – trâu, bò)",
        "mean": "đặc biệt",
        "tip": "牛(trâu, con vật quý giá thời xưa) + 寺(chùa, nơi trang trọng) → con trâu ĐẶC BIỆT dùng nơi trang trọng = ĐẶC BIỆT.",
        "cf": "持 (chí – \"cầm giữ\", có 扌thay vì 牛\")",
        "w": "特点 / 特别"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Chỉ khi hiểu được đặc điểm của mỗi đứa trẻ, giáo viên mới dạy tốt được.",
        "answer": "只有了解每个孩子的特点，老师才能教好。",
        "answerPy": "Zhǐyǒu liǎojiě měi ge háizi de tèdiǎn, lǎoshī cái néng jiāo hǎo.",
        "note": "只有……才…… — điều kiện duy nhất; 了解 là từ bài 9.",
        "pair": "只有……才……"
      },
      {
        "promptLang": "vi",
        "prompt": "Nếu bạn hiểu đặc điểm của nơi đó thì sẽ quen nhanh hơn.",
        "answer": "如果你了解那里的特点，就会更快习惯。",
        "answerPy": "Rúguǒ nǐ liǎojiě nàli de tèdiǎn, jiù huì gèng kuài xíguàn.",
        "note": "如果……就…… diễn tả giả thiết — kết quả.",
        "pair": "如果……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "有特点",
        "py": "yǒu tèdiǎn",
        "vn": "có nét riêng"
      },
      {
        "zh": "自己的特点",
        "py": "zìjǐ de tèdiǎn",
        "vn": "đặc điểm của mình"
      },
      {
        "zh": "这里的特点",
        "py": "zhèlǐ de tèdiǎn",
        "vn": "đặc điểm nơi này"
      },
      {
        "zh": "文化特点",
        "py": "wénhuà tèdiǎn",
        "vn": "đặc điểm văn hoá"
      },
      {
        "zh": "特点是",
        "py": "tèdiǎn shì",
        "vn": "đặc điểm là"
      }
    ],
    "patterns": [
      {
        "s": "N + 的 + 特点",
        "m": "Đặc điểm của cái gì"
      },
      {
        "s": "特 + 点",
        "m": "Điểm (点) riêng biệt (特)"
      }
    ]
  },
  {
    "n": 16,
    "zh": "奇怪",
    "py": "qíguài",
    "pos": "Tính từ",
    "vn": "kỳ lạ, lạ lùng",
    "hv": "kỳ quái",
    "em": "❓",
    "lesson": 4,
    "explain": [
      "Khác thường, khó hiểu, làm người ta ngạc nhiên."
    ],
    "usage": "Tính từ, làm vị ngữ hoặc trạng ngữ: 觉得奇怪.",
    "collo": [
      "有点儿奇怪",
      "真奇怪",
      "觉得奇怪"
    ],
    "ex_zh": "还会觉得有点奇怪。",
    "ex_py": "Hái huì juéde yǒudiǎn qíguài.",
    "ex_vn": "Còn thấy hơi kỳ lạ.",
    "exList": [
      {
        "zh": "到了一个新环境，你会觉得什么都很新鲜，而且还会觉得有点奇怪。",
        "py": "Dàole yí ge xīn huánjìng, nǐ huì juéde shénme dōu hěn xīnxiān, érqiě hái huì juéde yǒudiǎn qíguài.",
        "vn": "Đến một môi trường mới, bạn sẽ thấy cái gì cũng mới lạ, và còn thấy hơi kỳ lạ."
      },
      {
        "zh": "奇怪，我记得把手机放进包里了，怎么找不到了？",
        "py": "Qíguài, wǒ jìde bǎ shǒujī fàng jìn bāo li le, zěnme zhǎo bu dào le?",
        "vn": "Lạ thật, tôi nhớ để điện thoại vào túi rồi mà, sao tìm không thấy?"
      },
      {
        "zh": "奇怪，这段时间怎么没看见小周来上班？",
        "py": "Qíguài, zhè duàn shíjiān zěnme méi kànjiàn Xiǎo Zhōu lái shàngbān?",
        "vn": "Lạ thật, dạo này sao không thấy Tiểu Chu đi làm nhỉ?"
      }
    ],
    "hanzi": [
      {
        "c": "奇",
        "p": "qí",
        "type": "上下结构 · Trên-dưới",
        "st": 8,
        "ord": "大 trên → 可 dưới",
        "rad": "大 (đại)",
        "mean": "kỳ lạ, đặc biệt",
        "tip": "大(lớn) + 可(có thể) → điều LỚN LAO khác thường có thể xảy ra = KỲ LẠ, ĐẶC BIỆT.",
        "cf": "椅 (yǐ – \"cái ghế\", có bộ 木\")",
        "w": "奇怪 / 好奇"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Lạ thật, tôi vừa để chìa khoá vào ngăn kéo là nó đã không thấy đâu nữa.",
        "answer": "真奇怪，我一把钥匙放进抽屉里，它就不见了。",
        "answerPy": "Zhēn qíguài, wǒ yì bǎ yàoshi fàngjìn chōuti li, tā jiù bú jiàn le.",
        "note": "一……就…… — vừa … là …; 把字句 đặt tân ngữ xác định trước động từ.",
        "pair": "一……就……"
      },
      {
        "promptLang": "vi",
        "prompt": "Nếu bạn thấy kỳ lạ thì cứ hỏi tôi đi.",
        "answer": "如果你觉得奇怪，就问我吧。",
        "answerPy": "Rúguǒ nǐ juéde qíguài, jiù wèn wǒ ba.",
        "note": "如果……就…… diễn tả giả thiết — kết quả.",
        "pair": "如果……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "觉得奇怪",
        "py": "juéde qíguài",
        "vn": "thấy kỳ lạ"
      },
      {
        "zh": "很奇怪",
        "py": "hěn qíguài",
        "vn": "rất lạ"
      },
      {
        "zh": "奇怪的声音",
        "py": "qíguài de shēngyīn",
        "vn": "tiếng động lạ"
      },
      {
        "zh": "真奇怪",
        "py": "zhēn qíguài",
        "vn": "lạ thật"
      },
      {
        "zh": "奇怪地问",
        "py": "qíguài de wèn",
        "vn": "ngạc nhiên hỏi"
      }
    ],
    "patterns": [
      {
        "s": "觉得 + 奇怪",
        "m": "Thấy lạ"
      },
      {
        "s": "奇怪 + 地 + V",
        "m": "Làm gì một cách ngạc nhiên — 地 là từ cùng bài"
      }
    ]
  },
  {
    "n": 17,
    "zh": "地",
    "py": "de",
    "pos": "Trợ từ",
    "vn": "(dùng để nối trạng ngữ với động từ mà nó bổ nghĩa)",
    "hv": "địa",
    "em": "🔗",
    "lesson": 4,
    "explain": [
      "Trợ từ kết cấu, đứng sau trạng ngữ (thường là tính từ), trước động từ."
    ],
    "usage": "[Trạng ngữ] + 地 + [động từ].",
    "collo": [
      "慢慢地",
      "认真地",
      "奇怪地"
    ],
    "ex_zh": "就会慢慢地习惯。",
    "ex_py": "Jiù huì mànman de xíguàn.",
    "ex_vn": "Sẽ dần dần quen thôi.",
    "exList": [
      {
        "zh": "但是只要经过一段时间，就会慢慢地习惯。",
        "py": "Dànshì zhǐyào jīngguò yí duàn shíjiān, jiù huì mànman de xíguàn.",
        "vn": "Nhưng chỉ cần trải qua một khoảng thời gian, sẽ dần dần quen thôi."
      },
      {
        "zh": "大家都奇怪地看着我。",
        "py": "Dàjiā dōu qíguài de kànzhe wǒ.",
        "vn": "Mọi người đều nhìn tôi với vẻ ngạc nhiên."
      },
      {
        "zh": "请认真地学习。",
        "py": "Qǐng rènzhēn de xuéxí.",
        "vn": "Xin hãy học tập nghiêm túc."
      }
    ],
    "hanzi": [
      {
        "c": "地",
        "p": "de",
        "type": "左右结构 · Trái-phải",
        "st": 6,
        "ord": "土 trái → 也 phải",
        "rad": "土 (thổ – đất)",
        "mean": "đất; trợ từ trạng ngữ",
        "tip": "土(đất) + 也(cũng) → khi đọc dì nghĩa là ĐẤT; khi đọc de (nhẹ) làm TRỢ TỪ nối trạng ngữ với động từ.",
        "cf": "他 (tā – \"anh ấy\", có bộ 亻\")",
        "w": "慢慢地 / 地方"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Các bạn học vừa ngạc nhiên hỏi tôi có chuyện gì, vừa nhìn tôi.",
        "answer": "同学们一边奇怪地问我怎么回事，一边看着我。",
        "answerPy": "Tóngxuémen yìbiān qíguài de wèn wǒ zěnme huí shì, yìbiān kànzhe wǒ.",
        "note": "Adj + 地 + V — trạng ngữ cách thức; 一边……一边…… là khung bài 13.",
        "pair": "一边……一边……"
      },
      {
        "promptLang": "vi",
        "prompt": "Nếu bạn học tập nghiêm túc thì trình độ sẽ nâng cao nhanh.",
        "answer": "如果你认真地学习，水平就会提高得很快。",
        "answerPy": "Rúguǒ nǐ rènzhēn de xuéxí, shuǐpíng jiù huì tígāo de hěn kuài.",
        "note": "如果……就…… diễn tả giả thiết — kết quả (ôn lại 水平/提高 đã học ở Bài 15).",
        "pair": "如果……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "认真地学习",
        "py": "rènzhēn de xuéxí",
        "vn": "học một cách nghiêm túc"
      },
      {
        "zh": "慢慢地走",
        "py": "mànmàn de zǒu",
        "vn": "đi chầm chậm"
      },
      {
        "zh": "奇怪地问",
        "py": "qíguài de wèn",
        "vn": "ngạc nhiên hỏi"
      },
      {
        "zh": "高兴地说",
        "py": "gāoxìng de shuō",
        "vn": "vui vẻ nói"
      },
      {
        "zh": "努力地做",
        "py": "nǔlì de zuò",
        "vn": "nỗ lực làm"
      }
    ],
    "patterns": [
      {
        "s": "Adj + 地 + V",
        "m": "Trạng ngữ cách thức: 认真地学习, 高兴地说"
      },
      {
        "s": "的 (trước danh từ) · 地 (trước động từ) · 得 (sau động từ)"
      }
    ]
  }
];

const wuData = [
  {img:'🐾',label:'动物',py:'dòngwù',letter:'A'},
  {img:'👄',label:'嘴',py:'zuǐ',letter:'B'},
  {img:'🇻🇳',label:'国家',py:'guójiā',letter:'C'},
  {img:'✅',label:'同意',py:'tóngyì',letter:'D'},
  {img:'🤝',label:'相信',py:'xiāngxìn',letter:'E'},
  {img:'🔢',label:'万',py:'wàn',letter:'F'},
];

var dialogData = [
  {scene:'在打电话 · Nói chuyện qua điện thoại',
   preQuiz:[
     {q:'他打算做什么？',opts:['买房子，向老周借钱','买一辆车','出国旅游'],ans:0},
     {q:'他还差多少钱？',opts:['5万块','1万块','10万块'],ans:0},
     {q:'他打算在哪儿买房子？',opts:['医院前面','学校旁边','公司后面'],ans:0},
   ],
   lines:[
     {sp:0,zh:'老周，我打算买房子了，想向你借点儿钱。',py:'Lǎo Zhōu, wǒ dǎsuàn mǎi fángzi le, xiǎng xiàng nǐ jiè diǎnr qián.',vn:'Lão Chu ơi, tôi định mua nhà rồi, muốn mượn anh chút tiền.'},
     {sp:1,zh:'没问题，只要我有，就一定会借给你的。还差多少？',py:'Méi wèntí, zhǐyào wǒ yǒu, jiù yídìng huì jiè gěi nǐ de. Hái chà duōshao?',vn:'Không vấn đề gì, chỉ cần tôi có, nhất định sẽ cho anh mượn. Còn thiếu bao nhiêu?'},
     {sp:0,zh:'还差5万块钱。',py:'Hái chà wǔ wàn kuài qián.',vn:'Còn thiếu 5 vạn đồng.'},
     {sp:1,zh:'好，钱下午打给你。你打算在哪儿买房？',py:'Hǎo, qián xiàwǔ dǎ gěi nǐ. Nǐ dǎsuàn zài nǎr mǎi fáng?',vn:'Được, chiều tôi chuyển tiền cho anh. Anh định mua nhà ở đâu?'},
     {sp:0,zh:'就在我们医院前面。',py:'Jiù zài wǒmen yīyuàn qiánmian.',vn:'Ngay trước bệnh viện chúng ta.'},
     {sp:1,zh:'那你以后去医院就方便了。',py:'Nà nǐ yǐhòu qù yīyuàn jiù fāngbiàn le.',vn:'Vậy sau này anh đi bệnh viện tiện rồi.'},
   ]},
  {scene:'在商店 · Ở cửa hàng',
   preQuiz:[
     {q:'小明想买什么？',opts:['一只狗','一只猫','一只鸟'],ans:0},
     {q:'妈妈担心什么？',opts:['谁照顾它','太贵了','家里没地方'],ans:0},
     {q:'小明说什么？',opts:['只要妈妈买，他就能照顾好','他自己挣钱买','让朋友帮他照顾'],ans:0},
   ],
   lines:[
     {sp:0,zh:'妈妈，你看那只狗多可爱，眼睛大大的，嘴小小的，我们买回去吧。',py:'Māma, nǐ kàn nà zhī gǒu duō kě\'ài, yǎnjing dàdà de, zuǐ xiǎoxiǎo de, wǒmen mǎi huiqu ba.',vn:'Mẹ ơi, mẹ xem con chó đó đáng yêu chưa, mắt to to, miệng nhỏ nhỏ, mình mua về đi.'},
     {sp:1,zh:'动物和小孩儿一样，都需要人照顾。买回家去，谁照顾它啊？',py:'Dòngwù hé xiǎoháir yíyàng, dōu xūyào rén zhàogù. Mǎi huí jiā qu, shéi zhàogù tā a?',vn:'Động vật cũng như trẻ con, đều cần người chăm sóc. Mua về nhà rồi, ai chăm nó đây?'},
     {sp:0,zh:'我照顾啊。',py:'Wǒ zhàogù a.',vn:'Con chăm ạ.'},
     {sp:1,zh:'这段时间你自己的衣服都没洗，你能照顾好它吗？',py:'Zhè duàn shíjiān nǐ zìjǐ de yīfu dōu méi xǐ, nǐ néng zhàogù hǎo tā ma?',vn:'Thời gian này quần áo của con còn chưa giặt, con chăm nó nổi không?'},
     {sp:0,zh:'只要你给我买，我就能照顾好它。',py:'Zhǐyào nǐ gěi wǒ mǎi, wǒ jiù néng zhàogù hǎo tā.',vn:'Chỉ cần mẹ mua cho con, con sẽ chăm nó tốt.'},
   ]},
  {scene:'在公司 · Trong công ty (phỏng vấn xin việc)',
   preQuiz:[
     {q:'他为什么选择来这家公司工作？',opts:['公司很有名，工作环境好','工资比较高','离家很近'],ans:0},
     {q:'这个工作什么地方有点儿累？',opts:['需要经常去外地','每天下班很晚','假期非常少'],ans:0},
     {q:'他相信家里人会怎么样？',opts:['会同意','不会同意','还不知道'],ans:0},
   ],
   lines:[
     {sp:1,zh:'说说你为什么选择来我们公司工作。',py:'Shuōshuo nǐ wèi shénme xuǎnzé lái wǒmen gōngsī gōngzuò.',vn:'Hãy nói xem vì sao bạn chọn đến công ty chúng tôi làm việc.'},
     {sp:0,zh:'贵公司不但很有名，而且工作环境好。',py:'Guì gōngsī búdàn hěn yǒumíng, érqiě gōngzuò huánjìng hǎo.',vn:'Quý công ty không những rất nổi tiếng, mà còn có môi trường làm việc tốt.'},
     {sp:1,zh:'做这个工作有点儿累，需要经常去外地。你家人同意吗？',py:'Zuò zhège gōngzuò yǒudiǎnr lèi, xūyào jīngcháng qù wàidì. Nǐ jiārén tóngyì ma?',vn:'Làm công việc này hơi vất vả, cần thường xuyên đi công tác xa. Gia đình bạn có đồng ý không?'},
     {sp:0,zh:'只要我愿意，我相信他们就会同意的。',py:'Zhǐyào wǒ yuànyì, wǒ xiāngxìn tāmen jiù huì tóngyì de.',vn:'Chỉ cần tôi muốn, tôi tin họ sẽ đồng ý thôi.'},
     {sp:1,zh:'好，那你明天来上班吧。关于这个工作，还有什么问题吗？',py:'Hǎo, nà nǐ míngtiān lái shàngbān ba. Guānyú zhège gōngzuò, hái yǒu shénme wèntí ma?',vn:'Được, vậy mai bạn đến làm việc nhé. Về công việc này, còn vấn đề gì không?'},
     {sp:0,zh:'没有了，谢谢您给我这个机会，我会努力的。',py:'Méiyǒu le, xièxie nín gěi wǒ zhège jīhuì, wǒ huì nǔlì de.',vn:'Không còn ạ, cảm ơn anh đã cho tôi cơ hội này, tôi sẽ cố gắng.'},
   ]},
  {scene:'独白 · Tự thuật (sự khác biệt văn hóa)',
   preQuiz:[
     {q:'每种文化都有什么？',opts:['自己的特点','自己的语言','自己的节日'],ans:0},
     {q:'到了新环境，人会觉得怎么样？',opts:['什么都很新鲜，还有点儿奇怪','非常没有意思','特别害怕'],ans:0},
     {q:'这段话举了什么例子？',opts:['名字写在姓前面还是后面','衣服的颜色','吃饭的时间'],ans:0},
   ],
   lines:[
     {sp:0,zh:'不同的国家有不同的文化，每种文化都有自己的特点。',py:'Bùtóng de guójiā yǒu bùtóng de wénhuà, měi zhǒng wénhuà dōu yǒu zìjǐ de tèdiǎn.',vn:'Các quốc gia khác nhau có văn hóa khác nhau, mỗi loại văn hóa đều có đặc điểm riêng.'},
     {sp:0,zh:'到了一个新环境，你会觉得什么都很新鲜，而且还会觉得有点奇怪：',py:'Dàole yí ge xīn huánjìng, nǐ huì juéde shénme dōu hěn xīnxiān, érqiě hái huì juéde yǒudiǎn qíguài:',vn:'Đến một môi trường mới, bạn sẽ thấy cái gì cũng mới lạ, và còn thấy hơi kỳ lạ:'},
     {sp:0,zh:'有些国家的人名写在姓前面，有些国家的人名写在姓后面，',py:'yǒuxiē guójiā de rénmíng xiě zài xìng qiánmiàn, yǒuxiē guójiā de rénmíng xiě zài xìng hòumiàn,',vn:'có những nước tên người viết trước họ, có những nước tên người viết sau họ,'},
     {sp:0,zh:'但是只要经过一段时间，就会慢慢地习惯。',py:'dànshì zhǐyào jīngguò yí duàn shíjiān, jiù huì mànman de xíguàn.',vn:'nhưng chỉ cần trải qua một khoảng thời gian, sẽ dần dần quen thôi.'},
   ]},
];

// ══════════════════════════════════════════
// PHẦN 1 · GHÉP TỪ (Collocation)
// ══════════════════════════════════════════
var matchData = [
  {left:'向',right:'你借钱'},
  {left:'还差',right:'5万块'},
  {left:'一只',right:'小狗'},
  {left:'需要',right:'人照顾'},
  {left:'相信',right:'他们会同意'},
  {left:'关于',right:'这个工作'},
  {left:'谢谢您给我这个',right:'机会'},
  {left:'不但很有名，',right:'而且工作环境好。'},
  {left:'只要我有时间，',right:'就一定跟你去旅游。'},
  {left:'只要你给我买，',right:'我就能照顾好它。'},
  {left:'每种文化都有自己的',right:'特点。'},
];

// ══════════════════════════════════════════
// PHẦN 3a · ĐIỀN TỪ
// ══════════════════════════════════════════
var fillData = [
  {pre:'我想',blank:'向',post:'你借点儿钱。',hint:'(đối với, về phía)',ans:'向'},
  {pre:'虽然那辆车很贵，但是我们已经有三',blank:'万',post:'块钱了。',hint:'(vạn, mười nghìn)',ans:'万'},
  {pre:'你看那',blank:'只',post:'狗多可爱。',hint:'(con, lượng từ)',ans:'只'},
  {pre:'他的',blank:'嘴',post:'更像他爸爸。',hint:'(miệng)',ans:'嘴'},
  {pre:'虽然',blank:'动物',post:'不会说话，但是它们也需要人照顾。',hint:'(động vật)',ans:'动物'},
  {pre:'这',blank:'段',post:'时间你自己的衣服都没洗。',hint:'(khoảng, quãng)',ans:'段'},
  {pre:'这家宾馆',blank:'不但',post:'环境安静，而且很方便。',hint:'(không những)',ans:'不但'},
  {pre:'他的画都非常',blank:'有名',post:'。',hint:'(có tiếng, nổi tiếng)',ans:'有名'},
  {pre:'你家人',blank:'同意',post:'吗？',hint:'(đồng ý, tán thành)',ans:'同意'},
  {pre:'我',blank:'相信',post:'他们就会同意的。',hint:'(tin, tin tưởng)',ans:'相信'},
  {pre:'',blank:'关于',post:'这次考试，你还有什么想问的吗？',hint:'(về)',ans:'关于'},
  {pre:'谢谢您给我这个',blank:'机会',post:'。',hint:'(cơ hội)',ans:'机会'},
  {pre:'不同的',blank:'国家',post:'有不同的文化。',hint:'(đất nước, quốc gia)',ans:'国家'},
  {pre:'每',blank:'种',post:'文化都有自己的特点。',hint:'(loại)',ans:'种'},
  {pre:'每个地方都有自己的',blank:'特点',post:'，我们应该了解它们。',hint:'(đặc điểm)',ans:'特点'},
  {pre:'你会觉得有点',blank:'奇怪',post:'。',hint:'(kỳ lạ, lạ lùng)',ans:'奇怪'},
  {pre:'就会慢慢',blank:'地',post:'习惯。',hint:'(trợ từ nối trạng ngữ)',ans:'地'},
];

// ══════════════════════════════════════════
// PHẦN 3b · SẮP XẾP
// ══════════════════════════════════════════
var sortData = [
  {words:['我','打算','买','房子','了','，','想','向','你','借','点儿','钱','。'],ans:'我打算买房子了，想向你借点儿钱。',audio:'我打算买房子了，想向你借点儿钱。'},
  {words:['只要','我','有','，','就','一定','会','借','给','你','的','。'],ans:'只要我有，就一定会借给你的。',audio:'只要我有，就一定会借给你的。'},
  {words:['因为','小狗','很','可爱','，','所以','很多','人','都','喜欢','动物','。'],ans:'因为小狗很可爱，所以很多人都喜欢动物。',audio:'因为小狗很可爱，所以很多人都喜欢动物。'},
  {words:['这','所','学校','不但','老师','认真','，','而且','学生','都','很','努力','。'],ans:'这所学校不但老师认真，而且学生都很努力。',audio:'这所学校不但老师认真，而且学生都很努力。'},
  {words:['只要','我','有','时间','，','就','一定','跟','你','去','旅游','。'],ans:'只要我有时间，就一定跟你去旅游。',audio:'只要我有时间，就一定跟你去旅游。'},
  {words:['只要','你','给','我','买','，','我','就','能','照顾好','它','。'],ans:'只要你给我买，我就能照顾好它。',audio:'只要你给我买，我就能照顾好它。'},
  {words:['关于','这','件','事','，','我们','还','没有','决定','呢','。'],ans:'关于这件事，我们还没有决定呢。',audio:'关于这件事，我们还没有决定呢。'},
  {words:['不同','的','国家','有','不同','的','语言','，','每','种','语言','都','有','自己','的','特点','。'],ans:'不同的国家有不同的语言，每种语言都有自己的特点。',audio:'不同的国家有不同的语言，每种语言都有自己的特点。'},
];

// ══════════════════════════════════════════
// PHẦN 3c · SỬA LỖI SAI
// ══════════════════════════════════════════
var errorFixData = [
  {wrong:'你明天有空只要，我们就一起去踢足球。',
   opts:['只要你明天有空，我们就一起去踢足球。','你明天有空只要，我们就一起去踢足球。','只要你明天有空我们，就一起去踢足球。','你明天有空，只要我们就一起去踢足球。'],ans:0,
   exp:'只要 phải đứng ở ĐẦU câu hoặc trước chủ ngữ thứ nhất, không đặt sau chủ ngữ.'},
  {wrong:'只要你努力练习，相信你能提高我就。',
   opts:['只要你努力练习，我就相信你能提高。','只要你努力练习，相信你能提高我就。','只要你努力练习，就我相信你能提高。','只要努力练习你，我就相信你能提高。'],ans:0,
   exp:'Chủ ngữ (我) của mệnh đề thứ hai phải đặt TRƯỚC 就, không đặt sau động từ.'},
  {wrong:'这次旅游关于，我们还没有决定好。',
   opts:['关于这次旅游，我们还没有决定好。','这次旅游关于，我们还没有决定好。','我们关于这次旅游还没有决定好。','这次旅游我们关于还没有决定好。'],ans:0,
   exp:'关于 phải đứng TRƯỚC danh từ nó giới thiệu (这次旅游), không đặt sau.'},
  {wrong:'这个房间很干净不但，而且很安静。',
   opts:['这个房间不但很干净，而且很安静。','这个房间很干净不但，而且很安静。','这个房间不但，很干净而且很安静。','这个房间很干净，不但而且很安静。'],ans:0,
   exp:'不但 phải đứng NGAY TRƯỚC phần thông tin thứ nhất (很干净), không đặt sau.'},
  {wrong:'今天不但下雨了，刮风了而且。',
   opts:['今天不但下雨了，而且刮风了。','今天不但下雨了，刮风了而且。','今天不但下雨了而且，刮风了。','今天下雨了不但，而且刮风了。'],ans:0,
   exp:'而且 phải đứng NGAY TRƯỚC phần thông tin thứ hai, không đặt cuối câu.'},
];

// ══════════════════════════════════════════
// LUYỆN NÓI
// ══════════════════════════════════════════
var speakingData = {
  mode: 'ai-speak',
  intro: 'Mỗi câu hỏi là một tình huống thật trong đời sống, dùng đúng từ vựng và mẫu câu của Bài 18. Bấm 🎙️ rồi trả lời bằng tiếng Trung — AI sẽ nghe, ghi lại câu bạn nói và chấm điểm theo Nội dung · Mẫu câu · Từ vựng · Độ trôi chảy. Nên tự trả lời trước rồi mới mở “Câu mẫu” để đối chiếu.',
  tasks: [
    {
      situation: 'Bạn học hỏi bạn hay làm gì khi rảnh.',
      q_zh: '只要有时间，你就会做什么？',
      q_py: 'Zhǐyào yǒu shíjiān, nǐ jiù huì zuò shénme?',
      q_vn: 'Chỉ cần có thời gian là bạn sẽ làm gì?',
      grammar: { label: '只要……，就……', any: ['只要'] },
      need: [
        { label: 'Dùng 只要……就……', any: ['只要'] },
        { label: 'Nói việc bạn làm', any: ['看书', '图书馆', '运动', '学', '听', '朋友', '休息'] }
      ],
      bonus: { label: 'Dùng 相信 nói niềm tin của bạn', any: ['相信'] },
      vocab: ['只要', '相信', '机会'],
      minLen: 20,
      sample: '只要有时间，我就去图书馆看书。我相信只要每天看一点儿，水平就会越来越高，机会也会越来越多。',
      sample_py: 'Zhǐyào yǒu shíjiān, wǒ jiù qù túshūguǎn kàn shū. Wǒ xiāngxìn zhǐyào měitiān kàn yìdiǎnr, shuǐpíng jiù huì yuè lái yuè gāo, jīhuì yě huì yuè lái yuè duō.',
      sample_vn: 'Chỉ cần có thời gian là tôi ra thư viện đọc sách. Tôi tin chỉ cần mỗi ngày đọc một chút thì trình độ sẽ ngày càng cao, cơ hội cũng ngày càng nhiều.',
      tip: '只要 nêu điều kiện đủ: 只要努力，就一定能做好。'
    },
    {
      situation: 'Bạn bè bàn về các chương trình truyền hình yêu thích.',
      q_zh: '你喜欢看关于什么的书或者节目？',
      q_py: 'Nǐ xǐhuan kàn guānyú shénme de shū huòzhě jiémù?',
      q_vn: 'Bạn thích xem sách hoặc chương trình về chủ đề gì?',
      grammar: { label: '关于 + chủ đề; 不但……而且……', any: ['关于', '不但'] },
      need: [
        { label: 'Dùng 关于 nói chủ đề', any: ['关于'] },
        { label: 'Nêu chủ đề cụ thể', any: ['动物', '国家', '文化', '历史', '新闻', '旅游', '运动'] }
      ],
      bonus: { label: 'Dùng 不但……而且…… nêu hai lý do', any: ['不但', '而且'] },
      vocab: ['关于', '动物', '国家', '种'],
      minLen: 20,
      sample: '我喜欢看关于动物和各个国家文化的节目。这种节目不但有意思，而且能让我知道很多新东西。',
      sample_py: 'Wǒ xǐhuan kàn guānyú dòngwù hé gè ge guójiā wénhuà de jiémù. Zhè zhǒng jiémù bú dàn yǒuyìsi, ér qiě néng ràng wǒ zhīdao hěn duō xīn dōngxi.',
      sample_vn: 'Tôi thích xem chương trình về động vật và văn hóa các nước. Loại chương trình này không những thú vị mà còn giúp tôi biết nhiều điều mới.',
      tip: '关于 đứng trước chủ đề: 关于这个问题，我有几句话。'
    },
    {
      situation: 'Công ty đề nghị chuyển bạn đi làm ở thành phố khác.',
      q_zh: '如果公司给你一个去外地工作的机会，你会同意吗？',
      q_py: 'Rúguǒ gōngsī gěi nǐ yí ge qù wài de gōngzuò de jīhuì, nǐ huì tóngyì ma?',
      q_vn: 'Nếu công ty cho bạn cơ hội đi làm ở nơi khác, bạn có đồng ý không?',
      grammar: { label: '同意 / 不同意 + lý do; 只要……就……', any: ['同意', '只要'] },
      need: [
        { label: 'Trả lời đồng ý hay không', any: ['同意', '不同意', '会', '不会'] },
        { label: 'Nêu lý do', any: ['机会', '年轻', '工作', '家里', '城市', '生活'] }
      ],
      bonus: { label: 'Nói sẽ bàn với gia đình trước', any: ['家里人', '说一下', '先'] },
      vocab: ['机会', '同意', '相信'],
      minLen: 20,
      sample: '如果公司给我这样的机会，我会同意，因为年轻的时候应该多看看别的城市。不过我必须先跟家里人说一下，我相信他们也会同意。',
      sample_py: 'Rúguǒ gōngsī gěi wǒ zhè yàng de jīhuì, wǒ huì tóngyì, yīnwèi niánqīng de shíhou yīnggāi duō kànkan biéde chéngshì. Búguò wǒ bìxū xiān gēn jiā lǐ rén shuō yíxià, wǒ xiāngxìn tāmen yě huì tóngyì.',
      sample_vn: 'Nếu công ty cho tôi cơ hội như vậy, tôi sẽ đồng ý, vì khi còn trẻ nên đi xem nhiều thành phố khác. Nhưng tôi phải nói với gia đình trước, tôi tin họ cũng sẽ đồng ý.',
      tip: '同意 + việc/ý kiến: 我同意你的看法。'
    },
    {
      situation: 'Người bạn nước ngoài định đến thăm đất nước bạn.',
      q_zh: '你们国家有什么有名的地方？有什么特点？',
      q_py: 'Nǐmen guójiā yǒu shénme yǒumíng de dìfang? Yǒu shénme tèdiǎn?',
      q_vn: 'Nước bạn có nơi nào nổi tiếng? Có đặc điểm gì?',
      grammar: { label: '有名 + 的地方; 特点 là……', any: ['有名', '特点'] },
      need: [
        { label: 'Kể một nơi nổi tiếng', any: ['有名', '地方', '城市', '海', '山', '河'] },
        { label: 'Nói đặc điểm', any: ['特点', '干净', '安静', '热闹', '漂亮', '文化'] }
      ],
      bonus: { label: 'Dùng số lớn với 万 để nói lượng khách', any: ['万'] },
      vocab: ['有名', '特点', '万', '国家'],
      minLen: 20,
      sample: '我们国家有很多有名的地方，比如海边的城市。那儿的特点是又干净又安静，每年有几十万人去那儿旅游。',
      sample_py: 'Wǒmen guójiā yǒu hěn duō yǒumíng de dìfang, bǐrú hǎi bian de chéngshì. Nàr de tèdiǎn shì yòu gānjìng yòu ānjìng, měi nián yǒu jǐ shí wàn rén qù nàr lǚyóu.',
      sample_vn: 'Nước tôi có nhiều nơi nổi tiếng, ví dụ những thành phố ven biển. Đặc điểm ở đó là vừa sạch vừa yên tĩnh, mỗi năm có mấy chục vạn người đến du lịch.',
      tip: '万 = 10 000: 十万 = 100 000, 几十万 = mấy trăm nghìn.'
    },
    {
      situation: 'Bạn kể về một lần đi sở thú.',
      q_zh: '你见过什么奇怪的动物？它长什么样？',
      q_py: 'Nǐ jiàn guo shénme qíguài de dòngwù? Tā zhǎng shénme yàng?',
      q_vn: 'Bạn từng thấy con vật nào kỳ lạ? Nó trông thế nào?',
      grammar: { label: '一种 + danh từ; 又……又……', any: ['种', '又'] },
      need: [
        { label: 'Nói con vật gì, ở đâu', any: ['动物', '鸟', '动物园', '见过'] },
        { label: 'Tả hình dáng', any: ['嘴', '大', '长', '奇怪', '可爱', '样子'] }
      ],
      bonus: { label: 'Dùng 种 làm lượng từ', any: ['种'] },
      vocab: ['奇怪', '嘴', '动物', '种'],
      minLen: 20,
      sample: '我在动物园见过一种鸟，它的嘴又长又大，样子很奇怪，可是很可爱，我照了很多照片。',
      sample_py: 'Wǒ zài dòngwù yuán jiàn guo yì zhǒng niǎo, tā de zuǐ yòu zhǎng yòu dà, yàngzi hěn qíguài, kěshì hěn kě\'ài, wǒ zhào le hěn duō zhàopiàn.',
      sample_vn: 'Tôi từng thấy một loài chim ở sở thú, mỏ nó vừa dài vừa to, trông rất kỳ lạ nhưng lại đáng yêu, tôi chụp rất nhiều ảnh.',
      tip: '种 là lượng từ chỉ loại: 这种菜、那种人。'
    }
  ]
};

// ══════════════════════════════════════════
// LUYỆN DỊCH (Việt → Trung)
// ══════════════════════════════════════════
var translateData = [
  {vi:'Vì xe đạp của tôi hỏng rồi, nên tôi muốn mượn xe của bạn một chút.', zh:'因为我的自行车坏了，所以想向你借一下你的。', py:'Yīnwèi wǒ de zìxíngchē huài le, suǒyǐ xiǎng xiàng nǐ jiè yíxià nǐ de.'},
  {vi:'Chỉ cần bạn tin vào bản thân, nhất định sẽ làm tốt việc này.', zh:'只要你相信自己，就一定能做好这件事。', py:'Zhǐyào nǐ xiāngxìn zìjǐ, jiù yídìng néng zuò hǎo zhè jiàn shì.'},
  {vi:'Con chó đó đáng yêu chưa, mắt to to, miệng nhỏ nhỏ.', zh:'那只狗多可爱，眼睛大大的，嘴小小的。', py:'Nà zhī gǒu duō kě\'ài, yǎnjing dàdà de, zuǐ xiǎoxiǎo de.'},
  {vi:'Khách sạn này không những giá rẻ, mà còn phục vụ rất tốt.', zh:'这家宾馆不但价格便宜，而且服务很好。', py:'Zhè jiā bīnguǎn búdàn jiàgé piányi, érqiě fúwù hěn hǎo.'},
  {vi:'Chỉ cần ngày mai không mưa, tôi tin chúng ta sẽ có thể đi leo núi.', zh:'只要明天不下雨，我相信我们就能去爬山。', py:'Zhǐyào míngtiān bú xiàyǔ, wǒ xiāngxìn wǒmen jiù néng qù páshān.'},
  {vi:'Cảm ơn anh đã cho tôi cơ hội này, tôi sẽ cố gắng.', zh:'谢谢您给我这个机会，我会努力的。', py:'Xièxie nín gěi wǒ zhège jīhuì, wǒ huì nǔlì de.'},
  {vi:'Mỗi quốc gia đều có đặc điểm riêng, chúng ta nên tìm hiểu lẫn nhau.', zh:'每个国家都有自己的特点，我们应该互相了解。', py:'Měi ge guójiā dōu yǒu zìjǐ de tèdiǎn, wǒmen yīnggāi hùxiāng liǎojiě.'},
  {vi:'Chỉ cần bạn luyện tập mỗi ngày, trình độ tiếng Trung sẽ ngày càng tốt hơn.', zh:'只要你每天练习，中文水平就会越来越好。', py:'Zhǐyào nǐ měitiān liànxí, Zhōngwén shuǐpíng jiù huì yuè lái yuè hǎo.'},
];

// ══════════════════════════════════════════
// LUYỆN DỊCH (Trung → Việt) — nội dung KHÁC với chiều Việt→Trung ở trên
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:'Anh ấy viết một bài báo về bảo vệ môi trường.', zh:'他写了一篇关于环境保护的文章。', py:'Tā xiěle yì piān guānyú huánjìng bǎohù de wénzhāng.'},
  {vi:'Về các món ăn Trung Quốc, tôi còn có rất nhiều điều muốn học.', zh:'关于中国菜，我还有很多想学的。', py:'Guānyú Zhōngguó cài, wǒ hái yǒu hěn duō xiǎng xué de.'},
  {vi:'Chỉ cần tôi thích, nhất định sẽ mua.', zh:'我只要喜欢，就一定会买。', py:'Wǒ zhǐyào xǐhuan, jiù yídìng huì mǎi.'},
  {vi:'Chỉ cần bạn muốn đi, tôi sẽ đi cùng bạn.', zh:'只要你想去，我就跟你去。', py:'Zhǐyào nǐ xiǎng qù, wǒ jiù gēn nǐ qù.'},
  {vi:'Về việc đi du học nước ngoài, mẹ đã đồng ý rồi.', zh:'关于出国学习的事，妈妈已经同意了。', py:'Guānyú chūguó xuéxí de shì, māma yǐjīng tóngyì le.'},
  {vi:'Chiếc điện thoại này không những chụp ảnh rõ, mà còn pin rất bền.', zh:'这个手机不但拍照清楚，而且电池很耐用。', py:'Zhège shǒujī búdàn pāizhào qīngchu, érqiě diànchí hěn nàiyòng.'},
  {vi:'Anh ấy tin rằng chỉ cần nỗ lực thì sẽ thành công.', zh:'他相信只要努力就会成功。', py:'Tā xiāngxìn zhǐyào nǔlì jiù huì chénggōng.'},
  {vi:'Đến một môi trường mới, cái gì cũng sẽ thấy mới lạ.', zh:'到了一个新环境，什么都会觉得很新鲜。', py:'Dàole yí ge xīn huánjìng, shénme dōu huì juéde hěn xīnxiān.'},
];

// ══════════════════════════════════════════
// LUYỆN NGHE — đề nghe THẬT từ HSK标准教程3 练习册 (sách bài tập Bài 18)
// ══════════════════════════════════════════
var listenData = {
  type: 'workbook',
  audio: "/audio/hsk3-bai-18/listen-full.mp3",
  dictation: [
    {num:1, lines:[
      {speaker:"男", pre:"", blank:"孩子怎么了，变化这么大，我真没办法相信", post:"。",
       py:"Háizi zěnme le, biànhuà zhème dà, wǒ zhēn méi bànfǎ xiāngxìn.",
       vn:"Đứa trẻ sao thế, thay đổi nhiều vậy, tôi thật sự không tin nổi."},
      {speaker:"女", pre:"", blank:"我自己也没想到，他一个星期就瘦了五斤", post:"。",
       py:"Wǒ zìjǐ yě méi xiǎngdào, tā yí ge xīngqī jiù shòule wǔ jīn.",
       vn:"Tôi cũng không ngờ, nó một tuần mà gầy mất năm cân."}]},
    {num:2, lines:[
      {speaker:"女", pre:"", blank:"你下星期去北京？你的那只狗怎么办", post:"？",
       py:"Nǐ xià xīngqī qù Běijīng? Nǐ de nà zhī gǒu zěnme bàn?",
       vn:"Tuần sau bạn đi Bắc Kinh à? Con chó của bạn tính sao?"},
      {speaker:"男", pre:"", blank:"我有个同学很喜欢小动物，她同意帮我照顾几天", post:"。",
       py:"Wǒ yǒu ge tóngxué hěn xǐhuan xiǎo dòngwù, tā tóngyì bāng wǒ zhàogù jǐ tiān.",
       vn:"Tôi có một bạn học rất thích động vật nhỏ, bạn ấy đồng ý giúp tôi chăm mấy hôm."}]},
    {num:3, lines:[
      {speaker:"男", pre:"", blank:"这是你儿子？他跟你长得真像啊", post:"。",
       py:"Zhè shì nǐ érzi? Tā gēn nǐ zhǎng de zhēn xiàng a.",
       vn:"Đây là con trai bạn à? Nó giống bạn thật đấy."},
      {speaker:"女", pre:"是，", blank:"但是他的嘴更像他爸爸", post:"。",
       py:"Shì, dànshì tā de zuǐ gèng xiàng tā bàba.",
       vn:"Đúng vậy, nhưng miệng nó lại giống bố nó hơn."}]},
    {num:4, lines:[
      {speaker:"男", pre:"", blank:"这是黄老师的画儿吧，他的画都非常有名", post:"。",
       py:"Zhè shì Huáng lǎoshī de huàr ba, tā de huà dōu fēicháng yǒumíng.",
       vn:"Đây là tranh của thầy Hoàng phải không, tranh của thầy đều rất nổi tiếng."},
      {speaker:"女", pre:"对，", blank:"我买这画儿花了三万块呢", post:"。",
       py:"Duì, wǒ mǎi zhè huàr huāle sān wàn kuài ne.",
       vn:"Đúng vậy, tôi mua bức tranh này tốn ba vạn đồng đấy."}]},
    {num:5, lines:[
      {speaker:"女", pre:"", blank:"你怎么总是带孩子到动物园看动物，能不能换个地方", post:"？",
       py:"Nǐ zěnme zǒngshì dài háizi dào dòngwùyuán kàn dòngwù, néng bu néng huàn ge dìfang?",
       vn:"Sao bạn cứ dẫn con đến sở thú xem động vật vậy, đổi chỗ khác được không?"},
      {speaker:"男", pre:"这你就不知道了吧，", blank:"动物园不但环境好，而且孩子对动物很感兴趣", post:"。",
       py:"Zhè nǐ jiù bù zhīdào le ba, dòngwùyuán búdàn huánjìng hǎo, érqiě háizi duì dòngwù hěn gǎn xìngqù.",
       vn:"Cái này bạn không biết rồi, sở thú không những môi trường tốt, mà con còn rất hứng thú với động vật."}]},
    {num:6, stmt:"聪明人知道机会不常有。", judge:true, lines:[
      {pre:"聪明的人只要看到机会，就会想办法拿到，", blank:"因为他们知道，很多时候机会只有一次", post:"。",
       py:"Cōngming de rén zhǐyào kàndào jīhuì, jiù huì xiǎng bànfǎ nádào, yīnwèi tāmen zhīdào, hěn duō shíhou jīhuì zhǐyǒu yí cì.",
       vn:"Người thông minh chỉ cần thấy cơ hội, sẽ nghĩ cách nắm bắt, vì họ biết, nhiều lúc cơ hội chỉ có một lần."}]},
    {num:7, stmt:"小云要去体育馆。", judge:true, lines:[
      {pre:"小云，你从动物园出来后，向左走，", blank:"到了地铁站以后再向右走，然后就能看到体育馆了", post:"。",
       py:"Xiǎoyún, nǐ cóng dòngwùyuán chūlai hòu, xiàng zuǒ zǒu, dàole dìtiězhàn yǐhòu zài xiàng yòu zǒu, ránhòu jiù néng kàndào tǐyùguǎn le.",
       vn:"Tiểu Vân, sau khi bạn ra khỏi sở thú, rẽ trái, đến ga tàu điện ngầm rồi rẽ phải, sau đó là thấy nhà thi đấu."}]},
    {num:8, stmt:"关于中国的春节，他比较了解。", judge:true, lines:[
      {pre:"关于中国的节日，除了春节以外，别的我都不了解，", blank:"但是我打算找一个中国老师教教我", post:"。",
       py:"Guānyú Zhōngguó de jiérì, chúle Chūnjié yǐwài, biéde wǒ dōu bù liǎojiě, dànshì wǒ dǎsuàn zhǎo yí ge Zhōngguó lǎoshī jiāojiao wǒ.",
       vn:"Về ngày lễ của Trung Quốc, ngoài Tết Nguyên đán ra, những cái khác tôi đều không hiểu rõ, nhưng tôi định tìm một thầy giáo người Trung Quốc dạy cho tôi."}]},
    {num:9, stmt:"他认为那个宾馆不错。", judge:true, lines:[
      {pre:"那个宾馆离我们学校很近，不但环境很好，而且不太贵，", blank:"每次有同学或者朋友来，我都会带他们去那儿住", post:"。",
       py:"Nàge bīnguǎn lí wǒmen xuéxiào hěn jìn, búdàn huánjìng hěn hǎo, érqiě bú tài guì, měi cì yǒu tóngxué huòzhě péngyou lái, wǒ dōu huì dài tāmen qù nàr zhù.",
       vn:"Khách sạn đó cách trường chúng tôi rất gần, không những môi trường tốt, mà còn không đắt lắm, mỗi lần có bạn học hoặc bạn bè đến, tôi đều dẫn họ đến đó ở."}]},
    {num:10, stmt:"他的汉语水平很高。", judge:false, lines:[
      {pre:"我学习汉语一年多了，水平一般。我能听懂中国人说的一些简单的句子，也可以说一点儿。", blank:"我相信明年我一定会说得更好的", post:"。",
       py:"Wǒ xuéxí Hànyǔ yì nián duō le, shuǐpíng yìbān. Wǒ néng tīngdǒng Zhōngguórén shuō de yìxiē jiǎndān de jùzi, yě kěyǐ shuō yìdiǎnr. Wǒ xiāngxìn míngnián wǒ yídìng huì shuō de gèng hǎo de.",
       vn:"Tôi học tiếng Trung hơn một năm rồi, trình độ bình thường. Tôi nghe hiểu được một số câu đơn giản người Trung Quốc nói, cũng có thể nói chút ít. Tôi tin sang năm mình chắc chắn sẽ nói tốt hơn."}]}
  ],
  mc: [
    {num:11, options:["司机","老师","医生"], ans:1, q:"女的最可能是做什么的？",
     lines:[
      {speaker:"男", pre:"你明天上午要去哪儿，", blank:"陪我去医院吧", post:"？",
       py:"Nǐ míngtiān shàngwǔ yào qù nǎr, péi wǒ qù yīyuàn ba?",
       vn:"Sáng mai bạn định đi đâu, đi cùng tôi đến bệnh viện đi?"},
      {speaker:"女", pre:"我要带学生去动物园看大熊猫，", blank:"后天行吗", post:"？",
       py:"Wǒ yào dài xuésheng qù dòngwùyuán kàn dàxióngmāo, hòutiān xíng ma?",
       vn:"Tôi phải dẫn học sinh đến sở thú xem gấu trúc, ngày kia được không?"}
     ],
     explain:"男：你明天上午要去哪儿，陪我去医院吧？女：我要带学生去动物园看大熊猫，后天行吗？问：女的最可能是做什么的？ → 老师。"},
    {num:12, options:["不爱看电视","常去动物园","在准备比赛"], ans:2, q:"男的最近为什么很少看电视？",
     lines:[
      {speaker:"女", pre:"", blank:"昨晚的《动物世界》你看了吗", post:"？",
       py:"Zuówǎn de \"Dòngwù Shìjiè\" nǐ kànle ma?",
       vn:"Bạn xem \"Thế giới động vật\" tối qua chưa?"},
      {speaker:"男", pre:"没有，", blank:"我最近忙着准备下周的比赛，很少看电视", post:"。",
       py:"Méiyǒu, wǒ zuìjìn mángzhe zhǔnbèi xiàzhōu de bǐsài, hěn shǎo kàn diànshì.",
       vn:"Chưa, gần đây tôi bận chuẩn bị cho cuộc thi tuần sau, ít khi xem tivi."}
     ],
     explain:"女：昨晚的《动物世界》你看了吗？男：没有，我最近忙着准备下周的比赛，很少看电视。问：男的最近为什么很少看电视？ → 在准备比赛。"},
    {num:13, options:["帮她找手机","找她有事情","跟女的见面"], ans:0, q:"男的为什么要给女的打电话？",
     lines:[
      {speaker:"女", pre:"奇怪，我记得把手机放进包里了，", blank:"怎么找不到了", post:"？",
       py:"Qíguài, wǒ jìde bǎ shǒujī fàng jìn bāo li le, zěnme zhǎo bu dào le?",
       vn:"Lạ thật, tôi nhớ để điện thoại vào túi rồi mà, sao tìm không thấy?"},
      {speaker:"男", pre:"别着急，", blank:"我给你打个电话，就知道在哪儿了", post:"。",
       py:"Bié zháojí, wǒ gěi nǐ dǎ ge diànhuà, jiù zhīdào zài nǎr le.",
       vn:"Đừng lo, tôi gọi cho bạn một cuộc, là biết ở đâu ngay."}
     ],
     explain:"女：奇怪，我记得把手机放进包里了，怎么找不到了？男：别着急，我给你打个电话，就知道在哪儿了。问：男的为什么要给女的打电话？ → 帮她找手机。"},
    {num:14, options:["经常骑自行车","上班不能骑车","不会骑自行车"], ans:2, q:"关于男的，可以知道什么？",
     lines:[
      {speaker:"女", pre:"", blank:"你不会骑自行车", post:"？",
       py:"Nǐ bú huì qí zìxíngchē?",
       vn:"Bạn không biết đi xe đạp à?"},
      {speaker:"男", pre:"是的，", blank:"在我们那儿很少有机会骑", post:"。",
       py:"Shì de, zài wǒmen nàr hěn shǎo yǒu jīhuì qí.",
       vn:"Đúng vậy, ở chỗ chúng tôi rất ít khi có cơ hội đi xe đạp."}
     ],
     explain:"女：你不会骑自行车？男：是的，在我们那儿很少有机会骑。问：关于男的，可以知道什么？ → 不会骑自行车。"},
    {num:15, options:["身体不好","吃得很饱","吃得很少"], ans:1, q:"关于男的，可以知道什么？",
     lines:[
      {speaker:"女", pre:"吃饭不能吃太饱，", blank:"那对你的身体不好", post:"。",
       py:"Chīfàn bù néng chī tài bǎo, nà duì nǐ de shēntǐ bù hǎo.",
       vn:"Ăn cơm không được ăn quá no, cái đó không tốt cho sức khỏe bạn đâu."},
      {speaker:"男", pre:"关于这一点，我同意，可是吃太少，", blank:"我晚上睡不着觉", post:"。",
       py:"Guānyú zhè yì diǎn, wǒ tóngyì, kěshì chī tài shǎo, wǒ wǎnshang shuì bu zháo jiào.",
       vn:"Về điểm này, tôi đồng ý, nhưng ăn ít quá thì tối tôi không ngủ được."}
     ],
     explain:"女：吃饭不能吃太饱，那对你的身体不好。男：关于这一点，我同意，可是吃太少，我晚上睡不着觉。问：关于男的，可以知道什么？ → 吃得很饱。"},
    {num:16, options:["喜欢照相","长得很矮","长得很高"], ans:1, q:"男的小时候怎么样？",
     lines:[
      {speaker:"女", pre:"", blank:"这是你小时候的照片", post:"？",
       py:"Zhè shì nǐ xiǎoshíhou de zhàopiàn?",
       vn:"Đây là ảnh hồi nhỏ của bạn à?"},
      {speaker:"男", pre:"是，", blank:"我小时候比较矮", post:"。",
       py:"Shì, wǒ xiǎoshíhou bǐjiào ǎi.",
       vn:"Đúng, hồi nhỏ tôi khá thấp."},
      {speaker:"女", pre:"", blank:"你现在有一米九吗", post:"？",
       py:"Nǐ xiànzài yǒu yì mǐ jiǔ ma?",
       vn:"Bây giờ bạn cao một mét chín rồi à?"},
      {speaker:"男", pre:"一米九一，", blank:"我都不相信自己能长这么高", post:"。",
       py:"Yì mǐ jiǔ yī, wǒ dōu bù xiāngxìn zìjǐ néng zhǎng zhème gāo.",
       vn:"Một mét chín mươi mốt, tôi còn không tin mình có thể cao đến thế."}
     ],
     explain:"女：这是你小时候的照片？男：是，我小时候比较矮。女：你现在有一米九吗？男：一米九一，我都不相信自己能长这么高。问：男的小时候怎么样？ → 长得很矮。"},
    {num:17, options:["她是外地人","买票的人多","开门比较晚"], ans:1, q:"女的为什么买票花了很长时间？",
     lines:[
      {speaker:"男", pre:"", blank:"你怎么买票买了这么久", post:"？",
       py:"Nǐ zěnme mǎi piào mǎile zhème jiǔ?",
       vn:"Sao bạn mua vé lâu thế?"},
      {speaker:"女", pre:"", blank:"节日里来动物园的人特别多", post:"。",
       py:"Jiérì li lái dòngwùyuán de rén tèbié duō.",
       vn:"Ngày lễ người đến sở thú đông lắm."},
      {speaker:"男", pre:"怎么那么多人啊？", blank:"我们的票买到了吗", post:"？",
       py:"Zěnme nàme duō rén a? Wǒmen de piào mǎidào le ma?",
       vn:"Sao đông người thế? Vé của chúng ta mua được chưa?"},
      {speaker:"女", pre:"买到了，今天不但来了很多北京人，", blank:"而且还有很多外地人", post:"。",
       py:"Mǎidào le, jīntiān búdàn láile hěn duō Běijīngrén, érqiě hái yǒu hěn duō wàidìrén.",
       vn:"Mua được rồi, hôm nay không những đến rất nhiều người Bắc Kinh, mà còn có rất nhiều người ngoại tỉnh."}
     ],
     explain:"男：你怎么买票买了这么久？女：节日里来动物园的人特别多。男：怎么那么多人啊？我们的票买到了吗？女：买到了，今天不但来了很多北京人，而且还有很多外地人。问：女的为什么买票花了很长时间？ → 买票的人多。"},
    {num:18, options:["去体育馆","洗澡","洗车"], ans:1, q:"女的现在要做什么？",
     lines:[
      {speaker:"女", pre:"", blank:"今天我们还去国家体育馆吗", post:"？",
       py:"Jīntiān wǒmen hái qù guójiā tǐyùguǎn ma?",
       vn:"Hôm nay chúng ta còn đi nhà thi đấu quốc gia không?"},
      {speaker:"男", pre:"只要你不累，", blank:"我们就去", post:"。",
       py:"Zhǐyào nǐ bú lèi, wǒmen jiù qù.",
       vn:"Chỉ cần bạn không mệt, chúng ta sẽ đi."},
      {speaker:"女", pre:"那你等我一会儿，", blank:"我先洗个澡", post:"。",
       py:"Nà nǐ děng wǒ yíhuìr, wǒ xiān xǐ ge zǎo.",
       vn:"Vậy bạn đợi tôi một chút, tôi tắm cái đã."},
      {speaker:"男", pre:"行，", blank:"我去洗车", post:"。",
       py:"Xíng, wǒ qù xǐ chē.",
       vn:"Được, tôi đi rửa xe."}
     ],
     explain:"女：今天我们还去国家体育馆吗？男：只要你不累，我们就去。女：那你等我一会儿，我先洗个澡。男：行，我去洗车。问：女的现在要做什么？ → 洗澡。"},
    {num:19, options:["羊肉","牛肉","鱼"], ans:0, q:"那家饭馆的什么很有名？",
     lines:[
      {speaker:"男", pre:"听说这家饭馆的羊肉非常有名，", blank:"要不要来一盘", post:"？",
       py:"Tīngshuō zhè jiā fànguǎn de yángròu fēicháng yǒumíng, yào bu yào lái yì pán?",
       vn:"Nghe nói thịt cừu của nhà hàng này rất nổi tiếng, có muốn gọi một đĩa không?"},
      {speaker:"女", pre:"我不吃牛羊肉，", blank:"有没有别的菜", post:"？",
       py:"Wǒ bù chī niú yángròu, yǒu méiyǒu biéde cài?",
       vn:"Tôi không ăn thịt bò thịt cừu, có món khác không?"},
      {speaker:"男", pre:"我看看菜单，", blank:"你看这个鱼怎么样", post:"？",
       py:"Wǒ kànkan càidān, nǐ kàn zhège yú zěnme yàng?",
       vn:"Tôi xem thực đơn, bạn xem con cá này thế nào?"},
      {speaker:"女", pre:"行，", blank:"只要你喜欢，我们就点", post:"。",
       py:"Xíng, zhǐyào nǐ xǐhuan, wǒmen jiù diǎn.",
       vn:"Được, chỉ cần bạn thích, chúng ta gọi món này."}
     ],
     explain:"男：听说这家饭馆的羊肉非常有名，要不要来一盘？女：我不吃牛羊肉，有没有别的菜？男：我看看菜单，你看这个鱼怎么样？女：行，只要你喜欢，我们就点。问：那家饭馆的什么很有名？ → 羊肉。"},
    {num:20, options:["去学习了","生病了","工作不认真"], ans:0, q:"小周为什么没来上班？",
     lines:[
      {speaker:"男", pre:"奇怪，这段时间怎么没看见小周来上班？", blank:"她病了吗", post:"？",
       py:"Qíguài, zhè duàn shíjiān zěnme méi kànjiàn Xiǎo Zhōu lái shàngbān? Tā bìng le ma?",
       vn:"Lạ thật, dạo này sao không thấy Tiểu Chu đi làm nhỉ? Cô ấy ốm à?"},
      {speaker:"女", pre:"你不知道吗？", blank:"公司已经送她去外地学习了", post:"。",
       py:"Nǐ bù zhīdào ma? Gōngsī yǐjīng sòng tā qù wàidì xuéxí le.",
       vn:"Bạn không biết à? Công ty đã cử cô ấy đi học ở nơi khác rồi."},
      {speaker:"男", pre:"是吗？", blank:"她有这么好的机会啊", post:"。",
       py:"Shì ma? Tā yǒu zhème hǎo de jīhuì a.",
       vn:"Vậy à? Cô ấy có cơ hội tốt vậy đấy."},
      {speaker:"女", pre:"小周工作认真，", blank:"经理当然让她去", post:"。",
       py:"Xiǎo Zhōu gōngzuò rènzhēn, jīnglǐ dāngrán ràng tā qù.",
       vn:"Tiểu Chu làm việc nghiêm túc, giám đốc đương nhiên cho cô ấy đi."}
     ],
     explain:"男：奇怪，这段时间怎么没看见小周来上班？她病了吗？女：你不知道吗？公司已经送她去外地学习了。男：是吗？她有这么好的机会啊。女：小周工作认真，经理当然让她去。问：小周为什么没来上班？ → 去学习了。"}
  ]
};
