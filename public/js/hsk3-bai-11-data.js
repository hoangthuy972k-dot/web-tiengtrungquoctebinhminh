// ══════════════════════════════════════════
// DATA — HSK3 Bài 11: 别忘了把空调关了 (Đừng quên tắt máy điều hòa không khí nhé)
// Nguồn: HSK标准教程3 (Giáo trình chuẩn HSK 3 — nhantriviet.com)
// ══════════════════════════════════════════
var vocabData = [
  {
    "n": 1,
    "zh": "图书馆",
    "py": "túshūguǎn",
    "pos": "Danh từ",
    "vn": "thư viện",
    "hv": "đồ thư quán",
    "em": "📚",
    "lesson": 1,
    "explain": [
      "Nơi lưu trữ và cho mượn sách, tài liệu để đọc, học tập."
    ],
    "usage": "Danh từ; đi cùng động từ 去: 去图书馆.",
    "collo": [
      "去图书馆",
      "在图书馆",
      "图书馆借书"
    ],
    "ex_zh": "我去图书馆借本书。",
    "ex_py": "Wǒ qù túshūguǎn jiè běn shū.",
    "ex_vn": "Mình đi thư viện mượn một quyển sách.",
    "exList": [
      {
        "zh": "我去图书馆借本书。",
        "py": "Wǒ qù túshūguǎn jiè běn shū.",
        "vn": "Mình đi thư viện mượn một quyển sách."
      },
      {
        "zh": "教室里人太多了，我们去图书馆学习吧，那儿比较安静。",
        "py": "Jiàoshì lǐ rén tài duō le, wǒmen qù túshūguǎn xuéxí ba, nàr bǐjiào ānjìng.",
        "vn": "Trong lớp học đông người quá, chúng ta đi thư viện học đi, ở đó khá yên tĩnh."
      },
      {
        "zh": "你昨天让我去图书馆把书还了，你忘了？",
        "py": "Nǐ zuótiān ràng wǒ qù túshūguǎn bǎ shū huán le, nǐ wàng le?",
        "vn": "Hôm qua bạn bảo mình đi thư viện trả sách rồi, bạn quên à?"
      }
    ],
    "hanzi": [
      {
        "c": "馆",
        "p": "guǎn",
        "type": "左右结构 · Trái-phải",
        "st": 11,
        "ord": "饣 trái → 官 phải",
        "rad": "饣 (thực – ăn uống)",
        "mean": "quán, tòa nhà công cộng",
        "tip": "饣(ăn uống, ý chỉ nơi tiếp đãi) + 官(quan, cơ quan) → tòa nhà công cộng để phục vụ/lưu trữ = QUÁN, THƯ VIỆN.",
        "cf": "官 (guān – \"quan chức\", không có bộ 饣\")",
        "w": "图书馆 / 博物馆 / 饭馆"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Nếu bạn đi thư viện thì giúp mình trả quyển sách này nhé.",
        "answer": "如果你去图书馆，就帮我把这本书还了吧。",
        "answerPy": "Rúguǒ nǐ qù túshūguǎn, jiù bāng wǒ bǎ zhè běn shū huán le ba.",
        "note": "把字句 (把+B+động từ) diễn tả sự xử lý sự vật xác định (điểm ngữ pháp bài này).",
        "pair": "如果……就……"
      },
      {
        "promptLang": "vi",
        "prompt": "Chỉ cần bạn đi thư viện thì có thể mượn quyển từ điển đó.",
        "answer": "只要你去图书馆，就可以借那本词典。",
        "answerPy": "Zhǐyào nǐ qù túshūguǎn, jiù kěyǐ jiè nà běn cídiǎn.",
        "note": "只要……就…… diễn tả điều kiện đủ (ôn lại 词典 sẽ học ngay bên dưới).",
        "pair": "只要……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "去图书馆",
        "py": "qù túshūguǎn",
        "vn": "đi thư viện"
      },
      {
        "zh": "在图书馆看书",
        "py": "zài túshūguǎn kàn shū",
        "vn": "đọc sách ở thư viện"
      },
      {
        "zh": "图书馆借书",
        "py": "túshūguǎn jiè shū",
        "vn": "mượn sách ở thư viện"
      },
      {
        "zh": "学校图书馆",
        "py": "xuéxiào túshūguǎn",
        "vn": "thư viện trường"
      },
      {
        "zh": "图书馆很安静",
        "py": "túshūguǎn hěn ānjìng",
        "vn": "thư viện rất yên tĩnh"
      }
    ],
    "patterns": [
      {
        "s": "在 + 图书馆 + V",
        "m": "Làm gì ở thư viện"
      },
      {
        "s": "图书 + 馆",
        "m": "Nhà (馆) chứa sách (图书)"
      }
    ]
  },
  {
    "n": 2,
    "zh": "借",
    "py": "jiè",
    "pos": "Động từ",
    "vn": "mượn, vay",
    "hv": "tá",
    "em": "📖",
    "lesson": 1,
    "explain": [
      "Sử dụng tạm thời vật của người khác, hoặc cho người khác mượn."
    ],
    "usage": "Động từ, mang tân ngữ trực tiếp: 借 + [vật] (借书, 借钱).",
    "collo": [
      "借书",
      "借钱",
      "借用"
    ],
    "ex_zh": "我去图书馆借本书。",
    "ex_py": "Wǒ qù túshūguǎn jiè běn shū.",
    "ex_vn": "Mình đi thư viện mượn một quyển sách.",
    "exList": [
      {
        "zh": "我去图书馆借本书。",
        "py": "Wǒ qù túshūguǎn jiè běn shū.",
        "vn": "Mình đi thư viện mượn một quyển sách."
      },
      {
        "zh": "方便的时候再借我用用。",
        "py": "Fāngbiàn de shíhou zài jiè wǒ yòngyong.",
        "vn": "Lúc nào tiện thì cho mình mượn dùng tiếp nhé."
      },
      {
        "zh": "把词典还我吧，我要用一下。",
        "py": "Bǎ cídiǎn huán wǒ ba, wǒ yào yòng yíxià.",
        "vn": "Trả từ điển cho mình đi, mình cần dùng chút."
      }
    ],
    "hanzi": [
      {
        "c": "借",
        "p": "jiè",
        "type": "左右结构 · Trái-phải",
        "st": 10,
        "ord": "亻 trái → 昔 phải",
        "rad": "亻 (nhân – người)",
        "mean": "mượn, vay",
        "tip": "亻(người) + 昔(ngày xưa, ý chỉ đã lâu) → người CHO/NHẬN vật trong một khoảng thời gian = MƯỢN, VAY.",
        "cf": "惜 (xī – \"tiếc nuối\", có bộ 忄\")",
        "w": "借书 / 借钱 / 借用"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Khi đi học đừng quên mang từ điển, nếu không có thì mượn ở thư viện.",
        "answer": "上课的时候别忘了带词典，如果没有，就去图书馆借。",
        "answerPy": "Shàngkè de shíhou bié wàngle dài cídiǎn, rúguǒ méiyǒu, jiù qù túshūguǎn jiè.",
        "note": "跟 + ai + 借 — mượn của ai; 借给 + ai — cho ai mượn.",
        "pair": "如果……就……"
      },
      {
        "promptLang": "vi",
        "prompt": "Nếu bạn cần tiền thì có thể mượn tôi một ít.",
        "answer": "如果你需要钱，就可以借我一些。",
        "answerPy": "Rúguǒ nǐ xūyào qián, jiù kěyǐ jiè wǒ yìxiē.",
        "note": "如果……就…… diễn tả giả thiết — kết quả.",
        "pair": "如果……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "借书",
        "py": "jiè shū",
        "vn": "mượn sách"
      },
      {
        "zh": "借钱",
        "py": "jiè qián",
        "vn": "vay tiền"
      },
      {
        "zh": "借给他",
        "py": "jiè gěi tā",
        "vn": "cho anh ấy mượn"
      },
      {
        "zh": "跟他借",
        "py": "gēn tā jiè",
        "vn": "mượn của anh ấy"
      },
      {
        "zh": "借一下",
        "py": "jiè yíxià",
        "vn": "mượn một chút"
      }
    ],
    "patterns": [
      {
        "s": "跟 + ai + 借 + N",
        "m": "Mượn của ai cái gì"
      },
      {
        "s": "借给 + ai + N",
        "m": "Cho ai mượn — 借 vừa là mượn vừa là cho mượn"
      }
    ]
  },
  {
    "n": 3,
    "zh": "词典",
    "py": "cídiǎn",
    "pos": "Danh từ",
    "vn": "từ điển",
    "hv": "từ điển",
    "em": "📕",
    "lesson": 1,
    "explain": [
      "Sách tra cứu nghĩa, cách dùng của từ ngữ."
    ],
    "usage": "Danh từ; lượng từ đi kèm là 本: 一本词典.",
    "collo": [
      "一本词典",
      "借词典",
      "还词典"
    ],
    "ex_zh": "帮我把这本词典还了吧。",
    "ex_py": "Bāng wǒ bǎ zhè běn cídiǎn huánle ba.",
    "ex_vn": "Giúp mình trả quyển từ điển này nhé.",
    "exList": [
      {
        "zh": "帮我把这本词典还了吧。",
        "py": "Bāng wǒ bǎ zhè běn cídiǎn huánle ba.",
        "vn": "Giúp mình trả quyển từ điển này nhé."
      },
      {
        "zh": "把词典还我吧，我要用一下。",
        "py": "Bǎ cídiǎn huán wǒ ba, wǒ yào yòng yíxià.",
        "vn": "Trả từ điển cho mình đi, mình cần dùng chút."
      },
      {
        "zh": "这本词典是我朋友的，不是我的。",
        "py": "Zhè běn cídiǎn shì wǒ péngyou de, bú shì wǒ de.",
        "vn": "Quyển từ điển này là của bạn tôi, không phải của tôi."
      }
    ],
    "hanzi": [
      {
        "c": "典",
        "p": "diǎn",
        "type": "上下结构 · Trên-dưới",
        "st": 8,
        "ord": "曲(biến thể) trên → 八 dưới",
        "rad": "八 (bát)",
        "mean": "kinh điển, sách chuẩn mực",
        "tip": "Chữ cổ mô phỏng hai tay nâng cuốn sách quý trên giá đỡ → SÁCH CHUẨN MỰC, mở rộng thành TỪ ĐIỂN.",
        "cf": "点 (diǎn – \"điểm\", không liên quan nghĩa\")",
        "w": "词典 / 字典 / 经典"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Quyển từ điển này không phải tôi mua, mà là mượn của thư viện.",
        "answer": "这本词典不是我买的，是图书馆借的。",
        "answerPy": "Zhè běn cídiǎn bú shì wǒ mǎi de, shì túshūguǎn jiè de.",
        "note": "一本词典 — lượng từ 本 cho sách.",
        "pair": "不是……是……"
      },
      {
        "promptLang": "vi",
        "prompt": "Vì tôi cần dùng từ điển nên tôi mượn thư viện một quyển.",
        "answer": "因为我需要用词典，所以我在图书馆借了一本。",
        "answerPy": "Yīnwèi wǒ xūyào yòng cídiǎn, suǒyǐ wǒ zài túshūguǎn jièle yì běn.",
        "note": "因为……所以…… nêu nguyên nhân — kết quả (ôn lại 图书馆 vừa học trong bài này).",
        "pair": "因为……所以……"
      }
    ],
    "colloFull": [
      {
        "zh": "一本词典",
        "py": "yì běn cídiǎn",
        "vn": "một quyển từ điển"
      },
      {
        "zh": "借词典",
        "py": "jiè cídiǎn",
        "vn": "mượn từ điển"
      },
      {
        "zh": "查词典",
        "py": "chá cídiǎn",
        "vn": "tra từ điển"
      },
      {
        "zh": "还词典",
        "py": "hái cídiǎn",
        "vn": "trả từ điển"
      },
      {
        "zh": "汉语词典",
        "py": "Hànyǔ cídiǎn",
        "vn": "từ điển tiếng Trung"
      }
    ],
    "patterns": [
      {
        "s": "một + 本 + 词典",
        "m": "Lượng từ 本 cho sách vở"
      },
      {
        "s": "查 + 词典",
        "m": "Tra từ điển"
      }
    ]
  },
  {
    "n": 4,
    "zh": "还",
    "py": "huán",
    "pos": "Động từ",
    "vn": "trả",
    "hv": "hoàn",
    "em": "↩️",
    "lesson": 1,
    "explain": [
      "Đưa lại vật đã mượn cho chủ sở hữu."
    ],
    "usage": "Động từ, mang tân ngữ trực tiếp: 还 + [vật] (还书, 还钱); thường dùng trong 把字句: 把……还了.",
    "collo": [
      "还书",
      "还钱",
      "把……还了"
    ],
    "ex_zh": "帮我把这本词典还了吧。",
    "ex_py": "Bāng wǒ bǎ zhè běn cídiǎn huánle ba.",
    "ex_vn": "Giúp mình trả quyển từ điển này nhé.",
    "exList": [
      {
        "zh": "帮我把这本词典还了吧。",
        "py": "Bāng wǒ bǎ zhè běn cídiǎn huánle ba.",
        "vn": "Giúp mình trả quyển từ điển này nhé."
      },
      {
        "zh": "把词典还我吧，我要用一下。",
        "py": "Bǎ cídiǎn huán wǒ ba, wǒ yào yòng yíxià.",
        "vn": "Trả từ điển cho mình đi, mình cần dùng chút."
      },
      {
        "zh": "你昨天让我去图书馆把书还了，你忘了？",
        "py": "Nǐ zuótiān ràng wǒ qù túshūguǎn bǎ shū huán le, nǐ wàng le?",
        "vn": "Hôm qua bạn bảo mình đi thư viện trả sách rồi, bạn quên à?"
      }
    ],
    "hanzi": [
      {
        "c": "还",
        "p": "huán",
        "type": "半包围结构 · Bán bao vây",
        "st": 7,
        "ord": "辶 bao ngoài → 不(biến thể) trong",
        "rad": "辶 (sước – đi)",
        "mean": "trả lại, quay về",
        "tip": "辶(đi) → mang vật ĐI TRỞ LẠI nơi cũ = TRẢ LẠI (đọc \"huán\"); cùng chữ này đọc \"hái\" thì mang nghĩa \"vẫn, còn\".",
        "cf": "环 (huán – \"vòng tròn\", có bộ 王\")",
        "w": "还书 / 还钱 / 归还"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Xin lỗi, vì mấy hôm nay bận quá nên tôi quên mất chuyện trả sách.",
        "answer": "对不起，因为这几天太忙了，所以我把还书的事忘了。",
        "answerPy": "Duìbuqǐ, yīnwèi zhè jǐ tiān tài máng le, suǒyǐ wǒ bǎ huán shū de shì wàng le.",
        "note": "还 (huán, trả) khác 还 (hái, vẫn); câu chữ 把 + 忘了.",
        "pair": "因为……所以……"
      },
      {
        "promptLang": "vi",
        "prompt": "Nếu bạn không trả sách thì thư viện sẽ gọi điện nhắc bạn.",
        "answer": "如果你不还书，图书馆就会打电话提醒你。",
        "answerPy": "Rúguǒ nǐ bù huán shū, túshūguǎn jiù huì dǎ diànhuà tíxǐng nǐ.",
        "note": "如果……就…… diễn tả giả thiết — kết quả (ôn lại 图书馆 vừa học trong bài này).",
        "pair": "如果……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "还书",
        "py": "hái shū",
        "vn": "trả sách"
      },
      {
        "zh": "还钱",
        "py": "hái qián",
        "vn": "trả tiền"
      },
      {
        "zh": "把书还了",
        "py": "bǎ shū hái le",
        "vn": "trả sách rồi"
      },
      {
        "zh": "还给他",
        "py": "hái gěi tā",
        "vn": "trả lại cho anh ấy"
      },
      {
        "zh": "忘了还",
        "py": "wàng le hái",
        "vn": "quên trả"
      }
    ],
    "patterns": [
      {
        "s": "把 + N + 还给 + ai",
        "m": "Trả lại cái gì cho ai"
      },
      {
        "s": "还 (huán, trả) ≠ 还 (hái, vẫn còn) — cùng chữ, khác âm"
      }
    ]
  },
  {
    "n": 5,
    "zh": "灯",
    "py": "dēng",
    "pos": "Danh từ",
    "vn": "đèn",
    "hv": "đăng",
    "em": "💡",
    "lesson": 1,
    "explain": [
      "Vật dụng phát sáng dùng để chiếu sáng."
    ],
    "usage": "Danh từ; đi cùng động từ 关/开: 关灯, 开灯.",
    "collo": [
      "开灯",
      "关灯",
      "一盏灯"
    ],
    "ex_zh": "记得把灯关了。",
    "ex_py": "Jìde bǎ dēng guān le.",
    "ex_vn": "Nhớ tắt đèn nhé.",
    "exList": [
      {
        "zh": "记得把灯关了。",
        "py": "Jìde bǎ dēng guān le.",
        "vn": "Nhớ tắt đèn nhé."
      },
      {
        "zh": "会议结束后，你记得把空调和灯都关了。",
        "py": "Huìyì jiéshù hòu, nǐ jìde bǎ kōngtiáo hé dēng dōu guān le.",
        "vn": "Sau khi họp xong, bạn nhớ tắt cả máy điều hòa và đèn nhé."
      },
      {
        "zh": "你的电脑关了没有？",
        "py": "Nǐ de diànnǎo guānle méiyǒu?",
        "vn": "Máy tính của bạn tắt chưa?"
      }
    ],
    "hanzi": [
      {
        "c": "灯",
        "p": "dēng",
        "type": "左右结构 · Trái-phải",
        "st": 6,
        "ord": "火 trái → 丁 phải",
        "rad": "火 (hỏa – lửa)",
        "mean": "đèn",
        "tip": "火(lửa, ánh sáng) + 丁(âm đọc, ý chỉ vật nhỏ cố định) → vật phát ra ÁNH SÁNG = ĐÈN.",
        "cf": "钉 (dīng – \"cái đinh\", có bộ 钅\")",
        "w": "开灯 / 关灯 / 一盏灯"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Lát nữa rời lớp học thì nhớ tắt đèn, nếu không lại tốn điện.",
        "answer": "等一会儿你离开教室的时候，记得把灯关了，不然就太费电了。",
        "answerPy": "Děng yíhuìr nǐ líkāi jiàoshì de shíhou, jìde bǎ dēng guān le, bùrán jiù tài fèi diàn le.",
        "note": "离开 là từ bài 6, 一会儿 là từ bài 8; 开 ↔ 关.",
        "pair": "不然……"
      },
      {
        "promptLang": "vi",
        "prompt": "Tuy cuộc họp đã kết thúc nhưng anh ấy quên tắt đèn.",
        "answer": "虽然会议结束了，但是他忘了把灯关了。",
        "answerPy": "Suīrán huìyì jiéshù le, dànshì tā wàngle bǎ dēng guān le.",
        "note": "虽然……但是…… diễn tả sự tương phản (ôn lại 会议/结束 sẽ học ngay bên dưới).",
        "pair": "虽然……但是……"
      }
    ],
    "colloFull": [
      {
        "zh": "开灯",
        "py": "kāi dēng",
        "vn": "bật đèn"
      },
      {
        "zh": "关灯",
        "py": "guān dēng",
        "vn": "tắt đèn"
      },
      {
        "zh": "一盏灯",
        "py": "yì zhǎn dēng",
        "vn": "một ngọn đèn"
      },
      {
        "zh": "灯很亮",
        "py": "dēng hěn liàng",
        "vn": "đèn rất sáng"
      },
      {
        "zh": "忘了关灯",
        "py": "wàng le guān dēng",
        "vn": "quên tắt đèn"
      }
    ],
    "patterns": [
      {
        "s": "开 / 关 + 灯",
        "m": "Bật / tắt đèn"
      },
      {
        "s": "开 ↔ 关",
        "m": "Mở, bật ↔ đóng, tắt"
      }
    ]
  },
  {
    "n": 6,
    "zh": "会议",
    "py": "huìyì",
    "pos": "Danh từ",
    "vn": "hội nghị, cuộc họp",
    "hv": "hội nghị",
    "em": "💼",
    "lesson": 2,
    "explain": [
      "Buổi tập hợp để thảo luận, quyết định vấn đề chung."
    ],
    "usage": "Danh từ; đi cùng động từ 开: 开会议; hoặc 会议 + 结束.",
    "collo": [
      "开会议",
      "会议结束",
      "参加会议"
    ],
    "ex_zh": "会议结束后，别忘记把空调关了。",
    "ex_py": "Huìyì jiéshù hòu, bié wàngjì bǎ kōngtiáo guān le.",
    "ex_vn": "Sau khi họp xong, đừng quên tắt máy điều hòa nhé.",
    "exList": [
      {
        "zh": "会议结束后，别忘记把空调关了。",
        "py": "Huìyì jiéshù hòu, bié wàngjì bǎ kōngtiáo guān le.",
        "vn": "Sau khi họp xong, đừng quên tắt máy điều hòa nhé."
      },
      {
        "zh": "会议结束后，你记得把空调和灯都关了。",
        "py": "Huìyì jiéshù hòu, nǐ jìde bǎ kōngtiáo hé dēng dōu guān le.",
        "vn": "Sau khi họp xong, bạn nhớ tắt cả máy điều hòa và đèn nhé."
      },
      {
        "zh": "我明天出去开会，你能帮我照顾一下小雨吗？",
        "py": "Wǒ míngtiān chūqu kāihuì, nǐ néng bāng wǒ zhàogù yíxià Xiǎoyǔ ma?",
        "vn": "Ngày mai tôi ra ngoài họp, bạn có thể giúp tôi trông Tiểu Vũ một chút không?"
      }
    ],
    "hanzi": [
      {
        "c": "议",
        "p": "yì",
        "type": "左右结构 · Trái-phải",
        "st": 5,
        "ord": "讠 trái → 义 phải",
        "rad": "讠 (ngôn – lời nói)",
        "mean": "bàn bạc, nghị luận",
        "tip": "讠(lời nói) + 义(chính nghĩa, lẽ phải) → nói ra để bàn về LẼ PHẢI = BÀN BẠC; 会议 = cuộc họp bàn bạc.",
        "cf": "仪 (yí – \"nghi thức\", có 亻 thay vì 讠\")",
        "w": "会议 / 开会 / 议论"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Trước khi cuộc họp bắt đầu, xin mọi người tắt điện thoại đi.",
        "answer": "会议开始以前，请大家把手机关了。",
        "answerPy": "Huìyì kāishǐ yǐqián, qǐng dàjiā bǎ shǒujī guān le.",
        "note": "V + 以前 — trước khi làm gì, 以前 đứng SAU.",
        "pair": "……以前……"
      },
      {
        "promptLang": "vi",
        "prompt": "Nếu bạn tham gia cuộc họp thì nhớ mang theo laptop nhé.",
        "answer": "如果你参加会议，就记得带笔记本电脑。",
        "answerPy": "Rúguǒ nǐ cānjiā huìyì, jiù jìde dài bǐjìběn diànnǎo.",
        "note": "如果……就…… diễn tả giả thiết — kết quả (ôn lại 参加 đã học ở Bài 9).",
        "pair": "如果……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "开会议",
        "py": "kāi huìyì",
        "vn": "họp"
      },
      {
        "zh": "参加会议",
        "py": "cānjiā huìyì",
        "vn": "dự họp"
      },
      {
        "zh": "会议结束",
        "py": "huìyì jiéshù",
        "vn": "cuộc họp kết thúc"
      },
      {
        "zh": "会议室",
        "py": "huìyìshì",
        "vn": "phòng họp"
      },
      {
        "zh": "会议什么时候开始",
        "py": "huìyì shénme shíhou kāishǐ",
        "vn": "cuộc họp bắt đầu khi nào"
      }
    ],
    "patterns": [
      {
        "s": "参加 + 会议",
        "m": "Dự cuộc họp — 参加 là từ bài 9"
      },
      {
        "s": "会 + 议",
        "m": "Họp (会) bàn (议)"
      }
    ]
  },
  {
    "n": 7,
    "zh": "结束",
    "py": "jiéshù",
    "pos": "Động từ",
    "vn": "kết thúc, chấm dứt",
    "hv": "kết thúc",
    "em": "🏁",
    "lesson": 2,
    "explain": [
      "Hoạt động, sự việc đi đến hồi cuối."
    ],
    "usage": "Động từ, đứng độc lập hoặc mang tân ngữ: 结束了, 会议结束.",
    "collo": [
      "会议结束",
      "结束了",
      "还没结束"
    ],
    "ex_zh": "会议结束后，别忘记把空调关了。",
    "ex_py": "Huìyì jiéshù hòu, bié wàngjì bǎ kōngtiáo guān le.",
    "ex_vn": "Sau khi họp xong, đừng quên tắt máy điều hòa nhé.",
    "exList": [
      {
        "zh": "会议结束后，别忘记把空调关了。",
        "py": "Huìyì jiéshù hòu, bié wàngjì bǎ kōngtiáo guān le.",
        "vn": "Sau khi họp xong, đừng quên tắt máy điều hòa nhé."
      },
      {
        "zh": "运动会什么时候结束？五点左右吧。",
        "py": "Yùndònghuì shénme shíhou jiéshù? Wǔ diǎn zuǒyòu ba.",
        "vn": "Hội thao khi nào kết thúc? Khoảng 5 giờ thôi."
      },
      {
        "zh": "结束一天的工作以后，你和家人一起吃晚饭。",
        "py": "Jiéshù yìtiān de gōngzuò yǐhòu, nǐ hé jiārén yìqǐ chī wǎnfàn.",
        "vn": "Kết thúc một ngày làm việc, bạn cùng gia đình ăn tối."
      }
    ],
    "hanzi": [
      {
        "c": "束",
        "p": "shù",
        "type": "独体字 · Chữ đơn",
        "st": 7,
        "ord": "木+口(biến thể)",
        "rad": "木 (mộc – cây)",
        "mean": "bó, buộc",
        "tip": "Chữ tượng hình mô phỏng một bó cây bị BUỘC lại → BÓ, mở rộng nghĩa \"đóng lại, chấm dứt\" = KẾT THÚC.",
        "cf": "速 (sù – \"nhanh chóng\", có bộ 辶\")",
        "w": "结束 / 一束花"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Phim mấy giờ kết thúc? Nếu xong sớm thì chúng ta đi ăn chút gì.",
        "answer": "电影什么时候结束？如果结束得早，我们就去吃点儿东西。",
        "answerPy": "Diànyǐng shénme shíhou jiéshù? Rúguǒ jiéshù de zǎo, wǒmen jiù qù chī diǎnr dōngxi.",
        "note": "结束 ↔ 开始.",
        "pair": "如果……就……"
      },
      {
        "promptLang": "vi",
        "prompt": "Chỉ cần cuộc họp kết thúc thì chúng ta có thể đi ăn cơm.",
        "answer": "只要会议结束，我们就可以去吃饭。",
        "answerPy": "Zhǐyào huìyì jiéshù, wǒmen jiù kěyǐ qù chīfàn.",
        "note": "只要……就…… diễn tả điều kiện đủ (ôn lại 会议 vừa học trong bài này).",
        "pair": "只要……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "会议结束",
        "py": "huìyì jiéshù",
        "vn": "cuộc họp kết thúc"
      },
      {
        "zh": "结束了",
        "py": "jiéshù le",
        "vn": "kết thúc rồi"
      },
      {
        "zh": "还没结束",
        "py": "hái méi jiéshù",
        "vn": "vẫn chưa xong"
      },
      {
        "zh": "电影结束",
        "py": "diànyǐng jiéshù",
        "vn": "phim hết rồi"
      },
      {
        "zh": "工作结束以后",
        "py": "gōngzuò jiéshù yǐhòu",
        "vn": "sau khi làm việc xong"
      }
    ],
    "patterns": [
      {
        "s": "N + 结束 + 了",
        "m": "Việc gì đó đã kết thúc"
      },
      {
        "s": "结束 ↔ 开始",
        "m": "Kết thúc ↔ bắt đầu"
      }
    ]
  },
  {
    "n": 8,
    "zh": "忘记",
    "py": "wàngjì",
    "pos": "Động từ",
    "vn": "quên",
    "hv": "vong ký",
    "em": "🤔",
    "lesson": 2,
    "explain": [
      "Không còn nhớ, để mất khỏi trí nhớ."
    ],
    "usage": "Động từ, mang tân ngữ trực tiếp hoặc dùng trong 把字句: 别忘记 + V, 把……忘记了.",
    "collo": [
      "别忘记",
      "忘记了",
      "把……忘了"
    ],
    "ex_zh": "会议结束后，别忘记把空调关了。",
    "ex_py": "Huìyì jiéshù hòu, bié wàngjì bǎ kōngtiáo guān le.",
    "ex_vn": "Sau khi họp xong, đừng quên tắt máy điều hòa nhé.",
    "exList": [
      {
        "zh": "会议结束后，别忘记把空调关了。",
        "py": "Huìyì jiéshù hòu, bié wàngjì bǎ kōngtiáo guān le.",
        "vn": "Sau khi họp xong, đừng quên tắt máy điều hòa nhé."
      },
      {
        "zh": "我把爸爸的生日忘了。",
        "py": "Wǒ bǎ bàba de shēngrì wàng le.",
        "vn": "Con quên mất sinh nhật bố rồi."
      },
      {
        "zh": "你昨天让我去图书馆把书还了，你忘了？",
        "py": "Nǐ zuótiān ràng wǒ qù túshūguǎn bǎ shū huán le, nǐ wàng le?",
        "vn": "Hôm qua bạn bảo mình đi thư viện trả sách rồi, bạn quên à?"
      }
    ],
    "hanzi": [
      {
        "c": "忘",
        "p": "wàng",
        "type": "上下结构 · Trên-dưới",
        "st": 7,
        "ord": "亡 trên → 心 dưới",
        "rad": "心 (tâm – tim, tâm trí)",
        "mean": "quên",
        "tip": "亡(mất đi) + 心(tâm trí) → điều gì đó MẤT ĐI khỏi TÂM TRÍ = QUÊN.",
        "cf": "忙 (máng – \"bận rộn\", có 忄 thay vì 心\")",
        "w": "忘记 / 忘了 / 别忘了"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tôi quên mất bài tập cô giáo giao rồi, bạn nhắc tôi một tiếng được không?",
        "answer": "我把老师说的作业忘了，你能告诉我一下吗？",
        "answerPy": "Wǒ bǎ lǎoshī shuō de zuòyè wàng le, nǐ néng gàosu wǒ yíxià ma?",
        "note": "作业 là từ bài 1; câu chữ 把 dùng khi nói về cái đã xác định.",
        "pair": "把……忘了"
      },
      {
        "promptLang": "vi",
        "prompt": "Xin lỗi, vì dạo này việc nhiều quá nên tôi quên mất chuyện đó.",
        "answer": "对不起，因为最近事情太多了，所以我把那件事忘了。",
        "answerPy": "Duìbuqǐ, yīnwèi zuìjìn shìqing tài duō le, suǒyǐ wǒ bǎ nà jiàn shì wàng le.",
        "note": "最近 là từ bài 5.",
        "pair": "因为……所以……"
      }
    ],
    "colloFull": [
      {
        "zh": "别忘记",
        "py": "bié wàngjì",
        "vn": "đừng quên"
      },
      {
        "zh": "忘记了",
        "py": "wàngjì le",
        "vn": "quên mất rồi"
      },
      {
        "zh": "把……忘了",
        "py": "bǎ wàng le",
        "vn": "quên mất cái gì"
      },
      {
        "zh": "忘记带",
        "py": "wàngjì dài",
        "vn": "quên mang"
      },
      {
        "zh": "忘记了名字",
        "py": "wàngjì le míngzi",
        "vn": "quên mất tên"
      }
    ],
    "patterns": [
      {
        "s": "把 + N + 忘了",
        "m": "Quên mất cái gì — câu chữ 把"
      },
      {
        "s": "忘记 ≈ 忘",
        "m": "忘记 đầy đủ hơn, 忘 thiên khẩu ngữ"
      }
    ]
  },
  {
    "n": 9,
    "zh": "空调",
    "py": "kōngtiáo",
    "pos": "Danh từ",
    "vn": "máy điều hòa không khí",
    "hv": "không điều",
    "em": "❄️",
    "lesson": 2,
    "explain": [
      "Thiết bị điều chỉnh nhiệt độ không khí trong phòng."
    ],
    "usage": "Danh từ; đi cùng động từ 开/关: 开空调, 关空调.",
    "collo": [
      "开空调",
      "关空调",
      "空调坏了"
    ],
    "ex_zh": "别忘记把空调关了。",
    "ex_py": "Bié wàngjì bǎ kōngtiáo guān le.",
    "ex_vn": "Đừng quên tắt máy điều hòa nhé.",
    "exList": [
      {
        "zh": "别忘记把空调关了。",
        "py": "Bié wàngjì bǎ kōngtiáo guān le.",
        "vn": "Đừng quên tắt máy điều hòa nhé."
      },
      {
        "zh": "空调下面怎么这么多水？",
        "py": "Kōngtiáo xiàmian zěnme zhème duō shuǐ?",
        "vn": "Sao dưới máy điều hòa nhiều nước thế?"
      },
      {
        "zh": "你记得把空调和灯都关了。",
        "py": "Nǐ jìde bǎ kōngtiáo hé dēng dōu guān le.",
        "vn": "Bạn nhớ tắt cả máy điều hòa và đèn nhé."
      }
    ],
    "hanzi": [
      {
        "c": "调",
        "p": "tiáo",
        "type": "左右结构 · Trái-phải",
        "st": 10,
        "ord": "讠 trái → 周 phải",
        "rad": "讠 (ngôn – lời nói)",
        "mean": "điều chỉnh",
        "tip": "讠(nói, ý chỉ hòa hợp) + 周(khắp, đều) → làm cho MỌI THỨ hòa hợp đều đặn = ĐIỀU CHỈNH; 空调 = điều chỉnh không khí.",
        "cf": "周 (zhōu – \"vòng, tuần\", không có bộ 讠\")",
        "w": "空调 / 调整"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Ra khỏi nhà thì đừng quên khoá cửa và tắt điều hoà.",
        "answer": "出门的时候，别忘记把门锁了，也别忘记关空调。",
        "answerPy": "Chūmén de shíhou, bié wàngjì bǎ mén suǒ le, yě bié wàngjì guān kōngtiáo.",
        "note": "开 / 关 + 空调 — bật, tắt điều hoà.",
        "pair": "……的时候……"
      },
      {
        "promptLang": "vi",
        "prompt": "Nếu trời nóng thì bạn mở máy điều hòa lên đi.",
        "answer": "如果天气热，你就开空调吧。",
        "answerPy": "Rúguǒ tiānqì rè, nǐ jiù kāi kōngtiáo ba.",
        "note": "如果……就…… diễn tả giả thiết — kết quả.",
        "pair": "如果……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "开空调",
        "py": "kāi kōngtiáo",
        "vn": "bật điều hoà"
      },
      {
        "zh": "关空调",
        "py": "guān kōngtiáo",
        "vn": "tắt điều hoà"
      },
      {
        "zh": "空调坏了",
        "py": "kōngtiáo huài le",
        "vn": "điều hoà hỏng rồi"
      },
      {
        "zh": "空调很凉快",
        "py": "kōngtiáo hěn liángkuai",
        "vn": "điều hoà rất mát"
      },
      {
        "zh": "房间有空调",
        "py": "fángjiān yǒu kōngtiáo",
        "vn": "phòng có điều hoà"
      }
    ],
    "patterns": [
      {
        "s": "开 / 关 + 空调",
        "m": "Bật / tắt điều hoà"
      },
      {
        "s": "空 + 调",
        "m": "Điều (调) hoà không khí (空)"
      }
    ]
  },
  {
    "n": 10,
    "zh": "关",
    "py": "guān",
    "pos": "Động từ",
    "vn": "tắt, đóng",
    "hv": "quan",
    "em": "🔴",
    "lesson": 2,
    "explain": [
      "Ngừng hoạt động một thiết bị, hoặc đóng lại một vật."
    ],
    "usage": "Động từ, mang tân ngữ trực tiếp: 关 + [vật] (关灯, 关空调); thường dùng trong 把字句.",
    "collo": [
      "关灯",
      "关空调",
      "关门"
    ],
    "ex_zh": "别忘记把空调关了。",
    "ex_py": "Bié wàngjì bǎ kōngtiáo guān le.",
    "ex_vn": "Đừng quên tắt máy điều hòa nhé.",
    "exList": [
      {
        "zh": "别忘记把空调关了。",
        "py": "Bié wàngjì bǎ kōngtiáo guān le.",
        "vn": "Đừng quên tắt máy điều hòa nhé."
      },
      {
        "zh": "记得把灯关了。",
        "py": "Jìde bǎ dēng guān le.",
        "vn": "Nhớ tắt đèn nhé."
      },
      {
        "zh": "饭菜都做好了，把电脑关了吧？先吃饭。",
        "py": "Fàncài dōu zuòhǎo le, bǎ diànnǎo guān le ba? Xiān chīfàn.",
        "vn": "Cơm nước xong hết rồi, tắt máy tính đi nhé? Ăn cơm trước đã."
      }
    ],
    "hanzi": [
      {
        "c": "关",
        "p": "guān",
        "type": "独体字 · Chữ đơn",
        "st": 6,
        "ord": "nét liền",
        "rad": "冫(băng)",
        "mean": "đóng, tắt; liên quan",
        "tip": "Chữ giản thể mô phỏng cánh cửa được ĐÓNG LẠI → ĐÓNG, TẮT; mở rộng nghĩa LIÊN QUAN (关系).",
        "cf": "并 (bìng – \"cùng, và\", hình dáng khác hẳn\")",
        "w": "关灯 / 关门 / 关系"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Cửa lớp học đóng chưa? Nếu chưa thì tôi đi đóng.",
        "answer": "教室的门关了没有？如果还没关，我就去关。",
        "answerPy": "Jiàoshì de mén guānle méiyǒu? Rúguǒ hái méi guān, wǒ jiù qù guān.",
        "note": "V + 了没有 — dạng hỏi đã làm chưa.",
        "pair": "如果……就……"
      },
      {
        "promptLang": "vi",
        "prompt": "Chỉ cần bạn tắt máy điều hòa thì phòng sẽ không lạnh nữa.",
        "answer": "只要你把空调关了，房间就不会冷了。",
        "answerPy": "Zhǐyào nǐ bǎ kōngtiáo guān le, fángjiān jiù bú huì lěng le.",
        "note": "只要……就…… diễn tả điều kiện đủ (ôn lại 空调 vừa học trong bài này).",
        "pair": "只要……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "关灯",
        "py": "guān dēng",
        "vn": "tắt đèn"
      },
      {
        "zh": "关门",
        "py": "guān mén",
        "vn": "đóng cửa"
      },
      {
        "zh": "关空调",
        "py": "guān kōngtiáo",
        "vn": "tắt điều hoà"
      },
      {
        "zh": "关手机",
        "py": "guān shǒujī",
        "vn": "tắt điện thoại"
      },
      {
        "zh": "把门关了",
        "py": "bǎ mén guān le",
        "vn": "đóng cửa lại rồi"
      }
    ],
    "patterns": [
      {
        "s": "把 + N + 关了",
        "m": "Tắt, đóng cái gì — câu chữ 把"
      },
      {
        "s": "关 ↔ 开",
        "m": "Tắt, đóng ↔ bật, mở"
      }
    ]
  },
  {
    "n": 11,
    "zh": "地铁",
    "py": "dìtiě",
    "pos": "Danh từ",
    "vn": "tàu điện ngầm",
    "hv": "địa thiết",
    "em": "🚇",
    "lesson": 2,
    "explain": [
      "Phương tiện giao thông công cộng chạy dưới lòng đất."
    ],
    "usage": "Danh từ; đi cùng động từ 坐: 坐地铁.",
    "collo": [
      "坐地铁",
      "地铁站",
      "地铁上"
    ],
    "ex_zh": "他正坐地铁来我们公司呢。",
    "ex_py": "Tā zhèng zuò dìtiě lái wǒmen gōngsī ne.",
    "ex_vn": "Ông ấy đang đi tàu điện ngầm đến công ty mình đấy.",
    "exList": [
      {
        "zh": "他正坐地铁来我们公司呢。",
        "py": "Tā zhèng zuò dìtiě lái wǒmen gōngsī ne.",
        "vn": "Ông ấy đang đi tàu điện ngầm đến công ty mình đấy."
      },
      {
        "zh": "上下班都不用坐地铁了，骑自行车就可以。",
        "py": "Shàng-xiàbān dōu búyòng zuò dìtiě le, qí zìxíngchē jiù kěyǐ.",
        "vn": "Đi làm về đều không cần đi tàu điện ngầm nữa, đi xe đạp là được."
      },
      {
        "zh": "这儿附近有眼镜店吗？地铁站旁边有一个。",
        "py": "Zhèr fùjìn yǒu yǎnjìngdiàn ma? Dìtiě zhàn pángbiān yǒu yí ge.",
        "vn": "Gần đây có cửa hàng kính không? Bên cạnh ga tàu điện ngầm có một cái."
      }
    ],
    "hanzi": [
      {
        "c": "铁",
        "p": "tiě",
        "type": "左右结构 · Trái-phải",
        "st": 10,
        "ord": "钅 trái → 失 phải",
        "rad": "钅 (kim – kim loại)",
        "mean": "sắt",
        "tip": "钅(kim loại) + 失(mất, ý chỉ màu đen xỉn) → kim loại màu ĐEN XỈN = SẮT; 地铁 = \"đường sắt dưới đất\" = TÀU ĐIỆN NGẦM.",
        "cf": "跌 (diē – \"ngã\", có bộ 足\")",
        "w": "地铁 / 铁路 / 地铁站"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Giám đốc Chu nói khoảng ba giờ sẽ đi tàu điện ngầm đến công ty.",
        "answer": "周经理说他三点左右会坐地铁到公司。",
        "answerPy": "Zhōu jīnglǐ shuō tā sān diǎn zuǒyòu huì zuò dìtiě dào gōngsī.",
        "note": "经理 là từ bài 2; 坐地铁 — dùng 坐 chứ không dùng 骑.",
        "pair": "……会……"
      },
      {
        "promptLang": "vi",
        "prompt": "Nếu gần nhà bạn có ga tàu điện ngầm thì sẽ rất tiện.",
        "answer": "如果你家附近有地铁站，就会很方便。",
        "answerPy": "Rúguǒ nǐ jiā fùjìn yǒu dìtiě zhàn, jiù huì hěn fāngbiàn.",
        "note": "如果……就…… diễn tả giả thiết — kết quả (ôn lại 附近/方便 đã học ở Bài 10).",
        "pair": "如果……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "坐地铁",
        "py": "zuò dìtiě",
        "vn": "đi tàu điện ngầm"
      },
      {
        "zh": "地铁站",
        "py": "dìtiě zhàn",
        "vn": "ga tàu điện ngầm"
      },
      {
        "zh": "地铁上",
        "py": "dìtiě shàng",
        "vn": "trên tàu điện"
      },
      {
        "zh": "地铁很快",
        "py": "dìtiě hěn kuài",
        "vn": "tàu điện rất nhanh"
      },
      {
        "zh": "换地铁",
        "py": "huàn dìtiě",
        "vn": "đổi tuyến tàu điện"
      }
    ],
    "patterns": [
      {
        "s": "坐 + 地铁",
        "m": "Đi tàu điện ngầm — dùng 坐, không dùng 骑"
      },
      {
        "s": "地 + 铁",
        "m": "Đường sắt (铁) dưới đất (地)"
      }
    ]
  },
  {
    "n": 12,
    "zh": "双",
    "py": "shuāng",
    "pos": "Lượng từ",
    "vn": "đôi",
    "hv": "song",
    "em": "👞",
    "lesson": 3,
    "explain": [
      "Đơn vị đếm các vật đi thành cặp như đũa, giày."
    ],
    "usage": "Lượng từ, đứng sau số từ: [số từ] + 双 + [danh từ] (一双筷子).",
    "collo": [
      "一双筷子",
      "一双鞋",
      "两双"
    ],
    "ex_zh": "还差一双筷子，你去拿一下。",
    "ex_py": "Hái chà yì shuāng kuàizi, nǐ qù ná yíxià.",
    "ex_vn": "Còn thiếu một đôi đũa, con lấy giúp mẹ đi.",
    "exList": [
      {
        "zh": "还差一双筷子，你去拿一下。",
        "py": "Hái chà yì shuāng kuàizi, nǐ qù ná yíxià.",
        "vn": "Còn thiếu một đôi đũa, con lấy giúp mẹ đi."
      },
      {
        "zh": "服务员，这儿只有一双筷子，请再给我们拿一双。",
        "py": "Fúwùyuán, zhèr zhǐ yǒu yì shuāng kuàizi, qǐng zài gěi wǒmen ná yì shuāng.",
        "vn": "Phục vụ ơi, ở đây chỉ có một đôi đũa, làm ơn lấy thêm cho chúng tôi một đôi."
      },
      {
        "zh": "拿两双筷子就可以了，今天爸爸不回来吃晚饭。",
        "py": "Ná liǎng shuāng kuàizi jiù kěyǐ le, jīntiān bàba bù huílai chī wǎnfàn.",
        "vn": "Lấy hai đôi đũa là được rồi, hôm nay bố không về ăn tối."
      }
    ],
    "hanzi": [
      {
        "c": "双",
        "p": "shuāng",
        "type": "左右结构 · Trái-phải",
        "st": 4,
        "ord": "又+又 (kết hợp)",
        "rad": "又 (hựu)",
        "mean": "đôi, cặp",
        "tip": "Chữ giản thể mô phỏng HAI bàn tay (又+又) chụm lại → ĐÔI, CẶP.",
        "cf": "反 (fǎn – \"trái ngược\", chỉ có 1 chữ 又\")",
        "w": "一双筷子 / 一双鞋"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Mẹ mua cho hai anh em tôi mỗi người một đôi giày thể thao.",
        "answer": "妈妈给我们兄弟俩每人买了一双运动鞋。",
        "answerPy": "Māma gěi wǒmen xiōngdì liǎ měi rén mǎile yì shuāng yùndòngxié.",
        "note": "một + 双 + vật đi thành đôi: 鞋, 筷子, 袜子.",
        "pair": "给……买……"
      },
      {
        "promptLang": "vi",
        "prompt": "Chỉ cần lấy hai đôi đũa là đủ rồi.",
        "answer": "只要拿两双筷子就够了。",
        "answerPy": "Zhǐyào ná liǎng shuāng kuàizi jiù gòu le.",
        "note": "只要……就…… diễn tả điều kiện đủ.",
        "pair": "只要……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "一双筷子",
        "py": "yì shuāng kuàizi",
        "vn": "một đôi đũa"
      },
      {
        "zh": "一双鞋",
        "py": "yì shuāng xié",
        "vn": "một đôi giày"
      },
      {
        "zh": "两双",
        "py": "liǎng shuāng",
        "vn": "hai đôi"
      },
      {
        "zh": "一双手",
        "py": "yì shuāng shǒu",
        "vn": "một đôi tay"
      },
      {
        "zh": "一双手",
        "py": "yì shuāng shǒu",
        "vn": "đôi bàn tay"
      }
    ],
    "patterns": [
      {
        "s": "số + 双 + vật đi thành đôi",
        "m": "Lượng từ 双: 筷子, 鞋, 手 — vật luôn có đôi"
      },
      {
        "s": "双 (đôi có hai cái giống nhau) ≠ 副 (bộ, như 一副眼镜)"
      }
    ]
  },
  {
    "n": 13,
    "zh": "筷子",
    "py": "kuàizi",
    "pos": "Danh từ",
    "vn": "đũa",
    "hv": "khoái tử",
    "em": "🥢",
    "lesson": 3,
    "explain": [
      "Dụng cụ ăn cơm truyền thống gồm hai que."
    ],
    "usage": "Danh từ; lượng từ đi kèm là 双: 一双筷子.",
    "collo": [
      "一双筷子",
      "用筷子",
      "拿筷子"
    ],
    "ex_zh": "还差一双筷子，你去拿一下。",
    "ex_py": "Hái chà yì shuāng kuàizi, nǐ qù ná yíxià.",
    "ex_vn": "Còn thiếu một đôi đũa, con lấy giúp mẹ đi.",
    "exList": [
      {
        "zh": "还差一双筷子，你去拿一下。",
        "py": "Hái chà yì shuāng kuàizi, nǐ qù ná yíxià.",
        "vn": "Còn thiếu một đôi đũa, con lấy giúp mẹ đi."
      },
      {
        "zh": "服务员，这儿只有一双筷子，请再给我们拿一双。",
        "py": "Fúwùyuán, zhèr zhǐ yǒu yì shuāng kuàizi, qǐng zài gěi wǒmen ná yì shuāng.",
        "vn": "Phục vụ ơi, ở đây chỉ có một đôi đũa, làm ơn lấy thêm cho chúng tôi một đôi."
      },
      {
        "zh": "拿两双筷子就可以了，今天爸爸不回来吃晚饭。",
        "py": "Ná liǎng shuāng kuàizi jiù kěyǐ le, jīntiān bàba bù huílai chī wǎnfàn.",
        "vn": "Lấy hai đôi đũa là được rồi, hôm nay bố không về ăn tối."
      }
    ],
    "hanzi": [
      {
        "c": "筷",
        "p": "kuài",
        "type": "上下结构 · Trên-dưới",
        "st": 13,
        "ord": "⺮ trên → 快 dưới",
        "rad": "⺮ (trúc – tre)",
        "mean": "đũa",
        "tip": "⺮(tre, vật liệu làm đũa) + 快(nhanh) → dụng cụ bằng TRE giúp gắp thức ăn NHANH = ĐŨA.",
        "cf": "快 (kuài – \"nhanh\", không có bộ ⺮\")",
        "w": "筷子 / 一双筷子"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Phục vụ ơi, chúng tôi thiếu một đôi đũa, phiền bạn lấy thêm giúp.",
        "answer": "服务员，我们少一双筷子，麻烦你再拿一双来。",
        "answerPy": "Fúwùyuán, wǒmen shǎo yì shuāng kuàizi, máfan nǐ zài ná yì shuāng lái.",
        "note": "拿 là từ bài 2 — cầm, lấy bằng tay.",
        "pair": "麻烦……"
      },
      {
        "promptLang": "vi",
        "prompt": "Nếu thiếu đũa thì bạn đi lấy thêm một đôi đi.",
        "answer": "如果差筷子，你就再去拿一双吧。",
        "answerPy": "Rúguǒ chà kuàizi, nǐ jiù zài qù ná yì shuāng ba.",
        "note": "如果……就…… diễn tả giả thiết — kết quả (ôn lại 差 đã học ở Bài 7).",
        "pair": "如果……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "一双筷子",
        "py": "yì shuāng kuàizi",
        "vn": "một đôi đũa"
      },
      {
        "zh": "用筷子",
        "py": "yòng kuàizi",
        "vn": "dùng đũa"
      },
      {
        "zh": "拿筷子",
        "py": "ná kuàizi",
        "vn": "cầm đũa"
      },
      {
        "zh": "学用筷子",
        "py": "xué yòng kuàizi",
        "vn": "học dùng đũa"
      },
      {
        "zh": "筷子和勺子",
        "py": "kuàizi hé sháozi",
        "vn": "đũa và thìa"
      }
    ],
    "patterns": [
      {
        "s": "用 + 筷子 + V",
        "m": "Dùng đũa để làm gì"
      },
      {
        "s": "一 + 双 + 筷子",
        "m": "Đũa luôn đi thành đôi"
      }
    ]
  },
  {
    "n": 14,
    "zh": "啤酒",
    "py": "píjiǔ",
    "pos": "Danh từ",
    "vn": "bia, rượu bia",
    "hv": "bì tửu",
    "em": "🍺",
    "lesson": 3,
    "explain": [
      "Loại đồ uống có cồn, lên men từ lúa mạch."
    ],
    "usage": "Danh từ; đi cùng động từ 喝: 喝啤酒.",
    "collo": [
      "喝啤酒",
      "一瓶啤酒",
      "买啤酒"
    ],
    "ex_zh": "那我们今天喝点儿啤酒吧。",
    "ex_py": "Nà wǒmen jīntiān hē diǎnr píjiǔ ba.",
    "ex_vn": "Vậy hôm nay chúng ta uống chút bia đi.",
    "exList": [
      {
        "zh": "那我们今天喝点儿啤酒吧。",
        "py": "Nà wǒmen jīntiān hē diǎnr píjiǔ ba.",
        "vn": "Vậy hôm nay chúng ta uống chút bia đi."
      },
      {
        "zh": "你去楼下买几瓶啤酒吧。",
        "py": "Nǐ qù lóuxià mǎi jǐ píng píjiǔ ba.",
        "vn": "Bạn xuống dưới lầu mua vài chai bia đi."
      },
      {
        "zh": "医生说你爸爸一口酒都不能喝。",
        "py": "Yīshēng shuō nǐ bàba yì kǒu jiǔ dōu bù néng hē.",
        "vn": "Bác sĩ nói bố con không được uống một ngụm rượu nào cả."
      }
    ],
    "hanzi": [
      {
        "c": "啤",
        "p": "pí",
        "type": "左右结构 · Trái-phải",
        "st": 11,
        "ord": "口 trái → 卑 phải",
        "rad": "口 (khẩu – miệng)",
        "mean": "bia (phiên âm)",
        "tip": "口(miệng, ý chỉ đồ uống) + 卑(âm đọc mượn từ \"beer\") → chữ tạo ra để PHIÊN ÂM từ \"bia\" của phương Tây.",
        "cf": "脾 (pí – \"lá lách\", có bộ 月\")",
        "w": "啤酒 / 喝啤酒"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Bố con không được uống một ngụm rượu nào cả.",
        "answer": "你爸爸一口酒都不能喝。",
        "answerPy": "Nǐ bàba yì kǒu jiǔ dōu bù néng hē.",
        "note": "一口……都不能 diễn tả sự cấm đoán tuyệt đối (ôn lại 口 sẽ học ngay bên dưới).",
        "pair": "一……都……"
      },
      {
        "promptLang": "vi",
        "prompt": "Nếu bạn đói thì chúng ta uống chút bia trước rồi ăn cơm.",
        "answer": "如果你饿了，我们就先喝点儿啤酒再吃饭。",
        "answerPy": "Rúguǒ nǐ è le, wǒmen jiù xiān hē diǎnr píjiǔ zài chīfàn.",
        "note": "如果……就…… diễn tả giả thiết — kết quả (ôn lại 饿 đã học ở Bài 4).",
        "pair": "如果……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "喝啤酒",
        "py": "hē píjiǔ",
        "vn": "uống bia"
      },
      {
        "zh": "一瓶啤酒",
        "py": "yì píng píjiǔ",
        "vn": "một chai bia"
      },
      {
        "zh": "买啤酒",
        "py": "mǎi píjiǔ",
        "vn": "mua bia"
      },
      {
        "zh": "冰啤酒",
        "py": "bīng píjiǔ",
        "vn": "bia lạnh"
      },
      {
        "zh": "不能喝啤酒",
        "py": "bù néng hē píjiǔ",
        "vn": "không uống được bia"
      }
    ],
    "patterns": [
      {
        "s": "một + 瓶 + 啤酒",
        "m": "Lượng từ 瓶 cho chai"
      },
      {
        "s": "啤 + 酒",
        "m": "Rượu (酒) bia — 啤 là dịch âm của \"beer\""
      }
    ]
  },
  {
    "n": 15,
    "zh": "口",
    "py": "kǒu",
    "pos": "Lượng từ",
    "vn": "miếng, ngụm, hớp",
    "hv": "khẩu",
    "em": "👄",
    "lesson": 3,
    "explain": [
      "Đơn vị đếm số lần ăn/uống bằng miệng."
    ],
    "usage": "Lượng từ, đứng sau số từ: [số từ] + 口 + [danh từ] (一口水, 一口酒).",
    "collo": [
      "一口水",
      "一口酒",
      "喝一口"
    ],
    "ex_zh": "医生说你爸爸一口酒都不能喝。",
    "ex_py": "Yīshēng shuō nǐ bàba yì kǒu jiǔ dōu bù néng hē.",
    "ex_vn": "Bác sĩ nói bố con không được uống một ngụm rượu nào cả.",
    "exList": [
      {
        "zh": "医生说你爸爸一口酒都不能喝。",
        "py": "Yīshēng shuō nǐ bàba yì kǒu jiǔ dōu bù néng hē.",
        "vn": "Bác sĩ nói bố con không được uống một ngụm rượu nào cả."
      },
      {
        "zh": "这种咖啡特别好喝，你快来喝一口吧。",
        "py": "Zhè zhǒng kāfēi tèbié hǎohē, nǐ kuài lái hē yì kǒu ba.",
        "vn": "Loại cà phê này ngon lắm, bạn mau đến uống một ngụm đi."
      },
      {
        "zh": "吃几口饭就饱了。",
        "py": "Chī jǐ kǒu fàn jiù bǎo le.",
        "vn": "Ăn mấy miếng cơm là no rồi."
      }
    ],
    "hanzi": [
      {
        "c": "口",
        "p": "kǒu",
        "type": "独体字 · Chữ đơn (tượng hình)",
        "st": 3,
        "ord": "nét liền, hình cái miệng",
        "rad": "口 (khẩu)",
        "mean": "miệng",
        "tip": "Chữ tượng hình mô phỏng hình cái MIỆNG đang mở → MIỆNG, mở rộng làm lượng từ đếm miếng/ngụm.",
        "cf": "囗 (wéi – bộ \"vi\", nét vuông đơn giản hơn\")",
        "w": "一口 / 口水 / 门口"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Loại cà phê này ngon lắm, bạn nếm một ngụm thử xem.",
        "answer": "这种咖啡特别好喝，你尝一口试试吧。",
        "answerPy": "Zhè zhǒng kāfēi tèbié hǎohē, nǐ cháng yì kǒu shìshi ba.",
        "note": "V + 一口 — làm gì một ngụm, một miếng; 特别 là từ bài 6.",
        "pair": "……吧"
      },
      {
        "promptLang": "vi",
        "prompt": "Chỉ cần uống một ngụm là biết ngay có ngọt hay không.",
        "answer": "只要喝一口，就知道甜不甜了。",
        "answerPy": "Zhǐyào hē yì kǒu, jiù zhīdào tián bù tián le.",
        "note": "只要……就…… diễn tả điều kiện đủ (ôn lại 甜 đã học ở Bài 3).",
        "pair": "只要……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "一口水",
        "py": "yì kǒu shuǐ",
        "vn": "một ngụm nước"
      },
      {
        "zh": "喝一口",
        "py": "hē yì kǒu",
        "vn": "uống một ngụm"
      },
      {
        "zh": "吃一口",
        "py": "chī yì kǒu",
        "vn": "ăn một miếng"
      },
      {
        "zh": "尝一口",
        "py": "cháng yì kǒu",
        "vn": "nếm một miếng"
      },
      {
        "zh": "一口就喝完了",
        "py": "yì kǒu jiù hē wán le",
        "vn": "một ngụm là hết"
      }
    ],
    "patterns": [
      {
        "s": "V + 一口",
        "m": "Làm gì một ngụm, một miếng"
      },
      {
        "s": "口 (ngụm, miếng) — lượng từ cho lượng vào miệng một lần"
      }
    ]
  },
  {
    "n": 16,
    "zh": "瓶子",
    "py": "píngzi",
    "pos": "Danh từ",
    "vn": "lọ, bình",
    "hv": "bình tử",
    "em": "🍾",
    "lesson": 3,
    "explain": [
      "Vật dụng có cổ nhỏ dùng để đựng chất lỏng."
    ],
    "usage": "Danh từ; cũng dùng làm lượng từ 瓶ế: 一瓶 (một chai/lọ).",
    "collo": [
      "酒瓶子",
      "一个瓶子",
      "空瓶子"
    ],
    "ex_zh": "别让他看见酒瓶子。",
    "ex_py": "Bié ràng tā kànjiàn jiǔ píngzi.",
    "ex_vn": "Đừng để ông ấy nhìn thấy chai rượu.",
    "exList": [
      {
        "zh": "别让他看见酒瓶子。",
        "py": "Bié ràng tā kànjiàn jiǔ píngzi.",
        "vn": "Đừng để ông ấy nhìn thấy chai rượu."
      },
      {
        "zh": "桌子上有一个瓶子，是谁的？",
        "py": "Zhuōzi shang yǒu yí ge píngzi, shì shéi de?",
        "vn": "Trên bàn có một cái lọ, của ai vậy?"
      },
      {
        "zh": "你去楼下买几瓶啤酒吧。",
        "py": "Nǐ qù lóuxià mǎi jǐ píng píjiǔ ba.",
        "vn": "Bạn xuống dưới lầu mua vài chai bia đi."
      }
    ],
    "hanzi": [
      {
        "c": "瓶",
        "p": "píng",
        "type": "上下结构 · Trên-dưới",
        "st": 10,
        "ord": "并 trên → 瓦 dưới",
        "rad": "瓦 (ngõa – ngói, gốm)",
        "mean": "chai, lọ",
        "tip": "并(kết hợp, gộp lại) + 瓦(đồ gốm) → đồ GỐM có hình dáng để ĐỰNG chất lỏng = CHAI, LỌ.",
        "cf": "并 (bìng – \"cùng, và\", không có bộ 瓦\")",
        "w": "瓶子 / 一瓶 / 花瓶"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Mẹ bảo tôi đi lấy một cái chai, vì mẹ muốn đựng nước.",
        "answer": "妈妈让我去拿一个瓶子，因为她想装水。",
        "answerPy": "Māma ràng wǒ qù ná yí ge píngzi, yīnwèi tā xiǎng zhuāng shuǐ.",
        "note": "一个瓶子 (cái chai) khác 一瓶水 (một chai nước).",
        "pair": "因为……"
      },
      {
        "promptLang": "vi",
        "prompt": "Vì bố không được uống rượu nên mẹ giấu hết chai rượu đi.",
        "answer": "因为爸爸不能喝酒，所以妈妈把酒瓶子都藏起来了。",
        "answerPy": "Yīnwèi bàba bù néng hē jiǔ, suǒyǐ māma bǎ jiǔ píngzi dōu cáng qǐlai le.",
        "note": "因为……所以…… kết hợp 把字句 (ôn lại 啤酒 vừa học trong bài này).",
        "pair": "因为……所以……"
      }
    ],
    "colloFull": [
      {
        "zh": "一个瓶子",
        "py": "yí gè píngzi",
        "vn": "một cái chai"
      },
      {
        "zh": "空瓶子",
        "py": "kòng píngzi",
        "vn": "chai rỗng"
      },
      {
        "zh": "酒瓶子",
        "py": "jiǔ píngzi",
        "vn": "chai rượu"
      },
      {
        "zh": "打开瓶子",
        "py": "dǎkāi píngzi",
        "vn": "mở chai"
      },
      {
        "zh": "瓶子里",
        "py": "píngzi li",
        "vn": "trong chai"
      }
    ],
    "patterns": [
      {
        "s": "瓶子 (cái chai) ≠ 瓶 (lượng từ): 一个瓶子 / 一瓶水"
      },
      {
        "s": "打开 + 瓶子",
        "m": "Mở nắp chai"
      }
    ]
  },
  {
    "n": 17,
    "zh": "笔记本(电脑)",
    "py": "bǐjìběn (diànnǎo)",
    "pos": "Danh từ",
    "vn": "máy tính xách tay",
    "hv": "bút ký bản điện não",
    "em": "💻",
    "lesson": 4,
    "explain": [
      "Loại máy tính nhỏ gọn, dễ mang theo."
    ],
    "usage": "Danh từ; lượng từ đi kèm là 个/台: 一个笔记本电脑.",
    "collo": [
      "一个笔记本电脑",
      "买笔记本电脑",
      "换笔记本电脑"
    ],
    "ex_zh": "这个笔记本电脑我去年买的时候要五千块左右。",
    "ex_py": "Zhège bǐjìběn diànnǎo wǒ qùnián mǎi de shíhou yào wǔqiān kuài zuǒyòu.",
    "ex_vn": "Chiếc máy tính xách tay này khi tôi mua năm ngoái giá khoảng năm nghìn đồng.",
    "exList": [
      {
        "zh": "这个笔记本电脑我去年买的时候要五千块左右。",
        "py": "Zhège bǐjìběn diànnǎo wǒ qùnián mǎi de shíhou yào wǔqiān kuài zuǒyòu.",
        "vn": "Chiếc máy tính xách tay này khi tôi mua năm ngoái giá khoảng năm nghìn đồng."
      },
      {
        "zh": "我的笔记本电脑太旧了，我想换一个。",
        "py": "Wǒ de bǐjìběn diànnǎo tài jiù le, wǒ xiǎng huàn yí ge.",
        "vn": "Máy tính xách tay của tôi cũ quá rồi, tôi muốn đổi một cái khác."
      },
      {
        "zh": "小周，你帮我看一下笔记本电脑吧。",
        "py": "Xiǎo Zhōu, nǐ bāng wǒ kàn yíxià bǐjìběn diànnǎo ba.",
        "vn": "Tiểu Chu, bạn giúp tôi xem qua máy tính xách tay chút đi."
      }
    ],
    "hanzi": [
      {
        "c": "脑",
        "p": "nǎo",
        "type": "左右结构 · Trái-phải",
        "st": 10,
        "ord": "月 trái → 甾(biến thể) phải",
        "rad": "月 (nhục – thân thể)",
        "mean": "não, bộ óc",
        "tip": "月(bộ phận cơ thể) + phần còn lại (hình ảnh bộ não) → NÃO; 电脑 = \"não điện\" = MÁY TÍNH.",
        "cf": "恼 (nǎo – \"phiền não\", có bộ 忄\")",
        "w": "电脑 / 笔记本电脑 / 头脑"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Chiếc laptop đó cô ấy mua năm ngoái khoảng tám nghìn, bây giờ rẻ hơn nhiều rồi.",
        "answer": "那个笔记本电脑她去年买的时候要八千块左右，现在便宜多了。",
        "answerPy": "Nàge bǐjìběn diànnǎo tā qùnián mǎi de shíhou yào bāqiān kuài zuǒyòu, xiànzài piányi duō le.",
        "note": "是……的 — nhấn thời gian mua.",
        "pair": "……，现在……"
      },
      {
        "promptLang": "vi",
        "prompt": "Nếu bạn muốn đổi máy tính mới thì tôi có thể giúp bạn xem qua.",
        "answer": "如果你想换新笔记本电脑，我就可以帮你看看。",
        "answerPy": "Rúguǒ nǐ xiǎng huàn xīn bǐjìběn diànnǎo, wǒ jiù kěyǐ bāng nǐ kànkan.",
        "note": "如果……就…… diễn tả giả thiết — kết quả (ôn lại 换 đã học ở Bài 10).",
        "pair": "如果……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "一个笔记本电脑",
        "py": "yí gè bǐjìběn diànnǎo",
        "vn": "một cái laptop"
      },
      {
        "zh": "买笔记本电脑",
        "py": "mǎi bǐjìběn diànnǎo",
        "vn": "mua laptop"
      },
      {
        "zh": "换笔记本电脑",
        "py": "huàn bǐjìběn diànnǎo",
        "vn": "đổi laptop"
      },
      {
        "zh": "用笔记本电脑",
        "py": "yòng bǐjìběn diànnǎo",
        "vn": "dùng laptop"
      },
      {
        "zh": "笔记本电脑很贵",
        "py": "bǐjìběn diànnǎo hěn guì",
        "vn": "laptop rất đắt"
      }
    ],
    "patterns": [
      {
        "s": "笔记本 (sổ tay) + 电脑 = laptop",
        "m": "Máy tính mỏng như quyển sổ"
      },
      {
        "s": "用 + 笔记本电脑 + V",
        "m": "Dùng laptop để làm gì"
      }
    ]
  },
  {
    "n": 18,
    "zh": "电子邮件",
    "py": "diànzǐ yóujiàn",
    "pos": "Danh từ",
    "vn": "email",
    "hv": "điện tử bưu kiện",
    "em": "📧",
    "lesson": 4,
    "explain": [
      "Thư điện tử gửi qua mạng Internet."
    ],
    "usage": "Danh từ; đi cùng động từ 看/发: 看电子邮件, 发电子邮件.",
    "collo": [
      "看电子邮件",
      "发电子邮件",
      "收电子邮件"
    ],
    "ex_zh": "现在我每天起床后的第一件事就是打开电脑，看电子邮件。",
    "ex_py": "Xiànzài wǒ měitiān qǐchuáng hòu de dì-yī jiàn shì jiùshì dǎkāi diànnǎo, kàn diànzǐ yóujiàn.",
    "ex_vn": "Bây giờ mỗi ngày sau khi thức dậy việc đầu tiên tôi làm là mở máy tính, xem email.",
    "exList": [
      {
        "zh": "现在我每天起床后的第一件事就是打开电脑，看电子邮件。",
        "py": "Xiànzài wǒ měitiān qǐchuáng hòu de dì-yī jiàn shì jiùshì dǎkāi diànnǎo, kàn diànzǐ yóujiàn.",
        "vn": "Bây giờ mỗi ngày sau khi thức dậy việc đầu tiên tôi làm là mở máy tính, xem email."
      },
      {
        "zh": "昨天我还能看电子邮件，今天突然就打不开了。",
        "py": "Zuótiān wǒ hái néng kàn diànzǐ yóujiàn, jīntiān tūrán jiù dǎ bu kāi le.",
        "vn": "Hôm qua tôi vẫn xem email được, hôm nay đột nhiên không mở được nữa."
      },
      {
        "zh": "我已经很少写信了。",
        "py": "Wǒ yǐjīng hěn shǎo xiě xìn le.",
        "vn": "Tôi đã rất ít viết thư rồi."
      }
    ],
    "hanzi": [
      {
        "c": "邮",
        "p": "yóu",
        "type": "左右结构 · Trái-phải",
        "st": 7,
        "ord": "由 trái → 阝 phải",
        "rad": "阝 (ấp – vùng đất)",
        "mean": "bưu chính, gửi thư",
        "tip": "由(từ, nguồn gốc) + 阝(vùng đất, trạm dịch) → nơi TRUNG CHUYỂN thư từ = BƯU CHÍNH; 邮件 = thư từ, 电子邮件 = thư điện tử.",
        "cf": "油 (yóu – \"dầu\", có bộ 氵\")",
        "w": "电子邮件 / 邮件 / 邮局"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Việc đầu tiên tôi làm mỗi sáng là mở máy tính xem email.",
        "answer": "我每天早上第一件事就是打开电脑看电子邮件。",
        "answerPy": "Wǒ měitiān zǎoshang dì-yī jiàn shì jiùshì dǎkāi diànnǎo kàn diànzǐ yóujiàn.",
        "note": "第一件事就是 + V diễn tả việc làm đầu tiên.",
        "pair": "一……就……"
      },
      {
        "promptLang": "vi",
        "prompt": "Nếu bạn có việc gì thì gửi email cho tôi nhé.",
        "answer": "如果你有事，就给我发电子邮件吧。",
        "answerPy": "Rúguǒ nǐ yǒu shì, jiù gěi wǒ fā diànzǐ yóujiàn ba.",
        "note": "如果……就…… diễn tả giả thiết — kết quả.",
        "pair": "如果……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "发电子邮件",
        "py": "fā diànzǐ yóujiàn",
        "vn": "gửi email"
      },
      {
        "zh": "收电子邮件",
        "py": "shōu diànzǐ yóujiàn",
        "vn": "nhận email"
      },
      {
        "zh": "看电子邮件",
        "py": "kàn diànzǐ yóujiàn",
        "vn": "xem email"
      },
      {
        "zh": "收到电子邮件",
        "py": "shōu dào diànzǐ yóujiàn",
        "vn": "nhận được email"
      },
      {
        "zh": "电子邮件地址",
        "py": "diànzǐ yóujiàn dìzhǐ",
        "vn": "địa chỉ email"
      }
    ],
    "patterns": [
      {
        "s": "发 / 收 + 电子邮件",
        "m": "Gửi / nhận email"
      },
      {
        "s": "电子 + 邮件",
        "m": "Thư từ (邮件) điện tử (电子)"
      }
    ]
  },
  {
    "n": 19,
    "zh": "习惯",
    "py": "xíguàn",
    "pos": "Động từ/Danh từ",
    "vn": "quen; thói quen",
    "hv": "tập quán",
    "em": "🔁",
    "lesson": 4,
    "explain": [
      "Đã trở nên quen thuộc với điều gì đó, hoặc bản thân điều lặp lại đã thành thói quen."
    ],
    "usage": "Động từ: 习惯 + V (习惯用电脑); Danh từ: 好习惯, 有习惯.",
    "collo": [
      "习惯用",
      "好习惯",
      "还没习惯"
    ],
    "ex_zh": "已经习惯用电脑来学习和工作了。",
    "ex_py": "Yǐjīng xíguàn yòng diànnǎo lái xuéxí hé gōngzuò le.",
    "ex_vn": "Đã quen dùng máy tính để học tập và làm việc rồi.",
    "exList": [
      {
        "zh": "已经习惯用电脑来学习和工作了。",
        "py": "Yǐjīng xíguàn yòng diànnǎo lái xuéxí hé gōngzuò le.",
        "vn": "Đã quen dùng máy tính để học tập và làm việc rồi."
      },
      {
        "zh": "我已经很少写信，也很少用笔写字，已经习惯用电脑了。",
        "py": "Wǒ yǐjīng hěn shǎo xiě xìn, yě hěn shǎo yòng bǐ xiě zì, yǐjīng xíguàn yòng diànnǎo le.",
        "vn": "Tôi đã rất ít viết thư, cũng rất ít dùng bút viết chữ, đã quen dùng máy tính rồi."
      },
      {
        "zh": "哪一天突然没有了电脑，我们怎么办呢？",
        "py": "Nǎ yì tiān tūrán méiyǒule diànnǎo, wǒmen zěnme bàn ne?",
        "vn": "Nếu một ngày nào đó bỗng nhiên không có máy tính nữa, chúng ta phải làm sao đây?"
      }
    ],
    "hanzi": [
      {
        "c": "惯",
        "p": "guàn",
        "type": "左右结构 · Trái-phải",
        "st": 11,
        "ord": "忄 trái → 贯 phải",
        "rad": "忄 (tâm – tim, tâm trí)",
        "mean": "quen thuộc",
        "tip": "忄(tâm trí) + 贯(xuyên suốt, liên tục) → điều gì đó LẶP LẠI LIÊN TỤC trong tâm trí = QUEN THUỘC.",
        "cf": "贯 (guàn – \"xuyên suốt\", không có bộ 忄\")",
        "w": "习惯 / 不习惯 / 好习惯"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tôi đã quen dùng máy tính để học và làm việc, nên không có máy tính là rất bất tiện.",
        "answer": "因为我已经习惯用电脑来学习和工作了，所以没有电脑很不方便。",
        "answerPy": "Yīnwèi wǒ yǐjīng xíguàn yòng diànnǎo lái xuéxí hé gōngzuò le, suǒyǐ méiyǒu diànnǎo hěn bù fāngbiàn.",
        "note": "习惯 + V — quen làm gì; 方便 là từ bài 10.",
        "pair": "因为……所以……"
      },
      {
        "promptLang": "vi",
        "prompt": "Chỉ cần bạn quen dùng máy tính thì sẽ tiện hơn nhiều.",
        "answer": "只要你习惯用电脑，就会方便多了。",
        "answerPy": "Zhǐyào nǐ xíguàn yòng diànnǎo, jiù huì fāngbiàn duō le.",
        "note": "只要……就…… diễn tả điều kiện đủ (ôn lại 方便 đã học ở Bài 10).",
        "pair": "只要……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "好习惯",
        "py": "hǎo xíguàn",
        "vn": "thói quen tốt"
      },
      {
        "zh": "习惯用",
        "py": "xíguàn yòng",
        "vn": "quen dùng"
      },
      {
        "zh": "还没习惯",
        "py": "hái méi xíguàn",
        "vn": "vẫn chưa quen"
      },
      {
        "zh": "生活习惯",
        "py": "shēnghuó xíguàn",
        "vn": "thói quen sinh hoạt"
      },
      {
        "zh": "养成习惯",
        "py": "yǎngchéng xíguàn",
        "vn": "hình thành thói quen"
      }
    ],
    "patterns": [
      {
        "s": "Sub + 习惯 + V (động từ)",
        "m": "Ai đó quen làm gì"
      },
      {
        "s": "好 / 坏 + 习惯 (danh từ)",
        "m": "Thói quen tốt / xấu"
      }
    ]
  }
];

