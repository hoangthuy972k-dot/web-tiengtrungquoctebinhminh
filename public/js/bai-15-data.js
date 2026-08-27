// ══════════════════════════════════════════
// DATA — Bài 15: 新年就要到了
// ══════════════════════════════════════════
var vocabData = [
  {n:1,zh:'新年',py:'xīnnián',pos:'Danh từ',vn:'năm mới',em:'🎉',lesson:1,
   ex_zh:'新年就要到了，你有什么计划？',ex_py:'Xīnnián jiùyào dào le, nǐ yǒu shénme jìhuà?',ex_vn:'Năm mới sắp đến rồi, bạn có kế hoạch gì không?',
   exList:[
     {zh:'新年就要到了，你有什么计划？',py:'Xīnnián jiùyào dào le, nǐ yǒu shénme jìhuà?',vn:'Năm mới sắp đến rồi, bạn có kế hoạch gì không?'},
     {zh:'新年快乐！',py:'Xīnnián kuàilè!',vn:'Chúc mừng năm mới!'},
     {zh:'新年的时候我们都回家。',py:'Xīnnián de shíhou wǒmen dōu huíjiā.',vn:'Vào dịp năm mới, chúng tôi đều về nhà.'},
   ],
   hanzi:[
     {c:'新',p:'xīn',type:'左右结构 · Trái-phải',st:13,ord:'立 → 木 → 斤',rad:'斤 (cân – cái rìu)',mean:'mới',
      tip:'斤(rìu) chặt 木(cây) 立(dựng) lên → tạo ra vật MỚI.',
      cf:'亲 (qīn – "thân thiết")',w:'新年 / 新的 / 更新'},
     {c:'年',p:'nián',type:'独体字 · Tượng hình',st:6,ord:'丿→𠂉→干biến thể',rad:'干 (can)',mean:'năm',
      tip:'Hình người vác bó lúa sau vụ mùa → mỗi vụ mùa là một chu kỳ = NĂM.',
      cf:'午 (wǔ – "buổi trưa")',w:'新年 / 今年 / 去年'},
   ]},
  {n:2,zh:'票',py:'piào',pos:'Danh từ',vn:'vé',em:'🎫',lesson:1,
   ex_zh:'票已经买好了。',ex_py:'Piào yǐjīng mǎihǎo le.',ex_vn:'Vé đã mua xong rồi.',
   exList:[
     {zh:'票已经买好了。',py:'Piào yǐjīng mǎihǎo le.',vn:'Vé đã mua xong rồi.'},
     {zh:'火车票多少钱？',py:'Huǒchēpiào duōshao qián?',vn:'Vé tàu bao nhiêu tiền?'},
     {zh:'这张票是我的。',py:'Zhè zhāng piào shì wǒ de.',vn:'Tấm vé này là của tôi.'},
   ],
   hanzi:[
     {c:'票',p:'piào',type:'上下结构 · Trên-dưới',st:11,ord:'覀(biến thể) → 示',rad:'示 (thị – chỉ ra)',mean:'vé, phiếu',
      tip:'Phần trên giống 覀(che phủ), dưới 示(tờ giấy chỉ ra) → tờ giấy làm bằng chứng = VÉ.',
      cf:'漂 (piāo – "trôi nổi")',w:'火车票 / 电影票 / 买票'},
   ]},
  {n:3,zh:'火车站',py:'huǒchēzhàn',pos:'Danh từ',vn:'ga tàu hoả',em:'🚉',lesson:1,
   ex_zh:'火车站人多不多？',ex_py:'Huǒchēzhàn rén duō bu duō?',ex_vn:'Ga tàu có đông người không?',
   exList:[
     {zh:'火车站人多不多？',py:'Huǒchēzhàn rén duō bu duō?',vn:'Ga tàu có đông người không?'},
     {zh:'我在火车站等你。',py:'Wǒ zài huǒchēzhàn děng nǐ.',vn:'Tôi đợi bạn ở ga tàu.'},
     {zh:'火车站离这儿不远。',py:'Huǒchēzhàn lí zhèr bù yuǎn.',vn:'Ga tàu cách đây không xa.'},
   ],
   hanzi:[
     {c:'火',p:'huǒ',type:'独体字 · Tượng hình',st:4,ord:'丶→丿→丿→丶',rad:'火 (hoả – tự thành bộ)',mean:'lửa',
      tip:'Hình ngọn lửa đang cháy → LỬA, mở rộng thành "tàu hoả" (xe chạy bằng hơi nước/lửa).',
      cf:'灯 (dēng – "đèn")',w:'火车 / 火车站'},
     {c:'站',p:'zhàn',type:'左右结构 · Trái-phải',st:10,ord:'立 (lập) trái → 占 (chiếm) phải',rad:'立 (lập – đứng)',mean:'trạm, ga',
      tip:'立(đứng) + 占(chiếm chỗ) → nơi đứng lại chờ = TRẠM, GA.',
      cf:'古 (gǔ – "cổ xưa")',w:'火车站 / 车站 / 站着'},
   ]},
  {n:4,zh:'大家',py:'dàjiā',pos:'Đại từ',vn:'mọi người',em:'👨‍👩‍👧‍👦',lesson:2,
   ex_zh:'大家都在准备回家。',ex_py:'Dàjiā dōu zài zhǔnbèi huíjiā.',ex_vn:'Mọi người đều đang chuẩn bị về nhà.',
   exList:[
     {zh:'大家都在准备回家。',py:'Dàjiā dōu zài zhǔnbèi huíjiā.',vn:'Mọi người đều đang chuẩn bị về nhà.'},
     {zh:'大家好！',py:'Dàjiā hǎo!',vn:'Xin chào mọi người!'},
     {zh:'大家都很高兴。',py:'Dàjiā dōu hěn gāoxìng.',vn:'Mọi người đều rất vui.'},
   ],
   hanzi:[
     {c:'大',p:'dà',type:'独体字 · Tượng hình',st:3,ord:'一→ノ→㇏',rad:'大 (đại – tự thành bộ)',mean:'to, lớn',
      tip:'Hình người dang rộng tay chân → TO LỚN.',
      cf:'太 (tài – "quá")',w:'大家 / 大学 / 长大'},
     {c:'家',p:'jiā',type:'上下结构 · Trên-dưới',st:10,ord:'宀 (miên) → 豕 (thỉ)',rad:'宀 (miên – mái nhà)',mean:'nhà, gia đình',
      tip:'Mái nhà 宀 có con lợn 豕 bên dưới — thời xưa nuôi lợn dưới nhà sàn → biểu tượng của NHÀ.',
      cf:'豪 (háo – "hào hiệp")',w:'大家 / 回家 / 家人'},
   ]},
  {n:5,zh:'更',py:'gèng',pos:'Phó từ',vn:'càng, hơn',em:'📈',lesson:2,
   ex_zh:'今天阴，比昨天更冷。',ex_py:'Jīntiān yīn, bǐ zuótiān gèng lěng.',ex_vn:'Hôm nay âm u, lạnh hơn hôm qua.',
   exList:[
     {zh:'今天阴，比昨天更冷。',py:'Jīntiān yīn, bǐ zuótiān gèng lěng.',vn:'Hôm nay âm u, lạnh hơn hôm qua.'},
     {zh:'我觉得今年比去年更热闹。',py:'Wǒ juéde jīnnián bǐ qùnián gèng rènao.',vn:'Tôi thấy năm nay náo nhiệt hơn năm ngoái.'},
     {zh:'他比我更忙。',py:'Tā bǐ wǒ gèng máng.',vn:'Anh ấy còn bận hơn tôi.'},
   ],
   hanzi:[
     {c:'更',p:'gèng',type:'上下结构 · Trên-dưới',st:7,ord:'一 → 日 → 㐅biến thể',rad:'一 (nhất)',mean:'càng, hơn',
      tip:'Ghi nhớ qua cụm 比……更…… (so sánh hơn nữa) — mức độ tăng thêm so với gốc.',
      cf:'夏 (xià – "mùa hè")',w:'更冷 / 更好 / 更热闹'},
   ]},
  {n:6,zh:'妹妹',py:'mèimei',pos:'Danh từ',vn:'em gái',em:'👧',lesson:3,
   ex_zh:'你妹妹呢？',ex_py:'Nǐ mèimei ne?',ex_vn:'Em gái bạn đâu rồi?',
   exList:[
     {zh:'你妹妹呢？',py:'Nǐ mèimei ne?',vn:'Em gái bạn đâu rồi?'},
     {zh:'我妹妹今年十岁。',py:'Wǒ mèimei jīnnián shí suì.',vn:'Em gái tôi năm nay 10 tuổi.'},
     {zh:'她是我妹妹。',py:'Tā shì wǒ mèimei.',vn:'Cô ấy là em gái tôi.'},
   ],
   hanzi:[
     {c:'妹',p:'mèi',type:'左右结构 · Trái-phải',st:8,ord:'女 (nữ) trái → 未 (vị) phải',rad:'女 (nữ – con gái)',mean:'em gái',
      tip:'女(con gái) + 未(chưa) → người con gái CHƯA lớn bằng chị = EM GÁI.',
      cf:'妈 (mā – "mẹ")',w:'妹妹 / 姐妹'},
   ]},
  {n:7,zh:'阴',py:'yīn',pos:'Tính từ',vn:'âm u, râm mát',em:'☁️',lesson:3,
   ex_zh:'今天阴，比昨天更冷。',ex_py:'Jīntiān yīn, bǐ zuótiān gèng lěng.',ex_vn:'Hôm nay âm u, lạnh hơn hôm qua.',
   exList:[
     {zh:'今天阴，比昨天更冷。',py:'Jīntiān yīn, bǐ zuótiān gèng lěng.',vn:'Hôm nay âm u, lạnh hơn hôm qua.'},
     {zh:'今天是阴天。',py:'Jīntiān shì yīntiān.',vn:'Hôm nay là trời âm u.'},
     {zh:'天气预报说明天阴转晴。',py:'Tiānqì yùbào shuō míngtiān yīn zhuǎn qíng.',vn:'Dự báo thời tiết nói ngày mai âm u chuyển quang.'},
   ],
   hanzi:[
     {c:'阴',p:'yīn',type:'左右结构 · Trái-phải',st:6,ord:'阝(phụ) trái → 月 (nguyệt) phải',rad:'阝(phụ – gò đất)',mean:'âm u',
      tip:'阝(sườn đồi) + 月(trăng, chỉ bóng tối) → phía khuất ánh nắng của quả đồi = ÂM U.',
      cf:'阳 (yáng – "nắng, dương")',w:'阴天 / 阴转晴'},
   ]},
  {n:8,zh:'公共汽车',py:'gōnggòngqìchē',pos:'Danh từ',vn:'xe buýt',em:'🚌',lesson:3,
   ex_zh:'她坐公共汽车去火车站。',ex_py:'Tā zuò gōnggòngqìchē qù huǒchēzhàn.',ex_vn:'Cô ấy đi xe buýt đến ga tàu.',
   exList:[
     {zh:'她坐公共汽车去火车站。',py:'Tā zuò gōnggòngqìchē qù huǒchēzhàn.',vn:'Cô ấy đi xe buýt đến ga tàu.'},
     {zh:'我每天坐公共汽车上班。',py:'Wǒ měitiān zuò gōnggòngqìchē shàngbān.',vn:'Ngày nào tôi cũng đi xe buýt đi làm.'},
     {zh:'公共汽车来了！',py:'Gōnggòngqìchē lái le!',vn:'Xe buýt đến rồi!'},
   ],
   hanzi:[
     {c:'公',p:'gōng',type:'上下结构 · Trên-dưới',st:4,ord:'八 → 厶',rad:'八 (bát – chia)',mean:'công cộng',
      tip:'八(chia ra) trên 厶(riêng tư) → chia sẻ chung, thuộc về mọi người = CÔNG CỘNG.',
      cf:'公司 (gōngsī – đã học ở Bài 7)',w:'公共汽车 / 公司 / 公园'},
     {c:'共',p:'gòng',type:'上下结构 · Trên-dưới',st:6,ord:'廿 → 八',rad:'八 (bát)',mean:'cùng, chung',
      tip:'Nhiều tay cùng nâng một vật → làm CÙNG NHAU, CHUNG.',
      cf:'具 (jù – "dụng cụ")',w:'公共 / 一共'},
   ]},
];

