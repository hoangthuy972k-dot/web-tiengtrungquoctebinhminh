// ══════════════════════════════════════════
// DATA — Bài 13: 门开着呢
// ══════════════════════════════════════════
var vocabData = [
  {n:1,zh:'着',py:'zhe',pos:'Trợ từ động thái',vn:'đang, duy trì trạng thái',em:'🔄',lesson:1,
   ex_zh:'门开着呢。',ex_py:'Mén kāizhe ne.',ex_vn:'Cửa đang mở đấy.',
   exList:[
     {zh:'门开着呢。',py:'Mén kāizhe ne.',vn:'Cửa đang mở đấy.'},
     {zh:'她手里拿着一本书。',py:'Tā shǒu lǐ názhe yì běn shū.',vn:'Cô ấy tay đang cầm một quyển sách.'},
     {zh:'他坐着看电视。',py:'Tā zuòzhe kàn diànshì.',vn:'Anh ấy ngồi xem tivi.'},
   ],
   hanzi:[
     {c:'着',p:'zhe / zháo / zhuó',type:'上下结构 · Trên-dưới',st:11,ord:'羊(biến thể) → 目',rad:'目 (mục – mắt)',mean:'đang, duy trì trạng thái',
      tip:'Đọc nhẹ "zhe" khi đứng sau động từ, biểu thị hành động/trạng thái đang được DUY TRÌ.',
      cf:'差 (chà – "kém, thiếu")',w:'开着 / 拿着 / 看着'},
   ]},
  {n:2,zh:'手',py:'shǒu',pos:'Danh từ',vn:'tay, bàn tay',em:'✋',lesson:2,
   ex_zh:'手里拿着铅笔。',ex_py:'Shǒu lǐ názhe qiānbǐ.',ex_vn:'Tay cầm bút chì.',
   exList:[
     {zh:'手里拿着铅笔。',py:'Shǒu lǐ názhe qiānbǐ.',vn:'Tay cầm bút chì.'},
     {zh:'请举手。',py:'Qǐng jǔ shǒu.',vn:'Xin hãy giơ tay.'},
     {zh:'吃饭以前要洗手。',py:'Chīfàn yǐqián yào xǐ shǒu.',vn:'Trước khi ăn cơm phải rửa tay.'},
   ],
   hanzi:[
     {c:'手',p:'shǒu',type:'独体字 · Tượng hình',st:4,ord:'丿→一→𠃌→丿',rad:'手 (thủ – tự thành bộ)',mean:'tay',
      tip:'Hình bàn tay xoè năm ngón cách điệu → "TAY". Đã gặp trong 手机 (Bài 10).',
      cf:'毛 (máo – "lông")',w:'手里 / 手机 / 洗手'},
   ]},
  {n:3,zh:'拿',py:'ná',pos:'Động từ',vn:'cầm, nắm, xách',em:'🤲',lesson:2,
   ex_zh:'那个手里拿着铅笔的呢？',ex_py:'Nàge shǒu lǐ názhe qiānbǐ de ne?',ex_vn:'Thế còn người tay cầm bút chì đằng kia thì sao?',
   exList:[
     {zh:'那个手里拿着铅笔的呢？',py:'Nàge shǒu lǐ názhe qiānbǐ de ne?',vn:'Thế còn người tay cầm bút chì đằng kia thì sao?'},
     {zh:'请帮我拿一下这本书。',py:'Qǐng bāng wǒ ná yíxià zhè běn shū.',vn:'Làm ơn cầm giúp tôi quyển sách này.'},
     {zh:'他手里拿着手机。',py:'Tā shǒu lǐ názhe shǒujī.',vn:'Anh ấy tay đang cầm điện thoại.'},
   ],
   hanzi:[
     {c:'拿',p:'ná',type:'上下结构 · Trên-dưới',st:10,ord:'合 (hợp) → 手 (thủ)',rad:'手 (thủ – tay)',mean:'cầm, nắm',
      tip:'合 (khép lại) + 手 (tay) → khép bàn tay lại để CẦM, NẮM đồ vật.',
      cf:'合 (hé – "hợp", thiếu bộ 手")',w:'拿着 / 拿书 / 拿走'},
   ]},
  {n:4,zh:'铅笔',py:'qiānbǐ',pos:'Danh từ',vn:'bút chì',em:'✏️',lesson:2,
   ex_zh:'手里拿着铅笔。',ex_py:'Shǒu lǐ názhe qiānbǐ.',ex_vn:'Tay đang cầm bút chì.',
   exList:[
     {zh:'手里拿着铅笔。',py:'Shǒu lǐ názhe qiānbǐ.',vn:'Tay đang cầm bút chì.'},
     {zh:'请给我一支铅笔。',py:'Qǐng gěi wǒ yì zhī qiānbǐ.',vn:'Xin cho tôi một cây bút chì.'},
     {zh:'这支铅笔是我的。',py:'Zhè zhī qiānbǐ shì wǒ de.',vn:'Cây bút chì này là của tôi.'},
   ],
   hanzi:[
     {c:'铅',p:'qiān',type:'左右结构 · Trái-phải',st:10,ord:'钅(kim) trái → 几+口 phải',rad:'钅(kim – kim loại)',mean:'chì',
      tip:'Bộ 钅(kim loại) → ruột bút làm từ chất liệu như kim loại chì.',
      cf:'船 (chuán – "thuyền")',w:'铅笔 / 铅笔盒'},
     {c:'笔',p:'bǐ',type:'上下结构 · Trên-dưới',st:10,ord:'⺮(trúc) → 毛 (mao)',rad:'⺮(trúc – tre)',mean:'bút',
      tip:'Bộ 竹 (tre, thân bút) + 毛 (lông, đầu bút lông) → cây BÚT truyền thống.',
      cf:'毛 (máo – "lông")',w:'铅笔 / 毛笔 / 用笔'},
   ]},
  {n:5,zh:'班',py:'bān',pos:'Danh từ',vn:'lớp học, lớp',em:'🏫',lesson:3,
   ex_zh:'就是我们班那个女孩。',ex_py:'Jiùshì wǒmen bān nàge nǚhái.',ex_vn:'Chính là cô gái ở lớp chúng mình.',
   exList:[
     {zh:'就是我们班那个女孩。',py:'Jiùshì wǒmen bān nàge nǚhái.',vn:'Chính là cô gái ở lớp chúng mình.'},
     {zh:'我们班有二十个学生。',py:'Wǒmen bān yǒu èrshí ge xuésheng.',vn:'Lớp chúng tôi có 20 học sinh.'},
     {zh:'他是我的同班同学。',py:'Tā shì wǒ de tóngbān tóngxué.',vn:'Anh ấy là bạn cùng lớp với tôi.'},
   ],
   hanzi:[
     {c:'班',p:'bān',type:'左右结构 · Trái-phải',st:10,ord:'王 (vương) trái → 刂 (đao) giữa → 王 phải',rad:'王 (vương – ngọc)',mean:'lớp, nhóm, ca',
      tip:'Đã học ở Bài 9 (上班) — hai miếng ngọc bị dao tách ra thành từng NHÓM/LỚP.',
      cf:'斑 (bān – "vết đốm")',w:'我们班 / 上班 / 班长'},
   ]},
  {n:6,zh:'长',py:'zhǎng',pos:'Động từ',vn:'mọc, sinh trưởng, lớn',em:'👁️',lesson:3,
   ex_zh:'长着两个大眼睛。',ex_py:'Zhǎngzhe liǎng ge dà yǎnjing.',ex_vn:'Có đôi mắt to (mọc hai con mắt to).',
   exList:[
     {zh:'长着两个大眼睛。',py:'Zhǎngzhe liǎng ge dà yǎnjing.',vn:'Có đôi mắt to.'},
     {zh:'孩子长得很快。',py:'Háizi zhǎng de hěn kuài.',vn:'Đứa trẻ lớn rất nhanh.'},
     {zh:'树上长了很多叶子。',py:'Shù shang zhǎngle hěn duō yèzi.',vn:'Trên cây mọc rất nhiều lá.'},
   ],
   hanzi:[
     {c:'长',p:'zhǎng / cháng',type:'独体字 · Tượng hình',st:4,ord:'丿→𠃌→一→乚',rad:'长 (trường – tự thành bộ)',mean:'mọc, lớn lên (zhǎng); dài (cháng)',
      tip:'Đã học ở Bài 4 với âm "cháng" (dài); cùng chữ này đọc "zhǎng" khi nghĩa MỌC, LỚN LÊN, trưởng thành.',
      cf:'常 (cháng – "thường xuyên")',w:'长着 / 长大 / 校长'},
   ]},
  {n:7,zh:'笑',py:'xiào',pos:'Động từ / Tính từ',vn:'cười',em:'😄',lesson:3,
   ex_zh:'非常爱笑的女孩。',ex_py:'Fēicháng ài xiào de nǚhái.',ex_vn:'Cô gái rất hay cười.',
   exList:[
     {zh:'非常爱笑的女孩。',py:'Fēicháng ài xiào de nǚhái.',vn:'Cô gái rất hay cười.'},
     {zh:'他笑了。',py:'Tā xiào le.',vn:'Anh ấy đã cười.'},
     {zh:'别笑我。',py:'Bié xiào wǒ.',vn:'Đừng cười tôi.'},
   ],
   hanzi:[
     {c:'笑',p:'xiào',type:'上下结构 · Trên-dưới',st:10,ord:'⺮(trúc) → 夭 (yêu)',rad:'⺮(trúc – tre)',mean:'cười',
      tip:'Tre 竹 nghiêng ngả trong gió như dáng người CƯỜI nghiêng ngả.',
      cf:'笔 (bǐ – "bút")',w:'笑了 / 爱笑 / 微笑'},
   ]},
  {n:8,zh:'宾馆',py:'bīnguǎn',pos:'Danh từ',vn:'khách sạn, nhà khách',em:'🏨',lesson:4,
   ex_zh:'这离新宾馆远吗？',ex_py:'Zhè lí xīn bīnguǎn yuǎn ma?',ex_vn:'Ở đây cách khách sạn mới có xa không?',
   exList:[
     {zh:'这离新宾馆远吗？',py:'Zhè lí xīn bīnguǎn yuǎn ma?',vn:'Ở đây cách khách sạn mới có xa không?'},
     {zh:'我们住在这家宾馆。',py:'Wǒmen zhù zài zhè jiā bīnguǎn.',vn:'Chúng tôi ở khách sạn này.'},
     {zh:'这个宾馆很不错。',py:'Zhège bīnguǎn hěn búcuò.',vn:'Khách sạn này khá tốt.'},
   ],
   hanzi:[
     {c:'宾',p:'bīn',type:'上下结构 · Trên-dưới',st:9,ord:'宀 (miên) → 兵 (biến thể)',rad:'宀 (miên – mái nhà)',mean:'khách',
      tip:'Mái nhà 宀 đón tiếp người từ xa đến → KHÁCH.',
      cf:'宝 (bǎo – "báu vật")',w:'宾馆 / 来宾'},
     {c:'馆',p:'guǎn',type:'左右结构 · Trái-phải',st:11,ord:'饣(thực) trái → 官 (quan) phải',rad:'饣(thực – ăn)',mean:'quán, nơi tiếp đón',
      tip:'Bộ 饣(ăn uống) → nơi cung cấp ăn ở cho khách = QUÁN, KHÁCH SẠN.',
      cf:'管 (guǎn – "quản lý", bộ 竹")',w:'宾馆 / 图书馆 / 饭馆'},
   ]},
  {n:9,zh:'一直',py:'yīzhí',pos:'Phó từ',vn:'đi thẳng, luôn luôn',em:'➡️',lesson:4,
   ex_zh:'从这一直往前走。',ex_py:'Cóng zhè yìzhí wǎng qián zǒu.',ex_vn:'Từ đây đi thẳng về phía trước.',
   exList:[
     {zh:'从这一直往前走。',py:'Cóng zhè yìzhí wǎng qián zǒu.',vn:'Từ đây đi thẳng về phía trước.'},
     {zh:'他一直在等你。',py:'Tā yìzhí zài děng nǐ.',vn:'Anh ấy vẫn luôn đợi bạn.'},
     {zh:'我一直很喜欢跳舞。',py:'Wǒ yìzhí hěn xǐhuan tiàowǔ.',vn:'Tôi luôn luôn thích múa.'},
   ],
   hanzi:[
     {c:'一',p:'yī',type:'独体字 · Chữ đơn',st:1,ord:'一',rad:'一 (nhất)',mean:'một',
      tip:'Chữ đơn giản nhất, một nét ngang.',
      cf:'二 (èr)',w:'一直 / 一下 / 一起'},
     {c:'直',p:'zhí',type:'独体字 · Chữ đơn',st:8,ord:'十→目→一',rad:'目 (mục – mắt)',mean:'thẳng',
      tip:'Mắt 目 nhìn theo một đường thẳng không lệch → THẲNG.',
      cf:'真 (zhēn – "thật")',w:'一直 / 直走 / 直接'},
   ]},
  {n:10,zh:'往',py:'wǎng',pos:'Giới từ',vn:'hướng về, về phía',em:'🧭',lesson:4,
   ex_zh:'往前走。',ex_py:'Wǎng qián zǒu.',ex_vn:'Đi về phía trước.',
   exList:[
     {zh:'往前走。',py:'Wǎng qián zǒu.',vn:'Đi về phía trước.'},
     {zh:'到了路口再往右走。',py:'Dàole lùkǒu zài wǎng yòu zǒu.',vn:'Đến ngã tư thì rẽ phải.'},
     {zh:'请往这边看。',py:'Qǐng wǎng zhè biān kàn.',vn:'Xin hãy nhìn về phía này.'},
   ],
   hanzi:[
     {c:'往',p:'wǎng',type:'左右结构 · Trái-phải',st:8,ord:'彳(sách) trái → 主 (chủ) phải',rad:'彳(sách – bước ngắn)',mean:'hướng về',
      tip:'Bộ 彳(đi) + 主 (hướng chính) → bước đi THEO HƯỚNG nhất định.',
      cf:'住 (zhù – "ở", bộ 亻")',w:'往前 / 往右 / 往那儿'},
   ]},
  {n:11,zh:'路口',py:'lùkǒu',pos:'Danh từ',vn:'giao lộ, ngã tư, lối rẽ',em:'🚦',lesson:4,
   ex_zh:'到了前面的路口。',ex_py:'Dàole qiánmiàn de lùkǒu.',ex_vn:'Đến ngã tư phía trước.',
   exList:[
     {zh:'到了前面的路口。',py:'Dàole qiánmiàn de lùkǒu.',vn:'Đến ngã tư phía trước.'},
     {zh:'路口有很多车。',py:'Lùkǒu yǒu hěn duō chē.',vn:'Ở ngã tư có rất nhiều xe.'},
     {zh:'请在路口等我。',py:'Qǐng zài lùkǒu děng wǒ.',vn:'Xin hãy đợi tôi ở ngã tư.'},
   ],
   hanzi:[
     {c:'路',p:'lù',type:'左右结构 · Trái-phải',st:13,ord:'足 (túc) trái → 各 (các) phải',rad:'足 (túc – chân)',mean:'đường, tuyến đường',
      tip:'Bộ 足 (chân) → nơi bàn chân mỗi người 各 (tự) đi qua = CON ĐƯỜNG.',
      cf:'露 (lù – "lộ ra", bộ 雨")',w:'路口 / 马路 / 一直走'},
     {c:'口',p:'kǒu',type:'独体字 · Tượng hình',st:3,ord:'丨→𠃌→一',rad:'口 (khẩu – tự thành bộ)',mean:'miệng; cửa ngõ, lối',
      tip:'Hình cái miệng cách điệu → nghĩa gốc MIỆNG, mở rộng thành LỐI RA VÀO.',
      cf:'日 (rì – "mặt trời")',w:'路口 / 门口 / 人口'},
   ]},
];

