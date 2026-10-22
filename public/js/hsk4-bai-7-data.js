// ══════════════════════════════════════════
// DATA — HSK4 Bài 7: 最好的医生是自己 (Bác sĩ tốt nhất là bản thân)
// Nguồn: HSK标准教程4上 (Giáo trình chuẩn HSK 4 — nhantriviet.com)
// ══════════════════════════════════════════
var vocabData = [
  {
    "n": 1,
    "zh": "流血",
    "py": "liúxiě",
    "pos": "Động từ",
    "vn": "chảy máu",
    "hv": "lưu huyết",
    "em": "🩸",
    "lesson": 1,
    "explain": [
      "Máu chảy ra khỏi cơ thể do vết thương hoặc nguyên nhân khác."
    ],
    "usage": "Động từ ly hợp; thường đi với 鼻子流血了, 流了很多血.",
    "collo": [
      "鼻子流血了",
      "流血了",
      "流了很多血"
    ],
    "ex_zh": "你的鼻子怎么流血了？快用纸擦擦。",
    "ex_py": "Nǐ de bízi zěnme liú xiě le? Kuài yòng zhǐ cāca.",
    "ex_vn": "Mũi bạn sao lại chảy máu vậy? Nhanh dùng giấy lau đi.",
    "exList": [
      {
        "zh": "你的鼻子怎么流血了？快用纸擦擦。",
        "py": "Nǐ de bízi zěnme liú xiě le? Kuài yòng zhǐ cāca.",
        "vn": "Mũi bạn sao lại chảy máu vậy? Nhanh dùng giấy lau đi."
      },
      {
        "zh": "他的手不小心被刀划破了，流了很多血。",
        "py": "Tā de shǒu bù xiǎoxīn bèi dāo huápò le, liúle hěn duō xiě.",
        "vn": "Tay anh ấy không cẩn thận bị dao cứa rách, chảy rất nhiều máu."
      },
      {
        "zh": "伤口还在流血，得赶紧去医院。",
        "py": "Shāngkǒu hái zài liúxiě, děi gǎnjǐn qù yīyuàn.",
        "vn": "Vết thương vẫn đang chảy máu, phải nhanh chóng đến bệnh viện."
      }
    ],
    "hanzi": [
      {
        "c": "血",
        "p": "xiě",
        "type": "独体字 · Chữ đơn",
        "st": 6,
        "ord": "丿 trên → 皿(biến thể) dưới",
        "rad": "皿 (mãnh – bát đĩa)",
        "mean": "máu",
        "tip": "Chữ tượng hình MÁU nhỏ giọt vào bát đĩa (trong nghi lễ cổ) → nghĩa gốc là MÁU.",
        "cf": "血 khi đọc \"xuè\" dùng trong văn viết trang trọng (血液)",
        "w": "流血 / 血液 / 输血"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Mũi bạn chảy máu rồi, mau dùng giấy lau đi, nếu không sẽ bẩn hết áo.",
        "answer": "你的鼻子流血了，快用纸擦擦，不然会弄脏衣服的。",
        "answerPy": "Nǐ de bízi liúxiě le, kuài yòng zhǐ cācā, bùrán huì nòngzāng yīfu de.",
        "note": "流血 là từ ly hợp: 流了很多血 ✓ / 流血了很多 ✗.",
        "pair": "不然……"
      },
      {
        "promptLang": "vi",
        "prompt": "Vì vết thương này vẫn đang chảy máu, nên phải xử lý ngay.",
        "answer": "因为这个伤口还在流血，所以得赶紧处理一下。",
        "answerPy": "Yīnwèi zhège shāngkǒu hái zài liúxiě, suǒyǐ děi gǎnjǐn chǔlǐ yíxià.",
        "note": "在 + V — đang diễn ra; 得 (děi) — phải.",
        "pair": "因为……所以……"
      }
    ],
    "colloFull": [
      {
        "zh": "鼻子流血了",
        "py": "bízi liúxiě le",
        "vn": "mũi chảy máu rồi"
      },
      {
        "zh": "流了很多血",
        "py": "liú le hěn duō xiě",
        "vn": "chảy rất nhiều máu"
      },
      {
        "zh": "伤口流血",
        "py": "shāngkǒu liúxiě",
        "vn": "vết thương chảy máu"
      },
      {
        "zh": "不流血了",
        "py": "bù liúxiě le",
        "vn": "không chảy máu nữa"
      },
      {
        "zh": "一直流血",
        "py": "yīzhí liúxiě",
        "vn": "chảy máu liên tục"
      }
    ],
    "patterns": [
      {
        "s": "bộ phận + 流血 + 了",
        "m": "Chỗ nào đó chảy máu"
      },
      {
        "s": "流 + 了 + lượng + 血",
        "m": "流血 là từ ly hợp: 流了很多血 ✓ / 流血了很多 ✗"
      }
    ]
  },
  {
    "n": 2,
    "zh": "擦",
    "py": "cā",
    "pos": "Động từ",
    "vn": "lau, chùi",
    "hv": "sát",
    "em": "🧻",
    "lesson": 1,
    "explain": [
      "Dùng vật gì đó chà xát để làm sạch/khô một bề mặt."
    ],
    "usage": "Động từ, mang tân ngữ trực tiếp: 用纸擦擦, 擦干净.",
    "collo": [
      "用纸擦擦",
      "擦干净",
      "擦桌子"
    ],
    "ex_zh": "你的鼻子怎么流血了？快用纸擦擦。",
    "ex_py": "Nǐ de bízi zěnme liú xiě le? Kuài yòng zhǐ cāca.",
    "ex_vn": "Mũi bạn sao lại chảy máu vậy? Nhanh dùng giấy lau đi.",
    "exList": [
      {
        "zh": "你的鼻子怎么流血了？快用纸擦擦。",
        "py": "Nǐ de bízi zěnme liú xiě le? Kuài yòng zhǐ cāca.",
        "vn": "Mũi bạn sao lại chảy máu vậy? Nhanh dùng giấy lau đi."
      },
      {
        "zh": "经理让服务员把所有桌子都擦干净。",
        "py": "Jīnglǐ ràng fúwùyuán bǎ suǒyǒu zhuōzi dōu cā gānjìng.",
        "vn": "Giám đốc bảo nhân viên phục vụ lau sạch tất cả các bàn."
      },
      {
        "zh": "她擦了擦眼泪，笑着说没事。",
        "py": "Tā cāle cā yǎnlèi, xiàozhe shuō méishì.",
        "vn": "Cô ấy lau nước mắt, cười nói không sao."
      }
    ],
    "hanzi": [
      {
        "c": "擦",
        "p": "cā",
        "type": "左右结构 · Trái-phải",
        "st": 17,
        "ord": "扌 (thủ) trái → 察(biến thể) phải",
        "rad": "扌 (thủ – tay)",
        "mean": "lau, chà xát",
        "tip": "Bộ tay 扌 (hành động) + 察(biểu âm) → dùng TAY CHÀ XÁT để làm sạch, mở rộng thành LAU, CHÙI.",
        "cf": "察 (chá – \"xem xét\", không có bộ 扌\")",
        "w": "擦 / 擦干净 / 摩擦"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Giám đốc bảo nhân viên phục vụ không những lau sạch hết bàn, mà còn lau cả cửa sổ nữa.",
        "answer": "经理让服务员不但把所有桌子都擦干净，而且还擦了窗户。",
        "answerPy": "Jīnglǐ ràng fúwùyuán búdàn bǎ suǒyǒu zhuōzi dōu cā gānjìng, érqiě hái cāle chuānghu.",
        "note": "Câu chữ 把: 把 + tân ngữ + V + bổ ngữ kết quả 干净.",
        "pair": "不但……而且……"
      },
      {
        "promptLang": "vi",
        "prompt": "Nếu bạn rảnh thì dùng khăn lau sạch cửa sổ giúp mình nhé.",
        "answer": "要是你有空，就用毛巾把窗户擦干净吧。",
        "answerPy": "Yàoshi nǐ yǒu kòng, jiù yòng máojīn bǎ chuānghu cā gānjìng ba.",
        "note": "用 + dụng cụ + 把 + tân ngữ + V — dùng gì để làm gì.",
        "pair": "要是……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "擦干净",
        "py": "cā gānjìng",
        "vn": "lau sạch"
      },
      {
        "zh": "擦桌子",
        "py": "cā zhuōzi",
        "vn": "lau bàn"
      },
      {
        "zh": "用纸擦擦",
        "py": "yòng zhǐ cācā",
        "vn": "dùng giấy lau lau"
      },
      {
        "zh": "擦窗户",
        "py": "cā chuānghu",
        "vn": "lau cửa sổ"
      },
      {
        "zh": "擦一擦",
        "py": "cā yì cā",
        "vn": "lau qua một cái"
      }
    ],
    "patterns": [
      {
        "s": "把 + N + 擦干净",
        "m": "Lau sạch cái gì (câu chữ 把)"
      },
      {
        "s": "用 + dụng cụ + 擦",
        "m": "Dùng gì để lau"
      }
    ]
  },
  {
    "n": 3,
    "zh": "气候",
    "py": "qìhòu",
    "pos": "Danh từ",
    "vn": "khí hậu",
    "hv": "khí hậu",
    "em": "🌤️",
    "lesson": 1,
    "explain": [
      "Điều kiện thời tiết đặc trưng của một vùng trong thời gian dài."
    ],
    "usage": "Danh từ; thường đi với 不习惯……气候, 气候变化.",
    "collo": [
      "不习惯气候",
      "北方的气候",
      "气候变化"
    ],
    "ex_zh": "我还不习惯北方的气候，估计是天气太干。",
    "ex_py": "Wǒ hái bù xíguàn běifāng de qìhòu, gūjì shì tiānqì tài gān.",
    "ex_vn": "Tôi vẫn chưa quen với khí hậu miền Bắc, đoán là do thời tiết quá khô.",
    "exList": [
      {
        "zh": "我还不习惯北方的气候，估计是天气太干。",
        "py": "Wǒ hái bù xíguàn běifāng de qìhòu, gūjì shì tiānqì tài gān.",
        "vn": "Tôi vẫn chưa quen với khí hậu miền Bắc, đoán là do thời tiết quá khô."
      },
      {
        "zh": "这次活动是从2007年开始的，它使人们更加关心世界气候变化的问题了。",
        "py": "Zhè cì huódòng shì cóng 2007 nián kāishǐ de, tā shǐ rénmen gèngjiā guānxīn shìjiè qìhòu biànhuà de wèntí le.",
        "vn": "Hoạt động lần này bắt đầu từ năm 2007, nó khiến mọi người quan tâm hơn đến vấn đề biến đổi khí hậu toàn cầu."
      },
      {
        "zh": "这个地方的气候四季分明。",
        "py": "Zhège dìfang de qìhòu sìjì fēnmíng.",
        "vn": "Khí hậu nơi này bốn mùa rõ rệt."
      }
    ],
    "hanzi": [
      {
        "c": "候",
        "p": "hòu",
        "type": "左右结构 · Trái-phải",
        "st": 10,
        "ord": "亻 (nhân) trái → 侯 (biến thể) phải",
        "rad": "亻 (nhân – người)",
        "mean": "thời tiết, chờ đợi",
        "tip": "Bộ người 亻 (quan sát) + 侯(biểu âm) → NGƯỜI quan sát THỜI TIẾT theo mùa, kết hợp 气(khí) thành 气候 = KHÍ HẬU.",
        "cf": "猴 (hóu – \"con khỉ\", bộ 犭\")",
        "w": "气候 / 时候 / 等候"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tuy tôi ở đây đã lâu, nhưng vẫn chưa quen khí hậu miền Bắc, mùa đông lạnh quá.",
        "answer": "虽然我来这儿很久了，但是还不习惯北方的气候，冬天太冷了。",
        "answerPy": "Suīrán wǒ lái zhèr hěn jiǔ le, dànshì hái bù xíguàn běifāng de qìhòu, dōngtiān tài lěng le.",
        "note": "气候 là khí hậu lâu dài, khác 天气 (thời tiết hôm nay).",
        "pair": "虽然……但是……"
      },
      {
        "promptLang": "vi",
        "prompt": "Biến đổi khí hậu toàn cầu là vấn đề mà mọi người ngày càng quan tâm.",
        "answer": "世界气候变化是人们越来越关心的问题。",
        "answerPy": "Shìjiè qìhòu biànhuà shì rénmen yuè lái yuè guānxīn de wèntí.",
        "note": "气候变化 — biến đổi khí hậu.",
        "pair": "越……越……"
      }
    ],
    "colloFull": [
      {
        "zh": "北方的气候",
        "py": "běifāng de qìhòu",
        "vn": "khí hậu miền Bắc"
      },
      {
        "zh": "不习惯气候",
        "py": "bù xíguàn qìhòu",
        "vn": "không quen khí hậu"
      },
      {
        "zh": "气候变化",
        "py": "qìhòu biànhuà",
        "vn": "biến đổi khí hậu"
      },
      {
        "zh": "气候很干",
        "py": "qìhòu hěn gàn",
        "vn": "khí hậu rất khô"
      },
      {
        "zh": "适应气候",
        "py": "shìyìng qìhòu",
        "vn": "thích nghi khí hậu"
      }
    ],
    "patterns": [
      {
        "s": "nơi chốn + 的气候",
        "m": "Khí hậu của nơi nào"
      },
      {
        "s": "气候 ≠ 天气",
        "m": "气候 là khí hậu lâu dài; 天气 là thời tiết hôm nay"
      }
    ]
  },
  {
    "n": 4,
    "zh": "估计",
    "py": "gūjì",
    "pos": "Động từ",
    "vn": "đoán chừng, dự đoán",
    "hv": "cổ kế",
    "em": "🤔",
    "lesson": 1,
    "explain": [
      "Đưa ra suy đoán chung chung về sự vật dựa vào những điều kiện nào đó."
    ],
    "usage": "Động từ, có thể làm vị ngữ trực tiếp, mang động từ/mệnh đề: 估计是……, 估计他……",
    "collo": [
      "估计是",
      "估计他",
      "估计不错"
    ],
    "ex_zh": "我还不习惯北方的气候，估计是天气太干。",
    "ex_py": "Wǒ hái bù xíguàn běifāng de qìhòu, gūjì shì tiānqì tài gān.",
    "ex_vn": "Tôi vẫn chưa quen với khí hậu miền Bắc, đoán là do thời tiết quá khô.",
    "exList": [
      {
        "zh": "我还不习惯北方的气候，估计是天气太干。",
        "py": "Wǒ hái bù xíguàn běifāng de qìhòu, gūjì shì tiānqì tài gān.",
        "vn": "Tôi vẫn chưa quen với khí hậu miền Bắc, đoán là do thời tiết quá khô."
      },
      {
        "zh": "你有没有去问问小王？估计他应该有办法。",
        "py": "Nǐ yǒu méiyǒu qù wènwen Xiǎo Wáng? Gūjì tā yīnggāi yǒu bànfǎ.",
        "vn": "Bạn đã đi hỏi Tiểu Vương chưa? Đoán chừng anh ấy sẽ có cách."
      },
      {
        "zh": "机场通知飞机晚点一个小时，估计他下午六点才能到上海。",
        "py": "Jīchǎng tōngzhī fēijī wǎndiǎn yí ge xiǎoshí, gūjì tā xiàwǔ liù diǎn cái néng dào Shànghǎi.",
        "vn": "Sân bay thông báo máy bay trễ một tiếng, đoán chừng anh ấy phải đến 6 giờ chiều mới đến Thượng Hải."
      }
    ],
    "hanzi": [
      {
        "c": "估",
        "p": "gū",
        "type": "左右结构 · Trái-phải",
        "st": 7,
        "ord": "亻 (nhân) trái → 古 (cổ) phải",
        "rad": "亻 (nhân – người)",
        "mean": "ước lượng",
        "tip": "Bộ người 亻 + 古(biểu âm) → NGƯỜI ƯỚC LƯỢNG, kết hợp 计(tính toán) thành 估计 = ĐOÁN CHỪNG, DỰ ĐOÁN.",
        "cf": "姑 (gū – \"cô\", bộ 女\")",
        "w": "估计 / 估算 / 评估"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Nếu bạn đi hỏi thử thì tôi đoán anh ấy chắc chắn có cách.",
        "answer": "如果你去问问看，我估计他一定有办法。",
        "answerPy": "Rúguǒ nǐ qù wènwen kàn, wǒ gūjì tā yídìng yǒu bànfǎ.",
        "note": "问问看 — hỏi thử xem; 估计 dựa trên căn cứ, khác 可能.",
        "pair": "如果……就……"
      },
      {
        "promptLang": "vi",
        "prompt": "Sân bay thông báo máy bay trễ giờ, đoán chừng phải 6 giờ chiều mới đến.",
        "answer": "机场通知飞机晚点了，估计要下午六点才能到。",
        "answerPy": "Jīchǎng tōngzhī fēijī wǎndiǎn le, gūjì yào xiàwǔ liù diǎn cái néng dào.",
        "note": "估计 + thời gian + 才能到 — đoán chừng đến mấy giờ mới đến.",
        "pair": "……，才……"
      }
    ],
    "colloFull": [
      {
        "zh": "估计是",
        "py": "gūjì shì",
        "vn": "đoán chừng là"
      },
      {
        "zh": "估计不错",
        "py": "gūjì búcuò",
        "vn": "đoán khá chuẩn"
      },
      {
        "zh": "估计他会来",
        "py": "gūjì tā huì lái",
        "vn": "đoán anh ấy sẽ đến"
      },
      {
        "zh": "估计一下",
        "py": "gūjì yíxià",
        "vn": "ước lượng một chút"
      },
      {
        "zh": "我估计",
        "py": "wǒ gūjì",
        "vn": "tôi đoán rằng"
      }
    ],
    "patterns": [
      {
        "s": "Sub + 估计 + mệnh đề",
        "m": "Ai đó đoán rằng …"
      },
      {
        "s": "估计 ≈ 可能",
        "m": "估计 dựa trên căn cứ, 可能 chỉ là khả năng"
      }
    ]
  },
  {
    "n": 5,
    "zh": "咳嗽",
    "py": "késou",
    "pos": "Động từ",
    "vn": "ho",
    "hv": "khái thấu",
    "em": "🤧",
    "lesson": 1,
    "explain": [
      "Hành động ho do bệnh đường hô hấp."
    ],
    "usage": "Động từ; thường đi với 咳嗽好点儿了吗, 我只是咳嗽.",
    "collo": [
      "咳嗽好点儿了吗",
      "只是咳嗽",
      "一直咳嗽"
    ],
    "ex_zh": "没有，我只是咳嗽，有点儿头疼，不严重。",
    "ex_py": "Méiyǒu, wǒ zhǐ shì késou, yǒudiǎnr tóuténg, bù yánzhòng.",
    "ex_vn": "Không có, tôi chỉ ho thôi, hơi đau đầu, không nghiêm trọng.",
    "exList": [
      {
        "zh": "没有，我只是咳嗽，有点儿头疼，不严重。",
        "py": "Méiyǒu, wǒ zhǐ shì késou, yǒudiǎnr tóuténg, bù yánzhòng.",
        "vn": "Không có, tôi chỉ ho thôi, hơi đau đầu, không nghiêm trọng."
      },
      {
        "zh": "你咳嗽好点儿了吗？医生怎么说的？",
        "py": "Nǐ késou hǎo diǎnr le ma? Yīshēng zěnme shuō de?",
        "vn": "Bạn ho đỡ hơn chưa? Bác sĩ nói gì?"
      },
      {
        "zh": "但最近总是咳嗽，所以我有些担心了。",
        "py": "Dàn zuìjìn zǒngshì késou, suǒyǐ wǒ yǒuxiē dān xīn le.",
        "vn": "Nhưng gần đây cứ ho mãi, nên tôi hơi lo."
      }
    ],
    "hanzi": [
      {
        "c": "咳",
        "p": "ké",
        "type": "左右结构 · Trái-phải",
        "st": 9,
        "ord": "口 (khẩu) trái → 亥 (hợi) phải",
        "rad": "口 (khẩu – miệng)",
        "mean": "ho",
        "tip": "Bộ miệng 口 (âm thanh phát ra) + 亥(biểu âm) → âm thanh HO từ miệng, kết hợp 嗽(cũng liên quan họng) thành 咳嗽 = HO.",
        "cf": "孩 (hái – \"trẻ con\", bộ 子\")",
        "w": "咳嗽 / 咳血"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tôi chỉ ho một chút, không nghiêm trọng, uống thêm nước là khỏi.",
        "answer": "我只是咳嗽了一下，不严重，多喝点儿水就好了。",
        "answerPy": "Wǒ zhǐ shì késoule yíxià, bù yánzhòng, duō hē diǎnr shuǐ jiù hǎo le.",
        "note": "只是咳嗽……不严重 kết hợp 严重, ôn lại từ vựng của bài.",
        "pair": "一……就……"
      },
      {
        "promptLang": "vi",
        "prompt": "Gần đây cứ ho mãi, tôi nghĩ nên đi khám bác sĩ.",
        "answer": "最近总是咳嗽，我觉得应该去看医生。",
        "answerPy": "Zuìjìn zǒngshì késou, wǒ juéde yīnggāi qù kàn yīshēng.",
        "note": "总是咳嗽 — cứ ho mãi.",
        "pair": "总是……"
      }
    ],
    "colloFull": [
      {
        "zh": "一直咳嗽",
        "py": "yīzhí késou",
        "vn": "ho liên tục"
      },
      {
        "zh": "只是咳嗽",
        "py": "zhī shì késou",
        "vn": "chỉ là ho thôi"
      },
      {
        "zh": "咳嗽得厉害",
        "py": "késou de lìhai",
        "vn": "ho dữ dội"
      },
      {
        "zh": "咳嗽好点儿了",
        "py": "késou hǎo diǎn ér le",
        "vn": "ho đỡ hơn rồi"
      },
      {
        "zh": "不咳嗽了",
        "py": "bù késou le",
        "vn": "hết ho rồi"
      }
    ],
    "patterns": [
      {
        "s": "Sub + 咳嗽 + 得 + Adj",
        "m": "Ai đó ho thế nào"
      },
      {
        "s": "咳嗽 + 好点儿了",
        "m": "Ho đã đỡ hơn"
      }
    ]
  },
  {
    "n": 6,
    "zh": "严重",
    "py": "yánzhòng",
    "pos": "Tính từ",
    "vn": "nghiêm trọng",
    "hv": "nghiêm trọng",
    "em": "⚠️",
    "lesson": 1,
    "explain": [
      "Ở mức độ nặng, đáng lo ngại."
    ],
    "usage": "Tính từ; thường đi với 不严重, 严重的问题.",
    "collo": [
      "不严重",
      "很严重",
      "严重的问题"
    ],
    "ex_zh": "没有，我只是咳嗽，有点儿头疼，不严重。",
    "ex_py": "Méiyǒu, wǒ zhǐ shì késou, yǒudiǎnr tóuténg, bù yánzhòng.",
    "ex_vn": "Không có, tôi chỉ ho thôi, hơi đau đầu, không nghiêm trọng.",
    "exList": [
      {
        "zh": "没有，我只是咳嗽，有点儿头疼，不严重。",
        "py": "Méiyǒu, wǒ zhǐ shì késou, yǒudiǎnr tóuténg, bù yánzhòng.",
        "vn": "Không có, tôi chỉ ho thôi, hơi đau đầu, không nghiêm trọng."
      },
      {
        "zh": "没事儿，大夫说不严重。",
        "py": "Méishìr, dàifu shuō bù yánzhòng.",
        "vn": "Không sao, bác sĩ nói không nghiêm trọng."
      },
      {
        "zh": "这个问题很严重，我们必须马上解决。",
        "py": "Zhège wèntí hěn yánzhòng, wǒmen bìxū mǎshàng jiějué.",
        "vn": "Vấn đề này rất nghiêm trọng, chúng ta phải giải quyết ngay."
      }
    ],
    "hanzi": [
      {
        "c": "严",
        "p": "yán",
        "type": "独体字 · Chữ đơn (giản thể)",
        "st": 7,
        "ord": "nét liền",
        "rad": "一 (nhất)",
        "mean": "nghiêm khắc",
        "tip": "Chữ giản thể mang nghĩa NGHIÊM KHẮC, kết hợp 重(nặng) thành 严重 = NGHIÊM TRỌNG (nghiêm khắc + nặng nề).",
        "cf": "严 dễ nhầm với 巖 (yán – \"vách đá\", phồn thể)",
        "w": "严重 / 严格 / 严肃"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Không sao đâu, bác sĩ nói chỉ cần uống nhiều nước là khỏi, không nghiêm trọng.",
        "answer": "没事儿，大夫说只要多喝点儿水就好了，不严重。",
        "answerPy": "Méi shìr, dàifu shuō zhǐyào duō hē diǎnr shuǐ jiù hǎo le, bù yánzhòng.",
        "note": "没事儿 — lời trấn an thường dùng trong khẩu ngữ.",
        "pair": "只要……就……"
      },
      {
        "promptLang": "vi",
        "prompt": "Nếu vấn đề sức khỏe không được chú ý, có thể sẽ trở nên nghiêm trọng.",
        "answer": "如果不注意身体健康问题，可能会变得严重。",
        "answerPy": "Rúguǒ bú zhùyì shēntǐ jiànkāng wèntí, kěnéng huì biàn de yánzhòng.",
        "note": "变得严重 — trở nên nghiêm trọng.",
        "pair": "如果……会……"
      }
    ],
    "colloFull": [
      {
        "zh": "不严重",
        "py": "bù yánzhòng",
        "vn": "không nghiêm trọng"
      },
      {
        "zh": "很严重",
        "py": "hěn yánzhòng",
        "vn": "rất nghiêm trọng"
      },
      {
        "zh": "严重的问题",
        "py": "yánzhòng de wèntí",
        "vn": "vấn đề nghiêm trọng"
      },
      {
        "zh": "越来越严重",
        "py": "yuè lái yuè yánzhòng",
        "vn": "ngày càng nghiêm trọng"
      },
      {
        "zh": "病得严重",
        "py": "bìng de yánzhòng",
        "vn": "ốm nặng"
      }
    ],
    "patterns": [
      {
        "s": "N + 很 / 不 + 严重",
        "m": "Việc gì đó rất / không nghiêm trọng"
      },
      {
        "s": "严重 dùng cho bệnh, vấn đề, hậu quả — không dùng cho người"
      }
    ]
  },
  {
    "n": 7,
    "zh": "窗户",
    "py": "chuānghu",
    "pos": "Danh từ",
    "vn": "cửa sổ",
    "hv": "song hộ",
    "em": "🪟",
    "lesson": 1,
    "explain": [
      "Bộ phận trên tường để lấy ánh sáng/thông gió."
    ],
    "usage": "Danh từ; thường đi với 打开窗户, 换换空气.",
    "collo": [
      "打开窗户",
      "关窗户",
      "窗户换换空气"
    ],
    "ex_zh": "最好经常打开窗户换换空气。",
    "ex_py": "Zuìhǎo jīngcháng dǎkāi chuānghu huànhuan kōngqì.",
    "ex_vn": "Tốt nhất nên thường xuyên mở cửa sổ để thay đổi không khí.",
    "exList": [
      {
        "zh": "最好经常打开窗户换换空气。",
        "py": "Zuìhǎo jīngcháng dǎkāi chuānghu huànhuan kōngqì.",
        "vn": "Tốt nhất nên thường xuyên mở cửa sổ để thay đổi không khí."
      },
      {
        "zh": "你用毛巾把窗户擦干净吧。",
        "py": "Nǐ yòng máojīn bǎ chuānghu cā gānjìng ba.",
        "vn": "Bạn dùng khăn lau sạch cửa sổ đi."
      },
      {
        "zh": "房间里的窗户很大，光线很好。",
        "py": "Fángjiān li de chuānghu hěn dà, guāngxiàn hěn hǎo.",
        "vn": "Cửa sổ trong phòng rất to, ánh sáng rất tốt."
      }
    ],
    "hanzi": [
      {
        "c": "窗",
        "p": "chuāng",
        "type": "上下结构 · Trên-dưới",
        "st": 12,
        "ord": "穴 (huyệt) trên → 囱(biến thể) dưới",
        "rad": "穴 (huyệt – hang, lỗ)",
        "mean": "cửa sổ",
        "tip": "Bộ 穴(lỗ hổng trên tường) + 囱(ống khói, biểu âm) → LỖ HỔNG để lấy ánh sáng/gió, mở rộng thành CỬA SỔ.",
        "cf": "窗 dễ nhầm với 密 (mì – \"kín, mật\")",
        "w": "窗户 / 窗帘 / 车窗"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Thời tiết mùa xuân lúc lạnh lúc nóng, tốt nhất nên thường xuyên mở cửa sổ để thay đổi không khí.",
        "answer": "春天天气时冷时热，最好经常打开窗户换换空气。",
        "answerPy": "Chūntiān tiānqì shí lěng shí rè, zuìhǎo jīngcháng dǎkāi chuānghu huànhuan kōngqì.",
        "note": "打开窗户换换空气 kết hợp 空气, ôn lại từ vựng của bài.",
        "pair": "时……时……"
      },
      {
        "promptLang": "vi",
        "prompt": "Vì trong phòng hơi nóng, nên bạn mở cửa sổ ra một chút đi.",
        "answer": "因为房间里有点儿热，所以你把窗户打开一点儿吧。",
        "answerPy": "Yīnwèi fángjiān li yǒudiǎnr rè, suǒyǐ nǐ bǎ chuānghu dǎkāi yìdiǎnr ba.",
        "note": "把 + 窗户 + 打开 — câu chữ 把 với bổ ngữ xu hướng.",
        "pair": "因为……所以……"
      }
    ],
    "colloFull": [
      {
        "zh": "打开窗户",
        "py": "dǎkāi chuānghu",
        "vn": "mở cửa sổ"
      },
      {
        "zh": "关窗户",
        "py": "guān chuānghu",
        "vn": "đóng cửa sổ"
      },
      {
        "zh": "擦窗户",
        "py": "cā chuānghu",
        "vn": "lau cửa sổ"
      },
      {
        "zh": "窗户开着",
        "py": "chuānghu kāi zhe",
        "vn": "cửa sổ đang mở"
      },
      {
        "zh": "开窗户换空气",
        "py": "kāi chuānghu huàn kōngqì",
        "vn": "mở cửa sổ cho thoáng"
      }
    ],
    "patterns": [
      {
        "s": "把 + 窗户 + 打开 / 关上",
        "m": "Mở / đóng cửa sổ (câu chữ 把)"
      },
      {
        "s": "开窗户 + 换换空气",
        "m": "Mở cửa sổ cho thoáng khí"
      }
    ]
  },
  {
    "n": 8,
    "zh": "空气",
    "py": "kōngqì",
    "pos": "Danh từ",
    "vn": "không khí",
    "hv": "không khí",
    "em": "💨",
    "lesson": 1,
    "explain": [
      "Chất khí bao quanh trái đất, cần thiết cho hô hấp."
    ],
    "usage": "Danh từ; thường đi với 换换空气, 空气好.",
    "collo": [
      "换换空气",
      "空气好",
      "空气新鲜"
    ],
    "ex_zh": "最好经常打开窗户换换空气。",
    "ex_py": "Zuìhǎo jīngcháng dǎkāi chuānghu huànhuan kōngqì.",
    "ex_vn": "Tốt nhất nên thường xuyên mở cửa sổ để thay đổi không khí.",
    "exList": [
      {
        "zh": "最好经常打开窗户换换空气。",
        "py": "Zuìhǎo jīngcháng dǎkāi chuānghu huànhuan kōngqì.",
        "vn": "Tốt nhất nên thường xuyên mở cửa sổ để thay đổi không khí."
      },
      {
        "zh": "公园里的空气特别新鲜。",
        "py": "Gōngyuán li de kōngqì tèbié xīnxiān.",
        "vn": "Không khí trong công viên đặc biệt trong lành."
      },
      {
        "zh": "这个城市的空气质量不太好。",
        "py": "Zhège chéngshì de kōngqì zhìliàng bú tài hǎo.",
        "vn": "Chất lượng không khí của thành phố này không tốt lắm."
      }
    ],
    "hanzi": [
      {
        "c": "气",
        "p": "qì",
        "type": "独体字 · Chữ đơn (giản thể)",
        "st": 4,
        "ord": "nét liền",
        "rad": "气 (khí)",
        "mean": "khí, không khí",
        "tip": "Chữ tượng hình HƠI/KHÍ bốc lên → nghĩa gốc là KHÍ, kết hợp 空(trống rỗng, bầu trời) thành 空气 = KHÔNG KHÍ.",
        "cf": "气 dễ nhầm với 乞 (qǐ – \"xin, cầu\")",
        "w": "空气 / 天气 / 生气"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Vì không khí trong công viên đặc biệt trong lành, nên chúng ta ra đó đi dạo đi.",
        "answer": "因为公园里的空气特别新鲜，所以我们去散散步吧。",
        "answerPy": "Yīnwèi gōngyuán li de kōngqì tèbié xīnxiān, suǒyǐ wǒmen qù sànsan bù ba.",
        "note": "散散步 — động từ lặp của từ ly hợp: 散 + 散 + 步.",
        "pair": "因为……所以……"
      },
      {
        "promptLang": "vi",
        "prompt": "Cứ mỗi lần trời lạnh là tôi lại thấy chưa quen khí hậu ở đây, không khí cũng khô hơn.",
        "answer": "每次天一冷，我就还不习惯这里的气候，空气也更干。",
        "answerPy": "Měi cì tiān yì lěng, wǒ jiù hái bù xíguàn zhèlǐ de qìhòu, kōngqì yě gèng gān.",
        "note": "每次……一……就…… — nhấn tính lặp lại.",
        "pair": "一……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "空气新鲜",
        "py": "kōngqì xīnxiān",
        "vn": "không khí trong lành"
      },
      {
        "zh": "换换空气",
        "py": "huànhuàn kōngqì",
        "vn": "thay đổi không khí"
      },
      {
        "zh": "空气好",
        "py": "kōngqì hǎo",
        "vn": "không khí tốt"
      },
      {
        "zh": "空气很干",
        "py": "kōngqì hěn gàn",
        "vn": "không khí khô"
      },
      {
        "zh": "新鲜空气",
        "py": "xīnxiān kōngqì",
        "vn": "không khí tươi mới"
      }
    ],
    "patterns": [
      {
        "s": "空气 + 新鲜 / 好 / 干",
        "m": "Không khí trong lành / tốt / khô"
      },
      {
        "s": "换换 + 空气",
        "m": "Cho thoáng khí — động từ lặp làm nhẹ đi"
      }
    ]
  },
  {
    "n": 9,
    "zh": "抽烟",
    "py": "chōuyān",
    "pos": "Động từ",
    "vn": "hút thuốc",
    "hv": "trừu yên",
    "em": "🚬",
    "lesson": 2,
    "explain": [
      "Hành động hút thuốc lá."
    ],
    "usage": "Động từ ly hợp; thường đi với 不要再抽烟了, 抽烟这个动作.",
    "collo": [
      "不要再抽烟了",
      "抽烟对身体",
      "别再抽了"
    ],
    "ex_zh": "他让我以后不要再抽烟了。",
    "ex_py": "Tā ràng wǒ yǐhòu búyào zài chōuyān le.",
    "ex_vn": "Anh ấy bảo tôi sau này đừng hút thuốc nữa.",
    "exList": [
      {
        "zh": "他让我以后不要再抽烟了。",
        "py": "Tā ràng wǒ yǐhòu búyào zài chōuyān le.",
        "vn": "Anh ấy bảo tôi sau này đừng hút thuốc nữa."
      },
      {
        "zh": "抽烟对身体一点儿好处也没有。",
        "py": "Chōuyān duì shēntǐ yìdiǎnr hǎochù yě méiyǒu.",
        "vn": "Hút thuốc không có lợi ích gì cho sức khỏe cả."
      },
      {
        "zh": "为了你和你的家人，别再抽了。",
        "py": "Wèile nǐ hé nǐ de jiārén, bié zài chōu le.",
        "vn": "Vì bạn và gia đình bạn, đừng hút nữa."
      }
    ],
    "hanzi": [
      {
        "c": "抽",
        "p": "chōu",
        "type": "左右结构 · Trái-phải",
        "st": 8,
        "ord": "扌 (thủ) trái → 由 (do) phải",
        "rad": "扌 (thủ – tay)",
        "mean": "rút, kéo ra",
        "tip": "Bộ tay 扌 + 由(biểu âm) → dùng tay RÚT/KÉO ra, mở rộng thành HÚT (khói vào rồi rút ra), kết hợp 烟(khói/thuốc lá) thành 抽烟 = HÚT THUỐC.",
        "cf": "油 (yóu – \"dầu\", bộ 氵\")",
        "w": "抽烟 / 抽出 / 抽时间"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Hút thuốc không những không có lợi cho bản thân, còn ảnh hưởng đến sức khỏe của người xung quanh.",
        "answer": "抽烟不仅对自己没好处，还会影响周围人的身体健康。",
        "answerPy": "Chōuyān bùjǐn duì zìjǐ méi hǎochù, hái huì yǐngxiǎng zhōuwéi rén de shēntǐ jiànkāng.",
        "note": "不仅……还会…… kết hợp 好处, ôn lại điểm ngữ pháp và từ vựng.",
        "pair": "不仅……还……"
      },
      {
        "promptLang": "vi",
        "prompt": "Gia đình cũng luôn phản đối tôi hút thuốc, nhưng bản thân tôi lại thấy không sao.",
        "answer": "家人也一直反对我抽烟，我自己却觉得没什么。",
        "answerPy": "Jiārén yě yìzhí fǎnduì wǒ chōuyān, wǒ zìjǐ què juéde méi shénme.",
        "note": "反对……抽烟 kết hợp 反对, ôn lại từ vựng của bài.",
        "pair": "……，却……"
      }
    ],
    "colloFull": [
      {
        "zh": "别再抽烟了",
        "py": "bié zài chōuyān le",
        "vn": "đừng hút thuốc nữa"
      },
      {
        "zh": "抽烟对身体不好",
        "py": "chōuyān duì shēntǐ bù hǎo",
        "vn": "hút thuốc hại sức khỏe"
      },
      {
        "zh": "反对抽烟",
        "py": "fǎnduì chōuyān",
        "vn": "phản đối hút thuốc"
      },
      {
        "zh": "戒烟",
        "py": "jièyān",
        "vn": "cai thuốc"
      },
      {
        "zh": "抽了一根烟",
        "py": "chōu le yì gēn yān",
        "vn": "hút một điếu thuốc"
      }
    ],
    "patterns": [
      {
        "s": "抽 + 了 + lượng + 烟",
        "m": "抽烟 là từ ly hợp: 抽了一根烟 ✓"
      },
      {
        "s": "抽烟 + 对身体 + 不好",
        "m": "Hút thuốc không tốt cho sức khỏe"
      }
    ]
  },
  {
    "n": 10,
    "zh": "动作",
    "py": "dòngzuò",
    "pos": "Danh từ",
    "vn": "động tác, hành động",
    "hv": "động tác",
    "em": "🤸",
    "lesson": 2,
    "explain": [
      "Cử chỉ/hành vi của cơ thể."
    ],
    "usage": "Danh từ; thường đi với 这个动作, 每个动作.",
    "collo": [
      "这个动作",
      "每个动作",
      "动作看上去"
    ],
    "ex_zh": "可是我觉得抽烟这个动作看上去很帅。",
    "ex_py": "Kěshì wǒ juéde chōuyān zhège dòngzuò kàn shangqu hěn shuài.",
    "ex_vn": "Nhưng tôi thấy động tác hút thuốc trông rất ngầu.",
    "exList": [
      {
        "zh": "可是我觉得抽烟这个动作看上去很帅。",
        "py": "Kěshì wǒ juéde chōuyān zhège dòngzuò kàn shangqu hěn shuài.",
        "vn": "Nhưng tôi thấy động tác hút thuốc trông rất ngầu."
      },
      {
        "zh": "他对自己的要求很高，希望比赛的时候把每个动作都做好。",
        "py": "Tā duì zìjǐ de yāoqiú hěn gāo, xīwàng bǐsài de shíhou bǎ měi ge dòngzuò dōu zuòhǎo.",
        "vn": "Anh ấy yêu cầu bản thân rất cao, hy vọng khi thi đấu làm tốt mỗi động tác."
      },
      {
        "zh": "这个舞蹈动作很难学。",
        "py": "Zhège wǔdǎo dòngzuò hěn nán xué.",
        "vn": "Động tác múa này rất khó học."
      }
    ],
    "hanzi": [
      {
        "c": "作",
        "p": "zuò",
        "type": "左右结构 · Trái-phải",
        "st": 7,
        "ord": "亻 (nhân) trái → 乍 phải",
        "rad": "亻 (nhân – người)",
        "mean": "làm, hành động",
        "tip": "Bộ người 亻 + 乍(biểu âm) → hành động của NGƯỜI, kết hợp 动(chuyển động) thành 动作 = ĐỘNG TÁC.",
        "cf": "昨 (zuó – \"hôm qua\", bộ 日\")",
        "w": "动作 / 工作 / 作业"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tôi biết hút thuốc không tốt, nhưng tôi thấy động tác hút thuốc trông rất ngầu.",
        "answer": "我知道抽烟不好，可是我觉得抽烟这个动作看上去很帅。",
        "answerPy": "Wǒ zhīdào chōuyān bù hǎo, kěshì wǒ juéde chōuyān zhège dòngzuò kàn shangqu hěn shuài.",
        "note": "这个动作看上去很帅 kết hợp 抽烟/帅, ôn lại từ vựng của bài.",
        "pair": "……，可是……"
      },
      {
        "promptLang": "vi",
        "prompt": "Anh ấy hy vọng khi thi đấu, bất kể động tác nào cũng làm cho tốt.",
        "answer": "他希望比赛的时候，不管哪个动作都要做好。",
        "answerPy": "Tā xīwàng bǐsài de shíhou, bùguǎn nǎge dòngzuò dōu yào zuò hǎo.",
        "note": "不管 + 哪个 (nghi vấn phiếm chỉ)，都…… — cái nào cũng vậy.",
        "pair": "不管……都……"
      }
    ],
    "colloFull": [
      {
        "zh": "这个动作",
        "py": "zhège dòngzuò",
        "vn": "động tác này"
      },
      {
        "zh": "每个动作",
        "py": "měi gè dòngzuò",
        "vn": "từng động tác"
      },
      {
        "zh": "动作很帅",
        "py": "dòngzuò hěn shuài",
        "vn": "động tác rất ngầu"
      },
      {
        "zh": "做动作",
        "py": "zuò dòngzuò",
        "vn": "làm động tác"
      },
      {
        "zh": "动作很快",
        "py": "dòngzuò hěn kuài",
        "vn": "động tác rất nhanh"
      }
    ],
    "patterns": [
      {
        "s": "做 + 动作",
        "m": "Thực hiện động tác"
      },
      {
        "s": "动作 + 快 / 慢 / 帅",
        "m": "Động tác nhanh / chậm / đẹp"
      }
    ]
  },
  {
    "n": 11,
    "zh": "帅",
    "py": "shuài",
    "pos": "Tính từ",
    "vn": "đẹp trai, ngầu",
    "hv": "soái",
    "em": "😎",
    "lesson": 2,
    "explain": [
      "Vẻ ngoài/phong thái đẹp, cuốn hút."
    ],
    "usage": "Tính từ; thường đi với 看上去很帅, 长得帅.",
    "collo": [
      "看上去很帅",
      "长得帅",
      "很帅气"
    ],
    "ex_zh": "可是我觉得抽烟这个动作看上去很帅。",
    "ex_py": "Kěshì wǒ juéde chōuyān zhège dòngzuò kàn shangqu hěn shuài.",
    "ex_vn": "Nhưng tôi thấy động tác hút thuốc trông rất ngầu.",
    "exList": [
      {
        "zh": "可是我觉得抽烟这个动作看上去很帅。",
        "py": "Kěshì wǒ juéde chōuyān zhège dòngzuò kàn shangqu hěn shuài.",
        "vn": "Nhưng tôi thấy động tác hút thuốc trông rất ngầu."
      },
      {
        "zh": "小说里的爱情总是很吸引人，男的很帅，女的很漂亮。",
        "py": "Xiǎoshuō li de àiqíng zǒngshì hěn xīyǐn rén, nán de hěn shuài, nǚ de hěn piàoliang.",
        "vn": "Tình yêu trong tiểu thuyết luôn rất hấp dẫn, nam thì đẹp trai, nữ thì xinh đẹp."
      },
      {
        "zh": "他穿这件衣服看起来特别帅。",
        "py": "Tā chuān zhè jiàn yīfu kàn qǐlai tèbié shuài.",
        "vn": "Anh ấy mặc chiếc áo này trông rất đẹp trai."
      }
    ],
    "hanzi": [
      {
        "c": "帅",
        "p": "shuài",
        "type": "左右结构 · Trái-phải (giản thể)",
        "st": 6,
        "ord": "巾 (cân) trái → 卩(biến thể) phải",
        "rad": "巾 (cân – khăn)",
        "mean": "đẹp, chỉ huy",
        "tip": "Bộ khăn 巾 (liên quan trang phục) → mở rộng thành PHONG THÁI ĐẸP, NGẦU (ăn mặc chỉnh tề, phong độ).",
        "cf": "师 (shī – \"thầy\", cũng bộ 巾\")",
        "w": "帅 / 帅气 / 元帅"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Anh ấy trông đẹp trai lắm, nhưng hút thuốc thực sự không tốt cho sức khỏe.",
        "answer": "他长得很帅，但是抽烟对身体真的不好。",
        "answerPy": "Tā zhǎng de hěn shuài, dànshì chōuyān duì shēntǐ zhēnde bù hǎo.",
        "note": "长得很帅 kết hợp 抽烟, ôn lại từ vựng của bài.",
        "pair": "……，但是……"
      },
      {
        "promptLang": "vi",
        "prompt": "Tôi thấy động tác này tuy trông rất ngầu, nhưng học thì không dễ.",
        "answer": "我觉得这个动作虽然看上去很帅，但是学起来不容易。",
        "answerPy": "Wǒ juéde zhège dòngzuò suīrán kàn shangqu hěn shuài, dànshì xué qilai bù róngyì.",
        "note": "V + 起来 — khi bắt tay vào làm thì thấy thế nào.",
        "pair": "虽然……但是……"
      }
    ],
    "colloFull": [
      {
        "zh": "长得帅",
        "py": "zhǎng de shuài",
        "vn": "trông đẹp trai"
      },
      {
        "zh": "看上去很帅",
        "py": "kàn shàngqù hěn shuài",
        "vn": "trông rất ngầu"
      },
      {
        "zh": "很帅气",
        "py": "hěn shuàiqì",
        "vn": "rất phong độ"
      },
      {
        "zh": "帅哥",
        "py": "shuàigē",
        "vn": "anh đẹp trai"
      },
      {
        "zh": "动作很帅",
        "py": "dòngzuò hěn shuài",
        "vn": "động tác rất ngầu"
      }
    ],
    "patterns": [
      {
        "s": "长 / 看上去 + 得 + 帅",
        "m": "Trông đẹp trai, trông ngầu"
      },
      {
        "s": "帅 dùng cho nam; nữ dùng 漂亮 / 美"
      }
    ]
  },
  {
    "n": 12,
    "zh": "出现",
    "py": "chūxiàn",
    "pos": "Động từ",
    "vn": "xuất hiện, nảy sinh",
    "hv": "xuất hiện",
    "em": "✨",
    "lesson": 2,
    "explain": [
      "Bắt đầu tồn tại, hiện ra."
    ],
    "usage": "Động từ; thường đi với 出现问题, 出现在.",
    "collo": [
      "出现问题",
      "身体出现问题",
      "出现情况"
    ],
    "ex_zh": "等你身体出现问题了，后悔就来不及了。",
    "ex_py": "Děng nǐ shēntǐ chūxiàn wèntí le, hòuhuǐ jiù láibují le.",
    "ex_vn": "Đợi đến khi cơ thể bạn xuất hiện vấn đề, hối hận cũng không kịp nữa.",
    "exList": [
      {
        "zh": "等你身体出现问题了，后悔就来不及了。",
        "py": "Děng nǐ shēntǐ chūxiàn wèntí le, hòuhuǐ jiù láibují le.",
        "vn": "Đợi đến khi cơ thể bạn xuất hiện vấn đề, hối hận cũng không kịp nữa."
      },
      {
        "zh": "老孙是个非常热情的人，他总是能在第一时间出现，帮助大家解决问题。",
        "py": "Lǎo Sūn shì ge fēicháng rèqíng de rén, tā zǒngshì néng zài dì-yī shíjiān chūxiàn, bāngzhù dàjiā jiějué wèntí.",
        "vn": "Lão Tôn là một người rất nhiệt tình, anh ấy luôn có thể xuất hiện ngay lập tức, giúp mọi người giải quyết vấn đề."
      },
      {
        "zh": "如果出现这种情况，请及时联系我们。",
        "py": "Rúguǒ chūxiàn zhè zhǒng qíngkuàng, qǐng jíshí liánxì wǒmen.",
        "vn": "Nếu xuất hiện tình huống này, xin kịp thời liên hệ với chúng tôi."
      }
    ],
    "hanzi": [
      {
        "c": "现",
        "p": "xiàn",
        "type": "左右结构 · Trái-phải (giản thể)",
        "st": 8,
        "ord": "王 (biến thể ngọc) trái → 见 (kiến) phải",
        "rad": "王 (ngọc, biến thể)",
        "mean": "hiện ra",
        "tip": "Bộ ngọc 王 (của quý lộ ra) + 见(nhìn thấy) → HIỆN RA để nhìn thấy được, kết hợp 出(ra) thành 出现 = XUẤT HIỆN.",
        "cf": "现 dễ nhầm với 环 (huán – \"vòng\")",
        "w": "出现 / 现在 / 表现"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Đợi đến khi sức khỏe xuất hiện vấn đề, hối hận cũng không kịp nữa.",
        "answer": "等身体出现问题了，后悔就来不及了。",
        "answerPy": "Děng shēntǐ chūxiàn wèntí le, hòuhuǐ jiù láibují le.",
        "note": "出现问题……后悔……来不及了 kết hợp 后悔/来不及, ôn lại từ vựng của bài.",
        "pair": "等……就……"
      },
      {
        "promptLang": "vi",
        "prompt": "Nếu xuất hiện bất kỳ vấn đề nào, bạn đều có thể liên hệ với tôi.",
        "answer": "如果出现任何问题，你都可以跟我联系。",
        "answerPy": "Rúguǒ chūxiàn rènhé wèntí, nǐ dōu kěyǐ gēn wǒ liánxì.",
        "note": "出现问题 kết hợp 任何, ôn lại từ vựng Bài 5.",
        "pair": "如果……"
      }
    ],
    "colloFull": [
      {
        "zh": "出现问题",
        "py": "chūxiàn wèntí",
        "vn": "nảy sinh vấn đề"
      },
      {
        "zh": "出现情况",
        "py": "chūxiàn qíngkuàng",
        "vn": "phát sinh tình huống"
      },
      {
        "zh": "出现在",
        "py": "chūxiàn zài",
        "vn": "xuất hiện ở"
      },
      {
        "zh": "很少出现",
        "py": "hěn shǎo chūxiàn",
        "vn": "rất ít khi xuất hiện"
      },
      {
        "zh": "身体出现问题",
        "py": "shēntǐ chūxiàn wèntí",
        "vn": "cơ thể có vấn đề"
      }
    ],
    "patterns": [
      {
        "s": "Sub + 出现 + 问题",
        "m": "Cái gì đó nảy sinh vấn đề"
      },
      {
        "s": "✗ 出现了他 → ✓ 他出现了",
        "m": "出现 không mang tân ngữ chỉ người"
      }
    ]
  },
  {
    "n": 13,
    "zh": "后悔",
    "py": "hòuhuǐ",
    "pos": "Động từ",
    "vn": "ân hận, hối hận",
    "hv": "hậu hối",
    "em": "😔",
    "lesson": 2,
    "explain": [
      "Cảm giác tiếc nuối về việc đã làm/không làm trước đó."
    ],
    "usage": "Động từ; thường đi với 后悔就来不及了, 让你后悔.",
    "collo": [
      "后悔就来不及了",
      "让你后悔",
      "别后悔"
    ],
    "ex_zh": "等你身体出现问题了，后悔就来不及了。",
    "ex_py": "Děng nǐ shēntǐ chūxiàn wèntí le, hòuhuǐ jiù láibují le.",
    "ex_vn": "Đợi đến khi cơ thể bạn xuất hiện vấn đề, hối hận cũng không kịp nữa.",
    "exList": [
      {
        "zh": "等你身体出现问题了，后悔就来不及了。",
        "py": "Děng nǐ shēntǐ chūxiàn wèntí le, hòuhuǐ jiù láibují le.",
        "vn": "Đợi đến khi cơ thể bạn xuất hiện vấn đề, hối hận cũng không kịp nữa."
      },
      {
        "zh": "生气时不要急着做决定，因为这个时候做的决定可能让你后悔。",
        "py": "Shēngqì shí búyào jízhe zuò juédìng, yīnwèi zhège shíhou zuò de juédìng kěnéng ràng nǐ hòuhuǐ.",
        "vn": "Lúc giận đừng vội đưa ra quyết định, vì quyết định lúc này có thể khiến bạn hối hận."
      },
      {
        "zh": "我很后悔当时没有听你的建议。",
        "py": "Wǒ hěn hòuhuǐ dāngshí méiyǒu tīng nǐ de jiànyì.",
        "vn": "Tôi rất hối hận lúc đó không nghe theo lời khuyên của bạn."
      }
    ],
    "hanzi": [
      {
        "c": "悔",
        "p": "huǐ",
        "type": "左右结构 · Trái-phải",
        "st": 10,
        "ord": "忄 (tâm) trái → 每 (mỗi) phải",
        "rad": "忄 (tâm – lòng)",
        "mean": "ân hận",
        "tip": "Bộ tâm 忄 (cảm xúc trong lòng) + 每(biểu âm) → cảm giác TIẾC NUỐI trong lòng, kết hợp 后(sau) thành 后悔 = HỐI HẬN (tiếc nuối về sau).",
        "cf": "诲 (huì – \"dạy bảo\", bộ 讠\")",
        "w": "后悔 / 悔改 / 后悔莫及"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Đừng đợi đến khi sức khỏe xuất hiện vấn đề mới hối hận, lúc đó đã không còn kịp nữa.",
        "answer": "别等身体出现问题了才后悔，那时候就来不及了。",
        "answerPy": "Bié děng shēntǐ chūxiàn wèntí le cái hòuhuǐ, nà shíhou jiù láibují le.",
        "note": "才后悔……来不及了 kết hợp 出现/来不及, ôn lại từ vựng của bài.",
        "pair": "等……就……"
      },
      {
        "promptLang": "vi",
        "prompt": "Lúc đang giận thì đừng vội quyết định, nếu không sau này sẽ hối hận.",
        "answer": "生气时不要急着做决定，不然以后会后悔的。",
        "answerPy": "Shēngqì shí búyào jízhe zuò juédìng, bùrán yǐhòu huì hòuhuǐ de.",
        "note": "不然 = 否则 — nếu không thì hậu quả sẽ là…",
        "pair": "不然……"
      }
    ],
    "colloFull": [
      {
        "zh": "别后悔",
        "py": "bié hòuhuǐ",
        "vn": "đừng hối hận"
      },
      {
        "zh": "让你后悔",
        "py": "ràng nǐ hòuhuǐ",
        "vn": "khiến bạn hối hận"
      },
      {
        "zh": "后悔就来不及了",
        "py": "hòuhuǐ jiù láibují le",
        "vn": "hối hận thì cũng muộn"
      },
      {
        "zh": "很后悔",
        "py": "hěn hòuhuǐ",
        "vn": "rất hối hận"
      },
      {
        "zh": "后悔做了",
        "py": "hòuhuǐ zuò le",
        "vn": "hối hận vì đã làm"
      }
    ],
    "patterns": [
      {
        "s": "Sub + 后悔 + V",
        "m": "Ai đó hối hận vì đã làm gì"
      },
      {
        "s": "等……才后悔，就来不及了",
        "m": "Đợi đến khi … mới hối hận thì đã muộn"
      }
    ]
  },
  {
    "n": 14,
    "zh": "来不及",
    "py": "láibují",
    "pos": "Động từ",
    "vn": "không kịp",
    "hv": "lai bất cập",
    "em": "⏰",
    "lesson": 2,
    "explain": [
      "Diễn tả việc vì thời gian ngắn nên không kịp làm gì đó. Có thể dùng độc lập hoặc mang động từ theo sau."
    ],
    "usage": "来不及 (đứng một mình); 来不及 + động từ.",
    "collo": [
      "来不及了",
      "来不及开会",
      "来不及做"
    ],
    "ex_zh": "等你身体出现问题了，后悔就来不及了。",
    "ex_py": "Děng nǐ shēntǐ chūxiàn wèntí le, hòuhuǐ jiù láibují le.",
    "ex_vn": "Đợi đến khi cơ thể bạn xuất hiện vấn đề, hối hận cũng không kịp nữa.",
    "exList": [
      {
        "zh": "等你身体出现问题了，后悔就来不及了。",
        "py": "Děng nǐ shēntǐ chūxiàn wèntí le, hòuhuǐ jiù láibují le.",
        "vn": "Đợi đến khi cơ thể bạn xuất hiện vấn đề, hối hận cũng không kịp nữa."
      },
      {
        "zh": "今天来不及开会了，明天我们再找时间说这个问题吧。",
        "py": "Jīntiān láibují kāihuì le, míngtiān wǒmen zài zhǎo shíjiān shuō zhège wèntí ba.",
        "vn": "Hôm nay không kịp họp nữa rồi, ngày mai chúng ta tìm thời gian bàn vấn đề này nhé."
      },
      {
        "zh": "你不是和同学约了下午两点见面吗？再不走就来不及了。",
        "py": "Nǐ bú shì hé tóngxué yuēle xiàwǔ liǎng diǎn jiànmiàn ma? Zài bù zǒu jiù láibují le.",
        "vn": "Bạn chẳng phải đã hẹn bạn học 2 giờ chiều gặp mặt sao? Không đi ngay là không kịp đâu."
      }
    ],
    "hanzi": [
      {
        "c": "及",
        "p": "jí",
        "type": "独体字 · Chữ đơn",
        "st": 3,
        "ord": "nét liền",
        "rad": "又 (hựu – tay phải)",
        "mean": "kịp, đến",
        "tip": "Chữ tượng hình bàn tay ĐUỔI KỊP một người phía trước → nghĩa gốc là KỊP, ĐẠT ĐẾN; 来不及 = không kịp đến.",
        "cf": "及 dễ nhầm với 乃 (nǎi – \"bèn, thì\")",
        "w": "来不及 / 来得及 / 及时"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Nếu bây giờ không đi, e rằng không kịp bắt tàu nữa.",
        "answer": "如果现在不走，恐怕来不及赶火车了。",
        "answerPy": "Rúguǒ xiànzài bù zǒu, kǒngpà láibují gǎn huǒchē le.",
        "note": "来不及 + động từ — không kịp làm gì.",
        "pair": "如果……"
      },
      {
        "promptLang": "vi",
        "prompt": "Đợi đến khi vấn đề nghiêm trọng rồi mới xử lý thì đã không kịp nữa.",
        "answer": "等问题严重了才处理就来不及了。",
        "answerPy": "Děng wèntí yánzhòng le cái chǔlǐ jiù láibují le.",
        "note": "等……才……就来不及了 kết hợp 严重, ôn lại từ vựng của bài.",
        "pair": "等……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "来不及了",
        "py": "láibují le",
        "vn": "không kịp nữa rồi"
      },
      {
        "zh": "来不及做",
        "py": "láibují zuò",
        "vn": "không kịp làm"
      },
      {
        "zh": "来不及开会",
        "py": "láibují kāi huì",
        "vn": "không kịp họp"
      },
      {
        "zh": "已经来不及",
        "py": "yǐjīng láibují",
        "vn": "đã không kịp"
      },
      {
        "zh": "后悔来不及",
        "py": "hòuhuǐ láibují",
        "vn": "hối cũng không kịp"
      }
    ],
    "patterns": [
      {
        "s": "来不及 + V",
        "m": "Không kịp làm gì"
      },
      {
        "s": "来不及 ↔ 来得及",
        "m": "Không kịp ↔ còn kịp"
      }
    ]
  },
  {
    "n": 15,
    "zh": "反对",
    "py": "fǎnduì",
    "pos": "Động từ",
    "vn": "phản đối",
    "hv": "phản đối",
    "em": "🙅‍♂️",
    "lesson": 2,
    "explain": [
      "Không đồng ý, phản kháng lại một ý kiến/hành động."
    ],
    "usage": "Động từ, mang tân ngữ trực tiếp: 反对我抽烟, 反对这个计划.",
    "collo": [
      "反对我抽烟",
      "一直反对",
      "反对这个计划"
    ],
    "ex_zh": "其实家人也一直反对我抽烟，我自己却觉得没什么。",
    "ex_py": "Qíshí jiārén yě yìzhí fǎnduì wǒ chōuyān, wǒ zìjǐ què juéde méi shénme.",
    "ex_vn": "Thực ra gia đình cũng luôn phản đối tôi hút thuốc, nhưng bản thân tôi lại thấy không sao.",
    "exList": [
      {
        "zh": "其实家人也一直反对我抽烟，我自己却觉得没什么。",
        "py": "Qíshí jiārén yě yìzhí fǎnduì wǒ chōuyān, wǒ zìjǐ què juéde méi shénme.",
        "vn": "Thực ra gia đình cũng luôn phản đối tôi hút thuốc, nhưng bản thân tôi lại thấy không sao."
      },
      {
        "zh": "我本来以为她会反对我这么做，没想到她竟然支持我。",
        "py": "Wǒ běnlái yǐwéi tā huì fǎnduì wǒ zhème zuò, méi xiǎngdào tā jìngrán zhīchí wǒ.",
        "vn": "Tôi vốn tưởng cô ấy sẽ phản đối tôi làm vậy, không ngờ cô ấy lại ủng hộ tôi."
      },
      {
        "zh": "你看一下，现在有多少人同意这个计划？",
        "py": "Nǐ kàn yíxià, xiànzài yǒu duōshao rén tóngyì zhège jìhuà?",
        "vn": "Bạn xem thử, hiện có bao nhiêu người đồng ý kế hoạch này?"
      }
    ],
    "hanzi": [
      {
        "c": "反",
        "p": "fǎn",
        "type": "独体字 · Chữ đơn",
        "st": 4,
        "ord": "nét liền",
        "rad": "又 (hựu, biến thể)",
        "mean": "ngược lại, phản",
        "tip": "Chữ tượng hình bàn tay LẬT NGƯỢC lại → nghĩa gốc là NGƯỢC LẠI, kết hợp 对(đối lập) thành 反对 = PHẢN ĐỐI.",
        "cf": "返 (fǎn – \"trở về\", bộ 辶\")",
        "w": "反对 / 反而 / 相反"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Gia đình luôn phản đối anh ấy hút thuốc, nhưng bản thân anh ấy lại thấy không sao.",
        "answer": "家人一直反对他抽烟，但他自己却觉得没什么。",
        "answerPy": "Jiārén yìzhí fǎnduì tā chōuyān, dàn tā zìjǐ què juéde méi shénme.",
        "note": "反对……抽烟 kết hợp 抽烟, ôn lại từ vựng của bài.",
        "pair": "……，却……"
      },
      {
        "promptLang": "vi",
        "prompt": "Tôi vốn tưởng mọi người sẽ phản đối kế hoạch này, không ngờ mọi người đều ủng hộ.",
        "answer": "我本来以为大家会反对这个计划，没想到大家都支持。",
        "answerPy": "Wǒ běnlái yǐwéi dàjiā huì fǎnduì zhège jìhuà, méi xiǎngdào dàjiā dōu zhīchí.",
        "note": "本来以为……没想到……支持 kết hợp 以为/支持, ôn lại nhiều từ vựng Bài 4/6.",
        "pair": "以为……没想到……"
      }
    ],
    "colloFull": [
      {
        "zh": "反对我抽烟",
        "py": "fǎnduì wǒ chōuyān",
        "vn": "phản đối tôi hút thuốc"
      },
      {
        "zh": "一直反对",
        "py": "yīzhí fǎnduì",
        "vn": "luôn phản đối"
      },
      {
        "zh": "反对这个计划",
        "py": "fǎnduì zhège jìhuà",
        "vn": "phản đối kế hoạch này"
      },
      {
        "zh": "表示反对",
        "py": "biǎoshì fǎnduì",
        "vn": "tỏ ý phản đối"
      },
      {
        "zh": "没人反对",
        "py": "méi rén fǎnduì",
        "vn": "không ai phản đối"
      }
    ],
    "patterns": [
      {
        "s": "Sub + 反对 + ai + V",
        "m": "Ai phản đối việc ai làm gì"
      },
      {
        "s": "反对 ↔ 同意 / 支持",
        "m": "Phản đối ↔ đồng ý / ủng hộ"
      }
    ]
  },
  {
    "n": 16,
    "zh": "大夫",
    "py": "dàifu",
    "pos": "Danh từ",
    "vn": "bác sĩ",
    "hv": "đại phu",
    "em": "👨‍⚕️",
    "lesson": 3,
    "explain": [
      "Người khám chữa bệnh (cách gọi khẩu ngữ của 医生)."
    ],
    "usage": "Danh từ; thường đi với 大夫说, 看大夫.",
    "collo": [
      "大夫说",
      "看大夫",
      "大夫告诉我"
    ],
    "ex_zh": "我最近眼睛总是跳，大夫说是因为我长时间看电脑，眼睛太累。",
    "ex_py": "Wǒ zuìjìn yǎnjing zǒngshì tiào, dàifu shuō shì yīnwèi wǒ cháng shíjiān kàn diànnǎo, yǎnjing tài lèi.",
    "ex_vn": "Gần đây mắt tôi cứ giật liên tục, bác sĩ nói là do tôi nhìn máy tính lâu quá, mắt quá mỏi.",
    "exList": [
      {
        "zh": "我最近眼睛总是跳，大夫说是因为我长时间看电脑，眼睛太累。",
        "py": "Wǒ zuìjìn yǎnjing zǒngshì tiào, dàifu shuō shì yīnwèi wǒ cháng shíjiān kàn diànnǎo, yǎnjing tài lèi.",
        "vn": "Gần đây mắt tôi cứ giật liên tục, bác sĩ nói là do tôi nhìn máy tính lâu quá, mắt quá mỏi."
      },
      {
        "zh": "没事儿，大夫说不严重。",
        "py": "Méishìr, dàifu shuō bù yánzhòng.",
        "vn": "Không sao, bác sĩ nói không nghiêm trọng."
      },
      {
        "zh": "医生也这么说，他还告诉我要多向远处看看。",
        "py": "Yīshēng yě zhème shuō, tā hái gàosu wǒ yào duō xiàng yuǎn chù kànkan.",
        "vn": "Bác sĩ cũng nói vậy, ông ấy còn bảo tôi nên nhìn xa nhiều hơn."
      }
    ],
    "hanzi": [
      {
        "c": "大",
        "p": "dài",
        "type": "独体字 · Chữ đơn",
        "st": 3,
        "ord": "nét liền",
        "rad": "大 (đại)",
        "mean": "lớn (đọc \"dài\" trong 大夫)",
        "tip": "大 thường đọc \"dà\" (lớn), nhưng riêng trong từ 大夫 (bác sĩ) đọc là \"dài\" — một trường hợp đặc biệt cần ghi nhớ.",
        "cf": "大 (dà – \"lớn\", đọc khác trong đa số trường hợp)",
        "w": "大夫 / 大人 / 大夫（专指医生）"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Bác sĩ nói mắt tôi quá mỏi là do tôi nhìn máy tính lâu quá.",
        "answer": "大夫说我的眼睛太累是因为我长时间看电脑。",
        "answerPy": "Dàifu shuō wǒ de yǎnjing tài lèi shì yīnwèi wǒ cháng shíjiān kàn diànnǎo.",
        "note": "大夫说是因为…… — bác sĩ nói là do….",
        "pair": "因为……"
      },
      {
        "promptLang": "vi",
        "prompt": "Bạn yên tâm, bác sĩ đã nói không nghiêm trọng thì chỉ cần uống nhiều nước là khỏi.",
        "answer": "你放心，既然大夫说不严重，那只要多喝点儿水就好了。",
        "answerPy": "Nǐ fàngxīn, jìrán dàifu shuō bù yánzhòng, nà zhǐyào duō hē diǎnr shuǐ jiù hǎo le.",
        "note": "既然 + sự thật đã biết，那 / 就 + kết luận.",
        "pair": "既然……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "看大夫",
        "py": "kàn dàifu",
        "vn": "đi khám bác sĩ"
      },
      {
        "zh": "大夫说",
        "py": "dàifu shuō",
        "vn": "bác sĩ nói"
      },
      {
        "zh": "王大夫",
        "py": "wáng dàifu",
        "vn": "bác sĩ Vương"
      },
      {
        "zh": "问大夫",
        "py": "wèn dàifu",
        "vn": "hỏi bác sĩ"
      },
      {
        "zh": "大夫告诉我",
        "py": "dàifu gàosu wǒ",
        "vn": "bác sĩ bảo tôi"
      }
    ],
    "patterns": [
      {
        "s": "看 + 大夫",
        "m": "Đi khám bác sĩ"
      },
      {
        "s": "大夫 ≈ 医生",
        "m": "大夫 thiên khẩu ngữ, 医生 thiên văn viết"
      }
    ]
  },
  {
    "n": 17,
    "zh": "植物",
    "py": "zhíwù",
    "pos": "Danh từ",
    "vn": "thực vật",
    "hv": "thực vật",
    "em": "🌿",
    "lesson": 3,
    "explain": [
      "Sinh vật sống bằng quang hợp như cây cối, hoa cỏ."
    ],
    "usage": "Danh từ; thường đi với 绿色的植物, 看看植物.",
    "collo": [
      "绿色的植物",
      "多看看植物",
      "养植物"
    ],
    "ex_zh": "尤其是多看看绿色的植物。",
    "ex_py": "Yóuqí shì duō kànkan lǜsè de zhíwù.",
    "ex_vn": "Đặc biệt là nên nhìn nhiều vào cây xanh.",
    "exList": [
      {
        "zh": "尤其是多看看绿色的植物。",
        "py": "Yóuqí shì duō kànkan lǜsè de zhíwù.",
        "vn": "Đặc biệt là nên nhìn nhiều vào cây xanh."
      },
      {
        "zh": "她家里养了很多植物。",
        "py": "Tā jiā li yǎngle hěn duō zhíwù.",
        "vn": "Nhà cô ấy trồng rất nhiều cây cảnh."
      },
      {
        "zh": "这种植物需要充足的阳光。",
        "py": "Zhè zhǒng zhíwù xūyào chōngzú de yángguāng.",
        "vn": "Loại cây này cần đủ ánh nắng."
      }
    ],
    "hanzi": [
      {
        "c": "植",
        "p": "zhí",
        "type": "左右结构 · Trái-phải",
        "st": 12,
        "ord": "木 (mộc) trái → 直 (trực) phải",
        "rad": "木 (mộc – cây)",
        "mean": "trồng",
        "tip": "Bộ cây 木 + 直(thẳng đứng, biểu âm) → CÂY được TRỒNG THẲNG, kết hợp 物(vật thể) thành 植物 = THỰC VẬT.",
        "cf": "值 (zhí – \"giá trị\", bộ 亻\")",
        "w": "植物 / 种植 / 植物园"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Bác sĩ bảo tôi không những phải nhìn xa nhiều hơn, mà còn nên ngắm cây xanh nhiều hơn.",
        "answer": "医生告诉我不但要多向远处看看，而且尤其要多看看绿色的植物。",
        "answerPy": "Yīshēng gàosu wǒ búdàn yào duō xiàng yuǎnchù kànkan, érqiě yóuqí yào duō kànkan lǜsè de zhíwù.",
        "note": "尤其 là từ bài 5 — đặc biệt là.",
        "pair": "不但……而且……"
      },
      {
        "promptLang": "vi",
        "prompt": "Nhà tôi không những trồng rất nhiều cây, mà ngày nào tôi cũng tưới nước cho chúng.",
        "answer": "我家不但养了很多植物，而且每天我都给它们浇水。",
        "answerPy": "Wǒ jiā búdàn yǎngle hěn duō zhíwù, érqiě měi tiān wǒ dōu gěi tāmen jiāoshuǐ.",
        "note": "给 + đối tượng + 浇水 — tưới nước cho cái gì.",
        "pair": "不但……而且……"
      }
    ],
    "colloFull": [
      {
        "zh": "绿色的植物",
        "py": "lǜsè de zhíwù",
        "vn": "cây xanh"
      },
      {
        "zh": "养植物",
        "py": "yǎng zhíwù",
        "vn": "trồng cây"
      },
      {
        "zh": "多看看植物",
        "py": "duō kànkàn zhíwù",
        "vn": "nhìn cây nhiều hơn"
      },
      {
        "zh": "植物很多",
        "py": "zhíwù hěn duō",
        "vn": "cây cối rất nhiều"
      },
      {
        "zh": "给植物浇水",
        "py": "gěi zhíwù jiāoshuǐ",
        "vn": "tưới nước cho cây"
      }
    ],
    "patterns": [
      {
        "s": "养 + 植物",
        "m": "Trồng, chăm cây"
      },
      {
        "s": "给 + 植物 + 浇水",
        "m": "Tưới nước cho cây"
      }
    ]
  },
  {
    "n": 18,
    "zh": "研究",
    "py": "yánjiū",
    "pos": "Động từ",
    "vn": "nghiên cứu",
    "hv": "nghiên cứu",
    "em": "🔬",
    "lesson": 3,
    "explain": [
      "Tìm hiểu sâu, khảo sát một vấn đề khoa học."
    ],
    "usage": "Động từ/danh từ; thường đi với 研究发现, 做研究.",
    "collo": [
      "研究发现",
      "做研究",
      "研究显示"
    ],
    "ex_zh": "研究发现，如果人一天静坐超过6小时，就会影响身体健康。",
    "ex_py": "Yánjiū fāxiàn, rúguǒ rén yì tiān jìngzuò chāoguò liù xiǎoshí, jiù huì yǐngxiǎng shēntǐ jiànkāng.",
    "ex_vn": "Nghiên cứu phát hiện, nếu một người ngồi yên một ngày quá 6 tiếng, sẽ ảnh hưởng đến sức khỏe.",
    "exList": [
      {
        "zh": "研究发现，如果人一天静坐超过6小时，就会影响身体健康。",
        "py": "Yánjiū fāxiàn, rúguǒ rén yì tiān jìngzuò chāoguò liù xiǎoshí, jiù huì yǐngxiǎng shēntǐ jiànkāng.",
        "vn": "Nghiên cứu phát hiện, nếu một người ngồi yên một ngày quá 6 tiếng, sẽ ảnh hưởng đến sức khỏe."
      },
      {
        "zh": "他正在研究一个新的方法。",
        "py": "Tā zhèngzài yánjiū yí ge xīn de fāngfǎ.",
        "vn": "Anh ấy đang nghiên cứu một phương pháp mới."
      },
      {
        "zh": "这项研究花了三年时间。",
        "py": "Zhè xiàng yánjiū huāle sān nián shíjiān.",
        "vn": "Nghiên cứu này đã mất ba năm thời gian."
      }
    ],
    "hanzi": [
      {
        "c": "究",
        "p": "jiū",
        "type": "上下结构 · Trên-dưới",
        "st": 7,
        "ord": "穴 (huyệt) trên → 九 (cửu) dưới",
        "rad": "穴 (huyệt – hang)",
        "mean": "truy cứu, tìm tòi",
        "tip": "Bộ 穴(đào sâu vào) + 九(biểu âm) → ĐÀO SÂU TÌM TÒI, kết hợp 研(mài giũa, nghiên cứu) thành 研究 = NGHIÊN CỨU.",
        "cf": "穷 (qióng – \"nghèo\", cũng bộ 穴\")",
        "w": "研究 / 研究生 / 研究所"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Nghiên cứu phát hiện, nếu ngồi yên quá lâu thì sức khỏe sẽ bị ảnh hưởng.",
        "answer": "研究发现，要是长时间静坐，身体健康就会受到影响。",
        "answerPy": "Yánjiū fāxiàn, yàoshi chángshíjiān jìngzuò, shēntǐ jiànkāng jiù huì shòudào yǐngxiǎng.",
        "note": "受到影响 — 受到 là từ bài 5, mang sắc thái bị động.",
        "pair": "要是……就……"
      },
      {
        "promptLang": "vi",
        "prompt": "Bạn tốt nghiệp xong định làm gì? Tôi thì đang cân nhắc có nên học cao học hay không.",
        "answer": "你毕业后有什么打算？我既想工作，又在考虑要不要读研究生。",
        "answerPy": "Nǐ bìyè hòu yǒu shénme dǎsuàn? Wǒ jì xiǎng gōngzuò, yòu zài kǎolǜ yào bu yào dú yánjiūshēng.",
        "note": "毕业 là từ bài 2, 考虑 là từ bài 5 — hai từ cũ trong một câu.",
        "pair": "既……又……"
      }
    ],
    "colloFull": [
      {
        "zh": "研究发现",
        "py": "yánjiū fāxiàn",
        "vn": "nghiên cứu phát hiện"
      },
      {
        "zh": "做研究",
        "py": "zuò yánjiū",
        "vn": "làm nghiên cứu"
      },
      {
        "zh": "研究显示",
        "py": "yánjiū xiǎnshì",
        "vn": "nghiên cứu cho thấy"
      },
      {
        "zh": "研究生",
        "py": "yánjiūshēng",
        "vn": "nghiên cứu sinh"
      },
      {
        "zh": "研究问题",
        "py": "yánjiū wèntí",
        "vn": "nghiên cứu vấn đề"
      }
    ],
    "patterns": [
      {
        "s": "研究 + 发现 / 显示 + mệnh đề",
        "m": "Nghiên cứu cho thấy rằng …"
      },
      {
        "s": "研究 + 生",
        "m": "Nghiên cứu sinh, học viên cao học"
      }
    ]
  },
  {
    "n": 19,
    "zh": "超过",
    "py": "chāoguò",
    "pos": "Động từ",
    "vn": "vượt quá",
    "hv": "siêu quá",
    "em": "📈",
    "lesson": 3,
    "explain": [
      "Vượt lên trên một mức/giới hạn nào đó."
    ],
    "usage": "Động từ, mang số lượng làm tân ngữ: 超过6小时, 超过一半.",
    "collo": [
      "超过6小时",
      "超过一半",
      "超过三分之二"
    ],
    "ex_zh": "研究发现，如果人一天静坐超过6小时，就会影响身体健康。",
    "ex_py": "Yánjiū fāxiàn, rúguǒ rén yì tiān jìngzuò chāoguò liù xiǎoshí, jiù huì yǐngxiǎng shēntǐ jiànkāng.",
    "ex_vn": "Nghiên cứu phát hiện, nếu một người ngồi yên một ngày quá 6 tiếng, sẽ ảnh hưởng đến sức khỏe.",
    "exList": [
      {
        "zh": "研究发现，如果人一天静坐超过6小时，就会影响身体健康。",
        "py": "Yánjiū fāxiàn, rúguǒ rén yì tiān jìngzuò chāoguò liù xiǎoshí, jiù huì yǐngxiǎng shēntǐ jiànkāng.",
        "vn": "Nghiên cứu phát hiện, nếu một người ngồi yên một ngày quá 6 tiếng, sẽ ảnh hưởng đến sức khỏe."
      },
      {
        "zh": "一共有十五个人，超过了三分之二。",
        "py": "Yígòng yǒu shíwǔ ge rén, chāoguòle sānfēnzhī'èr.",
        "vn": "Tổng cộng có mười lăm người, vượt quá hai phần ba."
      },
      {
        "zh": "今天的气温超过了三十度。",
        "py": "Jīntiān de qìwēn chāoguòle sānshí dù.",
        "vn": "Nhiệt độ hôm nay đã vượt quá 30 độ."
      }
    ],
    "hanzi": [
      {
        "c": "超",
        "p": "chāo",
        "type": "半包围结构 · Bán bao vây",
        "st": 12,
        "ord": "走 (tẩu) bao ngoài → 召 trong",
        "rad": "走 (tẩu – chạy)",
        "mean": "vượt qua",
        "tip": "Bộ 走(chạy, di chuyển) + 召(biểu âm) → CHẠY VƯỢT LÊN, kết hợp 过(qua) thành 超过 = VƯỢT QUÁ.",
        "cf": "召 (zhào – \"triệu tập\", không có bộ 走\")",
        "w": "超过 / 超市 / 超级"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Nếu ngồi yên vượt quá 6 tiếng một ngày, sẽ ảnh hưởng đến sức khỏe.",
        "answer": "如果一天静坐超过6小时，就会影响身体健康。",
        "answerPy": "Rúguǒ yì tiān jìngzuò chāoguò liù xiǎoshí, jiù huì yǐngxiǎng shēntǐ jiànkāng.",
        "note": "超过6小时 kết hợp cấu trúc 如果……就…….",
        "pair": "如果……就……"
      },
      {
        "promptLang": "vi",
        "prompt": "Vì tổng cộng có mười lăm người đồng ý, nên đã vượt quá hai phần ba rồi.",
        "answer": "因为一共有十五个人同意，所以已经超过了三分之二。",
        "answerPy": "Yīnwèi yígòng yǒu shíwǔ ge rén tóngyì, suǒyǐ yǐjīng chāoguòle sān fēn zhī èr.",
        "note": "三分之二 — phân số đọc \"mẫu số 分之 tử số\".",
        "pair": "因为……所以……"
      }
    ],
    "colloFull": [
      {
        "zh": "超过一半",
        "py": "chāoguò yíbàn",
        "vn": "vượt quá một nửa"
      },
      {
        "zh": "超过6小时",
        "py": "chāoguò xiǎoshí",
        "vn": "quá 6 tiếng"
      },
      {
        "zh": "超过三分之二",
        "py": "chāoguò sān fēn zhī èr",
        "vn": "vượt quá hai phần ba"
      },
      {
        "zh": "不超过",
        "py": "bù chāoguò",
        "vn": "không vượt quá"
      },
      {
        "zh": "超过他",
        "py": "chāoguò tā",
        "vn": "vượt qua anh ấy"
      }
    ],
    "patterns": [
      {
        "s": "超过 + số lượng",
        "m": "Vượt quá bao nhiêu"
      },
      {
        "s": "不超过 + số lượng",
        "m": "Không quá bao nhiêu"
      }
    ]
  },
  {
    "n": 20,
    "zh": "散步",
    "py": "sànbù",
    "pos": "Động từ",
    "vn": "đi dạo",
    "hv": "tán bộ",
    "em": "🚶",
    "lesson": 3,
    "explain": [
      "Đi bộ thong thả, thư giãn."
    ],
    "usage": "Động từ ly hợp, hay dùng dạng lặp AAB: 散散步.",
    "collo": [
      "去散散步",
      "散散步吧",
      "出去散步"
    ],
    "ex_zh": "好，咱们午饭后就去附近的公园散散步吧。",
    "ex_py": "Hǎo, zánmen wǔfàn hòu jiù qù fùjìn de gōngyuán sànsan bù ba.",
    "ex_vn": "Được, chúng ta ăn trưa xong thì đi dạo ở công viên gần đây đi.",
    "exList": [
      {
        "zh": "好，咱们午饭后就去附近的公园散散步吧。",
        "py": "Hǎo, zánmen wǔfàn hòu jiù qù fùjìn de gōngyuán sànsan bù ba.",
        "vn": "Được, chúng ta ăn trưa xong thì đi dạo ở công viên gần đây đi."
      },
      {
        "zh": "晚饭后，一家人一起出去散散步，是一件很幸福的事情。",
        "py": "Wǎnfàn hòu, yì jiā rén yìqǐ chūqu sànsan bù, shì yí jiàn hěn xìngfú de shìqing.",
        "vn": "Sau bữa tối, cả nhà cùng nhau ra ngoài đi dạo, là một việc rất hạnh phúc."
      },
      {
        "zh": "散步是生活中最简单的锻炼方法。",
        "py": "Sànbù shì shēnghuó zhōng zuì jiǎndān de duànliàn fāngfǎ.",
        "vn": "Đi dạo là phương pháp luyện tập đơn giản nhất trong cuộc sống."
      }
    ],
    "hanzi": [
      {
        "c": "散",
        "p": "sàn",
        "type": "左右结构 · Trái-phải",
        "st": 12,
        "ord": "⺩(biến thể) trái → 攵 (phốc) phải",
        "rad": "攵 (phốc – hành động)",
        "mean": "phân tán, thong thả",
        "tip": "Bộ 攵(hành động) → hành động PHÂN TÁN, THONG THẢ (bước đi tự do), kết hợp 步(bước chân) thành 散步 = ĐI DẠO.",
        "cf": "撒 (sǎ – \"rắc, vãi\", bộ 扌\")",
        "w": "散步 / 散心 / 分散"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Được, chỉ cần ăn trưa xong là chúng mình ra công viên gần đây đi dạo.",
        "answer": "好，只要吃完午饭，咱们就去附近的公园散散步吧。",
        "answerPy": "Hǎo, zhǐyào chī wán wǔfàn, zánmen jiù qù fùjìn de gōngyuán sànsan bù ba.",
        "note": "咱们 là từ bài 3 — rủ rê, gồm cả người nghe.",
        "pair": "只要……就……"
      },
      {
        "promptLang": "vi",
        "prompt": "Đi dạo vừa có thể vận động cơ thể, vừa có thể giảm cân.",
        "answer": "散步既可以活动身体，又可以减肥。",
        "answerPy": "Sànbù jì kěyǐ huódòng shēntǐ, yòu kěyǐ jiǎnféi.",
        "note": "既可以……又可以…… — ôn lại điểm ngữ pháp của bài, kết hợp 减肥.",
        "pair": "既……又……"
      }
    ],
    "colloFull": [
      {
        "zh": "去散散步",
        "py": "qù sàn sànbù",
        "vn": "đi dạo một chút"
      },
      {
        "zh": "出去散步",
        "py": "chūqù sànbù",
        "vn": "ra ngoài đi dạo"
      },
      {
        "zh": "散步的时候",
        "py": "sànbù de shíhou",
        "vn": "lúc đi dạo"
      },
      {
        "zh": "吃完饭散步",
        "py": "chī wán fàn sànbù",
        "vn": "ăn xong đi dạo"
      },
      {
        "zh": "散了一会儿步",
        "py": "sàn le yíhuìr bù",
        "vn": "đi dạo một lát"
      }
    ],
    "patterns": [
      {
        "s": "散 + 一会儿 + 步",
        "m": "散步 là từ ly hợp: 散了一会儿步 ✓"
      },
      {
        "s": "散散步",
        "m": "Động từ lặp — đi dạo một chút cho thư thái"
      }
    ]
  },
  {
    "n": 21,
    "zh": "指",
    "py": "zhǐ",
    "pos": "Động từ",
    "vn": "chỉ về, nói đến",
    "hv": "chỉ",
    "em": "👉",
    "lesson": 4,
    "explain": [
      "Chỉ đến, đề cập đến một điều gì đó cụ thể."
    ],
    "usage": "Động từ, mang tân ngữ trực tiếp: 是指, 还指.",
    "collo": [
      "是指",
      "还指",
      "指的是"
    ],
    "ex_zh": "过去，人们认为健康就是指身体不生病。",
    "ex_py": "Guòqù, rénmen rènwéi jiànkāng jiùshì zhǐ shēntǐ bù shēngbìng.",
    "ex_vn": "Trước đây, người ta cho rằng sức khỏe chính là chỉ việc cơ thể không bị bệnh.",
    "exList": [
      {
        "zh": "过去，人们认为健康就是指身体不生病。",
        "py": "Guòqù, rénmen rènwéi jiànkāng jiùshì zhǐ shēntǐ bù shēngbìng.",
        "vn": "Trước đây, người ta cho rằng sức khỏe chính là chỉ việc cơ thể không bị bệnh."
      },
      {
        "zh": "现在人们认识到，健康还指精神上的健康。",
        "py": "Xiànzài rénmen rènshi dào, jiànkāng hái zhǐ jīngshén shang de jiànkāng.",
        "vn": "Bây giờ người ta nhận thức được, sức khỏe còn chỉ về sự khỏe mạnh tinh thần."
      },
      {
        "zh": "第一印象是指在第一次见面时给别人留下的印象。",
        "py": "Dì-yī yìnxiàng shì zhǐ zài dì-yī cì jiànmiàn shí gěi biéren liúxià de yìnxiàng.",
        "vn": "Ấn tượng đầu tiên là chỉ ấn tượng để lại cho người khác trong lần gặp mặt đầu tiên."
      }
    ],
    "hanzi": [
      {
        "c": "指",
        "p": "zhǐ",
        "type": "左右结构 · Trái-phải",
        "st": 9,
        "ord": "扌 (thủ) trái → 旨 (chỉ) phải",
        "rad": "扌 (thủ – tay)",
        "mean": "ngón tay, chỉ về",
        "tip": "Bộ tay 扌 (ngón tay chỉ) + 旨(biểu âm) → dùng NGÓN TAY CHỈ VỀ, mở rộng thành ĐỀ CẬP ĐẾN, NÓI ĐẾN.",
        "cf": "脂 (zhī – \"mỡ\", bộ 月\")",
        "w": "指 / 指出 / 手指"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Bây giờ người ta nhận thức được, sức khỏe không chỉ chỉ về cơ thể, còn chỉ về tinh thần.",
        "answer": "现在人们认识到，健康不只是指身体，还指精神。",
        "answerPy": "Xiànzài rénmen rènshi dào, jiànkāng bùzhǐ shì zhǐ shēntǐ, hái zhǐ jīngshén.",
        "note": "不只是指……还指…… kết hợp 精神, ôn lại từ vựng của bài.",
        "pair": "不只……还……"
      },
      {
        "promptLang": "vi",
        "prompt": "Chữ \"浪费\" ở đây không phải chỉ về tiền bạc, mà là chỉ việc lãng phí thời gian.",
        "answer": "\"浪费\"在这里不是指钱，而是指浪费时间。",
        "answerPy": "\"Làngfèi\" zài zhèlǐ bú shì zhǐ qián, ér shì zhǐ làngfèi shíjiān.",
        "note": "浪费 là từ bài 5; A 是指 B — A ở đây nói đến B.",
        "pair": "不是……而是……"
      }
    ],
    "colloFull": [
      {
        "zh": "是指",
        "py": "shì zhǐ",
        "vn": "là chỉ về"
      },
      {
        "zh": "指的是",
        "py": "zhǐ de shì",
        "vn": "cái được nói đến là"
      },
      {
        "zh": "还指",
        "py": "hái zhǐ",
        "vn": "còn chỉ cả"
      },
      {
        "zh": "指这件事",
        "py": "zhǐ zhè jiàn shì",
        "vn": "nói đến chuyện này"
      },
      {
        "zh": "不是指",
        "py": "bú shì zhǐ",
        "vn": "không phải chỉ về"
      }
    ],
    "patterns": [
      {
        "s": "A + 是指 + B",
        "m": "A ở đây là nói đến B"
      },
      {
        "s": "指 (nghĩa \"chỉ về\") ≠ 指 (chỉ tay)",
        "m": "Ở bài này là nghĩa \"nói đến\""
      }
    ]
  },
  {
    "n": 22,
    "zh": "精神",
    "py": "jīngshén",
    "pos": "Danh từ",
    "vn": "tinh thần",
    "hv": "tinh thần",
    "em": "🧠",
    "lesson": 4,
    "explain": [
      "Trạng thái tâm lý, ý chí của con người (đối lập với thể xác)."
    ],
    "usage": "Danh từ; thường đi với 精神上的健康, 精神状态.",
    "collo": [
      "精神上的健康",
      "精神状态",
      "精神愉快"
    ],
    "ex_zh": "现在人们认识到，健康还指精神上的健康。",
    "ex_py": "Xiànzài rénmen rènshi dào, jiànkāng hái zhǐ jīngshén shang de jiànkāng.",
    "ex_vn": "Bây giờ người ta nhận thức được, sức khỏe còn chỉ về sự khỏe mạnh tinh thần.",
    "exList": [
      {
        "zh": "现在人们认识到，健康还指精神上的健康。",
        "py": "Xiànzài rénmen rènshi dào, jiànkāng hái zhǐ jīngshén shang de jiànkāng.",
        "vn": "Bây giờ người ta nhận thức được, sức khỏe còn chỉ về sự khỏe mạnh tinh thần."
      },
      {
        "zh": "只有身体和精神都健康，才算是真正的健康。",
        "py": "Zhǐyǒu shēntǐ hé jīngshén dōu jiànkāng, cái suàn shì zhēnzhèng de jiànkāng.",
        "vn": "Chỉ khi cả cơ thể và tinh thần đều khỏe mạnh, mới tính là sức khỏe thực sự."
      },
      {
        "zh": "他今天精神很好，看起来很开心。",
        "py": "Tā jīntiān jīngshén hěn hǎo, kàn qǐlai hěn kāixīn.",
        "vn": "Hôm nay tinh thần anh ấy rất tốt, trông rất vui vẻ."
      }
    ],
    "hanzi": [
      {
        "c": "神",
        "p": "shén",
        "type": "左右结构 · Trái-phải",
        "st": 9,
        "ord": "礻 (kỳ) trái → 申 (thân) phải",
        "rad": "礻 (kỳ – thần linh)",
        "mean": "thần, tinh thần",
        "tip": "Bộ 礻(liên quan tế lễ, thần linh) + 申(biểu âm) → THẦN LINH, mở rộng thành TINH THẦN (sức mạnh vô hình), kết hợp 精(tinh túy) thành 精神 = TINH THẦN.",
        "cf": "神 dễ nhầm với 伸 (shēn – \"duỗi ra\", bộ 亻\")",
        "w": "精神 / 神经 / 精神病"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Chỉ khi cả cơ thể và tinh thần đều khỏe mạnh, mới tính là sức khỏe thực sự.",
        "answer": "只有身体和精神都健康，才算是真正的健康。",
        "answerPy": "Zhǐyǒu shēntǐ hé jīngshén dōu jiànkāng, cái suàn shì zhēnzhèng de jiànkāng.",
        "note": "只有……才算是…… — chỉ khi … mới tính là….",
        "pair": "只有……才……"
      },
      {
        "promptLang": "vi",
        "prompt": "Cứ đi dạo xong là tinh thần tôi lại thấy khá hơn nhiều.",
        "answer": "每次散完步，我的精神就感觉好多了。",
        "answerPy": "Měi cì sàn wán bù, wǒ de jīngshén jiù gǎnjué hǎo duō le.",
        "note": "V + 完 — bổ ngữ kết quả chỉ việc đã xong.",
        "pair": "一……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "精神状态",
        "py": "jīngshén zhuàngtài",
        "vn": "trạng thái tinh thần"
      },
      {
        "zh": "精神上的健康",
        "py": "jīngshén shàng de jiànkāng",
        "vn": "sức khỏe tinh thần"
      },
      {
        "zh": "精神愉快",
        "py": "jīngshén yúkuài",
        "vn": "tinh thần vui vẻ"
      },
      {
        "zh": "没精神",
        "py": "méi jīngshén",
        "vn": "không có tinh thần"
      },
      {
        "zh": "精神好多了",
        "py": "jīngshén hǎo duō le",
        "vn": "tinh thần tốt hơn nhiều"
      }
    ],
    "patterns": [
      {
        "s": "精神 + 上的 + N",
        "m": "Về mặt tinh thần"
      },
      {
        "s": "有 / 没 + 精神",
        "m": "Có tinh thần / uể oải"
      }
    ]
  },
  {
    "n": 23,
    "zh": "教授",
    "py": "jiàoshòu",
    "pos": "Danh từ",
    "vn": "giáo sư",
    "hv": "giáo thụ",
    "em": "🎓",
    "lesson": 4,
    "explain": [
      "Học hàm cao nhất trong hệ thống giảng dạy đại học."
    ],
    "usage": "Danh từ; thường đi với 一位教授, 教授说.",
    "collo": [
      "一位教授",
      "教授用数字",
      "王教授"
    ],
    "ex_zh": "有一位教授用数字来说明健康有多么重要。",
    "ex_py": "Yǒu yí wèi jiàoshòu yòng shùzì lái shuōmíng jiànkāng yǒu duōme zhòngyào.",
    "ex_vn": "Có một vị giáo sư dùng con số để giải thích sức khỏe quan trọng như thế nào.",
    "exList": [
      {
        "zh": "有一位教授用数字来说明健康有多么重要。",
        "py": "Yǒu yí wèi jiàoshòu yòng shùzì lái shuōmíng jiànkāng yǒu duōme zhòngyào.",
        "vn": "Có một vị giáo sư dùng con số để giải thích sức khỏe quan trọng như thế nào."
      },
      {
        "zh": "这位教授在大学教了三十年书。",
        "py": "Zhè wèi jiàoshòu zài dàxué jiāole sānshí nián shū.",
        "vn": "Vị giáo sư này đã dạy học ở trường đại học 30 năm."
      },
      {
        "zh": "我们请了一位教授来做讲座。",
        "py": "Wǒmen qǐngle yí wèi jiàoshòu lái zuò jiǎngzuò.",
        "vn": "Chúng tôi đã mời một vị giáo sư đến làm bài giảng."
      }
    ],
    "hanzi": [
      {
        "c": "授",
        "p": "shòu",
        "type": "左右结构 · Trái-phải",
        "st": 11,
        "ord": "扌 (thủ) trái → 受 (thụ) phải",
        "rad": "扌 (thủ – tay)",
        "mean": "trao, dạy",
        "tip": "Bộ tay 扌 + 受(nhận) → TRAO cho người khác nhận, mở rộng thành DẠY (kiến thức), kết hợp 教(dạy) thành 教授 = GIÁO SƯ (người dạy).",
        "cf": "受 (shòu – \"nhận\", không có bộ 扌\")",
        "w": "教授 / 教师 / 传授"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Vị giáo sư đó không những dùng con số để nói rõ, mà còn kể cả chuyện của bản thân.",
        "answer": "那位教授不但用数字来说明健康的重要性，而且还讲了自己的故事。",
        "answerPy": "Nà wèi jiàoshòu búdàn yòng shùzì lái shuōmíng jiànkāng de zhòngyàoxìng, érqiě hái jiǎngle zìjǐ de gùshi.",
        "note": "位 là lượng từ lịch sự dùng cho người đáng kính.",
        "pair": "不但……而且……"
      },
      {
        "promptLang": "vi",
        "prompt": "Chúng tôi mời một vị giáo sư đến nói về sức khỏe tinh thần, vì đây là vấn đề ngày càng nghiêm trọng.",
        "answer": "我们请了一位教授来谈谈精神健康的问题，因为这个问题越来越严重。",
        "answerPy": "Wǒmen qǐngle yí wèi jiàoshòu lái tántan jīngshén jiànkāng de wèntí, yīnwèi zhège wèntí yuèláiyuè yánzhòng.",
        "note": "谈谈 — động từ lặp, nghe nhẹ nhàng hơn 谈.",
        "pair": "因为……"
      }
    ],
    "colloFull": [
      {
        "zh": "一位教授",
        "py": "yí wèi jiàoshòu",
        "vn": "một vị giáo sư"
      },
      {
        "zh": "王教授",
        "py": "wáng jiàoshòu",
        "vn": "giáo sư Vương"
      },
      {
        "zh": "请教授来",
        "py": "qǐng jiàoshòu lái",
        "vn": "mời giáo sư đến"
      },
      {
        "zh": "教授说",
        "py": "jiàoshòu shuō",
        "vn": "giáo sư nói"
      },
      {
        "zh": "大学教授",
        "py": "dàxué jiàoshòu",
        "vn": "giáo sư đại học"
      }
    ],
    "patterns": [
      {
        "s": "một + 位 + 教授",
        "m": "Lượng từ 位 dùng cho người đáng kính"
      },
      {
        "s": "họ + 教授",
        "m": "Cách gọi: Giáo sư Vương…"
      }
    ]
  },
  {
    "n": 24,
    "zh": "数字",
    "py": "shùzì",
    "pos": "Danh từ",
    "vn": "con số",
    "hv": "số tự",
    "em": "🔢",
    "lesson": 4,
    "explain": [
      "Ký hiệu biểu thị số lượng."
    ],
    "usage": "Danh từ; thường đi với 用数字, 这个数字.",
    "collo": [
      "用数字",
      "这个数字",
      "数字说明"
    ],
    "ex_zh": "有一位教授用数字来说明健康有多么重要。",
    "ex_py": "Yǒu yí wèi jiàoshòu yòng shùzì lái shuōmíng jiànkāng yǒu duōme zhòngyào.",
    "ex_vn": "Có một vị giáo sư dùng con số để giải thích sức khỏe quan trọng như thế nào.",
    "exList": [
      {
        "zh": "有一位教授用数字来说明健康有多么重要。",
        "py": "Yǒu yí wèi jiàoshòu yòng shùzì lái shuōmíng jiànkāng yǒu duōme zhòngyào.",
        "vn": "Có một vị giáo sư dùng con số để giải thích sức khỏe quan trọng như thế nào."
      },
      {
        "zh": "这个数字比去年增长了很多。",
        "py": "Zhège shùzì bǐ qùnián zēngzhǎngle hěn duō.",
        "vn": "Con số này tăng lên nhiều so với năm ngoái."
      },
      {
        "zh": "请把这些数字记下来。",
        "py": "Qǐng bǎ zhèxiē shùzì jì xiàlái.",
        "vn": "Xin hãy ghi lại những con số này."
      }
    ],
    "hanzi": [
      {
        "c": "数",
        "p": "shù",
        "type": "左右结构 · Trái-phải (giản thể)",
        "st": 13,
        "ord": "娄(biến thể) trái → 攵 (phốc) phải",
        "rad": "攵 (phốc – hành động)",
        "mean": "số, đếm",
        "tip": "Bộ 攵(hành động đếm) → hành động ĐẾM, kết hợp 字(chữ, ký hiệu) thành 数字 = CON SỐ (ký hiệu để đếm).",
        "cf": "数 khi đọc \"shǔ\" nghĩa là ĐẾM (数一数)",
        "w": "数字 / 数学 / 岁数"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Vì giáo sư dùng con số để nói rõ, nên mọi người dễ hiểu hơn nhiều.",
        "answer": "因为教授用数字来说明，所以大家更容易理解。",
        "answerPy": "Yīnwèi jiàoshòu yòng shùzì lái shuōmíng, suǒyǐ dàjiā gèng róngyì lǐjiě.",
        "note": "理解 là từ bài 2 — hiểu thấu, khác 知道.",
        "pair": "因为……所以……"
      },
      {
        "promptLang": "vi",
        "prompt": "Con số này không những cho thấy vấn đề nghiêm trọng đến đâu, mà còn khiến mọi người bắt đầu chú ý.",
        "answer": "这个数字不仅说明了问题有多严重，而且让大家开始注意。",
        "answerPy": "Zhège shùzì bùjǐn shuōmíngle wèntí yǒu duō yánzhòng, érqiě ràng dàjiā kāishǐ zhùyì.",
        "note": "有多 + Adj — nhấn mức độ trong câu tường thuật.",
        "pair": "不仅……而且……"
      }
    ],
    "colloFull": [
      {
        "zh": "用数字",
        "py": "yòng shùzì",
        "vn": "dùng con số"
      },
      {
        "zh": "这个数字",
        "py": "zhège shùzì",
        "vn": "con số này"
      },
      {
        "zh": "数字说明",
        "py": "shùzì shuōmíng",
        "vn": "con số cho thấy"
      },
      {
        "zh": "写数字",
        "py": "xiě shùzì",
        "vn": "viết số"
      },
      {
        "zh": "一组数字",
        "py": "yì zǔ shùzì",
        "vn": "một dãy số"
      }
    ],
    "patterns": [
      {
        "s": "用 + 数字 + 来说明",
        "m": "Dùng con số để chứng minh"
      },
      {
        "s": "数字 ≠ 号码",
        "m": "数字 là con số; 号码 là số hiệu (điện thoại, phòng)"
      }
    ]
  },
  {
    "n": 25,
    "zh": "说明",
    "py": "shuōmíng",
    "pos": "Động từ",
    "vn": "giải thích rõ, nói rõ",
    "hv": "thuyết minh",
    "em": "📢",
    "lesson": 4,
    "explain": [
      "Trình bày, làm rõ ý nghĩa của một vấn đề."
    ],
    "usage": "Động từ, mang tân ngữ trực tiếp: 用……来说明, 说明问题.",
    "collo": [
      "用数字来说明",
      "说明问题",
      "说明情况"
    ],
    "ex_zh": "有一位教授用数字来说明健康有多么重要。",
    "ex_py": "Yǒu yí wèi jiàoshòu yòng shùzì lái shuōmíng jiànkāng yǒu duōme zhòngyào.",
    "ex_vn": "Có một vị giáo sư dùng con số để giải thích sức khỏe quan trọng như thế nào.",
    "exList": [
      {
        "zh": "有一位教授用数字来说明健康有多么重要。",
        "py": "Yǒu yí wèi jiàoshòu yòng shùzì lái shuōmíng jiànkāng yǒu duōme zhòngyào.",
        "vn": "Có một vị giáo sư dùng con số để giải thích sức khỏe quan trọng như thế nào."
      },
      {
        "zh": "这个数字说明了问题有多严重。",
        "py": "Zhège shùzì shuōmíngle wèntí yǒu duō yánzhòng.",
        "vn": "Con số này cho thấy vấn đề nghiêm trọng như thế nào."
      },
      {
        "zh": "请你详细说明一下情况。",
        "py": "Qǐng nǐ xiángxì shuōmíng yíxià qíngkuàng.",
        "vn": "Xin bạn giải thích rõ tình hình một chút."
      }
    ],
    "hanzi": [
      {
        "c": "明",
        "p": "míng",
        "type": "左右结构 · Trái-phải",
        "st": 8,
        "ord": "日 (nhật) trái → 月 (nguyệt) phải",
        "rad": "日 (nhật – mặt trời)",
        "mean": "sáng tỏ",
        "tip": "Bộ mặt trời 日 + mặt trăng 月 (hai nguồn sáng) → SÁNG TỎ, kết hợp 说(nói) thành 说明 = NÓI RÕ, GIẢI THÍCH.",
        "cf": "朋 (péng – \"bạn\", hai chữ 月\")",
        "w": "说明 / 明白 / 证明"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Chỉ khi dùng con số để nói rõ, giáo sư mới khiến mọi người hiểu vấn đề này quan trọng đến đâu.",
        "answer": "只有用数字来说明，教授才能让大家明白这个问题有多么重要。",
        "answerPy": "Zhǐyǒu yòng shùzì lái shuōmíng, jiàoshòu cái néng ràng dàjiā míngbai zhège wèntí yǒu duōme zhòngyào.",
        "note": "有多么 + Adj — nhấn mức độ mạnh hơn 有多.",
        "pair": "只有……才……"
      },
      {
        "promptLang": "vi",
        "prompt": "Nếu bạn rảnh thì giải thích rõ tình hình cụ thể cho tôi nhé.",
        "answer": "要是你有时间，就跟我说明一下具体的情况。",
        "answerPy": "Yàoshi nǐ yǒu shíjiān, jiù gēn wǒ shuōmíng yíxià jùtǐ de qíngkuàng.",
        "note": "情况 là từ bài 6; 说明一下 — nói rõ một chút.",
        "pair": "要是……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "说明问题",
        "py": "shuōmíng wèntí",
        "vn": "cho thấy vấn đề"
      },
      {
        "zh": "说明情况",
        "py": "shuōmíng qíngkuàng",
        "vn": "trình bày tình hình"
      },
      {
        "zh": "用数字来说明",
        "py": "yòng shùzì lái shuōmíng",
        "vn": "dùng số liệu để chứng minh"
      },
      {
        "zh": "说明一下",
        "py": "shuōmíng yíxià",
        "vn": "giải thích một chút"
      },
      {
        "zh": "这说明",
        "py": "zhè shuōmíng",
        "vn": "điều này cho thấy"
      }
    ],
    "patterns": [
      {
        "s": "用 + N + 来说明 + mệnh đề",
        "m": "Dùng cái gì để chứng minh điều gì"
      },
      {
        "s": "这 + 说明 + mệnh đề",
        "m": "Điều này cho thấy rằng …"
      }
    ]
  },
  {
    "n": 26,
    "zh": "要是",
    "py": "yàoshi",
    "pos": "Liên từ",
    "vn": "nếu như, nếu",
    "hv": "yếu thị",
    "em": "❓",
    "lesson": 4,
    "explain": [
      "Diễn tả giả thiết, thường dùng cấu trúc \"要是……(的话)，就……\". Vế 要是 nêu giả thiết, vế 就 nêu hành động/kết quả xảy ra trong tình huống giả thiết đó."
    ],
    "usage": "要是 + giả thiết + (的话)，就 + kết quả.",
    "collo": [
      "要是……就……",
      "要是……的话",
      "要是有时间"
    ],
    "ex_zh": "要是健康是1，其他都是1后面的0。",
    "ex_py": "Yàoshi jiànkāng shì yī, qítā dōu shì yī hòumiàn de líng.",
    "ex_vn": "Nếu sức khỏe là số 1, những thứ khác đều là số 0 phía sau số 1.",
    "exList": [
      {
        "zh": "要是健康是1，其他都是1后面的0。",
        "py": "Yàoshi jiànkāng shì yī, qítā dōu shì yī hòumiàn de líng.",
        "vn": "Nếu sức khỏe là số 1, những thứ khác đều là số 0 phía sau số 1."
      },
      {
        "zh": "要是你想来中国的大学留学，和中国学生一起学习专业课，那么就需要做好这些准备。",
        "py": "Yàoshi nǐ xiǎng lái Zhōngguó de dàxué liúxué, hé Zhōngguó xuésheng yìqǐ xuéxí zhuānyè kè, nàme jiù xūyào zuòhǎo zhèxiē zhǔnbèi.",
        "vn": "Nếu bạn muốn đến du học ở trường đại học Trung Quốc, học chuyên ngành cùng sinh viên Trung Quốc, thì cần chuẩn bị tốt những điều này."
      },
      {
        "zh": "要是质量比别人的好的话，那么价格贵一点儿也是可以接受的。",
        "py": "Yàoshi zhìliàng bǐ biéren de hǎo dehuà, nàme jiàgé guì yìdiǎnr yě shì kěyǐ jiēshòu de.",
        "vn": "Nếu chất lượng tốt hơn người khác, thì giá cả đắt hơn một chút cũng có thể chấp nhận được."
      }
    ],
    "hanzi": [
      {
        "c": "要",
        "p": "yào",
        "type": "上下结构 · Trên-dưới",
        "st": 9,
        "ord": "覀(biến thể) trên → 女 dưới",
        "rad": "覀 (biến thể của 西)",
        "mean": "muốn, cần, nếu",
        "tip": "要 vốn nghĩa MUỐN/CẦN, mượn dùng làm liên từ giả thiết khi kết hợp 是(là) thành 要是 = NẾU (là trường hợp này).",
        "cf": "腰 (yāo – \"thắt lưng\", bộ 月\")",
        "w": "要是 / 要不 / 主要"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Nếu bạn có thời gian, chúng ta cùng đi dạo công viên đi.",
        "answer": "要是你有时间，咱们一起去公园散步吧。",
        "answerPy": "Yàoshi nǐ yǒu shíjiān, zánmen yìqǐ qù gōngyuán sànbù ba.",
        "note": "要是……咱们…… kết hợp 散步, ôn lại từ vựng của bài.",
        "pair": "要是……"
      },
      {
        "promptLang": "vi",
        "prompt": "Nếu chất lượng không tốt, thì giá rẻ cũng không đáng mua.",
        "answer": "要是质量不好的话，那么价格便宜也不值得买。",
        "answerPy": "Yàoshi zhìliàng bù hǎo dehuà, nàme jiàgé piányi yě bù zhídé mǎi.",
        "note": "要是……的话，那么……也…… kết hợp 值得, ôn lại từ vựng Bài 6.",
        "pair": "要是……"
      }
    ],
    "colloFull": [
      {
        "zh": "要是……就……",
        "py": "yàoshi jiù",
        "vn": "nếu… thì…"
      },
      {
        "zh": "要是……的话",
        "py": "yàoshi de huà",
        "vn": "nếu như…"
      },
      {
        "zh": "要是有时间",
        "py": "yàoshi yǒushí jiān",
        "vn": "nếu có thời gian"
      },
      {
        "zh": "要是不行",
        "py": "yàoshi bù xíng",
        "vn": "nếu không được"
      },
      {
        "zh": "要是我",
        "py": "yàoshi wǒ",
        "vn": "nếu là tôi"
      }
    ],
    "patterns": [
      {
        "s": "要是 + mệnh đề，就 + mệnh đề",
        "m": "Nếu … thì …"
      },
      {
        "s": "要是 ≈ 如果",
        "m": "要是 thiên khẩu ngữ, 如果 trung tính hơn"
      }
    ]
  },
  {
    "n": 27,
    "zh": "既",
    "py": "jì",
    "pos": "Phó từ",
    "vn": "vừa… (kết hợp với 又/也/还)",
    "hv": "ký",
    "em": "➕",
    "lesson": 5,
    "explain": [
      "Phó từ dùng kết hợp với 又/也/还 để nối hai cấu trúc động từ/tính từ, diễn tả hai tình huống cùng tồn tại (đều tích cực hoặc đều tiêu cực)."
    ],
    "usage": "既 + cấu trúc 1，又/也/还 + cấu trúc 2 (giống nhau về hình thức).",
    "collo": [
      "既可以……又可以……",
      "既……也……",
      "既……还……"
    ],
    "ex_zh": "散步是生活中最简单的锻炼方法，既可以活动身体，又可以减肥。",
    "ex_py": "Sànbù shì shēnghuó zhōng zuì jiǎndān de duànliàn fāngfǎ, jì kěyǐ huódòng shēntǐ, yòu kěyǐ jiǎnféi.",
    "ex_vn": "Đi dạo là phương pháp luyện tập đơn giản nhất trong cuộc sống, vừa có thể vận động cơ thể, vừa có thể giảm cân.",
    "exList": [
      {
        "zh": "散步是生活中最简单的锻炼方法，既可以活动身体，又可以减肥。",
        "py": "Sànbù shì shēnghuó zhōng zuì jiǎndān de duànliàn fāngfǎ, jì kěyǐ huódòng shēntǐ, yòu kěyǐ jiǎnféi.",
        "vn": "Đi dạo là phương pháp luyện tập đơn giản nhất trong cuộc sống, vừa có thể vận động cơ thể, vừa có thể giảm cân."
      },
      {
        "zh": "会说话的人既容易交到朋友，也容易获得成功。",
        "py": "Huì shuōhuà de rén jì róngyì jiāodào péngyou, yě róngyì huòdé chénggōng.",
        "vn": "Người khéo ăn nói vừa dễ kết bạn, cũng dễ đạt được thành công."
      },
      {
        "zh": "他那个人做事既不认真，动作还慢，这个工作这么重要，还是让别人做吧。",
        "py": "Tā nàge rén zuò shì jì bú rènzhēn, dòngzuò hái màn, zhège gōngzuò zhème zhòngyào, háishi ràng biéren zuò ba.",
        "vn": "Người đó làm việc vừa không nghiêm túc, động tác lại chậm, công việc này quan trọng như vậy, vẫn nên để người khác làm."
      }
    ],
    "hanzi": [
      {
        "c": "既",
        "p": "jì",
        "type": "左右结构 · Trái-phải",
        "st": 9,
        "ord": "旡 trái → 尢(biến thể) phải",
        "rad": "旡 (ký)",
        "mean": "đã, vừa",
        "tip": "既 mang nghĩa ĐÃ XONG, mượn dùng làm liên từ kết hợp 又/也/还 tạo thành cấu trúc song song VỪA…VỪA….",
        "cf": "即 (jí – \"tức thì\", tự dạng gần giống)",
        "w": "既……又…… / 既然 / 既是"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Đi dạo vừa có thể vận động cơ thể, vừa có thể giảm cân, mà lại không vất vả như chạy bộ.",
        "answer": "散步既可以活动身体，又可以减肥，而且不会像跑步那样辛苦。",
        "answerPy": "Sànbù jì kěyǐ huódòng shēntǐ, yòu kěyǐ jiǎnféi, érqiě bú huì xiàng pǎobù nàyàng xīnkǔ.",
        "note": "既……又…… kết hợp 减肥/辛苦, ôn lại từ vựng của bài.",
        "pair": "既……又……"
      },
      {
        "promptLang": "vi",
        "prompt": "Người đó vừa có năng lực, vừa có trách nhiệm, công ty rất coi trọng anh ấy.",
        "answer": "那个人既有能力，又有责任心，公司很重视他。",
        "answerPy": "Nàge rén jì yǒu nénglì, yòu yǒu zérènxīn, gōngsī hěn zhòngshì tā.",
        "note": "既……又…… kết hợp 责任, ôn lại từ vựng Bài 3.",
        "pair": "既……又……"
      }
    ],
    "colloFull": [
      {
        "zh": "既……又……",
        "py": "jì yòu",
        "vn": "vừa… vừa…"
      },
      {
        "zh": "既……也……",
        "py": "jì yě",
        "vn": "vừa… cũng…"
      },
      {
        "zh": "既……还……",
        "py": "jì hái",
        "vn": "vừa… lại còn…"
      },
      {
        "zh": "既可以……又可以……",
        "py": "jì kěyǐ yòu kěyǐ",
        "vn": "vừa có thể… vừa có thể…"
      },
      {
        "zh": "既好看又便宜",
        "py": "jì hǎokàn yòu piányi",
        "vn": "vừa đẹp vừa rẻ"
      }
    ],
    "patterns": [
      {
        "s": "既 + A + 又 + B",
        "m": "Vừa A vừa B — hai tính chất cùng có"
      },
      {
        "s": "✗ 既高又聪明的他 → 既……又…… đứng trước VỊ NGỮ, không làm định ngữ"
      }
    ]
  },
  {
    "n": 28,
    "zh": "减肥",
    "py": "jiǎnféi",
    "pos": "Động từ",
    "vn": "giảm cân",
    "hv": "giảm phì",
    "em": "⚖️",
    "lesson": 5,
    "explain": [
      "Làm giảm trọng lượng cơ thể."
    ],
    "usage": "Động từ ly hợp; thường đi với 可以减肥, 减肥的目的.",
    "collo": [
      "可以减肥",
      "减肥的目的",
      "变瘦了"
    ],
    "ex_zh": "散步既可以活动身体，又可以减肥。",
    "ex_py": "Sànbù jì kěyǐ huódòng shēntǐ, yòu kěyǐ jiǎnféi.",
    "ex_vn": "Đi dạo vừa có thể vận động cơ thể, vừa có thể giảm cân.",
    "exList": [
      {
        "zh": "散步既可以活动身体，又可以减肥。",
        "py": "Sànbù jì kěyǐ huódòng shēntǐ, yòu kěyǐ jiǎnféi.",
        "vn": "Đi dạo vừa có thể vận động cơ thể, vừa có thể giảm cân."
      },
      {
        "zh": "她游泳的目的是减肥。",
        "py": "Tā yóuyǒng de mùdì shì jiǎnféi.",
        "vn": "Mục đích bơi lội của cô ấy là giảm cân."
      },
      {
        "zh": "为了减肥，他每天都跑步。",
        "py": "Wèile jiǎnféi, tā měitiān dōu pǎobù.",
        "vn": "Để giảm cân, anh ấy chạy bộ mỗi ngày."
      }
    ],
    "hanzi": [
      {
        "c": "肥",
        "p": "féi",
        "type": "左右结构 · Trái-phải",
        "st": 8,
        "ord": "月 (nhục) trái → 巴 (ba) phải",
        "rad": "月 (nhục – thịt)",
        "mean": "béo, mập",
        "tip": "Bộ thịt 月 + 巴(biểu âm) → liên quan đến THỊT, MỠ trên cơ thể → BÉO, MẬP; kết hợp 减(giảm) thành 减肥 = GIẢM CÂN.",
        "cf": "肥 dễ nhầm với 肚 (dù – \"bụng\")",
        "w": "减肥 / 肥胖 / 化肥"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Đi dạo là phương pháp luyện tập đơn giản nhất, vừa có thể vận động cơ thể vừa có thể giảm cân.",
        "answer": "散步是最简单的锻炼方法，既可以活动身体又可以减肥。",
        "answerPy": "Sànbù shì zuì jiǎndān de duànliàn fāngfǎ, jì kěyǐ huódòng shēntǐ yòu kěyǐ jiǎnféi.",
        "note": "既……又……减肥 kết hợp 既/散步, ôn lại từ vựng của bài.",
        "pair": "既……又……"
      },
      {
        "promptLang": "vi",
        "prompt": "Cô ấy bơi mỗi tuần một hai lần, không phải để thi đấu, mà là để giảm cân.",
        "answer": "她每周游泳一两次，目的不是为了比赛，而是为了减肥。",
        "answerPy": "Tā měi zhōu yóuyǒng yì-liǎng cì, mùdì bú shì wèile bǐsài, ér shì wèile jiǎnféi.",
        "note": "为了 + mục đích — 为了减肥 mà làm gì.",
        "pair": "不是……而是……"
      }
    ],
    "colloFull": [
      {
        "zh": "可以减肥",
        "py": "kěyǐ jiǎnféi",
        "vn": "có thể giảm cân"
      },
      {
        "zh": "减肥的目的",
        "py": "jiǎnféi de mùdì",
        "vn": "mục đích giảm cân"
      },
      {
        "zh": "开始减肥",
        "py": "kāishǐ jiǎnféi",
        "vn": "bắt đầu giảm cân"
      },
      {
        "zh": "减肥成功",
        "py": "jiǎnféi chénggōng",
        "vn": "giảm cân thành công"
      },
      {
        "zh": "为了减肥",
        "py": "wèile jiǎnféi",
        "vn": "để giảm cân"
      }
    ],
    "patterns": [
      {
        "s": "为了 + 减肥 + V",
        "m": "Vì muốn giảm cân mà làm gì"
      },
      {
        "s": "减 + 了 + 五公斤 + 肥",
        "m": "减肥 là từ ly hợp"
      }
    ]
  },
  {
    "n": 29,
    "zh": "辛苦",
    "py": "xīnkǔ",
    "pos": "Tính từ",
    "vn": "vất vả, cực nhọc",
    "hv": "tân khổ",
    "em": "😓",
    "lesson": 5,
    "explain": [
      "Mất nhiều công sức, mệt mỏi khi làm việc gì."
    ],
    "usage": "Tính từ; thường đi với 不会像……那样辛苦, 辛苦了.",
    "collo": [
      "不会像……那样辛苦",
      "辛苦了",
      "工作辛苦"
    ],
    "ex_zh": "散步既可以活动身体，又可以减肥，而且不会像跑步那样辛苦。",
    "ex_py": "Sànbù jì kěyǐ huódòng shēntǐ, yòu kěyǐ jiǎnféi, érqiě bú huì xiàng pǎobù nàyàng xīnkǔ.",
    "ex_vn": "Đi dạo vừa có thể vận động cơ thể, vừa có thể giảm cân, hơn nữa lại không vất vả như chạy bộ.",
    "exList": [
      {
        "zh": "散步既可以活动身体，又可以减肥，而且不会像跑步那样辛苦。",
        "py": "Sànbù jì kěyǐ huódòng shēntǐ, yòu kěyǐ jiǎnféi, érqiě bú huì xiàng pǎobù nàyàng xīnkǔ.",
        "vn": "Đi dạo vừa có thể vận động cơ thể, vừa có thể giảm cân, hơn nữa lại không vất vả như chạy bộ."
      },
      {
        "zh": "特别好吃，辛苦你了，一会儿我来洗碗。",
        "py": "Tèbié hǎochī, xīnkǔ nǐ le, yíhuìr wǒ lái xǐ wǎn.",
        "vn": "Ngon lắm, bạn vất vả rồi, lát nữa tôi rửa bát."
      },
      {
        "zh": "这份工作虽然辛苦，但是很有意义。",
        "py": "Zhè fèn gōngzuò suīrán xīnkǔ, dànshì hěn yǒu yìyì.",
        "vn": "Công việc này tuy vất vả, nhưng rất có ý nghĩa."
      }
    ],
    "hanzi": [
      {
        "c": "辛",
        "p": "xīn",
        "type": "独体字 · Chữ đơn",
        "st": 7,
        "ord": "nét liền",
        "rad": "辛 (tân)",
        "mean": "cay đắng, vất vả",
        "tip": "Chữ tượng hình dụng cụ dùng để KHẮC HÌNH PHẠT (thời cổ) → mang nghĩa CAY ĐẮNG, VẤT VẢ, kết hợp 苦(khổ) thành 辛苦 = VẤT VẢ.",
        "cf": "幸 (xìng – \"may mắn\", tự dạng gần giống nhưng nghĩa trái ngược)",
        "w": "辛苦 / 辛苦了 / 辛勤"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Đi dạo không những không vất vả như chạy bộ, mà ai cũng làm được.",
        "answer": "散步不但不会像跑步那样辛苦，而且谁都可以做。",
        "answerPy": "Sànbù búdàn bú huì xiàng pǎobù nàyàng xīnkǔ, érqiě shéi dōu kěyǐ zuò.",
        "note": "像……那样 — so sánh; 谁都 — ai cũng.",
        "pair": "不但……而且……"
      },
      {
        "promptLang": "vi",
        "prompt": "Cảm ơn bạn hôm nay đã vất vả giúp tôi, nếu không có bạn tôi đã không làm xong.",
        "answer": "谢谢你今天辛苦帮我做事，要不是你，我就做不完了。",
        "answerPy": "Xièxie nǐ jīntiān xīnkǔ bāng wǒ zuòshì, yàobúshì nǐ, wǒ jiù zuò bu wán le.",
        "note": "要不是 — nếu không nhờ có…; V + 不完 — làm không xong.",
        "pair": "要不是……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "辛苦了",
        "py": "xīnkǔ le",
        "vn": "vất vả rồi"
      },
      {
        "zh": "工作辛苦",
        "py": "gōngzuò xīnkǔ",
        "vn": "công việc vất vả"
      },
      {
        "zh": "很辛苦",
        "py": "hěn xīnkǔ",
        "vn": "rất vất vả"
      },
      {
        "zh": "不太辛苦",
        "py": "bú tài xīnkǔ",
        "vn": "không vất vả lắm"
      },
      {
        "zh": "辛苦一点儿",
        "py": "xīnkǔ yìdiǎnr",
        "vn": "chịu khó một chút"
      }
    ],
    "patterns": [
      {
        "s": "Sub + 很 / 不 + 辛苦",
        "m": "Ai đó rất / không vất vả"
      },
      {
        "s": "辛苦了！",
        "m": "Lời cảm ơn khi ai đó đã bỏ công sức"
      }
    ]
  },
  {
    "n": 30,
    "zh": "肚子",
    "py": "dùzi",
    "pos": "Danh từ",
    "vn": "bụng",
    "hv": "đỗ tử",
    "em": "🤰",
    "lesson": 5,
    "explain": [
      "Bộ phận cơ thể chứa dạ dày, ruột."
    ],
    "usage": "Danh từ; thường đi với 肚子吃饱了, 肚子疼.",
    "collo": [
      "肚子吃饱了",
      "肚子疼",
      "肚子饿"
    ],
    "ex_zh": "肚子吃饱了需要活动。",
    "ex_py": "Dùzi chībǎole xūyào huódòng.",
    "ex_vn": "Bụng ăn no rồi cần vận động.",
    "exList": [
      {
        "zh": "肚子吃饱了需要活动。",
        "py": "Dùzi chībǎole xūyào huódòng.",
        "vn": "Bụng ăn no rồi cần vận động."
      },
      {
        "zh": "我肚子有点儿疼，可能是吃坏了。",
        "py": "Wǒ dùzi yǒudiǎnr téng, kěnéng shì chīhuài le.",
        "vn": "Bụng tôi hơi đau, có thể là ăn phải đồ hỏng."
      },
      {
        "zh": "他肚子饿了，想去吃点儿东西。",
        "py": "Tā dùzi è le, xiǎng qù chī diǎnr dōngxi.",
        "vn": "Anh ấy bụng đói rồi, muốn đi ăn chút gì đó."
      }
    ],
    "hanzi": [
      {
        "c": "肚",
        "p": "dù",
        "type": "左右结构 · Trái-phải",
        "st": 7,
        "ord": "月 (nhục) trái → 土 (thổ) phải",
        "rad": "月 (nhục – thịt)",
        "mean": "bụng",
        "tip": "Bộ thịt 月 (bộ phận cơ thể) + 土(biểu âm) → chỉ BỘ PHẬN cơ thể là BỤNG.",
        "cf": "杜 (dù – \"họ Đỗ\", bộ 木\")",
        "w": "肚子 / 肚子疼 / 肚皮"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Đã ăn no bụng rồi thì cần vận động, ăn xong chúng ta đi dạo một chút đi.",
        "answer": "既然肚子吃饱了就需要活动，那吃完饭我们去散散步吧。",
        "answerPy": "Jìrán dùzi chī bǎo le jiù xūyào huódòng, nà chī wán fàn wǒmen qù sànsan bù ba.",
        "note": "活动 là từ bài 6 — ở đây là động từ \"vận động\".",
        "pair": "既然……就……"
      },
      {
        "promptLang": "vi",
        "prompt": "Bụng tôi hơi đau, có lẽ vì hôm nay ăn hơi nhiều.",
        "answer": "我肚子有点儿疼，可能是因为今天吃得有点儿多。",
        "answerPy": "Wǒ dùzi yǒudiǎnr téng, kěnéng shì yīnwèi jīntiān chī de yǒudiǎnr duō.",
        "note": "✗ 我疼肚子 → ✓ 我肚子疼: bộ phận cơ thể làm chủ ngữ nhỏ.",
        "pair": "因为……"
      }
    ],
    "colloFull": [
      {
        "zh": "肚子疼",
        "py": "dùzi téng",
        "vn": "đau bụng"
      },
      {
        "zh": "肚子饿",
        "py": "dùzi è",
        "vn": "bụng đói"
      },
      {
        "zh": "肚子吃饱了",
        "py": "dùzi chī bǎo le",
        "vn": "bụng đã no"
      },
      {
        "zh": "摸摸肚子",
        "py": "mōmō dùzi",
        "vn": "xoa bụng"
      },
      {
        "zh": "肚子不舒服",
        "py": "dùzi bù shūfu",
        "vn": "bụng khó chịu"
      }
    ],
    "patterns": [
      {
        "s": "肚子 + 疼 / 饿 / 饱",
        "m": "Đau bụng, đói bụng, no bụng"
      },
      {
        "s": "✗ 我疼肚子 → ✓ 我肚子疼",
        "m": "Bộ phận cơ thể làm chủ ngữ của vị ngữ tính từ"
      }
    ]
  },
  {
    "n": 31,
    "zh": "感情",
    "py": "gǎnqíng",
    "pos": "Danh từ",
    "vn": "tình cảm",
    "hv": "cảm tình",
    "em": "❤️",
    "lesson": 5,
    "explain": [
      "Cảm xúc gắn bó giữa người với người."
    ],
    "usage": "Danh từ; thường đi với 加深感情, 有感情.",
    "collo": [
      "加深感情",
      "夫妻感情",
      "有感情"
    ],
    "ex_zh": "夫妻说说一天的工作能加深感情。",
    "ex_py": "Fūqī shuōshuo yì tiān de gōngzuò néng jiāshēn gǎnqíng.",
    "ex_vn": "Vợ chồng nói chuyện về công việc trong ngày có thể làm sâu sắc thêm tình cảm.",
    "exList": [
      {
        "zh": "夫妻说说一天的工作能加深感情。",
        "py": "Fūqī shuōshuo yì tiān de gōngzuò néng jiāshēn gǎnqíng.",
        "vn": "Vợ chồng nói chuyện về công việc trong ngày có thể làm sâu sắc thêm tình cảm."
      },
      {
        "zh": "他们俩感情很好。",
        "py": "Tāmen liǎ gǎnqíng hěn hǎo.",
        "vn": "Hai người họ tình cảm rất tốt."
      },
      {
        "zh": "经常散步聊天可以增进家人之间的感情。",
        "py": "Jīngcháng sànbù liáotiān kěyǐ zēngjìn jiārén zhījiān de gǎnqíng.",
        "vn": "Thường xuyên đi dạo trò chuyện có thể tăng cường tình cảm giữa các thành viên trong gia đình."
      }
    ],
    "hanzi": [
      {
        "c": "情",
        "p": "qíng",
        "type": "左右结构 · Trái-phải",
        "st": 11,
        "ord": "忄 (tâm) trái → 青 (thanh) phải",
        "rad": "忄 (tâm – lòng)",
        "mean": "tình cảm",
        "tip": "Bộ tâm 忄 (cảm xúc) + 青(biểu âm) → cảm xúc trong LÒNG, kết hợp 感(cảm nhận) thành 感情 = TÌNH CẢM.",
        "cf": "请 (qǐng – \"mời\", bộ 讠\")",
        "w": "感情 / 爱情 / 感情好"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Vợ chồng ngày nào cũng cùng nhau đi dạo, vừa rèn luyện sức khỏe, vừa làm tình cảm thêm gắn bó.",
        "answer": "夫妻俩每天一起散步，既能锻炼身体，又能加深感情。",
        "answerPy": "Fūqī liǎ měi tiān yìqǐ sànbù, jì néng duànliàn shēntǐ, yòu néng jiāshēn gǎnqíng.",
        "note": "俩 là từ bài 1 — hai người, sau 俩 không thêm lượng từ.",
        "pair": "既……又……"
      },
      {
        "promptLang": "vi",
        "prompt": "Cha mẹ và con cái nếu thường xuyên trò chuyện, tình cảm sẽ càng tốt.",
        "answer": "父母和孩子如果经常聊天，感情会更好。",
        "answerPy": "Fùmǔ hé háizi rúguǒ jīngcháng liáotiān, gǎnqíng huì gèng hǎo.",
        "note": "感情会更好 — tình cảm sẽ tốt hơn.",
        "pair": "如果……会……"
      }
    ],
    "colloFull": [
      {
        "zh": "加深感情",
        "py": "jiāshēn gǎnqíng",
        "vn": "làm sâu sắc tình cảm"
      },
      {
        "zh": "夫妻感情",
        "py": "fū qī gǎnqíng",
        "vn": "tình cảm vợ chồng"
      },
      {
        "zh": "有感情",
        "py": "yǒu gǎnqíng",
        "vn": "có tình cảm"
      },
      {
        "zh": "感情很好",
        "py": "gǎnqíng hěn hǎo",
        "vn": "tình cảm rất tốt"
      },
      {
        "zh": "感情上",
        "py": "gǎnqíng shàng",
        "vn": "về mặt tình cảm"
      }
    ],
    "patterns": [
      {
        "s": "加深 + 感情",
        "m": "Làm tình cảm sâu đậm hơn"
      },
      {
        "s": "感情 + 好 / 深",
        "m": "Tình cảm tốt / sâu đậm"
      }
    ]
  },
  {
    "n": 32,
    "zh": "烦恼",
    "py": "fánnǎo",
    "pos": "Tính từ",
    "vn": "phiền muộn, buồn phiền",
    "hv": "phiền não",
    "em": "😣",
    "lesson": 5,
    "explain": [
      "Trạng thái tâm lý lo lắng, bực bội vì gặp chuyện không vui."
    ],
    "usage": "Tính từ/danh từ; thường đi với 一天的烦恼, 没有烦恼.",
    "collo": [
      "一天的烦恼",
      "没有烦恼",
      "很烦恼"
    ],
    "ex_zh": "一天的烦恼就都跑掉了。",
    "ex_py": "Yì tiān de fánnǎo jiù dōu pǎodiào le.",
    "ex_vn": "Phiền muộn cả ngày liền chạy mất hết.",
    "exList": [
      {
        "zh": "一天的烦恼就都跑掉了。",
        "py": "Yì tiān de fánnǎo jiù dōu pǎodiào le.",
        "vn": "Phiền muộn cả ngày liền chạy mất hết."
      },
      {
        "zh": "她最近有点儿烦恼，不知道该怎么办。",
        "py": "Tā zuìjìn yǒudiǎnr fánnǎo, bù zhīdào gāi zěnme bàn.",
        "vn": "Gần đây cô ấy có chút phiền muộn, không biết nên làm thế nào."
      },
      {
        "zh": "和朋友聊聊天，可以减少烦恼。",
        "py": "Hé péngyou liáoliao tiān, kěyǐ jiǎnshǎo fánnǎo.",
        "vn": "Trò chuyện với bạn bè, có thể giảm bớt phiền muộn."
      }
    ],
    "hanzi": [
      {
        "c": "烦",
        "p": "fán",
        "type": "左右结构 · Trái-phải",
        "st": 10,
        "ord": "火 (hỏa) trái → 页 (hiệt) phải",
        "rad": "火 (hỏa – lửa)",
        "mean": "phiền toái",
        "tip": "Bộ lửa 火 (nóng nảy trong đầu 页) → PHIỀN TOÁI, BỰC BỘI, kết hợp 恼(buồn bực) thành 烦恼 = PHIỀN MUỘN.",
        "cf": "烦 dễ nhầm với 炎 (yán – \"viêm, nóng\")",
        "w": "烦恼 / 麻烦 / 心烦"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Nghe con cái kể chuyện thú vị ở trường, phiền muộn cả ngày liền chạy mất hết.",
        "answer": "听孩子谈谈学校里有意思的事，一天的烦恼就都跑掉了。",
        "answerPy": "Tīng háizi tántan xuéxiào li yǒuyìsi de shì, yì tiān de fánnǎo jiù dōu pǎodiào le.",
        "note": "一天的烦恼就都跑掉了 kết hợp 掉, ôn lại từ vựng của bài.",
        "pair": "一……就……"
      },
      {
        "promptLang": "vi",
        "prompt": "Đi dạo không những giúp người ta bớt phiền muộn trong cuộc sống, mà tinh thần cũng tốt lên.",
        "answer": "散步不但可以帮助人们减少生活中的烦恼，而且精神也会好起来。",
        "answerPy": "Sànbù búdàn kěyǐ bāngzhù rénmen jiǎnshǎo shēnghuó zhōng de fánnǎo, érqiě jīngshén yě huì hǎo qilai.",
        "note": "Adj + 起来 — bắt đầu và tiếp tục tốt lên.",
        "pair": "不但……而且……"
      }
    ],
    "colloFull": [
      {
        "zh": "很烦恼",
        "py": "hěn fánnǎo",
        "vn": "rất phiền muộn"
      },
      {
        "zh": "没有烦恼",
        "py": "méiyǒu fánnǎo",
        "vn": "không có phiền muộn"
      },
      {
        "zh": "一天的烦恼",
        "py": "yì tiān de fánnǎo",
        "vn": "nỗi phiền muộn cả ngày"
      },
      {
        "zh": "减少烦恼",
        "py": "jiǎnshǎo fánnǎo",
        "vn": "bớt phiền muộn"
      },
      {
        "zh": "生活中的烦恼",
        "py": "shēnghuó zhōng de fánnǎo",
        "vn": "phiền muộn trong cuộc sống"
      }
    ],
    "patterns": [
      {
        "s": "Sub + 很 + 烦恼 (tính từ)",
        "m": "Ai đó rất phiền lòng"
      },
      {
        "s": "减少 + 烦恼 (danh từ)",
        "m": "Giảm bớt nỗi phiền muộn"
      }
    ]
  },
  {
    "n": 33,
    "zh": "掉",
    "py": "diào",
    "pos": "Động từ",
    "vn": "mất, đi, hết (bổ ngữ kết quả)",
    "hv": "điệu",
    "em": "💨",
    "lesson": 5,
    "explain": [
      "Dùng sau một số động từ để chỉ kết quả biến mất/không còn nữa."
    ],
    "usage": "Động từ + 掉: 跑掉了, 忘掉, 扔掉.",
    "collo": [
      "跑掉了",
      "忘掉",
      "扔掉"
    ],
    "ex_zh": "一天的烦恼就都跑掉了。",
    "ex_py": "Yì tiān de fánnǎo jiù dōu pǎodiào le.",
    "ex_vn": "Phiền muộn cả ngày liền chạy mất hết.",
    "exList": [
      {
        "zh": "一天的烦恼就都跑掉了。",
        "py": "Yì tiān de fánnǎo jiù dōu pǎodiào le.",
        "vn": "Phiền muộn cả ngày liền chạy mất hết."
      },
      {
        "zh": "这件事你别忘掉了。",
        "py": "Zhè jiàn shì nǐ bié wàngdiào le.",
        "vn": "Việc này bạn đừng quên mất nhé."
      },
      {
        "zh": "旧衣服可以扔掉了。",
        "py": "Jiù yīfu kěyǐ rēngdiào le.",
        "vn": "Quần áo cũ có thể vứt bỏ rồi."
      }
    ],
    "hanzi": [
      {
        "c": "掉",
        "p": "diào",
        "type": "左右结构 · Trái-phải",
        "st": 11,
        "ord": "扌 (thủ) trái → 卓 (trác) phải",
        "rad": "扌 (thủ – tay)",
        "mean": "rơi, mất",
        "tip": "Bộ tay 扌 (hành động) + 卓(biểu âm) → mở rộng thành RƠI RỤNG, MẤT ĐI, dùng làm bổ ngữ kết quả sau động từ để chỉ sự biến mất hoàn toàn.",
        "cf": "桌 (zhuō – \"cái bàn\", bộ 木\")",
        "w": "跑掉 / 忘掉 / 扔掉"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Nghe con cái kể chuyện thú vị, phiền muộn cả ngày liền biến mất hết.",
        "answer": "听孩子说说有意思的事，一天的烦恼就都跑掉了。",
        "answerPy": "Tīng háizi shuōshuo yǒuyìsi de shì, yì tiān de fánnǎo jiù dōu pǎodiào le.",
        "note": "跑掉了 kết hợp 烦恼, ôn lại từ vựng của bài.",
        "pair": "一……就……"
      },
      {
        "promptLang": "vi",
        "prompt": "Bất kể bận đến đâu, bạn cũng đừng quên mất lời hứa với tôi.",
        "answer": "不管多忙，你都别忘掉你对我的承诺。",
        "answerPy": "Bùguǎn duō máng, nǐ dōu bié wàngdiào nǐ duì wǒ de chéngnuò.",
        "note": "V + 掉 — bổ ngữ kết quả, nhấn \"mất hẳn đi\".",
        "pair": "不管……都……"
      }
    ],
    "colloFull": [
      {
        "zh": "忘掉",
        "py": "wàng diào",
        "vn": "quên mất"
      },
      {
        "zh": "扔掉",
        "py": "rēng diào",
        "vn": "vứt đi"
      },
      {
        "zh": "跑掉了",
        "py": "pǎo diào le",
        "vn": "chạy mất rồi"
      },
      {
        "zh": "卖掉",
        "py": "mài diào",
        "vn": "bán đi"
      },
      {
        "zh": "吃掉",
        "py": "chī diào",
        "vn": "ăn hết"
      }
    ],
    "patterns": [
      {
        "s": "V + 掉",
        "m": "Bổ ngữ kết quả — làm gì đó cho mất đi, hết đi"
      },
      {
        "s": "忘掉 ≈ 忘了",
        "m": "掉 nhấn mạnh \"mất hẳn đi\""
      }
    ]
  }
];

