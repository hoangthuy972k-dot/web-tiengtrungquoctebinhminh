// ══════════════════════════════════════════
// DATA — Bài 10: 别找了，手机在桌子上呢
// ══════════════════════════════════════════
const vocabData = [
  {n:1,zh:'课',py:'kè',pos:'Danh từ',vn:'bài học, tiết học, môn học',em:'📖',lesson:1,
   ex_zh:'明天上午还有汉语课呢。',ex_py:'Míngtiān shàngwǔ hái yǒu Hànyǔ kè ne.',ex_vn:'Sáng mai còn có tiết học tiếng Trung đấy.',
   exList:[
     {zh:'明天上午还有汉语课呢。',py:'Míngtiān shàngwǔ hái yǒu Hànyǔ kè ne.',vn:'Sáng mai còn có tiết học tiếng Trung đấy.'},
     {zh:'今天我们有几节课？',py:'Jīntiān wǒmen yǒu jǐ jié kè?',vn:'Hôm nay chúng ta có mấy tiết học?'},
     {zh:'这节课很有意思。',py:'Zhè jié kè hěn yǒu yìsi.',vn:'Tiết học này rất thú vị.'},
   ],
   hanzi:[
     {c:'课',p:'kè',type:'左右结构 · Trái-phải',st:10,ord:'讠(ngôn) trái → 果 (quả) phải',rad:'讠(ngôn – lời nói)',mean:'bài học, môn học',
      tip:'Bộ 讠(lời nói/giảng dạy) + 果 (kết quả) → lời giảng mang lại KẾT QUẢ học tập = BÀI HỌC.',
      cf:'棵 (kē – lượng từ cây)',w:'汉语课 / 上课 / 下课'},
   ]},
  {n:2,zh:'帮助',py:'bāngzhù',pos:'Động từ / Danh từ',vn:'giúp đỡ, có ích',em:'🤝',lesson:1,
   ex_zh:'看电视对学汉语有帮助。',ex_py:'Kàn diànshì duì xué Hànyǔ yǒu bāngzhù.',ex_vn:'Xem tivi có ích cho việc học tiếng Trung.',
   exList:[
     {zh:'看电视对学汉语有帮助。',py:'Kàn diànshì duì xué Hànyǔ yǒu bāngzhù.',vn:'Xem tivi có ích cho việc học tiếng Trung.'},
     {zh:'谢谢你的帮助。',py:'Xièxie nǐ de bāngzhù.',vn:'Cảm ơn sự giúp đỡ của bạn.'},
     {zh:'他帮助了很多人。',py:'Tā bāngzhùle hěn duō rén.',vn:'Anh ấy đã giúp đỡ rất nhiều người.'},
   ],
   hanzi:[
     {c:'帮',p:'bāng',type:'上下结构 · Trên-dưới',st:9,ord:'邦 (biến thể) → 巾 (cân)',rad:'巾 (cân – khăn)',mean:'giúp đỡ',
      tip:'Đã học ở Bài 4 (帮我介绍) — cùng nhau hỗ trợ.',
      cf:'邦 (bāng – "quốc gia")',w:'帮助 / 帮忙 / 帮我'},
     {c:'助',p:'zhù',type:'左右结构 · Trái-phải',st:7,ord:'且 (thả) trái → 力 (lực) phải',rad:'力 (lực – sức mạnh)',mean:'trợ giúp',
      tip:'Bộ 力 (sức lực) → góp thêm sức để TRỢ GIÚP người khác.',
      cf:'昨 (zuó – khác bộ trái)',w:'帮助 / 助手 / 互助'},
   ]},
  {n:3,zh:'别',py:'bié',pos:'Phó từ',vn:'đừng',em:'🚫',lesson:2,
   ex_zh:'别看报纸了，医生说你要多休息。',ex_py:'Bié kàn bàozhǐ le, yīshēng shuō nǐ yào duō xiūxi.',ex_vn:'Đừng đọc báo nữa, bác sĩ bảo bạn cần nghỉ ngơi nhiều.',
   exList:[
     {zh:'别看报纸了，医生说你要多休息。',py:'Bié kàn bàozhǐ le, yīshēng shuō nǐ yào duō xiūxi.',vn:'Đừng đọc báo nữa, bác sĩ bảo bạn cần nghỉ ngơi nhiều.'},
     {zh:'别玩手机了，快去学习吧。',py:'Bié wán shǒujī le, kuài qù xuéxí ba.',vn:'Đừng chơi điện thoại nữa, mau đi học đi.'},
     {zh:'别担心，没事儿。',py:'Bié dānxīn, méishìr.',vn:'Đừng lo, không sao đâu.'},
   ],
   hanzi:[
     {c:'别',p:'bié',type:'左右结构 · Trái-phải',st:7,ord:'另 (lánh) trái → 刂 (đao) phải',rad:'刂(đao – dao)',mean:'đừng; khác',
      tip:'Bộ 刂(dao) cắt lìa, tách biệt → dùng để NGĂN CẢN, bảo "đừng" làm nữa.',
      cf:'列 (liè – "hàng, dãy")',w:'别…了 / 别的 / 特别'},
   ]},
  {n:4,zh:'哥哥',py:'gēge',pos:'Danh từ',vn:'anh trai',em:'👨',lesson:3,
   ex_zh:'哥哥今天中午回来吃饭。',ex_py:'Gēge jīntiān zhōngwǔ huílái chīfàn.',ex_vn:'Trưa nay anh trai về ăn cơm.',
   exList:[
     {zh:'哥哥今天中午回来吃饭。',py:'Gēge jīntiān zhōngwǔ huílái chīfàn.',vn:'Trưa nay anh trai về ăn cơm.'},
     {zh:'我哥哥在北京工作。',py:'Wǒ gēge zài Běijīng gōngzuò.',vn:'Anh trai tôi làm việc ở Bắc Kinh.'},
     {zh:'哥哥比我大五岁。',py:'Gēge bǐ wǒ dà wǔ suì.',vn:'Anh trai lớn hơn tôi 5 tuổi.'},
   ],
   hanzi:[
     {c:'哥',p:'gē',type:'上下结构 · Trên-dưới',st:10,ord:'可→可 (hai chữ 可 chồng nhau)',rad:'口 (khẩu – miệng)',mean:'anh trai',
      tip:'Hai chữ 可 (đồng ý) chồng lên nhau → hình ảnh người anh luôn gật đầu chỉ bảo em.',
      cf:'歌 (gē – "bài hát")',w:'哥哥 / 大哥'},
   ]},
  {n:5,zh:'鸡蛋',py:'jīdàn',pos:'Danh từ',vn:'trứng gà',em:'🥚',lesson:3,
   ex_zh:'我买了羊肉和鸡蛋。',ex_py:'Wǒ mǎile yángròu hé jīdàn.',ex_vn:'Tôi đã mua thịt dê và trứng gà.',
   exList:[
     {zh:'我买了羊肉和鸡蛋。',py:'Wǒ mǎile yángròu hé jīdàn.',vn:'Tôi đã mua thịt dê và trứng gà.'},
     {zh:'我每天早上吃一个鸡蛋。',py:'Wǒ měitiān zǎoshang chī yí ge jīdàn.',vn:'Mỗi sáng tôi ăn một quả trứng gà.'},
     {zh:'冰箱里有很多鸡蛋。',py:'Bīngxiāng lǐ yǒu hěn duō jīdàn.',vn:'Trong tủ lạnh có rất nhiều trứng gà.'},
   ],
   hanzi:[
     {c:'鸡',p:'jī',type:'左右结构 · Trái-phải',st:7,ord:'又 (hựu) trái → 鸟 (điểu) phải',rad:'鸟 (điểu – chim)',mean:'gà',
      tip:'Bộ 鸟 (chim) → gà cũng thuộc họ nhà chim, chỉ là không bay được xa.',
      cf:'鸭 (yā – "vịt")',w:'鸡蛋 / 鸡肉 / 小鸡'},
     {c:'蛋',p:'dàn',type:'上下结构 · Trên-dưới',st:11,ord:'疋 (sơ) → 虫 (trùng)',rad:'疋 (sơ)',mean:'trứng',
      tip:'Hình quả trứng cách điệu bên trên phần thân → nghĩa "TRỨNG" nói chung.',
      cf:'蜑 (dàn – ít dùng)',w:'鸡蛋 / 鸭蛋'},
   ]},
  {n:6,zh:'西瓜',py:'xīguā',pos:'Danh từ',vn:'dưa hấu',em:'🍉',lesson:3,
   ex_zh:'冰箱里有西瓜。',ex_py:'Bīngxiāng lǐ yǒu xīguā.',ex_vn:'Trong tủ lạnh có dưa hấu.',
   exList:[
     {zh:'冰箱里有西瓜。',py:'Bīngxiāng lǐ yǒu xīguā.',vn:'Trong tủ lạnh có dưa hấu.'},
     {zh:'夏天我喜欢吃西瓜。',py:'Xiàtiān wǒ xǐhuan chī xīguā.',vn:'Mùa hè tôi thích ăn dưa hấu.'},
     {zh:'这个西瓜很甜。',py:'Zhège xīguā hěn tián.',vn:'Quả dưa hấu này rất ngọt.'},
   ],
   hanzi:[
     {c:'西',p:'xī',type:'独体字 · Chữ đơn',st:6,ord:'一→儿→一→凵',rad:'西 (tây – tự thành bộ)',mean:'phía Tây',
      tip:'Hình cái tổ chim lúc mặt trời lặn về phía Tây → chỉ HƯỚNG TÂY.',
      cf:'酉 (yǒu – "chi Dậu")',w:'西瓜 / 东西 / 西边'},
     {c:'瓜',p:'guā',type:'独体字 · Tượng hình',st:5,ord:'丶→ᄼ→㇈→丨',rad:'瓜 (qua – tự thành bộ)',mean:'dưa, bầu bí',
      tip:'Hình quả dưa lủng lẳng trên dây leo → "DƯA".',
      cf:'爪 (zhǎo – "móng vuốt")',w:'西瓜 / 木瓜 / 黄瓜'},
   ]},
  {n:7,zh:'正在',py:'zhèngzài',pos:'Phó từ',vn:'đang',em:'⏳',lesson:3,
   ex_zh:'妈妈正在准备午饭呢。',ex_py:'Māma zhèngzài zhǔnbèi wǔfàn ne.',ex_vn:'Mẹ đang chuẩn bị bữa trưa kìa.',
   exList:[
     {zh:'妈妈正在准备午饭呢。',py:'Māma zhèngzài zhǔnbèi wǔfàn ne.',vn:'Mẹ đang chuẩn bị bữa trưa kìa.'},
     {zh:'他正在看电视。',py:'Tā zhèngzài kàn diànshì.',vn:'Anh ấy đang xem tivi.'},
     {zh:'我们正在上课呢。',py:'Wǒmen zhèngzài shàngkè ne.',vn:'Chúng tôi đang trong giờ học đấy.'},
   ],
   hanzi:[
     {c:'正',p:'zhèng',type:'独体字 · Chữ đơn',st:5,ord:'一→丨→一→乛→一',rad:'止 (chỉ)',mean:'đúng, chính',
      tip:'Một nét ngang (mốc chuẩn) trên chữ 止 (dừng đúng chỗ) → nghĩa "ĐÚNG, CHÍNH".',
      cf:'政 (zhèng – "chính trị")',w:'正在 / 正好 / 正常'},
     {c:'在',p:'zài',type:'半包围 · Bán bao',st:6,ord:'土 → 才 bao ngoài',rad:'土 (thổ – đất)',mean:'ở, đang',
      tip:'Đã học nhiều lần — chỉ vị trí/trạng thái đang diễn ra.',
      cf:'再 (zài – "lại")',w:'正在 / 在家 / 现在'},
   ]},
  {n:8,zh:'手机',py:'shǒujī',pos:'Danh từ',vn:'điện thoại di động',em:'📱',lesson:4,
   ex_zh:'手机在桌子上呢。',ex_py:'Shǒujī zài zhuōzi shang ne.',ex_vn:'Điện thoại ở trên bàn kìa.',
   exList:[
     {zh:'手机在桌子上呢。',py:'Shǒujī zài zhuōzi shang ne.',vn:'Điện thoại ở trên bàn kìa.'},
     {zh:'我的手机没电了。',py:'Wǒ de shǒujī méi diàn le.',vn:'Điện thoại của tôi hết pin rồi.'},
     {zh:'这是我新买的手机。',py:'Zhè shì wǒ xīn mǎi de shǒujī.',vn:'Đây là điện thoại tôi mới mua.'},
   ],
   hanzi:[
     {c:'手',p:'shǒu',type:'独体字 · Tượng hình',st:4,ord:'丿→一→𠃌→丿',rad:'手 (thủ – tự thành bộ)',mean:'tay',
      tip:'Hình bàn tay xoè năm ngón cách điệu → "TAY". Sẽ học kỹ hơn ở Bài 13.',
      cf:'毛 (máo – "lông")',w:'手机 / 手表 / 洗手'},
     {c:'机',p:'jī',type:'左右结构 · Trái-phải',st:6,ord:'木 (mộc) trái → 几 (kỷ) phải',rad:'木 (mộc – cây/gỗ)',mean:'máy móc',
      tip:'Bộ 木 (gỗ) — máy móc xưa làm từ khung gỗ → nghĩa mở rộng "MÁY".',
      cf:'几 (jǐ – "mấy")',w:'手机 / 飞机 / 机场'},
   ]},
  {n:9,zh:'洗',py:'xǐ',pos:'Động từ',vn:'rửa, giặt',em:'🧼',lesson:4,
   ex_zh:'那件衣服我帮你洗了。',ex_py:'Nà jiàn yīfu wǒ bāng nǐ xǐ le.',ex_vn:'Chiếc áo đó tớ giặt giúp bạn rồi.',
   exList:[
     {zh:'那件衣服我帮你洗了。',py:'Nà jiàn yīfu wǒ bāng nǐ xǐ le.',vn:'Chiếc áo đó tớ giặt giúp bạn rồi.'},
     {zh:'吃饭以前要洗手。',py:'Chīfàn yǐqián yào xǐ shǒu.',vn:'Trước khi ăn cơm phải rửa tay.'},
     {zh:'这个西瓜洗了吗？',py:'Zhège xīguā xǐle ma?',vn:'Quả dưa hấu này rửa chưa?'},
   ],
   hanzi:[
     {c:'洗',p:'xǐ',type:'左右结构 · Trái-phải',st:9,ord:'氵(thủy) trái → 先 (tiên) phải',rad:'氵(thủy – nước)',mean:'rửa, giặt',
      tip:'Bộ 氵(nước) → dùng nước để RỬA SẠCH đồ vật/quần áo.',
      cf:'先 (xiān – "trước", thiếu bộ 氵)',w:'洗手 / 洗衣服 / 洗澡'},
   ]},
];