const wuData = [
  {img:'✏️',label:'铅笔',py:'qiānbǐ',letter:'A'},
  {img:'😄',label:'笑',py:'xiào',letter:'B'},
  {img:'🏨',label:'宾馆',py:'bīnguǎn',letter:'C'},
  {img:'✋',label:'手',py:'shǒu',letter:'D'},
  {img:'🏫',label:'班',py:'bān',letter:'E'},
  {img:'🚦',label:'路口',py:'lùkǒu',letter:'F'},
];

var dialogData = [
  {scene:'在办公室 · Tìm người trong văn phòng',
   lines:[
     {sp:0,zh:'门开着呢，请进。',py:'Mén kāizhe ne, qǐng jìn.',vn:'Cửa đang mở đấy, mời vào.'},
     {sp:1,zh:'请问张先生在吗？',py:'Qǐngwèn Zhāng xiānsheng zài ma?',vn:'Xin hỏi có ông Trương ở đây không ạ?'},
     {sp:0,zh:'他出去了，你下午再来吧。',py:'Tā chūqu le, nǐ xiàwǔ zài lái ba.',vn:'Anh ấy ra ngoài rồi, chiều bạn quay lại nhé.'},
     {sp:1,zh:'好的，谢谢。',py:'Hǎode, xièxie.',vn:'Vâng, cảm ơn bạn.'},
   ]},
  {scene:'在办公室 · Hỏi thăm về đồng nghiệp',
   lines:[
     {sp:0,zh:'那个正在说话的女孩子是谁？',py:'Nàge zhèngzài shuōhuà de nǚháizi shì shéi?',vn:'Cô gái đang nói chuyện đằng kia là ai thế?'},
     {sp:1,zh:'我知道她的名字，她姓杨，叫杨笑笑，她姐姐是我的同学。',py:'Wǒ zhīdào tā de míngzi, tā xìng Yáng, jiào Yáng Xiàoxiao, tā jiějie shì wǒ de tóngxué.',vn:'Tôi biết tên cô ấy, cô ấy họ Dương, tên là Dương Tiếu Tiếu. Chị gái cô ấy là bạn học của tớ.'},
     {sp:0,zh:'那个手里拿着铅笔的呢？',py:'Nàge shǒu lǐ názhe qiānbǐ de ne?',vn:'Thế còn người tay cầm bút chì đằng kia thì sao?'},
     {sp:1,zh:'我不认识。',py:'Wǒ bú rènshi.',vn:'Tớ không quen.'},
   ]},
  {scene:'在运动场 · Hỏi thăm chuyện tình cảm',
   lines:[
     {sp:0,zh:'听说你有女朋友了？我认识她吗？',py:'Tīngshuō nǐ yǒu nǚpéngyou le? Wǒ rènshi tā ma?',vn:'Nghe nói bạn có bạn gái rồi à? Tớ có quen cô ấy không?'},
     {sp:1,zh:'就是我们班那个长着两个大眼睛、非常爱笑的女孩。',py:'Jiùshì wǒmen bān nàge zhǎngzhe liǎng ge dà yǎnjing, fēicháng ài xiào de nǚhái.',vn:'Chính là cô gái có đôi mắt to, rất hay cười ở lớp chúng mình ấy.'},
     {sp:0,zh:'她不是有男朋友吗？',py:'Tā bú shì yǒu nánpéngyou ma?',vn:'Cô ấy không phải là có bạn trai rồi sao?'},
     {sp:1,zh:'那个已经是她的前男友了。',py:'Nàge yǐjīng shì tā de qián nányǒu le.',vn:'Người đó đã là bạn trai cũ của cô ấy rồi.'},
   ]},
  {scene:'在路上 · Hỏi đường',
   lines:[
     {sp:0,zh:'请问这离新宾馆远吗？',py:'Qǐngwèn zhè lí xīn bīnguǎn yuǎn ma?',vn:'Xin hỏi ở đây cách khách sạn mới có xa không?'},
     {sp:1,zh:'不远，走路二十分钟就到。',py:'Bù yuǎn, zǒulù èrshí fēnzhōng jiù dào.',vn:'Không xa đâu, đi bộ 20 phút là đến nơi.'},
     {sp:0,zh:'你能告诉我怎么走吗？',py:'Nǐ néng gàosu wǒ zěnme zǒu ma?',vn:'Bạn có thể chỉ đường giúp tôi không?'},
     {sp:1,zh:'从这一直往前走，到了前面的路口再往右走。',py:'Cóng zhè yìzhí wǎng qián zǒu, dàole qiánmiàn de lùkǒu zài wǎng yòu zǒu.',vn:'Từ đây đi thẳng về phía trước, đến ngã tư phía trước thì rẽ phải.'},
   ]},
];

