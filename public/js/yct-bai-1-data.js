// ══════════════════════════════════════════
// DATA — YCT Bài 1: 你好！
// ══════════════════════════════════════════
const vocabData = [
  {n:1,zh:'你',py:'nǐ',pos:'Đại từ',vn:'bạn, con, em',em:'🧒',lesson:1,
   ex_zh:'你好！',ex_py:'Nǐ hǎo!',ex_vn:'Chào bạn!',
   exList:[
     {zh:'你好！',py:'Nǐ hǎo!',vn:'Chào bạn!'},
   ],
   hanzi:[
     {c:'你',p:'nǐ',type:'左右结构 · Trái-phải',st:7,ord:'亻(nhân) trái → 尔(biến thể) phải',rad:'亻 (nhân – người)',mean:'bạn, con, em',
      tip:'亻(người) đứng cạnh 尔(âm cổ) → dùng gọi NGƯỜI đang nói chuyện cùng mình.',
      cf:'休 (xiū – "nghỉ ngơi")',w:'你好'},
   ]},
  {n:2,zh:'好',py:'hǎo',pos:'Tính từ',vn:'tốt, khỏe',em:'👍',lesson:1,
   ex_zh:'你好！',ex_py:'Nǐ hǎo!',ex_vn:'Chào bạn!',
   exList:[
     {zh:'你好！',py:'Nǐ hǎo!',vn:'Chào bạn!'},
     {zh:'老师好！',py:'Lǎoshī hǎo!',vn:'Con chào cô ạ!'},
   ],
   hanzi:[
     {c:'好',p:'hǎo',type:'左右结构 · Trái-phải',st:6,ord:'女(nữ) trái → 子(tử) phải',rad:'女 (nữ – con gái)',mean:'tốt, khỏe',
      tip:'女(mẹ) đứng cạnh 子(con) → hình ảnh MẸ CON vui vẻ = TỐT ĐẸP.',
      cf:'如 (rú – "như")',w:'你好 / 老师好'},
   ]},
  {n:3,zh:'老师',py:'lǎoshī',pos:'Danh từ',vn:'thầy giáo, cô giáo',em:'👩‍🏫',lesson:1,
   ex_zh:'老师好！',ex_py:'Lǎoshī hǎo!',ex_vn:'Con chào cô ạ!',
   exList:[
     {zh:'老师好！',py:'Lǎoshī hǎo!',vn:'Con chào cô ạ!'},
   ],
   hanzi:[
     {c:'老',p:'lǎo',type:'独体字 · Chữ đơn',st:6,ord:'土→耂→匕(biến thể)',rad:'老 (lão – tự thành bộ)',mean:'già, đáng kính',
      tip:'Hình người già chống gậy, tóc dài → NGƯỜI LỚN đáng kính trọng.',
      cf:'考 (kǎo – "thi cử")',w:'老师'},
     {c:'师',p:'shī',type:'左右结构 · Trái-phải',st:6,ord:'丿→𠂉→帀(biến thể)',rad:'巾 (cân – khăn, biến thể)',mean:'thầy, sư phụ',
      tip:'Người dẫn dắt, chỉ dạy người khác → THẦY; ghép với 老 = "người thầy đáng kính".',
      cf:'帅 (shuài – "chỉ huy")',w:'老师'},
   ]},
  {n:4,zh:'再见',py:'zàijiàn',pos:'Động từ',vn:'tạm biệt',em:'👋',lesson:1,
   ex_zh:'老师，再见！',ex_py:'Lǎoshī, zàijiàn!',ex_vn:'Con chào cô, con về ạ!',
   exList:[
     {zh:'老师，再见！',py:'Lǎoshī, zàijiàn!',vn:'Con chào cô, con về ạ!'},
   ],
   hanzi:[
     {c:'再',p:'zài',type:'独体字 · Chữ đơn',st:6,ord:'一→冂→土(biến thể)',rad:'冂 (biến thể)',mean:'lại, lần nữa',
      tip:'Hình một vật được xếp CHỒNG thêm lần nữa → LẶP LẠI.',
      cf:'冉 (rǎn)',w:'再见'},
     {c:'见',p:'jiàn',type:'独体字 · Chữ đơn',st:4,ord:'冂→ㇾ→儿(biến thể)',rad:'见 (kiến – tự thành bộ)',mean:'gặp, nhìn thấy',
      tip:'Hình con mắt trên đôi chân bước tới → NHÌN THẤY, GẶP GỠ.',
      cf:'贝 (bèi – "vật báu")',w:'再见'},
   ]},
  {n:5,zh:'一',py:'yī',pos:'Số từ',vn:'một',em:'1️⃣',lesson:2,
   ex_zh:'一，二，三！',ex_py:'Yī, èr, sān!',ex_vn:'Một, hai, ba!',
   exList:[{zh:'一，二，三！',py:'Yī, èr, sān!',vn:'Một, hai, ba!'}],
   hanzi:[
     {c:'一',p:'yī',type:'独体字 · Chữ đơn',st:1,ord:'一',rad:'一 (nhất – tự thành bộ)',mean:'một',
      tip:'Một nét ngang duy nhất → biểu thị số MỘT, số đầu tiên.',
      cf:'二 (èr – "hai")',w:'一，二，三'},
   ]},
  {n:6,zh:'二',py:'èr',pos:'Số từ',vn:'hai',em:'2️⃣',lesson:2,
   ex_zh:'一，二，三！',ex_py:'Yī, èr, sān!',ex_vn:'Một, hai, ba!',
   exList:[{zh:'一，二，三！',py:'Yī, èr, sān!',vn:'Một, hai, ba!'}],
   hanzi:[
     {c:'二',p:'èr',type:'独体字 · Chữ đơn',st:2,ord:'一→一',rad:'二 (nhị – tự thành bộ)',mean:'hai',
      tip:'Hai nét ngang xếp chồng → số HAI.',
      cf:'一 (yī – "một")',w:'一，二，三'},
   ]},
  {n:7,zh:'三',py:'sān',pos:'Số từ',vn:'ba',em:'3️⃣',lesson:2,
   ex_zh:'一，二，三！',ex_py:'Yī, èr, sān!',ex_vn:'Một, hai, ba!',
   exList:[{zh:'一，二，三！',py:'Yī, èr, sān!',vn:'Một, hai, ba!'}],
   hanzi:[
     {c:'三',p:'sān',type:'独体字 · Chữ đơn',st:3,ord:'一→一→一',rad:'一 (nhất, biến thể)',mean:'ba',
      tip:'Ba nét ngang xếp chồng → số BA.',
      cf:'王 (wáng – "vua", thêm nét dọc")',w:'一，二，三'},
   ]},
  {n:8,zh:'四',py:'sì',pos:'Số từ',vn:'bốn',em:'4️⃣',lesson:2,
   ex_zh:'四，五，六！',ex_py:'Sì, wǔ, liù!',ex_vn:'Bốn, năm, sáu!',
   exList:[{zh:'四，五，六！',py:'Sì, wǔ, liù!',vn:'Bốn, năm, sáu!'}],
   hanzi:[
     {c:'四',p:'sì',type:'全包围结构 · Bao vây hoàn toàn',st:5,ord:'囗(vi) ngoài → 儿(biến thể) trong',rad:'囗 (vi, biến thể)',mean:'bốn',
      tip:'Hình khung vuông chứa số đếm bên trong (chữ cổ) → số BỐN.',
      cf:'因 (yīn – "vì, do")',w:'四，五，六'},
   ]},
  {n:9,zh:'五',py:'wǔ',pos:'Số từ',vn:'năm',em:'5️⃣',lesson:2,
   ex_zh:'四，五，六！',ex_py:'Sì, wǔ, liù!',ex_vn:'Bốn, năm, sáu!',
   exList:[{zh:'四，五，六！',py:'Sì, wǔ, liù!',vn:'Bốn, năm, sáu!'}],
   hanzi:[
     {c:'五',p:'wǔ',type:'独体字 · Chữ đơn',st:4,ord:'一→𠃌→乂(biến thể)→一',rad:'一 (nhất, biến thể)',mean:'năm (số)',
      tip:'Hai nét chéo giao nhau giữa hai đường ngang → số NĂM.',
      cf:'吾 (wú – "ta, tôi")',w:'四，五，六'},
   ]},
  {n:10,zh:'六',py:'liù',pos:'Số từ',vn:'sáu',em:'6️⃣',lesson:2,
   ex_zh:'四，五，六！',ex_py:'Sì, wǔ, liù!',ex_vn:'Bốn, năm, sáu!',
   exList:[{zh:'四，五，六！',py:'Sì, wǔ, liù!',vn:'Bốn, năm, sáu!'}],
   hanzi:[
     {c:'六',p:'liù',type:'上下结构 · Trên-dưới',st:4,ord:'亠 trên → 八(biến thể) dưới',rad:'八 (bát, biến thể)',mean:'sáu',
      tip:'亠(mái nhà) trên 八(chia) → số SÁU.',
      cf:'交 (jiāo – "giao")',w:'四，五，六'},
   ]},
  {n:11,zh:'七',py:'qī',pos:'Số từ',vn:'bảy',em:'7️⃣',lesson:2,
   ex_zh:'七，八，九，十！',ex_py:'Qī, bā, jiǔ, shí!',ex_vn:'Bảy, tám, chín, mười!',
   exList:[{zh:'七，八，九，十！',py:'Qī, bā, jiǔ, shí!',vn:'Bảy, tám, chín, mười!'}],
   hanzi:[
     {c:'七',p:'qī',type:'独体字 · Chữ đơn',st:2,ord:'一→㇃',rad:'一 (nhất, biến thể)',mean:'bảy',
      tip:'Một nét ngang cắt một nét sổ cong → số BẢY.',
      cf:'切 (qiè – "cắt")',w:'七，八，九'},
   ]},
  {n:12,zh:'八',py:'bā',pos:'Số từ',vn:'tám',em:'8️⃣',lesson:2,
   ex_zh:'七，八，九，十！',ex_py:'Qī, bā, jiǔ, shí!',ex_vn:'Bảy, tám, chín, mười!',
   exList:[{zh:'七，八，九，十！',py:'Qī, bā, jiǔ, shí!',vn:'Bảy, tám, chín, mười!'}],
   hanzi:[
     {c:'八',p:'bā',type:'独体字 · Tượng hình',st:2,ord:'丿→㇏',rad:'八 (bát – tự thành bộ)',mean:'tám',
      tip:'Hai nét chéo tách ra hai bên → hình ảnh CHIA TÁCH, số TÁM.',
      cf:'人 (rén – "người")',w:'七，八，九'},
   ]},
  {n:13,zh:'九',py:'jiǔ',pos:'Số từ',vn:'chín',em:'9️⃣',lesson:2,
   ex_zh:'七，八，九，十！',ex_py:'Qī, bā, jiǔ, shí!',ex_vn:'Bảy, tám, chín, mười!',
   exList:[{zh:'七，八，九，十！',py:'Qī, bā, jiǔ, shí!',vn:'Bảy, tám, chín, mười!'}],
   hanzi:[
     {c:'九',p:'jiǔ',type:'独体字 · Chữ đơn',st:2,ord:'ノ→乙(biến thể)',rad:'乙 (ất, biến thể)',mean:'chín',
      tip:'Hình móc câu uốn cong → số CHÍN, gần đủ một chục.',
      cf:'几 (jǐ – "mấy")',w:'七，八，九'},
   ]},
  {n:14,zh:'十',py:'shí',pos:'Số từ',vn:'mười',em:'🔟',lesson:2,
   ex_zh:'七，八，九，十！',ex_py:'Qī, bā, jiǔ, shí!',ex_vn:'Bảy, tám, chín, mười!',
   exList:[{zh:'七，八，九，十！',py:'Qī, bā, jiǔ, shí!',vn:'Bảy, tám, chín, mười!'}],
   hanzi:[
     {c:'十',p:'shí',type:'独体字 · Chữ đơn',st:2,ord:'一→丨',rad:'十 (thập – tự thành bộ)',mean:'mười',
      tip:'Một nét ngang cắt một nét dọc thành hình chữ thập → số MƯỜI, đủ một chục.',
      cf:'千 (qiān – "nghìn")',w:'七，八，九，十'},
   ]},
];

