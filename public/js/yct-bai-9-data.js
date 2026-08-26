// ══════════════════════════════════════════
// DATA — YCT Bài 9: 你的生日是几月几号？
// ══════════════════════════════════════════
const vocabData = [
  {n:1,zh:'生日',py:'shēngrì',pos:'Danh từ',vn:'sinh nhật',em:'🎂',lesson:1,
   ex_zh:'你的生日是几月几号？',ex_py:'Nǐ de shēngrì shì jǐ yuè jǐ hào?',ex_vn:'Sinh nhật bạn là ngày mấy tháng mấy?',
   exList:[{zh:'你的生日是几月几号？',py:'Nǐ de shēngrì shì jǐ yuè jǐ hào?',vn:'Sinh nhật bạn là ngày mấy tháng mấy?'}],
   hanzi:[
     {c:'生',p:'shēng',type:'独体字 · Tượng hình',st:5,ord:'丿(mầm) → 十(thân) → 一(đất)',rad:'生 (sinh – tự thành bộ)',mean:'sinh ra, sống',
      tip:'Hình cây non nhú lên khỏi mặt đất 一 → SINH RA, SỐNG.',
      cf:'主 (zhǔ – "chủ")',w:'生日'},
     {c:'日',p:'rì',type:'独体字 · Tượng hình',st:4,ord:'丨→ 乛→ 一→ 一',rad:'日 (nhật – tự thành bộ)',mean:'ngày, mặt trời',
      tip:'Hình vẽ mặt trời tròn với một vạch ngang ở giữa → NGÀY, MẶT TRỜI.',
      cf:'目 (mù – "mắt", hình dáng gần giống nhưng dài hơn)',w:'生日'},
   ]},
  {n:2,zh:'月',py:'yuè',pos:'Danh từ',vn:'tháng',em:'🌙',lesson:1,
   ex_zh:'五月',ex_py:'wǔ yuè',ex_vn:'tháng năm',
   exList:[{zh:'我的生日是五月一号。',py:'Wǒ de shēngrì shì wǔ yuè yī hào.',vn:'Sinh nhật mình là ngày 1 tháng 5.'}],
   hanzi:[
     {c:'月',p:'yuè',type:'独体字 · Tượng hình',st:4,ord:'丿→ 乛→ 一→ 一',rad:'月 (nguyệt – tự thành bộ)',mean:'tháng, mặt trăng',
      tip:'Hình vẽ mặt trăng khuyết → THÁNG, MẶT TRĂNG.',
      cf:'用 (yòng – "dùng")',w:'五月'},
   ]},
  {n:3,zh:'号',py:'hào',pos:'Lượng từ',vn:'ngày (số ngày trong tháng)',em:'📅',lesson:1,
   ex_zh:'五月一号',ex_py:'wǔ yuè yī hào',ex_vn:'ngày 1 tháng 5',
   exList:[{zh:'我的生日是五月一号。',py:'Wǒ de shēngrì shì wǔ yuè yī hào.',vn:'Sinh nhật mình là ngày 1 tháng 5.'}],
   hanzi:[
     {c:'号',p:'hào',type:'上下结构 · Trên-dưới',st:5,ord:'口(khẩu) trên → 丂(giản lược) dưới',rad:'口 (khẩu – miệng)',mean:'số, ngày',
      tip:'Miệng 口 hô lên một con số để gọi tên ngày trong tháng → SỐ, NGÀY.',
      cf:'叫 (jiào – "gọi tên", đã học ở Bài 2)',w:'五月一号'},
   ]},
  {n:4,zh:'今天',py:'jīntiān',pos:'Danh từ',vn:'hôm nay',em:'📆',lesson:1,
   ex_zh:'今天是三号。',ex_py:'Jīntiān shì sān hào.',ex_vn:'Hôm nay là ngày 3.',
   exList:[{zh:'今天是三号。',py:'Jīntiān shì sān hào.',vn:'Hôm nay là ngày 3.'}],
   hanzi:[
     {c:'今',p:'jīn',type:'上下结构 · Trên-dưới',st:4,ord:'𠆢(nắp) trên → 一→乛(giản lược) dưới',rad:'人 (nhân – người)',mean:'nay, hiện tại',
      tip:'Nét trên như nắp đậy khoanh vùng ngay THỜI ĐIỂM này → NAY, HIỆN TẠI.',
      cf:'令 (lìng – "lệnh")',w:'今天'},
     {c:'天',p:'tiān',type:'独体字 · Chữ đơn',st:4,ord:'一(trời) → 大(người dang tay)',rad:'大 (đại – to lớn)',mean:'trời, ngày',
      tip:'Trên chữ 大 (người dang tay chân) thêm một nét ngang chỉ khoảng không phía trên đầu → TRỜI, rồi mở rộng thành NGÀY.',
      cf:'夫 (fū – "chồng, người đàn ông")',w:'今天 / 明天'},
   ]},
  {n:5,zh:'明天',py:'míngtiān',pos:'Danh từ',vn:'ngày mai',em:'🌅',lesson:2,
   ex_zh:'明天是你的生日吗？',ex_py:'Míngtiān shì nǐ de shēngrì ma?',ex_vn:'Ngày mai là sinh nhật bạn à?',
   exList:[{zh:'明天是你的生日吗？',py:'Míngtiān shì nǐ de shēngrì ma?',vn:'Ngày mai là sinh nhật bạn à?'}],
   hanzi:[
     {c:'明',p:'míng',type:'左右结构 · Trái-phải',st:8,ord:'日(nhật) trái → 月(nguyệt) phải',rad:'日 (nhật – mặt trời)',mean:'sáng, rõ',
      tip:'Mặt trời 日 và mặt trăng 月 cùng chiếu sáng → SÁNG, RÕ; 明天 nghĩa đen là "ngày mặt trời mọc lại" → NGÀY MAI.',
      cf:'朋 (péng – "bạn", cũng ghép 2 bộ trông giống)',w:'明天'},
   ]},
  {n:6,zh:'星期',py:'xīngqī',pos:'Danh từ',vn:'tuần',em:'🗓️',lesson:2,
   ex_zh:'一个星期',ex_py:'yí ge xīngqī',ex_vn:'một tuần',
   exList:[{zh:'一个星期',py:'yí ge xīngqī',vn:'một tuần'}],
   hanzi:[
     {c:'星',p:'xīng',type:'上下结构 · Trên-dưới',st:9,ord:'日(nhật) trên → 生(sinh) dưới',rad:'日 (nhật)',mean:'ngôi sao',
      tip:'Trên 日 (ánh sáng nhỏ) và dưới 生 (mọc lên) → những đốm sáng mọc lên trên bầu trời đêm → NGÔI SAO.',
      cf:'生 (shēng – "sinh ra", đã học ở bài này)',w:'星期'},
     {c:'期',p:'qī',type:'左右结构 · Trái-phải',st:12,ord:'其(kỳ) trái → 月(nguyệt) phải',rad:'月 (nguyệt – chu kỳ tháng)',mean:'kỳ, hạn',
      tip:'Ghép với 月 (chu kỳ mặt trăng) để chỉ một khoảng thời gian định kỳ → KỲ HẠN; 星期 = TUẦN.',
      cf:'欺 (qī – "lừa dối")',w:'星期'},
   ]},
  {n:7,zh:'喜欢',py:'xǐhuan',pos:'Động từ',vn:'thích',em:'😍',lesson:2,
   ex_zh:'我喜欢猫。',ex_py:'Wǒ xǐhuan māo.',ex_vn:'Mình thích mèo.',
   exList:[{zh:'我喜欢猫。',py:'Wǒ xǐhuan māo.',vn:'Mình thích mèo.'}],
   hanzi:[
     {c:'喜',p:'xǐ',type:'上下结构 · Trên-dưới',st:12,ord:'士(sĩ) → 豆(giản lược, trống) → 口(khẩu) dưới',rad:'口 (khẩu – miệng)',mean:'vui, thích',
      tip:'Hình trống phía trên và miệng 口 cười phía dưới → VUI MỪNG.',
      cf:'嘉 (jiā – "tốt đẹp")',w:'喜欢'},
     {c:'欢',p:'huān',type:'左右结构 · Trái-phải',st:6,ord:'又(hựu) trái → 欠(khiếm) phải',rad:'欠 (khiếm – người há miệng)',mean:'vui, thích',
      tip:'Bộ 欠 thể hiện người há miệng reo vui; ghép cùng 喜 tạo thành 喜欢 = THÍCH.',
      cf:'次 (cì – "lần")',w:'喜欢'},
   ]},
];