var wuData = [
  {img:'🚬',label:'抽烟',py:'chōuyān',letter:'A'},
  {img:'🌿',label:'植物',py:'zhíwù',letter:'B'},
  {img:'🤧',label:'咳嗽',py:'késou',letter:'C'},
  {img:'😔',label:'后悔',py:'hòuhuǐ',letter:'D'},
  {img:'🩸',label:'流血',py:'liúxiě',letter:'E'},
  {img:'⚖️',label:'减肥',py:'jiǎnféi',letter:'F'},
];

var dialogData = [
  {scene:'课文1 · 小李和小林聊天气和身体情况',
   preQuiz:[{q:'小李感冒的原因是什么？',opts:['吹了空调','昨天穿得太少','没休息好'],ans:1},{q:'小雨的鼻子为什么流血？',opts:['天气太干','被人打了','太累了'],ans:0},{q:'春天容易感冒时，应该注意什么？',opts:['注意保暖，经常开窗换空气','多吃肉','少喝水'],ans:0}],
   lines:[
     {sp:0,zh:'你的鼻子怎么流血了？快用纸擦擦。',py:'Nǐ de bízi zěnme liú xiě le? Kuài yòng zhǐ cāca.',vn:'Mũi bạn sao lại chảy máu vậy? Nhanh dùng giấy lau đi.'},
     {sp:1,zh:'我还不习惯北方的气候，估计是天气太干。今天天气不是很冷，你怎么穿这么多？',py:'Wǒ hái bù xíguàn běifāng de qìhòu, gūjì shì tiānqì tài gān. Jīntiān tiānqì bú shì hěn lěng, nǐ zěnme chuān zhème duō?',vn:'Tôi vẫn chưa quen với khí hậu miền Bắc, đoán là do thời tiết quá khô. Hôm nay thời tiết không lạnh lắm, sao bạn mặc nhiều vậy?'},
     {sp:0,zh:'就是因为昨天穿得太少，我都感冒了。',py:'Jiù shì yīnwèi zuótiān chuān de tài shǎo, wǒ dōu gǎnmào le.',vn:'Chính vì hôm qua mặc quá ít, tôi bị cảm rồi.'},
     {sp:1,zh:'最近感冒的人特别多。你去看医生了吗？',py:'Zuìjìn gǎnmào de rén tèbié duō. Nǐ qù kàn yīshēng le ma?',vn:'Gần đây người bị cảm nhiều lắm. Bạn đi khám bác sĩ chưa?'},
     {sp:0,zh:'没有，我只是咳嗽，有点儿头疼，不严重，多喝点儿水就好了。',py:'Méiyǒu, wǒ zhǐ shì késou, yǒudiǎnr tóuténg, bù yánzhòng, duō hē diǎnr shuǐ jiù hǎo le.',vn:'Không có, tôi chỉ ho thôi, hơi đau đầu, không nghiêm trọng, uống thêm nước là khỏi.'},
     {sp:1,zh:'春天天气时冷时热，特别容易感冒。这时候一定要多注意保暖，另外，最好经常打开窗户换换空气。',py:'Chūntiān tiānqì shí lěng shí rè, tèbié róngyì gǎnmào. Zhè shíhou yídìng yào duō zhùyì bǎonuǎn, lìngwài, zuìhǎo jīngcháng dǎkāi chuānghu huànhuan kōngqì.',vn:'Thời tiết mùa xuân lúc lạnh lúc nóng, đặc biệt dễ bị cảm. Lúc này nhất định phải chú ý giữ ấm, ngoài ra, tốt nhất nên thường xuyên mở cửa sổ để thay đổi không khí.'},
   ]},
  {scene:'课文2 · 小夏和小雨聊小雨抽烟的事情',
   preQuiz:[{q:'小雨为什么觉得抽烟没什么？',opts:['觉得抽烟这个动作看上去很帅','医生说没关系','家人不反对'],ans:0},{q:'医生让小雨怎么做？',opts:['以后不要再抽烟了','多喝咖啡','多运动'],ans:0},{q:'小雨最近为什么有些担心了？',opts:['因为总是咳嗽','因为工作太忙','因为家人生气了'],ans:0}],
   lines:[
     {sp:0,zh:'你咳嗽好点儿了吗？医生怎么说的？',py:'Nǐ késou hǎo diǎnr le ma? Yīshēng zěnme shuō de?',vn:'Bạn ho đỡ hơn chưa? Bác sĩ nói gì?'},
     {sp:1,zh:'还是老样子，他让我以后不要再抽烟了。',py:'Hái shì lǎo yàngzi, tā ràng wǒ yǐhòu búyào zài chōuyān le.',vn:'Vẫn như cũ, bác sĩ bảo tôi sau này đừng hút thuốc nữa.'},
     {sp:0,zh:'抽烟对身体一点儿好处也没有。',py:'Chōuyān duì shēntǐ yìdiǎnr hǎochù yě méiyǒu.',vn:'Hút thuốc không có lợi ích gì cho sức khỏe cả.'},
     {sp:1,zh:'我也知道，可是我觉得抽烟这个动作看上去很帅。',py:'Wǒ yě zhīdào, kěshì wǒ juéde chōuyān zhège dòngzuò kàn shangqu hěn shuài.',vn:'Tôi cũng biết, nhưng tôi thấy động tác hút thuốc trông rất ngầu.'},
     {sp:0,zh:'等你身体出现问题了，后悔就来不及了。',py:'Děng nǐ shēntǐ chūxiàn wèntí le, hòuhuǐ jiù láibují le.',vn:'Đợi đến khi cơ thể bạn xuất hiện vấn đề, hối hận cũng không kịp nữa.'},
     {sp:1,zh:'其实家人也一直反对我抽烟，我自己却觉得没什么。但最近总是咳嗽，所以我有些担心了。',py:'Qíshí jiārén yě yìzhí fǎnduì wǒ chōuyān, wǒ zìjǐ què juéde méi shénme. Dàn zuìjìn zǒngshì késou, suǒyǐ wǒ yǒuxiē dān xīn le.',vn:'Thực ra gia đình cũng luôn phản đối tôi hút thuốc, nhưng bản thân tôi lại thấy không sao. Nhưng gần đây cứ ho mãi, nên tôi hơi lo.'},
     {sp:0,zh:'抽烟不仅对自己没好处，还会影响周围人的身体健康。为了你和你的家人，别再抽了。',py:'Chōuyān bùjǐn duì zìjǐ méi hǎochù, hái huì yǐngxiǎng zhōuwéi rén de shēntǐ jiànkāng. Wèile nǐ hé nǐ de jiārén, bié zài chōu le.',vn:'Hút thuốc không những không có lợi cho bản thân, còn ảnh hưởng đến sức khỏe của người xung quanh. Vì bạn và gia đình bạn, đừng hút nữa.'},
   ]},
  {scene:'课文3 · 小李和小林聊电脑对身体的影响',
   preQuiz:[{q:'如果一天静坐超过几小时，就会影响身体健康？',opts:['4小时','6小时','8小时'],ans:1},{q:'大夫说小张的眼睛为什么总是跳？',opts:['长时间看电脑，眼睛太累','没吃早饭','睡得太多'],ans:0},{q:'他们午饭后打算做什么？',opts:['去公园散步','继续工作','去看电影'],ans:0}],
   lines:[
     {sp:0,zh:'我最近眼睛总是跳，大夫说是因为我长时间看电脑，眼睛太累。',py:'Wǒ zuìjìn yǎnjing zǒngshì tiào, dàifu shuō shì yīnwèi wǒ cháng shíjiān kàn diànnǎo, yǎnjing tài lèi.',vn:'Gần đây mắt tôi cứ giật liên tục, bác sĩ nói là do tôi nhìn máy tính lâu quá, mắt quá mỏi.'},
     {sp:1,zh:'长时间坐在电脑前面工作，眼睛很容易累。最好是每过一小时就休息休息，然后再开始工作。',py:'Cháng shíjiān zuò zài diànnǎo qiánmian gōngzuò, yǎnjing hěn róngyì lèi. Zuìhǎo shì měi guò yì xiǎoshí jiù xiūxi xiūxi, ránhòu zài kāishǐ gōngzuò.',vn:'Ngồi lâu trước máy tính làm việc, mắt rất dễ mỏi. Tốt nhất là cứ mỗi tiếng lại nghỉ ngơi một chút, rồi mới tiếp tục làm việc.'},
     {sp:0,zh:'医生也这么说，他还告诉我要多向远处看看，尤其是多看看绿色的植物。',py:'Yīshēng yě zhème shuō, tā hái gàosu wǒ yào duō xiàng yuǎn chù kànkan, yóuqí shì duō kànkan lǜsè de zhíwù.',vn:'Bác sĩ cũng nói vậy, ông ấy còn bảo tôi nên nhìn xa nhiều hơn, đặc biệt là nên nhìn nhiều vào cây xanh.'},
     {sp:1,zh:'长时间对着电脑不仅对眼睛不好，身体也会不舒服。研究发现，如果人一天静坐超过6小时，就会影响身体健康。',py:'Cháng shíjiān duìzhe diànnǎo bùjǐn duì yǎnjing bù hǎo, shēntǐ yě huì bù shūfu. Yánjiū fāxiàn, rúguǒ rén yì tiān jìngzuò chāoguò liù xiǎoshí, jiù huì yǐngxiǎng shēntǐ jiànkāng.',vn:'Ngồi lâu trước máy tính không những không tốt cho mắt, cơ thể cũng sẽ khó chịu. Nghiên cứu phát hiện, nếu một người ngồi yên một ngày quá 6 tiếng, sẽ ảnh hưởng đến sức khỏe.'},
     {sp:0,zh:'是啊！像咱们这些久坐办公室的人要注意，有时间应该多站起来活动活动。',py:'Shì a! Xiàng zánmen zhèxiē jiǔ zuò bàngōngshì de rén yào zhùyì, yǒu shíjiān yīnggāi duō zhàn qilai huódòng huódòng.',vn:'Đúng vậy! Những người ngồi văn phòng lâu như chúng ta phải chú ý, có thời gian nên đứng dậy vận động một chút.'},
     {sp:1,zh:'好，咱们午饭后就去附近的公园散散步吧。',py:'Hǎo, zánmen wǔfàn hòu jiù qù fùjìn de gōngyuán sànsan bù ba.',vn:'Được, chúng ta ăn trưa xong thì đi dạo ở công viên gần đây đi.'},
   ]},
  {scene:'课文4 · Sức khỏe thực sự là gì',
   preQuiz:[{q:'真正的健康包括什么？',opts:['身体和精神都健康','只要身体不生病','只要心情好'],ans:0},{q:'教授用数字说明健康时，健康是什么？',opts:['1','0','10'],ans:0},{q:'我们平时应该怎么做？',opts:['注意锻炼，别等健康出问题才后悔','多吃药','多睡觉'],ans:0}],
   lines:[
     {sp:0,zh:'每个人都希望自己健康，那么什么才是健康呢？过去，人们认为健康就是指身体不生病。但是，现在人们认识到，健康还指精神上的健康。只有身体和精神都健康，才算是真正的健康。',py:'Měi ge rén dōu xīwàng zìjǐ jiànkāng, nàme shénme cái shì jiànkāng ne? Guòqù, rénmen rènwéi jiànkāng jiùshì zhǐ shēntǐ bù shēngbìng. Dànshì, xiànzài rénmen rènshi dào, jiànkāng hái zhǐ jīngshén shang de jiànkāng. Zhǐyǒu shēntǐ hé jīngshén dōu jiànkāng, cái suàn shì zhēnzhèng de jiànkāng.',vn:'Mỗi người đều mong muốn bản thân khỏe mạnh, vậy thế nào mới là khỏe mạnh? Trước đây, người ta cho rằng sức khỏe chính là chỉ việc cơ thể không bị bệnh. Nhưng, bây giờ người ta nhận thức được, sức khỏe còn chỉ về sự khỏe mạnh tinh thần. Chỉ khi cả cơ thể và tinh thần đều khỏe mạnh, mới tính là sức khỏe thực sự.'},
     {sp:0,zh:'有一位教授用数字来说明健康有多么重要：要是健康是1，其他都是1后面的0；如果没有1，不管有多少0也没用。所以我们平时一定要注意锻炼，别等健康出问题了才后悔。',py:'Yǒu yí wèi jiàoshòu yòng shùzì lái shuōmíng jiànkāng yǒu duōme zhòngyào: Yàoshi jiànkāng shì yī, qítā dōu shì yī hòumiàn de líng; rúguǒ méiyǒu yī, bùguǎn yǒu duōshao líng yě méi yòng. Suǒyǐ wǒmen píngshí yídìng yào zhùyì duànliàn, bié děng jiànkāng chū wèntí le cái hòuhuǐ.',vn:'Có một vị giáo sư dùng con số để giải thích sức khỏe quan trọng như thế nào: Nếu sức khỏe là số 1, những thứ khác đều là số 0 phía sau số 1; nếu không có số 1, bất kể có bao nhiêu số 0 cũng vô dụng. Vì vậy chúng ta bình thường nhất định phải chú ý rèn luyện, đừng đợi đến khi sức khỏe xuất hiện vấn đề mới hối hận.'},
   ]},
  {scene:'课文5 · Bác sĩ tốt nhất, thuốc tốt nhất, vận động tốt nhất',
   preQuiz:[{q:'作者完全同意医生说的哪句话？',opts:['最好的医生是自己','最好的药是时间','最好的运动是散步'],ans:2},{q:'散步和跑步比，有什么好处？',opts:['不会那么辛苦','能跑得更快','更花时间'],ans:0},{q:'晚饭后一家人一起散步有什么好处？',opts:['可以交流感情，忘掉烦恼','可以赚钱','可以学习汉语'],ans:0}],
   lines:[
     {sp:0,zh:'我听一位医生说过一句话："最好的医生是自己，最好的药是时间，最好的运动是散步。"前两条我理解得不深，最后一条我完全同意。',py:'Wǒ tīng yí wèi yīshēng shuōguo yí jù huà: "Zuì hǎo de yīshēng shì zìjǐ, zuì hǎo de yào shì shíjiān, zuì hǎo de yùndòng shì sànbù." Qián liǎng tiáo wǒ lǐjiě de bù shēn, zuìhòu yì tiáo wǒ wánquán tóngyì.',vn:'Tôi từng nghe một bác sĩ nói một câu: "Bác sĩ tốt nhất là bản thân, thuốc tốt nhất là thời gian, vận động tốt nhất là đi dạo." Hai điều đầu tôi hiểu không sâu, điều cuối cùng tôi hoàn toàn đồng ý.'},
     {sp:0,zh:'散步是生活中最简单的锻炼方法，既可以活动身体，又可以减肥，而且不会像跑步那样辛苦。晚饭后，一家人一起出去散散步，是一件很幸福的事情。',py:'Sànbù shì shēnghuó zhōng zuì jiǎndān de duànliàn fāngfǎ, jì kěyǐ huódòng shēntǐ, yòu kěyǐ jiǎnféi, érqiě bú huì xiàng pǎobù nàyàng xīnkǔ. Wǎnfàn hòu, yì jiā rén yìqǐ chūqu sànsan bù, shì yí jiàn hěn xìngfú de shìqing.',vn:'Đi dạo là phương pháp luyện tập đơn giản nhất trong cuộc sống, vừa có thể vận động cơ thể, vừa có thể giảm cân, hơn nữa lại không vất vả như chạy bộ. Sau bữa tối, cả nhà cùng nhau ra ngoài đi dạo, là một việc rất hạnh phúc.'},
     {sp:0,zh:'肚子吃饱了需要活动，家人忙了一天需要交流，夫妻说说一天的工作能加深感情，听孩子谈谈学校里有意思的事，一天的烦恼就都跑掉了。',py:'Dùzi chībǎole xūyào huódòng, jiārén mángle yì tiān xūyào jiāoliú, fūqī shuōshuo yì tiān de gōngzuò néng jiāshēn gǎnqíng, tīng háizi tántan xuéxiào li yǒuyìsi de shì, yì tiān de fánnǎo jiù dōu pǎodiào le.',vn:'Bụng ăn no rồi cần vận động, cả nhà bận rộn cả ngày cần giao lưu, vợ chồng nói chuyện về công việc trong ngày có thể làm sâu sắc thêm tình cảm, nghe con cái kể chuyện thú vị ở trường, phiền muộn cả ngày liền chạy mất hết.'},
   ]},
];

