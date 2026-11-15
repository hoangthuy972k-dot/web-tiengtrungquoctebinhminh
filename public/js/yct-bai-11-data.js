// ══════════════════════════════════════════
// DATA — YCT Bài 11: 我爱吃蛋糕
// ══════════════════════════════════════════
var vocabData = [
  {n:1,zh:'米饭',py:'mǐfàn',pos:'Danh từ',vn:'cơm', hv: 'mễ phạn',em:'🍚',lesson:1,
   ex_zh:'我吃米饭。',ex_py:'Wǒ chī mǐfàn.',ex_vn:'Mình ăn cơm.',
   exList:[{zh:'我吃米饭。',py:'Wǒ chī mǐfàn.',vn:'Mình ăn cơm.'},{zh:'我爱吃米饭。',py:'Wǒ ài chī mǐfàn.',vn:'Tớ rất thích ăn cơm.'}],
   hanzi:[
     {c:'米',p:'mǐ',type:'独体字 · Tượng hình',st:6,ord:'丷(hạt) trên → 十(cây) giữa → 八(hạt) dưới',rad:'米 (mễ – tự thành bộ)',mean:'gạo',
      tip:'Hình vẽ các hạt gạo rải quanh một cây lúa ở giữa → GẠO.',
      cf:'来 (lái – "đến", hình dáng gần giống)',w:'米饭'},
     {c:'饭',p:'fàn',type:'左右结构 · Trái-phải',st:7,ord:'饣(thực) trái → 反(phản) phải',rad:'饣 (thực – ăn)',mean:'cơm',
      tip:'Bộ 饣 chỉ đồ ĂN, ghép với 反 (đọc gần "fan") → CƠM.',
      cf:'反 (fǎn – "trái lại")',w:'米饭'},
   ]},
  {n:2,zh:'面条',py:'miàntiáo',pos:'Danh từ',vn:'mì, bún', hv: 'diện điều',em:'🍜',lesson:1,
   ex_zh:'我也吃面条。',ex_py:'Wǒ yě chī miàntiáo.',ex_vn:'Mình cũng ăn mì.',
   exList:[{zh:'我也吃面条。',py:'Wǒ yě chī miàntiáo.',vn:'Mình cũng ăn mì.'},{zh:'你吃面条吗？',py:'Nǐ chī miàntiáo ma?',vn:'Bạn ăn mì không?'}],
   hanzi:[
     {c:'面',p:'miàn',type:'独体字 · Chữ đơn',st:9,ord:'一(trán) → 囬(giản lược, khuôn mặt)',rad:'面 (diện – tự thành bộ)',mean:'mì, mặt',
      tip:'Hình khuôn mặt được giản lược; sợi mì dẹt như một MẶT PHẲNG nên cũng gọi là 面.',
      cf:'因 (yīn – "vì", khung ngoài gần giống)',w:'面条'},
     {c:'条',p:'tiáo',type:'上下结构 · Trên-dưới',st:7,ord:'夂(giản lược) trên → 木(mộc) dưới',rad:'木 (mộc – gỗ, cây)',mean:'sợi, que',
      tip:'Phía dưới có 木 (cành cây dài mảnh) → chỉ vật DÀI như SỢI mì.',
      cf:'各 (gè – "mỗi")',w:'面条'},
   ]},
  {n:3,zh:'苹果',py:'píngguǒ',pos:'Danh từ',vn:'táo', hv: 'bình quả',em:'🍎',lesson:1,
   ex_zh:'我也爱吃苹果。',ex_py:'Wǒ yě ài chī píngguǒ.',ex_vn:'Mình cũng rất thích ăn táo.',
   exList:[{zh:'我也爱吃苹果。',py:'Wǒ yě ài chī píngguǒ.',vn:'Mình cũng rất thích ăn táo.'},{zh:'这个苹果真大！',py:'Zhège píngguǒ zhēn dà!',vn:'Quả táo này to thật!'}],
   hanzi:[
     {c:'苹',p:'píng',type:'上下结构 · Trên-dưới',st:8,ord:'艹(thảo) trên → 平(bình) dưới',rad:'艹 (thảo – cỏ cây)',mean:'(trong 苹果) táo',
      tip:'Bộ 艹 phía trên vì quả táo mọc ra từ cây → dùng trong từ 苹果 = TÁO.',
      cf:'平 (píng – "bình yên", phần dưới giống)',w:'苹果'},
     {c:'果',p:'guǒ',type:'独体字 · Tượng hình',st:8,ord:'田(quả) trên → 木(cây) dưới',rad:'木 (mộc – cây)',mean:'quả, trái cây',
      tip:'Hình một quả tròn 田 mọc trên cây 木 → QUẢ, TRÁI CÂY.',
      cf:'里 (lǐ – "bên trong")',w:'苹果'},
   ]},
  {n:4,zh:'牛奶',py:'niúnǎi',pos:'Danh từ',vn:'sữa', hv: 'ngưu nãi',em:'🥛',lesson:1,
   ex_zh:'我喝牛奶。',ex_py:'Wǒ hē niúnǎi.',ex_vn:'Mình uống sữa.',
   exList:[{zh:'我喝牛奶。',py:'Wǒ hē niúnǎi.',vn:'Mình uống sữa.'},{zh:'早上我喝牛奶。',py:'Zǎoshang wǒ hē niúnǎi.',vn:'Buổi sáng tớ uống sữa.'}],
   hanzi:[
     {c:'牛',p:'niú',type:'独体字 · Tượng hình',st:4,ord:'丿(sừng) → 一→十(đầu và thân)',rad:'牛 (ngưu – tự thành bộ)',mean:'con bò, trâu',
      tip:'Hình vẽ đầu con bò với hai sừng cong lên trên → CON BÒ, dùng trong 牛奶 (sữa bò).',
      cf:'午 (wǔ – "buổi trưa")',w:'牛奶'},
     {c:'奶',p:'nǎi',type:'左右结构 · Trái-phải',st:5,ord:'女(nữ) trái → 乃(nãi) phải',rad:'女 (nữ – con gái, mẹ)',mean:'sữa',
      tip:'Bộ 女 (mẹ) bên trái, chỉ nguồn sữa nuôi con → SỮA.',
      cf:'奴 (nú – "nô lệ")',w:'牛奶'},
   ]},
  {n:5,zh:'水',py:'shuǐ',pos:'Danh từ',vn:'nước', hv: 'thủy',em:'💧',lesson:1,
   ex_zh:'我也喝水。',ex_py:'Wǒ yě hē shuǐ.',ex_vn:'Mình cũng uống nước.',
   exList:[{zh:'我也喝水。',py:'Wǒ yě hē shuǐ.',vn:'Mình cũng uống nước.'},{zh:'我喜欢喝水。',py:'Wǒ xǐhuan hē shuǐ.',vn:'Tớ thích uống nước.'}],
   hanzi:[
     {c:'水',p:'shuǐ',type:'独体字 · Tượng hình',st:4,ord:'丨(dòng chảy) → ㇊→㇙→丿(nhánh rẽ)',rad:'水 (thủy – tự thành bộ)',mean:'nước',
      tip:'Hình vẽ dòng nước đang chảy với các nhánh rẽ hai bên → NƯỚC.',
      cf:'冰 (bīng – "băng")',w:'喝水'},
   ]},
  {n:6,zh:'吃',py:'chī',pos:'Động từ',vn:'ăn', hv: 'ngật',em:'🍽️',lesson:2,
   ex_zh:'你吃米饭吗？',ex_py:'Nǐ chī mǐfàn ma?',ex_vn:'Bạn ăn cơm không?',
   exList:[{zh:'你吃米饭吗？',py:'Nǐ chī mǐfàn ma?',vn:'Bạn ăn cơm không?'},{zh:'猫吃鱼。',py:'Māo chī yú.',vn:'Mèo ăn cá.'}],
   hanzi:[
     {c:'吃',p:'chī',type:'左右结构 · Trái-phải',st:6,ord:'口(khẩu) trái → 乞(khất) phải',rad:'口 (khẩu – miệng)',mean:'ăn',
      tip:'Bộ 口 (miệng) bên trái, ghép với 乞 (âm gần "chi") → dùng miệng để ĂN.',
      cf:'吧 (ba – trợ từ)',w:'吃米饭'},
   ]},
  {n:7,zh:'喝',py:'hē',pos:'Động từ',vn:'uống', hv: 'hát',em:'🥤',lesson:2,
   ex_zh:'你喝牛奶吗？',ex_py:'Nǐ hē niúnǎi ma?',ex_vn:'Bạn uống sữa không?',
   exList:[{zh:'你喝牛奶吗？',py:'Nǐ hē niúnǎi ma?',vn:'Bạn uống sữa không?'},{zh:'小狗喝水。',py:'Xiǎo gǒu hē shuǐ.',vn:'Chú chó nhỏ uống nước.'}],
   hanzi:[
     {c:'喝',p:'hē',type:'左右结构 · Trái-phải',st:12,ord:'口(khẩu) trái → 曷(hạt) phải',rad:'口 (khẩu – miệng)',mean:'uống',
      tip:'Bộ 口 (miệng) bên trái, ghép với 曷 chỉ hành động đưa nước vào miệng → UỐNG.',
      cf:'渴 (kě – "khát", dùng bộ 氵thay vì 口)',w:'喝牛奶'},
   ]},
  {n:8,zh:'爱',py:'ài',pos:'Động từ',vn:'yêu, rất thích', hv: 'ái',em:'❤️',lesson:2,
   ex_zh:'我爱吃蛋糕！',ex_py:'Wǒ ài chī dàngāo!',ex_vn:'Mình rất thích ăn bánh kem!',
   exList:[{zh:'我爱吃蛋糕！',py:'Wǒ ài chī dàngāo!',vn:'Mình rất thích ăn bánh kem!'},{zh:'我爱妈妈。',py:'Wǒ ài māma.',vn:'Con yêu mẹ.'}],
   hanzi:[
     {c:'爱',p:'ài',type:'上下结构 · Trên-dưới',st:10,ord:'爫(trảo, giản lược) trên → 友(hữu) dưới',rad:'爫 (trảo – bàn tay)',mean:'yêu, rất thích',
      tip:'Bàn tay 爫 nâng niu, ôm giữ điều mình trân trọng (友 – bạn) → YÊU, RẤT THÍCH.',
      cf:'受 (shòu – "nhận")',w:'我爱吃苹果'},
   ]},
  {n:9,zh:'蛋糕',py:'dàngāo',pos:'Danh từ',vn:'bánh kem', hv: 'đản cao',em:'🎂',lesson:2,
   ex_zh:'今天是我的生日，我爱吃蛋糕！',ex_py:'Jīntiān shì wǒ de shēngrì, wǒ ài chī dàngāo!',ex_vn:'Hôm nay là sinh nhật mình, mình rất thích ăn bánh kem!',
   exList:[{zh:'今天是我的生日，我爱吃蛋糕！',py:'Jīntiān shì wǒ de shēngrì, wǒ ài chī dàngāo!',vn:'Hôm nay là sinh nhật mình, mình rất thích ăn bánh kem!'},{zh:'这个蛋糕太大了！',py:'Zhège dàngāo tài dà le!',vn:'Cái bánh kem này to quá!'}],
   hanzi:[
     {c:'蛋',p:'dàn',type:'上下结构 · Trên-dưới',st:11,ord:'疋(giản lược) trên → 一(vỏ) dưới',rad:'疋 (sơ)',mean:'trứng',
      tip:'Phần trên gợi hình con vật nhỏ, phần dưới 一 tượng trưng hình quả TRỨNG tròn.',
      cf:'蚕 (cán – "con tằm")',w:'蛋糕'},
     {c:'糕',p:'gāo',type:'左右结构 · Trái-phải',st:16,ord:'米(mễ) trái → 羔(cao) phải',rad:'米 (mễ – gạo, bột)',mean:'bánh (ngọt)',
      tip:'Bộ 米 (bột) ghép với 羔 (đọc gần "gao") → BÁNH làm từ bột, như 蛋糕.',
      cf:'高 (gāo – "cao", đã học ở Bài 6, đồng âm khác chữ)',w:'蛋糕'},
   ]},
];

