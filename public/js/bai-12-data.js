// ══════════════════════════════════════════
// DATA — Bài 12: 你穿得太少了
// ══════════════════════════════════════════
var vocabData = [
  {n:1,zh:'得',py:'de',pos:'Trợ từ kết cấu',vn:'dùng sau động từ để nối bổ ngữ trạng thái',em:'🔗',lesson:1,
   ex_zh:'你吃得太少了。',ex_py:'Nǐ chī de tài shǎo le.',ex_vn:'Bạn ăn ít quá.',
   exList:[
     {zh:'你吃得太少了。',py:'Nǐ chī de tài shǎo le.',vn:'Bạn ăn ít quá.'},
     {zh:'他说得很清楚。',py:'Tā shuō de hěn qīngchu.',vn:'Anh ấy nói rất rõ ràng.'},
     {zh:'我起得不早。',py:'Wǒ qǐ de bù zǎo.',vn:'Tôi dậy không sớm.'},
   ],
   hanzi:[
     {c:'得',p:'de / dé',type:'左右结构 · Trái-phải',st:11,ord:'彳(sách) trái → 旦+寸 phải',rad:'彳(sách – bước ngắn)',mean:'trợ từ nối bổ ngữ; đạt được',
      tip:'Bộ 彳(bước đi) → trên đường đi mà ĐẠT ĐƯỢC điều gì; đọc "de" khi nối động từ với phần miêu tả.',
      cf:'德 (dé – "đạo đức")',w:'V + 得 + Tính từ / 得到 / 觉得'},
   ]},
  {n:2,zh:'妻子',py:'qīzi',pos:'Danh từ',vn:'vợ',em:'👰',lesson:2,
   ex_zh:'我妻子比我做得好。',ex_py:'Wǒ qīzi bǐ wǒ zuò de hǎo.',ex_vn:'Vợ tớ nấu ngon hơn tớ nhiều.',
   exList:[
     {zh:'我妻子比我做得好。',py:'Wǒ qīzi bǐ wǒ zuò de hǎo.',vn:'Vợ tớ nấu ngon hơn tớ nhiều.'},
     {zh:'他和妻子一起去旅游。',py:'Tā hé qīzi yìqǐ qù lǚyóu.',vn:'Anh ấy cùng vợ đi du lịch.'},
     {zh:'我的妻子是老师。',py:'Wǒ de qīzi shì lǎoshī.',vn:'Vợ tôi là giáo viên.'},
   ],
   hanzi:[
     {c:'妻',p:'qī',type:'上下结构 · Trên-dưới',st:8,ord:'彐→女',rad:'女 (nữ – phụ nữ)',mean:'vợ',
      tip:'Bộ 女 (phụ nữ) ở dưới → người phụ nữ trong nhà = VỢ.',
      cf:'妾 (qiè – "thiếp")',w:'妻子 / 夫妻'},
   ]},
  {n:3,zh:'雪',py:'xuě',pos:'Danh từ',vn:'tuyết',em:'❄️',lesson:3,
   ex_zh:'下雪了，今天真冷。',ex_py:'Xià xuě le, jīntiān zhēn lěng.',ex_vn:'Tuyết rơi rồi, hôm nay lạnh thật.',
   exList:[
     {zh:'下雪了，今天真冷。',py:'Xià xuě le, jīntiān zhēn lěng.',vn:'Tuyết rơi rồi, hôm nay lạnh thật.'},
     {zh:'这里冬天常常下雪。',py:'Zhèlǐ dōngtiān chángcháng xià xuě.',vn:'Ở đây mùa đông thường xuyên có tuyết rơi.'},
     {zh:'外面的雪很大。',py:'Wàimian de xuě hěn dà.',vn:'Tuyết bên ngoài rất dày.'},
   ],
   hanzi:[
     {c:'雪',p:'xuě',type:'上下结构 · Trên-dưới',st:11,ord:'雨 (vũ) trên → 彐 dưới',rad:'雨 (vũ – mưa)',mean:'tuyết',
      tip:'Bộ 雨 (mưa) ở trên → trời lạnh khiến mưa đóng băng thành TUYẾT.',
      cf:'雨 (yǔ – "mưa", thiếu phần dưới)',w:'下雪 / 大雪 / 雪天'},
   ]},
  {n:4,zh:'零',py:'líng',pos:'Số từ',vn:'không, số không',em:'0️⃣',lesson:3,
   ex_zh:'有零下十度吧。',ex_py:'Yǒu líng xià shí dù ba.',ex_vn:'Phải âm 10 độ ấy nhỉ.',
   exList:[
     {zh:'有零下十度吧。',py:'Yǒu líng xià shí dù ba.',vn:'Phải âm 10 độ ấy nhỉ.'},
     {zh:'现在是零下五度。',py:'Xiànzài shì líng xià wǔ dù.',vn:'Bây giờ là âm 5 độ.'},
     {zh:'我的电话号码有两个零。',py:'Wǒ de diànhuà hàomǎ yǒu liǎng ge líng.',vn:'Số điện thoại của tôi có hai số 0.'},
   ],
   hanzi:[
     {c:'零',p:'líng',type:'上下结构 · Trên-dưới',st:13,ord:'雨 (vũ) → 令 (lệnh)',rad:'雨 (vũ – mưa)',mean:'số không, lẻ',
      tip:'Bộ 雨 (mưa) → mưa nhỏ giọt lẻ tẻ, dần hết → nghĩa "KHÔNG, số 0".',
      cf:'铃 (líng – "chuông", bộ 钅)',w:'零下 / 零钱 / 三十零五'},
   ]},
  {n:5,zh:'度',py:'dù',pos:'Lượng từ',vn:'độ (nhiệt độ)',em:'🌡️',lesson:3,
   ex_zh:'零下十度',ex_py:'líng xià shí dù',ex_vn:'âm 10 độ',
   exList:[
     {zh:'今天三十五度，太热了。',py:'Jīntiān sānshíwǔ dù, tài rè le.',vn:'Hôm nay 35 độ, nóng quá.'},
     {zh:'水一百度就开了。',py:'Shuǐ yìbǎi dù jiù kāi le.',vn:'Nước 100 độ là sôi.'},
     {zh:'今天的温度是十五度。',py:'Jīntiān de wēndù shì shíwǔ dù.',vn:'Nhiệt độ hôm nay là 15 độ.'},
   ],
   hanzi:[
     {c:'度',p:'dù',type:'半包围 · Bán bao (广)',st:9,ord:'广 (nghiễm) → 廿+又',rad:'广 (nghiễm – mái che)',mean:'độ, mức độ',
      tip:'Mái nhà 广 che một khoảng đo lường → đơn vị đo MỨC ĐỘ (nhiệt độ, góc độ).',
      cf:'渡 (dù – "vượt qua", bộ 氵)',w:'度 / 温度 / 态度'},
   ]},
  {n:6,zh:'穿',py:'chuān',pos:'Động từ',vn:'mặc (quần áo), đi (giày)',em:'👔',lesson:3,
   ex_zh:'你穿得太少了。',ex_py:'Nǐ chuān de tài shǎo le.',ex_vn:'Bạn mặc ít quá.',
   exList:[
     {zh:'你穿得太少了。',py:'Nǐ chuān de tài shǎo le.',vn:'Bạn mặc ít quá.'},
     {zh:'今天你穿这件红色的衣服吧。',py:'Jīntiān nǐ chuān zhè jiàn hóngsè de yīfu ba.',vn:'Hôm nay bạn mặc chiếc áo màu đỏ này đi.'},
     {zh:'他喜欢穿白色的鞋。',py:'Tā xǐhuan chuān báisè de xié.',vn:'Anh ấy thích đi giày màu trắng.'},
   ],
   hanzi:[
     {c:'穿',p:'chuān',type:'上下结构 · Trên-dưới',st:9,ord:'穴 (huyệt) → 牙 (nha)',rad:'穴 (huyệt – hang, lỗ)',mean:'mặc, xỏ qua',
      tip:'穴 (lỗ) + 牙 (răng, vật nhọn) → xỏ vật nhọn XUYÊN QUA lỗ → MẶC, ĐI (giày/quần áo).',
      cf:'空 (kōng – "trống rỗng")',w:'穿衣服 / 穿鞋 / 穿得多'},
   ]},
  {n:7,zh:'进',py:'jìn',pos:'Động từ',vn:'vào, đi vào',em:'🚪',lesson:3,
   ex_zh:'我们进房间吧。',ex_py:'Wǒmen jìn fángjiān ba.',ex_vn:'Chúng ta vào phòng đi.',
   exList:[
     {zh:'我们进房间吧。',py:'Wǒmen jìn fángjiān ba.',vn:'Chúng ta vào phòng đi.'},
     {zh:'请进！',py:'Qǐng jìn!',vn:'Mời vào!'},
     {zh:'他刚进公司工作。',py:'Tā gāng jìn gōngsī gōngzuò.',vn:'Anh ấy vừa mới vào công ty làm việc.'},
   ],
   hanzi:[
     {c:'进',p:'jìn',type:'半包围 · Bán bao (辶)',st:7,ord:'井 (tỉnh) → 辶 (viết sau cùng)',rad:'辶 (sước – đi)',mean:'vào, tiến vào',
      tip:'Bộ 辶 (đi) + 井 (giếng, lối vào) → bước chân TIẾN VÀO một không gian.',
      cf:'出 (chū – "ra", trái nghĩa, đã học Bài 2)',w:'进来 / 进房间 / 请进'},
   ]},
  {n:8,zh:'弟弟',py:'dìdi',pos:'Danh từ',vn:'em trai',em:'👦',lesson:4,
   ex_zh:'我弟弟让我帮他找个房子。',ex_py:'Wǒ dìdi ràng wǒ bāng tā zhǎo ge fángzi.',ex_vn:'Em trai tớ nhờ tớ tìm giúp nó một căn nhà.',
   exList:[
     {zh:'我弟弟让我帮他找个房子。',py:'Wǒ dìdi ràng wǒ bāng tā zhǎo ge fángzi.',vn:'Em trai tớ nhờ tớ tìm giúp nó một căn nhà.'},
     {zh:'我弟弟比我小两岁。',py:'Wǒ dìdi bǐ wǒ xiǎo liǎng suì.',vn:'Em trai tôi nhỏ hơn tôi 2 tuổi.'},
     {zh:'弟弟在学校学习汉语。',py:'Dìdi zài xuéxiào xuéxí Hànyǔ.',vn:'Em trai đang học tiếng Trung ở trường.'},
   ],
   hanzi:[
     {c:'弟',p:'dì',type:'独体字 · Chữ đơn',st:7,ord:'丷→丨→一→㇃→一→一',rad:'弓 (cung, biến thể)',mean:'em trai',
      tip:'Hình sợi dây quấn quanh cây gậy theo thứ tự dưới lên → chỉ THỨ BẬC dưới trong nhà = em trai.',
      cf:'第 (dì – "thứ tự", đã học Bài 9)',w:'弟弟 / 兄弟'},
   ]},
  {n:9,zh:'近',py:'jìn',pos:'Tính từ',vn:'gần',em:'📍',lesson:4,
   ex_zh:'他也希望能住得近一点儿。',ex_py:'Tā yě xīwàng néng zhù de jìn yìdiǎnr.',ex_vn:'Nó cũng hy vọng có thể ở gần hơn một chút.',
   exList:[
     {zh:'他也希望能住得近一点儿。',py:'Tā yě xīwàng néng zhù de jìn yìdiǎnr.',vn:'Nó cũng hy vọng có thể ở gần hơn một chút.'},
     {zh:'我家离学校很近。',py:'Wǒ jiā lí xuéxiào hěn jìn.',vn:'Nhà tôi cách trường học rất gần.'},
     {zh:'这儿离公司近吗？',py:'Zhèr lí gōngsī jìn ma?',vn:'Ở đây cách công ty có gần không?'},
   ],
   hanzi:[
     {c:'近',p:'jìn',type:'半包围 · Bán bao (辶)',st:7,ord:'斤 (cân) → 辶 (viết sau cùng)',rad:'辶 (sước – đi)',mean:'gần',
      tip:'Bộ 辶 (đi) + 斤 (rìu, khoảng cách ngắn) → đi một đoạn NGẮN là tới = GẦN.',
      cf:'远 (yuǎn – trái nghĩa, đã học Bài 7)',w:'很近 / 附近 / 住得近'},
   ]},
];

