// ══════════════════════════════════════════
// DATA — HSK1 (3.0 Mới) Bài 1: AI小语，你好！
// Nguồn: Giáo trình New HSK 1 (chuẩn 3.0) - Trung Việt, NXB Dân Trí
// ══════════════════════════════════════════
var vocabData = [
  {n:1,zh:'你好',py:'nǐ hǎo',pos:'',vn:'xin chào, chào bạn',em:'👋',lesson:1,
   ex_zh:'AI小语，你好！',ex_py:'AI Xiǎoyǔ, nǐ hǎo!',ex_vn:'Chào cậu, AI Tiểu Ngữ!',
   exList:[
     {zh:'AI小语，你好！',py:'AI Xiǎoyǔ, nǐ hǎo!',vn:'Chào cậu, AI Tiểu Ngữ!'},
     {zh:'王老师，你好！',py:'Wáng lǎoshī, nǐ hǎo!',vn:'Chào cô Vương!'},
   ],
   hanzi:[
     {c:'你',p:'nǐ',type:'左右结构 · Trái-phải',st:7,ord:'亻(nhân) trái → 尔(biến thể) phải',rad:'亻(nhân – người)',mean:'anh, chị, bạn (ngôi thứ 2)',
      tip:'亻(người) đứng cạnh 尔(âm cổ chỉ "ngươi") → dùng để gọi NGƯỜI ĐANG NÓI CHUYỆN với mình.',
      cf:'休 (xiū – "nghỉ ngơi", cũng có bộ 亻)',w:'你好 / 你们 / 你是'},
     {c:'好',p:'hǎo',type:'左右结构 · Trái-phải',st:6,ord:'女(nữ) trái → 子(tử) phải',rad:'女 (nữ – con gái)',mean:'tốt, khoẻ',
      tip:'女(mẹ) + 子(con) → mẹ bồng con là hình ảnh TỐT ĐẸP nhất → nghĩa TỐT.',
      cf:'她 (tā – "cô ấy", cũng bộ 女")',w:'你好 / 好吗 / 很好'},
   ]},
  {n:2,zh:'大家',py:'dàjiā',pos:'Đại từ',vn:'mọi người',em:'👥',lesson:1,
   ex_zh:'大家好！',ex_py:'Dàjiā hǎo!',ex_vn:'Chào mọi người!',
   exList:[
     {zh:'大家好！',py:'Dàjiā hǎo!',vn:'Chào mọi người!'},
   ],
   hanzi:[
     {c:'大',p:'dà',type:'独体字 · Chữ đơn',st:3,ord:'一→ノ→乀',rad:'大 (đại)',mean:'to, lớn',
      tip:'Hình người dang rộng hai tay hai chân → biểu thị sự TO LỚN.',
      cf:'太 (tài – "quá", thêm 1 chấm)',w:'大家 / 大学'},
     {c:'家',p:'jiā',type:'上下结构 · Trên-dưới',st:10,ord:'宀(miên) trên → 豕(thỉ) dưới',rad:'宀 (miên – mái nhà)',mean:'nhà, gia đình',
      tip:'宀(mái nhà) + 豕(con lợn) → thời xưa nuôi lợn dưới nhà sàn, biểu tượng của NHÀ.',
      cf:'豪 (háo – "hào hiệp")',w:'我家 / 家人'},
   ]},
  {n:3,zh:'好',py:'hǎo',pos:'Tính từ',vn:'tốt, khoẻ',em:'👍',lesson:1,
   ex_zh:'老师，您好！',ex_py:'Lǎoshī, nín hǎo!',ex_vn:'Chào cô ạ!',
   exList:[
     {zh:'老师，您好！',py:'Lǎoshī, nín hǎo!',vn:'Chào cô ạ!'},
     {zh:'你们好！',py:'Nǐmen hǎo!',vn:'Chào các bạn!'},
   ],
   hanzi:[
     {c:'好',p:'hǎo',type:'左右结构 · Trái-phải',st:6,ord:'女(nữ) trái → 子(tử) phải',rad:'女 (nữ – con gái)',mean:'tốt, khoẻ',
      tip:'女(mẹ) + 子(con) → mẹ bồng con là hình ảnh TỐT ĐẸP nhất → nghĩa TỐT.',
      cf:'她 (tā – "cô ấy", cũng bộ 女")',w:'你好 / 好吗 / 很好'},
   ]},
  {n:4,zh:'学生',py:'xuésheng',pos:'Danh từ',vn:'học sinh, sinh viên',em:'🎓',lesson:2,
   ex_zh:'学生们学习打招呼用语。',ex_py:'Xuéshengmen xuéxí dǎzhāohu yòngyǔ.',ex_vn:'Các bạn học sinh học cách chào hỏi.',
   exList:[
     {zh:'学生们学习打招呼用语。',py:'Xuéshengmen xuéxí dǎzhāohu yòngyǔ.',vn:'Các bạn học sinh học cách chào hỏi.'},
   ],
   hanzi:[
     {c:'学',p:'xué',type:'上下结构 · Trên-dưới (giản thể)',st:8,ord:'⺍ → 冖 → 子',rad:'子 (tử – con)',mean:'học',
      tip:'Đứa trẻ 子 ngồi dưới mái nhà 冖 để tiếp thu kiến thức → HỌC.',
      cf:'字 (zì – "chữ", cũng có 子")',w:'学生 / 学习'},
     {c:'生',p:'shēng',type:'独体字 · Chữ đơn',st:5,ord:'丿→𠂉→⼀→土(biến thể)',rad:'生 (sinh – tự thành bộ)',mean:'sinh ra, sống',
      tip:'Hình cây cỏ mọc lên khỏi mặt đất → SINH RA, SỐNG; 学生 nghĩa là người đang "sinh trưởng" tri thức.',
      cf:'姓 (xìng – "họ")',w:'学生 / 医生 / 先生'},
   ]},
  {n:5,zh:'们',py:'men',pos:'Hậu tố',vn:'(dùng sau đại từ/danh từ chỉ số nhiều)',em:'👨‍👩‍👧‍👦',lesson:2,
   ex_zh:'学生们',ex_py:'xuéshengmen',ex_vn:'các bạn học sinh',
   exList:[
     {zh:'学生们',py:'xuéshengmen',vn:'các bạn học sinh'},
     {zh:'老师们',py:'lǎoshīmen',vn:'các thầy cô giáo'},
   ],
   hanzi:[
     {c:'们',p:'men',type:'左右结构 · Trái-phải',st:5,ord:'亻(nhân) trái → 门(môn) phải',rad:'亻 (nhân – người)',mean:'hậu tố số nhiều (chỉ người)',
      tip:'亻(người) đứng cạnh 门(cửa) → nhiều người cùng qua MỘT CÁNH CỬA = biểu thị SỐ NHIỀU.',
      cf:'门 (mén – "cửa")',w:'你们好'},
   ]},
  {n:6,zh:'老师',py:'lǎoshī',pos:'Danh từ',vn:'thầy giáo, cô giáo, giáo viên',em:'🧑‍🏫',lesson:2,
   ex_zh:'老师，您好！',ex_py:'Lǎoshī, nín hǎo!',ex_vn:'Chào cô ạ!',
   exList:[
     {zh:'老师，您好！',py:'Lǎoshī, nín hǎo!',vn:'Chào cô ạ!'},
     {zh:'同学们，再见！',py:'Tóngxuémen, zàijiàn!',vn:'Tạm biệt các em!'},
   ],
   hanzi:[
     {c:'老',p:'lǎo',type:'独体字 · Chữ đơn',st:6,ord:'土→耂→匕(biến thể)',rad:'老 (lão – tự thành bộ)',mean:'già, lão',
      tip:'Hình dáng người già chống gậy, tóc dài → GIÀ; 老师 nghĩa là người thầy đáng kính trọng.',
      cf:'考 (kǎo – "thi cử")',w:'老师'},
     {c:'师',p:'shī',type:'左右结构 · Trái-phải (giản thể)',st:6,ord:'丿→ 帀',rad:'巾 (cân)',mean:'thầy, người dạy',
      tip:'Hình ảnh người truyền đạt kiến thức một cách có hệ thống → THẦY, SƯ PHỤ.',
      cf:'帅 (shuài – "đẹp trai")',w:'老师 / 律师'},
   ]},
  {n:7,zh:'您',py:'nín',pos:'Đại từ',vn:'ngài, ông, bà (kính ngữ)',em:'🙇',lesson:2,
   ex_zh:'老师，您好！',ex_py:'Lǎoshī, nín hǎo!',ex_vn:'Chào cô ạ!',
   exList:[
     {zh:'老师，您好！',py:'Lǎoshī, nín hǎo!',vn:'Chào cô ạ!'},
   ],
   hanzi:[
     {c:'您',p:'nín',type:'上下结构 · Trên-dưới',st:11,ord:'你(biến thể) trên → 心(tâm) dưới',rad:'心 (tâm – trái tim)',mean:'ngài, ông, bà',
      tip:'你(bạn) trên 心(tấm lòng) → dùng cả TẤM LÒNG kính trọng khi xưng hô = kính ngữ NGÀI.',
      cf:'你 (nǐ – "bạn", không trang trọng)',w:'您好 / 您们(ít dùng)'},
   ]},
  {n:8,zh:'你们',py:'nǐmen',pos:'Đại từ',vn:'các bạn, các anh, các chị',em:'🫂',lesson:2,
   ex_zh:'你们好！',ex_py:'Nǐmen hǎo!',ex_vn:'Chào các bạn!',
   exList:[
     {zh:'你们好！',py:'Nǐmen hǎo!',vn:'Chào các bạn!'},
     {zh:'你好，小语！',py:'Nǐ hǎo, Xiǎoyǔ!',vn:'Chào Tiểu Ngữ!'},
   ],
   hanzi:[
     {c:'你',p:'nǐ',type:'左右结构 · Trái-phải',st:7,ord:'亻(nhân) trái → 尔(biến thể) phải',rad:'亻(nhân – người)',mean:'anh, chị, bạn (ngôi thứ 2)',
      tip:'亻(người) đứng cạnh 尔(âm cổ chỉ "ngươi") → dùng để gọi NGƯỜI ĐANG NÓI CHUYỆN với mình.',
      cf:'休 (xiū – "nghỉ ngơi", cũng có bộ 亻)',w:'你好 / 你们 / 你是'},
     {c:'们',p:'men',type:'左右结构 · Trái-phải',st:5,ord:'亻(nhân) trái → 门(môn) phải',rad:'亻 (nhân – người)',mean:'hậu tố số nhiều (chỉ người)',
      tip:'亻(người) đứng cạnh 门(cửa) → nhiều người cùng qua MỘT CÁNH CỬA = biểu thị SỐ NHIỀU.',
      cf:'门 (mén – "cửa")',w:'你们好'},
   ]},
  {n:9,zh:'谢谢',py:'xièxie',pos:'Động từ',vn:'cảm ơn',em:'🙏',lesson:3,
   ex_zh:'谢谢！',ex_py:'Xièxie!',ex_vn:'Cảm ơn!',
   exList:[
     {zh:'谢谢！',py:'Xièxie!',vn:'Cảm ơn!'},
   ],
   hanzi:[
     {c:'谢',p:'xiè',type:'左右结构 · Trái-phải',st:12,ord:'讠(ngôn) trái → 射(xạ) phải',rad:'讠 (ngôn – lời nói)',mean:'cảm ơn, tạ ơn',
      tip:'讠(lời nói) + 射(bắn ra) → LỜI NÓI bày tỏ lòng biết ơn được gửi ra ngoài.',
      cf:'榭 (xiè – "nhà thuỷ tạ")',w:'谢谢 / 不谢'},
   ]},
  {n:10,zh:'不客气',py:'bú kèqi',pos:'Cụm từ',vn:'đừng khách sáo, không cần khách khí',em:'😊',lesson:3,
   ex_zh:'不客气！',ex_py:'Bú kèqi!',ex_vn:'Đừng khách sáo!',
   exList:[
     {zh:'不客气！',py:'Bú kèqi!',vn:'Đừng khách sáo!'},
   ],
   hanzi:[
     {c:'不',p:'bù',type:'独体字 · Chữ đơn',st:4,ord:'一(ngang) → 丨→ ㇒ → 丶',rad:'一 (nhất)',mean:'không, chẳng, đừng',
      tip:'Nét ngang trên cùng như một bức tường CHẶN LẠI → mang nghĩa PHỦ ĐỊNH điều phía sau.',
      cf:'布 (bù – "vải")',w:'对不起'},
     {c:'客',p:'kè',type:'上下结构 · Trên-dưới',st:9,ord:'宀(miên) trên → 各(các) dưới',rad:'宀 (miên – mái nhà)',mean:'khách',
      tip:'宀(mái nhà) + 各(mỗi người, mỗi nơi) → người từ nhiều nơi đến ở tạm dưới MỘT MÁI NHÀ = KHÁCH.',
      cf:'各 (gè – "mỗi")',w:'客气 / 不客气'},
     {c:'气',p:'qì',type:'独体字 · Chữ đơn',st:4,ord:'ノ→一→㇕→一',rad:'气 (khí – tự thành bộ)',mean:'khí, hơi',
      tip:'Hình dáng luồng khí đang bay lượn → KHÍ; ghép với 客 thành "khách khí" nghĩa là giữ ý tứ, khách sáo.',
      cf:'汽 (qì – "hơi nước", thêm bộ 氵")',w:'客气 / 不客气'},
   ]},
  {n:11,zh:'同学',py:'tóngxué',pos:'Danh từ',vn:'bạn học',em:'🧑‍🎓',lesson:3,
   ex_zh:'同学们，再见！',ex_py:'Tóngxuémen, zàijiàn!',ex_vn:'Tạm biệt các em!',
   exList:[
     {zh:'同学们，再见！',py:'Tóngxuémen, zàijiàn!',vn:'Tạm biệt các em!'},
   ],
   hanzi:[
     {c:'同',p:'tóng',type:'半包围结构 · Bán bao vây',st:6,ord:'冂 bao ngoài → 一,口 bên trong',rad:'口 (khẩu – phần trong)',mean:'cùng, giống nhau',
      tip:'Nhiều miệng 口 nói CÙNG một tiếng dưới một mái che → ĐỒNG NHẤT, CÙNG NHAU.',
      cf:'洞 (dòng – "hang động")',w:'同学 / 同事'},
     {c:'学',p:'xué',type:'上下结构 · Trên-dưới (giản thể)',st:8,ord:'⺍ → 冖 → 子',rad:'子 (tử – con)',mean:'học',
      tip:'Đứa trẻ 子 ngồi dưới mái nhà 冖 để tiếp thu kiến thức → HỌC.',
      cf:'字 (zì – "chữ", cũng có 子")',w:'学生 / 学习'},
   ]},
  {n:12,zh:'再见',py:'zàijiàn',pos:'Động từ',vn:'tạm biệt',em:'👋',lesson:3,
   ex_zh:'老师，再见！',ex_py:'Lǎoshī, zàijiàn!',ex_vn:'Tạm biệt cô ạ!',
   exList:[
     {zh:'老师，再见！',py:'Lǎoshī, zàijiàn!',vn:'Tạm biệt cô ạ!'},
   ],
   hanzi:[
     {c:'再',p:'zài',type:'独体字 · Chữ đơn',st:6,ord:'一→冂→土(biến thể)',rad:'冂 (biến thể)',mean:'lại, lần nữa',
      tip:'Hình ảnh một vật được xếp CHỒNG THÊM một lần nữa lên trên → LẶP LẠI, LẦN NỮA.',
      cf:'冉 (rǎn – yếu tố Hán cổ)',w:'再见'},
     {c:'见',p:'jiàn',type:'独体字 · Chữ đơn',st:4,ord:'冂→ㇾ→儿(biến thể)',rad:'见 (kiến – tự thành bộ)',mean:'gặp, nhìn thấy',
      tip:'Hình con mắt trên đôi chân đang bước tới → NHÌN THẤY, GẶP GỠ.',
      cf:'贝 (bèi – "vật báu")',w:'再见'},
   ]},
  {n:13,zh:'王老师',py:'Wáng lǎoshī',pos:'Danh từ riêng',vn:'cô/thầy Vương',em:'🧑‍🏫',lesson:1,
   ex_zh:'AI小语，你好！——王老师，你好！',ex_py:'AI Xiǎoyǔ, nǐ hǎo! — Wáng lǎoshī, nǐ hǎo!',ex_vn:'Chào cậu, AI Tiểu Ngữ! — Chào cô Vương!',
   exList:[
     {zh:'AI小语，你好！——王老师，你好！',py:'AI Xiǎoyǔ, nǐ hǎo! — Wáng lǎoshī, nǐ hǎo!',vn:'Chào cậu, AI Tiểu Ngữ! — Chào cô Vương!'},
   ],
   hanzi:[
     {c:'王',p:'wáng',type:'独体字 · Chữ đơn',st:4,ord:'一→一→丨→一',rad:'王 (vương/ngọc – tự thành bộ)',mean:'họ Vương; vua',
      tip:'Ba nét ngang (trời-người-đất) nối liền bởi một nét sổ → người đứng giữa nối liền cả ba = VUA; cũng dùng làm HỌ Vương.',
      cf:'玉 (yù – "ngọc", thêm 1 chấm)',w:'王老师 / 王先生'},
     {c:'老',p:'lǎo',type:'独体字 · Chữ đơn',st:6,ord:'土→耂→匕(biến thể)',rad:'老 (lão – tự thành bộ)',mean:'già, lão',
      tip:'Hình dáng người già chống gậy, tóc dài → GIÀ; 老师 nghĩa là người thầy đáng kính trọng.',
      cf:'考 (kǎo – "thi cử")',w:'老师'},
     {c:'师',p:'shī',type:'左右结构 · Trái-phải (giản thể)',st:6,ord:'丿→ 帀',rad:'巾 (cân)',mean:'thầy, người dạy',
      tip:'Hình ảnh người truyền đạt kiến thức một cách có hệ thống → THẦY, SƯ PHỤ.',
      cf:'帅 (shuài – "đẹp trai")',w:'老师 / 律师'},
   ]},
];

