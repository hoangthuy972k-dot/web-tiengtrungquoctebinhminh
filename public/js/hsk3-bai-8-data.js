// ══════════════════════════════════════════
// DATA — HSK3 Bài 8: 你去哪儿我就去哪儿 (Bạn đi đâu tôi đi đó)
// Nguồn: HSK标准教程3 (Giáo trình chuẩn HSK 3 — nhantriviet.com)
// ══════════════════════════════════════════
var vocabData = [
  {
    "n": 1,
    "zh": "又",
    "py": "yòu",
    "pos": "Phó từ",
    "vn": "lại",
    "hv": "hựu",
    "em": "🔁",
    "lesson": 1,
    "explain": [
      "Diễn tả một hành động/tình huống ĐÃ lặp lại (khác với 再 dùng cho việc chưa xảy ra)."
    ],
    "usage": "Phó từ, đứng trước động từ: 又 + V, chỉ dùng cho việc đã xảy ra rồi.",
    "collo": [
      "又去看了",
      "又迟到了",
      "又下雨了"
    ],
    "ex_zh": "昨天去看了看，今天又去看了看。",
    "ex_py": "Zuótiān qù kànle kàn, jīntiān yòu qù kànle kàn.",
    "ex_vn": "Hôm qua đi xem thử, hôm nay lại đi xem tiếp.",
    "exList": [
      {
        "zh": "昨天去看了看，今天又去看了看。",
        "py": "Zuótiān qù kànle kàn, jīntiān yòu qù kànle kàn.",
        "vn": "Hôm qua đi xem thử, hôm nay lại đi xem tiếp."
      },
      {
        "zh": "你上午已经喝了一杯咖啡，下午怎么又喝了一杯？",
        "py": "Nǐ shàngwǔ yǐjīng hēle yì bēi kāfēi, xiàwǔ zěnme yòu hēle yì bēi?",
        "vn": "Sáng bạn đã uống một ly cà phê rồi, sao chiều lại uống thêm một ly nữa?"
      },
      {
        "zh": "我儿子又没考好，真着急！",
        "py": "Wǒ érzi yòu méi kǎohǎo, zhēn zháojí!",
        "vn": "Con trai tôi lại thi không tốt, thật lo quá!"
      }
    ],
    "hanzi": [
      {
        "c": "又",
        "p": "yòu",
        "type": "独体字 · Chữ đơn",
        "st": 2,
        "ord": "nét liền",
        "rad": "又 (hựu)",
        "mean": "lại",
        "tip": "Chữ tượng hình mô phỏng bàn tay phải → nghĩa gốc \"một lần nữa\", dùng cho việc ĐÃ lặp lại.",
        "cf": "叉 (chā – \"cái nĩa\", thêm một nét vào 又\")",
        "w": "又……又…… / 又来了"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Hôm qua tôi đi xem một lần rồi, hôm nay lại đi xem nữa.",
        "answer": "我昨天去看了看，今天又去看了看。",
        "answerPy": "Wǒ zuótiān qù kànle kàn, jīntiān yòu qù kànle kàn.",
        "note": "又 nói việc ĐÃ lặp lại; 再 nói việc SẼ lặp lại.",
        "pair": "又……了"
      },
      {
        "promptLang": "vi",
        "prompt": "Vì tầng 20 quá cao nên cô ấy nhìn xuống rất sợ.",
        "answer": "因为二十层太高了，所以她往下看很害怕。",
        "answerPy": "Yīnwèi èrshí céng tài gāo le, suǒyǐ tā wǎng xià kàn hěn hàipà.",
        "note": "因为……所以…… nêu nguyên nhân — kết quả (ôn lại 层/害怕 sẽ học ngay bên dưới).",
        "pair": "因为……所以……"
      }
    ],
    "colloFull": [
      {
        "zh": "又迟到了",
        "py": "yòu chídào le",
        "vn": "lại đến muộn rồi"
      },
      {
        "zh": "又下雨了",
        "py": "yòu xià yǔ le",
        "vn": "lại mưa rồi"
      },
      {
        "zh": "又去看了",
        "py": "yòu qù kàn le",
        "vn": "lại đi xem nữa"
      },
      {
        "zh": "又忘了",
        "py": "yòu wàng le",
        "vn": "lại quên mất"
      },
      {
        "zh": "又来了",
        "py": "yòu lái le",
        "vn": "lại đến rồi"
      }
    ],
    "patterns": [
      {
        "s": "又 + V + 了",
        "m": "Lại … rồi — việc ĐÃ lặp lại"
      },
      {
        "s": "又 (đã lặp) ≠ 再 (sẽ lặp): 又来了 / 明天再来"
      }
    ]
  },
  {
    "n": 2,
    "zh": "满意",
    "py": "mǎnyì",
    "pos": "Động từ",
    "vn": "hài lòng, vừa ý",
    "hv": "mãn ý",
    "em": "😊",
    "lesson": 1,
    "explain": [
      "Cảm thấy thỏa mãn, đúng như mong muốn."
    ],
    "usage": "Động từ, thường đi cùng 对: 对……满意.",
    "collo": [
      "很满意",
      "不满意",
      "对……满意"
    ],
    "ex_zh": "都不满意吗？",
    "ex_py": "Dōu bù mǎnyì ma?",
    "ex_vn": "Đều không ưng ý à?",
    "exList": [
      {
        "zh": "都不满意吗？",
        "py": "Dōu bù mǎnyì ma?",
        "vn": "Đều không ưng ý à?"
      },
      {
        "zh": "您对我们的服务满意吗？不错，我玩儿得很高兴。",
        "py": "Nín duì wǒmen de fúwù mǎnyì ma? Búcuò, wǒ wánr de hěn gāoxìng.",
        "vn": "Anh/chị có hài lòng với dịch vụ của chúng tôi không? Được đấy, tôi chơi rất vui."
      },
      {
        "zh": "眼镜怎么样？你觉得满意吗？",
        "py": "Yǎnjìng zěnmeyàng? Nǐ juéde mǎnyì ma?",
        "vn": "Kính thế nào? Bạn thấy ưng ý không?"
      }
    ],
    "hanzi": [
      {
        "c": "满",
        "p": "mǎn",
        "type": "左右结构 · Trái-phải",
        "st": 13,
        "ord": "氵 trái → 满(phần còn lại) phải",
        "rad": "氵 (thủy – nước)",
        "mean": "đầy, no",
        "tip": "氵(nước) → nước ĐẦY tràn ra, mở rộng nghĩa THỎA MÃN, HÀI LÒNG khi đã \"đầy đủ\".",
        "cf": "瞒 (mán – \"che giấu\", có bộ 目\")",
        "w": "满意 / 满了 / 不满"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Bạn có hài lòng với căn nhà mới không? Nếu không hài lòng thì mình xem cái khác.",
        "answer": "你对新房子满意吗？如果不满意，我们就看别的。",
        "answerPy": "Nǐ duì xīn fángzi mǎnyì ma? Rúguǒ bù mǎnyì, wǒmen jiù kàn biéde.",
        "note": "对 + N + 满意 — bắt buộc có 对.",
        "pair": "如果……就……"
      },
      {
        "promptLang": "vi",
        "prompt": "Nếu bạn không hài lòng thì chúng ta đi xem nhà khác đi.",
        "answer": "如果你不满意，我们就去看别的房子吧。",
        "answerPy": "Rúguǒ nǐ bù mǎnyì, wǒmen jiù qù kàn biéde fángzi ba.",
        "note": "如果……就…… diễn tả giả thiết — kết quả.",
        "pair": "如果……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "很满意",
        "py": "hěn mǎnyì",
        "vn": "rất hài lòng"
      },
      {
        "zh": "不满意",
        "py": "bù mǎnyì",
        "vn": "không hài lòng"
      },
      {
        "zh": "对……满意",
        "py": "duì mǎnyì",
        "vn": "hài lòng với…"
      },
      {
        "zh": "满意的答案",
        "py": "mǎnyì de dá'àn",
        "vn": "câu trả lời vừa ý"
      },
      {
        "zh": "让人满意",
        "py": "ràng rén mǎnyì",
        "vn": "khiến người ta hài lòng"
      }
    ],
    "patterns": [
      {
        "s": "对 + N + 满意",
        "m": "Hài lòng với cái gì — bắt buộc có 对"
      },
      {
        "s": "✗ 我满意这个房子 → ✓ 我对这个房子很满意"
      }
    ]
  },
  {
    "n": 3,
    "zh": "电梯",
    "py": "diàntī",
    "pos": "Danh từ",
    "vn": "thang máy",
    "hv": "điện thê",
    "em": "🛗",
    "lesson": 1,
    "explain": [
      "Thiết bị chở người/hàng lên xuống giữa các tầng nhà."
    ],
    "usage": "Danh từ; đi cùng động từ 坐/等: 坐电梯, 等电梯.",
    "collo": [
      "坐电梯",
      "没有电梯",
      "等电梯"
    ],
    "ex_zh": "一个没有电梯，不方便。",
    "ex_py": "Yí ge méiyǒu diàntī, bù fāngbiàn.",
    "ex_vn": "Một căn không có thang máy, bất tiện.",
    "exList": [
      {
        "zh": "一个没有电梯，不方便。",
        "py": "Yí ge méiyǒu diàntī, bù fāngbiàn.",
        "vn": "Một căn không có thang máy, bất tiện."
      },
      {
        "zh": "不好意思，小姐，这个电梯只到十层。",
        "py": "Bù hǎoyìsi, xiǎojiě, zhège diàntī zhǐ dào shí céng.",
        "vn": "Xin lỗi cô, thang máy này chỉ lên đến tầng 10 thôi."
      },
      {
        "zh": "最近他搬到了六层，开始坐电梯了。",
        "py": "Zuìjìn tā bāndàole liù céng, kāishǐ zuò diàntī le.",
        "vn": "Dạo này anh ấy chuyển lên tầng 6, bắt đầu đi thang máy."
      }
    ],
    "hanzi": [
      {
        "c": "梯",
        "p": "tī",
        "type": "左右结构 · Trái-phải",
        "st": 11,
        "ord": "木 trái → 弟 phải",
        "rad": "木 (mộc – gỗ)",
        "mean": "cầu thang",
        "tip": "木(gỗ, vật liệu làm bậc thang) + 弟(em, ý chỉ thứ tự từng bậc) → CẦU THANG, từng bậc nối tiếp nhau.",
        "cf": "弟 (dì – \"em trai\", không có bộ 木\")",
        "w": "电梯 / 楼梯"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Vì toà nhà này không có thang máy, nên lên xuống rất bất tiện.",
        "answer": "因为这个楼没有电梯，所以上下楼很不方便。",
        "answerPy": "Yīnwèi zhège lóu méiyǒu diàntī, suǒyǐ shàngxià lóu hěn bù fāngbiàn.",
        "note": "楼 và 上楼/下楼 là từ bài 2.",
        "pair": "因为……所以……"
      },
      {
        "promptLang": "vi",
        "prompt": "Chỉ cần thang máy còn hoạt động thì chúng ta lên tầng 20 rất nhanh.",
        "answer": "只要电梯还能用，我们上二十层就很快。",
        "answerPy": "Zhǐyào diàntī hái néng yòng, wǒmen shàng èrshí céng jiù hěn kuài.",
        "note": "只要……就…… diễn tả điều kiện đủ.",
        "pair": "只要……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "坐电梯",
        "py": "zuò diàntī",
        "vn": "đi thang máy"
      },
      {
        "zh": "等电梯",
        "py": "děng diàntī",
        "vn": "đợi thang máy"
      },
      {
        "zh": "没有电梯",
        "py": "méiyǒu diàntī",
        "vn": "không có thang máy"
      },
      {
        "zh": "电梯坏了",
        "py": "diàntī huài le",
        "vn": "thang máy hỏng"
      },
      {
        "zh": "电梯在那边",
        "py": "diàntī zài nàbiān",
        "vn": "thang máy ở đằng kia"
      }
    ],
    "patterns": [
      {
        "s": "坐 + 电梯",
        "m": "Đi thang máy — dùng động từ 坐"
      },
      {
        "s": "电 + 梯",
        "m": "Thang (梯) chạy điện (电)"
      }
    ]
  },
  {
    "n": 4,
    "zh": "层",
    "py": "céng",
    "pos": "Lượng từ",
    "vn": "tầng",
    "hv": "tầng",
    "em": "🏢",
    "lesson": 1,
    "explain": [
      "Đơn vị chỉ một tầng của tòa nhà."
    ],
    "usage": "Lượng từ, đứng sau số từ: [số từ] + 层 (二十层 = tầng 20).",
    "collo": [
      "二十层",
      "一层",
      "六层"
    ],
    "ex_zh": "一个有电梯，但是在二十层。",
    "ex_py": "Yí ge yǒu diàntī, dànshì zài èrshí céng.",
    "ex_vn": "Một căn có thang máy, nhưng ở tầng 20.",
    "exList": [
      {
        "zh": "一个有电梯，但是在二十层。",
        "py": "Yí ge yǒu diàntī, dànshì zài èrshí céng.",
        "vn": "Một căn có thang máy, nhưng ở tầng 20."
      },
      {
        "zh": "二十层怎么了？太高了，往下看多害怕啊！",
        "py": "Èrshí céng zěnme le? Tài gāo le, wǎng xià kàn duō hàipà a!",
        "vn": "Tầng 20 thì sao? Cao quá, nhìn xuống dưới sợ lắm!"
      },
      {
        "zh": "以前，周经理的办公室在一层，最近他搬到了六层。",
        "py": "Yǐqián, Zhōu jīnglǐ de bàngōngshì zài yì céng, zuìjìn tā bāndàole liù céng.",
        "vn": "Trước đây, văn phòng giám đốc Chu ở tầng 1, dạo này ông ấy chuyển lên tầng 6."
      }
    ],
    "hanzi": [
      {
        "c": "层",
        "p": "céng",
        "type": "半包围结构 · Bán bao vây",
        "st": 7,
        "ord": "尸 bao ngoài → 云 trong",
        "rad": "尸 (thi – thân người, mái)",
        "mean": "tầng, lớp",
        "tip": "尸(mái nhà) bao lấy 云(mây, ý chỉ lớp lang xếp chồng) → các TẦNG nhà xếp chồng lên nhau.",
        "cf": "尽 (jǐn/jìn – \"hết, tận\", có bộ 尸 tương tự\")",
        "w": "一层 / 二十层 / 楼层"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Nhà bạn ở tầng mấy? Nếu ở tầng cao thì đi thang máy cho đỡ mệt.",
        "answer": "你家住几层？如果住得高，就坐电梯吧。",
        "answerPy": "Nǐ jiā zhù jǐ céng? Rúguǒ zhù de gāo, jiù zuò diàntī ba.",
        "note": "坐 + 电梯 — đi thang máy dùng động từ 坐.",
        "pair": "如果……就……"
      },
      {
        "promptLang": "vi",
        "prompt": "Tuy văn phòng ở tầng 20 nhưng có thang máy nên rất tiện.",
        "answer": "虽然办公室在二十层，但是有电梯，很方便。",
        "answerPy": "Suīrán bàngōngshì zài èrshí céng, dànshì yǒu diàntī, hěn fāngbiàn.",
        "note": "虽然……但是…… diễn tả sự tương phản (ôn lại 电梯 vừa học trong bài này).",
        "pair": "虽然……但是……"
      }
    ],
    "colloFull": [
      {
        "zh": "二十层",
        "py": "èrshí céng",
        "vn": "tầng hai mươi"
      },
      {
        "zh": "住几层",
        "py": "zhù jǐ céng",
        "vn": "ở tầng mấy"
      },
      {
        "zh": "一层",
        "py": "yì céng",
        "vn": "tầng một"
      },
      {
        "zh": "上一层",
        "py": "shàng yì céng",
        "vn": "lên một tầng"
      },
      {
        "zh": "这层楼",
        "py": "zhè céng lóu",
        "vn": "tầng lầu này"
      }
    ],
    "patterns": [
      {
        "s": "số + 层",
        "m": "Tầng mấy — 住在六层"
      },
      {
        "s": "层 (tầng) đi với 楼 (toà nhà, bài 2)"
      }
    ]
  },
  {
    "n": 5,
    "zh": "害怕",
    "py": "hàipà",
    "pos": "Động từ",
    "vn": "sợ",
    "hv": "hại phạ",
    "em": "😨",
    "lesson": 1,
    "explain": [
      "Cảm thấy sợ hãi, lo lắng trước điều gì đó."
    ],
    "usage": "Động từ, mang tân ngữ trực tiếp hoặc đứng độc lập: 害怕 + [đối tượng]; phủ định: 不害怕.",
    "collo": [
      "很害怕",
      "不害怕",
      "别害怕"
    ],
    "ex_zh": "太高了，往下看多害怕啊！",
    "ex_py": "Tài gāo le, wǎng xià kàn duō hàipà a!",
    "ex_vn": "Cao quá, nhìn xuống dưới sợ lắm!",
    "exList": [
      {
        "zh": "太高了，往下看多害怕啊！",
        "py": "Tài gāo le, wǎng xià kàn duō hàipà a!",
        "vn": "Cao quá, nhìn xuống dưới sợ lắm!"
      },
      {
        "zh": "别害怕，只是感冒，休息两天就好了。",
        "py": "Bié hàipà, zhǐshì gǎnmào, xiūxi liǎng tiān jiù hǎo le.",
        "vn": "Đừng sợ, chỉ là cảm thôi, nghỉ hai ngày là khỏi."
      },
      {
        "zh": "十五层太高了，我都害怕向下看了。",
        "py": "Shíwǔ céng tài gāo le, wǒ dōu hàipà xiàng xià kàn le.",
        "vn": "Tầng 15 cao quá, tôi sợ nhìn xuống dưới luôn."
      }
    ],
    "hanzi": [
      {
        "c": "怕",
        "p": "pà",
        "type": "左右结构 · Trái-phải",
        "st": 8,
        "ord": "忄 trái → 白 phải",
        "rad": "忄 (tâm – tim, tâm trí)",
        "mean": "sợ hãi",
        "tip": "忄(tâm trí) + 白(trắng, ý chỉ trắng bệch, mất máu) → trong lòng TRẮNG BỆCH vì lo lắng = SỢ HÃI.",
        "cf": "柏 (bǎi – \"cây bách\", có bộ 木\")",
        "w": "害怕 / 别怕 / 不怕"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Đừng sợ, chỉ cần giữ sức khoẻ tốt thì việc gì cũng không đáng ngại.",
        "answer": "别害怕，只要身体健康，什么事都不怕。",
        "answerPy": "Bié hàipà, zhǐyào shēntǐ jiànkāng, shénme shì dōu bú pà.",
        "note": "身体健康 — kết hợp cố định, cũng là lời chúc.",
        "pair": "只要……就……"
      },
      {
        "promptLang": "vi",
        "prompt": "Nếu bạn sợ độ cao thì đừng đi tầng 20 nữa.",
        "answer": "如果你害怕高的地方，就别去二十层了。",
        "answerPy": "Rúguǒ nǐ hàipà gāo de dìfang, jiù bié qù èrshí céng le.",
        "note": "如果……就…… diễn tả giả thiết — kết quả (ôn lại 层 vừa học trong bài này).",
        "pair": "如果……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "很害怕",
        "py": "hěn hàipà",
        "vn": "rất sợ"
      },
      {
        "zh": "别害怕",
        "py": "bié hàipà",
        "vn": "đừng sợ"
      },
      {
        "zh": "害怕狗",
        "py": "hàipà gǒu",
        "vn": "sợ chó"
      },
      {
        "zh": "不害怕",
        "py": "bú hàipà",
        "vn": "không sợ"
      },
      {
        "zh": "害怕一个人",
        "py": "hàipà yí gè rén",
        "vn": "sợ ở một mình"
      }
    ],
    "patterns": [
      {
        "s": "Sub + 害怕 + N / V",
        "m": "Ai đó sợ cái gì, sợ làm gì"
      },
      {
        "s": "别 + 害怕",
        "m": "Đừng sợ — lời trấn an"
      }
    ]
  },
  {
    "n": 6,
    "zh": "熊猫",
    "py": "xióngmāo",
    "pos": "Danh từ",
    "vn": "gấu trúc, panda",
    "hv": "hùng miêu",
    "em": "🐼",
    "lesson": 2,
    "explain": [
      "Loài động vật đặc trưng của Trung Quốc, lông đen trắng."
    ],
    "usage": "Danh từ; lượng từ đi kèm là 只: 一只熊猫.",
    "collo": [
      "大熊猫",
      "小熊猫",
      "看熊猫"
    ],
    "ex_zh": "这个小熊猫送给你，欢迎你以后再到中国来。",
    "ex_py": "Zhège xiǎo xióngmāo sòng gěi nǐ, huānyíng nǐ yǐhòu zài dào Zhōngguó lái.",
    "ex_vn": "Con gấu trúc nhỏ này tặng bạn, hoan nghênh bạn sau này lại đến Trung Quốc.",
    "exList": [
      {
        "zh": "这个小熊猫送给你，欢迎你以后再到中国来。",
        "py": "Zhège xiǎo xióngmāo sòng gěi nǐ, huānyíng nǐ yǐhòu zài dào Zhōngguó lái.",
        "vn": "Con gấu trúc nhỏ này tặng bạn, hoan nghênh bạn sau này lại đến Trung Quốc."
      },
      {
        "zh": "我是第一次来看大熊猫。",
        "py": "Wǒ shì dì-yī cì lái kàn dà xióngmāo.",
        "vn": "Tôi lần đầu tiên đến xem gấu trúc lớn."
      },
      {
        "zh": "你看这些大熊猫多可爱啊！",
        "py": "Nǐ kàn zhèxiē dà xióngmāo duō kě'ài a!",
        "vn": "Bạn xem những con gấu trúc này đáng yêu biết bao!"
      }
    ],
    "hanzi": [
      {
        "c": "熊",
        "p": "xióng",
        "type": "上下结构 · Trên-dưới",
        "st": 14,
        "ord": "能 trên → 灬 dưới",
        "rad": "灬 (hỏa – lửa, chân)",
        "mean": "con gấu",
        "tip": "能(năng lực, sức mạnh) + 灬(bốn chân, biến thể) → con vật to khỏe bốn chân = GẤU.",
        "cf": "能 (néng – \"có thể\", không có bộ 灬\")",
        "w": "熊猫 / 熊"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Con gấu trúc nhỏ này tặng bạn, hoan nghênh bạn lần sau lại đến chơi.",
        "answer": "这个小熊猫送给你，欢迎你以后再来玩儿。",
        "answerPy": "Zhège xiǎo xióngmāo sòng gěi nǐ, huānyíng nǐ yǐhòu zài lái wánr.",
        "note": "欢迎 là từ bài 7; 再 nói việc sẽ lặp lại.",
        "pair": "欢迎……"
      },
      {
        "promptLang": "vi",
        "prompt": "Vì gấu trúc rất đáng yêu nên rất nhiều người thích xem chúng.",
        "answer": "因为熊猫很可爱，所以很多人喜欢看它们。",
        "answerPy": "Yīnwèi xióngmāo hěn kě'ài, suǒyǐ hěn duō rén xǐhuan kàn tāmen.",
        "note": "因为……所以…… nêu nguyên nhân — kết quả.",
        "pair": "因为……所以……"
      }
    ],
    "colloFull": [
      {
        "zh": "大熊猫",
        "py": "dà xióngmāo",
        "vn": "gấu trúc lớn"
      },
      {
        "zh": "看熊猫",
        "py": "kàn xióngmāo",
        "vn": "xem gấu trúc"
      },
      {
        "zh": "一只熊猫",
        "py": "yì zhī xióngmāo",
        "vn": "một con gấu trúc"
      },
      {
        "zh": "熊猫很可爱",
        "py": "xióngmāo hěn kě'ài",
        "vn": "gấu trúc rất dễ thương"
      },
      {
        "zh": "熊猫爱吃竹子",
        "py": "xióngmāo ài chī zhúzi",
        "vn": "gấu trúc thích ăn trúc"
      }
    ],
    "patterns": [
      {
        "s": "một + 只 + 熊猫",
        "m": "Lượng từ 只 cho con vật"
      },
      {
        "s": "熊 + 猫",
        "m": "Gấu (熊) mèo (猫) — cách ghép rất dễ nhớ"
      }
    ]
  },
  {
    "n": 7,
    "zh": "见面",
    "py": "jiànmiàn",
    "pos": "Động từ",
    "vn": "gặp, gặp nhau",
    "hv": "kiến diện",
    "em": "🤝",
    "lesson": 2,
    "explain": [
      "Hai người trực tiếp gặp mặt nhau."
    ],
    "usage": "Động từ ly hợp; không mang tân ngữ trực tiếp, muốn nói \"gặp ai\" phải dùng 跟/和 + người + 见面.",
    "collo": [
      "再见面",
      "跟朋友见面",
      "见个面"
    ],
    "ex_zh": "希望以后能再见面。",
    "ex_py": "Xīwàng yǐhòu néng zài jiànmiàn.",
    "ex_vn": "Hy vọng sau này có thể gặp lại.",
    "exList": [
      {
        "zh": "希望以后能再见面。",
        "py": "Xīwàng yǐhòu néng zài jiànmiàn.",
        "vn": "Hy vọng sau này có thể gặp lại."
      },
      {
        "zh": "我明天就回国了，以后不能总跟你见面了。",
        "py": "Wǒ míngtiān jiù huí guó le, yǐhòu bù néng zǒng gēn nǐ jiànmiàn le.",
        "vn": "Ngày mai tôi về nước rồi, sau này không thể thường xuyên gặp bạn nữa."
      },
      {
        "zh": "他们以前总是见面。",
        "py": "Tāmen yǐqián zǒngshì jiànmiàn.",
        "vn": "Trước đây họ luôn gặp nhau."
      }
    ],
    "hanzi": [
      {
        "c": "面",
        "p": "miàn",
        "type": "独体字 · Chữ đơn (tượng hình)",
        "st": 9,
        "ord": "nét liền, hình khuôn mặt",
        "rad": "面 (diện – mặt)",
        "mean": "mặt, bề mặt",
        "tip": "Chữ tượng hình mô phỏng khuôn MẶT người → 见(nhìn thấy)+面(mặt) = GẶP MẶT.",
        "cf": "脸 (liǎn – \"khuôn mặt\", có bộ 月\")",
        "w": "见面 / 外面 / 面包"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tuy lần này gặp rất vội, nhưng tôi hy vọng sau này chúng ta còn gặp lại.",
        "answer": "虽然这次见面很匆忙，但是我希望以后我们还能再见面。",
        "answerPy": "Suīrán zhè cì jiànmiàn hěn cōngmáng, dànshì wǒ xīwàng yǐhòu wǒmen hái néng zài jiànmiàn.",
        "note": "跟 + ai + 见面 — 见面 là từ ly hợp, không nói 见面他.",
        "pair": "虽然……但是……"
      },
      {
        "promptLang": "vi",
        "prompt": "Chỉ cần bạn có thời gian thì chúng ta gặp nhau một chút đi.",
        "answer": "只要你有时间，我们就见个面吧。",
        "answerPy": "Zhǐyào nǐ yǒu shíjiān, wǒmen jiù jiàn ge miàn ba.",
        "note": "只要……就…… diễn tả điều kiện đủ.",
        "pair": "只要……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "跟朋友见面",
        "py": "gēn péngyou jiànmiàn",
        "vn": "gặp bạn"
      },
      {
        "zh": "再见面",
        "py": "zàijiàn miàn",
        "vn": "gặp lại"
      },
      {
        "zh": "见个面",
        "py": "jiàn gè miàn",
        "vn": "gặp một lát"
      },
      {
        "zh": "见过面",
        "py": "jiàn guo miàn",
        "vn": "đã từng gặp"
      },
      {
        "zh": "见面的时候",
        "py": "jiànmiàn de shíhou",
        "vn": "lúc gặp nhau"
      }
    ],
    "patterns": [
      {
        "s": "跟 + ai + 见面",
        "m": "Gặp ai — 见面 là từ ly hợp"
      },
      {
        "s": "✗ 见面他 → ✓ 跟他见面",
        "m": "Chỗ này học sinh Việt hay sai"
      }
    ]
  },
  {
    "n": 8,
    "zh": "安静",
    "py": "ānjìng",
    "pos": "Tính từ",
    "vn": "yên tĩnh",
    "hv": "an tĩnh",
    "em": "🤫",
    "lesson": 3,
    "explain": [
      "Không có tiếng ồn, trạng thái tĩnh lặng."
    ],
    "usage": "Tính từ, làm vị ngữ với 很: 很安静; hoặc định ngữ: 安静的地方.",
    "collo": [
      "很安静",
      "安静的地方",
      "喜欢安静"
    ],
    "ex_zh": "坐这儿吧，这儿安静。",
    "ex_py": "Zuò zhèr ba, zhèr ānjìng.",
    "ex_vn": "Ngồi đây đi, ở đây yên tĩnh.",
    "exList": [
      {
        "zh": "坐这儿吧，这儿安静。",
        "py": "Zuò zhèr ba, zhèr ānjìng.",
        "vn": "Ngồi đây đi, ở đây yên tĩnh."
      },
      {
        "zh": "没事的时候，找一个安静的地方，读一本好书，是我最大的快乐。",
        "py": "Méi shì de shíhou, zhǎo yí ge ānjìng de dìfang, dú yì běn hǎo shū, shì wǒ zuìdà de kuàilè.",
        "vn": "Lúc rảnh rỗi, tìm một nơi yên tĩnh, đọc một cuốn sách hay, là niềm vui lớn nhất của tôi."
      },
      {
        "zh": "他喜欢安静的地方。",
        "py": "Tā xǐhuan ānjìng de dìfang.",
        "vn": "Anh ấy thích những nơi yên tĩnh."
      }
    ],
    "hanzi": [
      {
        "c": "静",
        "p": "jìng",
        "type": "左右结构 · Trái-phải",
        "st": 14,
        "ord": "青 trái → 争 phải",
        "rad": "青 (thanh – xanh)",
        "mean": "yên tĩnh",
        "tip": "青(trong lành, thanh khiết) + 争(tranh giành, ở đây ý chỉ dừng lại) → dừng mọi tranh giành, trở nên TRONG LÀNH, YÊN TĨNH.",
        "cf": "净 (jìng – \"sạch sẽ\", có bộ 冫\")",
        "w": "安静 / 静一静"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tôi thích tìm một nơi yên tĩnh đọc sách, vì chỗ ồn quá thì không đọc nổi.",
        "answer": "我喜欢找一个安静的地方看书，因为太吵的地方看不下去。",
        "answerPy": "Wǒ xǐhuan zhǎo yí ge ānjìng de dìfang kàn shū, yīnwèi tài chǎo de dìfang kàn bu xiàqu.",
        "note": "安静 ↔ 吵; V + 不下去 — không tiếp tục được.",
        "pair": "因为……"
      },
      {
        "promptLang": "vi",
        "prompt": "Nếu bạn muốn nghỉ ngơi thì tìm chỗ yên tĩnh mà ngồi đi.",
        "answer": "如果你想休息，就找个安静的地方坐吧。",
        "answerPy": "Rúguǒ nǐ xiǎng xiūxi, jiù zhǎo ge ānjìng de dìfang zuò ba.",
        "note": "如果……就…… diễn tả giả thiết — kết quả.",
        "pair": "如果……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "很安静",
        "py": "hěn ānjìng",
        "vn": "rất yên tĩnh"
      },
      {
        "zh": "安静的地方",
        "py": "ānjìng de dìfang",
        "vn": "nơi yên tĩnh"
      },
      {
        "zh": "喜欢安静",
        "py": "xǐhuan ānjìng",
        "vn": "thích yên tĩnh"
      },
      {
        "zh": "安静一点儿",
        "py": "ānjìng yìdiǎnr",
        "vn": "yên lặng một chút"
      },
      {
        "zh": "教室很安静",
        "py": "jiàoshì hěn ānjìng",
        "vn": "lớp học rất yên tĩnh"
      }
    ],
    "patterns": [
      {
        "s": "安静的 + nơi chốn",
        "m": "Nơi yên tĩnh"
      },
      {
        "s": "安静 ↔ 吵",
        "m": "Yên tĩnh ↔ ồn ào"
      }
    ]
  },
  {
    "n": 9,
    "zh": "可乐",
    "py": "kělè",
    "pos": "Danh từ",
    "vn": "coca-cola",
    "hv": "khả lạc",
    "em": "🥤",
    "lesson": 3,
    "explain": [
      "Loại nước ngọt có ga phổ biến."
    ],
    "usage": "Danh từ; đi cùng động từ 喝: 喝可乐.",
    "collo": [
      "喝可乐",
      "一杯可乐",
      "冰可乐"
    ],
    "ex_zh": "喝可乐吧。",
    "ex_py": "Hē kělè ba.",
    "ex_vn": "Uống coca đi.",
    "exList": [
      {
        "zh": "喝可乐吧。",
        "py": "Hē kělè ba.",
        "vn": "Uống coca đi."
      },
      {
        "zh": "我想再喝一杯可乐。",
        "py": "Wǒ xiǎng zài hē yì bēi kělè.",
        "vn": "Tôi muốn uống thêm một ly coca nữa."
      },
      {
        "zh": "再喝一杯，你晚上就别想睡觉了。",
        "py": "Zài hē yì bēi, nǐ wǎnshang jiù bié xiǎng shuìjiào le.",
        "vn": "Uống thêm một ly nữa, tối nay đừng mong ngủ được đấy."
      }
    ],
    "hanzi": [
      {
        "c": "乐",
        "p": "lè",
        "type": "独体字 · Chữ đơn",
        "st": 5,
        "ord": "nét liền",
        "rad": "丿 (phiệt)",
        "mean": "vui vẻ; (đọc yuè) âm nhạc",
        "tip": "Chữ tượng hình mô phỏng nhạc cụ cổ, đọc \"lè\" mang nghĩa VUI VẺ — 可乐 phiên âm mượn nghĩa \"có thể vui\" từ \"cola\".",
        "cf": "药 (yào – \"thuốc\", có bộ 艹\")",
        "w": "可乐 / 快乐 (lè) / 音乐 (yuè)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Cô ấy uống cà phê hay uống coca? Nếu bạn không biết thì hỏi cô ấy đi.",
        "answer": "她喝咖啡还是喝可乐？如果你不知道，就问问她吧。",
        "answerPy": "Tā hē kāfēi háishi hē kělè? Rúguǒ nǐ bù zhīdào, jiù wènwen tā ba.",
        "note": "还是 dùng trong câu hỏi lựa chọn (bài 3).",
        "pair": "如果……就……"
      },
      {
        "promptLang": "vi",
        "prompt": "Nếu bạn uống nhiều coca thì sẽ khó ngủ đấy.",
        "answer": "如果你喝太多可乐，就会睡不着的。",
        "answerPy": "Rúguǒ nǐ hē tài duō kělè, jiù huì shuì bu zháo de.",
        "note": "如果……就…… diễn tả giả thiết — kết quả (ôn lại 睡不着 đã học ở Bài 6).",
        "pair": "如果……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "喝可乐",
        "py": "hē kělè",
        "vn": "uống coca"
      },
      {
        "zh": "一杯可乐",
        "py": "yì bēi kělè",
        "vn": "một ly coca"
      },
      {
        "zh": "冰可乐",
        "py": "bīng kělè",
        "vn": "coca lạnh"
      },
      {
        "zh": "买可乐",
        "py": "mǎi kělè",
        "vn": "mua coca"
      },
      {
        "zh": "可乐还是茶",
        "py": "kělè háishi chá",
        "vn": "coca hay trà"
      }
    ],
    "patterns": [
      {
        "s": "một + 杯 + 可乐",
        "m": "Một ly coca"
      },
      {
        "s": "可乐 là từ dịch âm của \"cola\""
      }
    ]
  },
  {
    "n": 10,
    "zh": "一会儿",
    "py": "yíhuìr",
    "pos": "Danh từ",
    "vn": "chốc lát, một lát",
    "hv": "nhất hội nhi",
    "em": "⏲️",
    "lesson": 3,
    "explain": [
      "Khoảng thời gian ngắn."
    ],
    "usage": "Danh từ; làm bổ ngữ thời lượng sau động từ: 等 + 一会儿; hoặc đứng đầu câu diễn tả \"một lát nữa\": 一会儿 + [câu].",
    "collo": [
      "等一会儿",
      "一会儿就",
      "看一会儿"
    ],
    "ex_zh": "你等我一会儿，我马上回来。",
    "ex_py": "Nǐ děng wǒ yíhuìr, wǒ mǎshàng huílai.",
    "ex_vn": "Bạn đợi mình một lát, mình quay lại ngay.",
    "exList": [
      {
        "zh": "你等我一会儿，我马上回来。",
        "py": "Nǐ děng wǒ yíhuìr, wǒ mǎshàng huílai.",
        "vn": "Bạn đợi mình một lát, mình quay lại ngay."
      },
      {
        "zh": "我朋友去洗手间了，一会儿就回来。",
        "py": "Wǒ péngyou qù xǐshǒujiān le, yíhuìr jiù huílai.",
        "vn": "Bạn tôi đi vệ sinh rồi, chốc lát sẽ quay lại."
      },
      {
        "zh": "星期天又不上班，你也不让我多睡一会儿。",
        "py": "Xīngqītiān yòu bú shàngbān, nǐ yě bú ràng wǒ duō shuì yíhuìr.",
        "vn": "Chủ nhật lại không phải đi làm, mà bạn cũng không cho tôi ngủ thêm chút nữa."
      }
    ],
    "hanzi": [
      {
        "c": "会",
        "p": "huì",
        "type": "上下结构 · Trên-dưới",
        "st": 6,
        "ord": "人 trên → 云 dưới",
        "rad": "人 (nhân – người)",
        "mean": "gặp gỡ, hội; biết",
        "tip": "人(người) trên 云(mây, ý chỉ tụ họp) → người tụ họp lại = HỘI, GẶP GỠ; 一会儿 = một khoảnh khắc ngắn.",
        "cf": "烩 (huì – \"món hầm\", có bộ 火\")",
        "w": "一会儿 / 会议 / 一会儿就"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Bạn đợi tôi một lát, tôi đi vệ sinh rồi quay lại ngay.",
        "answer": "你等我一会儿，我去洗手间，马上就回来。",
        "answerPy": "Nǐ děng wǒ yíhuìr, wǒ qù xǐshǒujiān, mǎshàng jiù huílai.",
        "note": "V + 一会儿 — làm gì một lát; 马上就 — ngay lập tức.",
        "pair": "……就……"
      },
      {
        "promptLang": "vi",
        "prompt": "Chỉ cần đợi thêm một lát nữa là xe sẽ đến.",
        "answer": "只要再等一会儿，车就会来了。",
        "answerPy": "Zhǐyào zài děng yíhuìr, chē jiù huì lái le.",
        "note": "只要……就…… diễn tả điều kiện đủ.",
        "pair": "只要……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "等一会儿",
        "py": "děng yíhuìr",
        "vn": "đợi một lát"
      },
      {
        "zh": "一会儿就来",
        "py": "yíhuìr jiù lái",
        "vn": "lát nữa đến ngay"
      },
      {
        "zh": "看一会儿",
        "py": "kàn yíhuìr",
        "vn": "xem một lát"
      },
      {
        "zh": "休息一会儿",
        "py": "xiūxi yíhuìr",
        "vn": "nghỉ một lát"
      },
      {
        "zh": "过一会儿",
        "py": "guo yíhuìr",
        "vn": "lát nữa"
      }
    ],
    "patterns": [
      {
        "s": "V + 一会儿",
        "m": "Làm gì một lát"
      },
      {
        "s": "一会儿 (một lát) ≠ 一点儿 (một chút về lượng)"
      }
    ]
  },
  {
    "n": 11,
    "zh": "马上",
    "py": "mǎshàng",
    "pos": "Phó từ",
    "vn": "liền, ngay lập tức",
    "hv": "mã thượng",
    "em": "⚡",
    "lesson": 3,
    "explain": [
      "Diễn tả hành động sẽ xảy ra ngay sau đó, không trì hoãn."
    ],
    "usage": "Phó từ, đứng trước động từ: 马上 + V.",
    "collo": [
      "马上回来",
      "马上就到",
      "马上好"
    ],
    "ex_zh": "你等我一会儿，我马上回来。",
    "ex_py": "Nǐ děng wǒ yíhuìr, wǒ mǎshàng huílai.",
    "ex_vn": "Bạn đợi mình một lát, mình quay lại ngay.",
    "exList": [
      {
        "zh": "你等我一会儿，我马上回来。",
        "py": "Nǐ děng wǒ yíhuìr, wǒ mǎshàng huílai.",
        "vn": "Bạn đợi mình một lát, mình quay lại ngay."
      },
      {
        "zh": "别着急，就在前面，马上就到了。",
        "py": "Bié zháojí, jiù zài qiánmiàn, mǎshàng jiù dào le.",
        "vn": "Đừng lo, ở ngay phía trước thôi, sắp đến rồi."
      },
      {
        "zh": "吃鸡蛋面，马上就好。",
        "py": "Chī jīdàn miàn, mǎshàng jiù hǎo.",
        "vn": "Ăn mì trứng, sắp xong rồi."
      }
    ],
    "hanzi": [
      {
        "c": "马",
        "p": "mǎ",
        "type": "独体字 · Chữ đơn (tượng hình)",
        "st": 3,
        "ord": "nét liền, hình con ngựa",
        "rad": "马 (mã – ngựa)",
        "mean": "ngựa",
        "tip": "Chữ tượng hình mô phỏng con NGỰA phi nhanh → 马上 (trên lưng ngựa) mở rộng nghĩa NGAY LẬP TỨC, nhanh chóng.",
        "cf": "骂 (mà – \"mắng\", có bộ 马 lặp lại\")",
        "w": "马上 / 一匹马"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Đừng lo, chỉ cần đợi thêm chút nữa là xe đến ngay.",
        "answer": "别着急，只要再等一会儿，车马上就到了。",
        "answerPy": "Bié zháojí, zhǐyào zài děng yíhuìr, chē mǎshàng jiù dào le.",
        "note": "着急 là từ bài 1; 一会儿 là từ cùng bài.",
        "pair": "只要……就……"
      },
      {
        "promptLang": "vi",
        "prompt": "Nếu bạn gọi cho tôi bây giờ thì tôi sẽ đến ngay.",
        "answer": "如果你现在给我打电话，我就马上过去。",
        "answerPy": "Rúguǒ nǐ xiànzài gěi wǒ dǎ diànhuà, wǒ jiù mǎshàng guòqu.",
        "note": "如果……就…… diễn tả giả thiết — kết quả.",
        "pair": "如果……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "马上回来",
        "py": "mǎshàng huílai",
        "vn": "quay lại ngay"
      },
      {
        "zh": "马上就到",
        "py": "mǎshàng jiù dào",
        "vn": "sắp đến rồi"
      },
      {
        "zh": "马上好",
        "py": "mǎshàng hǎo",
        "vn": "xong ngay"
      },
      {
        "zh": "马上出发",
        "py": "mǎshàng chūfā",
        "vn": "xuất phát ngay"
      },
      {
        "zh": "马上要下雨了",
        "py": "mǎshàng yào xià yǔ le",
        "vn": "sắp mưa rồi"
      }
    ],
    "patterns": [
      {
        "s": "马上 + 就 + V",
        "m": "Ngay lập tức sẽ …"
      },
      {
        "s": "马上 (ngay) ≠ 突然 (bất ngờ, bài 6)"
      }
    ]
  },
  {
    "n": 12,
    "zh": "洗手间",
    "py": "xǐshǒujiān",
    "pos": "Danh từ",
    "vn": "nhà vệ sinh",
    "hv": "tẩy thủ gian",
    "em": "🚻",
    "lesson": 3,
    "explain": [
      "Phòng dùng để rửa tay, đi vệ sinh."
    ],
    "usage": "Danh từ; đi cùng động từ 去: 去洗手间.",
    "collo": [
      "去洗手间",
      "在洗手间",
      "洗手间在哪儿"
    ],
    "ex_zh": "我去洗手间。",
    "ex_py": "Wǒ qù xǐshǒujiān.",
    "ex_vn": "Mình đi vệ sinh.",
    "exList": [
      {
        "zh": "我去洗手间。",
        "py": "Wǒ qù xǐshǒujiān.",
        "vn": "Mình đi vệ sinh."
      },
      {
        "zh": "我朋友去洗手间了，一会儿就回来。",
        "py": "Wǒ péngyou qù xǐshǒujiān le, yíhuìr jiù huílai.",
        "vn": "Bạn tôi đi vệ sinh rồi, chốc lát sẽ quay lại."
      },
      {
        "zh": "六零三房间的客人刚才打电话来说洗手间有问题。",
        "py": "Liù líng sān fángjiān de kèrén gāngcái dǎ diànhuà lái shuō xǐshǒujiān yǒu wèntí.",
        "vn": "Khách phòng 603 lúc nãy gọi điện nói nhà vệ sinh có vấn đề."
      }
    ],
    "hanzi": [
      {
        "c": "洗",
        "p": "xǐ",
        "type": "左右结构 · Trái-phải",
        "st": 9,
        "ord": "氵 trái → 先 phải",
        "rad": "氵 (thủy – nước)",
        "mean": "rửa, giặt",
        "tip": "氵(nước) + 先(trước tiên) → dùng nước làm sạch TRƯỚC khi làm việc khác = RỬA, GIẶT.",
        "cf": "洒 (sǎ – \"rưới, vẩy\", cũng có bộ 氵\")",
        "w": "洗手间 / 洗澡 / 洗衣服"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Xin hỏi nhà vệ sinh ở đâu? Nếu xa quá thì tôi đợi một lát cũng được.",
        "answer": "请问洗手间在哪儿？如果很远，我就等一会儿也可以。",
        "answerPy": "Qǐngwèn xǐshǒujiān zài nǎr? Rúguǒ hěn yuǎn, wǒ jiù děng yíhuìr yě kěyǐ.",
        "note": "洗手间 lịch sự hơn 厕所.",
        "pair": "如果……就……"
      },
      {
        "promptLang": "vi",
        "prompt": "Vì nhà vệ sinh có vấn đề nên khách sạn cử người đến xem.",
        "answer": "因为洗手间有问题，所以宾馆派人来看看。",
        "answerPy": "Yīnwèi xǐshǒujiān yǒu wèntí, suǒyǐ bīnguǎn pài rén lái kànkan.",
        "note": "因为……所以…… nêu nguyên nhân — kết quả.",
        "pair": "因为……所以……"
      }
    ],
    "colloFull": [
      {
        "zh": "去洗手间",
        "py": "qù xǐshǒujiān",
        "vn": "đi nhà vệ sinh"
      },
      {
        "zh": "在洗手间",
        "py": "zài xǐshǒujiān",
        "vn": "ở nhà vệ sinh"
      },
      {
        "zh": "洗手间在哪儿",
        "py": "xǐshǒujiān zài nǎr",
        "vn": "nhà vệ sinh ở đâu"
      },
      {
        "zh": "找洗手间",
        "py": "zhǎo xǐshǒujiān",
        "vn": "tìm nhà vệ sinh"
      },
      {
        "zh": "干净的洗手间",
        "py": "gānjìng de xǐshǒujiān",
        "vn": "nhà vệ sinh sạch"
      }
    ],
    "patterns": [
      {
        "s": "去 + 洗手间",
        "m": "Đi nhà vệ sinh"
      },
      {
        "s": "洗手 + 间",
        "m": "Phòng (间) rửa tay (洗手) — cách nói lịch sự"
      }
    ]
  },
  {
    "n": 13,
    "zh": "老",
    "py": "lǎo",
    "pos": "Tính từ",
    "vn": "già, cũ",
    "hv": "lão",
    "em": "👴",
    "lesson": 4,
    "explain": [
      "Có tuổi cao, hoặc đã quen biết lâu (老同学 = bạn học cũ)."
    ],
    "usage": "Tính từ; làm định ngữ trước danh từ chỉ mối quan hệ lâu năm: 老同学, 老朋友.",
    "collo": [
      "老同学",
      "老朋友",
      "变老了"
    ],
    "ex_zh": "你做饭还是周明做饭？",
    "ex_py": "Nǐ zuò fàn háishi Zhōu Míng zuò fàn?",
    "ex_vn": "Bạn nấu cơm hay Chu Minh nấu cơm?",
    "exList": [
      {
        "zh": "快五年了，你几乎没变化。",
        "py": "Kuài wǔ nián le, nǐ jīhū méi biànhuà.",
        "vn": "Sắp năm năm rồi, bạn hầu như không thay đổi gì."
      },
      {
        "zh": "我叔叔虽然老了，但是还很健康。",
        "py": "Wǒ shūshu suīrán lǎo le, dànshì hái hěn jiànkāng.",
        "vn": "Chú tôi tuy đã già nhưng vẫn rất khỏe mạnh."
      },
      {
        "zh": "她是我的老同学。",
        "py": "Tā shì wǒ de lǎo tóngxué.",
        "vn": "Cô ấy là bạn học cũ của tôi."
      }
    ],
    "hanzi": [
      {
        "c": "老",
        "p": "lǎo",
        "type": "半包围结构 · Bán bao vây",
        "st": 6,
        "ord": "耂 bao ngoài → 匕 trong",
        "rad": "耂 (lão – già)",
        "mean": "già, cũ",
        "tip": "Chữ tượng hình mô phỏng người già chống gậy, tóc dài → GIÀ, CŨ; 老同学 = bạn học quen biết lâu.",
        "cf": "考 (kǎo – \"thi cử\", có phần trên giống nhau\")",
        "w": "老同学 / 老了 / 老朋友"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Ông tôi tuy đã già nhưng ngày nào cũng đi tập thể dục.",
        "answer": "我爷爷虽然老了，但是每天都去锻炼身体。",
        "answerPy": "Wǒ yéye suīrán lǎo le, dànshì měitiān dōu qù duànliàn shēntǐ.",
        "note": "虽然……但是…… diễn tả sự tương phản (ôn lại 锻炼 đã học ở Bài 4).",
        "pair": "虽然……但是……"
      },
      {
        "promptLang": "vi",
        "prompt": "Bạn học cũ của tôi tuy đã mấy năm không gặp, nhưng hầu như không thay đổi gì.",
        "answer": "我的老同学虽然几年没见了，但是几乎没有变化。",
        "answerPy": "Wǒ de lǎo tóngxué suīrán jǐ nián méi jiàn le, dànshì jīhū méiyǒu biànhuà.",
        "note": "老同学 là bạn học lâu năm, không phải bạn già.",
        "pair": "虽然……但是……"
      }
    ],
    "colloFull": [
      {
        "zh": "老朋友",
        "py": "lǎo péngyou",
        "vn": "bạn cũ"
      },
      {
        "zh": "老同学",
        "py": "lǎo tóngxué",
        "vn": "bạn học cũ"
      },
      {
        "zh": "变老了",
        "py": "biàn lǎo le",
        "vn": "già đi rồi"
      },
      {
        "zh": "老人",
        "py": "lǎo rén",
        "vn": "người già"
      },
      {
        "zh": "老地方",
        "py": "lǎo dìfang",
        "vn": "chỗ cũ"
      }
    ],
    "patterns": [
      {
        "s": "老 + 朋友 / 同学 (quen lâu)",
        "m": "老朋友 là bạn lâu năm, không phải bạn già"
      },
      {
        "s": "老 ↔ 年轻 / 新",
        "m": "Già ↔ trẻ; cũ ↔ mới"
      }
    ]
  },
  {
    "n": 14,
    "zh": "几乎",
    "py": "jīhū",
    "pos": "Phó từ",
    "vn": "hầu như, gần như",
    "hv": "cơ hồ",
    "em": "📏",
    "lesson": 4,
    "explain": [
      "Gần đạt đến mức độ nào đó nhưng chưa hoàn toàn."
    ],
    "usage": "Phó từ, đứng trước động từ/tính từ: 几乎 + V/Adj, thường đi cùng phủ định: 几乎没.",
    "collo": [
      "几乎没",
      "几乎都",
      "几乎不"
    ],
    "ex_zh": "快五年了，你几乎没变化。",
    "ex_py": "Kuài wǔ nián le, nǐ jīhū méi biànhuà.",
    "ex_vn": "Sắp năm năm rồi, bạn hầu như không thay đổi gì.",
    "exList": [
      {
        "zh": "快五年了，你几乎没变化。",
        "py": "Kuài wǔ nián le, nǐ jīhū méi biànhuà.",
        "vn": "Sắp năm năm rồi, bạn hầu như không thay đổi gì."
      },
      {
        "zh": "我考得不太好，汉字几乎一个都不会写。",
        "py": "Wǒ kǎo de bú tài hǎo, Hànzì jīhū yí ge dōu bú huì xiě.",
        "vn": "Tôi thi không tốt lắm, chữ Hán hầu như không viết được chữ nào."
      },
      {
        "zh": "我几乎每天都去公园。",
        "py": "Wǒ jīhū měitiān dōu qù gōngyuán.",
        "vn": "Tôi hầu như ngày nào cũng đi công viên."
      }
    ],
    "hanzi": [
      {
        "c": "几",
        "p": "jǐ",
        "type": "独体字 · Chữ đơn",
        "st": 2,
        "ord": "nét liền",
        "rad": "几 (kỷ)",
        "mean": "mấy, gần",
        "tip": "Chữ tượng hình mô phỏng cái bàn nhỏ (kỷ án) → mở rộng nghĩa \"số lượng nhỏ, gần đạt tới\" = HẦU NHƯ.",
        "cf": "己 (jǐ – \"bản thân\", hình dáng gần giống\")",
        "w": "几乎 / 几个 / 几乎不"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Bạn hầu như không thay đổi gì cả, vẫn trẻ như trước.",
        "answer": "你几乎没有变化，还是跟以前一样年轻。",
        "answerPy": "Nǐ jīhū méiyǒu biànhuà, háishi gēn yǐqián yíyàng niánqīng.",
        "note": "跟……一样 — giống như; 年轻 là từ bài 4.",
        "pair": "跟……一样"
      },
      {
        "promptLang": "vi",
        "prompt": "Tuy anh ấy hầu như không thay đổi nhưng tính cách khác trước nhiều.",
        "answer": "虽然他几乎没变化，但是性格跟以前很不一样。",
        "answerPy": "Suīrán tā jīhū méi biànhuà, dànshì xìnggé gēn yǐqián hěn bù yíyàng.",
        "note": "虽然……但是…… diễn tả sự tương phản (ôn lại 以前 đã học ở Bài 7).",
        "pair": "虽然……但是……"
      }
    ],
    "colloFull": [
      {
        "zh": "几乎没有",
        "py": "jīhū méiyǒu",
        "vn": "hầu như không có"
      },
      {
        "zh": "几乎都",
        "py": "jīhū dōu",
        "vn": "hầu như đều"
      },
      {
        "zh": "几乎一样",
        "py": "jīhū yíyàng",
        "vn": "gần như giống nhau"
      },
      {
        "zh": "几乎忘了",
        "py": "jīhū wàng le",
        "vn": "suýt quên mất"
      },
      {
        "zh": "几乎每天",
        "py": "jīhū měi tiān",
        "vn": "hầu như ngày nào cũng"
      }
    ],
    "patterns": [
      {
        "s": "几乎 + 没有 / 都 + V",
        "m": "Hầu như không / hầu như đều …"
      },
      {
        "s": "几乎 ≈ 差不多",
        "m": "几乎 thiên về \"sát đến mức đó\""
      }
    ]
  },
  {
    "n": 15,
    "zh": "变化",
    "py": "biànhuà",
    "pos": "Động từ",
    "vn": "thay đổi",
    "hv": "biến hóa",
    "em": "🔄",
    "lesson": 4,
    "explain": [
      "Trở nên khác so với trước, có sự biến đổi."
    ],
    "usage": "Động từ, cũng dùng như danh từ: 有变化, 没变化.",
    "collo": [
      "没变化",
      "变化很大",
      "变化太快"
    ],
    "ex_zh": "快五年了，你几乎没变化。",
    "ex_py": "Kuài wǔ nián le, nǐ jīhū méi biànhuà.",
    "ex_vn": "Sắp năm năm rồi, bạn hầu như không thay đổi gì.",
    "exList": [
      {
        "zh": "快五年了，你几乎没变化。",
        "py": "Kuài wǔ nián le, nǐ jīhū méi biànhuà.",
        "vn": "Sắp năm năm rồi, bạn hầu như không thay đổi gì."
      },
      {
        "zh": "还不错，你看我的变化很大。",
        "py": "Hái búcuò, nǐ kàn wǒ de biànhuà hěn dà.",
        "vn": "Cũng được đấy, bạn xem tôi thay đổi nhiều lắm."
      },
      {
        "zh": "这个城市这几年变化太快了。",
        "py": "Zhège chéngshì zhè jǐ nián biànhuà tài kuài le.",
        "vn": "Thành phố này mấy năm nay thay đổi nhanh quá."
      }
    ],
    "hanzi": [
      {
        "c": "变",
        "p": "biàn",
        "type": "上下结构 · Trên-dưới",
        "st": 8,
        "ord": "亦 trên → 又 dưới",
        "rad": "又 (hựu)",
        "mean": "thay đổi, biến đổi",
        "tip": "亦(cũng, thêm) + 又(lại, lặp lại) → sự việc LẶP LẠI theo cách khác đi = THAY ĐỔI.",
        "cf": "恋 (liàn – \"luyến ái\", có bộ 心\")",
        "w": "变化 / 变了 / 改变"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Thành phố này thay đổi rất nhiều so với trước, đến tôi cũng gần như không nhận ra.",
        "answer": "这个城市跟以前比变化很大，连我也几乎认不出来了。",
        "answerPy": "Zhège chéngshì gēn yǐqián bǐ biànhuà hěn dà, lián wǒ yě jīhū rèn bu chūlái le.",
        "note": "V + 不出来 — không nhận ra được.",
        "pair": "连……也……"
      },
      {
        "promptLang": "vi",
        "prompt": "Chỉ cần bạn nỗ lực thì cuộc sống sẽ có thay đổi.",
        "answer": "只要你努力，生活就会有变化。",
        "answerPy": "Zhǐyào nǐ nǔlì, shēnghuó jiù huì yǒu biànhuà.",
        "note": "只要……就…… diễn tả điều kiện đủ (ôn lại 努力 đã học ở Bài 4).",
        "pair": "只要……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "变化很大",
        "py": "biànhuà hěn dà",
        "vn": "thay đổi rất nhiều"
      },
      {
        "zh": "没有变化",
        "py": "méiyǒu biànhuà",
        "vn": "không thay đổi"
      },
      {
        "zh": "发生变化",
        "py": "fāshēng biànhuà",
        "vn": "xảy ra thay đổi"
      },
      {
        "zh": "变化太快",
        "py": "biànhuà tài kuài",
        "vn": "thay đổi quá nhanh"
      },
      {
        "zh": "城市的变化",
        "py": "chéngshì de biànhuà",
        "vn": "sự thay đổi của thành phố"
      }
    ],
    "patterns": [
      {
        "s": "N + 的变化 + 很大",
        "m": "Sự thay đổi của cái gì rất lớn"
      },
      {
        "s": "变化 (danh từ) ≠ 变 (động từ): 变化很大 / 天气变了"
      }
    ]
  },
  {
    "n": 16,
    "zh": "健康",
    "py": "jiànkāng",
    "pos": "Tính từ",
    "vn": "khỏe mạnh",
    "hv": "kiện khang",
    "em": "💪",
    "lesson": 4,
    "explain": [
      "Trạng thái cơ thể tốt, không bệnh tật."
    ],
    "usage": "Tính từ, làm vị ngữ với 很: 很健康; cũng dùng như danh từ: 身体健康.",
    "collo": [
      "很健康",
      "身体健康",
      "健康最重要"
    ],
    "ex_zh": "健康最重要，胖瘦没关系。",
    "ex_py": "Jiànkāng zuì zhòngyào, pàng shòu méi guānxi.",
    "ex_vn": "Sức khỏe là quan trọng nhất, béo gầy không quan trọng.",
    "exList": [
      {
        "zh": "健康最重要，胖瘦没关系。",
        "py": "Jiànkāng zuì zhòngyào, pàng shòu méi guānxi.",
        "vn": "Sức khỏe là quan trọng nhất, béo gầy không quan trọng."
      },
      {
        "zh": "虽然他工作很忙，但是身体一直很健康。",
        "py": "Suīrán tā gōngzuò hěn máng, dànshì shēntǐ yìzhí hěn jiànkāng.",
        "vn": "Tuy anh ấy làm việc rất bận nhưng sức khỏe luôn khỏe mạnh."
      },
      {
        "zh": "医生说只要多运动，身体就会更健康。",
        "py": "Yīshēng shuō zhǐyào duō yùndòng, shēntǐ jiù huì gèng jiànkāng.",
        "vn": "Bác sĩ nói chỉ cần vận động nhiều thì sức khỏe sẽ tốt hơn."
      }
    ],
    "hanzi": [
      {
        "c": "康",
        "p": "kāng",
        "type": "半包围结构 · Bán bao vây",
        "st": 11,
        "ord": "广 bao ngoài → 隶(biến thể) trong",
        "rad": "广 (nghiễm – mái nhà)",
        "mean": "khỏe mạnh, yên ổn",
        "tip": "广(mái nhà rộng rãi) + phần trong (thóc lúa dư dả) → cuộc sống ĐẦY ĐỦ, YÊN ỔN = KHỎE MẠNH.",
        "cf": "糠 (kāng – \"cám gạo\", có bộ 米\")",
        "w": "健康 / 康复"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Với tôi, sức khoẻ là quan trọng nhất, tiền bạc không quan trọng bằng.",
        "answer": "对我来说，健康最重要，钱没有健康重要。",
        "answerPy": "Duì wǒ lái shuō, jiànkāng zuì zhòngyào, qián méiyǒu jiànkāng zhòngyào.",
        "note": "A 没有 B + Adj — A không bằng B về mặt nào.",
        "pair": "对……来说……"
      },
      {
        "promptLang": "vi",
        "prompt": "Chỉ cần bạn khỏe mạnh thì tôi sẽ rất vui.",
        "answer": "只要你健康，我就会很高兴。",
        "answerPy": "Zhǐyào nǐ jiànkāng, wǒ jiù huì hěn gāoxìng.",
        "note": "只要……就…… diễn tả điều kiện đủ.",
        "pair": "只要……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "很健康",
        "py": "hěn jiànkāng",
        "vn": "rất khoẻ mạnh"
      },
      {
        "zh": "身体健康",
        "py": "shēntǐ jiànkāng",
        "vn": "sức khoẻ tốt"
      },
      {
        "zh": "健康最重要",
        "py": "jiànkāng zuì zhòngyào",
        "vn": "sức khoẻ quan trọng nhất"
      },
      {
        "zh": "不健康",
        "py": "bù jiànkāng",
        "vn": "không lành mạnh"
      },
      {
        "zh": "注意健康",
        "py": "zhù yì jiànkāng",
        "vn": "chú ý sức khoẻ"
      }
    ],
    "patterns": [
      {
        "s": "身体 + 健康",
        "m": "Cơ thể khoẻ mạnh — lời chúc quen thuộc"
      },
      {
        "s": "健康 (tính từ và danh từ): 很健康 / 注意健康"
      }
    ]
  },
  {
    "n": 17,
    "zh": "重要",
    "py": "zhòngyào",
    "pos": "Tính từ",
    "vn": "quan trọng",
    "hv": "trọng yếu",
    "em": "⭐",
    "lesson": 4,
    "explain": [
      "Có giá trị lớn, cần được ưu tiên."
    ],
    "usage": "Tính từ, làm vị ngữ với 很/最: 很重要, 最重要.",
    "collo": [
      "最重要",
      "很重要",
      "重要的事"
    ],
    "ex_zh": "健康最重要，胖瘦没关系。",
    "ex_py": "Jiànkāng zuì zhòngyào, pàng shòu méi guānxi.",
    "ex_vn": "Sức khỏe là quan trọng nhất, béo gầy không quan trọng.",
    "exList": [
      {
        "zh": "健康最重要，胖瘦没关系。",
        "py": "Jiànkāng zuì zhòngyào, pàng shòu méi guānxi.",
        "vn": "Sức khỏe là quan trọng nhất, béo gầy không quan trọng."
      },
      {
        "zh": "如果你觉得这件事重要，就早点儿告诉我。",
        "py": "Rúguǒ nǐ juéde zhè jiàn shì zhòngyào, jiù zǎo diǎnr gàosu wǒ.",
        "vn": "Nếu bạn thấy việc này quan trọng thì hãy nói sớm cho tôi biết."
      },
      {
        "zh": "这件事对我来说很重要。",
        "py": "Zhè jiàn shì duì wǒ láishuō hěn zhòngyào.",
        "vn": "Việc này đối với tôi rất quan trọng."
      }
    ],
    "hanzi": [
      {
        "c": "重",
        "p": "zhòng",
        "type": "上下结构 · Trên-dưới",
        "st": 9,
        "ord": "千+里 (kết hợp)",
        "rad": "里 (lý – dặm)",
        "mean": "nặng; quan trọng",
        "tip": "Chữ mô phỏng người mang túi hàng NẶNG đi xa (千里) → NẶNG, mở rộng nghĩa QUAN TRỌNG (có sức nặng).",
        "cf": "量 (liàng – \"đo lường\", có phần dưới giống nhau\")",
        "w": "重要 / 很重 / 重视"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Học tốt tiếng Trung đối với tôi rất quan trọng.",
        "answer": "学好汉语对我来说很重要。",
        "answerPy": "Xuéhǎo Hànyǔ duì wǒ láishuō hěn zhòngyào.",
        "note": "对……来说 diễn tả góc nhìn/quan điểm.",
        "pair": "对……来说……"
      },
      {
        "promptLang": "vi",
        "prompt": "Vì sức khỏe rất quan trọng nên anh ấy mỗi ngày đều tập thể dục.",
        "answer": "因为健康很重要，所以他每天都锻炼。",
        "answerPy": "Yīnwèi jiànkāng hěn zhòngyào, suǒyǐ tā měitiān dōu duànliàn.",
        "note": "因为……所以…… nêu nguyên nhân — kết quả (ôn lại 健康/锻炼 đã học).",
        "pair": "因为……所以……"
      }
    ],
    "colloFull": [
      {
        "zh": "最重要",
        "py": "zuì zhòngyào",
        "vn": "quan trọng nhất"
      },
      {
        "zh": "很重要",
        "py": "hěn zhòngyào",
        "vn": "rất quan trọng"
      },
      {
        "zh": "重要的事",
        "py": "zhòngyào de shì",
        "vn": "việc quan trọng"
      },
      {
        "zh": "不太重要",
        "py": "bú tài zhòngyào",
        "vn": "không quan trọng lắm"
      },
      {
        "zh": "对我很重要",
        "py": "duì wǒ hěn zhòngyào",
        "vn": "rất quan trọng với tôi"
      }
    ],
    "patterns": [
      {
        "s": "对 + ai + 很重要",
        "m": "Rất quan trọng đối với ai"
      },
      {
        "s": "重要 (zhòngyào) — 重 ở đây đọc zhòng như 很重 (nặng)"
      }
    ]
  }
];

