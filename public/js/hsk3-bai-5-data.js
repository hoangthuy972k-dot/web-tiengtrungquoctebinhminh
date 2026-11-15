// ══════════════════════════════════════════
// DATA — HSK3 Bài 5: 我最近越来越胖了 (Dạo này tôi ngày càng béo lên)
// Nguồn: HSK标准教程3 (Giáo trình chuẩn HSK 3 — nhantriviet.com)
// ══════════════════════════════════════════
var vocabData = [
  {
    "n": 1,
    "zh": "发烧",
    "py": "fā shāo",
    "pos": "Động từ",
    "vn": "sốt",
    "hv": "phát thiêu",
    "em": "🤒",
    "lesson": 1,
    "explain": [
      "Thân nhiệt cơ thể tăng cao hơn bình thường, thường là dấu hiệu của bệnh."
    ],
    "usage": "Động từ ly hợp; thường đi cùng 有点儿/一点儿: 有点儿发烧.",
    "collo": [
      "有点儿发烧",
      "发高烧",
      "退烧"
    ],
    "ex_zh": "前几天有点儿发烧，现在好多了。",
    "ex_py": "Qián jǐ tiān yǒudiǎnr fā shāo, xiànzài hǎoduō le.",
    "ex_vn": "Mấy hôm trước hơi sốt, giờ đỡ nhiều rồi.",
    "exList": [
      {
        "zh": "前几天有点儿发烧，现在好多了。",
        "py": "Qián jǐ tiān yǒudiǎnr fā shāo, xiànzài hǎoduō le.",
        "vn": "Mấy hôm trước hơi sốt, giờ đỡ nhiều rồi."
      },
      {
        "zh": "你不是发烧了吗？怎么还来上班？",
        "py": "Nǐ bú shì fā shāo le ma? Zěnme hái lái shàngbān?",
        "vn": "Bạn chẳng phải bị sốt sao? Sao vẫn đến làm vậy?"
      },
      {
        "zh": "我是不是发烧了？怎么总是觉得冷？",
        "py": "Wǒ shì bu shì fā shāo le? Zěnme zǒngshì juéde lěng?",
        "vn": "Có phải tôi bị sốt không? Sao cứ thấy lạnh mãi vậy?"
      }
    ],
    "hanzi": [
      {
        "c": "烧",
        "p": "shāo",
        "type": "左右结构 · Trái-phải",
        "st": 10,
        "ord": "火 trái → 尧 phải",
        "rad": "火 (hỏa – lửa)",
        "mean": "đốt cháy; sốt",
        "tip": "火(lửa) + 尧(cao ngất) → lửa cháy cao, mở rộng nghĩa cơ thể \"nóng như lửa\" = SỐT.",
        "cf": "浇 (jiāo – \"tưới nước\", có 氵 thay vì 火\")",
        "w": "发烧 / 退烧"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Vì tôi hơi sốt nên hôm nay tôi không đi làm.",
        "answer": "因为我有点儿发烧，所以今天不去上班。",
        "answerPy": "Yīnwèi wǒ yǒudiǎnr fā shāo, suǒyǐ jīntiān bú qù shàngbān.",
        "note": "因为……所以…… nêu nguyên nhân — kết quả.",
        "pair": "因为……所以……"
      },
      {
        "promptLang": "vi",
        "prompt": "Nếu con bạn bị sốt thì nên đưa đi bệnh viện.",
        "answer": "如果你的孩子发烧了，就应该带他去医院。",
        "answerPy": "Rúguǒ nǐ de háizi fā shāo le, jiù yīnggāi dài tā qù yīyuàn.",
        "note": "如果……就…… diễn tả giả thiết — kết quả (ôn lại 带 đã học ở Bài 1).",
        "pair": "如果……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "有点儿发烧",
        "py": "yǒudiǎnr fā shāo",
        "vn": "hơi sốt"
      },
      {
        "zh": "发高烧",
        "py": "fā gāo shāo",
        "vn": "sốt cao"
      },
      {
        "zh": "发烧了",
        "py": "fā shāo le",
        "vn": "sốt rồi"
      },
      {
        "zh": "发了两天烧",
        "py": "fā le liǎng tiān shāo",
        "vn": "sốt hai ngày"
      },
      {
        "zh": "退烧",
        "py": "tuì shāo",
        "vn": "hạ sốt"
      }
    ],
    "patterns": [
      {
        "s": "发 + 了 + thời lượng + 烧",
        "m": "发烧 là từ ly hợp: 发了两天烧 ✓"
      },
      {
        "s": "有点儿 + 发烧",
        "m": "Hơi sốt — 有点儿 dùng cho điều không mong muốn"
      }
    ]
  },
  {
    "n": 2,
    "zh": "为",
    "py": "wèi",
    "pos": "Giới từ",
    "vn": "cho, vì",
    "hv": "vị",
    "em": "🎁",
    "lesson": 1,
    "explain": [
      "Giới từ chỉ đối tượng hưởng lợi hoặc mục đích của hành động."
    ],
    "usage": "Giới từ, đứng trước đối tượng: 为 + [đối tượng] + động từ (为你买).",
    "collo": [
      "为你买",
      "为朋友准备",
      "为孩子做饭"
    ],
    "ex_zh": "这是我为你买的绿茶，很不错。",
    "ex_py": "Zhè shì wǒ wèi nǐ mǎi de lǜchá, hěn búcuò.",
    "ex_vn": "Đây là trà xanh tôi mua cho bạn, ngon lắm đấy.",
    "exList": [
      {
        "zh": "这是我为你买的绿茶，很不错。",
        "py": "Zhè shì wǒ wèi nǐ mǎi de lǜchá, hěn búcuò.",
        "vn": "Đây là trà xanh tôi mua cho bạn, ngon lắm đấy."
      },
      {
        "zh": "为什么？怎么了？",
        "py": "Wèi shénme? Zěnme le?",
        "vn": "Sao vậy? Có chuyện gì thế?"
      },
      {
        "zh": "妈妈每天都为我们做饭。",
        "py": "Māma měitiān dōu wèi wǒmen zuò fàn.",
        "vn": "Mẹ mỗi ngày đều nấu cơm cho chúng tôi."
      }
    ],
    "hanzi": [
      {
        "c": "为",
        "p": "wèi",
        "type": "独体字 · Chữ đơn",
        "st": 4,
        "ord": "nét liền",
        "rad": "丶 (chủ)",
        "mean": "vì, cho",
        "tip": "Chữ giản thể từ 爲 (hình con voi đang làm việc) → nghĩa \"làm việc VÌ ai đó\", mở rộng thành giới từ CHO/VÌ.",
        "cf": "办 (bàn – \"làm việc\", có 力 hai bên\")",
        "w": "为你 / 为了 / 因为"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Vì hôm nay là sinh nhật bạn, nên đây là chiếc bánh tôi mua cho bạn.",
        "answer": "因为今天是你的生日，所以这是我为你买的蛋糕。",
        "answerPy": "Yīnwèi jīntiān shì nǐ de shēngrì, suǒyǐ zhè shì wǒ wèi nǐ mǎi de dàngāo.",
        "note": "为 + ai + V — làm gì cho ai; 蛋糕 là từ bài 4.",
        "pair": "因为……所以……"
      },
      {
        "promptLang": "vi",
        "prompt": "Chỉ cần bạn vui thì tôi làm gì cho bạn cũng được.",
        "answer": "只要你高兴，我为你做什么都可以。",
        "answerPy": "Zhǐyào nǐ gāoxìng, wǒ wèi nǐ zuò shénme dōu kěyǐ.",
        "note": "只要……就…… (ở đây dùng 都) diễn tả điều kiện đủ.",
        "pair": "只要……都……"
      }
    ],
    "colloFull": [
      {
        "zh": "为你买",
        "py": "wèi nǐ mǎi",
        "vn": "mua cho bạn"
      },
      {
        "zh": "为孩子做饭",
        "py": "wèi háizi zuò fàn",
        "vn": "nấu cơm cho con"
      },
      {
        "zh": "为朋友准备",
        "py": "wèi péngyou zhǔnbèi",
        "vn": "chuẩn bị cho bạn"
      },
      {
        "zh": "为他高兴",
        "py": "wèi tā gāoxìng",
        "vn": "mừng cho anh ấy"
      },
      {
        "zh": "为大家服务",
        "py": "wèi dàjiā fúwù",
        "vn": "phục vụ mọi người"
      }
    ],
    "patterns": [
      {
        "s": "为 + ai + V",
        "m": "Làm gì cho ai"
      },
      {
        "s": "为 (wèi, vì ai) ≠ 为 (wéi, là) — ở bài này đọc wèi"
      }
    ]
  },
  {
    "n": 3,
    "zh": "照顾",
    "py": "zhàogù",
    "pos": "Động từ",
    "vn": "chăm sóc",
    "hv": "chiếu cố",
    "em": "🤲",
    "lesson": 2,
    "explain": [
      "Quan tâm, trông nom, giúp đỡ ai đó, thường dùng khi người đó ốm đau hoặc còn nhỏ."
    ],
    "usage": "Động từ, mang tân ngữ trực tiếp: 照顾 + [người] (照顾他).",
    "collo": [
      "照顾他",
      "在家照顾",
      "互相照顾"
    ],
    "ex_zh": "我儿子生病了，我要在家照顾他。",
    "ex_py": "Wǒ érzi shēng bìng le, wǒ yào zài jiā zhàogù tā.",
    "ex_vn": "Con trai tôi bị ốm, tôi phải ở nhà chăm sóc cháu.",
    "exList": [
      {
        "zh": "我儿子生病了，我要在家照顾他。",
        "py": "Wǒ érzi shēng bìng le, wǒ yào zài jiā zhàogù tā.",
        "vn": "Con trai tôi bị ốm, tôi phải ở nhà chăm sóc cháu."
      },
      {
        "zh": "我感冒好了，明天你不用来照顾我了。",
        "py": "Wǒ gǎnmào hǎo le, míngtiān nǐ búyòng lái zhàogù wǒ le.",
        "vn": "Tôi khỏi cảm rồi, ngày mai bạn không cần đến chăm sóc tôi nữa."
      },
      {
        "zh": "谢谢你这几天一直照顾我。",
        "py": "Xièxie nǐ zhè jǐ tiān yìzhí zhàogù wǒ.",
        "vn": "Cảm ơn bạn mấy hôm nay đã luôn chăm sóc tôi."
      }
    ],
    "hanzi": [
      {
        "c": "顾",
        "p": "gù",
        "type": "左右结构 · Trái-phải",
        "st": 10,
        "ord": "厄 trái → 页 phải",
        "rad": "页 (hiệt – đầu)",
        "mean": "chăm sóc, đoái hoài",
        "tip": "页(đầu, ý chỉ ngoảnh đầu nhìn) → NGOẢNH ĐẦU quan tâm đến ai đó = CHĂM SÓC.",
        "cf": "雇 (gù – \"thuê\", có 隹 thay vì 页\")",
        "w": "照顾 / 顾客"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Vì con trai tôi bị ốm, nên tôi phải ở nhà chăm sóc cháu.",
        "answer": "因为我儿子生病了，所以我要在家照顾他。",
        "answerPy": "Yīnwèi wǒ érzi shēngbìng le, suǒyǐ wǒ yào zài jiā zhàogù tā.",
        "note": "照顾 + ai — chăm sóc ai.",
        "pair": "因为……所以……"
      },
      {
        "promptLang": "vi",
        "prompt": "Chỉ cần bạn chăm sóc mẹ tốt thì mẹ sẽ nhanh khỏe lại.",
        "answer": "只要你把妈妈照顾好，她就会很快好起来。",
        "answerPy": "Zhǐyào nǐ bǎ māma zhàogù hǎo, tā jiù huì hěn kuài hǎoqǐlai.",
        "note": "只要……就…… diễn tả điều kiện đủ (ôn lại 把 đã học ở Bài 2).",
        "pair": "只要……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "照顾孩子",
        "py": "zhàogù háizi",
        "vn": "chăm sóc con"
      },
      {
        "zh": "照顾病人",
        "py": "zhàogù bìngrén",
        "vn": "chăm người ốm"
      },
      {
        "zh": "在家照顾",
        "py": "zài jiā zhàogù",
        "vn": "ở nhà chăm sóc"
      },
      {
        "zh": "互相照顾",
        "py": "hùxiāng zhàogù",
        "vn": "chăm sóc lẫn nhau"
      },
      {
        "zh": "照顾好自己",
        "py": "zhàogù hǎo zìjǐ",
        "vn": "tự chăm sóc mình cho tốt"
      }
    ],
    "patterns": [
      {
        "s": "照顾 + ai",
        "m": "Chăm sóc ai"
      },
      {
        "s": "照顾好 + ai",
        "m": "Chăm sóc ai cho chu đáo — 好 là bổ ngữ kết quả"
      }
    ]
  },
  {
    "n": 4,
    "zh": "用",
    "py": "yòng",
    "pos": "Động từ",
    "vn": "cần, dùng",
    "hv": "dụng",
    "em": "❓",
    "lesson": 2,
    "explain": [
      "Cần thiết phải làm gì; thường dùng ở dạng phủ định 不用 (không cần)."
    ],
    "usage": "Động từ; 不用 + V = không cần làm gì.",
    "collo": [
      "不用",
      "不用去",
      "有用"
    ],
    "ex_zh": "不用去医院，昨天吃了感冒药，现在好一些了。",
    "ex_py": "Búyòng qù yīyuàn, zuótiān chīle gǎnmào yào, xiànzài hǎo yìxiē le.",
    "ex_vn": "Không cần đi bệnh viện đâu, hôm qua uống thuốc cảm rồi, giờ đỡ hơn một chút rồi.",
    "exList": [
      {
        "zh": "不用去医院，昨天吃了感冒药，现在好一些了。",
        "py": "Búyòng qù yīyuàn, zuótiān chīle gǎnmào yào, xiànzài hǎo yìxiē le.",
        "vn": "Không cần đi bệnh viện đâu, hôm qua uống thuốc cảm rồi, giờ đỡ hơn một chút rồi."
      },
      {
        "zh": "那不用再吃药了。",
        "py": "Nà búyòng zài chī yào le.",
        "vn": "Vậy thì không cần uống thuốc nữa."
      },
      {
        "zh": "医生，我的病用吃药吗？",
        "py": "Yīshēng, wǒ de bìng yòng chī yào ma?",
        "vn": "Bác sĩ, bệnh của tôi có cần uống thuốc không?"
      }
    ],
    "hanzi": [
      {
        "c": "用",
        "p": "yòng",
        "type": "独体字 · Chữ đơn (tượng hình)",
        "st": 5,
        "ord": "nét liền, hình cái thùng/ống",
        "rad": "用",
        "mean": "dùng, cần",
        "tip": "Chữ tượng hình mô phỏng một vật dụng (ống/thùng) → nghĩa DÙNG, mở rộng 不用 = KHÔNG CẦN.",
        "cf": "甩 (shuǎi – \"vung, ném\", thêm 1 nét vào 用\")",
        "w": "不用 / 用了 / 有用"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Đừng lo, chỉ cần uống thuốc là sẽ đỡ hơn.",
        "answer": "不用着急，只要吃了药，就会好一些。",
        "answerPy": "Búyòng zháojí, zhǐyào chīle yào, jiù huì hǎo yìxiē.",
        "note": "不用 là phủ định của 得 (phải); 着急 là từ bài 1.",
        "pair": "只要……就……"
      },
      {
        "promptLang": "vi",
        "prompt": "Nếu bạn không cảm thấy đau nữa thì không cần đi khám nữa.",
        "answer": "如果你不觉得疼了，就不用再去看病了。",
        "answerPy": "Rúguǒ nǐ bù juéde téng le, jiù búyòng zài qù kànbìng le.",
        "note": "如果……就…… diễn tả giả thiết — kết quả (ôn lại 疼 đã học ở Bài 2).",
        "pair": "如果……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "不用去",
        "py": "bú yòng qù",
        "vn": "không cần đi"
      },
      {
        "zh": "不用谢",
        "py": "bú yòng xiè",
        "vn": "không có gì"
      },
      {
        "zh": "不用着急",
        "py": "bú yòng zháojí",
        "vn": "không cần vội"
      },
      {
        "zh": "有用",
        "py": "yǒu yòng",
        "vn": "có ích"
      },
      {
        "zh": "用不用",
        "py": "yòng bú yòng",
        "vn": "có cần không"
      }
    ],
    "patterns": [
      {
        "s": "不用 + V",
        "m": "Không cần làm gì"
      },
      {
        "s": "不用 là phủ định của 得 (děi, phải) — không nói 不得"
      }
    ]
  },
  {
    "n": 5,
    "zh": "感冒",
    "py": "gǎnmào",
    "pos": "Động từ",
    "vn": "bị cảm",
    "hv": "cảm mạo",
    "em": "🤧",
    "lesson": 2,
    "explain": [
      "Bệnh cảm cúm thông thường, do nhiễm lạnh hoặc vi rút."
    ],
    "usage": "Động từ ly hợp; cũng dùng làm danh từ trong 感冒药 (thuốc cảm).",
    "collo": [
      "感冒药",
      "感冒了",
      "没感冒"
    ],
    "ex_zh": "昨天吃了感冒药，现在好一些了。",
    "ex_py": "Zuótiān chīle gǎnmào yào, xiànzài hǎo yìxiē le.",
    "ex_vn": "Hôm qua uống thuốc cảm rồi, giờ đỡ hơn một chút rồi.",
    "exList": [
      {
        "zh": "昨天吃了感冒药，现在好一些了。",
        "py": "Zuótiān chīle gǎnmào yào, xiànzài hǎo yìxiē le.",
        "vn": "Hôm qua uống thuốc cảm rồi, giờ đỡ hơn một chút rồi."
      },
      {
        "zh": "前天感冒，昨天发烧，头也越来越疼。",
        "py": "Qiántiān gǎnmào, zuótiān fā shāo, tóu yě yuè lái yuè téng.",
        "vn": "Hôm kia bị cảm, hôm qua sốt, đầu cũng đau ngày càng nhiều."
      },
      {
        "zh": "我感冒好了，明天你不用来照顾我了。",
        "py": "Wǒ gǎnmào hǎo le, míngtiān nǐ búyòng lái zhàogù wǒ le.",
        "vn": "Tôi khỏi cảm rồi, ngày mai bạn không cần đến chăm sóc tôi nữa."
      }
    ],
    "hanzi": [
      {
        "c": "冒",
        "p": "mào",
        "type": "上下结构 · Trên-dưới",
        "st": 9,
        "ord": "冃 trên → 目 dưới",
        "rad": "冂 (quynh)",
        "mean": "mạo hiểm; cảm (bệnh)",
        "tip": "冃(mũ trùm) trên 目(mắt) → hình ảnh khói/hơi xông lên che mắt, mở rộng nghĩa \"nhiễm phải\" = CẢM.",
        "cf": "帽 (mào – \"cái mũ\", có bộ 巾\")",
        "w": "感冒 / 感冒药"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tuy tôi bị cảm nhưng vẫn phải đi làm.",
        "answer": "虽然我感冒了，但是还是要上班。",
        "answerPy": "Suīrán wǒ gǎnmào le, dànshì háishi yào shàngbān.",
        "note": "虽然……但是…… diễn tả sự tương phản.",
        "pair": "虽然……但是……"
      },
      {
        "promptLang": "vi",
        "prompt": "Chỉ cần bạn nhiều nghỉ ngơi thì cảm sẽ nhanh khỏi.",
        "answer": "只要你多休息，感冒就会好得快。",
        "answerPy": "Zhǐyào nǐ duō xiūxi, gǎnmào jiù huì hǎo de kuài.",
        "note": "只要……就…… diễn tả điều kiện đủ.",
        "pair": "只要……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "感冒了",
        "py": "gǎnmào le",
        "vn": "bị cảm rồi"
      },
      {
        "zh": "感冒药",
        "py": "gǎnmào yào",
        "vn": "thuốc cảm"
      },
      {
        "zh": "没感冒",
        "py": "méi gǎnmào",
        "vn": "không bị cảm"
      },
      {
        "zh": "容易感冒",
        "py": "róngyì gǎnmào",
        "vn": "dễ bị cảm"
      },
      {
        "zh": "感冒好了",
        "py": "gǎnmào hǎo le",
        "vn": "khỏi cảm rồi"
      }
    ],
    "patterns": [
      {
        "s": "Sub + 感冒 + 了",
        "m": "Ai đó bị cảm rồi"
      },
      {
        "s": "感冒 + 药",
        "m": "Thuốc cảm — bệnh + 药 = thuốc chữa bệnh đó"
      }
    ]
  },
  {
    "n": 6,
    "zh": "季节",
    "py": "jìjié",
    "pos": "Danh từ",
    "vn": "mùa",
    "hv": "quý tiết",
    "em": "🍂",
    "lesson": 3,
    "explain": [
      "Khoảng thời gian trong năm có đặc điểm khí hậu riêng (xuân, hạ, thu, đông)."
    ],
    "usage": "Danh từ; thường hỏi bằng 哪个季节 (mùa nào).",
    "collo": [
      "哪个季节",
      "四个季节",
      "最喜欢的季节"
    ],
    "ex_zh": "你最喜欢哪个季节？",
    "ex_py": "Nǐ zuì xǐhuan nǎge jìjié?",
    "ex_vn": "Bạn thích mùa nào nhất?",
    "exList": [
      {
        "zh": "你最喜欢哪个季节？",
        "py": "Nǐ zuì xǐhuan nǎge jìjié?",
        "vn": "Bạn thích mùa nào nhất?"
      },
      {
        "zh": "一年有四个季节：春天、夏天、秋天、冬天。",
        "py": "Yì nián yǒu sì ge jìjié: chūntiān, xiàtiān, qiūtiān, dōngtiān.",
        "vn": "Một năm có bốn mùa: xuân, hạ, thu, đông."
      },
      {
        "zh": "每个季节我都喜欢。",
        "py": "Měi ge jìjié wǒ dōu xǐhuan.",
        "vn": "Mùa nào tôi cũng thích."
      }
    ],
    "hanzi": [
      {
        "c": "季",
        "p": "jì",
        "type": "上下结构 · Trên-dưới",
        "st": 8,
        "ord": "禾 trên → 子 dưới",
        "rad": "子 (tử – con)",
        "mean": "mùa, thời kỳ",
        "tip": "禾(lúa) + 子(con, nhỏ) → mùa vụ nhỏ trong năm, như một \"đứa con\" của năm = MÙA.",
        "cf": "李 (lǐ – \"họ Lý; quả mận\", cũng có phần 子\")",
        "w": "季节 / 四季"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Trong bốn mùa, tôi thích mùa xuân nhất, vì mùa xuân không nóng cũng không lạnh.",
        "answer": "四个季节里，我最喜欢春天，因为春天不冷也不热。",
        "answerPy": "Sì ge jìjié li, wǒ zuì xǐhuan chūntiān, yīnwèi chūntiān bù lěng yě bú rè.",
        "note": "不 A 也不 B — không A cũng không B.",
        "pair": "因为……"
      },
      {
        "promptLang": "vi",
        "prompt": "Tuy mỗi mùa đều có cái đẹp riêng, nhưng tôi vẫn thích mùa xuân nhất.",
        "answer": "虽然每个季节都有自己的美，但是我还是最喜欢春天。",
        "answerPy": "Suīrán měi ge jìjié dōu yǒu zìjǐ de měi, dànshì wǒ háishi zuì xǐhuan chūntiān.",
        "note": "还是 ở đây là phó từ \"vẫn\", khác 还是 trong câu hỏi lựa chọn (bài 3).",
        "pair": "虽然……但是……"
      }
    ],
    "colloFull": [
      {
        "zh": "四个季节",
        "py": "sì gè jìjié",
        "vn": "bốn mùa"
      },
      {
        "zh": "哪个季节",
        "py": "nǎge jìjié",
        "vn": "mùa nào"
      },
      {
        "zh": "最喜欢的季节",
        "py": "zuì xǐhuan de jìjié",
        "vn": "mùa thích nhất"
      },
      {
        "zh": "这个季节",
        "py": "zhège jìjié",
        "vn": "mùa này"
      },
      {
        "zh": "季节变了",
        "py": "jìjié biàn le",
        "vn": "mùa đã đổi"
      }
    ],
    "patterns": [
      {
        "s": "四个 + 季节",
        "m": "Bốn mùa: 春天·夏天·秋天·冬天"
      },
      {
        "s": "季 + 节",
        "m": "Chia (节) theo mùa (季)"
      }
    ]
  },
  {
    "n": 7,
    "zh": "当然",
    "py": "dāngrán",
    "pos": "Phó từ",
    "vn": "đương nhiên, dĩ nhiên",
    "hv": "đương nhiên",
    "em": "👍",
    "lesson": 3,
    "explain": [
      "Điều hiển nhiên, không cần nghi ngờ."
    ],
    "usage": "Phó từ, thường đứng đầu câu trả lời hoặc trước 是: 当然 + 是 + [câu trả lời].",
    "collo": [
      "当然是",
      "当然可以",
      "当然好"
    ],
    "ex_zh": "当然是春天，天气不那么冷了，草和树都绿了，花也开了。",
    "ex_py": "Dāngrán shì chūntiān, tiānqì bú nàme lěng le, cǎo hé shù dōu lǜ le, huā yě kāi le.",
    "ex_vn": "Đương nhiên là mùa xuân, thời tiết không còn lạnh nữa, cỏ và cây đều xanh rồi, hoa cũng nở rồi.",
    "exList": [
      {
        "zh": "当然是春天，天气不那么冷了，草和树都绿了，花也开了。",
        "py": "Dāngrán shì chūntiān, tiānqì bú nàme lěng le, cǎo hé shù dōu lǜ le, huā yě kāi le.",
        "vn": "Đương nhiên là mùa xuân, thời tiết không còn lạnh nữa, cỏ và cây đều xanh rồi, hoa cũng nở rồi."
      },
      {
        "zh": "当然可以，你随便看。",
        "py": "Dāngrán kěyǐ, nǐ suíbiàn kàn.",
        "vn": "Đương nhiên được, bạn cứ xem thoải mái."
      },
      {
        "zh": "这个问题我当然知道答案。",
        "py": "Zhège wèntí wǒ dāngrán zhīdào dá'àn.",
        "vn": "Câu hỏi này tôi đương nhiên biết đáp án."
      }
    ],
    "hanzi": [
      {
        "c": "当",
        "p": "dāng",
        "type": "上下结构 · Trên-dưới",
        "st": 6,
        "ord": "⺌ trên → 彐+田 dưới",
        "rad": "田 (điền – ruộng)",
        "mean": "đương, nên; đương nhiên",
        "tip": "Hình ảnh hai thửa ruộng đối diện tương xứng nhau → nghĩa \"tương xứng, nên vậy\", mở rộng thành ĐƯƠNG NHIÊN.",
        "cf": "常 (cháng – \"thường xuyên\", không có bộ 田\")",
        "w": "当然 / 应当"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Đương nhiên tôi thích mùa hè nhất, vì có thể mặc váy đẹp.",
        "answer": "我当然最喜欢夏天，因为可以穿漂亮的裙子。",
        "answerPy": "Wǒ dāngrán zuì xǐhuan xiàtiān, yīnwèi kěyǐ chuān piàoliang de qúnzi.",
        "note": "因为 giải thích lý do cho câu trả lời.",
        "pair": "因为……"
      },
      {
        "promptLang": "vi",
        "prompt": "Nếu bạn hỏi tôi thì đương nhiên tôi sẽ giúp bạn.",
        "answer": "如果你问我，我当然会帮你。",
        "answerPy": "Rúguǒ nǐ wèn wǒ, wǒ dāngrán huì bāng nǐ.",
        "note": "如果……就/会…… diễn tả giả thiết — kết quả.",
        "pair": "如果……会……"
      }
    ],
    "colloFull": [
      {
        "zh": "当然可以",
        "py": "dāngrán kěyǐ",
        "vn": "đương nhiên được"
      },
      {
        "zh": "当然是",
        "py": "dāngrán shì",
        "vn": "đương nhiên là"
      },
      {
        "zh": "当然好",
        "py": "dāngrán hǎo",
        "vn": "dĩ nhiên tốt"
      },
      {
        "zh": "当然知道",
        "py": "dāngrán zhīdào",
        "vn": "đương nhiên biết"
      },
      {
        "zh": "当然不行",
        "py": "dāngrán bù xíng",
        "vn": "đương nhiên không được"
      }
    ],
    "patterns": [
      {
        "s": "当然 + V / Adj",
        "m": "Đương nhiên …"
      },
      {
        "s": "当然可以 / 当然好",
        "m": "Cách đáp lời đồng ý dứt khoát"
      }
    ]
  },
  {
    "n": 8,
    "zh": "春(天)",
    "py": "chūn(tiān)",
    "pos": "Danh từ",
    "vn": "mùa xuân",
    "hv": "xuân thiên",
    "em": "🌸",
    "lesson": 3,
    "explain": [
      "Mùa đầu tiên trong năm, sau mùa đông, thời tiết ấm dần, cây cối đâm chồi."
    ],
    "usage": "Danh từ; thường nói 春天 (đầy đủ) hoặc 春 (trong từ ghép/thơ).",
    "collo": [
      "春天到了",
      "喜欢春天",
      "春天的花"
    ],
    "ex_zh": "当然是春天，天气不那么冷了。",
    "ex_py": "Dāngrán shì chūntiān, tiānqì bú nàme lěng le.",
    "ex_vn": "Đương nhiên là mùa xuân, thời tiết không còn lạnh nữa.",
    "exList": [
      {
        "zh": "当然是春天，天气不那么冷了。",
        "py": "Dāngrán shì chūntiān, tiānqì bú nàme lěng le.",
        "vn": "Đương nhiên là mùa xuân, thời tiết không còn lạnh nữa."
      },
      {
        "zh": "春天到了，花都开了。",
        "py": "Chūntiān dào le, huā dōu kāi le.",
        "vn": "Mùa xuân đến rồi, hoa đều nở cả rồi."
      },
      {
        "zh": "我喜欢3月，因为天气不那么冷了。",
        "py": "Wǒ xǐhuan sān yuè, yīnwèi tiānqì bú nàme lěng le.",
        "vn": "Tôi thích tháng 3, vì thời tiết không còn lạnh nữa."
      }
    ],
    "hanzi": [
      {
        "c": "春",
        "p": "chūn",
        "type": "上下结构 · Trên-dưới",
        "st": 9,
        "ord": "三+人 trên → 日 dưới",
        "rad": "日 (nhật – mặt trời)",
        "mean": "mùa xuân",
        "tip": "Hình ảnh cây cỏ mọc lên đón ánh mặt trời 日 → MÙA XUÂN, mùa cây cối sinh sôi.",
        "cf": "泰 (tài – \"yên ổn, hanh thông\", nét trên tương tự\")",
        "w": "春天 / 春节"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Mùa xuân vừa đến là cỏ và cây đều xanh trở lại.",
        "answer": "春天一到，草和树就都绿了。",
        "answerPy": "Chūntiān yí dào, cǎo hé shù jiù dōu lǜ le.",
        "note": "绿了 — 了 chỉ sự thay đổi trạng thái.",
        "pair": "一……就……"
      },
      {
        "promptLang": "vi",
        "prompt": "Vì mùa xuân trời không lạnh nên mọi người thích ra ngoài đi dạo.",
        "answer": "因为春天天气不冷，所以大家喜欢出去走走。",
        "answerPy": "Yīnwèi chūntiān tiānqì bù lěng, suǒyǐ dàjiā xǐhuan chūqu zǒuzou.",
        "note": "因为……所以…… nêu nguyên nhân — kết quả.",
        "pair": "因为……所以……"
      }
    ],
    "colloFull": [
      {
        "zh": "春天到了",
        "py": "chūn tiān dào le",
        "vn": "mùa xuân đến rồi"
      },
      {
        "zh": "喜欢春天",
        "py": "xǐhuan chūn tiān",
        "vn": "thích mùa xuân"
      },
      {
        "zh": "春天的花",
        "py": "chūn tiān de huā",
        "vn": "hoa mùa xuân"
      },
      {
        "zh": "春天很暖和",
        "py": "chūn tiān hěn nuǎnhuo",
        "vn": "mùa xuân ấm áp"
      },
      {
        "zh": "去年春天",
        "py": "qùnián chūn tiān",
        "vn": "mùa xuân năm ngoái"
      }
    ],
    "patterns": [
      {
        "s": "春天 + 到了",
        "m": "Mùa xuân đến rồi"
      },
      {
        "s": "春 · 夏 · 秋 · 冬 + 天",
        "m": "Bốn mùa đều thêm 天"
      }
    ]
  },
  {
    "n": 9,
    "zh": "草",
    "py": "cǎo",
    "pos": "Danh từ",
    "vn": "cỏ",
    "hv": "thảo",
    "em": "🌿",
    "lesson": 3,
    "explain": [
      "Loài thực vật thân mềm, mọc thấp, thường phủ xanh mặt đất."
    ],
    "usage": "Danh từ; thường xuất hiện cùng 树 (cây), 绿 (xanh): 草和树都绿了.",
    "collo": [
      "草地",
      "草和树",
      "绿草"
    ],
    "ex_zh": "草和树都绿了，花也开了。",
    "ex_py": "Cǎo hé shù dōu lǜ le, huā yě kāi le.",
    "ex_vn": "Cỏ và cây đều xanh rồi, hoa cũng nở rồi.",
    "exList": [
      {
        "zh": "草和树都绿了，花也开了。",
        "py": "Cǎo hé shù dōu lǜ le, huā yě kāi le.",
        "vn": "Cỏ và cây đều xanh rồi, hoa cũng nở rồi."
      },
      {
        "zh": "树和草都绿了，天气真好！",
        "py": "Shù hé cǎo dōu lǜ le, tiānqì zhēn hǎo!",
        "vn": "Cây và cỏ đều xanh rồi, thời tiết đẹp thật!"
      },
      {
        "zh": "我们要多出来走走，在草地上坐坐。",
        "py": "Wǒmen yào duō chūlai zǒuzou, zài cǎodì shang zuòzuo.",
        "vn": "Chúng ta nên ra ngoài đi dạo nhiều, ngồi trên bãi cỏ."
      }
    ],
    "hanzi": [
      {
        "c": "草",
        "p": "cǎo",
        "type": "上下结构 · Trên-dưới",
        "st": 9,
        "ord": "艹 trên → 早 dưới",
        "rad": "艹 (thảo – cỏ)",
        "mean": "cỏ",
        "tip": "艹(bộ cỏ) + 早(sớm, mọc sớm) → loài cây mọc sớm và nhanh = CỎ.",
        "cf": "早 (zǎo – \"sớm\", không có bộ 艹\")",
        "w": "草地 / 绿草"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Cỏ và cây đều xanh rồi, nên tôi biết mùa xuân đã thật sự đến.",
        "answer": "因为草和树都绿了，所以我知道春天真的到了。",
        "answerPy": "Yīnwèi cǎo hé shù dōu lǜ le, suǒyǐ wǒ zhīdào chūntiān zhēn de dào le.",
        "note": "草地 — bãi cỏ; 草 và 树 hay đi cùng nhau.",
        "pair": "因为……所以……"
      },
      {
        "promptLang": "vi",
        "prompt": "Nếu bãi cỏ khô rồi thì chúng ta không nên ngồi ở đó nữa.",
        "answer": "如果草地干了，我们就不要坐在那儿了。",
        "answerPy": "Rúguǒ cǎodì gān le, wǒmen jiù bú yào zuò zài nàr le.",
        "note": "如果……就…… diễn tả giả thiết — kết quả.",
        "pair": "如果……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "草地",
        "py": "cǎodì",
        "vn": "bãi cỏ"
      },
      {
        "zh": "绿草",
        "py": "lǜ cǎo",
        "vn": "cỏ xanh"
      },
      {
        "zh": "草绿了",
        "py": "cǎo lǜ le",
        "vn": "cỏ xanh rồi"
      },
      {
        "zh": "草和树",
        "py": "cǎo hé shù",
        "vn": "cỏ và cây"
      },
      {
        "zh": "坐在草地上",
        "py": "zuò zài cǎodì shàng",
        "vn": "ngồi trên bãi cỏ"
      }
    ],
    "patterns": [
      {
        "s": "草 + 绿 + 了",
        "m": "Cỏ đã xanh — 了 chỉ sự thay đổi"
      },
      {
        "s": "草 + 地",
        "m": "Đất (地) cỏ (草) = bãi cỏ"
      }
    ]
  },
  {
    "n": 10,
    "zh": "夏(天)",
    "py": "xià(tiān)",
    "pos": "Danh từ",
    "vn": "mùa hè",
    "hv": "hạ thiên",
    "em": "☀️",
    "lesson": 3,
    "explain": [
      "Mùa thứ hai trong năm, sau mùa xuân, thời tiết nóng nhất trong năm."
    ],
    "usage": "Danh từ; thường nói 夏天 (đầy đủ) hoặc 夏 (trong từ ghép).",
    "collo": [
      "喜欢夏天",
      "夏天热",
      "夏天到了"
    ],
    "ex_zh": "我最喜欢夏天，因为我可以穿漂亮的裙子了。",
    "ex_py": "Wǒ zuì xǐhuan xiàtiān, yīnwèi wǒ kěyǐ chuān piàoliang de qúnzi le.",
    "ex_vn": "Tôi thích mùa hè nhất, vì tôi có thể mặc váy đẹp rồi.",
    "exList": [
      {
        "zh": "我最喜欢夏天，因为我可以穿漂亮的裙子了。",
        "py": "Wǒ zuì xǐhuan xiàtiān, yīnwèi wǒ kěyǐ chuān piàoliang de qúnzi le.",
        "vn": "Tôi thích mùa hè nhất, vì tôi có thể mặc váy đẹp rồi."
      },
      {
        "zh": "那我也喜欢夏天了。",
        "py": "Nà wǒ yě xǐhuan xiàtiān le.",
        "vn": "Vậy tôi cũng thích mùa hè rồi."
      },
      {
        "zh": "夏天到了，天气越来越热。",
        "py": "Xiàtiān dào le, tiānqì yuè lái yuè rè.",
        "vn": "Mùa hè đến rồi, thời tiết ngày càng nóng."
      }
    ],
    "hanzi": [
      {
        "c": "夏",
        "p": "xià",
        "type": "独体字 · Chữ đơn (phức tạp)",
        "st": 10,
        "ord": "nét liền, hình người đội mũ lớn",
        "rad": "夂 (truy)",
        "mean": "mùa hè",
        "tip": "Hình tượng người đội mũ lớn tránh nắng gắt → MÙA HÈ, mùa nắng nóng.",
        "cf": "复 (fù – \"lặp lại\", phần dưới tương tự\")",
        "w": "夏天 / 夏季"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Vì mùa hè có thể mặc váy đẹp nên tôi thích mùa hè nhất.",
        "answer": "因为夏天可以穿漂亮的裙子，所以我最喜欢夏天。",
        "answerPy": "Yīnwèi xiàtiān kěyǐ chuān piàoliang de qúnzi, suǒyǐ wǒ zuì xǐhuan xiàtiān.",
        "note": "因为……所以…… nêu nguyên nhân — kết quả (ôn lại 裙子 vừa học trong bài này).",
        "pair": "因为……所以……"
      },
      {
        "promptLang": "vi",
        "prompt": "Chỉ cần mùa hè đến là mọi người sẽ mặc ít quần áo hơn.",
        "answer": "只要夏天到了，大家就会穿得少一些。",
        "answerPy": "Zhǐyào xiàtiān dào le, dàjiā jiù huì chuān de shǎo yìxiē.",
        "note": "只要……就…… diễn tả điều kiện đủ.",
        "pair": "只要……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "夏天很热",
        "py": "xià tiān hěn rè",
        "vn": "mùa hè rất nóng"
      },
      {
        "zh": "喜欢夏天",
        "py": "xǐhuan xià tiān",
        "vn": "thích mùa hè"
      },
      {
        "zh": "夏天到了",
        "py": "xià tiān dào le",
        "vn": "mùa hè đến rồi"
      },
      {
        "zh": "夏天穿裙子",
        "py": "xià tiān chuān qúnzi",
        "vn": "mùa hè mặc váy"
      },
      {
        "zh": "今年夏天",
        "py": "jīnnián xià tiān",
        "vn": "mùa hè năm nay"
      }
    ],
    "patterns": [
      {
        "s": "夏天 + 热 / 冬天 + 冷",
        "m": "Mùa hè nóng, mùa đông lạnh"
      },
      {
        "s": "夏天 ↔ 冬天",
        "m": "Mùa hè ↔ mùa đông"
      }
    ]
  },
  {
    "n": 11,
    "zh": "裙子",
    "py": "qúnzi",
    "pos": "Danh từ",
    "vn": "váy",
    "hv": "quần tử",
    "em": "👗",
    "lesson": 3,
    "explain": [
      "Trang phục nữ mặc ở phần dưới cơ thể, thường liền một mảnh."
    ],
    "usage": "Danh từ; lượng từ đi kèm là 条: 一条裙子.",
    "collo": [
      "一条裙子",
      "穿裙子",
      "漂亮的裙子"
    ],
    "ex_zh": "我可以穿漂亮的裙子了。",
    "ex_py": "Wǒ kěyǐ chuān piàoliang de qúnzi le.",
    "ex_vn": "Tôi có thể mặc váy đẹp rồi.",
    "exList": [
      {
        "zh": "我可以穿漂亮的裙子了。",
        "py": "Wǒ kěyǐ chuān piàoliang de qúnzi le.",
        "vn": "Tôi có thể mặc váy đẹp rồi."
      },
      {
        "zh": "我喜欢看你穿漂亮的裙子。",
        "py": "Wǒ xǐhuan kàn nǐ chuān piàoliang de qúnzi.",
        "vn": "Tôi thích nhìn bạn mặc váy đẹp thôi."
      },
      {
        "zh": "这条裙子是去年买的，今年就不能穿了。",
        "py": "Zhè tiáo qúnzi shì qùnián mǎi de, jīnnián jiù bù néng chuān le.",
        "vn": "Cái váy này mua từ năm ngoái, năm nay không mặc vừa nữa rồi."
      }
    ],
    "hanzi": [
      {
        "c": "裙",
        "p": "qún",
        "type": "左右结构 · Trái-phải",
        "st": 12,
        "ord": "衤 trái → 君 phải",
        "rad": "衤 (y – quần áo)",
        "mean": "váy",
        "tip": "衤(quần áo) + 君(người cao quý) → trang phục cho phái nữ, gợi vẻ đài các = VÁY.",
        "cf": "群 (qún – \"đám đông\", có 羊 thay vì 衤\")",
        "w": "裙子 / 一条裙子"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tôi thích nhìn con gái mặc váy mới, vì trông cháu vừa xinh vừa vui.",
        "answer": "我喜欢看我女儿穿新裙子，因为她又漂亮又高兴。",
        "answerPy": "Wǒ xǐhuan kàn wǒ nǚ'ér chuān xīn qúnzi, yīnwèi tā yòu piàoliang yòu gāoxìng.",
        "note": "又 A 又 B là khung bài 4; 一条裙子 — lượng từ 条.",
        "pair": "又……又……"
      },
      {
        "promptLang": "vi",
        "prompt": "Nếu cái váy này không vừa nữa thì chúng ta đi mua cái khác.",
        "answer": "如果这条裙子不能穿了，我们就去买别的。",
        "answerPy": "Rúguǒ zhè tiáo qúnzi bù néng chuān le, wǒmen jiù qù mǎi biéde.",
        "note": "如果……就…… diễn tả giả thiết — kết quả (ôn lại 条 đã học ở Bài 2).",
        "pair": "如果……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "一条裙子",
        "py": "yì tiáo qúnzi",
        "vn": "một cái váy"
      },
      {
        "zh": "穿裙子",
        "py": "chuān qúnzi",
        "vn": "mặc váy"
      },
      {
        "zh": "漂亮的裙子",
        "py": "piàoliang de qúnzi",
        "vn": "cái váy đẹp"
      },
      {
        "zh": "新裙子",
        "py": "xīn qúnzi",
        "vn": "váy mới"
      },
      {
        "zh": "买条裙子",
        "py": "mǎi tiáo qúnzi",
        "vn": "mua cái váy"
      }
    ],
    "patterns": [
      {
        "s": "một + 条 + 裙子",
        "m": "Lượng từ 条 — giống 裤子 ở bài 3"
      },
      {
        "s": "穿 + 裙子",
        "m": "Mặc váy"
      }
    ]
  },
  {
    "n": 12,
    "zh": "最近",
    "py": "zuìjìn",
    "pos": "Phó từ",
    "vn": "gần đây, dạo này",
    "hv": "tối cận",
    "em": "🕐",
    "lesson": 4,
    "explain": [
      "Khoảng thời gian gần với hiện tại, vừa mới qua hoặc đang diễn ra."
    ],
    "usage": "Phó từ, thường đứng đầu câu hoặc sau chủ ngữ: 最近 + [tình huống] (最近越来越胖).",
    "collo": [
      "最近怎么样",
      "我最近",
      "最近越来越"
    ],
    "ex_zh": "我最近越来越胖了。",
    "ex_py": "Wǒ zuìjìn yuè lái yuè pàng le.",
    "ex_vn": "Dạo này tôi ngày càng béo lên.",
    "exList": [
      {
        "zh": "我最近越来越胖了。",
        "py": "Wǒ zuìjìn yuè lái yuè pàng le.",
        "vn": "Dạo này tôi ngày càng béo lên."
      },
      {
        "zh": "听说你最近不舒服，好些了吗？",
        "py": "Tīngshuō nǐ zuìjìn bù shūfu, hǎo xiē le ma?",
        "vn": "Nghe nói dạo này bạn không khỏe, đỡ hơn chưa?"
      },
      {
        "zh": "最近天气越来越冷，还总是下雨。",
        "py": "Zuìjìn tiānqì yuè lái yuè lěng, hái zǒngshì xiàyǔ.",
        "vn": "Dạo này thời tiết ngày càng lạnh, lại còn hay mưa nữa."
      }
    ],
    "hanzi": [
      {
        "c": "最",
        "p": "zuì",
        "type": "上下结构 · Trên-dưới",
        "st": 12,
        "ord": "曰 trên → 取 dưới",
        "rad": "曰 (viết – nói)",
        "mean": "nhất; gần đây",
        "tip": "曰(nói) + 取(lấy, chọn) → chọn ra điều được nói đến nhiều nhất = NHẤT; 最近 = khoảng thời gian GẦN NHẤT.",
        "cf": "撮 (cuō – \"một nhúm\", có bộ 扌\")",
        "w": "最近 / 最好"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Dạo này tôi ngày càng bận rộn.",
        "answer": "我最近越来越忙了。",
        "answerPy": "Wǒ zuìjìn yuè lái yuè máng le.",
        "note": "最近 + 越来越 + tính từ diễn tả sự thay đổi gần đây.",
        "pair": "越……越……"
      },
      {
        "promptLang": "vi",
        "prompt": "Tuy dạo này tôi hơi mệt nhưng vẫn phải đi làm.",
        "answer": "虽然我最近有点儿累，但是还是要上班。",
        "answerPy": "Suīrán wǒ zuìjìn yǒudiǎnr lèi, dànshì háishi yào shàngbān.",
        "note": "虽然……但是…… diễn tả sự tương phản.",
        "pair": "虽然……但是……"
      }
    ],
    "colloFull": [
      {
        "zh": "最近怎么样",
        "py": "zuìjìn zěnmeyàng",
        "vn": "dạo này thế nào"
      },
      {
        "zh": "最近很忙",
        "py": "zuìjìn hěn máng",
        "vn": "dạo này rất bận"
      },
      {
        "zh": "最近越来越",
        "py": "zuìjìn yuè lái yuè",
        "vn": "gần đây ngày càng"
      },
      {
        "zh": "最近没见",
        "py": "zuìjìn méi jiàn",
        "vn": "dạo này không gặp"
      },
      {
        "zh": "最近的事",
        "py": "zuìjìn de shì",
        "vn": "chuyện gần đây"
      }
    ],
    "patterns": [
      {
        "s": "最近 + Sub + V",
        "m": "Dạo này ai đó …"
      },
      {
        "s": "最近怎么样？",
        "m": "Dạo này thế nào? — câu hỏi thăm quen thuộc"
      }
    ]
  },
  {
    "n": 13,
    "zh": "越",
    "py": "yuè",
    "pos": "Phó từ",
    "vn": "càng",
    "hv": "việt",
    "em": "📈",
    "lesson": 4,
    "explain": [
      "Phó từ dùng lặp lại trong cấu trúc 越来越 hoặc 越……越…… để diễn tả mức độ tăng dần theo thời gian/điều kiện."
    ],
    "usage": "Cấu trúc: 越来越 + tính từ/động từ tâm lý (越来越漂亮), không thêm phó từ mức độ (很/非常) phía trước.",
    "collo": [
      "越来越漂亮",
      "越来越好吃",
      "越来越难"
    ],
    "ex_zh": "我觉得你越来越漂亮了。",
    "ex_py": "Wǒ juéde nǐ yuè lái yuè piàoliang le.",
    "ex_vn": "Tôi thấy bạn ngày càng xinh hơn đấy.",
    "exList": [
      {
        "zh": "我觉得你越来越漂亮了。",
        "py": "Wǒ juéde nǐ yuè lái yuè piàoliang le.",
        "vn": "Tôi thấy bạn ngày càng xinh hơn đấy."
      },
      {
        "zh": "我做的饭越来越好吃，我能少吃吗？",
        "py": "Wǒ zuò de fàn yuè lái yuè hǎochī, wǒ néng shǎo chī ma?",
        "vn": "Cơm tôi nấu ngày càng ngon, tôi ăn ít được sao?"
      },
      {
        "zh": "我觉得汉语越来越难了。",
        "py": "Wǒ juéde Hànyǔ yuè lái yuè nán le.",
        "vn": "Tôi thấy tiếng Trung ngày càng khó."
      }
    ],
    "hanzi": [
      {
        "c": "越",
        "p": "yuè",
        "type": "左右结构 · Trái-phải",
        "st": 12,
        "ord": "走 trái → 戉 phải",
        "rad": "走 (tẩu – đi)",
        "mean": "vượt qua; càng",
        "tip": "走(đi, vượt) + 戉(cái rìu, biểu tượng quyền lực) → VƯỢT QUA giới hạn, mở rộng 越……越…… = CÀNG…CÀNG….",
        "cf": "钺 (yuè – \"cái việt/rìu lớn\", có bộ 钅\")",
        "w": "越来越 / 越……越……"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Con đường này càng đi càng khó đi.",
        "answer": "这条路越走越难走。",
        "answerPy": "Zhè tiáo lù yuè zǒu yuè nán zǒu.",
        "note": "越……越…… diễn tả mức độ tăng dần theo hành động (ôn lại 条/难 đã học ở Bài 2-3).",
        "pair": "越……越……"
      },
      {
        "promptLang": "vi",
        "prompt": "Vì thời tiết ngày càng lạnh nên mọi người mặc càng nhiều.",
        "answer": "因为天气越来越冷，所以大家穿得越来越多。",
        "answerPy": "Yīnwèi tiānqì yuè lái yuè lěng, suǒyǐ dàjiā chuān de yuè lái yuè duō.",
        "note": "因为……所以…… kết hợp 越来越 diễn tả nguyên nhân — kết quả theo thời gian.",
        "pair": "因为……所以……"
      }
    ],
    "colloFull": [
      {
        "zh": "越来越漂亮",
        "py": "yuè lái yuè piàoliang",
        "vn": "ngày càng đẹp"
      },
      {
        "zh": "越来越好",
        "py": "yuè lái yuè hǎo",
        "vn": "ngày càng tốt"
      },
      {
        "zh": "越来越难",
        "py": "yuè lái yuè nán",
        "vn": "ngày càng khó"
      },
      {
        "zh": "越吃越想吃",
        "py": "yuè chī yuè xiǎng chī",
        "vn": "càng ăn càng muốn ăn"
      },
      {
        "zh": "越忙越累",
        "py": "yuè máng yuè lèi",
        "vn": "càng bận càng mệt"
      }
    ],
    "patterns": [
      {
        "s": "越来越 + Adj",
        "m": "Ngày càng … (thay đổi theo thời gian)"
      },
      {
        "s": "越 A 越 B",
        "m": "Càng A càng B — hai vế biến đổi cùng chiều"
      }
    ]
  },
  {
    "n": 14,
    "zh": "张",
    "py": "Zhāng",
    "pos": "Danh từ riêng",
    "vn": "Trương (họ)",
    "hv": "Trương",
    "em": "👩",
    "lesson": 2,
    "explain": [
      "Họ Trương, một họ phổ biến ở Trung Quốc; ở đây là 张太太 (bà Trương), bạn của 周太太."
    ],
    "usage": "Danh từ riêng chỉ họ người, đứng trước 太太/先生/小姐: 张太太.",
    "collo": [
      "张太太",
      "姓张",
      "张先生"
    ],
    "ex_zh": "张太太：为什么？怎么了？",
    "ex_py": "Zhāng tàitai: Wèi shénme? Zěnme le?",
    "ex_vn": "Bà Trương: Sao vậy? Có chuyện gì thế?",
    "exList": [
      {
        "zh": "张太太：为什么？怎么了？",
        "py": "Zhāng tàitai: Wèi shénme? Zěnme le?",
        "vn": "Bà Trương: Sao vậy? Có chuyện gì thế?"
      },
      {
        "zh": "那我们下次再一起出去玩儿吧。",
        "py": "Nà wǒmen xià cì zài yìqǐ chūqu wánr ba.",
        "vn": "Vậy lần sau chúng ta lại cùng đi chơi nhé."
      }
    ],
    "hanzi": [
      {
        "c": "张",
        "p": "zhāng",
        "type": "左右结构 · Trái-phải",
        "st": 7,
        "ord": "弓 trái → 长 phải",
        "rad": "弓 (cung)",
        "mean": "giương (cung); họ Trương",
        "tip": "弓(cây cung) + 长(dài, kéo dài) → GIƯƠNG cung kéo dài dây; đây cũng là một họ phổ biến ở Trung Quốc.",
        "cf": "长 (cháng – \"dài\", không có bộ 弓\")",
        "w": "张太太 / 张开"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Bà Trương nói mai bà bận, nên không đi chơi cùng chúng tôi được.",
        "answer": "张太太说她明天很忙，所以不能和我们一起出去玩儿了。",
        "answerPy": "Zhāng tàitai shuō tā míngtiān hěn máng, suǒyǐ bù néng hé wǒmen yìqǐ chūqu wánr le.",
        "note": "太太 là từ bài 2 — 张太太, 周太太.",
        "pair": "因为……所以……"
      },
      {
        "promptLang": "vi",
        "prompt": "Vì con trai bà Trương bị ốm nên bà phải ở nhà chăm sóc cháu.",
        "answer": "因为张太太的儿子生病了，所以她要在家照顾他。",
        "answerPy": "Yīnwèi Zhāng tàitai de érzi shēng bìng le, suǒyǐ tā yào zài jiā zhàogù tā.",
        "note": "因为……所以…… nêu nguyên nhân — kết quả (ôn lại 照顾 vừa học trong bài này).",
        "pair": "因为……所以……"
      }
    ]
  }
];

