// ══════════════════════════════════════════
// DATA — YCT Bài 3: 他是谁？
// ══════════════════════════════════════════
var vocabData = [
  {n:1,zh:'他',py:'tā',pos:'Đại từ',vn:'anh ấy, bạn ấy', hv: 'tha',em:'👦',lesson:1,
   ex_zh:'他是谁？',ex_py:'Tā shì shéi?',ex_vn:'Anh ấy là ai vậy?',
   exList:[{zh:'他是谁？',py:'Tā shì shéi?',vn:'Anh ấy là ai vậy?'},{zh:'他叫明明。',py:'Tā jiào Míngming.',vn:'Bạn ấy tên là Minh Minh.'}],
   hanzi:[
     {c:'他',p:'tā',type:'左右结构 · Trái-phải',st:5,ord:'亻(nhân) trái → 也(dã) phải',rad:'亻 (nhân – người)',mean:'anh ấy, bạn ấy',
      tip:'亻(người nam) + 也(đại từ cổ) → chỉ NGƯỜI NAM đang được nhắc đến.',
      cf:'她 (tā – "cô ấy", cùng phần 也")',w:'他是谁'},
   ]},
  {n:2,zh:'是',py:'shì',pos:'Động từ',vn:'là', hv: 'thị',em:'✅',lesson:1,
   ex_zh:'我是乐乐。',ex_py:'Wǒ shì Lèle.',ex_vn:'Mình là Lạc Lạc.',
   exList:[
     {zh:'我是乐乐。',py:'Wǒ shì Lèle.',vn:'Mình là Lạc Lạc.'},
     {zh:'她是老师。',py:'Tā shì lǎoshī.',vn:'Cô ấy là cô giáo.'},
   ],
   hanzi:[
     {c:'是',p:'shì',type:'上下结构 · Trên-dưới',st:9,ord:'日(nhật) trên → 正(biến thể) dưới',rad:'日 (nhật – mặt trời)',mean:'là',
      tip:'日(mặt trời) đứng CHÍNH GIỮA bầu trời → biểu thị điều ĐÚNG, khẳng định LÀ.',
      cf:'量 (liàng – "đo lường")',w:'他是谁'},
   ]},
  {n:3,zh:'谁',py:'shéi',pos:'Đại từ',vn:'ai', hv: 'thùy',em:'❓',lesson:1,
   ex_zh:'她是谁？',ex_py:'Tā shì shéi?',ex_vn:'Bạn ấy là ai?',
   exList:[
     {zh:'她是谁？',py:'Tā shì shéi?',vn:'Bạn ấy là ai?'},
     {zh:'你是谁？',py:'Nǐ shì shéi?',vn:'Bạn là ai?'},
   ],
   hanzi:[
     {c:'谁',p:'shéi',type:'左右结构 · Trái-phải',st:10,ord:'讠(ngôn) trái → 隹(chuy) phải',rad:'讠 (ngôn – lời nói)',mean:'ai',
      tip:'讠(lời nói) dùng để cất tiếng HỎI xem người đó là ai.',
      cf:'唯 (wéi – "duy nhất")',w:'他是谁'},
   ]},
  {n:4,zh:'哪',py:'nǎ',pos:'Đại từ',vn:'nào, cái nào', hv: 'na',em:'🧭',lesson:2,
   ex_zh:'明明是哪国人？',ex_py:'Míngming shì nǎ guó rén?',ex_vn:'Minh Minh là người nước nào?',
   exList:[{zh:'明明是哪国人？',py:'Míngming shì nǎ guó rén?',vn:'Minh Minh là người nước nào?'},{zh:'她是哪国人？',py:'Tā shì nǎ guó rén?',vn:'Bạn ấy là người nước nào?'}],
   hanzi:[
     {c:'哪',p:'nǎ',type:'左右结构 · Trái-phải',st:9,ord:'口(khẩu) trái → 那(na) phải',rad:'口 (khẩu – miệng)',mean:'nào, cái nào',
      tip:'口(miệng hỏi) + 那(kia) → hỏi xem là CÁI NÀO trong số đó.',
      cf:'那 (nà – "kia, đó")',w:'哪国人'},
   ]},
  {n:5,zh:'国',py:'guó',pos:'Danh từ',vn:'nước, quốc gia', hv: 'quốc',em:'🌍',lesson:2,
   ex_zh:'你是哪国人？',ex_py:'Nǐ shì nǎ guó rén?',ex_vn:'Bạn là người nước nào?',
   exList:[
     {zh:'你是哪国人？',py:'Nǐ shì nǎ guó rén?',vn:'Bạn là người nước nào?'},
     {zh:'老师是哪国人？',py:'Lǎoshī shì nǎ guó rén?',vn:'Cô giáo là người nước nào?'},
   ],
   hanzi:[
     {c:'国',p:'guó',type:'全包围结构 · Bao vây hoàn toàn',st:8,ord:'囗(vi) ngoài → 玉(biến thể) trong',rad:'囗 (vi – vây quanh)',mean:'nước, quốc gia',
      tip:'囗(tường thành bao quanh) + 玉(ngọc quý bên trong) → lãnh thổ có biên giới bảo vệ báu vật = ĐẤT NƯỚC.',
      cf:'固 (gù – "vững chắc")',w:'哪国人 / 中国'},
   ]},
  {n:6,zh:'人',py:'rén',pos:'Danh từ',vn:'người', hv: 'nhân',em:'🧍',lesson:2,
   ex_zh:'她是中国人吗？',ex_py:'Tā shì Zhōngguó rén ma?',ex_vn:'Bạn ấy là người Trung Quốc phải không?',
   exList:[
     {zh:'她是中国人吗？',py:'Tā shì Zhōngguó rén ma?',vn:'Bạn ấy là người Trung Quốc phải không?'},
     {zh:'他不是中国人。',py:'Tā bú shì Zhōngguó rén.',vn:'Bạn ấy không phải người Trung Quốc.'},
   ],
   hanzi:[
     {c:'人',p:'rén',type:'独体字 · Tượng hình',st:2,ord:'丿→㇏',rad:'人 (nhân – tự thành bộ)',mean:'người',
      tip:'Hình dáng một người đang đứng nghiêng, hai chân chống đỡ → NGƯỜI.',
      cf:'入 (rù – "vào")',w:'中国人'},
   ]},
  {n:7,zh:'中国人',py:'Zhōngguó rén',pos:'Danh từ',vn:'người Trung Quốc', hv: 'Trung Quốc nhân',em:'🇨🇳',lesson:2,
   ex_zh:'他是中国人。',ex_py:'Tā shì Zhōngguó rén.',ex_vn:'Bạn ấy là người Trung Quốc.',
   exList:[{zh:'他是中国人。',py:'Tā shì Zhōngguó rén.',vn:'Bạn ấy là người Trung Quốc.'},{zh:'老师是中国人吗？',py:'Lǎoshī shì Zhōngguó rén ma?',vn:'Cô giáo là người Trung Quốc phải không?'}],
   hanzi:[
     {c:'中',p:'zhōng',type:'独体字 · Chữ đơn',st:4,ord:'丨(cổn) xuyên qua 口(khẩu)',rad:'丨 (cổn – nét sổ)',mean:'giữa, trung tâm',
      tip:'Một nét thẳng xuyên qua giữa ô vuông → chỉ vị trí TRUNG TÂM, Ở GIỮA.',
      cf:'冲 (chōng – "xông tới")',w:'中国人 / 中国'},
   ]},
];

