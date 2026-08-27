// ══════════════════════════════════════════
// DATA — HSK1 Bài 15: 我是坐飞机来的。
// ══════════════════════════════════════════
var vocabData = [
  {n:1,zh:'认识',py:'rènshi',pos:'Động từ',vn:'quen biết, hiểu biết',em:'🤝',lesson:1,
   ex_zh:'你和李小姐是什么时候认识的？',ex_py:'Nǐ hé Lǐ xiǎojiě shì shénme shíhou rènshi de?',ex_vn:'Cô và cô Lý quen nhau khi nào vậy?',
   exList:[
     {zh:'你和李小姐是什么时候认识的？',py:'Nǐ hé Lǐ xiǎojiě shì shénme shíhou rènshi de?',vn:'Cô và cô Lý quen nhau khi nào vậy?'},
   ],
   hanzi:[
     {c:'认',p:'rèn',type:'左右结构 · Trái-phải',st:4,ord:'讠(ngôn) trái → 人(nhân, biến thể) phải',rad:'讠 (ngôn – lời nói)',mean:'nhận, nhận biết',
      tip:'讠(lời nói) + 人(người) → dùng lời NHẬN RA, xác NHẬN một người.',
      cf:'队 (duì – "đội, hàng")',w:'认识'},
     {c:'识',p:'shí',type:'左右结构 · Trái-phải',st:7,ord:'讠(ngôn) trái → 只(biến thể) phải',rad:'讠 (ngôn – lời nói)',mean:'biết, hiểu biết',
      tip:'讠(lời nói) + 只(phân biệt) → dùng lời PHÂN BIỆT, HIỂU BIẾT về sự vật.',
      cf:'职 (zhí – "chức vụ")',w:'认识'},
   ]},
  {n:2,zh:'年',py:'nián',pos:'Danh từ',vn:'năm',em:'📅',lesson:1,
   ex_zh:'我们是2011年9月认识的。',ex_py:'Wǒmen shì èr líng yī yī nián jiǔ yuè rènshi de.',ex_vn:'Chúng tôi quen nhau vào tháng 9 năm 2011.',
   exList:[
     {zh:'我们是2011年9月认识的。',py:'Wǒmen shì èr líng yī yī nián jiǔ yuè rènshi de.',vn:'Chúng tôi quen nhau vào tháng 9 năm 2011.'},
   ],
   hanzi:[]},
  {n:3,zh:'大学',py:'dàxué',pos:'Danh từ',vn:'trường đại học',em:'🎓',lesson:1,
   ex_zh:'她是我大学同学。',ex_py:'Tā shì wǒ dàxué tóngxué.',ex_vn:'Cô ấy là bạn học cùng lớp đại học của tôi.',
   exList:[
     {zh:'她是我大学同学。',py:'Tā shì wǒ dàxué tóngxué.',vn:'Cô ấy là bạn học cùng lớp đại học của tôi.'},
   ],
   hanzi:[]},
  {n:4,zh:'饭店',py:'fàndiàn',pos:'Danh từ',vn:'khách sạn, nhà hàng ăn uống',em:'🏨',lesson:2,
   ex_zh:'你们是怎么来饭店的？',ex_py:'Nǐmen shì zěnme lái fàndiàn de?',ex_vn:'Anh chị đến khách sạn bằng cách nào?',
   exList:[
     {zh:'你们是怎么来饭店的？',py:'Nǐmen shì zěnme lái fàndiàn de?',vn:'Anh chị đến khách sạn bằng cách nào?'},
   ],
   hanzi:[]},
  {n:5,zh:'出租车',py:'chūzūchē',pos:'Danh từ',vn:'xe taxi',em:'🚕',lesson:2,
   ex_zh:'我们是坐出租车来的。',ex_py:'Wǒmen shì zuò chūzūchē lái de.',ex_vn:'Chúng tôi đi xe taxi đến.',
   exList:[
     {zh:'我们是坐出租车来的。',py:'Wǒmen shì zuò chūzūchē lái de.',vn:'Chúng tôi đi xe taxi đến.'},
   ],
   hanzi:[
     {c:'出',p:'chū',type:'独体字 · Chữ đơn',st:5,ord:'山(biến thể) → 山(biến thể)',rad:'凵 (khảm, biến thể)',mean:'ra, đi ra',
      tip:'Hình bàn chân bước RA khỏi hang động → RA, ĐI RA.',
      cf:'击 (jī – "đánh")',w:'出租车 / 出去'},
     {c:'租',p:'zū',type:'左右结构 · Trái-phải',st:10,ord:'禾(hòa) trái → 且(thả) phải',rad:'禾 (hòa – lúa)',mean:'thuê, cho thuê',
      tip:'禾(lúa, hoa màu nộp tô) + 且(hơn nữa) → nộp lúa để THUÊ đất, mở rộng nghĩa THUÊ, CHO THUÊ. (车 đã học ở Bài 14)',
      cf:'祖 (zǔ – "tổ tiên")',w:'出租车'},
   ]},
  {n:6,zh:'一起',py:'yìqǐ',pos:'Phó từ',vn:'cùng nhau, đồng hành',em:'🧑‍🤝‍🧑',lesson:2,
   ex_zh:'他是和朋友一起开车来的。',ex_py:'Tā shì hé péngyou yìqǐ kāi chē lái de.',ex_vn:'Cậu ấy lái xe cùng với bạn đến đây.',
   exList:[
     {zh:'他是和朋友一起开车来的。',py:'Tā shì hé péngyou yìqǐ kāi chē lái de.',vn:'Cậu ấy lái xe cùng với bạn đến đây.'},
   ],
   hanzi:[
     {c:'起',p:'qǐ',type:'半包围结构 · Bán bao vây',st:10,ord:'走(biến thể) bao ngoài → 己(kỷ) bên trong',rad:'走 (tẩu – đi, biến thể)',mean:'dậy, bắt đầu; cùng (trong 一起)',
      tip:'走(đi) + 己(bản thân) → tự mình đứng dậy đi; ghép với 一 thành CÙNG NHAU.',
      cf:'己 (jǐ – "bản thân")',w:'一起 / 起来'},
   ]},
  {n:7,zh:'高兴',py:'gāoxìng',pos:'Tính từ',vn:'vui mừng, phấn khởi',em:'😄',lesson:3,
   ex_zh:'很高兴认识您！',ex_py:'Hěn gāoxìng rènshi nín!',ex_vn:'Rất vui được biết ngài!',
   exList:[
     {zh:'很高兴认识您！',py:'Hěn gāoxìng rènshi nín!',vn:'Rất vui được biết ngài!'},
   ],
   hanzi:[
     {c:'高',p:'gāo',type:'独体字 · Tượng hình',st:10,ord:'亠→口→冂→口',rad:'高 (cao – tự thành bộ)',mean:'cao',
      tip:'Hình một tòa lầu nhiều tầng cao vút → CAO; 高兴 = "hứng thú dâng cao" = VUI MỪNG.',
      cf:'亭 (tíng – "cái đình")',w:'高兴 / 很高'},
     {c:'兴',p:'xìng',type:'独体字 · Chữ đơn',st:6,ord:'丷(biến thể) → 一→八(biến thể)',rad:'八 (bát, biến thể)',mean:'hứng thú, phấn chấn',
      tip:'Hình nhiều bàn tay cùng nâng một vật lên → cùng nhau PHẤN KHỞI, HỨNG THÚ.',
      cf:'共 (gòng – "cùng")',w:'高兴'},
   ]},
  {n:8,zh:'听',py:'tīng',pos:'Động từ',vn:'nghe, nghe thấy',em:'👂',lesson:3,
   ex_zh:'听张先生说，您是坐飞机来北京的？',ex_py:'Tīng Zhāng xiānsheng shuō, nín shì zuò fēijī lái Běijīng de?',ex_vn:'Nghe ông Trương nói cô đáp máy bay đến Bắc Kinh, có phải không?',
   exList:[
     {zh:'听张先生说，您是坐飞机来北京的？',py:'Tīng Zhāng xiānsheng shuō, nín shì zuò fēijī lái Běijīng de?',vn:'Nghe ông Trương nói cô đáp máy bay đến Bắc Kinh, có phải không?'},
   ],
   hanzi:[
     {c:'听',p:'tīng',type:'左右结构 · Trái-phải',st:7,ord:'口(khẩu) trái → 斤(biến thể) phải',rad:'口 (khẩu – miệng)',mean:'nghe, nghe thấy',
      tip:'口(miệng nói) được tai TIẾP NHẬN → NGHE.',
      cf:'厅 (tīng – "sảnh, phòng")',w:'听说 / 听音乐'},
   ]},
  {n:9,zh:'飞机',py:'fēijī',pos:'Danh từ',vn:'máy bay',em:'✈️',lesson:3,
   ex_zh:'您是坐飞机来北京的？',ex_py:'Nín shì zuò fēijī lái Běijīng de?',ex_vn:'Cô đáp máy bay đến Bắc Kinh phải không?',
   exList:[
     {zh:'您是坐飞机来北京的？',py:'Nín shì zuò fēijī lái Běijīng de?',vn:'Cô đáp máy bay đến Bắc Kinh phải không?'},
   ],
   hanzi:[
     {c:'飞',p:'fēi',type:'独体字 · Tượng hình',st:3,ord:'飞(biến thể, 3 nét)',rad:'飞 (phi – tự thành bộ)',mean:'bay',
      tip:'Hình con chim đang dang cánh bay → BAY.',
      cf:'见 (jiàn – "nhìn thấy", đã học Bài 2")',w:'飞机'},
     {c:'机',p:'jī',type:'左右结构 · Trái-phải',st:6,ord:'木(mộc) trái → 几(kỷ) phải',rad:'木 (mộc – gỗ)',mean:'máy móc',
      tip:'木(gỗ, vật liệu chế tạo máy móc thời xưa) + 几(mượn âm) → MÁY MÓC; 飞机 = "máy biết bay" = MÁY BAY.',
      cf:'几 (jǐ – "mấy", đã học Bài 5")',w:'飞机'},
   ]},
];

