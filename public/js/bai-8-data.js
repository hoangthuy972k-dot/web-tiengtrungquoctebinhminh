// ══════════════════════════════════════════
// DATA — Bài 8: 让我想想再告诉你
// ══════════════════════════════════════════
var vocabData = [
  {n:1,zh:'让',py:'ràng',pos:'Động từ',vn:'để, bảo, cho phép',em:'🙏',lesson:1,
   ex_zh:'让我想想。',ex_py:'Ràng wǒ xiǎngxiang.',ex_vn:'Để tôi suy nghĩ một chút.',
   exList:[
     {zh:'让我想想。',py:'Ràng wǒ xiǎngxiang.',vn:'Để tôi suy nghĩ một chút.'},
     {zh:'老师让我给大卫打个电话。',py:'Lǎoshī ràng wǒ gěi Dàwèi dǎ ge diànhuà.',vn:'Thầy giáo bảo tôi gọi điện thoại cho David.'},
     {zh:'请让一下。',py:'Qǐng ràng yíxià.',vn:'Làm ơn tránh ra một chút.'},
   ],
   hanzi:[
     {c:'让',p:'ràng',type:'左右结构 · Trái-phải',st:5,ord:'讠(ngôn) trái → 上 (thượng) phải',rad:'讠(ngôn – lời nói)',mean:'để, bảo, nhường',
      tip:'Bộ 讠(lời nói) → dùng lời nói khiến người khác làm gì, hoặc NHƯỜNG cho ai đó.',
      cf:'样 (yàng, kiểu dáng)',w:'让我 / 让开 / 谦让'},
   ]},
  {n:2,zh:'告诉',py:'gàosu',pos:'Động từ',vn:'nói cho biết, mách',em:'💬',lesson:1,
   ex_zh:'再告诉你。',ex_py:'Zài gàosu nǐ.',ex_vn:'Rồi nói cho bạn biết sau.',
   exList:[
     {zh:'再告诉你。',py:'Zài gàosu nǐ.',vn:'Rồi nói cho bạn biết sau.'},
     {zh:'请告诉我你的名字。',py:'Qǐng gàosu wǒ nǐ de míngzi.',vn:'Làm ơn cho tôi biết tên bạn.'},
     {zh:'我告诉他了。',py:'Wǒ gàosu tā le.',vn:'Tôi đã nói cho anh ấy biết rồi.'},
   ],
   hanzi:[
     {c:'告',p:'gào',type:'上下结构 · Trên-dưới',st:7,ord:'牛(biến thể) trên → 口 dưới',rad:'口 (khẩu – miệng)',mean:'báo, nói',
      tip:'Bộ 口 (miệng) → dùng lời BÁO cho người khác biết.',
      cf:'吿 (dạng cổ của 告)',w:'告诉 / 报告 / 广告'},
     {c:'诉',p:'sù',type:'左右结构 · Trái-phải',st:7,ord:'讠(ngôn) trái → 斥 (xích) phải',rad:'讠(ngôn – lời nói)',mean:'kể, nói ra',
      tip:'Bộ 讠(lời nói) → 告 + 诉 = nói ra cho ai đó biết = MÁCH, NÓI CHO BIẾT.',
      cf:'折 (zhé, gãy, bộ 扌)',w:'告诉 / 诉说'},
   ]},
  {n:3,zh:'等',py:'děng',pos:'Động từ',vn:'chờ, đợi',em:'⏳',lesson:2,
   ex_zh:'你等等我好吗？',ex_py:'Nǐ děngděng wǒ hǎoma?',ex_vn:'Bạn đợi tôi một chút được không?',
   exList:[
     {zh:'你等等我好吗？',py:'Nǐ děngděng wǒ hǎoma?',vn:'Bạn đợi tôi một chút được không?'},
     {zh:'我在门口等你。',py:'Wǒ zài ménkǒu děng nǐ.',vn:'Tôi đợi bạn ở cửa.'},
     {zh:'请等一下。',py:'Qǐng děng yíxià.',vn:'Làm ơn đợi một chút.'},
   ],
   hanzi:[
     {c:'等',p:'děng',type:'上下结构 · Trên-dưới',st:12,ord:'⺮(trúc) trên → 寺 (tự) dưới',rad:'⺮(trúc – tre)',mean:'chờ, đợi; cấp bậc',
      tip:'Xưa dùng thẻ tre 竹 xếp hàng theo thứ tự tại 寺 (nha môn) → phải CHỜ ĐỢI đến lượt.',
      cf:'待 (dài, chờ đợi, bộ 彳)',w:'等等 / 等一下 / 平等'},
   ]},
  {n:4,zh:'找',py:'zhǎo',pos:'Động từ',vn:'tìm, kiếm',em:'🔍',lesson:2,
   ex_zh:'我想找时间去看看。',ex_py:'Wǒ xiǎng zhǎo shíjiān qù kànkan.',ex_vn:'Tôi muốn tìm thời gian ghé thăm cậu ấy.',
   exList:[
     {zh:'我想找时间去看看。',py:'Wǒ xiǎng zhǎo shíjiān qù kànkan.',vn:'Tôi muốn tìm thời gian ghé thăm cậu ấy.'},
     {zh:'你在找什么？',py:'Nǐ zài zhǎo shénme?',vn:'Bạn đang tìm gì vậy?'},
     {zh:'我找不到我的手表了。',py:'Wǒ zhǎo bú dào wǒ de shǒubiǎo le.',vn:'Tôi tìm không thấy đồng hồ của mình.'},
   ],
   hanzi:[
     {c:'找',p:'zhǎo',type:'左右结构 · Trái-phải',st:7,ord:'扌(thủ) trái → 戈 (qua) phải',rad:'扌(thủ – tay)',mean:'tìm, kiếm',
      tip:'Bộ 扌(tay) → dùng tay lục lọi, TÌM KIẾM vật gì đó.',
      cf:'我 (wǒ, tôi, cùng chứa 戈)',w:'找到 / 找工作 / 找时间'},
   ]},
  {n:5,zh:'事情',py:'shìqing',pos:'Danh từ',vn:'sự việc, việc, chuyện',em:'📋',lesson:2,
   ex_zh:'大卫有什么事情吗？',ex_py:'Dàwèi yǒu shénme shìqing ma?',ex_vn:'David có chuyện gì vậy?',
   exList:[
     {zh:'大卫有什么事情吗？',py:'Dàwèi yǒu shénme shìqing ma?',vn:'David có chuyện gì vậy?'},
     {zh:'我今天有很多事情要做。',py:'Wǒ jīntiān yǒu hěn duō shìqing yào zuò.',vn:'Hôm nay tôi có nhiều việc phải làm.'},
     {zh:'这件事情很重要。',py:'Zhè jiàn shìqing hěn zhòngyào.',vn:'Việc này rất quan trọng.'},
   ],
   hanzi:[
     {c:'事',p:'shì',type:'独体字 · Chữ đơn',st:8,ord:'一→口→彐→亅',rad:'亅 (quyết)',mean:'việc, sự việc',
      tip:'Hình bàn tay cầm dụng cụ hành sự cách điệu → "VIỆC, CÔNG VIỆC".',
      cf:'吏 (lì, quan lại)',w:'事情 / 有事 / 工作的事'},
     {c:'情',p:'qíng',type:'左右结构 · Trái-phải',st:11,ord:'忄(tâm) trái → 青 (thanh) phải',rad:'忄(tâm – trái tim)',mean:'tình cảm; tình huống',
      tip:'Bộ 忄(tâm) → 事 + 情 = việc liên quan tới cảm xúc/tình huống cụ thể = SỰ VIỆC.',
      cf:'请 (qǐng, mời, bộ 讠)',w:'事情 / 心情 / 事情多'},
   ]},
  {n:6,zh:'服务员',py:'fúwùyuán',pos:'Danh từ',vn:'nhân viên phục vụ',em:'🛎️',lesson:3,
   ex_zh:'服务员，门打不开了。',ex_py:'Fúwùyuán, mén dǎ bù kāi le.',ex_vn:'Lễ tân ơi, cửa không mở được rồi.',
   exList:[
     {zh:'服务员，门打不开了。',py:'Fúwùyuán, mén dǎ bù kāi le.',vn:'Lễ tân ơi, cửa không mở được rồi.'},
     {zh:'服务员，请给我一杯水。',py:'Fúwùyuán, qǐng gěi wǒ yì bēi shuǐ.',vn:'Phục vụ ơi, cho tôi một ly nước.'},
     {zh:'这里的服务员很热情。',py:'Zhèlǐ de fúwùyuán hěn rèqíng.',vn:'Nhân viên phục vụ ở đây rất nhiệt tình.'},
   ],
   hanzi:[
     {c:'服',p:'fú',type:'左右结构 · Trái-phải',st:8,ord:'月(nhục) trái → 𠬝(phục) phải',rad:'月 (nhục – thịt/thân thể)',mean:'phục vụ; quần áo',
      tip:'Bộ 月(thân thể) → hành động chăm sóc thân thể người khác = PHỤC VỤ.',
      cf:'报 (bào, báo, Bài 4: 报纸)',w:'服务员 / 衣服 / 服务'},
     {c:'务',p:'wù',type:'上下结构 · Trên-dưới',st:5,ord:'夂→力',rad:'力 (lực – sức lực)',mean:'công việc, nhiệm vụ',
      tip:'Bộ 力(sức lực) → dồn sức làm CÔNG VIỆC, nhiệm vụ.',
      cf:'雾 (wù, sương mù, bộ 雨)',w:'服务 / 任务 / 事务'},
   ]},
  {n:7,zh:'白',py:'bái',pos:'Tính từ',vn:'trắng, màu trắng',em:'⚪',lesson:4,
   ex_zh:'这件白的有点儿长。',ex_py:'Zhè jiàn bái de yǒudiǎnr cháng.',ex_vn:'Chiếc màu trắng này hơi dài một chút.',
   exList:[
     {zh:'这件白的有点儿长。',py:'Zhè jiàn bái de yǒudiǎnr cháng.',vn:'Chiếc màu trắng này hơi dài một chút.'},
     {zh:'她喜欢穿白色的衣服。',py:'Tā xǐhuan chuān báisè de yīfu.',vn:'Cô ấy thích mặc quần áo màu trắng.'},
     {zh:'这只猫是白色的。',py:'Zhè zhī māo shì báisè de.',vn:'Con mèo này màu trắng.'},
   ],
   hanzi:[
     {c:'白',p:'bái',type:'独体字 · Tượng hình',st:5,ord:'丿→𠃌→一→一→一',rad:'白 (bạch – tự thành bộ)',mean:'trắng',
      tip:'Hình ánh mặt trời/hạt gạo trắng cách điệu → "TRẮNG".',
      cf:'百 (bǎi, trăm, thêm nét)',w:'白色 / 白天 / 明白'},
   ]},
  {n:8,zh:'黑',py:'hēi',pos:'Tính từ',vn:'đen, màu đen',em:'⚫',lesson:4,
   ex_zh:'那件黑的有点儿贵。',ex_py:'Nà jiàn hēi de yǒudiǎnr guì.',ex_vn:'Chiếc màu đen kia thì hơi đắt.',
   exList:[
     {zh:'那件黑的有点儿贵。',py:'Nà jiàn hēi de yǒudiǎnr guì.',vn:'Chiếc màu đen kia thì hơi đắt.'},
     {zh:'他的头发是黑色的。',py:'Tā de tóufa shì hēisè de.',vn:'Tóc anh ấy màu đen.'},
     {zh:'天已经黑了。',py:'Tiān yǐjīng hēi le.',vn:'Trời đã tối rồi.'},
   ],
   hanzi:[
     {c:'黑',p:'hēi',type:'上下结构 · Trên-dưới',st:12,ord:'里 (lý) trên → 灬 (hỏa) dưới',rad:'黑 (hắc – tự thành bộ)',mean:'đen, tối',
      tip:'Hình ống khói ám khói đen 灬 phía dưới → "ĐEN, TỐI".',
      cf:'墨 (mò, mực đen, thêm bộ 土)',w:'黑色 / 黑板 / 天黑了'},
   ]},
  {n:9,zh:'贵',py:'guì',pos:'Tính từ',vn:'đắt, sang trọng',em:'💎',lesson:4,
   ex_zh:'他的自行车很贵。',ex_py:'Tā de zìxíngchē hěn guì.',ex_vn:'Xe đạp của anh ấy rất đắt.',
   exList:[
     {zh:'他的自行车很贵。',py:'Tā de zìxíngchē hěn guì.',vn:'Xe đạp của anh ấy rất đắt.'},
     {zh:'这块手表太贵了。',py:'Zhè kuài shǒubiǎo tài guì le.',vn:'Chiếc đồng hồ này đắt quá.'},
     {zh:'这里的咖啡不贵。',py:'Zhèlǐ de kāfēi bú guì.',vn:'Cà phê ở đây không đắt.'},
   ],
   hanzi:[
     {c:'贵',p:'guì',type:'上下结构 · Trên-dưới',st:9,ord:'中→一→贝 (bối)',rad:'贝 (bối – vỏ sò, tiền cổ)',mean:'đắt, quý',
      tip:'Bộ 贝(tiền tệ cổ) → liên quan tới giá trị lớn = ĐẮT, QUÝ GIÁ.',
      cf:'柜 (guì, tủ, bộ 木)',w:'很贵 / 贵姓 / 名贵'},
   ]},
];

