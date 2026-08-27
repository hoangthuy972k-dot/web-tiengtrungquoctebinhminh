// ══════════════════════════════════════════
// DATA — Bài 5: 就买这件吧
// ══════════════════════════════════════════
var vocabData = [
  {n:1,zh:'外面',py:'wàimian',pos:'Danh từ',vn:'bên ngoài',em:'🌳',lesson:1,
   ex_zh:'我不想去外面吃。',ex_py:'Wǒ bù xiǎng qù wàimian chī.',ex_vn:'Tôi không muốn ra ngoài ăn.',
   exList:[
     {zh:'我不想去外面吃。',py:'Wǒ bù xiǎng qù wàimian chī.',vn:'Tôi không muốn ra ngoài ăn.'},
     {zh:'外面在下雨。',py:'Wàimian zài xià yǔ.',vn:'Bên ngoài đang mưa.'},
     {zh:'孩子在外面玩儿。',py:'Háizi zài wàimian wánr.',vn:'Bọn trẻ đang chơi bên ngoài.'},
   ],
   hanzi:[
     {c:'外',p:'wài',type:'左右结构 · Trái-phải',st:5,ord:'夕 (tịch) trái → 卜 (bốc) phải',rad:'夕 (tịch – buổi tối)',mean:'ngoài, bên ngoài',
      tip:'Đã học ở Bài 6 dạng đơn (门外) — 外 ghép với 面 (mặt) = phía mặt ngoài.',
      cf:'处 (chù – "nơi chốn")',w:'外面 / 外国 / 门外'},
     {c:'面',p:'miàn',type:'独体字 · Chữ đơn',st:9,ord:'一→フ→丨→ 三 ngang giữa',rad:'面 (diện – tự thành bộ)',mean:'mặt, mặt phẳng; mì',
      tip:'Hình khuôn mặt cách điệu → nghĩa "MẶT, bề mặt". 外 + 面 = mặt phía ngoài.',
      cf:'画 (huà – "vẽ")',w:'外面 / 里面 / 面条'},
   ]},
  {n:2,zh:'准备',py:'zhǔnbèi',pos:'Động từ',vn:'chuẩn bị',em:'📝',lesson:1,
   ex_zh:'你准备做什么呢？',ex_py:'Nǐ zhǔnbèi zuò shénme ne?',ex_vn:'Bạn chuẩn bị làm gì vậy?',
   exList:[
     {zh:'你准备做什么呢？',py:'Nǐ zhǔnbèi zuò shénme ne?',vn:'Bạn chuẩn bị làm gì vậy?'},
     {zh:'我准备去北京旅游。',py:'Wǒ zhǔnbèi qù Běijīng lǚyóu.',vn:'Tôi định đi Bắc Kinh du lịch.'},
     {zh:'她正在准备晚饭。',py:'Tā zhèngzài zhǔnbèi wǎnfàn.',vn:'Cô ấy đang chuẩn bị bữa tối.'},
   ],
   hanzi:[
     {c:'准',p:'zhǔn',type:'左右结构 · Trái-phải',st:10,ord:'冫(băng) trái → 隹 (chuy) phải',rad:'冫(băng – nước đá)',mean:'chuẩn, cho phép',
      tip:'Liên quan tới sự "chuẩn xác, sẵn sàng" cho việc gì đó.',
      cf:'淮 (huái – "sông Hoài", bộ 氵)',w:'准备 / 准时 / 标准'},
     {c:'备',p:'bèi',type:'独体字 · Chữ đơn',st:8,ord:'夂→田→丨',rad:'夂',mean:'chuẩn bị, đầy đủ',
      tip:'准 (chuẩn xác) + 备 (đầy đủ) = sắp xếp đầy đủ, sẵn sàng = CHUẨN BỊ.',
      cf:'各 (gè – "mỗi")',w:'准备 / 设备 / 备用'},
   ]},
  {n:3,zh:'就',py:'jiù',pos:'Phó từ',vn:'thì, liền, chính',em:'👉',lesson:1,
   ex_zh:'就做你爱吃的鱼吧。',ex_py:'Jiù zuò nǐ ài chī de yú ba.',ex_vn:'Vậy thì làm món cá anh thích ăn nhất đi.',
   exList:[
     {zh:'就做你爱吃的鱼吧。',py:'Jiù zuò nǐ ài chī de yú ba.',vn:'Vậy thì làm món cá anh thích ăn nhất đi.'},
     {zh:'我就住在这儿。',py:'Wǒ jiù zhù zài zhèr.',vn:'Tôi ở ngay đây thôi.'},
     {zh:'他一说我就明白了。',py:'Tā yì shuō wǒ jiù míngbai le.',vn:'Anh ấy vừa nói là tôi hiểu ngay.'},
   ],
   hanzi:[
     {c:'就',p:'jiù',type:'左右结构 · Trái-phải',st:12,ord:'京 (kinh) trái → 尤 (vưu) phải',rad:'尤 (vưu)',mean:'thì, liền; đến gần',
      tip:'京 (nơi cao lớn) + 尤 (đặc biệt) → tiến gần tới, hoàn thành NGAY, dùng để nối ý quyết định nhanh.',
      cf:'鹫 (jiù – "chim ưng")',w:'就是 / 就去 / 那就'},
   ]},
  {n:4,zh:'鱼',py:'yú',pos:'Danh từ',vn:'cá',em:'🐟',lesson:1,
   ex_zh:'我最喜欢吃鱼。',ex_py:'Wǒ zuì xǐhuan chī yú.',ex_vn:'Tôi thích ăn cá nhất.',
   exList:[
     {zh:'我最喜欢吃鱼。',py:'Wǒ zuì xǐhuan chī yú.',vn:'Tôi thích ăn cá nhất.'},
     {zh:'这条鱼很新鲜。',py:'Zhè tiáo yú hěn xīnxiān.',vn:'Con cá này rất tươi.'},
     {zh:'他不喜欢吃鱼。',py:'Tā bù xǐhuan chī yú.',vn:'Anh ấy không thích ăn cá.'},
   ],
   hanzi:[
     {c:'鱼',p:'yú',type:'独体字 · Tượng hình',st:8,ord:'ク→田→一→一→灬 (biến thể)',rad:'鱼 (ngư – tự thành bộ)',mean:'cá',
      tip:'Hình con cá với đầu, thân vảy và đuôi cách điệu → "CÁ".',
      cf:'渔 (yú – "đánh cá", thêm bộ 氵)',w:'吃鱼 / 鱼肉 / 金鱼'},
   ]},
  {n:5,zh:'件',py:'jiàn',pos:'Lượng từ',vn:'chiếc, cái, kiện (quần áo)',em:'👕',lesson:2,
   ex_zh:'这件衣服很漂亮。',ex_py:'Zhè jiàn yīfu hěn piàoliang.',ex_vn:'Chiếc áo này rất đẹp.',
   exList:[
     {zh:'这件衣服很漂亮。',py:'Zhè jiàn yīfu hěn piàoliang.',vn:'Chiếc áo này rất đẹp.'},
     {zh:'那件小的怎么样？',py:'Nà jiàn xiǎo de zěnmeyàng?',vn:'Chiếc nhỏ hơn kia thì sao?'},
     {zh:'我要买两件衣服。',py:'Wǒ yào mǎi liǎng jiàn yīfu.',vn:'Tôi muốn mua hai chiếc áo.'},
   ],
   hanzi:[
     {c:'件',p:'jiàn',type:'左右结构 · Trái-phải',st:6,ord:'亻(nhân) trái → 牛 (ngưu) phải',rad:'亻(nhân – người)',mean:'chiếc, kiện, việc',
      tip:'Người 亻 đứng cạnh con bò 牛 (vật có giá trị) → đơn vị đếm từng "KIỆN, CHIẾC" riêng lẻ.',
      cf:'伴 (bàn – "bạn đồng hành")',w:'一件 / 这件 / 件件'},
   ]},
  {n:6,zh:'还',py:'hái',pos:'Phó từ',vn:'vẫn, còn; tạm được',em:'👌',lesson:2,
   ex_zh:'颜色还可以。',ex_py:'Yánsè hái kěyǐ.',ex_vn:'Màu sắc cũng được.',
   exList:[
     {zh:'颜色还可以。',py:'Yánsè hái kěyǐ.',vn:'Màu sắc cũng được.'},
     {zh:'他还没回家。',py:'Tā hái méi huí jiā.',vn:'Anh ấy vẫn chưa về nhà.'},
     {zh:'你还想吃什么？',py:'Nǐ hái xiǎng chī shénme?',vn:'Bạn còn muốn ăn gì nữa không?'},
   ],
   hanzi:[
     {c:'还',p:'hái / huán',type:'半包围 · Bán bao (辶)',st:7,ord:'不 (bất) → 辶 (viết sau cùng)',rad:'辶 (sước – đi)',mean:'vẫn, còn (hái); trả lại (huán)',
      tip:'Bộ 辶 (đi) + 不 → ý "đi mà chưa dứt hẳn" = VẪN CÒN tiếp diễn.',
      cf:'环 (huán – "vòng", bộ 王)',w:'还可以 / 还是 / 还有'},
   ]},
  {n:7,zh:'可以',py:'kěyǐ',pos:'Tính từ / Trợ động từ',vn:'tạm được, có thể',em:'👍',lesson:2,
   ex_zh:'听和说还可以。',ex_py:'Tīng hé shuō hái kěyǐ.',ex_vn:'Nghe và nói cũng tạm được.',
   exList:[
     {zh:'听和说还可以。',py:'Tīng hé shuō hái kěyǐ.',vn:'Nghe và nói cũng tạm được.'},
     {zh:'这里可以吃饭吗？',py:'Zhèlǐ kěyǐ chīfàn ma?',vn:'Ở đây có thể ăn cơm không?'},
     {zh:'你可以帮我一下吗？',py:'Nǐ kěyǐ bāng wǒ yíxià ma?',vn:'Bạn có thể giúp tôi một chút không?'},
   ],
   hanzi:[
     {c:'可',p:'kě',type:'独体字 · Chữ đơn',st:5,ord:'一→丨→乛→一→亅',rad:'口 (khẩu)',mean:'có thể, được',
      tip:'Miệng 口 phát ra lời chấp thuận → biểu thị sự CHO PHÉP, ĐƯỢC.',
      cf:'河 (hé – "sông", thêm bộ 氵)',w:'可以 / 可能 / 可是'},
     {c:'以',p:'yǐ',type:'独体字 · Chữ đơn',st:4,ord:'丶→フ→丿→乀',rad:'人 (nhân – biến thể)',mean:'lấy, dùng để',
      tip:'可 (được phép) + 以 (dùng để) = được phép DÙNG ĐỂ làm gì = CÓ THỂ.',
      cf:'已 (yǐ – "đã", đã học ở Bài 4)',w:'可以 / 以后 / 以前'},
   ]},
  {n:8,zh:'不错',py:'búcuò',pos:'Tính từ',vn:'không tồi, khá tốt',em:'👏',lesson:2,
   ex_zh:'这件不错，就买这件吧。',ex_py:'Zhè jiàn búcuò, jiù mǎi zhè jiàn ba.',ex_vn:'Chiếc này đẹp đấy, quyết định mua chiếc này đi.',
   exList:[
     {zh:'这件不错，就买这件吧。',py:'Zhè jiàn búcuò, jiù mǎi zhè jiàn ba.',vn:'Chiếc này đẹp đấy, quyết định mua chiếc này đi.'},
     {zh:'这个主意不错。',py:'Zhège zhǔyi búcuò.',vn:'Ý này không tồi đấy.'},
     {zh:'今天天气不错。',py:'Jīntiān tiānqì búcuò.',vn:'Thời tiết hôm nay khá đẹp.'},
   ],
   hanzi:[
     {c:'不',p:'bù',type:'独体字 · Chữ đơn',st:4,ord:'一→丨→丿→丶',rad:'一 (nhất)',mean:'không',
      tip:'Từ phủ định cơ bản nhất trong tiếng Trung.',
      cf:'布 (bù – "vải", thêm bộ 巾)',w:'不错 / 不是 / 不去'},
     {c:'错',p:'cuò',type:'左右结构 · Trái-phải',st:13,ord:'钅(kim) trái → 昔 (tích) phải',rad:'钅(kim – kim loại)',mean:'sai, nhầm',
      tip:'不 (không) + 错 (sai) = KHÔNG SAI = khá tốt, không tồi.',
      cf:'措 (cuò – "biện pháp", bộ 扌)',w:'不错 / 错了 / 对错'},
   ]},
  {n:9,zh:'考试',py:'kǎoshì',pos:'Danh từ / Động từ',vn:'kỳ thi, thi',em:'📝',lesson:3,
   ex_zh:'是在想昨天的考试吗？',ex_py:'Shì zài xiǎng zuótiān de kǎoshì ma?',ex_vn:'Có phải đang nghĩ về kỳ thi hôm qua không?',
   exList:[
     {zh:'是在想昨天的考试吗？',py:'Shì zài xiǎng zuótiān de kǎoshì ma?',vn:'Có phải đang nghĩ về kỳ thi hôm qua không?'},
     {zh:'明天有一个汉语考试。',py:'Míngtiān yǒu yí ge Hànyǔ kǎoshì.',vn:'Ngày mai có một kỳ thi tiếng Hán.'},
     {zh:'这次考试很难。',py:'Zhècì kǎoshì hěn nán.',vn:'Kỳ thi lần này rất khó.'},
   ],
   hanzi:[
     {c:'考',p:'kǎo',type:'独体字 · Chữ đơn',st:6,ord:'土→ 一 →耂 (biến thể)',rad:'耂 (lão – biến thể)',mean:'thi, kiểm tra',
      tip:'Liên quan tới việc người lớn tuổi/có kinh nghiệm ra đề kiểm tra kiến thức.',
      cf:'老 (lǎo – "già", cùng bộ 耂)',w:'考试 / 考虑 / 高考'},
     {c:'试',p:'shì',type:'左右结构 · Trái-phải',st:8,ord:'讠(ngôn) trái → 式 (thức) phải',rad:'讠(ngôn – lời nói)',mean:'thử, thi',
      tip:'考 (kiểm tra) + 试 (thử) = kiểm tra thử năng lực = THI.',
      cf:'式 (shì – "kiểu, thức")',w:'考试 / 试一下 / 试穿'},
   ]},
  {n:10,zh:'意思',py:'yìsi',pos:'Danh từ',vn:'ý nghĩa, ý tứ',em:'💭',lesson:3,
   ex_zh:'很多字我都不知道是什么意思。',ex_py:'Hěn duō zì wǒ dōu bù zhīdào shì shénme yìsi.',ex_vn:'Nhiều chữ tôi còn chẳng biết nghĩa là gì.',
   exList:[
     {zh:'很多字我都不知道是什么意思。',py:'Hěn duō zì wǒ dōu bù zhīdào shì shénme yìsi.',vn:'Nhiều chữ tôi còn chẳng biết nghĩa là gì.'},
     {zh:'这个词是什么意思？',py:'Zhège cí shì shénme yìsi?',vn:'Từ này nghĩa là gì?'},
     {zh:'我明白你的意思了。',py:'Wǒ míngbai nǐ de yìsi le.',vn:'Tôi hiểu ý của bạn rồi.'},
   ],
   hanzi:[
     {c:'意',p:'yì',type:'上下结构 · Trên-dưới',st:13,ord:'立→日→心',rad:'心 (tâm – trái tim)',mean:'ý, ý định',
      tip:'Âm thanh 音 phát ra từ tâm 心 → điều trong lòng muốn nói = Ý.',
      cf:'音 (yīn – "âm thanh")',w:'意思 / 同意 / 意见'},
     {c:'思',p:'sī',type:'上下结构 · Trên-dưới',st:9,ord:'田→心',rad:'心 (tâm – trái tim)',mean:'suy nghĩ',
      tip:'田 (ruộng, đầu óc) trên 心 (tim) → dùng đầu và tim để SUY NGHĨ.',
      cf:'田 (tián – "ruộng")',w:'意思 / 思考 / 意思意思'},
   ]},
  {n:11,zh:'咖啡',py:'kāfēi',pos:'Danh từ',vn:'cà phê',em:'☕',lesson:4,
   ex_zh:'喝咖啡吗？',ex_py:'Hē kāfēi ma?',ex_vn:'Bạn uống cà phê không?',
   exList:[
     {zh:'喝咖啡吗？',py:'Hē kāfēi ma?',vn:'Bạn uống cà phê không?'},
     {zh:'我每天早上喝一杯咖啡。',py:'Wǒ měitiān zǎoshang hē yì bēi kāfēi.',vn:'Mỗi sáng tôi uống một ly cà phê.'},
     {zh:'这杯咖啡有点儿苦。',py:'Zhè bēi kāfēi yǒudiǎnr kǔ.',vn:'Ly cà phê này hơi đắng.'},
   ],
   hanzi:[
     {c:'咖',p:'kā',type:'左右结构 · Trái-phải',st:8,ord:'口 (khẩu) trái → 加 (gia) phải',rad:'口 (khẩu – miệng)',mean:'(phiên âm)',
      tip:'Bộ 口 (miệng) — chữ mượn âm để phiên âm từ nước ngoài "coffee", không mang nghĩa gốc.',
      cf:'加 (jiā – "thêm vào")',w:'咖啡 / 咖喱'},
     {c:'啡',p:'fēi',type:'左右结构 · Trái-phải',st:8,ord:'口 (khẩu) trái → 非 (phi) phải',rad:'口 (khẩu – miệng)',mean:'(phiên âm)',
      tip:'咖 + 啡 = phiên âm mượn từ "coffee" — cả hai đều có bộ 口 vì liên quan tới miệng (uống).',
      cf:'非 (fēi – đã học ở Bài 4: 非常)',w:'咖啡'},
   ]},
  {n:12,zh:'对',py:'duì',pos:'Giới từ',vn:'đối với',em:'🎯',lesson:4,
   ex_zh:'咖啡喝多了对身体不好。',ex_py:'Kāfēi hē duō le duì shēntǐ bù hǎo.',ex_vn:'Uống nhiều cà phê không tốt cho sức khỏe.',
   exList:[
     {zh:'咖啡喝多了对身体不好。',py:'Kāfēi hē duō le duì shēntǐ bù hǎo.',vn:'Uống nhiều cà phê không tốt cho sức khỏe.'},
     {zh:'运动对身体很好。',py:'Yùndòng duì shēntǐ hěn hǎo.',vn:'Vận động rất tốt cho sức khỏe.'},
     {zh:'他对我很好。',py:'Tā duì wǒ hěn hǎo.',vn:'Anh ấy đối xử với tôi rất tốt.'},
   ],
   hanzi:[
     {c:'对',p:'duì',type:'左右结构 · Trái-phải',st:5,ord:'又 → 寸',rad:'寸 (thốn – tấc)',mean:'đúng; đối với',
      tip:'Hai nửa đối xứng ghép khớp với nhau → nghĩa "ĐÚNG, phù hợp, hướng về phía".',
      cf:'又 (yòu – "lại, và")',w:'对不对 / 对身体好 / 对不起'},
   ]},
  {n:13,zh:'以后',py:'yǐhòu',pos:'Danh từ chỉ thời gian',vn:'sau này, sau khi',em:'⏭️',lesson:4,
   ex_zh:'以后我少喝一点儿。',ex_py:'Yǐhòu wǒ shǎo hē yìdiǎnr.',ex_vn:'Sau này tôi sẽ uống ít lại.',
   exList:[
     {zh:'以后我少喝一点儿。',py:'Yǐhòu wǒ shǎo hē yìdiǎnr.',vn:'Sau này tôi sẽ uống ít lại.'},
     {zh:'下课以后我们去踢足球。',py:'Xiàkè yǐhòu wǒmen qù tī zúqiú.',vn:'Sau khi tan học chúng ta đi đá bóng.'},
     {zh:'以后有时间再聊。',py:'Yǐhòu yǒu shíjiān zài liáo.',vn:'Sau này có thời gian nói chuyện tiếp.'},
   ],
   hanzi:[
     {c:'以',p:'yǐ',type:'独体字 · Chữ đơn',st:4,ord:'丶→フ→丿→乀',rad:'人 (nhân – biến thể)',mean:'lấy, từ',
      tip:'Đã học ở trên (可以) — kết hợp 后 (sau) tạo mốc thời gian "TỪ SAU đó".',
      cf:'已 (yǐ)',w:'以后 / 以前 / 可以'},
     {c:'后',p:'hòu',type:'半包围 · Bán bao',st:6,ord:'⺈→𠃌→口',rad:'⼑ (đao – biến thể)',mean:'sau, phía sau',
      tip:'Trái nghĩa với 前 (trước) — chỉ vị trí/thời gian ở phía SAU.',
      cf:'厚 (hòu – "dày")',w:'以后 / 后面 / 最后'},
   ]},
];