const wuData = [
  {img:'🤒',label:'发烧',py:'fā shāo',letter:'A'},
  {img:'🤧',label:'感冒',py:'gǎnmào',letter:'B'},
  {img:'🌸',label:'春天',py:'chūntiān',letter:'C'},
  {img:'👗',label:'裙子',py:'qúnzi',letter:'D'},
  {img:'🌿',label:'草',py:'cǎo',letter:'E'},
  {img:'🤲',label:'照顾',py:'zhàogù',letter:'F'},
];

var dialogData = [
  {scene:'在小丽家 · Tại nhà chị Lệ',
   preQuiz:[
     {q:'小丽身体怎么了？',opts:['前几天有点儿发烧','肚子疼','感冒了很严重'],ans:0},
     {q:'朋友为小丽买了什么？',opts:['绿茶','咖啡','水果'],ans:0},
     {q:'小丽最后决定喝什么？',opts:['水','茶','药'],ans:0},
   ],
   lines:[
     {sp:0,zh:'我听说你身体不舒服，怎么了？',py:'Wǒ tīngshuō nǐ shēntǐ bù shūfu, zěnme le?',vn:'Tôi nghe nói bạn không khỏe, sao vậy?'},
     {sp:1,zh:'前几天有点儿发烧，现在好多了。',py:'Qián jǐ tiān yǒudiǎnr fā shāo, xiànzài hǎoduō le.',vn:'Mấy hôm trước hơi sốt, giờ đỡ nhiều rồi.'},
     {sp:0,zh:'喝杯茶吧，这是我为你买的绿茶，很不错。',py:'Hē bēi chá ba, zhè shì wǒ wèi nǐ mǎi de lǜchá, hěn búcuò.',vn:'Uống chút trà đi, đây là trà xanh tôi mua cho bạn, ngon lắm đấy.'},
     {sp:1,zh:'谢谢，我要吃药，不喝茶了。',py:'Xièxie, wǒ yào chī yào, bù hē chá le.',vn:'Cảm ơn, tôi phải uống thuốc, không uống trà nữa.'},
     {sp:0,zh:'那喝杯水吧。',py:'Nà hē bēi shuǐ ba.',vn:'Vậy uống chút nước đi.'},
     {sp:1,zh:'好的。',py:'Hǎo de.',vn:'Được thôi.'},
   ]},
  {scene:'在打电话 · Nói chuyện qua điện thoại',
   preQuiz:[
     {q:'周太太明天为什么不能出去玩儿？',opts:['儿子生病了，要在家照顾他','自己生病了','要工作'],ans:0},
     {q:'周太太的儿子要不要去医院？',opts:['不用去医院','要去医院','已经在医院'],ans:0},
     {q:'张太太提议怎么办？',opts:['下次再一起出去玩儿','现在就去','明天再决定'],ans:0},
   ],
   lines:[
     {sp:0,zh:'对不起，我明天不能和你们出去玩儿了。',py:'Duìbuqǐ, wǒ míngtiān bù néng hé nǐmen chūqu wánr le.',vn:'Xin lỗi, ngày mai tôi không thể đi chơi cùng mọi người được nữa.'},
     {sp:1,zh:'为什么？怎么了？',py:'Wèi shénme? Zěnme le?',vn:'Sao vậy? Có chuyện gì thế?'},
     {sp:0,zh:'我儿子生病了，我要在家照顾他。',py:'Wǒ érzi shēng bìng le, wǒ yào zài jiā zhàogù tā.',vn:'Con trai tôi bị ốm, tôi phải ở nhà chăm sóc cháu.'},
     {sp:1,zh:'他吃药了吗？要不要去医院？',py:'Tā chī yào le ma? Yào bu yào qù yīyuàn?',vn:'Cháu uống thuốc chưa? Có cần đi bệnh viện không?'},
     {sp:0,zh:'不用去医院，昨天吃了感冒药，现在好一些了。',py:'Búyòng qù yīyuàn, zuótiān chīle gǎnmào yào, xiànzài hǎo yìxiē le.',vn:'Không cần đi bệnh viện đâu, hôm qua uống thuốc cảm rồi, giờ đỡ hơn một chút rồi.'},
     {sp:1,zh:'那我们下次再一起出去玩儿吧。',py:'Nà wǒmen xià cì zài yìqǐ chūqu wánr ba.',vn:'Vậy lần sau chúng ta lại cùng đi chơi nhé.'},
   ]},
  {scene:'在小刚家 · Tại nhà anh Cương (mùa yêu thích)',
   preQuiz:[
     {q:'小刚最喜欢哪个季节？',opts:['春天','夏天','冬天'],ans:0},
     {q:'小丽最喜欢哪个季节？为什么？',opts:['夏天，因为可以穿漂亮的裙子','春天，因为天气好','秋天，因为凉快'],ans:0},
     {q:'小刚为什么也喜欢夏天了？',opts:['喜欢看小丽穿裙子','自己也有裙子','夏天不热'],ans:0},
   ],
   lines:[
     {sp:1,zh:'你最喜欢哪个季节？',py:'Nǐ zuì xǐhuan nǎge jìjié?',vn:'Bạn thích mùa nào nhất?'},
     {sp:0,zh:'当然是春天，天气不那么冷了，草和树都绿了，花也开了。',py:'Dāngrán shì chūntiān, tiānqì bú nàme lěng le, cǎo hé shù dōu lǜ le, huā yě kāi le.',vn:'Đương nhiên là mùa xuân, thời tiết không còn lạnh nữa, cỏ và cây đều xanh rồi, hoa cũng nở rồi.'},
     {sp:1,zh:'我最喜欢夏天，因为我可以穿漂亮的裙子了。',py:'Wǒ zuì xǐhuan xiàtiān, yīnwèi wǒ kěyǐ chuān piàoliang de qúnzi le.',vn:'Tôi thích mùa hè nhất, vì tôi có thể mặc váy đẹp rồi.'},
     {sp:0,zh:'那我也喜欢夏天了。',py:'Nà wǒ yě xǐhuan xiàtiān le.',vn:'Vậy tôi cũng thích mùa hè rồi.'},
     {sp:1,zh:'怎么？你也有漂亮的裙子？',py:'Zěnme? Nǐ yě yǒu piàoliang de qúnzi?',vn:'Sao vậy? Bạn cũng có váy đẹp à?'},
     {sp:0,zh:'不，我喜欢看你穿漂亮的裙子。',py:'Bù, wǒ xǐhuan kàn nǐ chuān piàoliang de qúnzi.',vn:'Không, tôi thích nhìn bạn mặc váy đẹp thôi.'},
   ]},
  {scene:'在小刚家 · Tại nhà anh Cương (dạo này béo lên)',
   preQuiz:[
     {q:'小丽觉得自己最近怎么样？',opts:['越来越胖了','越来越瘦了','没有变化'],ans:0},
     {q:'小刚觉得小丽怎么样？',opts:['越来越漂亮了','越来越胖了','没有变化'],ans:0},
     {q:'小刚说小丽为什么不能穿去年的裙子？',opts:['吃得太多了','裙子破了','裙子丢了'],ans:0},
   ],
   lines:[
     {sp:1,zh:'我最近越来越胖了。',py:'Wǒ zuìjìn yuè lái yuè pàng le.',vn:'Dạo này tôi ngày càng béo lên.'},
     {sp:0,zh:'谁说的？我觉得你越来越漂亮了。',py:'Shéi shuō de? Wǒ juéde nǐ yuè lái yuè piàoliang le.',vn:'Ai nói vậy? Tôi thấy bạn ngày càng xinh hơn đấy.'},
     {sp:1,zh:'你看，这条裙子是去年买的，今年就不能穿了。',py:'Nǐ kàn, zhè tiáo qúnzi shì qùnián mǎi de, jīnnián jiù bù néng chuān le.',vn:'Bạn xem, cái váy này mua từ năm ngoái, năm nay không mặc vừa nữa rồi.'},
     {sp:0,zh:'那是因为你吃得太多了，少吃点儿吧。',py:'Nà shì yīnwèi nǐ chī de tài duō le, shǎo chī diǎnr ba.',vn:'Đó là vì bạn ăn nhiều quá đấy, ăn ít lại một chút đi.'},
     {sp:1,zh:'我做的饭越来越好吃，我能少吃吗？',py:'Wǒ zuò de fàn yuè lái yuè hǎochī, wǒ néng shǎo chī ma?',vn:'Cơm tôi nấu ngày càng ngon, tôi ăn ít được sao?'},
   ]},
];

