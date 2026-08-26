// ══════════════════════════════════════════
// DATA — HSK1 Bài 11: 现在几点?
// ══════════════════════════════════════════
const vocabData = [
  {n:1,zh:'现在',py:'xiànzài',pos:'Danh từ',vn:'bây giờ, hiện nay',em:'⏰',lesson:1,
   ex_zh:'现在几点？',ex_py:'Xiànzài jǐ diǎn?',ex_vn:'Bây giờ là mấy giờ rồi?',
   exList:[
     {zh:'现在几点？',py:'Xiànzài jǐ diǎn?',vn:'Bây giờ là mấy giờ rồi?'},
   ],
   hanzi:[
     {c:'现',p:'xiàn',type:'左右结构 · Trái-phải',st:8,ord:'王(vương) trái → 见(kiến) phải',rad:'王 (vương – ngọc)',mean:'hiện tại, bây giờ',
      tip:'王(ngọc quý) + 见(nhìn thấy) → thứ nhìn thấy được ngay trước mắt = HIỆN TẠI.',
      cf:'规 (guī – "quy tắc")',w:'现在'},
   ]},
  {n:2,zh:'点',py:'diǎn',pos:'Lượng từ',vn:'giờ',em:'🕐',lesson:1,
   ex_zh:'现在十点十分。',ex_py:'Xiànzài shí diǎn shí fēn.',ex_vn:'Bây giờ là 10 giờ 10 phút.',
   exList:[
     {zh:'现在十点十分。',py:'Xiànzài shí diǎn shí fēn.',vn:'Bây giờ là 10 giờ 10 phút.'},
   ],
   hanzi:[
     {c:'点',p:'diǎn',type:'上下结构 · Trên-dưới',st:9,ord:'占(chiếm) trên → 灬(hỏa) dưới',rad:'灬 (hỏa – lửa, phần dưới)',mean:'giờ, điểm, chấm',
      tip:'占(vị trí xác định) + 灬(lửa, ánh sáng nhỏ) → một ĐIỂM cụ thể, mở rộng dùng đếm GIỜ.',
      cf:'店 (diàn – "cửa hàng", đã học Bài 8")',w:'十点 / 几点'},
   ]},
  {n:3,zh:'分',py:'fēn',pos:'Lượng từ',vn:'phút',em:'⏱️',lesson:1,
   ex_zh:'现在十点十分。',ex_py:'Xiànzài shí diǎn shí fēn.',ex_vn:'Bây giờ là 10 giờ 10 phút.',
   exList:[
     {zh:'现在十点十分。',py:'Xiànzài shí diǎn shí fēn.',vn:'Bây giờ là 10 giờ 10 phút.'},
   ],
   hanzi:[
     {c:'分',p:'fēn',type:'上下结构 · Trên-dưới',st:4,ord:'八(bát) trên → 刀(biến thể) dưới',rad:'刀 (đao – dao, biến thể)',mean:'phút, chia',
      tip:'八(chia ra) + 刀(dao cắt) → chia nhỏ ra, dùng đếm PHÚT (đơn vị nhỏ của giờ).',
      cf:'份 (fèn – "phần")',w:'十分 / 分钟'},
   ]},
  {n:4,zh:'中午',py:'zhōngwǔ',pos:'Danh từ',vn:'buổi trưa',em:'🌞',lesson:1,
   ex_zh:'中午几点吃饭？',ex_py:'Zhōngwǔ jǐ diǎn chī fàn?',ex_vn:'Mấy giờ thì ăn cơm trưa vậy?',
   exList:[
     {zh:'中午几点吃饭？',py:'Zhōngwǔ jǐ diǎn chī fàn?',vn:'Mấy giờ thì ăn cơm trưa vậy?'},
   ],
   hanzi:[]},
  {n:5,zh:'吃饭',py:'chī fàn',pos:'Động từ',vn:'ăn cơm',em:'🍚',lesson:1,
   ex_zh:'十二点吃饭。',ex_py:'Shí\'èr diǎn chī fàn.',ex_vn:'12 giờ ăn cơm.',
   exList:[
     {zh:'十二点吃饭。',py:'Shí\'èr diǎn chī fàn.',vn:'12 giờ ăn cơm.'},
   ],
   hanzi:[]},
  {n:6,zh:'时候',py:'shíhou',pos:'Danh từ',vn:'thời gian, lúc, khi',em:'⏳',lesson:2,
   ex_zh:'爸爸什么时候回家？',ex_py:'Bàba shénme shíhou huí jiā?',ex_vn:'Chừng nào cha mới về đến nhà?',
   exList:[
     {zh:'爸爸什么时候回家？',py:'Bàba shénme shíhou huí jiā?',vn:'Chừng nào cha mới về đến nhà?'},
   ],
   hanzi:[
     {c:'时',p:'shí',type:'左右结构 · Trái-phải',st:7,ord:'日(nhật) trái → 寺(biến thể) phải',rad:'日 (nhật – mặt trời)',mean:'thời gian, lúc, giờ',
      tip:'日(mặt trời, chỉ thời gian) + 寺(nơi đo giờ trang nghiêm) → THỜI GIAN, LÚC.',
      cf:'诗 (shī – "thơ")',w:'时候 / 小时'},
     {c:'候',p:'hòu',type:'左右结构 · Trái-phải',st:10,ord:'亻(nhân) trái → 侯(biến thể) phải',rad:'亻 (nhân – người)',mean:'chờ đợi; lúc, khi',
      tip:'亻(người) đứng chờ, đo THỜI GIAN trôi qua.',
      cf:'猴 (hóu – "con khỉ")',w:'时候 / 等候'},
   ]},
  {n:7,zh:'回',py:'huí',pos:'Động từ',vn:'trở về, về',em:'🔙',lesson:2,
   ex_zh:'爸爸什么时候回家？',ex_py:'Bàba shénme shíhou huí jiā?',ex_vn:'Chừng nào cha mới về đến nhà?',
   exList:[
     {zh:'爸爸什么时候回家？',py:'Bàba shénme shíhou huí jiā?',vn:'Chừng nào cha mới về đến nhà?'},
   ],
   hanzi:[
     {c:'回',p:'huí',type:'全包围结构 · Bao vây hoàn toàn',st:6,ord:'囗(vi) ngoài → 口(khẩu) trong',rad:'囗 (vi – vây quanh)',mean:'trở về, về',
      tip:'Hình vòng xoáy đi rồi lại vòng về điểm cũ → TRỞ VỀ.',
      cf:'回 dễ nhầm 囘 (dị thể cổ)',w:'回家 / 回来'},
   ]},
  {n:8,zh:'我们',py:'wǒmen',pos:'Đại từ',vn:'chúng tôi, chúng ta',em:'👥',lesson:2,
   ex_zh:'我们什么时候去看电影？',ex_py:'Wǒmen shénme shíhou qù kàn diànyǐng?',ex_vn:'Khi nào chúng ta đi xem phim?',
   exList:[
     {zh:'我们什么时候去看电影？',py:'Wǒmen shénme shíhou qù kàn diànyǐng?',vn:'Khi nào chúng ta đi xem phim?'},
   ],
   hanzi:[]},
  {n:9,zh:'电影',py:'diànyǐng',pos:'Danh từ',vn:'phim, điện ảnh',em:'🎬',lesson:2,
   ex_zh:'我们什么时候去看电影？',ex_py:'Wǒmen shénme shíhou qù kàn diànyǐng?',ex_vn:'Khi nào chúng ta đi xem phim?',
   exList:[
     {zh:'我们什么时候去看电影？',py:'Wǒmen shénme shíhou qù kàn diànyǐng?',vn:'Khi nào chúng ta đi xem phim?'},
   ],
   hanzi:[
     {c:'影',p:'yǐng',type:'左右结构 · Trái-phải',st:15,ord:'景(cảnh) trái → 彡(sam) phải',rad:'彡 (sam – nét vẽ, tia sáng)',mean:'bóng, hình ảnh',
      tip:'景(phong cảnh, ánh sáng) + 彡(những tia sáng) → BÓNG, HÌNH ẢNH do ánh sáng chiếu ra = PHIM ẢNH.',
      cf:'景 (jǐng – "cảnh")',w:'电影'},
   ]},
  {n:10,zh:'住',py:'zhù',pos:'Động từ',vn:'ở, trú ngụ',em:'🏠',lesson:3,
   ex_zh:'你想在北京住几天？',ex_py:'Nǐ xiǎng zài Běijīng zhù jǐ tiān?',ex_vn:'Anh định ở Bắc Kinh mấy ngày?',
   exList:[
     {zh:'你想在北京住几天？',py:'Nǐ xiǎng zài Běijīng zhù jǐ tiān?',vn:'Anh định ở Bắc Kinh mấy ngày?'},
   ],
   hanzi:[
     {c:'住',p:'zhù',type:'左右结构 · Trái-phải',st:7,ord:'亻(nhân) trái → 主(chủ) phải',rad:'亻 (nhân – người)',mean:'ở, trú ngụ',
      tip:'亻(người) + 主(làm chủ) → người làm chủ một nơi để Ở, TRÚ NGỤ.',
      cf:'往 (wǎng – "hướng về", cùng phần phải")',w:'住三天 / 住在'},
   ]},
  {n:11,zh:'前',py:'qián',pos:'Danh từ',vn:'trước, trước khi',em:'⏮️',lesson:3,
   ex_zh:'星期五前能回家吗？',ex_py:'Xīngqī wǔ qián néng huí jiā ma?',ex_vn:'Anh có thể về nhà trước thứ sáu được không?',
   exList:[
     {zh:'星期五前能回家吗？',py:'Xīngqī wǔ qián néng huí jiā ma?',vn:'Anh có thể về nhà trước thứ sáu được không?'},
   ],
   hanzi:[]},
];