const wuData = [
  {img:'🤝',label:'认识',py:'rènshi',letter:'A'},
  {img:'🎓',label:'大学',py:'dàxué',letter:'B'},
  {img:'🏨',label:'饭店',py:'fàndiàn',letter:'C'},
  {img:'🚕',label:'出租车',py:'chūzūchē',letter:'D'},
  {img:'✈️',label:'飞机',py:'fēijī',letter:'E'},
  {img:'😄',label:'高兴',py:'gāoxìng',letter:'F'},
];

var dialogData = [
  {scene:'Ở bàn ăn · Hỏi thăm quen biết',
   lines:[
     {sp:0,zh:'你和李小姐是什么时候认识的？',py:'Nǐ hé Lǐ xiǎojiě shì shénme shíhou rènshi de?',vn:'Cô và cô Lý quen nhau khi nào vậy?'},
     {sp:1,zh:'我们是2011年9月认识的。',py:'Wǒmen shì èr líng yī yī nián jiǔ yuè rènshi de.',vn:'Chúng tôi quen nhau vào tháng 9 năm 2011.'},
     {sp:0,zh:'你们在哪儿认识的？',py:'Nǐmen zài nǎr rènshi de?',vn:'Thế các cô quen nhau ở đâu?'},
     {sp:1,zh:'我们是在学校认识的，她是我大学同学。',py:'Wǒmen shì zài xuéxiào rènshi de, tā shì wǒ dàxué tóngxué.',vn:'Chúng tôi quen nhau ở trường học. Cô ấy là bạn học cùng lớp đại học của tôi.'},
   ]},
  {scene:'Trước khách sạn · Hỏi phương tiện đến',
   lines:[
     {sp:0,zh:'你们是怎么来饭店的？',py:'Nǐmen shì zěnme lái fàndiàn de?',vn:'Anh chị đến khách sạn bằng cách nào?'},
     {sp:1,zh:'我们是坐出租车来的。',py:'Wǒmen shì zuò chūzūchē lái de.',vn:'Chúng tôi đi xe taxi đến.'},
     {sp:0,zh:'李先生呢？',py:'Lǐ xiānsheng ne?',vn:'Còn ông Lý thì sao?'},
     {sp:1,zh:'他是和朋友一起开车来的。',py:'Tā shì hé péngyou yìqǐ kāi chē lái de.',vn:'Cậu ấy lái xe cùng với bạn đến đây.'},
   ]},
  {scene:'Trong công ty · Làm quen mới',
   lines:[
     {sp:0,zh:'很高兴认识您！李小姐。',py:'Hěn gāoxìng rènshi nín! Lǐ xiǎojiě.',vn:'Rất vui được biết cô Lý!'},
     {sp:1,zh:'认识你我也很高兴！',py:'Rènshi nǐ wǒ yě hěn gāoxìng!',vn:'Rất vui được quen anh!'},
     {sp:0,zh:'听张先生说，您是坐飞机来北京的？',py:'Tīng Zhāng xiānsheng shuō, nín shì zuò fēijī lái Běijīng de?',vn:'Nghe ông Trương nói cô đáp máy bay đến Bắc Kinh, có phải không?'},
     {sp:1,zh:'是的。',py:'Shì de.',vn:'Đúng thế.'},
   ]},
];

