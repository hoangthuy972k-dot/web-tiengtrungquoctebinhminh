// ══════════════════════════════════════════
// DATA — HSK3 Bài 3: 桌子上放着很多饮料 (Trên bàn có rất nhiều thức uống)
// Nguồn: HSK标准教程3 (Giáo trình chuẩn HSK 3 — nhantriviet.com)
// ══════════════════════════════════════════
var vocabData = [
  {
    "n": 1,
    "zh": "还是",
    "py": "háishi",
    "pos": "Liên từ",
    "vn": "hay, hay là",
    "hv": "hoàn thị",
    "em": "🔀",
    "lesson": 1,
    "explain": [
      "Dùng để nêu ra sự lựa chọn giữa hai (hay nhiều) khả năng, thường dùng trong câu hỏi lựa chọn."
    ],
    "usage": "Đứng giữa hai vế lựa chọn: A + 还是 + B? Nếu vế lựa chọn tự nó là một câu hỏi thì bắt buộc dùng 还是, không được dùng 或者.",
    "collo": [
      "喝咖啡还是喝茶",
      "去还是不去",
      "红的还是绿的"
    ],
    "ex_zh": "你要喝咖啡还是喝茶？",
    "ex_py": "Nǐ yào hē kāfēi háishi hē chá?",
    "ex_vn": "Bạn muốn uống cà phê hay uống trà?",
    "exList": [
      {
        "zh": "你要喝咖啡还是喝茶？",
        "py": "Nǐ yào hē kāfēi háishi hē chá?",
        "vn": "Bạn muốn uống cà phê hay uống trà?"
      },
      {
        "zh": "你周末在家看书还是出去运动？",
        "py": "Nǐ zhōumò zài jiā kàn shū háishi chūqu yùndòng?",
        "vn": "Cuối tuần bạn ở nhà đọc sách hay ra ngoài vận động?"
      },
      {
        "zh": "周太太40岁还是50岁，我们不知道。",
        "py": "Zhōu tàitai sìshí suì háishi wǔshí suì, wǒmen bù zhīdào.",
        "vn": "Bà Chu 40 tuổi hay 50 tuổi, chúng tôi không biết."
      }
    ],
    "hanzi": [
      {
        "c": "还",
        "p": "hái",
        "type": "半包围结构 · Bán bao vây",
        "st": 7,
        "ord": "辶 (sước) bao → 不 (bất) trong",
        "rad": "辶 (sước – đi)",
        "mean": "còn, vẫn; hay",
        "tip": "Bộ 辶(đi) → ý nghĩa mở rộng \"còn quay lại/còn tiếp diễn\", dùng để nối các lựa chọn còn đang cân nhắc.",
        "cf": "远 (yuǎn – \"xa\", cũng có bộ 辶\")",
        "w": "还是 / 还有 / 还没"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Cuối tuần bạn định đi leo núi hay ở nhà xem tivi? Nếu trời mưa thì ở nhà đi.",
        "answer": "周末你打算去爬山还是在家看电视？如果下雨，就在家吧。",
        "answerPy": "Zhōumò nǐ dǎsuàn qù páshān háishi zài jiā kàn diànshì? Rúguǒ xiàyǔ, jiù zài jiā ba.",
        "note": "还是 dùng trong câu HỎI; câu kể thì dùng 或者.",
        "pair": "如果……就……"
      },
      {
        "promptLang": "vi",
        "prompt": "Tuy tôi từng thấy cái quần đó, nhưng không nhớ nó màu đỏ hay màu xanh.",
        "answer": "那条裤子我虽然看过，但是不记得是红色还是绿色。",
        "answerPy": "Nà tiáo kùzi wǒ suīrán kànguo, dànshì bú jìde shì hóngsè háishi lǜsè.",
        "note": "一条裤子 — lượng từ 条 cho vật dài.",
        "pair": "虽然……但是……"
      }
    ],
    "colloFull": [
      {
        "zh": "去还是不去",
        "py": "qù háishi bú qù",
        "vn": "đi hay không đi"
      },
      {
        "zh": "喝茶还是喝咖啡",
        "py": "hē chá háishi hē kāfēi",
        "vn": "uống trà hay cà phê"
      },
      {
        "zh": "红的还是绿的",
        "py": "hóng de háishi lǜ de",
        "vn": "cái đỏ hay cái xanh"
      },
      {
        "zh": "你还是我",
        "py": "nǐ háishi wǒ",
        "vn": "bạn hay tôi"
      },
      {
        "zh": "今天还是明天",
        "py": "jīntiān háishi míngtiān",
        "vn": "hôm nay hay ngày mai"
      }
    ],
    "patterns": [
      {
        "s": "A 还是 B？",
        "m": "A hay B? — chỉ dùng trong câu HỎI"
      },
      {
        "s": "✗ 我喝茶还是咖啡。 → ✓ 我喝茶或者咖啡。",
        "m": "Câu trần thuật dùng 或者"
      }
    ]
  },
  {
    "n": 2,
    "zh": "爬山",
    "py": "pá shān",
    "pos": "Động từ",
    "vn": "leo núi",
    "hv": "ba sơn",
    "em": "⛰️",
    "lesson": 1,
    "explain": [
      "Hoạt động leo lên núi, thường để tập thể dục hoặc ngắm cảnh."
    ],
    "usage": "Động từ ly hợp (V+O): 爬 (leo) + 山 (núi), có thể tách ra khi thêm bổ ngữ: 爬了三个小时的山.",
    "collo": [
      "去爬山",
      "爬山的时候",
      "喜欢爬山"
    ],
    "ex_zh": "我们明天要去爬山。",
    "ex_py": "Wǒmen míngtiān yào qù páshān.",
    "ex_vn": "Ngày mai chúng tôi định đi leo núi.",
    "exList": [
      {
        "zh": "我们明天要去爬山。",
        "py": "Wǒmen míngtiān yào qù páshān.",
        "vn": "Ngày mai chúng tôi định đi leo núi."
      },
      {
        "zh": "爬山的时候要小心点儿。",
        "py": "Páshān de shíhou yào xiǎoxīn diǎnr.",
        "vn": "Lúc leo núi phải cẩn thận một chút."
      },
      {
        "zh": "小丽还没想好周末去爬山还是去看电影。",
        "py": "Xiǎolì hái méi xiǎnghǎo zhōumò qù páshān háishi qù kàn diànyǐng.",
        "vn": "Tiểu Lệ vẫn chưa nghĩ xong cuối tuần đi leo núi hay đi xem phim."
      }
    ],
    "hanzi": [
      {
        "c": "爬",
        "p": "pá",
        "type": "左右结构 · Trái-phải",
        "st": 8,
        "ord": "爪 (trảo) trái → 巴 (ba) phải",
        "rad": "爪 (trảo – móng vuốt)",
        "mean": "leo, bò",
        "tip": "Bộ 爪(móng vuốt/tay bám) + 巴(bám chặt) → dùng tay chân BÁM để LEO lên.",
        "cf": "巴 (bā – \"bám, mong chờ\")",
        "w": "爬山 / 爬树 / 爬起来"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Vì thời tiết đẹp nên chúng tôi rủ nhau đi leo núi.",
        "answer": "因为天气很好，所以我们一起去爬山。",
        "answerPy": "Yīnwèi tiānqì hěn hǎo, suǒyǐ wǒmen yìqǐ qù páshān.",
        "note": "因为……所以…… nêu nguyên nhân — kết quả.",
        "pair": "因为……所以……"
      },
      {
        "promptLang": "vi",
        "prompt": "Tuy chân tôi hơi đau nhưng tôi vẫn muốn đi leo núi.",
        "answer": "虽然我的腿有点儿疼，但是我还是想去爬山。",
        "answerPy": "Suīrán wǒ de tuǐ yǒudiǎnr téng, dànshì wǒ háishi xiǎng qù páshān.",
        "note": "虽然……但是…… diễn tả sự tương phản (ôn lại 腿/疼 đã học ở Bài 2).",
        "pair": "虽然……但是……"
      }
    ],
    "colloFull": [
      {
        "zh": "去爬山",
        "py": "qù pá shān",
        "vn": "đi leo núi"
      },
      {
        "zh": "喜欢爬山",
        "py": "xǐhuan pá shān",
        "vn": "thích leo núi"
      },
      {
        "zh": "爬山的时候",
        "py": "pá shān de shíhou",
        "vn": "lúc leo núi"
      },
      {
        "zh": "爬了一个小时山",
        "py": "pá le yí gè xiǎoshí shān",
        "vn": "leo núi một tiếng"
      },
      {
        "zh": "一起爬山",
        "py": "yìqǐ pá shān",
        "vn": "cùng leo núi"
      }
    ],
    "patterns": [
      {
        "s": "爬 + 了 + thời lượng + 山",
        "m": "爬山 là từ ly hợp: 爬了一小时山 ✓"
      },
      {
        "s": "去 + 爬山",
        "m": "Đi leo núi"
      }
    ]
  },
  {
    "n": 3,
    "zh": "小心",
    "py": "xiǎoxīn",
    "pos": "Tính từ",
    "vn": "cẩn thận",
    "hv": "tiểu tâm",
    "em": "⚠️",
    "lesson": 1,
    "explain": [
      "Chú ý, thận trọng khi làm việc gì để tránh xảy ra chuyện không hay."
    ],
    "usage": "Có thể làm vị ngữ (要小心) hoặc phó từ đứng trước động từ (小心地 + V); thường dùng ở dạng mệnh lệnh 小心 + danh từ (小心车).",
    "collo": [
      "要小心",
      "小心点儿",
      "小心车"
    ],
    "ex_zh": "爬山的时候要小心点儿。",
    "ex_py": "Páshān de shíhou yào xiǎoxīn diǎnr.",
    "ex_vn": "Lúc leo núi phải cẩn thận một chút.",
    "exList": [
      {
        "zh": "爬山的时候要小心点儿。",
        "py": "Páshān de shíhou yào xiǎoxīn diǎnr.",
        "vn": "Lúc leo núi phải cẩn thận một chút."
      },
      {
        "zh": "过马路的时候要小心汽车。",
        "py": "Guò mǎlù de shíhou yào xiǎoxīn qìchē.",
        "vn": "Lúc qua đường phải cẩn thận xe cộ."
      },
      {
        "zh": "这儿的路不好走，你小心点儿。",
        "py": "Zhèr de lù bù hǎo zǒu, nǐ xiǎoxīn diǎnr.",
        "vn": "Đường ở đây khó đi, bạn cẩn thận một chút."
      }
    ],
    "hanzi": [
      {
        "c": "心",
        "p": "xīn",
        "type": "独体字 · Chữ đơn (tượng hình)",
        "st": 4,
        "ord": "nét liền, hình trái tim",
        "rad": "心 (tâm – trái tim)",
        "mean": "tim, lòng, tâm trí",
        "tip": "Chữ tượng hình mô phỏng hình trái tim → nghĩa gốc TIM, mở rộng thành TÂM TRÍ, SUY NGHĨ.",
        "cf": "必 (bì – \"ắt hẳn\", có nét giống 心\")",
        "w": "小心 / 放心 / 开心"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Vì trời mưa đường trơn nên bạn lái xe nhớ cẩn thận hơn một chút.",
        "answer": "因为下雨了路很滑，所以你开车要记得小心点儿。",
        "answerPy": "Yīnwèi xiàyǔ le lù hěn huá, suǒyǐ nǐ kāichē yào jìde xiǎoxīn diǎnr.",
        "note": "记得 + V — nhớ làm gì, dùng khi dặn dò.",
        "pair": "因为……所以……"
      },
      {
        "promptLang": "vi",
        "prompt": "Nếu bạn không cẩn thận thì rất dễ bị cảm lạnh.",
        "answer": "如果你不小心，就很容易感冒。",
        "answerPy": "Rúguǒ nǐ bù xiǎoxīn, jiù hěn róngyì gǎnmào.",
        "note": "如果……就…… diễn tả giả thiết — kết quả (ôn lại 容易 đã học ở Bài 2).",
        "pair": "如果……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "要小心",
        "py": "yào xiǎoxīn",
        "vn": "phải cẩn thận"
      },
      {
        "zh": "小心点儿",
        "py": "xiǎoxīn diǎn ér",
        "vn": "cẩn thận chút"
      },
      {
        "zh": "小心车",
        "py": "xiǎoxīn chē",
        "vn": "coi chừng xe"
      },
      {
        "zh": "小心一点儿",
        "py": "xiǎoxīn yìdiǎnr",
        "vn": "cẩn thận hơn chút"
      },
      {
        "zh": "很小心",
        "py": "hěn xiǎoxīn",
        "vn": "rất cẩn thận"
      }
    ],
    "patterns": [
      {
        "s": "小心 + N",
        "m": "Coi chừng cái gì: 小心车, 小心路滑"
      },
      {
        "s": "小心点儿",
        "m": "Cẩn thận một chút — lời dặn quen thuộc"
      }
    ]
  },
  {
    "n": 4,
    "zh": "条",
    "py": "tiáo",
    "pos": "Lượng từ",
    "vn": "cái, chiếc (dùng cho vật dài)",
    "hv": "điều",
    "em": "👖",
    "lesson": 2,
    "explain": [
      "Lượng từ dùng cho các vật có hình dạng dài như quần, đường, con sông, con cá."
    ],
    "usage": "Lượng từ, đứng giữa SỐ TỪ (hoặc chỉ thị từ 这/那) và DANH TỪ: [số từ/这/那] + 条 + [danh từ] (一条裤子, 这条路).",
    "collo": [
      "一条裤子",
      "这条路",
      "两条鱼"
    ],
    "ex_zh": "你觉得这条裤子怎么样？",
    "ex_py": "Nǐ juéde zhè tiáo kùzi zěnmeyàng?",
    "ex_vn": "Bạn thấy cái quần này thế nào?",
    "exList": [
      {
        "zh": "你觉得这条裤子怎么样？",
        "py": "Nǐ juéde zhè tiáo kùzi zěnmeyàng?",
        "vn": "Bạn thấy cái quần này thế nào?"
      },
      {
        "zh": "我记得你已经有两条这样的裤子了。",
        "py": "Wǒ jìde nǐ yǐjīng yǒu liǎng tiáo zhèyàng de kùzi le.",
        "vn": "Anh nhớ là em đã có hai cái quần kiểu này rồi."
      },
      {
        "zh": "这条鱼很新鲜。",
        "py": "Zhè tiáo yú hěn xīnxiān.",
        "vn": "Con cá này rất tươi."
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
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Vì cái quần này hơi chật nên tôi định đổi một cái khác.",
        "answer": "因为这条裤子有点儿小，所以我打算换一条。",
        "answerPy": "Yīnwèi zhè tiáo kùzi yǒudiǎnr xiǎo, suǒyǐ wǒ dǎsuàn huàn yì tiáo.",
        "note": "因为……所以…… nêu nguyên nhân — kết quả.",
        "pair": "因为……所以……"
      },
      {
        "promptLang": "vi",
        "prompt": "Con đường này tuy nhỏ nhưng đi rất nhanh.",
        "answer": "这条路虽然小，但是走得很快。",
        "answerPy": "Zhè tiáo lù suīrán xiǎo, dànshì zǒu de hěn kuài.",
        "note": "虽然……但是…… diễn tả sự tương phản.",
        "pair": "虽然……但是……"
      }
    ],
    "colloFull": [
      {
        "zh": "一条裤子",
        "py": "yì tiáo kùzi",
        "vn": "một cái quần"
      },
      {
        "zh": "一条路",
        "py": "yì tiáo lù",
        "vn": "một con đường"
      },
      {
        "zh": "两条鱼",
        "py": "liǎng tiáo yú",
        "vn": "hai con cá"
      },
      {
        "zh": "一条裙子",
        "py": "yì tiáo qúnzi",
        "vn": "một cái váy"
      },
      {
        "zh": "那条河",
        "py": "nà tiáo hé",
        "vn": "con sông đó"
      }
    ],
    "patterns": [
      {
        "s": "số + 条 + vật dài",
        "m": "Lượng từ 条: 裤子, 路, 鱼, 裙子, 河"
      },
      {
        "s": "✗ 一个裤子 → ✓ 一条裤子"
      }
    ]
  },
  {
    "n": 5,
    "zh": "裤子",
    "py": "kùzi",
    "pos": "Danh từ",
    "vn": "quần",
    "hv": "khố tử",
    "em": "👖",
    "lesson": 2,
    "explain": [
      "Trang phục mặc ở phần dưới cơ thể, che từ thắt lưng đến chân."
    ],
    "usage": "Danh từ; lượng từ đi kèm là 条: 一条裤子. Thường xuất hiện cùng động từ 穿 (mặc), 买 (mua), 洗 (giặt).",
    "collo": [
      "穿裤子",
      "买裤子",
      "洗裤子"
    ],
    "ex_zh": "那我们再看看别的。",
    "ex_py": "Nà wǒmen zài kànkan biéde.",
    "ex_vn": "Vậy chúng ta xem thêm cái khác nữa.",
    "exList": [
      {
        "zh": "我觉得大了一点儿。",
        "py": "Wǒ juéde dàle yìdiǎnr.",
        "vn": "Tôi thấy hơi to một chút."
      },
      {
        "zh": "这件衬衫怎么样？",
        "py": "Zhè jiàn chènshān zěnmeyàng?",
        "vn": "Cái áo sơ mi này thế nào?"
      },
      {
        "zh": "你新给我买的那条裤子放哪儿了？",
        "py": "Nǐ xīn gěi wǒ mǎi de nà tiáo kùzi fàng nǎr le?",
        "vn": "Cái quần mới bạn mua cho tôi để ở đâu rồi?"
      }
    ],
    "hanzi": [
      {
        "c": "裤",
        "p": "kù",
        "type": "左右结构 · Trái-phải",
        "st": 12,
        "ord": "衤 (y) trái → 库 (khố) phải",
        "rad": "衤 (y – quần áo)",
        "mean": "quần",
        "tip": "Bộ 衤(quần áo, biến thể của 衣) + 库(kho) → trang phục QUẦN, mặc phần dưới cơ thể.",
        "cf": "库 (kù – \"kho\", không có bộ 衤\")",
        "w": "裤子 / 一条裤子"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Chiếc quần này không những tôi mua ở trung tâm thương mại, mà giá cũng không đắt lắm.",
        "answer": "这条裤子不但是我在商场买的，而且也不太贵。",
        "answerPy": "Zhè tiáo kùzi búdàn shì wǒ zài shāngchǎng mǎi de, érqiě yě bú tài guì.",
        "note": "是……的 — nhấn nơi mua, thời gian mua.",
        "pair": "不但……而且……"
      },
      {
        "promptLang": "vi",
        "prompt": "Nếu quần bẩn thì bạn nên giặt ngay hôm nay.",
        "answer": "如果裤子脏了，你今天就应该洗一下。",
        "answerPy": "Rúguǒ kùzi zāng le, nǐ jīntiān jiù yīnggāi xǐ yíxià.",
        "note": "如果……就…… diễn tả giả thiết — kết quả.",
        "pair": "如果……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "一条裤子",
        "py": "yì tiáo kùzi",
        "vn": "một cái quần"
      },
      {
        "zh": "穿裤子",
        "py": "chuān kùzi",
        "vn": "mặc quần"
      },
      {
        "zh": "买裤子",
        "py": "mǎi kùzi",
        "vn": "mua quần"
      },
      {
        "zh": "洗裤子",
        "py": "xǐ kùzi",
        "vn": "giặt quần"
      },
      {
        "zh": "新裤子",
        "py": "xīn kùzi",
        "vn": "quần mới"
      }
    ],
    "patterns": [
      {
        "s": "穿 + 裤子",
        "m": "Mặc quần — 穿 dùng cho quần áo, giày"
      },
      {
        "s": "一 + 条 + 裤子",
        "m": "Lượng từ 条"
      }
    ]
  },
  {
    "n": 6,
    "zh": "记得",
    "py": "jìde",
    "pos": "Động từ",
    "vn": "nhớ, còn nhớ",
    "hv": "ký đắc",
    "em": "🧠",
    "lesson": 2,
    "explain": [
      "Còn lưu giữ trong trí nhớ, không quên."
    ],
    "usage": "Động từ, phủ định là 不记得 (không nhớ); có thể theo sau bởi một mệnh đề: 记得 + [sự việc].",
    "collo": [
      "不记得",
      "记得带钱",
      "还记得吗"
    ],
    "ex_zh": "我记得你已经有两条这样的裤子了。",
    "ex_py": "Wǒ jìde nǐ yǐjīng yǒu liǎng tiáo zhèyàng de kùzi le.",
    "ex_vn": "Anh nhớ là em đã có hai cái quần kiểu này rồi.",
    "exList": [
      {
        "zh": "我记得你已经有两条这样的裤子了。",
        "py": "Wǒ jìde nǐ yǐjīng yǒu liǎng tiáo zhèyàng de kùzi le.",
        "vn": "Anh nhớ là em đã có hai cái quần kiểu này rồi."
      },
      {
        "zh": "你还记得我吗？",
        "py": "Nǐ hái jìde wǒ ma?",
        "vn": "Bạn còn nhớ tôi không?"
      },
      {
        "zh": "他的生日是10月还是11月，我不记得了。",
        "py": "Tā de shēngrì shì shíyuè háishi shíyīyuè, wǒ bù jìde le.",
        "vn": "Sinh nhật anh ấy là tháng 10 hay tháng 11, tôi không nhớ nữa."
      }
    ],
    "hanzi": [
      {
        "c": "记",
        "p": "jì",
        "type": "左右结构 · Trái-phải",
        "st": 5,
        "ord": "讠 (ngôn) trái → 己 (kỷ) phải",
        "rad": "讠 (ngôn – lời nói)",
        "mean": "ghi nhớ, ghi chép",
        "tip": "Bộ 讠(lời nói) + 己(bản thân) → tự mình GHI LẠI lời nói/sự việc trong đầu = NHỚ.",
        "cf": "己 (jǐ – \"bản thân\", không có bộ 讠\")",
        "w": "记得 / 忘记 / 记住"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Vì tôi không còn nhớ mật khẩu nên tôi phải hỏi lại bạn.",
        "answer": "因为我不记得密码了，所以我得再问你一次。",
        "answerPy": "Yīnwèi wǒ bú jìde mìmǎ le, suǒyǐ wǒ děi zài wèn nǐ yí cì.",
        "note": "因为……所以…… nêu nguyên nhân — kết quả.",
        "pair": "因为……所以……"
      },
      {
        "promptLang": "vi",
        "prompt": "Nếu bạn còn nhớ địa chỉ đó thì hãy nói cho tôi biết.",
        "answer": "如果你还记得那个地址，就告诉我吧。",
        "answerPy": "Rúguǒ nǐ hái jìde nàge dìzhǐ, jiù gàosu wǒ ba.",
        "note": "如果……就…… diễn tả giả thiết — kết quả.",
        "pair": "如果……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "不记得",
        "py": "bú jìde",
        "vn": "không nhớ"
      },
      {
        "zh": "记得带钱",
        "py": "jìde dài qián",
        "vn": "nhớ mang tiền"
      },
      {
        "zh": "还记得吗",
        "py": "hái jìde ma",
        "vn": "còn nhớ không"
      },
      {
        "zh": "记得很清楚",
        "py": "jìde hěn qīngchu",
        "vn": "nhớ rất rõ"
      },
      {
        "zh": "记得他",
        "py": "jìde tā",
        "vn": "nhớ anh ấy"
      }
    ],
    "patterns": [
      {
        "s": "记得 + V",
        "m": "Nhớ làm gì (lời dặn)"
      },
      {
        "s": "记得 ↔ 忘了",
        "m": "Nhớ ↔ quên"
      }
    ]
  },
  {
    "n": 7,
    "zh": "衬衫",
    "py": "chènshān",
    "pos": "Danh từ",
    "vn": "áo sơ mi",
    "hv": "sấn sam",
    "em": "👔",
    "lesson": 2,
    "explain": [
      "Loại áo có cổ và cúc cài phía trước, thường mặc đi làm/dự tiệc."
    ],
    "usage": "Danh từ; lượng từ đi kèm là 件: 一件衬衫.",
    "collo": [
      "一件衬衫",
      "穿衬衫",
      "洗衬衫"
    ],
    "ex_zh": "这件衬衫怎么样？",
    "ex_py": "Zhè jiàn chènshān zěnmeyàng?",
    "ex_vn": "Cái áo sơ mi này thế nào?",
    "exList": [
      {
        "zh": "这件衬衫怎么样？",
        "py": "Zhè jiàn chènshān zěnmeyàng?",
        "vn": "Cái áo sơ mi này thế nào?"
      },
      {
        "zh": "这上面写着320元。",
        "py": "Zhè shàngmian xiězhe sānbǎi èrshí yuán.",
        "vn": "Trên đây ghi 320 đồng."
      },
      {
        "zh": "我想买件衬衫。",
        "py": "Wǒ xiǎng mǎi jiàn chènshān.",
        "vn": "Tôi muốn mua một cái áo sơ mi."
      }
    ],
    "hanzi": [
      {
        "c": "衫",
        "p": "shān",
        "type": "左右结构 · Trái-phải",
        "st": 8,
        "ord": "衤 (y) trái → 彡 (sam) phải",
        "rad": "衤 (y – quần áo)",
        "mean": "áo",
        "tip": "Bộ 衤(quần áo) + 彡(hoa văn, đường nét) → loại ÁO có đường may/hoa văn, khái quát nghĩa ÁO.",
        "cf": "形 (xíng – \"hình dạng\", cũng có 彡\")",
        "w": "衬衫 / 一件衬衫"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tôi mặc cái áo sơ mi này xong là ra ngoài ngay.",
        "answer": "我一穿上这件衬衫，就出去了。",
        "answerPy": "Wǒ yì chuān shang zhè jiàn chènshān, jiù chūqu le.",
        "note": "一件衬衫 (áo) khác 一条裤子 (quần) — hai lượng từ khác nhau.",
        "pair": "一……就……"
      },
      {
        "promptLang": "vi",
        "prompt": "Tuy áo sơ mi này không rẻ nhưng chất lượng rất tốt.",
        "answer": "虽然这件衬衫不便宜，但是质量很好。",
        "answerPy": "Suīrán zhè jiàn chènshān bù piányi, dànshì zhìliàng hěn hǎo.",
        "note": "虽然……但是…… diễn tả sự tương phản.",
        "pair": "虽然……但是……"
      }
    ],
    "colloFull": [
      {
        "zh": "一件衬衫",
        "py": "yí jiàn chènshān",
        "vn": "một cái áo sơ mi"
      },
      {
        "zh": "穿衬衫",
        "py": "chuān chènshān",
        "vn": "mặc áo sơ mi"
      },
      {
        "zh": "白衬衫",
        "py": "bái chènshān",
        "vn": "áo sơ mi trắng"
      },
      {
        "zh": "洗衬衫",
        "py": "xǐ chènshān",
        "vn": "giặt áo sơ mi"
      },
      {
        "zh": "买件衬衫",
        "py": "mǎi jiàn chènshān",
        "vn": "mua cái áo sơ mi"
      }
    ],
    "patterns": [
      {
        "s": "một + 件 + 衬衫",
        "m": "Lượng từ 件 cho áo, sự việc"
      },
      {
        "s": "件 (áo) ≠ 条 (quần) — hai loại quần áo, hai lượng từ"
      }
    ]
  },
  {
    "n": 8,
    "zh": "元",
    "py": "yuán",
    "pos": "Lượng từ",
    "vn": "đồng (đơn vị tiền tệ)",
    "hv": "nguyên",
    "em": "💴",
    "lesson": 2,
    "explain": [
      "Đơn vị tiền tệ của Trung Quốc (nhân dân tệ)."
    ],
    "usage": "Lượng từ, đứng ngay sau SỐ TỪ: [số từ] + 元 (320元). Trong khẩu ngữ thường nói 块 thay cho 元.",
    "collo": [
      "320元",
      "多少元",
      "一元"
    ],
    "ex_zh": "这上面写着320元。",
    "ex_py": "Zhè shàngmian xiězhe sānbǎi èrshí yuán.",
    "ex_vn": "Trên đây ghi 320 đồng.",
    "exList": [
      {
        "zh": "这上面写着320元。",
        "py": "Zhè shàngmian xiězhe sānbǎi èrshí yuán.",
        "vn": "Trên đây ghi 320 đồng."
      },
      {
        "zh": "还不错，多少钱？",
        "py": "Hái búcuò, duōshao qián?",
        "vn": "Cũng được đấy, bao nhiêu tiền?"
      },
      {
        "zh": "买一件。",
        "py": "Mǎi yí jiàn.",
        "vn": "Mua một cái."
      }
    ],
    "hanzi": [
      {
        "c": "元",
        "p": "yuán",
        "type": "独体字 · Chữ đơn",
        "st": 4,
        "ord": "二 trên → 儿 dưới",
        "rad": "儿 (nhân đi)",
        "mean": "đầu tiên; đồng (tiền)",
        "tip": "Chữ cổ chỉ CÁI ĐẦU, phần khởi đầu → mở rộng nghĩa \"đơn vị cơ bản\" và dùng làm đơn vị TIỀN TỆ.",
        "cf": "无 (wú – \"không có\")",
        "w": "元 / 一百元 / 多少元"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Cái quần này tuy giá 320 đồng hơi đắt, nhưng chất lượng rất tốt.",
        "answer": "这条裤子虽然要320元有点儿贵，但是很好。",
        "answerPy": "Zhè tiáo kùzi suīrán yào 320 yuán yǒudiǎnr guì, dànshì hěn hǎo.",
        "note": "元 dùng khi viết, 块 dùng khi nói — cùng một đơn vị.",
        "pair": "虽然……但是……"
      },
      {
        "promptLang": "vi",
        "prompt": "Nếu áo sơ mi này chỉ 100 đồng thì tôi sẽ mua hai cái.",
        "answer": "如果这件衬衫只要100元，我就买两件。",
        "answerPy": "Rúguǒ zhè jiàn chènshān zhǐ yào yìbǎi yuán, wǒ jiù mǎi liǎng jiàn.",
        "note": "如果……就…… diễn tả giả thiết — kết quả.",
        "pair": "只要……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "320元",
        "py": "yuán",
        "vn": "320 đồng"
      },
      {
        "zh": "多少元",
        "py": "duōshao yuán",
        "vn": "bao nhiêu đồng"
      },
      {
        "zh": "一元",
        "py": "yì yuán",
        "vn": "một đồng"
      },
      {
        "zh": "几百元",
        "py": "jǐ bǎi yuán",
        "vn": "mấy trăm đồng"
      },
      {
        "zh": "贵了100元",
        "py": "guì le yuán",
        "vn": "đắt hơn 100 đồng"
      }
    ],
    "patterns": [
      {
        "s": "số + 元",
        "m": "Đơn vị tiền — 元 dùng khi viết"
      },
      {
        "s": "元 (viết) ≈ 块 (nói)",
        "m": "Cùng một đơn vị, khác ngữ cảnh"
      }
    ]
  },
  {
    "n": 9,
    "zh": "新鲜",
    "py": "xīnxiān",
    "pos": "Tính từ",
    "vn": "tươi",
    "hv": "tân tiên",
    "em": "🍎",
    "lesson": 3,
    "explain": [
      "Vừa mới, chưa để lâu, còn giữ được chất lượng ban đầu (thường dùng cho đồ ăn)."
    ],
    "usage": "Tính từ, làm vị ngữ với 很/真: 很新鲜, hoặc làm định ngữ: 新鲜的鱼.",
    "collo": [
      "很新鲜",
      "新鲜的鱼",
      "不新鲜"
    ],
    "ex_zh": "这些水果真新鲜，我们买西瓜还是苹果？",
    "ex_py": "Zhèxiē shuǐguǒ zhēn xīnxiān, wǒmen mǎi xīguā háishi píngguǒ?",
    "ex_vn": "Những trái cây này thật tươi, chúng ta mua dưa hấu hay táo?",
    "exList": [
      {
        "zh": "这些水果真新鲜，我们买西瓜还是苹果？",
        "py": "Zhèxiē shuǐguǒ zhēn xīnxiān, wǒmen mǎi xīguā háishi píngguǒ?",
        "vn": "Những trái cây này thật tươi, chúng ta mua dưa hấu hay táo?"
      },
      {
        "zh": "这条鱼很新鲜。",
        "py": "Zhè tiáo yú hěn xīnxiān.",
        "vn": "Con cá này rất tươi."
      },
      {
        "zh": "今天的鲜奶不新鲜了。",
        "py": "Jīntiān de xiānnǎi bù xīnxiān le.",
        "vn": "Sữa tươi hôm nay không còn tươi nữa."
      }
    ],
    "hanzi": [
      {
        "c": "鲜",
        "p": "xiān",
        "type": "左右结构 · Trái-phải",
        "st": 14,
        "ord": "鱼 (ngư) trái → 羊 (dương) phải",
        "rad": "鱼 (ngư – cá)",
        "mean": "tươi",
        "tip": "鱼(cá) + 羊(dê) — hai loại thịt ngon nhất thời cổ → TƯƠI, NGON.",
        "cf": "鱼 (yú – \"cá\", chỉ nửa trái của chữ\")",
        "w": "新鲜 / 鲜奶 / 鲜花"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Vì trái cây này không tươi nên tôi không mua nữa.",
        "answer": "因为这些水果不新鲜，所以我不买了。",
        "answerPy": "Yīnwèi zhèxiē shuǐguǒ bù xīnxiān, suǒyǐ wǒ bù mǎi le.",
        "note": "因为……所以…… nêu nguyên nhân — kết quả.",
        "pair": "因为……所以……"
      },
      {
        "promptLang": "vi",
        "prompt": "Chỉ cần cá còn tươi thì món này chắc chắn sẽ rất ngon.",
        "answer": "只要鱼是新鲜的，这道菜就一定很好吃。",
        "answerPy": "Zhǐyào yú shì xīnxiān de, zhè dào cài jiù yídìng hěn hǎochī.",
        "note": "只要……就…… diễn tả điều kiện đủ.",
        "pair": "只要……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "很新鲜",
        "py": "hěn xīnxiān",
        "vn": "rất tươi"
      },
      {
        "zh": "新鲜的鱼",
        "py": "xīnxiān de yú",
        "vn": "cá tươi"
      },
      {
        "zh": "不新鲜",
        "py": "bù xīnxiān",
        "vn": "không tươi"
      },
      {
        "zh": "新鲜水果",
        "py": "xīnxiān shuǐguǒ",
        "vn": "trái cây tươi"
      },
      {
        "zh": "空气新鲜",
        "py": "kōngqì xīnxiān",
        "vn": "không khí trong lành"
      }
    ],
    "patterns": [
      {
        "s": "新鲜的 + N",
        "m": "… tươi: 新鲜的鱼, 新鲜水果"
      },
      {
        "s": "空气 + 新鲜",
        "m": "Không khí trong lành — nghĩa mở rộng"
      }
    ]
  },
  {
    "n": 10,
    "zh": "甜",
    "py": "tián",
    "pos": "Tính từ",
    "vn": "ngọt",
    "hv": "điềm",
    "em": "🍬",
    "lesson": 3,
    "explain": [
      "Có vị ngọt như đường, mật."
    ],
    "usage": "Tính từ, làm vị ngữ với 很/不: 很甜, 不甜; thường xuất hiện trong câu điều kiện quảng cáo \"不甜不要钱\".",
    "collo": [
      "很甜",
      "不甜",
      "有点儿甜"
    ],
    "ex_zh": "西瓜吧。你看，这上面写着\"西瓜不甜不要钱\"。",
    "ex_py": "Xīguā ba. Nǐ kàn, zhè shàngmian xiězhe \"xīguā bù tián bú yào qián\".",
    "ex_vn": "Dưa hấu đi. Bạn xem, trên đây ghi \"dưa hấu không ngọt không lấy tiền\".",
    "exList": [
      {
        "zh": "西瓜吧。你看，这上面写着\"西瓜不甜不要钱\"。",
        "py": "Xīguā ba. Nǐ kàn, zhè shàngmian xiězhe \"xīguā bù tián bú yào qián\".",
        "vn": "Dưa hấu đi. Bạn xem, trên đây ghi \"dưa hấu không ngọt không lấy tiền\"."
      },
      {
        "zh": "今天买的冷饮很甜。",
        "py": "Jīntiān mǎi de lěngyǐn hěn tián.",
        "vn": "Đồ uống lạnh mua hôm nay rất ngọt."
      },
      {
        "zh": "我喜欢喝甜的花茶。",
        "py": "Wǒ xǐhuan hē tián de huāchá.",
        "vn": "Tôi thích uống trà hoa ngọt."
      }
    ],
    "hanzi": [
      {
        "c": "甜",
        "p": "tián",
        "type": "左右结构 · Trái-phải",
        "st": 11,
        "ord": "舌 (thiệt) trái → 甘 (cam) phải",
        "rad": "舌 (thiệt – cái lưỡi)",
        "mean": "ngọt",
        "tip": "舌(lưỡi) + 甘(ngọt) → dùng LƯỠI cảm nhận vị NGỌT.",
        "cf": "甘 (gān – \"ngọt, cam tâm\", không có bộ 舌\")",
        "w": "很甜 / 甜茶 / 甜点"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Đồ uống này ngọt quá nên tôi không muốn uống hết.",
        "answer": "这杯饮料太甜了，所以我不想喝完。",
        "answerPy": "Zhè bēi yǐnliào tài tián le, suǒyǐ wǒ bù xiǎng hē wán.",
        "note": "因为……所以…… hoặc câu chỉ dùng 所以 khi lý do đã rõ.",
        "pair": "……，所以……"
      },
      {
        "promptLang": "vi",
        "prompt": "Nếu dưa hấu không ngọt thì cửa hàng sẽ không lấy tiền.",
        "answer": "如果西瓜不甜，商店就不要钱。",
        "answerPy": "Rúguǒ xīguā bù tián, shāngdiàn jiù bú yào qián.",
        "note": "如果……就…… diễn tả giả thiết — kết quả.",
        "pair": "如果……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "很甜",
        "py": "hěn tián",
        "vn": "rất ngọt"
      },
      {
        "zh": "不甜",
        "py": "bù tián",
        "vn": "không ngọt"
      },
      {
        "zh": "有点儿甜",
        "py": "yǒudiǎnr tián",
        "vn": "hơi ngọt"
      },
      {
        "zh": "甜的东西",
        "py": "tián de dōngxi",
        "vn": "đồ ngọt"
      },
      {
        "zh": "西瓜很甜",
        "py": "xīguā hěn tián",
        "vn": "dưa hấu rất ngọt"
      }
    ],
    "patterns": [
      {
        "s": "N + 很 + 甜",
        "m": "Cái gì đó rất ngọt"
      },
      {
        "s": "甜 · 酸 · 苦 · 辣 — bốn vị cơ bản"
      }
    ]
  },
  {
    "n": 11,
    "zh": "只",
    "py": "zhǐ",
    "pos": "Phó từ",
    "vn": "chỉ",
    "hv": "chỉ",
    "em": "☝️",
    "lesson": 3,
    "explain": [
      "Giới hạn phạm vi, số lượng hoặc phạm vi hành động ở mức duy nhất được nêu."
    ],
    "usage": "Phó từ, đứng TRƯỚC động từ/tính từ mà nó bổ nghĩa: 只 + V/Adj (只吃水果, 只要200元).",
    "collo": [
      "只吃水果",
      "只要",
      "只学汉语"
    ],
    "ex_zh": "今天晚上只吃水果不吃饭！",
    "ex_py": "Jīntiān wǎnshang zhǐ chī shuǐguǒ bù chī fàn!",
    "ex_vn": "Tối nay chỉ ăn trái cây không ăn cơm!",
    "exList": [
      {
        "zh": "今天晚上只吃水果不吃饭！",
        "py": "Jīntiān wǎnshang zhǐ chī shuǐguǒ bù chī fàn!",
        "vn": "Tối nay chỉ ăn trái cây không ăn cơm!"
      },
      {
        "zh": "我只学汉语，不学英语。",
        "py": "Wǒ zhǐ xué Hànyǔ, bù xué Yīngyǔ.",
        "vn": "Tôi chỉ học tiếng Trung, không học tiếng Anh."
      },
      {
        "zh": "这儿只卖书，不卖水。",
        "py": "Zhèr zhǐ mài shū, bú mài shuǐ.",
        "vn": "Ở đây chỉ bán sách, không bán nước."
      }
    ],
    "hanzi": [
      {
        "c": "只",
        "p": "zhǐ",
        "type": "上下结构 · Trên-dưới",
        "st": 5,
        "ord": "口 trên → 八 dưới",
        "rad": "口 (khẩu – miệng)",
        "mean": "chỉ; con (lượng từ)",
        "tip": "Chữ tượng hình cổ chỉ con chim vừa bay ra, nghĩa mở rộng thành \"duy nhất, chỉ\".",
        "cf": "尺 (chǐ – \"thước\", hình dạng gần giống\")",
        "w": "只吃 / 只要 / 只有"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Vì cửa hàng chỉ còn táo nên chúng tôi chỉ mua táo.",
        "answer": "因为商店只有苹果了，所以我们只买了苹果。",
        "answerPy": "Yīnwèi shāngdiàn zhǐ yǒu píngguǒ le, suǒyǐ wǒmen zhǐ mǎile píngguǒ.",
        "note": "因为……所以…… nêu nguyên nhân — kết quả.",
        "pair": "因为……所以……"
      },
      {
        "promptLang": "vi",
        "prompt": "Nếu bạn chỉ có 100 đồng thì không đủ mua cái quần này.",
        "answer": "如果你只有100元，就不够买这条裤子。",
        "answerPy": "Rúguǒ nǐ zhǐ yǒu yìbǎi yuán, jiù bú gòu mǎi zhè tiáo kùzi.",
        "note": "如果……就…… diễn tả giả thiết — kết quả.",
        "pair": "如果……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "只吃水果",
        "py": "zhī chī shuǐguǒ",
        "vn": "chỉ ăn trái cây"
      },
      {
        "zh": "只有一个",
        "py": "zhǐyǒu yí gè",
        "vn": "chỉ có một cái"
      },
      {
        "zh": "只学汉语",
        "py": "zhī xué Hànyǔ",
        "vn": "chỉ học tiếng Trung"
      },
      {
        "zh": "只要一杯",
        "py": "zhǐyào yì bēi",
        "vn": "chỉ lấy một cốc"
      },
      {
        "zh": "只想休息",
        "py": "zhī xiǎng xiūxi",
        "vn": "chỉ muốn nghỉ"
      }
    ],
    "patterns": [
      {
        "s": "只 + V",
        "m": "Chỉ làm gì — 只 đứng trước động từ"
      },
      {
        "s": "✗ 我买只一个 → ✓ 我只买一个"
      }
    ]
  },
  {
    "n": 12,
    "zh": "放",
    "py": "fàng",
    "pos": "Động từ",
    "vn": "đặt, để",
    "hv": "phóng",
    "em": "📥",
    "lesson": 4,
    "explain": [
      "Đặt một vật vào một vị trí nào đó."
    ],
    "usage": "Động từ, thường đi cùng trợ từ 着 trong câu tồn tại: [nơi chốn] + 放着 + [vật] (桌子上放着很多饮料).",
    "collo": [
      "放在桌子上",
      "放着",
      "没放着"
    ],
    "ex_zh": "桌子上放着很多饮料，你喝什么？",
    "ex_py": "Zhuōzi shang fàngzhe hěn duō yǐnliào, nǐ hē shénme?",
    "ex_vn": "Trên bàn đặt rất nhiều đồ uống, bạn uống gì?",
    "exList": [
      {
        "zh": "桌子上放着很多饮料，你喝什么？",
        "py": "Zhuōzi shang fàngzhe hěn duō yǐnliào, nǐ hē shénme?",
        "vn": "Trên bàn đặt rất nhiều đồ uống, bạn uống gì?"
      },
      {
        "zh": "我的手机放哪儿了？我怎么不记得了？",
        "py": "Wǒ de shǒujī fàng nǎr le? Wǒ zěnme bù jìde le?",
        "vn": "Điện thoại của tôi để đâu rồi? Sao tôi không nhớ nữa?"
      },
      {
        "zh": "桌子上面放着一杯咖啡，是你的吗？",
        "py": "Zhuōzi shàngmian fàngzhe yì bēi kāfēi, shì nǐ de ma?",
        "vn": "Trên bàn có để một ly cà phê, có phải của bạn không?"
      }
    ],
    "hanzi": [
      {
        "c": "放",
        "p": "fàng",
        "type": "左右结构 · Trái-phải",
        "st": 8,
        "ord": "方 (phương) trái → 攵 (phốc) phải",
        "rad": "攵 (phốc – gõ nhẹ)",
        "mean": "đặt, để; thả",
        "tip": "方(phương hướng) + 攵(tác động bằng tay) → dùng tay đưa vật theo một hướng rồi ĐẶT xuống.",
        "cf": "方 (fāng – \"phương hướng\", không có bộ 攵\")",
        "w": "放着 / 放在 / 放心"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Vì trên bàn để rất nhiều đồ uống nên khách ai cũng vui.",
        "answer": "因为桌子上放着很多饮料，所以客人都很高兴。",
        "answerPy": "Yīnwèi zhuōzi shang fàngzhe hěn duō yǐnliào, suǒyǐ kèrén dōu hěn gāoxìng.",
        "note": "因为……所以…… nêu nguyên nhân — kết quả.",
        "pair": "因为……所以……"
      },
      {
        "promptLang": "vi",
        "prompt": "Nếu bạn nhớ mình để chìa khóa ở đâu thì nói cho tôi biết.",
        "answer": "如果你记得钥匙放在哪儿了，就告诉我吧。",
        "answerPy": "Rúguǒ nǐ jìde yàoshi fàng zài nǎr le, jiù gàosu wǒ ba.",
        "note": "如果……就…… diễn tả giả thiết — kết quả (ôn lại 记得 vừa học).",
        "pair": "如果……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "放在桌子上",
        "py": "fàng zài zhuōzi shàng",
        "vn": "để trên bàn"
      },
      {
        "zh": "放好",
        "py": "fàng hǎo",
        "vn": "để cho ngay ngắn"
      },
      {
        "zh": "放着",
        "py": "fàng zhe",
        "vn": "đang để đó"
      },
      {
        "zh": "放进包里",
        "py": "fàng jìn bāo li",
        "vn": "cho vào túi"
      },
      {
        "zh": "别放这儿",
        "py": "bié fàng zhèr",
        "vn": "đừng để ở đây"
      }
    ],
    "patterns": [
      {
        "s": "把 + N + 放在 + nơi chốn + 上 / 里",
        "m": "Đặt cái gì ở đâu"
      },
      {
        "s": "放着",
        "m": "Đang để đó — 着 chỉ trạng thái kéo dài"
      }
    ]
  },
  {
    "n": 13,
    "zh": "饮料",
    "py": "yǐnliào",
    "pos": "Danh từ",
    "vn": "đồ uống, thức uống",
    "hv": "ẩm liệu",
    "em": "🥤",
    "lesson": 4,
    "explain": [
      "Chất lỏng dùng để uống nói chung (nước ngọt, trà, cà phê...)."
    ],
    "usage": "Danh từ; lượng từ đi kèm là 杯 (ly) hoặc 瓶 (chai): 一杯饮料, 一瓶饮料.",
    "collo": [
      "喝饮料",
      "买饮料",
      "水果饮料"
    ],
    "ex_zh": "桌子上放着很多饮料，你喝什么？",
    "ex_py": "Zhuōzi shang fàngzhe hěn duō yǐnliào, nǐ hē shénme?",
    "ex_vn": "Trên bàn đặt rất nhiều đồ uống, bạn uống gì?",
    "exList": [
      {
        "zh": "桌子上放着很多饮料，你喝什么？",
        "py": "Zhuōzi shang fàngzhe hěn duō yǐnliào, nǐ hē shénme?",
        "vn": "Trên bàn đặt rất nhiều đồ uống, bạn uống gì?"
      },
      {
        "zh": "那不是绿茶，是水果饮料。",
        "py": "Nà bú shì lǜchá, shì shuǐguǒ yǐnliào.",
        "vn": "Đó không phải trà xanh, đó là nước ép trái cây."
      },
      {
        "zh": "桌子上的饮料给你吧。",
        "py": "Zhuōzi shang de yǐnliào gěi nǐ ba.",
        "vn": "Đồ uống trên bàn cho bạn đấy."
      }
    ],
    "hanzi": [
      {
        "c": "饮",
        "p": "yǐn",
        "type": "左右结构 · Trái-phải",
        "st": 6,
        "ord": "饣 (thực) trái → 欠 (khiếm) phải",
        "rad": "饣 (thực – ăn uống)",
        "mean": "uống",
        "tip": "Bộ 饣(ăn uống) + 欠(há miệng) → há miệng để UỐNG.",
        "cf": "吹 (chuī – \"thổi\", cũng có 欠\")",
        "w": "饮料 / 喝饮料"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Vì trời nóng nên mọi người đều muốn uống đồ uống lạnh.",
        "answer": "因为天气很热，所以大家都想喝冷饮料。",
        "answerPy": "Yīnwèi tiānqì hěn rè, suǒyǐ dàjiā dōu xiǎng hē lěng yǐnliào.",
        "note": "因为……所以…… nêu nguyên nhân — kết quả.",
        "pair": "因为……所以……"
      },
      {
        "promptLang": "vi",
        "prompt": "Nếu đồ uống này quá ngọt thì bạn đừng uống hết.",
        "answer": "如果这杯饮料太甜，你就别喝完。",
        "answerPy": "Rúguǒ zhè bēi yǐnliào tài tián, nǐ jiù bié hē wán.",
        "note": "如果……就…… diễn tả giả thiết — kết quả (ôn lại 甜 vừa học).",
        "pair": "如果……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "喝饮料",
        "py": "hē yǐnliào",
        "vn": "uống nước"
      },
      {
        "zh": "买饮料",
        "py": "mǎi yǐnliào",
        "vn": "mua đồ uống"
      },
      {
        "zh": "一瓶饮料",
        "py": "yì píng yǐnliào",
        "vn": "một chai nước"
      },
      {
        "zh": "水果饮料",
        "py": "shuǐguǒ yǐnliào",
        "vn": "nước trái cây"
      },
      {
        "zh": "冷饮料",
        "py": "lěng yǐnliào",
        "vn": "đồ uống lạnh"
      }
    ],
    "patterns": [
      {
        "s": "喝 + 饮料",
        "m": "Uống đồ uống"
      },
      {
        "s": "饮 + 料",
        "m": "Thứ (料) để uống (饮)"
      }
    ]
  },
  {
    "n": 14,
    "zh": "或者",
    "py": "huòzhě",
    "pos": "Liên từ",
    "vn": "hoặc",
    "hv": "hoặc giả",
    "em": "🔁",
    "lesson": 4,
    "explain": [
      "Dùng để nêu ra sự lựa chọn giữa hai (hay nhiều) khả năng, thường dùng trong câu trần thuật."
    ],
    "usage": "Đứng giữa hai vế lựa chọn trong câu KHẲNG ĐỊNH (không phải câu hỏi): A + 或者 + B, đều được/đều có thể.",
    "collo": [
      "茶或者咖啡",
      "或者工作累了",
      "看书或者听音乐"
    ],
    "ex_zh": "茶或者咖啡都可以。",
    "ex_py": "Chá huòzhě kāfēi dōu kěyǐ.",
    "ex_vn": "Trà hoặc cà phê đều được.",
    "exList": [
      {
        "zh": "茶或者咖啡都可以。",
        "py": "Chá huòzhě kāfēi dōu kěyǐ.",
        "vn": "Trà hoặc cà phê đều được."
      },
      {
        "zh": "今天晚上吃米饭或者面条都可以。",
        "py": "Jīntiān wǎnshang chī mǐfàn huòzhě miàntiáo dōu kěyǐ.",
        "vn": "Tối nay ăn cơm hoặc mì đều được."
      },
      {
        "zh": "天冷了或者工作累了的时候，喝杯热茶会很舒服。",
        "py": "Tiān lěngle huòzhě gōngzuò lèile de shíhou, hē bēi rè chá huì hěn shūfu.",
        "vn": "Khi trời lạnh hoặc làm việc mệt, uống ly trà nóng sẽ rất dễ chịu."
      }
    ],
    "hanzi": [
      {
        "c": "或",
        "p": "huò",
        "type": "半包围结构 · Bán bao vây",
        "st": 8,
        "ord": "囗 bao ngoài → 戈+一 trong",
        "rad": "戈 (qua – vũ khí)",
        "mean": "hoặc, có thể",
        "tip": "Hình vẽ cổ: dùng vũ khí 戈 bảo vệ vùng đất 囗 → mở rộng nghĩa \"có lẽ, hoặc\" (chưa chắc chắn).",
        "cf": "国 (guó – \"quốc gia\", cùng gốc chữ 或\")",
        "w": "或者 / 也许"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Bạn mặc áo sơ mi hoặc mặc quần đều được, chỉ cần bạn thấy thoải mái là được.",
        "answer": "你穿衬衫或者穿裤子都可以，只要你觉得舒服就行。",
        "answerPy": "Nǐ chuān chènshān huòzhě chuān kùzi dōu kěyǐ, zhǐyào nǐ juéde shūfu jiù xíng.",
        "note": "或者 dùng trong câu kể; 还是 dùng trong câu hỏi.",
        "pair": "只要……就……"
      },
      {
        "promptLang": "vi",
        "prompt": "Chỉ cần bạn uống trà hoặc cà phê thì sẽ tỉnh táo hơn.",
        "answer": "只要你喝茶或者喝咖啡，就会更精神。",
        "answerPy": "Zhǐyào nǐ hē chá huòzhě hē kāfēi, jiù huì gèng jīngshen.",
        "note": "只要……就…… diễn tả điều kiện đủ.",
        "pair": "只要……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "茶或者咖啡",
        "py": "chá huòzhě kāfēi",
        "vn": "trà hoặc cà phê"
      },
      {
        "zh": "看书或者听音乐",
        "py": "kàn shū huòzhě tīng yīnyuè",
        "vn": "đọc sách hoặc nghe nhạc"
      },
      {
        "zh": "今天或者明天",
        "py": "jīntiān huòzhě míngtiān",
        "vn": "hôm nay hoặc ngày mai"
      },
      {
        "zh": "或者你来",
        "py": "huòzhě nǐ lái",
        "vn": "hoặc là bạn đến"
      },
      {
        "zh": "我或者他",
        "py": "wǒ huòzhě tā",
        "vn": "tôi hoặc anh ấy"
      }
    ],
    "patterns": [
      {
        "s": "A 或者 B",
        "m": "A hoặc B — dùng trong câu TRẦN THUẬT"
      },
      {
        "s": "或者 (kể) ≠ 还是 (hỏi)",
        "m": "Đây là chỗ học sinh Việt hay nhầm"
      }
    ]
  },
  {
    "n": 15,
    "zh": "舒服",
    "py": "shūfu",
    "pos": "Tính từ",
    "vn": "dễ chịu, thoải mái",
    "hv": "thư phục",
    "em": "😌",
    "lesson": 4,
    "explain": [
      "Cảm giác thoải mái, khoan khoái về thể chất hoặc tinh thần."
    ],
    "usage": "Tính từ, làm vị ngữ với 很/会: 很舒服, 会很舒服; phủ định 不舒服 còn có nghĩa \"khó ở, không khỏe\".",
    "collo": [
      "很舒服",
      "不舒服",
      "觉得舒服"
    ],
    "ex_zh": "喝杯热茶会很舒服。",
    "ex_py": "Hē bēi rè chá huì hěn shūfu.",
    "ex_vn": "Uống một ly trà nóng sẽ rất dễ chịu.",
    "exList": [
      {
        "zh": "喝杯热茶会很舒服。",
        "py": "Hē bēi rè chá huì hěn shūfu.",
        "vn": "Uống một ly trà nóng sẽ rất dễ chịu."
      },
      {
        "zh": "你怎么了？不舒服吗？",
        "py": "Nǐ zěnme le? Bù shūfu ma?",
        "vn": "Bạn sao vậy? Không khỏe à?"
      },
      {
        "zh": "工作累的时候听听歌，会觉得舒服点儿。",
        "py": "Gōngzuò lèi de shíhou tīngting gē, huì juéde shūfu diǎnr.",
        "vn": "Lúc làm việc mệt nghe chút nhạc sẽ thấy dễ chịu hơn."
      }
    ],
    "hanzi": [
      {
        "c": "舒",
        "p": "shū",
        "type": "左右结构 · Trái-phải",
        "st": 12,
        "ord": "舍 (xá) trái → 予 (dữ) phải",
        "rad": "舌 (thiệt)",
        "mean": "thư thái, dễ chịu",
        "tip": "舍(buông bỏ, thả lỏng) + 予(cho đi) → buông bỏ căng thẳng, cảm thấy THƯ THÁI.",
        "cf": "舍 (shě – \"buông bỏ\", không có 予\")",
        "w": "舒服 / 舒适"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Vì cảm thấy không khỏe nên hôm nay tôi không muốn đi làm.",
        "answer": "因为觉得不舒服，所以我今天不想上班。",
        "answerPy": "Yīnwèi juéde bù shūfu, suǒyǐ wǒ jīntiān bù xiǎng shàngbān.",
        "note": "因为……所以…… nêu nguyên nhân — kết quả.",
        "pair": "因为……所以……"
      },
      {
        "promptLang": "vi",
        "prompt": "Chỉ cần bạn nghỉ ngơi nhiều hơn thì sẽ thấy dễ chịu hơn.",
        "answer": "只要你多休息，就会觉得舒服一点儿。",
        "answerPy": "Zhǐyào nǐ duō xiūxi, jiù huì juéde shūfu yìdiǎnr.",
        "note": "只要……就…… diễn tả điều kiện đủ.",
        "pair": "只要……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "很舒服",
        "py": "hěn shūfu",
        "vn": "rất dễ chịu"
      },
      {
        "zh": "不舒服",
        "py": "bù shūfu",
        "vn": "khó chịu, không khoẻ"
      },
      {
        "zh": "觉得舒服",
        "py": "juéde shūfu",
        "vn": "thấy thoải mái"
      },
      {
        "zh": "坐着很舒服",
        "py": "zuò zhe hěn shūfu",
        "vn": "ngồi rất thoải mái"
      },
      {
        "zh": "身体不舒服",
        "py": "shēntǐ bù shūfu",
        "vn": "người không khoẻ"
      }
    ],
    "patterns": [
      {
        "s": "Sub + 不舒服",
        "m": "Ai đó thấy trong người không khoẻ"
      },
      {
        "s": "V + 着 + 很舒服",
        "m": "Làm gì thấy thoải mái"
      }
    ]
  },
  {
    "n": 16,
    "zh": "花",
    "py": "huā",
    "pos": "Danh từ",
    "vn": "hoa",
    "hv": "hoa",
    "em": "🌸",
    "lesson": 4,
    "explain": [
      "Bộ phận sinh sản của cây, thường có màu sắc và hương thơm; ở đây dùng trong từ 花茶 (trà hoa/trà ướp hoa)."
    ],
    "usage": "Danh từ; làm định ngữ tạo từ ghép: 花 + danh từ (花茶 = trà hoa).",
    "collo": [
      "花茶",
      "买花",
      "很多花"
    ],
    "ex_zh": "你喜欢喝什么茶？",
    "ex_py": "Nǐ xǐhuan hē shénme chá?",
    "ex_vn": "Bạn thích uống trà gì?",
    "exList": [
      {
        "zh": "花茶、绿茶、红茶，我都喜欢。",
        "py": "Huāchá, lǜchá, hóngchá, wǒ dōu xǐhuan.",
        "vn": "Trà hoa, trà xanh, trà đen, tôi đều thích."
      },
      {
        "zh": "公园里种着很多花。",
        "py": "Gōngyuán lǐ zhòngzhe hěn duō huā.",
        "vn": "Trong công viên trồng rất nhiều hoa."
      },
      {
        "zh": "这是朋友送我的花。",
        "py": "Zhè shì péngyou sòng wǒ de huā.",
        "vn": "Đây là hoa bạn tôi tặng."
      }
    ],
    "hanzi": [
      {
        "c": "花",
        "p": "huā",
        "type": "上下结构 · Trên-dưới",
        "st": 7,
        "ord": "艹 (thảo) trên → 化 (hoá) dưới",
        "rad": "艹 (thảo – cỏ cây)",
        "mean": "hoa",
        "tip": "Bộ cỏ 艹 (thực vật) + 化(biến hoá) → thực vật BIẾN HOÁ nở rộ thành HOA.",
        "cf": "化 (huà – \"biến hoá\", không có bộ 艹\")",
        "w": "花茶 / 一朵花 / 花园"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Vì trà hoa có mùi thơm nên tôi rất thích uống.",
        "answer": "因为花茶很香，所以我很喜欢喝。",
        "answerPy": "Yīnwèi huāchá hěn xiāng, suǒyǐ wǒ hěn xǐhuan hē.",
        "note": "因为……所以…… nêu nguyên nhân — kết quả.",
        "pair": "因为……所以……"
      },
      {
        "promptLang": "vi",
        "prompt": "Trà hoa hoặc trà xanh, loại nào tôi cũng thích uống.",
        "answer": "花茶或者绿茶，我都喜欢喝。",
        "answerPy": "Huāchá huòzhě lǜchá, wǒ dōu xǐhuan hē.",
        "note": "Sửa từ 不管……还是…… (khung HSK 4) sang 或者……都…… cho đúng tầm HSK 3.",
        "pair": "或者……都……"
      }
    ],
    "colloFull": [
      {
        "zh": "买花",
        "py": "mǎi huā",
        "vn": "mua hoa"
      },
      {
        "zh": "花茶",
        "py": "huāchá",
        "vn": "trà hoa"
      },
      {
        "zh": "很多花",
        "py": "hěn duō huā",
        "vn": "rất nhiều hoa"
      },
      {
        "zh": "一朵花",
        "py": "yī duo huā",
        "vn": "một bông hoa"
      },
      {
        "zh": "花很香",
        "py": "huā hěn xiāng",
        "vn": "hoa rất thơm"
      }
    ],
    "patterns": [
      {
        "s": "một + 朵 + 花",
        "m": "Lượng từ 朵 cho hoa"
      },
      {
        "s": "花 (hoa) ≠ 花 (tiêu tiền) — cùng chữ, khác nghĩa"
      }
    ]
  },
  {
    "n": 17,
    "zh": "绿",
    "py": "lǜ",
    "pos": "Tính từ",
    "vn": "xanh (lá cây)",
    "hv": "lục",
    "em": "💚",
    "lesson": 4,
    "explain": [
      "Màu xanh lá cây, màu của cây cỏ."
    ],
    "usage": "Tính từ chỉ màu sắc, làm định ngữ trực tiếp trước danh từ: 绿 + danh từ (绿茶), hoặc làm vị ngữ với 很: 很绿.",
    "collo": [
      "绿茶",
      "绿色",
      "很绿"
    ],
    "ex_zh": "花茶、绿茶、红茶，我都喜欢。",
    "ex_py": "Huāchá, lǜchá, hóngchá, wǒ dōu xǐhuan.",
    "ex_vn": "Trà hoa, trà xanh, trà đen, tôi đều thích.",
    "exList": [
      {
        "zh": "花茶、绿茶、红茶，我都喜欢。",
        "py": "Huāchá, lǜchá, hóngchá, wǒ dōu xǐhuan.",
        "vn": "Trà hoa, trà xanh, trà đen, tôi đều thích."
      },
      {
        "zh": "这儿没有绿茶。",
        "py": "Zhèr méiyǒu lǜchá.",
        "vn": "Ở đây không có trà xanh."
      },
      {
        "zh": "桌子上不是放着绿茶吗？",
        "py": "Zhuōzi shang bú shì fàngzhe lǜchá ma?",
        "vn": "Trên bàn chẳng phải đang để trà xanh sao?"
      }
    ],
    "hanzi": [
      {
        "c": "绿",
        "p": "lǜ",
        "type": "左右结构 · Trái-phải",
        "st": 11,
        "ord": "纟 (mịch) trái → 录 (lục) phải",
        "rad": "纟 (mịch – tơ, sợi)",
        "mean": "xanh lá cây",
        "tip": "Bộ tơ lụa 纟 (thường được nhuộm màu) + 录(ghi lại) → tên gọi màu XANH LÁ được ghi nhận qua vải nhuộm.",
        "cf": "录 (lù – \"ghi chép\", không có bộ 纟\")",
        "w": "绿茶 / 绿色 / 很绿"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Vì trà xanh có vị hơi đắng nên bà tôi không thích uống.",
        "answer": "因为绿茶有点儿苦，所以我奶奶不喜欢喝。",
        "answerPy": "Yīnwèi lǜchá yǒudiǎnr kǔ, suǒyǐ wǒ nǎinai bù xǐhuan hē.",
        "note": "因为……所以…… nêu nguyên nhân — kết quả.",
        "pair": "因为……所以……"
      },
      {
        "promptLang": "vi",
        "prompt": "Nếu cửa hàng không còn trà xanh thì cho tôi trà hoa vậy.",
        "answer": "如果商店没有绿茶了，就给我花茶吧。",
        "answerPy": "Rúguǒ shāngdiàn méiyǒu lǜchá le, jiù gěi wǒ huāchá ba.",
        "note": "如果……就…… diễn tả giả thiết — kết quả (ôn lại 花 vừa học).",
        "pair": "如果……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "绿茶",
        "py": "lǜchá",
        "vn": "trà xanh"
      },
      {
        "zh": "绿色",
        "py": "lǜsè",
        "vn": "màu xanh lá"
      },
      {
        "zh": "很绿",
        "py": "hěn lǜ",
        "vn": "rất xanh"
      },
      {
        "zh": "绿的裤子",
        "py": "lǜ de kùzi",
        "vn": "cái quần xanh"
      },
      {
        "zh": "草绿了",
        "py": "cǎo lǜ le",
        "vn": "cỏ xanh rồi"
      }
    ],
    "patterns": [
      {
        "s": "绿 + 色 / 茶",
        "m": "Màu xanh lá, trà xanh"
      },
      {
        "s": "绿 (xanh lá) ≠ 蓝 (xanh dương)"
      }
    ]
  }
];