const wuData = [
  {img:'⏰',label:'现在',py:'xiànzài',letter:'A'},
  {img:'🎬',label:'电影',py:'diànyǐng',letter:'B'},
  {img:'🔙',label:'回',py:'huí',letter:'C'},
  {img:'🏠',label:'住',py:'zhù',letter:'D'},
  {img:'⏳',label:'时候',py:'shíhou',letter:'E'},
  {img:'🍚',label:'吃饭',py:'chī fàn',letter:'F'},
];

const dialogData = [
  {scene:'Ở thư viện · Hỏi giờ',
   lines:[
     {sp:0,zh:'现在几点？',py:'Xiànzài jǐ diǎn?',vn:'Bây giờ là mấy giờ rồi?'},
     {sp:1,zh:'现在十点十分。',py:'Xiànzài shí diǎn shí fēn.',vn:'Bây giờ là 10 giờ 10 phút.'},
     {sp:0,zh:'中午几点吃饭？',py:'Zhōngwǔ jǐ diǎn chī fàn?',vn:'Mấy giờ thì ăn cơm trưa vậy?'},
     {sp:1,zh:'十二点吃饭。',py:'Shí\'èr diǎn chī fàn.',vn:'12 giờ.'},
   ]},
  {scene:'Ở nhà · Hỏi giờ về nhà',
   lines:[
     {sp:0,zh:'爸爸什么时候回家？',py:'Bàba shénme shíhou huí jiā?',vn:'Chừng nào cha mới về đến nhà?'},
     {sp:1,zh:'下午五点。',py:'Xiàwǔ wǔ diǎn.',vn:'5 giờ chiều.'},
     {sp:0,zh:'我们什么时候去看电影？',py:'Wǒmen shénme shíhou qù kàn diànyǐng?',vn:'Khi nào chúng ta đi xem phim?'},
     {sp:1,zh:'六点三十分。',py:'Liù diǎn sānshí fēn.',vn:'6 giờ rưỡi.'},
   ]},
  {scene:'Ở nhà · Kế hoạch đi Bắc Kinh',
   lines:[
     {sp:0,zh:'我星期一去北京。',py:'Wǒ xīngqī yī qù Běijīng.',vn:'Thứ hai anh sẽ đi Bắc Kinh.'},
     {sp:1,zh:'你想在北京住几天？',py:'Nǐ xiǎng zài Běijīng zhù jǐ tiān?',vn:'Anh định ở Bắc Kinh mấy ngày?'},
     {sp:0,zh:'住三天。',py:'Zhù sān tiān.',vn:'Ba ngày.'},
     {sp:1,zh:'星期五前能回家吗？',py:'Xīngqī wǔ qián néng huí jiā ma?',vn:'Anh có thể về nhà trước thứ sáu được không?'},
     {sp:0,zh:'能。',py:'Néng.',vn:'Chắc là được.'},
   ]},
];

