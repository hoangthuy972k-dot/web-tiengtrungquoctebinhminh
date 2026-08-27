// ══════════════════════════════════════════
// DATA — HSK1 (3.0 Mới) Bài 3: 我是中国人
// Nguồn: Giáo trình New HSK 1 (chuẩn 3.0) - Trung Việt, NXB Dân Trí
// ══════════════════════════════════════════
var vocabData = [
  {n:1,zh:'人',py:'rén',pos:'Danh từ',vn:'người',em:'🧑',lesson:1,
   ex_zh:'我是中国人。',ex_py:'Wǒ shì Zhōngguó rén.',ex_vn:'Tôi là người Trung Quốc.',
   exList:[
     {zh:'我是中国人。',py:'Wǒ shì Zhōngguó rén.',vn:'Tôi là người Trung Quốc.'},
     {zh:'我是法国人。',py:'Wǒ shì Fǎguó rén.',vn:'Tôi là người Pháp.'},
   ],
   hanzi:[
     {c:'人',p:'rén',type:'独体字 · Chữ đơn (tượng hình)',st:2,ord:'ノ→乀',rad:'人 (nhân)',mean:'người',
      tip:'Hình vẽ dáng người đang bước đi nghiêng từ bên cạnh → NGƯỜI.',
      cf:'入 (rù – "vào", dễ nhầm nét)',w:'中国人 / 法国人'},
   ]},
  {n:2,zh:'的',py:'de',pos:'Trợ từ',vn:'của (dùng sau định ngữ)',em:'🔗',lesson:1,
   ex_zh:'我的中文老师也是中国人。',ex_py:'Wǒ de Zhōngwén lǎoshī yě shì Zhōngguó rén.',ex_vn:'Giáo viên tiếng Trung của tôi cũng là người Trung Quốc.',
   exList:[
     {zh:'我的中文老师也是中国人。',py:'Wǒ de Zhōngwén lǎoshī yě shì Zhōngguó rén.',vn:'Giáo viên tiếng Trung của tôi cũng là người Trung Quốc.'},
     {zh:'白家月的中文老师',py:'Bái Jiāyuè de Zhōngwén lǎoshī',vn:'giáo viên tiếng Trung của Bạch Gia Nguyệt'},
   ],
   hanzi:[
     {c:'的',p:'de',type:'左右结构 · Trái-phải',st:8,ord:'白(bạch) trái → 勺(chước) phải',rad:'白 (bạch – trắng)',mean:'của, thuộc về',
      tip:'的 là trợ từ dùng phổ biến nhất tiếng Trung, đặt giữa ĐỊNH NGỮ và TRUNG TÂM NGỮ để chỉ quan hệ sở hữu.',
      cf:'白 (bái – "màu trắng")',w:'我的 / 你的 / 的名字'},
   ]},
  {n:3,zh:'这',py:'zhè',pos:'Đại từ',vn:'này, đây',em:'👉',lesson:2,
   ex_zh:'这是谁？',ex_py:'Zhè shì shéi?',ex_vn:'Đây là ai vậy?',
   exList:[
     {zh:'这是谁？',py:'Zhè shì shéi?',vn:'Đây là ai vậy?'},
     {zh:'这是我女朋友。',py:'Zhè shì wǒ nǚpéngyou.',vn:'Đây là bạn gái mình.'},
   ]},
  {n:4,zh:'谁',py:'shéi / shuí',pos:'Đại từ',vn:'ai',em:'❓',lesson:2,
   ex_zh:'这是谁？',ex_py:'Zhè shì shéi?',ex_vn:'Đây là ai vậy?',
   exList:[
     {zh:'这是谁？',py:'Zhè shì shéi?',vn:'Đây là ai vậy?'},
   ]},
  {n:5,zh:'女朋友',py:'nǚpéngyou',pos:'Danh từ',vn:'bạn gái, người yêu',em:'💑',lesson:2,
   ex_zh:'这是我女朋友。',ex_py:'Zhè shì wǒ nǚpéngyou.',ex_vn:'Đây là bạn gái mình.',
   exList:[
     {zh:'这是我女朋友。',py:'Zhè shì wǒ nǚpéngyou.',vn:'Đây là bạn gái mình.'},
     {zh:'你女朋友是哪国人？',py:'Nǐ nǚpéngyou shì nǎ guó rén?',vn:'Bạn gái của bạn là người nước nào?'},
   ]},
  {n:6,zh:'哪',py:'nǎ',pos:'Đại từ',vn:'nào',em:'🌍',lesson:2,
   ex_zh:'你女朋友是哪国人？',ex_py:'Nǐ nǚpéngyou shì nǎ guó rén?',ex_vn:'Bạn gái của bạn là người nước nào?',
   exList:[
     {zh:'你女朋友是哪国人？',py:'Nǐ nǚpéngyou shì nǎ guó rén?',vn:'Bạn gái của bạn là người nước nào?'},
   ]},
  {n:7,zh:'国',py:'guó',pos:'Danh từ',vn:'quốc gia, đất nước',em:'🗺️',lesson:2,
   ex_zh:'你女朋友是哪国人？',ex_py:'Nǐ nǚpéngyou shì nǎ guó rén?',ex_vn:'Bạn gái của bạn là người nước nào?',
   exList:[
     {zh:'你女朋友是哪国人？',py:'Nǐ nǚpéngyou shì nǎ guó rén?',vn:'Bạn gái của bạn là người nước nào?'},
   ],
   hanzi:[
     {c:'国',p:'guó',type:'全包围结构 · Bao vây (giản thể)',st:8,ord:'囗(vi) bao → 玉(biến thể) trong',rad:'囗 (vi – vây quanh)',mean:'nước, quốc gia',
      tip:'Bộ 囗(bao quanh, biên giới) + 玉(ngọc quý bên trong) → vùng đất có BIÊN GIỚI bảo vệ báu vật = QUỐC GIA.',
      cf:'固 (gù – "vững chắc", cũng bộ 囗")',w:'中国 / 法国 / 泰国'},
   ]},
  {n:8,zh:'她',py:'tā',pos:'Đại từ',vn:'cô ấy, chị ấy, bạn ấy',em:'👩',lesson:2,
   ex_zh:'她也是泰国人。',ex_py:'Tā yě shì Tàiguó rén.',ex_vn:'Cô ấy cũng là người Thái Lan.',
   exList:[
     {zh:'她也是泰国人。',py:'Tā yě shì Tàiguó rén.',vn:'Cô ấy cũng là người Thái Lan.'},
   ]},
  {n:9,zh:'喂',py:'wèi',pos:'Thán từ',vn:'a lô',em:'📞',lesson:3,
   ex_zh:'喂，一飞！',ex_py:'Wèi, Yīfēi!',ex_vn:'A lô, Nhất Phi à!',
   exList:[
     {zh:'喂，一飞！',py:'Wèi, Yīfēi!',vn:'A lô, Nhất Phi à!'},
   ]},
  {n:10,zh:'姐姐',py:'jiějie',pos:'Danh từ',vn:'chị gái',em:'👭',lesson:3,
   ex_zh:'姐姐！',ex_py:'Jiějie!',ex_vn:'Chị ơi!',
   exList:[
     {zh:'姐姐！',py:'Jiějie!',vn:'Chị ơi!'},
   ]},
  {n:11,zh:'工作',py:'gōngzuò',pos:'Danh từ',vn:'công việc',em:'💼',lesson:3,
   ex_zh:'你工作还忙吗？',ex_py:'Nǐ gōngzuò hái máng ma?',ex_vn:'Công việc của em vẫn bận à?',
   exList:[
     {zh:'你工作还忙吗？',py:'Nǐ gōngzuò hái máng ma?',vn:'Công việc của em vẫn bận à?'},
   ]},
  {n:12,zh:'还',py:'hái',pos:'Phó từ',vn:'vẫn',em:'🔄',lesson:3,
   ex_zh:'对，还很忙。',ex_py:'Duì, hái hěn máng.',ex_vn:'Vâng, vẫn rất bận.',
   exList:[
     {zh:'对，还很忙。',py:'Duì, hái hěn máng.',vn:'Vâng, vẫn rất bận.'},
   ]},
  {n:13,zh:'忙',py:'máng',pos:'Tính từ',vn:'bận, bận rộn',em:'😰',lesson:3,
   ex_zh:'你工作还忙吗？',ex_py:'Nǐ gōngzuò hái máng ma?',ex_vn:'Công việc của em vẫn bận à?',
   exList:[
     {zh:'你工作还忙吗？',py:'Nǐ gōngzuò hái máng ma?',vn:'Công việc của em vẫn bận à?'},
     {zh:'我不太忙。',py:'Wǒ bú tài máng.',vn:'Chị không bận lắm.'},
   ],
   hanzi:[
     {c:'忙',p:'máng',type:'左右结构 · Trái-phải',st:6,ord:'忄(tâm) trái → 亡(vong) phải',rad:'忄 (tâm – trái tim)',mean:'bận rộn',
      tip:'忄(tâm trí) + 亡(mất, không còn) → tâm trí không còn rảnh rỗi = BẬN RỘN.',
      cf:'忘 (wàng – "quên", cũng có 亡")',w:'很忙 / 不太忙'},
   ]},
  {n:14,zh:'吗',py:'ma',pos:'Trợ từ',vn:'…phải không? (dùng cuối câu để hỏi)',em:'❔',lesson:3,
   ex_zh:'你工作还忙吗？',ex_py:'Nǐ gōngzuò hái máng ma?',ex_vn:'Công việc của em vẫn bận à?',
   exList:[
     {zh:'你工作还忙吗？',py:'Nǐ gōngzuò hái máng ma?',vn:'Công việc của em vẫn bận à?'},
     {zh:'你也很忙吗？',py:'Nǐ yě hěn máng ma?',vn:'Chị cũng bận lắm phải không?'},
   ]},
  {n:15,zh:'对',py:'duì',pos:'Tính từ',vn:'đúng',em:'✅',lesson:3,
   ex_zh:'对，还很忙。',ex_py:'Duì, hái hěn máng.',ex_vn:'Vâng, vẫn rất bận.',
   exList:[
     {zh:'对，还很忙。',py:'Duì, hái hěn máng.',vn:'Vâng, vẫn rất bận.'},
   ]},
  {n:16,zh:'太',py:'tài',pos:'Phó từ',vn:'quá, lắm',em:'💯',lesson:3,
   ex_zh:'我不太忙。',ex_py:'Wǒ bú tài máng.',ex_vn:'Chị không bận lắm.',
   exList:[
     {zh:'我不太忙。',py:'Wǒ bú tài máng.',vn:'Chị không bận lắm.'},
   ]},
  {n:17,zh:'我们',py:'wǒmen',pos:'Đại từ',vn:'chúng tôi, chúng ta',em:'👨‍👩‍👧',lesson:3,
   ex_zh:'我们很想你。',ex_py:'Wǒmen hěn xiǎng nǐ.',ex_vn:'Mọi người rất nhớ em.',
   exList:[
     {zh:'我们很想你。',py:'Wǒmen hěn xiǎng nǐ.',vn:'Mọi người rất nhớ em.'},
   ]},
  {n:18,zh:'想',py:'xiǎng',pos:'Động từ',vn:'nhớ',em:'💭',lesson:3,
   ex_zh:'我也想你们。',ex_py:'Wǒ yě xiǎng nǐmen.',ex_vn:'Em cũng nhớ mọi người.',
   exList:[
     {zh:'我们很想你。',py:'Wǒmen hěn xiǎng nǐ.',vn:'Mọi người rất nhớ em.'},
     {zh:'我也想你们。',py:'Wǒ yě xiǎng nǐmen.',vn:'Em cũng nhớ mọi người.'},
   ],
   hanzi:[
     {c:'想',p:'xiǎng',type:'上下结构 · Trên-dưới',st:13,ord:'相(tương) trên → 心(tâm) dưới',rad:'心 (tâm – trái tim)',mean:'nhớ, nghĩ',
      tip:'相(nhìn nhau) trên 心(trái tim) → trong lòng luôn hình dung/NHỚ về ai đó.',
      cf:'相 (xiāng – "lẫn nhau")',w:'想你 / 想家'},
   ]},
  {n:19,zh:'中国',py:'Zhōngguó',pos:'Danh từ riêng',vn:'Trung Quốc',em:'🇨🇳',lesson:1,
   ex_zh:'我是中国人。',ex_py:'Wǒ shì Zhōngguó rén.',ex_vn:'Tôi là người Trung Quốc.',
   exList:[{zh:'我是中国人。',py:'Wǒ shì Zhōngguó rén.',vn:'Tôi là người Trung Quốc.'}]},
  {n:20,zh:'法国',py:'Fǎguó',pos:'Danh từ riêng',vn:'Pháp',em:'🇫🇷',lesson:1,
   ex_zh:'我是法国人。',ex_py:'Wǒ shì Fǎguó rén.',ex_vn:'Tôi là người Pháp.',
   exList:[{zh:'我是法国人。',py:'Wǒ shì Fǎguó rén.',vn:'Tôi là người Pháp.'}]},
  {n:21,zh:'中文',py:'Zhōngwén',pos:'Danh từ riêng',vn:'tiếng Trung Quốc',em:'🈶',lesson:1,
   ex_zh:'我的中文老师也是中国人。',ex_py:'Wǒ de Zhōngwén lǎoshī yě shì Zhōngguó rén.',ex_vn:'Giáo viên tiếng Trung của tôi cũng là người Trung Quốc.',
   exList:[{zh:'我的中文老师也是中国人。',py:'Wǒ de Zhōngwén lǎoshī yě shì Zhōngguó rén.',vn:'Giáo viên tiếng Trung của tôi cũng là người Trung Quốc.'}]},
  {n:22,zh:'泰国',py:'Tàiguó',pos:'Danh từ riêng',vn:'Thái Lan',em:'🇹🇭',lesson:2,
   ex_zh:'她也是泰国人。',ex_py:'Tā yě shì Tàiguó rén.',ex_vn:'Cô ấy cũng là người Thái Lan.',
   exList:[{zh:'她也是泰国人。',py:'Tā yě shì Tàiguó rén.',vn:'Cô ấy cũng là người Thái Lan.'}]},
];

