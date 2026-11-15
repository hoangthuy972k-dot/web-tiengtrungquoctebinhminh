// ══════════════════════════════════════════
// DATA — YCT Bài 1: 你好！
// ══════════════════════════════════════════
var vocabData = [
  {n:1,zh:'你',py:'nǐ',pos:'Đại từ',vn:'bạn, con, em', hv: 'nhĩ',em:'🧒',lesson:1,
   ex_zh:'你好！',ex_py:'Nǐ hǎo!',ex_vn:'Chào bạn!',
   exList:[
     {zh:'你好！',py:'Nǐ hǎo!',vn:'Chào bạn!'},
     {zh:'你好，老师！',py:'Nǐ hǎo, lǎoshī!',vn:'Em chào cô ạ!'},
   ],
   hanzi:[
     {c:'你',p:'nǐ',type:'左右结构 · Trái-phải',st:7,ord:'亻(nhân) trái → 尔(biến thể) phải',rad:'亻 (nhân – người)',mean:'bạn, con, em',
      tip:'亻(người) đứng cạnh 尔(âm cổ) → dùng gọi NGƯỜI đang nói chuyện cùng mình.',
      cf:'休 (xiū – "nghỉ ngơi")',w:'你好'},
   ]},
  {n:2,zh:'好',py:'hǎo',pos:'Tính từ',vn:'tốt, khỏe', hv: 'hảo',em:'👍',lesson:1,
   ex_zh:'老师好！',ex_py:'Lǎoshī hǎo!',ex_vn:'Con chào cô ạ!',
   exList:[
     {zh:'老师好！',py:'Lǎoshī hǎo!',vn:'Con chào cô ạ!'},
     {zh:'老师好！你好！',py:'Lǎoshī hǎo! Nǐ hǎo!',vn:'Con chào cô ạ! — Chào con!'},
   ],
   hanzi:[
     {c:'好',p:'hǎo',type:'左右结构 · Trái-phải',st:6,ord:'女(nữ) trái → 子(tử) phải',rad:'女 (nữ – con gái)',mean:'tốt, khỏe',
      tip:'女(mẹ) đứng cạnh 子(con) → hình ảnh MẸ CON vui vẻ = TỐT ĐẸP.',
      cf:'如 (rú – "như")',w:'你好 / 老师好'},
   ]},
  {n:3,zh:'老师',py:'lǎoshī',pos:'Danh từ',vn:'thầy giáo, cô giáo', hv: 'lão sư',em:'👩‍🏫',lesson:1,
   ex_zh:'老师，再见！',ex_py:'Lǎoshī, zàijiàn!',ex_vn:'Con chào cô, con về ạ!',
   exList:[
     {zh:'老师，再见！',py:'Lǎoshī, zàijiàn!',vn:'Con chào cô, con về ạ!'},
     {zh:'再见，老师！',py:'Zàijiàn, lǎoshī!',vn:'Con chào cô, con về ạ!'},
   ],
   hanzi:[
     {c:'老',p:'lǎo',type:'独体字 · Chữ đơn',st:6,ord:'土→耂→匕(biến thể)',rad:'老 (lão – tự thành bộ)',mean:'già, đáng kính',
      tip:'Hình người già chống gậy, tóc dài → NGƯỜI LỚN đáng kính trọng.',
      cf:'考 (kǎo – "thi cử")',w:'老师'},
     {c:'师',p:'shī',type:'左右结构 · Trái-phải',st:6,ord:'丿→𠂉→帀(biến thể)',rad:'巾 (cân – khăn, biến thể)',mean:'thầy, sư phụ',
      tip:'Người dẫn dắt, chỉ dạy người khác → THẦY; ghép với 老 = "người thầy đáng kính".',
      cf:'帅 (shuài – "chỉ huy")',w:'老师'},
   ]},
  {n:4,zh:'再见',py:'zàijiàn',pos:'Động từ',vn:'tạm biệt', hv: 'tái kiến',em:'👋',lesson:1,
   ex_zh:'再见，再见！',ex_py:'Zàijiàn, zàijiàn!',ex_vn:'Tạm biệt, tạm biệt!',
   exList:[
     {zh:'再见，再见！',py:'Zàijiàn, zàijiàn!',vn:'Tạm biệt, tạm biệt!'},
     {zh:'好，再见！',py:'Hǎo, zàijiàn!',vn:'Được rồi, tạm biệt nhé!'},
   ],
   hanzi:[
     {c:'再',p:'zài',type:'独体字 · Chữ đơn',st:6,ord:'一→冂→土(biến thể)',rad:'冂 (biến thể)',mean:'lại, lần nữa',
      tip:'Hình một vật được xếp CHỒNG thêm lần nữa → LẶP LẠI.',
      cf:'冉 (rǎn)',w:'再见'},
     {c:'见',p:'jiàn',type:'独体字 · Chữ đơn',st:4,ord:'冂→ㇾ→儿(biến thể)',rad:'见 (kiến – tự thành bộ)',mean:'gặp, nhìn thấy',
      tip:'Hình con mắt trên đôi chân bước tới → NHÌN THẤY, GẶP GỠ.',
      cf:'贝 (bèi – "vật báu")',w:'再见'},
   ]},
  {n:5,zh:'一',py:'yī',pos:'Số từ',vn:'một', hv: 'nhất',em:'1️⃣',lesson:2,
   ex_zh:'一，二，三！',ex_py:'Yī, èr, sān!',ex_vn:'Một, hai, ba!',
   exList:[{zh:'一，二，三！',py:'Yī, èr, sān!',vn:'Một, hai, ba!'},{zh:'一，三，五，七，九！',py:'Yī, sān, wǔ, qī, jiǔ!',vn:'Một, ba, năm, bảy, chín!'}],
   hanzi:[
     {c:'一',p:'yī',type:'独体字 · Chữ đơn',st:1,ord:'一',rad:'一 (nhất – tự thành bộ)',mean:'một',
      tip:'Một nét ngang duy nhất → biểu thị số MỘT, số đầu tiên.',
      cf:'二 (èr – "hai")',w:'一，二，三'},
   ]},
  {n:6,zh:'二',py:'èr',pos:'Số từ',vn:'hai', hv: 'nhị',em:'2️⃣',lesson:2,
   ex_zh:'二，四，六，八，十！',ex_py:'Èr, sì, liù, bā, shí!',ex_vn:'Hai, bốn, sáu, tám, mười!',
   exList:[
     {zh:'二，四，六，八，十！',py:'Èr, sì, liù, bā, shí!',vn:'Hai, bốn, sáu, tám, mười!'},
     {zh:'一，二！一，二！',py:'Yī, èr! Yī, èr!',vn:'Một, hai! Một, hai!'},
   ],
   hanzi:[
     {c:'二',p:'èr',type:'独体字 · Chữ đơn',st:2,ord:'一→一',rad:'二 (nhị – tự thành bộ)',mean:'hai',
      tip:'Hai nét ngang xếp chồng → số HAI.',
      cf:'一 (yī – "một")',w:'一，二，三'},
   ]},
  {n:7,zh:'三',py:'sān',pos:'Số từ',vn:'ba', hv: 'tam',em:'3️⃣',lesson:2,
   ex_zh:'三，二，一！',ex_py:'Sān, èr, yī!',ex_vn:'Ba, hai, một!',
   exList:[
     {zh:'三，二，一！',py:'Sān, èr, yī!',vn:'Ba, hai, một!'},
     {zh:'三，四，五！',py:'Sān, sì, wǔ!',vn:'Ba, bốn, năm!'},
   ],
   hanzi:[
     {c:'三',p:'sān',type:'独体字 · Chữ đơn',st:3,ord:'一→一→一',rad:'一 (nhất, biến thể)',mean:'ba',
      tip:'Ba nét ngang xếp chồng → số BA.',
      cf:'王 (wáng – "vua", thêm nét dọc")',w:'一，二，三'},
   ]},
  {n:8,zh:'四',py:'sì',pos:'Số từ',vn:'bốn', hv: 'tứ',em:'4️⃣',lesson:2,
   ex_zh:'四，五，六！',ex_py:'Sì, wǔ, liù!',ex_vn:'Bốn, năm, sáu!',
   exList:[{zh:'四，五，六！',py:'Sì, wǔ, liù!',vn:'Bốn, năm, sáu!'},{zh:'二，四，六！',py:'Èr, sì, liù!',vn:'Hai, bốn, sáu!'}],
   hanzi:[
     {c:'四',p:'sì',type:'全包围结构 · Bao vây hoàn toàn',st:5,ord:'囗(vi) ngoài → 儿(biến thể) trong',rad:'囗 (vi, biến thể)',mean:'bốn',
      tip:'Hình khung vuông chứa số đếm bên trong (chữ cổ) → số BỐN.',
      cf:'因 (yīn – "vì, do")',w:'四，五，六'},
   ]},
  {n:9,zh:'五',py:'wǔ',pos:'Số từ',vn:'năm', hv: 'ngũ',em:'5️⃣',lesson:2,
   ex_zh:'五，四，三，二，一！',ex_py:'Wǔ, sì, sān, èr, yī!',ex_vn:'Năm, bốn, ba, hai, một!',
   exList:[
     {zh:'五，四，三，二，一！',py:'Wǔ, sì, sān, èr, yī!',vn:'Năm, bốn, ba, hai, một!'},
     {zh:'五，六，七，八！',py:'Wǔ, liù, qī, bā!',vn:'Năm, sáu, bảy, tám!'},
   ],
   hanzi:[
     {c:'五',p:'wǔ',type:'独体字 · Chữ đơn',st:4,ord:'一→𠃌→乂(biến thể)→一',rad:'一 (nhất, biến thể)',mean:'năm (số)',
      tip:'Hai nét chéo giao nhau giữa hai đường ngang → số NĂM.',
      cf:'吾 (wú – "ta, tôi")',w:'四，五，六'},
   ]},
  {n:10,zh:'六',py:'liù',pos:'Số từ',vn:'sáu', hv: 'lục',em:'6️⃣',lesson:2,
   ex_zh:'六，七，八！',ex_py:'Liù, qī, bā!',ex_vn:'Sáu, bảy, tám!',
   exList:[
     {zh:'六，七，八！',py:'Liù, qī, bā!',vn:'Sáu, bảy, tám!'},
     {zh:'六，五，四！',py:'Liù, wǔ, sì!',vn:'Sáu, năm, bốn!'},
   ],
   hanzi:[
     {c:'六',p:'liù',type:'上下结构 · Trên-dưới',st:4,ord:'亠 trên → 八(biến thể) dưới',rad:'八 (bát, biến thể)',mean:'sáu',
      tip:'亠(mái nhà) trên 八(chia) → số SÁU.',
      cf:'交 (jiāo – "giao")',w:'四，五，六'},
   ]},
  {n:11,zh:'七',py:'qī',pos:'Số từ',vn:'bảy', hv: 'thất',em:'7️⃣',lesson:2,
   ex_zh:'七，八，九，十！',ex_py:'Qī, bā, jiǔ, shí!',ex_vn:'Bảy, tám, chín, mười!',
   exList:[{zh:'七，八，九，十！',py:'Qī, bā, jiǔ, shí!',vn:'Bảy, tám, chín, mười!'},{zh:'五，六，七！',py:'Wǔ, liù, qī!',vn:'Năm, sáu, bảy!'}],
   hanzi:[
     {c:'七',p:'qī',type:'独体字 · Chữ đơn',st:2,ord:'一→㇃',rad:'一 (nhất, biến thể)',mean:'bảy',
      tip:'Một nét ngang cắt một nét sổ cong → số BẢY.',
      cf:'切 (qiè – "cắt")',w:'七，八，九'},
   ]},
  {n:12,zh:'八',py:'bā',pos:'Số từ',vn:'tám', hv: 'bát',em:'8️⃣',lesson:2,
   ex_zh:'八，九，十！',ex_py:'Bā, jiǔ, shí!',ex_vn:'Tám, chín, mười!',
   exList:[
     {zh:'八，九，十！',py:'Bā, jiǔ, shí!',vn:'Tám, chín, mười!'},
     {zh:'二，四，六，八！',py:'Èr, sì, liù, bā!',vn:'Hai, bốn, sáu, tám!'},
   ],
   hanzi:[
     {c:'八',p:'bā',type:'独体字 · Tượng hình',st:2,ord:'丿→㇏',rad:'八 (bát – tự thành bộ)',mean:'tám',
      tip:'Hai nét chéo tách ra hai bên → hình ảnh CHIA TÁCH, số TÁM.',
      cf:'人 (rén – "người")',w:'七，八，九'},
   ]},
  {n:13,zh:'九',py:'jiǔ',pos:'Số từ',vn:'chín', hv: 'cửu',em:'9️⃣',lesson:2,
   ex_zh:'九，七，五，三，一！',ex_py:'Jiǔ, qī, wǔ, sān, yī!',ex_vn:'Chín, bảy, năm, ba, một!',
   exList:[
     {zh:'九，七，五，三，一！',py:'Jiǔ, qī, wǔ, sān, yī!',vn:'Chín, bảy, năm, ba, một!'},
     {zh:'七，八，九！',py:'Qī, bā, jiǔ!',vn:'Bảy, tám, chín!'},
   ],
   hanzi:[
     {c:'九',p:'jiǔ',type:'独体字 · Chữ đơn',st:2,ord:'ノ→乙(biến thể)',rad:'乙 (ất, biến thể)',mean:'chín',
      tip:'Hình móc câu uốn cong → số CHÍN, gần đủ một chục.',
      cf:'几 (jǐ – "mấy")',w:'七，八，九'},
   ]},
  {n:14,zh:'十',py:'shí',pos:'Số từ',vn:'mười', hv: 'thập',em:'🔟',lesson:2,
   ex_zh:'十，九，八，七，六！',ex_py:'Shí, jiǔ, bā, qī, liù!',ex_vn:'Mười, chín, tám, bảy, sáu!',
   exList:[
     {zh:'十，九，八，七，六！',py:'Shí, jiǔ, bā, qī, liù!',vn:'Mười, chín, tám, bảy, sáu!'},
     {zh:'六，七，八，九，十！',py:'Liù, qī, bā, jiǔ, shí!',vn:'Sáu, bảy, tám, chín, mười!'},
   ],
   hanzi:[
     {c:'十',p:'shí',type:'独体字 · Chữ đơn',st:2,ord:'一→丨',rad:'十 (thập – tự thành bộ)',mean:'mười',
      tip:'Một nét ngang cắt một nét dọc thành hình chữ thập → số MƯỜI, đủ một chục.',
      cf:'千 (qiān – "nghìn")',w:'七，八，九，十'},
   ]},
];

