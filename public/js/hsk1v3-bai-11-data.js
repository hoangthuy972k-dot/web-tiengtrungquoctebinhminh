// ══════════════════════════════════════════
// DATA — HSK1 (3.0 Mới) Bài 11: 我读大学呢
// Nguồn: Giáo trình New HSK 1 (chuẩn 3.0) - Trung Việt, NXB Dân Trí
// ══════════════════════════════════════════
var vocabData = [
  {n:1,zh:'时候',py:'shíhou',pos:'Danh từ',vn:'lúc, khi',em:'⏳',lesson:1,
   ex_zh:'喂，李文，你什么时候能到饭店？',ex_py:'Wèi, Lǐ Wén, nǐ shénme shíhou néng dào fàndiàn?',ex_vn:'A lô, Lý Văn à, khi nào em có thể đến nhà hàng?',
   exList:[{zh:'喂，李文，你什么时候能到饭店？',py:'Wèi, Lǐ Wén, nǐ shénme shíhou néng dào fàndiàn?',vn:'A lô, Lý Văn à, khi nào em có thể đến nhà hàng?'}]},
  {n:2,zh:'饭店',py:'fàndiàn',pos:'Danh từ',vn:'nhà hàng, khách sạn',em:'🍽️',lesson:1,
   ex_zh:'你什么时候能到饭店？',ex_py:'Nǐ shénme shíhou néng dào fàndiàn?',ex_vn:'Khi nào em có thể đến nhà hàng?',
   exList:[{zh:'你什么时候能到饭店？',py:'Nǐ shénme shíhou néng dào fàndiàn?',vn:'Khi nào em có thể đến nhà hàng?'}]},
  {n:3,zh:'知道',py:'zhīdào',pos:'Động từ',vn:'biết, nhận ra',em:'💡',lesson:1,
   ex_zh:'还不知道，正在找呢。',ex_py:'Hái bù zhīdào, zhèngzài zhǎo ne.',ex_vn:'Cũng không biết ạ, em đang tìm đây.',
   exList:[{zh:'还不知道，正在找呢。',py:'Hái bù zhīdào, zhèngzài zhǎo ne.',vn:'Cũng không biết ạ, em đang tìm đây.'}]},
  {n:4,zh:'正在',py:'zhèngzài',pos:'Phó từ',vn:'đang (làm gì)',em:'⏱️',lesson:1,
   ex_zh:'还不知道，正在找呢。',ex_py:'Hái bù zhīdào, zhèngzài zhǎo ne.',ex_vn:'Cũng không biết ạ, em đang tìm đây.',
   exList:[{zh:'还不知道，正在找呢。',py:'Hái bù zhīdào, zhèngzài zhǎo ne.',vn:'Cũng không biết ạ, em đang tìm đây.'}]},
  {n:5,zh:'找',py:'zhǎo',pos:'Động từ',vn:'tìm, kiếm',em:'🔍',lesson:1,
   ex_zh:'还不知道，正在找呢。',ex_py:'Hái bù zhīdào, zhèngzài zhǎo ne.',ex_vn:'Cũng không biết ạ, em đang tìm đây.',
   exList:[{zh:'还不知道，正在找呢。',py:'Hái bù zhīdào, zhèngzài zhǎo ne.',vn:'Cũng không biết ạ, em đang tìm đây.'}],
   hanzi:[
     {c:'找',p:'zhǎo',type:'左右结构 · Trái-phải',st:7,ord:'扌(thủ) trái → 戈(qua) phải',rad:'扌 (thủ – tay)',mean:'tìm, kiếm',
      tip:'Bộ 扌(tay) → dùng tay lục lọi, TÌM KIẾM vật gì đó.',
      cf:'我 (wǒ – "tôi", cùng chứa 戈)',w:'找到 / 正在找'},
   ]},
  {n:6,zh:'开车',py:'kāichē',pos:'Động từ',vn:'lái xe (ô tô)',em:'🚗',lesson:1,
   ex_zh:'你开车没开车？',ex_py:'Nǐ kāichē méi kāichē?',ex_vn:'Em có lái xe không?',
   exList:[{zh:'你开车没开车？',py:'Nǐ kāichē méi kāichē?',vn:'Em có lái xe không?'}]},
  {n:7,zh:'车',py:'chē',pos:'Danh từ',vn:'xe',em:'🚙',lesson:1,
   ex_zh:'我没开车，坐车呢。',ex_py:'Wǒ méi kāichē, zuò chē ne.',ex_vn:'Em không lái xe, đang đi taxi đây.',
   exList:[{zh:'我没开车，坐车呢。',py:'Wǒ méi kāichē, zuò chē ne.',vn:'Em không lái xe, đang đi taxi đây.'}],
   hanzi:[
     {c:'车',p:'chē',type:'独体字 · Tượng hình',st:4,ord:'一→𠃌→丨',rad:'车 (xa – tự thành bộ)',mean:'xe',
      tip:'Hình bánh xe nhìn từ trên xuống → XE.',
      cf:'东 (dōng – "phía đông", hình dạng gần giống")',w:'开车 / 坐车'},
   ]},
  {n:8,zh:'在',py:'zài',pos:'Phó từ',vn:'đang',em:'⏳',lesson:2,
   ex_zh:'你还在读大学吗？',ex_py:'Nǐ hái zài dú dàxué ma?',ex_vn:'Em vẫn đang học đại học à?',
   exList:[{zh:'你还在读大学吗？',py:'Nǐ hái zài dú dàxué ma?',vn:'Em vẫn đang học đại học à?'}]},
  {n:9,zh:'读',py:'dú',pos:'Động từ',vn:'học, đọc',em:'📖',lesson:2,
   ex_zh:'你还在读大学吗？',ex_py:'Nǐ hái zài dú dàxué ma?',ex_vn:'Em vẫn đang học đại học à?',
   exList:[{zh:'你还在读大学吗？',py:'Nǐ hái zài dú dàxué ma?',vn:'Em vẫn đang học đại học à?'}],
   hanzi:[
     {c:'读',p:'dú',type:'左右结构 · Trái-phải',st:10,ord:'讠(ngôn) trái → 卖(biến thể) phải',rad:'讠 (ngôn – lời nói)',mean:'đọc, học',
      tip:'讠(lời nói) + 卖(phát ra, bán) → phát ra tiếng từ chữ viết = ĐỌC.',
      cf:'卖 (mài – "bán")',w:'读大学 / 读书'},
   ]},
  {n:10,zh:'大学',py:'dàxué',pos:'Danh từ',vn:'đại học',em:'🎓',lesson:2,
   ex_zh:'对，我读大学呢，还是大学生。',ex_py:'Duì, wǒ dú dàxué ne, hái shì dàxuéshēng.',ex_vn:'Đúng vậy, em đang học đại học, vẫn đang là sinh viên.',
   exList:[{zh:'对，我读大学呢，还是大学生。',py:'Duì, wǒ dú dàxué ne, hái shì dàxuéshēng.',vn:'Đúng vậy, em đang học đại học, vẫn đang là sinh viên.'}]},
  {n:11,zh:'大学生',py:'dàxuéshēng',pos:'Danh từ',vn:'sinh viên',em:'🧑‍🎓',lesson:2,
   ex_zh:'对，我读大学呢，还是大学生。',ex_py:'Duì, wǒ dú dàxué ne, hái shì dàxuéshēng.',ex_vn:'Đúng vậy, em đang học đại học, vẫn đang là sinh viên.',
   exList:[{zh:'对，我读大学呢，还是大学生。',py:'Duì, wǒ dú dàxué ne, hái shì dàxuéshēng.',vn:'Đúng vậy, em đang học đại học, vẫn đang là sinh viên.'}]},
  {n:12,zh:'学',py:'xué',pos:'Động từ',vn:'học',em:'📝',lesson:2,
   ex_zh:'非常忙，我学医，我们的课很多。',ex_py:'Fēicháng máng, wǒ xué yī, wǒmen de kè hěn duō.',ex_vn:'Bận lắm ạ, em học ngành y, chúng em có rất nhiều môn học.',
   exList:[{zh:'非常忙，我学医，我们的课很多。',py:'Fēicháng máng, wǒ xué yī, wǒmen de kè hěn duō.',vn:'Bận lắm ạ, em học ngành y, chúng em có rất nhiều môn học.'}]},
  {n:13,zh:'医',py:'yī',pos:'Danh từ',vn:'y, y học, y khoa',em:'⚕️',lesson:2,
   ex_zh:'非常忙，我学医，我们的课很多。',ex_py:'Fēicháng máng, wǒ xué yī, wǒmen de kè hěn duō.',ex_vn:'Bận lắm ạ, em học ngành y, chúng em có rất nhiều môn học.',
   exList:[{zh:'非常忙，我学医，我们的课很多。',py:'Fēicháng máng, wǒ xué yī, wǒmen de kè hěn duō.',vn:'Bận lắm ạ, em học ngành y, chúng em có rất nhiều môn học.'}]},
  {n:14,zh:'弟弟',py:'dìdi',pos:'Danh từ',vn:'em trai',em:'👦',lesson:3,
   ex_zh:'弟弟起床没起床呢？',ex_py:'Dìdi qǐchuáng méi qǐchuáng ne?',ex_vn:'Em trai đã thức dậy chưa?',
   exList:[{zh:'弟弟起床没起床呢？',py:'Dìdi qǐchuáng méi qǐchuáng ne?',vn:'Em trai đã thức dậy chưa?'}]},
  {n:15,zh:'起床',py:'qǐchuáng',pos:'Động từ',vn:'thức dậy, ngủ dậy, dậy',em:'🛏️',lesson:3,
   ex_zh:'弟弟起床没起床呢？',ex_py:'Dìdi qǐchuáng méi qǐchuáng ne?',ex_vn:'Em trai đã thức dậy chưa?',
   exList:[{zh:'弟弟起床没起床呢？',py:'Dìdi qǐchuáng méi qǐchuáng ne?',vn:'Em trai đã thức dậy chưa?'}]},
  {n:16,zh:'睡觉',py:'shuìjiào',pos:'Động từ',vn:'ngủ',em:'😴',lesson:3,
   ex_zh:'没起床呢，还在睡觉。',ex_py:'Méi qǐchuáng ne, hái zài shuìjiào.',ex_vn:'Chưa thức dậy ạ, em vẫn còn đang ngủ.',
   exList:[{zh:'没起床呢，还在睡觉。',py:'Méi qǐchuáng ne, hái zài shuìjiào.',vn:'Chưa thức dậy ạ, em vẫn còn đang ngủ.'}],
   hanzi:[
     {c:'睡',p:'shuì',type:'左右结构 · Trái-phải',st:13,ord:'目(mục) trái → 垂(thùy) phải',rad:'目 (mục – mắt)',mean:'ngủ',
      tip:'目(mắt) + 垂(rủ xuống) → mắt rủ xuống khép lại = NGỦ.',
      cf:'垂 (chuí – "rủ xuống")',w:'睡觉'},
   ]},
  {n:17,zh:'睡',py:'shuì',pos:'Động từ',vn:'ngủ',em:'💤',lesson:3,
   ex_zh:'还睡呢？他今天去不去那里？',ex_py:'Hái shuì ne? Tā jīntiān qù bu qù nàlǐ?',ex_vn:'Vẫn còn ngủ à? Hôm nay em có đi đến đó không?',
   exList:[{zh:'还睡呢？他今天去不去那里？',py:'Hái shuì ne? Tā jīntiān qù bu qù nàlǐ?',vn:'Vẫn còn ngủ à? Hôm nay em có đi đến đó không?'}]},
  {n:18,zh:'那里',py:'nàlǐ',pos:'Đại từ',vn:'ở kia, chỗ đó',em:'👉',lesson:3,
   ex_zh:'他今天去不去那里？',ex_py:'Tā jīntiān qù bu qù nàlǐ?',ex_vn:'Hôm nay em có đi đến đó không?',
   exList:[{zh:'他今天去不去那里？',py:'Tā jīntiān qù bu qù nàlǐ?',vn:'Hôm nay em có đi đến đó không?'}]},
  {n:19,zh:'哪里',py:'nǎlǐ',pos:'Đại từ',vn:'đâu, chỗ nào, nơi nào',em:'❓',lesson:3,
   ex_zh:'去哪里？',ex_py:'Qù nǎlǐ?',ex_vn:'Đi đâu ạ?',
   exList:[{zh:'去哪里？',py:'Qù nǎlǐ?',vn:'Đi đâu ạ?'}]},
  {n:20,zh:'昨天',py:'zuótiān',pos:'Danh từ',vn:'hôm qua',em:'📅',lesson:3,
   ex_zh:'我昨天问他，他对我说，他不去。',ex_py:'Wǒ zuótiān wèn tā, tā duì wǒ shuō, tā bú qù.',ex_vn:'Hôm qua con hỏi em rồi, em nói với con là em không đi.',
   exList:[{zh:'我昨天问他，他对我说，他不去。',py:'Wǒ zuótiān wèn tā, tā duì wǒ shuō, tā bú qù.',vn:'Hôm qua con hỏi em rồi, em nói với con là em không đi.'}]},
  {n:21,zh:'问',py:'wèn',pos:'Động từ',vn:'hỏi',em:'❔',lesson:3,
   ex_zh:'我昨天问他，他对我说，他不去。',ex_py:'Wǒ zuótiān wèn tā, tā duì wǒ shuō, tā bú qù.',ex_vn:'Hôm qua con hỏi em rồi, em nói với con là em không đi.',
   exList:[{zh:'我昨天问他，他对我说，他不去。',py:'Wǒ zuótiān wèn tā, tā duì wǒ shuō, tā bú qù.',vn:'Hôm qua con hỏi em rồi, em nói với con là em không đi.'}],
   hanzi:[
     {c:'问',p:'wèn',type:'半包围结构 · Bán bao vây',st:6,ord:'门(môn) ngoài → 口(khẩu) trong',rad:'门 (môn – cửa)',mean:'hỏi',
      tip:'门(cửa) + 口(miệng) → đứng trước cửa cất tiếng HỎI.',
      cf:'间 (jiān – "khoảng giữa")',w:'我问他 / 请问'},
   ]},
  {n:22,zh:'对',py:'duì',pos:'Giới từ',vn:'với, đối với',em:'↔️',lesson:3,
   ex_zh:'他对我说，他不去。',ex_py:'Tā duì wǒ shuō, tā bú qù.',ex_vn:'Em nói với con là em không đi.',
   exList:[{zh:'他对我说，他不去。',py:'Tā duì wǒ shuō, tā bú qù.',vn:'Em nói với con là em không đi.'}]},
  {n:23,zh:'说',py:'shuō',pos:'Động từ',vn:'nói',em:'💬',lesson:3,
   ex_zh:'他对我说，他不去。',ex_py:'Tā duì wǒ shuō, tā bú qù.',ex_vn:'Em nói với con là em không đi.',
   exList:[{zh:'他对我说，他不去。',py:'Tā duì wǒ shuō, tā bú qù.',vn:'Em nói với con là em không đi.'}],
   hanzi:[
     {c:'说',p:'shuō',type:'左右结构 · Trái-phải',st:9,ord:'讠(ngôn) trái → 兑(đoài) phải',rad:'讠 (ngôn – lời nói)',mean:'nói',
      tip:'Bộ 讠(lời nói) → hành động dùng miệng phát ra lời = NÓI.',
      cf:'脱 (tuō – "cởi", bộ 月)',w:'他对我说 / 说汉语'},
   ]},
  {n:24,zh:'要',py:'yào',pos:'Động từ năng nguyện',vn:'cần, muốn, phải',em:'🙋',lesson:3,
   ex_zh:'他今天要和小朋友玩。',ex_py:'Tā jīntiān yào hé xiǎopéngyǒu wán.',ex_vn:'Hôm nay em muốn chơi với các bạn.',
   exList:[{zh:'他今天要和小朋友玩。',py:'Tā jīntiān yào hé xiǎopéngyǒu wán.',vn:'Hôm nay em muốn chơi với các bạn.'}],
   hanzi:[
     {c:'要',p:'yào',type:'上下结构 · Trên-dưới',st:9,ord:'覀(biến thể) → 女',rad:'西 (tây – biến thể)',mean:'muốn, cần, sẽ',
      tip:'Chữ cổ vốn là hình dáng cái lưng người phụ nữ chống nạnh, nay dùng làm trợ động từ MUỐN, CẦN.',
      cf:'腰 (yāo – "thắt lưng")',w:'要去 / 要不要'},
   ]},
  {n:25,zh:'小朋友',py:'xiǎopéngyǒu',pos:'Danh từ',vn:'bạn nhỏ',em:'🧒',lesson:3,
   ex_zh:'他今天要和小朋友玩。',ex_py:'Tā jīntiān yào hé xiǎopéngyǒu wán.',ex_vn:'Hôm nay em muốn chơi với các bạn.',
   exList:[{zh:'他今天要和小朋友玩。',py:'Tā jīntiān yào hé xiǎopéngyǒu wán.',vn:'Hôm nay em muốn chơi với các bạn.'}]},
];

