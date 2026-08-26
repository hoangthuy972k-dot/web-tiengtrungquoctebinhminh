// ══════════════════════════════════════════
// DATA — HSK1 Bài 12: 明天天气怎么样?
// ══════════════════════════════════════════
const vocabData = [
  {n:1,zh:'天气',py:'tiānqì',pos:'Danh từ',vn:'thời tiết',em:'🌦️',lesson:1,
   ex_zh:'今天天气怎么样？',ex_py:'Jīntiān tiānqì zěnmeyàng?',ex_vn:'Hôm nay thời tiết thế nào?',
   exList:[
     {zh:'今天天气怎么样？',py:'Jīntiān tiānqì zěnmeyàng?',vn:'Hôm nay thời tiết thế nào?'},
   ],
   hanzi:[]},
  {n:2,zh:'怎么样',py:'zěnmeyàng',pos:'Đại từ',vn:'thế nào, như thế nào',em:'🤔',lesson:1,
   ex_zh:'昨天北京的天气怎么样？',ex_py:'Zuótiān Běijīng de tiānqì zěnmeyàng?',ex_vn:'Hôm qua thời tiết ở Bắc Kinh thế nào?',
   exList:[
     {zh:'昨天北京的天气怎么样？',py:'Zuótiān Běijīng de tiānqì zěnmeyàng?',vn:'Hôm qua thời tiết ở Bắc Kinh thế nào?'},
   ],
   hanzi:[
     {c:'样',p:'yàng',type:'左右结构 · Trái-phải',st:10,ord:'木(mộc) trái → 羊(biến thể) phải',rad:'木 (mộc – gỗ)',mean:'kiểu, dạng, dáng vẻ',
      tip:'木(khuôn mẫu bằng gỗ) + 羊(mượn âm) → KIỂU DÁNG, dùng hỏi tình trạng "như thế nào". (怎/么 đã học ở Bài 6, Bài 3)',
      cf:'洋 (yáng – "đại dương", cùng phần phải")',w:'怎么样'},
   ]},
  {n:3,zh:'太',py:'tài',pos:'Phó từ',vn:'quá, lắm',em:'❗',lesson:1,
   ex_zh:'太热了。',ex_py:'Tài rè le.',ex_vn:'Nóng lắm.',
   exList:[
     {zh:'太热了。',py:'Tài rè le.',vn:'Nóng lắm.'},
   ],
   hanzi:[
     {c:'太',p:'tài',type:'独体字 · Chữ đơn',st:4,ord:'大(biến thể) → 丶',rad:'大 (đại – lớn, biến thể)',mean:'quá, lắm',
      tip:'大(lớn) thêm một chấm nhỏ → LỚN HƠN NỮA, mức độ VƯỢT QUÁ. (大 đã học ở Bài 5)',
      cf:'大 (dà – "to, lớn")',w:'太热了 / 太好了'},
   ]},
  {n:4,zh:'热',py:'rè',pos:'Tính từ',vn:'nóng',em:'🥵',lesson:1,
   ex_zh:'太热了。',ex_py:'Tài rè le.',ex_vn:'Nóng lắm.',
   exList:[
     {zh:'太热了。',py:'Tài rè le.',vn:'Nóng lắm.'},
   ],
   hanzi:[
     {c:'热',p:'rè',type:'上下结构 · Trên-dưới',st:10,ord:'执(biến thể) trên → 灬(hỏa) dưới',rad:'灬 (hỏa – lửa, phần dưới)',mean:'nóng',
      tip:'执(cầm nắm) + 灬(lửa) → cầm phải vật có lửa → NÓNG.',
      cf:'势 (shì – "thế lực")',w:'太热了 / 天气很热'},
   ]},
  {n:5,zh:'冷',py:'lěng',pos:'Tính từ',vn:'lạnh',em:'🥶',lesson:1,
   ex_zh:'不冷不热。',ex_py:'Bù lěng bú rè.',ex_vn:'Không lạnh cũng không nóng.',
   exList:[
     {zh:'不冷不热。',py:'Bù lěng bú rè.',vn:'Không lạnh cũng không nóng.'},
   ],
   hanzi:[
     {c:'冷',p:'lěng',type:'左右结构 · Trái-phải',st:7,ord:'冫(băng) trái → 令(lệnh) phải',rad:'冫 (băng – băng giá)',mean:'lạnh',
      tip:'冫(băng giá) + 令(mượn âm) → LẠNH.',
      cf:'令 (lìng – "ra lệnh")',w:'天气很冷'},
   ]},
  {n:6,zh:'下雨',py:'xià yǔ',pos:'Động từ',vn:'đổ mưa, có mưa',em:'🌧️',lesson:2,
   ex_zh:'今天会下雨吗？',ex_py:'Jīntiān huì xià yǔ ma?',ex_vn:'Hôm nay có mưa không nhỉ?',
   exList:[
     {zh:'今天会下雨吗？',py:'Jīntiān huì xià yǔ ma?',vn:'Hôm nay có mưa không nhỉ?'},
   ],
   hanzi:[
     {c:'雨',p:'yǔ',type:'独体字 · Tượng hình',st:8,ord:'一→冂→丨→丶丶丶丶',rad:'雨 (vũ – tự thành bộ)',mean:'mưa',
      tip:'Hình những giọt nước rơi từ đám mây → MƯA. (下 đã học ở Bài 8)',
      cf:'雪 (xuě – "tuyết")',w:'下雨'},
   ]},
  {n:7,zh:'小姐',py:'xiǎojiě',pos:'Danh từ',vn:'cô, tiểu thư',em:'👩',lesson:2,
   ex_zh:'王小姐今天会来吗？',ex_py:'Wáng xiǎojiě jīntiān huì lái ma?',ex_vn:'Hôm nay cô Vương có đến không nhỉ?',
   exList:[
     {zh:'王小姐今天会来吗？',py:'Wáng xiǎojiě jīntiān huì lái ma?',vn:'Hôm nay cô Vương có đến không nhỉ?'},
   ],
   hanzi:[
     {c:'姐',p:'jiě',type:'左右结构 · Trái-phải',st:8,ord:'女(nữ) trái → 且(thả) phải',rad:'女 (nữ – con gái)',mean:'chị, cô',
      tip:'女(nữ giới) + 且(hơn nữa) → người con gái lớn hơn trong nhà = CHỊ; 小姐 là cách gọi lịch sự phụ nữ trẻ. (小 đã học ở Bài 9)',
      cf:'组 (zǔ – "tổ, nhóm")',w:'小姐'},
   ]},
  {n:8,zh:'来',py:'lái',pos:'Động từ',vn:'đến, tới',em:'🚶‍♀️',lesson:2,
   ex_zh:'王小姐今天会来吗？',ex_py:'Wáng xiǎojiě jīntiān huì lái ma?',ex_vn:'Hôm nay cô Vương có đến không nhỉ?',
   exList:[
     {zh:'王小姐今天会来吗？',py:'Wáng xiǎojiě jīntiān huì lái ma?',vn:'Hôm nay cô Vương có đến không nhỉ?'},
   ],
   hanzi:[
     {c:'来',p:'lái',type:'独体字 · Tượng hình',st:7,ord:'一→丨→㇏→丿→丶→一',rad:'木 (mộc, biến thể)',mean:'đến, tới',
      tip:'Hình bông lúa mạch từ xa mang ĐẾN → ĐẾN, TỚI.',
      cf:'米 (mǐ – "gạo", đã học Bài 8")',w:'今天会来吗'},
   ]},
  {n:9,zh:'身体',py:'shēntǐ',pos:'Danh từ',vn:'sức khỏe, cơ thể',em:'🧍',lesson:3,
   ex_zh:'你身体怎么样？',ex_py:'Nǐ shēntǐ zěnmeyàng?',ex_vn:'Sức khỏe của anh thế nào?',
   exList:[
     {zh:'你身体怎么样？',py:'Nǐ shēntǐ zěnmeyàng?',vn:'Sức khỏe của anh thế nào?'},
   ],
   hanzi:[
     {c:'身',p:'shēn',type:'独体字 · Tượng hình',st:7,ord:'丿→𠃌→一→一→一→一→丨',rad:'身 (thân – tự thành bộ)',mean:'thân thể, cơ thể',
      tip:'Hình dáng người mang thai bụng to → THÂN THỂ, mở rộng nghĩa "bản thân, cơ thể".',
      cf:'躬 (gōng – "cúi mình")',w:'身体'},
     {c:'体',p:'tǐ',type:'左右结构 · Trái-phải',st:7,ord:'亻(nhân) trái → 本(bổn) phải',rad:'亻 (nhân – người)',mean:'thể, cơ thể',
      tip:'亻(người) + 本(gốc rễ) → phần gốc của con người = CƠ THỂ. (本 đã học ở Bài 10)',
      cf:'本 (běn – "gốc, quyển")',w:'身体'},
   ]},
  {n:10,zh:'爱',py:'ài',pos:'Động từ',vn:'yêu, thích, muốn',em:'❤️',lesson:3,
   ex_zh:'不爱吃饭。',ex_py:'Bú ài chī fàn.',ex_vn:'Chẳng muốn ăn cơm.',
   exList:[
     {zh:'不爱吃饭。',py:'Bú ài chī fàn.',vn:'Chẳng muốn ăn cơm.'},
   ],
   hanzi:[
     {c:'爱',p:'ài',type:'上下结构 · Trên-dưới',st:10,ord:'爫(biến thể) trên → 友(biến thể) dưới',rad:'爫 (trảo – móng tay, biến thể)',mean:'yêu, thích',
      tip:'Hình bàn tay ôm lấy trái tim (chữ phồn thể 愛 có 心) → YÊU THƯƠNG.',
      cf:'受 (shòu – "nhận, chịu")',w:'爱吃饭 / 我爱你'},
   ]},
  {n:11,zh:'些',py:'xiē',pos:'Lượng từ',vn:'một ít, một vài',em:'➕',lesson:3,
   ex_zh:'你多吃些水果。',ex_py:'Nǐ duō chī xiē shuǐguǒ.',ex_vn:'Anh hãy ăn thêm một ít trái cây.',
   exList:[
     {zh:'你多吃些水果。',py:'Nǐ duō chī xiē shuǐguǒ.',vn:'Anh hãy ăn thêm một ít trái cây.'},
   ],
   hanzi:[
     {c:'些',p:'xiē',type:'上下结构 · Trên-dưới',st:8,ord:'此(thử) trên → 二(biến thể) dưới',rad:'二 (nhị, biến thể)',mean:'một ít, một vài',
      tip:'此(này) + phần dưới chỉ số lượng nhỏ → MỘT VÀI, MỘT ÍT (cái này).',
      cf:'此 (cǐ – "này")',w:'多吃些水果'},
   ]},
  {n:12,zh:'水果',py:'shuǐguǒ',pos:'Danh từ',vn:'trái cây, hoa quả',em:'🍎',lesson:3,
   ex_zh:'你多吃些水果。',ex_py:'Nǐ duō chī xiē shuǐguǒ.',ex_vn:'Anh hãy ăn thêm một ít trái cây.',
   exList:[
     {zh:'你多吃些水果。',py:'Nǐ duō chī xiē shuǐguǒ.',vn:'Anh hãy ăn thêm một ít trái cây.'},
   ],
   hanzi:[
     {c:'水',p:'shuǐ',type:'独体字 · Tượng hình',st:4,ord:'丨→𠃌→丿→㇏',rad:'水 (thuỷ – tự thành bộ)',mean:'nước',
      tip:'Hình dòng nước chảy uốn lượn → NƯỚC.',
      cf:'冰 (bīng – "băng")',w:'水果 / 喝水'},
     {c:'果',p:'guǒ',type:'上下结构 · Trên-dưới',st:8,ord:'田(biến thể) trên → 木(mộc) dưới',rad:'木 (mộc – gỗ, phần dưới)',mean:'quả, trái cây',
      tip:'田(hình quả tròn) trên 木(cây) → QUẢ mọc trên cây = TRÁI CÂY.',
      cf:'课 (kè – "bài học")',w:'水果'},
   ]},
  {n:13,zh:'水',py:'shuǐ',pos:'Danh từ',vn:'nước',em:'💧',lesson:3,
   ex_zh:'多喝水。',ex_py:'Duō hē shuǐ.',ex_vn:'Uống thêm nước nhé.',
   exList:[
     {zh:'多喝水。',py:'Duō hē shuǐ.',vn:'Uống thêm nước nhé.'},
   ],
   hanzi:[]},
];

