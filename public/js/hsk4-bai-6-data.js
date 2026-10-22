// ══════════════════════════════════════════
// DATA — HSK4 Bài 6: 一分钱一分货 (Tiền nào của nấy)
// Nguồn: HSK标准教程4上 (Giáo trình chuẩn HSK 4 — nhantriviet.com)
// ══════════════════════════════════════════
var vocabData = [
  {
    "n": 1,
    "zh": "果汁",
    "py": "guǒzhī",
    "pos": "Danh từ",
    "vn": "nước trái cây",
    "hv": "quả trấp",
    "em": "🧃",
    "lesson": 1,
    "explain": [
      "Nước ép từ hoa quả tươi."
    ],
    "usage": "Danh từ; thường đi với 买果汁, 喝果汁.",
    "collo": [
      "买果汁",
      "喝果汁",
      "一瓶果汁"
    ],
    "ex_zh": "昨天妻子让我陪她去超市买果汁。",
    "ex_py": "Zuótiān qīzi ràng wǒ péi tā qù chāoshì mǎi guǒzhī.",
    "ex_vn": "Hôm qua vợ bảo tôi đi cùng cô ấy ra siêu thị mua nước trái cây.",
    "exList": [
      {
        "zh": "昨天妻子让我陪她去超市买果汁。",
        "py": "Zuótiān qīzi ràng wǒ péi tā qù chāoshì mǎi guǒzhī.",
        "vn": "Hôm qua vợ bảo tôi đi cùng cô ấy ra siêu thị mua nước trái cây."
      },
      {
        "zh": "回家以后，我才发现，竟然忘了去商场的超市买果汁！",
        "py": "Huí jiā yǐhòu, wǒ cái fāxiàn, jìngrán wàngle qù shāngchǎng de chāoshì mǎi guǒzhī!",
        "vn": "Về nhà rồi, tôi mới phát hiện, không ngờ lại quên mất việc ra siêu thị ở trung tâm mua sắm mua nước trái cây!"
      },
      {
        "zh": "早上喝一杯果汁对身体很好。",
        "py": "Zǎoshang hē yì bēi guǒzhī duì shēntǐ hěn hǎo.",
        "vn": "Buổi sáng uống một ly nước trái cây rất tốt cho sức khỏe."
      }
    ],
    "hanzi": [
      {
        "c": "汁",
        "p": "zhī",
        "type": "左右结构 · Trái-phải",
        "st": 5,
        "ord": "氵 (thủy) trái → 十 phải",
        "rad": "氵 (thủy – nước)",
        "mean": "nước ép, chất lỏng",
        "tip": "Bộ nước 氵 + 十(biểu âm) → CHẤT LỎNG ép ra từ vật gì đó, kết hợp 果(quả) thành 果汁 = NƯỚC TRÁI CÂY.",
        "cf": "汗 (hàn – \"mồ hôi\", bộ 氵 + 干\")",
        "w": "果汁 / 汁水 / 豆汁"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Hôm qua vợ bảo tôi đi cùng cô ấy ra siêu thị mua nước trái cây, nhưng tôi lại quên mất điện thoại ở nhà.",
        "answer": "昨天妻子让我陪她去超市买果汁，但是我把手机忘在家里了。",
        "answerPy": "Zuótiān qīzi ràng wǒ péi tā qù chāoshì mǎi guǒzhī, dànshì wǒ bǎ shǒujī wàng zài jiā li le.",
        "note": "让……陪她去 — bảo … đi cùng.",
        "pair": "……，但是……"
      },
      {
        "promptLang": "vi",
        "prompt": "Đã chỉ mua chút đồ thế này thì làm gì mất nhiều thời gian đến vậy!",
        "answer": "既然只买这么点儿东西，就用不了那么长时间啊！",
        "answerPy": "Jìrán zhǐ mǎi zhème diǎnr dōngxi, jiù yòng bu liǎo nàme cháng shíjiān a!",
        "note": "V + 不了 — bổ ngữ khả năng phủ định: không thể, không hết.",
        "pair": "既然……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "买果汁",
        "py": "mǎi guǒzhī",
        "vn": "mua nước trái cây"
      },
      {
        "zh": "喝果汁",
        "py": "hē guǒzhī",
        "vn": "uống nước trái cây"
      },
      {
        "zh": "一瓶果汁",
        "py": "yì píng guǒzhī",
        "vn": "một chai nước trái cây"
      },
      {
        "zh": "苹果汁",
        "py": "píngguǒzhī",
        "vn": "nước táo"
      },
      {
        "zh": "新鲜果汁",
        "py": "xīnxiān guǒzhī",
        "vn": "nước ép tươi"
      }
    ],
    "patterns": [
      {
        "s": "một + 瓶 / 杯 + 果汁",
        "m": "Một chai / cốc nước trái cây"
      },
      {
        "s": "loại quả + 汁",
        "m": "苹果汁, 西瓜汁 — nước ép của quả nào"
      }
    ]
  },
  {
    "n": 2,
    "zh": "售货员",
    "py": "shòuhuòyuán",
    "pos": "Danh từ",
    "vn": "nhân viên bán hàng",
    "hv": "thụ hóa viên",
    "em": "🧑‍💼",
    "lesson": 1,
    "explain": [
      "Người làm công việc bán hàng tại cửa hàng/siêu thị."
    ],
    "usage": "Danh từ; thường đi với 售货员就……, 售货员说.",
    "collo": [
      "售货员就",
      "售货员介绍",
      "售货员说"
    ],
    "ex_zh": "一进门，售货员就热情地为我们介绍这、介绍那。",
    "ex_py": "Yí jìn mén, shòuhuòyuán jiù rèqíng de wèi wǒmen jièshào zhè, jièshào nà.",
    "ex_vn": "Vừa vào cửa, nhân viên bán hàng liền nhiệt tình giới thiệu cho chúng tôi cái này cái kia.",
    "exList": [
      {
        "zh": "一进门，售货员就热情地为我们介绍这、介绍那。",
        "py": "Yí jìn mén, shòuhuòyuán jiù rèqíng de wèi wǒmen jièshào zhè, jièshào nà.",
        "vn": "Vừa vào cửa, nhân viên bán hàng liền nhiệt tình giới thiệu cho chúng tôi cái này cái kia."
      },
      {
        "zh": "售货员就说：\"您穿这条裙子有点儿大。\"",
        "py": "Shòuhuòyuán jiù shuō: \"Nín chuān zhè tiáo qúnzi yǒudiǎnr dà.\"",
        "vn": "Nhân viên bán hàng liền nói: \"Chị mặc chiếc váy này hơi rộng.\""
      },
      {
        "zh": "售货员的服务态度非常好。",
        "py": "Shòuhuòyuán de fúwù tàidu fēicháng hǎo.",
        "vn": "Thái độ phục vụ của nhân viên bán hàng rất tốt."
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
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Chúng tôi vừa vào trung tâm mua sắm là nhân viên bán hàng liền nhiệt tình giới thiệu cái này cái kia.",
        "answer": "我们一去商场，售货员就热情地为我们介绍这、介绍那。",
        "answerPy": "Wǒmen yí qù shāngchǎng, shòuhuòyuán jiù rèqíng de wèi wǒmen jièshào zhè, jièshào nà.",
        "note": "为 + ai + V — làm gì cho ai; 地 đứng sau tính từ làm trạng ngữ.",
        "pair": "一……就……"
      },
      {
        "promptLang": "vi",
        "prompt": "Khi mua đồ tôi không những chỉ xem cái mình muốn mua, mà còn không muốn bị nhân viên làm phiền.",
        "answer": "买东西时我不但只看自己想买的，而且不希望被售货员打扰。",
        "answerPy": "Mǎi dōngxi shí wǒ búdàn zhǐ kàn zìjǐ xiǎng mǎi de, érqiě bù xīwàng bèi shòuhuòyuán dǎrǎo.",
        "note": "被 + ai + V — câu bị động, thường mang sắc thái không mong muốn.",
        "pair": "不但……而且……"
      }
    ],
    "colloFull": [
      {
        "zh": "售货员介绍",
        "py": "shòuhuòyuán jièshào",
        "vn": "nhân viên giới thiệu"
      },
      {
        "zh": "问售货员",
        "py": "wèn shòuhuòyuán",
        "vn": "hỏi nhân viên bán hàng"
      },
      {
        "zh": "热情的售货员",
        "py": "rèqíng de shòuhuòyuán",
        "vn": "nhân viên nhiệt tình"
      },
      {
        "zh": "当售货员",
        "py": "dāng shòuhuòyuán",
        "vn": "làm nhân viên bán hàng"
      },
      {
        "zh": "售货员说",
        "py": "shòuhuòyuán shuō",
        "vn": "nhân viên bán hàng nói"
      }
    ],
    "patterns": [
      {
        "s": "售 + 货 + 员",
        "m": "Người (员) bán (售) hàng (货) — ghép nghĩa dễ nhớ"
      },
      {
        "s": "问 / 麻烦 + 售货员",
        "m": "Hỏi / nhờ nhân viên bán hàng"
      }
    ]
  },
  {
    "n": 3,
    "zh": "袜子",
    "py": "wàzi",
    "pos": "Danh từ",
    "vn": "tất, vớ",
    "hv": "miệt tử",
    "em": "🧦",
    "lesson": 1,
    "explain": [
      "Đồ mặc bọc chân, đi bên trong giày."
    ],
    "usage": "Danh từ; thường đi với 两双袜子, 买袜子.",
    "collo": [
      "两双袜子",
      "买袜子",
      "一双袜子"
    ],
    "ex_zh": "她买了一条裤子、一件衬衫、两双袜子。",
    "ex_py": "Tā mǎile yì tiáo kùzi, yí jiàn chènshān, liǎng shuāng wàzi.",
    "ex_vn": "Cô ấy đã mua một cái quần, một cái áo sơ mi, hai đôi tất.",
    "exList": [
      {
        "zh": "她买了一条裤子、一件衬衫、两双袜子。",
        "py": "Tā mǎile yì tiáo kùzi, yí jiàn chènshān, liǎng shuāng wàzi.",
        "vn": "Cô ấy đã mua một cái quần, một cái áo sơ mi, hai đôi tất."
      },
      {
        "zh": "咱们已经买了三百八十多了，再买两双袜子就够了。",
        "py": "Zánmen yǐjīng mǎile sānbǎi bāshí duō le, zài mǎi liǎng shuāng wàzi jiù gòu le.",
        "vn": "Chúng ta đã mua hơn ba trăm tám mươi rồi, mua thêm hai đôi tất nữa là đủ."
      },
      {
        "zh": "这双袜子的颜色很好看。",
        "py": "Zhè shuāng wàzi de yánsè hěn hǎokàn.",
        "vn": "Màu của đôi tất này rất đẹp."
      }
    ],
    "hanzi": [
      {
        "c": "袜",
        "p": "wà",
        "type": "左右结构 · Trái-phải (giản thể)",
        "st": 5,
        "ord": "衤 (y) trái → 末 phải",
        "rad": "衤 (y – quần áo)",
        "mean": "tất, vớ",
        "tip": "Bộ quần áo 衤 (đồ mặc) + 末(biểu âm) → đồ mặc ở phần CUỐI cùng của chân, mở rộng thành TẤT, VỚ.",
        "cf": "抹 (mǒ – \"xoa, quẹt\", bộ 扌\")",
        "w": "袜子 / 一双袜子 / 长袜"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Cô ấy mua một cái quần, một cái áo sơ mi, hai đôi tất, sau đó chúng tôi vui vẻ về nhà.",
        "answer": "她买了一条裤子、一件衬衫、两双袜子，然后我们就高高兴兴地回家了。",
        "answerPy": "Tā mǎile yì tiáo kùzi, yí jiàn chènshān, liǎng shuāng wàzi, ránhòu wǒmen jiù gāogāoxìngxìng de huí jiā le.",
        "note": "然后……就……地 — sau đó liền … một cách….",
        "pair": "一……就……"
      },
      {
        "promptLang": "vi",
        "prompt": "Chỉ cần hôm nay mua đủ 400 tệ, mua thêm hai đôi tất nữa là đủ.",
        "answer": "只要今天购物满四百元，再买两双袜子就够了。",
        "answerPy": "Zhǐyào jīntiān gòuwù mǎn sìbǎi yuán, zài mǎi liǎng shuāng wàzi jiù gòu le.",
        "note": "满 + số tiền — mua đủ bao nhiêu; 双 là lượng từ cho vật đi đôi.",
        "pair": "只要……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "两双袜子",
        "py": "liǎng shuāng wàzi",
        "vn": "hai đôi tất"
      },
      {
        "zh": "买袜子",
        "py": "mǎi wàzi",
        "vn": "mua tất"
      },
      {
        "zh": "穿袜子",
        "py": "chuān wàzi",
        "vn": "đi tất"
      },
      {
        "zh": "一双袜子",
        "py": "yì shuāng wàzi",
        "vn": "một đôi tất"
      },
      {
        "zh": "袜子破了",
        "py": "wàzi pò le",
        "vn": "tất rách rồi"
      }
    ],
    "patterns": [
      {
        "s": "một + 双 + 袜子",
        "m": "Lượng từ 双 cho vật đi thành đôi"
      },
      {
        "s": "✗ 一个袜子 → ✓ 一双袜子",
        "m": "Tất, giày, đũa, mắt đều dùng 双"
      }
    ]
  },
  {
    "n": 4,
    "zh": "打扰",
    "py": "dǎrǎo",
    "pos": "Động từ",
    "vn": "quấy rầy, làm phiền",
    "hv": "đả nhiễu",
    "em": "🙅",
    "lesson": 1,
    "explain": [
      "Gây ảnh hưởng/phiền toái đến hoạt động của người khác."
    ],
    "usage": "Động từ, thường dùng bị động: 被……打扰, 不希望被打扰.",
    "collo": [
      "被打扰",
      "不希望被打扰",
      "打扰您了"
    ],
    "ex_zh": "不希望被别人打扰。",
    "ex_py": "Bù xīwàng bèi biéren dǎrǎo.",
    "ex_vn": "Không muốn bị người khác làm phiền.",
    "exList": [
      {
        "zh": "不希望被别人打扰。",
        "py": "Bù xīwàng bèi biéren dǎrǎo.",
        "vn": "Không muốn bị người khác làm phiền."
      },
      {
        "zh": "不好意思这么晚打扰您。",
        "py": "Bù hǎoyìsi zhème wǎn dǎrǎo nín.",
        "vn": "Xin lỗi vì đã làm phiền anh vào giờ này."
      },
      {
        "zh": "对不起，打扰你工作了。",
        "py": "Duìbuqǐ, dǎrǎo nǐ gōngzuò le.",
        "vn": "Xin lỗi, đã làm phiền công việc của bạn."
      }
    ],
    "hanzi": [
      {
        "c": "扰",
        "p": "rǎo",
        "type": "左右结构 · Trái-phải (giản thể)",
        "st": 6,
        "ord": "扌 (thủ) trái → 尤(vưu) phải",
        "rad": "扌 (thủ – tay)",
        "mean": "quấy nhiễu",
        "tip": "Bộ tay 扌 + 尤(biểu âm) → hành động dùng tay QUẤY ĐỘNG, kết hợp 打(đánh, gây ra) thành 打扰 = QUẤY RẦY, LÀM PHIỀN.",
        "cf": "扰 dễ nhầm với 忧 (yōu – \"lo lắng\", bộ 忄\")",
        "w": "打扰 / 骚扰 / 别打扰"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Khi mua đồ tôi không những thích tự xem tự chọn, mà còn không muốn bị người khác làm phiền.",
        "answer": "买东西时我不但喜欢自己看、自己选，而且不希望被别人打扰。",
        "answerPy": "Mǎi dōngxi shí wǒ búdàn xǐhuan zìjǐ kàn, zìjǐ xuǎn, érqiě bù xīwàng bèi biéren dǎrǎo.",
        "note": "自己 + V — tự mình làm gì.",
        "pair": "不但……而且……"
      },
      {
        "promptLang": "vi",
        "prompt": "Nếu không làm phiền bạn thì tôi hỏi một chút, được không?",
        "answer": "如果不打扰你的话，我就问一下，好吗？",
        "answerPy": "Rúguǒ bù dǎrǎo nǐ dehuà, wǒ jiù wèn yíxià, hǎo ma?",
        "note": "……的话 hay đi cùng 如果 / 要是 để nhấn ý giả thiết.",
        "pair": "如果……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "打扰您了",
        "py": "dǎrǎo nín le",
        "vn": "làm phiền anh/chị rồi"
      },
      {
        "zh": "被别人打扰",
        "py": "bèi biérén dǎrǎo",
        "vn": "bị người khác làm phiền"
      },
      {
        "zh": "不希望被打扰",
        "py": "bù xīwàng bèi dǎrǎo",
        "vn": "không muốn bị làm phiền"
      },
      {
        "zh": "打扰一下",
        "py": "dǎrǎo yíxià",
        "vn": "làm phiền một chút"
      },
      {
        "zh": "不好意思打扰你",
        "py": "bù hǎoyìsi dǎrǎo nǐ",
        "vn": "ngại làm phiền bạn"
      }
    ],
    "patterns": [
      {
        "s": "打扰 + ai + 一下",
        "m": "Làm phiền ai một chút (mở đầu lời hỏi)"
      },
      {
        "s": "被 + ai + 打扰",
        "m": "Bị ai đó làm phiền — câu bị động"
      }
    ]
  },
  {
    "n": 5,
    "zh": "竟然",
    "py": "jìngrán",
    "pos": "Phó từ",
    "vn": "không ngờ, mà vậy",
    "hv": "cánh nhiên",
    "em": "😲",
    "lesson": 1,
    "explain": [
      "Diễn tả sự việc nằm ngoài dự đoán, gây ngạc nhiên."
    ],
    "usage": "Phó từ, đứng trước động từ/tính từ: 竟然忘了, 竟然没听过.",
    "collo": [
      "竟然忘了",
      "竟然没听过",
      "竟然这么多"
    ],
    "ex_zh": "回家以后，我才发现，竟然忘了去商场的超市买果汁！",
    "ex_py": "Huí jiā yǐhòu, wǒ cái fāxiàn, jìngrán wàngle qù shāngchǎng de chāoshì mǎi guǒzhī!",
    "ex_vn": "Về nhà rồi, tôi mới phát hiện, không ngờ lại quên mất việc ra siêu thị ở trung tâm mua sắm mua nước trái cây!",
    "exList": [
      {
        "zh": "回家以后，我才发现，竟然忘了去商场的超市买果汁！",
        "py": "Huí jiā yǐhòu, wǒ cái fāxiàn, jìngrán wàngle qù shāngchǎng de chāoshì mǎi guǒzhī!",
        "vn": "Về nhà rồi, tôi mới phát hiện, không ngờ lại quên mất việc ra siêu thị ở trung tâm mua sắm mua nước trái cây!"
      },
      {
        "zh": "这个歌特别好听，最近很流行，你竟然没听过？",
        "py": "Zhège gē tèbié hǎotīng, zuìjìn hěn liúxíng, nǐ jìngrán méi tīngguo?",
        "vn": "Bài hát này rất hay, gần đây rất thịnh hành, bạn lại chưa từng nghe qua sao?"
      },
      {
        "zh": "来这家饭馆吃饭的人竟然这么多，排队都排到门口外边去了！",
        "py": "Lái zhè jiā fànguǎn chīfàn de rén jìngrán zhème duō, páiduì dōu pái dào ménkǒu wàibian qù le!",
        "vn": "Người đến quán ăn này ăn nhiều đến không ngờ, xếp hàng đã xếp ra tận ngoài cửa rồi!"
      }
    ],
    "hanzi": [
      {
        "c": "竟",
        "p": "jìng",
        "type": "上下结构 · Trên-dưới",
        "st": 6,
        "ord": "立 trên → 兄 dưới",
        "rad": "立 (lập)",
        "mean": "rốt cuộc, lại",
        "tip": "Chữ mang nghĩa RỐT CUỘC, KẾT CỤC, kết hợp 然(như vậy) thành 竟然 = KHÔNG NGỜ LẠI (như vậy).",
        "cf": "竞 (jìng – \"cạnh tranh\", nét khác ở phần dưới)",
        "w": "竟然 / 究竟 / 毕竟"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tuy tiếng Thượng Hải và tiếng Bắc Kinh gần như hoàn toàn khác nhau, nhưng bạn lại nghe hiểu được cơ à?",
        "answer": "虽然上海话和北京话几乎完全不同，但是你竟然听得懂？",
        "answerPy": "Suīrán Shànghǎihuà hé Běijīnghuà jīhū wánquán bùtóng, dànshì nǐ jìngrán tīng de dǒng?",
        "note": "听得懂 — bổ ngữ khả năng khẳng định, phủ định là 听不懂.",
        "pair": "虽然……但是……"
      },
      {
        "promptLang": "vi",
        "prompt": "Mặc dù đường xa như vậy, bạn vẫn đạp xe đến thật à?",
        "answer": "尽管路这么远，你竟然还是骑自行车来了？",
        "answerPy": "Jǐnguǎn lù zhème yuǎn, nǐ jìngrán háishi qí zìxíngchē lái le?",
        "note": "竟然 nêu điều nằm ngoài dự đoán, hơi ngạc nhiên.",
        "pair": "尽管……还是……"
      }
    ],
    "colloFull": [
      {
        "zh": "竟然忘了",
        "py": "jìngrán wàng le",
        "vn": "không ngờ lại quên"
      },
      {
        "zh": "竟然没听过",
        "py": "jìngrán méi tīng guo",
        "vn": "không ngờ chưa từng nghe"
      },
      {
        "zh": "竟然这么多",
        "py": "jìngrán zhème duō",
        "vn": "không ngờ nhiều thế"
      },
      {
        "zh": "竟然听得懂",
        "py": "jìngrán tīng de dǒng",
        "vn": "không ngờ lại nghe hiểu"
      },
      {
        "zh": "竟然是他",
        "py": "jìngrán shì tā",
        "vn": "hóa ra lại là anh ta"
      }
    ],
    "patterns": [
      {
        "s": "Sub + 竟然 + V",
        "m": "Ai đó lại … (ngoài dự đoán, hơi bất ngờ)"
      },
      {
        "s": "✗ 竟然他来了 → ✓ 他竟然来了",
        "m": "竟然 đứng SAU chủ ngữ"
      }
    ]
  },
  {
    "n": 6,
    "zh": "西红柿",
    "py": "xīhóngshì",
    "pos": "Danh từ",
    "vn": "cà chua",
    "hv": "tây hồng thị",
    "em": "🍅",
    "lesson": 2,
    "explain": [
      "Loại quả màu đỏ, dùng làm rau ăn, giàu vitamin."
    ],
    "usage": "Danh từ; thường đi với 买西红柿, 西红柿新鲜.",
    "collo": [
      "买西红柿",
      "西红柿新鲜",
      "两斤西红柿"
    ],
    "ex_zh": "西红柿新鲜吗？怎么卖？",
    "ex_py": "Xīhóngshì xīnxiān ma? Zěnme mài?",
    "ex_vn": "Cà chua có tươi không? Bán thế nào?",
    "exList": [
      {
        "zh": "西红柿新鲜吗？怎么卖？",
        "py": "Xīhóngshì xīnxiān ma? Zěnme mài?",
        "vn": "Cà chua có tươi không? Bán thế nào?"
      },
      {
        "zh": "每天吃一两个这种新鲜的西红柿，对皮肤有好处。",
        "py": "Měitiān chī yì-liǎng ge zhè zhǒng xīnxiān de xīhóngshì, duì pífū yǒu hǎochù.",
        "vn": "Mỗi ngày ăn một hai quả cà chua tươi loại này, có lợi cho da."
      },
      {
        "zh": "给您西红柿，一共两斤，十四块。",
        "py": "Gěi nín xīhóngshì, yígòng liǎng jīn, shísì kuài.",
        "vn": "Cà chua của chị đây, tổng cộng hai cân, mười bốn tệ."
      }
    ],
    "hanzi": [
      {
        "c": "柿",
        "p": "shì",
        "type": "左右结构 · Trái-phải",
        "st": 9,
        "ord": "木 (mộc) trái → 市 (thị) phải",
        "rad": "木 (mộc – cây)",
        "mean": "quả hồng",
        "tip": "Bộ cây 木 + 市(biểu âm) → tên một loại QUẢ (quả hồng); 西红柿 (cà chua đỏ đến từ phương Tây) mượn hình dáng giống quả hồng để đặt tên.",
        "cf": "柿 dễ nhầm với 柿 chỉ dùng trong từ này và 柿子",
        "w": "西红柿 / 柿子"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Nếu cà chua này tươi thì tôi mua hai cân, bao nhiêu tiền một cân vậy?",
        "answer": "如果这西红柿新鲜，我就买两斤，多少钱一斤？",
        "answerPy": "Rúguǒ zhè xīhóngshì xīnxiān, wǒ jiù mǎi liǎng jīn, duōshao qián yì jīn?",
        "note": "斤 = 500 gam, đơn vị cân quen thuộc ở Trung Quốc.",
        "pair": "如果……就……"
      },
      {
        "promptLang": "vi",
        "prompt": "Chỉ cần mỗi ngày ăn một hai quả cà chua tươi là có lợi cho da.",
        "answer": "只要每天吃一两个新鲜的西红柿，就对皮肤有好处。",
        "answerPy": "Zhǐyào měitiān chī yì-liǎng ge xīnxiān de xīhóngshì, jiù duì pífū yǒu hǎochù.",
        "note": "一两个 — khoảng một hai cái, hai số liền nhau chỉ ước lượng.",
        "pair": "只要……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "买西红柿",
        "py": "mǎi xīhóngshì",
        "vn": "mua cà chua"
      },
      {
        "zh": "西红柿新鲜",
        "py": "xīhóngshì xīnxiān",
        "vn": "cà chua thì tươi (làm vị ngữ)"
      },
      {
        "zh": "两斤西红柿",
        "py": "liǎng jīn xīhóngshì",
        "vn": "hai cân cà chua"
      },
      {
        "zh": "西红柿炒鸡蛋",
        "py": "xīhóngshì chǎo jīdàn",
        "vn": "trứng xào cà chua"
      },
      {
        "zh": "新鲜的西红柿",
        "py": "xīnxiān de xīhóngshì",
        "vn": "cà chua tươi (làm định ngữ)"
      }
    ],
    "patterns": [
      {
        "s": "số + 斤 + 西红柿",
        "m": "Mấy cân cà chua — 斤 = 500g"
      },
      {
        "s": "西红柿 + 新鲜 / 不新鲜",
        "m": "Cà chua tươi / không tươi"
      }
    ]
  },
  {
    "n": 7,
    "zh": "百分之",
    "py": "bǎifēnzhī",
    "pos": "Danh từ",
    "vn": "phần trăm",
    "hv": "bách phân chi",
    "em": "💯",
    "lesson": 2,
    "explain": [
      "Cách diễn đạt tỷ lệ theo phần trăm (%)."
    ],
    "usage": "百分之 + số: 百分之百 (100%), 百分之七十五 (75%).",
    "collo": [
      "百分之百",
      "百分之七十五",
      "百分之六十四"
    ],
    "ex_zh": "保证百分之百新鲜。",
    "ex_py": "Bǎozhèng bǎi fēn zhī bǎi xīnxiān.",
    "ex_vn": "Cam đoan tươi 100%.",
    "exList": [
      {
        "zh": "保证百分之百新鲜。",
        "py": "Bǎozhèng bǎi fēn zhī bǎi xīnxiān.",
        "vn": "Cam đoan tươi 100%."
      },
      {
        "zh": "调查发现：购买我们电脑的人中，有75%是因为受到我们广告的影响。",
        "py": "Diàochá fāxiàn: gòumǎi wǒmen diànnǎo de rén zhōng, yǒu bǎifēnzhī qīshíwǔ shì yīnwèi shòudào wǒmen guǎnggào de yǐngxiǎng.",
        "vn": "Điều tra phát hiện: trong số người mua máy tính của chúng tôi, có 75% là do chịu ảnh hưởng từ quảng cáo của chúng tôi."
      },
      {
        "zh": "我们调查的近七千名上班族中，有百分之六十四的人经常加班。",
        "py": "Wǒmen diàochá de jìn qīqiān míng shàngbānzú zhōng, yǒu bǎifēnzhī liùshísì de rén jīngcháng jiābān.",
        "vn": "Trong gần bảy nghìn nhân viên văn phòng mà chúng tôi điều tra, có 64% người thường xuyên tăng ca."
      }
    ],
    "hanzi": [
      {
        "c": "之",
        "p": "zhī",
        "type": "独体字 · Chữ đơn",
        "st": 3,
        "ord": "nét liền",
        "rad": "丶 (điểm)",
        "mean": "trợ từ (của)",
        "tip": "之 là trợ từ văn viết cổ, tương đương 的; 百分之 = \"của một trăm phần\" → mở rộng thành cách nói PHẦN TRĂM.",
        "cf": "乏 (fá – \"thiếu thốn\", có thêm nét)",
        "w": "百分之 / 之一 / 总之"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Chúng tôi không những cam đoan hàng tươi 100%, mà không ngon còn được trả lại, chị cứ yên tâm mua.",
        "answer": "我们不但保证质量百分之百新鲜，而且不好可以退，您放心买吧。",
        "answerPy": "Wǒmen búdàn bǎozhèng zhìliàng bǎifēnzhī bǎi xīnxiān, érqiě bù hǎo kěyǐ tuì, nín fàngxīn mǎi ba.",
        "note": "保证 là từ bài 4; 百分之百 = hoàn toàn.",
        "pair": "不但……而且……"
      },
      {
        "promptLang": "vi",
        "prompt": "Trong số khách hàng chúng tôi khảo sát, tuy có 60% thấy giá hợp lý, nhưng vẫn còn 40% thấy quá đắt.",
        "answer": "我们调查的顾客中，虽然有百分之六十的人觉得价格合理，但是还有百分之四十觉得太贵。",
        "answerPy": "Wǒmen diàochá de gùkè zhōng, suīrán yǒu bǎifēnzhī liùshí de rén juéde jiàgé hélǐ, dànshì hái yǒu bǎifēnzhī sìshí juéde tài guì.",
        "note": "调查 là từ bài 4, 顾客 là từ bài 3 — ôn lại cùng lúc.",
        "pair": "虽然……但是……"
      }
    ],
    "colloFull": [
      {
        "zh": "百分之百",
        "py": "bǎifēnzhī bǎi",
        "vn": "một trăm phần trăm"
      },
      {
        "zh": "百分之六十",
        "py": "bǎifēnzhī liùshí",
        "vn": "sáu mươi phần trăm"
      },
      {
        "zh": "百分之七十五",
        "py": "bǎifēnzhī qīshí wǔ",
        "vn": "bảy mươi lăm phần trăm"
      },
      {
        "zh": "百分之几",
        "py": "bǎifēnzhī jǐ",
        "vn": "bao nhiêu phần trăm"
      },
      {
        "zh": "百分之十的人",
        "py": "bǎifēnzhī shí de rén",
        "vn": "10% số người"
      }
    ],
    "patterns": [
      {
        "s": "百分之 + số",
        "m": "Phần trăm — số đứng SAU, ngược với tiếng Việt"
      },
      {
        "s": "✗ 六十百分之 → ✓ 百分之六十",
        "m": "Luôn đọc \"trăm phần của…\" trước"
      }
    ]
  },
  {
    "n": 8,
    "zh": "倍",
    "py": "bèi",
    "pos": "Lượng từ",
    "vn": "lần (bội số)",
    "hv": "bội",
    "em": "✖️",
    "lesson": 2,
    "explain": [
      "Lượng từ chỉ số lần tăng gấp, thường không đi kèm danh từ phía sau."
    ],
    "usage": "Lượng từ độc lập: 是……的两倍, 提高了一倍.",
    "collo": [
      "两倍",
      "三倍",
      "提高了一倍"
    ],
    "ex_zh": "今天的价格是昨天的两倍。",
    "ex_py": "Jīntiān de jiàgé shì zuótiān de liǎng bèi.",
    "ex_vn": "Giá hôm nay gấp đôi giá hôm qua.",
    "exList": [
      {
        "zh": "今天的价格是昨天的两倍。",
        "py": "Jīntiān de jiàgé shì zuótiān de liǎng bèi.",
        "vn": "Giá hôm nay gấp đôi giá hôm qua."
      },
      {
        "zh": "二的五倍是十。",
        "py": "Èr de wǔ bèi shì shí.",
        "vn": "Năm lần hai là mười."
      },
      {
        "zh": "我的工资是每月5000块，他的工资是我的两倍。",
        "py": "Wǒ de gōngzī shì měi yuè wǔqiān kuài, tā de gōngzī shì wǒ de liǎng bèi.",
        "vn": "Lương của tôi mỗi tháng 5000 tệ, lương của anh ấy gấp đôi tôi."
      }
    ],
    "hanzi": [
      {
        "c": "倍",
        "p": "bèi",
        "type": "左右结构 · Trái-phải",
        "st": 10,
        "ord": "亻 (nhân) trái → 咅 phải",
        "rad": "亻 (nhân – người)",
        "mean": "gấp, lần",
        "tip": "Bộ người 亻 + 咅(biểu âm) → mở rộng thành GẤP ĐÔI, LẦN (bội số), thường đứng độc lập không kèm danh từ phía sau.",
        "cf": "倍 dễ nhầm với 培 (péi – \"bồi dưỡng\", bộ 土\")",
        "w": "两倍 / 加倍 / 事半功倍"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "200 không phải gấp ba lần 100, mà là gấp hai lần.",
        "answer": "200不是100的三倍，而是两倍。",
        "answerPy": "Èrbǎi bú shì yìbǎi de sān bèi, ér shì liǎng bèi.",
        "note": "A 是 B 的 + số + 倍 — chỗ học sinh Việt hay nhầm 一倍 với 两倍.",
        "pair": "不是……而是……"
      },
      {
        "promptLang": "vi",
        "prompt": "Tôi cứ tưởng vẫn ba tệ rưỡi một cân như hôm qua, ai ngờ giá hôm nay lại gấp đôi hôm qua.",
        "answer": "我本来以为跟昨天一样是三块五一斤，没想到今天的价格竟然是昨天的两倍。",
        "answerPy": "Wǒ běnlái yǐwéi gēn zuótiān yíyàng shì sān kuài wǔ yì jīn, méi xiǎngdào jīntiān de jiàgé jìngrán shì zuótiān de liǎng bèi.",
        "note": "以为 là nghĩ SAI — vế sau bắt buộc trái với điều đã nghĩ.",
        "pair": "以为……没想到……"
      }
    ],
    "colloFull": [
      {
        "zh": "两倍",
        "py": "liǎng bèi",
        "vn": "gấp hai lần"
      },
      {
        "zh": "三倍",
        "py": "sān bèi",
        "vn": "gấp ba lần"
      },
      {
        "zh": "提高了一倍",
        "py": "tí gāo le yí bèi",
        "vn": "tăng lên gấp đôi"
      },
      {
        "zh": "是……的两倍",
        "py": "shì de liǎng bèi",
        "vn": "gấp hai lần…"
      },
      {
        "zh": "多一倍",
        "py": "duō yí bèi",
        "vn": "nhiều gấp đôi"
      }
    ],
    "patterns": [
      {
        "s": "A 是 B 的 + số + 倍",
        "m": "A gấp mấy lần B"
      },
      {
        "s": "✗ 200是100的一倍 → ✓ 两倍",
        "m": "200 so với 100 là 两倍, không phải 一倍"
      }
    ]
  },
  {
    "n": 9,
    "zh": "皮肤",
    "py": "pífū",
    "pos": "Danh từ",
    "vn": "da",
    "hv": "bì phu",
    "em": "🧴",
    "lesson": 2,
    "explain": [
      "Lớp bao phủ bên ngoài cơ thể người."
    ],
    "usage": "Danh từ; thường đi với 对皮肤有好处, 皮肤好.",
    "collo": [
      "对皮肤有好处",
      "皮肤好",
      "皮肤白"
    ],
    "ex_zh": "每天吃一两个这种新鲜的西红柿，对皮肤有好处。",
    "ex_py": "Měitiān chī yì-liǎng ge zhè zhǒng xīnxiān de xīhóngshì, duì pífū yǒu hǎochù.",
    "ex_vn": "Mỗi ngày ăn một hai quả cà chua tươi loại này, có lợi cho da.",
    "exList": [
      {
        "zh": "每天吃一两个这种新鲜的西红柿，对皮肤有好处。",
        "py": "Měitiān chī yì-liǎng ge zhè zhǒng xīnxiān de xīhóngshì, duì pífū yǒu hǎochù.",
        "vn": "Mỗi ngày ăn một hai quả cà chua tươi loại này, có lợi cho da."
      },
      {
        "zh": "这种水不仅很好喝，用它来洗脸对皮肤也很有好处。",
        "py": "Zhè zhǒng shuǐ bùjǐn hěn hǎo hē, yòng tā lái xǐ liǎn duì pífū yě hěn yǒu hǎochù.",
        "vn": "Loại nước này không chỉ ngon để uống, dùng nó để rửa mặt cũng rất có lợi cho da."
      },
      {
        "zh": "她的皮肤特别好，看起来很年轻。",
        "py": "Tā de pífū tèbié hǎo, kàn qǐlai hěn niánqīng.",
        "vn": "Da của cô ấy đặc biệt tốt, trông rất trẻ."
      }
    ],
    "hanzi": [
      {
        "c": "肤",
        "p": "fū",
        "type": "左右结构 · Trái-phải (giản thể)",
        "st": 8,
        "ord": "月 (nhục) trái → 夫 (phu) phải",
        "rad": "月 (nhục – thịt)",
        "mean": "da",
        "tip": "Bộ thịt 月 (liên quan đến cơ thể) + 夫(biểu âm) → lớp ngoài của cơ thể, kết hợp 皮(da, vỏ) thành 皮肤 = DA.",
        "cf": "扶 (fú – \"đỡ, dìu\", bộ 扌\")",
        "w": "皮肤 / 皮肤病 / 表皮"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Ăn loại cà chua tươi này mỗi ngày không những rất tốt cho da, mà còn tốt cho cơ thể.",
        "answer": "每天吃这种新鲜的西红柿，不但对皮肤很有好处，而且对身体也好。",
        "answerPy": "Měitiān chī zhè zhǒng xīnxiān de xīhóngshì, búdàn duì pífū hěn yǒu hǎochù, érqiě duì shēntǐ yě hǎo.",
        "note": "对 + N + 有好处 — kết hợp cố định.",
        "pair": "不但……而且……"
      },
      {
        "promptLang": "vi",
        "prompt": "Vì bây giờ trời lạnh, nên phải chú ý bảo vệ da.",
        "answer": "因为现在天气冷，所以要注意保护皮肤。",
        "answerPy": "Yīnwèi xiànzài tiānqì lěng, suǒyǐ yào zhùyì bǎohù pífū.",
        "note": "注意 + V — chú ý làm gì.",
        "pair": "因为……所以……"
      }
    ],
    "colloFull": [
      {
        "zh": "对皮肤有好处",
        "py": "duì pífū yǒu hǎochù",
        "vn": "có lợi cho da"
      },
      {
        "zh": "皮肤好",
        "py": "pífū hǎo",
        "vn": "da đẹp"
      },
      {
        "zh": "皮肤白",
        "py": "pífū bái",
        "vn": "da trắng"
      },
      {
        "zh": "保护皮肤",
        "py": "bǎohù pífū",
        "vn": "bảo vệ da"
      },
      {
        "zh": "皮肤很干",
        "py": "pífū hěn gàn",
        "vn": "da rất khô"
      }
    ],
    "patterns": [
      {
        "s": "对 + 皮肤 + 有好处",
        "m": "Có lợi cho da"
      },
      {
        "s": "保护 + 皮肤",
        "m": "Bảo vệ làn da"
      }
    ]
  },
  {
    "n": 10,
    "zh": "好处",
    "py": "hǎochù",
    "pos": "Danh từ",
    "vn": "lợi ích, điều tốt",
    "hv": "hảo xứ",
    "em": "👍",
    "lesson": 2,
    "explain": [
      "Điều có lợi, mang lại kết quả tốt."
    ],
    "usage": "Danh từ; thường đi với 对……有好处.",
    "collo": [
      "对皮肤有好处",
      "有好处",
      "没有好处"
    ],
    "ex_zh": "每天吃一两个这种新鲜的西红柿，对皮肤有好处。",
    "ex_py": "Měitiān chī yì-liǎng ge zhè zhǒng xīnxiān de xīhóngshì, duì pífū yǒu hǎochù.",
    "ex_vn": "Mỗi ngày ăn một hai quả cà chua tươi loại này, có lợi cho da.",
    "exList": [
      {
        "zh": "每天吃一两个这种新鲜的西红柿，对皮肤有好处。",
        "py": "Měitiān chī yì-liǎng ge zhè zhǒng xīnxiān de xīhóngshì, duì pífū yǒu hǎochù.",
        "vn": "Mỗi ngày ăn một hai quả cà chua tươi loại này, có lợi cho da."
      },
      {
        "zh": "每天喝一点儿葡萄酒，对身体是有好处的。",
        "py": "Měitiān hē yìdiǎnr pútaojiǔ, duì shēntǐ shì yǒu hǎochù de.",
        "vn": "Mỗi ngày uống một chút rượu vang, có lợi cho sức khỏe."
      },
      {
        "zh": "多运动对健康有很多好处。",
        "py": "Duō yùndòng duì jiànkāng yǒu hěn duō hǎochù.",
        "vn": "Vận động nhiều có rất nhiều lợi ích cho sức khỏe."
      }
    ],
    "hanzi": [
      {
        "c": "处",
        "p": "chù",
        "type": "独体字 · Chữ đơn (giản thể)",
        "st": 5,
        "ord": "夂 trên → 卜 dưới",
        "rad": "夊 (biến thể)",
        "mean": "chỗ, nơi",
        "tip": "Chữ mang nghĩa NƠI CHỐN, mở rộng thành PHƯƠNG DIỆN/ĐIỂM (tốt), kết hợp 好(tốt) thành 好处 = LỢI ÍCH, ĐIỂM TỐT.",
        "cf": "处 khi đọc \"chǔ\" nghĩa là XỬ LÝ (处理)",
        "w": "好处 / 到处 / 处理"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Loại nước này không chỉ ngon để uống, dùng nó để rửa mặt cũng có lợi cho da.",
        "answer": "这种水不仅很好喝，用它来洗脸对皮肤也有好处。",
        "answerPy": "Zhè zhǒng shuǐ bùjǐn hěn hǎo hē, yòng tā lái xǐ liǎn duì pífū yě yǒu hǎochù.",
        "note": "对……有好处 kết hợp 皮肤, ôn lại từ vựng của bài.",
        "pair": "不仅……也……"
      },
      {
        "promptLang": "vi",
        "prompt": "Tích lũy kinh nghiệm làm việc không những có lợi cho hiện tại, mà lợi ích cho tương lai còn nhiều hơn.",
        "answer": "积累工作经验不但对现在有好处，而且对未来的好处更多。",
        "answerPy": "Jīlěi gōngzuò jīngyàn búdàn duì xiànzài yǒu hǎochù, érqiě duì wèilái de hǎochù gèng duō.",
        "note": "积累经验 là từ bài 4 — quay lại ở ngữ cảnh mới.",
        "pair": "不但……而且……"
      }
    ],
    "colloFull": [
      {
        "zh": "有好处",
        "py": "yǒu hǎochù",
        "vn": "có lợi ích"
      },
      {
        "zh": "没有好处",
        "py": "méiyǒu hǎochù",
        "vn": "không có lợi"
      },
      {
        "zh": "对身体有好处",
        "py": "duì shēntǐ yǒu hǎochù",
        "vn": "có lợi cho sức khỏe"
      },
      {
        "zh": "很多好处",
        "py": "hěn duō hǎochù",
        "vn": "rất nhiều cái lợi"
      },
      {
        "zh": "好处和坏处",
        "py": "hǎochù hé huàichù",
        "vn": "lợi và hại"
      }
    ],
    "patterns": [
      {
        "s": "对 + N + 有 / 没有好处",
        "m": "Có / không có lợi cho cái gì"
      },
      {
        "s": "好处 ↔ 坏处",
        "m": "Cặp từ trái nghĩa"
      }
    ]
  },
  {
    "n": 11,
    "zh": "尝",
    "py": "cháng",
    "pos": "Động từ",
    "vn": "nếm thử, thưởng thức",
    "hv": "thường",
    "em": "😋",
    "lesson": 2,
    "explain": [
      "Ăn/uống một lượng nhỏ để cảm nhận vị."
    ],
    "usage": "Động từ, thường lặp lại: 尝尝, 先买几个尝尝.",
    "collo": [
      "尝尝",
      "先买几个尝尝",
      "尝一下"
    ],
    "ex_zh": "好，那我先买几个尝尝。",
    "ex_py": "Hǎo, nà wǒ xiān mǎi jǐ ge chángchang.",
    "ex_vn": "Được, vậy tôi mua vài quả nếm thử trước đã.",
    "exList": [
      {
        "zh": "好，那我先买几个尝尝。",
        "py": "Hǎo, nà wǒ xiān mǎi jǐ ge chángchang.",
        "vn": "Được, vậy tôi mua vài quả nếm thử trước đã."
      },
      {
        "zh": "你尝了吗？这次蛋糕做得怎么样？",
        "py": "Nǐ chángle ma? Zhè cì dàngāo zuò de zěnmeyàng?",
        "vn": "Bạn nếm thử chưa? Lần này bánh làm thế nào rồi?"
      },
      {
        "zh": "这道菜你尝一下，看看味道怎么样。",
        "py": "Zhè dào cài nǐ cháng yíxià, kànkan wèidào zěnmeyàng.",
        "vn": "Món ăn này bạn nếm thử xem, xem mùi vị thế nào."
      }
    ],
    "hanzi": [
      {
        "c": "尝",
        "p": "cháng",
        "type": "上下结构 · Trên-dưới (giản thể)",
        "st": 9,
        "ord": "尚 trên → 云(biến thể) dưới",
        "rad": "口 (khẩu, biến thể)",
        "mean": "nếm, thử",
        "tip": "Chữ giản thể liên quan đến MIỆNG NẾM vị, mở rộng thành NẾM THỬ, THƯỞNG THỨC.",
        "cf": "常 (cháng – \"thường xuyên\", khác bộ)",
        "w": "尝尝 / 品尝 / 尝试"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Loại cà chua này đã tươi như vậy thì chị mua vài quả nếm thử trước đi.",
        "answer": "既然这种西红柿很新鲜，您就先买几个尝尝吧。",
        "answerPy": "Jìrán zhè zhǒng xīhóngshì hěn xīnxiān, nín jiù xiān mǎi jǐ ge chángchang ba.",
        "note": "尝尝 — động từ lặp, làm câu nhẹ và lịch sự hơn.",
        "pair": "既然……就……"
      },
      {
        "promptLang": "vi",
        "prompt": "Bạn nếm thử món này trước, rồi nói cho tôi biết có ngon không.",
        "answer": "你先尝尝这道菜，然后告诉我好不好吃。",
        "answerPy": "Nǐ xiān chángchang zhè dào cài, ránhòu gàosu wǒ hǎo bu hǎochī.",
        "note": "好不好吃 — dạng hỏi chính phản làm tân ngữ.",
        "pair": "先……然后……"
      }
    ],
    "colloFull": [
      {
        "zh": "尝尝",
        "py": "chángcháng",
        "vn": "nếm thử"
      },
      {
        "zh": "尝一下",
        "py": "cháng yíxià",
        "vn": "nếm một chút"
      },
      {
        "zh": "尝味道",
        "py": "cháng wèidào",
        "vn": "nếm mùi vị"
      },
      {
        "zh": "先买几个尝尝",
        "py": "xiān mǎi jǐ gè chángcháng",
        "vn": "mua vài quả nếm thử trước"
      },
      {
        "zh": "尝一口",
        "py": "cháng yì kǒu",
        "vn": "nếm một miếng"
      }
    ],
    "patterns": [
      {
        "s": "尝尝 / 尝一下",
        "m": "Động từ lặp — làm nhẹ đi, ý \"thử một chút\""
      },
      {
        "s": "尝 + 味道",
        "m": "Nếm mùi vị — 味道 là từ bài 5"
      }
    ]
  },
  {
    "n": 12,
    "zh": "轻",
    "py": "qīng",
    "pos": "Tính từ",
    "vn": "nhẹ",
    "hv": "khinh",
    "em": "🪶",
    "lesson": 3,
    "explain": [
      "Có trọng lượng nhỏ, không nặng."
    ],
    "usage": "Tính từ; thường đi với 轻一点儿的, 搬得轻一点儿.",
    "collo": [
      "轻一点儿的",
      "搬得轻一点儿",
      "又轻又好"
    ],
    "ex_zh": "我想买一个轻一点儿的。",
    "ex_py": "Wǒ xiǎng mǎi yí ge qīng yìdiǎnr de.",
    "ex_vn": "Tôi muốn mua một cái nhẹ hơn một chút.",
    "exList": [
      {
        "zh": "我想买一个轻一点儿的。",
        "py": "Wǒ xiǎng mǎi yí ge qīng yìdiǎnr de.",
        "vn": "Tôi muốn mua một cái nhẹ hơn một chút."
      },
      {
        "zh": "这个纸箱里面是酒，麻烦您搬的时候轻一点儿。",
        "py": "Zhège zhǐxiāng lǐmiàn shì jiǔ, máfan nín bān de shíhou qīng yìdiǎnr.",
        "vn": "Trong thùng carton này là rượu, phiền anh khi khiêng nhẹ tay một chút."
      },
      {
        "zh": "这个行李箱又轻又好用。",
        "py": "Zhège xínglixiāng yòu qīng yòu hǎoyòng.",
        "vn": "Chiếc vali này vừa nhẹ vừa dễ dùng."
      }
    ],
    "hanzi": [
      {
        "c": "轻",
        "p": "qīng",
        "type": "左右结构 · Trái-phải (giản thể)",
        "st": 9,
        "ord": "车 (xa) trái → 圣(biến thể) phải",
        "rad": "车 (xa – xe)",
        "mean": "nhẹ",
        "tip": "Bộ xe 车 (xe nhẹ, dễ di chuyển) + 圣(biểu âm) → mở rộng thành NHẸ (trọng lượng).",
        "cf": "经 (jīng – \"trải qua\", bộ 纟\")",
        "w": "轻 / 年轻 / 轻松"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Vì bên trong có đồ dễ vỡ, nên phiền anh khiêng chiếc vali này nhẹ tay một chút.",
        "answer": "因为里面有易碎的东西，所以麻烦您搬这个行李箱的时候轻一点儿。",
        "answerPy": "Yīnwèi lǐmiàn yǒu yìsuì de dōngxi, suǒyǐ máfan nín bān zhège xínglixiāng de shíhou qīng yìdiǎnr.",
        "note": "麻烦您 + V — cách nhờ vả lịch sự, học ở bài 2.",
        "pair": "因为……所以……"
      },
      {
        "promptLang": "vi",
        "prompt": "Bất kể từ góc độ giá cả hay chất lượng mà xem, chiếc vali nhẹ này đều đáng để cân nhắc.",
        "answer": "不管从价格方面看，还是从质量上看，这个轻的行李箱都是值得考虑的。",
        "answerPy": "Bùguǎn cóng jiàgé fāngmiàn kàn, háishi cóng zhìliàng shang kàn, zhège qīng de xínglixiāng dōu shì zhídé kǎolǜ de.",
        "note": "不管从……看，还是从……看 kết hợp 值得/考虑, ôn lại điểm ngữ pháp của bài.",
        "pair": "不管……都……"
      }
    ],
    "colloFull": [
      {
        "zh": "轻一点儿",
        "py": "qīng yìdiǎnr",
        "vn": "nhẹ tay một chút"
      },
      {
        "zh": "很轻",
        "py": "hěn qīng",
        "vn": "rất nhẹ"
      },
      {
        "zh": "又轻又好",
        "py": "yòu qīng yòu hǎo",
        "vn": "vừa nhẹ vừa tốt"
      },
      {
        "zh": "搬得轻一点儿",
        "py": "bān de qīng yìdiǎnr",
        "vn": "khiêng nhẹ tay một chút"
      },
      {
        "zh": "轻声说话",
        "py": "qīngshēng shuōhuà",
        "vn": "nói khẽ"
      }
    ],
    "patterns": [
      {
        "s": "V + 得 + 轻一点儿",
        "m": "Làm gì nhẹ tay hơn một chút"
      },
      {
        "s": "轻 ↔ 重",
        "m": "Nhẹ ↔ nặng"
      }
    ]
  },
  {
    "n": 13,
    "zh": "方面",
    "py": "fāngmiàn",
    "pos": "Danh từ",
    "vn": "khía cạnh, phương diện",
    "hv": "phương diện",
    "em": "📐",
    "lesson": 3,
    "explain": [
      "Một mặt/góc độ nào đó của sự vật, sự việc."
    ],
    "usage": "Danh từ; thường đi với 从……方面看, 各方面.",
    "collo": [
      "从价格方面看",
      "各方面",
      "这方面"
    ],
    "ex_zh": "不管从价格方面看，还是从质量上看，都是值得考虑的。",
    "ex_py": "Bùguǎn cóng jiàgé fāngmiàn kàn, háishi cóng zhìliàng shang kàn, dōu shì zhídé kǎolǜ de.",
    "ex_vn": "Bất kể từ góc độ giá cả mà xem, hay từ chất lượng mà xem, đều đáng để cân nhắc.",
    "exList": [
      {
        "zh": "不管从价格方面看，还是从质量上看，都是值得考虑的。",
        "py": "Bùguǎn cóng jiàgé fāngmiàn kàn, háishi cóng zhìliàng shang kàn, dōu shì zhídé kǎolǜ de.",
        "vn": "Bất kể từ góc độ giá cả mà xem, hay từ chất lượng mà xem, đều đáng để cân nhắc."
      },
      {
        "zh": "看了，各方面都介绍得挺不错。",
        "py": "Kànle, gè fāngmiàn dōu jièshào de tǐng búcuò.",
        "vn": "Xem rồi, mỗi phương diện đều được giới thiệu khá tốt."
      },
      {
        "zh": "在学习方面，他一直很努力。",
        "py": "Zài xuéxí fāngmiàn, tā yìzhí hěn nǔlì.",
        "vn": "Về phương diện học tập, anh ấy luôn nỗ lực."
      }
    ],
    "hanzi": [
      {
        "c": "面",
        "p": "miàn",
        "type": "独体字 · Chữ đơn",
        "st": 9,
        "ord": "nét liền",
        "rad": "面 (diện – mặt)",
        "mean": "mặt, phương diện",
        "tip": "Chữ tượng hình khuôn MẶT người → mở rộng thành BỀ MẶT, PHƯƠNG DIỆN, kết hợp 方(hướng) thành 方面 = KHÍA CẠNH.",
        "cf": "面 dễ nhầm với 而 (ér – \"mà\")",
        "w": "方面 / 面对 / 一方面"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Bất kể từ góc độ giá cả hay chất lượng mà xem, chiếc vali này đều đáng để cân nhắc.",
        "answer": "不管从价格方面看，还是从质量上看，这个行李箱都是值得考虑的。",
        "answerPy": "Bùguǎn cóng jiàgé fāngmiàn kàn, háishi cóng zhìliàng shang kàn, zhège xínglixiāng dōu shì zhídé kǎolǜ de.",
        "note": "不管从……方面看，还是从……上看 — cấu trúc liệt kê góc độ.",
        "pair": "不管……都……"
      },
      {
        "promptLang": "vi",
        "prompt": "Bản kế hoạch bạn xem chưa? Không những mọi mặt đều giới thiệu khá tốt, mà nội dung cũng rất phong phú.",
        "answer": "计划书你看了没？不仅各方面都介绍得挺不错，而且内容也很丰富。",
        "answerPy": "Jìhuàshū nǐ kànle méi? Bùjǐn gè fāngmiàn dōu jièshào de tǐng búcuò, érqiě nèiróng yě hěn fēngfù.",
        "note": "丰富 là từ bài 2; 各方面 — mọi phương diện.",
        "pair": "不仅……而且……"
      }
    ],
    "colloFull": [
      {
        "zh": "各方面",
        "py": "gè fāngmiàn",
        "vn": "mọi phương diện"
      },
      {
        "zh": "这方面",
        "py": "zhè fāngmiàn",
        "vn": "phương diện này"
      },
      {
        "zh": "从价格方面看",
        "py": "cóng jiàgé fāngmiàn kàn",
        "vn": "xét từ phương diện giá cả"
      },
      {
        "zh": "在这方面",
        "py": "zài zhè fāngmiàn",
        "vn": "về mặt này"
      },
      {
        "zh": "两方面",
        "py": "liǎng fāngmiàn",
        "vn": "hai mặt"
      }
    ],
    "patterns": [
      {
        "s": "从 + N + 方面 + 看",
        "m": "Xét từ phương diện nào"
      },
      {
        "s": "各 + 方面",
        "m": "Các mặt, mọi phương diện"
      }
    ]
  },
  {
    "n": 14,
    "zh": "值得",
    "py": "zhídé",
    "pos": "Động từ",
    "vn": "đáng (giá)",
    "hv": "trị đắc",
    "em": "✅",
    "lesson": 3,
    "explain": [
      "Diễn tả việc gì đó có giá trị, đáng làm, mang lại kết quả tốt."
    ],
    "usage": "Động từ, mang động từ/cụm động từ làm tân ngữ: 值得考虑, 值得学习.",
    "collo": [
      "值得考虑",
      "值得买",
      "值得学习"
    ],
    "ex_zh": "不管从价格方面看，还是从质量上看，都是值得考虑的。",
    "ex_py": "Bùguǎn cóng jiàgé fāngmiàn kàn, háishi cóng zhìliàng shang kàn, dōu shì zhídé kǎolǜ de.",
    "ex_vn": "Bất kể từ góc độ giá cả mà xem, hay từ chất lượng mà xem, đều đáng để cân nhắc.",
    "exList": [
      {
        "zh": "不管从价格方面看，还是从质量上看，都是值得考虑的。",
        "py": "Bùguǎn cóng jiàgé fāngmiàn kàn, háishi cóng zhìliàng shang kàn, dōu shì zhídé kǎolǜ de.",
        "vn": "Bất kể từ góc độ giá cả mà xem, hay từ chất lượng mà xem, đều đáng để cân nhắc."
      },
      {
        "zh": "你应该改改自己的脾气，别总是为一点儿小事生气，不值得。",
        "py": "Nǐ yīnggāi gǎigai zìjǐ de píqi, bié zǒngshì wèi yìdiǎnr xiǎo shì shēngqì, bù zhídé.",
        "vn": "Bạn nên sửa đổi tính khí của mình, đừng lúc nào cũng nổi giận vì chuyện nhỏ, không đáng đâu."
      },
      {
        "zh": "他身上的优点更值得我们去发现、去学习。",
        "py": "Tā shēnshang de yōudiǎn gèng zhídé wǒmen qù fāxiàn, qù xuéxí.",
        "vn": "Ưu điểm ở anh ấy càng đáng để chúng ta khám phá, học hỏi."
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
        "prompt": "Chiếc sô pha này không những giá không đắt, mà chất lượng lại tốt, thật đáng mua.",
        "answer": "这个沙发不但价钱不贵，而且质量又好，真值得买。",
        "answerPy": "Zhège shāfā búdàn jiàqián bú guì, érqiě zhìliàng yòu hǎo, zhēn zhídé mǎi.",
        "note": "Sau 值得 phải là động từ: 值得买 ✓ / 值得很好 ✗.",
        "pair": "不但……而且……"
      },
      {
        "promptLang": "vi",
        "prompt": "Chúng ta luôn dễ dàng nhìn thấy khuyết điểm của một người, nhưng đừng quên, ưu điểm của họ càng đáng để chúng ta học hỏi.",
        "answer": "我们总是很容易看到一个人的缺点，但是别忘了，他身上的优点更值得我们去学习。",
        "answerPy": "Wǒmen zǒngshì hěn róngyì kàndào yí ge rén de quēdiǎn, dànshì bié wàngle, tā shēnshang de yōudiǎn gèng zhídé wǒmen qù xuéxí.",
        "note": "更值得……去学习 — càng đáng để … học hỏi, ôn lại từ vựng 优点 Bài 5.",
        "pair": "总是……"
      }
    ],
    "colloFull": [
      {
        "zh": "值得买",
        "py": "zhídé mǎi",
        "vn": "đáng mua"
      },
      {
        "zh": "值得考虑",
        "py": "zhídé kǎolǜ",
        "vn": "đáng cân nhắc"
      },
      {
        "zh": "值得学习",
        "py": "zhídé xuéxí",
        "vn": "đáng học hỏi"
      },
      {
        "zh": "不值得",
        "py": "bù zhídé",
        "vn": "không đáng"
      },
      {
        "zh": "值得高兴",
        "py": "zhídé gāoxìng",
        "vn": "đáng mừng"
      }
    ],
    "patterns": [
      {
        "s": "值得 + V",
        "m": "Đáng để làm gì"
      },
      {
        "s": "✗ 值得很好 → ✓ 值得买",
        "m": "Sau 值得 là ĐỘNG TỪ, không phải tính từ"
      }
    ]
  },
  {
    "n": 15,
    "zh": "活动",
    "py": "huódòng",
    "pos": "Danh từ",
    "vn": "hoạt động",
    "hv": "hoạt động",
    "em": "🎉",
    "lesson": 3,
    "explain": [
      "Chương trình/sự kiện được tổ chức nhằm một mục đích nào đó."
    ],
    "usage": "Danh từ; thường đi với 打折活动, 举办活动.",
    "collo": [
      "打折活动",
      "举办活动",
      "参加活动"
    ],
    "ex_zh": "现在我们商场正好有打折活动，打完折是999。",
    "ex_py": "Xiànzài wǒmen shāngchǎng zhènghǎo yǒu dǎzhé huódòng, dǎwán zhé shì jiǔbǎi jiǔshí jiǔ.",
    "ex_vn": "Hiện tại trung tâm mua sắm chúng tôi đúng lúc có chương trình giảm giá, giảm xong còn 999.",
    "exList": [
      {
        "zh": "现在我们商场正好有打折活动，打完折是999。",
        "py": "Xiànzài wǒmen shāngchǎng zhènghǎo yǒu dǎzhé huódòng, dǎwán zhé shì jiǔbǎi jiǔshí jiǔ.",
        "vn": "Hiện tại trung tâm mua sắm chúng tôi đúng lúc có chương trình giảm giá, giảm xong còn 999."
      },
      {
        "zh": "一些图书还有打折活动。",
        "py": "Yìxiē túshū hái yǒu dǎzhé huódòng.",
        "vn": "Một số sách còn có chương trình giảm giá."
      },
      {
        "zh": "一到节日，商场也会举办各种各样的活动。",
        "py": "Yí dào jiérì, shāngchǎng yě huì jǔbàn gè zhǒng gè yàng de huódòng.",
        "vn": "Cứ đến ngày lễ, trung tâm mua sắm cũng sẽ tổ chức đủ loại hoạt động."
      }
    ],
    "hanzi": [
      {
        "c": "活",
        "p": "huó",
        "type": "左右结构 · Trái-phải",
        "st": 9,
        "ord": "氵 (thủy) trái → 舌 (thiệt) phải",
        "rad": "氵 (thủy – nước)",
        "mean": "sống động",
        "tip": "Bộ nước 氵 (nguồn sống) + 舌(lưỡi, biểu âm) → SỐNG ĐỘNG, kết hợp 动(chuyển động) thành 活动 = HOẠT ĐỘNG.",
        "cf": "话 (huà – \"lời nói\", bộ 讠\")",
        "w": "活动 / 生活 / 活泼"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Vì hiệu sách chúng tôi đang đúng đợt \"mua sách tặng quà\", nên mua sách bây giờ rẻ hơn ngày thường.",
        "answer": "因为现在我们书店正好有\"购书送好礼\"活动，所以现在买书比平时便宜。",
        "answerPy": "Yīnwèi xiànzài wǒmen shūdiàn zhènghǎo yǒu \"gòu shū sòng hǎo lǐ\" huódòng, suǒyǐ xiànzài mǎi shū bǐ píngshí piányi.",
        "note": "正好 là từ bài 2, 平时 cũng vậy — hai từ cũ trong một câu.",
        "pair": "因为……所以……"
      },
      {
        "promptLang": "vi",
        "prompt": "Cứ đến ngày lễ, cửa hàng cũng sẽ hạ giá, tổ chức đủ loại hoạt động.",
        "answer": "一到节日，商店也会降价，举办各种各样的活动。",
        "answerPy": "Yí dào jiérì, shāngdiàn yě huì jiàngjià, jǔbàn gè zhǒng gè yàng de huódòng.",
        "note": "一到……也会 kết hợp 降低/举办/各, ôn lại nhiều từ vựng của bài.",
        "pair": "一……也……"
      }
    ],
    "colloFull": [
      {
        "zh": "打折活动",
        "py": "dǎzhé huódòng",
        "vn": "chương trình giảm giá"
      },
      {
        "zh": "参加活动",
        "py": "cānjiā huódòng",
        "vn": "tham gia hoạt động"
      },
      {
        "zh": "举办活动",
        "py": "jǔbàn huódòng",
        "vn": "tổ chức hoạt động"
      },
      {
        "zh": "有意义的活动",
        "py": "yǒu yìyì de huódòng",
        "vn": "hoạt động có ý nghĩa"
      },
      {
        "zh": "各种各样的活动",
        "py": "gè zhǒng gè yàng de huódòng",
        "vn": "đủ loại hoạt động"
      }
    ],
    "patterns": [
      {
        "s": "举办 / 参加 + 活动",
        "m": "Tổ chức / tham gia hoạt động"
      },
      {
        "s": "loại + 活动",
        "m": "打折活动, 体育活动 — hoạt động kiểu gì"
      }
    ]
  },
  {
    "n": 16,
    "zh": "内",
    "py": "nèi",
    "pos": "Danh từ",
    "vn": "(bên) trong, trong vòng",
    "hv": "nội",
    "em": "📥",
    "lesson": 3,
    "explain": [
      "Chỉ phạm vi bên trong (không gian hoặc thời gian)."
    ],
    "usage": "Danh từ, thường kết hợp: 一年内, 三日内.",
    "collo": [
      "一年内",
      "三日内",
      "范围内"
    ],
    "ex_zh": "一年内我们都负责免费修理。",
    "ex_py": "Yì nián nèi wǒmen dōu fùzé miǎnfèi xiūlǐ.",
    "ex_vn": "Trong vòng một năm chúng tôi đều chịu trách nhiệm sửa chữa miễn phí.",
    "exList": [
      {
        "zh": "一年内我们都负责免费修理。",
        "py": "Yì nián nèi wǒmen dōu fùzé miǎnfèi xiūlǐ.",
        "vn": "Trong vòng một năm chúng tôi đều chịu trách nhiệm sửa chữa miễn phí."
      },
      {
        "zh": "可以，我们三日内给您送到。",
        "py": "Kěyǐ, wǒmen sān rì nèi gěi nín sòngdào.",
        "vn": "Được, chúng tôi sẽ gửi đến cho chị trong vòng ba ngày."
      },
      {
        "zh": "请在规定时间内完成作业。",
        "py": "Qǐng zài guīdìng shíjiān nèi wánchéng zuòyè.",
        "vn": "Xin hoàn thành bài tập trong thời gian quy định."
      }
    ],
    "hanzi": [
      {
        "c": "内",
        "p": "nèi",
        "type": "半包围结构 · Bán bao vây",
        "st": 4,
        "ord": "冂 bao ngoài → 人 trong",
        "rad": "冂 (quynh)",
        "mean": "bên trong",
        "tip": "Chữ tượng hình một vật đi VÀO bên trong khung 冂 → mở rộng thành BÊN TRONG, TRONG VÒNG (thời gian).",
        "cf": "内 dễ nhầm với 肉 (ròu – \"thịt\")",
        "w": "一年内 / 内容 / 国内"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Trong vòng một năm chúng tôi đều chịu trách nhiệm sửa chữa miễn phí, anh cứ yên tâm mua.",
        "answer": "一年内我们都负责免费修理，您放心买吧。",
        "answerPy": "Yì nián nèi wǒmen dōu fùzé miǎnfèi xiūlǐ, nín fàngxīn mǎi ba.",
        "note": "一年内 kết hợp 免费/修理, ôn lại từ vựng của bài.",
        "pair": "一……都……"
      },
      {
        "promptLang": "vi",
        "prompt": "Chỉ cần hôm nay anh mua là chúng tôi sẽ giao hàng trong vòng ba ngày.",
        "answer": "只要您今天买，我们就会在三日内把东西送到。",
        "answerPy": "Zhǐyào nín jīntiān mǎi, wǒmen jiù huì zài sān rì nèi bǎ dōngxi sòngdào.",
        "note": "在 + thời lượng + 内 — trong vòng bao lâu; 内 luôn đứng sau.",
        "pair": "只要……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "一年内",
        "py": "yì nián nèi",
        "vn": "trong vòng một năm"
      },
      {
        "zh": "三日内",
        "py": "sān rì nèi",
        "vn": "trong vòng ba ngày"
      },
      {
        "zh": "范围内",
        "py": "fànwéi nèi",
        "vn": "trong phạm vi"
      },
      {
        "zh": "一个星期内",
        "py": "yí gè xīngqī nèi",
        "vn": "trong vòng một tuần"
      },
      {
        "zh": "学校内",
        "py": "xuéxiào nèi",
        "vn": "trong trường"
      }
    ],
    "patterns": [
      {
        "s": "thời lượng + 内",
        "m": "Trong vòng bao lâu — 内 đứng SAU"
      },
      {
        "s": "✗ 内一年 → ✓ 一年内",
        "m": "内 là từ phương vị, luôn đứng sau"
      }
    ]
  },
  {
    "n": 17,
    "zh": "免费",
    "py": "miǎnfèi",
    "pos": "Động từ",
    "vn": "miễn phí",
    "hv": "miễn phí",
    "em": "🆓",
    "lesson": 3,
    "explain": [
      "Không phải trả tiền cho dịch vụ/sản phẩm."
    ],
    "usage": "Động từ ly hợp; thường đi với 免费修理, 免费办卡.",
    "collo": [
      "免费修理",
      "免费办卡",
      "免费送货"
    ],
    "ex_zh": "一年内我们都负责免费修理。",
    "ex_py": "Yì nián nèi wǒmen dōu fùzé miǎnfèi xiūlǐ.",
    "ex_vn": "Trong vòng một năm chúng tôi đều chịu trách nhiệm sửa chữa miễn phí.",
    "exList": [
      {
        "zh": "一年内我们都负责免费修理。",
        "py": "Yì nián nèi wǒmen dōu fùzé miǎnfèi xiūlǐ.",
        "vn": "Trong vòng một năm chúng tôi đều chịu trách nhiệm sửa chữa miễn phí."
      },
      {
        "zh": "如果购书满500元可免费办会员卡。",
        "py": "Rúguǒ gòu shū mǎn wǔbǎi yuán kě miǎnfèi bàn huìyuánkǎ.",
        "vn": "Nếu mua sách đủ 500 tệ có thể làm thẻ hội viên miễn phí."
      },
      {
        "zh": "现在买沙发，能免费送货上门吗？",
        "py": "Xiànzài mǎi shāfā, néng miǎnfèi sònghuò shàngmén ma?",
        "vn": "Bây giờ mua sô pha, có thể giao hàng miễn phí tận nhà không?"
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
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Nếu mua sách đủ 500 tệ có thể làm thẻ hội viên miễn phí, sau này mua sách có thể được giảm 8 phần.",
        "answer": "如果购书满500元可免费办会员卡，以后购书可打8折。",
        "answerPy": "Rúguǒ gòu shū mǎn wǔbǎi yuán kě miǎnfèi bàn huìyuánkǎ, yǐhòu gòu shū kě dǎ bā zhé.",
        "note": "免费办会员卡 kết hợp 满/打折, ôn lại từ vựng của bài.",
        "pair": "如果……会……"
      },
      {
        "promptLang": "vi",
        "prompt": "Nếu bây giờ mua tủ lạnh thì có được giao hàng tận nhà miễn phí không?",
        "answer": "要是现在买冰箱，是不是就能免费送货上门？",
        "answerPy": "Yàoshi xiànzài mǎi bīngxiāng, shì bu shì jiù néng miǎnfèi sònghuò shàngmén?",
        "note": "要是 = 如果, thiên khẩu ngữ hơn.",
        "pair": "要是……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "免费修理",
        "py": "miǎnfèi xiūlǐ",
        "vn": "sửa chữa miễn phí"
      },
      {
        "zh": "免费送货",
        "py": "miǎnfèi sòng huò",
        "vn": "giao hàng miễn phí"
      },
      {
        "zh": "免费获得",
        "py": "miǎnfèi huòdé",
        "vn": "nhận miễn phí"
      },
      {
        "zh": "免费办卡",
        "py": "miǎnfèi bàn kǎ",
        "vn": "làm thẻ miễn phí"
      },
      {
        "zh": "免费送货上门",
        "py": "miǎnfèi sòng huò shàng mén",
        "vn": "giao hàng tận nhà miễn phí"
      }
    ],
    "patterns": [
      {
        "s": "免费 + V",
        "m": "Làm gì miễn phí"
      },
      {
        "s": "免 + 费",
        "m": "Miễn (免) phí (费) — ghép nghĩa dễ nhớ"
      }
    ]
  },
  {
    "n": 18,
    "zh": "修理",
    "py": "xiūlǐ",
    "pos": "Động từ",
    "vn": "sửa chữa",
    "hv": "tu lý",
    "em": "🔧",
    "lesson": 3,
    "explain": [
      "Sửa lại đồ vật bị hỏng để dùng được bình thường."
    ],
    "usage": "Động từ; thường đi với 免费修理, 修理好.",
    "collo": [
      "免费修理",
      "修理好",
      "修理东西"
    ],
    "ex_zh": "一年内我们都负责免费修理。",
    "ex_py": "Yì nián nèi wǒmen dōu fùzé miǎnfèi xiūlǐ.",
    "ex_vn": "Trong vòng một năm chúng tôi đều chịu trách nhiệm sửa chữa miễn phí.",
    "exList": [
      {
        "zh": "一年内我们都负责免费修理。",
        "py": "Yì nián nèi wǒmen dōu fùzé miǎnfèi xiūlǐ.",
        "vn": "Trong vòng một năm chúng tôi đều chịu trách nhiệm sửa chữa miễn phí."
      },
      {
        "zh": "这台电脑坏了，需要拿去修理。",
        "py": "Zhè tái diànnǎo huài le, xūyào ná qù xiūlǐ.",
        "vn": "Chiếc máy tính này hỏng rồi, cần mang đi sửa."
      },
      {
        "zh": "师傅已经把冰箱修理好了。",
        "py": "Shīfu yǐjīng bǎ bīngxiāng xiūlǐ hǎo le.",
        "vn": "Thợ đã sửa xong tủ lạnh rồi."
      }
    ],
    "hanzi": [
      {
        "c": "修",
        "p": "xiū",
        "type": "左右结构 · Trái-phải",
        "st": 9,
        "ord": "亻 (nhân) trái → 攸+彡 phải",
        "rad": "亻 (nhân – người)",
        "mean": "sửa chữa, tu bổ",
        "tip": "Bộ người 亻 (hành động của người) + 攸(biểu âm) + 彡(trang trí) → NGƯỜI làm cho đẹp/tốt trở lại, mở rộng thành SỬA CHỮA, kết hợp 理(chỉnh lý) thành 修理 = SỬA CHỮA.",
        "cf": "修 dễ nhầm với 条 (tiáo – \"cành, sợi\")",
        "w": "修理 / 修改 / 装修"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Chiếc vali này không những chất lượng tốt, mà trong vòng một năm cửa hàng còn sửa miễn phí.",
        "answer": "这个行李箱不但质量不错，而且一年内店里还负责免费修理。",
        "answerPy": "Zhège xínglixiāng búdàn zhìliàng búcuò, érqiě yì nián nèi diàn li hái fùzé miǎnfèi xiūlǐ.",
        "note": "负责 là từ bài 3 — chịu trách nhiệm việc gì.",
        "pair": "不但……而且……"
      },
      {
        "promptLang": "vi",
        "prompt": "Vì tủ lạnh nhà mình hỏng rồi, nên phải tìm thợ đến sửa.",
        "answer": "因为咱家的冰箱坏了，所以得找师傅来修理。",
        "answerPy": "Yīnwèi zán jiā de bīngxiāng huài le, suǒyǐ děi zhǎo shīfu lái xiūlǐ.",
        "note": "咱 là dạng rút gọn của 咱们 (bài 3); 得 ở đây đọc là děi — phải.",
        "pair": "因为……所以……"
      }
    ],
    "colloFull": [
      {
        "zh": "免费修理",
        "py": "miǎnfèi xiūlǐ",
        "vn": "sửa chữa miễn phí"
      },
      {
        "zh": "修理好",
        "py": "xiūlǐ hǎo",
        "vn": "sửa xong"
      },
      {
        "zh": "找人修理",
        "py": "zhǎo rén xiūlǐ",
        "vn": "tìm người sửa"
      },
      {
        "zh": "修理东西",
        "py": "xiūlǐ dōngxi",
        "vn": "sửa đồ"
      },
      {
        "zh": "负责修理",
        "py": "fùzé xiūlǐ",
        "vn": "chịu trách nhiệm sửa chữa"
      }
    ],
    "patterns": [
      {
        "s": "修理 + N",
        "m": "Sửa chữa cái gì"
      },
      {
        "s": "找 + ai + 来修理",
        "m": "Tìm ai đó đến sửa"
      }
    ]
  },
  {
    "n": 19,
    "zh": "支持",
    "py": "zhīchí",
    "pos": "Động từ",
    "vn": "ủng hộ",
    "hv": "chi trì",
    "em": "🤝",
    "lesson": 4,
    "explain": [
      "Đồng tình, giúp đỡ, ủng hộ một ai đó/việc gì đó."
    ],
    "usage": "Động từ, mang tân ngữ trực tiếp: 支持大家, 感谢支持.",
    "collo": [
      "感谢支持",
      "支持大家",
      "得到支持"
    ],
    "ex_zh": "为了感谢大家的支持，我们书店今天举行\"购书送好礼\"活动。",
    "ex_py": "Wèile gǎnxiè dàjiā de zhīchí, wǒmen shūdiàn jīntiān jǔxíng \"gòu shū sòng hǎo lǐ\" huódòng.",
    "ex_vn": "Để cảm ơn sự ủng hộ của mọi người, cửa hàng sách chúng tôi hôm nay tổ chức chương trình \"mua sách tặng quà\".",
    "exList": [
      {
        "zh": "为了感谢大家的支持，我们书店今天举行\"购书送好礼\"活动。",
        "py": "Wèile gǎnxiè dàjiā de zhīchí, wǒmen shūdiàn jīntiān jǔxíng \"gòu shū sòng hǎo lǐ\" huódòng.",
        "vn": "Để cảm ơn sự ủng hộ của mọi người, cửa hàng sách chúng tôi hôm nay tổ chức chương trình \"mua sách tặng quà\"."
      },
      {
        "zh": "谢谢大家这一年来对我的支持和帮助。",
        "py": "Xièxie dàjiā zhè yì nián lái duì wǒ de zhīchí hé bāngzhù.",
        "vn": "Cảm ơn sự ủng hộ và giúp đỡ của mọi người dành cho tôi trong năm qua."
      },
      {
        "zh": "家人的支持对我来说非常重要。",
        "py": "Jiārén de zhīchí duì wǒ láishuō fēicháng zhòngyào.",
        "vn": "Sự ủng hộ của gia đình đối với tôi rất quan trọng."
      }
    ],
    "hanzi": [
      {
        "c": "持",
        "p": "chí",
        "type": "左右结构 · Trái-phải",
        "st": 9,
        "ord": "扌 (thủ) trái → 寺 (tự) phải",
        "rad": "扌 (thủ – tay)",
        "mean": "giữ, nắm",
        "tip": "Bộ tay 扌 + 寺(biểu âm) → dùng TAY GIỮ VỮNG, mở rộng thành ỦNG HỘ (giữ vững lập trường ủng hộ), kết hợp 支(chống đỡ) thành 支持 = ỦNG HỘ.",
        "cf": "持 dễ nhầm với 待 (dài – \"chờ đợi\", bộ 彳\")",
        "w": "支持 / 坚持 / 支持者"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Cảm ơn sự ủng hộ và giúp đỡ của mọi người suốt một năm qua; chỉ khi làm việc cùng mọi người tôi mới làm được thuận lợi như vậy.",
        "answer": "谢谢大家这一年来对我的支持和帮助，只有跟大家一起工作，我才能做得这么顺利。",
        "answerPy": "Xièxie dàjiā zhè yì nián lái duì wǒ de zhīchí hé bāngzhù, zhǐyǒu gēn dàjiā yìqǐ gōngzuò, wǒ cái néng zuò de zhème shùnlì.",
        "note": "顺利 là từ bài 4 — xuất hiện lại ở lời cảm ơn.",
        "pair": "只有……才……"
      },
      {
        "promptLang": "vi",
        "prompt": "Để cảm ơn sự ủng hộ của khách hàng, cửa hàng chúng tôi tổ chức hoạt động giảm giá.",
        "answer": "为了感谢顾客的支持，我们店举行打折活动。",
        "answerPy": "Wèile gǎnxiè gùkè de zhīchí, wǒmen diàn jǔxíng dǎzhé huódòng.",
        "note": "为了感谢……的支持 kết hợp 顾客/活动, ôn lại nhiều từ vựng của bài.",
        "pair": "为了……"
      }
    ],
    "colloFull": [
      {
        "zh": "感谢支持",
        "py": "gǎnxiè zhīchí",
        "vn": "cảm ơn sự ủng hộ"
      },
      {
        "zh": "得到支持",
        "py": "de dào zhīchí",
        "vn": "nhận được ủng hộ"
      },
      {
        "zh": "支持你",
        "py": "zhīchí nǐ",
        "vn": "ủng hộ bạn"
      },
      {
        "zh": "大家的支持",
        "py": "dàjiā de zhīchí",
        "vn": "sự ủng hộ của mọi người"
      },
      {
        "zh": "支持和帮助",
        "py": "zhīchí hé bāngzhù",
        "vn": "ủng hộ và giúp đỡ"
      }
    ],
    "patterns": [
      {
        "s": "Sub + 支持 + ai (động từ)",
        "m": "Ai đó ủng hộ ai"
      },
      {
        "s": "对 + ai + 的支持 (danh từ)",
        "m": "Sự ủng hộ dành cho ai"
      }
    ]
  },
  {
    "n": 20,
    "zh": "举行",
    "py": "jǔxíng",
    "pos": "Động từ",
    "vn": "tổ chức (hội họp, thi đấu...)",
    "hv": "cử hành",
    "em": "🎪",
    "lesson": 4,
    "explain": [
      "Tổ chức một sự kiện/hoạt động (thường trang trọng, quy mô)."
    ],
    "usage": "Động từ, mang tân ngữ trực tiếp: 举行活动, 举行会议.",
    "collo": [
      "举行活动",
      "举行会议",
      "举行比赛"
    ],
    "ex_zh": "我们书店今天举行\"购书送好礼\"活动。",
    "ex_py": "Wǒmen shūdiàn jīntiān jǔxíng \"gòu shū sòng hǎo lǐ\" huódòng.",
    "ex_vn": "Cửa hàng sách chúng tôi hôm nay tổ chức chương trình \"mua sách tặng quà\".",
    "exList": [
      {
        "zh": "我们书店今天举行\"购书送好礼\"活动。",
        "py": "Wǒmen shūdiàn jīntiān jǔxíng \"gòu shū sòng hǎo lǐ\" huódòng.",
        "vn": "Cửa hàng sách chúng tôi hôm nay tổ chức chương trình \"mua sách tặng quà\"."
      },
      {
        "zh": "学校下周会举行一次运动会。",
        "py": "Xuéxiào xià zhōu huì jǔxíng yí cì yùndònghuì.",
        "vn": "Trường học tuần sau sẽ tổ chức một cuộc thi thể thao."
      },
      {
        "zh": "公司明天举行一个重要的会议。",
        "py": "Gōngsī míngtiān jǔxíng yí ge zhòngyào de huìyì.",
        "vn": "Công ty ngày mai tổ chức một cuộc họp quan trọng."
      }
    ],
    "hanzi": [
      {
        "c": "举",
        "p": "jǔ",
        "type": "上下结构 · Trên-dưới (giản thể)",
        "st": 9,
        "ord": "兴(biến thể) trên → 手(biến thể) dưới",
        "rad": "手 (thủ, biến thể)",
        "mean": "nâng lên, tổ chức",
        "tip": "Chữ giản thể mô phỏng hai tay CÙNG NÂNG một vật lên → mở rộng thành TỔ CHỨC (nâng sự kiện lên), kết hợp 行(tiến hành) thành 举行 = TỔ CHỨC.",
        "cf": "举 dễ nhầm với 兴 (xīng – \"hưng thịnh\")",
        "w": "举行 / 举办 / 选举"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Để cảm ơn khách hàng, cửa hàng sách chúng tôi hôm nay tổ chức chương trình \"mua sách tặng quà\".",
        "answer": "为了感谢顾客，我们书店今天举行\"购书送好礼\"活动。",
        "answerPy": "Wèile gǎnxiè gùkè, wǒmen shūdiàn jīntiān jǔxíng \"gòu shū sòng hǎo lǐ\" huódòng.",
        "note": "举行……活动 kết hợp 支持/顾客, ôn lại nhiều từ vựng của bài.",
        "pair": "为了……"
      },
      {
        "promptLang": "vi",
        "prompt": "Cứ đến ngày lễ, trung tâm mua sắm cũng sẽ tổ chức đủ loại hoạt động giảm giá.",
        "answer": "一到节日，商场也会举行各种各样的打折活动。",
        "answerPy": "Yí dào jiérì, shāngchǎng yě huì jǔxíng gè zhǒng gè yàng de dǎzhé huódòng.",
        "note": "一到……也会举行 kết hợp 各/活动, ôn lại nhiều từ vựng của bài.",
        "pair": "一……也……"
      }
    ],
    "colloFull": [
      {
        "zh": "举行活动",
        "py": "jǔxíng huódòng",
        "vn": "tổ chức hoạt động"
      },
      {
        "zh": "举行会议",
        "py": "jǔxíng huìyì",
        "vn": "tổ chức cuộc họp"
      },
      {
        "zh": "举行比赛",
        "py": "jǔxíng bǐsài",
        "vn": "tổ chức thi đấu"
      },
      {
        "zh": "举行婚礼",
        "py": "jǔxíng hūn lǐ",
        "vn": "tổ chức đám cưới"
      },
      {
        "zh": "正在举行",
        "py": "zhèngzài jǔxíng",
        "vn": "đang diễn ra"
      }
    ],
    "patterns": [
      {
        "s": "举行 + 会议 / 比赛 / 婚礼",
        "m": "Tổ chức sự kiện có nghi thức"
      },
      {
        "s": "举行 ≈ 举办",
        "m": "举行 thiên về sự kiện diễn ra; 举办 thiên về đứng ra tổ chức"
      }
    ]
  },
  {
    "n": 21,
    "zh": "满",
    "py": "mǎn",
    "pos": "Động từ",
    "vn": "đạt đến, đầy, đủ",
    "hv": "mãn",
    "em": "💯",
    "lesson": 4,
    "explain": [
      "Đạt đến một mức/chỉ tiêu/giới hạn nào đó."
    ],
    "usage": "Động từ, mang số lượng làm tân ngữ: 满100元, 购书满500元.",
    "collo": [
      "满100元",
      "购书满500元",
      "满四百元"
    ],
    "ex_zh": "购书满100元送一个笔记本，满200元送一本词典。",
    "ex_py": "Gòu shū mǎn yìbǎi yuán sòng yí ge bǐjìběn, mǎn èrbǎi yuán sòng yì běn cídiǎn.",
    "ex_vn": "Mua sách đủ 100 tệ tặng một cuốn sổ tay, đủ 200 tệ tặng một cuốn từ điển.",
    "exList": [
      {
        "zh": "购书满100元送一个笔记本，满200元送一本词典。",
        "py": "Gòu shū mǎn yìbǎi yuán sòng yí ge bǐjìběn, mǎn èrbǎi yuán sòng yì běn cídiǎn.",
        "vn": "Mua sách đủ 100 tệ tặng một cuốn sổ tay, đủ 200 tệ tặng một cuốn từ điển."
      },
      {
        "zh": "如果购书满500元可免费办会员卡。",
        "py": "Rúguǒ gòu shū mǎn wǔbǎi yuán kě miǎnfèi bàn huìyuánkǎ.",
        "vn": "Nếu mua sách đủ 500 tệ có thể làm thẻ hội viên miễn phí."
      },
      {
        "zh": "今天购物满四百元的顾客可以免费获得一份小礼物。",
        "py": "Jīntiān gòuwù mǎn sìbǎi yuán de gùkè kěyǐ miǎnfèi huòdé yí fèn xiǎo lǐwù.",
        "vn": "Hôm nay khách hàng mua sắm đủ 400 tệ có thể nhận miễn phí một món quà nhỏ."
      }
    ],
    "hanzi": [
      {
        "c": "满",
        "p": "mǎn",
        "type": "左右结构 · Trái-phải (giản thể)",
        "st": 5,
        "ord": "氵 (thủy) trái → 两(biến thể) phải",
        "rad": "氵 (thủy – nước)",
        "mean": "đầy, đủ",
        "tip": "Bộ nước 氵 (nước dâng đầy) → mở rộng thành ĐẦY, ĐỦ (đạt đến mức nào đó).",
        "cf": "满 dễ nhầm với 蒲 (pú – \"cây bồ\")",
        "w": "满 / 满意 / 客满"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Hôm nay mua sắm đủ 400 tệ có thể nhận miễn phí một món quà nhỏ, chúng ta đã mua hơn 380 rồi, mua thêm hai đôi tất nữa là đủ.",
        "answer": "今天购物满四百元可以免费获得一份小礼物，咱们已经买了三百八十多了，再买两双袜子就够了。",
        "answerPy": "Jīntiān gòuwù mǎn sìbǎi yuán kěyǐ miǎnfèi huòdé yí fèn xiǎo lǐwù, zánmen yǐjīng mǎile sānbǎi bāshí duō le, zài mǎi liǎng shuāng wàzi jiù gòu le.",
        "note": "购物满……可以免费获得 kết hợp 购物/获得/袜子, ôn lại nhiều từ vựng của bài.",
        "pair": "一……就……"
      },
      {
        "promptLang": "vi",
        "prompt": "Nếu mua đủ 500 tệ có thể làm thẻ hội viên miễn phí, sau này mua hàng có thể được giảm 8 phần.",
        "answer": "如果买满500元可免费办会员卡，以后买东西可打8折。",
        "answerPy": "Rúguǒ mǎi mǎn wǔbǎi yuán kě miǎnfèi bàn huìyuánkǎ, yǐhòu mǎi dōngxi kě dǎ bā zhé.",
        "note": "满 + số tiền — đủ mức tiền, ôn lại nhiều từ vựng của bài.",
        "pair": "如果……会……"
      }
    ],
    "colloFull": [
      {
        "zh": "满100元",
        "py": "mǎn yuán",
        "vn": "đủ 100 tệ"
      },
      {
        "zh": "购书满500元",
        "py": "gòu shū mǎn yuán",
        "vn": "mua sách đủ 500 tệ"
      },
      {
        "zh": "满四百元",
        "py": "mǎn sìbǎi yuán",
        "vn": "đủ bốn trăm tệ"
      },
      {
        "zh": "人满了",
        "py": "rén mǎn le",
        "vn": "đã đủ người"
      },
      {
        "zh": "满一年",
        "py": "mǎn yì nián",
        "vn": "tròn một năm"
      }
    ],
    "patterns": [
      {
        "s": "满 + số tiền / thời gian",
        "m": "Đủ, tròn bao nhiêu"
      },
      {
        "s": "满……送……",
        "m": "Mua đủ … tặng … (kiểu khuyến mãi)"
      }
    ]
  },
  {
    "n": 22,
    "zh": "其中",
    "py": "qízhōng",
    "pos": "Danh từ",
    "vn": "trong đó",
    "hv": "kỳ trung",
    "em": "📍",
    "lesson": 4,
    "explain": [
      "Chỉ phạm vi/vị trí bên trong một tập hợp/nhóm đã nêu."
    ],
    "usage": "Danh từ, thường đứng đầu câu bổ sung chi tiết: 其中，……",
    "collo": [
      "其中",
      "其中，……",
      "乐在其中"
    ],
    "ex_zh": "一些图书还有打折活动，其中，小说7.5折，地图8折，留学考试用书6折。",
    "ex_py": "Yìxiē túshū hái yǒu dǎzhé huódòng, qízhōng, xiǎoshuō qīwǔ zhé, dìtú bā zhé, liúxué kǎoshì yòngshū liù zhé.",
    "ex_vn": "Một số sách còn có chương trình giảm giá, trong đó, tiểu thuyết giảm 25%, bản đồ giảm 20%, sách thi du học giảm 40%.",
    "exList": [
      {
        "zh": "一些图书还有打折活动，其中，小说7.5折，地图8折，留学考试用书6折。",
        "py": "Yìxiē túshū hái yǒu dǎzhé huódòng, qízhōng, xiǎoshuō qīwǔ zhé, dìtú bā zhé, liúxué kǎoshì yòngshū liù zhé.",
        "vn": "Một số sách còn có chương trình giảm giá, trong đó, tiểu thuyết giảm 25%, bản đồ giảm 20%, sách thi du học giảm 40%."
      },
      {
        "zh": "我们不仅要会读书，还要会选择其中的好书来读。",
        "py": "Wǒmen bùjǐn yào huì dú shū, hái yào huì xuǎnzé qízhōng de hǎo shū lái dú.",
        "vn": "Chúng ta không chỉ phải biết đọc sách, còn phải biết chọn trong số đó những cuốn sách hay để đọc."
      },
      {
        "zh": "虽然妻子工作很忙，但是她忙在其中也乐在其中。",
        "py": "Suīrán qīzi gōngzuò hěn máng, dànshì tā máng zài qízhōng yě lè zài qízhōng.",
        "vn": "Tuy vợ làm việc rất bận, nhưng cô ấy bận trong đó cũng vui trong đó."
      }
    ],
    "hanzi": [
      {
        "c": "其",
        "p": "qí",
        "type": "独体字 · Chữ đơn",
        "st": 8,
        "ord": "nét liền",
        "rad": "八 (bát, biến thể)",
        "mean": "cái đó, của nó",
        "tip": "其 là đại từ chỉ định (cái đó, của nó), kết hợp 中(giữa, trong) thành 其中 = TRONG ĐÓ, TRONG SỐ ĐÓ.",
        "cf": "期 (qī – \"kỳ hạn\", bộ 月\")",
        "w": "其中 / 其他 / 其次"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Rất nhiều người có thể đạt được thành công, trong đó nỗ lực là yếu tố quan trọng nhất.",
        "answer": "很多人能取得成功，其中努力是最重要的因素。",
        "answerPy": "Hěn duō rén néng qǔdé chénggōng, qízhōng nǔlì shì zuì zhòngyào de yīnsù.",
        "note": "其中 đứng đầu câu bổ sung chi tiết.",
        "pair": "其中……"
      },
      {
        "promptLang": "vi",
        "prompt": "Tôi có rất nhiều sở thích, trong đó tôi thích nhất là đọc sách.",
        "answer": "我有很多爱好，其中我最喜欢的是看书。",
        "answerPy": "Wǒ yǒu hěn duō àihào, qízhōng wǒ zuì xǐhuan de shì kàn shū.",
        "note": "其中 + mệnh đề bổ sung — trong đó….",
        "pair": "其中……"
      }
    ],
    "colloFull": [
      {
        "zh": "其中一个",
        "py": "qízhōng yí gè",
        "vn": "một trong số đó"
      },
      {
        "zh": "其中最重要的",
        "py": "qízhōng zuì zhòngyào de",
        "vn": "quan trọng nhất trong đó"
      },
      {
        "zh": "其中有",
        "py": "qízhōng yǒu",
        "vn": "trong đó có"
      },
      {
        "zh": "其中我最喜欢",
        "py": "qízhōng wǒ zuì xǐhuan",
        "vn": "trong đó tôi thích nhất"
      },
      {
        "zh": "乐在其中",
        "py": "lè zài qí zhōng",
        "vn": "vui trong đó"
      }
    ],
    "patterns": [
      {
        "s": "……，其中 + …",
        "m": "…, trong số đó thì …"
      },
      {
        "s": "✗ 其中三个人来了 (chưa nêu tổng) → phải có nhóm ở vế trước"
      }
    ]
  },
  {
    "n": 23,
    "zh": "小说",
    "py": "xiǎoshuō",
    "pos": "Danh từ",
    "vn": "tiểu thuyết",
    "hv": "tiểu thuyết",
    "em": "📖",
    "lesson": 4,
    "explain": [
      "Tác phẩm văn học kể chuyện dưới dạng văn xuôi."
    ],
    "usage": "Danh từ; thường đi với 一本小说, 小说7.5折.",
    "collo": [
      "一本小说",
      "小说7.5折",
      "看小说"
    ],
    "ex_zh": "一些图书还有打折活动，其中，小说7.5折。",
    "ex_py": "Yìxiē túshū hái yǒu dǎzhé huódòng, qízhōng, xiǎoshuō qīwǔ zhé.",
    "ex_vn": "Một số sách còn có chương trình giảm giá, trong đó, tiểu thuyết giảm 25%.",
    "exList": [
      {
        "zh": "一些图书还有打折活动，其中，小说7.5折。",
        "py": "Yìxiē túshū hái yǒu dǎzhé huódòng, qízhōng, xiǎoshuō qīwǔ zhé.",
        "vn": "Một số sách còn có chương trình giảm giá, trong đó, tiểu thuyết giảm 25%."
      },
      {
        "zh": "小说里的爱情总是很吸引人，男的很帅，女的很漂亮。",
        "py": "Xiǎoshuō li de àiqíng zǒngshì hěn xīyǐn rén, nán de hěn shuài, nǚ de hěn piàoliang.",
        "vn": "Tình yêu trong tiểu thuyết luôn rất hấp dẫn, nam thì đẹp trai, nữ thì xinh đẹp."
      },
      {
        "zh": "那本小说讲了一个爱情故事，很浪漫，让人特别感动。",
        "py": "Nà běn xiǎoshuō jiǎngle yí ge àiqíng gùshi, hěn làngmàn, ràng rén tèbié gǎndòng.",
        "vn": "Quyển tiểu thuyết đó kể một câu chuyện tình yêu, rất lãng mạn, khiến người ta vô cùng cảm động."
      }
    ],
    "hanzi": [
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
        "prompt": "Trong số sách đang giảm giá, vì tiểu thuyết giảm còn 75% nên tôi muốn mua thêm vài cuốn.",
        "answer": "在打折的图书中，因为小说打7.5折，所以我想多买几本。",
        "answerPy": "Zài dǎzhé de túshū zhōng, yīnwèi xiǎoshuō dǎ qīwǔ zhé, suǒyǐ wǒ xiǎng duō mǎi jǐ běn.",
        "note": "打7.5折 = còn 75% giá, tức giảm 25% — ngược cách nói tiếng Việt.",
        "pair": "因为……所以……"
      },
      {
        "promptLang": "vi",
        "prompt": "Quyển tiểu thuyết này không những kể một chuyện tình rất cảm động, mà còn viết rất hay.",
        "answer": "这本小说不仅讲了一个很感人的爱情故事，而且写得特别好。",
        "answerPy": "Zhè běn xiǎoshuō bùjǐn jiǎngle yí ge hěn gǎnrén de àiqíng gùshi, érqiě xiě de tèbié hǎo.",
        "note": "爱情 là từ bài 1; 本 là lượng từ cho sách.",
        "pair": "不仅……而且……"
      }
    ],
    "colloFull": [
      {
        "zh": "一本小说",
        "py": "yì běn xiǎoshuō",
        "vn": "một quyển tiểu thuyết"
      },
      {
        "zh": "看小说",
        "py": "kàn xiǎoshuō",
        "vn": "đọc tiểu thuyết"
      },
      {
        "zh": "写小说",
        "py": "xiě xiǎoshuō",
        "vn": "viết tiểu thuyết"
      },
      {
        "zh": "爱情小说",
        "py": "àiqíng xiǎoshuō",
        "vn": "tiểu thuyết tình cảm"
      },
      {
        "zh": "小说打七五折",
        "py": "xiǎoshuō dǎ qīwǔ zhé",
        "vn": "tiểu thuyết giảm còn 75%"
      }
    ],
    "patterns": [
      {
        "s": "một + 本 + 小说",
        "m": "Lượng từ 本 cho sách vở"
      },
      {
        "s": "loại + 小说",
        "m": "爱情小说, 侦探小说 — tiểu thuyết loại gì"
      }
    ]
  },
  {
    "n": 24,
    "zh": "所有",
    "py": "suǒyǒu",
    "pos": "Tính từ",
    "vn": "tất cả, toàn bộ",
    "hv": "sở hữu",
    "em": "🌐",
    "lesson": 4,
    "explain": [
      "Toàn bộ, không sót một cái nào."
    ],
    "usage": "Tính từ, làm định ngữ: 所有的小朋友, 所有人.",
    "collo": [
      "所有的小朋友",
      "所有人",
      "所有东西"
    ],
    "ex_zh": "今天过生日的朋友和所有的小朋友还可以获得一份小礼物。",
    "ex_py": "Jīntiān guò shēngrì de péngyou hé suǒyǒu de xiǎopéngyou hái kěyǐ huòdé yí fèn xiǎo lǐwù.",
    "ex_vn": "Bạn nào hôm nay sinh nhật và tất cả các bạn nhỏ còn có thể nhận được một món quà nhỏ.",
    "exList": [
      {
        "zh": "今天过生日的朋友和所有的小朋友还可以获得一份小礼物。",
        "py": "Jīntiān guò shēngrì de péngyou hé suǒyǒu de xiǎopéngyou hái kěyǐ huòdé yí fèn xiǎo lǐwù.",
        "vn": "Bạn nào hôm nay sinh nhật và tất cả các bạn nhỏ còn có thể nhận được một món quà nhỏ."
      },
      {
        "zh": "所有人都对这个结果很满意。",
        "py": "Suǒyǒu rén dōu duì zhège jiéguǒ hěn mǎnyì.",
        "vn": "Tất cả mọi người đều hài lòng với kết quả này."
      },
      {
        "zh": "我把所有的东西都整理好了。",
        "py": "Wǒ bǎ suǒyǒu de dōngxi dōu zhěnglǐ hǎo le.",
        "vn": "Tôi đã sắp xếp gọn gàng tất cả mọi thứ rồi."
      }
    ],
    "hanzi": [
      {
        "c": "所",
        "p": "suǒ",
        "type": "左右结构 · Trái-phải",
        "st": 8,
        "ord": "户 (hộ) trái → 斤 (cân) phải",
        "rad": "户 (hộ – cửa)",
        "mean": "nơi, cái mà",
        "tip": "Bộ 户(cửa, nhà) + 斤(rìu, biểu âm) → NƠI CHỐN, mở rộng thành trợ từ \"cái mà\", kết hợp 有(có) thành 所有 = TẤT CẢ (những cái có).",
        "cf": "所 dễ nhầm với 近 (jìn – \"gần\")",
        "w": "所有 / 所以 / 场所"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Bất kể là bạn nào sinh nhật hôm nay hay tất cả các bạn nhỏ, đều được nhận miễn phí một món quà nhỏ.",
        "answer": "不管是今天过生日的朋友，还是所有的小朋友，都可以免费获得一份小礼物。",
        "answerPy": "Bùguǎn shì jīntiān guò shēngrì de péngyou, háishi suǒyǒu de xiǎopéngyou, dōu kěyǐ miǎnfèi huòdé yí fèn xiǎo lǐwù.",
        "note": "不管是 A 还是 B，都…… — hai khả năng, kết quả như nhau.",
        "pair": "不管是……还是……"
      },
      {
        "promptLang": "vi",
        "prompt": "Chỉ cần là trẻ nhỏ thì tất cả mọi người đều nên đối xử tốt với các em.",
        "answer": "只要是小朋友，所有人都应该对他们好。",
        "answerPy": "Zhǐyào shì xiǎopéngyou, suǒyǒu rén dōu yīnggāi duì tāmen hǎo.",
        "note": "对 + ai + 好 — đối xử tốt với ai.",
        "pair": "只要……都……"
      }
    ],
    "colloFull": [
      {
        "zh": "所有人",
        "py": "suǒyǒu rén",
        "vn": "tất cả mọi người"
      },
      {
        "zh": "所有东西",
        "py": "suǒyǒu dōngxi",
        "vn": "tất cả đồ đạc"
      },
      {
        "zh": "所有的小朋友",
        "py": "suǒyǒu de xiǎopéngyǒu",
        "vn": "tất cả các bạn nhỏ"
      },
      {
        "zh": "所有问题",
        "py": "suǒyǒu wèntí",
        "vn": "mọi vấn đề"
      },
      {
        "zh": "所有的书",
        "py": "suǒyǒu de shū",
        "vn": "tất cả sách"
      }
    ],
    "patterns": [
      {
        "s": "所有 (的) + N + 都 + V",
        "m": "Tất cả … đều …"
      },
      {
        "s": "所有 ≠ 有",
        "m": "所有 = toàn bộ; 有 = có"
      }
    ]
  },
  {
    "n": 25,
    "zh": "获得",
    "py": "huòdé",
    "pos": "Động từ",
    "vn": "được, giành được",
    "hv": "hoạch đắc",
    "em": "🎁",
    "lesson": 4,
    "explain": [
      "Nhận được, đạt được điều gì đó."
    ],
    "usage": "Động từ, mang tân ngữ trực tiếp: 获得礼物, 获得成功.",
    "collo": [
      "获得礼物",
      "获得成功",
      "免费获得"
    ],
    "ex_zh": "今天过生日的朋友和所有的小朋友还可以获得一份小礼物。",
    "ex_py": "Jīntiān guò shēngrì de péngyou hé suǒyǒu de xiǎopéngyou hái kěyǐ huòdé yí fèn xiǎo lǐwù.",
    "ex_vn": "Bạn nào hôm nay sinh nhật và tất cả các bạn nhỏ còn có thể nhận được một món quà nhỏ.",
    "exList": [
      {
        "zh": "今天过生日的朋友和所有的小朋友还可以获得一份小礼物。",
        "py": "Jīntiān guò shēngrì de péngyou hé suǒyǒu de xiǎopéngyou hái kěyǐ huòdé yí fèn xiǎo lǐwù.",
        "vn": "Bạn nào hôm nay sinh nhật và tất cả các bạn nhỏ còn có thể nhận được một món quà nhỏ."
      },
      {
        "zh": "今天购物满四百元的顾客可以免费获得一份小礼物。",
        "py": "Jīntiān gòuwù mǎn sìbǎi yuán de gùkè kěyǐ miǎnfèi huòdé yí fèn xiǎo lǐwù.",
        "vn": "Hôm nay khách hàng mua sắm đủ 400 tệ có thể nhận miễn phí một món quà nhỏ."
      },
      {
        "zh": "他通过努力获得了成功。",
        "py": "Tā tōngguò nǔlì huòdéle chénggōng.",
        "vn": "Anh ấy đã đạt được thành công thông qua nỗ lực."
      }
    ],
    "hanzi": [
      {
        "c": "获",
        "p": "huò",
        "type": "左右结构 · Trái-phải (giản thể)",
        "st": 8,
        "ord": "艹 (thảo) trái → 犬(biến thể) phải",
        "rad": "艹 (thảo – cỏ)",
        "mean": "thu được, bắt được",
        "tip": "Chữ giản thể mô phỏng hành động BẮT ĐƯỢC/THU ĐƯỢC (như thợ săn bắt được con mồi trong cỏ), kết hợp 得(được) thành 获得 = ĐƯỢC, GIÀNH ĐƯỢC.",
        "cf": "护 (hù – \"bảo vệ\", bộ 扌\")",
        "w": "获得 / 获奖 / 收获"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Chỉ cần hôm nay mua sắm đủ 400 tệ là khách hàng được nhận miễn phí một món quà nhỏ.",
        "answer": "只要今天购物满四百元，顾客就可以免费获得一份小礼物。",
        "answerPy": "Zhǐyào jīntiān gòuwù mǎn sìbǎi yuán, gùkè jiù kěyǐ miǎnfèi huòdé yí fèn xiǎo lǐwù.",
        "note": "购物 là từ bài 5, 顾客 là từ bài 3.",
        "pair": "只要……就……"
      },
      {
        "promptLang": "vi",
        "prompt": "Nhờ nỗ lực của tất cả mọi người, chúng tôi cuối cùng đã đạt được thành công.",
        "answer": "因为所有人的努力，我们终于获得了成功。",
        "answerPy": "Yīnwèi suǒyǒu rén de nǔlì, wǒmen zhōngyú huòdéle chénggōng.",
        "note": "获得成功 kết hợp 所有, ôn lại từ vựng của bài.",
        "pair": "因为……"
      }
    ],
    "colloFull": [
      {
        "zh": "获得礼物",
        "py": "huòdé lǐwù",
        "vn": "nhận được quà"
      },
      {
        "zh": "获得成功",
        "py": "huòdé chénggōng",
        "vn": "giành được thành công"
      },
      {
        "zh": "免费获得",
        "py": "miǎnfèi huòdé",
        "vn": "nhận miễn phí"
      },
      {
        "zh": "获得帮助",
        "py": "huòdé bāngzhù",
        "vn": "nhận được giúp đỡ"
      },
      {
        "zh": "获得第一名",
        "py": "huòdé dì yì míng",
        "vn": "giành giải nhất"
      }
    ],
    "patterns": [
      {
        "s": "获得 + danh từ trừu tượng",
        "m": "Giành được, nhận được (trang trọng)"
      },
      {
        "s": "获得 ≠ 得到",
        "m": "获得 dùng cho cái phải nỗ lực mới có"
      }
    ]
  },
  {
    "n": 26,
    "zh": "情况",
    "py": "qíngkuàng",
    "pos": "Danh từ",
    "vn": "tình hình, tình huống",
    "hv": "tình huống",
    "em": "📋",
    "lesson": 5,
    "explain": [
      "Trạng thái/diễn biến của một sự việc tại một thời điểm."
    ],
    "usage": "Danh từ; thường đi với 一般情况下, 什么情况.",
    "collo": [
      "一般情况下",
      "什么情况",
      "了解情况"
    ],
    "ex_zh": "一般情况下，你花的钱越多，买的东西也就越好。",
    "ex_py": "Yìbān qíngkuàng xia, nǐ huā de qián yuè duō, mǎi de dōngxi yě jiù yuè hǎo.",
    "ex_vn": "Trong tình huống thông thường, bạn chi tiền càng nhiều, đồ mua được cũng càng tốt.",
    "exList": [
      {
        "zh": "一般情况下，你花的钱越多，买的东西也就越好。",
        "py": "Yìbān qíngkuàng xia, nǐ huā de qián yuè duō, mǎi de dōngxi yě jiù yuè hǎo.",
        "vn": "Trong tình huống thông thường, bạn chi tiền càng nhiều, đồ mua được cũng càng tốt."
      },
      {
        "zh": "请把具体情况告诉我。",
        "py": "Qǐng bǎ jùtǐ qíngkuàng gàosu wǒ.",
        "vn": "Xin hãy nói cho tôi biết tình hình cụ thể."
      },
      {
        "zh": "根据现在的情况，我们应该改变计划。",
        "py": "Gēnjù xiànzài de qíngkuàng, wǒmen yīnggāi gǎibiàn jìhuà.",
        "vn": "Căn cứ vào tình hình hiện tại, chúng ta nên thay đổi kế hoạch."
      }
    ],
    "hanzi": [
      {
        "c": "况",
        "p": "kuàng",
        "type": "左右结构 · Trái-phải",
        "st": 8,
        "ord": "氵 (thủy) trái → 兄 (huynh) phải",
        "rad": "氵 (thủy – nước)",
        "mean": "tình trạng",
        "tip": "Bộ nước 氵 (như dòng chảy biến đổi) + 兄(biểu âm) → mở rộng thành TÌNH TRẠNG, kết hợp 情(tình huống) thành 情况 = TÌNH HÌNH.",
        "cf": "况 dễ nhầm với 沉 (chén – \"chìm\")",
        "w": "情况 / 情形 / 何况"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Trong tình huống thông thường, chất lượng tốt thì giá cả cũng sẽ cao hơn.",
        "answer": "一般情况下，质量好价格也会更高。",
        "answerPy": "Yìbān qíngkuàng xia, zhìliàng hǎo jiàgé yě huì gèng gāo.",
        "note": "一般情况下 kết hợp 质量/价格, ôn lại từ vựng của bài.",
        "pair": "一……也……"
      },
      {
        "promptLang": "vi",
        "prompt": "Căn cứ vào tình hình hiện tại, chúng ta nên chọn phương pháp khác.",
        "answer": "根据现在的情况，我们应该选择另外的方法。",
        "answerPy": "Gēnjù xiànzài de qíngkuàng, wǒmen yīnggāi xuǎnzé lìngwài de fāngfǎ.",
        "note": "根据……情况 kết hợp 另外/方法, ôn lại nhiều từ vựng.",
        "pair": "根据……"
      }
    ],
    "colloFull": [
      {
        "zh": "一般情况下",
        "py": "yìbān qíngkuàng xià",
        "vn": "trong trường hợp thông thường"
      },
      {
        "zh": "什么情况",
        "py": "shénme qíngkuàng",
        "vn": "tình hình gì"
      },
      {
        "zh": "了解情况",
        "py": "liǎojiě qíngkuàng",
        "vn": "nắm tình hình"
      },
      {
        "zh": "实际情况",
        "py": "shíjì qíngkuàng",
        "vn": "tình hình thực tế"
      },
      {
        "zh": "这种情况",
        "py": "zhè zhǒng qíngkuàng",
        "vn": "trường hợp này"
      }
    ],
    "patterns": [
      {
        "s": "在 + … + 情况下",
        "m": "Trong trường hợp nào đó"
      },
      {
        "s": "了解 + 情况",
        "m": "Tìm hiểu, nắm tình hình"
      }
    ]
  },
  {
    "n": 27,
    "zh": "例如",
    "py": "lìrú",
    "pos": "Động từ",
    "vn": "lấy ví dụ, ví dụ như",
    "hv": "lệ như",
    "em": "📝",
    "lesson": 5,
    "explain": [
      "Dùng để đưa ra một ví dụ minh họa cho điều vừa nói."
    ],
    "usage": "Động từ, đứng đầu câu ví dụ: 例如，……",
    "collo": [
      "例如",
      "比如例如",
      "举例如下"
    ],
    "ex_zh": "例如，春天来了，冬天的衣服就会打折。",
    "ex_py": "Lìrú, chūntiān lái le, dōngtiān de yīfu jiù huì dǎzhé.",
    "ex_vn": "Ví dụ như, mùa xuân đến, quần áo mùa đông sẽ giảm giá.",
    "exList": [
      {
        "zh": "例如，春天来了，冬天的衣服就会打折。",
        "py": "Lìrú, chūntiān lái le, dōngtiān de yīfu jiù huì dǎzhé.",
        "vn": "Ví dụ như, mùa xuân đến, quần áo mùa đông sẽ giảm giá."
      },
      {
        "zh": "有很多种学习方法，例如听录音、看视频、多练习等等。",
        "py": "Yǒu hěn duō zhǒng xuéxí fāngfǎ, lìrú tīng lùyīn, kàn shìpín, duō liànxí děngděng.",
        "vn": "Có nhiều phương pháp học tập, ví dụ như nghe băng, xem video, luyện tập nhiều..."
      },
      {
        "zh": "很多水果对身体有好处，例如西红柿、葡萄等。",
        "py": "Hěn duō shuǐguǒ duì shēntǐ yǒu hǎochù, lìrú xīhóngshì, pútao děng.",
        "vn": "Rất nhiều hoa quả có lợi cho sức khỏe, ví dụ như cà chua, nho, v.v."
      }
    ],
    "hanzi": [
      {
        "c": "例",
        "p": "lì",
        "type": "左右结构 · Trái-phải",
        "st": 8,
        "ord": "亻 (nhân) trái → 列 (liệt) phải",
        "rad": "亻 (nhân – người)",
        "mean": "ví dụ, trường hợp",
        "tip": "Bộ người 亻 + 列(sắp xếp) → một TRƯỜNG HỢP được sắp xếp ra để minh họa, kết hợp 如(như) thành 例如 = VÍ DỤ NHƯ.",
        "cf": "列 (liè – \"hàng, dãy\", không có bộ 亻\")",
        "w": "例如 / 例子 / 举例"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Có rất nhiều loại hoạt động giảm giá, ví dụ như mua sách tặng quà, mua đủ tiền tặng quà.",
        "answer": "有很多种打折活动，例如购书送好礼、满额送礼物。",
        "answerPy": "Yǒu hěn duō zhǒng dǎzhé huódòng, lìrú gòu shū sòng hǎo lǐ, mǎn é sòng lǐwù.",
        "note": "例如 + liệt kê ví dụ, kết hợp 活动/满, ôn lại từ vựng của bài.",
        "pair": "例如……"
      },
      {
        "promptLang": "vi",
        "prompt": "Ví dụ như, mùa xuân đến, quần áo mùa đông sẽ giảm giá, chất lượng tốt lại còn rẻ.",
        "answer": "例如，春天来了，冬天的衣服就会打折，质量好还很便宜。",
        "answerPy": "Lìrú, chūntiān lái le, dōngtiān de yīfu jiù huì dǎzhé, zhìliàng hǎo hái hěn piányi.",
        "note": "例如 mở đầu câu ví dụ.",
        "pair": "例如……"
      }
    ],
    "colloFull": [
      {
        "zh": "例如……",
        "py": "lìrú",
        "vn": "ví dụ như…"
      },
      {
        "zh": "例如这个",
        "py": "lìrú zhège",
        "vn": "ví dụ như cái này"
      },
      {
        "zh": "举例如下",
        "py": "jǔ lì rú xià",
        "vn": "nêu ví dụ như sau"
      },
      {
        "zh": "例如打折活动",
        "py": "lìrú dǎzhé huódòng",
        "vn": "ví dụ như chương trình giảm giá"
      },
      {
        "zh": "例如春天",
        "py": "lìrú chūn tiān",
        "vn": "ví dụ như mùa xuân"
      }
    ],
    "patterns": [
      {
        "s": "……，例如 + N",
        "m": "…, ví dụ như …"
      },
      {
        "s": "例如 ≈ 比如",
        "m": "例如 thiên văn viết, 比如 thiên khẩu ngữ"
      }
    ]
  },
  {
    "n": 28,
    "zh": "举办",
    "py": "jǔbàn",
    "pos": "Động từ",
    "vn": "tổ chức, tiến hành",
    "hv": "cử biện",
    "em": "🎪",
    "lesson": 5,
    "explain": [
      "Tổ chức, tiến hành một hoạt động/sự kiện (nghĩa gần với 举行)."
    ],
    "usage": "Động từ, mang tân ngữ trực tiếp: 举办活动.",
    "collo": [
      "举办活动",
      "举办比赛",
      "举办展览"
    ],
    "ex_zh": "商场也会举办各种各样的活动，降低价格。",
    "ex_py": "Shāngchǎng yě huì jǔbàn gè zhǒng gè yàng de huódòng, jiàngdī jiàgé.",
    "ex_vn": "Trung tâm mua sắm cũng sẽ tổ chức đủ loại hoạt động, hạ giá.",
    "exList": [
      {
        "zh": "商场也会举办各种各样的活动，降低价格。",
        "py": "Shāngchǎng yě huì jǔbàn gè zhǒng gè yàng de huódòng, jiàngdī jiàgé.",
        "vn": "Trung tâm mua sắm cũng sẽ tổ chức đủ loại hoạt động, hạ giá."
      },
      {
        "zh": "学校每年都会举办一次英语比赛。",
        "py": "Xuéxiào měinián dōu huì jǔbàn yí cì Yīngyǔ bǐsài.",
        "vn": "Trường học mỗi năm đều tổ chức một cuộc thi tiếng Anh."
      },
      {
        "zh": "这个城市将举办一场大型展览。",
        "py": "Zhège chéngshì jiāng jǔbàn yì chǎng dàxíng zhǎnlǎn.",
        "vn": "Thành phố này sắp tổ chức một buổi triển lãm quy mô lớn."
      }
    ],
    "hanzi": [
      {
        "c": "办",
        "p": "bàn",
        "type": "左右结构 · Trái-phải (giản thể)",
        "st": 4,
        "ord": "力 (lực) trái/phải kèm 、",
        "rad": "力 (lực – sức)",
        "mean": "làm, xử lý",
        "tip": "Bộ sức lực 力 (bỏ công sức làm việc) → mở rộng thành LÀM, XỬ LÝ, kết hợp 举(tổ chức, nâng lên) thành 举办 = TỔ CHỨC, TIẾN HÀNH.",
        "cf": "办 dễ nhầm với 为 (wéi – \"làm\")",
        "w": "举办 / 办法 / 办公室"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Cứ đến ngày lễ, trung tâm mua sắm cũng sẽ tổ chức đủ loại hoạt động, hạ giá cả xuống.",
        "answer": "一到节日，商场也会举办各种各样的活动，降低价格。",
        "answerPy": "Yí dào jiérì, shāngchǎng yě huì jǔbàn gè zhǒng gè yàng de huódòng, jiàngdī jiàgé.",
        "note": "举办……活动 kết hợp 降低/价格, ôn lại nhiều từ vựng của bài.",
        "pair": "一……也……"
      },
      {
        "promptLang": "vi",
        "prompt": "Trường sắp tổ chức một hoạt động, không những rất có ý nghĩa mà tất cả các bạn đều tham gia được.",
        "answer": "学校马上要举办一个活动，不但很有意义，而且所有同学都能参加。",
        "answerPy": "Xuéxiào mǎshàng yào jǔbàn yí ge huódòng, búdàn hěn yǒu yìyì, érqiě suǒyǒu tóngxué dōu néng cānjiā.",
        "note": "举办 nhấn người đứng ra tổ chức; 举行 nhấn sự việc diễn ra.",
        "pair": "不但……而且……"
      }
    ],
    "colloFull": [
      {
        "zh": "举办活动",
        "py": "jǔbàn huódòng",
        "vn": "tổ chức hoạt động"
      },
      {
        "zh": "举办比赛",
        "py": "jǔbàn bǐsài",
        "vn": "tổ chức cuộc thi"
      },
      {
        "zh": "举办展览",
        "py": "jǔbàn zhǎnlǎn",
        "vn": "tổ chức triển lãm"
      },
      {
        "zh": "学校举办",
        "py": "xuéxiào jǔbàn",
        "vn": "trường tổ chức"
      },
      {
        "zh": "举办各种活动",
        "py": "jǔbàn gè zhǒng huódòng",
        "vn": "tổ chức đủ loại hoạt động"
      }
    ],
    "patterns": [
      {
        "s": "Sub + 举办 + 活动",
        "m": "Ai đứng ra tổ chức hoạt động gì"
      },
      {
        "s": "举办 ≈ 举行",
        "m": "举办 nhấn người đứng ra làm; 举行 nhấn việc diễn ra"
      }
    ]
  },
  {
    "n": 29,
    "zh": "各",
    "py": "gè",
    "pos": "Đại từ",
    "vn": "các, mỗi",
    "hv": "các",
    "em": "🔘",
    "lesson": 5,
    "explain": [
      "Đại từ chỉ mỗi cái/mỗi người trong một tập hợp, không sót cái nào."
    ],
    "usage": "Đại từ, đứng trước danh từ: 各方面, 各种各样.",
    "collo": [
      "各方面",
      "各种各样",
      "各位"
    ],
    "ex_zh": "商场也会举办各种各样的活动。",
    "ex_py": "Shāngchǎng yě huì jǔbàn gè zhǒng gè yàng de huódòng.",
    "ex_vn": "Trung tâm mua sắm cũng sẽ tổ chức đủ loại hoạt động.",
    "exList": [
      {
        "zh": "商场也会举办各种各样的活动。",
        "py": "Shāngchǎng yě huì jǔbàn gè zhǒng gè yàng de huódòng.",
        "vn": "Trung tâm mua sắm cũng sẽ tổ chức đủ loại hoạt động."
      },
      {
        "zh": "看了，各方面都介绍得挺不错。",
        "py": "Kànle, gè fāngmiàn dōu jièshào de tǐng búcuò.",
        "vn": "Xem rồi, mỗi phương diện đều được giới thiệu khá tốt."
      },
      {
        "zh": "各位乘客，前方到站是西直门。",
        "py": "Gèwèi chéngkè, qiánfāng dào zhàn shì Xīzhímén.",
        "vn": "Kính thưa quý hành khách, ga phía trước là Tây Trực Môn."
      }
    ],
    "hanzi": [
      {
        "c": "各",
        "p": "gè",
        "type": "上下结构 · Trên-dưới",
        "st": 6,
        "ord": "夂 trên → 口 dưới",
        "rad": "口 (khẩu – miệng)",
        "mean": "mỗi, các",
        "tip": "Chữ mang nghĩa MỖI, RIÊNG BIỆT (như mỗi người có tiếng nói 口 riêng), mở rộng thành CÁC, MỖI.",
        "cf": "名 (míng – \"tên\", khác nghĩa hoàn toàn)",
        "w": "各种各样 / 各位 / 各自"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Cứ đến ngày lễ, trung tâm mua sắm cũng sẽ tổ chức đủ loại hoạt động, hạ giá cả.",
        "answer": "一到节日，商场也会举办各种各样的活动，降低价格。",
        "answerPy": "Yí dào jiérì, shāngchǎng yě huì jǔbàn gè zhǒng gè yàng de huódòng, jiàngdī jiàgé.",
        "note": "各种各样 kết hợp 举办/降低, ôn lại từ vựng của bài.",
        "pair": "一……也……"
      },
      {
        "promptLang": "vi",
        "prompt": "Tôi xem kế hoạch rồi, không những mọi mặt đều giới thiệu khá tốt, mà còn viết rất rõ ràng.",
        "answer": "我看了计划，不仅各方面都介绍得挺不错，而且写得很清楚。",
        "answerPy": "Wǒ kànle jìhuà, bùjǐn gè fāngmiàn dōu jièshào de tǐng búcuò, érqiě xiě de hěn qīngchu.",
        "note": "Sau 各 không dùng 的: 各方面 ✓ / 各的方面 ✗.",
        "pair": "不仅……而且……"
      }
    ],
    "colloFull": [
      {
        "zh": "各方面",
        "py": "gè fāngmiàn",
        "vn": "các phương diện"
      },
      {
        "zh": "各种各样",
        "py": "gè zhǒng gè yàng",
        "vn": "đủ mọi loại"
      },
      {
        "zh": "各位",
        "py": "gè wèi",
        "vn": "các vị"
      },
      {
        "zh": "各个国家",
        "py": "gè gè guójiā",
        "vn": "các nước"
      },
      {
        "zh": "各有优点",
        "py": "gè yǒu yōudiǎn",
        "vn": "mỗi cái có ưu điểm riêng"
      }
    ],
    "patterns": [
      {
        "s": "各 + N (không có 的)",
        "m": "Các, mỗi — 各方面, 各国, 各位"
      },
      {
        "s": "各种各样的 + N",
        "m": "Đủ mọi loại …"
      }
    ]
  },
  {
    "n": 30,
    "zh": "降低",
    "py": "jiàngdī",
    "pos": "Động từ",
    "vn": "giảm, hạ",
    "hv": "giáng đê",
    "em": "📉",
    "lesson": 5,
    "explain": [
      "Làm cho mức độ/giá trị/số lượng giảm xuống thấp hơn."
    ],
    "usage": "Động từ, mang tân ngữ trực tiếp: 降低价格, 降低标准.",
    "collo": [
      "降低价格",
      "降低标准",
      "价格降低"
    ],
    "ex_zh": "商场也会举办各种各样的活动，降低价格。",
    "ex_py": "Shāngchǎng yě huì jǔbàn gè zhǒng gè yàng de huódòng, jiàngdī jiàgé.",
    "ex_vn": "Trung tâm mua sắm cũng sẽ tổ chức đủ loại hoạt động, hạ giá.",
    "exList": [
      {
        "zh": "商场也会举办各种各样的活动，降低价格。",
        "py": "Shāngchǎng yě huì jǔbàn gè zhǒng gè yàng de huódòng, jiàngdī jiàgé.",
        "vn": "Trung tâm mua sắm cũng sẽ tổ chức đủ loại hoạt động, hạ giá."
      },
      {
        "zh": "公司决定降低产品的价格。",
        "py": "Gōngsī juédìng jiàngdī chǎnpǐn de jiàgé.",
        "vn": "Công ty quyết định hạ giá sản phẩm."
      },
      {
        "zh": "我们不能降低对质量的标准。",
        "py": "Wǒmen bù néng jiàngdī duì zhìliàng de biāozhǔn.",
        "vn": "Chúng ta không thể hạ thấp tiêu chuẩn về chất lượng."
      }
    ],
    "hanzi": [
      {
        "c": "降",
        "p": "jiàng",
        "type": "左右结构 · Trái-phải",
        "st": 8,
        "ord": "阝(phụ) trái → 夅 phải",
        "rad": "阝 (phụ – gò đất)",
        "mean": "hạ xuống",
        "tip": "Bộ 阝(gò đất, ngọn đồi) + 夅(biểu âm) → đi XUỐNG từ trên gò đất, mở rộng thành HẠ XUỐNG, kết hợp 低(thấp) thành 降低 = GIẢM, HẠ.",
        "cf": "洚 (jiàng – ít dùng)",
        "w": "降低 / 下降 / 降落"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Cứ đến ngày lễ, trung tâm mua sắm cũng sẽ hạ giá, chúng ta lúc đó cũng có thể mua được đồ vừa rẻ vừa tốt.",
        "answer": "一到节日，商场也会降低价格，这个时候我们也可以买到又便宜又好的东西。",
        "answerPy": "Yí dào jiérì, shāngchǎng yě huì jiàngdī jiàgé, zhège shíhou wǒmen yě kěyǐ mǎidào yòu piányi yòu hǎo de dōngxi.",
        "note": "降低价格 kết hợp 价格, ôn lại từ vựng của bài.",
        "pair": "又……又……"
      },
      {
        "promptLang": "vi",
        "prompt": "Chúng ta không thể vì giá rẻ mà hạ thấp tiêu chuẩn chất lượng.",
        "answer": "我们不能因为价格便宜就降低质量标准。",
        "answerPy": "Wǒmen bù néng yīnwèi jiàgé piányi jiù jiàngdī zhìliàng biāozhǔn.",
        "note": "降低……标准 kết hợp 标准, ôn lại từ vựng Bài 5.",
        "pair": "因为……"
      }
    ],
    "colloFull": [
      {
        "zh": "降低价格",
        "py": "jiàngdī jiàgé",
        "vn": "hạ giá"
      },
      {
        "zh": "降低标准",
        "py": "jiàngdī biāozhǔn",
        "vn": "hạ tiêu chuẩn"
      },
      {
        "zh": "价格降低",
        "py": "jiàgé jiàngdī",
        "vn": "giá hạ xuống"
      },
      {
        "zh": "降低要求",
        "py": "jiàngdī yāoqiú",
        "vn": "hạ yêu cầu"
      },
      {
        "zh": "降低一半",
        "py": "jiàngdī yíbàn",
        "vn": "giảm một nửa"
      }
    ],
    "patterns": [
      {
        "s": "降低 + 价格 / 标准 / 要求",
        "m": "Hạ giá, hạ chuẩn, hạ yêu cầu"
      },
      {
        "s": "降低 ↔ 提高",
        "m": "Hạ xuống ↔ nâng lên"
      }
    ]
  },
  {
    "n": 31,
    "zh": "张远",
    "py": "Zhāng Yuǎn",
    "pos": "Danh từ riêng",
    "vn": "Trương Viễn (tên người)",
    "hv": "Trương Viễn",
    "em": "🧑",
    "lesson": 1,
    "explain": [
      "Tên riêng của nhân vật nam, bạn của Lý Tiến, xuất hiện lại từ Bài 2."
    ],
    "usage": "Danh từ riêng chỉ tên người.",
    "collo": [
      "张远说",
      "张远和李进"
    ],
    "ex_zh": "张远和李进聊李进昨晚的购物经历。",
    "ex_py": "Zhāng Yuǎn hé Lǐ Jìn liáo Lǐ Jìn zuówǎn de gòuwù jīnglì.",
    "ex_vn": "Trương Viễn và Lý Tiến nói chuyện về trải nghiệm mua sắm tối qua của Lý Tiến.",
    "exList": [
      {
        "zh": "张远和李进聊李进昨晚的购物经历。",
        "py": "Zhāng Yuǎn hé Lǐ Jìn liáo Lǐ Jìn zuówǎn de gòuwù jīnglì.",
        "vn": "Trương Viễn và Lý Tiến nói chuyện về trải nghiệm mua sắm tối qua của Lý Tiến."
      }
    ]
  },
  {
    "n": 32,
    "zh": "李进",
    "py": "Lǐ Jìn",
    "pos": "Danh từ riêng",
    "vn": "Lý Tiến (tên người)",
    "hv": "Lý Tiến",
    "em": "🧑",
    "lesson": 1,
    "explain": [
      "Tên riêng của chồng王静, xuất hiện lại từ Bài 5."
    ],
    "usage": "Danh từ riêng chỉ tên người.",
    "collo": [
      "李进说",
      "王静和李进"
    ],
    "ex_zh": "昨天妻子让我陪她去超市买果汁。",
    "ex_py": "Zuótiān qīzi ràng wǒ péi tā qù chāoshì mǎi guǒzhī.",
    "ex_vn": "Hôm qua vợ bảo tôi đi cùng cô ấy ra siêu thị mua nước trái cây.",
    "exList": [
      {
        "zh": "李进在商场买行李箱。",
        "py": "Lǐ Jìn zài shāngchǎng mǎi xínglixiāng.",
        "vn": "Lý Tiến mua vali ở trung tâm mua sắm."
      }
    ]
  },
  {
    "n": 33,
    "zh": "王静",
    "py": "Wáng Jìng",
    "pos": "Danh từ riêng",
    "vn": "Vương Tĩnh (tên người)",
    "hv": "Vương Tĩnh",
    "em": "👩",
    "lesson": 2,
    "explain": [
      "Tên riêng của vợ李进, xuất hiện lại từ Bài 5."
    ],
    "usage": "Danh từ riêng chỉ tên người.",
    "collo": [
      "王静说",
      "王静在商店"
    ],
    "ex_zh": "王静在商店买西红柿。",
    "ex_py": "Wáng Jìng zài shāngdiàn mǎi xīhóngshì.",
    "ex_vn": "Vương Tĩnh mua cà chua ở cửa hàng.",
    "exList": [
      {
        "zh": "王静在商店买西红柿。",
        "py": "Wáng Jìng zài shāngdiàn mǎi xīhóngshì.",
        "vn": "Vương Tĩnh mua cà chua ở cửa hàng."
      }
    ]
  }
];