const wuData = [
  {img:'⏳',label:'等',py:'děng',letter:'A'},
  {img:'🔍',label:'找',py:'zhǎo',letter:'B'},
  {img:'⚪',label:'白',py:'bái',letter:'C'},
  {img:'⚫',label:'黑',py:'hēi',letter:'D'},
  {img:'💎',label:'贵',py:'guì',letter:'E'},
  {img:'🛎️',label:'服务员',py:'fúwùyuán',letter:'F'},
];

var dialogData = [
  {scene:'在教室 · Trong lớp học',
   lines:[
     {sp:0,zh:'我们下午去看电影好吗？',py:'Wǒmen xiàwǔ qù kàn diànyǐng hǎoma?',vn:'Chiều nay chúng ta cùng đi xem phim được không?'},
     {sp:1,zh:'今天下午没有时间，明天下午再去吧。',py:'Jīntiān xiàwǔ méiyǒu shíjiān, míngtiān xiàwǔ zài qù ba.',vn:'Chiều nay tôi không có thời gian, chiều mai hẵng đi nhé.'},
     {sp:0,zh:'你想看什么电影？',py:'Nǐ xiǎng kàn shénme diànyǐng?',vn:'Bạn muốn xem phim gì?'},
     {sp:1,zh:'让我想想再告诉你。',py:'Ràng wǒ xiǎngxiang zài gàosu nǐ.',vn:'Để tôi suy nghĩ một chút rồi nói cho bạn biết sau.'},
   ]},
  {scene:'在宿舍 · Trong phòng ký túc xá',
   lines:[
     {sp:0,zh:'外面天气很好，我们出去运动运动吧。',py:'Wàimiàn tiānqì hěn hǎo, wǒmen chūqu yùndòng yùndòng ba.',vn:'Bên ngoài thời tiết đẹp lắm, chúng ta ra ngoài vận động chút đi.'},
     {sp:1,zh:'你等等我好吗？老师让我给大卫打个电话。',py:'Nǐ děngděng wǒ hǎoma? Lǎoshī ràng wǒ gěi Dàwèi dǎ ge diànhuà.',vn:'Bạn đợi tôi một chút được không? Thầy giáo bảo tôi gọi điện thoại cho David.'},
     {sp:0,zh:'回来再打吧。大卫有什么事情吗？',py:'Huílái zài dǎ ba. Dàwèi yǒu shénme shìqing ma?',vn:'Về rồi hãy gọi. David có chuyện gì vậy?'},
     {sp:1,zh:'大卫病了，我想找时间去看看。',py:'Dàwèi bìng le, wǒ xiǎng zhǎo shíjiān qù kànkan.',vn:'David bị bệnh rồi, tôi muốn tìm thời gian ghé thăm cậu ấy.'},
   ]},
  {scene:'在宾馆的前台 · Tại quầy lễ tân khách sạn',
   lines:[
     {sp:0,zh:'服务员，我房间的门打不开了。',py:'Fúwùyuán, wǒ fángjiān de mén dǎ bù kāi le.',vn:'Lễ tân ơi, cửa phòng của tôi không mở được rồi.'},
     {sp:1,zh:'您住哪个房间？',py:'Nín zhù nǎge fángjiān?',vn:'Quý khách ở phòng nào ạ?'},
     {sp:0,zh:'317。',py:'Sān yāo qī.',vn:'Phòng 317.'},
     {sp:1,zh:'好的，我叫人去看看。',py:'Hǎode, wǒ jiào rén qù kànkan.',vn:'Dạ vâng, để em gọi người lên kiểm tra xem sao ạ.'},
   ]},
  {scene:'在商店 · Trong cửa hàng',
   lines:[
     {sp:0,zh:'你看看这几件衣服怎么样？',py:'Nǐ kànkan zhè jǐ jiàn yīfu zěnmeyàng?',vn:'Bạn xem giúp tôi mấy chiếc áo này thế nào?'},
     {sp:1,zh:'这件白的有点儿长，那件黑的有点儿贵。',py:'Zhè jiàn bái de yǒudiǎnr cháng, nà jiàn hēi de yǒudiǎnr guì.',vn:'Chiếc màu trắng này hơi dài một chút, còn chiếc màu đen kia thì hơi đắt.'},
     {sp:0,zh:'这件红的呢？这是今天新来的。',py:'Zhè jiàn hóng de ne? Zhè shì jīntiān xīn lái de.',vn:'Thế chiếc màu đỏ này thì sao? Chiếc này hôm nay mới về đấy.'},
     {sp:1,zh:'让我再看看。',py:'Ràng wǒ zài kànkan.',vn:'Để tôi xem lại lần nữa xem nào.'},
   ]},
];