var wuData = [
  {img:'🧒',label:'你',py:'nǐ',letter:'A'},
  {img:'👩‍🏫',label:'老师',py:'lǎoshī',letter:'B'},
  {img:'👋',label:'再见',py:'zàijiàn',letter:'C'},
  {img:'3️⃣',label:'三',py:'sān',letter:'D'},
  {img:'5️⃣',label:'五',py:'wǔ',letter:'E'},
  {img:'🔟',label:'十',py:'shí',letter:'F'},
];

var dialogData = [
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
var fillData = [
  {pre:'Tan học, con vẫy tay chào cô giáo: “老师，',blank:'再见',post:'！”',hint:'(tạm biệt)',ans:'再见',exp:'Ra về thì chào 再见; gọi 老师 trước rồi nói 再见.'},
  {pre:'Bạn mới vẫy tay: “你好！” Con chào lại bạn: “',blank:'你',post:'好！”',hint:'(bạn)',ans:'你',exp:'Bạn chào 你好 thì con cũng chào lại 你好.'},
  {pre:'Con có 3 cái kẹo 🍬, bạn cho thêm 1 cái. Bây giờ con có ',blank:'四',post:' cái kẹo.',hint:'(3 + 1)',ans:'四',exp:'3 + 1 = 4, số 4 là 四 (sì).'},
  {pre:'Đếm cách hai: 二，四，',blank:'六',post:'，八，十',hint:'(số 6)',ans:'六',exp:'Đếm cách hai: 2, 4, 6, 8, 10 — số 6 là 六 (liù).'},
  {pre:'Con nhện 🕷️ có ',blank:'八',post:' cái chân.',hint:'(số 8)',ans:'八',exp:'Con nhện có 8 chân, số 8 là 八 (bā).'},
  {pre:'Một quả táo 🍎 thêm một quả táo: 一 ＋ 一 ＝ ',blank:'二',post:'',hint:'(1 + 1)',ans:'二',exp:'1 + 1 = 2, số 2 là 二 (èr) — hai nét ngang.'},
  {pre:'Con có 10 cây bút chì ✏️, làm rơi mất 1 cây. Con còn ',blank:'九',post:' cây.',hint:'(10 − 1)',ans:'九',exp:'10 − 1 = 9, số 9 là 九 (jiǔ).'},
];

// Sắp xếp — câu chào hỏi & dãy số
var sortData = [
  {words:['老师','再见','，','！'],ans:'再见，老师！',audio:'再见，老师！',alt:['老师，再见！']},
  {words:['一','四','二','五','三','，','，','，','，','！'],ans:'五，四，三，二，一！',audio:'五，四，三，二，一！'},
  {words:['九','三','七','一','五','，','，','，','，','。'],ans:'一，三，五，七，九。',audio:'一，三，五，七，九。'},
];

var matchData = [
  {left:'Gặp một bạn mới ở sân trường',right:'你好！'},
  {left:'Vẫy tay chào bạn lúc ra về',right:'再见！'},
  {left:'Số ngón tay của một bàn tay ✋',right:'五'},
  {left:'Số ngày trong một tuần 📅',right:'七'},
  {left:'Số bánh xe của xe đạp ba bánh 🚲',right:'三'},
  {left:'Số ngón tay của hai bàn tay 🙌',right:'十'},
];

// Trắc nghiệm — không audio
var mcData = [
  {q:'Sáng nay con đến lớp, gặp cô giáo ở cửa. Con chào:',opts:['老师好！','好老师！','老师再见！','再见好！'],ans:0,exp:'Người được chào đứng trước 好: 老师好. Nói 好老师 là đảo theo kiểu "chào cô" của tiếng Việt.'},
  {q:'Câu chào nào SAI?',opts:['好你！','你好！','老师好！','老师，再见！'],ans:0,exp:'好 luôn đứng sau người được chào: 你好, không nói 好你.'},
  {q:'Bạn vẫy tay nói với con: “再见！” Con đáp:',opts:['再见！','你好！','老师好！','好！'],ans:0,exp:'Bạn chào tạm biệt thì con cũng đáp 再见; 你好 chỉ dùng khi gặp nhau.'},
  {q:'Con mèo 🐱 có mấy cái chân?',opts:['四','二','六','十'],ans:0,exp:'Con mèo có 4 chân, số 4 là 四.'},
  {q:'Con có 2 quả bóng ⚽, mẹ cho thêm 3 quả. Con có mấy quả?',opts:['五','三','六','八'],ans:0,exp:'2 + 3 = 5, số 5 là 五.'},
  {q:'Bạn đếm: 一，二，＿＿，四，五',opts:['三','七','九','十'],ans:0,exp:'1, 2, 3, 4, 5 — số còn thiếu là 3: 三.'},
  {q:'Chơi trốn tìm, con đếm ngược từ 10. Con đếm:',opts:['十，九，八，七','十，八，九，七','一，二，三，四','十，七，八，九'],ans:0,exp:'Đếm ngược: 10, 9, 8, 7 = 十，九，八，七.'},
  {q:'Số nào đứng ngay sau 六?',opts:['七','五','九','八'],ans:0,exp:'六 (6) → 七 (7). 五 là số đứng trước 六.'},
];

var speakingData = {
  t1:{
    intro:'Nhấn nút loa nghe từng câu mẫu, đọc to theo cho tới khi trôi chảy nhé!',
    models:[
      {zh:'老师好！',py:'Lǎoshī hǎo!',vn:'Con chào cô ạ!'},
      {zh:'你好！',py:'Nǐ hǎo!',vn:'Chào bạn!'},
      {zh:'老师，再见！',py:'Lǎoshī, zàijiàn!',vn:'Con chào cô, con về ạ!'},
      {zh:'一，二，三，四，五！',py:'Yī, èr, sān, sì, wǔ!',vn:'Một, hai, ba, bốn, năm!'},
      {zh:'六，七，八，九，十！',py:'Liù, qī, bā, jiǔ, shí!',vn:'Sáu, bảy, tám, chín, mười!'},
    ],
  },
  t2:{
    intro:'Dùng khung câu cho sẵn, thay thế phần gạch chân bằng từ trong ô gợi ý. Nhấn nút loa để nghe rồi nói to mỗi câu con tạo được.',
    drills:[
      {frame:'老师，＿＿！',frame_py:'Lǎoshī, ___!',vn:'Cô ơi, ＿＿!',options:['你好','再见'],samples:['老师，你好！','老师，再见！']},
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
       note:'Chào thầy cô thì gọi 老师 rồi thêm 好 — lễ phép hơn là chỉ nói 你好.'},
      {role:'🔢 Tình huống 2 — Đếm số cùng bạn',
       guide:'Con và bạn thay nhau đếm: con đếm số lẻ, bạn đếm số chẵn.',
       structure:['一，三，……','二，四，……'],
       sample:'一，三，五，七，九！二，四，六，八，十！',
       sample_vn:'Một, ba, năm, bảy, chín! Hai, bốn, sáu, tám, mười!',
       note:'Đếm số lẻ / số chẵn giúp con nhớ chắc 10 con số — các bài sau sẽ dùng chúng để nói tuổi, ngày và giờ.'},
      {role:'👋 Tình huống 3 — Gặp bạn rồi chào tạm biệt',
       guide:'Giờ ra chơi con gặp một bạn, chơi xong thì chào tạm biệt để về lớp.',
       structure:['你好！','再见！'],
       sample:'你好！……再见！',
       sample_vn:'Chào bạn! …… Tạm biệt nhé!',
       note:'Gặp nhau nói 你好, chia tay nói 再见 — hai câu con dùng mỗi ngày.'},
    ],
  },
};

