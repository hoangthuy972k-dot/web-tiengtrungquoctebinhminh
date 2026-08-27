// ══════════════════════════════════════════
// DATA — Bài 1: 九月去北京旅游最好
// ══════════════════════════════════════════
var vocabData = [
  {n:1,zh:'旅游',py:'lǚyóu',pos:'Động từ / Danh từ',vn:'du lịch, đi chơi',em:'🧳',lesson:1,
   ex_zh:'我要去北京旅游。',ex_py:'Wǒ yào qù Běijīng lǚyóu.',ex_vn:'Tôi muốn đi Bắc Kinh du lịch.',
   exList:[
     {zh:'我要去北京旅游。',py:'Wǒ yào qù Běijīng lǚyóu.',vn:'Tôi muốn đi Bắc Kinh du lịch.'},
     {zh:'九月去北京旅游最好。',py:'Jiǔyuè qù Běijīng lǚyóu zuì hǎo.',vn:'Đi Bắc Kinh du lịch vào tháng 9 là tốt nhất.'},
     {zh:'我很喜欢旅游。',py:'Wǒ hěn xǐhuan lǚyóu.',vn:'Tôi rất thích đi du lịch.'},
   ],
   hanzi:[
     {c:'旅',p:'lǚ',type:'左右结构 · Trái-phải',st:10,ord:'方 (phương) → 从 biến thể',rad:'方 (phương – lá cờ)',mean:'đi xa, lữ hành',
      tip:'方(cờ hiệu) + 从(người đi theo) → đoàn người cùng đi theo cờ hiệu = ĐI XA.',
      cf:'旁 (páng – "bên cạnh")',w:'旅游 / 旅行'},
     {c:'游',p:'yóu',type:'左右结构 · Trái-phải',st:12,ord:'氵(thuỷ) trái → 斿 phải',rad:'氵(thuỷ – nước)',mean:'du ngoạn, bơi',
      tip:'氵(nước) + 斿(cờ phất trong gió) → đi trên nước có cờ dẫn đường = DU NGOẠN.',
      cf:'油 (yóu – "dầu")',w:'旅游 / 游泳'},
   ]},
  {n:2,zh:'觉得',py:'juéde',pos:'Động từ',vn:'cảm thấy, cho rằng',em:'💭',lesson:1,
   ex_zh:'你觉得什么时候去最好？',ex_py:'Nǐ juéde shénme shíhou qù zuì hǎo?',ex_vn:'Bạn nghĩ đi vào thời gian nào là tốt nhất?',
   exList:[
     {zh:'你觉得什么时候去最好？',py:'Nǐ juéde shénme shíhou qù zuì hǎo?',vn:'Bạn nghĩ đi vào thời gian nào là tốt nhất?'},
     {zh:'我觉得它的眼睛最漂亮。',py:'Wǒ juéde tā de yǎnjing zuì piàoliang.',vn:'Tôi thấy đôi mắt của nó là đẹp nhất.'},
     {zh:'我觉得这个菜很好吃。',py:'Wǒ juéde zhège cài hěn hǎochī.',vn:'Tôi thấy món này rất ngon.'},
   ],
   hanzi:[
     {c:'觉',p:'jué',type:'上下结构 · Trên-dưới',st:9,ord:'冖 → 丷 → 见',rad:'见 (kiến – nhìn thấy)',mean:'cảm nhận, cảm thấy',
      tip:'Phần trên gần giống 学(học), dưới là 见(nhìn thấy) → "nhìn ra, tỉnh ngộ" = CẢM THẤY.',
      cf:'学 (xué – "học")',w:'觉得 / 睡觉'},
   ]},
  {n:3,zh:'最',py:'zuì',pos:'Phó từ',vn:'nhất',em:'🏆',lesson:1,
   ex_zh:'九月去北京旅游最好。',ex_py:'Jiǔyuè qù Běijīng lǚyóu zuì hǎo.',ex_vn:'Đi Bắc Kinh du lịch vào tháng 9 là tốt nhất.',
   exList:[
     {zh:'九月去北京旅游最好。',py:'Jiǔyuè qù Běijīng lǚyóu zuì hǎo.',vn:'Đi Bắc Kinh du lịch vào tháng 9 là tốt nhất.'},
     {zh:'我最喜欢踢足球。',py:'Wǒ zuì xǐhuan tī zúqiú.',vn:'Tôi thích đá bóng nhất.'},
     {zh:'它的眼睛最漂亮。',py:'Tā de yǎnjing zuì piàoliang.',vn:'Đôi mắt của nó là đẹp nhất.'},
   ],
   hanzi:[
     {c:'最',p:'zuì',type:'上下结构 · Trên-dưới',st:12,ord:'曰 → 取',rad:'曰 (viết – nói)',mean:'nhất, tột cùng',
      tip:'曰(nói) trên 取(lấy) → lấy phần cao nhất trong tất cả = NHẤT.',
      cf:'取 (qǔ – "lấy")',w:'最好 / 最喜欢 / 最漂亮'},
   ]},
  {n:4,zh:'为什么',py:'wèi shénme',pos:'Đại từ nghi vấn',vn:'tại sao, vì sao',em:'❓',lesson:1,
   ex_zh:'为什么？',ex_py:'Wèi shénme?',ex_vn:'Tại sao thế?',
   exList:[
     {zh:'为什么？',py:'Wèi shénme?',vn:'Tại sao thế?'},
     {zh:'你为什么昨天没来？',py:'Nǐ wèi shénme zuótiān méi lái?',vn:'Sao hôm qua bạn không đến?'},
     {zh:'你为什么喜欢踢足球？',py:'Nǐ wèi shénme xǐhuan tī zúqiú?',vn:'Sao bạn lại thích đá bóng?'},
   ],
   hanzi:[
     {c:'为',p:'wèi / wéi',type:'独体字 · Chữ đơn',st:4,ord:'丶→力biến thể',rad:'丶 (điểm)',mean:'vì, làm',
      tip:'Dạng giản thể của 爲 (gốc là hình con voi giúp việc) → nay dùng làm "VÌ, ĐỂ, LÀM".',
      cf:'办 (bàn – "làm, xử lý")',w:'为什么 / 因为'},
   ]},
  {n:5,zh:'也',py:'yě',pos:'Phó từ',vn:'cũng',em:'➕',lesson:1,
   ex_zh:'九月的北京天气不冷也不热。',ex_py:'Jiǔyuè de Běijīng tiānqì bù lěng yě bú rè.',ex_vn:'Thời tiết Bắc Kinh vào tháng 9 không lạnh cũng không nóng.',
   exList:[
     {zh:'九月的北京天气不冷也不热。',py:'Jiǔyuè de Běijīng tiānqì bù lěng yě bú rè.',vn:'Thời tiết Bắc Kinh vào tháng 9 không lạnh cũng không nóng.'},
     {zh:'我也是越南人。',py:'Wǒ yě shì Yuènán rén.',vn:'Tôi cũng là người Việt Nam.'},
     {zh:'他也喜欢旅游。',py:'Tā yě xǐhuan lǚyóu.',vn:'Anh ấy cũng thích du lịch.'},
   ],
   hanzi:[
     {c:'也',p:'yě',type:'独体字 · Chữ đơn',st:3,ord:'乛→𠃊→乙',rad:'乙 (ất)',mean:'cũng',
      tip:'Chữ cổ vốn chỉ hình cái bình đựng nước, nay dùng làm phó từ "CŨNG".',
      cf:'心 (xīn – "tim")',w:'也是 / 也不 / 也很'},
   ]},
  {n:6,zh:'运动',py:'yùndòng',pos:'Danh từ / Động từ',vn:'vận động, thể thao',em:'🏃',lesson:2,
   ex_zh:'你喜欢什么运动？',ex_py:'Nǐ xǐhuan shénme yùndòng?',ex_vn:'Bạn thích môn thể thao nào?',
   exList:[
     {zh:'你喜欢什么运动？',py:'Nǐ xǐhuan shénme yùndòng?',vn:'Bạn thích môn thể thao nào?'},
     {zh:'我每天都运动。',py:'Wǒ měitiān dōu yùndòng.',vn:'Ngày nào tôi cũng vận động.'},
     {zh:'游泳是很好的运动。',py:'Yóuyǒng shì hěn hǎo de yùndòng.',vn:'Bơi lội là môn thể thao rất tốt.'},
   ],
   hanzi:[
     {c:'运',p:'yùn',type:'半包围结构 · Bán bao vây',st:7,ord:'辶 → 云',rad:'辶 (sước – đi)',mean:'vận chuyển, vận động',
      tip:'辶(đi) + 云(mây trôi) → chuyển động như mây trôi = VẬN ĐỘNG.',
      cf:'远 (yuǎn – "xa")',w:'运动 / 运气'},
     {c:'动',p:'dòng',type:'左右结构 · Trái-phải',st:6,ord:'云 biến thể → 力',rad:'力 (lực – sức)',mean:'cử động, hoạt động',
      tip:'云(biến thể) + 力(sức) → dùng sức để chuyển động = ĐỘNG, CỬ ĐỘNG.',
      cf:'助 (zhù – "giúp đỡ")',w:'运动 / 动作 / 不动'},
   ]},
  {n:7,zh:'踢',py:'tī',pos:'Động từ',vn:'đá',em:'🦵',lesson:2,
   ex_zh:'我最喜欢踢足球。',ex_py:'Wǒ zuì xǐhuan tī zúqiú.',ex_vn:'Tôi thích đá bóng nhất.',
   exList:[
     {zh:'我最喜欢踢足球。',py:'Wǒ zuì xǐhuan tī zúqiú.',vn:'Tôi thích đá bóng nhất.'},
     {zh:'下午我们一起去踢足球吧。',py:'Xiàwǔ wǒmen yìqǐ qù tī zúqiú ba.',vn:'Chiều nay chúng ta cùng nhau đi đá bóng đi.'},
     {zh:'他踢球踢得很好。',py:'Tā tī qiú tī de hěn hǎo.',vn:'Anh ấy đá bóng rất giỏi.'},
   ],
   hanzi:[
     {c:'踢',p:'tī',type:'左右结构 · Trái-phải',st:15,ord:'足 (túc) trái → 易 (dịch) phải',rad:'足 (túc – chân)',mean:'đá',
      tip:'足(chân) + 易(dễ dàng) → dùng chân hất dễ dàng = ĐÁ.',
      cf:'惕 (tì – "cảnh giác")',w:'踢足球 / 踢球'},
   ]},
  {n:8,zh:'足球',py:'zúqiú',pos:'Danh từ',vn:'quả bóng đá, môn bóng đá',em:'⚽',lesson:2,
   ex_zh:'我最喜欢踢足球。',ex_py:'Wǒ zuì xǐhuan tī zúqiú.',ex_vn:'Tôi thích đá bóng nhất.',
   exList:[
     {zh:'我最喜欢踢足球。',py:'Wǒ zuì xǐhuan tī zúqiú.',vn:'Tôi thích đá bóng nhất.'},
     {zh:'这是我的足球。',py:'Zhè shì wǒ de zúqiú.',vn:'Đây là quả bóng đá của tôi.'},
     {zh:'他们在踢足球。',py:'Tāmen zài tī zúqiú.',vn:'Họ đang đá bóng.'},
   ],
   hanzi:[
     {c:'足',p:'zú',type:'独体字 · Tượng hình',st:7,ord:'口→丨→𠃌→乂biến thể',rad:'足 (túc – tự thành bộ)',mean:'chân, đủ',
      tip:'Hình bàn chân cách điệu → CHÂN, mở rộng nghĩa "ĐỦ, ĐẦY ĐỦ".',
      cf:'走 (zǒu – "đi bộ")',w:'足球 / 不足'},
     {c:'球',p:'qiú',type:'左右结构 · Trái-phải',st:11,ord:'王 (vương) trái → 求 (cầu) phải',rad:'王 (vương – ngọc)',mean:'quả bóng',
      tip:'王(ngọc) + 求(tìm) → vật hình tròn quý như ngọc = QUẢ BÓNG.',
      cf:'救 (jiù – "cứu giúp")',w:'足球 / 篮球 / 打球'},
   ]},
  {n:9,zh:'一起',py:'yìqǐ',pos:'Phó từ',vn:'cùng nhau',em:'🤝',lesson:2,
   ex_zh:'下午我们一起去踢足球吧。',ex_py:'Xiàwǔ wǒmen yìqǐ qù tī zúqiú ba.',ex_vn:'Chiều nay chúng ta cùng nhau đi đá bóng đi.',
   exList:[
     {zh:'下午我们一起去踢足球吧。',py:'Xiàwǔ wǒmen yìqǐ qù tī zúqiú ba.',vn:'Chiều nay chúng ta cùng nhau đi đá bóng đi.'},
     {zh:'我们一起去旅游吧。',py:'Wǒmen yìqǐ qù lǚyóu ba.',vn:'Chúng ta cùng nhau đi du lịch đi.'},
     {zh:'他们一起住。',py:'Tāmen yìqǐ zhù.',vn:'Họ ở cùng nhau.'},
   ],
   hanzi:[
     {c:'起',p:'qǐ',type:'半包围结构 · Bán bao vây',st:10,ord:'走 biến thể → 己',rad:'走 (tẩu – đi)',mean:'dậy, bắt đầu',
      tip:'走(biến thể) + 己(bản thân) → tự mình đứng dậy đi = DẬY, BẮT ĐẦU. Ghép với 一 = CÙNG NHAU.',
      cf:'己 (jǐ – "bản thân")',w:'一起 / 起来 / 早起'},
   ]},
  {n:10,zh:'要',py:'yào',pos:'Trợ động từ',vn:'muốn, cần, sẽ',em:'🎯',lesson:3,
   ex_zh:'我要去北京旅游。',ex_py:'Wǒ yào qù Běijīng lǚyóu.',ex_vn:'Tôi muốn đi Bắc Kinh du lịch.',
   exList:[
     {zh:'我要去北京旅游。',py:'Wǒ yào qù Běijīng lǚyóu.',vn:'Tôi muốn đi Bắc Kinh du lịch.'},
     {zh:'我们要不要买几个新的椅子？',py:'Wǒmen yào bu yào mǎi jǐ ge xīn de yǐzi?',vn:'Chúng ta có cần mua vài chiếc ghế mới không?'},
     {zh:'我要学习英语。',py:'Wǒ yào xuéxí Yīngyǔ.',vn:'Tôi muốn học tiếng Anh.'},
   ],
   hanzi:[
     {c:'要',p:'yào',type:'上下结构 · Trên-dưới',st:9,ord:'覀 biến thể → 女',rad:'西 (tây – biến thể)',mean:'muốn, cần, sẽ',
      tip:'Chữ cổ vốn là hình dáng cái lưng người phụ nữ chống nạnh, nay dùng làm trợ động từ "MUỐN, CẦN".',
      cf:'腰 (yāo – "thắt lưng")',w:'要去 / 要不要 / 不想'},
   ]},
  {n:11,zh:'新',py:'xīn',pos:'Tính từ',vn:'mới',em:'✨',lesson:3,
   ex_zh:'我们要不要买几个新的椅子？',ex_py:'Wǒmen yào bu yào mǎi jǐ ge xīn de yǐzi?',ex_vn:'Chúng ta có cần mua vài chiếc ghế mới không?',
   exList:[
     {zh:'我们要不要买几个新的椅子？',py:'Wǒmen yào bu yào mǎi jǐ ge xīn de yǐzi?',vn:'Chúng ta có cần mua vài chiếc ghế mới không?'},
     {zh:'这是我的新手机。',py:'Zhè shì wǒ de xīn shǒujī.',vn:'Đây là điện thoại mới của tôi.'},
     {zh:'他今天穿了新衣服。',py:'Tā jīntiān chuānle xīn yīfu.',vn:'Hôm nay anh ấy mặc quần áo mới.'},
   ],
   hanzi:[
     {c:'新',p:'xīn',type:'左右结构 · Trái-phải',st:13,ord:'立 → 木 → 斤',rad:'斤 (cân – cái rìu)',mean:'mới',
      tip:'斤(rìu) chặt 木(cây) 立(dựng) lên → tạo ra vật MỚI.',
      cf:'亲 (qīn – "thân thiết")',w:'新的 / 新年 / 更新'},
   ]},
  {n:12,zh:'椅子',py:'yǐzi',pos:'Danh từ',vn:'cái ghế',em:'🪑',lesson:3,
   ex_zh:'我们要不要买几个新的椅子？',ex_py:'Wǒmen yào bu yào mǎi jǐ ge xīn de yǐzi?',ex_vn:'Chúng ta có cần mua vài chiếc ghế mới không?',
   exList:[
     {zh:'我们要不要买几个新的椅子？',py:'Wǒmen yào bu yào mǎi jǐ ge xīn de yǐzi?',vn:'Chúng ta có cần mua vài chiếc ghế mới không?'},
     {zh:'这把椅子很舒服。',py:'Zhè bǎ yǐzi hěn shūfu.',vn:'Chiếc ghế này rất thoải mái.'},
     {zh:'请坐这个椅子。',py:'Qǐng zuò zhège yǐzi.',vn:'Mời bạn ngồi ghế này.'},
   ],
   hanzi:[
     {c:'椅',p:'yǐ',type:'左右结构 · Trái-phải',st:12,ord:'木 (mộc) trái → 奇 (kỳ) phải',rad:'木 (mộc – gỗ)',mean:'ghế tựa',
      tip:'木(gỗ) + 奇(đặc biệt) → đồ gỗ đặc biệt để ngồi tựa lưng = GHẾ.',
      cf:'倚 (yǐ – "dựa vào")',w:'椅子 / 一把椅子'},
   ]},
  {n:13,zh:'它',py:'tā',pos:'Đại từ',vn:'nó (chỉ con vật, đồ vật)',em:'🐾',lesson:4,
   ex_zh:'那是我的猫，它叫花花。',ex_py:'Nà shì wǒ de māo, tā jiào Huāhua.',ex_vn:'Đó là con mèo của tôi, nó tên là Hoa Hoa.',
   exList:[
     {zh:'那是我的猫，它叫花花。',py:'Nà shì wǒ de māo, tā jiào Huāhua.',vn:'Đó là con mèo của tôi, nó tên là Hoa Hoa.'},
     {zh:'它很漂亮。',py:'Tā hěn piàoliang.',vn:'Nó đẹp lắm.'},
     {zh:'这本书，它是我的。',py:'Zhè běn shū, tā shì wǒ de.',vn:'Quyển sách này, nó là của tôi.'},
   ],
   hanzi:[
     {c:'它',p:'tā',type:'上下结构 · Trên-dưới',st:5,ord:'宀biến thể → 匕biến thể',rad:'宀 (miên – mái nhà)',mean:'nó',
      tip:'Chữ cổ vốn là hình con vật dưới mái nhà, nay dùng làm đại từ "NÓ" (chỉ vật, con vật).',
      cf:'他 (tā – "anh ấy", chỉ người)',w:'它叫 / 它是 / 它的'},
   ]},
  {n:14,zh:'眼睛',py:'yǎnjing',pos:'Danh từ',vn:'mắt, đôi mắt',em:'👀',lesson:4,
   ex_zh:'我觉得它的眼睛最漂亮。',ex_py:'Wǒ juéde tā de yǎnjing zuì piàoliang.',ex_vn:'Tôi thấy đôi mắt của nó là đẹp nhất.',
   exList:[
     {zh:'我觉得它的眼睛最漂亮。',py:'Wǒ juéde tā de yǎnjing zuì piàoliang.',vn:'Tôi thấy đôi mắt của nó là đẹp nhất.'},
     {zh:'她的眼睛很大。',py:'Tā de yǎnjing hěn dà.',vn:'Đôi mắt của cô ấy rất to.'},
     {zh:'请闭上眼睛。',py:'Qǐng bìshang yǎnjing.',vn:'Xin hãy nhắm mắt lại.'},
   ],
   hanzi:[
     {c:'眼',p:'yǎn',type:'左右结构 · Trái-phải',st:11,ord:'目 (mục) trái → 艮 (cấn) phải',rad:'目 (mục – mắt)',mean:'mắt',
      tip:'目(mắt) + 艮(dừng lại, nhìn chăm chú) → bộ phận để NHÌN = MẮT.',
      cf:'银 (yín – "bạc")',w:'眼睛 / 眼镜'},
     {c:'睛',p:'jīng',type:'左右结构 · Trái-phải',st:13,ord:'目 (mục) trái → 青 (thanh) phải',rad:'目 (mục – mắt)',mean:'con ngươi, mắt',
      tip:'目(mắt) + 青(xanh trong) → tròng mắt trong xanh = CON NGƯƠI.',
      cf:'晴 (qíng – "trời quang")',w:'眼睛 / 眼珠'},
   ]},
];

