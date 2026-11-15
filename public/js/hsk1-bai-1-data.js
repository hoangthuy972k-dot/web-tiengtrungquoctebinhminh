// ══════════════════════════════════════════
// DATA — HSK1 Bài 1: 你好!
// ══════════════════════════════════════════
var vocabData = [
  {
    "n": 1,
    "zh": "你",
    "py": "nǐ",
    "pos": "Đại từ",
    "vn": "anh, chị, bạn (ngôi thứ hai số ít)",
    "hv": "nhĩ",
    "em": "👉",
    "lesson": 1,
    "ex_zh": "你好！",
    "ex_py": "Nǐ hǎo!",
    "ex_vn": "Chào bạn!",
    "exList": [
      {
        "zh": "你好！",
        "py": "Nǐ hǎo!",
        "vn": "Chào bạn!"
      },
      {
        "zh": "你们好！",
        "py": "Nǐmen hǎo!",
        "vn": "Chào các bạn!"
      }
    ],
    "hanzi": [
      {
        "c": "你",
        "p": "nǐ",
        "type": "左右结构 · Trái-phải",
        "st": 7,
        "ord": "亻(nhân) trái → 尔(biến thể) phải",
        "rad": "亻(nhân – người)",
        "mean": "anh, chị, bạn (ngôi thứ 2)",
        "tip": "亻(người) đứng cạnh 尔(âm cổ chỉ \"ngươi\") → dùng để gọi NGƯỜI ĐANG NÓI CHUYỆN với mình.",
        "cf": "休 (xiū – \"nghỉ ngơi\", cũng có bộ 亻)",
        "w": "你好 / 你们 / 你是"
      }
    ],
    "colloFull": [
      {
        "zh": "你好",
        "py": "nǐ hǎo",
        "vn": "chào bạn"
      }
    ],
    "patterns": [
      {
        "s": "你 + 好",
        "m": "Lời chào cơ bản nhất: 你好！"
      },
      {
        "s": "你 (bạn, ngang hàng) ≠ 您 (ngài, kính trọng)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Chào bạn!",
        "answer": "你好！",
        "answerPy": "Nǐ hǎo!",
        "note": "你好 là lời chào dùng được với hầu hết mọi người.",
        "pair": "……好！"
      }
    ]
  },
  {
    "n": 2,
    "zh": "好",
    "py": "hǎo",
    "pos": "Tính từ",
    "vn": "khỏe, tốt",
    "hv": "hảo",
    "em": "👍",
    "lesson": 1,
    "ex_zh": "你好！",
    "ex_py": "Nǐ hǎo!",
    "ex_vn": "Chào bạn! (bạn khỏe không / chào)",
    "exList": [
      {
        "zh": "你好！",
        "py": "Nǐ hǎo!",
        "vn": "Chào bạn!"
      },
      {
        "zh": "您好！",
        "py": "Nín hǎo!",
        "vn": "Chào ngài!"
      },
      {
        "zh": "你们好！",
        "py": "Nǐmen hǎo!",
        "vn": "Chào các bạn!"
      }
    ],
    "hanzi": [
      {
        "c": "好",
        "p": "hǎo",
        "type": "左右结构 · Trái-phải",
        "st": 6,
        "ord": "女(nữ) trái → 子(tử) phải",
        "rad": "女 (nữ – con gái)",
        "mean": "tốt, khỏe",
        "tip": "女(mẹ) đứng cạnh 子(con) → hình ảnh MẸ CON sum vầy = TỐT ĐẸP.",
        "cf": "如 (rú – \"như\", cũng có bộ 女\")",
        "w": "你好 / 您好 / 你们好"
      }
    ],
    "colloFull": [
      {
        "zh": "你好",
        "py": "nǐ hǎo",
        "vn": "chào bạn"
      },
      {
        "zh": "您好",
        "py": "nín hǎo",
        "vn": "chào ngài"
      },
      {
        "zh": "你们好",
        "py": "nǐmen hǎo",
        "vn": "chào các bạn"
      }
    ],
    "patterns": [
      {
        "s": "đại từ + 好",
        "m": "你好 · 您好 · 你们好 — đổi đại từ là đổi người được chào"
      },
      {
        "s": "好 nghĩa gốc là \"tốt, khoẻ\"; 你好 nghĩa đen là \"bạn khoẻ chứ\""
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Chào ngài!",
        "answer": "您好！",
        "answerPy": "Nín hǎo!",
        "note": "Gặp người lớn tuổi hoặc khách thì dùng 您 thay cho 你.",
        "pair": "……好！"
      },
      {
        "promptLang": "vi",
        "prompt": "Chào các bạn!",
        "answer": "你们好！",
        "answerPy": "Nǐmen hǎo!",
        "note": "Chào nhiều người thì dùng 你们.",
        "pair": "……好！"
      }
    ]
  },
  {
    "n": 3,
    "zh": "您",
    "py": "nín",
    "pos": "Đại từ",
    "vn": "ông, bà, ngài (kính trọng)",
    "hv": "nâm",
    "em": "🙇",
    "lesson": 1,
    "ex_zh": "您好！",
    "ex_py": "Nín hǎo!",
    "ex_vn": "Chào ngài!",
    "exList": [
      {
        "zh": "您好！",
        "py": "Nín hǎo!",
        "vn": "Chào ngài!"
      },
      {
        "zh": "您好，您好！",
        "py": "Nín hǎo, nín hǎo!",
        "vn": "Cháu chào bác ạ, chào bác ạ!"
      }
    ],
    "hanzi": [
      {
        "c": "您",
        "p": "nín",
        "type": "上下结构 · Trên-dưới",
        "st": 11,
        "ord": "你(biến thể) trên → 心(tâm) dưới",
        "rad": "心 (tâm – trái tim)",
        "mean": "ngài, ông/bà (kính trọng)",
        "tip": "Thêm bộ 心(trái tim) xuống dưới chữ 你 → dùng CẢ TẤM LÒNG để bày tỏ sự TÔN KÍNH khi xưng hô.",
        "cf": "念 (niàn – \"tưởng nhớ\", cũng có bộ 心\")",
        "w": "您好 / 谢谢您"
      }
    ],
    "colloFull": [
      {
        "zh": "您好",
        "py": "nín hǎo",
        "vn": "chào ngài"
      }
    ],
    "patterns": [
      {
        "s": "您 + 好",
        "m": "Chào người lớn tuổi, thầy cô, khách"
      },
      {
        "s": "您 = 你 + 心 — thêm bộ Tâm (心) ở dưới cho lễ phép"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Chào bác ạ!",
        "answer": "您好！",
        "answerPy": "Nín hǎo!",
        "note": "您 mang sắc thái kính trọng — chữ 心 (tâm) nằm dưới chữ 你.",
        "pair": "……好！"
      }
    ]
  },
  {
    "n": 4,
    "zh": "你们",
    "py": "nǐmen",
    "pos": "Đại từ",
    "vn": "các anh, các chị, các bạn (số nhiều)",
    "hv": "nhĩ môn",
    "em": "👥",
    "lesson": 1,
    "ex_zh": "你们好！",
    "ex_py": "Nǐmen hǎo!",
    "ex_vn": "Chào các anh/chị!",
    "exList": [
      {
        "zh": "你们好！",
        "py": "Nǐmen hǎo!",
        "vn": "Chào các anh/chị!"
      },
      {
        "zh": "你好！你们好！",
        "py": "Nǐ hǎo! Nǐmen hǎo!",
        "vn": "Chào bạn! Chào các bạn!"
      }
    ],
    "hanzi": [
      {
        "c": "们",
        "p": "men",
        "type": "左右结构 · Trái-phải",
        "st": 5,
        "ord": "亻(nhân) trái → 门(môn) phải",
        "rad": "亻 (nhân – người)",
        "mean": "hậu tố số nhiều (chỉ người)",
        "tip": "亻(người) đứng cạnh 门(cửa) → nhiều người cùng qua MỘT CÁNH CỬA = biểu thị SỐ NHIỀU.",
        "cf": "门 (mén – \"cửa\")",
        "w": "你们好"
      }
    ],
    "colloFull": [
      {
        "zh": "你们好",
        "py": "nǐmen hǎo",
        "vn": "chào các bạn"
      }
    ],
    "patterns": [
      {
        "s": "你 + 们",
        "m": "们 là đuôi chỉ số nhiều của người"
      },
      {
        "s": "你们 (nhiều người) ≠ 你 (một người)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Chào các anh chị!",
        "answer": "你们好！",
        "answerPy": "Nǐmen hǎo!",
        "note": "们 gắn sau đại từ chỉ người để thành số nhiều.",
        "pair": "……好！"
      }
    ]
  },
  {
    "n": 5,
    "zh": "对不起",
    "py": "duìbuqǐ",
    "pos": "Động từ",
    "vn": "xin lỗi",
    "hv": "đối bất khởi",
    "em": "🙏",
    "lesson": 2,
    "ex_zh": "对不起！",
    "ex_py": "Duìbuqǐ!",
    "ex_vn": "Xin lỗi!",
    "exList": [
      {
        "zh": "对不起！",
        "py": "Duìbuqǐ!",
        "vn": "Xin lỗi!"
      },
      {
        "zh": "对不起，对不起！",
        "py": "Duìbuqǐ, duìbuqǐ!",
        "vn": "Xin lỗi, xin lỗi!"
      }
    ],
    "hanzi": [
      {
        "c": "对",
        "p": "duì",
        "type": "左右结构 · Trái-phải",
        "st": 5,
        "ord": "又(biến thể) trái → 寸(thốn) phải",
        "rad": "寸 (thốn – gang tay, đo lường)",
        "mean": "đúng, đối diện",
        "tip": "寸(gang tay đo lường) bên phải → làm ĐÚNG theo phép tắc; khi làm sai thì phải nói 对不起.",
        "cf": "讨 (tǎo – \"đòi hỏi\")",
        "w": "对不起"
      },
      {
        "c": "不",
        "p": "bù",
        "type": "独体字 · Chữ đơn",
        "st": 4,
        "ord": "一(ngang) → 丨→ ㇒ → 丶",
        "rad": "一 (nhất)",
        "mean": "không, chẳng, đừng",
        "tip": "Nét ngang trên cùng như một bức tường CHẶN LẠI → mang nghĩa PHỦ ĐỊNH điều phía sau.",
        "cf": "布 (bù – \"vải\")",
        "w": "对不起"
      },
      {
        "c": "起",
        "p": "qǐ",
        "type": "半包围结构 · Bán bao vây",
        "st": 10,
        "ord": "走(tẩu, biến thể) bao ngoài → 己(kỷ) bên trong",
        "rad": "走 (tẩu – đi)",
        "mean": "dậy, nổi lên",
        "tip": "走(đi) + 己(bản thân) → tự mình đứng dậy; ở đây ghép với 对不 thành cụm từ cố định XIN LỖI.",
        "cf": "己 (jǐ – \"bản thân\")",
        "w": "对不起"
      }
    ],
    "colloFull": [],
    "patterns": [
      {
        "s": "对不起 —— 没关系",
        "m": "Xin lỗi — Không sao: một cặp đối đáp"
      },
      {
        "s": "对不起 luôn dùng nguyên cụm ba chữ, không tách ra"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Xin lỗi!",
        "answer": "对不起！",
        "answerPy": "Duìbuqǐ!",
        "note": "Ba chữ đi liền nhau, không tách rời.",
        "pair": "对不起！"
      },
      {
        "promptLang": "vi",
        "prompt": "— Xin lỗi! — Không sao đâu!",
        "answer": "对不起！——没关系！",
        "answerPy": "Duìbuqǐ! —— Méi guānxi!",
        "note": "Cặp đối đáp quen thuộc: một người xin lỗi, một người đáp lại.",
        "pair": "对不起 —— 没关系"
      }
    ]
  },
  {
    "n": 6,
    "zh": "没关系",
    "py": "méi guānxi",
    "pos": "Cụm từ",
    "vn": "không sao đâu, không có vấn đề gì",
    "hv": "một quan hệ",
    "em": "🤝",
    "lesson": 2,
    "ex_zh": "没关系！",
    "ex_py": "Méi guānxi!",
    "ex_vn": "Không sao đâu!",
    "exList": [
      {
        "zh": "没关系！",
        "py": "Méi guānxi!",
        "vn": "Không sao đâu!"
      },
      {
        "zh": "没关系，没关系！",
        "py": "Méi guānxi, méi guānxi!",
        "vn": "Không sao, không sao đâu!"
      }
    ],
    "hanzi": [
      {
        "c": "没",
        "p": "méi",
        "type": "左右结构 · Trái-phải",
        "st": 7,
        "ord": "氵(thuỷ) trái → 殳(biến thể) phải",
        "rad": "氵 (thuỷ – nước)",
        "mean": "không, không có",
        "tip": "氵(nước) dâng lên che lấp mọi thứ → mang nghĩa KHÔNG CÒN, KHÔNG CÓ.",
        "cf": "汉 (hàn – \"Hán\", cũng có bộ 氵\")",
        "w": "没关系"
      },
      {
        "c": "关",
        "p": "guān",
        "type": "上下结构 · Trên-dưới",
        "st": 6,
        "ord": "丷(bát, biến thể) trên → phần dưới",
        "rad": "丷 (bát – chia, biến thể)",
        "mean": "liên quan, đóng",
        "tip": "Hình ảnh cái CHỐT CỬA được cài lại → ĐÓNG, và RÀNG BUỘC liên quan với nhau.",
        "cf": "并 (bìng – \"cùng, và\")",
        "w": "没关系 / 关系"
      },
      {
        "c": "系",
        "p": "xì",
        "type": "上下结构 · Trên-dưới",
        "st": 7,
        "ord": "丿(phẩy) trên → phần dưới giống 糸",
        "rad": "糸 (mịch – tơ, sợi, phần dưới)",
        "mean": "liên hệ, hệ thống",
        "tip": "Như những SỢI TƠ (糸) đan xen nhau → biểu thị MỐI LIÊN HỆ, QUAN HỆ giữa các sự việc.",
        "cf": "紧 (jǐn – \"khẩn cấp\", cũng liên quan đến sợi dây\")",
        "w": "关系 / 没关系"
      }
    ],
    "colloFull": [],
    "patterns": [
      {
        "s": "—— 没关系",
        "m": "Câu đáp khi người khác nói 对不起"
      },
      {
        "s": "没关系 nghĩa đen: không (没) có liên quan (关系) gì"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Không sao đâu!",
        "answer": "没关系！",
        "answerPy": "Méi guānxi!",
        "note": "Câu đáp lịch sự khi người khác xin lỗi mình.",
        "pair": "没关系！"
      }
    ]
  }
];

