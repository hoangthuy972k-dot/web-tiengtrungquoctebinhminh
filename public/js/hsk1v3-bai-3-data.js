// ══════════════════════════════════════════
// DATA — HSK1 (3.0 Mới) Bài 3: 我是中国人
// Nguồn: Giáo trình New HSK 1 (chuẩn 3.0) - Trung Việt, NXB Dân Trí
// ══════════════════════════════════════════
var vocabData = [
  {
    "n": 1,
    "zh": "人",
    "py": "rén",
    "pos": "Danh từ",
    "vn": "người",
    "hv": "nhân",
    "em": "🧑",
    "lesson": 1,
    "ex_zh": "我是中国人。",
    "ex_py": "Wǒ shì Zhōngguó rén.",
    "ex_vn": "Tôi là người Trung Quốc.",
    "exList": [
      {
        "zh": "我是中国人。",
        "py": "Wǒ shì Zhōngguó rén.",
        "vn": "Tôi là người Trung Quốc."
      }
    ],
    "hanzi": [
      {
        "c": "人",
        "p": "rén",
        "type": "独体字 · Chữ đơn",
        "st": 2,
        "ord": "撇(phẩy) → 捺(mác)",
        "rad": "人 (nhân – người)",
        "mean": "người",
        "tip": "Hình dáng giống một người đang bước đi, hai nét tượng trưng cho hai chân.",
        "cf": "入 (rù – \"vào\", dễ nhầm vì nét gần giống nhưng phẩy dài hơn)",
        "w": "中国人 / 法国人"
      }
    ],
    "colloFull": [
      {
        "zh": "中国人",
        "py": "Zhōngguó rén",
        "vn": "người Trung Quốc"
      },
      {
        "zh": "法国人",
        "py": "Fǎguó rén",
        "vn": "người Pháp"
      },
      {
        "zh": "泰国人",
        "py": "Tàiguó rén",
        "vn": "người Thái Lan"
      },
      {
        "zh": "哪国人",
        "py": "nǎ guó rén",
        "vn": "người nước nào"
      }
    ],
    "patterns": [
      {
        "s": "tên nước + 人",
        "m": "Người nước nào: 中国人 · 法国人"
      },
      {
        "s": "人 là chữ tượng hình — hai nét là hai chân người đang bước"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tôi là người Trung Quốc.",
        "answer": "我是中国人。",
        "answerPy": "Wǒ shì Zhōngguó rén.",
        "note": "Tên nước + 人 là cách nói quốc tịch.",
        "pair": "是……"
      },
      {
        "promptLang": "vi",
        "prompt": "Cô ấy không phải người Pháp.",
        "answer": "她不是法国人。",
        "answerPy": "Tā bú shì Fǎguó rén.",
        "note": "法国人 — người Pháp.",
        "pair": "不是……"
      }
    ]
  },
  {
    "n": 2,
    "zh": "的",
    "py": "de",
    "pos": "Trợ từ",
    "vn": "của",
    "hv": "đích",
    "em": "🔗",
    "lesson": 1,
    "ex_zh": "我的中文老师也是中国人。",
    "ex_py": "Wǒ de Zhōngwén lǎoshī yě shì Zhōngguó rén.",
    "ex_vn": "Giáo viên tiếng Trung của tôi cũng là người Trung Quốc.",
    "exList": [
      {
        "zh": "我的中文老师也是中国人。",
        "py": "Wǒ de Zhōngwén lǎoshī yě shì Zhōngguó rén.",
        "vn": "Giáo viên tiếng Trung của tôi cũng là người Trung Quốc."
      }
    ],
    "hanzi": [
      {
        "c": "的",
        "p": "de",
        "type": "左右结构 · Trái-phải",
        "st": 8,
        "ord": "白(bạch) trái → 勺(chước) phải",
        "rad": "白 (bạch – trắng, rõ ràng)",
        "mean": "trợ từ sở hữu (của)",
        "tip": "白(rõ ràng, sáng tỏ) + 勺(cái muỗng, mượn âm đọc gần \"de\") → mượn âm 勺 ghép với 白 để tạo trợ từ chỉ SỞ HỮU, nghĩa gốc không còn liên quan.",
        "cf": "得 (dé/děi – \"được, phải\", cũng đọc \"de\" nhẹ trong một số trường hợp, dễ nhầm chức năng ngữ pháp)",
        "w": "我的 / 你的 / 老师的"
      }
    ],
    "colloFull": [
      {
        "zh": "我的名字",
        "py": "wǒ de míngzi",
        "vn": "tên của tôi"
      },
      {
        "zh": "她的名字",
        "py": "tā de míngzi",
        "vn": "tên của cô ấy"
      },
      {
        "zh": "谁的",
        "py": "shéi de",
        "vn": "của ai"
      },
      {
        "zh": "老师的名字",
        "py": "lǎoshī de míngzi",
        "vn": "tên của thầy"
      }
    ],
    "patterns": [
      {
        "s": "người + 的 + danh từ",
        "m": "Sở hữu: 我的名字 — tên của tôi"
      },
      {
        "s": "Người thân và nhóm gần gũi hay bỏ 的: 我姐姐, 我同学"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Đây là tên tiếng Trung của tôi.",
        "answer": "这是我的中文名字。",
        "answerPy": "Zhè shì wǒ de Zhōngwén míngzi.",
        "note": "的 nối người sở hữu với vật được sở hữu.",
        "pair": "这是……"
      },
      {
        "promptLang": "vi",
        "prompt": "Đây là tên của ai?",
        "answer": "这是谁的名字？",
        "answerPy": "Zhè shì shéi de míngzi?",
        "note": "谁的 + danh từ — của ai.",
        "pair": "谁的……？"
      }
    ]
  },
  {
    "n": 3,
    "zh": "这",
    "py": "zhè",
    "pos": "Đại từ",
    "vn": "này, đây",
    "hv": "giá",
    "em": "👆",
    "lesson": 2,
    "ex_zh": "这是谁？",
    "ex_py": "Zhè shì shéi?",
    "ex_vn": "Đây là ai?",
    "exList": [
      {
        "zh": "这是谁？",
        "py": "Zhè shì shéi?",
        "vn": "Đây là ai?"
      },
      {
        "zh": "这是我女朋友。",
        "py": "Zhè shì wǒ nǚpéngyou.",
        "vn": "Đây là bạn gái tôi."
      }
    ],
    "hanzi": [
      {
        "c": "这",
        "p": "zhè",
        "type": "半包围结构 · Bán bao vây",
        "st": 7,
        "ord": "文(văn) bên trong → 辶(sước) bao quanh dưới-trái",
        "rad": "辶 (sước – đi, chuyển động)",
        "mean": "này, đây (chỉ thị gần)",
        "tip": "辶(đi, di chuyển tới) bao quanh 文(sự việc, văn bản) → bước tới chỉ ngay vào một thứ đang ở GẦN mình, nghĩa là \"THIS, ĐÂY\".",
        "cf": "边 (biān – \"bên cạnh\", cũng có bộ 辶 nhưng bên trong là 边\")",
        "w": "这是 / 这个 / 这里"
      }
    ],
    "colloFull": [
      {
        "zh": "这是",
        "py": "zhè shì",
        "vn": "đây là"
      },
      {
        "zh": "这是谁",
        "py": "zhè shì shéi",
        "vn": "đây là ai"
      },
      {
        "zh": "这是我的",
        "py": "zhè shì wǒ de",
        "vn": "đây là của tôi"
      }
    ],
    "patterns": [
      {
        "s": "这 + 是 + danh từ",
        "m": "Giới thiệu người, vật ở gần: 这是我姐姐"
      },
      {
        "s": "这 (gần) — dùng khi người hoặc vật ở ngay bên cạnh"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Đây là chị tôi.",
        "answer": "这是我姐姐。",
        "answerPy": "Zhè shì wǒ jiějie.",
        "note": "Giới thiệu người ở gần thì dùng 这是.",
        "pair": "这是……"
      },
      {
        "promptLang": "vi",
        "prompt": "Đây là bạn gái của tôi, cô ấy là người Thái Lan.",
        "answer": "这是我女朋友，她是泰国人。",
        "answerPy": "Zhè shì wǒ nǚpéngyou, tā shì Tàiguó rén.",
        "note": "Người thân và bạn bè hay bỏ 的.",
        "pair": "这是……"
      }
    ]
  },
  {
    "n": 4,
    "zh": "谁",
    "py": "shéi/shuí",
    "pos": "Đại từ",
    "vn": "ai",
    "hv": "thùy",
    "em": "❓",
    "lesson": 2,
    "ex_zh": "这是谁？",
    "ex_py": "Zhè shì shéi?",
    "ex_vn": "Đây là ai?",
    "exList": [
      {
        "zh": "这是谁？",
        "py": "Zhè shì shéi?",
        "vn": "Đây là ai?"
      }
    ],
    "hanzi": [
      {
        "c": "谁",
        "p": "shéi",
        "type": "左右结构 · Trái-phải",
        "st": 10,
        "ord": "讠(ngôn) trái → 隹(chuy) phải",
        "rad": "讠 (ngôn – lời nói)",
        "mean": "ai",
        "tip": "讠(lời nói) + 隹(chim) → dùng lời để hỏi xem đó là AI, giống tiếng chim hỏi han.",
        "cf": "难 (nán – \"khó\", cũng có 隹\")",
        "w": "这是谁 / 谁是老师"
      }
    ],
    "colloFull": [
      {
        "zh": "是谁",
        "py": "shì shéi",
        "vn": "là ai"
      },
      {
        "zh": "谁的",
        "py": "shéi de",
        "vn": "của ai"
      },
      {
        "zh": "这是谁",
        "py": "zhè shì shéi",
        "vn": "đây là ai"
      }
    ],
    "patterns": [
      {
        "s": "Sub + 是 + 谁？",
        "m": "Hỏi người nào: 这是谁？"
      },
      {
        "s": "Câu đã có 谁 thì KHÔNG thêm 吗"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Đây là ai?",
        "answer": "这是谁？",
        "answerPy": "Zhè shì shéi?",
        "note": "Câu đã có 谁 nên không thêm 吗.",
        "pair": "这是谁？"
      },
      {
        "promptLang": "vi",
        "prompt": "Công việc này là của ai?",
        "answer": "这是谁的工作？",
        "answerPy": "Zhè shì shéi de gōngzuò?",
        "note": "谁的工作 — công việc của ai.",
        "pair": "谁的……？"
      }
    ]
  },
  {
    "n": 5,
    "zh": "女朋友",
    "py": "nǚpéngyou",
    "pos": "Danh từ",
    "vn": "bạn gái, người yêu",
    "hv": "nữ bằng hữu",
    "em": "💑",
    "lesson": 2,
    "ex_zh": "这是我女朋友。",
    "ex_py": "Zhè shì wǒ nǚpéngyou.",
    "ex_vn": "Đây là bạn gái tôi.",
    "exList": [
      {
        "zh": "这是我女朋友。",
        "py": "Zhè shì wǒ nǚpéngyou.",
        "vn": "Đây là bạn gái tôi."
      }
    ],
    "hanzi": [
      {
        "c": "女",
        "p": "nǚ",
        "type": "独体字 · Chữ đơn",
        "st": 3,
        "ord": "3 nét mô phỏng dáng người phụ nữ ngồi, hai tay khoanh trước ngực",
        "rad": "女 (nữ – tự thành bộ, nghĩa: phụ nữ)",
        "mean": "nữ, con gái, phụ nữ",
        "tip": "Chữ tượng hình cổ vẽ dáng một người PHỤ NỮ đang ngồi, hai tay khoanh trước ngực một cách dịu dàng.",
        "cf": "安 (ān – \"an toàn\", có 女 ở dưới bộ 宀\")",
        "w": "女朋友 / 女儿 / 女人"
      },
      {
        "c": "朋",
        "p": "péng",
        "type": "左右结构 · Trái-phải",
        "st": 8,
        "ord": "月(nguyệt) trái → 月(nguyệt) phải",
        "rad": "月 (nguyệt – trăng, tháng)",
        "mean": "bạn bè",
        "tip": "Hai chữ 月(trăng) đứng sóng đôi cạnh nhau như hai vầng trăng luôn ở BÊN NHAU → tượng trưng cho BẠN BÈ gắn bó.",
        "cf": "崩 (bēng – \"sụp đổ\", trên có 山, dưới có 朋\")",
        "w": "朋友 / 女朋友 / 男朋友"
      },
      {
        "c": "友",
        "p": "yǒu",
        "type": "上下结构 · Trên-dưới",
        "st": 4,
        "ord": "𠂇(tay trái, biến thể) trên → 又(tay phải) dưới",
        "rad": "又 (hựu – lại, bàn tay)",
        "mean": "bạn, bạn bè",
        "tip": "Hai bộ phận đều là hình biến thể của BÀN TAY (𠂇 trên, 又 dưới) nắm chặt lấy nhau → hai tay nắm nhau biểu thị tình BẠN BÈ thân thiết.",
        "cf": "反 (fǎn – \"trái, ngược lại\", cũng có 又 ở dưới nhưng trên là 厂\")",
        "w": "朋友 / 友好 / 女朋友"
      }
    ],
    "colloFull": [
      {
        "zh": "我女朋友",
        "py": "wǒ nǚpéngyou",
        "vn": "bạn gái tôi"
      },
      {
        "zh": "女朋友的名字",
        "py": "nǚpéngyou de míngzi",
        "vn": "tên bạn gái"
      },
      {
        "zh": "她是我女朋友",
        "py": "tā shì wǒ nǚpéngyou",
        "vn": "cô ấy là bạn gái tôi"
      }
    ],
    "patterns": [
      {
        "s": "ai + 女朋友",
        "m": "Bạn gái của ai — hay bỏ 的: 我女朋友"
      },
      {
        "s": "女 + 朋友",
        "m": "Người bạn (朋友) là nữ (女)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Bạn gái tôi là người Pháp.",
        "answer": "我女朋友是法国人。",
        "answerPy": "Wǒ nǚpéngyou shì Fǎguó rén.",
        "note": "我女朋友 — bạn gái tôi, bỏ 的 cho gọn.",
        "pair": "是……"
      },
      {
        "promptLang": "vi",
        "prompt": "Tên bạn gái bạn là gì?",
        "answer": "你女朋友叫什么名字？",
        "answerPy": "Nǐ nǚpéngyou jiào shénme míngzi?",
        "note": "Chủ ngữ là người thứ ba vẫn dùng khung này.",
        "pair": "叫什么名字？"
      }
    ]
  },
  {
    "n": 6,
    "zh": "哪",
    "py": "nǎ",
    "pos": "Đại từ",
    "vn": "nào",
    "hv": "na",
    "em": "🌍",
    "lesson": 2,
    "ex_zh": "你女朋友是哪国人？",
    "ex_py": "Nǐ nǚpéngyou shì nǎ guó rén?",
    "ex_vn": "Bạn gái của bạn là người nước nào?",
    "exList": [
      {
        "zh": "你女朋友是哪国人？",
        "py": "Nǐ nǚpéngyou shì nǎ guó rén?",
        "vn": "Bạn gái của bạn là người nước nào?"
      }
    ],
    "hanzi": [
      {
        "c": "哪",
        "p": "nǎ",
        "type": "左右结构 · Trái-phải",
        "st": 9,
        "ord": "口(khẩu) trái → 那(na) phải",
        "rad": "口 (khẩu – miệng)",
        "mean": "nào, cái nào (nghi vấn)",
        "tip": "口(miệng, dùng để hỏi) + 那(kia, đó) → dùng MIỆNG hỏi xem đó là cái \"kia\" NÀO, tạo thành từ nghi vấn \"哪\".",
        "cf": "那 (nà – \"đó, kia\", chỉ khác là thiếu bộ 口 bên trái)",
        "w": "哪国 / 哪里 / 哪个"
      }
    ],
    "colloFull": [
      {
        "zh": "哪国",
        "py": "nǎ guó",
        "vn": "nước nào"
      },
      {
        "zh": "哪国人",
        "py": "nǎ guó rén",
        "vn": "người nước nào"
      },
      {
        "zh": "是哪国人",
        "py": "shì nǎ guó rén",
        "vn": "là người nước nào"
      }
    ],
    "patterns": [
      {
        "s": "哪 + 国 + 人",
        "m": "Khung hỏi quốc tịch: 你是哪国人？"
      },
      {
        "s": "哪 (nǎ, nào) — dùng để hỏi, luôn cần người nghe chọn ra một cái"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Bạn là người nước nào?",
        "answer": "你是哪国人？",
        "answerPy": "Nǐ shì nǎ guó rén?",
        "note": "Khung hỏi quốc tịch quen thuộc nhất.",
        "pair": "哪国人？"
      },
      {
        "promptLang": "vi",
        "prompt": "Chị bạn là người nước nào?",
        "answer": "你姐姐是哪国人？",
        "answerPy": "Nǐ jiějie shì nǎ guó rén?",
        "note": "你姐姐 — chị của bạn.",
        "pair": "哪国人？"
      }
    ]
  },
  {
    "n": 7,
    "zh": "国",
    "py": "guó",
    "pos": "Danh từ",
    "vn": "quốc gia, đất nước",
    "hv": "quốc",
    "em": "🏳️",
    "lesson": 2,
    "ex_zh": "你女朋友是哪国人？",
    "ex_py": "Nǐ nǚpéngyou shì nǎ guó rén?",
    "ex_vn": "Bạn gái của bạn là người nước nào?",
    "exList": [
      {
        "zh": "你女朋友是哪国人？",
        "py": "Nǐ nǚpéngyou shì nǎ guó rén?",
        "vn": "Bạn gái của bạn là người nước nào?"
      }
    ],
    "hanzi": [
      {
        "c": "国",
        "p": "guó",
        "type": "全包围结构 · Bao vây toàn phần",
        "st": 8,
        "ord": "囗(vi) bao ngoài → 玉(ngọc, biến thể) bên trong",
        "rad": "囗 (vi – vây quanh, bao bọc)",
        "mean": "nước, quốc gia",
        "tip": "囗(đường biên giới bao quanh) + 玉(ngọc quý) → một vùng đất có ĐƯỜNG BIÊN bao bọc lấy báu vật (ngọc) bên trong, tượng trưng cho một QUỐC GIA.",
        "cf": "固 (gù – \"vững chắc\", cũng có 囗 bao ngoài nhưng bên trong là 古\")",
        "w": "中国 / 法国 / 泰国"
      }
    ],
    "colloFull": [
      {
        "zh": "中国",
        "py": "Zhōngguó",
        "vn": "Trung Quốc"
      },
      {
        "zh": "法国",
        "py": "Fǎguó",
        "vn": "nước Pháp"
      },
      {
        "zh": "泰国",
        "py": "Tàiguó",
        "vn": "Thái Lan"
      },
      {
        "zh": "哪国人",
        "py": "nǎ guó rén",
        "vn": "người nước nào"
      }
    ],
    "patterns": [
      {
        "s": "国 ghép sau chữ chỉ tên nước: 中国 · 法国 · 泰国"
      },
      {
        "s": "国 có bộ 囗 (vây quanh) — biên giới bao lấy đất nước"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Chúng tôi đều là người Trung Quốc.",
        "answer": "我们是中国人。",
        "answerPy": "Wǒmen shì Zhōngguó rén.",
        "note": "中国 · 法国 · 泰国 đều ghép với 国.",
        "pair": "是……"
      },
      {
        "promptLang": "vi",
        "prompt": "Cô ấy cũng là người Thái Lan.",
        "answer": "她也是泰国人。",
        "answerPy": "Tā yě shì Tàiguó rén.",
        "note": "也 đứng sau chủ ngữ, trước động từ.",
        "pair": "也 + V"
      }
    ]
  },
  {
    "n": 8,
    "zh": "她",
    "py": "tā",
    "pos": "Đại từ",
    "vn": "cô ấy, chị ấy, bạn ấy",
    "hv": "tha",
    "em": "👩",
    "lesson": 2,
    "ex_zh": "她也是泰国人。",
    "ex_py": "Tā yě shì Tàiguó rén.",
    "ex_vn": "Cô ấy cũng là người Thái Lan.",
    "exList": [
      {
        "zh": "她也是泰国人。",
        "py": "Tā yě shì Tàiguó rén.",
        "vn": "Cô ấy cũng là người Thái Lan."
      }
    ],
    "hanzi": [
      {
        "c": "她",
        "p": "tā",
        "type": "左右结构 · Trái-phải",
        "st": 6,
        "ord": "女(nữ) trái → 也(dã) phải",
        "rad": "女 (nữ – phụ nữ)",
        "mean": "cô ấy, chị ấy (đại từ ngôi 3, nữ)",
        "tip": "女(phụ nữ) + 也(cũng, mượn âm đọc gần \"tā\") → mượn âm 也 ghép với bộ 女 để tạo đại từ ngôi thứ ba riêng cho NỮ GIỚI.",
        "cf": "他 (tā – \"anh ấy, ông ấy\", cùng âm đọc nhưng dùng bộ 亻cho nam giới)",
        "w": "她是 / 她的 / 她也"
      }
    ],
    "colloFull": [
      {
        "zh": "她是",
        "py": "tā shì",
        "vn": "cô ấy là"
      },
      {
        "zh": "她的名字",
        "py": "tā de míngzi",
        "vn": "tên của cô ấy"
      },
      {
        "zh": "她也是",
        "py": "tā yě shì",
        "vn": "cô ấy cũng vậy"
      },
      {
        "zh": "她姐姐",
        "py": "tā jiějie",
        "vn": "chị của cô ấy"
      }
    ],
    "patterns": [
      {
        "s": "她 + 是 + danh từ",
        "m": "Cô ấy là …: 她是我姐姐"
      },
      {
        "s": "她 viết bằng bộ 女, chỉ dùng cho người nữ"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Cô ấy là giáo viên tiếng Trung của tôi.",
        "answer": "她是我的中文老师。",
        "answerPy": "Tā shì wǒ de Zhōngwén lǎoshī.",
        "note": "中文老师 ghép thẳng, không cần 的 ở giữa.",
        "pair": "是……"
      },
      {
        "promptLang": "vi",
        "prompt": "Cô ấy rất bận, vẫn đang làm việc.",
        "answer": "她很忙，还工作。",
        "answerPy": "Tā hěn máng, hái gōngzuò.",
        "note": "还 nghĩa là vẫn còn như cũ.",
        "pair": "很 + Adj"
      }
    ]
  },
  {
    "n": 9,
    "zh": "喂",
    "py": "wèi",
    "pos": "Thán từ",
    "vn": "a lô",
    "hv": "úy",
    "em": "📞",
    "lesson": 3,
    "ex_zh": "喂，一飞！",
    "ex_py": "Wèi, Yīfēi!",
    "ex_vn": "A lô, Nhất Phi à!",
    "exList": [
      {
        "zh": "喂，一飞！",
        "py": "Wèi, Yīfēi!",
        "vn": "A lô, Nhất Phi à!"
      }
    ],
    "hanzi": [
      {
        "c": "喂",
        "p": "wèi",
        "type": "左右结构 · Trái-phải",
        "st": 12,
        "ord": "口(khẩu) trái → 畏(uý) phải",
        "rad": "口 (khẩu – miệng)",
        "mean": "a lô, này (gọi ai đó / nghe điện thoại)",
        "tip": "口(miệng, phát ra tiếng) + 畏(e dè, thận trọng) → cất tiếng gọi một cách nhẹ nhàng để gây chú ý, giống tiếng \"A LÔ\" khi bắt đầu cuộc gọi.",
        "cf": "猥 (wěi – \"bỉ ổi\", cũng có 畏 nhưng bộ 犭 bên trái)",
        "w": "喂，你好 / 喂？"
      }
    ],
    "colloFull": [],
    "patterns": [
      {
        "s": "喂 + lời chào",
        "m": "Câu mở đầu khi nghe điện thoại: 喂，你好！"
      },
      {
        "s": "喂 chỉ dùng trong điện thoại, không dùng khi gặp mặt"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "A lô, chào bạn! Tôi là Vương Phương.",
        "answer": "喂，你好！我是王方。",
        "answerPy": "Wèi, nǐ hǎo! Wǒ shì Wáng Fāng.",
        "note": "喂 chỉ dùng khi nghe điện thoại.",
        "pair": "喂，……"
      },
      {
        "promptLang": "vi",
        "prompt": "A lô, thầy ạ, thầy có bận không ạ?",
        "answer": "喂，老师，您忙吗？",
        "answerPy": "Wèi, lǎoshī, nín máng ma?",
        "note": "Gọi người ta trước rồi mới hỏi.",
        "pair": "……吗？"
      }
    ]
  },
  {
    "n": 10,
    "zh": "姐姐",
    "py": "jiějie",
    "pos": "Danh từ",
    "vn": "chị gái",
    "hv": "thư thư",
    "em": "👧",
    "lesson": 3,
    "ex_zh": "姐姐！",
    "ex_py": "Jiějie!",
    "ex_vn": "Chị ơi!",
    "exList": [
      {
        "zh": "姐姐！",
        "py": "Jiějie!",
        "vn": "Chị ơi!"
      }
    ],
    "hanzi": [
      {
        "c": "姐",
        "p": "jiě",
        "type": "左右结构 · Trái-phải",
        "st": 8,
        "ord": "女(nữ) trái → 且(thả) phải",
        "rad": "女 (nữ – phụ nữ)",
        "mean": "chị gái",
        "tip": "女(phụ nữ) + 且(thêm nữa, hình các lớp chồng lên nhau) → người phụ nữ sinh ra TRƯỚC, đứng ở bậc trên trong nhà, tức là CHỊ GÁI.",
        "cf": "组 (zǔ – \"tổ, nhóm\", bộ 纟 bên trái thay vì 女\")",
        "w": "姐姐 / 姐妹"
      }
    ],
    "colloFull": [
      {
        "zh": "我姐姐",
        "py": "wǒ jiějie",
        "vn": "chị tôi"
      },
      {
        "zh": "她姐姐",
        "py": "tā jiějie",
        "vn": "chị của cô ấy"
      },
      {
        "zh": "姐姐的名字",
        "py": "jiějie de míngzi",
        "vn": "tên của chị"
      },
      {
        "zh": "姐姐的工作",
        "py": "jiějie de gōngzuò",
        "vn": "công việc của chị"
      }
    ],
    "patterns": [
      {
        "s": "ai + 姐姐",
        "m": "Chị của ai — người thân hay bỏ 的"
      },
      {
        "s": "姐姐 là chị gái ruột, không dùng để gọi người lạ"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Chị tôi là người Pháp.",
        "answer": "我姐姐是法国人。",
        "answerPy": "Wǒ jiějie shì Fǎguó rén.",
        "note": "姐姐 là chị gái ruột.",
        "pair": "是……"
      },
      {
        "promptLang": "vi",
        "prompt": "Chị bạn có bận không?",
        "answer": "你姐姐忙吗？",
        "answerPy": "Nǐ jiějie máng ma?",
        "note": "Thêm 吗 vào cuối câu kể là thành câu hỏi.",
        "pair": "……吗？"
      }
    ]
  },
  {
    "n": 11,
    "zh": "工作",
    "py": "gōngzuò",
    "pos": "Danh từ",
    "vn": "công việc",
    "hv": "công tác",
    "em": "💼",
    "lesson": 3,
    "ex_zh": "你工作还忙吗？",
    "ex_py": "Nǐ gōngzuò hái máng ma?",
    "ex_vn": "Công việc của em vẫn bận chứ?",
    "exList": [
      {
        "zh": "你工作还忙吗？",
        "py": "Nǐ gōngzuò hái máng ma?",
        "vn": "Công việc của em vẫn bận chứ?"
      }
    ],
    "hanzi": [
      {
        "c": "工",
        "p": "gōng",
        "type": "独体字 · Chữ đơn",
        "st": 3,
        "ord": "横(ngang trên) → 竖(sổ giữa) → 横(ngang dưới)",
        "rad": "工 (công – tự thành bộ, nghĩa: công cụ, thợ)",
        "mean": "công việc, thợ, công cụ",
        "tip": "Hình vẽ giống cây THƯỚC THỢ (dụng cụ xây dựng) với hai đầu ngang và một trục dọc → tượng trưng cho LAO ĐỘNG, CÔNG VIỆC.",
        "cf": "土 (tǔ – \"đất\", nét ngang dưới ngắn hơn thay vì dài bằng, hình dáng gần giống 工\")",
        "w": "工作 / 工人"
      },
      {
        "c": "作",
        "p": "zuò",
        "type": "左右结构 · Trái-phải",
        "st": 7,
        "ord": "亻(nhân) trái → 乍(sạ) phải",
        "rad": "亻 (nhân – người)",
        "mean": "làm, việc làm",
        "tip": "亻(người) + 乍(bỗng nhiên, vừa mới) → người bắt tay vào LÀM một việc ngay khi vừa nghĩ ra.",
        "cf": "昨 (zuó – \"hôm qua\", cũng có 乍 nhưng bộ 日 bên trái)",
        "w": "工作 / 作业"
      }
    ],
    "colloFull": [
      {
        "zh": "我的工作",
        "py": "wǒ de gōngzuò",
        "vn": "công việc của tôi"
      },
      {
        "zh": "姐姐的工作",
        "py": "jiějie de gōngzuò",
        "vn": "công việc của chị"
      },
      {
        "zh": "工作的人",
        "py": "gōngzuò de rén",
        "vn": "người đi làm"
      },
      {
        "zh": "想工作",
        "py": "xiǎng gōngzuò",
        "vn": "muốn đi làm"
      }
    ],
    "patterns": [
      {
        "s": "Sub + 工作",
        "m": "Làm việc — 工作 vừa là động từ, vừa là danh từ"
      },
      {
        "s": "工 + 作",
        "m": "Làm (作) việc (工)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Công việc của chị tôi rất bận.",
        "answer": "我姐姐的工作很忙。",
        "answerPy": "Wǒ jiějie de gōngzuò hěn máng.",
        "note": "Ở đây 工作 là danh từ.",
        "pair": "很 + Adj"
      },
      {
        "promptLang": "vi",
        "prompt": "Tôi muốn đi làm.",
        "answer": "我想工作。",
        "answerPy": "Wǒ xiǎng gōngzuò.",
        "note": "Ở đây 工作 là động từ.",
        "pair": "想 + V"
      }
    ]
  },
  {
    "n": 12,
    "zh": "还",
    "py": "hái",
    "pos": "Phó từ",
    "vn": "vẫn",
    "hv": "hoàn",
    "em": "🔁",
    "lesson": 3,
    "ex_zh": "对，还很忙。",
    "ex_py": "Duì, hái hěn máng.",
    "ex_vn": "Vâng, vẫn rất bận.",
    "exList": [
      {
        "zh": "对，还很忙。",
        "py": "Duì, hái hěn máng.",
        "vn": "Vâng, vẫn rất bận."
      }
    ],
    "hanzi": [
      {
        "c": "还",
        "p": "hái",
        "type": "半包围结构 · Bán bao vây",
        "st": 7,
        "ord": "不(bất) bên trong → 辶(sước) bao quanh dưới-trái",
        "rad": "辶 (sước – đi, chuyển động)",
        "mean": "vẫn, còn",
        "tip": "不(chưa, không) + 辶(di chuyển, tiếp diễn) → việc CHƯA xong nhưng vẫn tiếp tục DI CHUYỂN/duy trì, nghĩa là \"VẪN CÒN\".",
        "cf": "达 (dá – \"đạt tới\", cũng có bộ 辶 nhưng bên trong là 大\")",
        "w": "还忙 / 还是 / 还有"
      }
    ],
    "colloFull": [
      {
        "zh": "还好",
        "py": "hái hǎo",
        "vn": "vẫn ổn"
      },
      {
        "zh": "还忙",
        "py": "hái máng",
        "vn": "vẫn bận"
      },
      {
        "zh": "还是学生",
        "py": "háishi xuésheng",
        "vn": "vẫn là học sinh"
      },
      {
        "zh": "还不认识",
        "py": "hái bú rènshi",
        "vn": "vẫn chưa quen"
      }
    ],
    "patterns": [
      {
        "s": "还 + động từ / tính từ",
        "m": "Vẫn còn như cũ: 她还忙"
      },
      {
        "s": "还好 là câu trả lời rất hay dùng: cũng tạm, vẫn ổn"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tôi vẫn chưa quen cô ấy.",
        "answer": "我还不认识她。",
        "answerPy": "Wǒ hái bú rènshi tā.",
        "note": "还不 — vẫn chưa.",
        "pair": "还不……"
      },
      {
        "promptLang": "vi",
        "prompt": "— Bạn có bận không? — Cũng tạm.",
        "answer": "你忙吗？——还好。",
        "answerPy": "Nǐ máng ma? —— Hái hǎo.",
        "note": "还好 là câu trả lời rất hay dùng: cũng tạm.",
        "pair": "……吗？"
      }
    ]
  },
  {
    "n": 13,
    "zh": "忙",
    "py": "máng",
    "pos": "Tính từ",
    "vn": "bận, bận rộn",
    "hv": "mang",
    "em": "😰",
    "lesson": 3,
    "ex_zh": "你也很忙吗？",
    "ex_py": "Nǐ yě hěn máng ma?",
    "ex_vn": "Chị cũng bận lắm phải không?",
    "exList": [
      {
        "zh": "你也很忙吗？",
        "py": "Nǐ yě hěn máng ma?",
        "vn": "Chị cũng bận lắm phải không?"
      }
    ],
    "hanzi": [
      {
        "c": "忙",
        "p": "máng",
        "type": "左右结构 · Trái-phải",
        "st": 6,
        "ord": "忄(tâm) trái → 亡(vong) phải",
        "rad": "忄 (tâm – trái tim)",
        "mean": "bận rộn",
        "tip": "忄(tâm/lòng dạ) + 亡(mất) → trong lòng cảm thấy như MẤT thời gian vì quá BẬN RỘN.",
        "cf": "忘 (wàng – \"quên\", cũng có 亡\" nhưng ở trên)",
        "w": "很忙 / 工作忙"
      }
    ],
    "colloFull": [
      {
        "zh": "很忙",
        "py": "hěn máng",
        "vn": "rất bận"
      },
      {
        "zh": "不忙",
        "py": "bù máng",
        "vn": "không bận"
      },
      {
        "zh": "太忙了",
        "py": "tài máng le",
        "vn": "bận quá"
      },
      {
        "zh": "还忙",
        "py": "hái máng",
        "vn": "vẫn bận"
      }
    ],
    "patterns": [
      {
        "s": "Sub + 很 + 忙",
        "m": "Câu vị ngữ tính từ: 我很忙"
      },
      {
        "s": "忙 có bộ 忄 (tâm) — bận đến rối cả lòng"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Dạo này tôi rất bận.",
        "answer": "我很忙。",
        "answerPy": "Wǒ hěn máng.",
        "note": "Tính từ làm vị ngữ cần có 很.",
        "pair": "很 + Adj"
      },
      {
        "promptLang": "vi",
        "prompt": "Thầy Vương bận quá!",
        "answer": "王老师太忙了！",
        "answerPy": "Wáng lǎoshī tài máng le!",
        "note": "太……了 phải đủ hai vế.",
        "pair": "太……了"
      }
    ]
  },
  {
    "n": 14,
    "zh": "吗",
    "py": "ma",
    "pos": "Trợ từ",
    "vn": "…phải không? (dùng ở cuối câu để hỏi)",
    "hv": "ma",
    "em": "❔",
    "lesson": 3,
    "ex_zh": "你工作还忙吗？",
    "ex_py": "Nǐ gōngzuò hái máng ma?",
    "ex_vn": "Công việc của em vẫn bận chứ?",
    "exList": [
      {
        "zh": "你工作还忙吗？",
        "py": "Nǐ gōngzuò hái máng ma?",
        "vn": "Công việc của em vẫn bận chứ?"
      }
    ],
    "hanzi": [
      {
        "c": "吗",
        "p": "ma",
        "type": "左右结构 · Trái-phải",
        "st": 6,
        "ord": "口(khẩu) trái → 马(mã) phải",
        "rad": "口 (khẩu – miệng)",
        "mean": "trợ từ nghi vấn cuối câu",
        "tip": "口(miệng, lời nói) + 马(con ngựa, mượn âm đọc gần \"ma\") → mượn âm của 马 ghép bộ 口 để tạo trợ từ hỏi cuối câu, không liên quan nghĩa \"ngựa\".",
        "cf": "妈 (mā – \"mẹ\", cũng có 马 nhưng bộ 女 bên trái)",
        "w": "忙吗 / 你好吗 / 是吗"
      }
    ],
    "colloFull": [
      {
        "zh": "好吗",
        "py": "hǎo ma",
        "vn": "có khoẻ không"
      },
      {
        "zh": "忙吗",
        "py": "máng ma",
        "vn": "có bận không"
      },
      {
        "zh": "是吗",
        "py": "shì ma",
        "vn": "phải không"
      },
      {
        "zh": "认识吗",
        "py": "rènshi ma",
        "vn": "có quen không"
      }
    ],
    "patterns": [
      {
        "s": "câu kể + 吗？",
        "m": "Biến câu kể thành câu hỏi: 你忙吗？"
      },
      {
        "s": "吗 luôn đứng CUỐI câu; đã có 谁 · 什么 · 哪 thì không dùng 吗"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Bạn có bận không?",
        "answer": "你忙吗？",
        "answerPy": "Nǐ máng ma?",
        "note": "吗 luôn đứng ở cuối câu.",
        "pair": "……吗？"
      },
      {
        "promptLang": "vi",
        "prompt": "Bạn có quen chị tôi không?",
        "answer": "你认识我姐姐吗？",
        "answerPy": "Nǐ rènshi wǒ jiějie ma?",
        "note": "Đã có 谁 · 什么 · 哪 thì không dùng 吗 nữa.",
        "pair": "……吗？"
      }
    ]
  },
  {
    "n": 15,
    "zh": "对",
    "py": "duì",
    "pos": "Tính từ",
    "vn": "đúng",
    "hv": "đối",
    "em": "✔️",
    "lesson": 3,
    "ex_zh": "对，还很忙。",
    "ex_py": "Duì, hái hěn máng.",
    "ex_vn": "Vâng, vẫn rất bận.",
    "exList": [
      {
        "zh": "对，还很忙。",
        "py": "Duì, hái hěn máng.",
        "vn": "Vâng, vẫn rất bận."
      }
    ],
    "hanzi": [
      {
        "c": "对",
        "p": "duì",
        "type": "左右结构 · Trái-phải",
        "st": 5,
        "ord": "又(biến thể, rút gọn) trái → 寸(thốn) phải",
        "rad": "寸 (thốn – tấc, chuẩn mực, đo lường)",
        "mean": "đúng, đối, đáp lại",
        "tip": "Bên trái là hình rút gọn tượng trưng lời nói/ý kiến, bên phải là 寸(chuẩn mực) → so ý kiến với CHUẨN MỰC thấy khớp thì là ĐÚNG.",
        "cf": "付 (fù – \"trả (tiền)\", cũng có 寸 bên phải nhưng bộ 亻bên trái)",
        "w": "对，还很忙 / 对不起 / 不对"
      }
    ],
    "colloFull": [
      {
        "zh": "对了",
        "py": "duì le",
        "vn": "đúng rồi"
      },
      {
        "zh": "不对",
        "py": "bú duì",
        "vn": "không đúng"
      },
      {
        "zh": "很对",
        "py": "hěn duì",
        "vn": "rất đúng"
      },
      {
        "zh": "对，我是",
        "py": "duì wǒ shì",
        "vn": "đúng, tôi là"
      }
    ],
    "patterns": [
      {
        "s": "对 / 不对",
        "m": "Đúng — không đúng: câu đáp ngắn rất hay dùng"
      },
      {
        "s": "对 cũng là câu đáp khi ai đó đoán trúng"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Đúng rồi, tôi là người Trung Quốc.",
        "answer": "对，我是中国人。",
        "answerPy": "Duì, wǒ shì Zhōngguó rén.",
        "note": "对 là câu đáp khi ai đó đoán trúng.",
        "pair": "对，……"
      },
      {
        "promptLang": "vi",
        "prompt": "Không đúng, cô ấy không phải chị tôi.",
        "answer": "不对，她不是我姐姐。",
        "answerPy": "Bú duì, tā bú shì wǒ jiějie.",
        "note": "不对 — không đúng.",
        "pair": "不对，……"
      }
    ]
  },
  {
    "n": 16,
    "zh": "太",
    "py": "tài",
    "pos": "Phó từ",
    "vn": "quá, lắm",
    "hv": "thái",
    "em": "⚡",
    "lesson": 3,
    "ex_zh": "我不太忙。",
    "ex_py": "Wǒ bú tài máng.",
    "ex_vn": "Tôi không bận lắm.",
    "exList": [
      {
        "zh": "我不太忙。",
        "py": "Wǒ bú tài máng.",
        "vn": "Tôi không bận lắm."
      }
    ],
    "hanzi": [
      {
        "c": "太",
        "p": "tài",
        "type": "独体字 · Chữ đơn",
        "st": 4,
        "ord": "大(đại) → thêm 丶(điểm) bên dưới",
        "rad": "大 (đại – to lớn)",
        "mean": "quá, lắm, thái (rất)",
        "tip": "大(to lớn) thêm một dấu CHẤM nhỏ bên dưới như phóng đại thêm nữa → \"to đến mức QUÁ, LẮM\".",
        "cf": "大 (dà – \"to, lớn\", thiếu dấu chấm so với 太\")",
        "w": "太忙 / 太好了 / 不太"
      }
    ],
    "colloFull": [
      {
        "zh": "太忙了",
        "py": "tài máng le",
        "vn": "bận quá"
      },
      {
        "zh": "太好了",
        "py": "tài hǎo le",
        "vn": "tốt quá"
      },
      {
        "zh": "太高兴了",
        "py": "tài gāoxìng le",
        "vn": "vui quá"
      }
    ],
    "patterns": [
      {
        "s": "太 + tính từ + 了",
        "m": "Quá … — hai vế phải đủ, không nói 太忙 trơ"
      },
      {
        "s": "太……了 mang cảm xúc mạnh hơn 很"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tốt quá! Rất vui được làm quen với bạn.",
        "answer": "太好了！很高兴认识你。",
        "answerPy": "Tài hǎo le! Hěn gāoxìng rènshi nǐ.",
        "note": "太好了 là câu cảm thán rất hay dùng.",
        "pair": "太……了"
      },
      {
        "promptLang": "vi",
        "prompt": "Công việc của chị tôi bận quá.",
        "answer": "我姐姐的工作太忙了。",
        "answerPy": "Wǒ jiějie de gōngzuò tài máng le.",
        "note": "Không nói 太忙 trơ, phải có 了.",
        "pair": "太……了"
      }
    ]
  },
  {
    "n": 17,
    "zh": "我们",
    "py": "wǒmen",
    "pos": "Đại từ",
    "vn": "chúng tôi, chúng ta",
    "hv": "ngã môn",
    "em": "🙋‍♀️🙋",
    "lesson": 3,
    "ex_zh": "我们很想你。",
    "ex_py": "Wǒmen hěn xiǎng nǐ.",
    "ex_vn": "Chúng tôi rất nhớ em.",
    "exList": [
      {
        "zh": "我们很想你。",
        "py": "Wǒmen hěn xiǎng nǐ.",
        "vn": "Chúng tôi rất nhớ em."
      }
    ],
    "hanzi": [
      {
        "c": "我",
        "p": "wǒ",
        "type": "独体字 · Chữ đơn",
        "st": 7,
        "ord": "撇 → 横 → 竖钩 → 横 → 斜钩 → 撇 → 捺 (nét phức, tượng hình vũ khí cổ)",
        "rad": "戈 (qua – cây giáo, vũ khí)",
        "mean": "tôi, ta",
        "tip": "Chữ tượng hình cổ mô phỏng một loại VŨ KHÍ có răng cưa mà người xưa cầm để tự vệ, dần mang nghĩa \"bản thân TA, TÔI\" như người cầm vũ khí bảo vệ chính mình.",
        "cf": "找 (zhǎo – \"tìm\", cũng có 戈 bên phải nhưng thêm bộ 扌bên trái)",
        "w": "我是 / 我的 / 我们"
      },
      {
        "c": "们",
        "p": "men",
        "type": "左右结构 · Trái-phải",
        "st": 5,
        "ord": "亻(nhân) trái → 门(môn) phải",
        "rad": "亻 (nhân – người)",
        "mean": "(hậu tố chỉ số nhiều cho người)",
        "tip": "亻(người) + 门(cái cửa, mượn âm đọc gần \"men\") → như mở CỬA đón nhiều NGƯỜI vào, biểu thị số NHIỀU cho đại từ chỉ người.",
        "cf": "门 (mén – \"cửa\", thiếu bộ 亻bên trái)",
        "w": "我们 / 你们 / 他们"
      }
    ],
    "colloFull": [
      {
        "zh": "我们是",
        "py": "wǒmen shì",
        "vn": "chúng tôi là"
      },
      {
        "zh": "我们的老师",
        "py": "wǒmen de lǎoshī",
        "vn": "giáo viên của chúng tôi"
      },
      {
        "zh": "我们也",
        "py": "wǒmen yě",
        "vn": "chúng tôi cũng"
      },
      {
        "zh": "我们同学",
        "py": "wǒmen tóngxué",
        "vn": "các bạn cùng lớp chúng tôi"
      }
    ],
    "patterns": [
      {
        "s": "我 + 们",
        "m": "Số nhiều của 我"
      },
      {
        "s": "我们 vừa là \"chúng tôi\", vừa là \"chúng ta\""
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Chúng tôi đều là học sinh.",
        "answer": "我们是学生。",
        "answerPy": "Wǒmen shì xuésheng.",
        "note": "我们 vừa là chúng tôi, vừa là chúng ta.",
        "pair": "是……"
      },
      {
        "promptLang": "vi",
        "prompt": "Giáo viên tiếng Trung của chúng tôi rất tốt.",
        "answer": "我们的中文老师很好。",
        "answerPy": "Wǒmen de Zhōngwén lǎoshī hěn hǎo.",
        "note": "我们的 + danh từ — của chúng tôi.",
        "pair": "很 + Adj"
      }
    ]
  },
  {
    "n": 18,
    "zh": "想",
    "py": "xiǎng",
    "pos": "Động từ",
    "vn": "nhớ",
    "hv": "tưởng",
    "em": "💭",
    "lesson": 3,
    "ex_zh": "我也想你们。",
    "ex_py": "Wǒ yě xiǎng nǐmen.",
    "ex_vn": "Em cũng nhớ mọi người.",
    "exList": [
      {
        "zh": "我也想你们。",
        "py": "Wǒ yě xiǎng nǐmen.",
        "vn": "Em cũng nhớ mọi người."
      }
    ],
    "hanzi": [
      {
        "c": "想",
        "p": "xiǎng",
        "type": "上下结构 · Trên-dưới",
        "st": 13,
        "ord": "相(tương) trên → 心(tâm) dưới",
        "rad": "心 (tâm – trái tim)",
        "mean": "nhớ, nghĩ",
        "tip": "相(nhìn nhau) + 心(trái tim) → trong TIM luôn hướng về hình ảnh người kia = NHỚ, NGHĨ tới.",
        "cf": "相 (xiāng – \"lẫn nhau\", phần trên của 想\")",
        "w": "想你 / 我想"
      }
    ],
    "colloFull": [
      {
        "zh": "想认识",
        "py": "xiǎng rènshi",
        "vn": "muốn làm quen"
      },
      {
        "zh": "不想",
        "py": "bù xiǎng",
        "vn": "không muốn"
      },
      {
        "zh": "想工作",
        "py": "xiǎng gōngzuò",
        "vn": "muốn đi làm"
      },
      {
        "zh": "我想",
        "py": "wǒ xiǎng",
        "vn": "tôi muốn"
      }
    ],
    "patterns": [
      {
        "s": "Sub + 想 + động từ",
        "m": "Muốn làm gì: 我想认识她"
      },
      {
        "s": "Phủ định là 不想, đặt 不 trước 想"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tôi muốn làm quen với chị bạn.",
        "answer": "我想认识你姐姐。",
        "answerPy": "Wǒ xiǎng rènshi nǐ jiějie.",
        "note": "想 + động từ — muốn làm gì.",
        "pair": "想 + V"
      },
      {
        "promptLang": "vi",
        "prompt": "Cô ấy không muốn đi làm.",
        "answer": "她不想工作。",
        "answerPy": "Tā bù xiǎng gōngzuò.",
        "note": "不 đặt trước 想.",
        "pair": "不想 + V"
      }
    ]
  },
  {
    "n": 19,
    "zh": "中国",
    "py": "Zhōngguó",
    "pos": "Danh từ riêng",
    "vn": "Trung Quốc",
    "hv": "Trung Quốc",
    "em": "🇨🇳",
    "lesson": 1,
    "ex_zh": "我是中国人。",
    "ex_py": "Wǒ shì Zhōngguó rén.",
    "ex_vn": "Tôi là người Trung Quốc.",
    "exList": [
      {
        "zh": "我是中国人。",
        "py": "Wǒ shì Zhōngguó rén.",
        "vn": "Tôi là người Trung Quốc."
      }
    ],
    "hanzi": [
      {
        "c": "中",
        "p": "zhōng",
        "type": "独体字 · Chữ đơn",
        "st": 4,
        "ord": "口(hình chữ nhật) → 丨(cổn, nét sổ xuyên giữa)",
        "rad": "丨 (cổn – nét sổ thẳng)",
        "mean": "giữa, trung tâm, trong",
        "tip": "Một nét sổ THẲNG xuyên qua chính giữa hình chữ nhật (口) như mũi tên cắm đúng TÂM bia → biểu thị vị trí Ở GIỮA, TRUNG TÂM.",
        "cf": "由 (yóu – \"từ, bởi\", nét sổ không xuyên hẳn lên trên như 中\")",
        "w": "中国 / 中文 / 中间"
      },
      {
        "c": "国",
        "p": "guó",
        "type": "全包围结构 · Bao vây toàn phần",
        "st": 8,
        "ord": "囗(vi) bao ngoài → 玉(ngọc, biến thể) bên trong",
        "rad": "囗 (vi – vây quanh, bao bọc)",
        "mean": "nước, quốc gia",
        "tip": "囗(đường biên giới bao quanh) + 玉(ngọc quý) → một vùng đất có ĐƯỜNG BIÊN bao bọc lấy báu vật (ngọc) bên trong, tượng trưng cho một QUỐC GIA.",
        "cf": "固 (gù – \"vững chắc\", cũng có 囗 bao ngoài nhưng bên trong là 古\")",
        "w": "中国 / 法国 / 泰国"
      }
    ],
    "colloFull": [
      {
        "zh": "中国人",
        "py": "Zhōngguó rén",
        "vn": "người Trung Quốc"
      },
      {
        "zh": "中国老师",
        "py": "Zhōngguó lǎoshī",
        "vn": "giáo viên Trung Quốc"
      },
      {
        "zh": "中国学生",
        "py": "Zhōngguó xuésheng",
        "vn": "học sinh Trung Quốc"
      }
    ],
    "patterns": [
      {
        "s": "中国 + người",
        "m": "Ghép thẳng phía trước danh từ chỉ người"
      },
      {
        "s": "中 + 国",
        "m": "Nước (国) ở giữa (中) — cách người Trung Quốc tự gọi"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Giáo viên của chúng tôi là người Trung Quốc.",
        "answer": "我们的老师是中国人。",
        "answerPy": "Wǒmen de lǎoshī shì Zhōngguó rén.",
        "note": "中国人 — người Trung Quốc.",
        "pair": "是……"
      },
      {
        "promptLang": "vi",
        "prompt": "Cô ấy là học sinh Trung Quốc phải không?",
        "answer": "她是中国学生吗？",
        "answerPy": "Tā shì Zhōngguó xuésheng ma?",
        "note": "中国学生 ghép thẳng, không cần 的.",
        "pair": "……吗？"
      }
    ]
  },
  {
    "n": 20,
    "zh": "法国",
    "py": "Fǎguó",
    "pos": "Danh từ riêng",
    "vn": "Pháp",
    "hv": "Pháp Quốc",
    "em": "🇫🇷",
    "lesson": 1,
    "ex_zh": "我是法国人。",
    "ex_py": "Wǒ shì Fǎguó rén.",
    "ex_vn": "Tôi là người Pháp.",
    "exList": [
      {
        "zh": "我是法国人。",
        "py": "Wǒ shì Fǎguó rén.",
        "vn": "Tôi là người Pháp."
      }
    ],
    "hanzi": [
      {
        "c": "法",
        "p": "fǎ",
        "type": "左右结构 · Trái-phải",
        "st": 8,
        "ord": "氵(thuỷ) trái → 去(khứ) phải",
        "rad": "氵 (thuỷ – nước)",
        "mean": "pháp luật, phương pháp; (phiên âm \"Pháp\" trong 法国)",
        "tip": "氵(nước) + 去(rời đi, trôi đi) → nước luôn CHẢY theo một quy luật nhất định, không đổi hướng tuỳ tiện, tượng trưng cho PHÁP LUẬT, QUY TẮC.",
        "cf": "去 (qù – \"đi\", thiếu bộ 氵 bên trái)",
        "w": "法国 / 法语 / 想办法"
      },
      {
        "c": "国",
        "p": "guó",
        "type": "全包围结构 · Bao vây toàn phần",
        "st": 8,
        "ord": "囗(vi) bao ngoài → 玉(ngọc, biến thể) bên trong",
        "rad": "囗 (vi – vây quanh, bao bọc)",
        "mean": "nước, quốc gia",
        "tip": "囗(đường biên giới bao quanh) + 玉(ngọc quý) → một vùng đất có ĐƯỜNG BIÊN bao bọc lấy báu vật (ngọc) bên trong, tượng trưng cho một QUỐC GIA.",
        "cf": "固 (gù – \"vững chắc\", cũng có 囗 bao ngoài nhưng bên trong là 古\")",
        "w": "中国 / 法国 / 泰国"
      }
    ],
    "colloFull": [
      {
        "zh": "法国人",
        "py": "Fǎguó rén",
        "vn": "người Pháp"
      },
      {
        "zh": "法国老师",
        "py": "Fǎguó lǎoshī",
        "vn": "giáo viên người Pháp"
      },
      {
        "zh": "法国学生",
        "py": "Fǎguó xuésheng",
        "vn": "học sinh người Pháp"
      }
    ],
    "patterns": [
      {
        "s": "法国 + người",
        "m": "Ghép thẳng phía trước danh từ chỉ người"
      },
      {
        "s": "法 + 国",
        "m": "Phiên âm từ chữ đầu của \"France\""
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Bạn gái tôi là học sinh người Pháp.",
        "answer": "我女朋友是法国学生。",
        "answerPy": "Wǒ nǚpéngyou shì Fǎguó xuésheng.",
        "note": "法国学生 — học sinh người Pháp.",
        "pair": "是……"
      },
      {
        "promptLang": "vi",
        "prompt": "Thầy Vương không phải người Pháp.",
        "answer": "王老师不是法国人。",
        "answerPy": "Wáng lǎoshī bú shì Fǎguó rén.",
        "note": "Phủ định của 是 luôn là 不是.",
        "pair": "不是……"
      }
    ]
  },
  {
    "n": 21,
    "zh": "中文",
    "py": "Zhōngwén",
    "pos": "Danh từ riêng",
    "vn": "tiếng Trung Quốc",
    "hv": "Trung Văn",
    "em": "🈶",
    "lesson": 1,
    "ex_zh": "我的中文老师也是中国人。",
    "ex_py": "Wǒ de Zhōngwén lǎoshī yě shì Zhōngguó rén.",
    "ex_vn": "Giáo viên tiếng Trung của tôi cũng là người Trung Quốc.",
    "exList": [
      {
        "zh": "我的中文老师也是中国人。",
        "py": "Wǒ de Zhōngwén lǎoshī yě shì Zhōngguó rén.",
        "vn": "Giáo viên tiếng Trung của tôi cũng là người Trung Quốc."
      }
    ],
    "hanzi": [
      {
        "c": "中",
        "p": "zhōng",
        "type": "独体字 · Chữ đơn",
        "st": 4,
        "ord": "口(hình chữ nhật) → 丨(cổn, nét sổ xuyên giữa)",
        "rad": "丨 (cổn – nét sổ thẳng)",
        "mean": "giữa, trung tâm, trong",
        "tip": "Một nét sổ THẲNG xuyên qua chính giữa hình chữ nhật (口) như mũi tên cắm đúng TÂM bia → biểu thị vị trí Ở GIỮA, TRUNG TÂM.",
        "cf": "由 (yóu – \"từ, bởi\", nét sổ không xuyên hẳn lên trên như 中\")",
        "w": "中国 / 中文 / 中间"
      },
      {
        "c": "文",
        "p": "wén",
        "type": "独体字 · Chữ đơn",
        "st": 4,
        "ord": "点(chấm) → 横(ngang) → 撇(phẩy) → 捺(mác)",
        "rad": "文 (văn – tự thành bộ, nghĩa: chữ viết, văn chương)",
        "mean": "văn tự, chữ viết, ngôn ngữ",
        "tip": "Chữ tượng hình cổ mô phỏng hoạ tiết đan xen trên thân người/đồ vật thời xưa → dần mang nghĩa CHỮ VIẾT, VĂN CHƯƠNG.",
        "cf": "父 (fù – \"cha\", hai nét đầu là hai phẩy chéo thay vì chấm + ngang)",
        "w": "中文 / 文化 / 文字"
      }
    ],
    "colloFull": [
      {
        "zh": "中文名字",
        "py": "Zhōngwén míngzi",
        "vn": "tên tiếng Trung"
      },
      {
        "zh": "中文老师",
        "py": "Zhōngwén lǎoshī",
        "vn": "giáo viên tiếng Trung"
      },
      {
        "zh": "中文的名字",
        "py": "Zhōngwén de míngzi",
        "vn": "cái tên tiếng Trung"
      }
    ],
    "patterns": [
      {
        "s": "中文 + danh từ",
        "m": "Ghép thẳng: 中文名字 · 中文老师"
      },
      {
        "s": "中 + 文",
        "m": "Chữ nghĩa (文) của Trung Quốc (中)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tên tiếng Trung của tôi là Vương Phương.",
        "answer": "我的中文名字叫王方。",
        "answerPy": "Wǒ de Zhōngwén míngzi jiào Wáng Fāng.",
        "note": "中文名字 — tên tiếng Trung.",
        "pair": "……的……"
      },
      {
        "promptLang": "vi",
        "prompt": "Giáo viên tiếng Trung của bạn là ai?",
        "answer": "你的中文老师是谁？",
        "answerPy": "Nǐ de Zhōngwén lǎoshī shì shéi?",
        "note": "中文老师 ghép thẳng phía trước.",
        "pair": "……是谁？"
      }
    ]
  },
  {
    "n": 22,
    "zh": "泰国",
    "py": "Tàiguó",
    "pos": "Danh từ riêng",
    "vn": "Thái Lan",
    "hv": "Thái Quốc",
    "em": "🇹🇭",
    "lesson": 2,
    "ex_zh": "她也是泰国人。",
    "ex_py": "Tā yě shì Tàiguó rén.",
    "ex_vn": "Cô ấy cũng là người Thái Lan.",
    "exList": [
      {
        "zh": "她也是泰国人。",
        "py": "Tā yě shì Tàiguó rén.",
        "vn": "Cô ấy cũng là người Thái Lan."
      }
    ],
    "hanzi": [
      {
        "c": "泰",
        "p": "tài",
        "type": "上下结构 · Trên-dưới",
        "st": 9,
        "ord": "𡗗(nhiều người, biến thể) trên → 水(thuỷ) dưới",
        "rad": "水 (thuỷ – nước)",
        "mean": "yên ổn, to lớn; (phiên âm \"Thái\" trong 泰国)",
        "tip": "Phần trên tượng trưng nhiều NGƯỜI cùng hợp sức, phần dưới là 水(nước) → nhiều người chung tay khơi thông dòng NƯỚC lớn mà vẫn giữ được YÊN ỔN, THÁI BÌNH (dùng phiên âm tên nước Thái Lan).",
        "cf": "秦 (qín – \"nhà Tần\", hình gần giống phần trên nhưng bên dưới là 禾\")",
        "w": "泰国 / 泰山"
      },
      {
        "c": "国",
        "p": "guó",
        "type": "全包围结构 · Bao vây toàn phần",
        "st": 8,
        "ord": "囗(vi) bao ngoài → 玉(ngọc, biến thể) bên trong",
        "rad": "囗 (vi – vây quanh, bao bọc)",
        "mean": "nước, quốc gia",
        "tip": "囗(đường biên giới bao quanh) + 玉(ngọc quý) → một vùng đất có ĐƯỜNG BIÊN bao bọc lấy báu vật (ngọc) bên trong, tượng trưng cho một QUỐC GIA.",
        "cf": "固 (gù – \"vững chắc\", cũng có 囗 bao ngoài nhưng bên trong là 古\")",
        "w": "中国 / 法国 / 泰国"
      }
    ],
    "colloFull": [
      {
        "zh": "泰国人",
        "py": "Tàiguó rén",
        "vn": "người Thái Lan"
      },
      {
        "zh": "泰国老师",
        "py": "Tàiguó lǎoshī",
        "vn": "giáo viên người Thái"
      },
      {
        "zh": "泰国学生",
        "py": "Tàiguó xuésheng",
        "vn": "học sinh người Thái"
      }
    ],
    "patterns": [
      {
        "s": "泰国 + người",
        "m": "Ghép thẳng phía trước danh từ chỉ người"
      },
      {
        "s": "中国 · 法国 · 泰国 — cùng một cách ghép với 国"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Chị tôi là người Thái Lan.",
        "answer": "我姐姐是泰国人。",
        "answerPy": "Wǒ jiějie shì Tàiguó rén.",
        "note": "泰国人 — người Thái Lan.",
        "pair": "是……"
      },
      {
        "promptLang": "vi",
        "prompt": "Bạn ấy có phải học sinh người Thái không?",
        "answer": "她是泰国学生吗？",
        "answerPy": "Tā shì Tàiguó xuésheng ma?",
        "note": "中国 · 法国 · 泰国 — cùng một cách ghép.",
        "pair": "……吗？"
      }
    ]
  }
];