const wuData = [
  {img:'🛗',label:'电梯',py:'diàntī',letter:'A'},
  {img:'🐼',label:'熊猫',py:'xióngmāo',letter:'B'},
  {img:'🥤',label:'可乐',py:'kělè',letter:'C'},
  {img:'🚻',label:'洗手间',py:'xǐshǒujiān',letter:'D'},
  {img:'😨',label:'害怕',py:'hàipà',letter:'E'},
  {img:'🤝',label:'见面',py:'jiànmiàn',letter:'F'},
];

var dialogData = [
  {scene:'在休息室 · Trong phòng giải lao',
   preQuiz:[
     {q:'小丽最近在做什么？',opts:['打算买房子','打算搬家','打算装修'],ans:0},
     {q:'那个有电梯的房子在几层？',opts:['二十层','十层','五层'],ans:0},
     {q:'小丽为什么害怕二十层？',opts:['太高了，往下看害怕','电梯坏了','太吵了'],ans:0},
   ],
   lines:[
     {sp:0,zh:'听说你最近打算买房子？',py:'Tīngshuō nǐ zuìjìn dǎsuàn mǎi fángzi?',vn:'Nghe nói dạo này bạn định mua nhà à?'},
     {sp:1,zh:'是，昨天去看了看，今天又去看了看，明天还要再去看看。',py:'Shì, zuótiān qù kànle kàn, jīntiān yòu qù kànle kàn, míngtiān hái yào zài qù kànkan.',vn:'Đúng vậy, hôm qua đi xem thử, hôm nay lại đi xem tiếp, ngày mai còn định đi xem nữa.'},
     {sp:0,zh:'都不满意吗？',py:'Dōu bù mǎnyì ma?',vn:'Đều không ưng ý à?'},
     {sp:1,zh:'一个没有电梯，不方便。一个有电梯，但是在二十层。',py:'Yí ge méiyǒu diàntī, bù fāngbiàn. Yí ge yǒu diàntī, dànshì zài èrshí céng.',vn:'Một căn không có thang máy, bất tiện. Một căn có thang máy, nhưng ở tầng 20.'},
     {sp:0,zh:'二十层怎么了？',py:'Èrshí céng zěnme le?',vn:'Tầng 20 thì sao?'},
     {sp:1,zh:'太高了，往下看多害怕啊！',py:'Tài gāo le, wǎng xià kàn duō hàipà a!',vn:'Cao quá, nhìn xuống dưới sợ lắm!'},
   ]},
  {scene:'在学校 · Ở trường',
   preQuiz:[
     {q:'马可什么时候回国？',opts:['下个星期','明天','下个月'],ans:0},
     {q:'小明为什么不能去机场送马可？',opts:['下星期不在北京','太忙了','生病了'],ans:0},
     {q:'小明送给马可什么礼物？',opts:['小熊猫','照片','书'],ans:0},
   ],
   lines:[
     {sp:0,zh:'听说你下个星期就要回国了？',py:'Tīngshuō nǐ xià ge xīngqī jiù yào huí guó le?',vn:'Nghe nói tuần sau bạn về nước rồi à?'},
     {sp:1,zh:'是啊，真不想离开北京。',py:'Shì a, zhēn bù xiǎng líkāi Běijīng.',vn:'Đúng vậy, thực sự không muốn rời Bắc Kinh.'},
     {sp:0,zh:'我下星期不在北京，不能去机场送你了。',py:'Wǒ xià xīngqī bú zài Běijīng, bù néng qù jīchǎng sòng nǐ le.',vn:'Tuần sau mình không ở Bắc Kinh, không thể ra sân bay tiễn bạn được.'},
     {sp:1,zh:'没关系，你忙吧。',py:'Méi guānxi, nǐ máng ba.',vn:'Không sao đâu, bạn cứ bận việc đi.'},
     {sp:0,zh:'这个小熊猫送给你，欢迎你以后再到中国来。',py:'Zhège xiǎo xióngmāo sòng gěi nǐ, huānyíng nǐ yǐhòu zài dào Zhōngguó lái.',vn:'Con gấu trúc nhỏ này tặng bạn, hoan nghênh bạn sau này lại đến Trung Quốc.'},
     {sp:1,zh:'谢谢。希望以后能再见面。',py:'Xièxie. Xīwàng yǐhòu néng zài jiànmiàn.',vn:'Cảm ơn bạn. Hy vọng sau này có thể gặp lại.'},
   ]},
  {scene:'在咖啡厅 · Ở quán cà phê',
   preQuiz:[
     {q:'小刚说他要坐哪儿？',opts:['小丽坐哪儿他就坐哪儿','靠窗的位置','安静的位置'],ans:0},
     {q:'小丽最后决定喝什么？',opts:['可乐','咖啡','茶'],ans:0},
     {q:'小丽最后去了哪儿？',opts:['洗手间','咖啡厅柜台','门口'],ans:0},
   ],
   lines:[
     {sp:1,zh:'小刚，我们坐哪儿？',py:'Xiǎogāng, wǒmen zuò nǎr?',vn:'Tiểu Cương, chúng ta ngồi đâu?'},
     {sp:0,zh:'你坐哪儿我就坐哪儿。',py:'Nǐ zuò nǎr wǒ jiù zuò nǎr.',vn:'Bạn ngồi đâu mình ngồi đó.'},
     {sp:1,zh:'坐这儿吧，这儿安静。你想喝什么饮料？',py:'Zuò zhèr ba, zhèr ānjìng. Nǐ xiǎng hē shénme yǐnliào?',vn:'Ngồi đây đi, ở đây yên tĩnh. Bạn muốn uống gì?'},
     {sp:0,zh:'你喝什么我就喝什么。',py:'Nǐ hē shénme wǒ jiù hē shénme.',vn:'Bạn uống gì mình uống đó.'},
     {sp:1,zh:'喝可乐吧。你等我一会儿，我马上回来。',py:'Hē kělè ba. Nǐ děng wǒ yíhuìr, wǒ mǎshàng huílai.',vn:'Uống coca đi. Bạn đợi mình một lát, mình quay lại ngay.'},
     {sp:0,zh:'小丽，你去哪儿？你去哪儿我就去哪儿。',py:'Xiǎolì, nǐ qù nǎr? Nǐ qù nǎr wǒ jiù qù nǎr.',vn:'Tiểu Lệ, bạn đi đâu vậy? Bạn đi đâu mình đi đó.'},
     {sp:1,zh:'我去洗手间。',py:'Wǒ qù xǐshǒujiān.',vn:'Mình đi vệ sinh.'},
   ]},
  {scene:'在周明家 · Tại nhà Chu Minh',
   preQuiz:[
     {q:'老同学觉得周太太变化大吗？',opts:['几乎没变化','变化很大','变瘦了'],ans:0},
     {q:'周太太说自己怎么了？',opts:['胖了','瘦了','生病了'],ans:0},
     {q:'谁做饭？',opts:['周太太做','周明做','老同学做'],ans:0},
   ],
   lines:[
     {sp:0,zh:'快五年了，你几乎没变化。',py:'Kuài wǔ nián le, nǐ jīhū méi biànhuà.',vn:'Sắp năm năm rồi, bạn hầu như không thay đổi gì.'},
     {sp:1,zh:'谁说的？我胖了，以前的衣服都不能穿了。',py:'Shéi shuō de? Wǒ pàng le, yǐqián de yīfu dōu bù néng chuān le.',vn:'Ai nói vậy? Tôi béo lên rồi, quần áo trước đây đều không mặc vừa nữa.'},
     {sp:0,zh:'健康最重要，胖瘦没关系。',py:'Jiànkāng zuì zhòngyào, pàng shòu méi guānxi.',vn:'Sức khỏe là quan trọng nhất, béo gầy không quan trọng.'},
     {sp:1,zh:'是呀，想吃什么就吃什么。',py:'Shì ya, xiǎng chī shénme jiù chī shénme.',vn:'Đúng vậy, muốn ăn gì thì ăn đó.'},
     {sp:0,zh:'你做饭还是周明做饭？',py:'Nǐ zuò fàn háishi Zhōu Míng zuò fàn?',vn:'Bạn nấu cơm hay Chu Minh nấu cơm?'},
     {sp:1,zh:'我做，我想吃什么就做什么，想吃多少就做多少。',py:'Wǒ zuò, wǒ xiǎng chī shénme jiù zuò shénme, xiǎng chī duōshao jiù zuò duōshao.',vn:'Tôi nấu, tôi muốn ăn gì thì làm đó, muốn ăn bao nhiêu thì làm bấy nhiêu.'},
   ]},
];