const wuData = [
  {img:'🧳',label:'旅游',py:'lǚyóu',letter:'A'},
  {img:'🏃',label:'运动',py:'yùndòng',letter:'B'},
  {img:'⚽',label:'足球',py:'zúqiú',letter:'C'},
  {img:'✨',label:'新',py:'xīn',letter:'D'},
  {img:'🪑',label:'椅子',py:'yǐzi',letter:'E'},
  {img:'👀',label:'眼睛',py:'yǎnjing',letter:'F'},
];

var dialogData = [
  {scene:'在学校 · Bàn chuyện đi du lịch',
   lines:[
     {sp:0,zh:'我要去北京旅游，你觉得什么时候去最好？',py:'Wǒ yào qù Běijīng lǚyóu, nǐ juéde shénme shíhou qù zuì hǎo?',vn:'Tôi muốn đi Bắc Kinh du lịch, bạn nghĩ đi vào thời gian nào là tốt nhất?'},
     {sp:1,zh:'九月去北京旅游最好。',py:'Jiǔyuè qù Běijīng lǚyóu zuì hǎo.',vn:'Đi Bắc Kinh du lịch vào tháng 9 là tốt nhất.'},
     {sp:0,zh:'为什么？',py:'Wèi shénme?',vn:'Tại sao thế?'},
     {sp:1,zh:'九月的北京天气不冷也不热。',py:'Jiǔyuè de Běijīng tiānqì bù lěng yě bú rè.',vn:'Thời tiết Bắc Kinh vào tháng 9 không lạnh cũng không nóng.'},
   ]},
  {scene:'看照片 · Rủ nhau đi đá bóng',
   lines:[
     {sp:0,zh:'你喜欢什么运动？',py:'Nǐ xǐhuan shénme yùndòng?',vn:'Bạn thích môn thể thao nào?'},
     {sp:1,zh:'我最喜欢踢足球。',py:'Wǒ zuì xǐhuan tī zúqiú.',vn:'Tôi thích đá bóng nhất.'},
     {sp:0,zh:'下午我们一起去踢足球吧。',py:'Xiàwǔ wǒmen yìqǐ qù tī zúqiú ba.',vn:'Chiều nay chúng ta cùng nhau đi đá bóng đi.'},
     {sp:1,zh:'好啊。',py:'Hǎo a.',vn:'Được thôi.'},
   ]},
  {scene:'在家里 · Bàn chuyện mua ghế mới',
   lines:[
     {sp:0,zh:'我们要不要买几个新的椅子？',py:'Wǒmen yào bu yào mǎi jǐ ge xīn de yǐzi?',vn:'Chúng ta có cần mua vài chiếc ghế mới không?'},
     {sp:1,zh:'好啊，什么时候去买？',py:'Hǎo a, shénme shíhou qù mǎi?',vn:'Được thôi, khi nào thì đi mua?'},
     {sp:0,zh:'明天下午怎么样？你明天几点能回来？',py:'Míngtiān xiàwǔ zěnmeyàng? Nǐ míngtiān jǐ diǎn néng huílái?',vn:'Chiều mai thế nào? Ngày mai mấy giờ bạn có thể về?'},
     {sp:1,zh:'三点多。',py:'Sān diǎn duō.',vn:'Hơn 3 giờ một chút.'},
   ]},
  {scene:'在家里 · Nói chuyện về con mèo',
   lines:[
     {sp:0,zh:'桌子下面有个猫。',py:'Zhuōzi xiàmiàn yǒu ge māo.',vn:'Dưới gầm bàn có một con mèo kìa.'},
     {sp:1,zh:'那是我的猫，它叫花花。它很漂亮。',py:'Nà shì wǒ de māo, tā jiào Huāhua. Tā hěn piàoliang.',vn:'Đó là con mèo của tôi, nó tên là Hoa Hoa. Nó đẹp lắm.'},
     {sp:0,zh:'是呀，我觉得它的眼睛最漂亮。它多大了？',py:'Shì ya, wǒ juéde tā de yǎnjing zuì piàoliang. Tā duō dà le?',vn:'Đúng vậy, tôi thấy đôi mắt của nó là đẹp nhất. Nó được bao nhiêu tháng rồi?'},
     {sp:1,zh:'六个多月。',py:'Liù ge duō yuè.',vn:'Hơn 6 tháng một chút.'},
   ]},
];