const wuData = [
  {img:'👋',label:'你好',py:'nǐ hǎo',letter:'A'},
  {img:'🙏',label:'谢谢',py:'xièxie',letter:'B'},
  {img:'😊',label:'不客气',py:'bú kèqi',letter:'C'},
  {img:'👋',label:'再见',py:'zàijiàn',letter:'D'},
  {img:'🧑‍🏫',label:'老师',py:'lǎoshī',letter:'E'},
  {img:'🧑‍🎓',label:'同学',py:'tóngxué',letter:'F'},
];

var dialogData = [
  {scene:'王一飞与AI小语打招呼 · Chào hỏi trợ giảng AI',
   preQuiz:[
     {q:'王老师对AI小语说了什么？',opts:['你好','再见','谢谢'],ans:0},
   ],
   lines:[
     {sp:0,zh:'AI小语，你好！',py:'AI Xiǎoyǔ, nǐ hǎo!',vn:'Chào cậu, AI Tiểu Ngữ!'},
     {sp:1,zh:'王老师，你好！',py:'Wáng lǎoshī, nǐ hǎo!',vn:'Chào cô Vương!'},
   ]},
  {scene:'Chào cả lớp trong giờ học',
   preQuiz:[
     {q:'老师怎么和全班打招呼？',opts:['大家好','你们好','同学们好'],ans:0},
     {q:'学生怎么恭敬地向老师问好？',opts:['您好','你好','嗨'],ans:0},
   ],
   lines:[
     {sp:0,zh:'大家好！',py:'Dàjiā hǎo!',vn:'Chào mọi người!'},
     {sp:1,zh:'老师，您好！',py:'Lǎoshī, nín hǎo!',vn:'Chào cô ạ!'},
     {sp:2,zh:'你们好！',py:'Nǐmen hǎo!',vn:'Chào các bạn!'},
     {sp:1,zh:'你好，小语！',py:'Nǐ hǎo, Xiǎoyǔ!',vn:'Chào Tiểu Ngữ!'},
   ]},
  {scene:'Cảm ơn và tạm biệt cuối giờ',
   preQuiz:[
     {q:'别人帮忙后，应该说什么？',opts:['谢谢','你好','再见'],ans:0},
     {q:'怎么回答别人说的"谢谢"？',opts:['不客气','再见','你好'],ans:0},
     {q:'老师最后怎么和大家说再见？',opts:['同学们，再见','大家再见','明天见'],ans:0},
   ],
   lines:[
     {sp:1,zh:'谢谢！',py:'Xièxie!',vn:'Cảm ơn!'},
     {sp:2,zh:'不客气！',py:'Bú kèqi!',vn:'Đừng khách sáo!'},
     {sp:0,zh:'同学们，再见！',py:'Tóngxuémen, zàijiàn!',vn:'Tạm biệt các em!'},
     {sp:1,zh:'老师，再见！',py:'Lǎoshī, zàijiàn!',vn:'Tạm biệt cô ạ!'},
   ]},
];