// ══════════════════════════════════════════
// PHẦN 1 · GHÉP TỪ (Collocation)
// ══════════════════════════════════════════
var matchData = [
  {left:'拿',right:'铅笔'},
  {left:'一直',right:'走'},
  {left:'往',right:'前'},
  {left:'路',right:'口'},
  {left:'长',right:'眼睛'},
  {left:'爱',right:'笑'},
];

// ══════════════════════════════════════════
// PHẦN 2 · NGHE — tình huống MỚI: đón bạn ở sân bay.
// ══════════════════════════════════════════
var listenData = {
  type: 'workbook',
  audio: '/audio/bai-13/listen-full.mp3',
  dictation: [
    {num:1, lines:[
      {pre:'大卫', blank:'开着车出去了', post:'。', py:'Dàwèi kāizhe chē chūqù le.', vn:'David lái xe ra ngoài rồi.'},
    ]},
    {num:2, lines:[
      {pre:'那个笑着说话的女孩儿', blank:'是谁', post:'？', py:'Nàge xiàozhe shuōhuà de nǚháir shì shéi?', vn:'Cô bé đang cười nói kia là ai vậy?'},
    ]},
    {num:3, lines:[
      {pre:'那个手里拿着铅笔的人', blank:'是我朋友', post:'。', py:'Nàge shǒu lǐ ná zhe qiānbǐ de rén shì wǒ péngyou.', vn:'Người cầm bút chì trên tay kia là bạn tôi.'},
    ]},
    {num:4, lines:[
      {pre:'我的女朋友长着两个大眼睛，', blank:'非常爱笑', post:'。', py:'Wǒ de nǚpéngyou zhǎngzhe liǎng gè dà yǎnjīng, fēicháng ài xiào.', vn:'Bạn gái tôi có đôi mắt to, rất hay cười.'},
    ]},
    {num:5, lines:[
      {pre:'这儿离新京宾馆不太远，', blank:'到前面的路口再往右', post:'。', py:'Zhèr lí Xīnjīng Bīnguǎn bú tài yuǎn, dào qiánmiàn de lùkǒu zài wǎng yòu.', vn:'Chỗ này cách khách sạn Tân Kinh không xa lắm, đến ngã tư phía trước rẽ phải.'},
    ]},
    {num:6, lines:[
      {speaker:'男', pre:'那个非常爱笑的女孩儿', blank:'是谁', post:'？', py:'Nàge fēicháng ài xiào de nǚháir shì shéi?', vn:'Cô bé rất hay cười kia là ai vậy?'},
      {speaker:'女', pre:'你不认识她吗？她叫笑笑，', blank:'是王老师的女儿', post:'。', py:'Nǐ bú rènshi tā ma? Tā jiào Xiàoxiao, shì Wáng lǎoshī de nǚ\'ér.', vn:'Bạn không quen à? Cô ấy tên Tiếu Tiếu, là con gái cô Vương.'},
    ]},
    {num:7, lines:[
      {speaker:'女', pre:'请问，这儿离商店', blank:'远吗', post:'？', py:'Qǐngwèn, zhèr lí shāngdiàn yuǎn ma?', vn:'Xin hỏi, chỗ này cách cửa hàng xa không?'},
      {speaker:'男', pre:'不远，', blank:'往前走，下一个路口就是', post:'。', py:'Bù yuǎn, wǎng qián zǒu, xià yí gè lùkǒu jiù shì.', vn:'Không xa, đi thẳng, ngã tư tiếp theo là đến.'},
    ]},
    {num:8, lines:[
      {speaker:'男', pre:'那个手里拿着铅笔的孩子是', blank:'你妹妹吗', post:'？', py:'Nàge shǒu lǐ ná zhe qiānbǐ de háizi shì nǐ mèimei ma?', vn:'Đứa trẻ cầm bút chì kia là em gái bạn à?'},
      {speaker:'女', pre:'不是，她是', blank:'我同学的妹妹', post:'。', py:'Bú shì, tā shì wǒ tóngxué de mèimei.', vn:'Không phải, đó là em gái bạn học của tôi.'},
    ]},
    {num:9, lines:[
      {speaker:'女', pre:'椅子上坐着的那个人', blank:'是谁', post:'？', py:'Yǐzi shàng zuòzhe de nàge rén shì shéi?', vn:'Người đang ngồi trên ghế kia là ai?'},
      {speaker:'男', pre:'是我爸爸。他', blank:'有点儿累，正休息呢', post:'。', py:'Shì wǒ bàba. Tā yǒudiǎnr lèi, zhèng xiūxi ne.', vn:'Là bố tôi. Ông ấy hơi mệt, đang nghỉ ngơi.'},
    ]},
    {num:10, lines:[
      {speaker:'男', pre:'现在八点十分了，你', blank:'到机场了吗', post:'？', py:'Xiànzài bā diǎn shí fēn le, nǐ dào jīchǎng le ma?', vn:'Bây giờ 8 giờ 10 rồi, bạn đến sân bay chưa?'},
      {speaker:'女', pre:'没有，我', blank:'还在出租车上呢，很快就到', post:'。', py:'Méiyǒu, wǒ hái zài chūzūchē shàng ne, hěn kuài jiù dào.', vn:'Chưa, tôi vẫn đang ở trên taxi, sắp đến rồi.'},
    ]},
  ],
  mc: [
    {num:11, options:['在公司','在家里','在外面'], ans:2,
     explain:'男：请问李先生在公司吗？女：他开着车出去了，你下午再来吧。问：李先生在哪儿？ → 在外面。'},
    {num:12, options:['是','不是','不知道'], ans:1,
     explain:'女：大卫是杨笑笑的男朋友吗？男：是杨笑笑的前男友。问：大卫现在是杨笑笑的男朋友吗？ → 不是。'},
    {num:13, options:['书太大','书太多','书太贵'], ans:1,
     explain:'男：你的书太多了，我帮你拿着吧。女：不用了，我一个人就可以了。问：男的为什么要帮女的拿书？ → 书太多。'},
    {num:14, options:['喜欢红色','喜欢衣服','别人说好看'], ans:2,
     explain:'男：为什么你每天都穿着红色的衣服？女：因为别人都说我穿红色的衣服好看。问：女的为什么每天都穿着红色的衣服？ → 别人说好看。'},
    {num:15, options:['男的认识','女的认识','男的和女的都不认识'], ans:2,
     explain:'男：那个笑着说话的女孩儿是谁？女：哪个？是穿红衣服的那个吗？男：对，就是她。女：她是新来的学生，我也不认识。问：谁认识那个女孩儿？ → 男的和女的都不认识。'},
  ],
};

