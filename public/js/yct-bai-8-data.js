// ══════════════════════════════════════════
// DATA — YCT Bài 8: 我去学校
// ══════════════════════════════════════════
var vocabData = [
  {n:1,zh:'学校',py:'xuéxiào',pos:'Danh từ',vn:'trường học', hv: 'học hiệu',em:'🏫',lesson:1,
   ex_zh:'我去学校。',ex_py:'Wǒ qù xuéxiào.',ex_vn:'Mình đi trường học.',
   exList:[{zh:'我去学校。',py:'Wǒ qù xuéxiào.',vn:'Mình đi trường học.'},{zh:'我们的学校很大。',py:'Wǒmen de xuéxiào hěn dà.',vn:'Trường của chúng mình rất to.'}],
   hanzi:[
     {c:'学',p:'xué',type:'上下结构 · Trên-dưới',st:8,ord:'⺍(mái, ba chấm) trên → 冖(nắp) → 子(con) dưới',rad:'子 (tử – con)',mean:'học',
      tip:'Đứa trẻ 子 ngồi dưới mái nhà 冖, ba chấm phía trên tượng trưng những ý nghĩ đang tiếp thu → HỌC.',
      cf:'字 (zì – "chữ", cũng có 子 phía dưới)',w:'学校'},
     {c:'校',p:'xiào',type:'左右结构 · Trái-phải',st:10,ord:'木(mộc) trái → 交(giao) phải',rad:'木 (mộc – gỗ)',mean:'trường (học)',
      tip:'Ngôi trường được dựng bằng gỗ 木, là nơi mọi người giao lưu học hỏi 交 → TRƯỜNG.',
      cf:'交 (jiāo – "giao")',w:'学校'},
   ]},
  {n:2,zh:'在',py:'zài',pos:'Động từ/Giới từ',vn:'ở, tại', hv: 'tại',em:'📍',lesson:1,
   ex_zh:'我在学校。',ex_py:'Wǒ zài xuéxiào.',ex_vn:'Mình đang ở trường.',
   exList:[{zh:'我在学校。',py:'Wǒ zài xuéxiào.',vn:'Mình đang ở trường.'},{zh:'妈妈在家。',py:'Māma zài jiā.',vn:'Mẹ ở nhà.'}],
   hanzi:[
     {c:'在',p:'zài',type:'半包围结构 · Bán bao vây',st:6,ord:'ナ(nghiễm giản lược) → 土(thổ) trong lòng',rad:'土 (thổ – đất)',mean:'ở, tại',
      tip:'Đứng vững trên nền đất 土, được che chắn xung quanh → chỉ vị trí đang Ở, TẠI đâu đó.',
      cf:'再 (zài – "lại, nữa", đồng âm khác chữ)',w:'我在学校'},
   ]},
  {n:3,zh:'去',py:'qù',pos:'Động từ',vn:'đi', hv: 'khứ',em:'🚶',lesson:1,
   ex_zh:'我们去学校。',ex_py:'Wǒmen qù xuéxiào.',ex_vn:'Chúng mình đi đến trường.',
   exList:[
     {zh:'我们去学校。',py:'Wǒmen qù xuéxiào.',vn:'Chúng mình đi đến trường.'},
     {zh:'你去商店吗？',py:'Nǐ qù shāngdiàn ma?',vn:'Bạn đi cửa hàng à?'},
   ],
   hanzi:[]},
  {n:4,zh:'哪儿',py:'nǎr',pos:'Đại từ',vn:'ở đâu', hv: 'na nhi',em:'❓',lesson:1,
   ex_zh:'你去哪儿？',ex_py:'Nǐ qù nǎr?',ex_vn:'Bạn đi đâu?',
   exList:[{zh:'你去哪儿？',py:'Nǐ qù nǎr?',vn:'Bạn đi đâu?'},{zh:'老师在哪儿？',py:'Lǎoshī zài nǎr?',vn:'Cô giáo ở đâu?'}],
   hanzi:[]},
  {n:5,zh:'你们',py:'nǐmen',pos:'Đại từ',vn:'các bạn (số nhiều)', hv: 'nhĩ môn',em:'🧑‍🤝‍🧑',lesson:2,
   ex_zh:'你们在学校吗？',ex_py:'Nǐmen zài xuéxiào ma?',ex_vn:'Các bạn đang ở trường à?',
   exList:[{zh:'你们在学校吗？',py:'Nǐmen zài xuéxiào ma?',vn:'Các bạn đang ở trường à?'},{zh:'你们去哪儿？',py:'Nǐmen qù nǎr?',vn:'Các bạn đi đâu thế?'}],
   hanzi:[
     {c:'们',p:'men',type:'左右结构 · Trái-phải',st:5,ord:'亻(nhân đứng) trái → 门(giản lược) phải',rad:'亻 (nhân đứng)',mean:'hậu tố số nhiều',
      tip:'Thêm 亻 (người) vào từ chỉ người để biến thành SỐ NHIỀU: 你们, 我们, 他们.',
      cf:'门 (mén – "cửa")',w:'你们 / 我们'},
   ]},
  {n:6,zh:'我们',py:'wǒmen',pos:'Đại từ',vn:'chúng ta, chúng mình', hv: 'ngã môn',em:'👨‍👩‍👧',lesson:2,
   ex_zh:'我们在学校。',ex_py:'Wǒmen zài xuéxiào.',ex_vn:'Chúng mình đang ở trường.',
   exList:[{zh:'我们在学校。',py:'Wǒmen zài xuéxiào.',vn:'Chúng mình đang ở trường.'},{zh:'我们是中国人。',py:'Wǒmen shì Zhōngguó rén.',vn:'Chúng mình là người Trung Quốc.'}],
   hanzi:[]},
  {n:7,zh:'商店',py:'shāngdiàn',pos:'Danh từ',vn:'cửa hàng', hv: 'thương điếm',em:'🏪',lesson:2,
   ex_zh:'我去商店。',ex_py:'Wǒ qù shāngdiàn.',ex_vn:'Mình đi cửa hàng.',
   exList:[{zh:'我去商店。',py:'Wǒ qù shāngdiàn.',vn:'Mình đi cửa hàng.'},{zh:'商店在哪儿？',py:'Shāngdiàn zài nǎr?',vn:'Cửa hàng ở đâu?'}],
   hanzi:[
     {c:'商',p:'shāng',type:'上下结构 · Trên-dưới',st:11,ord:'亠(đầu) trên → 冏(cửa sổ, giản lược) → 口(khẩu) dưới',rad:'口 (khẩu – miệng)',mean:'buôn bán, thương mại',
      tip:'Người buôn bán dùng miệng 口 để rao hàng, trao đổi mua bán → BUÔN BÁN.',
      cf:'高 (gāo – "cao", phần trên hình gần giống)',w:'商店'},
     {c:'店',p:'diàn',type:'半包围结构 · Bán bao vây',st:8,ord:'广(nghiễm, mái nhà) trên-trái → 占(chiếm) trong',rad:'广 (nghiễm – mái nhà che)',mean:'cửa hàng',
      tip:'Mái nhà 广 che một nơi được chiếm giữ 占 để bày bán hàng hoá → CỬA HÀNG.',
      cf:'占 (zhàn – "chiếm")',w:'商店'},
   ]},
  {n:8,zh:'谢谢',py:'xièxie',pos:'Động từ',vn:'cảm ơn', hv: 'tạ tạ',em:'🙏',lesson:2,
   ex_zh:'谢谢你！',ex_py:'Xièxie nǐ!',ex_vn:'Cảm ơn bạn!',
   exList:[{zh:'谢谢你！',py:'Xièxie nǐ!',vn:'Cảm ơn bạn!'},{zh:'谢谢老师！',py:'Xièxie lǎoshī!',vn:'Con cảm ơn cô ạ!'}],
   hanzi:[
     {c:'谢',p:'xiè',type:'左右结构 · Trái-phải',st:12,ord:'讠(ngôn) trái → 射(xạ) phải',rad:'讠 (ngôn – lời nói)',mean:'cảm ơn',
      tip:'Dùng LỜI NÓI 讠 để bày tỏ lòng biết ơn khi được giúp đỡ → CẢM ƠN.',
      cf:'谁 (shéi – "ai", cùng bộ 讠)',w:'谢谢'},
   ]},
];

