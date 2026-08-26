// ══════════════════════════════════════════
// DATA — YCT Bài 7: 这是猫
// ══════════════════════════════════════════
const vocabData = [
  {n:1,zh:'这',py:'zhè',pos:'Đại từ',vn:'này, đây (vật gần)',em:'👉',lesson:1,
   ex_zh:'这是猫。',ex_py:'Zhè shì māo.',ex_vn:'Đây là con mèo.',
   exList:[{zh:'这是猫。',py:'Zhè shì māo.',vn:'Đây là con mèo.'}],
   hanzi:[
     {c:'这',p:'zhè',type:'半包围结构 · Bán bao vây',st:7,ord:'文(văn) trên-trái → 辶(sước) bao vòng dưới-trái',rad:'辶 (sước – đi bộ)',mean:'này, đây',
      tip:'Bộ 辶 mang nghĩa "đi tới", chỉ vật ở NGAY gần chỗ mình đang đứng → NÀY, ĐÂY.',
      cf:'达 (dá – "đạt tới", cùng bộ 辶)',w:'这是猫 / 这儿'},
   ]},
  {n:2,zh:'那',py:'nà',pos:'Đại từ',vn:'đó, kia (vật xa)',em:'👈',lesson:1,
   ex_zh:'那是狗。',ex_py:'Nà shì gǒu.',ex_vn:'Đó là con chó.',
   exList:[{zh:'那是狗。',py:'Nà shì gǒu.',vn:'Đó là con chó.'}],
   hanzi:[
     {c:'那',p:'nà',type:'左右结构 · Trái-phải',st:6,ord:'尹(hình tay) trái → 阝(ấp) phải',rad:'阝 (ấp – phải, hình người đứng)',mean:'đó, kia',
      tip:'Bộ 阝 bên phải như hình một người đứng XA mình → dùng để chỉ vật ở ĐẰNG XA → ĐÓ, KIA.',
      cf:'哪 (nǎ – "nào?", thêm bộ 口)',w:'那是狗 / 那儿'},
   ]},
  {n:3,zh:'看',py:'kàn',pos:'Động từ',vn:'nhìn, xem',em:'👀',lesson:1,
   ex_zh:'你看，这是鱼。',ex_py:'Nǐ kàn, zhè shì yú.',ex_vn:'Bạn xem, đây là con cá.',
   exList:[{zh:'你看，这是鱼。',py:'Nǐ kàn, zhè shì yú.',vn:'Bạn xem, đây là con cá.'}],
   hanzi:[
     {c:'看',p:'kàn',type:'上下结构 · Trên-dưới',st:9,ord:'手(tay, biến thể) trên → 目(mắt) dưới',rad:'目 (mục – mắt)',mean:'nhìn, xem',
      tip:'Bàn tay đặt ngang trên mắt 目 như che nắng để nhìn xa hơn → NHÌN, XEM.',
      cf:'着 (zhe – trợ từ, gần hình)',w:'你看'},
   ]},
  {n:4,zh:'这儿',py:'zhèr',pos:'Cụm từ',vn:'ở đây',em:'📍',lesson:1,
   ex_zh:'这儿有鱼。',ex_py:'Zhèr yǒu yú.',ex_vn:'Ở đây có cá.',
   exList:[{zh:'这儿有鱼。',py:'Zhèr yǒu yú.',vn:'Ở đây có cá.'}],
   hanzi:[
     {c:'儿',p:'ér',type:'独体字 · Chữ đơn',st:2,ord:'丿→ 乚',rad:'儿 (nhi – tự thành bộ)',mean:'hậu tố chỉ nơi chốn',
      tip:'Hình hai chân người đang đứng; ghép sau 这/那 tạo thành từ chỉ NƠI CHỐN: 这儿 = ở đây.',
      cf:'几 (jǐ – "mấy")',w:'这儿 / 那儿'},
   ]},
  {n:5,zh:'那儿',py:'nàr',pos:'Cụm từ',vn:'ở đó, ở kia',em:'📌',lesson:1,
   ex_zh:'那儿有鸟。',ex_py:'Nàr yǒu niǎo.',ex_vn:'Ở đó có chim.',
   exList:[{zh:'那儿有鸟。',py:'Nàr yǒu niǎo.',vn:'Ở đó có chim.'}],
   hanzi:[]},
  {n:6,zh:'猫',py:'māo',pos:'Danh từ',vn:'con mèo',em:'🐱',lesson:2,
   ex_zh:'猫真小。',ex_py:'Māo zhēn xiǎo.',ex_vn:'Con mèo nhỏ thật.',
   exList:[{zh:'猫真小。',py:'Māo zhēn xiǎo.',vn:'Con mèo nhỏ thật.'}],
   hanzi:[
     {c:'猫',p:'māo',type:'左右结构 · Trái-phải',st:11,ord:'犭(khuyển) trái → 苗(miêu) phải',rad:'犭 (khuyển – thú bốn chân)',mean:'con mèo',
      tip:'Bộ 犭 chỉ loài thú, ghép với 苗 đọc gần giống "meo" → tiếng MÈO kêu.',
      cf:'猜 (cāi – "đoán", cùng bộ 犭)',w:'我的猫'},
   ]},
  {n:7,zh:'狗',py:'gǒu',pos:'Danh từ',vn:'con chó',em:'🐶',lesson:2,
   ex_zh:'狗真大。',ex_py:'Gǒu zhēn dà.',ex_vn:'Con chó to thật.',
   exList:[{zh:'狗真大。',py:'Gǒu zhēn dà.',vn:'Con chó to thật.'}],
   hanzi:[
     {c:'狗',p:'gǒu',type:'左右结构 · Trái-phải',st:8,ord:'犭(khuyển) trái → 句(cú) phải',rad:'犭 (khuyển)',mean:'con chó',
      tip:'Bộ 犭 chỉ loài thú, ghép với 句 gần âm "gâu" → tiếng CHÓ sủa.',
      cf:'猫 (māo – "mèo", cùng bộ 犭)',w:'那是狗'},
   ]},
  {n:8,zh:'鱼',py:'yú',pos:'Danh từ',vn:'con cá',em:'🐟',lesson:2,
   ex_zh:'这儿有鱼。',ex_py:'Zhèr yǒu yú.',ex_vn:'Ở đây có cá.',
   exList:[{zh:'这儿有鱼。',py:'Zhèr yǒu yú.',vn:'Ở đây có cá.'}],
   hanzi:[
     {c:'鱼',p:'yú',type:'独体字 · Tượng hình',st:8,ord:'𠂊(đầu) → 田(thân) → 一(đuôi)',rad:'鱼 (ngư – tự thành bộ)',mean:'con cá',
      tip:'Hình vẽ con cá: phần đầu, thân có vảy hình ô vuông 田 và đuôi xoè bên dưới → CÁ.',
      cf:'鸟 (niǎo – "chim", hình dáng gần giống)',w:'看鱼'},
   ]},
  {n:9,zh:'鸟',py:'niǎo',pos:'Danh từ',vn:'con chim',em:'🐦',lesson:2,
   ex_zh:'那儿有鸟。',ex_py:'Nàr yǒu niǎo.',ex_vn:'Ở đó có chim.',
   exList:[{zh:'那儿有鸟。',py:'Nàr yǒu niǎo.',vn:'Ở đó có chim.'}],
   hanzi:[
     {c:'鸟',p:'niǎo',type:'独体字 · Tượng hình',st:5,ord:'𠂉(đầu, mỏ) → 鸟(thân có chấm mắt) → 一(chân đáy)',rad:'鸟 (điểu – tự thành bộ)',mean:'con chim',
      tip:'Hình vẽ giản lược một con chim: đầu nhỏ có mắt, thân tròn và chân bên dưới → CHIM.',
      cf:'鱼 (yú – "cá")',w:'那儿有鸟'},
   ]},
];

