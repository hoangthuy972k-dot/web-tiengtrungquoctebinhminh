// ══════════════════════════════════════════
// DATA — YCT Bài 7: 这是猫
// ══════════════════════════════════════════
var vocabData = [
  {n:1,zh:'这',py:'zhè',pos:'Đại từ',vn:'này, đây (vật gần)', hv: 'giá',em:'👉',lesson:1,
   ex_zh:'这是猫。',ex_py:'Zhè shì māo.',ex_vn:'Đây là con mèo.',
   exList:[{zh:'这是猫。',py:'Zhè shì māo.',vn:'Đây là con mèo.'},{zh:'这是我的狗。',py:'Zhè shì wǒ de gǒu.',vn:'Đây là con chó của tớ.'}],
   hanzi:[
     {c:'这',p:'zhè',type:'半包围结构 · Bán bao vây',st:7,ord:'文(văn) trên-trái → 辶(sước) bao vòng dưới-trái',rad:'辶 (sước – đi bộ)',mean:'này, đây',
      tip:'Bộ 辶 mang nghĩa "đi tới", chỉ vật ở NGAY gần chỗ mình đang đứng → NÀY, ĐÂY.',
      cf:'达 (dá – "đạt tới", cùng bộ 辶)',w:'这是猫 / 这儿'},
   ]},
  {n:2,zh:'那',py:'nà',pos:'Đại từ',vn:'đó, kia (vật xa)', hv: 'na',em:'👈',lesson:1,
   ex_zh:'那是狗。',ex_py:'Nà shì gǒu.',ex_vn:'Đó là con chó.',
   exList:[{zh:'那是狗。',py:'Nà shì gǒu.',vn:'Đó là con chó.'},{zh:'那是你的猫吗？',py:'Nà shì nǐ de māo ma?',vn:'Đó là con mèo của bạn à?'}],
   hanzi:[
     {c:'那',p:'nà',type:'左右结构 · Trái-phải',st:6,ord:'尹(hình tay) trái → 阝(ấp) phải',rad:'阝 (ấp – phải, hình người đứng)',mean:'đó, kia',
      tip:'Bộ 阝 bên phải như hình một người đứng XA mình → dùng để chỉ vật ở ĐẰNG XA → ĐÓ, KIA.',
      cf:'哪 (nǎ – "nào?", thêm bộ 口)',w:'那是狗 / 那儿'},
   ]},
  {n:3,zh:'看',py:'kàn',pos:'Động từ',vn:'nhìn, xem', hv: 'khán',em:'👀',lesson:1,
   ex_zh:'你看，这是鱼。',ex_py:'Nǐ kàn, zhè shì yú.',ex_vn:'Bạn xem, đây là con cá.',
   exList:[{zh:'你看，这是鱼。',py:'Nǐ kàn, zhè shì yú.',vn:'Bạn xem, đây là con cá.'},{zh:'你看，我的狗真大！',py:'Nǐ kàn, wǒ de gǒu zhēn dà!',vn:'Bạn nhìn này, chó của tớ to thật!'}],
   hanzi:[
     {c:'看',p:'kàn',type:'上下结构 · Trên-dưới',st:9,ord:'手(tay, biến thể) trên → 目(mắt) dưới',rad:'目 (mục – mắt)',mean:'nhìn, xem',
      tip:'Bàn tay đặt ngang trên mắt 目 như che nắng để nhìn xa hơn → NHÌN, XEM.',
      cf:'着 (zhe – trợ từ, gần hình)',w:'你看'},
   ]},
  {n:4,zh:'这儿',py:'zhèr',pos:'Cụm từ',vn:'ở đây', hv: 'giá nhi',em:'📍',lesson:1,
   ex_zh:'这儿有鱼。',ex_py:'Zhèr yǒu yú.',ex_vn:'Ở đây có cá.',
   exList:[{zh:'这儿有鱼。',py:'Zhèr yǒu yú.',vn:'Ở đây có cá.'},{zh:'这儿有猫。',py:'Zhèr yǒu māo.',vn:'Ở đây có mèo.'}],
   hanzi:[
     {c:'儿',p:'ér',type:'独体字 · Chữ đơn',st:2,ord:'丿→ 乚',rad:'儿 (nhi – tự thành bộ)',mean:'hậu tố chỉ nơi chốn',
      tip:'Hình hai chân người đang đứng; ghép sau 这/那 tạo thành từ chỉ NƠI CHỐN: 这儿 = ở đây.',
      cf:'几 (jǐ – "mấy")',w:'这儿 / 那儿'},
   ]},
  {n:5,zh:'那儿',py:'nàr',pos:'Cụm từ',vn:'ở đó, ở kia', hv: 'na nhi',em:'📌',lesson:1,
   ex_zh:'那儿有鸟。',ex_py:'Nàr yǒu niǎo.',ex_vn:'Ở đó có chim.',
   exList:[{zh:'那儿有鸟。',py:'Nàr yǒu niǎo.',vn:'Ở đó có chim.'},{zh:'那儿有狗吗？',py:'Nàr yǒu gǒu ma?',vn:'Ở đằng kia có chó không?'}],
   hanzi:[]},
  {n:6,zh:'猫',py:'māo',pos:'Danh từ',vn:'con mèo', hv: 'miêu',em:'🐱',lesson:2,
   ex_zh:'猫真小。',ex_py:'Māo zhēn xiǎo.',ex_vn:'Con mèo nhỏ thật.',
   exList:[{zh:'猫真小。',py:'Māo zhēn xiǎo.',vn:'Con mèo nhỏ thật.'},{zh:'我家有猫。',py:'Wǒ jiā yǒu māo.',vn:'Nhà tớ có mèo.'}],
   hanzi:[
     {c:'猫',p:'māo',type:'左右结构 · Trái-phải',st:11,ord:'犭(khuyển) trái → 苗(miêu) phải',rad:'犭 (khuyển – thú bốn chân)',mean:'con mèo',
      tip:'Bộ 犭 chỉ loài thú, ghép với 苗 đọc gần giống "meo" → tiếng MÈO kêu.',
      cf:'猜 (cāi – "đoán", cùng bộ 犭)',w:'我的猫'},
   ]},
  {n:7,zh:'狗',py:'gǒu',pos:'Danh từ',vn:'con chó', hv: 'cẩu',em:'🐶',lesson:2,
   ex_zh:'狗真大。',ex_py:'Gǒu zhēn dà.',ex_vn:'Con chó to thật.',
   exList:[{zh:'狗真大。',py:'Gǒu zhēn dà.',vn:'Con chó to thật.'},{zh:'你有狗吗？',py:'Nǐ yǒu gǒu ma?',vn:'Bạn có chó không?'}],
   hanzi:[
     {c:'狗',p:'gǒu',type:'左右结构 · Trái-phải',st:8,ord:'犭(khuyển) trái → 句(cú) phải',rad:'犭 (khuyển)',mean:'con chó',
      tip:'Bộ 犭 chỉ loài thú, ghép với 句 gần âm "gâu" → tiếng CHÓ sủa.',
      cf:'猫 (māo – "mèo", cùng bộ 犭)',w:'那是狗'},
   ]},
  {n:8,zh:'鱼',py:'yú',pos:'Danh từ',vn:'con cá', hv: 'ngư',em:'🐟',lesson:2,
   ex_zh:'你看，那是鱼。',ex_py:'Nǐ kàn, nà shì yú.',ex_vn:'Bạn nhìn kìa, đó là con cá.',
   exList:[
     {zh:'你看，那是鱼。',py:'Nǐ kàn, nà shì yú.',vn:'Bạn nhìn kìa, đó là con cá.'},
     {zh:'这儿有很多鱼。',py:'Zhèr yǒu hěn duō yú.',vn:'Ở đây có rất nhiều cá.'},
   ],
   hanzi:[
     {c:'鱼',p:'yú',type:'独体字 · Tượng hình',st:8,ord:'𠂊(đầu) → 田(thân) → 一(đuôi)',rad:'鱼 (ngư – tự thành bộ)',mean:'con cá',
      tip:'Hình vẽ con cá: phần đầu, thân có vảy hình ô vuông 田 và đuôi xoè bên dưới → CÁ.',
      cf:'鸟 (niǎo – "chim", hình dáng gần giống)',w:'看鱼'},
   ]},
  {n:9,zh:'鸟',py:'niǎo',pos:'Danh từ',vn:'con chim', hv: 'điểu',em:'🐦',lesson:2,
   ex_zh:'鸟真小！',ex_py:'Niǎo zhēn xiǎo!',ex_vn:'Con chim nhỏ thật!',
   exList:[
     {zh:'鸟真小！',py:'Niǎo zhēn xiǎo!',vn:'Con chim nhỏ thật!'},
     {zh:'你看，那儿有鸟！',py:'Nǐ kàn, nàr yǒu niǎo!',vn:'Bạn nhìn kìa, đằng kia có chim!'},
   ],
   hanzi:[
     {c:'鸟',p:'niǎo',type:'独体字 · Tượng hình',st:5,ord:'𠂉(đầu, mỏ) → 鸟(thân có chấm mắt) → 一(chân đáy)',rad:'鸟 (điểu – tự thành bộ)',mean:'con chim',
      tip:'Hình vẽ giản lược một con chim: đầu nhỏ có mắt, thân tròn và chân bên dưới → CHIM.',
      cf:'鱼 (yú – "cá")',w:'那儿有鸟'},
   ]},
];

