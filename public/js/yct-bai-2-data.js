// ══════════════════════════════════════════
// DATA — YCT Bài 2: 你叫什么？
// ══════════════════════════════════════════
const vocabData = [
  {n:1,zh:'我',py:'wǒ',pos:'Đại từ',vn:'tôi, tớ, mình',em:'🙋',lesson:1,
   ex_zh:'我叫乐乐。',ex_py:'Wǒ jiào Lèle.',ex_vn:'Mình tên là Lạc Lạc.',
   exList:[{zh:'我叫乐乐。',py:'Wǒ jiào Lèle.',vn:'Mình tên là Lạc Lạc.'}],
   hanzi:[
     {c:'我',p:'wǒ',type:'独体字 · Chữ đơn',st:7,ord:'丿→𠄌→一→一→丿→㇂→戈',rad:'戈 (qua, biến thể)',mean:'tôi, tớ, mình',
      tip:'Chữ cổ là hình vũ khí có răng cưa, người cầm nó tự xưng mình là chủ → TÔI.',
      cf:'找 (zhǎo – "tìm")',w:'我叫 / 我是'},
   ]},
  {n:2,zh:'叫',py:'jiào',pos:'Động từ',vn:'gọi, tên là',em:'📛',lesson:1,
   ex_zh:'你叫什么？',ex_py:'Nǐ jiào shénme?',ex_vn:'Bạn tên gì?',
   exList:[{zh:'你叫什么？',py:'Nǐ jiào shénme?',vn:'Bạn tên gì?'}],
   hanzi:[
     {c:'叫',p:'jiào',type:'左右结构 · Trái-phải',st:5,ord:'口(khẩu) trái → 니(biến thể) phải',rad:'口 (khẩu – miệng)',mean:'gọi, tên là',
      tip:'口(miệng) dùng để GỌI TÊN ai đó.',
      cf:'纠 (jiū – "vướng, rối")',w:'我叫'},
   ]},
  {n:3,zh:'什么',py:'shénme',pos:'Đại từ',vn:'cái gì, gì',em:'❓',lesson:1,
   ex_zh:'你叫什么？',ex_py:'Nǐ jiào shénme?',ex_vn:'Bạn tên gì?',
   exList:[{zh:'你叫什么？',py:'Nǐ jiào shénme?',vn:'Bạn tên gì?'}],
   hanzi:[
     {c:'什',p:'shén',type:'左右结构 · Trái-phải',st:4,ord:'亻(nhân) trái → 十(thập) phải',rad:'亻 (nhân – người)',mean:'gì (trong 什么)',
      tip:'亻(người) + 十(số mười, chỉ nhiều loại) → hỏi về NHIỀU THỨ.',
      cf:'汁 (zhī – "nước ép")',w:'什么'},
     {c:'么',p:'me',type:'独体字 · Chữ đơn',st:3,ord:'ノ→𠃌→ㄥ',rad:'丿 (biến thể)',mean:'trợ từ nghi vấn (trong 什么)',
      tip:'Ghép sau 什 để tạo thành từ hỏi CÁI GÌ.',
      cf:'幺 (yāo – "nhỏ, non")',w:'什么'},
   ]},
  {n:4,zh:'认识',py:'rènshi',pos:'Động từ',vn:'quen, biết',em:'🤝',lesson:1,
   ex_zh:'认识你，很高兴！',ex_py:'Rènshi nǐ, hěn gāoxìng!',ex_vn:'Quen được bạn, mình vui lắm!',
   exList:[{zh:'认识你，很高兴！',py:'Rènshi nǐ, hěn gāoxìng!',vn:'Quen được bạn, mình vui lắm!'}],
   hanzi:[
     {c:'认',p:'rèn',type:'左右结构 · Trái-phải',st:4,ord:'讠(ngôn) trái → 人(biến thể) phải',rad:'讠 (ngôn – lời nói)',mean:'nhận, nhận biết',
      tip:'讠(lời nói) + 人(người) → dùng lời NHẬN RA một người.',
      cf:'队 (duì – "đội, hàng")',w:'认识'},
     {c:'识',p:'shí',type:'左右结构 · Trái-phải',st:7,ord:'讠(ngôn) trái → 只(biến thể) phải',rad:'讠 (ngôn – lời nói)',mean:'biết, hiểu biết',
      tip:'讠(lời nói) + 只(phân biệt) → dùng lời PHÂN BIỆT, HIỂU BIẾT.',
      cf:'职 (zhí – "chức vụ")',w:'认识'},
   ]},
  {n:5,zh:'很',py:'hěn',pos:'Phó từ',vn:'rất',em:'📈',lesson:1,
   ex_zh:'认识你，很高兴！',ex_py:'Rènshi nǐ, hěn gāoxìng!',ex_vn:'Quen được bạn, mình vui lắm!',
   exList:[{zh:'认识你，很高兴！',py:'Rènshi nǐ, hěn gāoxìng!',vn:'Quen được bạn, mình vui lắm!'}],
   hanzi:[
     {c:'很',p:'hěn',type:'左右结构 · Trái-phải',st:9,ord:'彳(sách) trái → 艮(cấn) phải',rad:'彳 (sách – bước ngắn)',mean:'rất',
      tip:'彳(bước đi) + 艮(dừng lại, cứng) → nhấn mạnh mức độ = RẤT.',
      cf:'狠 (hěn – "hung dữ")',w:'很高兴'},
   ]},
  {n:6,zh:'高兴',py:'gāoxìng',pos:'Tính từ',vn:'vui, phấn khởi',em:'😄',lesson:1,
   ex_zh:'认识你，很高兴！',ex_py:'Rènshi nǐ, hěn gāoxìng!',ex_vn:'Quen được bạn, mình vui lắm!',
   exList:[{zh:'认识你，很高兴！',py:'Rènshi nǐ, hěn gāoxìng!',vn:'Quen được bạn, mình vui lắm!'}],
   hanzi:[
     {c:'高',p:'gāo',type:'独体字 · Tượng hình',st:10,ord:'亠→口→冂→口',rad:'高 (cao – tự thành bộ)',mean:'cao',
      tip:'Hình một toà lầu nhiều tầng cao vút → CAO; 高兴 = "hứng thú dâng cao" = VUI.',
      cf:'亭 (tíng – "cái đình")',w:'高兴'},
     {c:'兴',p:'xìng',type:'独体字 · Chữ đơn',st:6,ord:'丷(biến thể) → 一→八(biến thể)',rad:'八 (bát, biến thể)',mean:'hứng thú, phấn chấn',
      tip:'Hình nhiều bàn tay cùng nâng một vật lên → cùng nhau PHẤN KHỞI.',
      cf:'共 (gòng – "cùng")',w:'高兴'},
   ]},
  {n:7,zh:'她',py:'tā',pos:'Đại từ',vn:'cô ấy, bạn ấy',em:'👧',lesson:2,
   ex_zh:'你认识她吗？',ex_py:'Nǐ rènshi tā ma?',ex_vn:'Bạn có quen cô ấy không?',
   exList:[{zh:'你认识她吗？',py:'Nǐ rènshi tā ma?',vn:'Bạn có quen cô ấy không?'}],
   hanzi:[
     {c:'她',p:'tā',type:'左右结构 · Trái-phải',st:6,ord:'女(nữ) trái → 也(dã) phải',rad:'女 (nữ – con gái)',mean:'cô ấy, bạn ấy',
      tip:'女(nữ giới) + 也(đại từ cổ) → chỉ NGƯỜI NỮ đang được nhắc đến.',
      cf:'姐 (jiě – "chị gái")',w:'她是谁'},
   ]},
  {n:8,zh:'吗',py:'ma',pos:'Trợ từ',vn:'trợ từ tạo câu hỏi Có/Không',em:'❔',lesson:2,
   ex_zh:'你认识她吗？',ex_py:'Nǐ rènshi tā ma?',ex_vn:'Bạn có quen cô ấy không?',
   exList:[{zh:'你认识她吗？',py:'Nǐ rènshi tā ma?',vn:'Bạn có quen cô ấy không?'}],
   hanzi:[
     {c:'吗',p:'ma',type:'左右结构 · Trái-phải',st:6,ord:'口(khẩu) trái → 马(mã) phải',rad:'口 (khẩu – miệng)',mean:'trợ từ tạo câu hỏi',
      tip:'口(miệng) phát âm hỏi, mượn âm 马(ngựa) làm ký hiệu ngữ âm.',
      cf:'妈 (mā – "mẹ")',w:'你认识她吗'},
   ]},
  {n:9,zh:'不',py:'bù',pos:'Phó từ',vn:'không, chẳng',em:'🚫',lesson:2,
   ex_zh:'不认识。',ex_py:'Bú rènshi.',ex_vn:'Mình không quen.',
   exList:[{zh:'不认识。',py:'Bú rènshi.',vn:'Mình không quen.'}],
   hanzi:[
     {c:'不',p:'bù / bú',type:'独体字 · Chữ đơn',st:4,ord:'一→丨→㇒→丶',rad:'一 (nhất)',mean:'không, chẳng',
      tip:'Nét ngang trên cùng như bức tường CHẶN LẠI → PHỦ ĐỊNH.',
      cf:'布 (bù – "vải")',w:'不认识'},
   ]},
];

