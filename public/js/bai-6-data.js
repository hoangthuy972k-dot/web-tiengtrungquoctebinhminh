// ══════════════════════════════════════════
// DATA — Bài 6: 你怎么不吃了？
// ══════════════════════════════════════════
var vocabData = [
  {n:1,zh:'门',py:'mén',pos:'Danh từ',vn:'cửa',em:'🚪',lesson:1,
   ex_zh:'我在门外看见他的自行车了。',ex_py:'Wǒ zài mén wài kànjiàn tā de zìxíngchē le.',ex_vn:'Tôi nhìn thấy xe đạp của cậu ấy ở ngoài cửa rồi.',
   exList:[
     {zh:'我在门外看见他的自行车了。',py:'Wǒ zài mén wài kànjiàn tā de zìxíngchē le.',vn:'Tôi nhìn thấy xe đạp của cậu ấy ở ngoài cửa rồi.'},
     {zh:'请把门关上。',py:'Qǐng bǎ mén guān shàng.',vn:'Làm ơn đóng cửa lại.'},
     {zh:'他在门口等你。',py:'Tā zài ménkǒu děng nǐ.',vn:'Anh ấy đang đợi bạn ở cửa.'},
   ],
   hanzi:[
     {c:'门',p:'mén',type:'独体字 · Tượng hình',st:3,ord:'丶→𠃌→丨',rad:'门 (môn – tự thành bộ)',mean:'cửa',
      tip:'Hình hai cánh cửa gỗ ghép lại → "CỬA". Là bộ thủ của nhiều chữ liên quan không gian: 问, 间.',
      cf:'们 (men – hậu tố số nhiều, thêm bộ 亻)',w:'门口 / 出门 / 大门'},
   ]},
  {n:2,zh:'外',py:'wài',pos:'Danh từ',vn:'ngoài, bên ngoài',em:'🌤️',lesson:1,
   ex_zh:'门外有一个人。',ex_py:'Mén wài yǒu yí ge rén.',ex_vn:'Ngoài cửa có một người.',
   exList:[
     {zh:'门外有一个人。',py:'Mén wài yǒu yí ge rén.',vn:'Ngoài cửa có một người.'},
     {zh:'外面在下雨。',py:'Wàimian zài xià yǔ.',vn:'Bên ngoài đang mưa.'},
     {zh:'他是外国人。',py:'Tā shì wàiguórén.',vn:'Anh ấy là người nước ngoài.'},
   ],
   hanzi:[
     {c:'外',p:'wài',type:'左右结构 · Trái-phải',st:5,ord:'夕 (tịch) trái → 卜 (bốc) phải',rad:'夕 (tịch – buổi tối)',mean:'ngoài',
      tip:'Đã học ở Bài 5 (外面) — chữ đơn 外 dùng khi ghép trực tiếp: 门外, 外国.',
      cf:'处 (chù)',w:'门外 / 外国 / 外面'},
   ]},
  {n:3,zh:'自行车',py:'zìxíngchē',pos:'Danh từ',vn:'xe đạp',em:'🚲',lesson:1,
   ex_zh:'他的自行车是红色的。',ex_py:'Tā de zìxíngchē shì hóngsè de.',ex_vn:'Xe đạp của anh ấy màu đỏ.',
   exList:[
     {zh:'他的自行车是红色的。',py:'Tā de zìxíngchē shì hóngsè de.',vn:'Xe đạp của anh ấy màu đỏ.'},
     {zh:'我每天骑自行车上班。',py:'Wǒ měitiān qí zìxíngchē shàngbān.',vn:'Mỗi ngày tôi đạp xe đi làm.'},
     {zh:'这辆自行车是新的。',py:'Zhè liàng zìxíngchē shì xīn de.',vn:'Chiếc xe đạp này là mới.'},
   ],
   hanzi:[
     {c:'自',p:'zì',type:'独体字 · Tượng hình',st:6,ord:'丿→𠃌→一→一→一',rad:'自 (tự – tự thành bộ)',mean:'tự, bản thân',
      tip:'Hình cái mũi cách điệu — người xưa chỉ vào mũi khi nói về "BẢN THÂN mình".',
      cf:'目 (mù – "mắt")',w:'自行车 / 自己 / 自由'},
     {c:'行',p:'xíng / háng',type:'左右结构 · Trái-phải',st:6,ord:'彳(xích) trái → 亍 phải',rad:'行 (hành – tự thành bộ)',mean:'đi lại; được',
      tip:'Hình ngã tư đường cách điệu → nghĩa "ĐI LẠI, di chuyển". 自行 = tự di chuyển = xe đạp.',
      cf:'往 (wǎng – "đi tới")',w:'自行车 / 行不行 / 银行'},
   ]},
  {n:4,zh:'羊肉',py:'yángròu',pos:'Danh từ',vn:'thịt dê, thịt cừu',em:'🍖',lesson:2,
   ex_zh:'今天的羊肉很好吃。',ex_py:'Jīntiān de yángròu hěn hǎochī.',ex_vn:'Thịt dê hôm nay ngon thế.',
   exList:[
     {zh:'今天的羊肉很好吃。',py:'Jīntiān de yángròu hěn hǎochī.',vn:'Thịt dê hôm nay ngon thế.'},
     {zh:'我不太喜欢吃羊肉。',py:'Wǒ bú tài xǐhuan chī yángròu.',vn:'Tôi không thích ăn thịt dê lắm.'},
     {zh:'这家饭馆的羊肉很有名。',py:'Zhè jiā fànguǎn de yángròu hěn yǒumíng.',vn:'Thịt dê của nhà hàng này rất nổi tiếng.'},
   ],
   hanzi:[
     {c:'羊',p:'yáng',type:'独体字 · Tượng hình',st:6,ord:'丷→王 (biến thể)',rad:'羊 (dương – tự thành bộ)',mean:'con dê, con cừu',
      tip:'Hình đầu con dê với 2 chiếc sừng cong → "DÊ, CỪU".',
      cf:'洋 (yáng – "đại dương", thêm bộ 氵)',w:'羊肉 / 山羊 / 绵羊'},
     {c:'肉',p:'ròu',type:'独体字 · Chữ đơn',st:6,ord:'冂→人→人→一',rad:'肉 (nhục – tự thành bộ)',mean:'thịt',
      tip:'Hình miếng thịt có vân thớ cách điệu → "THỊT". 羊 + 肉 = thịt dê.',
      cf:'内 (nèi – "bên trong", thiếu nét)',w:'羊肉 / 牛肉 / 肉包'},
   ]},
  {n:5,zh:'好吃',py:'hǎochī',pos:'Tính từ',vn:'ngon',em:'😋',lesson:2,
   ex_zh:'妈妈做的饭很好吃。',ex_py:'Māma zuò de fàn hěn hǎochī.',ex_vn:'Cơm mẹ nấu rất ngon.',
   exList:[
     {zh:'妈妈做的饭很好吃。',py:'Māma zuò de fàn hěn hǎochī.',vn:'Cơm mẹ nấu rất ngon.'},
     {zh:'这个蛋糕非常好吃。',py:'Zhège dàngāo fēicháng hǎochī.',vn:'Cái bánh này ngon cực kỳ.'},
     {zh:'你觉得好吃吗？',py:'Nǐ juéde hǎochī ma?',vn:'Bạn thấy có ngon không?'},
   ],
   hanzi:[
     {c:'好',p:'hǎo',type:'左右结构 · Trái-phải',st:6,ord:'女 (nữ) trái → 子 (tử) phải',rad:'女 (nữ – phụ nữ)',mean:'tốt, ngon',
      tip:'女 (mẹ) + 子 (con) đứng cạnh nhau → hình ảnh viên mãn, TỐT ĐẸP.',
      cf:'如 (rú – "như, giống")',w:'好吃 / 你好 / 好看'},
     {c:'吃',p:'chī',type:'左右结构 · Trái-phải',st:6,ord:'口 (khẩu) trái → 乞 (khất) phải',rad:'口 (khẩu – miệng)',mean:'ăn',
      tip:'Bộ 口 (miệng) → hành động ĂN dùng miệng.',
      cf:'吗 (ma – trợ từ nghi vấn)',w:'好吃 / 吃饭 / 吃药'},
   ]},
  {n:6,zh:'面条',py:'miàntiáo',pos:'Danh từ',vn:'mì, mì sợi',em:'🍜',lesson:2,
   ex_zh:'来一点儿面条吧。',ex_py:'Lái yìdiǎnr miàntiáo ba.',ex_vn:'Cho một ít mì sợi đi.',
   exList:[
     {zh:'来一点儿面条吧。',py:'Lái yìdiǎnr miàntiáo ba.',vn:'Cho một ít mì sợi đi.'},
     {zh:'我喜欢吃牛肉面条。',py:'Wǒ xǐhuan chī niúròu miàntiáo.',vn:'Tôi thích ăn mì thịt bò.'},
     {zh:'这碗面条很好吃。',py:'Zhè wǎn miàntiáo hěn hǎochī.',vn:'Bát mì này rất ngon.'},
   ],
   hanzi:[
     {c:'面',p:'miàn',type:'独体字 · Chữ đơn',st:9,ord:'一→フ→丨→三 ngang giữa',rad:'面 (diện – tự thành bộ)',mean:'mặt; mì (bột mì)',
      tip:'Đã học ở Bài 5 (外面) nghĩa "mặt". Ở đây 面 còn mang nghĩa "bột mì" → 面条 = sợi làm từ bột mì.',
      cf:'画 (huà)',w:'面条 / 面包 / 见面'},
     {c:'条',p:'tiáo',type:'上下结构 · Trên-dưới',st:7,ord:'夂→木',rad:'木 (mộc – cây)',mean:'sợi, dải; lượng từ vật dài',
      tip:'Cành cây dài mảnh 木 → lượng từ cho vật DÀI, SỢI: 面条, 一条鱼.',
      cf:'各 (gè)',w:'面条 / 一条 / 条件'},
   ]},
  {n:7,zh:'打篮球',py:'dǎ lánqiú',pos:'Động từ',vn:'chơi bóng rổ',em:'🏀',lesson:3,
   ex_zh:'昨天你们怎么都没去打篮球？',ex_py:'Zuótiān nǐmen zěnme dōu méi qù dǎ lánqiú?',ex_vn:'Hôm qua sao các bạn đều không đi chơi bóng rổ thế?',
   exList:[
     {zh:'昨天你们怎么都没去打篮球？',py:'Zuótiān nǐmen zěnme dōu méi qù dǎ lánqiú?',vn:'Hôm qua sao các bạn đều không đi chơi bóng rổ thế?'},
     {zh:'他每个星期都打篮球。',py:'Tā měige xīngqī dōu dǎ lánqiú.',vn:'Anh ấy tuần nào cũng chơi bóng rổ.'},
     {zh:'你会打篮球吗？',py:'Nǐ huì dǎ lánqiú ma?',vn:'Bạn biết chơi bóng rổ không?'},
   ],
   hanzi:[
     {c:'打',p:'dǎ',type:'左右结构 · Trái-phải',st:5,ord:'扌(thủ) trái → 丁 (đinh) phải',rad:'扌(thủ – tay)',mean:'đánh, chơi (thể thao)',
      tip:'Bộ 扌(tay) → dùng tay để ĐÁNH, CHƠI (các môn dùng tay như bóng rổ, bóng bàn).',
      cf:'汀 (tīng – "bãi bồi", bộ 氵)',w:'打篮球 / 打电话 / 打球'},
     {c:'篮',p:'lán',type:'上下结构 · Trên-dưới',st:16,ord:'⺮(trúc) trên → 监 (giám) dưới',rad:'⺮(trúc – tre)',mean:'giỏ, rổ',
      tip:'Bộ ⺮(tre) → giỏ đan bằng tre, chỉ cái RỔ (đựng bóng vào rổ).',
      cf:'蓝 (lán – "màu xanh lam", bộ 艹)',w:'篮球 / 打篮球 / 篮子'},
   ]},
  {n:8,zh:'因为',py:'yīnwèi',pos:'Liên từ',vn:'bởi vì, vì',em:'🔗',lesson:3,
   ex_zh:'因为下雨了，所以天气很冷。',ex_py:'Yīnwèi xià yǔ le, suǒyǐ tiānqì hěn lěng.',ex_vn:'Vì trời mưa nên thời tiết rất lạnh.',
   exList:[
     {zh:'因为下雨了，所以天气很冷。',py:'Yīnwèi xià yǔ le, suǒyǐ tiānqì hěn lěng.',vn:'Vì trời mưa nên thời tiết rất lạnh.'},
     {zh:'因为工作忙，我没时间休息。',py:'Yīnwèi gōngzuò máng, wǒ méi shíjiān xiūxi.',vn:'Vì công việc bận nên tôi không có thời gian nghỉ.'},
     {zh:'因为生病，他没来上课。',py:'Yīnwèi shēngbìng, tā méi lái shàngkè.',vn:'Vì bị ốm nên anh ấy không đến lớp.'},
   ],
   hanzi:[
     {c:'因',p:'yīn',type:'全包围 · Bao bọc',st:6,ord:'囗 (vi) bao ngoài → 大 (đại) bên trong',rad:'囗 (vi – vây quanh)',mean:'nguyên nhân, do',
      tip:'囗 (khung bao quanh) + 大 (người) → cái làm nền tảng, căn NGUYÊN cho sự việc.',
      cf:'困 (kùn – "khốn khó", bộ 木 bên trong)',w:'因为 / 原因'},
     {c:'为',p:'wèi / wéi',type:'独体字 · Chữ đơn',st:4,ord:'丶→フ→捺→乀',rad:'丶',mean:'vì, cho (wèi); làm (wéi)',
      tip:'因 (nguyên nhân) + 为 (vì) = VÌ, BỞI VÌ.',
      cf:'办 (bàn – "làm việc")',w:'因为 / 为什么 / 以为'},
   ]},
  {n:9,zh:'所以',py:'suǒyǐ',pos:'Liên từ',vn:'cho nên, nên',em:'➡️',lesson:3,
   ex_zh:'因为生病，所以没上课。',ex_py:'Yīnwèi shēngbìng, suǒyǐ méi shàngkè.',ex_vn:'Vì bị ốm nên không lên lớp.',
   exList:[
     {zh:'因为生病，所以没上课。',py:'Yīnwèi shēngbìng, suǒyǐ méi shàngkè.',vn:'Vì bị ốm nên không lên lớp.'},
     {zh:'今天很累，所以我想早点儿休息。',py:'Jīntiān hěn lèi, suǒyǐ wǒ xiǎng zǎo diǎnr xiūxi.',vn:'Hôm nay mệt quá nên tôi muốn nghỉ sớm một chút.'},
     {zh:'外面下雨，所以我们没去打篮球。',py:'Wàimian xià yǔ, suǒyǐ wǒmen méi qù dǎ lánqiú.',vn:'Bên ngoài trời mưa nên chúng tôi không đi chơi bóng rổ.'},
   ],
   hanzi:[
     {c:'所',p:'suǒ',type:'左右结构 · Trái-phải',st:8,ord:'户 (hộ) trái → 斤 (cân) phải',rad:'户 (hộ – cửa)',mean:'nơi, chỗ',
      tip:'户 (nhà) + 斤 (rìu, công cụ) → nơi làm việc, chốn ở → mở rộng thành từ nối kết QUẢ.',
      cf:'近 (jìn – "gần", bộ 辶)',w:'所以 / 所有 / 场所'},
     {c:'以',p:'yǐ',type:'独体字 · Chữ đơn',st:4,ord:'丶→フ→丿→乀',rad:'人 (nhân – biến thể)',mean:'dùng để, do đó',
      tip:'Đã học ở Bài 5 (可以, 以后) — 所 + 以 = CHO NÊN, do đó.',
      cf:'已 (yǐ)',w:'所以 / 可以 / 以后'},
   ]},
  {n:10,zh:'游泳',py:'yóuyǒng',pos:'Động từ',vn:'bơi lội',em:'🏊',lesson:3,
   ex_zh:'我这个月天天游泳。',ex_py:'Wǒ zhège yuè tiāntiān yóuyǒng.',ex_vn:'Tháng này ngày nào tôi cũng đi bơi.',
   exList:[
     {zh:'我这个月天天游泳。',py:'Wǒ zhège yuè tiāntiān yóuyǒng.',vn:'Tháng này ngày nào tôi cũng đi bơi.'},
     {zh:'你会游泳吗？',py:'Nǐ huì yóuyǒng ma?',vn:'Bạn biết bơi không?'},
     {zh:'夏天我们常常去游泳。',py:'Xiàtiān wǒmen chángcháng qù yóuyǒng.',vn:'Mùa hè chúng tôi thường đi bơi.'},
   ],
   hanzi:[
     {c:'游',p:'yóu',type:'左右结构 · Trái-phải',st:12,ord:'氵(thủy) trái → 斿 (biến thể) phải',rad:'氵(thủy – nước)',mean:'bơi; du ngoạn',
      tip:'Bộ 氵(nước) → hoạt động di chuyển trong nước = BƠI.',
      cf:'旅 (lǚ – "du lịch")',w:'游泳 / 旅游 / 游戏'},
     {c:'泳',p:'yǒng',type:'左右结构 · Trái-phải',st:8,ord:'氵(thủy) trái → 永 (vĩnh) phải',rad:'氵(thủy – nước)',mean:'bơi',
      tip:'Cũng mang bộ 氵(nước) → 游 + 泳 cùng nghĩa BƠI, ghép đôi nhấn mạnh.',
      cf:'永 (yǒng – "vĩnh viễn", thiếu bộ 氵)',w:'游泳 / 泳衣 / 游泳池'},
   ]},
  {n:11,zh:'经常',py:'jīngcháng',pos:'Phó từ',vn:'thường xuyên',em:'🔁',lesson:4,
   ex_zh:'你经常游泳吗？',ex_py:'Nǐ jīngcháng yóuyǒng ma?',ex_vn:'Bạn có thường xuyên đi bơi không?',
   exList:[
     {zh:'你经常游泳吗？',py:'Nǐ jīngcháng yóuyǒng ma?',vn:'Bạn có thường xuyên đi bơi không?'},
     {zh:'我经常去图书馆。',py:'Wǒ jīngcháng qù túshūguǎn.',vn:'Tôi thường xuyên đi thư viện.'},
     {zh:'他经常迟到。',py:'Tā jīngcháng chídào.',vn:'Anh ấy thường xuyên đến muộn.'},
   ],
   hanzi:[
     {c:'经',p:'jīng',type:'左右结构 · Trái-phải',st:8,ord:'纟(mịch) trái → 巛+工 phải',rad:'纟(mịch – tơ)',mean:'trải qua; kinh',
      tip:'Đã học ở Bài 4 (已经) — 经 + 常 = trải qua một cách thường xuyên = THƯỜNG XUYÊN.',
      cf:'径 (jìng)',w:'经常 / 已经 / 经理'},
     {c:'常',p:'cháng',type:'上下结构 · Trên-dưới',st:11,ord:'⺌→冖→巾',rad:'巾 (cân – khăn)',mean:'thường xuyên',
      tip:'Đã học ở Bài 4 (非常). Đứng riêng/ghép với 经 đều mang nghĩa THƯỜNG XUYÊN.',
      cf:'尝 (cháng)',w:'经常 / 非常 / 常常'},
   ]},
  {n:12,zh:'公斤',py:'gōngjīn',pos:'Lượng từ',vn:'ki-lô-gam',em:'⚖️',lesson:4,
   ex_zh:'我现在70公斤了。',ex_py:'Wǒ xiànzài qīshí gōngjīn le.',ex_vn:'Bây giờ tôi được 70 kg rồi đấy.',
   exList:[
     {zh:'我现在70公斤了。',py:'Wǒ xiànzài qīshí gōngjīn le.',vn:'Bây giờ tôi được 70 kg rồi đấy.'},
     {zh:'这条鱼有两公斤。',py:'Zhè tiáo yú yǒu liǎng gōngjīn.',vn:'Con cá này nặng hai cân.'},
     {zh:'你的体重是多少公斤？',py:'Nǐ de tǐzhòng shì duōshao gōngjīn?',vn:'Cân nặng của bạn là bao nhiêu kg?'},
   ],
   hanzi:[
     {c:'公',p:'gōng',type:'上下结构 · Trên-dưới',st:4,ord:'八 (bát) trên → 厶 (khư) dưới',rad:'八 (bát)',mean:'công, chung',
      tip:'八 (chia ra) trên 厶 (riêng tư) → chia cái riêng thành cái CHUNG. 公斤 là đơn vị đo chung, quốc tế.',
      cf:'私 (sī)',w:'公斤 / 公司 / 公园'},
     {c:'斤',p:'jīn',type:'独体字 · Chữ đơn',st:4,ord:'丿→一→丨→一',rad:'斤 (cân – tự thành bộ)',mean:'cân, rìu',
      tip:'Hình chiếc rìu cách điệu, xưa cũng là đơn vị cân trọng lượng → dùng đo KHỐI LƯỢNG.',
      cf:'欣 (xīn – "vui mừng")',w:'公斤 / 斤两'},
   ]},
  {n:13,zh:'姐姐',py:'jiějie',pos:'Danh từ',vn:'chị gái',em:'👩',lesson:4,
   ex_zh:'他去北京看他姐姐。',ex_py:'Tā qù Běijīng kàn tā jiějie.',ex_vn:'Anh ấy đi Bắc Kinh thăm chị gái.',
   exList:[
     {zh:'他去北京看他姐姐。',py:'Tā qù Běijīng kàn tā jiějie.',vn:'Anh ấy đi Bắc Kinh thăm chị gái.'},
     {zh:'我姐姐是医生。',py:'Wǒ jiějie shì yīshēng.',vn:'Chị gái tôi là bác sĩ.'},
     {zh:'姐姐比我大三岁。',py:'Jiějie bǐ wǒ dà sān suì.',vn:'Chị gái lớn hơn tôi ba tuổi.'},
   ],
   hanzi:[
     {c:'姐',p:'jiě',type:'左右结构 · Trái-phải',st:8,ord:'女 (nữ) trái → 且 (thả) phải',rad:'女 (nữ – phụ nữ)',mean:'chị gái',
      tip:'Bộ 女 (nữ) → chỉ người con gái lớn hơn trong nhà = CHỊ GÁI. Lặp 姐姐 để xưng hô thân mật.',
      cf:'组 (zǔ – "tổ, nhóm", bộ 纟)',w:'姐姐 / 姐妹 / 大姐'},
   ]},
];