// ══════════════════════════════════════════
// PHẦN 1 · GHÉP TỪ (Collocation)
// ══════════════════════════════════════════
var matchData = [
  {left:'孩子三十九度，', right:'发烧了'},
  {left:'妈妈不在家，我得在家', right:'照顾妹妹'},
  {left:'我昨天吃了', right:'感冒药'},
  {left:'春天到了，路旁边的', right:'草都绿了'},
  {left:'天热了，姐姐每天都穿', right:'裙子'},
  {left:'我自己能去，你不', right:'用送我'},
];

// ══════════════════════════════════════════
// PHẦN 3a · ĐIỀN TỪ
// ══════════════════════════════════════════
var fillData = [
  {pre:'A：你还每天去跑步吗？B：不去', blank:'了', post:'，最近我的脚总是有点儿疼。', hint:'(… nữa — đã khác trước)', ans:'了', exp:'不 + V + 了 = không … nữa (trước đây có, bây giờ đã thay đổi); ôn 总是 (Bài 4).'},
  {pre:'A：小明呢？B：他是大学生', blank:'了', post:'，现在不住在家里。', hint:'(… rồi — tình huống mới)', ans:'了', exp:'是大学生了 = đã là sinh viên rồi: 了 cuối câu báo một tình huống mới, khác trước.'},
  {pre:'这个超市的东西', blank:'越来越', post:'贵了，我们去别的超市看看吧。', hint:'(ngày càng)', ans:'越来越', exp:'越来越 + tính từ = ngày càng …, cuối câu thường có 了; không thêm 很 trước 贵.'},
  {pre:'A：你觉得学汉语难吗？B：不难，我', blank:'越来越', post:'喜欢学汉语了。', hint:'(ngày càng)', ans:'越来越', exp:'越来越 + động từ tâm lý (喜欢, 想…) = ngày càng thích…'},
  {pre:'这是妈妈', blank:'为', post:'我做的蛋糕，你也吃一块吧。', hint:'(cho, vì)', ans:'为', exp:'为 + người + động từ = làm gì cho ai; 为我 đứng trước động từ 做; ôn 蛋糕 (Bài 4).'},
  {pre:'姐姐工作很忙，我周末经常去她家帮她', blank:'照顾', post:'孩子。', hint:'(chăm sóc, trông)', ans:'照顾', exp:'照顾 + người = chăm sóc, trông nom; 帮她照顾孩子 = giúp chị ấy trông con.'},
  {pre:'A：要不要我送你去机场？B：不', blank:'用', post:'，我坐出租车去就可以了。', hint:'(cần)', ans:'用', exp:'不用 = không cần; 用 ở đây nghĩa là “cần”, khác với 用 = dùng.'},
  {pre:'下雨了你还不带伞，小心', blank:'感冒', post:'！', hint:'(bị cảm)', ans:'感冒', exp:'感冒 = bị cảm; ôn 小心 (Bài 3) và 带伞 (Bài 2).'},
  {pre:'北京一年四个', blank:'季节', post:'都很漂亮，但是夏天有点儿热。', hint:'(mùa)', ans:'季节', exp:'季节 = mùa; 四个季节 = bốn mùa.'},
  {pre:'A：你能跟我们一起去爬山吗？B：', blank:'当然', post:'能！我早就准备好了。', hint:'(đương nhiên)', ans:'当然', exp:'当然 = đương nhiên, trả lời chắc chắn; ôn V + 好 (准备好, Bài 1) và 爬山 (Bài 3).'},
  {pre:'A：你什么时候去游泳？B：', blank:'夏天', post:'吧，现在水还太冷。', hint:'(mùa hè)', ans:'夏天', exp:'夏天 = mùa hè; 还 + tính từ = vẫn còn ….'},
  {pre:'妹妹穿着一条绿色的', blank:'裙子', post:'站在门口等我。', hint:'(váy)', ans:'裙子', exp:'裙子 = váy, lượng từ 条; ôn V1着 + V2 (穿着……站在…, Bài 4).'},
  {pre:'A：', blank:'最近', post:'怎么没看见你？B：我生病了，在家休息了一个星期。', hint:'(dạo này, gần đây)', ans:'最近', exp:'最近 = dạo này, đứng đầu câu hoặc sau chủ ngữ, trước động từ.'},
];