// ══════════════════════════════════════════
// PHẦN 3a · ĐIỀN TỪ — hội thoại MỚI: đón bạn ở sân bay
// ══════════════════════════════════════════
var fillData = [
  {pre:'我在机场门口等你，手里拿',blank:'着',post:'一本红色的书。',hint:'(trợ từ động thái)',ans:'着',exp:'Động từ + 着 = trạng thái đang được duy trì.'},
  {pre:'好的，手里',blank:'拿',post:'着书的就是你吧？',hint:'(cầm)',ans:'拿'},
  {pre:'对，你怎么一下就认出我了？因为你',blank:'一直',post:'在笑啊！',hint:'(luôn, cứ)',ans:'一直'},
  {pre:'她',blank:'不是',post:'你妹妹吗？怎么变化这么大！',hint:'(chẳng phải... sao?)',ans:'不是',exp:'不是……吗？dùng để xác nhận lại, tỏ ý ngạc nhiên.'},
  {pre:'是啊，她',blank:'长',post:'高了很多。',hint:'(lớn lên, cao lên)',ans:'长'},
  {pre:'我们从这儿一直',blank:'往',post:'前走吧。',hint:'(hướng về phía)',ans:'往'},
  {pre:'到了前面的路',blank:'口',post:'，宾馆就在那儿。',hint:'(ghép 路口 – ngã tư)',ans:'口'},
  {pre:'',blank:'宾馆',post:'离机场不远，走十分钟就到。',hint:'(khách sạn)',ans:'宾馆'},
];