// ══════════════════════════════════════════
// PHẦN 1 · GHÉP TỪ (Collocation)
// ══════════════════════════════════════════
var matchData = [
  {left:'买',right:'房子'},
  {left:'坐',right:'电梯'},
  {left:'二十',right:'层'},
  {left:'小',right:'熊猫'},
  {left:'再',right:'见面'},
  {left:'喝',right:'可乐'},
  {left:'去',right:'洗手间'},
  {left:'因为二十层太高了，',right:'所以她往下看很害怕。'},
  {left:'虽然他几乎没变化，',right:'但是他说自己胖了。'},
  {left:'如果你不满意，',right:'我们就再去看看别的。'},
  {left:'只要你喜欢，',right:'想吃什么就吃什么。'},
];

// ══════════════════════════════════════════
// PHẦN 3a · ĐIỀN TỪ
// ══════════════════════════════════════════
var fillData = [
  {pre:'今天',blank:'又',post:'去看了看。',hint:'(lại)',ans:'又'},
  {pre:'你对这份工作',blank:'满意',post:'吗？',hint:'(hài lòng)',ans:'满意'},
  {pre:'这个楼没有',blank:'电梯',post:'，老人上下楼很难。',hint:'(thang máy)',ans:'电梯'},
  {pre:'但是在二十',blank:'层',post:'。',hint:'(tầng)',ans:'层'},
  {pre:'往下看多',blank:'害怕',post:'啊！',hint:'(sợ)',ans:'害怕'},
  {pre:'这个小',blank:'熊猫',post:'送给你。',hint:'(gấu trúc)',ans:'熊猫'},
  {pre:'我们下个月还会在上海',blank:'见面',post:'。',hint:'(gặp nhau)',ans:'见面'},
  {pre:'我们去图书馆吧，那儿很',blank:'安静',post:'。',hint:'(yên tĩnh)',ans:'安静'},
  {pre:'外面这么热，我们喝杯冰',blank:'可乐',post:'吧。',hint:'(coca-cola)',ans:'可乐'},
  {pre:'你先在这儿坐',blank:'一会儿',post:'，我去买杯咖啡就回来。',hint:'(một lát)',ans:'一会儿'},
  {pre:'我',blank:'马上',post:'回来。',hint:'(ngay lập tức)',ans:'马上'},
  {pre:'他说他要先去一下',blank:'洗手间',post:'，马上就回来。',hint:'(nhà vệ sinh)',ans:'洗手间'},
  {pre:'都十年了，这条街道',blank:'几乎',post:'没变化。',hint:'(hầu như)',ans:'几乎'},
  {pre:'对我来说，家人最',blank:'重要',post:'，工作没有那么重要。',hint:'(quan trọng)',ans:'重要'},
];