const wuData = [
  {img:'📚',label:'图书馆',py:'túshūguǎn',letter:'A'},
  {img:'📖',label:'词典',py:'cídiǎn',letter:'B'},
  {img:'🥢',label:'筷子',py:'kuàizi',letter:'C'},
  {img:'🍺',label:'啤酒',py:'píjiǔ',letter:'D'},
  {img:'🚇',label:'地铁',py:'dìtiě',letter:'E'},
  {img:'💻',label:'笔记本电脑',py:'bǐjìběn diànnǎo',letter:'F'},
];

var dialogData = [
  {scene:'在教室 · Trong lớp học',
   preQuiz:[
     {q:'小明要去哪儿做什么？',opts:['去图书馆借书','去图书馆还书','去教室上课'],ans:0},
     {q:'同学请小明帮忙做什么？',opts:['把词典还了','把灯关了','把书借了'],ans:0},
     {q:'小明提醒同学做什么？',opts:['离开教室时把灯关了','别忘了还书','早点儿回来'],ans:0},
   ],
   lines:[
     {sp:0,zh:'我先走了。',py:'Wǒ xiān zǒu le.',vn:'Mình đi trước đây.'},
     {sp:1,zh:'你去哪儿？',py:'Nǐ qù nǎr?',vn:'Bạn đi đâu vậy?'},
     {sp:0,zh:'我去图书馆借本书。',py:'Wǒ qù túshūguǎn jiè běn shū.',vn:'Mình đi thư viện mượn một quyển sách.'},
     {sp:1,zh:'帮我把这本词典还了吧。',py:'Bāng wǒ bǎ zhè běn cídiǎn huánle ba.',vn:'Giúp mình trả quyển từ điển này nhé.'},
     {sp:0,zh:'好，等一会儿你离开教室的时候，记得把灯关了。',py:'Hǎo, děng yíhuìr nǐ líkāi jiàoshì de shíhou, jìde bǎ dēng guān le.',vn:'Được, lát nữa khi bạn rời khỏi lớp học, nhớ tắt đèn nhé.'},
     {sp:1,zh:'好的，放心吧。',py:'Hǎo de, fàngxīn ba.',vn:'Được, yên tâm đi.'},
   ]},
  {scene:'在会议室 · Trong phòng họp',
   preQuiz:[
     {q:'周明提醒小丽做什么？',opts:['会议结束后把空调关了','把灯关了','把电脑关了'],ans:0},
     {q:'王经理什么时候来的电话？',opts:['两点左右','三点左右','刚才'],ans:0},
     {q:'王经理正在做什么？',opts:['坐地铁来公司','已经到公司了','在打车'],ans:0},
   ],
   lines:[
     {sp:0,zh:'会议结束后，别忘记把空调关了。',py:'Huìyì jiéshù hòu, bié wàngjì bǎ kōngtiáo guān le.',vn:'Sau khi họp xong, đừng quên tắt máy điều hòa nhé.'},
     {sp:1,zh:'好的。王经理两点左右来了个电话。',py:'Hǎo de. Wáng jīnglǐ liǎng diǎn zuǒyòu láile ge diànhuà.',vn:'Được ạ. Giám đốc Vương lúc 2 giờ có gọi điện đến.'},
     {sp:0,zh:'他已经到北京了？',py:'Tā yǐjīng dào Běijīng le?',vn:'Ông ấy đã đến Bắc Kinh rồi à?'},
     {sp:1,zh:'是的，他正坐地铁来我们公司呢。',py:'Shì de, tā zhèng zuò dìtiě lái wǒmen gōngsī ne.',vn:'Vâng, ông ấy đang đi tàu điện ngầm đến công ty mình đấy.'},
     {sp:0,zh:'等他到了就告诉我。',py:'Děng tā dàole jiù gàosu wǒ.',vn:'Đợi khi ông ấy đến thì báo cho tôi nhé.'},
   ]},
  {scene:'在客厅 · Trong phòng khách',
   preQuiz:[
     {q:'妈妈让儿子去做什么？',opts:['去拿一双筷子','去买啤酒','去关灯'],ans:0},
     {q:'今天是什么日子？',opts:['爸爸的生日','妈妈的生日','儿子的生日'],ans:0},
     {q:'爸爸能喝酒吗？',opts:['一口都不能喝','可以喝一点儿','可以随便喝'],ans:0},
   ],
   lines:[
     {sp:0,zh:'还差一双筷子，你去拿一下。',py:'Hái chà yì shuāng kuàizi, nǐ qù ná yíxià.',vn:'Còn thiếu một đôi đũa, con lấy giúp mẹ đi.'},
     {sp:1,zh:'今天怎么做了这么多菜？',py:'Jīntiān zěnme zuòle zhème duō cài?',vn:'Sao hôm nay mẹ nấu nhiều món thế?'},
     {sp:0,zh:'今天是你爸爸的生日。',py:'Jīntiān shì nǐ bàba de shēngrì.',vn:'Hôm nay là sinh nhật bố con đấy.'},
     {sp:1,zh:'真的啊？我把爸爸的生日忘了。那我们今天喝点儿啤酒吧。',py:'Zhēn de a? Wǒ bǎ bàba de shēngrì wàng le. Nà wǒmen jīntiān hē diǎnr píjiǔ ba.',vn:'Thật á? Con quên mất sinh nhật bố rồi. Vậy hôm nay chúng ta uống chút bia đi.'},
     {sp:0,zh:'医生说你爸爸一口酒都不能喝，别让他看见酒瓶子。',py:'Yīshēng shuō nǐ bàba yì kǒu jiǔ dōu bù néng hē, bié ràng tā kànjiàn jiǔ píngzi.',vn:'Bác sĩ nói bố con không được uống một ngụm rượu nào cả, đừng để ông ấy nhìn thấy chai rượu.'},
   ]},
  {scene:'独白 · Tự thuật (thói quen dùng máy tính)',
   preQuiz:[
     {q:'这个笔记本电脑去年买的时候多少钱？',opts:['五千块左右','八千块左右','三千块左右'],ans:0},
     {q:'他想把电脑怎么样？',opts:['卖了，再买更好的','送人','扔了'],ans:0},
     {q:'他现在习惯用什么学习和工作？',opts:['电脑','笔和纸','手机'],ans:0},
   ],
   lines:[
     {sp:0,zh:'这个笔记本电脑我去年买的时候要五千块左右，现在便宜多了。',py:'Zhège bǐjìběn diànnǎo wǒ qùnián mǎi de shíhou yào wǔqiān kuài zuǒyòu, xiànzài piányi duō le.',vn:'Chiếc máy tính xách tay này khi tôi mua năm ngoái giá khoảng năm nghìn đồng, bây giờ rẻ hơn nhiều rồi.'},
     {sp:0,zh:'我想把这个电脑卖了，再买一个更好的。',py:'Wǒ xiǎng bǎ zhège diànnǎo mài le, zài mǎi yí ge gèng hǎo de.',vn:'Tôi muốn bán chiếc máy tính này đi, rồi mua một cái tốt hơn.'},
     {sp:0,zh:'现在我每天起床后的第一件事就是打开电脑，看电子邮件。',py:'Xiànzài wǒ měitiān qǐchuáng hòu de dì-yī jiàn shì jiùshì dǎkāi diànnǎo, kàn diànzǐ yóujiàn.',vn:'Bây giờ mỗi ngày sau khi thức dậy việc đầu tiên tôi làm là mở máy tính, xem email.'},
     {sp:0,zh:'我已经很少写信，也很少用笔写字，已经习惯用电脑来学习和工作了。',py:'Wǒ yǐjīng hěn shǎo xiě xìn, yě hěn shǎo yòng bǐ xiě zì, yǐjīng xíguàn yòng diànnǎo lái xuéxí hé gōngzuò le.',vn:'Tôi đã rất ít viết thư, cũng rất ít dùng bút viết chữ, đã quen dùng máy tính để học tập và làm việc rồi.'},
     {sp:0,zh:'哪一天突然没有了电脑，我们怎么办呢？',py:'Nǎ yì tiān tūrán méiyǒule diànnǎo, wǒmen zěnme bàn ne?',vn:'Nếu một ngày nào đó bỗng nhiên không có máy tính nữa, chúng ta phải làm sao đây?'},
   ]},
];