// ══════════════════════════════════════════
// LUYỆN TẬP SÁCH BÀI TẬP (New HSK Course 1 Workbook, Bài 3: Ngữ âm)
// ══════════════════════════════════════════
var wbData = {
  sections: [
    {
      title: 'Ngữ âm',
      audio: '/audio/hsk1v3-bai-3/wb-yuyin.mp3',
      blocks: [
        { type: 'table', caption: 'Thanh mẫu (声母)',
          rows: [
            ['zh', 'ch', 'sh', 'r'],
            ['z', 'c', 's', '']
          ],
          note: 'Nghe và đọc theo thanh mẫu, sau đó đọc to.' },
        { type: 'table', caption: 'Vận mẫu (韵母)',
          rows: [
            ['a', 'e', 'i [ɿ/ʅ]', 'u'],
            ['ai', 'ao', 'ou', ''],
            ['an', 'en', '', ''],
            ['ang', 'eng', 'ong', ''],
            ['ua', 'uo', 'uai', 'uei (ui)'],
            ['uan', 'uen (un)', '', ''],
            ['uang', 'ueng', '', '']
          ],
          note: 'Nghe và đọc theo vận mẫu, sau đó đọc to. "i [ɿ/ʅ]" là cách đọc riêng của "i" khi đứng sau zh/ch/sh/r và z/c/s.' },
        { type: 'table', caption: 'Luyện đọc âm tiết zh, sh, ch, z (4 thanh điệu)',
          headers: ['1', '2', '3', '4'],
          rows: [
            ['zhā', 'zhá', 'zhǎ', 'zhà'],
            ['shē', 'shé', 'shě', 'shè'],
            ['chuāng', 'chuáng', 'chuǎng', 'chuàng'],
            ['zuō', 'zuó', 'zuǒ', 'zuò']
          ] },
        { type: 'photos', items: [
          {img:'/images/hsk1v3-bai-3-wb/ren.jpg', py:'rén', hz:'人'},
          {img:'/images/hsk1v3-bai-3-wb/zuo.jpg', py:'zuò', hz:'坐'},
          {img:'/images/hsk1v3-bai-3-wb/cai.jpg', py:'cài', hz:'菜'},
          {img:'/images/hsk1v3-bai-3-wb/shu.jpg', py:'shū', hz:'书'},
          {img:'/images/hsk1v3-bai-3-wb/shouji.jpg', py:'shǒujī', hz:'手机'},
          {img:'/images/hsk1v3-bai-3-wb/yisheng.jpg', py:'yīshēng', hz:'医生'},
          {img:'/images/hsk1v3-bai-3-wb/zhuozi.jpg', py:'zhuōzi', hz:'桌子'},
          {img:'/images/hsk1v3-bai-3-wb/chuzuche.jpg', py:'chūzūchē', hz:'出租车'}
        ] },
        { type: 'table', caption: 'Quy tắc chính tả — vận mẫu bắt đầu bằng "u" đứng một mình',
          headers: ['1', '2', '3', '4'],
          rows: [
            ['wā', 'wá', 'wǎ', 'wà'],
            ['wēi', 'wéi', 'wěi', 'wèi']
          ],
          note: 'Các vận mẫu "ua, uo, uai, uei, uan, uen, uang, ueng" khi đứng một mình (không có thanh mẫu phía trước) thì "u" được viết thành "w": ua→wa, uo→wo, uai→wai, uei→wei, uan→wan, uen→wen, uang→wang, ueng→weng.' },
        { type: 'table', caption: 'Quy tắc chính tả — vận mẫu "uei, uen" khi ghép với thanh mẫu',
          rows: [
            ['shuí', 'chǔn', 'suì', 'cūn']
          ],
          note: 'Khi vận mẫu "uei, uen" ghép với thanh mẫu thì viết thành "ui, un". Ví dụ: shuí, chǔn, suì, cūn.' },
        { type: 'photos', items: [
          {img:'/images/hsk1v3-bai-3-wb/chun.jpg', py:'chūn', hz:'春'},
          {img:'/images/hsk1v3-bai-3-wb/cun.jpg', py:'cūn', hz:'村'},
          {img:'/images/hsk1v3-bai-3-wb/shui.jpg', py:'shuì', hz:'睡'},
          {img:'/images/hsk1v3-bai-3-wb/zui.jpg', py:'zuǐ', hz:'嘴'}
        ] }
      ]
    },
    {
      title: 'Nghe và đọc luyện tập',
      audio: '/audio/hsk1v3-bai-3/wb-tingdu.mp3',
      blocks: [
        { type: 'blankdrill', caption: 'Nghe và điền thanh mẫu còn thiếu',
          items: [
            {before:'', after:' + ān', answer:'s'}, {before:'', after:' + ī', answer:'ch'}, {before:'', after:' + ǒu', answer:'z'}, {before:'', after:' + èng', answer:'zh'},
            {before:'', after:' + ì', answer:'z'}, {before:'', after:' + àng', answer:'ch'}, {before:'', after:' + én', answer:'r'}, {before:'', after:' + uì', answer:'s'},
            {before:'', after:' + ài', answer:'c'}, {before:'', after:' + uǐ', answer:'sh'}, {before:'', after:' + ì', answer:'r'}, {before:'', after:' + ōng', answer:'zh'}
          ] },
        { type: 'tonemc', caption: 'Nghe và chọn vận mẫu đúng',
          items: [
            {before:'z + ', after:'', answer:'ū', options:['ū','ú','ǔ','ù']}, {before:'zh + ', after:'', answer:'ī', options:['ī','í','ǐ','ì']},
            {before:'c + ', after:'', answer:'ài', options:['āi','ái','ǎi','ài']}, {before:'z + ', after:'', answer:'ì', options:['ī','í','ǐ','ì']},
            {before:'ch + ', after:'', answer:'āo', options:['āo','áo','ǎo','ào']}, {before:'r + ', after:'', answer:'èn', options:['ēn','én','ěn','èn']},
            {before:'sh + ', after:'', answer:'àng', options:['āng','áng','ǎng','àng']}, {before:'z + ', after:'', answer:'ěn', options:['ēn','én','ěn','èn']},
            {before:'r + ', after:'', answer:'ì', options:['ī','í','ǐ','ì']}, {before:'s + ', after:'', answer:'ān', options:['ān','án','ǎn','àn']},
            {before:'ch + ', after:'', answer:'uān', options:['uān','uán','uǎn','uàn']}, {before:'r + ', after:'', answer:'è', options:['ē','é','ě','è']},
            {before:'zh + ', after:'', answer:'uō', options:['uō','uó','uǒ','uò']}, {before:'c + ', after:'', answer:'óng', options:['ōng','óng','ǒng','òng']},
            {before:'sh + ', after:'', answer:'éi', options:['ēi','éi','ěi','èi']}
          ] },
        { type: 'tonemc', caption: 'Nghe và chọn thanh điệu đúng',
          items: [
            {before:'che → ', after:'', answer:'chē', options:['chē','ché','chě','chè']}, {before:'ren → ', after:'', answer:'rén', options:['rēn','rén','rěn','rèn']},
            {before:'chang → ', after:'', answer:'chàng', options:['chāng','cháng','chǎng','chàng']}, {before:'zao → ', after:'', answer:'zǎo', options:['zāo','záo','zǎo','zào']},
            {before:'shou → ', after:'', answer:'shǒu', options:['shōu','shóu','shǒu','shòu']}, {before:'zhen → ', after:'', answer:'zhēn', options:['zhēn','zhén','zhěn','zhèn']},
            {before:'sui → ', after:'', answer:'suì', options:['suī','suí','suǐ','suì']}, {before:'sheng → ', after:'', answer:'shēng', options:['shēng','shéng','shěng','shèng']},
            {before:'ri → ', after:'', answer:'rì', options:['rī','rí','rǐ','rì']}, {before:'zhong → ', after:'', answer:'zhōng', options:['zhōng','zhóng','zhǒng','zhòng']},
            {before:'shui → ', after:'', answer:'shuǐ', options:['shuī','shuí','shuǐ','shuì']}, {before:'zuo → ', after:'', answer:'zuò', options:['zuō','zuó','zuǒ','zuò']},
            {before:'chuang → ', after:'', answer:'chuáng', options:['chuāng','chuáng','chuǎng','chuàng']}, {before:'shu → ', after:'', answer:'shū', options:['shū','shú','shǔ','shù']},
            {before:'si → ', after:'', answer:'sì', options:['sī','sí','sǐ','sì']}
          ] },
        { type: 'dialoguepics', caption: 'Xem hình, chọn đúng lời hội thoại',
          items: [
            {img:'/images/hsk1v3-bai-3-wb/dlg1_teacher.jpg', lines:['A: 王老师是你的中文老师吗？', 'B: 是的。']},
            {img:'/images/hsk1v3-bai-3-wb/dlg2_phone.jpg', lines:['A: 喂，你工作忙吗？', 'B: 我工作不忙。']},
            {img:'/images/hsk1v3-bai-3-wb/dlg3_airplane.jpg', lines:['A: 我是法国人。', 'B: 我也是法国人。']},
            {img:'/images/hsk1v3-bai-3-wb/dlg4_handshake.jpg', lines:['A: 这是我女朋友。', 'B: 你好，很高兴认识你。']}
          ] }
      ]
    }
  ]
};