const wuData = [
  {img:'🥚',label:'鸡蛋',py:'jīdàn',letter:'A'},
  {img:'🍉',label:'西瓜',py:'xīguā',letter:'B'},
  {img:'📱',label:'手机',py:'shǒujī',letter:'C'},
  {img:'🧼',label:'洗',py:'xǐ',letter:'D'},
  {img:'👨',label:'哥哥',py:'gēge',letter:'E'},
  {img:'📖',label:'课',py:'kè',letter:'F'},
];

const dialogData = [
  {scene:'在家里 · Xem tivi hay học bài',
   lines:[
     {sp:0,zh:'不要看电视了，明天上午还有汉语课呢。',py:'Bú yào kàn diànshì le, míngtiān shàngwǔ hái yǒu Hànyǔ kè ne.',vn:'Đừng xem tivi nữa, sáng mai còn có tiết học tiếng Trung đấy.'},
     {sp:1,zh:'看电视对学汉语有帮助。',py:'Kàn diànshì duì xué Hànyǔ yǒu bāngzhù.',vn:'Xem tivi có ích cho việc học tiếng Trung mà.'},
     {sp:0,zh:'明天的课你都准备好了吗？',py:'Míngtiān de kè nǐ dōu zhǔnbèi hǎo le ma?',vn:'Mấy tiết học ngày mai bạn đã chuẩn bị tốt hết chưa?'},
     {sp:1,zh:'都准备好了。',py:'Dōu zhǔnbèi hǎo le.',vn:'Tớ chuẩn bị tốt hết rồi.'},
   ]},
  {scene:'在医院 · Trong bệnh viện',
   lines:[
     {sp:0,zh:'别看报纸了，医生说你要多休息。',py:'Bié kàn bàozhǐ le, yīshēng shuō nǐ yào duō xiūxi.',vn:'Đừng đọc báo nữa, bác sĩ bảo bạn cần nghỉ ngơi nhiều đấy.'},
     {sp:1,zh:'好，不看了。给我一杯茶吧。',py:'Hǎo, bú kàn le. Gěi wǒ yì bēi chá ba.',vn:'Được rồi, không đọc nữa. Cho tôi một cốc trà đi.'},
     {sp:0,zh:'医生说吃药后两个小时不要喝茶。',py:'Yīshēng shuō chī yào hòu liǎng ge xiǎoshí bú yào hē chá.',vn:'Bác sĩ bảo sau khi uống thuốc hai tiếng thì không được uống trà.'},
     {sp:1,zh:'医生还说什么了？',py:'Yīshēng hái shuō shénme le?',vn:'Bác sĩ còn dặn gì nữa không?'},
   ]},
  {scene:'在家里 · Đi chợ về',
   lines:[
     {sp:0,zh:'你怎么买了这么多东西呀？',py:'Nǐ zěnme mǎile zhème duō dōngxi ya?',vn:'Sao bạn mua nhiều đồ thế này?'},
     {sp:1,zh:'哥哥今天中午回来吃饭。',py:'Gēge jīntiān zhōngwǔ huílái chīfàn.',vn:'Trưa nay anh trai về ăn cơm.'},
     {sp:0,zh:'我看看买什么了。羊肉、鸡蛋、面条、西瓜，真不少！妈妈呢？',py:'Wǒ kànkan mǎi shénme le. Yángròu, jīdàn, miàntiáo, xīguā, zhēn bù shǎo! Māma ne?',vn:'Để tớ xem mua những gì nào. Thịt dê, trứng gà, mì sợi, dưa hấu, thật không ít nha! Mẹ đâu rồi?'},
     {sp:1,zh:'正在准备午饭呢。',py:'Zhèngzài zhǔnbèi wǔfàn ne.',vn:'Mẹ đang chuẩn bị bữa trưa kìa.'},
   ]},
  {scene:'在家里 · Tìm điện thoại',
   lines:[
     {sp:0,zh:'你在找什么？',py:'Nǐ zài zhǎo shénme?',vn:'Bạn đang tìm gì thế?'},
     {sp:1,zh:'你看见我的手机了吗？白色的。',py:'Nǐ kànjiàn wǒ de shǒujī le ma? Báisè de.',vn:'Bạn có thấy điện thoại của tớ đâu không? Cái màu trắng ấy.'},
     {sp:0,zh:'别找了，手机在桌子上呢，电脑旁边。',py:'Bié zhǎo le, shǒujī zài zhuōzi shang ne, diànnǎo pángbiān.',vn:'Đừng tìm nữa, điện thoại ở trên bàn kìa, ngay bên cạnh máy tính.'},
     {sp:1,zh:'你看见我的衣服了吗？红色的那件。',py:'Nǐ kànjiàn wǒ de yīfu le ma? Hóngsè de nà jiàn.',vn:'Thế bạn có nhìn thấy quần áo của tớ đâu không? Bộ màu đỏ ấy.'},
   ]},
];