// ══════════════════════════════════════════
// PHẦN 1 · GHÉP TỪ (Collocation)
// ══════════════════════════════════════════
var matchData = [
  {left:'服务员，请再拿一双', right:'筷子'},
  {left:'我每天坐', right:'地铁上班'},
  {left:'下午的会议几点', right:'结束'},
  {left:'早上起床以后，我先看', right:'电子邮件'},
  {left:'房间里太热了，把空调', right:'打开吧'},
  {left:'这本词典是从图书馆', right:'借来的'},
  {left:'走的时候别忘记', right:'关灯'},
];

// ══════════════════════════════════════════
// PHẦN 3a · ĐIỀN TỪ
// ══════════════════════════════════════════
var fillData = [
  {pre:'这本书我还没看完，能不能下个星期再', blank:'还', post:'给图书馆？', hint:'(trả lại)', ans:'还', exp:'还 đọc huán = trả lại (还给 + nơi/người); 还没 ở đầu câu đọc hái = vẫn chưa.'},
  {pre:'A：今天我没带笔记本电脑，能', blank:'借', post:'你的用一下吗？B：可以，你用吧。', hint:'(mượn)', ans:'借', exp:'借 + đồ của ai + 用一下 = mượn dùng một lát; 用 (bài 5).'},
  {pre:'这个字我不认识，你的', blank:'词典', post:'能给我看看吗？', hint:'(từ điển)', ans:'词典', exp:'词典 = từ điển; động từ lặp 看看 = xem thử một chút (HSK2).'},
  {pre:'教室里一个人也没有，但是', blank:'灯', post:'还开着。', hint:'(đèn)', ans:'灯', exp:'灯开着 = đèn đang bật (V + 着 chỉ trạng thái, HSK2); 一个人也没有 (bài 1).'},
  {pre:'今天的', blank:'会议', post:'比上次长多了，从两点一直开到五点。', hint:'(cuộc họp)', ans:'会议', exp:'会议 = cuộc họp; ôn A 比 B + tính từ + 多了 (bài 10) và 一直 (bài 1).'},
  {pre:'A：比赛什么时候', blank:'结束', post:'？B：大概四点半吧。', hint:'(kết thúc)', ans:'结束', exp:'结束 = kết thúc, trái nghĩa với 开始; 比赛 (bài 4).'},
  {pre:'昨天我', blank:'忘记', post:'给妈妈打电话了，她很着急。', hint:'(quên)', ans:'忘记', exp:'忘记 + việc cần làm = quên làm gì; 着急 = sốt ruột (bài 1).'},
  {pre:'外面三十八度，没有', blank:'空调', post:'的房间热得我睡不着。', hint:'(máy điều hoà)', ans:'空调', exp:'没有空调的房间 = căn phòng không có điều hoà; ôn 热得 + kết quả (HSK2) và 睡不着 (bài 6).'},
  {pre:'A：电视你看完了吗？B：看完了，我已经把电视', blank:'关', post:'了。', hint:'(tắt)', ans:'关', exp:'Câu 把: 把 + vật (电视) + 关 + 了 = đã tắt TV đi; sau động từ phải có 了.'},
  {pre:'服务员，我们多了一个人，请再拿一', blank:'双', post:'筷子来。', hint:'(đôi)', ans:'双', exp:'双 = đôi, dùng cho vật đi theo cặp: 一双筷子.'},
  {pre:'这个蛋糕太甜了，我只吃了一', blank:'口', post:'就不想吃了。', hint:'(miếng, ngụm)', ans:'口', exp:'口 = miếng / ngụm: 一口; 只 = chỉ, 甜 (bài 3).'},
  {pre:'A：这个', blank:'瓶子', post:'里是什么？B：是牛奶，昨天买的。', hint:'(chai, lọ)', ans:'瓶子', exp:'瓶子 = cái chai/lọ; 瓶子里 = trong chai.'},
  {pre:'A：你怎么每天早上都喝咖啡？B：上班以后就有了这个', blank:'习惯', post:'，不喝就想睡觉。', hint:'(thói quen)', ans:'习惯', exp:'习惯 ở đây là danh từ = thói quen (这个习惯); 不……就…… = không … thì ….'},
  {pre:'你', blank:'把', post:'这些面包吃了吧，明天就不新鲜了。', hint:'(đem, lấy)', ans:'把', exp:'Câu 把: 把 + vật xác định (这些面包) + 吃了 = ăn hết đi; 新鲜 (bài 3).'},
  {pre:'A：从这儿到地铁站要走多长时间？B：十分钟', blank:'左右', post:'吧，不远。', hint:'(khoảng, chừng)', ans:'左右', exp:'左右 đứng SAU số lượng / thời gian: 十分钟左右 = khoảng mười phút.'}
];

