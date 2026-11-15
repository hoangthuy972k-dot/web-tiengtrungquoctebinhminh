// ══════════════════════════════════════════
// DATA — HSK3 Bài 2: 他什么时候回来 (When will he come back)
// Nguồn: PPT gốc HSK3 第2课《他什么时候回来》【Lucy制作】
// ══════════════════════════════════════════
var vocabData = [
  {
    "n": 1,
    "zh": "腿",
    "py": "tuǐ",
    "pos": "Danh từ",
    "vn": "chân, đùi",
    "hv": "thối",
    "em": "🦵",
    "lesson": 1,
    "explain": [
      "Bộ phận cơ thể tính từ hông đến bàn chân (gồm đùi và cẳng chân), dùng để đứng và di chuyển."
    ],
    "usage": "Danh từ chỉ bộ phận cơ thể, làm chủ ngữ hoặc định ngữ. Muốn nói bộ phận đó bị đau thì đặt 腿 TRƯỚC tính từ 疼: 腿 + 疼.",
    "collo": [
      "长腿",
      "短腿",
      "腿疼",
      "我的腿"
    ],
    "ex_zh": "我的腿很长。",
    "ex_py": "Wǒ de tuǐ hěn cháng.",
    "ex_vn": "Chân tôi rất dài.",
    "exList": [
      {
        "zh": "我的腿很长。",
        "py": "Wǒ de tuǐ hěn cháng.",
        "vn": "Chân tôi rất dài."
      },
      {
        "zh": "我的小腿有点儿疼。",
        "py": "Wǒ de xiǎotuǐ yǒudiǎnr téng.",
        "vn": "Bắp chân tôi hơi đau."
      },
      {
        "zh": "我现在腿也疼，脚也疼。",
        "py": "Wǒ xiànzài tuǐ yě téng, jiǎo yě téng.",
        "vn": "Bây giờ tôi vừa đau chân vừa đau bàn chân."
      }
    ],
    "hanzi": [
      {
        "c": "腿",
        "p": "tuǐ",
        "type": "左右结构 · Trái-phải",
        "st": 13,
        "ord": "月 (nhục) trái → 退 (thoái) phải",
        "rad": "月 (nhục – thân thể)",
        "mean": "chân, đùi",
        "tip": "月(bộ phận cơ thể) + 退(lùi lại) → bộ phận cơ thể dùng để BƯỚC LÙI/ĐI LẠI = CHÂN.",
        "cf": "退 (tuì – \"lùi lại\", không có bộ 月\")",
        "w": "大腿 / 小腿 / 左腿 / 右腿"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Vì hôm qua đi bộ nhiều nên bây giờ chân tôi rất đau.",
        "answer": "因为昨天走了很多路，所以我的腿现在很疼。",
        "answerPy": "Yīnwèi zuótiān zǒule hěn duō lù, suǒyǐ wǒ de tuǐ xiànzài hěn téng.",
        "note": "因为……所以…… nêu nguyên nhân — kết quả.",
        "pair": "因为……所以……"
      },
      {
        "promptLang": "vi",
        "prompt": "Tuy chân anh ấy dài nhưng anh ấy chạy không nhanh.",
        "answer": "虽然他的腿很长，但是他跑得不快。",
        "answerPy": "Suīrán tā de tuǐ hěn cháng, dànshì tā pǎo de bú kuài.",
        "note": "虽然……但是…… diễn tả sự tương phản.",
        "pair": "虽然……但是……"
      }
    ],
    "colloFull": [
      {
        "zh": "腿疼",
        "py": "tuǐ téng",
        "vn": "đau chân"
      },
      {
        "zh": "长腿",
        "py": "zhǎng tuǐ",
        "vn": "chân dài"
      },
      {
        "zh": "我的腿",
        "py": "wǒ de tuǐ",
        "vn": "chân tôi"
      },
      {
        "zh": "两条腿",
        "py": "liǎng tiáo tuǐ",
        "vn": "hai chân"
      },
      {
        "zh": "腿不舒服",
        "py": "tuǐ bù shūfu",
        "vn": "chân khó chịu"
      }
    ],
    "patterns": [
      {
        "s": "腿 + 疼 / 长",
        "m": "Chân đau, chân dài — bộ phận cơ thể làm chủ ngữ nhỏ"
      },
      {
        "s": "hai + 条 + 腿",
        "m": "Lượng từ 条 cho vật dài"
      }
    ]
  },
  {
    "n": 2,
    "zh": "疼",
    "py": "téng",
    "pos": "Tính từ",
    "vn": "đau, đau đớn",
    "hv": "đông",
    "em": "🤕",
    "lesson": 1,
    "explain": [
      "Cảm giác khó chịu, nhức nhối ở một bộ phận cơ thể do bị thương, bệnh, hoặc mệt mỏi."
    ],
    "usage": "Tính từ chỉ cảm giác, luôn đứng SAU danh từ chỉ bộ phận cơ thể: [bộ phận cơ thể] + 疼 (không đảo ngược thứ tự).",
    "collo": [
      "头疼",
      "腿疼",
      "肚子疼",
      "脚疼"
    ],
    "ex_zh": "你哪儿疼？",
    "ex_py": "Nǐ nǎr téng?",
    "ex_vn": "Bạn đau ở đâu?",
    "exList": [
      {
        "zh": "你哪儿疼？",
        "py": "Nǐ nǎr téng?",
        "vn": "Bạn đau ở đâu?"
      },
      {
        "zh": "我头疼。",
        "py": "Wǒ tóu téng.",
        "vn": "Tôi đau đầu."
      },
      {
        "zh": "我肚子疼，眼睛也疼。",
        "py": "Wǒ dùzi téng, yǎnjīng yě téng.",
        "vn": "Tôi đau bụng, mắt cũng đau."
      }
    ],
    "hanzi": [
      {
        "c": "疼",
        "p": "téng",
        "type": "半包围结构 · Bán bao vây",
        "st": 10,
        "ord": "疒 (nạch) bao → 冬 (đông) trong",
        "rad": "疒 (nạch – bệnh tật)",
        "mean": "đau, đau đớn",
        "tip": "Bộ 疒(bệnh) + 冬(mùa đông) → mùa đông lạnh khiến cơ thể ĐAU NHỨC.",
        "cf": "冷 (lěng – \"lạnh\", cũng liên quan mùa đông)",
        "w": "头疼 / 腿疼 / 肚子疼 / 眼睛疼"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Vì tôi đau đầu nên tôi không muốn đi làm hôm nay.",
        "answer": "因为我头疼，所以我今天不想上班。",
        "answerPy": "Yīnwèi wǒ tóuténg, suǒyǐ wǒ jīntiān bù xiǎng shàngbān.",
        "note": "因为……所以…… nêu nguyên nhân — kết quả.",
        "pair": "因为……所以……"
      },
      {
        "promptLang": "vi",
        "prompt": "Nếu bụng bạn còn đau thì bạn nên đi khám bác sĩ.",
        "answer": "如果你的肚子还疼，你就应该去看医生。",
        "answerPy": "Rúguǒ nǐ de dùzi hái téng, nǐ jiù yīnggāi qù kàn yīshēng.",
        "note": "如果……就…… diễn tả giả thiết — kết quả.",
        "pair": "如果……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "头疼",
        "py": "tóu téng",
        "vn": "đau đầu"
      },
      {
        "zh": "腿疼",
        "py": "tuǐ téng",
        "vn": "đau chân"
      },
      {
        "zh": "肚子疼",
        "py": "dùzi téng",
        "vn": "đau bụng"
      },
      {
        "zh": "有点儿疼",
        "py": "yǒudiǎnr téng",
        "vn": "hơi đau"
      },
      {
        "zh": "疼得厉害",
        "py": "téng de lìhai",
        "vn": "đau dữ dội"
      }
    ],
    "patterns": [
      {
        "s": "✗ 我疼头 → ✓ 我头疼",
        "m": "Bộ phận cơ thể đứng trước 疼"
      },
      {
        "s": "有点儿 + 疼",
        "m": "Hơi đau — 有点儿 dùng cho điều không mong muốn"
      }
    ]
  },
  {
    "n": 3,
    "zh": "脚",
    "py": "jiǎo",
    "pos": "Danh từ",
    "vn": "chân, bàn chân",
    "hv": "cước",
    "em": "🦶",
    "lesson": 1,
    "explain": [
      "Phần dưới cùng của chân, tiếp xúc trực tiếp với mặt đất khi đứng/đi — khác với 腿 (chỉ toàn bộ chân từ hông trở xuống)."
    ],
    "usage": "Danh từ chỉ bộ phận cơ thể; lượng từ đi kèm là 只 (một chiếc) hoặc 双 (một đôi): 一只脚 / 一双脚.",
    "collo": [
      "左脚",
      "右脚",
      "一双脚",
      "脚疼"
    ],
    "ex_zh": "我现在腿疼，脚也疼。",
    "ex_py": "Wǒ xiànzài tuǐ téng, jiǎo yě téng.",
    "ex_vn": "Bây giờ tôi đau chân, bàn chân cũng đau.",
    "exList": [
      {
        "zh": "我现在腿疼，脚也疼。",
        "py": "Wǒ xiànzài tuǐ téng, jiǎo yě téng.",
        "vn": "Bây giờ tôi đau chân, bàn chân cũng đau."
      },
      {
        "zh": "我的左脚，你的右脚。",
        "py": "Wǒ de zuǒjiǎo, nǐ de yòujiǎo.",
        "vn": "Chân trái của tôi, chân phải của bạn."
      },
      {
        "zh": "鞋太小了，我的脚不舒服。",
        "py": "Xié tài xiǎo le, wǒ de jiǎo bù shūfu.",
        "vn": "Giày quá nhỏ, chân tôi khó chịu."
      }
    ],
    "hanzi": [
      {
        "c": "脚",
        "p": "jiǎo",
        "type": "左右结构 · Trái-phải",
        "st": 11,
        "ord": "月 (nhục) trái → 却 (khước) phải",
        "rad": "月 (nhục – thân thể)",
        "mean": "chân, bàn chân",
        "tip": "月(thân thể) + 却(ngược lại, trái lại) → bộ phận ở phía dưới cùng cơ thể = BÀN CHÂN.",
        "cf": "却 (què – \"lại, trái lại\", không có bộ 月\")",
        "w": "左脚 / 右脚 / 一双脚"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Vì giày mới hơi chật nên bàn chân tôi rất khó chịu.",
        "answer": "因为新鞋有点儿小，所以我的脚很不舒服。",
        "answerPy": "Yīnwèi xīn xié yǒudiǎnr xiǎo, suǒyǐ wǒ de jiǎo hěn bù shūfu.",
        "note": "因为……所以…… nêu nguyên nhân — kết quả.",
        "pair": "因为……所以……"
      },
      {
        "promptLang": "vi",
        "prompt": "Tuy bàn chân trái của tôi nhỏ nhưng bàn chân phải lại to hơn.",
        "answer": "虽然我的左脚很小，但是右脚更大。",
        "answerPy": "Suīrán wǒ de zuǒjiǎo hěn xiǎo, dànshì yòujiǎo gèng dà.",
        "note": "虽然……但是…… diễn tả sự tương phản.",
        "pair": "虽然……但是……"
      }
    ],
    "colloFull": [
      {
        "zh": "脚疼",
        "py": "jiǎo téng",
        "vn": "đau chân"
      },
      {
        "zh": "左脚",
        "py": "zuǒ jiǎo",
        "vn": "chân trái"
      },
      {
        "zh": "右脚",
        "py": "yòu jiǎo",
        "vn": "chân phải"
      },
      {
        "zh": "一双脚",
        "py": "yì shuāng jiǎo",
        "vn": "đôi bàn chân"
      },
      {
        "zh": "洗脚",
        "py": "xǐ jiǎo",
        "vn": "rửa chân"
      }
    ],
    "patterns": [
      {
        "s": "một + 双 + 脚",
        "m": "Lượng từ 双 cho vật đi thành đôi"
      },
      {
        "s": "脚 (bàn chân) ≠ 腿 (cả chân)"
      }
    ]
  },
  {
    "n": 4,
    "zh": "树",
    "py": "shù",
    "pos": "Danh từ",
    "vn": "cây",
    "hv": "thụ",
    "em": "🌳",
    "lesson": 1,
    "explain": [
      "Loài thực vật thân gỗ, có rễ, thân, cành, lá — thường mọc cao lớn ngoài trời."
    ],
    "usage": "Danh từ; lượng từ CHUYÊN DÙNG là 棵 (không dùng 个): 一棵树, không nói 一个树.",
    "collo": [
      "大树",
      "小树",
      "一棵树",
      "种树"
    ],
    "ex_zh": "这里有一棵树。",
    "ex_py": "Zhèlǐ yǒu yì kē shù.",
    "ex_vn": "Ở đây có một cây.",
    "exList": [
      {
        "zh": "这里有一棵树。",
        "py": "Zhèlǐ yǒu yì kē shù.",
        "vn": "Ở đây có một cây."
      },
      {
        "zh": "那里也有一棵树。",
        "py": "Nàlǐ yě yǒu yì kē shù.",
        "vn": "Ở đó cũng có một cây."
      },
      {
        "zh": "那边树多，我们过去坐一下吧。",
        "py": "Nàbiān shù duō, wǒmen guòqu zuò yíxià ba.",
        "vn": "Đằng kia nhiều cây, chúng ta qua đó ngồi một chút đi."
      }
    ],
    "hanzi": [
      {
        "c": "树",
        "p": "shù",
        "type": "左右结构 · Trái-phải",
        "st": 9,
        "ord": "木 (mộc) trái → 又 (hựu) phải",
        "rad": "木 (mộc – gỗ, cây)",
        "mean": "cây",
        "tip": "Bộ 木(gỗ) đứng bên trái luôn liên quan đến CÂY CỐI, gỗ.",
        "cf": "林 (lín – \"rừng\", hai chữ 木\")",
        "w": "大树 / 小树 / 一棵树"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Vì trời nắng to nên chúng tôi ngồi nghỉ dưới một cái cây.",
        "answer": "因为天气很热，所以我们坐在一棵树下休息。",
        "answerPy": "Yīnwèi tiānqì hěn rè, suǒyǐ wǒmen zuò zài yì kē shù xià xiūxi.",
        "note": "因为……所以…… nêu nguyên nhân — kết quả.",
        "pair": "因为……所以……"
      },
      {
        "promptLang": "vi",
        "prompt": "Nếu đằng kia có nhiều cây thì chúng ta nên qua đó chụp ảnh.",
        "answer": "如果那边有很多树，我们就应该过去拍照。",
        "answerPy": "Rúguǒ nàbiān yǒu hěn duō shù, wǒmen jiù yīnggāi guòqu pāizhào.",
        "note": "如果……就…… diễn tả giả thiết — kết quả.",
        "pair": "如果……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "一棵树",
        "py": "yì kē shù",
        "vn": "một cái cây"
      },
      {
        "zh": "大树",
        "py": "dà shù",
        "vn": "cây to"
      },
      {
        "zh": "种树",
        "py": "zhǒng shù",
        "vn": "trồng cây"
      },
      {
        "zh": "树下",
        "py": "shù xià",
        "vn": "dưới gốc cây"
      },
      {
        "zh": "树很高",
        "py": "shù hěn gāo",
        "vn": "cây rất cao"
      }
    ],
    "patterns": [
      {
        "s": "một + 棵 + 树",
        "m": "Lượng từ 棵 cho cây cối"
      },
      {
        "s": "在 + 树 + 下",
        "m": "Dưới gốc cây"
      }
    ]
  },
  {
    "n": 5,
    "zh": "容易",
    "py": "róngyì",
    "pos": "Tính từ",
    "vn": "dễ, dễ dàng",
    "hv": "dung dị",
    "em": "✅",
    "lesson": 1,
    "explain": [
      "Không tốn nhiều công sức, thời gian hay khó khăn để thực hiện hoặc hiểu."
    ],
    "usage": "Tính từ song âm tiết. Khi làm vị ngữ cần có phó từ mức độ (很/太) đứng TRƯỚC: 很容易 (không nói trơn 容易). Khi bổ nghĩa cho động từ: 容易 + V = dễ làm gì (容易学).",
    "collo": [
      "很容易",
      "太容易了",
      "容易学",
      "容易做"
    ],
    "ex_zh": "学汉语很容易。",
    "ex_py": "Xué Hànyǔ hěn róngyì.",
    "ex_vn": "Học tiếng Trung rất dễ.",
    "exList": [
      {
        "zh": "学汉语很容易。",
        "py": "Xué Hànyǔ hěn róngyì.",
        "vn": "Học tiếng Trung rất dễ."
      },
      {
        "zh": "这个问题很容易。",
        "py": "Zhège wèntí hěn róngyì.",
        "vn": "Câu hỏi này rất dễ."
      },
      {
        "zh": "找到一个好工作不容易。",
        "py": "Zhǎodào yí ge hǎo gōngzuò bù róngyì.",
        "vn": "Tìm được một công việc tốt không dễ."
      }
    ],
    "hanzi": [
      {
        "c": "容",
        "p": "róng",
        "type": "上下结构 · Trên-dưới",
        "st": 10,
        "ord": "宀 (miên) trên → 谷 (cốc) dưới",
        "rad": "宀 (miên – mái nhà)",
        "mean": "chứa đựng, dung nạp",
        "tip": "Mái nhà 宀 che thung lũng 谷 → có chỗ CHỨA ĐỰNG, DUNG NẠP; mọi việc DỄ hơn khi có chỗ dung thân.",
        "cf": "客 (kè – \"khách\", cũng bộ 宀\")",
        "w": "容易 / 内容"
      },
      {
        "c": "易",
        "p": "yì",
        "type": "独体字 · Chữ đơn",
        "st": 8,
        "ord": "nét liền, không tách bộ",
        "rad": "日 (nhật)",
        "mean": "dễ; thay đổi",
        "tip": "Chữ tượng hình cổ chỉ sự BIẾN ĐỔI linh hoạt → nghĩa mở rộng thành \"DỄ DÀNG\".",
        "cf": "昜 (dạng cổ liên quan)",
        "w": "容易 / 简易"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tuy bài kiểm tra này rất dễ nhưng vẫn có vài bạn làm sai.",
        "answer": "虽然这次考试很容易，但是还有几个同学做错了。",
        "answerPy": "Suīrán zhè cì kǎoshì hěn róngyì, dànshì hái yǒu jǐ ge tóngxué zuòcuò le.",
        "note": "虽然……但是…… diễn tả sự tương phản.",
        "pair": "虽然……但是……"
      },
      {
        "promptLang": "vi",
        "prompt": "Vì công việc này rất dễ nên tôi làm xong rất nhanh.",
        "answer": "因为这个工作很容易，所以我很快就做完了。",
        "answerPy": "Yīnwèi zhège gōngzuò hěn róngyì, suǒyǐ wǒ hěn kuài jiù zuòwán le.",
        "note": "因为……所以…… nêu nguyên nhân — kết quả.",
        "pair": "因为……所以……"
      }
    ],
    "colloFull": [
      {
        "zh": "很容易",
        "py": "hěn róngyì",
        "vn": "rất dễ"
      },
      {
        "zh": "容易学",
        "py": "róngyì xué",
        "vn": "dễ học"
      },
      {
        "zh": "不容易",
        "py": "bù róngyì",
        "vn": "không dễ"
      },
      {
        "zh": "容易做",
        "py": "róngyì zuò",
        "vn": "dễ làm"
      },
      {
        "zh": "太容易了",
        "py": "tài róngyì le",
        "vn": "dễ quá"
      }
    ],
    "patterns": [
      {
        "s": "容易 + V",
        "m": "Dễ làm gì"
      },
      {
        "s": "容易 ↔ 难",
        "m": "Dễ ↔ khó"
      }
    ]
  },
  {
    "n": 6,
    "zh": "难",
    "py": "nán",
    "pos": "Tính từ",
    "vn": "khó",
    "hv": "nan",
    "em": "❌",
    "lesson": 1,
    "explain": [
      "Cần nhiều công sức, khó thực hiện hoặc khó hiểu — trái nghĩa với 容易."
    ],
    "usage": "Tính từ, cách dùng đối xứng với 容易: 很难 (làm vị ngữ); 难 + V = khó làm gì (难写, 难学).",
    "collo": [
      "很难",
      "难写",
      "难学",
      "难做"
    ],
    "ex_zh": "写汉字很难。",
    "ex_py": "Xiě Hànzì hěn nán.",
    "ex_vn": "Viết chữ Hán rất khó.",
    "exList": [
      {
        "zh": "写汉字很难。",
        "py": "Xiě Hànzì hěn nán.",
        "vn": "Viết chữ Hán rất khó."
      },
      {
        "zh": "这道菜很难做。",
        "py": "Zhè dào cài hěn nán zuò.",
        "vn": "Món này khó làm."
      },
      {
        "zh": "上山容易下山难。",
        "py": "Shàng shān róngyì xià shān nán.",
        "vn": "Lên núi dễ, xuống núi khó."
      }
    ],
    "hanzi": [
      {
        "c": "难",
        "p": "nán",
        "type": "左右结构 · Trái-phải",
        "st": 10,
        "ord": "又 (hựu) trái → 隹 (chuy) phải",
        "rad": "又 (hựu – bàn tay)",
        "mean": "khó",
        "tip": "Bộ 又(tay) cầm 隹(chim đuôi ngắn) → bắt chim bằng tay rất KHÓ.",
        "cf": "难 và 准 (chuẩn) đều có 隹",
        "w": "很难 / 难写 / 难学"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Vì bài này quá khó nên tôi phải hỏi thầy giáo.",
        "answer": "因为这道题太难了，所以我得问老师。",
        "answerPy": "Yīnwèi zhè dào tí tài nán le, suǒyǐ wǒ děi wèn lǎoshī.",
        "note": "因为……所以…… nêu nguyên nhân — kết quả.",
        "pair": "因为……所以……"
      },
      {
        "promptLang": "vi",
        "prompt": "Nếu chữ Hán khó nhớ thì bạn nên viết nhiều lần.",
        "answer": "如果汉字难记，你就应该多写几遍。",
        "answerPy": "Rúguǒ Hànzì nán jì, nǐ jiù yīnggāi duō xiě jǐ biàn.",
        "note": "如果……就…… diễn tả giả thiết — kết quả.",
        "pair": "如果……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "很难",
        "py": "hěn nán",
        "vn": "rất khó"
      },
      {
        "zh": "难写",
        "py": "nán xiě",
        "vn": "khó viết"
      },
      {
        "zh": "难学",
        "py": "nán xué",
        "vn": "khó học"
      },
      {
        "zh": "不太难",
        "py": "bú tài nán",
        "vn": "không khó lắm"
      },
      {
        "zh": "难不难",
        "py": "nán bù nán",
        "vn": "khó hay không khó"
      }
    ],
    "patterns": [
      {
        "s": "难 + V",
        "m": "Khó làm gì: 难写, 难学, 难做"
      },
      {
        "s": "难不难？",
        "m": "Có khó không? — dạng hỏi chính phản"
      }
    ]
  },
  {
    "n": 7,
    "zh": "太太",
    "py": "tàitai",
    "pos": "Danh từ",
    "vn": "bà, vợ, phu nhân",
    "hv": "thái thái",
    "em": "👩",
    "lesson": 2,
    "explain": [
      "1. Người vợ (cách nói lịch sự, trang trọng).",
      "2. Cách xưng hô lịch sự với phụ nữ đã có chồng, đi kèm họ."
    ],
    "usage": "Danh từ. Khi dùng làm cách xưng hô lịch sự, đặt SAU họ của người đó: Họ + 太太 (周太太 = bà Chu).",
    "collo": [
      "我太太",
      "他太太",
      "周太太",
      "李太太"
    ],
    "ex_zh": "她是我的太太。",
    "ex_py": "Tā shì wǒ de tàitai.",
    "ex_vn": "Cô ấy là vợ tôi.",
    "exList": [
      {
        "zh": "她是我的太太。",
        "py": "Tā shì wǒ de tàitai.",
        "vn": "Cô ấy là vợ tôi."
      },
      {
        "zh": "周太太在办公室。",
        "py": "Zhōu tàitai zài bàngōngshì.",
        "vn": "Bà Chu ở văn phòng."
      },
      {
        "zh": "他太太很漂亮。",
        "py": "Tā tàitai hěn piàoliang.",
        "vn": "Vợ anh ấy rất đẹp."
      }
    ],
    "hanzi": [
      {
        "c": "太",
        "p": "tài",
        "type": "独体字 · Chữ đơn",
        "st": 4,
        "ord": "大 → 丶(chấm) dưới",
        "rad": "大 (đại – to lớn)",
        "mean": "quá, thái",
        "tip": "To lớn 大 + thêm một chấm 丶bên dưới → \"THÁI\", ý mức độ cao/trang trọng; ghép với 太太 = cách gọi lịch sự người vợ.",
        "cf": "犬 (quǎn – \"con chó\")",
        "w": "太太 / 太大了"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tuy vợ anh ấy rất bận nhưng cô ấy vẫn nấu cơm mỗi ngày.",
        "answer": "虽然他太太很忙，但是她每天还是做饭。",
        "answerPy": "Suīrán tā tàitai hěn máng, dànshì tā měitiān háishi zuò fàn.",
        "note": "虽然……但是…… diễn tả sự tương phản.",
        "pair": "虽然……但是……"
      },
      {
        "promptLang": "vi",
        "prompt": "Vì bà Chu không có ở nhà nên tôi đã gọi điện cho bà ấy.",
        "answer": "因为周太太不在家，所以我给她打了个电话。",
        "answerPy": "Yīnwèi Zhōu tàitai bú zài jiā, suǒyǐ wǒ gěi tā dǎle ge diànhuà.",
        "note": "因为……所以…… nêu nguyên nhân — kết quả.",
        "pair": "因为……所以……"
      }
    ],
    "colloFull": [
      {
        "zh": "我太太",
        "py": "wǒ tàitai",
        "vn": "vợ tôi"
      },
      {
        "zh": "周太太",
        "py": "zhōu tàitai",
        "vn": "bà Chu"
      },
      {
        "zh": "他太太",
        "py": "tā tàitai",
        "vn": "vợ anh ấy"
      },
      {
        "zh": "太太和先生",
        "py": "tàitai hé xiānsheng",
        "vn": "bà và ông"
      },
      {
        "zh": "李太太很忙",
        "py": "Lǐ tàitai hěn máng",
        "vn": "bà Lý rất bận"
      }
    ],
    "patterns": [
      {
        "s": "họ + 太太",
        "m": "Cách gọi: bà Chu, bà Lý…"
      },
      {
        "s": "太太 (vợ, bà) ↔ 先生 (chồng, ông)"
      }
    ]
  },
  {
    "n": 8,
    "zh": "秘书",
    "py": "mìshū",
    "pos": "Danh từ",
    "vn": "thư ký",
    "hv": "bí thư",
    "em": "📋",
    "lesson": 2,
    "explain": [
      "Người phụ trách công việc văn phòng, giấy tờ, sắp xếp lịch làm việc cho cấp trên."
    ],
    "usage": "Danh từ chức danh; đặt SAU họ để xưng hô: Họ + 秘书 (王秘书 = thư ký Vương).",
    "collo": [
      "王秘书",
      "我的秘书",
      "秘书处"
    ],
    "ex_zh": "这是我的秘书。",
    "ex_py": "Zhè shì wǒ de mìshū.",
    "ex_vn": "Đây là thư ký của tôi.",
    "exList": [
      {
        "zh": "这是我的秘书。",
        "py": "Zhè shì wǒ de mìshū.",
        "vn": "Đây là thư ký của tôi."
      },
      {
        "zh": "王秘书在办公室。",
        "py": "Wáng mìshū zài bàngōngshì.",
        "vn": "Thư ký Vương ở văn phòng."
      },
      {
        "zh": "刘秘书出去了。",
        "py": "Liú mìshū chūqu le.",
        "vn": "Thư ký Lưu ra ngoài rồi."
      }
    ],
    "hanzi": [
      {
        "c": "秘",
        "p": "mì",
        "type": "左右结构 · Trái-phải",
        "st": 10,
        "ord": "禾 (hoà) trái → 必 (tất) phải",
        "rad": "禾 (hoà – lúa)",
        "mean": "bí mật",
        "tip": "Bộ 禾(lúa) + 必(tất nhiên) → giữ kín thông tin về mùa màng = BÍ MẬT; người giữ việc riêng cho sếp = thư ký.",
        "cf": "密 (mì – \"bí mật, kín đáo\")",
        "w": "秘书 / 秘密"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Vì giám đốc ra ngoài rồi nên thư ký bảo tôi chiều quay lại.",
        "answer": "因为经理出去了，所以秘书让我下午再来。",
        "answerPy": "Yīnwèi jīnglǐ chūqu le, suǒyǐ mìshū ràng wǒ xiàwǔ zài lái.",
        "note": "因为……所以…… nêu nguyên nhân — kết quả.",
        "pair": "因为……所以……"
      },
      {
        "promptLang": "vi",
        "prompt": "Nếu bạn muốn gặp giám đốc thì bạn nên hỏi thư ký trước.",
        "answer": "如果你想见经理，你就应该先问秘书。",
        "answerPy": "Rúguǒ nǐ xiǎng jiàn jīnglǐ, nǐ jiù yīnggāi xiān wèn mìshū.",
        "note": "如果……就…… diễn tả giả thiết — kết quả.",
        "pair": "如果……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "王秘书",
        "py": "wáng mìshū",
        "vn": "thư ký Vương"
      },
      {
        "zh": "我的秘书",
        "py": "wǒ de mìshū",
        "vn": "thư ký của tôi"
      },
      {
        "zh": "当秘书",
        "py": "dāng mìshū",
        "vn": "làm thư ký"
      },
      {
        "zh": "秘书在办公室",
        "py": "mìshū zài bàngōngshì",
        "vn": "thư ký ở văn phòng"
      },
      {
        "zh": "经理的秘书",
        "py": "jīnglǐ de mìshū",
        "vn": "thư ký của giám đốc"
      }
    ],
    "patterns": [
      {
        "s": "họ + 秘书",
        "m": "Cách gọi: thư ký Vương…"
      },
      {
        "s": "当 + 秘书",
        "m": "Làm thư ký"
      }
    ]
  },
  {
    "n": 9,
    "zh": "经理",
    "py": "jīnglǐ",
    "pos": "Danh từ",
    "vn": "giám đốc, quản lý",
    "hv": "kinh lý",
    "em": "👔",
    "lesson": 2,
    "explain": [
      "Người đứng đầu, phụ trách quản lý, điều hành công việc của một công ty/bộ phận."
    ],
    "usage": "Danh từ chức danh; đặt SAU họ để xưng hô: Họ + 经理 (张经理, 李经理).",
    "collo": [
      "张经理",
      "李经理",
      "总经理"
    ],
    "ex_zh": "这是我的经理。",
    "ex_py": "Zhè shì wǒ de jīnglǐ.",
    "ex_vn": "Đây là giám đốc của tôi.",
    "exList": [
      {
        "zh": "这是我的经理。",
        "py": "Zhè shì wǒ de jīnglǐ.",
        "vn": "Đây là giám đốc của tôi."
      },
      {
        "zh": "张经理在办公室。",
        "py": "Zhāng jīnglǐ zài bàngōngshì.",
        "vn": "Giám đốc Trương ở văn phòng."
      },
      {
        "zh": "李经理在哪儿？",
        "py": "Lǐ jīnglǐ zài nǎr?",
        "vn": "Giám đốc Lý ở đâu?"
      }
    ],
    "hanzi": [
      {
        "c": "经",
        "p": "jīng",
        "type": "左右结构 · Trái-phải",
        "st": 8,
        "ord": "纟 (mịch) trái → 22 (kinh) phải",
        "rad": "纟 (mịch – tơ, sợi)",
        "mean": "kinh qua, quản lý",
        "tip": "Bộ 纟(sợi tơ, dệt theo đường kinh tuyến) → mở rộng thành QUẢN LÝ có hệ thống, trải qua.",
        "cf": "轻 (qīng – \"nhẹ\")",
        "w": "经理 / 经过"
      },
      {
        "c": "理",
        "p": "lǐ",
        "type": "左右结构 · Trái-phải",
        "st": 11,
        "ord": "王 (vương) trái → 里 (lý) phải",
        "rad": "王 (vương – ngọc)",
        "mean": "lý lẽ, xử lý",
        "tip": "Người thợ ngọc 王 xử lý đường vân trong viên ngọc 里 → LÝ LẼ, XỬ LÝ, QUẢN LÝ.",
        "cf": "里 (lǐ – \"bên trong\")",
        "w": "经理 / 道理 / 处理"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Vì giám đốc Lý rất bận nên anh ấy không thể gặp bạn hôm nay.",
        "answer": "因为李经理很忙，所以他今天不能见你。",
        "answerPy": "Yīnwèi Lǐ jīnglǐ hěn máng, suǒyǐ tā jīntiān bù néng jiàn nǐ.",
        "note": "因为……所以…… nêu nguyên nhân — kết quả.",
        "pair": "因为……所以……"
      },
      {
        "promptLang": "vi",
        "prompt": "Tuy giám đốc Trương đi ra ngoài nhưng chiều nay anh ấy sẽ về.",
        "answer": "虽然张经理出去了，但是他今天下午会回来。",
        "answerPy": "Suīrán Zhāng jīnglǐ chūqu le, dànshì tā jīntiān xiàwǔ huì huílai.",
        "note": "虽然……但是…… diễn tả sự tương phản.",
        "pair": "虽然……但是……"
      }
    ],
    "colloFull": [
      {
        "zh": "张经理",
        "py": "zhāng jīnglǐ",
        "vn": "giám đốc Trương"
      },
      {
        "zh": "我们经理",
        "py": "wǒmen jīnglǐ",
        "vn": "giám đốc của chúng tôi"
      },
      {
        "zh": "当经理",
        "py": "dāng jīnglǐ",
        "vn": "làm giám đốc"
      },
      {
        "zh": "经理很忙",
        "py": "jīnglǐ hěn máng",
        "vn": "giám đốc rất bận"
      },
      {
        "zh": "找经理",
        "py": "zhǎo jīnglǐ",
        "vn": "tìm giám đốc"
      }
    ],
    "patterns": [
      {
        "s": "họ + 经理",
        "m": "Cách gọi: giám đốc Trương…"
      },
      {
        "s": "当 + 经理",
        "m": "Làm giám đốc"
      }
    ]
  },
  {
    "n": 10,
    "zh": "办公室",
    "py": "bàngōngshì",
    "pos": "Danh từ",
    "vn": "văn phòng",
    "hv": "biện công thất",
    "em": "🏢",
    "lesson": 2,
    "explain": [
      "Căn phòng dùng để làm việc, xử lý công việc hành chính, giấy tờ."
    ],
    "usage": "Danh từ chỉ nơi chốn; thường đi cùng giới từ 在 khi nói làm gì TẠI văn phòng: 在 + 办公室 + Động từ.",
    "collo": [
      "在办公室",
      "我的办公室",
      "办公室主任"
    ],
    "ex_zh": "我的办公室在这里。",
    "ex_py": "Wǒ de bàngōngshì zài zhèlǐ.",
    "ex_vn": "Văn phòng của tôi ở đây.",
    "exList": [
      {
        "zh": "我的办公室在这里。",
        "py": "Wǒ de bàngōngshì zài zhèlǐ.",
        "vn": "Văn phòng của tôi ở đây."
      },
      {
        "zh": "王秘书在办公室。",
        "py": "Wáng mìshū zài bàngōngshì.",
        "vn": "Thư ký Vương ở văn phòng."
      },
      {
        "zh": "我们经常在办公室吃午饭。",
        "py": "Wǒmen jīngcháng zài bàngōngshì chī wǔfàn.",
        "vn": "Chúng tôi thường ăn trưa ở văn phòng."
      }
    ],
    "hanzi": [
      {
        "c": "办",
        "p": "bàn",
        "type": "独体字 · Chữ đơn (giản thể)",
        "st": 4,
        "ord": "力 (lực) ở giữa hai chấm",
        "rad": "力 (lực – sức lực)",
        "mean": "làm, xử lý",
        "tip": "Sức lực 力 ở giữa hai bên → dồn sức để LÀM VIỆC.",
        "cf": "为 (wèi – \"vì\")",
        "w": "办公室 / 办事"
      },
      {
        "c": "室",
        "p": "shì",
        "type": "上下结构 · Trên-dưới",
        "st": 9,
        "ord": "宀 (miên) trên → 至 (chí) dưới",
        "rad": "宀 (miên – mái nhà)",
        "mean": "căn phòng",
        "tip": "Mái nhà 宀 nơi người ta đi đến 至 để dừng chân → CĂN PHÒNG.",
        "cf": "到 (dào – cũng chứa 至\")",
        "w": "办公室 / 教室"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Vì văn phòng của tôi ở tòa nhà số năm nên bạn dễ tìm thấy.",
        "answer": "因为我的办公室在五号楼，所以你很容易找到。",
        "answerPy": "Yīnwèi wǒ de bàngōngshì zài wǔ hào lóu, suǒyǐ nǐ hěn róngyì zhǎodào.",
        "note": "因为……所以…… nêu nguyên nhân — kết quả.",
        "pair": "因为……所以……"
      },
      {
        "promptLang": "vi",
        "prompt": "Nếu bạn có việc thì có thể đến văn phòng tìm tôi.",
        "answer": "如果你有事，就可以去办公室找我。",
        "answerPy": "Rúguǒ nǐ yǒu shì, jiù kěyǐ qù bàngōngshì zhǎo wǒ.",
        "note": "如果……就…… diễn tả giả thiết — kết quả.",
        "pair": "如果……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "在办公室",
        "py": "zài bàngōngshì",
        "vn": "ở văn phòng"
      },
      {
        "zh": "我的办公室",
        "py": "wǒ de bàngōngshì",
        "vn": "văn phòng của tôi"
      },
      {
        "zh": "去办公室",
        "py": "qù bàngōngshì",
        "vn": "đến văn phòng"
      },
      {
        "zh": "办公室很大",
        "py": "bàngōngshì hěn dà",
        "vn": "văn phòng rất rộng"
      },
      {
        "zh": "办公室里",
        "py": "bàngōngshì li",
        "vn": "trong văn phòng"
      }
    ],
    "patterns": [
      {
        "s": "在 + 办公室 + 里",
        "m": "Trong văn phòng"
      },
      {
        "s": "办公 + 室",
        "m": "Phòng (室) làm việc (办公)"
      }
    ]
  },
  {
    "n": 11,
    "zh": "周",
    "py": "Zhōu",
    "pos": "Danh từ riêng",
    "vn": "họ Chu",
    "hv": "Chu",
    "em": "👨",
    "lesson": 2,
    "explain": [
      "Một họ (tên riêng) của người Trung Quốc, tương đương họ \"Chu\" trong tiếng Việt."
    ],
    "usage": "Danh từ riêng, dùng làm họ đứng TRƯỚC tên hoặc chức danh: 周 + tên (周明) hoặc 周 + chức danh (周经理).",
    "collo": [
      "周明",
      "周经理",
      "周太太"
    ],
    "ex_zh": "请问周明在吗？",
    "ex_py": "Qǐngwèn Zhōu Míng zài ma?",
    "ex_vn": "Xin hỏi anh Chu Minh có ở đó không?",
    "exList": [
      {
        "zh": "请问周明在吗？",
        "py": "Qǐngwèn Zhōu Míng zài ma?",
        "vn": "Xin hỏi anh Chu Minh có ở đó không?"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Vì anh Chu không có ở văn phòng nên tôi đã gọi điện cho anh ấy.",
        "answer": "因为周先生不在办公室，所以我给他打了个电话。",
        "answerPy": "Yīnwèi Zhōu xiānsheng bú zài bàngōngshì, suǒyǐ wǒ gěi tā dǎle ge diànhuà.",
        "note": "因为……所以…… nêu nguyên nhân — kết quả.",
        "pair": "因为……所以……"
      },
      {
        "promptLang": "vi",
        "prompt": "Nếu anh gặp anh Chu thì hãy nói tôi đang tìm anh ấy.",
        "answer": "如果你见到周先生，就告诉他我在找他。",
        "answerPy": "Rúguǒ nǐ jiàndào Zhōu xiānsheng, jiù gàosu tā wǒ zài zhǎo tā.",
        "note": "如果……就…… diễn tả giả thiết — kết quả.",
        "pair": "如果……就……"
      }
    ]
  },
  {
    "n": 12,
    "zh": "周明",
    "py": "Zhōu Míng",
    "pos": "Danh từ riêng",
    "vn": "tên người (Chu Minh)",
    "hv": "Chu Minh",
    "em": "🙋",
    "lesson": 2,
    "explain": [
      "Tên đầy đủ (họ + tên) của một nhân vật trong bài hội thoại."
    ],
    "usage": "Danh từ riêng chỉ tên người, dùng làm chủ ngữ hoặc tân ngữ trong câu như một danh từ bình thường.",
    "ex_zh": "周经理出去了，不在办公室。",
    "ex_py": "Zhōu jīnglǐ chūqu le, bú zài bàngōngshì.",
    "ex_vn": "Giám đốc Chu ra ngoài rồi, không có ở văn phòng.",
    "exList": [
      {
        "zh": "周经理出去了，不在办公室。",
        "py": "Zhōu jīnglǐ chūqu le, bú zài bàngōngshì.",
        "vn": "Giám đốc Chu ra ngoài rồi, không có ở văn phòng."
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Vì anh Chu Minh ra ngoài giải quyết việc nên chiều nay mới về.",
        "answer": "因为周明出去办事了，所以今天下午才回来。",
        "answerPy": "Yīnwèi Zhōu Míng chūqu bànshì le, suǒyǐ jīntiān xiàwǔ cái huílai.",
        "note": "因为……所以…… nêu nguyên nhân — kết quả.",
        "pair": "因为……所以……"
      },
      {
        "promptLang": "vi",
        "prompt": "Nếu anh Chu Minh về thì hãy bảo anh ấy gọi điện cho tôi.",
        "answer": "如果周明回来了，就让他给我打电话。",
        "answerPy": "Rúguǒ Zhōu Míng huílai le, jiù ràng tā gěi wǒ dǎ diànhuà.",
        "note": "如果……就…… diễn tả giả thiết — kết quả.",
        "pair": "如果……就……"
      }
    ]
  },
  {
    "n": 13,
    "zh": "辆",
    "py": "liàng",
    "pos": "Lượng từ",
    "vn": "chiếc (xe cộ)",
    "hv": "lượng",
    "em": "🚗",
    "lesson": 3,
    "explain": [
      "Lượng từ chuyên dùng để đếm số lượng xe cộ (ô tô, xe buýt, taxi...)."
    ],
    "usage": "Lượng từ, đứng giữa SỐ TỪ và DANH TỪ chỉ xe: [số từ] + 辆 + [xe] (一辆车, 几辆公共汽车).",
    "collo": [
      "一辆车",
      "两辆",
      "几辆",
      "一辆出租车"
    ],
    "ex_zh": "这儿有一辆车。",
    "ex_py": "Zhèr yǒu yí liàng chē.",
    "ex_vn": "Ở đây có một chiếc xe.",
    "exList": [
      {
        "zh": "这儿有一辆车。",
        "py": "Zhèr yǒu yí liàng chē.",
        "vn": "Ở đây có một chiếc xe."
      },
      {
        "zh": "这儿有几辆公共汽车？",
        "py": "Zhèr yǒu jǐ liàng gōnggòng qìchē?",
        "vn": "Ở đây có mấy chiếc xe buýt?"
      },
      {
        "zh": "我去叫辆出租车。",
        "py": "Wǒ qù jiào liàng chūzūchē.",
        "vn": "Tôi đi gọi một chiếc taxi."
      }
    ],
    "hanzi": [
      {
        "c": "辆",
        "p": "liàng",
        "type": "左右结构 · Trái-phải",
        "st": 11,
        "ord": "车 (xa) trái → 两 (lưỡng) phải",
        "rad": "车 (xa – xe)",
        "mean": "chiếc (xe)",
        "tip": "Bộ 车(xe) + 两(hai, âm gần \"lượng\") → lượng từ CHUYÊN DÙNG để đếm XE CỘ.",
        "cf": "两 (liǎng – \"hai\", không có bộ 车\")",
        "w": "一辆车 / 两辆 / 几辆"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Vì trời mưa to nên tôi gọi một chiếc taxi để về nhà.",
        "answer": "因为雨下得很大，所以我叫了一辆出租车回家。",
        "answerPy": "Yīnwèi yǔ xià de hěn dà, suǒyǐ wǒ jiàole yí liàng chūzūchē huí jiā.",
        "note": "因为……所以…… nêu nguyên nhân — kết quả.",
        "pair": "因为……所以……"
      },
      {
        "promptLang": "vi",
        "prompt": "Nếu bạn không có xe thì chúng ta có thể đi chung một chiếc.",
        "answer": "如果你没有车，我们就可以坐一辆车一起去。",
        "answerPy": "Rúguǒ nǐ méiyǒu chē, wǒmen jiù kěyǐ zuò yí liàng chē yìqǐ qù.",
        "note": "如果……就…… diễn tả giả thiết — kết quả.",
        "pair": "如果……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "一辆车",
        "py": "yí liàng chē",
        "vn": "một chiếc xe"
      },
      {
        "zh": "两辆自行车",
        "py": "liǎng liàng zìxíngchē",
        "vn": "hai chiếc xe đạp"
      },
      {
        "zh": "一辆出租车",
        "py": "yí liàng chūzūchē",
        "vn": "một chiếc taxi"
      },
      {
        "zh": "几辆车",
        "py": "jǐ liàng chē",
        "vn": "mấy chiếc xe"
      },
      {
        "zh": "那辆车",
        "py": "nà liàng chē",
        "vn": "chiếc xe đó"
      }
    ],
    "patterns": [
      {
        "s": "số + 辆 + 车",
        "m": "Lượng từ 辆 cho xe cộ"
      },
      {
        "s": "✗ 一个车 → ✓ 一辆车",
        "m": "Xe cộ dùng 辆"
      }
    ]
  },
  {
    "n": 14,
    "zh": "楼",
    "py": "lóu",
    "pos": "Danh từ",
    "vn": "lầu, tòa nhà",
    "hv": "lâu",
    "em": "🏬",
    "lesson": 3,
    "explain": [
      "1. Tòa nhà nhiều tầng.",
      "2. Tầng (lầu) trong một tòa nhà."
    ],
    "usage": "Danh từ. Hỏi số tòa nhà dùng 几号楼; chỉ hướng lên/xuống tầng dùng 上楼/下楼, 楼上/楼下.",
    "collo": [
      "大楼",
      "几号楼",
      "上楼",
      "下楼",
      "楼上",
      "楼下"
    ],
    "ex_zh": "我在5号楼。",
    "ex_py": "Wǒ zài wǔ hào lóu.",
    "ex_vn": "Tôi ở tòa nhà số 5.",
    "exList": [
      {
        "zh": "我在5号楼。",
        "py": "Wǒ zài wǔ hào lóu.",
        "vn": "Tôi ở tòa nhà số 5."
      },
      {
        "zh": "你在几号楼？",
        "py": "Nǐ zài jǐ hào lóu?",
        "vn": "Bạn ở tòa nhà số mấy?"
      },
      {
        "zh": "我上楼去给你拿把伞。",
        "py": "Wǒ shànglóu qù gěi nǐ ná bǎ sǎn.",
        "vn": "Tôi lên lầu lấy cho bạn một cái ô."
      }
    ],
    "hanzi": [
      {
        "c": "楼",
        "p": "lóu",
        "type": "左右结构 · Trái-phải",
        "st": 13,
        "ord": "木 (mộc) trái → 娄 (lũ) phải",
        "rad": "木 (mộc – gỗ)",
        "mean": "lầu, tòa nhà",
        "tip": "Bộ gỗ 木 (nhà làm bằng gỗ thời xưa) + 娄(xếp lớp) → nhà xếp nhiều TẦNG = TÒA NHÀ, LẦU.",
        "cf": "数 (shù – \"số\", cũng có phần giống 娄\")",
        "w": "大楼 / 楼上 / 楼下 / 上楼 / 下楼"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Vì thang máy hỏng nên chúng tôi phải đi bộ lên lầu.",
        "answer": "因为电梯坏了，所以我们得走上楼。",
        "answerPy": "Yīnwèi diàntī huài le, suǒyǐ wǒmen děi zǒushàng lóu.",
        "note": "因为……所以…… nêu nguyên nhân — kết quả.",
        "pair": "因为……所以……"
      },
      {
        "promptLang": "vi",
        "prompt": "Nếu bạn tìm không thấy phòng tôi thì cứ hỏi ở tòa nhà số ba.",
        "answer": "如果你找不到我的房间，就在三号楼问一下。",
        "answerPy": "Rúguǒ nǐ zhǎo bú dào wǒ de fángjiān, jiù zài sān hào lóu wèn yíxià.",
        "note": "如果……就…… diễn tả giả thiết — kết quả.",
        "pair": "如果……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "上楼",
        "py": "shàng lóu",
        "vn": "lên lầu"
      },
      {
        "zh": "下楼",
        "py": "xià lóu",
        "vn": "xuống lầu"
      },
      {
        "zh": "楼上",
        "py": "lóu shàng",
        "vn": "trên lầu"
      },
      {
        "zh": "楼下",
        "py": "lóu xià",
        "vn": "dưới lầu"
      },
      {
        "zh": "几号楼",
        "py": "jǐ hào lóu",
        "vn": "toà nhà số mấy"
      }
    ],
    "patterns": [
      {
        "s": "上 / 下 + 楼",
        "m": "Lên / xuống lầu"
      },
      {
        "s": "楼 + 上 / 下",
        "m": "Trên lầu / dưới lầu — 楼 đứng TRƯỚC"
      }
    ]
  },
  {
    "n": 15,
    "zh": "拿",
    "py": "ná",
    "pos": "Động từ",
    "vn": "cầm, lấy",
    "hv": "nã",
    "em": "🤲",
    "lesson": 3,
    "explain": [
      "Dùng tay giữ hoặc mang lấy một vật gì đó."
    ],
    "usage": "Động từ, theo sau là tân ngữ chỉ vật được cầm/lấy: 拿 + [vật] (拿书, 拿钱, 拿伞).",
    "collo": [
      "拿书",
      "拿钱",
      "拿伞",
      "拿东西"
    ],
    "ex_zh": "你手里拿的是什么？",
    "ex_py": "Nǐ shǒu lǐ ná de shì shénme?",
    "ex_vn": "Cái bạn đang cầm trên tay là gì?",
    "exList": [
      {
        "zh": "你手里拿的是什么？",
        "py": "Nǐ shǒu lǐ ná de shì shénme?",
        "vn": "Cái bạn đang cầm trên tay là gì?"
      },
      {
        "zh": "我去拿把伞。",
        "py": "Wǒ qù ná bǎ sǎn.",
        "vn": "Tôi đi lấy một cái ô."
      },
      {
        "zh": "别忘了拿你的伞。",
        "py": "Bié wàngle ná nǐ de sǎn.",
        "vn": "Đừng quên mang theo ô của bạn."
      }
    ],
    "hanzi": [
      {
        "c": "拿",
        "p": "ná",
        "type": "上下结构 · Trên-dưới",
        "st": 10,
        "ord": "合 (hợp) trên → 手 (thủ) dưới",
        "rad": "手 (thủ – tay)",
        "mean": "cầm, lấy",
        "tip": "合(hợp lại) bàn 手(tay) → khép bàn tay lại để CẦM/LẤY một vật gì đó.",
        "cf": "合 (hé – \"hợp lại\")",
        "w": "拿书 / 拿钱 / 拿伞"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Vì trời sắp mưa nên tôi lên lầu lấy một cái ô.",
        "answer": "因为要下雨了，所以我上楼拿了一把伞。",
        "answerPy": "Yīnwèi yào xiàyǔ le, suǒyǐ wǒ shànglóu nále yì bǎ sǎn.",
        "note": "因为……所以…… nêu nguyên nhân — kết quả.",
        "pair": "因为……所以……"
      },
      {
        "promptLang": "vi",
        "prompt": "Nếu bạn cần tiền thì cứ lấy trong túi tôi.",
        "answer": "如果你需要钱，就在我包里拿吧。",
        "answerPy": "Rúguǒ nǐ xūyào qián, jiù zài wǒ bāo lǐ ná ba.",
        "note": "如果……就…… diễn tả giả thiết — kết quả.",
        "pair": "如果……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "拿书",
        "py": "ná shū",
        "vn": "cầm sách"
      },
      {
        "zh": "拿钱",
        "py": "ná qián",
        "vn": "lấy tiền"
      },
      {
        "zh": "拿伞",
        "py": "ná sǎn",
        "vn": "cầm ô"
      },
      {
        "zh": "拿东西",
        "py": "ná dōngxi",
        "vn": "lấy đồ"
      },
      {
        "zh": "帮我拿",
        "py": "bāng wǒ ná",
        "vn": "cầm giúp tôi"
      }
    ],
    "patterns": [
      {
        "s": "拿 + N",
        "m": "Cầm, lấy cái gì"
      },
      {
        "s": "拿 (cầm bằng tay) ≠ 带 (mang theo)"
      }
    ]
  },
  {
    "n": 16,
    "zh": "把",
    "py": "bǎ",
    "pos": "Lượng từ",
    "vn": "cái, chiếc (đồ có tay cầm)",
    "hv": "bả",
    "em": "🖐️",
    "lesson": 3,
    "explain": [
      "Lượng từ dùng cho các đồ vật có tay cầm hoặc dùng bằng tay (ô, dao, ghế, quạt...)."
    ],
    "usage": "Lượng từ, đứng giữa SỐ TỪ và DANH TỪ: [số từ] + 把 + [đồ vật] (一把伞, 一把椅子).",
    "collo": [
      "一把伞",
      "一把椅子",
      "一把刀",
      "一把扇子"
    ],
    "ex_zh": "我去拿把伞。",
    "ex_py": "Wǒ qù ná bǎ sǎn.",
    "ex_vn": "Tôi đi lấy một cái ô.",
    "exList": [
      {
        "zh": "我去拿把伞。",
        "py": "Wǒ qù ná bǎ sǎn.",
        "vn": "Tôi đi lấy một cái ô."
      },
      {
        "zh": "那儿有一把椅子。",
        "py": "Nàr yǒu yì bǎ yǐzi.",
        "vn": "Ở đó có một cái ghế."
      },
      {
        "zh": "这是一把刀，那是一把扇子。",
        "py": "Zhè shì yì bǎ dāo, nà shì yì bǎ shànzi.",
        "vn": "Đây là một con dao, kia là một cái quạt."
      }
    ],
    "hanzi": [
      {
        "c": "把",
        "p": "bǎ",
        "type": "左右结构 · Trái-phải",
        "st": 7,
        "ord": "扌 (thủ) trái → 巴 (ba) phải",
        "rad": "扌 (thủ – bàn tay)",
        "mean": "nắm giữ; lượng từ",
        "tip": "Bộ tay 扌 + 巴(bám chặt) → dùng TAY nắm giữ; cũng là lượng từ cho đồ vật CÓ TAY CẦM.",
        "cf": "巴 (bā – \"bám, mong chờ\")",
        "w": "一把伞 / 一把椅子 / 一把刀"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Vì trên bàn có nhiều dao nên tôi không biết lấy chiếc nào.",
        "answer": "因为桌子上有很多把刀，所以我不知道拿哪把。",
        "answerPy": "Yīnwèi zhuōzi shang yǒu hěn duō bǎ dāo, suǒyǐ wǒ bù zhīdào ná nǎ bǎ.",
        "note": "因为……所以…… nêu nguyên nhân — kết quả.",
        "pair": "因为……所以……"
      },
      {
        "promptLang": "vi",
        "prompt": "Nếu ghế không đủ thì chúng ta mua thêm vài chiếc.",
        "answer": "如果椅子不够，我们就再买几把。",
        "answerPy": "Rúguǒ yǐzi bú gòu, wǒmen jiù zài mǎi jǐ bǎ.",
        "note": "如果……就…… diễn tả giả thiết — kết quả.",
        "pair": "如果……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "一把伞",
        "py": "yì bǎ sǎn",
        "vn": "một cái ô"
      },
      {
        "zh": "一把椅子",
        "py": "yì bǎ yǐzi",
        "vn": "một cái ghế"
      },
      {
        "zh": "一把刀",
        "py": "yì bǎ dāo",
        "vn": "một con dao"
      },
      {
        "zh": "两把伞",
        "py": "liǎng bǎ sǎn",
        "vn": "hai cái ô"
      },
      {
        "zh": "那把椅子",
        "py": "nà bǎ yǐzi",
        "vn": "cái ghế đó"
      }
    ],
    "patterns": [
      {
        "s": "số + 把 + đồ có tay cầm",
        "m": "Lượng từ 把: 伞, 椅子, 刀"
      },
      {
        "s": "把 (lượng từ) khác 把 trong câu chữ 把 — nhận ra theo vị trí"
      }
    ]
  },
  {
    "n": 17,
    "zh": "伞",
    "py": "sǎn",
    "pos": "Danh từ",
    "vn": "cái ô, dù",
    "hv": "tản",
    "em": "☂️",
    "lesson": 3,
    "explain": [
      "Vật dụng có cán và phần vải xòe tròn, dùng để che mưa hoặc che nắng."
    ],
    "usage": "Danh từ; lượng từ đi kèm là 把: 一把伞. Phân biệt 雨伞 (ô che mưa) và 太阳伞 (ô che nắng).",
    "collo": [
      "雨伞",
      "太阳伞",
      "一把伞"
    ],
    "ex_zh": "外面下雨了，我去拿把伞。",
    "ex_py": "Wàimian xiàyǔ le, wǒ qù ná bǎ sǎn.",
    "ex_vn": "Bên ngoài mưa rồi, tôi đi lấy một cái ô.",
    "exList": [
      {
        "zh": "外面下雨了，我去拿把伞。",
        "py": "Wàimian xiàyǔ le, wǒ qù ná bǎ sǎn.",
        "vn": "Bên ngoài mưa rồi, tôi đi lấy một cái ô."
      },
      {
        "zh": "我上楼去给你拿把伞。",
        "py": "Wǒ shànglóu qù gěi nǐ ná bǎ sǎn.",
        "vn": "Tôi lên lầu lấy ô cho bạn."
      },
      {
        "zh": "太阳伞和雨伞不一样。",
        "py": "Tàiyángsǎn hé yǔsǎn bù yíyàng.",
        "vn": "Ô che nắng và ô che mưa không giống nhau."
      }
    ],
    "hanzi": [
      {
        "c": "伞",
        "p": "sǎn",
        "type": "独体字 · Chữ đơn (tượng hình)",
        "st": 5,
        "ord": "人 trên → nhiều nét dưới",
        "rad": "人 (nhân)",
        "mean": "cái ô, dù",
        "tip": "Hình dáng ký tự trông giống một chiếc Ô đang xòe ra che mưa nắng.",
        "cf": "企 (qǐ – cũng có bộ 人 phía trên)",
        "w": "雨伞 / 太阳伞 / 一把伞"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Vì bên ngoài đang mưa nên tôi mượn bạn một cái ô.",
        "answer": "因为外面正在下雨，所以我跟你借一把伞。",
        "answerPy": "Yīnwèi wàimian zhèngzài xiàyǔ, suǒyǐ wǒ gēn nǐ jiè yì bǎ sǎn.",
        "note": "因为……所以…… nêu nguyên nhân — kết quả.",
        "pair": "因为……所以……"
      },
      {
        "promptLang": "vi",
        "prompt": "Nếu bạn quên mang ô thì bạn có thể bị ướt hết người.",
        "answer": "如果你忘了带伞，你就可能全身都湿了。",
        "answerPy": "Rúguǒ nǐ wàngle dài sǎn, nǐ jiù kěnéng quánshēn dōu shī le.",
        "note": "如果……就…… diễn tả giả thiết — kết quả.",
        "pair": "如果……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "一把伞",
        "py": "yì bǎ sǎn",
        "vn": "một cái ô"
      },
      {
        "zh": "雨伞",
        "py": "yǔ sǎn",
        "vn": "ô che mưa"
      },
      {
        "zh": "带伞",
        "py": "dài sǎn",
        "vn": "mang ô"
      },
      {
        "zh": "拿伞",
        "py": "ná sǎn",
        "vn": "cầm ô"
      },
      {
        "zh": "忘了带伞",
        "py": "wàng le dài sǎn",
        "vn": "quên mang ô"
      }
    ],
    "patterns": [
      {
        "s": "带 / 拿 + 伞",
        "m": "Mang, cầm ô"
      },
      {
        "s": "雨 + 伞 / 太阳 + 伞",
        "m": "Ô che mưa / ô che nắng"
      }
    ]
  },
  {
    "n": 18,
    "zh": "胖",
    "py": "pàng",
    "pos": "Tính từ",
    "vn": "béo, mập",
    "hv": "bàn",
    "em": "🐷",
    "lesson": 4,
    "explain": [
      "Có nhiều thịt/mỡ trên cơ thể, thân hình to lớn — trái nghĩa với 瘦 (gầy)."
    ],
    "usage": "Tính từ; làm vị ngữ với 很 (很胖); nói mức độ tăng cân dùng 胖 + 了 + số lượng: 胖了5公斤.",
    "collo": [
      "很胖",
      "胖了",
      "这么胖"
    ],
    "ex_zh": "他很胖，我很瘦。",
    "ex_py": "Tā hěn pàng, wǒ hěn shòu.",
    "ex_vn": "Anh ấy rất béo, tôi rất gầy.",
    "exList": [
      {
        "zh": "他很胖，我很瘦。",
        "py": "Tā hěn pàng, wǒ hěn shòu.",
        "vn": "Anh ấy rất béo, tôi rất gầy."
      },
      {
        "zh": "你看，我这么胖，怎么办呢？",
        "py": "Nǐ kàn, wǒ zhème pàng, zěnme bàn ne?",
        "vn": "Con xem, mẹ béo thế này, phải làm sao đây?"
      },
      {
        "zh": "最近她吃得很多，胖了五公斤。",
        "py": "Zuìjìn tā chī de hěn duō, pàngle wǔ gōngjīn.",
        "vn": "Gần đây cô ấy ăn nhiều, béo lên 5 cân."
      }
    ],
    "hanzi": [
      {
        "c": "胖",
        "p": "pàng",
        "type": "左右结构 · Trái-phải",
        "st": 9,
        "ord": "月 (nhục) trái → 半 (bán) phải",
        "rad": "月 (nhục – thịt)",
        "mean": "béo, mập",
        "tip": "Bộ thịt 月 + 半(nửa, ý nhiều thịt dư ra) → nhiều THỊT trên cơ thể = BÉO.",
        "cf": "伴 (bàn – \"bạn đồng hành\", cũng có 半\")",
        "w": "很胖 / 胖了"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Vì gần đây ăn nhiều nên tôi béo lên vài cân.",
        "answer": "因为最近吃得很多，所以我胖了几公斤。",
        "answerPy": "Yīnwèi zuìjìn chī de hěn duō, suǒyǐ wǒ pàngle jǐ gōngjīn.",
        "note": "因为……所以…… nêu nguyên nhân — kết quả.",
        "pair": "因为……所以……"
      },
      {
        "promptLang": "vi",
        "prompt": "Tuy anh ấy ăn rất ít nhưng vẫn rất béo.",
        "answer": "虽然他吃得很少，但是还是很胖。",
        "answerPy": "Suīrán tā chī de hěn shǎo, dànshì háishi hěn pàng.",
        "note": "虽然……但是…… diễn tả sự tương phản.",
        "pair": "虽然……但是……"
      }
    ],
    "colloFull": [
      {
        "zh": "很胖",
        "py": "hěn pàng",
        "vn": "rất mập"
      },
      {
        "zh": "胖了",
        "py": "pàng le",
        "vn": "béo lên rồi"
      },
      {
        "zh": "有点儿胖",
        "py": "yǒudiǎnr pàng",
        "vn": "hơi mập"
      },
      {
        "zh": "这么胖",
        "py": "zhème pàng",
        "vn": "mập thế"
      },
      {
        "zh": "不胖不瘦",
        "py": "bú pàng bú shòu",
        "vn": "không mập không gầy"
      }
    ],
    "patterns": [
      {
        "s": "Adj + 了",
        "m": "胖了 — béo lên rồi, chỉ sự thay đổi"
      },
      {
        "s": "胖 ↔ 瘦",
        "m": "Mập ↔ gầy"
      }
    ]
  },
  {
    "n": 19,
    "zh": "其实",
    "py": "qíshí",
    "pos": "Phó từ",
    "vn": "thực ra, thật ra",
    "hv": "kỳ thực",
    "em": "💬",
    "lesson": 4,
    "explain": [
      "Dùng để đính chính, bổ sung một sự thật khác với điều vừa nói/nghĩ trước đó."
    ],
    "usage": "Phó từ, đứng ở ĐẦU CÂU hoặc NGAY SAU chủ ngữ, TRƯỚC động từ/tính từ: 其实 + [câu], hoặc [Chủ ngữ] + 其实 + [vị ngữ].",
    "collo": [
      "其实……",
      "他其实……",
      "其实很容易"
    ],
    "ex_zh": "他看起来很年轻，其实已经40岁了。",
    "ex_py": "Tā kànqǐlai hěn niánqīng, qíshí yǐjīng sìshí suì le.",
    "ex_vn": "Anh ấy trông rất trẻ, nhưng thực ra đã 40 tuổi rồi.",
    "exList": [
      {
        "zh": "他看起来很年轻，其实已经40岁了。",
        "py": "Tā kànqǐlai hěn niánqīng, qíshí yǐjīng sìshí suì le.",
        "vn": "Anh ấy trông rất trẻ, nhưng thực ra đã 40 tuổi rồi."
      },
      {
        "zh": "其实，我还没吃饭。",
        "py": "Qíshí, wǒ hái méi chīfàn.",
        "vn": "Thực ra, tôi vẫn chưa ăn cơm."
      },
      {
        "zh": "这个工作看起来很难，其实很容易。",
        "py": "Zhège gōngzuò kànqǐlai hěn nán, qíshí hěn róngyì.",
        "vn": "Công việc này nhìn thì khó, nhưng thực ra rất dễ."
      }
    ],
    "hanzi": [
      {
        "c": "其",
        "p": "qí",
        "type": "独体字 · Chữ đơn (tượng hình)",
        "st": 8,
        "ord": "nét liền, gốc là hình cái nia",
        "rad": "八 (bát)",
        "mean": "đó, cái đó",
        "tip": "Vốn là hình vẽ cái nia sàng gạo cổ, sau mượn dùng làm đại từ chỉ định \"đó, của nó\".",
        "cf": "期 (qī – \"thời kỳ\", cũng chứa 其\")",
        "w": "其实 / 其他"
      },
      {
        "c": "实",
        "p": "shí",
        "type": "上下结构 · Trên-dưới (giản thể)",
        "st": 8,
        "ord": "宀 (miên) trên → 头 (biến thể) dưới",
        "rad": "宀 (miên – mái nhà)",
        "mean": "thật, thực",
        "tip": "Trong nhà 宀 có của cải THẬT SỰ → nghĩa THỰC, CHÂN THẬT.",
        "cf": "买 (mǎi – hình dạng gần giống phần dưới)",
        "w": "其实 / 事实 / 实在"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Mọi người nghĩ tôi rất bận, nhưng thực ra tôi có nhiều thời gian rảnh.",
        "answer": "大家觉得我很忙，但其实我有很多空儿。",
        "answerPy": "Dàjiā juéde wǒ hěn máng, dàn qíshí wǒ yǒu hěn duō kòngr.",
        "note": "但其实…… đính chính lại điều mọi người nghĩ trước đó.",
        "pair": "……，但……"
      },
      {
        "promptLang": "vi",
        "prompt": "Câu hỏi này nhìn có vẻ khó, nhưng thực ra rất đơn giản.",
        "answer": "这个问题看起来很难，但其实很简单。",
        "answerPy": "Zhège wèntí kànqǐlai hěn nán, dàn qíshí hěn jiǎndān.",
        "note": "V起来 + tính từ = nhìn/thấy có vẻ như thế nào; 但其实…… đính chính lại.",
        "pair": "……，但……"
      }
    ],
    "colloFull": [
      {
        "zh": "其实很容易",
        "py": "qíshí hěn róngyì",
        "vn": "thực ra rất dễ"
      },
      {
        "zh": "其实不难",
        "py": "qíshí bù nán",
        "vn": "thật ra không khó"
      },
      {
        "zh": "他其实",
        "py": "tā qíshí",
        "vn": "thực ra anh ấy"
      },
      {
        "zh": "其实我知道",
        "py": "qíshí wǒ zhīdào",
        "vn": "thật ra tôi biết"
      },
      {
        "zh": "但其实",
        "py": "dàn qíshí",
        "vn": "nhưng thực ra"
      }
    ],
    "patterns": [
      {
        "s": "……，其实 + mệnh đề",
        "m": "…, thực ra … (trái với điều người ta tưởng)"
      },
      {
        "s": "其实 đứng SAU chủ ngữ hoặc đầu vế sau"
      }
    ]
  },
  {
    "n": 20,
    "zh": "瘦",
    "py": "shòu",
    "pos": "Tính từ",
    "vn": "gầy, ốm",
    "hv": "sấu",
    "em": "📉",
    "lesson": 4,
    "explain": [
      "1. Ít thịt/mỡ trên cơ thể, thân hình nhỏ, mảnh — trái nghĩa 胖.",
      "2. Quần áo bó sát, chật."
    ],
    "usage": "Tính từ; làm vị ngữ với 很/有点儿: 很瘦, 有点儿瘦; nói mức độ giảm cân dùng 瘦 + 了: 瘦了.",
    "collo": [
      "很瘦",
      "瘦了",
      "有点儿瘦"
    ],
    "ex_zh": "我现在没以前那么胖了。",
    "ex_py": "Wǒ xiànzài méi yǐqián nàme pàng le.",
    "ex_vn": "Bây giờ tôi không còn béo như trước nữa.",
    "exList": [
      {
        "zh": "我现在没以前那么胖了。",
        "py": "Wǒ xiànzài méi yǐqián nàme pàng le.",
        "vn": "Bây giờ tôi không còn béo như trước nữa."
      },
      {
        "zh": "我比以前瘦。",
        "py": "Wǒ bǐ yǐqián shòu.",
        "vn": "Tôi gầy hơn trước."
      },
      {
        "zh": "这件衣服有点儿瘦。",
        "py": "Zhè jiàn yīfu yǒudiǎnr shòu.",
        "vn": "Bộ quần áo này hơi chật."
      }
    ],
    "hanzi": [
      {
        "c": "瘦",
        "p": "shòu",
        "type": "半包围结构 · Bán bao vây",
        "st": 14,
        "ord": "疒 (nạch) bao → 叟 (tẩu) trong",
        "rad": "疒 (nạch – bệnh tật)",
        "mean": "gầy, ốm",
        "tip": "Bộ bệnh 疒 + 叟(ông già) → cơ thể như ông già ốm o = GẦY.",
        "cf": "瘦 và 疼 đều mang bộ 疒 (liên quan cơ thể)",
        "w": "很瘦 / 瘦了 / 有点儿瘦"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Vì cô ấy tập thể thao mỗi ngày nên bây giờ gầy hơn trước rất nhiều.",
        "answer": "因为她每天运动，所以现在比以前瘦多了。",
        "answerPy": "Yīnwèi tā měitiān yùndòng, suǒyǐ xiànzài bǐ yǐqián shòu duō le.",
        "note": "因为……所以…… nêu nguyên nhân — kết quả.",
        "pair": "因为……所以……"
      },
      {
        "promptLang": "vi",
        "prompt": "Tuy bộ quần áo này hơi chật nhưng tôi vẫn rất thích nó.",
        "answer": "虽然这件衣服有点儿瘦，但是我还是很喜欢它。",
        "answerPy": "Suīrán zhè jiàn yīfu yǒudiǎnr shòu, dànshì wǒ háishi hěn xǐhuan tā.",
        "note": "虽然……但是…… diễn tả sự tương phản.",
        "pair": "虽然……但是……"
      }
    ],
    "colloFull": [
      {
        "zh": "很瘦",
        "py": "hěn shòu",
        "vn": "rất gầy"
      },
      {
        "zh": "瘦了",
        "py": "shòu le",
        "vn": "gầy đi rồi"
      },
      {
        "zh": "有点儿瘦",
        "py": "yǒudiǎnr shòu",
        "vn": "hơi gầy"
      },
      {
        "zh": "太瘦了",
        "py": "tài shòu le",
        "vn": "gầy quá"
      },
      {
        "zh": "想瘦一点儿",
        "py": "xiǎng shòu yìdiǎnr",
        "vn": "muốn gầy hơn chút"
      }
    ],
    "patterns": [
      {
        "s": "Adj + 了",
        "m": "瘦了 — gầy đi rồi"
      },
      {
        "s": "瘦 ↔ 胖",
        "m": "Gầy ↔ mập"
      }
    ]
  }
];