const wuData = [
  {img:'👖',label:'裤子',py:'kùzi',letter:'A'},
  {img:'👔',label:'衬衫',py:'chènshān',letter:'B'},
  {img:'🥤',label:'饮料',py:'yǐnliào',letter:'C'},
  {img:'🍎',label:'新鲜',py:'xīnxiān',letter:'D'},
  {img:'🌸',label:'花',py:'huā',letter:'E'},
  {img:'⛰️',label:'爬山',py:'páshān',letter:'F'},
];

var dialogData = [
  {scene:'在小丽家 · Ở nhà chị Lệ',
   preQuiz:[
     {q:'明天天气怎么样？',opts:['多云','晴天','下雨'],ans:0},
     {q:'小刚明天要做什么？',opts:['去爬山','去商场','去水果店'],ans:0},
     {q:'小丽明天去吗？',opts:['不去，她有事','去','还没决定'],ans:0},
   ],
   lines:[
     {sp:0,zh:'明天是晴天还是阴天？',py:'Míngtiān shì qíngtiān háishi yīntiān?',vn:'Ngày mai trời nắng hay trời âm u?'},
     {sp:1,zh:'阴天，电视上说多云。怎么了？有事？',py:'Yīntiān, diànshì shang shuō duōyún. Zěnme le? Yǒu shì?',vn:'Trời âm u, trên tivi nói nhiều mây. Sao vậy? Có việc gì à?'},
     {sp:0,zh:'没事，我们明天要去爬山。',py:'Méi shì, wǒmen míngtiān yào qù páshān.',vn:'Không có gì, mai chúng tôi định đi leo núi.'},
     {sp:1,zh:'爬山的时候要小心点儿。',py:'Páshān de shíhou yào xiǎoxīn diǎnr.',vn:'Lúc leo núi phải cẩn thận một chút.'},
     {sp:0,zh:'好，你也去吗？',py:'Hǎo, nǐ yě qù ma?',vn:'Được, bạn cũng đi chứ?'},
     {sp:1,zh:'我不去，我有事。',py:'Wǒ bú qù, wǒ yǒu shì.',vn:'Tôi không đi, tôi có việc.'},
   ]},
  {scene:'在商场 · Ở cửa hàng bách hóa',
   preQuiz:[
     {q:'周太太在看什么？',opts:['裤子和衬衫','水果','伞'],ans:0},
     {q:'周太太已经有几条这样的裤子了？',opts:['两条','一条','三条'],ans:0},
     {q:'衬衫多少钱？',opts:['320元','230元','300元'],ans:0},
   ],
   lines:[
     {sp:0,zh:'你觉得这条裤子怎么样？',py:'Nǐ juéde zhè tiáo kùzi zěnmeyàng?',vn:'Anh thấy cái quần này thế nào?'},
     {sp:1,zh:'我记得你已经有两条这样的裤子了。',py:'Wǒ jìde nǐ yǐjīng yǒu liǎng tiáo zhèyàng de kùzi le.',vn:'Anh nhớ là em đã có hai cái quần kiểu này rồi.'},
     {sp:0,zh:'那我们再看看别的。',py:'Nà wǒmen zài kànkan biéde.',vn:'Vậy chúng ta xem thêm cái khác nữa.'},
     {sp:0,zh:'这件衬衫怎么样？',py:'Zhè jiàn chènshān zěnmeyàng?',vn:'Cái áo sơ mi này thế nào?'},
     {sp:1,zh:'还不错，多少钱？',py:'Hái búcuò, duōshao qián?',vn:'Cũng được đấy, bao nhiêu tiền?'},
     {sp:0,zh:'这上面写着320元。',py:'Zhè shàngmian xiězhe sānbǎi èrshí yuán.',vn:'Trên đây ghi 320 đồng.'},
     {sp:1,zh:'买一件。',py:'Mǎi yí jiàn.',vn:'Mua một cái.'},
   ]},
  {scene:'在水果店 · Ở cửa hàng trái cây',
   preQuiz:[
     {q:'水果店里的水果怎么样？',opts:['很新鲜','不新鲜','很贵'],ans:0},
     {q:'他们决定买什么西瓜？',opts:['大点儿的','小点儿的','甜一点儿的'],ans:0},
     {q:'今天晚上他们打算吃什么？',opts:['只吃水果','吃米饭','吃面条'],ans:0},
   ],
   lines:[
     {sp:1,zh:'这些水果真新鲜，我们买西瓜还是苹果？',py:'Zhèxiē shuǐguǒ zhēn xīnxiān, wǒmen mǎi xīguā háishi píngguǒ?',vn:'Những trái cây này thật tươi, chúng ta mua dưa hấu hay táo?'},
     {sp:0,zh:'西瓜吧。你看，这上面写着"西瓜不甜不要钱"。',py:'Xīguā ba. Nǐ kàn, zhè shàngmian xiězhe "xīguā bù tián bú yào qián".',vn:'Dưa hấu đi. Em xem, trên đây ghi "dưa hấu không ngọt không lấy tiền".'},
     {sp:1,zh:'那我们买一个大点儿的吧。',py:'Nà wǒmen mǎi yí ge dà diǎnr de ba.',vn:'Vậy chúng ta mua một quả to một chút đi.'},
     {sp:0,zh:'再买几个苹果。',py:'Zài mǎi jǐ ge píngguǒ.',vn:'Mua thêm vài quả táo nữa.'},
     {sp:1,zh:'好啊，今天晚上只吃水果不吃饭！',py:'Hǎo a, jīntiān wǎnshang zhǐ chī shuǐguǒ bù chī fàn!',vn:'Được đấy, tối nay chỉ ăn trái cây không ăn cơm!'},
   ]},
  {scene:'在休息室 · Trong phòng giải lao',
   preQuiz:[
     {q:'桌子上放着什么？',opts:['很多饮料','很多水果','很多茶杯'],ans:0},
     {q:'小丽最喜欢喝什么？',opts:['茶','咖啡','水'],ans:0},
     {q:'小丽喜欢喝哪些茶？',opts:['花茶、绿茶、红茶','只喝绿茶','只喝红茶'],ans:0},
   ],
   lines:[
     {sp:1,zh:'桌子上放着很多饮料，你喝什么？',py:'Zhuōzi shang fàngzhe hěn duō yǐnliào, nǐ hē shénme?',vn:'Trên bàn đặt rất nhiều đồ uống, bạn uống gì?'},
     {sp:0,zh:'茶或者咖啡都可以。你呢？你喝什么？',py:'Chá huòzhě kāfēi dōu kěyǐ. Nǐ ne? Nǐ hē shénme?',vn:'Trà hoặc cà phê đều được. Còn bạn? Bạn uống gì?'},
     {sp:1,zh:'我喝茶，茶是我的最爱。天冷了或者工作累了的时候，喝杯热茶会很舒服。',py:'Wǒ hē chá, chá shì wǒ de zuì ài. Tiān lěngle huòzhě gōngzuò lèile de shíhou, hē bēi rè chá huì hěn shūfu.',vn:'Tôi uống trà, trà là thứ tôi thích nhất. Khi trời lạnh hoặc làm việc mệt, uống ly trà nóng sẽ rất dễ chịu.'},
     {sp:0,zh:'你喜欢喝什么茶？',py:'Nǐ xǐhuan hē shénme chá?',vn:'Bạn thích uống trà gì?'},
     {sp:1,zh:'花茶、绿茶、红茶，我都喜欢。',py:'Huāchá, lǜchá, hóngchá, wǒ dōu xǐhuan.',vn:'Trà hoa, trà xanh, trà đen, tôi đều thích.'},
   ]},
];

