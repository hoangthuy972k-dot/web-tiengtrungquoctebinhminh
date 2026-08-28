// ══════════════════════════════════════════
// DATA — HSK1 (3.0 Mới) Bài 7: 我晚上六点半下班
// Nguồn: Giáo trình New HSK 1 (chuẩn 3.0) - Trung Việt, NXB Dân Trí
// ══════════════════════════════════════════
var vocabData = [
  {n:1,zh:'现在',py:'xiànzài',pos:'Đại từ',vn:'bây giờ, hiện tại',em:'⏰',lesson:1,
   ex_zh:'现在几点？',ex_py:'Xiànzài jǐ diǎn?',ex_vn:'Bây giờ mấy giờ rồi?',
   exList:[{zh:'现在几点？',py:'Xiànzài jǐ diǎn?',vn:'Bây giờ mấy giờ rồi?'}]},
  {n:2,zh:'点',py:'diǎn',pos:'Lượng từ',vn:'giờ',em:'🕐',lesson:1,
   ex_zh:'早上八点四十。',ex_py:'Zǎoshang bā diǎn sìshí.',ex_vn:'8 giờ 40 sáng.',
   exList:[{zh:'早上八点四十。',py:'Zǎoshang bā diǎn sìshí.',vn:'8 giờ 40 sáng.'}]},
  {n:3,zh:'早上',py:'zǎoshang',pos:'Đại từ',vn:'buổi sáng, sáng sớm',em:'🌅',lesson:1,
   ex_zh:'早上八点四十。',ex_py:'Zǎoshang bā diǎn sìshí.',ex_vn:'8 giờ 40 sáng.',
   exList:[{zh:'早上八点四十。',py:'Zǎoshang bā diǎn sìshí.',vn:'8 giờ 40 sáng.'}]},
  {n:4,zh:'上午',py:'shàngwǔ',pos:'Đại từ',vn:'buổi sáng',em:'🌤️',lesson:1,
   ex_zh:'我上午十点十分有课。',ex_py:'Wǒ shàngwǔ shí diǎn shí fēn yǒu kè.',ex_vn:'Sáng nay mình có tiết học lúc 10 giờ 10 phút.',
   exList:[{zh:'我上午十点十分有课。',py:'Wǒ shàngwǔ shí diǎn shí fēn yǒu kè.',vn:'Sáng nay mình có tiết học lúc 10 giờ 10 phút.'}]},
  {n:5,zh:'分',py:'fēn',pos:'Lượng từ',vn:'phút',em:'⏱️',lesson:1,
   ex_zh:'我上午十点十分有课。',ex_py:'Wǒ shàngwǔ shí diǎn shí fēn yǒu kè.',ex_vn:'Sáng nay mình có tiết học lúc 10 giờ 10 phút.',
   exList:[{zh:'我上午十点十分有课。',py:'Wǒ shàngwǔ shí diǎn shí fēn yǒu kè.',vn:'Sáng nay mình có tiết học lúc 10 giờ 10 phút.'}]},
  {n:6,zh:'课',py:'kè',pos:'Danh từ',vn:'tiết học, giờ học',em:'📖',lesson:1,
   ex_zh:'我上午十点十分有课。',ex_py:'Wǒ shàngwǔ shí diǎn shí fēn yǒu kè.',ex_vn:'Sáng nay mình có tiết học lúc 10 giờ 10 phút.',
   exList:[{zh:'我上午十点十分有课。',py:'Wǒ shàngwǔ shí diǎn shí fēn yǒu kè.',vn:'Sáng nay mình có tiết học lúc 10 giờ 10 phút.'}]},
  {n:7,zh:'下午',py:'xiàwǔ',pos:'Danh từ',vn:'buổi chiều',em:'🌇',lesson:1,
   ex_zh:'我们下午两点见吧。',ex_py:'Wǒmen xiàwǔ liǎng diǎn jiàn ba.',ex_vn:'Chúng ta hẹn gặp lúc 2 giờ chiều nhé.',
   exList:[
     {zh:'我们下午两点见吧。',py:'Wǒmen xiàwǔ liǎng diǎn jiàn ba.',vn:'Chúng ta hẹn gặp lúc 2 giờ chiều nhé.'},
     {zh:'下午我想去电影院看电影。',py:'Xiàwǔ wǒ xiǎng qù diànyǐngyuàn kàn diànyǐng.',vn:'Chiều nay mình muốn đi rạp xem phim.'},
   ]},
  {n:8,zh:'见',py:'jiàn',pos:'Động từ',vn:'gặp, gặp mặt',em:'🤝',lesson:1,
   ex_zh:'我们下午两点见吧。',ex_py:'Wǒmen xiàwǔ liǎng diǎn jiàn ba.',ex_vn:'Chúng ta hẹn gặp lúc 2 giờ chiều nhé.',
   exList:[{zh:'我们下午两点见吧。',py:'Wǒmen xiàwǔ liǎng diǎn jiàn ba.',vn:'Chúng ta hẹn gặp lúc 2 giờ chiều nhé.'}],
   hanzi:[
     {c:'见',p:'jiàn',type:'独体字 · Chữ đơn',st:4,ord:'目(mục) trên → 儿(nhân) dưới',rad:'见 (kiến – nhìn thấy)',mean:'gặp, thấy',
      tip:'Hình chữ giống con mắt 目 trên đôi chân 儿 → dùng MẮT để trông thấy, GẶP ai đó.',
      cf:'贝 (bèi – "vỏ sò", gần giống về nét nhưng nghĩa khác hẳn)',w:'见面 / 再见'},
   ]},
  {n:9,zh:'吧',py:'ba',pos:'Trợ từ',vn:'nhé (dùng cuối câu để đề nghị, gợi ý)',em:'💬',lesson:1,
   ex_zh:'我们下午两点见吧。',ex_py:'Wǒmen xiàwǔ liǎng diǎn jiàn ba.',ex_vn:'Chúng ta hẹn gặp lúc 2 giờ chiều nhé.',
   exList:[{zh:'我们下午两点见吧。',py:'Wǒmen xiàwǔ liǎng diǎn jiàn ba.',vn:'Chúng ta hẹn gặp lúc 2 giờ chiều nhé.'}]},
  {n:10,zh:'电影院',py:'diànyǐngyuàn',pos:'Danh từ',vn:'rạp chiếu phim',em:'🎬',lesson:2,
   ex_zh:'下午我想去电影院看电影。',ex_py:'Xiàwǔ wǒ xiǎng qù diànyǐngyuàn kàn diànyǐng.',ex_vn:'Chiều nay mình muốn đi rạp xem phim.',
   exList:[{zh:'下午我想去电影院看电影。',py:'Xiàwǔ wǒ xiǎng qù diànyǐngyuàn kàn diànyǐng.',vn:'Chiều nay mình muốn đi rạp xem phim.'}]},
  {n:11,zh:'看',py:'kàn',pos:'Động từ',vn:'xem, nhìn, đọc',em:'👀',lesson:2,
   ex_zh:'下午我想去电影院看电影。',ex_py:'Xiàwǔ wǒ xiǎng qù diànyǐngyuàn kàn diànyǐng.',ex_vn:'Chiều nay mình muốn đi rạp xem phim.',
   exList:[{zh:'下午我想去电影院看电影。',py:'Xiàwǔ wǒ xiǎng qù diànyǐngyuàn kàn diànyǐng.',vn:'Chiều nay mình muốn đi rạp xem phim.'}]},
  {n:12,zh:'电影',py:'diànyǐng',pos:'Danh từ',vn:'phim, điện ảnh',em:'🎞️',lesson:2,
   ex_zh:'下午我想去电影院看电影。',ex_py:'Xiàwǔ wǒ xiǎng qù diànyǐngyuàn kàn diànyǐng.',ex_vn:'Chiều nay mình muốn đi rạp xem phim.',
   exList:[{zh:'下午我想去电影院看电影。',py:'Xiàwǔ wǒ xiǎng qù diànyǐngyuàn kàn diànyǐng.',vn:'Chiều nay mình muốn đi rạp xem phim.'}]},
  {n:13,zh:'事',py:'shì',pos:'Danh từ',vn:'việc, sự việc',em:'📋',lesson:2,
   ex_zh:'我不想去，下午还有事。',ex_py:'Wǒ bù xiǎng qù, xiàwǔ hái yǒu shì.',ex_vn:'Mình không muốn đi, chiều nay còn có việc.',
   exList:[{zh:'我不想去，下午还有事。',py:'Wǒ bù xiǎng qù, xiàwǔ hái yǒu shì.',vn:'Mình không muốn đi, chiều nay còn có việc.'}]},
  {n:14,zh:'上课',py:'shàngkè',pos:'Động từ',vn:'lên lớp, đi học',em:'🏫',lesson:2,
   ex_zh:'我明天下午两点还上课呢。',ex_py:'Wǒ míngtiān xiàwǔ liǎng diǎn hái shàngkè ne.',ex_vn:'Chiều mai mình vẫn còn tiết học lúc 2 giờ.',
   exList:[{zh:'我明天下午两点还上课呢。',py:'Wǒ míngtiān xiàwǔ liǎng diǎn hái shàngkè ne.',vn:'Chiều mai mình vẫn còn tiết học lúc 2 giờ.'}]},
  {n:15,zh:'呢',py:'ne',pos:'Trợ từ',vn:'(đặt cuối câu, nhấn mạnh/duy trì ngữ khí trần thuật hoặc câu hỏi)',em:'❕',lesson:2,
   ex_zh:'我明天下午两点还上课呢。',ex_py:'Wǒ míngtiān xiàwǔ liǎng diǎn hái shàngkè ne.',ex_vn:'Chiều mai mình vẫn còn tiết học lúc 2 giờ.',
   exList:[{zh:'我明天下午两点还上课呢。',py:'Wǒ míngtiān xiàwǔ liǎng diǎn hái shàngkè ne.',vn:'Chiều mai mình vẫn còn tiết học lúc 2 giờ.'}]},
  {n:16,zh:'半',py:'bàn',pos:'Số từ',vn:'một nửa, rưỡi',em:'🕧',lesson:2,
   ex_zh:'四点半下课。',ex_py:'Sì diǎn bàn xiàkè.',ex_vn:'4 giờ rưỡi tan học.',
   exList:[
     {zh:'四点半下课。',py:'Sì diǎn bàn xiàkè.',vn:'4 giờ rưỡi tan học.'},
     {zh:'我晚上六点半下班。',py:'Wǒ wǎnshang liù diǎn bàn xiàbān.',vn:'Tối nay mình 6 giờ rưỡi tan làm.'},
   ]},
  {n:17,zh:'下课',py:'xiàkè',pos:'Động từ',vn:'tan học',em:'🔔',lesson:2,
   ex_zh:'四点半下课。',ex_py:'Sì diǎn bàn xiàkè.',ex_vn:'4 giờ rưỡi tan học.',
   exList:[{zh:'四点半下课。',py:'Sì diǎn bàn xiàkè.',vn:'4 giờ rưỡi tan học.'}]},
  {n:18,zh:'在',py:'zài',pos:'Động từ',vn:'ở, tại',em:'📍',lesson:3,
   ex_zh:'我在家里呢。',ex_py:'Wǒ zài jiā li ne.',ex_vn:'Mình đang ở nhà.',
   exList:[{zh:'我在家里呢。',py:'Wǒ zài jiā li ne.',vn:'Mình đang ở nhà.'}]},
  {n:19,zh:'家',py:'jiā',pos:'Danh từ',vn:'nhà',em:'🏠',lesson:3,
   ex_zh:'我在家里呢。',ex_py:'Wǒ zài jiā li ne.',ex_vn:'Mình đang ở nhà.',
   exList:[{zh:'我在家里呢。',py:'Wǒ zài jiā li ne.',vn:'Mình đang ở nhà.'}],
   hanzi:[
     {c:'家',p:'jiā',type:'上下结构 · Trên-dưới',st:10,ord:'宀(miên) trên → 豕(thỉ) dưới',rad:'宀 (miên – mái nhà)',mean:'nhà',
      tip:'宀(mái nhà) + 豕(con lợn) → thời xưa nuôi lợn dưới mái nhà, tượng trưng cho một GIA ĐÌNH, một NHÀ.',
      cf:'豪 (háo – "hào phóng", cũng có 豕")',w:'我家 / 在家'},
   ]},
  {n:20,zh:'里',py:'li/lǐ',pos:'Danh từ',vn:'trong, bên trong',em:'📦',lesson:3,
   ex_zh:'我在家里呢。',ex_py:'Wǒ zài jiā li ne.',ex_vn:'Mình đang ở nhà.',
   exList:[{zh:'我在家里呢。',py:'Wǒ zài jiā li ne.',vn:'Mình đang ở nhà.'}]},
  {n:21,zh:'晚上',py:'wǎnshang',pos:'Danh từ',vn:'buổi tối',em:'🌙',lesson:3,
   ex_zh:'我晚上六点半下班。',ex_py:'Wǒ wǎnshang liù diǎn bàn xiàbān.',ex_vn:'Tối nay mình 6 giờ rưỡi tan làm.',
   exList:[{zh:'我晚上六点半下班。',py:'Wǒ wǎnshang liù diǎn bàn xiàbān.',vn:'Tối nay mình 6 giờ rưỡi tan làm.'}]},
  {n:22,zh:'医院',py:'yīyuàn',pos:'Danh từ',vn:'bệnh viện',em:'🏥',lesson:3,
   ex_zh:'我八点去医院上班。',ex_py:'Wǒ bā diǎn qù yīyuàn shàngbān.',ex_vn:'Mình 8 giờ đến bệnh viện làm việc.',
   exList:[{zh:'我八点去医院上班。',py:'Wǒ bā diǎn qù yīyuàn shàngbān.',vn:'Mình 8 giờ đến bệnh viện làm việc.'}]},
  {n:23,zh:'上班',py:'shàngbān',pos:'Động từ',vn:'đi làm, vào ca',em:'💼',lesson:3,
   ex_zh:'我八点去医院上班。',ex_py:'Wǒ bā diǎn qù yīyuàn shàngbān.',ex_vn:'Mình 8 giờ đến bệnh viện làm việc.',
   exList:[
     {zh:'我八点去医院上班。',py:'Wǒ bā diǎn qù yīyuàn shàngbān.',vn:'Mình 8 giờ đến bệnh viện làm việc.'},
     {zh:'我晚上六点半下班。',py:'Wǒ wǎnshang liù diǎn bàn xiàbān.',vn:'Tối nay mình 6 giờ rưỡi tan làm.'},
   ]},
  {n:24,zh:'店',py:'diàn',pos:'Danh từ',vn:'cửa hàng, cửa tiệm',em:'🏪',lesson:3,
   ex_zh:'你去店里买些菜吧。',ex_py:'Nǐ qù diàn li mǎi xiē cài ba.',ex_vn:'Bạn ra cửa hàng mua ít thức ăn nhé.',
   exList:[{zh:'你去店里买些菜吧。',py:'Nǐ qù diàn li mǎi xiē cài ba.',vn:'Bạn ra cửa hàng mua ít thức ăn nhé.'}]},
  {n:25,zh:'菜',py:'cài',pos:'Danh từ',vn:'thức ăn, món ăn, rau',em:'🥬',lesson:3,
   ex_zh:'你去店里买些菜吧。',ex_py:'Nǐ qù diàn li mǎi xiē cài ba.',ex_vn:'Bạn ra cửa hàng mua ít thức ăn nhé.',
   exList:[{zh:'你去店里买些菜吧。',py:'Nǐ qù diàn li mǎi xiē cài ba.',vn:'Bạn ra cửa hàng mua ít thức ăn nhé.'}]},
  {n:26,zh:'分钟',py:'fēnzhōng',pos:'Lượng từ',vn:'phút',em:'⏲️',lesson:3,
   ex_zh:'我十分钟后去。',ex_py:'Wǒ shí fēnzhōng hòu qù.',ex_vn:'10 phút nữa mình đi.',
   exList:[{zh:'我十分钟后去。',py:'Wǒ shí fēnzhōng hòu qù.',vn:'10 phút nữa mình đi.'}]},
  {n:27,zh:'后',py:'hòu',pos:'Danh từ',vn:'sau, sau đó',em:'⏭️',lesson:3,
   ex_zh:'我十分钟后去。',ex_py:'Wǒ shí fēnzhōng hòu qù.',ex_vn:'10 phút nữa mình đi.',
   exList:[{zh:'我十分钟后去。',py:'Wǒ shí fēnzhōng hòu qù.',vn:'10 phút nữa mình đi.'}]},
];

