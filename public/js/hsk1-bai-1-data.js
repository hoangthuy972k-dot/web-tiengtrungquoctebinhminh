// ══════════════════════════════════════════
// DATA — HSK1 Bài 1: 你好!
// ══════════════════════════════════════════
const vocabData = [
  {n:1,zh:'你',py:'nǐ',pos:'Đại từ',vn:'anh, chị, bạn (ngôi thứ hai số ít)',em:'👉',lesson:1,
   ex_zh:'你好！',ex_py:'Nǐ hǎo!',ex_vn:'Chào bạn!',
   exList:[
     {zh:'你好！',py:'Nǐ hǎo!',vn:'Chào bạn!'},
     {zh:'你们好！',py:'Nǐmen hǎo!',vn:'Chào các bạn!'},
   ],
   hanzi:[
     {c:'你',p:'nǐ',type:'左右结构 · Trái-phải',st:7,ord:'亻(nhân) trái → 尔(biến thể) phải',rad:'亻(nhân – người)',mean:'anh, chị, bạn (ngôi thứ 2)',
      tip:'亻(người) đứng cạnh 尔(âm cổ chỉ "ngươi") → dùng để gọi NGƯỜI ĐANG NÓI CHUYỆN với mình.',
      cf:'休 (xiū – "nghỉ ngơi", cũng có bộ 亻)',w:'你好 / 你们 / 你是'},
   ]},
  {n:2,zh:'好',py:'hǎo',pos:'Tính từ',vn:'khỏe, tốt',em:'👍',lesson:1,
   ex_zh:'你好！',ex_py:'Nǐ hǎo!',ex_vn:'Chào bạn! (bạn khỏe không / chào)',
   exList:[
     {zh:'你好！',py:'Nǐ hǎo!',vn:'Chào bạn!'},
     {zh:'您好！',py:'Nín hǎo!',vn:'Chào ngài!'},
     {zh:'你们好！',py:'Nǐmen hǎo!',vn:'Chào các bạn!'},
   ],
   hanzi:[
     {c:'好',p:'hǎo',type:'左右结构 · Trái-phải',st:6,ord:'女(nữ) trái → 子(tử) phải',rad:'女 (nữ – con gái)',mean:'tốt, khỏe',
      tip:'女(mẹ) đứng cạnh 子(con) → hình ảnh MẸ CON sum vầy = TỐT ĐẸP.',
      cf:'如 (rú – "như", cũng có bộ 女")',w:'你好 / 您好 / 你们好'},
   ]},
  {n:3,zh:'您',py:'nín',pos:'Đại từ',vn:'ông, bà, ngài (kính trọng)',em:'🙇',lesson:1,
   ex_zh:'您好！',ex_py:'Nín hǎo!',ex_vn:'Chào ngài!',
   exList:[
     {zh:'您好！',py:'Nín hǎo!',vn:'Chào ngài!'},
   ],
   hanzi:[
     {c:'您',p:'nín',type:'上下结构 · Trên-dưới',st:11,ord:'你(biến thể) trên → 心(tâm) dưới',rad:'心 (tâm – trái tim)',mean:'ngài, ông/bà (kính trọng)',
      tip:'Thêm bộ 心(trái tim) xuống dưới chữ 你 → dùng CẢ TẤM LÒNG để bày tỏ sự TÔN KÍNH khi xưng hô.',
      cf:'念 (niàn – "tưởng nhớ", cũng có bộ 心")',w:'您好 / 谢谢您'},
   ]},
  {n:4,zh:'你们',py:'nǐmen',pos:'Đại từ',vn:'các anh, các chị, các bạn (số nhiều)',em:'👥',lesson:1,
   ex_zh:'你们好！',ex_py:'Nǐmen hǎo!',ex_vn:'Chào các anh/chị!',
   exList:[
     {zh:'你们好！',py:'Nǐmen hǎo!',vn:'Chào các anh/chị!'},
   ],
   hanzi:[
     {c:'们',p:'men',type:'左右结构 · Trái-phải',st:5,ord:'亻(nhân) trái → 门(môn) phải',rad:'亻 (nhân – người)',mean:'hậu tố số nhiều (chỉ người)',
      tip:'亻(người) đứng cạnh 门(cửa) → nhiều người cùng qua MỘT CÁNH CỬA = biểu thị SỐ NHIỀU.',
      cf:'门 (mén – "cửa")',w:'你们好'},
   ]},
  {n:5,zh:'对不起',py:'duìbuqǐ',pos:'Động từ',vn:'xin lỗi',em:'🙏',lesson:2,
   ex_zh:'对不起！',ex_py:'Duìbuqǐ!',ex_vn:'Xin lỗi!',
   exList:[
     {zh:'对不起！',py:'Duìbuqǐ!',vn:'Xin lỗi!'},
   ],
   hanzi:[
     {c:'对',p:'duì',type:'左右结构 · Trái-phải',st:5,ord:'又(biến thể) trái → 寸(thốn) phải',rad:'寸 (thốn – gang tay, đo lường)',mean:'đúng, đối diện',
      tip:'寸(gang tay đo lường) bên phải → làm ĐÚNG theo phép tắc; khi làm sai thì phải nói 对不起.',
      cf:'讨 (tǎo – "đòi hỏi")',w:'对不起'},
     {c:'不',p:'bù',type:'独体字 · Chữ đơn',st:4,ord:'一(ngang) → 丨→ ㇒ → 丶',rad:'一 (nhất)',mean:'không, chẳng, đừng',
      tip:'Nét ngang trên cùng như một bức tường CHẶN LẠI → mang nghĩa PHỦ ĐỊNH điều phía sau.',
      cf:'布 (bù – "vải")',w:'对不起'},
     {c:'起',p:'qǐ',type:'半包围结构 · Bán bao vây',st:10,ord:'走(tẩu, biến thể) bao ngoài → 己(kỷ) bên trong',rad:'走 (tẩu – đi)',mean:'dậy, nổi lên',
      tip:'走(đi) + 己(bản thân) → tự mình đứng dậy; ở đây ghép với 对不 thành cụm từ cố định XIN LỖI.',
      cf:'己 (jǐ – "bản thân")',w:'对不起'},
   ]},
  {n:6,zh:'没关系',py:'méi guānxi',pos:'Cụm từ',vn:'không sao đâu, không có vấn đề gì',em:'🤝',lesson:2,
   ex_zh:'没关系！',ex_py:'Méi guānxi!',ex_vn:'Không sao đâu!',
   exList:[
     {zh:'没关系！',py:'Méi guānxi!',vn:'Không sao đâu!'},
   ],
   hanzi:[
     {c:'没',p:'méi',type:'左右结构 · Trái-phải',st:7,ord:'氵(thuỷ) trái → 殳(biến thể) phải',rad:'氵 (thuỷ – nước)',mean:'không, không có',
      tip:'氵(nước) dâng lên che lấp mọi thứ → mang nghĩa KHÔNG CÒN, KHÔNG CÓ.',
      cf:'汉 (hàn – "Hán", cũng có bộ 氵")',w:'没关系'},
     {c:'关',p:'guān',type:'上下结构 · Trên-dưới',st:6,ord:'丷(bát, biến thể) trên → phần dưới',rad:'丷 (bát – chia, biến thể)',mean:'liên quan, đóng',
      tip:'Hình ảnh cái CHỐT CỬA được cài lại → ĐÓNG, và RÀNG BUỘC liên quan với nhau.',
      cf:'并 (bìng – "cùng, và")',w:'没关系 / 关系'},
     {c:'系',p:'xì',type:'上下结构 · Trên-dưới',st:7,ord:'丿(phẩy) trên → phần dưới giống 糸',rad:'糸 (mịch – tơ, sợi, phần dưới)',mean:'liên hệ, hệ thống',
      tip:'Như những SỢI TƠ (糸) đan xen nhau → biểu thị MỐI LIÊN HỆ, QUAN HỆ giữa các sự việc.',
      cf:'紧 (jǐn – "khẩn cấp", cũng liên quan đến sợi dây")',w:'关系 / 没关系'},
   ]},
];

