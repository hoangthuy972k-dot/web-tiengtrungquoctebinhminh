// ══════════════════════════════════════════
// DATA — YCT Bài 4: 你家有几口人？
// ══════════════════════════════════════════
const vocabData = [
  {n:1,zh:'有',py:'yǒu',pos:'Động từ',vn:'có',em:'✅',lesson:1,
   ex_zh:'你家有几口人？',ex_py:'Nǐ jiā yǒu jǐ kǒu rén?',ex_vn:'Nhà bạn có mấy người?',
   exList:[{zh:'你家有几口人？',py:'Nǐ jiā yǒu jǐ kǒu rén?',vn:'Nhà bạn có mấy người?'}],
   hanzi:[
     {c:'有',p:'yǒu',type:'半包围结构 · Bán bao vây',st:6,ord:'ナ(biến thể) → 月(nguyệt) trong',rad:'月 (nguyệt – thịt/trăng)',mean:'có',
      tip:'Bàn tay (ナ) cầm miếng thịt (月) → sở hữu, CÓ trong tay.',
      cf:'肯 (kěn – "bằng lòng")',w:'你家有几口人'},
   ]},
  {n:2,zh:'几',py:'jǐ',pos:'Đại từ',vn:'mấy (hỏi số lượng dưới 10)',em:'🔢',lesson:1,
   ex_zh:'你家有几口人？',ex_py:'Nǐ jiā yǒu jǐ kǒu rén?',ex_vn:'Nhà bạn có mấy người?',
   exList:[{zh:'你家有几口人？',py:'Nǐ jiā yǒu jǐ kǒu rén?',vn:'Nhà bạn có mấy người?'}],
   hanzi:[
     {c:'几',p:'jǐ',type:'独体字 · Chữ đơn',st:2,ord:'ノ→乙(biến thể)',rad:'几 (kỷ – tự thành bộ)',mean:'mấy',
      tip:'Hình cái ghế nhỏ thời cổ, mượn âm làm từ hỏi số lượng ÍT, dưới 10.',
      cf:'九 (jiǔ – "chín")',w:'几口人'},
   ]},
  {n:3,zh:'口',py:'kǒu',pos:'Lượng từ',vn:'lượng từ đếm người trong nhà',em:'👄',lesson:1,
   ex_zh:'四口人，爸爸、妈妈、哥哥和我。',ex_py:'Sì kǒu rén, bàba, māma, gēge hé wǒ.',ex_vn:'Bốn người, bố, mẹ, anh trai và mình.',
   exList:[{zh:'四口人，爸爸、妈妈、哥哥和我。',py:'Sì kǒu rén, bàba, māma, gēge hé wǒ.',vn:'Bốn người, bố, mẹ, anh trai và mình.'}],
   hanzi:[
     {c:'口',p:'kǒu',type:'独体字 · Tượng hình',st:3,ord:'丨→𠃌→一',rad:'口 (khẩu – tự thành bộ)',mean:'miệng; lượng từ đếm người',
      tip:'Hình cái miệng cách điệu → MIỆNG; dùng làm lượng từ đếm số người ăn chung một nhà.',
      cf:'日 (rì – "mặt trời")',w:'几口人'},
   ]},
  {n:4,zh:'和',py:'hé',pos:'Liên từ',vn:'và',em:'➕',lesson:1,
   ex_zh:'四口人，爸爸、妈妈、哥哥和我。',ex_py:'Sì kǒu rén, bàba, māma, gēge hé wǒ.',ex_vn:'Bốn người, bố, mẹ, anh trai và mình.',
   exList:[{zh:'四口人，爸爸、妈妈、哥哥和我。',py:'Sì kǒu rén, bàba, māma, gēge hé wǒ.',vn:'Bốn người, bố, mẹ, anh trai và mình.'}],
   hanzi:[
     {c:'和',p:'hé',type:'左右结构 · Trái-phải',st:8,ord:'禾(hòa) trái → 口(khẩu) phải',rad:'口 (khẩu – miệng)',mean:'và',
      tip:'禾(lúa, no đủ) + 口(miệng ăn) → mọi người hoà thuận, ghép nối VÀ nhau.',
      cf:'合 (hé – "hợp")',w:'爸爸和妈妈'},
   ]},
  {n:5,zh:'没有',py:'méiyǒu',pos:'Động từ',vn:'không có',em:'🚫',lesson:2,
   ex_zh:'没有。我有一个妹妹。',ex_py:'Méiyǒu. Wǒ yǒu yí ge mèimei.',ex_vn:'Không có. Mình có một em gái.',
   exList:[{zh:'没有。我有一个妹妹。',py:'Méiyǒu. Wǒ yǒu yí ge mèimei.',vn:'Không có. Mình có một em gái.'}],
   hanzi:[
     {c:'没',p:'méi',type:'左右结构 · Trái-phải',st:7,ord:'氵(thuỷ) trái → 殳(biến thể) phải',rad:'氵 (thuỷ – nước)',mean:'không, không có',
      tip:'氵(nước) dâng lên che lấp mọi thứ → mang nghĩa KHÔNG CÒN, KHÔNG CÓ. (有 đã học ở trên)',
      cf:'汉 (hàn – "Hán")',w:'没有'},
   ]},
  {n:6,zh:'个',py:'ge',pos:'Lượng từ',vn:'cái, con (lượng từ dùng chung)',em:'🔘',lesson:2,
   ex_zh:'我有一个妹妹。',ex_py:'Wǒ yǒu yí ge mèimei.',ex_vn:'Mình có một em gái.',
   exList:[{zh:'我有一个妹妹。',py:'Wǒ yǒu yí ge mèimei.',vn:'Mình có một em gái.'}],
   hanzi:[
     {c:'个',p:'ge',type:'独体字 · Chữ đơn',st:3,ord:'丿→丨→㇏',rad:'人 (nhân, biến thể)',mean:'cái, con',
      tip:'Hình đơn giản một cá thể đứng riêng lẻ → lượng từ dùng CHUNG.',
      cf:'介 (jiè – "giới thiệu")',w:'一个妹妹'},
   ]},
  {n:7,zh:'爸爸',py:'bàba',pos:'Danh từ',vn:'bố',em:'👨',lesson:2,
   ex_zh:'四口人，爸爸、妈妈、哥哥和我。',ex_py:'Sì kǒu rén, bàba, māma, gēge hé wǒ.',ex_vn:'Bốn người, bố, mẹ, anh trai và mình.',
   exList:[{zh:'四口人，爸爸、妈妈、哥哥和我。',py:'Sì kǒu rén, bàba, māma, gēge hé wǒ.',vn:'Bốn người, bố, mẹ, anh trai và mình.'}],
   hanzi:[
     {c:'爸',p:'bà',type:'上下结构 · Trên-dưới',st:8,ord:'父(phụ) trên → 巴(ba) dưới',rad:'父 (phụ – cha)',mean:'cha, bố',
      tip:'父(bàn tay cầm roi dạy dỗ, biểu tượng người cha) + 巴(mượn âm) → tiếng gọi CHA, BỐ.',
      cf:'吧 (ba – "trợ từ ngữ khí")',w:'爸爸'},
   ]},
  {n:8,zh:'妈妈',py:'māma',pos:'Danh từ',vn:'mẹ',em:'👩',lesson:2,
   ex_zh:'四口人，爸爸、妈妈、哥哥和我。',ex_py:'Sì kǒu rén, bàba, māma, gēge hé wǒ.',ex_vn:'Bốn người, bố, mẹ, anh trai và mình.',
   exList:[{zh:'四口人，爸爸、妈妈、哥哥和我。',py:'Sì kǒu rén, bàba, māma, gēge hé wǒ.',vn:'Bốn người, bố, mẹ, anh trai và mình.'}],
   hanzi:[
     {c:'妈',p:'mā',type:'左右结构 · Trái-phải',st:6,ord:'女(nữ) trái → 马(mã) phải',rad:'女 (nữ – con gái)',mean:'mẹ',
      tip:'女(nữ giới) + 马(mượn âm) → tiếng gọi thân thương dành cho MẸ.',
      cf:'吗 (ma – "trợ từ hỏi")',w:'妈妈'},
   ]},
  {n:9,zh:'哥哥',py:'gēge',pos:'Danh từ',vn:'anh trai',em:'👦',lesson:2,
   ex_zh:'四口人，爸爸、妈妈、哥哥和我。',ex_py:'Sì kǒu rén, bàba, māma, gēge hé wǒ.',ex_vn:'Bốn người, bố, mẹ, anh trai và mình.',
   exList:[{zh:'四口人，爸爸、妈妈、哥哥和我。',py:'Sì kǒu rén, bàba, māma, gēge hé wǒ.',vn:'Bốn người, bố, mẹ, anh trai và mình.'}],
   hanzi:[
     {c:'哥',p:'gē',type:'上下结构 · Trên-dưới',st:10,ord:'可(khả,biến thể) trên → 可,口(biến thể) dưới',rad:'口 (khẩu, phần trên)',mean:'anh trai',
      tip:'Hai chữ 口(miệng) chồng lên nhau → hai anh em cùng cất tiếng gọi, người lớn hơn là ANH.',
      cf:'歌 (gē – "bài hát", cùng phần trên")',w:'哥哥'},
   ]},
  {n:10,zh:'姐姐',py:'jiějie',pos:'Danh từ',vn:'chị gái',em:'👧',lesson:2,
   ex_zh:'你有姐姐吗？',ex_py:'Nǐ yǒu jiějie ma?',ex_vn:'Bạn có chị gái không?',
   exList:[{zh:'你有姐姐吗？',py:'Nǐ yǒu jiějie ma?',vn:'Bạn có chị gái không?'}],
   hanzi:[
     {c:'姐',p:'jiě',type:'左右结构 · Trái-phải',st:8,ord:'女(nữ) trái → 且(thả) phải',rad:'女 (nữ – con gái)',mean:'chị gái',
      tip:'女(nữ giới) + 且(hơn nữa) → người con gái LỚN HƠN trong nhà = CHỊ.',
      cf:'组 (zǔ – "tổ, nhóm")',w:'姐姐'},
   ]},
  {n:11,zh:'妹妹',py:'mèimei',pos:'Danh từ',vn:'em gái',em:'👶',lesson:2,
   ex_zh:'我有一个妹妹。',ex_py:'Wǒ yǒu yí ge mèimei.',ex_vn:'Mình có một em gái.',
   exList:[{zh:'我有一个妹妹。',py:'Wǒ yǒu yí ge mèimei.',vn:'Mình có một em gái.'}],
   hanzi:[
     {c:'妹',p:'mèi',type:'左右结构 · Trái-phải',st:8,ord:'女(nữ) trái → 未(vị) phải',rad:'女 (nữ – con gái)',mean:'em gái',
      tip:'女(nữ giới) + 未(chưa) → người con gái CHƯA lớn bằng chị = EM GÁI.',
      cf:'妈 (mā – "mẹ")',w:'妹妹'},
   ]},
  {n:12,zh:'家',py:'jiā',pos:'Danh từ',vn:'nhà, gia đình',em:'🏠',lesson:1,
   ex_zh:'你家有几口人？',ex_py:'Nǐ jiā yǒu jǐ kǒu rén?',ex_vn:'Nhà bạn có mấy người?',
   exList:[{zh:'你家有几口人？',py:'Nǐ jiā yǒu jǐ kǒu rén?',vn:'Nhà bạn có mấy người?'}],
   hanzi:[
     {c:'家',p:'jiā',type:'上下结构 · Trên-dưới',st:10,ord:'宀(miên) trên → 豕(thỉ) dưới',rad:'宀 (miên – mái nhà)',mean:'nhà, gia đình',
      tip:'宀(mái nhà) + 豕(con lợn) → thời xưa nuôi lợn dưới nhà sàn, biểu tượng của NHÀ.',
      cf:'豪 (háo – "hào hiệp")',w:'你家有几口人'},
   ]},
];

