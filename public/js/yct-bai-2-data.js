// ══════════════════════════════════════════
// DATA — YCT Bài 2: 你叫什么？
// ══════════════════════════════════════════
var vocabData = [
  {n:1,zh:'我',py:'wǒ',pos:'Đại từ',vn:'tôi, tớ, mình', hv: 'ngã',em:'🙋',lesson:1,
   ex_zh:'我叫乐乐。',ex_py:'Wǒ jiào Lèle.',ex_vn:'Mình tên là Lạc Lạc.',
   exList:[{zh:'我叫乐乐。',py:'Wǒ jiào Lèle.',vn:'Mình tên là Lạc Lạc.'},{zh:'我叫明明。',py:'Wǒ jiào Míngming.',vn:'Tớ tên là Minh Minh.'}],
   hanzi:[
     {c:'我',p:'wǒ',type:'独体字 · Chữ đơn',st:7,ord:'丿→𠄌→一→一→丿→㇂→戈',rad:'戈 (qua, biến thể)',mean:'tôi, tớ, mình',
      tip:'Chữ cổ là hình vũ khí có răng cưa, người cầm nó tự xưng mình là chủ → TÔI.',
      cf:'找 (zhǎo – "tìm")',w:'我叫 / 我是'},
   ]},
  {n:2,zh:'叫',py:'jiào',pos:'Động từ',vn:'gọi, tên là', hv: 'khiếu',em:'📛',lesson:1,
   ex_zh:'她叫甜甜。',ex_py:'Tā jiào Tiántian.',ex_vn:'Bạn ấy tên là Điềm Điềm.',
   exList:[
     {zh:'她叫甜甜。',py:'Tā jiào Tiántian.',vn:'Bạn ấy tên là Điềm Điềm.'},
     {zh:'你叫乐乐吗？',py:'Nǐ jiào Lèle ma?',vn:'Bạn tên là Lạc Lạc à?'},
   ],
   hanzi:[
     {c:'叫',p:'jiào',type:'左右结构 · Trái-phải',st:5,ord:'口(khẩu) trái → 니(biến thể) phải',rad:'口 (khẩu – miệng)',mean:'gọi, tên là',
      tip:'口(miệng) dùng để GỌI TÊN ai đó.',
      cf:'纠 (jiū – "vướng, rối")',w:'我叫'},
   ]},
  {n:3,zh:'什么',py:'shénme',pos:'Đại từ',vn:'cái gì, gì', hv: 'thập ma',em:'❓',lesson:1,
   ex_zh:'你叫什么？',ex_py:'Nǐ jiào shénme?',ex_vn:'Bạn tên gì?',
   exList:[{zh:'你叫什么？',py:'Nǐ jiào shénme?',vn:'Bạn tên gì?'},{zh:'你好！你叫什么？',py:'Nǐ hǎo! Nǐ jiào shénme?',vn:'Chào bạn! Bạn tên là gì?'}],
   hanzi:[
     {c:'什',p:'shén',type:'左右结构 · Trái-phải',st:4,ord:'亻(nhân) trái → 十(thập) phải',rad:'亻 (nhân – người)',mean:'gì (trong 什么)',
      tip:'亻(người) + 十(số mười, chỉ nhiều loại) → hỏi về NHIỀU THỨ.',
      cf:'汁 (zhī – "nước ép")',w:'什么'},
     {c:'么',p:'me',type:'独体字 · Chữ đơn',st:3,ord:'ノ→𠃌→ㄥ',rad:'丿 (biến thể)',mean:'trợ từ nghi vấn (trong 什么)',
      tip:'Ghép sau 什 để tạo thành từ hỏi CÁI GÌ.',
      cf:'幺 (yāo – "nhỏ, non")',w:'什么'},
   ]},
  {n:4,zh:'认识',py:'rènshi',pos:'Động từ',vn:'quen, biết', hv: 'nhận thức',em:'🤝',lesson:1,
   ex_zh:'认识你，很高兴！',ex_py:'Rènshi nǐ, hěn gāoxìng!',ex_vn:'Quen được bạn, mình vui lắm!',
   exList:[{zh:'认识你，很高兴！',py:'Rènshi nǐ, hěn gāoxìng!',vn:'Quen được bạn, mình vui lắm!'},{zh:'我认识她。',py:'Wǒ rènshi tā.',vn:'Tớ quen bạn ấy.'}],
   hanzi:[
     {c:'认',p:'rèn',type:'左右结构 · Trái-phải',st:4,ord:'讠(ngôn) trái → 人(biến thể) phải',rad:'讠 (ngôn – lời nói)',mean:'nhận, nhận biết',
      tip:'讠(lời nói) + 人(người) → dùng lời NHẬN RA một người.',
      cf:'队 (duì – "đội, hàng")',w:'认识'},
     {c:'识',p:'shí',type:'左右结构 · Trái-phải',st:7,ord:'讠(ngôn) trái → 只(biến thể) phải',rad:'讠 (ngôn – lời nói)',mean:'biết, hiểu biết',
      tip:'讠(lời nói) + 只(phân biệt) → dùng lời PHÂN BIỆT, HIỂU BIẾT.',
      cf:'职 (zhí – "chức vụ")',w:'认识'},
   ]},
  {n:5,zh:'很',py:'hěn',pos:'Phó từ',vn:'rất', hv: 'ngận',em:'📈',lesson:1,
   ex_zh:'我很好。',ex_py:'Wǒ hěn hǎo.',ex_vn:'Mình rất khỏe.',
   exList:[
     {zh:'我很好。',py:'Wǒ hěn hǎo.',vn:'Mình rất khỏe.'},
     {zh:'老师很好。',py:'Lǎoshī hěn hǎo.',vn:'Cô giáo rất tốt.'},
   ],
   hanzi:[
     {c:'很',p:'hěn',type:'左右结构 · Trái-phải',st:9,ord:'彳(sách) trái → 艮(cấn) phải',rad:'彳 (sách – bước ngắn)',mean:'rất',
      tip:'彳(bước đi) + 艮(dừng lại, cứng) → nhấn mạnh mức độ = RẤT.',
      cf:'狠 (hěn – "hung dữ")',w:'很高兴'},
   ]},
  {n:6,zh:'高兴',py:'gāoxìng',pos:'Tính từ',vn:'vui, phấn khởi', hv: 'cao hứng',em:'😄',lesson:1,
   ex_zh:'我很高兴！',ex_py:'Wǒ hěn gāoxìng!',ex_vn:'Mình rất vui!',
   exList:[
     {zh:'我很高兴！',py:'Wǒ hěn gāoxìng!',vn:'Mình rất vui!'},
     {zh:'你高兴吗？',py:'Nǐ gāoxìng ma?',vn:'Con có vui không?'},
   ],
   hanzi:[
     {c:'高',p:'gāo',type:'独体字 · Tượng hình',st:10,ord:'亠→口→冂→口',rad:'高 (cao – tự thành bộ)',mean:'cao',
      tip:'Hình một toà lầu nhiều tầng cao vút → CAO; 高兴 = "hứng thú dâng cao" = VUI.',
      cf:'亭 (tíng – "cái đình")',w:'高兴'},
     {c:'兴',p:'xìng',type:'独体字 · Chữ đơn',st:6,ord:'丷(biến thể) → 一→八(biến thể)',rad:'八 (bát, biến thể)',mean:'hứng thú, phấn chấn',
      tip:'Hình nhiều bàn tay cùng nâng một vật lên → cùng nhau PHẤN KHỞI.',
      cf:'共 (gòng – "cùng")',w:'高兴'},
   ]},
  {n:7,zh:'她',py:'tā',pos:'Đại từ',vn:'cô ấy, bạn ấy', hv: 'tha',em:'👧',lesson:2,
   ex_zh:'她叫什么？',ex_py:'Tā jiào shénme?',ex_vn:'Bạn ấy tên là gì?',
   exList:[
     {zh:'她叫什么？',py:'Tā jiào shénme?',vn:'Bạn ấy tên là gì?'},
     {zh:'我不认识她。',py:'Wǒ bú rènshi tā.',vn:'Tớ không quen bạn ấy.'},
   ],
   hanzi:[
     {c:'她',p:'tā',type:'左右结构 · Trái-phải',st:6,ord:'女(nữ) trái → 也(dã) phải',rad:'女 (nữ – con gái)',mean:'cô ấy, bạn ấy',
      tip:'女(nữ giới) + 也(đại từ cổ) → chỉ NGƯỜI NỮ đang được nhắc đến.',
      cf:'姐 (jiě – "chị gái")',w:'她是谁'},
   ]},
  {n:8,zh:'吗',py:'ma',pos:'Trợ từ',vn:'trợ từ tạo câu hỏi Có/Không', hv: 'ma',em:'❔',lesson:2,
   ex_zh:'你认识她吗？',ex_py:'Nǐ rènshi tā ma?',ex_vn:'Bạn có quen cô ấy không?',
   exList:[{zh:'你认识她吗？',py:'Nǐ rènshi tā ma?',vn:'Bạn có quen cô ấy không?'},{zh:'你好吗？',py:'Nǐ hǎo ma?',vn:'Bạn có khỏe không?'}],
   hanzi:[
     {c:'吗',p:'ma',type:'左右结构 · Trái-phải',st:6,ord:'口(khẩu) trái → 马(mã) phải',rad:'口 (khẩu – miệng)',mean:'trợ từ tạo câu hỏi',
      tip:'口(miệng) phát âm hỏi, mượn âm 马(ngựa) làm ký hiệu ngữ âm.',
      cf:'妈 (mā – "mẹ")',w:'你认识她吗'},
   ]},
  {n:9,zh:'不',py:'bù',pos:'Phó từ',vn:'không, chẳng', hv: 'bất',em:'🚫',lesson:2,
   ex_zh:'不认识。',ex_py:'Bú rènshi.',ex_vn:'Mình không quen.',
   exList:[{zh:'不认识。',py:'Bú rènshi.',vn:'Mình không quen.'},{zh:'我不叫乐乐，我叫明明。',py:'Wǒ bú jiào Lèle, wǒ jiào Míngming.',vn:'Tớ không tên là Lạc Lạc, tớ tên là Minh Minh.'}],
   hanzi:[
     {c:'不',p:'bù / bú',type:'独体字 · Chữ đơn',st:4,ord:'一→丨→㇒→丶',rad:'一 (nhất)',mean:'không, chẳng',
      tip:'Nét ngang trên cùng như bức tường CHẶN LẠI → PHỦ ĐỊNH.',
      cf:'布 (bù – "vải")',w:'不认识'},
   ]},
];

