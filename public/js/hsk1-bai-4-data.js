// ══════════════════════════════════════════
// DATA — HSK1 Bài 4: 她是我的汉语老师。
// ══════════════════════════════════════════
var vocabData = [
  {n:1,zh:'她',py:'tā',pos:'Đại từ',vn:'cô ấy, bà ấy',em:'👩',lesson:1,
   ex_zh:'她是谁？',ex_py:'Tā shì shéi?',ex_vn:'Cô ấy là ai vậy?',
   exList:[
     {zh:'她是谁？',py:'Tā shì shéi?',vn:'Cô ấy là ai vậy?'},
     {zh:'她是我的汉语老师。',py:'Tā shì wǒ de Hànyǔ lǎoshī.',vn:'Cô ấy là cô giáo dạy tôi tiếng Trung Quốc.'},
   ],
   hanzi:[
     {c:'她',p:'tā',type:'左右结构 · Trái-phải',st:6,ord:'女(nữ) trái → 也(dã) phải',rad:'女 (nữ – con gái)',mean:'cô ấy, bà ấy',
      tip:'女(nữ giới) + 也(đại từ cổ) → đại từ chỉ NGƯỜI NỮ đang được nhắc đến.',
      cf:'姐 (jiě – "chị gái")',w:'她是我朋友'},
   ]},
  {n:2,zh:'谁',py:'shéi',pos:'Đại từ',vn:'ai',em:'❓',lesson:1,
   ex_zh:'她是谁？',ex_py:'Tā shì shéi?',ex_vn:'Cô ấy là ai vậy?',
   exList:[
     {zh:'她是谁？',py:'Tā shì shéi?',vn:'Cô ấy là ai vậy?'},
     {zh:'他是谁？',py:'Tā shì shéi?',vn:'Anh ấy là ai thế?'},
   ],
   hanzi:[
     {c:'谁',p:'shéi',type:'左右结构 · Trái-phải',st:10,ord:'讠(ngôn) trái → 隹(chuy) phải',rad:'讠 (ngôn – lời nói)',mean:'ai',
      tip:'讠(lời nói) dùng để cất tiếng HỎI xem người đó là ai.',
      cf:'唯 (wéi – "duy nhất", cũng có 隹")',w:'她是谁 / 他是谁'},
   ]},
  {n:3,zh:'的',py:'de',pos:'Trợ từ',vn:'trợ từ kết cấu, biểu thị sở hữu',em:'🔗',lesson:1,
   ex_zh:'她是我的汉语老师。',ex_py:'Tā shì wǒ de Hànyǔ lǎoshī.',ex_vn:'Cô ấy là cô giáo dạy tôi tiếng Trung Quốc.',
   exList:[
     {zh:'她是我的汉语老师。',py:'Tā shì wǒ de Hànyǔ lǎoshī.',vn:'Cô ấy là cô giáo dạy tôi tiếng Trung Quốc.'},
   ],
   hanzi:[
     {c:'的',p:'de',type:'左右结构 · Trái-phải',st:8,ord:'白(bạch) trái → 勺(chước) phải',rad:'白 (bạch – trắng)',mean:'trợ từ sở hữu (của)',
      tip:'白(rõ ràng, sáng tỏ) → làm RÕ mối quan hệ SỞ HỮU giữa hai danh từ.',
      cf:'白 (bái – "màu trắng")',w:'我的 / 你的 / 汉语老师的'},
   ]},
  {n:4,zh:'汉语',py:'Hànyǔ',pos:'Danh từ',vn:'tiếng Trung Quốc',em:'🈶',lesson:1,
   ex_zh:'她是我的汉语老师。',ex_py:'Tā shì wǒ de Hànyǔ lǎoshī.',ex_vn:'Cô ấy là cô giáo dạy tôi tiếng Trung Quốc.',
   exList:[
     {zh:'她是我的汉语老师。',py:'Tā shì wǒ de Hànyǔ lǎoshī.',vn:'Cô ấy là cô giáo dạy tôi tiếng Trung Quốc.'},
   ],
   hanzi:[
     {c:'汉',p:'hàn',type:'左右结构 · Trái-phải',st:5,ord:'氵(thuỷ) trái → 又(biến thể) phải',rad:'氵 (thuỷ – nước)',mean:'(dân tộc, ngôn ngữ) Hán',
      tip:'氵(nước, chỉ dòng Hán Thuỷ) → tên gọi dân tộc Hán, ngôn ngữ HÁN.',
      cf:'双 (shuāng – "đôi, cặp")',w:'汉语 / 汉字'},
     {c:'语',p:'yǔ',type:'左右结构 · Trái-phải',st:9,ord:'讠(ngôn) trái → 吾(ngô) phải',rad:'讠 (ngôn – lời nói)',mean:'ngôn ngữ, tiếng nói',
      tip:'讠(lời nói) + 吾(ta, tôi) → LỜI NÓI của con người = NGÔN NGỮ.',
      cf:'悟 (wù – "tỉnh ngộ")',w:'汉语'},
   ]},
  {n:5,zh:'哪',py:'nǎ',pos:'Đại từ',vn:'nào, cái nào',em:'🧭',lesson:2,
   ex_zh:'你是哪国人？',ex_py:'Nǐ shì nǎ guó rén?',ex_vn:'Anh là người nước nào vậy?',
   exList:[
     {zh:'你是哪国人？',py:'Nǐ shì nǎ guó rén?',vn:'Anh là người nước nào vậy?'},
   ],
   hanzi:[
     {c:'哪',p:'nǎ',type:'左右结构 · Trái-phải',st:9,ord:'口(khẩu) trái → 那(na) phải',rad:'口 (khẩu – miệng)',mean:'nào, cái nào',
      tip:'口(miệng hỏi) + 那(kia) → hỏi xem là CÁI NÀO trong số đó.',
      cf:'那 (nà – "kia, đó")',w:'哪国人 / 哪儿'},
   ]},
  {n:6,zh:'呢',py:'ne',pos:'Trợ từ',vn:'đặt cuối câu hỏi tỉnh lược',em:'↩️',lesson:2,
   ex_zh:'我是美国人。你呢？',ex_py:'Wǒ shì Měiguó rén. Nǐ ne?',ex_vn:'Tôi là người Mỹ, còn bạn?',
   exList:[
     {zh:'我是美国人。你呢？',py:'Wǒ shì Měiguó rén. Nǐ ne?',vn:'Tôi là người Mỹ, còn bạn?'},
   ],
   hanzi:[
     {c:'呢',p:'ne',type:'左右结构 · Trái-phải',st:8,ord:'口(khẩu) trái → 尼(ni) phải',rad:'口 (khẩu – miệng)',mean:'trợ từ hỏi tỉnh lược',
      tip:'口(miệng) mượn âm 尼 tạo thành trợ từ hỏi lại "còn ... thì sao?".',
      cf:'尼 (ní – "ni cô")',w:'你呢 / 她呢'},
   ]},
  {n:7,zh:'他',py:'tā',pos:'Đại từ',vn:'anh ấy, ông ấy',em:'👨',lesson:2,
   ex_zh:'他是谁？',ex_py:'Tā shì shéi?',ex_vn:'Anh ấy là ai thế?',
   exList:[
     {zh:'他是谁？',py:'Tā shì shéi?',vn:'Anh ấy là ai thế?'},
     {zh:'他是我同学。',py:'Tā shì wǒ tóngxué.',vn:'Đó là bạn cùng lớp của tôi.'},
   ],
   hanzi:[
     {c:'他',p:'tā',type:'左右结构 · Trái-phải',st:5,ord:'亻(nhân) trái → 也(dã) phải',rad:'亻 (nhân – người)',mean:'anh ấy, ông ấy',
      tip:'亻(người nam) + 也(đại từ cổ) → đại từ chỉ NGƯỜI NAM đang được nhắc đến.',
      cf:'她 (tā – "cô ấy", cùng phần 也")',w:'他是谁 / 他的'},
   ]},
  {n:8,zh:'同学',py:'tóngxué',pos:'Danh từ',vn:'bạn cùng lớp',em:'👬',lesson:2,
   ex_zh:'他是我同学。',ex_py:'Tā shì wǒ tóngxué.',ex_vn:'Đó là bạn cùng lớp của tôi.',
   exList:[
     {zh:'他是我同学。',py:'Tā shì wǒ tóngxué.',vn:'Đó là bạn cùng lớp của tôi.'},
     {zh:'她是你同学吗？',py:'Tā shì nǐ tóngxué ma?',vn:'Cô ấy cũng là bạn cùng lớp của bạn à?'},
   ],
   hanzi:[
     {c:'同',p:'tóng',type:'半包围结构 · Bán bao vây',st:6,ord:'冂 bao ngoài → 一,口 bên trong',rad:'口 (khẩu – phần trong)',mean:'cùng, giống nhau',
      tip:'Nhiều miệng 口 nói CÙNG một tiếng dưới một mái che → ĐỒNG NHẤT, CÙNG NHAU.',
      cf:'洞 (dòng – "hang động")',w:'同学 / 同事'},
   ]},
  {n:9,zh:'朋友',py:'péngyou',pos:'Danh từ',vn:'bạn bè',em:'🧑‍🤝‍🧑',lesson:2,
   ex_zh:'她不是我同学，她是我朋友。',ex_py:'Tā bú shì wǒ tóngxué, tā shì wǒ péngyou.',ex_vn:'Cô ấy không phải bạn cùng lớp, cô ấy là bạn tôi.',
   exList:[
     {zh:'她不是我同学，她是我朋友。',py:'Tā bú shì wǒ tóngxué, tā shì wǒ péngyou.',vn:'Cô ấy không phải bạn cùng lớp, cô ấy là bạn tôi.'},
   ],
   hanzi:[
     {c:'朋',p:'péng',type:'左右结构 · Trái-phải',st:8,ord:'月(nguyệt) trái → 月(nguyệt) phải',rad:'月 (nguyệt – mặt trăng)',mean:'bạn bè',
      tip:'Hai chữ 月 (hình hai miếng ngọc quý xưa dùng làm tiền) đặt cạnh nhau → những người NGANG HÀNG, thân thiết = BẠN.',
      cf:'明 (míng – "sáng", gồm 日+月")',w:'朋友'},
     {c:'友',p:'yǒu',type:'半包围结构 · Bán bao vây',st:4,ord:'ナ(biến thể) → 又(hựu) dưới',rad:'又 (hựu – bàn tay)',mean:'bạn',
      tip:'Hai bàn tay 又 nắm lấy nhau → tình BẠN gắn kết.',
      cf:'反 (fǎn – "trái lại")',w:'朋友 / 女朋友'},
   ]},
];

