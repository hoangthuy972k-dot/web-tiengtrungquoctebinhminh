// ══════════════════════════════════════════
// DATA — HSK1 Bài 9: 你儿子在哪儿工作?
// ══════════════════════════════════════════
var vocabData = [
  {n:1,zh:'小',py:'xiǎo',pos:'Tính từ',vn:'nhỏ, bé',em:'🔹',lesson:1,
   ex_zh:'小猫在哪儿？',ex_py:'Xiǎo māo zài nǎr?',ex_vn:'Con mèo đâu rồi?',
   exList:[
     {zh:'小猫在哪儿？',py:'Xiǎo māo zài nǎr?',vn:'Con mèo đâu rồi?'},
   ],
   hanzi:[
     {c:'小',p:'xiǎo',type:'独体字 · Tượng hình',st:3,ord:'丨→𠂇→丶',rad:'小 (tiểu – tự thành bộ)',mean:'nhỏ, bé',
      tip:'Hình ba hạt cát nhỏ li ti → NHỎ, BÉ.',
      cf:'少 (shǎo – "ít", đã học Bài 8")',w:'小猫 / 小狗'},
   ]},
  {n:2,zh:'猫',py:'māo',pos:'Danh từ',vn:'con mèo',em:'🐱',lesson:1,
   ex_zh:'小猫在那儿。',ex_py:'Xiǎo māo zài nàr.',ex_vn:'Con mèo ở đó kìa.',
   exList:[
     {zh:'小猫在那儿。',py:'Xiǎo māo zài nàr.',vn:'Con mèo ở đó kìa.'},
   ],
   hanzi:[
     {c:'猫',p:'māo',type:'左右结构 · Trái-phải',st:11,ord:'犭(khuyển) trái → 苗(miêu) phải',rad:'犭 (khuyển – thú vật, biến thể)',mean:'con mèo',
      tip:'犭(loài thú) + 苗(mượn âm) → CON MÈO.',
      cf:'描 (miáo – "miêu tả")',w:'小猫'},
   ]},
  {n:3,zh:'在',py:'zài',pos:'Động từ',vn:'ở (ở vị trí nào đó)',em:'📍',lesson:1,
   ex_zh:'小猫在哪儿？',ex_py:'Xiǎo māo zài nǎr?',ex_vn:'Con mèo đâu rồi?',
   exList:[
     {zh:'小猫在哪儿？',py:'Xiǎo māo zài nǎr?',vn:'Con mèo đâu rồi?'},
     {zh:'我朋友在学校。',py:'Wǒ péngyou zài xuéxiào.',vn:'Bạn tôi ở trường.'},
   ],
   hanzi:[
     {c:'在',p:'zài',type:'半包围结构 · Bán bao vây',st:6,ord:'ナ(biến thể) → 土(thổ) trong',rad:'土 (thổ – đất)',mean:'ở (tại vị trí nào đó)',
      tip:'ナ(che chắn) + 土(đất, nơi chốn) → đang tồn tại Ở một vị trí.',
      cf:'存 (cún – "tồn tại", nghĩa gần giống")',w:'小猫在哪儿 / 我在学校'},
   ]},
  {n:4,zh:'那儿',py:'nàr',pos:'Đại từ',vn:'đằng kia, ở đó',em:'📌',lesson:1,
   ex_zh:'小猫在那儿。',ex_py:'Xiǎo māo zài nàr.',ex_vn:'Con mèo ở đó kìa.',
   exList:[
     {zh:'小猫在那儿。',py:'Xiǎo māo zài nàr.',vn:'Con mèo ở đó kìa.'},
   ],
   hanzi:[]},
  {n:5,zh:'狗',py:'gǒu',pos:'Danh từ',vn:'con chó',em:'🐶',lesson:1,
   ex_zh:'小狗在椅子下面。',ex_py:'Xiǎo gǒu zài yǐzi xiàmiàn.',ex_vn:'Con chó ở dưới ghế dựa.',
   exList:[
     {zh:'小狗在椅子下面。',py:'Xiǎo gǒu zài yǐzi xiàmiàn.',vn:'Con chó ở dưới ghế dựa.'},
   ],
   hanzi:[
     {c:'狗',p:'gǒu',type:'左右结构 · Trái-phải',st:8,ord:'犭(khuyển) trái → 句(cú) phải',rad:'犭 (khuyển – thú vật, biến thể)',mean:'con chó',
      tip:'犭(loài thú) + 句(mượn âm) → CON CHÓ.',
      cf:'苟 (gǒu – "cẩu thả", cùng phần 句")',w:'小狗'},
   ]},
  {n:6,zh:'椅子',py:'yǐzi',pos:'Danh từ',vn:'ghế dựa',em:'🪑',lesson:1,
   ex_zh:'小狗在椅子下面。',ex_py:'Xiǎo gǒu zài yǐzi xiàmiàn.',ex_vn:'Con chó ở dưới ghế dựa.',
   exList:[
     {zh:'小狗在椅子下面。',py:'Xiǎo gǒu zài yǐzi xiàmiàn.',vn:'Con chó ở dưới ghế dựa.'},
   ],
   hanzi:[
     {c:'椅',p:'yǐ',type:'左右结构 · Trái-phải',st:12,ord:'木(mộc) trái → 奇(kỳ) phải',rad:'木 (mộc – gỗ)',mean:'ghế tựa',
      tip:'木(gỗ) + 奇(đặc biệt) → đồ gỗ đặc biệt để ngồi tựa lưng = GHẾ. (子 đã học ở Bài 8)',
      cf:'倚 (yǐ – "dựa vào")',w:'椅子'},
   ]},
  {n:7,zh:'下面',py:'xiàmiàn',pos:'Danh từ',vn:'bên dưới, phía dưới',em:'⬇️',lesson:2,
   ex_zh:'小狗在椅子下面。',ex_py:'Xiǎo gǒu zài yǐzi xiàmiàn.',ex_vn:'Con chó ở dưới ghế dựa.',
   exList:[
     {zh:'小狗在椅子下面。',py:'Xiǎo gǒu zài yǐzi xiàmiàn.',vn:'Con chó ở dưới ghế dựa.'},
   ],
   hanzi:[
     {c:'面',p:'miàn',type:'独体字 · Tượng hình',st:9,ord:'一→丆→㡿(biến thể)',rad:'面 (diện – tự thành bộ)',mean:'mặt, phía, bên',
      tip:'Hình khuôn mặt người cách điệu → MẶT, mở rộng chỉ PHÍA, BÊN (下面 = phía dưới). (下 đã học ở Bài 8)',
      cf:'面 dễ nhầm 而 (ér – "mà")',w:'下面 / 后面'},
   ]},
  {n:8,zh:'在',py:'zài',pos:'Giới từ',vn:'ở, tại (trước nơi chốn)',em:'📍',lesson:2,
   ex_zh:'我在学校工作。',ex_py:'Wǒ zài xuéxiào gōngzuò.',ex_vn:'Tôi làm việc ở trường học.',
   exList:[
     {zh:'我在学校工作。',py:'Wǒ zài xuéxiào gōngzuò.',vn:'Tôi làm việc ở trường học.'},
   ],
   hanzi:[]},
  {n:9,zh:'哪儿',py:'nǎr',pos:'Đại từ',vn:'ở đâu, chỗ nào',em:'❓',lesson:2,
   ex_zh:'你在哪儿工作？',ex_py:'Nǐ zài nǎr gōngzuò?',ex_vn:'Anh làm việc ở đâu?',
   exList:[
     {zh:'你在哪儿工作？',py:'Nǐ zài nǎr gōngzuò?',vn:'Anh làm việc ở đâu?'},
   ],
   hanzi:[]},
  {n:10,zh:'工作',py:'gōngzuò',pos:'Động từ / Danh từ',vn:'làm việc; công việc',em:'💼',lesson:2,
   ex_zh:'我在学校工作。',ex_py:'Wǒ zài xuéxiào gōngzuò.',ex_vn:'Tôi làm việc ở trường học.',
   exList:[
     {zh:'我在学校工作。',py:'Wǒ zài xuéxiào gōngzuò.',vn:'Tôi làm việc ở trường học.'},
   ],
   hanzi:[
     {c:'工',p:'gōng',type:'独体字 · Tượng hình',st:3,ord:'一→丨→一',rad:'工 (công – tự thành bộ)',mean:'công việc, thợ',
      tip:'Hình cái thước thợ/dụng cụ lao động → CÔNG VIỆC, LAO ĐỘNG.',
      cf:'土 (tǔ – "đất")',w:'工作'},
     {c:'作',p:'zuò',type:'左右结构 · Trái-phải',st:7,ord:'亻(nhân) trái → 乍(sạ) phải',rad:'亻 (nhân – người)',mean:'làm',
      tip:'亻(người) + 乍(vừa mới bắt đầu) → người bắt tay vào LÀM việc.',
      cf:'做 (zuò – "làm", đã học Bài 6, nghĩa gần giống")',w:'工作'},
   ]},
  {n:11,zh:'儿子',py:'érzi',pos:'Danh từ',vn:'con trai',em:'👦',lesson:2,
   ex_zh:'我儿子在医院工作。',ex_py:'Wǒ érzi zài yīyuàn gōngzuò.',ex_vn:'Con trai tôi làm việc ở bệnh viện.',
   exList:[
     {zh:'我儿子在医院工作。',py:'Wǒ érzi zài yīyuàn gōngzuò.',vn:'Con trai tôi làm việc ở bệnh viện.'},
   ],
   hanzi:[]},
  {n:12,zh:'医院',py:'yīyuàn',pos:'Danh từ',vn:'bệnh viện',em:'🏥',lesson:2,
   ex_zh:'我儿子在医院工作，他是医生。',ex_py:'Wǒ érzi zài yīyuàn gōngzuò, tā shì yīshēng.',ex_vn:'Con trai tôi làm việc ở bệnh viện, nó là bác sĩ.',
   exList:[
     {zh:'我儿子在医院工作，他是医生。',py:'Wǒ érzi zài yīyuàn gōngzuò, tā shì yīshēng.',vn:'Con trai tôi làm việc ở bệnh viện, nó là bác sĩ.'},
   ],
   hanzi:[
     {c:'医',p:'yī',type:'半包围结构 · Bán bao vây',st:7,ord:'匚(hễ, biến thể) ngoài → 矢(thỉ) trong',rad:'匚 (hễ – hộp đựng, biến thể)',mean:'y tế, chữa bệnh',
      tip:'匚(hộp đựng dụng cụ) + 矢(mũi tên, dụng cụ y tế cổ) → dụng cụ CHỮA BỆNH = Y TẾ.',
      cf:'区 (qū – "khu vực")',w:'医院 / 医生'},
     {c:'院',p:'yuàn',type:'左右结构 · Trái-phải',st:9,ord:'阝(phụ) trái → 完(hoàn) phải',rad:'阝 (phụ – gò đất, tường vây)',mean:'viện, sân',
      tip:'阝(tường bao quanh) + 完(hoàn chỉnh) → khuôn viên có tường bao đầy đủ chức năng = VIỆN.',
      cf:'完 (wán – "hoàn thành")',w:'医院 / 学院'},
   ]},
  {n:13,zh:'医生',py:'yīshēng',pos:'Danh từ',vn:'bác sĩ',em:'👨‍⚕️',lesson:2,
   ex_zh:'他是医生。',ex_py:'Tā shì yīshēng.',ex_vn:'Nó là bác sĩ.',
   exList:[
     {zh:'他是医生。',py:'Tā shì yīshēng.',vn:'Nó là bác sĩ.'},
   ],
   hanzi:[]},
  {n:14,zh:'爸爸',py:'bàba',pos:'Danh từ',vn:'cha, bố',em:'👨',lesson:3,
   ex_zh:'你爸爸在家吗？',ex_py:'Nǐ bàba zài jiā ma?',ex_vn:'Cha cô có ở nhà không?',
   exList:[
     {zh:'你爸爸在家吗？',py:'Nǐ bàba zài jiā ma?',vn:'Cha cô có ở nhà không?'},
   ],
   hanzi:[
     {c:'爸',p:'bà',type:'上下结构 · Trên-dưới',st:8,ord:'父(phụ) trên → 巴(ba) dưới',rad:'父 (phụ – cha)',mean:'cha, bố',
      tip:'父(bàn tay cầm roi dạy dỗ, biểu tượng người cha) + 巴(mượn âm) → tiếng gọi CHA, BỐ.',
      cf:'吧 (ba – "trợ từ ngữ khí", cũng mượn âm 巴")',w:'爸爸'},
   ]},
];