var wuData = [
  {img:'🍚',label:'米饭',py:'mǐfàn',letter:'A'},
  {img:'🍜',label:'面条',py:'miàntiáo',letter:'B'},
  {img:'🍎',label:'苹果',py:'píngguǒ',letter:'C'},
  {img:'🥛',label:'牛奶',py:'niúnǎi',letter:'D'},
  {img:'🎂',label:'蛋糕',py:'dàngāo',letter:'E'},
  {img:'💧',label:'水',py:'shuǐ',letter:'F'},
];

var dialogData = [
  {scene:'Bữa ăn',
   lines:[
     {sp:0,zh:'你吃米饭吗？',py:'Nǐ chī mǐfàn ma?',vn:'Bạn ăn cơm không?'},
     {sp:1,zh:'我吃米饭，也吃面条。',py:'Wǒ chī mǐfàn, yě chī miàntiáo.',vn:'Mình ăn cơm, cũng ăn mì.'},
   ]},
  {scene:'Uống gì',
   lines:[
     {sp:0,zh:'你喝牛奶吗？',py:'Nǐ hē niúnǎi ma?',vn:'Bạn uống sữa không?'},
     {sp:1,zh:'我喝牛奶，也喝水。',py:'Wǒ hē niúnǎi, yě hē shuǐ.',vn:'Mình uống sữa, cũng uống nước.'},
   ]},
  {scene:'Sinh nhật và bánh kem',
   lines:[
     {sp:0,zh:'今天是我的生日！',py:'Jīntiān shì wǒ de shēngrì!',vn:'Hôm nay là sinh nhật mình!'},
     {sp:1,zh:'我爱吃蛋糕！',py:'Wǒ ài chī dàngāo!',vn:'Mình rất thích ăn bánh kem!'},
     {sp:0,zh:'我也爱吃苹果。',py:'Wǒ yě ài chī píngguǒ.',vn:'Mình cũng rất thích ăn táo.'},
   ]},
];