var dialogData = [
  {scene:'王一飞给正在找饭店的李文打电话 · Tìm nhà hàng',
   preQuiz:[
     {q:'李文知道饭店在哪儿吗？',opts:['知道','还不知道','已经到了'],ans:1},
     {q:'李文开车了吗？',opts:['开车了','没开车，坐车','走路去的'],ans:1},
   ],
   lines:[
     {sp:0,zh:'喂，李文，你什么时候能到饭店？',py:'Wèi, Lǐ Wén, nǐ shénme shíhou néng dào fàndiàn?',vn:'A lô, Lý Văn à, khi nào em có thể đến nhà hàng?'},
     {sp:1,zh:'还不知道，正在找呢。它是不是在超市后边？',py:'Hái bù zhīdào, zhèngzài zhǎo ne. Tā shì bu shì zài chāoshì hòubian?',vn:'Cũng không biết ạ, em đang tìm đây. Nó có phải ở phía sau siêu thị không?'},
     {sp:0,zh:'是的。你开车没开车？',py:'Shì de. Nǐ kāichē méi kāichē?',vn:'Đúng rồi. Em có lái xe không?'},
     {sp:1,zh:'我没开车，坐车呢。',py:'Wǒ méi kāichē, zuò chē ne.',vn:'Em không lái xe, đang đi taxi đây.'},
   ]},
  {scene:'王一飞和李文在饭店见面后聊天儿 · Đang học đại học',
   preQuiz:[
     {q:'李文（　）读大学。',opts:['不','没','在'],ans:2},
     {q:'李文很忙，有很多（　）。',opts:['课','书','椅子'],ans:0},
   ],
   lines:[
     {sp:0,zh:'你还在读大学吗？',py:'Nǐ hái zài dú dàxué ma?',vn:'Em vẫn đang học đại học à?'},
     {sp:1,zh:'对，我读大学呢，还是大学生。',py:'Duì, wǒ dú dàxué ne, hái shì dàxuéshēng.',vn:'Đúng vậy, em đang học đại học, vẫn đang là sinh viên.'},
     {sp:0,zh:'你们学习忙不忙？',py:'Nǐmen xuéxí máng bu máng?',vn:'Các em học có bận không?'},
     {sp:1,zh:'非常忙，我学医，我们的课很多。',py:'Fēicháng máng, wǒ xué yī, wǒmen de kè hěn duō.',vn:'Bận lắm ạ, em học ngành y, chúng em có rất nhiều môn học.'},
   ]},
  {scene:'刘明出门前和女儿刘小雪对话 · Em trai định làm gì',
   preQuiz:[
     {q:'弟弟正在（　）。',opts:['玩','起床','睡觉'],ans:2},
     {q:'爸爸问姐姐，弟弟（　）超市。',opts:['在','去','去不去'],ans:2},
   ],
   lines:[
     {sp:0,zh:'弟弟起床没起床呢？',py:'Dìdi qǐchuáng méi qǐchuáng ne?',vn:'Em trai đã thức dậy chưa?'},
     {sp:1,zh:'没起床呢，还在睡觉。',py:'Méi qǐchuáng ne, hái zài shuìjiào.',vn:'Chưa thức dậy ạ, em vẫn còn đang ngủ.'},
     {sp:0,zh:'还睡呢？他今天去不去那里？',py:'Hái shuì ne? Tā jīntiān qù bu qù nàlǐ?',vn:'Vẫn còn ngủ à? Hôm nay em có đi đến đó không?'},
     {sp:1,zh:'去哪里？',py:'Qù nǎlǐ?',vn:'Đi đâu ạ?'},
     {sp:0,zh:'去超市。',py:'Qù chāoshì.',vn:'Đi siêu thị.'},
     {sp:1,zh:'我昨天问他，他对我说，他不去，他今天要和小朋友玩。',py:'Wǒ zuótiān wèn tā, tā duì wǒ shuō, tā bú qù, tā jīntiān yào hé xiǎopéngyǒu wán.',vn:'Hôm qua con hỏi em rồi, em nói với con là em không đi, hôm nay em muốn chơi với các bạn.'},
   ]},
];

