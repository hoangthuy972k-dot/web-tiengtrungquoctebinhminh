// ══════════════════════════════════════════
// DATA — YCT Bài 10: 现在几点？
// ══════════════════════════════════════════
const vocabData = [
  {n:1,zh:'现在',py:'xiànzài',pos:'Danh từ',vn:'bây giờ',em:'🕐',lesson:1,
   ex_zh:'现在几点？',ex_py:'Xiànzài jǐ diǎn?',ex_vn:'Bây giờ là mấy giờ?',
   exList:[{zh:'现在几点？',py:'Xiànzài jǐ diǎn?',vn:'Bây giờ là mấy giờ?'}],
   hanzi:[
     {c:'现',p:'xiàn',type:'左右结构 · Trái-phải',st:8,ord:'王(ngọc) trái → 见(kiến) phải',rad:'王 (ngọc – ngọc quý)',mean:'hiện tại, bây giờ',
      tip:'Bộ 王 (ngọc quý) ghép với 见 (nhìn thấy) → thứ nhìn thấy NGAY trước mắt lúc này → HIỆN TẠI, BÂY GIỜ.',
      cf:'玩 (wán – "chơi", cùng bộ 王)',w:'现在'},
   ]},
  {n:2,zh:'点',py:'diǎn',pos:'Lượng từ',vn:'giờ',em:'⏰',lesson:1,
   ex_zh:'现在八点。',ex_py:'Xiànzài bā diǎn.',ex_vn:'Bây giờ là 8 giờ.',
   exList:[{zh:'现在八点。',py:'Xiànzài bā diǎn.',vn:'Bây giờ là 8 giờ.'}],
   hanzi:[
     {c:'点',p:'diǎn',type:'上下结构 · Trên-dưới',st:9,ord:'占(chiếm) trên → 灬(bốn chấm lửa) dưới',rad:'灬 (hỏa – lửa)',mean:'giờ, chấm, điểm',
      tip:'Bốn chấm lửa nhỏ 灬 tượng trưng những ĐIỂM nhỏ; dùng làm lượng từ để đếm GIỜ.',
      cf:'店 (diàn – "cửa hàng", đã học ở Bài 8)',w:'八点'},
   ]},
  {n:3,zh:'分',py:'fēn',pos:'Lượng từ',vn:'phút',em:'⏱️',lesson:1,
   ex_zh:'八点十分',ex_py:'bā diǎn shí fēn',ex_vn:'8 giờ 10 phút',
   exList:[{zh:'现在八点十分。',py:'Xiànzài bā diǎn shí fēn.',vn:'Bây giờ là 8 giờ 10 phút.'}],
   hanzi:[
     {c:'分',p:'fēn',type:'上下结构 · Trên-dưới',st:4,ord:'八(chia đôi) trên → 刀(dao) dưới',rad:'刀 (đao – con dao)',mean:'phút, chia',
      tip:'Trên là 八 (chia làm hai), dưới là 刀 (dao) dùng để CHIA nhỏ ra — mỗi phần nhỏ của giờ gọi là PHÚT.',
      cf:'今 (jīn – "nay", đã học ở Bài 9)',w:'十分'},
   ]},
  {n:4,zh:'早上',py:'zǎoshang',pos:'Danh từ',vn:'buổi sáng',em:'🌄',lesson:2,
   ex_zh:'早上好！',ex_py:'Zǎoshang hǎo!',ex_vn:'Chào buổi sáng!',
   exList:[{zh:'早上好！',py:'Zǎoshang hǎo!',vn:'Chào buổi sáng!'}],
   hanzi:[
     {c:'早',p:'zǎo',type:'上下结构 · Trên-dưới',st:6,ord:'日(nhật) trên → 十(giản lược) dưới',rad:'日 (nhật – mặt trời)',mean:'sớm, buổi sáng',
      tip:'Mặt trời 日 vừa nhô lên trên đường chân trời 十 → SỚM, buổi SÁNG.',
      cf:'旱 (hàn – "hạn hán")',w:'早上'},
     {c:'上',p:'shàng',type:'独体字 · Chữ đơn',st:3,ord:'一(nền) → 丨(cột) → 一(trên)',rad:'一 (nhất)',mean:'trên, ở trên',
      tip:'Một nét ngang dài là mặt đất, một nét ngắn phía trên → chỉ vị trí Ở TRÊN.',
      cf:'下 (xià – "dưới")',w:'早上'},
   ]},
  {n:5,zh:'太',py:'tài',pos:'Phó từ',vn:'quá, rất',em:'❗',lesson:2,
   ex_zh:'太好了！',ex_py:'Tài hǎo le!',ex_vn:'Tốt quá!',
   exList:[{zh:'太好了！',py:'Tài hǎo le!',vn:'Tốt quá!'}],
   hanzi:[
     {c:'太',p:'tài',type:'独体字 · Chữ đơn',st:4,ord:'大(to lớn) → 丶(chấm nhỏ)',rad:'大 (đại – to lớn)',mean:'quá, rất',
      tip:'Thêm một chấm nhỏ vào chữ 大 (to lớn) như phóng đại thêm nữa → QUÁ, RẤT.',
      cf:'大 (dà – "to, lớn", đã học ở Bài 5)',w:'太好了'},
   ]},
  {n:6,zh:'了',py:'le',pos:'Trợ từ',vn:'(trợ từ nhấn mạnh)',em:'✅',lesson:2,
   ex_zh:'太好了！',ex_py:'Tài hǎo le!',ex_vn:'Tốt quá!',
   exList:[{zh:'太好了！',py:'Tài hǎo le!',vn:'Tốt quá!'}],
   hanzi:[
     {c:'了',p:'le',type:'独体字 · Chữ đơn',st:2,ord:'㇖ → 乚',rad:'乙 (ất)',mean:'trợ từ',
      tip:'Nét móc đơn giản, đặt cuối câu để nhấn mạnh trạng thái vừa xảy ra hoặc thay đổi, như trong 太好了.',
      cf:'子 (zǐ – "con")',w:'太好了'},
   ]},
  {n:7,zh:'明天见',py:'míngtiān jiàn',pos:'Cụm từ',vn:'hẹn ngày mai gặp lại',em:'🤝',lesson:2,
   ex_zh:'明天见！',ex_py:'Míngtiān jiàn!',ex_vn:'Hẹn ngày mai gặp lại!',
   exList:[{zh:'明天见！',py:'Míngtiān jiàn!',vn:'Hẹn ngày mai gặp lại!'}],
   hanzi:[]},
];