var wuData = [
  {img:'🏫',label:'学校',py:'xuéxiào',letter:'A'},
  {img:'🏪',label:'商店',py:'shāngdiàn',letter:'B'},
  {img:'🚶',label:'去',py:'qù',letter:'C'},
  {img:'📍',label:'在',py:'zài',letter:'D'},
  {img:'🙏',label:'谢谢',py:'xièxie',letter:'E'},
  {img:'❓',label:'哪儿',py:'nǎr',letter:'F'},
];

var dialogData = [
  {scene:'Đi học',
   lines:[
     {sp:0,zh:'你去哪儿？',py:'Nǐ qù nǎr?',vn:'Bạn đi đâu?'},
     {sp:1,zh:'我去学校。',py:'Wǒ qù xuéxiào.',vn:'Mình đi trường học.'},
     {sp:0,zh:'我也去学校！',py:'Wǒ yě qù xuéxiào!',vn:'Mình cũng đi trường học!'},
   ]},
  {scene:'Ở đâu',
   lines:[
     {sp:0,zh:'你在哪儿？',py:'Nǐ zài nǎr?',vn:'Bạn đang ở đâu?'},
     {sp:1,zh:'我在学校。',py:'Wǒ zài xuéxiào.',vn:'Mình đang ở trường.'},
     {sp:0,zh:'你们在学校吗？',py:'Nǐmen zài xuéxiào ma?',vn:'Các bạn đang ở trường à?'},
     {sp:1,zh:'我们在学校。',py:'Wǒmen zài xuéxiào.',vn:'Chúng mình đang ở trường.'},
   ]},
  {scene:'Đi cửa hàng, nói lời cảm ơn',
   lines:[
     {sp:0,zh:'我去商店。',py:'Wǒ qù shāngdiàn.',vn:'Mình đi cửa hàng.'},
     {sp:1,zh:'谢谢你！',py:'Xièxie nǐ!',vn:'Cảm ơn bạn!'},
     {sp:0,zh:'不谢。',py:'Bù xiè.',vn:'Không có gì.'},
   ]},
];