// ══════════════════════════════════════════
// PHẦN 1 · GHÉP TỪ (Collocation)
// ══════════════════════════════════════════
var matchData = [
  {left:'开', right:'车'},
  {left:'大学', right:'生'},
  {left:'起', right:'床'},
  {left:'睡', right:'觉'},
  {left:'小朋', right:'友'},
  {left:'昨', right:'天'},
];

// ══════════════════════════════════════════
// PHẦN 2 · NGHE — để trống, chờ tài liệu gốc giáo trình HSK1 3.0
// ══════════════════════════════════════════
var listenData = [];

// ══════════════════════════════════════════
// PHẦN 3a · ĐIỀN TỪ
// ══════════════════════════════════════════
var fillData = [
  {pre:'你什么', blank:'时候', post:'能到饭店？', hint:'(lúc, khi)', ans:'时候'},
  {pre:'还不知道，', blank:'正在找', post:'呢。', hint:'(đang tìm)', ans:'正在找'},
  {pre:'你', blank:'开车没开车', post:'？', hint:'(có lái xe không)', ans:'开车没开车'},
  {pre:'你还', blank:'在读大学', post:'吗？', hint:'(đang học đại học)', ans:'在读大学'},
  {pre:'非常忙，我学医，我们的', blank:'课很多', post:'。', hint:'(nhiều môn học)', ans:'课很多'},
  {pre:'', blank:'弟弟起床没起床', post:'呢？', hint:'(em trai đã dậy chưa)', ans:'弟弟起床没起床'},
  {pre:'他今天', blank:'去不去', post:'那里？', hint:'(có đi không)', ans:'去不去'},
  {pre:'他今天', blank:'要和小朋友玩', post:'。', hint:'(muốn chơi với các bạn)', ans:'要和小朋友玩'},
];