const wuData = [
  {img:'🎉',label:'新年',py:'xīnnián',letter:'A'},
  {img:'🎫',label:'票',py:'piào',letter:'B'},
  {img:'🚉',label:'火车站',py:'huǒchēzhàn',letter:'C'},
  {img:'👧',label:'妹妹',py:'mèimei',letter:'D'},
  {img:'☁️',label:'阴',py:'yīn',letter:'E'},
  {img:'🚌',label:'公共汽车',py:'gōnggòngqìchē',letter:'F'},
];

var dialogData = [
  {scene:'谈论新年 · Nói về năm mới',
   lines:[
     {sp:0,zh:'新年就要到了，你有什么计划？',py:'Xīnnián jiùyào dào le, nǐ yǒu shénme jìhuà?',vn:'Năm mới sắp đến rồi, bạn có kế hoạch gì không?'},
     {sp:1,zh:'我要回家过年，票已经买好了。',py:'Wǒ yào huíjiā guònián, piào yǐjīng mǎihǎo le.',vn:'Tôi sẽ về nhà ăn Tết, vé đã mua xong rồi.'},
     {sp:0,zh:'火车站人多不多？',py:'Huǒchēzhàn rén duō bu duō?',vn:'Ga tàu có đông người không?'},
     {sp:1,zh:'大家都在准备回家，人很多。',py:'Dàjiā dōu zài zhǔnbèi huíjiā, rén hěn duō.',vn:'Mọi người đều đang chuẩn bị về nhà, rất đông người.'},
   ]},
  {scene:'谈论天气 · Nói về sự thay đổi thời tiết',
   lines:[
     {sp:0,zh:'今天天气怎么样？',py:'Jīntiān tiānqì zěnmeyàng?',vn:'Hôm nay thời tiết thế nào?'},
     {sp:1,zh:'今天阴，比昨天更冷。',py:'Jīntiān yīn, bǐ zuótiān gèng lěng.',vn:'Hôm nay âm u, lạnh hơn hôm qua.'},
     {sp:0,zh:'快要下雪了吧？',py:'Kuàiyào xiàxuě le ba?',vn:'Sắp có tuyết rơi rồi phải không?'},
     {sp:1,zh:'是啊，天气预报说明天会下雪。',py:'Shì a, tiānqì yùbào shuō míngtiān huì xiàxuě.',vn:'Đúng vậy, dự báo thời tiết nói ngày mai sẽ có tuyết.'},
   ]},
  {scene:'妹妹的事情 · Chuyện của em gái',
   lines:[
     {sp:0,zh:'你妹妹呢？',py:'Nǐ mèimei ne?',vn:'Em gái bạn đâu rồi?'},
     {sp:1,zh:'她坐公共汽车去火车站接朋友了。',py:'Tā zuò gōnggòngqìchē qù huǒchēzhàn jiē péngyou le.',vn:'Cô ấy đi xe buýt đến ga tàu đón bạn rồi.'},
     {sp:0,zh:'都几点了，她还没回来吗？',py:'Dōu jǐ diǎn le, tā hái méi huílai ma?',vn:'Mấy giờ rồi mà cô ấy vẫn chưa về à?'},
     {sp:1,zh:'快要回来了，你等一下。',py:'Kuàiyào huílai le, nǐ děng yíxià.',vn:'Sắp về rồi, bạn đợi một chút.'},
   ]},
  {scene:'准备过年 · Chuẩn bị đón năm mới',
   lines:[
     {sp:0,zh:'新年快到了，你准备好了吗？',py:'Xīnnián kuài dào le, nǐ zhǔnbèi hǎo le ma?',vn:'Năm mới sắp đến rồi, bạn chuẩn bị xong chưa?'},
     {sp:1,zh:'差不多了，衣服都买好了。',py:'Chàbuduō le, yīfu dōu mǎihǎo le.',vn:'Gần xong rồi, quần áo đều mua xong cả rồi.'},
     {sp:0,zh:'我觉得今年比去年更热闹。',py:'Wǒ juéde jīnnián bǐ qùnián gèng rènao.',vn:'Tôi thấy năm nay náo nhiệt hơn năm ngoái.'},
     {sp:1,zh:'是啊，大家都很高兴。',py:'Shì a, dàjiā dōu hěn gāoxìng.',vn:'Đúng vậy, mọi người đều rất vui.'},
   ]},
];

