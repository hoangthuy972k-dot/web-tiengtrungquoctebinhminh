// ══════════════════════════════════════════
// DATA — HSK1 Bài 3: 你叫什么名字?
// ══════════════════════════════════════════
var vocabData = [
  {n:1,zh:'叫',py:'jiào',pos:'Động từ',vn:'tên là, gọi là',em:'📛',lesson:1,
   ex_zh:'你叫什么名字？',ex_py:'Nǐ jiào shénme míngzi?',ex_vn:'Bạn tên là gì?',
   exList:[
     {zh:'你叫什么名字？',py:'Nǐ jiào shénme míngzi?',vn:'Bạn tên là gì?'},
     {zh:'我叫王芳。',py:'Wǒ jiào Wáng Fāng.',vn:'Tôi tên là Vương Phương.'},
   ],
   hanzi:[
     {c:'叫',p:'jiào',type:'左右结构 · Trái-phải',st:5,ord:'口(khẩu) trái → 니(biến thể) phải',rad:'口 (khẩu – miệng)',mean:'gọi, tên là',
      tip:'口(miệng) dùng để GỌI TÊN ai đó.',
      cf:'纠 (jiū – "vướng, rối")',w:'你叫什么名字'},
   ]},
  {n:2,zh:'什么',py:'shénme',pos:'Đại từ',vn:'cái gì, gì',em:'❓',lesson:1,
   ex_zh:'你叫什么名字？',ex_py:'Nǐ jiào shénme míngzi?',ex_vn:'Bạn tên là gì?',
   exList:[
     {zh:'你叫什么名字？',py:'Nǐ jiào shénme míngzi?',vn:'Bạn tên là gì?'},
   ],
   hanzi:[
     {c:'什',p:'shén',type:'左右结构 · Trái-phải',st:4,ord:'亻(nhân) trái → 十(thập) phải',rad:'亻 (nhân – người)',mean:'gì (trong 什么)',
      tip:'亻(người) + 十(số mười, chỉ nhiều loại) → hỏi về NHIỀU THỨ liên quan tới người, vật.',
      cf:'汁 (zhī – "nước ép")',w:'什么'},
     {c:'么',p:'me',type:'独体字 · Chữ đơn',st:3,ord:'ノ→𠃌→ㄥ',rad:'丿 (phẩy, biến thể)',mean:'trợ từ nghi vấn (trong 什么)',
      tip:'Thường ghép sau 什 để tạo thành từ hỏi CÁI GÌ.',
      cf:'幺 (yāo – "nhỏ, non")',w:'什么 / 怎么'},
   ]},
  {n:3,zh:'名字',py:'míngzi',pos:'Danh từ',vn:'tên',em:'🏷️',lesson:1,
   ex_zh:'你叫什么名字？',ex_py:'Nǐ jiào shénme míngzi?',ex_vn:'Bạn tên là gì?',
   exList:[
     {zh:'你叫什么名字？',py:'Nǐ jiào shénme míngzi?',vn:'Bạn tên là gì?'},
   ],
   hanzi:[
     {c:'名',p:'míng',type:'上下结构 · Trên-dưới',st:6,ord:'夕(tịch) trên → 口(khẩu) dưới',rad:'夕 (tịch – buổi tối)',mean:'tên',
      tip:'夕(trời tối, không nhìn rõ mặt) + 口(miệng gọi) → phải GỌI TÊN mới biết là ai.',
      cf:'各 (gè – "mỗi")',w:'名字'},
     {c:'字',p:'zì',type:'上下结构 · Trên-dưới',st:6,ord:'宀(miên) trên → 子(tử) dưới',rad:'宀 (miên – mái nhà)',mean:'chữ, tên',
      tip:'宀(mái nhà) + 子(con) → con cái sinh ra trong nhà được đặt CHỮ, TÊN.',
      cf:'子 (zǐ – "con")',w:'名字 / 汉字'},
   ]},
  {n:4,zh:'我',py:'wǒ',pos:'Đại từ',vn:'tôi, ta, mình',em:'👤',lesson:1,
   ex_zh:'我叫王芳。',ex_py:'Wǒ jiào Wáng Fāng.',ex_vn:'Tôi tên là Vương Phương.',
   exList:[
     {zh:'我叫王芳。',py:'Wǒ jiào Wáng Fāng.',vn:'Tôi tên là Vương Phương.'},
     {zh:'我是学生。',py:'Wǒ shì xuésheng.',vn:'Tôi là học sinh.'},
   ],
   hanzi:[
     {c:'我',p:'wǒ',type:'独体字 · Chữ đơn',st:7,ord:'丿→𠄌→一→一→丿→㇂→戈',rad:'戈 (qua – cây giáo, biến thể)',mean:'tôi, ta, mình',
      tip:'Chữ cổ vốn là hình vũ khí có răng cưa, người cầm nó tự XƯNG mình là chủ → TÔI.',
      cf:'找 (zhǎo – "tìm")',w:'我 / 我们 / 我是'},
   ]},
  {n:5,zh:'是',py:'shì',pos:'Động từ',vn:'là',em:'✅',lesson:2,
   ex_zh:'我是学生。',ex_py:'Wǒ shì xuésheng.',ex_vn:'Tôi là học sinh.',
   exList:[
     {zh:'我是学生。',py:'Wǒ shì xuésheng.',vn:'Tôi là học sinh.'},
     {zh:'我不是老师，我是学生。',py:'Wǒ bú shì lǎoshī, wǒ shì xuésheng.',vn:'Tôi không phải giáo viên, tôi là học sinh.'},
   ],
   hanzi:[
     {c:'是',p:'shì',type:'上下结构 · Trên-dưới',st:9,ord:'日(nhật) trên → 正(biến thể) dưới',rad:'日 (nhật – mặt trời)',mean:'là, đúng',
      tip:'日(mặt trời) đứng CHÍNH GIỮA bầu trời → biểu thị điều ĐÚNG, khẳng định LÀ.',
      cf:'量 (liàng – "đo lường")',w:'我是 / 不是 / 是吗'},
   ]},
  {n:6,zh:'老师',py:'lǎoshī',pos:'Danh từ',vn:'thầy cô giáo',em:'👩‍🏫',lesson:2,
   ex_zh:'你是老师吗？',ex_py:'Nǐ shì lǎoshī ma?',ex_vn:'Bạn là giáo viên phải không?',
   exList:[
     {zh:'你是老师吗？',py:'Nǐ shì lǎoshī ma?',vn:'Bạn là giáo viên phải không?'},
   ],
   hanzi:[
     {c:'老',p:'lǎo',type:'独体字 · Chữ đơn',st:6,ord:'土→耂→匕(biến thể)',rad:'老 (lão – tự thành bộ)',mean:'già, lão',
      tip:'Hình dáng người già chống gậy, tóc dài → GIÀ; 老师 nghĩa là người thầy đáng kính trọng.',
      cf:'考 (kǎo – "thi cử")',w:'老师'},
     {c:'师',p:'shī',type:'左右结构 · Trái-phải',st:6,ord:'丿→𠂉→帀(biến thể)',rad:'巾 (cân – khăn, biến thể)',mean:'thầy, sư phụ',
      tip:'Người dẫn dắt, chỉ dạy người khác → THẦY, hợp với 老 thành "người thầy đáng kính".',
      cf:'帅 (shuài – "soái, chỉ huy")',w:'老师'},
   ]},
  {n:7,zh:'吗',py:'ma',pos:'Trợ từ',vn:'đặt cuối câu tạo câu hỏi Có/Không',em:'❔',lesson:2,
   ex_zh:'你是老师吗？',ex_py:'Nǐ shì lǎoshī ma?',ex_vn:'Bạn là giáo viên phải không?',
   exList:[
     {zh:'你是老师吗？',py:'Nǐ shì lǎoshī ma?',vn:'Bạn là giáo viên phải không?'},
     {zh:'你是中国人吗？',py:'Nǐ shì Zhōngguó rén ma?',vn:'Bạn là người Trung Quốc phải không?'},
   ],
   hanzi:[
     {c:'吗',p:'ma',type:'左右结构 · Trái-phải',st:6,ord:'口(khẩu) trái → 马(mã) phải',rad:'口 (khẩu – miệng)',mean:'trợ từ tạo câu hỏi',
      tip:'口(miệng) phát ra âm hỏi, mượn âm của 马(ngựa) làm ký hiệu ngữ âm — không liên quan tới nghĩa "ngựa".',
      cf:'妈 (mā – "mẹ", cũng mượn âm 马")',w:'是吗 / 你好吗'},
   ]},
  {n:8,zh:'学生',py:'xuésheng',pos:'Danh từ',vn:'học sinh',em:'🎒',lesson:2,
   ex_zh:'我不是老师，我是学生。',ex_py:'Wǒ bú shì lǎoshī, wǒ shì xuésheng.',ex_vn:'Tôi không phải giáo viên, tôi là học sinh.',
   exList:[
     {zh:'我不是老师，我是学生。',py:'Wǒ bú shì lǎoshī, wǒ shì xuésheng.',vn:'Tôi không phải giáo viên, tôi là học sinh.'},
   ],
   hanzi:[
     {c:'学',p:'xué',type:'上下结构 · Trên-dưới',st:8,ord:'⺍(biến thể) trên → 冖 → 子 dưới',rad:'子 (tử – con, phần dưới)',mean:'học',
      tip:'Hình hai bàn tay che chở đứa trẻ 子(con) đang HỌC dưới mái nhà.',
      cf:'觉 (jué – "cảm thấy")',w:'学生 / 学校 / 学习'},
     {c:'生',p:'shēng',type:'独体字 · Chữ đơn',st:5,ord:'丿→𠂉→⼀→土(biến thể)',rad:'生 (sinh – tự thành bộ)',mean:'sinh ra, sống',
      tip:'Hình cây cỏ mọc lên khỏi mặt đất → SINH RA, SỐNG; 学生 nghĩa là người đang "sinh trưởng" tri thức.',
      cf:'姓 (xìng – "họ")',w:'学生 / 医生 / 先生'},
   ]},
  {n:9,zh:'人',py:'rén',pos:'Danh từ',vn:'người',em:'🧍',lesson:2,
   ex_zh:'我不是中国人，我是美国人。',ex_py:'Wǒ bú shì Zhōngguó rén, wǒ shì Měiguó rén.',ex_vn:'Tôi không phải người Trung Quốc, tôi là người Mỹ.',
   exList:[
     {zh:'我不是中国人，我是美国人。',py:'Wǒ bú shì Zhōngguó rén, wǒ shì Měiguó rén.',vn:'Tôi không phải người Trung Quốc, tôi là người Mỹ.'},
   ],
   hanzi:[
     {c:'人',p:'rén',type:'独体字 · Chữ đơn',st:2,ord:'丿→㇏',rad:'人 (nhân – tự thành bộ)',mean:'người',
      tip:'Hình dáng một người đang đứng nghiêng, hai chân chống đỡ → NGƯỜI.',
      cf:'入 (rù – "vào")',w:'中国人 / 美国人 / 学生'},
   ]},
  {n:10,zh:'中国',py:'Zhōngguó',pos:'Danh từ riêng',vn:'Trung Quốc',em:'🇨🇳',lesson:2,
   ex_zh:'你是中国人吗？',ex_py:'Nǐ shì Zhōngguó rén ma?',ex_vn:'Bạn là người Trung Quốc phải không?',
   exList:[
     {zh:'你是中国人吗？',py:'Nǐ shì Zhōngguó rén ma?',vn:'Bạn là người Trung Quốc phải không?'},
   ],
   hanzi:[
     {c:'中',p:'zhōng',type:'独体字 · Chữ đơn',st:4,ord:'丨(cổn) xuyên qua giữa 口(khẩu)',rad:'丨 (cổn – nét sổ)',mean:'giữa, trung tâm',
      tip:'Một nét thẳng xuyên qua giữa ô vuông → chỉ vị trí TRUNG TÂM, Ở GIỮA.',
      cf:'冲 (chōng – "xông tới")',w:'中国 / 中午'},
     {c:'国',p:'guó',type:'全包围结构 · Bao vây hoàn toàn',st:8,ord:'囗(vi) bao ngoài → 玉(biến thể) bên trong',rad:'囗 (vi – vây quanh)',mean:'nước, quốc gia',
      tip:'囗(tường thành bao quanh) + 玉(ngọc quý bên trong) → lãnh thổ có biên giới bảo vệ báu vật = ĐẤT NƯỚC.',
      cf:'固 (gù – "vững chắc")',w:'中国 / 美国 / 哪国'},
   ]},
  {n:11,zh:'美国',py:'Měiguó',pos:'Danh từ riêng',vn:'nước Mỹ',em:'🇺🇸',lesson:2,
   ex_zh:'我不是中国人，我是美国人。',ex_py:'Wǒ bú shì Zhōngguó rén, wǒ shì Měiguó rén.',ex_vn:'Tôi không phải người Trung Quốc, tôi là người Mỹ.',
   exList:[
     {zh:'我不是中国人，我是美国人。',py:'Wǒ bú shì Zhōngguó rén, wǒ shì Měiguó rén.',vn:'Tôi không phải người Trung Quốc, tôi là người Mỹ.'},
   ],
   hanzi:[
     {c:'美',p:'měi',type:'上下结构 · Trên-dưới',st:9,ord:'⺷(biến thể 羊) trên → 大(đại) dưới',rad:'羊 (dương – con dê, biến thể)',mean:'đẹp, hay',
      tip:'羊(con dê, biểu tượng no đủ) to 大(lớn) → coi là ĐẸP, TỐT LÀNH; dùng làm âm phiên dịch tên nước Mỹ (美国).',
      cf:'羔 (gāo – "cừu con")',w:'美国 / 很美'},
   ]},
];