// ══════════════════════════════════════════
// PHẦN 3b · SẮP XẾP
// ══════════════════════════════════════════
var sortData = [
  {words:['我','手里','拿着','一','本','书','。'],ans:'我手里拿着一本书。',audio:'我手里拿着一本书。'},
  {words:['她','不是','你','妹妹','吗','？'],ans:'她不是你妹妹吗？',audio:'她不是你妹妹吗？'},
  {words:['从','这儿','一直','往','前','走','。'],ans:'从这儿一直往前走。',audio:'从这儿一直往前走。'},
  {words:['到','了','路口','往','右','走','。'],ans:'到了路口往右走。',audio:'到了路口往右走。'},
  {words:['那个','女孩子','一直','在','笑','。'],ans:'那个女孩子一直在笑。',audio:'那个女孩子一直在笑。'},
  {words:['宾馆','离','机场','不','远','。'],ans:'宾馆离机场不远。',audio:'宾馆离机场不远。'},
];

// ══════════════════════════════════════════
// PHẦN 3c · SỬA LỖI SAI
// ══════════════════════════════════════════
var errorFixData = [
  {wrong:'门着开呢。',
   opts:['门开着呢。','门着开呢。','门开呢着。','着门开呢。'],ans:0,
   exp:'着 luôn đứng NGAY SAU động từ (开着), không đặt trước động từ.'},
  {wrong:'她手里着拿书。',
   opts:['她手里拿着书。','她手里着拿书。','她手里书拿着。','着她手里拿书。'],ans:0,
   exp:'着 gắn liền ngay sau động từ chính (拿着), rồi mới đến tân ngữ (书).'},
  {wrong:'她是不有男朋友吗？',
   opts:['她不是有男朋友吗？','她是不有男朋友吗？','她有不是男朋友吗？','她男朋友不是有吗？'],ans:0,
   exp:'Cấu trúc đúng là 不是 (đi liền nhau) + Động từ/Tính từ + 吗？, không tách rời 不 và 是.'},
  {wrong:'她有男朋友不是吗？',
   opts:['她不是有男朋友吗？','她有男朋友不是吗？','她不有是男朋友吗？','有她不是男朋友吗？'],ans:0,
   exp:'不是 phải đứng Ở ĐẦU phần khẳng định (trước động từ 有), không đặt ở cuối câu.'},
  {wrong:'一直前往走。',
   opts:['一直往前走。','一直前往走。','往一直前走。','前一直往走。'],ans:0,
   exp:'Trật tự chuẩn: 一直 + 往 + Hướng (前/左/右) + 走, 往 phải đứng ngay trước từ chỉ hướng.'},
];

