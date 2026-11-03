// HSK 4 (3.0) · Bai 12 — sinh boi tools/hsk4v3/gan.js tu tools/hsk4v3/bai-12/ (dung sua tay).
var vocabData = [
 {
  "n": 1,
  "zh": "毛衣",
  "py": "máoyī",
  "pos": "Danh từ",
  "vn": "áo len",
  "hv": "mao y",
  "em": "🧶",
  "lesson": 1,
  "explain": [
   "Áo đan bằng len (毛 = lông, sợi len; 衣 = áo), mặc vào mùa thu, mùa đông cho ấm."
  ],
  "usage": "一件毛衣 · 穿 / 脱 / 织毛衣 · 毛衣的颜色 / 样子.",
  "collo": [
   "一件毛衣",
   "穿毛衣",
   "厚毛衣",
   "给妈妈买毛衣"
  ],
  "colloFull": [
   {
    "zh": "一件毛衣",
    "py": "Yí jiàn máoyī",
    "vn": "một chiếc áo len"
   },
   {
    "zh": "穿毛衣",
    "py": "Chuān máoyī",
    "vn": "mặc áo len"
   },
   {
    "zh": "厚毛衣",
    "py": "Hòu máoyī",
    "vn": "áo len dày"
   },
   {
    "zh": "给妈妈买毛衣",
    "py": "Gěi māma mǎi máoyī",
    "vn": "mua áo len cho mẹ"
   }
  ],
  "patterns": [
   {
    "s": "一件 + 毛衣",
    "m": "Lượng từ của áo là 件 (✗ 一个毛衣)"
   }
  ],
  "ex_zh": "你觉得老妈穿这件毛衣怎么样？",
  "ex_py": "Nǐ juéde lǎomā chuān zhè jiàn máoyī zěnmeyàng?",
  "ex_vn": "Anh thấy mẹ mặc chiếc áo len này thế nào?",
  "exList": [
   {
    "zh": "你觉得老妈穿这件毛衣怎么样？",
    "py": "Nǐ juéde lǎomā chuān zhè jiàn máoyī zěnmeyàng?",
    "vn": "Anh thấy mẹ mặc chiếc áo len này thế nào?"
   },
   {
    "zh": "天气越来越冷了，妈妈给我买了一件厚毛衣。",
    "py": "Tiānqì yuèláiyuè lěng le, māma gěi wǒ mǎi le yí jiàn hòu máoyī.",
    "vn": "Trời ngày càng lạnh, mẹ mua cho tôi một chiếc áo len dày."
   }
  ],
  "hanzi": [
   {
    "c": "毛",
    "p": "máo",
    "type": "独体字 · Chữ đơn thể",
    "st": 4,
    "ord": "丿 → 一 → 一 → 乚",
    "rad": "毛 (mao)",
    "mean": "lông",
    "tip": "Tượng hình túm LÔNG. 毛巾 (Bài 14), 毛衣 (áo len), 一毛钱 (hào), 毛病.",
    "cf": "手 (shǒu – tay)",
    "w": "毛 / 毛巾 / 毛衣 / 毛病"
   },
   {
    "c": "衣",
    "p": "yī",
    "type": "独体字 · Tượng hình",
    "st": 6,
    "ord": "亠→𧘇(biến thể)",
    "rad": "衣 (y – tự thành bộ)",
    "mean": "áo, quần áo",
    "tip": "Hình chiếc áo có cổ và hai vạt xòe ra → ÁO, QUẦN ÁO.",
    "cf": "农 (nóng – \"nông nghiệp\")",
    "w": "衣服"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Chiếc áo len này kiểu dáng đẹp, chất lượng cũng không tệ.",
    "answer": "这件毛衣样子好看，质量也不错。",
    "answerPy": "Zhè jiàn máoyī yàngzi hǎokàn, zhìliàng yě búcuò.",
    "note": "Ôn 既……又…… có thể thay: 这件毛衣既好看又便宜 (Bài 4 · điểm 3).",
    "pair": "这件毛衣 + 样子 / 质量……"
   },
   {
    "promptLang": "vi",
    "prompt": "Nếu trời lạnh thì con mặc áo len vào nhé.",
    "answer": "要是天冷，你就穿上毛衣吧。",
    "answerPy": "Yàoshi tiān lěng, nǐ jiù chuānshang máoyī ba.",
    "note": "Ôn 要是……，就…… (Bài 1 · điểm 2).",
    "pair": "要是……，就……"
   }
  ]
 },
 {
  "n": 2,
  "zh": "样子",
  "py": "yàngzi",
  "pos": "Danh từ",
  "vn": "kiểu dáng, kiểu; dáng vẻ",
  "hv": "dạng tử",
  "em": "👗",
  "lesson": 1,
  "explain": [
   "Hình dáng bên ngoài của đồ vật (quần áo, giày, đồ dùng) — trong bài nghĩa là “kiểu dáng”.",
   "Còn dùng chỉ dáng vẻ, vẻ mặt của người: 看他的样子，好像很累 (nhìn dáng vẻ của anh ấy hình như rất mệt)."
  ],
  "usage": "样子不错 / 好看 / 很新 · 衣服的样子 · 看(他的)样子…….",
  "collo": [
   "样子不错",
   "样子好看",
   "衣服的样子",
   "看样子"
  ],
  "colloFull": [
   {
    "zh": "样子不错",
    "py": "Yàngzi búcuò",
    "vn": "kiểu dáng không tệ"
   },
   {
    "zh": "样子好看",
    "py": "Yàngzi hǎokàn",
    "vn": "kiểu đẹp"
   },
   {
    "zh": "衣服的样子",
    "py": "Yīfu de yàngzi",
    "vn": "kiểu dáng quần áo"
   },
   {
    "zh": "看样子",
    "py": "Kàn yàngzi",
    "vn": "xem ra, trông có vẻ"
   }
  ],
  "patterns": [
   {
    "s": "N + 的样子 + 好看 / 不错",
    "m": "Nói về kiểu dáng đồ vật"
   },
   {
    "s": "看样子，……",
    "m": "Xem ra … (đoán qua vẻ bề ngoài)"
   }
  ],
  "ex_zh": "样子不错，就是颜色好像不怎么适合她。",
  "ex_py": "Yàngzi búcuò, jiùshì yánsè hǎoxiàng bù zěnme shìhé tā.",
  "ex_vn": "Kiểu dáng không tệ, chỉ là màu sắc hình như không hợp lắm với mẹ.",
  "exList": [
   {
    "zh": "样子不错，就是颜色好像不怎么适合她。",
    "py": "Yàngzi búcuò, jiùshì yánsè hǎoxiàng bù zěnme shìhé tā.",
    "vn": "Kiểu dáng không tệ, chỉ là màu sắc hình như không hợp lắm với mẹ."
   },
   {
    "zh": "看他的样子，今天心情不怎么好。",
    "py": "Kàn tā de yàngzi, jīntiān xīnqíng bù zěnme hǎo.",
    "vn": "Nhìn dáng vẻ của cậu ấy thì hôm nay tâm trạng không tốt lắm."
   }
  ],
  "hanzi": [
   {
    "c": "样",
    "p": "yàng",
    "type": "左右结构 · Trái-phải (giản thể)",
    "st": 10,
    "ord": "木 (mộc) trái → 羊 (dương) phải",
    "rad": "木 (mộc – cây)",
    "mean": "kiểu mẫu, dáng vẻ",
    "tip": "Bộ cây 木 (khuôn mẫu bằng gỗ) + 羊(biểu âm) → KHUÔN MẪU để tạo hình, mở rộng thành KIỂU DÁNG, DÁNG VẺ.",
    "cf": "洋 (yáng – \"đại dương\", bộ 氵\")",
    "w": "样子 / 一样 / 怎么样"
   },
   {
    "c": "子",
    "p": "zi",
    "type": "象形字 · Chữ tượng hình",
    "st": 3,
    "ord": "ngang gập → sổ móc → ngang (hất)",
    "rad": "子 (tử – con)",
    "mean": "con; hậu tố danh từ",
    "tip": "Hình đứa bé quấn tã. Trong 句子、本子、箱子 là hậu tố, đọc nhẹ \"zi\".",
    "cf": "字 zì (chữ) — thêm 宀 ở trên",
    "w": "句子 / 本子 / 箱子"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Đôi giày này kiểu dáng rất đẹp, chỉ là hơi đắt.",
    "answer": "这双鞋样子很好看，就是有点儿贵。",
    "answerPy": "Zhè shuāng xié yàngzi hěn hǎokàn, jiùshì yǒudiǎnr guì.",
    "note": "Ôn ……×是×，就是…… (Bài 3 · điểm 1).",
    "pair": "……，就是……"
   },
   {
    "promptLang": "vi",
    "prompt": "Xem ra hôm nay trời sắp mưa, chúng ta đừng ra ngoài nữa.",
    "answer": "看样子今天要下雨了，咱们别出去了。",
    "answerPy": "Kàn yàngzi jīntiān yào xiàyǔ le, zánmen bié chūqu le.",
    "note": "看样子 = xem ra; 要……了 = sắp (HSK 2).",
    "pair": "看样子，……"
   }
  ]
 },
 {
  "n": 3,
  "zh": "适合",
  "py": "shìhé",
  "pos": "Động từ",
  "vn": "hợp với, phù hợp với",
  "hv": "thích hợp",
  "em": "✅",
  "lesson": 1,
  "explain": [
   "Phù hợp với tình hình thực tế hoặc yêu cầu của ai / cái gì. 适合 là ĐỘNG TỪ nên mang tân ngữ trực tiếp: 适合她, 适合老年人."
  ],
  "usage": "适合 + người / việc · 不(怎么)适合 · 很适合.",
  "collo": [
   "适合她",
   "适合老年人",
   "不太适合",
   "适合穿"
  ],
  "colloFull": [
   {
    "zh": "适合她",
    "py": "Shìhé tā",
    "vn": "hợp với cô ấy"
   },
   {
    "zh": "适合老年人",
    "py": "Shìhé lǎoniánrén",
    "vn": "hợp với người già"
   },
   {
    "zh": "不太适合",
    "py": "Bú tài shìhé",
    "vn": "không hợp lắm"
   },
   {
    "zh": "适合穿",
    "py": "Shìhé chuān",
    "vn": "hợp để mặc"
   }
  ],
  "patterns": [
   {
    "s": "A + 适合 + B",
    "m": "适合 + tân ngữ trực tiếp (✗ 对她适合)"
   },
   {
    "s": "适合 ≠ 合适",
    "m": "合适 là tính từ: 很合适 / 正合适, không mang tân ngữ (✗ 合适她)"
   }
  ],
  "ex_zh": "样子不错，就是颜色好像不怎么适合她。",
  "ex_py": "Yàngzi búcuò, jiùshì yánsè hǎoxiàng bù zěnme shìhé tā.",
  "ex_vn": "Kiểu dáng không tệ, chỉ là màu sắc hình như không hợp lắm với mẹ.",
  "exList": [
   {
    "zh": "样子不错，就是颜色好像不怎么适合她。",
    "py": "Yàngzi búcuò, jiùshì yánsè hǎoxiàng bù zěnme shìhé tā.",
    "vn": "Kiểu dáng không tệ, chỉ là màu sắc hình như không hợp lắm với mẹ."
   },
   {
    "zh": "这个工作既轻松又离家近，很适合你。",
    "py": "Zhège gōngzuò jì qīngsōng yòu lí jiā jìn, hěn shìhé nǐ.",
    "vn": "Công việc này vừa nhẹ nhàng vừa gần nhà, rất hợp với bạn."
   }
  ],
  "hanzi": [
   {
    "c": "适",
    "p": "shì",
    "type": "半包围结构 · Bán bao vây (giản thể)",
    "st": 9,
    "ord": "辶 bao ngoài → 舌 trong",
    "rad": "辶 (sước – đi, chạy)",
    "mean": "vừa, hợp",
    "tip": "Bộ 辶 (đi tới) + 舌 (biểu âm) → ĐI ĐẾN ĐÚNG chỗ, mở rộng thành VỪA VẶN, PHÙ HỢP.",
    "cf": "话 (huà – \"lời nói\", cũng có 舌\")",
    "w": "适合 / 适应 / 合适"
   },
   {
    "c": "合",
    "p": "hé",
    "type": "上下结构 · Trên-dưới",
    "st": 6,
    "ord": "人 → 一 → 口",
    "rad": "口 (khẩu)",
    "mean": "hợp",
    "tip": "Cái nắp 亼 đậy lên miệng 口 → KHỚP, HỢP. 合适 = hợp và thích đáng; 适合 (Bài 8) đảo ngược = động từ.",
    "cf": "含 (hán – ngậm)",
    "w": "合适 / 适合 / 合作 / 合格"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Màu này rất hợp với bạn.",
    "answer": "这个颜色很适合你。",
    "answerPy": "Zhège yánsè hěn shìhé nǐ.",
    "note": "适合 + 你 (động từ); hoặc 这个颜色你穿很合适.",
    "pair": "适合 + O"
   },
   {
    "promptLang": "vi",
    "prompt": "Công việc này vừa không mệt vừa gần nhà, rất hợp với mẹ.",
    "answer": "这个工作既不累又离家近，很适合妈妈。",
    "answerPy": "Zhège gōngzuò jì bú lèi yòu lí jiā jìn, hěn shìhé māma.",
    "note": "Ôn 既……又…… (Bài 4 · điểm 3).",
    "pair": "既……又……，很适合……"
   }
  ]
 },
 {
  "n": 4,
  "zh": "售货员",
  "py": "shòuhuòyuán",
  "pos": "Danh từ",
  "vn": "nhân viên bán hàng",
  "hv": "thụ hóa viên",
  "em": "🛍️",
  "lesson": 1,
  "explain": [
   "Người bán hàng trong cửa hàng, trung tâm thương mại (售 = bán, 货 = hàng, 员 = người làm việc)."
  ],
  "usage": "商场的售货员 · 问售货员 · 售货员介绍…….",
  "collo": [
   "商场售货员",
   "问售货员",
   "热情的售货员",
   "当售货员"
  ],
  "colloFull": [
   {
    "zh": "商场售货员",
    "py": "Shāngchǎng shòuhuòyuán",
    "vn": "nhân viên bán hàng ở trung tâm thương mại"
   },
   {
    "zh": "问售货员",
    "py": "Wèn shòuhuòyuán",
    "vn": "hỏi nhân viên bán hàng"
   },
   {
    "zh": "热情的售货员",
    "py": "Rèqíng de shòuhuòyuán",
    "vn": "nhân viên bán hàng nhiệt tình"
   },
   {
    "zh": "当售货员",
    "py": "Dāng shòuhuòyuán",
    "vn": "làm nhân viên bán hàng"
   }
  ],
  "patterns": [
   {
    "s": "售 (bán) ↔ 买 (mua)",
    "m": "售票员 (người bán vé) cũng theo cách cấu tạo này"
   }
  ],
  "ex_zh": "售货员说，老年人穿这种颜色的衣服正合适。",
  "ex_py": "Shòuhuòyuán shuō, lǎoniánrén chuān zhè zhǒng yánsè de yīfu zhèng héshì.",
  "ex_vn": "Nhân viên bán hàng nói người già mặc quần áo màu này là vừa hợp.",
  "exList": [
   {
    "zh": "售货员说，老年人穿这种颜色的衣服正合适。",
    "py": "Shòuhuòyuán shuō, lǎoniánrén chuān zhè zhǒng yánsè de yīfu zhèng héshì.",
    "vn": "Nhân viên bán hàng nói người già mặc quần áo màu này là vừa hợp."
   },
   {
    "zh": "这家店的售货员很热情，有任何问题都可以问她们。",
    "py": "Zhè jiā diàn de shòuhuòyuán hěn rèqíng, yǒu rènhé wèntí dōu kěyǐ wèn tāmen.",
    "vn": "Nhân viên bán hàng của cửa hàng này rất nhiệt tình, có bất kỳ thắc mắc nào cũng có thể hỏi họ."
   }
  ],
  "hanzi": [
   {
    "c": "售",
    "p": "shòu",
    "type": "上下结构 · Trên-dưới",
    "st": 11,
    "ord": "隹 (chuy) trên → 口 (khẩu) dưới",
    "rad": "口 (khẩu – miệng)",
    "mean": "bán",
    "tip": "Bộ miệng 口 (rao bán) + 隹(chim, biểu âm) → hành động RAO BÁN, kết hợp 货(hàng hóa) + 员(người) thành 售货员 = NHÂN VIÊN BÁN HÀNG.",
    "cf": "焦 (jiāo – \"cháy khét\", bộ 灬\")",
    "w": "售货员 / 出售 / 销售"
   },
   {
    "c": "货",
    "p": "huò",
    "type": "上下结构 · Trên-dưới",
    "st": 8,
    "ord": "化(hoá) trên → 贝(bối) dưới",
    "rad": "贝 (bối – vỏ sò, tiền cổ)",
    "mean": "hàng hoá",
    "tip": "化(biến hoá, đổi) + 贝(tiền) → đổi tiền lấy vật → HÀNG HOÁ.",
    "cf": "贷 (dài – \"vay, cho vay\", trên là 代 thay vì 化\")",
    "w": "售货员 / 货物 / 国货"
   },
   {
    "c": "员",
    "p": "yuán",
    "type": "会意字 · Chữ hội ý",
    "st": 7,
    "ord": "口 → 贝",
    "rad": "口 (khẩu – miệng)",
    "mean": "người, viên (người làm việc)",
    "tip": "Trên 口, dưới 贝 (tiền): người làm việc nhận tiền công → nhân viên. Luôn đứng sau từ khác: 服务员, 售货员 (HSK1 Bài 10).",
    "cf": "贝 bèi — không có 口 ở trên",
    "w": "服务员 / 售货员"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Nhân viên bán hàng giới thiệu với chúng tôi mấy chiếc áo len.",
    "answer": "售货员给我们介绍了几件毛衣。",
    "answerPy": "Shòuhuòyuán gěi wǒmen jièshào le jǐ jiàn máoyī.",
    "note": "给 + ai + 介绍 (HSK 3).",
    "pair": "给……介绍……"
   },
   {
    "promptLang": "vi",
    "prompt": "Tôi hỏi nhân viên bán hàng, cô ấy nói hôm nay toàn bộ cửa hàng giảm giá.",
    "answer": "我问了售货员，她说今天全场打折。",
    "answerPy": "Wǒ wèn le shòuhuòyuán, tā shuō jīntiān quán chǎng dǎzhé.",
    "note": "Ôn từ mới 全场, 打折.",
    "pair": "问……，她说……"
   }
  ]
 },
 {
  "n": 5,
  "zh": "质量",
  "py": "zhìliàng",
  "pos": "Danh từ",
  "vn": "chất lượng",
  "hv": "chất lượng",
  "em": "🏅",
  "lesson": 1,
  "explain": [
   "Mức độ tốt xấu của sản phẩm, công việc. Hán Việt “chất lượng” — nghĩa giống hệt tiếng Việt, dễ nhớ."
  ],
  "usage": "质量好 / 不错 / 差 · 提高质量 · 质量问题.",
  "collo": [
   "质量好",
   "质量差",
   "提高质量",
   "质量问题"
  ],
  "colloFull": [
   {
    "zh": "质量好",
    "py": "Zhìliàng hǎo",
    "vn": "chất lượng tốt"
   },
   {
    "zh": "质量差",
    "py": "Zhìliàng chà",
    "vn": "chất lượng kém"
   },
   {
    "zh": "提高质量",
    "py": "Tígāo zhìliàng",
    "vn": "nâng cao chất lượng"
   },
   {
    "zh": "质量问题",
    "py": "Zhìliàng wèntí",
    "vn": "vấn đề chất lượng"
   }
  ],
  "patterns": [
   {
    "s": "N + 的质量 + 好 / 差",
    "m": "Nhận xét chất lượng"
   },
   {
    "s": "提高 + 质量",
    "m": "Nâng cao chất lượng (✗ 增加质量)"
   }
  ],
  "ex_zh": "老年人穿这种颜色的衣服正合适，颜色不深，质量还特别好。",
  "ex_py": "Lǎoniánrén chuān zhè zhǒng yánsè de yīfu zhèng héshì, yánsè bù shēn, zhìliàng hái tèbié hǎo.",
  "ex_vn": "Người già mặc quần áo màu này là vừa hợp, màu không đậm, chất lượng lại đặc biệt tốt.",
  "exList": [
   {
    "zh": "老年人穿这种颜色的衣服正合适，颜色不深，质量还特别好。",
    "py": "Lǎoniánrén chuān zhè zhǒng yánsè de yīfu zhèng héshì, yánsè bù shēn, zhìliàng hái tèbié hǎo.",
    "vn": "Người già mặc quần áo màu này là vừa hợp, màu không đậm, chất lượng lại đặc biệt tốt."
   },
   {
    "zh": "这家店的东西不仅便宜，而且质量也不错。",
    "py": "Zhè jiā diàn de dōngxi bùjǐn piányi, érqiě zhìliàng yě búcuò.",
    "vn": "Đồ ở cửa hàng này không những rẻ mà chất lượng cũng không tệ."
   }
  ],
  "hanzi": [
   {
    "c": "质",
    "p": "zhì",
    "type": "会意字 · Chữ hội ý",
    "st": 8,
    "ord": "𠂆 → 十 → 贝",
    "rad": "贝 (bối – vỏ sò, tiền)",
    "mean": "chất, bản chất; chất lượng",
    "tip": "Phần trên vốn là cái rìu (斤) — đem rìu, đồ vật thật đi đổi lấy tiền của (贝): vật đem cầm cố phải có giá trị thật → thực chất, chất → 质量 (chất lượng).",
    "cf": "贡 gòng (cống) — trên là 工; 员 yuán (viên) — trên là 口",
    "w": "质量 / 气质 / 本质"
   },
   {
    "c": "量",
    "p": "liàng",
    "type": "上下结构 · Trên-dưới",
    "st": 12,
    "ord": "日 → 一 → 里",
    "rad": "里 (lý)",
    "mean": "lượng",
    "tip": "Hình cái cân đo lường → LƯỢNG (liàng). Đọc liáng = đo (量体温). 数量, 质量, 力量.",
    "cf": "重 (zhòng – nặng)",
    "w": "数量 / 质量 / 商量 (liang)"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Chiếc áo len này không những đẹp mà chất lượng còn rất tốt.",
    "answer": "这件毛衣不仅好看，而且质量也很好。",
    "answerPy": "Zhè jiàn máoyī bùjǐn hǎokàn, érqiě zhìliàng yě hěn hǎo.",
    "note": "Ôn 不仅……，而且…… (Bài 3 · điểm 2).",
    "pair": "不仅……，而且……"
   },
   {
    "promptLang": "vi",
    "prompt": "Dù đắt một chút, nhưng chất lượng tốt thì tôi mua.",
    "answer": "尽管贵一点儿，但是质量好的话我就买。",
    "answerPy": "Jǐnguǎn guì yìdiǎnr, dànshì zhìliàng hǎo de huà wǒ jiù mǎi.",
    "note": "Ôn 尽管……，但是…… (Bài 9 · điểm 2).",
    "pair": "尽管……，但是……"
   }
  ]
 },
 {
  "n": 6,
  "zh": "强",
  "py": "qiáng",
  "pos": "Tính từ",
  "vn": "hơn, tốt hơn; mạnh",
  "hv": "cường",
  "em": "💪",
  "lesson": 1,
  "explain": [
   "Trong bài: “tốt hơn, hơn” khi so sánh — A 比 B 强. 老妈高兴比什么都强 = mẹ vui là hơn tất cả.",
   "Nghĩa gốc: mạnh, khỏe (身体强, 能力强)."
  ],
  "usage": "A 比 B 强 · 比什么都强 · 能力强 · 很强.",
  "collo": [
   "比什么都强",
   "比我强",
   "能力很强",
   "越来越强"
  ],
  "colloFull": [
   {
    "zh": "比什么都强",
    "py": "Bǐ shénme dōu qiáng",
    "vn": "hơn bất cứ thứ gì"
   },
   {
    "zh": "比我强",
    "py": "Bǐ wǒ qiáng",
    "vn": "giỏi hơn tôi"
   },
   {
    "zh": "能力很强",
    "py": "Nénglì hěn qiáng",
    "vn": "năng lực rất mạnh"
   },
   {
    "zh": "越来越强",
    "py": "Yuèláiyuè qiáng",
    "vn": "ngày càng mạnh"
   }
  ],
  "patterns": [
   {
    "s": "A + 比 + B + 强 (+ 多了)",
    "m": "So sánh: A tốt / giỏi hơn B"
   },
   {
    "s": "……比什么都强",
    "m": "… là tốt nhất, hơn tất cả"
   }
  ],
  "ex_zh": "好的，老妈高兴比什么都强。",
  "ex_py": "Hǎo de, lǎomā gāoxìng bǐ shénme dōu qiáng.",
  "ex_vn": "Được, mẹ vui là hơn tất cả.",
  "exList": [
   {
    "zh": "好的，老妈高兴比什么都强。",
    "py": "Hǎo de, lǎomā gāoxìng bǐ shénme dōu qiáng.",
    "vn": "Được, mẹ vui là hơn tất cả."
   },
   {
    "zh": "他的中文水平比我强多了。",
    "py": "Tā de Zhōngwén shuǐpíng bǐ wǒ qiáng duō le.",
    "vn": "Trình độ tiếng Trung của anh ấy giỏi hơn tôi nhiều."
   }
  ],
  "hanzi": [
   {
    "c": "强",
    "p": "qiáng",
    "type": "形声字 · Chữ hình thanh",
    "st": 12,
    "ord": "弓 → 口 → 虫",
    "rad": "弓 (cung – cây cung)",
    "mean": "mạnh, khỏe; hơn, tốt hơn",
    "tip": "Cây cung (弓) kéo căng thật mạnh + bên phải là 口 trên 虫 (chữ gốc 強 vốn chỉ loài bọ vỏ cứng, chắc khỏe) → mạnh mẽ, cứng cỏi → 强; so sánh: A 比 B 强 = A hơn B.",
    "cf": "张 zhāng — bên phải là 长; 弘 hóng — bên phải chỉ có 厶",
    "w": "比什么都强 / 坚强 / 能力强"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Cả nhà khỏe mạnh là hơn tất cả.",
    "answer": "家人身体健康比什么都强。",
    "answerPy": "Jiārén shēntǐ jiànkāng bǐ shénme dōu qiáng.",
    "note": "比什么都强 — cách nói khẩu ngữ trong bài khoá 1.",
    "pair": "……比什么都强"
   },
   {
    "promptLang": "vi",
    "prompt": "So với năm ngoái, năng lực làm việc của cô ấy mạnh hơn nhiều.",
    "answer": "跟去年相比，她的工作能力强多了。",
    "answerPy": "Gēn qùnián xiāngbǐ, tā de gōngzuò nénglì qiáng duō le.",
    "note": "Ôn 跟……相比 (Bài 8 · điểm 3).",
    "pair": "跟……相比，……强多了"
   }
  ]
 },
 {
  "n": 7,
  "zh": "年底",
  "py": "niándǐ",
  "pos": "Danh từ",
  "vn": "cuối năm",
  "hv": "niên để",
  "em": "📅",
  "lesson": 1,
  "explain": [
   "Những ngày cuối cùng của một năm (底 = đáy, cuối). Tương tự: 月底 (cuối tháng)."
  ],
  "usage": "年底 + 有活动 / 打折 / 很忙 · 到了年底 · 今年年底.",
  "collo": [
   "今年年底",
   "到了年底",
   "年底打折",
   "月底"
  ],
  "colloFull": [
   {
    "zh": "今年年底",
    "py": "Jīnnián niándǐ",
    "vn": "cuối năm nay"
   },
   {
    "zh": "到了年底",
    "py": "Dào le niándǐ",
    "vn": "đến cuối năm"
   },
   {
    "zh": "年底打折",
    "py": "Niándǐ dǎzhé",
    "vn": "giảm giá cuối năm"
   },
   {
    "zh": "月底",
    "py": "Yuèdǐ",
    "vn": "cuối tháng"
   }
  ],
  "patterns": [
   {
    "s": "年底 ↔ 年初",
    "m": "cuối năm ↔ đầu năm"
   },
   {
    "s": "一到年底，就……",
    "m": "Cứ đến cuối năm là …"
   }
  ],
  "ex_zh": "我们店正好年底有活动，全场打七折呢，挺值的。",
  "ex_py": "Wǒmen diàn zhènghǎo niándǐ yǒu huódòng, quán chǎng dǎ qī zhé ne, tǐng zhí de.",
  "ex_vn": "Cửa hàng chúng tôi vừa hay cuối năm có chương trình, toàn bộ cửa hàng giảm 30% đấy, rất đáng.",
  "exList": [
   {
    "zh": "我们店正好年底有活动，全场打七折呢，挺值的。",
    "py": "Wǒmen diàn zhènghǎo niándǐ yǒu huódòng, quán chǎng dǎ qī zhé ne, tǐng zhí de.",
    "vn": "Cửa hàng chúng tôi vừa hay cuối năm có chương trình, toàn bộ cửa hàng giảm 30% đấy, rất đáng."
   },
   {
    "zh": "一到年底，公司就特别忙，大家都得加班。",
    "py": "Yí dào niándǐ, gōngsī jiù tèbié máng, dàjiā dōu děi jiābān.",
    "vn": "Cứ đến cuối năm là công ty đặc biệt bận, mọi người đều phải tăng ca."
   }
  ],
  "hanzi": [
   {
    "c": "年",
    "p": "nián",
    "type": "独体字 · Chữ đơn",
    "st": 6,
    "ord": "丿(phẩy) → 一 → 一 → 丨 → 一 (nét sổ xuyên giữa các nét ngang)",
    "rad": "干 (can – can dự)",
    "mean": "năm",
    "tip": "Hình ảnh cây lúa trĩu hạt được gánh về sau một mùa vụ, một chu kỳ canh tác → tượng trưng cho một NĂM.",
    "cf": "午 (wǔ – \"buổi trưa, giờ ngọ\", dễ nhầm vì nét ngang gần giống\")",
    "w": "新年 / 明年 / 今年"
   },
   {
    "c": "底",
    "p": "dǐ",
    "type": "半包围结构 · Nửa bao quanh",
    "st": 8,
    "ord": "广 bao → 氐 trong",
    "rad": "广 (nghiễm)",
    "mean": "đáy",
    "tip": "Mái 广 + 氐(thấp) → phần thấp nhất → ĐÁY. 到底 = đến đáy = đến cùng / rốt cuộc; 月底 = cuối tháng (Bài 11).",
    "cf": "低 (dī – thấp)",
    "w": "到底 / 月底 / 年底 / 底下"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Cuối năm nay tôi sẽ về quê thăm bố mẹ.",
    "answer": "今年年底我要回老家看父母。",
    "answerPy": "Jīnnián niándǐ wǒ yào huí lǎojiā kàn fùmǔ.",
    "note": "Ôn từ mới 老家, 父母 (bài khoá 3).",
    "pair": "年底 + V"
   },
   {
    "promptLang": "vi",
    "prompt": "Cuối năm trung tâm thương mại có chương trình, chúng ta đi xem đi.",
    "answer": "年底商场有活动，咱们去看看吧。",
    "answerPy": "Niándǐ shāngchǎng yǒu huódòng, zánmen qù kànkan ba.",
    "note": "Động từ lặp 看看 làm nhẹ đề nghị (HSK 2).",
    "pair": "年底……有活动"
   }
  ]
 },
 {
  "n": 8,
  "zh": "全",
  "py": "quán",
  "pos": "Tính từ / Phó từ",
  "vn": "toàn bộ, cả; đều, hoàn toàn",
  "hv": "toàn",
  "em": "💯",
  "lesson": 1,
  "explain": [
   "Tính từ: toàn bộ, cả (全场 = cả cửa hàng / cả hội trường, 全家 = cả nhà).",
   "Phó từ: đều, hoàn toàn — 全 + V: 他们全来了 (họ đến hết rồi)."
  ],
  "usage": "全场 · 全家 · 全国 · 全 + 都 + V.",
  "collo": [
   "全场",
   "全家",
   "全国",
   "全都"
  ],
  "colloFull": [
   {
    "zh": "全场",
    "py": "Quán chǎng",
    "vn": "toàn bộ cửa hàng / cả khán phòng"
   },
   {
    "zh": "全家",
    "py": "Quánjiā",
    "vn": "cả nhà"
   },
   {
    "zh": "全国",
    "py": "Quánguó",
    "vn": "cả nước"
   },
   {
    "zh": "全都",
    "py": "Quán dōu",
    "vn": "tất cả đều"
   }
  ],
  "patterns": [
   {
    "s": "全 + N (danh từ đơn âm tiết)",
    "m": "全家 / 全场 / 全国 / 全班"
   },
   {
    "s": "全(都) + V",
    "m": "Phó từ: đều, hết"
   }
  ],
  "ex_zh": "我们店正好年底有活动，全场打七折呢。",
  "ex_py": "Wǒmen diàn zhènghǎo niándǐ yǒu huódòng, quán chǎng dǎ qī zhé ne.",
  "ex_vn": "Cửa hàng chúng tôi vừa hay cuối năm có chương trình, toàn bộ cửa hàng giảm 30% đấy.",
  "exList": [
   {
    "zh": "我们店正好年底有活动，全场打七折呢。",
    "py": "Wǒmen diàn zhènghǎo niándǐ yǒu huódòng, quán chǎng dǎ qī zhé ne.",
    "vn": "Cửa hàng chúng tôi vừa hay cuối năm có chương trình, toàn bộ cửa hàng giảm 30% đấy."
   },
   {
    "zh": "春节的时候，我们全家都回老家过年。",
    "py": "Chūnjié de shíhou, wǒmen quánjiā dōu huí lǎojiā guònián.",
    "vn": "Dịp Tết, cả nhà chúng tôi đều về quê ăn Tết."
   }
  ],
  "hanzi": [
   {
    "c": "全",
    "p": "quán",
    "type": "上下结构 · Trên-dưới",
    "st": 6,
    "ord": "人 trên → 王 dưới",
    "rad": "人 (nhân)",
    "mean": "toàn vẹn",
    "tip": "Chữ hội ý ngọc 王 được cất TRỌN VẸN dưới mái 人 → TOÀN VẸN, kết hợp 部(phần) thành 全部 = TOÀN BỘ.",
    "cf": "金 (jīn – \"vàng\", tự dạng gần giống)",
    "w": "全部 / 完全 / 安全"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Cả nhà chúng tôi đều thích ăn sủi cảo mẹ làm.",
    "answer": "我们全家都喜欢吃妈妈包的饺子。",
    "answerPy": "Wǒmen quánjiā dōu xǐhuan chī māma bāo de jiǎozi.",
    "note": "全家 + 都 + V.",
    "pair": "全家都……"
   },
   {
    "promptLang": "vi",
    "prompt": "Bài tập hôm nay tôi làm xong hết rồi.",
    "answer": "今天的作业我全做完了。",
    "answerPy": "Jīntiān de zuòyè wǒ quán zuòwán le.",
    "note": "全 + V + 完 (bổ ngữ kết quả, HSK 3).",
    "pair": "全 + V完了"
   }
  ]
 },
 {
  "n": 9,
  "zh": "打折",
  "py": "dǎzhé",
  "pos": "Động từ",
  "vn": "giảm giá",
  "hv": "đả chiết",
  "em": "🏷️",
  "lesson": 1,
  "explain": [
   "Bán rẻ hơn giá gốc. ⚠️ Bẫy cho người Việt: 打七折 = bán bằng 70% giá = GIẢM 30% (không phải giảm 70%!). 打八折 = giảm 20%, 打九折 = giảm 10%.",
   "Là động từ ly hợp: 打 + số + 折 (打七折, 打几折?)."
  ],
  "usage": "打折 · 打七折 / 八折 · 打几折？ · 全场打折 · 打折活动.",
  "collo": [
   "全场打折",
   "打七折",
   "打折活动",
   "不打折"
  ],
  "colloFull": [
   {
    "zh": "全场打折",
    "py": "Quán chǎng dǎzhé",
    "vn": "toàn bộ cửa hàng giảm giá"
   },
   {
    "zh": "打七折",
    "py": "Dǎ qī zhé",
    "vn": "giảm 30%"
   },
   {
    "zh": "打折活动",
    "py": "Dǎzhé huódòng",
    "vn": "chương trình giảm giá"
   },
   {
    "zh": "不打折",
    "py": "Bù dǎzhé",
    "vn": "không giảm giá"
   }
  ],
  "patterns": [
   {
    "s": "打 + số + 折",
    "m": "打七折 = trả 70% giá (giảm 30%)"
   },
   {
    "s": "打几折？",
    "m": "Giảm bao nhiêu? (hỏi mức giảm)"
   }
  ],
  "ex_zh": "我们店正好年底有活动，全场打七折呢，挺值的。",
  "ex_py": "Wǒmen diàn zhènghǎo niándǐ yǒu huódòng, quán chǎng dǎ qī zhé ne, tǐng zhí de.",
  "ex_vn": "Cửa hàng chúng tôi vừa hay cuối năm có chương trình, toàn bộ cửa hàng giảm 30% đấy, rất đáng.",
  "exList": [
   {
    "zh": "我们店正好年底有活动，全场打七折呢，挺值的。",
    "py": "Wǒmen diàn zhènghǎo niándǐ yǒu huódòng, quán chǎng dǎ qī zhé ne, tǐng zhí de.",
    "vn": "Cửa hàng chúng tôi vừa hay cuối năm có chương trình, toàn bộ cửa hàng giảm 30% đấy, rất đáng."
   },
   {
    "zh": "这件毛衣打八折，原来五百元，现在只要四百元。",
    "py": "Zhè jiàn máoyī dǎ bā zhé, yuánlái wǔbǎi yuán, xiànzài zhǐyào sìbǎi yuán.",
    "vn": "Chiếc áo len này giảm 20%, giá gốc 500 tệ, giờ chỉ cần 400 tệ."
   }
  ],
  "hanzi": [
   {
    "c": "打",
    "p": "dǎ",
    "type": "形声字 · Chữ hình thanh",
    "st": 5,
    "ord": "扌 → 丁",
    "rad": "扌 (thủ – tay)",
    "mean": "đánh; chơi; gọi",
    "tip": "Môn thể thao dùng tay thì đi với 打 (打篮球), dùng chân thì đi với 踢 (踢足球).",
    "cf": "踢 (tī – đá)",
    "w": "打篮球 / 打电话 / 打开"
   },
   {
    "c": "折",
    "p": "zhé",
    "type": "左右结构 · Trái-phải",
    "st": 7,
    "ord": "扌 (thủ) trái → 斤 (cân) phải",
    "rad": "扌 (thủ – tay)",
    "mean": "bẻ gãy, chiết khấu",
    "tip": "Bộ tay 扌 + 斤(rìu, cắt) → dùng tay BẺ GÃY, mở rộng thành CHIẾT KHẤU (bẻ giảm giá xuống), kết hợp 打(đánh, làm) thành 打折 = GIẢM GIÁ.",
    "cf": "拆 (chāi – \"tháo dỡ\", bộ 扌 + 斥\")",
    "w": "打折 / 折扣 / 打八折"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Hôm nay trung tâm thương mại giảm 50%, đông người kinh khủng.",
    "answer": "今天商场打五折，人特别多。",
    "answerPy": "Jīntiān shāngchǎng dǎ wǔ zhé, rén tèbié duō.",
    "note": "打五折 = trả 50% giá = giảm 50%.",
    "pair": "打 + số + 折"
   },
   {
    "promptLang": "vi",
    "prompt": "Dù có giảm giá thì tôi cũng không mua, vì chất lượng không tốt lắm.",
    "answer": "就是打折我也不买，因为质量不怎么好。",
    "answerPy": "Jiùshì dǎzhé wǒ yě bù mǎi, yīnwèi zhìliàng bù zěnme hǎo.",
    "note": "Ôn 就是……也…… (Bài 11 · điểm 2) + 不怎么 (điểm 1 bài này).",
    "pair": "就是……也……"
   }
  ]
 },
 {
  "n": 10,
  "zh": "值",
  "py": "zhí",
  "pos": "Tính từ / Động từ",
  "vn": "đáng (giá); đáng để",
  "hv": "trị",
  "em": "💰",
  "lesson": 1,
  "explain": [
   "Tính từ: đáng tiền, xứng đáng — 挺值的 (rất đáng).",
   "Động từ: có giá trị bằng, đáng để — 值多少钱? (đáng bao nhiêu tiền?), 值得 (đáng để làm)."
  ],
  "usage": "挺值的 · 很值 · 不值 · 值 + số tiền · 值得 + V.",
  "collo": [
   "挺值的",
   "不值",
   "值多少钱",
   "都值了"
  ],
  "colloFull": [
   {
    "zh": "挺值的",
    "py": "Tǐng zhí de",
    "vn": "rất đáng"
   },
   {
    "zh": "不值",
    "py": "Bù zhí",
    "vn": "không đáng"
   },
   {
    "zh": "值多少钱",
    "py": "Zhí duōshao qián",
    "vn": "đáng bao nhiêu tiền"
   },
   {
    "zh": "都值了",
    "py": "Dōu zhí le",
    "vn": "đều đáng cả"
   }
  ],
  "patterns": [
   {
    "s": "(花多少钱)都值了",
    "m": "Bỏ ra bao nhiêu cũng đáng"
   },
   {
    "s": "值 ↔ 值得",
    "m": "值 + tiền / tính từ; 值得 + động từ (值得去看看)"
   }
  ],
  "ex_zh": "我们店正好年底有活动，全场打七折呢，挺值的。",
  "ex_py": "Wǒmen diàn zhènghǎo niándǐ yǒu huódòng, quán chǎng dǎ qī zhé ne, tǐng zhí de.",
  "ex_vn": "Cửa hàng chúng tôi vừa hay cuối năm có chương trình, toàn bộ cửa hàng giảm 30% đấy, rất đáng.",
  "exList": [
   {
    "zh": "我们店正好年底有活动，全场打七折呢，挺值的。",
    "py": "Wǒmen diàn zhènghǎo niándǐ yǒu huódòng, quán chǎng dǎ qī zhé ne, tǐng zhí de.",
    "vn": "Cửa hàng chúng tôi vừa hay cuối năm có chương trình, toàn bộ cửa hàng giảm 30% đấy, rất đáng."
   },
   {
    "zh": "看到父母这么高兴，我觉得花多少钱都值了。",
    "py": "Kàndào fùmǔ zhème gāoxìng, wǒ juéde huā duōshao qián dōu zhí le.",
    "vn": "Thấy bố mẹ vui như vậy, tôi thấy tiêu bao nhiêu tiền cũng đáng."
   }
  ],
  "hanzi": [
   {
    "c": "值",
    "p": "zhí",
    "type": "左右结构 · Trái-phải",
    "st": 10,
    "ord": "亻 (nhân) trái → 直 (trực) phải",
    "rad": "亻 (nhân – người)",
    "mean": "giá trị",
    "tip": "Bộ người 亻 + 直(thẳng, xứng đáng) → NGƯỜI đánh giá đúng GIÁ TRỊ, kết hợp 得(được) thành 值得 = ĐÁNG (giá), XỨNG ĐÁNG.",
    "cf": "植 (zhí – \"trồng cây\", bộ 木\")",
    "w": "值得 / 价值 / 值班"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Chiếc áo len này chất lượng rất tốt, 300 tệ cũng rất đáng.",
    "answer": "这件毛衣质量特别好，三百块也挺值的。",
    "answerPy": "Zhè jiàn máoyī zhìliàng tèbié hǎo, sānbǎi kuài yě tǐng zhí de.",
    "note": "挺……的 = khá, rất (khẩu ngữ).",
    "pair": "挺值的"
   },
   {
    "promptLang": "vi",
    "prompt": "Dù đi xa một chút, nhưng cảnh đẹp như vậy thì rất đáng.",
    "answer": "尽管远了一点儿，但是风景这么美，很值。",
    "answerPy": "Jǐnguǎn yuǎn le yìdiǎnr, dànshì fēngjǐng zhème měi, hěn zhí.",
    "note": "Ôn 尽管……，但是…… (Bài 9 · điểm 2).",
    "pair": "尽管……，但是……很值"
   }
  ]
 },
 {
  "n": 11,
  "zh": "估计",
  "py": "gūjì",
  "pos": "Động từ",
  "vn": "đoán chừng, ước chừng, chắc là",
  "hv": "cổ kế",
  "em": "🤔",
  "lesson": 2,
  "explain": [
   "Dựa vào tình hình để đoán (không chắc chắn 100%). Hay đứng đầu câu: 估计快了 (chắc sắp về rồi)."
  ],
  "usage": "估计 + câu · 我估计…… · 估计得 + V · 估计一下.",
  "collo": [
   "估计快了",
   "我估计",
   "估计要等很久",
   "估计一下"
  ],
  "colloFull": [
   {
    "zh": "估计快了",
    "py": "Gūjì kuài le",
    "vn": "chắc sắp rồi"
   },
   {
    "zh": "我估计",
    "py": "Wǒ gūjì",
    "vn": "tôi đoán"
   },
   {
    "zh": "估计要等很久",
    "py": "Gūjì yào děng hěn jiǔ",
    "vn": "chắc phải đợi lâu"
   },
   {
    "zh": "估计一下",
    "py": "Gūjì yíxià",
    "vn": "ước tính một chút"
   }
  ],
  "patterns": [
   {
    "s": "估计 + mệnh đề",
    "m": "Đoán, ước chừng"
   },
   {
    "s": "估计 ≈ 可能 / 大概",
    "m": "Nhưng 估计 có thể làm động từ chính: 我估计……"
   }
  ],
  "ex_zh": "没呢，估计快了。",
  "ex_py": "Méi ne, gūjì kuài le.",
  "ex_vn": "Chưa, chắc sắp về rồi.",
  "exList": [
   {
    "zh": "没呢，估计快了。",
    "py": "Méi ne, gūjì kuài le.",
    "vn": "Chưa, chắc sắp về rồi."
   },
   {
    "zh": "路上车太多了，我估计他半个小时以后才能到。",
    "py": "Lùshang chē tài duō le, wǒ gūjì tā bàn gè xiǎoshí yǐhòu cáinéng dào.",
    "vn": "Đường đông xe quá, tôi đoán nửa tiếng nữa anh ấy mới đến được."
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
   },
   {
    "c": "计",
    "p": "jì",
    "type": "会意字 · Chữ hội ý",
    "st": 4,
    "ord": "讠 → 十",
    "rad": "讠 (ngôn – lời nói)",
    "mean": "tính, đếm; kế, mưu kế",
    "tip": "Nói (讠) + 十 (số mười): miệng đếm từ một đến mười → tính toán; tính trước thì thành “kế” — 计划 (kế hoạch), 设计, 计算.",
    "cf": "什 shén — bên trái là 亻; 汁 zhī (nước ép) — bên trái là 氵",
    "w": "计划 / 设计 / 会计"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Xếp hàng đông như vậy, chắc phải đợi rất lâu.",
    "answer": "排队的人这么多，估计要等很长时间。",
    "answerPy": "Páiduì de rén zhème duō, gūjì yào děng hěn chángshíjiān.",
    "note": "估计 + 要 + V: chắc phải … (khẩu ngữ còn nói 估计得 děi + V).",
    "pair": "估计要……"
   },
   {
    "promptLang": "vi",
    "prompt": "Tôi đoán nếu không mưa thì ngày mai họ sẽ đến.",
    "answer": "我估计，要是不下雨，他们明天就会来。",
    "answerPy": "Wǒ gūjì, yàoshi bú xiàyǔ, tāmen míngtiān jiù huì lái.",
    "note": "Ôn 要是……，就…… (Bài 1 · điểm 2).",
    "pair": "我估计，要是……就……"
   }
  ]
 },
 {
  "n": 12,
  "zh": "期",
  "py": "qī",
  "pos": "Lượng từ",
  "vn": "kỳ, khóa, đợt (lượng từ)",
  "hv": "kỳ",
  "em": "🗓️",
  "lesson": 2,
  "explain": [
   "Lượng từ cho những việc tổ chức theo từng kỳ, từng đợt: 一期活动 (một đợt hoạt động), 一期杂志 (một số tạp chí), 第一期培训班 (khóa đào tạo thứ nhất)."
  ],
  "usage": "一期 + 活动 / 杂志 / 节目 · 第×期 · 这期 / 下期.",
  "collo": [
   "一期活动",
   "这期杂志",
   "第三期",
   "下期节目"
  ],
  "colloFull": [
   {
    "zh": "一期活动",
    "py": "Yì qī huódòng",
    "vn": "một đợt hoạt động"
   },
   {
    "zh": "这期杂志",
    "py": "Zhè qī zázhì",
    "vn": "số tạp chí kỳ này"
   },
   {
    "zh": "第三期",
    "py": "Dì sān qī",
    "vn": "kỳ thứ ba"
   },
   {
    "zh": "下期节目",
    "py": "Xià qī jiémù",
    "vn": "chương trình kỳ sau"
   }
  ],
  "patterns": [
   {
    "s": "số + 期 + N",
    "m": "Lượng từ cho việc tổ chức theo kỳ"
   },
   {
    "s": "第 + số + 期",
    "m": "Kỳ thứ mấy"
   }
  ],
  "ex_zh": "下午老年班举办一期听力保护活动，他们去参加活动了。",
  "ex_py": "Xiàwǔ lǎoniánbān jǔbàn yì qī tīnglì bǎohù huódòng, tāmen qù cānjiā huódòng le.",
  "ex_vn": "Buổi chiều lớp người cao tuổi tổ chức một đợt hoạt động bảo vệ thính lực, ông bà đi tham gia rồi.",
  "exList": [
   {
    "zh": "下午老年班举办一期听力保护活动，他们去参加活动了。",
    "py": "Xiàwǔ lǎoniánbān jǔbàn yì qī tīnglì bǎohù huódòng, tāmen qù cānjiā huódòng le.",
    "vn": "Buổi chiều lớp người cao tuổi tổ chức một đợt hoạt động bảo vệ thính lực, ông bà đi tham gia rồi."
   },
   {
    "zh": "这期杂志有一篇文章是关于家庭教育的。",
    "py": "Zhè qī zázhì yǒu yì piān wénzhāng shì guānyú jiātíng jiàoyù de.",
    "vn": "Số tạp chí kỳ này có một bài viết về giáo dục gia đình."
   }
  ],
  "hanzi": [
   {
    "c": "期",
    "p": "qī",
    "type": "左右结构 · Trái-phải",
    "st": 12,
    "ord": "其 trái → 月 phải",
    "rad": "月 (nguyệt)",
    "mean": "kỳ",
    "tip": "其 + 月(trăng) → chu kỳ trăng → KỲ (thời gian). 学期, 星期, 日期, 到期.",
    "cf": "其 (qí – ấy)",
    "w": "学期 / 星期 / 日期 / 到期"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Đợt hoạt động này có rất nhiều người cao tuổi tham gia.",
    "answer": "这期活动有很多老年人参加。",
    "answerPy": "Zhè qī huódòng yǒu hěn duō lǎoniánrén cānjiā.",
    "note": "这 + 期 + N.",
    "pair": "这期 + N"
   },
   {
    "promptLang": "vi",
    "prompt": "Không những bố mẹ tôi mà ông bà tôi cũng tham gia đợt hoạt động này.",
    "answer": "不仅我父母，而且我爷爷奶奶也参加了这期活动。",
    "answerPy": "Bùjǐn wǒ fùmǔ, érqiě wǒ yéye nǎinai yě cānjiā le zhè qī huódòng.",
    "note": "Ôn 不仅……，而且……也…… (Bài 3 · điểm 2).",
    "pair": "不仅……，而且……"
   }
  ]
 },
 {
  "n": 13,
  "zh": "听力",
  "py": "tīnglì",
  "pos": "Danh từ",
  "vn": "thính lực, khả năng nghe; (môn) nghe",
  "hv": "thính lực",
  "em": "👂",
  "lesson": 2,
  "explain": [
   "Khả năng nghe của tai (听力保护 = bảo vệ thính lực). Trong học ngoại ngữ, 听力 còn là kỹ năng / bài nghe: 听力考试 (thi nghe)."
  ],
  "usage": "听力保护 · 听力不好 / 下降 · 听力考试 · 练听力.",
  "collo": [
   "听力保护",
   "听力不好",
   "听力考试",
   "练习听力"
  ],
  "colloFull": [
   {
    "zh": "听力保护",
    "py": "Tīnglì bǎohù",
    "vn": "bảo vệ thính lực"
   },
   {
    "zh": "听力不好",
    "py": "Tīnglì bù hǎo",
    "vn": "tai nghe kém"
   },
   {
    "zh": "听力考试",
    "py": "Tīnglì kǎoshì",
    "vn": "thi nghe"
   },
   {
    "zh": "练习听力",
    "py": "Liànxí tīnglì",
    "vn": "luyện nghe"
   }
  ],
  "patterns": [
   {
    "s": "听力 + 好 / 不好 / 下降",
    "m": "Thính lực"
   },
   {
    "s": "听力 / 口语 / 阅读 / 写作",
    "m": "Bốn kỹ năng nghe – nói – đọc – viết"
   }
  ],
  "ex_zh": "下午老年班举办一期听力保护活动。",
  "ex_py": "Xiàwǔ lǎoniánbān jǔbàn yì qī tīnglì bǎohù huódòng.",
  "ex_vn": "Buổi chiều lớp người cao tuổi tổ chức một đợt hoạt động bảo vệ thính lực.",
  "exList": [
   {
    "zh": "下午老年班举办一期听力保护活动。",
    "py": "Xiàwǔ lǎoniánbān jǔbàn yì qī tīnglì bǎohù huódòng.",
    "vn": "Buổi chiều lớp người cao tuổi tổ chức một đợt hoạt động bảo vệ thính lực."
   },
   {
    "zh": "爷爷年纪大了，听力不太好，跟他说话要大声一点儿。",
    "py": "Yéye niánjì dà le, tīnglì bú tài hǎo, gēn tā shuōhuà yào dàshēng yìdiǎnr.",
    "vn": "Ông đã lớn tuổi, tai nghe không tốt lắm, nói chuyện với ông phải nói to một chút."
   }
  ],
  "hanzi": [
   {
    "c": "听",
    "p": "tīng",
    "type": "左右结构 · Trái-phải",
    "st": 7,
    "ord": "口(khẩu) trái → 斤(biến thể) phải",
    "rad": "口 (khẩu – miệng)",
    "mean": "nghe, nghe thấy",
    "tip": "口(miệng nói) được tai TIẾP NHẬN → NGHE.",
    "cf": "厅 (tīng – \"sảnh, phòng\")",
    "w": "听见 / 听说 / 请听"
   },
   {
    "c": "力",
    "p": "lì",
    "type": "独体字 · Chữ đơn",
    "st": 2,
    "ord": "𠃌 → 丿",
    "rad": "力 (lực)",
    "mean": "sức",
    "tip": "Chữ tượng hình cánh tay gồng SỨC → SỨC LỰC, kết hợp 气 thành 力气 = HƠI SỨC.",
    "cf": "刀 (dāo – \"dao\", tự dạng gần giống)",
    "w": "力气 / 努力 / 能力"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Để nâng cao kỹ năng nghe, ngày nào tôi cũng nghe tin tức tiếng Trung.",
    "answer": "为了提高听力，我每天都听中文新闻。",
    "answerPy": "Wèile tígāo tīnglì, wǒ měitiān dōu tīng Zhōngwén xīnwén.",
    "note": "为了 + mục đích (HSK 3); xem thêm 为了……而…… (điểm 4).",
    "pair": "为了……，……"
   },
   {
    "promptLang": "vi",
    "prompt": "Dù đeo tai nghe nghe nhạc thì cũng đừng mở quá to, nếu không sẽ hại thính lực.",
    "answer": "即使戴耳机听音乐也别开太大声，否则对听力不好。",
    "answerPy": "Jíshǐ dài ěrjī tīng yīnyuè yě bié kāi tài dàshēng, fǒuzé duì tīnglì bù hǎo.",
    "note": "Ôn 即使……也…… (Bài 11 · điểm 1) + 否则 (Bài 8 · điểm 2).",
    "pair": "即使……也……，否则……"
   }
  ]
 },
 {
  "n": 14,
  "zh": "烦",
  "py": "fán",
  "pos": "Tính từ / Động từ",
  "vn": "bực bội, phiền muộn; làm phiền",
  "hv": "phiền",
  "em": "😣",
  "lesson": 2,
  "explain": [
   "Tính từ: trong lòng bực bội, khó chịu, rối bời (心里烦, 有点儿烦).",
   "Động từ: làm phiền, quấy rầy — 别烦我 (đừng làm phiền tôi)."
  ],
  "usage": "心里(有点儿)烦 · 很烦 · 烦死了 · 别烦我.",
  "collo": [
   "心里很烦",
   "有点儿烦",
   "烦死了",
   "别烦我"
  ],
  "colloFull": [
   {
    "zh": "心里很烦",
    "py": "Xīnli hěn fán",
    "vn": "trong lòng rất bực"
   },
   {
    "zh": "有点儿烦",
    "py": "Yǒudiǎnr fán",
    "vn": "hơi bực bội"
   },
   {
    "zh": "烦死了",
    "py": "Fán sǐ le",
    "vn": "bực chết đi được"
   },
   {
    "zh": "别烦我",
    "py": "Bié fán wǒ",
    "vn": "đừng làm phiền tôi"
   }
  ],
  "patterns": [
   {
    "s": "心里 + 烦",
    "m": "Tính từ: bực bội"
   },
   {
    "s": "烦 ≠ 麻烦",
    "m": "麻烦 = phiền phức (việc rắc rối) / làm phiền người khác giúp; 烦 = cảm giác bực trong lòng"
   }
  ],
  "ex_zh": "小明最近要考试，心里有点儿烦。",
  "ex_py": "Xiǎomíng zuìjìn yào kǎoshì, xīnli yǒudiǎnr fán.",
  "ex_vn": "Tiểu Minh sắp thi, trong lòng hơi bực bội.",
  "exList": [
   {
    "zh": "小明最近要考试，心里有点儿烦。",
    "py": "Xiǎomíng zuìjìn yào kǎoshì, xīnli yǒudiǎnr fán.",
    "vn": "Tiểu Minh sắp thi, trong lòng hơi bực bội."
   },
   {
    "zh": "昨天我的银行卡丢了，我现在心里很烦。",
    "py": "Zuótiān wǒ de yínhángkǎ diū le, wǒ xiànzài xīnli hěn fán.",
    "vn": "Hôm qua tôi làm mất thẻ ngân hàng, giờ trong lòng rất bực bội."
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
    "prompt": "Mấy hôm nay công việc nhiều quá, trong lòng tôi hơi bực.",
    "answer": "这几天工作太多了，我心里有点儿烦。",
    "answerPy": "Zhè jǐ tiān gōngzuò tài duō le, wǒ xīnli yǒudiǎnr fán.",
    "note": "有点儿 + tính từ tiêu cực (HSK 2).",
    "pair": "心里有点儿烦"
   },
   {
    "promptLang": "vi",
    "prompt": "Đã bực thì ra ngoài đi dạo đi.",
    "answer": "既然心里烦，就出去散散步吧。",
    "answerPy": "Jìrán xīnli fán, jiù chūqu sàn sànbù ba.",
    "note": "Ôn 既然……，就…… (Bài 7 · điểm 2).",
    "pair": "既然……，就……"
   }
  ]
 },
 {
  "n": 15,
  "zh": "脱",
  "py": "tuō",
  "pos": "Động từ",
  "vn": "cởi (quần áo, giày, mũ)",
  "hv": "thoát",
  "em": "🧥",
  "lesson": 2,
  "explain": [
   "Cởi đồ ra khỏi người: 脱衣服, 脱鞋. Ngược nghĩa với 穿 (mặc) / 戴 (đội, đeo)."
  ],
  "usage": "脱 + 衣服 / 鞋 / 外套 · 脱下来 · 把……脱了.",
  "collo": [
   "脱衣服",
   "脱鞋",
   "脱下来",
   "把外套脱了"
  ],
  "colloFull": [
   {
    "zh": "脱衣服",
    "py": "Tuō yīfu",
    "vn": "cởi quần áo"
   },
   {
    "zh": "脱鞋",
    "py": "Tuō xié",
    "vn": "cởi giày"
   },
   {
    "zh": "脱下来",
    "py": "Tuō xiàlai",
    "vn": "cởi ra"
   },
   {
    "zh": "把外套脱了",
    "py": "Bǎ wàitào tuō le",
    "vn": "cởi áo khoác ra"
   }
  ],
  "patterns": [
   {
    "s": "脱 ↔ 穿 / 戴",
    "m": "cởi ↔ mặc / đội, đeo"
   },
   {
    "s": "把 + quần áo + 脱(下来)",
    "m": "Câu chữ 把 (HSK 3)"
   }
  ],
  "ex_zh": "昨天因为脱、挂衣服这点儿小事，就对奶奶发脾气了。",
  "ex_py": "Zuótiān yīnwèi tuō, guà yīfu zhè diǎnr xiǎoshì, jiù duì nǎinai fā píqi le.",
  "ex_vn": "Hôm qua vì chuyện nhỏ cởi áo, treo áo mà nổi nóng với bà.",
  "exList": [
   {
    "zh": "昨天因为脱、挂衣服这点儿小事，就对奶奶发脾气了。",
    "py": "Zuótiān yīnwèi tuō, guà yīfu zhè diǎnr xiǎoshì, jiù duì nǎinai fā píqi le.",
    "vn": "Hôm qua vì chuyện nhỏ cởi áo, treo áo mà nổi nóng với bà."
   },
   {
    "zh": "进门以前，请把鞋脱了。",
    "py": "Jìn mén yǐqián, qǐng bǎ xié tuō le.",
    "vn": "Trước khi vào nhà, xin hãy cởi giày ra."
   }
  ],
  "hanzi": [
   {
    "c": "脱",
    "p": "tuō",
    "type": "左右结构 · Trái-phải",
    "st": 11,
    "ord": "月 trái → 兑 phải",
    "rad": "月 (nhục)",
    "mean": "cởi",
    "tip": "Thịt 月 + 兑 → tách khỏi cơ thể → CỞI, THOÁT. 脱衣服, 脱鞋, 脱掉.",
    "cf": "说 (shuō – nói, cũng có 兑)",
    "w": "脱 / 脱掉 / 脱鞋"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Trong phòng nóng quá, cởi áo len ra đi.",
    "answer": "屋里太热了，把毛衣脱了吧。",
    "answerPy": "Wūli tài rè le, bǎ máoyī tuō le ba.",
    "note": "Câu chữ 把 + V + 了 (HSK 3).",
    "pair": "把……脱了"
   },
   {
    "promptLang": "vi",
    "prompt": "Về đến nhà cậu ấy cởi áo khoác, rồi treo lên.",
    "answer": "回到家，他先把外套脱下来，然后挂好。",
    "answerPy": "Huídào jiā, tā xiān bǎ wàitào tuō xiàlai, ránhòu guà hǎo.",
    "note": "先……，然后…… (HSK 3) + 挂 (từ mới).",
    "pair": "先脱……，然后挂……"
   }
  ]
 },
 {
  "n": 16,
  "zh": "挂",
  "py": "guà",
  "pos": "Động từ",
  "vn": "treo, móc",
  "hv": "quải",
  "em": "🪝",
  "lesson": 2,
  "explain": [
   "Treo đồ vật lên cao (móc áo, tường, cây): 挂衣服, 墙上挂着一张画. Còn có nghĩa “cúp máy” điện thoại (挂电话)."
  ],
  "usage": "挂 + 衣服 / 画 · 挂在 + nơi · 挂起来 · 挂电话.",
  "collo": [
   "挂衣服",
   "挂在墙上",
   "挂起来",
   "挂电话"
  ],
  "colloFull": [
   {
    "zh": "挂衣服",
    "py": "Guà yīfu",
    "vn": "treo quần áo"
   },
   {
    "zh": "挂在墙上",
    "py": "Guà zài qiáng shàng",
    "vn": "treo trên tường"
   },
   {
    "zh": "挂起来",
    "py": "Guà qǐlai",
    "vn": "treo lên"
   },
   {
    "zh": "挂电话",
    "py": "Guà diànhuà",
    "vn": "cúp máy"
   }
  ],
  "patterns": [
   {
    "s": "把 + N + 挂在 + nơi",
    "m": "Treo cái gì ở đâu"
   },
   {
    "s": "nơi + 挂着 + N",
    "m": "Câu tồn hiện: 墙上挂着一张照片"
   }
  ],
  "ex_zh": "昨天因为脱、挂衣服这点儿小事，就对奶奶发脾气了。",
  "ex_py": "Zuótiān yīnwèi tuō, guà yīfu zhè diǎnr xiǎoshì, jiù duì nǎinai fā píqi le.",
  "ex_vn": "Hôm qua vì chuyện nhỏ cởi áo, treo áo mà nổi nóng với bà.",
  "exList": [
   {
    "zh": "昨天因为脱、挂衣服这点儿小事，就对奶奶发脾气了。",
    "py": "Zuótiān yīnwèi tuō, guà yīfu zhè diǎnr xiǎoshì, jiù duì nǎinai fā píqi le.",
    "vn": "Hôm qua vì chuyện nhỏ cởi áo, treo áo mà nổi nóng với bà."
   },
   {
    "zh": "奶奶把我的毛衣挂在了门后面。",
    "py": "Nǎinai bǎ wǒ de máoyī guà zài le mén hòumian.",
    "vn": "Bà treo áo len của tôi ở sau cửa."
   }
  ],
  "hanzi": [
   {
    "c": "挂",
    "p": "guà",
    "type": "左右结构 · Trái-phải",
    "st": 9,
    "ord": "扌 trái → 圭 phải",
    "rad": "扌 (thủ)",
    "mean": "treo",
    "tip": "Tay 扌 + 圭(hai chữ 土 chồng lên) → dùng tay TREO lên. 挂号 = lấy số khám bệnh.",
    "cf": "桂 (guì – quế)",
    "w": "挂 / 挂号 / 挂电话"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Trên tường treo một tấm ảnh cả nhà.",
    "answer": "墙上挂着一张全家的照片。",
    "answerPy": "Qiáng shàng guà zhe yì zhāng quánjiā de zhàopiàn.",
    "note": "Câu tồn hiện: nơi + V着 + N (HSK 3).",
    "pair": "墙上挂着……"
   },
   {
    "promptLang": "vi",
    "prompt": "Mẹ nói quần áo phải treo lên, nếu không sẽ bị nhăn.",
    "answer": "妈妈说衣服要挂起来，否则会变皱。",
    "answerPy": "Māma shuō yīfu yào guà qǐlai, fǒuzé huì biàn zhòu.",
    "note": "Ôn 否则 (Bài 8 · điểm 2).",
    "pair": "……，否则……"
   }
  ]
 },
 {
  "n": 17,
  "zh": "脾气",
  "py": "píqi",
  "pos": "Danh từ",
  "vn": "tính khí; cơn nóng giận",
  "hv": "tì khí",
  "em": "😠",
  "lesson": 2,
  "explain": [
   "Tính tình của một người (脾气好 / 不好). Trong cụm 发脾气 nghĩa là “nổi nóng, cáu gắt”. Chữ 气 đọc nhẹ: píqi."
  ],
  "usage": "脾气好 / 大 / 不好 · 发脾气 · 对 + ai + 发脾气.",
  "collo": [
   "发脾气",
   "脾气好",
   "脾气大",
   "对他发脾气"
  ],
  "colloFull": [
   {
    "zh": "发脾气",
    "py": "Fā píqi",
    "vn": "nổi nóng"
   },
   {
    "zh": "脾气好",
    "py": "Píqi hǎo",
    "vn": "tính tốt, hiền"
   },
   {
    "zh": "脾气大",
    "py": "Píqi dà",
    "vn": "nóng tính"
   },
   {
    "zh": "对他发脾气",
    "py": "Duì tā fā píqi",
    "vn": "nổi nóng với anh ấy"
   }
  ],
  "patterns": [
   {
    "s": "对 + ai + 发脾气",
    "m": "Nổi nóng với ai (✗ 发脾气对他)"
   },
   {
    "s": "……的脾气 + 好 / 不好",
    "m": "Nhận xét tính tình"
   }
  ],
  "ex_zh": "昨天因为脱、挂衣服这点儿小事，就对奶奶发脾气了。",
  "ex_py": "Zuótiān yīnwèi tuō, guà yīfu zhè diǎnr xiǎoshì, jiù duì nǎinai fā píqi le.",
  "ex_vn": "Hôm qua vì chuyện nhỏ cởi áo, treo áo mà nổi nóng với bà.",
  "exList": [
   {
    "zh": "昨天因为脱、挂衣服这点儿小事，就对奶奶发脾气了。",
    "py": "Zuótiān yīnwèi tuō, guà yīfu zhè diǎnr xiǎoshì, jiù duì nǎinai fā píqi le.",
    "vn": "Hôm qua vì chuyện nhỏ cởi áo, treo áo mà nổi nóng với bà."
   },
   {
    "zh": "我爸爸脾气特别好，从来没对我们发过脾气。",
    "py": "Wǒ bàba píqi tèbié hǎo, cónglái méi duì wǒmen fā guò píqi.",
    "vn": "Bố tôi tính rất hiền, chưa bao giờ nổi nóng với chúng tôi."
   }
  ],
  "hanzi": [
   {
    "c": "脾",
    "p": "pí",
    "type": "左右结构 · Trái-phải",
    "st": 12,
    "ord": "月 (nhục) trái → 卑 (ti) phải",
    "rad": "月 (nhục – thịt, bộ phận cơ thể)",
    "mean": "lá lách",
    "tip": "Bộ thịt 月 (bộ phận cơ thể) + 卑 (biểu âm) → LÁ LÁCH, theo y học cổ truyền lá lách liên quan đến tính khí, mở rộng thành TÍNH TÌNH.",
    "cf": "脾 dễ nhầm với 啤 (pí – \"bia\", bộ 口 khác)",
    "w": "脾气 / 脾胃"
   },
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
    "prompt": "Xin lỗi, lúc nãy tôi không nên nổi nóng với bạn.",
    "answer": "对不起，我刚才不应该对你发脾气。",
    "answerPy": "Duìbuqǐ, wǒ gāngcái bú yīnggāi duì nǐ fā píqi.",
    "note": "对 + ai + 发脾气 đặt trước động từ.",
    "pair": "对……发脾气"
   },
   {
    "promptLang": "vi",
    "prompt": "Bố tôi chưa bao giờ nổi nóng với mẹ tôi.",
    "answer": "我爸爸从来没对我妈妈发过脾气。",
    "answerPy": "Wǒ bàba cónglái méi duì wǒ māma fā guò píqi.",
    "note": "Ôn 从来没 + V + 过 (Bài 9 · điểm 4).",
    "pair": "从来没……过"
   }
  ]
 },
 {
  "n": 18,
  "zh": "伤心",
  "py": "shāngxīn",
  "pos": "Tính từ",
  "vn": "đau lòng, buồn",
  "hv": "thương tâm",
  "em": "😢",
  "lesson": 2,
  "explain": [
   "Trong lòng đau khổ, buồn bã vì chuyện không như ý (伤 = làm tổn thương, 心 = trái tim). Mức độ mạnh hơn 难过 một chút."
  ],
  "usage": "很伤心 · 让 / 使 + ai + 伤心 · 伤心地哭了.",
  "collo": [
   "很伤心",
   "让人伤心",
   "伤心地哭",
   "别伤心"
  ],
  "colloFull": [
   {
    "zh": "很伤心",
    "py": "Hěn shāngxīn",
    "vn": "rất đau lòng"
   },
   {
    "zh": "让人伤心",
    "py": "Ràng rén shāngxīn",
    "vn": "khiến người ta đau lòng"
   },
   {
    "zh": "伤心地哭",
    "py": "Shāngxīn de kū",
    "vn": "khóc thảm thiết"
   },
   {
    "zh": "别伤心",
    "py": "Bié shāngxīn",
    "vn": "đừng buồn"
   }
  ],
  "patterns": [
   {
    "s": "该 + 伤心 + 了",
    "m": "Chắc là sẽ buồn lắm (đoán)"
   },
   {
    "s": "使 / 让 + ai + 伤心",
    "m": "Khiến ai buồn"
   }
  ],
  "ex_zh": "是吗？他这样做老人该伤心了。",
  "ex_py": "Shì ma? Tā zhèyàng zuò lǎorén gāi shāngxīn le.",
  "ex_vn": "Thế à? Nó làm vậy chắc ông bà đau lòng lắm.",
  "exList": [
   {
    "zh": "是吗？他这样做老人该伤心了。",
    "py": "Shì ma? Tā zhèyàng zuò lǎorén gāi shāngxīn le.",
    "vn": "Thế à? Nó làm vậy chắc ông bà đau lòng lắm."
   },
   {
    "zh": "听说小狗丢了，妹妹伤心地哭了一个晚上。",
    "py": "Tīngshuō xiǎogǒu diū le, mèimei shāngxīn de kū le yí gè wǎnshang.",
    "vn": "Nghe nói chú chó con bị lạc, em gái buồn khóc cả buổi tối."
   }
  ],
  "hanzi": [
   {
    "c": "伤",
    "p": "shāng",
    "type": "左右结构 · Trái-phải (giản thể)",
    "st": 6,
    "ord": "亻 (nhân) trái → 伤(biến thể) phải",
    "rad": "亻 (nhân – người)",
    "mean": "tổn thương",
    "tip": "Bộ người 亻 (chỉ con người) → chỉ sự TỔN THƯƠNG của người, kết hợp 心(lòng, tâm) thành 伤心 = TỔN THƯƠNG TRONG LÒNG, ĐAU LÒNG.",
    "cf": "场 (chǎng – \"sân bãi\", bộ 土\")",
    "w": "伤心 / 受伤 / 伤害"
   },
   {
    "c": "心",
    "p": "xīn",
    "type": "独体字 · Chữ đơn",
    "st": 4,
    "ord": "丶 → 乚 → 丶 → 丶",
    "rad": "心 (tâm)",
    "mean": "tim, lòng",
    "tip": "Chữ tượng hình quả TIM → LÒNG, kết hợp 开(mở) thành 开心 = MỞ LÒNG → VUI VẺ.",
    "cf": "必 (bì – \"ắt\", thêm một nét)",
    "w": "开心 / 心情 / 用心"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Việc này khiến bà rất đau lòng.",
    "answer": "这件事使奶奶很伤心。",
    "answerPy": "Zhè jiàn shì shǐ nǎinai hěn shāngxīn.",
    "note": "Ôn câu kiêm ngữ 使 (Bài 7 · điểm 4).",
    "pair": "使 + ai + 伤心"
   },
   {
    "promptLang": "vi",
    "prompt": "Khi người nhà buồn vì một số chuyện, tôi sẽ ở bên cạnh họ.",
    "answer": "家人因为一些事情伤心时，我会陪在他们身边。",
    "answerPy": "Jiārén yīnwèi yìxiē shìqing shāngxīn shí, wǒ huì péi zài tāmen shēnbiān.",
    "note": "Câu hỏi phần Khởi động của sách.",
    "pair": "……伤心时，我会……"
   }
  ]
 },
 {
  "n": 19,
  "zh": "批评",
  "py": "pīpíng",
  "pos": "Động từ",
  "vn": "phê bình, trách mắng",
  "hv": "phê bình",
  "em": "☝️",
  "lesson": 2,
  "explain": [
   "Chỉ ra cái sai của người khác (thường là người trên với người dưới: bố mẹ – con, thầy – trò). Ngược với 表扬 (khen)."
  ],
  "usage": "批评 + ai · 被 + ai + 批评 · 批评得对.",
  "collo": [
   "批评孩子",
   "被老师批评",
   "批评得对",
   "接受批评"
  ],
  "colloFull": [
   {
    "zh": "批评孩子",
    "py": "Pīpíng háizi",
    "vn": "phê bình con"
   },
   {
    "zh": "被老师批评",
    "py": "Bèi lǎoshī pīpíng",
    "vn": "bị thầy phê bình"
   },
   {
    "zh": "批评得对",
    "py": "Pīpíng de duì",
    "vn": "phê bình đúng"
   },
   {
    "zh": "接受批评",
    "py": "Jiēshòu pīpíng",
    "vn": "tiếp nhận phê bình"
   }
  ],
  "patterns": [
   {
    "s": "A + 批评 + B",
    "m": "A phê bình B"
   },
   {
    "s": "B + 被 + A + 批评了",
    "m": "Câu bị động 被 (HSK 3)"
   }
  ],
  "ex_zh": "我批评他以后，他马上说放学回来就向奶奶道歉。",
  "ex_py": "Wǒ pīpíng tā yǐhòu, tā mǎshàng shuō fàngxué huílai jiù xiàng nǎinai dàoqiàn.",
  "ex_vn": "Sau khi em phê bình nó, nó lập tức nói tan học về sẽ xin lỗi bà.",
  "exList": [
   {
    "zh": "我批评他以后，他马上说放学回来就向奶奶道歉。",
    "py": "Wǒ pīpíng tā yǐhòu, tā mǎshàng shuō fàngxué huílai jiù xiàng nǎinai dàoqiàn.",
    "vn": "Sau khi em phê bình nó, nó lập tức nói tan học về sẽ xin lỗi bà."
   },
   {
    "zh": "他上课总是迟到，被老师批评了。",
    "py": "Tā shàngkè zǒngshì chídào, bèi lǎoshī pīpíng le.",
    "vn": "Cậu ấy lên lớp hay đến muộn nên bị thầy giáo phê bình."
   }
  ],
  "hanzi": [
   {
    "c": "批",
    "p": "pī",
    "type": "左右结构 · Trái-phải",
    "st": 7,
    "ord": "扌 trái → 比 phải",
    "rad": "扌 (thủ)",
    "mean": "phê",
    "tip": "Tay 扌 + 比(so sánh) → dùng tay chỉ ra chỗ sai → PHÊ. 批评 = phê bình.",
    "cf": "比 (bǐ – so sánh)",
    "w": "批评 / 批准"
   },
   {
    "c": "评",
    "p": "píng",
    "type": "左右结构 · Trái-phải",
    "st": 7,
    "ord": "讠 trái → 平 phải",
    "rad": "讠 (ngôn)",
    "mean": "bình luận",
    "tip": "Lời nói 讠 + 平(công bằng) → nói lời công bằng → BÌNH, đánh giá.",
    "cf": "平 (píng – bằng)",
    "w": "批评 / 评价"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Hôm qua tôi bị mẹ phê bình vì về nhà muộn.",
    "answer": "昨天我回家太晚，被妈妈批评了。",
    "answerPy": "Zuótiān wǒ huíjiā tài wǎn, bèi māma pīpíng le.",
    "note": "Câu bị động 被 (HSK 3).",
    "pair": "被 + ai + 批评了"
   },
   {
    "promptLang": "vi",
    "prompt": "Cô giáo không phải muốn phê bình em, mà là muốn giúp em.",
    "answer": "老师不是想批评你，而是想帮助你。",
    "answerPy": "Lǎoshī bú shì xiǎng pīpíng nǐ, érshì xiǎng bāngzhù nǐ.",
    "note": "Ôn 不是……而是…… (Bài 11 · điểm 3).",
    "pair": "不是……，而是……"
   }
  ]
 },
 {
  "n": 20,
  "zh": "道歉",
  "py": "dàoqiàn",
  "pos": "Động từ",
  "vn": "xin lỗi",
  "hv": "đạo khiểm",
  "em": "🙇",
  "lesson": 2,
  "explain": [
   "Nói lời xin lỗi với ai. 道歉 là động từ ly hợp, KHÔNG mang tân ngữ trực tiếp: phải nói 向 / 跟 + ai + 道歉 (✗ 道歉奶奶)."
  ],
  "usage": "向 / 跟 + ai + 道歉 · 道个歉 · 马上道歉.",
  "collo": [
   "向奶奶道歉",
   "跟他道个歉",
   "马上道歉",
   "真诚地道歉"
  ],
  "colloFull": [
   {
    "zh": "向奶奶道歉",
    "py": "Xiàng nǎinai dàoqiàn",
    "vn": "xin lỗi bà"
   },
   {
    "zh": "跟他道个歉",
    "py": "Gēn tā dào gè qiàn",
    "vn": "xin lỗi anh ấy một tiếng"
   },
   {
    "zh": "马上道歉",
    "py": "Mǎshàng dàoqiàn",
    "vn": "xin lỗi ngay"
   },
   {
    "zh": "真诚地道歉",
    "py": "Zhēnchéng de dàoqiàn",
    "vn": "thành thật xin lỗi"
   }
  ],
  "patterns": [
   {
    "s": "向 / 跟 + ai + 道歉",
    "m": "✗ 道歉 + ai"
   },
   {
    "s": "道个歉",
    "m": "Tách ly hợp: 道 + 个 + 歉"
   }
  ],
  "ex_zh": "他马上说放学回来就向奶奶道歉。",
  "ex_py": "Tā mǎshàng shuō fàngxué huílai jiù xiàng nǎinai dàoqiàn.",
  "ex_vn": "Nó lập tức nói tan học về sẽ xin lỗi bà.",
  "exList": [
   {
    "zh": "他马上说放学回来就向奶奶道歉。",
    "py": "Tā mǎshàng shuō fàngxué huílai jiù xiàng nǎinai dàoqiàn.",
    "vn": "Nó lập tức nói tan học về sẽ xin lỗi bà."
   },
   {
    "zh": "这件事是我做错了，我应该向你道歉。",
    "py": "Zhè jiàn shì shì wǒ zuòcuò le, wǒ yīnggāi xiàng nǐ dàoqiàn.",
    "vn": "Việc này là tôi làm sai, tôi nên xin lỗi bạn."
   }
  ],
  "hanzi": [
   {
    "c": "道",
    "p": "dào",
    "type": "半包围结构 · Bán bao vây",
    "st": 12,
    "ord": "首(thủ) trên → 辶(sước) bao dưới-trái",
    "rad": "辶 (sước – đi, bước đi)",
    "mean": "đường, đạo lý; nói, biết",
    "tip": "首(cái đầu, hướng) + 辶(bước đi) → đi theo hướng ĐẦU dẫn tới = con ĐƯỜNG, ĐẠO LÝ, và cũng là BIẾT rõ đường đi.",
    "cf": "到 (dào – \"đến\", cùng âm nhưng khác bộ 刂)",
    "w": "知道 / 道理 / 味道"
   },
   {
    "c": "歉",
    "p": "qiàn",
    "type": "左右结构 · Trái-phải",
    "st": 14,
    "ord": "兼 trái → 欠 phải",
    "rad": "欠 (khiếm)",
    "mean": "áy náy",
    "tip": "兼 + 欠(thiếu, nợ) → cảm thấy còn THIẾU NỢ người khác → ÁY NÁY. 抱歉 = ôm nỗi áy náy = XIN LỖI.",
    "cf": "谦 (qiān – khiêm tốn)",
    "w": "抱歉 / 道歉"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Con nên xin lỗi bà.",
    "answer": "你应该向奶奶道歉。",
    "answerPy": "Nǐ yīnggāi xiàng nǎinai dàoqiàn.",
    "note": "向 + ai + 道歉.",
    "pair": "向……道歉"
   },
   {
    "promptLang": "vi",
    "prompt": "Dù bạn không cố ý thì cũng nên xin lỗi anh ấy.",
    "answer": "即使你不是故意的，也应该跟他道歉。",
    "answerPy": "Jíshǐ nǐ bú shì gùyì de, yě yīnggāi gēn tā dàoqiàn.",
    "note": "Ôn 即使……也…… (Bài 11 · điểm 1).",
    "pair": "即使……，也……"
   }
  ]
 },
 {
  "n": 21,
  "zh": "老家",
  "py": "lǎojiā",
  "pos": "Danh từ",
  "vn": "quê, quê nhà",
  "hv": "lão gia",
  "em": "🏡",
  "lesson": 3,
  "explain": [
   "Nơi mình sinh ra hoặc nơi gia đình sống lâu đời, khi mình đã sống ở nơi khác. ⚠️ Bẫy Hán Việt: 老家 (lão gia) không phải “ông chủ” mà là “quê nhà”."
  ],
  "usage": "老家在 + nơi · 回老家 · 我的老家 · 老家的味道.",
  "collo": [
   "回老家",
   "老家在上海",
   "老家的菜",
   "离开老家"
  ],
  "colloFull": [
   {
    "zh": "回老家",
    "py": "Huí lǎojiā",
    "vn": "về quê"
   },
   {
    "zh": "老家在上海",
    "py": "Lǎojiā zài Shànghǎi",
    "vn": "quê ở Thượng Hải"
   },
   {
    "zh": "老家的菜",
    "py": "Lǎojiā de cài",
    "vn": "món ăn quê nhà"
   },
   {
    "zh": "离开老家",
    "py": "Líkāi lǎojiā",
    "vn": "rời quê"
   }
  ],
  "patterns": [
   {
    "s": "ai + 的老家 + 在 + nơi",
    "m": "Quê ai ở đâu"
   },
   {
    "s": "回 + 老家",
    "m": "Về quê (✗ 去老家 khi nói quê mình)"
   }
  ],
  "ex_zh": "杨同乐的老家在上海，他自毕业后一直在北京工作。",
  "ex_py": "Yáng Tónglè de lǎojiā zài Shànghǎi, tā zì bìyè hòu yìzhí zài Běijīng gōngzuò.",
  "ex_vn": "Quê của Dương Đồng Lạc ở Thượng Hải, từ sau khi tốt nghiệp anh ấy luôn làm việc ở Bắc Kinh.",
  "exList": [
   {
    "zh": "杨同乐的老家在上海，他自毕业后一直在北京工作。",
    "py": "Yáng Tónglè de lǎojiā zài Shànghǎi, tā zì bìyè hòu yìzhí zài Běijīng gōngzuò.",
    "vn": "Quê của Dương Đồng Lạc ở Thượng Hải, từ sau khi tốt nghiệp anh ấy luôn làm việc ở Bắc Kinh."
   },
   {
    "zh": "每年春节，我都要回老家看爷爷奶奶。",
    "py": "Měinián Chūnjié, wǒ dōu yào huí lǎojiā kàn yéye nǎinai.",
    "vn": "Tết năm nào tôi cũng về quê thăm ông bà."
   }
  ],
  "hanzi": [
   {
    "c": "老",
    "p": "lǎo",
    "type": "象形字 · Chữ tượng hình",
    "st": 6,
    "ord": "耂 (ngang, sổ, ngang, phẩy) → 匕",
    "rad": "老 (lão – già; viết 耂 khi làm bộ)",
    "mean": "già; cũ, lâu năm",
    "tip": "Hình người tóc dài, lưng còng, chống gậy → già. 老人 = người già; 老 còn nghĩa “cũ, lâu năm”: 老城、老街、老朋友. Ôn: 老师 (HSK1 Bài 1).",
    "cf": "考 kǎo (考试 – HSK2 Bài 10) — dưới là 丂, không phải 匕",
    "w": "老人 / 老师 / 老城"
   },
   {
    "c": "家",
    "p": "jiā",
    "type": "上下结构 · Trên-dưới",
    "st": 10,
    "ord": "宀 (miên) trên → 豕 dưới",
    "rad": "宀 (miên – mái nhà)",
    "mean": "nhà, chuyên gia",
    "tip": "Bộ mái nhà 宀 → NHÀ, mở rộng thành hậu tố chỉ CHUYÊN GIA trong một lĩnh vực, kết hợp 作(sáng tác) thành 作家 = NHÀ VĂN.",
    "cf": "冢 (zhǒng – \"mộ phần\", ít dùng)",
    "w": "作家 / 画家 / 科学家"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Quê tôi ở một thành phố nhỏ, phong cảnh ở đó rất đẹp.",
    "answer": "我的老家在一个小城市，那儿的风景很美。",
    "answerPy": "Wǒ de lǎojiā zài yí gè xiǎo chéngshì, nàr de fēngjǐng hěn měi.",
    "note": "老家在 + nơi.",
    "pair": "……的老家在……"
   },
   {
    "promptLang": "vi",
    "prompt": "Dù bận đến đâu, cuối năm anh ấy cũng về quê.",
    "answer": "无论多忙，年底他都会回老家。",
    "answerPy": "Wúlùn duō máng, niándǐ tā dōu huì huí lǎojiā.",
    "note": "无论……都…… (điểm 3 bài này).",
    "pair": "无论……，都……"
   }
  ]
 },
 {
  "n": 22,
  "zh": "自",
  "py": "zì",
  "pos": "Giới từ",
  "vn": "từ (khi), kể từ",
  "hv": "tự",
  "em": "⏩",
  "lesson": 3,
  "explain": [
   "Giới từ chỉ điểm bắt đầu của thời gian (hoặc nơi chốn), mang sắc thái văn viết, nghĩa như 从: 自毕业后 = 从毕业以后 (từ sau khi tốt nghiệp)."
  ],
  "usage": "自 + thời điểm + 后 / 以来 · 自……起 · 来自 + nơi.",
  "collo": [
   "自毕业后",
   "自那以后",
   "自今年起",
   "来自老家"
  ],
  "colloFull": [
   {
    "zh": "自毕业后",
    "py": "Zì bìyè hòu",
    "vn": "từ sau khi tốt nghiệp"
   },
   {
    "zh": "自那以后",
    "py": "Zì nà yǐhòu",
    "vn": "từ đó về sau"
   },
   {
    "zh": "自今年起",
    "py": "Zì jīnnián qǐ",
    "vn": "kể từ năm nay"
   },
   {
    "zh": "来自老家",
    "py": "Láizì lǎojiā",
    "vn": "đến từ quê nhà"
   }
  ],
  "patterns": [
   {
    "s": "自 + thời điểm + 后，一直……",
    "m": "Từ … đến nay vẫn luôn …"
   },
   {
    "s": "自 ≈ 从 (văn viết)",
    "m": "Khẩu ngữ hay dùng 从"
   }
  ],
  "ex_zh": "杨同乐的老家在上海，他自毕业后一直在北京工作。",
  "ex_py": "Yáng Tónglè de lǎojiā zài Shànghǎi, tā zì bìyè hòu yìzhí zài Běijīng gōngzuò.",
  "ex_vn": "Quê của Dương Đồng Lạc ở Thượng Hải, từ sau khi tốt nghiệp anh ấy luôn làm việc ở Bắc Kinh.",
  "exList": [
   {
    "zh": "杨同乐的老家在上海，他自毕业后一直在北京工作。",
    "py": "Yáng Tónglè de lǎojiā zài Shànghǎi, tā zì bìyè hòu yìzhí zài Běijīng gōngzuò.",
    "vn": "Quê của Dương Đồng Lạc ở Thượng Hải, từ sau khi tốt nghiệp anh ấy luôn làm việc ở Bắc Kinh."
   },
   {
    "zh": "他自2006年就离开了老家，在上海读大学。",
    "py": "Tā zì 2006 nián jiù líkāi le lǎojiā, zài Shànghǎi dú dàxué.",
    "vn": "Anh ấy từ năm 2006 đã rời quê, học đại học ở Thượng Hải."
   }
  ],
  "hanzi": [
   {
    "c": "自",
    "p": "zì",
    "type": "独体字 · Chữ đơn",
    "st": 6,
    "ord": "丿 → 目",
    "rad": "自 (tự)",
    "mean": "tự, từ",
    "tip": "Chữ tượng hình cái MŨI (chỉ vào mình) → TỰ, mở rộng thành TỪ (nguồn gốc), kết hợp 来 thành 来自 = ĐẾN TỪ.",
    "cf": "目 (mù – \"mắt\", thiếu nét phẩy trên)",
    "w": "来自 / 自己 / 自然"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Từ sau khi kết hôn, họ vẫn luôn sống ở Bắc Kinh.",
    "answer": "自结婚后，他们一直住在北京。",
    "answerPy": "Zì jiéhūn hòu, tāmen yìzhí zhù zài Běijīng.",
    "note": "自……后，一直…….",
    "pair": "自……后，一直……"
   },
   {
    "promptLang": "vi",
    "prompt": "Từ đó về sau, cậu ấy chưa bao giờ nổi nóng với bà nữa.",
    "answer": "自那以后，他再也没对奶奶发过脾气。",
    "answerPy": "Zì nà yǐhòu, tā zài yě méi duì nǎinai fā guò píqi.",
    "note": "Ôn 从来 / 再也没 + V过 (Bài 9 · điểm 4).",
    "pair": "自那以后，……"
   }
  ]
 },
 {
  "n": 23,
  "zh": "父母",
  "py": "fùmǔ",
  "pos": "Danh từ",
  "vn": "bố mẹ, cha mẹ",
  "hv": "phụ mẫu",
  "em": "👨‍👩‍👦",
  "lesson": 3,
  "explain": [
   "Cha và mẹ (父 = cha, 母 = mẹ). Cách nói trang trọng hơn 爸爸妈妈, hay dùng trong văn viết và khi kể về gia đình."
  ],
  "usage": "关心父母 · 照顾父母 · 和父母生活在一起 · 父母的话.",
  "collo": [
   "关心父母",
   "照顾父母",
   "父母身边",
   "和父母商量"
  ],
  "colloFull": [
   {
    "zh": "关心父母",
    "py": "Guānxīn fùmǔ",
    "vn": "quan tâm bố mẹ"
   },
   {
    "zh": "照顾父母",
    "py": "Zhàogu fùmǔ",
    "vn": "chăm sóc bố mẹ"
   },
   {
    "zh": "父母身边",
    "py": "Fùmǔ shēnbiān",
    "vn": "bên cạnh bố mẹ"
   },
   {
    "zh": "和父母商量",
    "py": "Hé fùmǔ shāngliang",
    "vn": "bàn bạc với bố mẹ"
   }
  ],
  "patterns": [
   {
    "s": "和 + 父母 + 生活在一起",
    "m": "Sống cùng bố mẹ"
   },
   {
    "s": "在父母眼里，……",
    "m": "Trong mắt bố mẹ …"
   }
  ],
  "ex_zh": "虽然没和父母生活在一起，但父子、母子关系特别好。",
  "ex_py": "Suīrán méi hé fùmǔ shēnghuó zài yìqǐ, dàn fùzǐ, mǔzǐ guānxi tèbié hǎo.",
  "ex_vn": "Tuy không sống cùng bố mẹ nhưng quan hệ cha con, mẹ con rất tốt.",
  "exList": [
   {
    "zh": "虽然没和父母生活在一起，但父子、母子关系特别好。",
    "py": "Suīrán méi hé fùmǔ shēnghuó zài yìqǐ, dàn fùzǐ, mǔzǐ guānxi tèbié hǎo.",
    "vn": "Tuy không sống cùng bố mẹ nhưng quan hệ cha con, mẹ con rất tốt."
   },
   {
    "zh": "无论工作多忙，我们都应该常给父母打电话。",
    "py": "Wúlùn gōngzuò duō máng, wǒmen dōu yīnggāi cháng gěi fùmǔ dǎdiànhuà.",
    "vn": "Dù công việc bận đến đâu, chúng ta cũng nên thường xuyên gọi điện cho bố mẹ."
   }
  ],
  "hanzi": [
   {
    "c": "父",
    "p": "fù",
    "type": "独体字 · Chữ đơn thể",
    "st": 4,
    "ord": "丿 → 丶 → 丿 → 乀",
    "rad": "父 (phụ)",
    "mean": "cha",
    "tip": "Tượng hình bàn tay cầm rìu (người cha lao động) → CHA (phụ). 爸 = 父 + 巴.",
    "cf": "交 (jiāo – giao)",
    "w": "父亲 / 父母 / 爸爸"
   },
   {
    "c": "母",
    "p": "mǔ",
    "type": "象形字 · Chữ tượng hình",
    "st": 5,
    "ord": "𠃊 → 𠃌 → 丶 → 一 → 丶",
    "rad": "毋 (vô – chớ, đừng; bộ 母)",
    "mean": "mẹ",
    "tip": "Hình người phụ nữ quỳ, hai chấm là bầu ngực nuôi con → người mẹ → 母亲, 父母.",
    "cf": "每 měi (mỗi) — trên có 𠂉; 毋 wú (chớ) — một nét phẩy xuyên giữa, không có hai chấm",
    "w": "父母 / 母亲 / 母子"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Dù bạn bao nhiêu tuổi, trong mắt bố mẹ bạn vẫn là đứa trẻ.",
    "answer": "无论你多大，在父母眼里你都是孩子。",
    "answerPy": "Wúlùn nǐ duōdà, zài fùmǔ yǎn lǐ nǐ dōu shì háizi.",
    "note": "无论……都…… (điểm 3).",
    "pair": "无论……，都……"
   },
   {
    "promptLang": "vi",
    "prompt": "Tuy không sống cùng bố mẹ nhưng ngày nào tôi cũng gọi điện cho họ.",
    "answer": "虽然没和父母生活在一起，但我每天都给他们打电话。",
    "answerPy": "Suīrán méi hé fùmǔ shēnghuó zài yìqǐ, dàn wǒ měitiān dōu gěi tāmen dǎdiànhuà.",
    "note": "虽然……，但……(HSK 3).",
    "pair": "虽然……，但……"
   }
  ]
 },
 {
  "n": 24,
  "zh": "父子",
  "py": "fùzǐ",
  "pos": "Danh từ",
  "vn": "cha con (cha và con trai)",
  "hv": "phụ tử",
  "em": "👨‍👦",
  "lesson": 3,
  "explain": [
   "Chỉ quan hệ giữa cha và con trai, hoặc hai người là cha con. ⚠️ Ở đây 子 là “con trai”, đọc thanh 3 zǐ — KHÔNG đọc nhẹ như hậu tố 子 trong 桌子."
  ],
  "usage": "父子关系 · 父子俩 · 父子之间.",
  "collo": [
   "父子关系",
   "父子俩",
   "父子之间",
   "像父子一样"
  ],
  "colloFull": [
   {
    "zh": "父子关系",
    "py": "Fùzǐ guānxi",
    "vn": "quan hệ cha con"
   },
   {
    "zh": "父子俩",
    "py": "Fùzǐ liǎ",
    "vn": "hai cha con"
   },
   {
    "zh": "父子之间",
    "py": "Fùzǐ zhījiān",
    "vn": "giữa cha và con"
   },
   {
    "zh": "像父子一样",
    "py": "Xiàng fùzǐ yíyàng",
    "vn": "như cha con"
   }
  ],
  "patterns": [
   {
    "s": "父子 / 母子 / 父女 / 母女",
    "m": "Cha–con trai / mẹ–con trai / cha–con gái / mẹ–con gái"
   }
  ],
  "ex_zh": "虽然没和父母生活在一起，但父子、母子关系特别好。",
  "ex_py": "Suīrán méi hé fùmǔ shēnghuó zài yìqǐ, dàn fùzǐ, mǔzǐ guānxi tèbié hǎo.",
  "ex_vn": "Tuy không sống cùng bố mẹ nhưng quan hệ cha con, mẹ con rất tốt.",
  "exList": [
   {
    "zh": "虽然没和父母生活在一起，但父子、母子关系特别好。",
    "py": "Suīrán méi hé fùmǔ shēnghuó zài yìqǐ, dàn fùzǐ, mǔzǐ guānxi tèbié hǎo.",
    "vn": "Tuy không sống cùng bố mẹ nhưng quan hệ cha con, mẹ con rất tốt."
   },
   {
    "zh": "周末父子俩经常一起去公园跑步。",
    "py": "Zhōumò fùzǐ liǎ jīngcháng yìqǐ qù gōngyuán pǎobù.",
    "vn": "Cuối tuần hai cha con thường cùng nhau chạy bộ ở công viên."
   }
  ],
  "hanzi": [
   {
    "c": "父",
    "p": "fù",
    "type": "独体字 · Chữ đơn thể",
    "st": 4,
    "ord": "丿 → 丶 → 丿 → 乀",
    "rad": "父 (phụ)",
    "mean": "cha",
    "tip": "Tượng hình bàn tay cầm rìu (người cha lao động) → CHA (phụ). 爸 = 父 + 巴.",
    "cf": "交 (jiāo – giao)",
    "w": "父亲 / 父母 / 爸爸"
   },
   {
    "c": "子",
    "p": "zǐ",
    "type": "象形字 · Chữ tượng hình",
    "st": 3,
    "ord": "ngang gập → sổ móc → ngang (hất)",
    "rad": "子 (tử – con)",
    "mean": "con; hậu tố danh từ",
    "tip": "Hình đứa bé quấn tã. Trong 句子、本子、箱子 là hậu tố, đọc nhẹ \"zi\".",
    "cf": "字 zì (chữ) — thêm 宀 ở trên",
    "w": "句子 / 本子 / 箱子"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Hai cha con họ quan hệ rất tốt, giống như bạn bè.",
    "answer": "他们父子关系特别好，像朋友一样。",
    "answerPy": "Tāmen fùzǐ guānxi tèbié hǎo, xiàng péngyou yíyàng.",
    "note": "像……一样 (HSK 3).",
    "pair": "父子关系……"
   },
   {
    "promptLang": "vi",
    "prompt": "Không chỉ quan hệ cha con, mà quan hệ mẹ con cũng rất tốt.",
    "answer": "不仅父子关系好，母子关系也很好。",
    "answerPy": "Bùjǐn fùzǐ guānxi hǎo, mǔzǐ guānxi yě hěn hǎo.",
    "note": "Ôn 不仅……，也…… (Bài 3 · điểm 2).",
    "pair": "不仅……，也……"
   }
  ]
 },
 {
  "n": 25,
  "zh": "母子",
  "py": "mǔzǐ",
  "pos": "Danh từ",
  "vn": "mẹ con (mẹ và con trai)",
  "hv": "mẫu tử",
  "em": "👩‍👦",
  "lesson": 3,
  "explain": [
   "Quan hệ giữa mẹ và con trai, hoặc hai người là mẹ con. 子 đọc thanh 3 zǐ (con trai)."
  ],
  "usage": "母子关系 · 母子俩 · 母子之间.",
  "collo": [
   "母子关系",
   "母子俩",
   "母子之间",
   "母子情"
  ],
  "colloFull": [
   {
    "zh": "母子关系",
    "py": "Mǔzǐ guānxi",
    "vn": "quan hệ mẹ con"
   },
   {
    "zh": "母子俩",
    "py": "Mǔzǐ liǎ",
    "vn": "hai mẹ con"
   },
   {
    "zh": "母子之间",
    "py": "Mǔzǐ zhījiān",
    "vn": "giữa mẹ và con"
   },
   {
    "zh": "母子情",
    "py": "Mǔzǐ qíng",
    "vn": "tình mẹ con"
   }
  ],
  "patterns": [
   {
    "s": "母子俩 + V",
    "m": "Hai mẹ con cùng làm gì"
   }
  ],
  "ex_zh": "虽然没和父母生活在一起，但父子、母子关系特别好。",
  "ex_py": "Suīrán méi hé fùmǔ shēnghuó zài yìqǐ, dàn fùzǐ, mǔzǐ guānxi tèbié hǎo.",
  "ex_vn": "Tuy không sống cùng bố mẹ nhưng quan hệ cha con, mẹ con rất tốt.",
  "exList": [
   {
    "zh": "虽然没和父母生活在一起，但父子、母子关系特别好。",
    "py": "Suīrán méi hé fùmǔ shēnghuó zài yìqǐ, dàn fùzǐ, mǔzǐ guānxi tèbié hǎo.",
    "vn": "Tuy không sống cùng bố mẹ nhưng quan hệ cha con, mẹ con rất tốt."
   },
   {
    "zh": "母子俩一边做饭，一边聊天，非常开心。",
    "py": "Mǔzǐ liǎ yìbiān zuòfàn, yìbiān liáotiān, fēicháng kāixīn.",
    "vn": "Hai mẹ con vừa nấu cơm vừa trò chuyện, rất vui vẻ."
   }
  ],
  "hanzi": [
   {
    "c": "母",
    "p": "mǔ",
    "type": "象形字 · Chữ tượng hình",
    "st": 5,
    "ord": "𠃊 → 𠃌 → 丶 → 一 → 丶",
    "rad": "毋 (vô – chớ, đừng; bộ 母)",
    "mean": "mẹ",
    "tip": "Hình người phụ nữ quỳ, hai chấm là bầu ngực nuôi con → người mẹ → 母亲, 父母.",
    "cf": "每 měi (mỗi) — trên có 𠂉; 毋 wú (chớ) — một nét phẩy xuyên giữa, không có hai chấm",
    "w": "父母 / 母亲 / 母子"
   },
   {
    "c": "子",
    "p": "zǐ",
    "type": "象形字 · Chữ tượng hình",
    "st": 3,
    "ord": "ngang gập → sổ móc → ngang (hất)",
    "rad": "子 (tử – con)",
    "mean": "con; hậu tố danh từ",
    "tip": "Hình đứa bé quấn tã. Trong 句子、本子、箱子 là hậu tố, đọc nhẹ \"zi\".",
    "cf": "字 zì (chữ) — thêm 宀 ở trên",
    "w": "句子 / 本子 / 箱子"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Hai mẹ con ngày nào cũng gọi video.",
    "answer": "母子俩每天都打视频电话。",
    "answerPy": "Mǔzǐ liǎ měitiān dōu dǎ shìpín diànhuà.",
    "note": "俩 = hai (người).",
    "pair": "母子俩……"
   },
   {
    "promptLang": "vi",
    "prompt": "Quan hệ mẹ con họ rất tốt, có chuyện gì cũng nói với nhau.",
    "answer": "他们母子关系很好，有什么事都互相说。",
    "answerPy": "Tāmen mǔzǐ guānxi hěn hǎo, yǒu shénme shì dōu hùxiāng shuō.",
    "note": "Đại từ nghi vấn phiếm chỉ 什么……都…… (HSK 3).",
    "pair": "有什么事都……"
   }
  ]
 },
 {
  "n": 26,
  "zh": "无论",
  "py": "wúlùn",
  "pos": "Liên từ",
  "vn": "bất kể, dù … (cũng)",
  "hv": "vô luận",
  "em": "♾️",
  "lesson": 3,
  "explain": [
   "Liên từ của câu điều kiện: trong BẤT KỲ điều kiện nào kết quả cũng không đổi. Phía sau phải có từ nghi vấn (什么, 多, 怎么, 谁…) hoặc phương án lựa chọn (A还是B), vế sau dùng 都 / 也. Nghĩa giống 不管 (Bài 8) nhưng trang trọng hơn."
  ],
  "usage": "无论 + 多 / 什么 / 怎么 / A还是B……，都 / 也…….",
  "collo": [
   "无论多忙",
   "无论去哪儿",
   "无论是谁",
   "无论刮风还是下雨"
  ],
  "colloFull": [
   {
    "zh": "无论多忙",
    "py": "Wúlùn duō máng",
    "vn": "dù bận đến đâu"
   },
   {
    "zh": "无论去哪儿",
    "py": "Wúlùn qù nǎr",
    "vn": "dù đi đâu"
   },
   {
    "zh": "无论是谁",
    "py": "Wúlùn shì shuí",
    "vn": "dù là ai"
   },
   {
    "zh": "无论刮风还是下雨",
    "py": "Wúlùn guāfēng háishi xiàyǔ",
    "vn": "dù gió hay mưa"
   }
  ],
  "patterns": [
   {
    "s": "无论 + từ nghi vấn ……，都 / 也……",
    "m": "Xem điểm ngữ pháp 3"
   },
   {
    "s": "无论 ≈ 不管",
    "m": "不管 khẩu ngữ hơn (Bài 8 · điểm 1)"
   }
  ],
  "ex_zh": "杨同乐很关心父母，无论平时工作有多忙，他每个周末都会给父母打电话。",
  "ex_py": "Yáng Tónglè hěn guānxīn fùmǔ, wúlùn píngshí gōngzuò yǒu duō máng, tā měi gè zhōumò dōu huì gěi fùmǔ dǎdiànhuà.",
  "ex_vn": "Dương Đồng Lạc rất quan tâm bố mẹ, dù ngày thường công việc bận đến đâu, cuối tuần nào anh ấy cũng gọi điện cho bố mẹ.",
  "exList": [
   {
    "zh": "杨同乐很关心父母，无论平时工作有多忙，他每个周末都会给父母打电话。",
    "py": "Yáng Tónglè hěn guānxīn fùmǔ, wúlùn píngshí gōngzuò yǒu duō máng, tā měi gè zhōumò dōu huì gěi fùmǔ dǎdiànhuà.",
    "vn": "Dương Đồng Lạc rất quan tâm bố mẹ, dù ngày thường công việc bận đến đâu, cuối tuần nào anh ấy cũng gọi điện cho bố mẹ."
   },
   {
    "zh": "无论你遇到什么困难，我都会在你身边。",
    "py": "Wúlùn nǐ yùdào shénme kùnnan, wǒ dōu huì zài nǐ shēnbiān.",
    "vn": "Dù em gặp khó khăn gì, anh cũng sẽ ở bên cạnh em."
   }
  ],
  "hanzi": [
   {
    "c": "无",
    "p": "wú",
    "type": "独体字 · Chữ đơn (giản thể)",
    "st": 4,
    "ord": "一 → 一 → 丿 → 乚",
    "rad": "一 (nhất)",
    "mean": "không có",
    "tip": "Chữ giản thể của 無, nghĩa KHÔNG CÓ, kết hợp 法(cách) thành 无法 = KHÔNG CÓ CÁCH.",
    "cf": "天 (tiān – \"trời\", tự dạng gần giống)",
    "w": "无法 / 无论 / 无处不在"
   },
   {
    "c": "论",
    "p": "lùn",
    "type": "左右结构 · Trái-phải (giản thể)",
    "st": 6,
    "ord": "讠 (ngôn) trái → 仑 phải",
    "rad": "讠 (ngôn – lời nói)",
    "mean": "bàn luận",
    "tip": "Bộ lời nói 讠 + 仑(biểu âm) → BÀN LUẬN, kết hợp 无(không) thành 无论 = KHÔNG CẦN BÀN, tức BẤT KỂ.",
    "cf": "轮 (lún – \"bánh xe\", bộ 车)",
    "w": "无论 / 讨论 / 结论"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Dù gió hay mưa, ngày nào ông cũng ra công viên chạy bộ.",
    "answer": "无论刮风还是下雨，爷爷每天都去公园跑步。",
    "answerPy": "Wúlùn guāfēng háishi xiàyǔ, yéye měitiān dōu qù gōngyuán pǎobù.",
    "note": "无论 A 还是 B，都…….",
    "pair": "无论……还是……，都……"
   },
   {
    "promptLang": "vi",
    "prompt": "Dù có bận đến mấy thì Tết tôi cũng phải về quê.",
    "answer": "无论多忙，春节我也得回老家。",
    "answerPy": "Wúlùn duō máng, Chūnjié wǒ yě děi huí lǎojiā.",
    "note": "Ôn 说什么也得 (Bài 10 · điểm 1) — 无论多忙也得…….",
    "pair": "无论……，也得……"
   }
  ]
 },
 {
  "n": 27,
  "zh": "条件",
  "py": "tiáojiàn",
  "pos": "Danh từ",
  "vn": "điều kiện",
  "hv": "điều kiện",
  "em": "📋",
  "lesson": 3,
  "explain": [
   "Hoàn cảnh, yếu tố cần có để một việc xảy ra (条件允许 = điều kiện cho phép), hoặc yêu cầu đặt ra (有什么条件?). Hán Việt giống hệt tiếng Việt."
  ],
  "usage": "条件允许 · 条件好 / 差 · 生活条件 · 提出条件.",
  "collo": [
   "条件允许",
   "生活条件",
   "条件很好",
   "工作条件"
  ],
  "colloFull": [
   {
    "zh": "条件允许",
    "py": "Tiáojiàn yǔnxǔ",
    "vn": "điều kiện cho phép"
   },
   {
    "zh": "生活条件",
    "py": "Shēnghuó tiáojiàn",
    "vn": "điều kiện sống"
   },
   {
    "zh": "条件很好",
    "py": "Tiáojiàn hěn hǎo",
    "vn": "điều kiện rất tốt"
   },
   {
    "zh": "工作条件",
    "py": "Gōngzuò tiáojiàn",
    "vn": "điều kiện làm việc"
   }
  ],
  "patterns": [
   {
    "s": "条件允许(的话)，……",
    "m": "Nếu điều kiện cho phép thì …"
   },
   {
    "s": "无论条件多……，都……",
    "m": "Dù điều kiện thế nào cũng …"
   }
  ],
  "ex_zh": "条件允许时，他会回上海看父母。",
  "ex_py": "Tiáojiàn yǔnxǔ shí, tā huì huí Shànghǎi kàn fùmǔ.",
  "ex_vn": "Khi điều kiện cho phép, anh ấy sẽ về Thượng Hải thăm bố mẹ.",
  "exList": [
   {
    "zh": "条件允许时，他会回上海看父母。",
    "py": "Tiáojiàn yǔnxǔ shí, tā huì huí Shànghǎi kàn fùmǔ.",
    "vn": "Khi điều kiện cho phép, anh ấy sẽ về Thượng Hải thăm bố mẹ."
   },
   {
    "zh": "这几年家里的生活条件越来越好了。",
    "py": "Zhè jǐ nián jiāli de shēnghuó tiáojiàn yuèláiyuè hǎo le.",
    "vn": "Mấy năm nay điều kiện sống của gia đình ngày càng tốt hơn."
   }
  ],
  "hanzi": [
   {
    "c": "条",
    "p": "tiáo",
    "type": "上下结构 · Trên-dưới",
    "st": 7,
    "ord": "夂 (truy) trên → 木 (mộc) dưới",
    "rad": "木 (mộc – gỗ)",
    "mean": "cành cây; lượng từ vật dài",
    "tip": "Vốn chỉ CÀNH CÂY dài mảnh → mở rộng thành lượng từ cho mọi vật DÀI như quần, đường, con sông.",
    "cf": "各 (gè – hình dáng trên gần giống)",
    "w": "一条裤子 / 一条路 / 一条鱼"
   },
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
    "prompt": "Dù điều kiện khó khăn thế nào, tôi đều tin chúng ta có thể thành công.",
    "answer": "无论条件多么困难，我都相信我们能成功。",
    "answerPy": "Wúlùn tiáojiàn duōme kùnnan, wǒ dōu xiāngxìn wǒmen néng chénggōng.",
    "note": "Bài tập SGK điểm 3 (câu 3).",
    "pair": "无论条件……，都……"
   },
   {
    "promptLang": "vi",
    "prompt": "Nếu điều kiện cho phép, tôi muốn đưa bố mẹ đi du lịch.",
    "answer": "要是条件允许，我就带父母去旅游。",
    "answerPy": "Yàoshi tiáojiàn yǔnxǔ, wǒ jiù dài fùmǔ qù lǚyóu.",
    "note": "Ôn 要是……，就…… (Bài 1 · điểm 2).",
    "pair": "要是条件允许，就……"
   }
  ]
 },
 {
  "n": 28,
  "zh": "允许",
  "py": "yǔnxǔ",
  "pos": "Động từ",
  "vn": "cho phép",
  "hv": "doãn hứa",
  "em": "🆗",
  "lesson": 3,
  "explain": [
   "Đồng ý cho ai làm việc gì; hoặc điều kiện, luật lệ cho phép. Trang trọng hơn 让 / 可以. Phủ định: 不允许 (không cho phép, cấm)."
  ],
  "usage": "允许 + ai + V · 不允许 + V · 条件允许 · 时间允许.",
  "collo": [
   "不允许",
   "条件允许",
   "时间允许",
   "允许他参加"
  ],
  "colloFull": [
   {
    "zh": "不允许",
    "py": "Bù yǔnxǔ",
    "vn": "không cho phép"
   },
   {
    "zh": "条件允许",
    "py": "Tiáojiàn yǔnxǔ",
    "vn": "điều kiện cho phép"
   },
   {
    "zh": "时间允许",
    "py": "Shíjiān yǔnxǔ",
    "vn": "thời gian cho phép"
   },
   {
    "zh": "允许他参加",
    "py": "Yǔnxǔ tā cānjiā",
    "vn": "cho phép anh ấy tham gia"
   }
  ],
  "patterns": [
   {
    "s": "允许 + ai + V",
    "m": "Cho phép ai làm gì"
   },
   {
    "s": "(这里)不允许 + V",
    "m": "Biển cấm: 不允许抽烟"
   }
  ],
  "ex_zh": "条件允许时，他会回上海看父母。",
  "ex_py": "Tiáojiàn yǔnxǔ shí, tā huì huí Shànghǎi kàn fùmǔ.",
  "ex_vn": "Khi điều kiện cho phép, anh ấy sẽ về Thượng Hải thăm bố mẹ.",
  "exList": [
   {
    "zh": "条件允许时，他会回上海看父母。",
    "py": "Tiáojiàn yǔnxǔ shí, tā huì huí Shànghǎi kàn fùmǔ.",
    "vn": "Khi điều kiện cho phép, anh ấy sẽ về Thượng Hải thăm bố mẹ."
   },
   {
    "zh": "我们换条路走吧，前面那个路口不允许右转。",
    "py": "Wǒmen huàn tiáo lù zǒu ba, qiánmian nàge lùkǒu bù yǔnxǔ yòu zhuǎn.",
    "vn": "Chúng ta đi đường khác đi, ngã tư phía trước không cho phép rẽ phải."
   }
  ],
  "hanzi": [
   {
    "c": "允",
    "p": "yǔn",
    "type": "上下结构 · Trên-dưới",
    "st": 4,
    "ord": "厶 trên → 儿 dưới",
    "rad": "儿 (nhi)",
    "mean": "cho phép",
    "tip": "Chữ 4 nét: 厶 + 儿 → ƯNG THUẬN, cho phép. 允许 = doãn hứa.",
    "cf": "充 (chōng – đầy)",
    "w": "允许"
   },
   {
    "c": "许",
    "p": "xǔ",
    "type": "左右结构 · Trái-phải (giản thể)",
    "st": 6,
    "ord": "讠 (ngôn) trái → 午 phải",
    "rad": "讠 (ngôn)",
    "mean": "cho phép, có lẽ",
    "tip": "Bộ lời nói 讠 + 午(biểu âm) → nghĩa gốc là CHO PHÉP (bằng lời), kết hợp 也 thành 也许 = CÓ LẼ.",
    "cf": "午 (wǔ – \"trưa\", phần bên phải)",
    "w": "也许 / 允许 / 许多"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Bố mẹ không cho phép tôi chơi điện thoại trước khi đi ngủ.",
    "answer": "父母不允许我睡觉前玩手机。",
    "answerPy": "Fùmǔ bù yǔnxǔ wǒ shuìjiào qián wán shǒujī.",
    "note": "允许 + ai + V.",
    "pair": "不允许 + ai + V"
   },
   {
    "promptLang": "vi",
    "prompt": "Trong thư viện không cho phép nói to.",
    "answer": "图书馆里不允许大声说话。",
    "answerPy": "Túshūguǎn lǐ bù yǔnxǔ dàshēng shuōhuà.",
    "note": "Biển báo / nội quy hay dùng 不允许.",
    "pair": "……里不允许……"
   }
  ]
 },
 {
  "n": 29,
  "zh": "另外",
  "py": "lìngwài",
  "pos": "Phó từ / Đại từ / Liên từ",
  "vn": "riêng, thêm (ngoài ra); khác; ngoài ra",
  "hv": "lánh ngoại",
  "em": "➕",
  "lesson": 3,
  "explain": [
   "Phó từ (trong bài): làm thêm một cách riêng, ngoài cái đã nói — 另外找时间 (tìm thời gian khác / riêng). Đại từ: cái khác — 另外一个人. Liên từ: ngoài ra (đầu câu) — 另外，再加一双筷子."
  ],
  "usage": "另外 + V · 另外 + 一个 / 一些 + N · ……，另外，…….",
  "collo": [
   "另外找时间",
   "另外一个",
   "另外再加",
   "另外的人"
  ],
  "colloFull": [
   {
    "zh": "另外找时间",
    "py": "Lìngwài zhǎo shíjiān",
    "vn": "tìm thời gian khác"
   },
   {
    "zh": "另外一个",
    "py": "Lìngwài yí gè",
    "vn": "một cái khác"
   },
   {
    "zh": "另外再加",
    "py": "Lìngwài zài jiā",
    "vn": "ngoài ra thêm"
   },
   {
    "zh": "另外的人",
    "py": "Lìngwài de rén",
    "vn": "người khác"
   }
  ],
  "patterns": [
   {
    "s": "另外 + (再 / 还) + V",
    "m": "Làm thêm việc khác"
   },
   {
    "s": "……，另外，……",
    "m": "Liên từ: ngoài ra"
   }
  ],
  "ex_zh": "他们平时会另外找时间去看父母，帮父母做做饭，打扫打扫卫生。",
  "ex_py": "Tāmen píngshí huì lìngwài zhǎo shíjiān qù kàn fùmǔ, bāng fùmǔ zuò zuòfàn, dǎsǎo dǎsǎo wèishēng.",
  "ex_vn": "Ngày thường họ sẽ dành riêng thời gian đi thăm bố mẹ, giúp bố mẹ nấu cơm, dọn dẹp vệ sinh.",
  "exList": [
   {
    "zh": "他们平时会另外找时间去看父母，帮父母做做饭，打扫打扫卫生。",
    "py": "Tāmen píngshí huì lìngwài zhǎo shíjiān qù kàn fùmǔ, bāng fùmǔ zuò zuòfàn, dǎsǎo dǎsǎo wèishēng.",
    "vn": "Ngày thường họ sẽ dành riêng thời gian đi thăm bố mẹ, giúp bố mẹ nấu cơm, dọn dẹp vệ sinh."
   },
   {
    "zh": "请加一碗米饭，另外再加一双筷子。",
    "py": "Qǐng jiā yì wǎn mǐfàn, lìngwài zài jiā yì shuāng kuàizi.",
    "vn": "Cho thêm một bát cơm, ngoài ra thêm một đôi đũa nữa."
   }
  ],
  "hanzi": [
   {
    "c": "另",
    "p": "lìng",
    "type": "上下结构 · Trên-dưới",
    "st": 5,
    "ord": "口 trên → 力 dưới",
    "rad": "口 (khẩu)",
    "mean": "khác, riêng",
    "tip": "Chữ mang nghĩa CÁI KHÁC, RIÊNG BIỆT so với những gì đã đề cập; kết hợp 外(ngoài) thành 另外 = NGOÀI RA, CÁI KHÁC.",
    "cf": "另 dễ nhầm với 加 (jiā – \"thêm vào\")",
    "w": "另外 / 另 / 另一个"
   },
   {
    "c": "外",
    "p": "wài",
    "type": "会意字 · Chữ hội ý",
    "st": 5,
    "ord": "夕 → 卜",
    "rad": "夕 (tịch – buổi tối)",
    "mean": "ngoài",
    "tip": "夕 (buổi tối) + 卜 (bói): bói buổi tối là việc ngoài lệ thường → ngoài. Ôn 外国 (HSK2 Bài 2), 外面 (HSK2 Bài 12).",
    "cf": "处 chù — phần phải khác",
    "w": "以外 / 外面 / 外国"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Hôm nay tôi không rảnh, chúng ta hẹn thời gian khác nhé.",
    "answer": "今天我没空，咱们另外找时间吧。",
    "answerPy": "Jīntiān wǒ méi kòng, zánmen lìngwài zhǎo shíjiān ba.",
    "note": "另外 + V (phó từ).",
    "pair": "另外 + V"
   },
   {
    "promptLang": "vi",
    "prompt": "Bạn mua giúp tôi một chai nước, ngoài ra mua thêm một cái bánh bao.",
    "answer": "你帮我买一瓶水，另外再买一个包子。",
    "answerPy": "Nǐ bāng wǒ mǎi yì píng shuǐ, lìngwài zài mǎi yí gè bāozi.",
    "note": "Liên từ 另外 + 再 + V.",
    "pair": "……，另外再……"
   }
  ]
 },
 {
  "n": 30,
  "zh": "卫生",
  "py": "wèishēng",
  "pos": "Danh từ / Tính từ",
  "vn": "vệ sinh; sạch sẽ, hợp vệ sinh",
  "hv": "vệ sinh",
  "em": "🧹",
  "lesson": 3,
  "explain": [
   "Danh từ: việc giữ sạch sẽ — 打扫卫生 (dọn dẹp vệ sinh). Tính từ: sạch sẽ, hợp vệ sinh — 这家饭馆很卫生."
  ],
  "usage": "打扫卫生 · 讲卫生 · 很卫生 / 不卫生 · 卫生间.",
  "collo": [
   "打扫卫生",
   "讲卫生",
   "不卫生",
   "卫生间"
  ],
  "colloFull": [
   {
    "zh": "打扫卫生",
    "py": "Dǎsǎo wèishēng",
    "vn": "dọn dẹp vệ sinh"
   },
   {
    "zh": "讲卫生",
    "py": "Jiǎng wèishēng",
    "vn": "giữ vệ sinh"
   },
   {
    "zh": "不卫生",
    "py": "Bú wèishēng",
    "vn": "mất vệ sinh"
   },
   {
    "zh": "卫生间",
    "py": "Wèishēngjiān",
    "vn": "nhà vệ sinh"
   }
  ],
  "patterns": [
   {
    "s": "打扫打扫卫生",
    "m": "Lặp ABAB làm nhẹ động tác"
   },
   {
    "s": "N + 很卫生 / 不卫生",
    "m": "Tính từ"
   }
  ],
  "ex_zh": "他们平时会另外找时间去看父母，帮父母做做饭，打扫打扫卫生。",
  "ex_py": "Tāmen píngshí huì lìngwài zhǎo shíjiān qù kàn fùmǔ, bāng fùmǔ zuò zuòfàn, dǎsǎo dǎsǎo wèishēng.",
  "ex_vn": "Ngày thường họ sẽ dành riêng thời gian đi thăm bố mẹ, giúp bố mẹ nấu cơm, dọn dẹp vệ sinh.",
  "exList": [
   {
    "zh": "他们平时会另外找时间去看父母，帮父母做做饭，打扫打扫卫生。",
    "py": "Tāmen píngshí huì lìngwài zhǎo shíjiān qù kàn fùmǔ, bāng fùmǔ zuò zuòfàn, dǎsǎo dǎsǎo wèishēng.",
    "vn": "Ngày thường họ sẽ dành riêng thời gian đi thăm bố mẹ, giúp bố mẹ nấu cơm, dọn dẹp vệ sinh."
   },
   {
    "zh": "这家小饭馆不仅便宜，而且很卫生。",
    "py": "Zhè jiā xiǎo fànguǎn bùjǐn piányi, érqiě hěn wèishēng.",
    "vn": "Quán ăn nhỏ này không những rẻ mà còn rất sạch sẽ."
   }
  ],
  "hanzi": [
   {
    "c": "卫",
    "p": "wèi",
    "type": "独体字 · Chữ đơn thể (giản thể)",
    "st": 3,
    "ord": "㇇ → 丨 → 一",
    "rad": "卩 (tiết)",
    "mean": "bảo vệ",
    "tip": "Giản thể của 衛 (lính canh đi tuần quanh đường 行) → BẢO VỆ. 卫生 = bảo vệ sự sống → VỆ SINH.",
    "cf": "卩 (jié – bộ tiết)",
    "w": "卫生 / 卫生间 / 保卫"
   },
   {
    "c": "生",
    "p": "shēng",
    "type": "独体字 · Chữ đơn thể",
    "st": 5,
    "ord": "丿 → 一 → 一 → 丨 → 一",
    "rad": "生 (sinh)",
    "mean": "sinh",
    "tip": "Hình cây mọc từ đất → SINH RA. 出生, 生日, 学生, 生活, 生命.",
    "cf": "牛 (niú – trâu bò)",
    "w": "出生 / 生日 / 生活 / 生命"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Cuối tuần tôi thường giúp bố mẹ dọn dẹp vệ sinh.",
    "answer": "周末我常常帮父母打扫卫生。",
    "answerPy": "Zhōumò wǒ chángcháng bāng fùmǔ dǎsǎo wèishēng.",
    "note": "帮 + ai + V (HSK 2).",
    "pair": "帮……打扫卫生"
   },
   {
    "promptLang": "vi",
    "prompt": "Đồ ăn ở đó không vệ sinh lắm, chúng ta đừng ăn ở đó nữa.",
    "answer": "那儿的东西不怎么卫生，咱们别去那儿吃了。",
    "answerPy": "Nàr de dōngxi bù zěnme wèishēng, zánmen bié qù nàr chī le.",
    "note": "不怎么 + tính từ (điểm 1 bài này).",
    "pair": "不怎么卫生"
   }
  ]
 },
 {
  "n": 31,
  "zh": "母亲",
  "py": "mǔqīn",
  "pos": "Danh từ",
  "vn": "mẹ, mẫu thân",
  "hv": "mẫu thân",
  "em": "👩",
  "lesson": 3,
  "explain": [
   "Mẹ — cách gọi trang trọng, dùng khi kể / viết (刘明的母亲). Khi gọi trực tiếp thì nói 妈 / 妈妈; khẩu ngữ thân mật: 老妈."
  ],
  "usage": "我的母亲 · 母亲节 · 父亲和母亲.",
  "collo": [
   "我的母亲",
   "母亲节",
   "父亲和母亲",
   "照顾母亲"
  ],
  "colloFull": [
   {
    "zh": "我的母亲",
    "py": "Wǒ de mǔqīn",
    "vn": "mẹ tôi"
   },
   {
    "zh": "母亲节",
    "py": "Mǔqīnjié",
    "vn": "Ngày của Mẹ"
   },
   {
    "zh": "父亲和母亲",
    "py": "Fùqīn hé mǔqīn",
    "vn": "cha và mẹ"
   },
   {
    "zh": "照顾母亲",
    "py": "Zhàogu mǔqīn",
    "vn": "chăm sóc mẹ"
   }
  ],
  "patterns": [
   {
    "s": "母亲 (văn viết) / 妈妈 (khẩu ngữ) / 老妈 (thân mật)",
    "m": "Ba mức gọi mẹ"
   }
  ],
  "ex_zh": "这两年，刘明的母亲身体不太好，他们很担心。",
  "ex_py": "Zhè liǎng nián, Liú Míng de mǔqīn shēntǐ bú tài hǎo, tāmen hěn dānxīn.",
  "ex_vn": "Hai năm nay mẹ của Lưu Minh sức khỏe không được tốt, họ rất lo.",
  "exList": [
   {
    "zh": "这两年，刘明的母亲身体不太好，他们很担心。",
    "py": "Zhè liǎng nián, Liú Míng de mǔqīn shēntǐ bú tài hǎo, tāmen hěn dānxīn.",
    "vn": "Hai năm nay mẹ của Lưu Minh sức khỏe không được tốt, họ rất lo."
   },
   {
    "zh": "这次母亲专门做了林静静最爱喝的鸡汤。",
    "py": "Zhè cì mǔqīn zhuānmén zuò le Lín Jìngjìng zuì ài hē de jītāng.",
    "vn": "Lần này mẹ đặc biệt nấu món canh gà mà Lâm Tĩnh Tĩnh thích uống nhất."
   }
  ],
  "hanzi": [
   {
    "c": "母",
    "p": "mǔ",
    "type": "象形字 · Chữ tượng hình",
    "st": 5,
    "ord": "𠃊 → 𠃌 → 丶 → 一 → 丶",
    "rad": "毋 (vô – chớ, đừng; bộ 母)",
    "mean": "mẹ",
    "tip": "Hình người phụ nữ quỳ, hai chấm là bầu ngực nuôi con → người mẹ → 母亲, 父母.",
    "cf": "每 měi (mỗi) — trên có 𠂉; 毋 wú (chớ) — một nét phẩy xuyên giữa, không có hai chấm",
    "w": "父母 / 母亲 / 母子"
   },
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
    "prompt": "Mẹ tôi năm nay 60 tuổi, sức khỏe vẫn rất tốt.",
    "answer": "我母亲今年六十岁，身体还很好。",
    "answerPy": "Wǒ mǔqīn jīnnián liùshí suì, shēntǐ hái hěn hǎo.",
    "note": "还 = vẫn (HSK 2).",
    "pair": "母亲 + 身体……"
   },
   {
    "promptLang": "vi",
    "prompt": "Ngày của Mẹ tôi mua cho mẹ một chiếc áo len.",
    "answer": "母亲节我给妈妈买了一件毛衣。",
    "answerPy": "Mǔqīnjié wǒ gěi māma mǎi le yí jiàn máoyī.",
    "note": "给 + ai + 买 + N.",
    "pair": "给……买……"
   }
  ]
 },
 {
  "n": 32,
  "zh": "待",
  "py": "dāi",
  "pos": "Động từ",
  "vn": "ở, ở lại (một nơi)",
  "hv": "đãi",
  "em": "🛋️",
  "lesson": 3,
  "explain": [
   "Ở lại, lưu lại một nơi (khẩu ngữ, cũng viết 呆): 在家待着, 待在身边. ⚠️ Chữ đa âm: 待 dài = đối xử, chờ đợi (等待, 对待); trong bài đọc dāi."
  ],
  "usage": "待在 + nơi · 在 + nơi + 待着 · 待 + thời gian.",
  "collo": [
   "待在家里",
   "在家待着",
   "待在身边",
   "待一会儿"
  ],
  "colloFull": [
   {
    "zh": "待在家里",
    "py": "Dāi zài jiāli",
    "vn": "ở trong nhà"
   },
   {
    "zh": "在家待着",
    "py": "Zài jiā dāi zhe",
    "vn": "ở nhà"
   },
   {
    "zh": "待在身边",
    "py": "Dāi zài shēnbiān",
    "vn": "ở bên cạnh"
   },
   {
    "zh": "待一会儿",
    "py": "Dāi yíhuìr",
    "vn": "ở lại một lát"
   }
  ],
  "patterns": [
   {
    "s": "待在 + nơi / 在 + nơi + 待着",
    "m": "Ở đâu"
   },
   {
    "s": "待 + thời lượng",
    "m": "待了三天 (ở lại ba ngày)"
   }
  ],
  "ex_zh": "父母待在他们身边，他们也终于能放心地去工作了。",
  "ex_py": "Fùmǔ dāi zài tāmen shēnbiān, tāmen yě zhōngyú néng fàng xīndì qù gōngzuò le.",
  "ex_vn": "Bố mẹ ở bên cạnh, cuối cùng họ cũng có thể yên tâm đi làm.",
  "exList": [
   {
    "zh": "父母待在他们身边，他们也终于能放心地去工作了。",
    "py": "Fùmǔ dāi zài tāmen shēnbiān, tāmen yě zhōngyú néng fàng xīndì qù gōngzuò le.",
    "vn": "Bố mẹ ở bên cạnh, cuối cùng họ cũng có thể yên tâm đi làm."
   },
   {
    "zh": "周末我不喜欢在家待着，更喜欢出去走走。",
    "py": "Zhōumò wǒ bù xǐhuan zài jiā dāi zhe, gèng xǐhuan chūqu zǒuzou.",
    "vn": "Cuối tuần tôi không thích ở nhà, thích ra ngoài đi dạo hơn."
   }
  ],
  "hanzi": [
   {
    "c": "待",
    "p": "dài",
    "type": "形声字 · Chữ hình thanh",
    "st": 9,
    "ord": "彳 → 寺",
    "rad": "彳 (xích – bước chân)",
    "mean": "ở lại (dāi); đối xử, chờ đợi (dài)",
    "tip": "Bước chân (彳) dừng lại trước ngôi chùa (寺, cũng gợi âm) → đứng lại chờ, ở lại → đọc dāi khi nghĩa “ở lại” (待在家里), dài khi nghĩa “đối xử, chờ đợi” (等待, 对待).",
    "cf": "侍 shì (hầu hạ) — bên trái là 亻; 持 chí (cầm giữ) — bên trái là 扌; 特 tè — bên trái là 牛",
    "w": "待在家里 / 等待 / 对待"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Hôm nay trời lạnh quá, tôi chỉ muốn ở nhà.",
    "answer": "今天太冷了，我只想待在家里。",
    "answerPy": "Jīntiān tài lěng le, wǒ zhǐ xiǎng dāi zài jiāli.",
    "note": "待在 + nơi.",
    "pair": "待在……"
   },
   {
    "promptLang": "vi",
    "prompt": "Dù ở đâu, cô ấy cũng mang theo một cuốn sách.",
    "answer": "无论待在哪儿，她都要带上一本书。",
    "answerPy": "Wúlùn dāi zài nǎr, tā dōu yào dàishàng yì běn shū.",
    "note": "无论……都…… (điểm 3) — bài tập SGK.",
    "pair": "无论待在……，都……"
   }
  ]
 },
 {
  "n": 33,
  "zh": "将",
  "py": "jiāng",
  "pos": "Giới từ",
  "vn": "đem, lấy (= 把, văn viết)",
  "hv": "tương",
  "em": "👐",
  "lesson": 4,
  "explain": [
   "Giới từ dùng như 把, đưa tân ngữ lên trước động từ, sắc thái văn viết: 将鸡汤热了热 = 把鸡汤热了热. ⚠️ 将 còn là phó từ “sẽ” (将来, 即将) — phân biệt qua vị trí: 将 + danh từ + động từ → giống 把."
  ],
  "usage": "将 + O + V + bổ ngữ / 了 · 将……送到 / 放在 / 寄给…….",
  "collo": [
   "将鸡汤热了热",
   "将书放在桌上",
   "将材料交给老师",
   "将门关上"
  ],
  "colloFull": [
   {
    "zh": "将鸡汤热了热",
    "py": "Jiāng jītāng rè le rè",
    "vn": "đem canh gà hâm nóng"
   },
   {
    "zh": "将书放在桌上",
    "py": "Jiāng shū fàngzài zhuō shàng",
    "vn": "đặt sách lên bàn"
   },
   {
    "zh": "将材料交给老师",
    "py": "Jiāng cáiliào jiāogěi lǎoshī",
    "vn": "nộp hồ sơ cho thầy"
   },
   {
    "zh": "将门关上",
    "py": "Jiāng mén guānshàng",
    "vn": "đóng cửa lại"
   }
  ],
  "patterns": [
   {
    "s": "将 + O + V + 其他成分",
    "m": "Như câu chữ 把: động từ không đứng trơ trọi"
   },
   {
    "s": "将 (văn viết) ≈ 把 (khẩu ngữ)",
    "m": "Bài khoá 4 là văn kể → dùng 将"
   }
  ],
  "ex_zh": "下班回家，林静静将父母从老家寄来的鸡汤热了热。",
  "ex_py": "Xiàbān huíjiā, Lín Jìngjìng jiāng fùmǔ cóng lǎojiā jìlái de jītāng rè le rè.",
  "ex_vn": "Tan làm về nhà, Lâm Tĩnh Tĩnh đem canh gà bố mẹ gửi từ quê lên hâm nóng.",
  "exList": [
   {
    "zh": "下班回家，林静静将父母从老家寄来的鸡汤热了热。",
    "py": "Xiàbān huíjiā, Lín Jìngjìng jiāng fùmǔ cóng lǎojiā jìlái de jītāng rè le rè.",
    "vn": "Tan làm về nhà, Lâm Tĩnh Tĩnh đem canh gà bố mẹ gửi từ quê lên hâm nóng."
   },
   {
    "zh": "请将您的护照放在这里。",
    "py": "Qǐng jiāng nín de hùzhào fàngzài zhèli.",
    "vn": "Xin hãy đặt hộ chiếu của ông / bà ở đây."
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
    "prompt": "Xin hãy nộp tài liệu cho cô giáo trước thứ Sáu.",
    "answer": "请在周五以前将材料交给老师。",
    "answerPy": "Qǐng zài zhōuwǔ yǐqián jiāng cáiliào jiāogěi lǎoshī.",
    "note": "将 + O + V + 给 + ai.",
    "pair": "将……交给……"
   },
   {
    "promptLang": "vi",
    "prompt": "Mẹ đem chiếc áo len đã giặt sạch treo lên.",
    "answer": "妈妈将洗干净的毛衣挂了起来。",
    "answerPy": "Māma jiāng xǐ gānjìng de máoyī guà le qǐlai.",
    "note": "将 + O + V + 起来 + 了.",
    "pair": "将……挂起来"
   }
  ]
 },
 {
  "n": 34,
  "zh": "闻",
  "py": "wén",
  "pos": "Động từ",
  "vn": "ngửi",
  "hv": "văn",
  "em": "👃",
  "lesson": 4,
  "explain": [
   "Dùng mũi để ngửi mùi: 闻到味道 (ngửi thấy mùi). ⚠️ Bẫy Hán Việt: “văn” làm người Việt nghĩ đến “nghe” (新闻 = tin tức), nhưng động từ 闻 hiện đại = NGỬI."
  ],
  "usage": "闻 + 味道 · 闻到 · 闻一闻 · 好闻 / 难闻.",
  "collo": [
   "闻到香味",
   "闻闻",
   "很好闻",
   "很难闻"
  ],
  "colloFull": [
   {
    "zh": "闻到香味",
    "py": "Wéndào xiāngwèi",
    "vn": "ngửi thấy mùi thơm"
   },
   {
    "zh": "闻闻",
    "py": "Wénwen",
    "vn": "ngửi thử"
   },
   {
    "zh": "很好闻",
    "py": "Hěn hǎo wén",
    "vn": "thơm, dễ ngửi"
   },
   {
    "zh": "很难闻",
    "py": "Hěn nánwén",
    "vn": "khó ngửi, hôi"
   }
  ],
  "patterns": [
   {
    "s": "闻 + 到 + 味道",
    "m": "Bổ ngữ kết quả 到: ngửi thấy"
   },
   {
    "s": "好闻 / 难闻",
    "m": "Dễ ngửi / khó ngửi"
   }
  ],
  "ex_zh": "当闻到从小就熟悉的味道时，平时冷静的她鼻子还是酸了。",
  "ex_py": "Dāng wéndào cóng xiǎo jiù shúxi de wèidào shí, píngshí lěngjìng de tā bízi háishi suān le.",
  "ex_vn": "Khi ngửi thấy mùi vị quen thuộc từ nhỏ, cô vốn ngày thường điềm tĩnh mà sống mũi vẫn cay cay.",
  "exList": [
   {
    "zh": "当闻到从小就熟悉的味道时，平时冷静的她鼻子还是酸了。",
    "py": "Dāng wéndào cóng xiǎo jiù shúxi de wèidào shí, píngshí lěngjìng de tā bízi háishi suān le.",
    "vn": "Khi ngửi thấy mùi vị quen thuộc từ nhỏ, cô vốn ngày thường điềm tĩnh mà sống mũi vẫn cay cay."
   },
   {
    "zh": "你闻闻，这是什么味道？好香啊！",
    "py": "Nǐ wénwen, zhè shì shénme wèidào? Hǎo xiāng a!",
    "vn": "Bạn ngửi thử xem, mùi gì thế này? Thơm quá!"
   }
  ],
  "hanzi": [
   {
    "c": "闻",
    "p": "wén",
    "type": "形声字 · Chữ hình thanh",
    "st": 9,
    "ord": "门 → 耳",
    "rad": "门 (môn – cửa)",
    "mean": "nghe; tin",
    "tip": "门 (cửa, chỉ âm) + 耳 (tai): ghé tai vào cửa để nghe → nghe được, tin nghe được. 新闻 = tin mới nghe → tin tức.",
    "cf": "问 wèn (HSK1 Bài 11) — trong 门 là 口; 间 jiān (HSK2 Bài 2) — trong 门 là 日",
    "w": "新闻 / 看新闻"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Vừa vào cửa tôi đã ngửi thấy mùi thơm của canh gà.",
    "answer": "一进门我就闻到了鸡汤的香味。",
    "answerPy": "Yí jìn mén wǒ jiù wéndào le jītāng de xiāngwèi.",
    "note": "Ôn 一……就…… (HSK 3).",
    "pair": "一……就闻到……"
   },
   {
    "promptLang": "vi",
    "prompt": "Ngửi thấy mùi món ăn quê nhà, tôi lại nhớ bố mẹ.",
    "answer": "闻到老家菜的味道，我又想父母了。",
    "answerPy": "Wéndào lǎojiā cài de wèidào, wǒ yòu xiǎng fùmǔ le.",
    "note": "又 + V + 了 (lại).",
    "pair": "闻到……的味道"
   }
  ]
 },
 {
  "n": 35,
  "zh": "味道",
  "py": "wèidào",
  "pos": "Danh từ",
  "vn": "mùi vị, hương vị",
  "hv": "vị đạo",
  "em": "🍲",
  "lesson": 4,
  "explain": [
   "Mùi và vị của đồ ăn (味道很好 = ngon). Nghĩa bóng: cảm giác, hương vị (幸福的味道 = hương vị hạnh phúc)."
  ],
  "usage": "味道 + 好 / 不错 / 特别鲜 · 熟悉的味道 · ……的味道.",
  "collo": [
   "味道很好",
   "熟悉的味道",
   "妈妈的味道",
   "幸福的味道"
  ],
  "colloFull": [
   {
    "zh": "味道很好",
    "py": "Wèidào hěn hǎo",
    "vn": "vị rất ngon"
   },
   {
    "zh": "熟悉的味道",
    "py": "Shúxi de wèidào",
    "vn": "mùi vị quen thuộc"
   },
   {
    "zh": "妈妈的味道",
    "py": "Māma de wèidào",
    "vn": "hương vị của mẹ"
   },
   {
    "zh": "幸福的味道",
    "py": "Xìngfú de wèidào",
    "vn": "hương vị hạnh phúc"
   }
  ],
  "patterns": [
   {
    "s": "N + 的味道 + 怎么样？",
    "m": "Hỏi mùi vị"
   },
   {
    "s": "尝到 / 闻到 + 味道",
    "m": "Nếm / ngửi thấy mùi vị"
   }
  ],
  "ex_zh": "当闻到从小就熟悉的味道时，平时冷静的她鼻子还是酸了。",
  "ex_py": "Dāng wéndào cóng xiǎo jiù shúxi de wèidào shí, píngshí lěngjìng de tā bízi háishi suān le.",
  "ex_vn": "Khi ngửi thấy mùi vị quen thuộc từ nhỏ, cô vốn ngày thường điềm tĩnh mà sống mũi vẫn cay cay.",
  "exList": [
   {
    "zh": "当闻到从小就熟悉的味道时，平时冷静的她鼻子还是酸了。",
    "py": "Dāng wéndào cóng xiǎo jiù shúxi de wèidào shí, píngshí lěngjìng de tā bízi háishi suān le.",
    "vn": "Khi ngửi thấy mùi vị quen thuộc từ nhỏ, cô vốn ngày thường điềm tĩnh mà sống mũi vẫn cay cay."
   },
   {
    "zh": "这家饭馆的汤味道特别鲜，每次来我都要点。",
    "py": "Zhè jiā fànguǎn de tāng wèidào tèbié xiān, měi cì lái wǒ dōu yào diǎn.",
    "vn": "Canh của quán này vị đặc biệt ngọt thanh, lần nào đến tôi cũng gọi."
   }
  ],
  "hanzi": [
   {
    "c": "味",
    "p": "wèi",
    "type": "左右结构 · Trái-phải",
    "st": 8,
    "ord": "口 (khẩu) trái → 未 (vị) phải",
    "rad": "口 (khẩu – miệng)",
    "mean": "mùi vị",
    "tip": "Bộ miệng 口 (nếm) + 未(biểu âm) → cảm nhận bằng MIỆNG, mở rộng thành MÙI VỊ, kết hợp 道(con đường/cách) thành 味道 = MÙI VỊ, HƯƠNG VỊ.",
    "cf": "昧 (mèi – \"mờ ám\", bộ 日\")",
    "w": "味道 / 口味 / 有味儿"
   },
   {
    "c": "道",
    "p": "dào",
    "type": "半包围结构 · Bán bao vây",
    "st": 12,
    "ord": "首(thủ) trên → 辶(sước) bao dưới-trái",
    "rad": "辶 (sước – đi, bước đi)",
    "mean": "đường, đạo lý; nói, biết",
    "tip": "首(cái đầu, hướng) + 辶(bước đi) → đi theo hướng ĐẦU dẫn tới = con ĐƯỜNG, ĐẠO LÝ, và cũng là BIẾT rõ đường đi.",
    "cf": "到 (dào – \"đến\", cùng âm nhưng khác bộ 刂)",
    "w": "知道 / 道理 / 味道"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Món sủi cảo này có hương vị của mẹ.",
    "answer": "这盘饺子有妈妈的味道。",
    "answerPy": "Zhè pán jiǎozi yǒu māma de wèidào.",
    "note": "……的味道 (nghĩa bóng).",
    "pair": "有……的味道"
   },
   {
    "promptLang": "vi",
    "prompt": "So với quán bên cạnh, mùi vị món ăn quán này ngon hơn.",
    "answer": "跟旁边那家相比，这家饭馆的菜味道更好。",
    "answerPy": "Gēn pángbiān nà jiā xiāngbǐ, zhè jiā fànguǎn de cài wèidào gèng hǎo.",
    "note": "Ôn 跟……相比 (Bài 8 · điểm 3).",
    "pair": "跟……相比，……"
   }
  ]
 },
 {
  "n": 36,
  "zh": "冷静",
  "py": "lěngjìng",
  "pos": "Tính từ",
  "vn": "điềm tĩnh, bình tĩnh",
  "hv": "lãnh tĩnh",
  "em": "🧘",
  "lesson": 4,
  "explain": [
   "Không nóng vội, không mất bình tĩnh khi gặp chuyện (冷 = lạnh, 静 = yên). Có thể làm động từ: 冷静一下 (bình tĩnh lại một chút)."
  ],
  "usage": "很冷静 · 遇到……都很冷静 · 冷静下来 · 冷静一下.",
  "collo": [
   "很冷静",
   "冷静下来",
   "冷静一下",
   "冷静地想一想"
  ],
  "colloFull": [
   {
    "zh": "很冷静",
    "py": "Hěn lěngjìng",
    "vn": "rất bình tĩnh"
   },
   {
    "zh": "冷静下来",
    "py": "Lěngjìng xiàlai",
    "vn": "bình tĩnh lại"
   },
   {
    "zh": "冷静一下",
    "py": "Lěngjìng yíxià",
    "vn": "bình tĩnh một chút"
   },
   {
    "zh": "冷静地想一想",
    "py": "Lěngjìng de xiǎng yi xiǎng",
    "vn": "bình tĩnh suy nghĩ"
   }
  ],
  "patterns": [
   {
    "s": "遇到 + 任何事情 + 都很冷静",
    "m": "Gặp chuyện gì cũng bình tĩnh"
   },
   {
    "s": "冷静 ↔ 着急 / 发脾气",
    "m": "bình tĩnh ↔ sốt ruột / nổi nóng"
   }
  ],
  "ex_zh": "当闻到从小就熟悉的味道时，平时冷静的她鼻子还是酸了。",
  "ex_py": "Dāng wéndào cóng xiǎo jiù shúxi de wèidào shí, píngshí lěngjìng de tā bízi háishi suān le.",
  "ex_vn": "Khi ngửi thấy mùi vị quen thuộc từ nhỏ, cô vốn ngày thường điềm tĩnh mà sống mũi vẫn cay cay.",
  "exList": [
   {
    "zh": "当闻到从小就熟悉的味道时，平时冷静的她鼻子还是酸了。",
    "py": "Dāng wéndào cóng xiǎo jiù shúxi de wèidào shí, píngshí lěngjìng de tā bízi háishi suān le.",
    "vn": "Khi ngửi thấy mùi vị quen thuộc từ nhỏ, cô vốn ngày thường điềm tĩnh mà sống mũi vẫn cay cay."
   },
   {
    "zh": "这位护士工作认真，最大的优点是遇到任何事情都很冷静。",
    "py": "Zhè wèi hùshi gōngzuò rènzhēn, zuìdà de yōudiǎn shì yùdào rènhé shìqing dōu hěn lěngjìng.",
    "vn": "Cô y tá này làm việc chăm chỉ, ưu điểm lớn nhất là gặp bất cứ chuyện gì cũng rất bình tĩnh."
   }
  ],
  "hanzi": [
   {
    "c": "冷",
    "p": "lěng",
    "type": "左右结构 · Trái-phải",
    "st": 7,
    "ord": "冫 (băng) trái → 令 (lệnh) phải",
    "rad": "冫 (băng – nước đá)",
    "mean": "lạnh",
    "tip": "Bộ băng 冫 (nước đá) + 令(biểu âm) → LẠNH LẼO như băng, kết hợp 制(chế tạo) thành 制冷 = LÀM LẠNH.",
    "cf": "冷 dễ nhầm với 冶 (yě – \"luyện kim\")",
    "w": "制冷 / 冷藏 / 寒冷"
   },
   {
    "c": "静",
    "p": "jìng",
    "type": "左右结构 · Trái-phải",
    "st": 14,
    "ord": "青 trái → 争 phải",
    "rad": "青 (thanh)",
    "mean": "yên tĩnh",
    "tip": "青 + 争 → TĨNH lặng. 冷静 = lạnh và tĩnh = bình tĩnh; 安静 = yên tĩnh (Bài 2).",
    "cf": "净 (jìng – sạch)",
    "w": "冷静 / 安静 / 平静"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Gặp chuyện thì đừng sốt ruột, trước tiên hãy bình tĩnh lại.",
    "answer": "遇到事情别着急，先冷静下来。",
    "answerPy": "Yùdào shìqing bié zháojí, xiān lěngjìng xiàlai.",
    "note": "Bổ ngữ xu hướng 下来 (HSK 3).",
    "pair": "冷静下来"
   },
   {
    "promptLang": "vi",
    "prompt": "Dù gặp khó khăn gì, anh ấy cũng rất bình tĩnh.",
    "answer": "无论遇到什么困难，他都很冷静。",
    "answerPy": "Wúlùn yùdào shénme kùnnan, tā dōu hěn lěngjìng.",
    "note": "无论……都…… (điểm 3) + ôn 任何 (Bài 1).",
    "pair": "无论……，都很冷静"
   }
  ]
 },
 {
  "n": 37,
  "zh": "鼻子",
  "py": "bízi",
  "pos": "Danh từ",
  "vn": "mũi",
  "hv": "tị tử",
  "em": "👃",
  "lesson": 4,
  "explain": [
   "Bộ phận để thở và ngửi. Cách nói 鼻子酸 / 鼻子一酸 = sống mũi cay cay, nghĩa là xúc động sắp khóc."
  ],
  "usage": "鼻子酸了 · 高鼻子 · 用鼻子闻.",
  "collo": [
   "鼻子酸",
   "高鼻子",
   "用鼻子闻",
   "鼻子不通"
  ],
  "colloFull": [
   {
    "zh": "鼻子酸",
    "py": "Bízi suān",
    "vn": "sống mũi cay (muốn khóc)"
   },
   {
    "zh": "高鼻子",
    "py": "Gāo bízi",
    "vn": "mũi cao"
   },
   {
    "zh": "用鼻子闻",
    "py": "Yòng bízi wén",
    "vn": "ngửi bằng mũi"
   },
   {
    "zh": "鼻子不通",
    "py": "Bízi bù tōng",
    "vn": "nghẹt mũi"
   }
  ],
  "patterns": [
   {
    "s": "鼻子 + (一)酸",
    "m": "Cảm động muốn khóc"
   },
   {
    "s": "眼睛 / 耳朵 / 鼻子 / 嘴",
    "m": "Các bộ phận trên mặt"
   }
  ],
  "ex_zh": "当闻到从小就熟悉的味道时，平时冷静的她鼻子还是酸了。",
  "ex_py": "Dāng wéndào cóng xiǎo jiù shúxi de wèidào shí, píngshí lěngjìng de tā bízi háishi suān le.",
  "ex_vn": "Khi ngửi thấy mùi vị quen thuộc từ nhỏ, cô vốn ngày thường điềm tĩnh mà sống mũi vẫn cay cay.",
  "exList": [
   {
    "zh": "当闻到从小就熟悉的味道时，平时冷静的她鼻子还是酸了。",
    "py": "Dāng wéndào cóng xiǎo jiù shúxi de wèidào shí, píngshí lěngjìng de tā bízi háishi suān le.",
    "vn": "Khi ngửi thấy mùi vị quen thuộc từ nhỏ, cô vốn ngày thường điềm tĩnh mà sống mũi vẫn cay cay."
   },
   {
    "zh": "我感冒了，鼻子不舒服，什么味道都闻不到。",
    "py": "Wǒ gǎnmào le, bízi bù shūfu, shénme wèidào dōu wén bu dào.",
    "vn": "Tôi bị cảm, mũi khó chịu, mùi gì cũng không ngửi thấy."
   }
  ],
  "hanzi": [
   {
    "c": "鼻",
    "p": "bí",
    "type": "上下结构 · Trên-dưới",
    "st": 14,
    "ord": "自 trên → 畀 dưới",
    "rad": "自 (tự – mũi)",
    "mean": "mũi",
    "tip": "自(hình cái mũi cổ) + 畀(cho, trao) → 自 vốn là hình MŨI, thêm 畀 làm rõ nghĩa = MŨI (bộ phận cơ thể).",
    "cf": "自 (zì – \"tự mình\", chính là hình cái mũi ban đầu\")",
    "w": "鼻子 / 鼻音"
   },
   {
    "c": "子",
    "p": "zi",
    "type": "象形字 · Chữ tượng hình",
    "st": 3,
    "ord": "ngang gập → sổ móc → ngang (hất)",
    "rad": "子 (tử – con)",
    "mean": "con; hậu tố danh từ",
    "tip": "Hình đứa bé quấn tã. Trong 句子、本子、箱子 là hậu tố, đọc nhẹ \"zi\".",
    "cf": "字 zì (chữ) — thêm 宀 ở trên",
    "w": "句子 / 本子 / 箱子"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Đọc thư của mẹ, sống mũi tôi cay cay.",
    "answer": "看了妈妈的信，我的鼻子酸了。",
    "answerPy": "Kàn le māma de xìn, wǒ de bízi suān le.",
    "note": "鼻子酸 = xúc động muốn khóc.",
    "pair": "鼻子酸了"
   },
   {
    "promptLang": "vi",
    "prompt": "Tôi nghẹt mũi nên không ngửi được mùi gì.",
    "answer": "我鼻子不舒服，所以闻不到任何味道。",
    "answerPy": "Wǒ bízi bù shūfu, suǒyǐ wén bu dào rènhé wèidào.",
    "note": "Ôn 任何 (Bài 1 · điểm 1) + bổ ngữ khả năng 闻不到 (Bài 4).",
    "pair": "闻不到任何……"
   }
  ]
 },
 {
  "n": 38,
  "zh": "父亲",
  "py": "fùqīn",
  "pos": "Danh từ",
  "vn": "cha, bố, phụ thân",
  "hv": "phụ thân",
  "em": "👨",
  "lesson": 4,
  "explain": [
   "Cha — cách gọi trang trọng, dùng khi kể / viết. Khi gọi trực tiếp nói 爸 / 爸爸; thân mật: 老爸."
  ],
  "usage": "我的父亲 · 父亲节 · 父亲和母亲.",
  "collo": [
   "我的父亲",
   "父亲节",
   "父亲的建议",
   "像父亲一样"
  ],
  "colloFull": [
   {
    "zh": "我的父亲",
    "py": "Wǒ de fùqīn",
    "vn": "bố tôi"
   },
   {
    "zh": "父亲节",
    "py": "Fùqīnjié",
    "vn": "Ngày của Bố"
   },
   {
    "zh": "父亲的建议",
    "py": "Fùqīn de jiànyì",
    "vn": "lời khuyên của bố"
   },
   {
    "zh": "像父亲一样",
    "py": "Xiàng fùqīn yíyàng",
    "vn": "giống như bố"
   }
  ],
  "patterns": [
   {
    "s": "父亲 (văn viết) / 爸爸 (khẩu ngữ) / 老爸 (thân mật)",
    "m": "Ba mức gọi bố"
   }
  ],
  "ex_zh": "为了让食物新鲜，父亲选择了城里最快的快递。",
  "ex_py": "Wèile ràng shíwù xīnxiān, fùqīn xuǎnzé le chéng lǐ zuì kuài de kuàidì.",
  "ex_vn": "Để đồ ăn tươi ngon, bố đã chọn dịch vụ chuyển phát nhanh nhất trong thành phố.",
  "exList": [
   {
    "zh": "为了让食物新鲜，父亲选择了城里最快的快递。",
    "py": "Wèile ràng shíwù xīnxiān, fùqīn xuǎnzé le chéng lǐ zuì kuài de kuàidì.",
    "vn": "Để đồ ăn tươi ngon, bố đã chọn dịch vụ chuyển phát nhanh nhất trong thành phố."
   },
   {
    "zh": "我父亲是一名医生，工作很忙，但总是抽时间陪我们。",
    "py": "Wǒ fùqīn shì yì míng yīshēng, gōngzuò hěn máng, dàn zǒngshì chōu shíjiān péi wǒmen.",
    "vn": "Bố tôi là bác sĩ, công việc rất bận nhưng luôn dành thời gian ở bên chúng tôi."
   }
  ],
  "hanzi": [
   {
    "c": "父",
    "p": "fù",
    "type": "独体字 · Chữ đơn thể",
    "st": 4,
    "ord": "丿 → 丶 → 丿 → 乀",
    "rad": "父 (phụ)",
    "mean": "cha",
    "tip": "Tượng hình bàn tay cầm rìu (người cha lao động) → CHA (phụ). 爸 = 父 + 巴.",
    "cf": "交 (jiāo – giao)",
    "w": "父亲 / 父母 / 爸爸"
   },
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
    "prompt": "Dù bận đến đâu, cuối tuần bố cũng ở bên chúng tôi.",
    "answer": "父亲无论多忙，周末都会陪我们。",
    "answerPy": "Fùqīn wúlùn duō máng, zhōumò dōu huì péi wǒmen.",
    "note": "Bài tập SGK điểm 3 (câu 2).",
    "pair": "无论多忙，都会陪……"
   },
   {
    "promptLang": "vi",
    "prompt": "Bố tôi tuy ít nói nhưng rất quan tâm đến chúng tôi.",
    "answer": "我父亲虽然话不多，但是非常关心我们。",
    "answerPy": "Wǒ fùqīn suīrán huà bù duō, dànshì fēicháng guānxīn wǒmen.",
    "note": "虽然……，但是…… (HSK 3).",
    "pair": "虽然……，但是……"
   }
  ]
 },
 {
  "n": 39,
  "zh": "城",
  "py": "chéng",
  "pos": "Danh từ",
  "vn": "thành phố, thành, phố",
  "hv": "thành",
  "em": "🏙️",
  "lesson": 4,
  "explain": [
   "Thành phố, khu phố thị (城里 = trong thành phố, 进城 = lên phố). Nghĩa gốc: tường thành (长城)."
  ],
  "usage": "城里 · 进城 · 城外 · 长城.",
  "collo": [
   "城里",
   "进城",
   "城外",
   "长城"
  ],
  "colloFull": [
   {
    "zh": "城里",
    "py": "Chéng lǐ",
    "vn": "trong thành phố"
   },
   {
    "zh": "进城",
    "py": "Jìn chéng",
    "vn": "lên phố"
   },
   {
    "zh": "城外",
    "py": "Chéng wài",
    "vn": "ngoại thành"
   },
   {
    "zh": "长城",
    "py": "Chángchéng",
    "vn": "Vạn Lý Trường Thành"
   }
  ],
  "patterns": [
   {
    "s": "城里 ↔ 农村",
    "m": "thành phố ↔ nông thôn"
   },
   {
    "s": "城 (đơn âm, hay đi với 里 / 外) ≈ 城市",
    "m": "城市 dùng độc lập: 大城市"
   }
  ],
  "ex_zh": "为了让食物新鲜，父亲选择了城里最快的快递。",
  "ex_py": "Wèile ràng shíwù xīnxiān, fùqīn xuǎnzé le chéng lǐ zuì kuài de kuàidì.",
  "ex_vn": "Để đồ ăn tươi ngon, bố đã chọn dịch vụ chuyển phát nhanh nhất trong thành phố.",
  "exList": [
   {
    "zh": "为了让食物新鲜，父亲选择了城里最快的快递。",
    "py": "Wèile ràng shíwù xīnxiān, fùqīn xuǎnzé le chéng lǐ zuì kuài de kuàidì.",
    "vn": "Để đồ ăn tươi ngon, bố đã chọn dịch vụ chuyển phát nhanh nhất trong thành phố."
   },
   {
    "zh": "爷爷奶奶住在城外，周末我们常开车去看他们。",
    "py": "Yéye nǎinai zhù zài chéng wài, zhōumò wǒmen cháng kāichē qù kàn tāmen.",
    "vn": "Ông bà sống ở ngoại thành, cuối tuần chúng tôi hay lái xe đi thăm ông bà."
   }
  ],
  "hanzi": [
   {
    "c": "城",
    "p": "chéng",
    "type": "形声字 · Chữ hình thanh",
    "st": 9,
    "ord": "土 → 成",
    "rad": "土 (thổ – đất)",
    "mean": "thành, tường thành",
    "tip": "土 (đất) + 成 (chỉ âm): tường đất bao quanh → thành, thành phố. 成 đã gặp trong 成绩 (HSK3 Bài 9).",
    "cf": "成 chéng — không có 土",
    "w": "城市 / 长城"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Hiệu sách lớn nhất trong thành phố ở cạnh trường tôi.",
    "answer": "城里最大的书店就在我们学校旁边。",
    "answerPy": "Chéng lǐ zuìdà de shūdiàn jiù zài wǒmen xuéxiào pángbiān.",
    "note": "城里 + 最 + adj + 的 + N.",
    "pair": "城里最……的……"
   },
   {
    "promptLang": "vi",
    "prompt": "Người trẻ đều muốn lên thành phố làm việc, đó chính là nói ở quê ngày càng ít người trẻ.",
    "answer": "年轻人都想进城工作，就是说，老家的年轻人越来越少了。",
    "answerPy": "Niánqīngrén dōu xiǎng jìn chéng gōngzuò, jiùshì shuō, lǎojiā de niánqīngrén yuèláiyuè shǎo le.",
    "note": "Ôn 就是说 (Bài 11 · điểm 4).",
    "pair": "……，就是说，……"
   }
  ]
 },
 {
  "n": 40,
  "zh": "鲜",
  "py": "xiān",
  "pos": "Tính từ",
  "vn": "(vị) ngọt thanh, ngon; tươi",
  "hv": "tiên",
  "em": "🦐",
  "lesson": 4,
  "explain": [
   "Vị ngọt thanh, đậm đà tự nhiên của canh, hải sản (汤很鲜). Nghĩa khác: tươi (新鲜 = tươi mới)."
  ],
  "usage": "汤很鲜 · 味道特别鲜 · 鲜鱼 · 新鲜.",
  "collo": [
   "汤很鲜",
   "味道鲜",
   "鲜鱼",
   "新鲜"
  ],
  "colloFull": [
   {
    "zh": "汤很鲜",
    "py": "Tāng hěn xiān",
    "vn": "canh rất ngọt"
   },
   {
    "zh": "味道鲜",
    "py": "Wèidào xiān",
    "vn": "vị ngọt thanh"
   },
   {
    "zh": "鲜鱼",
    "py": "Xiānyú",
    "vn": "cá tươi"
   },
   {
    "zh": "新鲜",
    "py": "Xīnxiān",
    "vn": "tươi mới"
   }
  ],
  "patterns": [
   {
    "s": "N + 很 / 特别 + 鲜",
    "m": "Khen vị ngọt thanh"
   },
   {
    "s": "鲜 ≈ 新鲜 (tươi)",
    "m": "新鲜 dùng rộng hơn: 新鲜水果, 新鲜空气"
   }
  ],
  "ex_zh": "鸡汤很鲜，林静静心里更暖。",
  "ex_py": "Jītāng hěn xiān, Lín Jìngjìng xīnli gèng nuǎn.",
  "ex_vn": "Canh gà rất ngọt, lòng Lâm Tĩnh Tĩnh càng ấm áp hơn.",
  "exList": [
   {
    "zh": "鸡汤很鲜，林静静心里更暖。",
    "py": "Jītāng hěn xiān, Lín Jìngjìng xīnli gèng nuǎn.",
    "vn": "Canh gà rất ngọt, lòng Lâm Tĩnh Tĩnh càng ấm áp hơn."
   },
   {
    "zh": "这家饭馆的汤味道特别鲜，每次来我都要点。",
    "py": "Zhè jiā fànguǎn de tāng wèidào tèbié xiān, měi cì lái wǒ dōu yào diǎn.",
    "vn": "Canh của quán này vị đặc biệt ngọt thanh, lần nào đến tôi cũng gọi."
   }
  ],
  "hanzi": [
   {
    "c": "鲜",
    "p": "xiān",
    "type": "会意字 · Chữ hội ý",
    "st": 14,
    "ord": "鱼 → 羊",
    "rad": "鱼 (ngư – cá)",
    "mean": "tươi",
    "tip": "鱼 (cá) + 羊 (dê): cá và thịt dê tươi là món ngon nhất → tươi, ngon.",
    "cf": "鲁 lǔ — dưới là 日",
    "w": "新鲜 / 很新鲜"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Canh cá mẹ nấu vị rất ngọt, tôi uống liền hai bát.",
    "answer": "妈妈做的鱼汤味道很鲜，我一口气喝了两碗。",
    "answerPy": "Māma zuò de yú tāng wèidào hěn xiān, wǒ yìkǒuqì hē le liǎng wǎn.",
    "note": "一口气 = một hơi (HSK 4).",
    "pair": "……味道很鲜"
   },
   {
    "promptLang": "vi",
    "prompt": "Canh này không những ngọt mà còn rất tốt cho sức khỏe.",
    "answer": "这个汤不但很鲜，而且对身体很好。",
    "answerPy": "Zhège tāng búdàn hěn xiān, érqiě duì shēntǐ hěn hǎo.",
    "note": "Ôn 不但 / 不仅……，而且…… (Bài 3 · điểm 2).",
    "pair": "不但……，而且……"
   }
  ]
 },
 {
  "n": 41,
  "zh": "暖",
  "py": "nuǎn",
  "pos": "Tính từ",
  "vn": "ấm, ấm áp",
  "hv": "noãn",
  "em": "🔥",
  "lesson": 4,
  "explain": [
   "Ấm (nhiệt độ vừa phải, dễ chịu). Hay dùng cho cảm xúc: 心里很暖 (trong lòng ấm áp). Từ hai âm tiết: 暖和 nuǎnhuo, 温暖 wēnnuǎn."
  ],
  "usage": "心里很暖 · 天气暖了 · 暖暖的 · 温暖.",
  "collo": [
   "心里很暖",
   "暖暖的",
   "天气暖了",
   "温暖"
  ],
  "colloFull": [
   {
    "zh": "心里很暖",
    "py": "Xīnli hěn nuǎn",
    "vn": "lòng ấm áp"
   },
   {
    "zh": "暖暖的",
    "py": "Nuǎnnuan de",
    "vn": "ấm áp"
   },
   {
    "zh": "天气暖了",
    "py": "Tiānqì nuǎn le",
    "vn": "trời ấm lên rồi"
   },
   {
    "zh": "温暖",
    "py": "Wēnnuǎn",
    "vn": "ấm áp"
   }
  ],
  "patterns": [
   {
    "s": "心里 + 暖 / 暖暖的",
    "m": "Cảm xúc ấm áp"
   },
   {
    "s": "暖 ↔ 冷 / 凉",
    "m": "ấm ↔ lạnh / mát"
   }
  ],
  "ex_zh": "鸡汤很鲜，林静静心里更暖。",
  "ex_py": "Jītāng hěn xiān, Lín Jìngjìng xīnli gèng nuǎn.",
  "ex_vn": "Canh gà rất ngọt, lòng Lâm Tĩnh Tĩnh càng ấm áp hơn.",
  "exList": [
   {
    "zh": "鸡汤很鲜，林静静心里更暖。",
    "py": "Jītāng hěn xiān, Lín Jìngjìng xīnli gèng nuǎn.",
    "vn": "Canh gà rất ngọt, lòng Lâm Tĩnh Tĩnh càng ấm áp hơn."
   },
   {
    "zh": "收到父母寄来的毛衣，我心里暖暖的。",
    "py": "Shōudào fùmǔ jìlái de máoyī, wǒ xīnli nuǎnnuan de.",
    "vn": "Nhận được chiếc áo len bố mẹ gửi đến, trong lòng tôi ấm áp."
   }
  ],
  "hanzi": [
   {
    "c": "暖",
    "p": "nuǎn",
    "type": "左右结构 · Trái-phải",
    "st": 13,
    "ord": "日 trái → 爰 phải",
    "rad": "日 (nhật)",
    "mean": "ấm",
    "tip": "Mặt trời 日 + 爰 → có nắng → ẤM. Phân biệt với 缓 (huǎn – chậm, bộ 纟).",
    "cf": "缓 (huǎn – chậm)",
    "w": "暖 / 暖和 / 变暖 / 暖气"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Nghe những lời bố mẹ nói, lòng tôi rất ấm áp.",
    "answer": "听了父母说的那些话，我心里很暖。",
    "answerPy": "Tīng le fùmǔ shuō de nàxiē huà, wǒ xīnli hěn nuǎn.",
    "note": "心里 + 暖.",
    "pair": "心里很暖"
   },
   {
    "promptLang": "vi",
    "prompt": "Trời ấm lên rồi, ông bà ngày nào cũng đi chạy bộ.",
    "answer": "天气暖了，爷爷奶奶每天都去跑步。",
    "answerPy": "Tiānqì nuǎn le, yéye nǎinai měitiān dōu qù pǎobù.",
    "note": "了 chỉ sự thay đổi (HSK 2).",
    "pair": "天气暖了"
   }
  ]
 },
 {
  "n": 42,
  "zh": "勇敢",
  "py": "yǒnggǎn",
  "pos": "Tính từ",
  "vn": "dũng cảm, can đảm",
  "hv": "dũng cảm",
  "em": "🦸",
  "lesson": 4,
  "explain": [
   "Không sợ nguy hiểm, khó khăn. Hay làm trạng ngữ: 勇敢(地)面对 (dũng cảm đối mặt)."
  ],
  "usage": "很勇敢 · 勇敢(地) + V · 勇敢的孩子.",
  "collo": [
   "勇敢面对",
   "很勇敢",
   "勇敢的人",
   "勇敢地说出来"
  ],
  "colloFull": [
   {
    "zh": "勇敢面对",
    "py": "Yǒnggǎn miànduì",
    "vn": "dũng cảm đối mặt"
   },
   {
    "zh": "很勇敢",
    "py": "Hěn yǒnggǎn",
    "vn": "rất dũng cảm"
   },
   {
    "zh": "勇敢的人",
    "py": "Yǒnggǎn de rén",
    "vn": "người dũng cảm"
   },
   {
    "zh": "勇敢地说出来",
    "py": "Yǒnggǎn de shuō chūlai",
    "vn": "dũng cảm nói ra"
   }
  ],
  "patterns": [
   {
    "s": "勇敢(地) + V",
    "m": "Trạng ngữ: một cách dũng cảm"
   },
   {
    "s": "勇敢 ↔ 害怕",
    "m": "dũng cảm ↔ sợ"
   }
  ],
  "ex_zh": "遇到困难别害怕，要勇敢面对。",
  "ex_py": "Yùdào kùnnan bié hàipà, yào yǒnggǎn miànduì.",
  "ex_vn": "Gặp khó khăn đừng sợ, phải dũng cảm đối mặt.",
  "exList": [
   {
    "zh": "遇到困难别害怕，要勇敢面对。",
    "py": "Yùdào kùnnan bié hàipà, yào yǒnggǎn miànduì.",
    "vn": "Gặp khó khăn đừng sợ, phải dũng cảm đối mặt."
   },
   {
    "zh": "这个孩子很勇敢，打针的时候一点儿也没哭。",
    "py": "Zhège háizi hěn yǒnggǎn, dǎzhēn de shíhou yìdiǎnr yě méi kū.",
    "vn": "Đứa bé này rất dũng cảm, lúc tiêm không khóc chút nào."
   }
  ],
  "hanzi": [
   {
    "c": "勇",
    "p": "yǒng",
    "type": "上下结构 · Trên-dưới",
    "st": 9,
    "ord": "甬 trên → 力 dưới",
    "rad": "力 (lực – sức)",
    "mean": "dũng cảm",
    "tip": "Bộ sức lực 力 + 甬(biểu âm) → có SỨC MẠNH tinh thần để đối mặt, kết hợp 敢(dám) thành 勇敢 = DŨNG CẢM.",
    "cf": "涌 (yǒng – \"trào dâng\", bộ 氵\")",
    "w": "勇敢 / 勇气 / 英勇"
   },
   {
    "c": "敢",
    "p": "gǎn",
    "type": "左右结构 · Trái-phải",
    "st": 11,
    "ord": "𠂉⺕ trái → 攵 phải",
    "rad": "攵 (phộc)",
    "mean": "dám",
    "tip": "Hình tay cầm vũ khí tiến lên → DÁM, CẢM. 勇敢 = dũng cảm (Bài 9).",
    "cf": "感 (gǎn – cảm, có 心)",
    "w": "敢 / 勇敢 / 不敢"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Dù gặp khó khăn gì, chúng ta cũng phải dũng cảm đối mặt.",
    "answer": "无论遇到什么困难，我们都要勇敢面对。",
    "answerPy": "Wúlùn yùdào shénme kùnnan, wǒmen dōu yào yǒnggǎn miànduì.",
    "note": "无论……都…… (điểm 3).",
    "pair": "无论……，都要勇敢……"
   },
   {
    "promptLang": "vi",
    "prompt": "Muốn thành công thì không thể không dũng cảm.",
    "answer": "想要成功，不能不勇敢。",
    "answerPy": "Xiǎng yào chénggōng, bù néng bù yǒnggǎn.",
    "note": "双重否定 不能不 (điểm 2 bài này).",
    "pair": "不能不 + adj / V"
   }
  ]
 },
 {
  "n": 43,
  "zh": "商量",
  "py": "shāngliang",
  "pos": "Động từ",
  "vn": "bàn bạc, thương lượng",
  "hv": "thương lượng",
  "em": "🗣️",
  "lesson": 4,
  "explain": [
   "Trao đổi ý kiến với nhau để quyết định một việc (thường trong gia đình, bạn bè). Chữ 量 đọc nhẹ: shāngliang. ⚠️ Khác “thương lượng” trong tiếng Việt (mặc cả) — 商量 chủ yếu là bàn bạc."
  ],
  "usage": "和 / 跟 + ai + 商量 · 商量一下 · 商量好了 · 有事商量.",
  "collo": [
   "和父母商量",
   "商量一下",
   "商量好了",
   "有事商量"
  ],
  "colloFull": [
   {
    "zh": "和父母商量",
    "py": "Hé fùmǔ shāngliang",
    "vn": "bàn với bố mẹ"
   },
   {
    "zh": "商量一下",
    "py": "Shāngliang yíxià",
    "vn": "bàn bạc một chút"
   },
   {
    "zh": "商量好了",
    "py": "Shāngliang hǎo le",
    "vn": "bàn xong rồi"
   },
   {
    "zh": "有事商量",
    "py": "Yǒu shì shāngliang",
    "vn": "có việc gì cùng bàn"
   }
  ],
  "patterns": [
   {
    "s": "和 / 跟 + ai + 商量 + việc",
    "m": "✗ 商量 + ai"
   },
   {
    "s": "商量商量 (ABAB)",
    "m": "Bàn bạc một chút"
   }
  ],
  "ex_zh": "遇到困难别害怕，要勇敢面对，任何时候都可以和父母商量。",
  "ex_py": "Yùdào kùnnan bié hàipà, yào yǒnggǎn miànduì, rènhé shíhou dōu kěyǐ hé fùmǔ shāngliang.",
  "ex_vn": "Gặp khó khăn đừng sợ, phải dũng cảm đối mặt, bất cứ lúc nào cũng có thể bàn bạc với bố mẹ.",
  "exList": [
   {
    "zh": "遇到困难别害怕，要勇敢面对，任何时候都可以和父母商量。",
    "py": "Yùdào kùnnan bié hàipà, yào yǒnggǎn miànduì, rènhé shíhou dōu kěyǐ hé fùmǔ shāngliang.",
    "vn": "Gặp khó khăn đừng sợ, phải dũng cảm đối mặt, bất cứ lúc nào cũng có thể bàn bạc với bố mẹ."
   },
   {
    "zh": "这件事我得跟家人商量一下再决定。",
    "py": "Zhè jiàn shì wǒ děi gēn jiārén shāngliang yíxià zài juédìng.",
    "vn": "Việc này tôi phải bàn với người nhà rồi mới quyết định."
   }
  ],
  "hanzi": [
   {
    "c": "商",
    "p": "shāng",
    "type": "上下结构 · Trên-dưới",
    "st": 11,
    "ord": "亠+丷 trên → 冂+八+口 dưới",
    "rad": "口 (khẩu)",
    "mean": "buôn bán, bàn bạc",
    "tip": "Nghĩa gốc là BUÔN BÁN (thương nhân phải nói 口 để mặc cả) → mở rộng thành BÀN BẠC, kết hợp 量(cân nhắc) thành 商量 = THƯƠNG LƯỢNG.",
    "cf": "高 (gāo – \"cao\", tự dạng gần giống)",
    "w": "商量 / 商店 / 商人"
   },
   {
    "c": "量",
    "p": "liáng",
    "type": "上下结构 · Trên-dưới",
    "st": 12,
    "ord": "日 → 一 → 里",
    "rad": "里 (lý)",
    "mean": "lượng",
    "tip": "Hình cái cân đo lường → LƯỢNG (liàng). Đọc liáng = đo (量体温). 数量, 质量, 力量.",
    "cf": "重 (zhòng – nặng)",
    "w": "数量 / 质量 / 商量 (liang)"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Chúng ta bàn xem cuối tuần đi đâu chơi nhé.",
    "answer": "咱们商量一下周末去哪儿玩吧。",
    "answerPy": "Zánmen shāngliang yíxià zhōumò qù nǎr wán ba.",
    "note": "商量一下 + nội dung.",
    "pair": "商量一下……"
   },
   {
    "promptLang": "vi",
    "prompt": "Đây không phải chuyện của một mình tôi, mà là chuyện của cả nhà, phải bàn bạc với nhau.",
    "answer": "这不是我一个人的事，而是全家的事，我们得一起商量。",
    "answerPy": "Zhè bú shì wǒ yí gè rén de shì, érshì quánjiā de shì, wǒmen děi yìqǐ shāngliang.",
    "note": "Ôn 不是……而是…… (Bài 11 · điểm 3).",
    "pair": "不是……，而是……"
   }
  ]
 }
];
var wuData = [
 {
  "img": "/images/hsk4v3/bai-12/wu-A.webp",
  "label": "打折",
  "py": "dǎzhé",
  "letter": "A"
 },
 {
  "img": "/images/hsk4v3/bai-12/wu-B.webp",
  "label": "毛衣",
  "py": "máoyī",
  "letter": "B"
 },
 {
  "img": "/images/hsk4v3/bai-12/wu-C.webp",
  "label": "鼻子",
  "py": "bízi",
  "letter": "C"
 },
 {
  "img": "/images/hsk4v3/bai-12/wu-D.webp",
  "label": "勇敢",
  "py": "yǒnggǎn",
  "letter": "D"
 },
 {
  "img": "/images/hsk4v3/bai-12/wu-E.webp",
  "label": "脱",
  "py": "tuō",
  "letter": "E"
 },
 {
  "img": "/images/hsk4v3/bai-12/wu-F.webp",
  "label": "伤心",
  "py": "shāngxīn",
  "letter": "F"
 }
];
var dialogData = [
 {
  "scene": "在商场 · Ở trung tâm thương mại (Dương Đồng Lạc và vợ là Vương Nhất Phi mua quần áo cho bố mẹ) — 小语助力: “老妈” là cách gọi mẹ thân mật, trìu mến trong khẩu ngữ (giống “mẹ già nhà mình”).",
  "anh": "/images/hsk4v3/bai-12/kv-1.webp",
  "nguoi": [
   {
    "ten": "王一飞",
    "anh": "/images/hsk4v3/nv/yifei.webp"
   },
   {
    "ten": "杨同乐",
    "anh": "/images/hsk4v3/nv/tongle.webp"
   },
   {
    "ten": "售货员",
    "anh": "/images/hsk4v3/bai-12/shouhuoyuan.webp"
   }
  ],
  "preQuiz": [
   {
    "q": "杨同乐认为毛衣的颜色怎么样？",
    "opts": [
     "很合适",
     "不合适",
     "正流行",
     "太深了"
    ],
    "ans": 1
   },
   {
    "q": "商场年底有什么活动？",
    "opts": [
     "买一送一",
     "买二送一",
     "全场七折",
     "免费送货"
    ],
    "ans": 2
   }
  ],
  "lines": [
   {
    "sp": 0,
    "zh": "你觉得老妈穿这件毛衣怎么样？",
    "py": "Nǐ juéde lǎomā chuān zhè jiàn máoyī zěnmeyàng?",
    "vn": "Anh thấy mẹ mặc chiếc áo len này thế nào?"
   },
   {
    "sp": 1,
    "zh": "样子不错，就是颜色好像不怎么适合她。",
    "py": "Yàngzi búcuò, jiùshì yánsè hǎoxiàng bù zěnme shìhé tā.",
    "vn": "Kiểu dáng không tệ, chỉ là màu sắc hình như không hợp với mẹ lắm."
   },
   {
    "sp": 2,
    "zh": "老年人穿这种颜色的衣服正合适，颜色不深，质量还特别好。您看那位阿姨正试着呢，是不是很好看？",
    "py": "Lǎoniánrén chuān zhè zhǒng yánsè de yīfu zhèng héshì, yánsè bù shēn, zhìliàng hái tèbié hǎo. Nín kàn nà wèi āyí zhèng shì zhe ne, shì bu shì hěn hǎokàn?",
    "vn": "Người lớn tuổi mặc quần áo màu này là vừa hợp, màu không đậm, chất lượng lại đặc biệt tốt. Anh xem bác gái kia đang mặc thử kìa, có phải rất đẹp không?"
   },
   {
    "sp": 0,
    "zh": "嗯，是挺不错的。同乐，我印象中，老妈也常穿这种颜色的衣服，她应该会喜欢的，买一件吧。",
    "py": "Ǹg, shì tǐng búcuò de. Tónglè, wǒ yìnxiàng zhōng, lǎomā yě cháng chuān zhè zhǒng yánsè de yīfu, tā yīnggāi huì xǐhuan de, mǎi yí jiàn ba.",
    "vn": "Ừm, đúng là khá đẹp. Đồng Lạc, em nhớ là mẹ cũng hay mặc quần áo màu này, chắc mẹ sẽ thích, mua một chiếc đi."
   },
   {
    "sp": 1,
    "zh": "好的，老妈高兴比什么都强。",
    "py": "Hǎo de, lǎomā gāoxìng bǐ shénme dōu qiáng.",
    "vn": "Được, mẹ vui là hơn tất cả."
   },
   {
    "sp": 2,
    "zh": "就是，老人开心最重要。我们店正好年底有活动，全场打七折呢，挺值的。",
    "py": "Jiùshì, lǎorén kāixīn zuì zhòngyào. Wǒmen diàn zhènghǎo niándǐ yǒu huódòng, quán chǎng dǎ qī zhé ne, tǐng zhí de.",
    "vn": "Đúng thế, người già vui vẻ là quan trọng nhất. Cửa hàng chúng tôi vừa hay cuối năm có chương trình, toàn bộ cửa hàng giảm 30% đấy, rất đáng tiền."
   }
  ]
 },
 {
  "scene": "在家里 · Ở nhà (Lưu Minh đi làm về, trò chuyện với vợ là Vương Nhất Tuyết) — 小语助力: Trong gia đình Trung Quốc, người lớn thường gọi các thành viên theo vai vế của con trẻ (爷爷、奶奶 ở đây là bố mẹ của Lưu Minh, gọi theo cách của bé Tiểu Minh) — vừa thân mật, vừa giúp trẻ hiểu quan hệ trong nhà.",
  "anh": "/images/hsk4v3/bai-12/kv-2.webp",
  "nguoi": [
   {
    "ten": "刘明",
    "anh": "/images/hsk4v3/nv/liuming.webp"
   },
   {
    "ten": "王一雪",
    "anh": "/images/hsk4v3/nv/yixue.webp"
   }
  ],
  "preQuiz": [
   {
    "q": "爷爷、奶奶下午去做什么了？",
    "opts": [
     "打扫卫生",
     "在家睡觉",
     "接小明放学",
     "参加老年班活动"
    ],
    "ans": 3
   },
   {
    "q": "王一雪批评小明，是因为他：",
    "opts": [
     "总是迟到",
     "不打扫房间",
     "对奶奶发脾气",
     "考试前不复习"
    ],
    "ans": 2
   }
  ],
  "lines": [
   {
    "sp": 0,
    "zh": "爷爷、奶奶还没回来呢？",
    "py": "Yéye, nǎinai hái méi huílai ne?",
    "vn": "Ông bà vẫn chưa về à?"
   },
   {
    "sp": 1,
    "zh": "没呢，估计快了。下午老年班举办一期听力保护活动，他们去参加活动了。",
    "py": "Méi ne, gūjì kuài le. Xiàwǔ lǎoniánbān jǔbàn yì qī tīnglì bǎohù huódòng, tāmen qù cānjiā huódòng le.",
    "vn": "Chưa, chắc sắp về rồi. Chiều nay lớp người cao tuổi tổ chức một đợt hoạt động bảo vệ thính lực, ông bà đi tham gia rồi."
   },
   {
    "sp": 0,
    "zh": "他们的活动还挺丰富的！",
    "py": "Tāmen de huódòng hái tǐng fēngfù de!",
    "vn": "Hoạt động của ông bà cũng phong phú ghê!"
   },
   {
    "sp": 1,
    "zh": "嗯。小明最近要考试，心里有点儿烦，昨天因为脱、挂衣服这点儿小事，就对奶奶发脾气了。",
    "py": "Ǹg. Xiǎomíng zuìjìn yào kǎoshì, xīnli yǒudiǎnr fán, zuótiān yīnwèi tuō, guà yīfu zhè diǎnr xiǎoshì, jiù duì nǎinai fā píqi le.",
    "vn": "Ừ. Tiểu Minh sắp thi, trong lòng hơi bực bội, hôm qua chỉ vì chuyện nhỏ cởi áo, treo áo mà nổi nóng với bà."
   },
   {
    "sp": 0,
    "zh": "是吗？他这样做老人该伤心了。",
    "py": "Shì ma? Tā zhèyàng zuò lǎorén gāi shāngxīn le.",
    "vn": "Thế à? Nó làm vậy chắc bà buồn lắm."
   },
   {
    "sp": 1,
    "zh": "就是啊。他也不是不知道自己错了，我批评他以后，他马上说放学回来就向奶奶道歉。",
    "py": "Jiùshì a. Tā yě bú shì bù zhīdao zìjǐ cuò le, wǒ pīpíng tā yǐhòu, tā mǎshàng shuō fàngxué huílai jiù xiàng nǎinai dàoqiàn.",
    "vn": "Đúng vậy. Nó cũng không phải là không biết mình sai, em phê bình xong là nó nói ngay tan học về sẽ xin lỗi bà."
   },
   {
    "sp": 0,
    "zh": "好的，我也再跟他聊聊。",
    "py": "Hǎo de, wǒ yě zài gēn tā liáoliao.",
    "vn": "Được, anh cũng sẽ nói chuyện thêm với nó."
   },
   {
    "sp": 1,
    "zh": "那就更好了。",
    "py": "Nà jiù gèng hǎo le.",
    "vn": "Thế thì càng tốt."
   }
  ]
 },
 {
  "scene": "为幸福而努力 · Vì hạnh phúc mà cố gắng (Dương Đồng Lạc ở xa bố mẹ; vợ chồng Lưu Minh đón bố mẹ về ở cùng)",
  "anh": "/images/hsk4v3/bai-12/kv-3.webp",
  "nguoi": [
   {
    "ten": "小语",
    "anh": "/images/hsk4v3/nv/xiaoyu.webp"
   }
  ],
  "preQuiz": [
   {
    "q": "杨同乐每个周末都会做什么？",
    "opts": [
     "回上海",
     "去北京出差",
     "带父母旅游",
     "给父母打电话"
    ],
    "ans": 3
   },
   {
    "q": "刘明的母亲身体变差后，刘明和王一雪：",
    "opts": [
     "不再工作了",
     "请别人帮忙照顾",
     "带父母回了老家",
     "把父母接到了自己家"
    ],
    "ans": 3
   }
  ],
  "lines": [
   {
    "sp": 0,
    "zh": "杨同乐的老家在上海，他自毕业后一直在北京工作。",
    "py": "Yáng Tónglè de lǎojiā zài Shànghǎi, tā zì bìyè hòu yìzhí zài Běijīng gōngzuò.",
    "vn": "Quê của Dương Đồng Lạc ở Thượng Hải, từ sau khi tốt nghiệp anh ấy luôn làm việc ở Bắc Kinh."
   },
   {
    "sp": 0,
    "zh": "虽然没和父母生活在一起，但父子、母子关系特别好。",
    "py": "Suīrán méi hé fùmǔ shēnghuó zài yìqǐ, dàn fùzǐ, mǔzǐ guānxi tèbié hǎo.",
    "vn": "Tuy không sống cùng bố mẹ nhưng quan hệ cha con, mẹ con rất tốt."
   },
   {
    "sp": 0,
    "zh": "杨同乐很关心父母，无论平时工作有多忙，他每个周末都会给父母打电话。",
    "py": "Yáng Tónglè hěn guānxīn fùmǔ, wúlùn píngshí gōngzuò yǒu duō máng, tā měi gè zhōumò dōu huì gěi fùmǔ dǎdiànhuà.",
    "vn": "Dương Đồng Lạc rất quan tâm bố mẹ, dù ngày thường công việc bận đến đâu, cuối tuần nào anh ấy cũng gọi điện cho bố mẹ."
   },
   {
    "sp": 0,
    "zh": "条件允许时，他会回上海看父母。",
    "py": "Tiáojiàn yǔnxǔ shí, tā huì huí Shànghǎi kàn fùmǔ.",
    "vn": "Khi điều kiện cho phép, anh ấy sẽ về Thượng Hải thăm bố mẹ."
   },
   {
    "sp": 0,
    "zh": "刘明和王一雪结婚后，一直没有和父母生活在一起，他们平时会另外找时间去看父母，帮父母做做饭，打扫打扫卫生。",
    "py": "Liú Míng hé Wáng Yīxuě jiéhūn hòu, yìzhí méiyǒu hé fùmǔ shēnghuó zài yìqǐ, tāmen píngshí huì lìngwài zhǎo shíjiān qù kàn fùmǔ, bāng fùmǔ zuò zuòfàn, dǎsǎo dǎsǎo wèishēng.",
    "vn": "Lưu Minh và Vương Nhất Tuyết sau khi kết hôn vẫn không sống cùng bố mẹ, ngày thường họ dành riêng thời gian đi thăm bố mẹ, giúp bố mẹ nấu nướng, dọn dẹp nhà cửa."
   },
   {
    "sp": 0,
    "zh": "这两年，刘明的母亲身体不太好，他们很担心，就把父母接到了自己家里照顾。",
    "py": "Zhè liǎng nián, Liú Míng de mǔqīn shēntǐ bú tài hǎo, tāmen hěn dānxīn, jiù bǎ fùmǔ jiēdào le zìjǐ jiāli zhàogu.",
    "vn": "Hai năm nay mẹ của Lưu Minh sức khỏe không được tốt, họ rất lo, nên đã đón bố mẹ về nhà mình chăm sóc."
   },
   {
    "sp": 0,
    "zh": "父母待在他们身边，他们也终于能放心地去工作了。",
    "py": "Fùmǔ dāi zài tāmen shēnbiān, tāmen yě zhōngyú néng fàng xīndì qù gōngzuò le.",
    "vn": "Bố mẹ ở ngay bên cạnh, cuối cùng họ cũng có thể yên tâm đi làm."
   }
  ],
  "doan": true
 },
 {
  "scene": "幸福的味道 · Hương vị hạnh phúc (Lâm Tĩnh Tĩnh một mình làm việc ở Bắc Kinh, nhận canh gà bố mẹ gửi từ quê) — 小语助力: “儿行千里母担忧” nghĩa là con đi xa nghìn dặm, mẹ ở nhà lo lắng — con lớn rồi đi đâu, cha mẹ cũng luôn lo lắng, nhớ thương.",
  "anh": "/images/hsk4v3/bai-12/kv-4.webp",
  "nguoi": [
   {
    "ten": "小语",
    "anh": "/images/hsk4v3/nv/xiaoyu.webp"
   }
  ],
  "preQuiz": [
   {
    "q": "林静静下班回家后热的是：",
    "opts": [
     "奶茶",
     "鸡汤",
     "包子",
     "米饭"
    ],
    "ans": 1
   },
   {
    "q": "父母给林静静寄了什么？",
    "opts": [
     "好用的",
     "好吃的",
     "好玩的",
     "好看的"
    ],
    "ans": 1
   }
  ],
  "lines": [
   {
    "sp": 0,
    "zh": "下班回家，林静静将父母从老家寄来的鸡汤热了热，当闻到从小就熟悉的味道时，平时冷静的她鼻子还是酸了。",
    "py": "Xiàbān huíjiā, Lín Jìngjìng jiāng fùmǔ cóng lǎojiā jìlái de jītāng rè le rè, dāng wéndào cóng xiǎo jiù shúxi de wèidào shí, píngshí lěngjìng de tā bízi háishi suān le.",
    "vn": "Tan làm về nhà, Lâm Tĩnh Tĩnh đem canh gà bố mẹ gửi từ quê lên hâm nóng; khi ngửi thấy mùi vị quen thuộc từ nhỏ, cô vốn ngày thường điềm tĩnh mà sống mũi vẫn cay cay."
   },
   {
    "sp": 0,
    "zh": "林静静一个人来北京工作三年了，父母总是担心她为了节约时间而不好好吃饭，所以每个月都给她寄各种好吃的。",
    "py": "Lín Jìngjìng yí gè rén lái Běijīng gōngzuò sān nián le, fùmǔ zǒngshì dānxīn tā wèile jiéyuē shíjiān ér bù hǎohāo chīfàn, suǒyǐ měi gè yuè dōu gěi tā jì gèzhǒng hǎochī de.",
    "vn": "Lâm Tĩnh Tĩnh một mình lên Bắc Kinh làm việc đã ba năm, bố mẹ luôn lo cô vì tiết kiệm thời gian mà không ăn uống tử tế, nên tháng nào cũng gửi cho cô đủ thứ đồ ăn ngon."
   },
   {
    "sp": 0,
    "zh": "这次母亲专门做了林静静最爱喝的鸡汤，为了让食物新鲜，父亲选择了城里最快的快递，上午寄出，下午就能收到。",
    "py": "Zhè cì mǔqīn zhuānmén zuò le Lín Jìngjìng zuì ài hē de jītāng, wèile ràng shíwù xīnxiān, fùqīn xuǎnzé le chéng lǐ zuì kuài de kuàidì, shàngwǔ jì chū, xiàwǔ jiù néng shōudào.",
    "vn": "Lần này mẹ đặc biệt nấu món canh gà mà Lâm Tĩnh Tĩnh thích uống nhất; để đồ ăn tươi ngon, bố chọn dịch vụ chuyển phát nhanh nhất trong thành phố, buổi sáng gửi đi, buổi chiều đã nhận được."
   },
   {
    "sp": 0,
    "zh": "鸡汤很鲜，林静静心里更暖，她觉得父母好像就在身边。",
    "py": "Jītāng hěn xiān, Lín Jìngjìng xīnli gèng nuǎn, tā juéde fùmǔ hǎoxiàng jiù zài shēnbiān.",
    "vn": "Canh gà rất ngọt, lòng Lâm Tĩnh Tĩnh càng ấm hơn, cô cảm thấy bố mẹ như đang ở ngay bên cạnh."
   },
   {
    "sp": 0,
    "zh": "都说“儿行千里母担忧”，父母总对她说：“遇到困难别害怕，要勇敢面对，任何时候都可以和父母商量。”",
    "py": "Dōu shuō “ér xíng qiān lǐ mǔ dānyōu”, fùmǔ zǒng duì tā shuō: “yùdào kùnnan bié hàipà, yào yǒnggǎn miànduì, rènhé shíhou dōu kěyǐ hé fùmǔ shāngliang.”",
    "vn": "Người ta vẫn nói “con đi nghìn dặm, mẹ ở nhà lo lắng”, bố mẹ luôn dặn cô: “Gặp khó khăn đừng sợ, phải dũng cảm đối mặt, bất cứ lúc nào cũng có thể bàn bạc với bố mẹ.”"
   },
   {
    "sp": 0,
    "zh": "尽管在大城市生活压力有些大，但每当想到父母的这些话，尝到来自老家熟悉的味道，她就觉得又能笑着面对生活了。",
    "py": "Jǐnguǎn zài dà chéngshì shēnghuó yālì yǒuxiē dà, dàn měi dāng xiǎngdào fùmǔ de zhèxiē huà, chángdào láizì lǎojiā shúxi de wèidào, tā jiù juéde yòu néng xiào zhe miànduì shēnghuó le.",
    "vn": "Dù sống ở thành phố lớn áp lực có phần lớn, nhưng mỗi khi nghĩ đến những lời này của bố mẹ, nếm được hương vị quen thuộc từ quê nhà, cô lại thấy mình có thể mỉm cười đối mặt với cuộc sống."
   }
  ],
  "doan": true
 }
];
var listenData = [
 {
  "audio": "妈妈的生日快到了，你打算送她什么？我想给她买一件毛衣，商场年底打八折，挺值的。那颜色呢？深颜色的不怎么适合她，买件浅颜色的吧。好，周末我们一起去看看。",
  "questions": [
   {
    "q": "他们打算给妈妈买什么？",
    "opts": [
     "鞋",
     "毛衣",
     "帽子"
    ],
    "ans": 1
   },
   {
    "q": "商场年底有什么活动？",
    "opts": [
     "买一送一",
     "打七折",
     "打八折"
    ],
    "ans": 2
   }
  ]
 },
 {
  "audio": "儿子，你今天怎么不高兴？考试考得不怎么好，心里很烦。烦也不能对妹妹发脾气啊，她都伤心得哭了。我知道错了，我现在就去向她道歉。这就对了。",
  "questions": [
   {
    "q": "儿子为什么心里烦？",
    "opts": [
     "考试考得不好",
     "妹妹不听话",
     "不想去上学"
    ],
    "ans": 0
   },
   {
    "q": "儿子打算做什么？",
    "opts": [
     "去找朋友玩",
     "去向妹妹道歉",
     "去复习功课"
    ],
    "ans": 1
   }
  ]
 },
 {
  "audio": "小李，听说你把父母接到北京来了？是啊，我母亲身体不太好，我不能不照顾他们。可你工作那么忙，怎么办？我和妻子商量好了，无论多忙，晚上都回家陪父母吃饭，周末再带他们去公园散步。",
  "questions": [
   {
    "q": "小李为什么把父母接到北京？",
    "opts": [
     "父母想来北京旅游",
     "父母要帮他照顾孩子",
     "母亲身体不太好"
    ],
    "ans": 2
   },
   {
    "q": "小李和妻子商量好了什么？",
    "opts": [
     "无论多忙，晚上都陪父母吃饭",
     "每个周末都回老家",
     "请别人帮忙照顾父母"
    ],
    "ans": 0
   }
  ]
 }
];
var matchData = [
 {
  "left": "发",
  "right": "脾气"
 },
 {
  "left": "打扫",
  "right": "卫生"
 },
 {
  "left": "向奶奶",
  "right": "道歉"
 },
 {
  "left": "全场",
  "right": "打七折"
 },
 {
  "left": "勇敢",
  "right": "面对"
 },
 {
  "left": "条件",
  "right": "允许"
 },
 {
  "left": "闻到",
  "right": "熟悉的味道"
 },
 {
  "left": "和父母",
  "right": "商量"
 },
 {
  "left": "无论……",
  "right": "都……"
 },
 {
  "left": "为了……",
  "right": "而……"
 }
];
var fillData = [
 {
  "pre": "你觉得老妈穿这件",
  "blank": "毛衣",
  "post": "怎么样？",
  "hint": "(áo len)",
  "ans": "毛衣",
  "exp": "一件毛衣."
 },
 {
  "pre": "样子不错，就是颜色好像",
  "blank": "不怎么",
  "post": "适合她。",
  "hint": "(không … lắm)",
  "ans": "不怎么",
  "exp": "不怎么 + V = không … lắm."
 },
 {
  "pre": "颜色不深，",
  "blank": "质量",
  "post": "还特别好。",
  "hint": "(chất lượng)",
  "ans": "质量",
  "exp": "质量好 = chất lượng tốt."
 },
 {
  "pre": "好的，老妈高兴比什么都",
  "blank": "强",
  "post": "。",
  "hint": "(hơn, tốt hơn)",
  "ans": "强",
  "exp": "……比什么都强."
 },
 {
  "pre": "没呢，",
  "blank": "估计",
  "post": "快了。",
  "hint": "(chắc là, đoán)",
  "ans": "估计",
  "exp": "估计 + mệnh đề."
 },
 {
  "pre": "他马上说放学回来就向奶奶",
  "blank": "道歉",
  "post": "。",
  "hint": "(xin lỗi)",
  "ans": "道歉",
  "exp": "向 + ai + 道歉."
 },
 {
  "pre": "条件",
  "blank": "允许",
  "post": "时，他会回上海看父母。",
  "hint": "(cho phép)",
  "ans": "允许",
  "exp": "条件允许."
 },
 {
  "pre": "父母",
  "blank": "待",
  "post": "在他们身边，他们也终于能放心地去工作了。",
  "hint": "(ở lại — dāi)",
  "ans": "待",
  "exp": "待在 + nơi."
 },
 {
  "pre": "遇到困难别害怕，要",
  "blank": "勇敢",
  "post": "面对。",
  "hint": "(dũng cảm)",
  "ans": "勇敢",
  "exp": "勇敢面对."
 },
 {
  "pre": "任何时候都可以和父母",
  "blank": "商量",
  "post": "。",
  "hint": "(bàn bạc)",
  "ans": "商量",
  "exp": "和 + ai + 商量."
 }
];
var sortData = [
 {
  "words": [
   "样子不错",
   "，",
   "就是",
   "颜色",
   "好像",
   "不怎么",
   "适合她",
   "。"
  ],
  "ans": "样子不错，就是颜色好像不怎么适合她。",
  "audio": "样子不错，就是颜色好像不怎么适合她。"
 },
 {
  "words": [
   "他",
   "也",
   "不是",
   "不知道",
   "自己",
   "错了",
   "。"
  ],
  "ans": "他也不是不知道自己错了。",
  "audio": "他也不是不知道自己错了。"
 },
 {
  "words": [
   "无论",
   "平时工作",
   "有多忙",
   "，",
   "他",
   "每个周末",
   "都会",
   "给父母打电话",
   "。"
  ],
  "ans": "无论平时工作有多忙，他每个周末都会给父母打电话。",
  "audio": "无论平时工作有多忙，他每个周末都会给父母打电话。"
 },
 {
  "words": [
   "父母",
   "总是",
   "担心她",
   "为了",
   "节约时间",
   "而",
   "不好好吃饭",
   "。"
  ],
  "ans": "父母总是担心她为了节约时间而不好好吃饭。",
  "audio": "父母总是担心她为了节约时间而不好好吃饭。"
 },
 {
  "words": [
   "我们店",
   "正好",
   "年底",
   "有活动",
   "，",
   "全场",
   "打七折",
   "。"
  ],
  "ans": "我们店正好年底有活动，全场打七折。",
  "audio": "我们店正好年底有活动，全场打七折。"
 },
 {
  "words": [
   "任何时候",
   "都",
   "可以",
   "和",
   "父母",
   "商量",
   "。"
  ],
  "ans": "任何时候都可以和父母商量。",
  "audio": "任何时候都可以和父母商量。"
 }
];
var mcData = [
 {
  "q": "样子不错，就是颜色好像＿＿适合她。",
  "opts": [
   "不怎么",
   "怎么不",
   "不什么",
   "没怎么样"
  ],
  "ans": 0,
  "exp": "不怎么 + V = không … lắm; 怎么不 = sao lại không."
 },
 {
  "q": "他也＿＿不知道自己错了，只是不好意思说。",
  "opts": [
   "不能",
   "不是",
   "不得",
   "没有"
  ],
  "ans": 1,
  "exp": "不是不 + V: thanh minh — thật ra là biết."
 },
 {
  "q": "由于天气不好，飞机不能起飞，爸爸＿＿改变计划。",
  "opts": [
   "不是不",
   "不怎么",
   "不得不",
   "不能"
  ],
  "ans": 2,
  "exp": "Hoàn cảnh ép buộc → 不得不 (đành phải)."
 },
 {
  "q": "＿＿你考多少分，你在我们眼里都是最优秀的。",
  "opts": [
   "因为",
   "虽然",
   "即使",
   "无论"
  ],
  "ans": 3,
  "exp": "Sau có từ nghi vấn 多少 → 无论……都……; 即使 cần một giả thiết cụ thể."
 },
 {
  "q": "父母总是担心她为了节约时间＿＿不好好吃饭。",
  "opts": [
   "而",
   "就",
   "才",
   "也"
  ],
  "ans": 0,
  "exp": "为了……而……: vì … mà …"
 },
 {
  "q": "下班回家，林静静＿＿父母寄来的鸡汤热了热。",
  "opts": [
   "被",
   "将",
   "让",
   "给"
  ],
  "ans": 1,
  "exp": "将 = 把 (văn viết): 将 + O + V + 了V."
 },
 {
  "q": "当＿＿到从小就熟悉的味道时，她鼻子还是酸了。",
  "opts": [
   "听",
   "看",
   "闻",
   "想"
  ],
  "ans": 2,
  "exp": "闻 = ngửi (bẫy Hán Việt “văn”)."
 },
 {
  "q": "全场打七折，就是说，原价100元的毛衣现在卖＿＿元。",
  "opts": [
   "30",
   "7",
   "17",
   "70"
  ],
  "ans": 3,
  "exp": "打七折 = trả 70% giá = giảm 30% (ôn 就是说 — Bài 11)."
 },
 {
  "q": "小明昨天因为一点儿小事就对奶奶发＿＿了。",
  "opts": [
   "脾气",
   "味道",
   "条件",
   "质量"
  ],
  "ans": 0,
  "exp": "发脾气 = nổi nóng."
 },
 {
  "q": "他们平时会＿＿找时间去看父母。",
  "opts": [
   "自",
   "将",
   "另外",
   "无论"
  ],
  "ans": 2,
  "exp": "另外 + V: làm riêng, thêm (tìm thời gian khác)."
 }
];
var speakingData = {
 "intro": "Nhấn nút loa nghe câu hỏi (câu hỏi phần Khởi động, câu hỏi đọc hiểu của 4 bài khoá, kể lại và đóng vai), rồi tự ghi âm câu trả lời — cố dùng từ mới và 4 điểm ngữ pháp của bài.",
 "questions": [
  {
   "q_zh": "过节时，你会给家人买什么礼物？",
   "q_vn": "Dịp lễ Tết, bạn sẽ mua quà gì cho người nhà?",
   "hint": "过节时，我会给……买……，因为……",
   "sample": "过节时，我会给妈妈买一件毛衣，给爸爸买一瓶好茶。年底商场常常打折，挺值的。我觉得，无论买什么礼物，家人高兴比什么都强。",
   "sample_vn": "Dịp lễ Tết, tôi sẽ mua cho mẹ một chiếc áo len, mua cho bố một hộp trà ngon. Cuối năm trung tâm thương mại hay giảm giá, rất đáng. Tôi thấy dù mua quà gì thì người nhà vui là hơn tất cả.",
   "note": "Câu hỏi phần Khởi động của sách (1)."
  },
  {
   "q_zh": "你的家人因为一些事情伤心时，你会怎么办？",
   "q_vn": "Khi người nhà buồn vì chuyện gì đó, bạn sẽ làm gì?",
   "hint": "……伤心时，我会先……，然后……",
   "sample": "家人伤心时，我会先冷静地听他们说，然后陪他们出去走走。要是我做错了事让他们伤心，我就马上向他们道歉。",
   "sample_vn": "Khi người nhà buồn, tôi sẽ bình tĩnh nghe họ nói trước, rồi đưa họ ra ngoài đi dạo. Nếu tôi làm sai khiến họ buồn thì tôi sẽ xin lỗi ngay.",
   "note": "Câu hỏi phần Khởi động của sách (2); ôn 要是……，就…… (Bài 1)."
  },
  {
   "q_zh": "售货员认为老人穿那件毛衣怎么样？杨同乐最后为什么愿意买那件毛衣了？",
   "q_vn": "Nhân viên bán hàng cho rằng người già mặc chiếc áo len đó thế nào? Vì sao cuối cùng Dương Đồng Lạc lại đồng ý mua?",
   "hint": "售货员认为……正合适……。因为王一飞说……，杨同乐觉得……比什么都强。",
   "sample": "售货员认为老年人穿这种颜色的衣服正合适，颜色不深，质量还特别好。因为王一飞说老妈也常穿这种颜色的衣服，她应该会喜欢的，杨同乐觉得老妈高兴比什么都强，所以愿意买了。",
   "sample_vn": "Nhân viên bán hàng cho rằng người già mặc màu này là vừa hợp, màu không đậm, chất lượng lại rất tốt. Vì Vương Nhất Phi nói mẹ cũng hay mặc màu này, chắc sẽ thích, Dương Đồng Lạc thấy mẹ vui là hơn tất cả nên đồng ý mua.",
   "note": "Câu hỏi đọc hiểu bài khoá 1."
  },
  {
   "q_zh": "请根据提示复述课文一。",
   "q_vn": "Dựa vào gợi ý, kể lại bài khoá 1.",
   "hint": "杨同乐和王一飞去商场……。王一飞选了一件毛衣后问杨同乐……，杨同乐觉得样子还可以，但是颜色……。售货员说……。杨同乐说，老妈高兴……。售货员告诉他们，现在店里正好……",
   "sample": "杨同乐和王一飞去商场给父母买衣服。王一飞选了一件毛衣后问杨同乐觉得怎么样，杨同乐觉得样子还可以，但是颜色好像不怎么适合老妈。售货员说老年人穿这种颜色的衣服正合适，颜色不深，质量也好。王一飞也觉得不错，认为老妈也常穿这种颜色的衣服，她会喜欢的。杨同乐说，老妈高兴比什么都强。售货员告诉他们，现在店里正好年底有活动，全场打七折，挺值的。",
   "sample_vn": "Dương Đồng Lạc và Vương Nhất Phi đến trung tâm thương mại mua quần áo cho bố mẹ… Nhân viên bán hàng nói cửa hàng vừa hay cuối năm có chương trình, toàn bộ cửa hàng giảm 30%, rất đáng.",
   "note": "Bài tập 复述 của sách (trang 15)."
  },
  {
   "q_zh": "小明因为什么对奶奶发了脾气？发脾气后，王一雪和小明都做了什么？",
   "q_vn": "Tiểu Minh vì sao nổi nóng với bà? Sau đó Vương Nhất Tuyết và Tiểu Minh đã làm gì?",
   "hint": "小明最近……，心里……，因为……这点儿小事，就……。王一雪……以后，小明马上说……",
   "sample": "小明最近要考试，心里有点儿烦，因为脱、挂衣服这点儿小事，就对奶奶发了脾气。王一雪批评了他，他也不是不知道自己错了，马上说放学回来就向奶奶道歉。",
   "sample_vn": "Tiểu Minh sắp thi, trong lòng hơi bực, chỉ vì chuyện nhỏ cởi áo, treo áo mà nổi nóng với bà. Vương Nhất Tuyết phê bình cậu, cậu cũng biết mình sai, lập tức nói tan học về sẽ xin lỗi bà.",
   "note": "Câu hỏi đọc hiểu bài khoá 2; dùng 不是不…… (điểm 2)."
  },
  {
   "q_zh": "杨同乐是怎么关心父母的？刘明和王一雪为什么要把父母接到自己家里？",
   "q_vn": "Dương Đồng Lạc quan tâm bố mẹ như thế nào? Vì sao Lưu Minh và Vương Nhất Tuyết đón bố mẹ về nhà mình?",
   "hint": "无论……，他每个周末都……；条件允许时……。因为刘明的母亲……，他们很担心……",
   "sample": "无论平时工作有多忙，杨同乐每个周末都会给父母打电话，条件允许时，他还会回上海看父母。因为这两年刘明的母亲身体不太好，他们很担心，所以把父母接到自己家里照顾。",
   "sample_vn": "Dù ngày thường bận đến đâu, cuối tuần nào Dương Đồng Lạc cũng gọi điện cho bố mẹ, khi điều kiện cho phép còn về Thượng Hải thăm bố mẹ. Vì hai năm nay mẹ Lưu Minh sức khỏe không tốt, họ rất lo nên đón bố mẹ về nhà chăm sóc.",
   "note": "Câu hỏi đọc hiểu bài khoá 3; dùng 无论……都…… (điểm 3)."
  },
  {
   "q_zh": "请根据提示复述课文三。",
   "q_vn": "Dựa vào gợi ý, kể lại bài khoá 3.",
   "hint": "杨同乐的老家……，他自毕业后……。虽然……，但……。无论……，他每个周末都……。刘明和王一雪结婚后……，这两年……，就把父母……",
   "sample": "杨同乐的老家在上海，他自毕业后一直在北京工作。虽然没和父母生活在一起，但父子、母子关系特别好。杨同乐很关心父母，无论平时工作有多忙，他每个周末都会给父母打电话。条件允许时，他会回上海看父母。刘明和王一雪结婚后，一直没有和父母生活在一起，他们平时会另外找时间去看父母，帮父母做做饭，打扫打扫卫生。这两年，刘明的母亲身体不太好，他们很担心，就把父母接到了自己家里照顾。父母待在他们身边，他们也终于能放心地去工作了。",
   "sample_vn": "Quê Dương Đồng Lạc ở Thượng Hải, từ khi tốt nghiệp anh luôn làm việc ở Bắc Kinh… Bố mẹ ở bên cạnh, cuối cùng vợ chồng Lưu Minh cũng yên tâm đi làm.",
   "note": "Bài tập 复述 của sách (trang 19)."
  },
  {
   "q_zh": "父亲为什么选择最快的快递？是什么让林静静能“笑着面对生活”？",
   "q_vn": "Vì sao bố chọn dịch vụ chuyển phát nhanh nhất? Điều gì khiến Lâm Tĩnh Tĩnh có thể “mỉm cười đối mặt với cuộc sống”?",
   "hint": "为了让……，父亲……。每当想到……，尝到……，她就……",
   "sample": "为了让食物新鲜，父亲选择了城里最快的快递，上午寄出，下午就能收到。每当想到父母说的话，尝到来自老家熟悉的味道，林静静就觉得又能笑着面对生活了。",
   "sample_vn": "Để đồ ăn tươi ngon, bố chọn chuyển phát nhanh nhất thành phố, sáng gửi chiều nhận. Mỗi khi nghĩ đến lời bố mẹ dặn, nếm hương vị quen thuộc của quê nhà, Lâm Tĩnh Tĩnh lại thấy mình có thể mỉm cười đối mặt với cuộc sống.",
   "note": "Câu hỏi đọc hiểu bài khoá 4; dùng 为了…… (điểm 4)."
  },
  {
   "q_zh": "你觉得幸福的家庭应该是什么样子的？",
   "q_vn": "Bạn thấy một gia đình hạnh phúc nên như thế nào?",
   "hint": "我觉得幸福的家庭……。无论……，家人都……。……比什么都强。",
   "sample": "我觉得幸福的家庭不一定很有钱，但家人要互相关心。无论遇到什么困难，大家都可以一起商量。家里有人伤心了，其他人会陪着他。一家人健康、开心，比什么都强。",
   "sample_vn": "Tôi thấy gia đình hạnh phúc không nhất thiết phải giàu, nhưng người nhà phải quan tâm nhau. Dù gặp khó khăn gì, mọi người đều có thể cùng bàn bạc. Ai trong nhà buồn thì những người khác ở bên. Cả nhà khỏe mạnh, vui vẻ là hơn tất cả.",
   "note": "Mục tiêu bài học: nói về gia đình hạnh phúc (学习小结)."
  },
  {
   "q_zh": "角色扮演：周末晚上，杨同乐给父母打电话聊天儿。请你扮演杨同乐，和父母聊一聊。",
   "q_vn": "Đóng vai: tối cuối tuần, Dương Đồng Lạc gọi điện trò chuyện với bố mẹ. Em đóng vai Dương Đồng Lạc nói chuyện với bố mẹ (nhóm 3 người: một người là Dương Đồng Lạc, hai người là bố mẹ).",
   "hint": "爸、妈，你们最近身体怎么样？……我这周工作……，不过……。无论多忙，我都……。年底我……。你们有什么事，一定……",
   "sample": "杨同乐：爸、妈，你们最近身体怎么样？\n妈妈：挺好的，就是天气冷了，你爸的腿有点儿疼，不过不怎么严重。\n杨同乐：那您得带爸去医院看看，不能不重视啊。我给你们买了两件毛衣，年底商场打折，质量特别好，过两天就能收到。\n爸爸：又花钱了！你工作那么忙，别为了我们而太累了。\n杨同乐：放心吧，无论多忙，我都会照顾好自己。条件允许的话，年底我就回上海看你们。你们有什么事，任何时候都可以给我打电话，咱们一起商量。\n妈妈：好，你也要好好吃饭，注意身体！",
   "sample_vn": "Dương Đồng Lạc: Bố, mẹ, dạo này bố mẹ khỏe không ạ?\nMẹ: Khỏe, chỉ là trời lạnh rồi, chân bố con hơi đau, nhưng không nghiêm trọng lắm.\nDương Đồng Lạc: Vậy mẹ phải đưa bố đi viện khám, không thể không để ý đâu ạ. Con mua cho bố mẹ hai chiếc áo len, cuối năm trung tâm giảm giá, chất lượng rất tốt, vài hôm nữa là nhận được.\nBố: Lại tốn tiền rồi! Con làm việc bận như vậy, đừng vì bố mẹ mà mệt quá.\nDương Đồng Lạc: Bố mẹ yên tâm, dù bận đến đâu con cũng sẽ tự chăm sóc tốt cho mình. Nếu điều kiện cho phép, cuối năm con sẽ về Thượng Hải thăm bố mẹ. Bố mẹ có việc gì, bất cứ lúc nào cũng có thể gọi cho con, mình cùng bàn.\nMẹ: Ừ, con cũng phải ăn uống đầy đủ, giữ gìn sức khỏe nhé!",
   "note": "Hoạt động 角色扮演 (đóng vai) của sách, trang 23 — dùng đủ 4 điểm ngữ pháp: 不怎么, 不能不, 无论……都, 为了……而."
  }
 ]
};
var translateData = [
 {
  "vi": "Kiểu dáng không tệ, chỉ là màu sắc hình như không hợp với mẹ lắm.",
  "zh": "样子不错，就是颜色好像不怎么适合她。",
  "py": "Yàngzi búcuò, jiùshì yánsè hǎoxiàng bù zěnme shìhé tā."
 },
 {
  "vi": "Nó cũng không phải là không biết mình sai.",
  "zh": "他也不是不知道自己错了。",
  "py": "Tā yě bú shì bù zhīdao zìjǐ cuò le."
 },
 {
  "vi": "Dù ngày thường công việc bận đến đâu, cuối tuần nào anh ấy cũng gọi điện cho bố mẹ.",
  "zh": "无论平时工作有多忙，他每个周末都会给父母打电话。",
  "py": "Wúlùn píngshí gōngzuò yǒu duō máng, tā měi gè zhōumò dōu huì gěi fùmǔ dǎdiànhuà."
 },
 {
  "vi": "Bố mẹ luôn lo cô ấy vì tiết kiệm thời gian mà không ăn uống tử tế.",
  "zh": "父母总是担心她为了节约时间而不好好吃饭。",
  "py": "Fùmǔ zǒngshì dānxīn tā wèile jiéyuē shíjiān ér bù hǎohāo chīfàn."
 },
 {
  "vi": "Cửa hàng chúng tôi cuối năm có chương trình, toàn bộ cửa hàng giảm 30%.",
  "zh": "我们店年底有活动，全场打七折。",
  "py": "Wǒmen diàn niándǐ yǒu huódòng, quán chǎng dǎ qī zhé."
 },
 {
  "vi": "Gặp khó khăn đừng sợ, phải dũng cảm đối mặt.",
  "zh": "遇到困难别害怕，要勇敢面对。",
  "py": "Yùdào kùnnan bié hàipà, yào yǒnggǎn miànduì."
 }
];
var translateDataRev = [
 {
  "vi": "Mẹ vui là hơn tất cả.",
  "zh": "老妈高兴比什么都强。",
  "py": "Lǎomā gāoxìng bǐ shénme dōu qiáng."
 },
 {
  "vi": "Hôm qua vì chuyện nhỏ mà nó nổi nóng với bà.",
  "zh": "昨天因为这点儿小事，他就对奶奶发脾气了。",
  "py": "Zuótiān yīnwèi zhè diǎnr xiǎoshì, tā jiù duì nǎinai fā píqi le."
 },
 {
  "vi": "Khi điều kiện cho phép, anh ấy sẽ về Thượng Hải thăm bố mẹ.",
  "zh": "条件允许时，他会回上海看父母。",
  "py": "Tiáojiàn yǔnxǔ shí, tā huì huí Shànghǎi kàn fùmǔ."
 },
 {
  "vi": "Bố mẹ ở bên cạnh, cuối cùng họ cũng có thể yên tâm đi làm.",
  "zh": "父母待在他们身边，他们也终于能放心地去工作了。",
  "py": "Fùmǔ dāi zài tāmen shēnbiān, tāmen yě zhōngyú néng fàng xīndì qù gōngzuò le."
 },
 {
  "vi": "Bất cứ lúc nào cũng có thể bàn bạc với bố mẹ.",
  "zh": "任何时候都可以和父母商量。",
  "py": "Rènhé shíhou dōu kěyǐ hé fùmǔ shāngliang."
 }
];
var sgkData = [
 {
  "kieu": "kho",
  "de": "选词填空（一）· 综合练习",
  "vn": "Chọn từ thích hợp điền vào chỗ trống (Bài tập tổng hợp, sách trang 22). Sách 4下 chưa có đáp án — đây là đáp án tham khảo của cô.",
  "dapSgk": false,
  "tu": [
   "自",
   "无论",
   "允许",
   "冷静",
   "值",
   "鲜"
  ],
  "cau": [
   {
    "s": "这位护士工作认真，最大的优点是遇到任何事情都很＿＿。",
    "dap": [
     "冷静"
    ]
   },
   {
    "s": "这家饭馆的汤味道特别＿＿，每次来我都要点。",
    "dap": [
     "鲜"
    ]
   },
   {
    "s": "＿＿你多大，在父母眼里，你一直都是那个需要被照顾的孩子。",
    "dap": [
     "无论"
    ]
   },
   {
    "s": "看到母亲那么喜欢这件毛衣，我觉得花多少钱都＿＿了。",
    "dap": [
     "值"
    ]
   },
   {
    "s": "小徐＿＿2006年就离开了老家，在上海读大学，毕业后又在那儿工作了。",
    "dap": [
     "自"
    ]
   },
   {
    "s": "我们换条路走吧，前面那个路口不＿＿右转。",
    "dap": [
     "允许"
    ]
   }
  ]
 },
 {
  "kieu": "kho",
  "de": "选词填空（二）· 综合练习",
  "vn": "Chọn từ thích hợp điền vào chỗ trống (hội thoại, sách trang 22). Đáp án tham khảo.",
  "dapSgk": false,
  "tu": [
   "估计",
   "另外",
   "待",
   "烦",
   "质量",
   "脾气"
  ],
  "cau": [
   {
    "s": "A：我想买这条裤子送给妈妈。　B：颜色很适合她，＿＿也不错，她应该会喜欢的。",
    "dap": [
     "质量"
    ]
   },
   {
    "s": "A：你好像不太开心，没什么事吧？　B：昨天我的银行卡丢了，我现在心里很＿＿。",
    "dap": [
     "烦"
    ]
   },
   {
    "s": "A：排队的人这么多，＿＿得等很长时间。　B：他家的包子好吃又便宜，买的人当然多，咱们等等吧。",
    "dap": [
     "估计"
    ]
   },
   {
    "s": "A：对不起，我刚刚不应该对你发＿＿。　B：没关系，我知道你这几天心情不好。",
    "dap": [
     "脾气"
    ]
   },
   {
    "s": "A：请加一碗米饭，＿＿再加一双筷子。　B：好的，马上就来。",
    "dap": [
     "另外"
    ]
   },
   {
    "s": "A：周末时我喜欢去公园散步，不喜欢在家＿＿着。　B：周末我也喜欢出去活动活动。",
    "dap": [
     "待"
    ]
   }
  ]
 },
 {
  "kieu": "kho",
  "de": "选择合适的内容完成短文",
  "vn": "Chọn nội dung thích hợp (A–D) hoàn thành đoạn văn (sách trang 22). Đáp án tham khảo: B – D – A – C.",
  "dapSgk": false,
  "tu": [
   "忘记了今天是自己的生日",
   "没想到送餐地址是自己家",
   "外卖员的眼睛红了",
   "要注意身体"
  ],
  "cau": [
   {
    "s": "中午，一个外卖员到奶茶店取（qǔ, lấy）餐，拿到后一看，＿＿，上面还写着：“爸爸，生日快乐！天气很热，＿＿。”原来（yuánlái, hoá ra），外卖员忙着工作，＿＿，但他的女儿没有忘。看着这份生日礼物，＿＿。他喝了奶茶，又继续努力工作。",
    "dap": [
     "没想到送餐地址是自己家",
     "要注意身体",
     "忘记了今天是自己的生日",
     "外卖员的眼睛红了"
    ]
   }
  ]
 },
 {
  "kieu": "gx",
  "de": "看图，用词语造句",
  "vn": "Nhìn tranh, đặt câu với từ cho sẵn (sách trang 23 — câu dưới đây là câu mẫu tham khảo; câu của em đúng ngữ pháp, hợp tranh là đạt).",
  "dapSgk": false,
  "cau": [
   {
    "anh": "/images/hsk4v3/bai-12/bt-1.webp",
    "s": "",
    "tu": "老家",
    "dap": "我的老家在南方的一个小镇，那里有很多小河。",
    "giai": "……的老家在 + nơi; 那里有…… câu tồn hiện. Tranh: thị trấn sông nước Giang Nam."
   },
   {
    "anh": "/images/hsk4v3/bai-12/bt-2.webp",
    "s": "",
    "tu": "烦",
    "dap": "她最近工作压力很大，心里特别烦。",
    "giai": "心里 + (特别 / 有点儿) + 烦: tính từ chỉ tâm trạng bực bội."
   },
   {
    "anh": "/images/hsk4v3/bai-12/bt-3.webp",
    "s": "",
    "tu": "商量",
    "dap": "他们正在商量工作上的事情。",
    "giai": "正在 + 商量 + việc; hoặc 跟 / 和 + ai + 商量."
   }
  ]
 }
];
var writingData = {
 "kieu": "sgk",
 "soChu": 140,
 "tieuDe": "写作 — viết theo đề của sách (ít nhất 140 chữ)",
 "nhanDe": "写作",
 "huongDan": {
  "tieuDe": "Viết đoạn văn nêu ý kiến (写作)",
  "gioiThieu": "Đề 写作 của sách HSK 4 (3.0) yêu cầu viết một đoạn văn ngắn (ít nhất 140 chữ) nêu lựa chọn của mình và giải thích lý do — giống phần 书写 của đề thi HSK 4 mới. Đây là dạng văn NGHỊ LUẬN NGẮN: nêu quan điểm → lý do → ví dụ → kết luận.",
  "buoc": [
   "Đọc kỹ đề: phải CHỌN một bên (大家庭 hay 小家庭) và nói LÝ DO — không viết lửng lơ cả hai.",
   "Câu mở: nêu rõ lựa chọn — 我更喜欢大家庭 / 小家庭.",
   "Thân bài: 2–3 lý do, mỗi lý do kèm một ví dụ trong gia đình em (ông bà chăm sóc, cùng bàn bạc, tự do…).",
   "Dùng từ mới và 4 điểm ngữ pháp của bài (khung “Từ, cấu trúc nên dùng”): 无论……都……, 不是不……, 为了……而……, 不怎么…; có thể nói thêm mặt chưa tốt của lựa chọn kia cho khách quan.",
   "Câu kết: khẳng định lại quan điểm (……比什么都强 / 对我来说……); tự soát số chữ (≥ 140) và lỗi chữ Hán."
  ]
 },
 "de": "有的人生活在大家庭（爷爷、奶奶、父母、孩子等生活在一起）里，有的人生活在小家庭（只有父母和孩子）里，你喜欢大家庭，还是喜欢小家庭？请写一篇短文，说说你的理由，不少于140字。",
 "prompt": "Có người sống trong gia đình lớn (ông, bà, bố mẹ, con cái… sống cùng nhau), có người sống trong gia đình nhỏ (chỉ có bố mẹ và con). Em thích gia đình lớn hay gia đình nhỏ? Hãy viết một đoạn văn ngắn nói lý do của em, không ít hơn 140 chữ.",
 "dan": [
  {
   "hoi": "你喜欢大家庭还是小家庭？",
   "goiY": "我更喜欢……，因为……"
  },
  {
   "hoi": "你的家里有哪些人？你们住在一起吗？",
   "goiY": "我的老家在……，从小我就和……生活在一起 / 我家只有……"
  },
  {
   "hoi": "第一个理由是什么？有什么例子？",
   "goiY": "无论遇到什么困难，……都可以一起商量 / 父母工作忙的时候，爷爷奶奶……"
  },
  {
   "hoi": "你喜欢的家庭有没有不方便的地方？",
   "goiY": "我不是不知道……，不过……"
  },
  {
   "hoi": "最后你想说什么？",
   "goiY": "对我来说，一家人……比什么都强 / 我会为了……而……"
  }
 ],
 "tuNen": [
  "父母",
  "老家",
  "商量",
  "照顾",
  "关心",
  "伤心",
  "脾气",
  "道歉",
  "待",
  "味道",
  "暖",
  "条件",
  "允许",
  "另外"
 ],
 "cauTruc": [
  {
   "ten": "我更喜欢……，因为……",
   "nhan": "更喜欢",
   "vd": "我更喜欢大家庭，因为一家人待在一起很热闹、很温暖。",
   "khi": "Câu MỞ: nêu rõ lựa chọn."
  },
  {
   "ten": "无论……，都……",
   "nhan": "无论",
   "vd": "无论遇到什么困难，家里总有人可以和我商量。",
   "khi": "Lý do 1: người nhà luôn ở bên."
  },
  {
   "ten": "不是不……，(而)是……",
   "nhan": "不是不",
   "vd": "我不是不知道小家庭更自由，而是更喜欢热热闹闹的生活。",
   "khi": "Nhắc đến lựa chọn kia cho khách quan."
  },
  {
   "ten": "为了……而……",
   "nhan": "为了",
   "vd": "父母为了让我们生活得更好而努力工作。",
   "khi": "Kể về sự hy sinh của người nhà."
  },
  {
   "ten": "……比什么都强",
   "nhan": "比什么都强",
   "vd": "一家人健康、开心，比什么都强。",
   "khi": "Câu KẾT: khẳng định quan điểm."
  }
 ],
 "checklist": [
  "Đủ ít nhất 140 chữ Hán chưa?",
  "Đã nêu rõ em thích 大家庭 hay 小家庭 ngay câu đầu chưa?",
  "Có ít nhất 2 lý do, mỗi lý do có ví dụ cụ thể chưa?",
  "Đã dùng ít nhất 3 trong 4 điểm ngữ pháp của bài (不怎么、phủ định kép、无论……都……、为了……而……) chưa?",
  "Đã dùng ít nhất 6 từ mới của bài và có câu kết khẳng định lại quan điểm chưa?"
 ],
 "model": {
  "zh": "我更喜欢大家庭。我的老家在一个小城，从小我就和爷爷、奶奶、父母生活在一起。父母为了让我们生活得更好而每天努力工作，平时是爷爷奶奶照顾我，给我做最鲜的鱼汤。无论我遇到什么困难，家里总有人可以和我商量。有一次我考试考得不怎么好，心里很烦，还对奶奶发了脾气，可是奶奶一点儿也没生气，还陪我聊天儿。后来我向她道了歉，心里暖暖的。当然，我不是不知道大家庭也有不方便的地方，比如大家的生活习惯不一样，有时候不得不互相让一让。可是我觉得，一家人待在一起，互相关心，互相照顾，比什么都强。现在我一个人在外地学习，每当想起老家熟悉的味道，我就特别想念他们。对我来说，热热闹闹的大家庭才是最幸福的家庭。",
  "py": "Wǒ gèng xǐhuan dà jiātíng. Wǒ de lǎojiā zài yí gè xiǎochéng, cóng xiǎo wǒ jiù hé yéye, nǎinai, fùmǔ shēnghuó zài yìqǐ. Fùmǔ wèile ràng wǒmen shēnghuó de gèng hǎo ér měitiān nǔlì gōngzuò, píngshí shì yéye nǎinai zhàogu wǒ, gěi wǒ zuò zuì xiān de yú tāng. Wúlùn wǒ yùdào shénme kùnnan, jiāli zǒng yǒurén kěyǐ hé wǒ shāngliang. Yǒu yí cì wǒ kǎoshì kǎo de bù zěnme hǎo, xīnli hěn fán, hái duì nǎinai fā le píqi, kěshì nǎinai yìdiǎnr yě méi shēngqì, hái péi wǒ liáotiānr. Hòulái wǒ xiàng tā dào le qiàn, xīnli nuǎnnuan de. Dāngrán, wǒ bú shì bù zhīdao dà jiātíng yě yǒu bù fāngbiàn de dìfang, bǐrú dàjiā de shēnghuó xíguàn bù yíyàng, yǒushíhou bùdébù hùxiāng ràng yi ràng. Kěshì wǒ juéde, yì jiārén dāi zài yìqǐ, hùxiāng guānxīn, hùxiāng zhàogu, bǐ shénme dōu qiáng. Xiànzài wǒ yí gè rén zài wàidì xuéxí, měi dāng xiǎngqǐ lǎojiā shúxi de wèidào, wǒ jiù tèbié xiǎngniàn tāmen. Duì wǒ láishuō, rèrè-nàonào de dà jiātíng cái shì zuì xìngfú de jiātíng."
 }
};