const wuData = [
  {img:'🥵',label:'热',py:'rè',letter:'A'},
  {img:'🥶',label:'冷',py:'lěng',letter:'B'},
  {img:'🌧️',label:'下雨',py:'xià yǔ',letter:'C'},
  {img:'🍎',label:'水果',py:'shuǐguǒ',letter:'D'},
  {img:'💧',label:'水',py:'shuǐ',letter:'E'},
  {img:'❤️',label:'爱',py:'ài',letter:'F'},
];

const dialogData = [
  {scene:'Trên đường · Hỏi thời tiết',
   lines:[
     {sp:0,zh:'昨天北京的天气怎么样？',py:'Zuótiān Běijīng de tiānqì zěnmeyàng?',vn:'Hôm qua thời tiết ở Bắc Kinh thế nào?'},
     {sp:1,zh:'太热了。',py:'Tài rè le.',vn:'Nóng lắm.'},
     {sp:0,zh:'明天呢？明天天气怎么样？',py:'Míngtiān ne? Míngtiān tiānqì zěnmeyàng?',vn:'Còn ngày mai thì sao? Thời tiết thế nào?'},
     {sp:1,zh:'明天天气很好，不冷不热。',py:'Míngtiān tiānqì hěn hǎo, bù lěng bú rè.',vn:'Ngày mai thời tiết rất đẹp, không lạnh cũng không nóng.'},
   ]},
  {scene:'Ở phòng tập thể dục · Dự báo mưa',
   lines:[
     {sp:0,zh:'今天会下雨吗？',py:'Jīntiān huì xià yǔ ma?',vn:'Hôm nay có mưa không nhỉ?'},
     {sp:1,zh:'今天不会下雨。',py:'Jīntiān bú huì xià yǔ.',vn:'Hôm nay không mưa đâu.'},
     {sp:0,zh:'王小姐今天会来吗？',py:'Wáng xiǎojiě jīntiān huì lái ma?',vn:'Hôm nay cô Vương có đến không nhỉ?'},
     {sp:1,zh:'不会来，天气太冷了。',py:'Bú huì lái, tiānqì tài lěng le.',vn:'Cô ấy không đến đâu, trời lạnh quá mà.'},
   ]},
  {scene:'Trong phòng bệnh · Thăm sức khỏe',
   lines:[
     {sp:0,zh:'你身体怎么样？',py:'Nǐ shēntǐ zěnmeyàng?',vn:'Sức khỏe của anh thế nào?'},
     {sp:1,zh:'我身体不太好。天气太热了，不爱吃饭。',py:'Wǒ shēntǐ bú tài hǎo. Tiānqì tài rè le, bú ài chī fàn.',vn:'Tôi không được khỏe lắm. Trời nóng quá, tôi chẳng muốn ăn cơm.'},
     {sp:0,zh:'你多吃些水果，多喝水。',py:'Nǐ duō chī xiē shuǐguǒ, duō hē shuǐ.',vn:'Anh hãy ăn thêm một ít trái cây và uống thêm nước nhé.'},
     {sp:1,zh:'谢谢你，医生。',py:'Xièxie nǐ, yīshēng.',vn:'Cảm ơn bác sĩ.'},
   ]},
];