var wuData = [
  {img:'👦',label:'他',py:'tā',letter:'A'},
  {img:'❓',label:'谁',py:'shéi',letter:'B'},
  {img:'🧭',label:'哪',py:'nǎ',letter:'C'},
  {img:'🌍',label:'国',py:'guó',letter:'D'},
  {img:'🧍',label:'人',py:'rén',letter:'E'},
  {img:'🇨🇳',label:'中国人',py:'Zhōngguó rén',letter:'F'},
];

var dialogData = [
  {scene:'Hỏi về bạn trong ảnh',
   lines:[
     {sp:0,zh:'他是谁？',py:'Tā shì shéi?',vn:'Anh ấy là ai vậy?'},
     {sp:1,zh:'他是明明。',py:'Tā shì Míngming.',vn:'Đó là Minh Minh.'},
     {sp:0,zh:'明明是哪国人？',py:'Míngming shì nǎ guó rén?',vn:'Minh Minh là người nước nào?'},
     {sp:1,zh:'他是中国人。',py:'Tā shì Zhōngguó rén.',vn:'Bạn ấy là người Trung Quốc.'},
   ]},
  {scene:'Hỏi về một bạn nữ khác',
   lines:[
     {sp:0,zh:'她是谁？',py:'Tā shì shéi?',vn:'Cô ấy là ai vậy?'},
     {sp:1,zh:'她是甜甜。',py:'Tā shì Tiántian.',vn:'Đó là Điềm Điềm.'},
   ]},
  {scene:'Xác nhận quốc tịch',
   lines:[
     {sp:0,zh:'你是中国人吗？',py:'Nǐ shì Zhōngguó rén ma?',vn:'Bạn là người Trung Quốc phải không?'},
     {sp:1,zh:'我是中国人。',py:'Wǒ shì Zhōngguó rén.',vn:'Mình là người Trung Quốc.'},
   ]},
];

