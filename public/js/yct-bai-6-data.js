// ══════════════════════════════════════════
// DATA — YCT Bài 6: 我的头发很长
// ══════════════════════════════════════════
const vocabData = [
  {n:1,zh:'头发',py:'tóufa',pos:'Danh từ',vn:'tóc',em:'💇',lesson:1,
   ex_zh:'妹妹的头发不长。',ex_py:'Mèimei de tóufa bù cháng.',ex_vn:'Tóc em gái mình không dài.',
   exList:[{zh:'妹妹的头发不长。',py:'Mèimei de tóufa bù cháng.',vn:'Tóc em gái mình không dài.'}],
   hanzi:[
     {c:'头',p:'tóu',type:'独体字 · Tượng hình',st:5,ord:'亠→大(biến thể)→丶',rad:'大 (đại, biến thể)',mean:'đầu',
      tip:'Hình cái đầu người cách điệu → ĐẦU.',
      cf:'实 (shí – "thực")',w:'头发'},
     {c:'发',p:'fà',type:'独体字 · Chữ đơn',st:5,ord:'𠂉→𠂉→又(biến thể)',rad:'又 (hựu, biến thể)',mean:'tóc (trong 头发)',
      tip:'Hình bàn tay vuốt mái tóc → TÓC.',
      cf:'友 (yǒu – "bạn bè")',w:'头发'},
   ]},
  {n:2,zh:'长',py:'cháng',pos:'Tính từ',vn:'dài',em:'📏',lesson:1,
   ex_zh:'妹妹的头发不长。',ex_py:'Mèimei de tóufa bù cháng.',ex_vn:'Tóc em gái mình không dài.',
   exList:[{zh:'妹妹的头发不长。',py:'Mèimei de tóufa bù cháng.',vn:'Tóc em gái mình không dài.'}],
   hanzi:[
     {c:'长',p:'cháng',type:'独体字 · Tượng hình',st:4,ord:'丿→𠃌→一→乚',rad:'长 (trường – tự thành bộ)',mean:'dài',
      tip:'Hình mái tóc dài bay trong gió (chữ cổ) → DÀI.',
      cf:'常 (cháng – "thường xuyên")',w:'头发长'},
   ]},
  {n:3,zh:'鼻子',py:'bízi',pos:'Danh từ',vn:'mũi',em:'👃',lesson:1,
   ex_zh:'你的鼻子真长！',ex_py:'Nǐ de bízi zhēn cháng!',ex_vn:'Mũi bạn dài thật!',
   exList:[{zh:'你的鼻子真长！',py:'Nǐ de bízi zhēn cháng!',vn:'Mũi bạn dài thật!'}],
   hanzi:[
     {c:'鼻',p:'bí',type:'上下结构 · Trên-dưới',st:14,ord:'自(tự) trên → 畀(biến thể) dưới',rad:'自 (tự – nghĩa gốc là mũi)',mean:'mũi',
      tip:'自(hình cái mũi, nghĩa gốc của 自) + 畀(mượn âm) → MŨI.',
      cf:'自 (zì – "tự mình", nghĩa gốc là mũi")',w:'鼻子'},
     {c:'子',p:'zi',type:'独体字 · Tượng hình',st:3,ord:'了→一',rad:'子 (tử – tự thành bộ)',mean:'con; hậu tố danh từ',
      tip:'Hình đứa trẻ mới sinh → CON; dùng làm hậu tố cho nhiều danh từ (鼻子, 个子...).',
      cf:'孑 (jié – "cô độc")',w:'鼻子 / 个子'},
   ]},
  {n:4,zh:'耳朵',py:'ěrduo',pos:'Danh từ',vn:'tai',em:'👂',lesson:1,
   ex_zh:'妹妹的耳朵很小。',ex_py:'Mèimei de ěrduo hěn xiǎo.',ex_vn:'Tai em gái mình rất nhỏ.',
   exList:[{zh:'妹妹的耳朵很小。',py:'Mèimei de ěrduo hěn xiǎo.',vn:'Tai em gái mình rất nhỏ.'}],
   hanzi:[
     {c:'耳',p:'ěr',type:'独体字 · Tượng hình',st:6,ord:'一→𠃌→三(biến thể)',rad:'耳 (nhĩ – tự thành bộ)',mean:'tai',
      tip:'Hình cái tai người cách điệu → TAI.',
      cf:'取 (qǔ – "lấy")',w:'耳朵'},
     {c:'朵',p:'duo',type:'上下结构 · Trên-dưới',st:6,ord:'几(biến thể) trên → 木(mộc) dưới',rad:'木 (mộc – gỗ, phần dưới)',mean:'bông, đoá',
      tip:'Hình bông hoa trên cành cây → ĐOÁ HOA; ghép với 耳 chỉ hình dáng TAI như đoá hoa.',
      cf:'杂 (zá – "tạp, lẫn")',w:'耳朵'},
   ]},
  {n:5,zh:'眼睛',py:'yǎnjing',pos:'Danh từ',vn:'mắt',em:'👀',lesson:1,
   ex_zh:'妹妹的眼睛很小。',ex_py:'Mèimei de yǎnjing hěn xiǎo.',ex_vn:'Mắt em gái mình rất nhỏ.',
   exList:[{zh:'妹妹的眼睛很小。',py:'Mèimei de yǎnjing hěn xiǎo.',vn:'Mắt em gái mình rất nhỏ.'}],
   hanzi:[
     {c:'眼',p:'yǎn',type:'左右结构 · Trái-phải',st:11,ord:'目(mục) trái → 艮(cấn) phải',rad:'目 (mục – mắt)',mean:'mắt',
      tip:'目(mắt) + 艮(nhìn chăm chú) → bộ phận để NHÌN = MẮT.',
      cf:'银 (yín – "bạc")',w:'眼睛'},
     {c:'睛',p:'jīng',type:'左右结构 · Trái-phải',st:13,ord:'目(mục) trái → 青(thanh) phải',rad:'目 (mục – mắt)',mean:'con ngươi, mắt',
      tip:'目(mắt) + 青(xanh trong) → tròng mắt trong xanh = CON NGƯƠI.',
      cf:'晴 (qíng – "trời quang")',w:'眼睛'},
   ]},
  {n:6,zh:'小',py:'xiǎo',pos:'Tính từ',vn:'nhỏ, bé',em:'🔹',lesson:1,
   ex_zh:'妹妹的眼睛很小。',ex_py:'Mèimei de yǎnjing hěn xiǎo.',ex_vn:'Mắt em gái mình rất nhỏ.',
   exList:[{zh:'妹妹的眼睛很小。',py:'Mèimei de yǎnjing hěn xiǎo.',vn:'Mắt em gái mình rất nhỏ.'}],
   hanzi:[
     {c:'小',p:'xiǎo',type:'独体字 · Tượng hình',st:3,ord:'丨→𠂇→丶',rad:'小 (tiểu – tự thành bộ)',mean:'nhỏ, bé',
      tip:'Hình ba hạt cát nhỏ li ti → NHỎ, BÉ.',
      cf:'少 (shǎo – "ít")',w:'眼睛小'},
   ]},
  {n:7,zh:'大',py:'dà',pos:'Tính từ',vn:'to, lớn',em:'📐',lesson:2,
   ex_zh:'我的手不大。',ex_py:'Wǒ de shǒu bú dà.',ex_vn:'Tay mình không to.',
   exList:[{zh:'我的手不大。',py:'Wǒ de shǒu bú dà.',vn:'Tay mình không to.'}],
   hanzi:[]},
  {n:8,zh:'手',py:'shǒu',pos:'Danh từ',vn:'tay',em:'✋',lesson:2,
   ex_zh:'我的手不大。',ex_py:'Wǒ de shǒu bú dà.',ex_vn:'Tay mình không to.',
   exList:[{zh:'我的手不大。',py:'Wǒ de shǒu bú dà.',vn:'Tay mình không to.'}],
   hanzi:[
     {c:'手',p:'shǒu',type:'独体字 · Tượng hình',st:4,ord:'丿→一→𠃌→丿',rad:'手 (thủ – tự thành bộ)',mean:'tay',
      tip:'Hình bàn tay xoè năm ngón cách điệu → TAY.',
      cf:'毛 (máo – "lông")',w:'手不大'},
   ]},
  {n:9,zh:'的',py:'de',pos:'Trợ từ',vn:'trợ từ sở hữu (của)',em:'🔗',lesson:2,
   ex_zh:'你的个子真高！',ex_py:'Nǐ de gèzi zhēn gāo!',ex_vn:'Vóc dáng bạn cao thật!',
   exList:[{zh:'你的个子真高！',py:'Nǐ de gèzi zhēn gāo!',vn:'Vóc dáng bạn cao thật!'}],
   hanzi:[
     {c:'的',p:'de',type:'左右结构 · Trái-phải',st:8,ord:'白(bạch) trái → 勺(chước) phải',rad:'白 (bạch – trắng)',mean:'trợ từ sở hữu (của)',
      tip:'白(rõ ràng, sáng tỏ) → làm rõ mối quan hệ SỞ HỮU giữa hai danh từ.',
      cf:'白 (bái – "màu trắng")',w:'你的个子'},
   ]},
  {n:10,zh:'个子',py:'gèzi',pos:'Danh từ',vn:'vóc dáng, chiều cao',em:'📏',lesson:2,
   ex_zh:'你的个子真高！',ex_py:'Nǐ de gèzi zhēn gāo!',ex_vn:'Vóc dáng bạn cao thật!',
   exList:[{zh:'你的个子真高！',py:'Nǐ de gèzi zhēn gāo!',vn:'Vóc dáng bạn cao thật!'}],
   hanzi:[]},
  {n:11,zh:'真',py:'zhēn',pos:'Phó từ',vn:'thật, thật là',em:'❗',lesson:2,
   ex_zh:'你的个子真高！',ex_py:'Nǐ de gèzi zhēn gāo!',ex_vn:'Vóc dáng bạn cao thật!',
   exList:[{zh:'你的个子真高！',py:'Nǐ de gèzi zhēn gāo!',vn:'Vóc dáng bạn cao thật!'}],
   hanzi:[
     {c:'真',p:'zhēn',type:'独体字 · Chữ đơn',st:10,ord:'十→目→一→八(biến thể)',rad:'目 (mục, phần giữa)',mean:'thật, thật là',
      tip:'Hình con mắt nhìn thẳng không dối trá → THẬT, CHÂN THẬT.',
      cf:'直 (zhí – "thẳng")',w:'个子真高'},
   ]},
  {n:12,zh:'高',py:'gāo',pos:'Tính từ',vn:'cao',em:'📶',lesson:2,
   ex_zh:'你的个子真高！',ex_py:'Nǐ de gèzi zhēn gāo!',ex_vn:'Vóc dáng bạn cao thật!',
   exList:[{zh:'你的个子真高！',py:'Nǐ de gèzi zhēn gāo!',vn:'Vóc dáng bạn cao thật!'}],
   hanzi:[]},
];