// Điền từ — tình huống ăn uống
var fillData = [
  {pre:'Anh trai con ăn cơm rất ngon miệng: “哥哥爱吃',blank:'米饭',post:'。”',hint:'(cơm)',ans:'米饭',exp:'米饭 = cơm; 爱吃 = rất thích ăn.'},
  {pre:'Mẹ không ăn mì: “妈妈不吃',blank:'面条',post:'。”',hint:'(mì)',ans:'面条',exp:'面条 = mì; 不吃 = không ăn.'},
  {pre:'Bà cho con một quả táo rất to: “这个',blank:'苹果',post:'真大！”',hint:'(táo)',ans:'苹果',exp:'苹果 = quả táo; 这个苹果 = quả táo này.'},
  {pre:'Con hỏi em gái: “Em có thích uống sữa không?” — “你爱喝',blank:'牛奶',post:'吗？”',hint:'(sữa)',ans:'牛奶',exp:'牛奶 = sữa; đồ uống đi với 喝.'},
  {pre:'Con không uống sữa, con uống nước: “我不喝牛奶，我喝',blank:'水',post:'。”',hint:'(nước)',ans:'水',exp:'水 = nước: 喝水 = uống nước.'},
  {pre:'Con hỏi mẹ mấy giờ cả nhà ăn cơm: “我们几点',blank:'吃',post:'米饭？”',hint:'(ăn)',ans:'吃',exp:'Đồ ăn đi với 吃: 吃米饭 = ăn cơm.'},
  {pre:'Trời nóng, con hỏi bạn: “你',blank:'喝',post:'水吗？”',hint:'(uống)',ans:'喝',exp:'Nước là đồ uống → 喝水, không nói 吃水.'},
  {pre:'Con nói với cô giáo: “Con yêu mẹ con!” — “我',blank:'爱',post:'我的妈妈！”',hint:'(yêu)',ans:'爱',exp:'爱 = yêu: 我爱我的妈妈.'},
  {pre:'Hôm nay sinh nhật con, bố mua bánh kem: “这是我的生日',blank:'蛋糕',post:'！”',hint:'(bánh kem)',ans:'蛋糕',exp:'蛋糕 = bánh kem; 生日蛋糕 = bánh sinh nhật.'},
];