const wuData = [
  {img:'🚲',label:'自行车',py:'zìxíngchē',letter:'A'},
  {img:'🍜',label:'面条',py:'miàntiáo',letter:'B'},
  {img:'🏀',label:'打篮球',py:'dǎ lánqiú',letter:'C'},
  {img:'🏊',label:'游泳',py:'yóuyǒng',letter:'D'},
  {img:'⚖️',label:'公斤',py:'gōngjīn',letter:'E'},
  {img:'🚪',label:'门',py:'mén',letter:'F'},
];

var dialogData = [
  {scene:'在学校 · Ở trường học',
   lines:[
     {sp:0,zh:'你知道小王今天什么时候来学校吗？',py:'Nǐ zhīdào Xiǎo Wáng jīntiān shénme shíhou lái xuéxiào ma?',vn:'Bạn có biết hôm nay khi nào Tiểu Vương đến trường không?'},
     {sp:1,zh:'他已经来了。',py:'Tā yǐjīng lái le.',vn:'Cậu ấy đến rồi đấy.'},
     {sp:0,zh:'你怎么知道他来了？',py:'Nǐ zěnme zhīdào tā lái le?',vn:'Sao bạn biết cậu ấy đến rồi?'},
     {sp:1,zh:'我在门外看见他的自行车了。',py:'Wǒ zài mén wài kànjiàn tā de zìxíngchē le.',vn:'Tôi nhìn thấy xe đạp của cậu ấy ở ngoài cửa rồi.'},
   ]},
  {scene:'在饭馆 · Trong nhà hàng',
   lines:[
     {sp:0,zh:'今天的羊肉很好吃，你怎么不吃了？',py:'Jīntiān de yángròu hěn hǎochī, nǐ zěnme bù chī le?',vn:'Thịt dê hôm nay ngon thế, sao bạn không ăn nữa?'},
     {sp:1,zh:'这个星期天天都吃羊肉，不想吃了。',py:'Zhège xīngqī tiāntiān dōu chī yángròu, bù xiǎng chī le.',vn:'Tuần này ngày nào cũng ăn thịt dê rồi, tôi không muốn ăn nữa.'},
     {sp:0,zh:'那你还想吃什么？',py:'Nà nǐ hái xiǎng chī shénme?',vn:'Thế bạn còn muốn ăn món gì khác không?'},
     {sp:1,zh:'来一点儿面条吧。',py:'Lái yìdiǎnr miàntiáo ba.',vn:'Cho một ít mì sợi đi.'},
   ]},
  {scene:'在健身房 · Trong phòng tập thể hình',
   lines:[
     {sp:0,zh:'昨天你们怎么都没去打篮球？',py:'Zuótiān nǐmen zěnme dōu méi qù dǎ lánqiú?',vn:'Hôm qua sao các bạn đều không đi chơi bóng rổ thế?'},
     {sp:1,zh:'因为昨天下雨，所以我们都没去。我去游泳了。',py:'Yīnwèi zuótiān xià yǔ, suǒyǐ wǒmen dōu méi qù. Wǒ qù yóuyǒng le.',vn:'Tại vì hôm qua trời mưa nên chúng tôi đều không đi. Tôi thì đi bơi rồi.'},
     {sp:0,zh:'你经常游泳吗？',py:'Nǐ jīngcháng yóuyǒng ma?',vn:'Bạn có thường xuyên đi bơi không?'},
     {sp:1,zh:'这个月我天天游泳，我现在70公斤了。',py:'Zhège yuè wǒ tiāntiān yóuyǒng, wǒ xiànzài qīshí gōngjīn le.',vn:'Tháng này ngày nào tôi cũng đi bơi, bây giờ tôi được 70 kg rồi đấy.'},
   ]},
  {scene:'在办公室 · Trong văn phòng',
   lines:[
     {sp:0,zh:'这两天怎么没看见小张？',py:'Zhè liǎng tiān zěnme méi kànjiàn Xiǎo Zhāng?',vn:'Hai ngày nay sao không thấy Tiểu Trương nhỉ?'},
     {sp:1,zh:'他去北京了。',py:'Tā qù Běijīng le.',vn:'Cậu ấy đi Bắc Kinh rồi.'},
     {sp:0,zh:'去北京了？是去旅游吗？',py:'Qù Běijīng le? Shì qù lǚyóu ma?',vn:'Đi Bắc Kinh á? Có phải đi du lịch không?'},
     {sp:1,zh:'不是，听说是去看他姐姐。',py:'Bú shì, tīngshuō shì qù kàn tā jiějie.',vn:'Không phải, nghe nói là đi thăm chị gái cậu ấy.'},
   ]},
];