const wuData = [
  {img:'🧑',label:'人',py:'rén',letter:'A'},
  {img:'👉',label:'这',py:'zhè',letter:'B'},
  {img:'💑',label:'女朋友',py:'nǚpéngyou',letter:'C'},
  {img:'📞',label:'喂',py:'wèi',letter:'D'},
  {img:'👭',label:'姐姐',py:'jiějie',letter:'E'},
  {img:'💼',label:'工作',py:'gōngzuò',letter:'F'},
];

var dialogData = [
  {scene:'李文和白家月继续聊天 · Tiếp tục trò chuyện',
   lines:[
     {sp:0,zh:'我是中国人。',py:'Wǒ shì Zhōngguó rén.',vn:'Mình là người Trung Quốc.'},
     {sp:1,zh:'我是法国人。我的中文老师也是中国人。',py:'Wǒ shì Fǎguó rén. Wǒ de Zhōngwén lǎoshī yě shì Zhōngguó rén.',vn:'Mình là người Pháp. Giáo viên tiếng Trung của mình cũng là người Trung Quốc.'},
   ]},
  {scene:'安妮看照片认识陈天中女朋友 · Xem ảnh làm quen bạn gái',
   lines:[
     {sp:0,zh:'这是谁？',py:'Zhè shì shéi?',vn:'Đây là ai vậy?'},
     {sp:1,zh:'这是我女朋友。',py:'Zhè shì wǒ nǚpéngyou.',vn:'Đây là bạn gái mình.'},
     {sp:0,zh:'你女朋友是哪国人？',py:'Nǐ nǚpéngyou shì nǎ guó rén?',vn:'Bạn gái của bạn là người nước nào?'},
     {sp:1,zh:'她也是泰国人。',py:'Tā yě shì Tàiguó rén.',vn:'Cô ấy cũng là người Thái Lan.'},
   ]},
  {scene:'王一雪给王一飞打视频电话 · Gọi video hỏi thăm',
   lines:[
     {sp:0,zh:'喂，一飞！',py:'Wèi, Yīfēi!',vn:'A lô, Nhất Phi à!'},
     {sp:1,zh:'姐姐！',py:'Jiějie!',vn:'Chị ơi!'},
     {sp:0,zh:'你工作还忙吗？',py:'Nǐ gōngzuò hái máng ma?',vn:'Công việc của em vẫn bận à?'},
     {sp:1,zh:'对，还很忙。你也很忙吗？',py:'Duì, hái hěn máng. Nǐ yě hěn máng ma?',vn:'Vâng, vẫn rất bận. Chị cũng bận lắm phải không?'},
     {sp:0,zh:'我不太忙。我们很想你。',py:'Wǒ bú tài máng. Wǒmen hěn xiǎng nǐ.',vn:'Chị không bận lắm. Mọi người rất nhớ em.'},
     {sp:1,zh:'我也想你们。',py:'Wǒ yě xiǎng nǐmen.',vn:'Em cũng nhớ mọi người.'},
   ]},
];