// Sắp xếp — câu ăn uống
var sortData = [
  {words:['妹妹','爱','吃','苹果','。'],ans:'妹妹爱吃苹果。',audio:'妹妹爱吃苹果。'},
  {words:['爸爸','和','妈妈','吃','米饭','。'],ans:'爸爸和妈妈吃米饭。',audio:'爸爸和妈妈吃米饭。'},
  {words:['这儿','有','水','吗','？'],ans:'这儿有水吗？',audio:'这儿有水吗？'},
  {words:['今天','我们','吃','蛋糕','！'],ans:'今天我们吃蛋糕！',audio:'今天我们吃蛋糕！'},
  {words:['苹果','太','大','了','！'],ans:'苹果太大了！',audio:'苹果太大了！'},
];

var matchData = [
  {left:'你吃米饭吗？',right:'吃，我也吃面条。'},
  {left:'你喝什么？',right:'我喝水。'},
  {left:'你爱吃蛋糕吗？',right:'我很爱吃！'},
  {left:'你喝牛奶吗？',right:'不喝。'},
  {left:'猫吃什么？',right:'猫吃鱼。'},
  {left:'今天是你的生日吗？',right:'是！我们吃蛋糕！'},
];

// Trắc nghiệm — không audio
var mcData = [
  {q:'Con muốn nói: “Bố uống nước.”',opts:['爸爸喝水。','爸爸吃水。','爸爸水喝。','喝爸爸水。'],ans:0,exp:'Đồ uống (nước, sữa) đi với 喝; 吃 dùng cho đồ ăn. Tiếng Việt hay nói "ăn uống" chung nên dễ nhầm.'},
  {q:'Bạn nói: “我吃苹果。” Con cũng ăn táo. Con nói:',opts:['我也吃苹果。','我吃也苹果。','也我吃苹果。','我吃苹果也。'],ans:0,exp:'也 đứng sau chủ ngữ, trước động từ: 我也吃苹果.'},
  {q:'Con muốn hỏi bạn: “Bạn thích ăn gì?”',opts:['你爱吃什么？','你爱吃什么吗？','你什么爱吃？','什么你爱吃？'],ans:0,exp:'什么 đứng sau động từ ở chỗ của món ăn; đã có 什么 thì không thêm 吗.'},
  {q:'Bạn hỏi con có uống sữa không. Con không uống. Con đáp:',opts:['不喝。','不吃。','没有。','不是。'],ans:0,exp:'Hỏi bằng 喝 thì đáp bằng 喝: 不喝. Sữa là đồ uống nên không dùng 吃.'},
  {q:'Con muốn nói: “Mình ăn mì lúc 7 giờ sáng.”',opts:['我早上七点吃面条。','我吃面条早上七点。','早上七点我面条吃。','我七点早上吃面条。'],ans:0,exp:'Thời gian đứng trước động từ, món ăn đứng sau động từ: 早上七点 + 吃 + 面条.'},
];

