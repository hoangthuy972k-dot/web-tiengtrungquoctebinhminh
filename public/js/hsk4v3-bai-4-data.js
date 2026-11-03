// HSK 4 (3.0) · Bai 4 — sinh boi tools/hsk4v3/gan.js tu tools/hsk4v3/bai-4/ (dung sua tay).
var vocabData = [
 {
  "n": 1,
  "zh": "啊",
  "py": "ā",
  "pos": "Thán từ",
  "vn": "á, à (thốt lên khi ngạc nhiên, hốt hoảng, chợt nhận ra)",
  "hv": "a",
  "em": "😮",
  "lesson": 1,
  "explain": [
   "Thán từ đứng ĐẦU câu, đọc thanh 1 kéo dài, biểu thị ngạc nhiên, hốt hoảng hoặc chợt nhận ra điều gì.",
   "Khác 啊 trợ từ ở CUỐI câu đọc nhẹ “a” (怎么办啊？) — làm câu mềm, thân mật hơn."
  ],
  "usage": "啊，……！(đầu câu) · 怎么办啊？/ 好啊 (cuối câu, thanh nhẹ).",
  "collo": [
   "啊，下雨了！",
   "啊，我想起来了",
   "怎么办啊",
   "好啊"
  ],
  "colloFull": [
   {
    "zh": "啊，下雨了！",
    "py": "Ā, xiàyǔ le!",
    "vn": "Á, mưa rồi!"
   },
   {
    "zh": "啊，我想起来了",
    "py": "Ā, wǒ xiǎng qǐlai le",
    "vn": "À, tôi nhớ ra rồi"
   },
   {
    "zh": "怎么办啊",
    "py": "Zěnmebàn ā",
    "vn": "làm sao bây giờ"
   },
   {
    "zh": "好啊",
    "py": "Hǎo ā",
    "vn": "được đấy, ừ"
   }
  ],
  "patterns": [
   {
    "s": "啊 (ā, đầu câu) + câu cảm thán",
    "m": "Ngạc nhiên / hốt hoảng / chợt nhận ra"
   },
   {
    "s": "Câu + 啊 (a, cuối câu)",
    "m": "Trợ từ ngữ khí, làm câu mềm hơn"
   }
  ],
  "ex_zh": "啊，我的手机停机了！怎么办啊？",
  "ex_py": "Ā, wǒ de shǒujī tíng jī le! Zěnmebàn ā?",
  "ex_vn": "Á, điện thoại của tôi bị cắt dịch vụ rồi! Làm sao bây giờ?",
  "exList": [
   {
    "zh": "啊，我的手机停机了！怎么办啊？",
    "py": "Ā, wǒ de shǒujī tíng jī le! Zěnmebàn ā?",
    "vn": "Á, điện thoại của tôi bị cắt dịch vụ rồi! Làm sao bây giờ?"
   },
   {
    "zh": "啊，我忘带钥匙了！",
    "py": "Ā, wǒ wàng dài yàoshi le!",
    "vn": "Á, tôi quên mang chìa khóa rồi!"
   }
  ],
  "hanzi": [
   {
    "c": "啊",
    "p": "a",
    "type": "左右结构 · Trái-phải",
    "st": 10,
    "ord": "口 (khẩu) trái → 阿 (a) phải",
    "rad": "口 (khẩu – miệng)",
    "mean": "trợ từ ngữ khí",
    "tip": "Bộ miệng 口 (âm thanh phát ra) + 阿(âm \"a\") → chữ chuyên dùng ghi lại tiếng thốt \"à\" cuối câu.",
    "cf": "阿 (ā – dùng trong tên riêng, không có bộ 口\")",
    "w": "是啊 / 好啊 / 对啊"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Á, tôi quên mang ví rồi, không mua được vé.",
    "answer": "啊，我忘带钱包了，买不了票。",
    "answerPy": "Ā, wǒ wàng dài qiánbāo le, mǎi bu le piào.",
    "note": "Kết hợp bổ ngữ khả năng 买不了 (Bài 4 · điểm 1).",
    "pair": "啊，……V不了"
   },
   {
    "promptLang": "vi",
    "prompt": "À, tôi nhớ ra rồi, hôm nay là sinh nhật cô ấy!",
    "answer": "啊，我想起来了，今天是她的生日！",
    "answerPy": "Ā, wǒ xiǎng qǐlai le, jīntiān shì tā de shēngrì!",
    "note": "Ôn bổ ngữ xu hướng 想起来 (HSK 3).",
    "pair": "想起来"
   }
  ]
 },
 {
  "n": 2,
  "zh": "停",
  "py": "tíng",
  "pos": "Động từ",
  "vn": "dừng, ngừng, tạnh; đỗ (xe)",
  "hv": "đình",
  "em": "🛑",
  "lesson": 1,
  "explain": [
   "Không tiếp tục nữa: mưa tạnh, máy dừng, nhạc ngừng; cũng là đỗ xe (停车).",
   "停机 (trong bài): nhà mạng tạm ngừng dịch vụ điện thoại của thuê bao, thường do chưa đóng tiền — 小语助力 của sách."
  ],
  "usage": "雨停了 · 停车 · 手机停机了 · 停在楼下.",
  "collo": [
   "雨停了",
   "停车",
   "停机",
   "停下来"
  ],
  "colloFull": [
   {
    "zh": "雨停了",
    "py": "Yǔ tíng le",
    "vn": "mưa tạnh rồi"
   },
   {
    "zh": "停车",
    "py": "Tíngchē",
    "vn": "đỗ xe"
   },
   {
    "zh": "停机",
    "py": "Tíng jī",
    "vn": "(điện thoại) bị cắt dịch vụ"
   },
   {
    "zh": "停下来",
    "py": "Tíngxià lái",
    "vn": "dừng lại"
   }
  ],
  "patterns": [
   {
    "s": "N + 停了",
    "m": "Mưa / gió / nhạc… ngừng, tạnh"
   },
   {
    "s": "停 + 在 + nơi chốn",
    "m": "停在楼下 — đỗ ở dưới nhà"
   }
  ],
  "ex_zh": "啊，我的手机停机了！怎么办啊？",
  "ex_py": "Ā, wǒ de shǒujī tíng jī le! Zěnmebàn ā?",
  "ex_vn": "Á, điện thoại tôi bị nhà mạng cắt dịch vụ rồi! Làm sao bây giờ?",
  "exList": [
   {
    "zh": "啊，我的手机停机了！怎么办啊？",
    "py": "Ā, wǒ de shǒujī tíng jī le! Zěnmebàn ā?",
    "vn": "Á, điện thoại tôi bị nhà mạng cắt dịch vụ rồi! Làm sao bây giờ?"
   },
   {
    "zh": "外面的雨停了，咱们出去走走吧。",
    "py": "Wàimian de yǔ tíng le, zánmen chūqu zǒuzou ba.",
    "vn": "Mưa ngoài trời tạnh rồi, mình ra ngoài đi dạo chút đi."
   }
  ],
  "hanzi": [
   {
    "c": "停",
    "p": "tíng",
    "type": "左右结构 · Trái-phải",
    "st": 11,
    "ord": "亻 trái → 亭 phải",
    "rad": "亻 (nhân)",
    "mean": "dừng",
    "tip": "Người 亻 + 亭(đình, nhà nghỉ chân) → người DỪNG lại nghỉ ở đình → DỪNG, NGỪNG.",
    "cf": "亭 (tíng – đình)",
    "w": "停 / 停电 / 停车 / 不停"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Nếu mưa tạnh thì chúng ta đi công viên.",
    "answer": "要是雨停了，我们就去公园。",
    "answerPy": "Yàoshi yǔ tíng le, wǒmen jiù qù gōngyuán.",
    "note": "要是……就…… (Bài 1 · điểm 2).",
    "pair": "要是……就……"
   },
   {
    "promptLang": "vi",
    "prompt": "Xe của tôi đỗ ở dưới nhà, bạn đợi tôi một lát nhé.",
    "answer": "我的车停在楼下，你等我一会儿吧。",
    "answerPy": "Wǒ de chē tíng zài lóuxià, nǐ děng wǒ yíhuìr ba.",
    "note": "Ôn bổ ngữ giới từ 在 + nơi chốn (HSK 3).",
    "pair": "停在……"
   }
  ]
 },
 {
  "n": 3,
  "zh": "交",
  "py": "jiāo",
  "pos": "Động từ",
  "vn": "nộp, đóng (tiền); giao (cho ai)",
  "hv": "giao",
  "em": "💳",
  "lesson": 1,
  "explain": [
   "Đưa cho người / nơi có trách nhiệm: nộp tiền, nộp bài, nộp hồ sơ. (Nghĩa “kết bạn” 交朋友 em đã học.)"
  ],
  "usage": "交电话费 · 交作业 · 交材料 · 交房租 · 把……交给…….",
  "collo": [
   "交电话费",
   "交作业",
   "交材料",
   "交房租"
  ],
  "colloFull": [
   {
    "zh": "交电话费",
    "py": "Jiāo diàn huàfèi",
    "vn": "đóng tiền điện thoại"
   },
   {
    "zh": "交作业",
    "py": "Jiāo zuòyè",
    "vn": "nộp bài tập"
   },
   {
    "zh": "交材料",
    "py": "Jiāo cáiliào",
    "vn": "nộp hồ sơ"
   },
   {
    "zh": "交房租",
    "py": "Jiāo fángzū",
    "vn": "đóng tiền nhà"
   }
  ],
  "patterns": [
   {
    "s": "交 + tiền / bài / hồ sơ",
    "m": "Nộp cái gì"
   },
   {
    "s": "把 + N + 交给 + ai",
    "m": "Nộp cái gì cho ai (câu 把, HSK 3)"
   }
  ],
  "ex_zh": "我忘了交电话费，手机停机了。",
  "ex_py": "Wǒ wàng le jiāo diàn huàfèi, shǒujī tíng jī le.",
  "ex_vn": "Tôi quên đóng tiền điện thoại nên máy bị cắt rồi.",
  "exList": [
   {
    "zh": "我忘了交电话费，手机停机了。",
    "py": "Wǒ wàng le jiāo diàn huàfèi, shǒujī tíng jī le.",
    "vn": "Tôi quên đóng tiền điện thoại nên máy bị cắt rồi."
   },
   {
    "zh": "明天以前要把作业交给老师。",
    "py": "Míngtiān yǐqián yào bǎ zuòyè jiāogěi lǎoshī.",
    "vn": "Trước ngày mai phải nộp bài tập cho thầy."
   }
  ],
  "hanzi": [
   {
    "c": "交",
    "p": "jiāo",
    "type": "独体字 · Chữ đơn",
    "st": 6,
    "ord": "nét liền, hình người bắt chéo chân",
    "rad": "亠 (đầu)",
    "mean": "giao, kết giao",
    "tip": "Hình tượng cổ mô phỏng hai đường nét BẮT CHÉO nhau → GIAO NHAU, mở rộng thành KẾT GIAO (con người giao lưu với nhau).",
    "cf": "较 (jiào – \"so sánh\", cũng có 交\" nhưng thêm bộ 车\")",
    "w": "交朋友 / 交流 / 交通"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Tiền nhà tháng này tôi đã đóng rồi.",
    "answer": "这个月的房租我已经交了。",
    "answerPy": "Zhège yuè de fángzū wǒ yǐjīng jiāo le.",
    "note": "Tân ngữ đưa lên đầu làm chủ đề + 已经……了 (HSK 3).",
    "pair": "N，Sub + 已经交了"
   },
   {
    "promptLang": "vi",
    "prompt": "Bất kỳ ai cũng phải nộp bài tập trước thứ Sáu.",
    "answer": "任何人都要在周五以前交作业。",
    "answerPy": "Rènhé rén dōu yào zài zhōuwǔ yǐqián jiāo zuòyè.",
    "note": "任何……都…… (Bài 1 · điểm 1).",
    "pair": "任何……都……"
   }
  ]
 },
 {
  "n": 4,
  "zh": "费",
  "py": "fèi",
  "pos": "Danh từ / Động từ",
  "vn": "phí, tiền (phải trả); tốn, hao",
  "hv": "phí",
  "em": "💰",
  "lesson": 1,
  "explain": [
   "Danh từ: khoản tiền phải trả — 电话费, 学费, 车费, 房费.",
   "Động từ: tốn, hao — 费钱, 费时间, 费力气."
  ],
  "usage": "电话费 · 学费 · 交……费 · 很费时间.",
  "collo": [
   "电话费",
   "学费",
   "交费",
   "费时间"
  ],
  "colloFull": [
   {
    "zh": "电话费",
    "py": "Diàn huàfèi",
    "vn": "tiền điện thoại"
   },
   {
    "zh": "学费",
    "py": "Xuéfèi",
    "vn": "học phí"
   },
   {
    "zh": "交费",
    "py": "Jiāo fèi",
    "vn": "nộp phí"
   },
   {
    "zh": "费时间",
    "py": "Fèi shíjiān",
    "vn": "tốn thời gian"
   }
  ],
  "patterns": [
   {
    "s": "N + 费",
    "m": "Loại phí: 电话费 / 学费 / 车费"
   },
   {
    "s": "费 + 钱 / 时间 / 力气",
    "m": "Động từ: tốn … (trái nghĩa với 省)"
   }
  ],
  "ex_zh": "我忘了交电话费，手机停机了。",
  "ex_py": "Wǒ wàng le jiāo diàn huàfèi, shǒujī tíng jī le.",
  "ex_vn": "Tôi quên đóng tiền điện thoại nên máy bị cắt rồi.",
  "exList": [
   {
    "zh": "我忘了交电话费，手机停机了。",
    "py": "Wǒ wàng le jiāo diàn huàfèi, shǒujī tíng jī le.",
    "vn": "Tôi quên đóng tiền điện thoại nên máy bị cắt rồi."
   },
   {
    "zh": "骑自行车不费钱，还能锻炼身体。",
    "py": "Qí zìxíngchē bú fèi qián, hái néng duànliàn shēntǐ.",
    "vn": "Đi xe đạp không tốn tiền, lại còn rèn luyện được thân thể."
   }
  ],
  "hanzi": [
   {
    "c": "费",
    "p": "fèi",
    "type": "形声字 · Chữ hình thanh",
    "st": 9,
    "ord": "弗 → 贝",
    "rad": "贝 (bối – vỏ sò, tiền)",
    "mean": "phí, tiền phải trả; tốn",
    "tip": "Trên là 弗 fú (chỉ âm), dưới là 贝 (tiền): khoản tiền phải bỏ ra — 收费, 学费, 浪费.",
    "cf": "贵 guì (đắt) — trên là 中 + 一",
    "w": "收费 / 学费 / 浪费"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Học phí trường này không cao, có điều tiền sinh hoạt hơi đắt.",
    "answer": "这个学校的学费不高，不过生活费有点儿贵。",
    "answerPy": "Zhège xuéxiào de xuéfèi bù gāo, búguò shēnghuó fèi yǒudiǎnr guì.",
    "note": "……，不过…… (Bài 2 · điểm 2).",
    "pair": "……，不过……"
   },
   {
    "promptLang": "vi",
    "prompt": "Việc này rất tốn thời gian, chúng mình cùng làm đi.",
    "answer": "这件事很费时间，咱们一起做吧。",
    "answerPy": "Zhè jiàn shì hěn fèi shíjiān, zánmen yìqǐ zuò ba.",
    "note": "费 làm động từ: 费时间.",
    "pair": "很费 + N"
   }
  ]
 },
 {
  "n": 5,
  "zh": "信号",
  "py": "xìnhào",
  "pos": "Danh từ",
  "vn": "tín hiệu, sóng (điện thoại)",
  "hv": "tín hiệu",
  "em": "📶",
  "lesson": 1,
  "explain": [
   "Sóng điện thoại, sóng mạng; cũng là tín hiệu nói chung (đèn tín hiệu giao thông 信号灯)."
  ],
  "usage": "没有信号 · 信号不好 · 手机信号.",
  "collo": [
   "没有信号",
   "信号不好",
   "手机信号",
   "信号灯"
  ],
  "colloFull": [
   {
    "zh": "没有信号",
    "py": "Méiyǒu xìnhào",
    "vn": "không có sóng"
   },
   {
    "zh": "信号不好",
    "py": "Xìnhào bù hǎo",
    "vn": "sóng yếu"
   },
   {
    "zh": "手机信号",
    "py": "Shǒujī xìnhào",
    "vn": "sóng điện thoại"
   },
   {
    "zh": "信号灯",
    "py": "Xìnhào dēng",
    "vn": "đèn tín hiệu"
   }
  ],
  "patterns": [
   {
    "s": "信号 + 好 / 不好",
    "m": "✗ 信号很少 → ✓ 信号不好"
   },
   {
    "s": "没有信号，V + 不了",
    "m": "Mất sóng nên không làm được gì"
   }
  ],
  "ex_zh": "我没带现金，手机没有信号，上不了网，买不了地铁票了。",
  "ex_py": "Wǒ méi dài xiànjīn, shǒujī méiyǒu xìnhào, shàng bu le wǎng, mǎi bu le dìtiě piào le.",
  "ex_vn": "Tôi không mang tiền mặt, điện thoại không có sóng, không lên mạng được, không mua được vé tàu điện ngầm.",
  "exList": [
   {
    "zh": "我没带现金，手机没有信号，上不了网，买不了地铁票了。",
    "py": "Wǒ méi dài xiànjīn, shǒujī méiyǒu xìnhào, shàng bu le wǎng, mǎi bu le dìtiě piào le.",
    "vn": "Tôi không mang tiền mặt, điện thoại không có sóng, không lên mạng được, không mua được vé tàu điện ngầm."
   },
   {
    "zh": "山上的信号不太好，电话打不通。",
    "py": "Shānshang de xìnhào bú tài hǎo, diànhuà dǎ bù tōng.",
    "vn": "Trên núi sóng không tốt lắm, gọi điện không được."
   }
  ],
  "hanzi": [
   {
    "c": "信",
    "p": "xìn",
    "type": "左右结构 · Trái-phải",
    "st": 9,
    "ord": "亻 trái → 言 phải",
    "rad": "亻 (nhân)",
    "mean": "tin",
    "tip": "Người 亻 + lời 言 → lời người nói đáng TIN → TÍN. 自信 = tự tin; 相信 (Bài 4); 信心 (Bài 9); 信 = thư.",
    "cf": "言 (yán – lời)",
    "w": "自信 / 相信 / 信心 / 信"
   },
   {
    "c": "号",
    "p": "hào",
    "type": "上下结构 · Trên-dưới",
    "st": 5,
    "ord": "口 (khẩu - miệng) trên → 丂 (biến thể) dưới",
    "rad": "口 (khẩu – miệng)",
    "mean": "số, ngày (trong tháng), hiệu, tên gọi",
    "tip": "口 (miệng) hô to phía trên, 丂 (hơi vang) phía dưới → hình ảnh miệng HÔ, GỌI to số hiệu → nghĩa SỐ, NGÀY, TÊN HIỆU.",
    "cf": "亏 (kuī – \"thiệt hại, thua lỗ\", phần dưới giống nhau nhưng không có bộ 口 phía trên)",
    "w": "号码 / 几号 / 8号"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Trong thang máy không có sóng, không gọi điện được.",
    "answer": "电梯里没有信号，打不了电话。",
    "answerPy": "Diàntī lǐ méiyǒu xìnhào, dǎ bu le diànhuà.",
    "note": "Bổ ngữ khả năng V不了 (Bài 4 · điểm 1).",
    "pair": "没有信号，V不了"
   },
   {
    "promptLang": "vi",
    "prompt": "Ở đây không chỉ không có sóng, mà còn không có mạng.",
    "answer": "这儿不仅没有信号，而且没有网。",
    "answerPy": "Zhèr bùjǐn méiyǒu xìnhào, érqiě méiyǒu wǎng.",
    "note": "不仅……而且…… (Bài 3 · điểm 2).",
    "pair": "不仅……而且……"
   }
  ]
 },
 {
  "n": 6,
  "zh": "感谢",
  "py": "gǎnxiè",
  "pos": "Động từ",
  "vn": "cảm ơn, biết ơn",
  "hv": "cảm tạ",
  "em": "🙏",
  "lesson": 1,
  "explain": [
   "Cảm ơn — trang trọng, nặng tình cảm hơn 谢谢; có thể nói 感谢 + ai + (việc gì)."
  ],
  "usage": "太感谢你了 · 非常感谢 · 感谢你的帮助 · 感谢大家.",
  "collo": [
   "太感谢你了",
   "非常感谢",
   "感谢大家",
   "表示感谢"
  ],
  "colloFull": [
   {
    "zh": "太感谢你了",
    "py": "Tài gǎnxiè nǐ le",
    "vn": "cảm ơn bạn nhiều lắm"
   },
   {
    "zh": "非常感谢",
    "py": "Fēicháng gǎnxiè",
    "vn": "vô cùng cảm ơn"
   },
   {
    "zh": "感谢大家",
    "py": "Gǎnxiè dàjiā",
    "vn": "cảm ơn mọi người"
   },
   {
    "zh": "表示感谢",
    "py": "Biǎoshì gǎnxiè",
    "vn": "bày tỏ lòng biết ơn"
   }
  ],
  "patterns": [
   {
    "s": "感谢 + ai + 的 + N / 感谢 + ai + V",
    "m": "感谢你的帮助 / 感谢你帮我"
   },
   {
    "s": "太感谢 + ai + 了",
    "m": "Cảm ơn rất nhiều"
   }
  ],
  "ex_zh": "太感谢你了，我要去北京大学站。",
  "ex_py": "Tài gǎnxiè nǐ le, wǒ yào qù běijīngdàxué zhàn.",
  "ex_vn": "Cảm ơn bạn nhiều lắm, tôi muốn đến ga Đại học Bắc Kinh.",
  "exList": [
   {
    "zh": "太感谢你了，我要去北京大学站。",
    "py": "Tài gǎnxiè nǐ le, wǒ yào qù běijīngdàxué zhàn.",
    "vn": "Cảm ơn bạn nhiều lắm, tôi muốn đến ga Đại học Bắc Kinh."
   },
   {
    "zh": "感谢大家这几天对我的帮助。",
    "py": "Gǎnxiè dàjiā zhè jǐ tiān duì wǒ de bāngzhù.",
    "vn": "Cảm ơn mọi người mấy ngày nay đã giúp đỡ tôi."
   }
  ],
  "hanzi": [
   {
    "c": "感",
    "p": "gǎn",
    "type": "形声字 · Chữ hình thanh",
    "st": 13,
    "ord": "咸 → 心",
    "rad": "心 (tâm – tim)",
    "mean": "cảm thấy, cảm",
    "tip": "咸 (chỉ âm) + 心 (lòng): trong lòng có cảm giác → cảm. Đã gặp trong 感兴趣 (HSK3 Bài 5).",
    "cf": "咸 xián (mặn) — không có 心",
    "w": "感冒 / 感兴趣"
   },
   {
    "c": "谢",
    "p": "xiè",
    "type": "左右结构 · Trái-phải",
    "st": 12,
    "ord": "讠 (ngôn) trái → 射 (xạ) phải",
    "rad": "讠 (ngôn – lời nói)",
    "mean": "cảm ơn",
    "tip": "Bộ lời nói 讠 + 射(bắn ra, biểu âm) → LỜI NÓI bày tỏ lòng biết ơn, kết hợp 感(cảm nhận) thành 感谢 = CẢM ƠN.",
    "cf": "榭 (xiè – \"đình tạ\", bộ 木\")",
    "w": "感谢 / 谢谢 / 道谢"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Tiểu Vương vô cùng cảm ơn cô ấy, liên tục nói “cảm ơn”.",
    "answer": "小王非常感谢她，一直向她说“谢谢”。",
    "answerPy": "Xiǎo Wáng fēicháng gǎnxiè tā, yìzhí xiàng tā shuō “xièxie”.",
    "note": "Câu trong bài tập hoàn thành đoạn văn của sách.",
    "pair": "非常感谢……"
   },
   {
    "promptLang": "vi",
    "prompt": "Do mọi người giúp đỡ, chúng tôi đã làm xong rất nhanh, xin cảm ơn mọi người!",
    "answer": "由于大家的帮助，我们很快就做完了，感谢大家！",
    "answerPy": "Yóuyú dàjiā de bāngzhù, wǒmen hěn kuài jiù zuòwán le, gǎnxiè dàjiā!",
    "note": "由于 (Bài 2 · điểm 4).",
    "pair": "由于……，……"
   }
  ]
 },
 {
  "n": 7,
  "zh": "联系",
  "py": "liánxì",
  "pos": "Động từ",
  "vn": "liên hệ, liên lạc",
  "hv": "liên hệ",
  "em": "📞",
  "lesson": 1,
  "explain": [
   "Liên lạc với ai (gọi điện, nhắn tin, gặp…); 联系方式 = cách liên lạc (số điện thoại, WeChat…)."
  ],
  "usage": "跟……联系 · 联系方式 · 保持联系 · 联系不上.",
  "collo": [
   "跟他联系",
   "联系方式",
   "保持联系",
   "联系不上"
  ],
  "colloFull": [
   {
    "zh": "跟他联系",
    "py": "Gēn tā liánxì",
    "vn": "liên lạc với anh ấy"
   },
   {
    "zh": "联系方式",
    "py": "Liánxì fāngshì",
    "vn": "cách liên lạc"
   },
   {
    "zh": "保持联系",
    "py": "Bǎochí liánxì",
    "vn": "giữ liên lạc"
   },
   {
    "zh": "联系不上",
    "py": "Liánxì bú shàng",
    "vn": "không liên lạc được"
   }
  ],
  "patterns": [
   {
    "s": "跟 / 和 + ai + 联系 · 联系 + ai",
    "m": "✗ 联系跟他 → ✓ 跟他联系 / 联系他"
   },
   {
    "s": "联系方式",
    "m": "Cách liên lạc"
   }
  ],
  "ex_zh": "对了，能不能告诉我你的联系方式？我想把钱还给你。",
  "ex_py": "Duì le, néng bu néng gàosu wǒ nǐ de liánxì fāngshì? Wǒ xiǎng bǎ qián huán gěi nǐ.",
  "ex_vn": "À đúng rồi, bạn có thể cho tôi biết cách liên lạc của bạn không? Tôi muốn trả lại tiền cho bạn.",
  "exList": [
   {
    "zh": "对了，能不能告诉我你的联系方式？我想把钱还给你。",
    "py": "Duì le, néng bu néng gàosu wǒ nǐ de liánxì fāngshì? Wǒ xiǎng bǎ qián huán gěi nǐ.",
    "vn": "À đúng rồi, bạn có thể cho tôi biết cách liên lạc của bạn không? Tôi muốn trả lại tiền cho bạn."
   },
   {
    "zh": "今天我再准备一下材料，明天跟您联系。",
    "py": "Jīntiān wǒ zài zhǔnbèi yíxià cáiliào, míngtiān gēn nín liánxì.",
    "vn": "Hôm nay tôi chuẩn bị thêm hồ sơ, ngày mai sẽ liên hệ với anh/chị."
   }
  ],
  "hanzi": [
   {
    "c": "联",
    "p": "lián",
    "type": "左右结构 · Trái-phải (giản thể)",
    "st": 12,
    "ord": "耳 (nhĩ) trái → 关 phải",
    "rad": "耳 (nhĩ – tai)",
    "mean": "liên kết",
    "tip": "Bộ tai 耳 + 关 → NỐI LIỀN, kết hợp 互(lẫn nhau) + 网(mạng) thành 互联网 = INTERNET.",
    "cf": "耶 (yē – bộ 耳 + 阝)",
    "w": "互联网 / 联系 / 联合"
   },
   {
    "c": "系",
    "p": "xì",
    "type": "会意字 · Chữ hội ý",
    "st": 7,
    "ord": "Nét phẩy → 糸 (幺 + 小)",
    "rad": "糸 (mịch – sợi tơ)",
    "mean": "buộc, nối; hệ",
    "tip": "Nét phẩy như bàn tay + 糸 (sợi tơ): tay nối các sợi tơ lại với nhau → liên kết, quan hệ. Ôn: 没关系 (HSK1 Bài 2) = không có liên quan gì → không sao.",
    "cf": "紧 jǐn (紧张 – HSK3 Bài 9) — cũng có 糸 ở dưới",
    "w": "关系 / 没关系"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Có bất kỳ vấn đề gì thì liên hệ với tôi.",
    "answer": "有任何问题，就跟我联系。",
    "answerPy": "Yǒu rènhé wèntí, jiù gēn wǒ liánxì.",
    "note": "任何 (Bài 1 · điểm 1).",
    "pair": "任何…… / 跟……联系"
   },
   {
    "promptLang": "vi",
    "prompt": "Điện thoại anh ấy bị cắt rồi, tôi không liên lạc được với anh ấy.",
    "answer": "他的手机停机了，我联系不上他。",
    "answerPy": "Tā de shǒujī tíng jī le, wǒ liánxì bú shàng tā.",
    "note": "Bổ ngữ khả năng 联系不上 (HSK 3).",
    "pair": "V不上"
   }
  ]
 },
 {
  "n": 8,
  "zh": "方式",
  "py": "fāngshì",
  "pos": "Danh từ",
  "vn": "cách, phương thức",
  "hv": "phương thức",
  "em": "🧭",
  "lesson": 1,
  "explain": [
   "Cách thức, hình thức làm một việc: cách liên lạc, cách đi lại, lối sống."
  ],
  "usage": "联系方式 · 出行方式 · 生活方式 · 学习方式.",
  "collo": [
   "联系方式",
   "出行方式",
   "生活方式",
   "学习方式"
  ],
  "colloFull": [
   {
    "zh": "联系方式",
    "py": "Liánxì fāngshì",
    "vn": "cách liên lạc"
   },
   {
    "zh": "出行方式",
    "py": "Chūxíng fāngshì",
    "vn": "cách đi lại"
   },
   {
    "zh": "生活方式",
    "py": "Shēnghuó fāngshì",
    "vn": "lối sống"
   },
   {
    "zh": "学习方式",
    "py": "Xuéxí fāngshì",
    "vn": "cách học"
   }
  ],
  "patterns": [
   {
    "s": "V + (的) + 方式",
    "m": "出行(的)方式 / 学习(的)方式"
   },
   {
    "s": "方式 ≈ 方法",
    "m": "方式: hình thức, cách thức; 方法: phương pháp giải quyết vấn đề"
   }
  ],
  "ex_zh": "对了，能不能告诉我你的联系方式？",
  "ex_py": "Duì le, néng bu néng gàosu wǒ nǐ de liánxì fāngshì?",
  "ex_vn": "À đúng rồi, bạn có thể cho tôi biết cách liên lạc của bạn không?",
  "exList": [
   {
    "zh": "对了，能不能告诉我你的联系方式？",
    "py": "Duì le, néng bu néng gàosu wǒ nǐ de liánxì fāngshì?",
    "vn": "À đúng rồi, bạn có thể cho tôi biết cách liên lạc của bạn không?"
   },
   {
    "zh": "在城市里，人们出行的方式越来越多。",
    "py": "Zài chéngshì lǐ, rénmen chūxíng de fāngshì yuèláiyuè duō.",
    "vn": "Ở thành phố, cách đi lại của mọi người ngày càng nhiều."
   }
  ],
  "hanzi": [
   {
    "c": "方",
    "p": "fāng",
    "type": "象形字 · Chữ tượng hình",
    "st": 4,
    "ord": "chấm → ngang → ngang gập móc → phẩy",
    "rad": "方 (phương)",
    "mean": "phương, hướng; vuông; nơi",
    "tip": "Hình cái cày có hai mũi (có thuyết cho là hai mũi thuyền ghép lại) → về sau chỉ phương hướng, nơi chốn. 方 trong 地方 đọc nhẹ \"fang\". Ôn: 方便 (HSK3 Bài 2), 方法 (HSK3 Bài 8).",
    "cf": "万 wàn (HSK2 Bài 2) — không có nét chấm trên đầu",
    "w": "地方 / 方便 / 方法"
   },
   {
    "c": "式",
    "p": "shì",
    "type": "半包围结构 · Nửa bao quanh",
    "st": 6,
    "ord": "弋 bao → 工 trong",
    "rad": "弋 (dặc)",
    "mean": "kiểu",
    "tip": "工 + 弋 → khuôn mẫu → THỨC, KIỂU. 方式 = phương thức; 正式 = chính thức; 样式.",
    "cf": "试 (shì – thử)",
    "w": "方式 / 正式 / 样式"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Cách đi lại bạn dùng nhiều nhất là gì? Vì sao?",
    "answer": "你最常用的出行方式是什么？为什么？",
    "answerPy": "Nǐ zuì chángyòng de chūxíng fāngshì shì shénme? Wèishénme?",
    "note": "Câu hỏi phần Khởi động của sách.",
    "pair": "最常用的……是什么"
   },
   {
    "promptLang": "vi",
    "prompt": "Cùng với sự phát triển của thành phố, cách đi lại của mọi người ngày càng nhiều.",
    "answer": "随着城市的发展，人们出行的方式越来越多。",
    "answerPy": "Suízhe chéngshì de fāzhǎn, rénmen chūxíng de fāngshì yuèláiyuè duō.",
    "note": "随着 (Bài 1 · điểm 3).",
    "pair": "随着……，越来越……"
   }
  ]
 },
 {
  "n": 9,
  "zh": "客气",
  "py": "kèqi",
  "pos": "Động từ / Tính từ",
  "vn": "khách sáo; lịch sự, nhã nhặn",
  "hv": "khách khí",
  "em": "😊",
  "lesson": 1,
  "explain": [
   "Động từ: khách sáo, làm khách — 别客气 / 不客气 = đừng khách sáo (đáp lại lời cảm ơn).",
   "Tính từ: lịch sự, nhã nhặn — 他对人很客气."
  ],
  "usage": "别客气 · 不客气 · 对……很客气.",
  "collo": [
   "别客气",
   "不客气",
   "很客气",
   "客气话"
  ],
  "colloFull": [
   {
    "zh": "别客气",
    "py": "Bié kèqi",
    "vn": "đừng khách sáo"
   },
   {
    "zh": "不客气",
    "py": "Búkèqì",
    "vn": "không có gì"
   },
   {
    "zh": "很客气",
    "py": "Hěn kèqi",
    "vn": "rất lịch sự"
   },
   {
    "zh": "客气话",
    "py": "Kèqihuà",
    "vn": "lời khách sáo"
   }
  ],
  "patterns": [
   {
    "s": "别 / 不 + 客气",
    "m": "Đáp lại lời cảm ơn"
   },
   {
    "s": "对 + ai + 很客气",
    "m": "Lịch sự với ai"
   }
  ],
  "ex_zh": "别客气，很高兴能帮到你。",
  "ex_py": "Bié kèqi, hěn gāoxìng néng bāng dào nǐ.",
  "ex_vn": "Đừng khách sáo, rất vui vì đã giúp được bạn.",
  "exList": [
   {
    "zh": "别客气，很高兴能帮到你。",
    "py": "Bié kèqi, hěn gāoxìng néng bāng dào nǐ.",
    "vn": "Đừng khách sáo, rất vui vì đã giúp được bạn."
   },
   {
    "zh": "他对每个人都很客气。",
    "py": "Tā duì měi gè rén dōu hěn kèqi.",
    "vn": "Anh ấy rất lịch sự với mọi người."
   }
  ],
  "hanzi": [
   {
    "c": "客",
    "p": "kè",
    "type": "形声字 · Chữ hình thanh",
    "st": 9,
    "ord": "宀 → 各",
    "rad": "宀 (miên – mái nhà)",
    "mean": "khách",
    "tip": "宀 (mái nhà) + 各 (gè – chỉ âm): người từ nơi khác đến dưới mái nhà mình → khách. Ôn: 客气 (HSK3 Bài 2), 不客气 (HSK1 Bài 1).",
    "cf": "各 gè — không có 宀 ở trên",
    "w": "客人 / 请客 / 做客 / 客气"
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
    "prompt": "Đừng khách sáo, cần gì cứ nói với tôi là được.",
    "answer": "别客气，有什么需要，告诉我就是了。",
    "answerPy": "Bié kèqi, yǒu shénme xūyào, gàosu wǒ jiùshì le.",
    "note": "×就是了 (Bài 2 · điểm 1).",
    "pair": "……就是了"
   },
   {
    "promptLang": "vi",
    "prompt": "Anh ấy rất lịch sự với mọi người, có điều hơi ít nói.",
    "answer": "他对人很客气，不过话不多。",
    "answerPy": "Tā duì rén hěn kèqi, búguò huà bù duō.",
    "note": "……，不过…… (Bài 2 · điểm 2).",
    "pair": "对……很客气"
   }
  ]
 },
 {
  "n": 10,
  "zh": "剩",
  "py": "shèng",
  "pos": "Động từ",
  "vn": "còn lại, thừa lại",
  "hv": "thặng",
  "em": "🍱",
  "lesson": 2,
  "explain": [
   "Phần còn lại sau khi đã dùng / lấy đi một phần."
  ],
  "usage": "剩下(的) · 还剩 + số lượng · 剩菜.",
  "collo": [
   "剩下",
   "剩下的",
   "还剩十分钟",
   "剩菜"
  ],
  "colloFull": [
   {
    "zh": "剩下",
    "py": "Shèngxià",
    "vn": "còn lại"
   },
   {
    "zh": "剩下的",
    "py": "Shèngxià de",
    "vn": "phần còn lại"
   },
   {
    "zh": "还剩十分钟",
    "py": "Hái shèng shí fēnzhōng",
    "vn": "còn mười phút"
   },
   {
    "zh": "剩菜",
    "py": "Shèng cài",
    "vn": "đồ ăn thừa"
   }
  ],
  "patterns": [
   {
    "s": "(还) 剩 + số lượng + N",
    "m": "还剩十分钟 / 还剩两个"
   },
   {
    "s": "剩下的 + (N)",
    "m": "Phần còn lại"
   }
  ],
  "ex_zh": "我先休息一会儿，再去车里拿剩下的。",
  "ex_py": "Wǒ xiān xiūxi yíhuìr, zài qù chē lǐ ná shèngxià de.",
  "ex_vn": "Cô nghỉ một lát đã, rồi ra xe lấy chỗ còn lại.",
  "exList": [
   {
    "zh": "我先休息一会儿，再去车里拿剩下的。",
    "py": "Wǒ xiān xiūxi yíhuìr, zài qù chē lǐ ná shèngxià de.",
    "vn": "Cô nghỉ một lát đã, rồi ra xe lấy chỗ còn lại."
   },
   {
    "zh": "还剩不少菜，我们带回家吃吧。",
    "py": "Hái shèng bùshǎo cài, wǒmen dài huíjiā chī ba.",
    "vn": "Còn thừa khá nhiều món, mình mang về nhà ăn đi."
   }
  ],
  "hanzi": [
   {
    "c": "剩",
    "p": "shèng",
    "type": "左右结构 · Trái-phải",
    "st": 12,
    "ord": "乘 trái → 刂 phải",
    "rad": "刂 (đao)",
    "mean": "thừa",
    "tip": "乘 + 刂(dao) → cắt đi phần dùng, phần THỪA còn lại. 剩下 = còn lại.",
    "cf": "乘 (chéng – đi xe, Bài 14)",
    "w": "剩 / 剩下 / 剩菜"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Chỉ còn mười phút, chúng ta vẫn kịp ăn sáng.",
    "answer": "只剩十分钟了，咱们还来得及吃早饭。",
    "answerPy": "Zhǐ shèng shí fēnzhōng le, zánmen hái láidejí chī zǎofàn.",
    "note": "来得及 (Bài 4 · điểm 4).",
    "pair": "剩……，来得及……"
   },
   {
    "promptLang": "vi",
    "prompt": "Món còn thừa nhiều quá, hai chúng ta ăn không hết.",
    "answer": "剩下的菜太多了，咱们两个人吃不了。",
    "answerPy": "Shèngxià de cài tài duō le, zánmen liǎng gè rén chī bu liǎo.",
    "note": "Bổ ngữ khả năng 吃不了 (Bài 4 · điểm 1).",
    "pair": "V不了"
   }
  ]
 },
 {
  "n": 11,
  "zh": "提",
  "py": "tí",
  "pos": "Động từ",
  "vn": "xách (tay buông thẳng xuống)",
  "hv": "đề",
  "em": "👜",
  "lesson": 2,
  "explain": [
   "Cầm vật có quai, tay buông thẳng xuống: xách túi, xách giỏ. Phân biệt: 拿 cầm (chung), 抱 ôm, 背 đeo / cõng, 搬 khiêng."
  ],
  "usage": "提袋子 · 提上去 · 提着 · 提不动.",
  "collo": [
   "提袋子",
   "提上去",
   "提着",
   "提不动"
  ],
  "colloFull": [
   {
    "zh": "提袋子",
    "py": "Tí dàizi",
    "vn": "xách túi"
   },
   {
    "zh": "提上去",
    "py": "Tí shàngqu",
    "vn": "xách lên"
   },
   {
    "zh": "提着",
    "py": "Tí zhe",
    "vn": "đang xách"
   },
   {
    "zh": "提不动",
    "py": "Tí bu dòng",
    "vn": "xách không nổi"
   }
  ],
  "patterns": [
   {
    "s": "提 + 着 + N",
    "m": "Trạng thái đang xách (着 – HSK 3)"
   },
   {
    "s": "提 + 上去 / 下来 / 回来",
    "m": "Bổ ngữ xu hướng"
   }
  ],
  "ex_zh": "我正好要上楼，我帮您提上去吧。",
  "ex_py": "Wǒ zhènghǎo yào shànglóu, wǒ bāng nín tí shàngqu ba.",
  "ex_vn": "Cháu đang định lên lầu, cháu xách lên giúp cô nhé.",
  "exList": [
   {
    "zh": "我正好要上楼，我帮您提上去吧。",
    "py": "Wǒ zhènghǎo yào shànglóu, wǒ bāng nín tí shàngqu ba.",
    "vn": "Cháu đang định lên lầu, cháu xách lên giúp cô nhé."
   },
   {
    "zh": "她提着两个纸袋子。",
    "py": "Tā tí zhe liǎng gè zhǐ dàizi.",
    "vn": "Cô ấy xách hai cái túi giấy."
   }
  ],
  "hanzi": [
   {
    "c": "提",
    "p": "tí",
    "type": "左右结构 · Trái-phải",
    "st": 12,
    "ord": "扌 (thủ) trái → 是 phải",
    "rad": "扌 (thủ – tay)",
    "mean": "xách, nhắc đến",
    "tip": "Bộ tay 扌 (hành động cầm/xách) + 是 (biểu âm) → dùng tay XÁCH lên, mở rộng thành NHẮC ĐẾN (đưa một chuyện ra).",
    "cf": "题 (tí – \"đề bài\", có bộ 页\")",
    "w": "提到 / 别提了 / 提问"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Cái vali này nặng quá, tôi xách không nổi.",
    "answer": "这个箱子太重了，我提不动。",
    "answerPy": "Zhège xiāngzi tài zhòng le, wǒ tí bu dòng.",
    "note": "Bổ ngữ khả năng 提不动 (HSK 3).",
    "pair": "V不动"
   },
   {
    "promptLang": "vi",
    "prompt": "Cô ấy không chỉ xách túi, mà còn bế một đứa bé.",
    "answer": "她不仅提着袋子，还抱着一个孩子。",
    "answerPy": "Tā bùjǐn tí zhe dàizi, hái bào zhe yí gè háizi.",
    "note": "不仅……还…… (Bài 3 · điểm 2).",
    "pair": "不仅……还……"
   }
  ]
 },
 {
  "n": 12,
  "zh": "袋子",
  "py": "dàizi",
  "pos": "Danh từ",
  "vn": "túi, bao",
  "hv": "đại tử",
  "em": "🛍️",
  "lesson": 2,
  "explain": [
   "Túi đựng đồ (bằng nhựa, giấy, vải)."
  ],
  "usage": "一个袋子 · 塑料袋子 · 纸袋子 · 装进袋子.",
  "collo": [
   "纸袋子",
   "塑料袋子",
   "一个袋子",
   "装进袋子"
  ],
  "colloFull": [
   {
    "zh": "纸袋子",
    "py": "Zhǐ dàizi",
    "vn": "túi giấy"
   },
   {
    "zh": "塑料袋子",
    "py": "Sùliào dàizi",
    "vn": "túi nhựa"
   },
   {
    "zh": "一个袋子",
    "py": "Yí gè dàizi",
    "vn": "một cái túi"
   },
   {
    "zh": "装进袋子",
    "py": "Zhuāngjìn dàizi",
    "vn": "cho vào túi"
   }
  ],
  "patterns": [
   {
    "s": "个 + 袋子",
    "m": "Lượng từ: 一个袋子 / 这几个袋子"
   },
   {
    "s": "把 + N + 放进 + 袋子里",
    "m": "Câu 把 (HSK 3)"
   }
  ],
  "ex_zh": "不用不用，这几个袋子太重了，我自己拿吧。",
  "ex_py": "Búyòng búyòng, zhè jǐ gè dàizi tài zhòng le, wǒ zìjǐ ná ba.",
  "ex_vn": "Không cần không cần, mấy cái túi này nặng quá, cô tự mang được.",
  "exList": [
   {
    "zh": "不用不用，这几个袋子太重了，我自己拿吧。",
    "py": "Búyòng búyòng, zhè jǐ gè dàizi tài zhòng le, wǒ zìjǐ ná ba.",
    "vn": "Không cần không cần, mấy cái túi này nặng quá, cô tự mang được."
   },
   {
    "zh": "去超市的时候，我习惯自己带袋子。",
    "py": "Qù chāoshì de shíhou, wǒ xíguàn zìjǐ dài dàizi.",
    "vn": "Khi đi siêu thị, tôi quen tự mang túi."
   }
  ],
  "hanzi": [
   {
    "c": "袋",
    "p": "dài",
    "type": "上下结构 · Trên-dưới",
    "st": 11,
    "ord": "代 trên → 衣 dưới",
    "rad": "衣 (y – áo, vải)",
    "mean": "túi",
    "tip": "Bộ vải 衣 + 代(biểu âm) → TÚI (làm bằng vải/giấy).",
    "cf": "代 (dài – \"thay\", phần trên)",
    "w": "纸袋 / 袋子 / 口袋"
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
    "prompt": "Hãy bỏ sách vào túi.",
    "answer": "请把书放进袋子里。",
    "answerPy": "Qǐng bǎ shū fàngjìn dàizi lǐ.",
    "note": "Ôn câu chữ 把 (HSK 3).",
    "pair": "把……放进……"
   },
   {
    "promptLang": "vi",
    "prompt": "Mua đồ tự mang túi, một mặt tiết kiệm tiền, mặt khác bảo vệ môi trường.",
    "answer": "买东西自己带袋子，一方面能省钱，另一方面能保护环境。",
    "answerPy": "Mǎi dōngxi zìjǐ dài dàizi, yìfāngmiàn néng shěng qián, lìngyìfāngmiàn néng bǎohù huánjìng.",
    "note": "一方面……另一方面…… (Bài 1 · điểm 4).",
    "pair": "一方面……另一方面……"
   }
  ]
 },
 {
  "n": 13,
  "zh": "重",
  "py": "zhòng",
  "pos": "Tính từ / Danh từ",
  "vn": "nặng; trọng lượng, cân nặng",
  "hv": "trọng",
  "em": "🏋️",
  "lesson": 2,
  "explain": [
   "Tính từ: nặng (trái nghĩa 轻).",
   "Danh từ: trọng lượng, cân nặng — 有多重？ (Chữ này đọc chóng khi nghĩa là “lặp lại”: 重新.)"
  ],
  "usage": "很重 · 太重了 · 有多重？",
  "collo": [
   "很重",
   "太重了",
   "有多重",
   "重量"
  ],
  "colloFull": [
   {
    "zh": "很重",
    "py": "Hěn zhòng",
    "vn": "rất nặng"
   },
   {
    "zh": "太重了",
    "py": "Tài zhòng le",
    "vn": "nặng quá"
   },
   {
    "zh": "有多重",
    "py": "Yǒu duō zhòng",
    "vn": "nặng bao nhiêu"
   },
   {
    "zh": "重量",
    "py": "Zhòngliàng",
    "vn": "trọng lượng"
   }
  ],
  "patterns": [
   {
    "s": "N + 太重了 / 很重",
    "m": "Nặng"
   },
   {
    "s": "N + 有 + 多重？",
    "m": "Hỏi cân nặng"
   }
  ],
  "ex_zh": "不用不用，这几个袋子太重了，我自己拿吧。",
  "ex_py": "Búyòng búyòng, zhè jǐ gè dàizi tài zhòng le, wǒ zìjǐ ná ba.",
  "ex_vn": "Không cần không cần, mấy cái túi này nặng quá, cô tự mang được.",
  "exList": [
   {
    "zh": "不用不用，这几个袋子太重了，我自己拿吧。",
    "py": "Búyòng búyòng, zhè jǐ gè dàizi tài zhòng le, wǒ zìjǐ ná ba.",
    "vn": "Không cần không cần, mấy cái túi này nặng quá, cô tự mang được."
   },
   {
    "zh": "这个箱子太重了，他们两个人才能搬动。",
    "py": "Zhège xiāngzi tài zhòng le, tāmen liǎng gè rén cáinéng bān dòng.",
    "vn": "Cái thùng này nặng quá, hai người họ mới khiêng nổi."
   }
  ],
  "hanzi": [
   {
    "c": "重",
    "p": "zhòng",
    "type": "独体字 · Chữ đơn thể",
    "st": 9,
    "ord": "丿 → 一 → 日 → 土",
    "rad": "里 (lý)",
    "mean": "nặng",
    "tip": "Hình người đứng trên đất 土 vác túi nặng → NẶNG. Đa âm: zhòng (nặng, quan trọng 重要) / chóng (lặp lại 重新).",
    "cf": "童 (tóng – trẻ con)",
    "w": "重 / 严重 / 重要 / 重新"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Cái thùng này nặng quá, hai người họ mới khiêng nổi.",
    "answer": "这个箱子太重了，他们两个人才能搬动。",
    "answerPy": "Zhège xiāngzi tài zhòng le, tāmen liǎng gè rén cáinéng bān dòng.",
    "note": "Đáp án gợi ý bài nhìn tranh đặt câu của sách; ôn 才 (HSK 3).",
    "pair": "太重了，……才……"
   },
   {
    "promptLang": "vi",
    "prompt": "Hành lý của bạn nặng bao nhiêu? Nếu nặng quá thì tôi xách giúp bạn.",
    "answer": "你的行李有多重？要是太重，我就帮你提。",
    "answerPy": "Nǐ de xíngli yǒu duō zhòng? Yàoshi tài zhòng, wǒ jiù bāng nǐ tí.",
    "note": "要是……就…… (Bài 1 · điểm 2).",
    "pair": "要是……就……"
   }
  ]
 },
 {
  "n": 14,
  "zh": "算",
  "py": "suàn",
  "pos": "Động từ",
  "vn": "coi như, được tính là; tính (toán)",
  "hv": "toán",
  "em": "🧮",
  "lesson": 2,
  "explain": [
   "Trong bài: “coi như là, có thể xem là” — 就算锻炼身体了.",
   "Nghĩa gốc: tính toán (算钱, 算一算); 不算 + tính từ = không đến mức, không tính là."
  ],
  "usage": "(就) 算……了 · 不算远 · 算钱 · 算了.",
  "collo": [
   "就算……了",
   "不算远",
   "算钱",
   "算了"
  ],
  "colloFull": [
   {
    "zh": "就算……了",
    "py": "Jiùsuàn…… le",
    "vn": "coi như là …"
   },
   {
    "zh": "不算远",
    "py": "Bú suàn yuǎn",
    "vn": "không xa lắm"
   },
   {
    "zh": "算钱",
    "py": "Suàn qián",
    "vn": "tính tiền"
   },
   {
    "zh": "算了",
    "py": "Suànle",
    "vn": "thôi, bỏ đi"
   }
  ],
  "patterns": [
   {
    "s": "A + (就) 算 + B + 了",
    "m": "Coi A như là B"
   },
   {
    "s": "不算 + Adj",
    "m": "Không tính là, không đến mức"
   }
  ],
  "ex_zh": "没事，我提着这些东西就算锻炼身体了。",
  "ex_py": "Méishì, wǒ tí zhe zhèxiē dōngxi jiùsuàn duànliàn shēntǐ le.",
  "ex_vn": "Không sao ạ, cháu xách mấy thứ này coi như là tập thể dục rồi.",
  "exList": [
   {
    "zh": "没事，我提着这些东西就算锻炼身体了。",
    "py": "Méishì, wǒ tí zhe zhèxiē dōngxi jiùsuàn duànliàn shēntǐ le.",
    "vn": "Không sao ạ, cháu xách mấy thứ này coi như là tập thể dục rồi."
   },
   {
    "zh": "我家到公司的距离不算远，走路大概半个小时。",
    "py": "Wǒ jiā dào gōngsī de jùlí bú suàn yuǎn, zǒulù dàgài bàn gè xiǎoshí.",
    "vn": "Từ nhà tôi đến công ty không tính là xa, đi bộ khoảng nửa tiếng."
   }
  ],
  "hanzi": [
   {
    "c": "算",
    "p": "suàn",
    "type": "上下结构 · Trên-dưới",
    "st": 14,
    "ord": "竹 (trúc) trên → 目+廾 dưới",
    "rad": "竹 (trúc – tre)",
    "mean": "tính toán",
    "tip": "Bộ tre 竹 (dụng cụ tính toán cổ, như bàn tính) → nghĩa TÍNH TOÁN, mở rộng thành \"dự tính, dự định\".",
    "cf": "笔 (bǐ – \"bút\", cũng có bộ 竹\")",
    "w": "打算 / 计算 / 算了"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Bà nói mỗi ngày bà dọn phòng, coi như là tập thể dục rồi.",
    "answer": "奶奶说她每天打扫房间，就算做运动了。",
    "answerPy": "Nǎinai shuō tā měitiān dǎsǎo fángjiān, jiùsuàn zuò yùndòng le.",
    "note": "Bài tập chọn từ của sách (câu 5).",
    "pair": "就算……了"
   },
   {
    "promptLang": "vi",
    "prompt": "Giá ở đây không tính là đắt, có điều hơi xa.",
    "answer": "这里的价格不算贵，不过有点儿远。",
    "answerPy": "Zhèli de jiàgé bú suàn guì, búguò yǒudiǎnr yuǎn.",
    "note": "……，不过…… (Bài 2 · điểm 2).",
    "pair": "不算 + Adj"
   }
  ]
 },
 {
  "n": 15,
  "zh": "再说",
  "py": "zàishuō",
  "pos": "Liên từ",
  "vn": "hơn nữa, vả lại, với lại",
  "hv": "tái thuyết",
  "em": "➕",
  "lesson": 2,
  "explain": [
   "Đứng đầu vế sau, đưa thêm MỘT LÝ DO / tình huống nữa sau lý do đã nêu (Bài 4 · điểm 2).",
   "Khác 再说 động từ: “để sau hãy nói / tính” — 这件事明天再说吧."
  ],
  "usage": "lý do 1，再说 + lý do 2 · ……以后再说.",
  "collo": [
   "再说……也……",
   "再说了",
   "以后再说",
   "明天再说"
  ],
  "colloFull": [
   {
    "zh": "再说……也……",
    "py": "Zàishuō…… yě……",
    "vn": "vả lại … cũng …"
   },
   {
    "zh": "再说了",
    "py": "Zàishuō le",
    "vn": "với lại"
   },
   {
    "zh": "以后再说",
    "py": "Yǐhòu zàishuō",
    "vn": "để sau hãy tính"
   },
   {
    "zh": "明天再说",
    "py": "Míngtiān zàishuō",
    "vn": "mai tính"
   }
  ],
  "patterns": [
   {
    "s": "lý do 1，再说 + lý do 2",
    "m": "Hai lý do cùng chiều (Bài 4 · điểm 2)"
   },
   {
    "s": "……以后 / 明天 + 再说",
    "m": "Động từ: để sau tính"
   }
  ],
  "ex_zh": "我提着这些东西就算锻炼身体了，再说邻居之间就是要互相帮助啊。",
  "ex_py": "Wǒ tí zhe zhèxiē dōngxi jiùsuàn duànliàn shēntǐ le, zàishuō línjū zhījiān jiùshì yào hùxiāng bāngzhù ā.",
  "ex_vn": "Cháu xách mấy thứ này coi như tập thể dục rồi, vả lại hàng xóm với nhau thì phải giúp đỡ lẫn nhau mà.",
  "exList": [
   {
    "zh": "我提着这些东西就算锻炼身体了，再说邻居之间就是要互相帮助啊。",
    "py": "Wǒ tí zhe zhèxiē dōngxi jiùsuàn duànliàn shēntǐ le, zàishuō línjū zhījiān jiùshì yào hùxiāng bāngzhù ā.",
    "vn": "Cháu xách mấy thứ này coi như tập thể dục rồi, vả lại hàng xóm với nhau thì phải giúp đỡ lẫn nhau mà."
   },
   {
    "zh": "今天太晚了，别去超市了，再说外面还在下雨呢。",
    "py": "Jīntiān tài wǎn le, bié qù chāoshì le, zàishuō wàimian hái zài xiàyǔ ne.",
    "vn": "Hôm nay muộn quá rồi, đừng đi siêu thị nữa, vả lại ngoài trời vẫn đang mưa."
   }
  ],
  "hanzi": [
   {
    "c": "再",
    "p": "zài",
    "type": "独体字 · Chữ đơn",
    "st": 6,
    "ord": "一→冂→土(biến thể)",
    "rad": "冂 (biến thể)",
    "mean": "lại, lần nữa",
    "tip": "Hình ảnh một vật được xếp CHỒNG THÊM một lần nữa lên trên → LẶP LẠI, LẦN NỮA.",
    "cf": "冉 (rǎn – yếu tố Hán cổ)",
    "w": "再见"
   },
   {
    "c": "说",
    "p": "shuō",
    "type": "左右结构 · Trái-phải (giản thể)",
    "st": 9,
    "ord": "讠 (ngôn) trái → 兑 (đoài) phải",
    "rad": "讠 (ngôn – lời nói)",
    "mean": "nói, kể",
    "tip": "Bộ lời nói 讠 (kể chuyện) + 兑(biểu âm) → KỂ LẠI câu chuyện, kết hợp 小(nhỏ, vụn vặt) thành 小说 = TIỂU THUYẾT (chuyện kể).",
    "cf": "脱 (tuō – \"cởi bỏ\", bộ 月\")",
    "w": "小说 / 说话 / 小说家"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Đừng mua nữa, cái áo này hơi đắt, vả lại bạn đã có rất nhiều áo rồi.",
    "answer": "别买了，这件衣服有点儿贵，再说你已经有很多衣服了。",
    "answerPy": "Bié mǎi le, zhè jiàn yīfu yǒudiǎnr guì, zàishuō nǐ yǐjīng yǒu hěn duō yīfu le.",
    "note": "再说 bổ sung lý do (Bài 4 · điểm 2).",
    "pair": "……，再说……"
   },
   {
    "promptLang": "vi",
    "prompt": "Đi xe đạp đi, không xa lắm, vả lại cũng rèn luyện được thân thể.",
    "answer": "骑自行车去吧，不算太远，再说也能锻炼身体。",
    "answerPy": "Qí zìxíngchē qù ba, bú suàn tài yuǎn, zàishuō yě néng duànliàn shēntǐ.",
    "note": "Kết hợp 不算 (từ 14) + 再说.",
    "pair": "不算……，再说……"
   }
  ]
 },
 {
  "n": 16,
  "zh": "之间",
  "py": "zhījiān",
  "pos": "Danh từ",
  "vn": "giữa (hai / nhiều người, vật, thời điểm)",
  "hv": "chi gian",
  "em": "↔️",
  "lesson": 2,
  "explain": [
   "Đứng sau danh từ chỉ người, vật, thời gian, nơi chốn để nói “ở giữa”, “với nhau”."
  ],
  "usage": "邻居之间 · 朋友之间 · A和B之间 · 两点到四点之间.",
  "collo": [
   "邻居之间",
   "朋友之间",
   "我们之间",
   "A和B之间"
  ],
  "colloFull": [
   {
    "zh": "邻居之间",
    "py": "Línjū zhījiān",
    "vn": "giữa hàng xóm với nhau"
   },
   {
    "zh": "朋友之间",
    "py": "Péngyou zhījiān",
    "vn": "giữa bạn bè"
   },
   {
    "zh": "我们之间",
    "py": "Wǒmen zhījiān",
    "vn": "giữa chúng ta"
   },
   {
    "zh": "A和B之间",
    "py": "A hé B zhījiān",
    "vn": "giữa A và B"
   }
  ],
  "patterns": [
   {
    "s": "N (số nhiều) + 之间",
    "m": "Giữa những người / vật thuộc nhóm N"
   },
   {
    "s": "A + 和 + B + 之间",
    "m": "Giữa A và B"
   }
  ],
  "ex_zh": "再说邻居之间就是要互相帮助啊。",
  "ex_py": "Zàishuō línjū zhījiān jiùshì yào hùxiāng bāngzhù ā.",
  "ex_vn": "Vả lại hàng xóm với nhau thì phải giúp đỡ lẫn nhau mà.",
  "exList": [
   {
    "zh": "再说邻居之间就是要互相帮助啊。",
    "py": "Zàishuō línjū zhījiān jiùshì yào hùxiāng bāngzhù ā.",
    "vn": "Vả lại hàng xóm với nhau thì phải giúp đỡ lẫn nhau mà."
   },
   {
    "zh": "同学之间应该互相帮助、互相学习。",
    "py": "Tóngxué zhījiān yīnggāi hùxiāng bāngzhù, hùxiāng xuéxí.",
    "vn": "Bạn học với nhau nên giúp đỡ nhau, học hỏi lẫn nhau."
   }
  ],
  "hanzi": [
   {
    "c": "之",
    "p": "zhī",
    "type": "独体字 · Chữ đơn",
    "st": 3,
    "ord": "丶 → 𠃋 → 乀",
    "rad": "丶 (chủ)",
    "mean": "của, đi",
    "tip": "Chữ tượng hình bàn chân bước đi khỏi vạch (nghĩa gốc là ĐI), sau mượn làm trợ từ CỦA trong văn viết (之后 = sau đó).",
    "cf": "乏 (fá – \"thiếu\", tự dạng gần giống)",
    "w": "之后 / 之一 / 之间"
   },
   {
    "c": "间",
    "p": "jiān",
    "type": "会意字 · Chữ hội ý",
    "st": 7,
    "ord": "门 → 日",
    "rad": "门 (môn – cửa)",
    "mean": "khoảng giữa, gian",
    "tip": "Ánh mặt trời 日 lọt qua khe cửa 门 → khoảng giữa. Đã gặp trong 时间, 房间.",
    "cf": "问 wèn (hỏi) — trong 门 là 口",
    "w": "中间 / 时间 / 房间"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Giữa bạn bè với nhau không cần khách sáo.",
    "answer": "朋友之间不用客气。",
    "answerPy": "Péngyou zhījiān búyòng kèqi.",
    "note": "Kết hợp 客气 (từ 9).",
    "pair": "N + 之间"
   },
   {
    "promptLang": "vi",
    "prompt": "Từ 2 giờ đến 4 giờ chiều tôi đều ở văn phòng, bất cứ lúc nào bạn cũng có thể đến tìm tôi.",
    "answer": "下午两点到四点之间，我都在办公室，你任何时候都可以来找我。",
    "answerPy": "Xiàwǔ liǎng diǎndào sì diǎn zhījiān, wǒ dōu zài bàngōngshì, nǐ rènhé shíhou dōu kěyǐ lái zhǎo wǒ.",
    "note": "之间 với thời gian + 任何 (Bài 1 · điểm 1).",
    "pair": "……之间 / 任何……都……"
   }
  ]
 },
 {
  "n": 17,
  "zh": "互相",
  "py": "hùxiāng",
  "pos": "Phó từ",
  "vn": "lẫn nhau, với nhau",
  "hv": "hỗ tương",
  "em": "🤝",
  "lesson": 2,
  "explain": [
   "Hai bên cùng làm việc gì cho nhau; chủ ngữ phải là số nhiều (hai người trở lên)."
  ],
  "usage": "互相帮助 · 互相学习 · 互相了解 · 互相关心.",
  "collo": [
   "互相帮助",
   "互相学习",
   "互相了解",
   "互相关心"
  ],
  "colloFull": [
   {
    "zh": "互相帮助",
    "py": "Hùxiāng bāngzhù",
    "vn": "giúp đỡ lẫn nhau"
   },
   {
    "zh": "互相学习",
    "py": "Hùxiāng xuéxí",
    "vn": "học hỏi lẫn nhau"
   },
   {
    "zh": "互相了解",
    "py": "Hùxiāng liǎojiě",
    "vn": "hiểu nhau"
   },
   {
    "zh": "互相关心",
    "py": "Hùxiāng guānxīn",
    "vn": "quan tâm nhau"
   }
  ],
  "patterns": [
   {
    "s": "互相 + V (thường hai âm tiết)",
    "m": "✗ 互相帮 → ✓ 互相帮助"
   },
   {
    "s": "Chủ ngữ số nhiều + 互相 + V",
    "m": "✗ 我互相帮助 → ✓ 我们互相帮助"
   }
  ],
  "ex_zh": "再说邻居之间就是要互相帮助啊。",
  "ex_py": "Zàishuō línjū zhījiān jiùshì yào hùxiāng bāngzhù ā.",
  "ex_vn": "Vả lại hàng xóm với nhau thì phải giúp đỡ lẫn nhau mà.",
  "exList": [
   {
    "zh": "再说邻居之间就是要互相帮助啊。",
    "py": "Zàishuō línjū zhījiān jiùshì yào hùxiāng bāngzhù ā.",
    "vn": "Vả lại hàng xóm với nhau thì phải giúp đỡ lẫn nhau mà."
   },
   {
    "zh": "我们俩经常互相学习对方的语言。",
    "py": "Wǒmen liǎ jīngcháng hùxiāng xuéxí duìfāng de yǔyán.",
    "vn": "Hai chúng tôi thường học ngôn ngữ của nhau."
   }
  ],
  "hanzi": [
   {
    "c": "互",
    "p": "hù",
    "type": "独体字 · Chữ đơn",
    "st": 4,
    "ord": "nét liền, hình sợi dây tết chéo",
    "rad": "一 (nhất)",
    "mean": "lẫn nhau, qua lại",
    "tip": "Hình tượng cổ mô phỏng một dụng cụ đan XEN KẼ qua lại → mở rộng nghĩa thành LẪN NHAU.",
    "cf": "瓦 (wǎ – \"ngói\", hình gần giống nhưng không liên quan nghĩa)",
    "w": "互相 / 相互 / 互联网"
   },
   {
    "c": "相",
    "p": "xiāng",
    "type": "左右结构 · Trái-phải",
    "st": 9,
    "ord": "木 (mộc) trái → 目 (mục) phải",
    "rad": "目 (mục – mắt)",
    "mean": "lẫn nhau",
    "tip": "Chữ hội ý mắt 目 nhìn cây 木 → QUAN SÁT, mở rộng thành LẪN NHAU, kết hợp 同(giống) thành 相同 = GIỐNG NHAU.",
    "cf": "想 (xiǎng – \"nghĩ\", thêm bộ 心)",
    "w": "相同 / 相信 / 互相"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Bạn học với nhau nên giúp đỡ và học hỏi lẫn nhau.",
    "answer": "同学之间应该互相帮助、互相学习。",
    "answerPy": "Tóngxué zhījiān yīnggāi hùxiāng bāngzhù, hùxiāng xuéxí.",
    "note": "Bài tập chọn từ của sách (câu 3).",
    "pair": "互相 + V"
   },
   {
    "promptLang": "vi",
    "prompt": "Thông qua giao lưu, chúng tôi bắt đầu hiểu nhau.",
    "answer": "通过交流，我们开始互相了解。",
    "answerPy": "Tōngguò jiāoliú, wǒmen kāishǐ hùxiāng liǎojiě.",
    "note": "Ôn 通过 + 交流 (Bài 1 · từ mới).",
    "pair": "通过……，……"
   }
  ]
 },
 {
  "n": 18,
  "zh": "辛苦",
  "py": "xīnkǔ",
  "pos": "Động từ / Tính từ",
  "vn": "vất vả; làm phiền (ai) vất vả",
  "hv": "tân khổ",
  "em": "😓",
  "lesson": 2,
  "explain": [
   "Tính từ: vất vả, cực nhọc.",
   "Động từ: dùng khi nhờ hoặc cảm ơn người làm việc cho mình — 辛苦你了 = làm phiền bạn / bạn vất vả rồi."
  ],
  "usage": "辛苦你了 · 大家辛苦了 · 工作很辛苦.",
  "collo": [
   "辛苦你了",
   "大家辛苦了",
   "很辛苦",
   "辛苦的工作"
  ],
  "colloFull": [
   {
    "zh": "辛苦你了",
    "py": "Xīnkǔ nǐ le",
    "vn": "làm phiền bạn rồi"
   },
   {
    "zh": "大家辛苦了",
    "py": "Dàjiā xīnkǔ le",
    "vn": "mọi người vất vả rồi"
   },
   {
    "zh": "很辛苦",
    "py": "Hěn xīnkǔ",
    "vn": "rất vất vả"
   },
   {
    "zh": "辛苦的工作",
    "py": "Xīnkǔ de gōngzuò",
    "vn": "công việc vất vả"
   }
  ],
  "patterns": [
   {
    "s": "(那就) 辛苦 + ai + 了",
    "m": "Nhờ / cảm ơn ai làm việc vất vả"
   },
   {
    "s": "Sub + 很辛苦",
    "m": "Tính từ"
   }
  ],
  "ex_zh": "谢谢家月！那就辛苦你了。",
  "ex_py": "Xièxie Jiāyuè! Nà jiù xīnkǔ nǐ le.",
  "ex_vn": "Cảm ơn Gia Nguyệt! Thế thì làm phiền cháu vậy.",
  "exList": [
   {
    "zh": "谢谢家月！那就辛苦你了。",
    "py": "Xièxie Jiāyuè! Nà jiù xīnkǔ nǐ le.",
    "vn": "Cảm ơn Gia Nguyệt! Thế thì làm phiền cháu vậy."
   },
   {
    "zh": "爸爸每天工作很辛苦。",
    "py": "Bàba měitiān gōngzuò hěn xīnkǔ.",
    "vn": "Bố mỗi ngày làm việc rất vất vả."
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
   },
   {
    "c": "苦",
    "p": "kǔ",
    "type": "上下结构 · Trên-dưới",
    "st": 8,
    "ord": "艹 (thảo) trên → 古 dưới",
    "rad": "艹 (thảo – cỏ)",
    "mean": "đắng, khổ",
    "tip": "Bộ cỏ 艹 + 古 → loại cỏ ĐẮNG (khổ sâm), mở rộng thành KHỔ CỰC (辛苦 Bài 9).",
    "cf": "古 (gǔ – \"cổ\", phần dưới)",
    "w": "苦 / 辛苦 / 吃苦"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Hôm nay mọi người vất vả rồi, về nhà nghỉ sớm nhé.",
    "answer": "大家今天辛苦了，早点儿回家休息吧。",
    "answerPy": "Dàjiā jīntiān xīnkǔ le, zǎodiǎnr huíjiā xiūxi ba.",
    "note": "辛苦了 — lời cảm ơn thường gặp.",
    "pair": "辛苦了"
   },
   {
    "promptLang": "vi",
    "prompt": "Công việc này vất vả thì vất vả thật, có điều rất thú vị.",
    "answer": "这份工作辛苦是辛苦，不过很有意思。",
    "answerPy": "Zhè fèn gōngzuò xīnkǔ shì xīnkǔ, búguò hěn yǒu yìsi.",
    "note": "……×是×，不过…… (Bài 3 · điểm 1).",
    "pair": "A是A，不过……"
   }
  ]
 },
 {
  "n": 19,
  "zh": "出行",
  "py": "chūxíng",
  "pos": "Động từ",
  "vn": "đi lại, ra ngoài đi đường",
  "hv": "xuất hành",
  "em": "🚶",
  "lesson": 3,
  "explain": [
   "Rời nhà đi ra ngoài: đi làm, đi học, đi chơi; hay gặp trong 出行方式, 绿色出行. Khác “xuất hành” đầu năm của người Việt."
  ],
  "usage": "出行方式 · 绿色出行 · 短距离出行 · 方便出行.",
  "collo": [
   "出行方式",
   "绿色出行",
   "短距离出行",
   "方便出行"
  ],
  "colloFull": [
   {
    "zh": "出行方式",
    "py": "Chūxíng fāngshì",
    "vn": "cách đi lại"
   },
   {
    "zh": "绿色出行",
    "py": "Lǜsè chūxíng",
    "vn": "đi lại xanh"
   },
   {
    "zh": "短距离出行",
    "py": "Duǎn jùlí chūxíng",
    "vn": "đi quãng ngắn"
   },
   {
    "zh": "方便出行",
    "py": "Fāngbiàn chūxíng",
    "vn": "tiện đi lại"
   }
  ],
  "patterns": [
   {
    "s": "出行 + 的 + 方式",
    "m": "Cách đi lại"
   },
   {
    "s": "……出行时，……",
    "m": "Khi đi lại …"
   }
  ],
  "ex_zh": "在城市里，人们出行的方式越来越多。",
  "ex_py": "Zài chéngshì lǐ, rénmen chūxíng de fāngshì yuèláiyuè duō.",
  "ex_vn": "Ở thành phố, cách đi lại của mọi người ngày càng nhiều.",
  "exList": [
   {
    "zh": "在城市里，人们出行的方式越来越多。",
    "py": "Zài chéngshì lǐ, rénmen chūxíng de fāngshì yuèláiyuè duō.",
    "vn": "Ở thành phố, cách đi lại của mọi người ngày càng nhiều."
   },
   {
    "zh": "绿色出行既能保护环境，又能锻炼身体。",
    "py": "Lǜsè chūxíng jì néng bǎohù huánjìng, yòu néng duànliàn shēntǐ.",
    "vn": "Đi lại xanh vừa bảo vệ môi trường, vừa rèn luyện được thân thể."
   }
  ],
  "hanzi": [
   {
    "c": "出",
    "p": "chū",
    "type": "独体字 · Chữ đơn",
    "st": 5,
    "ord": "凵 → 凵 chồng",
    "rad": "凵 (khảm)",
    "mean": "ra",
    "tip": "Chữ tượng hình bàn chân bước RA khỏi hang → RA, kết hợp 演 thành 演出 = DIỄN RA trước khán giả.",
    "cf": "山 (shān – \"núi\", tự dạng gần giống)",
    "w": "演出 / 出来 / 出发"
   },
   {
    "c": "行",
    "p": "xíng",
    "type": "左右结构 · Trái-phải",
    "st": 6,
    "ord": "彳 trái → 亍 phải",
    "rad": "行 (hành)",
    "mean": "được; đi",
    "tip": "Tượng hình NGÃ TƯ đường → ĐI, HÀNH; mở rộng thành \"được, ổn\" (xíng). Đọc háng = hàng, ngành (银行).",
    "cf": "街 (jiē – phố, có 行 bao ngoài)",
    "w": "行 / 不行 / 还行 / 银行 (háng)"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Khi đi quãng ngắn, đi xe đạp thường là lựa chọn phổ biến.",
    "answer": "短距离出行时，骑自行车往往是人们常见的选择。",
    "answerPy": "Duǎn jùlí chūxíng shí, qí zìxíngchē wǎngwǎng shì rénmen chángjiàn de xuǎnzé.",
    "note": "Câu bài khoá 3.",
    "pair": "……出行时，……"
   },
   {
    "promptLang": "vi",
    "prompt": "Cùng với tàu điện ngầm ngày càng nhiều, việc đi lại của mọi người ngày càng tiện.",
    "answer": "随着地铁越来越多，人们的出行越来越方便了。",
    "answerPy": "Suízhe dìtiě yuèláiyuè duō, rénmen de chūxíng yuèláiyuè fāngbiàn le.",
    "note": "随着 (Bài 1 · điểm 3).",
    "pair": "随着……越来越……"
   }
  ]
 },
 {
  "n": 20,
  "zh": "距离",
  "py": "jùlí",
  "pos": "Danh từ / Động từ",
  "vn": "khoảng cách, cự ly; cách (xa)",
  "hv": "cự li",
  "em": "📏",
  "lesson": 3,
  "explain": [
   "Danh từ: khoảng cách giữa hai nơi / hai thời điểm.",
   "Động từ: A 距离 B … = A cách B …"
  ],
  "usage": "短距离 · A到B的距离 · A距离B + số.",
  "collo": [
   "短距离",
   "距离不远",
   "A到B的距离",
   "距离考试"
  ],
  "colloFull": [
   {
    "zh": "短距离",
    "py": "Duǎn jùlí",
    "vn": "cự ly ngắn"
   },
   {
    "zh": "距离不远",
    "py": "Jùlí bù yuǎn",
    "vn": "khoảng cách không xa"
   },
   {
    "zh": "A到B的距离",
    "py": "A dào B de jùlí",
    "vn": "khoảng cách từ A đến B"
   },
   {
    "zh": "距离考试",
    "py": "Jùlí kǎoshì",
    "vn": "(còn bao lâu) đến kỳ thi"
   }
  ],
  "patterns": [
   {
    "s": "A + 到 + B + 的距离",
    "m": "Khoảng cách từ A đến B"
   },
   {
    "s": "A + 距离 + B + (有) + số",
    "m": "A cách B … (động từ)"
   }
  ],
  "ex_zh": "短距离出行时，骑自行车往往是人们常见的选择。",
  "ex_py": "Duǎn jùlí chūxíng shí, qí zìxíngchē wǎngwǎng shì rénmen chángjiàn de xuǎnzé.",
  "ex_vn": "Khi đi quãng ngắn, đi xe đạp thường là lựa chọn phổ biến.",
  "exList": [
   {
    "zh": "短距离出行时，骑自行车往往是人们常见的选择。",
    "py": "Duǎn jùlí chūxíng shí, qí zìxíngchē wǎngwǎng shì rénmen chángjiàn de xuǎnzé.",
    "vn": "Khi đi quãng ngắn, đi xe đạp thường là lựa chọn phổ biến."
   },
   {
    "zh": "我家到公司的距离不算远，走路大概半个小时。",
    "py": "Wǒ jiā dào gōngsī de jùlí bú suàn yuǎn, zǒulù dàgài bàn gè xiǎoshí.",
    "vn": "Khoảng cách từ nhà tôi đến công ty không xa lắm, đi bộ khoảng nửa tiếng."
   }
  ],
  "hanzi": [
   {
    "c": "距",
    "p": "jù",
    "type": "左右结构 · Trái-phải",
    "st": 11,
    "ord": "足 (túc) trái → 巨 (cự) phải",
    "rad": "足 (túc – chân)",
    "mean": "khoảng cách",
    "tip": "Bộ chân 足 (bước chân đo khoảng cách) + 巨(to lớn, biểu âm) → KHOẢNG CÁCH, kết hợp 离(rời xa) thành 距离 = KHOẢNG CÁCH.",
    "cf": "巨 (jù – \"to lớn\", không có bộ 足\")",
    "w": "距离 / 距离感 / 差距"
   },
   {
    "c": "离",
    "p": "lí",
    "type": "上下结构 · Trên-dưới",
    "st": 10,
    "ord": "亠+凶 trên → 离(giản thể riêng)",
    "rad": "离",
    "mean": "rời xa, cách",
    "tip": "Chữ cổ mô phỏng hình con chim tách bầy bay đi → nghĩa RỜI XA, TÁCH KHỎI.",
    "cf": "禽 (qín – \"cầm thú, chim\", có nét dưới tương tự\")",
    "w": "离开 / 离不开 / 距离"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Trường cách nhà tôi khoảng 3 km, đi xe đạp mười phút là đến.",
    "answer": "学校距离我家大概三公里，骑自行车十分钟就到了。",
    "answerPy": "Xuéxiào jùlí wǒ jiā dàgài sān gōnglǐ, qí zìxíngchē shí fēnzhōng jiù dào le.",
    "note": "距离 làm động từ.",
    "pair": "A距离B……"
   },
   {
    "promptLang": "vi",
    "prompt": "Nhà tôi cách công ty không xa, thế là tôi quyết định đi bộ đi làm.",
    "answer": "我家到公司的距离不远，于是我决定走路上班。",
    "answerPy": "Wǒ jiā dào gōngsī de jùlí bù yuǎn, yúshì wǒ juédìng zǒulù shàngbān.",
    "note": "……，于是…… (Bài 3 · điểm 4).",
    "pair": "……，于是……"
   }
  ]
 },
 {
  "n": 21,
  "zh": "往往",
  "py": "wǎngwǎng",
  "pos": "Phó từ",
  "vn": "thường thường, thường (theo quy luật)",
  "hv": "vãng vãng",
  "em": "🔁",
  "lesson": 3,
  "explain": [
   "Nói một việc thường xảy ra trong một điều kiện / hoàn cảnh nhất định, rút ra từ kinh nghiệm, quy luật.",
   "Khác 常常: 常常 chỉ tần suất, dùng được cho ý định tương lai (我以后常常来); 往往 không dùng cho ý định tương lai và câu thường có điều kiện."
  ],
  "usage": "……的时候，往往…… · 往往是 · 往往会.",
  "collo": [
   "往往是",
   "往往会",
   "……的时候，往往……",
   "往往这样"
  ],
  "colloFull": [
   {
    "zh": "往往是",
    "py": "Wǎngwǎng shì",
    "vn": "thường là"
   },
   {
    "zh": "往往会",
    "py": "Wǎngwǎng huì",
    "vn": "thường sẽ"
   },
   {
    "zh": "……的时候，往往……",
    "py": "…… De shíhou, wǎngwǎng……",
    "vn": "khi … thường …"
   },
   {
    "zh": "往往这样",
    "py": "Wǎngwǎng zhèyàng",
    "vn": "thường như vậy"
   }
  ],
  "patterns": [
   {
    "s": "(điều kiện) + Sub + 往往 + V",
    "m": "Theo quy luật"
   },
   {
    "s": "✗ 我以后往往来 → ✓ 我以后常常来",
    "m": "往往 không dùng cho ý định tương lai"
   }
  ],
  "ex_zh": "短距离出行时，骑自行车往往是人们常见的选择。",
  "ex_py": "Duǎn jùlí chūxíng shí, qí zìxíngchē wǎngwǎng shì rénmen chángjiàn de xuǎnzé.",
  "ex_vn": "Khi đi quãng ngắn, đi xe đạp thường là lựa chọn phổ biến.",
  "exList": [
   {
    "zh": "短距离出行时，骑自行车往往是人们常见的选择。",
    "py": "Duǎn jùlí chūxíng shí, qí zìxíngchē wǎngwǎng shì rénmen chángjiàn de xuǎnzé.",
    "vn": "Khi đi quãng ngắn, đi xe đạp thường là lựa chọn phổ biến."
   },
   {
    "zh": "周末的时候，这家饭馆往往人很多。",
    "py": "Zhōumò de shíhou, zhè jiā fànguǎn wǎngwǎng rén hěn duō.",
    "vn": "Cuối tuần, nhà hàng này thường rất đông."
   }
  ],
  "hanzi": [
   {
    "c": "往",
    "p": "wǎng",
    "type": "左右结构 · Trái-phải",
    "st": 8,
    "ord": "彳 (xích) trái → 主 (chủ) phải",
    "rad": "彳 (xích – bước chân)",
    "mean": "đi qua, thường",
    "tip": "Bộ bước chân 彳 (di chuyển lặp lại) + 主(biểu âm) → lặp lại nhiều lần TRONG QUÁ KHỨ, mở rộng thành THƯỜNG THƯỜNG (theo quy luật đã quan sát).",
    "cf": "住 (zhù – \"ở, trú\", bộ 亻\")",
    "w": "往往 / 往来 / 以往"
   },
   {
    "c": "往",
    "p": "wǎng",
    "type": "左右结构 · Trái-phải",
    "st": 8,
    "ord": "彳 (xích) trái → 主 (chủ) phải",
    "rad": "彳 (xích – bước chân)",
    "mean": "đi qua, thường",
    "tip": "Bộ bước chân 彳 (di chuyển lặp lại) + 主(biểu âm) → lặp lại nhiều lần TRONG QUÁ KHỨ, mở rộng thành THƯỜNG THƯỜNG (theo quy luật đã quan sát).",
    "cf": "住 (zhù – \"ở, trú\", bộ 亻\")",
    "w": "往往 / 往来 / 以往"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Khi trời mưa, đường thường rất tắc.",
    "answer": "下雨的时候，路上往往很堵。",
    "answerPy": "Xiàyǔ de shíhou, lùshang wǎngwǎng hěn dǔ.",
    "note": "往往 + điều kiện.",
    "pair": "……的时候，往往……"
   },
   {
    "promptLang": "vi",
    "prompt": "Người hay giúp đỡ người khác thường cũng nhận được sự giúp đỡ của người khác.",
    "answer": "经常帮助别人的人，往往也会得到别人的帮助。",
    "answerPy": "Jīngcháng bāngzhù biérén de rén, wǎngwǎng yě huì dédào biérén de bāngzhù.",
    "note": "往往 + 也会.",
    "pair": "往往也会……"
   }
  ]
 },
 {
  "n": 22,
  "zh": "既",
  "py": "jì",
  "pos": "Phó từ",
  "vn": "vừa…, đã… (lại…)",
  "hv": "ký",
  "em": "⚖️",
  "lesson": 3,
  "explain": [
   "Dùng trong 既……又 / 也……: nối hai tính chất / tình huống cùng tồn tại — “vừa … vừa …” (Bài 4 · điểm 3). Đứng sau chủ ngữ."
  ],
  "usage": "既……又…… · 既……也…… · 既方便又便宜.",
  "collo": [
   "既……又……",
   "既……也……",
   "既方便又便宜",
   "既快又好"
  ],
  "colloFull": [
   {
    "zh": "既……又……",
    "py": "Jì…… yòu……",
    "vn": "vừa … vừa …"
   },
   {
    "zh": "既……也……",
    "py": "Jì…… yě……",
    "vn": "vừa … cũng …"
   },
   {
    "zh": "既方便又便宜",
    "py": "Jì fāngbiàn yòu piányi",
    "vn": "vừa tiện vừa rẻ"
   },
   {
    "zh": "既快又好",
    "py": "Jì kuài yòu hǎo",
    "vn": "vừa nhanh vừa tốt"
   }
  ],
  "patterns": [
   {
    "s": "Sub + 既 + A，又 / 也 + B",
    "m": "Bài 4 · điểm 3"
   },
   {
    "s": "✗ 既他……又他…… → ✓ 他既……又……",
    "m": "既 đứng sau chủ ngữ"
   }
  ],
  "ex_zh": "她觉得这样既方便，又能锻炼身体，还能保护环境。",
  "ex_py": "Tā juéde zhèyàng jì fāngbiàn, yòu néng duànliàn shēntǐ, hái néng bǎohù huánjìng.",
  "ex_vn": "Cô ấy thấy như vậy vừa tiện, vừa rèn luyện được thân thể, lại còn bảo vệ được môi trường.",
  "exList": [
   {
    "zh": "她觉得这样既方便，又能锻炼身体，还能保护环境。",
    "py": "Tā juéde zhèyàng jì fāngbiàn, yòu néng duànliàn shēntǐ, hái néng bǎohù huánjìng.",
    "vn": "Cô ấy thấy như vậy vừa tiện, vừa rèn luyện được thân thể, lại còn bảo vệ được môi trường."
   },
   {
    "zh": "这家饭馆的菜既好吃，又便宜。",
    "py": "Zhè jiā fànguǎn de cài jì hǎochī, yòu piányi.",
    "vn": "Món ăn ở nhà hàng này vừa ngon vừa rẻ."
   }
  ],
  "hanzi": [
   {
    "c": "既",
    "p": "jì",
    "type": "左右结构 · Trái-phải",
    "st": 9,
    "ord": "旣 trái → 旡 phải",
    "rad": "旡 (ký)",
    "mean": "đã",
    "tip": "Hình người ăn xong quay đầu đi → ĐÃ XONG. 既然 = đã như vậy; 既……又 = vừa … vừa (Bài 7).",
    "cf": "即 (jí – tức là)",
    "w": "既然 / 既……又……"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Món ăn ở nhà ăn trường tôi vừa rẻ vừa ngon.",
    "answer": "我们学校食堂的菜既便宜又好吃。",
    "answerPy": "Wǒmen xuéxiào shítáng de cài jì piányi yòu hǎochī.",
    "note": "既……又…… (Bài 4 · điểm 3); ôn 食堂 (Bài 1).",
    "pair": "既……又……"
   },
   {
    "promptLang": "vi",
    "prompt": "Học tiếng Trung vừa có thể hiểu văn hóa Trung Quốc, cũng có ích cho công việc sau này.",
    "answer": "学中文既能了解中国文化，也对将来的工作有帮助。",
    "answerPy": "Xué Zhōngwén jì néng liǎojiě Zhōngguó wénhuà, yě duì jiānglái de gōngzuò yǒu bāngzhù.",
    "note": "既……也……; ôn 将来 (Bài 1).",
    "pair": "既……也……"
   }
  ]
 },
 {
  "n": 23,
  "zh": "电动车",
  "py": "diàndòngchē",
  "pos": "Danh từ",
  "vn": "xe điện (xe đạp điện / xe máy điện)",
  "hv": "điện động xa",
  "em": "🛵",
  "lesson": 3,
  "explain": [
   "Xe hai bánh chạy bằng điện; rất phổ biến ở thành phố Trung Quốc và cả Việt Nam."
  ],
  "usage": "骑电动车 · 一辆电动车 · 给电动车充电.",
  "collo": [
   "骑电动车",
   "一辆电动车",
   "给电动车充电",
   "买电动车"
  ],
  "colloFull": [
   {
    "zh": "骑电动车",
    "py": "Qí diàndòngchē",
    "vn": "đi xe điện"
   },
   {
    "zh": "一辆电动车",
    "py": "Yí liàng diàndòngchē",
    "vn": "một chiếc xe điện"
   },
   {
    "zh": "给电动车充电",
    "py": "Gěi diàndòngchē chōngdiàn",
    "vn": "sạc xe điện"
   },
   {
    "zh": "买电动车",
    "py": "Mǎi diàndòngchē",
    "vn": "mua xe điện"
   }
  ],
  "patterns": [
   {
    "s": "骑 + 电动车 / 自行车",
    "m": "Động từ 骑 cho xe hai bánh"
   },
   {
    "s": "一辆 + 电动车",
    "m": "Lượng từ 辆"
   }
  ],
  "ex_zh": "除了骑自行车，人们还会选择骑电动车。",
  "ex_py": "Chúle qí zìxíngchē, rénmen hái huì xuǎnzé qí diàndòngchē.",
  "ex_vn": "Ngoài đi xe đạp, mọi người còn chọn đi xe điện.",
  "exList": [
   {
    "zh": "除了骑自行车，人们还会选择骑电动车。",
    "py": "Chúle qí zìxíngchē, rénmen hái huì xuǎnzé qí diàndòngchē.",
    "vn": "Ngoài đi xe đạp, mọi người còn chọn đi xe điện."
   },
   {
    "zh": "我每天骑电动车上班，二十分钟就到了。",
    "py": "Wǒ měitiān qí diàndòngchē shàngbān, èrshí fēnzhōng jiù dào le.",
    "vn": "Hằng ngày tôi đi xe điện đi làm, hai mươi phút là đến."
   }
  ],
  "hanzi": [
   {
    "c": "电",
    "p": "diàn",
    "type": "象形字 · Chữ tượng hình",
    "st": 5,
    "ord": "sổ → ngang gập → ngang → ngang → sổ cong móc",
    "rad": "田 (điền – ruộng)",
    "mean": "điện",
    "tip": "Hình tia chớp xé ngang bầu trời → điện. Ôn: 电脑, 电话, 电影 (HSK1). 电子书 = sách điện tử.",
    "cf": "由 yóu — không có nét cong móc ở dưới",
    "w": "电子书 / 电脑 / 电话"
   },
   {
    "c": "动",
    "p": "dòng",
    "type": "左右结构 · Trái-phải (giản thể)",
    "st": 6,
    "ord": "云 trái → 力 phải",
    "rad": "力 (lực – sức mạnh)",
    "mean": "động, xúc động",
    "tip": "Bộ lực 力 (sức mạnh, tác động) → chịu tác động mà THAY ĐỔI trạng thái, mở rộng thành CẢM ĐỘNG (cảm xúc bị lay động).",
    "cf": "动 dễ nhầm với 云 (yún – \"mây\", chỉ khác bộ 力\")",
    "w": "感动 / 运动 / 动作"
   },
   {
    "c": "车",
    "p": "chē",
    "type": "独体字 · Chữ đơn",
    "st": 4,
    "ord": "一→𠃌→丨",
    "rad": "车 (xa – tự thành bộ)",
    "mean": "xe",
    "tip": "Hình bánh xe nhìn từ trên xuống → XE.",
    "cf": "东 (dōng – \"phía đông\", hình dạng gần giống\")",
    "w": "公交车 / 开车 / 坐车"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Xe điện vừa nhanh, vừa đỡ tốn sức.",
    "answer": "电动车既快，又省力气。",
    "answerPy": "Diàndòngchē jì kuài, yòu shěng lìqi.",
    "note": "既……又…… (Bài 4 · điểm 3).",
    "pair": "既……又……"
   },
   {
    "promptLang": "vi",
    "prompt": "Ở Việt Nam, ngày càng nhiều học sinh đi xe điện đến trường.",
    "answer": "在越南，越来越多的学生骑电动车上学。",
    "answerPy": "Zài Yuènán, yuèláiyuè duō de xuésheng qí diàndòngchē shàngxué.",
    "note": "Ôn 越来越 (HSK 3).",
    "pair": "越来越多的……"
   }
  ]
 },
 {
  "n": 24,
  "zh": "速度",
  "py": "sùdù",
  "pos": "Danh từ",
  "vn": "tốc độ",
  "hv": "tốc độ",
  "em": "🏎️",
  "lesson": 3,
  "explain": [
   "Mức nhanh chậm của xe, của công việc, của mạng…"
  ],
  "usage": "速度快 · 速度慢 · 提高速度 · 上网速度.",
  "collo": [
   "速度快",
   "速度慢",
   "提高速度",
   "上网速度"
  ],
  "colloFull": [
   {
    "zh": "速度快",
    "py": "Sùdù kuài",
    "vn": "tốc độ nhanh"
   },
   {
    "zh": "速度慢",
    "py": "Sùdù màn",
    "vn": "tốc độ chậm"
   },
   {
    "zh": "提高速度",
    "py": "Tígāo sùdù",
    "vn": "nâng cao tốc độ"
   },
   {
    "zh": "上网速度",
    "py": "Shàngwǎng sùdù",
    "vn": "tốc độ mạng"
   }
  ],
  "patterns": [
   {
    "s": "速度 + 快 / 慢",
    "m": "✗ 速度很多 → ✓ 速度很快"
   },
   {
    "s": "……的速度",
    "m": "Tốc độ của …"
   }
  ],
  "ex_zh": "电动车速度快，价格不高，充电也很方便，所以越来越流行。",
  "ex_py": "Diàndòngchē sùdù kuài, jiàgé bù gāo, chōngdiàn yě hěn fāngbiàn, suǒyǐ yuèláiyuè liúxíng.",
  "ex_vn": "Xe điện tốc độ nhanh, giá không cao, sạc điện cũng rất tiện, nên ngày càng thịnh hành.",
  "exList": [
   {
    "zh": "电动车速度快，价格不高，充电也很方便，所以越来越流行。",
    "py": "Diàndòngchē sùdù kuài, jiàgé bù gāo, chōngdiàn yě hěn fāngbiàn, suǒyǐ yuèláiyuè liúxíng.",
    "vn": "Xe điện tốc độ nhanh, giá không cao, sạc điện cũng rất tiện, nên ngày càng thịnh hành."
   },
   {
    "zh": "开车的时候，速度不要太快。",
    "py": "Kāichē de shíhou, sùdù búyào tài kuài.",
    "vn": "Khi lái xe, tốc độ đừng quá nhanh."
   }
  ],
  "hanzi": [
   {
    "c": "速",
    "p": "sù",
    "type": "半包围结构 · Nửa bao quanh",
    "st": 10,
    "ord": "束 trong → 辶 bao",
    "rad": "辶 (sước)",
    "mean": "nhanh",
    "tip": "Bộ đi 辶 + 束(bó, buộc) → đi nhanh như bó tên bắn → TỐC, NHANH. 速度 = TỐC ĐỘ.",
    "cf": "束 (shù – bó)",
    "w": "速度 / 高速 / 快速"
   },
   {
    "c": "度",
    "p": "dù",
    "type": "形声字 · Chữ hình thanh",
    "st": 9,
    "ord": "广 → 廿 → 又",
    "rad": "广 (nghiễm – mái nhà)",
    "mean": "độ, mức độ; lần",
    "tip": "Mái nhà 广 + 廿 (hai mươi) + 又 (bàn tay): ngày xưa dùng tay đo nhà — “đo, mức độ” — 速度, 温度.",
    "cf": "席 xí (chỗ ngồi) — dưới là 巾; 渡 dù (qua sông) — thêm 氵",
    "w": "速度 / 温度 / 态度"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Tôi muốn mua xe điện vì vừa đỡ tốn sức, tốc độ lại nhanh.",
    "answer": "我想买一辆电动车，因为既省力气，速度又快。",
    "answerPy": "Wǒ xiǎng mǎi yí liàng diàndòngchē, yīnwèi jì shěng lìqi, sùdù yòu kuài.",
    "note": "Đáp án gợi ý của sách (Bài 4 · điểm 3).",
    "pair": "既……，……又……"
   },
   {
    "promptLang": "vi",
    "prompt": "Mạng ở đây không chỉ tốc độ nhanh mà còn miễn phí.",
    "answer": "这儿的网不仅速度快，而且是免费的。",
    "answerPy": "Zhèr de wǎng bùjǐn sùdù kuài, érqiě shì miǎnfèi de.",
    "note": "不仅……而且…… (Bài 3 · điểm 2).",
    "pair": "不仅……而且……"
   }
  ]
 },
 {
  "n": 25,
  "zh": "充电",
  "py": "chōngdiàn",
  "pos": "Động từ",
  "vn": "sạc điện, sạc pin",
  "hv": "sung điện",
  "em": "🔋",
  "lesson": 3,
  "explain": [
   "Nạp điện cho điện thoại, xe điện… Là động từ ly hợp: 充一下电, 充满电. Nghĩa bóng: “nạp thêm năng lượng / kiến thức”."
  ],
  "usage": "给手机充电 · 充一下电 · 充电宝 (sạc dự phòng).",
  "collo": [
   "给手机充电",
   "充电宝",
   "充一下电",
   "充满电"
  ],
  "colloFull": [
   {
    "zh": "给手机充电",
    "py": "Gěi shǒujī chōngdiàn",
    "vn": "sạc điện thoại"
   },
   {
    "zh": "充电宝",
    "py": "Chōngdiànbǎo",
    "vn": "sạc dự phòng"
   },
   {
    "zh": "充一下电",
    "py": "Chōng yíxià diàn",
    "vn": "sạc một chút"
   },
   {
    "zh": "充满电",
    "py": "Chōngmǎn diàn",
    "vn": "sạc đầy"
   }
  ],
  "patterns": [
   {
    "s": "给 + N + 充电",
    "m": "✗ 充电手机 → ✓ 给手机充电"
   },
   {
    "s": "充 + 一下 / 满 + 电",
    "m": "Động từ ly hợp"
   }
  ],
  "ex_zh": "电动车速度快，价格不高，充电也很方便。",
  "ex_py": "Diàndòngchē sùdù kuài, jiàgé bù gāo, chōngdiàn yě hěn fāngbiàn.",
  "ex_vn": "Xe điện tốc độ nhanh, giá không cao, sạc điện cũng rất tiện.",
  "exList": [
   {
    "zh": "电动车速度快，价格不高，充电也很方便。",
    "py": "Diàndòngchē sùdù kuài, jiàgé bù gāo, chōngdiàn yě hěn fāngbiàn.",
    "vn": "Xe điện tốc độ nhanh, giá không cao, sạc điện cũng rất tiện."
   },
   {
    "zh": "我的手机快没电了，这里能充电吗？",
    "py": "Wǒ de shǒujī kuài méi diàn le, zhèli néng chōngdiàn ma?",
    "vn": "Điện thoại tôi sắp hết pin rồi, ở đây sạc được không?"
   }
  ],
  "hanzi": [
   {
    "c": "充",
    "p": "chōng",
    "type": "会意字 · Chữ hội ý",
    "st": 6,
    "ord": "亠 → 厶 → 儿",
    "rad": "儿 (nhân đi – người)",
    "mean": "đầy, nạp đầy; làm đầy",
    "tip": "Trên là 亠 + 厶 (đứa bé), dưới là 儿 (chân người): đứa trẻ lớn lên, cơ thể “đầy đủ” — nạp đầy: 充电.",
    "cf": "允 yǔn (cho phép) — không có 亠 ở trên; 统 tǒng — thêm 纟",
    "w": "充电 / 充满 / 补充"
   },
   {
    "c": "电",
    "p": "diàn",
    "type": "象形字 · Chữ tượng hình",
    "st": 5,
    "ord": "sổ → ngang gập → ngang → ngang → sổ cong móc",
    "rad": "田 (điền – ruộng)",
    "mean": "điện",
    "tip": "Hình tia chớp xé ngang bầu trời → điện. Ôn: 电脑, 电话, 电影 (HSK1). 电子书 = sách điện tử.",
    "cf": "由 yóu — không có nét cong móc ở dưới",
    "w": "电子书 / 电脑 / 电话"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Nếu điện thoại hết pin thì có thể sạc ở ga tàu điện ngầm.",
    "answer": "要是手机没电了，就可以在地铁站充电。",
    "answerPy": "Yàoshi shǒujī méi diàn le, jiù kěyǐ zài dìtiězhàn chōngdiàn.",
    "note": "要是……就…… (Bài 1 · điểm 2).",
    "pair": "要是……就……"
   },
   {
    "promptLang": "vi",
    "prompt": "Tôi quên sạc điện thoại nên không quét mã được.",
    "answer": "我忘了给手机充电，所以扫不了码。",
    "answerPy": "Wǒ wàng le gěi shǒujī chōngdiàn, suǒyǐ sǎo bu le mǎ.",
    "note": "Bổ ngữ khả năng 扫不了码 (Bài 4 · điểm 1).",
    "pair": "给……充电 / V不了"
   }
  ]
 },
 {
  "n": 26,
  "zh": "流行",
  "py": "liúxíng",
  "pos": "Động từ",
  "vn": "thịnh hành, đang mốt, phổ biến",
  "hv": "lưu hành",
  "em": "🔥",
  "lesson": 3,
  "explain": [
   "Được nhiều người ưa chuộng trong một thời gian: quần áo, bài hát, màu sắc, cách đi lại. Hán Việt “lưu hành” nhưng nghĩa là THỊNH HÀNH, đang mốt."
  ],
  "usage": "很流行 · 越来越流行 · 今年流行…… · 流行歌曲.",
  "collo": [
   "很流行",
   "越来越流行",
   "流行歌曲",
   "流行音乐"
  ],
  "colloFull": [
   {
    "zh": "很流行",
    "py": "Hěn liúxíng",
    "vn": "rất thịnh hành"
   },
   {
    "zh": "越来越流行",
    "py": "Yuèláiyuè liúxíng",
    "vn": "ngày càng thịnh hành"
   },
   {
    "zh": "流行歌曲",
    "py": "Liúxíng gēqǔ",
    "vn": "bài hát thịnh hành"
   },
   {
    "zh": "流行音乐",
    "py": "Liúxíng yīnyuè",
    "vn": "nhạc pop"
   }
  ],
  "patterns": [
   {
    "s": "N + 很 / 越来越 + 流行",
    "m": "Cái gì đang thịnh hành"
   },
   {
    "s": "(nơi / thời gian) + 流行 + N",
    "m": "今年流行绿色"
   }
  ],
  "ex_zh": "电动车速度快，价格不高，充电也很方便，所以越来越流行。",
  "ex_py": "Diàndòngchē sùdù kuài, jiàgé bù gāo, chōngdiàn yě hěn fāngbiàn, suǒyǐ yuèláiyuè liúxíng.",
  "ex_vn": "Xe điện tốc độ nhanh, giá không cao, sạc điện cũng tiện, nên ngày càng thịnh hành.",
  "exList": [
   {
    "zh": "电动车速度快，价格不高，充电也很方便，所以越来越流行。",
    "py": "Diàndòngchē sùdù kuài, jiàgé bù gāo, chōngdiàn yě hěn fāngbiàn, suǒyǐ yuèláiyuè liúxíng.",
    "vn": "Xe điện tốc độ nhanh, giá không cao, sạc điện cũng tiện, nên ngày càng thịnh hành."
   },
   {
    "zh": "是啊，看来今年比较流行绿色。",
    "py": "Shì ā, kànlái jīnnián bǐjiào liúxíng lǜsè.",
    "vn": "Đúng thế, xem ra năm nay khá chuộng màu xanh lá."
   }
  ],
  "hanzi": [
   {
    "c": "流",
    "p": "liú",
    "type": "左右结构 · Trái-phải",
    "st": 10,
    "ord": "氵 (thủy) trái → 㐬 phải",
    "rad": "氵 (thủy – nước)",
    "mean": "chảy, trôi chảy",
    "tip": "Bộ nước 氵 (dòng nước chảy liên tục) → mở rộng nghĩa TRÔI CHẢY, kết hợp 利(lợi, thuận lợi) thành 流利 = LƯU LOÁT (nói trôi chảy như nước chảy).",
    "cf": "留 (liú – \"ở lại\", bộ 田\")",
    "w": "流利 / 流水 / 交流"
   },
   {
    "c": "行",
    "p": "xíng",
    "type": "左右结构 · Trái-phải",
    "st": 6,
    "ord": "彳 trái → 亍 phải",
    "rad": "行 (hành)",
    "mean": "được; đi",
    "tip": "Tượng hình NGÃ TƯ đường → ĐI, HÀNH; mở rộng thành \"được, ổn\" (xíng). Đọc háng = hàng, ngành (银行).",
    "cf": "街 (jiē – phố, có 行 bao ngoài)",
    "w": "行 / 不行 / 还行 / 银行 (háng)"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Năm nay khá thịnh màu xanh lá.",
    "answer": "今年比较流行绿色。",
    "answerPy": "Jīnnián bǐjiào liúxíng lǜsè.",
    "note": "Bài tập chọn từ của sách (câu 8).",
    "pair": "流行 + N"
   },
   {
    "promptLang": "vi",
    "prompt": "Xe điện ngày càng thịnh hành, thậm chí nhiều người già cũng đi.",
    "answer": "电动车越来越流行，甚至很多老人也骑。",
    "answerPy": "Diàndòngchē yuèláiyuè liúxíng, shènzhì hěn duō lǎorén yě qí.",
    "note": "甚至 (Bài 3 · điểm 3).",
    "pair": "……，甚至……"
   }
  ]
 },
 {
  "n": 27,
  "zh": "省",
  "py": "shěng",
  "pos": "Động từ",
  "vn": "tiết kiệm, đỡ tốn",
  "hv": "tỉnh",
  "em": "💡",
  "lesson": 3,
  "explain": [
   "Dùng ít đi, không lãng phí: 省钱, 省时间, 省力气 (trái nghĩa 费).",
   "Chữ 省 còn là “tỉnh” (đơn vị hành chính: 广东省) — cùng âm shěng."
  ],
  "usage": "省钱 · 省时间 · 省力气 · 省了不少.",
  "collo": [
   "省钱",
   "省时间",
   "省力气",
   "省了不少时间"
  ],
  "colloFull": [
   {
    "zh": "省钱",
    "py": "Shěng qián",
    "vn": "tiết kiệm tiền"
   },
   {
    "zh": "省时间",
    "py": "Shěng shíjiān",
    "vn": "tiết kiệm thời gian"
   },
   {
    "zh": "省力气",
    "py": "Shěng lìqi",
    "vn": "đỡ tốn sức"
   },
   {
    "zh": "省了不少时间",
    "py": "Shěng le bùshǎo shíjiān",
    "vn": "tiết kiệm được khá nhiều thời gian"
   }
  ],
  "patterns": [
   {
    "s": "省 + 钱 / 时间 / 力气",
    "m": "Tiết kiệm cái gì (↔ 费)"
   },
   {
    "s": "为了省 + N，……",
    "m": "Để tiết kiệm …"
   }
  ],
  "ex_zh": "陈天中平时也骑自行车，不过为了省力气，他最近打算买一辆电动车。",
  "ex_py": "Chén Tiānzhōng píngshí yě qí zìxíngchē, búguò wèile shěng lìqi, tā zuìjìn dǎsuàn mǎi yí liàng diàndòngchē.",
  "ex_vn": "Trần Thiên Trung bình thường cũng đi xe đạp, có điều để đỡ tốn sức, gần đây cậu ấy định mua một chiếc xe điện.",
  "exList": [
   {
    "zh": "陈天中平时也骑自行车，不过为了省力气，他最近打算买一辆电动车。",
    "py": "Chén Tiānzhōng píngshí yě qí zìxíngchē, búguò wèile shěng lìqi, tā zuìjìn dǎsuàn mǎi yí liàng diàndòngchē.",
    "vn": "Trần Thiên Trung bình thường cũng đi xe đạp, có điều để đỡ tốn sức, gần đây cậu ấy định mua một chiếc xe điện."
   },
   {
    "zh": "在网上买东西能省不少钱。",
    "py": "Zài wǎngshang mǎi dōngxi néng shěng bùshǎo qián.",
    "vn": "Mua đồ trên mạng tiết kiệm được khá nhiều tiền."
   }
  ],
  "hanzi": [
   {
    "c": "省",
    "p": "shěng",
    "type": "上下结构 · Trên-dưới",
    "st": 9,
    "ord": "少 trên → 目 dưới",
    "rad": "目 (mục – mắt)",
    "mean": "tỉnh; tiết kiệm",
    "tip": "Chữ hội ý mắt 目 nhìn KỸ (少) → xem xét; mượn chỉ đơn vị hành chính TỈNH. Đọc \"xǐng\" khi nghĩa là \"tỉnh ngộ\".",
    "cf": "少 (shǎo – \"ít\", phần trên)",
    "w": "省 / 广东省 / 省钱"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Để tiết kiệm tiền, mỗi ngày anh ấy đều nấu cơm ở nhà.",
    "answer": "为了省钱，他每天都在家做饭。",
    "answerPy": "Wèile shěng qián, tā měitiān dōu zài jiā zuòfàn.",
    "note": "Ôn 为了 (HSK 3).",
    "pair": "为了省……"
   },
   {
    "promptLang": "vi",
    "prompt": "Do đi tàu điện ngầm không bị tắc đường, mỗi ngày tôi tiết kiệm được khá nhiều thời gian.",
    "answer": "由于坐地铁不堵车，我每天能省不少时间。",
    "answerPy": "Yóuyú zuò dìtiě bù dǔchē, wǒ měitiān néng shěng bùshǎo shíjiān.",
    "note": "由于 (Bài 2 · điểm 4).",
    "pair": "由于……，……"
   }
  ]
 },
 {
  "n": 28,
  "zh": "力气",
  "py": "lìqi",
  "pos": "Danh từ",
  "vn": "sức lực, sức",
  "hv": "lực khí",
  "em": "💪",
  "lesson": 3,
  "explain": [
   "Sức của cơ thể để làm việc, khiêng vác, đi lại."
  ],
  "usage": "有力气 · 没力气 · 力气很大 · 省力气 · 费力气.",
  "collo": [
   "有力气",
   "没力气",
   "力气很大",
   "省力气"
  ],
  "colloFull": [
   {
    "zh": "有力气",
    "py": "Yǒu lìqi",
    "vn": "có sức"
   },
   {
    "zh": "没力气",
    "py": "Méi lìqi",
    "vn": "hết sức"
   },
   {
    "zh": "力气很大",
    "py": "Lìqi hěn dà",
    "vn": "rất khỏe"
   },
   {
    "zh": "省力气",
    "py": "Shěng lìqi",
    "vn": "đỡ tốn sức"
   }
  ],
  "patterns": [
   {
    "s": "一点儿 + 力气 + 也没有了",
    "m": "Hết sạch sức"
   },
   {
    "s": "力气 + 大 / 小",
    "m": "✗ 力气很多 → ✓ 力气很大"
   }
  ],
  "ex_zh": "不过为了省力气，他最近打算买一辆电动车。",
  "ex_py": "Búguò wèile shěng lìqi, tā zuìjìn dǎsuàn mǎi yí liàng diàndòngchē.",
  "ex_vn": "Có điều để đỡ tốn sức, gần đây cậu ấy định mua một chiếc xe điện.",
  "exList": [
   {
    "zh": "不过为了省力气，他最近打算买一辆电动车。",
    "py": "Búguò wèile shěng lìqi, tā zuìjìn dǎsuàn mǎi yí liàng diàndòngchē.",
    "vn": "Có điều để đỡ tốn sức, gần đây cậu ấy định mua một chiếc xe điện."
   },
   {
    "zh": "咱们先休息休息吧，我一点儿力气也没有了。",
    "py": "Zánmen xiān xiūxi xiūxi ba, wǒ yìdiǎnr lìqi yě méiyǒu le.",
    "vn": "Mình nghỉ một lát đi, tôi chẳng còn chút sức nào nữa."
   }
  ],
  "hanzi": [
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
   },
   {
    "c": "气",
    "p": "qi",
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
    "prompt": "Chạy một tiếng liền, tôi chẳng còn chút sức nào nữa.",
    "answer": "跑了一个小时，我一点儿力气也没有了。",
    "answerPy": "Pǎo le yí gè xiǎoshí, wǒ yìdiǎnr lìqi yě méiyǒu le.",
    "note": "Bài tập chọn từ của sách (câu 9).",
    "pair": "一点儿……也没有"
   },
   {
    "promptLang": "vi",
    "prompt": "Anh ấy khỏe lắm, cái thùng nặng như thế cũng khiêng nổi.",
    "answer": "他的力气很大，那么重的箱子也搬得动。",
    "answerPy": "Tā de lìqi hěn dà, nàme zhòng de xiāngzi yě bān de dòng.",
    "note": "Bổ ngữ khả năng 搬得动 (HSK 3).",
    "pair": "V得动"
   }
  ]
 },
 {
  "n": 29,
  "zh": "乘客",
  "py": "chéngkè",
  "pos": "Danh từ",
  "vn": "hành khách",
  "hv": "thừa khách",
  "em": "🚇",
  "lesson": 4,
  "explain": [
   "Người đi tàu, xe, máy bay. 乘 = đi (phương tiện), 客 = khách."
  ],
  "usage": "一位乘客 · 地铁乘客 · 各位乘客.",
  "collo": [
   "一位乘客",
   "地铁乘客",
   "各位乘客",
   "乘客们"
  ],
  "colloFull": [
   {
    "zh": "一位乘客",
    "py": "Yí wèi chéngkè",
    "vn": "một hành khách"
   },
   {
    "zh": "地铁乘客",
    "py": "Dìtiě chéngkè",
    "vn": "hành khách tàu điện ngầm"
   },
   {
    "zh": "各位乘客",
    "py": "Gèwèi chéngkè",
    "vn": "kính thưa quý hành khách"
   },
   {
    "zh": "乘客们",
    "py": "Chéngkèmen",
    "vn": "các hành khách"
   }
  ],
  "patterns": [
   {
    "s": "一位 / 一名 + 乘客",
    "m": "Lượng từ lịch sự 位"
   },
   {
    "s": "各位乘客，……",
    "m": "Câu mở đầu thông báo"
   }
  ],
  "ex_zh": "在中国，乘客可以在不少地铁站里直接扫码购买食物和饮料。",
  "ex_py": "Zài Zhōngguó, chéngkè kěyǐ zài bùshǎo dìtiězhàn lǐ zhíjiē sǎo mǎ gòumǎi shíwù hé yǐnliào.",
  "ex_vn": "Ở Trung Quốc, hành khách có thể quét mã mua đồ ăn và đồ uống ngay trong nhiều ga tàu điện ngầm.",
  "exList": [
   {
    "zh": "在中国，乘客可以在不少地铁站里直接扫码购买食物和饮料。",
    "py": "Zài Zhōngguó, chéngkè kěyǐ zài bùshǎo dìtiězhàn lǐ zhíjiē sǎo mǎ gòumǎi shíwù hé yǐnliào.",
    "vn": "Ở Trung Quốc, hành khách có thể quét mã mua đồ ăn và đồ uống ngay trong nhiều ga tàu điện ngầm."
   },
   {
    "zh": "一位乘客看到了，问她需不需要帮忙。",
    "py": "Yí wèi chéngkè kàndào le, wèn tā xū bu xūyào bāngmáng.",
    "vn": "Một hành khách nhìn thấy, hỏi cô ấy có cần giúp không."
   }
  ],
  "hanzi": [
   {
    "c": "乘",
    "p": "chéng",
    "type": "独体字 · Chữ đơn thể",
    "st": 10,
    "ord": "禾 → 北 (hai bên)",
    "rad": "丿 (phiệt)",
    "mean": "cưỡi, đi",
    "tip": "Hình người trèo lên cây 木 → LEO LÊN, CƯỠI, ĐI (xe). 乘坐 = đáp (phương tiện), 乘客 = hành khách.",
    "cf": "剩 (shèng – thừa)",
    "w": "乘坐 / 乘客"
   },
   {
    "c": "客",
    "p": "kè",
    "type": "形声字 · Chữ hình thanh",
    "st": 9,
    "ord": "宀 → 各",
    "rad": "宀 (miên – mái nhà)",
    "mean": "khách",
    "tip": "宀 (mái nhà) + 各 (gè – chỉ âm): người từ nơi khác đến dưới mái nhà mình → khách. Ôn: 客气 (HSK3 Bài 2), 不客气 (HSK1 Bài 1).",
    "cf": "各 gè — không có 宀 ở trên",
    "w": "客人 / 请客 / 做客 / 客气"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Kính thưa quý hành khách, ga tiếp theo là ga Đại học Bắc Kinh.",
    "answer": "各位乘客，下一站是北京大学站。",
    "answerPy": "Gèwèi chéngkè, xià yí zhàn shì běijīngdàxué zhàn.",
    "note": "Câu thông báo trên tàu.",
    "pair": "各位乘客"
   },
   {
    "promptLang": "vi",
    "prompt": "Hành khách trên tàu điện ngầm không chỉ có người đi làm mà còn có học sinh.",
    "answer": "地铁上的乘客不光有上班的人，还有学生。",
    "answerPy": "Dìtiě shàng de chéngkè bùguāng yǒu shàngbān de rén, hái yǒu xuésheng.",
    "note": "不光……还…… (Bài 3 · điểm 2).",
    "pair": "不光……还……"
   }
  ]
 },
 {
  "n": 30,
  "zh": "购买",
  "py": "gòumǎi",
  "pos": "Động từ",
  "vn": "mua (trang trọng)",
  "hv": "cấu mãi",
  "em": "🛒",
  "lesson": 4,
  "explain": [
   "Nghĩa như 买 nhưng dùng trong văn viết, thông báo; tân ngữ thường là từ hai âm tiết."
  ],
  "usage": "购买食物 · 购买车票 · 网上购买.",
  "collo": [
   "购买食物",
   "购买车票",
   "网上购买",
   "扫码购买"
  ],
  "colloFull": [
   {
    "zh": "购买食物",
    "py": "Gòumǎi shíwù",
    "vn": "mua đồ ăn"
   },
   {
    "zh": "购买车票",
    "py": "Gòumǎi chēpiào",
    "vn": "mua vé xe"
   },
   {
    "zh": "网上购买",
    "py": "Wǎngshang gòumǎi",
    "vn": "mua trên mạng"
   },
   {
    "zh": "扫码购买",
    "py": "Sǎo mǎ gòumǎi",
    "vn": "quét mã mua"
   }
  ],
  "patterns": [
   {
    "s": "购买 + N (hai âm tiết)",
    "m": "✗ 购买书 → ✓ 购买图书 / 买书"
   },
   {
    "s": "购买 (viết) ≈ 买 (nói)",
    "m": "Văn nói hằng ngày dùng 买"
   }
  ],
  "ex_zh": "乘客可以在不少地铁站里直接扫码购买食物和饮料。",
  "ex_py": "Chéngkè kěyǐ zài bùshǎo dìtiězhàn lǐ zhíjiē sǎo mǎ gòumǎi shíwù hé yǐnliào.",
  "ex_vn": "Hành khách có thể quét mã mua đồ ăn và đồ uống ngay trong nhiều ga tàu điện ngầm.",
  "exList": [
   {
    "zh": "乘客可以在不少地铁站里直接扫码购买食物和饮料。",
    "py": "Chéngkè kěyǐ zài bùshǎo dìtiězhàn lǐ zhíjiē sǎo mǎ gòumǎi shíwù hé yǐnliào.",
    "vn": "Hành khách có thể quét mã mua đồ ăn và đồ uống ngay trong nhiều ga tàu điện ngầm."
   },
   {
    "zh": "您可以在网上购买火车票。",
    "py": "Nín kěyǐ zài wǎngshang gòumǎi huǒchēpiào.",
    "vn": "Quý khách có thể mua vé tàu hỏa trên mạng."
   }
  ],
  "hanzi": [
   {
    "c": "购",
    "p": "gòu",
    "type": "左右结构 · Trái-phải (giản thể)",
    "st": 8,
    "ord": "贝 (bối) trái → 勾 (câu) phải",
    "rad": "贝 (bối – tiền của)",
    "mean": "mua",
    "tip": "Bộ 贝(tiền của) + 勾(biểu âm) → dùng TIỀN để MUA, kết hợp 物(vật phẩm) thành 购物 = MUA SẮM.",
    "cf": "钩 (gōu – \"cái móc\", bộ 钅\")",
    "w": "购物 / 购买 / 采购"
   },
   {
    "c": "买",
    "p": "mǎi",
    "type": "独体字 · Chữ đơn",
    "st": 6,
    "ord": "丶丶(hai chấm) trên → 大(cách điệu) dưới, viết liền một khối",
    "rad": "买 (mãi – tự thành bộ)",
    "mean": "mua",
    "tip": "买 là chữ giản thể của 買 (网+贝, lưới chụp lấy tiền), giữ lại nét trên như cái LƯỚI hạ xuống để THU vào → nghĩa MUA.",
    "cf": "卖 (mài – \"bán\", thêm nét 十 trên đầu, rất dễ nhầm vì hình gần giống)",
    "w": "买东西 / 买菜 / 买卖"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Trên mạng có thể mua bất kỳ thứ gì.",
    "answer": "在网上可以购买任何东西。",
    "answerPy": "Zài wǎngshang kěyǐ gòumǎi rènhé dōngxi.",
    "note": "任何 (Bài 1 · điểm 1).",
    "pair": "购买任何……"
   },
   {
    "promptLang": "vi",
    "prompt": "Nhiều người thích mua đồ trên mạng, một mặt vì rẻ, mặt khác vì tiện.",
    "answer": "很多人喜欢在网上购买东西，一方面因为便宜，另一方面因为方便。",
    "answerPy": "Hěn duō rén xǐhuan zài wǎngshang gòumǎi dōngxi, yìfāngmiàn yīnwèi piányi, lìngyìfāngmiàn yīnwèi fāngbiàn.",
    "note": "一方面……另一方面…… (Bài 1 · điểm 4).",
    "pair": "一方面……另一方面……"
   }
  ]
 },
 {
  "n": 31,
  "zh": "食物",
  "py": "shíwù",
  "pos": "Danh từ",
  "vn": "đồ ăn, thức ăn",
  "hv": "thực vật",
  "em": "🍞",
  "lesson": 4,
  "explain": [
   "Gọi chung những thứ để ăn. Bẫy Hán Việt: âm là “thực vật” nhưng nghĩa là ĐỒ ĂN; “thực vật” (cây cối) là 植物."
  ],
  "usage": "购买食物 · 食物和饮料 · 健康的食物.",
  "collo": [
   "食物和饮料",
   "健康的食物",
   "带食物",
   "购买食物"
  ],
  "colloFull": [
   {
    "zh": "食物和饮料",
    "py": "Shíwù hé yǐnliào",
    "vn": "đồ ăn và đồ uống"
   },
   {
    "zh": "健康的食物",
    "py": "Jiànkāng de shíwù",
    "vn": "đồ ăn lành mạnh"
   },
   {
    "zh": "带食物",
    "py": "Dài shíwù",
    "vn": "mang đồ ăn"
   },
   {
    "zh": "购买食物",
    "py": "Gòumǎi shíwù",
    "vn": "mua đồ ăn"
   }
  ],
  "patterns": [
   {
    "s": "食物 (chung) · 菜 (món) · 饭 (cơm, bữa)",
    "m": "Phân biệt"
   },
   {
    "s": "食物 ≠ 植物",
    "m": "Bẫy Hán Việt “thực vật”"
   }
  ],
  "ex_zh": "乘客可以在不少地铁站里直接扫码购买食物和饮料。",
  "ex_py": "Chéngkè kěyǐ zài bùshǎo dìtiězhàn lǐ zhíjiē sǎo mǎ gòumǎi shíwù hé yǐnliào.",
  "ex_vn": "Hành khách có thể quét mã mua đồ ăn và đồ uống ngay trong nhiều ga tàu điện ngầm.",
  "exList": [
   {
    "zh": "乘客可以在不少地铁站里直接扫码购买食物和饮料。",
    "py": "Chéngkè kěyǐ zài bùshǎo dìtiězhàn lǐ zhíjiē sǎo mǎ gòumǎi shíwù hé yǐnliào.",
    "vn": "Hành khách có thể quét mã mua đồ ăn và đồ uống ngay trong nhiều ga tàu điện ngầm."
   },
   {
    "zh": "这家超市的食物都很新鲜。",
    "py": "Zhè jiā chāoshì de shíwù dōu hěn xīnxiān.",
    "vn": "Đồ ăn ở siêu thị này đều rất tươi."
   }
  ],
  "hanzi": [
   {
    "c": "食",
    "p": "shí",
    "type": "会意字 · Chữ hội ý",
    "st": 9,
    "ord": "人 → 良 (phẩy, mác, chấm… rồi 良)",
    "rad": "人 (nhân – người, ở trên) · bộ 食",
    "mean": "ăn; đồ ăn",
    "tip": "Hình nồi cơm có nắp đậy ở trên: thức ăn. Làm bộ bên trái thì viết 饣 (饭, 饿, 馆).",
    "cf": "良 liáng (tốt) — thiếu nắp 人 ở trên",
    "w": "食堂 / 食物 / 美食"
   },
   {
    "c": "物",
    "p": "wù",
    "type": "形声字 · Chữ hình thanh",
    "st": 8,
    "ord": "牜 (phẩy, ngang, sổ, hất) → 勿 (phẩy, ngang gập móc, phẩy, phẩy)",
    "rad": "牛 (ngưu – trâu bò; viết 牜 khi đứng bên trái)",
    "mean": "vật, đồ vật",
    "tip": "牜 (con bò) + 勿 (wù, chỉ âm): bò là con vật lớn, quen thuộc nhất → vật. 动物 = vật biết động đậy → động vật. Ôn: 礼物 (HSK2 Bài 5), 牛 (HSK3 Bài 4).",
    "cf": "特 tè (特别 – HSK3 Bài 4) — cũng có 牜 bên trái",
    "w": "动物 / 礼物 / 小动物"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Trong thư viện không được ăn bất kỳ đồ ăn nào.",
    "answer": "图书馆里不能吃任何食物。",
    "answerPy": "Túshūguǎn lǐ bù néng chī rènhé shíwù.",
    "note": "任何 trong câu phủ định (Bài 1 · điểm 1).",
    "pair": "不能……任何……"
   },
   {
    "promptLang": "vi",
    "prompt": "Đi leo núi phải mang đủ đồ ăn và nước.",
    "answer": "去爬山要带够食物和水。",
    "answerPy": "Qù páshān yào dàigòu shíwù hé shuǐ.",
    "note": "Bổ ngữ kết quả 够 (HSK 3).",
    "pair": "带够……"
   }
  ]
 },
 {
  "n": 32,
  "zh": "免费",
  "py": "miǎnfèi",
  "pos": "Động từ",
  "vn": "miễn phí",
  "hv": "miễn phí",
  "em": "🆓",
  "lesson": 4,
  "explain": [
   "Không phải trả tiền. Hay đứng trước động từ (免费借, 免费参观) hoặc dùng 是免费的."
  ],
  "usage": "免费借 · 免费上网 · 是免费的 · 免费服务.",
  "collo": [
   "免费借",
   "免费上网",
   "免费的",
   "免费服务"
  ],
  "colloFull": [
   {
    "zh": "免费借",
    "py": "Miǎnfèi jiè",
    "vn": "mượn miễn phí"
   },
   {
    "zh": "免费上网",
    "py": "Miǎnfèi shàngwǎng",
    "vn": "lên mạng miễn phí"
   },
   {
    "zh": "免费的",
    "py": "Miǎnfèi de",
    "vn": "miễn phí"
   },
   {
    "zh": "免费服务",
    "py": "Miǎnfèi fúwù",
    "vn": "dịch vụ miễn phí"
   }
  ],
  "patterns": [
   {
    "s": "免费 + V",
    "m": "Làm gì miễn phí"
   },
   {
    "s": "N + 是免费的",
    "m": "Cái gì miễn phí"
   }
  ],
  "ex_zh": "有的地铁站还提供免费借雨伞、发雨衣等服务。",
  "ex_py": "Yǒude dìtiězhàn hái tígōng miǎnfèi jiè yǔsǎn, fā yǔyī děng fúwù.",
  "ex_vn": "Có ga tàu điện ngầm còn cung cấp các dịch vụ như cho mượn ô, phát áo mưa miễn phí.",
  "exList": [
   {
    "zh": "有的地铁站还提供免费借雨伞、发雨衣等服务。",
    "py": "Yǒude dìtiězhàn hái tígōng miǎnfèi jiè yǔsǎn, fā yǔyī děng fúwù.",
    "vn": "Có ga tàu điện ngầm còn cung cấp các dịch vụ như cho mượn ô, phát áo mưa miễn phí."
   },
   {
    "zh": "这个博物馆每周二免费。",
    "py": "Zhège bówùguǎn měi zhōu èr miǎnfèi.",
    "vn": "Bảo tàng này thứ Ba hằng tuần miễn phí."
   }
  ],
  "hanzi": [
   {
    "c": "免",
    "p": "miǎn",
    "type": "独体字 · Chữ đơn",
    "st": 7,
    "ord": "nét liền",
    "rad": "儿 (nhân, biến thể)",
    "mean": "miễn, tránh",
    "tip": "Chữ mang nghĩa MIỄN TRỪ, TRÁNH khỏi, kết hợp 费(phí, tiền) thành 免费 = MIỄN PHÍ (không phải trả tiền).",
    "cf": "兔 (tù – \"con thỏ\", có thêm một nét)",
    "w": "免费 / 避免 / 免得"
   },
   {
    "c": "费",
    "p": "fèi",
    "type": "形声字 · Chữ hình thanh",
    "st": 9,
    "ord": "弗 → 贝",
    "rad": "贝 (bối – vỏ sò, tiền)",
    "mean": "phí, tiền phải trả; tốn",
    "tip": "Trên là 弗 fú (chỉ âm), dưới là 贝 (tiền): khoản tiền phải bỏ ra — 收费, 学费, 浪费.",
    "cf": "贵 guì (đắt) — trên là 中 + 一",
    "w": "收费 / 学费 / 浪费"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Sinh viên đi xe buýt có miễn phí không?",
    "answer": "学生坐公交车是免费的吗？",
    "answerPy": "Xuésheng zuò gōngjiāochē shì miǎnfèi de ma?",
    "note": "是……的 (HSK 3).",
    "pair": "是免费的"
   },
   {
    "promptLang": "vi",
    "prompt": "Ở đây không chỉ sạc điện miễn phí mà còn mượn ô miễn phí được.",
    "answer": "这里不仅能免费充电，还能免费借雨伞。",
    "answerPy": "Zhèli bùjǐn néng miǎnfèi chōngdiàn, hái néng miǎnfèi jiè yǔsǎn.",
    "note": "不仅……还…… (Bài 3 · điểm 2).",
    "pair": "不仅……还……"
   }
  ]
 },
 {
  "n": 33,
  "zh": "早餐",
  "py": "zǎocān",
  "pos": "Danh từ",
  "vn": "bữa sáng",
  "hv": "tảo xan",
  "em": "🥟",
  "lesson": 4,
  "explain": [
   "Bữa sáng — trang trọng hơn 早饭; hay gặp trong 早餐车, 早餐店. Tương tự: 午餐, 晚餐."
  ],
  "usage": "吃早餐 · 早餐车 · 早餐店 · 一份早餐.",
  "collo": [
   "吃早餐",
   "早餐车",
   "早餐店",
   "一份早餐"
  ],
  "colloFull": [
   {
    "zh": "吃早餐",
    "py": "Chī zǎocān",
    "vn": "ăn sáng"
   },
   {
    "zh": "早餐车",
    "py": "Zǎocān chē",
    "vn": "xe đồ ăn sáng"
   },
   {
    "zh": "早餐店",
    "py": "Zǎocān diàn",
    "vn": "quán ăn sáng"
   },
   {
    "zh": "一份早餐",
    "py": "Yí fèn zǎocān",
    "vn": "một suất ăn sáng"
   }
  ],
  "patterns": [
   {
    "s": "早餐 = 早饭",
    "m": "午餐 / 晚餐 tương tự"
   },
   {
    "s": "一份 + 早餐",
    "m": "Lượng từ 份 (suất)"
   }
  ],
  "ex_zh": "有些地铁站附近公司比较多，工作日站里还有早餐车。",
  "ex_py": "Yǒuxiē dìtiězhàn fùjìn gōngsī bǐjiào duō, gōngzuòrì zhàn lǐ hái yǒu zǎocān chē.",
  "ex_vn": "Có những ga tàu điện ngầm gần đó nhiều công ty, ngày làm việc trong ga còn có xe bán đồ ăn sáng.",
  "exList": [
   {
    "zh": "有些地铁站附近公司比较多，工作日站里还有早餐车。",
    "py": "Yǒuxiē dìtiězhàn fùjìn gōngsī bǐjiào duō, gōngzuòrì zhàn lǐ hái yǒu zǎocān chē.",
    "vn": "Có những ga tàu điện ngầm gần đó nhiều công ty, ngày làm việc trong ga còn có xe bán đồ ăn sáng."
   },
   {
    "zh": "小王选好早餐后，突然发现手机没电了。",
    "py": "Xiǎo Wáng xuǎnhǎo zǎocān hòu, tūrán fāxiàn shǒujī méi diàn le.",
    "vn": "Tiểu Vương chọn xong đồ ăn sáng thì chợt phát hiện điện thoại hết pin."
   }
  ],
  "hanzi": [
   {
    "c": "早",
    "p": "zǎo",
    "type": "上下结构 · Trên-dưới",
    "st": 6,
    "ord": "日(nhật) trên → 十(thập) dưới",
    "rad": "日 (nhật – mặt trời)",
    "mean": "sớm, buổi sáng",
    "tip": "日(mặt trời) mọc lên trên đầu ngọn cây/vạch 十 → chỉ thời điểm SỚM trong ngày.",
    "cf": "旱 (hàn – \"hạn hán\", dưới là 干 chứ không phải 十\")",
    "w": "早饭 / 早上 / 早安"
   },
   {
    "c": "餐",
    "p": "cān",
    "type": "上下结构 · Trên-dưới",
    "st": 16,
    "ord": "歺+又 trên → 食 dưới",
    "rad": "食 (thực – ăn)",
    "mean": "bữa ăn",
    "tip": "Bộ ăn 食 ở dưới + phần trên biểu âm → BỮA ĂN, kết hợp 厅(sảnh) thành 餐厅 = NHÀ HÀNG (ôn lại 客厅 Bài 11).",
    "cf": "同字词: 客厅 / 餐厅 / 大厅",
    "w": "餐厅 / 早餐 / 西餐"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Một hành khách mua giúp Tiểu Vương một suất ăn sáng.",
    "answer": "一位乘客给小王买了一份早餐。",
    "answerPy": "Yí wèi chéngkè gěi Xiǎo Wáng mǎi le yí fèn zǎocān.",
    "note": "Bài tập hoàn thành đoạn văn của sách.",
    "pair": "一份早餐"
   },
   {
    "promptLang": "vi",
    "prompt": "Bữa sáng rất quan trọng, vả lại không ăn sáng thì buổi sáng làm việc không có sức.",
    "answer": "早餐很重要，再说不吃早餐，上午工作就没有力气。",
    "answerPy": "Zǎocān hěn zhòngyào, zàishuō bù chī zǎocān, shàngwǔ gōngzuò jiù méiyǒu lìqi.",
    "note": "再说 (Bài 4 · điểm 2).",
    "pair": "……，再说……"
   }
  ]
 },
 {
  "n": 34,
  "zh": "来得及",
  "py": "láidejí",
  "pos": "Động từ",
  "vn": "kịp, còn kịp",
  "hv": "lai đắc cập",
  "em": "⏰",
  "lesson": 4,
  "explain": [
   "Còn thời gian, làm kịp / đuổi kịp. Phủ định: 来不及 (không kịp); việc đã qua không kịp làm: 没来得及 (Bài 4 · điểm 4)."
  ],
  "usage": "来得及 + V · 还来得及 · 来不及 · 没来得及 + V.",
  "collo": [
   "来得及吃饭",
   "还来得及",
   "来不及了",
   "没来得及"
  ],
  "colloFull": [
   {
    "zh": "来得及吃饭",
    "py": "Láidejí chīfàn",
    "vn": "kịp ăn cơm"
   },
   {
    "zh": "还来得及",
    "py": "Hái láidejí",
    "vn": "vẫn còn kịp"
   },
   {
    "zh": "来不及了",
    "py": "Láibují le",
    "vn": "không kịp nữa rồi"
   },
   {
    "zh": "没来得及",
    "py": "Méi láidejí",
    "vn": "đã không kịp"
   }
  ],
  "patterns": [
   {
    "s": "来得及 / 来不及 + V",
    "m": "Bài 4 · điểm 4"
   },
   {
    "s": "没来得及 + V",
    "m": "Đã không kịp làm (việc đã qua) — ✗ 没来不及"
   }
  ],
  "ex_zh": "没来得及吃早饭的人在这里就能买到热包子和牛奶等。",
  "ex_py": "Méi láidejí chī zǎofàn de rén zài zhèli jiù néng mǎidào rè bāozi hé niúnǎi děng.",
  "ex_vn": "Người không kịp ăn sáng ở đây có thể mua được bánh bao nóng, sữa…",
  "exList": [
   {
    "zh": "没来得及吃早饭的人在这里就能买到热包子和牛奶等。",
    "py": "Méi láidejí chī zǎofàn de rén zài zhèli jiù néng mǎidào rè bāozi hé niúnǎi děng.",
    "vn": "Người không kịp ăn sáng ở đây có thể mua được bánh bao nóng, sữa…"
   },
   {
    "zh": "中午12点的飞机，咱们9点出发来得及吗？",
    "py": "Zhōngwǔ 12 diǎn de fēijī, zánmen 9 diǎn chūfā láidejí ma?",
    "vn": "Máy bay 12 giờ trưa, chúng ta 9 giờ xuất phát có kịp không?"
   }
  ],
  "hanzi": [
   {
    "c": "来",
    "p": "lái",
    "type": "独体字 · Tượng hình",
    "st": 7,
    "ord": "一→丨→㇏→丿→丶→一",
    "rad": "木 (mộc, biến thể)",
    "mean": "đến, tới",
    "tip": "Hình bông lúa mạch từ xa mang ĐẾN → ĐẾN, TỚI.",
    "cf": "米 (mǐ – \"gạo\")",
    "w": "过来 / 来公司 / 回来"
   },
   {
    "c": "得",
    "p": "de",
    "type": "左右结构 · Trái-phải",
    "st": 11,
    "ord": "彳 (xích) trái → 旦+寸 phải",
    "rad": "彳 (xích – bước chân)",
    "mean": "được, phải",
    "tip": "Cụm cố định 不得不 (không được không) = PHẢI, BẤT ĐẮC DĨ — hai lần phủ định tạo thành ý khẳng định mạnh về sự bắt buộc.",
    "cf": "待 (dài – \"chờ đợi\", cũng có bộ 彳\")",
    "w": "不得不 / 得到 / 舍不得"
   },
   {
    "c": "及",
    "p": "jí",
    "type": "独体字 · Chữ đơn",
    "st": 3,
    "ord": "nét liền",
    "rad": "又 (hựu, biến thể)",
    "mean": "kịp, đến",
    "tip": "Chữ tượng hình tay với tới người phía trước → nghĩa KỊP, ĐẠT ĐẾN, kết hợp 来得(có thể) thành 来得及 = KỊP THỜI GIAN.",
    "cf": "乃 (nǎi – \"bèn, là\", tự dạng gần giống)",
    "w": "来得及 / 来不及 / 及时"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Đừng vội, còn 15 phút, chúng ta kịp ăn sáng.",
    "answer": "别着急，还有15分钟，咱们来得及吃早饭。",
    "answerPy": "Bié zháojí, hái yǒu 15 fēnzhōng, zánmen láidejí chī zǎofàn.",
    "note": "Đáp án gợi ý của sách (Bài 4 · điểm 4).",
    "pair": "来得及 + V"
   },
   {
    "promptLang": "vi",
    "prompt": "Nếu bây giờ xuất phát thì vẫn còn kịp.",
    "answer": "要是现在出发，就还来得及。",
    "answerPy": "Yàoshi xiànzài chūfā, jiù hái láidejí.",
    "note": "要是……就…… (Bài 1 · điểm 2).",
    "pair": "要是……就……"
   }
  ]
 },
 {
  "n": 35,
  "zh": "鲜花",
  "py": "xiānhuā",
  "pos": "Danh từ",
  "vn": "hoa tươi",
  "hv": "tiên hoa",
  "em": "💐",
  "lesson": 4,
  "explain": [
   "Hoa tươi (mới hái), khác hoa giả, hoa khô. 鲜 = tươi (新鲜)."
  ],
  "usage": "一束鲜花 · 鲜花店 · 送鲜花.",
  "collo": [
   "一束鲜花",
   "鲜花店",
   "送鲜花",
   "买鲜花"
  ],
  "colloFull": [
   {
    "zh": "一束鲜花",
    "py": "Yí shù xiānhuā",
    "vn": "một bó hoa tươi"
   },
   {
    "zh": "鲜花店",
    "py": "Xiānhuā diàn",
    "vn": "tiệm hoa tươi"
   },
   {
    "zh": "送鲜花",
    "py": "Sòng xiānhuā",
    "vn": "tặng hoa tươi"
   },
   {
    "zh": "买鲜花",
    "py": "Mǎi xiānhuā",
    "vn": "mua hoa tươi"
   }
  ],
  "patterns": [
   {
    "s": "一束 (shù) + 鲜花",
    "m": "Một bó hoa"
   },
   {
    "s": "送 + ai + 鲜花 / 买鲜花送给 + ai",
    "m": "Tặng hoa cho ai"
   }
  ],
  "ex_zh": "有的地铁站里甚至还有鲜花店。",
  "ex_py": "Yǒude dìtiězhàn lǐ shènzhì hái yǒu xiānhuā diàn.",
  "ex_vn": "Có ga tàu điện ngầm thậm chí còn có cả tiệm hoa tươi.",
  "exList": [
   {
    "zh": "有的地铁站里甚至还有鲜花店。",
    "py": "Yǒude dìtiězhàn lǐ shènzhì hái yǒu xiānhuā diàn.",
    "vn": "Có ga tàu điện ngầm thậm chí còn có cả tiệm hoa tươi."
   },
   {
    "zh": "母亲节那天，我给妈妈买了一束鲜花。",
    "py": "Mǔqīnjié nàtiān, wǒ gěi māma mǎi le yí shù xiānhuā.",
    "vn": "Ngày của Mẹ, tôi mua cho mẹ một bó hoa tươi."
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
   },
   {
    "c": "花",
    "p": "huā",
    "type": "形声字 · Chữ hình thanh",
    "st": 7,
    "ord": "艹 → 化",
    "rad": "艹 (thảo – cỏ)",
    "mean": "hoa",
    "tip": "艹 (cỏ cây) + 化 (biến đổi, chỉ âm): cây cỏ biến hoá ra bông → hoa. Ôn: 花 (HSK2 Bài 13), 花园 (HSK3 Bài 3). Chữ 化 cũng có trong 变化 của bài này.",
    "cf": "化 huà (变化) — 花 = 艹 + 化",
    "w": "开花 / 花园 / 花儿"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Trong ga tàu điện ngầm thậm chí còn có tiệm hoa tươi.",
    "answer": "地铁站里甚至还有鲜花店。",
    "answerPy": "Dìtiězhàn lǐ shènzhì hái yǒu xiānhuā diàn.",
    "note": "甚至 (Bài 3 · điểm 3).",
    "pair": "甚至还有……"
   },
   {
    "promptLang": "vi",
    "prompt": "Tan làm tôi mua một bó hoa tươi tặng vợ, cô ấy vui lắm.",
    "answer": "下班的时候，我买了一束鲜花送给妻子，她高兴极了。",
    "answerPy": "Xiàbān de shíhou, wǒ mǎi le yí shù xiānhuā sònggěi qīzi, tā gāoxìng jí le.",
    "note": "V + 给 (HSK 3); ôn 极了.",
    "pair": "送给…… / Adj + 极了"
   }
  ]
 },
 {
  "n": 36,
  "zh": "顺便",
  "py": "shùnbiàn",
  "pos": "Phó từ",
  "vn": "tiện thể, nhân tiện",
  "hv": "thuận tiện",
  "em": "👌",
  "lesson": 4,
  "explain": [
   "Đang làm việc chính, nhân tiện làm thêm việc khác. Bẫy Hán Việt: âm là “thuận tiện” nhưng nghĩa là TIỆN THỂ; “thuận tiện, tiện lợi” là 方便."
  ],
  "usage": "顺便 + V · 顺便帮我…… · 顺便问一下.",
  "collo": [
   "顺便买",
   "顺便问一下",
   "顺便帮我",
   "顺便看看"
  ],
  "colloFull": [
   {
    "zh": "顺便买",
    "py": "Shùnbiàn mǎi",
    "vn": "tiện thể mua"
   },
   {
    "zh": "顺便问一下",
    "py": "Shùnbiàn wènyíxià",
    "vn": "nhân tiện hỏi chút"
   },
   {
    "zh": "顺便帮我",
    "py": "Shùnbiàn bāng wǒ",
    "vn": "tiện thể giúp tôi"
   },
   {
    "zh": "顺便看看",
    "py": "Shùnbiàn kànkan",
    "vn": "tiện thể xem qua"
   }
  ],
  "patterns": [
   {
    "s": "(việc chính)，顺便 + V",
    "m": "Tiện thể làm thêm việc khác"
   },
   {
    "s": "顺便 ≠ 方便",
    "m": "“Thuận tiện” trong tiếng Việt = 方便"
   }
  ],
  "ex_zh": "乘客下班时可以顺便买花送给家人。",
  "ex_py": "Chéngkè xiàbān shí kěyǐ shùnbiàn mǎi huā sònggěi jiārén.",
  "ex_vn": "Hành khách lúc tan làm có thể tiện thể mua hoa tặng người nhà.",
  "exList": [
   {
    "zh": "乘客下班时可以顺便买花送给家人。",
    "py": "Chéngkè xiàbān shí kěyǐ shùnbiàn mǎi huā sònggěi jiārén.",
    "vn": "Hành khách lúc tan làm có thể tiện thể mua hoa tặng người nhà."
   },
   {
    "zh": "你要去超市吗？能不能顺便帮我买个面包？",
    "py": "Nǐ yào qù chāoshì ma? Néng bu néng shùnbiàn bāng wǒ mǎi gè miànbāo?",
    "vn": "Bạn định đi siêu thị à? Có thể tiện thể mua giúp tôi cái bánh mì không?"
   }
  ],
  "hanzi": [
   {
    "c": "顺",
    "p": "shùn",
    "type": "左右结构 · Trái-phải (giản thể)",
    "st": 9,
    "ord": "川 (xuyên) trái → 页 (hiệt) phải",
    "rad": "页 (hiệt – đầu)",
    "mean": "thuận theo, suôn sẻ",
    "tip": "Bộ 页(đầu, hướng) + 川(dòng sông chảy xuôi) → theo DÒNG CHẢY THUẬN, mở rộng thành THUẬN LỢI.",
    "cf": "须 (xū – \"cần phải\", cũng có 页\")",
    "w": "顺利 / 顺便 / 顺序"
   },
   {
    "c": "便",
    "p": "biàn",
    "type": "会意字 · Chữ hội ý",
    "st": 9,
    "ord": "亻 → 更",
    "rad": "亻 (nhân đứng – người)",
    "mean": "tiện",
    "tip": "亻 (người) + 更 (đổi): người biết thay đổi cho hợp → tiện. Đọc biàn trong 方便; đọc pián trong 便宜 (HSK1 Bài 10).",
    "cf": "更 gèng (càng, HSK2 Bài 4) — không có 亻",
    "w": "方便 / 便宜"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Bạn đi bưu điện thì tiện thể gửi giúp tôi bức thư này nhé.",
    "answer": "你去邮局的时候，顺便帮我寄一下这封信吧。",
    "answerPy": "Nǐ qù yóujú de shíhou, shùnbiàn bāng wǒ jì yíxià zhè fēng xìn ba.",
    "note": "顺便 + 帮 + ai + V.",
    "pair": "顺便帮我……"
   },
   {
    "promptLang": "vi",
    "prompt": "Tôi đi Bắc Kinh công tác, tiện thể ghé thăm bạn cũ, thế là chúng tôi cùng nhau ăn một bữa.",
    "answer": "我去北京出差，顺便去看了老朋友，于是我们一起吃了一顿饭。",
    "answerPy": "Wǒ qù Běijīng chūchāi, shùnbiàn qù kàn le lǎo péngyou, yúshì wǒmen yìqǐ chī le yí dùn fàn.",
    "note": "……，于是…… (Bài 3 · điểm 4).",
    "pair": "顺便…… / 于是……"
   }
  ]
 },
 {
  "n": 37,
  "zh": "心情",
  "py": "xīnqíng",
  "pos": "Danh từ",
  "vn": "tâm trạng",
  "hv": "tâm tình",
  "em": "🙂",
  "lesson": 4,
  "explain": [
   "Trạng thái cảm xúc lúc đó (vui, buồn…). Bẫy Hán Việt: “tâm tình” trong tiếng Việt là tình cảm / tâm sự; 心情 = TÂM TRẠNG."
  ],
  "usage": "心情好 · 心情不好 · 心情愉快 · 让……心情变好.",
  "collo": [
   "心情好",
   "心情不好",
   "心情愉快",
   "影响心情"
  ],
  "colloFull": [
   {
    "zh": "心情好",
    "py": "Xīnqíng hǎo",
    "vn": "tâm trạng tốt"
   },
   {
    "zh": "心情不好",
    "py": "Xīnqíng bù hǎo",
    "vn": "tâm trạng không tốt"
   },
   {
    "zh": "心情愉快",
    "py": "Xīnqíng yúkuài",
    "vn": "tâm trạng vui vẻ"
   },
   {
    "zh": "影响心情",
    "py": "Yǐngxiǎng xīnqíng",
    "vn": "ảnh hưởng tâm trạng"
   }
  ],
  "patterns": [
   {
    "s": "心情 + 好 / 不好 / 愉快",
    "m": "✗ 心情很高兴 → ✓ 心情很好 / 我很高兴"
   },
   {
    "s": "让 + ai + 心情 + 变好",
    "m": "Câu kiêm ngữ (HSK 3)"
   }
  ],
  "ex_zh": "这些小小的服务，不仅方便了人们的出行，也让大家的心情变得更加愉快。",
  "ex_py": "Zhèxiē xiǎoxiǎo de fúwù, bùjǐn fāngbiàn le rénmen de chūxíng, yě ràng dàjiā de xīnqíng biànde gèngjiā yúkuài.",
  "ex_vn": "Những dịch vụ nho nhỏ này không chỉ giúp mọi người đi lại thuận tiện, mà còn khiến tâm trạng mọi người vui vẻ hơn.",
  "exList": [
   {
    "zh": "这些小小的服务，不仅方便了人们的出行，也让大家的心情变得更加愉快。",
    "py": "Zhèxiē xiǎoxiǎo de fúwù, bùjǐn fāngbiàn le rénmen de chūxíng, yě ràng dàjiā de xīnqíng biànde gèngjiā yúkuài.",
    "vn": "Những dịch vụ nho nhỏ này không chỉ giúp mọi người đi lại thuận tiện, mà còn khiến tâm trạng mọi người vui vẻ hơn."
   },
   {
    "zh": "听音乐可以让人心情变好。",
    "py": "Tīng yīnyuè kěyǐ ràng rén xīnqíng biànhǎo.",
    "vn": "Nghe nhạc có thể làm tâm trạng tốt lên."
   }
  ],
  "hanzi": [
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
   },
   {
    "c": "情",
    "p": "qíng",
    "type": "左右结构 · Trái-phải",
    "st": 11,
    "ord": "忄 (tâm) trái → 青 (thanh) phải",
    "rad": "忄 (tâm – trái tim, đứng)",
    "mean": "tình cảm",
    "tip": "Bộ tâm 忄 (cảm xúc trong lòng) + 青 (trong trẻo, biểu âm) → cảm xúc TRONG SÁNG, CHÂN THẬT trong lòng = TÌNH CẢM.",
    "cf": "请 (qǐng – \"mời\", cũng có 青\" nhưng bộ 讠 khác)",
    "w": "爱情 / 感情 / 心情"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Nghe nhạc có thể làm tâm trạng tốt lên.",
    "answer": "听音乐可以让人心情变好。",
    "answerPy": "Tīng yīnyuè kěyǐ ràng rén xīnqíng biànhǎo.",
    "note": "Đáp án gợi ý bài nhìn tranh đặt câu của sách.",
    "pair": "让……心情变好"
   },
   {
    "promptLang": "vi",
    "prompt": "Hôm nay trời mưa, tâm trạng tôi không tốt lắm, có điều gặp bạn thì vui lên rồi.",
    "answer": "今天下雨，我心情不太好，不过见到你就开心了。",
    "answerPy": "Jīntiān xiàyǔ, wǒ xīnqíng bú tài hǎo, búguò jiàndào nǐ jiù kāixīn le.",
    "note": "……，不过…… (Bài 2 · điểm 2).",
    "pair": "心情不太好，不过……"
   }
  ]
 },
 {
  "n": 38,
  "zh": "更加",
  "py": "gèngjiā",
  "pos": "Phó từ",
  "vn": "càng, càng thêm, hơn nữa",
  "hv": "cánh gia",
  "em": "⬆️",
  "lesson": 4,
  "explain": [
   "Nghĩa như 更 (càng, hơn) nhưng trang trọng hơn, thường đi với từ hai âm tiết: 更加愉快, 更加健康, 更加努力."
  ],
  "usage": "更加 + Adj / V (hai âm tiết) · 变得更加…….",
  "collo": [
   "更加愉快",
   "更加健康",
   "更加努力",
   "更加方便"
  ],
  "colloFull": [
   {
    "zh": "更加愉快",
    "py": "Gèngjiā yúkuài",
    "vn": "vui vẻ hơn"
   },
   {
    "zh": "更加健康",
    "py": "Gèngjiā jiànkāng",
    "vn": "khỏe mạnh hơn"
   },
   {
    "zh": "更加努力",
    "py": "Gèngjiā nǔlì",
    "vn": "cố gắng hơn"
   },
   {
    "zh": "更加方便",
    "py": "Gèngjiā fāngbiàn",
    "vn": "tiện hơn"
   }
  ],
  "patterns": [
   {
    "s": "更加 + Adj / V hai âm tiết",
    "m": "✗ 更加好 → ✓ 更好 / 更加美好"
   },
   {
    "s": "变得 + 更加 + Adj",
    "m": "Trở nên … hơn"
   }
  ],
  "ex_zh": "也让大家的心情变得更加愉快。",
  "ex_py": "Yě ràng dàjiā de xīnqíng biànde gèngjiā yúkuài.",
  "ex_vn": "Cũng khiến tâm trạng mọi người trở nên vui vẻ hơn.",
  "exList": [
   {
    "zh": "也让大家的心情变得更加愉快。",
    "py": "Yě ràng dàjiā de xīnqíng biànde gèngjiā yúkuài.",
    "vn": "Cũng khiến tâm trạng mọi người trở nên vui vẻ hơn."
   },
   {
    "zh": "是的，我希望自己的身体更加健康。",
    "py": "Shì de, wǒ xīwàng zìjǐ de shēntǐ gèngjiā jiànkāng.",
    "vn": "Đúng vậy, tôi mong cơ thể mình khỏe mạnh hơn nữa."
   }
  ],
  "hanzi": [
   {
    "c": "更",
    "p": "gèng",
    "type": "会意字 · Chữ hội ý",
    "st": 7,
    "ord": "ngang → 曰 → phẩy → mác",
    "rad": "曰 (viết – nói)",
    "mean": "càng, hơn nữa",
    "tip": "Mẹo: nét ngang trên cùng, giữa là 曰, nét phẩy và nét mác dài ôm phía dưới. Đã gặp ở HSK2 Bài 4 (更喜欢).",
    "cf": "便 biàn / pián — thêm bộ 亻 bên trái",
    "w": "更 / 更好看"
   },
   {
    "c": "加",
    "p": "jiā",
    "type": "会意字 · Chữ hội ý",
    "st": 5,
    "ord": "力 → 口",
    "rad": "力 (lực – sức)",
    "mean": "thêm, cộng vào",
    "tip": "力 (sức) + 口 (miệng): vừa ra sức vừa hô hào cổ vũ → thêm vào. 参加 = tham gia, góp mặt vào.",
    "cf": "如 rú (如果) — bên trái là 女",
    "w": "参加"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Cùng với tuổi tác tăng lên, ông ấy càng chú ý đến sức khỏe hơn.",
    "answer": "随着年龄的增长，他更加关注身体健康了。",
    "answerPy": "Suízhe niánlíng de zēngzhǎng, tā gèngjiā guānzhù shēntǐ jiànkāng le.",
    "note": "随着 (Bài 1 · điểm 3).",
    "pair": "随着……，更加……"
   },
   {
    "promptLang": "vi",
    "prompt": "Có tàu điện ngầm rồi, việc đi lại của mọi người càng tiện hơn.",
    "answer": "有了地铁以后，人们的出行更加方便了。",
    "answerPy": "Yǒu le dìtiě yǐhòu, rénmen de chūxíng gèngjiā fāngbiàn le.",
    "note": "更加 + 方便.",
    "pair": "更加 + Adj"
   }
  ]
 },
 {
  "n": 39,
  "zh": "愉快",
  "py": "yúkuài",
  "pos": "Tính từ",
  "vn": "vui vẻ, vui tươi, dễ chịu",
  "hv": "du khoái",
  "em": "😄",
  "lesson": 4,
  "explain": [
   "Vui vẻ, thoải mái trong lòng; hay dùng trong lời chúc (祝你周末愉快) và với 心情."
  ],
  "usage": "心情愉快 · 祝你……愉快 · 愉快的一天.",
  "collo": [
   "心情愉快",
   "周末愉快",
   "旅途愉快",
   "愉快的一天"
  ],
  "colloFull": [
   {
    "zh": "心情愉快",
    "py": "Xīnqíng yúkuài",
    "vn": "tâm trạng vui vẻ"
   },
   {
    "zh": "周末愉快",
    "py": "Zhōumò yúkuài",
    "vn": "cuối tuần vui vẻ"
   },
   {
    "zh": "旅途愉快",
    "py": "Lǚtú yúkuài",
    "vn": "chuyến đi vui vẻ"
   },
   {
    "zh": "愉快的一天",
    "py": "Yúkuài de yì tiān",
    "vn": "một ngày vui vẻ"
   }
  ],
  "patterns": [
   {
    "s": "祝 + ai + N + 愉快",
    "m": "Lời chúc: 祝你周末愉快"
   },
   {
    "s": "心情 + 愉快",
    "m": "Tâm trạng vui vẻ"
   }
  ],
  "ex_zh": "这些小小的服务，不仅方便了人们的出行，也让大家的心情变得更加愉快。",
  "ex_py": "Zhèxiē xiǎoxiǎo de fúwù, bùjǐn fāngbiàn le rénmen de chūxíng, yě ràng dàjiā de xīnqíng biànde gèngjiā yúkuài.",
  "ex_vn": "Những dịch vụ nho nhỏ này không chỉ giúp mọi người đi lại thuận tiện, mà còn khiến tâm trạng mọi người vui vẻ hơn.",
  "exList": [
   {
    "zh": "这些小小的服务，不仅方便了人们的出行，也让大家的心情变得更加愉快。",
    "py": "Zhèxiē xiǎoxiǎo de fúwù, bùjǐn fāngbiàn le rénmen de chūxíng, yě ràng dàjiā de xīnqíng biànde gèngjiā yúkuài.",
    "vn": "Những dịch vụ nho nhỏ này không chỉ giúp mọi người đi lại thuận tiện, mà còn khiến tâm trạng mọi người vui vẻ hơn."
   },
   {
    "zh": "小王因为这件事，一天的心情都非常愉快。",
    "py": "Xiǎo Wáng yīnwèi zhè jiàn shì, yì tiān de xīnqíng dōu fēicháng yúkuài.",
    "vn": "Vì chuyện này mà cả ngày tâm trạng Tiểu Vương rất vui."
   }
  ],
  "hanzi": [
   {
    "c": "愉",
    "p": "yú",
    "type": "左右结构 · Trái-phải",
    "st": 12,
    "ord": "忄 (tâm) trái → 俞 (du) phải",
    "rad": "忄 (tâm – lòng)",
    "mean": "vui vẻ",
    "tip": "Bộ tâm 忄 (cảm xúc) + 俞(biểu âm) → cảm xúc VUI VẺ trong lòng, kết hợp 快(nhanh, sảng khoái) thành 愉快 = VUI VẺ.",
    "cf": "偷 (tōu – \"trộm cắp\", bộ 亻\")",
    "w": "愉快 / 愉悦 / 不愉快"
   },
   {
    "c": "快",
    "p": "kuài",
    "type": "形声字 · Chữ hình thanh",
    "st": 7,
    "ord": "忄 → 夬",
    "rad": "忄 (tâm)",
    "mean": "nhanh; sắp",
    "tip": "快要……了 / 就要……了 — luôn có 了 ở cuối câu.",
    "cf": "就要 (jiù yào)",
    "w": "快要 / 快要……了 / 很快"
   }
  ],
  "checkList": [
   {
    "promptLang": "vi",
    "prompt": "Chúc bạn cuối tuần vui vẻ!",
    "answer": "祝你周末愉快！",
    "answerPy": "Zhù nǐ zhōumò yúkuài!",
    "note": "Lời chúc thường dùng.",
    "pair": "祝……愉快"
   },
   {
    "promptLang": "vi",
    "prompt": "Chuyến du lịch này vui thì vui thật, có điều hơi mệt.",
    "answer": "这次旅游愉快是愉快，就是有点儿累。",
    "answerPy": "Zhè cì lǚyóu yúkuài shì yúkuài, jiùshì yǒudiǎnr lèi.",
    "note": "……×是×，就是…… (Bài 3 · điểm 1).",
    "pair": "A是A，就是……"
   }
  ]
 }
];
var wuData = [
 {
  "img": "/images/hsk4v3/bai-4/wu-A.webp",
  "label": "袋子",
  "py": "dàizi",
  "letter": "A"
 },
 {
  "img": "/images/hsk4v3/bai-4/wu-B.webp",
  "label": "感谢",
  "py": "gǎnxiè",
  "letter": "B"
 },
 {
  "img": "/images/hsk4v3/bai-4/wu-C.webp",
  "label": "早餐",
  "py": "zǎocān",
  "letter": "C"
 },
 {
  "img": "/images/hsk4v3/bai-4/wu-D.webp",
  "label": "乘客",
  "py": "chéngkè",
  "letter": "D"
 },
 {
  "img": "/images/hsk4v3/bai-4/wu-E.webp",
  "label": "鲜花",
  "py": "xiānhuā",
  "letter": "E"
 },
 {
  "img": "/images/hsk4v3/bai-4/wu-F.webp",
  "label": "电动车",
  "py": "diàndòngchē",
  "letter": "F"
 }
];
var dialogData = [
 {
  "scene": "在地铁站 · Ở ga tàu điện ngầm (Trần Thiên Trung chuẩn bị mua vé vào ga) — 小语助力: 停机 = nhà mạng tạm ngừng dịch vụ của thuê bao; 路人 = người lạ đi trên đường, trên phố",
  "anh": "/images/hsk4v3/bai-4/kv-1.webp",
  "nguoi": [
   {
    "ten": "陈天中",
    "anh": "/images/hsk4v3/nv/chen.webp"
   },
   {
    "ten": "路人",
    "anh": "/images/hsk4v3/bai-4/luren.webp"
   }
  ],
  "preQuiz": [
   {
    "q": "陈天中的手机怎么了？",
    "opts": [
     "丢了",
     "坏了",
     "停机了",
     "忘带了"
    ],
    "ans": 2
   },
   {
    "q": "陈天中要去哪儿？",
    "opts": [
     "饭馆",
     "机场",
     "手机店",
     "北京大学站"
    ],
    "ans": 3
   }
  ],
  "lines": [
   {
    "sp": 0,
    "zh": "啊，我的手机停机了！怎么办啊？",
    "py": "Ā, wǒ de shǒujī tíng jī le! Zěnmebàn ā?",
    "vn": "Á, điện thoại của tôi bị cắt rồi! Làm sao bây giờ?"
   },
   {
    "sp": 1,
    "zh": "你好，你看上去很着急，需要帮忙吗？",
    "py": "Nǐhǎo, nǐ kàn shàngqu hěn zháojí, xūyào bāngmáng ma?",
    "vn": "Chào bạn, trông bạn có vẻ sốt ruột lắm, bạn cần giúp gì không?"
   },
   {
    "sp": 0,
    "zh": "我忘了交电话费，手机停机了。我没带现金，手机没有信号，上不了网，买不了地铁票了。",
    "py": "Wǒ wàng le jiāo diàn huàfèi, shǒujī tíng jī le. Wǒ méi dài xiànjīn, shǒujī méiyǒu xìnhào, shàng bu le wǎng, mǎi bu le dìtiě piào le.",
    "vn": "Tôi quên đóng tiền điện thoại nên máy bị cắt rồi. Tôi không mang tiền mặt, điện thoại không có sóng, không lên mạng được, không mua được vé tàu điện ngầm nữa."
   },
   {
    "sp": 1,
    "zh": "你要去哪儿？我帮你买张票。",
    "py": "Nǐ yào qù nǎr? Wǒ bāng nǐ mǎi zhāng piào.",
    "vn": "Bạn muốn đi đâu? Để tôi mua giúp bạn một vé."
   },
   {
    "sp": 0,
    "zh": "太感谢你了，我要去北京大学站。对了，能不能告诉我你的联系方式？我想把钱还给你。",
    "py": "Tài gǎnxiè nǐ le, wǒ yào qù běijīngdàxué zhàn. Duì le, néng bu néng gàosu wǒ nǐ de liánxì fāngshì? Wǒ xiǎng bǎ qián huán gěi nǐ.",
    "vn": "Cảm ơn bạn nhiều lắm, tôi muốn đến ga Đại học Bắc Kinh. À đúng rồi, bạn có thể cho tôi cách liên lạc của bạn không? Tôi muốn trả lại tiền cho bạn."
   },
   {
    "sp": 1,
    "zh": "别客气，很高兴能帮到你。",
    "py": "Bié kèqi, hěn gāoxìng néng bāng dào nǐ.",
    "vn": "Đừng khách sáo, rất vui vì đã giúp được bạn."
   }
  ]
 },
 {
  "scene": "在楼下 · Dưới chân tòa nhà (Bạch Gia Nguyệt gặp cô hàng xóm sống cùng tầng)",
  "anh": "/images/hsk4v3/bai-4/kv-2.webp",
  "nguoi": [
   {
    "ten": "白家月",
    "anh": "/images/hsk4v3/nv/bai.webp"
   },
   {
    "ten": "邻居",
    "anh": "/images/hsk4v3/bai-4/linju.webp"
   }
  ],
  "preQuiz": [
   {
    "q": "白家月现在要做什么？",
    "opts": [
     "上楼",
     "去超市",
     "去邻居家",
     "去锻炼身体"
    ],
    "ans": 0
   },
   {
    "q": "白家月要帮邻居做什么？",
    "opts": [
     "开车",
     "买东西",
     "去车里拿东西",
     "把东西提上楼"
    ],
    "ans": 3
   }
  ],
  "lines": [
   {
    "sp": 0,
    "zh": "阿姨，您怎么站在这儿不上楼？",
    "py": "Āyí, nín zěnme zhàn zài zhèr bú shànglóu?",
    "vn": "Cô ơi, sao cô đứng đây mà không lên lầu ạ?"
   },
   {
    "sp": 1,
    "zh": "我开车去超市买了不少东西，刚拿过来了一些。我先休息一会儿，再去车里拿剩下的。",
    "py": "Wǒ kāichē qù chāoshì mǎi le bùshǎo dōngxi, gāng ná guòlai le yìxiē. Wǒ xiān xiūxi yíhuìr, zài qù chē lǐ ná shèngxià de.",
    "vn": "Cô lái xe đi siêu thị mua khá nhiều đồ, vừa mang qua đây được một ít. Cô nghỉ một lát đã, rồi ra xe lấy chỗ còn lại."
   },
   {
    "sp": 0,
    "zh": "我正好要上楼，我帮您提上去吧。",
    "py": "Wǒ zhènghǎo yào shànglóu, wǒ bāng nín tí shàngqu ba.",
    "vn": "Cháu đang định lên lầu, để cháu xách lên giúp cô nhé."
   },
   {
    "sp": 1,
    "zh": "不用不用，这几个袋子太重了，我自己拿吧。",
    "py": "Búyòng búyòng, zhè jǐ gè dàizi tài zhòng le, wǒ zìjǐ ná ba.",
    "vn": "Không cần đâu cháu, mấy cái túi này nặng lắm, để cô tự mang."
   },
   {
    "sp": 0,
    "zh": "没事，我提着这些东西就算锻炼身体了，再说邻居之间就是要互相帮助啊。",
    "py": "Méishì, wǒ tí zhe zhèxiē dōngxi jiùsuàn duànliàn shēntǐ le, zàishuō línjū zhījiān jiùshì yào hùxiāng bāngzhù ā.",
    "vn": "Không sao đâu ạ, cháu xách mấy thứ này coi như tập thể dục rồi, vả lại hàng xóm với nhau thì phải giúp đỡ lẫn nhau mà."
   },
   {
    "sp": 1,
    "zh": "谢谢家月！那就辛苦你了。",
    "py": "Xièxie Jiāyuè! Nà jiù xīnkǔ nǐ le.",
    "vn": "Cảm ơn Gia Nguyệt! Vậy làm phiền cháu nhé."
   }
  ]
 },
 {
  "scene": "短距离出行的新选择 · Lựa chọn mới cho việc đi lại quãng ngắn",
  "anh": "/images/hsk4v3/bai-4/kv-3.webp",
  "nguoi": [
   {
    "ten": "小语",
    "anh": "/images/hsk4v3/nv/xiaoyu.webp"
   }
  ],
  "preQuiz": [
   {
    "q": "白家月怎么去学校？",
    "opts": [
     "走路",
     "坐地铁",
     "骑自行车",
     "骑电动车"
    ],
    "ans": 2
   },
   {
    "q": "最近陈天中打算买什么？",
    "opts": [
     "手机",
     "自行车",
     "电动车",
     "运动鞋"
    ],
    "ans": 2
   }
  ],
  "lines": [
   {
    "sp": 0,
    "zh": "在城市里，人们出行的方式越来越多。",
    "py": "Zài chéngshì lǐ, rénmen chūxíng de fāngshì yuèláiyuè duō.",
    "vn": "Ở thành phố, cách đi lại của mọi người ngày càng nhiều."
   },
   {
    "sp": 0,
    "zh": "短距离出行时，骑自行车往往是人们常见的选择。",
    "py": "Duǎn jùlí chūxíng shí, qí zìxíngchē wǎngwǎng shì rénmen chángjiàn de xuǎnzé.",
    "vn": "Khi đi quãng ngắn, đi xe đạp thường là lựa chọn phổ biến của mọi người."
   },
   {
    "sp": 0,
    "zh": "白家月就很喜欢骑车去学校，她觉得这样既方便，又能锻炼身体，还能保护环境。",
    "py": "Bái Jiāyuè jiù hěn xǐhuan qíchē qù xuéxiào, tā juéde zhèyàng jì fāngbiàn, yòu néng duànliàn shēntǐ, hái néng bǎohù huánjìng.",
    "vn": "Bạch Gia Nguyệt rất thích đạp xe đến trường, cô ấy thấy như vậy vừa tiện, vừa rèn luyện được thân thể, lại còn bảo vệ được môi trường."
   },
   {
    "sp": 0,
    "zh": "除了骑自行车，人们还会选择骑电动车。",
    "py": "Chúle qí zìxíngchē, rénmen hái huì xuǎnzé qí diàndòngchē.",
    "vn": "Ngoài đi xe đạp, mọi người còn chọn đi xe điện."
   },
   {
    "sp": 0,
    "zh": "电动车速度快，价格不高，充电也很方便，所以越来越流行。",
    "py": "Diàndòngchē sùdù kuài, jiàgé bù gāo, chōngdiàn yě hěn fāngbiàn, suǒyǐ yuèláiyuè liúxíng.",
    "vn": "Xe điện tốc độ nhanh, giá không cao, sạc điện cũng rất tiện, nên ngày càng thịnh hành."
   },
   {
    "sp": 0,
    "zh": "陈天中平时也骑自行车，不过为了省力气，他最近打算买一辆电动车。",
    "py": "Chén Tiānzhōng píngshí yě qí zìxíngchē, búguò wèile shěng lìqi, tā zuìjìn dǎsuàn mǎi yí liàng diàndòngchē.",
    "vn": "Trần Thiên Trung bình thường cũng đi xe đạp, có điều để đỡ tốn sức, gần đây cậu ấy định mua một chiếc xe điện."
   }
  ],
  "doan": true
 },
 {
  "scene": "地铁站里的贴心服务 · Những dịch vụ chu đáo trong ga tàu điện ngầm",
  "anh": "/images/hsk4v3/bai-4/kv-4.webp",
  "nguoi": [
   {
    "ten": "小语",
    "anh": "/images/hsk4v3/nv/xiaoyu.webp"
   }
  ],
  "preQuiz": [
   {
    "q": "根据课文，什么样的地铁站里最可能有早餐车？",
    "opts": [
     "很大的",
     "附近公司多的",
     "在学校旁边的",
     "坐车乘客多的"
    ],
    "ans": 1
   },
   {
    "q": "根据课文，人们在地铁站里最可能买到：",
    "opts": [
     "包子",
     "雨衣",
     "雨伞",
     "地图"
    ],
    "ans": 0
   }
  ],
  "lines": [
   {
    "sp": 0,
    "zh": "在中国，乘客可以在不少地铁站里直接扫码购买食物和饮料，有的地铁站还提供免费借雨伞、发雨衣等服务。",
    "py": "Zài Zhōngguó, chéngkè kěyǐ zài bùshǎo dìtiězhàn lǐ zhíjiē sǎo mǎ gòumǎi shíwù hé yǐnliào, yǒude dìtiězhàn hái tígōng miǎnfèi jiè yǔsǎn, fā yǔyī děng fúwù.",
    "vn": "Ở Trung Quốc, hành khách có thể quét mã mua đồ ăn và đồ uống ngay trong nhiều ga tàu điện ngầm, có ga còn cung cấp các dịch vụ như cho mượn ô, phát áo mưa miễn phí."
   },
   {
    "sp": 0,
    "zh": "有些地铁站附近公司比较多，工作日站里还有早餐车，没来得及吃早饭的人在这里就能买到热包子和牛奶等，省了不少时间。",
    "py": "Yǒuxiē dìtiězhàn fùjìn gōngsī bǐjiào duō, gōngzuòrì zhàn lǐ hái yǒu zǎocān chē, méi láidejí chī zǎofàn de rén zài zhèli jiù néng mǎidào rè bāozi hé niúnǎi děng, shěng le bùshǎo shíjiān.",
    "vn": "Có những ga gần đó khá nhiều công ty, ngày làm việc trong ga còn có xe bán đồ ăn sáng, người không kịp ăn sáng có thể mua bánh bao nóng, sữa… ngay tại đây, tiết kiệm được khá nhiều thời gian."
   },
   {
    "sp": 0,
    "zh": "有的地铁站里甚至还有鲜花店，乘客下班时可以顺便买花送给家人。",
    "py": "Yǒude dìtiězhàn lǐ shènzhì hái yǒu xiānhuā diàn, chéngkè xiàbān shí kěyǐ shùnbiàn mǎi huā sònggěi jiārén.",
    "vn": "Có ga thậm chí còn có cả tiệm hoa tươi, hành khách lúc tan làm có thể tiện thể mua hoa tặng người nhà."
   },
   {
    "sp": 0,
    "zh": "这些小小的服务，不仅方便了人们的出行，也让大家的心情变得更加愉快。",
    "py": "Zhèxiē xiǎoxiǎo de fúwù, bùjǐn fāngbiàn le rénmen de chūxíng, yě ràng dàjiā de xīnqíng biànde gèngjiā yúkuài.",
    "vn": "Những dịch vụ nho nhỏ này không chỉ giúp mọi người đi lại thuận tiện, mà còn khiến tâm trạng mọi người trở nên vui vẻ hơn."
   }
  ],
  "doan": true
 }
];
var listenData = [
 {
  "audio": "师傅，我的手机没电了，扫不了码，也没带现金，怎么办啊？别着急，我帮你付吧。太感谢您了！能告诉我您的联系方式吗？我想把钱还给您。别客气，才两块钱，谁都有需要帮忙的时候。",
  "questions": [
   {
    "q": "说话人为什么扫不了码？",
    "opts": [
     "手机没电了",
     "手机没有信号",
     "忘带手机了"
    ],
    "ans": 0
   },
   {
    "q": "帮忙的人觉得这件事怎么样？",
    "opts": [
     "很麻烦",
     "是小事，不用客气",
     "一定要还钱"
    ],
    "ans": 1
   }
  ]
 },
 {
  "audio": "王阿姨，您的箱子这么重，提得了吗？我帮您搬上去吧。太好了，那就辛苦你了。我车里还剩两个袋子。没事，我下楼的时候顺便帮您拿上来。再说邻居之间就是要互相帮助嘛。",
  "questions": [
   {
    "q": "王阿姨的东西怎么样？",
    "opts": [
     "很重",
     "很便宜",
     "很少"
    ],
    "ans": 0
   },
   {
    "q": "剩下的袋子在哪儿？",
    "opts": [
     "超市里",
     "车里",
     "邻居家"
    ],
    "ans": 1
   }
  ]
 },
 {
  "audio": "你每天怎么来公司？以前坐地铁，现在骑电动车。为什么换了？电动车既省力气，速度又快，充电也很方便。再说我家到公司的距离不算远，二十分钟就到了。",
  "questions": [
   {
    "q": "他现在怎么来公司？",
    "opts": [
     "坐地铁",
     "骑电动车",
     "骑自行车"
    ],
    "ans": 1
   },
   {
    "q": "他从家到公司要多长时间？",
    "opts": [
     "十分钟",
     "二十分钟",
     "半个小时"
    ],
    "ans": 1
   }
  ]
 }
];
var matchData = [
 {
  "left": "交",
  "right": "电话费"
 },
 {
  "left": "互相",
  "right": "帮助"
 },
 {
  "left": "省",
  "right": "力气"
 },
 {
  "left": "购买",
  "right": "食物和饮料"
 },
 {
  "left": "免费",
  "right": "借雨伞"
 },
 {
  "left": "骑",
  "right": "电动车"
 },
 {
  "left": "心情",
  "right": "更加愉快"
 },
 {
  "left": "既……",
  "right": "又……"
 },
 {
  "left": "没来得及",
  "right": "吃早饭"
 }
];
var fillData = [
 {
  "pre": "我忘了交电话",
  "blank": "费",
  "post": "，手机停机了。",
  "hint": "(phí, tiền)",
  "ans": "费",
  "exp": "电话费 = tiền điện thoại."
 },
 {
  "pre": "手机没有",
  "blank": "信号",
  "post": "，上不了网。",
  "hint": "(sóng)",
  "ans": "信号",
  "exp": "没有信号 = không có sóng."
 },
 {
  "pre": "能不能告诉我你的联系",
  "blank": "方式",
  "post": "？",
  "hint": "(cách)",
  "ans": "方式",
  "exp": "联系方式 = cách liên lạc."
 },
 {
  "pre": "我先休息一会儿，再去车里拿",
  "blank": "剩",
  "post": "下的。",
  "hint": "(còn lại)",
  "ans": "剩",
  "exp": "剩下的 = phần còn lại."
 },
 {
  "pre": "邻居之间就是要",
  "blank": "互相",
  "post": "帮助啊。",
  "hint": "(lẫn nhau)",
  "ans": "互相",
  "exp": "互相 + 帮助."
 },
 {
  "pre": "短距离出行时，骑自行车",
  "blank": "往往",
  "post": "是人们常见的选择。",
  "hint": "(thường thường)",
  "ans": "往往",
  "exp": "往往 + điều kiện / quy luật."
 },
 {
  "pre": "电动车",
  "blank": "速度",
  "post": "快，价格不高。",
  "hint": "(tốc độ)",
  "ans": "速度",
  "exp": "速度快 = tốc độ nhanh."
 },
 {
  "pre": "不过为了省",
  "blank": "力气",
  "post": "，他最近打算买一辆电动车。",
  "hint": "(sức lực)",
  "ans": "力气",
  "exp": "省力气 = đỡ tốn sức."
 },
 {
  "pre": "乘客下班时可以",
  "blank": "顺便",
  "post": "买花送给家人。",
  "hint": "(tiện thể)",
  "ans": "顺便",
  "exp": "顺便 + V; ≠ 方便."
 },
 {
  "pre": "也让大家的心情变得更加",
  "blank": "愉快",
  "post": "。",
  "hint": "(vui vẻ)",
  "ans": "愉快",
  "exp": "心情愉快 = tâm trạng vui vẻ."
 }
];
var sortData = [
 {
  "words": [
   "手机",
   "没有信号",
   "，",
   "上不了",
   "网",
   "。"
  ],
  "ans": "手机没有信号，上不了网。",
  "audio": "手机没有信号，上不了网。"
 },
 {
  "words": [
   "我",
   "提着",
   "这些东西",
   "就算",
   "锻炼身体",
   "了",
   "。"
  ],
  "ans": "我提着这些东西就算锻炼身体了。",
  "audio": "我提着这些东西就算锻炼身体了。"
 },
 {
  "words": [
   "今天",
   "太晚了",
   "，",
   "再说",
   "外面",
   "还在下雨呢",
   "。"
  ],
  "ans": "今天太晚了，再说外面还在下雨呢。",
  "audio": "今天太晚了，再说外面还在下雨呢。"
 },
 {
  "words": [
   "她",
   "觉得",
   "这样",
   "既方便",
   "，",
   "又能",
   "锻炼身体",
   "。"
  ],
  "ans": "她觉得这样既方便，又能锻炼身体。",
  "audio": "她觉得这样既方便，又能锻炼身体。"
 },
 {
  "words": [
   "中午12点的飞机",
   "，",
   "咱们",
   "9点出发",
   "来得及",
   "吗",
   "？"
  ],
  "ans": "中午12点的飞机，咱们9点出发来得及吗？",
  "audio": "中午12点的飞机，咱们9点出发来得及吗？"
 },
 {
  "words": [
   "乘客",
   "下班时",
   "可以",
   "顺便",
   "买花",
   "送给家人",
   "。"
  ],
  "ans": "乘客下班时可以顺便买花送给家人。",
  "audio": "乘客下班时可以顺便买花送给家人。"
 }
];
var mcData = [
 {
  "q": "手机没有信号，上＿＿网。",
  "opts": [
   "不了",
   "得了",
   "不能",
   "没"
  ],
  "ans": 0,
  "exp": "上网 là từ ly hợp → 上不了网 (bổ ngữ khả năng)."
 },
 {
  "q": "明天的足球比赛，你们班男生参加＿＿吗？",
  "opts": [
   "得了",
   "不了了",
   "了得",
   "得不"
  ],
  "ans": 0,
  "exp": "Hỏi khả năng: V + 得了 + 吗？"
 },
 {
  "q": "今天太晚了，别去超市了，＿＿外面还在下雨呢。",
  "opts": [
   "再说",
   "不过",
   "于是",
   "甚至"
  ],
  "ans": 0,
  "exp": "再说 bổ sung lý do thứ hai cùng chiều."
 },
 {
  "q": "这家饭馆的菜既好吃，＿＿便宜。",
  "opts": [
   "又",
   "还是",
   "就",
   "再"
  ],
  "ans": 0,
  "exp": "既……又……"
 },
 {
  "q": "你现在才告诉我，我＿＿通知大家了。",
  "opts": [
   "来不及",
   "来得及",
   "没来得及",
   "不来及"
  ],
  "ans": 0,
  "exp": "来不及 + V + 了: không kịp nữa."
 },
 {
  "q": "我提着这些东西就＿＿锻炼身体了。",
  "opts": [
   "算",
   "像",
   "成为",
   "变"
  ],
  "ans": 0,
  "exp": "就算……了 = coi như là."
 },
 {
  "q": "短距离出行时，骑自行车＿＿是人们常见的选择。",
  "opts": [
   "往往",
   "刚才",
   "以后",
   "将来"
  ],
  "ans": 0,
  "exp": "往往 = thường thường (theo quy luật)."
 },
 {
  "q": "你要去超市吗？能不能＿＿帮我买个面包？",
  "opts": [
   "顺便",
   "方便",
   "随便",
   "简单"
  ],
  "ans": 0,
  "exp": "顺便 = tiện thể; 方便 = thuận tiện (bẫy Hán Việt)."
 },
 {
  "q": "在中国，乘客可以在地铁站里直接扫码＿＿食物和饮料。",
  "opts": [
   "购买",
   "免费",
   "提供",
   "充电"
  ],
  "ans": 0,
  "exp": "购买 + 食物 (mua, trang trọng)."
 },
 {
  "q": "谢谢家月！那就＿＿你了。",
  "opts": [
   "辛苦",
   "客气",
   "愉快",
   "互相"
  ],
  "ans": 0,
  "exp": "辛苦你了 = làm phiền bạn / bạn vất vả rồi."
 }
];
var speakingData = {
 "intro": "Nhấn nút loa nghe câu hỏi (câu hỏi phần Khởi động, câu hỏi đọc hiểu, kể lại bài khoá, khảo sát và đóng vai), rồi tự ghi âm câu trả lời — cố dùng từ mới và 4 điểm ngữ pháp của bài.",
 "questions": [
  {
   "q_zh": "你帮助过别人吗？你是怎么提供帮助的？",
   "q_vn": "Bạn đã từng giúp đỡ người khác chưa? Bạn đã giúp như thế nào?",
   "hint": "有一次，……，我看他很着急，就……。他很感谢我……",
   "sample": "帮助过。有一次在地铁站，一位老人的袋子太重了，提不了，我正好要出站，就帮他提了上去。他很感谢我，我说别客气，很高兴能帮到他。",
   "sample_vn": "Có. Có lần ở ga tàu điện ngầm, túi đồ của một cụ già nặng quá, cụ xách không nổi, tôi vừa hay ra khỏi ga nên xách lên giúp cụ. Cụ rất cảm ơn tôi, tôi nói đừng khách sáo, rất vui vì giúp được cụ.",
   "note": "Câu hỏi phần Khởi động (1); dùng V不了 (điểm 1)."
  },
  {
   "q_zh": "你最常用的出行方式是什么？为什么？",
   "q_vn": "Cách đi lại bạn dùng nhiều nhất là gì? Vì sao?",
   "hint": "我最常……，因为既……，又……，再说……",
   "sample": "我最常骑电动车，因为电动车既省力气，速度又快，再说充电也很方便。",
   "sample_vn": "Tôi hay đi xe điện nhất, vì xe điện vừa đỡ tốn sức, tốc độ lại nhanh, vả lại sạc điện cũng rất tiện.",
   "note": "Câu hỏi phần Khởi động (2); dùng 既……又…… (điểm 3) + 再说 (điểm 2)."
  },
  {
   "q_zh": "陈天中为什么很着急？他为什么想要那个人的联系方式？",
   "q_vn": "Vì sao Trần Thiên Trung rất sốt ruột? Vì sao cậu ấy muốn xin cách liên lạc của người kia?",
   "hint": "因为他忘了……，手机……，上不了……，买不了……。因为那个人……，他想……",
   "sample": "因为他忘了交电话费，手机停机了，没有信号，上不了网，也买不了地铁票。他想要那个人的联系方式，是因为那个人帮他买了票，他想把钱还给她。",
   "sample_vn": "Vì cậu quên đóng tiền điện thoại, máy bị cắt, không có sóng, không lên mạng được, cũng không mua được vé tàu. Cậu muốn xin cách liên lạc của người kia vì người đó đã mua vé giúp, cậu muốn trả lại tiền.",
   "note": "Câu hỏi đọc hiểu bài khoá 1."
  },
  {
   "q_zh": "请根据提示复述课文一。",
   "q_vn": "Dựa vào gợi ý, kể lại bài khoá 1.",
   "hint": "陈天中发现他的手机……，因为没有信号，……，自己也没带……，所以……。这时，一个人……，就帮他……。陈天中很……，想要……，想把钱……。那个人说……",
   "sample": "陈天中发现他的手机停机了，因为没有信号，上不了网，自己也没带现金，所以买不了地铁票了。这时，一个人看他很着急，就帮他买了一张票。陈天中很感谢她，想要她的联系方式，想把钱还给她。那个人说别客气，很高兴能帮到陈天中。",
   "sample_vn": "Trần Thiên Trung phát hiện điện thoại bị cắt, vì không có sóng nên không lên mạng được, bản thân cũng không mang tiền mặt nên không mua được vé tàu điện ngầm. Lúc đó, một người thấy cậu sốt ruột liền mua giúp cậu một vé. Trần Thiên Trung rất cảm ơn, muốn xin cách liên lạc để trả lại tiền. Người đó nói đừng khách sáo, rất vui vì giúp được cậu.",
   "note": "Bài tập 复述 của sách (trang 37)."
  },
  {
   "q_zh": "邻居为什么不上楼？白家月为什么帮邻居提东西？",
   "q_vn": "Vì sao cô hàng xóm không lên lầu? Vì sao Bạch Gia Nguyệt giúp cô ấy xách đồ?",
   "hint": "因为她买了……，袋子……，她想先……。白家月正好……，她觉得……就算……，再说……",
   "sample": "因为她买了不少东西，袋子太重了，她想先休息一会儿，再去车里拿剩下的。白家月正好要上楼，她觉得提着这些东西就算锻炼身体了，再说邻居之间就是要互相帮助。",
   "sample_vn": "Vì cô mua khá nhiều đồ, túi nặng quá, cô muốn nghỉ một lát rồi mới ra xe lấy chỗ còn lại. Bạch Gia Nguyệt vừa hay lên lầu, cô thấy xách đồ coi như tập thể dục, vả lại hàng xóm phải giúp đỡ lẫn nhau.",
   "note": "Câu hỏi đọc hiểu bài khoá 2; dùng 再说 (điểm 2)."
  },
  {
   "q_zh": "白家月为什么喜欢骑车？电动车为什么越来越流行？",
   "q_vn": "Vì sao Bạch Gia Nguyệt thích đạp xe? Vì sao xe điện ngày càng thịnh hành?",
   "hint": "她觉得骑车既……，又……，还……。因为电动车……，价格……，充电……",
   "sample": "白家月觉得骑车既方便，又能锻炼身体，还能保护环境。电动车越来越流行，是因为它速度快，价格不高，充电也很方便。",
   "sample_vn": "Bạch Gia Nguyệt thấy đạp xe vừa tiện, vừa rèn luyện thân thể, lại bảo vệ môi trường. Xe điện ngày càng thịnh hành vì tốc độ nhanh, giá không cao, sạc điện cũng tiện.",
   "note": "Câu hỏi đọc hiểu bài khoá 3; dùng 既……又…… (điểm 3)."
  },
  {
   "q_zh": "请根据提示复述课文三。",
   "q_vn": "Dựa vào gợi ý, kể lại bài khoá 3.",
   "hint": "在城市里，人们出行的方式……。……出行时，骑自行车往往是……。白家月就……，她觉得这样既……，又……，还……。除了……，人们还会选择……。电动车……，所以……。陈天中平时……，不过为了……，他最近……",
   "sample": "在城市里，人们出行的方式越来越多。短距离出行时，骑自行车往往是人们常见的选择。白家月就很喜欢骑车去学校，她觉得这样既方便，又能锻炼身体，还能保护环境。除了骑自行车，人们还会选择骑电动车。电动车速度快，价格不高，充电也很方便，所以越来越流行。陈天中平时也骑自行车，不过为了省力气，他最近打算买一辆电动车。",
   "sample_vn": "Ở thành phố, cách đi lại ngày càng nhiều. Đi quãng ngắn thì xe đạp thường là lựa chọn phổ biến… Trần Thiên Trung bình thường cũng đạp xe, có điều để đỡ tốn sức, gần đây cậu định mua một chiếc xe điện.",
   "note": "Bài tập 复述 của sách (trang 40–41)."
  },
  {
   "q_zh": "在中国，不少地铁站都提供什么服务？这些服务有什么作用？",
   "q_vn": "Ở Trung Quốc, nhiều ga tàu điện ngầm cung cấp những dịch vụ gì? Những dịch vụ đó có tác dụng gì?",
   "hint": "乘客可以……，有的地铁站还提供……，甚至还有……。这些服务不仅……，也……",
   "sample": "乘客可以在站里扫码购买食物和饮料，有的地铁站还提供免费借雨伞、发雨衣等服务，有的还有早餐车，甚至还有鲜花店。这些服务不仅方便了人们的出行，也让大家的心情变得更加愉快。",
   "sample_vn": "Hành khách có thể quét mã mua đồ ăn, đồ uống trong ga; có ga còn cho mượn ô, phát áo mưa miễn phí, có xe đồ ăn sáng, thậm chí có tiệm hoa. Những dịch vụ này không chỉ giúp đi lại tiện lợi mà còn làm tâm trạng mọi người vui hơn.",
   "note": "Câu hỏi đọc hiểu bài khoá 4; ôn 甚至, 不仅……也…… (Bài 3)."
  },
  {
   "q_zh": "调查：请采访一位同学——你住在校内还是校外？你每天怎么来学校？为什么选择这种出行方式？",
   "q_vn": "Khảo sát: phỏng vấn một bạn trong lớp — Bạn ở trong trường hay ngoài trường? Hằng ngày bạn đến trường bằng cách nào? Vì sao chọn cách đi lại đó?",
   "hint": "我住在……。我每天……来学校，因为……既……又……，再说……。要是……，我就……",
   "sample": "我住在校外，我家到学校的距离不算远，大概三公里。我每天骑自行车来学校，因为骑车既方便，又能锻炼身体，再说也不会堵车。要是下大雨，我就坐地铁，地铁站离我家很近，坐地铁十五分钟就到了，上课一定来得及。我觉得骑自行车还能保护环境，所以我很少打车。",
   "sample_vn": "Mình ở ngoài trường, nhà cách trường không xa lắm, khoảng 3 km. Hằng ngày mình đạp xe đến trường vì đạp xe vừa tiện vừa rèn luyện thân thể, vả lại không bị tắc đường. Nếu mưa to thì mình đi tàu điện ngầm, ga gần nhà, 15 phút là tới, chắc chắn kịp giờ học. Mình thấy đạp xe còn bảo vệ môi trường nên rất ít khi đi taxi.",
   "note": "Hoạt động 调查 (khảo sát) trong 任务活动 của sách, trang 45 — hỏi đủ 4 cột: 姓名, 居住情况, 日常出行方式, 原因."
  },
  {
   "q_zh": "角色扮演：你在地铁站，手机没电了，扫不了码，也没带现金。请向一位路人寻求帮助；另一位同学扮演路人。",
   "q_vn": "Đóng vai: Em đang ở ga tàu điện ngầm, điện thoại hết pin, không quét mã được, cũng không mang tiền mặt. Hãy nhờ một người qua đường giúp; một bạn khác đóng vai người qua đường.",
   "hint": "不好意思，打扰一下……，我的手机……，扫不了……。能不能……？太感谢你了！能不能告诉我……？——别客气……再说……",
   "sample": "A：不好意思，打扰一下。我的手机没电了，扫不了码，也没带现金，买不了地铁票。您能帮帮我吗？B：没问题，你要去哪儿？A：我要去北京大学站，上午十点有课，现在九点半了，不知道还来得及吗？B：来得及，坐地铁二十分钟就到了。我帮你买张票吧。A：太感谢您了！能不能告诉我您的联系方式？我回到学校就把钱还给您。B：别客气，才几块钱。再说谁都有需要帮忙的时候。A：那就辛苦您了，您真是个好人！B：很高兴能帮到你，快去上课吧！",
   "sample_vn": "A: Xin lỗi, làm phiền một chút. Điện thoại tôi hết pin, không quét mã được, cũng không mang tiền mặt nên không mua được vé. Anh/chị giúp tôi được không? B: Được chứ, bạn đi đâu? A: Tôi đến ga Đại học Bắc Kinh, 10 giờ có tiết, giờ 9 rưỡi rồi, không biết còn kịp không? B: Kịp, đi tàu 20 phút là tới. Để tôi mua vé giúp. A: Cảm ơn nhiều lắm! Cho tôi xin cách liên lạc, về trường tôi trả lại tiền. B: Đừng khách sáo, có mấy đồng. Vả lại ai cũng có lúc cần giúp đỡ. A: Vậy làm phiền anh/chị rồi! B: Rất vui vì giúp được bạn, mau đi học đi!",
   "note": "Hoạt động đóng vai bổ sung theo mục tiêu 1 của bài (nhờ / giúp đỡ trong đời sống); dùng đủ 4 điểm ngữ pháp: V不了, 再说, 来得及 và từ mới 联系方式, 客气, 辛苦."
  }
 ]
};
var translateData = [
 {
  "vi": "Điện thoại không có sóng, không lên mạng được, không mua được vé tàu điện ngầm nữa.",
  "zh": "手机没有信号，上不了网，买不了地铁票了。",
  "py": "Shǒujī méiyǒu xìnhào, shàng bu le wǎng, mǎi bu le dìtiě piào le."
 },
 {
  "vi": "Cháu xách mấy thứ này coi như tập thể dục, vả lại hàng xóm với nhau phải giúp đỡ lẫn nhau.",
  "zh": "我提着这些东西就算锻炼身体了，再说邻居之间就是要互相帮助。",
  "py": "Wǒ tí zhe zhèxiē dōngxi jiùsuàn duànliàn shēntǐ le, zàishuō línjū zhījiān jiùshì yào hùxiāng bāngzhù."
 },
 {
  "vi": "Cô ấy thấy đi xe đạp vừa tiện, vừa rèn luyện được thân thể.",
  "zh": "她觉得骑自行车既方便，又能锻炼身体。",
  "py": "Tā juéde qí zìxíngchē jì fāngbiàn, yòu néng duànliàn shēntǐ."
 },
 {
  "vi": "Người không kịp ăn sáng có thể mua bánh bao nóng ở đây.",
  "zh": "没来得及吃早饭的人可以在这里买到热包子。",
  "py": "Méi láidejí chī zǎofàn de rén kěyǐ zài zhèli mǎidào rè bāozi."
 },
 {
  "vi": "Để đỡ tốn sức, gần đây anh ấy định mua một chiếc xe điện.",
  "zh": "为了省力气，他最近打算买一辆电动车。",
  "py": "Wèile shěng lìqi, tā zuìjìn dǎsuàn mǎi yí liàng diàndòngchē."
 },
 {
  "vi": "Hành khách lúc tan làm có thể tiện thể mua hoa tặng người nhà.",
  "zh": "乘客下班时可以顺便买花送给家人。",
  "py": "Chéngkè xiàbān shí kěyǐ shùnbiàn mǎi huā sònggěi jiārén."
 }
];
var translateDataRev = [
 {
  "vi": "Cảm ơn bạn nhiều lắm! Bạn có thể cho tôi cách liên lạc của bạn không?",
  "zh": "太感谢你了！能不能告诉我你的联系方式？",
  "py": "Tài gǎnxiè nǐ le! Néng bu néng gàosu wǒ nǐ de liánxì fāngshì?"
 },
 {
  "vi": "Đừng khách sáo, rất vui vì đã giúp được bạn.",
  "zh": "别客气，很高兴能帮到你。",
  "py": "Bié kèqi, hěn gāoxìng néng bāng dào nǐ."
 },
 {
  "vi": "Xe điện tốc độ nhanh, giá không cao, sạc điện cũng rất tiện.",
  "zh": "电动车速度快，价格不高，充电也很方便。",
  "py": "Diàndòngchē sùdù kuài, jiàgé bù gāo, chōngdiàn yě hěn fāngbiàn."
 },
 {
  "vi": "Có ga tàu điện ngầm còn cung cấp dịch vụ cho mượn ô miễn phí.",
  "zh": "有的地铁站还提供免费借雨伞的服务。",
  "py": "Yǒude dìtiězhàn hái tígōng miǎnfèi jiè yǔsǎn de fúwù."
 },
 {
  "vi": "Những dịch vụ nho nhỏ này khiến tâm trạng mọi người càng vui vẻ hơn.",
  "zh": "这些小小的服务让大家的心情变得更加愉快。",
  "py": "Zhèxiē xiǎoxiǎo de fúwù ràng dàjiā de xīnqíng biànde gèngjiā yúkuài."
 }
];
var sgkData = [
 {
  "kieu": "kho",
  "de": "选词填空（一）· 综合练习",
  "vn": "Chọn từ thích hợp điền vào chỗ trống (Bài tập tổng hợp, sách trang 43).",
  "dapSgk": true,
  "tu": [
   "停",
   "算",
   "剩",
   "联系",
   "之间"
  ],
  "cau": [
   {
    "s": "还＿＿不少菜，我们带回家吃吧。",
    "dap": [
     "剩"
    ]
   },
   {
    "s": "外面的雨＿＿了，咱们出去走走吧。",
    "dap": [
     "停"
    ]
   },
   {
    "s": "同学＿＿应该互相帮助、互相学习。",
    "dap": [
     "之间"
    ]
   },
   {
    "s": "今天我再准备一下材料，明天跟您＿＿。",
    "dap": [
     "联系"
    ]
   },
   {
    "s": "奶奶说她每天打扫房间，就＿＿做运动了。",
    "dap": [
     "算"
    ]
   }
  ]
 },
 {
  "kieu": "kho",
  "de": "选词填空（二）· 综合练习",
  "vn": "Chọn từ thích hợp điền vào chỗ trống (hội thoại, sách trang 43–44).",
  "dapSgk": true,
  "tu": [
   "更加",
   "距离",
   "顺便",
   "流行",
   "力气"
  ],
  "cau": [
   {
    "s": "A：你要去超市吗？能不能＿＿帮我买个面包？　B：没问题。",
    "dap": [
     "顺便"
    ]
   },
   {
    "s": "A：听说你最近一直坚持锻炼。　B：是的，我希望自己的身体＿＿健康。",
    "dap": [
     "更加"
    ]
   },
   {
    "s": "A：我发现街上很多人都穿绿色的衣服。　B：是啊，看来今年比较＿＿绿色。",
    "dap": [
     "流行"
    ]
   },
   {
    "s": "A：咱们先休息休息吧，我一点儿＿＿也没有了。　B：好，你先坐一会儿，我去给你买瓶饮料。",
    "dap": [
     "力气"
    ]
   },
   {
    "s": "A：你每天走路上下班吗？　B：对，我家到公司的＿＿不算远，走路大概半个小时。",
    "dap": [
     "距离"
    ]
   }
  ]
 },
 {
  "kieu": "kho",
  "de": "选择合适的内容完成短文",
  "vn": "Chọn nội dung thích hợp (A–D) hoàn thành đoạn văn (sách trang 44).",
  "dapSgk": true,
  "tu": [
   "扫不了码",
   "一天的心情都非常愉快",
   "小王非常感谢她",
   "没来得及吃早饭就去上班了"
  ],
  "cau": [
   {
    "s": "小王今天早上起晚了，＿＿。她坐地铁到了公司附近，想在地铁站买点儿吃的。小王选好早餐后，突然发现手机没电了，＿＿。她正要把吃的放回去，一位乘客看到了，问她需不需要帮忙。小王把事情告诉了她，她就给小王买了一份（fèn, suất）早餐。＿＿，一直向她说“谢谢”。小王因为这件事，＿＿。",
    "dap": [
     "没来得及吃早饭就去上班了",
     "扫不了码",
     "小王非常感谢她",
     "一天的心情都非常愉快"
    ]
   }
  ]
 },
 {
  "kieu": "gx",
  "de": "看图，用词语造句",
  "vn": "Nhìn tranh, đặt câu với từ cho sẵn (đáp án của sách chỉ là gợi ý — câu của em đúng ngữ pháp, hợp tranh là đạt).",
  "cau": [
   {
    "anh": "/images/hsk4v3/bai-4/bt-1.webp",
    "s": "",
    "tu": "重",
    "dap": "这个箱子太重了，他们两个人才能搬动。",
    "giai": "太 + 重 + 了; 才 nhấn mạnh phải hai người mới khiêng nổi (搬动 – bổ ngữ kết quả)."
   },
   {
    "anh": "/images/hsk4v3/bai-4/bt-2.webp",
    "s": "",
    "tu": "心情",
    "dap": "听音乐可以让人心情变好。",
    "giai": "Câu kiêm ngữ 让 + người + 心情变好 (HSK 3)."
   },
   {
    "anh": "/images/hsk4v3/bai-4/bt-3.webp",
    "s": "",
    "tu": "提",
    "dap": "她提着两个纸袋子。",
    "giai": "提 + 着 diễn tả trạng thái đang xách; 纸袋子 = túi giấy."
   }
  ]
 }
];
var writingData = {
 "kieu": "sgk",
 "soChu": 120,
 "tieuDe": "写作 — viết theo đề của sách (ít nhất 120 chữ)",
 "nhanDe": "写作",
 "huongDan": {
  "tieuDe": "Viết bài gửi tài khoản WeChat của trường (写作)",
  "gioiThieu": "Đề 写作 của sách HSK 4 (3.0) yêu cầu viết một bài ngắn (ít nhất 120 chữ) dựa trên kết quả cuộc khảo sát 调查 vừa làm trong lớp — giống phần 书写 của đề thi HSK 4 mới.",
  "buoc": [
   "Đọc kỹ đề: viết cho AI đọc (các bạn trong trường, đọc trên WeChat), viết để làm gì (giới thiệu chỗ ở, cách đi lại + kêu gọi “đi lại xanh”).",
   "Lấy số liệu từ bảng khảo sát: bao nhiêu bạn ở trong / ngoài trường, đi lại bằng gì, vì sao.",
   "Lập dàn ý theo 5 câu hỏi gợi ý: mỗi câu hỏi là một ý, viết 1–2 câu cho mỗi ý.",
   "Dùng từ mới và 4 điểm ngữ pháp của bài (khung “Từ, cấu trúc nên dùng”): 既……又……, 再说, 来得及, V不了… — đây là phần được chấm điểm từ vựng, ngữ pháp.",
   "Câu mở nêu chủ đề (kết quả khảo sát), câu kết là lời kêu gọi “绿色出行”; tự soát số chữ (≥ 120) và lỗi chữ Hán trước khi nộp."
  ]
 },
 "de": "学校微信公众号正以“绿色出行”为主题征稿。为了让更多同学了解大家的居住情况和日常出行方式，建议大家尽量“绿色出行”，请你根据上面调查的内容，写一篇短文给公众号投稿，不少于120字。",
 "prompt": "Tài khoản WeChat chính thức của trường đang nhận bài với chủ đề “Đi lại xanh”. Để nhiều bạn hiểu hơn về tình hình chỗ ở và cách đi lại hằng ngày của mọi người, đồng thời khuyến khích mọi người cố gắng “đi lại xanh”, hãy dựa vào nội dung cuộc khảo sát ở trên, viết một bài ngắn gửi cho tài khoản, không ít hơn 120 chữ.",
 "dan": [
  {
   "hoi": "班里的同学住在哪儿？（校内还是校外）",
   "goiY": "我们班一共有……个同学，……个住在校内，……个住在校外。"
  },
  {
   "hoi": "大家每天怎么来学校？",
   "goiY": "住在校内的同学往往……；住在校外的同学有的……，有的……"
  },
  {
   "hoi": "他们为什么选择这种出行方式？",
   "goiY": "骑自行车既……，又……；坐地铁……，再说……"
  },
  {
   "hoi": "什么是“绿色出行”？有什么好处？",
   "goiY": "走路、骑自行车、坐地铁……不仅能……，也能……"
  },
  {
   "hoi": "你对大家有什么建议？",
   "goiY": "要是距离不远，就……"
  }
 ],
 "tuNen": [
  "出行",
  "方式",
  "距离",
  "往往",
  "既",
  "电动车",
  "速度",
  "充电",
  "流行",
  "省",
  "力气",
  "乘客",
  "免费",
  "早餐",
  "心情",
  "更加",
  "愉快"
 ],
 "cauTruc": [
  {
   "ten": "……往往……",
   "nhan": "往往",
   "vd": "住在校内的同学往往走路或者骑自行车去上课。",
   "khi": "Nêu thói quen chung của một nhóm (kết quả khảo sát)."
  },
  {
   "ten": "既……，又 / 也……",
   "nhan": "既",
   "vd": "骑自行车既方便，又能锻炼身体。",
   "khi": "Nêu ưu điểm của một cách đi lại."
  },
  {
   "ten": "……，再说……",
   "nhan": "再说",
   "vd": "坐地铁不会堵车，再说地铁站里还能买到早餐。",
   "khi": "Bổ sung thêm lý do."
  },
  {
   "ten": "不仅……，也……",
   "nhan": "不仅",
   "vd": "绿色出行不仅能保护环境，也能让我们的心情更加愉快。",
   "khi": "Nói lợi ích của “đi lại xanh” (ôn Bài 3)."
  },
  {
   "ten": "要是……，就……",
   "nhan": "要是",
   "vd": "要是距离不远，大家就尽量走路或者骑自行车吧！",
   "khi": "Câu KẾT: lời kêu gọi (ôn Bài 1)."
  }
 ],
 "checklist": [
  "Đủ ít nhất 120 chữ Hán chưa?",
  "Đã nói đủ các ý: chỗ ở của các bạn, cách đi lại, lý do chọn, lợi ích của “đi lại xanh”, lời kêu gọi chưa?",
  "Đã dùng ít nhất 3 trong 4 điểm ngữ pháp của bài (V得了 / V不了、再说、既……又……、来得及 / 来不及) chưa?",
  "Đã dùng ít nhất 6 từ mới của bài chưa?",
  "Bài có câu mở và câu kết rõ ràng, phù hợp đăng trên tài khoản WeChat của trường chưa?"
 ],
 "model": {
  "zh": "我们班一共有十二个同学，其中八个住在学校里，四个住在校外。住在校内的同学往往走路或者骑自行车去上课，他们觉得这样既方便，又能锻炼身体。住在校外的同学有的坐地铁，有的骑电动车。坐地铁不会堵车，能省不少时间，再说地铁站里还能买到早餐，没来得及吃早饭也不用担心。骑电动车速度快，充电也很方便，不过下大雨的时候就骑不了了。我觉得，绿色出行不仅能保护环境，也能让我们的心情更加愉快。要是距离不远，大家就尽量走路或者骑自行车吧！",
  "py": "Wǒmen bān yígòng yǒu shí èr gè tóngxué, qízhōng bā gè zhù zài xuéxiào lǐ, sì gè zhù zài xiào wài. Zhù zài xiào nèi de tóngxué wǎngwǎng zǒulù huòzhě qí zìxíngchē qù shàngkè, tāmen juéde zhèyàng jì fāngbiàn, yòu néng duànliàn shēntǐ. Zhù zài xiào wài de tóngxué yǒude zuò dìtiě, yǒude qí diàndòngchē. Zuò dìtiě bú huì dǔchē, néng shěng bùshǎo shíjiān, zàishuō dìtiězhàn lǐ hái néng mǎidào zǎocān, méi láidejí chī zǎofàn yě búyòng dānxīn. Qí diàndòngchē sùdù kuài, chōngdiàn yě hěn fāngbiàn, búguò xià dàyǔ de shíhou jiù qí bu liǎo le. Wǒ juéde, lǜsè chūxíng bùjǐn néng bǎohù huánjìng, yě néng ràng wǒmen de xīnqíng gèngjiā yúkuài. Yàoshi jùlí bù yuǎn, dàjiā jiù jǐnliàng zǒulù huòzhě qí zìxíngchē ba!"
 }
};