// Điền từ — đổi tình huống/thời tiết so với bài khoá
const fillData = [
  {pre:'Bạn hỏi thời tiết hôm nay: “今天天气',blank:'怎么样',post:'？”',hint:'(thế nào)',ans:'怎么样'},
  {pre:'Bạn nói trời nóng quá: “今天',blank:'太',post:'热了。”',hint:'(quá, lắm)',ans:'太'},
  {pre:'Bạn nói thời tiết không lạnh cũng không nóng: “今天不冷不',blank:'热',post:'。”',hint:'(nóng)',ans:'热'},
  {pre:'Bạn nói trời lạnh: “今天很',blank:'冷',post:'。”',hint:'(lạnh)',ans:'冷'},
  {pre:'Bạn hỏi ngày mai có mưa không: “明天会',blank:'下雨',post:'吗？”',hint:'(có mưa)',ans:'下雨'},
  {pre:'Bạn hỏi thăm sức khỏe: “你',blank:'身体',post:'怎么样？”',hint:'(sức khỏe, cơ thể)',ans:'身体'},
  {pre:'Bạn khuyên ai đó ăn thêm trái cây: “你多吃',blank:'些',post:'水果。”',hint:'(một ít, một vài)',ans:'些'},
  {pre:'Bạn nói mình không thích ăn cơm khi trời nóng: “天气太热了，我不',blank:'爱',post:'吃饭。”',hint:'(thích, muốn)',ans:'爱'},
];