const wuData = [
  {img:'💇',label:'头发',py:'tóufa',letter:'A'},
  {img:'👃',label:'鼻子',py:'bízi',letter:'B'},
  {img:'👂',label:'耳朵',py:'ěrduo',letter:'C'},
  {img:'👀',label:'眼睛',py:'yǎnjing',letter:'D'},
  {img:'✋',label:'手',py:'shǒu',letter:'E'},
  {img:'📏',label:'个子',py:'gèzi',letter:'F'},
];

const dialogData = [
  {scene:'Miêu tả em gái',
   lines:[
     {sp:0,zh:'妹妹的眼睛很小，耳朵很小，手不大，头发不长。',py:'Mèimei de yǎnjing hěn xiǎo, ěrduo hěn xiǎo, shǒu bú dà, tóufa bù cháng.',vn:'Mắt em gái mình rất nhỏ, tai rất nhỏ, tay không to, tóc không dài.'},
     {sp:1,zh:'妹妹的眼睛大吗？头发长吗？',py:'Mèimei de yǎnjing dà ma? Tóufa cháng ma?',vn:'Mắt em gái bạn to không? Tóc dài không?'},
   ]},
  {scene:'Khen ngoại hình bạn',
   lines:[
     {sp:0,zh:'你的个子真高！',py:'Nǐ de gèzi zhēn gāo!',vn:'Vóc dáng bạn cao thật!'},
     {sp:1,zh:'你的鼻子真长！',py:'Nǐ de bízi zhēn cháng!',vn:'Mũi bạn dài thật!'},
   ]},
  {scene:'Hỏi thăm về tay',
   lines:[
     {sp:0,zh:'你的手大吗？',py:'Nǐ de shǒu dà ma?',vn:'Tay bạn to không?'},
     {sp:1,zh:'我的手不大。',py:'Wǒ de shǒu bú dà.',vn:'Tay mình không to.'},
   ]},
];