var matchData = [
  {left:'咳嗽',right:'咳嗽好点儿了吗'},
  {left:'估计',right:'估计是天气太干'},
  {left:'严重',right:'不严重'},
  {left:'抽烟',right:'不要再抽烟了'},
  {left:'反对',right:'一直反对'},
  {left:'来不及',right:'后悔就来不及了'},
  {left:'研究',right:'研究发现'},
  {left:'超过',right:'超过6小时'},
  {left:'要是',right:'要是……就……'},
  {left:'减肥',right:'既可以……又可以减肥'},
];

var fillData = [
  {pre:'你的鼻子怎么流血了？快用纸',blank:'',post:'擦。',hint:'cāca',ans:'擦'},
  {pre:'我还不习惯北方的',blank:'',post:'，估计是天气太干。',hint:'qìhòu',ans:'气候'},
  {pre:'没有，我只是',blank:'',post:'，有点儿头疼，不严重。',hint:'késou',ans:'咳嗽'},
  {pre:'最好经常打开',blank:'',post:'换换空气。',hint:'chuānghu',ans:'窗户'},
  {pre:'他让我以后不要再',blank:'',post:'了。',hint:'chōuyān',ans:'抽烟'},
  {pre:'可是我觉得抽烟这个动作看上去很',blank:'',post:'。',hint:'shuài',ans:'帅'},
  {pre:'等你身体',blank:'',post:'问题了，后悔就来不及了。',hint:'chūxiàn',ans:'出现'},
  {pre:'其实家人也一直',blank:'',post:'我抽烟。',hint:'fǎnduì',ans:'反对'},
  {pre:'医生也这么说，他还告诉我要多向远处看看，尤其是多看看绿色的',blank:'',post:'。',hint:'zhíwù',ans:'植物'},
  {pre:'',blank:'',post:'发现，如果人一天静坐超过6小时，就会影响身体健康。',hint:'yánjiū',ans:'研究'},
  {pre:'有一位',blank:'',post:'用数字来说明健康有多么重要。',hint:'jiàoshòu',ans:'教授'},
  {pre:'',blank:'',post:'健康是1，其他都是1后面的0。',hint:'yàoshi',ans:'要是'},
  {pre:'散步',blank:'',post:'可以活动身体，又可以减肥。',hint:'jì',ans:'既'},
  {pre:'而且不会像跑步那样',blank:'',post:'。',hint:'xīnkǔ',ans:'辛苦'},
  {pre:'一天的',blank:'',post:'就都跑掉了。',hint:'fánnǎo',ans:'烦恼'},
];