const wuData = [
  {img:'🐟',label:'鱼',py:'yú',letter:'A'},
  {img:'☕',label:'咖啡',py:'kāfēi',letter:'B'},
  {img:'👕',label:'件',py:'jiàn',letter:'C'},
  {img:'📝',label:'考试',py:'kǎoshì',letter:'D'},
  {img:'🌳',label:'外面',py:'wàimian',letter:'E'},
  {img:'📝',label:'准备',py:'zhǔnbèi',letter:'F'},
];

var dialogData = [
  {scene:'在家里 · Ở nhà',
   lines:[
     {sp:0,zh:'晚上我们去饭馆吃饭怎么样？',py:'Wǎnshang wǒmen qù fànguǎn chīfàn zěnmeyàng?',vn:'Tối nay chúng ta ra nhà hàng ăn cơm nhé?'},
     {sp:1,zh:'我不想去外面吃，我想在家吃。',py:'Wǒ bù xiǎng qù wàimian chī, wǒ xiǎng zài jiā chī.',vn:'Em không muốn ra ngoài ăn đâu, em muốn ăn ở nhà.'},
     {sp:0,zh:'那你准备做什么呢？',py:'Nà nǐ zhǔnbèi zuò shénme ne?',vn:'Thế em chuẩn bị nấu món gì nào?'},
     {sp:1,zh:'就做你爱吃的鱼吧。',py:'Jiù zuò nǐ ài chī de yú ba.',vn:'Vậy thì làm món cá anh thích ăn nhất đi.'},
   ]},
  {scene:'在商店 · Trong cửa hàng',
   lines:[
     {sp:0,zh:'帮我看一下这件衣服怎么样？',py:'Bāng wǒ kàn yíxià zhè jiàn yīfu zěnmeyàng?',vn:'Xem giúp tôi chiếc áo này thế nào?'},
     {sp:1,zh:'颜色还可以，就是有点儿大。',py:'Yánsè hái kěyǐ, jiùshì yǒudiǎnr dà.',vn:'Màu sắc cũng được, chỉ có điều hơi rộng một chút.'},
     {sp:0,zh:'这件小的怎么样？',py:'Zhè jiàn xiǎo de zěnmeyàng?',vn:'Chiếc nhỏ hơn này thì sao?'},
     {sp:1,zh:'这件不错，就买这件吧。',py:'Zhè jiàn búcuò, jiù mǎi zhè jiàn ba.',vn:'Chiếc này đẹp đấy, quyết định mua chiếc này đi.'},
   ]},
  {scene:'在教室 · Trong lớp học',
   lines:[
     {sp:0,zh:'今天去不去打球？',py:'Jīntiān qù bú qù dǎqiú?',vn:'Hôm nay có đi chơi bóng không?'},
     {sp:1,zh:'这两天有点儿累，不去打球了。',py:'Zhè liǎng tiān yǒudiǎnr lèi, bú qù dǎqiú le.',vn:'Hai ngày nay tôi hơi mệt, không đi chơi bóng nữa đâu.'},
     {sp:0,zh:'你在做什么呢？是在想昨天的考试吗？',py:'Nǐ zài zuò shénme ne? Shì zài xiǎng zuótiān de kǎoshì ma?',vn:'Bạn đang làm gì thế? Có phải đang nghĩ về kỳ thi hôm qua không?'},
     {sp:1,zh:'是啊，我觉得听和说还可以，读和写不好，很多字我都不知道是什么意思。',py:'Shì a, wǒ juéde tīng hé shuō hái kěyǐ, dú hé xiě bù hǎo, hěn duō zì wǒ dōu bù zhīdào shì shénme yìsi.',vn:'Đúng vậy, tôi thấy phần nghe và nói còn tạm được, còn đọc và viết thì rất tệ, nhiều chữ tôi còn chẳng biết nghĩa là gì.'},
   ]},
  {scene:'在公司 · Ở công ty',
   lines:[
     {sp:0,zh:'休息一下吧，喝咖啡吗？',py:'Xiūxi yíxià ba, hē kāfēi ma?',vn:'Nghỉ tay chút đi, bạn uống cà phê không?'},
     {sp:1,zh:'不喝了，我已经喝两杯了。',py:'Bù hē le, wǒ yǐjīng hē liǎng bēi le.',vn:'Không uống nữa đâu, tôi đã uống hai ly rồi.'},
     {sp:0,zh:'是呀，咖啡喝多了对身体不好。',py:'Shì ya, kāfēi hē duō le duì shēntǐ bù hǎo.',vn:'Đúng thế, uống nhiều cà phê không tốt cho sức khỏe đâu.'},
     {sp:1,zh:'以后我少喝一点儿，每天喝一杯。',py:'Yǐhòu wǒ shǎo hē yìdiǎnr, měitiān hē yì bēi.',vn:'Sau này tôi sẽ uống ít lại, mỗi ngày chỉ uống một ly thôi.'},
   ]},
];

