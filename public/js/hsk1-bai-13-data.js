// ══════════════════════════════════════════
// DATA — HSK1 Bài 13: 他在学做中国菜呢。
// ══════════════════════════════════════════
var vocabData = [
  {n:1,zh:'喂',py:'wèi',pos:'Cảm thán từ',vn:'a lô, này',em:'📞',lesson:1,
   ex_zh:'喂，你在做什么呢？',ex_py:'Wèi, nǐ zài zuò shénme ne?',ex_vn:'A lô, anh đang làm gì vậy?',
   exList:[
     {zh:'喂，你在做什么呢？',py:'Wèi, nǐ zài zuò shénme ne?',vn:'A lô, anh đang làm gì vậy?'},
   ],
   hanzi:[
     {c:'喂',p:'wèi',type:'左右结构 · Trái-phải',st:12,ord:'口(khẩu) trái → 畏(biến thể) phải',rad:'口 (khẩu – miệng)',mean:'a lô (đầu dây điện thoại)',
      tip:'口(miệng) mượn âm 畏 → thán từ dùng để GỌI, đặc biệt khi nghe điện thoại.',
      cf:'畏 (wèi – "sợ hãi")',w:'喂，你好'},
   ]},
  {n:2,zh:'也',py:'yě',pos:'Phó từ',vn:'cũng',em:'➕',lesson:1,
   ex_zh:'大卫也在看书吗？',ex_py:'Dàwèi yě zài kàn shū ma?',ex_vn:'David cũng đang đọc sách à?',
   exList:[
     {zh:'大卫也在看书吗？',py:'Dàwèi yě zài kàn shū ma?',vn:'David cũng đang đọc sách à?'},
   ],
   hanzi:[
     {c:'也',p:'yě',type:'独体字 · Chữ đơn',st:3,ord:'乛→𠃊→乙',rad:'乙 (ất)',mean:'cũng',
      tip:'Chữ cổ vốn chỉ hình cái bình đựng nước, nay dùng làm phó từ "CŨNG".',
      cf:'心 (xīn – "tim")',w:'也在看书 / 我也是'},
   ]},
  {n:3,zh:'学习',py:'xuéxí',pos:'Động từ',vn:'học, học tập',em:'📖',lesson:1,
   ex_zh:'我在学习汉语。',ex_py:'Wǒ zài xuéxí Hànyǔ.',ex_vn:'Tôi đang học tiếng Trung.',
   exList:[
     {zh:'我在学习汉语。',py:'Wǒ zài xuéxí Hànyǔ.',vn:'Tôi đang học tiếng Trung.'},
   ],
   hanzi:[
     {c:'习',p:'xí',type:'独体字 · Chữ đơn',st:3,ord:'𠃌→乙→丨(biến thể)',rad:'乙 (ất, biến thể)',mean:'học tập, luyện tập',
      tip:'Hình đôi cánh chim non tập bay lặp đi lặp lại → LUYỆN TẬP, HỌC TẬP. (学 đã học ở Bài 3)',
      cf:'羽 (yǔ – "lông vũ", chữ gốc")',w:'学习汉语'},
   ]},
  {n:4,zh:'上午',py:'shàngwǔ',pos:'Danh từ',vn:'buổi sáng',em:'🌅',lesson:1,
   ex_zh:'昨天上午你在做什么呢？',ex_py:'Zuótiān shàngwǔ nǐ zài zuò shénme ne?',ex_vn:'Chị làm gì vào sáng hôm qua vậy?',
   exList:[
     {zh:'昨天上午你在做什么呢？',py:'Zuótiān shàngwǔ nǐ zài zuò shénme ne?',vn:'Chị làm gì vào sáng hôm qua vậy?'},
   ],
   hanzi:[]},
  {n:5,zh:'睡觉',py:'shuì jiào',pos:'Động từ',vn:'ngủ',em:'😴',lesson:2,
   ex_zh:'我在睡觉呢。',ex_py:'Wǒ zài shuì jiào ne.',ex_vn:'Tôi đang ngủ.',
   exList:[
     {zh:'我在睡觉呢。',py:'Wǒ zài shuì jiào ne.',vn:'Tôi đang ngủ.'},
   ],
   hanzi:[
     {c:'睡',p:'shuì',type:'左右结构 · Trái-phải',st:13,ord:'目(mục) trái → 垂(thùy) phải',rad:'目 (mục – mắt)',mean:'ngủ',
      tip:'目(mắt) + 垂(rủ xuống) → mắt rủ xuống khép lại = NGỦ.',
      cf:'垂 (chuí – "rủ xuống")',w:'睡觉'},
     {c:'觉',p:'jiào',type:'上下结构 · Trên-dưới',st:9,ord:'冖 trên → 见(kiến) dưới',rad:'见 (kiến – nhìn thấy)',mean:'ngủ (trong 睡觉)',
      tip:'冖(nhắm mắt che lại) + 见(nhìn) → khi ngủ mắt nhắm lại không còn nhìn thấy gì.',
      cf:'学 (xué – "học", đã học Bài 3, phần trên gần giống")',w:'睡觉'},
   ]},
  {n:6,zh:'电视',py:'diànshì',pos:'Danh từ',vn:'tivi',em:'📺',lesson:2,
   ex_zh:'我在家看电视呢。',ex_py:'Wǒ zài jiā kàn diànshì ne.',ex_vn:'Tôi xem tivi ở nhà.',
   exList:[
     {zh:'我在家看电视呢。',py:'Wǒ zài jiā kàn diànshì ne.',vn:'Tôi xem tivi ở nhà.'},
   ],
   hanzi:[
     {c:'视',p:'shì',type:'左右结构 · Trái-phải',st:8,ord:'礻(biến thể) trái → 见(kiến) phải',rad:'见 (kiến – nhìn thấy)',mean:'xem, nhìn',
      tip:'礻(biểu thị điều thiêng liêng) + 见(nhìn) → chăm chú NHÌN, XEM. (电 đã học ở Bài 10)',
      cf:'现 (xiàn – "hiện tại", đã học Bài 11")',w:'电视 / 看电视'},
   ]},
  {n:7,zh:'喜欢',py:'xǐhuan',pos:'Động từ',vn:'thích, ưa thích',em:'😊',lesson:2,
   ex_zh:'你喜欢看电视吗？',ex_py:'Nǐ xǐhuan kàn diànshì ma?',ex_vn:'Chị có thích xem tivi không?',
   exList:[
     {zh:'你喜欢看电视吗？',py:'Nǐ xǐhuan kàn diànshì ma?',vn:'Chị có thích xem tivi không?'},
   ],
   hanzi:[
     {c:'喜',p:'xǐ',type:'上下结构 · Trên-dưới',st:12,ord:'壴(biến thể) trên → 口(khẩu) dưới',rad:'口 (khẩu – miệng)',mean:'vui, thích',
      tip:'壴(trống nhạc) + 口(miệng cười) → nghe nhạc vui miệng cười = VUI THÍCH.',
      cf:'嘉 (jiā – "tốt đẹp")',w:'喜欢'},
     {c:'欢',p:'huān',type:'左右结构 · Trái-phải',st:6,ord:'又(biến thể) trái → 欠(khiếm) phải',rad:'欠 (khiếm – thiếu, ngáp)',mean:'vui mừng',
      tip:'又(bàn tay, lặp lại) + 欠(mở miệng) → cười nói VUI VẺ.',
      cf:'次 (cì – "lần")',w:'喜欢'},
   ]},
  {n:8,zh:'给',py:'gěi',pos:'Giới từ',vn:'cho, hướng về',em:'🎁',lesson:3,
   ex_zh:'我现在给她打电话。',ex_py:'Wǒ xiànzài gěi tā dǎ diànhuà.',ex_vn:'Bây giờ tôi gọi điện cho cô ấy đây.',
   exList:[
     {zh:'我现在给她打电话。',py:'Wǒ xiànzài gěi tā dǎ diànhuà.',vn:'Bây giờ tôi gọi điện cho cô ấy đây.'},
   ],
   hanzi:[
     {c:'给',p:'gěi',type:'左右结构 · Trái-phải',st:9,ord:'纟(mịch) trái → 合(hợp) phải',rad:'纟 (mịch – tơ, sợi)',mean:'cho, hướng về',
      tip:'纟(sợi tơ, buộc quà) + 合(hợp lại, trao) → trao CHO, dành CHO ai đó.',
      cf:'合 (hé – "hợp")',w:'给她打电话'},
   ]},
  {n:9,zh:'打电话',py:'dǎ diànhuà',pos:'Động từ',vn:'gọi điện thoại',em:'☎️',lesson:3,
   ex_zh:'我现在给她打电话。',ex_py:'Wǒ xiànzài gěi tā dǎ diànhuà.',ex_vn:'Bây giờ tôi gọi điện cho cô ấy đây.',
   exList:[
     {zh:'我现在给她打电话。',py:'Wǒ xiànzài gěi tā dǎ diànhuà.',vn:'Bây giờ tôi gọi điện cho cô ấy đây.'},
   ],
   hanzi:[
     {c:'打',p:'dǎ',type:'左右结构 · Trái-phải',st:5,ord:'扌(thủ) trái → 丁(đinh) phải',rad:'扌 (thủ – tay, biến thể)',mean:'đánh, gọi (điện thoại)',
      tip:'扌(tay) + 丁(cái đinh) → dùng tay tác động vào vật → mở rộng "打电话" = bấm máy GỌI ĐIỆN.',
      cf:'订 (dìng – "đặt hàng")',w:'打电话'},
     {c:'话',p:'huà',type:'左右结构 · Trái-phải',st:8,ord:'讠(ngôn) trái → 舌(thiệt) phải',rad:'讠 (ngôn – lời nói)',mean:'lời nói, chuyện',
      tip:'讠(lời nói) + 舌(lưỡi, cơ quan phát âm) → LỜI NÓI, câu CHUYỆN.',
      cf:'活 (huó – "sống")',w:'电话 / 打电话'},
   ]},
  {n:10,zh:'吧',py:'ba',pos:'Trợ từ',vn:'trợ từ ngữ khí (làm dịu giọng, đề nghị)',em:'💬',lesson:3,
   ex_zh:'你下午打吧。',ex_py:'Nǐ xiàwǔ dǎ ba.',ex_vn:'Buổi chiều anh hãy gọi.',
   exList:[
     {zh:'你下午打吧。',py:'Nǐ xiàwǔ dǎ ba.',vn:'Buổi chiều anh hãy gọi.'},
   ],
   hanzi:[
     {c:'吧',p:'ba',type:'左右结构 · Trái-phải',st:7,ord:'口(khẩu) trái → 巴(ba) phải',rad:'口 (khẩu – miệng)',mean:'trợ từ ngữ khí',
      tip:'口(miệng) mượn âm 巴 → trợ từ đặt cuối câu làm giọng nói nhẹ nhàng hơn, mang tính đề nghị.',
      cf:'爸 (bà – "cha", đã học Bài 9, cũng mượn âm 巴")',w:'你下午打吧'},
   ]},
];