// ══════════════════════════════════════════
// PHẦN 1 · GHÉP TỪ (Collocation)
// ══════════════════════════════════════════
var matchData = [
  {left:'你', right:'好'},
  {left:'大家', right:'好'},
  {left:'谢', right:'谢'},
  {left:'不', right:'客气'},
  {left:'同', right:'学'},
  {left:'再', right:'见'},
];

// ══════════════════════════════════════════
// PHẦN 2 · NGHE — để trống, chờ audio + tài liệu gốc giáo trình HSK1 3.0
// ══════════════════════════════════════════
var listenData = [];

// ══════════════════════════════════════════
// PHẦN 3a · ĐIỀN TỪ
// ══════════════════════════════════════════
var fillData = [
  {pre:'Gặp bạn mới, bạn chào: “', blank:'你好', post:'”', hint:'(xin chào)', ans:'你好'},
  {pre:'Bước vào lớp, thầy giáo chào cả lớp: “', blank:'大家好', post:'”', hint:'(chào mọi người)', ans:'大家好'},
  {pre:'Học sinh chào thầy/cô một cách kính trọng: “老师，', blank:'您好', post:'”', hint:'(kính ngữ)', ans:'您好'},
  {pre:'Ai đó giúp bạn, bạn nói: “', blank:'谢谢', post:'”', hint:'(cảm ơn)', ans:'谢谢'},
  {pre:'Đáp lại lời cảm ơn, bạn nói: “', blank:'不客气', post:'”', hint:'(đừng khách sáo)', ans:'不客气'},
  {pre:'Kết thúc buổi học, thầy giáo nói với cả lớp: “同学们，', blank:'再见', post:'”', hint:'(tạm biệt)', ans:'再见'},
  {pre:'Muốn hỏi thăm nhiều người bạn cùng lúc, bạn nói: “', blank:'你们', post:'好！”', hint:'(các bạn — số nhiều)', ans:'你们'},
];