// ══════════════════════════════════════════
// PHẦN 1 · GHÉP TỪ (Collocation)
// ══════════════════════════════════════════
const matchData = [
  {left:'准备',right:'考试'},
  {left:'有点儿',right:'累'},
  {left:'喝',right:'咖啡'},
  {left:'一件',right:'衣服'},
  {left:'对',right:'身体'},
  {left:'什么',right:'意思'},
];

// ══════════════════════════════════════════
// PHẦN 2 · NGHE — tình huống MỚI: chuẩn bị thi, mua áo, hẹn uống cà phê.
// Ôn lại 颜色/觉得 (Bài 1, 3).
// ══════════════════════════════════════════
var listenData = [
  {audio:'我在准备明天的考试，还没有准备好，有点儿累。',
   questions:[
     {q:'他在准备什么？',opts:['考试','工作','生日','旅游'],ans:0},
     {q:'他现在觉得怎么样？',opts:['有点儿累','很高兴','非常忙','身体不好'],ans:0},
   ]},
  {audio:'这件衣服颜色还可以，就是有点儿大，你觉得怎么样？',
   questions:[
     {q:'这件衣服怎么样？',opts:['颜色还可以，但是有点儿大','颜色不好看','太贵了','太小了'],ans:0},
   ]},
  {audio:'考试以后，我们一起去喝咖啡吧，我请客。',
   questions:[
     {q:'考试以后要做什么？',opts:['一起去喝咖啡','回家休息','去买衣服','去踢足球'],ans:0},
     {q:'谁请客？',opts:['我','朋友','老师','大家一起'],ans:0},
   ]},
];

