// ══════════════════════════════════════════
// DATA — Bài 11: 他比我大三岁
// ══════════════════════════════════════════
var vocabData = [
  {
    "n": 1,
    "zh": "唱歌",
    "py": "chàng gē",
    "pos": "Động từ",
    "vn": "hát, ca hát",
    "hv": "xướng ca",
    "em": "🎤",
    "lesson": 1,
    "ex_zh": "昨天和你一起唱歌的人是谁？",
    "ex_py": "Zuótiān hé nǐ yìqǐ chàng gē de rén shì shéi?",
    "ex_vn": "Người hôm qua cùng hát karaoke với bạn là ai thế?",
    "exList": [
      {
        "zh": "昨天和你一起唱歌的人是谁？",
        "py": "Zuótiān hé nǐ yìqǐ chàng gē de rén shì shéi?",
        "vn": "Người hôm qua cùng hát karaoke với bạn là ai thế?"
      },
      {
        "zh": "她唱歌唱得非常好。",
        "py": "Tā chàng gē chàng de fēicháng hǎo.",
        "vn": "Cô ấy hát rất hay."
      },
      {
        "zh": "我们一起去唱歌吧。",
        "py": "Wǒmen yìqǐ qù chàng gē ba.",
        "vn": "Chúng ta cùng đi hát đi."
      }
    ],
    "hanzi": [
      {
        "c": "唱",
        "p": "chàng",
        "type": "左右结构 · Trái-phải",
        "st": 11,
        "ord": "口 (khẩu) trái → 昌 (xương) phải",
        "rad": "口 (khẩu – miệng)",
        "mean": "hát",
        "tip": "Bộ 口 (miệng) → dùng miệng cất tiếng HÁT.",
        "cf": "倡 (chàng – \"đề xướng\")",
        "w": "唱歌 / 唱得好"
      },
      {
        "c": "歌",
        "p": "gē",
        "type": "左右结构 · Trái-phải",
        "st": 14,
        "ord": "哥 (ca) trái → 欠 (khiếm) phải",
        "rad": "欠 (khiếm – ngáp/thở)",
        "mean": "bài hát",
        "tip": "哥 (âm thanh lặp) + 欠 (miệng mở ra) → cất tiếng ngân nga = BÀI HÁT.",
        "cf": "哥 (gē – \"anh trai\", đã học Bài 10)",
        "w": "唱歌 / 一首歌"
      }
    ],
    "colloFull": [
      {
        "zh": "会唱歌",
        "py": "huì chàng gē",
        "vn": "biết hát"
      },
      {
        "zh": "喜欢唱歌",
        "py": "xǐhuan chàng gē",
        "vn": "thích hát"
      },
      {
        "zh": "一起唱歌",
        "py": "yìqǐ chàng gē",
        "vn": "cùng hát"
      },
      {
        "zh": "唱歌跳舞",
        "py": "chàng gē tiàowǔ",
        "vn": "hát hò nhảy múa"
      }
    ],
    "patterns": [
      {
        "s": "会 + 唱歌",
        "m": "Biết hát — 会 là kỹ năng học được"
      },
      {
        "s": "唱歌 là từ ly hợp, giống 跳舞 · 上班"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Chị tôi vừa biết hát vừa biết múa.",
        "answer": "我姐姐会唱歌，也会跳舞。",
        "answerPy": "Wǒ jiějie huì chànggē, yě huì tiàowǔ.",
        "note": "唱歌 · 跳舞 đều là từ ly hợp.",
        "pair": "也 + V"
      },
      {
        "promptLang": "vi",
        "prompt": "Tối nay chúng ta cùng đi hát nhé.",
        "answer": "今天晚上我们一起去唱歌吧。",
        "answerPy": "Jīntiān wǎnshang wǒmen yìqǐ qù chànggē ba.",
        "note": "吧 dùng khi rủ rê.",
        "pair": "一起 + V"
      }
    ]
  },
  {
    "n": 2,
    "zh": "男",
    "py": "nán",
    "pos": "Danh từ / Tính từ",
    "vn": "nam, con trai, bạn trai",
    "hv": "nam",
    "em": "👦",
    "lesson": 1,
    "ex_zh": "是不是男朋友？",
    "ex_py": "Shìbushì nán péngyou?",
    "ex_vn": "Có phải bạn trai không?",
    "exList": [
      {
        "zh": "是不是男朋友？",
        "py": "Shìbushì nán péngyou?",
        "vn": "Có phải bạn trai không?"
      },
      {
        "zh": "这个班男学生比较多。",
        "py": "Zhège bān nán xuésheng bǐjiào duō.",
        "vn": "Lớp này học sinh nam khá nhiều."
      },
      {
        "zh": "他是我男朋友。",
        "py": "Tā shì wǒ nán péngyou.",
        "vn": "Anh ấy là bạn trai tôi."
      }
    ],
    "hanzi": [
      {
        "c": "男",
        "p": "nán",
        "type": "上下结构 · Trên-dưới",
        "st": 7,
        "ord": "田 (điền) trên → 力 (lực) dưới",
        "rad": "田 (điền – ruộng)",
        "mean": "nam, con trai",
        "tip": "Ruộng 田 + sức lực 力 → người đàn ông ra đồng dùng sức cày cấy = NAM GIỚI.",
        "cf": "画 (huà – \"vẽ\")",
        "w": "男朋友 / 男人 / 男生"
      }
    ],
    "colloFull": [
      {
        "zh": "男孩子",
        "py": "nán háizi",
        "vn": "con trai"
      },
      {
        "zh": "男的",
        "py": "nán de",
        "vn": "người nam"
      },
      {
        "zh": "男服务员",
        "py": "nán fúwùyuán",
        "vn": "nhân viên nam"
      },
      {
        "zh": "男同学",
        "py": "nán tóngxué",
        "vn": "bạn nam"
      }
    ],
    "patterns": [
      {
        "s": "男 + danh từ",
        "m": "Người nam: 男孩子 · 男同学"
      },
      {
        "s": "男 ↔ 女 — nam và nữ"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Nhân viên nam kia là anh trai tôi.",
        "answer": "那个男服务员是我哥哥。",
        "answerPy": "Nàge nán fúwùyuán shì wǒ gēge.",
        "note": "男 + danh từ — người nam.",
        "pair": "是……"
      },
      {
        "promptLang": "vi",
        "prompt": "Trong phòng học có mười bạn nam.",
        "answer": "教室里有十个男同学。",
        "answerPy": "Jiàoshì li yǒu shí ge nán tóngxué.",
        "note": "男 ↔ 女 — nam và nữ.",
        "pair": "nơi chốn + 有 + N"
      }
    ]
  },
  {
    "n": 3,
    "zh": "女",
    "py": "nǚ",
    "pos": "Danh từ / Tính từ",
    "vn": "nữ, con gái",
    "hv": "nữ",
    "em": "👧",
    "lesson": 2,
    "ex_zh": "左边这个看报纸的女孩子是你姐姐吗？",
    "ex_py": "Zuǒbiān zhège kàn bàozhǐ de nǚháizi shì nǐ jiějie ma?",
    "ex_vn": "Cô gái xem báo ở bên trái có phải chị gái bạn không?",
    "exList": [
      {
        "zh": "左边这个看报纸的女孩子是你姐姐吗？",
        "py": "Zuǒbiān zhège kàn bàozhǐ de nǚháizi shì nǐ jiějie ma?",
        "vn": "Cô gái xem báo ở bên trái có phải chị gái bạn không?"
      },
      {
        "zh": "她是一个女老师。",
        "py": "Tā shì yí ge nǚ lǎoshī.",
        "vn": "Cô ấy là một giáo viên nữ."
      },
      {
        "zh": "这个班女学生比较多。",
        "py": "Zhège bān nǚ xuésheng bǐjiào duō.",
        "vn": "Lớp này học sinh nữ khá nhiều."
      }
    ],
    "hanzi": [
      {
        "c": "女",
        "p": "nǚ",
        "type": "独体字 · Tượng hình",
        "st": 3,
        "ord": "ㄋ→一→一 (biến thể)",
        "rad": "女 (nữ – tự thành bộ)",
        "mean": "nữ, con gái",
        "tip": "Hình người phụ nữ ngồi quỳ khoanh tay cách điệu → \"NỮ\".",
        "cf": "安 (ān – \"an\", thêm mái nhà)",
        "w": "女孩子 / 女儿 / 女朋友"
      }
    ],
    "colloFull": [
      {
        "zh": "女孩子",
        "py": "nǚ háizi",
        "vn": "con gái"
      },
      {
        "zh": "女的",
        "py": "nǚ de",
        "vn": "người nữ"
      },
      {
        "zh": "女老师",
        "py": "nǚ lǎoshī",
        "vn": "cô giáo"
      },
      {
        "zh": "女同学",
        "py": "nǚ tóngxué",
        "vn": "bạn nữ"
      }
    ],
    "patterns": [
      {
        "s": "女 + danh từ",
        "m": "Người nữ: 女孩子 · 女老师"
      },
      {
        "s": "女 là chữ tượng hình — vẽ người phụ nữ ngồi"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Cô giáo mới của chúng tôi cực kỳ tốt.",
        "answer": "我们的新女老师非常好。",
        "answerPy": "Wǒmen de xīn nǚ lǎoshī fēicháng hǎo.",
        "note": "女 + danh từ — người nữ.",
        "pair": "非常 + Adj"
      },
      {
        "promptLang": "vi",
        "prompt": "Cô bé kia là con gái của chị tôi.",
        "answer": "那个女孩子是我姐姐的女儿。",
        "answerPy": "Nàge nǚ háizi shì wǒ jiějie de nǚ'ér.",
        "note": "女孩子 — bé gái.",
        "pair": "是……的"
      }
    ]
  },
  {
    "n": 4,
    "zh": "孩子",
    "py": "háizi",
    "pos": "Danh từ",
    "vn": "trẻ em, đứa con",
    "hv": "hài tử",
    "em": "🧒",
    "lesson": 2,
    "ex_zh": "那个看报纸的女孩子是你姐姐吗？",
    "ex_py": "Nàge kàn bàozhǐ de nǚháizi shì nǐ jiějie ma?",
    "ex_vn": "Cô gái xem báo kia có phải chị gái bạn không?",
    "exList": [
      {
        "zh": "那个看报纸的女孩子是你姐姐吗？",
        "py": "Nàge kàn bàozhǐ de nǚháizi shì nǐ jiějie ma?",
        "vn": "Cô gái xem báo kia có phải chị gái bạn không?"
      },
      {
        "zh": "我家有两个孩子。",
        "py": "Wǒ jiā yǒu liǎng ge háizi.",
        "vn": "Nhà tôi có hai đứa con."
      },
      {
        "zh": "这个孩子很聪明。",
        "py": "Zhège háizi hěn cōngming.",
        "vn": "Đứa trẻ này rất thông minh."
      }
    ],
    "hanzi": [
      {
        "c": "孩",
        "p": "hái",
        "type": "左右结构 · Trái-phải",
        "st": 9,
        "ord": "子 (tử) trái → 亥 (hợi) phải",
        "rad": "子 (tử – con)",
        "mean": "trẻ em",
        "tip": "Bộ 子 (con) → chỉ chung TRẺ EM, con cái.",
        "cf": "该 (gāi – \"nên\", bộ 讠)",
        "w": "孩子 / 男孩 / 女孩"
      },
      {
        "c": "子",
        "p": "zi / zǐ",
        "type": "独体字 · Chữ đơn",
        "st": 3,
        "ord": "了→一",
        "rad": "子 (tử – tự thành bộ)",
        "mean": "con, hậu tố danh từ",
        "tip": "Hình đứa trẻ quấn tã → \"CON\". Cũng dùng làm hậu tố danh từ: 桌子, 儿子.",
        "cf": "孑 (jié – thiếu 1 nét)",
        "w": "孩子 / 儿子 / 桌子"
      }
    ],
    "colloFull": [
      {
        "zh": "两个孩子",
        "py": "liǎng gè háizi",
        "vn": "hai đứa con"
      },
      {
        "zh": "男孩子",
        "py": "nán háizi",
        "vn": "con trai"
      },
      {
        "zh": "孩子们",
        "py": "háizi men",
        "vn": "các cháu"
      },
      {
        "zh": "孩子的房间",
        "py": "háizi de fángjiān",
        "vn": "phòng của con"
      }
    ],
    "patterns": [
      {
        "s": "số + 个 + 孩子",
        "m": "Lượng từ của 孩子 là 个"
      },
      {
        "s": "孩子 (con, trẻ con) — 儿子 · 女儿 đều là 孩子"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Anh trai tôi có hai đứa con.",
        "answer": "我哥哥有两个孩子。",
        "answerPy": "Wǒ gēge yǒu liǎng ge háizi.",
        "note": "Lượng từ của 孩子 là 个.",
        "pair": "有 + số + M + N"
      },
      {
        "promptLang": "vi",
        "prompt": "Bọn trẻ đang chơi bóng rổ ngoài sân.",
        "answer": "孩子们正在外面打篮球呢。",
        "answerPy": "Háizimen zhèngzài wàimiàn dǎ lánqiú ne.",
        "note": "们 dùng cho người, không dùng cho vật.",
        "pair": "正在……呢"
      }
    ]
  },
  {
    "n": 5,
    "zh": "右边",
    "py": "yòubian",
    "pos": "Danh từ chỉ phương vị",
    "vn": "bên phải",
    "hv": "hữu biên",
    "em": "👉",
    "lesson": 2,
    "ex_zh": "右边写字的那个人是我哥哥。",
    "ex_py": "Yòubian xiě zì de nàge rén shì wǒ gēge.",
    "ex_vn": "Người viết chữ bên phải là anh trai tớ.",
    "exList": [
      {
        "zh": "右边写字的那个人是我哥哥。",
        "py": "Yòubian xiě zì de nàge rén shì wǒ gēge.",
        "vn": "Người viết chữ bên phải là anh trai tớ."
      },
      {
        "zh": "银行在邮局右边。",
        "py": "Yínháng zài yóujú yòubian.",
        "vn": "Ngân hàng ở bên phải bưu điện."
      },
      {
        "zh": "请往右边看。",
        "py": "Qǐng wǎng yòubian kàn.",
        "vn": "Xin hãy nhìn về bên phải."
      }
    ],
    "hanzi": [
      {
        "c": "右",
        "p": "yòu",
        "type": "半包围 · Bán bao",
        "st": 5,
        "ord": "ノ→一→口",
        "rad": "口 (khẩu – miệng)",
        "mean": "bên phải",
        "tip": "又 (bàn tay phải, đã gặp trong 对) + 口 → hướng tay phải hay dùng = BÊN PHẢI.",
        "cf": "左 (zuǒ – trái nghĩa, đã học Bài 3)",
        "w": "右边 / 左右"
      },
      {
        "c": "边",
        "p": "biān",
        "type": "半包围 · Bán bao (辶)",
        "st": 5,
        "ord": "力 → 辶 (viết sau cùng)",
        "rad": "辶 (sước – đi)",
        "mean": "bên, cạnh",
        "tip": "Đã học ở Bài 2 (旁边) — chỉ vị trí ở một BÊN nào đó.",
        "cf": "力 (lì – \"sức lực\")",
        "w": "右边 / 左边 / 旁边"
      }
    ],
    "colloFull": [
      {
        "zh": "在右边",
        "py": "zài yòubian",
        "vn": "ở bên phải"
      },
      {
        "zh": "右边的门",
        "py": "yòubian de mén",
        "vn": "cửa bên phải"
      },
      {
        "zh": "学校右边",
        "py": "xuéxiào yòubian",
        "vn": "bên phải trường"
      },
      {
        "zh": "我的右边",
        "py": "wǒ de yòubian",
        "vn": "bên phải tôi"
      }
    ],
    "patterns": [
      {
        "s": "danh từ + 右边",
        "m": "Bên phải cái gì: 学校右边"
      },
      {
        "s": "右边 · 旁边 · 外面 — đều là từ chỉ vị trí"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Bệnh viện ở bên phải trường học.",
        "answer": "医院在学校右边。",
        "answerPy": "Yīyuàn zài xuéxiào yòubian.",
        "note": "danh từ + 右边 — bên phải cái gì.",
        "pair": "在……右边"
      },
      {
        "promptLang": "vi",
        "prompt": "Phòng học của chúng tôi là cái cửa bên phải.",
        "answer": "我们的教室是右边的门。",
        "answerPy": "Wǒmen de jiàoshì shì yòubian de mén.",
        "note": "右边的 + danh từ — cái ở bên phải.",
        "pair": "是……的"
      }
    ]
  },
  {
    "n": 6,
    "zh": "比",
    "py": "bǐ",
    "pos": "Giới từ",
    "vn": "so với",
    "hv": "tỉ",
    "em": "⚖️",
    "lesson": 2,
    "ex_zh": "他比我大三岁。",
    "ex_py": "Tā bǐ wǒ dà sān suì.",
    "ex_vn": "Anh ấy lớn hơn tớ 3 tuổi.",
    "exList": [
      {
        "zh": "他比我大三岁。",
        "py": "Tā bǐ wǒ dà sān suì.",
        "vn": "Anh ấy lớn hơn tớ 3 tuổi."
      },
      {
        "zh": "今天比昨天冷。",
        "py": "Jīntiān bǐ zuótiān lěng.",
        "vn": "Hôm nay lạnh hơn hôm qua."
      },
      {
        "zh": "弟弟比我矮一点儿。",
        "py": "Dìdi bǐ wǒ ǎi yìdiǎnr.",
        "vn": "Em trai thấp hơn tôi một chút."
      }
    ],
    "hanzi": [
      {
        "c": "比",
        "p": "bǐ",
        "type": "独体字 · Chữ đơn",
        "st": 4,
        "ord": "匕→匕 (hai chữ giống nhau đứng cạnh)",
        "rad": "比 (tỉ – tự thành bộ)",
        "mean": "so với",
        "tip": "Hai người đứng cạnh nhau quay cùng hướng → đặt cạnh nhau để SO SÁNH.",
        "cf": "北 (běi – \"phía Bắc\", hai người quay lưng)",
        "w": "比较 / A比B / 对比"
      }
    ],
    "colloFull": [
      {
        "zh": "比我高",
        "py": "bǐ wǒ gāo",
        "vn": "cao hơn tôi"
      },
      {
        "zh": "比他快",
        "py": "bǐ tā kuài",
        "vn": "nhanh hơn anh ấy"
      },
      {
        "zh": "比昨天冷",
        "py": "bǐ zuótiān lěng",
        "vn": "lạnh hơn hôm qua"
      },
      {
        "zh": "不比",
        "py": "bù bǐ",
        "vn": "không hơn"
      }
    ],
    "patterns": [
      {
        "s": "A + 比 + B + tính từ",
        "m": "A hơn B: 我哥哥比我高"
      },
      {
        "s": "✗ 我比他很高 → ✓ 我比他高 — sau 比 KHÔNG dùng 很"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Anh trai tôi cao hơn tôi.",
        "answer": "我哥哥比我高。",
        "answerPy": "Wǒ gēge bǐ wǒ gāo.",
        "note": "Sau 比 KHÔNG dùng 很.",
        "pair": "A 比 B + Adj"
      },
      {
        "promptLang": "vi",
        "prompt": "Hôm nay lạnh hơn hôm qua.",
        "answer": "今天比昨天冷。",
        "answerPy": "Jīntiān bǐ zuótiān lěng.",
        "note": "Khung so sánh cơ bản nhất.",
        "pair": "A 比 B + Adj"
      }
    ]
  },
  {
    "n": 7,
    "zh": "便宜",
    "py": "piányi",
    "pos": "Tính từ",
    "vn": "rẻ",
    "hv": "tiện nghi",
    "em": "💰",
    "lesson": 3,
    "ex_zh": "西瓜比昨天便宜。",
    "ex_py": "Xīguā bǐ zuótiān piányi.",
    "ex_vn": "Dưa hấu rẻ hơn hôm qua.",
    "exList": [
      {
        "zh": "西瓜比昨天便宜。",
        "py": "Xīguā bǐ zuótiān piányi.",
        "vn": "Dưa hấu rẻ hơn hôm qua."
      },
      {
        "zh": "这儿的东西很便宜。",
        "py": "Zhèr de dōngxi hěn piányi.",
        "vn": "Đồ ở đây rất rẻ."
      },
      {
        "zh": "能不能便宜一点儿？",
        "py": "Néng bu néng piányi yìdiǎnr?",
        "vn": "Có thể rẻ hơn một chút không?"
      }
    ],
    "hanzi": [
      {
        "c": "便",
        "p": "pián / biàn",
        "type": "左右结构 · Trái-phải",
        "st": 9,
        "ord": "亻(nhân) trái → 更 (cánh) phải",
        "rad": "亻(nhân – người)",
        "mean": "rẻ (pián); tiện lợi (biàn)",
        "tip": "Người 亻 + 更 (thay đổi cho tốt hơn) → mang lại sự THUẬN TIỆN, giá cả dễ chịu.",
        "cf": "使 (shǐ – \"khiến, sai\")",
        "w": "便宜 / 方便"
      },
      {
        "c": "宜",
        "p": "yí",
        "type": "上下结构 · Trên-dưới",
        "st": 8,
        "ord": "宀 (miên) → 且 (thả)",
        "rad": "宀 (miên – mái nhà)",
        "mean": "thích hợp, rẻ",
        "tip": "便 + 宜 = vừa tiện lợi vừa hợp túi tiền = RẺ.",
        "cf": "宣 (xuān – \"tuyên bố\")",
        "w": "便宜 / 适宜"
      }
    ],
    "colloFull": [
      {
        "zh": "很便宜",
        "py": "hěn piányi",
        "vn": "rất rẻ"
      },
      {
        "zh": "不便宜",
        "py": "bù piányi",
        "vn": "không rẻ"
      },
      {
        "zh": "便宜一点儿",
        "py": "piányi yìdiǎnr",
        "vn": "rẻ một chút"
      },
      {
        "zh": "比这个便宜",
        "py": "bǐ zhège piányi",
        "vn": "rẻ hơn cái này"
      }
    ],
    "patterns": [
      {
        "s": "A + 比 + B + 便宜",
        "m": "A rẻ hơn B"
      },
      {
        "s": "便宜 ↔ 贵 — rẻ và đắt"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Dưa hấu ở đây rẻ hơn ở kia.",
        "answer": "这儿的西瓜比那儿的便宜。",
        "answerPy": "Zhèr de xīguā bǐ nàr de piányi.",
        "note": "便宜 ↔ 贵 — rẻ và đắt.",
        "pair": "A 比 B + Adj"
      },
      {
        "promptLang": "vi",
        "prompt": "Đắt quá, rẻ một chút được không?",
        "answer": "太贵了，便宜一点儿可以吗？",
        "answerPy": "Tài guì le, piányi yìdiǎnr kěyǐ ma?",
        "note": "一点儿 đứng SAU tính từ.",
        "pair": "可以……吗？"
      }
    ]
  },
  {
    "n": 8,
    "zh": "说话",
    "py": "shuōhuà",
    "pos": "Động từ",
    "vn": "nói chuyện",
    "hv": "thuyết thoại",
    "em": "💬",
    "lesson": 4,
    "ex_zh": "前面说话的那个人就是我的汉语老师。",
    "ex_py": "Qiánmiàn shuōhuà de nàge rén jiùshì wǒ de Hànyǔ lǎoshī.",
    "ex_vn": "Người nói chuyện phía trước chính là giáo viên tiếng Trung của chúng tớ.",
    "exList": [
      {
        "zh": "前面说话的那个人就是我的汉语老师。",
        "py": "Qiánmiàn shuōhuà de nàge rén jiùshì wǒ de Hànyǔ lǎoshī.",
        "vn": "Người nói chuyện phía trước chính là giáo viên tiếng Trung của chúng tớ."
      },
      {
        "zh": "他正在跟朋友说话。",
        "py": "Tā zhèngzài gēn péngyou shuōhuà.",
        "vn": "Anh ấy đang nói chuyện với bạn."
      },
      {
        "zh": "请不要大声说话。",
        "py": "Qǐng bú yào dàshēng shuōhuà.",
        "vn": "Xin đừng nói chuyện to tiếng."
      }
    ],
    "hanzi": [
      {
        "c": "说",
        "p": "shuō",
        "type": "左右结构 · Trái-phải",
        "st": 9,
        "ord": "讠(ngôn) trái → 兑 (đoài) phải",
        "rad": "讠(ngôn – lời nói)",
        "mean": "nói",
        "tip": "Bộ 讠(lời nói) → hành động dùng miệng phát ra lời = NÓI.",
        "cf": "脱 (tuō – \"cởi\", bộ 月)",
        "w": "说话 / 说汉语 / 听说"
      },
      {
        "c": "话",
        "p": "huà",
        "type": "左右结构 · Trái-phải",
        "st": 8,
        "ord": "讠(ngôn) trái → 舌 (thiệt) phải",
        "rad": "讠(ngôn – lời nói)",
        "mean": "lời nói",
        "tip": "Lời nói 讠 phát ra từ lưỡi 舌 → LỜI NÓI, câu chuyện.",
        "cf": "活 (huó – \"sống\", bộ 氵)",
        "w": "说话 / 电话 / 对话"
      }
    ],
    "colloFull": [
      {
        "zh": "别说话",
        "py": "bié shuōhuà",
        "vn": "đừng nói chuyện"
      },
      {
        "zh": "和他说话",
        "py": "hé tā shuōhuà",
        "vn": "nói chuyện với anh ấy"
      },
      {
        "zh": "说话很快",
        "py": "shuōhuà hěn kuài",
        "vn": "nói rất nhanh"
      },
      {
        "zh": "爱说话",
        "py": "ài shuōhuà",
        "vn": "thích nói chuyện"
      }
    ],
    "patterns": [
      {
        "s": "和 + người + 说话",
        "m": "Nói chuyện với ai"
      },
      {
        "s": "说话 là từ ly hợp: 说了很长时间话"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Thầy đang giảng bài, các em đừng nói chuyện.",
        "answer": "老师正在上课，你们别说话。",
        "answerPy": "Lǎoshī zhèngzài shàngkè, nǐmen bié shuōhuà.",
        "note": "别 dùng khi khuyên ai đừng làm gì.",
        "pair": "别 + V"
      },
      {
        "promptLang": "vi",
        "prompt": "Anh ấy nói nhanh quá, tôi nghe không hiểu.",
        "answer": "他说话太快了，我没听懂。",
        "answerPy": "Tā shuōhuà tài kuài le, wǒ méi tīngdǒng.",
        "note": "说话 là từ ly hợp.",
        "pair": "太……了"
      }
    ]
  },
  {
    "n": 9,
    "zh": "可能",
    "py": "kěnéng",
    "pos": "Trợ động từ",
    "vn": "có thể, có lẽ",
    "hv": "khả năng",
    "em": "🤔",
    "lesson": 4,
    "ex_zh": "你可能不认识他。",
    "ex_py": "Nǐ kěnéng bú rènshi tā.",
    "ex_vn": "Có thể bạn không quen thầy ấy đâu.",
    "exList": [
      {
        "zh": "你可能不认识他。",
        "py": "Nǐ kěnéng bú rènshi tā.",
        "vn": "Có thể bạn không quen thầy ấy đâu."
      },
      {
        "zh": "明天可能会下雨。",
        "py": "Míngtiān kěnéng huì xià yǔ.",
        "vn": "Ngày mai có lẽ sẽ mưa."
      },
      {
        "zh": "他可能已经到了。",
        "py": "Tā kěnéng yǐjīng dào le.",
        "vn": "Có lẽ anh ấy đã đến rồi."
      }
    ],
    "hanzi": [
      {
        "c": "可",
        "p": "kě",
        "type": "独体字 · Chữ đơn",
        "st": 5,
        "ord": "一→丨→乛→一→亅",
        "rad": "口 (khẩu)",
        "mean": "có thể, được",
        "tip": "Đã học ở Bài 5 (可以) — miệng 口 nói lời chấp thuận.",
        "cf": "河 (hé – \"sông\")",
        "w": "可能 / 可以"
      },
      {
        "c": "能",
        "p": "néng",
        "type": "左右结构 · Trái-phải",
        "st": 10,
        "ord": "厶→月 trái → 匕匕 phải",
        "rad": "月 (nhục – thịt, biến thể)",
        "mean": "năng lực, có thể",
        "tip": "可 (được phép) + 能 (năng lực) = có KHẢ NĂNG xảy ra = CÓ THỂ, CÓ LẼ.",
        "cf": "态 (tài – \"thái độ\")",
        "w": "可能 / 能不能 / 可能性"
      }
    ],
    "colloFull": [
      {
        "zh": "可能来",
        "py": "kěnéng lái",
        "vn": "có thể đến"
      },
      {
        "zh": "可能不去",
        "py": "kěnéng bú qù",
        "vn": "có thể không đi"
      },
      {
        "zh": "很可能",
        "py": "hěn kěnéng",
        "vn": "rất có thể"
      },
      {
        "zh": "可能在家",
        "py": "kěnéng zài jiā",
        "vn": "có thể ở nhà"
      }
    ],
    "patterns": [
      {
        "s": "可能 + động từ",
        "m": "Có lẽ sẽ: 他可能不来了"
      },
      {
        "s": "可能 (đoán) ≠ 可以 (được phép) — hai từ khác hẳn nhau"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Bên ngoài mưa rồi, anh ấy có thể không đến.",
        "answer": "外面下雨了，他可能不来了。",
        "answerPy": "Wàimiàn xià yǔ le, tā kěnéng bù lái le.",
        "note": "可能 (đoán) ≠ 可以 (được phép).",
        "pair": "可能 + V"
      },
      {
        "promptLang": "vi",
        "prompt": "Giờ này thầy có thể đang ở trong phòng học.",
        "answer": "现在老师可能在教室里。",
        "answerPy": "Xiànzài lǎoshī kěnéng zài jiàoshì li.",
        "note": "可能 đứng TRƯỚC động từ.",
        "pair": "可能 + 在……"
      }
    ]
  },
  {
    "n": 10,
    "zh": "去年",
    "py": "qùnián",
    "pos": "Danh từ chỉ thời gian",
    "vn": "năm ngoái",
    "hv": "khứ niên",
    "em": "📅",
    "lesson": 4,
    "ex_zh": "是去年来的。",
    "ex_py": "Shì qùnián lái de.",
    "ex_vn": "Đến từ năm ngoái.",
    "exList": [
      {
        "zh": "是去年来的。",
        "py": "Shì qùnián lái de.",
        "vn": "Đến từ năm ngoái."
      },
      {
        "zh": "我去年去过北京。",
        "py": "Wǒ qùnián qùguo Běijīng.",
        "vn": "Năm ngoái tôi đã đi Bắc Kinh."
      },
      {
        "zh": "去年这个时候很冷。",
        "py": "Qùnián zhège shíhou hěn lěng.",
        "vn": "Năm ngoái vào thời điểm này rất lạnh."
      }
    ],
    "hanzi": [
      {
        "c": "去",
        "p": "qù",
        "type": "上下结构 · Trên-dưới",
        "st": 5,
        "ord": "土→厶",
        "rad": "厶 (mô – tự riêng)",
        "mean": "đi, qua (thời gian)",
        "tip": "Hình người bước ra khỏi cửa → nghĩa \"ĐI\"; ghép với 年 chỉ năm ĐÃ QUA.",
        "cf": "丢 (diū – \"làm mất\")",
        "w": "去年 / 去哪儿 / 出去"
      },
      {
        "c": "年",
        "p": "nián",
        "type": "独体字 · Tượng hình",
        "st": 6,
        "ord": "丿→一→一→一→丨→一",
        "rad": "干 (can)",
        "mean": "năm",
        "tip": "Hình bó lúa chín được gánh trên vai → mỗi mùa lúa chín là một NĂM.",
        "cf": "午 (wǔ – \"buổi trưa\")",
        "w": "去年 / 今年 / 明年"
      }
    ],
    "colloFull": [
      {
        "zh": "去年冬天",
        "py": "qùnián dōng tiān",
        "vn": "mùa đông năm ngoái"
      },
      {
        "zh": "去年来的",
        "py": "qùnián lái de",
        "vn": "đến từ năm ngoái"
      },
      {
        "zh": "比去年",
        "py": "bǐ qùnián",
        "vn": "so với năm ngoái"
      },
      {
        "zh": "去年九月",
        "py": "qùnián jiǔ yuè",
        "vn": "tháng chín năm ngoái"
      }
    ],
    "patterns": [
      {
        "s": "去年 + việc gì",
        "m": "Năm ngoái làm gì: 去年我去中国了"
      },
      {
        "s": "去年 · 今年 · 明年 — ba mốc năm đi liền một bộ"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Năm ngoái tôi đi Bắc Kinh du lịch.",
        "answer": "去年我去北京旅游了。",
        "answerPy": "Qùnián wǒ qù Běijīng lǚyóu le.",
        "note": "去年 · 今年 · 明年 đi liền một bộ.",
        "pair": "……了"
      },
      {
        "promptLang": "vi",
        "prompt": "Năm nay tôi bận hơn năm ngoái.",
        "answer": "今年我比去年忙。",
        "answerPy": "Jīnnián wǒ bǐ qùnián máng.",
        "note": "Sau 比 KHÔNG dùng 很.",
        "pair": "A 比 B + Adj"
      }
    ]
  },
  {
    "n": 11,
    "zh": "姓",
    "py": "xìng",
    "pos": "Động từ / Danh từ",
    "vn": "họ, mang họ",
    "hv": "tính",
    "em": "🪪",
    "lesson": 4,
    "ex_zh": "他姓王。",
    "ex_py": "Tā xìng Wáng.",
    "ex_vn": "Thầy ấy họ Vương.",
    "exList": [
      {
        "zh": "他姓王。",
        "py": "Tā xìng Wáng.",
        "vn": "Thầy ấy họ Vương."
      },
      {
        "zh": "请问您贵姓？",
        "py": "Qǐngwèn nín guìxìng?",
        "vn": "Xin hỏi quý danh của ngài là gì ạ?"
      },
      {
        "zh": "我姓阮，叫阮文。",
        "py": "Wǒ xìng Ruǎn, jiào Ruǎn Wén.",
        "vn": "Tôi họ Nguyễn, tên là Nguyễn Văn."
      }
    ],
    "hanzi": [
      {
        "c": "姓",
        "p": "xìng",
        "type": "左右结构 · Trái-phải",
        "st": 8,
        "ord": "女 (nữ) trái → 生 (sinh) phải",
        "rad": "女 (nữ – phụ nữ)",
        "mean": "họ",
        "tip": "女 (mẹ) + 生 (sinh ra) → xưa con cái mang HỌ theo dòng mẹ.",
        "cf": "性 (xìng – \"tính cách\", bộ 忄)",
        "w": "姓王 / 贵姓 / 姓名"
      }
    ],
    "colloFull": [
      {
        "zh": "我姓王",
        "py": "wǒ xìng wáng",
        "vn": "tôi họ Vương"
      },
      {
        "zh": "你姓什么",
        "py": "nǐ xìng shénme",
        "vn": "bạn họ gì"
      },
      {
        "zh": "姓什么",
        "py": "xìng shénme",
        "vn": "họ gì"
      },
      {
        "zh": "他姓李",
        "py": "tā xìng Lǐ",
        "vn": "anh ấy họ Lý"
      }
    ],
    "patterns": [
      {
        "s": "Sub + 姓 + họ",
        "m": "姓 là ĐỘNG TỪ: 我姓王 (không nói 我是姓王)"
      },
      {
        "s": "姓 có bộ 女 — thời xưa họ truyền theo mẹ"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tôi họ Vương, bạn họ gì?",
        "answer": "我姓王，你姓什么？",
        "answerPy": "Wǒ xìng Wáng, nǐ xìng shénme?",
        "note": "姓 là động từ, không thêm 是.",
        "pair": "Sub + 姓 + họ"
      },
      {
        "promptLang": "vi",
        "prompt": "Cô giáo mới của chúng tôi họ Lý.",
        "answer": "我们的新女老师姓李。",
        "answerPy": "Wǒmen de xīn nǚ lǎoshī xìng Lǐ.",
        "note": "✗ 我是姓王 → ✓ 我姓王.",
        "pair": "Sub + 姓 + họ"
      }
    ]
  }
];

