// ══════════════════════════════════════════
// DATA — YCT Bài 4: 你家有几口人？
// ══════════════════════════════════════════
var vocabData = [
  {n:1,zh:'有',py:'yǒu',pos:'Động từ',vn:'có', hv: 'hữu',em:'✅',lesson:1,
   ex_zh:'我有一个哥哥。',ex_py:'Wǒ yǒu yí ge gēge.',ex_vn:'Mình có một anh trai.',
   exList:[
     {zh:'我有一个哥哥。',py:'Wǒ yǒu yí ge gēge.',vn:'Mình có một anh trai.'},
     {zh:'我有一个姐姐。',py:'Wǒ yǒu yí ge jiějie.',vn:'Tớ có một chị gái.'},
   ],
   hanzi:[
     {c:'有',p:'yǒu',type:'半包围结构 · Bán bao vây',st:6,ord:'ナ(biến thể) → 月(nguyệt) trong',rad:'月 (nguyệt – thịt/trăng)',mean:'có',
      tip:'Bàn tay (ナ) cầm miếng thịt (月) → sở hữu, CÓ trong tay.',
      cf:'肯 (kěn – "bằng lòng")',w:'你家有几口人'},
   ]},
  {n:2,zh:'几',py:'jǐ',pos:'Đại từ',vn:'mấy (hỏi số lượng dưới 10)', hv: 'kỉ',em:'🔢',lesson:1,
   ex_zh:'你有几个妹妹？',ex_py:'Nǐ yǒu jǐ ge mèimei?',ex_vn:'Bạn có mấy em gái?',
   exList:[
     {zh:'你有几个妹妹？',py:'Nǐ yǒu jǐ ge mèimei?',vn:'Bạn có mấy em gái?'},
     {zh:'你有几个哥哥？',py:'Nǐ yǒu jǐ ge gēge?',vn:'Bạn có mấy anh trai?'},
   ],
   hanzi:[
     {c:'几',p:'jǐ',type:'独体字 · Chữ đơn',st:2,ord:'ノ→乙(biến thể)',rad:'几 (kỷ – tự thành bộ)',mean:'mấy',
      tip:'Hình cái ghế nhỏ thời cổ, mượn âm làm từ hỏi số lượng ÍT, dưới 10.',
      cf:'九 (jiǔ – "chín")',w:'几口人'},
   ]},
  {n:3,zh:'口',py:'kǒu',pos:'Lượng từ',vn:'lượng từ đếm người trong nhà', hv: 'khẩu',em:'👄',lesson:1,
   ex_zh:'我家有三口人。',ex_py:'Wǒ jiā yǒu sān kǒu rén.',ex_vn:'Nhà mình có ba người.',
   exList:[
     {zh:'我家有三口人。',py:'Wǒ jiā yǒu sān kǒu rén.',vn:'Nhà mình có ba người.'},
     {zh:'我家有五口人。',py:'Wǒ jiā yǒu wǔ kǒu rén.',vn:'Nhà tớ có năm người.'},
   ],
   hanzi:[
     {c:'口',p:'kǒu',type:'独体字 · Tượng hình',st:3,ord:'丨→𠃌→一',rad:'口 (khẩu – tự thành bộ)',mean:'miệng; lượng từ đếm người',
      tip:'Hình cái miệng cách điệu → MIỆNG; dùng làm lượng từ đếm số người ăn chung một nhà.',
      cf:'日 (rì – "mặt trời")',w:'几口人'},
   ]},
  {n:4,zh:'和',py:'hé',pos:'Liên từ',vn:'và', hv: 'hòa',em:'➕',lesson:1,
   ex_zh:'爸爸和妈妈很高兴。',ex_py:'Bàba hé māma hěn gāoxìng.',ex_vn:'Bố và mẹ rất vui.',
   exList:[
     {zh:'爸爸和妈妈很高兴。',py:'Bàba hé māma hěn gāoxìng.',vn:'Bố và mẹ rất vui.'},
     {zh:'我有一个哥哥和一个妹妹。',py:'Wǒ yǒu yí ge gēge hé yí ge mèimei.',vn:'Tớ có một anh trai và một em gái.'},
   ],
   hanzi:[
     {c:'和',p:'hé',type:'左右结构 · Trái-phải',st:8,ord:'禾(hòa) trái → 口(khẩu) phải',rad:'口 (khẩu – miệng)',mean:'và',
      tip:'禾(lúa, no đủ) + 口(miệng ăn) → mọi người hoà thuận, ghép nối VÀ nhau.',
      cf:'合 (hé – "hợp")',w:'爸爸和妈妈'},
   ]},
  {n:5,zh:'没有',py:'méiyǒu',pos:'Động từ',vn:'không có', hv: 'một hữu',em:'🚫',lesson:2,
   ex_zh:'没有。我有一个妹妹。',ex_py:'Méiyǒu. Wǒ yǒu yí ge mèimei.',ex_vn:'Không có. Mình có một em gái.',
   exList:[{zh:'没有。我有一个妹妹。',py:'Méiyǒu. Wǒ yǒu yí ge mèimei.',vn:'Không có. Mình có một em gái.'},{zh:'我没有哥哥。',py:'Wǒ méiyǒu gēge.',vn:'Tớ không có anh trai.'}],
   hanzi:[
     {c:'没',p:'méi',type:'左右结构 · Trái-phải',st:7,ord:'氵(thuỷ) trái → 殳(biến thể) phải',rad:'氵 (thuỷ – nước)',mean:'không, không có',
      tip:'氵(nước) dâng lên che lấp mọi thứ → mang nghĩa KHÔNG CÒN, KHÔNG CÓ. (有 đã học ở trên)',
      cf:'汉 (hàn – "Hán")',w:'没有'},
   ]},
  {n:6,zh:'个',py:'gè',pos:'Lượng từ',vn:'cái, con (lượng từ dùng chung)', hv: 'cá',em:'🔘',lesson:2,
   ex_zh:'我有一个妹妹。',ex_py:'Wǒ yǒu yí ge mèimei.',ex_vn:'Mình có một em gái.',
   exList:[{zh:'我有一个妹妹。',py:'Wǒ yǒu yí ge mèimei.',vn:'Mình có một em gái.'},{zh:'我有三个妹妹。',py:'Wǒ yǒu sān ge mèimei.',vn:'Tớ có ba em gái.'}],
   hanzi:[
     {c:'个',p:'gè',type:'独体字 · Chữ đơn',st:3,ord:'丿→丨→㇏',rad:'人 (nhân, biến thể)',mean:'cái, con',
      tip:'Hình đơn giản một cá thể đứng riêng lẻ → lượng từ dùng CHUNG.',
      cf:'介 (jiè – "giới thiệu")',w:'一个妹妹'},
   ]},
  {n:7,zh:'爸爸',py:'bàba',pos:'Danh từ',vn:'bố', hv: 'ba ba',em:'👨',lesson:2,
   ex_zh:'我爸爸是老师。',ex_py:'Wǒ bàba shì lǎoshī.',ex_vn:'Bố mình là giáo viên.',
   exList:[
     {zh:'我爸爸是老师。',py:'Wǒ bàba shì lǎoshī.',vn:'Bố mình là giáo viên.'},
     {zh:'爸爸，再见！',py:'Bàba, zàijiàn!',vn:'Con chào bố ạ!'},
   ],
   hanzi:[
     {c:'爸',p:'bà',type:'上下结构 · Trên-dưới',st:8,ord:'父(phụ) trên → 巴(ba) dưới',rad:'父 (phụ – cha)',mean:'cha, bố',
      tip:'父(bàn tay cầm roi dạy dỗ, biểu tượng người cha) + 巴(mượn âm) → tiếng gọi CHA, BỐ.',
      cf:'吧 (ba – "trợ từ ngữ khí")',w:'爸爸'},
   ]},
  {n:8,zh:'妈妈',py:'māma',pos:'Danh từ',vn:'mẹ', hv: 'ma ma',em:'👩',lesson:2,
   ex_zh:'妈妈，再见！',ex_py:'Māma, zàijiàn!',ex_vn:'Con chào mẹ ạ!',
   exList:[
     {zh:'妈妈，再见！',py:'Māma, zàijiàn!',vn:'Con chào mẹ ạ!'},
     {zh:'我妈妈是中国人。',py:'Wǒ māma shì Zhōngguó rén.',vn:'Mẹ tớ là người Trung Quốc.'},
   ],
   hanzi:[
     {c:'妈',p:'mā',type:'左右结构 · Trái-phải',st:6,ord:'女(nữ) trái → 马(mã) phải',rad:'女 (nữ – con gái)',mean:'mẹ',
      tip:'女(nữ giới) + 马(mượn âm) → tiếng gọi thân thương dành cho MẸ.',
      cf:'吗 (ma – "trợ từ hỏi")',w:'妈妈'},
   ]},
  {n:9,zh:'哥哥',py:'gēge',pos:'Danh từ',vn:'anh trai', hv: 'ca ca',em:'👦',lesson:2,
   ex_zh:'四口人，爸爸、妈妈、哥哥和我。',ex_py:'Sì kǒu rén, bàba, māma, gēge hé wǒ.',ex_vn:'Bốn người, bố, mẹ, anh trai và mình.',
   exList:[{zh:'四口人，爸爸、妈妈、哥哥和我。',py:'Sì kǒu rén, bàba, māma, gēge hé wǒ.',vn:'Bốn người, bố, mẹ, anh trai và mình.'},{zh:'我哥哥叫明明。',py:'Wǒ gēge jiào Míngming.',vn:'Anh trai tớ tên là Minh Minh.'}],
   hanzi:[
     {c:'哥',p:'gē',type:'上下结构 · Trên-dưới',st:10,ord:'可(khả,biến thể) trên → 可,口(biến thể) dưới',rad:'口 (khẩu, phần trên)',mean:'anh trai',
      tip:'Hai chữ 口(miệng) chồng lên nhau → hai anh em cùng cất tiếng gọi, người lớn hơn là ANH.',
      cf:'歌 (gē – "bài hát", cùng phần trên")',w:'哥哥'},
   ]},
  {n:10,zh:'姐姐',py:'jiějie',pos:'Danh từ',vn:'chị gái', hv: 'thư thư',em:'👧',lesson:2,
   ex_zh:'你有姐姐吗？',ex_py:'Nǐ yǒu jiějie ma?',ex_vn:'Bạn có chị gái không?',
   exList:[{zh:'你有姐姐吗？',py:'Nǐ yǒu jiějie ma?',vn:'Bạn có chị gái không?'},{zh:'她是我姐姐。',py:'Tā shì wǒ jiějie.',vn:'Bạn ấy là chị gái tớ.'}],
   hanzi:[
     {c:'姐',p:'jiě',type:'左右结构 · Trái-phải',st:8,ord:'女(nữ) trái → 且(thả) phải',rad:'女 (nữ – con gái)',mean:'chị gái',
      tip:'女(nữ giới) + 且(hơn nữa) → người con gái LỚN HƠN trong nhà = CHỊ.',
      cf:'组 (zǔ – "tổ, nhóm")',w:'姐姐'},
   ]},
  {n:11,zh:'妹妹',py:'mèimei',pos:'Danh từ',vn:'em gái', hv: 'muội muội',em:'👶',lesson:2,
   ex_zh:'我妹妹叫甜甜。',ex_py:'Wǒ mèimei jiào Tiántian.',ex_vn:'Em gái mình tên là Điềm Điềm.',
   exList:[
     {zh:'我妹妹叫甜甜。',py:'Wǒ mèimei jiào Tiántian.',vn:'Em gái mình tên là Điềm Điềm.'},
     {zh:'你有妹妹吗？',py:'Nǐ yǒu mèimei ma?',vn:'Bạn có em gái không?'},
   ],
   hanzi:[
     {c:'妹',p:'mèi',type:'左右结构 · Trái-phải',st:8,ord:'女(nữ) trái → 未(vị) phải',rad:'女 (nữ – con gái)',mean:'em gái',
      tip:'女(nữ giới) + 未(chưa) → người con gái CHƯA lớn bằng chị = EM GÁI.',
      cf:'妈 (mā – "mẹ")',w:'妹妹'},
   ]},
  {n:12,zh:'家',py:'jiā',pos:'Danh từ',vn:'nhà, gia đình', hv: 'gia',em:'🏠',lesson:1,
   ex_zh:'你家有几口人？',ex_py:'Nǐ jiā yǒu jǐ kǒu rén?',ex_vn:'Nhà bạn có mấy người?',
   exList:[{zh:'你家有几口人？',py:'Nǐ jiā yǒu jǐ kǒu rén?',vn:'Nhà bạn có mấy người?'},{zh:'我家有爸爸、妈妈和我。',py:'Wǒ jiā yǒu bàba, māma hé wǒ.',vn:'Nhà tớ có bố, mẹ và tớ.'}],
   hanzi:[
     {c:'家',p:'jiā',type:'上下结构 · Trên-dưới',st:10,ord:'宀(miên) trên → 豕(thỉ) dưới',rad:'宀 (miên – mái nhà)',mean:'nhà, gia đình',
      tip:'宀(mái nhà) + 豕(con lợn) → thời xưa nuôi lợn dưới nhà sàn, biểu tượng của NHÀ.',
      cf:'豪 (háo – "hào hiệp")',w:'你家有几口人'},
   ]},
];