var sortData = [
  {words:['你','的','鼻子','怎么','流血','了','？'],ans:'你的鼻子怎么流血了？',audio:'你的鼻子怎么流血了？'},
  {words:['最近','感冒','的','人','特别','多'],ans:'最近感冒的人特别多',audio:'最近感冒的人特别多'},
  {words:['抽烟','对','身体','一点儿','好处','也','没有'],ans:'抽烟对身体一点儿好处也没有',audio:'抽烟对身体一点儿好处也没有'},
  {words:['长','时间','看','电脑','，','眼睛','太','累'],ans:'长时间看电脑，眼睛太累',audio:'长时间看电脑，眼睛太累'},
  {words:['如果','人','一天','静坐','超过','6小时','，','就','会','影响','身体','健康'],ans:'如果人一天静坐超过6小时，就会影响身体健康',audio:'如果人一天静坐超过6小时，就会影响身体健康'},
  {words:['只有','身体','和','精神','都','健康','，','才','算','是','真正','的','健康'],ans:'只有身体和精神都健康，才算是真正的健康',audio:'只有身体和精神都健康，才算是真正的健康'},
  {words:['最好','的','运动','是','散步'],ans:'最好的运动是散步',audio:'最好的运动是散步'},
  {words:['散步','既','可以','活动','身体','，','又','可以','减肥'],ans:'散步既可以活动身体，又可以减肥',audio:'散步既可以活动身体，又可以减肥'},
];