// ══════════════════════════════════════════
// PHẦN 1 · GHÉP TỪ (Collocation)
// ══════════════════════════════════════════
var matchData = [
  {left:'中国', right:'人'},
  {left:'女朋', right:'友'},
  {left:'工', right:'作'},
  {left:'姐', right:'姐'},
  {left:'我', right:'们'},
  {left:'很', right:'忙'},
];

// ══════════════════════════════════════════
// PHẦN 2 · NGHE — tình huống MỚI dùng từ vựng bài học
// ══════════════════════════════════════════
var listenData = [
  {audio:'你好，我是中国人，我的女朋友是泰国人，她也是我的中文同学。',
   questions:[
     {q:'说话人是哪国人？',opts:['中国人','法国人','泰国人','不知道'],ans:0},
     {q:'他女朋友是哪国人？',opts:['泰国人','中国人','法国人','美国人'],ans:0},
   ]},
  {audio:'喂，姐姐！我工作还很忙，你也很忙吗？我们都很想你。',
   questions:[
     {q:'说话人的工作怎么样？',opts:['还很忙','不忙','很好','没有工作'],ans:0},
     {q:'说话人对姐姐说了什么？',opts:['我们都很想你','再见','谢谢','对不起'],ans:0},
   ]},
];

// ══════════════════════════════════════════
// PHẦN 3a · ĐIỀN TỪ (dựa theo bài tập tổng hợp thật trong sách)
// ══════════════════════════════════════════
var fillData = [
  {pre:'你工作忙', blank:'吗', post:'？', hint:'(…phải không?)', ans:'吗'},
  {pre:'我很', blank:'想', post:'你们。', hint:'(nhớ)', ans:'想'},
  {pre:'白家月：你是', blank:'哪', post:'国人？ 李文：我是中国人。', hint:'(nào)', ans:'哪'},
  {pre:'白家月：她是', blank:'谁', post:'？ 安妮：她是陈天中的女朋友。', hint:'(ai)', ans:'谁'},
  {pre:'我是', blank:'法国', post:'人。', hint:'(tên nước — Pháp)', ans:'法国'},
  {pre:'这是我', blank:'女朋友', post:'。', hint:'(bạn gái)', ans:'女朋友'},
  {pre:'白家月', blank:'的', post:'中文老师', hint:'(của — trợ từ sở hữu)', ans:'的'},
  {pre:'我不太', blank:'忙', post:'。', hint:'(bận)', ans:'忙'},
];