var dialogData = [
  {scene:'白家月和安妮打电话 · Hỏi giờ, hẹn gặp',
   preQuiz:[
     {q:'现在几点？',opts:['早上七点','早上八点四十','上午十点'],ans:1},
     {q:'白家月上午几点有课？',opts:['九点','十点十分','十一点'],ans:1},
     {q:'她们约几点见面？',opts:['下午两点','下午三点','晚上八点'],ans:0},
   ],
   lines:[
     {sp:0,zh:'现在几点？',py:'Xiànzài jǐ diǎn?',vn:'Bây giờ mấy giờ rồi?'},
     {sp:1,zh:'早上八点四十。',py:'Zǎoshang bā diǎn sìshí.',vn:'8 giờ 40 sáng.'},
     {sp:0,zh:'我上午十点十分有课。',py:'Wǒ shàngwǔ shí diǎn shí fēn yǒu kè.',vn:'Sáng nay mình có tiết học lúc 10 giờ 10 phút.'},
     {sp:1,zh:'好的，我们下午两点见吧。',py:'Hǎo de, wǒmen xiàwǔ liǎng diǎn jiàn ba.',vn:'Được, chúng ta hẹn gặp lúc 2 giờ chiều nhé.'},
   ]},
  {scene:'李文约白家月xem phim · Rủ đi xem phim',
   preQuiz:[
     {q:'李文下午想去（　）。',opts:['超市','看电影','西安饭店'],ans:1},
     {q:'白家月明天下午还（　）。',opts:['上课','有事','去超市'],ans:0},
   ],
   lines:[
     {sp:0,zh:'下午我想去电影院看电影，你去吗？',py:'Xiàwǔ wǒ xiǎng qù diànyǐngyuàn kàn diànyǐng, nǐ qù ma?',vn:'Chiều nay mình muốn đi xem phim ở rạp chiếu phim. Bạn có đi không?'},
     {sp:1,zh:'我不想去，下午还有事。',py:'Wǒ bù xiǎng qù, xiàwǔ hái yǒu shì.',vn:'Mình không muốn đi. Chiều nay mình còn có việc.'},
     {sp:0,zh:'好的。明天呢？',py:'Hǎo de. Míngtiān ne?',vn:'Ừ. Vậy ngày mai thì sao?'},
     {sp:1,zh:'我明天下午两点还上课呢，四点半下课。',py:'Wǒ míngtiān xiàwǔ liǎng diǎn hái shàngkè ne, sì diǎn bàn xiàkè.',vn:'Chiều mai mình 2 giờ chiều vẫn còn phải lên lớp, 4 giờ rưỡi tan học.'},
   ]},
  {scene:'王一雪打电话给刘明 · Hẹn giờ tan làm',
   preQuiz:[
     {q:'刘明（　）呢。',opts:['上班','买菜','在家里'],ans:2},
     {q:'王一雪（　）下班。',opts:['五点','六点','六点半'],ans:2},
   ],
   lines:[
     {sp:0,zh:'喂，你在哪儿呢？',py:'Wèi, nǐ zài nǎr ne?',vn:'A lô, anh đang ở đâu thế?'},
     {sp:1,zh:'我在家里呢。',py:'Wǒ zài jiā li ne.',vn:'Anh đang ở nhà.'},
     {sp:0,zh:'我晚上六点半下班。',py:'Wǒ wǎnshang liù diǎn bàn xiàbān.',vn:'Em tan làm lúc 6 rưỡi tối.'},
     {sp:1,zh:'我八点去医院上班。',py:'Wǒ bā diǎn qù yīyuàn shàngbān.',vn:'8 giờ anh đến bệnh viện làm việc.'},
     {sp:0,zh:'好的，你去店里买些菜吧。',py:'Hǎo de, nǐ qù diàn li mǎi xiē cài ba.',vn:'Vâng, anh ra cửa hàng mua ít thức ăn nhé.'},
     {sp:1,zh:'好，我十分钟后去。',py:'Hǎo, wǒ shí fēnzhōng hòu qù.',vn:'Ừ, 10 phút nữa anh đi.'},
   ]},
];