var dialogData = [
  {scene:'李文和白家月聊国籍 · Nói về quốc tịch',
   preQuiz:[
     {q:'李文是哪国人？',opts:['中国人','法国人','泰国人'],ans:0},
     {q:'白家月的中文老师是哪国人？',opts:['中国人','法国人','泰国人'],ans:0},
   ],
   lines:[
     {sp:0,zh:'我是中国人。',py:'Wǒ shì Zhōngguó rén.',vn:'Mình là người Trung Quốc.'},
     {sp:1,zh:'我是法国人。我的中文老师也是中国人。',py:'Wǒ shì Fǎguó rén. Wǒ de Zhōngwén lǎoshī yě shì Zhōngguó rén.',vn:'Mình là người Pháp. Giáo viên tiếng Trung của mình cũng là người Trung Quốc.'},
   ]},
  {scene:'安妮看陈天中的照片 · Xem ảnh trong điện thoại',
   preQuiz:[
     {q:'陈天中手机里照片中的人是谁？',opts:['他女朋友','他姐姐','他同学'],ans:0},
     {q:'陈天中的女朋友是哪国人？',opts:['中国人','法国人','泰国人'],ans:2},
   ],
   lines:[
     {sp:0,zh:'这是谁？',py:'Zhè shì shéi?',vn:'Đây là ai vậy?'},
     {sp:1,zh:'这是我女朋友。',py:'Zhè shì wǒ nǚpéngyou.',vn:'Đây là bạn gái mình.'},
     {sp:0,zh:'你女朋友是哪国人？',py:'Nǐ nǚpéngyou shì nǎ guó rén?',vn:'Bạn gái của bạn là người nước nào?'},
     {sp:1,zh:'她也是泰国人。',py:'Tā yě shì Tàiguó rén.',vn:'Cô ấy cũng là người Thái Lan.'},
   ]},
  {scene:'王一雪打视频电话给王一飞 · Gọi video cho em trai',
   preQuiz:[
     {q:'王一飞工作还忙吗？',opts:['很忙','不忙','不知道'],ans:0},
     {q:'王一雪工作忙吗？',opts:['不太忙','很忙','不知道'],ans:0},
     {q:'王一雪打电话最后对王一飞说了什么？',opts:['我们很想你','你好','再见'],ans:0},
   ],
   lines:[
     {sp:0,zh:'喂，一飞！',py:'Wèi, Yīfēi!',vn:'A lô, Nhất Phi à!'},
     {sp:1,zh:'姐姐！',py:'Jiějie!',vn:'Chị ơi!'},
     {sp:0,zh:'你工作还忙吗？',py:'Nǐ gōngzuò hái máng ma?',vn:'Công việc của em vẫn bận chứ?'},
     {sp:1,zh:'对，还很忙。你也很忙吗？',py:'Duì, hái hěn máng. Nǐ yě hěn máng ma?',vn:'Vâng, vẫn rất bận. Chị cũng bận lắm phải không?'},
     {sp:0,zh:'我不太忙。我们很想你。',py:'Wǒ bú tài máng. Wǒmen hěn xiǎng nǐ.',vn:'Chị không bận lắm. Mọi người đều rất nhớ em.'},
     {sp:1,zh:'我也想你们。',py:'Wǒ yě xiǎng nǐmen.',vn:'Em cũng nhớ mọi người.'},
   ]},
];