// ══════════════════════════════════════════
// PHẦN 1 · GHÉP TỪ (Collocation)
// ══════════════════════════════════════════
const matchData = [
  {left:'打',right:'电话'},
  {left:'找',right:'时间'},
  {left:'等',right:'一下'},
  {left:'有点儿',right:'贵'},
  {left:'什么',right:'事情'},
  {left:'再',right:'看看'},
];

// ══════════════════════════════════════════
// PHẦN 2 · NGHE — tình huống MỚI: gọi lễ tân sửa phòng, mua áo hỏi màu.
// Ôn lại 有点儿 (Bài 5), 颜色/觉得 (Bài 1, 3).
// ══════════════════════════════════════════
const listenData = [
  {audio:'服务员，我房间的网不太好，可以让人来看看吗？',
   questions:[
     {q:'他遇到了什么事情？',opts:['房间的网不好','门打不开','没有热水','东西丢了'],ans:0},
     {q:'他想让服务员做什么？',opts:['让人来看看','换房间','退房','不知道'],ans:0},
   ]},
  {audio:'这件白的有点儿贵，那件黑的颜色还不错，你觉得怎么样？',
   questions:[
     {q:'白的怎么样？',opts:['有点儿贵','很便宜','很漂亮','不知道'],ans:0},
     {q:'黑的颜色怎么样？',opts:['还不错','不好看','太黑了','没有黑的'],ans:0},
   ]},
  {audio:'你等我一下，我找找钥匙，找到了再告诉你。',
   questions:[
     {q:'他在找什么？',opts:['钥匙','衣服','手表','报纸'],ans:0},
   ]},
];