var wuData = [
  {img:'🐱',label:'猫',py:'māo',letter:'A'},
  {img:'🐶',label:'狗',py:'gǒu',letter:'B'},
  {img:'🐟',label:'鱼',py:'yú',letter:'C'},
  {img:'🐦',label:'鸟',py:'niǎo',letter:'D'},
  {img:'👀',label:'看',py:'kàn',letter:'E'},
  {img:'👉',label:'这',py:'zhè',letter:'F'},
];

var dialogData = [
  {scene:'Nhìn con mèo',
   lines:[
     {sp:0,zh:'你看，这是猫。',py:'Nǐ kàn, zhè shì māo.',vn:'Bạn xem, đây là con mèo.'},
     {sp:1,zh:'猫真小！',py:'Māo zhēn xiǎo!',vn:'Con mèo nhỏ thật!'},
     {sp:0,zh:'这是我的猫。',py:'Zhè shì wǒ de māo.',vn:'Đây là con mèo của mình.'},
   ]},
  {scene:'Con chó ở đằng kia',
   lines:[
     {sp:0,zh:'那是狗吗？',py:'Nà shì gǒu ma?',vn:'Đó có phải con chó không?'},
     {sp:1,zh:'那是狗。',py:'Nà shì gǒu.',vn:'Đó là con chó.'},
     {sp:0,zh:'狗真大！',py:'Gǒu zhēn dà!',vn:'Con chó to thật!'},
   ]},
  {scene:'Cá ở đây, chim ở đó',
   lines:[
     {sp:0,zh:'这儿有鱼。',py:'Zhèr yǒu yú.',vn:'Ở đây có cá.'},
     {sp:1,zh:'那儿有鸟吗？',py:'Nàr yǒu niǎo ma?',vn:'Ở đó có chim không?'},
     {sp:0,zh:'有，那儿有鸟。',py:'Yǒu, nàr yǒu niǎo.',vn:'Có, ở đó có chim.'},
   ]},
];