const wuData = [
  {img:'👉',label:'你',py:'nǐ',letter:'A'},
  {img:'👍',label:'好',py:'hǎo',letter:'B'},
  {img:'🙇',label:'您',py:'nín',letter:'C'},
  {img:'👥',label:'你们',py:'nǐmen',letter:'D'},
  {img:'🙏',label:'对不起',py:'duìbuqǐ',letter:'E'},
  {img:'🤝',label:'没关系',py:'méi guānxi',letter:'F'},
];

var dialogData = [
  {scene:'Chào hỏi thông thường',
   lines:[
     {sp:0,zh:'你好！',py:'Nǐ hǎo!',vn:'Chào anh!'},
     {sp:1,zh:'你好！',py:'Nǐ hǎo!',vn:'Chào anh!'},
   ]},
  {scene:'Chào hỏi lịch sự',
   lines:[
     {sp:0,zh:'您好！',py:'Nín hǎo!',vn:'Chào ông!'},
     {sp:1,zh:'你们好！',py:'Nǐmen hǎo!',vn:'Chào các anh/chị!'},
   ]},
  {scene:'Xin lỗi & đáp lại',
   lines:[
     {sp:0,zh:'对不起！',py:'Duìbuqǐ!',vn:'Xin lỗi!'},
     {sp:1,zh:'没关系！',py:'Méi guānxi!',vn:'Không sao đâu!'},
   ]},
];