const wuData = [
  {img:'📞',label:'喂',py:'wèi',letter:'A'},
  {img:'😴',label:'睡觉',py:'shuì jiào',letter:'B'},
  {img:'📺',label:'电视',py:'diànshì',letter:'C'},
  {img:'😊',label:'喜欢',py:'xǐhuan',letter:'D'},
  {img:'☎️',label:'打电话',py:'dǎ diànhuà',letter:'E'},
  {img:'📖',label:'学习',py:'xuéxí',letter:'F'},
];

var dialogData = [
  {scene:'Gọi điện thoại · Hỏi đang làm gì',
   lines:[
     {sp:0,zh:'喂，你在做什么呢？',py:'Wèi, nǐ zài zuò shénme ne?',vn:'A lô, anh đang làm gì vậy?'},
     {sp:1,zh:'我在看书呢。',py:'Wǒ zài kàn shū ne.',vn:'Tôi đang đọc sách.'},
     {sp:0,zh:'大卫也在看书吗？',py:'Dàwèi yě zài kàn shū ma?',vn:'David cũng đang đọc sách à?'},
     {sp:1,zh:'他没看书，他在学做中国菜呢。',py:'Tā méi kàn shū, tā zài xué zuò Zhōngguó cài ne.',vn:'Không phải, anh ấy đang học nấu món ăn Trung Quốc.'},
   ]},
  {scene:'Ở quán cà phê · Hoạt động hôm qua',
   lines:[
     {sp:0,zh:'昨天上午你在做什么呢？',py:'Zuótiān shàngwǔ nǐ zài zuò shénme ne?',vn:'Chị làm gì vào sáng hôm qua vậy?'},
     {sp:1,zh:'我在睡觉呢。你呢？',py:'Wǒ zài shuì jiào ne. Nǐ ne?',vn:'Tôi ngủ. Còn cô thì sao?'},
     {sp:0,zh:'我在家看电视呢。你喜欢看电视吗？',py:'Wǒ zài jiā kàn diànshì ne. Nǐ xǐhuan kàn diànshì ma?',vn:'Tôi xem tivi ở nhà. Chị có thích xem tivi không?'},
     {sp:1,zh:'我不喜欢看电视，我喜欢看电影。',py:'Wǒ bù xǐhuan kàn diànshì, wǒ xǐhuan kàn diànyǐng.',vn:'Không, tôi thích xem phim.'},
   ]},
  {scene:'Trong văn phòng của trường · Gọi điện tìm cô giáo',
   lines:[
     {sp:0,zh:'82304155，这是李老师的电话吗？',py:'Bā èr sān líng sì yāo wǔ wǔ, zhè shì Lǐ lǎoshī de diànhuà ma?',vn:'82304155, đây là số điện thoại của cô Lý phải không?'},
     {sp:1,zh:'不是。她的电话是82304156。',py:'Bú shì. Tā de diànhuà shì bā èr sān líng sì yāo wǔ liù.',vn:'Không phải. Số của cô ấy là 82304156.'},
     {sp:0,zh:'好，我现在给她打电话。',py:'Hǎo, wǒ xiànzài gěi tā dǎ diànhuà.',vn:'Được, bây giờ tôi gọi điện cho cô ấy đây.'},
     {sp:1,zh:'她在工作呢，你下午打吧。',py:'Tā zài gōngzuò ne, nǐ xiàwǔ dǎ ba.',vn:'Cô ấy đang làm việc, buổi chiều anh hãy gọi.'},
   ]},
];