// ══════════════════════════════════════════
// PHẦN 4 · LUYỆN NÓI 3 TẦNG (tầng 3 có ghi âm + chấm điểm AI)
// ══════════════════════════════════════════
var speakingData = {
  intro:'Nhấn 🔊 để nghe câu hỏi, sau đó tự ghi âm câu trả lời của bạn. Ghi âm xong mới nên xem gợi ý/câu trả lời mẫu để đối chiếu.',
  questions:[
    {q_zh:'你怎么才能让我在机场一眼就认出你？',
     q_vn:'Làm sao để tôi có thể nhận ra bạn ngay ở sân bay?',
     hint:'我在机场门口等你，我手里拿着＿＿。',
     sample:'我在机场门口等你，我手里拿着一本红色的书。',
     sample_vn:'Tôi đợi bạn ở cửa sân bay, tay tôi cầm một quyển sách màu đỏ.',
     note:'着 dùng để miêu tả trạng thái đang duy trì (tay đang cầm gì đó).'},
    {q_zh:'你看，前面那个人，你认识吗？',
     q_vn:'Bạn xem, người phía trước kia, bạn có quen không?',
     hint:'她不是＿＿吗？',
     sample:'她不是你妹妹吗？怎么变化这么大！',
     sample_vn:'Cô ấy không phải em gái bạn à? Sao thay đổi nhiều thế!',
     note:'不是……吗？dùng để xác nhận lại thông tin, tỏ ý ngạc nhiên.'},
    {q_zh:'请问，从这儿去宾馆怎么走？',
     q_vn:'Xin hỏi, từ đây đến khách sạn đi thế nào?',
     hint:'从这儿一直往前走，到了路口往＿＿走。',
     sample:'从这儿一直往前走，到了路口往右走，宾馆就在那儿。',
     sample_vn:'Từ đây đi thẳng về phía trước, đến ngã tư thì rẽ phải, khách sạn ở đó.',
     note:'往 + hướng + 走 dùng để chỉ đường từng chặng một.'},
  ],
};