const wuData = [
  {img:'👩',label:'她',py:'tā',letter:'A'},
  {img:'👨',label:'他',py:'tā',letter:'B'},
  {img:'🈶',label:'汉语',py:'Hànyǔ',letter:'C'},
  {img:'👬',label:'同学',py:'tóngxué',letter:'D'},
  {img:'🧑‍🤝‍🧑',label:'朋友',py:'péngyou',letter:'E'},
  {img:'❓',label:'谁',py:'shéi',letter:'F'},
];

var dialogData = [
  {scene:'Trong lớp học · Hỏi về người khác',
   lines:[
     {sp:0,zh:'她是谁？',py:'Tā shì shéi?',vn:'Cô ấy là ai vậy?'},
     {sp:1,zh:'她是我的汉语老师，她叫李月。',py:'Tā shì wǒ de Hànyǔ lǎoshī, tā jiào Lǐ Yuè.',vn:'Đó là cô giáo dạy tôi tiếng Trung Quốc, cô tên là Lý Nguyệt.'},
   ]},
  {scene:'Ở thư viện · Hỏi quốc tịch (mở)',
   lines:[
     {sp:0,zh:'你是哪国人？',py:'Nǐ shì nǎ guó rén?',vn:'Anh là người nước nào vậy?'},
     {sp:1,zh:'我是美国人。你呢？',py:'Wǒ shì Měiguó rén. Nǐ ne?',vn:'Tôi là người Mỹ, còn cô?'},
     {sp:0,zh:'我是中国人。',py:'Wǒ shì Zhōngguó rén.',vn:'Tôi là người Trung Quốc.'},
   ]},
  {scene:'Xem ảnh · Giới thiệu bạn bè',
   lines:[
     {sp:0,zh:'他是谁？',py:'Tā shì shéi?',vn:'Anh ấy là ai thế?'},
     {sp:1,zh:'他是我同学。',py:'Tā shì wǒ tóngxué.',vn:'Đó là bạn cùng lớp của tôi.'},
     {sp:0,zh:'她呢？她是你同学吗？',py:'Tā ne? Tā shì nǐ tóngxué ma?',vn:'Còn cô ấy? Cô ấy cũng là bạn cùng lớp của cô à?'},
     {sp:1,zh:'她不是我同学，她是我朋友。',py:'Tā bú shì wǒ tóngxué, tā shì wǒ péngyou.',vn:'Không phải, cô ấy là bạn tôi.'},
   ]},
];