// Sắp xếp — đổi câu chữ/tình huống so với bài khoá
const sortData = [
  {words:['今天','天气','怎么样','？'],ans:'今天天气怎么样？',audio:'今天天气怎么样？'},
  {words:['今天','很','冷','。'],ans:'今天很冷。',audio:'今天很冷。'},
  {words:['明天','会','下雨','吗','？'],ans:'明天会下雨吗？',audio:'明天会下雨吗？'},
  {words:['你','身体','怎么样','？'],ans:'你身体怎么样？',audio:'你身体怎么样？'},
  {words:['我','不','爱','吃饭','。'],ans:'我不爱吃饭。',audio:'我不爱吃饭。'},
  {words:['你','多','喝','水','。'],ans:'你多喝水。',audio:'你多喝水。'},
];

const matchData = [
  {left:'昨天北京的天气怎么样？',right:'太热了。'},
  {left:'明天天气怎么样？',right:'明天天气很好，不冷不热。'},
  {left:'今天会下雨吗？',right:'今天不会下雨。'},
  {left:'王小姐今天会来吗？',right:'不会来，天气太冷了。'},
  {left:'你身体怎么样？',right:'我身体不太好。'},
];

// Trắc nghiệm — trọng tâm 怎么样/太……了/会 dự đoán, không audio
const mcData = [
  {q:'今天天气＿＿？',opts:['怎么样','什么','怎么','哪儿'],ans:0},
  {q:'今天＿＿热了。',opts:['太','很','不','没'],ans:0},
  {q:'Phủ định của "太……了" (quá) thường dùng cấu trúc nào?',opts:['不太……','没太……','别太……','无太……'],ans:0},
  {q:'明天会＿＿吗？(biểu thị khả năng sẽ xảy ra)',opts:['来','是','有','在'],ans:0},
  {q:'"身体" nghĩa là gì?',opts:['sức khỏe, cơ thể','tâm trạng','tính cách','ngoại hình'],ans:0},
  {q:'"水果" nghĩa là gì?',opts:['trái cây, hoa quả','rau củ','nước uống','đồ ăn'],ans:0},
  {q:'"冷" nghĩa là gì?',opts:['lạnh','nóng','ấm','mát'],ans:0},
  {q:'Câu vị ngữ chủ-vị nào ĐÚNG?',opts:['我身体不太好。','我不太好身体。','身体我不太好。','不太好我身体。'],ans:0},
  {q:'"爱" trong "不爱吃饭" nghĩa là gì?',opts:['thích, muốn','yêu (tình cảm nam nữ)','ghét','sợ'],ans:0},
  {q:'"下雨" nghĩa là gì?',opts:['đổ mưa, có mưa','có nắng','có gió','có tuyết'],ans:0},
];

