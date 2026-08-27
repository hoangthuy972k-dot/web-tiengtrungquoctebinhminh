// ══════════════════════════════════════════
// DATA — Bài 14: 你看过那个电影吗？
// ══════════════════════════════════════════
var vocabData = [
  {n:1,zh:'过',py:'guo',pos:'Trợ từ động thái',vn:'đã từng (kinh nghiệm)',em:'✅',lesson:1,
   ex_zh:'你看过那个电影吗？',ex_py:'Nǐ kànguo nàge diànyǐng ma?',ex_vn:'Bạn đã từng xem bộ phim đó chưa?',
   exList:[
     {zh:'你看过那个电影吗？',py:'Nǐ kànguo nàge diànyǐng ma?',vn:'Bạn đã từng xem bộ phim đó chưa?'},
     {zh:'我去过中国。',py:'Wǒ qùguo Zhōngguó.',vn:'Tôi đã từng đến Trung Quốc.'},
     {zh:'她没吃过中国菜。',py:'Tā méi chīguo Zhōngguó cài.',vn:'Cô ấy chưa từng ăn món Trung Quốc.'},
   ],
   hanzi:[
     {c:'过',p:'guo / guò',type:'半包围结构 · Bán bao vây',st:6,ord:'辶 (sước) → 寸 (biến thể)',rad:'辶 (sước – đi)',mean:'đã từng; đi qua',
      tip:'Bộ 辶(đi) → đã ĐI QUA một việc gì đó = có kinh nghiệm về việc đó. Đã gặp nghĩa "đi qua" ở Bài 7 (走过).',
      cf:'边 (biān – "bên cạnh")',w:'看过 / 去过 / 吃过'},
   ]},
  {n:2,zh:'有意思',py:'yǒuyìsi',pos:'Tính từ',vn:'thú vị, hay',em:'😊',lesson:1,
   ex_zh:'看过，很有意思。',ex_py:'Kànguo, hěn yǒuyìsi.',ex_vn:'Đã xem rồi, rất thú vị.',
   exList:[
     {zh:'看过，很有意思。',py:'Kànguo, hěn yǒuyìsi.',vn:'Đã xem rồi, rất thú vị.'},
     {zh:'写汉字很有意思。',py:'Xiě Hànzì hěn yǒuyìsi.',vn:'Viết chữ Hán rất thú vị.'},
     {zh:'这本书很有意思。',py:'Zhè běn shū hěn yǒuyìsi.',vn:'Quyển sách này rất thú vị.'},
   ],
   hanzi:[
     {c:'意',p:'yì',type:'上下结构 · Trên-dưới',st:13,ord:'立 → 日 → 心',rad:'心 (tâm – trái tim)',mean:'ý, ý nghĩ',
      tip:'立(đứng) trên 日(mặt trời) trên 心(tim) → đứng suy nghĩ trong lòng = Ý NGHĨ.',
      cf:'音 (yīn – "âm thanh")',w:'意思 / 同意 / 意见'},
     {c:'思',p:'sī',type:'上下结构 · Trên-dưới',st:9,ord:'田 → 心',rad:'心 (tâm – trái tim)',mean:'suy nghĩ',
      tip:'田(ruộng, tượng trưng đầu óc) trên 心(tim) → SUY NGHĨ bằng cả đầu và tim.',
      cf:'田 (tián – "ruộng")',w:'意思 / 思考 / 有意思'},
   ]},
  {n:3,zh:'但是',py:'dànshì',pos:'Liên từ',vn:'nhưng',em:'🔀',lesson:2,
   ex_zh:'可以，但是我女朋友也想一起去。',ex_py:'Kěyǐ, dànshì wǒ nǚpéngyou yě xiǎng yìqǐ qù.',ex_vn:'Được, nhưng bạn gái tôi cũng muốn đi cùng.',
   exList:[
     {zh:'可以，但是我女朋友也想一起去。',py:'Kěyǐ, dànshì wǒ nǚpéngyou yě xiǎng yìqǐ qù.',vn:'Được, nhưng bạn gái tôi cũng muốn đi cùng.'},
     {zh:'我想去，但是没有时间。',py:'Wǒ xiǎng qù, dànshì méiyǒu shíjiān.',vn:'Tôi muốn đi, nhưng không có thời gian.'},
     {zh:'他很忙，但是他每天都去打球。',py:'Tā hěn máng, dànshì tā měitiān dōu qù dǎqiú.',vn:'Anh ấy rất bận, nhưng ngày nào cũng đi chơi bóng.'},
   ],
   hanzi:[
     {c:'但',p:'dàn',type:'左右结构 · Trái-phải',st:7,ord:'亻(nhân) trái → 旦 (đán) phải',rad:'亻(nhân – người)',mean:'nhưng, chỉ',
      tip:'亻(người) + 旦(bình minh) → người đứng lúc bình minh chỉ có MỘT MÌNH, ý "chỉ, nhưng".',
      cf:'担 (dān – "gánh vác")',w:'但是 / 不但'},
   ]},
  {n:4,zh:'虽然',py:'suīrán',pos:'Liên từ',vn:'mặc dù, tuy',em:'⚖️',lesson:2,
   ex_zh:'虽然北京很远，但是你一定要去看看。',ex_py:'Suīrán Běijīng hěn yuǎn, dànshì nǐ yídìng yào qù kànkan.',ex_vn:'Mặc dù Bắc Kinh xa, nhưng bạn nhất định phải đến xem thử.',
   exList:[
     {zh:'虽然北京很远，但是你一定要去看看。',py:'Suīrán Běijīng hěn yuǎn, dànshì nǐ yídìng yào qù kànkan.',vn:'Mặc dù Bắc Kinh xa, nhưng bạn nhất định phải đến xem thử.'},
     {zh:'虽然汉字很难，但是我很喜欢写汉字。',py:'Suīrán Hànzì hěn nán, dànshì wǒ hěn xǐhuan xiě Hànzì.',vn:'Mặc dù chữ Hán khó, nhưng tôi rất thích viết chữ Hán.'},
     {zh:'虽然下雨，但是他还是去了。',py:'Suīrán xiàyǔ, dànshì tā háishi qù le.',vn:'Mặc dù trời mưa, nhưng anh ấy vẫn đi.'},
   ],
   hanzi:[
     {c:'虽',p:'suī',type:'左右结构 · Trái-phải',st:9,ord:'虫 (trùng) → 口 phía trên',rad:'虫 (trùng – côn trùng)',mean:'tuy, mặc dù',
      tip:'口(miệng) trên 虫(côn trùng) → chỉ mang nghĩa ngữ pháp "TUY", không liên quan nghĩa gốc.',
      cf:'虫 (chóng – "côn trùng")',w:'虽然 / 虽说'},
     {c:'然',p:'rán',type:'左右结构 · Trái-phải',st:12,ord:'月(biến thể) → 犬(biến thể) → 灬',rad:'灬(hỏa – lửa)',mean:'vậy, như thế',
      tip:'Kết hợp thịt 月 + chó 犬 + lửa 灬 (nướng) → nghĩa gốc "đốt", nay dùng làm hậu tố "NHƯ VẬY".',
      cf:'燃 (rán – "đốt cháy")',w:'虽然 / 当然 / 自然'},
   ]},
  {n:5,zh:'次',py:'cì',pos:'Lượng từ',vn:'lần, lượt',em:'🔢',lesson:2,
   ex_zh:'我们今天晚上再去看一次，怎么样？',ex_py:'Wǒmen jīntiān wǎnshang zài qù kàn yí cì, zěnmeyàng?',ex_vn:'Tối nay chúng ta đi xem thêm một lần nữa, được không?',
   exList:[
     {zh:'我们今天晚上再去看一次，怎么样？',py:'Wǒmen jīntiān wǎnshang zài qù kàn yí cì, zěnmeyàng?',vn:'Tối nay chúng ta đi xem thêm một lần nữa, được không?'},
     {zh:'我去过一次中国。',py:'Wǒ qùguo yí cì Zhōngguó.',vn:'Tôi đã từng đến Trung Quốc một lần.'},
     {zh:'这是我第一次吃中国菜。',py:'Zhè shì wǒ dì-yī cì chī Zhōngguó cài.',vn:'Đây là lần đầu tiên tôi ăn món Trung Quốc.'},
   ],
   hanzi:[
     {c:'次',p:'cì',type:'左右结构 · Trái-phải',st:6,ord:'冫(băng) trái → 欠 (khiếm) phải',rad:'冫(băng – băng giá)',mean:'lần, lượt',
      tip:'Bộ 冫(băng) + 欠(thiếu, ngáp) → dùng đếm số LẦN lặp lại của một hành động.',
      cf:'冷 (lěng – "lạnh")',w:'一次 / 再次 / 这次'},
   ]},
  {n:6,zh:'玩儿',py:'wánr',pos:'Động từ',vn:'chơi, chơi đùa',em:'🎮',lesson:3,
   ex_zh:'我想去公园玩儿。',ex_py:'Wǒ xiǎng qù gōngyuán wánr.',ex_vn:'Tôi muốn đi công viên chơi.',
   exList:[
     {zh:'我想去公园玩儿。',py:'Wǒ xiǎng qù gōngyuán wánr.',vn:'Tôi muốn đi công viên chơi.'},
     {zh:'孩子们在外面玩儿。',py:'Háizimen zài wàimian wánr.',vn:'Bọn trẻ đang chơi ở bên ngoài.'},
     {zh:'周末我们一起去玩儿吧。',py:'Zhōumò wǒmen yìqǐ qù wánr ba.',vn:'Cuối tuần chúng ta cùng đi chơi nhé.'},
   ],
   hanzi:[
     {c:'玩',p:'wán',type:'左右结构 · Trái-phải',st:8,ord:'王 (vương) trái → 元 (nguyên) phải',rad:'王 (vương – ngọc)',mean:'chơi, chơi đùa',
      tip:'Bộ 王(ngọc) + 元(gốc, ban đầu) → thời xưa nghịch ngọc quý để giải trí = CHƠI.',
      cf:'现 (xiàn – "hiện tại", cũng bộ 王")',w:'玩儿 / 好玩儿'},
   ]},
  {n:7,zh:'晴',py:'qíng',pos:'Tính từ',vn:'trời quang, nắng đẹp',em:'☀️',lesson:3,
   ex_zh:'今天天气很晴。',ex_py:'Jīntiān tiānqì hěn qíng.',ex_vn:'Hôm nay trời rất quang đãng.',
   exList:[
     {zh:'今天天气很晴。',py:'Jīntiān tiānqì hěn qíng.',vn:'Hôm nay trời rất quang đãng.'},
     {zh:'明天是晴天。',py:'Míngtiān shì qíngtiān.',vn:'Ngày mai là trời nắng.'},
     {zh:'今天从阴天变成晴天了。',py:'Jīntiān cóng yīntiān biànchéng qíngtiān le.',vn:'Hôm nay từ trời âm u chuyển thành trời quang.'},
   ],
   hanzi:[
     {c:'晴',p:'qíng',type:'左右结构 · Trái-phải',st:12,ord:'日 (nhật) trái → 青 (thanh) phải',rad:'日 (nhật – mặt trời)',mean:'trời quang, nắng',
      tip:'Bộ 日(mặt trời) + 青(xanh trong) → bầu trời XANH TRONG có nắng = QUANG ĐÃNG.',
      cf:'情 (qíng – "tình cảm", bộ 忄")',w:'晴天 / 天晴了'},
   ]},
  {n:8,zh:'百',py:'bǎi',pos:'Số từ',vn:'trăm',em:'💯',lesson:3,
   ex_zh:'我学了大概一百个小时了。',ex_py:'Wǒ xuéle dàgài yìbǎi ge xiǎoshí le.',ex_vn:'Tôi đã học được khoảng một trăm tiếng rồi.',
   exList:[
     {zh:'我学了大概一百个小时了。',py:'Wǒ xuéle dàgài yìbǎi ge xiǎoshí le.',vn:'Tôi đã học được khoảng một trăm tiếng rồi.'},
     {zh:'这本书有三百页。',py:'Zhè běn shū yǒu sānbǎi yè.',vn:'Quyển sách này có ba trăm trang.'},
     {zh:'这件衣服一百块钱。',py:'Zhè jiàn yīfu yìbǎi kuài qián.',vn:'Chiếc áo này giá một trăm tệ.'},
   ],
   hanzi:[
     {c:'百',p:'bǎi',type:'上下结构 · Trên-dưới',st:6,ord:'一 → 白',rad:'白 (bạch – trắng)',mean:'trăm',
      tip:'一(một) trên 白(trăm cũng gần âm bạch) → số đếm TRĂM.',
      cf:'白 (bái – "màu trắng")',w:'一百 / 几百 / 百分之'},
   ]},
];