var wuData = [
  {img:'🧃',label:'果汁',py:'guǒzhī',letter:'A'},
  {img:'🧦',label:'袜子',py:'wàzi',letter:'B'},
  {img:'🍅',label:'西红柿',py:'xīhóngshì',letter:'C'},
  {img:'🧴',label:'皮肤',py:'pífū',letter:'D'},
  {img:'🔧',label:'修理',py:'xiūlǐ',letter:'E'},
  {img:'📖',label:'小说',py:'xiǎoshuō',letter:'F'},
];

var dialogData = [
  {scene:'课文1 · 张远和李进聊李进昨晚的购物经历',
   preQuiz:[{q:'李进为什么没接张远的电话？',opts:['手机没电了','把手机忘在家里了','没听到手机响'],ans:1},{q:'李进的妻子在商场买了什么？',opts:['一条裤子、一件衬衫、两双袜子','一件大衣','一双鞋'],ans:0},{q:'回家以后李进发现了什么？',opts:['忘了买果汁','忘了带钱','忘了关门'],ans:0}],
   lines:[
     {sp:0,zh:'昨天晚上我给你打电话一直没人接，你忙什么呢？',py:'Zuótiān wǎnshang wǒ gěi nǐ dǎ diànhuà yìzhí méi rén jiē, nǐ máng shénme ne?',vn:'Tối qua tôi gọi điện cho bạn mãi không ai nghe, bạn bận gì vậy?'},
     {sp:1,zh:'昨天妻子让我陪她去超市买果汁。我把手机忘在家里了。',py:'Zuótiān qīzi ràng wǒ péi tā qù chāoshì mǎi guǒzhī. Wǒ bǎ shǒujī wàng zài jiā li le.',vn:'Hôm qua vợ bảo tôi đi cùng cô ấy ra siêu thị mua nước trái cây. Tôi để quên điện thoại ở nhà rồi.'},
     {sp:0,zh:'买这么点儿东西也用不了那么长时间啊！',py:'Mǎi zhème diǎnr dōngxi yě yòng bu liǎo nàme cháng shíjiān a!',vn:'Mua ít đồ như vậy cũng không cần nhiều thời gian đến thế đâu!'},
     {sp:1,zh:'我们先去逛了会儿商场。一进门，售货员就热情地为我们介绍这、介绍那，她买了一条裤子、一件衬衫、两双袜子，然后我们就高高兴兴地回家了。',py:'Wǒmen xiān qù guàngle huìr shāngchǎng. Yí jìn mén, shòuhuòyuán jiù rèqíng de wèi wǒmen jièshào zhè, jièshào nà, tā mǎile yì tiáo kùzi, yí jiàn chènshān, liǎng shuāng wàzi, ránhòu wǒmen jiù gāogāoxìngxìng de huí jiā le.',vn:'Chúng tôi trước tiên đi dạo trong trung tâm mua sắm một lúc. Vừa vào cửa, nhân viên bán hàng liền nhiệt tình giới thiệu cho chúng tôi cái này cái kia, cô ấy mua một cái quần, một cái áo sơ mi, hai đôi tất, sau đó chúng tôi vui vẻ về nhà.'},
     {sp:0,zh:'买东西时我只看自己想买的，而且喜欢自己看、自己选，不希望被别人打扰。',py:'Mǎi dōngxi shí wǒ zhǐ kàn zìjǐ xiǎng mǎi de, érqiě xǐhuan zìjǐ kàn, zìjǐ xuǎn, bù xīwàng bèi biéren dǎrǎo.',vn:'Khi mua đồ tôi chỉ xem cái mình muốn mua, hơn nữa thích tự mình xem, tự mình chọn, không muốn bị người khác làm phiền.'},
     {sp:1,zh:'是啊！回家以后，我才发现，竟然忘了去商场的超市买果汁！',py:'Shì a! Huí jiā yǐhòu, wǒ cái fāxiàn, jìngrán wàngle qù shāngchǎng de chāoshì mǎi guǒzhī!',vn:'Đúng vậy! Về nhà rồi, tôi mới phát hiện, không ngờ lại quên mất việc ra siêu thị ở trung tâm mua sắm mua nước trái cây!'},
   ]},
  {scene:'课文2 · 王静在商店买西红柿',
   preQuiz:[{q:'今天西红柿多少钱一斤？',opts:['三块五','七块','十四块'],ans:1},{q:'昨天西红柿多少钱一斤？',opts:['三块五','七块','十四块'],ans:0},{q:'售货员说吃这种西红柿有什么好处？',opts:['对皮肤有好处','能减肥','能睡得好'],ans:0}],
   lines:[
     {sp:0,zh:'西红柿新鲜吗？怎么卖？',py:'Xīhóngshì xīnxiān ma? Zěnme mài?',vn:'Cà chua có tươi không? Bán thế nào?'},
     {sp:1,zh:'七块钱一斤，您放心，保证百分之百新鲜。',py:'Qī kuài qián yì jīn, nín fàngxīn, bǎozhèng bǎi fēn zhī bǎi xīnxiān.',vn:'Bảy tệ một cân, chị yên tâm, cam đoan tươi 100%.'},
     {sp:0,zh:'怎么这么贵啊！我记得昨天才三块五一斤，今天的价格是昨天的两倍。',py:'Zěnme zhème guì a! Wǒ jìde zuótiān cái sān kuài wǔ yì jīn, jīntiān de jiàgé shì zuótiān de liǎng bèi.',vn:'Sao đắt vậy! Tôi nhớ hôm qua mới ba tệ rưỡi một cân, giá hôm nay gấp đôi hôm qua.'},
     {sp:1,zh:'您问的这种是"绿色"的。一分钱一分货。每天吃一两个这种新鲜的西红柿，对皮肤有好处。',py:'Nín wèn de zhè zhǒng shì "lǜsè" de. Yì fēn qián yì fēn huò. Měitiān chī yì-liǎng ge zhè zhǒng xīnxiān de xīhóngshì, duì pífū yǒu hǎochù.',vn:'Loại chị hỏi là loại "xanh sạch". Tiền nào của nấy. Mỗi ngày ăn một hai quả cà chua tươi loại này, có lợi cho da.'},
     {sp:0,zh:'好，那我先买几个尝尝。',py:'Hǎo, nà wǒ xiān mǎi jǐ ge chángchang.',vn:'Được, vậy tôi mua vài quả nếm thử trước đã.'},
     {sp:1,zh:'好的，给您西红柿，一共两斤，十四块。',py:'Hǎode, gěi nín xīhóngshì, yígòng liǎng jīn, shísì kuài.',vn:'Vâng, cà chua của chị đây, tổng cộng hai cân, mười bốn tệ.'},
   ]},
  {scene:'课文3 · 李进在商场买行李箱',
   preQuiz:[{q:'这个行李箱打完折是多少钱？',opts:['899','999','1099'],ans:1},{q:'顾客想买什么样的行李箱？',opts:['轻一点儿的','大一点儿的','便宜一点儿的'],ans:0},{q:'商场在多长时间内负责免费修理？',opts:['一个月','半年','一年'],ans:2}],
   lines:[
     {sp:0,zh:'先生，我们店的行李箱都在这里，请问您要什么样的？',py:'Xiānsheng, wǒmen diàn de xínglixiāng dōu zài zhèli, qǐngwèn nín yào shénmeyàng de?',vn:'Thưa anh, vali của cửa hàng chúng tôi đều ở đây, xin hỏi anh muốn loại nào?'},
     {sp:1,zh:'我想买一个轻一点儿的。',py:'Wǒ xiǎng mǎi yí ge qīng yìdiǎnr de.',vn:'Tôi muốn mua một cái nhẹ hơn một chút.'},
     {sp:0,zh:'您看看这个，不管从价格方面看，还是从质量上看，都是值得考虑的。',py:'Nín kànkan zhège, bùguǎn cóng jiàgé fāngmiàn kàn, háishi cóng zhìliàng shang kàn, dōu shì zhídé kǎolǜ de.',vn:'Anh xem cái này, bất kể từ góc độ giá cả mà xem, hay từ chất lượng mà xem, đều đáng để cân nhắc.'},
     {sp:1,zh:'质量是不错。请问这个多少钱？',py:'Zhìliàng shì búcuò. Qǐngwèn zhège duōshao qián?',vn:'Chất lượng đúng là tốt. Xin hỏi cái này giá bao nhiêu?'},
     {sp:0,zh:'现在我们商场正好有打折活动，打完折是999。另外，一年内我们都负责免费修理。',py:'Xiànzài wǒmen shāngchǎng zhènghǎo yǒu dǎzhé huódòng, dǎwán zhé shì jiǔbǎi jiǔshí jiǔ. Lìngwài, yì nián nèi wǒmen dōu fùzé miǎnfèi xiūlǐ.',vn:'Hiện tại trung tâm mua sắm chúng tôi đúng lúc có chương trình giảm giá, giảm xong còn 999. Ngoài ra, trong vòng một năm chúng tôi đều chịu trách nhiệm sửa chữa miễn phí.'},
     {sp:1,zh:'你们的服务不错，价格也可以，就买这个吧。',py:'Nǐmen de fúwù búcuò, jiàgé yě kěyǐ, jiù mǎi zhège ba.',vn:'Dịch vụ của các bạn tốt, giá cả cũng được, mua cái này đi.'},
   ]},
  {scene:'课文4 · Thông báo khuyến mãi cửa hàng sách',
   preQuiz:[{q:'购书满500元可以得到什么？',opts:['一本词典','免费办会员卡','一个笔记本'],ans:1},{q:'购书满100元送什么？',opts:['一个笔记本','一本词典','一张地图'],ans:0},{q:'小说打几折？',opts:['六折','7.5折','八折'],ans:1}],
   lines:[
     {sp:0,zh:'顾客朋友们，为了感谢大家的支持，我们书店今天举行"购书送好礼"活动；购书满100元送一个笔记本，满200元送一本词典。',py:'Gùkè péngyoumen, wèile gǎnxiè dàjiā de zhīchí, wǒmen shūdiàn jīntiān jǔxíng "gòu shū sòng hǎo lǐ" huódòng; gòu shū mǎn yìbǎi yuán sòng yí ge bǐjìběn, mǎn èrbǎi yuán sòng yì běn cídiǎn.',vn:'Các bạn khách hàng thân mến, để cảm ơn sự ủng hộ của mọi người, cửa hàng sách chúng tôi hôm nay tổ chức chương trình "mua sách tặng quà"; mua sách đủ 100 tệ tặng một cuốn sổ tay, đủ 200 tệ tặng một cuốn từ điển.'},
     {sp:0,zh:'另外，一些图书还有打折活动，其中，小说7.5折，地图8折，留学考试用书6折。如果购书满500元可免费办会员卡，以后购书可打8折。',py:'Lìngwài, yìxiē túshū hái yǒu dǎzhé huódòng, qízhōng, xiǎoshuō qīwǔ zhé, dìtú bā zhé, liúxué kǎoshì yòngshū liù zhé. Rúguǒ gòu shū mǎn wǔbǎi yuán kě miǎnfèi bàn huìyuánkǎ, yǐhòu gòu shū kě dǎ bā zhé.',vn:'Ngoài ra, một số sách còn có chương trình giảm giá, trong đó, tiểu thuyết giảm 25%, bản đồ giảm 20%, sách thi du học giảm 40%. Nếu mua sách đủ 500 tệ có thể làm thẻ hội viên miễn phí, sau này mua sách có thể được giảm 8 phần.'},
     {sp:0,zh:'今天过生日的朋友和所有的小朋友还可以获得一份小礼物。欢迎大家选购！',py:'Jīntiān guò shēngrì de péngyou hé suǒyǒu de xiǎopéngyou hái kěyǐ huòdé yí fèn xiǎo lǐwù. Huānyíng dàjiā xuǎngòu!',vn:'Bạn nào hôm nay sinh nhật và tất cả các bạn nhỏ còn có thể nhận được một món quà nhỏ. Hoan nghênh mọi người chọn mua!'},
   ]},
  {scene:'课文5 · Vì sao "tiền nào của nấy"',
   preQuiz:[{q:'“一分钱一分货”是什么意思？',opts:['质量和价格有很大的关系','东西越便宜越好','价格不重要'],ans:0},{q:'什么时候质量很好的东西也会很便宜？',opts:['换季或者节日打折的时候','任何时候都不会','只有在网上'],ans:0},{q:'春天来了，什么会打折？',opts:['冬天的衣服','夏天的水果','新出的手机'],ans:0}],
   lines:[
     {sp:0,zh:'人们常说"一分钱一分货"，意思是东西的质量和价格有很大的关系，也可以说"便宜没好货，好货不便宜"，一般情况下，你花的钱越多，买的东西也就越好。',py:'Rénmen cháng shuō "yì fēn qián yì fēn huò", yìsi shì dōngxi de zhìliàng hé jiàgé yǒu hěn dà de guānxi, yě kěyǐ shuō "piányi méi hǎo huò, hǎo huò bù piányi", yìbān qíngkuàng xia, nǐ huā de qián yuè duō, mǎi de dōngxi yě jiù yuè hǎo.',vn:'Người ta thường nói "tiền nào của nấy", nghĩa là chất lượng và giá cả của đồ vật có quan hệ rất lớn với nhau, cũng có thể nói "rẻ không có hàng tốt, hàng tốt không rẻ", trong tình huống thông thường, bạn chi tiền càng nhiều, đồ mua được cũng càng tốt.'},
     {sp:0,zh:'其实也不一定都是这样的。有的时候，质量很好的东西也会很便宜。例如，春天来了，冬天的衣服就会打折，质量很好，还很便宜，花很少的钱就可以买到。',py:'Qíshí yě bù yídìng dōu shì zhèyàng de. Yǒude shíhou, zhìliàng hěn hǎo de dōngxi yě huì hěn piányi. Lìrú, chūntiān lái le, dōngtiān de yīfu jiù huì dǎzhé, zhìliàng hěn hǎo, hái hěn piányi, huā hěn shǎo de qián jiù kěyǐ mǎidào.',vn:'Thực ra cũng không nhất định đều như vậy. Có lúc, đồ chất lượng rất tốt cũng sẽ rất rẻ. Ví dụ như, mùa xuân đến, quần áo mùa đông sẽ giảm giá, chất lượng rất tốt, lại còn rẻ, tốn rất ít tiền là có thể mua được.'},
     {sp:0,zh:'一到节日，商场也会举办各种各样的活动，降低价格，这个时候我们也可以买到又便宜又好的东西。',py:'Yí dào jiérì, shāngchǎng yě huì jǔbàn gè zhǒng gè yàng de huódòng, jiàngdī jiàgé, zhège shíhou wǒmen yě kěyǐ mǎidào yòu piányi yòu hǎo de dōngxi.',vn:'Cứ đến ngày lễ, trung tâm mua sắm cũng sẽ tổ chức đủ loại hoạt động, hạ giá, lúc này chúng ta cũng có thể mua được đồ vừa rẻ vừa tốt.'},
   ]},
];