// Điền từ — tình huống địa điểm và xã giao
var fillData = [
  {pre:'Bạn hỏi anh trai con đang ở đâu. Anh đang ở trường: “哥哥在',blank:'学校',post:'。”',hint:'(trường học)',ans:'学校',exp:'学校 = trường học; 在 + nơi chốn: 在学校.'},
  {pre:'Mẹ đang ở cửa hàng: “妈妈',blank:'在',post:'商店。”',hint:'(ở)',ans:'在',exp:'在 + nơi chốn = đang ở đâu: 妈妈在商店.'},
  {pre:'Chiều nay cả nhóm đến nhà cô giáo chơi: “我们',blank:'去',post:'老师家。”',hint:'(đi đến)',ans:'去',exp:'去 + nơi chốn = đi đến đâu: 去老师家.'},
  {pre:'Không thấy mèo của bạn đâu, con hỏi: “你的猫在',blank:'哪儿',post:'？”',hint:'(ở đâu)',ans:'哪儿',exp:'哪儿 = ở đâu, đứng sau 在: 在哪儿？'},
  {pre:'Con hỏi hai bạn đứng cạnh: “Các bạn đi cửa hàng à?” — “',blank:'你们',post:'去商店吗？”',hint:'(các bạn)',ans:'你们',exp:'你们 = các bạn (nhiều người); 你 chỉ một người.'},
  {pre:'Con và Lạc Lạc giới thiệu với cô: “',blank:'我们',post:'是中国人。”',hint:'(chúng mình)',ans:'我们',exp:'我们 = chúng mình (có cả người nói).'},
  {pre:'Ở góc phố có một cửa hàng: “那儿有一个',blank:'商店',post:'。”',hint:'(cửa hàng)',ans:'商店',exp:'商店 = cửa hàng; 那儿有…… = ở đó có…'},
  {pre:'Mẹ mua cho con bánh. Con nói: “',blank:'谢谢',post:'妈妈！”',hint:'(cảm ơn)',ans:'谢谢',exp:'谢谢 + người = cảm ơn ai: 谢谢妈妈！'},
];