const wuData = [
  {img:'🦶',label:'脚',py:'jiǎo',letter:'A'},
  {img:'🌳',label:'树',py:'shù',letter:'B'},
  {img:'👔',label:'经理',py:'jīnglǐ',letter:'C'},
  {img:'🏢',label:'办公室',py:'bàngōngshì',letter:'D'},
  {img:'🏬',label:'楼',py:'lóu',letter:'E'},
  {img:'☂️',label:'伞',py:'sǎn',letter:'F'},
];

var dialogData = [
  {scene:'下山的路上 · Trên đường xuống núi',
   preQuiz:[
     {q:'说话人A现在怎么了？',opts:['腿疼，脚也疼','很饿','很渴'],ans:0},
     {q:'他们打算去哪儿休息一下？',opts:['树多的地方','山顶','车里'],ans:0},
     {q:'根据对话，上山和下山哪个更难？',opts:['下山更难','上山更难','一样难'],ans:0},
   ],
   lines:[
     {sp:0,zh:'休息一下吧。',py:'Xiūxi yíxià ba.',vn:'Nghỉ một chút đi.'},
     {sp:1,zh:'怎么了？',py:'Zěnme le?',vn:'Sao vậy?'},
     {sp:0,zh:'我现在腿也疼，脚也疼。',py:'Wǒ xiànzài tuǐ yě téng, jiǎo yě téng.',vn:'Bây giờ tôi vừa đau chân vừa đau bàn chân.'},
     {sp:1,zh:'好，那边树多，我们过去坐一下吧。',py:'Hǎo, nàbiān shù duō, wǒmen guòqu zuò yíxià ba.',vn:'Được, đằng kia nhiều cây, chúng ta qua đó ngồi một chút đi.'},
     {sp:0,zh:'上来的时候我怎么没觉得这么累？',py:'Shànglái de shíhou wǒ zěnme méi juéde zhème lèi?',vn:'Lúc lên núi sao tôi lại không thấy mệt thế này nhỉ?'},
     {sp:1,zh:'上山容易下山难，你不知道？',py:'Shàng shān róngyì xià shān nán, nǐ bù zhīdào?',vn:'Lên núi dễ xuống núi khó, bạn không biết à?'},
   ]},
  {scene:'在打电话 · Đang gọi điện thoại',
   preQuiz:[
     {q:'周经理现在在哪儿？',opts:['出去办事了','在办公室','在家里'],ans:0},
     {q:'周经理什么时候回来？',opts:['下午','晚上','明天'],ans:0},
     {q:'说话人希望周经理回来后做什么？',opts:['给他打电话','去他家','写信'],ans:0},
   ],
   lines:[
     {sp:0,zh:'喂，你好，请问周明在吗？',py:'Wèi, nǐ hǎo, qǐngwèn Zhōu Míng zài ma?',vn:'Alô, xin chào, cho hỏi anh Chu Minh có ở đó không?'},
     {sp:1,zh:'周经理出去了，不在办公室。',py:'Zhōu jīnglǐ chūqu le, bú zài bàngōngshì.',vn:'Giám đốc Chu ra ngoài rồi, không có ở văn phòng.'},
     {sp:0,zh:'他去哪儿了？什么时候回来？',py:'Tā qù nǎr le? Shénme shíhou huílai?',vn:'Anh ấy đi đâu rồi? Khi nào về?'},
     {sp:1,zh:'他出去办事了，下午回来。',py:'Tā chūqu bànshì le, xiàwǔ huílai.',vn:'Anh ấy ra ngoài giải quyết việc, chiều về.'},
     {sp:0,zh:'回来了就让他给我打个电话。',py:'Huílai le jiù ràng tā gěi wǒ dǎ ge diànhuà.',vn:'Về rồi thì bảo anh ấy gọi điện cho tôi.'},
     {sp:1,zh:'好的，他到了办公室我就告诉他。',py:'Hǎo de, tā dàole bàngōngshì wǒ jiù gàosu tā.',vn:'Vâng, anh ấy đến văn phòng là tôi báo ngay cho anh ấy.'},
   ]},
  {scene:'在楼门口送朋友 · Tiễn bạn ở cửa tòa nhà',
   preQuiz:[
     {q:'外面天气怎么样？',opts:['雨下得很大','很晴朗','刮大风'],ans:0},
     {q:'朋友打算怎么回去？',opts:['叫出租车','走路','骑自行车'],ans:0},
     {q:'说话人上楼去做什么？',opts:['拿伞','拿钱','拿手机'],ans:0},
   ],
   lines:[
     {sp:0,zh:'雨下得真大。你怎么回去？我送你吧。',py:'Yǔ xià de zhēn dà. Nǐ zěnme huíqu? Wǒ sòng nǐ ba.',vn:'Mưa to quá. Bạn về bằng gì? Để tôi đưa bạn về.'},
     {sp:1,zh:'没事，我出去叫辆出租车就行了。',py:'Méishì, wǒ chūqu jiào liàng chūzūchē jiù xíng le.',vn:'Không sao, tôi ra ngoài gọi một chiếc taxi là được rồi.'},
     {sp:0,zh:'那你等等，我上楼去给你拿把伞。',py:'Nà nǐ děngdeng, wǒ shànglóu qù gěi nǐ ná bǎ sǎn.',vn:'Vậy bạn đợi chút, tôi lên lầu lấy cho bạn một cái ô.'},
     {sp:1,zh:'好的。我跟你一起上去吧。',py:'Hǎo de. Wǒ gēn nǐ yìqǐ shàngqu ba.',vn:'Được. Tôi cùng lên với bạn nhé.'},
     {sp:0,zh:'你在这儿等吧，我拿了伞就下来。',py:'Nǐ zài zhèr děng ba, wǒ nále sǎn jiù xiàlai.',vn:'Bạn đợi ở đây đi, tôi lấy ô xong là xuống ngay.'},
   ]},
  {scene:'在家 · Ở nhà',
   preQuiz:[
     {q:'说话人B觉得说话人A为什么会胖？',opts:['吃了饭就睡觉，不出去走走','吃得太多','不吃早饭'],ans:0},
     {q:'说话人A说自己每天做什么运动？',opts:['做饭','跑步','游泳'],ans:0},
     {q:'说话人B相信说话人A真的有运动吗？',opts:['不相信','相信','不知道'],ans:0},
   ],
   lines:[
     {sp:0,zh:'你看，我这么胖，怎么办呢？',py:'Nǐ kàn, wǒ zhème pàng, zěnme bàn ne?',vn:'Con xem, mẹ béo thế này, phải làm sao đây?'},
     {sp:1,zh:'你每天晚上吃了饭就睡觉，也不出去走走，能不胖吗？',py:'Nǐ měitiān wǎnshang chīle fàn jiù shuìjiào, yě bù chūqu zǒuzou, néng bú pàng ma?',vn:'Mẹ ngày nào cũng ăn cơm xong là đi ngủ, cũng không ra ngoài đi dạo, sao mà không béo được?'},
     {sp:0,zh:'其实我每天都运动。',py:'Qíshí wǒ měitiān dōu yùndòng.',vn:'Thật ra ngày nào mẹ cũng vận động đấy chứ.'},
     {sp:1,zh:'但是你一点儿也没瘦！你做什么运动了？',py:'Dànshì nǐ yìdiǎnr yě méi shòu! Nǐ zuò shénme yùndòng le?',vn:'Nhưng mẹ chẳng gầy đi tí nào! Mẹ vận động gì vậy?'},
     {sp:0,zh:'做饭啊。',py:'Zuò fàn a.',vn:'Nấu cơm chứ sao.'},
   ]},
];