var matchData = [
  {left:'售货员',right:'售货员就'},
  {left:'打扰',right:'不希望被打扰'},
  {left:'竟然',right:'竟然忘了'},
  {left:'百分之',right:'百分之百'},
  {left:'尝',right:'先买几个尝尝'},
  {left:'值得',right:'值得考虑'},
  {left:'免费',right:'免费修理'},
  {left:'满',right:'满100元'},
  {left:'其中',right:'其中，小说'},
  {left:'降低',right:'降低价格'},
];

var fillData = [
  {pre:'昨天妻子让我陪她去超市买',blank:'',post:'。',hint:'guǒzhī',ans:'果汁'},
  {pre:'一进门，',blank:'',post:'就热情地为我们介绍这、介绍那。',hint:'shòuhuòyuán',ans:'售货员'},
  {pre:'买东西时我只看自己想买的，不希望被别人',blank:'',post:'。',hint:'dǎrǎo',ans:'打扰'},
  {pre:'回家以后，我才发现，',blank:'',post:'忘了去商场的超市买果汁！',hint:'jìngrán',ans:'竟然'},
  {pre:'您放心，保证',blank:'',post:'百新鲜。',hint:'bǎifēnzhī',ans:'百分之'},
  {pre:'今天的价格是昨天的两',blank:'',post:'。',hint:'bèi',ans:'倍'},
  {pre:'每天吃一两个这种新鲜的西红柿，对',blank:'',post:'有好处。',hint:'pífū',ans:'皮肤'},
  {pre:'好，那我先买几个',blank:'',post:'。',hint:'chángchang',ans:'尝尝'},
  {pre:'我想买一个',blank:'',post:'一点儿的。',hint:'qīng',ans:'轻'},
  {pre:'不管从价格方面看，还是从质量上看，都是',blank:'',post:'考虑的。',hint:'zhídé',ans:'值得'},
  {pre:'一年内我们都负责',blank:'',post:'修理。',hint:'miǎnfèi',ans:'免费'},
  {pre:'为了感谢大家的',blank:'',post:'，我们书店今天举行活动。',hint:'zhīchí',ans:'支持'},
  {pre:'购书',blank:'',post:'100元送一个笔记本。',hint:'mǎn',ans:'满'},
  {pre:'一些图书还有打折活动，',blank:'',post:'，小说7.5折。',hint:'qízhōng',ans:'其中'},
  {pre:'商场也会举办各种各样的活动，',blank:'',post:'价格。',hint:'jiàngdī',ans:'降低'},
];