// Sắp xếp — câu nói vị trí & điểm đến
var sortData = [
  {words:['我们','的','老师','在','家','。'],ans:'我们的老师在家。',audio:'我们的老师在家。'},
  {words:['甜甜','在','家','吗','？'],ans:'甜甜在家吗？',audio:'甜甜在家吗？'},
  {words:['老师','不','在','学校','。'],ans:'老师不在学校。',audio:'老师不在学校。'},
  {words:['谁','在','商店','？'],ans:'谁在商店？',audio:'谁在商店？'},
  {words:['我','的','鱼','在','家','。'],ans:'我的鱼在家。',audio:'我的鱼在家。'},
];

var matchData = [
  {left:'你去哪儿？',right:'我去学校。'},
  {left:'你在哪儿？',right:'我在商店。'},
  {left:'谢谢你！',right:'不谢。'},
  {left:'你们在家吗？',right:'我们不在家。'},
  {left:'学校在哪儿？',right:'在那儿。'},
  {left:'谁去商店？',right:'我去！'},
];

// Trắc nghiệm — không audio
var mcData = [
  {q:'Bạn gọi điện hỏi con đang ở đâu. Con đang ở trường. Con đáp:',opts:['在学校。','去学校。','学校在。','是学校。'],ans:0,exp:'在 + nơi chốn = đang ở đâu; 去 + nơi chốn = đi đến đâu.'},
  {q:'Mẹ hỏi chiều nay con đi đâu. Con đi cửa hàng. Con đáp:',opts:['去商店。','在商店去。','商店去。','我商店。'],ans:0,exp:'去 đứng trước nơi chốn: 去商店. Không đặt 去 ra sau như "cửa hàng đi".'},
  {q:'Con hỏi hai bạn đứng cạnh: “Các bạn có mèo không?”',opts:['你们有猫吗？','我们有猫吗？','你们是猫吗？','你们猫有吗？'],ans:0,exp:'Hỏi nhiều bạn dùng 你们 (các bạn); 我们 là "chúng mình". Hỏi "có" dùng 有, không dùng 是.'},
  {q:'Bạn nói: “谢谢你！” Con đáp:',opts:['不谢。','谢谢。','不是。','没有。'],ans:0,exp:'Đáp lại lời cảm ơn: 不谢 (không có gì).'},
  {q:'Con muốn nói: “Bố không ở nhà.”',opts:['爸爸不在家。','爸爸在不家。','爸爸不是家。','不爸爸在家。'],ans:0,exp:'不 đứng trước 在: 不在家 = không ở nhà.'},
];