// ══════════════════════════════════════════
// PHẦN 3b · SẮP XẾP
// ══════════════════════════════════════════
var sortData = [
  {words:['我们','家','的','猫','越来越','胖','了','。'], ans:'我们家的猫越来越胖了。', audio:'我们家的猫越来越胖了。'},
  {words:['弟弟','发烧','了','，','妈妈','今天','不','去','上班','了','。'], ans:'弟弟发烧了，妈妈今天不去上班了。', audio:'弟弟发烧了，妈妈今天不去上班了。'},
  {words:['春天','是','我','最','喜欢','的','季节','，','不冷','也','不热','。'], ans:'春天是我最喜欢的季节，不冷也不热。', audio:'春天是我最喜欢的季节，不冷也不热。'},
  {words:['你','可以','用','我','的','手机','给','妈妈','打电话','。'], ans:'你可以用我的手机给妈妈打电话。', audio:'你可以用我的手机给妈妈打电话。'},
  {words:['这些','花','是','我们','为','老师','买','的','。'], ans:'这些花是我们为老师买的。', audio:'这些花是我们为老师买的。'},
  {words:['我','生病','的时候','，','姐姐','总是','在家','照顾','我','。'], ans:'我生病的时候，姐姐总是在家照顾我。', audio:'我生病的时候，姐姐总是在家照顾我。'},
  {words:['他','是','你','哥哥','，','当然','会','帮','你','。'], ans:'他是你哥哥，当然会帮你。', audio:'他是你哥哥，当然会帮你。'},
  {words:['夏天','到','了','，','我','想','买','一条','新','裙子','。'], ans:'夏天到了，我想买一条新裙子。', audio:'夏天到了，我想买一条新裙子。'},
];

