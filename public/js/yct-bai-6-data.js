// ══════════════════════════════════════════
// DATA — YCT Bài 6: 我的头发很长
// ══════════════════════════════════════════
var vocabData = [
  {n:1,zh:'头发',py:'tóufa',pos:'Danh từ',vn:'tóc', hv: 'đầu phát',em:'💇',lesson:1,
   ex_zh:'妹妹的头发不长。',ex_py:'Mèimei de tóufa bù cháng.',ex_vn:'Tóc em gái mình không dài.',
   exList:[{zh:'妹妹的头发不长。',py:'Mèimei de tóufa bù cháng.',vn:'Tóc em gái mình không dài.'},{zh:'我的头发很长。',py:'Wǒ de tóufa hěn cháng.',vn:'Tóc tớ rất dài.'}],
   hanzi:[
     {c:'头',p:'tóu',type:'独体字 · Tượng hình',st:5,ord:'亠→大(biến thể)→丶',rad:'大 (đại, biến thể)',mean:'đầu',
      tip:'Hình cái đầu người cách điệu → ĐẦU.',
      cf:'实 (shí – "thực")',w:'头发'},
     {c:'发',p:'fà',type:'独体字 · Chữ đơn',st:5,ord:'𠂉→𠂉→又(biến thể)',rad:'又 (hựu, biến thể)',mean:'tóc (trong 头发)',
      tip:'Hình bàn tay vuốt mái tóc → TÓC.',
      cf:'友 (yǒu – "bạn bè")',w:'头发'},
   ]},
  {n:2,zh:'长',py:'cháng',pos:'Tính từ',vn:'dài', hv: 'trường',em:'📏',lesson:1,
   ex_zh:'姐姐的头发很长。',ex_py:'Jiějie de tóufa hěn cháng.',ex_vn:'Tóc chị gái mình rất dài.',
   exList:[
     {zh:'姐姐的头发很长。',py:'Jiějie de tóufa hěn cháng.',vn:'Tóc chị gái mình rất dài.'},
     {zh:'妈妈的头发真长！',py:'Māma de tóufa zhēn cháng!',vn:'Tóc mẹ dài thật!'},
   ],
   hanzi:[
     {c:'长',p:'cháng',type:'独体字 · Tượng hình',st:4,ord:'丿→𠃌→一→乚',rad:'长 (trường – tự thành bộ)',mean:'dài',
      tip:'Hình mái tóc dài bay trong gió (chữ cổ) → DÀI.',
      cf:'常 (cháng – "thường xuyên")',w:'头发长'},
   ]},
  {n:3,zh:'鼻子',py:'bízi',pos:'Danh từ',vn:'mũi', hv: 'tị tử',em:'👃',lesson:1,
   ex_zh:'你的鼻子真长！',ex_py:'Nǐ de bízi zhēn cháng!',ex_vn:'Mũi bạn dài thật!',
   exList:[{zh:'你的鼻子真长！',py:'Nǐ de bízi zhēn cháng!',vn:'Mũi bạn dài thật!'},{zh:'我的鼻子很小。',py:'Wǒ de bízi hěn xiǎo.',vn:'Mũi tớ rất nhỏ.'}],
   hanzi:[
     {c:'鼻',p:'bí',type:'上下结构 · Trên-dưới',st:14,ord:'自(tự) trên → 畀(biến thể) dưới',rad:'自 (tự – nghĩa gốc là mũi)',mean:'mũi',
      tip:'自(hình cái mũi, nghĩa gốc của 自) + 畀(mượn âm) → MŨI.',
      cf:'自 (zì – "tự mình", nghĩa gốc là mũi")',w:'鼻子'},
     {c:'子',p:'zi',type:'独体字 · Tượng hình',st:3,ord:'了→一',rad:'子 (tử – tự thành bộ)',mean:'con; hậu tố danh từ',
      tip:'Hình đứa trẻ mới sinh → CON; dùng làm hậu tố cho nhiều danh từ (鼻子, 个子...).',
      cf:'孑 (jié – "cô độc")',w:'鼻子 / 个子'},
   ]},
  {n:4,zh:'耳朵',py:'ěrduo',pos:'Danh từ',vn:'tai', hv: 'nhĩ đóa',em:'👂',lesson:1,
   ex_zh:'妹妹的耳朵很小。',ex_py:'Mèimei de ěrduo hěn xiǎo.',ex_vn:'Tai em gái mình rất nhỏ.',
   exList:[{zh:'妹妹的耳朵很小。',py:'Mèimei de ěrduo hěn xiǎo.',vn:'Tai em gái mình rất nhỏ.'},{zh:'你的耳朵真大！',py:'Nǐ de ěrduo zhēn dà!',vn:'Tai bạn to thật!'}],
   hanzi:[
     {c:'耳',p:'ěr',type:'独体字 · Tượng hình',st:6,ord:'一→𠃌→三(biến thể)',rad:'耳 (nhĩ – tự thành bộ)',mean:'tai',
      tip:'Hình cái tai người cách điệu → TAI.',
      cf:'取 (qǔ – "lấy")',w:'耳朵'},
     {c:'朵',p:'duo',type:'上下结构 · Trên-dưới',st:6,ord:'几(biến thể) trên → 木(mộc) dưới',rad:'木 (mộc – gỗ, phần dưới)',mean:'bông, đoá',
      tip:'Hình bông hoa trên cành cây → ĐOÁ HOA; ghép với 耳 chỉ hình dáng TAI như đoá hoa.',
      cf:'杂 (zá – "tạp, lẫn")',w:'耳朵'},
   ]},
  {n:5,zh:'眼睛',py:'yǎnjing',pos:'Danh từ',vn:'mắt', hv: 'nhãn tình',em:'👀',lesson:1,
   ex_zh:'妹妹的眼睛很小。',ex_py:'Mèimei de yǎnjing hěn xiǎo.',ex_vn:'Mắt em gái mình rất nhỏ.',
   exList:[{zh:'妹妹的眼睛很小。',py:'Mèimei de yǎnjing hěn xiǎo.',vn:'Mắt em gái mình rất nhỏ.'},{zh:'她的眼睛很大。',py:'Tā de yǎnjing hěn dà.',vn:'Mắt bạn ấy rất to.'}],
   hanzi:[
     {c:'眼',p:'yǎn',type:'左右结构 · Trái-phải',st:11,ord:'目(mục) trái → 艮(cấn) phải',rad:'目 (mục – mắt)',mean:'mắt',
      tip:'目(mắt) + 艮(nhìn chăm chú) → bộ phận để NHÌN = MẮT.',
      cf:'银 (yín – "bạc")',w:'眼睛'},
     {c:'睛',p:'jīng',type:'左右结构 · Trái-phải',st:13,ord:'目(mục) trái → 青(thanh) phải',rad:'目 (mục – mắt)',mean:'con ngươi, mắt',
      tip:'目(mắt) + 青(xanh trong) → tròng mắt trong xanh = CON NGƯƠI.',
      cf:'晴 (qíng – "trời quang")',w:'眼睛'},
   ]},
  {n:6,zh:'小',py:'xiǎo',pos:'Tính từ',vn:'nhỏ, bé', hv: 'tiểu',em:'🔹',lesson:1,
   ex_zh:'我的手很小。',ex_py:'Wǒ de shǒu hěn xiǎo.',ex_vn:'Tay mình rất nhỏ.',
   exList:[
     {zh:'我的手很小。',py:'Wǒ de shǒu hěn xiǎo.',vn:'Tay mình rất nhỏ.'},
     {zh:'妹妹的手很小。',py:'Mèimei de shǒu hěn xiǎo.',vn:'Tay em gái rất nhỏ.'},
   ],
   hanzi:[
     {c:'小',p:'xiǎo',type:'独体字 · Tượng hình',st:3,ord:'丨→𠂇→丶',rad:'小 (tiểu – tự thành bộ)',mean:'nhỏ, bé',
      tip:'Hình ba hạt cát nhỏ li ti → NHỎ, BÉ.',
      cf:'少 (shǎo – "ít")',w:'眼睛小'},
   ]},
  {n:7,zh:'大',py:'dà',pos:'Tính từ',vn:'to, lớn', hv: 'đại',em:'📐',lesson:2,
   ex_zh:'爸爸的手很大。',ex_py:'Bàba de shǒu hěn dà.',ex_vn:'Tay bố rất to.',
   exList:[
     {zh:'爸爸的手很大。',py:'Bàba de shǒu hěn dà.',vn:'Tay bố rất to.'},
     {zh:'哥哥的眼睛真大！',py:'Gēge de yǎnjing zhēn dà!',vn:'Mắt anh trai to thật!'},
   ],
   hanzi:[]},
  {n:8,zh:'手',py:'shǒu',pos:'Danh từ',vn:'tay', hv: 'thủ',em:'✋',lesson:2,
   ex_zh:'我的手不大。',ex_py:'Wǒ de shǒu bú dà.',ex_vn:'Tay mình không to.',
   exList:[{zh:'我的手不大。',py:'Wǒ de shǒu bú dà.',vn:'Tay mình không to.'},{zh:'你的手真小！',py:'Nǐ de shǒu zhēn xiǎo!',vn:'Tay bạn nhỏ thật!'}],
   hanzi:[
     {c:'手',p:'shǒu',type:'独体字 · Tượng hình',st:4,ord:'丿→一→𠃌→丿',rad:'手 (thủ – tự thành bộ)',mean:'tay',
      tip:'Hình bàn tay xoè năm ngón cách điệu → TAY.',
      cf:'毛 (máo – "lông")',w:'手不大'},
   ]},
  {n:9,zh:'的',py:'de',pos:'Trợ từ',vn:'trợ từ sở hữu (của)', hv: 'đích',em:'🔗',lesson:2,
   ex_zh:'我的老师是中国人。',ex_py:'Wǒ de lǎoshī shì Zhōngguó rén.',ex_vn:'Cô giáo của mình là người Trung Quốc.',
   exList:[
     {zh:'我的老师是中国人。',py:'Wǒ de lǎoshī shì Zhōngguó rén.',vn:'Cô giáo của mình là người Trung Quốc.'},
     {zh:'她是我的老师。',py:'Tā shì wǒ de lǎoshī.',vn:'Cô ấy là cô giáo của tớ.'},
   ],
   hanzi:[
     {c:'的',p:'de',type:'左右结构 · Trái-phải',st:8,ord:'白(bạch) trái → 勺(chước) phải',rad:'白 (bạch – trắng)',mean:'trợ từ sở hữu (của)',
      tip:'白(rõ ràng, sáng tỏ) → làm rõ mối quan hệ SỞ HỮU giữa hai danh từ.',
      cf:'白 (bái – "màu trắng")',w:'你的个子'},
   ]},
  {n:10,zh:'个子',py:'gèzi',pos:'Danh từ',vn:'vóc dáng, chiều cao', hv: 'cá tử',em:'📏',lesson:2,
   ex_zh:'你的个子真高！',ex_py:'Nǐ de gèzi zhēn gāo!',ex_vn:'Vóc dáng bạn cao thật!',
   exList:[{zh:'你的个子真高！',py:'Nǐ de gèzi zhēn gāo!',vn:'Vóc dáng bạn cao thật!'},{zh:'哥哥的个子很高。',py:'Gēge de gèzi hěn gāo.',vn:'Anh trai dáng rất cao.'}],
   hanzi:[]},
  {n:11,zh:'真',py:'zhēn',pos:'Phó từ',vn:'thật, thật là', hv: 'chân',em:'❗',lesson:2,
   ex_zh:'你的眼睛真大！',ex_py:'Nǐ de yǎnjing zhēn dà!',ex_vn:'Mắt bạn to thật!',
   exList:[
     {zh:'你的眼睛真大！',py:'Nǐ de yǎnjing zhēn dà!',vn:'Mắt bạn to thật!'},
     {zh:'老师真好！',py:'Lǎoshī zhēn hǎo!',vn:'Cô giáo tốt thật!'},
   ],
   hanzi:[
     {c:'真',p:'zhēn',type:'独体字 · Chữ đơn',st:10,ord:'十→目→一→八(biến thể)',rad:'目 (mục, phần giữa)',mean:'thật, thật là',
      tip:'Hình con mắt nhìn thẳng không dối trá → THẬT, CHÂN THẬT.',
      cf:'直 (zhí – "thẳng")',w:'个子真高'},
   ]},
  {n:12,zh:'高',py:'gāo',pos:'Tính từ',vn:'cao', hv: 'cao',em:'📶',lesson:2,
   ex_zh:'哥哥很高。',ex_py:'Gēge hěn gāo.',ex_vn:'Anh trai rất cao.',
   exList:[
     {zh:'哥哥很高。',py:'Gēge hěn gāo.',vn:'Anh trai rất cao.'},
     {zh:'爸爸真高！',py:'Bàba zhēn gāo!',vn:'Bố cao thật!'},
   ],
   hanzi:[]},
];