const wuData = [
  {img:'🙋',label:'我',py:'wǒ',letter:'A'},
  {img:'📛',label:'叫',py:'jiào',letter:'B'},
  {img:'🤝',label:'认识',py:'rènshi',letter:'C'},
  {img:'😄',label:'高兴',py:'gāoxìng',letter:'D'},
  {img:'👧',label:'她',py:'tā',letter:'E'},
  {img:'🚫',label:'不',py:'bù',letter:'F'},
];

const dialogData = [
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
const fillData = [
  {pre:'Con hỏi tên bạn mới: “你',blank:'叫',post:'什么？”',hint:'(gọi, tên là)',ans:'叫'},
  {pre:'Con giới thiệu tên mình: “',blank:'我',post:'叫甜甜。”',hint:'(tôi, tớ)',ans:'我'},
  {pre:'Con nói vui khi quen bạn mới: “认识你，',blank:'很',post:'高兴！”',hint:'(rất)',ans:'很'},
  {pre:'Con nói mình rất vui: “我很',blank:'高兴',post:'！”',hint:'(vui, phấn khởi)',ans:'高兴'},
  {pre:'Con hỏi có quen một bạn nữ không: “你认识',blank:'她',post:'吗？”',hint:'(cô ấy, bạn ấy)',ans:'她'},
  {pre:'Con tạo câu hỏi Có/Không: “你叫乐乐',blank:'吗',post:'？”',hint:'(trợ từ hỏi)',ans:'吗'},
  {pre:'Con phủ định là không quen: “',blank:'不',post:'认识。”',hint:'(không, chẳng)',ans:'不'},
  {pre:'Con xác nhận là mình quen: “我',blank:'认识',post:'她。”',hint:'(quen, biết)',ans:'认识'},
];

// Sắp xếp — câu làm quen & hỏi thăm
const sortData = [
  {words:['我','叫','乐乐','。'],ans:'我叫乐乐。',audio:'我叫乐乐。'},
  {words:['你','叫','什么','？'],ans:'你叫什么？',audio:'你叫什么？'},
  {words:['认识','你','，','很','高兴','！'],ans:'认识你，很高兴！',audio:'认识你，很高兴！'},
  {words:['你','认识','她','吗','？'],ans:'你认识她吗？',audio:'你认识她吗？'},
  {words:['我','不','认识','。'],ans:'我不认识。',audio:'我不认识。'},
  {words:['我','叫','甜甜','，','你','叫','什么','？'],ans:'我叫甜甜，你叫什么？',audio:'我叫甜甜，你叫什么？'},
];

const matchData = [
  {left:'你好！我叫乐乐，你叫什么？',right:'我叫甜甜。'},
  {left:'认识你，很高兴！',right:'认识你，我很高兴！'},
  {left:'你认识她吗？',right:'不认识。'},
  {left:'你好吗？',right:'我很好！'},
  {left:'你叫什么？',right:'我叫明明。'},
];

// Trắc nghiệm — không audio
const mcData = [
  {q:'你＿＿什么？(hỏi tên)',opts:['叫','是','有','在'],ans:0},
  {q:'认识你，＿＿高兴！',opts:['很','不','叫','吗'],ans:0},
  {q:'"高兴" nghĩa là gì?',opts:['vui, phấn khởi','buồn','tức giận','sợ hãi'],ans:0},
  {q:'"认识" nghĩa là gì?',opts:['quen biết','xa lạ','yêu thích','ghét bỏ'],ans:0},
  {q:'"她" dùng để chỉ ai?',opts:['một bạn nữ','một bạn nam','thầy giáo','chính mình'],ans:0},
  {q:'Trợ từ nào đặt cuối câu để tạo câu hỏi Có/Không?',opts:['吗','很','叫','不'],ans:0},
  {q:'Phủ định của "认识" (quen biết) là gì?',opts:['不认识','没认识','别认识','无认识'],ans:0},
  {q:'"什么" nghĩa là gì?',opts:['cái gì, gì','ai','ở đâu','khi nào'],ans:0},
  {q:'"我" nghĩa là gì?',opts:['tôi, tớ, mình','bạn','cô ấy','chúng ta'],ans:0},
  {q:'Câu nào ĐÚNG khi hỏi tên bạn mới?',opts:['你叫什么？','你什么叫？','什么你叫？','叫你什么？'],ans:0},
];

const speakingData = {
  t1:{
    intro:'Nhấn 🔊 nghe từng câu mẫu, đọc to theo cho tới khi trôi chảy nhé!',
    models:[
      {zh:'你好！我叫乐乐，你叫什么？',py:'Nǐ hǎo! Wǒ jiào Lèle, nǐ jiào shénme?',vn:'Chào bạn! Mình tên là Lạc Lạc, bạn tên gì?'},
      {zh:'我叫甜甜。',py:'Wǒ jiào Tiántian.',vn:'Mình tên là Điềm Điềm.'},
      {zh:'认识你，很高兴！',py:'Rènshi nǐ, hěn gāoxìng!',vn:'Quen được bạn, mình vui lắm!'},
      {zh:'你认识她吗？',py:'Nǐ rènshi tā ma?',vn:'Bạn có quen cô ấy không?'},
      {zh:'不认识。',py:'Bú rènshi.',vn:'Mình không quen.'},
    ],
  },
  t2:{
    intro:'Dùng khung câu cho sẵn, thay thế phần gạch chân bằng từ trong ô gợi ý. Nhấn 🔊 để nghe rồi nói to mỗi câu con tạo được.',
    drills:[
      {frame:'我叫＿＿。',frame_py:'Wǒ jiào ___.',vn:'Mình tên là ＿＿.',options:['乐乐','甜甜','明明'],samples:['我叫乐乐。','我叫甜甜。','我叫明明。']},
    ],
  },
  t3:{
    intro:'Không nhìn câu mẫu, con hãy tưởng tượng mình đang ở trong tình huống thật và tự nói câu phù hợp nhé!',
    tasks:[
      {role:'🙋 Tình huống 1 — Làm quen bạn mới trong lớp',
       guide:'Con gặp một bạn mới trong lớp, hãy hỏi tên bạn và giới thiệu tên mình.',
       structure:['你好！我叫＿＿，你叫什么？','我叫＿＿。'],
       sample:'你好！我叫乐乐，你叫什么？我叫甜甜。',
       sample_vn:'Chào bạn! Mình tên là Lạc Lạc, bạn tên gì? Mình tên là Điềm Điềm.',
       note:'Khi làm quen, con nên nói tên mình trước rồi mới hỏi tên bạn — đây là cách làm quen lịch sự và tự nhiên.'},
      {role:'😄 Tình huống 2 — Bày tỏ niềm vui khi quen bạn mới',
       guide:'Sau khi biết tên bạn mới, hãy nói con rất vui vì được quen bạn ấy.',
       structure:['认识你，很高兴！'],
       sample:'认识你，很高兴！',
       sample_vn:'Quen được bạn, mình vui lắm!',
       note:'认识你，很高兴！ là câu nói RẤT PHỔ BIẾN khi làm quen ai đó lần đầu — con nên thuộc lòng câu này.'},
      {role:'❓ Tình huống 3 — Hỏi thăm xem có quen ai đó không',
       guide:'Con muốn biết bạn mình có quen một bạn nữ khác trong lớp không.',
       structure:['你认识她吗？','不认识。'],
       sample:'你认识她吗？不认识。',
       sample_vn:'Bạn có quen cô ấy không? Mình không quen.',
       note:'Thêm 吗 vào cuối câu là cách đơn giản nhất để biến một câu nói thành câu HỎI Có/Không.'},
    ],
  },
};