const wuData = [
  {img:'❄️',label:'雪',py:'xuě',letter:'A'},
  {img:'👔',label:'穿',py:'chuān',letter:'B'},
  {img:'🚪',label:'进',py:'jìn',letter:'C'},
  {img:'👦',label:'弟弟',py:'dìdi',letter:'D'},
  {img:'👰',label:'妻子',py:'qīzi',letter:'E'},
  {img:'🌡️',label:'度',py:'dù',letter:'F'},
];

var dialogData = [
  {scene:'在教室 · Giờ giấc sinh hoạt',
   lines:[
     {sp:0,zh:'你每天早上几点起床？',py:'Nǐ měitiān zǎoshang jǐ diǎn qǐchuáng?',vn:'Mỗi sáng bạn thức dậy lúc mấy giờ?'},
     {sp:1,zh:'六点多。',py:'Liù diǎn duō.',vn:'Hơn 6 giờ một chút.'},
     {sp:0,zh:'你比我早起一个小时。',py:'Nǐ bǐ wǒ zǎo qǐ yí ge xiǎoshí.',vn:'Bạn dậy sớm hơn tớ một tiếng cơ à.'},
     {sp:1,zh:'我睡得也早，我每天晚上十点就睡觉。早睡早起身体好。',py:'Wǒ shuì de yě zǎo, wǒ měitiān wǎnshang shí diǎn jiù shuìjiào. Zǎo shuì zǎo qǐ shēntǐ hǎo.',vn:'Tớ ngủ cũng sớm nữa, mỗi tối 10 giờ tớ đã đi ngủ rồi. Ngủ sớm dậy sớm tốt cho sức khỏe.'},
   ]},
  {scene:'在朋友家 · Mời khách ăn cơm',
   lines:[
     {sp:0,zh:'再来点儿米饭吧，你吃得太少了。',py:'Zài lái diǎnr mǐfàn ba, nǐ chī de tài shǎo le.',vn:'Ăn thêm chút cơm nữa đi, bạn ăn ít quá.'},
     {sp:1,zh:'不少了，今天吃得很好，太谢谢你了。',py:'Bù shǎo le, jīntiān chī de hěn hǎo, tài xièxie nǐ le.',vn:'Không ít đâu, hôm nay tớ ăn ngon lắm, cảm ơn bạn rất nhiều nhé.'},
     {sp:0,zh:'你做饭做得怎么样？',py:'Nǐ zuò fàn zuò de zěnmeyàng?',vn:'Bạn nấu ăn thế nào?'},
     {sp:1,zh:'不怎么样，我妻子比我做得好。',py:'Bù zěnmeyàng, wǒ qīzi bǐ wǒ zuò de hǎo.',vn:'Không ra làm sao cả, vợ tớ nấu ngon hơn tớ nhiều.'},
   ]},
  {scene:'在家门口 · Trời tuyết lạnh',
   lines:[
     {sp:0,zh:'下雪了，今天真冷。',py:'Xià xuě le, jīntiān zhēn lěng.',vn:'Tuyết rơi rồi, hôm nay lạnh thật.'},
     {sp:1,zh:'有零下十度吧。',py:'Yǒu líng xià shí dù ba.',vn:'Phải âm 10 độ ấy nhỉ.'},
     {sp:0,zh:'是啊，你穿得太少了，我们进房间吧。',py:'Shì a, nǐ chuān de tài shǎo le, wǒmen jìn fángjiān ba.',vn:'Đúng thế, bạn mặc ít quá, chúng ta vào phòng đi.'},
     {sp:1,zh:'好吧。',py:'Hǎo ba.',vn:'Được thôi.'},
   ]},
  {scene:'在家里 · Nhờ tìm nhà',
   lines:[
     {sp:0,zh:'你在忙什么呢？',py:'Nǐ zài máng shénme ne?',vn:'Bạn đang bận gì thế?'},
     {sp:1,zh:'我弟弟让我帮他找个房子。现在家离公司住得远，真的很累。',py:'Wǒ dìdi ràng wǒ bāng tā zhǎo ge fángzi. Xiànzài jiā lí gōngsī zhù de yuǎn, zhēnde hěn lèi.',vn:'Em trai tớ nhờ tớ tìm giúp nó một căn nhà. Hiện tại nhà nó ở cách xa công ty quá, đi lại mệt lắm.'},
     {sp:0,zh:'是啊，他也希望能住得近一点儿。',py:'Shì a, tā yě xīwàng néng zhù de jìn yìdiǎnr.',vn:'Ừ đúng vậy, nó cũng hy vọng có thể ở gần hơn một chút.'},
   ]},
];