const wuData = [
  {img:'👉',label:'你',py:'nǐ',letter:'A'},
  {img:'👍',label:'好',py:'hǎo',letter:'B'},
  {img:'🙇',label:'您',py:'nín',letter:'C'},
  {img:'👥',label:'你们',py:'nǐmen',letter:'D'},
  {img:'🙏',label:'对不起',py:'duìbuqǐ',letter:'E'},
  {img:'🤝',label:'没关系',py:'méi guānxi',letter:'F'},
];

const dialogData = [
  {scene:'Chào hỏi thông thường',
   lines:[
     {sp:0,zh:'你好！',py:'Nǐ hǎo!',vn:'Chào anh!'},
     {sp:1,zh:'你好！',py:'Nǐ hǎo!',vn:'Chào anh!'},
   ]},
  {scene:'Chào hỏi lịch sự',
   lines:[
     {sp:0,zh:'您好！',py:'Nín hǎo!',vn:'Chào ông!'},
     {sp:1,zh:'你们好！',py:'Nǐmen hǎo!',vn:'Chào các anh/chị!'},
   ]},
  {scene:'Xin lỗi & đáp lại',
   lines:[
     {sp:0,zh:'对不起！',py:'Duìbuqǐ!',vn:'Xin lỗi!'},
     {sp:1,zh:'没关系！',py:'Méi guānxi!',vn:'Không sao đâu!'},
   ]},
];