const wuData = [
  {img:'📛',label:'叫',py:'jiào',letter:'A'},
  {img:'👤',label:'我',py:'wǒ',letter:'B'},
  {img:'👩‍🏫',label:'老师',py:'lǎoshī',letter:'C'},
  {img:'🎒',label:'学生',py:'xuésheng',letter:'D'},
  {img:'🇨🇳',label:'中国',py:'Zhōngguó',letter:'E'},
  {img:'🇺🇸',label:'美国',py:'Měiguó',letter:'F'},
];

const dialogData = [
  {scene:'Ở trường · Hỏi tên',
   lines:[
     {sp:0,zh:'你叫什么名字？',py:'Nǐ jiào shénme míngzi?',vn:'Bạn tên là gì?'},
     {sp:1,zh:'我叫李月。',py:'Wǒ jiào Lǐ Yuè.',vn:'Tôi tên là Lý Nguyệt.'},
   ]},
  {scene:'Trong lớp học · Hỏi nghề nghiệp',
   lines:[
     {sp:0,zh:'你是老师吗？',py:'Nǐ shì lǎoshī ma?',vn:'Bạn là giáo viên phải không?'},
     {sp:1,zh:'我不是老师，我是学生。',py:'Wǒ bú shì lǎoshī, wǒ shì xuésheng.',vn:'Không phải, tôi là học sinh.'},
   ]},
  {scene:'Ở trường · Hỏi quốc tịch',
   lines:[
     {sp:0,zh:'你是中国人吗？',py:'Nǐ shì Zhōngguó rén ma?',vn:'Bạn là người Trung Quốc phải không?'},
     {sp:1,zh:'我不是中国人，我是美国人。',py:'Wǒ bú shì Zhōngguó rén, wǒ shì Měiguó rén.',vn:'Không phải, mình là người Mỹ.'},
   ]},
];