const wuData = [
  {img:'👨',label:'爸爸',py:'bàba',letter:'A'},
  {img:'👩',label:'妈妈',py:'māma',letter:'B'},
  {img:'👦',label:'哥哥',py:'gēge',letter:'C'},
  {img:'👧',label:'姐姐',py:'jiějie',letter:'D'},
  {img:'👶',label:'妹妹',py:'mèimei',letter:'E'},
  {img:'🏠',label:'家',py:'jiā',letter:'F'},
];

const dialogData = [
  {scene:'Hỏi về gia đình',
   lines:[
     {sp:0,zh:'你家有几口人？',py:'Nǐ jiā yǒu jǐ kǒu rén?',vn:'Nhà bạn có mấy người?'},
     {sp:1,zh:'四口人，爸爸、妈妈、哥哥和我。',py:'Sì kǒu rén, bàba, māma, gēge hé wǒ.',vn:'Bốn người, bố, mẹ, anh trai và mình.'},
   ]},
  {scene:'Hỏi về chị em',
   lines:[
     {sp:0,zh:'你有姐姐吗？',py:'Nǐ yǒu jiějie ma?',vn:'Bạn có chị gái không?'},
     {sp:1,zh:'没有。我有一个妹妹。',py:'Méiyǒu. Wǒ yǒu yí ge mèimei.',vn:'Không có. Mình có một em gái.'},
   ]},
  {scene:'Giới thiệu gia đình bạn',
   lines:[
     {sp:0,zh:'你家有几口人？',py:'Nǐ jiā yǒu jǐ kǒu rén?',vn:'Nhà bạn có mấy người?'},
     {sp:1,zh:'三口人，爸爸、妈妈和我。',py:'Sān kǒu rén, bàba, māma hé wǒ.',vn:'Ba người, bố, mẹ và mình.'},
   ]},
];