// ══════════════════════════════════════════
// PHẦN 1 · GHÉP TỪ (Collocation) — Động từ/Phó từ + Tân ngữ/Tính từ
// Không copy câu bài khoá — chỉ ghép CỤM TỪ để phản xạ collocation.
// ══════════════════════════════════════════
var matchData = [
  {left:'踢',right:'足球'},
  {left:'要',right:'旅游'},
  {left:'最',right:'喜欢'},
  {left:'一起',right:'运动'},
  {left:'新',right:'椅子'},
  {left:'它的',right:'眼睛'},
];

// ══════════════════════════════════════════
// PHẦN 2 · NGHE (Listening) — tình huống MỚI, không trùng bài khoá
// Dùng 要/最/几/多 + từ vựng bài 1, ngữ cảnh khác hoàn toàn (rủ đi vận động,
// hỏi số bạn cùng lớp, mua ghế) thay vì Bắc Kinh / đá bóng / con mèo.
// ══════════════════════════════════════════
var listenData = [
  {audio:'我朋友要买新椅子。他觉得白色的最好看。我也想买一把。',
   questions:[
     {q:'我朋友要做什么？',opts:['买新椅子','去旅游','踢足球','买眼镜'],ans:0},
     {q:'我朋友觉得什么颜色的椅子最好看？',opts:['白色','黑色','红色','没有说'],ans:0},
   ]},
  {audio:'明天我们班要一起去运动。我不知道有几个同学要去，你为什么不去？',
   questions:[
     {q:'明天他们班要做什么？',opts:['一起去运动','买新椅子','去旅游','看眼睛'],ans:0},
     {q:'说话的人问了什么问题？',opts:['你为什么不去','你要去几天','你觉得椅子好看吗','你几点回来'],ans:0},
   ]},
  {audio:'我要买十多把新椅子，我觉得这样最好。',
   questions:[
     {q:'"十多把"是什么意思？',opts:['超过十把','正好十把','不到十把','一把都没有'],ans:0},
   ]},
];