var sortData = [
  {words:['昨天','晚上','我','给','你','打电话','一直','没','人','接'],ans:'昨天晚上我给你打电话一直没人接',audio:'昨天晚上我给你打电话一直没人接'},
  {words:['西红柿','新鲜','吗','？','怎么','卖','？'],ans:'西红柿新鲜吗？怎么卖？',audio:'西红柿新鲜吗？怎么卖？'},
  {words:['今天','的','价格','是','昨天','的','两倍'],ans:'今天的价格是昨天的两倍',audio:'今天的价格是昨天的两倍'},
  {words:['我','想','买','一个','轻','一点儿','的'],ans:'我想买一个轻一点儿的',audio:'我想买一个轻一点儿的'},
  {words:['不管','从','价格','方面','看','，','还是','从','质量','上','看'],ans:'不管从价格方面看，还是从质量上看',audio:'不管从价格方面看，还是从质量上看'},
  {words:['为了','感谢','大家','的','支持','，','我们','书店','今天','举行','活动'],ans:'为了感谢大家的支持，我们书店今天举行活动',audio:'为了感谢大家的支持，我们书店今天举行活动'},
  {words:['人们','常','说','一分钱','一分货'],ans:'人们常说一分钱一分货',audio:'人们常说一分钱一分货'},
  {words:['一','到','节日','，','商场','也','会','举办','各种各样','的','活动'],ans:'一到节日，商场也会举办各种各样的活动',audio:'一到节日，商场也会举办各种各样的活动'},
];