// Điền từ — đủ 4 hội thoại + 2 điểm ngữ pháp, có ôn 对(Bài 5) và 茶/咖啡/牛奶 để phân biệt
const fillData = [
  {pre:'不要看电视',blank:'了',post:'，明天还有课呢。',hint:'(trợ từ trong 不要...了)',ans:'了',exp:'不要/别 + Động từ + 了 = đừng làm... nữa'},
  {pre:'看电视对学汉语有',blank:'帮助',post:'。',hint:'(có ích, giúp đỡ)',ans:'帮助',exp:'对...有帮助 = có ích đối với...'},
  {pre:'',blank:'别',post:'看报纸了，医生说你要多休息。',hint:'(đừng)',ans:'别',exp:'别 + Động từ + 了 = đừng làm... nữa'},
  {pre:'医生说吃药后两个小时不要喝',blank:'茶',post:'。',hint:'(trà)',ans:'茶',exp:'茶 = trà, danh từ chỉ đồ uống'},
  {pre:'妈妈',blank:'正在',post:'准备午饭呢。',hint:'(đang)',ans:'正在',exp:'正在 + Động từ + 呢 = đang làm gì đó'},
  {pre:'你看见我的',blank:'手机',post:'了吗？',hint:'(điện thoại di động)',ans:'手机',exp:'手机 = điện thoại di động'},
  {pre:'那件衣服我帮你',blank:'洗',post:'了。',hint:'(giặt)',ans:'洗',exp:'洗 = rửa, giặt'},
  {pre:'运动',blank:'对',post:'身体很好。',hint:'(đối với — ôn từ Bài 5)',ans:'对',exp:'对 + đối tượng + 好/不好 = tốt/không tốt cho...'},
];