// ══════════════════════════════════════════
// PHẦN 1 · GHÉP TỪ (Collocation)
// ══════════════════════════════════════════
var matchData = [
  {left:'我昨天买了一条', right:'裤子'},
  {left:'他今天穿了一件白', right:'衬衫'},
  {left:'公园里的树都', right:'绿了'},
  {left:'商店里有茶、咖啡和别的', right:'饮料'},
  {left:'今天天气很好，我们去', right:'爬山吧'},
  {left:'你拿着这么多杯子，走路要', right:'小心'},
  {left:'那个商店在哪儿，你还', right:'记得吗'},
];

// ══════════════════════════════════════════
// PHẦN 3a · ĐIỀN TỪ
// ══════════════════════════════════════════
var fillData = [
  {pre:'A：你喝绿茶', blank:'还是', post:'咖啡？B：绿茶吧，我不太喜欢喝咖啡。', hint:'(hay, hay là)', ans:'还是', exp:'Câu hỏi chọn một trong hai “A hay B?” dùng 还是; câu hỏi có 还是 không thêm 吗.'},
  {pre:'晚上我想看电影', blank:'或者', post:'去公园走走，你想一起去吗？', hint:'(hoặc)', ans:'或者', exp:'Câu kể (không hỏi) nêu hai việc có thể làm → dùng 或者 nối hai việc.'},
  {pre:'A：我们星期六去还是星期天去？B：星期六', blank:'或者', post:'星期天都可以，我这个周末不忙。', hint:'(hoặc)', ans:'或者', exp:'A hỏi nên dùng 还是; B trả lời “ngày nào cũng được” (câu kể + 都可以) nên dùng 或者.'},
  {pre:'我的桌子上', blank:'放着', post:'两本汉语书和一杯饮料。', hint:'(đang để, đặt sẵn)', ans:'放着', exp:'Câu tồn tại: nơi chốn + 放着 + số lượng + danh từ; 着 cho biết đồ vật vẫn đang nằm ở đó.'},
  {pre:'A：你看，前面的树下', blank:'坐着', post:'一个人，是不是周经理？B：是他，我们去问问。', hint:'(đang ngồi)', ans:'坐着', exp:'Nơi chốn + 坐着 + 一个人 = ở đó có một người đang ngồi; đầu câu là nơi chốn, không thêm 在.'},
  {pre:'A：天这么阴，下午', blank:'会', post:'下雨吗？B：可能会，你出去的时候带一把伞吧。', hint:'(sẽ — đoán trước)', ans:'会', exp:'会 + động từ = có khả năng sẽ xảy ra; ôn lượng từ 一把伞 (Bài 2).'},
  {pre:'你每天都复习，明天的考试不', blank:'会', post:'很难的，别着急。', hint:'(sẽ)', ans:'会', exp:'不会……的 = chắc chắn sẽ không…, dùng để trấn an; ôn 着急 (Bài 1).'},
  {pre:'我妹妹买了两', blank:'条', post:'裤子，一条红色的，一条绿色的。', hint:'(chiếc — dùng cho đồ dài)', ans:'条', exp:'Quần, cá, con đường… dùng lượng từ 条; áo dùng 件.'},
  {pre:'A：你还', blank:'记得', post:'我的手机号吗？B：不记得了，你再告诉我一次吧。', hint:'(nhớ, còn nhớ)', ans:'记得', exp:'记得 = còn nhớ; phủ định là 不记得 (không nói 没记得 khi nói “không nhớ”).'},
  {pre:'妈妈每天早上去买菜，她说早上的菜最', blank:'新鲜', post:'。', hint:'(tươi)', ans:'新鲜', exp:'新鲜 = tươi, dùng cho rau, quả, cá thịt; 最 + tính từ = nhất.'},
  {pre:'A：这些苹果', blank:'甜', post:'不甜？B：很甜，我已经吃了两个了。', hint:'(ngọt)', ans:'甜', exp:'Hỏi chính phản: 甜不甜 = có ngọt không; ôn 已经……了 (HSK2).'},
  {pre:'A：今天来上课的学生多吗？B：不多，', blank:'只', post:'来了十二个。', hint:'(chỉ)', ans:'只', exp:'只 đứng trước động từ: 只来了十二个 = chỉ đến có mười hai người.'},
  {pre:'A：你怎么了？B：我有点儿不', blank:'舒服', post:'，想回家休息。', hint:'(dễ chịu, khỏe)', ans:'舒服', exp:'不舒服 = thấy khó chịu, không khỏe; ôn 有点儿 + tính từ (điều không như ý).'},
];