// Điền từ — đổi hoạt động so với bài khoá
var fillData = [
  {pre:'Nghe điện thoại reo, bạn bắt máy nói: “',blank:'喂',post:'，你好！”',hint:'(a lô)',ans:'喂'},
  {pre:'Bạn nói mình cũng đang đọc sách: “我',blank:'也',post:'在看书。”',hint:'(cũng)',ans:'也'},
  {pre:'Bạn nói mình đang ngủ: “我在',blank:'睡觉',post:'。”',hint:'(ngủ)',ans:'睡觉'},
  {pre:'Bạn hỏi ai đó có thích xem phim không: “你',blank:'喜欢',post:'看电影吗？”',hint:'(thích)',ans:'喜欢'},
  {pre:'Bạn nói mình đang xem tivi: “我在看',blank:'电视',post:'。”',hint:'(tivi)',ans:'电视'},
  {pre:'Bạn nói sẽ gọi điện cho ai đó: “我',blank:'给',post:'她打电话。”',hint:'(cho, hướng về)',ans:'给'},
  {pre:'Bạn đề nghị nhẹ nhàng ai đó gọi vào buổi chiều: “你下午打',blank:'吧',post:'。”',hint:'(trợ từ đề nghị)',ans:'吧'},
  {pre:'Bạn nói mình đang học tiếng Trung: “我在',blank:'学习',post:'汉语。”',hint:'(học, học tập)',ans:'学习'},
];