// Điền từ — mỗi câu một tình huống khác nhau, chọn đúng cách chào / xin lỗi
var fillData = [
  {pre:'Sáng đầu tiên đến lớp, bạn gặp cậu bạn ngồi cạnh: “',blank:'你好',post:'！”',hint:'(chào một bạn ngang hàng)',ans:'你好',exp:'Với bạn bè cùng tuổi chỉ cần chào 你好.'},
  {pre:'Bà cụ hàng xóm bảy mươi tuổi đi chợ về, bạn lễ phép chào bà: “',blank:'您好',post:'！”',hint:'(chào kính trọng)',ans:'您好',exp:'Với người lớn tuổi dùng 您 (kính trọng) thay cho 你.'},
  {pre:'Bạn bước vào phòng, ba người bạn đang ngồi đợi. Bạn chào một lần cho cả ba: “',blank:'你们',post:'好！”',hint:'(các bạn — từ hai người trở lên)',ans:'你们',exp:'Chào từ hai người trở lên dùng 你们好.'},
  {pre:'Một cậu bé chào ông: “您好！” Ông cụ cười, chào lại cậu bé: “你',blank:'好',post:'！”',hint:'(khỏe, tốt)',ans:'好',exp:'Người lớn chào lại trẻ em dùng 你好, không cần 您.'},
  {pre:'Bạn lỡ làm đổ nước lên sách của bạn cùng bàn, bạn vội nói: “',blank:'对不起',post:'！”',hint:'(xin lỗi)',ans:'对不起',exp:'Mình gây lỗi cho người khác thì nói 对不起.'},
  {pre:'Bạn cùng nhóm đến muộn mười phút, cúi đầu xin lỗi. Bạn mỉm cười đáp: “',blank:'没关系',post:'！”',hint:'(không sao đâu)',ans:'没关系',exp:'没关系 là câu đáp lại lời xin lỗi.'},
];