// ══════════════════════════════════════════
// PHẦN 1 · GHÉP TỪ (Collocation)
// ══════════════════════════════════════════
const matchData = [
  {left:'穿',right:'衣服'},
  {left:'进',right:'房间'},
  {left:'下',right:'雪'},
  {left:'零',right:'下'},
  {left:'近',right:'一点儿'},
  {left:'得',right:'很好'},
];

// ══════════════════════════════════════════
// PHẦN 2 · NGHE — tình huống MỚI: giải chạy marathon mùa đông.
// Ôn lại 已经(Bài 4/9/10), 一下(Bài 3), 远(Bài 7).
// ══════════════════════════════════════════
const listenData = [
  {audio:'今天零下五度，可是弟弟穿得不多，他说跑步的时候不冷。',
   questions:[
     {q:'今天多少度？',opts:['零下五度','零下十度','五度','十度'],ans:0},
     {q:'弟弟穿得怎么样？',opts:['不多','很多','正好','不知道'],ans:0},
   ]},
  {audio:'妻子跑得比我快，她已经进终点了，我还在后面。',
   questions:[
     {q:'谁跑得快？',opts:['妻子','我','弟弟','教练'],ans:0},
     {q:'妻子怎么样了？',opts:['已经进终点了','还没开始跑','正在准备','不知道'],ans:0},
   ]},
  {audio:'比赛结束后，我们进屋休息，屋子里比外面暖和，离家也不远，走一下就到了。',
   questions:[
     {q:'比赛结束后大家做什么？',opts:['进屋休息','继续跑步','马上回家','出去吃饭'],ans:0},
     {q:'屋子离家怎么样？',opts:['不远','很远','要开车才到','不知道'],ans:0},
   ]},
];