// Điền từ — đổi giờ/số ngày so với bài khoá
const fillData = [
  {pre:'Bạn hỏi giờ hiện tại: “',blank:'现在',post:'几点？”',hint:'(bây giờ)',ans:'现在'},
  {pre:'Bạn nói bây giờ là 3 giờ 20 phút: “现在三点二十',blank:'分',post:'。”',hint:'(phút)',ans:'分'},
  {pre:'Bạn hỏi khi nào mẹ về nhà: “妈妈什么',blank:'时候',post:'回家？”',hint:'(khi nào, lúc nào)',ans:'时候'},
  {pre:'Bạn nói mình sẽ về nhà lúc 7 giờ chiều: “下午七',blank:'点',post:'回家。”',hint:'(giờ)',ans:'点'},
  {pre:'Bạn hỏi khi nào đi xem phim: “我们什么时候去看',blank:'电影',post:'？”',hint:'(phim)',ans:'电影'},
  {pre:'Bạn hỏi bạn định ở lại mấy ngày: “你想',blank:'住',post:'几天？”',hint:'(ở, trú ngụ)',ans:'住'},
  {pre:'Bạn hỏi có thể về nhà trước thứ ba không: “星期二',blank:'前',post:'能回家吗？”',hint:'(trước — mốc thời gian)',ans:'前'},
  {pre:'Bạn khẳng định có thể về nhà đúng hẹn: “你能回家吗？',blank:'能',post:'。”',hint:'(có thể)',ans:'能'},
];