// ══════════════════════════════════════════
// PHẦN 1 · GHÉP TỪ (Collocation)
// ══════════════════════════════════════════
var matchData = [
  {left:'外面下雨了，你带一把', right:'伞'},
  {left:'楼下有一辆', right:'出租车'},
  {left:'经理不在，你可以问他的', right:'秘书'},
  {left:'走了一天的路，我的脚很', right:'疼'},
  {left:'太热了，我们去前面的', right:'树下坐坐'},
  {left:'他每天晚上去跑步，现在', right:'瘦多了'},
  {left:'这些题一点儿也不难，都很', right:'容易'},
];

// ══════════════════════════════════════════
// PHẦN 2 · NGHE — đề nghe THẬT từ HSK标准教程3 练习册 (sách bài tập Bài 2)
// Audio gốc duy nhất chứa đủ 20 câu (Phần 1+2+3+4 của đề gốc):
//  - Phần 1 (câu 1-5, gốc: nghe chọn tranh) + Phần 2 (câu 6-10, gốc: nghe
//    phán đoán đúng/sai) → gộp thành 10 câu ĐIỀN CHÍNH TẢ (nghe rồi gõ lại
//    phần còn thiếu), vì trang không có giao diện chọn tranh/đúng-sai.
//  - Phần 3 (câu 11-15) + Phần 4 (câu 16-20) → 10 câu TRẮC NGHIỆM (nghe hội
//    thoại, chọn A/B/C), giữ nguyên đúng như đề gốc.
// ══════════════════════════════════════════
var listenData = {
  type: 'workbook',
  audio: "/audio/hsk3-bai-2/listen-full.mp3",
  dictation: [
    {num:1, lines:[
      {speaker:"女", pre:"", blank:"真没想到，你现在这么瘦", post:"！",
       py:"Zhēn méi xiǎngdào, nǐ xiànzài zhème shòu!",
       vn:"Thật không ngờ, bạn bây giờ gầy thế này!"},
      {speaker:"男", pre:"这几年我一直在运动，", blank:"每天都跑步", post:"，能不瘦吗？",
       py:"Zhè jǐ nián wǒ yìzhí zài yùndòng, měitiān dōu pǎobù, néng bú shòu ma?",
       vn:"Mấy năm nay tôi luôn vận động, ngày nào cũng chạy bộ, sao mà không gầy được?"}]},
    {num:2, lines:[
      {speaker:"女", pre:"", blank:"周经理，您找我", post:"？",
       py:"Zhōu jīnglǐ, nín zhǎo wǒ?",
       vn:"Giám đốc Chu, ngài tìm em ạ?"},
      {speaker:"男", pre:"对，小方，你快上来，", blank:"来我办公室", post:"。",
       py:"Duì, Xiǎofāng, nǐ kuài shànglái, lái wǒ bàngōngshì.",
       vn:"Đúng rồi, Tiểu Phương, em lên nhanh đi, đến văn phòng của anh."}]},
    {num:3, lines:[
      {speaker:"男", pre:"", blank:"天气太冷了，回来时别坐公共汽车了", post:"。",
       py:"Tiānqì tài lěng le, huílai shí bié zuò gōnggòng qìchē le.",
       vn:"Trời lạnh quá, lúc về đừng đi xe buýt nữa."},
      {speaker:"女", pre:"我叫到一辆出租车，", blank:"正准备上车呢", post:"。",
       py:"Wǒ jiàodào yí liàng chūzūchē, zhèng zhǔnbèi shàngchē ne.",
       vn:"Em gọi được một chiếc taxi rồi, đang chuẩn bị lên xe đây."}]},
    {num:4, lines:[
      {speaker:"男", pre:"", blank:"怎么下雨了？我没带伞", post:"。",
       py:"Zěnme xiàyǔ le? Wǒ méi dài sǎn.",
       vn:"Sao lại mưa rồi? Tôi không mang ô."},
      {speaker:"女", pre:"", blank:"我也没带", post:"。",
       py:"Wǒ yě méi dài.",
       vn:"Tôi cũng không mang."}]},
    {num:5, lines:[
      {speaker:"男", pre:"", blank:"你怎么了？怎么不跑了", post:"？",
       py:"Nǐ zěnme le? Zěnme bù pǎo le?",
       vn:"Bạn sao vậy? Sao không chạy nữa?"},
      {speaker:"女", pre:"今天不知道怎么了，", blank:"脚一直疼", post:"。",
       py:"Jīntiān bù zhīdào zěnme le, jiǎo yìzhí téng.",
       vn:"Hôm nay không biết sao nữa, chân cứ đau mãi."}]},
    {num:6, stmt:"乐乐现在不在外边。", judge:true, lines:[
      {pre:"乐乐，你出来的时候带把伞，", blank:"外边下雨呢", post:"。",
       py:"Lèle, nǐ chūlai de shíhou dài bǎ sǎn, wàibian xiàyǔ ne.",
       vn:"Lạc Lạc, lúc con ra ngoài nhớ mang theo ô, bên ngoài đang mưa đấy."}]},
    {num:7, stmt:"王经理在楼下。", judge:false, lines:[
      {pre:"王经理，您别着急，", blank:"我现在就上楼去", post:"。",
       py:"Wáng jīnglǐ, nín bié zháojí, wǒ xiànzài jiù shànglóu qù.",
       vn:"Giám đốc Vương, ngài đừng vội, em lên lầu ngay bây giờ đây."}]},
    {num:8, stmt:"他已经到楼上了。", judge:false, lines:[
      {pre:"你在这儿等我一下，", blank:"我上去拿了钱就下来", post:"。",
       py:"Nǐ zài zhèr děng wǒ yíxià, wǒ shàngqu nále qián jiù xiàlai.",
       vn:"Bạn đợi tôi ở đây một chút, tôi lên lấy tiền xong là xuống ngay."}]},
    {num:9, stmt:"他们现在在外边。", judge:true, lines:[
      {pre:"我们快点儿进去喝杯热咖啡吧，", blank:"这儿太冷了", post:"。",
       py:"Wǒmen kuài diǎnr jìnqu hē bēi rè kāfēi ba, zhèr tài lěng le.",
       vn:"Chúng ta mau vào trong uống ly cà phê nóng đi, ở đây lạnh quá."}]},
    {num:10, stmt:"同学们现在在树下。", judge:false, lines:[
      {pre:"同学们，你们快过来，", blank:"到树下坐坐", post:"。",
       py:"Tóngxuémen, nǐmen kuài guòlai, dào shù xià zuòzuo.",
       vn:"Các bạn ơi, mọi người mau lại đây, đến ngồi dưới gốc cây một chút."}]}
  ],
  mc: [
    {num:11, options:["做饭","吃饭","打电话"], ans:1, q:"女的让男的做什么？",
     lines:[
      {speaker:"女", pre:"饭", blank:"做好了", post:"，快过来吃。",
       py:"Fàn zuòhǎo le, kuài guòlai chī.",
       vn:"Cơm nấu xong rồi, mau lại ăn đi."},
      {speaker:"男", pre:"好，我打了电话就", blank:"过去", post:"。",
       py:"Hǎo, wǒ dǎle diànhuà jiù guòqu.",
       vn:"Được, tôi gọi điện xong là qua ngay."}
     ],
     explain:"女：饭做好了，快过来吃。男：好，我打了电话就过去。问：女的让男的做什么？ → 吃饭。"},
    {num:12, options:["公司","医院","学校"], ans:0, q:"他们可能在哪儿？",
     lines:[
      {speaker:"男", pre:"请问，方经理的办公室怎么", blank:"走", post:"？",
       py:"Qǐngwèn, Fāng jīnglǐ de bàngōngshì zěnme zǒu?",
       vn:"Xin hỏi, văn phòng giám đốc Phương đi thế nào ạ?"},
      {speaker:"女", pre:"他外出办事了，现在", blank:"不在", post:"。",
       py:"Tā wàichū bànshì le, xiànzài bú zài.",
       vn:"Anh ấy ra ngoài giải quyết việc rồi, bây giờ không có ở đây."}
     ],
     explain:"男：请问，方经理的办公室怎么走？女：就在前边，右边第二个房间，1202。他外出办事了，现在不在。问：他们可能在哪儿？ → 公司 (vì hỏi thăm văn phòng của một giám đốc)."},
    {num:13, options:["老师和学生","丈夫和妻子","经理和秘书"], ans:1, q:"他们最可能是什么关系？",
     lines:[
      {speaker:"女", pre:"每天坐车上班时间太长了，我们也", blank:"买辆车吧", post:"。",
       py:"Měitiān zuò chē shàngbān shíjiān tài cháng le, wǒmen yě mǎi liàng chē ba.",
       vn:"Ngày nào cũng đi xe đi làm mất nhiều thời gian quá, hay là mình cũng mua xe đi."},
      {speaker:"男", pre:"行啊，买了车我就每天", blank:"送你上班", post:"。",
       py:"Xíng a, mǎile chē wǒ jiù měitiān sòng nǐ shàngbān.",
       vn:"Được thôi, mua xe xong là ngày nào anh cũng đưa em đi làm."}
     ],
     explain:"女：每天坐车上班时间太长了，我们也买辆车吧。男：行啊，买了车我就每天送你上班。问：他们最可能是什么关系？ → 丈夫和妻子."},
    {num:14, options:["喜欢看书","考得很好","喜欢玩儿电脑游戏"], ans:2, q:"关于男的，可以知道什么？",
     lines:[
      {speaker:"男", pre:"你考得真好，是怎么", blank:"学的", post:"？",
       py:"Nǐ kǎo de zhēn hǎo, shì zěnme xué de?",
       vn:"Bạn thi tốt thật đấy, học kiểu gì vậy?"},
      {speaker:"女", pre:"我每天学习，你到了家就玩儿电脑游戏、睡觉，", blank:"不看书", post:"，能学好吗？",
       py:"Wǒ měitiān xuéxí, nǐ dàole jiā jiù wánr diànnǎo yóuxì, shuìjiào, bú kàn shū, néng xuéhǎo ma?",
       vn:"Tôi ngày nào cũng học, còn bạn về đến nhà là chơi điện tử, ngủ, không đọc sách, sao mà học tốt được?"}
     ],
     explain:"男：你考得真好，是怎么学的？女：我每天学习，你到了家就玩儿电脑游戏、睡觉，不看书，能学好吗？问：关于男的，可以知道什么？ → 喜欢玩儿电脑游戏."},
    {num:15, options:["运动一下","去办事","穿衣服"], ans:0, q:"女的想让男的做什么？",
     lines:[
      {speaker:"女", pre:"今晚你吃得太多了，", blank:"出去走走吧", post:"。",
       py:"Jīnwǎn nǐ chī de tài duō le, chūqu zǒuzou ba.",
       vn:"Tối nay bạn ăn nhiều quá, ra ngoài đi dạo một chút đi."},
      {speaker:"男", pre:"行，我", blank:"穿了衣服", post:"就去。",
       py:"Xíng, wǒ chuānle yīfu jiù qù.",
       vn:"Được, tôi mặc quần áo xong là đi ngay."}
     ],
     explain:"女：今晚你吃得太多了，出去走走吧。男：行，我穿了衣服就去。问：女的想让男的做什么？ → 运动一下."},
    {num:16, options:["楼下","楼上","办公室"], ans:0, q:"王雨现在可能在哪儿？",
     lines:[
      {speaker:"男", pre:"请问", blank:"王雨在吗", post:"？",
       py:"Qǐngwèn Wáng Yǔ zài ma?",
       vn:"Xin hỏi Vương Vũ có ở đó không?"},
      {speaker:"女", pre:"对不起，他不在，", blank:"下楼去送人了", post:"。",
       py:"Duìbuqǐ, tā bú zài, xiàlóu qù sòng rén le.",
       vn:"Xin lỗi, anh ấy không có ở đây, xuống lầu tiễn khách rồi."},
      {speaker:"男", pre:"他", blank:"什么时候回来", post:"？",
       py:"Tā shénme shíhou huílai?",
       vn:"Khi nào anh ấy về?"},
      {speaker:"女", pre:"几分钟就回来，他送了人就", blank:"上来", post:"。",
       py:"Jǐ fēnzhōng jiù huílai, tā sòngle rén jiù shànglai.",
       vn:"Mấy phút nữa là về, tiễn khách xong là anh ấy lên ngay."}
     ],
     explain:"男：请问王雨在吗？女：对不起，他不在，下楼去送人了。男：他什么时候回来？女：几分钟就回来，他送了人就上来。问：王雨现在可能在哪儿？ → 楼下."},
    {num:17, options:["他拿东西","他没带手机","他要去办公楼打电话"], ans:0, q:"王东为什么还没来？",
     lines:[
      {speaker:"女", pre:"大家", blank:"都到了吗", post:"？",
       py:"Dàjiā dōu dào le ma?",
       vn:"Mọi người đến đủ chưa?"},
      {speaker:"男", pre:"", blank:"王东还没到", post:"。",
       py:"Wáng Dōng hái méi dào.",
       vn:"Vương Đông vẫn chưa đến."},
      {speaker:"女", pre:"", blank:"谁有他的电话", post:"？",
       py:"Shéi yǒu tā de diànhuà?",
       vn:"Ai có số điện thoại của anh ấy?"},
      {speaker:"男", pre:"我给他打电话了，他说去办公楼", blank:"拿了东西", post:"就过来。",
       py:"Wǒ gěi tā dǎ diànhuà le, tā shuō qù bàngōnglóu nále dōngxi jiù guòlai.",
       vn:"Tôi gọi điện cho anh ấy rồi, anh ấy nói đến tòa nhà văn phòng lấy đồ xong là qua ngay."}
     ],
     explain:"女：大家都到了吗？男：王东还没到。女：谁有他的电话？男：我给他打电话了，他说去办公楼拿了东西就过来。问：王东为什么还没来？ → 他拿东西."},
    {num:18, options:["已经到了","走北边的路","走得很快"], ans:1, q:"关于小方他们，可以知道什么？",
     lines:[
      {speaker:"女", pre:"我们真快，", blank:"30分钟就到了", post:"。",
       py:"Wǒmen zhēn kuài, sānshí fēnzhōng jiù dào le.",
       vn:"Chúng ta nhanh thật, 30 phút là đến rồi."},
      {speaker:"男", pre:"是啊，", blank:"小方他们到哪儿了", post:"？",
       py:"Shì a, Xiǎofāng tāmen dào nǎr le?",
       vn:"Đúng vậy, Tiểu Phương họ đến đâu rồi?"},
      {speaker:"女", pre:"他们走", blank:"北边那条路", post:"，可能也快到了。",
       py:"Tāmen zǒu běibiān nà tiáo lù, kěnéng yě kuài dào le.",
       vn:"Họ đi con đường phía bắc, có lẽ cũng sắp đến rồi."},
      {speaker:"男", pre:"那条路难走，可能要", blank:"50分钟", post:"。",
       py:"Nà tiáo lù nán zǒu, kěnéng yào wǔshí fēnzhōng.",
       vn:"Con đường đó khó đi, có lẽ phải mất 50 phút."}
     ],
     explain:"女：我们真快，30分钟就到了。男：是啊，小方他们到哪儿了？女：他们走北边那条路，可能也快到了。男：那条路难走，可能要50分钟。问：关于小方他们，可以知道什么？ → 走北边的路."},
    {num:19, options:["在楼上","在楼下","不知道在哪儿"], ans:0, q:"他们在哪儿？",
     lines:[
      {speaker:"男", pre:"你进来的时候", blank:"看见小白了吗", post:"？",
       py:"Nǐ jìnlai de shíhou kànjiàn Xiǎobái le ma?",
       vn:"Lúc bạn vào có thấy Tiểu Bạch không?"},
      {speaker:"女", pre:"", blank:"没看见", post:"。你找他有事？",
       py:"Méi kànjiàn. Nǐ zhǎo tā yǒu shì?",
       vn:"Không thấy. Bạn tìm cậu ấy có việc gì à?"},
      {speaker:"男", pre:"我让他下去", blank:"买午饭", post:"，还没回来。",
       py:"Wǒ ràng tā xiàqu mǎi wǔfàn, hái méi huílai.",
       vn:"Tôi bảo cậu ấy xuống mua cơm trưa, vẫn chưa về."},
      {speaker:"女", pre:"", blank:"给他打个电话问问吧", post:"。",
       py:"Gěi tā dǎ ge diànhuà wènwen ba.",
       vn:"Gọi điện hỏi cậu ấy thử xem."}
     ],
     explain:"男：你进来的时候看见小白了吗？女：没看见。你找他有事？男：我让他下去买午饭，还没回来。女：给他打个电话问问吧。问：他们在哪儿？ → 在楼上 (vì nói 小白 \"下去\" mua cơm, nghĩa là 2 người đang nói chuyện đang ở trên lầu)."},
    {num:20, options:["还没回家","不着急","很着急"], ans:2, q:"关于女的，可以知道什么？",
     lines:[
      {speaker:"男", pre:"", blank:"你怎么还不吃饭", post:"？",
       py:"Nǐ zěnme hái bù chīfàn?",
       vn:"Sao bạn vẫn chưa ăn cơm vậy?"},
      {speaker:"女", pre:"", blank:"东东还没回来呢", post:"。",
       py:"Dōngdōng hái méi huílai ne.",
       vn:"Đông Đông vẫn chưa về mà."},
      {speaker:"男", pre:"", blank:"你别着急", post:"，吃饭吧。",
       py:"Nǐ bié zháojí, chīfàn ba.",
       vn:"Bạn đừng vội, ăn cơm đi."},
      {speaker:"女", pre:"都这么晚了，我", blank:"能不着急吗", post:"？",
       py:"Dōu zhème wǎn le, wǒ néng bù zháojí ma?",
       vn:"Muộn thế này rồi, tôi sao mà không sốt ruột được?"}
     ],
     explain:"男：你怎么还不吃饭？女：东东还没回来呢。男：你别着急，吃饭吧。女：都这么晚了，我能不着急吗？问：关于女的，可以知道什么？ → 很着急 (能不着急吗 = phản vấn, ý nghĩa thực chất là \"rất sốt ruột\")."}
  ]
};