const wuData = [
  {img:'🎤',label:'唱歌',py:'chàng gē',letter:'A'},
  {img:'👦',label:'男',py:'nán',letter:'B'},
  {img:'👧',label:'女',py:'nǚ',letter:'C'},
  {img:'🧒',label:'孩子',py:'háizi',letter:'D'},
  {img:'💬',label:'说话',py:'shuōhuà',letter:'E'},
  {img:'🪪',label:'姓',py:'xìng',letter:'F'},
];

var dialogData = [
  {scene:'在歌厅 · Trong phòng hát Karaoke',
   preQuiz:[
     {q:'昨天和王方一起唱歌的人是谁？',opts:['男朋友','一个朋友，同学介绍的','她哥哥'],ans:1},
     {q:'她认识这个朋友多久了？',opts:['很久了','昨天才第一次见','一个月'],ans:1},
   ],
   lines:[
     {sp:0,zh:'王方，昨天和你一起唱歌的人是谁？',py:'Wáng Fāng, zuótiān hé nǐ yìqǐ chàng gē de rén shì shéi?',vn:'Vương Phương, người hôm qua cùng hát karaoke với bạn là ai thế?'},
     {sp:1,zh:'一个朋友。',py:'Yí ge péngyou.',vn:'Một người bạn thôi.'},
     {sp:0,zh:'什么朋友？是不是男朋友？',py:'Shénme péngyou? Shìbushì nán péngyou?',vn:'Bạn gì thế? Có phải bạn trai không?'},
     {sp:1,zh:'不是不是，我同学介绍的，昨天第一次见。',py:'Bú shì bú shì, wǒ tóngxué jièshào de, zuótiān dì yī cì jiàn.',vn:'Không phải, không phải đâu, là bạn học tớ giới thiệu, hôm qua mới gặp lần đầu.'},
   ]},
  {scene:'在宿舍 · Trong phòng ký túc xá',
   preQuiz:[
     {q:'看报纸的女孩子是谁？',opts:['姐姐','妹妹','同学'],ans:0},
     {q:'写字的人是谁？',opts:['哥哥','弟弟','朋友'],ans:0},
     {q:'哥哥比女的大几岁？',opts:['两岁','三岁','四岁'],ans:1},
   ],
   lines:[
     {sp:0,zh:'左边这个看报纸的女孩子是你姐姐吗？',py:'Zuǒbiān zhège kàn bàozhǐ de nǚháizi shì nǐ jiějie ma?',vn:'Cô gái xem báo ở bên trái có phải chị gái bạn không?'},
     {sp:1,zh:'是，右边写字的那个人是我哥哥。',py:'Shì, yòubian xiě zì de nàge rén shì wǒ gēge.',vn:'Đúng vậy, còn người viết chữ bên phải là anh trai tớ.'},
     {sp:0,zh:'你哥哥多大？',py:'Nǐ gēge duō dà?',vn:'Anh trai bạn bao nhiêu tuổi rồi?'},
     {sp:1,zh:'25岁，他比我大三岁。',py:'Èrshíwǔ suì, tā bǐ wǒ dà sān suì.',vn:'25 tuổi, anh ấy lớn hơn tớ 3 tuổi.'},
   ]},
  {scene:'在商店 · Ở cửa hàng',
   preQuiz:[
     {q:'今天的西瓜多少钱一斤？',opts:['两块五','三块五','四块五'],ans:1},
     {q:'今天的西瓜和昨天比怎么样？',opts:['比昨天便宜','比昨天贵','一样'],ans:0},
   ],
   lines:[
     {sp:0,zh:'今天的西瓜怎么卖？',py:'Jīntiān de xīguā zěnme mài?',vn:'Dưa hấu hôm nay bán thế nào vậy?'},
     {sp:1,zh:'三块五一斤，比昨天便宜。',py:'Sān kuài wǔ yì jīn, bǐ zuótiān piányi.',vn:'3 tệ rưỡi một cân, rẻ hơn hôm qua đấy.'},
     {sp:0,zh:'苹果也比昨天便宜一些，您来点儿吧。',py:'Píngguǒ yě bǐ zuótiān piányi yìxiē, nín lái diǎnr ba.',vn:'Táo cũng rẻ hơn hôm qua một chút, bạn mua một ít đi.'},
   ]},
  {scene:'在学校 · Ở trường học',
   preQuiz:[
     {q:'前面说话的人是谁？',opts:['汉语老师','校长','同学'],ans:0},
     {q:'这位老师是什么时候来的？',opts:['今年','去年','前年'],ans:1},
     {q:'这位老师比女的的老师大还是小？',opts:['大两岁','小两岁','一样大'],ans:1},
   ],
   lines:[
     {sp:0,zh:'前面说话的那个人就是我的汉语老师，你可能不认识他。',py:'Qiánmiàn shuōhuà de nàge rén jiùshì wǒ de Hànyǔ lǎoshī, nǐ kěnéng bú rènshi tā.',vn:'Người nói chuyện phía trước chính là giáo viên tiếng Trung của chúng tớ, có thể bạn không quen thầy ấy đâu.'},
     {sp:1,zh:'是新来的汉语老师吗？',py:'Shì xīn lái de Hànyǔ lǎoshī ma?',vn:'Là giáo viên tiếng Trung mới đến à?'},
     {sp:0,zh:'是去年来的，他姓王，28岁。他比我们老师小两岁。',py:'Shì qùnián lái de, tā xìng Wáng, èrshíbā suì. Tā bǐ wǒmen lǎoshī xiǎo liǎng suì.',vn:'Đến từ năm ngoái, thầy ấy họ Vương, 28 tuổi. Thầy ấy trẻ hơn giáo viên của các bạn 2 tuổi đấy.'},
   ]},
];

