// ══════════════════════════════════════════
// DATA — HSK1 Bài 5: 她女儿今年二十岁。
// ══════════════════════════════════════════
var vocabData = [
  {n:1,zh:'家',py:'jiā',pos:'Danh từ',vn:'nhà, gia đình',em:'🏠',lesson:1,
   ex_zh:'你家有几口人？',ex_py:'Nǐ jiā yǒu jǐ kǒu rén?',ex_vn:'Nhà anh có mấy người vậy?',
   exList:[
     {zh:'你家有几口人？',py:'Nǐ jiā yǒu jǐ kǒu rén?',vn:'Nhà anh có mấy người vậy?'},
     {zh:'我家有三口人。',py:'Wǒ jiā yǒu sān kǒu rén.',vn:'Nhà tôi có ba người.'},
   ],
   hanzi:[
     {c:'家',p:'jiā',type:'上下结构 · Trên-dưới',st:10,ord:'宀(miên) trên → 豕(thỉ) dưới',rad:'宀 (miên – mái nhà)',mean:'nhà, gia đình',
      tip:'宀(mái nhà) + 豕(con lợn) → thời xưa nuôi lợn dưới nhà sàn, biểu tượng của NHÀ.',
      cf:'豪 (háo – "hào hiệp")',w:'我家 / 家人'},
   ]},
  {n:2,zh:'有',py:'yǒu',pos:'Động từ',vn:'có',em:'✅',lesson:1,
   ex_zh:'我家有三口人。',ex_py:'Wǒ jiā yǒu sān kǒu rén.',ex_vn:'Nhà tôi có ba người.',
   exList:[
     {zh:'我家有三口人。',py:'Wǒ jiā yǒu sān kǒu rén.',vn:'Nhà tôi có ba người.'},
   ],
   hanzi:[
     {c:'有',p:'yǒu',type:'半包围结构 · Bán bao vây',st:6,ord:'ナ(biến thể) → 月(nguyệt) trong',rad:'月 (nguyệt – thịt/trăng)',mean:'có',
      tip:'Bàn tay (ナ) cầm miếng thịt (月) → sở hữu, CÓ trong tay.',
      cf:'肯 (kěn – "bằng lòng")',w:'我家有 / 有没有'},
   ]},
  {n:3,zh:'口',py:'kǒu',pos:'Lượng từ',vn:'lượng từ chỉ số thành viên gia đình',em:'👄',lesson:1,
   ex_zh:'我家有三口人。',ex_py:'Wǒ jiā yǒu sān kǒu rén.',ex_vn:'Nhà tôi có ba người.',
   exList:[
     {zh:'我家有三口人。',py:'Wǒ jiā yǒu sān kǒu rén.',vn:'Nhà tôi có ba người.'},
   ],
   hanzi:[
     {c:'口',p:'kǒu',type:'独体字 · Tượng hình',st:3,ord:'丨→𠃌→一',rad:'口 (khẩu – tự thành bộ)',mean:'miệng; lượng từ đếm người trong nhà',
      tip:'Hình cái miệng cách điệu → MIỆNG; dùng làm lượng từ đếm số người ăn chung một nhà (khẩu phần).',
      cf:'日 (rì – "mặt trời")',w:'三口人'},
   ]},
  {n:4,zh:'女儿',py:"nǚ'ér",pos:'Danh từ',vn:'con gái',em:'👧',lesson:1,
   ex_zh:'你女儿几岁了？',ex_py:"Nǐ nǚ'ér jǐ suì le?",ex_vn:'Con gái của cô mấy tuổi rồi?',
   exList:[
     {zh:'你女儿几岁了？',py:"Nǐ nǚ'ér jǐ suì le?",vn:'Con gái của cô mấy tuổi rồi?'},
   ],
   hanzi:[
     {c:'女',p:'nǚ',type:'独体字 · Tượng hình',st:3,ord:'㇃→一→一',rad:'女 (nữ – tự thành bộ)',mean:'con gái, nữ giới',
      tip:'Hình người phụ nữ quỳ khoanh tay → biểu tượng NỮ GIỚI.',
      cf:'安 (ān – "an toàn", có bộ 女")',w:'女儿 / 女朋友'},
     {c:'儿',p:'ér',type:'独体字 · Chữ đơn',st:2,ord:'丿→乚',rad:'儿 (nhân, biến thể – tự thành bộ)',mean:'con, trẻ con',
      tip:'Hình đứa trẻ với đôi chân còn yếu → CON, TRẺ NHỎ.',
      cf:'几 (jǐ – "mấy", dễ nhầm hình dạng")',w:'女儿 / 儿子'},
   ]},
  {n:5,zh:'几',py:'jǐ',pos:'Đại từ',vn:'mấy (hỏi số lượng dưới 10)',em:'🔢',lesson:2,
   ex_zh:'你女儿几岁了？',ex_py:"Nǐ nǚ'ér jǐ suì le?",ex_vn:'Con gái của cô mấy tuổi rồi?',
   exList:[
     {zh:'你女儿几岁了？',py:"Nǐ nǚ'ér jǐ suì le?",vn:'Con gái của cô mấy tuổi rồi?'},
   ],
   hanzi:[
     {c:'几',p:'jǐ',type:'独体字 · Chữ đơn',st:2,ord:'ノ→乚',rad:'几 (kỷ – tự thành bộ)',mean:'mấy (hỏi số lượng dưới 10)',
      tip:'Hình cái ghế nhỏ/bàn thấp thời cổ, mượn âm làm từ hỏi số lượng ÍT, dưới 10.',
      cf:'儿 (ér – "con", dễ nhầm hình dạng")',w:'几岁 / 几口人'},
   ]},
  {n:6,zh:'岁',py:'suì',pos:'Lượng từ',vn:'tuổi',em:'🎂',lesson:2,
   ex_zh:'她今年四岁了。',ex_py:'Tā jīnnián sì suì le.',ex_vn:'Năm nay cháu được bốn tuổi rồi.',
   exList:[
     {zh:'她今年四岁了。',py:'Tā jīnnián sì suì le.',vn:'Năm nay cháu được bốn tuổi rồi.'},
     {zh:'她今年50岁了。',py:'Tā jīnnián wǔshí suì le.',vn:'Năm nay cô ấy 50 tuổi rồi.'},
   ],
   hanzi:[
     {c:'岁',p:'suì',type:'上下结构 · Trên-dưới',st:6,ord:'山(biến thể) trên → 夕(tịch) dưới',rad:'山 (sơn – núi, biến thể)',mean:'tuổi',
      tip:'Xưa dùng để đếm số mùa/năm đã trải qua như ngọn núi tích tuổi theo thời gian → TUỔI.',
      cf:'出 (chū – "ra")',w:'几岁 / 二十岁'},
   ]},
  {n:7,zh:'了',py:'le',pos:'Trợ từ',vn:'trợ từ biểu thị sự thay đổi hoặc tình huống mới',em:'🔄',lesson:2,
   ex_zh:'她今年50岁了。',ex_py:'Tā jīnnián wǔshí suì le.',ex_vn:'Năm nay cô ấy 50 tuổi rồi.',
   exList:[
     {zh:'她今年50岁了。',py:'Tā jīnnián wǔshí suì le.',vn:'Năm nay cô ấy 50 tuổi rồi.'},
   ],
   hanzi:[
     {c:'了',p:'le',type:'独体字 · Chữ đơn',st:2,ord:'𠃋→乚',rad:'乙 (ất, biến thể)',mean:'trợ từ biểu thị thay đổi/hoàn thành',
      tip:'Hình dáng đơn giản như một cái móc, biểu thị việc vừa "chốt xong" — một sự thay đổi hoặc kết thúc.',
      cf:'子 (zǐ – "con", nét cuối tương tự")',w:'50岁了 / 我吃了'},
   ]},
  {n:8,zh:'今年',py:'jīnnián',pos:'Danh từ',vn:'năm nay',em:'📅',lesson:2,
   ex_zh:'她女儿今年20岁。',ex_py:"Tā nǚ'ér jīnnián èrshí suì.",ex_vn:'Con gái cô ấy năm nay 20 tuổi.',
   exList:[
     {zh:'她女儿今年20岁。',py:"Tā nǚ'ér jīnnián èrshí suì.",vn:'Con gái cô ấy năm nay 20 tuổi.'},
   ],
   hanzi:[
     {c:'今',p:'jīn',type:'上下结构 · Trên-dưới',st:4,ord:'人(biến thể) trên → 一,乛 dưới',rad:'人 (nhân, biến thể)',mean:'nay, hiện tại',
      tip:'Hình miệng đang ngậm lại, chỉ thời điểm HIỆN TẠI, ngay lúc này.',
      cf:'令 (lìng – "ra lệnh")',w:'今年 / 今天'},
     {c:'年',p:'nián',type:'独体字 · Tượng hình',st:6,ord:'丿→丨→一→丨→一→一',rad:'干 (can, biến thể)',mean:'năm',
      tip:'Hình người vác bó lúa sau vụ mùa → mỗi vụ mùa là một chu kỳ = NĂM.',
      cf:'午 (wǔ – "buổi trưa")',w:'今年 / 去年 / 明年'},
   ]},
  {n:9,zh:'多',py:'duō',pos:'Phó từ',vn:'bao nhiêu (chỉ mức độ)',em:'❔',lesson:2,
   ex_zh:'李老师多大了？',ex_py:'Lǐ lǎoshī duō dà le?',ex_vn:'Cô Lý bao nhiêu tuổi rồi?',
   exList:[
     {zh:'李老师多大了？',py:'Lǐ lǎoshī duō dà le?',vn:'Cô Lý bao nhiêu tuổi rồi?'},
   ],
   hanzi:[
     {c:'多',p:'duō',type:'上下结构 · Trên-dưới',st:6,ord:'夕(tịch) trên → 夕(tịch) dưới',rad:'夕 (tịch – buổi tối)',mean:'nhiều, bao nhiêu',
      tip:'Hai chữ 夕(buổi tối) chồng lên nhau → NHIỀU đêm trôi qua = NHIỀU, BAO NHIÊU.',
      cf:'夜 (yè – "đêm")',w:'多大 / 多少'},
   ]},
  {n:10,zh:'大',py:'dà',pos:'Tính từ',vn:'lớn, to',em:'📏',lesson:2,
   ex_zh:'李老师多大了？',ex_py:'Lǐ lǎoshī duō dà le?',ex_vn:'Cô Lý bao nhiêu tuổi rồi?',
   exList:[
     {zh:'李老师多大了？',py:'Lǐ lǎoshī duō dà le?',vn:'Cô Lý bao nhiêu tuổi rồi?'},
   ],
   hanzi:[
     {c:'大',p:'dà',type:'独体字 · Tượng hình',st:3,ord:'一→ノ→㇏',rad:'大 (đại – tự thành bộ)',mean:'to, lớn',
      tip:'Hình người dang rộng tay chân → TO LỚN.',
      cf:'太 (tài – "quá")',w:'多大 / 大学'},
   ]},
];