var wuData = [
  {img:'👨',label:'爸爸',py:'bàba',letter:'A'},
  {img:'👩',label:'妈妈',py:'māma',letter:'B'},
  {img:'👦',label:'哥哥',py:'gēge',letter:'C'},
  {img:'👧',label:'姐姐',py:'jiějie',letter:'D'},
  {img:'👶',label:'妹妹',py:'mèimei',letter:'E'},
  {img:'🏠',label:'家',py:'jiā',letter:'F'},
];

var dialogData = [
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
var fillData = [
  {pre:'Con khoe với bạn: “Mình có anh trai và chị gái.” — “我',blank:'有',post:'哥哥和姐姐。”',hint:'(có)',ans:'有',exp:'有 = có: 我有哥哥和姐姐.'},
  {pre:'Bạn nói Điềm Điềm có em gái. Con hỏi Điềm Điềm có mấy em gái: “甜甜有',blank:'几',post:'个妹妹？”',hint:'(mấy)',ans:'几',exp:'几 hỏi số lượng nhỏ, đi với lượng từ: 几个妹妹.'},
  {pre:'Nhà Minh Minh có bốn người. Con nói: “明明家有四',blank:'口',post:'人。”',hint:'(lượng từ đếm người trong nhà)',ans:'口',exp:'Đếm số người trong nhà dùng 口: 四口人.'},
  {pre:'Con có một chị gái và một em gái: “我有一个姐姐',blank:'和',post:'一个妹妹。”',hint:'(và)',ans:'和',exp:'和 = và, nối hai người: 一个姐姐和一个妹妹.'},
  {pre:'Bố con là con một, bố không có anh trai: “爸爸',blank:'没有',post:'哥哥。”',hint:'(không có)',ans:'没有',exp:'Phủ định của 有 là 没有 (không nói 不有).'},
  {pre:'Minh Minh có ba chị gái: “明明有三',blank:'个',post:'姐姐。”',hint:'(lượng từ chung)',ans:'个',exp:'Số + 个 + người: 三个姐姐. 口 chỉ dùng khi đếm cả nhà.'},
  {pre:'Minh Minh nói: “Bố mình là người Trung Quốc.” — “我',blank:'爸爸',post:'是中国人。”',hint:'(bố)',ans:'爸爸',exp:'我爸爸 = bố mình; 爸爸 = bố.'},
];

// Sắp xếp — câu hỏi về gia đình
var sortData = [
  {words:['你','家','有','几','口','人','？'],ans:'你家有几口人？',audio:'你家有几口人？'},
  {words:['妈妈','有','一','个','哥哥','。'],ans:'妈妈有一个哥哥。',audio:'妈妈有一个哥哥。'},
  {words:['哥哥','和','姐姐','是','老师','。'],ans:'哥哥和姐姐是老师。',audio:'哥哥和姐姐是老师。'},
  {words:['谁','是','你','姐姐','？'],ans:'谁是你姐姐？',audio:'谁是你姐姐？'},
  {words:['他','是','我','哥哥','。'],ans:'他是我哥哥。',audio:'他是我哥哥。'},
];

var matchData = [
  {left:'你家有几口人？',right:'三口人。'},
  {left:'你有妹妹吗？',right:'没有。'},
  {left:'他是谁？',right:'他是我爸爸。'},
  {left:'你有几个姐姐？',right:'一个。'},
  {left:'谁是你妈妈？',right:'她是我妈妈。'},
  {left:'你哥哥是老师吗？',right:'不是。'},
];

// Trắc nghiệm — không audio
var mcData = [
  {q:'Bạn mới hỏi nhà con có mấy người. Nhà con có bố, mẹ và con. Con đáp:',opts:['三口人。','三个口人。','三人口。','口三人。'],ans:0,exp:'Số + 口 + 人: 三口人. Không thêm 个 vào trước 口.'},
  {q:'Bạn hỏi con có chị gái không. Con không có chị gái. Con đáp:',opts:['我没有姐姐。','我不有姐姐。','我有不姐姐。','我不是有姐姐。'],ans:0,exp:'Phủ định của 有 luôn là 没有: 我没有姐姐. Nói 不有 là lỗi rất hay gặp.'},
  {q:'Con muốn nói: “Bố và mẹ mình là người Trung Quốc.”',opts:['爸爸和妈妈是中国人。','爸爸妈妈和是中国人。','和爸爸妈妈是中国人。','爸爸和妈妈中国人。'],ans:0,exp:'和 đứng giữa hai người: 爸爸和妈妈; câu cần 是.'},
  {q:'Con muốn hỏi bạn: “Bạn có mấy chị gái?”',opts:['你有几个姐姐？','你有几姐姐？','你有什么姐姐？','你几个有姐姐？'],ans:0,exp:'几 + 个 + 姐姐: 几 phải đi cùng lượng từ 个.'},
  {q:'Bạn hỏi con có anh trai không. Con có một anh trai. Con đáp:',opts:['有，一个哥哥。','有，一口哥哥。','是，一个哥哥。','没有，一个哥哥。'],ans:0,exp:'Đáp "có" bằng 有 (không dùng 是); đếm anh chị em dùng 个, 口 chỉ dùng trong 几口人.'},
  {q:'Mẹ chỉ ảnh một cô gái, hỏi đó là ai. Đó là chị gái con. Con đáp:',opts:['她是我姐姐。','他是我姐姐。','她是姐姐我。','她我是姐姐。'],ans:0,exp:'Chị gái là nữ → 她; trật tự: 她 + 是 + 我姐姐.'},
];

var speakingData = {
  t1:{
    intro:'Nhấn nút loa nghe từng câu mẫu, đọc to theo cho tới khi trôi chảy nhé!',
    models:[
      {zh:'你有姐姐吗？',py:'Nǐ yǒu jiějie ma?',vn:'Bạn có chị gái không?'},
      {zh:'没有。我有一个妹妹。',py:'Méiyǒu. Wǒ yǒu yí ge mèimei.',vn:'Không có. Mình có một em gái.'},
      {zh:'四口人，爸爸、妈妈、哥哥和我。',py:'Sì kǒu rén, bàba, māma, gēge hé wǒ.',vn:'Bốn người, bố, mẹ, anh trai và mình.'},
    ],
  },
  t2:{
    intro:'Dùng khung câu cho sẵn, thay thế phần gạch chân bằng từ trong ô gợi ý. Nhấn nút loa để nghe rồi nói to mỗi câu con tạo được.',
    drills:[
      {frame:'我有＿＿。',frame_py:'Wǒ yǒu ___.',vn:'Mình có ＿＿.',options:['姐姐','妹妹'],samples:['我有姐姐。','我有妹妹。']},
    ],
  },
  t3:{
    intro:'Không nhìn câu mẫu, con hãy tưởng tượng mình đang ở trong tình huống thật và tự nói câu phù hợp nhé!',
    tasks:[
      {role:'👨‍👩‍👧‍👦 Tình huống 1 — Giới thiệu gia đình mình',
       guide:'Bạn hỏi nhà con có mấy người. Con trả lời số người và kể tên từng người.',
       structure:['……口人，……和我。'],
       sample:'五口人，爸爸、妈妈、姐姐、妹妹和我。',
       sample_vn:'Năm người: bố, mẹ, chị gái, em gái và mình.',
       note:'Kể nhiều người thì ngăn bằng dấu 、, chỉ dùng 和 trước người cuối cùng.'},
      {role:'👦 Tình huống 2 — Có anh chị em không?',
       guide:'Bạn hỏi con có chị gái không. Con không có chị gái, nhưng con có anh trai.',
       structure:['没有，我有……'],
       sample:'没有，我有哥哥。',
       sample_vn:'Không có, mình có anh trai.',
       note:'Trả lời "không có" bằng 没有, "có" bằng 有.'},
    ],
  },
};

// ══════════════════════════════════════════
// LUYỆN DỊCH (Việt→Trung) — câu ví dụ của chính bài này
// ══════════════════════════════════════════
var translateData = [
  {vi:"Mình có bố, mẹ và một chị gái.", zh:"我有爸爸、妈妈和一个姐姐。", py:"Wǒ yǒu bàba, māma hé yí ge jiějie."},
  {vi:"Mẹ và mình là người Trung Quốc.", zh:"妈妈和我是中国人。", py:"Māma hé wǒ shì Zhōngguó rén."},
];

// ══════════════════════════════════════════
// LUYỆN DỊCH (Trung→Việt) — lời thoại trong bài, khác chiều Việt→Trung
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:"Nhà bạn có anh trai không?", zh:"你家有哥哥吗？", py:"Nǐ jiā yǒu gēge ma?"},
  {vi:"Mẹ ơi, con có một người chị rất tốt!", zh:"妈妈，我有一个好姐姐！", py:"Māma, wǒ yǒu yí ge hǎo jiějie!"},
];