const wuData = [
  {img:'🧒',label:'你',py:'nǐ',letter:'A'},
  {img:'👩‍🏫',label:'老师',py:'lǎoshī',letter:'B'},
  {img:'👋',label:'再见',py:'zàijiàn',letter:'C'},
  {img:'3️⃣',label:'三',py:'sān',letter:'D'},
  {img:'5️⃣',label:'五',py:'wǔ',letter:'E'},
  {img:'🔟',label:'十',py:'shí',letter:'F'},
];

const dialogData = [
  {scene:'Trong lớp học · Chào cô giáo',
   lines:[
     {sp:0,zh:'老师好！',py:'Lǎoshī hǎo!',vn:'Con chào cô ạ!'},
     {sp:1,zh:'你好！',py:'Nǐ hǎo!',vn:'Chào con!'},
     {sp:0,zh:'老师，再见！',py:'Lǎoshī, zàijiàn!',vn:'Con chào cô, con về ạ!'},
     {sp:1,zh:'再见！',py:'Zàijiàn!',vn:'Tạm biệt con!'},
   ]},
  {scene:'Giờ học đếm số',
   lines:[
     {sp:0,zh:'一，二，三，四，五！',py:'Yī, èr, sān, sì, wǔ!',vn:'Một, hai, ba, bốn, năm!'},
     {sp:1,zh:'六，七，八，九，十！',py:'Liù, qī, bā, jiǔ, shí!',vn:'Sáu, bảy, tám, chín, mười!'},
   ]},
  {scene:'Ở sân trường · Gặp bạn mới',
   lines:[
     {sp:0,zh:'你好！',py:'Nǐ hǎo!',vn:'Chào bạn!'},
     {sp:1,zh:'你好！',py:'Nǐ hǎo!',vn:'Chào bạn!'},
     {sp:0,zh:'再见！',py:'Zàijiàn!',vn:'Tạm biệt nhé!'},
     {sp:1,zh:'再见！',py:'Zàijiàn!',vn:'Tạm biệt!'},
   ]},
];