// Trắc nghiệm — không audio
const mcData = [
  {q:'"这" nghĩa là gì?',opts:['này, đây (vật gần)','đó, kia (vật xa)','nhìn, xem','con mèo'],ans:0},
  {q:'"那" nghĩa là gì?',opts:['đó, kia (vật xa)','này, đây (vật gần)','con chó','con cá'],ans:0},
  {q:'"看" nghĩa là gì?',opts:['nhìn, xem','nghe','nói','viết'],ans:0},
  {q:'"猫" nghĩa là gì?',opts:['con mèo','con chó','con cá','con chim'],ans:0},
  {q:'"狗" nghĩa là gì?',opts:['con chó','con mèo','con chim','con cá'],ans:0},
  {q:'"鱼" nghĩa là gì?',opts:['con cá','con chim','con mèo','con chó'],ans:0},
  {q:'"鸟" nghĩa là gì?',opts:['con chim','con cá','con chó','con mèo'],ans:0},
  {q:'"这儿" dùng để chỉ đâu?',opts:['nơi GẦN người nói (ở đây)','nơi XA người nói (ở đó)','một loài vật','một con số'],ans:0},
  {q:'Câu nào ĐÚNG khi nói "Đó là con chó."?',opts:['那是狗。','这是狗。','狗是那。','是那狗。'],ans:0},
  {q:'"那儿" dùng để chỉ đâu?',opts:['nơi XA người nói (ở đó)','nơi GẦN người nói (ở đây)','một con vật','một màu sắc'],ans:0},
  {q:'Câu nào ĐÚNG khi nói "Ở đây có cá."?',opts:['这儿有鱼。','鱼有这儿。','有这儿鱼。','这儿鱼有。'],ans:0},
  {q:'Câu nào ĐÚNG khi khen "Con mèo nhỏ thật!"?',opts:['猫真小！','真猫小！','小猫真！','猫小真！'],ans:0},
  {q:'"这" và "那" khác nhau ở đâu?',opts:['这 chỉ vật gần, 那 chỉ vật xa','cả hai đều chỉ vật gần','cả hai đều chỉ vật xa','không khác nhau'],ans:0},
  {q:'Muốn hỏi "Đó có phải con chó không?", con nói gì?',opts:['那是狗吗？','那是狗。','这是狗吗？','狗是那吗？'],ans:0},
  {q:'"看" dùng trong câu nào?',opts:['你看，这是猫。','你猫，这是看。','看你这是猫。','这看你是猫。'],ans:0},
];