// ══════════════════════════════════════════
// PHẦN 3b · SẮP XẾP
// ══════════════════════════════════════════
var sortData = [
  {words:['你','好','！'], ans:'你好！', audio:'你好！'},
  {words:['大家','好','！'], ans:'大家好！', audio:'大家好！'},
  {words:['老师','，','您','好','！'], ans:'老师，您好！', audio:'老师，您好！'},
  {words:['谢','谢','！'], ans:'谢谢！', audio:'谢谢！'},
  {words:['不','客气','！'], ans:'不客气！', audio:'不客气！'},
  {words:['同学','们','，','再见','！'], ans:'同学们，再见！', audio:'同学们，再见！'},
];

// ══════════════════════════════════════════
// PHẦN 3c · TRẮC NGHIỆM (HSK1 dùng mc thay cho sửa lỗi sai)
// ══════════════════════════════════════════
var mcData = [
  {q:'Gặp một người bạn mới quen, bạn chào thế nào?', opts:['你好', '再见', '谢谢', '不客气'], ans:0},
  {q:'Chào một NHÓM nhiều người cùng lúc, bạn nói?', opts:['大家好', '你好', '您好', '再见'], ans:0},
  {q:'Xưng hô KÍNH TRỌNG với thầy/cô (ngôi thứ 2, số ít) dùng từ nào?', opts:['您', '你', '你们', '大家'], ans:0},
  {q:'"你们" dùng để chỉ đối tượng nào?', opts:['Nhiều người nghe (số nhiều)', 'Một người nghe', 'Người nói', 'Người thứ ba'], ans:0},
  {q:'Ai đó giúp bạn một việc, cách cảm ơn đúng là?', opts:['谢谢', '再见', '你好', '同学'], ans:0},
  {q:'Đáp lại lời cảm ơn một cách lịch sự là?', opts:['不客气', '谢谢', '你好', '再见'], ans:0},
  {q:'Kết thúc buổi gặp, câu tạm biệt đúng là?', opts:['再见', '你好', '谢谢', '大家'], ans:0},
  {q:'"同学" dùng để gọi ai?', opts:['Bạn học', 'Thầy cô', 'Bố mẹ', 'Người lạ'], ans:0},
];