// Điền từ — tình huống chỉ vật gần/xa và động vật
var fillData = [
  {pre:'Con chỉ người phụ nữ đứng ngay cạnh mình, nói với cô giáo: “',blank:'这',post:'是我妈妈。”',hint:'(đây — ở gần)',ans:'这',exp:'Người/vật ở gần dùng 这: 这是我妈妈.'},
  {pre:'Con chỉ bạn trai đứng xa ở sân trường: “',blank:'那',post:'是明明的哥哥。”',hint:'(đó, kia — ở xa)',ans:'那',exp:'Người/vật ở xa dùng 那: 那是明明的哥哥.'},
  {pre:'Con kéo tay bạn: “Bạn nhìn kìa!” — “你',blank:'看',post:'，那是狗！”',hint:'(nhìn, xem)',ans:'看',exp:'你看 = bạn nhìn này, dùng để chỉ cho người khác thấy.'},
  {pre:'Ở công viên, con thấy rất nhiều chim ngay cạnh mình: “',blank:'这儿',post:'有很多鸟。”',hint:'(ở đây)',ans:'这儿',exp:'这儿 = ở đây; nơi chốn + 有 + vật: 这儿有很多鸟.'},
  {pre:'Con thấy một người đứng ở góc sân xa: “',blank:'那儿',post:'有一个人。”',hint:'(ở đó)',ans:'那儿',exp:'那儿 = ở đó (xa): 那儿有一个人.'},
  {pre:'Bạn ôm một con mèo. Con hỏi: “这是你的',blank:'猫',post:'吗？”',hint:'(con mèo)',ans:'猫',exp:'猫 = con mèo.'},
  {pre:'Nhà con không nuôi chó: “我家没有',blank:'狗',post:'。”',hint:'(con chó)',ans:'狗',exp:'狗 = con chó; 没有 = không có.'},
  {pre:'Ở bể cá, những con cá bé xíu. Con nói: “这儿的',blank:'鱼',post:'真小！”',hint:'(con cá)',ans:'鱼',exp:'鱼 = con cá; 真小 = nhỏ thật.'},
];