var errorFixMode = 'wordchoice';
var errorFixData = [
  {wrong:'经理让服务员把所有桌子都____干净。',
   opts:['擦','指','反对','动作'],ans:0,
   exp:'擦 (lau) phù hợp với ngữ cảnh làm sạch bàn: 擦干净. Các từ còn lại không mang nghĩa lau chùi.'},
  {wrong:'第一印象是____在第一次见面时给别人留下的印象。',
   opts:['擦','动作','指','后悔'],ans:2,
   exp:'指 (chỉ về, nói đến) phù hợp với ngữ cảnh định nghĩa: 是指……. Các từ còn lại không mang nghĩa "là chỉ về".'},
  {wrong:'生气时不要急着做决定，因为这个时候做的决定可能让你____。',
   opts:['指','擦','动作','后悔'],ans:3,
   exp:'后悔 (hối hận) phù hợp với hậu quả của quyết định vội vàng. Các từ còn lại không phù hợp nghĩa.'},
  {wrong:'他对自己的要求很高，希望比赛的时候把每个____都做好。',
   opts:['后悔','指','反对','动作'],ans:3,
   exp:'动作 (động tác) đi với 每个: 每个动作 = mỗi động tác. Các từ còn lại không phải danh từ chỉ hành vi cơ thể.'},
  {wrong:'我本来以为她会____我这么做，没想到她竟然支持我。',
   opts:['动作','后悔','指','反对'],ans:3,
   exp:'反对 (phản đối) tương phản với 支持 (ủng hộ) ở vế sau, phù hợp ngữ cảnh. Các từ còn lại không mang nghĩa phản đối.'},
  {wrong:'A：你的腿怎么了？快坐下休息一会儿吧。B：没事儿，大夫说不____。',
   opts:['严重','研究','辛苦','超过'],ans:0,
   exp:'严重 (nghiêm trọng) phù hợp với ngữ cảnh bác sĩ trấn an "không nghiêm trọng". Các từ còn lại không phù hợp nghĩa.'},
  {wrong:'A：你看一下，现在有多少人同意这个计划？B：一共有十五个人，____了三分之二。',
   opts:['严重','辛苦','出现','超过'],ans:3,
   exp:'超过 (vượt quá) đi với số lượng/tỷ lệ: 超过三分之二. Các từ còn lại không mang nghĩa vượt mức.'},
  {wrong:'A：今天的晚饭怎么样？B：特别好吃，____你了，一会儿我来洗碗。',
   opts:['超过','出现','严重','辛苦'],ans:3,
   exp:'辛苦你了 là cụm cố định thể hiện lòng biết ơn với người đã vất vả nấu ăn. Các từ còn lại không phù hợp ngữ cảnh này.'},
  {wrong:'A：你觉得老孙这个人怎么样？B：老孙是个非常热情的人，他总是能在第一时间____，帮助大家解决问题。',
   opts:['辛苦','严重','超过','出现'],ans:3,
   exp:'出现 (xuất hiện) phù hợp với ngữ cảnh "luôn có mặt kịp thời". Các từ còn lại không mang nghĩa xuất hiện.'},
  {wrong:'A：你毕业后有什么打算？留北京还是回江西？B：还没决定，我在考虑要不要读____生。',
   opts:['出现','超过','严重','研究'],ans:3,
   exp:'研究生 (nghiên cứu sinh) là cụm cố định chỉ bậc học sau đại học. Các từ còn lại không kết hợp được với 生 theo nghĩa này.'},
];