// Điền từ — tình huống chào hỏi & đếm số
const fillData = [
  {pre:'Con chào cô giáo, con nói: “',blank:'老师',post:'好！”',hint:'(thầy/cô giáo)',ans:'老师'},
  {pre:'Con chào một người bạn: “',blank:'你',post:'好！”',hint:'(bạn, con, em)',ans:'你'},
  {pre:'Con tạm biệt khi ra về: “',blank:'再见',post:'！”',hint:'(tạm biệt)',ans:'再见'},
  {pre:'Đếm: 一，',blank:'二',post:'，三',hint:'(hai)',ans:'二'},
  {pre:'Đếm: 四，',blank:'五',post:'，六',hint:'(năm)',ans:'五'},
  {pre:'Đếm: 七，',blank:'八',post:'，九',hint:'(tám)',ans:'八'},
  {pre:'Số cuối cùng khi đếm đến mười: “',blank:'十',post:'”',hint:'(mười)',ans:'十'},
  {pre:'Đếm: 六，',blank:'七',post:'，八',hint:'(bảy)',ans:'七'},
];

// Sắp xếp — câu chào hỏi & dãy số
const sortData = [
  {words:['你','好','！'],ans:'你好！',audio:'你好！'},
  {words:['老师','好','！'],ans:'老师好！',audio:'老师好！'},
  {words:['老师','，','再见','！'],ans:'老师，再见！',audio:'老师，再见！'},
  {words:['一','，','二','，','三','。'],ans:'一，二，三。',audio:'一，二，三。'},
  {words:['四','，','五','，','六','。'],ans:'四，五，六。',audio:'四，五，六。'},
  {words:['七','，','八','，','九','，','十','。'],ans:'七，八，九，十。',audio:'七，八，九，十。'},
];

