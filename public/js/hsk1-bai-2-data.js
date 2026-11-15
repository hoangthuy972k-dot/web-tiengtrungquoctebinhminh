// ══════════════════════════════════════════
// DATA — HSK1 Bài 2: 谢谢你!
// ══════════════════════════════════════════
var vocabData = [
  {
    "n": 1,
    "zh": "谢谢",
    "py": "xièxie",
    "pos": "Động từ",
    "vn": "cảm ơn",
    "hv": "tạ tạ",
    "em": "🙏",
    "lesson": 1,
    "ex_zh": "谢谢！",
    "ex_py": "Xièxie!",
    "ex_vn": "Cảm ơn!",
    "exList": [
      {
        "zh": "谢谢！",
        "py": "Xièxie!",
        "vn": "Cảm ơn!"
      },
      {
        "zh": "谢谢你！",
        "py": "Xièxie nǐ!",
        "vn": "Cảm ơn bạn!"
      }
    ],
    "hanzi": [
      {
        "c": "谢",
        "p": "xiè",
        "type": "左右结构 · Trái-phải",
        "st": 12,
        "ord": "讠(ngôn) trái → 射(xạ) phải",
        "rad": "讠 (ngôn – lời nói)",
        "mean": "cảm ơn, tạ ơn",
        "tip": "讠(lời nói) + 射(bắn ra) → LỜI NÓI bày tỏ lòng biết ơn được gửi ra ngoài.",
        "cf": "榭 (xiè – \"nhà thuỷ tạ\")",
        "w": "谢谢 / 不谢"
      }
    ],
    "colloFull": [
      {
        "zh": "谢谢你",
        "py": "xièxie nǐ",
        "vn": "cảm ơn bạn"
      },
      {
        "zh": "谢谢您",
        "py": "xièxie nín",
        "vn": "cảm ơn ngài"
      },
      {
        "zh": "谢谢你们",
        "py": "xièxie nǐmen",
        "vn": "cảm ơn các bạn"
      }
    ],
    "patterns": [
      {
        "s": "谢谢 + người",
        "m": "Cảm ơn ai: 谢谢你 · 谢谢您 · 谢谢你们"
      },
      {
        "s": "谢谢 —— 不客气",
        "m": "Cảm ơn — Không có gì: một cặp đối đáp"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Cảm ơn bạn!",
        "answer": "谢谢你！",
        "answerPy": "Xièxie nǐ!",
        "note": "Cảm ơn ai thì đặt người đó ngay sau 谢谢.",
        "pair": "谢谢 + người"
      },
      {
        "promptLang": "vi",
        "prompt": "— Cảm ơn ngài! — Không có gì!",
        "answer": "谢谢您！——不客气！",
        "answerPy": "Xièxie nín! —— Bú kèqi!",
        "note": "Với người trên thì dùng 您 cho lễ phép.",
        "pair": "谢谢 —— 不客气"
      }
    ]
  },
  {
    "n": 2,
    "zh": "不",
    "py": "bù / bú",
    "pos": "Phó từ",
    "vn": "không cần, không, đừng",
    "hv": "bất",
    "em": "🚫",
    "lesson": 1,
    "ex_zh": "不谢！",
    "ex_py": "Bú xiè!",
    "ex_vn": "Không cần cảm ơn đâu!",
    "exList": [
      {
        "zh": "不谢！",
        "py": "Bú xiè!",
        "vn": "Không cần cảm ơn đâu!"
      },
      {
        "zh": "不客气！",
        "py": "Bú kèqi!",
        "vn": "Đừng khách sáo!"
      }
    ],
    "hanzi": [
      {
        "c": "不",
        "p": "bù / bú",
        "type": "独体字 · Chữ đơn",
        "st": 4,
        "ord": "一(ngang) → 丨→ ㇒ → 丶",
        "rad": "一 (nhất)",
        "mean": "không, đừng, chẳng",
        "tip": "Nét ngang trên cùng như một bức tường CHẶN LẠI → mang nghĩa PHỦ ĐỊNH. Đổi sang thanh 2 (bú) khi đứng trước âm tiết mang thanh 4.",
        "cf": "布 (bù – \"vải\")",
        "w": "不谢 / 不客气 / 不是"
      }
    ],
    "colloFull": [
      {
        "zh": "不好",
        "py": "bù hǎo",
        "vn": "không tốt"
      },
      {
        "zh": "不客气",
        "py": "bú kèqi",
        "vn": "không có gì"
      }
    ],
    "patterns": [
      {
        "s": "不 + tính từ / động từ",
        "m": "Phủ định: 不好 — không tốt"
      },
      {
        "s": "不 đọc bú khi đứng trước thanh 4: 不客气 (bú kèqi)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Không tốt.",
        "answer": "不好。",
        "answerPy": "Bù hǎo.",
        "note": "不 đặt TRƯỚC tính từ để phủ định.",
        "pair": "不 + Adj"
      },
      {
        "promptLang": "vi",
        "prompt": "Không có gì đâu!",
        "answer": "不客气！",
        "answerPy": "Bú kèqi!",
        "note": "Ở đây 不 đọc bú vì chữ sau (客) mang thanh 4.",
        "pair": "不客气！"
      }
    ]
  },
  {
    "n": 3,
    "zh": "不客气",
    "py": "bú kèqi",
    "pos": "Cụm từ",
    "vn": "đừng khách sáo, không có gì",
    "hv": "bất khách khí",
    "em": "😊",
    "lesson": 1,
    "ex_zh": "不客气！",
    "ex_py": "Bú kèqi!",
    "ex_vn": "Đừng khách sáo!",
    "exList": [
      {
        "zh": "不客气！",
        "py": "Bú kèqi!",
        "vn": "Đừng khách sáo!"
      },
      {
        "zh": "谢谢你！不客气！",
        "py": "Xièxie nǐ! Bú kèqi!",
        "vn": "Cảm ơn bạn! — Không có gì!"
      }
    ],
    "hanzi": [
      {
        "c": "客",
        "p": "kè",
        "type": "上下结构 · Trên-dưới",
        "st": 9,
        "ord": "宀(miên) trên → 各(các) dưới",
        "rad": "宀 (miên – mái nhà)",
        "mean": "khách",
        "tip": "宀(mái nhà) + 各(mỗi người, mỗi nơi) → người từ nhiều nơi đến ở tạm dưới MỘT MÁI NHÀ = KHÁCH.",
        "cf": "各 (gè – \"mỗi\")",
        "w": "客气 / 不客气"
      },
      {
        "c": "气",
        "p": "qì",
        "type": "独体字 · Chữ đơn",
        "st": 4,
        "ord": "ノ→一→㇕→一",
        "rad": "气 (khí – tự thành bộ)",
        "mean": "khí, hơi",
        "tip": "Hình dáng luồng khí đang bay lượn → KHÍ; ghép với 客 thành \"khách khí\" nghĩa là giữ ý tứ, khách sáo.",
        "cf": "汽 (qì – \"hơi nước\", thêm bộ 氵\")",
        "w": "客气 / 不客气"
      }
    ],
    "colloFull": [],
    "patterns": [
      {
        "s": "谢谢 —— 不客气",
        "m": "Câu đáp khi người khác cảm ơn mình"
      },
      {
        "s": "不客气 nghĩa đen: đừng (不) khách sáo (客气)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Không có gì!",
        "answer": "不客气！",
        "answerPy": "Bú kèqi!",
        "note": "Câu đáp khi ai đó nói 谢谢 với mình.",
        "pair": "不客气！"
      },
      {
        "promptLang": "vi",
        "prompt": "— Cảm ơn các bạn! — Không có gì!",
        "answer": "谢谢你们！——不客气！",
        "answerPy": "Xièxie nǐmen! —— Bú kèqi!",
        "note": "Cảm ơn nhiều người thì dùng 你们.",
        "pair": "谢谢 —— 不客气"
      }
    ]
  },
  {
    "n": 4,
    "zh": "再见",
    "py": "zàijiàn",
    "pos": "Động từ",
    "vn": "tạm biệt",
    "hv": "tái kiến",
    "em": "👋",
    "lesson": 1,
    "ex_zh": "再见！",
    "ex_py": "Zàijiàn!",
    "ex_vn": "Tạm biệt!",
    "exList": [
      {
        "zh": "再见！",
        "py": "Zàijiàn!",
        "vn": "Tạm biệt!"
      },
      {
        "zh": "谢谢，再见！",
        "py": "Xièxie, zàijiàn!",
        "vn": "Cảm ơn, tạm biệt nhé!"
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
        "c": "见",
        "p": "jiàn",
        "type": "独体字 · Chữ đơn",
        "st": 4,
        "ord": "冂→ㇾ→儿(biến thể)",
        "rad": "见 (kiến – tự thành bộ)",
        "mean": "gặp, nhìn thấy",
        "tip": "Hình con mắt trên đôi chân đang bước tới → NHÌN THẤY, GẶP GỠ.",
        "cf": "贝 (bèi – \"vật báu\")",
        "w": "再见"
      }
    ],
    "colloFull": [],
    "patterns": [
      {
        "s": "再 + 见",
        "m": "Nghĩa đen: gặp (见) lại (再)"
      },
      {
        "s": "Chia tay thì cả hai bên đều nói 再见"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tạm biệt!",
        "answer": "再见！",
        "answerPy": "Zàijiàn!",
        "note": "Dùng khi chia tay, không phân biệt thân sơ.",
        "pair": "再见！"
      },
      {
        "promptLang": "vi",
        "prompt": "— Chào ngài, tạm biệt ạ! — Tạm biệt!",
        "answer": "您好，再见！——再见！",
        "answerPy": "Nín hǎo, zàijiàn! —— Zàijiàn!",
        "note": "Người nghe đáp lại cũng bằng 再见.",
        "pair": "……好 —— 再见"
      }
    ]
  }
];