// ══════════════════════════════════════════
// PHẦN 1 · GHÉP TỪ (Collocation)
// ══════════════════════════════════════════
var matchData = [
  {left:'唱',right:'歌'},
  {left:'说',right:'话'},
  {left:'去',right:'年'},
  {left:'贵',right:'姓'},
  {left:'便',right:'宜'},
  {left:'女',right:'孩子'},
];

// ══════════════════════════════════════════
// PHẦN 2 · NGHE — tình huống MỚI: giờ ăn trưa ở công ty, bàn về đồng nghiệp mới.
// ══════════════════════════════════════════
var listenData = {
  type: 'workbook',
  audio: '/audio/bai-11/listen-full.mp3',
  dictation: [
    {num:1, lines:[
      {pre:'昨天我和朋友们一起', blank:'去唱歌了', post:'。', py:'Zuótiān wǒ hé péngyoumen yìqǐ qù chànggē le.', vn:'Hôm qua tôi cùng các bạn đi hát.'},
    ]},
    {num:2, lines:[
      {pre:'右边看报纸的那个女孩子', blank:'是我姐姐', post:'。', py:'Yòubiān kàn bàozhǐ de nàge nǚháizi shì wǒ jiějie.', vn:'Cô bé đang đọc báo bên phải là chị gái tôi.'},
    ]},
    {num:3, lines:[
      {pre:'他是', blank:'新来的汉语老师', post:'。', py:'Tā shì xīn lái de Hànyǔ lǎoshī.', vn:'Anh ấy là giáo viên tiếng Trung mới đến.'},
    ]},
    {num:4, lines:[
      {pre:'北京10°C，我们那儿的天气', blank:'比北京的冷', post:'。', py:'Běijīng shí dù, wǒmen nàr de tiānqì bǐ Běijīng de lěng.', vn:'Bắc Kinh 10 độ, thời tiết chỗ chúng tôi lạnh hơn Bắc Kinh.'},
    ]},
    {num:5, lines:[
      {pre:'她生病了，', blank:'明天可能不去上课了', post:'。', py:'Tā shēngbìng le, míngtiān kěnéng bú qù shàngkè le.', vn:'Cô ấy bị ốm, ngày mai có thể sẽ không đi học.'},
    ]},
    {num:6, lines:[
      {speaker:'女', pre:'昨天和你一起唱歌的人', blank:'是谁', post:'？', py:'Zuótiān hé nǐ yìqǐ chànggē de rén shì shéi?', vn:'Người hôm qua hát cùng bạn là ai?'},
      {speaker:'男', pre:'是', blank:'我女朋友', post:'。', py:'Shì wǒ nǚpéngyou.', vn:'Là bạn gái tôi.'},
    ]},
    {num:7, lines:[
      {speaker:'女', pre:'右边看报纸的那个是', blank:'你哥哥吗', post:'？', py:'Yòubiān kàn bàozhǐ de nàge shì nǐ gēge ma?', vn:'Người đang đọc báo bên phải là anh trai bạn à?'},
      {speaker:'男', pre:'对，他', blank:'是我哥哥', post:'。', py:'Duì, tā shì wǒ gēge.', vn:'Đúng vậy, anh ấy là anh trai tôi.'},
    ]},
    {num:8, lines:[
      {speaker:'男', pre:'她是你们', blank:'新来的老师吗', post:'？', py:'Tā shì nǐmen xīn lái de lǎoshī ma?', vn:'Cô ấy là giáo viên mới đến của các bạn à?'},
      {speaker:'女', pre:'她不是新来的老师，她', blank:'去年就来了', post:'。', py:'Tā bú shì xīn lái de lǎoshī, tā qùnián jiù lái le.', vn:'Cô ấy không phải giáo viên mới, cô ấy đến từ năm ngoái rồi.'},
    ]},
    {num:9, lines:[
      {speaker:'女', pre:'今天的苹果', blank:'比昨天的便宜一些，你来点儿吗', post:'？', py:'Jīntiān de píngguǒ bǐ zuótiān de piányi yìxiē, nǐ lái diǎnr ma?', vn:'Táo hôm nay rẻ hơn hôm qua một chút, bạn lấy ít không?'},
      {speaker:'男', pre:'我', blank:'再看看吧', post:'。', py:'Wǒ zài kànkan ba.', vn:'Để tôi xem thêm đã.'},
    ]},
    {num:10, lines:[
      {speaker:'女', pre:'前边说话的那几个人', blank:'是谁', post:'？', py:'Qiánbian shuōhuà de nà jǐ gè rén shì shéi?', vn:'Mấy người đang nói chuyện đằng trước là ai vậy?'},
      {speaker:'男', pre:'不认识，可能', blank:'是新来的学生吧', post:'。', py:'Bú rènshi, kěnéng shì xīn lái de xuésheng ba.', vn:'Không quen, có thể là học sinh mới đến.'},
    ]},
  ],
  mc: [
    {num:11, options:['她的同学','她的男朋友','她的一个朋友'], ans:2,
     explain:'男：昨天和你一起唱歌的人是谁？女：是一个朋友，我同学介绍的，昨天第一次见。问：昨天和女的一起唱歌的人是谁？ → 她的一个朋友。'},
    {num:12, options:['25岁','22岁','28岁'], ans:1,
     explain:'男：你哥哥多大？女：他25岁，比我大三岁。问：女的多大了？ → 22岁。'},
    {num:13, options:['西瓜太贵','苹果很多','苹果好吃'], ans:0,
     explain:'女：西瓜三块钱一斤，苹果一块五一斤。男：苹果比西瓜便宜多了，我还是买苹果吧。问：男的为什么买苹果？ → 西瓜太贵（相对苹果贵）。'},
    {num:14, options:['女的和男的一样大','女的比男的大','男的比女的大'], ans:1,
     explain:'男：你的生日是四月二十八号？女：是。你的生日是哪天？男：我也是那天的生日。我是八七年的，你呢？女：那我比你大一岁。问：他们两个人谁大？ → 女的比男的大。'},
    {num:15, options:['病了','没睡觉','没休息好'], ans:2,
     explain:'男：你的眼睛怎么红了？女：是吗？可能是没休息好。男：那今天晚上早点儿睡觉吧。女：好的，谢谢。问：女的怎么了？ → 没休息好。'},
  ],
};