// Điền từ — ngữ cảnh khác bài khoá
const fillData = [
  {pre:'Bạn chỉ vào một người trong ảnh và hỏi: “他是',blank:'谁',post:'？”',hint:'(ai)',ans:'谁'},
  {pre:'Bạn giới thiệu cô ấy là giáo viên dạy tiếng Trung của mình: “她是我',blank:'的',post:'汉语老师。”',hint:'(trợ từ sở hữu)',ans:'的'},
  {pre:'Bạn hỏi bạn mới quen đến từ nước nào: “你是',blank:'哪',post:'国人？”',hint:'(nào)',ans:'哪'},
  {pre:'Sau khi trả lời, bạn hỏi ngược lại đối phương: “我是中国人，你',blank:'呢',post:'？”',hint:'(còn... thì sao?)',ans:'呢'},
  {pre:'Bạn giới thiệu một người không cùng lớp: “她不是我同学，她是我',blank:'朋友',post:'。”',hint:'(bạn bè)',ans:'朋友'},
  {pre:'Bạn khẳng định ai đó là bạn cùng lớp: “他是我',blank:'同学',post:'。”',hint:'(bạn cùng lớp)',ans:'同学'},
  {pre:'Bạn nói rõ cô ấy dạy môn gì cho mình: “她是我的',blank:'汉语',post:'老师。”',hint:'(tiếng Trung Quốc)',ans:'汉语'},
  {pre:'Chỉ vào một người nam và hỏi: “',blank:'他',post:'是谁？”',hint:'(anh ấy)',ans:'他'},
];