const wuData = [
  {img:'🏠',label:'家',py:'jiā',letter:'A'},
  {img:'👄',label:'口',py:'kǒu',letter:'B'},
  {img:'👧',label:'女儿',py:"nǚ'ér",letter:'C'},
  {img:'🎂',label:'岁',py:'suì',letter:'D'},
  {img:'📅',label:'今年',py:'jīnnián',letter:'E'},
  {img:'📏',label:'大',py:'dà',letter:'F'},
];

var dialogData = [
  {scene:'Ở trường · Hỏi số người trong nhà',
   lines:[
     {sp:0,zh:'你家有几口人？',py:'Nǐ jiā yǒu jǐ kǒu rén?',vn:'Nhà anh có mấy người vậy?'},
     {sp:1,zh:'我家有三口人。',py:'Wǒ jiā yǒu sān kǒu rén.',vn:'Nhà tôi có ba người.'},
   ]},
  {scene:'Trong văn phòng · Hỏi tuổi con',
   lines:[
     {sp:0,zh:'你女儿几岁了？',py:"Nǐ nǚ'ér jǐ suì le?",vn:'Con gái của cô mấy tuổi rồi?'},
     {sp:1,zh:'她今年四岁了。',py:'Tā jīnnián sì suì le.',vn:'Năm nay cháu được bốn tuổi rồi.'},
   ]},
  {scene:'Trong văn phòng · Hỏi tuổi người lớn',
   lines:[
     {sp:0,zh:'李老师多大了？',py:'Lǐ lǎoshī duō dà le?',vn:'Cô Lý bao nhiêu tuổi rồi?'},
     {sp:1,zh:'她今年50岁了。',py:'Tā jīnnián wǔshí suì le.',vn:'Năm nay cô ấy 50 tuổi rồi.'},
     {sp:0,zh:'她女儿呢？',py:"Tā nǚ'ér ne?",vn:'Còn con gái cô ấy?'},
     {sp:1,zh:'她女儿今年20岁。',py:"Tā nǚ'ér jīnnián èrshí suì.",vn:'Con gái cô ấy năm nay 20 tuổi.'},
   ]},
];