// ══════════════════════════════════════════
// PHẦN 1 · GHÉP TỪ (Collocation)
// ══════════════════════════════════════════
var matchData = [
  {left:'好吃',right:'面条'},
  {left:'打',right:'篮球'},
  {left:'经常',right:'游泳'},
  {left:'因为',right:'所以'},
  {left:'骑',right:'自行车'},
  {left:'门',right:'外'},
];

// ══════════════════════════════════════════
// PHẦN 2 · NGHE — tình huống MỚI: hỏi lý do vắng mặt, gọi món khác ở quán ăn.
// Ôn lại 生病/休息 (Bài 2), 觉得/运动 (Bài 1), 对 (Bài 5).
// ══════════════════════════════════════════
var listenData = [
  {audio:'小李这几天怎么没来上课？因为他生病了，所以在家休息。',
   questions:[
     {q:'小李为什么没来上课？',opts:['因为他生病了','因为他去旅游了','因为他很忙','不知道'],ans:0},
     {q:'他现在在做什么？',opts:['在家休息','在打篮球','在游泳','在吃面条'],ans:0},
   ]},
  {audio:'这个饭馆的面条很好吃，可是我今天不想吃面条，想吃点儿别的。',
   questions:[
     {q:'这个饭馆的面条怎么样？',opts:['很好吃','不好吃','很贵','没有面条'],ans:0},
     {q:'他今天想吃什么？',opts:['别的','面条','羊肉','什么都不想吃'],ans:0},
   ]},
  {audio:'他经常打篮球，也经常游泳，因为他觉得运动对身体很好。',
   questions:[
     {q:'他为什么经常运动？',opts:['因为运动对身体很好','因为很忙','因为要减肥','不知道'],ans:0},
   ]},
];