var wuData = [
  {img:'🙋',label:'我',py:'wǒ',letter:'A'},
  {img:'📛',label:'叫',py:'jiào',letter:'B'},
  {img:'🤝',label:'认识',py:'rènshi',letter:'C'},
  {img:'😄',label:'高兴',py:'gāoxìng',letter:'D'},
  {img:'👧',label:'她',py:'tā',letter:'E'},
  {img:'🚫',label:'不',py:'bù',letter:'F'},
];

var dialogData = [
  {scene:'Làm quen bạn mới',
   lines:[
     {sp:0,zh:'你好！我叫乐乐，你叫什么？',py:'Nǐ hǎo! Wǒ jiào Lèle, nǐ jiào shénme?',vn:'Chào bạn! Mình tên là Lạc Lạc, bạn tên gì?'},
     {sp:1,zh:'我叫甜甜。',py:'Wǒ jiào Tiántian.',vn:'Mình tên là Điềm Điềm.'},
     {sp:0,zh:'认识你，很高兴！',py:'Rènshi nǐ, hěn gāoxìng!',vn:'Quen được bạn, mình vui lắm!'},
   ]},
  {scene:'Hỏi về một bạn khác',
   lines:[
     {sp:1,zh:'你认识她吗？',py:'Nǐ rènshi tā ma?',vn:'Bạn có quen cô ấy không?'},
     {sp:0,zh:'不认识。',py:'Bú rènshi.',vn:'Mình không quen.'},
   ]},
  {scene:'Giới thiệu bạn thân',
   lines:[
     {sp:0,zh:'我叫甜甜。你叫什么？',py:'Wǒ jiào Tiántian. Nǐ jiào shénme?',vn:'Mình tên Điềm Điềm. Bạn tên gì?'},
     {sp:1,zh:'我叫明明。认识你很高兴！',py:'Wǒ jiào Míngming. Rènshi nǐ hěn gāoxìng!',vn:'Mình tên Minh Minh. Quen được bạn mình rất vui!'},
   ]},
];