// Điền từ — dùng tên/quốc tịch KHÁC bài khoá để tránh lặp nguyên văn
const fillData = [
  {pre:'Bạn muốn hỏi tên người mới quen: “你',blank:'叫',post:'什么名字？”',hint:'(tên là, gọi là)',ans:'叫'},
  {pre:'Bạn khẳng định mình là học sinh: “我',blank:'是',post:'学生。”',hint:'(là)',ans:'是'},
  {pre:'Bạn phủ định mình không phải giáo viên: “我',blank:'不',post:'是老师。”',hint:'(không, chẳng)',ans:'不'},
  {pre:'Biến câu “你是学生。” thành câu hỏi Có/Không: “你是学生',blank:'吗',post:'？”',hint:'(trợ từ tạo câu hỏi)',ans:'吗'},
  {pre:'Bạn giới thiệu mình là người Mỹ: “我是',blank:'美国',post:'人。”',hint:'(nước Mỹ)',ans:'美国'},
  {pre:'Bạn hỏi người mới quen có phải người Trung Quốc không: “你是',blank:'中国',post:'人吗？”',hint:'(Trung Quốc)',ans:'中国'},
  {pre:'Bạn hỏi ai đó có phải giáo viên không: “你是',blank:'老师',post:'吗？”',hint:'(thầy/cô giáo)',ans:'老师'},
  {pre:'Trả lời bắt đầu bằng đại từ ngôi thứ nhất: “',blank:'我',post:'叫王芳。”',hint:'(tôi, ta)',ans:'我'},
];