var wuData = [
  {img:'💇',label:'头发',py:'tóufa',letter:'A'},
  {img:'👃',label:'鼻子',py:'bízi',letter:'B'},
  {img:'👂',label:'耳朵',py:'ěrduo',letter:'C'},
  {img:'👀',label:'眼睛',py:'yǎnjing',letter:'D'},
  {img:'✋',label:'手',py:'shǒu',letter:'E'},
  {img:'📏',label:'个子',py:'gèzi',letter:'F'},
];

var dialogData = [
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
var fillData = [
  {pre:'Chị gái con để tóc dài: “姐姐的',blank:'头发',post:'很长。”',hint:'(tóc)',ans:'头发',exp:'头发 = tóc: 姐姐的头发很长.'},
  {pre:'Con tả bố: mũi bố cao: “爸爸的',blank:'鼻子',post:'很高。”',hint:'(mũi)',ans:'鼻子',exp:'鼻子 = mũi; người Trung Quốc nói mũi "cao": 鼻子很高.'},
  {pre:'Anh trai con có đôi tai to: “哥哥的',blank:'耳朵',post:'很大。”',hint:'(tai)',ans:'耳朵',exp:'耳朵 = tai: 哥哥的耳朵很大.'},
  {pre:'Mắt Minh Minh không to: “明明',blank:'的',post:'眼睛不大。”',hint:'(của)',ans:'的',exp:'Người + 的 + bộ phận: 明明的眼睛 = mắt của Minh Minh.'},
  {pre:'Anh trai con rất cao: “哥哥的',blank:'个子',post:'很高。”',hint:'(vóc dáng)',ans:'个子',exp:'个子 = vóc dáng: 个子很高 = người cao.'},
  {pre:'Em gái có cái mũi bé xíu, con khen: “妹妹的鼻子',blank:'真',post:'小！”',hint:'(thật)',ans:'真',exp:'真 + tính từ để khen / cảm thán: 真小 = nhỏ thật.'},
  {pre:'Mũi con không to: “我的鼻子不',blank:'大',post:'。”',hint:'(to)',ans:'大',exp:'不 + tính từ: 不大 = không to.'},
];

// Sắp xếp — câu miêu tả ngoại hình
var sortData = [
  {words:['你','的','耳朵','真','小','！'],ans:'你的耳朵真小！',audio:'你的耳朵真小！'},
  {words:['姐姐','的','个子','不','高','。'],ans:'姐姐的个子不高。',audio:'姐姐的个子不高。'},
  {words:['他','的','头发','长','吗','？'],ans:'他的头发长吗？',audio:'他的头发长吗？'},
  {words:['我','的','手','很','小','。'],ans:'我的手很小。',audio:'我的手很小。'},
  {words:['甜甜','的','耳朵','小','吗','？'],ans:'甜甜的耳朵小吗？',audio:'甜甜的耳朵小吗？'},
];

var matchData = [
  {left:'你的手大吗？',right:'我的手不大。'},
  {left:'妹妹的头发长吗？',right:'不长。'},
  {left:'你哥哥高吗？',right:'很高！'},
  {left:'你的眼睛真大！',right:'你的眼睛也很大！'},
  {left:'老师的个子高吗？',right:'不高。'},
  {left:'你的鼻子小吗？',right:'很小。'},
];

// Trắc nghiệm — không audio
var mcData = [
  {q:'Con tả bố: “Bố mình rất cao.”',opts:['我爸爸很高。','我爸爸是高。','我爸爸高很。','我很爸爸高。'],ans:0,exp:'Tính từ làm vị ngữ: 很 + 高. Không dùng 是 trước tính từ — lỗi hay gặp vì tiếng Việt nói "là".'},
  {q:'Bạn có mái tóc rất dài và đẹp. Con khen:',opts:['你的头发真长！','你的头发长真！','你真的头发长！','你的真头发长！'],ans:0,exp:'真 đứng ngay trước tính từ: 真长. Tiếng Việt nói "dài thật" (thật đứng sau) nên dễ đặt sai.'},
  {q:'Con muốn nói “tay của em gái”:',opts:['妹妹的手','的妹妹手','手的妹妹','妹妹手的'],ans:0,exp:'Người sở hữu + 的 + vật: 妹妹的手 — ngược với tiếng Việt "tay của em gái".'},
  {q:'Con muốn hỏi bạn: “Tai bạn có to không?”',opts:['你的耳朵大吗？','你的耳朵大什么？','你的耳朵吗大？','你的耳朵是大吗？'],ans:0,exp:'Câu hỏi Có/Không: thêm 吗 ở cuối; không thêm 是 trước tính từ.'},
  {q:'Bạn hỏi tay con có to không. Tay con không to. Con đáp:',opts:['不大。','大不。','不是大。','没有大。'],ans:0,exp:'Phủ định tính từ dùng 不: 不大. Không dùng 没有 hay 不是.'},
];

var speakingData = {
  t1:{
    intro:'Nhấn nút loa nghe từng câu mẫu, đọc to theo cho tới khi trôi chảy nhé!',
    models:[
      {zh:'你的个子真高！',py:'Nǐ de gèzi zhēn gāo!',vn:'Vóc dáng bạn cao thật!'},
      {zh:'妹妹的眼睛很小，耳朵很小，手不大，头发不长。',py:'Mèimei de yǎnjing hěn xiǎo, ěrduo hěn xiǎo, shǒu bú dà, tóufa bù cháng.',vn:'Mắt em gái mình rất nhỏ, tai rất nhỏ, tay không to, tóc không dài.'},
      {zh:'妹妹的眼睛大吗？',py:'Mèimei de yǎnjing dà ma?',vn:'Mắt em gái bạn to không?'},
    ],
  },
  t2:{
    intro:'Dùng khung câu cho sẵn, thay thế phần gạch chân bằng từ trong ô gợi ý. Nhấn nút loa để nghe rồi nói to mỗi câu con tạo được.',
    drills:[
      {frame:'＿＿很高。',frame_py:'___ hěn gāo.',vn:'＿＿ rất cao.',options:['哥哥','姐姐'],samples:['哥哥很高。','姐姐很高。']},
    ],
  },
  t3:{
    intro:'Không nhìn câu mẫu, con hãy tưởng tượng mình đang ở trong tình huống thật và tự nói câu phù hợp nhé!',
    tasks:[
      {role:'👩 Tình huống 1 — Tả mẹ',
       guide:'Cô giáo hỏi mẹ con trông thế nào. Con tả tóc của mẹ.',
       structure:['我妈妈的……很……','我妈妈的……不……'],
       sample:'我妈妈的头发不长。',
       sample_vn:'Tóc mẹ con không dài.',
       note:'Người + 的 + bộ phận + 很/不 + tính từ.'},
      {role:'👶 Tình huống 2 — Khen em bé',
       guide:'Em bé nhà bên có đôi mắt to tròn. Con khen em.',
       structure:['你的……真……！'],
       sample:'你的眼睛真大！',
       sample_vn:'Mắt em to thật!',
       note:'Muốn khen thì dùng 真 + tính từ, đọc với giọng vui.'},
      {role:'🧒 Tình huống 3 — Tả bạn thân',
       guide:'Con tả một điểm đặc biệt của bạn Lạc Lạc cho mẹ nghe.',
       structure:['乐乐的……真……！'],
       sample:'乐乐的耳朵真大！',
       sample_vn:'Tai Lạc Lạc to thật!',
       note:'Có thể thay 耳朵 bằng 眼睛, 手, 头发… và đổi tính từ cho đúng.'},
    ],
  },
};

// ══════════════════════════════════════════
// LUYỆN DỊCH (Việt→Trung) — câu ví dụ của chính bài này
// ══════════════════════════════════════════
var translateData = [
  {vi:"Cô giáo rất cao.", zh:"老师很高。", py:"Lǎoshī hěn gāo."},
  {vi:"Tay bố rất to.", zh:"爸爸的手很大。", py:"Bàba de shǒu hěn dà."},
];

// ══════════════════════════════════════════
// LUYỆN DỊCH (Trung→Việt) — lời thoại trong bài, khác chiều Việt→Trung
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:"Mắt anh trai nhỏ thật!", zh:"哥哥的眼睛真小！", py:"Gēge de yǎnjing zhēn xiǎo!"},
  {vi:"Mình bảy tuổi, người không cao.", zh:"我七岁，个子不高。", py:"Wǒ qī suì, gèzi bù gāo."},
];