// Điền từ — mô tả TÌNH HUỐNG thực tế, học sinh chọn đúng cách nói
// (không lặp lại nguyên văn bài khoá, kiểm tra khả năng dùng ĐÚNG NGỮ CẢNH)
const fillData = [
  {pre:'Gặp một người bạn cùng tuổi ngoài đường, bạn nói: “',blank:'你好',post:'”',hint:'(chào thân mật, ngôi 2 số ít)',ans:'你好',exp:'你好 dùng khi chào người ngang hàng, thân mật'},
  {pre:'Gặp một cụ ông lớn tuổi lần đầu, muốn thể hiện phép lịch sự, bạn nói: “',blank:'您好',post:'”',hint:'(dùng 您 để thể hiện sự kính trọng)',ans:'您好',exp:'Với người lớn tuổi/cấp trên nên dùng 您 thay vì 你'},
  {pre:'Bước vào lớp học, bạn chào cả nhóm bạn cùng lúc: “',blank:'你们好',post:'”',hint:'(số nhiều — chào từ 2 người trở lên)',ans:'你们好'},
  {pre:'Bạn vô tình giẫm chân người khác, bạn nói: “',blank:'对不起',post:'”',hint:'(xin lỗi)',ans:'对不起'},
  {pre:'Nghe người khác xin lỗi mình, bạn đáp lại: “',blank:'没关系',post:'”',hint:'(không sao đâu)',ans:'没关系'},
  {pre:'Được đồng nghiệp giới thiệu với giám đốc công ty, bạn nên nói: “',blank:'您好',post:'”',hint:'(người có địa vị cao hơn → dùng kính ngữ)',ans:'您好'},
  {pre:'Đến muộn buổi họp, bạn xin lỗi cả phòng: “',blank:'对不起',post:'”',hint:'(xin lỗi)',ans:'对不起'},
  {pre:'Bạn của bạn lỡ làm rơi đồ của bạn, bạn trấn an họ: “',blank:'没关系',post:'”',hint:'(không sao đâu)',ans:'没关系'},
];

// Sắp xếp — ghép cả dấu câu (！), khác cách trình bày trong bài khoá
const sortData = [
  {words:['你','好','！'],ans:'你好！',audio:'你好！'},
  {words:['您','好','！'],ans:'您好！',audio:'您好！'},
  {words:['你们','好','！'],ans:'你们好！',audio:'你们好！'},
  {words:['对','不','起','！'],ans:'对不起！',audio:'对不起！'},
  {words:['没','关','系','！'],ans:'没关系！',audio:'没关系！'},
];

// Nối câu — nối TÌNH HUỐNG với câu nói phù hợp (không phải nối lời thoại A-B)
const matchData = [
  {left:'Chào một người bạn ngang hàng',right:'你好！'},
  {left:'Chào một người lớn tuổi, thể hiện kính trọng',right:'您好！'},
  {left:'Chào cả một nhóm người cùng lúc',right:'你们好！'},
  {left:'Xin lỗi vì đã làm phiền ai đó',right:'对不起！'},
  {left:'Đáp lại khi ai đó xin lỗi bạn',right:'没关系！'},
];

// Trắc nghiệm — kiểm tra NGỮ DỤNG (chọn đúng ngữ cảnh) và quy tắc biến điệu, không audio
const mcData = [
  {q:'Gặp một người bạn cùng tuổi ngoài đường, bạn nên chào thế nào?',opts:['你好','您好','你们好','没关系'],ans:0},
  {q:'Gặp một cụ ông lớn tuổi lần đầu, cách chào lịch sự nhất là?',opts:['您好','你好','你们好','对不起'],ans:0},
  {q:'Bạn muốn chào cả một nhóm bạn cùng lúc, nên nói?',opts:['你们好','你好','您好','没关系'],ans:0},
  {q:'Bạn vô tình làm phiền người khác, câu xin lỗi đúng là?',opts:['对不起','没关系','你好','您好'],ans:0},
  {q:'Khi ai đó xin lỗi bạn, cách đáp lịch sự nhất là?',opts:['没关系','你好','您好','你们好'],ans:0},
  {q:'"你好" khi hai âm tiết cùng mang thanh 3 đứng liền nhau, thực tế phát âm gần giống:',opts:['ní hǎo','nǐ hào','nì hǎo','nī hǎo'],ans:0},
  {q:'Từ nào dùng để thể hiện sự KÍNH TRỌNG khi xưng hô với người lớn tuổi/cấp trên?',opts:['您','你','你们','好'],ans:0},
  {q:'"你们" được dùng khi đối tượng giao tiếp là:',opts:['nhiều người','một người ngang hàng','một người lớn tuổi hơn','một đồ vật'],ans:0},
  {q:'Từ nào KHÔNG phải là lời chào hỏi trong bài?',opts:['没关系','你好','您好','你们好'],ans:0},
  {q:'Cặp câu nào đúng theo thứ tự Hỏi – Đáp?',opts:['对不起 → 没关系','你好 → 对不起','您好 → 没关系','你们好 → 你好'],ans:0},
];