// Sắp xếp — ghép cả dấu câu, câu ghép từ hai lời nói
var sortData = [
  {words:['您','好','，','对不起','！'],ans:'您好，对不起！',audio:'您好，对不起！'},
  {words:['你们','好','！'],ans:'你们好！',audio:'你们好！'},
  {words:['没关系','，','没关系','！'],ans:'没关系，没关系！',audio:'没关系，没关系！'},
];

// Nối — tình huống ↔ câu nói phù hợp
var matchData = [
  {left:'Chào em bé nhà hàng xóm',right:'你好！'},
  {left:'Chào ông nội của bạn thân',right:'您好！'},
  {left:'Chào hai vị khách vừa đến nhà',right:'你们好！'},
  {left:'Lỡ gọi nhầm tên một người',right:'对不起！'},
  {left:'Bạn cùng bàn xin lỗi vì mượn bút chưa trả',right:'没关系！'},
];

// Trắc nghiệm — chọn câu đúng tình huống, chọn câu đáp; không hỏi lý thuyết
var mcData = [
  {q:'Cô giáo bước vào lớp và chào cả lớp. Cô nói:',opts:['你们好！','您好！','你好！','没关系！'],ans:0,exp:'Cô chào nhiều học sinh cùng lúc nên dùng 你们好.'},
  {q:'A: “对不起！” — B đáp lại:',opts:['没关系！','对不起！','您好！','你们好！'],ans:0,exp:'Đáp lời xin lỗi bằng 没关系 (không sao đâu).'},
  {q:'Bạn đến lớp muộn, cô giáo đang giảng bài. Bạn nói với cô:',opts:['对不起！','没关系！','你们好！','你好！'],ans:0,exp:'Mình đến muộn là mình có lỗi nên nói 对不起; 没关系 là câu của người được xin lỗi.'},
  {q:'Trên phố, bạn vô ý va vào một cụ già. Bạn nói:',opts:['您好，对不起！','你好，没关系！','对不起，没关系！','你们好，对不起！'],ans:0,exp:'Với cụ già dùng 您; mình có lỗi nên xin lỗi 对不起. Tự nói cả 对不起 lẫn 没关系 là sai vai.'},
  {q:'Cặp hỏi – đáp nào KHÔNG hợp?',opts:['A: 对不起！— B: 你们好！','A: 你好！— B: 你好！','A: 您好！— B: 你好！','A: 对不起！— B: 没关系！'],ans:0,exp:'Người ta xin lỗi mà lại đáp bằng lời chào là không hợp; phải đáp 没关系.'},
  {q:'Bạn nhỏ 6 tuổi gặp ông của bạn mình. Bạn nhỏ nên chào:',opts:['您好！','你好！','你们好！','对不起！'],ans:0,exp:'Trẻ em chào người lớn tuổi phải dùng 您好 cho lễ phép.'},
  {q:'Bạn đi ngang qua bốn người bạn đang ngồi uống trà và muốn chào cả bốn:',opts:['你们好！','你好，你好！','您好！','没关系！'],ans:0,exp:'Chào cả nhóm một lần: 你们好; không cần chào lặp 你好 từng người.'},
];