// ══════════════════════════════════════════
// PHẦN 4 · LUYỆN NÓI
// ══════════════════════════════════════════
var speakingData = {
  intro: 'Nhấn 🔊 nghe câu hỏi/tình huống, rồi tự ghi âm câu trả lời của bạn dựa theo nội dung 3 bài khoá.',
  questions: [
    {q_zh: '老师走进教室，你应该对老师说什么？', q_vn: 'Thầy giáo bước vào lớp, bạn nên chào thầy thế nào?',
     hint: '老师，您好！', sample: '老师，您好！', sample_vn: 'Chào thầy ạ!',
     note: '您 là kính ngữ, dùng khi xưng hô với người lớn tuổi hoặc đáng kính trọng như thầy cô.'},
    {q_zh: '朋友帮了你一个忙，你应该说什么？', q_vn: 'Bạn của bạn vừa giúp bạn một việc, bạn nên nói gì?',
     hint: '谢谢！——不客气！', sample: '谢谢！——不客气！', sample_vn: 'Cảm ơn! — Đừng khách sáo!',
     note: '谢谢 dùng để cảm ơn, 不客气 dùng để đáp lại lời cảm ơn một cách lịch sự.'},
    {q_zh: '下课了，你要跟同学们说什么？', q_vn: 'Tan học rồi, bạn cần nói gì với các bạn học?',
     hint: '同学们，再见！', sample: '同学们，再见！', sample_vn: 'Tạm biệt các bạn!',
     note: '再见 dùng để chào tạm biệt trong mọi tình huống chia tay.'},
  ],
};