// ══════════════════════════════════════════
// PHẦN 1 · GHÉP TỪ (Collocation)
// ══════════════════════════════════════════
var matchData = [
  {left:'女朋', right:'友'},
  {left:'工', right:'作'},
  {left:'中', right:'国'},
  {left:'法', right:'国'},
  {left:'泰', right:'国'},
  {left:'我', right:'们'},
];

// ══════════════════════════════════════════
// PHẦN 2 · NGHE — để trống, chờ audio + tài liệu gốc giáo trình HSK1 3.0
// ══════════════════════════════════════════
var listenData = [];

// ══════════════════════════════════════════
// PHẦN 3a · ĐIỀN TỪ
// ══════════════════════════════════════════
var fillData = [
  {pre:'我是', blank:'中国', post:'人。', hint:'(Trung Quốc)', ans:'中国'},
  {pre:'这是我', blank:'女朋友', post:'。', hint:'(bạn gái)', ans:'女朋友'},
  {pre:'你女朋友是哪', blank:'国', post:'人？', hint:'(quốc gia — nước nào)', ans:'国'},
  {pre:'她也是', blank:'泰国', post:'人。', hint:'(Thái Lan)', ans:'泰国'},
  {pre:'你工作还忙', blank:'吗', post:'？', hint:'(trợ từ nghi vấn cuối câu)', ans:'吗'},
  {pre:'我不', blank:'太', post:'忙。', hint:'(quá, lắm)', ans:'太'},
  {pre:'我们很', blank:'想', post:'你。', hint:'(nhớ)', ans:'想'},
  {pre:'你', blank:'也', post:'很忙吗？', hint:'(cũng)', ans:'也'},
];

