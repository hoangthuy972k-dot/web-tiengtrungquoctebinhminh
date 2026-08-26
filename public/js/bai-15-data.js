// ══════════════════════════════════════════
// DATA — Bài 15: 新年就要到了
// ══════════════════════════════════════════
const vocabData = [
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

const dialogData = [
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

// Điền từ — 更 / 就要-快要-快-要……了 / 都……了
const fillData = [
  {pre:'新年',blank:'就',post:'要到了。',hint:'(sắp — 就要……了)',ans:'就',exp:'就要……了 diễn tả việc sắp xảy ra'},
  {pre:'今天',blank:'快',post:'要下雪了。',hint:'(sắp — 快要……了)',ans:'快'},
  {pre:'明天',blank:'要',post:'下雨了。',hint:'(sắp — 要……了)',ans:'要'},
  {pre:'火车马上',blank:'快',post:'走了。',hint:'(sắp — 快……了)',ans:'快'},
  {pre:'今天比昨天',blank:'更',post:'冷。',hint:'(càng, hơn)',ans:'更',exp:'更 nhấn mạnh mức độ tăng thêm khi so sánh'},
  {pre:'衣服',blank:'都',post:'买好了。',hint:'(đều đã — 都……了)',ans:'都'},
  {pre:'大家',blank:'都',post:'在准备回家。',hint:'(đều)',ans:'都'},
  {pre:'妹妹坐公共汽车去',blank:'火车站',post:'接朋友了。',hint:'(ga tàu — ôn từ vựng)',ans:'火车站'},
];

// Sắp xếp — khác Điền từ
const sortData = [
  {words:['新年','就要','到','了','，','你','有','什么','计划','？'],ans:'新年就要到了，你有什么计划？',audio:'新年就要到了，你有什么计划？'},
  {words:['我','要','回家','过年','，','票','已经','买','好','了','。'],ans:'我要回家过年，票已经买好了。',audio:'我要回家过年，票已经买好了。'},
  {words:['今天','阴','，','比','昨天','更','冷','。'],ans:'今天阴，比昨天更冷。',audio:'今天阴，比昨天更冷。'},
  {words:['她','坐','公共汽车','去','火车站','接','朋友','了','。'],ans:'她坐公共汽车去火车站接朋友了。',audio:'她坐公共汽车去火车站接朋友了。'},
  {words:['大家','都','在','准备','回家','。'],ans:'大家都在准备回家。',audio:'大家都在准备回家。'},
  {words:['我','觉得','今年','比','去年','更','热闹','。'],ans:'我觉得今年比去年更热闹。',audio:'我觉得今年比去年更热闹。'},
];

const matchData = [
  {left:'新年就要到了，',right:'你有什么计划？'},
  {left:'火车站人多不多？',right:'大家都在准备回家，人很多。'},
  {left:'今天天气怎么样？',right:'今天阴，比昨天更冷。'},
  {left:'你妹妹呢？',right:'她坐公共汽车去火车站接朋友了。'},
  {left:'都几点了，她还没回来吗？',right:'快要回来了，你等一下。'},
  {left:'新年快到了，你准备好了吗？',right:'差不多了，衣服都买好了。'},
];

// Trắc nghiệm — không audio; trộn từ Bài 7/10/12/14 làm phương án nhiễu
const mcData = [
  {q:'新年＿＿要到了。',opts:['就','才','再','又'],ans:0},
  {q:'今天阴，比昨天＿＿冷。',opts:['更','很','太','最'],ans:0},
  {q:'她坐公共汽车去＿＿接朋友了。',opts:['火车站','宾馆','公司','教室'],ans:0},
  {q:'＿＿都在准备回家。',opts:['大家','大人','朋友','同学'],ans:0},
  {q:'火车＿＿买好了，你放心吧。',opts:['票','钱','书','表'],ans:0},
  {q:'我觉得今年比去年＿＿热闹。',opts:['更','太','最','真'],ans:0},
  {q:'他有一个＿＿，今年十岁。',opts:['妹妹','朋友','同学','老师'],ans:0},
  {q:'今天天气有点儿＿＿，可能要下雨。',opts:['阴','晴','热','冷'],ans:0},
  {q:'＿＿要下雪了，快回家吧。',opts:['快','就','才','再'],ans:0},
  {q:'衣服＿＿买好了。',opts:['都','也','还','又'],ans:0},
];

const speakingData = {
  t1:{
    intro:'Nhấn 🔊 nghe từng câu mẫu, đọc to theo cho tới khi trôi chảy. Chú ý thanh điệu và nhịp câu. Có thể đọc phân vai theo cặp.',
    models:[
      {zh:'新年就要到了，你有什么计划？',py:'Xīnnián jiùyào dào le, nǐ yǒu shénme jìhuà?',vn:'Năm mới sắp đến rồi, bạn có kế hoạch gì không?'},
      {zh:'我要回家过年，票已经买好了。',py:'Wǒ yào huíjiā guònián, piào yǐjīng mǎihǎo le.',vn:'Tôi sẽ về nhà ăn Tết, vé đã mua xong rồi.'},
      {zh:'今天阴，比昨天更冷。',py:'Jīntiān yīn, bǐ zuótiān gèng lěng.',vn:'Hôm nay âm u, lạnh hơn hôm qua.'},
      {zh:'她坐公共汽车去火车站接朋友了。',py:'Tā zuò gōnggòngqìchē qù huǒchēzhàn jiē péngyou le.',vn:'Cô ấy đi xe buýt đến ga tàu đón bạn rồi.'},
    ],
  },
  t2:{
    intro:'Dùng khung câu cho sẵn, thay thế phần gạch chân bằng từ trong ô gợi ý để tạo câu mới. Nhấn 🔊 để nghe rồi nói to mỗi câu bạn tạo được.',
    drills:[
      {frame:'＿＿就要到了。',frame_py:'___ jiùyào dào le.',vn:'＿＿ sắp đến rồi.',options:['新年','火车','考试'],samples:['新年就要到了。','火车就要到了。','考试就要到了。']},
      {frame:'今天比昨天更＿＿。',frame_py:'Jīntiān bǐ zuótiān gèng ___.',vn:'Hôm nay ＿＿ hơn hôm qua.',options:['冷','热','忙'],samples:['今天比昨天更冷。','今天比昨天更热。','今天比昨天更忙。']},
      {frame:'他坐公共汽车去＿＿。',frame_py:'Tā zuò gōnggòngqìchē qù ___.',vn:'Anh ấy đi xe buýt đến ＿＿.',options:['火车站','宾馆','公司'],samples:['他坐公共汽车去火车站。','他坐公共汽车去宾馆。','他坐公共汽车去公司。']},
      {frame:'衣服都＿＿了。',frame_py:'Yīfu dōu ___ le.',vn:'Quần áo đều đã ＿＿ rồi.',options:['买好','穿好','洗好'],samples:['衣服都买好了。','衣服都穿好了。','衣服都洗好了。']},
    ],
  },
  t3:{
    intro:'Không nhìn câu mẫu, tự dùng từ đã học để nói theo tình huống. Nói liền 2–3 câu. Ghi âm lại rồi nghe để tự sửa.',
    tasks:[
      {role:'🎉 Tình huống 1 — Nói về kế hoạch năm mới',
       guide:'Bạn hỏi và trả lời về kế hoạch dịp năm mới sắp tới.',
       structure:['新年就要到了，你有什么计划？','我要回家过年，票已经买好了。'],
       sample:'新年就要到了，你有什么计划？我要回家过年，票已经买好了。',
       sample_vn:'Năm mới sắp đến rồi, bạn có kế hoạch gì không? Tôi sẽ về nhà ăn Tết, vé đã mua xong rồi.'},
      {role:'🌦️ Tình huống 2 — Nói về thời tiết',
       guide:'Bạn miêu tả thời tiết hôm nay so với hôm qua, dự đoán trời sắp có tuyết.',
       structure:['今天阴，比昨天更冷。','快要下雪了。'],
       sample:'今天阴，比昨天更冷，快要下雪了。',
       sample_vn:'Hôm nay âm u, lạnh hơn hôm qua, sắp có tuyết rơi rồi.'},
      {role:'👨‍👩‍👧 Tình huống 3 — Nói về người thân đi đón bạn',
       guide:'Bạn kể về việc em gái đi xe buýt ra ga tàu đón bạn.',
       structure:['我妹妹坐公共汽车去火车站接朋友了。'],
       sample:'我妹妹坐公共汽车去火车站接朋友了。',
       sample_vn:'Em gái tôi đi xe buýt đến ga tàu đón bạn rồi.'},
    ],
  },
};