// ══════════════════════════════════════════
// PHẦN 1 · GHÉP TỪ (Collocation)
// ══════════════════════════════════════════
var matchData = [
  {left:'电影', right:'院'},
  {left:'上', right:'课'},
  {left:'下', right:'课'},
  {left:'上', right:'班'},
  {left:'分', right:'钟'},
  {left:'现', right:'在'},
];

// ══════════════════════════════════════════
// PHẦN 2 · NGHE — để trống, chờ audio + tài liệu gốc giáo trình HSK1 3.0
// ══════════════════════════════════════════
var listenData = [];

// ══════════════════════════════════════════
// PHẦN 3a · ĐIỀN TỪ
// ══════════════════════════════════════════
var fillData = [
  {pre:'', blank:'现在', post:'几点？', hint:'(bây giờ)', ans:'现在'},
  {pre:'早上八点', blank:'四十', post:'。', hint:'(bốn mươi — phút)', ans:'四十'},
  {pre:'我上午十点十分', blank:'有课', post:'。', hint:'(có tiết học)', ans:'有课'},
  {pre:'好的，我们下午两点', blank:'见', post:'吧。', hint:'(gặp)', ans:'见'},
  {pre:'下午我想去电影院', blank:'看电影', post:'，你去吗？', hint:'(xem phim)', ans:'看电影'},
  {pre:'我明天下午两点还', blank:'上课', post:'呢。', hint:'(lên lớp)', ans:'上课'},
  {pre:'我', blank:'晚上六点半', post:'下班。', hint:'(6 giờ rưỡi tối)', ans:'晚上六点半'},
  {pre:'我', blank:'十分钟后', post:'去。', hint:'(sau 10 phút)', ans:'十分钟后'},
];