// Sắp xếp — câu khác hẳn Điền từ, có câu ôn cấu trúc 对 với chủ đề khác
const sortData = [
  {words:['别','玩','手机','了','，','快','去','学习','吧','。'],ans:'别玩手机了，快去学习吧。',audio:'别玩手机了，快去学习吧。'},
  {words:['明天','的','课','你','都','准备','好','了','吗','？'],ans:'明天的课你都准备好了吗？',audio:'明天的课你都准备好了吗？'},
  {words:['哥哥','今天','中午','回来','吃饭','。'],ans:'哥哥今天中午回来吃饭。',audio:'哥哥今天中午回来吃饭。'},
  {words:['手机','在','桌子','上','，','电脑','旁边','。'],ans:'手机在桌子上，电脑旁边。',audio:'手机在桌子上，电脑旁边。'},
  {words:['老师','对','学生','非常','好','。'],ans:'老师对学生非常好。',audio:'老师对学生非常好。'},
  {words:['吃饭','以前','要','洗','手','。'],ans:'吃饭以前要洗手。',audio:'吃饭以前要洗手。'},
];

const matchData = [
  {left:'不要看电视了，',right:'明天上午还有汉语课呢。'},
  {left:'别看报纸了，',right:'医生说你要多休息。'},
  {left:'你怎么买了这么多东西呀？',right:'哥哥今天中午回来吃饭。'},
  {left:'你看见我的手机了吗？',right:'别找了，手机在桌子上呢。'},
  {left:'你看见我的衣服了吗？',right:'那件衣服我帮你洗了。'},
  {left:'看电视',right:'对学汉语有帮助。'},
];