// ══════════════════════════════════════════
// PHẦN 3b · SẮP XẾP
// ══════════════════════════════════════════
var sortData = [
  {words:['你','把','空调','开','一下','吧','，','大家','都','很','热','。'], ans:'你把空调开一下吧，大家都很热。', audio:'你把空调开一下吧，大家都很热。'},
  {words:['我','坐','地铁','去','公司','，','半个小时','就','到','了','。'], ans:'我坐地铁去公司，半个小时就到了。', audio:'我坐地铁去公司，半个小时就到了。'},
  {words:['哥哥','把','那','两','个','啤酒','瓶子','拿','走','了','。'], ans:'哥哥把那两个啤酒瓶子拿走了。', audio:'哥哥把那两个啤酒瓶子拿走了。'},
  {words:['我','还','不','太','习惯','用','筷子','吃','面条儿','。'], ans:'我还不太习惯用筷子吃面条儿。', audio:'我还不太习惯用筷子吃面条儿。'},
  {words:['会议','结束','以后','，','经理','让','我','把','这件','事情','告诉','大家','。'], ans:'会议结束以后，经理让我把这件事情告诉大家。', audio:'会议结束以后，经理让我把这件事情告诉大家。'},
  {words:['这个','笔记本电脑','是','我','从','同事','那儿','借','的','。'], ans:'这个笔记本电脑是我从同事那儿借的。', audio:'这个笔记本电脑是我从同事那儿借的。'},
  {words:['我','每天','早上','先','看','电子邮件','，','再','去','跑步','。'], ans:'我每天早上先看电子邮件，再去跑步。', audio:'我每天早上先看电子邮件，再去跑步。'},
  {words:['图书馆','里','很','安静','，','大家','都','在','看书','。'], ans:'图书馆里很安静，大家都在看书。', audio:'图书馆里很安静，大家都在看书。'},
];