const wuData = [
  {img:'🙏',label:'谢谢',py:'xièxie',letter:'A'},
  {img:'🚫',label:'不',py:'bù',letter:'B'},
  {img:'😊',label:'不客气',py:'bú kèqi',letter:'C'},
  {img:'👋',label:'再见',py:'zàijiàn',letter:'D'},
];

var dialogData = [
  {scene:'Cảm ơn thông thường',
   lines:[
     {sp:0,zh:'谢谢！',py:'Xièxie!',vn:'Cảm ơn!'},
     {sp:1,zh:'不谢！',py:'Bú xiè!',vn:'Không cần cảm ơn đâu!'},
   ]},
  {scene:'Cảm ơn lịch sự & đáp lại',
   lines:[
     {sp:0,zh:'谢谢你！',py:'Xièxie nǐ!',vn:'Cảm ơn bạn!'},
     {sp:1,zh:'不客气！',py:'Bú kèqi!',vn:'Đừng khách sáo!'},
   ]},
  {scene:'Tạm biệt',
   lines:[
     {sp:0,zh:'再见！',py:'Zàijiàn!',vn:'Tạm biệt!'},
     {sp:1,zh:'再见！',py:'Zàijiàn!',vn:'Tạm biệt!'},
   ]},
];

// Điền từ — mỗi câu một tình huống: cảm ơn, đáp lời cảm ơn, tạm biệt (ôn 你/您/对不起/没关系 bài 1)
var fillData = [
  {pre:'Bạn đánh rơi bút, bạn ngồi bàn sau nhặt lên đưa lại. Bạn quay xuống nói: “',blank:'谢谢',post:'你！”',hint:'(cảm ơn)',ans:'谢谢',exp:'Được người khác giúp thì cảm ơn: 谢谢你 = cảm ơn bạn.'},
  {pre:'Bạn làm thêm ở quán trà sữa. Một vị khách nhận cốc và cảm ơn bạn. Bạn đáp lịch sự: “',blank:'不客气',post:'！”',hint:'(đừng khách sáo — lịch sự)',ans:'不客气',exp:'Với khách hàng, người lạ, đáp 不客气 lịch sự hơn 不谢.'},
  {pre:'Bạn thân cảm ơn vì bạn cho mượn vở chép bài. Bạn xua tay, đáp kiểu thân mật: “',blank:'不谢',post:'！”',hint:'(khỏi cảm ơn — giữa bạn bè)',ans:'不谢',exp:'不谢 ngắn gọn, thân mật, hợp để nói với bạn bè, người nhà.'},
  {pre:'Nói chuyện điện thoại với mẹ xong, mẹ dặn bạn ngủ sớm. Bạn đồng ý rồi chào: “好，',blank:'再见',post:'！”',hint:'(tạm biệt)',ans:'再见',exp:'Kết thúc cuộc gọi hay buổi gặp đều chào 再见; 好 ở đầu câu = được, vâng.'},
  {pre:'Một em bé chạy vội va vào bạn, lí nhí nói “对不起！”. Bạn xoa đầu bé: “',blank:'没关系',post:'！”',hint:'(không sao đâu)',ans:'没关系',exp:'Đáp lời xin lỗi là 没关系; đừng nhầm với 不客气 (đáp lời cảm ơn).'},
];

