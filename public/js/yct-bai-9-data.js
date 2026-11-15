// ══════════════════════════════════════════
// DATA — YCT Bài 9: 你的生日是几月几号？
// ══════════════════════════════════════════
var vocabData = [
  {n:1,zh:'生日',py:'shēngrì',pos:'Danh từ',vn:'sinh nhật', hv: 'sinh nhật',em:'🎂',lesson:1,
   ex_zh:'你的生日是几月几号？',ex_py:'Nǐ de shēngrì shì jǐ yuè jǐ hào?',ex_vn:'Sinh nhật bạn là ngày mấy tháng mấy?',
   exList:[{zh:'你的生日是几月几号？',py:'Nǐ de shēngrì shì jǐ yuè jǐ hào?',vn:'Sinh nhật bạn là ngày mấy tháng mấy?'},{zh:'今天是我的生日！',py:'Jīntiān shì wǒ de shēngrì!',vn:'Hôm nay là sinh nhật tớ!'}],
   hanzi:[
     {c:'生',p:'shēng',type:'独体字 · Tượng hình',st:5,ord:'丿(mầm) → 十(thân) → 一(đất)',rad:'生 (sinh – tự thành bộ)',mean:'sinh ra, sống',
      tip:'Hình cây non nhú lên khỏi mặt đất 一 → SINH RA, SỐNG.',
      cf:'主 (zhǔ – "chủ")',w:'生日'},
     {c:'日',p:'rì',type:'独体字 · Tượng hình',st:4,ord:'丨→ 乛→ 一→ 一',rad:'日 (nhật – tự thành bộ)',mean:'ngày, mặt trời',
      tip:'Hình vẽ mặt trời tròn với một vạch ngang ở giữa → NGÀY, MẶT TRỜI.',
      cf:'目 (mù – "mắt", hình dáng gần giống nhưng dài hơn)',w:'生日'},
   ]},
  {n:2,zh:'月',py:'yuè',pos:'Danh từ',vn:'tháng', hv: 'nguyệt',em:'🌙',lesson:1,
   ex_zh:'五月',ex_py:'wǔ yuè',ex_vn:'tháng năm',
   exList:[{zh:'我的生日是五月一号。',py:'Wǒ de shēngrì shì wǔ yuè yī hào.',vn:'Sinh nhật mình là ngày 1 tháng 5.'},{zh:'我的生日是十月九号。',py:'Wǒ de shēngrì shì shí yuè jiǔ hào.',vn:'Sinh nhật tớ là ngày 9 tháng 10.'}],
   hanzi:[
     {c:'月',p:'yuè',type:'独体字 · Tượng hình',st:4,ord:'丿→ 乛→ 一→ 一',rad:'月 (nguyệt – tự thành bộ)',mean:'tháng, mặt trăng',
      tip:'Hình vẽ mặt trăng khuyết → THÁNG, MẶT TRĂNG.',
      cf:'用 (yòng – "dùng")',w:'五月'},
   ]},
  {n:3,zh:'号',py:'hào',pos:'Lượng từ',vn:'ngày (số ngày trong tháng)', hv: 'hiệu',em:'📅',lesson:1,
   ex_zh:'明天是四号。',ex_py:'Míngtiān shì sì hào.',ex_vn:'Ngày mai là mùng 4.',
   exList:[
     {zh:'明天是四号。',py:'Míngtiān shì sì hào.',vn:'Ngày mai là mùng 4.'},
     {zh:'今天是几月几号？',py:'Jīntiān shì jǐ yuè jǐ hào?',vn:'Hôm nay là ngày mấy tháng mấy?'},
   ],
   hanzi:[
     {c:'号',p:'hào',type:'上下结构 · Trên-dưới',st:5,ord:'口(khẩu) trên → 丂(giản lược) dưới',rad:'口 (khẩu – miệng)',mean:'số, ngày',
      tip:'Miệng 口 hô lên một con số để gọi tên ngày trong tháng → SỐ, NGÀY.',
      cf:'叫 (jiào – "gọi tên", đã học ở Bài 2)',w:'五月一号'},
   ]},
  {n:4,zh:'今天',py:'jīntiān',pos:'Danh từ',vn:'hôm nay', hv: 'kim thiên',em:'📆',lesson:1,
   ex_zh:'今天是三号。',ex_py:'Jīntiān shì sān hào.',ex_vn:'Hôm nay là ngày 3.',
   exList:[{zh:'今天是三号。',py:'Jīntiān shì sān hào.',vn:'Hôm nay là ngày 3.'},{zh:'今天是我妈妈的生日。',py:'Jīntiān shì wǒ māma de shēngrì.',vn:'Hôm nay là sinh nhật mẹ tớ.'}],
   hanzi:[
     {c:'今',p:'jīn',type:'上下结构 · Trên-dưới',st:4,ord:'𠆢(nắp) trên → 一→乛(giản lược) dưới',rad:'人 (nhân – người)',mean:'nay, hiện tại',
      tip:'Nét trên như nắp đậy khoanh vùng ngay THỜI ĐIỂM này → NAY, HIỆN TẠI.',
      cf:'令 (lìng – "lệnh")',w:'今天'},
     {c:'天',p:'tiān',type:'独体字 · Chữ đơn',st:4,ord:'一(trời) → 大(người dang tay)',rad:'大 (đại – to lớn)',mean:'trời, ngày',
      tip:'Trên chữ 大 (người dang tay chân) thêm một nét ngang chỉ khoảng không phía trên đầu → TRỜI, rồi mở rộng thành NGÀY.',
      cf:'夫 (fū – "chồng, người đàn ông")',w:'今天 / 明天'},
   ]},
  {n:5,zh:'明天',py:'míngtiān',pos:'Danh từ',vn:'ngày mai', hv: 'minh thiên',em:'🌅',lesson:2,
   ex_zh:'明天是你的生日吗？',ex_py:'Míngtiān shì nǐ de shēngrì ma?',ex_vn:'Ngày mai là sinh nhật bạn à?',
   exList:[{zh:'明天是你的生日吗？',py:'Míngtiān shì nǐ de shēngrì ma?',vn:'Ngày mai là sinh nhật bạn à?'},{zh:'明天我去学校。',py:'Míngtiān wǒ qù xuéxiào.',vn:'Ngày mai tớ đi học.'}],
   hanzi:[
     {c:'明',p:'míng',type:'左右结构 · Trái-phải',st:8,ord:'日(nhật) trái → 月(nguyệt) phải',rad:'日 (nhật – mặt trời)',mean:'sáng, rõ',
      tip:'Mặt trời 日 và mặt trăng 月 cùng chiếu sáng → SÁNG, RÕ; 明天 nghĩa đen là "ngày mặt trời mọc lại" → NGÀY MAI.',
      cf:'朋 (péng – "bạn", cũng ghép 2 bộ trông giống)',w:'明天'},
   ]},
  {n:6,zh:'星期',py:'xīngqī',pos:'Danh từ',vn:'tuần', hv: 'tinh kỳ',em:'🗓️',lesson:2,
   ex_zh:'一个星期',ex_py:'yí ge xīngqī',ex_vn:'một tuần',
   exList:[{zh:'一个星期',py:'yí ge xīngqī',vn:'một tuần'},{zh:'今天星期几？',py:'Jīntiān xīngqī jǐ?',vn:'Hôm nay là thứ mấy?'}],
   hanzi:[
     {c:'星',p:'xīng',type:'上下结构 · Trên-dưới',st:9,ord:'日(nhật) trên → 生(sinh) dưới',rad:'日 (nhật)',mean:'ngôi sao',
      tip:'Trên 日 (ánh sáng nhỏ) và dưới 生 (mọc lên) → những đốm sáng mọc lên trên bầu trời đêm → NGÔI SAO.',
      cf:'生 (shēng – "sinh ra", đã học ở bài này)',w:'星期'},
     {c:'期',p:'qī',type:'左右结构 · Trái-phải',st:12,ord:'其(kỳ) trái → 月(nguyệt) phải',rad:'月 (nguyệt – chu kỳ tháng)',mean:'kỳ, hạn',
      tip:'Ghép với 月 (chu kỳ mặt trăng) để chỉ một khoảng thời gian định kỳ → KỲ HẠN; 星期 = TUẦN.',
      cf:'欺 (qī – "lừa dối")',w:'星期'},
   ]},
  {n:7,zh:'喜欢',py:'xǐhuan',pos:'Động từ',vn:'thích', hv: 'hỉ hoan',em:'😍',lesson:2,
   ex_zh:'我喜欢猫。',ex_py:'Wǒ xǐhuan māo.',ex_vn:'Mình thích mèo.',
   exList:[{zh:'我喜欢猫。',py:'Wǒ xǐhuan māo.',vn:'Mình thích mèo.'},{zh:'你喜欢鸟吗？',py:'Nǐ xǐhuan niǎo ma?',vn:'Bạn có thích chim không?'}],
   hanzi:[
     {c:'喜',p:'xǐ',type:'上下结构 · Trên-dưới',st:12,ord:'士(sĩ) → 豆(giản lược, trống) → 口(khẩu) dưới',rad:'口 (khẩu – miệng)',mean:'vui, thích',
      tip:'Hình trống phía trên và miệng 口 cười phía dưới → VUI MỪNG.',
      cf:'嘉 (jiā – "tốt đẹp")',w:'喜欢'},
     {c:'欢',p:'huān',type:'左右结构 · Trái-phải',st:6,ord:'又(hựu) trái → 欠(khiếm) phải',rad:'欠 (khiếm – người há miệng)',mean:'vui, thích',
      tip:'Bộ 欠 thể hiện người há miệng reo vui; ghép cùng 喜 tạo thành 喜欢 = THÍCH.',
      cf:'次 (cì – "lần")',w:'喜欢'},
   ]},
];

