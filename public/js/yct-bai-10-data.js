// ══════════════════════════════════════════
// DATA — YCT Bài 10: 现在几点？
// ══════════════════════════════════════════
var vocabData = [
  {n:1,zh:'现在',py:'xiànzài',pos:'Danh từ',vn:'bây giờ', hv: 'hiện tại',em:'🕐',lesson:1,
   ex_zh:'现在几点？',ex_py:'Xiànzài jǐ diǎn?',ex_vn:'Bây giờ là mấy giờ?',
   exList:[{zh:'现在几点？',py:'Xiànzài jǐ diǎn?',vn:'Bây giờ là mấy giờ?'},{zh:'现在你在哪儿？',py:'Xiànzài nǐ zài nǎr?',vn:'Bây giờ bạn đang ở đâu?'}],
   hanzi:[
     {c:'现',p:'xiàn',type:'左右结构 · Trái-phải',st:8,ord:'王(ngọc) trái → 见(kiến) phải',rad:'王 (ngọc – ngọc quý)',mean:'hiện tại, bây giờ',
      tip:'Bộ 王 (ngọc quý) ghép với 见 (nhìn thấy) → thứ nhìn thấy NGAY trước mắt lúc này → HIỆN TẠI, BÂY GIỜ.',
      cf:'玩 (wán – "chơi", cùng bộ 王)',w:'现在'},
   ]},
  {n:2,zh:'点',py:'diǎn',pos:'Lượng từ',vn:'giờ', hv: 'điểm',em:'⏰',lesson:1,
   ex_zh:'现在八点。',ex_py:'Xiànzài bā diǎn.',ex_vn:'Bây giờ là 8 giờ.',
   exList:[{zh:'现在八点。',py:'Xiànzài bā diǎn.',vn:'Bây giờ là 8 giờ.'},{zh:'现在十点。',py:'Xiànzài shí diǎn.',vn:'Bây giờ là 10 giờ.'}],
   hanzi:[
     {c:'点',p:'diǎn',type:'上下结构 · Trên-dưới',st:9,ord:'占(chiếm) trên → 灬(bốn chấm lửa) dưới',rad:'灬 (hỏa – lửa)',mean:'giờ, chấm, điểm',
      tip:'Bốn chấm lửa nhỏ 灬 tượng trưng những ĐIỂM nhỏ; dùng làm lượng từ để đếm GIỜ.',
      cf:'店 (diàn – "cửa hàng", đã học ở Bài 8)',w:'八点'},
   ]},
  {n:3,zh:'分',py:'fēn',pos:'Lượng từ',vn:'phút', hv: 'phân',em:'⏱️',lesson:1,
   ex_zh:'八点十分',ex_py:'bā diǎn shí fēn',ex_vn:'8 giờ 10 phút',
   exList:[{zh:'现在八点十分。',py:'Xiànzài bā diǎn shí fēn.',vn:'Bây giờ là 8 giờ 10 phút.'},{zh:'现在七点五十分。',py:'Xiànzài qī diǎn wǔshí fēn.',vn:'Bây giờ là 7 giờ 50 phút.'}],
   hanzi:[
     {c:'分',p:'fēn',type:'上下结构 · Trên-dưới',st:4,ord:'八(chia đôi) trên → 刀(dao) dưới',rad:'刀 (đao – con dao)',mean:'phút, chia',
      tip:'Trên là 八 (chia làm hai), dưới là 刀 (dao) dùng để CHIA nhỏ ra — mỗi phần nhỏ của giờ gọi là PHÚT.',
      cf:'今 (jīn – "nay", đã học ở Bài 9)',w:'十分'},
   ]},
  {n:4,zh:'早上',py:'zǎoshang',pos:'Danh từ',vn:'buổi sáng', hv: 'tảo thượng',em:'🌄',lesson:2,
   ex_zh:'早上好！',ex_py:'Zǎoshang hǎo!',ex_vn:'Chào buổi sáng!',
   exList:[{zh:'早上好！',py:'Zǎoshang hǎo!',vn:'Chào buổi sáng!'},{zh:'我早上七点去学校。',py:'Wǒ zǎoshang qī diǎn qù xuéxiào.',vn:'Tớ đi học lúc 7 giờ sáng.'}],
   hanzi:[
     {c:'早',p:'zǎo',type:'上下结构 · Trên-dưới',st:6,ord:'日(nhật) trên → 十(giản lược) dưới',rad:'日 (nhật – mặt trời)',mean:'sớm, buổi sáng',
      tip:'Mặt trời 日 vừa nhô lên trên đường chân trời 十 → SỚM, buổi SÁNG.',
      cf:'旱 (hàn – "hạn hán")',w:'早上'},
     {c:'上',p:'shàng',type:'独体字 · Chữ đơn',st:3,ord:'一(nền) → 丨(cột) → 一(trên)',rad:'一 (nhất)',mean:'trên, ở trên',
      tip:'Một nét ngang dài là mặt đất, một nét ngắn phía trên → chỉ vị trí Ở TRÊN.',
      cf:'下 (xià – "dưới")',w:'早上'},
   ]},
  {n:5,zh:'太',py:'tài',pos:'Phó từ',vn:'quá, rất', hv: 'thái',em:'❗',lesson:2,
   ex_zh:'太好了！',ex_py:'Tài hǎo le!',ex_vn:'Tốt quá!',
   exList:[{zh:'太好了！',py:'Tài hǎo le!',vn:'Tốt quá!'},{zh:'你的狗太大了！',py:'Nǐ de gǒu tài dà le!',vn:'Chó của bạn to quá!'}],
   hanzi:[
     {c:'太',p:'tài',type:'独体字 · Chữ đơn',st:4,ord:'大(to lớn) → 丶(chấm nhỏ)',rad:'大 (đại – to lớn)',mean:'quá, rất',
      tip:'Thêm một chấm nhỏ vào chữ 大 (to lớn) như phóng đại thêm nữa → QUÁ, RẤT.',
      cf:'大 (dà – "to, lớn", đã học ở Bài 5)',w:'太好了'},
   ]},
  {n:6,zh:'了',py:'le',pos:'Trợ từ',vn:'(trợ từ nhấn mạnh)', hv: 'liễu',em:'✅',lesson:2,
   ex_zh:'太早了！',ex_py:'Tài zǎo le!',ex_vn:'Sớm quá!',
   exList:[
     {zh:'太早了！',py:'Tài zǎo le!',vn:'Sớm quá!'},
     {zh:'我的头发太长了！',py:'Wǒ de tóufa tài cháng le!',vn:'Tóc tớ dài quá rồi!'},
   ],
   hanzi:[
     {c:'了',p:'le',type:'独体字 · Chữ đơn',st:2,ord:'㇖ → 乚',rad:'乙 (ất)',mean:'trợ từ',
      tip:'Nét móc đơn giản, đặt cuối câu để nhấn mạnh trạng thái vừa xảy ra hoặc thay đổi, như trong 太好了.',
      cf:'子 (zǐ – "con")',w:'太好了'},
   ]},
  {n:7,zh:'明天见',py:'míngtiān jiàn',pos:'Cụm từ',vn:'hẹn ngày mai gặp lại', hv: 'minh thiên kiến',em:'🤝',lesson:2,
   ex_zh:'明天见！',ex_py:'Míngtiān jiàn!',ex_vn:'Hẹn ngày mai gặp lại!',
   exList:[{zh:'明天见！',py:'Míngtiān jiàn!',vn:'Hẹn ngày mai gặp lại!'},{zh:'老师，明天见！',py:'Lǎoshī, míngtiān jiàn!',vn:'Con chào cô, mai con gặp cô ạ!'}],
   hanzi:[]},
];