const wuData = [
  {img:'🎂',label:'生日',py:'shēngrì',letter:'A'},
  {img:'🌙',label:'月',py:'yuè',letter:'B'},
  {img:'📆',label:'今天',py:'jīntiān',letter:'C'},
  {img:'🌅',label:'明天',py:'míngtiān',letter:'D'},
  {img:'🗓️',label:'星期',py:'xīngqī',letter:'E'},
  {img:'😍',label:'喜欢',py:'xǐhuan',letter:'F'},
];

const dialogData = [
  {scene:'Hỏi sinh nhật',
   lines:[
     {sp:0,zh:'你的生日是几月几号？',py:'Nǐ de shēngrì shì jǐ yuè jǐ hào?',vn:'Sinh nhật bạn là ngày mấy tháng mấy?'},
     {sp:1,zh:'我的生日是五月一号。',py:'Wǒ de shēngrì shì wǔ yuè yī hào.',vn:'Sinh nhật mình là ngày 1 tháng 5.'},
   ]},
  {scene:'Hôm nay và ngày mai',
   lines:[
     {sp:0,zh:'今天是几号？',py:'Jīntiān shì jǐ hào?',vn:'Hôm nay là ngày mấy?'},
     {sp:1,zh:'今天是三号。',py:'Jīntiān shì sān hào.',vn:'Hôm nay là ngày 3.'},
     {sp:0,zh:'明天是你的生日吗？',py:'Míngtiān shì nǐ de shēngrì ma?',vn:'Ngày mai là sinh nhật bạn à?'},
     {sp:1,zh:'不是，我的生日是五月一号。',py:'Bú shì, wǒ de shēngrì shì wǔ yuè yī hào.',vn:'Không phải, sinh nhật mình là ngày 1 tháng 5.'},
   ]},
  {scene:'Nói về sở thích',
   lines:[
     {sp:0,zh:'你喜欢猫吗？',py:'Nǐ xǐhuan māo ma?',vn:'Bạn có thích mèo không?'},
     {sp:1,zh:'我喜欢猫，也喜欢狗。',py:'Wǒ xǐhuan māo, yě xǐhuan gǒu.',vn:'Mình thích mèo, cũng thích chó.'},
   ]},
];