// Điền từ — đổi năm/địa điểm/phương tiện so với bài khoá
const fillData = [
  {pre:'Bạn hỏi ai đó quen bạn mình khi nào: “你是什么时候',blank:'认识',post:'他的？”',hint:'(quen biết)',ans:'认识'},
  {pre:'Bạn nói mình quen bạn ấy năm 2015: “我是2015',blank:'年',post:'认识他的。”',hint:'(năm)',ans:'年'},
  {pre:'Bạn giới thiệu bạn học cùng đại học: “她是我',blank:'大学',post:'同学。”',hint:'(trường đại học)',ans:'大学'},
  {pre:'Bạn hỏi ai đó đến khách sạn bằng gì: “你们是怎么来',blank:'饭店',post:'的？”',hint:'(khách sạn)',ans:'饭店'},
  {pre:'Bạn nói mình đi taxi đến: “我们是坐',blank:'出租车',post:'来的。”',hint:'(xe taxi)',ans:'出租车'},
  {pre:'Bạn nói rất vui được quen ai đó: “很',blank:'高兴',post:'认识您！”',hint:'(vui mừng)',ans:'高兴'},
  {pre:'Bạn nói nghe ai đó kể lại: “',blank:'听',post:'张先生说……”',hint:'(nghe)',ans:'听'},
  {pre:'Bạn nói mình đến bằng máy bay: “我是坐',blank:'飞机',post:'来的。”',hint:'(máy bay)',ans:'飞机'},
];