// ══════════════════════════════════════════
// PHẦN 3b · SẮP XẾP
// ══════════════════════════════════════════
var sortData = [
  {words:['现在','几点','？'], ans:'现在几点？', audio:'现在几点？'},
  {words:['我们','下午','两点','见','吧','。'], ans:'我们下午两点见吧。', audio:'我们下午两点见吧。'},
  {words:['下午','我','想','去','电影院','看电影','。'], ans:'下午我想去电影院看电影。', audio:'下午我想去电影院看电影。'},
  {words:['我','明天','下午','两点','还','上课','呢','。'], ans:'我明天下午两点还上课呢。', audio:'我明天下午两点还上课呢。'},
  {words:['我','晚上','六点半','下班','。'], ans:'我晚上六点半下班。', audio:'我晚上六点半下班。'},
  {words:['你','去','店里','买','些','菜','吧','。'], ans:'你去店里买些菜吧。', audio:'你去店里买些菜吧。'},
];

// ══════════════════════════════════════════
// PHẦN 3c · TRẮC NGHIỆM
// ══════════════════════════════════════════
var mcData = [
  {q:'"现在几点？" nghĩa là gì?', opts:['Bây giờ mấy giờ rồi?', 'Hôm nay thứ mấy?', 'Bạn đi đâu?', 'Ai gọi điện?'], ans:0},
  {q:'"十点十分" nghĩa là gì?', opts:['10 giờ 10 phút', '10 giờ', '10 giờ rưỡi', '1 giờ 10 phút'], ans:0},
  {q:'Trợ từ "吧" trong "我们下午两点见吧" dùng để làm gì?', opts:['đưa ra đề nghị, gợi ý', 'hỏi có/không', 'phủ định', 'chỉ quá khứ'], ans:0},
  {q:'"我不想去，下午还有事" nghĩa là gì?', opts:['Tôi không muốn đi, chiều còn có việc', 'Tôi muốn đi xem phim', 'Tôi rất bận rộn', 'Tôi sẽ đi'], ans:0},
  {q:'"四点半下课" nghĩa là gì?', opts:['4 giờ rưỡi tan học', '4 giờ tan học', '4 giờ 15 tan học', '4 giờ vào học'], ans:0},
  {q:'"我在家里呢" nghĩa là gì?', opts:['Tôi đang ở nhà', 'Tôi đang ở bệnh viện', 'Tôi đang đi làm', 'Tôi đang ở cửa hàng'], ans:0},
  {q:'"十分钟后去" nghĩa là gì?', opts:['10 phút nữa đi', 'Đã đi được 10 phút', '10 giờ thì đi', 'Không đi nữa'], ans:0},
  {q:'Phó từ, từ ngữ chỉ thời gian làm trạng ngữ thường đặt ở đâu?', opts:['trước động từ/tính từ', 'sau động từ/tính từ', 'luôn ở đầu câu', 'luôn ở cuối câu'], ans:0},
];

