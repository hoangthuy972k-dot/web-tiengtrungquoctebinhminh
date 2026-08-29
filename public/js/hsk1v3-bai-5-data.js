// ══════════════════════════════════════════
// DATA — HSK1 (3.0 Mới) Bài 5: 今天我休息
// Nguồn: Giáo trình New HSK 1 (chuẩn 3.0) - Trung Việt, NXB Dân Trí
// ══════════════════════════════════════════
var vocabData = [
  {n:1,zh:'今天',py:'jīntiān',pos:'Danh từ',vn:'hôm nay',em:'📅',lesson:1,
   ex_zh:'今天几号？',ex_py:'Jīntiān jǐ hào?',ex_vn:'Hôm nay ngày mấy?',
   exList:[
     {zh:'今天几号？',py:'Jīntiān jǐ hào?',vn:'Hôm nay ngày mấy?'},
     {zh:'今天9月8号。',py:'Jīntiān jiǔ yuè bā hào.',vn:'Hôm nay là ngày 8 tháng 9.'},
   ]},
  {n:2,zh:'号',py:'hào',pos:'Lượng từ',vn:'ngày, mùng',em:'🔢',lesson:1,
   ex_zh:'今天9月8号。',ex_py:'Jīntiān jiǔ yuè bā hào.',ex_vn:'Hôm nay là ngày 8 tháng 9.',
   exList:[
     {zh:'今天9月8号。',py:'Jīntiān jiǔ yuè bā hào.',vn:'Hôm nay là ngày 8 tháng 9.'},
   ]},
  {n:3,zh:'月',py:'yuè',pos:'Danh từ',vn:'tháng',em:'🌙',lesson:1,
   ex_zh:'今天9月8号。',ex_py:'Jīntiān jiǔ yuè bā hào.',ex_vn:'Hôm nay là ngày 8 tháng 9.',
   exList:[
     {zh:'今天9月8号。',py:'Jīntiān jiǔ yuè bā hào.',vn:'Hôm nay là ngày 8 tháng 9.'},
   ],
   hanzi:[
     {c:'月',p:'yuè',type:'独体字 · Chữ đơn (tượng hình)',st:4,ord:'ノ→冂→二',rad:'月 (nguyệt)',mean:'tháng, mặt trăng',
      tip:'Hình vẽ mặt trăng khuyết → NGUYỆT (mặt trăng), mở rộng nghĩa thành THÁNG (chu kỳ mặt trăng).',
      cf:'肉 (ròu – "thịt", dễ nhầm bộ 月 dạng nhục)',w:'九月 / 月亮'},
   ]},
  {n:4,zh:'日',py:'rì',pos:'Lượng từ',vn:'ngày',em:'☀️',lesson:1,
   ex_zh:'星期日',ex_py:'Xīngqīrì',ex_vn:'Chủ nhật',
   exList:[
     {zh:'星期日',py:'Xīngqīrì',vn:'Chủ nhật'},
   ]},
  {n:5,zh:'星期',py:'xīngqī',pos:'Danh từ',vn:'thứ, tuần',em:'📆',lesson:1,
   ex_zh:'星期几？',ex_py:'Xīngqī jǐ?',ex_vn:'Hôm nay thứ mấy?',
   exList:[
     {zh:'星期几？',py:'Xīngqī jǐ?',vn:'Hôm nay thứ mấy?'},
   ]},
  {n:6,zh:'星期日',py:'Xīngqīrì',pos:'Danh từ',vn:'Chủ nhật',em:'🌞',lesson:1,
   ex_zh:'星期日。今天我休息。',ex_py:'Xīngqīrì. Jīntiān wǒ xiūxi.',ex_vn:'Chủ nhật. Hôm nay anh được nghỉ.',
   exList:[
     {zh:'星期日。今天我休息。',py:'Xīngqīrì. Jīntiān wǒ xiūxi.',vn:'Chủ nhật. Hôm nay anh được nghỉ.'},
   ]},
  {n:7,zh:'星期天',py:'Xīngqītiān',pos:'Danh từ',vn:'Chủ nhật',em:'🌞',lesson:2,
   ex_zh:'星期天我也做饭。',ex_py:'Xīngqītiān wǒ yě zuò fàn.',ex_vn:'Chủ nhật tôi cũng nấu ăn.',
   exList:[
     {zh:'星期天我也做饭。',py:'Xīngqītiān wǒ yě zuò fàn.',vn:'Chủ nhật tôi cũng nấu ăn.'},
   ]},
  {n:8,zh:'休息',py:'xiūxi',pos:'Động từ',vn:'nghỉ, nghỉ ngơi',em:'😴',lesson:1,
   ex_zh:'今天我休息。',ex_py:'Jīntiān wǒ xiūxi.',ex_vn:'Hôm nay anh được nghỉ.',
   exList:[
     {zh:'今天我休息。',py:'Jīntiān wǒ xiūxi.',vn:'Hôm nay anh được nghỉ.'},
   ],
   hanzi:[
     {c:'休',p:'xiū',type:'左右结构 · Trái-phải',st:6,ord:'亻(nhân) trái → 木(mộc) phải',rad:'亻 (nhân – người)',mean:'nghỉ ngơi',
      tip:'亻(người) dựa vào 木(cây) → hình ảnh người ngồi tựa gốc cây để NGHỈ NGƠI.',
      cf:'体 (tǐ – "thân thể", cũng bộ 亻")',w:'休息 / 休假'},
   ]},
  {n:9,zh:'会',py:'huì',pos:'Động từ năng nguyện',vn:'biết, có thể',em:'✅',lesson:2,
   ex_zh:'你会做饭吗？',ex_py:'Nǐ huì zuò fàn ma?',ex_vn:'Em có biết nấu ăn không?',
   exList:[
     {zh:'你会做饭吗？',py:'Nǐ huì zuò fàn ma?',vn:'Em có biết nấu ăn không?'},
     {zh:'我会做。',py:'Wǒ huì zuò.',vn:'Em biết.'},
   ]},
  {n:10,zh:'做饭',py:'zuò fàn',pos:'Cụm từ',vn:'nấu ăn',em:'🍳',lesson:2,
   ex_zh:'你会做饭吗？',ex_py:'Nǐ huì zuò fàn ma?',ex_vn:'Em có biết nấu ăn không?',
   exList:[
     {zh:'你会做饭吗？',py:'Nǐ huì zuò fàn ma?',vn:'Em có biết nấu ăn không?'},
     {zh:'星期天我也做饭。',py:'Xīngqītiān wǒ yě zuò fàn.',vn:'Chủ nhật tôi cũng nấu ăn.'},
   ]},
  {n:11,zh:'做',py:'zuò',pos:'Động từ',vn:'làm, nấu',em:'👨‍🍳',lesson:2,
   ex_zh:'你会做什么？',ex_py:'Nǐ huì zuò shénme?',ex_vn:'Em biết nấu món gì?',
   exList:[
     {zh:'你会做什么？',py:'Nǐ huì zuò shénme?',vn:'Em biết nấu món gì?'},
   ]},
  {n:12,zh:'面条儿',py:'miàntiáor',pos:'Danh từ',vn:'mì, mì sợi',em:'🍜',lesson:2,
   ex_zh:'我会做面条儿、饺子。',ex_py:'Wǒ huì zuò miàntiáor, jiǎozi.',ex_vn:'Em biết nấu mì, sủi cảo.',
   exList:[
     {zh:'我会做面条儿、饺子。',py:'Wǒ huì zuò miàntiáor, jiǎozi.',vn:'Em biết nấu mì, sủi cảo.'},
   ]},
  {n:13,zh:'饺子',py:'jiǎozi',pos:'Danh từ',vn:'sủi cảo',em:'🥟',lesson:2,
   ex_zh:'我会做面条儿、饺子。',ex_py:'Wǒ huì zuò miàntiáor, jiǎozi.',ex_vn:'Em biết nấu mì, sủi cảo.',
   exList:[
     {zh:'我会做面条儿、饺子。',py:'Wǒ huì zuò miàntiáor, jiǎozi.',vn:'Em biết nấu mì, sủi cảo.'},
   ]},
  {n:14,zh:'一些',py:'yìxiē',pos:'Số lượng từ',vn:'một số, một vài',em:'🔸',lesson:2,
   ex_zh:'也会做一些菜。',ex_py:'Yě huì zuò yìxiē cài.',ex_vn:'Cũng biết chế biến một số món ăn khác.',
   exList:[
     {zh:'也会做一些菜。',py:'Yě huì zuò yìxiē cài.',vn:'Cũng biết chế biến một số món ăn khác.'},
   ]},
  {n:15,zh:'菜',py:'cài',pos:'Danh từ',vn:'món ăn, rau',em:'🥘',lesson:2,
   ex_zh:'也会做一些菜。',ex_py:'Yě huì zuò yìxiē cài.',ex_vn:'Cũng biết chế biến một số món ăn khác.',
   exList:[
     {zh:'也会做一些菜。',py:'Yě huì zuò yìxiē cài.',vn:'Cũng biết chế biến một số món ăn khác.'},
     {zh:'你会做这两个菜吗？',py:'Nǐ huì zuò zhè liǎng gè cài ma?',vn:'Bạn có biết làm hai món này không?'},
   ]},
  {n:16,zh:'下班',py:'xiàbān',pos:'Động từ',vn:'tan làm, tan ca',em:'🏁',lesson:3,
   ex_zh:'同乐，下班吗？',ex_py:'Tónglè, xiàbān ma?',ex_vn:'Đồng Lạc, tan làm chưa?',
   exList:[
     {zh:'同乐，下班吗？',py:'Tónglè, xiàbān ma?',vn:'Đồng Lạc, tan làm chưa?'},
     {zh:'下班。',py:'Xiàbān.',vn:'Tan làm rồi.'},
   ]},
  {n:17,zh:'新',py:'xīn',pos:'Tính từ',vn:'mới',em:'✨',lesson:3,
   ex_zh:'这是你的新电脑吗？',ex_py:'Zhè shì nǐ de xīn diànnǎo ma?',ex_vn:'Đây là máy tính mới của em à?',
   exList:[
     {zh:'这是你的新电脑吗？',py:'Zhè shì nǐ de xīn diànnǎo ma?',vn:'Đây là máy tính mới của em à?'},
   ]},
  {n:18,zh:'电脑',py:'diànnǎo',pos:'Danh từ',vn:'máy tính, máy vi tính',em:'💻',lesson:3,
   ex_zh:'这是你的新电脑吗？',ex_py:'Zhè shì nǐ de xīn diànnǎo ma?',ex_vn:'Đây là máy tính mới của em à?',
   exList:[
     {zh:'这是你的新电脑吗？',py:'Zhè shì nǐ de xīn diànnǎo ma?',vn:'Đây là máy tính mới của em à?'},
   ],
   hanzi:[
     {c:'脑',p:'nǎo',type:'左右结构 · Trái-phải (giản thể)',st:10,ord:'月(nhục) trái → 恼(biến thể) phải',rad:'月 (nhục – cơ thể)',mean:'não, đầu óc',
      tip:'月(bộ phận cơ thể) + phần biểu âm → bộ phận suy nghĩ trong đầu = NÃO; máy tính = "điện não" (bộ não điện tử).',
      cf:'恼 (nǎo – "phiền não")',w:'电脑 / 头脑'},
   ]},
  {n:19,zh:'真',py:'zhēn',pos:'Phó từ',vn:'thật, thực sự',em:'💯',lesson:3,
   ex_zh:'真好看！',ex_py:'Zhēn hǎokàn!',ex_vn:'Đẹp thật đấy!',
   exList:[
     {zh:'真好看！',py:'Zhēn hǎokàn!',vn:'Đẹp thật đấy!'},
   ]},
  {n:20,zh:'好看',py:'hǎokàn',pos:'Tính từ',vn:'đẹp',em:'😍',lesson:3,
   ex_zh:'真好看！',ex_py:'Zhēn hǎokàn!',ex_vn:'Đẹp thật đấy!',
   exList:[
     {zh:'真好看！',py:'Zhēn hǎokàn!',vn:'Đẹp thật đấy!'},
   ]},
  {n:21,zh:'喜欢',py:'xǐhuan',pos:'Động từ',vn:'thích',em:'😊',lesson:3,
   ex_zh:'我也很喜欢它。',ex_py:'Wǒ yě hěn xǐhuan tā.',ex_vn:'Em cũng rất thích nó.',
   exList:[
     {zh:'我也很喜欢它。',py:'Wǒ yě hěn xǐhuan tā.',vn:'Em cũng rất thích nó.'},
   ]},
  {n:22,zh:'它',py:'tā',pos:'Đại từ',vn:'nó',em:'📦',lesson:3,
   ex_zh:'我也很喜欢它。',ex_py:'Wǒ yě hěn xǐhuan tā.',ex_vn:'Em cũng rất thích nó.',
   exList:[
     {zh:'我也很喜欢它。',py:'Wǒ yě hěn xǐhuan tā.',vn:'Em cũng rất thích nó.'},
   ]},
];