// Điền từ — tình huống làm quen bạn mới
var fillData = [
  {pre:'Con giới thiệu tên mình với bạn mới: “我',blank:'叫',post:'明明。”',hint:'(tên là)',ans:'叫',exp:'Nói tên mình: 我 + 叫 + tên → 我叫明明.'},
  {pre:'Gặp lại cô giáo sau kì nghỉ hè, con hỏi thăm: “老师好',blank:'吗',post:'？”',hint:'(chữ hỏi cuối câu)',ans:'吗',exp:'Thêm 吗 vào cuối câu để hỏi Có/Không: 老师好吗？ = Cô có khỏe không ạ?'},
  {pre:'Mẹ hỏi con thấy cô giáo mới thế nào. Con nói: “老师',blank:'很',post:'好！”',hint:'(rất)',ans:'很',exp:'很 (rất) đứng trước 好: 老师很好 = cô rất tốt.'},
  {pre:'Thấy bạn cười rất tươi, con hỏi: “你很',blank:'高兴',post:'吗？”',hint:'(vui)',ans:'高兴',exp:'你很高兴吗？ = Bạn đang vui lắm à?'},
  {pre:'Bạn hỏi con có quen bạn gái kia không. Con lắc đầu: “',blank:'不',post:'认识。”',hint:'(không)',ans:'不',exp:'不 đứng trước 认识: 不认识 = không quen.'},
  {pre:'Con kể với mẹ: Minh Minh quen bạn gái mới đó. “明明认识',blank:'她',post:'。”',hint:'(bạn ấy — bạn gái)',ans:'她',exp:'她 dùng cho bạn gái: 明明认识她 = Minh Minh quen bạn ấy.'},
  {pre:'Ở cổng trường, bạn hỏi con có quen cô giáo kia không. Con gật đầu: “我',blank:'认识',post:'老师。”',hint:'(quen)',ans:'认识',exp:'我认识老师 = mình quen cô giáo; 认识 đứng giữa 我 và 老师.'},
];