// Sắp xếp — câu chỉ vật & con vật
var sortData = [
  {words:['那','是','我','的','狗','。'],ans:'那是我的狗。',audio:'那是我的狗。'},
  {words:['这儿','有','猫','吗','？'],ans:'这儿有猫吗？',audio:'这儿有猫吗？'},
  {words:['那儿','的','鸟','很','多','。'],ans:'那儿的鸟很多。',audio:'那儿的鸟很多。'},
  {words:['这','是','甜甜','的','鸟','。'],ans:'这是甜甜的鸟。',audio:'这是甜甜的鸟。'},
  {words:['那','不','是','狗','，','那','是','猫','！'],ans:'那不是狗，那是猫！',audio:'那不是狗，那是猫！'},
];

var matchData = [
  {left:'这是什么？',right:'这是鱼。'},
  {left:'那是狗吗？',right:'不是，那是猫。'},
  {left:'这儿有鸟吗？',right:'没有。'},
  {left:'那是谁？',right:'那是我姐姐。'},
  {left:'你看，那是什么？',right:'是鸟！'},
  {left:'你有猫吗？',right:'有，我的猫很小。'},
];

// Trắc nghiệm — không audio
var mcData = [
  {q:'Con đang ôm con mèo trong lòng, nói với bạn: “Đây là mèo của mình.”',opts:['这是我的猫。','那是我的猫。','这是猫我的。','我的这是猫。'],ans:0,exp:'Mèo đang ở ngay trong lòng (gần) → 这; người sở hữu + 的 + vật: 我的猫.'},
  {q:'Con thấy trên cây xa xa có con chim. Con nói:',opts:['那儿有鸟。','那儿是鸟有。','有那儿鸟。','那儿鸟有。'],ans:0,exp:'Nơi chốn + 有 + vật: 那儿有鸟.'},
  {q:'Bạn chỉ con vật ở xa hỏi đó có phải chó không. Không phải, đó là mèo. Con đáp:',opts:['不是，是猫。','没有，是猫。','不，猫是。','不是，那猫。'],ans:0,exp:'Phủ định của 是 là 不是; 没有 là phủ định của 有.'},
  {q:'Con muốn bạn nhìn con cá: “Bạn xem, cá to thật!”',opts:['你看，鱼真大！','你看，鱼大真！','看你，鱼真大！','你看，真鱼大！'],ans:0,exp:'你看 = bạn xem; 真 đứng trước tính từ: 真大.'},
  {q:'Con muốn nói: “Ở đây có mèo.”',opts:['这儿有猫。','这儿是有猫。','有猫这儿。','这儿猫有。'],ans:0,exp:'Nói "ở đâu có gì" dùng 这儿 + 有 + vật, không thêm 是.'},
  {q:'Bạn có con chó rất to. Con khen:',opts:['你的狗真大！','你狗的真大！','你的真狗大！','你的狗大真！'],ans:0,exp:'你的狗 (chó của bạn) + 真大 (to thật).'},
];