var wuData = [
  {img:'📅',label:'2025 年 5 月',py:'èr líng èr wǔ nián wǔ yuè',letter:'A'},
  {img:'🈷️',label:'星期一',py:'Xīngqīyī',letter:'B'},
  {img:'💻',label:'电脑',py:'diànnǎo',letter:'C'},
  {img:'🍳',label:'做饭',py:'zuò fàn',letter:'D'},
  {img:'😴',label:'休息',py:'xiūxi',letter:'E'},
  {img:'🥟',label:'饺子',py:'jiǎozi',letter:'F'},
];

var dialogData = [
  {scene:'刘明和王一雪聊天 · Hỏi ngày tháng',
   preQuiz:[
     {q:'今天几月几号？',opts:['9月8号','8月9号','9月18号'],ans:0},
     {q:'今天星期几？',opts:['星期一','星期日','星期六'],ans:1},
     {q:'今天男的要做什么？',opts:['休息','上班','做饭'],ans:0},
   ],
   lines:[
     {sp:1,zh:'今天几号？',py:'Jīntiān jǐ hào?',vn:'Hôm nay ngày mấy anh nhỉ?'},
     {sp:0,zh:'今天9月8号。',py:'Jīntiān jiǔ yuè bā hào.',vn:'Hôm nay là ngày 8 tháng 9.'},
     {sp:1,zh:'星期几？',py:'Xīngqī jǐ?',vn:'Thứ mấy vậy?'},
     {sp:0,zh:'星期日。今天我休息。',py:'Xīngqīrì. Jīntiān wǒ xiūxi.',vn:'Chủ nhật. Hôm nay anh được nghỉ.'},
   ]},
  {scene:'王一雪和杨同乐聊天 · Hỏi chuyện nấu ăn',
   preQuiz:[
     {q:'杨同乐会做饭吗？',opts:['会','不会','不知道'],ans:0},
     {q:'杨同乐会做什么菜？',opts:['面条儿、饺子','米饭、汤','水果沙拉'],ans:0},
   ],
   lines:[
     {sp:0,zh:'你会做饭吗？',py:'Nǐ huì zuò fàn ma?',vn:'Em có biết nấu ăn không?'},
     {sp:1,zh:'我会做。',py:'Wǒ huì zuò.',vn:'Em biết.'},
     {sp:0,zh:'你会做什么？',py:'Nǐ huì zuò shénme?',vn:'Em biết nấu món gì?'},
     {sp:1,zh:'我会做面条儿、饺子，也会做一些菜。星期天我也做饭。',py:'Wǒ huì zuò miàntiáor, jiǎozi, yě huì zuò yìxiē cài. Xīngqītiān wǒ yě zuò fàn.',vn:'Em biết nấu mì, sủi cảo và biết chế biến một số món ăn khác. Chủ nhật em cũng nấu ăn.'},
   ]},
  {scene:'王一雪和杨同乐下班聊天 · Khen máy tính mới',
   preQuiz:[
     {q:'这台新电脑是谁的？',opts:['杨同乐的','王一雪的','别人的'],ans:0},
     {q:'王一雪觉得这台电脑怎么样？',opts:['真好看','不好看','太贵了'],ans:0},
   ],
   lines:[
     {sp:0,zh:'同乐，下班吗？',py:'Tónglè, xiàbān ma?',vn:'Đồng Lạc, em tan làm chưa?'},
     {sp:1,zh:'下班。',py:'Xiàbān.',vn:'Em tan làm rồi.'},
     {sp:0,zh:'这是你的新电脑吗？',py:'Zhè shì nǐ de xīn diànnǎo ma?',vn:'Đây là máy tính mới của em à?'},
     {sp:1,zh:'是的，是我的新电脑。',py:'Shì de, shì wǒ de xīn diànnǎo.',vn:'Đúng vậy, đây là máy tính mới của em.'},
     {sp:0,zh:'真好看！',py:'Zhēn hǎokàn!',vn:'Đẹp thật đấy!'},
     {sp:1,zh:'我也很喜欢它。',py:'Wǒ yě hěn xǐhuan tā.',vn:'Em cũng rất thích nó.'},
   ]},
];