// ══════════════════════════════════════════
// PHẦN 1 · GHÉP TỪ (Collocation)
// ══════════════════════════════════════════
var matchData = [
  {left:'新年',right:'快乐'},
  {left:'买',right:'票'},
  {left:'坐',right:'公共汽车'},
  {left:'去',right:'火车站'},
  {left:'天气',right:'阴'},
  {left:'更',right:'热闹'},
];

// ══════════════════════════════════════════
// PHẦN 2 · NGHE — tình huống MỚI: tiệc tất niên ở công ty.
// ══════════════════════════════════════════
var listenData = [
  {audio:'公司新年晚会的票大家都买好了，一共二十张。',
   questions:[
     {q:'晚会的票怎么样了？',opts:['都买好了','还没买','卖完了','不知道'],ans:0},
     {q:'一共买了多少张票？',opts:['二十张','十张','三十张','不知道'],ans:0},
   ]},
  {audio:'新年就要到了，公司晚会就要开始了，大家都很高兴。',
   questions:[
     {q:'什么就要到了？',opts:['新年','生日','考试','放假'],ans:0},
     {q:'大家心情怎么样？',opts:['很高兴','很难过','很累','不知道'],ans:0},
   ]},
  {audio:'我妹妹坐公共汽车去火车站接同事了，今天阴，比昨天更冷，她说要快点儿回来。',
   questions:[
     {q:'妹妹去火车站做什么？',opts:['接同事','买票','上班','买衣服'],ans:0},
     {q:'今天天气怎么样？',opts:['阴，比昨天更冷','晴，很暖和','下雨','不知道'],ans:0},
   ]},
];