// Sắp xếp — câu làm quen & hỏi thăm
var sortData = [
  {words:['老师','认识','你','吗','？'],ans:'老师认识你吗？',audio:'老师认识你吗？'},
  {words:['乐乐','不','认识','你','。'],ans:'乐乐不认识你。',audio:'乐乐不认识你。'},
  {words:['甜甜','，','你','高兴','吗','？'],ans:'甜甜，你高兴吗？',audio:'甜甜，你高兴吗？'},
];

var matchData = [
  {left:'老师好！',right:'你好！'},
  {left:'你认识乐乐吗？',right:'不认识。'},
  {left:'她叫什么？',right:'她叫甜甜。'},
  {left:'你认识我吗？',right:'认识，你叫甜甜！'},
  {left:'老师高兴吗？',right:'老师很高兴！'},
  {left:'乐乐，再见！',right:'明明，再见！'},
];

// Trắc nghiệm — không audio
var mcData = [
  {q:'Bạn mới đến lớp, con muốn hỏi tên bạn ấy. Câu đúng là:',opts:['你叫什么？','你叫什么吗？','你什么叫？','什么你叫？'],ans:0,exp:'Đã có 什么 để hỏi thì không thêm 吗; 什么 đứng sau 叫.'},
  {q:'Mẹ hỏi con có quen cô giáo mới không. Con quen cô. Con đáp:',opts:['认识。','不认识。','认识吗？','认识不。'],ans:0,exp:'Đáp ngắn bằng chính động từ: 认识 = có quen; 不认识 = không quen.'},
  {q:'Bạn gọi nhầm con là Minh Minh. Con đáp:',opts:['不，我不叫明明。','不，我叫明明。','我叫明明吗？','不，我不明明。'],ans:0,exp:'不 đứng trước 叫: 我不叫明明 = mình không tên là Minh Minh.'},
  {q:'Mẹ hỏi bạn gái kia có quen con không. Bạn ấy không quen con. Con nói:',opts:['她不认识我。','她认识不我。','不她认识我。','她不认识我吗。'],ans:0,exp:'不 đứng ngay trước động từ 认识: 她不认识我.'},
  {q:'Con muốn hỏi bạn có phải tên là Lạc Lạc không:',opts:['你叫乐乐吗？','你吗叫乐乐？','你叫乐乐什么？','吗你叫乐乐？'],ans:0,exp:'吗 luôn đứng ở cuối câu hỏi Có/Không: 你叫乐乐吗？'},
  {q:'Con kể với bố về bạn gái mới: “Bạn ấy rất tốt.”',opts:['她很好。','她好很。','很她好。','她很好吗。'],ans:0,exp:'很 đứng trước tính từ: 她很好. Nói 她好很 là theo kiểu "tốt lắm" của tiếng Việt.'},
  {q:'Hết giờ, Minh Minh vẫy tay: “乐乐，再见！” Lạc Lạc đáp:',opts:['明明，再见！','明明，你好！','再见明明吗？','我叫明明！'],ans:0,exp:'Bạn chào tạm biệt thì đáp lại 再见 và gọi tên bạn.'},
];