// ══════════════════════════════════════════
// PHẦN 3a · ĐIỀN TỪ — hội thoại MỚI: chuẩn bị thi & mua áo mới
// ══════════════════════════════════════════
const fillData = [
  {pre:'你准备好了吗？还没',blank:'准备',post:'好呢，我有点儿累。',hint:'(chuẩn bị)',ans:'准备'},
  {pre:'你觉得这件衣服',blank:'可以',post:'吗？',hint:'(được, có thể)',ans:'可以'},
  {pre:'颜色',blank:'还',post:'可以，就是有点儿大。',hint:'(tạm, cũng)',ans:'还',exp:'还可以 = tạm được, không hẳn tốt cũng không tệ.'},
  {pre:'那你',blank:'就',post:'买那件小的吧。',hint:'(vậy thì)',ans:'就',exp:'就 dùng để chỉ một kết luận/quyết định logic tiếp theo.'},
  {pre:'好，',blank:'就',post:'买这件。',hint:'(luôn, thì)',ans:'就'},
  {pre:'考试',blank:'以后',post:'，我们去喝咖啡吧。',hint:'(sau khi, sau này)',ans:'以后'},
  {pre:'',blank:'对',post:'啊，我请客！',hint:'(đúng vậy)',ans:'对'},
  {pre:'这个字是什么',blank:'意思',post:'？',hint:'(ý nghĩa)',ans:'意思'},
];