// ══════════════════════════════════════════
// LUYỆN DỊCH — dùng từ bài 13 + ôn lại từ bài 1-12 và HSK1
// ══════════════════════════════════════════
var translateData = [
  {vi:'Cô ấy tay đang cầm bút chì.', zh:'她手里拿着铅笔。', py:'Tā shǒu lǐ názhe qiānbǐ.'},
  {vi:'Đi thẳng về phía trước.', zh:'一直往前走。', py:'Yìzhí wǎng qián zǒu.'},
  {vi:'Đến ngã tư thì rẽ phải.', zh:'到了路口再往右走。', py:'Dàole lùkǒu zài wǎng yòu zǒu.'},
  {vi:'Cô ấy chẳng phải có bạn trai rồi sao?', zh:'她不是有男朋友吗？', py:'Tā bú shì yǒu nán péngyou ma?'},
];

// ══════════════════════════════════════════
// LUYỆN DỊCH (chiều Trung→Việt) — noi dung KHAC voi chieu Viet->Trung o tren
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:'Anh ấy tay đang cầm điện thoại, cứ nói chuyện mãi.', zh:'他手里拿着手机，一直在说话。', py:'Tā shǒu lǐ názhe shǒujī, yìzhí zài shuōhuà.'},
  {vi:'Khách sạn ở bên phải ngã tư, bạn đi thẳng là tới.', zh:'宾馆在路口右边，你一直走就到了。', py:'Bīnguǎn zài lùkǒu yòubian, nǐ yìzhí zǒu jiù dào le.'},
  {vi:'Cô ấy cười rồi, cô ấy rất vui.', zh:'她笑了，她很高兴。', py:'Tā xiào le, tā hěn gāoxìng.'},
  {vi:'Cô bé đó tay đang cầm bút chì, đang cười.', zh:'那个女孩子手里拿着铅笔，在笑。', py:'Nàge nǚ háizi shǒu lǐ názhe qiānbǐ, zài xiào.'},
];