// ══════════════════════════════════════════
// PHẦN 3b · SẮP XẾP
// ══════════════════════════════════════════
var sortData = [
  {words:['我们','坐','公共汽车','去','还是','走路','去','？'], ans:'我们坐公共汽车去还是走路去？', audio:'我们坐公共汽车去还是走路去？'},
  {words:['星期六','或者','星期天','，','我们','一起','去','爬山','吧','。'], ans:'星期六或者星期天，我们一起去爬山吧。', audio:'星期六或者星期天，我们一起去爬山吧。'},
  {words:['办公室','门口','放着','两把','伞','，','你','拿','一把','走','吧','。'], ans:'办公室门口放着两把伞，你拿一把走吧。', audio:'办公室门口放着两把伞，你拿一把走吧。'},
  {words:['天','阴','了','，','晚上','可能','会','下雪','。'], ans:'天阴了，晚上可能会下雪。', audio:'天阴了，晚上可能会下雪。'},
  {words:['这么','新鲜','的','西瓜','，','一个','只','卖','八元','。'], ans:'这么新鲜的西瓜，一个只卖八元。', audio:'这么新鲜的西瓜，一个只卖八元。'},
  {words:['明天','考试','，','你','记得','早点儿','睡觉','。'], ans:'明天考试，你记得早点儿睡觉。', audio:'明天考试，你记得早点儿睡觉。'},
  {words:['下雪','了','，','路上','开车','要','小心','点儿','。'], ans:'下雪了，路上开车要小心点儿。', audio:'下雪了，路上开车要小心点儿。'},
  {words:['学校','里','的','树','都','绿','了','，','花','也','开','了','。'], ans:'学校里的树都绿了，花也开了。', audio:'学校里的树都绿了，花也开了。'},
];