// ══════════════════════════════════════════
// PHẦN 3a · ĐIỀN TỪ — hội thoại MỚI: tiệc tất niên ở công ty
// ══════════════════════════════════════════
var fillData = [
  {pre:'公司新年晚会的票，大家',blank:'都',post:'买好了。',hint:'(đều — 都……了)',ans:'都',exp:'都……了 nhấn mạnh TẤT CẢ đều đạt trạng thái/kết quả.'},
  {pre:'新年',blank:'就',post:'要到了，你准备好了吗？',hint:'(sắp — 就要……了)',ans:'就',exp:'就要……了 diễn tả việc sắp xảy ra.'},
  {pre:'晚会',blank:'快',post:'要开始了，大家快过来吧！',hint:'(sắp — 快要……了)',ans:'快'},
  {pre:'今天阴，比昨天',blank:'更',post:'冷了。',hint:'(càng, hơn)',ans:'更',exp:'更 nhấn mạnh mức độ tăng thêm khi so sánh.'},
  {pre:'我',blank:'妹妹',post:'坐公共汽车去火车站接同事了。',hint:'(em gái)',ans:'妹妹'},
  {pre:'她坐',blank:'公共汽车',post:'去，说一会儿就到。',hint:'(xe buýt)',ans:'公共汽车'},
  {pre:'新年晚会的',blank:'票',post:'一共买了二十张。',hint:'(vé)',ans:'票'},
  {pre:'',blank:'大家',post:'都很高兴，晚会一定很热闹。',hint:'(mọi người)',ans:'大家'},
];