// Sắp xếp — đổi hoạt động so với bài khoá
var sortData = [
  {words:['喂','，','你','在','做','什么','呢','？'],ans:'喂，你在做什么呢？',audio:'喂，你在做什么呢？'},
  {words:['我','在','看','书','呢','。'],ans:'我在看书呢。',audio:'我在看书呢。'},
  {words:['我','在','睡觉','呢','。'],ans:'我在睡觉呢。',audio:'我在睡觉呢。'},
  {words:['你','喜欢','看','电视','吗','？'],ans:'你喜欢看电视吗？',audio:'你喜欢看电视吗？'},
  {words:['我','不','喜欢','看','电视','。'],ans:'我不喜欢看电视。',audio:'我不喜欢看电视。'},
  {words:['我','现在','给','她','打电话','。'],ans:'我现在给她打电话。',audio:'我现在给她打电话。'},
];

var matchData = [
  {left:'喂，你在做什么呢？',right:'我在看书呢。'},
  {left:'大卫也在看书吗？',right:'他没看书，他在学做中国菜呢。'},
  {left:'昨天上午你在做什么呢？',right:'我在睡觉呢。'},
  {left:'你喜欢看电视吗？',right:'我不喜欢看电视，我喜欢看电影。'},
  {left:'这是李老师的电话吗？',right:'不是。她的电话是82304156。'},
];