// ══════════════════════════════════════════
// LUYỆN DỊCH (Việt → Trung)
// ══════════════════════════════════════════
var translateData = [
  {vi:'Chào cậu, AI Tiểu Ngữ!', zh:'AI小语，你好！', py:'AI Xiǎoyǔ, nǐ hǎo!'},
  {vi:'Chào mọi người! Chào cô ạ!', zh:'大家好！老师，您好！', py:'Dàjiā hǎo! Lǎoshī, nín hǎo!'},
  {vi:'Cảm ơn! — Đừng khách sáo!', zh:'谢谢！——不客气！', py:'Xièxie! — Bú kèqi!'},
  {vi:'Tạm biệt các bạn học! Tạm biệt cô ạ!', zh:'同学们，再见！老师，再见！', py:'Tóngxuémen, zàijiàn! Lǎoshī, zàijiàn!'},
];

// ══════════════════════════════════════════
// LUYỆN DỊCH (Trung → Việt) — nội dung KHÁC với chiều Việt→Trung ở trên
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:'Chào các bạn! Cảm ơn các bạn!', zh:'你们好！谢谢你们！', py:'Nǐmen hǎo! Xièxie nǐmen!'},
  {vi:'Chào cô Vương ạ! Chào cậu, Tiểu Ngữ!', zh:'王老师，您好！你好，小语！', py:'Wáng lǎoshī, nín hǎo! Nǐ hǎo, Xiǎoyǔ!'},
  {vi:'Bạn học ơi, cảm ơn cậu! — Không cần khách khí đâu!', zh:'同学，谢谢你！——不客气！', py:'Tóngxué, xièxie nǐ! — Bú kèqi!'},
  {vi:'Chào mọi người, tạm biệt nhé!', zh:'大家好，再见！', py:'Dàjiā hǎo, zàijiàn!'},
];
