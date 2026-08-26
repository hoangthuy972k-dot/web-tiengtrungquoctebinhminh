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

const wuData = [
  {img:'🐱',label:'猫',py:'māo',letter:'A'},
  {img:'🐶',label:'狗',py:'gǒu',letter:'B'},
  {img:'🐟',label:'鱼',py:'yú',letter:'C'},
  {img:'🐦',label:'鸟',py:'niǎo',letter:'D'},
  {img:'👀',label:'看',py:'kàn',letter:'E'},
  {img:'👉',label:'这',py:'zhè',letter:'F'},
];

const dialogData = [
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

// Sắp xếp — câu về vật gần/xa và động vật
const sortData = [
  {words:['这','是','猫','。'],ans:'这是猫。',audio:'这是猫。'},
  {words:['那','是','狗','。'],ans:'那是狗。',audio:'那是狗。'},
  {words:['猫','真','小','。'],ans:'猫真小。',audio:'猫真小。'},
  {words:['狗','真','大','。'],ans:'狗真大。',audio:'狗真大。'},
  {words:['这儿','有','鱼','。'],ans:'这儿有鱼。',audio:'这儿有鱼。'},
  {words:['那儿','有','鸟','吗','？'],ans:'那儿有鸟吗？',audio:'那儿有鸟吗？'},
];

const matchData = [
  {left:'这是什么？',right:'这是猫。'},
  {left:'那是狗吗？',right:'那是狗。'},
  {left:'这儿有鱼吗？',right:'这儿有鱼。'},
  {left:'那儿有鸟吗？',right:'那儿有鸟。'},
  {left:'猫大吗？',right:'猫很小。'},
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
];

const speakingData = {
  t1:{
    intro:'Nhấn 🔊 nghe từng câu mẫu, đọc to theo cho tới khi trôi chảy nhé!',
    models:[
      {zh:'你看，这是猫。',py:'Nǐ kàn, zhè shì māo.',vn:'Bạn xem, đây là con mèo.'},
      {zh:'那是狗。',py:'Nà shì gǒu.',vn:'Đó là con chó.'},
      {zh:'猫真小！',py:'Māo zhēn xiǎo!',vn:'Con mèo nhỏ thật!'},
      {zh:'这儿有鱼。',py:'Zhèr yǒu yú.',vn:'Ở đây có cá.'},
      {zh:'那儿有鸟吗？',py:'Nàr yǒu niǎo ma?',vn:'Ở đó có chim không?'},
    ],
  },
  t2:{
    intro:'Dùng khung câu cho sẵn, thay thế phần gạch chân bằng từ trong ô gợi ý. Nhấn 🔊 để nghe rồi nói to mỗi câu con tạo được.',
    drills:[
      {frame:'这是＿＿。',frame_py:'Zhè shì ___.',vn:'Đây là ＿＿.',options:['猫','狗','鱼'],samples:['这是猫。','这是狗。','这是鱼。']},
    ],
  },
  t3:{
    intro:'Không nhìn câu mẫu, con hãy tưởng tượng mình đang ở trong tình huống thật và tự nói câu phù hợp nhé!',
    tasks:[
      {role:'🐱 Tình huống 1 — Giới thiệu con mèo của mình',
       guide:'Con chỉ vào con mèo đang đứng ngay cạnh mình và giới thiệu cho bạn xem.',
       structure:['你看，这是猫。','这是我的猫。'],
       sample:'你看，这是猫。这是我的猫。',
       sample_vn:'Bạn xem, đây là con mèo. Đây là con mèo của mình.',
       note:'这 dùng khi vật ở NGAY gần mình; nếu vật ở xa thì phải đổi thành 那.'},
      {role:'🐶 Tình huống 2 — Hỏi về con vật ở đằng xa',
       guide:'Con nhìn thấy một con vật ở đằng xa và hỏi bạn xem đó là con gì.',
       structure:['那是狗吗？','那是狗。','狗真大！'],
       sample:'那是狗吗？那是狗。狗真大！',
       sample_vn:'Đó có phải con chó không? Đó là con chó. Con chó to thật!',
       note:'那 dùng cho vật ở XA; 吗 đặt cuối câu để hỏi có/không.'},
      {role:'🐟 Tình huống 3 — Tả nơi có cá và chim',
       guide:'Con nói cho bạn biết chỗ mình đứng có cá, rồi hỏi xem đằng kia có chim không.',
       structure:['这儿有鱼。','那儿有鸟吗？','有，那儿有鸟。'],
       sample:'这儿有鱼。那儿有鸟吗？有，那儿有鸟。',
       sample_vn:'Ở đây có cá. Ở đó có chim không? Có, ở đó có chim.',
       note:'这儿 = ở đây (gần); 那儿 = ở đó (xa) — luôn đi kèm 有 để nói "có gì ở đâu".'},
    ],
  },
};
