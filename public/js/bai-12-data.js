// ══════════════════════════════════════════
// DATA — Bài 12: 你穿得太少了
// ══════════════════════════════════════════
const vocabData = [
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

const dialogData = [
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

// Điền từ — giảm lặp: chỉ 3/8 câu blank là 得 (đúng trọng tâm ngữ pháp), còn lại đa dạng từ vựng
const fillData = [
  {pre:'你吃',blank:'得',post:'太少了。',hint:'(trợ từ nối bổ ngữ trạng thái)',ans:'得',exp:'Động từ + 得 + Tính từ = miêu tả mức độ/kết quả hành động'},
  {pre:'我妻子比我做',blank:'得',post:'好。',hint:'(trợ từ nối bổ ngữ trạng thái)',ans:'得'},
  {pre:'有',blank:'零',post:'下十度吧。',hint:'(số 0)',ans:'零'},
  {pre:'你',blank:'穿',post:'得太少了，我们进房间吧。',hint:'(mặc)',ans:'穿'},
  {pre:'我',blank:'弟弟',post:'让我帮他找个房子。',hint:'(em trai)',ans:'弟弟'},
  {pre:'他也希望能住得',blank:'近',post:'一点儿。',hint:'(gần)',ans:'近'},
  {pre:'你比我早起一个小时，你睡',blank:'得',post:'也早。',hint:'(trợ từ nối bổ ngữ trạng thái)',ans:'得'},
  {pre:'我们',blank:'进',post:'房间吧。',hint:'(vào)',ans:'进'},
];

// Sắp xếp — khác hẳn Điền từ
const sortData = [
  {words:['我','每天','晚上','十','点','就','睡觉','。'],ans:'我每天晚上十点就睡觉。',audio:'我每天晚上十点就睡觉。'},
  {words:['再','来','点儿','米饭','吧','。'],ans:'再来点儿米饭吧。',audio:'再来点儿米饭吧。'},
  {words:['你','穿','得','太','少','了','。'],ans:'你穿得太少了。',audio:'你穿得太少了。'},
  {words:['我','弟弟','让','我','帮','他','找','房子','。'],ans:'我弟弟让我帮他找房子。',audio:'我弟弟让我帮他找房子。'},
  {words:['他','希望','能','住','得','近','一点儿','。'],ans:'他希望能住得近一点儿。',audio:'他希望能住得近一点儿。'},
  {words:['今天','真','冷','。'],ans:'今天真冷。',audio:'今天真冷。'},
];

const matchData = [
  {left:'你每天早上几点起床？',right:'六点多。'},
  {left:'你吃得太少了，',right:'再来点儿米饭吧。'},
  {left:'你做饭做得怎么样？',right:'我妻子比我做得好。'},
  {left:'今天真冷，',right:'有零下十度吧。'},
  {left:'你穿得太少了，',right:'我们进房间吧。'},
  {left:'你在忙什么呢？',right:'我弟弟让我帮他找个房子。'},
];

// Trắc nghiệm — không audio; trộn từ Bài 2/7 (远/慢) làm phương án nhiễu
const mcData = [
  {q:'你吃＿＿太少了。',opts:['得','了','过','着'],ans:0},
  {q:'我妻子比我做＿＿好。',opts:['得','了','过','的'],ans:0},
  {q:'有＿＿下十度吧。',opts:['零','一','两','三'],ans:0},
  {q:'你＿＿得太少了。',opts:['穿','吃','喝','做'],ans:0},
  {q:'我们＿＿房间吧。',opts:['进','出','回','到'],ans:0},
  {q:'他希望能住得＿＿一点儿。',opts:['近','远','快','慢'],ans:0},
  {q:'我＿＿让我帮他找房子。',opts:['弟弟','哥哥','姐姐','女儿'],ans:0},
  {q:'你比我早起一个＿＿。',opts:['小时','时间','以后','已经'],ans:0},
  {q:'他起＿＿不早。',opts:['得','了','过','着'],ans:0},
  {q:'我睡＿＿也早。',opts:['得','了','过','着'],ans:0},
];

const speakingData = {
  t1:{
    intro:'Nhấn 🔊 nghe từng câu mẫu, đọc to theo cho tới khi trôi chảy. Chú ý thanh điệu và nhịp câu. Có thể đọc phân vai theo cặp.',
    models:[
      {zh:'你每天早上几点起床？',py:'Nǐ měitiān zǎoshang jǐ diǎn qǐchuáng?',vn:'Mỗi sáng bạn thức dậy lúc mấy giờ?'},
      {zh:'你吃得太少了，再来点儿米饭吧。',py:'Nǐ chī de tài shǎo le, zài lái diǎnr mǐfàn ba.',vn:'Bạn ăn ít quá, ăn thêm chút cơm nữa đi.'},
      {zh:'今天真冷，你穿得太少了。',py:'Jīntiān zhēn lěng, nǐ chuān de tài shǎo le.',vn:'Hôm nay lạnh thật, bạn mặc ít quá.'},
      {zh:'我弟弟让我帮他找个房子。',py:'Wǒ dìdi ràng wǒ bāng tā zhǎo ge fángzi.',vn:'Em trai tớ nhờ tớ tìm giúp nó một căn nhà.'},
    ],
  },
  t2:{
    intro:'Dùng khung câu cho sẵn, thay thế phần gạch chân bằng từ trong ô gợi ý để tạo câu mới. Nhấn 🔊 để nghe rồi nói to mỗi câu bạn tạo được.',
    drills:[
      {frame:'我每天晚上＿＿点就睡觉。',frame_py:'Wǒ měitiān wǎnshang ___ diǎn jiù shuìjiào.',vn:'Mỗi tối tôi ＿＿ giờ đã ngủ rồi.',options:['九','十','十一'],samples:['我每天晚上九点就睡觉。','我每天晚上十点就睡觉。','我每天晚上十一点就睡觉。']},
      {frame:'他比我做得＿＿。',frame_py:'Tā bǐ wǒ zuò de ___.',vn:'Anh ấy làm ＿＿ hơn tôi.',options:['好','快','慢'],samples:['他比我做得好。','他比我做得快。','他比我做得慢。']},
      {frame:'今天有零下＿＿度。',frame_py:'Jīntiān yǒu líng xià ___ dù.',vn:'Hôm nay âm ＿＿ độ.',options:['五','十','十五'],samples:['今天有零下五度。','今天有零下十度。','今天有零下十五度。']},
      {frame:'他希望住得＿＿一点儿。',frame_py:'Tā xīwàng zhù de ___ yìdiǎnr.',vn:'Anh ấy hy vọng ở ＿＿ hơn một chút.',options:['近','远','好'],samples:['他希望住得近一点儿。','他希望住得远一点儿。','他希望住得好一点儿。']},
    ],
  },
  t3:{
    intro:'Không nhìn câu mẫu, tự dùng từ đã học để nói theo tình huống. Nói liền 2–3 câu. Ghi âm lại rồi nghe để tự sửa.',
    tasks:[
      {role:'🛏️ Tình huống 1 — So sánh giờ giấc ngủ nghỉ',
       guide:'Bạn hỏi bạn mình mấy giờ thức dậy, rồi so sánh với giờ giấc của mình.',
       structure:['你每天几点＿＿？','我比你＿＿一点儿。'],
       sample:'你每天几点起床？我比你早一点儿。',
       sample_vn:'Mỗi ngày bạn thức dậy lúc mấy giờ? Tôi sớm hơn bạn một chút.'},
      {role:'🍚 Tình huống 2 — Mời khách ăn thêm',
       guide:'Bạn mời khách ăn thêm vì thấy họ ăn ít.',
       structure:['你吃得太＿＿了。','再来点儿＿＿吧。'],
       sample:'你吃得太少了。再来点儿米饭吧。',
       sample_vn:'Bạn ăn ít quá. Ăn thêm chút cơm nữa đi.'},
      {role:'🏠 Tình huống 3 — Nhờ tìm nhà cho người thân',
       guide:'Bạn kể việc em trai/chị gái nhờ bạn tìm nhà gần công ty hơn.',
       structure:['我＿＿让我帮他找房子。','他希望能住得＿＿一点儿。'],
       sample:'我弟弟让我帮他找房子。他希望能住得近一点儿。',
       sample_vn:'Em trai tôi nhờ tôi tìm giúp nhà. Nó hy vọng có thể ở gần hơn một chút.'},
    ],
  },
};