// ══════════════════════════════════════════
// PHẦN 3a · ĐIỀN TỪ — hội thoại MỚI: hỏi lý do vắng tập, gọi món khác
// ══════════════════════════════════════════
var fillData = [
  {pre:'你',blank:'怎么',post:'没去打篮球？',hint:'(sao, tại sao)',ans:'怎么',exp:'怎么 đứng sau chủ ngữ, trước động từ, dùng hỏi lý do.'},
  {pre:'',blank:'因为',post:'昨天下雨，',hint:'(vì)',ans:'因为'},
  {pre:'',blank:'所以',post:'我没去。',hint:'(nên, cho nên)',ans:'所以',exp:'因为……，所以…… luôn đi thành cặp, không đảo ngược.'},
  {pre:'你',blank:'经常',post:'游泳吗？',hint:'(thường xuyên)',ans:'经常'},
  {pre:'这个饭馆的面条很',blank:'好吃',post:'。',hint:'(ngon)',ans:'好吃'},
  {pre:'你',blank:'怎么',post:'不吃羊肉了？',hint:'(sao — ôn lại)',ans:'怎么'},
  {pre:'我这个星期天天都吃羊肉，',blank:'所以',post:'不想吃了。',hint:'(nên)',ans:'所以'},
  {pre:'我姐姐',blank:'经常',post:'骑自行车上班。',hint:'(thường xuyên)',ans:'经常'},
];