const wuData = [
  {img:'🐱',label:'猫',py:'māo',letter:'A'},
  {img:'🐶',label:'狗',py:'gǒu',letter:'B'},
  {img:'🪑',label:'椅子',py:'yǐzi',letter:'C'},
  {img:'💼',label:'工作',py:'gōngzuò',letter:'D'},
  {img:'🏥',label:'医院',py:'yīyuàn',letter:'E'},
  {img:'👨',label:'爸爸',py:'bàba',letter:'F'},
];

var dialogData = [
  {scene:'Ở nhà · Tìm con mèo, con chó',
   lines:[
     {sp:0,zh:'小猫在哪儿？',py:'Xiǎo māo zài nǎr?',vn:'Con mèo đâu rồi?'},
     {sp:1,zh:'小猫在那儿。',py:'Xiǎo māo zài nàr.',vn:'Nó ở đó kìa.'},
     {sp:0,zh:'小狗在哪儿？',py:'Xiǎo gǒu zài nǎr?',vn:'Còn con chó đâu?'},
     {sp:1,zh:'小狗在椅子下面。',py:'Xiǎo gǒu zài yǐzi xiàmiàn.',vn:'Ở dưới ghế dựa.'},
   ]},
  {scene:'Ở bến xe · Hỏi nơi làm việc',
   lines:[
     {sp:0,zh:'你在哪儿工作？',py:'Nǐ zài nǎr gōngzuò?',vn:'Anh làm việc ở đâu?'},
     {sp:1,zh:'我在学校工作。',py:'Wǒ zài xuéxiào gōngzuò.',vn:'Tôi làm việc ở trường học.'},
     {sp:0,zh:'你儿子在哪儿工作？',py:'Nǐ érzi zài nǎr gōngzuò?',vn:'Con trai anh làm việc ở đâu?'},
     {sp:1,zh:'我儿子在医院工作，他是医生。',py:'Wǒ érzi zài yīyuàn gōngzuò, tā shì yīshēng.',vn:'Con trai tôi làm việc ở bệnh viện, nó là bác sĩ.'},
   ]},
  {scene:'Gọi điện thoại · Hỏi thăm cha',
   lines:[
     {sp:0,zh:'你爸爸在家吗？',py:'Nǐ bàba zài jiā ma?',vn:'Cha cô có ở nhà không?'},
     {sp:1,zh:'不在家。',py:'Bú zài jiā.',vn:'Không có.'},
     {sp:0,zh:'他在哪儿呢？',py:'Tā zài nǎr ne?',vn:'Ông ấy đâu rồi?'},
     {sp:1,zh:'他在医院。',py:'Tā zài yīyuàn.',vn:'Ông ấy ở bệnh viện.'},
   ]},
];