// Trắc nghiệm — trọng tâm 在……呢 (đang tiếp diễn), 吧, số điện thoại, không audio
var mcData = [
  {q:'喂，你在做什么＿＿？',opts:['呢','吗','吧','了'],ans:0},
  {q:'我在睡觉＿＿。(diễn tả hành động đang tiếp diễn)',opts:['呢','吗','吧','了'],ans:0},
  {q:'Phủ định của hành động đang tiếp diễn dùng cấu trúc nào?',opts:['没(在) + Động từ','不 + Động từ','别 + Động từ','无 + Động từ'],ans:0},
  {q:'Số điện thoại "1" đọc như thế nào trong tiếng Trung?',opts:['yāo','yī','yì','yí'],ans:0},
  {q:'"喜欢" nghĩa là gì?',opts:['thích, ưa thích','ghét','sợ','buồn'],ans:0},
  {q:'"睡觉" nghĩa là gì?',opts:['ngủ','thức dậy','ăn cơm','đọc sách'],ans:0},
  {q:'"打电话" nghĩa là gì?',opts:['gọi điện thoại','xem tivi','nghe nhạc','chơi game'],ans:0},
  {q:'Trợ từ nào đặt cuối câu để làm dịu giọng, đưa ra lời khuyên?',opts:['吧','呢','吗','了'],ans:0},
  {q:'"电视" nghĩa là gì?',opts:['tivi','điện thoại','máy tính','radio'],ans:0},
  {q:'"给" trong "给她打电话" nghĩa là gì?',opts:['cho, hướng về (đối tượng)','và','ở','là'],ans:0},
];