var wuData = [
  {img:'🕐',label:'现在',py:'xiànzài',letter:'A'},
  {img:'⏰',label:'点',py:'diǎn',letter:'B'},
  {img:'⏱️',label:'分',py:'fēn',letter:'C'},
  {img:'🌄',label:'早上',py:'zǎoshang',letter:'D'},
  {img:'❗',label:'太',py:'tài',letter:'E'},
  {img:'🤝',label:'明天见',py:'míngtiān jiàn',letter:'F'},
];

var dialogData = [
  {scene:'Hỏi giờ hiện tại',
   lines:[
     {sp:0,zh:'现在几点？',py:'Xiànzài jǐ diǎn?',vn:'Bây giờ là mấy giờ?'},
     {sp:1,zh:'现在八点。',py:'Xiànzài bā diǎn.',vn:'Bây giờ là 8 giờ.'},
     {sp:0,zh:'太好了，我去学校！',py:'Tài hǎo le, wǒ qù xuéxiào!',vn:'Tốt quá, mình đi học đây!'},
   ]},
  {scene:'Giờ và phút',
   lines:[
     {sp:0,zh:'现在几点？',py:'Xiànzài jǐ diǎn?',vn:'Bây giờ là mấy giờ?'},
     {sp:1,zh:'现在八点十分。',py:'Xiànzài bā diǎn shí fēn.',vn:'Bây giờ là 8 giờ 10 phút.'},
     {sp:0,zh:'太早了！',py:'Tài zǎo le!',vn:'Sớm quá!'},
   ]},
  {scene:'Chào buổi sáng và tạm biệt',
   lines:[
     {sp:0,zh:'早上好！',py:'Zǎoshang hǎo!',vn:'Chào buổi sáng!'},
     {sp:1,zh:'早上好！现在几点？',py:'Zǎoshang hǎo! Xiànzài jǐ diǎn?',vn:'Chào buổi sáng! Bây giờ là mấy giờ?'},
     {sp:0,zh:'现在七点。明天见！',py:'Xiànzài qī diǎn. Míngtiān jiàn!',vn:'Bây giờ là 7 giờ. Hẹn ngày mai gặp lại!'},
   ]},
];