// Điền từ — tình huống hỏi về gia đình
const fillData = [
  {pre:'Con hỏi nhà bạn có mấy người: “你家',blank:'有',post:'几口人？”',hint:'(có)',ans:'有'},
  {pre:'Con hỏi số lượng dưới 10: “你家有',blank:'几',post:'口人？”',hint:'(mấy)',ans:'几'},
  {pre:'Con đếm số người trong nhà: “四',blank:'口',post:'人”',hint:'(lượng từ đếm người)',ans:'口'},
  {pre:'Con nối bố và mẹ: “爸爸',blank:'和',post:'妈妈”',hint:'(và)',ans:'和'},
  {pre:'Con nói mình không có chị gái: “我',blank:'没有',post:'姐姐。”',hint:'(không có)',ans:'没有'},
  {pre:'Con nói mình có một em gái: “我有一',blank:'个',post:'妹妹。”',hint:'(cái, con)',ans:'个'},
  {pre:'Con giới thiệu người trong ảnh: “这是我',blank:'爸爸',post:'。”',hint:'(bố)',ans:'爸爸'},
  {pre:'Con giới thiệu nhà mình: “我',blank:'家',post:'有三口人。”',hint:'(nhà, gia đình)',ans:'家'},
];

// Sắp xếp — câu hỏi về gia đình
const sortData = [
  {words:['你','家','有','几','口','人','？'],ans:'你家有几口人？',audio:'你家有几口人？'},
  {words:['四','口','人','，','爸爸','、','妈妈','、','哥哥','和','我','。'],ans:'四口人，爸爸、妈妈、哥哥和我。',audio:'四口人，爸爸、妈妈、哥哥和我。'},
  {words:['你','有','姐姐','吗','？'],ans:'你有姐姐吗？',audio:'你有姐姐吗？'},
  {words:['我','没有','姐姐','。'],ans:'我没有姐姐。',audio:'我没有姐姐。'},
  {words:['我','有','一','个','妹妹','。'],ans:'我有一个妹妹。',audio:'我有一个妹妹。'},
  {words:['三','口','人','，','爸爸','、','妈妈','和','我','。'],ans:'三口人，爸爸、妈妈和我。',audio:'三口人，爸爸、妈妈和我。'},
];

