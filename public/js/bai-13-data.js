// ══════════════════════════════════════════
// DATA — Bài 13: 门开着呢
// ══════════════════════════════════════════
const vocabData = [
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

const dialogData = [
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

// Điền từ — cả 3 điểm ngữ pháp (着/不是…吗/往), có ôn 到 (Bài 7)
const fillData = [
  {pre:'门开',blank:'着',post:'呢，请进。',hint:'(trợ từ động thái)',ans:'着',exp:'Động từ + 着 = trạng thái đang được duy trì'},
  {pre:'手里',blank:'拿',post:'着铅笔的那个人。',hint:'(cầm)',ans:'拿'},
  {pre:'就是我们班那个',blank:'长',post:'着两个大眼睛的女孩。',hint:'(mọc, có đặc điểm)',ans:'长'},
  {pre:'她',blank:'不是',post:'有男朋友吗？',hint:'(chẳng phải... sao?)',ans:'不是',exp:'不是……吗？dùng nhắc lại thông tin, tỏ ý ngạc nhiên'},
  {pre:'从这一直',blank:'往',post:'前走。',hint:'(hướng về phía)',ans:'往',exp:'往 + hướng = đi về phía nào đó'},
  {pre:'到了前面的路',blank:'口',post:'再往右走。',hint:'(ghép thành 路口 - ngã tư)',ans:'口'},
  {pre:'她非常爱',blank:'笑',post:'。',hint:'(cười)',ans:'笑'},
  {pre:'走路二十分钟就',blank:'到',post:'了。',hint:'(đến — ôn từ Bài 7)',ans:'到'},
];

// Sắp xếp — khác Điền từ
const sortData = [
  {words:['请问','张','先生','在','吗','？'],ans:'请问张先生在吗？',audio:'请问张先生在吗？'},
  {words:['那个','手里','拿着','铅笔','的','呢','？'],ans:'那个手里拿着铅笔的呢？',audio:'那个手里拿着铅笔的呢？'},
  {words:['她','不是','有','男朋友','吗','？'],ans:'她不是有男朋友吗？',audio:'她不是有男朋友吗？'},
  {words:['不','远','，','走路','二十','分钟','就','到','。'],ans:'不远，走路二十分钟就到。',audio:'不远，走路二十分钟就到。'},
  {words:['你','能','告诉','我','怎么','走','吗','？'],ans:'你能告诉我怎么走吗？',audio:'你能告诉我怎么走吗？'},
  {words:['她','姓','杨','，','叫','杨','笑笑','。'],ans:'她姓杨，叫杨笑笑。',audio:'她姓杨，叫杨笑笑。'},
];

const matchData = [
  {left:'门开着呢，',right:'请进。'},
  {left:'请问张先生在吗？',right:'他出去了，你下午再来吧。'},
  {left:'那个正在说话的女孩子是谁？',right:'她姓杨，叫杨笑笑。'},
  {left:'听说你有女朋友了？',right:'就是我们班那个爱笑的女孩。'},
  {left:'请问这离新宾馆远吗？',right:'不远，走路二十分钟就到。'},
  {left:'你能告诉我怎么走吗？',right:'从这一直往前走。'},
];

// Trắc nghiệm — không audio; trộn từ Bài 9/10/11/12 làm phương án nhiễu
const mcData = [
  {q:'门开＿＿呢，请进。',opts:['着','了','过','的'],ans:0},
  {q:'手里＿＿着铅笔。',opts:['拿','穿','洗','进'],ans:0},
  {q:'她＿＿有男朋友吗？',opts:['不是','不','没','别'],ans:0},
  {q:'从这一直＿＿前走。',opts:['往','从','离','对'],ans:0},
  {q:'到了前面的路＿＿再往右走。',opts:['口','边','上','里'],ans:0},
  {q:'她非常爱＿＿。',opts:['笑','哭','唱歌','跳舞'],ans:0},
  {q:'走路二十分钟就＿＿了。',opts:['到','进','近','远'],ans:0},
  {q:'那个＿＿两个大眼睛的女孩。',opts:['长','穿','姓','拿'],ans:0},
  {q:'请问这离新＿＿远吗？',opts:['宾馆','公司','房间','学校'],ans:0},
  {q:'我们＿＿有很多学生。',opts:['班','课','题','问题'],ans:0},
];

const speakingData = {
  t1:{
    intro:'Nhấn 🔊 nghe từng câu mẫu, đọc to theo cho tới khi trôi chảy. Chú ý thanh điệu và nhịp câu. Có thể đọc phân vai theo cặp.',
    models:[
      {zh:'门开着呢，请进。',py:'Mén kāizhe ne, qǐng jìn.',vn:'Cửa đang mở đấy, mời vào.'},
      {zh:'那个手里拿着铅笔的呢？',py:'Nàge shǒu lǐ názhe qiānbǐ de ne?',vn:'Thế còn người tay cầm bút chì đằng kia thì sao?'},
      {zh:'她不是有男朋友吗？',py:'Tā bú shì yǒu nánpéngyou ma?',vn:'Cô ấy không phải là có bạn trai rồi sao?'},
      {zh:'从这一直往前走，到了前面的路口再往右走。',py:'Cóng zhè yìzhí wǎng qián zǒu, dàole qiánmiàn de lùkǒu zài wǎng yòu zǒu.',vn:'Từ đây đi thẳng về phía trước, đến ngã tư phía trước thì rẽ phải.'},
    ],
  },
  t2:{
    intro:'Dùng khung câu cho sẵn, thay thế phần gạch chân bằng từ trong ô gợi ý để tạo câu mới. Nhấn 🔊 để nghe rồi nói to mỗi câu bạn tạo được.',
    drills:[
      {frame:'那个手里拿着＿＿的人。',frame_py:'Nàge shǒu lǐ názhe ___ de rén.',vn:'Người tay đang cầm ＿＿ kia.',options:['铅笔','报纸','手机'],samples:['那个手里拿着铅笔的人。','那个手里拿着报纸的人。','那个手里拿着手机的人。']},
      {frame:'她不是有＿＿吗？',frame_py:'Tā bú shì yǒu ___ ma?',vn:'Cô ấy không phải có ＿＿ rồi sao?',options:['男朋友','女朋友','工作'],samples:['她不是有男朋友吗？','她不是有女朋友吗？','她不是有工作吗？']},
      {frame:'从这一直往＿＿走。',frame_py:'Cóng zhè yìzhí wǎng ___ zǒu.',vn:'Từ đây đi thẳng về hướng ＿＿.',options:['前','左','右'],samples:['从这一直往前走。','从这一直往左走。','从这一直往右走。']},
      {frame:'到了路口再往＿＿走。',frame_py:'Dàole lùkǒu zài wǎng ___ zǒu.',vn:'Đến ngã tư thì rẽ ＿＿.',options:['右','左','前'],samples:['到了路口再往右走。','到了路口再往左走。','到了路口再往前走。']},
    ],
  },
  t3:{
    intro:'Không nhìn câu mẫu, tự dùng từ đã học để nói theo tình huống. Nói liền 2–3 câu. Ghi âm lại rồi nghe để tự sửa.',
    tasks:[
      {role:'🏢 Tình huống 1 — Tìm người trong văn phòng',
       guide:'Bạn đến văn phòng tìm một người nhưng người đó vừa ra ngoài.',
       structure:['请问＿＿在吗？','他出去了，你＿＿再来吧。'],
       sample:'请问张先生在吗？他出去了，你下午再来吧。',
       sample_vn:'Xin hỏi có ông Trương ở đây không? Anh ấy ra ngoài rồi, chiều bạn quay lại nhé.'},
      {role:'👀 Tình huống 2 — Miêu tả ngoại hình bạn bè',
       guide:'Bạn miêu tả một người bạn cùng lớp cho ai đó nghe qua ngoại hình.',
       structure:['就是我们班那个＿＿的人。'],
       sample:'就是我们班那个长着两个大眼睛、非常爱笑的女孩。',
       sample_vn:'Chính là cô gái có đôi mắt to, rất hay cười ở lớp chúng mình.'},
      {role:'🗺️ Tình huống 3 — Chỉ đường cho người lạ',
       guide:'Có người hỏi đường đến khách sạn, bạn hãy chỉ đường cho họ.',
       structure:['请问这离＿＿远吗？','从这一直往前走，到了路口再往＿＿走。'],
       sample:'请问这离新宾馆远吗？从这一直往前走，到了路口再往右走。',
       sample_vn:'Xin hỏi ở đây cách khách sạn mới có xa không? Từ đây đi thẳng, đến ngã tư thì rẽ phải.'},
    ],
  },
};