// ══════════════════════════════════════════
// PHẦN 3a · ĐIỀN TỪ
// ══════════════════════════════════════════
var fillData = [
  {pre:'我们经理的', blank:'办公室', post:'比我们的大多了，还有一张很大的桌子。', hint:'(văn phòng)', ans:'办公室', exp:'办公室 = văn phòng; ôn câu so sánh A 比 B + tính từ + 多了 (HSK2).'},
  {pre:'A：您好，我找王经理。B：我是他的', blank:'秘书', post:'，他正在开会，有什么问题您可以问我。', hint:'(thư ký)', ans:'秘书', exp:'秘书 = thư ký, người nhận điện thoại thay giám đốc; 正在 + động từ = đang (HSK2).'},
  {pre:'哥哥的', blank:'腿', post:'很长，他走路比我快多了。', hint:'(chân, cẳng chân)', ans:'腿', exp:'腿 = chân (phần từ hông đến cổ chân); 脚 mới là bàn chân.'},
  {pre:'我们学校里有很多', blank:'树', post:'，中午坐在下面看书一点儿也不热。', hint:'(cây)', ans:'树', exp:'树 = cây; ôn 一点儿也不 + tính từ = chẳng … chút nào (Bài 1).'},
  {pre:'A：这次的作业', blank:'难', post:'不难？B：不太难，我一个小时就写完了。', hint:'(khó)', ans:'难', exp:'Câu hỏi chính phản: 难不难 = có khó không; câu trả lời dùng 不太难.'},
  {pre:'门口有一', blank:'辆', post:'红色的自行车，是谁的？', hint:'(chiếc — dùng cho xe)', ans:'辆', exp:'Xe đạp, ô tô, taxi đều dùng lượng từ 辆: 一辆自行车.'},
  {pre:'天阴了，你', blank:'拿', post:'一把伞再走吧。', hint:'(cầm, lấy)', ans:'拿', exp:'拿 + đồ vật = cầm lấy; 一把伞 = một cái ô (把 là lượng từ cho đồ có tay cầm).'},
  {pre:'A：你是不是', blank:'胖', post:'了？B：是啊，过年的时候吃得太多了。', hint:'(béo, mập)', ans:'胖', exp:'胖了 = béo lên (了 chỉ sự thay đổi); ôn bổ ngữ trạng thái 吃得太多 (HSK2).'},
  {pre:'A：你汉语说得这么好，在中国住过吧？B：没有，', blank:'其实', post:'我一次也没去过中国。', hint:'(thật ra)', ans:'其实', exp:'其实 = thật ra, nói sự thật khác điều người kia nghĩ; ôn 一次也没 + V + 过.'},
  {pre:'A：我已经到你家楼下了，你快下', blank:'来', post:'吧。B：好，我穿好衣服就下去。', hint:'(lại đây — về phía người nói)', ans:'来', exp:'A đứng dưới nhà gọi B đi về phía mình nên nói 下来; B đi xa khỏi chỗ mình nên nói 下去.'},
  {pre:'妈妈在楼上叫我，我得上', blank:'去', post:'看看。', hint:'(đi — rời xa chỗ người nói)', ans:'去', exp:'Tôi ở dưới, đi lên chỗ mẹ (xa chỗ mình) → 上去; nếu mẹ gọi tôi lên chỗ mẹ thì mẹ nói 上来.'},
  {pre:'他每天到了公司', blank:'就', post:'喝一杯咖啡，不喝就不想工作。', hint:'(là … ngay)', ans:'就', exp:'V了 + tân ngữ + 就 + V: làm xong việc này là làm ngay việc kia; 就 đứng trước động từ thứ hai.'},
  {pre:'A：我昨天玩儿游戏玩儿到早上四点。B：玩儿到四点，你今天', blank:'能', post:'不累吗？', hint:'(có thể … sao)', ans:'能', exp:'能 + 不 + tính từ + 吗 = sao mà không … được (chắc chắn là mệt); ôn 游戏 (Bài 1).'},
];