// ══════════════════════════════════════════
// PHẦN 3a · ĐIỀN TỪ — hoàn thành đoạn thoại MỚI (rủ bạn đi vận động)
// ══════════════════════════════════════════
var fillData = [
  {pre:'你明天',blank:'要',post:'不要去公园运动？',hint:'(muốn, sẽ — trợ động từ)',ans:'要',exp:'要 đặt trước động từ để hỏi/nêu ý định.'},
  {pre:'要啊，我',blank:'最',post:'喜欢运动了！',hint:'(nhất)',ans:'最',exp:'最 đặt trước động từ tâm lý/tính từ để biểu thị mức độ cao nhất.'},
  {pre:'那我们',blank:'一起',post:'去吧，我叫上小李。',hint:'(cùng nhau)',ans:'一起'},
  {pre:'好，我',blank:'也',post:'想叫他一起去。',hint:'(cũng)',ans:'也'},
  {pre:'我们班有',blank:'几',post:'个同学要去呢？',hint:'(vài, mấy — số ước lượng nhỏ hơn 10)',ans:'几',exp:'几 phải đi kèm lượng từ + danh từ.'},
  {pre:'好像有十',blank:'多',post:'个人要去。',hint:'(hơn — số ước lượng, số > 10 thì 多 đứng sau số đếm)',ans:'多'},
  {pre:'你',blank:'为什么',post:'不去？',hint:'(tại sao)',ans:'为什么'},
  {pre:'因为我',blank:'要',post:'去买新椅子。',hint:'(muốn, cần)',ans:'要'},
];

