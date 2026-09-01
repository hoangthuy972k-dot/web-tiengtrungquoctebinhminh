// ══════════════════════════════════════════
// DATA — HSK3 Bài 5: 我最近越来越胖了 (Dạo này tôi ngày càng béo lên)
// Nguồn: HSK标准教程3 (Giáo trình chuẩn HSK 3 — nhantriviet.com)
// ══════════════════════════════════════════
var vocabData = [
  {n:1,zh:'发烧',py:'fā shāo',pos:'Động từ',vn:'sốt',em:'🤒',lesson:1,
   explain:['Thân nhiệt cơ thể tăng cao hơn bình thường, thường là dấu hiệu của bệnh.'],
   usage:'Động từ ly hợp; thường đi cùng 有点儿/一点儿: 有点儿发烧.',
   collo:['有点儿发烧','发高烧','退烧'],
   ex_zh:'前几天有点儿发烧，现在好多了。',ex_py:'Qián jǐ tiān yǒudiǎnr fā shāo, xiànzài hǎoduō le.',ex_vn:'Mấy hôm trước hơi sốt, giờ đỡ nhiều rồi.',
   exList:[
     {zh:'前几天有点儿发烧，现在好多了。',py:'Qián jǐ tiān yǒudiǎnr fā shāo, xiànzài hǎoduō le.',vn:'Mấy hôm trước hơi sốt, giờ đỡ nhiều rồi.'},
     {zh:'你不是发烧了吗？怎么还来上班？',py:'Nǐ bú shì fā shāo le ma? Zěnme hái lái shàngbān?',vn:'Bạn chẳng phải bị sốt sao? Sao vẫn đến làm vậy?'},
     {zh:'我是不是发烧了？怎么总是觉得冷？',py:'Wǒ shì bu shì fā shāo le? Zěnme zǒngshì juéde lěng?',vn:'Có phải tôi bị sốt không? Sao cứ thấy lạnh mãi vậy?'},
   ],
   hanzi:[
     {c:'烧',p:'shāo',type:'左右结构 · Trái-phải',st:10,ord:'火 trái → 尧 phải',rad:'火 (hỏa – lửa)',mean:'đốt cháy; sốt',
      tip:'火(lửa) + 尧(cao ngất) → lửa cháy cao, mở rộng nghĩa cơ thể "nóng như lửa" = SỐT.',
      cf:'浇 (jiāo – "tưới nước", có 氵 thay vì 火")',w:'发烧 / 退烧'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vì tôi hơi sốt nên hôm nay tôi không đi làm.',answer:'因为我有点儿发烧，所以今天不去上班。',answerPy:'Yīnwèi wǒ yǒudiǎnr fā shāo, suǒyǐ jīntiān bú qù shàngbān.',
      note:'因为……所以…… nêu nguyên nhân — kết quả.'},
     {promptLang:'vi',prompt:'Nếu con bạn bị sốt thì nên đưa đi bệnh viện.',answer:'如果你的孩子发烧了，就应该带他去医院。',answerPy:'Rúguǒ nǐ de háizi fā shāo le, jiù yīnggāi dài tā qù yīyuàn.',
      note:'如果……就…… diễn tả giả thiết — kết quả (ôn lại 带 đã học ở Bài 1).'},
   ]},

  {n:2,zh:'为',py:'wèi',pos:'Giới từ',vn:'cho, vì',em:'🎁',lesson:1,
   explain:['Giới từ chỉ đối tượng hưởng lợi hoặc mục đích của hành động.'],
   usage:'Giới từ, đứng trước đối tượng: 为 + [đối tượng] + động từ (为你买).',
   collo:['为你买','为朋友准备','为孩子做饭'],
   ex_zh:'这是我为你买的绿茶，很不错。',ex_py:'Zhè shì wǒ wèi nǐ mǎi de lǜchá, hěn búcuò.',ex_vn:'Đây là trà xanh tôi mua cho bạn, ngon lắm đấy.',
   exList:[
     {zh:'这是我为你买的绿茶，很不错。',py:'Zhè shì wǒ wèi nǐ mǎi de lǜchá, hěn búcuò.',vn:'Đây là trà xanh tôi mua cho bạn, ngon lắm đấy.'},
     {zh:'为什么？怎么了？',py:'Wèi shénme? Zěnme le?',vn:'Sao vậy? Có chuyện gì thế?'},
     {zh:'妈妈每天都为我们做饭。',py:'Māma měitiān dōu wèi wǒmen zuò fàn.',vn:'Mẹ mỗi ngày đều nấu cơm cho chúng tôi.'},
   ],
   hanzi:[
     {c:'为',p:'wèi',type:'独体字 · Chữ đơn',st:4,ord:'nét liền',rad:'丶 (chủ)',mean:'vì, cho',
      tip:'Chữ giản thể từ 爲 (hình con voi đang làm việc) → nghĩa "làm việc VÌ ai đó", mở rộng thành giới từ CHO/VÌ.',
      cf:'办 (bàn – "làm việc", có 力 hai bên")',w:'为你 / 为了 / 因为'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đây là bánh kem tôi mua cho bạn.',answer:'这是我为你买的蛋糕。',answerPy:'Zhè shì wǒ wèi nǐ mǎi de dàngāo.',
      note:'为 + đối tượng đứng trước động từ (ôn lại 蛋糕 đã học ở Bài 4).'},
     {promptLang:'vi',prompt:'Chỉ cần bạn vui thì tôi làm gì cho bạn cũng được.',answer:'只要你高兴，我为你做什么都可以。',answerPy:'Zhǐyào nǐ gāoxìng, wǒ wèi nǐ zuò shénme dōu kěyǐ.',
      note:'只要……就…… (ở đây dùng 都) diễn tả điều kiện đủ.'},
   ]},

  {n:3,zh:'照顾',py:'zhàogù',pos:'Động từ',vn:'chăm sóc',em:'🤲',lesson:2,
   explain:['Quan tâm, trông nom, giúp đỡ ai đó, thường dùng khi người đó ốm đau hoặc còn nhỏ.'],
   usage:'Động từ, mang tân ngữ trực tiếp: 照顾 + [người] (照顾他).',
   collo:['照顾他','在家照顾','互相照顾'],
   ex_zh:'我儿子生病了，我要在家照顾他。',ex_py:'Wǒ érzi shēng bìng le, wǒ yào zài jiā zhàogù tā.',ex_vn:'Con trai tôi bị ốm, tôi phải ở nhà chăm sóc cháu.',
   exList:[
     {zh:'我儿子生病了，我要在家照顾他。',py:'Wǒ érzi shēng bìng le, wǒ yào zài jiā zhàogù tā.',vn:'Con trai tôi bị ốm, tôi phải ở nhà chăm sóc cháu.'},
     {zh:'我感冒好了，明天你不用来照顾我了。',py:'Wǒ gǎnmào hǎo le, míngtiān nǐ búyòng lái zhàogù wǒ le.',vn:'Tôi khỏi cảm rồi, ngày mai bạn không cần đến chăm sóc tôi nữa.'},
     {zh:'谢谢你这几天一直照顾我。',py:'Xièxie nǐ zhè jǐ tiān yìzhí zhàogù wǒ.',vn:'Cảm ơn bạn mấy hôm nay đã luôn chăm sóc tôi.'},
   ],
   hanzi:[
     {c:'顾',p:'gù',type:'左右结构 · Trái-phải',st:10,ord:'厄 trái → 页 phải',rad:'页 (hiệt – đầu)',mean:'chăm sóc, đoái hoài',
      tip:'页(đầu, ý chỉ ngoảnh đầu nhìn) → NGOẢNH ĐẦU quan tâm đến ai đó = CHĂM SÓC.',
      cf:'雇 (gù – "thuê", có 隹 thay vì 页")',w:'照顾 / 顾客'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi phải ở nhà chăm sóc con trai bị ốm.',answer:'我要在家照顾生病的儿子。',answerPy:'Wǒ yào zài jiā zhàogù shēng bìng de érzi.',
      note:'照顾 + tân ngữ chỉ người.'},
     {promptLang:'vi',prompt:'Chỉ cần bạn chăm sóc mẹ tốt thì mẹ sẽ nhanh khỏe lại.',answer:'只要你把妈妈照顾好，她就会很快好起来。',answerPy:'Zhǐyào nǐ bǎ māma zhàogù hǎo, tā jiù huì hěn kuài hǎoqǐlai.',
      note:'只要……就…… diễn tả điều kiện đủ (ôn lại 把 đã học ở Bài 2).'},
   ]},

  {n:4,zh:'用',py:'yòng',pos:'Động từ',vn:'cần, dùng',em:'❓',lesson:2,
   explain:['Cần thiết phải làm gì; thường dùng ở dạng phủ định 不用 (không cần).'],
   usage:'Động từ; 不用 + V = không cần làm gì.',
   collo:['不用','不用去','有用'],
   ex_zh:'不用去医院，昨天吃了感冒药，现在好一些了。',ex_py:'Búyòng qù yīyuàn, zuótiān chīle gǎnmào yào, xiànzài hǎo yìxiē le.',ex_vn:'Không cần đi bệnh viện đâu, hôm qua uống thuốc cảm rồi, giờ đỡ hơn một chút rồi.',
   exList:[
     {zh:'不用去医院，昨天吃了感冒药，现在好一些了。',py:'Búyòng qù yīyuàn, zuótiān chīle gǎnmào yào, xiànzài hǎo yìxiē le.',vn:'Không cần đi bệnh viện đâu, hôm qua uống thuốc cảm rồi, giờ đỡ hơn một chút rồi.'},
     {zh:'那不用再吃药了。',py:'Nà búyòng zài chī yào le.',vn:'Vậy thì không cần uống thuốc nữa.'},
     {zh:'医生，我的病用吃药吗？',py:'Yīshēng, wǒ de bìng yòng chī yào ma?',vn:'Bác sĩ, bệnh của tôi có cần uống thuốc không?'},
   ],
   hanzi:[
     {c:'用',p:'yòng',type:'独体字 · Chữ đơn (tượng hình)',st:5,ord:'nét liền, hình cái thùng/ống',rad:'用',mean:'dùng, cần',
      tip:'Chữ tượng hình mô phỏng một vật dụng (ống/thùng) → nghĩa DÙNG, mở rộng 不用 = KHÔNG CẦN.',
      cf:'甩 (shuǎi – "vung, ném", thêm 1 nét vào 用")',w:'不用 / 用了 / 有用'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Không cần lo lắng, uống thuốc rồi sẽ khỏe hơn.',answer:'不用着急，吃了药就会好一些。',answerPy:'Búyòng zháojí, chīle yào jiù huì hǎo yìxiē.',
      note:'不用 + V diễn tả không cần thiết (ôn lại 着急 đã học ở Bài 1).'},
     {promptLang:'vi',prompt:'Nếu bạn không cảm thấy đau nữa thì không cần đi khám nữa.',answer:'如果你不觉得疼了，就不用再去看病了。',answerPy:'Rúguǒ nǐ bù juéde téng le, jiù búyòng zài qù kànbìng le.',
      note:'如果……就…… diễn tả giả thiết — kết quả (ôn lại 疼 đã học ở Bài 2).'},
   ]},

  {n:5,zh:'感冒',py:'gǎnmào',pos:'Động từ',vn:'bị cảm',em:'🤧',lesson:2,
   explain:['Bệnh cảm cúm thông thường, do nhiễm lạnh hoặc vi rút.'],
   usage:'Động từ ly hợp; cũng dùng làm danh từ trong 感冒药 (thuốc cảm).',
   collo:['感冒药','感冒了','没感冒'],
   ex_zh:'昨天吃了感冒药，现在好一些了。',ex_py:'Zuótiān chīle gǎnmào yào, xiànzài hǎo yìxiē le.',ex_vn:'Hôm qua uống thuốc cảm rồi, giờ đỡ hơn một chút rồi.',
   exList:[
     {zh:'昨天吃了感冒药，现在好一些了。',py:'Zuótiān chīle gǎnmào yào, xiànzài hǎo yìxiē le.',vn:'Hôm qua uống thuốc cảm rồi, giờ đỡ hơn một chút rồi.'},
     {zh:'前天感冒，昨天发烧，头也越来越疼。',py:'Qiántiān gǎnmào, zuótiān fā shāo, tóu yě yuè lái yuè téng.',vn:'Hôm kia bị cảm, hôm qua sốt, đầu cũng đau ngày càng nhiều.'},
     {zh:'我感冒好了，明天你不用来照顾我了。',py:'Wǒ gǎnmào hǎo le, míngtiān nǐ búyòng lái zhàogù wǒ le.',vn:'Tôi khỏi cảm rồi, ngày mai bạn không cần đến chăm sóc tôi nữa.'},
   ],
   hanzi:[
     {c:'冒',p:'mào',type:'上下结构 · Trên-dưới',st:9,ord:'冃 trên → 目 dưới',rad:'冂 (quynh)',mean:'mạo hiểm; cảm (bệnh)',
      tip:'冃(mũ trùm) trên 目(mắt) → hình ảnh khói/hơi xông lên che mắt, mở rộng nghĩa "nhiễm phải" = CẢM.',
      cf:'帽 (mào – "cái mũ", có bộ 巾")',w:'感冒 / 感冒药'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy tôi bị cảm nhưng vẫn phải đi làm.',answer:'虽然我感冒了，但是还是要上班。',answerPy:'Suīrán wǒ gǎnmào le, dànshì háishi yào shàngbān.',
      note:'虽然……但是…… diễn tả sự tương phản.'},
     {promptLang:'vi',prompt:'Chỉ cần bạn nhiều nghỉ ngơi thì cảm sẽ nhanh khỏi.',answer:'只要你多休息，感冒就会好得快。',answerPy:'Zhǐyào nǐ duō xiūxi, gǎnmào jiù huì hǎo de kuài.',
      note:'只要……就…… diễn tả điều kiện đủ.'},
   ]},

  {n:6,zh:'季节',py:'jìjié',pos:'Danh từ',vn:'mùa',em:'🍂',lesson:3,
   explain:['Khoảng thời gian trong năm có đặc điểm khí hậu riêng (xuân, hạ, thu, đông).'],
   usage:'Danh từ; thường hỏi bằng 哪个季节 (mùa nào).',
   collo:['哪个季节','四个季节','最喜欢的季节'],
   ex_zh:'你最喜欢哪个季节？',ex_py:'Nǐ zuì xǐhuan nǎge jìjié?',ex_vn:'Bạn thích mùa nào nhất?',
   exList:[
     {zh:'你最喜欢哪个季节？',py:'Nǐ zuì xǐhuan nǎge jìjié?',vn:'Bạn thích mùa nào nhất?'},
     {zh:'一年有四个季节：春天、夏天、秋天、冬天。',py:'Yì nián yǒu sì ge jìjié: chūntiān, xiàtiān, qiūtiān, dōngtiān.',vn:'Một năm có bốn mùa: xuân, hạ, thu, đông.'},
     {zh:'每个季节我都喜欢。',py:'Měi ge jìjié wǒ dōu xǐhuan.',vn:'Mùa nào tôi cũng thích.'},
   ],
   hanzi:[
     {c:'季',p:'jì',type:'上下结构 · Trên-dưới',st:8,ord:'禾 trên → 子 dưới',rad:'子 (tử – con)',mean:'mùa, thời kỳ',
      tip:'禾(lúa) + 子(con, nhỏ) → mùa vụ nhỏ trong năm, như một "đứa con" của năm = MÙA.',
      cf:'李 (lǐ – "họ Lý; quả mận", cũng có phần 子")',w:'季节 / 四季'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Trong bốn mùa, tôi thích mùa xuân nhất.',answer:'四个季节里，我最喜欢春天。',answerPy:'Sì ge jìjié lǐ, wǒ zuì xǐhuan chūntiān.',
      note:'最 + động từ/tính từ diễn tả mức độ cao nhất.'},
     {promptLang:'vi',prompt:'Mỗi mùa đều có cái đẹp riêng của nó.',answer:'每个季节都有自己的美。',answerPy:'Měi ge jìjié dōu yǒu zìjǐ de měi.',
      note:'每……都…… diễn tả tính phổ quát.'},
   ]},

  {n:7,zh:'当然',py:'dāngrán',pos:'Phó từ',vn:'đương nhiên, dĩ nhiên',em:'👍',lesson:3,
   explain:['Điều hiển nhiên, không cần nghi ngờ.'],
   usage:'Phó từ, thường đứng đầu câu trả lời hoặc trước 是: 当然 + 是 + [câu trả lời].',
   collo:['当然是','当然可以','当然好'],
   ex_zh:'当然是春天，天气不那么冷了，草和树都绿了，花也开了。',ex_py:'Dāngrán shì chūntiān, tiānqì bú nàme lěng le, cǎo hé shù dōu lǜ le, huā yě kāi le.',ex_vn:'Đương nhiên là mùa xuân, thời tiết không còn lạnh nữa, cỏ và cây đều xanh rồi, hoa cũng nở rồi.',
   exList:[
     {zh:'当然是春天，天气不那么冷了，草和树都绿了，花也开了。',py:'Dāngrán shì chūntiān, tiānqì bú nàme lěng le, cǎo hé shù dōu lǜ le, huā yě kāi le.',vn:'Đương nhiên là mùa xuân, thời tiết không còn lạnh nữa, cỏ và cây đều xanh rồi, hoa cũng nở rồi.'},
     {zh:'当然可以，你随便看。',py:'Dāngrán kěyǐ, nǐ suíbiàn kàn.',vn:'Đương nhiên được, bạn cứ xem thoải mái.'},
     {zh:'这个问题我当然知道答案。',py:'Zhège wèntí wǒ dāngrán zhīdào dá\'àn.',vn:'Câu hỏi này tôi đương nhiên biết đáp án.'},
   ],
   hanzi:[
     {c:'当',p:'dāng',type:'上下结构 · Trên-dưới',st:6,ord:'⺌ trên → 彐+田 dưới',rad:'田 (điền – ruộng)',mean:'đương, nên; đương nhiên',
      tip:'Hình ảnh hai thửa ruộng đối diện tương xứng nhau → nghĩa "tương xứng, nên vậy", mở rộng thành ĐƯƠNG NHIÊN.',
      cf:'常 (cháng – "thường xuyên", không có bộ 田")',w:'当然 / 应当'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đương nhiên tôi thích mùa hè nhất, vì có thể mặc váy đẹp.',answer:'我当然最喜欢夏天，因为可以穿漂亮的裙子。',answerPy:'Wǒ dāngrán zuì xǐhuan xiàtiān, yīnwèi kěyǐ chuān piàoliang de qúnzi.',
      note:'因为 giải thích lý do cho câu trả lời.'},
     {promptLang:'vi',prompt:'Nếu bạn hỏi tôi thì đương nhiên tôi sẽ giúp bạn.',answer:'如果你问我，我当然会帮你。',answerPy:'Rúguǒ nǐ wèn wǒ, wǒ dāngrán huì bāng nǐ.',
      note:'如果……就/会…… diễn tả giả thiết — kết quả.'},
   ]},

  {n:8,zh:'春(天)',py:'chūn(tiān)',pos:'Danh từ',vn:'mùa xuân',em:'🌸',lesson:3,
   explain:['Mùa đầu tiên trong năm, sau mùa đông, thời tiết ấm dần, cây cối đâm chồi.'],
   usage:'Danh từ; thường nói 春天 (đầy đủ) hoặc 春 (trong từ ghép/thơ).',
   collo:['春天到了','喜欢春天','春天的花'],
   ex_zh:'当然是春天，天气不那么冷了。',ex_py:'Dāngrán shì chūntiān, tiānqì bú nàme lěng le.',ex_vn:'Đương nhiên là mùa xuân, thời tiết không còn lạnh nữa.',
   exList:[
     {zh:'当然是春天，天气不那么冷了。',py:'Dāngrán shì chūntiān, tiānqì bú nàme lěng le.',vn:'Đương nhiên là mùa xuân, thời tiết không còn lạnh nữa.'},
     {zh:'春天到了，花都开了。',py:'Chūntiān dào le, huā dōu kāi le.',vn:'Mùa xuân đến rồi, hoa đều nở cả rồi.'},
     {zh:'我喜欢3月，因为天气不那么冷了。',py:'Wǒ xǐhuan sān yuè, yīnwèi tiānqì bú nàme lěng le.',vn:'Tôi thích tháng 3, vì thời tiết không còn lạnh nữa.'},
   ],
   hanzi:[
     {c:'春',p:'chūn',type:'上下结构 · Trên-dưới',st:9,ord:'三+人 trên → 日 dưới',rad:'日 (nhật – mặt trời)',mean:'mùa xuân',
      tip:'Hình ảnh cây cỏ mọc lên đón ánh mặt trời 日 → MÙA XUÂN, mùa cây cối sinh sôi.',
      cf:'泰 (tài – "yên ổn, hanh thông", nét trên tương tự")',w:'春天 / 春节'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Mùa xuân đến rồi, cỏ và cây đều xanh rồi.',answer:'春天到了，草和树都绿了。',answerPy:'Chūntiān dào le, cǎo hé shù dōu lǜ le.',
      note:'了 diễn tả sự thay đổi/tình huống mới (điểm ngữ pháp bài này).'},
     {promptLang:'vi',prompt:'Vì mùa xuân trời không lạnh nên mọi người thích ra ngoài đi dạo.',answer:'因为春天天气不冷，所以大家喜欢出去走走。',answerPy:'Yīnwèi chūntiān tiānqì bù lěng, suǒyǐ dàjiā xǐhuan chūqu zǒuzou.',
      note:'因为……所以…… nêu nguyên nhân — kết quả.'},
   ]},

  {n:9,zh:'草',py:'cǎo',pos:'Danh từ',vn:'cỏ',em:'🌿',lesson:3,
   explain:['Loài thực vật thân mềm, mọc thấp, thường phủ xanh mặt đất.'],
   usage:'Danh từ; thường xuất hiện cùng 树 (cây), 绿 (xanh): 草和树都绿了.',
   collo:['草地','草和树','绿草'],
   ex_zh:'草和树都绿了，花也开了。',ex_py:'Cǎo hé shù dōu lǜ le, huā yě kāi le.',ex_vn:'Cỏ và cây đều xanh rồi, hoa cũng nở rồi.',
   exList:[
     {zh:'草和树都绿了，花也开了。',py:'Cǎo hé shù dōu lǜ le, huā yě kāi le.',vn:'Cỏ và cây đều xanh rồi, hoa cũng nở rồi.'},
     {zh:'树和草都绿了，天气真好！',py:'Shù hé cǎo dōu lǜ le, tiānqì zhēn hǎo!',vn:'Cây và cỏ đều xanh rồi, thời tiết đẹp thật!'},
     {zh:'我们要多出来走走，在草地上坐坐。',py:'Wǒmen yào duō chūlai zǒuzou, zài cǎodì shang zuòzuo.',vn:'Chúng ta nên ra ngoài đi dạo nhiều, ngồi trên bãi cỏ.'},
   ],
   hanzi:[
     {c:'草',p:'cǎo',type:'上下结构 · Trên-dưới',st:9,ord:'艹 trên → 早 dưới',rad:'艹 (thảo – cỏ)',mean:'cỏ',
      tip:'艹(bộ cỏ) + 早(sớm, mọc sớm) → loài cây mọc sớm và nhanh = CỎ.',
      cf:'早 (zǎo – "sớm", không có bộ 艹")',w:'草地 / 绿草'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cỏ và cây đều xanh rồi, mùa xuân đến thật rồi.',answer:'草和树都绿了，春天真的到了。',answerPy:'Cǎo hé shù dōu lǜ le, chūntiān zhēnde dào le.',
      note:'了 diễn tả sự thay đổi (ôn lại 春天 vừa học trong bài này).'},
     {promptLang:'vi',prompt:'Nếu bãi cỏ khô rồi thì chúng ta không nên ngồi ở đó nữa.',answer:'如果草地干了，我们就不要坐在那儿了。',answerPy:'Rúguǒ cǎodì gān le, wǒmen jiù bú yào zuò zài nàr le.',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
   ]},

  {n:10,zh:'夏(天)',py:'xià(tiān)',pos:'Danh từ',vn:'mùa hè',em:'☀️',lesson:3,
   explain:['Mùa thứ hai trong năm, sau mùa xuân, thời tiết nóng nhất trong năm.'],
   usage:'Danh từ; thường nói 夏天 (đầy đủ) hoặc 夏 (trong từ ghép).',
   collo:['喜欢夏天','夏天热','夏天到了'],
   ex_zh:'我最喜欢夏天，因为我可以穿漂亮的裙子了。',ex_py:'Wǒ zuì xǐhuan xiàtiān, yīnwèi wǒ kěyǐ chuān piàoliang de qúnzi le.',ex_vn:'Tôi thích mùa hè nhất, vì tôi có thể mặc váy đẹp rồi.',
   exList:[
     {zh:'我最喜欢夏天，因为我可以穿漂亮的裙子了。',py:'Wǒ zuì xǐhuan xiàtiān, yīnwèi wǒ kěyǐ chuān piàoliang de qúnzi le.',vn:'Tôi thích mùa hè nhất, vì tôi có thể mặc váy đẹp rồi.'},
     {zh:'那我也喜欢夏天了。',py:'Nà wǒ yě xǐhuan xiàtiān le.',vn:'Vậy tôi cũng thích mùa hè rồi.'},
     {zh:'夏天到了，天气越来越热。',py:'Xiàtiān dào le, tiānqì yuè lái yuè rè.',vn:'Mùa hè đến rồi, thời tiết ngày càng nóng.'},
   ],
   hanzi:[
     {c:'夏',p:'xià',type:'独体字 · Chữ đơn (phức tạp)',st:10,ord:'nét liền, hình người đội mũ lớn',rad:'夂 (truy)',mean:'mùa hè',
      tip:'Hình tượng người đội mũ lớn tránh nắng gắt → MÙA HÈ, mùa nắng nóng.',
      cf:'复 (fù – "lặp lại", phần dưới tương tự")',w:'夏天 / 夏季'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vì mùa hè có thể mặc váy đẹp nên tôi thích mùa hè nhất.',answer:'因为夏天可以穿漂亮的裙子，所以我最喜欢夏天。',answerPy:'Yīnwèi xiàtiān kěyǐ chuān piàoliang de qúnzi, suǒyǐ wǒ zuì xǐhuan xiàtiān.',
      note:'因为……所以…… nêu nguyên nhân — kết quả (ôn lại 裙子 vừa học trong bài này).'},
     {promptLang:'vi',prompt:'Chỉ cần mùa hè đến là mọi người sẽ mặc ít quần áo hơn.',answer:'只要夏天到了，大家就会穿得少一些。',answerPy:'Zhǐyào xiàtiān dào le, dàjiā jiù huì chuān de shǎo yìxiē.',
      note:'只要……就…… diễn tả điều kiện đủ.'},
   ]},

  {n:11,zh:'裙子',py:'qúnzi',pos:'Danh từ',vn:'váy',em:'👗',lesson:3,
   explain:['Trang phục nữ mặc ở phần dưới cơ thể, thường liền một mảnh.'],
   usage:'Danh từ; lượng từ đi kèm là 条: 一条裙子.',
   collo:['一条裙子','穿裙子','漂亮的裙子'],
   ex_zh:'我可以穿漂亮的裙子了。',ex_py:'Wǒ kěyǐ chuān piàoliang de qúnzi le.',ex_vn:'Tôi có thể mặc váy đẹp rồi.',
   exList:[
     {zh:'我可以穿漂亮的裙子了。',py:'Wǒ kěyǐ chuān piàoliang de qúnzi le.',vn:'Tôi có thể mặc váy đẹp rồi.'},
     {zh:'我喜欢看你穿漂亮的裙子。',py:'Wǒ xǐhuan kàn nǐ chuān piàoliang de qúnzi.',vn:'Tôi thích nhìn bạn mặc váy đẹp thôi.'},
     {zh:'这条裙子是去年买的，今年就不能穿了。',py:'Zhè tiáo qúnzi shì qùnián mǎi de, jīnnián jiù bù néng chuān le.',vn:'Cái váy này mua từ năm ngoái, năm nay không mặc vừa nữa rồi.'},
   ],
   hanzi:[
     {c:'裙',p:'qún',type:'左右结构 · Trái-phải',st:12,ord:'衤 trái → 君 phải',rad:'衤 (y – quần áo)',mean:'váy',
      tip:'衤(quần áo) + 君(người cao quý) → trang phục cho phái nữ, gợi vẻ đài các = VÁY.',
      cf:'群 (qún – "đám đông", có 羊 thay vì 衤")',w:'裙子 / 一条裙子'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi thích nhìn con gái tôi mặc váy mới.',answer:'我喜欢看我女儿穿新裙子。',answerPy:'Wǒ xǐhuan kàn wǒ nǚ\'ér chuān xīn qúnzi.',
      note:'V1(看)+V2(穿) — 看 mang một mệnh đề làm tân ngữ.'},
     {promptLang:'vi',prompt:'Nếu cái váy này không vừa nữa thì chúng ta đi mua cái khác.',answer:'如果这条裙子不能穿了，我们就去买别的。',answerPy:'Rúguǒ zhè tiáo qúnzi bù néng chuān le, wǒmen jiù qù mǎi biéde.',
      note:'如果……就…… diễn tả giả thiết — kết quả (ôn lại 条 đã học ở Bài 2).'},
   ]},

  {n:12,zh:'最近',py:'zuìjìn',pos:'Phó từ',vn:'gần đây, dạo này',em:'🕐',lesson:4,
   explain:['Khoảng thời gian gần với hiện tại, vừa mới qua hoặc đang diễn ra.'],
   usage:'Phó từ, thường đứng đầu câu hoặc sau chủ ngữ: 最近 + [tình huống] (最近越来越胖).',
   collo:['最近怎么样','我最近','最近越来越'],
   ex_zh:'我最近越来越胖了。',ex_py:'Wǒ zuìjìn yuè lái yuè pàng le.',ex_vn:'Dạo này tôi ngày càng béo lên.',
   exList:[
     {zh:'我最近越来越胖了。',py:'Wǒ zuìjìn yuè lái yuè pàng le.',vn:'Dạo này tôi ngày càng béo lên.'},
     {zh:'听说你最近不舒服，好些了吗？',py:'Tīngshuō nǐ zuìjìn bù shūfu, hǎo xiē le ma?',vn:'Nghe nói dạo này bạn không khỏe, đỡ hơn chưa?'},
     {zh:'最近天气越来越冷，还总是下雨。',py:'Zuìjìn tiānqì yuè lái yuè lěng, hái zǒngshì xiàyǔ.',vn:'Dạo này thời tiết ngày càng lạnh, lại còn hay mưa nữa.'},
   ],
   hanzi:[
     {c:'最',p:'zuì',type:'上下结构 · Trên-dưới',st:12,ord:'曰 trên → 取 dưới',rad:'曰 (viết – nói)',mean:'nhất; gần đây',
      tip:'曰(nói) + 取(lấy, chọn) → chọn ra điều được nói đến nhiều nhất = NHẤT; 最近 = khoảng thời gian GẦN NHẤT.',
      cf:'撮 (cuō – "một nhúm", có bộ 扌")',w:'最近 / 最好'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Dạo này tôi ngày càng bận rộn.',answer:'我最近越来越忙了。',answerPy:'Wǒ zuìjìn yuè lái yuè máng le.',
      note:'最近 + 越来越 + tính từ diễn tả sự thay đổi gần đây.'},
     {promptLang:'vi',prompt:'Tuy dạo này tôi hơi mệt nhưng vẫn phải đi làm.',answer:'虽然我最近有点儿累，但是还是要上班。',answerPy:'Suīrán wǒ zuìjìn yǒudiǎnr lèi, dànshì háishi yào shàngbān.',
      note:'虽然……但是…… diễn tả sự tương phản.'},
   ]},

  {n:13,zh:'越',py:'yuè',pos:'Phó từ',vn:'càng',em:'📈',lesson:4,
   explain:['Phó từ dùng lặp lại trong cấu trúc 越来越 hoặc 越……越…… để diễn tả mức độ tăng dần theo thời gian/điều kiện.'],
   usage:'Cấu trúc: 越来越 + tính từ/động từ tâm lý (越来越漂亮), không thêm phó từ mức độ (很/非常) phía trước.',
   collo:['越来越漂亮','越来越好吃','越来越难'],
   ex_zh:'我觉得你越来越漂亮了。',ex_py:'Wǒ juéde nǐ yuè lái yuè piàoliang le.',ex_vn:'Tôi thấy bạn ngày càng xinh hơn đấy.',
   exList:[
     {zh:'我觉得你越来越漂亮了。',py:'Wǒ juéde nǐ yuè lái yuè piàoliang le.',vn:'Tôi thấy bạn ngày càng xinh hơn đấy.'},
     {zh:'我做的饭越来越好吃，我能少吃吗？',py:'Wǒ zuò de fàn yuè lái yuè hǎochī, wǒ néng shǎo chī ma?',vn:'Cơm tôi nấu ngày càng ngon, tôi ăn ít được sao?'},
     {zh:'我觉得汉语越来越难了。',py:'Wǒ juéde Hànyǔ yuè lái yuè nán le.',vn:'Tôi thấy tiếng Trung ngày càng khó.'},
   ],
   hanzi:[
     {c:'越',p:'yuè',type:'左右结构 · Trái-phải',st:12,ord:'走 trái → 戉 phải',rad:'走 (tẩu – đi)',mean:'vượt qua; càng',
      tip:'走(đi, vượt) + 戉(cái rìu, biểu tượng quyền lực) → VƯỢT QUA giới hạn, mở rộng 越……越…… = CÀNG…CÀNG….',
      cf:'钺 (yuè – "cái việt/rìu lớn", có bộ 钅")',w:'越来越 / 越……越……'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Con đường này càng đi càng khó đi.',answer:'这条路越走越难走。',answerPy:'Zhè tiáo lù yuè zǒu yuè nán zǒu.',
      note:'越……越…… diễn tả mức độ tăng dần theo hành động (ôn lại 条/难 đã học ở Bài 2-3).'},
     {promptLang:'vi',prompt:'Vì thời tiết ngày càng lạnh nên mọi người mặc càng nhiều.',answer:'因为天气越来越冷，所以大家穿得越来越多。',answerPy:'Yīnwèi tiānqì yuè lái yuè lěng, suǒyǐ dàjiā chuān de yuè lái yuè duō.',
      note:'因为……所以…… kết hợp 越来越 diễn tả nguyên nhân — kết quả theo thời gian.'},
   ]},

  {n:14,zh:'张',py:'Zhāng',pos:'Danh từ riêng',vn:'Trương (họ)',em:'👩',lesson:2,
   explain:['Họ Trương, một họ phổ biến ở Trung Quốc; ở đây là 张太太 (bà Trương), bạn của 周太太.'],
   usage:'Danh từ riêng chỉ họ người, đứng trước 太太/先生/小姐: 张太太.',
   collo:['张太太','姓张','张先生'],
   ex_zh:'张太太：为什么？怎么了？',ex_py:'Zhāng tàitai: Wèi shénme? Zěnme le?',ex_vn:'Bà Trương: Sao vậy? Có chuyện gì thế?',
   exList:[
     {zh:'张太太：为什么？怎么了？',py:'Zhāng tàitai: Wèi shénme? Zěnme le?',vn:'Bà Trương: Sao vậy? Có chuyện gì thế?'},
     {zh:'那我们下次再一起出去玩儿吧。',py:'Nà wǒmen xià cì zài yìqǐ chūqu wánr ba.',vn:'Vậy lần sau chúng ta lại cùng đi chơi nhé.'},
   ],
   hanzi:[
     {c:'张',p:'zhāng',type:'左右结构 · Trái-phải',st:7,ord:'弓 trái → 长 phải',rad:'弓 (cung)',mean:'giương (cung); họ Trương',
      tip:'弓(cây cung) + 长(dài, kéo dài) → GIƯƠNG cung kéo dài dây; đây cũng là một họ phổ biến ở Trung Quốc.',
      cf:'长 (cháng – "dài", không có bộ 弓")',w:'张太太 / 张开'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bà Trương nói ngày mai bà không thể đi chơi cùng chúng tôi nữa.',answer:'张太太说她明天不能和我们一起出去玩儿了。',answerPy:'Zhāng tàitai shuō tā míngtiān bù néng hé wǒmen yìqǐ chūqu wánr le.',
      note:'了 diễn tả sự thay đổi tình huống (điểm ngữ pháp bài này).'},
     {promptLang:'vi',prompt:'Vì con trai bà Trương bị ốm nên bà phải ở nhà chăm sóc cháu.',answer:'因为张太太的儿子生病了，所以她要在家照顾他。',answerPy:'Yīnwèi Zhāng tàitai de érzi shēng bìng le, suǒyǐ tā yào zài jiā zhàogù tā.',
      note:'因为……所以…… nêu nguyên nhân — kết quả (ôn lại 照顾 vừa học trong bài này).'},
   ]},
];

const wuData = [
  {img:'🤒',label:'发烧',py:'fā shāo',letter:'A'},
  {img:'🤧',label:'感冒',py:'gǎnmào',letter:'B'},
  {img:'🌸',label:'春天',py:'chūntiān',letter:'C'},
  {img:'👗',label:'裙子',py:'qúnzi',letter:'D'},
  {img:'🌿',label:'草',py:'cǎo',letter:'E'},
  {img:'🤲',label:'照顾',py:'zhàogù',letter:'F'},
];

var dialogData = [
  {scene:'在小丽家 · Tại nhà chị Lệ',
   preQuiz:[
     {q:'小丽身体怎么了？',opts:['前几天有点儿发烧','肚子疼','感冒了很严重'],ans:0},
     {q:'朋友为小丽买了什么？',opts:['绿茶','咖啡','水果'],ans:0},
     {q:'小丽最后决定喝什么？',opts:['水','茶','药'],ans:0},
   ],
   lines:[
     {sp:0,zh:'我听说你身体不舒服，怎么了？',py:'Wǒ tīngshuō nǐ shēntǐ bù shūfu, zěnme le?',vn:'Tôi nghe nói bạn không khỏe, sao vậy?'},
     {sp:1,zh:'前几天有点儿发烧，现在好多了。',py:'Qián jǐ tiān yǒudiǎnr fā shāo, xiànzài hǎoduō le.',vn:'Mấy hôm trước hơi sốt, giờ đỡ nhiều rồi.'},
     {sp:0,zh:'喝杯茶吧，这是我为你买的绿茶，很不错。',py:'Hē bēi chá ba, zhè shì wǒ wèi nǐ mǎi de lǜchá, hěn búcuò.',vn:'Uống chút trà đi, đây là trà xanh tôi mua cho bạn, ngon lắm đấy.'},
     {sp:1,zh:'谢谢，我要吃药，不喝茶了。',py:'Xièxie, wǒ yào chī yào, bù hē chá le.',vn:'Cảm ơn, tôi phải uống thuốc, không uống trà nữa.'},
     {sp:0,zh:'那喝杯水吧。',py:'Nà hē bēi shuǐ ba.',vn:'Vậy uống chút nước đi.'},
     {sp:1,zh:'好的。',py:'Hǎo de.',vn:'Được thôi.'},
   ]},
  {scene:'在打电话 · Nói chuyện qua điện thoại',
   preQuiz:[
     {q:'周太太明天为什么不能出去玩儿？',opts:['儿子生病了，要在家照顾他','自己生病了','要工作'],ans:0},
     {q:'周太太的儿子要不要去医院？',opts:['不用去医院','要去医院','已经在医院'],ans:0},
     {q:'张太太提议怎么办？',opts:['下次再一起出去玩儿','现在就去','明天再决定'],ans:0},
   ],
   lines:[
     {sp:0,zh:'对不起，我明天不能和你们出去玩儿了。',py:'Duìbuqǐ, wǒ míngtiān bù néng hé nǐmen chūqu wánr le.',vn:'Xin lỗi, ngày mai tôi không thể đi chơi cùng mọi người được nữa.'},
     {sp:1,zh:'为什么？怎么了？',py:'Wèi shénme? Zěnme le?',vn:'Sao vậy? Có chuyện gì thế?'},
     {sp:0,zh:'我儿子生病了，我要在家照顾他。',py:'Wǒ érzi shēng bìng le, wǒ yào zài jiā zhàogù tā.',vn:'Con trai tôi bị ốm, tôi phải ở nhà chăm sóc cháu.'},
     {sp:1,zh:'他吃药了吗？要不要去医院？',py:'Tā chī yào le ma? Yào bu yào qù yīyuàn?',vn:'Cháu uống thuốc chưa? Có cần đi bệnh viện không?'},
     {sp:0,zh:'不用去医院，昨天吃了感冒药，现在好一些了。',py:'Búyòng qù yīyuàn, zuótiān chīle gǎnmào yào, xiànzài hǎo yìxiē le.',vn:'Không cần đi bệnh viện đâu, hôm qua uống thuốc cảm rồi, giờ đỡ hơn một chút rồi.'},
     {sp:1,zh:'那我们下次再一起出去玩儿吧。',py:'Nà wǒmen xià cì zài yìqǐ chūqu wánr ba.',vn:'Vậy lần sau chúng ta lại cùng đi chơi nhé.'},
   ]},
  {scene:'在小刚家 · Tại nhà anh Cương (mùa yêu thích)',
   preQuiz:[
     {q:'小刚最喜欢哪个季节？',opts:['春天','夏天','冬天'],ans:0},
     {q:'小丽最喜欢哪个季节？为什么？',opts:['夏天，因为可以穿漂亮的裙子','春天，因为天气好','秋天，因为凉快'],ans:0},
     {q:'小刚为什么也喜欢夏天了？',opts:['喜欢看小丽穿裙子','自己也有裙子','夏天不热'],ans:0},
   ],
   lines:[
     {sp:1,zh:'你最喜欢哪个季节？',py:'Nǐ zuì xǐhuan nǎge jìjié?',vn:'Bạn thích mùa nào nhất?'},
     {sp:0,zh:'当然是春天，天气不那么冷了，草和树都绿了，花也开了。',py:'Dāngrán shì chūntiān, tiānqì bú nàme lěng le, cǎo hé shù dōu lǜ le, huā yě kāi le.',vn:'Đương nhiên là mùa xuân, thời tiết không còn lạnh nữa, cỏ và cây đều xanh rồi, hoa cũng nở rồi.'},
     {sp:1,zh:'我最喜欢夏天，因为我可以穿漂亮的裙子了。',py:'Wǒ zuì xǐhuan xiàtiān, yīnwèi wǒ kěyǐ chuān piàoliang de qúnzi le.',vn:'Tôi thích mùa hè nhất, vì tôi có thể mặc váy đẹp rồi.'},
     {sp:0,zh:'那我也喜欢夏天了。',py:'Nà wǒ yě xǐhuan xiàtiān le.',vn:'Vậy tôi cũng thích mùa hè rồi.'},
     {sp:1,zh:'怎么？你也有漂亮的裙子？',py:'Zěnme? Nǐ yě yǒu piàoliang de qúnzi?',vn:'Sao vậy? Bạn cũng có váy đẹp à?'},
     {sp:0,zh:'不，我喜欢看你穿漂亮的裙子。',py:'Bù, wǒ xǐhuan kàn nǐ chuān piàoliang de qúnzi.',vn:'Không, tôi thích nhìn bạn mặc váy đẹp thôi.'},
   ]},
  {scene:'在小刚家 · Tại nhà anh Cương (dạo này béo lên)',
   preQuiz:[
     {q:'小丽觉得自己最近怎么样？',opts:['越来越胖了','越来越瘦了','没有变化'],ans:0},
     {q:'小刚觉得小丽怎么样？',opts:['越来越漂亮了','越来越胖了','没有变化'],ans:0},
     {q:'小刚说小丽为什么不能穿去年的裙子？',opts:['吃得太多了','裙子破了','裙子丢了'],ans:0},
   ],
   lines:[
     {sp:1,zh:'我最近越来越胖了。',py:'Wǒ zuìjìn yuè lái yuè pàng le.',vn:'Dạo này tôi ngày càng béo lên.'},
     {sp:0,zh:'谁说的？我觉得你越来越漂亮了。',py:'Shéi shuō de? Wǒ juéde nǐ yuè lái yuè piàoliang le.',vn:'Ai nói vậy? Tôi thấy bạn ngày càng xinh hơn đấy.'},
     {sp:1,zh:'你看，这条裙子是去年买的，今年就不能穿了。',py:'Nǐ kàn, zhè tiáo qúnzi shì qùnián mǎi de, jīnnián jiù bù néng chuān le.',vn:'Bạn xem, cái váy này mua từ năm ngoái, năm nay không mặc vừa nữa rồi.'},
     {sp:0,zh:'那是因为你吃得太多了，少吃点儿吧。',py:'Nà shì yīnwèi nǐ chī de tài duō le, shǎo chī diǎnr ba.',vn:'Đó là vì bạn ăn nhiều quá đấy, ăn ít lại một chút đi.'},
     {sp:1,zh:'我做的饭越来越好吃，我能少吃吗？',py:'Wǒ zuò de fàn yuè lái yuè hǎochī, wǒ néng shǎo chī ma?',vn:'Cơm tôi nấu ngày càng ngon, tôi ăn ít được sao?'},
   ]},
];

// ══════════════════════════════════════════
// PHẦN 1 · GHÉP TỪ (Collocation)
// ══════════════════════════════════════════
var matchData = [
  {left:'有点儿',right:'发烧'},
  {left:'吃',right:'感冒药'},
  {left:'在家',right:'照顾他'},
  {left:'漂亮的',right:'裙子'},
  {left:'越来越',right:'胖了'},
  {left:'最喜欢的',right:'季节'},
  {left:'草和树',right:'都绿了'},
  {left:'因为我可以穿漂亮的裙子了，',right:'所以我最喜欢夏天。'},
  {left:'虽然感冒了，',right:'但是现在好多了。'},
  {left:'如果你不舒服，',right:'就在家休息吧。'},
  {left:'只要多喝水，',right:'感冒就会好得快一些。'},
];

// ══════════════════════════════════════════
// PHẦN 3a · ĐIỀN TỪ
// ══════════════════════════════════════════
var fillData = [
  {pre:'虽然弟弟只是有点儿',blank:'发烧',post:'，但是妈妈还是带他去了医院。',hint:'(sốt)',ans:'发烧'},
  {pre:'这是我',blank:'为',post:'你买的绿茶。',hint:'(cho, vì)',ans:'为'},
  {pre:'因为奶奶生病了，所以我今天要请假回家',blank:'照顾',post:'她。',hint:'(chăm sóc)',ans:'照顾'},
  {pre:'不',blank:'用',post:'去医院。',hint:'(cần)',ans:'用'},
  {pre:'因为最近感冒的人很多，所以大家都去药店买了',blank:'感冒',post:'药。',hint:'(cảm)',ans:'感冒'},
  {pre:'如果只能选一个',blank:'季节',post:'，你会选春天还是秋天？',hint:'(mùa)',ans:'季节'},
  {pre:'',blank:'当然',post:'要多穿衣服，不然容易感冒。',hint:'(đương nhiên)',ans:'当然'},
  {pre:'虽然还没到3月，但是',blank:'春',post:'天已经快要到了。',hint:'(mùa xuân)',ans:'春'},
  {pre:'草和树都绿了，',blank:'草',post:'地上很好坐。',hint:'(cỏ)',ans:'草'},
  {pre:'虽然天气越来越热，但是我还是最喜欢',blank:'夏',post:'天。',hint:'(mùa hè)',ans:'夏'},
  {pre:'虽然这条',blank:'裙子',post:'有点儿贵，但是我还是买了。',hint:'(váy)',ans:'裙子'},
  {pre:'因为工作忙，我',blank:'最近',post:'很少运动，也很少出去玩儿。',hint:'(gần đây, dạo này)',ans:'最近'},
  {pre:'自从她开始运动以后，身体',blank:'越',post:'来越好了。',hint:'(càng)',ans:'越'},
];

// ══════════════════════════════════════════
// PHẦN 3b · SẮP XẾP
// ══════════════════════════════════════════
var sortData = [
  {words:['因为','同事','发烧','了','，','所以','他','今天','在家','休息','。'],ans:'因为同事发烧了，所以他今天在家休息。',audio:'因为同事发烧了，所以他今天在家休息。'},
  {words:['虽然','很','贵','，','但是','这','是','我','特意','为','你','买','的','生日','礼物','。'],ans:'虽然很贵，但是这是我特意为你买的生日礼物。',audio:'虽然很贵，但是这是我特意为你买的生日礼物。'},
  {words:['虽然','工作','很','忙','，','但是','我','还是','要','在家','照顾','生病','的','爸爸','。'],ans:'虽然工作很忙，但是我还是要在家照顾生病的爸爸。',audio:'虽然工作很忙，但是我还是要在家照顾生病的爸爸。'},
  {words:['因为','下','了','几天','雨','，','所以','草','和','树','都','绿','了','。'],ans:'因为下了几天雨，所以草和树都绿了。',audio:'因为下了几天雨，所以草和树都绿了。'},
  {words:['因为','我','可以','穿','漂亮','的','裙子','了','，','所以','我','最','喜欢','夏天','。'],ans:'因为我可以穿漂亮的裙子了，所以我最喜欢夏天。',audio:'因为我可以穿漂亮的裙子了，所以我最喜欢夏天。'},
  {words:['虽然','最近','很','忙','，','但是','我','每天','都','运动','。'],ans:'虽然最近很忙，但是我每天都运动。',audio:'虽然最近很忙，但是我每天都运动。'},
  {words:['这家','饭馆','的','菜','越','做','越','好吃','了','。'],ans:'这家饭馆的菜越做越好吃了。',audio:'这家饭馆的菜越做越好吃了。'},
  {words:['那','是','因为','你','吃','得','太','多','了','，','少','吃','点儿','吧','。'],ans:'那是因为你吃得太多了，少吃点儿吧。',audio:'那是因为你吃得太多了，少吃点儿吧。'},
];

// ══════════════════════════════════════════
// PHẦN 3c · SỬA LỖI SAI
// ══════════════════════════════════════════
var errorFixData = [
  {wrong:'我发烧有点儿了。',
   opts:['我有点儿发烧了。','我发烧有点儿了。','我了有点儿发烧。','有点儿我发烧了。'],ans:0,
   exp:'有点儿 (phó từ mức độ nhẹ) phải đứng NGAY TRƯỚC động từ/tính từ mà nó bổ nghĩa: 有点儿+发烧, không đảo vị trí.'},
  {wrong:'这是姐姐买为我的衣服。',
   opts:['这是姐姐为我买的衣服。','这是姐姐买为我的衣服。','这是为姐姐我买的衣服。','这是姐姐为买我的衣服。'],ans:0,
   exp:'为+đối tượng phải đứng TRƯỚC động từ mà nó bổ nghĩa (为我买), không chen vào giữa động từ và tân ngữ.'},
  {wrong:'我越来越很漂亮了。',
   opts:['我越来越漂亮了。','我越来越很漂亮了。','我很越来越漂亮了。','我越来越了漂亮。'],ans:0,
   exp:'Không được thêm phó từ mức độ (很/非常) vào trước tính từ trong cấu trúc 越来越+tính từ.'},
  {wrong:'不用了去医院。',
   opts:['不用去医院了。','不用了去医院。','不了用去医院。','去医院不用了。'],ans:0,
   exp:'了 đặt cuối câu khi diễn tả sự thay đổi tình huống, không chen vào giữa 不用 và động từ.'},
  {wrong:'草和树绿了都。',
   opts:['草和树都绿了。','草和树绿了都。','都草和树绿了。','草和树绿都了。'],ans:0,
   exp:'都 (phó từ phạm vi) phải đứng TRƯỚC động từ/tính từ mà nó bổ nghĩa (都绿了), không đặt sau.'},
];

// ══════════════════════════════════════════
// LUYỆN NÓI
// ══════════════════════════════════════════
var speakingData = {
  intro:'Nhấn 🔊 để nghe câu hỏi, sau đó tự ghi âm câu trả lời của bạn dựa theo nội dung 4 bài khoá. Ghi âm xong mới nên xem câu trả lời mẫu để đối chiếu.',
  questions:[
    {q_zh:'小丽身体怎么了？朋友为她买了什么？',
     q_vn:'Tiểu Lệ bị làm sao? Bạn của cô ấy mua gì cho cô ấy?',
     hint:'有点儿发烧，朋友为她买了绿茶',
     sample:'小丽前几天有点儿发烧，朋友为她买了绿茶。',
     sample_vn:'Tiểu Lệ mấy hôm trước hơi sốt, bạn mua cho cô ấy trà xanh.',
     note:'为 + đối tượng diễn tả hành động vì ai đó.'},
    {q_zh:'周太太为什么不能出去玩儿？',
     q_vn:'Vì sao bà Chu không thể đi chơi?',
     hint:'儿子生病了，要在家照顾他',
     sample:'因为周太太的儿子生病了，她要在家照顾他。',
     sample_vn:'Vì con trai bà Chu bị ốm, bà phải ở nhà chăm sóc cháu.',
     note:'因为 giải thích lý do.'},
    {q_zh:'小刚和小丽最喜欢哪个季节？为什么？',
     q_vn:'Tiểu Cương và Tiểu Lệ thích mùa nào nhất? Vì sao?',
     hint:'小刚喜欢春天，小丽喜欢夏天（因为可以穿裙子）',
     sample:'小刚最喜欢春天，小丽最喜欢夏天，因为她可以穿漂亮的裙子了。',
     sample_vn:'Tiểu Cương thích mùa xuân nhất, Tiểu Lệ thích mùa hè nhất, vì cô ấy có thể mặc váy đẹp.',
     note:'因为 giải thích lý do lựa chọn.'},
    {q_zh:'小丽最近怎么样？小刚怎么说？',
     q_vn:'Dạo này Tiểu Lệ thế nào? Tiểu Cương nói sao?',
     hint:'越来越胖了，小刚说她越来越漂亮',
     sample:'小丽说她最近越来越胖了，但是小刚说她越来越漂亮了。',
     sample_vn:'Tiểu Lệ nói dạo này cô ấy ngày càng béo lên, nhưng Tiểu Cương lại nói cô ấy ngày càng xinh hơn.',
     note:'越来越 + tính từ diễn tả sự thay đổi theo thời gian (điểm ngữ pháp bài này).'},
  ],
};

// ══════════════════════════════════════════
// LUYỆN DỊCH (Việt → Trung)
// ══════════════════════════════════════════
var translateData = [
  {vi:'Chỉ cần mặc đủ ấm thì sẽ không dễ bị sốt.', zh:'只要多穿点儿衣服，就不容易发烧。', py:'Zhǐyào duō chuān diǎnr yīfu, jiù bù róngyì fā shāo.'},
  {vi:'Nếu bạn thích hồng trà thì cốc này là tôi gọi cho bạn đấy.', zh:'如果你喜欢红茶，这杯就是我为你点的。', py:'Rúguǒ nǐ xǐhuan hóngchá, zhè bēi jiù shì wǒ wèi nǐ diǎn de.'},
  {vi:'Nếu bạn bị ốm thì tôi sẽ ở nhà chăm sóc bạn.', zh:'如果你生病了，我就在家照顾你。', py:'Rúguǒ nǐ shēng bìng le, wǒ jiù zài jiā zhàogù nǐ.'},
  {vi:'Không cần thay quần áo nữa, hôm nay trời không lạnh.', zh:'不用换衣服了，今天天气不冷。', py:'Búyòng huàn yīfu le, jīntiān tiānqì bù lěng.'},
  {vi:'Mùa xuân đến rồi, hoa cũng nở rồi.', zh:'春天到了，花也开了。', py:'Chūntiān dào le, huā yě kāi le.'},
  {vi:'Nếu bạn mặc cái váy này thì chắc chắn sẽ rất đẹp.', zh:'如果你穿这条裙子，一定很好看。', py:'Rúguǒ nǐ chuān zhè tiáo qúnzi, yídìng hěn hǎokàn.'},
  {vi:'Dạo này tôi ngày càng gầy đi, vì ăn ít.', zh:'我最近越来越瘦了，因为吃得少。', py:'Wǒ zuìjìn yuè lái yuè shòu le, yīnwèi chī de shǎo.'},
  {vi:'Quyển sách này càng đọc càng thấy thú vị.', zh:'这本书越看越有意思。', py:'Zhè běn shū yuè kàn yuè yǒu yìsi.'},
];

// ══════════════════════════════════════════
// LUYỆN DỊCH (Trung → Việt) — nội dung KHÁC với chiều Việt→Trung ở trên
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:'Tôi bị cảm nên hôm nay không đi học.', zh:'我感冒了，所以今天没有去上课。', py:'Wǒ gǎnmào le, suǒyǐ jīntiān méiyǒu qù shàngkè.'},
  {vi:'Dạo này thời tiết không đẹp nên chúng tôi không đi chơi.', zh:'最近天气不好，所以我们没有出去玩儿。', py:'Zuìjìn tiānqì bù hǎo, suǒyǐ wǒmen méiyǒu chūqu wánr.'},
  {vi:'Nếu bạn vẫn còn sốt thì đừng đi làm nữa.', zh:'如果你还发烧，就不要去上班了。', py:'Rúguǒ nǐ hái fā shāo, jiù bú yào qù shàngbān le.'},
  {vi:'Hoa trên bãi cỏ nở ngày càng nhiều, rất đẹp.', zh:'草地上的花越开越多，很漂亮。', py:'Cǎodì shang de huā yuè kāi yuè duō, hěn piàoliang.'},
  {vi:'Cái váy này tôi mua năm ngoái, năm nay không mặc vừa nữa.', zh:'这条裙子是我去年买的，今年不能穿了。', py:'Zhè tiáo qúnzi shì wǒ qùnián mǎi de, jīnnián bù néng chuān le.'},
  {vi:'Anh ấy càng nói càng nhanh, tôi không nghe hiểu nữa.', zh:'他越说越快，我听不懂了。', py:'Tā yuè shuō yuè kuài, wǒ tīngbudǒng le.'},
  {vi:'Vì cô ấy ngày càng bận nên ngày càng ít vận động.', zh:'因为她越来越忙，所以越来越少运动了。', py:'Yīnwèi tā yuè lái yuè máng, suǒyǐ yuè lái yuè shǎo yùndòng le.'},
  {vi:'Anh Trương nói hôm nay anh ấy không thể đến học được nữa.', zh:'张先生说他今天不能来上课了。', py:'Zhāng xiānsheng shuō tā jīntiān bù néng lái shàngkè le.'},
];