// Điền từ — tình huống miêu tả ngoại hình
const fillData = [
  {pre:'Con miêu tả tóc em gái không dài: “妹妹的',blank:'头发',post:'不长。”',hint:'(tóc)',ans:'头发'},
  {pre:'Con miêu tả mắt em gái nhỏ: “妹妹的眼睛很',blank:'小',post:'。”',hint:'(nhỏ, bé)',ans:'小'},
  {pre:'Con hỏi tai bạn to không: “你的耳朵',blank:'大',post:'吗？”',hint:'(to, lớn)',ans:'大'},
  {pre:'Con khen vóc dáng bạn cao: “你的',blank:'个子',post:'真高！”',hint:'(vóc dáng)',ans:'个子'},
  {pre:'Con trêu vui mũi bạn: “你的鼻子真',blank:'长',post:'！”',hint:'(dài)',ans:'长'},
  {pre:'Con nói tay mình không to: “我的',blank:'手',post:'不大。”',hint:'(tay)',ans:'手'},
  {pre:'Con chỉ sở hữu: “妹妹',blank:'的',post:'眼睛很小。”',hint:'(của — trợ từ sở hữu)',ans:'的'},
  {pre:'Con hỏi tóc bạn dài không: “你',blank:'的',post:'头发长吗？”',hint:'(của — trợ từ sở hữu)',ans:'的'},
];