var speakingData = {
  t1:{
    intro:'Nhấn nút loa nghe từng câu mẫu, đọc to theo cho tới khi trôi chảy nhé!',
    models:[
      {zh:'你吃米饭吗？',py:'Nǐ chī mǐfàn ma?',vn:'Bạn ăn cơm không?'},
      {zh:'我喝牛奶，也喝水。',py:'Wǒ hē niúnǎi, yě hē shuǐ.',vn:'Mình uống sữa, cũng uống nước.'},
      {zh:'我爱吃蛋糕！',py:'Wǒ ài chī dàngāo!',vn:'Mình rất thích ăn bánh kem!'},
    ],
  },
  t2:{
    intro:'Dùng khung câu cho sẵn, thay thế phần gạch chân bằng từ trong ô gợi ý. Nhấn nút loa để nghe rồi nói to mỗi câu con tạo được.',
    drills:[
      {frame:'我吃＿＿。',frame_py:'Wǒ chī ___.',vn:'Mình ăn ＿＿.',options:['米饭','面条'],samples:['我吃米饭。','我吃面条。']},
    ],
  },
  t3:{
    intro:'Không nhìn câu mẫu, con hãy tưởng tượng mình đang ở trong tình huống thật và tự nói câu phù hợp nhé!',
    tasks:[
      {role:'🍜 Tình huống 1 — Bữa sáng của con',
       guide:'Cô giáo hỏi sáng nay con ăn gì, uống gì. Con kể lại.',
       structure:['早上我吃……，喝……'],
       sample:'早上我吃面条，喝牛奶。',
       sample_vn:'Sáng nay con ăn mì, uống sữa.',
       note:'Đồ ăn đi với 吃, đồ uống đi với 喝.'},
      {role:'🎂 Tình huống 2 — Sinh nhật vui vẻ',
       guide:'Hôm nay là sinh nhật con. Con vui vẻ nói với các bạn.',
       structure:['今天是我的生日，……！'],
       sample:'今天是我的生日，太好了！',
       sample_vn:'Hôm nay là sinh nhật mình, vui quá!',
       note:'太好了 = tuyệt quá (đã học ở Bài 10).'},
      {role:'🥣 Tình huống 3 — Hỏi em gái',
       guide:'Đến giờ ăn, con hỏi em gái muốn ăn gì.',
       structure:['……，你吃什么？'],
       sample:'妹妹，你吃什么？',
       sample_vn:'Em ơi, em ăn gì?',
       note:'什么 đứng sau 吃, ở chỗ của món ăn.'},
    ],
  },
};