// ══════════════════════════════════════════
// PHẦN 4 · LUYỆN NÓI
// ══════════════════════════════════════════
var speakingData = {
  intro: 'Nhấn 🔊 nghe câu hỏi/tình huống, rồi tự ghi âm câu trả lời của bạn dựa theo nội dung 3 bài khoá.',
  questions: [
    {q_zh: '有人问你："现在几点？" 你怎么回答？', q_vn: 'Có người hỏi bạn: "Bây giờ mấy giờ rồi?" Bạn trả lời thế nào?',
     hint: '现在……点。', sample: '现在早上八点四十。', sample_vn: 'Bây giờ là 8 giờ 40 sáng.',
     note: 'Cấu trúc "现在 + giờ + 点(+分)" dùng để nói giờ hiện tại.'},
    {q_zh: '朋友约你下午一起去看电影，但你还有事，你怎么说？', q_vn: 'Bạn của bạn rủ chiều nay đi xem phim, nhưng bạn còn bận việc, bạn nói thế nào?',
     hint: '我不想去，……还有事。', sample: '我不想去，下午还有事。', sample_vn: 'Mình không muốn đi, chiều nay mình còn có việc.',
     note: 'Cấu trúc "不想 + động từ" dùng để từ chối một cách lịch sự.'},
    {q_zh: '有人问你几点上班/下班，你怎么回答？', q_vn: 'Có người hỏi bạn mấy giờ đi làm/tan làm, bạn trả lời thế nào?',
     hint: '我……点上班/下班。', sample: '我晚上六点半下班。', sample_vn: 'Tôi tan làm lúc 6 giờ rưỡi tối.',
     note: 'Từ chỉ thời gian (点/半) luôn đứng trước động từ 上班/下班 làm trạng ngữ.'},
  ],
};