const matchData = [
  {left:'Chào cô giáo',right:'老师好！'},
  {left:'Chào một người bạn',right:'你好！'},
  {left:'Tạm biệt khi ra về',right:'再见！'},
  {left:'一，二，三',right:'四，五，六'},
  {left:'七，八，九',right:'十'},
];

// Trắc nghiệm — không audio
const mcData = [
  {q:'Từ nào dùng để gọi thầy/cô giáo?',opts:['老师','学生','朋友','妈妈'],ans:0},
  {q:'"好" nghĩa là gì?',opts:['tốt, khỏe','xấu','buồn','mệt'],ans:0},
  {q:'"再见" nghĩa là gì?',opts:['tạm biệt','xin chào','cảm ơn','xin lỗi'],ans:0},
  {q:'Số nào đứng sau 五 (năm)?',opts:['六','四','七','八'],ans:0},
  {q:'Số nào đứng trước 十 (mười)?',opts:['九','八','七','六'],ans:0},
  {q:'"三" là số mấy?',opts:['ba','hai','bốn','năm'],ans:0},
  {q:'"八" là số mấy?',opts:['tám','bảy','chín','sáu'],ans:0},
  {q:'Đếm từ 1 đến 3: 一，二，＿＿',opts:['三','四','五','六'],ans:0},
  {q:'Đếm từ 8 đến 10: 八，九，＿＿',opts:['十','一','二','三'],ans:0},
  {q:'"你" dùng để gọi ai?',opts:['người đang nói chuyện cùng mình','thầy cô giáo','bố mẹ','bạn bè ở xa'],ans:0},
];