// Điền từ — đổi con vật/nơi chốn so với bài khoá
const fillData = [
  {pre:'Bạn hỏi con mèo đang ở đâu: “小猫',blank:'在',post:'哪儿？”',hint:'(ở — động từ)',ans:'在'},
  {pre:'Bạn nói con chó ở dưới bàn: “小狗在桌子',blank:'下面',post:'。”',hint:'(bên dưới)',ans:'下面'},
  {pre:'Bạn hỏi ai đó làm việc ở đâu: “你在',blank:'哪儿',post:'工作？”',hint:'(ở đâu)',ans:'哪儿'},
  {pre:'Bạn nói mình làm việc ở bệnh viện: “我在',blank:'医院',post:'工作。”',hint:'(bệnh viện)',ans:'医院'},
  {pre:'Bạn giới thiệu con trai mình là bác sĩ: “我儿子是',blank:'医生',post:'。”',hint:'(bác sĩ)',ans:'医生'},
  {pre:'Bạn hỏi cha có ở nhà không: “你',blank:'爸爸',post:'在家吗？”',hint:'(cha, bố)',ans:'爸爸'},
  {pre:'Bạn phủ định ai đó không có ở nhà: “他不',blank:'在',post:'家。”',hint:'(ở — động từ)',ans:'在'},
  {pre:'Bạn hỏi vị trí một cái ghế: “',blank:'椅',post:'子在哪儿？”',hint:'(ghế)',ans:'椅'},
];