// ══════════════════════════════════════════
// LUYỆN DỊCH (Việt → Trung)
// ══════════════════════════════════════════
var translateData = [
  {vi:'Bây giờ mấy giờ rồi? — Bây giờ là 8 giờ 40 sáng.', zh:'现在几点？——现在早上八点四十。', py:'Xiànzài jǐ diǎn? — Xiànzài zǎoshang bā diǎn sìshí.'},
  {vi:'Chiều nay tôi muốn đi rạp chiếu phim xem phim.', zh:'下午我想去电影院看电影。', py:'Xiàwǔ wǒ xiǎng qù diànyǐngyuàn kàn diànyǐng.'},
  {vi:'Tôi tối nay 6 giờ rưỡi tan làm.', zh:'我晚上六点半下班。', py:'Wǒ wǎnshang liù diǎn bàn xiàbān.'},
  {vi:'Bạn ra cửa hàng mua ít rau đi.', zh:'你去店里买些菜吧。', py:'Nǐ qù diàn li mǎi xiē cài ba.'},
];

// ══════════════════════════════════════════
// LUYỆN DỊCH (Trung → Việt) — nội dung KHÁC với chiều Việt→Trung ở trên
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:'Chúng ta hẹn gặp nhau lúc 3 giờ chiều nhé.', zh:'我们下午三点见吧。', py:'Wǒmen xiàwǔ sān diǎn jiàn ba.'},
  {vi:'Sáng nay cô ấy không có tiết học.', zh:'她上午没有课。', py:'Tā shàngwǔ méiyǒu kè.'},
  {vi:'Mấy giờ bạn đi làm? — Tôi 8 giờ đến bệnh viện làm việc.', zh:'你几点上班？——我八点去医院上班。', py:'Nǐ jǐ diǎn shàngbān? — Wǒ bā diǎn qù yīyuàn shàngbān.'},
  {vi:'5 phút nữa tôi sẽ đến, bạn đợi tôi một chút.', zh:'我五分钟后去，你等我一下。', py:'Wǒ wǔ fēnzhōng hòu qù, nǐ děng wǒ yíxià.'},
];