// ══════════════════════════════════════════
// PHẦN 3b · SẮP XẾP
// ══════════════════════════════════════════
var sortData = [
  {words:['我','是','中国','人','。'], ans:'我是中国人。', audio:'我是中国人。'},
  {words:['这','是','我','女朋友','。'], ans:'这是我女朋友。', audio:'这是我女朋友。'},
  {words:['你','女朋友','是','哪','国','人','？'], ans:'你女朋友是哪国人？', audio:'你女朋友是哪国人？'},
  {words:['你','工作','还','忙','吗','？'], ans:'你工作还忙吗？', audio:'你工作还忙吗？'},
  {words:['我','不','太','忙','。'], ans:'我不太忙。', audio:'我不太忙。'},
  {words:['我们','很','想','你','。'], ans:'我们很想你。', audio:'我们很想你。'},
];

// ══════════════════════════════════════════
// PHẦN 3c · TRẮC NGHIỆM
// ══════════════════════════════════════════
var mcData = [
  {q:'"我是中国人" nghĩa là gì?', opts:['Tôi là người Trung Quốc', 'Tôi là người Pháp', 'Tôi là giáo viên', 'Tôi rất bận'], ans:0},
  {q:'Phủ định của câu chữ "是" được tạo thành bằng cách nào?', opts:['Thêm 不 trước 是 → 不是', 'Thêm 不 sau 是 → 是不', 'Thêm 吗 sau 是', 'Không thể phủ định'], ans:0},
  {q:'"你的名字" — từ "的" ở đây dùng để làm gì?', opts:['Biểu thị sở hữu (của)', 'Biểu thị phủ định', 'Biểu thị câu hỏi', 'Biểu thị số nhiều'], ans:0},
  {q:'Muốn hỏi "có...không?" trong tiếng Trung, thêm trợ từ nào vào cuối câu?', opts:['吗', '的', '了', '呢'], ans:0},
  {q:'"你也很忙吗？" là dạng câu gì?', opts:['Câu hỏi có/không dùng 吗', 'Câu khẳng định', 'Câu mệnh lệnh', 'Câu cảm thán'], ans:0},
  {q:'"这是谁？" dùng để hỏi về điều gì?', opts:['Hỏi về danh tính (ai)', 'Hỏi về nơi chốn', 'Hỏi về thời gian', 'Hỏi về số lượng'], ans:0},
  {q:'Nếu trước "的" là đại từ nhân xưng và sau "的" là danh từ chỉ người thân, ta có thể làm gì?', opts:['Lược bỏ "的"', 'Bắt buộc giữ "的"', 'Thêm "吗" vào', 'Đổi thành "了"'], ans:0},
  {q:'"我们" khác "你们" ở điểm nào?', opts:['我们 = chúng tôi (ngôi 1), 你们 = các bạn (ngôi 2)', 'Không khác gì', '我们 chỉ dùng cho nam', '你们 chỉ dùng số ít'], ans:0},
];