// ══════════════════════════════════════════
// PHẦN 3c · SỬA LỖI SAI
// ══════════════════════════════════════════
var errorFixData = [
  {wrong:'我把作业写。',
   opts:['我写作业把完了。','我把作业写完了。','我把写完作业了。','我把作业完写了。'], ans:1,
   exp:'Câu 把: sau động từ phải có thành phần khác (完了 / 好 / 了), không dừng ở một động từ trơn; 完 đứng ngay sau 写.'},
  {wrong:'我把那本词典没还给他。',
   opts:['我没把那本词典还给他了。','我把没那本词典还给他。','我没把那本词典还了给他。','我没把那本词典还给他。'], ans:3,
   exp:'Phủ định đặt TRƯỚC 把: 没把……; việc chưa làm dùng 没, không thêm 了 (ôn 没 + V, HSK2).'},
  {wrong:'我把一本书借了。',
   opts:['我借了一本书。','我把一本书借。','我把了一本书借。','我一本书把借了。'], ans:0,
   exp:'Vật sau 把 phải là vật đã xác định (这本、那本); “một quyển sách” bất kỳ thì nói 借了一本书.'},
  {wrong:'你把灯能关一下吗？',
   opts:['你能关一下把灯吗？','你把能灯关一下吗？','你能把灯关一下吗？','你能把灯一下关吗？'], ans:2,
   exp:'Động từ năng nguyện (能、想、要) đứng TRƯỚC 把; 一下 đứng sau động từ 关.'},
  {wrong:'他把了我的笔记本电脑借走。',
   opts:['他借走了把我的笔记本电脑。','他把我的笔记本电脑借走了。','他把我的笔记本电脑走借了。','他借把我的笔记本电脑走了。'], ans:1,
   exp:'了 đứng cuối cụm động từ: 把 + vật + 借走 + 了; không đặt 了 ngay sau 把, 走 là kết quả nên đứng sau 借.'},
  {wrong:'他喝了两个口啤酒。',
   opts:['他喝了两口啤酒。','他喝了啤酒两口。','他两口喝了啤酒。','他喝了两双啤酒。'], ans:0,
   exp:'口 tự là lượng từ (ngụm), đứng ngay sau số, không thêm 个; số + lượng từ đứng trước danh từ 啤酒.'},
  {wrong:'请给我们两个筷子。',
   opts:['请给我们二双筷子。','请给我们两双个筷子。','请两双筷子给我们。','请给我们两双筷子。'], ans:3,
   exp:'Đũa đi theo đôi nên dùng lượng từ 双; trước lượng từ nói 两, không nói 二 (ôn HSK1).'},
  {wrong:'我还没习惯了这儿的天气。',
   opts:['我还不习惯了这儿的天气。','我还没习惯这儿的天气。','我没还习惯这儿的天气。','我还没这儿的天气习惯。'], ans:1,
   exp:'还没 + 习惯 + đối tượng = vẫn chưa quen; 没 không đi cùng 了, 还 đứng trước 没.'},
  {wrong:'会议左右三点结束。',
   opts:['会议三点结束左右。','会议三点左右结束。','会议在左右三点结束。','会议结束三点左右。'], ans:1,
   exp:'左右 đứng ngay sau thời điểm, cả cụm 三点左右 đặt trước động từ 结束 (không đặt thời gian sau động từ như tiếng Việt).'}
];