// ══════════════════════════════════════════
// PHẦN 3b · SẮP XẾP
// ══════════════════════════════════════════
var sortData = [
  {words:['你','什么','时候','能','到','饭店','？'], ans:'你什么时候能到饭店？', audio:'你什么时候能到饭店？'},
  {words:['我','没','开车','，','坐车','呢','。'], ans:'我没开车，坐车呢。', audio:'我没开车，坐车呢。'},
  {words:['你','还','在','读','大学','吗','？'], ans:'你还在读大学吗？', audio:'你还在读大学吗？'},
  {words:['我们','的','课','很多','。'], ans:'我们的课很多。', audio:'我们的课很多。'},
  {words:['弟弟','起床','没','起床','呢','？'], ans:'弟弟起床没起床呢？', audio:'弟弟起床没起床呢？'},
  {words:['他','今天','要','和','小朋友','玩','。'], ans:'他今天要和小朋友玩。', audio:'他今天要和小朋友玩。'},
];

// ══════════════════════════════════════════
// PHẦN 3c · TRẮC NGHIỆM
// ══════════════════════════════════════════
var mcData = [
  {q:'"你什么时候能到饭店？" nghĩa là gì?', opts:['Khi nào bạn có thể đến nhà hàng?', 'Nhà hàng ở đâu?', 'Bạn có đến nhà hàng không?', 'Nhà hàng có ngon không?'], ans:0},
  {q:'"你开车没开车？" là dạng câu hỏi gì?', opts:['câu hỏi chính phản (正反问)', 'câu hỏi dùng 吗', 'câu hỏi dùng từ để hỏi', 'câu cảm thán'], ans:0},
  {q:'"你还在读大学吗？" nghĩa là gì?', opts:['Bạn vẫn đang học đại học à?', 'Bạn đã tốt nghiệp đại học chưa?', 'Bạn có muốn học đại học không?', 'Bạn học đại học nào?'], ans:0},
  {q:'Phó từ "正在" dùng để biểu thị điều gì?', opts:['hành động đang diễn ra', 'hành động đã hoàn thành', 'hành động sắp xảy ra', 'hành động phủ định'], ans:0},
  {q:'"弟弟起床没起床呢？" nghĩa là gì?', opts:['Em trai đã dậy chưa?', 'Em trai đi đâu rồi?', 'Em trai đang ăn gì?', 'Em trai bao nhiêu tuổi?'], ans:0},
  {q:'"他今天要和小朋友玩。" nghĩa là gì?', opts:['Hôm nay cậu ấy muốn chơi với các bạn.', 'Hôm nay cậu ấy phải đi học.', 'Hôm nay cậu ấy không muốn chơi.', 'Hôm nay cậu ấy đi làm.'], ans:0},
  {q:'Động từ năng nguyện "要" trong bài dùng để biểu thị điều gì?', opts:['mong muốn, dự định làm gì', 'khả năng làm gì', 'sự cho phép', 'sự phủ định'], ans:0},
  {q:'Câu hỏi chính phản với động từ dùng phó từ phủ định nào?', opts:['不/没', '不 (chỉ dùng 不)', '没 (chỉ dùng 没)', '别'], ans:0},
];