const wuData = [
  {img:'✅',label:'过',py:'guo',letter:'A'},
  {img:'🎮',label:'玩儿',py:'wánr',letter:'B'},
  {img:'☀️',label:'晴',py:'qíng',letter:'C'},
  {img:'💯',label:'百',py:'bǎi',letter:'D'},
  {img:'🔢',label:'次',py:'cì',letter:'E'},
  {img:'😊',label:'有意思',py:'yǒuyìsi',letter:'F'},
];

var dialogData = [
  {scene:'议看电影 · Rủ nhau xem phim',
   lines:[
     {sp:0,zh:'你看过那个电影吗？',py:'Nǐ kànguo nàge diànyǐng ma?',vn:'Bạn đã từng xem bộ phim đó chưa?'},
     {sp:1,zh:'看过，很有意思。',py:'Kànguo, hěn yǒuyìsi.',vn:'Xem rồi, rất thú vị.'},
     {sp:0,zh:'我们今天晚上再去看一次，怎么样？',py:'Wǒmen jīntiān wǎnshang zài qù kàn yí cì, zěnmeyàng?',vn:'Tối nay chúng ta đi xem thêm một lần nữa, được không?'},
     {sp:1,zh:'可以，但是我女朋友也想一起去。',py:'Kěyǐ, dànshì wǒ nǚpéngyou yě xiǎng yìqǐ qù.',vn:'Được, nhưng bạn gái tôi cũng muốn đi cùng.'},
   ]},
  {scene:'谈论中国旅行 · Nói về chuyến đi Trung Quốc',
   lines:[
     {sp:0,zh:'听说你去过中国，还想再去吗？',py:'Tīngshuō nǐ qùguo Zhōngguó, hái xiǎng zài qù ma?',vn:'Nghe nói bạn đã từng đến Trung Quốc, vẫn muốn đi nữa không?'},
     {sp:1,zh:'想啊，我去过一次，但是还没去过北京。',py:'Xiǎng a, wǒ qùguo yí cì, dànshì hái méi qùguo Běijīng.',vn:'Muốn chứ, tôi đã đi một lần rồi, nhưng vẫn chưa đến Bắc Kinh.'},
     {sp:0,zh:'虽然北京很远，但是你一定要去看看。',py:'Suīrán Běijīng hěn yuǎn, dànshì nǐ yídìng yào qù kànkan.',vn:'Mặc dù Bắc Kinh xa, nhưng bạn nhất định phải đến xem thử.'},
     {sp:1,zh:'好，下次有机会我一定去。',py:'Hǎo, xiàcì yǒu jīhuì wǒ yídìng qù.',vn:'Được, lần sau có cơ hội tôi nhất định sẽ đi.'},
   ]},
  {scene:'周末计划 · Kế hoạch cuối tuần',
   lines:[
     {sp:0,zh:'周末你想做什么？',py:'Zhōumò nǐ xiǎng zuò shénme?',vn:'Cuối tuần bạn muốn làm gì?'},
     {sp:1,zh:'我想去公园玩儿，今天天气很晴。',py:'Wǒ xiǎng qù gōngyuán wánr, jīntiān tiānqì hěn qíng.',vn:'Tôi muốn đi công viên chơi, hôm nay trời rất quang đãng.'},
     {sp:0,zh:'可以，但是你自己去吧，我还有很多事情要做。',py:'Kěyǐ, dànshì nǐ zìjǐ qù ba, wǒ hái yǒu hěn duō shìqing yào zuò.',vn:'Được, nhưng bạn tự đi nhé, tôi vẫn còn nhiều việc phải làm.'},
     {sp:1,zh:'好吧，那我自己去。',py:'Hǎo ba, nà wǒ zìjǐ qù.',vn:'Được thôi, vậy tôi tự đi vậy.'},
   ]},
  {scene:'学中文经验 · Kinh nghiệm học tiếng Trung',
   lines:[
     {sp:0,zh:'你学了几年汉语了？',py:'Nǐ xuéle jǐ nián Hànyǔ le?',vn:'Bạn đã học tiếng Trung được mấy năm rồi?'},
     {sp:1,zh:'我学了大概一百个小时了。',py:'Wǒ xuéle dàgài yìbǎi ge xiǎoshí le.',vn:'Tôi đã học được khoảng một trăm tiếng rồi.'},
     {sp:0,zh:'虽然汉字很难，但是我很喜欢写汉字。',py:'Suīrán Hànzì hěn nán, dànshì wǒ hěn xǐhuan xiě Hànzì.',vn:'Mặc dù chữ Hán khó, nhưng tôi rất thích viết chữ Hán.'},
     {sp:1,zh:'我也是，写汉字很有意思。',py:'Wǒ yě shì, xiě Hànzì hěn yǒuyìsi.',vn:'Tôi cũng vậy, viết chữ Hán rất thú vị.'},
   ]},
];