// ══════════════════════════════════════════
// LUYỆN NÓI
// ══════════════════════════════════════════
var speakingData = {
  mode: 'ai-speak',
  intro: 'Mỗi câu là một tình huống thật, trả lời về chính bạn bằng từ và mẫu câu của Bài 11 (câu chữ 把: A 把 B + động từ + 了/完/好…, 习惯 + động từ). Bấm 🎙️ rồi nói bằng tiếng Trung — AI sẽ nghe, ghi lại câu bạn nói và chấm theo Nội dung · Mẫu câu · Từ vựng · Độ trôi chảy. Tự trả lời trước rồi mới mở “Câu mẫu” để đối chiếu.',
  tasks: [
    {
      situation: 'Bạn về sau cùng ở văn phòng. Đồng nghiệp gọi điện hỏi bạn đã tắt hết đồ điện chưa.',
      q_zh: '你走的时候，办公室里的东西都关好了吗？',
      q_py: 'Nǐ zǒu de shíhou, bàngōngshì li de dōngxi dōu guānhǎo le ma?',
      q_vn: 'Lúc bạn về, đồ đạc trong văn phòng đã tắt hết chưa?',
      grammar: { label: 'Câu 把: 把 + đồ vật + 关 + 了/好', any: ['把'] },
      need: [
        { label: 'Kể ít nhất hai thứ đã tắt', any: ['灯', '空调', '电脑', '电视'] },
        { label: 'Nói đã tắt', any: ['关了', '关好', '关上'] }
      ],
      bonus: { label: 'Bảo người kia yên tâm', any: ['放心'] },
      vocab: ['灯', '空调', '关'],
      minLen: 14,
      sample: '我走的时候把灯和空调都关了，电脑也关好了，没问题。',
      sample_py: 'Wǒ zǒu de shíhou bǎ dēng hé kōngtiáo dōu guān le, diànnǎo yě guānhǎo le, méi wèntí.',
      sample_vn: 'Lúc về tôi đã tắt cả đèn lẫn điều hoà, máy tính cũng tắt xong rồi, không vấn đề gì đâu.',
      tip: 'Sau 把 + đồ vật phải có động từ + 了/好: 把灯关了 — không nói 把灯关 rồi dừng.'
    },
    {
      situation: 'Bạn cùng lớp hỏi bạn có hay đến thư viện không, lần trước mượn gì.',
      q_zh: '你经常去图书馆吗？上次借了什么？还了没有？',
      q_py: 'Nǐ jīngcháng qù túshūguǎn ma? Shàng cì jièle shénme? Huánle méiyǒu?',
      q_vn: 'Bạn có hay đến thư viện không? Lần trước mượn gì? Đã trả chưa?',
      grammar: { label: 'Câu 把: 把 + sách/từ điển + 还 + 了/给…', any: ['把'] },
      need: [
        { label: 'Nói mượn gì', any: ['借'] },
        { label: 'Nói đã trả hay chưa', any: ['还了', '还给', '还没'] }
      ],
      bonus: { label: 'Nói bao lâu đi một lần', any: ['次', '每个星期', '每个月'] },
      vocab: ['图书馆', '借', '还', '词典'],
      minLen: 18,
      sample: '我一个月去两三次图书馆。上次借了一本汉语词典，昨天已经把它还了。',
      sample_py: 'Wǒ yí ge yuè qù liǎng sān cì túshūguǎn. Shàng cì jièle yì běn Hànyǔ cídiǎn, zuótiān yǐjīng bǎ tā huán le.',
      sample_vn: 'Mỗi tháng tôi đến thư viện hai ba lần. Lần trước mượn một cuốn từ điển tiếng Hán, hôm qua đã trả rồi.',
      tip: '还 = trả lại đọc huán; vật đã nhắc đến rồi có thể nói 把它还了.'
    },
    {
      situation: 'Cuộc họp chiều nay vừa xong, sếp hỏi bạn sẽ làm gì tiếp theo.',
      q_zh: '今天下午开完会，你还要做什么？',
      q_py: 'Jīntiān xiàwǔ kāiwán huì, nǐ hái yào zuò shénme?',
      q_vn: 'Chiều nay họp xong, bạn còn phải làm gì nữa?',
      grammar: { label: 'Câu 把: 把 + việc/đồ + động từ + 好/完', any: ['把'] },
      need: [
        { label: 'Nói việc phải làm', any: ['电子邮件', '告诉', '写', '准备'] },
        { label: 'Nói làm xong hay khi nào xong', any: ['写好', '写完', '做完', '准备好', '以前', '点'] }
      ],
      bonus: { label: 'Dùng 先……再…… (bài 9)', any: ['先'] },
      vocab: ['会议', '电子邮件'],
      minLen: 16,
      sample: '我先把今天会议的事情写好，再给大家写一个电子邮件，五点以前能写完。',
      sample_py: 'Wǒ xiān bǎ jīntiān huìyì de shìqing xiěhǎo, zài gěi dàjiā xiě yí ge diànzǐ yóujiàn, wǔ diǎn yǐqián néng xiěwán.',
      sample_vn: 'Tôi sẽ viết xong nội dung cuộc họp hôm nay trước, rồi viết một email cho mọi người, trước năm giờ là viết xong.',
      tip: '先 đứng trước 把: 先把……写好，再…… — không nói 把……先写好 khi muốn kể thứ tự việc.'
    },
    {
      situation: 'Một người bạn nước ngoài mới sang Việt Nam hỏi bạn có quen dùng máy tính để học không.',
      q_zh: '你现在习惯用电脑学习，还是习惯用铅笔写？',
      q_py: 'Nǐ xiànzài xíguàn yòng diànnǎo xuéxí, háishi xíguàn yòng qiānbǐ xiě?',
      q_vn: 'Bây giờ bạn quen học bằng máy tính hay quen viết bằng bút?',
      grammar: { label: '习惯 + động từ (quen làm gì)', any: ['习惯'] },
      need: [
        { label: 'Chọn máy tính hay bút', any: ['电脑', '笔记本', '铅笔', '笔'] },
        { label: 'Nói khi nào dùng cái kia', any: ['的时候', '但是', '还是'] }
      ],
      bonus: { label: 'Nêu lý do bằng 因为', any: ['因为', '所以'] },
      vocab: ['习惯', '笔记本电脑'],
      minLen: 18,
      sample: '上大学以后，我习惯用笔记本电脑做作业了，但是学汉字的时候，我还是用铅笔写。',
      sample_py: 'Shàng dàxué yǐhòu, wǒ xíguàn yòng bǐjìběn diànnǎo zuò zuòyè le, dànshì xué Hànzì de shíhou, wǒ háishi yòng qiānbǐ xiě.',
      sample_vn: 'Từ khi lên đại học tôi đã quen làm bài tập bằng máy tính xách tay, nhưng lúc học chữ Hán tôi vẫn viết bằng bút chì.',
      tip: '习惯 đứng trước cả cụm việc: 习惯用电脑做作业; đã quen thì thêm 了 ở cuối: 习惯……了.'
    },
    {
      situation: 'Tối nay nhà có khách, mẹ hỏi bạn giúp được gì.',
      q_zh: '今天晚上家里有客人，你能帮妈妈做什么？',
      q_py: 'Jīntiān wǎnshang jiā li yǒu kèrén, nǐ néng bāng māma zuò shénme?',
      q_vn: 'Tối nay nhà có khách, con giúp mẹ được việc gì?',
      grammar: { label: 'Câu 把: 把 + đồ vật + động từ + 好', any: ['把'] },
      need: [
        { label: 'Kể việc chuẩn bị bàn ghế / bát đũa', any: ['桌子', '椅子', '筷子', '杯子'] },
        { label: 'Kể đồ uống / món ăn', any: ['啤酒', '饮料', '水果', '菜'] }
      ],
      bonus: { label: 'Dùng 先……再……', any: ['先'] },
      vocab: ['双', '筷子', '啤酒'],
      minLen: 18,
      sample: '我先把桌子和椅子搬好，再给每个人拿一双筷子，还要给爸爸和客人准备几杯啤酒。',
      sample_py: 'Wǒ xiān bǎ zhuōzi hé yǐzi bānhǎo, zài gěi měi ge rén ná yì shuāng kuàizi, hái yào gěi bàba hé kèrén zhǔnbèi jǐ bēi píjiǔ.',
      sample_vn: 'Con sẽ kê bàn ghế cho xong trước, rồi lấy cho mỗi người một đôi đũa, còn chuẩn bị vài cốc bia cho bố và khách.',
      tip: 'Đũa dùng lượng từ 双 (一双筷子), bia rót cốc dùng 杯 (一杯啤酒).'
    }
  ]
};

