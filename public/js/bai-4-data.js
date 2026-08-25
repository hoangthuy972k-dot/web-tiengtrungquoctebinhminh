// ══════════════════════════════════════════
// DATA — Bài 4: 这个工作是他帮我介绍的
// ══════════════════════════════════════════
const vocabData = [
  {n:1,zh:'生日',py:'shēngrì',pos:'Danh từ',vn:'sinh nhật',em:'🎂',lesson:1,
   ex_zh:'生日快乐！',ex_py:'Shēngrì kuàilè!',ex_vn:'Chúc mừng sinh nhật!',
   exList:[
     {zh:'生日快乐！',py:'Shēngrì kuàilè!',vn:'Chúc mừng sinh nhật!'},
     {zh:'你的生日是几月几号？',py:'Nǐ de shēngrì shì jǐ yuè jǐ hào?',vn:'Sinh nhật bạn là ngày mấy tháng mấy?'},
     {zh:'今天是我女儿的生日。',py:'Jīntiān shì wǒ nǚ\'ér de shēngrì.',vn:'Hôm nay là sinh nhật con gái tôi.'},
   ],
   hanzi:[
     {c:'生',p:'shēng',type:'独体字 · Chữ đơn',st:5,ord:'丿→一→一→丨→一',rad:'生 (sinh)',mean:'sinh ra, sống',
      tip:'Hình mầm cây mọc trên đất → "sinh ra". 生 + 日 = ngày sinh ra = SINH NHẬT.',
      cf:'牛 (niú)',w:'生日 / 学生 / 生病'},
     {c:'日',p:'rì',type:'独体字 · Tượng hình',st:4,ord:'丨→フ→一→一',rad:'日 (nhật – mặt trời)',mean:'ngày, mặt trời',
      tip:'Hình vuông có chấm ở giữa mô phỏng mặt trời → "ngày, mặt trời".',
      cf:'目 (mù – "mắt", dài hơn)',w:'生日 / 今天 / 日子'},
   ]},
  {n:2,zh:'快乐',py:'kuàilè',pos:'Tính từ',vn:'vui vẻ, hạnh phúc',em:'😄',lesson:1,
   ex_zh:'祝你天天快乐。',ex_py:'Zhù nǐ tiāntiān kuàilè.',ex_vn:'Chúc bạn ngày nào cũng vui vẻ.',
   exList:[
     {zh:'祝你天天快乐。',py:'Zhù nǐ tiāntiān kuàilè.',vn:'Chúc bạn ngày nào cũng vui vẻ.'},
     {zh:'她今天很快乐。',py:'Tā jīntiān hěn kuàilè.',vn:'Hôm nay cô ấy rất vui.'},
     {zh:'新年快乐！',py:'Xīnnián kuàilè!',vn:'Chúc mừng năm mới!'},
   ],
   hanzi:[
     {c:'快',p:'kuài',type:'左右结构 · Trái-phải',st:7,ord:'忄(tâm) trái → 夬 (quyết) phải',rad:'忄(tâm – trái tim)',mean:'nhanh; vui',
      tip:'Bộ 忄(tim) → cảm giác trong lòng nhẹ nhõm, nhanh chóng = VUI, NHANH.',
      cf:'块 (kuài – bộ 土, đã học ở Bài 3)',w:'快乐 / 很快 / 快来'},
     {c:'乐',p:'lè / yuè',type:'独体字 · Chữ đơn',st:5,ord:'丿→𠃌→丨→乛→乙',rad:'丿',mean:'vui (lè); âm nhạc (yuè)',
      tip:'Hình chiếc trống có dùi gõ cách điệu → thời xưa nghe nhạc là niềm VUI.',
      cf:'东 (dōng – "phía đông")',w:'快乐 / 音乐 / 乐意'},
   ]},
  {n:3,zh:'给',py:'gěi',pos:'Giới từ / Động từ',vn:'cho, tặng',em:'🎁',lesson:1,
   ex_zh:'这是送给你的。',ex_py:'Zhè shì sòng gěi nǐ de.',ex_vn:'Đây là quà tặng bạn.',
   exList:[
     {zh:'这是送给你的。',py:'Zhè shì sòng gěi nǐ de.',vn:'Đây là quà tặng bạn.'},
     {zh:'请把这本书给我。',py:'Qǐng bǎ zhè běn shū gěi wǒ.',vn:'Làm ơn đưa quyển sách này cho tôi.'},
     {zh:'妈妈给我买了一块手表。',py:'Māma gěi wǒ mǎile yí kuài shǒubiǎo.',vn:'Mẹ mua cho tôi một chiếc đồng hồ.'},
   ],
   hanzi:[
     {c:'给',p:'gěi',type:'左右结构 · Trái-phải',st:9,ord:'纟(mịch) trái → 合 (hợp) phải',rad:'纟(mịch – tơ, sợi)',mean:'cho, tặng',
      tip:'Bộ 纟(tơ lụa) — xưa tặng nhau tơ lụa quý giá, sau mở rộng nghĩa "CHO, TẶNG" nói chung.',
      cf:'合 (hé – "hợp", thiếu bộ 纟)',w:'给你 / 送给 / 给我'},
   ]},
  {n:4,zh:'接',py:'jiē',pos:'Động từ',vn:'nhận, đón, nghe máy',em:'📞',lesson:2,
   ex_zh:'电话是儿子接的。',ex_py:'Diànhuà shì érzi jiē de.',ex_vn:'Điện thoại là con trai nghe máy.',
   exList:[
     {zh:'电话是儿子接的。',py:'Diànhuà shì érzi jiē de.',vn:'Điện thoại là con trai nghe máy.'},
     {zh:'我去机场接你。',py:'Wǒ qù jīchǎng jiē nǐ.',vn:'Tôi đi ra sân bay đón bạn.'},
     {zh:'请接一下电话。',py:'Qǐng jiē yíxià diànhuà.',vn:'Làm ơn nghe điện thoại một chút.'},
   ],
   hanzi:[
     {c:'接',p:'jiē',type:'左右结构 · Trái-phải',st:11,ord:'扌(thủ) trái → 妾 (thiếp) phải',rad:'扌(thủ – tay)',mean:'nhận, đón, tiếp',
      tip:'Bộ 扌(tay) → dùng tay đưa ra ĐÓN NHẬN người/vật/cuộc gọi.',
      cf:'椄 (jiē – "ghép cây", bộ 木)',w:'接电话 / 接人 / 迎接'},
   ]},
  {n:5,zh:'晚上',py:'wǎnshang',pos:'Danh từ',vn:'buổi tối',em:'🌙',lesson:2,
   ex_zh:'晚上我问一下儿子。',ex_py:'Wǎnshang wǒ wèn yíxià érzi.',ex_vn:'Tối nay tôi sẽ hỏi con trai một chút.',
   exList:[
     {zh:'晚上我问一下儿子。',py:'Wǎnshang wǒ wèn yíxià érzi.',vn:'Tối nay tôi sẽ hỏi con trai một chút.'},
     {zh:'晚上你想吃什么？',py:'Wǎnshang nǐ xiǎng chī shénme?',vn:'Tối nay bạn muốn ăn gì?'},
     {zh:'他晚上很累。',py:'Tā wǎnshang hěn lèi.',vn:'Buổi tối anh ấy rất mệt.'},
   ],
   hanzi:[
     {c:'晚',p:'wǎn',type:'左右结构 · Trái-phải',st:11,ord:'日 (nhật) trái → 免 (miễn) phải',rad:'日 (nhật – mặt trời)',mean:'muộn, tối',
      tip:'Bộ 日 (mặt trời) đã lặn muộn → chỉ thời gian buổi TỐI, MUỘN.',
      cf:'免 (miǎn – "miễn trừ", thiếu bộ 日)',w:'晚上 / 晚饭 / 太晚了'},
     {c:'上',p:'shàng',type:'独体字 · Chữ đơn',st:3,ord:'一→丨→一',rad:'一 (nhất)',mean:'trên, lên',
      tip:'Đã học ở Bài 3 (早上) — nét ngắn phía trên nét ngang dài = hướng lên trên.',
      cf:'下 (xià)',w:'晚上 / 早上 / 上班'},
   ]},
  {n:6,zh:'问',py:'wèn',pos:'Động từ',vn:'hỏi',em:'❔',lesson:2,
   ex_zh:'晚上我问一下儿子。',ex_py:'Wǎnshang wǒ wèn yíxià érzi.',ex_vn:'Tối nay tôi sẽ hỏi con trai một chút.',
   exList:[
     {zh:'晚上我问一下儿子。',py:'Wǎnshang wǒ wèn yíxià érzi.',vn:'Tối nay tôi sẽ hỏi con trai một chút.'},
     {zh:'我想问老师一个问题。',py:'Wǒ xiǎng wèn lǎoshī yí ge wèntí.',vn:'Tôi muốn hỏi thầy giáo một câu hỏi.'},
     {zh:'你问他了吗？',py:'Nǐ wènle tā ma?',vn:'Bạn hỏi anh ấy chưa?'},
   ],
   hanzi:[
     {c:'问',p:'wèn',type:'半包围 · Bán bao (门)',st:6,ord:'门 (môn) bao ngoài → 口 (khẩu) bên trong',rad:'门 (môn – cửa)',mean:'hỏi',
      tip:'Miệng 口 đứng ở cửa 门 cất tiếng gọi/HỎI vào trong.',
      cf:'间 (jiān – thay 口 bằng 日, đã học ở Bài 2)',w:'问一下 / 问题 / 请问'},
   ]},
  {n:7,zh:'非常',py:'fēicháng',pos:'Phó từ',vn:'vô cùng, cực kỳ',em:'❗',lesson:3,
   ex_zh:'非常喜欢。',ex_py:'Fēicháng xǐhuan.',ex_vn:'Cực kỳ thích luôn.',
   exList:[
     {zh:'非常喜欢。',py:'Fēicháng xǐhuan.',vn:'Cực kỳ thích luôn.'},
     {zh:'这件衣服非常漂亮。',py:'Zhè jiàn yīfu fēicháng piàoliang.',vn:'Chiếc áo này cực kỳ đẹp.'},
     {zh:'今天非常冷。',py:'Jīntiān fēicháng lěng.',vn:'Hôm nay lạnh cực kỳ.'},
   ],
   hanzi:[
     {c:'非',p:'fēi',type:'独体字 · Chữ đơn',st:8,ord:'丿→丨→一→一→丨→一→一',rad:'非 (phi – tự thành bộ)',mean:'không, phi',
      tip:'Hình hai cánh chim xoè ngược chiều nhau → biểu thị sự "trái ngược, không phải".',
      cf:'排 (pái – "xếp hàng", thêm bộ 扌)',w:'非常 / 非要'},
     {c:'常',p:'cháng',type:'上下结构 · Trên-dưới',st:11,ord:'⺌ → 冖 → 巾',rad:'巾 (cân – khăn)',mean:'thường xuyên',
      tip:'非 + 常 = mức độ vượt ra ngoài cái "thường" = VÔ CÙNG.',
      cf:'尝 (cháng – "nếm", phần dưới khác)',w:'非常 / 经常 / 常常'},
   ]},
  {n:8,zh:'开始',py:'kāishǐ',pos:'Động từ',vn:'bắt đầu',em:'🚦',lesson:3,
   ex_zh:'你是什么时候开始踢足球的？',ex_py:'Nǐ shì shénme shíhou kāishǐ tī zúqiú de?',ex_vn:'Bạn bắt đầu đá bóng từ khi nào thế?',
   exList:[
     {zh:'你是什么时候开始踢足球的？',py:'Nǐ shì shénme shíhou kāishǐ tī zúqiú de?',vn:'Bạn bắt đầu đá bóng từ khi nào thế?'},
     {zh:'电影已经开始了。',py:'Diànyǐng yǐjīng kāishǐ le.',vn:'Phim đã bắt đầu rồi.'},
     {zh:'我们几点开始上课？',py:'Wǒmen jǐ diǎn kāishǐ shàngkè?',vn:'Mấy giờ chúng ta bắt đầu học?'},
   ],
   hanzi:[
     {c:'开',p:'kāi',type:'独体字 · Chữ đơn',st:4,ord:'一→丨→一→丨',rad:'廾 (củng)',mean:'mở, bắt đầu',
      tip:'Hình then cài cửa được kéo mở ra → "MỞ, khởi đầu".',
      cf:'关 (guān – "đóng", trái nghĩa)',w:'开始 / 开门 / 打开'},
     {c:'始',p:'shǐ',type:'左右结构 · Trái-phải',st:8,ord:'女 (nữ) trái → 台 (đài) phải',rad:'女 (nữ – phụ nữ)',mean:'bắt đầu',
      tip:'开 (mở ra) + 始 (khởi thủy) = mở ra điểm khởi đầu = BẮT ĐẦU.',
      cf:'治 (zhì – "trị", bộ 氵)',w:'开始 / 始终'},
   ]},
  {n:9,zh:'已经',py:'yǐjīng',pos:'Phó từ',vn:'đã',em:'✅',lesson:4,
   ex_zh:'已经两年多了。',ex_py:'Yǐjīng liǎng nián duō le.',ex_vn:'Đã hơn hai năm rồi.',
   exList:[
     {zh:'已经两年多了。',py:'Yǐjīng liǎng nián duō le.',vn:'Đã hơn hai năm rồi.'},
     {zh:'王老师已经回家了。',py:'Wáng lǎoshī yǐjīng huí jiā le.',vn:'Thầy Vương đã về nhà rồi.'},
     {zh:'我已经吃饭了。',py:'Wǒ yǐjīng chī fàn le.',vn:'Tôi đã ăn cơm rồi.'},
   ],
   hanzi:[
     {c:'已',p:'yǐ',type:'独体字 · Chữ đơn',st:3,ord:'乙→一→乚',rad:'己 (kỷ – biến thể)',mean:'đã, thôi',
      tip:'Hình cuộn dây đã hoàn tất, khép lại → biểu thị việc ĐÃ xong.',
      cf:'己 (jǐ – "bản thân", hở đầu)',w:'已经 / 不已'},
     {c:'经',p:'jīng',type:'左右结构 · Trái-phải',st:8,ord:'纟(mịch) trái → 巛+ 工 phải',rad:'纟(mịch – tơ, sợi)',mean:'trải qua, kinh',
      tip:'已 (xong) + 经 (trải qua) = việc đã trải qua = ĐÃ (xong rồi).',
      cf:'径 (jìng – "con đường", bộ 彳)',w:'已经 / 经常 / 经理'},
   ]},
  {n:10,zh:'长',py:'cháng',pos:'Tính từ',vn:'dài, lâu',em:'📏',lesson:4,
   ex_zh:'你在这里工作多长时间了？',ex_py:'Nǐ zài zhèlǐ gōngzuò duō cháng shíjiān le?',ex_vn:'Bạn làm việc ở đây được bao lâu rồi?',
   exList:[
     {zh:'你在这里工作多长时间了？',py:'Nǐ zài zhèlǐ gōngzuò duō cháng shíjiān le?',vn:'Bạn làm việc ở đây được bao lâu rồi?'},
     {zh:'这条河很长。',py:'Zhè tiáo hé hěn cháng.',vn:'Con sông này rất dài.'},
     {zh:'今天的会开得很长。',py:'Jīntiān de huì kāi de hěn cháng.',vn:'Cuộc họp hôm nay kéo dài lâu.'},
   ],
   hanzi:[
     {c:'长',p:'cháng / zhǎng',type:'独体字 · Tượng hình',st:4,ord:'丿→ 𠃌 → 一 → 乚',rad:'长 (trường – tự thành bộ)',mean:'dài (cháng); lớn lên (zhǎng)',
      tip:'Hình mái tóc dài được vẽ cách điệu → nghĩa gốc "DÀI". Đọc zhǎng khi nghĩa "trưởng thành, cấp trên".',
      cf:'K không có',w:'多长时间 / 长大 / 校长'},
   ]},
  {n:11,zh:'两',py:'liǎng',pos:'Số từ',vn:'hai (dùng trước lượng từ)',em:'2️⃣',lesson:4,
   ex_zh:'已经两年多了。',ex_py:'Yǐjīng liǎng nián duō le.',ex_vn:'Đã hơn hai năm rồi.',
   exList:[
     {zh:'已经两年多了。',py:'Yǐjīng liǎng nián duō le.',vn:'Đã hơn hai năm rồi.'},
     {zh:'我有两个孩子。',py:'Wǒ yǒu liǎng ge háizi.',vn:'Tôi có hai đứa con.'},
     {zh:'桌子上有两块手表。',py:'Zhuōzi shang yǒu liǎng kuài shǒubiǎo.',vn:'Trên bàn có hai chiếc đồng hồ.'},
   ],
   hanzi:[
     {c:'两',p:'liǎng',type:'独体字 · Chữ đơn',st:7,ord:'一→冂→𠆢→一→一',rad:'一 (nhất)',mean:'hai',
      tip:'Khác với 二 (số 2 khi đếm), 两 dùng khi đi kèm LƯỢNG TỪ: 两个, 两年, 两块.',
      cf:'辆 (liàng – "lượng từ xe", bộ 车)',w:'两年 / 两个 / 两天'},
   ]},
  {n:12,zh:'帮',py:'bāng',pos:'Động từ',vn:'giúp, giúp đỡ',em:'🤝',lesson:4,
   ex_zh:'这个工作是他帮我介绍的。',ex_py:'Zhège gōngzuò shì tā bāng wǒ jièshào de.',ex_vn:'Công việc này là do anh ấy giới thiệu cho tôi đấy.',
   exList:[
     {zh:'这个工作是他帮我介绍的。',py:'Zhège gōngzuò shì tā bāng wǒ jièshào de.',vn:'Công việc này là do anh ấy giới thiệu cho tôi đấy.'},
     {zh:'你能帮我一下吗？',py:'Nǐ néng bāng wǒ yíxià ma?',vn:'Bạn có thể giúp tôi một chút không?'},
     {zh:'谢谢你帮了我这么多。',py:'Xièxie nǐ bāngle wǒ zhème duō.',vn:'Cảm ơn bạn đã giúp tôi nhiều như vậy.'},
   ],
   hanzi:[
     {c:'帮',p:'bāng',type:'上下结构 · Trên-dưới',st:9,ord:'邦 (biến thể) → 巾 (cân)',rad:'巾 (cân – khăn)',mean:'giúp đỡ',
      tip:'Nghĩa gốc liên quan tới "đoàn thể, phe nhóm" (邦), sau mở rộng thành "cùng nhau GIÚP ĐỠ".',
      cf:'邦 (bāng – "quốc gia")',w:'帮忙 / 帮助 / 帮我'},
   ]},
  {n:13,zh:'介绍',py:'jièshào',pos:'Động từ',vn:'giới thiệu',em:'🙋',lesson:4,
   ex_zh:'我来介绍一下。',ex_py:'Wǒ lái jièshào yíxià.',ex_vn:'Để tôi giới thiệu một chút.',
   exList:[
     {zh:'我来介绍一下。',py:'Wǒ lái jièshào yíxià.',vn:'Để tôi giới thiệu một chút.'},
     {zh:'这个工作是他帮我介绍的。',py:'Zhège gōngzuò shì tā bāng wǒ jièshào de.',vn:'Công việc này là do anh ấy giới thiệu cho tôi đấy.'},
     {zh:'请介绍一下你自己。',py:'Qǐng jièshào yíxià nǐ zìjǐ.',vn:'Hãy tự giới thiệu về bản thân bạn.'},
   ],
   hanzi:[
     {c:'介',p:'jiè',type:'独体字 · Chữ đơn',st:4,ord:'人 (biến thể) → 丨 → 丨',rad:'人 (nhân)',mean:'ở giữa, trung gian',
      tip:'Hình người đứng giữa hai ranh giới → vai trò TRUNG GIAN, kết nối hai bên.',
      cf:'个 (gè)',w:'介绍 / 中介'},
     {c:'绍',p:'shào',type:'左右结构 · Trái-phải',st:8,ord:'纟(mịch) trái → 召 (triệu) phải',rad:'纟(mịch – tơ)',mean:'nối tiếp, giới thiệu',
      tip:'介 (kết nối) + 绍 (nối tiếp) = kết nối hai người với nhau = GIỚI THIỆU.',
      cf:'招 (zhāo – "chiêu", bộ 扌)',w:'介绍 / 绍兴'},
   ]},
];