// ══════════════════════════════════════════
// PHẦN 3b · SẮP XẾP
// ══════════════════════════════════════════
var sortData = [
  {words:['我','昨天','去','超市','买','了','面包','，','今天','又','去','买','了','一次','。'],ans:'我昨天去超市买了面包，今天又去买了一次。',audio:'我昨天去超市买了面包，今天又去买了一次。'},
  {words:['这条','路','太','黑','了','，','一个','人','走','多','害怕','啊','！'],ans:'这条路太黑了，一个人走多害怕啊！',audio:'这条路太黑了，一个人走多害怕啊！'},
  {words:['这张','熊猫','照片','送给','你','，','希望','你','喜欢','北京','。'],ans:'这张熊猫照片送给你，希望你喜欢北京。',audio:'这张熊猫照片送给你，希望你喜欢北京。'},
  {words:['你','坐','哪儿','我','就','坐','哪儿','。'],ans:'你坐哪儿我就坐哪儿。',audio:'你坐哪儿我就坐哪儿。'},
  {words:['因为','楼下','太','吵','了','，','所以','我们','换','了','一个','安静','的','房间','。'],ans:'因为楼下太吵了，所以我们换了一个安静的房间。',audio:'因为楼下太吵了，所以我们换了一个安静的房间。'},
  {words:['虽然','他','几乎','没','变化','，','但是','他','说','自己','胖','了','。'],ans:'虽然他几乎没变化，但是他说自己胖了。',audio:'虽然他几乎没变化，但是他说自己胖了。'},
  {words:['如果','你','不','满意','，','我们','就','再','去','看看','别的','。'],ans:'如果你不满意，我们就再去看看别的。',audio:'如果你不满意，我们就再去看看别的。'},
  {words:['我','想','吃','什么','就','吃','什么','。'],ans:'我想吃什么就吃什么。',audio:'我想吃什么就吃什么。'},
];