// ══════════════════════════════════════════
// PHẦN 3b · SẮP XẾP
// ══════════════════════════════════════════
const sortData = [
  {words:['我','在','准备','明天','的','考试','。'],ans:'我在准备明天的考试。',audio:'我在准备明天的考试。'},
  {words:['这件','衣服','颜色','还','可以','。'],ans:'这件衣服颜色还可以。',audio:'这件衣服颜色还可以。'},
  {words:['我','有点儿','累','。'],ans:'我有点儿累。',audio:'我有点儿累。'},
  {words:['那','就','买','这件','小','的','吧','。'],ans:'那就买这件小的吧。',audio:'那就买这件小的吧。'},
  {words:['考试','以后','我们','去','喝','咖啡','。'],ans:'考试以后我们去喝咖啡。',audio:'考试以后我们去喝咖啡。'},
  {words:['这个','字','是','什么','意思','？'],ans:'这个字是什么意思？',audio:'这个字是什么意思？'},
];

// ══════════════════════════════════════════
// PHẦN 3c · SỬA LỖI SAI
// ══════════════════════════════════════════
const errorFixData = [
  {wrong:'我累有点儿。',
   opts:['我有点儿累。','我点儿有累。','有点儿我累。','我累点儿有。'],ans:0,
   exp:'有点儿 đứng NGAY TRƯỚC tính từ/động từ mang nghĩa tiêu cực nhẹ, không đặt sau như "một chút" trong tiếng Việt.'},
  {wrong:'颜色可以还。',
   opts:['颜色还可以。','可以颜色还。','还可以颜色。','颜色可以还了。'],ans:0,
   exp:'还可以 là cụm cố định "tạm được", 还 luôn đứng TRƯỚC 可以.'},
  {wrong:'买就这件吧。',
   opts:['就买这件吧。','买这件就吧。','这件就买吧。','买这就件吧。'],ans:0,
   exp:'就 (khi mang nghĩa quyết định) đứng TRƯỚC động từ chính, không đặt sau như "thì" trong tiếng Việt.'},
  {wrong:'以后考试，我们去喝咖啡。',
   opts:['考试以后，我们去喝咖啡。','以后考试，我们去喝咖啡。','我们以后考试去喝咖啡。','考试我们以后去喝咖啡。'],ans:0,
   exp:'以后 đứng SAU sự việc mốc thời gian: 考试以后 = sau khi thi, không đặt trước.'},
  {wrong:'这个字什么是意思？',
   opts:['这个字是什么意思？','这个字什么是意思？','什么字这个是意思？','这个是字什么意思？'],ans:0,
   exp:'什么意思 là cụm cố định, không tách rời: Chủ ngữ + 是 + 什么意思？'},
];