// ══════════════════════════════════════════
// PHẦN 3a · ĐIỀN TỪ — hội thoại MỚI: ngày chạy marathon mùa đông
// ══════════════════════════════════════════
const fillData = [
  {pre:'今天是',blank:'零',post:'下五度，很冷。',hint:'(số 0, âm)',ans:'零'},
  {pre:'弟弟',blank:'穿',post:'得不多，我让他多穿点儿。',hint:'(mặc)',ans:'穿'},
  {pre:'他跑步的时候穿',blank:'得',post:'不多，说这样才舒服。',hint:'(trợ từ nối bổ ngữ trạng thái)',ans:'得',exp:'Động từ + 得 + Tính từ = miêu tả mức độ/trạng thái của hành động.'},
  {pre:'妻子跑',blank:'得',post:'比我快多了。',hint:'(trợ từ nối bổ ngữ trạng thái)',ans:'得',exp:'Khi kết hợp so sánh: Động từ + 得 + 比 + B + Tính từ.'},
  {pre:'她已经',blank:'进',post:'终点了，我还在后面。',hint:'(vào, tiến vào)',ans:'进'},
  {pre:'屋子里比外面暖和，离家也',blank:'近',post:'，走一下就到了。',hint:'(gần)',ans:'近'},
  {pre:'',blank:'弟弟',post:'说明年还要参加马拉松比赛。',hint:'(em trai)',ans:'弟弟'},
  {pre:'',blank:'妻子',post:'在终点等我们，还给我们拍照了。',hint:'(vợ)',ans:'妻子'},
];