// Sắp xếp — đổi năm/địa điểm/phương tiện so với bài khoá
const sortData = [
  {words:['你','是','什么','时候','认识','他','的','？'],ans:'你是什么时候认识他的？',audio:'你是什么时候认识他的？'},
  {words:['我们','是','在','公司','认识','的','。'],ans:'我们是在公司认识的。',audio:'我们是在公司认识的。'},
  {words:['你们','是','怎么','来','的','？'],ans:'你们是怎么来的？',audio:'你们是怎么来的？'},
  {words:['我们','是','坐','飞机','来','的','。'],ans:'我们是坐飞机来的。',audio:'我们是坐飞机来的。'},
  {words:['很','高兴','认识','你','！'],ans:'很高兴认识你！',audio:'很高兴认识你！'},
  {words:['听','她','说','，','你','要','去','北京','。'],ans:'听她说，你要去北京。',audio:'听她说，你要去北京。'},
];

const matchData = [
  {left:'你和李小姐是什么时候认识的？',right:'我们是2011年9月认识的。'},
  {left:'你们在哪儿认识的？',right:'我们是在学校认识的。'},
  {left:'你们是怎么来饭店的？',right:'我们是坐出租车来的。'},
  {left:'很高兴认识您！',right:'认识你我也很高兴！'},
  {left:'您是坐飞机来北京的？',right:'是的。'},
];

// Trắc nghiệm — trọng tâm 是……的, không audio
const mcData = [
  {q:'你是什么时候＿＿他的？',opts:['认识','知道','看见','听'],ans:0},
  {q:'我们是2011年9月＿＿的。',opts:['认识','是','有','在'],ans:0},
  {q:'Cấu trúc nhấn mạnh "是……的" dùng để nhấn mạnh điều gì?',opts:['thời gian, địa điểm, cách thức của hành động đã xảy ra','hành động đang diễn ra','hành động sắp xảy ra','số lượng của sự vật'],ans:0},
  {q:'Thể phủ định của "是……的" bắt buộc phải giữ từ nào?',opts:['不是……的','没是……的','别是……的','无是……的'],ans:0},
  {q:'"大学" nghĩa là gì?',opts:['trường đại học','trường tiểu học','trường trung học','nhà trẻ'],ans:0},
  {q:'"出租车" nghĩa là gì?',opts:['xe taxi','xe buýt','xe máy','xe đạp'],ans:0},
  {q:'"飞机" nghĩa là gì?',opts:['máy bay','tàu hoả','tàu thuyền','ô tô'],ans:0},
  {q:'"高兴" nghĩa là gì?',opts:['vui mừng, phấn khởi','buồn bã','tức giận','lo lắng'],ans:0},
  {q:'Cách nói năm tháng đúng thứ tự là?',opts:['Năm → Tháng → Ngày','Ngày → Tháng → Năm','Tháng → Năm → Ngày','Ngày → Năm → Tháng'],ans:0},
  {q:'"听" nghĩa là gì?',opts:['nghe, nghe thấy','nói','xem','đọc'],ans:0},
];