// ══════════════════════════════════════════
// PHẦN 3a · ĐIỀN TỪ — hội thoại MỚI: giờ ăn trưa, bàn về đồng nghiệp mới & giá cơm
// ══════════════════════════════════════════
var fillData = [
  {pre:'前面吃饭的那个男孩子是谁？他看起来',blank:'比',post:'我们都小。',hint:'(so với)',ans:'比',exp:'A + 比 + B + Tính từ = A hơn B.'},
  {pre:'他',blank:'姓',post:'王，是新来的同事。',hint:'(họ)',ans:'姓'},
  {pre:'他是',blank:'去年',post:'来公司的，工作已经一年了。',hint:'(năm ngoái)',ans:'去年'},
  {pre:'坐在他',blank:'右边',post:'说话的那个女孩子是谁？',hint:'(bên phải)',ans:'右边'},
  {pre:'那',blank:'可能',post:'是新来的同事。',hint:'(có thể, có lẽ)',ans:'可能'},
  {pre:'今天饭店的菜比昨天',blank:'便宜',post:'一些，我们多吃点儿吧。',hint:'(rẻ)',ans:'便宜'},
  {pre:'她刚才一直在',blank:'说话',post:'，看起来很开心。',hint:'(nói chuyện)',ans:'说话'},
  {pre:'星期五大家一起去',blank:'唱歌',post:'吧！',hint:'(hát)',ans:'唱歌'},
];

