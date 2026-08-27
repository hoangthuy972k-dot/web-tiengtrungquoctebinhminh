// ══════════════════════════════════════════
// DATA — HSK1 Bài 2: 谢谢你!
// ══════════════════════════════════════════
var vocabData = [
  {n:1,zh:'谢谢',py:'xièxie',pos:'Động từ',vn:'cảm ơn',em:'🙏',lesson:1,
   ex_zh:'谢谢！',ex_py:'Xièxie!',ex_vn:'Cảm ơn!',
   exList:[
     {zh:'谢谢！',py:'Xièxie!',vn:'Cảm ơn!'},
     {zh:'谢谢你！',py:'Xièxie nǐ!',vn:'Cảm ơn bạn!'},
   ],
   hanzi:[
     {c:'谢',p:'xiè',type:'左右结构 · Trái-phải',st:12,ord:'讠(ngôn) trái → 射(xạ) phải',rad:'讠 (ngôn – lời nói)',mean:'cảm ơn, tạ ơn',
      tip:'讠(lời nói) + 射(bắn ra) → LỜI NÓI bày tỏ lòng biết ơn được gửi ra ngoài.',
      cf:'榭 (xiè – "nhà thuỷ tạ")',w:'谢谢 / 不谢'},
   ]},
  {n:2,zh:'不',py:'bù / bú',pos:'Phó từ',vn:'không cần, không, đừng',em:'🚫',lesson:1,
   ex_zh:'不谢！',ex_py:'Bú xiè!',ex_vn:'Không cần cảm ơn đâu!',
   exList:[
     {zh:'不谢！',py:'Bú xiè!',vn:'Không cần cảm ơn đâu!'},
     {zh:'不客气！',py:'Bú kèqi!',vn:'Đừng khách sáo!'},
   ],
   hanzi:[
     {c:'不',p:'bù / bú',type:'独体字 · Chữ đơn',st:4,ord:'一(ngang) → 丨→ ㇒ → 丶',rad:'一 (nhất)',mean:'không, đừng, chẳng',
      tip:'Nét ngang trên cùng như một bức tường CHẶN LẠI → mang nghĩa PHỦ ĐỊNH. Đổi sang thanh 2 (bú) khi đứng trước âm tiết mang thanh 4.',
      cf:'布 (bù – "vải")',w:'不谢 / 不客气 / 不是'},
   ]},
  {n:3,zh:'不客气',py:'bú kèqi',pos:'Cụm từ',vn:'đừng khách sáo, không có gì',em:'😊',lesson:1,
   ex_zh:'不客气！',ex_py:'Bú kèqi!',ex_vn:'Đừng khách sáo!',
   exList:[
     {zh:'不客气！',py:'Bú kèqi!',vn:'Đừng khách sáo!'},
   ],
   hanzi:[
     {c:'客',p:'kè',type:'上下结构 · Trên-dưới',st:9,ord:'宀(miên) trên → 各(các) dưới',rad:'宀 (miên – mái nhà)',mean:'khách',
      tip:'宀(mái nhà) + 各(mỗi người, mỗi nơi) → người từ nhiều nơi đến ở tạm dưới MỘT MÁI NHÀ = KHÁCH.',
      cf:'各 (gè – "mỗi")',w:'客气 / 不客气'},
     {c:'气',p:'qì',type:'独体字 · Chữ đơn',st:4,ord:'ノ→一→㇕→一',rad:'气 (khí – tự thành bộ)',mean:'khí, hơi',
      tip:'Hình dáng luồng khí đang bay lượn → KHÍ; ghép với 客 thành "khách khí" nghĩa là giữ ý tứ, khách sáo.',
      cf:'汽 (qì – "hơi nước", thêm bộ 氵")',w:'客气 / 不客气'},
   ]},
  {n:4,zh:'再见',py:'zàijiàn',pos:'Động từ',vn:'tạm biệt',em:'👋',lesson:1,
   ex_zh:'再见！',ex_py:'Zàijiàn!',ex_vn:'Tạm biệt!',
   exList:[
     {zh:'再见！',py:'Zàijiàn!',vn:'Tạm biệt!'},
   ],
   hanzi:[
     {c:'再',p:'zài',type:'独体字 · Chữ đơn',st:6,ord:'一→冂→土(biến thể)',rad:'冂 (biến thể)',mean:'lại, lần nữa',
      tip:'Hình ảnh một vật được xếp CHỒNG THÊM một lần nữa lên trên → LẶP LẠI, LẦN NỮA.',
      cf:'冉 (rǎn – yếu tố Hán cổ)',w:'再见'},
     {c:'见',p:'jiàn',type:'独体字 · Chữ đơn',st:4,ord:'冂→ㇾ→儿(biến thể)',rad:'见 (kiến – tự thành bộ)',mean:'gặp, nhìn thấy',
      tip:'Hình con mắt trên đôi chân đang bước tới → NHÌN THẤY, GẶP GỠ.',
      cf:'贝 (bèi – "vật báu")',w:'再见'},
   ]},
];