// ══════════════════════════════════════════
// PHẦN 3b · SẮP XẾP
// ══════════════════════════════════════════
var sortData = [
  {words:['他','下了课','就','回家','复习','了','。'], ans:'他下了课就回家复习了。', audio:'他下了课就回家复习了。'},
  {words:['周太太','每天','吃了','早饭','就','去','公园','走走','。'], ans:'周太太每天吃了早饭就去公园走走。', audio:'周太太每天吃了早饭就去公园走走。'},
  {words:['秘书','给','我们','拿来','两杯','咖啡','。'], ans:'秘书给我们拿来两杯咖啡。', audio:'秘书给我们拿来两杯咖啡。'},
  {words:['你','天天','坐着','玩儿','游戏','，','眼睛','能','不','疼','吗','？'], ans:'你天天坐着玩儿游戏，眼睛能不疼吗？', audio:'你天天坐着玩儿游戏，眼睛能不疼吗？'},
  {words:['那辆','白色','的','车','是','我们','经理','的','。'], ans:'那辆白色的车是我们经理的。', audio:'那辆白色的车是我们经理的。'},
  {words:['大家','都','觉得','他','胖','，','其实','他','比','我','还','瘦','。'], ans:'大家都觉得他胖，其实他比我还瘦。', audio:'大家都觉得他胖，其实他比我还瘦。'},
  {words:['周明','回','北方','去','了','，','下个月','回来','。'], ans:'周明回北方去了，下个月回来。', audio:'周明回北方去了，下个月回来。'},
  {words:['这个','汉字','很','容易','写','错','。'], ans:'这个汉字很容易写错。', audio:'这个汉字很容易写错。'},
];