// Sắp xếp — ghép chữ thành câu (có dấu câu)
var sortData = [
  {words:['谢','谢','您','，','再','见','！'],ans:'谢谢您，再见！',audio:'谢谢您，再见！',alt:['再见，谢谢您！']},
  {words:['不','客','气','，','不','客','气','！'],ans:'不客气，不客气！',audio:'不客气，不客气！'},
  {words:['对','不','起','，','谢','谢','你','！'],ans:'对不起，谢谢你！',audio:'对不起，谢谢你！'},
];

// Nối — tình huống ↔ câu nói phù hợp
var matchData = [
  {left:'Em gái cảm ơn vì bạn buộc tóc giúp — bạn đáp',right:'不谢！'},
  {left:'Hành khách cảm ơn bạn (tài xế) — bạn đáp',right:'不客气！'},
  {left:'Tiễn khách ra tận cửa',right:'再见！'},
  {left:'Cô giáo cho bạn mượn sách',right:'谢谢您！'},
  {left:'Bạn cùng phòng làm đổ nước lên bàn bạn và xin lỗi',right:'没关系！'},
];

// Trắc nghiệm — chọn câu đúng tình huống, chọn câu đáp; không hỏi lý thuyết
var mcData = [
  {q:'Bạn mượn thước của bạn cùng bàn. Bạn ấy đáp lại bạn: “不谢！”. Vậy lúc nãy bạn đã nói:',opts:['谢谢！','对不起！','你好！','再见！'],ans:0,exp:'不谢 là câu đáp lời cảm ơn, nên trước đó bạn đã nói 谢谢.'},
  {q:'A (bạn thân): “谢谢你！” — B đáp thân mật:',opts:['不谢，不谢！','没关系，没关系！','谢谢，谢谢！','对不起，对不起！'],ans:0,exp:'Đáp lời cảm ơn dùng 不谢; 没关系 là đáp lời xin lỗi — người Việt hay nhầm vì cả hai đều dịch là “không có gì”.'},
  {q:'Tết đến, ông nội lì xì cho bạn. Bạn cảm ơn ông:',opts:['谢谢您！','谢谢你！','不客气！','没关系！'],ans:0,exp:'Cảm ơn ông bà dùng 您 cho lễ phép; 不客气 là câu đáp, không phải câu cảm ơn.'},
  {q:'Cặp hỏi – đáp nào SAI?',opts:['A: 对不起！— B: 不客气！','A: 谢谢你！— B: 不谢！','A: 再见！— B: 再见！','A: 你们好！— B: 你好！'],ans:0,exp:'Người ta xin lỗi thì đáp 没关系; 不客气 chỉ dùng để đáp lời cảm ơn.'},
  {q:'Sáng sớm, bạn gặp bạn cùng lớp ở cổng trường. Bạn nói:',opts:['你好！','再见！','不谢！','谢谢！'],ans:0,exp:'Gặp nhau thì chào 你好; 再见 chỉ dùng lúc chia tay.'},
  {q:'Một bạn làm rơi sách của bạn và nói “对不起！”, rồi nhặt lên đưa lại cho bạn. Bạn nói:',opts:['没关系，谢谢！','不客气，谢谢！','没关系，不谢！','对不起，不客气！'],ans:0,exp:'Đáp lời xin lỗi: 没关系; được nhặt sách giúp: 谢谢. Còn 不谢 / 不客气 là để đáp lời cảm ơn của người khác.'},
  {q:'Bạn mua đồ xong, nhân viên đưa túi và nói: “谢谢！再见！”. Bạn đáp:',opts:['再见！','你们好！','没关系！','您好！'],ans:0,exp:'Người ta chào tạm biệt thì chào lại 再见; 你好 / 您好 chỉ dùng khi mới gặp.'},
];