// ══════════════════════════════════════════
// PHẦN 4 · LUYỆN NÓI
// ══════════════════════════════════════════
var speakingData = {
  intro: 'Nhấn 🔊 nghe câu hỏi/tình huống, rồi tự ghi âm câu trả lời của bạn dựa theo nội dung 3 bài khoá.',
  questions: [
    {q_zh: '有人问你："你在做什么呢？" 你怎么回答？', q_vn: 'Có người hỏi bạn: "Bạn đang làm gì đấy?" Bạn trả lời thế nào?',
     hint: '我正在……呢。', sample: '我正在找饭店呢。', sample_vn: 'Tôi đang tìm nhà hàng đây.',
     note: 'Cấu trúc "正在 + động từ + 呢" dùng để nói về hành động đang diễn ra.'},
    {q_zh: '有人问你："你还在读大学吗？" 你怎么回答？', q_vn: 'Có người hỏi bạn: "Bạn vẫn đang học đại học à?" Bạn trả lời thế nào?',
     hint: '对，我……', sample: '对，我读大学呢，还是大学生。', sample_vn: 'Đúng vậy, tôi đang học đại học, vẫn đang là sinh viên.',
     note: 'Có thể trả lời khẳng định bằng "对" rồi nhắc lại nội dung câu hỏi.'},
    {q_zh: '朋友问你今天要做什么，你怎么回答？', q_vn: 'Bạn của bạn hỏi hôm nay bạn định làm gì, bạn trả lời thế nào?',
     hint: '我今天要……', sample: '我今天要和小朋友玩。', sample_vn: 'Hôm nay tôi muốn chơi với các bạn.',
     note: 'Động từ năng nguyện "要" đặt trước động từ để nói về dự định.'},
  ],
};