// ══════════════════════════════════════════
// PHẦN 3c · SỬA LỖI SAI
// ══════════════════════════════════════════
var errorFixData = [
  {wrong:'周经理回去办公室了。',
   opts:['周经理回去了办公室。','周经理回办公室去了。','周经理去回办公室了。','周经理回办公室了去。'], ans:1,
   exp:'Tân ngữ chỉ nơi chốn đứng GIỮA động từ và 来/去: 回 + 办公室 + 去.'},
  {wrong:'你到了北京给我就打电话。',
   opts:['你到了北京就给我打电话。','你就到了北京给我打电话。','你到北京了给我就打电话。','你到了北京给我打电话就。'], ans:0,
   exp:'V了……就V……: 就 đứng ngay trước cụm động từ thứ hai (给我打电话), không chen vào giữa 给我 và 打电话.'},
  {wrong:'他这次考试得了一百分，他能高兴不吗？',
   opts:['他这次考试得了一百分，他能没高兴吗？','他这次考试得了一百分，他能是不高兴吗？','他这次考试得了一百分，他能高兴吗不？','他这次考试得了一百分，他能不高兴吗？'], ans:3,
   exp:'Câu phản vấn 能 + 不 + tính từ + 吗 = sao mà không vui được; dùng 不 (không phải 没) và không chèn 是.'},
  {wrong:'我家楼下有两个自行车。',
   opts:['我家楼下有二辆自行车。','我家楼下有两把自行车。','我家楼下有两辆自行车。','我家楼下两辆自行车有。'], ans:2,
   exp:'Xe dùng lượng từ 辆 (把 dùng cho ô, ghế…); trước lượng từ nói 两, không nói 二.'},
  {wrong:'今天的作业是很难。',
   opts:['今天的作业很难。','今天的作业难很。','今天的作业是难的很。','今天的作业太难很了。'], ans:0,
   exp:'难 là tính từ: chủ ngữ + 很 + 难, không chèn 是 (lỗi do tiếng Việt nói “là”).'},
  {wrong:'他比我很胖。',
   opts:['他比我多胖了。','他比我胖多了。','他比我非常胖。','他很比我胖。'], ans:1,
   exp:'Câu 比 không dùng 很/非常; muốn nói “hơn nhiều” thì thêm 多了 sau tính từ (ôn HSK2).'},
  {wrong:'经理开会在办公室。',
   opts:['经理开会在办公室里。','经理在开会办公室。','经理开在办公室会。','经理在办公室开会。'], ans:3,
   exp:'在 + nơi chốn đứng TRƯỚC động từ: 在办公室开会 — không đặt sau như tiếng Việt “họp ở văn phòng”.'},
  {wrong:'外面冷，你们快进来教室吧。',
   opts:['外面冷，你们快进了教室来吧。','外面冷，你们快进教室吧来。','外面冷，你们快进教室来吧。','外面冷，你们快教室进来吧。'], ans:2,
   exp:'Động từ + nơi chốn + 来: 进教室来; 来 không đứng trước tân ngữ chỉ nơi chốn, 了 không chen vào.'},
];