var speakingData = {
  t1:{
    intro:'Nhấn nút loa nghe từng câu mẫu, đọc to theo cho tới khi trôi chảy. Chú ý: 不 đứng trước một chữ thanh 4 thì đọc thành thanh 2 — 不谢 đọc “bú xiè”, 不客气 đọc “bú kèqi”. Chữ thứ hai của 谢谢 đọc nhẹ.',
    models:[
      {zh:'谢谢！——不谢！',py:'Xièxie! — Bú xiè!',vn:'Cảm ơn! — Không cần cảm ơn đâu!'},
      {zh:'谢谢，谢谢！',py:'Xièxie, xièxie!',vn:'Cảm ơn, cảm ơn nhiều!'},
      {zh:'再见！——再见！',py:'Zàijiàn! — Zàijiàn!',vn:'Tạm biệt! — Tạm biệt!'},
      {zh:'你好！谢谢你！',py:'Nǐ hǎo! Xièxie nǐ!',vn:'Chào bạn! Cảm ơn bạn!'},
    ],
  },
  t2:{
    intro:'Thay phần gạch chân bằng từ trong ô gợi ý để cảm ơn đúng người: bạn bè dùng 你, người lớn tuổi dùng 您. Nhấn nút loa để nghe rồi nói to cả hai lượt lời.',
    drills:[
      {frame:'A: 谢谢＿＿！ B: 不客气！',frame_py:'A: Xièxie ___! B: Bú kèqi!',vn:'A: Cảm ơn ＿＿! B: Đừng khách sáo!',options:['你','您'],samples:['A: 谢谢你！ B: 不客气！','A: 谢谢您！ B: 不客气！']},
    ],
  },
  t3:{
    intro:'Không nhìn câu mẫu, hãy tưởng tượng bạn đang ở trong tình huống thực tế và tự nói ra câu phù hợp. Chú ý chọn đúng câu cảm ơn, câu đáp và lời chào.',
    tasks:[
      {role:'🛍️ Tình huống 1 — Nhân viên giúp bạn tìm đồ',
       guide:'Bạn tìm mãi không thấy món đồ cần mua, một nhân viên cửa hàng nhiệt tình tìm giúp. Hãy cảm ơn thật lòng.',
       structure:['谢谢，谢谢＿＿！'],
       sample:'谢谢，谢谢你！',
       sample_vn:'Cảm ơn, cảm ơn bạn nhiều!',
       note:'Nói 谢谢 hai lần hoặc thêm 你 / 您 phía sau nghe chân thành hơn. Đừng nói “你谢谢” — người được cảm ơn luôn đứng sau 谢谢.'},
      {role:'👵 Tình huống 2 — Giúp cụ bà qua đường',
       guide:'Bạn dắt một cụ bà qua đường. Cụ cảm ơn bạn rối rít. Hãy đáp lại lễ phép.',
       structure:['＿＿！'],
       sample:'不客气！',
       sample_vn:'Dạ, không có gì ạ!',
       note:'Người Việt hay đáp “không có gì” bằng 没关系 — sai! 没关系 chỉ dùng khi người ta xin lỗi. Người ta cảm ơn thì đáp 不客气 (lịch sự) hoặc 不谢 (thân mật).'},
      {role:'🏃 Tình huống 3 — Phải về sớm',
       guide:'Bạn đang ngồi chơi với nhóm bạn nhưng có việc phải về trước. Hãy xin lỗi và chào tạm biệt mọi người.',
       structure:['＿＿，＿＿！'],
       sample:'对不起，再见！',
       sample_vn:'Xin lỗi nhé, mình về trước đây!',
       note:'再见 dùng được với mọi người, không cần đổi theo tuổi tác như 你好 / 您好.'},
    ],
  },
};

