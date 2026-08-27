// ══════════════════════════════════════════
// DATA — HSK1 Bài 14: 她买了不少衣服。
// ══════════════════════════════════════════
var vocabData = [
  {n:1,zh:'东西',py:'dōngxi',pos:'Danh từ',vn:'đồ đạc, đồ dùng, hàng hóa',em:'🛍️',lesson:1,
   ex_zh:'我去商店买东西了。',ex_py:'Wǒ qù shāngdiàn mǎi dōngxi le.',ex_vn:'Mình đến cửa hàng để mua đồ.',
   exList:[
     {zh:'我去商店买东西了。',py:'Wǒ qù shāngdiàn mǎi dōngxi le.',vn:'Mình đến cửa hàng để mua đồ.'},
   ],
   hanzi:[
     {c:'东',p:'dōng',type:'独体字 · Chữ đơn',st:5,ord:'一→丨→𠃌→丶丶',rad:'木 (mộc, biến thể)',mean:'phía đông; đồ vật (trong 东西)',
      tip:'Mặt trời 日 mọc sau lũy tre 木 → hướng ĐÔNG; ghép với 西 thành "đông tây" mở rộng nghĩa ĐỒ VẬT.',
      cf:'柬 (jiǎn – "thiệp mời")',w:'东西 / 买东西'},
     {c:'西',p:'xī',type:'独体字 · Tượng hình',st:6,ord:'一→口(biến thể)',rad:'襾 (biến thể)',mean:'phía tây',
      tip:'Hình cái tổ chim lúc mặt trời lặn phía Tây → HƯỚNG TÂY.',
      cf:'酉 (yǒu – "chi dậu")',w:'东西'},
   ]},
  {n:2,zh:'一点儿',py:'yìdiǎnr',pos:'Số lượng từ',vn:'một ít, một chút',em:'🤏',lesson:1,
   ex_zh:'我买了一点儿苹果。',ex_py:'Wǒ mǎile yìdiǎnr píngguǒ.',ex_vn:'Mình mua một ít táo.',
   exList:[
     {zh:'我买了一点儿苹果。',py:'Wǒ mǎile yìdiǎnr píngguǒ.',vn:'Mình mua một ít táo.'},
   ],
   hanzi:[]},
  {n:3,zh:'苹果',py:'píngguǒ',pos:'Danh từ',vn:'quả táo',em:'🍎',lesson:1,
   ex_zh:'我买了一点儿苹果。',ex_py:'Wǒ mǎile yìdiǎnr píngguǒ.',ex_vn:'Mình mua một ít táo.',
   exList:[
     {zh:'我买了一点儿苹果。',py:'Wǒ mǎile yìdiǎnr píngguǒ.',vn:'Mình mua một ít táo.'},
   ],
   hanzi:[
     {c:'苹',p:'píng',type:'上下结构 · Trên-dưới',st:8,ord:'艹(thảo) trên → 平(bình) dưới',rad:'艹 (thảo – cỏ cây)',mean:'táo (trong 苹果)',
      tip:'艹(cây) + 平(mượn âm) → chỉ dùng riêng trong từ TÁO. (果 đã học ở Bài 12)',
      cf:'平 (píng – "bằng phẳng")',w:'苹果'},
   ]},
  {n:4,zh:'看见',py:'kànjiàn',pos:'Động từ',vn:'nhìn thấy, trông thấy',em:'👁️',lesson:1,
   ex_zh:'你看见张先生了吗？',ex_py:'Nǐ kànjiàn Zhāng xiānsheng le ma?',ex_vn:'Anh có thấy ông Trương không?',
   exList:[
     {zh:'你看见张先生了吗？',py:'Nǐ kànjiàn Zhāng xiānsheng le ma?',vn:'Anh có thấy ông Trương không?'},
   ],
   hanzi:[]},
  {n:5,zh:'先生',py:'xiānsheng',pos:'Danh từ',vn:'ông, ngài',em:'🤵',lesson:2,
   ex_zh:'你看见张先生了吗？',ex_py:'Nǐ kànjiàn Zhāng xiānsheng le ma?',ex_vn:'Anh có thấy ông Trương không?',
   exList:[
     {zh:'你看见张先生了吗？',py:'Nǐ kànjiàn Zhāng xiānsheng le ma?',vn:'Anh có thấy ông Trương không?'},
   ],
   hanzi:[
     {c:'先',p:'xiān',type:'上下结构 · Trên-dưới',st:6,ord:'丿(biến thể) trên → 儿(nhân) dưới',rad:'儿 (nhân – người, biến thể)',mean:'trước, đầu tiên; ông (kính ngữ)',
      tip:'Hình người bước ra TRƯỚC tiên → ĐẦU TIÊN; 先生 vốn nghĩa "người sinh ra trước", dùng gọi ÔNG một cách kính trọng.',
      cf:'洗 (xǐ – "rửa")',w:'先生 / 首先'},
   ]},
  {n:6,zh:'开',py:'kāi',pos:'Động từ',vn:'lái (xe), mở, vận hành',em:'🚦',lesson:2,
   ex_zh:'他去学开车了。',ex_py:'Tā qù xué kāi chē le.',ex_vn:'Ông ấy đi học lái xe rồi.',
   exList:[
     {zh:'他去学开车了。',py:'Tā qù xué kāi chē le.',vn:'Ông ấy đi học lái xe rồi.'},
   ],
   hanzi:[
     {c:'开',p:'kāi',type:'独体字 · Chữ đơn',st:4,ord:'一→廾(biến thể)',rad:'廾 (củng – hai tay, biến thể)',mean:'mở, lái, vận hành',
      tip:'Hình hai tay 廾 kéo then cửa → MỞ; mở rộng nghĩa "vận hành, lái (xe)".',
      cf:'关 (guān – "đóng, liên quan", đã học Bài 1")',w:'开车'},
   ]},
  {n:7,zh:'车',py:'chē',pos:'Danh từ',vn:'xe, phương tiện giao thông đường bộ',em:'🚗',lesson:2,
   ex_zh:'他去学开车了。',ex_py:'Tā qù xué kāi chē le.',ex_vn:'Ông ấy đi học lái xe rồi.',
   exList:[
     {zh:'他去学开车了。',py:'Tā qù xué kāi chē le.',vn:'Ông ấy đi học lái xe rồi.'},
   ],
   hanzi:[
     {c:'车',p:'chē',type:'独体字 · Tượng hình',st:4,ord:'一→𠃌→丨',rad:'车 (xa – tự thành bộ)',mean:'xe',
      tip:'Hình bánh xe nhìn từ trên xuống → XE.',
      cf:'东 (dōng – "phía đông", hình dạng gần giống")',w:'开车 / 汽车'},
   ]},
  {n:8,zh:'回来',py:'huílai',pos:'Động từ',vn:'quay về, trở lại',em:'↩️',lesson:2,
   ex_zh:'40分钟后回来。',ex_py:'Sìshí fēnzhōng hòu huílai.',ex_vn:'40 phút nữa quay lại.',
   exList:[
     {zh:'40分钟后回来。',py:'Sìshí fēnzhōng hòu huílai.',vn:'40 phút nữa quay lại.'},
   ],
   hanzi:[]},
  {n:9,zh:'分钟',py:'fēnzhōng',pos:'Danh từ',vn:'phút (thời lượng)',em:'⏱️',lesson:2,
   ex_zh:'40分钟后回来。',ex_py:'Sìshí fēnzhōng hòu huílai.',ex_vn:'40 phút nữa quay lại.',
   exList:[
     {zh:'40分钟后回来。',py:'Sìshí fēnzhōng hòu huílai.',vn:'40 phút nữa quay lại.'},
   ],
   hanzi:[
     {c:'钟',p:'zhōng',type:'左右结构 · Trái-phải',st:9,ord:'钅(kim) trái → 中(trung) phải',rad:'钅 (kim – kim loại)',mean:'đồng hồ, phút (thời lượng)',
      tip:'钅(kim loại, làm chuông đồng hồ) + 中(đúng giờ) → ĐỒNG HỒ, đếm THỜI LƯỢNG. (分 đã học ở Bài 11)',
      cf:'种 (zhǒng – "loại, giống")',w:'分钟 / 钟表'},
   ]},
  {n:10,zh:'后',py:'hòu',pos:'Danh từ',vn:'sau, sau khi',em:'⏭️',lesson:2,
   ex_zh:'40分钟后回来。',ex_py:'Sìshí fēnzhōng hòu huílai.',ex_vn:'40 phút nữa quay lại.',
   exList:[
     {zh:'40分钟后回来。',py:'Sìshí fēnzhōng hòu huílai.',vn:'40 phút nữa quay lại.'},
   ],
   hanzi:[]},
  {n:11,zh:'衣服',py:'yīfu',pos:'Danh từ',vn:'quần áo',em:'👗',lesson:3,
   ex_zh:'王方的衣服太漂亮了！',ex_py:'Wáng Fāng de yīfu tài piàoliang le!',ex_vn:'Quần áo của Vương Phương đẹp quá!',
   exList:[
     {zh:'王方的衣服太漂亮了！',py:'Wáng Fāng de yīfu tài piàoliang le!',vn:'Quần áo của Vương Phương đẹp quá!'},
   ],
   hanzi:[
     {c:'衣',p:'yī',type:'独体字 · Tượng hình',st:6,ord:'亠→𧘇(biến thể)',rad:'衣 (y – tự thành bộ)',mean:'áo, quần áo',
      tip:'Hình chiếc áo có cổ và hai vạt xòe ra → ÁO, QUẦN ÁO.',
      cf:'农 (nóng – "nông nghiệp")',w:'衣服'},
     {c:'服',p:'fú',type:'左右结构 · Trái-phải',st:8,ord:'月(nhục) trái → 𠬝(biến thể) phải',rad:'月 (nhục – thịt, biến thể)',mean:'quần áo; phục vụ',
      tip:'月(thân thể) + phần biểu thị "khoác vào" → thứ khoác lên thân thể = QUẦN ÁO.',
      cf:'报 (bào – "báo cáo")',w:'衣服'},
   ]},
  {n:12,zh:'漂亮',py:'piàoliang',pos:'Tính từ',vn:'đẹp, xinh đẹp',em:'✨',lesson:3,
   ex_zh:'王方的衣服太漂亮了！',ex_py:'Wáng Fāng de yīfu tài piàoliang le!',ex_vn:'Quần áo của Vương Phương đẹp quá!',
   exList:[
     {zh:'王方的衣服太漂亮了！',py:'Wáng Fāng de yīfu tài piàoliang le!',vn:'Quần áo của Vương Phương đẹp quá!'},
   ],
   hanzi:[
     {c:'漂',p:'piào',type:'左右结构 · Trái-phải',st:14,ord:'氵(thuỷ) trái → 票(phiếu) phải',rad:'氵 (thuỷ – nước)',mean:'đẹp (trong 漂亮)',
      tip:'氵(nước) + 票(nhẹ, bay) → trôi nổi nhẹ nhàng trên nước, mở rộng nghĩa ĐẸP, thanh thoát.',
      cf:'票 (piào – "vé")',w:'漂亮'},
     {c:'亮',p:'liàng',type:'上下结构 · Trên-dưới',st:9,ord:'亠(đầu) trên → 冗(biến thể) dưới',rad:'亠 (đầu, biến thể)',mean:'sáng, sáng sủa',
      tip:'Hình ánh sáng toả ra từ trên cao → SÁNG SỦA, đẹp rạng ngời.',
      cf:'京 (jīng – "kinh đô", đã học Bài 11")',w:'漂亮'},
   ]},
  {n:13,zh:'啊',py:'a',pos:'Trợ từ',vn:'trợ từ ngữ khí cuối câu để khẳng định',em:'💬',lesson:3,
   ex_zh:'是啊，她买了不少衣服。',ex_py:'Shì a, tā mǎile bùshǎo yīfu.',ex_vn:'Đúng vậy. Cô ấy mua nhiều quần áo lắm.',
   exList:[
     {zh:'是啊，她买了不少衣服。',py:'Shì a, tā mǎile bùshǎo yīfu.',vn:'Đúng vậy. Cô ấy mua nhiều quần áo lắm.'},
   ],
   hanzi:[
     {c:'啊',p:'a',type:'左右结构 · Trái-phải',st:10,ord:'口(khẩu) trái → 阿(biến thể) phải',rad:'口 (khẩu – miệng)',mean:'trợ từ khẳng định',
      tip:'口(miệng) mượn âm 阿 → tiếng thốt ra cuối câu để tăng cảm xúc, khẳng định.',
      cf:'阿 (ā – "tiền tố thân mật")',w:'是啊 / 好啊'},
   ]},
  {n:14,zh:'少',py:'shǎo',pos:'Tính từ',vn:'ít (不少: nhiều, khá nhiều)',em:'➖',lesson:3,
   ex_zh:'她买了不少衣服。',ex_py:'Tā mǎile bùshǎo yīfu.',ex_vn:'Cô ấy mua nhiều quần áo lắm.',
   exList:[
     {zh:'她买了不少衣服。',py:'Tā mǎile bùshǎo yīfu.',vn:'Cô ấy mua nhiều quần áo lắm.'},
   ],
   hanzi:[]},
  {n:15,zh:'这些',py:'zhèxiē',pos:'Đại từ',vn:'những cái này, những thứ này',em:'📦',lesson:3,
   ex_zh:'这些都是王方的东西。',ex_py:'Zhèxiē dōu shì Wáng Fāng de dōngxi.',ex_vn:'Những thứ này đều là đồ của Vương Phương.',
   exList:[
     {zh:'这些都是王方的东西。',py:'Zhèxiē dōu shì Wáng Fāng de dōngxi.',vn:'Những thứ này đều là đồ của Vương Phương.'},
   ],
   hanzi:[]},
  {n:16,zh:'都',py:'dōu',pos:'Phó từ',vn:'đều',em:'🟰',lesson:3,
   ex_zh:'这些都是王方的东西。',ex_py:'Zhèxiē dōu shì Wáng Fāng de dōngxi.',ex_vn:'Những thứ này đều là đồ của Vương Phương.',
   exList:[
     {zh:'这些都是王方的东西。',py:'Zhèxiē dōu shì Wáng Fāng de dōngxi.',vn:'Những thứ này đều là đồ của Vương Phương.'},
   ],
   hanzi:[
     {c:'都',p:'dōu',type:'左右结构 · Trái-phải',st:10,ord:'者(giả) trái → 阝(ấp) phải',rad:'阝 (ấp – thành ấp, phần phải)',mean:'đều',
      tip:'者(nhiều người) + 阝(cùng một vùng đất) → mọi người trong một nơi ĐỀU như nhau.',
      cf:'着 (zhe – "trợ từ động thái")',w:'这些都是'},
   ]},
];