const wuData = [
  {img:'🕐',label:'现在',py:'xiànzài',letter:'A'},
  {img:'⏰',label:'点',py:'diǎn',letter:'B'},
  {img:'⏱️',label:'分',py:'fēn',letter:'C'},
  {img:'🌄',label:'早上',py:'zǎoshang',letter:'D'},
  {img:'❗',label:'太',py:'tài',letter:'E'},
  {img:'🤝',label:'明天见',py:'míngtiān jiàn',letter:'F'},
];

const dialogData = [
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
const fillData = [
  {pre:'Con hỏi giờ hiện tại: “',blank:'现在',post:'几点？”',hint:'(bây giờ)',ans:'现在'},
  {pre:'Con trả lời bây giờ 8 giờ: “现在八',blank:'点',post:'。”',hint:'(giờ — lượng từ)',ans:'点'},
  {pre:'Con nói rõ thêm phút: “现在八点十',blank:'分',post:'。”',hint:'(phút)',ans:'分'},
  {pre:'Con khen tình huống tốt đẹp: “太好',blank:'了',post:'！”',hint:'(trợ từ nhấn mạnh)',ans:'了'},
  {pre:'Con thấy còn sớm quá: “',blank:'太',post:'早了！”',hint:'(quá, rất)',ans:'太'},
  {pre:'Con chào buổi sáng: “',blank:'早上',post:'好！”',hint:'(buổi sáng)',ans:'早上'},
  {pre:'Con hẹn gặp lại vào ngày mai: “明天',blank:'见',post:'！”',hint:'(gặp)',ans:'见'},
  {pre:'Con nói mình đi học lúc 8 giờ: “现在八点，我去',blank:'学校',post:'。”',hint:'(trường học)',ans:'学校'},
];

// Sắp xếp — câu về giờ giấc
const sortData = [
  {words:['现在','几','点','？'],ans:'现在几点？',audio:'现在几点？'},
  {words:['现在','八','点','。'],ans:'现在八点。',audio:'现在八点。'},
  {words:['现在','八','点','十','分','。'],ans:'现在八点十分。',audio:'现在八点十分。'},
  {words:['太','好','了','！'],ans:'太好了！',audio:'太好了！'},
  {words:['早上','好','！'],ans:'早上好！',audio:'早上好！'},
  {words:['明天','见','！'],ans:'明天见！',audio:'明天见！'},
];

const matchData = [
  {left:'现在几点？',right:'现在八点。'},
  {left:'你几点去学校？',right:'我八点去学校。'},
  {left:'早上好！',right:'你好！'},
  {left:'现在早吗？',right:'现在太早了。'},
  {left:'明天见！',right:'再见！'},
];

// Trắc nghiệm — không audio
const mcData = [
  {q:'"现在" nghĩa là gì?',opts:['bây giờ','ngày mai','hôm nay','sáng nay'],ans:0},
  {q:'"点" (chỉ giờ) nghĩa là gì?',opts:['giờ (lượng từ)','phút','ngày','tháng'],ans:0},
  {q:'"分" nghĩa là gì?',opts:['phút','giờ','giây','ngày'],ans:0},
  {q:'"早上" nghĩa là gì?',opts:['buổi sáng','buổi tối','buổi trưa','ban đêm'],ans:0},
  {q:'"太...了" dùng để làm gì?',opts:['nhấn mạnh mức độ (quá...)','hỏi câu hỏi','phủ định','so sánh'],ans:0},
  {q:'"明天见" nghĩa là gì?',opts:['hẹn ngày mai gặp lại','tạm biệt mãi mãi','chào buổi sáng','cảm ơn'],ans:0},
  {q:'Câu nào ĐÚNG khi hỏi giờ hiện tại?',opts:['现在几点？','几点现在？','现在点几？','点几现在？'],ans:0},
  {q:'"现在八点十分" nghĩa là gì?',opts:['bây giờ là 8 giờ 10 phút','bây giờ là 10 giờ 8 phút','bây giờ là 8 giờ','bây giờ là 10 giờ'],ans:0},
  {q:'Câu nào ĐÚNG khi nói "Tốt quá!"?',opts:['太好了！','好太了！','了太好！','太了好！'],ans:0},
  {q:'Khi chia tay hẹn gặp lại vào ngày mai, con nói gì?',opts:['明天见！','你好！','谢谢你！','我去学校。'],ans:0},
];

const speakingData = {
  t1:{
    intro:'Nhấn 🔊 nghe từng câu mẫu, đọc to theo cho tới khi trôi chảy nhé!',
    models:[
      {zh:'现在几点？',py:'Xiànzài jǐ diǎn?',vn:'Bây giờ là mấy giờ?'},
      {zh:'现在八点。',py:'Xiànzài bā diǎn.',vn:'Bây giờ là 8 giờ.'},
      {zh:'太好了！',py:'Tài hǎo le!',vn:'Tốt quá!'},
      {zh:'早上好！',py:'Zǎoshang hǎo!',vn:'Chào buổi sáng!'},
      {zh:'明天见！',py:'Míngtiān jiàn!',vn:'Hẹn ngày mai gặp lại!'},
    ],
  },
  t2:{
    intro:'Dùng khung câu cho sẵn, thay thế phần gạch chân bằng từ trong ô gợi ý. Nhấn 🔊 để nghe rồi nói to mỗi câu con tạo được.',
    drills:[
      {frame:'现在＿＿点。',frame_py:'Xiànzài ___ diǎn.',vn:'Bây giờ là ＿＿ giờ.',options:['七','八','九'],samples:['现在七点。','现在八点。','现在九点。']},
    ],
  },
  t3:{
    intro:'Không nhìn câu mẫu, con hãy tưởng tượng mình đang ở trong tình huống thật và tự nói câu phù hợp nhé!',
    tasks:[
      {role:'🕐 Tình huống 1 — Hỏi giờ trước khi đi học',
       guide:'Con hỏi bây giờ là mấy giờ, biết là 8 giờ rồi thì rất vui vì kịp giờ đi học.',
       structure:['现在几点？','现在八点。','太好了，我去学校！'],
       sample:'现在几点？现在八点。太好了，我去学校！',
       sample_vn:'Bây giờ là mấy giờ? Bây giờ là 8 giờ. Tốt quá, mình đi học đây!',
       note:'太...了 dùng để nhấn mạnh cảm xúc — vui, tốt, sớm, muộn... đều có thể đặt vào giữa.'},
      {role:'⏱️ Tình huống 2 — Nói giờ chính xác đến phút',
       guide:'Con muốn nói giờ hiện tại chính xác cả giờ và phút.',
       structure:['现在几点？','现在＿＿点＿＿分。'],
       sample:'现在几点？现在八点十分。',
       sample_vn:'Bây giờ là mấy giờ? Bây giờ là 8 giờ 10 phút.',
       note:'点 đứng trước để chỉ GIỜ, 分 đứng sau để chỉ PHÚT — luôn theo đúng thứ tự này.'},
      {role:'🌄 Tình huống 3 — Chào buổi sáng và tạm biệt',
       guide:'Con chào bạn vào buổi sáng, hỏi giờ, rồi hẹn gặp lại vào ngày mai.',
       structure:['早上好！','现在几点？','现在七点。明天见！'],
       sample:'早上好！现在几点？现在七点。明天见！',
       sample_vn:'Chào buổi sáng! Bây giờ là mấy giờ? Bây giờ là 7 giờ. Hẹn ngày mai gặp lại!',
       note:'明天见 thân mật và cụ thể hơn 再见 — dùng khi biết chắc ngày mai sẽ gặp lại.'},
    ],
  },
};