// Điền từ — tình huống giờ giấc
var fillData = [
  {pre:'Đồng hồ báo thức reo, con nhìn đồng hồ: “',blank:'现在',post:'七点！”',hint:'(bây giờ)',ans:'现在',exp:'现在 = bây giờ: 现在七点 = bây giờ là 7 giờ.'},
  {pre:'Anh trai đi học lúc 6 giờ sáng: “哥哥早上六',blank:'点',post:'去学校。”',hint:'(giờ)',ans:'点',exp:'Số + 点 = mấy giờ; thời gian đứng trước 去学校.'},
  {pre:'Đồng hồ chỉ 3 giờ 15: “现在三点十五',blank:'分',post:'。”',hint:'(phút)',ans:'分',exp:'Số + 分 = phút: 十五分 = 15 phút.'},
  {pre:'Lúc 8 giờ sáng con đã ở trường: “',blank:'早上',post:'八点，我在学校。”',hint:'(buổi sáng)',ans:'早上',exp:'早上 = buổi sáng; 早上八点 = 8 giờ sáng.'},
  {pre:'Mèo của bạn bé xíu, con nói: “你的猫',blank:'太',post:'小了！”',hint:'(quá)',ans:'太',exp:'太 + tính từ + 了 = …quá: 太小了.'},
  {pre:'Cô nói mai cả lớp đi chơi. Con reo lên: “太好',blank:'了',post:'！”',hint:'(chữ đi cùng 太)',ans:'了',exp:'太……了 luôn đi cùng nhau: 太好了 = tốt quá!'},
  {pre:'Tan học, con vẫy tay chào bạn, hẹn mai gặp: “',blank:'明天见',post:'！”',hint:'(mai gặp lại)',ans:'明天见',exp:'明天见 = hẹn mai gặp lại.'},
];

// Sắp xếp — câu hỏi giờ & cảm thán
var sortData = [
  {words:['你','早上','几','点','去','学校','？'],ans:'你早上几点去学校？',audio:'你早上几点去学校？'},
  {words:['这','个','商店','太','大','了','！'],ans:'这个商店太大了！',audio:'这个商店太大了！'},
  {words:['妈妈','早上','七','点','去','商店','。'],ans:'妈妈早上七点去商店。',audio:'妈妈早上七点去商店。'},
  {words:['现在','不','是','八','点','。'],ans:'现在不是八点。',audio:'现在不是八点。'},
  {words:['今天','太','好','了','！'],ans:'今天太好了！',audio:'今天太好了！'},
];

var matchData = [
  {left:'现在几点？',right:'现在六点。'},
  {left:'早上好！',right:'老师早上好！'},
  {left:'明天见！',right:'好，明天见！'},
  {left:'你几点去学校？',right:'七点。'},
  {left:'现在五点。',right:'太早了！'},
  {left:'你的狗太大了！',right:'你的猫也很大！'},
];

// Trắc nghiệm — không audio
var mcData = [
  {q:'Con muốn nói: “Mình đi học lúc 7 giờ sáng.”',opts:['我早上七点去学校。','我去学校早上七点。','早上七点去我学校。','我七点早上去学校。'],ans:0,exp:'Thời gian đứng TRƯỚC động từ: 我 + 早上七点 + 去学校. Đặt giờ ở cuối như tiếng Việt là sai; 早上 đứng trước giờ.'},
  {q:'Con chó nhà bạn to quá! Con nói:',opts:['狗太大了！','狗太大！','狗大太了！','狗了太大！'],ans:0,exp:'Cảm thán: 太 + tính từ + 了. Thiếu 了 hoặc đảo vị trí đều sai.'},
  {q:'Con muốn hỏi bố mấy giờ bố đi cửa hàng:',opts:['爸爸，你几点去商店？','爸爸，你去商店几点？','爸爸，几点你去商店吗？','爸爸，你什么点去商店？'],ans:0,exp:'Hỏi giờ: 几点 đứng trước động từ; đã có 几 thì không thêm 吗; không nói 什么点.'},
  {q:'Đồng hồ chỉ 9 giờ 5 phút. Con đọc:',opts:['九点五分','五点九分','九分五点','九五点分'],ans:0,exp:'Giờ trước, phút sau: 九点五分.'},
  {q:'Câu nào SAI?',opts:['现在几点吗？','妹妹早上不在家。','我们几点去？','好，再见！'],ans:0,exp:'Đã có 几 để hỏi thì không thêm 吗: 现在几点？'},
];