// ══════════════════════════════════════════
// PHẦN 3b · SẮP XẾP — câu MỚI, dùng 要/最/几/多/也/为什么
// ══════════════════════════════════════════
var sortData = [
  {words:['我','也','要','去','旅游','。'],ans:'我也要去旅游。',audio:'我也要去旅游。'},
  {words:['他','最','喜欢','运动','。'],ans:'他最喜欢运动。',audio:'他最喜欢运动。'},
  {words:['你们','要','不要','一起','去','？'],ans:'你们要不要一起去？',audio:'你们要不要一起去？'},
  {words:['教室','里','有','几','把','新','椅子','。'],ans:'教室里有几把新椅子。',audio:'教室里有几把新椅子。'},
  {words:['她','的','眼睛','最','好看','。'],ans:'她的眼睛最好看。',audio:'她的眼睛最好看。'},
  {words:['我们','十','多','个','人','要','去','。'],ans:'我们十多个人要去。',audio:'我们十多个人要去。'},
];

// ══════════════════════════════════════════
// PHẦN 3c · SỬA LỖI SAI — lỗi ngữ pháp học sinh Việt hay mắc
// (chuyển di tiêu cực từ trật tự từ tiếng Việt: "đẹp nhất", "cũng" cuối câu...)
// ══════════════════════════════════════════
var errorFixData = [
  {wrong:'她的眼睛漂亮最。',
   opts:['她的眼睛最漂亮。','她最的眼睛漂亮。','最她的眼睛漂亮。','她的最眼睛漂亮。'],ans:0,
   exp:'最 phải đứng NGAY TRƯỚC tính từ／động từ tâm lý, không đặt sau như trật tự "đẹp nhất" trong tiếng Việt.'},
  {wrong:'我不要去旅游。(ý muốn nói "tôi không MUỐN đi du lịch")',
   opts:['我不想去旅游。','我不去要旅游。','我要不去旅游。','我去不要旅游。'],ans:0,
   exp:'Phủ định "muốn" phải dùng 不想, KHÔNG dùng 不要 (不要 mang nghĩa "đừng làm việc gì", như một lời cấm/khuyên).'},
  {wrong:'教室里有几椅子。',
   opts:['教室里有几把椅子。','教室里几有把椅子。','教室里有把几椅子。','教室里有几椅子把。'],ans:0,
   exp:'Sau 几 bắt buộc phải có LƯỢNG TỪ (把) rồi mới đến danh từ — không được bỏ qua lượng từ như tiếng Việt "mấy ghế".'},
  {wrong:'十把多椅子。',
   opts:['十多把椅子。','多十把椅子。','十把椅子多。','把十多椅子。'],ans:0,
   exp:'Với số đếm LỚN HƠN 10, 多 phải đứng SAU số đếm và TRƯỚC lượng từ: Số + 多 + Lượng từ + Danh từ.'},
  {wrong:'我想去旅游也。',
   opts:['我也想去旅游。','我想也去旅游。','想我也去旅游。','我想去也旅游。'],ans:0,
   exp:'也 phải đứng SAU chủ ngữ và TRƯỚC động từ/trợ động từ, không đặt cuối câu như "cũng" trong tiếng Việt có thể đứng linh hoạt.'},
];