const wuData = [
  {img:'🎂',label:'生日',py:'shēngrì',letter:'A'},
  {img:'📞',label:'接',py:'jiē',letter:'B'},
  {img:'☕',label:'非常',py:'fēicháng',letter:'C'},
  {img:'🤝',label:'帮',py:'bāng',letter:'D'},
  {img:'🙋',label:'介绍',py:'jièshào',letter:'E'},
  {img:'🌙',label:'晚上',py:'wǎnshang',letter:'F'},
];

const dialogData = [
  {scene:'在教室 · Trong lớp học',
   lines:[
     {sp:0,zh:'生日快乐！这是送给你的。',py:'Shēngrì kuàilè! Zhè shì sòng gěi nǐ de.',vn:'Sinh nhật vui vẻ! Đây là quà tặng bạn.'},
     {sp:1,zh:'是什么？是一本书吗？',py:'Shì shénme? Shì yì běn shū ma?',vn:'Cái gì thế? Là một quyển sách à?'},
     {sp:0,zh:'对，这本书是我写的。',py:'Duì, zhè běn shū shì wǒ xiě de.',vn:'Đúng vậy, quyển sách này là do tôi viết đấy.'},
     {sp:1,zh:'太谢谢你了！',py:'Tài xièxie nǐ le!',vn:'Cảm ơn bạn nhiều nhé!'},
   ]},
  {scene:'在家里 · Ở nhà',
   lines:[
     {sp:0,zh:'早上有你一个电话。',py:'Zǎoshang yǒu nǐ yí ge diànhuà.',vn:'Buổi sáng có một cuộc điện thoại gọi cho bạn đấy.'},
     {sp:1,zh:'电话是谁打的？',py:'Diànhuà shì shéi dǎ de?',vn:'Điện thoại là do ai gọi thế?'},
     {sp:0,zh:'不知道，是儿子接的。',py:'Bù zhīdào, shì érzi jiē de.',vn:'Không biết nữa, là con trai nghe máy.'},
     {sp:1,zh:'好，晚上我问一下儿子。',py:'Hǎo, wǎnshang wǒ wèn yíxià érzi.',vn:'Được rồi, tối nay tôi sẽ hỏi con trai một chút.'},
   ]},
  {scene:'在运动场 · Trên sân vận động',
   lines:[
     {sp:0,zh:'你喜欢踢足球吗？',py:'Nǐ xǐhuan tī zúqiú ma?',vn:'Bạn có thích đá bóng không?'},
     {sp:1,zh:'非常喜欢。',py:'Fēicháng xǐhuan.',vn:'Cực kỳ thích luôn.'},
     {sp:0,zh:'你是什么时候开始踢足球的？',py:'Nǐ shì shénme shíhou kāishǐ tī zúqiú de?',vn:'Bạn bắt đầu đá bóng từ khi nào thế?'},
     {sp:1,zh:'我11岁的时候开始踢足球，已经踢了十年了。',py:'Wǒ shíyī suì de shíhou kāishǐ tī zúqiú, yǐjīng tī le shí nián le.',vn:'Tôi bắt đầu đá bóng từ lúc 11 tuổi, đến nay đã đá được 10 năm rồi.'},
   ]},
  {scene:'在公司 · Ở công ty',
   lines:[
     {sp:0,zh:'你在这里工作多长时间了？',py:'Nǐ zài zhèlǐ gōngzuò duō cháng shíjiān le?',vn:'Bạn làm việc ở đây được bao lâu rồi?'},
     {sp:1,zh:'已经两年多了，我是2011年来的。',py:'Yǐjīng liǎng nián duō le, wǒ shì èrlíngyīyī nián lái de.',vn:'Đã hơn hai năm rồi, tôi đến đây từ năm 2011.'},
     {sp:0,zh:'你认识谢先生吗？',py:'Nǐ rènshi Xiè xiānsheng ma?',vn:'Bạn có quen biết ông Tạ không?'},
     {sp:1,zh:'认识，我们是大学同学。这个工作是他帮我介绍的。',py:'Rènshi, wǒmen shì dàxué tóngxué. Zhège gōngzuò shì tā bāng wǒ jièshào de.',vn:'Quen chứ, chúng tôi là bạn học đại học. Công việc này là do anh ấy giới thiệu cho tôi đấy.'},
   ]},
];