// ══════════════════════════════════════════
// PHẦN 3c · SỬA LỖI SAI
// ══════════════════════════════════════════
var errorFixData = [
  {wrong:'弟弟越来越很高了。',
   opts:['弟弟越来越高很了。','弟弟很越来越高了。','弟弟越来越高了。','弟弟越高越来了。'], ans:2,
   exp:'越来越 + tính từ, không thêm 很 / 非常 (vì 越来越 đã chỉ mức độ).'},
  {wrong:'越来越他的汉语好了。',
   opts:['他的汉语越来越好了。','他的汉语好越来越了。','他的越来越汉语好了。','他的汉语越来越好的。'], ans:0,
   exp:'Chủ ngữ (他的汉语) đứng trước, 越来越 đứng ngay trước tính từ; cuối câu dùng 了 (sự thay đổi), không dùng 的.'},
  {wrong:'哥哥买了一个蛋糕为我。',
   opts:['哥哥买了为我一个蛋糕。','哥哥为我买了一个蛋糕。','为哥哥我买了一个蛋糕。','哥哥为买我了一个蛋糕。'], ans:1,
   exp:'为 + người đứng TRƯỚC động từ: 为我买…, không đặt cuối câu như tiếng Việt “mua … cho tôi”.'},
  {wrong:'你没用来接我，我自己坐出租车回去。',
   opts:['你用不来接我，我自己坐出租车回去。','你不用了来接我，我自己坐出租车回去。','你来接我不用，我自己坐出租车回去。','你不用来接我，我自己坐出租车回去。'], ans:3,
   exp:'“Không cần” là 不用 + động từ (không nói 没用); 了 không chen giữa 不用 và động từ; ôn 回去 (Bài 2).'},
  {wrong:'今天太冷，我不去了游泳。',
   opts:['今天太冷，我不去游泳了。','今天太冷，我没去游泳了。','今天太冷，我不了去游泳。','今天太冷，我去游泳不了。'], ans:0,
   exp:'不 + V + O + 了 = không … nữa: 了 đứng cuối câu; 没 không dùng cùng 了 kiểu này.'},
  {wrong:'他工作最近很忙。',
   opts:['他工作很忙最近。','他最近工作很忙。','最近工作他很忙。','他最近很工作忙。'], ans:1,
   exp:'最近 (dạo này) chỉ thời gian, đứng đầu câu hoặc ngay sau chủ ngữ: 他最近工作很忙 — không đặt sau như tiếng Việt.'},
  {wrong:'我一点儿发烧。',
   opts:['我发烧有点儿。','我一点儿有发烧。','我有点儿发烧。','我有点儿发烧很。'], ans:2,
   exp:'“Hơi sốt” là 有点儿 + 发烧 (有点儿 đứng trước); 一点儿 đứng sau tính từ hoặc trước danh từ.'},
  {wrong:'她穿裙子着去上班。',
   opts:['她着穿裙子去上班。','她穿裙子去着上班。','她穿了着裙子去上班。','她穿着裙子去上班。'], ans:3,
   exp:'着 gắn ngay sau động từ thứ nhất: 穿着裙子 + 去上班 (ôn V1着 + V2, Bài 4); 着 không đi cùng 了.'},
];