// ══════════════════════════════════════════
// PHẦN 3b · SẮP XẾP
// ══════════════════════════════════════════
const sortData = [
  {words:['现在','是','零','下','十','度','。'],ans:'现在是零下十度。',audio:'现在是零下十度。'},
  {words:['弟弟','穿','得','太','少','了','。'],ans:'弟弟穿得太少了。',audio:'弟弟穿得太少了。'},
  {words:['妻子','跑','得','比','我','快','。'],ans:'妻子跑得比我快。',audio:'妻子跑得比我快。'},
  {words:['大家','都','进','屋','休息','了','。'],ans:'大家都进屋休息了。',audio:'大家都进屋休息了。'},
  {words:['我家','离','公司','很','近','。'],ans:'我家离公司很近。',audio:'我家离公司很近。'},
  {words:['外面','下雪','了','，','真','冷','啊','。'],ans:'外面下雪了，真冷啊。',audio:'外面下雪了，真冷啊。'},
];

// ══════════════════════════════════════════
// PHẦN 3c · SỬA LỖI SAI
// ══════════════════════════════════════════
const errorFixData = [
  {wrong:'他跑很快得。',
   opts:['他跑得很快。','他跑很快得。','他得跑很快。','很快他跑得。'],ans:0,
   exp:'得 phải đứng NGAY SAU động từ, rồi mới đến phần miêu tả mức độ/trạng thái: Động từ + 得 + Tính từ.'},
  {wrong:'弟弟穿不得多。',
   opts:['弟弟穿得不多。','弟弟穿不得多。','弟弟不穿得多。','弟弟穿多得不。'],ans:0,
   exp:'Phủ định (不) đứng SAU 得, không chen vào giữa động từ và 得: Động từ + 得 + 不 + Tính từ.'},
  {wrong:'她跑得我比快。',
   opts:['她跑得比我快。','她跑得我比快。','她比我快跑得。','跑得她比我快。'],ans:0,
   exp:'Khi kết hợp so sánh với bổ ngữ trạng thái, 比 + đối tượng đứng NGAY SAU 得, trước tính từ: Động từ + 得 + 比 + B + Tính từ.'},
  {wrong:'我们屋子进休息了。',
   opts:['我们进屋休息了。','我们屋子进休息了。','我们进休息屋了。','屋子我们进休息了。'],ans:0,
   exp:'进 (động từ) phải đứng NGAY TRƯỚC tân ngữ chỉ nơi chốn (屋), không đảo tân ngữ lên trước động từ.'},
  {wrong:'离家近很。',
   opts:['离家很近。','离家近很。','很离家近。','近离家很。'],ans:0,
   exp:'Phó từ mức độ 很 đứng TRƯỚC tính từ (近), không đặt phía sau: 很 + Tính từ.'},
];

