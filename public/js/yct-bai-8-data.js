// ══════════════════════════════════════════
// DATA — YCT Bài 8: 我去学校
// ══════════════════════════════════════════
var vocabData = [
  {n:1,zh:'学校',py:'xuéxiào',pos:'Danh từ',vn:'trường học',em:'🏫',lesson:1,
   ex_zh:'我去学校。',ex_py:'Wǒ qù xuéxiào.',ex_vn:'Mình đi trường học.',
   exList:[{zh:'我去学校。',py:'Wǒ qù xuéxiào.',vn:'Mình đi trường học.'}],
   hanzi:[
     {c:'学',p:'xué',type:'上下结构 · Trên-dưới',st:8,ord:'⺍(mái, ba chấm) trên → 冖(nắp) → 子(con) dưới',rad:'子 (tử – con)',mean:'học',
      tip:'Đứa trẻ 子 ngồi dưới mái nhà 冖, ba chấm phía trên tượng trưng những ý nghĩ đang tiếp thu → HỌC.',
      cf:'字 (zì – "chữ", cũng có 子 phía dưới)',w:'学校'},
     {c:'校',p:'xiào',type:'左右结构 · Trái-phải',st:10,ord:'木(mộc) trái → 交(giao) phải',rad:'木 (mộc – gỗ)',mean:'trường (học)',
      tip:'Ngôi trường được dựng bằng gỗ 木, là nơi mọi người giao lưu học hỏi 交 → TRƯỜNG.',
      cf:'交 (jiāo – "giao")',w:'学校'},
   ]},
  {n:2,zh:'在',py:'zài',pos:'Động từ/Giới từ',vn:'ở, tại',em:'📍',lesson:1,
   ex_zh:'我在学校。',ex_py:'Wǒ zài xuéxiào.',ex_vn:'Mình đang ở trường.',
   exList:[{zh:'我在学校。',py:'Wǒ zài xuéxiào.',vn:'Mình đang ở trường.'}],
   hanzi:[
     {c:'在',p:'zài',type:'半包围结构 · Bán bao vây',st:6,ord:'ナ(nghiễm giản lược) → 土(thổ) trong lòng',rad:'土 (thổ – đất)',mean:'ở, tại',
      tip:'Đứng vững trên nền đất 土, được che chắn xung quanh → chỉ vị trí đang Ở, TẠI đâu đó.',
      cf:'再 (zài – "lại, nữa", đồng âm khác chữ)',w:'我在学校'},
   ]},
  {n:3,zh:'去',py:'qù',pos:'Động từ',vn:'đi',em:'🚶',lesson:1,
   ex_zh:'我去商店。',ex_py:'Wǒ qù shāngdiàn.',ex_vn:'Mình đi cửa hàng.',
   exList:[{zh:'我去商店。',py:'Wǒ qù shāngdiàn.',vn:'Mình đi cửa hàng.'}],
   hanzi:[]},
  {n:4,zh:'哪儿',py:'nǎr',pos:'Đại từ',vn:'ở đâu',em:'❓',lesson:1,
   ex_zh:'你去哪儿？',ex_py:'Nǐ qù nǎr?',ex_vn:'Bạn đi đâu?',
   exList:[{zh:'你去哪儿？',py:'Nǐ qù nǎr?',vn:'Bạn đi đâu?'}],
   hanzi:[]},
  {n:5,zh:'你们',py:'nǐmen',pos:'Đại từ',vn:'các bạn (số nhiều)',em:'🧑‍🤝‍🧑',lesson:2,
   ex_zh:'你们在学校吗？',ex_py:'Nǐmen zài xuéxiào ma?',ex_vn:'Các bạn đang ở trường à?',
   exList:[{zh:'你们在学校吗？',py:'Nǐmen zài xuéxiào ma?',vn:'Các bạn đang ở trường à?'}],
   hanzi:[
     {c:'们',p:'men',type:'左右结构 · Trái-phải',st:5,ord:'亻(nhân đứng) trái → 门(giản lược) phải',rad:'亻 (nhân đứng)',mean:'hậu tố số nhiều',
      tip:'Thêm 亻 (người) vào từ chỉ người để biến thành SỐ NHIỀU: 你们, 我们, 他们.',
      cf:'门 (mén – "cửa")',w:'你们 / 我们'},
   ]},
  {n:6,zh:'我们',py:'wǒmen',pos:'Đại từ',vn:'chúng ta, chúng mình',em:'👨‍👩‍👧',lesson:2,
   ex_zh:'我们在学校。',ex_py:'Wǒmen zài xuéxiào.',ex_vn:'Chúng mình đang ở trường.',
   exList:[{zh:'我们在学校。',py:'Wǒmen zài xuéxiào.',vn:'Chúng mình đang ở trường.'}],
   hanzi:[]},
  {n:7,zh:'商店',py:'shāngdiàn',pos:'Danh từ',vn:'cửa hàng',em:'🏪',lesson:2,
   ex_zh:'我去商店。',ex_py:'Wǒ qù shāngdiàn.',ex_vn:'Mình đi cửa hàng.',
   exList:[{zh:'我去商店。',py:'Wǒ qù shāngdiàn.',vn:'Mình đi cửa hàng.'}],
   hanzi:[
     {c:'商',p:'shāng',type:'上下结构 · Trên-dưới',st:11,ord:'亠(đầu) trên → 冏(cửa sổ, giản lược) → 口(khẩu) dưới',rad:'口 (khẩu – miệng)',mean:'buôn bán, thương mại',
      tip:'Người buôn bán dùng miệng 口 để rao hàng, trao đổi mua bán → BUÔN BÁN.',
      cf:'高 (gāo – "cao", phần trên hình gần giống)',w:'商店'},
     {c:'店',p:'diàn',type:'半包围结构 · Bán bao vây',st:8,ord:'广(nghiễm, mái nhà) trên-trái → 占(chiếm) trong',rad:'广 (nghiễm – mái nhà che)',mean:'cửa hàng',
      tip:'Mái nhà 广 che một nơi được chiếm giữ 占 để bày bán hàng hoá → CỬA HÀNG.',
      cf:'占 (zhàn – "chiếm")',w:'商店'},
   ]},
  {n:8,zh:'谢谢',py:'xièxie',pos:'Động từ',vn:'cảm ơn',em:'🙏',lesson:2,
   ex_zh:'谢谢你！',ex_py:'Xièxie nǐ!',ex_vn:'Cảm ơn bạn!',
   exList:[{zh:'谢谢你！',py:'Xièxie nǐ!',vn:'Cảm ơn bạn!'}],
   hanzi:[
     {c:'谢',p:'xiè',type:'左右结构 · Trái-phải',st:12,ord:'讠(ngôn) trái → 射(xạ) phải',rad:'讠 (ngôn – lời nói)',mean:'cảm ơn',
      tip:'Dùng LỜI NÓI 讠 để bày tỏ lòng biết ơn khi được giúp đỡ → CẢM ƠN.',
      cf:'谁 (shéi – "ai", cùng bộ 讠)',w:'谢谢'},
   ]},
];