const wuData = [
  {img:'🍎',label:'苹果',py:'píngguǒ',letter:'A'},
  {img:'🚗',label:'车',py:'chē',letter:'B'},
  {img:'👗',label:'衣服',py:'yīfu',letter:'C'},
  {img:'✨',label:'漂亮',py:'piàoliang',letter:'D'},
  {img:'🛍️',label:'东西',py:'dōngxi',letter:'E'},
  {img:'🤵',label:'先生',py:'xiānsheng',letter:'F'},
];

var dialogData = [
  {scene:'Ở ký túc xá · Đi mua đồ',
   lines:[
     {sp:0,zh:'昨天上午你去哪儿了？',py:'Zuótiān shàngwù nǐ qù nǎr le?',vn:'Sáng hôm qua bạn đi đâu vậy?'},
     {sp:1,zh:'我去商店买东西了。',py:'Wǒ qù shāngdiàn mǎi dōngxi le.',vn:'Mình đến cửa hàng để mua đồ.'},
     {sp:0,zh:'你买什么了？',py:'Nǐ mǎi shénme le?',vn:'Bạn mua gì vậy?'},
     {sp:1,zh:'我买了一点儿苹果。',py:'Wǒ mǎile yìdiǎnr píngguǒ.',vn:'Mình mua một ít táo.'},
   ]},
  {scene:'Trong công ty · Hỏi thăm đồng nghiệp',
   lines:[
     {sp:0,zh:'你看见张先生了吗？',py:'Nǐ kànjiàn Zhāng xiānsheng le ma?',vn:'Anh có thấy ông Trương không?'},
     {sp:1,zh:'看见了，他去学开车了。',py:'Kànjiàn le, tā qù xué kāi chē le.',vn:'Có, ông ấy đi học lái xe rồi.'},
     {sp:0,zh:'他什么时候能回来？',py:'Tā shénme shíhou néng huílai?',vn:'Khi nào ông ấy quay lại?'},
     {sp:1,zh:'40分钟后回来。',py:'Sìshí fēnzhōng hòu huílai.',vn:'40 phút nữa.'},
   ]},
  {scene:'Trước cửa hàng · Khen quần áo',
   lines:[
     {sp:0,zh:'王方的衣服太漂亮了！',py:'Wáng Fāng de yīfu tài piàoliang le!',vn:'Quần áo của Vương Phương đẹp quá!'},
     {sp:1,zh:'是啊，她买了不少衣服。',py:'Shì a, tā mǎile bùshǎo yīfu.',vn:'Đúng vậy. Cô ấy mua nhiều quần áo lắm.'},
     {sp:0,zh:'你买什么了？',py:'Nǐ mǎi shénme le?',vn:'Còn bạn mua những gì?'},
     {sp:1,zh:'我没买，这些都是王方的东西。',py:'Wǒ méi mǎi, zhèxiē dōu shì Wáng Fāng de dōngxi.',vn:'Mình không mua gì cả, những thứ này đều là đồ của Vương Phương.'},
   ]},
];