// ══════════════════════════════════════════
// PHẦN 4 · LUYỆN NÓI 3 TẦNG (tầng 3 có ghi âm + chấm điểm AI)
// ══════════════════════════════════════════
var speakingData = {
  intro:'Nhấn 🔊 để nghe câu hỏi, sau đó tự ghi âm câu trả lời của bạn. Ghi âm xong mới nên xem gợi ý/câu trả lời mẫu để đối chiếu.',
  questions:[
    {q_zh:'你觉得这件衣服怎么样？',
     q_vn:'Bạn thấy chiếc áo này thế nào?',
     hint:'颜色还可以，就是有点儿＿＿。',
     sample:'颜色还可以，就是有点儿大。',
     sample_vn:'Màu tạm được, chỉ có điều hơi rộng.',
     note:'还 + Tính từ (还可以/还不错) dùng để đánh giá ở mức TRUNG BÌNH, không quá khen cũng không chê.'},
    {q_zh:'你最近怎么样？',
     q_vn:'Dạo này bạn thế nào?',
     hint:'我在准备＿＿，有点儿累。',
     sample:'我在准备明天的考试，有点儿累。',
     sample_vn:'Tôi đang chuẩn bị cho kỳ thi ngày mai, hơi mệt một chút.',
     note:'有点儿 chỉ dùng với tính từ/tình trạng KHÔNG MONG MUỐN (mệt, đắt, khó...), không dùng với tính từ tích cực.'},
    {q_zh:'考试以后，我们去喝咖啡吧？',
     q_vn:'Sau khi thi xong, chúng ta đi uống cà phê nhé?',
     hint:'好啊，就这么定了！',
     sample:'好啊，就这么定了！',
     sample_vn:'Được đó, quyết định vậy nhé!',
     note:'就 dùng để chốt một quyết định: 就这么定了 = quyết định như vậy đi.'},
  ],
};