// ══════════════════════════════════════════
// LUYỆN DỊCH (Việt → Trung)
// ══════════════════════════════════════════
var translateData = [
  {vi:'Chiếc xe đạp này bạn mượn của ai vậy? Vẫn còn mới lắm.', zh:'你这辆自行车是跟谁借的？还很新呢。', py:'Nǐ zhè liàng zìxíngchē shì gēn shéi jiè de? Hái hěn xīn ne.'},
  {vi:'Tôi đã ăn hết chỗ hoa quả mẹ mua rồi.', zh:'我把妈妈买的水果都吃完了。', py:'Wǒ bǎ māma mǎi de shuǐguǒ dōu chīwán le.'},
  {vi:'Thư viện trường chúng tôi rất lớn, mỗi lần có thể mượn năm cuốn sách.', zh:'我们学校的图书馆很大，每次可以借五本书。', py:'Wǒmen xuéxiào de túshūguǎn hěn dà, měi cì kěyǐ jiè wǔ běn shū.'},
  {vi:'Tuy anh ấy đã sống ở Trung Quốc hai năm nhưng vẫn chưa quen uống trà ở đây.', zh:'虽然他在中国住了两年了，但是还没习惯喝这儿的茶。', py:'Suīrán tā zài Zhōngguó zhùle liǎng nián le, dànshì hái méi xíguàn hē zhèr de chá.'},
  {vi:'Họp xong rồi, mọi người tắt máy tính xách tay đi.', zh:'会议结束了，大家把笔记本电脑关了吧。', py:'Huìyì jiéshù le, dàjiā bǎ bǐjìběn diànnǎo guān le ba.'},
  {vi:'Từ nhà tôi đến công ty đi tàu điện ngầm mất khoảng bốn mươi phút.', zh:'从我家到公司坐地铁要四十分钟左右。', py:'Cóng wǒ jiā dào gōngsī zuò dìtiě yào sìshí fēnzhōng zuǒyòu.'}
];

// ══════════════════════════════════════════
// LUYỆN DỊCH (Trung → Việt) — nội dung KHÁC với chiều Việt→Trung ở trên
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:'Hôm nay trên tàu điện ngầm đông người quá, tôi phải đứng suốt.', zh:'今天地铁上人太多了，我一直站着。', py:'Jīntiān dìtiě shang rén tài duō le, wǒ yìzhí zhànzhe.'},
  {vi:'Bạn đóng cửa giúp tôi một chút được không? Bên ngoài hơi lạnh.', zh:'你帮我把门关一下好吗？外面有点儿冷。', py:'Nǐ bāng wǒ bǎ mén guān yíxià hǎo ma? Wàimiàn yǒudiǎnr lěng.'},
  {vi:'Lần sau đến nhà tôi đừng mang bia nữa nhé, bố tôi không uống được.', zh:'下次来我家别带啤酒了，我爸爸不能喝。', py:'Xià cì lái wǒ jiā bié dài píjiǔ le, wǒ bàba bù néng hē.'},
];