var errorFixMode = 'wordchoice';
var errorFixData = [
  {wrong:'喂，孙阿姨吗？我是小周。不好意思这么晚____您。',
   opts:['打扰','支持','皮肤','百分之'],ans:0,
   exp:'打扰 (làm phiền) phù hợp với ngữ cảnh gọi điện muộn. 支持 (ủng hộ)、皮肤 (da)、百分之 (phần trăm) đều không phù hợp nghĩa.'},
  {wrong:'谢谢大家这一年来对我的____和帮助，能和大家一起工作，我感到非常高兴。',
   opts:['售货员','皮肤','支持','百分之'],ans:2,
   exp:'支持 (ủng hộ) đi với 帮助 (giúp đỡ): 支持和帮助. Các từ còn lại không phải danh từ trừu tượng chỉ sự ủng hộ.'},
  {wrong:'王小姐在商场买裙子。她从试衣间出来后，____说："您穿这条裙子有点儿大。"',
   opts:['支持','打扰','售货员','百分之'],ans:2,
   exp:'售货员 (nhân viên bán hàng) là chủ ngữ hợp lý cho hành động "nói" trong ngữ cảnh mua sắm. Các từ còn lại không phải danh từ chỉ người.'},
  {wrong:'我们调查的近七千名上班族中，有____六十四的人经常加班。',
   opts:['皮肤','百分之','支持','打扰'],ans:1,
   exp:'百分之 + số — cách nói tỷ lệ phần trăm: 百分之六十四. Các từ còn lại không dùng để biểu thị tỷ lệ.'},
  {wrong:'这种水不仅很好喝，用它来洗脸对____也很有好处，所以价格要比其他水贵一些。',
   opts:['售货员','打扰','支持','皮肤'],ans:3,
   exp:'皮肤 (da) phù hợp với ngữ cảnh "rửa mặt có lợi cho...". Các từ còn lại không phải bộ phận cơ thể.'},
  {wrong:'A：你____了吗？这次蛋糕做得怎么样？B：很好吃，没想到你水平提高了这么多。',
   opts:['尝','轻','内','满'],ans:0,
   exp:'尝 (nếm thử) phù hợp với ngữ cảnh đánh giá món bánh. Các từ còn lại không mang nghĩa nếm/thử.'},
  {wrong:'A：计划书你看了没？B：看了，____方面都介绍得挺不错。',
   opts:['轻','内','满','各'],ans:3,
   exp:'各方面 (mỗi phương diện) là cụm cố định. Các từ còn lại không kết hợp được với 方面.'},
  {wrong:'A：这个纸箱里面是酒，麻烦您搬的时候____一点儿。B：好的，我会注意的。',
   opts:['内','满','各','轻'],ans:3,
   exp:'轻一点儿 (nhẹ tay hơn một chút) phù hợp với việc khiêng đồ dễ vỡ. Các từ còn lại không phải tính từ chỉ trọng lượng.'},
  {wrong:'A：现在买沙发，能免费送货上门吗？B：可以，我们三日____给您送到。',
   opts:['满','各','轻','内'],ans:3,
   exp:'内 (trong vòng) đi với khoảng thời gian: 三日内 = trong vòng ba ngày. Các từ còn lại không mang nghĩa phạm vi thời gian.'},
  {wrong:'A：今天购物____四百元的顾客可以免费获得一份小礼物。B：咱们已经买了三百八十多了，再买两双袜子就够了。',
   opts:['各','内','轻','满'],ans:3,
   exp:'满 (đạt đủ mức) đi với số tiền: 满四百元 = đủ 400 tệ. Các từ còn lại không mang nghĩa đạt đến mức số lượng.'},
];