var speakingData = {
  mode: 'ai-speak',
  intro: 'Mỗi câu hỏi là một tình huống thật trong đời sống, dùng đúng từ vựng và mẫu câu của Bài 7. Bấm 🎙️ rồi trả lời bằng tiếng Trung — AI sẽ nghe, ghi lại câu bạn nói và chấm điểm theo Nội dung · Mẫu câu · Từ vựng · Độ trôi chảy. Nên tự trả lời trước rồi mới mở “Câu mẫu” để đối chiếu.',
  tasks: [
    {
      situation: 'Đồng nghiệp của bạn hút thuốc ngay cạnh bàn làm việc.',
      q_zh: '你觉得抽烟对身体有什么影响？',
      q_py: 'Nǐ juéde chōuyān duì shēntǐ yǒu shénme yǐngxiǎng?',
      q_vn: 'Bạn thấy hút thuốc ảnh hưởng thế nào đến sức khỏe?',
      grammar: { label: '不仅……还…… (không những… còn…)', any: ['不仅', '不但'] },
      need: [
        { label: 'Nói ảnh hưởng với bản thân', any: ['好处', '健康', '咳嗽', '严重', '身体'] },
        { label: 'Nói ảnh hưởng với người xung quanh', any: ['周围', '别人', '家人', '空气'] }
      ],
      bonus: { label: 'Nêu lời khuyên bằng 最好', any: ['最好', '应该', '反对'] },
      vocab: ['抽烟', '好处', '空气'],
      minLen: 22,
      sample: '抽烟不仅对自己没有好处，还会让周围的空气变差，影响别人的身体健康。我觉得最好在家里和办公室都别抽。',
      sample_py: 'Chōuyān bùjǐn duì zìjǐ méiyǒu hǎochù, hái huì ràng zhōuwéi de kōngqì biàn chà, yǐngxiǎng biérén de shēntǐ jiànkāng. Wǒ juéde zuì hǎo zài jiā lǐ hé bàngōngshì dōu bié chōu.',
      sample_vn: 'Hút thuốc không những chẳng lợi gì cho bản thân, còn làm không khí xung quanh xấu đi, ảnh hưởng sức khỏe người khác. Tôi thấy tốt nhất ở nhà và văn phòng đều không nên hút.',
      tip: '对……有好处 / 没好处 = có lợi / không có lợi cho…'
    },
    {
      situation: 'Bạn ngồi máy tính cả ngày và thấy mỏi mắt.',
      q_zh: '长时间坐在电脑前工作，你会怎么保护自己的眼睛和身体？',
      q_py: 'Zhǎng shíjiān zuò zài diànnǎo qián gōngzuò, nǐ huì zěnme bǎohù zìjǐ de yǎnjing hé shēntǐ?',
      q_vn: 'Ngồi lâu trước máy tính làm việc, bạn bảo vệ mắt và cơ thể thế nào?',
      grammar: { label: '最好是……就…… (lời khuyên)', any: ['最好'] },
      need: [
        { label: 'Nói cách nghỉ ngơi', any: ['休息', '小时', '站', '走', '动'] },
        { label: 'Nói cách bảo vệ mắt', any: ['眼睛', '植物', '绿色', '看远', '窗户'] }
      ],
      bonus: { label: 'Nhắc đến không khí trong phòng', any: ['空气', '窗户', '散步'] },
      vocab: ['植物', '窗户', '空气'],
      minLen: 22,
      sample: '最好是每过一个小时就休息休息，站起来走一走，多看看绿色的植物。我还会打开窗户，让房间里的空气好一些。',
      sample_py: 'Zuì hǎo shì měi guo yí ge xiǎoshí jiù xiūxixiūxi, zhàn qǐlai zǒu yi zǒu, duō kànkan lǜ sè de zhíwù. Wǒ hái huì dǎ kāi chuānghu, ràng fángjiān lǐ de kōngqì hǎo yì xiē.',
      sample_vn: 'Tốt nhất cứ một tiếng là nghỉ một lát, đứng dậy đi lại, nhìn nhiều cây xanh. Tôi còn mở cửa sổ cho không khí trong phòng tốt hơn.',
      tip: '最好 + động từ đưa lời khuyên nhẹ nhàng: 你最好早点儿睡。'
    },
    {
      situation: 'Lớp học đang thảo luận thế nào là khỏe mạnh.',
      q_zh: '你觉得健康只是指身体不生病吗？',
      q_py: 'Nǐ juéde jiànkāng zhǐshì zhǐ shēntǐ bù shēngbìng ma?',
      q_vn: 'Bạn thấy sức khỏe chỉ là cơ thể không bị bệnh thôi sao?',
      grammar: { label: '不只是指……，还指……', any: ['指', '不只', '不仅'] },
      need: [
        { label: 'Nêu quan điểm', any: ['不是', '不只', '不仅', '我觉得'] },
        { label: 'Nhắc đến tinh thần', any: ['精神', '心情', '快乐', '烦恼'] }
      ],
      bonus: { label: 'Dùng 说明 hoặc 研究 để dẫn chứng', any: ['说明', '研究', '教授', '数字'] },
      vocab: ['精神', '指', '研究'],
      minLen: 22,
      sample: '我觉得不是。健康不只是指身体不生病，还指精神上的健康。有研究说明，心情好的人一般身体也比较好。',
      sample_py: 'Wǒ juéde bú shì. Jiànkāng bù zhǐshì zhǐ shēntǐ bù shēngbìng, hái zhǐ jīngshén shàng de jiànkāng. Yǒu yánjiū shuōmíng, xīnqíng hǎo de rén yìbān shēntǐ yě bǐjiào hǎo.',
      sample_vn: 'Tôi thấy không phải. Sức khỏe không chỉ là cơ thể không bệnh, còn là sức khỏe tinh thần. Có nghiên cứu chỉ ra, người tâm trạng tốt thì cơ thể cũng thường tốt hơn.',
      tip: '指 = chỉ về, nói đến: 这里说的“健康”指身体和精神。'
    },
    {
      situation: 'Bác sĩ khuyên bạn nên vận động mỗi ngày.',
      q_zh: '要是你每天都有时间锻炼身体，你会选择什么运动？为什么？',
      q_py: 'Yàoshi nǐ měitiān dōu yǒu shíjiān duànliàn shēntǐ, nǐ huì xuǎnzé shénme yùndòng? Wèishénme?',
      q_vn: 'Nếu mỗi ngày đều có thời gian rèn luyện, bạn sẽ chọn môn nào? Vì sao?',
      grammar: { label: '要是……(的话)，就……; 既……又……', any: ['要是', '既'] },
      need: [
        { label: 'Dùng 要是……就……', any: ['要是', '如果'] },
        { label: 'Chọn môn và nêu lý do', any: ['散步', '跑步', '游泳', '打球', '因为', '辛苦', '轻松'] }
      ],
      bonus: { label: 'Dùng 既……又…… nêu hai ưu điểm', any: ['既'] },
      vocab: ['要是', '既', '散步', '辛苦'],
      minLen: 22,
      sample: '要是我每天都有时间，我就会选择散步。散步既可以活动身体，又不会像跑步那样辛苦，晚饭后走半个小时最舒服。',
      sample_py: 'Yàoshi wǒ měitiān dōu yǒu shíjiān, wǒ jiù huì xuǎnzé sànbù. Sànbù jì kěyǐ huódòng shēntǐ, yòu bú huì xiàng pǎobù nà yàng xīnkǔ, wǎnfàn hòu zǒu bàn ge xiǎoshí zuì shūfu.',
      sample_vn: 'Nếu ngày nào tôi cũng có thời gian, tôi sẽ chọn đi bộ. Đi bộ vừa vận động được cơ thể, lại không mệt như chạy, sau bữa tối đi nửa tiếng là dễ chịu nhất.',
      tip: '既……又…… nêu hai đặc điểm cùng có, chủ ngữ giống nhau.'
    },
    {
      situation: 'Cả nhà bạn có thói quen đi dạo sau bữa tối.',
      q_zh: '晚饭后和家人一起散步有什么好处？',
      q_py: 'Wǎnfàn hòu hé jiārén yìqǐ sànbù yǒu shénme hǎochù?',
      q_vn: 'Sau bữa tối cùng người nhà đi dạo có lợi ích gì?',
      grammar: { label: '既……又……，而且……', any: ['既', '而且'] },
      need: [
        { label: 'Nói lợi ích cho cơ thể', any: ['身体', '健康', '消化', '肚子', '睡'] },
        { label: 'Nói lợi ích cho tình cảm', any: ['感情', '家人', '聊', '交流'] }
      ],
      bonus: { label: 'Nhắc đến việc quên đi phiền muộn bằng 烦恼', any: ['烦恼', '掉', '轻松'] },
      vocab: ['散步', '感情', '烦恼'],
      minLen: 22,
      sample: '晚饭后散步既对身体好，又能加深家人之间的感情。一边走一边聊天儿，一天的烦恼差不多都跑掉了。',
      sample_py: 'Wǎnfàn hòu sànbù jì duì shēntǐ hǎo, yòu néng jiā shēn jiārén zhī jiān de gǎnqíng. Yìbiān zǒu yìbiān liáo tiān ér, yì tiān de fánnǎo chàbuduō dōu pǎo diào le.',
      sample_vn: 'Đi dạo sau bữa tối vừa tốt cho cơ thể, vừa làm tình cảm gia đình thêm gắn bó. Vừa đi vừa trò chuyện, phiền muộn cả ngày gần như tan biến.',
      tip: '掉 làm bổ ngữ kết quả chỉ sự mất đi: 忘掉、跑掉、扔掉。'
    }
  ]
};