// Sắp xếp — câu miêu tả ngoại hình
const sortData = [
  {words:['妹妹','的','眼睛','很','小','。'],ans:'妹妹的眼睛很小。',audio:'妹妹的眼睛很小。'},
  {words:['妹妹','的','头发','不','长','。'],ans:'妹妹的头发不长。',audio:'妹妹的头发不长。'},
  {words:['你','的','个子','真','高','！'],ans:'你的个子真高！',audio:'你的个子真高！'},
  {words:['你','的','鼻子','真','长','！'],ans:'你的鼻子真长！',audio:'你的鼻子真长！'},
  {words:['你','的','手','大','吗','？'],ans:'你的手大吗？',audio:'你的手大吗？'},
  {words:['我','的','手','不','大','。'],ans:'我的手不大。',audio:'我的手不大。'},
];

const matchData = [
  {left:'妹妹的眼睛大吗？',right:'妹妹的眼睛很小。'},
  {left:'你的个子真高！',right:'你的鼻子真长！'},
  {left:'你的手大吗？',right:'我的手不大。'},
  {left:'妹妹的头发长吗？',right:'不长。'},
  {left:'谁的眼睛很小？',right:'妹妹的眼睛很小。'},
];

// Trắc nghiệm — không audio
const mcData = [
  {q:'妹妹的眼睛很＿＿。(nhỏ)',opts:['小','大','长','高'],ans:0},
  {q:'你的个子真＿＿！(cao)',opts:['高','小','长','大'],ans:0},
  {q:'"头发" nghĩa là gì?',opts:['tóc','mắt','tai','mũi'],ans:0},
  {q:'"鼻子" nghĩa là gì?',opts:['mũi','tai','mắt','tóc'],ans:0},
  {q:'"耳朵" nghĩa là gì?',opts:['tai','mắt','mũi','tóc'],ans:0},
  {q:'"眼睛" nghĩa là gì?',opts:['mắt','tai','mũi','tay'],ans:0},
  {q:'"手" nghĩa là gì?',opts:['tay','chân','đầu','mặt'],ans:0},
  {q:'"真" trong "个子真高" dùng để làm gì?',opts:['nhấn mạnh mức độ (thật là)','phủ định','nghi vấn','so sánh'],ans:0},
  {q:'"的" dùng để làm gì?',opts:['biểu thị sở hữu (của)','phủ định','nghi vấn','liệt kê'],ans:0},
  {q:'"个子" nghĩa là gì?',opts:['vóc dáng, chiều cao','khuôn mặt','màu tóc','cân nặng'],ans:0},
];

