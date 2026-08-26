// ══════════════════════════════════════════
// DATA — Bài 14: 你看过那个电影吗？
// ══════════════════════════════════════════
const vocabData = [
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

const dialogData = [
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

// Điền từ — 过/虽然……但是……/次
const fillData = [
  {pre:'你看',blank:'过',post:'那个电影吗？',hint:'(đã từng — kinh nghiệm)',ans:'过',exp:'Động từ + 过 = đã từng làm việc gì'},
  {pre:'看过，很有',blank:'意思',post:'。',hint:'(thú vị)',ans:'意思'},
  {pre:'我们今天晚上再去看一',blank:'次',post:'，怎么样？',hint:'(lần, lượt)',ans:'次'},
  {pre:'',blank:'虽然',post:'北京很远，但是你一定要去看看。',hint:'(mặc dù)',ans:'虽然',exp:'虽然……但是……dùng để nêu hai vế tương phản'},
  {pre:'我想去公园',blank:'玩儿',post:'，今天天气很晴。',hint:'(chơi)',ans:'玩儿'},
  {pre:'我学了大概一',blank:'百',post:'个小时了。',hint:'(trăm)',ans:'百'},
  {pre:'可以，',blank:'但是',post:'我女朋友也想一起去。',hint:'(nhưng)',ans:'但是'},
  {pre:'今天天气很',blank:'晴',post:'，我们去公园吧。',hint:'(quang, nắng đẹp)',ans:'晴'},
];

// Sắp xếp — khác Điền từ
const sortData = [
  {words:['你','看','过','那个','电影','吗','？'],ans:'你看过那个电影吗？',audio:'你看过那个电影吗？'},
  {words:['虽然','北京','很','远','，','但是','你','一定','要','去','看看','。'],ans:'虽然北京很远，但是你一定要去看看。',audio:'虽然北京很远，但是你一定要去看看。'},
  {words:['我们','今天','晚上','再','去','看','一次','，','怎么样','？'],ans:'我们今天晚上再去看一次，怎么样？',audio:'我们今天晚上再去看一次，怎么样？'},
  {words:['我','想','去','公园','玩儿','，','今天','天气','很','晴','。'],ans:'我想去公园玩儿，今天天气很晴。',audio:'我想去公园玩儿，今天天气很晴。'},
  {words:['我','学','了','大概','一百','个','小时','了','。'],ans:'我学了大概一百个小时了。',audio:'我学了大概一百个小时了。'},
  {words:['写','汉字','很','有意思','。'],ans:'写汉字很有意思。',audio:'写汉字很有意思。'},
];

const matchData = [
  {left:'你看过那个电影吗？',right:'看过，很有意思。'},
  {left:'我们今天晚上再去看一次，怎么样？',right:'可以，但是我女朋友也想一起去。'},
  {left:'听说你去过中国，还想再去吗？',right:'想啊，我去过一次，但是还没去过北京。'},
  {left:'周末你想做什么？',right:'我想去公园玩儿，今天天气很晴。'},
  {left:'你学了几年汉语了？',right:'我学了大概一百个小时了。'},
  {left:'虽然汉字很难，',right:'但是我很喜欢写汉字。'},
];

// Trắc nghiệm — không audio; trộn từ Bài 8/9/11/12 làm phương án nhiễu
const mcData = [
  {q:'你看＿＿那个电影吗？',opts:['过','着','了','的'],ans:0},
  {q:'看过，很有＿＿。',opts:['意思','时候','问题','事情'],ans:0},
  {q:'我们再去看一＿＿。',opts:['次','下','个','岁'],ans:0},
  {q:'＿＿北京很远，但是你一定要去看看。',opts:['虽然','因为','还是','可能'],ans:0},
  {q:'我想去公园＿＿。',opts:['玩儿','跳舞','上班','洗澡'],ans:0},
  {q:'我学了大概一＿＿个小时了。',opts:['百','千','两','几'],ans:0},
  {q:'今天天气很＿＿。',opts:['晴','阴','冷','近'],ans:0},
  {q:'可以，＿＿我女朋友也想去。',opts:['但是','所以','因为','可能'],ans:0},
  {q:'写汉字很＿＿。',opts:['有意思','没意思','有意见','有点儿'],ans:0},
  {q:'他去过中国一＿＿。',opts:['次','个','件','岁'],ans:0},
];

const speakingData = {
  t1:{
    intro:'Nhấn 🔊 nghe từng câu mẫu, đọc to theo cho tới khi trôi chảy. Chú ý thanh điệu và nhịp câu. Có thể đọc phân vai theo cặp.',
    models:[
      {zh:'你看过那个电影吗？',py:'Nǐ kànguo nàge diànyǐng ma?',vn:'Bạn đã từng xem bộ phim đó chưa?'},
      {zh:'我们今天晚上再去看一次，怎么样？',py:'Wǒmen jīntiān wǎnshang zài qù kàn yí cì, zěnmeyàng?',vn:'Tối nay chúng ta đi xem thêm một lần nữa, được không?'},
      {zh:'虽然北京很远，但是你一定要去看看。',py:'Suīrán Běijīng hěn yuǎn, dànshì nǐ yídìng yào qù kànkan.',vn:'Mặc dù Bắc Kinh xa, nhưng bạn nhất định phải đến xem thử.'},
      {zh:'我学了大概一百个小时了，写汉字很有意思。',py:'Wǒ xuéle dàgài yìbǎi ge xiǎoshí le, xiě Hànzì hěn yǒuyìsi.',vn:'Tôi đã học được khoảng một trăm tiếng rồi, viết chữ Hán rất thú vị.'},
    ],
  },
  t2:{
    intro:'Dùng khung câu cho sẵn, thay thế phần gạch chân bằng từ trong ô gợi ý để tạo câu mới. Nhấn 🔊 để nghe rồi nói to mỗi câu bạn tạo được.',
    drills:[
      {frame:'你看过＿＿吗？',frame_py:'Nǐ kànguo ___ ma?',vn:'Bạn đã từng xem/đến ＿＿ chưa?',options:['那个电影','这本书','中国'],samples:['你看过那个电影吗？','你看过这本书吗？','你看过中国吗？']},
      {frame:'我们再去＿＿一次。',frame_py:'Wǒmen zài qù ___ yí cì.',vn:'Chúng ta đi ＿＿ thêm một lần nữa.',options:['看','吃','玩儿'],samples:['我们再去看一次。','我们再去吃一次。','我们再去玩儿一次。']},
      {frame:'虽然＿＿，但是我很喜欢。',frame_py:'Suīrán ___, dànshì wǒ hěn xǐhuan.',vn:'Mặc dù ＿＿, nhưng tôi vẫn rất thích.',options:['汉字很难','天气很冷','工作很忙'],samples:['虽然汉字很难，但是我很喜欢。','虽然天气很冷，但是我很喜欢。','虽然工作很忙，但是我很喜欢。']},
      {frame:'今天天气很＿＿。',frame_py:'Jīntiān tiānqì hěn ___.',vn:'Hôm nay thời tiết rất ＿＿.',options:['晴','冷','热'],samples:['今天天气很晴。','今天天气很冷。','今天天气很热。']},
    ],
  },
  t3:{
    intro:'Không nhìn câu mẫu, tự dùng từ đã học để nói theo tình huống. Nói liền 2–3 câu. Ghi âm lại rồi nghe để tự sửa.',
    tasks:[
      {role:'🎬 Tình huống 1 — Rủ bạn đi xem phim lại',
       guide:'Bạn hỏi bạn mình đã xem phim đó chưa, rồi rủ đi xem lại.',
       structure:['你看过＿＿吗？','我们再去看一次，怎么样？'],
       sample:'你看过那个电影吗？我们今天晚上再去看一次，怎么样？',
       sample_vn:'Bạn đã từng xem bộ phim đó chưa? Tối nay chúng ta đi xem thêm một lần nữa, được không?'},
      {role:'🇨🇳 Tình huống 2 — Kể kinh nghiệm du lịch',
       guide:'Bạn kể đã từng đến Trung Quốc nhưng chưa đến Bắc Kinh.',
       structure:['我去过＿＿一次，但是还没去过＿＿。'],
       sample:'我去过中国一次，但是还没去过北京。',
       sample_vn:'Tôi đã từng đến Trung Quốc một lần, nhưng vẫn chưa đến Bắc Kinh.'},
      {role:'📚 Tình huống 3 — Nói về việc học tiếng Trung',
       guide:'Bạn chia sẻ đã học tiếng Trung bao lâu và cảm nhận về chữ Hán.',
       structure:['我学了大概＿＿个小时了。','虽然汉字很难，但是我很喜欢写汉字。'],
       sample:'我学了大概一百个小时了。虽然汉字很难，但是我很喜欢写汉字。',
       sample_vn:'Tôi đã học được khoảng một trăm tiếng rồi. Mặc dù chữ Hán khó, nhưng tôi rất thích viết chữ Hán.'},
    ],
  },
};