// Sắp xếp — đảo vai trò/mục tiêu so với bài khoá (không lặp nguyên văn)
const sortData = [
  {words:['你','叫','什么','名字','？'],ans:'你叫什么名字？',audio:'你叫什么名字？'},
  {words:['我','叫','王芳','。'],ans:'我叫王芳。',audio:'我叫王芳。'},
  {words:['你','是','学生','吗','？'],ans:'你是学生吗？',audio:'你是学生吗？'},
  {words:['我','不','是','学生','，','我','是','老师','。'],ans:'我不是学生，我是老师。',audio:'我不是学生，我是老师。'},
  {words:['你','是','美国','人','吗','？'],ans:'你是美国人吗？',audio:'你是美国人吗？'},
  {words:['我','不','是','美国','人','，','我','是','中国','人','。'],ans:'我不是美国人，我是中国人。',audio:'我不是美国人，我是中国人。'},
];

const matchData = [
  {left:'你叫什么名字？',right:'我叫王芳。'},
  {left:'你是学生吗？',right:'我不是学生，我是老师。'},
  {left:'你是美国人吗？',right:'我不是美国人，我是中国人。'},
  {left:'你是中国人吗？',right:'不是，我是美国人。'},
  {left:'你是老师吗？',right:'不是，我是学生。'},
];