// ══════════════════════════════════════════
// PHẦN 1 · GHÉP TỪ (Collocation)
// ══════════════════════════════════════════
var matchData = [
  {left:'吃',right:'过'},
  {left:'有',right:'意思'},
  {left:'虽然',right:'但是'},
  {left:'去',right:'玩儿'},
  {left:'天气',right:'晴'},
  {left:'再',right:'一次'},
];

// ══════════════════════════════════════════
// PHẦN 2 · NGHE — tình huống MỚI: rủ nhau đi ăn nhà hàng Tứ Xuyên mới mở.
// ══════════════════════════════════════════
var listenData = [
  {audio:'你吃过四川菜吗？虽然很辣，但是很有意思，你一定要尝尝。',
   questions:[
     {q:'说话人觉得四川菜怎么样？',opts:['虽然辣但是很有意思','不好吃','太贵了','没有意思'],ans:0},
     {q:'说话人建议做什么？',opts:['尝尝四川菜','不要吃','去公园玩儿','学做菜'],ans:0},
   ]},
  {audio:'我们上次去吃了一次，这次想再去吃一次，你要不要一起去？',
   questions:[
     {q:'他们已经去吃过几次？',opts:['一次','两次','三次','没去过'],ans:0},
     {q:'这次想怎么样？',opts:['再去吃一次','不想去了','换一家店','去公园玩儿'],ans:0},
   ]},
  {audio:'今天天气很晴，我们吃完饭以后去公园玩儿吧，我大概学了一百个小时汉语了，想跟你练习说中文。',
   questions:[
     {q:'吃完饭以后要做什么？',opts:['去公园玩儿','回家睡觉','去上班','继续吃饭'],ans:0},
     {q:'他学了多少个小时汉语？',opts:['一百个小时','一千个小时','十个小时','不知道'],ans:0},
   ]},
];