// ══════════════════════════════════════════
// PHẦN 3b · SẮP XẾP
// ══════════════════════════════════════════
var sortData = [
  {words:['那个','男孩子','看起来','比','我们','小','。'],ans:'那个男孩子看起来比我们小。',audio:'那个男孩子看起来比我们小。'},
  {words:['他','是','去年','来','公司','的','。'],ans:'他是去年来公司的。',audio:'他是去年来公司的。'},
  {words:['前面','说话','的','那个','人','可能','是','新','同事','。'],ans:'前面说话的那个人可能是新同事。',audio:'前面说话的那个人可能是新同事。'},
  {words:['饭店','的','菜','比','昨天','便宜','。'],ans:'饭店的菜比昨天便宜。',audio:'饭店的菜比昨天便宜。'},
  {words:['她','姓','王','，','是','新','来','的','同事','。'],ans:'她姓王，是新来的同事。',audio:'她姓王，是新来的同事。'},
  {words:['我们','星期六','一起','去','唱歌','吧','。'],ans:'我们星期六一起去唱歌吧。',audio:'我们星期六一起去唱歌吧。'},
];

// ══════════════════════════════════════════
// PHẦN 3c · SỬA LỖI SAI
// ══════════════════════════════════════════
var errorFixData = [
  {wrong:'前面的说话那个人是谁？',
   opts:['前面说话的那个人是谁？','前面的说话那个人是谁？','说话前面的那个人是谁？','前面那个说话是的人谁？'],ans:0,
   exp:'Cụm động từ (说话) làm định ngữ phải đứng NGAY TRƯỚC 的, rồi mới đến danh từ: [Cụm động từ] + 的 + Danh từ.'},
  {wrong:'我比他大三岁比。',
   opts:['我比他大三岁。','我比他大三岁比。','我大比他三岁。','比我他大三岁。'],ans:0,
   exp:'比 chỉ xuất hiện MỘT LẦN, ngay sau chủ ngữ A và trước đối tượng so sánh B: A + 比 + B + Tính từ.'},
  {wrong:'他大比我三岁。',
   opts:['他比我大三岁。','他大比我三岁。','他比大我三岁。','大他比我三岁。'],ans:0,
   exp:'比 + B phải đứng TRƯỚC tính từ (大/小/便宜...), không đặt tính từ lên trước 比.'},
  {wrong:'他认识可能你。',
   opts:['他可能认识你。','他认识可能你。','可能他认识不你。','他不可能认识可能你。'],ans:0,
   exp:'可能 (có thể, có lẽ) đứng TRƯỚC động từ, không đặt sau động từ như tiếng Việt "quen có thể".'},
  {wrong:'便宜比昨天饭店的菜。',
   opts:['饭店的菜比昨天便宜。','便宜比昨天饭店的菜。','饭店的菜昨天比便宜。','比饭店的菜昨天便宜。'],ans:0,
   exp:'Trật tự câu 比 chuẩn: Chủ ngữ (饭店的菜) + 比 + Đối tượng so sánh (昨天) + Tính từ (便宜), không đảo lên đầu câu.'},
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
  intro: 'Mỗi câu hỏi là một tình huống thật trong đời sống, dùng đúng từ vựng và mẫu câu của Bài 11. Bấm 🎙️ rồi trả lời bằng tiếng Trung — AI sẽ nghe, ghi lại câu bạn nói và chấm điểm theo Nội dung · Mẫu câu · Từ vựng · Độ trôi chảy. Nên tự trả lời trước rồi mới mở “Câu mẫu” để đối chiếu.',
  tasks: [
    {
      situation: 'Bạn học hỏi về anh chị em của bạn.',
      q_zh: '你有哥哥吗？他比你大几岁？',
      q_py: 'Nǐ yǒu gēge ma? Tā bǐ nǐ dà jǐ suì?',
      q_vn: 'Bạn có anh trai không? Hơn bạn mấy tuổi?',
      grammar: { label: 'A 比 B 大/小 + số + 岁', any: ['比'] },
      need: [
        { label: 'Dùng 比 để so sánh', any: ['比'] },
        { label: 'Nói hơn kém mấy tuổi', any: ['岁'] },
        { label: 'Nói người đó là ai', any: ['哥哥', '姐姐', '弟弟', '妹妹', '没有'] }
      ],
      bonus: { label: 'Nói thêm tuổi cụ thể (他25岁)', any: ['岁', '今年'] },
      vocab: ['比', '哥哥', '孩子'],
      minLen: 10,
      sample: '我有一个哥哥，他今年25岁，比我大三岁。',
      sample_py: 'Wǒ yǒu yí ge gēge, tā jīnnián èrshíwǔ suì, bǐ wǒ dà sān suì.',
      sample_vn: 'Tôi có một anh trai, năm nay anh 25 tuổi, hơn tôi ba tuổi.',
      tip: 'Mức chênh lệch đặt sau tính từ: 比我大三岁, không nói 比我三岁大.'
    },
    {
      situation: 'Ở chợ, bạn hỏi giá dưa hấu hôm nay.',
      q_zh: '今天的西瓜怎么卖？比昨天便宜吗？',
      q_py: 'Jīntiān de xīguā zěnme mài? Bǐ zuótiān piányi ma?',
      q_vn: 'Dưa hấu hôm nay bán thế nào? Có rẻ hơn hôm qua không?',
      grammar: { label: '…比昨天便宜 + …一斤', any: ['比'] },
      need: [
        { label: 'Nói giá (块 / 斤)', any: ['块', '斤', '钱'] },
        { label: 'Dùng 比 so sánh với hôm qua', any: ['比'] },
        { label: 'Dùng 便宜 hoặc 贵', any: ['便宜', '贵'] }
      ],
      bonus: { label: 'Mời khách mua thêm (您来点儿吧)', any: ['来点儿', '吧', '买'] },
      vocab: ['比', '便宜'],
      minLen: 10,
      sample: '三块五一斤，比昨天便宜。苹果也比昨天便宜一些，您来点儿吧。',
      sample_py: 'Sān kuài wǔ yì jīn, bǐ zuótiān piányi. Píngguǒ yě bǐ zuótiān piányi yìxiē, nín lái diǎnr ba.',
      sample_vn: 'Ba tệ rưỡi một cân, rẻ hơn hôm qua. Táo cũng rẻ hơn hôm qua một chút, ông/bà mua chút nhé.',
      tip: '便宜一些 / 便宜一点儿 = rẻ hơn một chút, đặt sau tính từ.'
    },
    {
      situation: 'Bạn xem ảnh chụp chung và giới thiệu từng người.',
      q_zh: '照片里左边那个人是谁？右边的呢？',
      q_py: 'Zhàopiàn lǐ zuǒbian nàge rén shì shéi? Yòubian de ne?',
      q_vn: 'Trong ảnh người bên trái là ai? Còn người bên phải?',
      grammar: { label: '左边那个 + động từ + 的是… / 右边…的是…', any: ['的'] },
      need: [
        { label: 'Dùng 左边 và 右边', any: ['左边', '右边'] },
        { label: 'Tả người bằng động từ + 的 (看报纸的 / 写字的)', any: ['看', '写', '说', '唱', '笑', '坐', '站'] },
        { label: 'Nói quan hệ (姐姐 / 哥哥 / 朋友)', any: ['姐姐', '哥哥', '弟弟', '妹妹', '朋友', '同学', '老师', '爸爸', '妈妈'] }
      ],
      bonus: { label: 'Nói thêm tuổi hoặc so sánh (比我大)', any: ['比', '岁'] },
      vocab: ['右边', '男', '女', '孩子'],
      minLen: 14,
      sample: '左边那个看报纸的女孩子是我姐姐，右边写字的那个人是我哥哥。',
      sample_py: 'Zuǒbian nàge kàn bàozhǐ de nǚháizi shì wǒ jiějie, yòubian xiě zì de nàge rén shì wǒ gēge.',
      sample_vn: 'Cô gái đang đọc báo bên trái là chị tôi, người đang viết chữ bên phải là anh tôi.',
      tip: 'Cụm "động từ + 的" dùng để tả người: 看报纸的（人）= người đang đọc báo.'
    },
    {
      situation: 'Bạn giới thiệu giáo viên tiếng Trung của mình cho bạn mới.',
      q_zh: '前面说话的那个人是你的汉语老师吗？他姓什么？多大？',
      q_py: 'Qiánmiàn shuōhuà de nàge rén shì nǐ de Hànyǔ lǎoshī ma? Tā xìng shénme? Duō dà?',
      q_vn: 'Người đang nói chuyện phía trước là giáo viên tiếng Trung của bạn à? Thầy họ gì? Bao nhiêu tuổi?',
      grammar: { label: '他姓… + 他比…小/大…岁', any: ['姓'] },
      need: [
        { label: 'Dùng 姓 để nói họ', any: ['姓'] },
        { label: 'Nói tuổi', any: ['岁'] },
        { label: 'Nói thêm mốc thời gian thầy/cô đến dạy (去年 / 今年)', any: ['去年', '今年', '上个', '来'] }
      ],
      bonus: { label: 'Dùng 比 so sánh với giáo viên khác', any: ['比'] },
      vocab: ['说话', '可能', '姓', '去年'],
      minLen: 12,
      sample: '是，他是去年来的，他姓王，28岁，比我们的老师小两岁。',
      sample_py: 'Shì, tā shì qùnián lái de, tā xìng Wáng, èrshíbā suì, bǐ wǒmen de lǎoshī xiǎo liǎng suì.',
      sample_vn: 'Đúng, thầy đến từ năm ngoái, thầy họ Vương, 28 tuổi, kém giáo viên của chúng tôi hai tuổi.',
      tip: '姓 dùng cho họ (他姓王), 叫 dùng cho tên đầy đủ (他叫王方).'
    },
    {
      situation: 'Bạn học tò mò hỏi về người đi hát cùng bạn hôm qua.',
      q_zh: '昨天和你一起唱歌的人是谁？是不是男朋友？',
      q_py: 'Zuótiān hé nǐ yìqǐ chànggē de rén shì shéi? Shì bu shì nánpéngyou?',
      q_vn: 'Người đi hát cùng bạn hôm qua là ai? Có phải bạn trai không?',
      grammar: { label: '不是…，是…介绍的 + 第一次见', any: ['不是', '介绍'] },
      need: [
        { label: 'Trả lời phải hay không phải', any: ['是', '不是'] },
        { label: 'Nói người đó là ai (朋友 / 同学)', any: ['朋友', '同学', '同事', '哥哥', '姐姐'] },
        { label: 'Dùng 唱歌 hoặc 一起', any: ['唱歌', '一起'] }
      ],
      bonus: { label: 'Nói thêm ai giới thiệu / lần đầu gặp', any: ['介绍', '第一次'] },
      vocab: ['唱歌', '男', '女'],
      minLen: 12,
      sample: '不是男朋友，是一个朋友，我们一起唱歌。我同学介绍的，昨天第一次见。',
      sample_py: 'Bú shì nánpéngyou, shì yí ge péngyou, wǒmen yìqǐ chànggē. Wǒ tóngxué jièshào de, zuótiān dì-yī cì jiàn.',
      sample_vn: 'Không phải bạn trai, là một người bạn, chúng tôi hát cùng nhau. Bạn học tôi giới thiệu, hôm qua mới gặp lần đầu.',
      tip: 'Nhấn mạnh bằng cách lặp phủ định rồi khẳng định: 不是…，是….'
    }
  ]
};