const matchData = [
  {left:'你家有几口人？',right:'四口人，爸爸、妈妈、哥哥和我。'},
  {left:'你有姐姐吗？',right:'没有。我有一个妹妹。'},
  {left:'谁是你哥哥？',right:'他是我哥哥。'},
  {left:'你家有妹妹吗？',right:'有，我有一个妹妹。'},
  {left:'你家有几口人？',right:'三口人，爸爸、妈妈和我。'},
];

// Trắc nghiệm — không audio
const mcData = [
  {q:'你家＿＿几口人？(có)',opts:['有','是','叫','在'],ans:0},
  {q:'你家有＿＿口人？(mấy — số nhỏ)',opts:['几','什么','哪','谁'],ans:0},
  {q:'"没有" nghĩa là gì?',opts:['không có','có','muốn có','sẽ có'],ans:0},
  {q:'"和" nghĩa là gì?',opts:['và','hoặc','nhưng','vì'],ans:0},
  {q:'"哥哥" nghĩa là gì?',opts:['anh trai','em trai','chị gái','em gái'],ans:0},
  {q:'"姐姐" nghĩa là gì?',opts:['chị gái','em gái','anh trai','em trai'],ans:0},
  {q:'"妹妹" nghĩa là gì?',opts:['em gái','chị gái','em trai','anh trai'],ans:0},
  {q:'"口" trong "几口人" dùng để làm gì?',opts:['lượng từ đếm người trong nhà','danh từ chỉ miệng','động từ ăn uống','tính từ'],ans:0},
  {q:'"家" nghĩa là gì?',opts:['nhà, gia đình','trường học','cửa hàng','công viên'],ans:0},
  {q:'Lượng từ nào dùng chung cho hầu hết đồ vật/con vật?',opts:['个','口','和','有'],ans:0},
];