// ══════════════════════════════════════════
// PHẦN 3b · SẮP XẾP
// ══════════════════════════════════════════
var sortData = [
  {words:['新年','晚会','的','票','大家','都','买','好','了','。'],ans:'新年晚会的票大家都买好了。',audio:'新年晚会的票大家都买好了。'},
  {words:['新年','就要','到','了','。'],ans:'新年就要到了。',audio:'新年就要到了。'},
  {words:['晚会','快要','开始','了','。'],ans:'晚会快要开始了。',audio:'晚会快要开始了。'},
  {words:['今天','比','昨天','更','冷','。'],ans:'今天比昨天更冷。',audio:'今天比昨天更冷。'},
  {words:['妹妹','坐','公共汽车','去','火车站','了','。'],ans:'妹妹坐公共汽车去火车站了。',audio:'妹妹坐公共汽车去火车站了。'},
  {words:['大家','都','很','高兴','。'],ans:'大家都很高兴。',audio:'大家都很高兴。'},
];

// ══════════════════════════════════════════
// PHẦN 3c · SỬA LỖI SAI
// ══════════════════════════════════════════
var errorFixData = [
  {wrong:'今天更比昨天冷。',
   opts:['今天比昨天更冷。','今天更比昨天冷。','今天比更昨天冷。','更今天比昨天冷。'],ans:0,
   exp:'更 đứng SAU 比 + đối tượng so sánh, ngay trước tính từ: A + 比 + B + 更 + Tính từ.'},
  {wrong:'新年到就要了。',
   opts:['新年就要到了。','新年到就要了。','新年了就要到。','就要新年到了。'],ans:0,
   exp:'Cấu trúc 就要……了 phải kẹp động từ ở giữa: 就要 + Động từ + 了, không tách rời 就要 và 了 ra hai đầu câu.'},
  {wrong:'晚会开始快要了。',
   opts:['晚会快要开始了。','晚会开始快要了。','晚会了快要开始。','快要晚会开始了。'],ans:0,
   exp:'Tương tự 就要……了, cấu trúc 快要……了 cũng phải kẹp động từ ở giữa: 快要 + Động từ + 了.'},
  {wrong:'都票买好了。',
   opts:['票都买好了。','都票买好了。','票买都好了。','买票都好了。'],ans:0,
   exp:'都 phải đứng SAU chủ ngữ/đối tượng (票), không đặt lên trước chủ ngữ.'},
  {wrong:'大家高兴都很。',
   opts:['大家都很高兴。','大家高兴都很。','大家很都高兴。','都大家很高兴。'],ans:0,
   exp:'都 đứng TRƯỚC 很 và tính từ: Chủ ngữ + 都 + 很 + Tính từ, không đặt 都 ở cuối câu.'},
];