// Điền từ — tình huống hỏi về người & quốc tịch
var fillData = [
  {pre:'Một bạn trai mới vào lớp, chưa ai biết tên. Cô giáo hỏi cả lớp: “',blank:'谁',post:'认识他？”',hint:'(ai)',ans:'谁',exp:'谁 = ai: 谁认识他？ = Ai quen bạn ấy?'},
  {pre:'Cô giáo nói lớp mình có bạn mới từ nước khác đến. Con hỏi cô: “',blank:'哪',post:'国人？”',hint:'(nào)',ans:'哪',exp:'哪 + 国人 = người nước nào.'},
  {pre:'Con kể với mẹ: Minh Minh là người Trung Quốc. “明明是',blank:'中国人',post:'。”',hint:'(người Trung Quốc)',ans:'中国人',exp:'中国人 = Trung Quốc + 人 (người).'},
  {pre:'Cô giáo hỏi bạn gái ngồi cạnh con là ai. Con đáp: “她',blank:'是',post:'甜甜。”',hint:'(là)',ans:'是',exp:'是 = là: 她是甜甜 = bạn ấy là Điềm Điềm.'},
  {pre:'Bạn hỏi con có quen bạn trai đứng ở cửa không. Con lắc đầu: “我不认识',blank:'他',post:'。”',hint:'(bạn ấy — bạn trai)',ans:'他',exp:'Bạn trai dùng 他; bạn gái dùng 她 (cùng đọc tā).'},
  {pre:'Con muốn biết bạn mới có phải người Trung Quốc không: “你是中国人',blank:'吗',post:'？”',hint:'(chữ hỏi — Bài 2)',ans:'吗',exp:'Câu kể + 吗 = câu hỏi Có/Không: 你是中国人吗？'},
];

// Sắp xếp — câu hỏi về người & quốc tịch
var sortData = [
  {words:['明明','认识','谁','？'],ans:'明明认识谁？',audio:'明明认识谁？'},
  {words:['你','是','谁','？'],ans:'你是谁？',audio:'你是谁？'},
  {words:['谁','是','中国人','？'],ans:'谁是中国人？',audio:'谁是中国人？'},
  {words:['老师','认识','他','吗','？'],ans:'老师认识他吗？',audio:'老师认识他吗？'},
];

var matchData = [
  {left:'他是谁？',right:'他是乐乐。'},
  {left:'你是哪国人？',right:'我是中国人。'},
  {left:'她是老师吗？',right:'不是，她是甜甜。'},
  {left:'谁认识明明？',right:'我认识他！'},
  {left:'你是中国人吗？',right:'不是。'},
  {left:'她叫什么？',right:'她叫甜甜。'},
];

// Trắc nghiệm — không audio
var mcData = [
  {q:'Có một bạn trai mới. Con hỏi bạn mình: “Bạn ấy tên gì?”',opts:['他叫什么？','他是什么？','他叫谁？','什么他叫？'],ans:0,exp:'Hỏi tên dùng 叫 + 什么; 谁 dùng để hỏi "ai".'},
  {q:'Bạn hỏi con có phải người Trung Quốc không. Con là người Việt Nam. Con đáp:',opts:['我不是中国人。','我是不中国人。','我不中国人。','不我是中国人。'],ans:0,exp:'不 đứng trước 是: 我不是中国人. Không được bỏ 是.'},
  {q:'Cô giáo chỉ ảnh một cô giáo khác, hỏi con đó là ai. Con đáp: “Cô ấy là cô giáo.”',opts:['她是老师。','他是老师。','她老师。','是她老师。'],ans:0,exp:'Cô giáo là nữ → 她; câu phải có 是: 她是老师.'},
  {q:'Con muốn hỏi các bạn: “Ai là cô giáo?”',opts:['谁是老师？','什么是老师？','老师是什么？','谁老师是？'],ans:0,exp:'谁 hỏi về người; 什么 hỏi về đồ vật.'},
  {q:'Điềm Điềm hỏi Lạc Lạc có quen Minh Minh không. Lạc Lạc không quen. Lạc Lạc đáp:',opts:['不认识。','认识不。','不是认识。','我认识不。'],ans:0,exp:'不 đứng trước 认识: 不认识. Không chen 是 vào.'},
];