// Điền từ — đổi đồ vật/tình huống so với bài khoá
var fillData = [
  {pre:'Bạn hỏi hôm qua ai đó đi đâu: “昨天你去',blank:'哪儿',post:'了？”',hint:'(đâu, chỗ nào)',ans:'哪儿'},
  {pre:'Bạn nói mình đi mua đồ: “我去商店买',blank:'东西',post:'了。”',hint:'(đồ đạc, đồ dùng)',ans:'东西'},
  {pre:'Bạn nói mình mua một ít táo: “我买了一点儿',blank:'苹果',post:'。”',hint:'(táo)',ans:'苹果'},
  {pre:'Bạn nói có thấy ai đó: “我',blank:'看见',post:'他了。”',hint:'(nhìn thấy)',ans:'看见'},
  {pre:'Bạn hỏi khi nào ai đó quay lại: “他什么时候',blank:'回来',post:'？”',hint:'(quay về)',ans:'回来'},
  {pre:'Bạn khen quần áo ai đó đẹp: “你的衣服太',blank:'漂亮',post:'了！”',hint:'(đẹp)',ans:'漂亮'},
  {pre:'Bạn nói mua khá nhiều đồ: “我买了不',blank:'少',post:'东西。”',hint:'(不少 = nhiều)',ans:'少'},
  {pre:'Bạn nói những thứ này đều là của mình: “这些',blank:'都',post:'是我的。”',hint:'(đều)',ans:'都'},
];