var wuData = [
  {img:'🎂',label:'生日',py:'shēngrì',letter:'A'},
  {img:'🌙',label:'月',py:'yuè',letter:'B'},
  {img:'📆',label:'今天',py:'jīntiān',letter:'C'},
  {img:'🌅',label:'明天',py:'míngtiān',letter:'D'},
  {img:'🗓️',label:'星期',py:'xīngqī',letter:'E'},
  {img:'😍',label:'喜欢',py:'xǐhuan',letter:'F'},
];

var dialogData = [
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
var fillData = [
  {pre:'Cả nhà chuẩn bị bánh cho mẹ: “今天是妈妈的',blank:'生日',post:'！”',hint:'(sinh nhật)',ans:'生日',exp:'生日 = sinh nhật: 妈妈的生日 = sinh nhật mẹ.'},
  {pre:'Sinh nhật anh trai là ngày 6 tháng 7: “哥哥的生日是七',blank:'月',post:'六号。”',hint:'(tháng)',ans:'月',exp:'Tháng đứng trước ngày: 七月六号 = ngày 6 tháng 7.'},
  {pre:'Hôm nay là Giáng sinh, ngày 25 tháng 12: “今天是十二月二十五',blank:'号',post:'。”',hint:'(ngày)',ans:'号',exp:'Số + 号 = ngày: 二十五号 = ngày 25.'},
  {pre:'Hôm nay là thứ Sáu: “',blank:'今天',post:'是星期五。”',hint:'(hôm nay)',ans:'今天',exp:'今天 = hôm nay; 星期五 = thứ Sáu.'},
  {pre:'Ngày mai là sinh nhật Điềm Điềm: “',blank:'明天',post:'是甜甜的生日。”',hint:'(ngày mai)',ans:'明天',exp:'明天 = ngày mai.'},
  {pre:'Con quên mất hôm nay thứ mấy, con hỏi mẹ: “今天',blank:'星期',post:'几？”',hint:'(tuần — thứ)',ans:'星期',exp:'Hỏi thứ: 星期几？ 星期一 là thứ Hai.'},
  {pre:'Con rất thích trường mình: “我',blank:'喜欢',post:'我的学校。”',hint:'(thích)',ans:'喜欢',exp:'喜欢 + người/vật = thích: 我喜欢我的学校.'},
];

// Sắp xếp — câu ngày tháng & sở thích
var sortData = [
  {words:['你','喜欢','狗','吗','？'],ans:'你喜欢狗吗？',audio:'你喜欢狗吗？'},
  {words:['我','的','生日','不','是','明天','。'],ans:'我的生日不是明天。',audio:'我的生日不是明天。'},
  {words:['明天','是','几','月','几','号','？'],ans:'明天是几月几号？',audio:'明天是几月几号？'},
  {words:['妹妹','喜欢','鱼','，','不','喜欢','鸟','。'],ans:'妹妹喜欢鱼，不喜欢鸟。',audio:'妹妹喜欢鱼，不喜欢鸟。'},
  {words:['六月','一','号','是','星期','几','？'],ans:'六月一号是星期几？',audio:'六月一号是星期几？'},
];

var matchData = [
  {left:'你的生日是几月几号？',right:'五月一号。'},
  {left:'今天星期几？',right:'星期三。'},
  {left:'你喜欢猫吗？',right:'喜欢！'},
  {left:'明天是几号？',right:'明天是八号。'},
  {left:'今天是你的生日吗？',right:'不是，明天是。'},
  {left:'你喜欢什么？',right:'我喜欢狗。'},
];

// Trắc nghiệm — không audio
var mcData = [
  {q:'Con muốn nói: “Hôm nay là ngày 3 tháng 8.”',opts:['今天是八月三号。','今天是三号八月。','今天是三月八号。','今天八月是三号。'],ans:0,exp:'Tiếng Trung nói tháng trước, ngày sau: 八月三号 — ngược với tiếng Việt "ngày 3 tháng 8".'},
  {q:'Con muốn hỏi: “Sinh nhật bố là ngày mấy tháng mấy?”',opts:['爸爸的生日是几月几号？','爸爸的生日是几号几月？','爸爸的生日几月几号是？','爸爸的生日是什么月什么号？'],ans:0,exp:'Hỏi ngày tháng: 几月几号 (tháng trước, ngày sau), dùng 几 chứ không dùng 什么.'},
  {q:'Con thích chim, cũng thích cá. Con nói:',opts:['我喜欢鸟，也喜欢鱼。','我喜欢鸟，喜欢也鱼。','我喜欢鸟，也鱼喜欢。','我也喜欢鸟，喜欢鱼也。'],ans:0,exp:'也 đứng trước động từ: 也喜欢鱼. Không đặt 也 sau động từ hay cuối câu.'},
  {q:'Bạn hỏi ngày mai có phải sinh nhật con không. Không phải. Con đáp:',opts:['不是。','没有。','不有。','不在。'],ans:0,exp:'Câu hỏi có 是 → trả lời phủ định bằng 不是.'},
  {q:'Hôm nay là 星期三 (thứ Tư). Ngày mai là:',opts:['星期四','星期五','星期三','星期六'],ans:0,exp:'星期三 + 1 = 星期四 (thứ Năm). Nhớ: 星期一 là thứ Hai, nên số luôn nhỏ hơn "thứ" trong tiếng Việt 1 đơn vị.'},
  {q:'Con muốn nói: “Mình không thích chó.”',opts:['我不喜欢狗。','我喜欢不狗。','不我喜欢狗。','我不是喜欢狗。'],ans:0,exp:'不 đứng ngay trước 喜欢: 我不喜欢狗. Không thêm 是.'},
];

var speakingData = {
  t1:{
    intro:'Nhấn nút loa nghe từng câu mẫu, đọc to theo cho tới khi trôi chảy nhé!',
    models:[
      {zh:'今天是几号？',py:'Jīntiān shì jǐ hào?',vn:'Hôm nay là ngày mấy?'},
      {zh:'明天是你的生日吗？',py:'Míngtiān shì nǐ de shēngrì ma?',vn:'Ngày mai là sinh nhật bạn à?'},
    ],
  },
  t2:{
    intro:'Dùng khung câu cho sẵn, thay thế phần gạch chân bằng từ trong ô gợi ý. Nhấn nút loa để nghe rồi nói to mỗi câu con tạo được.',
    drills:[
      {frame:'今天是＿＿号。',frame_py:'Jīntiān shì ___ hào.',vn:'Hôm nay là ngày ＿＿.',options:['九','十'],samples:['今天是九号。','今天是十号。']},
    ],
  },
  t3:{
    intro:'Không nhìn câu mẫu, con hãy tưởng tượng mình đang ở trong tình huống thật và tự nói câu phù hợp nhé!',
    tasks:[
      {role:'🎂 Tình huống 1 — Sinh nhật của con',
       guide:'Bạn hỏi sinh nhật con là ngày nào. Con nói ngày sinh nhật thật của mình.',
       structure:['我的生日是……月……号。'],
       sample:'我的生日是十二月二十号。',
       sample_vn:'Sinh nhật mình là ngày 20 tháng 12.',
       note:'Nói tháng trước, ngày sau: ……月……号.'},
      {role:'🐶 Tình huống 2 — Em thích con gì?',
       guide:'Con kể với cô giáo em gái con thích con vật nào.',
       structure:['我妹妹喜欢……'],
       sample:'我妹妹喜欢狗。',
       sample_vn:'Em gái con thích chó.',
       note:'喜欢 + con vật / đồ vật mình thích.'},
      {role:'📅 Tình huống 3 — Sinh nhật vào thứ mấy?',
       guide:'Con muốn biết năm nay sinh nhật bạn rơi vào thứ mấy.',
       structure:['你的生日是星期几？'],
       sample:'你的生日是星期几？',
       sample_vn:'Sinh nhật bạn vào thứ mấy?',
       note:'星期 + 几 để hỏi thứ; trả lời 星期一, 星期二……'},
    ],
  },
};

// ══════════════════════════════════════════
// LUYỆN DỊCH (Việt→Trung) — câu ví dụ của chính bài này
// ══════════════════════════════════════════
var translateData = [
  {vi:"Sinh nhật cô giáo là tháng mấy?", zh:"老师的生日是几月？", py:"Lǎoshī de shēngrì shì jǐ yuè?"},
  {vi:"Ngày 1 tháng 6 mình không đi học.", zh:"六月一号我不去学校。", py:"Liù yuè yī hào wǒ bú qù xuéxiào."},
];

// ══════════════════════════════════════════
// LUYỆN DỊCH (Trung→Việt) — lời thoại trong bài, khác chiều Việt→Trung
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:"Mẹ mình thích chim.", zh:"我妈妈喜欢鸟。", py:"Wǒ māma xǐhuan niǎo."},
  {vi:"Ngày mai là thứ Hai à?", zh:"明天是星期一吗？", py:"Míngtiān shì xīngqīyī ma?"},
];