// ══════════════════════════════════════════
// PHẦN 4 · LUYỆN NÓI 3 TẦNG (tầng 3 có ghi âm thật + chấm điểm AI)
// ══════════════════════════════════════════
var speakingData = {
  intro:'Nhấn 🔊 để nghe câu hỏi (không có chữ phiên âm đi kèm — luyện phản xạ nghe hiểu trực tiếp), sau đó tự ghi âm câu trả lời của bạn. Ghi âm xong mới nên xem gợi ý/câu trả lời mẫu để đối chiếu.',
  questions:[
    {q_zh:'你明天要不要跟朋友一起去运动？你最喜欢什么运动？',
     q_vn:'Ngày mai bạn có muốn cùng bạn bè đi vận động không? Bạn thích môn thể thao nào nhất?',
     hint:'你明天要不要一起去……？我最喜欢……。',
     sample:'我明天要跟朋友一起去运动，我最喜欢踢足球。',
     sample_vn:'Ngày mai tôi sẽ cùng bạn bè đi vận động, tôi thích đá bóng nhất.',
     note:'一起 luôn đứng TRƯỚC động từ chính (一起去/一起运动), không đứng sau như "cùng nhau" có thể đứng cuối câu trong tiếng Việt.'},
    {q_zh:'你们家要不要买几把新椅子？打算买多少把？',
     q_vn:'Nhà bạn có cần mua vài chiếc ghế mới không? Định mua bao nhiêu chiếc?',
     hint:'我们家要不要买……？买十多把吧。',
     sample:'我们家要买几把新椅子，好像要买十多把。',
     sample_vn:'Nhà tôi cần mua vài chiếc ghế mới, hình như cần mua hơn mười chiếc.',
     note:'几 (số nhỏ, chưa biết chính xác) và 多 (số ước lượng, thường đi với số đã biết) dùng trong hai tình huống khác nhau — đừng nhầm lẫn.'},
    {q_zh:'你觉得你朋友的什么地方最好看？',
     q_vn:'Bạn thấy điểm nào trên gương mặt/ngoại hình của bạn mình đẹp nhất?',
     hint:'我觉得你的……最好看。',
     sample:'我觉得他的眼睛最好看。',
     sample_vn:'Tôi thấy đôi mắt của anh ấy đẹp nhất.',
     note:'觉得 dùng để nêu ý kiến/cảm nhận cá nhân một cách lịch sự, tự nhiên hơn là khẳng định trực tiếp.'},
  ],
};