// ══════════════════════════════════════════
// PHẦN 3c · SỬA LỖI SAI
// ══════════════════════════════════════════
var errorFixData = [
  {wrong:'我上午给他发了电子邮件，下午再发了一次。',
   opts:['我上午给他发了电子邮件，下午又发了一次。','我上午给他发了电子邮件，下午再发了一次。','我上午给他再发了电子邮件，下午又发了一次。','我下午给他发了电子邮件，上午又发了一次。'],ans:0,
   exp:'又 dùng cho hành động ĐÃ lặp lại (rồi), 再 dùng cho hành động CHƯA/SẼ lặp lại — "buổi chiều" ở đây là việc đã xảy ra rồi nên phải dùng 又, không dùng 再.'},
  {wrong:'你只吃了一点儿面条，又吃一点儿吧。',
   opts:['你只吃了一点儿面条，再吃一点儿吧。','你只吃了一点儿面条，又吃一点儿吧。','你只吃了一点儿面条，吃再一点儿吧。','你只吃了一点儿面条，吃一点儿又吧。'],ans:0,
   exp:'再 dùng cho hành động CHƯA xảy ra (lời đề nghị ăn thêm), không dùng 又 (又 chỉ dùng cho việc đã xảy ra).'},
  {wrong:'哪儿你去我就去哪儿。',
   opts:['你去哪儿我就去哪儿。','哪儿你去我就去哪儿。','你哪儿去就我去哪儿。','你去我就哪儿去哪儿。'],ans:0,
   exp:'Khi hai mệnh đề có chủ ngữ KHÁC nhau (你/我), mệnh đề đầu giữ nguyên trật tự S+V+O nghi vấn, mệnh đề sau đặt chủ ngữ trước 就.'},
  {wrong:'想吃什么吃就什么。',
   opts:['想吃什么就吃什么。','想吃什么吃就什么。','就想吃什么吃什么。','想吃什么什么就吃。'],ans:0,
   exp:'就 phải đứng ngay trước động từ thứ hai (吃), không chen vào giữa động từ và tân ngữ nghi vấn (什么).'},
  {wrong:'谁喜欢他就喜欢他谁。',
   opts:['谁喜欢他，他就喜欢谁。','谁喜欢他就喜欢他谁。','他谁喜欢就喜欢谁。','谁就喜欢他喜欢谁。'],ans:0,
   exp:'Khi hai mệnh đề có chủ ngữ KHÁC nhau (谁/他), chủ ngữ thứ hai (他) phải đặt TRƯỚC 就.'},
];