// ══════════════════════════════════════════
// LUYỆN NGHE — đề nghe THẬT từ HSK标准教程3 练习册 (sách bài tập Bài 5)
// Audio gốc duy nhất chứa đủ 20 câu (Phần 1+2+3+4 của đề gốc):
//  - Phần 1 (câu 1-5, gốc: nghe chọn tranh) + Phần 2 (câu 6-10, gốc: nghe
//    phán đoán đúng/sai) → gộp thành 10 câu ĐIỀN CHÍNH TẢ.
//  - Phần 3 (câu 11-15) + Phần 4 (câu 16-20) → 10 câu TRẮC NGHIỆM, kèm các
//    dòng nghe-điền-cụm-từ-ngắn trước khi chọn đáp án, giữ đúng như đề gốc.
// ══════════════════════════════════════════
var listenData = {
  type: 'workbook',
  audio: '/audio/hsk3-bai-5/listen-full.mp3',
  dictation: [
    {num:1, lines:[
      {speaker:'女', pre:'', blank:'树和草都绿了，天气真好', post:'！',
       py:'Shù hé cǎo dōu lǜ le, tiānqì zhēn hǎo!', vn:'Cây và cỏ đều xanh rồi, thời tiết đẹp thật!'},
      {speaker:'男', pre:'是啊，', blank:'我们要多出来走走，在草地上坐坐', post:'。',
       py:'Shì a, wǒmen yào duō chūlai zǒuzou, zài cǎodì shang zuòzuo.', vn:'Đúng vậy, chúng ta nên ra ngoài đi dạo nhiều, ngồi trên bãi cỏ.'},
    ]},
    {num:2, lines:[
      {speaker:'女', pre:'', blank:'这条裤子怎么样', post:'？',
       py:'Zhè tiáo kùzi zěnmeyàng?', vn:'Cái quần này thế nào?'},
      {speaker:'男', pre:'', blank:'你已经有那么多裤子了，买条裙子吧', post:'。',
       py:'Nǐ yǐjīng yǒu nàme duō kùzi le, mǎi tiáo qúnzi ba.', vn:'Bạn đã có nhiều quần thế rồi, mua cái váy đi.'},
    ]},
    {num:3, lines:[
      {speaker:'女1', pre:'', blank:'您要做什么，我来帮您吧', post:'。',
       py:'Nín yào zuò shénme, wǒ lái bāng nín ba.', vn:'Bác định làm gì, để cháu giúp bác nhé.'},
      {speaker:'女2', pre:'不用帮，', blank:'我一个人可以，谢谢你', post:'。',
       py:'Búyòng bāng, wǒ yí ge rén kěyǐ, xièxie nǐ.', vn:'Không cần giúp đâu, một mình bác làm được, cảm ơn cháu.'},
    ]},
    {num:4, lines:[
      {speaker:'男', pre:'', blank:'春天到了，花都开了', post:'。',
       py:'Chūntiān dào le, huā dōu kāi le.', vn:'Mùa xuân đến rồi, hoa đều nở cả rồi.'},
      {speaker:'女', pre:'是啊，', blank:'你看它们开得多好', post:'！',
       py:'Shì a, nǐ kàn tāmen kāi de duō hǎo!', vn:'Đúng vậy, bạn xem hoa nở đẹp biết bao!'},
    ]},
    {num:5, lines:[
      {speaker:'女', pre:'医生，', blank:'我怎么了', post:'？',
       py:'Yīshēng, wǒ zěnme le?', vn:'Bác sĩ, tôi bị sao vậy?'},
      {speaker:'男', pre:'', blank:'你有点儿感冒，我给你开点儿药', post:'。',
       py:'Nǐ yǒudiǎnr gǎnmào, wǒ gěi nǐ kāi diǎnr yào.', vn:'Bạn hơi cảm, tôi kê cho bạn ít thuốc.'},
    ]},
    {num:6, lines:[
      {pre:'', blank:'最近天气越来越冷，还总是下雨', post:'。',
       py:'Zuìjìn tiānqì yuè lái yuè lěng, hái zǒngshì xiàyǔ.', vn:'Dạo này thời tiết ngày càng lạnh, lại còn hay mưa nữa.'},
    ]},
    {num:7, lines:[
      {pre:'我感冒好了，', blank:'明天你不用来照顾我了', post:'。',
       py:'Wǒ gǎnmào hǎo le, míngtiān nǐ búyòng lái zhàogù wǒ le.', vn:'Tôi khỏi cảm rồi, ngày mai bạn không cần đến chăm sóc tôi nữa.'},
    ]},
    {num:8, lines:[
      {pre:'小方最近越来越胖，', blank:'去年买的裙子都不能穿了', post:'。',
       py:'Xiǎo Fāng zuìjìn yuè lái yuè pàng, qùnián mǎi de qúnzi dōu bù néng chuān le.', vn:'Tiểu Phương dạo này ngày càng béo, váy mua năm ngoái đều không mặc vừa nữa.'},
    ]},
    {num:9, lines:[
      {pre:'我儿子最近瘦了，', blank:'工作太忙，没时间吃饭', post:'。',
       py:'Wǒ érzi zuìjìn shòu le, gōngzuò tài máng, méi shíjiān chīfàn.', vn:'Con trai tôi dạo này gầy đi, công việc quá bận, không có thời gian ăn cơm.'},
    ]},
    {num:10, lines:[
      {pre:'天气越来越热，', blank:'大家穿得越来越少', post:'。',
       py:'Tiānqì yuè lái yuè rè, dàjiā chuān de yuè lái yuè shǎo.', vn:'Thời tiết ngày càng nóng, mọi người mặc ngày càng ít.'},
    ]},
  ],
  mc: [
    {num:11, options:['吃药','多喝水','少吃水果'], ans:1,
     lines:[
       {speaker:'女', pre:'医生，', blank:'我的病用吃药吗', post:'？', py:'Yīshēng, wǒ de bìng yòng chī yào ma?', vn:'Bác sĩ, bệnh của tôi có cần uống thuốc không?'},
       {speaker:'男', pre:'不用吃药，', blank:'回家多喝些水，多吃些水果', post:'。', py:'Búyòng chī yào, huí jiā duō hē xiē shuǐ, duō chī xiē shuǐguǒ.', vn:'Không cần uống thuốc, về nhà uống nhiều nước, ăn nhiều trái cây.'},
     ],
     explain:'女：医生，我的病用吃药吗？男：不用吃药，回家多喝些水，多吃些水果。问：男的让女的做什么？ → 多喝水。'},
    {num:12, options:['越来越好','不发烧了','还在生病'], ans:2,
     lines:[
       {speaker:'男', pre:'听说你最近不舒服，', blank:'好些了吗', post:'？', py:'Tīngshuō nǐ zuìjìn bù shūfu, hǎo xiē le ma?', vn:'Nghe nói dạo này bạn không khỏe, đỡ hơn chưa?'},
       {speaker:'女', pre:'前天感冒，昨天发烧，', blank:'头也越来越疼', post:'。', py:'Qiántiān gǎnmào, zuótiān fā shāo, tóu yě yuè lái yuè téng.', vn:'Hôm kia bị cảm, hôm qua sốt, đầu cũng đau ngày càng nhiều.'},
     ],
     explain:'男：听说你最近不舒服，好些了吗？女：前天感冒，昨天发烧，头也越来越疼。问：女的现在怎么样了？ → 还在生病。'},
    {num:13, options:['女的很聪明','女的很不错','女的给他介绍的女朋友很好'], ans:2,
     lines:[
       {speaker:'女', pre:'上次我为你介绍的那个女朋友', blank:'怎么样', post:'？', py:'Shàng cì wǒ wèi nǐ jièshào de nàge nǚpéngyou zěnmeyàng?', vn:'Cô bạn gái lần trước tôi giới thiệu cho bạn thế nào?'},
       {speaker:'男', pre:'人很不错，又聪明又漂亮。', blank:'谢谢你', post:'！', py:'Rén hěn búcuò, yòu cōngming yòu piàoliang. Xièxie nǐ!', vn:'Cô ấy rất tốt, vừa thông minh vừa xinh đẹp. Cảm ơn bạn!'},
     ],
     explain:'女：上次我为你介绍的那个女朋友怎么样？男：人很不错，又聪明又漂亮。谢谢你！问：男的为什么说"谢谢"？ → 女的给他介绍的女朋友很好。'},
    {num:14, options:['越来越不容易','越来越容易','越来越没意思'], ans:1,
     lines:[
       {speaker:'男', pre:'我觉得汉语', blank:'越来越难了', post:'。', py:'Wǒ juéde Hànyǔ yuè lái yuè nán le.', vn:'Tôi thấy tiếng Trung ngày càng khó.'},
       {speaker:'女', pre:'是吗？我怎么觉得', blank:'越来越容易，也越来越有意思啊', post:'！', py:'Shì ma? Wǒ zěnme juéde yuè lái yuè róngyì, yě yuè lái yuè yǒu yìsi a!', vn:'Vậy à? Sao tôi lại thấy ngày càng dễ, cũng ngày càng thú vị nữa!'},
     ],
     explain:'男：我觉得汉语越来越难了。女：是吗？我怎么觉得越来越容易，也越来越有意思啊！问：女的觉得汉语怎么样？ → 越来越容易。'},
    {num:15, options:['越来越好','没来上班','不用吃药了'], ans:0,
     lines:[
       {speaker:'女', pre:'你不是发烧了吗？', blank:'怎么还来上班', post:'？', py:'Nǐ bú shì fā shāo le ma? Zěnme hái lái shàngbān?', vn:'Bạn chẳng phải bị sốt sao? Sao vẫn đến làm vậy?'},
       {speaker:'男', pre:'', blank:'我吃了药，好些了', post:'。', py:'Wǒ chīle yào, hǎo xiē le.', vn:'Tôi uống thuốc rồi, đỡ hơn rồi.'},
     ],
     explain:'女：你不是发烧了吗？怎么还来上班？男：我吃了药，好些了。问：男的现在怎么样了？ → 越来越好。'},
    {num:16, options:['天气不那么冷了','草和树都绿了','没有课了'], ans:2,
     lines:[
       {speaker:'女1', pre:'我喜欢3月，', blank:'因为天气不那么冷了', post:'。', py:'Wǒ xǐhuan sān yuè, yīnwèi tiānqì bú nàme lěng le.', vn:'Tôi thích tháng 3, vì thời tiết không còn lạnh nữa.'},
       {speaker:'女2', pre:'我喜欢5月，', blank:'草和树都绿了，花也开了', post:'。', py:'Wǒ xǐhuan wǔ yuè, cǎo hé shù dōu lǜ le, huā yě kāi le.', vn:'Tôi thích tháng 5, cỏ và cây đều xanh rồi, hoa cũng nở rồi.'},
       {speaker:'女1', pre:'我也喜欢6月，', blank:'大家不用穿冬天的衣服了', post:'。', py:'Wǒ yě xǐhuan liù yuè, dàjiā búyòng chuān dōngtiān de yīfu le.', vn:'Tôi cũng thích tháng 6, mọi người không cần mặc quần áo mùa đông nữa.'},
       {speaker:'男', pre:'我喜欢1月、2月、7月和8月，', blank:'因为不用去上课了', post:'。', py:'Wǒ xǐhuan yī yuè, èr yuè, qī yuè hé bā yuè, yīnwèi búyòng qù shàngkè le.', vn:'Tôi thích tháng 1, 2, 7 và 8, vì không cần đi học nữa.'},
     ],
     explain:'女1：我喜欢3月，因为天气不那么冷了。女2：我喜欢5月，草和树都绿了，花也开了。女1：我也喜欢6月，大家不用穿冬天的衣服了。男：我喜欢1月、2月、7月和8月，因为不用去上课了。问：男的为什么喜欢7月和8月？ → 没有课了。'},
    {num:17, options:['天黑了','白天没有时间','天黑得晚了'], ans:2,
     lines:[
       {speaker:'女', pre:'', blank:'现在天长了', post:'。', py:'Xiànzài tiān cháng le.', vn:'Bây giờ ngày dài ra rồi.'},
       {speaker:'男', pre:'', blank:'这是什么意思', post:'？', py:'Zhè shì shénme yìsi?', vn:'Cái này nghĩa là gì?'},
       {speaker:'女', pre:'"天长了"就是', blank:'天黑得越来越晚', post:'。', py:'"Tiān cháng le" jiùshì tiān hēi de yuè lái yuè wǎn.', vn:'"Ngày dài ra" nghĩa là trời tối ngày càng muộn.'},
       {speaker:'男', pre:'我懂了，就是', blank:'白天的时间越来越长了', post:'。', py:'Wǒ dǒng le, jiùshì báitiān de shíjiān yuè lái yuè cháng le.', vn:'Tôi hiểu rồi, tức là thời gian ban ngày ngày càng dài ra.'},
     ],
     explain:'女：现在天长了。男：这是什么意思？女："天长了"就是天黑得越来越晚。男：我懂了，就是白天的时间越来越长了。问："天长了"是什么意思？ → 天黑得晚了。'},
    {num:18, options:['男女朋友','医生和病人','丈夫和妻子'], ans:1,
     lines:[
       {speaker:'女', pre:'', blank:'今天好些了吗', post:'？', py:'Jīntiān hǎo xiē le ma?', vn:'Hôm nay đỡ hơn chưa?'},
       {speaker:'男', pre:'这几天一直吃药，', blank:'现在好些了，腿也不疼了', post:'。', py:'Zhè jǐ tiān yìzhí chī yào, xiànzài hǎo xiē le, tuǐ yě bù téng le.', vn:'Mấy hôm nay uống thuốc liên tục, giờ đỡ hơn rồi, chân cũng hết đau rồi.'},
       {speaker:'女', pre:'', blank:'那不用再吃药了', post:'。', py:'Nà búyòng zài chī yào le.', vn:'Vậy thì không cần uống thuốc nữa.'},
       {speaker:'男', pre:'太好了，', blank:'谢谢您', post:'！', py:'Tài hǎo le, xièxie nín!', vn:'Tuyệt quá, cảm ơn bác sĩ!'},
     ],
     explain:'女：今天好些了吗？男：这几天一直吃药，现在好些了，腿也不疼了。女：那不用再吃药了。男：太好了，谢谢您！问：这两个人可能是什么关系？ → 医生和病人。'},
    {num:19, options:['买花','看花','看雨'], ans:0,
     lines:[
       {speaker:'男', pre:'你看，', blank:'天晴了', post:'。', py:'Nǐ kàn, tiān qíng le.', vn:'Bạn xem, trời quang rồi.'},
       {speaker:'女', pre:'这么快就不下雨了？', blank:'我们出去吧', post:'。', py:'Zhème kuài jiù bú xiàyǔ le? Wǒmen chūqu ba.', vn:'Nhanh vậy đã hết mưa rồi à? Chúng ta ra ngoài đi.'},
       {speaker:'男', pre:'好啊，', blank:'带孩子们去外边买些花回来', post:'。', py:'Hǎo a, dài háizimen qù wàibian mǎi xiē huā huílai.', vn:'Được đấy, đưa bọn trẻ ra ngoài mua ít hoa về.'},
       {speaker:'女', pre:'好，', blank:'我去叫他们', post:'。', py:'Hǎo, wǒ qù jiào tāmen.', vn:'Được, tôi đi gọi bọn trẻ.'},
     ],
     explain:'男：你看，天晴了。女：这么快就不下雨了？我们出去吧。男：好啊，带孩子们去外边买些花回来。女：好，我去叫他们。问：他们要做什么？ → 买花。'},
    {num:20, options:['瘦了','胖了','吃得少了'], ans:1,
     lines:[
       {speaker:'男', pre:'我要买裤子了，', blank:'这条裤子现在已经不能穿了', post:'。', py:'Wǒ yào mǎi kùzi le, zhè tiáo kùzi xiànzài yǐjīng bù néng chuān le.', vn:'Tôi phải mua quần rồi, cái quần này giờ không mặc vừa nữa rồi.'},
       {speaker:'女', pre:'', blank:'你瘦了吗', post:'？', py:'Nǐ shòu le ma?', vn:'Bạn gầy đi à?'},
       {speaker:'男', pre:'什么啊，', blank:'我要买条大一号的', post:'。', py:'Shénme a, wǒ yào mǎi tiáo dà yí hào de.', vn:'Gì cơ, tôi phải mua cái to hơn một size.'},
       {speaker:'女', pre:'你现在吃得越来越多，也不运动，', blank:'能不胖吗', post:'？', py:'Nǐ xiànzài chī de yuè lái yuè duō, yě bú yùndòng, néng bú pàng ma?', vn:'Bạn giờ ăn ngày càng nhiều, cũng không vận động, sao mà không béo được?'},
     ],
     explain:'男：我要买裤子了，这条裤子现在已经不能穿了。女：你瘦了吗？男：什么啊，我要买条大一号的。女：你现在吃得越来越多，也不运动，能不胖吗？问：男的有什么问题？ → 胖了。'},
  ],
};