// Sắp xếp — đổi đồ vật/tình huống so với bài khoá
var sortData = [
  {words:['你','去','商店','买','东西','了','。'],ans:'你去商店买东西了。',audio:'你去商店买东西了。'},
  {words:['我','买','了','一点儿','苹果','。'],ans:'我买了一点儿苹果。',audio:'我买了一点儿苹果。'},
  {words:['我','看见','他','了','。'],ans:'我看见他了。',audio:'我看见他了。'},
  {words:['他','去','学','开车','了','。'],ans:'他去学开车了。',audio:'他去学开车了。'},
  {words:['你','的','衣服','太','漂亮','了','！'],ans:'你的衣服太漂亮了！',audio:'你的衣服太漂亮了！'},
  {words:['这些','都','是','我','的','。'],ans:'这些都是我的。',audio:'这些都是我的。'},
];

var matchData = [
  {left:'昨天上午你去哪儿了？',right:'我去商店买东西了。'},
  {left:'你买什么了？',right:'我买了一点儿苹果。'},
  {left:'你看见张先生了吗？',right:'看见了，他去学开车了。'},
  {left:'他什么时候能回来？',right:'40分钟后回来。'},
  {left:'王方的衣服太漂亮了！',right:'是啊，她买了不少衣服。'},
];