// ══════════════════════════════════════════
// LUYỆN NÓI
// ══════════════════════════════════════════
var speakingData = {
  mode: 'ai-speak',
  intro: 'Mỗi câu là một tình huống thật, trả lời về chính bạn bằng từ và mẫu câu của Bài 5 (了 chỉ sự thay đổi, 越来越 + tính từ / động từ tâm lý). Bấm 🎙️ rồi nói bằng tiếng Trung — AI sẽ nghe, ghi lại câu bạn nói và chấm theo Nội dung · Mẫu câu · Từ vựng · Độ trôi chảy. Tự trả lời trước rồi mới mở “Câu mẫu” để đối chiếu.',
  tasks: [
    {
      situation: 'Một người bạn cả năm không gặp hỏi dạo này bạn thế nào, có gì khác trước không.',
      q_zh: '一年没见了，你最近怎么样？',
      q_py: 'Yì nián méi jiàn le, nǐ zuìjìn zěnmeyàng?',
      q_vn: 'Một năm không gặp rồi, dạo này bạn thế nào?',
      grammar: { label: '了 cuối câu chỉ sự thay đổi (不……了 / 是……了)', any: ['了'] },
      need: [
        { label: 'Nói điều đã thay đổi', any: ['工作', '学习', '搬', '胖', '瘦', '忙', '大学生', '经理', '开始'] },
        { label: 'Nói bây giờ thế nào', any: ['现在', '最近'] }
      ],
      bonus: { label: 'Dùng 越来越', any: ['越来越'] },
      vocab: ['最近'],
      minLen: 16,
      sample: '我最近很忙。我不在那个公司工作了，现在是一家超市的经理了，汉语也说得越来越好了。',
      sample_py: 'Wǒ zuìjìn hěn máng. Wǒ bú zài nàge gōngsī gōngzuò le, xiànzài shì yì jiā chāoshì de jīnglǐ le, Hànyǔ yě shuō de yuè lái yuè hǎo le.',
      sample_vn: 'Dạo này mình bận lắm. Mình không làm ở công ty đó nữa, bây giờ là quản lý một siêu thị rồi, tiếng Hán cũng nói ngày càng tốt hơn.',
      tip: '不 + V + 了 = không … nữa; danh từ / tính từ + 了 = đã thành … rồi (是经理了, 胖了).'
    },
    {
      situation: 'Bạn bè ở xa nhắn tin hỏi thời tiết chỗ bạn dạo này.',
      q_zh: '你那儿最近天气怎么样？',
      q_py: 'Nǐ nàr zuìjìn tiānqì zěnmeyàng?',
      q_vn: 'Chỗ bạn dạo này thời tiết thế nào?',
      grammar: { label: '越来越 + tính từ (ngày càng …)', any: ['越来越'] },
      need: [
        { label: 'Tả thời tiết', any: ['热', '冷', '下雨', '阴', '晴', '下雪'] },
        { label: 'Nói bạn mặc gì / làm gì', any: ['穿', '衣服', '裙子', '衬衫', '游泳', '带', '在家'] }
      ],
      bonus: { label: 'Ôn 还是 = vẫn / 有点儿', any: ['有点儿', '还是'] },
      vocab: ['最近', '越'],
      minLen: 16,
      sample: '最近越来越冷了，我每天都穿两件衣服，晚上在家还是有点儿冷。',
      sample_py: 'Zuìjìn yuè lái yuè lěng le, wǒ měitiān dōu chuān liǎng jiàn yīfu, wǎnshang zài jiā háishi yǒudiǎnr lěng.',
      sample_vn: 'Dạo này trời ngày càng lạnh, ngày nào mình cũng mặc hai lớp áo, tối ở nhà vẫn hơi lạnh.',
      tip: '越来越 + tính từ không thêm 很: nói 越来越冷, không nói 越来越很冷.'
    },
    {
      situation: 'Bạn học tiếng Hán được vài tháng, giáo viên hỏi cảm nhận của bạn.',
      q_zh: '学了几个月汉语，你觉得汉语怎么样？',
      q_py: 'Xuéle jǐ ge yuè Hànyǔ, nǐ juéde Hànyǔ zěnmeyàng?',
      q_vn: 'Học tiếng Hán mấy tháng rồi, bạn thấy tiếng Hán thế nào?',
      grammar: { label: '越来越 + động từ tâm lý / tính từ', any: ['越来越'] },
      need: [
        { label: 'Nhận xét chung', any: ['有意思', '难', '容易', '好'] },
        { label: 'Nói phần nào dễ / khó', any: ['汉字', '说', '听', '写', '读'] }
      ],
      bonus: { label: 'Ôn 其实 (Bài 2)', any: ['其实'] },
      vocab: ['越'],
      minLen: 18,
      sample: '我觉得汉语越来越有意思了，我也越来越喜欢跟中国朋友说汉语。其实汉字还是有点儿难。',
      sample_py: 'Wǒ juéde Hànyǔ yuè lái yuè yǒu yìsi le, wǒ yě yuè lái yuè xǐhuan gēn Zhōngguó péngyou shuō Hànyǔ. Qíshí Hànzì háishi yǒudiǎnr nán.',
      sample_vn: 'Mình thấy tiếng Hán ngày càng thú vị, mình cũng ngày càng thích nói tiếng Hán với bạn Trung Quốc. Thật ra chữ Hán vẫn hơi khó.',
      tip: '越来越 + động từ tâm lý: 越来越喜欢, 越来越想…; 越来越 đứng ngay trước động từ, sau chủ ngữ.'
    },
    {
      situation: 'Một người bạn nước ngoài hỏi bây giờ ở quê bạn đang là mùa gì.',
      q_zh: '你们那儿现在是什么季节？',
      q_py: 'Nǐmen nàr xiànzài shì shénme jìjié?',
      q_vn: 'Chỗ các bạn bây giờ đang là mùa gì?',
      grammar: { label: '了 cuối câu báo sự thay đổi (是夏天了 / 不想……了)', any: ['了'] },
      need: [
        { label: 'Nói mùa', any: ['春', '夏', '季节'] },
        { label: 'Tả thời tiết / cảnh vật', any: ['热', '冷', '度', '草', '花', '树', '绿', '雨'] }
      ],
      bonus: { label: 'Dùng 越来越', any: ['越来越'] },
      vocab: ['季节', '夏天'],
      minLen: 16,
      sample: '我们那儿已经是夏天了，每天都三十多度，中午大家都不想出去了。',
      sample_py: 'Wǒmen nàr yǐjīng shì xiàtiān le, měitiān dōu sānshí duō dù, zhōngwǔ dàjiā dōu bù xiǎng chūqu le.',
      sample_vn: 'Chỗ mình đã là mùa hè rồi, ngày nào cũng hơn ba mươi độ, buổi trưa chẳng ai muốn ra ngoài nữa.',
      tip: '已经……了 báo một tình huống mới đã đến: 已经是夏天了 = đã sang hè rồi.'
    },
    {
      situation: 'Đồng nghiệp hỏi vì sao hôm qua bạn nghỉ làm.',
      q_zh: '你昨天怎么没来上班？',
      q_py: 'Nǐ zuótiān zěnme méi lái shàngbān?',
      q_vn: 'Hôm qua sao bạn không đi làm?',
      grammar: { label: '了 chỉ sự thay đổi (好多了 / 不……了)', any: ['好多了', '好了', '了'] },
      need: [
        { label: 'Nói bị bệnh gì', any: ['感冒', '发烧', '生病', '不舒服'] },
        { label: 'Nói ai chăm sóc / làm gì cho bạn', any: ['照顾', '为', '买药', '做饭'] }
      ],
      bonus: { label: 'Dùng 为 + người + động từ', any: ['为'] },
      vocab: ['感冒', '发烧', '照顾', '为'],
      minLen: 18,
      sample: '我感冒了，还有点儿发烧。我妈妈为我做了饭，在家照顾了我一天，今天好多了。',
      sample_py: 'Wǒ gǎnmào le, hái yǒudiǎnr fāshāo. Wǒ māma wèi wǒ zuòle fàn, zài jiā zhàogùle wǒ yì tiān, jīntiān hǎo duō le.',
      sample_vn: 'Mình bị cảm, còn hơi sốt nữa. Mẹ nấu cơm cho mình, ở nhà chăm mình cả ngày, hôm nay đỡ nhiều rồi.',
      tip: '为 + người đứng trước động từ: 妈妈为我做饭 (không nói 妈妈做饭为我).'
    }
  ]
};