// Sắp xếp — kèm 1 câu ôn tập kết hợp Bài 3
const sortData = [
  {words:['她','是','我','的','汉语','老师','。'],ans:'她是我的汉语老师。',audio:'她是我的汉语老师。'},
  {words:['你','是','哪','国','人','？'],ans:'你是哪国人？',audio:'你是哪国人？'},
  {words:['我','是','中国','人','，','你','呢','？'],ans:'我是中国人，你呢？',audio:'我是中国人，你呢？'},
  {words:['他','是','我','同学','。'],ans:'他是我同学。',audio:'他是我同学。'},
  {words:['她','不','是','我','同学','，','她','是','我','朋友','。'],ans:'她不是我同学，她是我朋友。',audio:'她不是我同学，她是我朋友。'},
  {words:['我','叫','王芳','，','我','是','中国','人','。'],ans:'我叫王芳，我是中国人。',audio:'我叫王芳，我是中国人。'},
];

const matchData = [
  {left:'她是谁？',right:'她是我的汉语老师。'},
  {left:'你是哪国人？',right:'我是美国人。'},
  {left:'他是谁？',right:'他是我同学。'},
  {left:'她是你同学吗？',right:'她不是我同学，她是我朋友。'},
  {left:'我是中国人，你呢？',right:'我是美国人。'},
];

// Trắc nghiệm — trọng tâm 谁/哪/的/呢, không audio
const mcData = [
  {q:'他是＿＿？(hỏi về người)',opts:['谁','什么','哪','怎么样'],ans:0},
  {q:'你是＿＿国人？',opts:['哪','什么','谁','这'],ans:0},
  {q:'Trợ từ nào biểu thị quan hệ SỞ HỮU?',opts:['的','了','吗','呢'],ans:0},
  {q:'我是中国人，你＿＿？',opts:['呢','吗','吧','啊'],ans:0},
  {q:'"这是我的书" có thể lược bỏ "的" khi danh từ phía sau là:',opts:['người thân, bạn bè thân thiết','đồ vật bất kỳ','tên riêng','số đếm'],ans:0},
  {q:'"汉语" nghĩa là gì?',opts:['tiếng Trung Quốc','người Trung Quốc','nước Trung Quốc','chữ Hán'],ans:0},
  {q:'"同学" nghĩa là gì?',opts:['bạn cùng lớp','bạn bè nói chung','thầy cô giáo','người nước ngoài'],ans:0},
  {q:'Từ nào dùng để chỉ NGƯỜI NỮ đang được nhắc đến (cô ấy)?',opts:['她','他','你','我'],ans:0},
  {q:'她不是我同学，她是我＿＿。',opts:['朋友','同学','老师','学生'],ans:0},
  {q:'Câu nào SAI ngữ pháp?',opts:['她我是朋友','她是我朋友','她是我的朋友','我是她朋友'],ans:0},
];