const speakingData = {
  t1:{
    intro:'Nhấn 🔊 nghe từng câu mẫu, đọc to theo cho tới khi trôi chảy nhé!',
    models:[
      {zh:'你好！',py:'Nǐ hǎo!',vn:'Chào bạn!'},
      {zh:'老师好！',py:'Lǎoshī hǎo!',vn:'Con chào cô ạ!'},
      {zh:'再见！',py:'Zàijiàn!',vn:'Tạm biệt!'},
      {zh:'一，二，三，四，五！',py:'Yī, èr, sān, sì, wǔ!',vn:'Một, hai, ba, bốn, năm!'},
      {zh:'六，七，八，九，十！',py:'Liù, qī, bā, jiǔ, shí!',vn:'Sáu, bảy, tám, chín, mười!'},
    ],
  },
  t2:{
    intro:'Dùng khung câu cho sẵn, thay thế phần gạch chân bằng từ trong ô gợi ý. Nhấn 🔊 để nghe rồi nói to mỗi câu con tạo được.',
    drills:[
      {frame:'＿＿好！',frame_py:'___ hǎo!',vn:'Chào ＿＿!',options:['你','老师'],samples:['你好！','老师好！']},
    ],
  },
  t3:{
    intro:'Không nhìn câu mẫu, con hãy tưởng tượng mình đang ở trong tình huống thật và tự nói câu phù hợp nhé!',
    tasks:[
      {role:'🏫 Tình huống 1 — Chào cô giáo khi đến lớp',
       guide:'Con vừa đến lớp, hãy chào cô giáo thật lễ phép.',
       structure:['老师好！'],
       sample:'老师好！',
       sample_vn:'Con chào cô ạ!',
       note:'Khi chào thầy/cô giáo, dùng riêng từ 老师 thay vì chỉ nói "你好" suông — thể hiện sự lễ phép, kính trọng thầy cô.'},
      {role:'🔢 Tình huống 2 — Đếm số cùng bạn',
       guide:'Con và bạn cùng chơi trò đếm số từ 1 đến 10.',
       structure:['一，二，三，四，五！','六，七，八，九，十！'],
       sample:'一，二，三，四，五！六，七，八，九，十！',
       sample_vn:'Một, hai, ba, bốn, năm! Sáu, bảy, tám, chín, mười!',
       note:'Học thuộc dãy số 1-10 là nền tảng để học các con số lớn hơn và hỏi tuổi, hỏi giờ ở những bài sau.'},
      {role:'👋 Tình huống 3 — Chào tạm biệt bạn bè',
       guide:'Giờ ra chơi kết thúc, con chào tạm biệt bạn để về lớp.',
       structure:['你好！','再见！'],
       sample:'你好！再见！',
       sample_vn:'Chào bạn! Tạm biệt!',
       note:'你好 và 再见 là hai câu giao tiếp cơ bản nhất — con sẽ dùng chúng mỗi ngày khi gặp và chia tay bạn bè, thầy cô.'},
    ],
  },
};