// ══════════════════════════════════════════
// PHẦN 3a · ĐIỀN TỪ — hội thoại MỚI: rủ nhau đi ăn nhà hàng Tứ Xuyên mới mở
// ══════════════════════════════════════════
var fillData = [
  {pre:'你吃',blank:'过',post:'四川菜吗？',hint:'(đã từng — kinh nghiệm)',ans:'过',exp:'Động từ + 过 = đã từng làm việc gì.'},
  {pre:'吃过，',blank:'虽然',post:'很辣，但是很有意思。',hint:'(mặc dù)',ans:'虽然',exp:'虽然……但是……dùng để nêu hai vế tương phản.'},
  {pre:'吃过，虽然很辣，',blank:'但是',post:'很有意思，我很喜欢。',hint:'(nhưng)',ans:'但是'},
  {pre:'我们上次去吃了一',blank:'次',post:'，这次要不要再去？',hint:'(lần, lượt)',ans:'次'},
  {pre:'好啊，我们去',blank:'玩儿',post:'一下吧。',hint:'(chơi)',ans:'玩儿'},
  {pre:'今天天气很',blank:'晴',post:'，吃完饭正好去公园走走。',hint:'(trời quang, nắng đẹp)',ans:'晴'},
  {pre:'我学了大概一',blank:'百',post:'个小时汉语了。',hint:'(trăm)',ans:'百'},
  {pre:'用中文点菜很',blank:'有意思',post:'。',hint:'(thú vị)',ans:'有意思'},
];