// Điền từ — có trộn từ vựng Bài 2 (起床/身体) và Bài 3 (买/送) để ôn tập tích lũy
const fillData = [
  {pre:'这本书是我',blank:'写',post:'的。',hint:'(viết)',ans:'写',exp:'是...的 nhấn mạnh chủ thể thực hiện hành động đã xảy ra'},
  {pre:'电话是谁打',blank:'的',post:'？',hint:'(trợ từ trong 是...的)',ans:'的',exp:'是...的 dùng hỏi/nhấn mạnh CHỦ THỂ của hành động đã qua'},
  {pre:'我11岁',blank:'的时候',post:'开始踢足球。',hint:'(khi..., lúc...)',ans:'的时候',exp:'…的时候 chỉ mốc thời gian xảy ra sự việc'},
  {pre:'已经两年',blank:'多',post:'了。',hint:'(hơn — số ước lượng)',ans:'多',exp:'Số + 多 + đơn vị = hơn... (ước lượng)'},
  {pre:'这个工作是他',blank:'帮',post:'我介绍的。',hint:'(giúp)',ans:'帮',exp:'帮 + người + động từ = giúp ai làm gì'},
  {pre:'这块手表不是我买的，是朋友',blank:'送',post:'我的。',hint:'(tặng — ôn từ Bài 3)',ans:'送',exp:'送 = tặng, đưa, giao (đã học ở Bài 3)'},
  {pre:'我每天六点起床，现在身体',blank:'非常',post:'好。',hint:'(vô cùng — ôn ngữ cảnh Bài 2)',ans:'非常',exp:'非常 = vô cùng, cực kỳ, nhấn mạnh mức độ cao'},
  {pre:'电影',blank:'已经',post:'开始了。',hint:'(đã)',ans:'已经',exp:'已经 + Động từ + 了 = đã... rồi'},
];