var speakingData = {
  mode: 'ai-speak',
  intro: 'Mỗi câu hỏi là một tình huống thật trong đời sống, dùng đúng từ vựng và mẫu câu của Bài 6. Bấm 🎙️ rồi trả lời bằng tiếng Trung — AI sẽ nghe, ghi lại câu bạn nói và chấm điểm theo Nội dung · Mẫu câu · Từ vựng · Độ trôi chảy. Nên tự trả lời trước rồi mới mở “Câu mẫu” để đối chiếu.',
  tasks: [
    {
      situation: 'Bạn và bạn bè tranh luận về câu "tiền nào của nấy".',
      q_zh: '你觉得“一分钱一分货”这句话对吗？为什么？',
      q_py: 'Nǐ juéde "yì fēn qián yì fēn huò" zhè jù huà duì ma? Wèishénme?',
      q_vn: 'Bạn thấy câu "tiền nào của nấy" có đúng không? Vì sao?',
      grammar: { label: '其实……，例如…… (nêu ý thật và ví dụ)', any: ['其实', '例如'] },
      need: [
        { label: 'Nêu quan điểm đồng ý hay không', any: ['对', '不对', '不一定', '同意'] },
        { label: 'Đưa ví dụ cụ thể', any: ['例如', '比如', '打折', '活动', '便宜', '质量'] }
      ],
      bonus: { label: 'Dùng 值得 nhận xét món hàng', any: ['值得'] },
      vocab: ['例如', '值得', '降低'],
      minLen: 22,
      sample: '我觉得不一定。其实打折的时候，质量很好的东西也会降低价格，例如上个月我买的那双鞋就很值得买。',
      sample_py: 'Wǒ juéde bù yí dìng. Qíshí dǎzhé de shíhou, zhìliàng hěn hǎo de dōngxi yě huì jiàngdī jiàgé, lìrú shàng ge yuè wǒ mǎi de nà shuāng xié jiù hěn zhídé mǎi.',
      sample_vn: 'Tôi thấy không hẳn. Thật ra khi giảm giá, đồ chất lượng tốt cũng hạ giá, ví dụ đôi giày tôi mua tháng trước rất đáng mua.',
      tip: '例如 / 比如 dùng để nêu ví dụ; 值得 + động từ: 值得考虑、值得买。'
    },
    {
      situation: 'Trong cửa hàng, nhân viên đi theo bạn giới thiệu liên tục.',
      q_zh: '买东西的时候，你希望售货员一直跟着介绍，还是自己看、自己选？',
      q_py: 'Mǎi dōngxi de shíhou, nǐ xīwàng shòuhuòyuán yì zhí gēn zhe jièshào, háishi zìjǐ kàn, zìjǐ xuǎn?',
      q_vn: 'Khi mua đồ, bạn muốn nhân viên đi theo giới thiệu hay tự mình xem, tự chọn?',
      grammar: { label: '被 + người + 打扰 (bị làm phiền)', any: ['打扰', '被'] },
      need: [
        { label: 'Nói bạn thích kiểu nào', any: ['自己', '售货员', '介绍', '喜欢'] },
        { label: 'Nêu lý do', any: ['打扰', '安静', '考虑', '慢慢', '压力'] }
      ],
      bonus: { label: 'Nói khi nào bạn mới cần nhân viên tư vấn', any: ['问', '需要', '不懂', '大小'] },
      vocab: ['售货员', '打扰', '情况'],
      minLen: 22,
      sample: '我更喜欢自己看、自己选，不希望一直被售货员打扰。不过要是遇到不懂的情况，我会主动问他们。',
      sample_py: 'Wǒ gèng xǐhuan zìjǐ kàn, zìjǐ xuǎn, bù xīwàng yì zhí bèi shòuhuòyuán dǎrǎo. Búguò yàoshi yùdào bù dǒng de qíngkuàng, wǒ huì zhǔ dòng wèn tāmen.',
      sample_vn: 'Tôi thích tự xem, tự chọn hơn, không muốn bị nhân viên làm phiền suốt. Nhưng nếu gặp tình huống không hiểu thì tôi sẽ chủ động hỏi họ.',
      tip: '打扰 = làm phiền: 对不起，打扰一下。'
    },
    {
      situation: 'Bạn kể một lần đãng trí khiến cả nhóm bật cười.',
      q_zh: '你有没有过竟然忘记做某件事的经历？',
      q_py: 'Nǐ yǒu méiyǒu guo jìngrán wàngjì zuò mǒu jiàn shì de jīnglì?',
      q_vn: 'Bạn từng có trải nghiệm không ngờ lại quên làm một việc gì chưa?',
      grammar: { label: '竟然 (không ngờ lại…)', any: ['竟然'] },
      need: [
        { label: 'Dùng 竟然', any: ['竟然'] },
        { label: 'Kể việc bị quên', any: ['忘', '买', '带', '关', '通知', '作业'] }
      ],
      bonus: { label: 'Nói kết quả hoặc cách xử lý', any: ['只好', '后来', '再', '又'] },
      vocab: ['竟然', '情况', '所有'],
      minLen: 22,
      sample: '有。有一次我去超市买了所有的东西，回家以后才发现，竟然忘了买最重要的那样，只好又出去了一趟。',
      sample_py: 'Yǒu. Yǒu yí cì wǒ qù chāoshì mǎi le suǒyǒu de dōngxi, huí jiā yǐhòu cái fāxiàn, jìngrán wàng le mǎi zuì zhòngyào de nà yàng, zhǐhǎo yòu chū qù le yí tàng.',
      sample_vn: 'Có. Có lần tôi ra siêu thị mua tất cả mọi thứ, về nhà mới phát hiện không ngờ lại quên mua đúng món quan trọng nhất, đành phải đi thêm một chuyến.',
      tip: '竟然 đứng trước động từ, thể hiện sự bất ngờ: 他竟然不知道。'
    },
    {
      situation: 'Bạn chọn giữa hai món đồ: một rẻ và một bền hơn.',
      q_zh: '你买东西时更看重价格方面，还是质量方面？',
      q_py: 'Nǐ mǎi dōngxi shí gèng kàn zhòng jiàgé fāngmiàn, háishi zhìliàng fāngmiàn?',
      q_vn: 'Khi mua đồ bạn coi trọng mặt giá cả hay mặt chất lượng hơn?',
      grammar: { label: '不管从……方面看，还是从……上看，都……', any: ['不管', '方面'] },
      need: [
        { label: 'Dùng 方面 so sánh hai mặt', any: ['方面', '价格', '质量'] },
        { label: 'Nêu lựa chọn và lý do', any: ['重要', '值得', '用', '久', '便宜'] }
      ],
      bonus: { label: 'Dùng 不管……都…… nhấn mạnh', any: ['不管'] },
      vocab: ['方面', '值得', '倍'],
      minLen: 22,
      sample: '不管从价格方面看，还是从质量上看，我都觉得质量更重要。质量好的东西就算贵一倍，也能用很多年，很值得。',
      sample_py: 'Bùguǎn cóng jiàgé fāngmiàn kàn, háishi cóng zhìliàng shàng kàn, wǒ dōu juéde zhìliàng gèng zhòngyào. Zhìliàng hǎo de dōngxi jiù suàn guì yí bèi, yě néng yòng hěn duō nián, hěn zhídé.',
      sample_vn: 'Dù xét về giá hay về chất lượng, tôi đều thấy chất lượng quan trọng hơn. Đồ tốt dù đắt gấp đôi cũng dùng được nhiều năm, rất đáng.',
      tip: '倍 = lần (bội số): 贵一倍 = đắt gấp đôi.'
    },
    {
      situation: 'Trung tâm thương mại đang có đợt khuyến mãi lớn dịp lễ.',
      q_zh: '你参加过商场的打折活动吗？说说你的购物经历。',
      q_py: 'Nǐ cānjiā guo shāng chǎng de dǎzhé huódòng ma? Shuōshuo nǐ de gòuwù jīnglì.',
      q_vn: 'Bạn từng tham gia đợt giảm giá của trung tâm thương mại chưa? Kể trải nghiệm mua sắm của bạn.',
      grammar: { label: '举办 + 活动; 降低 + 价格', any: ['举办', '降低'] },
      need: [
        { label: 'Nói về hoạt động giảm giá', any: ['活动', '打折', '举办', '降低', '节日'] },
        { label: 'Kể món đồ đã mua', any: ['买', '衣服', '鞋', '袜子', '果汁', '东西'] }
      ],
      bonus: { label: 'Nhắc đến ưu đãi khác như 免费 / 修理', any: ['免费', '修理', '其中'] },
      vocab: ['举办', '活动', '降低', '免费'],
      minLen: 22,
      sample: '参加过。一到节日，商场就举办各种各样的活动，降低价格，其中有些东西还免费修理一年，我买到了又便宜又好的衣服。',
      sample_py: 'Cānjiā guo. Yí dào jiérì, shāng chǎng jiù jǔbàn gè zhǒng gè yàng de huódòng, jiàngdī jiàgé, qízhōng yǒuxiē dōngxi hái miǎnfèi xiūlǐ yì nián, wǒ mǎi dào le yòu piányi yòu hǎo de yīfu.',
      sample_vn: 'Có tham gia. Cứ đến lễ là trung tâm tổ chức đủ loại hoạt động, hạ giá, trong đó có món còn được sửa miễn phí một năm, tôi mua được quần áo vừa rẻ vừa tốt.',
      tip: '举办 đi với 活动、比赛、晚会; 举行 cũng tương tự nhưng trang trọng hơn.'
    }
  ]
};