// Điền từ — thay đổi số liệu/đối tượng so với bài khoá
var fillData = [
  {pre:'Bạn hỏi số thành viên trong gia đình bạn mới quen: “你',blank:'家',post:'有几口人？”',hint:'(nhà, gia đình)',ans:'家'},
  {pre:'Bạn hỏi có bao nhiêu người trong nhà: “你家',blank:'有',post:'几口人？”',hint:'(có)',ans:'有'},
  {pre:'Nhà bạn có 4 người: “我家有四',blank:'口',post:'人。”',hint:'(lượng từ đếm người trong nhà)',ans:'口'},
  {pre:'Bạn giới thiệu con gái mình: “这是我',blank:'女儿',post:'。”',hint:'(con gái)',ans:'女儿'},
  {pre:'Bạn hỏi tuổi một em bé: “她',blank:'几',post:'岁了？”',hint:'(mấy — số nhỏ dưới 10)',ans:'几'},
  {pre:'Bạn hỏi tuổi một người lớn tuổi: “您',blank:'多',post:'大了？”',hint:'(bao nhiêu — hỏi mức độ)',ans:'多'},
  {pre:'Diễn tả tình huống mới (vừa lên tuổi): “她今年五岁',blank:'了',post:'。”',hint:'(trợ từ chỉ sự thay đổi)',ans:'了'},
  {pre:'Nói về thời điểm hiện tại: “去年我十九岁，',blank:'今年',post:'我二十岁。”',hint:'(năm nay)',ans:'今年'},
];