const wuData = [
  {img:'🙏',label:'谢谢',py:'xièxie',letter:'A'},
  {img:'🚫',label:'不',py:'bù',letter:'B'},
  {img:'😊',label:'不客气',py:'bú kèqi',letter:'C'},
  {img:'👋',label:'再见',py:'zàijiàn',letter:'D'},
];

var dialogData = [
  {scene:'Cảm ơn thông thường',
   lines:[
     {sp:0,zh:'谢谢！',py:'Xièxie!',vn:'Cảm ơn!'},
     {sp:1,zh:'不谢！',py:'Bú xiè!',vn:'Không cần cảm ơn đâu!'},
   ]},
  {scene:'Cảm ơn lịch sự & đáp lại',
   lines:[
     {sp:0,zh:'谢谢你！',py:'Xièxie nǐ!',vn:'Cảm ơn bạn!'},
     {sp:1,zh:'不客气！',py:'Bú kèqi!',vn:'Đừng khách sáo!'},
   ]},
  {scene:'Tạm biệt',
   lines:[
     {sp:0,zh:'再见！',py:'Zàijiàn!',vn:'Tạm biệt!'},
     {sp:1,zh:'再见！',py:'Zàijiàn!',vn:'Tạm biệt!'},
   ]},
];

// Điền từ — mô tả tình huống thực tế, không lặp nguyên văn bài khoá
const fillData = [
  {pre:'Ai đó giúp bạn xách đồ nặng, bạn nói: “',blank:'谢谢',post:'”',hint:'(cảm ơn)',ans:'谢谢'},
  {pre:'Bạn thân cảm ơn bạn, bạn đáp lại đơn giản, thân mật: “',blank:'不谢',post:'”',hint:'(không cần cảm ơn — thân mật)',ans:'不谢'},
  {pre:'Một người lạ/khách hàng cảm ơn bạn, bạn đáp lại lịch sự hơn: “',blank:'不客气',post:'”',hint:'(đừng khách sáo — lịch sự, trang trọng)',ans:'不客气'},
  {pre:'Chia tay bạn bè sau buổi học, bạn nói: “',blank:'再见',post:'”',hint:'(tạm biệt)',ans:'再见'},
  {pre:'Ai đó tặng quà cho bạn, bạn cảm ơn họ: “',blank:'谢谢',post:'”',hint:'(cảm ơn)',ans:'谢谢'},
  {pre:'Nhân viên phục vụ cảm ơn bạn đã ghé quán, bạn đáp lại: “',blank:'不客气',post:'”',hint:'(đừng khách sáo)',ans:'不客气'},
  {pre:'Gặp lại thầy giáo sau kỳ nghỉ, trước khi ra về bạn nói: “',blank:'再见',post:'”',hint:'(tạm biệt)',ans:'再见'},
  {pre:'Kết thúc cuộc gọi điện thoại, hai người nói với nhau: “',blank:'再见',post:'”',hint:'(tạm biệt)',ans:'再见'},
];

// Sắp xếp — bao gồm 1 câu ôn tập kết hợp từ vựng Bài 1
const sortData = [
  {words:['谢','谢','！'],ans:'谢谢！',audio:'谢谢！'},
  {words:['谢','谢','你','！'],ans:'谢谢你！',audio:'谢谢你！'},
  {words:['不','客','气','！'],ans:'不客气！',audio:'不客气！'},
  {words:['再','见','！'],ans:'再见！',audio:'再见！'},
  {words:['你好','，','谢','谢','你','！'],ans:'你好，谢谢你！',audio:'你好，谢谢你！'},
];

// Nối câu — nối tình huống với câu nói phù hợp
const matchData = [
  {left:'Cảm ơn ai đó vừa giúp bạn',right:'谢谢！'},
  {left:'Đáp lại lời cảm ơn một cách thân mật',right:'不谢！'},
  {left:'Đáp lại lời cảm ơn một cách lịch sự, trang trọng hơn',right:'不客气！'},
  {left:'Chia tay khi kết thúc cuộc gặp',right:'再见！'},
];