var translateData = [
  {vi:'Hôm qua vợ bảo tôi đi cùng cô ấy ra siêu thị mua nước trái cây.',zh:'昨天妻子让我陪她去超市买果汁。',py:'Zuótiān qīzi ràng wǒ péi tā qù chāoshì mǎi guǒzhī.'},
  {vi:'Về nhà rồi, tôi mới phát hiện, không ngờ lại quên mất việc mua nước trái cây!',zh:'回家以后，我才发现，竟然忘了去商场的超市买果汁！',py:'Huí jiā yǐhòu, wǒ cái fāxiàn, jìngrán wàngle qù shāngchǎng de chāoshì mǎi guǒzhī!'},
  {vi:'Cam đoan tươi 100%.',zh:'保证百分之百新鲜。',py:'Bǎozhèng bǎi fēn zhī bǎi xīnxiān.'},
  {vi:'Giá hôm nay gấp đôi giá hôm qua.',zh:'今天的价格是昨天的两倍。',py:'Jīntiān de jiàgé shì zuótiān de liǎng bèi.'},
  {vi:'Bất kể từ góc độ giá cả mà xem, hay từ chất lượng mà xem, đều đáng để cân nhắc.',zh:'不管从价格方面看，还是从质量上看，都是值得考虑的。',py:'Bùguǎn cóng jiàgé fāngmiàn kàn, háishi cóng zhìliàng shang kàn, dōu shì zhídé kǎolǜ de.'},
  {vi:'Để cảm ơn sự ủng hộ của mọi người, cửa hàng sách chúng tôi hôm nay tổ chức chương trình "mua sách tặng quà".',zh:'为了感谢大家的支持，我们书店今天举行"购书送好礼"活动。',py:'Wèile gǎnxiè dàjiā de zhīchí, wǒmen shūdiàn jīntiān jǔxíng "gòu shū sòng hǎo lǐ" huódòng.'},
  {vi:'Người ta thường nói "tiền nào của nấy".',zh:'人们常说"一分钱一分货"。',py:'Rénmen cháng shuō "yì fēn qián yì fēn huò".'},
  {vi:'Cứ đến ngày lễ, trung tâm mua sắm cũng sẽ tổ chức đủ loại hoạt động, hạ giá.',zh:'一到节日，商场也会举办各种各样的活动，降低价格。',py:'Yí dào jiérì, shāngchǎng yě huì jǔbàn gè zhǒng gè yàng de huódòng, jiàngdī jiàgé.'},
];
var translateDataRev = [
  {vi:'Mua ít đồ như vậy cũng không cần nhiều thời gian đến thế đâu!',zh:'买这么点儿东西也用不了那么长时间啊！',py:'Mǎi zhème diǎnr dōngxi yě yòng bu liǎo nàme cháng shíjiān a!'},
  {vi:'Cà chua có tươi không? Bán thế nào?',zh:'西红柿新鲜吗？怎么卖？',py:'Xīhóngshì xīnxiān ma? Zěnme mài?'},
  {vi:'Được, vậy tôi mua vài quả nếm thử trước đã.',zh:'好，那我先买几个尝尝。',py:'Hǎo, nà wǒ xiān mǎi jǐ ge chángchang.'},
  {vi:'Chất lượng đúng là tốt. Xin hỏi cái này giá bao nhiêu?',zh:'质量是不错。请问这个多少钱？',py:'Zhìliàng shì búcuò. Qǐngwèn zhège duōshao qián?'},
  {vi:'Dịch vụ của các bạn tốt, giá cả cũng được.',zh:'你们的服务不错，价格也可以。',py:'Nǐmen de fúwù búcuò, jiàgé yě kěyǐ.'},
  {vi:'Hoan nghênh mọi người chọn mua!',zh:'欢迎大家选购！',py:'Huānyíng dàjiā xuǎngòu!'},
  {vi:'Có lúc, đồ chất lượng rất tốt cũng sẽ rất rẻ.',zh:'有的时候，质量很好的东西也会很便宜。',py:'Yǒude shíhou, zhìliàng hěn hǎo de dōngxi yě huì hěn piányi.'},
  {vi:'Lúc này chúng ta cũng có thể mua được đồ vừa rẻ vừa tốt.',zh:'这个时候我们也可以买到又便宜又好的东西。',py:'Zhège shíhou wǒmen yě kěyǐ mǎidào yòu piányi yòu hǎo de dōngxi.'},
];