// ══════════════════════════════════════════
// PHẦN 3b · SẮP XẾP
// ══════════════════════════════════════════
var sortData = [
  {words:['我','是','中国','人','。'], ans:'我是中国人。', audio:'我是中国人。'},
  {words:['这','是','我','女朋友','。'], ans:'这是我女朋友。', audio:'这是我女朋友。'},
  {words:['你','女朋友','是','哪','国','人','？'], ans:'你女朋友是哪国人？', audio:'你女朋友是哪国人？'},
  {words:['你','工作','还','忙','吗','？'], ans:'你工作还忙吗？', audio:'你工作还忙吗？'},
  {words:['我','不','太','忙','。'], ans:'我不太忙。', audio:'我不太忙。'},
  {words:['我们','很','想','你','。'], ans:'我们很想你。', audio:'我们很想你。'},
];

// ══════════════════════════════════════════
// PHẦN 3c · TRẮC NGHIỆM
// ══════════════════════════════════════════
var mcData = [
  {q:'"我是中国人" nghĩa là gì?', opts:['Tôi là người Trung Quốc', 'Tôi là người Pháp', 'Tôi là người Thái Lan', 'Tôi là giáo viên'], ans:0},
  {q:'Muốn hỏi "đây là ai", bạn nói?', opts:['这是谁？', '你好吗？', '你叫什么名字？', '再见！'], ans:0},
  {q:'"女朋友" nghĩa là gì?', opts:['bạn gái', 'bạn trai', 'bạn học', 'giáo viên'], ans:0},
  {q:'Muốn hỏi quốc tịch, dùng cấu trúc nào?', opts:['哪国人', '什么名字', '怎么样', '多大'], ans:0},
  {q:'Trợ từ "吗" dùng để làm gì?', opts:['tạo câu hỏi có/không ở cuối câu', 'phủ định', 'chỉ số nhiều', 'chỉ sở hữu'], ans:0},
  {q:'"还很忙" nghĩa là gì?', opts:['vẫn còn rất bận', 'không bận nữa', 'rất rảnh', 'đã xong việc'], ans:0},
  {q:'"我们很想你" nghĩa là gì?', opts:['Chúng tôi rất nhớ bạn', 'Chúng tôi không thích bạn', 'Bạn rất bận', 'Bạn phải làm việc'], ans:0},
  {q:'Trợ từ "的" dùng để làm gì?', opts:['nối định ngữ với danh từ trung tâm, biểu thị sở hữu', 'tạo câu hỏi', 'phủ định', 'chỉ số nhiều'], ans:0},
];