// ══════════════════════════════════════════
// PHẦN 3a · ĐIỀN TỪ — hội thoại MỚI: gọi lễ tân sửa điều hoà, mua áo
// ══════════════════════════════════════════
const fillData = [
  {pre:'服务员，我房间的空调坏了，可以',blank:'让',post:'人来看看吗？',hint:'(để, bảo — câu kiêm ngữ)',ans:'让',exp:'让 + Người + Động từ = bảo/để ai đó làm gì.'},
  {pre:'好的，我先',blank:'找',post:'找是什么事情。',hint:'(tìm)',ans:'找'},
  {pre:'谢谢，那我先',blank:'等',post:'一下。',hint:'(đợi)',ans:'等'},
  {pre:'找到问题以后我',blank:'再',post:'告诉您。',hint:'(rồi mới, lại)',ans:'再',exp:'再 chỉ hành động xảy ra SAU một hành động khác, không dùng cho việc đã xảy ra rồi (đó là 又).'},
  {pre:'这件白的有点儿',blank:'贵',post:'。',hint:'(đắt)',ans:'贵'},
  {pre:'那件',blank:'黑',post:'的颜色还不错。',hint:'(đen)',ans:'黑'},
  {pre:'您有什么',blank:'事情',post:'吗？',hint:'(chuyện, việc)',ans:'事情'},
  {pre:'我想',blank:'告诉',post:'您一个好消息。',hint:'(nói cho biết)',ans:'告诉'},
];