// ══════════════════════════════════════════
// LUYỆN NGHE — đề nghe THẬT từ HSK标准教程3 练习册 (sách bài tập Bài 11)
// Audio gốc duy nhất chứa đủ 20 câu (Phần 1+2+3+4 của đề gốc):
//  - Phần 1 (câu 1-5, gốc: nghe chọn tranh) + Phần 2 (câu 6-10, gốc: nghe
//    phán đoán đúng/sai) → gộp thành 10 câu ĐIỀN CHÍNH TẢ.
//  - Phần 3 (câu 11-15) + Phần 4 (câu 16-20) → 10 câu TRẮC NGHIỆM, kèm các
//    dòng nghe-điền-cụm-từ-ngắn trước khi chọn đáp án, giữ đúng như đề gốc.
// ══════════════════════════════════════════
var listenData = {
  type: 'workbook',
  audio: "/audio/hsk3-bai-11/listen-full.mp3",
  dictation: [
    {num:1, lines:[
      {speaker:"男", pre:"", blank:"这个花瓶真漂亮，在哪儿买的", post:"？",
       py:"Zhège huāpíng zhēn piàoliang, zài nǎr mǎi de?",
       vn:"Cái bình hoa này đẹp thật, mua ở đâu vậy?"},
      {speaker:"女", pre:"", blank:"我家楼下的商店，我带你去看看", post:"。",
       py:"Wǒ jiā lóuxià de shāngdiàn, wǒ dài nǐ qù kànkan.",
       vn:"Cửa hàng dưới nhà mình đấy, mình dẫn bạn đi xem thử."}]},
    {num:2, lines:[
      {speaker:"男", pre:"", blank:"把词典还我吧，我要用一下", post:"。",
       py:"Bǎ cídiǎn huán wǒ ba, wǒ yào yòng yíxià.",
       vn:"Trả từ điển cho tôi đi, tôi cần dùng chút."},
      {speaker:"女", pre:"好，", blank:"方便的时候再借我用用", post:"。",
       py:"Hǎo, fāngbiàn de shíhou zài jiè wǒ yòngyong.",
       vn:"Được, lúc nào tiện thì cho tôi mượn dùng tiếp nhé."}]},
    {num:3, lines:[
      {speaker:"女", pre:"", blank:"饭菜都做好了，把电脑关了吧？先吃饭", post:"。",
       py:"Fàncài dōu zuòhǎo le, bǎ diànnǎo guān le ba? Xiān chīfàn.",
       vn:"Cơm nước xong hết rồi, tắt máy tính đi nhé? Ăn cơm trước đã."},
      {speaker:"男", pre:"", blank:"好的，我马上就来", post:"。",
       py:"Hǎo de, wǒ mǎshàng jiù lái.",
       vn:"Được, tôi đến ngay đây."}]},
    {num:4, lines:[
      {speaker:"女", pre:"", blank:"运动会什么时候结束", post:"？",
       py:"Yùndònghuì shénme shíhou jiéshù?",
       vn:"Hội thao khi nào kết thúc?"},
      {speaker:"男", pre:"", blank:"五点左右吧", post:"。",
       py:"Wǔ diǎn zuǒyòu ba.",
       vn:"Khoảng 5 giờ thôi."}]},
    {num:5, lines:[
      {speaker:"男", pre:"服务员，", blank:"这儿只有一双筷子，请再给我们拿一双", post:"。",
       py:"Fúwùyuán, zhèr zhǐ yǒu yì shuāng kuàizi, qǐng zài gěi wǒmen ná yì shuāng.",
       vn:"Phục vụ ơi, ở đây chỉ có một đôi đũa, làm ơn lấy thêm cho chúng tôi một đôi."},
      {speaker:"女", pre:"", blank:"好的，请您等一下，马上来", post:"。",
       py:"Hǎo de, qǐng nín děng yíxià, mǎshàng lái.",
       vn:"Được ạ, mời anh/chị đợi chút, sẽ mang lên ngay."}]},
    {num:6, stmt:"他的电脑出了点儿问题。", judge:true, lines:[
      {pre:"小周，你帮我看一下笔记本电脑吧。昨天我还能看电子邮件，", blank:"今天突然就打不开了，不知道是怎么回事", post:"。",
       py:"Xiǎo Zhōu, nǐ bāng wǒ kàn yíxià bǐjìběn diànnǎo ba. Zuótiān wǒ hái néng kàn diànzǐ yóujiàn, jīntiān tūrán jiù dǎ bu kāi le, bù zhīdào shì zěnme huí shì.",
       vn:"Tiểu Chu, bạn giúp tôi xem qua máy tính xách tay chút đi. Hôm qua tôi vẫn xem email được, hôm nay đột nhiên không mở được nữa, không biết là chuyện gì."}]},
    {num:7, stmt:"他打算去图书馆学习。", judge:true, lines:[
      {pre:"教室里人太多了，", blank:"我们去图书馆学习吧，那儿比较安静", post:"。",
       py:"Jiàoshì lǐ rén tài duō le, wǒmen qù túshūguǎn xuéxí ba, nàr bǐjiào ānjìng.",
       vn:"Trong lớp học đông người quá, chúng ta đi thư viện học đi, ở đó khá yên tĩnh."}]},
    {num:8, stmt:"他以前骑自行车上班。", judge:false, lines:[
      {pre:"住在这儿真不错，附近环境很好，离我上班的医院也不远，", blank:"上下班都不用坐地铁了，骑自行车就可以", post:"。",
       py:"Zhù zài zhèr zhēn búcuò, fùjìn huánjìng hěn hǎo, lí wǒ shàngbān de yīyuàn yě bù yuǎn, shàng-xiàbān dōu búyòng zuò dìtiě le, qí zìxíngchē jiù kěyǐ.",
       vn:"Sống ở đây thật tốt, môi trường xung quanh đẹp, cách bệnh viện nơi tôi làm cũng không xa, đi làm về đều không cần đi tàu điện ngầm nữa, đi xe đạp là được."}]},
    {num:9, stmt:"跟家人一起吃晚饭很快乐。", judge:true, lines:[
      {pre:"什么是快乐？", blank:"结束一天的工作以后，你和家人一起吃晚饭，说说白天的事情，这不就是快乐吗", post:"？",
       py:"Shénme shì kuàilè? Jiéshù yìtiān de gōngzuò yǐhòu, nǐ hé jiārén yìqǐ chī wǎnfàn, shuōshuo báitiān de shìqing, zhè bú jiùshì kuàilè ma?",
       vn:"Hạnh phúc là gì? Kết thúc một ngày làm việc, bạn cùng gia đình ăn tối, kể chuyện ban ngày, chẳng phải đó là hạnh phúc sao?"}]},
    {num:10, stmt:"啤酒在桌子上。", judge:false, lines:[
      {pre:"你把桌子上的杯子给我，", blank:"我去洗一下。你去楼下买几瓶啤酒吧", post:"。",
       py:"Nǐ bǎ zhuōzi shang de bēizi gěi wǒ, wǒ qù xǐ yíxià. Nǐ qù lóuxià mǎi jǐ píng píjiǔ ba.",
       vn:"Bạn đưa cho tôi cái ly trên bàn, tôi đi rửa chút. Bạn xuống dưới lầu mua vài chai bia đi."}]}
  ],
  mc: [
    {num:11, options:["地铁站","眼镜店","地图"], ans:1, q:"男的在找什么？",
     lines:[
      {speaker:"男", pre:"你看一下地图，", blank:"这儿附近有眼镜店吗", post:"？",
       py:"Nǐ kàn yíxià dìtú, zhèr fùjìn yǒu yǎnjìngdiàn ma?",
       vn:"Bạn xem bản đồ chút, gần đây có cửa hàng kính không?"},
      {speaker:"女", pre:"地铁站旁边有一个，", blank:"在地铁站的北边", post:"。",
       py:"Dìtiě zhàn pángbiān yǒu yí ge, zài dìtiě zhàn de běibian.",
       vn:"Bên cạnh ga tàu điện ngầm có một cái, ở phía bắc ga tàu điện ngầm."}
     ],
     explain:"男：你看一下地图，这儿附近有眼镜店吗？女：地铁站旁边有一个，在地铁站的北边。问：男的在找什么？ → 眼镜店。"},
    {num:12, options:["给妹妹喝牛奶","去超市买牛奶","带妹妹去医院"], ans:0, q:"女的要做什么？",
     lines:[
      {speaker:"男", pre:"", blank:"妹妹怎么了？病了吗", post:"？",
       py:"Mèimei zěnme le? Bìng le ma?",
       vn:"Em gái sao vậy? Bị ốm à?"},
      {speaker:"女", pre:"可能饿了，", blank:"你把奶瓶给我吧", post:"。",
       py:"Kěnéng è le, nǐ bǎ nǎipíng gěi wǒ ba.",
       vn:"Có lẽ đói rồi, bạn đưa bình sữa cho mình đi."}
     ],
     explain:"男：妹妹怎么了？病了吗？女：可能饿了，你把奶瓶给我吧。问：女的要做什么？ → 给妹妹喝牛奶。"},
    {num:13, options:["同事","经理和客人","医生和病人"], ans:0, q:"他们最可能是什么关系？",
     lines:[
      {speaker:"男", pre:"会议结束后，", blank:"你记得把空调和灯都关了", post:"。",
       py:"Huìyì jiéshù hòu, nǐ jìde bǎ kōngtiáo hé dēng dōu guān le.",
       vn:"Sau khi họp xong, bạn nhớ tắt cả máy điều hòa và đèn nhé."},
      {speaker:"女", pre:"好的，", blank:"我知道了，明天见", post:"。",
       py:"Hǎo de, wǒ zhīdào le, míngtiān jiàn.",
       vn:"Được ạ, tôi biết rồi, hẹn mai gặp."}
     ],
     explain:"男：会议结束后，你记得把空调和灯都关了。女：好的，我知道了，明天见。问：他们最可能是什么关系？ → 同事。"},
    {num:14, options:["出去开会","照顾小雨","和女的去公园"], ans:1, q:"男的要做什么？",
     lines:[
      {speaker:"女", pre:"我明天出去开会，", blank:"你能帮我照顾一下小雨吗", post:"？",
       py:"Wǒ míngtiān chūqu kāihuì, nǐ néng bāng wǒ zhàogù yíxià Xiǎoyǔ ma?",
       vn:"Ngày mai tôi ra ngoài họp, bạn có thể giúp tôi trông Tiểu Vũ một chút không?"},
      {speaker:"男", pre:"行，没问题，", blank:"我每天都带她去公园玩儿", post:"。",
       py:"Xíng, méi wèntí, wǒ měitiān dōu dài tā qù gōngyuán wánr.",
       vn:"Được, không vấn đề gì, tôi ngày nào cũng dẫn bé đi công viên chơi."}
     ],
     explain:"女：我明天出去开会，你能帮我照顾一下小雨吗？男：行，没问题，我每天都带她去公园玩儿。问：男的要做什么？ → 照顾小雨。"},
    {num:15, options:["让女的去还书","书已经还了","女的忘了还书"], ans:1, q:"男的是什么意思？",
     lines:[
      {speaker:"女", pre:"我的那本历史书呢，", blank:"你看见了吗", post:"？",
       py:"Wǒ de nà běn lìshǐ shū ne, nǐ kànjiàn le ma?",
       vn:"Quyển sách Lịch Sử của tôi đâu rồi, bạn thấy không?"},
      {speaker:"男", pre:"", blank:"你昨天让我去图书馆把书还了，你忘了", post:"？",
       py:"Nǐ zuótiān ràng wǒ qù túshūguǎn bǎ shū huán le, nǐ wàng le?",
       vn:"Hôm qua bạn bảo tôi đi thư viện trả sách rồi, bạn quên à?"}
     ],
     explain:"女：我的那本历史书呢，你看见了吗？男：你昨天让我去图书馆把书还了，你忘了？问：男的是什么意思？ → 书已经还了。"},
    {num:16, options:["今天比较忙","空调有问题","叫人来换水"], ans:1, q:"男的为什么要打电话？",
     lines:[
      {speaker:"女", pre:"", blank:"空调下面怎么这么多水", post:"？",
       py:"Kōngtiáo xiàmian zěnme zhème duō shuǐ?",
       vn:"Sao dưới máy điều hòa nhiều nước thế?"},
      {speaker:"男", pre:"我也是刚看见，", blank:"我已经打电话叫人来看了", post:"。",
       py:"Wǒ yě shì gāng kànjiàn, wǒ yǐjīng dǎ diànhuà jiào rén lái kàn le.",
       vn:"Tôi cũng vừa mới thấy, tôi gọi điện kêu người đến xem rồi."},
      {speaker:"女", pre:"", blank:"问他们什么时候到了吗", post:"？",
       py:"Wèn tāmen shénme shíhou dào le ma?",
       vn:"Hỏi họ khi nào đến chưa?"},
      {speaker:"男", pre:"他们说今天周日，比较忙，", blank:"下午才能来", post:"。",
       py:"Tāmen shuō jīntiān zhōurì, bǐjiào máng, xiàwǔ cái néng lái.",
       vn:"Họ nói hôm nay chủ nhật, khá bận, chiều mới đến được."}
     ],
     explain:"女：空调下面怎么这么多水？男：我也是刚看见，我已经打电话叫人来看了。女：问他们什么时候到了吗？男：他们说今天周日，比较忙，下午才能来。问：男的为什么要打电话？ → 空调有问题。"},
    {num:17, options:["已经洗澡了","不喜欢出去跑步","想去超市买东西"], ans:0, q:"女的为什么不去跑步？",
     lines:[
      {speaker:"男", pre:"我要去跑步，", blank:"你去不去", post:"？",
       py:"Wǒ yào qù pǎobù, nǐ qù bu qù?",
       vn:"Tôi định đi chạy bộ, bạn đi không?"},
      {speaker:"女", pre:"我已经洗完澡了，", blank:"不想出去了", post:"。",
       py:"Wǒ yǐjīng xǐwán zǎo le, bù xiǎng chūqu le.",
       vn:"Tôi tắm xong rồi, không muốn ra ngoài nữa."},
      {speaker:"男", pre:"", blank:"要带点儿什么东西吗", post:"？",
       py:"Yào dài diǎnr shénme dōngxi ma?",
       vn:"Có cần mang gì về không?"},
      {speaker:"女", pre:"你回来时，", blank:"在楼下超市买斤香蕉和两瓶牛奶吧", post:"。",
       py:"Nǐ huílai shí, zài lóuxià chāoshì mǎi jīn xiāngjiāo hé liǎng píng niúnǎi ba.",
       vn:"Lúc bạn về, mua ở siêu thị dưới lầu một cân chuối và hai chai sữa nhé."}
     ],
     explain:"男：我要去跑步，你去不去？女：我已经洗完澡了，不想出去了。男：要带点儿什么东西吗？女：你回来时，在楼下超市买斤香蕉和两瓶牛奶吧。问：女的为什么不去跑步？ → 已经洗澡了。"},
    {num:18, options:["比以前便宜了","太旧了","又大又方便"], ans:0, q:"关于男的的电脑，可以知道什么？",
     lines:[
      {speaker:"女", pre:"我的笔记本电脑太旧了，我想换一个，", blank:"你说买个什么样的好", post:"？",
       py:"Wǒ de bǐjìběn diànnǎo tài jiù le, wǒ xiǎng huàn yí ge, nǐ shuō mǎi ge shénme yàng de hǎo?",
       vn:"Máy tính xách tay của tôi cũ quá rồi, tôi muốn đổi một cái, bạn thấy mua loại nào tốt?"},
      {speaker:"男", pre:"我用的这个就不错，也不大，", blank:"带着很方便", post:"。",
       py:"Wǒ yòng de zhège jiù búcuò, yě bú dà, dàizhe hěn fāngbiàn.",
       vn:"Cái tôi đang dùng cũng được đấy, cũng không to, mang theo rất tiện."},
      {speaker:"女", pre:"", blank:"贵不贵", post:"？",
       py:"Guì bu guì?",
       vn:"Có đắt không?"},
      {speaker:"男", pre:"有点儿贵，", blank:"我去年买的时候九千，听说现在卖八千左右", post:"。",
       py:"Yǒudiǎnr guì, wǒ qùnián mǎi de shíhou jiǔqiān, tīngshuō xiànzài mài bāqiān zuǒyòu.",
       vn:"Hơi đắt, tôi mua năm ngoái là chín nghìn, nghe nói bây giờ bán khoảng tám nghìn."}
     ],
     explain:"女：我的笔记本电脑太旧了，我想换一个，你说买个什么样的好？男：我用的这个就不错，也不大，带着很方便。女：贵不贵？男：有点儿贵，我去年买的时候九千，听说现在卖八千左右。问：关于男的的电脑，可以知道什么？ → 比以前便宜了。"},
    {num:19, options:["来周先生家吃晚饭","每天八点左右下班","总是照顾周先生的小狗"], ans:2, q:"关于女的，可以知道什么？",
     lines:[
      {speaker:"女", pre:"周先生，我公司突然有事，", blank:"您能帮我去接一下孩子吗", post:"？",
       py:"Zhōu xiānsheng, wǒ gōngsī tūrán yǒu shì, nín néng bāng wǒ qù jiē yíxià háizi ma?",
       vn:"Anh Chu, công ty tôi đột nhiên có việc, anh giúp tôi đón cháu một chút được không?"},
      {speaker:"男", pre:"没问题，", blank:"我带她来我家吃晚饭", post:"。",
       py:"Méi wèntí, wǒ dài tā lái wǒ jiā chī wǎnfàn.",
       vn:"Không vấn đề gì, tôi đưa cháu về nhà tôi ăn tối."},
      {speaker:"女", pre:"好的，太谢谢你了，", blank:"我八点左右去接她回来", post:"。",
       py:"Hǎo de, tài xièxie nǐ le, wǒ bā diǎn zuǒyòu qù jiē tā huílai.",
       vn:"Được, cảm ơn anh nhiều, khoảng 8 giờ tôi qua đón cháu về."},
      {speaker:"男", pre:"别客气，", blank:"你不也总是帮我照顾小狗吗", post:"？",
       py:"Bié kèqi, nǐ bù yě zǒngshì bāng wǒ zhàogù xiǎogǒu ma?",
       vn:"Đừng khách sáo, chẳng phải chị cũng luôn giúp tôi trông con chó nhỏ sao?"}
     ],
     explain:"女：周先生，我公司突然有事，您能帮我去接一下孩子吗？男：没问题，我带她来我家吃晚饭。女：好的，太谢谢你了，我八点左右去接她回来。男：别客气，你不也总是帮我照顾小狗吗？问：关于女的，可以知道什么？ → 总是照顾周先生的小狗。"},
    {num:20, options:["玩儿电脑","打篮球","复习考试"], ans:1, q:"男的要做什么？",
     lines:[
      {speaker:"男", pre:"妈，", blank:"我跟同学去打篮球", post:"。",
       py:"Mā, wǒ gēn tóngxué qù dǎ lánqiú.",
       vn:"Mẹ ơi, con đi chơi bóng rổ với bạn học đây."},
      {speaker:"女", pre:"", blank:"你明天不是还要考试吗", post:"？",
       py:"Nǐ míngtiān bú shì hái yào kǎoshì ma?",
       vn:"Ngày mai con chẳng phải còn phải thi sao?"},
      {speaker:"男", pre:"没关系，", blank:"我已经复习好了，玩儿一会儿就回来", post:"。",
       py:"Méi guānxi, wǒ yǐjīng fùxí hǎo le, wánr yíhuìr jiù huílai.",
       vn:"Không sao đâu, con ôn xong rồi, chơi chút là về ngay."},
      {speaker:"女", pre:"好吧，", blank:"你的电脑关了没有", post:"？",
       py:"Hǎo ba, nǐ de diànnǎo guānle méiyǒu?",
       vn:"Được rồi, máy tính của con tắt chưa?"}
     ],
     explain:"男：妈，我跟同学去打篮球。女：你明天不是还要考试吗？男：没关系，我已经复习好了，玩儿一会儿就回来。女：好吧，你的电脑关了没有？问：男的要做什么？ → 打篮球。"}
  ]
};