// ══════════════════════════════════════════
// PHẦN 1 · GHÉP TỪ (Collocation)
// ══════════════════════════════════════════
var matchData = [
  {left:'星', right:'期'},
  {left:'休', right:'息'},
  {left:'做', right:'饭'},
  {left:'面', right:'条儿'},
  {left:'下', right:'班'},
  {left:'喜', right:'欢'},
];

// ══════════════════════════════════════════
// PHẦN 2 · NGHE — để trống, chờ audio + tài liệu gốc giáo trình HSK1 3.0
// ══════════════════════════════════════════
var listenData = [];

// ══════════════════════════════════════════
// PHẦN 3a · ĐIỀN TỪ (dựa theo bài tập tổng hợp thật trong sách)
// ══════════════════════════════════════════
var fillData = [
  {pre:'今天', blank:'6月22号', post:'。', hint:'(ngày tháng)', ans:'6月22号'},
  {pre:'杨同乐有一个', blank:'新', post:'电脑。', hint:'(mới)', ans:'新'},
  {pre:'王一雪：你会做这两个', blank:'菜', post:'吗？', hint:'(món ăn)', ans:'菜'},
  {pre:'你的电脑', blank:'真', post:'好看！', hint:'(thật, thực sự)', ans:'真'},
  {pre:'我也很', blank:'喜欢', post:'。', hint:'(thích)', ans:'喜欢'},
  {pre:'今天几号？今天9月8', blank:'号', post:'。', hint:'(mùng — lượng từ ngày)', ans:'号'},
  {pre:'你', blank:'会', post:'做饭吗？', hint:'(biết, có thể)', ans:'会'},
  {pre:'我会做面条儿、', blank:'饺子', post:'。', hint:'(sủi cảo)', ans:'饺子'},
];