// ══════════════════════════════════════════
// LUYỆN DỊCH — dùng từ bài 11 + ôn lại từ bài 1-10 và HSK1
// ══════════════════════════════════════════
var translateData = [
  {vi:'Anh trai cao hơn chị gái.', zh:'哥哥比姐姐高。', py:'Gēge bǐ jiějie gāo.'},
  {vi:'Người cùng hát karaoke với bạn là ai?', zh:'和你一起唱歌的人是谁？', py:'Hé nǐ yìqǐ chàng gē de rén shì shéi?'},
  {vi:'Có thể bạn không quen biết anh ấy.', zh:'你可能不认识他。', py:'Nǐ kěnéng bú rènshi tā.'},
  {vi:'Cái này rẻ hơn cái kia một chút.', zh:'这个比那个便宜一点儿。', py:'Zhège bǐ nàge piányi yìdiǎnr.'},
];

// ══════════════════════════════════════════
// LUYỆN DỊCH (chiều Trung→Việt) — noi dung KHAC voi chieu Viet->Trung o tren
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:'Cô bé đang hát tên họ là gì?', zh:'唱歌的女孩子姓什么？', py:'Chàng gē de nǚ háizi xìng shénme?'},
  {vi:'Cậu bé đang nói chuyện bên phải là bạn cùng lớp của tôi.', zh:'右边说话的男孩子是我同学。', py:'Yòubian shuōhuà de nán háizi shì wǒ tóngxué.'},
  {vi:'Năm ngoái cái này rẻ hơn cái kia.', zh:'去年这个比那个便宜。', py:'Qùnián zhège bǐ nàge piányi.'},
  {vi:'Có thể bạn không quen biết cô ấy, cô ấy họ Vương.', zh:'你可能不认识她，她姓王。', py:'Nǐ kěnéng bú rènshi tā, tā xìng Wáng.'},
];