// ══════════════════════════════════════════
// LUYỆN NÓI
// ══════════════════════════════════════════
var speakingData = {
  mode: 'ai-speak',
  intro: 'Mỗi câu hỏi là một tình huống thật trong đời sống, dùng đúng từ vựng và mẫu câu của Bài 8. Bấm 🎙️ rồi trả lời bằng tiếng Trung — AI sẽ nghe, ghi lại câu bạn nói và chấm điểm theo Nội dung · Mẫu câu · Từ vựng · Độ trôi chảy. Nên tự trả lời trước rồi mới mở “Câu mẫu” để đối chiếu.',
  tasks: [
    {
      situation: 'Huấn luyện viên hỏi bạn hôm qua tập gì và hôm nay có tập nữa không.',
      q_zh: '你昨天做了什么运动？今天还会再做一次吗？',
      q_py: 'Nǐ zuótiān zuò le shénme yùndòng? Jīntiān hái huì zài zuò yí cì ma?',
      q_vn: 'Hôm qua bạn tập môn gì? Hôm nay có tập lại không?',
      grammar: { label: '又 (đã lại) / 再 (sẽ lại)', any: ['又', '再'] },
      need: [
        { label: 'Kể việc đã làm hôm qua bằng 又', any: ['又'] },
        { label: 'Nói dự định hôm nay bằng 再', any: ['再'] }
      ],
      bonus: { label: 'Nói lý do liên quan đến sức khỏe', any: ['健康', '身体', '重要'] },
      vocab: ['又', '健康', '重要'],
      minLen: 18,
      sample: '我昨天又去跑步了，今天下午还打算再去一次，因为我觉得运动对健康非常重要。',
      sample_py: 'Wǒ zuótiān yòu qù pǎobù le, jīntiān xiàwǔ hái dǎsuàn zài qù yí cì, yīnwèi wǒ juéde yùndòng duì jiànkāng fēicháng zhòngyào.',
      sample_vn: 'Hôm qua tôi lại đi chạy bộ, chiều nay định đi thêm lần nữa, vì tôi thấy vận động rất quan trọng với sức khỏe.',
      tip: '又 dùng cho việc đã lặp lại, 再 dùng cho việc sắp lặp lại: 他又来了。明天再来吧。'
    },
    {
      situation: 'Bạn bè rủ đi ăn và hỏi bạn muốn ăn gì.',
      q_zh: '跟朋友吃饭的时候，他问你想吃什么，你会怎么回答？',
      q_py: 'Gēn péngyou chīfàn de shíhou, tā wèn nǐ xiǎng chī shénme, nǐ huì zěnme huídá?',
      q_vn: 'Khi đi ăn với bạn, bạn ấy hỏi bạn muốn ăn gì, bạn sẽ trả lời thế nào?',
      grammar: { label: '疑问代词 + 就 + 疑问代词 (什么……就什么……)', any: ['就'] },
      need: [
        { label: 'Dùng cặp nghi vấn 什么…就什么 / 哪儿…就哪儿', any: ['什么', '哪儿', '谁'] },
        { label: 'Nói thêm ý kiến riêng', any: ['我觉得', '我想', '我一般', '都可以', '随便'] }
      ],
      bonus: { label: 'Gợi ý một món cụ thể', any: ['面条', '米饭', '菜', '鱼', '羊肉', '可乐'] },
      vocab: ['满意', '马上', '可乐'],
      minLen: 18,
      sample: '我一般说：你想吃什么我们就吃什么，你想去哪儿我们就去哪儿。要是你也没想好，我们马上去楼下那家饭馆儿，我对那儿的面条儿很满意。',
      sample_py: 'Wǒ yìbān shuō: nǐ xiǎng chī shénme wǒmen jiù chī shénme, nǐ xiǎng qù nǎr wǒmen jiù qù nǎr. Yàoshi nǐ yě méi xiǎng hǎo, wǒmen mǎshàng qù lóu xià nà jiā fàn guǎn ér, wǒ duì nàr de miàntiáor hěn mǎnyì.',
      sample_vn: 'Tôi thường nói: Bạn muốn ăn gì thì mình ăn cái đó, muốn đi đâu thì mình đi đó. Nếu bạn cũng chưa nghĩ ra, mình xuống quán dưới nhà luôn, tôi rất ưng món mì ở đó.',
      tip: 'Cặp đại từ nghi vấn hô ứng: 你什么时候来，我什么时候走。'
    },
    {
      situation: 'Khách đến công ty hỏi đường lên phòng bạn.',
      q_zh: '你家或者公司在几层？你坐电梯还是走楼梯？',
      q_py: 'Nǐ jiā huòzhě gōngsī zài jǐ céng? Nǐ zuò diàntī háishi zǒu lóu tī?',
      q_vn: 'Nhà hoặc công ty bạn ở tầng mấy? Bạn đi thang máy hay cầu thang bộ?',
      grammar: { label: 'Số + 层 / 坐电梯 · 走楼梯', any: ['层', '电梯', '楼梯'] },
      need: [
        { label: 'Nói tầng mấy', any: ['层', '楼'] },
        { label: 'Nói đi thang máy hay cầu thang', any: ['电梯', '楼梯', '走'] }
      ],
      bonus: { label: 'Nói lý do chọn cách đó', any: ['锻炼', '快', '人多', '方便', '健康'] },
      vocab: ['电梯', '层', '健康'],
      minLen: 18,
      sample: '我们公司在十二层，我一般坐电梯上去。电梯人太多的时候，我就走楼梯，这样也能锻炼身体。',
      sample_py: 'Wǒmen gōngsī zài shí èr céng, wǒ yìbān zuò diàntī shàng qù. Diàntī rén tài duō de shíhou, wǒ jiù zǒu lóu tī, zhè yàng yě néng duànliàn shēntǐ.',
      sample_vn: 'Công ty tôi ở tầng 12, tôi thường đi thang máy. Khi thang máy đông người, tôi đi cầu thang bộ, như vậy cũng rèn luyện được sức khỏe.',
      tip: 'Tầng nhà dùng 层: 三层 = tầng 3; 楼 thường chỉ tòa nhà: 那座楼。'
    },
    {
      situation: 'Bạn và bạn bè đang nói chuyện về nơi chốn khiến mình thấy dễ chịu.',
      q_zh: '你害怕什么？什么样的地方让你觉得安静、舒服？',
      q_py: 'Nǐ hàipà shénme? Shénme yàng de dìfang ràng nǐ juéde ānjìng, shūfu?',
      q_vn: 'Bạn sợ cái gì? Nơi thế nào khiến bạn thấy yên tĩnh, dễ chịu?',
      grammar: { label: '害怕 + danh từ/động từ; 几乎 + động từ', any: ['害怕', '几乎'] },
      need: [
        { label: 'Nói điều mình sợ', any: ['害怕', '怕'] },
        { label: 'Nói nơi yên tĩnh bạn thích', any: ['安静', '图书馆', '公园', '家', '河边', '山'] }
      ],
      bonus: { label: 'Dùng 几乎 nói mức độ', any: ['几乎'] },
      vocab: ['害怕', '安静', '几乎'],
      minLen: 20,
      sample: '我有点儿害怕大狗。我喜欢安静的地方，比如图书馆和公园，在那儿我几乎能看一下午的书。',
      sample_py: 'Wǒ yǒudiǎnr hàipà dà gǒu. Wǒ xǐhuan ānjìng de dìfang, bǐrú túshūguǎn hé gōngyuán, zài nàr wǒ jīhū néng kàn yíxià wǔ de shū.',
      sample_vn: 'Tôi hơi sợ chó to. Tôi thích chỗ yên tĩnh, ví dụ thư viện và công viên, ở đó tôi gần như ngồi đọc sách được cả buổi chiều.',
      tip: '几乎 = gần như: 我几乎每天都跑步。'
    },
    {
      situation: 'Cuối năm, cả lớp kể về thay đổi của mình trong một năm qua.',
      q_zh: '这一年你有什么变化？',
      q_py: 'Zhè yì nián nǐ yǒu shénme biànhuà?',
      q_vn: 'Một năm qua bạn có thay đổi gì?',
      grammar: { label: '变化 + 大/不小; 越来越 + tính từ', any: ['变化', '越来越'] },
      need: [
        { label: 'Nói thay đổi lớn hay nhỏ', any: ['变化', '不小', '很大', '一些'] },
        { label: 'Kể một thay đổi cụ thể', any: ['健康', '汉语', '工作', '锻炼', '认识', '朋友', '习惯'] }
      ],
      bonus: { label: 'Dùng 几乎 hoặc 又 để nói thói quen mới', any: ['几乎', '又', '每天'] },
      vocab: ['变化', '健康', '几乎'],
      minLen: 20,
      sample: '这一年我的变化不小：身体比以前健康了，也不那么害怕说汉语了，现在我几乎每天都跟同学用汉语聊天儿。',
      sample_py: 'Zhè yì nián wǒ de biànhuà bù xiǎo: shēntǐ bǐ yǐqián jiànkāng le, yě bú nàme hàipà shuō Hànyǔ le, xiànzài wǒ jīhū měitiān dōu gēn tóngxué yòng Hànyǔ liáo tiān ér.',
      sample_vn: 'Một năm qua tôi thay đổi không ít: cơ thể khỏe hơn trước, cũng không còn sợ nói tiếng Hán nữa, giờ gần như ngày nào tôi cũng trò chuyện với bạn bằng tiếng Hán.',
      tip: '变化 vừa là danh từ vừa là động từ: 变化很大、天气变化了。'
    }
  ]
};