// Trắc nghiệm — kiểm tra ngữ dụng & quy tắc biến điệu của "不", không audio
const mcData = [
  {q:'Ai đó giúp bạn, cách cảm ơn đúng là?',opts:['谢谢','再见','不客气','对不起'],ans:0},
  {q:'Đáp lại lời cảm ơn một cách THÂN MẬT, đơn giản nhất là?',opts:['不谢','不客气','谢谢','再见'],ans:0},
  {q:'Đáp lại lời cảm ơn một cách LỊCH SỰ hơn (với khách/người lạ) là?',opts:['不客气','不谢','谢谢','没关系'],ans:0},
  {q:'Kết thúc cuộc gặp, câu tạm biệt đúng là?',opts:['再见','谢谢','你好','对不起'],ans:0},
  {q:'"不" đọc giữ nguyên là "bù" (thanh 4) khi đứng trước âm tiết mang thanh mấy?',opts:['Thanh 1, 2 hoặc 3','Chỉ thanh 4','Chỉ thanh 1','Tất cả các thanh đều đổi'],ans:0},
  {q:'"不" đổi thành "bú" (thanh 2) khi đứng trước âm tiết mang thanh mấy?',opts:['Thanh 4','Thanh 1','Thanh 2','Thanh 3'],ans:0},
  {q:'"bù chī" (không ăn) — "不" ở đây KHÔNG đổi thanh vì "吃" (chī) mang thanh mấy?',opts:['Thanh 1','Thanh 2','Thanh 3','Thanh 4'],ans:0},
  {q:'"bú shì" (không phải) — "不" ở đây đổi thành thanh 2 vì "是" (shì) mang thanh mấy?',opts:['Thanh 4','Thanh 1','Thanh 2','Thanh 3'],ans:0},
  {q:'Câu nào dùng để ĐÁP LẠI lời xin lỗi (không phải lời cảm ơn)?',opts:['没关系','不客气','不谢','谢谢'],ans:0},
  {q:'Muốn cảm ơn TRỰC TIẾP một người cụ thể, thêm từ nào vào sau 谢谢?',opts:['你','好','们','起'],ans:0},
];

var speakingData = {
  t1:{
    intro:'Nhấn 🔊 nghe từng câu mẫu, đọc to theo cho tới khi trôi chảy. Chú ý biến điệu: "不谢" đọc là "bú xiè" (不 đổi sang thanh 2 vì 谢 mang thanh 4).',
    models:[
      {zh:'谢谢！',py:'Xièxie!',vn:'Cảm ơn!'},
      {zh:'不谢！',py:'Bú xiè!',vn:'Không cần cảm ơn đâu!'},
      {zh:'谢谢你！',py:'Xièxie nǐ!',vn:'Cảm ơn bạn!'},
      {zh:'不客气！',py:'Bú kèqi!',vn:'Đừng khách sáo!'},
      {zh:'再见！',py:'Zàijiàn!',vn:'Tạm biệt!'},
    ],
  },
  t2:{
    intro:'Dùng khung hội thoại cho sẵn, thay thế phần gạch chân bằng từ trong ô gợi ý để thấy rõ sự khác biệt về mức độ thân mật khi đáp lời cảm ơn. Nhấn 🔊 để nghe rồi nói to.',
    drills:[
      {frame:'A: 谢谢你！ B: ＿＿！',frame_py:'A: Xièxie nǐ! B: ___!',vn:'A: Cảm ơn bạn! B: ＿＿! (chọn cách đáp phù hợp với mối quan hệ)',options:['不谢','不客气'],samples:['不谢！ (đáp thân mật — dùng giữa bạn bè, người thân)','不客气！ (đáp lịch sự — dùng với người lạ, khách hàng, cấp trên)']},
    ],
  },
  t3:{
    intro:'Không nhìn câu mẫu, hãy tưởng tượng bạn đang ở trong tình huống thực tế và tự nói ra câu phù hợp. Chú ý chọn đúng mức độ thân mật/trang trọng theo đối tượng giao tiếp.',
    tasks:[
      {role:'🛍️ Tình huống 1 — Nhân viên cửa hàng giúp bạn tìm đồ',
       guide:'Bạn đang mua sắm và một nhân viên đã nhiệt tình giúp bạn tìm đúng món đồ cần mua. Hãy cảm ơn họ.',
       structure:['谢谢＿＿！'],
       sample:'谢谢你！',
       sample_vn:'Cảm ơn bạn!',
       note:'Với người phục vụ hoặc người mới quen, thêm 你 vào sau 谢谢 nghe lịch sự và trực tiếp hơn là chỉ nói suông "谢谢".'},
      {role:'🤝 Tình huống 2 — Bạn thân giúp bạn một việc nhỏ',
       guide:'Bạn thân vừa giúp bạn mượn quyển sách. Bạn cảm ơn, và họ đáp lại. Hãy nói cả hai lượt lời.',
       structure:['谢谢！','＿＿！'],
       sample:'谢谢！ —— 不谢！',
       sample_vn:'Cảm ơn! —— Không cần cảm ơn đâu!',
       note:'不谢 mang sắc thái THÂN MẬT hơn 不客气 — dùng giữa bạn bè, người thân sẽ tự nhiên hơn là 不客气 (thường dùng trong giao tiếp trang trọng, với người lạ).'},
      {role:'👋 Tình huống 3 — Kết thúc buổi gặp mặt',
       guide:'Buổi gặp mặt bạn bè đã kết thúc, mọi người chuẩn bị ra về. Hãy chào tạm biệt.',
       structure:['再见！'],
       sample:'再见！',
       sample_vn:'Tạm biệt!',
       note:'再见 dùng được trong MỌI tình huống chia tay, không cần phân biệt thân mật hay trang trọng — khác với 你好/您好 phải chọn theo đối tượng giao tiếp.'},
    ],
  },
};