// Sắp xếp — đổi giờ/số ngày so với bài khoá
const sortData = [
  {words:['现在','几','点','？'],ans:'现在几点？',audio:'现在几点？'},
  {words:['现在','十','点','十','分','。'],ans:'现在十点十分。',audio:'现在十点十分。'},
  {words:['爸爸','什么','时候','回家','？'],ans:'爸爸什么时候回家？',audio:'爸爸什么时候回家？'},
  {words:['我们','什么','时候','去','看','电影','？'],ans:'我们什么时候去看电影？',audio:'我们什么时候去看电影？'},
  {words:['你','想','在','北京','住','几','天','？'],ans:'你想在北京住几天？',audio:'你想在北京住几天？'},
  {words:['星期','五','前','能','回家','吗','？'],ans:'星期五前能回家吗？',audio:'星期五前能回家吗？'},
];

const matchData = [
  {left:'现在几点？',right:'现在十点十分。'},
  {left:'中午几点吃饭？',right:'十二点吃饭。'},
  {left:'爸爸什么时候回家？',right:'下午五点。'},
  {left:'你想在北京住几天？',right:'住三天。'},
  {left:'星期五前能回家吗？',right:'能。'},
];

// Trắc nghiệm — trọng tâm cách nói giờ & trạng ngữ thời gian, không audio
const mcData = [
  {q:'＿＿几点？',opts:['现在','什么','怎么','哪儿'],ans:0},
  {q:'Số "2 giờ" nói thế nào (không dùng 二)?',opts:['两点','二点','两个点','二个点'],ans:0},
  {q:'Trạng ngữ chỉ thời gian thường đứng ở đâu trong câu?',opts:['trước hoặc ngay sau chủ ngữ','luôn ở cuối câu','luôn tách biệt hoàn toàn ở đầu câu','sau động từ'],ans:0},
  {q:'"前" trong "星期五前" nghĩa là gì?',opts:['trước (một mốc thời gian)','sau','trong','ngoài'],ans:0},
  {q:'"时候" nghĩa là gì?',opts:['thời gian, lúc, khi','giờ','phút','ngày'],ans:0},
  {q:'"回" nghĩa là gì?',opts:['trở về, về','đi','ở','đến'],ans:0},
  {q:'"电影" nghĩa là gì?',opts:['phim, điện ảnh','tivi','điện thoại','máy tính'],ans:0},
  {q:'"住" nghĩa là gì?',opts:['ở, trú ngụ','đi','về','đến'],ans:0},
  {q:'Câu hỏi giờ ĐÚNG ngữ pháp là?',opts:['现在几点？','现在几点钟的？','几点现在？','点几现在？'],ans:0},
  {q:'"我们" nghĩa là gì?',opts:['chúng tôi, chúng ta','các bạn','họ','bạn và tôi'],ans:0},
];