// ══════════════════════════════════════════
// PHẦN 3b · SẮP XẾP
// ══════════════════════════════════════════
var sortData = [
  {words:['你','怎么','没','去','打篮球','？'],ans:'你怎么没去打篮球？',audio:'你怎么没去打篮球？'},
  {words:['因为','昨天','下雨','，','所以','我','没','去','。'],ans:'因为昨天下雨，所以我没去。',audio:'因为昨天下雨，所以我没去。'},
  {words:['你','经常','游泳','吗','？'],ans:'你经常游泳吗？',audio:'你经常游泳吗？'},
  {words:['这个','饭馆','的','面条','很','好吃','。'],ans:'这个饭馆的面条很好吃。',audio:'这个饭馆的面条很好吃。'},
  {words:['我','姐姐','经常','骑','自行车','上班','。'],ans:'我姐姐经常骑自行车上班。',audio:'我姐姐经常骑自行车上班。'},
  {words:['我','天天','都','吃','羊肉','，','不想','吃','了','。'],ans:'我天天都吃羊肉，不想吃了。',audio:'我天天都吃羊肉，不想吃了。'},
];

// ══════════════════════════════════════════
// PHẦN 3c · SỬA LỖI SAI
// ══════════════════════════════════════════
var errorFixData = [
  {wrong:'没去打篮球你怎么？',
   opts:['你怎么没去打篮球？','怎么你没去打篮球？','你没去怎么打篮球？','你没打篮球怎么去？'],ans:0,
   exp:'怎么 đứng SAU chủ ngữ, TRƯỚC động từ, dùng để hỏi lý do (= tại sao).'},
  {wrong:'昨天下雨，我没去所以因为。',
   opts:['因为昨天下雨，所以我没去。','所以昨天下雨，因为我没去。','昨天下雨因为，所以我没去。','因为昨天下雨我没去所以。'],ans:0,
   exp:'因为 đứng đầu vế NGUYÊN NHÂN, 所以 đứng đầu vế KẾT QUẢ — không đảo ngược vị trí hai từ này.'},
  {wrong:'我游泳经常。',
   opts:['我经常游泳。','经常我游泳。','我游泳常经。','游泳经常我。'],ans:0,
   exp:'经常 (phó từ tần suất) đứng TRƯỚC động từ, không đặt sau như tiếng Việt "tôi bơi thường xuyên".'},
  {wrong:'我每天天都吃羊肉。',
   opts:['我天天都吃羊肉。','我每天天都吃羊肉。','我天每天都吃羊肉。','我都天天吃羊肉每。'],ans:0,
   exp:'天天 (lặp lại danh từ thời gian) đã mang nghĩa "mỗi ngày", KHÔNG cần thêm 每 phía trước nữa.'},
  {wrong:'你怎么样没去打篮球？',
   opts:['你怎么没去打篮球？','你怎么样没去打篮球？','你没去怎么样打篮球？','你没怎么样去打篮球？'],ans:0,
   exp:'怎么 hỏi LÝ DO (tại sao), còn 怎么样 hỏi Ý KIẾN/TÌNH TRẠNG (thế nào) — hai từ khác nghĩa, học sinh Việt hay nhầm lẫn.'},
];