// ══════════════════════════════════════════
// LUYỆN NGHE — đoạn nghe ngắn (đọc bằng giọng máy), chỉ dùng từ đã học
// ══════════════════════════════════════════
var listenData = [
  {audio:'我的生日是三月十号。',
   questions:[
     {q:'Sinh nhật bạn nhỏ là ngày nào?',opts:['Ngày 10 tháng 3','Ngày 3 tháng 10','Ngày 13 tháng 3'],ans:0,exp:'三月十号 = tháng 3, ngày 10.'},
   ]},
  {audio:'明天星期六，我们不去学校。',
   questions:[
     {q:'Ngày mai là thứ mấy?',opts:['Thứ Sáu','Thứ Bảy','Chủ nhật'],ans:1,exp:'星期六 = thứ Bảy.'},
     {q:'Ngày mai các bạn có đi học không?',opts:['Có','Không nói','Không'],ans:2,exp:'不去学校 = không đi học.'},
   ]},
  {audio:'甜甜喜欢猫吗？她喜欢。',
   questions:[
     {q:'Điềm Điềm có thích mèo không?',opts:['Có','Không','Không nói'],ans:0,exp:'她喜欢 = bạn ấy thích.'},
   ]},
  {audio:'妈妈的生日是明天。',
   questions:[
     {q:'Ngày mai là sinh nhật của ai?',opts:['Của bố','Của mẹ','Của bạn nhỏ'],ans:1,exp:'妈妈的生日 = sinh nhật mẹ; 是明天 = là ngày mai.'},
   ]},
];
