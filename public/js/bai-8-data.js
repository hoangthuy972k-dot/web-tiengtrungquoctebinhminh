// ══════════════════════════════════════════
// DATA — Bài 8: 让我想想再告诉你
// ══════════════════════════════════════════
const vocabData = [
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

const dialogData = [
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

// Điền từ — trộn từ Bài 4 (开始), Bài 7 (到)
const fillData = [
  {pre:'我们下午去看电影',blank:'好吗',post:'？',hint:'(được không?)',ans:'好吗',exp:'...，好吗？dùng hỏi ý kiến một cách lịch sự'},
  {pre:'今天下午没有时间，明天下午',blank:'再',post:'去吧。',hint:'(rồi mới, hẵng)',ans:'再',exp:'再 chỉ hành động sẽ làm sau, ở tương lai'},
  {pre:'让我想想',blank:'再',post:'告诉你。',hint:'(rồi mới)',ans:'再',exp:'再 = sau đó mới (làm việc tiếp theo)'},
  {pre:'老师',blank:'让',post:'我给大卫打个电话。',hint:'(bảo, để)',ans:'让',exp:'让 mở đầu câu kiêm ngữ: A让B làm C'},
  {pre:'你',blank:'等',post:'我一下，好吗？',hint:'(chờ, đợi)',ans:'等',exp:'等 = chờ, đợi'},
  {pre:'那件黑的有点儿',blank:'贵',post:'。',hint:'(đắt)',ans:'贵',exp:'贵 = đắt'},
  {pre:'服务员，我房间的门打不',blank:'开',post:'了。',hint:'(mở — ôn từ Bài 4)',ans:'开',exp:'开 = mở (đã học trong 开始 ở Bài 4)'},
  {pre:'我姐姐已经',blank:'找',post:'到工作了。',hint:'(tìm — ghép với 到 đã học ở Bài 7)',ans:'找',exp:'找到 = tìm được (到 làm bổ ngữ, đã học ở Bài 7)'},
];

// Sắp xếp — khác câu Điền từ/Trắc nghiệm, ôn từ Bài 3/6
const sortData = [
  {words:['让','我','想想','再','告诉','你','。'],ans:'让我想想再告诉你。',audio:'让我想想再告诉你。'},
  {words:['你','等等','我','好吗','？'],ans:'你等等我好吗？',audio:'你等等我好吗？'},
  {words:['服务员','，','我','房间','的','门','打','不','开','了','。'],ans:'服务员，我房间的门打不开了。',audio:'服务员，我房间的门打不开了。'},
  {words:['你','看看','这','几','件','衣服','怎么样','？'],ans:'你看看这几件衣服怎么样？',audio:'你看看这几件衣服怎么样？'},
  {words:['我','姐姐','找到','一','个','新','工作','，','非常','忙','。'],ans:'我姐姐找到一个新工作，非常忙。',audio:'我姐姐找到一个新工作，非常忙。'},
  {words:['这','块','手表','的','颜色','很','白','。'],ans:'这块手表的颜色很白。',audio:'这块手表的颜色很白。'},
];

const matchData = [
  {left:'我们下午去看电影好吗？',right:'今天下午没有时间，明天再去吧。'},
  {left:'你想看什么电影？',right:'让我想想再告诉你。'},
  {left:'你等等我好吗？',right:'老师让我给大卫打个电话。'},
  {left:'大卫有什么事情吗？',right:'大卫病了，我想去看看。'},
  {left:'服务员，我房间的门打不开了。',right:'好的，我叫人去看看。'},
  {left:'这件红的呢？',right:'让我再看看。'},
];

// Trắc nghiệm — không audio; trộn từ Bài 2/4/5/6/7
const mcData = [
  {q:'我们下午去看电影，＿＿？',opts:['好吗','好不好吗','是不是','可以不可以'],ans:0},
  {q:'今天没有时间，明天＿＿去吧。',opts:['再','就','还','才'],ans:0},
  {q:'老师＿＿我给大卫打电话。',opts:['让','告诉','找','等'],ans:0},
  {q:'你＿＿我一下，好吗？',opts:['等','让','告诉','找'],ans:0},
  {q:'那件黑的有点儿＿＿，这件白的不错。',opts:['贵','慢','远','忙'],ans:0},
  {q:'服务员，我房间的门打不＿＿了。',opts:['开','到','懂','完'],ans:0},
  {q:'我姐姐每天坐公共汽车上班，路上要一个多＿＿。',opts:['小时','公斤','颜色','意思'],ans:0},
  {q:'这件衣服的颜色还＿＿，就买这件吧。',opts:['可以','贵','白','黑'],ans:0},
  {q:'我已经准备好了，我们＿＿走吧。',opts:['就','再','还','让'],ans:0},
  {q:'因为门打不开，＿＿我叫服务员来看看。',opts:['所以','因为','再','就'],ans:0},
];

const speakingData = {
  t1:{
    intro:'Nhấn 🔊 nghe từng câu mẫu, đọc to theo cho tới khi trôi chảy. Chú ý thanh điệu và nhịp câu. Có thể đọc phân vai theo cặp.',
    models:[
      {zh:'我们下午去看电影好吗？',py:'Wǒmen xiàwǔ qù kàn diànyǐng hǎoma?',vn:'Chiều nay chúng ta đi xem phim được không?'},
      {zh:'让我想想再告诉你。',py:'Ràng wǒ xiǎngxiang zài gàosu nǐ.',vn:'Để tôi suy nghĩ rồi nói cho bạn biết sau.'},
      {zh:'老师让我给大卫打个电话。',py:'Lǎoshī ràng wǒ gěi Dàwèi dǎ ge diànhuà.',vn:'Thầy giáo bảo tôi gọi điện cho David.'},
      {zh:'服务员，我房间的门打不开了。',py:'Fúwùyuán, wǒ fángjiān de mén dǎ bù kāi le.',vn:'Lễ tân ơi, cửa phòng tôi không mở được rồi.'},
    ],
  },
  t2:{
    intro:'Dùng khung câu cho sẵn, thay thế phần gạch chân bằng từ trong ô gợi ý để tạo câu mới. Nhấn 🔊 để nghe rồi nói to mỗi câu bạn tạo được.',
    drills:[
      {frame:'我们下午去＿＿好吗？',frame_py:'Wǒmen xiàwǔ qù ___ hǎoma?',vn:'Chiều nay chúng ta đi ＿＿ được không?',options:['看电影','游泳','打篮球'],samples:['我们下午去看电影好吗？','我们下午去游泳好吗？','我们下午去打篮球好吗？']},
      {frame:'让我＿＿再告诉你。',frame_py:'Ràng wǒ ___ zài gàosu nǐ.',vn:'Để tôi ＿＿ rồi nói cho bạn biết sau.',options:['想想','问问','看看'],samples:['让我想想再告诉你。','让我问问再告诉你。','让我看看再告诉你。']},
      {frame:'那件＿＿的有点儿贵。',frame_py:'Nà jiàn ___ de yǒudiǎnr guì.',vn:'Chiếc màu ＿＿ kia hơi đắt.',options:['黑','白','红'],samples:['那件黑的有点儿贵。','那件白的有点儿贵。','那件红的有点儿贵。']},
      {frame:'你＿＿我一下，好吗？',frame_py:'Nǐ ___ wǒ yíxià, hǎoma?',vn:'Bạn ＿＿ tôi một chút được không?',options:['等','帮','问'],samples:['你等我一下，好吗？','你帮我一下，好吗？','你问我一下，好吗？']},
    ],
  },
  t3:{
    intro:'Không nhìn câu mẫu, tự dùng từ đã học để nói theo tình huống. Nói liền 2–3 câu. Ghi âm lại rồi nghe để tự sửa.',
    tasks:[
      {role:'🎬 Tình huống 1 — Rủ bạn đi xem phim',
       guide:'Bạn rủ bạn mình đi xem phim, hỏi ý kiến lịch sự và hỏi xem bạn ấy muốn xem phim gì.',
       structure:['我们＿＿去看电影，好吗？','你想看什么＿＿？'],
       sample:'我们下午去看电影，好吗？你想看什么电影？',
       sample_vn:'Chiều nay chúng ta đi xem phim được không? Bạn muốn xem phim gì?'},
      {role:'🛎️ Tình huống 2 — Báo sự cố với lễ tân',
       guide:'Bạn báo cho lễ tân khách sạn biết cửa phòng bị hỏng và cho biết số phòng.',
       structure:['服务员，我房间的＿＿打不开了。','我住＿＿号房间。'],
       sample:'服务员，我房间的门打不开了。我住317号房间。',
       sample_vn:'Lễ tân ơi, cửa phòng tôi không mở được rồi. Tôi ở phòng 317.'},
      {role:'👗 Tình huống 3 — Nhờ bạn xem quần áo giúp',
       guide:'Bạn nhờ bạn mình xem giúp vài chiếc áo và nhận xét về màu sắc, giá cả.',
       structure:['你看看这几件衣服＿＿？','这件＿＿的有点儿贵。'],
       sample:'你看看这几件衣服怎么样？这件黑的有点儿贵。',
       sample_vn:'Bạn xem giúp tôi mấy chiếc áo này thế nào? Chiếc màu đen này hơi đắt.'},
    ],
  },
};