// Điền từ — tình huống ngày tháng và sở thích
const fillData = [
  {pre:'Con hỏi sinh nhật bạn: “你的',blank:'生日',post:'是几月几号？”',hint:'(sinh nhật)',ans:'生日'},
  {pre:'Con nói sinh nhật mình vào tháng 5: “我的生日是五',blank:'月',post:'一号。”',hint:'(tháng)',ans:'月'},
  {pre:'Con nói rõ ngày: “我的生日是五月一',blank:'号',post:'。”',hint:'(ngày, số ngày trong tháng)',ans:'号'},
  {pre:'Con hỏi hôm nay là ngày mấy: “',blank:'今天',post:'是几号？”',hint:'(hôm nay)',ans:'今天'},
  {pre:'Con hỏi ngày mai có phải sinh nhật bạn không: “',blank:'明天',post:'是你的生日吗？”',hint:'(ngày mai)',ans:'明天'},
  {pre:'Con hỏi bạn có thích mèo không: “你',blank:'喜欢',post:'猫吗？”',hint:'(thích)',ans:'喜欢'},
  {pre:'Con nói mình cũng thích chó: “我也喜欢',blank:'狗',post:'。”',hint:'(con chó)',ans:'狗'},
  {pre:'Con nói hôm nay là ngày 3: “今天是三',blank:'号',post:'。”',hint:'(ngày)',ans:'号'},
];

// Sắp xếp — câu về ngày tháng và sở thích
const sortData = [
  {words:['今天','是','三','号','。'],ans:'今天是三号。',audio:'今天是三号。'},
  {words:['明天','是','你','的','生日','吗','？'],ans:'明天是你的生日吗？',audio:'明天是你的生日吗？'},
  {words:['我','的','生日','是','五','月','一','号','。'],ans:'我的生日是五月一号。',audio:'我的生日是五月一号。'},
  {words:['你','喜欢','猫','吗','？'],ans:'你喜欢猫吗？',audio:'你喜欢猫吗？'},
  {words:['我','喜欢','狗','。'],ans:'我喜欢狗。',audio:'我喜欢狗。'},
  {words:['我','也','喜欢','猫','。'],ans:'我也喜欢猫。',audio:'我也喜欢猫。'},
];

const matchData = [
  {left:'你的生日是几月几号？',right:'我的生日是五月一号。'},
  {left:'今天是几号？',right:'今天是三号。'},
  {left:'明天是你的生日吗？',right:'不是，我的生日是五月一号。'},
  {left:'你喜欢猫吗？',right:'我喜欢猫。'},
  {left:'你喜欢狗吗？',right:'我也喜欢狗。'},
];