const speakingData = {
  t1:{
    intro:'Nhấn 🔊 nghe từng câu mẫu, đọc to theo cho tới khi trôi chảy.',
    models:[
      {zh:'你和李小姐是什么时候认识的？',py:'Nǐ hé Lǐ xiǎojiě shì shénme shíhou rènshi de?',vn:'Cô và cô Lý quen nhau khi nào vậy?'},
      {zh:'我们是2011年9月认识的。',py:'Wǒmen shì èr líng yī yī nián jiǔ yuè rènshi de.',vn:'Chúng tôi quen nhau vào tháng 9 năm 2011.'},
      {zh:'你们是怎么来饭店的？',py:'Nǐmen shì zěnme lái fàndiàn de?',vn:'Anh chị đến khách sạn bằng cách nào?'},
      {zh:'我们是坐出租车来的。',py:'Wǒmen shì zuò chūzūchē lái de.',vn:'Chúng tôi đi xe taxi đến.'},
      {zh:'很高兴认识您！',py:'Hěn gāoxìng rènshi nín!',vn:'Rất vui được biết ngài!'},
    ],
  },
  t2:{
    intro:'Dùng khung câu cho sẵn, thay thế phần gạch chân bằng từ trong ô gợi ý. Nhấn 🔊 để nghe rồi nói to mỗi câu bạn tạo được.',
    drills:[
      {frame:'我们是坐＿＿来的。',frame_py:'Wǒmen shì zuò ___ lái de.',vn:'Chúng tôi đi ＿＿ đến.',options:['出租车','飞机'],samples:['我们是坐出租车来的。','我们是坐飞机来的。']},
      {frame:'我们是在＿＿认识的。',frame_py:'Wǒmen shì zài ___ rènshi de.',vn:'Chúng tôi quen nhau ở ＿＿.',options:['学校','公司'],samples:['我们是在学校认识的。','我们是在公司认识的。']},
    ],
  },
  t3:{
    intro:'Không nhìn câu mẫu, hãy tưởng tượng bạn đang ở trong tình huống thực tế và tự nói ra câu phù hợp.',
    tasks:[
      {role:'🤝 Tình huống 1 — Làm quen và hỏi thăm mối quan hệ',
       guide:'Bạn gặp một người mới và tò mò muốn biết họ quen một người bạn chung của mình từ khi nào, ở đâu.',
       structure:['你和他是什么时候认识的？','我们是在＿＿认识的。'],
       sample:'你和他是什么时候认识的？我们是2011年9月认识的。我们是在学校认识的。',
       sample_vn:'Bạn quen anh ấy khi nào vậy? Chúng tôi quen nhau vào tháng 9 năm 2011. Chúng tôi quen nhau ở trường học.',
       note:'Cấu trúc "是……的" dùng để nhấn mạnh CHI TIẾT của một việc đã xảy ra rồi (thời gian, địa điểm, cách thức) — không dùng để hỏi việc chưa xảy ra.'},
      {role:'🚕 Tình huống 2 — Hỏi thăm phương tiện di chuyển',
       guide:'Bạn đón khách tại khách sạn và hỏi họ đã đến bằng phương tiện gì.',
       structure:['你们是怎么来的？','我们是坐＿＿来的。'],
       sample:'你们是怎么来的？我们是坐出租车来的。',
       sample_vn:'Các bạn đến bằng gì vậy? Chúng tôi đi xe taxi đến.',
       note:'Phương tiện di chuyển luôn được đặt giữa "是" và "来的" (是坐出租车来的) — đây là điểm ngữ pháp học sinh Việt hay đặt sai vị trí do ảnh hưởng từ tiếng Việt.'},
      {role:'😄 Tình huống 3 — Làm quen lịch sự trong công việc',
       guide:'Bạn được giới thiệu với một đối tác mới trong buổi họp và muốn bày tỏ sự vui mừng khi được quen biết.',
       structure:['很高兴认识您！','认识你我也很高兴！'],
       sample:'很高兴认识您！认识你我也很高兴！',
       sample_vn:'Rất vui được biết ngài! Rất vui được quen anh!',
       note:'很高兴认识您 là câu xã giao BẮT BUỘC phải thuộc lòng khi làm quen trong môi trường công việc trang trọng ở Trung Quốc.'},
    ],
  },
};