// ══════════════════════════════════════════
// LUYỆN DỊCH (Việt → Trung)
// ══════════════════════════════════════════
var translateData = [
  {vi:'Bạn vẫn còn sốt thì đừng uống đồ lạnh nữa.', zh:'你还在发烧，就别喝冷饮料了。', py:'Nǐ hái zài fāshāo, jiù bié hē lěng yǐnliào le.'},
  {vi:'Ngày nào anh ấy cũng chạy bộ, sức khỏe ngày càng tốt.', zh:'他每天跑步，身体越来越好了。', py:'Tā měitiān pǎobù, shēntǐ yuè lái yuè hǎo le.'},
  {vi:'Mùa xuân đến rồi, chúng ta đến công viên ngồi trên cỏ đi.', zh:'春天来了，我们去公园坐在草上吧。', py:'Chūntiān lái le, wǒmen qù gōngyuán zuò zài cǎo shang ba.'},
  {vi:'Không cần mua nhiều thế đâu, nhà mình có ba người thôi.', zh:'不用买这么多，我们家就三个人。', py:'Búyòng mǎi zhème duō, wǒmen jiā jiù sān ge rén.'},
  {vi:'Chiếc váy này là chị tôi mua cho tôi, đẹp lắm.', zh:'这条裙子是姐姐为我买的，很漂亮。', py:'Zhè tiáo qúnzi shì jiějie wèi wǒ mǎi de, hěn piàoliang.'},
];

// ══════════════════════════════════════════
// LUYỆN DỊCH (Trung → Việt) — nội dung KHÁC với chiều Việt→Trung ở trên
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:'Anh ấy uống thuốc xong là ngủ, bây giờ không sốt nữa.', zh:'他喝了药就睡了，现在不发烧了。', py:'Tā hēle yào jiù shuì le, xiànzài bù fāshāo le.'},
  {vi:'Dạo này công ty chúng tôi ngày càng bận, cuối tuần cũng phải đi làm rồi.', zh:'最近我们公司越来越忙，周末也要上班了。', py:'Zuìjìn wǒmen gōngsī yuè lái yuè máng, zhōumò yě yào shàngbān le.'},
  {vi:'Tiểu Trương không ở đây nữa, tháng trước cậu ấy chuyển ra miền Bắc rồi.', zh:'小张不住在这儿了，他上个月搬到北方去了。', py:'Xiǎo Zhāng bú zhù zài zhèr le, tā shàng ge yuè bān dào běifāng qù le.'},
];