const speakingData = {
  t1:{
    intro:'Nhấn 🔊 nghe từng câu mẫu, đọc to theo cho tới khi trôi chảy. Chú ý biến điệu thanh 3 khi "你" và "好" đứng liền nhau (đọc gần giống "ní hǎo").',
    models:[
      {zh:'你好！',py:'Nǐ hǎo!',vn:'Chào bạn!'},
      {zh:'您好！',py:'Nín hǎo!',vn:'Chào ngài!'},
      {zh:'你们好！',py:'Nǐmen hǎo!',vn:'Chào các bạn!'},
      {zh:'对不起！',py:'Duìbuqǐ!',vn:'Xin lỗi!'},
      {zh:'没关系！',py:'Méi guānxi!',vn:'Không sao đâu!'},
    ],
  },
  t2:{
    intro:'Dùng khung câu cho sẵn, thay thế phần gạch chân bằng từ trong ô gợi ý để tạo câu chào phù hợp với từng đối tượng. Nhấn 🔊 để nghe rồi nói to mỗi câu bạn tạo được.',
    drills:[
      {frame:'＿＿好！',frame_py:'___ hǎo!',vn:'Chào ＿＿! (thay đổi theo đối tượng giao tiếp)',options:['你','您','你们'],samples:['你好！ (chào 1 người, ngang hàng)','您好！ (chào 1 người, kính trọng)','你们好！ (chào từ 2 người trở lên)']},
    ],
  },
  t3:{
    intro:'Không nhìn câu mẫu, hãy tưởng tượng bạn đang ở trong tình huống thực tế và tự nói ra câu phù hợp. Đây là những tình huống bạn có thể gặp ngay tuần đầu tiên khi giao tiếp với người Trung Quốc.',
    tasks:[
      {role:'🏢 Tình huống 1 — Gặp cấp trên lần đầu tại công ty',
       guide:'Hôm nay là ngày đầu đi làm, bạn được đồng nghiệp giới thiệu với giám đốc — một người lớn tuổi và có địa vị cao hơn bạn. Hãy chào ông ấy sao cho đúng phép lịch sự.',
       structure:['＿＿好！'],
       sample:'您好！',
       sample_vn:'Chào ngài!',
       note:'Trong văn hoá Trung Quốc, dùng 您 thay vì 你 khi nói chuyện với người lớn tuổi, cấp trên, hoặc người mới gặp lần đầu trong bối cảnh trang trọng — đây là điểm người Việt hay bỏ qua vì tiếng Việt không phân biệt rõ giữa cách xưng hô thân mật và trang trọng.'},
      {role:'👥 Tình huống 2 — Chào một nhóm bạn cùng lúc',
       guide:'Bạn bước vào lớp học và thấy cả nhóm bạn đang ngồi sẵn chờ bạn. Hãy chào tất cả mọi người trong nhóm cùng một lúc.',
       structure:['＿＿好！'],
       sample:'你们好！',
       sample_vn:'Chào các bạn!',
       note:'Khi đối tượng chào là từ 2 người trở lên, luôn dùng 你们 (số nhiều) thay vì 你 (số ít) — đây là lỗi rất phổ biến của người mới học vì tiếng Việt dùng chung một từ "các bạn" mà không có dấu hiệu ngữ pháp bắt buộc.'},
      {role:'🙇 Tình huống 3 — Vô tình va chạm ngoài đường',
       guide:'Bạn đang đi trên phố đông người và vô tình va phải một người lạ. Hãy xin lỗi họ, rồi tưởng tượng họ đáp lại bạn một cách nhẹ nhàng.',
       structure:['＿＿！','＿＿！'],
       sample:'对不起！ —— 没关系！',
       sample_vn:'Xin lỗi! —— Không sao đâu!',
       note:'Phản xạ đáp "没关系" cần được luyện tập kỹ vì đây là câu người Trung Quốc dùng RẤT THƯỜNG XUYÊN trong giao tiếp hàng ngày để trấn an đối phương — luyện phản xạ nhanh sẽ giúp hội thoại tự nhiên hơn.'},
    ],
  },
};