var speakingData = {
  t1:{
    intro:'Nhấn nút loa nghe từng câu mẫu, đọc to theo cho tới khi trôi chảy nhé!',
    models:[
      {zh:'现在几点？',py:'Xiànzài jǐ diǎn?',vn:'Bây giờ là mấy giờ?'},
      {zh:'现在八点十分。',py:'Xiànzài bā diǎn shí fēn.',vn:'Bây giờ là 8 giờ 10 phút.'},
      {zh:'太早了！',py:'Tài zǎo le!',vn:'Sớm quá!'},
    ],
  },
  t2:{
    intro:'Dùng khung câu cho sẵn, thay thế phần gạch chân bằng từ trong ô gợi ý. Nhấn nút loa để nghe rồi nói to mỗi câu con tạo được.',
    drills:[
      {frame:'太＿＿了！',frame_py:'Tài ___ le!',vn:'＿＿ quá!',options:['大','小'],samples:['太大了！','太小了！']},
    ],
  },
  t3:{
    intro:'Không nhìn câu mẫu, con hãy tưởng tượng mình đang ở trong tình huống thật và tự nói câu phù hợp nhé!',
    tasks:[
      {role:'⏰ Tình huống 1 — Bây giờ mấy giờ?',
       guide:'Em gái hỏi con bây giờ mấy giờ. Đồng hồ chỉ 9 giờ 20.',
       structure:['现在……点……分。'],
       sample:'现在九点二十分。',
       sample_vn:'Bây giờ là 9 giờ 20 phút.',
       note:'Giờ trước, phút sau: ……点……分.'},
      {role:'🌞 Tình huống 2 — Chào buổi sáng',
       guide:'Sáng sớm con đến lớp, gặp cô giáo ở cửa. Con chào cô.',
       structure:['老师，早上好！'],
       sample:'老师，早上好！',
       sample_vn:'Con chào cô buổi sáng ạ!',
       note:'早上好 dùng để chào buổi sáng.'},
      {role:'🐶 Tình huống 3 — To quá!',
       guide:'Bạn dắt theo một con chó rất to. Con ngạc nhiên nói với bạn.',
       structure:['你的……太……了！'],
       sample:'你的狗太大了！',
       sample_vn:'Chó của bạn to quá!',
       note:'太 + tính từ + 了 để nói "…quá!"'},
    ],
  },
};

// ══════════════════════════════════════════
// LUYỆN DỊCH (Việt→Trung) — câu ví dụ của chính bài này
// ══════════════════════════════════════════
var translateData = [
  {vi:"Trường của chúng mình to quá!", zh:"我们的学校太大了！", py:"Wǒmen de xuéxiào tài dà le!"},
  {vi:"Bây giờ là 6 giờ 5 phút.", zh:"现在六点五分。", py:"Xiànzài liù diǎn wǔ fēn."},
];

// ══════════════════════════════════════════
// LUYỆN DỊCH (Trung→Việt) — lời thoại trong bài, khác chiều Việt→Trung
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:"6 giờ sáng thì sớm quá!", zh:"早上六点太早了！", py:"Zǎoshang liù diǎn tài zǎo le!"},
  {vi:"Mẹ ơi, bây giờ không còn sớm nữa!", zh:"妈妈，现在不早了！", py:"Māma, xiànzài bù zǎo le!"},
];

// ══════════════════════════════════════════
// LUYỆN NGHE — đoạn nghe ngắn (đọc bằng giọng máy), chỉ dùng từ đã học
// ══════════════════════════════════════════
var listenData = [
  {audio:'妹妹几点去老师家？九点。',
   questions:[
     {q:'Em gái đến nhà cô giáo lúc mấy giờ?',opts:['8 giờ','9 giờ','10 giờ'],ans:1,exp:'九点 = 9 giờ.'},
   ]},
  {audio:'现在十点四十分。',
   questions:[
     {q:'Bây giờ là mấy giờ?',opts:['10 giờ 40','4 giờ 10','10 giờ 14'],ans:0,exp:'十点四十分 = 10 giờ 40 phút.'},
   ]},
  {audio:'我们明天早上八点去老师家。',
   questions:[
     {q:'Các bạn sẽ đi đâu?',opts:['Trường học','Nhà cô giáo','Cửa hàng'],ans:1,exp:'去老师家 = đến nhà cô giáo.'},
     {q:'Đi lúc mấy giờ?',opts:['7 giờ sáng','8 giờ tối','8 giờ sáng'],ans:2,exp:'早上八点 = 8 giờ sáng.'},
   ]},
  {audio:'这儿的鱼太多了！',
   questions:[
     {q:'Người nói thấy gì?',opts:['Cá ở đây nhiều quá','Cá ở đây nhỏ quá','Ở đây không có cá'],ans:0,exp:'太多了 = nhiều quá.'},
   ]},
];