// ══════════════════════════════════════════
// LUYỆN DỊCH — dùng từ bài 2 + ôn lại từ bài 1
// ══════════════════════════════════════════
var translateData = [
  {vi:'(Đáp lời cảm ơn của khách) Không có gì ạ! Tạm biệt!', zh:'不客气！再见！', py:'Bú kèqi! Zàijiàn!'},
  {vi:'Cháu chào ông ạ! Cháu cảm ơn ông!', zh:'您好！谢谢您！', py:'Nín hǎo! Xièxie nín!'},
  {vi:'Chào các bạn! Cảm ơn các bạn!', zh:'你们好！谢谢你们！', py:'Nǐmen hǎo! Xièxie nǐmen!'},
];

// ══════════════════════════════════════════
// LUYỆN DỊCH (chiều Trung→Việt) — noi dung KHAC voi chieu Viet->Trung o tren
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:'Cảm ơn bạn! Tạm biệt!', zh:'谢谢你！再见！', py:'Xièxie nǐ! Zàijiàn!'},
  {vi:'Cảm ơn bà! Xin lỗi (đã làm phiền bà)!', zh:'谢谢您！对不起！', py:'Xièxie nín! Duìbuqǐ!'},
];

// ══════════════════════════════════════════
// LUYỆN NGHE — nghe câu → chọn đáp án (đọc bằng giọng máy), chỉ dùng từ đã học
// ══════════════════════════════════════════
var listenData = [
  {audio:'再见，再见！',
   questions:[
     {q:'Câu này thường được nói vào lúc nào?',opts:['Lúc mới gặp nhau','Lúc chia tay','Lúc làm phiền người khác'],ans:1,exp:'再见 = tạm biệt, nói lúc chia tay.'},
   ]},
  {audio:'谢谢您！——不谢！',
   questions:[
     {q:'Người thứ nhất cảm ơn ai?',opts:['Một người lớn tuổi','Một bạn cùng tuổi','Cả một nhóm bạn'],ans:0,exp:'谢谢您 dùng 您 (kính trọng) nên người được cảm ơn là người lớn tuổi.'},
     {q:'Người thứ hai trả lời thế nào?',opts:['Không sao đâu','Tạm biệt','Không cần cảm ơn'],ans:2,exp:'不谢 = khỏi cảm ơn, câu đáp thân mật.'},
   ]},
  {audio:'对不起！——没关系！再见！',
   questions:[
     {q:'Người thứ hai phản ứng thế nào?',opts:['Cũng xin lỗi lại','Bỏ qua rồi chào tạm biệt','Cảm ơn rồi chào hỏi'],ans:1,exp:'没关系 = không sao đâu (bỏ qua); 再见 = tạm biệt.'},
   ]},
  {audio:'您好！谢谢，谢谢！',
   questions:[
     {q:'Người nói làm những việc gì?',opts:['Chào rồi xin lỗi','Chào rồi cảm ơn','Cảm ơn rồi tạm biệt'],ans:1,exp:'您好 là lời chào (kính trọng); 谢谢 nói hai lần là cảm ơn rất nhiều.'},
   ]},
];