var speakingData = {
  t1:{
    intro:'Nhấn 🔊 nghe từng câu mẫu, đọc to theo cho tới khi trôi chảy.',
    models:[
      {zh:'喂，你在做什么呢？',py:'Wèi, nǐ zài zuò shénme ne?',vn:'A lô, anh đang làm gì vậy?'},
      {zh:'我在看书呢。',py:'Wǒ zài kàn shū ne.',vn:'Tôi đang đọc sách.'},
      {zh:'我在睡觉呢。',py:'Wǒ zài shuì jiào ne.',vn:'Tôi đang ngủ.'},
      {zh:'你喜欢看电视吗？',py:'Nǐ xǐhuan kàn diànshì ma?',vn:'Chị có thích xem tivi không?'},
      {zh:'我现在给她打电话。',py:'Wǒ xiànzài gěi tā dǎ diànhuà.',vn:'Bây giờ tôi gọi điện cho cô ấy đây.'},
    ],
  },
  t2:{
    intro:'Dùng khung câu cho sẵn, thay thế phần gạch chân bằng từ trong ô gợi ý. Nhấn 🔊 để nghe rồi nói to mỗi câu bạn tạo được.',
    drills:[
      {frame:'我在＿＿呢。',frame_py:'Wǒ zài ___ ne.',vn:'Tôi đang ＿＿.',options:['看书','睡觉','看电视'],samples:['我在看书呢。','我在睡觉呢。','我在看电视呢。']},
      {frame:'我喜欢＿＿。',frame_py:'Wǒ xǐhuan ___.',vn:'Tôi thích ＿＿.',options:['看电视','看电影'],samples:['我喜欢看电视。','我喜欢看电影。']},
    ],
  },
  t3:{
    intro:'Không nhìn câu mẫu, hãy tưởng tượng bạn đang ở trong tình huống thực tế và tự nói ra câu phù hợp.',
    tasks:[
      {role:'📞 Tình huống 1 — Gọi điện hỏi thăm bạn bè',
       guide:'Bạn gọi điện cho bạn và hỏi họ đang làm gì.',
       structure:['喂，你在做什么呢？','我在＿＿呢。'],
       sample:'喂，你在做什么呢？我在看书呢。',
       sample_vn:'A lô, bạn đang làm gì vậy? Tôi đang đọc sách.',
       note:'喂 CHỈ dùng khi bắt đầu cuộc gọi điện thoại — không dùng để chào hỏi trực tiếp mặt đối mặt như 你好.'},
      {role:'📺 Tình huống 2 — Chia sẻ sở thích giải trí',
       guide:'Bạn trò chuyện với bạn bè về việc hôm qua đã làm gì và sở thích xem tivi hay phim.',
       structure:['昨天上午你在做什么呢？','你喜欢看电视吗？'],
       sample:'昨天上午你在做什么呢？我在睡觉呢。你喜欢看电视吗？我不喜欢看电视，我喜欢看电影。',
       sample_vn:'Sáng hôm qua bạn làm gì vậy? Tôi ngủ. Bạn có thích xem tivi không? Tôi không thích xem tivi, tôi thích xem phim.',
       note:'Có thể trả lời phủ định kèm bổ sung ngay ý đối lập trong cùng câu (不喜欢A，喜欢B) — cách nói rất tự nhiên và thường gặp trong giao tiếp.'},
      {role:'☎️ Tình huống 3 — Gọi điện tìm người, xử lý khi không tiện',
       guide:'Bạn gọi điện cho ai đó nhưng người nghe máy báo rằng người bạn cần đang bận, hãy xử lý tình huống lịch sự.',
       structure:['我现在给她打电话。','她在工作呢，你下午打吧。'],
       sample:'我现在给她打电话。她在工作呢，你下午打吧。',
       sample_vn:'Bây giờ tôi gọi điện cho cô ấy đây. Cô ấy đang làm việc, buổi chiều anh hãy gọi.',
       note:'Trợ từ 吧 ở cuối câu làm cho lời đề nghị "bạn hãy gọi lại vào buổi chiều" nghe NHẸ NHÀNG, thân thiện hơn thay vì ra lệnh cộc lốc.'},
    ],
  },
};