// ══════════════════════════════════════════
// PHẦN 3b · SẮP XẾP
// ══════════════════════════════════════════
const sortData = [
  {words:['可以','让','人','来','看看','吗','？'],ans:'可以让人来看看吗？',audio:'可以让人来看看吗？'},
  {words:['我','先','找找','是','什么','事情','。'],ans:'我先找找是什么事情。',audio:'我先找找是什么事情。'},
  {words:['你','等','我','一下','。'],ans:'你等我一下。',audio:'你等我一下。'},
  {words:['找到','问题','以后','我','再','告诉','你','。'],ans:'找到问题以后我再告诉你。',audio:'找到问题以后我再告诉你。'},
  {words:['这件','白','的','有点儿','贵','。'],ans:'这件白的有点儿贵。',audio:'这件白的有点儿贵。'},
  {words:['那件','黑','的','颜色','还','不错','。'],ans:'那件黑的颜色还不错。',audio:'那件黑的颜色还不错。'},
];

// ══════════════════════════════════════════
// PHẦN 3c · SỬA LỖI SAI
// ══════════════════════════════════════════
const errorFixData = [
  {wrong:'让人可以来看看吗？',
   opts:['可以让人来看看吗？','让可以人来看看吗？','人可以让来看看吗？','可以人让来看看吗？'],ans:0,
   exp:'可以 (trợ động từ) đứng TRƯỚC 让, còn 让 + Người + Động từ tạo thành câu kiêm ngữ.'},
  {wrong:'我告诉再你。',
   opts:['我再告诉你。','我告诉再你。','再我告诉你。','我告诉你再。'],ans:0,
   exp:'再 (lại, rồi mới) đứng TRƯỚC động từ chính, không đặt giữa động từ và tân ngữ.'},
  {wrong:'你我等一下好吗？',
   opts:['你等我一下，好吗？','我你等一下，好吗？','等你我一下，好吗？','你等一下我，好吗？'],ans:0,
   exp:'Trật tự câu kiêm ngữ: Chủ ngữ + 等 + Tân ngữ (người) + 一下.'},
  {wrong:'我们去看电影好吗下午？',
   opts:['我们下午去看电影，好吗？','我们去看电影下午，好吗？','下午好吗我们去看电影？','我们下午好吗去看电影？'],ans:0,
   exp:'……好吗？ luôn đặt ở CUỐI CÂU để hỏi ý kiến, không chen vào giữa câu.'},
  {wrong:'我们运动吧。(muốn nói "vận động chút cho nhẹ nhàng")',
   opts:['我们运动运动吧。','我们运动运吧。','我们运运动吧。','我们动运动吧。'],ans:0,
   exp:'Lặp lại động từ 2 âm tiết theo dạng AB→ABAB (运动运动) để diễn tả hành động NHẸ NHÀNG, thử làm một chút.'},
];