// ══════════════════════════════════════════
// PHẦN 3c · SỬA LỖI SAI
// ══════════════════════════════════════════
var errorFixData = [
  {wrong:'你喜欢红色或者绿色？',
   opts:['你喜欢红色还是绿色吗？','你还是喜欢红色绿色？','你喜欢红色还是绿色？','你喜欢或者红色还是绿色？'], ans:2,
   exp:'Hỏi chọn một trong hai dùng 还是 (không dùng 或者); câu hỏi với 还是 không thêm 吗.'},
  {wrong:'周末我在家看书还是看电视。',
   opts:['周末我在家看书或者看电视。','周末我或者在家看书看电视。','周末我在家或者看书看电视。','或者周末我在家看书看电视。'], ans:0,
   exp:'Câu kể nêu các việc có thể làm → dùng 或者, đặt ngay giữa hai việc: 看书或者看电视.'},
  {wrong:'在椅子上放着一件衬衫。',
   opts:['椅子上放着衬衫一件。','椅子上放着一件衬衫。','椅子上放了着一件衬衫。','椅子上一件衬衫放着。'], ans:1,
   exp:'Câu tồn tại bắt đầu bằng nơi chốn, không thêm 在 ở đầu câu; 了 không đi cùng 着; 一件衬衫 đứng sau 放着.'},
  {wrong:'这件裤子太长了。',
   opts:['这裤子条太长了。','这个条裤子太长了。','这条裤子长太了。','这条裤子太长了。'], ans:3,
   exp:'Quần dùng lượng từ 条 (件 dùng cho áo): 这条裤子 — không thêm 个, không đảo lượng từ ra sau danh từ, 太 đứng trước tính từ.'},
  {wrong:'经理今天下午不来会。',
   opts:['经理今天下午没会来。','经理今天下午不会来过。','经理今天下午不会来。','经理今天下午会没来。'], ans:2,
   exp:'会 (sẽ) đứng trước động từ; phủ định là 不会 + động từ, không nói 没会, không thêm 过.'},
  {wrong:'我今天带了只五十元。',
   opts:['我今天只带了五十元。','只我今天带了五十元。','我今天带只了五十元。','我今天带了五十元只。'], ans:0,
   exp:'只 là phó từ, đứng TRƯỚC động từ: 只带了五十元 — không đặt sau động từ như tiếng Việt “mang có mỗi…”.'},
  {wrong:'这把椅子是舒服。',
   opts:['这把椅子舒服很。','这把椅子很舒服。','这把椅子是舒服的很。','这把椅子太舒服。'], ans:1,
   exp:'Tính từ làm vị ngữ không cần 是, thường thêm 很 phía trước; 太 phải đi với 了 (太舒服了).'},
  {wrong:'这个西瓜比那个一点儿甜。',
   opts:['这个西瓜比那个有点儿甜。','这个西瓜比那个很甜。','这个西瓜一点儿比那个甜。','这个西瓜比那个甜一点儿。'], ans:3,
   exp:'Câu 比: tính từ trước, 一点儿 sau (甜一点儿); không dùng 有点儿 / 很 trong câu 比 (ôn HSK2).'},
];