const speakingData = {
  t1:{
    intro:'Nhấn 🔊 nghe từng câu mẫu, đọc to theo cho tới khi trôi chảy.',
    models:[
      {zh:'现在几点？',py:'Xiànzài jǐ diǎn?',vn:'Bây giờ là mấy giờ rồi?'},
      {zh:'现在十点十分。',py:'Xiànzài shí diǎn shí fēn.',vn:'Bây giờ là 10 giờ 10 phút.'},
      {zh:'爸爸什么时候回家？',py:'Bàba shénme shíhou huí jiā?',vn:'Chừng nào cha mới về đến nhà?'},
      {zh:'我们什么时候去看电影？',py:'Wǒmen shénme shíhou qù kàn diànyǐng?',vn:'Khi nào chúng ta đi xem phim?'},
      {zh:'你想在北京住几天？',py:'Nǐ xiǎng zài Běijīng zhù jǐ tiān?',vn:'Anh định ở Bắc Kinh mấy ngày?'},
    ],
  },
  t2:{
    intro:'Dùng khung câu cho sẵn, thay thế phần gạch chân bằng số trong ô gợi ý. Nhấn 🔊 để nghe rồi nói to mỗi câu bạn tạo được.',
    drills:[
      {frame:'现在＿＿点。',frame_py:'Xiànzài ___ diǎn.',vn:'Bây giờ là ＿＿ giờ.',options:['十','十二','六'],samples:['现在十点。','现在十二点。','现在六点。']},
      {frame:'我们＿＿点去看电影。',frame_py:'Wǒmen ___ diǎn qù kàn diànyǐng.',vn:'Chúng ta ＿＿ giờ đi xem phim.',options:['六','七','八'],samples:['我们六点去看电影。','我们七点去看电影。','我们八点去看电影。']},
    ],
  },
  t3:{
    intro:'Không nhìn câu mẫu, hãy tưởng tượng bạn đang ở trong tình huống thực tế và tự nói ra câu phù hợp.',
    tasks:[
      {role:'⏰ Tình huống 1 — Hỏi giờ ngoài đường',
       guide:'Bạn không mang đồng hồ và muốn hỏi giờ một người lạ ngoài đường.',
       structure:['现在几点？','现在＿＿点＿＿分。'],
       sample:'现在几点？现在十点十分。',
       sample_vn:'Bây giờ là mấy giờ? Bây giờ là 10 giờ 10 phút.',
       note:'Khi nói giờ, số "2" phải đọc là 两 (liǎng) chứ không phải 二 (èr) — ví dụ 两点 chứ không nói 二点.'},
      {role:'🏠 Tình huống 2 — Hẹn giờ về nhà với người thân',
       guide:'Bạn gọi điện hỏi cha mấy giờ về nhà, và hẹn giờ đi xem phim cùng gia đình.',
       structure:['爸爸什么时候回家？','我们什么时候去看电影？'],
       sample:'爸爸什么时候回家？我们什么时候去看电影？',
       sample_vn:'Chừng nào cha về nhà? Khi nào chúng ta đi xem phim?',
       note:'Trạng ngữ chỉ thời gian (下午五点, 六点三十分) luôn đứng TRƯỚC động từ trong câu tiếng Trung — không đặt ở cuối câu như tiếng Việt hay làm.'},
      {role:'✈️ Tình huống 3 — Báo lịch trình đi công tác',
       guide:'Bạn báo cho gia đình biết kế hoạch đi Bắc Kinh của mình và hẹn ngày về.',
       structure:['我星期一去北京。','星期五前能回家吗？'],
       sample:'我星期一去北京。你想在北京住几天？住三天。星期五前能回家吗？能。',
       sample_vn:'Thứ hai anh sẽ đi Bắc Kinh. Anh định ở mấy ngày? Ba ngày. Anh có thể về trước thứ sáu không? Được.',
       note:'前 sau một mốc thời gian cụ thể (星期五前) nghĩa là "trước mốc đó" — rất hữu ích khi đặt deadline hoặc hẹn lịch trong công việc thực tế.'},
    ],
  },
};