var speakingData = {
  t1:{
    intro:'Nhấn nút loa nghe từng câu mẫu, đọc to theo cho tới khi trôi chảy nhé!',
    models:[
      {zh:'你去哪儿？',py:'Nǐ qù nǎr?',vn:'Bạn đi đâu?'},
      {zh:'你们在学校吗？',py:'Nǐmen zài xuéxiào ma?',vn:'Các bạn đang ở trường à?'},
      {zh:'谢谢你！不谢。',py:'Xièxie nǐ! Bú xiè.',vn:'Cảm ơn bạn! — Không có gì.'},
    ],
  },
  t2:{
    intro:'Dùng khung câu cho sẵn, thay thế phần gạch chân bằng từ trong ô gợi ý. Nhấn nút loa để nghe rồi nói to mỗi câu con tạo được.',
    drills:[
      {frame:'我去＿＿。',frame_py:'Wǒ qù ___.',vn:'Mình đi ＿＿.',options:['学校','商店'],samples:['我去学校。','我去商店。']},
    ],
  },
  t3:{
    intro:'Không nhìn câu mẫu, con hãy tưởng tượng mình đang ở trong tình huống thật và tự nói câu phù hợp nhé!',
    tasks:[
      {role:'🏠 Tình huống 1 — Bố đâu rồi?',
       guide:'Con về nhà không thấy bố. Con hỏi mẹ bố đang ở đâu.',
       structure:['妈妈，……在哪儿？'],
       sample:'妈妈，爸爸在哪儿？',
       sample_vn:'Mẹ ơi, bố đâu rồi ạ?',
       note:'在哪儿 = ở đâu, đứng sau người/vật mình muốn tìm.'},
      {role:'🎒 Tình huống 2 — Cùng đi học',
       guide:'Sáng nay con và bạn cùng đi học. Con nói với mẹ.',
       structure:['我和……去……！'],
       sample:'我和甜甜去学校！',
       sample_vn:'Con với Điềm Điềm đi học đây!',
       note:'去 + nơi chốn = đi đến đâu.'},
      {role:'🙏 Tình huống 3 — Cảm ơn cô giáo',
       guide:'Cô giáo cho con mượn bút. Con cảm ơn cô.',
       structure:['谢谢……！'],
       sample:'谢谢老师！',
       sample_vn:'Con cảm ơn cô ạ!',
       note:'谢谢 + người được cảm ơn. Người kia sẽ đáp 不谢.'},
    ],
  },
};

// ══════════════════════════════════════════
// LUYỆN DỊCH (Việt→Trung) — câu ví dụ của chính bài này
// ══════════════════════════════════════════
var translateData = [
  {vi:"Cảm ơn bố!", zh:"谢谢爸爸！", py:"Xièxie bàba!"},
  {vi:"Ai ở nhà?", zh:"谁在家？", py:"Shéi zài jiā?"},
];

// ══════════════════════════════════════════
// LUYỆN DỊCH (Trung→Việt) — lời thoại trong bài, khác chiều Việt→Trung
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:"Trường của chúng mình có rất nhiều chim.", zh:"我们的学校有很多鸟。", py:"Wǒmen de xuéxiào yǒu hěn duō niǎo."},
  {vi:"Các bạn là người Trung Quốc à?", zh:"你们是中国人吗？", py:"Nǐmen shì Zhōngguó rén ma?"},
];

// ══════════════════════════════════════════
// LUYỆN NGHE — đoạn nghe ngắn (đọc bằng giọng máy), chỉ dùng từ đã học
// ══════════════════════════════════════════
var listenData = [
  {audio:'谁去学校？我去！我也去！',
   questions:[
     {q:'Người nói đầu tiên hỏi gì?',opts:['Ai đi đến trường','Trường ở đâu','Ai ở nhà'],ans:0,exp:'谁去学校 = ai đi đến trường.'},
   ]},
  {audio:'我们的学校很大！',
   questions:[
     {q:'Trường học thế nào?',opts:['Nhỏ','To','Không nói'],ans:1,exp:'很大 = rất to.'},
     {q:'Đó là trường của ai?',opts:['Của các bạn','Của cô giáo','Của chúng mình'],ans:2,exp:'我们的学校 = trường của chúng mình.'},
   ]},
  {audio:'谢谢你们！不谢！',
   questions:[
     {q:'Người nói đầu tiên đang làm gì?',opts:['Cảm ơn các bạn','Chào các bạn','Hỏi đường'],ans:0,exp:'谢谢你们 = cảm ơn các bạn; 不谢 = không có gì.'},
   ]},
  {audio:'你们去哪儿？我们去商店。',
   questions:[
     {q:'Các bạn đi đâu?',opts:['Đến trường','Đến cửa hàng','Về nhà'],ans:1,exp:'我们去商店 = chúng mình đi cửa hàng.'},
   ]},
];