// Trắc nghiệm — không audio; dùng từ Bài 3/5 làm phương án nhiễu để phân biệt
const mcData = [
  {q:'不要看电视＿＿，明天还有课。',opts:['了','吗','呢','的'],ans:0},
  {q:'别看报纸＿＿，医生说你要多休息。',opts:['了','吗','呢','过'],ans:0},
  {q:'看电视对学汉语有＿＿。',opts:['帮助','希望','准备','意思'],ans:0},
  {q:'医生说吃药后两个小时不要喝＿＿。',opts:['茶','咖啡','牛奶','水'],ans:0},
  {q:'妈妈＿＿准备午饭呢。',opts:['正在','已经','非常','还'],ans:0},
  {q:'你看见我的＿＿了吗？白色的。',opts:['手机','手表','报纸','衣服'],ans:0},
  {q:'那件衣服我帮你＿＿了。',opts:['洗','买','穿','找'],ans:0},
  {q:'运动＿＿身体很好。',opts:['对','给','从','离'],ans:0},
  {q:'＿＿今天中午回来吃饭。',opts:['哥哥','姐姐','女儿','丈夫'],ans:0},
  {q:'桌子上有一个＿＿。',opts:['手机','颜色','身体','时间'],ans:0},
];

const speakingData = {
  t1:{
    intro:'Nhấn 🔊 nghe từng câu mẫu, đọc to theo cho tới khi trôi chảy. Chú ý thanh điệu và nhịp câu. Có thể đọc phân vai theo cặp.',
    models:[
      {zh:'不要看电视了，明天上午还有汉语课呢。',py:'Bú yào kàn diànshì le, míngtiān shàngwǔ hái yǒu Hànyǔ kè ne.',vn:'Đừng xem tivi nữa, sáng mai còn có tiết học tiếng Trung đấy.'},
      {zh:'别看报纸了，医生说你要多休息。',py:'Bié kàn bàozhǐ le, yīshēng shuō nǐ yào duō xiūxi.',vn:'Đừng đọc báo nữa, bác sĩ bảo bạn cần nghỉ ngơi nhiều.'},
      {zh:'哥哥今天中午回来吃饭。',py:'Gēge jīntiān zhōngwǔ huílái chīfàn.',vn:'Trưa nay anh trai về ăn cơm.'},
      {zh:'别找了，手机在桌子上呢。',py:'Bié zhǎo le, shǒujī zài zhuōzi shang ne.',vn:'Đừng tìm nữa, điện thoại ở trên bàn kìa.'},
    ],
  },
  t2:{
    intro:'Dùng khung câu cho sẵn, thay thế phần gạch chân bằng từ trong ô gợi ý để tạo câu mới. Nhấn 🔊 để nghe rồi nói to mỗi câu bạn tạo được.',
    drills:[
      {frame:'不要＿＿了，快去休息吧。',frame_py:'Bú yào ___ le, kuài qù xiūxi ba.',vn:'Đừng ＿＿ nữa, mau đi nghỉ đi.',options:['玩手机','看电视','看报纸'],samples:['不要玩手机了，快去休息吧。','不要看电视了，快去休息吧。','不要看报纸了，快去休息吧。']},
      {frame:'别＿＿了，医生说你要多休息。',frame_py:'Bié ___ le, yīshēng shuō nǐ yào duō xiūxi.',vn:'Đừng ＿＿ nữa, bác sĩ bảo bạn cần nghỉ ngơi.',options:['看报纸','玩手机','喝咖啡'],samples:['别看报纸了，医生说你要多休息。','别玩手机了，医生说你要多休息。','别喝咖啡了，医生说你要多休息。']},
      {frame:'＿＿正在准备午饭呢。',frame_py:'___ zhèngzài zhǔnbèi wǔfàn ne.',vn:'＿＿ đang chuẩn bị bữa trưa.',options:['妈妈','姐姐','哥哥'],samples:['妈妈正在准备午饭呢。','姐姐正在准备午饭呢。','哥哥正在准备午饭呢。']},
      {frame:'那件衣服我帮你＿＿了。',frame_py:'Nà jiàn yīfu wǒ bāng nǐ ___ le.',vn:'Chiếc áo đó tớ ＿＿ giúp bạn rồi.',options:['洗','买','找'],samples:['那件衣服我帮你洗了。','那件衣服我帮你买了。','那件衣服我帮你找了。']},
    ],
  },
  t3:{
    intro:'Không nhìn câu mẫu, tự dùng từ đã học để nói theo tình huống. Nói liền 2–3 câu. Ghi âm lại rồi nghe để tự sửa.',
    tasks:[
      {role:'📺 Tình huống 1 — Khuyên người thân nghỉ ngơi',
       guide:'Bạn khuyên người thân đừng xem tivi/đọc báo nữa vì ngày mai có việc quan trọng.',
       structure:['不要＿＿了，','明天还有＿＿呢。'],
       sample:'不要看电视了，明天还有考试呢。',
       sample_vn:'Đừng xem tivi nữa, ngày mai còn có kỳ thi đấy.'},
      {role:'🛒 Tình huống 2 — Kể chuyện đi chợ về',
       guide:'Bạn kể đã mua những gì ở chợ và nấu cho ai ăn.',
       structure:['我买了＿＿、＿＿。','＿＿今天回来吃饭。'],
       sample:'我买了羊肉、鸡蛋。哥哥今天回来吃饭。',
       sample_vn:'Tôi đã mua thịt dê, trứng gà. Anh trai hôm nay về ăn cơm.'},
      {role:'📱 Tình huống 3 — Giúp bạn tìm đồ thất lạc',
       guide:'Bạn của bạn đang tìm một món đồ, hãy nói cho bạn ấy biết nó ở đâu.',
       structure:['你看见我的＿＿了吗？','别找了，在＿＿呢。'],
       sample:'你看见我的手机了吗？别找了，在桌子上呢。',
       sample_vn:'Bạn có thấy điện thoại của tôi không? Đừng tìm nữa, ở trên bàn kìa.'},
    ],
  },
};