var speakingData = {
  t1:{
    intro:'Nhấn nút loa nghe từng câu mẫu, đọc to theo cho tới khi trôi chảy nhé!',
    models:[
      {zh:'他是谁？',py:'Tā shì shéi?',vn:'Anh ấy là ai vậy?'},
      {zh:'他是明明。',py:'Tā shì Míngming.',vn:'Đó là Minh Minh.'},
    ],
  },
  t2:{
    intro:'Dùng khung câu cho sẵn, thay thế phần gạch chân bằng từ trong ô gợi ý. Nhấn nút loa để nghe rồi nói to mỗi câu con tạo được.',
    drills:[
      {frame:'我不是＿＿。',frame_py:'Wǒ bú shì ___.',vn:'Mình không phải ＿＿.',options:['老师','乐乐'],samples:['我不是老师。','我不是乐乐。']},
    ],
  },
  t3:{
    intro:'Không nhìn câu mẫu, con hãy tưởng tượng mình đang ở trong tình huống thật và tự nói câu phù hợp nhé!',
    tasks:[
      {role:'📷 Tình huống 1 — Ai trong ảnh?',
       guide:'Bạn cho con xem ảnh một bạn gái con không quen. Con hỏi bạn ấy là ai.',
       structure:['……是谁？'],
       sample:'她是谁？',
       sample_vn:'Bạn ấy là ai vậy?',
       note:'他 dùng cho bạn trai, 她 dùng cho bạn gái — đọc giống nhau (tā), viết khác nhau.'},
      {role:'🔎 Tình huống 2 — Tìm bạn ở lớp bên',
       guide:'Cô nhờ con sang lớp bên tìm bạn Điềm Điềm. Con không biết bạn ấy. Con hỏi các bạn ở đó.',
       structure:['谁是……？'],
       sample:'谁是甜甜？',
       sample_vn:'Bạn nào là Điềm Điềm?',
       note:'谁 hỏi về người, đứng ở chỗ của người mình muốn biết.'},
      {role:'🌏 Tình huống 3 — Cô giáo mới',
       guide:'Lớp có cô giáo mới nói tiếng Trung rất hay. Con hỏi bạn: cô giáo là người nước nào?',
       structure:['……是哪国人？'],
       sample:'老师是哪国人？',
       sample_vn:'Cô giáo là người nước nào?',
       note:'哪 luôn đi cùng 国 khi hỏi quốc tịch: 哪国人.'},
    ],
  },
};

// ══════════════════════════════════════════
// LUYỆN DỊCH (Việt→Trung) — câu ví dụ của chính bài này
// ══════════════════════════════════════════
var translateData = [
  {vi:"Cô ấy không phải Điềm Điềm.", zh:"她不是甜甜。", py:"Tā bú shì Tiántian."},
  {vi:"Bạn có quen cô giáo không?", zh:"你认识老师吗？", py:"Nǐ rènshi lǎoshī ma?"},
];

// ══════════════════════════════════════════
// LUYỆN DỊCH (Trung→Việt) — lời thoại trong bài, khác chiều Việt→Trung
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:"Chào bạn! Mình là Lạc Lạc.", zh:"你好！我是乐乐。", py:"Nǐ hǎo! Wǒ shì Lèle."},
];

// ══════════════════════════════════════════
// LUYỆN NGHE — đoạn nghe ngắn (đọc bằng giọng máy), chỉ dùng từ đã học
// ══════════════════════════════════════════
var listenData = [
  {audio:'老师，谁叫乐乐？',
   questions:[
     {q:'Bạn nhỏ hỏi cô giáo điều gì?',opts:['Lạc Lạc là người nước nào','Bạn nào tên là Lạc Lạc','Lạc Lạc có khỏe không'],ans:1,exp:'谁叫乐乐 = ai tên là Lạc Lạc.'},
   ]},
  {audio:'他不是明明。',
   questions:[
     {q:'Bạn trai đó có phải Minh Minh không?',opts:['Phải','Không phải','Không biết'],ans:1,exp:'不是 = không phải: 他不是明明.'},
   ]},
  {audio:'明明不认识甜甜。',
   questions:[
     {q:'Minh Minh có quen Điềm Điềm không?',opts:['Không quen','Có quen','Rất vui'],ans:0,exp:'不认识 = không quen.'},
   ]},
  {audio:'甜甜认识乐乐吗？认识。',
   questions:[
     {q:'Điềm Điềm có quen Lạc Lạc không?',opts:['Không quen','Không nói','Có quen'],ans:2,exp:'Câu trả lời 认识 = có quen.'},
   ]},
  {audio:'老师，甜甜是谁？',
   questions:[
     {q:'Bạn nhỏ hỏi cô giáo điều gì?',opts:['Điềm Điềm là ai','Điềm Điềm là người nước nào','Điềm Điềm tên là gì'],ans:0,exp:'甜甜是谁 = Điềm Điềm là ai.'},
   ]},
];