// ══════════════════════════════════════════
// PHẦN 3b · SẮP XẾP
// ══════════════════════════════════════════
var sortData = [
  {words:['今天','几','号','？'], ans:'今天几号？', audio:'今天几号？'},
  {words:['今天','我','休息','。'], ans:'今天我休息。', audio:'今天我休息。'},
  {words:['你','会','做饭','吗','？'], ans:'你会做饭吗？', audio:'你会做饭吗？'},
  {words:['我','会','做','面条儿','。'], ans:'我会做面条儿。', audio:'我会做面条儿。'},
  {words:['这','是','你','的','新','电脑','吗','？'], ans:'这是你的新电脑吗？', audio:'这是你的新电脑吗？'},
  {words:['我','也','很','喜欢','它','。'], ans:'我也很喜欢它。', audio:'我也很喜欢它。'},
];

// ══════════════════════════════════════════
// PHẦN 3c · TRẮC NGHIỆM
// ══════════════════════════════════════════
var mcData = [
  {q:'Trật tự diễn đạt ngày tháng trong tiếng Trung là gì?', opts:['Năm→Tháng→Ngày→Thứ', 'Thứ→Ngày→Tháng→Năm', 'Ngày→Tháng→Năm→Thứ', 'Không có trật tự cố định'], ans:0},
  {q:'"今天9月8号" là loại câu gì?', opts:['Câu vị ngữ danh từ (không cần 是)', 'Câu chữ 是 bắt buộc', 'Câu nghi vấn', 'Câu mệnh lệnh'], ans:0},
  {q:'"会" dùng để diễn đạt điều gì?', opts:['Biết/có khả năng làm gì đó nhờ học tập', 'Sự sở hữu', 'Sự tồn tại', 'Sự phủ định'], ans:0},
  {q:'"你会做饭吗？" — "会" ở đây có thể được thay bằng cách phủ định nào?', opts:['不会', '没会', '不是会', '没有会'], ans:0},
  {q:'"星期日" và "星期天" có nghĩa gì?', opts:['Cả hai đều là Chủ nhật', 'Thứ 7 và Chủ nhật', 'Khác nghĩa hoàn toàn', 'Thứ 2 và Chủ nhật'], ans:0},
  {q:'"面条儿" và "饺子" đều là gì?', opts:['Món ăn (mì và sủi cảo)', 'Ngày trong tuần', 'Đồ vật', 'Số đếm'], ans:0},
  {q:'"这是你的新电脑吗？" — từ nào là định ngữ chỉ tính chất "mới"?', opts:['新', '电脑', '你的', '这'], ans:0},
  {q:'Số "2" đọc là "两" khi nào?', opts:['Khi đứng trước lượng từ', 'Khi làm số thứ tự', 'Luôn luôn đọc là 两', 'Không bao giờ dùng 两'], ans:0},
];