var speakingData = {
  t1:{
    intro:'Nhấn nút loa nghe từng câu mẫu, đọc to theo cho tới khi trôi chảy nhé!',
    models:[
      {zh:'你好！我叫乐乐。',py:'Nǐ hǎo! Wǒ jiào Lèle.',vn:'Chào bạn! Mình tên là Lạc Lạc.'},
      {zh:'认识你，很高兴！',py:'Rènshi nǐ, hěn gāoxìng!',vn:'Quen được bạn, mình vui lắm!'},
      {zh:'你认识她吗？',py:'Nǐ rènshi tā ma?',vn:'Bạn có quen cô ấy không?'},
    ],
  },
  t2:{
    intro:'Dùng khung câu cho sẵn, thay thế phần gạch chân bằng từ trong ô gợi ý. Nhấn nút loa để nghe rồi nói to mỗi câu con tạo được.',
    drills:[
      {frame:'我不认识＿＿。',frame_py:'Wǒ bú rènshi ___.',vn:'Mình không quen ＿＿.',options:['她','老师'],samples:['我不认识她。','我不认识老师。']},
    ],
  },
  t3:{
    intro:'Không nhìn câu mẫu, con hãy tưởng tượng mình đang ở trong tình huống thật và tự nói câu phù hợp nhé!',
    tasks:[
      {role:'🙋 Tình huống 1 — Làm quen trong lớp',
       guide:'Ngày đầu đi học, con chào cô giáo rồi nói tên mình.',
       structure:['老师好！','我叫……'],
       sample:'老师好！我叫甜甜。',
       sample_vn:'Con chào cô ạ! Con tên là Điềm Điềm.',
       note:'Chào trước, nói tên sau: 我 + 叫 + tên của con.'},
      {role:'👋 Tình huống 2 — Hỏi thăm bạn',
       guide:'Sáng nay con gặp bạn thân ở cổng trường. Gọi tên bạn và hỏi bạn có khỏe không.',
       structure:['……，你好吗？'],
       sample:'明明，你好吗？',
       sample_vn:'Minh Minh, bạn khỏe không?',
       note:'Thêm 吗 vào cuối câu là thành câu hỏi Có/Không.'},
      {role:'😄 Tình huống 3 — Con đang rất vui',
       guide:'Hôm nay con được cô khen. Về nhà, con nói với mẹ là con rất vui.',
       structure:['我很……！'],
       sample:'我很高兴！',
       sample_vn:'Con vui lắm!',
       note:'很 đứng trước tính từ: 很 + 高兴 / 很 + 好.'},
    ],
  },
};

// ══════════════════════════════════════════
// LUYỆN DỊCH (Việt→Trung) — câu ví dụ của chính bài này
// ══════════════════════════════════════════
var translateData = [
  {vi:"Minh Minh tốt lắm.", zh:"明明很好。", py:"Míngming hěn hǎo."},
  {vi:"Mình khỏe lắm!", zh:"我很好！", py:"Wǒ hěn hǎo!"},
];

// ══════════════════════════════════════════
// LUYỆN DỊCH (Trung→Việt) — lời thoại trong bài, khác chiều Việt→Trung
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:"Bạn giỏi lắm!", zh:"你很好！", py:"Nǐ hěn hǎo!"},
  {vi:"Chào Lạc Lạc! Chào Điềm Điềm!", zh:"乐乐，你好！甜甜，你好！", py:"Lèle, nǐ hǎo! Tiántian, nǐ hǎo!"},
];

// ══════════════════════════════════════════
// LUYỆN NGHE — đoạn nghe ngắn (đọc bằng giọng máy), chỉ dùng từ đã học
// ══════════════════════════════════════════
var listenData = [
  {audio:'甜甜好吗？很好！',
   questions:[
     {q:'Người nói hỏi gì về Điềm Điềm?',opts:['Bạn ấy tên là gì','Bạn ấy có khỏe không','Bạn ấy có quen cô giáo không'],ans:1,exp:'甜甜好吗 = Điềm Điềm có khỏe không.'},
   ]},
  {audio:'明明认识老师吗？认识。',
   questions:[
     {q:'Minh Minh có quen cô giáo không?',opts:['Không quen','Có quen','Không nói'],ans:1,exp:'Câu trả lời 认识 = có quen.'},
   ]},
  {audio:'乐乐认识甜甜，不认识明明。',
   questions:[
     {q:'Lạc Lạc quen ai?',opts:['甜甜','明明','Cả hai bạn'],ans:0,exp:'乐乐认识甜甜 = Lạc Lạc quen Điềm Điềm.'},
     {q:'Lạc Lạc không quen ai?',opts:['甜甜','明明','Cô giáo'],ans:1,exp:'不认识明明 = không quen Minh Minh.'},
   ]},
  {audio:'老师，再见！明明，再见！',
   questions:[
     {q:'Bạn nhỏ đang làm gì?',opts:['Hỏi tên cô và bạn','Chào hỏi khi mới gặp','Chào tạm biệt cô và bạn'],ans:2,exp:'再见 = tạm biệt; bạn nhỏ chào cô giáo và Minh Minh.'},
   ]},
];