// ══════════════════════════════════════════
// LUYỆN DỊCH (Việt → Trung)
// ══════════════════════════════════════════
var translateData = [
  {vi:'Khi nào bạn có thể đến nhà hàng?', zh:'你什么时候能到饭店？', py:'Nǐ shénme shíhou néng dào fàndiàn?'},
  {vi:'Tôi không lái xe, đang đi taxi đây.', zh:'我没开车，坐车呢。', py:'Wǒ méi kāichē, zuò chē ne.'},
  {vi:'Bạn vẫn đang học đại học à?', zh:'你还在读大学吗？', py:'Nǐ hái zài dú dàxué ma?'},
  {vi:'Hôm nay cậu ấy muốn chơi với các bạn.', zh:'他今天要和小朋友玩。', py:'Tā jīntiān yào hé xiǎopéngyǒu wán.'},
];

// ══════════════════════════════════════════
// LUYỆN DỊCH (Trung → Việt) — nội dung KHÁC với chiều Việt→Trung ở trên
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:'Các bạn học có bận không?', zh:'你们学习忙不忙？', py:'Nǐmen xuéxí máng bu máng?'},
  {vi:'Em trai đã dậy chưa?', zh:'弟弟起床没起床呢？', py:'Dìdi qǐchuáng méi qǐchuáng ne?'},
  {vi:'Đi đâu ạ?', zh:'去哪里？', py:'Qù nǎlǐ?'},
  {vi:'Hôm qua tôi hỏi anh ấy.', zh:'我昨天问他。', py:'Wǒ zuótiān wèn tā.'},
];