// ══════════════════════════════════════════
// PHẦN 4 · LUYỆN NÓI
// ══════════════════════════════════════════
var speakingData = {
  intro: 'Nhấn 🔊 nghe câu hỏi/tình huống, rồi tự ghi âm câu trả lời của bạn dựa theo nội dung 3 bài khoá.',
  questions: [
    {q_zh: '有人问你："你是哪国人？"你怎么回答？', q_vn: 'Có người hỏi bạn: "Bạn là người nước nào?" Bạn trả lời thế nào?',
     hint: '我是……人。', sample: '我是越南人。', sample_vn: 'Tôi là người Việt Nam.',
     note: 'Cấu trúc "我是 + tên nước + 人" dùng để nói quốc tịch.'},
    {q_zh: '朋友给你介绍照片里的人，问："这是谁？" 你会怎么问对方？', q_vn: 'Bạn của bạn cho xem ảnh, bạn muốn hỏi người trong ảnh là ai?',
     hint: '这是谁？', sample: '这是谁？——这是我女朋友/男朋友。', sample_vn: 'Đây là ai vậy? — Đây là bạn gái/bạn trai của mình.',
     note: '这是谁 dùng để hỏi danh tính của một người được chỉ ra.'},
    {q_zh: '好久不见的姐姐给你打电话，问你工作忙不忙，你怎么回答？', q_vn: 'Chị gái lâu ngày không gặp gọi điện hỏi thăm công việc, bạn trả lời thế nào?',
     hint: '还很忙/不太忙。我也想你。', sample: '我工作还很忙，我也很想你。', sample_vn: 'Công việc của em vẫn bận lắm, em cũng rất nhớ chị.',
     note: '还 (vẫn) + tính từ dùng để nói một trạng thái tiếp diễn không đổi.'},
  ],
};