// ══════════════════════════════════════════
// LUYỆN NGHE — đoạn nghe ngắn (đọc bằng giọng máy), chỉ dùng từ đã học
// ══════════════════════════════════════════
var listenData = [
  {audio:'妹妹四岁，她的耳朵很小。',
   questions:[
     {q:'Em gái có đặc điểm gì?',opts:['Tai nhỏ','Tóc dài','Mắt to'],ans:0,exp:'她的耳朵很小 = tai em rất nhỏ.'},
   ]},
  {audio:'明明很高，乐乐不高。',
   questions:[
     {q:'Ai cao?',opts:['Lạc Lạc','Minh Minh','Cả hai bạn'],ans:1,exp:'明明很高 = Minh Minh cao; 乐乐不高 = Lạc Lạc không cao.'},
   ]},
  {audio:'爸爸的鼻子大吗？不大，很小。',
   questions:[
     {q:'Mũi của bố thế nào?',opts:['To','Nhỏ','Dài'],ans:1,exp:'不大，很小 = không to, rất nhỏ.'},
   ]},
  {audio:'甜甜的眼睛很大，头发很长。',
   questions:[
     {q:'Điềm Điềm trông thế nào?',opts:['Mắt nhỏ, tóc ngắn','Mắt to, tóc ngắn','Mắt to, tóc dài'],ans:2,exp:'眼睛很大 = mắt to; 头发很长 = tóc dài.'},
     {q:'Đoạn nghe nói về bộ phận nào?',opts:['Mắt và tóc','Tai và mũi','Tay và tai'],ans:0,exp:'眼睛 = mắt, 头发 = tóc.'},
   ]},
];