// ══════════════════════════════════════════
// PHẦN 4 · LUYỆN NÓI
// ══════════════════════════════════════════
var speakingData = {
  intro: 'Nhấn 🔊 nghe câu hỏi/tình huống, rồi tự ghi âm câu trả lời của bạn dựa theo nội dung 3 bài khoá.',
  questions: [
    {q_zh: '有人问你："今天几号？星期几？" 你怎么回答？', q_vn: 'Có người hỏi bạn: "Hôm nay ngày mấy? Thứ mấy?" Bạn trả lời thế nào?',
     hint: '今天……月……号，星期……。', sample: '今天9月8号，星期日。', sample_vn: 'Hôm nay là ngày 8 tháng 9, Chủ nhật.',
     note: 'Câu vị ngữ danh từ dùng để nói ngày tháng: Chủ ngữ + (thời gian) không cần động từ 是.'},
    {q_zh: '朋友问你："你会做饭吗？" 你怎么回答？', q_vn: 'Bạn của bạn hỏi: "Bạn có biết nấu ăn không?" Bạn trả lời thế nào?',
     hint: '我会/不会做……。', sample: '我会做面条儿，不会做饺子。', sample_vn: 'Tôi biết nấu mì, không biết làm sủi cảo.',
     note: '会 + động từ diễn đạt khả năng làm việc gì đó nhờ học tập.'},
    {q_zh: '朋友有一样新东西，你想夸奖一下，你会怎么说？', q_vn: 'Bạn của bạn có một món đồ mới, bạn muốn khen, bạn sẽ nói gì?',
     hint: '真好看！我也很喜欢它。', sample: '真好看！我也很喜欢它。', sample_vn: 'Đẹp thật đấy! Tôi cũng rất thích nó.',
     note: '真 + tính từ dùng để nhấn mạnh cảm xúc thật sự.'},
  ],
};