// Trắc nghiệm — không audio
const mcData = [
  {q:'"生日" nghĩa là gì?',opts:['sinh nhật','ngày mai','hôm nay','tuần'],ans:0},
  {q:'"月" nghĩa là gì?',opts:['tháng','ngày','tuần','năm'],ans:0},
  {q:'"号" (trong ngày tháng) nghĩa là gì?',opts:['ngày (số)','tháng','tuần','giờ'],ans:0},
  {q:'"今天" nghĩa là gì?',opts:['hôm nay','ngày mai','hôm qua','tuần này'],ans:0},
  {q:'"明天" nghĩa là gì?',opts:['ngày mai','hôm nay','hôm qua','sinh nhật'],ans:0},
  {q:'"星期" nghĩa là gì?',opts:['tuần','tháng','ngày','năm'],ans:0},
  {q:'"喜欢" nghĩa là gì?',opts:['thích','ghét','muốn','biết'],ans:0},
  {q:'Câu nào ĐÚNG khi hỏi sinh nhật bạn?',opts:['你的生日是几月几号？','你生日的是几月几号？','几月几号是你？','你是几月几号生日？'],ans:0},
  {q:'"五月一号" nghĩa là gì?',opts:['ngày 1 tháng 5','ngày 5 tháng 1','tháng 5','ngày 1'],ans:0},
  {q:'Câu nào ĐÚNG khi nói "Mình cũng thích chó."?',opts:['我也喜欢狗。','我喜欢也狗。','也我喜欢狗。','我狗也喜欢。'],ans:0},
];

const speakingData = {
  t1:{
    intro:'Nhấn 🔊 nghe từng câu mẫu, đọc to theo cho tới khi trôi chảy nhé!',
    models:[
      {zh:'你的生日是几月几号？',py:'Nǐ de shēngrì shì jǐ yuè jǐ hào?',vn:'Sinh nhật bạn là ngày mấy tháng mấy?'},
      {zh:'我的生日是五月一号。',py:'Wǒ de shēngrì shì wǔ yuè yī hào.',vn:'Sinh nhật mình là ngày 1 tháng 5.'},
      {zh:'今天是三号。',py:'Jīntiān shì sān hào.',vn:'Hôm nay là ngày 3.'},
      {zh:'你喜欢猫吗？',py:'Nǐ xǐhuan māo ma?',vn:'Bạn có thích mèo không?'},
      {zh:'我喜欢猫，也喜欢狗。',py:'Wǒ xǐhuan māo, yě xǐhuan gǒu.',vn:'Mình thích mèo, cũng thích chó.'},
    ],
  },
  t2:{
    intro:'Dùng khung câu cho sẵn, thay thế phần gạch chân bằng từ trong ô gợi ý. Nhấn 🔊 để nghe rồi nói to mỗi câu con tạo được.',
    drills:[
      {frame:'我喜欢＿＿。',frame_py:'Wǒ xǐhuan ___.',vn:'Mình thích ＿＿.',options:['猫','狗','鱼'],samples:['我喜欢猫。','我喜欢狗。','我喜欢鱼。']},
    ],
  },
  t3:{
    intro:'Không nhìn câu mẫu, con hãy tưởng tượng mình đang ở trong tình huống thật và tự nói câu phù hợp nhé!',
    tasks:[
      {role:'🎂 Tình huống 1 — Hỏi sinh nhật bạn',
       guide:'Con muốn biết sinh nhật của bạn cùng lớp vào ngày nào.',
       structure:['你的生日是几月几号？','我的生日是＿＿月＿＿号。'],
       sample:'你的生日是几月几号？我的生日是五月一号。',
       sample_vn:'Sinh nhật bạn là ngày mấy tháng mấy? Sinh nhật mình là ngày 1 tháng 5.',
       note:'几月几号 luôn đi liền nhau khi hỏi đầy đủ cả tháng và ngày.'},
      {role:'📆 Tình huống 2 — Hỏi hôm nay và ngày mai',
       guide:'Con hỏi hôm nay là ngày mấy, rồi hỏi xem ngày mai có phải sinh nhật bạn không.',
       structure:['今天是几号？','今天是＿＿号。','明天是你的生日吗？'],
       sample:'今天是几号？今天是三号。明天是你的生日吗？',
       sample_vn:'Hôm nay là ngày mấy? Hôm nay là ngày 3. Ngày mai là sinh nhật bạn à?',
       note:'今天 = hôm nay, 明天 = ngày mai — hai từ hay dùng cùng nhau khi nói về thời gian gần.'},
      {role:'😍 Tình huống 3 — Chia sẻ sở thích với bạn',
       guide:'Con hỏi bạn có thích một con vật nào đó không, rồi chia sẻ con cũng thích những gì.',
       structure:['你喜欢猫吗？','我喜欢猫，也喜欢＿＿。'],
       sample:'你喜欢猫吗？我喜欢猫，也喜欢狗。',
       sample_vn:'Bạn có thích mèo không? Mình thích mèo, cũng thích chó.',
       note:'喜欢 + danh từ dùng để nói mình thích điều gì; dùng 也喜欢 để thêm một điều thích nữa.'},
    ],
  },
};