// ══════════════════════════════════════════
// LUYỆN NÓI
// ══════════════════════════════════════════
var speakingData = {
  mode: 'ai-speak',
  intro: 'Mỗi câu là một tình huống thật, trả lời về chính bạn bằng từ và mẫu câu của Bài 3 (还是 / 或者, nơi chốn + V着 + số lượng + danh từ, 会 = sẽ). Bấm 🎙️ rồi nói bằng tiếng Trung — AI sẽ nghe, ghi lại câu bạn nói và chấm theo Nội dung · Mẫu câu · Từ vựng · Độ trôi chảy. Tự trả lời trước rồi mới mở “Câu mẫu” để đối chiếu.',
  tasks: [
    {
      situation: 'Bạn cùng lớp hỏi kế hoạch cuối tuần này của bạn.',
      q_zh: '这个周末你有什么打算？',
      q_py: 'Zhège zhōumò nǐ yǒu shénme dǎsuàn?',
      q_vn: 'Cuối tuần này bạn có dự định gì?',
      grammar: { label: '或者 (kể các khả năng: A hoặc B)', any: ['或者'] },
      need: [
        { label: 'Nói thời gian', any: ['星期六', '星期天', '上午', '下午', '晚上', '早上'] },
        { label: 'Kể việc định làm', any: ['爬山', '复习', '看', '游泳', '跑步', '买', '玩儿', '休息'] }
      ],
      bonus: { label: 'Ôn 跟 + người + V (Bài 1)', any: ['跟'] },
      vocab: ['或者', '爬山'],
      minLen: 16,
      sample: '星期六上午我想跟朋友去爬山，下午在家休息。星期天复习汉语或者去商店买衣服。',
      sample_py: 'Xīngqīliù shàngwǔ wǒ xiǎng gēn péngyou qù páshān, xiàwǔ zài jiā xiūxi. Xīngqītiān fùxí Hànyǔ huòzhě qù shāngdiàn mǎi yīfu.',
      sample_vn: 'Sáng thứ bảy mình định đi leo núi với bạn, chiều ở nhà nghỉ. Chủ nhật ôn tiếng Hán hoặc đi cửa hàng mua quần áo.',
      tip: '或者 nối hai việc trong câu kể; nếu bạn hỏi lại người kia “A hay B?” thì đổi sang 还是.'
    },
    {
      situation: 'Bạn cùng phòng mới sắp chuyển đến và hỏi trong phòng đã có những gì.',
      q_zh: '我们的房间里有什么？我要带桌子吗？',
      q_py: 'Wǒmen de fángjiān li yǒu shénme? Wǒ yào dài zhuōzi ma?',
      q_vn: 'Phòng của chúng mình có những gì? Mình có phải mang bàn không?',
      grammar: { label: 'Nơi chốn + V着 + số lượng + danh từ', any: ['放着', '着'] },
      need: [
        { label: 'Kể đồ đạc trong phòng', any: ['桌子', '椅子', '电脑', '电视', '书', '花', '伞'] },
        { label: 'Nói có cần mang không', any: ['别', '要', '带'] }
      ],
      bonus: { label: 'Dùng lượng từ 张 / 把', any: ['张', '把'] },
      vocab: ['放', '花'],
      minLen: 16,
      sample: '你别带桌子了，房间里放着两张桌子和两把椅子，桌子上还放着一些花。你带衣服和书就可以了。',
      sample_py: 'Nǐ bié dài zhuōzi le, fángjiān li fàngzhe liǎng zhāng zhuōzi hé liǎng bǎ yǐzi, zhuōzi shang hái fàngzhe yìxiē huā. Nǐ dài yīfu hé shū jiù kěyǐ le.',
      sample_vn: 'Bạn đừng mang bàn nữa, trong phòng có sẵn hai cái bàn và hai cái ghế, trên bàn còn có mấy bông hoa. Bạn mang quần áo và sách là được.',
      tip: 'Đầu câu là nơi chốn, không thêm 在: nói 房间里放着…, không nói 在房间里放着….'
    },
    {
      situation: 'Nhóm bạn định chủ nhật đi leo núi và hỏi bạn hôm đó thời tiết có ổn không.',
      q_zh: '星期天我们去爬山，你看那天会下雨吗？',
      q_py: 'Xīngqītiān wǒmen qù páshān, nǐ kàn nà tiān huì xiàyǔ ma?',
      q_vn: 'Chủ nhật bọn mình đi leo núi, bạn xem hôm đó có mưa không?',
      grammar: { label: '会 + động từ (đoán điều sẽ xảy ra)', any: ['会'] },
      need: [
        { label: 'Đoán thời tiết', any: ['下雨', '阴', '晴', '冷', '热', '下雪'] },
        { label: 'Dặn dò bạn', any: ['带', '小心', '穿', '记得'] }
      ],
      bonus: { label: 'Ôn lượng từ 把 (一把伞, Bài 2)', any: ['把伞'] },
      vocab: ['会', '小心', '记得'],
      minLen: 18,
      sample: '天气预报说星期天是阴天，可能会下雨。你们记得带一把伞，走路的时候小心点儿。',
      sample_py: 'Tiānqì yùbào shuō xīngqītiān shì yīntiān, kěnéng huì xiàyǔ. Nǐmen jìde dài yì bǎ sǎn, zǒulù de shíhou xiǎoxīn diǎnr.',
      sample_vn: 'Dự báo thời tiết nói chủ nhật trời âm u, có thể sẽ mưa. Các bạn nhớ mang theo ô, đi đường cẩn thận một chút.',
      tip: '会 + động từ nói điều có thể xảy ra: 可能会下雨; phủ định là 不会下雨, không nói 没会.'
    },
    {
      situation: 'Bạn đi mua quần cùng bạn thân, bạn ấy phân vân giữa hai chiếc và hỏi ý bạn.',
      q_zh: '这两条裤子，你觉得哪条好？',
      q_py: 'Zhè liǎng tiáo kùzi, nǐ juéde nǎ tiáo hǎo?',
      q_vn: 'Hai chiếc quần này, bạn thấy chiếc nào được?',
      grammar: { label: '还是 (hỏi lại: A hay B?)', any: ['还是'] },
      need: [
        { label: 'Nhận xét màu hoặc giá', any: ['绿', '红', '白', '黑', '颜色', '元', '块', '贵', '便宜'] },
        { label: 'Nói mặc thế nào', any: ['舒服', '好看', '长', '大', '小'] }
      ],
      bonus: { label: 'Dùng 比 để so sánh hai chiếc (HSK2)', any: ['比'] },
      vocab: ['条', '裤子', '元', '舒服'],
      minLen: 18,
      sample: '绿色的那条比白色的便宜五十元，穿着也很舒服。你自己喜欢绿的还是白的？',
      sample_py: 'Lǜsè de nà tiáo bǐ báisè de piányi wǔshí yuán, chuānzhe yě hěn shūfu. Nǐ zìjǐ xǐhuan lǜ de háishi bái de?',
      sample_vn: 'Chiếc màu xanh lá rẻ hơn chiếc màu trắng năm mươi tệ, mặc cũng rất thoải mái. Bản thân bạn thích chiếc xanh hay chiếc trắng?',
      tip: 'Hỏi “A hay B?” dùng 还是 và không thêm 吗 ở cuối câu.'
    },
    {
      situation: 'Bạn đến nhà bạn chơi lúc 10 giờ tối, bạn ấy mời bạn uống cà phê.',
      q_zh: '已经十点了，你还喝咖啡吗？我这儿还有茶和饮料。',
      q_py: 'Yǐjīng shí diǎn le, nǐ hái hē kāfēi ma? Wǒ zhèr hái yǒu chá hé yǐnliào.',
      q_vn: 'Đã mười giờ rồi, bạn còn uống cà phê không? Chỗ mình còn có trà và nước ngọt.',
      grammar: { label: '会 + kết quả có thể xảy ra (会睡不好…)', any: ['会'] },
      need: [
        { label: 'Nói uống hay không', any: ['不喝', '喝', '要'] },
        { label: 'Chọn đồ uống khác', any: ['茶', '花茶', '绿茶', '牛奶', '水', '饮料'] }
      ],
      vocab: ['饮料', '花'],
      minLen: 14,
      sample: '不喝了，晚上喝咖啡我会睡不好。你这儿有花茶吗？给我一杯热的就可以。',
      sample_py: 'Bù hē le, wǎnshang hē kāfēi wǒ huì shuì bu hǎo. Nǐ zhèr yǒu huāchá ma? Gěi wǒ yì bēi rè de jiù kěyǐ.',
      sample_vn: 'Thôi không uống đâu, buổi tối uống cà phê mình sẽ ngủ không ngon. Bạn có trà hoa không? Cho mình một cốc nóng là được.',
      tip: '会 nói hậu quả có thể xảy ra: 喝咖啡会睡不好 = uống cà phê thì sẽ khó ngủ.'
    }
  ]
};