// Điền từ — tình huống về vật gần/xa và động vật
const fillData = [
  {pre:'Con muốn bạn nhìn con mèo của mình: “你',blank:'看',post:'，这是猫。”',hint:'(nhìn, xem)',ans:'看'},
  {pre:'Con chỉ vào con mèo ở NGAY gần mình: “',blank:'这',post:'是猫。”',hint:'(này, đây — vật gần)',ans:'这'},
  {pre:'Con chỉ vào con chó ở đằng XA: “',blank:'那',post:'是狗。”',hint:'(đó, kia — vật xa)',ans:'那'},
  {pre:'Con nói nơi mình đang đứng có cá: “',blank:'这儿',post:'有鱼。”',hint:'(ở đây)',ans:'这儿'},
  {pre:'Con hỏi bạn nơi xa có chim không: “',blank:'那儿',post:'有鸟吗？”',hint:'(ở đó, ở kia)',ans:'那儿'},
  {pre:'Con khen con mèo: “猫真',blank:'小',post:'！”',hint:'(nhỏ, bé)',ans:'小'},
  {pre:'Con khen con chó: “狗真',blank:'大',post:'！”',hint:'(to, lớn)',ans:'大'},
  {pre:'Con xác nhận đó là con chó của mình: “那是我',blank:'的',post:'狗。”',hint:'(trợ từ sở hữu)',ans:'的'},
];