// ══════════════════════════════════════════
// LUYỆN DỊCH (Việt → Trung)
// ══════════════════════════════════════════
var translateData = [
  {vi:'Tôi là người Trung Quốc, giáo viên tiếng Trung của tôi cũng là người Trung Quốc.', zh:'我是中国人，我的中文老师也是中国人。', py:'Wǒ shì Zhōngguó rén, wǒ de Zhōngwén lǎoshī yě shì Zhōngguó rén.'},
  {vi:'Đây là ai vậy? — Đây là bạn gái mình, cô ấy là người Thái Lan.', zh:'这是谁？——这是我女朋友，她是泰国人。', py:'Zhè shì shéi? — Zhè shì wǒ nǚpéngyou, tā shì Tàiguó rén.'},
  {vi:'Công việc của bạn vẫn bận phải không? — Vâng, vẫn rất bận.', zh:'你工作还忙吗？——对，还很忙。', py:'Nǐ gōngzuò hái máng ma? — Duì, hái hěn máng.'},
  {vi:'Chúng tôi rất nhớ bạn, bạn cũng nhớ chúng tôi phải không?', zh:'我们很想你，你也想我们吗？', py:'Wǒmen hěn xiǎng nǐ, nǐ yě xiǎng wǒmen ma?'},
];

// ══════════════════════════════════════════
// LUYỆN DỊCH (Trung → Việt) — nội dung KHÁC với chiều Việt→Trung ở trên
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:'Tôi không phải là người Pháp, tôi là người Trung Quốc.', zh:'我不是法国人，我是中国人。', py:'Wǒ bú shì Fǎguó rén, wǒ shì Zhōngguó rén.'},
  {vi:'Bạn trai của tôi cũng là người nước nào? — Cũng là người Thái Lan.', zh:'我男朋友也是哪国人？——也是泰国人。', py:'Wǒ nánpéngyou yě shì nǎ guó rén? — Yě shì Tàiguó rén.'},
  {vi:'Tên của giáo viên tiếng Trung của bạn là gì?', zh:'你的中文老师叫什么名字？', py:'Nǐ de Zhōngwén lǎoshī jiào shénme míngzi?'},
  {vi:'Chị không bận lắm, nhưng mọi người đều rất nhớ em.', zh:'姐姐不太忙，但是大家都很想你。', py:'Jiějie bú tài máng, dànshì dàjiā dōu hěn xiǎng nǐ.'},
];