const speakingData = {
  t1:{
    intro:'Nhấn 🔊 nghe từng câu mẫu, đọc to theo cho tới khi trôi chảy nhé!',
    models:[
      {zh:'你家有几口人？',py:'Nǐ jiā yǒu jǐ kǒu rén?',vn:'Nhà bạn có mấy người?'},
      {zh:'四口人，爸爸、妈妈、哥哥和我。',py:'Sì kǒu rén, bàba, māma, gēge hé wǒ.',vn:'Bốn người, bố, mẹ, anh trai và mình.'},
      {zh:'你有姐姐吗？',py:'Nǐ yǒu jiějie ma?',vn:'Bạn có chị gái không?'},
      {zh:'没有。我有一个妹妹。',py:'Méiyǒu. Wǒ yǒu yí ge mèimei.',vn:'Không có. Mình có một em gái.'},
      {zh:'三口人，爸爸、妈妈和我。',py:'Sān kǒu rén, bàba, māma hé wǒ.',vn:'Ba người, bố, mẹ và mình.'},
    ],
  },
  t2:{
    intro:'Dùng khung câu cho sẵn, thay thế phần gạch chân bằng từ trong ô gợi ý. Nhấn 🔊 để nghe rồi nói to mỗi câu con tạo được.',
    drills:[
      {frame:'我家有＿＿口人。',frame_py:'Wǒ jiā yǒu ___ kǒu rén.',vn:'Nhà mình có ＿＿ người.',options:['三','四','五'],samples:['我家有三口人。','我家有四口人。','我家有五口人。']},
    ],
  },
  t3:{
    intro:'Không nhìn câu mẫu, con hãy tưởng tượng mình đang ở trong tình huống thật và tự nói câu phù hợp nhé!',
    tasks:[
      {role:'👨‍👩‍👧‍👦 Tình huống 1 — Giới thiệu gia đình mình',
       guide:'Có bạn hỏi thăm gia đình con, hãy trả lời có bao nhiêu người và gồm những ai.',
       structure:['你家有几口人？','＿＿口人，爸爸、妈妈和我。'],
       sample:'你家有几口人？三口人，爸爸、妈妈和我。',
       sample_vn:'Nhà bạn có mấy người? Ba người, bố, mẹ và mình.',
       note:'Khi kể tên các thành viên trong nhà, dùng dấu 、để liệt kê, và 和 chỉ dùng để nối HAI THÀNH VIÊN CUỐI CÙNG trong danh sách.'},
      {role:'👧 Tình huống 2 — Hỏi thăm anh chị em',
       guide:'Con muốn biết bạn mình có chị gái hay em gái không.',
       structure:['你有姐姐吗？','没有，我有一个＿＿。'],
       sample:'你有姐姐吗？没有，我有一个妹妹。',
       sample_vn:'Bạn có chị gái không? Không có, mình có một em gái.',
       note:'没有 dùng để phủ định "có" — khác với 不, chỉ dùng được với động từ 有 chứ không dùng cho các động từ khác.'},
      {role:'🔢 Tình huống 3 — Đếm số người trong nhà',
       guide:'Con đếm và nói cho bạn nghe nhà mình có bao nhiêu người.',
       structure:['你家有几口人？','我家有＿＿口人。'],
       sample:'你家有几口人？我家有四口人。',
       sample_vn:'Nhà bạn có mấy người? Nhà mình có bốn người.',
       note:'口 CHỈ dùng để đếm người trong gia đình — với hầu hết đồ vật, con vật khác con dùng 个.'},
    ],
  },
};