// Trắc nghiệm — trọng tâm ngữ pháp (什么/是-不是/吗), không audio
const mcData = [
  {q:'你叫＿＿名字？',opts:['什么','谁','哪','怎么样'],ans:0},
  {q:'Muốn biến câu trần thuật thành câu hỏi Có/Không, thêm trợ từ nào vào cuối câu?',opts:['吗','呢','吧','了'],ans:0},
  {q:'Câu phủ định của "是" được tạo bằng cách thêm từ nào phía trước?',opts:['不','没','别','很'],ans:0},
  {q:'我＿＿学生，我是老师。',opts:['不是','是','不','没'],ans:0},
  {q:'你是中国人＿＿？ (muốn hỏi lại để xác nhận)',opts:['吗','呢','吧','么'],ans:0},
  {q:'Từ nào dùng để TỰ XƯNG (ngôi thứ nhất)?',opts:['我','你','他','人'],ans:0},
  {q:'"老师" nghĩa là gì?',opts:['thầy/cô giáo','học sinh','người','tên'],ans:0},
  {q:'"学生" nghĩa là gì?',opts:['học sinh','thầy/cô giáo','người Mỹ','người Trung Quốc'],ans:0},
  {q:'Cách nói ĐÚNG khi phủ định "Tôi là người Mỹ" là?',opts:['我不是美国人','我不美国人','我没是美国人','我别是美国人'],ans:0},
  {q:'"名字" nghĩa là gì?',opts:['tên','chữ','người','học sinh'],ans:0},
];