const speakingData = {
  t1:{
    intro:'Nhấn 🔊 nghe từng câu mẫu, đọc to theo cho tới khi trôi chảy.',
    models:[
      {zh:'今天天气怎么样？',py:'Jīntiān tiānqì zěnmeyàng?',vn:'Hôm nay thời tiết thế nào?'},
      {zh:'明天天气很好，不冷不热。',py:'Míngtiān tiānqì hěn hǎo, bù lěng bú rè.',vn:'Ngày mai thời tiết rất đẹp, không lạnh cũng không nóng.'},
      {zh:'今天会下雨吗？',py:'Jīntiān huì xià yǔ ma?',vn:'Hôm nay có mưa không nhỉ?'},
      {zh:'你身体怎么样？',py:'Nǐ shēntǐ zěnmeyàng?',vn:'Sức khỏe của anh thế nào?'},
      {zh:'你多吃些水果，多喝水。',py:'Nǐ duō chī xiē shuǐguǒ, duō hē shuǐ.',vn:'Anh hãy ăn thêm một ít trái cây và uống thêm nước nhé.'},
    ],
  },
  t2:{
    intro:'Dùng khung câu cho sẵn, thay thế phần gạch chân bằng từ trong ô gợi ý. Nhấn 🔊 để nghe rồi nói to mỗi câu bạn tạo được.',
    drills:[
      {frame:'今天天气很＿＿。',frame_py:'Jīntiān tiānqì hěn ___.',vn:'Hôm nay thời tiết rất ＿＿.',options:['冷','热','好'],samples:['今天天气很冷。','今天天气很热。','今天天气很好。']},
      {frame:'你多吃些＿＿。',frame_py:'Nǐ duō chī xiē ___.',vn:'Bạn hãy ăn thêm một ít ＿＿.',options:['水果','米饭'],samples:['你多吃些水果。','你多吃些米饭。']},
    ],
  },
  t3:{
    intro:'Không nhìn câu mẫu, hãy tưởng tượng bạn đang ở trong tình huống thực tế và tự nói ra câu phù hợp.',
    tasks:[
      {role:'🌤️ Tình huống 1 — Hỏi thăm thời tiết trước khi ra ngoài',
       guide:'Bạn chuẩn bị ra ngoài và muốn biết thời tiết hôm nay và ngày mai thế nào.',
       structure:['今天天气怎么样？','明天呢？明天天气怎么样？'],
       sample:'今天天气怎么样？太热了。明天呢？明天天气很好，不冷不热。',
       sample_vn:'Hôm nay thời tiết thế nào? Nóng lắm. Còn ngày mai? Ngày mai thời tiết rất đẹp, không lạnh cũng không nóng.',
       note:'Cấu trúc "不A不B" (不冷不热) rất thông dụng để diễn tả mức độ VỪA PHẢI, ở giữa hai thái cực — không chỉ dùng cho thời tiết mà còn nhiều tình huống khác.'},
      {role:'☔ Tình huống 2 — Dự đoán thời tiết và kế hoạch gặp mặt',
       guide:'Bạn hỏi bạn bè xem hôm nay có mưa không và liệu một người bạn chung có đến không.',
       structure:['今天会下雨吗？','王小姐今天会来吗？'],
       sample:'今天会下雨吗？今天不会下雨。王小姐今天会来吗？不会来，天气太冷了。',
       sample_vn:'Hôm nay có mưa không? Không mưa đâu. Cô Vương hôm nay có đến không? Không đến đâu, trời lạnh quá.',
       note:'会 ở đây dùng để dự đoán KHẢ NĂNG một sự việc sẽ xảy ra trong tương lai — khác với 会 ở Bài 6 biểu thị "biết" qua học tập.'},
      {role:'🍎 Tình huống 3 — Thăm hỏi sức khỏe và đưa lời khuyên',
       guide:'Bạn đến thăm một người ốm, hỏi thăm sức khỏe rồi đưa ra lời khuyên.',
       structure:['你身体怎么样？','你多吃些＿＿，多喝水。'],
       sample:'你身体怎么样？我身体不太好。你多吃些水果，多喝水。',
       sample_vn:'Sức khỏe của anh thế nào? Tôi không được khỏe lắm. Anh hãy ăn thêm trái cây và uống thêm nước nhé.',
       note:'Cấu trúc "多 + Động từ + 些 + Danh từ" (多吃些水果) là cách khuyên nhủ RẤT TỰ NHIÊN và phổ biến khi quan tâm đến sức khỏe người khác.'},
    ],
  },
};