var translateData = [
  {vi:'Mũi bạn sao lại chảy máu vậy? Nhanh dùng giấy lau đi.',zh:'你的鼻子怎么流血了？快用纸擦擦。',py:'Nǐ de bízi zěnme liú xiě le? Kuài yòng zhǐ cāca.'},
  {vi:'Tôi chỉ ho thôi, hơi đau đầu, không nghiêm trọng.',zh:'我只是咳嗽，有点儿头疼，不严重。',py:'Wǒ zhǐ shì késou, yǒudiǎnr tóuténg, bù yánzhòng.'},
  {vi:'Hút thuốc không có lợi ích gì cho sức khỏe cả.',zh:'抽烟对身体一点儿好处也没有。',py:'Chōuyān duì shēntǐ yìdiǎnr hǎochù yě méiyǒu.'},
  {vi:'Đợi đến khi cơ thể bạn xuất hiện vấn đề, hối hận cũng không kịp nữa.',zh:'等你身体出现问题了，后悔就来不及了。',py:'Děng nǐ shēntǐ chūxiàn wèntí le, hòuhuǐ jiù láibují le.'},
  {vi:'Nghiên cứu phát hiện, nếu một người ngồi yên một ngày quá 6 tiếng, sẽ ảnh hưởng đến sức khỏe.',zh:'研究发现，如果人一天静坐超过6小时，就会影响身体健康。',py:'Yánjiū fāxiàn, rúguǒ rén yì tiān jìngzuò chāoguò liù xiǎoshí, jiù huì yǐngxiǎng shēntǐ jiànkāng.'},
  {vi:'Chỉ khi cả cơ thể và tinh thần đều khỏe mạnh, mới tính là sức khỏe thực sự.',zh:'只有身体和精神都健康，才算是真正的健康。',py:'Zhǐyǒu shēntǐ hé jīngshén dōu jiànkāng, cái suàn shì zhēnzhèng de jiànkāng.'},
  {vi:'Đi dạo là phương pháp luyện tập đơn giản nhất trong cuộc sống.',zh:'散步是生活中最简单的锻炼方法。',py:'Sànbù shì shēnghuó zhōng zuì jiǎndān de duànliàn fāngfǎ.'},
  {vi:'Phiền muộn cả ngày liền chạy mất hết.',zh:'一天的烦恼就都跑掉了。',py:'Yì tiān de fánnǎo jiù dōu pǎodiào le.'},
];
var translateDataRev = [
  {vi:'Tôi vẫn chưa quen với khí hậu miền Bắc.',zh:'我还不习惯北方的气候。',py:'Wǒ hái bù xíguàn běifāng de qìhòu.'},
  {vi:'Tốt nhất nên thường xuyên mở cửa sổ để thay đổi không khí.',zh:'最好经常打开窗户换换空气。',py:'Zuìhǎo jīngcháng dǎkāi chuānghu huànhuan kōngqì.'},
  {vi:'Nhưng tôi thấy động tác hút thuốc trông rất ngầu.',zh:'可是我觉得抽烟这个动作看上去很帅。',py:'Kěshì wǒ juéde chōuyān zhège dòngzuò kàn shangqu hěn shuài.'},
  {vi:'Bác sĩ cũng nói vậy, ông ấy còn bảo tôi nên nhìn xa nhiều hơn.',zh:'医生也这么说，他还告诉我要多向远处看看。',py:'Yīshēng yě zhème shuō, tā hái gàosu wǒ yào duō xiàng yuǎn chù kànkan.'},
  {vi:'Có một vị giáo sư dùng con số để giải thích sức khỏe quan trọng như thế nào.',zh:'有一位教授用数字来说明健康有多么重要。',py:'Yǒu yí wèi jiàoshòu yòng shùzì lái shuōmíng jiànkāng yǒu duōme zhòngyào.'},
  {vi:'Bác sĩ tốt nhất là bản thân, thuốc tốt nhất là thời gian.',zh:'最好的医生是自己，最好的药是时间。',py:'Zuì hǎo de yīshēng shì zìjǐ, zuì hǎo de yào shì shíjiān.'},
  {vi:'Sau bữa tối, cả nhà cùng nhau ra ngoài đi dạo, là một việc rất hạnh phúc.',zh:'晚饭后，一家人一起出去散散步，是一件很幸福的事情。',py:'Wǎnfàn hòu, yì jiā rén yìqǐ chūqu sànsan bù, shì yí jiàn hěn xìngfú de shìqing.'},
  {vi:'Vợ chồng nói chuyện về công việc trong ngày có thể làm sâu sắc thêm tình cảm.',zh:'夫妻说说一天的工作能加深感情。',py:'Fūqī shuōshuo yì tiān de gōngzuò néng jiāshēn gǎnqíng.'},
];