var listenData = {
  type: 'workbook',
  audioParts: [
    { src: '/audio/hsk4-bai-6/listen-1.mp3', from: 1, to: 5 },
    { src: '/audio/hsk4-bai-6/listen-2.mp3', from: 6, to: 12 },
    { src: '/audio/hsk4-bai-6/listen-3.mp3', from: 13, to: 22 }
  ],
  dictation: [
    {num:1, stmt:'他想买面包。', judge:false, lines:[
      {pre:'对不起，先生，', blank:'那种蛋糕已经卖完了', post:'，不过，您可以尝一下这种面包，味道也不错。',
       py:'Duìbuqǐ, xiānsheng, nà zhǒng dàngāo yǐjīng màiwán le, búguò, nín kěyǐ cháng yíxià zhè zhǒng miànbāo, wèidào yě búcuò.',
       vn:'Xin lỗi ông, loại bánh ngọt đó đã bán hết rồi, nhưng ông có thể nếm thử loại bánh mì này, vị cũng rất ngon.'}]},
    {num:2, stmt:'她想买些西红柿。', judge:false, lines:[
      {pre:'哥，一会儿你洗完车，顺便去一趟超市好吗？', blank:'帮我买点儿香蕉，再买几斤苹果', post:'。',
       py:'Gē, yíhuìr nǐ xǐwán chē, shùnbiàn qù yí tàng chāoshì hǎo ma? Bāng wǒ mǎi diǎnr xiāngjiāo, zài mǎi jǐ jīn píngguǒ.',
       vn:'Anh ơi, lát nữa rửa xe xong anh tiện thể ghé siêu thị một chuyến được không? Mua giúp em ít chuối, rồi mua thêm mấy cân táo.'}]},
    {num:3, stmt:'他们在参加招聘会。', judge:false, lines:[
      {pre:'您是要参加招聘会吗？', blank:'这件就挺适合的，很正式', post:'。您可以试一试，试衣间在这边。',
       py:'Nín shì yào cānjiā zhāopìnhuì ma? Zhè jiàn jiù tǐng shìhé de, hěn zhèngshì. Nín kěyǐ shì yi shì, shìyījiān zài zhèbiān.',
       vn:'Ngài định đi hội chợ tuyển dụng ạ? Chiếc này rất hợp, rất trang trọng. Ngài có thể thử, phòng thử đồ ở bên này.'}]},
    {num:4, stmt:'现在的房子很贵。', judge:true, lines:[
      {pre:'该不该买房子，这是个值得认真考虑的问题。', blank:'因为已经很高的房价', post:'，将来可能会降下来，但也有可能会变得更高。',
       py:'Gāi bu gāi mǎi fángzi, zhè shì ge zhídé rènzhēn kǎolǜ de wèntí. Yīnwèi yǐjīng hěn gāo de fángjià, jiānglái kěnéng huì jiàng xiàlai, dàn yě yǒu kěnéng huì biàn de gèng gāo.',
       vn:'Có nên mua nhà hay không, đây là vấn đề đáng suy nghĩ nghiêm túc. Vì giá nhà vốn đã rất cao, tương lai có thể giảm xuống, nhưng cũng có thể còn cao hơn nữa.'}]},
    {num:5, stmt:'他想周日去买电脑。', judge:true, lines:[
      {pre:'家里的电脑太旧了，正好公司发了一万元奖金，', blank:'我想星期天去买台电脑', post:'，你不会不同意吧？',
       py:'Jiā li de diànnǎo tài jiù le, zhènghǎo gōngsī fāle yíwàn yuán jiǎngjīn, wǒ xiǎng xīngqītiān qù mǎi tái diànnǎo, nǐ bú huì bù tóngyì ba?',
       vn:'Máy tính ở nhà cũ quá rồi, vừa hay công ty phát thưởng mười nghìn tệ, anh muốn Chủ nhật đi mua một chiếc máy tính, em sẽ không phản đối chứ?'}]}
  ],
  mc: [
    {num:6, options:['请假','唱歌','散步','买东西'], ans:3, q:'男的现在要去做什么？',
     lines:[
       {speaker:'女', pre:'天都这么晚了，', blank:'你还出去干什么', post:'？', py:'Tiān dōu zhème wǎn le, nǐ hái chūqu gàn shénme?', vn:'Trời muộn thế này rồi, anh còn ra ngoài làm gì?'},
       {speaker:'男', pre:'我们明天去上海旅游，', blank:'我要去买一个轻一点儿的行李箱', post:'。', py:'Wǒmen míngtiān qù Shànghǎi lǚyóu, wǒ yào qù mǎi yí ge qīng yìdiǎnr de xínglixiāng.', vn:'Mai chúng ta đi Thượng Hải du lịch, anh phải đi mua một chiếc vali nhẹ hơn.'}
     ],
     explain:'问：男的现在要去做什么？ "去买一个…行李箱" → D 买东西.'},
    {num:7, options:['老师','售货员','律师','出租车司机'], ans:1, q:'男的最可能是做什么的？',
     lines:[
       {speaker:'男', pre:'', blank:'我们店的衬衫和裤子现在都在打折', post:'，您看有什么需要的？', py:'Wǒmen diàn de chènshān hé kùzi xiànzài dōu zài dǎzhé, nín kàn yǒu shénme xūyào de?', vn:'Áo sơ mi và quần của cửa hàng chúng tôi hiện đều đang giảm giá, chị xem có cần gì không?'},
       {speaker:'女', pre:'这条裤子有蓝色的吗？', blank:'找一条我试试', post:'。', py:'Zhè tiáo kùzi yǒu lánsè de ma? Zhǎo yì tiáo wǒ shìshi.', vn:'Chiếc quần này có màu xanh lam không? Tìm cho tôi một chiếc thử.'}
     ],
     explain:'问：男的最可能是做什么的？ "我们店的…打折，您看有什么需要的" → B 售货员 (nhân viên bán hàng).'},
    {num:8, options:['家具店','体育馆','图书馆','洗手间'], ans:0, q:'他们最可能在哪儿？',
     lines:[
       {speaker:'男', pre:'现在买沙发，', blank:'能免费送货上门吗', post:'？', py:'Xiànzài mǎi shāfā, néng miǎnfèi sònghuò shàngmén ma?', vn:'Bây giờ mua sofa có được giao hàng tận nhà miễn phí không?'},
       {speaker:'女', pre:'可以，请您留个电话，', blank:'我们三日内给您送到', post:'。', py:'Kěyǐ, qǐng nín liú ge diànhuà, wǒmen sān rì nèi gěi nín sòngdào.', vn:'Được ạ, xin ông để lại số điện thoại, chúng tôi giao trong vòng ba ngày.'}
     ],
     explain:'问：他们最可能在哪儿？ Mua 沙发, hỏi giao hàng → A 家具店.'},
    {num:9, options:['西红柿和香蕉','香蕉和葡萄','西红柿和葡萄','西红柿和苹果'], ans:2, q:'女的买什么了？',
     lines:[
       {speaker:'女', pre:'你好，', blank:'一共多少钱', post:'？', py:'Nǐ hǎo, yígòng duōshao qián?', vn:'Chào anh, tổng cộng bao nhiêu tiền?'},
       {speaker:'男', pre:'', blank:'两斤西红柿、一斤葡萄', post:'，一共是二十块零五。', py:'Liǎng jīn xīhóngshì, yì jīn pútao, yígòng shì èrshí kuài líng wǔ.', vn:'Hai cân cà chua, một cân nho, tổng cộng hai mươi tệ lẻ năm hào.'}
     ],
     explain:'问：女的买什么了？ "两斤西红柿、一斤葡萄" → C 西红柿和葡萄.'},
    {num:10, options:['300元','500元','700元','1000元'], ans:0, q:'这双鞋现在卖多少钱？',
     lines:[
       {speaker:'男', pre:'', blank:'这双鞋多少钱', post:'？', py:'Zhè shuāng xié duōshao qián?', vn:'Đôi giày này bao nhiêu tiền?'},
       {speaker:'女', pre:'原价一千，', blank:'现在打三折', post:'，很便宜。', py:'Yuánjià yìqiān, xiànzài dǎ sān zhé, hěn piányi.', vn:'Giá gốc một nghìn, bây giờ giảm còn 30%, rất rẻ.'}
     ],
     explain:'问：这双鞋现在卖多少钱？ 打三折 = còn 30% giá gốc: 1000 × 30% = 300 元, đáp án A. Lưu ý 打X折 nghĩa là trả X phần mười giá gốc.'},
    {num:11, options:['逛街','加班','打球','买礼物'], ans:1, q:'男的要做什么？',
     lines:[
       {speaker:'女', pre:'下班陪我去逛街怎么样？', blank:'最近许多商场在打折', post:'，我想去买条裙子。', py:'Xiàbān péi wǒ qù guàngjiē zěnmeyàng? Zuìjìn xǔduō shāngchǎng zài dǎzhé, wǒ xiǎng qù mǎi tiáo qúnzi.', vn:'Tan làm đi dạo phố cùng em nhé? Dạo này nhiều trung tâm thương mại giảm giá, em muốn mua một chiếc váy.'},
       {speaker:'男', pre:'今天不行，', blank:'公司加班', post:'，星期六再去吧。', py:'Jīntiān bù xíng, gōngsī jiābān, xīngqīliù zài qù ba.', vn:'Hôm nay không được, công ty tăng ca, thứ Bảy đi vậy.'}
     ],
     explain:'问：男的要做什么？ "公司加班" → B 加班.'},
    {num:12, options:['在做生意','去旅游了','去逛街了','衣服旧了'], ans:2, q:'关于女的，可以知道什么？',
     lines:[
       {speaker:'男', pre:'小黄，', blank:'又去逛街了', post:'？买什么东西了？', py:'Xiǎo Huáng, yòu qù guàngjiē le? Mǎi shénme dōngxi le?', vn:'Tiểu Hoàng, lại đi dạo phố à? Mua gì thế?'},
       {speaker:'女', pre:'今天是母亲节，好多商店都在打折，', blank:'我给我妈买了两件衣服', post:'。', py:'Jīntiān shì Mǔqīnjié, hǎo duō shāngdiàn dōu zài dǎzhé, wǒ gěi wǒ mā mǎile liǎng jiàn yīfu.', vn:'Hôm nay là Ngày của Mẹ, nhiều cửa hàng giảm giá, tôi mua cho mẹ hai bộ quần áo.'}
     ],
     explain:'问：关于女的，可以知道什么？ "又去逛街了？" và cô ấy kể mua đồ → C 去逛街了.'},
    {num:13, options:['她变胖了','衣服太贵','想买黄的','再试试白的'], ans:3, q:'女的是什么意思？',
     lines:[
       {speaker:'男', pre:'你穿这件衣服', blank:'看起来又高又瘦', post:'，很漂亮。', py:'Nǐ chuān zhè jiàn yīfu kàn qilai yòu gāo yòu shòu, hěn piàoliang.', vn:'Em mặc bộ này trông vừa cao vừa thon, rất đẹp.'},
       {speaker:'女', pre:'真的啊？太好了，', blank:'你说我穿哪个颜色更好呢', post:'？', py:'Zhēn de a? Tài hǎo le, nǐ shuō wǒ chuān nǎge yánsè gèng hǎo ne?', vn:'Thật à? Tốt quá, anh nói em mặc màu nào đẹp hơn?'},
       {speaker:'男', pre:'你穿这个黄色的就挺好，', blank:'不过白的也不错', post:'。', py:'Nǐ chuān zhège huángsè de jiù tǐng hǎo, búguò bái de yě búcuò.', vn:'Em mặc màu vàng này rất được, nhưng màu trắng cũng đẹp.'},
       {speaker:'女', pre:'那我再试试白的，', blank:'两个比较一下', post:'。', py:'Nà wǒ zài shìshi bái de, liǎng ge bǐjiào yíxià.', vn:'Vậy em thử thêm màu trắng, so sánh hai cái.'}
     ],
     explain:'问：女的是什么意思？ "那我再试试白的" → D 再试试白的.'},
    {num:14, options:['医生','老师','售货员','运动员'], ans:3, q:'男的最可能是做什么的？',
     lines:[
       {speaker:'女', pre:'小王，', blank:'你也来商场购物啊', post:'？', py:'Xiǎo Wáng, nǐ yě lái shāngchǎng gòuwù a?', vn:'Tiểu Vương, cậu cũng đến trung tâm thương mại mua sắm à?'},
       {speaker:'男', pre:'', blank:'我要买个行李箱', post:'。您要买什么？', py:'Wǒ yào mǎi ge xínglixiāng. Nín yào mǎi shénme?', vn:'Tôi phải mua một chiếc vali. Chị muốn mua gì?'},
       {speaker:'女', pre:'今天休息，所以过来逛逛。', blank:'你买行李箱要去哪儿', post:'？', py:'Jīntiān xiūxi, suǒyǐ guòlai guàngguang. Nǐ mǎi xínglixiāng yào qù nǎr?', vn:'Hôm nay nghỉ nên qua dạo chơi. Cậu mua vali định đi đâu?'},
       {speaker:'男', pre:'', blank:'我周末要去外地比赛', post:'。', py:'Wǒ zhōumò yào qù wàidì bǐsài.', vn:'Cuối tuần tôi phải đi nơi khác thi đấu.'}
     ],
     explain:'问：男的最可能是做什么的？ "去外地比赛" → D 运动员 (vận động viên).'},
    {num:15, options:['天气很冷','电梯坏了','女的去买东西','他们在逛街'], ans:0, q:'根据对话，可以知道什么？',
     lines:[
       {speaker:'女', pre:'外面挺冷的，', blank:'你把大衣穿上吧', post:'。', py:'Wàimiàn tǐng lěng de, nǐ bǎ dàyī chuānshang ba.', vn:'Bên ngoài khá lạnh, anh mặc áo khoác vào đi.'},
       {speaker:'男', pre:'不用，', blank:'我就去楼下超市买果汁', post:'，马上就回来。', py:'Búyòng, wǒ jiù qù lóuxià chāoshì mǎi guǒzhī, mǎshàng jiù huílai.', vn:'Không cần, anh chỉ xuống siêu thị dưới nhà mua nước ép, về ngay.'},
       {speaker:'女', pre:'你顺便', blank:'再买两瓶牛奶', post:'吧。', py:'Nǐ shùnbiàn zài mǎi liǎng píng niúnǎi ba.', vn:'Anh tiện thể mua thêm hai chai sữa nhé.'},
       {speaker:'男', pre:'', blank:'没问题', post:'。', py:'Méi wèntí.', vn:'Không vấn đề.'}
     ],
     explain:'问：根据对话，可以知道什么？ "外面挺冷的" → A 天气很冷. Người đi mua đồ là người nam, nên C sai.'},
    {num:16, options:['不好看','不好用','很便宜','很好用'], ans:1, q:'女的觉得那台电脑怎么样？',
     lines:[
       {speaker:'男', pre:'', blank:'你在做什么呢', post:'？', py:'Nǐ zài zuò shénme ne?', vn:'Em đang làm gì đấy?'},
       {speaker:'女', pre:'我上网呢，', blank:'想买个新的笔记本电脑', post:'。', py:'Wǒ shàngwǎng ne, xiǎng mǎi ge xīn de bǐjìběn diànnǎo.', vn:'Em đang lên mạng, muốn mua một chiếc laptop mới.'},
       {speaker:'男', pre:'', blank:'你那台电脑是该换了', post:'。', py:'Nǐ nà tái diànnǎo shì gāi huàn le.', vn:'Cái máy của em đúng là nên đổi rồi.'},
       {speaker:'女', pre:'用了两年多了，现在特别慢，', blank:'太不好用了', post:'！', py:'Yòngle liǎng nián duō le, xiànzài tèbié màn, tài bù hǎoyòng le!', vn:'Dùng hơn hai năm rồi, giờ chậm kinh khủng, khó dùng quá!'}
     ],
     explain:'问：女的觉得那台电脑怎么样？ "太不好用了" → B 不好用.'},
    {num:17, options:['西红柿','蛋糕','鸡蛋','面条'], ans:3, q:'他们中午想吃什么？',
     lines:[
       {speaker:'女', pre:'中午', blank:'吃西红柿鸡蛋面', post:'怎么样？', py:'Zhōngwǔ chī xīhóngshì jīdàn miàn zěnmeyàng?', vn:'Trưa nay ăn mì cà chua trứng thế nào?'},
       {speaker:'男', pre:'好啊，不过', blank:'冰箱里好像没有面条了', post:'。', py:'Hǎo a, búguò bīngxiāng li hǎoxiàng méiyǒu miàntiáo le.', vn:'Được đấy, nhưng trong tủ lạnh hình như hết mì rồi.'},
       {speaker:'女', pre:'那我们', blank:'现在去超市买', post:'。', py:'Nà wǒmen xiànzài qù chāoshì mǎi.', vn:'Vậy mình đi siêu thị mua ngay.'},
       {speaker:'男', pre:'', blank:'好的', post:'。', py:'Hǎo de.', vn:'Được.'}
     ],
     explain:'问：他们中午想吃什么？ "西红柿鸡蛋面" là món mì, thứ còn thiếu và phải mua là 面条 → D. 西红柿, 鸡蛋 chỉ là nguyên liệu trong tên món.'},
    {num:18, options:['衣服在打折','男的是律师','顾客不满意','裙子卖完了'], ans:0, q:'根据对话，下列哪个正确？',
     lines:[
       {speaker:'男', pre:'现在', blank:'我们店内的衣服都打八折', post:'，您看看有没有喜欢的？', py:'Xiànzài wǒmen diànnèi de yīfu dōu dǎ bā zhé, nín kànkan yǒu méiyǒu xǐhuan de?', vn:'Hiện quần áo trong cửa hàng chúng tôi đều giảm 20%, chị xem có thích cái nào không?'},
       {speaker:'女', pre:'这条裙子不错，', blank:'还有别的颜色吗', post:'？', py:'Zhè tiáo qúnzi búcuò, hái yǒu biéde yánsè ma?', vn:'Chiếc váy này đẹp, còn màu khác không?'},
       {speaker:'男', pre:'还有红色和黑色，您皮肤好，', blank:'这几个颜色都适合您', post:'。', py:'Hái yǒu hóngsè hé hēisè, nín pífū hǎo, zhè jǐ ge yánsè dōu shìhé nín.', vn:'Còn màu đỏ và màu đen, da chị đẹp, mấy màu này đều hợp với chị.'},
       {speaker:'女', pre:'', blank:'给我拿条红色中号的', post:'，我试试。', py:'Gěi wǒ ná tiáo hóngsè zhōnghào de, wǒ shìshi.', vn:'Lấy cho tôi chiếc màu đỏ cỡ vừa, tôi thử.'}
     ],
     explain:'问：根据对话，下列哪个正确？ "衣服都打八折" → A 衣服在打折. Người nam là 售货员, không phải luật sư.'},
    {num:19, options:['冰箱','电视','空调','洗衣机'], ans:3, q:'王先生在买什么？',
     lines:[
       {speaker:'旁白', pre:'王先生，您放心，', blank:'只要是在我们店购买的洗衣机', post:'，一年内出现任何质量问题，我们都会免费给您修理。', py:'Wáng xiānsheng, nín fàngxīn, zhǐyào shì zài wǒmen diàn gòumǎi de xǐyījī, yì nián nèi chūxiàn rènhé zhìliàng wèntí, wǒmen dōu huì miǎnfèi gěi nín xiūlǐ.', vn:'Ông Vương, ông yên tâm, chỉ cần là máy giặt mua ở cửa hàng chúng tôi, trong vòng một năm gặp bất kỳ vấn đề chất lượng nào, chúng tôi đều sửa miễn phí.'},
       {speaker:'旁白', pre:'这是保修卡，', blank:'使用中遇到什么问题', post:'，您可以通过上面的电话联系我们。', py:'Zhè shì bǎoxiūkǎ, shǐyòng zhōng yùdào shénme wèntí, nín kěyǐ tōngguò shàngmian de diànhuà liánxì wǒmen.', vn:'Đây là phiếu bảo hành, trong quá trình sử dụng gặp vấn đề gì, ông có thể liên hệ chúng tôi qua số điện thoại ghi trên đó.'}
     ],
     explain:'问：王先生在买什么？ "在我们店购买的洗衣机" → D 洗衣机.'},
    {num:20, options:['一个月','半年','一年','两年'], ans:2, q:'保修期是多长时间？',
     lines:[
       {speaker:'旁白', pre:'（同一段话）', blank:'一年内出现任何质量问题', post:'，我们都会免费给您修理。', py:'(Tóng yí duàn huà) Yì nián nèi chūxiàn rènhé zhìliàng wèntí, wǒmen dōu huì miǎnfèi gěi nín xiūlǐ.', vn:'(Cùng đoạn văn) Trong vòng một năm gặp bất kỳ vấn đề chất lượng nào, chúng tôi đều sửa miễn phí.'}
     ],
     explain:'问：保修期是多长时间？ "一年内…免费修理" → C 一年.'},
    {num:21, options:['很高兴','很难过','不感兴趣','很有礼貌'], ans:0, q:'看到那个包，说话人怎么样？',
     lines:[
       {speaker:'旁白', pre:'我昨天和同事去逛街，', blank:'看到一个我一直想要的包', post:'。我笑着对同事说："就是它，终于被我找到了！"', py:'Wǒ zuótiān hé tóngshì qù guàngjiē, kàndào yí ge wǒ yìzhí xiǎng yào de bāo. Wǒ xiàozhe duì tóngshì shuō: "Jiù shì tā, zhōngyú bèi wǒ zhǎodào le!"', vn:'Hôm qua tôi đi dạo phố với đồng nghiệp, nhìn thấy một chiếc túi tôi vẫn luôn muốn có. Tôi cười nói với đồng nghiệp: "Chính là nó, cuối cùng tôi cũng tìm thấy rồi!"'},
       {speaker:'旁白', pre:'我拿起包就问售货员："这个包怎么卖？"这时，', blank:'旁边一个帅哥很客气地对我说', post:'："你喜欢这个包？"我说是。他笑着说："可是这是我的包。"', py:'Wǒ náqǐ bāo jiù wèn shòuhuòyuán: "Zhège bāo zěnme mài?" Zhèshí, pángbiān yí ge shuàigē hěn kèqi de duì wǒ shuō: "Nǐ xǐhuan zhège bāo?" Wǒ shuō shì. Tā xiàozhe shuō: "Kěshì zhè shì wǒ de bāo."', vn:'Tôi cầm túi lên hỏi nhân viên: "Chiếc túi này bán thế nào?" Lúc đó, một anh chàng đẹp trai bên cạnh lịch sự nói với tôi: "Cô thích chiếc túi này à?" Tôi nói phải. Anh ấy cười nói: "Nhưng đây là túi của tôi."'}
     ],
     explain:'问：看到那个包，说话人怎么样？ "我笑着…终于被我找到了！" → rất vui, đáp án A 很高兴.'},
    {num:22, options:['商店的','同事的','售货员的','一位顾客的'], ans:3, q:'那个包是谁的？',
     lines:[
       {speaker:'旁白', pre:'（同一段话）他笑着说："', blank:'可是这是我的包', post:'。"', py:'(Tóng yí duàn huà) Tā xiàozhe shuō: "Kěshì zhè shì wǒ de bāo."', vn:'(Cùng đoạn văn) Anh ấy cười nói: "Nhưng đây là túi của tôi."'}
     ],
     explain:'问：那个包是谁的？ Anh chàng đứng cạnh (một khách hàng khác) nói "这是我的包" → D 一位顾客的.'}
  ]
};