// ══════════════════════════════════════════
// PHẦN 4 · LUYỆN NÓI (dùng câu hỏi đọc-hiểu thật từ giáo trình)
// ══════════════════════════════════════════
var speakingData = {
  mode: 'ai-speak',
  intro: 'Mỗi câu là một tình huống thật, trả lời về chính bạn bằng từ và mẫu câu của Bài 2 (động từ + 来/去, V了……就V……, 能……吗). Bấm 🎙️ rồi nói bằng tiếng Trung — AI sẽ nghe, ghi lại câu bạn nói và chấm theo Nội dung · Mẫu câu · Từ vựng · Độ trôi chảy. Tự trả lời trước rồi mới mở “Câu mẫu” để đối chiếu.',
  tasks: [
    {
      situation: 'Bạn đang ở ngoài, bạn cùng phòng gọi điện hỏi bạn ở đâu và khi nào về.',
      q_zh: '我做好饭了，你什么时候到家？七点前能回来吗？',
      q_py: 'Wǒ zuòhǎo fàn le, nǐ shénme shíhou dào jiā? Qī diǎn qián néng huílai ma?',
      q_vn: 'Mình nấu xong cơm rồi, bao giờ bạn về đến nhà? Trước bảy giờ về được không?',
      grammar: { label: 'Động từ + 来/去 (回去, 上来, 下去…)', any: ['回去', '回来', '上来', '上去', '下来', '下去', '进来', '进去', '过来', '过去'] },
      need: [
        { label: 'Nói đang ở đâu', any: ['商店', '公司', '学校', '饭馆', '楼下', '医院', '公园', '朋友家'] },
        { label: 'Nói bao lâu nữa về', any: ['点', '分钟', '小时', '能'] }
      ],
      bonus: { label: 'Dùng 就 để nói làm xong là về ngay', any: ['就'] },
      vocab: ['楼', '回去'],
      minLen: 14,
      sample: '我在楼下的商店买水果呢，买好了就回去，十分钟以后到家。',
      sample_py: 'Wǒ zài lóu xià de shāngdiàn mǎi shuǐguǒ ne, mǎihǎo le jiù huíqu, shí fēnzhōng yǐhòu dào jiā.',
      sample_vn: 'Mình đang mua hoa quả ở cửa hàng dưới nhà, mua xong là về, mười phút nữa tới nhà.',
      tip: 'Người kia ở nhà hỏi “回来”, bạn ở ngoài trả lời “回去” — chọn 来/去 theo chỗ người nói.'
    },
    {
      situation: 'Bạn mới quen hỏi về buổi sáng của bạn trước khi đi học / đi làm.',
      q_zh: '你每天早上起床以后做什么？几点去学校？',
      q_py: 'Nǐ měitiān zǎoshang qǐchuáng yǐhòu zuò shénme? Jǐ diǎn qù xuéxiào?',
      q_vn: 'Mỗi sáng sau khi dậy bạn làm gì? Mấy giờ đi học?',
      grammar: { label: 'V了……就V…… (xong việc này là làm ngay việc kia)', any: ['就'] },
      need: [
        { label: 'Kể việc làm buổi sáng', any: ['洗', '吃', '跑步', '喝', '看', '运动'] },
        { label: 'Nói giờ đi', any: ['点'] }
      ],
      bonus: { label: 'Ôn V + 好 (吃好, 准备好)', any: ['好了', '准备好', '吃好'] },
      vocab: ['就'],
      minLen: 16,
      sample: '早上我喝了一杯牛奶就去跑步，跑步回来吃个面包，七点就去学校了。',
      sample_py: 'Zǎoshang wǒ hēle yì bēi niúnǎi jiù qù pǎobù, pǎobù huílai chī ge miànbāo, qī diǎn jiù qù xuéxiào le.',
      sample_vn: 'Buổi sáng tôi uống một cốc sữa là đi chạy bộ, chạy về ăn cái bánh mì, bảy giờ thì đi học.',
      tip: '了 đứng ngay sau động từ thứ nhất (喝了一杯牛奶), 就 đứng trước động từ thứ hai (就去跑步).'
    },
    {
      situation: 'Đồng nghiệp than cả tuần làm việc đến khuya. Hãy đáp bằng một câu phản vấn rồi khuyên họ.',
      q_zh: '我这个星期每天都工作到晚上十一点，觉得很累。',
      q_py: 'Wǒ zhège xīngqī měitiān dōu gōngzuò dào wǎnshang shíyī diǎn, juéde hěn lèi.',
      q_vn: 'Tuần này ngày nào mình cũng làm đến mười một giờ đêm, thấy mệt lắm.',
      grammar: { label: 'Câu phản vấn 能……吗？(sao mà … được)', any: ['能'] },
      need: [
        { label: 'Khuyên nghỉ ngơi', any: ['休息', '睡觉', '睡'] },
        { label: 'Nói lúc nào nghỉ', any: ['周末', '今天', '明天', '晚上'] }
      ],
      bonus: { label: 'Dùng 别 để khuyên', any: ['别'] },
      vocab: ['能'],
      minLen: 14,
      sample: '天天工作到十一点，身体能好吗？这个周末别工作了，在家好好休息吧。',
      sample_py: 'Tiāntiān gōngzuò dào shíyī diǎn, shēntǐ néng hǎo ma? Zhège zhōumò bié gōngzuò le, zài jiā hǎohāo xiūxi ba.',
      sample_vn: 'Ngày nào cũng làm đến mười một giờ, sức khoẻ sao mà tốt được? Cuối tuần này đừng làm nữa, ở nhà nghỉ ngơi cho tử tế nhé.',
      tip: '能好吗 = “sao mà tốt được” (chắc chắn không tốt); 能不累吗 = “sao mà không mệt” — 不 đứng ngay trước tính từ.'
    },
    {
      situation: 'Lâu không gặp, một người bạn khen bạn gầy đi và hỏi bạn làm thế nào.',
      q_zh: '你瘦了！你是怎么做的？',
      q_py: 'Nǐ shòu le! Nǐ shì zěnme zuò de?',
      q_vn: 'Bạn gầy đi rồi! Bạn đã làm thế nào vậy?',
      grammar: { label: '其实 + sự thật khác điều người kia nghĩ', any: ['其实'] },
      need: [
        { label: 'Nói đã vận động gì', any: ['跑步', '运动', '走路', '游泳', '打篮球', '踢足球'] },
        { label: 'Nói kết quả', any: ['瘦', '公斤', '胖'] }
      ],
      bonus: { label: 'Dùng V了……就V……', any: ['就'] },
      vocab: ['其实', '瘦', '胖'],
      minLen: 16,
      sample: '谢谢！其实我没少吃饭，我每天下了班就去游泳，两个月瘦了四公斤。',
      sample_py: 'Xièxie! Qíshí wǒ méi shǎo chī fàn, wǒ měitiān xiàle bān jiù qù yóuyǒng, liǎng ge yuè shòule sì gōngjīn.',
      sample_vn: 'Cảm ơn! Thật ra mình không ăn ít đi, mỗi ngày tan làm là mình đi bơi, hai tháng gầy đi bốn cân.',
      tip: 'Gầy đi / béo lên bao nhiêu: 瘦了 / 胖了 + số + 公斤.'
    },
    {
      situation: 'Trời mưa, bạn cùng lớp không mang ô và hỏi bạn có ô không. Ô của bạn để trên văn phòng.',
      q_zh: '下雨了！我今天没带伞，你带了吗？',
      q_py: 'Xiàyǔ le! Wǒ jīntiān méi dài sǎn, nǐ dài le ma?',
      q_vn: 'Mưa rồi! Hôm nay mình không mang ô, bạn có mang không?',
      grammar: { label: 'Động từ + 来/去 (上去, 拿来, 下来…)', any: ['上去', '下去', '上来', '下来', '回去', '拿来', '拿去', '进去', '过来'] },
      need: [
        { label: 'Dùng lượng từ 把 với ô', any: ['一把', '两把', '这把', '那把'] },
        { label: 'Nói chỗ để ô', any: ['办公室', '楼上', '教室', '家'] }
      ],
      vocab: ['把', '伞', '拿', '办公室'],
      minLen: 16,
      sample: '有，我办公室里有两把伞，我们一起上去拿吧，你拿一把回家。',
      sample_py: 'Yǒu, wǒ bàngōngshì li yǒu liǎng bǎ sǎn, wǒmen yìqǐ shàngqu ná ba, nǐ ná yì bǎ huí jiā.',
      sample_vn: 'Có, trong văn phòng mình có hai cái ô, chúng mình cùng lên lấy nhé, bạn cầm một cái về nhà.',
      tip: 'Ô dùng lượng từ 把: 一把伞; nói 两把, không nói 二把.'
    }
  ]
};