const speakingData = {
  t1:{
    intro:'Nhấn 🔊 nghe từng câu mẫu, đọc to theo cho tới khi trôi chảy.',
    models:[
      {zh:'你叫什么名字？',py:'Nǐ jiào shénme míngzi?',vn:'Bạn tên là gì?'},
      {zh:'我叫王芳。',py:'Wǒ jiào Wáng Fāng.',vn:'Tôi tên là Vương Phương.'},
      {zh:'你是老师吗？',py:'Nǐ shì lǎoshī ma?',vn:'Bạn là giáo viên phải không?'},
      {zh:'我不是老师，我是学生。',py:'Wǒ bú shì lǎoshī, wǒ shì xuésheng.',vn:'Không phải, tôi là học sinh.'},
      {zh:'你是中国人吗？',py:'Nǐ shì Zhōngguó rén ma?',vn:'Bạn là người Trung Quốc phải không?'},
    ],
  },
  t2:{
    intro:'Dùng khung câu cho sẵn, thay thế phần gạch chân bằng từ trong ô gợi ý. Nhấn 🔊 để nghe rồi nói to mỗi câu bạn tạo được.',
    drills:[
      {frame:'你是＿＿吗？',frame_py:'Nǐ shì ___ ma?',vn:'Bạn là ＿＿ phải không?',options:['老师','学生'],samples:['你是老师吗？','你是学生吗？']},
      {frame:'我是＿＿人。',frame_py:'Wǒ shì ___ rén.',vn:'Tôi là người ＿＿.',options:['中国','美国'],samples:['我是中国人。','我是美国人。']},
    ],
  },
  t3:{
    intro:'Không nhìn câu mẫu, hãy tưởng tượng bạn đang ở trong tình huống thực tế và tự nói ra câu phù hợp.',
    tasks:[
      {role:'👋 Tình huống 1 — Làm quen bạn mới',
       guide:'Bạn gặp một bạn học mới trong lớp tiếng Trung. Hãy hỏi tên và tự giới thiệu tên mình.',
       structure:['你叫什么名字？','我叫＿＿。'],
       sample:'你叫什么名字？我叫王芳。',
       sample_vn:'Bạn tên là gì? Tôi tên là Vương Phương.',
       note:'Khi tự giới thiệu, người Trung Quốc thường nói thẳng "我叫..." mà không cần thêm từ đệm nào khác — đây là cách giới thiệu ngắn gọn, tự nhiên nhất.'},
      {role:'🧑‍🏫 Tình huống 2 — Xác minh vai trò của ai đó',
       guide:'Bạn không chắc người trước mặt là giáo viên hay học sinh. Hãy hỏi và nghe câu trả lời.',
       structure:['你是老师吗？','我不是老师，我是＿＿。'],
       sample:'你是老师吗？我不是老师，我是学生。',
       sample_vn:'Bạn là giáo viên phải không? Không phải, tôi là học sinh.',
       note:'Cấu trúc "我不是A，我是B" rất phổ biến trong giao tiếp — vừa phủ định vừa bổ sung thông tin đúng ngay trong một câu, tránh phải hỏi lại.'},
      {role:'🌍 Tình huống 3 — Hỏi thăm quốc tịch',
       guide:'Bạn gặp một người nước ngoài và tò mò muốn biết họ đến từ đâu.',
       structure:['你是中国人吗？','我不是中国人，我是＿＿人。'],
       sample:'你是中国人吗？我不是中国人，我是美国人。',
       sample_vn:'Bạn là người Trung Quốc phải không? Không phải, mình là người Mỹ.',
       note:'Ở HSK1 mới chỉ học cách hỏi bằng 吗 (Có/Không) — cách hỏi mở "bạn là người nước nào" (dùng 哪) sẽ được học ở bài sau.'},
    ],
  },
};