// ══════════════════════════════════════════
// LUYỆN DỊCH (Việt→Trung) — câu ví dụ của chính bài này
// ══════════════════════════════════════════
var translateData = [
  {vi:"Chào bạn!", zh:"你好！", py:"Nǐ hǎo!"},
  {vi:"Ba, bốn, năm!", zh:"三，四，五！", py:"Sān, sì, wǔ!"},
  {vi:"Chín, tám, bảy!", zh:"九，八，七！", py:"Jiǔ, bā, qī!"},
  {vi:"Tạm biệt cô ạ!", zh:"老师，再见！", py:"Lǎoshī, zàijiàn!"},
];

// ══════════════════════════════════════════
// LUYỆN DỊCH (Trung→Việt) — lời thoại trong bài, khác chiều Việt→Trung
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:"Chào cô ạ!", zh:"老师，你好！", py:"Lǎoshī, nǐ hǎo!"},
  {vi:"Hai, bốn, sáu, tám, mười!", zh:"二，四，六，八，十！", py:"Èr, sì, liù, bā, shí!"},
  {vi:"Tạm biệt! Tạm biệt!", zh:"再见！再见！", py:"Zàijiàn! Zàijiàn!"},
];

// ══════════════════════════════════════════
// LUYỆN NGHE — đoạn nghe ngắn (đọc bằng giọng máy), chỉ dùng từ đã học
// ══════════════════════════════════════════
var listenData = [
  {audio:'老师，你好！',
   questions:[
     {q:'Bạn nhỏ đang chào ai?',opts:['Cô giáo','Một bạn nhỏ','Bố'],ans:0,exp:'老师 = cô giáo; 你好 = chào.'},
   ]},
  {audio:'三，六，九。',
   questions:[
     {q:'Bạn nhỏ đọc những số nào?',opts:['1, 2, 3','3, 6, 9','3, 5, 7'],ans:1,exp:'三 = 3, 六 = 6, 九 = 9.'},
   ]},
  {audio:'再见！再见！',
   questions:[
     {q:'Hai bạn đang làm gì?',opts:['Chào nhau khi mới gặp','Đếm số','Chào tạm biệt'],ans:2,exp:'再见 = tạm biệt, nói khi chia tay.'},
   ]},
  {audio:'七，八，九，十！',
   questions:[
     {q:'Số cuối cùng bạn nghe là số mấy?',opts:['七','十','九'],ans:1,exp:'Đoạn nghe đếm 7, 8, 9, 10 — số cuối là 十 (10).'},
   ]},
  {audio:'四，五，六，七。',
   questions:[
     {q:'Số nào KHÔNG có trong đoạn nghe?',opts:['五','七','三'],ans:2,exp:'Đoạn nghe có 4, 5, 6, 7; không có 三 (3).'},
   ]},
];