// Sắp xếp — đổi con vật/vị trí so với bài khoá
const sortData = [
  {words:['小','猫','在','哪儿','？'],ans:'小猫在哪儿？',audio:'小猫在哪儿？'},
  {words:['小','狗','在','桌子','下面','。'],ans:'小狗在桌子下面。',audio:'小狗在桌子下面。'},
  {words:['你','在','哪儿','工作','？'],ans:'你在哪儿工作？',audio:'你在哪儿工作？'},
  {words:['我','儿子','在','医院','工作','。'],ans:'我儿子在医院工作。',audio:'我儿子在医院工作。'},
  {words:['你','爸爸','在','家','吗','？'],ans:'你爸爸在家吗？',audio:'你爸爸在家吗？'},
  {words:['他','在','医院','。'],ans:'他在医院。',audio:'他在医院。'},
];

const matchData = [
  {left:'小猫在哪儿？',right:'小猫在那儿。'},
  {left:'小狗在哪儿？',right:'小狗在椅子下面。'},
  {left:'你在哪儿工作？',right:'我在学校工作。'},
  {left:'你儿子在哪儿工作？',right:'我儿子在医院工作，他是医生。'},
  {left:'你爸爸在家吗？',right:'不在家。'},
];

// Trắc nghiệm — trọng tâm 在/哪儿, không audio
const mcData = [
  {q:'小猫＿＿哪儿？',opts:['在','是','有','去'],ans:0},
  {q:'小狗在椅子＿＿。',opts:['下面','上面','里面','外面'],ans:0},
  {q:'你在＿＿工作？',opts:['哪儿','什么','谁','怎么'],ans:0},
  {q:'Giới từ "在" trong câu "我在学校工作" có nghĩa gì?',opts:['ở, tại (nơi chốn xảy ra hành động)','là','có','muốn'],ans:0},
  {q:'"医生" nghĩa là gì?',opts:['bác sĩ','bệnh viện','giáo viên','học sinh'],ans:0},
  {q:'"工作" nghĩa là gì?',opts:['làm việc, công việc','nghỉ ngơi','học tập','đi chơi'],ans:0},
  {q:'"爸爸" nghĩa là gì?',opts:['cha, bố','mẹ','anh trai','ông nội'],ans:0},
  {q:'Câu nào ĐÚNG khi phủ định "在" (không ở đâu đó)?',opts:['不在','没在','不是在','别在'],ans:0},
  {q:'"哪儿" nghĩa là gì?',opts:['ở đâu, chỗ nào','ở đó','ở đây','cái nào'],ans:0},
  {q:'"儿子" nghĩa là gì?',opts:['con trai','con gái','cháu trai','em trai'],ans:0},
];