// Sắp xếp — thay đổi số liệu/đối tượng so với bài khoá
var sortData = [
  {words:['你','家','有','几','口','人','？'],ans:'你家有几口人？',audio:'你家有几口人？'},
  {words:['我','家','有','四','口','人','。'],ans:'我家有四口人。',audio:'我家有四口人。'},
  {words:['她','今年','五','岁','了','。'],ans:'她今年五岁了。',audio:'她今年五岁了。'},
  {words:['你','爸爸','多','大','了','？'],ans:'你爸爸多大了？',audio:'你爸爸多大了？'},
  {words:['他','今年','六十','岁','了','。'],ans:'他今年六十岁了。',audio:'他今年六十岁了。'},
  {words:['我','女儿','今年','十','岁','。'],ans:'我女儿今年十岁。',audio:'我女儿今年十岁。'},
];

var matchData = [
  {left:'你家有几口人？',right:'我家有四口人。'},
  {left:'你女儿几岁了？',right:'她今年五岁了。'},
  {left:'你爸爸多大了？',right:'他今年六十岁了。'},
  {left:'她女儿呢？',right:'她女儿今年十岁。'},
  {left:'李老师多大了？',right:'她今年50岁了。'},
];

// Trắc nghiệm — trọng tâm 几/多/了, không audio
var mcData = [
  {q:'你女儿＿＿岁了？(hỏi số nhỏ dưới 10)',opts:['几','多','怎么','什么'],ans:0},
  {q:'你爸爸＿＿大了？(hỏi tuổi người lớn)',opts:['多','几','怎么','什么'],ans:0},
  {q:'"了" đặt cuối câu dùng để biểu thị điều gì?',opts:['sự thay đổi/tình huống mới','sự phủ định','câu hỏi','số nhiều'],ans:0},
  {q:'Số "88" đọc là gì?',opts:['bāshíbā','bāshíèr','bāzhěngbā','shíbā'],ans:0},
  {q:'"大" nghĩa là gì?',opts:['to, lớn','nhỏ, bé','nhiều','ít'],ans:0},
  {q:'"口" trong "三口人" dùng để làm gì?',opts:['lượng từ đếm người trong nhà','động từ ăn uống','danh từ chỉ cái miệng','tính từ chỉ kích thước'],ans:0},
  {q:'"女儿" nghĩa là gì?',opts:['con gái','con trai','cháu gái','em gái'],ans:0},
  {q:'Câu nào dùng ĐÚNG để hỏi tuổi một em bé nhỏ?',opts:['她几岁了？','她多大了？','她几大了？','她多岁了？'],ans:0},
  {q:'"今年" nghĩa là gì?',opts:['năm nay','năm ngoái','năm sau','mỗi năm'],ans:0},
  {q:'"有" nghĩa là gì?',opts:['có','không có','là','muốn'],ans:0},
];