// ══════════════════════════════════════════
// PHẦN 4 · LUYỆN NÓI 3 TẦNG (tầng 3 có ghi âm + chấm điểm AI)
// ══════════════════════════════════════════
var speakingData = {
  intro:'Nhấn 🔊 để nghe câu hỏi, sau đó tự ghi âm câu trả lời của bạn. Ghi âm xong mới nên xem gợi ý/câu trả lời mẫu để đối chiếu.',
  questions:[
    {q_zh:'你怎么没去打篮球？',
     q_vn:'Sao bạn không đi chơi bóng rổ vậy?',
     hint:'因为……，所以我没去。',
     sample:'因为昨天下雨，所以我没去。',
     sample_vn:'Vì hôm qua trời mưa nên tôi không đi.',
     note:'怎么 ở đây mang nghĩa hỏi LÝ DO, gần giống 为什么 (đã học ở Bài 1) nhưng ngữ khí thân mật, ngạc nhiên hơn.'},
    {q_zh:'你今天还想吃羊肉吗？',
     q_vn:'Hôm nay bạn còn muốn ăn thịt dê nữa không?',
     hint:'这个星期天天都吃＿＿，不想吃了。',
     sample:'这个星期天天都吃羊肉，不想吃了，来一点儿面条吧。',
     sample_vn:'Tuần này ngày nào cũng ăn thịt dê rồi, không muốn ăn nữa. Cho một ít mì đi.',
     note:'天天 (lặp lại danh từ thời gian) = mỗi ngày đều..., nhấn mạnh tính lặp lại nhiều hơn 每天.'},
    {q_zh:'你姐姐平时喜欢做什么运动？',
     q_vn:'Chị bạn thường thích chơi môn thể thao gì?',
     hint:'我姐姐经常＿＿，也经常＿＿。',
     sample:'我姐姐经常游泳，也经常打篮球，她觉得运动对身体很好。',
     sample_vn:'Chị tôi thường xuyên bơi, cũng thường xuyên chơi bóng rổ. Chị ấy thấy vận động rất tốt cho sức khỏe.',
     note:'对……好/不好 (ôn Bài 5) dùng để nói điều gì đó có lợi hay có hại cho một đối tượng.'},
  ],
};