// ══════════════════════════════════════════
// PHẦN 4 · LUYỆN NÓI 3 TẦNG (tầng 3 có ghi âm + chấm điểm AI)
// ══════════════════════════════════════════
const speakingData = {
  intro:'Nhấn 🔊 để nghe câu hỏi, sau đó tự ghi âm câu trả lời của bạn. Ghi âm xong mới nên xem gợi ý/câu trả lời mẫu để đối chiếu.',
  questions:[
    {q_zh:'今天零下五度，外面很冷，我们要不要进屋？',
     q_vn:'Hôm nay âm 5 độ, ngoài trời rất lạnh, chúng ta có nên vào nhà không?',
     hint:'你穿得太少了，我们进屋吧。',
     sample:'对啊，你穿得太少了，我们快进屋吧。',
     sample_vn:'Đúng vậy, bạn mặc ít quá, chúng ta mau vào nhà đi.',
     note:'Bổ ngữ trạng thái: Động từ (穿) + 得 + Tính từ (少) để nhận xét mức độ.'},
    {q_zh:'马拉松比赛结束了吗？你家里谁跑得比较快？',
     q_vn:'Cuộc thi marathon kết thúc chưa? Trong nhà bạn ai chạy nhanh hơn?',
     hint:'＿＿跑得比我＿＿。',
     sample:'妻子跑得比我快多了，她已经进终点了。',
     sample_vn:'Vợ tôi chạy nhanh hơn tôi nhiều, cô ấy đã về đích rồi.',
     note:'Kết hợp 比 với bổ ngữ trạng thái: V + 得 + 比 + B + Tính từ.'},
    {q_zh:'周末有一个马拉松比赛，你知道吗？',
     q_vn:'Cuối tuần có một giải chạy marathon, bạn biết không?',
     hint:'我们一起去跑，好吗？',
     sample:'知道，我们一起去跑，好吗？',
     sample_vn:'Biết chứ, chúng ta cùng đi chạy nhé?',
     note:'Ôn lại cấu trúc rủ rê ……好吗？ đã học ở Bài 8.'},
  ],
};