var speakingData = {
  t1:{
    intro:'Nhấn nút loa nghe từng câu mẫu, đọc to theo cho tới khi trôi chảy nhé!',
    models:[
      {zh:'你看，这是猫。',py:'Nǐ kàn, zhè shì māo.',vn:'Bạn xem, đây là con mèo.'},
      {zh:'那是狗吗？',py:'Nà shì gǒu ma?',vn:'Đó có phải con chó không?'},
      {zh:'那儿有鸟吗？',py:'Nàr yǒu niǎo ma?',vn:'Ở đó có chim không?'},
    ],
  },
  t2:{
    intro:'Dùng khung câu cho sẵn, thay thế phần gạch chân bằng từ trong ô gợi ý. Nhấn nút loa để nghe rồi nói to mỗi câu con tạo được.',
    drills:[
      {frame:'这是＿＿。',frame_py:'Zhè shì ___.',vn:'Đây là ＿＿.',options:['鸟','鱼'],samples:['这是鸟。','这是鱼。']},
    ],
  },
  t3:{
    intro:'Không nhìn câu mẫu, con hãy tưởng tượng mình đang ở trong tình huống thật và tự nói câu phù hợp nhé!',
    tasks:[
      {role:'🐱 Tình huống 1 — Khoe con vật của mình',
       guide:'Con có một con mèo bé xíu. Con khoe với bạn.',
       structure:['我的……真……！'],
       sample:'我的猫真小！',
       sample_vn:'Mèo của mình nhỏ thật!',
       note:'Có thể thay 猫 bằng 狗, 鱼, 鸟 và đổi tính từ 大 / 小.'},
      {role:'🐶 Tình huống 2 — Con chó của ai?',
       guide:'Ở sân trường xa xa có một con chó. Con hỏi bạn đó là chó của ai.',
       structure:['那是谁的……？'],
       sample:'那是谁的狗？',
       sample_vn:'Đó là chó của ai?',
       note:'Ở xa dùng 那; 谁的 = của ai.'},
    ],
  },
};

// ══════════════════════════════════════════
// LUYỆN DỊCH (Việt→Trung) — câu ví dụ của chính bài này
// ══════════════════════════════════════════
var translateData = [
  {vi:"Bạn xem, đó là chim!", zh:"你看，那是鸟！", py:"Nǐ kàn, nà shì niǎo!"},
  {vi:"Chó của mình rất nhỏ.", zh:"我的狗很小。", py:"Wǒ de gǒu hěn xiǎo."},
];

// ══════════════════════════════════════════
// LUYỆN DỊCH (Trung→Việt) — lời thoại trong bài, khác chiều Việt→Trung
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:"Đây là mèo của ai?", zh:"这是谁的猫？", py:"Zhè shì shéi de māo?"},
  {vi:"Chó ở đây nhiều thật!", zh:"这儿的狗真多！", py:"Zhèr de gǒu zhēn duō!"},
];

// ══════════════════════════════════════════
// LUYỆN NGHE — đoạn nghe ngắn (đọc bằng giọng máy), chỉ dùng từ đã học
// ══════════════════════════════════════════
var listenData = [
  {audio:'你看，猫真小！',
   questions:[
     {q:'Con mèo thế nào?',opts:['To','Nhỏ','Không nói'],ans:1,exp:'猫真小 = con mèo nhỏ thật.'},
   ]},
  {audio:'你家有狗吗？没有，我家有猫。',
   questions:[
     {q:'Nhà bạn nhỏ nuôi con gì?',opts:['Chó','Mèo','Cá'],ans:1,exp:'我家有猫 = nhà mình có mèo; 没有 = không có chó.'},
   ]},
  {audio:'那儿有很多鱼。',
   questions:[
     {q:'Ở đó có gì?',opts:['Nhiều cá','Nhiều chim','Nhiều mèo'],ans:0,exp:'很多鱼 = rất nhiều cá.'},
   ]},
  {audio:'甜甜的狗很大，她的猫很小。',
   questions:[
     {q:'Con chó của Điềm Điềm thế nào?',opts:['Nhỏ','Không nói','To'],ans:2,exp:'甜甜的狗很大 = chó của Điềm Điềm rất to.'},
     {q:'Còn con mèo thì sao?',opts:['To','Nhỏ','Không có mèo'],ans:1,exp:'她的猫很小 = mèo của bạn ấy rất nhỏ.'},
   ]},
];