// ══════════════════════════════════════════
// LUYỆN DỊCH (Việt → Trung)
// ══════════════════════════════════════════
var translateData = [
  {vi:'Hôm qua tôi đã giặt quần áo, hôm nay lại giặt thêm một lần nữa.', zh:'我昨天洗了衣服，今天又洗了一次。', py:'Wǒ zuótiān xǐle yīfu, jīntiān yòu xǐle yí cì.'},
  {vi:'Anh ấy rất hài lòng với cuộc sống hiện tại.', zh:'他对现在的生活很满意。', py:'Tā duì xiànzài de shēnghuó hěn mǎnyì.'},
  {vi:'Cửa hàng này không có thang máy, mua đồ rất mệt.', zh:'这家商店没有电梯，买东西很累。', py:'Zhè jiā shāngdiàn méiyǒu diàntī, mǎi dōngxi hěn lèi.'},
  {vi:'Cuốn sách này tặng bạn, hoan nghênh bạn thường xuyên đến nhà tôi chơi.', zh:'这本书送给你，欢迎你常来我家玩。', py:'Zhè běn shū sòng gěi nǐ, huānyíng nǐ cháng lái wǒ jiā wán.'},
  {vi:'Bạn muốn ngồi đâu thì tôi ngồi đó.', zh:'你想坐哪儿我就坐哪儿。', py:'Nǐ xiǎng zuò nǎr wǒ jiù zuò nǎr.'},
  {vi:'Đối với người già mà nói, sức khỏe quan trọng hơn tất cả.', zh:'对老人来说，身体健康比什么都重要。', py:'Duì lǎorén láishuō, shēntǐ jiànkāng bǐ shénme dōu zhòngyào.'},
  {vi:'Cô ấy hầu như không uống coca, chỉ uống nước.', zh:'她几乎不喝可乐，只喝水。', py:'Tā jīhū bù hē kělè, zhǐ hē shuǐ.'},
  {vi:'Nếu bạn không hài lòng với màu này thì chúng ta đổi cái khác đi.', zh:'如果你对这个颜色不满意，我们就换一个吧。', py:'Rúguǒ nǐ duì zhège yánsè bù mǎnyì, wǒmen jiù huàn yí ge ba.'},
];

// ══════════════════════════════════════════
// LUYỆN DỊCH (Trung → Việt) — nội dung KHÁC với chiều Việt→Trung ở trên
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:'Vì trong thang máy quá đông người nên tôi quyết định đi cầu thang lên.', zh:'因为电梯里人太多，所以我决定走楼梯上去。', py:'Yīnwèi diàntī lǐ rén tài duō, suǒyǐ wǒ juédìng zǒu lóutī shàngqu.'},
  {vi:'Chỉ cần bạn thích thì muốn ăn gì cứ ăn đó.', zh:'只要你喜欢，想吃什么就吃什么。', py:'Zhǐyào nǐ xǐhuan, xiǎng chī shénme jiù chī shénme.'},
  {vi:'Tuy thành phố này hầu như không thay đổi nhưng người đông hơn nhiều.', zh:'虽然这个城市几乎没变化，但是人多了很多。', py:'Suīrán zhège chéngshì jīhū méi biànhuà, dànshì rén duōle hěn duō.'},
  {vi:'Ai thích cô ấy thì cô ấy thích lại người đó.', zh:'谁喜欢她，她就喜欢谁。', py:'Shéi xǐhuan tā, tā jiù xǐhuan shéi.'},
  {vi:'Tuy mọi người đều bận nhưng mỗi năm đều gặp nhau một lần.', zh:'虽然大家很忙，但是每年都会见一次面。', py:'Suīrán dàjiā hěn máng, dànshì měinián dōu huì jiàn yí cì miàn.'},
  {vi:'Bạn đợi một lát ở dưới lầu, tôi xuống là tới ngay.', zh:'你在楼下等一会儿，我下楼就到。', py:'Nǐ zài lóuxià děng yíhuìr, wǒ xiàlóu jiù dào.'},
  {vi:'Chỉ cần bạn muốn uống coca, tôi sẽ xuống dưới mua ngay.', zh:'只要你想喝可乐，我就去楼下买。', py:'Zhǐyào nǐ xiǎng hē kělè, wǒ jiù qù lóuxià mǎi.'},
  {vi:'Quán ăn này tuy cũ nhưng hương vị vẫn luôn rất ngon.', zh:'这家饭馆虽然老了，但是味道一直很好。', py:'Zhè jiā fànguǎn suīrán lǎo le, dànshì wèidao yìzhí hěn hǎo.'},
];