var speakingData = {
  t1:{
    intro:'Nhấn nút loa nghe từng câu mẫu, đọc to theo cho tới khi trôi chảy. Chú ý biến điệu thanh 3 khi "你" và "好" đứng liền nhau (đọc gần giống "ní hǎo").',
    models:[
      {zh:'你好！',py:'Nǐ hǎo!',vn:'Chào bạn!'},
      {zh:'您好！',py:'Nín hǎo!',vn:'Chào ông / bà ạ!'},
      {zh:'你们好！',py:'Nǐmen hǎo!',vn:'Chào các bạn!'},
      {zh:'对不起！——没关系！',py:'Duìbuqǐ! — Méi guānxi!',vn:'Xin lỗi! — Không sao đâu!'},
    ],
  },
  t2:{
    intro:'Dùng khung câu cho sẵn, thay phần gạch chân bằng từ trong ô gợi ý để chào đúng đối tượng. Nhấn nút loa để nghe rồi nói to mỗi câu bạn tạo được.',
    drills:[
      {frame:'＿＿好！',frame_py:'___ hǎo!',vn:'Chào ＿＿! (thay đổi theo đối tượng giao tiếp)',options:['你','您','你们'],samples:['你好！','您好！','你们好！']},
    ],
  },
  t3:{
    intro:'Không nhìn câu mẫu, hãy tưởng tượng bạn đang ở trong tình huống thực tế và tự nói ra câu phù hợp.',
    tasks:[
      {role:'🏢 Tình huống 1 — Gặp giám đốc lần đầu',
       guide:'Ngày đầu đi làm, đồng nghiệp đưa bạn đến gặp giám đốc — một người lớn tuổi. Hãy chào ông ấy cho đúng phép lịch sự.',
       structure:['＿＿好！'],
       sample:'您好！',
       sample_vn:'Chào ông ạ!',
       note:'Người Việt hay quên đổi 你 thành 您 vì tiếng Việt đổi cách xưng hô bằng “ông, bà, cô, chú”. Trong tiếng Trung, với người lớn tuổi hoặc cấp trên hãy dùng 您.'},
      {role:'👥 Tình huống 2 — Đến buổi học nhóm',
       guide:'Bạn bước vào quán, cả nhóm bạn đã ngồi sẵn. Hãy chào tất cả mọi người một lần.',
       structure:['＿＿好！'],
       sample:'你们好！',
       sample_vn:'Chào các bạn!',
       note:'Chào từ hai người trở lên dùng 你们. Không cần chào 你好 với từng người.'},
      {role:'🙇 Tình huống 3 — Va phải người lạ',
       guide:'Bạn vội đi và va phải một người lạ trên phố. Hãy xin lỗi, rồi đóng vai người kia đáp lại nhẹ nhàng.',
       structure:['＿＿！','＿＿！'],
       sample:'对不起！——没关系！',
       sample_vn:'Xin lỗi! — Không sao đâu!',
       note:'没关系 là câu người Trung Quốc dùng rất thường xuyên để trấn an người xin lỗi — hãy luyện phản xạ đáp thật nhanh.'},
    ],
  },
};