// ══════════════════════════════════════════
// LUYỆN NGHE — đoạn nghe ngắn (đọc bằng giọng máy), chỉ dùng từ đã học
// ══════════════════════════════════════════
var listenData = [
  {audio:'我家有六口人，爸爸、妈妈、哥哥、妹妹、姐姐和我。',
   questions:[
     {q:'Nhà bạn nhỏ có mấy người?',opts:['4','6','5'],ans:1,exp:'六口人 = sáu người.'},
     {q:'Bạn nhỏ có em gái không?',opts:['Có','Không','Không nói'],ans:0,exp:'Trong đoạn nghe có 妹妹 (em gái).'},
   ]},
  {audio:'甜甜没有妹妹，她有一个姐姐。',
   questions:[
     {q:'Điềm Điềm có ai?',opts:['Em gái','Anh trai','Chị gái'],ans:2,exp:'她有一个姐姐 = bạn ấy có một chị gái; 没有妹妹 = không có em gái.'},
   ]},
  {audio:'我妈妈是老师，我爸爸不是老师。',
   questions:[
     {q:'Ai là giáo viên?',opts:['Bố','Cả bố và mẹ','Mẹ'],ans:2,exp:'我妈妈是老师 = mẹ là giáo viên; 爸爸不是老师 = bố không phải.'},
   ]},
  {audio:'谁有妹妹？我有！',
   questions:[
     {q:'Người nói đầu tiên hỏi gì?',opts:['Ai có em gái','Em gái tên là gì','Nhà có mấy người'],ans:0,exp:'谁有妹妹 = ai có em gái.'},
   ]},
];
