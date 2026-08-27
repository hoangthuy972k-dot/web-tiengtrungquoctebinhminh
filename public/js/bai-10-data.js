// ══════════════════════════════════════════
// DATA — Bài 10: 别找了，手机在桌子上呢
// ══════════════════════════════════════════
var vocabData = [
  {n:1,zh:'课',py:'kè',pos:'Danh từ',vn:'bài học, tiết học, môn học',em:'📖',lesson:1,
   ex_zh:'我们下课了。',ex_py:'Wǒmen xiàkè le.',ex_vn:'Chúng tôi tan học rồi.',
   exList:[
     {zh:'我们下课了。',py:'Wǒmen xiàkè le.',vn:'Chúng tôi tan học rồi. (下课 — tan học)'},
     {zh:'明天的课是汉语课。',py:'Míngtiān de kè shì Hànyǔ kè.',vn:'Tiết học ngày mai là tiết tiếng Trung. (汉语课 — tiết tiếng Trung)'},
     {zh:'我上午有汉语课，下午有英语课。',py:'Wǒ shàngwǔ yǒu Hànyǔ kè, xiàwǔ yǒu Yīngyǔ kè.',vn:'Sáng tôi có tiết tiếng Trung, chiều có tiết tiếng Anh. (英语课 — tiết tiếng Anh)'},
   ],
   hanzi:[
     {c:'课',p:'kè',type:'左右结构 · Trái-phải',st:10,ord:'讠(ngôn) trái → 果 (quả) phải',rad:'讠(ngôn – lời nói)',mean:'bài học, môn học',
      tip:'Bộ 讠(lời nói/giảng dạy) + 果 (kết quả) → lời giảng mang lại KẾT QUẢ học tập = BÀI HỌC.',
      cf:'棵 (kē – lượng từ cây)',w:'汉语课 / 上课 / 下课'},
   ]},
  {n:2,zh:'帮助',py:'bāngzhù',pos:'Động từ / Danh từ',vn:'giúp đỡ, có ích',em:'🤝',lesson:1,
   ex_zh:'他常常帮助同学。',ex_py:'Tā chángcháng bāngzhù tóngxué.',ex_vn:'Anh ấy thường xuyên giúp đỡ bạn học.',
   exList:[
     {zh:'他常常帮助同学。',py:'Tā chángcháng bāngzhù tóngxué.',vn:'Anh ấy thường xuyên giúp đỡ bạn học. (帮助 + người)'},
     {zh:'你能帮助一下大卫吗？',py:'Nǐ néng bāngzhù yíxià Dàwèi ma?',vn:'Bạn có thể giúp David một chút được không? (khẩu ngữ: 帮 + người, ví dụ 帮我一下)'},
     {zh:'看书对学习有帮助。',py:'Kàn shū duì xuéxí yǒu bāngzhù.',vn:'Đọc sách có ích cho việc học. (cấu trúc: 对…有帮助)'},
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
   ex_zh:'别看电视了。',ex_py:'Bié kàn diànshì le.',ex_vn:'Đừng xem tivi nữa.',
   exList:[
     {zh:'别看电视了。',py:'Bié kàn diànshì le.',vn:'Đừng xem tivi nữa. (别 + Động từ + 了)'},
     {zh:'别看报纸了，医生说你要多休息。',py:'Bié kàn bàozhǐ le, yīshēng shuō nǐ yào duō xiūxi.',vn:'Đừng đọc báo nữa, bác sĩ bảo bạn cần nghỉ ngơi nhiều.'},
     {zh:'别着急，我们还有时间。',py:'Bié zháojí, wǒmen hái yǒu shíjiān.',vn:'Đừng vội, chúng ta vẫn còn thời gian.'},
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
   ex_zh:'我今天早上吃了一个鸡蛋。',ex_py:'Wǒ jīntiān zǎoshang chīle yí ge jīdàn.',ex_vn:'Sáng nay tôi đã ăn một quả trứng gà.',
   exList:[
     {zh:'我今天早上吃了一个鸡蛋。',py:'Wǒ jīntiān zǎoshang chīle yí ge jīdàn.',vn:'Sáng nay tôi đã ăn một quả trứng gà.'},
     {zh:'你会做鸡蛋汤吗？',py:'Nǐ huì zuò jīdàn tāng ma?',vn:'Bạn có biết làm canh trứng không? (鸡蛋汤 — canh trứng)'},
     {zh:'我去超市买了一些鸡蛋。',py:'Wǒ qù chāoshì mǎile yìxiē jīdàn.',vn:'Tôi đã đi siêu thị mua một ít trứng gà.'},
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
   ex_zh:'我买了一点儿西瓜。',ex_py:'Wǒ mǎile yìdiǎnr xīguā.',ex_vn:'Tôi đã mua một ít dưa hấu.',
   exList:[
     {zh:'我买了一点儿西瓜。',py:'Wǒ mǎile yìdiǎnr xīguā.',vn:'Tôi đã mua một ít dưa hấu. (买西瓜 — mua dưa hấu)'},
     {zh:'西瓜很甜。',py:'Xīguā hěn tián.',vn:'Dưa hấu rất ngọt.'},
     {zh:'西瓜多少钱？',py:'Xīguā duōshao qián?',vn:'Dưa hấu bao nhiêu tiền?'},
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
     {zh:'他们正在教室里上课。',py:'Tāmen zhèngzài jiàoshì lǐ shàngkè.',vn:'Họ đang học trong lớp học.'},
     {zh:'正在下大雨，我不能出去。',py:'Zhèngzài xià dàyǔ, wǒ bùnéng chūqù.',vn:'Trời đang mưa to, tôi không thể ra ngoài. (lưu ý: không dùng 正在 với động từ trạng thái như 知道/认识/喜欢/爱)'},
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
     {zh:'我的手机没电了。',py:'Wǒ de shǒujī méi diàn le.',vn:'Điện thoại của tôi hết pin rồi. (没电了 — hết pin rồi)'},
     {zh:'我的手机快没电了，我要去充电。',py:'Wǒ de shǒujī kuài méi diàn le, wǒ yào qù chōngdiàn.',vn:'Điện thoại của tôi sắp hết pin rồi, tôi phải đi sạc. (充电 — sạc pin)'},
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
     {zh:'我每天都洗衣服。',py:'Wǒ měitiān dōu xǐ yīfu.',vn:'Ngày nào tôi cũng giặt quần áo. (洗衣服 — giặt quần áo)'},
     {zh:'你能帮我洗一下这些碗吗？',py:'Nǐ néng bāng wǒ xǐ yíxià zhèxiē wǎn ma?',vn:'Bạn có thể giúp tôi rửa mấy cái bát này một chút không?'},
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

var dialogData = [
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

// ══════════════════════════════════════════
// PHẦN 1 · GHÉP TỪ (Collocation)
// ══════════════════════════════════════════
var matchData = [
  {left:'上',right:'课'},
  {left:'玩',right:'手机'},
  {left:'洗',right:'手'},
  {left:'别',right:'担心'},
  {left:'需要',right:'帮助'},
  {left:'正在',right:'练习'},
];

// ══════════════════════════════════════════
// PHẦN 2 · NGHE — tình huống MỚI: ở phòng tập gym.
// Ôn lại 有点儿(Bài 5), 已经(Bài 4/9), 一下(Bài 3), 完(Bài 9).
// ══════════════════════════════════════════
var listenData = [
  {audio:'我正在健身房锻炼身体，运动对身体很好，可是今天有点儿累。',
   questions:[
     {q:'他在哪儿？',opts:['健身房','医院','学校','家里'],ans:0},
     {q:'运动对身体怎么样？',opts:['很好','不好','没有帮助','不知道'],ans:0},
   ]},
  {audio:'教练说：别练太多了，你已经练了一个小时，休息一下吧。',
   questions:[
     {q:'教练让他做什么？',opts:['休息一下','继续练','马上回家','再练一个小时'],ans:0},
     {q:'他已经练了多久？',opts:['一个小时','两个小时','半个小时','不知道'],ans:0},
   ]},
  {audio:'锻炼完以后，哥哥请我吃鸡蛋和西瓜，他说这样对身体有帮助。',
   questions:[
     {q:'锻炼完以后哥哥请他吃什么？',opts:['鸡蛋和西瓜','面条和米饭','咖啡和茶','没吃什么'],ans:0},
   ]},
];

// ══════════════════════════════════════════
// PHẦN 3a · ĐIỀN TỪ — hội thoại MỚI: ở phòng tập gym
// ══════════════════════════════════════════
var fillData = [
  {pre:'你怎么还在这儿运动？别练',blank:'了',post:'，已经很晚了。',hint:'(đừng... nữa)',ans:'了',exp:'别/不要 + Động từ + 了 = đừng làm... nữa.'},
  {pre:'我知道，可是运动',blank:'对',post:'身体很好，我想多练一下。',hint:'(đối với)',ans:'对',exp:'对 đứng sau chủ ngữ, trước đối tượng chịu tác động: 运动对身体好.'},
  {pre:'你今天上的是第几节健身',blank:'课',post:'？',hint:'(tiết học, lớp học)',ans:'课'},
  {pre:'这是我',blank:'正在',post:'上的第三节课。',hint:'(đang)',ans:'正在'},
  {pre:'练完以后别忘了',blank:'洗',post:'手再吃东西。',hint:'(rửa)',ans:'洗'},
  {pre:'对了，你看见我的',blank:'手机',post:'了吗？我找不到了。',hint:'(điện thoại)',ans:'手机'},
  {pre:'别找了，在你包里呢。运动对身体真有',blank:'帮助',post:'。',hint:'(giúp ích)',ans:'帮助'},
  {pre:'',blank:'哥哥',post:'也常常和我一起来锻炼。',hint:'(anh trai)',ans:'哥哥'},
];

// ══════════════════════════════════════════
// PHẦN 3b · SẮP XẾP
// ══════════════════════════════════════════
var sortData = [
  {words:['别','玩','手机','了','，','快','去','锻炼','吧','。'],ans:'别玩手机了，快去锻炼吧。',audio:'别玩手机了，快去锻炼吧。'},
  {words:['运动','对','身体','非常','好','。'],ans:'运动对身体非常好。',audio:'运动对身体非常好。'},
  {words:['我','正在','上','健身','课','呢','。'],ans:'我正在上健身课呢。',audio:'我正在上健身课呢。'},
  {words:['锻炼','完','以后','要','洗','手','。'],ans:'锻炼完以后要洗手。',audio:'锻炼完以后要洗手。'},
  {words:['哥哥','常常','帮助','我','练习','。'],ans:'哥哥常常帮助我练习。',audio:'哥哥常常帮助我练习。'},
  {words:['教练','已经','练','了','一个','小时','了','。'],ans:'教练已经练了一个小时了。',audio:'教练已经练了一个小时了。'},
];

// ══════════════════════════════════════════
// PHẦN 3c · SỬA LỖI SAI
// ══════════════════════════════════════════
var errorFixData = [
  {wrong:'不要玩手机，了。',
   opts:['不要玩手机了。','不要玩手机，了。','不要了玩手机。','了不要玩手机。'],ans:0,
   exp:'了 gắn liền ngay sau cụm động từ+tân ngữ, không tách bằng dấu phẩy và không đứng riêng.'},
  {wrong:'别了玩手机。',
   opts:['别玩手机了。','别了玩手机。','别玩了手机。','玩别手机了。'],ans:0,
   exp:'Cấu trúc là 别 + Động từ + Tân ngữ + 了, 了 luôn đứng ở CUỐI câu/cụm, không chen vào giữa 别 và động từ.'},
  {wrong:'运动身体对很好。',
   opts:['运动对身体很好。','运动身体对很好。','对运动身体很好。','运动很好对身体。'],ans:0,
   exp:'对 đứng NGAY SAU chủ ngữ và NGAY TRƯỚC đối tượng chịu ảnh hưởng: Chủ ngữ + 对 + Đối tượng + Tính từ/Động từ.'},
  {wrong:'对运动身体很好。',
   opts:['运动对身体很好。','对运动身体很好。','身体对运动很好。','很好运动对身体。'],ans:0,
   exp:'对 không đứng ở đầu câu thay cho chủ ngữ — chủ ngữ (运动) phải đứng trước 对.'},
  {wrong:'我练已经了一个小时。',
   opts:['我已经练了一个小时。','我练已经了一个小时。','我了已经练一个小时。','已经我练了一个小时。'],ans:0,
   exp:'已经 đứng TRƯỚC động từ (đã học ở Bài 4/9: 已经 + Động từ + 了), không chen 了 vào giữa 已经 và động từ.'},
];

// ══════════════════════════════════════════
// PHẦN 4 · LUYỆN NÓI 3 TẦNG (tầng 3 có ghi âm + chấm điểm AI)
// ══════════════════════════════════════════
var speakingData = {
  intro:'Nhấn 🔊 để nghe câu hỏi, sau đó tự ghi âm câu trả lời của bạn. Ghi âm xong mới nên xem gợi ý/câu trả lời mẫu để đối chiếu.',
  questions:[
    {q_zh:'你的朋友在健身房一直玩手机，不去锻炼，你会对他说什么？',
     q_vn:'Bạn của bạn cứ chơi điện thoại ở phòng gym mà không chịu tập, bạn sẽ nói gì với anh ấy?',
     hint:'别玩手机了，快去＿＿吧。',
     sample:'别玩手机了，快去锻炼吧，运动对身体很好。',
     sample_vn:'Đừng chơi điện thoại nữa, mau đi tập đi, vận động rất tốt cho sức khỏe.',
     note:'别/不要 + Động từ + 了 dùng để khuyên ngăn một cách nhẹ nhàng.'},
    {q_zh:'你明天有空吗？',
     q_vn:'Ngày mai bạn có rảnh không?',
     hint:'有空，我们一起去＿＿吧！',
     sample:'有空，我们一起去健身房锻炼吧！',
     sample_vn:'Có rảnh, chúng ta cùng đi phòng gym tập luyện đi!',
     note:'Ôn lại cấu trúc rủ rê ……好吗？ đã học ở Bài 8.'},
    {q_zh:'你看见我的手机了吗？',
     q_vn:'Bạn có thấy điện thoại của tôi không?',
     hint:'别找了，在＿＿呢。',
     sample:'别找了，在你包里呢。',
     sample_vn:'Đừng tìm nữa, ở trong túi của bạn kìa.',
     note:'别 + Động từ + 了 cũng dùng để trấn an, bảo người khác không cần làm gì nữa.'},
  ],
};

// ══════════════════════════════════════════
// LUYỆN DỊCH (Việt→Trung) — cau dich THAT tu giao an PPT bai 10
// (phan "cau dich Viet-Trung" giao vien da soan de hoc sinh ung dung
// cach dung tu qua collocation/cau truc di kem)
// ══════════════════════════════════════════
var translateData = [
  {vi:'Sáng nay tôi có tiết tiếng Trung, chiều nay có tiết tiếng Anh.', zh:'我上午有汉语课，下午有英语课。', py:'Wǒ shàngwǔ yǒu Hànyǔ kè, xiàwǔ yǒu Yīngyǔ kè.'},
  {vi:'Học tiếng Trung có ích cho công việc.', zh:'学中文对工作有帮助。', py:'Xué Zhōngwén duì gōngzuò yǒu bāngzhù.'},
  {vi:'Trời đã muộn rồi, đừng xem TV nữa, đi ngủ đi.', zh:'天很晚了，别看电视了，去睡觉吧。', py:'Tiān hěn wǎn le, bié kàn diànshì le, qù shuìjiào ba.'},
  {vi:'Mẹ bảo tôi đi mua trứng.', zh:'妈妈让我去买鸡蛋。', py:'Māma ràng wǒ qù mǎi jīdàn.'},
  {vi:'Tôi muốn mua một chiếc điện thoại mới, nhưng tôi không có nhiều tiền.', zh:'我想买一个新手机，但是我没有很多钱。', py:'Wǒ xiǎng mǎi yí ge xīn shǒujī, dànshì wǒ méiyǒu hěn duō qián.'},
  {vi:'Bạn có thể giúp tôi rửa mấy cái bát này một chút không?', zh:'你能帮我洗一下这些碗吗？', py:'Nǐ néng bāng wǒ xǐ yíxià zhèxiē wǎn ma?'},
];

// ══════════════════════════════════════════
// LUYỆN DỊCH (chiều Trung→Việt) — cau dich THAT khac, cung tu giao an
// PPT bai 10, khong trung voi chieu Viet->Trung o tren
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:'Tôi rất hứng thú với tiếng Trung.', zh:'我对汉语很感兴趣。', py:'Wǒ duì Hànyǔ hěn gǎn xìngqù.'},
  {vi:'Họ đang học trong lớp học.', zh:'他们正在教室里上课。', py:'Tāmen zhèngzài jiàoshì lǐ shàngkè.'},
  {vi:'Bạn ăn nhiều rồi, đừng ăn nữa.', zh:'你已经吃很多了，别吃了。', py:'Nǐ yǐjīng chī hěn duō le, bié chī le.'},
  {vi:'Đi ngủ sớm dậy sớm có lợi cho sức khỏe.', zh:'早睡早起对身体有帮助。', py:'Zǎo shuì zǎo qǐ duì shēntǐ yǒu bāngzhù.'},
  {vi:'Trong giờ học, bạn đừng chơi điện thoại.', zh:'你在课上不要玩手机。', py:'Nǐ zài kè shàng bú yào wán shǒujī.'},
  {vi:'Điện thoại của tôi sắp hết pin rồi, tôi phải đi sạc.', zh:'我的手机快没电了，我要去充电。', py:'Wǒ de shǒujī kuài méi diàn le, wǒ yào qù chōngdiàn.'},
];