const speakingData = {
  t1:{
    intro:'Nhấn 🔊 nghe từng câu mẫu, đọc to theo cho tới khi trôi chảy nhé!',
    models:[
      {zh:'妹妹的眼睛很小，耳朵很小。',py:'Mèimei de yǎnjing hěn xiǎo, ěrduo hěn xiǎo.',vn:'Mắt em gái mình rất nhỏ, tai rất nhỏ.'},
      {zh:'妹妹的头发不长。',py:'Mèimei de tóufa bù cháng.',vn:'Tóc em gái mình không dài.'},
      {zh:'你的个子真高！',py:'Nǐ de gèzi zhēn gāo!',vn:'Vóc dáng bạn cao thật!'},
      {zh:'你的鼻子真长！',py:'Nǐ de bízi zhēn cháng!',vn:'Mũi bạn dài thật!'},
      {zh:'我的手不大。',py:'Wǒ de shǒu bú dà.',vn:'Tay mình không to.'},
    ],
  },
  t2:{
    intro:'Dùng khung câu cho sẵn, thay thế phần gạch chân bằng từ trong ô gợi ý. Nhấn 🔊 để nghe rồi nói to mỗi câu con tạo được.',
    drills:[
      {frame:'妹妹的眼睛很＿＿。',frame_py:'Mèimei de yǎnjing hěn ___.',vn:'Mắt em gái mình rất ＿＿.',options:['小','大'],samples:['妹妹的眼睛很小。','妹妹的眼睛很大。']},
    ],
  },
  t3:{
    intro:'Không nhìn câu mẫu, con hãy tưởng tượng mình đang ở trong tình huống thật và tự nói câu phù hợp nhé!',
    tasks:[
      {role:'👧 Tình huống 1 — Miêu tả ngoại hình em gái',
       guide:'Con miêu tả ngoại hình em gái mình cho bạn nghe.',
       structure:['妹妹的眼睛很＿＿，耳朵很＿＿。'],
       sample:'妹妹的眼睛很小，耳朵很小。',
       sample_vn:'Mắt em gái mình rất nhỏ, tai rất nhỏ.',
       note:'Câu vị ngữ tính từ (很 + tính từ) là mẫu câu cơ bản để MIÊU TẢ đặc điểm — luôn cần 很 dù không nhấn mạnh "rất".'},
      {role:'😄 Tình huống 2 — Trêu đùa khen bạn bè',
       guide:'Con và bạn trêu đùa khen ngoại hình nhau một cách vui vẻ.',
       structure:['你的个子真高！','你的鼻子真长！'],
       sample:'你的个子真高！你的鼻子真长！',
       sample_vn:'Vóc dáng bạn cao thật! Mũi bạn dài thật!',
       note:'真 + tính từ dùng để KHEN NGỢI hoặc NHẬN XÉT với cảm xúc mạnh — thường dùng trong giao tiếp thân mật, vui đùa giữa bạn bè.'},
      {role:'✋ Tình huống 3 — Hỏi thăm về đôi tay',
       guide:'Con hỏi bạn xem tay bạn ấy to hay nhỏ.',
       structure:['你的手大吗？','我的手不大。'],
       sample:'你的手大吗？我的手不大。',
       sample_vn:'Tay bạn to không? Tay mình không to.',
       note:'的 giúp gắn kết sở hữu (你的手 = tay của bạn) — đây là trợ từ con sẽ dùng RẤT NHIỀU khi nói về đồ vật, người thân của mình.'},
    ],
  },
};