// ══════════════════════════════════════════
// LUYỆN DỊCH (Việt → Trung)
// ══════════════════════════════════════════
var translateData = [
  {vi:'Cuối tuần bạn đi leo núi với chúng mình hay ở nhà ôn bài?', zh:'周末你跟我们去爬山还是在家复习？', py:'Zhōumò nǐ gēn wǒmen qù páshān háishi zài jiā fùxí?'},
  {vi:'Trên bàn giám đốc đặt rất nhiều hoa, đều là thư ký mua.', zh:'经理的桌子上放着很多花，都是秘书买的。', py:'Jīnglǐ de zhuōzi shang fàngzhe hěn duō huā, dōu shì mìshū mǎi de.'},
  {vi:'Bạn mặc ít như vậy, ra ngoài sẽ bị lạnh đấy.', zh:'你穿得这么少，出去会冷的。', py:'Nǐ chuān de zhème shǎo, chūqu huì lěng de.'},
  {vi:'Thật ra chiếc áo sơ mi này tôi mới mặc có một lần.', zh:'其实这件衬衫我只穿过一次。', py:'Qíshí zhè jiàn chènshān wǒ zhǐ chuānguo yí cì.'},
  {vi:'Tôi nhớ dưa hấu của cửa hàng đó rất ngọt, chúng ta đến đó mua đi.', zh:'我记得那个商店的西瓜很甜，我们去那儿买吧。', py:'Wǒ jìde nàge shāngdiàn de xīguā hěn tián, wǒmen qù nàr mǎi ba.'},
];

// ══════════════════════════════════════════
// LUYỆN DỊCH (Trung → Việt) — nội dung KHÁC với chiều Việt→Trung ở trên
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:'Cá ở nhà hàng này rất tươi, chúng tôi đã đến đây hai lần rồi.', zh:'这家饭馆的鱼很新鲜，我们来过两次了。', py:'Zhè jiā fànguǎn de yú hěn xīnxiān, wǒmen láiguo liǎng cì le.'},
  {vi:'Tuy chiếc áo sơ mi này rất rẻ nhưng mặc chẳng dễ chịu chút nào.', zh:'虽然这件衬衫很便宜，但是穿着一点儿也不舒服。', py:'Suīrán zhè jiàn chènshān hěn piányi, dànshì chuānzhe yìdiǎnr yě bù shūfu.'},
  {vi:'Anh ấy nói tháng sau sẽ chuyển xuống miền Nam.', zh:'他说下个月会搬到南方去。', py:'Tā shuō xià ge yuè huì bān dào nánfāng qù.'},
  {vi:'Đồ uống bạn cần mình để ở cửa rồi, bạn xuống lấy nhé.', zh:'你要的饮料我放在门口了，你下来拿吧。', py:'Nǐ yào de yǐnliào wǒ fàng zài ménkǒu le, nǐ xiàlai ná ba.'},
];