// Trắc nghiệm — không audio
const mcData = [
  {q:'"学校" nghĩa là gì?',opts:['trường học','cửa hàng','nhà','công viên'],ans:0},
  {q:'"在" nghĩa là gì?',opts:['ở, tại','đi','đến','về'],ans:0},
  {q:'"去" nghĩa là gì?',opts:['đi','ở','đến','về'],ans:0},
  {q:'"你们" nghĩa là gì?',opts:['các bạn (số nhiều)','bạn (số ít)','chúng ta','họ'],ans:0},
  {q:'"我们" nghĩa là gì?',opts:['chúng ta, chúng mình','các bạn','họ','mình'],ans:0},
  {q:'"哪儿" nghĩa là gì?',opts:['ở đâu','ở đây','ở đó','cái gì'],ans:0},
  {q:'"商店" nghĩa là gì?',opts:['cửa hàng','trường học','nhà','sân trường'],ans:0},
  {q:'"谢谢" nghĩa là gì?',opts:['cảm ơn','xin lỗi','tạm biệt','xin chào'],ans:0},
  {q:'Câu nào ĐÚNG khi nói "Mình đi trường học."?',opts:['我去学校。','我学校去。','去我学校。','学校我去。'],ans:0},
  {q:'Khi ai đó cảm ơn mình, con có thể đáp lại bằng gì?',opts:['不谢。','谢谢。','再见。','你好。'],ans:0},
  {q:'Câu nào ĐÚNG khi hỏi "Các bạn đang ở trường à?"?',opts:['你们在学校吗？','你们学校在吗？','在你们学校吗？','学校你们在吗？'],ans:0},
  {q:'"你们" và "我们" khác nhau ở đâu?',opts:['你们 chỉ các bạn, 我们 chỉ chúng mình','cả hai đều chỉ chúng mình','cả hai đều chỉ các bạn','không khác nhau'],ans:0},
  {q:'Muốn nói "Mình đi cửa hàng", con nói gì?',opts:['我去商店。','我商店去。','去我商店。','商店我去。'],ans:0},
  {q:'"们" dùng để làm gì?',opts:['biến đại từ thành số nhiều','phủ định','nghi vấn','sở hữu'],ans:0},
  {q:'Câu nào ĐÚNG khi hỏi "Bạn đi đâu?"?',opts:['你去哪儿？','你哪儿去？','哪儿你去？','去你哪儿？'],ans:0},
];

// Điền từ — tình huống địa điểm và xã giao
const fillData = [
  {pre:'Con hỏi bạn đi đâu: “你去',blank:'哪儿',post:'？”',hint:'(ở đâu)',ans:'哪儿'},
  {pre:'Con trả lời mình đi trường học: “我去',blank:'学校',post:'。”',hint:'(trường học)',ans:'学校'},
  {pre:'Con nói mình đang ở trường: “我',blank:'在',post:'学校。”',hint:'(ở, tại)',ans:'在'},
  {pre:'Con hỏi các bạn có đang ở trường không: “',blank:'你们',post:'在学校吗？”',hint:'(các bạn — số nhiều)',ans:'你们'},
  {pre:'Con trả lời chúng mình đang ở trường: “',blank:'我们',post:'在学校。”',hint:'(chúng mình)',ans:'我们'},
  {pre:'Con nói mình đi cửa hàng: “我去',blank:'商店',post:'。”',hint:'(cửa hàng)',ans:'商店'},
  {pre:'Con cảm ơn bạn: “',blank:'谢谢',post:'你！”',hint:'(cảm ơn)',ans:'谢谢'},
  {pre:'Con đáp lại khi được cảm ơn: “不',blank:'谢',post:'。”',hint:'(cảm ơn — trong câu đáp)',ans:'谢'},
];