const speakingData = {
  t1:{
    intro:'Nhấn 🔊 nghe từng câu mẫu, đọc to theo cho tới khi trôi chảy.',
    models:[
      {zh:'她是谁？',py:'Tā shì shéi?',vn:'Cô ấy là ai vậy?'},
      {zh:'她是我的汉语老师。',py:'Tā shì wǒ de Hànyǔ lǎoshī.',vn:'Cô ấy là cô giáo dạy tôi tiếng Trung Quốc.'},
      {zh:'你是哪国人？',py:'Nǐ shì nǎ guó rén?',vn:'Anh là người nước nào vậy?'},
      {zh:'我是美国人。你呢？',py:'Wǒ shì Měiguó rén. Nǐ ne?',vn:'Tôi là người Mỹ, còn bạn?'},
      {zh:'他是我同学。',py:'Tā shì wǒ tóngxué.',vn:'Đó là bạn cùng lớp của tôi.'},
    ],
  },
  t2:{
    intro:'Dùng khung câu cho sẵn, thay thế phần gạch chân bằng từ trong ô gợi ý. Nhấn 🔊 để nghe rồi nói to mỗi câu bạn tạo được.',
    drills:[
      {frame:'他是我＿＿。',frame_py:'Tā shì wǒ ___.',vn:'Đó là ＿＿ của tôi.',options:['同学','朋友'],samples:['他是我同学。','他是我朋友。']},
      {frame:'我是＿＿人。',frame_py:'Wǒ shì ___ rén.',vn:'Tôi là người ＿＿.',options:['中国','美国'],samples:['我是中国人。','我是美国人。']},
    ],
  },
  t3:{
    intro:'Không nhìn câu mẫu, hãy tưởng tượng bạn đang ở trong tình huống thực tế và tự nói ra câu phù hợp.',
    tasks:[
      {role:'📸 Tình huống 1 — Giới thiệu người trong ảnh',
       guide:'Bạn cho bạn bè xem một tấm ảnh có cô giáo dạy tiếng Trung của mình. Hãy giới thiệu cô ấy.',
       structure:['她是谁？','她是我的汉语老师。'],
       sample:'她是谁？她是我的汉语老师，她叫李月。',
       sample_vn:'Cô ấy là ai vậy? Đó là cô giáo dạy tôi tiếng Trung Quốc, cô tên là Lý Nguyệt.',
       note:'Khi giới thiệu mối quan hệ với người quen (giáo viên, bạn bè), vẫn nên giữ 的 để làm rõ nghĩa "của tôi"; càng thân thiết (bạn bè, đồng nghiệp) thì càng dễ lược bỏ 的 hơn.'},
      {role:'🌏 Tình huống 2 — Hỏi quốc tịch và hỏi ngược lại',
       guide:'Bạn gặp một người nước ngoài, hỏi quốc tịch của họ, rồi họ hỏi lại bạn.',
       structure:['你是哪国人？','我是＿＿人。你呢？'],
       sample:'你是哪国人？我是美国人。你呢？我是中国人。',
       sample_vn:'Bạn là người nước nào? Tôi là người Mỹ. Còn bạn? Tôi là người Trung Quốc.',
       note:'呢 là cách hỏi ngược lại NGẮN GỌN nhất — thay vì lặp lại cả câu hỏi đầy đủ, chỉ cần thêm 呢 sau đối tượng để hỏi lại thông tin tương tự.'},
      {role:'👬 Tình huống 3 — Phân biệt bạn cùng lớp và bạn thân',
       guide:'Bạn giới thiệu hai người trong ảnh — một người học cùng lớp, một người chỉ là bạn thân không học cùng lớp.',
       structure:['他是我同学。','她不是我同学，她是我＿＿。'],
       sample:'他是我同学。她不是我同学，她是我朋友。',
       sample_vn:'Đó là bạn cùng lớp của tôi. Cô ấy không phải bạn cùng lớp, cô ấy là bạn tôi.',
       note:'同学 chỉ dùng cho người học CÙNG LỚP/CÙNG TRƯỜNG — nếu chỉ là bạn bè thân thiết nói chung (không cùng học) thì phải dùng 朋友, không dùng 同学.'},
    ],
  },
};