// ══════════════════════════════════════════
// LUYỆN DỊCH (Việt → Trung)
// ══════════════════════════════════════════
var translateData = [
  {vi:'Hôm nay ngày mấy? — Hôm nay là ngày 8 tháng 9, Chủ nhật.', zh:'今天几号？——今天9月8号，星期日。', py:'Jīntiān jǐ hào? — Jīntiān jiǔ yuè bā hào, Xīngqīrì.'},
  {vi:'Bạn có biết nấu ăn không? — Tôi biết, tôi biết nấu mì và sủi cảo.', zh:'你会做饭吗？——我会，我会做面条儿和饺子。', py:'Nǐ huì zuò fàn ma? — Wǒ huì, wǒ huì zuò miàntiáor hé jiǎozi.'},
  {vi:'Đây là máy tính mới của bạn à? — Đúng vậy, tôi rất thích nó.', zh:'这是你的新电脑吗？——是的，我很喜欢它。', py:'Zhè shì nǐ de xīn diànnǎo ma? — Shì de, wǒ hěn xǐhuan tā.'},
  {vi:'Hôm nay Chủ nhật, tôi được nghỉ, tôi cũng nấu ăn.', zh:'今天星期日，我休息，我也做饭。', py:'Jīntiān Xīngqīrì, wǒ xiūxi, wǒ yě zuò fàn.'},
];

// ══════════════════════════════════════════
// LUYỆN DỊCH (Trung → Việt) — nội dung KHÁC với chiều Việt→Trung ở trên
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:'Ngày mai là thứ mấy? — Ngày mai là thứ Hai, tôi phải đi làm.', zh:'明天星期几？——明天星期一，我要上班。', py:'Míngtiān xīngqī jǐ? — Míngtiān Xīngqīyī, wǒ yào shàngbān.'},
  {vi:'Tôi không biết nấu ăn, nhưng tôi rất thích ăn sủi cảo.', zh:'我不会做饭，但是我很喜欢吃饺子。', py:'Wǒ bú huì zuò fàn, dànshì wǒ hěn xǐhuan chī jiǎozi.'},
  {vi:'Máy tính mới của tôi thật đẹp, tôi rất thích nó.', zh:'我的新电脑真好看，我很喜欢它。', py:'Wǒ de xīn diànnǎo zhēn hǎokàn, wǒ hěn xǐhuan tā.'},
  {vi:'Hôm nay tôi tan làm rồi, ngày mai tôi được nghỉ.', zh:'今天我下班了，明天我休息。', py:'Jīntiān wǒ xiàbān le, míngtiān wǒ xiūxi.'},
];