// ══════════════════════════════════════════
// LUYỆN NGHE — đề nghe THẬT từ HSK标准教程3 练习册 (sách bài tập Bài 5)
// Audio gốc duy nhất chứa đủ 20 câu (Phần 1+2+3+4 của đề gốc):
//  - Phần 1 (câu 1-5, gốc: nghe chọn tranh) + Phần 2 (câu 6-10, gốc: nghe
//    phán đoán đúng/sai) → gộp thành 10 câu ĐIỀN CHÍNH TẢ.
//  - Phần 3 (câu 11-15) + Phần 4 (câu 16-20) → 10 câu TRẮC NGHIỆM, kèm các
//    dòng nghe-điền-cụm-từ-ngắn trước khi chọn đáp án, giữ đúng như đề gốc.
// ══════════════════════════════════════════
var listenData = {
  type: 'workbook',
  audio: "/audio/hsk3-bai-5/listen-full.mp3",
  dictation: [
    {num:1, lines:[
      {speaker:"女", pre:"", blank:"树和草都绿了，天气真好", post:"！",
       py:"Shù hé cǎo dōu lǜ le, tiānqì zhēn hǎo!",
       vn:"Cây và cỏ đều xanh rồi, thời tiết đẹp thật!"},
      {speaker:"男", pre:"是啊，", blank:"我们要多出来走走，在草地上坐坐", post:"。",
       py:"Shì a, wǒmen yào duō chūlai zǒuzou, zài cǎodì shang zuòzuo.",
       vn:"Đúng vậy, chúng ta nên ra ngoài đi dạo nhiều, ngồi trên bãi cỏ."}]},
    {num:2, lines:[
      {speaker:"女", pre:"", blank:"这条裤子怎么样", post:"？",
       py:"Zhè tiáo kùzi zěnmeyàng?",
       vn:"Cái quần này thế nào?"},
      {speaker:"男", pre:"", blank:"你已经有那么多裤子了，买条裙子吧", post:"。",
       py:"Nǐ yǐjīng yǒu nàme duō kùzi le, mǎi tiáo qúnzi ba.",
       vn:"Bạn đã có nhiều quần thế rồi, mua cái váy đi."}]},
    {num:3, lines:[
      {speaker:"女1", pre:"", blank:"您要做什么，我来帮您吧", post:"。",
       py:"Nín yào zuò shénme, wǒ lái bāng nín ba.",
       vn:"Bác định làm gì, để cháu giúp bác nhé."},
      {speaker:"女2", pre:"不用帮，", blank:"我一个人可以，谢谢你", post:"。",
       py:"Búyòng bāng, wǒ yí ge rén kěyǐ, xièxie nǐ.",
       vn:"Không cần giúp đâu, một mình bác làm được, cảm ơn cháu."}]},
    {num:4, lines:[
      {speaker:"男", pre:"", blank:"春天到了，花都开了", post:"。",
       py:"Chūntiān dào le, huā dōu kāi le.",
       vn:"Mùa xuân đến rồi, hoa đều nở cả rồi."},
      {speaker:"女", pre:"是啊，", blank:"你看它们开得多好", post:"！",
       py:"Shì a, nǐ kàn tāmen kāi de duō hǎo!",
       vn:"Đúng vậy, bạn xem hoa nở đẹp biết bao!"}]},
    {num:5, lines:[
      {speaker:"女", pre:"医生，", blank:"我怎么了", post:"？",
       py:"Yīshēng, wǒ zěnme le?",
       vn:"Bác sĩ, tôi bị sao vậy?"},
      {speaker:"男", pre:"", blank:"你有点儿感冒，我给你开点儿药", post:"。",
       py:"Nǐ yǒudiǎnr gǎnmào, wǒ gěi nǐ kāi diǎnr yào.",
       vn:"Bạn hơi cảm, tôi kê cho bạn ít thuốc."}]},
    {num:6, stmt:"这几天的天气不太好。", judge:true, lines:[
      {pre:"", blank:"最近天气越来越冷，还总是下雨", post:"。",
       py:"Zuìjìn tiānqì yuè lái yuè lěng, hái zǒngshì xiàyǔ.",
       vn:"Dạo này thời tiết ngày càng lạnh, lại còn hay mưa nữa."}]},
    {num:7, stmt:"现在他的病好了。", judge:true, lines:[
      {pre:"我感冒好了，", blank:"明天你不用来照顾我了", post:"。",
       py:"Wǒ gǎnmào hǎo le, míngtiān nǐ búyòng lái zhàogù wǒ le.",
       vn:"Tôi khỏi cảm rồi, ngày mai bạn không cần đến chăm sóc tôi nữa."}]},
    {num:8, stmt:"小方现在比去年瘦。", judge:false, lines:[
      {pre:"小方最近越来越胖，", blank:"去年买的裙子都不能穿了", post:"。",
       py:"Xiǎo Fāng zuìjìn yuè lái yuè pàng, qùnián mǎi de qúnzi dōu bù néng chuān le.",
       vn:"Tiểu Phương dạo này ngày càng béo, váy mua năm ngoái đều không mặc vừa nữa."}]},
    {num:9, stmt:"儿子不想吃饭，所以瘦了。", judge:false, lines:[
      {pre:"我儿子最近瘦了，", blank:"工作太忙，没时间吃饭", post:"。",
       py:"Wǒ érzi zuìjìn shòu le, gōngzuò tài máng, méi shíjiān chīfàn.",
       vn:"Con trai tôi dạo này gầy đi, công việc quá bận, không có thời gian ăn cơm."}]},
    {num:10, stmt:"冬天快到了。", judge:false, lines:[
      {pre:"天气越来越热，", blank:"大家穿得越来越少", post:"。",
       py:"Tiānqì yuè lái yuè rè, dàjiā chuān de yuè lái yuè shǎo.",
       vn:"Thời tiết ngày càng nóng, mọi người mặc ngày càng ít."}]}
  ],
  mc: [
    {num:11, options:["吃药","多喝水","少吃水果"], ans:1, q:"男的让女的做什么？",
     lines:[
      {speaker:"女", pre:"医生，", blank:"我的病用吃药吗", post:"？",
       py:"Yīshēng, wǒ de bìng yòng chī yào ma?",
       vn:"Bác sĩ, bệnh của tôi có cần uống thuốc không?"},
      {speaker:"男", pre:"不用吃药，", blank:"回家多喝些水，多吃些水果", post:"。",
       py:"Búyòng chī yào, huí jiā duō hē xiē shuǐ, duō chī xiē shuǐguǒ.",
       vn:"Không cần uống thuốc, về nhà uống nhiều nước, ăn nhiều trái cây."}
     ],
     explain:"女：医生，我的病用吃药吗？男：不用吃药，回家多喝些水，多吃些水果。问：男的让女的做什么？ → 多喝水。"},
    {num:12, options:["越来越好","不发烧了","还在生病"], ans:2, q:"女的现在怎么样了？",
     lines:[
      {speaker:"男", pre:"听说你最近不舒服，", blank:"好些了吗", post:"？",
       py:"Tīngshuō nǐ zuìjìn bù shūfu, hǎo xiē le ma?",
       vn:"Nghe nói dạo này bạn không khỏe, đỡ hơn chưa?"},
      {speaker:"女", pre:"前天感冒，昨天发烧，", blank:"头也越来越疼", post:"。",
       py:"Qiántiān gǎnmào, zuótiān fā shāo, tóu yě yuè lái yuè téng.",
       vn:"Hôm kia bị cảm, hôm qua sốt, đầu cũng đau ngày càng nhiều."}
     ],
     explain:"男：听说你最近不舒服，好些了吗？女：前天感冒，昨天发烧，头也越来越疼。问：女的现在怎么样了？ → 还在生病。"},
    {num:13, options:["女的很聪明","女的很不错","女的给他介绍的女朋友很好"], ans:2, q:"男的为什么说\"谢谢\"？",
     lines:[
      {speaker:"女", pre:"上次我为你介绍的那个女朋友", blank:"怎么样", post:"？",
       py:"Shàng cì wǒ wèi nǐ jièshào de nàge nǚpéngyou zěnmeyàng?",
       vn:"Cô bạn gái lần trước tôi giới thiệu cho bạn thế nào?"},
      {speaker:"男", pre:"人很不错，又聪明又漂亮。", blank:"谢谢你", post:"！",
       py:"Rén hěn búcuò, yòu cōngming yòu piàoliang. Xièxie nǐ!",
       vn:"Cô ấy rất tốt, vừa thông minh vừa xinh đẹp. Cảm ơn bạn!"}
     ],
     explain:"女：上次我为你介绍的那个女朋友怎么样？男：人很不错，又聪明又漂亮。谢谢你！问：男的为什么说\"谢谢\"？ → 女的给他介绍的女朋友很好。"},
    {num:14, options:["越来越不容易","越来越容易","越来越没意思"], ans:1, q:"女的觉得汉语怎么样？",
     lines:[
      {speaker:"男", pre:"我觉得汉语", blank:"越来越难了", post:"。",
       py:"Wǒ juéde Hànyǔ yuè lái yuè nán le.",
       vn:"Tôi thấy tiếng Trung ngày càng khó."},
      {speaker:"女", pre:"是吗？我怎么觉得", blank:"越来越容易，也越来越有意思啊", post:"！",
       py:"Shì ma? Wǒ zěnme juéde yuè lái yuè róngyì, yě yuè lái yuè yǒu yìsi a!",
       vn:"Vậy à? Sao tôi lại thấy ngày càng dễ, cũng ngày càng thú vị nữa!"}
     ],
     explain:"男：我觉得汉语越来越难了。女：是吗？我怎么觉得越来越容易，也越来越有意思啊！问：女的觉得汉语怎么样？ → 越来越容易。"},
    {num:15, options:["越来越好","没来上班","不用吃药了"], ans:0, q:"男的现在怎么样了？",
     lines:[
      {speaker:"女", pre:"你不是发烧了吗？", blank:"怎么还来上班", post:"？",
       py:"Nǐ bú shì fā shāo le ma? Zěnme hái lái shàngbān?",
       vn:"Bạn chẳng phải bị sốt sao? Sao vẫn đến làm vậy?"},
      {speaker:"男", pre:"", blank:"我吃了药，好些了", post:"。",
       py:"Wǒ chīle yào, hǎo xiē le.",
       vn:"Tôi uống thuốc rồi, đỡ hơn rồi."}
     ],
     explain:"女：你不是发烧了吗？怎么还来上班？男：我吃了药，好些了。问：男的现在怎么样了？ → 越来越好。"},
    {num:16, options:["天气不那么冷了","草和树都绿了","没有课了"], ans:2, q:"男的为什么喜欢7月和8月？",
     lines:[
      {speaker:"女1", pre:"我喜欢3月，", blank:"因为天气不那么冷了", post:"。",
       py:"Wǒ xǐhuan sān yuè, yīnwèi tiānqì bú nàme lěng le.",
       vn:"Tôi thích tháng 3, vì thời tiết không còn lạnh nữa."},
      {speaker:"女2", pre:"我喜欢5月，", blank:"草和树都绿了，花也开了", post:"。",
       py:"Wǒ xǐhuan wǔ yuè, cǎo hé shù dōu lǜ le, huā yě kāi le.",
       vn:"Tôi thích tháng 5, cỏ và cây đều xanh rồi, hoa cũng nở rồi."},
      {speaker:"女1", pre:"我也喜欢6月，", blank:"大家不用穿冬天的衣服了", post:"。",
       py:"Wǒ yě xǐhuan liù yuè, dàjiā búyòng chuān dōngtiān de yīfu le.",
       vn:"Tôi cũng thích tháng 6, mọi người không cần mặc quần áo mùa đông nữa."},
      {speaker:"男", pre:"我喜欢1月、2月、7月和8月，", blank:"因为不用去上课了", post:"。",
       py:"Wǒ xǐhuan yī yuè, èr yuè, qī yuè hé bā yuè, yīnwèi búyòng qù shàngkè le.",
       vn:"Tôi thích tháng 1, 2, 7 và 8, vì không cần đi học nữa."}
     ],
     explain:"女1：我喜欢3月，因为天气不那么冷了。女2：我喜欢5月，草和树都绿了，花也开了。女1：我也喜欢6月，大家不用穿冬天的衣服了。男：我喜欢1月、2月、7月和8月，因为不用去上课了。问：男的为什么喜欢7月和8月？ → 没有课了。"},
    {num:17, options:["天黑了","白天没有时间","天黑得晚了"], ans:2, q:"\"天长了\"是什么意思？",
     lines:[
      {speaker:"女", pre:"", blank:"现在天长了", post:"。",
       py:"Xiànzài tiān cháng le.",
       vn:"Bây giờ ngày dài ra rồi."},
      {speaker:"男", pre:"", blank:"这是什么意思", post:"？",
       py:"Zhè shì shénme yìsi?",
       vn:"Cái này nghĩa là gì?"},
      {speaker:"女", pre:"\"天长了\"就是", blank:"天黑得越来越晚", post:"。",
       py:"\"Tiān cháng le\" jiùshì tiān hēi de yuè lái yuè wǎn.",
       vn:"\"Ngày dài ra\" nghĩa là trời tối ngày càng muộn."},
      {speaker:"男", pre:"我懂了，就是", blank:"白天的时间越来越长了", post:"。",
       py:"Wǒ dǒng le, jiùshì báitiān de shíjiān yuè lái yuè cháng le.",
       vn:"Tôi hiểu rồi, tức là thời gian ban ngày ngày càng dài ra."}
     ],
     explain:"女：现在天长了。男：这是什么意思？女：\"天长了\"就是天黑得越来越晚。男：我懂了，就是白天的时间越来越长了。问：\"天长了\"是什么意思？ → 天黑得晚了。"},
    {num:18, options:["男女朋友","医生和病人","丈夫和妻子"], ans:1, q:"这两个人可能是什么关系？",
     lines:[
      {speaker:"女", pre:"", blank:"今天好些了吗", post:"？",
       py:"Jīntiān hǎo xiē le ma?",
       vn:"Hôm nay đỡ hơn chưa?"},
      {speaker:"男", pre:"这几天一直吃药，", blank:"现在好些了，腿也不疼了", post:"。",
       py:"Zhè jǐ tiān yìzhí chī yào, xiànzài hǎo xiē le, tuǐ yě bù téng le.",
       vn:"Mấy hôm nay uống thuốc liên tục, giờ đỡ hơn rồi, chân cũng hết đau rồi."},
      {speaker:"女", pre:"", blank:"那不用再吃药了", post:"。",
       py:"Nà búyòng zài chī yào le.",
       vn:"Vậy thì không cần uống thuốc nữa."},
      {speaker:"男", pre:"太好了，", blank:"谢谢您", post:"！",
       py:"Tài hǎo le, xièxie nín!",
       vn:"Tuyệt quá, cảm ơn bác sĩ!"}
     ],
     explain:"女：今天好些了吗？男：这几天一直吃药，现在好些了，腿也不疼了。女：那不用再吃药了。男：太好了，谢谢您！问：这两个人可能是什么关系？ → 医生和病人。"},
    {num:19, options:["买花","看花","看雨"], ans:0, q:"他们要做什么？",
     lines:[
      {speaker:"男", pre:"你看，", blank:"天晴了", post:"。",
       py:"Nǐ kàn, tiān qíng le.",
       vn:"Bạn xem, trời quang rồi."},
      {speaker:"女", pre:"这么快就不下雨了？", blank:"我们出去吧", post:"。",
       py:"Zhème kuài jiù bú xiàyǔ le? Wǒmen chūqu ba.",
       vn:"Nhanh vậy đã hết mưa rồi à? Chúng ta ra ngoài đi."},
      {speaker:"男", pre:"好啊，", blank:"带孩子们去外边买些花回来", post:"。",
       py:"Hǎo a, dài háizimen qù wàibian mǎi xiē huā huílai.",
       vn:"Được đấy, đưa bọn trẻ ra ngoài mua ít hoa về."},
      {speaker:"女", pre:"好，", blank:"我去叫他们", post:"。",
       py:"Hǎo, wǒ qù jiào tāmen.",
       vn:"Được, tôi đi gọi bọn trẻ."}
     ],
     explain:"男：你看，天晴了。女：这么快就不下雨了？我们出去吧。男：好啊，带孩子们去外边买些花回来。女：好，我去叫他们。问：他们要做什么？ → 买花。"},
    {num:20, options:["瘦了","胖了","吃得少了"], ans:1, q:"男的有什么问题？",
     lines:[
      {speaker:"男", pre:"我要买裤子了，", blank:"这条裤子现在已经不能穿了", post:"。",
       py:"Wǒ yào mǎi kùzi le, zhè tiáo kùzi xiànzài yǐjīng bù néng chuān le.",
       vn:"Tôi phải mua quần rồi, cái quần này giờ không mặc vừa nữa rồi."},
      {speaker:"女", pre:"", blank:"你瘦了吗", post:"？",
       py:"Nǐ shòu le ma?",
       vn:"Bạn gầy đi à?"},
      {speaker:"男", pre:"什么啊，", blank:"我要买条大一号的", post:"。",
       py:"Shénme a, wǒ yào mǎi tiáo dà yí hào de.",
       vn:"Gì cơ, tôi phải mua cái to hơn một size."},
      {speaker:"女", pre:"你现在吃得越来越多，也不运动，", blank:"能不胖吗", post:"？",
       py:"Nǐ xiànzài chī de yuè lái yuè duō, yě bú yùndòng, néng bú pàng ma?",
       vn:"Bạn giờ ăn ngày càng nhiều, cũng không vận động, sao mà không béo được?"}
     ],
     explain:"男：我要买裤子了，这条裤子现在已经不能穿了。女：你瘦了吗？男：什么啊，我要买条大一号的。女：你现在吃得越来越多，也不运动，能不胖吗？问：男的有什么问题？ → 胖了。"}
  ]
};