// ══════════════════════════════════════════
// PHẦN 4 · LUYỆN NÓI 3 TẦNG (tầng 3 có ghi âm + chấm điểm AI)
// ══════════════════════════════════════════
const speakingData = {
  intro:'Nhấn 🔊 để nghe câu hỏi, sau đó tự ghi âm câu trả lời của bạn. Ghi âm xong mới nên xem gợi ý/câu trả lời mẫu để đối chiếu.',
  questions:[
    {q_zh:'您好，请问有什么可以帮您？',
     q_vn:'Xin chào, tôi có thể giúp gì cho bạn?',
     hint:'我房间的＿＿坏了，可以让人来看看吗？',
     sample:'我房间的空调坏了，可以让人来看看吗？',
     sample_vn:'Điều hòa phòng tôi hỏng rồi, có thể để người đến xem giúp không?',
     note:'让 + Người + Động từ dùng khi nhờ/bảo ai đó làm việc gì thay mình.'},
    {q_zh:'你在找什么呢？怎么这么着急？',
     q_vn:'Bạn đang tìm gì vậy? Sao có vẻ vội thế?',
     hint:'你等我一下，我找找＿＿。',
     sample:'你等我一下，我找找钥匙，找到了再告诉你。',
     sample_vn:'Bạn đợi tôi một chút, tôi tìm chìa khóa đã. Tìm thấy rồi tôi sẽ báo bạn.',
     note:'再 dùng để nói một hành động sẽ xảy ra SAU một hành động khác — khác với 就 (xảy ra ngay, ôn Bài 7).'},
    {q_zh:'你看看这两件衣服，白的怎么样？',
     q_vn:'Bạn xem giúp hai chiếc áo này, chiếc trắng thế nào?',
     hint:'白的有点儿＿＿，黑的颜色还不错。',
     sample:'白的有点儿贵，黑的颜色还不错。',
     sample_vn:'Chiếc trắng hơi đắt, chiếc đen thì màu tạm ổn.',
     note:'有点儿 (ôn Bài 5) chỉ dùng cho nhận xét mang tính KHÔNG MONG MUỐN như "hơi đắt".'},
  ],
};