// Trắc nghiệm — trọng tâm 了 (hoàn thành), 都, 不少, không audio
var mcData = [
  {q:'我去商店买东西＿＿。(hành động đã hoàn thành)',opts:['了','吗','呢','吧'],ans:0},
  {q:'我买＿＿一点儿苹果。',opts:['了','吗','呢','吧'],ans:0},
  {q:'Phủ định của "了" (đã làm gì) dùng cấu trúc nào?',opts:['没 + Động từ (bỏ 了)','不 + Động từ + 了','没 + Động từ + 了','别 + Động từ + 了'],ans:0},
  {q:'"40分钟后" nghĩa là gì?',opts:['sau 40 phút','trước 40 phút','trong 40 phút','mỗi 40 phút'],ans:0},
  {q:'"漂亮" nghĩa là gì?',opts:['đẹp, xinh đẹp','xấu','to lớn','nhỏ bé'],ans:0},
  {q:'"不少" nghĩa là gì?',opts:['nhiều, khá nhiều','ít','không có','một ít'],ans:0},
  {q:'"都" nghĩa là gì?',opts:['đều','cũng','rất','quá'],ans:0},
  {q:'"东西" nghĩa là gì?',opts:['đồ đạc, đồ dùng','phương hướng','quần áo','thức ăn'],ans:0},
  {q:'Câu nào ĐÚNG khi nói "Anh ấy đi học lái xe rồi"?',opts:['他去学开车了。','他学去开车了。','他开车去学了。','他了去学开车。'],ans:0},
  {q:'"衣服" nghĩa là gì?',opts:['quần áo','giày dép','túi xách','mũ nón'],ans:0},
];