// ══════════════════════════════════════════
// PHẦN 4 · LUYỆN NÓI
// ══════════════════════════════════════════
var speakingData = {
  intro: 'Nhấn 🔊 nghe câu hỏi/tình huống, rồi tự ghi âm câu trả lời của bạn dựa theo nội dung 3 bài khoá.',
  questions: [
    {q_zh: '有人问你："你是哪国人？" 你怎么回答？', q_vn: 'Có người hỏi bạn: "Bạn là người nước nào?" Bạn trả lời thế nào?',
     hint: '我是……人。', sample: '我是越南人。', sample_vn: 'Tôi là người Việt Nam.',
     note: 'Cấu trúc "我是 + tên nước + 人" dùng để nói quốc tịch của mình.'},
    {q_zh: '朋友问你："你工作忙吗？" 你怎么回答？', q_vn: 'Bạn của bạn hỏi: "Công việc của bạn có bận không?" Bạn trả lời thế nào?',
     hint: '我（不）太忙。', sample: '我不太忙。', sample_vn: 'Tôi không bận lắm.',
     note: '"太 + tính từ" thường đi kèm "不" để nói mức độ không quá cao: 不太忙 = không bận lắm.'},
    {q_zh: '你很久没见家人了，见面的时候你想说什么？', q_vn: 'Bạn đã lâu không gặp gia đình, khi gặp mặt bạn muốn nói gì?',
     hint: '我很想你/你们。', sample: '我很想你们。', sample_vn: 'Con rất nhớ mọi người.',
     note: '想 + người ở đây có nghĩa là "nhớ" (nhớ ai đó), khác với 想 mang nghĩa "muốn" khi đi với động từ.'},
  ],
};