// ══════════════════════════════════════════
// LUYỆN DỊCH (Việt→Trung) — câu ví dụ của chính bài này
// ══════════════════════════════════════════
var translateData = [
  {vi:"Mình thích ăn táo.", zh:"我喜欢吃苹果。", py:"Wǒ xǐhuan chī píngguǒ."},
  {vi:"Đây là nước của bạn.", zh:"这是你的水。", py:"Zhè shì nǐ de shuǐ."},
];

// ══════════════════════════════════════════
// LUYỆN DỊCH (Trung→Việt) — lời thoại trong bài, khác chiều Việt→Trung
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:"Bạn có thích ăn táo không?", zh:"你爱吃苹果吗？", py:"Nǐ ài chī píngguǒ ma?"},
  {vi:"Sữa nhiều quá!", zh:"牛奶太多了！", py:"Niúnǎi tài duō le!"},
];

// ══════════════════════════════════════════
// LUYỆN NGHE — đoạn nghe ngắn (đọc bằng giọng máy), chỉ dùng từ đã học
// ══════════════════════════════════════════
var listenData = [
  {audio:'我不爱吃米饭。',
   questions:[
     {q:'Bạn nhỏ thấy cơm thế nào?',opts:['Rất thích ăn','Không thích ăn','Không nói'],ans:1,exp:'不爱吃 = không thích ăn.'},
   ]},
  {audio:'明明喝水，不喝牛奶。',
   questions:[
     {q:'Minh Minh uống gì?',opts:['Sữa','Nước','Không uống gì'],ans:1,exp:'明明喝水 = Minh Minh uống nước; 不喝牛奶 = không uống sữa.'},
   ]},
  {audio:'明天是哥哥的生日，我们吃苹果和蛋糕。',
   questions:[
     {q:'Ngày mai là sinh nhật ai?',opts:['Anh trai','Mẹ','Bạn nhỏ'],ans:0,exp:'哥哥的生日 = sinh nhật anh trai.'},
     {q:'Mọi người sẽ ăn gì?',opts:['Mì và cơm','Cơm và táo','Táo và bánh kem'],ans:2,exp:'苹果和蛋糕 = táo và bánh kem.'},
   ]},
  {audio:'猫爱吃鱼。',
   questions:[
     {q:'Con mèo thích ăn gì?',opts:['Cá','Táo','Cơm'],ans:0,exp:'猫爱吃鱼 = mèo rất thích ăn cá.'},
   ]},
];