var listenData = {
  type: 'workbook',
  audioParts: [
    { src: '/audio/hsk4-bai-7/listen-1.mp3', from: 1, to: 5 },
    { src: '/audio/hsk4-bai-7/listen-2.mp3', from: 6, to: 12 },
    { src: '/audio/hsk4-bai-7/listen-3.mp3', from: 13, to: 22 }
  ],
  dictation: [
    {num:1, stmt:'他最近又胖了。', judge:false, lines:[
      {pre:'尽管很辛苦，但他还是每天锻炼一个小时，几个月下来，', blank:'减肥的效果很不错', post:'。',
       py:'Jǐnguǎn hěn xīnkǔ, dàn tā háishi měi tiān duànliàn yí ge xiǎoshí, jǐ ge yuè xiàlai, jiǎnféi de xiàoguǒ hěn búcuò.',
       vn:'Dù rất vất vả, anh ấy vẫn tập luyện mỗi ngày một tiếng, mấy tháng trôi qua, hiệu quả giảm cân rất tốt.'}]},
    {num:2, stmt:'春天容易感冒。', judge:true, lines:[
      {pre:'春天天气时冷时热，很多人感冒，', blank:'医生提醒人们要注意室内空气质量', post:'，早上起床后应该打开窗户换换空气。如果感冒了，要及时去医院。',
       py:'Chūntiān tiānqì shí lěng shí rè, hěn duō rén gǎnmào, yīshēng tíxǐng rénmen yào zhùyì shìnèi kōngqì zhìliàng, zǎoshang qǐchuáng hòu yīnggāi dǎkāi chuānghu huànhuan kōngqì. Rúguǒ gǎnmào le, yào jíshí qù yīyuàn.',
       vn:'Mùa xuân thời tiết lúc lạnh lúc nóng, nhiều người bị cảm, bác sĩ nhắc mọi người chú ý chất lượng không khí trong nhà, buổi sáng dậy nên mở cửa sổ để thay không khí. Nếu bị cảm, phải kịp thời đi bệnh viện.'}]},
    {num:3, stmt:'女人都想过减肥。', judge:false, lines:[
      {pre:'我们调查发现，', blank:'差不多有五分之四的女人考虑过减肥', post:'，实际上，她们中的很多人并不胖。',
       py:'Wǒmen diàochá fāxiàn, chàbuduō yǒu wǔ fēn zhī sì de nǚrén kǎolǜguo jiǎnféi, shíjìshang, tāmen zhōng de hěn duō rén bìng bú pàng.',
       vn:'Khảo sát của chúng tôi phát hiện, gần bốn phần năm phụ nữ từng nghĩ đến chuyện giảm cân, thực tế, rất nhiều người trong số họ không hề béo.'}]},
    {num:4, stmt:'自己要对健康负责。', judge:true, lines:[
      {pre:'每一包香烟上都印有"吸烟有害健康"的句子，就是告诉人们抽烟对身体不好，', blank:'提醒人们要对自己的健康负责', post:'。',
       py:'Měi yì bāo xiāngyān shang dōu yìn yǒu "xīyān yǒuhài jiànkāng" de jùzi, jiù shì gàosu rénmen chōuyān duì shēntǐ bù hǎo, tíxǐng rénmen yào duì zìjǐ de jiànkāng fùzé.',
       vn:'Trên mỗi bao thuốc lá đều in câu "hút thuốc có hại cho sức khoẻ", chính là để nói với mọi người hút thuốc không tốt cho cơ thể, nhắc mọi người phải chịu trách nhiệm với sức khoẻ của mình.'}]},
    {num:5, stmt:'睡太久对身体不好。', judge:true, lines:[
      {pre:'很多人一到周末就喜欢睡觉，而且一睡就是大半天。医生提醒我们，', blank:'睡觉时间太长并不好', post:'，有时甚至会头疼，一般睡够八小时就可以了。',
       py:'Hěn duō rén yí dào zhōumò jiù xǐhuan shuìjiào, érqiě yí shuì jiù shì dàbàntiān. Yīshēng tíxǐng wǒmen, shuìjiào shíjiān tài cháng bìng bù hǎo, yǒushí shènzhì huì tóuténg, yìbān shuì gòu bā xiǎoshí jiù kěyǐ le.',
       vn:'Nhiều người cứ đến cuối tuần là thích ngủ, mà ngủ một mạch cả nửa ngày. Bác sĩ nhắc chúng ta, ngủ quá lâu không hề tốt, có khi còn đau đầu, thường ngủ đủ tám tiếng là được.'}]}
  ],
  mc: [
    {num:6, options:['发烧了','感冒了','流鼻血了','肚子疼'], ans:2, q:'男的怎么了？',
     lines:[
       {speaker:'女', pre:'你怎么', blank:'这两天总是鼻子流血', post:'？快用纸擦擦。', py:'Nǐ zěnme zhè liǎng tiān zǒngshì bízi liúxiě? Kuài yòng zhǐ cāca.', vn:'Sao mấy hôm nay anh cứ chảy máu mũi thế? Mau lấy giấy lau đi.'},
       {speaker:'男', pre:'我还不习惯北方的气候，', blank:'估计是天气太干', post:'。', py:'Wǒ hái bù xíguàn běifāng de qìhòu, gūjì shì tiānqì tài gān.', vn:'Tôi vẫn chưa quen khí hậu miền Bắc, chắc là do thời tiết quá khô.'}
     ],
     explain:'问：男的怎么了？ "鼻子流血" → C 流鼻血了.'},
    {num:7, options:['饿了','胖了','茶喝多了','肚子不舒服'], ans:3, q:'男的怎么了？',
     lines:[
       {speaker:'男', pre:'我今天吃得太多了，', blank:'肚子有点儿不舒服', post:'。', py:'Wǒ jīntiān chī de tài duō le, dùzi yǒudiǎnr bù shūfu.', vn:'Hôm nay tôi ăn nhiều quá, bụng hơi khó chịu.'},
       {speaker:'女', pre:'', blank:'喝点儿热茶', post:'可能会好一些。', py:'Hē diǎnr rè chá kěnéng huì hǎo yìxiē.', vn:'Uống chút trà nóng có thể sẽ đỡ hơn.'}
     ],
     explain:'问：男的怎么了？ "肚子有点儿不舒服" → D 肚子不舒服. Trà chỉ là lời khuyên (C sai).'},
    {num:8, options:['嘴','牙','头','肚子'], ans:1, q:'男的哪里不舒服？',
     lines:[
       {speaker:'男', pre:'大夫，', blank:'我的牙最近特别疼', post:'，不知道是怎么回事。', py:'Dàifu, wǒ de yá zuìjìn tèbié téng, bù zhīdào shì zěnme huí shì.', vn:'Bác sĩ, răng tôi dạo này đau lắm, không biết là sao.'},
       {speaker:'女', pre:'你先躺这儿，好，', blank:'张开嘴我看看', post:'。', py:'Nǐ xiān tǎng zhèr, hǎo, zhāngkāi zuǐ wǒ kànkan.', vn:'Anh nằm xuống đây trước, được rồi, há miệng ra tôi xem.'}
     ],
     explain:'问：男的哪里不舒服？ "我的牙最近特别疼" → B 牙. Bác sĩ nói 张开嘴 nhưng chỗ đau là răng.'},
    {num:9, options:['腿流血了','手流血了','足球丢了','去医院了'], ans:0, q:'男的刚才怎么了？',
     lines:[
       {speaker:'女', pre:'', blank:'你的腿怎么流血了', post:'？快去医院吧。', py:'Nǐ de tuǐ zěnme liúxiě le? Kuài qù yīyuàn ba.', vn:'Chân anh sao chảy máu thế? Mau đi bệnh viện đi.'},
       {speaker:'男', pre:'没关系，', blank:'刚才踢足球不小心擦掉了点儿皮', post:'，不用去医院。', py:'Méi guānxi, gāngcái tī zúqiú bù xiǎoxīn cādiàole diǎnr pí, búyòng qù yīyuàn.', vn:'Không sao, lúc nãy đá bóng không cẩn thận bị trầy chút da thôi, không cần đi bệnh viện.'}
     ],
     explain:'问：男的刚才怎么了？ "你的腿怎么流血了" → A 腿流血了. D sai vì anh ấy nói không cần đi viện.'},
    {num:10, options:['图书馆','体育馆','医院','电影院'], ans:2, q:'男的最可能在哪儿？',
     lines:[
       {speaker:'女', pre:'', blank:'每天要按时吃药', post:'，注意休息，下个星期再来检查一次。', py:'Měi tiān yào ànshí chī yào, zhùyì xiūxi, xià ge xīngqī zài lái jiǎnchá yí cì.', vn:'Mỗi ngày phải uống thuốc đúng giờ, chú ý nghỉ ngơi, tuần sau đến kiểm tra lại một lần.'},
       {speaker:'男', pre:'明白了，', blank:'谢谢大夫', post:'，再见。', py:'Míngbai le, xièxie dàifu, zàijiàn.', vn:'Tôi hiểu rồi, cảm ơn bác sĩ, tạm biệt.'}
     ],
     explain:'问：男的最可能在哪儿？ "按时吃药…再来检查…谢谢大夫" → C 医院.'},
    {num:11, options:['她不用减肥','她太胖了','她太瘦了','她在开玩笑'], ans:0, q:'男的主要是什么意思？',
     lines:[
       {speaker:'女', pre:'我觉得我太胖了，所以我要减肥，', blank:'以后不吃甜食了', post:'。', py:'Wǒ juéde wǒ tài pàng le, suǒyǐ wǒ yào jiǎnféi, yǐhòu bù chī tiánshí le.', vn:'Em thấy mình béo quá nên phải giảm cân, sau này không ăn đồ ngọt nữa.'},
       {speaker:'男', pre:'没那么严重吧。', blank:'我觉得你胖一点儿更漂亮', post:'。', py:'Méi nàme yánzhòng ba. Wǒ juéde nǐ pàng yìdiǎnr gèng piàoliang.', vn:'Không đến mức thế đâu. Anh thấy em hơi đầy đặn một chút càng đẹp.'}
     ],
     explain:'问：男的主要是什么意思？ "没那么严重…胖一点儿更漂亮" → ý là không cần giảm cân, đáp án A.'},
    {num:12, options:['发烧了','肚子疼','一直咳嗽','陪同事看病'], ans:3, q:'女的为什么来医院？',
     lines:[
       {speaker:'男', pre:'你怎么也在医院？', blank:'身体不舒服', post:'？', py:'Nǐ zěnme yě zài yīyuàn? Shēntǐ bù shūfu?', vn:'Sao cậu cũng ở bệnh viện? Không khoẻ à?'},
       {speaker:'女', pre:'不是，我同事突然肚子疼，', blank:'我陪她来检查一下', post:'。', py:'Bú shì, wǒ tóngshì tūrán dùzi téng, wǒ péi tā lái jiǎnchá yíxià.', vn:'Không phải, đồng nghiệp tôi đột nhiên đau bụng, tôi đưa cô ấy đến kiểm tra.'}
     ],
     explain:'问：女的为什么来医院？ "我陪她来检查一下" → D 陪同事看病. B 肚子疼 là đồng nghiệp, không phải cô ấy.'},
    {num:13, options:['病好了','太忙了','请不了假','不愿意吃药'], ans:3, q:'男的为什么不去医院？',
     lines:[
       {speaker:'女', pre:'你的咳嗽怎么一直没好？', blank:'去医院看看吧', post:'。', py:'Nǐ de késou zěnme yìzhí méi hǎo? Qù yīyuàn kànkan ba.', vn:'Sao anh ho mãi không khỏi? Đi bệnh viện khám đi.'},
       {speaker:'男', pre:'不去，不是很严重，', blank:'过两天就好了', post:'。', py:'Bú qù, bú shì hěn yánzhòng, guò liǎng tiān jiù hǎo le.', vn:'Không đi, không nghiêm trọng lắm, vài hôm nữa là khỏi.'},
       {speaker:'女', pre:'但是', blank:'都一个星期了你也没好呀', post:'。', py:'Dànshì dōu yí ge xīngqī le nǐ yě méi hǎo ya.', vn:'Nhưng cả tuần rồi anh cũng có khỏi đâu.'},
       {speaker:'男', pre:'不去。', blank:'我不想吃药', post:'。', py:'Bú qù. Wǒ bù xiǎng chī yào.', vn:'Không đi. Anh không muốn uống thuốc.'}
     ],
     explain:'问：男的为什么不去医院？ "我不想吃药" → D 不愿意吃药.'},
    {num:14, options:['少吃饭','做运动','多吃水果','吃减肥药'], ans:1, q:'女的打算怎样减肥？',
     lines:[
       {speaker:'女', pre:'我又胖了七八斤，', blank:'必须减肥了', post:'。', py:'Wǒ yòu pàngle qī-bā jīn, bìxū jiǎnféi le.', vn:'Em lại tăng bảy tám cân, phải giảm cân thôi.'},
       {speaker:'男', pre:'你又要不吃饭？', blank:'多影响健康啊', post:'！', py:'Nǐ yòu yào bù chīfàn? Duō yǐngxiǎng jiànkāng a!', vn:'Em lại định nhịn ăn à? Ảnh hưởng sức khoẻ lắm!'},
       {speaker:'女', pre:'我这次打算运动减肥，', blank:'跑跑步、游游泳', post:'。', py:'Wǒ zhè cì dǎsuàn yùndòng jiǎnféi, pǎopao bù, yóuyou yǒng.', vn:'Lần này em định giảm cân bằng vận động, chạy bộ, bơi lội.'},
       {speaker:'男', pre:'', blank:'那还行', post:'。', py:'Nà hái xíng.', vn:'Vậy thì được.'}
     ],
     explain:'问：女的打算怎样减肥？ "运动减肥，跑跑步、游游泳" → B 做运动. A là cách cũ bị người nam phản đối.'},
    {num:15, options:['头疼','腿疼','肚子疼','耳朵疼'], ans:0, q:'女的怎么了？',
     lines:[
       {speaker:'男', pre:'你不是说下班要去逛街吗？', blank:'怎么回来了', post:'？', py:'Nǐ bú shì shuō xiàbān yào qù guàngjiē ma? Zěnme huílai le?', vn:'Em chẳng phải nói tan làm đi dạo phố sao? Sao lại về rồi?'},
       {speaker:'女', pre:'', blank:'头有点儿疼', post:'，不想去了。', py:'Tóu yǒudiǎnr téng, bù xiǎng qù le.', vn:'Đầu hơi đau, không muốn đi nữa.'},
       {speaker:'男', pre:'', blank:'要不要去医院看看', post:'？', py:'Yào bu yào qù yīyuàn kànkan?', vn:'Có cần đi bệnh viện khám không?'},
       {speaker:'女', pre:'用不着，', blank:'休息一会儿就好了', post:'。', py:'Yòngbuzháo, xiūxi yíhuìr jiù hǎo le.', vn:'Không cần, nghỉ một lát là khỏi.'}
     ],
     explain:'问：女的怎么了？ "头有点儿疼" → A 头疼.'},
    {num:16, options:['多喝水','不用吃药','少抽烟','经常运动'], ans:0, q:'医生让男的怎么做？',
     lines:[
       {speaker:'女', pre:'你的咳嗽不是很严重，', blank:'我给你开点儿药', post:'，回去好好休息。', py:'Nǐ de késou bú shì hěn yánzhòng, wǒ gěi nǐ kāi diǎnr yào, huíqu hǎohāo xiūxi.', vn:'Ho của anh không nghiêm trọng lắm, tôi kê chút thuốc, về nghỉ ngơi cho tốt.'},
       {speaker:'男', pre:'好，', blank:'还有其他要注意的吗', post:'？', py:'Hǎo, hái yǒu qítā yào zhùyì de ma?', vn:'Vâng, còn gì cần chú ý nữa không?'},
       {speaker:'女', pre:'最近不要抽烟，', blank:'多喝水', post:'。', py:'Zuìjìn bú yào chōuyān, duō hē shuǐ.', vn:'Dạo này đừng hút thuốc, uống nhiều nước.'},
       {speaker:'男', pre:'好的，', blank:'谢谢您，大夫', post:'。', py:'Hǎo de, xièxie nín, dàifu.', vn:'Vâng, cảm ơn bác sĩ.'}
     ],
     explain:'问：医生让男的怎么做？ "多喝水" → A. Bác sĩ bảo "不要抽烟" (không hút) chứ không phải "少抽烟" (hút ít), và có kê thuốc nên B sai.'},
    {num:17, options:['哭了','饿了','生病了','没吃药'], ans:2, q:'女的怎么了？',
     lines:[
       {speaker:'男', pre:'怎么样？', blank:'感觉好点儿了吗', post:'？', py:'Zěnmeyàng? Gǎnjué hǎo diǎnr le ma?', vn:'Thế nào? Cảm thấy đỡ hơn chưa?'},
       {speaker:'女', pre:'这些天一直在吃您开的药，', blank:'比上次好多了', post:'。', py:'Zhèxiē tiān yìzhí zài chī nín kāi de yào, bǐ shàng cì hǎo duō le.', vn:'Mấy hôm nay tôi vẫn uống thuốc bác sĩ kê, đỡ hơn lần trước nhiều rồi.'},
       {speaker:'男', pre:'那就好，回家还要按时吃药，', blank:'一个星期后再来检查一下', post:'。', py:'Nà jiù hǎo, huí jiā hái yào ànshí chī yào, yí ge xīngqī hòu zài lái jiǎnchá yíxià.', vn:'Vậy thì tốt, về nhà vẫn phải uống thuốc đúng giờ, một tuần sau đến kiểm tra lại.'},
       {speaker:'女', pre:'好的，大夫，', blank:'谢谢您', post:'。', py:'Hǎo de, dàifu, xièxie nín.', vn:'Vâng, bác sĩ, cảm ơn ông.'}
     ],
     explain:'问：女的怎么了？ Cô ấy đang uống thuốc bác sĩ kê và tái khám → C 生病了. D sai vì "一直在吃药".'},
    {num:18, options:['饿了','渴了','感冒了','肚子不舒服'], ans:3, q:'男的怎么了？',
     lines:[
       {speaker:'女', pre:'你怎么了？', blank:'脸色不太好', post:'。', py:'Nǐ zěnme le? Liǎnsè bú tài hǎo.', vn:'Anh sao thế? Sắc mặt không tốt lắm.'},
       {speaker:'男', pre:'', blank:'我肚子有点儿不舒服', post:'。', py:'Wǒ dùzi yǒudiǎnr bù shūfu.', vn:'Bụng tôi hơi khó chịu.'},
       {speaker:'女', pre:'要是严重的话，', blank:'我陪你去医院吧', post:'。', py:'Yàoshi yánzhòng de huà, wǒ péi nǐ qù yīyuàn ba.', vn:'Nếu nặng thì tôi đưa anh đi bệnh viện nhé.'},
       {speaker:'男', pre:'', blank:'不用了', post:'，谢谢。', py:'Búyòng le, xièxie.', vn:'Không cần đâu, cảm ơn.'}
     ],
     explain:'问：男的怎么了？ "我肚子有点儿不舒服" → D 肚子不舒服.'},
    {num:19, options:['刮风了','天气太干','看电视太久','长时间用电脑'], ans:3, q:'说话人的眼睛为什么不舒服？',
     lines:[
       {speaker:'旁白', pre:'我最近眼睛总觉得特别干，', blank:'医生说是因为我长时间对着电脑', post:'，眼睛太累。', py:'Wǒ zuìjìn yǎnjing zǒng juéde tèbié gān, yīshēng shuō shì yīnwèi wǒ cháng shíjiān duìzhe diànnǎo, yǎnjing tài lèi.', vn:'Dạo này mắt tôi luôn thấy rất khô, bác sĩ nói là do tôi nhìn máy tính quá lâu, mắt quá mệt.'},
       {speaker:'旁白', pre:'他告诉我用电脑四五十分钟后，', blank:'就应该休息一下', post:'，多向远处看看，最好是多看看绿色的植物。', py:'Tā gàosu wǒ yòng diànnǎo sì-wǔshí fēnzhōng hòu, jiù yīnggāi xiūxi yíxià, duō xiàng yuǎnchù kànkan, zuì hǎo shì duō kànkan lǜsè de zhíwù.', vn:'Ông ấy bảo tôi dùng máy tính bốn năm mươi phút thì nên nghỉ một chút, nhìn ra xa nhiều hơn, tốt nhất là nhìn nhiều cây xanh.'}
     ],
     explain:'问：说话人的眼睛为什么不舒服？ "因为我长时间对着电脑" → D 长时间用电脑.'},
    {num:20, options:['不用电脑','注意休息','少看电视','多做运动'], ans:1, q:'根据这段话，怎样能保证眼睛健康？',
     lines:[
       {speaker:'旁白', pre:'（同一段话）用电脑四五十分钟后，', blank:'就应该休息一下，多向远处看看', post:'，最好是多看看绿色的植物。', py:'(Tóng yí duàn huà) Yòng diànnǎo sì-wǔshí fēnzhōng hòu, jiù yīnggāi xiūxi yíxià, duō xiàng yuǎnchù kànkan, zuì hǎo shì duō kànkan lǜsè de zhíwù.', vn:'(Cùng đoạn văn) Dùng máy tính bốn năm mươi phút thì nên nghỉ một chút, nhìn ra xa nhiều hơn, tốt nhất là nhìn nhiều cây xanh.'}
     ],
     explain:'问：根据这段话，怎样能保证眼睛健康？ "应该休息一下" → B 注意休息. A quá tuyệt đối, đoạn văn không nói bỏ hẳn máy tính.'},
    {num:21, options:['休息好','少抽烟','幸福快乐','身体不生病'], ans:3, q:'以前人们认为健康是什么？',
     lines:[
       {speaker:'旁白', pre:'每个人都希望自己健康，那么到底什么才是健康呢？', blank:'过去，人们认为健康就是指身体不生病', post:'。', py:'Měi ge rén dōu xīwàng zìjǐ jiànkāng, nàme dàodǐ shénme cái shì jiànkāng ne? Guòqù, rénmen rènwéi jiànkāng jiù shì zhǐ shēntǐ bù shēngbìng.', vn:'Ai cũng mong mình khoẻ mạnh, vậy rốt cuộc thế nào mới là khoẻ mạnh? Trước đây, người ta cho rằng khoẻ mạnh là cơ thể không bị bệnh.'},
       {speaker:'旁白', pre:'但是，现在人们认识到，', blank:'健康既包括身体上的健康又包括精神上的健康', post:'。只有身体和精神都健康，才算是真正的健康。', py:'Dànshì, xiànzài rénmen rènshi dào, jiànkāng jì bāokuò shēntǐ shang de jiànkāng yòu bāokuò jīngshén shang de jiànkāng. Zhǐyǒu shēntǐ hé jīngshén dōu jiànkāng, cái suàn shì zhēnzhèng de jiànkāng.', vn:'Nhưng hiện nay người ta nhận ra, khoẻ mạnh vừa bao gồm sức khoẻ thể chất vừa bao gồm sức khoẻ tinh thần. Chỉ khi cả thể chất và tinh thần đều khoẻ mới được coi là khoẻ mạnh thật sự.'}
     ],
     explain:'问：以前人们认为健康是什么？ "过去，人们认为健康就是指身体不生病" → D.'},
    {num:22, options:['身体好','少生气','身心健康','精神健康'], ans:2, q:'怎样才算是真正的健康？',
     lines:[
       {speaker:'旁白', pre:'（同一段话）', blank:'只有身体和精神都健康', post:'，才算是真正的健康。', py:'(Tóng yí duàn huà) Zhǐyǒu shēntǐ hé jīngshén dōu jiànkāng, cái suàn shì zhēnzhèng de jiànkāng.', vn:'(Cùng đoạn văn) Chỉ khi cả thể chất và tinh thần đều khoẻ mới được coi là khoẻ mạnh thật sự.'}
     ],
     explain:'问：怎样才算是真正的健康？ "身体和精神都健康" = 身心健康 → C. A và D mỗi cái chỉ là một nửa.'}
  ]
};