// ══════════════════════════════════════════
// LUYỆN DỊCH (Việt → Trung)
// ══════════════════════════════════════════
var translateData = [
  {vi:'Tôi là người Trung Quốc, cô ấy là người Pháp.', zh:'我是中国人，她是法国人。', py:'Wǒ shì Zhōngguó rén, tā shì Fǎguó rén.'},
  {vi:'Đây là bạn gái tôi, cô ấy là người Thái Lan.', zh:'这是我女朋友，她是泰国人。', py:'Zhè shì wǒ nǚpéngyou, tā shì Tàiguó rén.'},
  {vi:'Công việc của bạn vẫn bận chứ? — Đúng vậy, vẫn rất bận.', zh:'你工作还忙吗？——对，还很忙。', py:'Nǐ gōngzuò hái máng ma? — Duì, hái hěn máng.'},
  {vi:'Chúng tôi rất nhớ bạn.', zh:'我们很想你。', py:'Wǒmen hěn xiǎng nǐ.'},
];

// ══════════════════════════════════════════
// LUYỆN DỊCH (Trung → Việt) — nội dung KHÁC với chiều Việt→Trung ở trên
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:'Cô ấy không phải người Pháp, cô ấy là người Trung Quốc.', zh:'她不是法国人，她是中国人。', py:'Tā bú shì Fǎguó rén, tā shì Zhōngguó rén.'},
  {vi:'Đây là ai? — Đây là chị gái tôi.', zh:'这是谁？——这是我姐姐。', py:'Zhè shì shéi? — Zhè shì wǒ jiějie.'},
  {vi:'Bạn cũng bận à? — Tôi không bận lắm.', zh:'你也很忙吗？——我不太忙。', py:'Nǐ yě hěn máng ma? — Wǒ bú tài máng.'},
  {vi:'Tôi cũng rất nhớ các bạn.', zh:'我也很想你们。', py:'Wǒ yě hěn xiǎng nǐmen.'},
];