// ══════════════════════════════════════════
// LUYỆN DỊCH (Việt → Trung)
// ══════════════════════════════════════════
var translateData = [
  {vi:'Giám đốc về đến văn phòng là gọi thư ký vào ngay.', zh:'经理到了办公室就叫秘书进去。', py:'Jīnglǐ dàole bàngōngshì jiù jiào mìshū jìnqu.'},
  {vi:'Chân đau thế này, bạn đi bộ về nhà sao được?', zh:'脚这么疼，你能走回家吗？', py:'Jiǎo zhème téng, nǐ néng zǒu huí jiā ma?'},
  {vi:'Cái ô này là của bà Chu, ngày mai tôi mang trả lại cho bà ấy.', zh:'这把伞是周太太的，明天我给她送回去。', py:'Zhè bǎ sǎn shì Zhōu tàitai de, míngtiān wǒ gěi tā sòng huíqu.'},
  {vi:'Thật ra bài thi lần này không khó, dễ hơn lần trước nhiều.', zh:'其实这次考试不难，比上次容易多了。', py:'Qíshí zhè cì kǎoshì bù nán, bǐ shàng cì róngyì duō le.'},
  {vi:'Nhà tôi ở ngay trong tòa nhà phía sau trường, đi bộ năm phút là tới.', zh:'我家就在学校后面的楼里，走路五分钟就到了。', py:'Wǒ jiā jiù zài xuéxiào hòumiàn de lóu li, zǒulù wǔ fēnzhōng jiù dào le.'},
];

// ══════════════════════════════════════════
// LUYỆN DỊCH (Trung → Việt) — nội dung KHÁC với chiều Việt→Trung ở trên
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:'Chiếc xe này là của vợ tôi, tôi rất ít khi lái.', zh:'这辆车是我太太的，我很少开。', py:'Zhè liàng chē shì wǒ tàitai de, wǒ hěn shǎo kāi.'},
  {vi:'Dưới gốc cây có rất nhiều người đang ngồi đợi xe buýt.', zh:'树下坐着很多人，都在等公共汽车。', py:'Shù xià zuòzhe hěn duō rén, dōu zài děng gōnggòng qìchē.'},
  {vi:'Tuy ngày nào anh ấy cũng đi chạy bộ nhưng chẳng gầy đi được cân nào.', zh:'虽然他每天都去跑步，但是他一公斤也没瘦。', py:'Suīrán tā měitiān dōu qù pǎobù, dànshì tā yì gōngjīn yě méi shòu.'},
  {vi:'Bạn xuống đi, mình đang đợi bạn ở cửa tòa nhà.', zh:'你下来吧，我在楼门口等你。', py:'Nǐ xiàlai ba, wǒ zài lóu ménkǒu děng nǐ.'},
];