// ══════════════════════════════════════════
// LUYỆN NGHE — đề nghe THẬT từ HSK标准教程3 练习册 (sách bài tập Bài 3)
// Audio gốc duy nhất chứa đủ 20 câu (Phần 1+2+3+4 của đề gốc):
//  - Phần 1 (câu 1-5, gốc: nghe chọn tranh) + Phần 2 (câu 6-10, gốc: nghe
//    phán đoán đúng/sai) → gộp thành 10 câu ĐIỀN CHÍNH TẢ.
//  - Phần 3 (câu 11-15) + Phần 4 (câu 16-20) → 10 câu TRẮC NGHIỆM, kèm 2
//    dòng nghe-điền-cụm-từ-ngắn trước khi chọn đáp án, giữ đúng như đề gốc.
// ══════════════════════════════════════════
var listenData = {
  type: 'workbook',
  audio: "/audio/hsk3-bai-3/listen-full.mp3",
  dictation: [
    {num:1, lines:[
      {speaker:"男", pre:"", blank:"这花茶在哪儿买的？真好喝", post:"！",
       py:"Zhè huāchá zài nǎr mǎi de? Zhēn hǎohē!",
       vn:"Trà hoa này mua ở đâu vậy? Ngon thật đấy!"},
      {speaker:"女", pre:"我也不知道，", blank:"一个朋友送的", post:"。",
       py:"Wǒ yě bù zhīdào, yí ge péngyou sòng de.",
       vn:"Tôi cũng không biết, một người bạn tặng đấy."}]},
    {num:2, lines:[
      {speaker:"女", pre:"小心点儿，", blank:"到了北京就给我打电话", post:"。",
       py:"Xiǎoxīn diǎnr, dàole Běijīng jiù gěi wǒ dǎ diànhuà.",
       vn:"Cẩn thận nhé, đến Bắc Kinh là gọi điện cho tôi ngay."},
      {speaker:"男", pre:"好的，", blank:"我下了飞机就给你打电话", post:"。",
       py:"Hǎo de, wǒ xiàle fēijī jiù gěi nǐ dǎ diànhuà.",
       vn:"Được, tôi xuống máy bay là gọi điện cho bạn ngay."}]},
    {num:3, lines:[
      {speaker:"女", pre:"这些水果都很新鲜，", blank:"你想吃什么", post:"？",
       py:"Zhèxiē shuǐguǒ dōu hěn xīnxiān, nǐ xiǎng chī shénme?",
       vn:"Những trái cây này đều rất tươi, bạn muốn ăn gì?"},
      {speaker:"男", pre:"给我", blank:"一个苹果", post:"吧。",
       py:"Gěi wǒ yí ge píngguǒ ba.",
       vn:"Cho tôi một quả táo đi."}]},
    {num:4, lines:[
      {speaker:"女", pre:"爸爸的生日快到了，我想送他一条裤子，", blank:"你看这条怎么样", post:"？",
       py:"Bàba de shēngrì kuài dào le, wǒ xiǎng sòng tā yì tiáo kùzi, nǐ kàn zhè tiáo zěnmeyàng?",
       vn:"Sinh nhật bố sắp đến rồi, con muốn tặng bố một cái quần, mẹ xem cái này thế nào?"},
      {speaker:"男", pre:"颜色不错，但是我觉得", blank:"大了一点儿", post:"。",
       py:"Yánsè búcuò, dànshì wǒ juéde dàle yìdiǎnr.",
       vn:"Màu sắc được đấy, nhưng bố thấy hơi to một chút."}]},
    {num:5, lines:[
      {speaker:"男", pre:"我想", blank:"买件衬衫", post:"。",
       py:"Wǒ xiǎng mǎi jiàn chènshān.",
       vn:"Tôi muốn mua một cái áo sơ mi."},
      {speaker:"女", pre:"颜色很多啊，你喜欢", blank:"红的还是绿的", post:"？",
       py:"Yánsè hěn duō a, nǐ xǐhuan hóng de háishi lǜ de?",
       vn:"Màu sắc nhiều lắm, bạn thích màu đỏ hay màu xanh?"}]},
    {num:6, stmt:"他不认识那个女孩儿。", judge:false, lines:[
      {pre:"你还记得前边的那个女孩儿吗？", blank:"去年我们去上海玩儿的时候认识的", post:"。",
       py:"Nǐ hái jìde qiánbian de nàge nǚháir ma? Qùnián wǒmen qù Shànghǎi wánr de shíhou rènshi de.",
       vn:"Bạn còn nhớ cô gái đằng trước không? Năm ngoái lúc chúng ta đi Thượng Hải chơi quen đấy."}]},
    {num:7, stmt:"这条裤子现在便宜得多。", judge:true, lines:[
      {pre:"我记得这条裤子上个月是八百元，", blank:"现在只要四百元", post:"，我一次买了两条。",
       py:"Wǒ jìde zhè tiáo kùzi shàng ge yuè shì bābǎi yuán, xiànzài zhǐ yào sìbǎi yuán, wǒ yí cì mǎile liǎng tiáo.",
       vn:"Tôi nhớ cái quần này tháng trước 800 đồng, giờ chỉ 400 đồng, tôi mua một lần hai cái luôn."}]},
    {num:8, stmt:"运动时可以听歌。", judge:false, lines:[
      {pre:"工作很累的时候可以听歌、玩儿游戏或者去运动，这样，", blank:"你会觉得舒服点儿", post:"。",
       py:"Gōngzuò hěn lèi de shíhou kěyǐ tīng gē, wánr yóuxì huòzhě qù yùndòng, zhèyàng, nǐ huì juéde shūfu diǎnr.",
       vn:"Lúc làm việc mệt có thể nghe nhạc, chơi game hoặc đi vận động, như vậy bạn sẽ thấy dễ chịu hơn."}]},
    {num:9, stmt:"他不知道鲜奶在哪儿。", judge:true, lines:[
      {pre:"我刚买的鲜奶你", blank:"放到哪儿了", post:"？我现在想喝。",
       py:"Wǒ gāng mǎi de xiānnǎi nǐ fàngdào nǎr le? Wǒ xiànzài xiǎng hē.",
       vn:"Sữa tươi tôi vừa mua bạn để đâu rồi? Tôi giờ muốn uống."}]},
    {num:10, stmt:"她菜吃得很少。", judge:true, lines:[
      {pre:"你怎么只吃饭不吃菜啊，来，", blank:"多吃点儿", post:"。",
       py:"Nǐ zěnme zhǐ chī fàn bù chī cài a, lái, duō chī diǎnr.",
       vn:"Sao bạn chỉ ăn cơm không ăn rau vậy, nào, ăn thêm chút đi."}]}
  ],
  mc: [
    {num:11, options:["脚不舒服","想看电视","想玩儿游戏"], ans:0, q:"女的为什么不去爬山？",
     lines:[
      {speaker:"女", pre:"我的脚还没好，我们周末别", blank:"去爬山了", post:"。",
       py:"Wǒ de jiǎo hái méi hǎo, wǒmen zhōumò bié qù páshān le.",
       vn:"Chân tôi vẫn chưa khỏi, cuối tuần chúng ta đừng đi leo núi nữa."},
      {speaker:"男", pre:"好，那我们就在家", blank:"看看电视", post:"，玩儿玩儿游戏。",
       py:"Hǎo, nà wǒmen jiù zài jiā kànkan diànshì, wánr wánr yóuxì.",
       vn:"Được, vậy chúng ta ở nhà xem tivi, chơi chút game."}
     ],
     explain:"女：我的脚还没好，我们周末别去爬山了。男：好，那我们就在家看看电视，玩儿玩儿游戏。问：女的为什么不去爬山？ → 脚不舒服。"},
    {num:12, options:["不太甜","要睡觉","太冷了"], ans:1, q:"男的为什么不喝冷饮？",
     lines:[
      {speaker:"女", pre:"今天买的冷饮很甜，", blank:"你要不要喝点儿", post:"？",
       py:"Jīntiān mǎi de lěngyǐn hěn tián, nǐ yào bu yào hē diǎnr?",
       vn:"Đồ uống lạnh mua hôm nay rất ngọt, bạn có muốn uống chút không?"},
      {speaker:"男", pre:"不喝了，我打算", blank:"睡觉了", post:"。",
       py:"Bù hē le, wǒ dǎsuàn shuìjiào le.",
       vn:"Không uống nữa, tôi định đi ngủ rồi."}
     ],
     explain:"女：今天买的冷饮很甜，你要不要喝点儿？男：不喝了，我打算睡觉了。问：男的为什么不喝冷饮？ → 要睡觉。"},
    {num:13, options:["买裤子","洗衬衫","拿裤子"], ans:1, q:"女的在做什么？",
     lines:[
      {speaker:"男", pre:"你新给我买的那条裤子", blank:"放哪儿了", post:"？",
       py:"Nǐ xīn gěi wǒ mǎi de nà tiáo kùzi fàng nǎr le?",
       vn:"Cái quần mới bạn mua cho tôi để ở đâu rồi?"},
      {speaker:"女", pre:"我", blank:"洗完衬衫", post:"就给你拿。",
       py:"Wǒ xǐwán chènshān jiù gěi nǐ ná.",
       vn:"Tôi giặt xong áo sơ mi là lấy cho bạn ngay."}
     ],
     explain:"男：你新给我买的那条裤子放哪儿了？女：我洗完衬衫就给你拿。问：女的在做什么？ → 洗衬衫。"},
    {num:14, options:["找他去上课","不小心打错了","上午有事"], ans:1, q:"女的为什么给男的打电话？",
     lines:[
      {speaker:"男", pre:"你上午给我打电话的时候，", blank:"我正在上课", post:"。有什么事吗？",
       py:"Nǐ shàngwǔ gěi wǒ dǎ diànhuà de shíhou, wǒ zhèngzài shàngkè. Yǒu shénme shì ma?",
       vn:"Lúc sáng bạn gọi điện cho tôi, tôi đang học đấy. Có việc gì không?"},
      {speaker:"女", pre:"对不起，是我", blank:"不小心打错了", post:"。",
       py:"Duìbuqǐ, shì wǒ bù xiǎoxīn dǎcuò le.",
       vn:"Xin lỗi, tại tôi không cẩn thận gọi nhầm."}
     ],
     explain:"男：你上午给我打电话的时候，我正在上课。有什么事吗？女：对不起，是我不小心打错了。问：女的为什么给男的打电话？ → 不小心打错了。"},
    {num:15, options:["男的的","女的的","小丽的"], ans:2, q:"咖啡是谁的？",
     lines:[
      {speaker:"女", pre:"桌子上面放着一杯咖啡，", blank:"是你的吗", post:"？",
       py:"Zhuōzi shàngmian fàngzhe yì bēi kāfēi, shì nǐ de ma?",
       vn:"Trên bàn có để một ly cà phê, có phải của bạn không?"},
      {speaker:"男", pre:"小丽", blank:"放在那儿的", post:"。",
       py:"Xiǎolì fàng zài nàr de.",
       vn:"Tiểu Lệ để ở đó đấy."}
     ],
     explain:"女：桌子上面放着一杯咖啡，是你的吗？男：小丽放在那儿的。问：咖啡是谁的？ → 小丽的。"},
    {num:16, options:["衬衫","裤子","饮料"], ans:0, q:"女的给自己买什么了？",
     lines:[
      {speaker:"男", pre:"", blank:"今天买什么了", post:"？",
       py:"Jīntiān mǎi shénme le?",
       vn:"Hôm nay mua gì vậy?"},
      {speaker:"女", pre:"我买了衬衫，还给妈妈", blank:"买了一条裤子", post:"。",
       py:"Wǒ mǎile chènshān, hái gěi māma mǎile yì tiáo kùzi.",
       vn:"Tôi mua áo sơ mi, còn mua cho mẹ một cái quần nữa."},
      {speaker:"男", pre:"那你给我", blank:"买什么了", post:"？",
       py:"Nà nǐ gěi wǒ mǎi shénme le?",
       vn:"Vậy con mua gì cho bố?"},
      {speaker:"女", pre:"桌子上的饮料", blank:"给你吧", post:"。",
       py:"Zhuōzi shang de yǐnliào gěi nǐ ba.",
       vn:"Đồ uống trên bàn cho bố đấy."}
     ],
     explain:"男：今天买什么了？女：我买了衬衫，还给妈妈买了一条裤子。男：那你给我买什么了？女：桌子上的饮料给你吧。问：女的给自己买什么了？ → 衬衫。"},
    {num:17, options:["有问题问他","找手机","她很着急"], ans:1, q:"女的为什么让男的给她打个电话？",
     lines:[
      {speaker:"女", pre:"我的手机放哪儿了？", blank:"我怎么不记得了", post:"？",
       py:"Wǒ de shǒujī fàng nǎr le? Wǒ zěnme bú jìde le?",
       vn:"Điện thoại của tôi để đâu rồi? Sao tôi không nhớ nữa?"},
      {speaker:"男", pre:"别着急，", blank:"慢慢想", post:"。",
       py:"Bié zháojí, mànman xiǎng.",
       vn:"Đừng vội, từ từ nghĩ đi."},
      {speaker:"女", pre:"", blank:"你给我打个电话吧", post:"。",
       py:"Nǐ gěi wǒ dǎ ge diànhuà ba.",
       vn:"Bạn gọi điện cho tôi thử xem."},
      {speaker:"男", pre:"", blank:"好，没问题", post:"。",
       py:"Hǎo, méi wèntí.",
       vn:"Được, không vấn đề gì."}
     ],
     explain:"女：我的手机放哪儿了？我怎么不记得了？男：别着急，慢慢想。女：你给我打个电话吧。男：好，没问题。问：女的为什么让男的给她打个电话？ → 找手机。"},
    {num:18, options:["绿茶","水果","饮料"], ans:2, q:"桌子上放着什么？",
     lines:[
      {speaker:"男", pre:"", blank:"给我来杯绿茶吧", post:"。",
       py:"Gěi wǒ lái bēi lǜchá ba.",
       vn:"Cho tôi một ly trà xanh đi."},
      {speaker:"女", pre:"这儿", blank:"没有绿茶", post:"。",
       py:"Zhèr méiyǒu lǜchá.",
       vn:"Ở đây không có trà xanh."},
      {speaker:"男", pre:"桌子上不是", blank:"放着绿茶", post:"吗？",
       py:"Zhuōzi shang bú shì fàngzhe lǜchá ma?",
       vn:"Trên bàn chẳng phải đang để trà xanh sao?"},
      {speaker:"女", pre:"那不是绿茶，", blank:"是水果饮料", post:"。",
       py:"Nà bú shì lǜchá, shì shuǐguǒ yǐnliào.",
       vn:"Đó không phải trà xanh, đó là nước ép trái cây."}
     ],
     explain:"男：给我来杯绿茶吧。女：这儿没有绿茶。男：桌子上不是放着绿茶吗？女：那不是绿茶，是水果饮料。问：桌子上放着什么？ → 饮料。"},
    {num:19, options:["不想去上学","觉得累","不舒服"], ans:1, q:"女的怎么了？",
     lines:[
      {speaker:"女", pre:"", blank:"你送儿子上学吧", post:"。",
       py:"Nǐ sòng érzi shàngxué ba.",
       vn:"Anh đưa con trai đi học đi."},
      {speaker:"男", pre:"好，你怎么了？", blank:"不舒服吗", post:"？",
       py:"Hǎo, nǐ zěnme le? Bù shūfu ma?",
       vn:"Được, em sao vậy? Không khỏe à?"},
      {speaker:"女", pre:"没有，", blank:"我觉得有点儿累", post:"。",
       py:"Méiyǒu, wǒ juéde yǒudiǎnr lèi.",
       vn:"Không có, em thấy hơi mệt."},
      {speaker:"男", pre:"那你在家", blank:"休息吧", post:"。",
       py:"Nà nǐ zài jiā xiūxi ba.",
       vn:"Vậy em ở nhà nghỉ ngơi đi."}
     ],
     explain:"女：你送儿子上学吧。男：好，你怎么了？不舒服吗？女：没有，我觉得有点儿累。男：那你在家休息吧。问：女的怎么了？ → 觉得累。"},
    {num:20, options:["牛肉不新鲜","没有牛肉了","要吃米饭"], ans:1, q:"男的为什么没买牛肉？",
     lines:[
      {speaker:"男", pre:"你不是要买牛肉吗？", blank:"怎么买鱼了", post:"？",
       py:"Nǐ bú shì yào mǎi niúròu ma? Zěnme mǎi yú le?",
       vn:"Bạn chẳng phải định mua thịt bò sao? Sao lại mua cá?"},
      {speaker:"女", pre:"去晚了，", blank:"牛肉都卖完了", post:"。我看这条鱼很新鲜就买了。",
       py:"Qù wǎn le, niúròu dōu màiwán le. Wǒ kàn zhè tiáo yú hěn xīnxiān jiù mǎi le.",
       vn:"Đi muộn rồi, thịt bò bán hết cả rồi. Em thấy con cá này tươi nên mua luôn."},
      {speaker:"男", pre:"", blank:"是很好", post:"。对了，我们吃米饭还是面条？",
       py:"Shì hěn hǎo. Duìle, wǒmen chī mǐfàn háishi miàntiáo?",
       vn:"Được đấy. À, chúng ta ăn cơm hay ăn mì?"},
      {speaker:"女", pre:"今天有鱼，", blank:"我们吃米饭吧", post:"。",
       py:"Jīntiān yǒu yú, wǒmen chī mǐfàn ba.",
       vn:"Hôm nay có cá, chúng ta ăn cơm đi."}
     ],
     explain:"男：你不是要买牛肉吗？怎么买鱼了？女：去晚了，牛肉都卖完了。我看这条鱼很新鲜就买了。男：是很好。对了，我们吃米饭还是面条？女：今天有鱼，我们吃米饭吧。问：男的为什么没买牛肉？ → 没有牛肉了。"}
  ]
};