// ══════════════════════════════════════════
// LUYỆN NGHE — đề nghe THẬT từ HSK标准教程3 练习册 (sách bài tập Bài 8)
// Audio gốc duy nhất chứa đủ 20 câu (Phần 1+2+3+4 của đề gốc):
//  - Phần 1 (câu 1-5, gốc: nghe chọn tranh) + Phần 2 (câu 6-10, gốc: nghe
//    phán đoán đúng/sai) → gộp thành 10 câu ĐIỀN CHÍNH TẢ.
//  - Phần 3 (câu 11-15) + Phần 4 (câu 16-20) → 10 câu TRẮC NGHIỆM, kèm các
//    dòng nghe-điền-cụm-từ-ngắn trước khi chọn đáp án, giữ đúng như đề gốc.
// ══════════════════════════════════════════
var listenData = {
  type: 'workbook',
  audio: "/audio/hsk3-bai-8/listen-full.mp3",
  dictation: [
    {num:1, lines:[
      {speaker:"女", pre:"", blank:"十五层太高了，我都害怕向下看了", post:"。",
       py:"Shíwǔ céng tài gāo le, wǒ dōu hàipà xiàng xià kàn le.",
       vn:"Tầng 15 cao quá, tôi sợ nhìn xuống dưới luôn."},
      {speaker:"男", pre:"", blank:"我明白了。那我们看看别的房子", post:"。",
       py:"Wǒ míngbai le. Nà wǒmen kànkan biéde fángzi.",
       vn:"Tôi hiểu rồi. Vậy chúng ta xem nhà khác đi."}]},
    {num:2, lines:[
      {speaker:"女", pre:"", blank:"我是第一次来看大熊猫", post:"。",
       py:"Wǒ shì dì-yī cì lái kàn dà xióngmāo.",
       vn:"Tôi lần đầu tiên đến xem gấu trúc lớn."},
      {speaker:"男", pre:"我也是，", blank:"你看这些大熊猫多可爱啊", post:"！",
       py:"Wǒ yě shì, nǐ kàn zhèxiē dà xióngmāo duō kě'ài a!",
       vn:"Tôi cũng vậy, bạn xem những con gấu trúc này đáng yêu biết bao!"}]},
    {num:3, lines:[
      {speaker:"男", pre:"", blank:"都九点一刻了，你怎么还不起床", post:"？",
       py:"Dōu jiǔ diǎn yí kè le, nǐ zěnme hái bù qǐchuáng?",
       vn:"Đã 9 giờ 15 rồi, sao bạn vẫn chưa dậy?"},
      {speaker:"女", pre:"", blank:"星期天又不上班，你也不让我多睡一会儿", post:"。",
       py:"Xīngqītiān yòu bú shàngbān, nǐ yě bú ràng wǒ duō shuì yíhuìr.",
       vn:"Chủ nhật lại không phải đi làm, mà bạn cũng không cho tôi ngủ thêm chút nữa."}]},
    {num:4, lines:[
      {speaker:"女", pre:"", blank:"我们是不是走错了，怎么还没到", post:"？",
       py:"Wǒmen shì bu shì zǒucuò le, zěnme hái méi dào?",
       vn:"Chúng ta đi nhầm đường rồi à, sao vẫn chưa đến?"},
      {speaker:"男", pre:"别着急，", blank:"就在前面，马上就到了", post:"。",
       py:"Bié zháojí, jiù zài qiánmiàn, mǎshàng jiù dào le.",
       vn:"Đừng lo, ở ngay phía trước thôi, sắp đến rồi."}]},
    {num:5, lines:[
      {speaker:"女", pre:"眼镜怎么样？", blank:"你觉得满意吗", post:"？",
       py:"Yǎnjìng zěnmeyàng? Nǐ juéde mǎnyì ma?",
       vn:"Kính thế nào? Bạn thấy ưng ý không?"},
      {speaker:"男", pre:"", blank:"还不错，你看我的变化很大", post:"。",
       py:"Hái búcuò, nǐ kàn wǒ de biànhuà hěn dà.",
       vn:"Cũng được đấy, bạn xem tôi thay đổi nhiều lắm."}]},
    {num:6, stmt:"周经理换办公室了。", judge:true, lines:[
      {pre:"以前，周经理的办公室在一层，", blank:"最近他搬到了六层，开始坐电梯了", post:"。",
       py:"Yǐqián, Zhōu jīnglǐ de bàngōngshì zài yì céng, zuìjìn tā bāndàole liù céng, kāishǐ zuò diàntī le.",
       vn:"Trước đây, văn phòng giám đốc Chu ở tầng 1, dạo này ông ấy chuyển lên tầng 6, bắt đầu đi thang máy."}]},
    {num:7, stmt:"他们以前总是见面。", judge:true, lines:[
      {pre:"我明天就回国了，", blank:"以后不能总跟你见面了，有事请给我电话吧", post:"。",
       py:"Wǒ míngtiān jiù huí guó le, yǐhòu bù néng zǒng gēn nǐ jiànmiàn le, yǒu shì qǐng gěi wǒ diànhuà ba.",
       vn:"Ngày mai tôi về nước rồi, sau này không thể thường xuyên gặp bạn nữa, có việc gì thì gọi điện cho tôi nhé."}]},
    {num:8, stmt:"他喜欢安静的地方。", judge:false, lines:[
      {pre:"我喜欢自学。没事的时候，", blank:"找一个安静的地方，读一本好书，是我最大的快乐", post:"。",
       py:"Wǒ xǐhuan zìxué. Méi shì de shíhou, zhǎo yí ge ānjìng de dìfang, dú yì běn hǎo shū, shì wǒ zuìdà de kuàilè.",
       vn:"Tôi thích tự học. Lúc rảnh rỗi, tìm một nơi yên tĩnh, đọc một cuốn sách hay, là niềm vui lớn nhất của tôi."}]},
    {num:9, stmt:"那位小姐要去十层。", judge:false, lines:[
      {pre:"不好意思，小姐，这个电梯只到十层，", blank:"您去十二层要坐右边那个电梯", post:"。",
       py:"Bù hǎoyìsi, xiǎojiě, zhège diàntī zhǐ dào shí céng, nín qù shí'èr céng yào zuò yòubian nàge diàntī.",
       vn:"Xin lỗi cô, thang máy này chỉ lên đến tầng 10 thôi, cô đi tầng 12 phải đi thang máy bên phải."}]},
    {num:10, stmt:"他现在在洗手间。", judge:false, lines:[
      {pre:"六零三房间的客人刚才打电话来说洗手间有问题，", blank:"你去看一下吧", post:"。",
       py:"Liù líng sān fángjiān de kèrén gāngcái dǎ diànhuà lái shuō xǐshǒujiān yǒu wèntí, nǐ qù kàn yíxià ba.",
       vn:"Khách phòng 603 lúc nãy gọi điện nói nhà vệ sinh có vấn đề, bạn qua xem thử đi."}]}
  ],
  mc: [
    {num:11, options:["不让女的喝可乐","不让女的睡觉","不想喝可乐"], ans:0, q:"男的是什么意思？",
     lines:[
      {speaker:"女", pre:"", blank:"我想再喝一杯可乐", post:"。",
       py:"Wǒ xiǎng zài hē yì bēi kělè.",
       vn:"Tôi muốn uống thêm một ly coca nữa."},
      {speaker:"男", pre:"再喝一杯，", blank:"你晚上就别想睡觉了", post:"。",
       py:"Zài hē yì bēi, nǐ wǎnshang jiù bié xiǎng shuìjiào le.",
       vn:"Uống thêm một ly nữa, tối nay đừng mong ngủ được đấy."}
     ],
     explain:"女：我想再喝一杯可乐。男：再喝一杯，你晚上就别想睡觉了。问：男的是什么意思？ → 不让女的喝可乐。"},
    {num:12, options:["想休息","感冒了","要照顾妈妈"], ans:1, q:"关于女的，可以知道什么？",
     lines:[
      {speaker:"男", pre:"别害怕，", blank:"只是感冒，休息两天就好了", post:"。",
       py:"Bié hàipà, zhǐshì gǎnmào, xiūxi liǎng tiān jiù hǎo le.",
       vn:"Đừng sợ, chỉ là cảm thôi, nghỉ hai ngày là khỏi."},
      {speaker:"女", pre:"", blank:"那我让妈妈来照顾我几天", post:"。",
       py:"Nà wǒ ràng māma lái zhàogù wǒ jǐ tiān.",
       vn:"Vậy tôi để mẹ đến chăm sóc tôi mấy hôm."}
     ],
     explain:"男：别害怕，只是感冒，休息两天就好了。女：那我让妈妈来照顾我几天。问：关于女的，可以知道什么？ → 感冒了。"},
    {num:13, options:["她要去洗手间","这儿有人","男的可以坐这儿"], ans:1, q:"女的是什么意思？",
     lines:[
      {speaker:"男", pre:"小姐，", blank:"请问这儿有人吗？我可以坐这儿吗", post:"？",
       py:"Xiǎojiě, qǐngwèn zhèr yǒu rén ma? Wǒ kěyǐ zuò zhèr ma?",
       vn:"Cô ơi, xin hỏi chỗ này có người không? Tôi ngồi đây được không?"},
      {speaker:"女", pre:"不好意思，", blank:"我朋友去洗手间了，一会儿就回来", post:"。",
       py:"Bù hǎoyìsi, wǒ péngyou qù xǐshǒujiān le, yíhuìr jiù huílai.",
       vn:"Xin lỗi, bạn tôi đi vệ sinh rồi, chốc lát sẽ quay lại."}
     ],
     explain:"男：小姐，请问这儿有人吗？我可以坐这儿吗？女：不好意思，我朋友去洗手间了，一会儿就回来。问：女的是什么意思？ → 这儿有人。"},
    {num:14, options:["儿子身体不健康","儿子学习不好","儿子没去考试"], ans:1, q:"女的为什么着急？",
     lines:[
      {speaker:"女", pre:"", blank:"我儿子又没考好，真着急", post:"！",
       py:"Wǒ érzi yòu méi kǎohǎo, zhēn zháojí!",
       vn:"Con trai tôi lại thi không tốt, thật lo quá!"},
      {speaker:"男", pre:"别着急，", blank:"孩子身体健康是最重要的", post:"。",
       py:"Bié zháojí, háizi shēntǐ jiànkāng shì zuì zhòngyào de.",
       vn:"Đừng lo, con cái khỏe mạnh mới là quan trọng nhất."}
     ],
     explain:"女：我儿子又没考好，真着急！男：别着急，孩子身体健康是最重要的。问：女的为什么着急？ → 儿子学习不好。"},
    {num:15, options:["买裙子","面试","买衬衫"], ans:1, q:"女的明天做什么？",
     lines:[
      {speaker:"男", pre:"明天要去面试，", blank:"这两条裙子你穿哪条", post:"？",
       py:"Míngtiān yào qù miànshì, zhè liǎng tiáo qúnzi nǐ chuān nǎ tiáo?",
       vn:"Ngày mai phải đi phỏng vấn, hai cái váy này bạn mặc cái nào?"},
      {speaker:"女", pre:"哪条好看我就穿哪条，", blank:"你再帮我拿一下那件白衬衫", post:"。",
       py:"Nǎ tiáo hǎokàn wǒ jiù chuān nǎ tiáo, nǐ zài bāng wǒ ná yíxià nà jiàn bái chènshān.",
       vn:"Cái nào đẹp thì tôi mặc cái đó, bạn lấy giúp tôi cái áo sơ mi trắng kia nữa."}
     ],
     explain:"男：明天要去面试，这两条裙子你穿哪条？女：哪条好看我就穿哪条，你再帮我拿一下那件白衬衫。问：女的明天做什么？ → 面试。"},
    {num:16, options:["咖啡馆","电梯那儿","超市"], ans:0, q:"他们要去哪儿？",
     lines:[
      {speaker:"男", pre:"小丽，是你啊，", blank:"你也来这儿买东西啊", post:"？",
       py:"Xiǎolì, shì nǐ a, nǐ yě lái zhèr mǎi dōngxi a?",
       vn:"Tiểu Lệ, là bạn à, bạn cũng đến đây mua đồ à?"},
      {speaker:"女", pre:"是啊，", blank:"这家超市的东西很便宜", post:"。",
       py:"Shì a, zhè jiā chāoshì de dōngxi hěn piányi.",
       vn:"Đúng vậy, đồ ở siêu thị này rẻ lắm."},
      {speaker:"男", pre:"好久不见，", blank:"我们找个地方坐坐", post:"？",
       py:"Hǎojiǔ bú jiàn, wǒmen zhǎo ge dìfang zuòzuo?",
       vn:"Lâu rồi không gặp, chúng ta tìm chỗ ngồi chút nhé?"},
      {speaker:"女", pre:"好啊，", blank:"下了电梯有一个咖啡馆，我们去那儿吧", post:"。",
       py:"Hǎo a, xiàle diàntī yǒu yí ge kāfēiguǎn, wǒmen qù nàr ba.",
       vn:"Được đấy, xuống thang máy có một quán cà phê, chúng ta đến đó đi."}
     ],
     explain:"男：小丽，是你啊，你也来这儿买东西啊？女：是啊，这家超市的东西很便宜。男：好久不见，我们找个地方坐坐？女：好啊，下了电梯有一个咖啡馆，我们去那儿吧。问：他们要去哪儿？ → 咖啡馆。"},
    {num:17, options:["药","面条","鸡蛋"], ans:1, q:"他们今天吃什么？",
     lines:[
      {speaker:"男", pre:"", blank:"你吃药了吗", post:"？",
       py:"Nǐ chī yào le ma?",
       vn:"Bạn uống thuốc chưa?"},
      {speaker:"女", pre:"还没有，", blank:"我吃完饭再吃", post:"。",
       py:"Hái méiyǒu, wǒ chīwán fàn zài chī.",
       vn:"Chưa đâu, tôi ăn cơm xong rồi uống."},
      {speaker:"男", pre:"", blank:"今天我们吃面条儿", post:"？",
       py:"Jīntiān wǒmen chī miàntiáor?",
       vn:"Hôm nay chúng ta ăn mì à?"},
      {speaker:"女", pre:"是，", blank:"吃鸡蛋面，马上就好", post:"。",
       py:"Shì, chī jīdàn miàn, mǎshàng jiù hǎo.",
       vn:"Đúng vậy, ăn mì trứng, sắp xong rồi."}
     ],
     explain:"男：你吃药了吗？女：还没有，我吃完饭再吃。男：今天我们吃面条儿？女：是，吃鸡蛋面，马上就好。问：他们今天吃什么？ → 面条。"},
    {num:18, options:["去洗手间","找雨伞","去吃饭"], ans:1, q:"男的为什么去饭店？",
     lines:[
      {speaker:"男", pre:"您好，", blank:"我的雨伞可能忘在你们饭店了", post:"。",
       py:"Nín hǎo, wǒ de yǔsǎn kěnéng wàng zài nǐmen fàndiàn le.",
       vn:"Chào chị, ô của tôi có lẽ để quên ở nhà hàng của các bạn rồi."},
      {speaker:"女", pre:"", blank:"您的雨伞是什么颜色的", post:"？",
       py:"Nín de yǔsǎn shì shénme yánsè de?",
       vn:"Ô của anh màu gì vậy?"},
      {speaker:"男", pre:"", blank:"黑色的", post:"。",
       py:"Hēisè de.",
       vn:"Màu đen."},
      {speaker:"女", pre:"是这个吗？", blank:"我们在洗手间里看到的", post:"。",
       py:"Shì zhège ma? Wǒmen zài xǐshǒujiān lǐ kàndào de.",
       vn:"Có phải cái này không? Chúng tôi thấy trong nhà vệ sinh đấy."}
     ],
     explain:"男：您好，我的雨伞可能忘在你们饭店了。女：您的雨伞是什么颜色的？男：黑色的。女：是这个吗？我们在洗手间里看到的。问：男的为什么去饭店？ → 找雨伞。"},
    {num:19, options:["明天中午不忙","不想跟男的吃饭","不知道哪天吃饭"], ans:0, q:"关于女的，可以知道什么？",
     lines:[
      {speaker:"男", pre:"", blank:"我们一起吃个饭吧", post:"？",
       py:"Wǒmen yìqǐ chī ge fàn ba?",
       vn:"Chúng ta cùng ăn cơm nhé?"},
      {speaker:"女", pre:"", blank:"好啊，哪天", post:"？",
       py:"Hǎo a, nǎ tiān?",
       vn:"Được đấy, hôm nào?"},
      {speaker:"男", pre:"", blank:"你哪天不忙我们就哪天吃", post:"。",
       py:"Nǐ nǎ tiān bù máng wǒmen jiù nǎ tiān chī.",
       vn:"Bạn ngày nào rảnh thì chúng ta ăn ngày đó."},
      {speaker:"女", pre:"那明天中午，", blank:"老地方见吧", post:"。",
       py:"Nà míngtiān zhōngwǔ, lǎo dìfang jiàn ba.",
       vn:"Vậy trưa mai, gặp ở chỗ cũ nhé."}
     ],
     explain:"男：我们一起吃个饭吧？女：好啊，哪天？男：你哪天不忙我们就哪天吃。女：那明天中午，老地方见吧。问：关于女的，可以知道什么？ → 明天中午不忙。"},
    {num:20, options:["考得很好","不会写汉字","一个题都不会"], ans:1, q:"关于女的，可以知道什么？",
     lines:[
      {speaker:"女", pre:"", blank:"你这次汉语考得怎么样", post:"？",
       py:"Nǐ zhè cì Hànyǔ kǎo de zěnmeyàng?",
       vn:"Lần này bạn thi tiếng Trung thế nào?"},
      {speaker:"男", pre:"", blank:"九十分，你呢", post:"？",
       py:"Jiǔshí fēn, nǐ ne?",
       vn:"90 điểm, còn bạn?"},
      {speaker:"女", pre:"我考得不太好，", blank:"我只会做第一题，汉字几乎一个都不会写", post:"。",
       py:"Wǒ kǎo de bú tài hǎo, wǒ zhǐ huì zuò dì-yī tí, Hànzì jīhū yí ge dōu bú huì xiě.",
       vn:"Tôi thi không tốt lắm, tôi chỉ làm được câu 1, chữ Hán hầu như không viết được chữ nào."},
      {speaker:"男", pre:"", blank:"别着急，慢慢来", post:"。",
       py:"Bié zháojí, mànman lái.",
       vn:"Đừng lo, từ từ thôi."}
     ],
     explain:"女：你这次汉语考得怎么样？男：九十分，你呢？女：我考得不太好，我只会做第一题，汉字几乎一个都不会写。男：别着急，慢慢来。问：关于女的，可以知道什么？ → 不会写汉字。"}
  ]
};