// Sắp xếp — câu khác Điền từ/Trắc nghiệm, có câu ôn từ vựng Bài 2/3
const sortData = [
  {words:['这','是','送','给','你','的','。'],ans:'这是送给你的。',audio:'这是送给你的。'},
  {words:['电话','是','儿子','接','的','。'],ans:'电话是儿子接的。',audio:'电话是儿子接的。'},
  {words:['已经','踢','了','十','年','了','。'],ans:'已经踢了十年了。',audio:'已经踢了十年了。'},
  {words:['这','件','手表','是','谁','送','的','？'],ans:'这件手表是谁送的？',audio:'这件手表是谁送的？'},
  {words:['我','每天','都','很','忙','。'],ans:'我每天都很忙。',audio:'我每天都很忙。'},
  {words:['这','个','工作','是','他','介绍','的','。'],ans:'这个工作是他介绍的。',audio:'这个工作是他介绍的。'},
];

const matchData = [
  {left:'生日快乐！',right:'这是送给你的。'},
  {left:'电话是谁打的？',right:'是儿子接的。'},
  {left:'你是什么时候开始踢足球的？',right:'我11岁的时候开始的。'},
  {left:'你在这里工作多长时间了？',right:'已经两年多了。'},
  {left:'你认识谢先生吗？',right:'认识，我们是大学同学。'},
  {left:'这个工作是谁介绍的？',right:'是他帮我介绍的。'},
];