var speakingData = {
  t1:{
    intro:'Nhấn 🔊 nghe từng câu mẫu, đọc to theo cho tới khi trôi chảy.',
    models:[
      {zh:'你家有几口人？',py:'Nǐ jiā yǒu jǐ kǒu rén?',vn:'Nhà anh có mấy người vậy?'},
      {zh:'我家有三口人。',py:'Wǒ jiā yǒu sān kǒu rén.',vn:'Nhà tôi có ba người.'},
      {zh:'你女儿几岁了？',py:"Nǐ nǚ'ér jǐ suì le?",vn:'Con gái của cô mấy tuổi rồi?'},
      {zh:'她今年四岁了。',py:'Tā jīnnián sì suì le.',vn:'Năm nay cháu được bốn tuổi rồi.'},
      {zh:'李老师多大了？',py:'Lǐ lǎoshī duō dà le?',vn:'Cô Lý bao nhiêu tuổi rồi?'},
    ],
  },
  t2:{
    intro:'Dùng khung câu cho sẵn, thay thế phần gạch chân bằng số trong ô gợi ý. Nhấn 🔊 để nghe rồi nói to mỗi câu bạn tạo được.',
    drills:[
      {frame:'我家有＿＿口人。',frame_py:'Wǒ jiā yǒu ___ kǒu rén.',vn:'Nhà tôi có ＿＿ người.',options:['三','四','五'],samples:['我家有三口人。','我家有四口人。','我家有五口人。']},
      {frame:'她今年＿＿岁了。',frame_py:'Tā jīnnián ___ suì le.',vn:'Năm nay cô ấy ＿＿ tuổi rồi.',options:['四','十','二十'],samples:['她今年四岁了。','她今年十岁了。','她今年二十岁了。']},
    ],
  },
  t3:{
    intro:'Không nhìn câu mẫu, hãy tưởng tượng bạn đang ở trong tình huống thực tế và tự nói ra câu phù hợp.',
    tasks:[
      {role:'👨‍👩‍👧 Tình huống 1 — Giới thiệu số người trong gia đình',
       guide:'Có người hỏi thăm gia đình bạn, hãy trả lời có bao nhiêu người.',
       structure:['你家有几口人？','我家有＿＿口人。'],
       sample:'你家有几口人？我家有三口人。',
       sample_vn:'Nhà anh có mấy người vậy? Nhà tôi có ba người.',
       note:'Với gia đình (thường dưới 10 người), luôn dùng 几 để hỏi số lượng — không dùng 多少 (chỉ dùng cho số lớn hơn 10, sẽ học ở bài sau).'},
      {role:'🎂 Tình huống 2 — Hỏi tuổi phù hợp với từng đối tượng',
       guide:'Bạn hỏi tuổi một em bé và một người lớn tuổi trong cùng buổi gặp mặt.',
       structure:['她＿＿岁了？(hỏi em bé)','您＿＿大了？(hỏi người lớn tuổi)'],
       sample:'她几岁了？您多大了？',
       sample_vn:'Cháu mấy tuổi rồi? Ông/bà bao nhiêu tuổi rồi?',
       note:'几岁 chỉ dùng cho TRẺ EM (số tuổi nhỏ); 多大 dùng được cho NGƯỜI LỚN ở mọi độ tuổi. Hỏi người lớn bằng 几岁 dễ bị coi là thiếu tôn trọng.'},
      {role:'📅 Tình huống 3 — Cập nhật tuổi theo năm mới',
       guide:'Đầu năm mới, bạn nói về tuổi của mình năm nay so với năm ngoái.',
       structure:['去年我＿＿岁，今年我＿＿岁了。'],
       sample:'去年我十九岁，今年我二十岁了。',
       sample_vn:'Năm ngoái tôi 19 tuổi, năm nay tôi 20 tuổi rồi.',
       note:'了 xuất hiện ở cuối câu khi có sự THAY ĐỔI vừa xảy ra — "二十岁了" ngụ ý vừa mới bước sang tuổi mới, khác với chỉ nói suông "二十岁".'},
    ],
  },
};