const speakingData = {
  t1:{
    intro:'Nhấn 🔊 nghe từng câu mẫu, đọc to theo cho tới khi trôi chảy.',
    models:[
      {zh:'小猫在哪儿？',py:'Xiǎo māo zài nǎr?',vn:'Con mèo đâu rồi?'},
      {zh:'小猫在那儿。',py:'Xiǎo māo zài nàr.',vn:'Nó ở đó kìa.'},
      {zh:'你在哪儿工作？',py:'Nǐ zài nǎr gōngzuò?',vn:'Anh làm việc ở đâu?'},
      {zh:'我儿子在医院工作，他是医生。',py:'Wǒ érzi zài yīyuàn gōngzuò, tā shì yīshēng.',vn:'Con trai tôi làm việc ở bệnh viện, nó là bác sĩ.'},
      {zh:'你爸爸在家吗？',py:'Nǐ bàba zài jiā ma?',vn:'Cha cô có ở nhà không?'},
    ],
  },
  t2:{
    intro:'Dùng khung câu cho sẵn, thay thế phần gạch chân bằng từ trong ô gợi ý. Nhấn 🔊 để nghe rồi nói to mỗi câu bạn tạo được.',
    drills:[
      {frame:'我在＿＿工作。',frame_py:'Wǒ zài ___ gōngzuò.',vn:'Tôi làm việc ở ＿＿.',options:['学校','医院'],samples:['我在学校工作。','我在医院工作。']},
      {frame:'小狗在椅子＿＿。',frame_py:'Xiǎo gǒu zài yǐzi ___.',vn:'Con chó ở ＿＿ ghế dựa.',options:['下面','上面'],samples:['小狗在椅子下面。','小狗在椅子上面。']},
    ],
  },
  t3:{
    intro:'Không nhìn câu mẫu, hãy tưởng tượng bạn đang ở trong tình huống thực tế và tự nói ra câu phù hợp.',
    tasks:[
      {role:'🐾 Tình huống 1 — Tìm thú cưng trong nhà',
       guide:'Bạn đang tìm con mèo và con chó của mình trong nhà.',
       structure:['小猫在哪儿？','小狗在椅子＿＿。'],
       sample:'小猫在哪儿？小猫在那儿。小狗在椅子下面。',
       sample_vn:'Con mèo đâu rồi? Nó ở đó kìa. Con chó ở dưới ghế dựa.',
       note:'在 + Nơi chốn luôn đặt SAU chủ ngữ và trước vị trí cụ thể — khác với tiếng Việt có thể đảo ngược tự do hơn ("Ở đâu con mèo?").'},
      {role:'💼 Tình huống 2 — Hỏi thăm nơi làm việc của gia đình',
       guide:'Bạn gặp một người quen và hỏi thăm công việc của họ và con cái họ.',
       structure:['你在哪儿工作？','我儿子在＿＿工作，他是＿＿。'],
       sample:'你在哪儿工作？我儿子在医院工作，他是医生。',
       sample_vn:'Anh làm việc ở đâu? Con trai tôi làm việc ở bệnh viện, nó là bác sĩ.',
       note:'Câu "在 + Nơi chốn + 工作" là mẫu câu cực kỳ THỰC DỤNG khi giới thiệu nghề nghiệp bản thân hoặc người thân trong giao tiếp hàng ngày.'},
      {role:'📞 Tình huống 3 — Gọi điện hỏi thăm người thân',
       guide:'Bạn gọi điện cho một người bạn và hỏi thăm xem cha của họ có ở nhà không.',
       structure:['你爸爸在家吗？','不在家，他在＿＿。'],
       sample:'你爸爸在家吗？不在家，他在医院。',
       sample_vn:'Cha bạn có ở nhà không? Không có, ông ấy ở bệnh viện.',
       note:'Khi trả lời phủ định "不在家", người Trung Quốc thường nói THÊM địa điểm thực tế ngay sau đó để câu trả lời đầy đủ, tránh chỉ nói cộc lốc.'},
    ],
  },
};