// ══════════════════════════════════════════
// PHẦN 3b · SẮP XẾP
// ══════════════════════════════════════════
var sortData = [
  {words:['你','吃','过','四川菜','吗','？'],ans:'你吃过四川菜吗？',audio:'你吃过四川菜吗？'},
  {words:['虽然','很','辣','，','但是','很','好吃','。'],ans:'虽然很辣，但是很好吃。',audio:'虽然很辣，但是很好吃。'},
  {words:['我们','再','去','吃','一次','吧','。'],ans:'我们再去吃一次吧。',audio:'我们再去吃一次吧。'},
  {words:['今天','天气','很','晴','。'],ans:'今天天气很晴。',audio:'今天天气很晴。'},
  {words:['我们','去','公园','玩儿','吧','。'],ans:'我们去公园玩儿吧。',audio:'我们去公园玩儿吧。'},
  {words:['我','学','了','大概','一百','个','小时','汉语','。'],ans:'我学了大概一百个小时汉语。',audio:'我学了大概一百个小时汉语。'},
];

// ══════════════════════════════════════════
// PHẦN 3c · SỬA LỖI SAI
// ══════════════════════════════════════════
var errorFixData = [
  {wrong:'你过吃四川菜吗？',
   opts:['你吃过四川菜吗？','你过吃四川菜吗？','你吃四川菜过吗？','过你吃四川菜吗？'],ans:0,
   exp:'过 phải đứng NGAY SAU động từ (吃过), không đặt trước động từ.'},
  {wrong:'虽然很辣好吃但是。',
   opts:['虽然很辣，但是很好吃。','虽然很辣好吃但是。','但是很辣，虽然很好吃。','很辣虽然但是好吃。'],ans:0,
   exp:'但是 phải đứng ở ĐẦU vế thứ hai, không đặt ở cuối câu.'},
  {wrong:'但是很辣，虽然很好吃。',
   opts:['虽然很辣，但是很好吃。','但是很辣，虽然很好吃。','很好吃，但是虽然很辣。','虽然但是很辣很好吃。'],ans:0,
   exp:'虽然 mở đầu vế nhượng bộ, 但是 mở đầu vế khẳng định — không đảo ngược thứ tự hai liên từ.'},
  {wrong:'我们再去一次吃。',
   opts:['我们再去吃一次。','我们再去一次吃。','我们再吃去一次。','我们一次再去吃。'],ans:0,
   exp:'次 (lượng từ tần suất) đứng SAU động từ chính (去吃), không chen vào giữa hai động từ liên tiếp.'},
  {wrong:'我学了一百个小时了大概。',
   opts:['我学了大概一百个小时了。','我学了一百个小时了大概。','大概我学了一百个小时了。','我大概了学一百个小时了。'],ans:0,
   exp:'大概 (khoảng chừng) đứng TRƯỚC số lượng (一百个小时), không đặt ở cuối câu.'},
];