var speakingData = {
  t1:{
    intro:'Nhấn 🔊 nghe từng câu mẫu, đọc to theo cho tới khi trôi chảy.',
    models:[
      {zh:'昨天上午你去哪儿了？',py:'Zuótiān shàngwù nǐ qù nǎr le?',vn:'Sáng hôm qua bạn đi đâu vậy?'},
      {zh:'我去商店买东西了。',py:'Wǒ qù shāngdiàn mǎi dōngxi le.',vn:'Mình đến cửa hàng để mua đồ.'},
      {zh:'你看见张先生了吗？',py:'Nǐ kànjiàn Zhāng xiānsheng le ma?',vn:'Anh có thấy ông Trương không?'},
      {zh:'他去学开车了。',py:'Tā qù xué kāi chē le.',vn:'Ông ấy đi học lái xe rồi.'},
      {zh:'你的衣服太漂亮了！',py:'Nǐ de yīfu tài piàoliang le!',vn:'Quần áo của bạn đẹp quá!'},
    ],
  },
  t2:{
    intro:'Dùng khung câu cho sẵn, thay thế phần gạch chân bằng từ trong ô gợi ý. Nhấn 🔊 để nghe rồi nói to mỗi câu bạn tạo được.',
    drills:[
      {frame:'我买了一点儿＿＿。',frame_py:'Wǒ mǎile yìdiǎnr ___.',vn:'Tôi mua một ít ＿＿.',options:['苹果','水果'],samples:['我买了一点儿苹果。','我买了一点儿水果。']},
      {frame:'我去商店买＿＿了。',frame_py:'Wǒ qù shāngdiàn mǎi ___ le.',vn:'Tôi đến cửa hàng mua ＿＿.',options:['东西','衣服'],samples:['我去商店买东西了。','我去商店买衣服了。']},
    ],
  },
  t3:{
    intro:'Không nhìn câu mẫu, hãy tưởng tượng bạn đang ở trong tình huống thực tế và tự nói ra câu phù hợp.',
    tasks:[
      {role:'🛍️ Tình huống 1 — Kể lại việc đã làm hôm qua',
       guide:'Bạn kể cho bạn cùng phòng nghe hôm qua mình đã đi đâu và mua gì.',
       structure:['昨天上午你去哪儿了？','我去商店买＿＿了。'],
       sample:'昨天上午你去哪儿了？我去商店买东西了。我买了一点儿苹果。',
       sample_vn:'Sáng hôm qua bạn đi đâu vậy? Mình đến cửa hàng mua đồ. Mình mua một ít táo.',
       note:'了 đặt sau động từ (买了) đánh dấu hành động ĐÃ HOÀN THÀNH — khác với 了 cuối câu ở Bài 5 biểu thị sự THAY ĐỔI tình huống.'},
      {role:'🏢 Tình huống 2 — Hỏi thăm đồng nghiệp vắng mặt',
       guide:'Bạn hỏi đồng nghiệp có thấy một người nào đó không và khi nào họ quay lại.',
       structure:['你看见张先生了吗？','他什么时候能回来？'],
       sample:'你看见张先生了吗？看见了，他去学开车了。他什么时候能回来？40分钟后回来。',
       sample_vn:'Anh có thấy ông Trương không? Có, ông ấy đi học lái xe rồi. Khi nào ông ấy quay lại? 40 phút nữa.',
       note:'"看见了" (đã nhìn thấy) là cách trả lời NGẮN GỌN rất tự nhiên — chỉ cần lặp lại động từ + 了 mà không cần nhắc lại cả câu hỏi.'},
      {role:'✨ Tình huống 3 — Khen ngợi và làm rõ chủ sở hữu',
       guide:'Bạn khen quần áo đẹp của một người bạn, rồi làm rõ rằng những món đồ đó không phải của mình.',
       structure:['你的衣服太漂亮了！','这些都是＿＿的东西。'],
       sample:'你的衣服太漂亮了！是啊，她买了不少衣服。这些都是王方的东西。',
       sample_vn:'Quần áo của bạn đẹp quá! Đúng vậy, cô ấy mua nhiều quần áo lắm. Những thứ này đều là đồ của Vương Phương.',
       note:'"太……了" dùng để KHEN NGỢI với cảm xúc mạnh mẽ — thể hiện sự ngạc nhiên, thán phục, phổ biến hơn "很" khi giao tiếp thân mật.'},
    ],
  },
};