// Trắc nghiệm — không audio; có câu dùng từ Bài 2 (身体/累) & Bài 3 (买/颜色) để đa dạng hoá
const mcData = [
  {q:'这本书是我写＿＿。',opts:['的','了','吗','呢'],ans:0},
  {q:'电话＿＿谁打的？',opts:['是','有','在','给'],ans:0},
  {q:'我11岁＿＿开始踢足球。',opts:['的时候','的时间','时候的','以后'],ans:0},
  {q:'已经两年＿＿了。',opts:['多','太','很','都'],ans:0},
  {q:'这个工作是他＿＿我介绍的。',opts:['帮','给','对','送'],ans:0},
  {q:'这块手表不是我买的，是朋友＿＿我的。',opts:['送','接','问','开始'],ans:0},
  {q:'电影＿＿开始了。',opts:['已经','非常','两','长'],ans:0},
  {q:'你在这里工作多＿＿时间了？',opts:['长','非常','已经','两'],ans:0},
  {q:'我每天都很忙，身体也有点儿＿＿。',opts:['累','漂亮','便宜','安静'],ans:0},
  {q:'谢谢你＿＿了我这么多。',opts:['帮','接','问','开始'],ans:0},
];

const speakingData = {
  t1:{
    intro:'Nhấn 🔊 nghe từng câu mẫu, đọc to theo cho tới khi trôi chảy. Chú ý thanh điệu và nhịp câu. Có thể đọc phân vai theo cặp.',
    models:[
      {zh:'生日快乐！这是送给你的。',py:'Shēngrì kuàilè! Zhè shì sòng gěi nǐ de.',vn:'Sinh nhật vui vẻ! Đây là quà tặng bạn.'},
      {zh:'电话是谁打的？',py:'Diànhuà shì shéi dǎ de?',vn:'Điện thoại là do ai gọi thế?'},
      {zh:'我11岁的时候开始踢足球。',py:'Wǒ shíyī suì de shíhou kāishǐ tī zúqiú.',vn:'Tôi bắt đầu đá bóng từ lúc 11 tuổi.'},
      {zh:'这个工作是他帮我介绍的。',py:'Zhège gōngzuò shì tā bāng wǒ jièshào de.',vn:'Công việc này là do anh ấy giới thiệu cho tôi.'},
    ],
  },
  t2:{
    intro:'Dùng khung câu cho sẵn, thay thế phần gạch chân bằng từ trong ô gợi ý để tạo câu mới. Nhấn 🔊 để nghe rồi nói to mỗi câu bạn tạo được.',
    drills:[
      {frame:'这是＿＿送给你的。',frame_py:'Zhè shì ___ sòng gěi nǐ de.',vn:'Đây là ＿＿ tặng bạn.',options:['我','他','妈妈'],samples:['这是我送给你的。','这是他送给你的。','这是妈妈送给你的。']},
      {frame:'我＿＿岁的时候开始踢足球。',frame_py:'Wǒ ___ suì de shíhou kāishǐ tī zúqiú.',vn:'Tôi lúc ＿＿ tuổi bắt đầu đá bóng.',options:['十','十一','十二'],samples:['我十岁的时候开始踢足球。','我十一岁的时候开始踢足球。','我十二岁的时候开始踢足球。']},
      {frame:'已经＿＿多了。',frame_py:'Yǐjīng ___ duō le.',vn:'Đã ＿＿ hơn rồi.',options:['两年','三个月','一个星期'],samples:['已经两年多了。','已经三个月多了。','已经一个星期多了。']},
      {frame:'这个工作是＿＿帮我介绍的。',frame_py:'Zhège gōngzuò shì ___ bāng wǒ jièshào de.',vn:'Công việc này là ＿＿ giới thiệu cho tôi.',options:['朋友','谢先生','同学'],samples:['这个工作是朋友帮我介绍的。','这个工作是谢先生帮我介绍的。','这个工作是同学帮我介绍的。']},
    ],
  },
  t3:{
    intro:'Không nhìn câu mẫu, tự dùng từ đã học để nói theo tình huống. Nói liền 2–3 câu. Ghi âm lại rồi nghe để tự sửa.',
    tasks:[
      {role:'🎁 Tình huống 1 — Tặng quà sinh nhật',
       guide:'Bạn tặng quà sinh nhật cho bạn mình, nói đây là quà gì và do ai làm/mua.',
       structure:['生日快乐！这是＿＿。','这是我＿＿的。'],
       sample:'生日快乐！这是一本书。这是我写的。',
       sample_vn:'Sinh nhật vui vẻ! Đây là một quyển sách. Đây là do tôi viết.'},
      {role:'⚽ Tình huống 2 — Kể về sở thích thể thao',
       guide:'Bạn kể cho bạn nghe mình thích môn thể thao gì và bắt đầu chơi từ khi nào.',
       structure:['我非常喜欢＿＿。','我＿＿岁的时候开始的。'],
       sample:'我非常喜欢踢足球。我十岁的时候开始的。',
       sample_vn:'Tôi cực kỳ thích đá bóng. Tôi bắt đầu từ lúc 10 tuổi.'},
      {role:'💼 Tình huống 3 — Hỏi về công việc và người quen',
       guide:'Bạn hỏi đồng nghiệp mới làm việc ở đây bao lâu rồi, và công việc do ai giới thiệu.',
       structure:['你在这里工作多＿＿时间了？','这个工作是谁＿＿你介绍的？'],
       sample:'你在这里工作多长时间了？这个工作是谁帮你介绍的？',
       sample_vn:'Bạn làm việc ở đây được bao lâu rồi? Công việc này là ai giới thiệu cho bạn?'},
    ],
  },
};