// ══════════════════════════════════════════
// PHẦN 4 · LUYỆN NÓI 3 TẦNG (tầng 3 có ghi âm + chấm điểm AI)
// ══════════════════════════════════════════
var speakingData = {
  intro:'Nhấn 🔊 để nghe câu hỏi, sau đó tự ghi âm câu trả lời của bạn. Ghi âm xong mới nên xem gợi ý/câu trả lời mẫu để đối chiếu.',
  questions:[
    {q_zh:'你吃过四川菜吗？',
     q_vn:'Bạn đã từng ăn món Tứ Xuyên chưa?',
     hint:'虽然很辣，但是很有意思。',
     sample:'吃过，虽然很辣，但是很有意思，你一定要尝尝。',
     sample_vn:'Đã ăn rồi, mặc dù cay nhưng rất thú vị, bạn nhất định phải thử.',
     note:'虽然……但是……dùng để nêu hai vế tương phản (cay nhưng vẫn ngon/thú vị).'},
    {q_zh:'上次我们去的那家餐厅，你还记得吗？',
     q_vn:'Quán ăn lần trước chúng ta đi ấy, bạn còn nhớ không?',
     hint:'我们上次去吃了一次，这次要不要再去吃一次？',
     sample:'记得，我们上次去吃了一次，这次要不要再去吃一次？',
     sample_vn:'Nhớ chứ, lần trước chúng ta đã đi ăn một lần, lần này có muốn đi ăn lại không?',
     note:'次 là lượng từ đếm số LẦN, đứng sau động từ.'},
    {q_zh:'今天天气怎么样？你平时喜欢做什么？',
     q_vn:'Hôm nay thời tiết thế nào? Bạn thường thích làm gì?',
     hint:'今天天气很晴，我们去公园玩儿吧。',
     sample:'今天天气很晴，我们去公园玩儿吧，我学了大概一百个小时汉语了。',
     sample_vn:'Hôm nay trời quang đãng, chúng ta đi công viên chơi đi. Tôi đã học tiếng Trung được khoảng một trăm tiếng rồi.',
     note:'百 (trăm) dùng để nói số lượng lớn, ví dụ số giờ học.'},
  ],
};

// ══════════════════════════════════════════
// LUYỆN DỊCH — dùng từ bài 14 + ôn lại từ bài 1-13 và HSK1
// ══════════════════════════════════════════
var translateData = [
  {vi:'Bạn đã từng xem bộ phim đó chưa?', zh:'你看过那个电影吗？', py:'Nǐ kànguo nàge diànyǐng ma?'},
  {vi:'Tuy chữ Hán có nhiều, nhưng tôi rất thích viết chữ Hán.', zh:'虽然汉字很多，但是我很喜欢写汉字。', py:'Suīrán Hànzì hěn duō, dànshì wǒ hěn xǐhuan xiě Hànzì.'},
  {vi:'Tôi đã từng đến Trung Quốc một lần.', zh:'我去过一次中国。', py:'Wǒ qùguo yí cì Zhōngguó.'},
  {vi:'Hôm nay trời quang, chúng ta đi chơi đi.', zh:'今天天气晴，我们去玩儿吧。', py:'Jīntiān tiānqì qíng, wǒmen qù wánr ba.'},
];