// ══════════════════════════════════════════
// LUYỆN DỊCH — chỉ dùng từ vựng bài 1 (không có bài trước để ôn)
// ══════════════════════════════════════════
var translateData = [
  {vi:'Chào các bạn! Xin lỗi (mình đến muộn)!', zh:'你们好！对不起！', py:'Nǐmen hǎo! Duìbuqǐ!'},
  {vi:'(Hai bạn cùng tuổi gặp nhau) Chào cậu! — Chào cậu!', zh:'你好！——你好！', py:'Nǐ hǎo! — Nǐ hǎo!'},
  {vi:'(Cậu bé) Chào ông ạ! — (Ông) Chào cháu!', zh:'您好！——你好！', py:'Nín hǎo! — Nǐ hǎo!'},
];

// ══════════════════════════════════════════
// LUYỆN DỊCH (chiều Trung→Việt) — noi dung KHAC voi chieu Viet->Trung o tren
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:'Chào bạn! Xin lỗi nhé!', zh:'你好！对不起！', py:'Nǐ hǎo! Duìbuqǐ!'},
  {vi:'Chào các bạn! Chào bà ạ!', zh:'你们好！您好！', py:'Nǐmen hǎo! Nín hǎo!'},
];

// ══════════════════════════════════════════
// LUYỆN NGHE — nghe câu → chọn đáp án (đọc bằng giọng máy), chỉ dùng từ đã học
// ══════════════════════════════════════════
var listenData = [
  {audio:'您好！',
   questions:[
     {q:'Người nói đang chào ai?',opts:['Một bạn cùng tuổi','Một cụ ông lớn tuổi','Cả một nhóm bạn'],ans:1,exp:'您好 là lời chào kính trọng, dùng với người lớn tuổi.'},
   ]},
  {audio:'对不起，对不起！',
   questions:[
     {q:'Người nói đang làm gì?',opts:['Chào hỏi','Đáp lại lời xin lỗi','Xin lỗi'],ans:2,exp:'对不起 = xin lỗi; nói hai lần để tỏ ra rất áy náy.'},
   ]},
  {audio:'你们好！',
   questions:[
     {q:'Lời chào này dành cho mấy người?',opts:['Từ hai người trở lên','Một người','Một cụ già'],ans:0,exp:'你们 = các bạn, dùng khi có từ hai người trở lên.'},
   ]},
  {audio:'对不起！——没关系，没关系！',
   questions:[
     {q:'Người thứ hai phản ứng thế nào?',opts:['Tức giận','Cũng xin lỗi lại','Bỏ qua, không để bụng'],ans:2,exp:'没关系 = không sao đâu, tức là người đó bỏ qua.'},
   ]},
  {audio:'你好！——您好！',
   questions:[
     {q:'Đoán xem hai người này là ai?',opts:['Hai bạn cùng lớp','Một ông cụ chào trước, một cậu bé chào lại','Hai người cùng tuổi'],ans:1,exp:'Người thứ hai dùng 您 (kính trọng) nên là người nhỏ tuổi chào người lớn.'},
   ]},
];