// ══════════════════════════════════════════
// PHẦN 4 · LUYỆN NÓI 3 TẦNG (tầng 3 có ghi âm + chấm điểm AI)
// ══════════════════════════════════════════
var speakingData = {
  intro:'Nhấn 🔊 để nghe câu hỏi, sau đó tự ghi âm câu trả lời của bạn. Ghi âm xong mới nên xem gợi ý/câu trả lời mẫu để đối chiếu.',
  questions:[
    {q_zh:'你知道公司新年晚会的事吗？',
     q_vn:'Bạn có biết chuyện tiệc tất niên của công ty không?',
     hint:'新年晚会就要开始了，你的票买好了吗？',
     sample:'新年晚会就要开始了，你的票买好了吗？',
     sample_vn:'Tiệc tất niên sắp bắt đầu rồi, vé của bạn mua xong chưa?',
     note:'就要……了 diễn tả việc sắp xảy ra trong tương lai gần.'},
    {q_zh:'今天天气怎么样？',
     q_vn:'Hôm nay thời tiết thế nào?',
     hint:'今天阴，比昨天更＿＿。',
     sample:'今天阴，比昨天更冷。',
     sample_vn:'Hôm nay âm u, lạnh hơn hôm qua.',
     note:'更 dùng để nhấn mạnh mức độ tăng thêm khi so sánh hai đối tượng.'},
    {q_zh:'你妹妹去哪儿了？',
     q_vn:'Em gái bạn đi đâu rồi?',
     hint:'我妹妹坐公共汽车去火车站接＿＿了。',
     sample:'我妹妹坐公共汽车去火车站接同事了。',
     sample_vn:'Em gái tôi đi xe buýt đến ga tàu đón đồng nghiệp rồi.',
     note:'Ôn lại cấu trúc V+着 và trạng ngữ chỉ phương tiện di chuyển (坐公共汽车) đã học ở các bài trước.'},
  ],
};

// ══════════════════════════════════════════
// LUYỆN DỊCH — dùng từ bài 15 + ôn lại từ bài 1-14 và HSK1
// ══════════════════════════════════════════
var translateData = [
  {vi:'Năm mới sắp đến rồi.', zh:'新年就要到了。', py:'Xīnnián jiùyào dào le.'},
  {vi:'Hôm nay âm u, lạnh hơn hôm qua.', zh:'今天阴，比昨天更冷。', py:'Jīntiān yīn, bǐ zuótiān gèng lěng.'},
  {vi:'Mọi người đều đang chuẩn bị về nhà.', zh:'大家都在准备回家。', py:'Dàjiā dōu zài zhǔnbèi huí jiā.'},
  {vi:'Em gái tôi đang mua vé ở ga tàu hỏa.', zh:'我妹妹在火车站买票。', py:'Wǒ mèimei zài huǒchēzhàn mǎi piào.'},
];

// ══════════════════════════════════════════
// LUYỆN DỊCH (chiều Trung→Việt) — noi dung KHAC voi chieu Viet->Trung o tren
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:'Năm mới sắp đến rồi, mọi người đều rất vui.', zh:'新年就要到了，大家都很高兴。', py:'Xīnnián jiùyào dào le, dàjiā dōu hěn gāoxìng.'},
  {vi:'Em gái ở ga tàu, tôi ở sân bay, chúng tôi càng bận hơn.', zh:'妹妹在火车站，我在机场，我们更忙了。', py:'Mèimei zài huǒchēzhàn, wǒ zài jīchǎng, wǒmen gèng máng le.'},
  {vi:'Hôm nay âm u hơn hôm qua, có thể sắp mưa rồi.', zh:'今天比昨天阴，可能要下雨了。', py:'Jīntiān bǐ zuótiān yīn, kěnéng yào xià yǔ le.'},
  {vi:'Mọi người đều chuẩn bị đi xe buýt về nhà.', zh:'大家都准备坐公共汽车回家。', py:'Dàjiā dōu zhǔnbèi zuò gōnggòng qìchē huí jiā.'},
];
