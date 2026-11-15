// ══════════════════════════════════════════
// DATA — HSK6 Bài 13: 从旅游指南看世事变迁 (Nhìn thế sự đổi thay qua sách hướng dẫn du lịch)
// 第四单元 走遍天下 · Nguồn: HSK标准教程6上 (tr. 136–146) + đáp án sách
// Bài khoá: 从旅游指南看世事变迁 (868字) · 51 từ mới
// ══════════════════════════════════════════

var vocabData = [
  {n:1,zh:'变迁',py:'biànqiān',pos:'Động từ',vn:'biến đổi, đổi thay (theo thời gian)',hv:'biến thiên',em:'⏳',lesson:1,
   explain:['Sự vật, tình hình thay đổi dần qua một thời gian dài (thời đại, xã hội, lịch sử, thành phố…).','Văn viết, thường dùng như danh từ: 世事变迁, 时代的变迁, 历史变迁; ít khi mang tân ngữ.'],
   usage:'Hay gặp: 世事变迁, 时代变迁, 社会变迁, 经历了……的变迁, 随着……的变迁.',
   collo:['世事变迁','时代的变迁','历史变迁','社会变迁'],
   ex_zh:'从旅游指南看世事变迁。',ex_py:'Cóng lǚyóu zhǐnán kàn shìshì biànqiān.',ex_vn:'Nhìn thế sự đổi thay qua sách hướng dẫn du lịch.',
   exList:[
     {zh:'从旅游指南看世事变迁。',py:'Cóng lǚyóu zhǐnán kàn shìshì biànqiān.',vn:'Nhìn thế sự đổi thay qua sách hướng dẫn du lịch.'},
     {zh:'这条老街见证了一百多年的历史变迁。',py:'Zhè tiáo lǎojiē jiànzhèngle yìbǎi duō nián de lìshǐ biànqiān.',vn:'Con phố cổ này đã chứng kiến hơn một trăm năm đổi thay của lịch sử.'},
     {zh:'随着时代的变迁，人们的生活方式也发生了翻天覆地的变化。',py:'Suízhe shídài de biànqiān, rénmen de shēnghuó fāngshì yě fāshēngle fāntiān-fùdì de biànhuà.',vn:'Cùng với sự đổi thay của thời đại, lối sống của con người cũng thay đổi long trời lở đất.'}
   ],
   colloFull:[
     {zh:'世事变迁',py:'shìshì biànqiān',vn:'thế sự đổi thay'},
     {zh:'时代的变迁',py:'shídài de biànqiān',vn:'sự đổi thay của thời đại'},
     {zh:'历史变迁',py:'lìshǐ biànqiān',vn:'những biến đổi của lịch sử'},
     {zh:'社会变迁',py:'shèhuì biànqiān',vn:'biến đổi xã hội'},
     {zh:'经历变迁',py:'jīnglì biànqiān',vn:'trải qua đổi thay'}
   ],
   patterns:[
     {s:'随着……的变迁，……',m:'Cùng với sự đổi thay của …, …'},
     {s:'见证 / 经历了 + ……的变迁',m:'Chứng kiến / trải qua sự đổi thay của …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy thời thế đã đổi thay, nhưng tình cảm giữa ông và bà vẫn không hề thay đổi.',answer:'虽然世事变迁，但是爷爷奶奶之间的感情一点儿也没有变。',answerPy:'Suīrán shìshì biànqiān, dànshì yéye nǎinai zhījiān de gǎnqíng yìdiǎnr yě méiyǒu biàn.',
      note:'虽然……但是……; 一点儿也没 + V: hoàn toàn không ….',pair:'一点儿也不 / 没……'},
     {promptLang:'vi',prompt:'Ông nội thường kể cho tôi nghe những đổi thay của thành phố này mấy chục năm nay.',answer:'爷爷常常给我讲这座城市几十年来的变迁。',answerPy:'Yéye chángcháng gěi wǒ jiǎng zhè zuò chéngshì jǐshí nián lái de biànqiān.',
      note:'给 + người + 讲 = kể cho ai nghe; 几十年来 = mấy chục năm nay.',pair:'……来 (khoảng thời gian đến nay)'}
   ]},

  {n:2,zh:'一向',py:'yíxiàng',pos:'Phó từ',vn:'từ trước đến nay, xưa nay; (hỏi thăm) dạo này',hv:'nhất hướng',em:'➡️',lesson:1,
   explain:['Biểu thị từ trước đến nay vẫn luôn như vậy (thói quen, tính cách, thái độ không đổi) — gần nghĩa 一直, 向来.','Dùng khi chào hỏi người lâu ngày gặp lại: 你一向好啊！= từ lần gặp trước đến giờ vẫn khỏe chứ.'],
   usage:'一向 + 很 / 都 / 是 / 不 + …: 一向认真, 一向好客, 一向不喜欢…; không dùng cho việc chỉ xảy ra một lần (việc một lần dùng 一度).',
   collo:['一向如此','一向好客','一向认真','你一向好啊'],
   ex_zh:'人类一向与旅游共存。',ex_py:'Rénlèi yíxiàng yǔ lǚyóu gòngcún.',ex_vn:'Loài người xưa nay vẫn luôn gắn bó cùng du lịch.',
   exList:[
     {zh:'人类一向与旅游共存。',py:'Rénlèi yíxiàng yǔ lǚyóu gòngcún.',vn:'Loài người xưa nay vẫn luôn gắn bó cùng du lịch.'},
     {zh:'我们家一向好客，来了客人总是热情招待。',py:'Wǒmen jiā yíxiàng hàokè, láile kèrén zǒngshì rèqíng zhāodài.',vn:'Nhà chúng tôi xưa nay vốn hiếu khách, có khách đến là luôn tiếp đãi nhiệt tình.'},
     {zh:'他一向严格要求自己，从不草率地做决定。',py:'Tā yíxiàng yángé yāoqiú zìjǐ, cóng bù cǎoshuài de zuò juédìng.',vn:'Anh ấy xưa nay luôn nghiêm khắc với bản thân, chưa bao giờ quyết định qua loa.'}
   ],
   colloFull:[
     {zh:'一向如此',py:'yíxiàng rúcǐ',vn:'xưa nay vẫn vậy'},
     {zh:'一向好客',py:'yíxiàng hàokè',vn:'vốn hiếu khách'},
     {zh:'一向认真',py:'yíxiàng rènzhēn',vn:'xưa nay luôn nghiêm túc'},
     {zh:'你一向好啊',py:'nǐ yíxiàng hǎo a',vn:'dạo này anh vẫn khỏe chứ'},
     {zh:'一向不喜欢',py:'yíxiàng bù xǐhuan',vn:'trước giờ vốn không thích'}
   ],
   patterns:[
     {s:'Chủ ngữ + 一向 + V / Adj',m:'… xưa nay vẫn luôn …'},
     {s:'你一向好啊！/ 你一向可好？',m:'Lời hỏi thăm: dạo này (từ lần gặp trước) vẫn khỏe chứ?'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Anh ấy xưa nay luôn đúng giờ, hôm nay đến muộn chắc chắn là có nguyên nhân.',answer:'他一向很守时，今天迟到肯定是有原因的。',answerPy:'Tā yíxiàng hěn shǒushí, jīntiān chídào kěndìng shì yǒu yuányīn de.',
      note:'是……的 nhấn mạnh nhận định của người nói; 肯定 = chắc chắn.',pair:'是……的 (nhấn mạnh)'},
     {promptLang:'vi',prompt:'Chị tôi trước nay không thích đồ ngọt, vậy mà hôm nay lại ăn liền hai miếng bánh ngọt.',answer:'我姐姐一向不爱吃甜食，今天居然一连吃了两块蛋糕。',answerPy:'Wǒ jiějie yíxiàng bú ài chī tiánshí, jīntiān jūrán yìlián chīle liǎng kuài dàngāo.',
      note:'居然 = vậy mà (bất ngờ); 一连 + V + số lượng = liền một mạch.',pair:'居然'}
   ]},

  {n:3,zh:'起初',py:'qǐchū',pos:'Danh từ',vn:'ban đầu, lúc đầu',hv:'khởi sơ',em:'🌱',lesson:1,
   explain:['Lúc mới bắt đầu, giai đoạn đầu của một quá trình.','Thường đứng đầu câu, đối lập với giai đoạn sau: 起初……，后来……; mang sắc thái văn viết hơn 开始 / 刚开始.'],
   usage:'起初……，后来 / 现在……; 起初 chỉ dùng cho chuyện đã qua, không dùng cho tương lai.',
   collo:['起初……后来……','起初的想法','起初并不……','起初的计划'],
   ex_zh:'起初，人类旅行更准确地说，应该叫迁徙。',ex_py:'Qǐchū, rénlèi lǚxíng gèng zhǔnquè de shuō, yīnggāi jiào qiānxǐ.',ex_vn:'Thuở ban đầu, việc đi lại của loài người nói chính xác hơn thì nên gọi là di cư.',
   exList:[
     {zh:'起初，人类旅行更准确地说，应该叫迁徙。',py:'Qǐchū, rénlèi lǚxíng gèng zhǔnquè de shuō, yīnggāi jiào qiānxǐ.',vn:'Thuở ban đầu, việc đi lại của loài người nói chính xác hơn thì nên gọi là di cư.'},
     {zh:'起初我并不喜欢这份工作，后来慢慢发现了它的乐趣。',py:'Qǐchū wǒ bìng bù xǐhuan zhè fèn gōngzuò, hòulái mànmàn fāxiànle tā de lèqù.',vn:'Lúc đầu tôi hoàn toàn không thích công việc này, về sau dần dần phát hiện ra niềm vui của nó.'},
     {zh:'起初大家都以为他在吹牛，没想到他真的做到了。',py:'Qǐchū dàjiā dōu yǐwéi tā zài chuīniú, méi xiǎngdào tā zhēn de zuòdào le.',vn:'Lúc đầu mọi người đều tưởng cậu ấy nói khoác, không ngờ cậu ấy làm được thật.'}
   ],
   colloFull:[
     {zh:'起初……后来……',py:'qǐchū…… hòulái……',vn:'lúc đầu … về sau …'},
     {zh:'起初的想法',py:'qǐchū de xiǎngfǎ',vn:'suy nghĩ ban đầu'},
     {zh:'起初并不……',py:'qǐchū bìng bù……',vn:'lúc đầu hoàn toàn không …'},
     {zh:'起初的计划',py:'qǐchū de jìhuà',vn:'kế hoạch ban đầu'}
   ],
   patterns:[
     {s:'起初……，后来……',m:'Lúc đầu …, về sau …'},
     {s:'起初 + 以为 / 觉得……，没想到……',m:'Lúc đầu tưởng …, không ngờ …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Lúc đầu tôi tưởng tiếng Trung rất khó, học rồi mới phát hiện không khó như mình tưởng.',answer:'起初我以为汉语很难，学了以后才发现并没有想象的那么难。',answerPy:'Qǐchū wǒ yǐwéi Hànyǔ hěn nán, xuéle yǐhòu cái fāxiàn bìng méiyǒu xiǎngxiàng de nàme nán.',
      note:'A 没有 B 那么 + Adj: so sánh kém; 并 nhấn mạnh phủ định; 才 = mới (muộn hơn dự kiến).',pair:'A 没有 B 那么……'},
     {promptLang:'vi',prompt:'Lúc đầu bố mẹ phản đối tôi đi du học, về sau cuối cùng cũng bị tôi thuyết phục.',answer:'起初父母反对我出国留学，后来终于被我说服了。',answerPy:'Qǐchū fùmǔ fǎnduì wǒ chūguó liúxué, hòulái zhōngyú bèi wǒ shuōfú le.',
      note:'Câu bị động: 被 + tác nhân + V + 了; 终于 = cuối cùng (sau thời gian dài).',pair:'被 (câu bị động)'}
   ]},

  {n:4,zh:'迁徙',py:'qiānxǐ',pos:'Động từ',vn:'di chuyển, đổi chỗ ở, di cư',hv:'thiên tỉ',em:'🦢',lesson:1,
   explain:['Rời nơi ở cũ đến sống ở nơi khác (người, cộng đồng, loài vật) — thường quy mô lớn, lâu dài.','Văn viết; rất hay dùng cho động vật: 候鸟迁徙 (chim di trú). Khẩu ngữ về người hay nói 搬家, 移居.'],
   usage:'迁徙到 + nơi chốn; 大规模迁徙; 动物 / 候鸟迁徙; 被迫迁徙.',
   collo:['候鸟迁徙','大规模迁徙','迁徙到南方','人口迁徙'],
   ex_zh:'每年秋天，成千上万的候鸟都会迁徙到南方过冬。',ex_py:'Měi nián qiūtiān, chéngqiān-shàngwàn de hòuniǎo dōu huì qiānxǐ dào nánfāng guò dōng.',ex_vn:'Mùa thu hằng năm, hàng nghìn hàng vạn con chim di trú đều bay về phương nam tránh rét.',
   exList:[
     {zh:'起初，人类旅行更准确地说，应该叫迁徙。',py:'Qǐchū, rénlèi lǚxíng gèng zhǔnquè de shuō, yīnggāi jiào qiānxǐ.',vn:'Thuở ban đầu, việc đi lại của loài người nói chính xác hơn thì nên gọi là di cư.'},
     {zh:'每年秋天，成千上万的候鸟都会迁徙到南方过冬。',py:'Měi nián qiūtiān, chéngqiān-shàngwàn de hòuniǎo dōu huì qiānxǐ dào nánfāng guò dōng.',vn:'Mùa thu hằng năm, hàng nghìn hàng vạn con chim di trú đều bay về phương nam tránh rét.'},
     {zh:'古时候，人们常常因为天气变化而不得不迁徙到别的地方。',py:'Gǔ shíhou, rénmen chángcháng yīnwèi tiānqì biànhuà ér bùdébù qiānxǐ dào bié de dìfang.',vn:'Thời xưa, con người thường vì thời tiết thay đổi mà buộc phải di cư đến nơi khác.'}
   ],
   colloFull:[
     {zh:'候鸟迁徙',py:'hòuniǎo qiānxǐ',vn:'chim di trú'},
     {zh:'大规模迁徙',py:'dà guīmó qiānxǐ',vn:'di cư quy mô lớn'},
     {zh:'迁徙到南方',py:'qiānxǐ dào nánfāng',vn:'di cư xuống phương nam'},
     {zh:'人口迁徙',py:'rénkǒu qiānxǐ',vn:'sự di dân'},
     {zh:'被迫迁徙',py:'bèipò qiānxǐ',vn:'buộc phải di cư'}
   ],
   patterns:[
     {s:'(因为……而) 迁徙到 + nơi chốn',m:'(Vì … mà) di cư đến …'},
     {s:'……的迁徙',m:'Cuộc di cư của … (dùng như danh từ)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Do thiếu thức ăn, đàn chim này năm nào cũng phải di cư mấy nghìn cây số.',answer:'由于食物短缺，这群鸟每年都要迁徙几千公里。',answerPy:'Yóuyú shíwù duǎnquē, zhè qún niǎo měi nián dōu yào qiānxǐ jǐ qiān gōnglǐ.',
      note:'由于 = do, vì (văn viết); lượng từ 群 cho đàn, bầy.',pair:'由于……'},
     {promptLang:'vi',prompt:'Nếu không phải vì chiến tranh, người dân ở đây đã không phải rời quê hương di cư đi nơi khác.',answer:'如果不是因为战争，这里的人们就不会离开家乡迁徙到别处。',answerPy:'Rúguǒ bú shì yīnwèi zhànzhēng, zhèlǐ de rénmen jiù bú huì líkāi jiāxiāng qiānxǐ dào biéchù.',
      note:'如果不是……，就不会……: nếu không phải vì … thì đã không ….',pair:'如果不是……就……'}
   ]},

  {n:5,zh:'侵犯',py:'qīnfàn',pos:'Động từ',vn:'xâm phạm, xâm lược',hv:'xâm phạm',em:'🛡️',lesson:1,
   explain:['Xâm lấn trái phép vào lãnh thổ, hoặc làm tổn hại đến quyền lợi hợp pháp của người khác.','Tân ngữ: 边境, 领土 hoặc (hay gặp trong đời sống) 权利, 利益, 隐私, 版权.'],
   usage:'侵犯 + 权利 / 隐私 / 利益 / 版权; 受到侵犯; 不可侵犯.',
   collo:['侵犯隐私','侵犯权利','侵犯版权','受到侵犯'],
   ex_zh:'天气变化、食物短缺，或者有敌人侵犯，人们不得不远离居住地。',ex_py:'Tiānqì biànhuà, shíwù duǎnquē, huòzhě yǒu dírén qīnfàn, rénmen bùdébù yuǎnlí jūzhùdì.',ex_vn:'Thời tiết thay đổi, thức ăn khan hiếm, hoặc có kẻ thù xâm phạm, con người buộc phải rời xa nơi cư trú.',
   exList:[
     {zh:'天气变化、食物短缺，或者有敌人侵犯，人们不得不远离居住地。',py:'Tiānqì biànhuà, shíwù duǎnquē, huòzhě yǒu dírén qīnfàn, rénmen bùdébù yuǎnlí jūzhùdì.',vn:'Thời tiết thay đổi, thức ăn khan hiếm, hoặc có kẻ thù xâm phạm, con người buộc phải rời xa nơi cư trú.'},
     {zh:'随便看别人的手机是侵犯隐私的行为。',py:'Suíbiàn kàn biérén de shǒujī shì qīnfàn yǐnsī de xíngwéi.',vn:'Tùy tiện xem điện thoại của người khác là hành vi xâm phạm quyền riêng tư.'},
     {zh:'未经作者同意就复印整本书，侵犯了作者的版权。',py:'Wèi jīng zuòzhě tóngyì jiù fùyìn zhěng běn shū, qīnfànle zuòzhě de bǎnquán.',vn:'Chưa được tác giả đồng ý đã photo cả cuốn sách là xâm phạm bản quyền của tác giả.'}
   ],
   colloFull:[
     {zh:'侵犯隐私',py:'qīnfàn yǐnsī',vn:'xâm phạm quyền riêng tư'},
     {zh:'侵犯权利',py:'qīnfàn quánlì',vn:'xâm phạm quyền lợi'},
     {zh:'侵犯版权',py:'qīnfàn bǎnquán',vn:'vi phạm bản quyền'},
     {zh:'受到侵犯',py:'shòudào qīnfàn',vn:'bị xâm phạm'},
     {zh:'敌人侵犯',py:'dírén qīnfàn',vn:'kẻ thù xâm phạm'}
   ],
   patterns:[
     {s:'侵犯 + (ai 的) 权利 / 隐私 / 版权',m:'Xâm phạm quyền … của ai'},
     {s:'……受到侵犯',m:'… bị xâm phạm'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Một khi quyền lợi của mình bị xâm phạm, phải dùng pháp luật để bảo vệ bản thân.',answer:'一旦自己的权利受到侵犯，就要用法律来保护自己。',answerPy:'Yídàn zìjǐ de quánlì shòudào qīnfàn, jiù yào yòng fǎlǜ lái bǎohù zìjǐ.',
      note:'一旦……就……: một khi … thì …; 用……来 + V: dùng … để ….',pair:'一旦……就……'},
     {promptLang:'vi',prompt:'Bố mẹ dù thương con đến mấy cũng không nên tùy tiện đọc nhật ký của con, nếu không là xâm phạm quyền riêng tư của con.',answer:'父母即使再爱孩子，也不应该随便看孩子的日记，否则就侵犯了孩子的隐私。',answerPy:'Fùmǔ jíshǐ zài ài háizi, yě bù yīnggāi suíbiàn kàn háizi de rìjì, fǒuzé jiù qīnfànle háizi de yǐnsī.',
      note:'即使再……也……: dù … đến mấy cũng …; 否则 = nếu không thì.',pair:'即使……也……'}
   ]},

  {n:6,zh:'居住',py:'jūzhù',pos:'Động từ',vn:'cư trú, ở',hv:'cư trú',em:'🏠',lesson:1,
   explain:['Sống lâu dài ở một nơi nào đó.','Trang trọng hơn 住; hay đi với 在 + nơi chốn, hoặc làm định ngữ: 居住地, 居住环境, 居住条件. Ở tạm vài hôm thì dùng 住, không dùng 居住.'],
   usage:'居住在 + nơi chốn; 居住地 / 居住环境 / 居住条件; 长期居住.',
   collo:['居住在','居住地','居住环境','居住条件'],
   ex_zh:'人们不得不远离居住地，寻找能够安居的地方。',ex_py:'Rénmen bùdébù yuǎnlí jūzhùdì, xúnzhǎo nénggòu ānjū de dìfang.',ex_vn:'Con người buộc phải rời xa nơi cư trú, đi tìm nơi có thể an cư.',
   exList:[
     {zh:'人们不得不远离居住地，寻找能够安居的地方。',py:'Rénmen bùdébù yuǎnlí jūzhùdì, xúnzhǎo nénggòu ānjū de dìfang.',vn:'Con người buộc phải rời xa nơi cư trú, đi tìm nơi có thể an cư.'},
     {zh:'我的外公外婆一直居住在乡下。',py:'Wǒ de wàigōng wàipó yìzhí jūzhù zài xiāngxia.',vn:'Ông bà ngoại tôi vẫn luôn sống ở quê.'},
     {zh:'这几年，城市居民的居住条件有了明显的改善。',py:'Zhè jǐ nián, chéngshì jūmín de jūzhù tiáojiàn yǒule míngxiǎn de gǎishàn.',vn:'Mấy năm nay, điều kiện nhà ở của cư dân thành phố đã được cải thiện rõ rệt.'}
   ],
   colloFull:[
     {zh:'居住在',py:'jūzhù zài',vn:'sống ở, cư trú tại'},
     {zh:'居住地',py:'jūzhùdì',vn:'nơi cư trú'},
     {zh:'居住环境',py:'jūzhù huánjìng',vn:'môi trường sống'},
     {zh:'居住条件',py:'jūzhù tiáojiàn',vn:'điều kiện nhà ở'},
     {zh:'长期居住',py:'chángqī jūzhù',vn:'cư trú lâu dài'}
   ],
   patterns:[
     {s:'居住在 + nơi chốn',m:'Sống, cư trú ở …'},
     {s:'居住 + 环境 / 条件 / 地',m:'Môi trường sống / điều kiện nhà ở / nơi cư trú'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'So với trước đây, môi trường sống của khu dân cư này tốt hơn nhiều rồi.',answer:'和以前相比，这个小区的居住环境好多了。',answerPy:'Hé yǐqián xiāngbǐ, zhège xiǎoqū de jūzhù huánjìng hǎo duō le.',
      note:'和……相比 (ngữ pháp của bài này); Adj + 多了 = … hơn nhiều.',pair:'Adj + 多了'},
     {promptLang:'vi',prompt:'Mặc dù đã sống ở Hà Nội mười năm, bà ấy vẫn chưa quen với mùa đông ở đây.',answer:'尽管已经在河内居住了十年，她还是不习惯这里的冬天。',answerPy:'Jǐnguǎn yǐjīng zài Hénèi jūzhùle shí nián, tā háishi bù xíguàn zhèlǐ de dōngtiān.',
      note:'尽管……还是……: mặc dù … vẫn …; V + 了 + thời lượng.',pair:'尽管……还是……'}
   ]},

  {n:7,zh:'纯粹',py:'chúncuì',pos:'Phó từ / Tính từ',vn:'đơn thuần, chỉ là, hoàn toàn; thuần tuý',hv:'thuần tuý',em:'💧',lesson:1,
   explain:['Phó từ: hoàn toàn, chỉ đơn thuần là (纯粹是……) — nhấn mạnh phán đoán của người nói.','Tính từ: thuần, không pha tạp (纯粹的普通话, 纯粹的巧合).'],
   usage:'纯粹是 + N / cụm từ; 纯粹为了……; 纯粹的 + N.',
   collo:['纯粹是','纯粹为了','纯粹的普通话','纯粹是浪费时间'],
   ex_zh:'那时的旅行纯粹是生存和安全的需要。',ex_py:'Nà shí de lǚxíng chúncuì shì shēngcún hé ānquán de xūyào.',ex_vn:'Việc đi lại thời đó thuần tuý là nhu cầu sinh tồn và an toàn.',
   exList:[
     {zh:'那时的旅行纯粹是生存和安全的需要。',py:'Nà shí de lǚxíng chúncuì shì shēngcún hé ānquán de xūyào.',vn:'Việc đi lại thời đó thuần tuý là nhu cầu sinh tồn và an toàn.'},
     {zh:'你这么说纯粹是在找借口。',py:'Nǐ zhème shuō chúncuì shì zài zhǎo jièkǒu.',vn:'Cậu nói vậy hoàn toàn chỉ là đang kiếm cớ.'},
     {zh:'他说一口纯粹的普通话，一点儿口音都没有。',py:'Tā shuō yì kǒu chúncuì de pǔtōnghuà, yìdiǎnr kǒuyīn dōu méiyǒu.',vn:'Anh ấy nói tiếng phổ thông chuẩn, không lẫn chút giọng địa phương nào.'}
   ],
   colloFull:[
     {zh:'纯粹是',py:'chúncuì shì',vn:'hoàn toàn là'},
     {zh:'纯粹为了',py:'chúncuì wèile',vn:'chỉ đơn thuần vì'},
     {zh:'纯粹的普通话',py:'chúncuì de pǔtōnghuà',vn:'tiếng phổ thông chuẩn'},
     {zh:'纯粹是浪费时间',py:'chúncuì shì làngfèi shíjiān',vn:'hoàn toàn là phí thời gian'},
     {zh:'纯粹的巧合',py:'chúncuì de qiǎohé',vn:'sự trùng hợp thuần tuý'}
   ],
   patterns:[
     {s:'纯粹是 + N / cụm từ',m:'Hoàn toàn là, chỉ đơn thuần là …'},
     {s:'纯粹 + 为了 / 出于……',m:'Chỉ đơn thuần vì / xuất phát từ …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi học tiếng Trung không phải vì thi cử, mà hoàn toàn xuất phát từ sở thích.',answer:'我学汉语不是为了考试，而纯粹是出于兴趣。',answerPy:'Wǒ xué Hànyǔ bú shì wèile kǎoshì, ér chúncuì shì chūyú xìngqù.',
      note:'不是……而是……; 出于 + động cơ = xuất phát từ.',pair:'不是……而是……'},
     {promptLang:'vi',prompt:'Hai chúng tôi gặp nhau ở sân bay hoàn toàn là trùng hợp, chứ không phải hẹn trước.',answer:'我们俩在机场遇见纯粹是巧合，并不是事先约好的。',answerPy:'Wǒmen liǎ zài jīchǎng yùjiàn chúncuì shì qiǎohé, bìng bú shì shìxiān yuēhǎo de.',
      note:'并不是……的: hoàn toàn không phải …; 是……的 nhấn mạnh cách thức.',pair:'是……的'}
   ]},

  {n:8,zh:'生存',py:'shēngcún',pos:'Động từ',vn:'sinh tồn, sống còn',hv:'sinh tồn',em:'🌵',lesson:1,
   explain:['Tồn tại, sống tiếp (người, động thực vật) — nhấn mạnh việc duy trì sự sống.','Hay dùng như danh từ: 生存环境, 生存能力, 生存空间, 为了生存.'],
   usage:'为了生存; 生存下去; 生存环境 / 能力 / 条件; 适者生存.',
   collo:['为了生存','生存能力','生存环境','生存下去'],
   ex_zh:'沙漠里缺水，植物很难生存。',ex_py:'Shāmò li quē shuǐ, zhíwù hěn nán shēngcún.',ex_vn:'Trong sa mạc thiếu nước, thực vật rất khó sinh tồn.',
   exList:[
     {zh:'那时的旅行纯粹是生存和安全的需要。',py:'Nà shí de lǚxíng chúncuì shì shēngcún hé ānquán de xūyào.',vn:'Việc đi lại thời đó thuần tuý là nhu cầu sinh tồn và an toàn.'},
     {zh:'沙漠里缺水，植物很难生存。',py:'Shāmò li quē shuǐ, zhíwù hěn nán shēngcún.',vn:'Trong sa mạc thiếu nước, thực vật rất khó sinh tồn.'},
     {zh:'为了生存，这些动物不得不不断迁徙。',py:'Wèile shēngcún, zhèxiē dòngwù bùdébù búduàn qiānxǐ.',vn:'Để sinh tồn, những loài động vật này buộc phải liên tục di cư.'}
   ],
   colloFull:[
     {zh:'为了生存',py:'wèile shēngcún',vn:'để sinh tồn'},
     {zh:'生存能力',py:'shēngcún nénglì',vn:'khả năng sinh tồn'},
     {zh:'生存环境',py:'shēngcún huánjìng',vn:'môi trường sống'},
     {zh:'生存下去',py:'shēngcún xiàqu',vn:'sống tiếp, tồn tại tiếp'},
     {zh:'适者生存',py:'shìzhě shēngcún',vn:'kẻ thích nghi thì tồn tại'}
   ],
   patterns:[
     {s:'为了生存，……',m:'Để sinh tồn, …'},
     {s:'在……中生存(下去)',m:'Sống sót (tiếp) trong …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nếu không có nước, con người chỉ có thể sống được vài ngày.',answer:'如果没有水，人只能生存几天。',answerPy:'Rúguǒ méiyǒu shuǐ, rén zhǐ néng shēngcún jǐ tiān.',
      note:'如果……: nếu …; 只能 + V + thời lượng.',pair:'如果……(就)……'},
     {promptLang:'vi',prompt:'Trong xã hội cạnh tranh gay gắt, chỉ có không ngừng học hỏi mới có thể tồn tại.',answer:'在竞争激烈的社会里，只有不断学习，才能生存下去。',answerPy:'Zài jìngzhēng jīliè de shèhuì li, zhǐyǒu búduàn xuéxí, cái néng shēngcún xiàqu.',
      note:'只有……才……: chỉ có … mới …; V + 下去 = tiếp tục.',pair:'只有……才……'}
   ]},

  {n:9,zh:'指南针',py:'zhǐnánzhēn',pos:'Danh từ',vn:'la bàn, kim chỉ nam',hv:'chỉ nam châm',em:'🧭',lesson:1,
   explain:['Dụng cụ xác định phương hướng, kim luôn chỉ về hướng nam — một trong bốn phát minh lớn của Trung Quốc cổ đại (四大发明).','Nghĩa bóng "kim chỉ nam, điều định hướng" thường dùng 指南 (旅游指南 = sách hướng dẫn du lịch).'],
   usage:'Lượng từ 个; 发明指南针, 用指南针辨别方向; 四大发明: 造纸术, 印刷术, 火药, 指南针.',
   collo:['发明指南针','用指南针','四大发明之一','辨别方向'],
   ex_zh:'指南针发明后，中国有了海外旅行者。',ex_py:'Zhǐnánzhēn fāmíng hòu, Zhōngguó yǒule hǎiwài lǚxíngzhě.',ex_vn:'Sau khi la bàn được phát minh, Trung Quốc đã có những người du hành ra nước ngoài.',
   exList:[
     {zh:'指南针发明后，中国有了海外旅行者。',py:'Zhǐnánzhēn fāmíng hòu, Zhōngguó yǒule hǎiwài lǚxíngzhě.',vn:'Sau khi la bàn được phát minh, Trung Quốc đã có những người du hành ra nước ngoài.'},
     {zh:'指南针是中国古代四大发明之一。',py:'Zhǐnánzhēn shì Zhōngguó gǔdài sì dà fāmíng zhī yī.',vn:'La bàn là một trong bốn phát minh lớn của Trung Quốc cổ đại.'},
     {zh:'在森林里迷了路，幸亏他带了指南针。',py:'Zài sēnlín li míle lù, xìngkuī tā dàile zhǐnánzhēn.',vn:'Lạc đường trong rừng, may mà anh ấy có mang la bàn.'}
   ],
   colloFull:[
     {zh:'发明指南针',py:'fāmíng zhǐnánzhēn',vn:'phát minh la bàn'},
     {zh:'用指南针',py:'yòng zhǐnánzhēn',vn:'dùng la bàn'},
     {zh:'四大发明之一',py:'sì dà fāmíng zhī yī',vn:'một trong bốn phát minh lớn'},
     {zh:'辨别方向',py:'biànbié fāngxiàng',vn:'xác định phương hướng'},
     {zh:'带指南针',py:'dài zhǐnánzhēn',vn:'mang la bàn'}
   ],
   patterns:[
     {s:'用指南针 + 辨别方向',m:'Dùng la bàn để xác định phương hướng'},
     {s:'……是……之一',m:'… là một trong những …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Có la bàn rồi, tàu thuyền đi trên biển không còn sợ lạc hướng nữa.',answer:'有了指南针，船在海上航行就不再怕迷失方向了。',answerPy:'Yǒule zhǐnánzhēn, chuán zài hǎi shang hángxíng jiù bú zài pà míshī fāngxiàng le.',
      note:'有了……就……; 不再……了 = không còn … nữa.',pair:'不再……了'},
     {promptLang:'vi',prompt:'Bây giờ ai cũng có điện thoại, la bàn gần như đã bị thay thế rồi.',answer:'现在人人都有手机，指南针几乎已经被取代了。',answerPy:'Xiànzài rénrén dōu yǒu shǒujī, zhǐnánzhēn jīhū yǐjīng bèi qǔdài le.',
      note:'被 + V: câu bị động không nêu tác nhân; 人人 = mọi người.',pair:'被 (câu bị động)'}
   ]},

  {n:10,zh:'若干',py:'ruògān',pos:'Đại từ',vn:'một số, một vài (số lượng không xác định)',hv:'nhược can',em:'🔢',lesson:1,
   explain:['Chỉ số lượng không xác định: một số, bao nhiêu đó.','Văn viết, trang trọng; đứng trước (lượng từ +) danh từ: 若干年, 若干个问题, 若干人; 若干年来 = bao năm nay.'],
   usage:'若干 + (lượng từ) + N; 若干年来; 若干年后; 若干问题 / 意见.',
   collo:['若干年来','若干问题','若干意见','若干年后'],
   ex_zh:'若干年来，旅游在世界范围内都是一个热门话题。',ex_py:'Ruògān nián lái, lǚyóu zài shìjiè fànwéi nèi dōu shì yí ge rèmén huàtí.',ex_vn:'Bao năm nay, trên phạm vi toàn thế giới, du lịch luôn là một đề tài nóng.',
   exList:[
     {zh:'若干年来，旅游在世界范围内都是一个热门话题。',py:'Ruògān nián lái, lǚyóu zài shìjiè fànwéi nèi dōu shì yí ge rèmén huàtí.',vn:'Bao năm nay, trên phạm vi toàn thế giới, du lịch luôn là một đề tài nóng.'},
     {zh:'会议讨论了若干个重要问题。',py:'Huìyì tǎolùnle ruògān ge zhòngyào wèntí.',vn:'Hội nghị đã thảo luận một số vấn đề quan trọng.'},
     {zh:'若干年后，当你回忆起今天，也许会笑自己当时太紧张了。',py:'Ruògān nián hòu, dāng nǐ huíyì qǐ jīntiān, yěxǔ huì xiào zìjǐ dāngshí tài jǐnzhāng le.',vn:'Nhiều năm sau, khi nhớ lại hôm nay, có lẽ bạn sẽ cười mình lúc ấy đã quá căng thẳng.'}
   ],
   colloFull:[
     {zh:'若干年来',py:'ruògān nián lái',vn:'bao năm nay'},
     {zh:'若干问题',py:'ruògān wèntí',vn:'một số vấn đề'},
     {zh:'若干意见',py:'ruògān yìjiàn',vn:'một số ý kiến'},
     {zh:'若干年后',py:'ruògān nián hòu',vn:'nhiều năm sau'},
     {zh:'若干人',py:'ruògān rén',vn:'một số người'}
   ],
   patterns:[
     {s:'若干 + (lượng từ) + N',m:'Một số … (văn viết)'},
     {s:'若干年来 / 若干年后',m:'Bao năm nay / nhiều năm sau'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Về kế hoạch này, tôi muốn nêu một số ý kiến.',answer:'关于这个计划，我想提出若干意见。',answerPy:'Guānyú zhège jìhuà, wǒ xiǎng tíchū ruògān yìjiàn.',
      note:'关于 + chủ đề đặt đầu câu; 提出意见 = nêu ý kiến.',pair:'关于……'},
     {promptLang:'vi',prompt:'Bao năm nay, dù công việc bận đến đâu, tuần nào anh ấy cũng gọi điện cho mẹ.',answer:'若干年来，无论工作多忙，他每个星期都给妈妈打电话。',answerPy:'Ruògān nián lái, wúlùn gōngzuò duō máng, tā měi ge xīngqī dōu gěi māma dǎ diànhuà.',
      note:'无论……都……: dù … đều …; 多 + Adj = … đến đâu.',pair:'无论……都……'}
   ]},

  {n:11,zh:'遍布',py:'biànbù',pos:'Động từ',vn:'phân bố, rải khắp (nơi)',hv:'biến bố',em:'🗺️',lesson:1,
   explain:['Phân bố khắp, có mặt ở mọi nơi trong một phạm vi (遍 = khắp).','Cấu trúc: A 遍布 + phạm vi (全国 / 世界 / 全城) hoặc 遍布在……; văn viết.'],
   usage:'遍布全国 / 世界 / 各地; 足迹遍布……; 遍布在…….',
   collo:['遍布全国','遍布世界','足迹遍布','遍布各地'],
   ex_zh:'一些足迹遍布世界的旅行者千方百计来到了中国。',ex_py:'Yìxiē zújì biànbù shìjiè de lǚxíngzhě qiānfāng-bǎijì láidàole Zhōngguó.',ex_vn:'Một số nhà du hành có dấu chân khắp thế giới đã tìm mọi cách đến được Trung Quốc.',
   exList:[
     {zh:'一些足迹遍布世界的旅行者千方百计来到了中国。',py:'Yìxiē zújì biànbù shìjiè de lǚxíngzhě qiānfāng-bǎijì láidàole Zhōngguó.',vn:'Một số nhà du hành có dấu chân khắp thế giới đã tìm mọi cách đến được Trung Quốc.'},
     {zh:'这家公司的分店遍布全国。',py:'Zhè jiā gōngsī de fēndiàn biànbù quánguó.',vn:'Chi nhánh của công ty này có mặt khắp cả nước.'},
     {zh:'老教授的学生遍布世界各地。',py:'Lǎo jiàoshòu de xuésheng biànbù shìjiè gèdì.',vn:'Học trò của vị giáo sư già có mặt ở khắp nơi trên thế giới.'}
   ],
   colloFull:[
     {zh:'遍布全国',py:'biànbù quánguó',vn:'có mặt khắp cả nước'},
     {zh:'遍布世界',py:'biànbù shìjiè',vn:'khắp thế giới'},
     {zh:'足迹遍布',py:'zújì biànbù',vn:'dấu chân in khắp'},
     {zh:'遍布各地',py:'biànbù gèdì',vn:'có ở khắp nơi'},
     {zh:'遍布全城',py:'biànbù quán chéng',vn:'khắp thành phố'}
   ],
   patterns:[
     {s:'A + 遍布 + 全国 / 世界 / 各地',m:'A có mặt khắp …'},
     {s:'足迹遍布……',m:'Dấu chân in khắp … (đã đi rất nhiều nơi)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bây giờ cửa hàng tiện lợi có khắp thành phố, mua đồ tiện hơn trước nhiều.',answer:'现在便利店遍布全城，买东西比以前方便多了。',answerPy:'Xiànzài biànlìdiàn biànbù quán chéng, mǎi dōngxi bǐ yǐqián fāngbiàn duō le.',
      note:'A 比 B + Adj + 多了: A … hơn B nhiều.',pair:'A 比 B + Adj + 多了'},
     {promptLang:'vi',prompt:'Ông ngoại cả đời thích đi du lịch, dấu chân ông gần như in khắp cả nước.',answer:'外公一辈子都喜欢旅行，他的足迹几乎遍布全国。',answerPy:'Wàigōng yíbèizi dōu xǐhuan lǚxíng, tā de zújì jīhū biànbù quánguó.',
      note:'一辈子 = cả đời; 几乎 = gần như (đứng trước động từ).',pair:'几乎'}
   ]},

  {n:12,zh:'千方百计',py:'qiānfāng-bǎijì',pos:'Thành ngữ',vn:'trăm phương nghìn kế, tìm đủ mọi cách',hv:'thiên phương bách kế',em:'🧩',lesson:1,
   explain:['Nghĩ ra hàng nghìn, hàng trăm cách — dốc hết sức tìm mọi cách để đạt được mục đích.','Thường làm trạng ngữ: 千方百计(地) + V; gần nghĩa với 想方设法 (bài 6).'],
   usage:'千方百计(地) + 寻找 / 帮助 / 说服 / 解决…; không nói 很千方百计.',
   collo:['千方百计地寻找','千方百计地帮助','千方百计来到','千方百计地解决'],
   ex_zh:'为了让病人早日康复，医生们千方百计地寻找治疗方法。',ex_py:'Wèile ràng bìngrén zǎorì kāngfù, yīshēngmen qiānfāng-bǎijì de xúnzhǎo zhìliáo fāngfǎ.',ex_vn:'Để bệnh nhân sớm bình phục, các bác sĩ tìm đủ mọi cách chữa trị.',
   exList:[
     {zh:'一些足迹遍布世界的旅行者千方百计来到了中国。',py:'Yìxiē zújì biànbù shìjiè de lǚxíngzhě qiānfāng-bǎijì láidàole Zhōngguó.',vn:'Một số nhà du hành có dấu chân khắp thế giới đã tìm mọi cách đến được Trung Quốc.'},
     {zh:'为了让病人早日康复，医生们千方百计地寻找治疗方法。',py:'Wèile ràng bìngrén zǎorì kāngfù, yīshēngmen qiānfāng-bǎijì de xúnzhǎo zhìliáo fāngfǎ.',vn:'Để bệnh nhân sớm bình phục, các bác sĩ tìm đủ mọi cách chữa trị.'},
     {zh:'他千方百计地讨好老板，结果反而引起了老板的反感。',py:'Tā qiānfāng-bǎijì de tǎohǎo lǎobǎn, jiéguǒ fǎn\'ér yǐnqǐle lǎobǎn de fǎngǎn.',vn:'Anh ta tìm đủ mọi cách lấy lòng sếp, kết quả lại khiến sếp phản cảm.'}
   ],
   colloFull:[
     {zh:'千方百计地寻找',py:'qiānfāng-bǎijì de xúnzhǎo',vn:'tìm mọi cách tìm kiếm'},
     {zh:'千方百计地帮助',py:'qiānfāng-bǎijì de bāngzhù',vn:'tìm mọi cách giúp đỡ'},
     {zh:'千方百计来到',py:'qiānfāng-bǎijì láidào',vn:'tìm mọi cách để đến'},
     {zh:'千方百计地解决',py:'qiānfāng-bǎijì de jiějué',vn:'tìm mọi cách giải quyết'},
     {zh:'千方百计地说服',py:'qiānfāng-bǎijì de shuōfú',vn:'tìm mọi cách thuyết phục'}
   ],
   patterns:[
     {s:'为了……，千方百计(地) + V',m:'Để …, tìm mọi cách …'},
     {s:'千方百计 ≈ 想方设法',m:'Đồng nghĩa với 想方设法 (bài 6)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Để con được học một trường tốt, bố mẹ đã tìm đủ mọi cách.',answer:'为了让孩子上一所好学校，父母千方百计地想办法。',answerPy:'Wèile ràng háizi shàng yì suǒ hǎo xuéxiào, fùmǔ qiānfāng-bǎijì de xiǎng bànfǎ.',
      note:'为了 + mục đích đặt đầu câu; 让 + người + V.',pair:'为了……'},
     {promptLang:'vi',prompt:'Tuy đã tìm đủ mọi cách, chúng tôi vẫn không liên lạc được với anh ấy.',answer:'尽管我们千方百计地寻找，还是没能联系上他。',answerPy:'Jǐnguǎn wǒmen qiānfāng-bǎijì de xúnzhǎo, háishi méi néng liánxì shàng tā.',
      note:'联系上 = liên lạc được (bổ ngữ kết quả 上); 没能 + V = đã không thể ….',pair:'V + 上 (bổ ngữ kết quả)'}
   ]},

  {n:13,zh:'书籍',py:'shūjí',pos:'Danh từ',vn:'sách vở (nói khái quát)',hv:'thư tịch',em:'📚',lesson:1,
   explain:['Tên gọi chung cho sách, mang tính tập hợp, khái quát, văn viết.','Thường đi với 各类, 大量, ……类: 各类书籍, 旅游类书籍; nói một cuốn cụ thể thì thường dùng 一本书 (một cuốn sách), trừ khi có định ngữ dài như 一本旅游指南类的书籍.'],
   usage:'各类书籍, 旅游类书籍, 大量书籍, 出版书籍; 书籍是人类进步的阶梯.',
   collo:['各类书籍','旅游类书籍','大量书籍','珍贵书籍'],
   ex_zh:'可开始，他们连一本旅游指南类的书籍都没有。',ex_py:'Kě kāishǐ, tāmen lián yì běn lǚyóu zhǐnán lèi de shūjí dōu méiyǒu.',ex_vn:'Nhưng lúc đầu, đến một cuốn sách thuộc loại hướng dẫn du lịch họ cũng không có.',
   exList:[
     {zh:'可开始，他们连一本旅游指南类的书籍都没有。',py:'Kě kāishǐ, tāmen lián yì běn lǚyóu zhǐnán lèi de shūjí dōu méiyǒu.',vn:'Nhưng lúc đầu, đến một cuốn sách thuộc loại hướng dẫn du lịch họ cũng không có.'},
     {zh:'图书馆里收藏着各类书籍。',py:'Túshūguǎn li shōucángzhe gè lèi shūjí.',vn:'Thư viện lưu giữ đủ các loại sách.'},
     {zh:'书籍是人类进步的阶梯。',py:'Shūjí shì rénlèi jìnbù de jiētī.',vn:'Sách là nấc thang tiến bộ của loài người.'}
   ],
   colloFull:[
     {zh:'各类书籍',py:'gè lèi shūjí',vn:'các loại sách'},
     {zh:'旅游类书籍',py:'lǚyóu lèi shūjí',vn:'sách du lịch'},
     {zh:'大量书籍',py:'dàliàng shūjí',vn:'một lượng lớn sách'},
     {zh:'珍贵书籍',py:'zhēnguì shūjí',vn:'sách quý'},
     {zh:'出版书籍',py:'chūbǎn shūjí',vn:'xuất bản sách'}
   ],
   patterns:[
     {s:'……类(的)书籍',m:'Sách thuộc loại …'},
     {s:'连……书籍都没有',m:'Đến … sách cũng không có'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Phòng của ông ấy ngoài sách ra thì hầu như chẳng có gì.',answer:'他的房间里除了书籍以外，几乎什么都没有。',answerPy:'Tā de fángjiān li chúle shūjí yǐwài, jīhū shénme dōu méiyǒu.',
      note:'除了……以外: ngoài … ra; 什么都没有 = chẳng có gì.',pair:'除了……以外'},
     {promptLang:'vi',prompt:'Sách không những giúp chúng ta mở mang kiến thức mà còn có thể thay đổi cách tư duy của chúng ta.',answer:'书籍不但能让我们增长知识，而且能改变我们的思维方式。',answerPy:'Shūjí búdàn néng ràng wǒmen zēngzhǎng zhīshi, érqiě néng gǎibiàn wǒmen de sīwéi fāngshì.',
      note:'不但……而且……: không những … mà còn …; 思维 ôn bài 5.',pair:'不但……而且……'}
   ]},

  {n:14,zh:'问世',py:'wènshì',pos:'Động từ',vn:'ra đời, ra mắt, được xuất bản',hv:'vấn thế',em:'🆕',lesson:1,
   explain:['(Tác phẩm, sản phẩm, phát minh) lần đầu xuất hiện trước công chúng: ra đời, ra mắt, được xuất bản.','Nội động từ, không mang tân ngữ: 新书问世, 产品问世 (không nói 问世了一本书); hay đi với 终于, 正式, 刚刚.'],
   usage:'N + 问世; 正式问世; 自……问世以来; 一问世就…….',
   collo:['新书问世','正式问世','问世以来','终于问世'],
   ex_zh:'直到1898年，中国最早的旅游指南问世了。',ex_py:'Zhídào yī bā jiǔ bā nián, Zhōngguó zuì zǎo de lǚyóu zhǐnán wènshì le.',ex_vn:'Mãi đến năm 1898, cuốn sách hướng dẫn du lịch sớm nhất của Trung Quốc mới ra đời.',
   exList:[
     {zh:'直到1898年，中国最早的旅游指南问世了。',py:'Zhídào yī bā jiǔ bā nián, Zhōngguó zuì zǎo de lǚyóu zhǐnán wènshì le.',vn:'Mãi đến năm 1898, cuốn sách hướng dẫn du lịch sớm nhất của Trung Quốc mới ra đời.'},
     {zh:'他的第一部小说一问世就引起了轰动。',py:'Tā de dì-yī bù xiǎoshuō yí wènshì jiù yǐnqǐle hōngdòng.',vn:'Cuốn tiểu thuyết đầu tay của anh ấy vừa ra mắt đã gây chấn động.'},
     {zh:'智能手机问世以来，人们的生活方式发生了很大的变化。',py:'Zhìnéng shǒujī wènshì yǐlái, rénmen de shēnghuó fāngshì fāshēngle hěn dà de biànhuà.',vn:'Từ khi điện thoại thông minh ra đời, lối sống của con người đã thay đổi rất nhiều.'}
   ],
   colloFull:[
     {zh:'新书问世',py:'xīnshū wènshì',vn:'sách mới ra mắt'},
     {zh:'正式问世',py:'zhèngshì wènshì',vn:'chính thức ra đời'},
     {zh:'问世以来',py:'wènshì yǐlái',vn:'từ khi ra đời đến nay'},
     {zh:'终于问世',py:'zhōngyú wènshì',vn:'cuối cùng cũng ra đời'},
     {zh:'产品问世',py:'chǎnpǐn wènshì',vn:'sản phẩm ra mắt'}
   ],
   patterns:[
     {s:'N + 问世(了)',m:'… ra đời / ra mắt'},
     {s:'自从 / 自……问世以来，……',m:'Từ khi … ra đời đến nay, …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Từ khi Internet ra đời, việc tìm kiếm thông tin ngày càng tiện lợi.',answer:'自从互联网问世以来，查找信息越来越方便了。',answerPy:'Zìcóng hùliánwǎng wènshì yǐlái, cházhǎo xìnxī yuè lái yuè fāngbiàn le.',
      note:'自从……以来: kể từ … đến nay; 越来越 + Adj.',pair:'自从……以来'},
     {promptLang:'vi',prompt:'Sản phẩm mới vừa ra mắt đã được giới trẻ đón nhận.',answer:'新产品一问世，就受到了年轻人的欢迎。',answerPy:'Xīn chǎnpǐn yí wènshì, jiù shòudàole niánqīngrén de huānyíng.',
      note:'一……就……: vừa … đã …; 受到……的欢迎 = được … hoan nghênh.',pair:'一……就……'}
   ]},

  {n:15,zh:'携带',py:'xiédài',pos:'Động từ',vn:'mang theo',hv:'huề đới',em:'🎒',lesson:1,
   explain:['Mang theo bên mình (đồ vật, hành lý, giấy tờ…).','Văn viết, hay gặp trong thông báo, quy định: 随身携带, 携带方便, 禁止携带; khẩu ngữ nói 带.'],
   usage:'携带 + đồ vật; 随身携带; 携带方便; 便于携带; 禁止携带…….',
   collo:['随身携带','携带方便','便于携带','禁止携带'],
   ex_zh:'那是一本携带方便的口袋书。',ex_py:'Nà shì yì běn xiédài fāngbiàn de kǒudàishū.',ex_vn:'Đó là một cuốn sách bỏ túi mang theo rất tiện.',
   exList:[
     {zh:'那是一本携带方便的口袋书。',py:'Nà shì yì běn xiédài fāngbiàn de kǒudàishū.',vn:'Đó là một cuốn sách bỏ túi mang theo rất tiện.'},
     {zh:'乘坐飞机时，禁止携带易燃易爆物品。',py:'Chéngzuò fēijī shí, jìnzhǐ xiédài yì rán yì bào wùpǐn.',vn:'Khi đi máy bay, cấm mang theo vật dễ cháy nổ.'},
     {zh:'出国旅行时，护照一定要随身携带。',py:'Chūguó lǚxíng shí, hùzhào yídìng yào suíshēn xiédài.',vn:'Khi đi du lịch nước ngoài, hộ chiếu nhất định phải mang theo bên mình.'}
   ],
   colloFull:[
     {zh:'随身携带',py:'suíshēn xiédài',vn:'mang theo bên mình'},
     {zh:'携带方便',py:'xiédài fāngbiàn',vn:'mang theo tiện lợi'},
     {zh:'便于携带',py:'biànyú xiédài',vn:'dễ mang theo'},
     {zh:'禁止携带',py:'jìnzhǐ xiédài',vn:'cấm mang theo'},
     {zh:'携带行李',py:'xiédài xíngli',vn:'mang theo hành lý'}
   ],
   patterns:[
     {s:'随身携带 + đồ vật',m:'Mang … theo bên mình'},
     {s:'……便于携带 / 携带方便',m:'… dễ mang theo'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chiếc máy tính này vừa nhẹ vừa mỏng, rất tiện mang theo.',answer:'这台电脑又轻又薄，非常便于携带。',answerPy:'Zhè tái diànnǎo yòu qīng yòu báo, fēicháng biànyú xiédài.',
      note:'又……又……: vừa … vừa …; 便于 là điểm ngữ pháp của bài này.',pair:'又……又……'},
     {promptLang:'vi',prompt:'Để tránh bị mất, tốt nhất đừng mang theo quá nhiều tiền mặt.',answer:'为了避免丢失，最好不要携带太多现金。',answerPy:'Wèile bìmiǎn diūshī, zuìhǎo bú yào xiédài tài duō xiànjīn.',
      note:'最好 + (不要) V = tốt nhất nên (đừng) …; 避免 = tránh.',pair:'最好……'}
   ]},

  {n:16,zh:'序言',py:'xùyán',pos:'Danh từ',vn:'lời tựa',hv:'tự ngôn',em:'📜',lesson:1,
   explain:['Bài viết ngắn đặt ở đầu sách, giới thiệu mục đích, nội dung, quá trình biên soạn… của cuốn sách.','Đồng nghĩa 前言, 序; có thể do tác giả hoặc người khác viết: 为……写序言.'],
   usage:'在序言中……; 为 + sách + 写序言; 书的序言.',
   collo:['在序言中','写序言','为新书写序言','书的序言'],
   ex_zh:'作者在序言中说“天津异常繁华”。',ex_py:'Zuòzhě zài xùyán zhōng shuō "Tiānjīn yìcháng fánhuá".',ex_vn:'Tác giả viết trong lời tựa rằng "Thiên Tân vô cùng phồn hoa".',
   exList:[
     {zh:'作者在序言中说“天津异常繁华”。',py:'Zuòzhě zài xùyán zhōng shuō "Tiānjīn yìcháng fánhuá".',vn:'Tác giả viết trong lời tựa rằng "Thiên Tân vô cùng phồn hoa".'},
     {zh:'这本书的序言是一位著名作家写的。',py:'Zhè běn shū de xùyán shì yí wèi zhùmíng zuòjiā xiě de.',vn:'Lời tựa của cuốn sách này do một nhà văn nổi tiếng viết.'},
     {zh:'老师请我为班级的毕业纪念册写序言。',py:'Lǎoshī qǐng wǒ wèi bānjí de bìyè jìniàncè xiě xùyán.',vn:'Thầy giáo nhờ tôi viết lời tựa cho cuốn kỷ yếu tốt nghiệp của lớp.'}
   ],
   colloFull:[
     {zh:'在序言中',py:'zài xùyán zhōng',vn:'trong lời tựa'},
     {zh:'写序言',py:'xiě xùyán',vn:'viết lời tựa'},
     {zh:'为新书写序言',py:'wèi xīnshū xiě xùyán',vn:'viết lời tựa cho sách mới'},
     {zh:'书的序言',py:'shū de xùyán',vn:'lời tựa của cuốn sách'}
   ],
   patterns:[
     {s:'(作者) 在序言中 + 说 / 介绍……',m:'(Tác giả) nói / giới thiệu … trong lời tựa'},
     {s:'为 + sách + 写序言',m:'Viết lời tựa cho …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đọc lời tựa trước rồi mới đọc phần chính văn, như vậy sẽ dễ hiểu hơn.',answer:'先读序言，再读正文，这样会更容易理解。',answerPy:'Xiān dú xùyán, zài dú zhèngwén, zhèyàng huì gèng róngyì lǐjiě.',
      note:'先……再……: trước … rồi mới ….',pair:'先……再……'},
     {promptLang:'vi',prompt:'Trong lời tựa, tác giả không chỉ giới thiệu nội dung sách mà còn cảm ơn sự ủng hộ của gia đình.',answer:'作者不仅在序言中介绍了书的内容，还感谢了家人的支持。',answerPy:'Zuòzhě bùjǐn zài xùyán zhōng jièshàole shū de nèiróng, hái gǎnxièle jiārén de zhīchí.',
      note:'不仅……还……: không chỉ … mà còn ….',pair:'不仅……还……'}
   ]},

  {n:17,zh:'繁华',py:'fánhuá',pos:'Tính từ',vn:'phồn hoa, sầm uất, phồn thịnh',hv:'phồn hoa',em:'🏙️',lesson:1,
   explain:['(Thành phố, đường phố, khu vực) đông đúc, buôn bán sầm uất, náo nhiệt.','Chỉ dùng cho nơi chốn; nói kinh tế, văn hoá, thị trường phát triển thì dùng 繁荣.'],
   usage:'繁华的 + 街道 / 城市 / 地段; 繁华地区; 市中心很繁华.',
   collo:['繁华的街道','繁华的城市','繁华地段','异常繁华'],
   ex_zh:'他在市中心最繁华的地段开了一家咖啡馆。',ex_py:'Tā zài shì zhōngxīn zuì fánhuá de dìduàn kāile yì jiā kāfēiguǎn.',ex_vn:'Anh ấy mở một quán cà phê ở khu sầm uất nhất trung tâm thành phố.',
   exList:[
     {zh:'作者在序言中说“天津异常繁华”。',py:'Zuòzhě zài xùyán zhōng shuō "Tiānjīn yìcháng fánhuá".',vn:'Tác giả viết trong lời tựa rằng "Thiên Tân vô cùng phồn hoa".'},
     {zh:'他在市中心最繁华的地段开了一家咖啡馆。',py:'Tā zài shì zhōngxīn zuì fánhuá de dìduàn kāile yì jiā kāfēiguǎn.',vn:'Anh ấy mở một quán cà phê ở khu sầm uất nhất trung tâm thành phố.'},
     {zh:'二十年前这里还是一片农田，现在已经变成了繁华的新城。',py:'Èrshí nián qián zhèlǐ hái shì yí piàn nóngtián, xiànzài yǐjīng biànchéngle fánhuá de xīnchéng.',vn:'Hai mươi năm trước nơi đây còn là một vùng ruộng, nay đã trở thành một khu đô thị mới sầm uất.'}
   ],
   colloFull:[
     {zh:'繁华的街道',py:'fánhuá de jiēdào',vn:'con phố sầm uất'},
     {zh:'繁华的城市',py:'fánhuá de chéngshì',vn:'thành phố phồn hoa'},
     {zh:'繁华地段',py:'fánhuá dìduàn',vn:'khu vực sầm uất'},
     {zh:'异常繁华',py:'yìcháng fánhuá',vn:'vô cùng phồn hoa'},
     {zh:'繁华的都市',py:'fánhuá de dūshì',vn:'đô thị phồn hoa'}
   ],
   patterns:[
     {s:'繁华的 + 街道 / 城市 / 地段',m:'… sầm uất, phồn hoa'},
     {s:'nơi chốn + 很 / 异常 + 繁华',m:'Nơi nào đó rất / vô cùng sầm uất'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'So với sự phồn hoa của thành phố lớn, tôi thích sự yên bình của làng quê hơn.',answer:'和大城市的繁华相比，我更喜欢乡村的宁静。',answerPy:'Hé dà chéngshì de fánhuá xiāngbǐ, wǒ gèng xǐhuan xiāngcūn de níngjìng.',
      note:'和……相比 (ngữ pháp bài này) + 更……: so với … thì … hơn.',pair:'更 (so sánh)'},
     {promptLang:'vi',prompt:'Con phố này ban ngày rất yên tĩnh, cứ đến tối là trở nên vô cùng sầm uất.',answer:'这条街白天很安静，一到晚上就变得异常繁华。',answerPy:'Zhè tiáo jiē báitiān hěn ānjìng, yí dào wǎnshang jiù biàn de yìcháng fánhuá.',
      note:'一到……就……: cứ đến … là …; 异常 ôn bài 1.',pair:'一……就……'}
   ]},

  {n:18,zh:'便于',py:'biànyú',pos:'Động từ',vn:'tiện cho, dễ (làm gì)',hv:'tiện vu',em:'👌',lesson:1,
   explain:['Biểu thị tương đối dễ dàng, thuận tiện để làm một việc gì đó.','Sau 便于 phần nhiều là động từ / cụm động từ: 便于理解, 便于携带, 便于管理; phủ định: 不便于.'],
   usage:'便于 + V (理解 / 携带 / 管理 / 联系 / 出行); 为(了)便于……，……; 不便于…….',
   collo:['便于理解','便于携带','便于管理','为便于'],
   ex_zh:'为便于外地人出行，他搜集了当地文化习俗以及车船码头等信息，做了简要介绍。',ex_py:'Wèi biànyú wàidìrén chūxíng, tā sōujíle dāngdì wénhuà xísú yǐjí chē chuán mǎtou děng xìnxī, zuòle jiǎnyào jièshào.',ex_vn:'Để người nơi khác đi lại thuận tiện, ông đã thu thập thông tin về văn hoá, phong tục địa phương cùng xe, thuyền, bến bãi…, giới thiệu một cách ngắn gọn.',
   exList:[
     {zh:'为便于外地人出行，他搜集了当地文化习俗以及车船码头等信息，做了简要介绍。',py:'Wèi biànyú wàidìrén chūxíng, tā sōujíle dāngdì wénhuà xísú yǐjí chē chuán mǎtou děng xìnxī, zuòle jiǎnyào jièshào.',vn:'Để người nơi khác đi lại thuận tiện, ông đã thu thập thông tin về văn hoá, phong tục địa phương cùng xe, thuyền, bến bãi…, giới thiệu một cách ngắn gọn.'},
     {zh:'科普文章应该写得简明易懂、便于理解。',py:'Kēpǔ wénzhāng yīnggāi xiě de jiǎnmíng yì dǒng, biànyú lǐjiě.',vn:'Bài phổ biến khoa học nên viết ngắn gọn, dễ hiểu, thuận tiện cho người đọc tiếp thu.'},
     {zh:'多数学者认为目前图书分类太过繁杂，不便于利用。',py:'Duōshù xuézhě rènwéi mùqián túshū fēnlèi tài guò fánzá, bú biànyú lìyòng.',vn:'Đa số học giả cho rằng cách phân loại sách hiện nay quá rườm rà, không tiện sử dụng.'}
   ],
   colloFull:[
     {zh:'便于理解',py:'biànyú lǐjiě',vn:'dễ hiểu'},
     {zh:'便于携带',py:'biànyú xiédài',vn:'dễ mang theo'},
     {zh:'便于管理',py:'biànyú guǎnlǐ',vn:'thuận tiện cho việc quản lý'},
     {zh:'为便于',py:'wèi biànyú',vn:'để thuận tiện cho'},
     {zh:'不便于利用',py:'bú biànyú lìyòng',vn:'không tiện sử dụng'}
   ],
   patterns:[
     {s:'便于 + V',m:'Tiện cho việc …, dễ …'},
     {s:'为(了)便于……，……',m:'Để thuận tiện cho …, …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Để tiện liên lạc, cô giáo đã lập một nhóm chat cho cả lớp.',answer:'为了便于联系，老师给全班同学建了一个聊天群。',answerPy:'Wèile biànyú liánxì, lǎoshī gěi quán bān tóngxué jiànle yí ge liáotiānqún.',
      note:'为了 + mục đích đặt đầu câu; 给 + ai + V.',pair:'为了……'},
     {promptLang:'vi',prompt:'Chữ viết quá nhỏ, vừa không đẹp lại không tiện đọc.',answer:'字写得太小，既不好看，也不便于阅读。',answerPy:'Zì xiě de tài xiǎo, jì bù hǎokàn, yě bú biànyú yuèdú.',
      note:'既……也……: vừa … vừa …; bổ ngữ trình độ V + 得 + Adj.',pair:'既……也……'}
   ]},

  {n:19,zh:'习俗',py:'xísú',pos:'Danh từ',vn:'phong tục, tập tục',hv:'tập tục',em:'🏮',lesson:1,
   explain:['Phong tục, thói quen được hình thành lâu đời trong một vùng, một cộng đồng.','Hay đi với 当地, 民间, 传统; động từ đi kèm: 遵守 / 尊重 / 保留 + 习俗.'],
   usage:'当地习俗, 传统习俗, 民间习俗; 尊重 / 遵守 + 习俗; 有 + V + 的习俗.',
   collo:['当地习俗','文化习俗','传统习俗','尊重习俗'],
   ex_zh:'中秋节有吃月饼、赏月的习俗。',ex_py:'Zhōngqiū Jié yǒu chī yuèbing, shǎng yuè de xísú.',ex_vn:'Tết Trung thu có phong tục ăn bánh trung thu, ngắm trăng.',
   exList:[
     {zh:'他搜集了当地文化习俗以及车船码头等信息。',py:'Tā sōujíle dāngdì wénhuà xísú yǐjí chē chuán mǎtou děng xìnxī.',vn:'Ông đã thu thập thông tin về văn hoá, phong tục địa phương cùng xe, thuyền, bến bãi.'},
     {zh:'中秋节有吃月饼、赏月的习俗。',py:'Zhōngqiū Jié yǒu chī yuèbing, shǎng yuè de xísú.',vn:'Tết Trung thu có phong tục ăn bánh trung thu, ngắm trăng.'},
     {zh:'到了一个新地方，要尊重当地的习俗。',py:'Dàole yí ge xīn dìfang, yào zūnzhòng dāngdì de xísú.',vn:'Đến một nơi mới, phải tôn trọng phong tục địa phương.'}
   ],
   colloFull:[
     {zh:'当地习俗',py:'dāngdì xísú',vn:'phong tục địa phương'},
     {zh:'文化习俗',py:'wénhuà xísú',vn:'phong tục văn hoá'},
     {zh:'传统习俗',py:'chuántǒng xísú',vn:'phong tục truyền thống'},
     {zh:'尊重习俗',py:'zūnzhòng xísú',vn:'tôn trọng phong tục'},
     {zh:'民间习俗',py:'mínjiān xísú',vn:'tập tục dân gian'}
   ],
   patterns:[
     {s:'有 + V + 的习俗',m:'Có phong tục (làm gì)'},
     {s:'尊重 / 遵守 + 当地习俗',m:'Tôn trọng / tuân theo phong tục địa phương'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Người Việt Nam có phong tục gói bánh chưng khi ăn Tết.',answer:'越南人有过春节时包粽子的习俗。',answerPy:'Yuènánrén yǒu guò Chūnjié shí bāo zòngzi de xísú.',
      note:'有 + V + 的习俗; 过春节 = ăn Tết; 包粽子 = gói bánh chưng / bánh tét.',pair:'định ngữ + 的'},
     {promptLang:'vi',prompt:'Mỗi nơi có phong tục khác nhau, vì vậy trước khi đi du lịch tốt nhất nên tìm hiểu trước.',answer:'各地的习俗不同，所以去旅游之前最好先了解一下。',answerPy:'Gè dì de xísú bù tóng, suǒyǐ qù lǚyóu zhīqián zuìhǎo xiān liǎojiě yíxià.',
      note:'……之前 = trước khi …; V + 一下.',pair:'……之前'}
   ]},

  {n:20,zh:'码头',py:'mǎtou',pos:'Danh từ',vn:'bến đò, bến cảng',hv:'mã đầu',em:'⚓',lesson:1,
   explain:['Nơi tàu thuyền cập bến để khách lên xuống, bốc dỡ hàng hoá.','Lượng từ 个 / 座; hay gặp: 车船码头, 客运码头, 在码头等船.'],
   usage:'在码头 + V; 车船码头; 客运 / 货运码头; 离开码头.',
   collo:['车船码头','在码头','客运码头','码头工人'],
   ex_zh:'我们在码头等了半个小时，船才开过来。',ex_py:'Wǒmen zài mǎtou děngle bàn ge xiǎoshí, chuán cái kāi guòlai.',ex_vn:'Chúng tôi đợi ở bến nửa tiếng, tàu mới chạy tới.',
   exList:[
     {zh:'他搜集了当地文化习俗以及车船码头等信息，做了简要介绍。',py:'Tā sōujíle dāngdì wénhuà xísú yǐjí chē chuán mǎtou děng xìnxī, zuòle jiǎnyào jièshào.',vn:'Ông thu thập thông tin về văn hoá, phong tục địa phương cùng xe, thuyền, bến bãi…, rồi giới thiệu ngắn gọn.'},
     {zh:'我们在码头等了半个小时，船才开过来。',py:'Wǒmen zài mǎtou děngle bàn ge xiǎoshí, chuán cái kāi guòlai.',vn:'Chúng tôi đợi ở bến nửa tiếng, tàu mới chạy tới.'},
     {zh:'这座港口城市有好几个大型码头。',py:'Zhè zuò gǎngkǒu chéngshì yǒu hǎo jǐ ge dàxíng mǎtou.',vn:'Thành phố cảng này có mấy bến cảng lớn.'}
   ],
   colloFull:[
     {zh:'车船码头',py:'chē chuán mǎtou',vn:'bến xe, bến thuyền'},
     {zh:'在码头',py:'zài mǎtou',vn:'ở bến'},
     {zh:'客运码头',py:'kèyùn mǎtou',vn:'bến tàu khách'},
     {zh:'码头工人',py:'mǎtou gōngrén',vn:'công nhân bốc xếp ở cảng'},
     {zh:'离开码头',py:'líkāi mǎtou',vn:'rời bến'}
   ],
   patterns:[
     {s:'在码头 + 等 / 送 / 接',m:'Chờ / tiễn / đón ở bến'},
     {s:'船 + 离开 / 靠近 + 码头',m:'Tàu rời / cập bến'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tàu vừa rời bến thì anh ấy mới hớt hải chạy tới.',answer:'船刚离开码头，他才急急忙忙地赶来。',answerPy:'Chuán gāng líkāi mǎtou, tā cái jíjí-mángmáng de gǎnlái.',
      note:'刚……才……: vừa … thì mới …; 急急忙忙 là tính từ láy.',pair:'才 (muộn)'},
     {promptLang:'vi',prompt:'Nếu đến muộn năm phút là chúng tôi đã lỡ chuyến tàu cuối cùng rời bến rồi.',answer:'要是晚到五分钟，我们就赶不上最后一班离开码头的船了。',answerPy:'Yàoshi wǎn dào wǔ fēnzhōng, wǒmen jiù gǎn bu shàng zuìhòu yì bān líkāi mǎtou de chuán le.',
      note:'要是……就……; 赶不上 = không kịp (bổ ngữ khả năng).',pair:'要是……就……'}
   ]},

  {n:21,zh:'简要',py:'jiǎnyào',pos:'Tính từ',vn:'ngắn gọn, vắn tắt',hv:'giản yếu',em:'📝',lesson:1,
   explain:['Ngắn gọn mà nêu được những điểm chính.','Thường làm trạng ngữ hoặc định ngữ: 简要介绍, 简要说明, 简要的回答; trang trọng hơn 简单.'],
   usage:'简要(地) + 介绍 / 说明 / 概括 / 回答; 做(了)简要介绍; 简要的 + N.',
   collo:['简要介绍','简要说明','简要概括','简要的回答'],
   ex_zh:'作者在序言中简要介绍了这本书的内容。',ex_py:'Zuòzhě zài xùyán zhōng jiǎnyào jièshàole zhè běn shū de nèiróng.',ex_vn:'Tác giả giới thiệu ngắn gọn nội dung cuốn sách trong lời tựa.',
   exList:[
     {zh:'他搜集了当地文化习俗以及车船码头等信息，做了简要介绍。',py:'Tā sōujíle dāngdì wénhuà xísú yǐjí chē chuán mǎtou děng xìnxī, zuòle jiǎnyào jièshào.',vn:'Ông thu thập thông tin về văn hoá, phong tục địa phương cùng xe, thuyền, bến bãi…, rồi giới thiệu ngắn gọn.'},
     {zh:'作者在序言中简要介绍了这本书的内容。',py:'Zuòzhě zài xùyán zhōng jiǎnyào jièshàole zhè běn shū de nèiróng.',vn:'Tác giả giới thiệu ngắn gọn nội dung cuốn sách trong lời tựa.'},
     {zh:'请用三五句话简要地概括一下课文的主要内容。',py:'Qǐng yòng sān-wǔ jù huà jiǎnyào de gàikuò yíxià kèwén de zhǔyào nèiróng.',vn:'Hãy dùng dăm ba câu tóm tắt ngắn gọn nội dung chính của bài khoá.'}
   ],
   colloFull:[
     {zh:'简要介绍',py:'jiǎnyào jièshào',vn:'giới thiệu ngắn gọn'},
     {zh:'简要说明',py:'jiǎnyào shuōmíng',vn:'thuyết minh vắn tắt'},
     {zh:'简要概括',py:'jiǎnyào gàikuò',vn:'tóm tắt ngắn gọn'},
     {zh:'简要的回答',py:'jiǎnyào de huídá',vn:'câu trả lời ngắn gọn'},
     {zh:'做简要介绍',py:'zuò jiǎnyào jièshào',vn:'giới thiệu sơ lược'}
   ],
   patterns:[
     {s:'简要(地) + 介绍 / 说明 / 概括',m:'Giới thiệu / thuyết minh / tóm tắt ngắn gọn'},
     {s:'做(了)简要介绍',m:'(Đã) giới thiệu sơ lược'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Do thời gian có hạn, mời mọi người trình bày ngắn gọn quan điểm của mình.',answer:'由于时间有限，请大家简要地说明自己的观点。',answerPy:'Yóuyú shíjiān yǒuxiàn, qǐng dàjiā jiǎnyào de shuōmíng zìjǐ de guāndiǎn.',
      note:'由于 + nguyên nhân; Adj + 地 + V làm trạng ngữ.',pair:'Adj + 地 + V'},
     {promptLang:'vi',prompt:'Trước khi bắt đầu, tôi xin giới thiệu sơ lược tình hình của công ty.',answer:'在开始之前，我先简要介绍一下公司的情况。',answerPy:'Zài kāishǐ zhīqián, wǒ xiān jiǎnyào jièshào yíxià gōngsī de qíngkuàng.',
      note:'在……之前: trước khi …; V + 一下 làm nhẹ giọng.',pair:'V + 一下'}
   ]},

  {n:22,zh:'一度',py:'yídù',pos:'Phó từ / Số lượng từ',vn:'đã có một thời, có một dạo; một lần',hv:'nhất độ',em:'🔁',lesson:1,
   explain:['Phó từ: biểu thị trong quá khứ đã có một khoảng thời gian xảy ra việc gì, đã từng có một lần — nay thường không còn như thế.','Số lượng từ: một lần, một đợt — hay gặp 一年一度 (mỗi năm một lần).'],
   usage:'(曾)一度 + V / Adj (chuyện quá khứ, về sau đã thay đổi); 一年一度的 + N.',
   collo:['一度引起轰动','一度想放弃','一年一度','曾一度'],
   ex_zh:'之后，一度引起轰动的旅游指南要算《北平旅行指南》了。',ex_py:'Zhīhòu, yídù yǐnqǐ hōngdòng de lǚyóu zhǐnán yào suàn "Běipíng Lǚxíng Zhǐnán" le.',ex_vn:'Sau đó, cuốn sách hướng dẫn du lịch từng một thời gây chấn động phải kể đến "Sách hướng dẫn du lịch Bắc Bình".',
   exList:[
     {zh:'之后，一度引起轰动的旅游指南要算《北平旅行指南》了。',py:'Zhīhòu, yídù yǐnqǐ hōngdòng de lǚyóu zhǐnán yào suàn "Běipíng Lǚxíng Zhǐnán" le.',vn:'Sau đó, cuốn sách hướng dẫn du lịch từng một thời gây chấn động phải kể đến "Sách hướng dẫn du lịch Bắc Bình".'},
     {zh:'去年，老师一度病得很厉害，现在好多了。',py:'Qùnián, lǎoshī yídù bìng de hěn lìhai, xiànzài hǎo duō le.',vn:'Năm ngoái, thầy giáo có một dạo ốm rất nặng, bây giờ đã đỡ nhiều rồi.'},
     {zh:'一年一度的春节又到了。',py:'Yì nián yí dù de Chūnjié yòu dào le.',vn:'Tết Nguyên đán mỗi năm một lần lại đến rồi.'}
   ],
   colloFull:[
     {zh:'一度引起轰动',py:'yídù yǐnqǐ hōngdòng',vn:'từng một thời gây chấn động'},
     {zh:'一度想放弃',py:'yídù xiǎng fàngqì',vn:'có lúc đã muốn bỏ cuộc'},
     {zh:'一年一度',py:'yì nián yí dù',vn:'mỗi năm một lần'},
     {zh:'曾一度',py:'céng yídù',vn:'đã từng có một thời'},
     {zh:'一度中断',py:'yídù zhōngduàn',vn:'có một thời gian bị gián đoạn'}
   ],
   patterns:[
     {s:'(曾)一度 + V / Adj，(后来 / 现在)……',m:'Đã có một dạo …, (về sau / bây giờ) …'},
     {s:'一年一度的 + N',m:'… diễn ra mỗi năm một lần'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tiếng Trung khó quá, tôi đã có lúc muốn bỏ cuộc, nhưng cuối cùng vẫn kiên trì được.',answer:'汉语太难了，我一度想放弃，但最后还是坚持下来了。',answerPy:'Hànyǔ tài nán le, wǒ yídù xiǎng fàngqì, dàn zuìhòu háishi jiānchí xiàlai le.',
      note:'V + 下来: bổ ngữ xu hướng chỉ kết quả duy trì được đến cùng.',pair:'V + 下来'},
     {promptLang:'vi',prompt:'Cửa hàng này có một dạo thua lỗ nặng, suýt nữa thì phải đóng cửa.',answer:'这家店一度亏损严重，差点儿就倒闭了。',answerPy:'Zhè jiā diàn yídù kuīsǔn yánzhòng, chàdiǎnr jiù dǎobì le.',
      note:'差点儿 = suýt nữa; 亏损, 倒闭 ôn bài 7.',pair:'差点儿'}
   ]},

  {n:23,zh:'轰动',py:'hōngdòng',pos:'Động từ',vn:'gây náo động, làm chấn động, làm xôn xao',hv:'oanh động',em:'💥',lesson:1,
   explain:['Gây chấn động lớn, khiến rất nhiều người chú ý, bàn tán.','Hay gặp: 引起轰动, 轰动一时, 轰动全国 / 全城; có thể mang tân ngữ chỉ phạm vi: 轰动了整个学校.'],
   usage:'引起(了)轰动; 轰动一时; 轰动 + 全国 / 全世界; 轰动性的 + N.',
   collo:['引起轰动','轰动一时','轰动全国','轰动了整个学校'],
   ex_zh:'这部电影上映后，轰动了全国。',ex_py:'Zhè bù diànyǐng shàngyìng hòu, hōngdòngle quánguó.',ex_vn:'Bộ phim này sau khi công chiếu đã gây chấn động cả nước.',
   exList:[
     {zh:'之后，一度引起轰动的旅游指南要算《北平旅行指南》了。',py:'Zhīhòu, yídù yǐnqǐ hōngdòng de lǚyóu zhǐnán yào suàn "Běipíng Lǚxíng Zhǐnán" le.',vn:'Sau đó, cuốn sách hướng dẫn du lịch từng một thời gây chấn động phải kể đến "Sách hướng dẫn du lịch Bắc Bình".'},
     {zh:'这部电影上映后，轰动了全国。',py:'Zhè bù diànyǐng shàngyìng hòu, hōngdòngle quánguó.',vn:'Bộ phim này sau khi công chiếu đã gây chấn động cả nước.'},
     {zh:'他获得冠军的消息轰动了整个学校。',py:'Tā huòdé guànjūn de xiāoxi hōngdòngle zhěnggè xuéxiào.',vn:'Tin cậu ấy giành chức vô địch đã làm xôn xao cả trường.'}
   ],
   colloFull:[
     {zh:'引起轰动',py:'yǐnqǐ hōngdòng',vn:'gây chấn động'},
     {zh:'轰动一时',py:'hōngdòng yìshí',vn:'gây chấn động một thời'},
     {zh:'轰动全国',py:'hōngdòng quánguó',vn:'chấn động cả nước'},
     {zh:'轰动了整个学校',py:'hōngdòngle zhěnggè xuéxiào',vn:'làm xôn xao cả trường'},
     {zh:'轰动性的新闻',py:'hōngdòngxìng de xīnwén',vn:'tin tức gây chấn động'}
   ],
   patterns:[
     {s:'引起(了)轰动',m:'Gây chấn động, gây xôn xao'},
     {s:'A + 轰动了 + phạm vi',m:'A làm chấn động cả …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tin này vừa đăng lên mạng đã lập tức gây xôn xao.',answer:'这条新闻一发到网上，就立刻引起了轰动。',answerPy:'Zhè tiáo xīnwén yì fā dào wǎng shang, jiù lìkè yǐnqǐle hōngdòng.',
      note:'一……就……: vừa … liền …; 立刻 nhấn mạnh tốc độ.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Cuốn tiểu thuyết từng gây chấn động một thời ấy, bây giờ đã ít người đọc rồi.',answer:'那本曾经轰动一时的小说，现在已经很少有人读了。',answerPy:'Nà běn céngjīng hōngdòng yìshí de xiǎoshuō, xiànzài yǐjīng hěn shǎo yǒu rén dú le.',
      note:'曾经 = từng; 很少有人 + V = ít ai ….',pair:'曾经'}
   ]},

  {n:24,zh:'趣味',py:'qùwèi',pos:'Danh từ',vn:'sự thú vị, hứng thú',hv:'thú vị',em:'😄',lesson:1,
   explain:['Tính chất khiến người ta thấy vui, hấp dẫn, thích thú.','Hay dùng: 趣味性 (tính thú vị), 富有趣味, 趣味十足; còn có nghĩa "sở thích, gu": 低级趣味 (sở thích tầm thường).'],
   usage:'趣味性强; 富有趣味; 趣味十足; 趣味游戏 / 趣味运动会.',
   collo:['趣味性强','富有趣味','趣味十足','趣味运动会'],
   ex_zh:'它趣味性强，实用价值高。',ex_py:'Tā qùwèixìng qiáng, shíyòng jiàzhí gāo.',ex_vn:'Nó rất thú vị, lại có giá trị thực dụng cao.',
   exList:[
     {zh:'它趣味性强，实用价值高。',py:'Tā qùwèixìng qiáng, shíyòng jiàzhí gāo.',vn:'Nó rất thú vị, lại có giá trị thực dụng cao.'},
     {zh:'这位老师讲课生动，富有趣味。',py:'Zhè wèi lǎoshī jiǎngkè shēngdòng, fùyǒu qùwèi.',vn:'Thầy giáo này giảng bài sinh động, rất thú vị.'},
     {zh:'学校下个月要举办一场趣味运动会。',py:'Xuéxiào xià ge yuè yào jǔbàn yì chǎng qùwèi yùndònghuì.',vn:'Tháng sau trường sẽ tổ chức một hội thao vui.'}
   ],
   colloFull:[
     {zh:'趣味性强',py:'qùwèixìng qiáng',vn:'tính thú vị cao'},
     {zh:'富有趣味',py:'fùyǒu qùwèi',vn:'giàu tính thú vị'},
     {zh:'趣味十足',py:'qùwèi shízú',vn:'thú vị vô cùng'},
     {zh:'趣味运动会',py:'qùwèi yùndònghuì',vn:'hội thao vui'},
     {zh:'低级趣味',py:'dījí qùwèi',vn:'sở thích tầm thường'}
   ],
   patterns:[
     {s:'……趣味性强 / 富有趣味',m:'… rất thú vị'},
     {s:'趣味 + N (游戏 / 运动会 / 故事)',m:'… vui, mang tính giải trí'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cuốn sách này vừa thú vị vừa bổ ích về kiến thức, rất hợp cho học sinh đọc.',answer:'这本书既有趣味性，又有知识性，非常适合学生阅读。',answerPy:'Zhè běn shū jì yǒu qùwèixìng, yòu yǒu zhīshixìng, fēicháng shìhé xuésheng yuèdú.',
      note:'既……又……: vừa … vừa …; hậu tố 性 = tính.',pair:'既……又……'},
     {promptLang:'vi',prompt:'Nếu giờ học thú vị thêm một chút, học sinh sẽ không ngủ gật nữa.',answer:'如果课堂再有趣味一点儿，学生就不会打瞌睡了。',answerPy:'Rúguǒ kètáng zài yǒu qùwèi yìdiǎnr, xuésheng jiù bú huì dǎ kēshuì le.',
      note:'再 + Adj + 一点儿: … thêm một chút; 打瞌睡 = ngủ gật.',pair:'Adj + 一点儿'}
   ]},

  {n:25,zh:'人士',py:'rénshì',pos:'Danh từ',vn:'nhân sĩ, người có vai vế, nhân vật quan trọng',hv:'nhân sĩ',em:'🎩',lesson:1,
   explain:['Người có địa vị, có ảnh hưởng hoặc hoạt động trong một lĩnh vực xã hội nhất định.','Thường có định ngữ đứng trước: 各界人士, 中外人士, 知名人士, 专业人士, 业内人士; không nói 一个人士.'],
   usage:'各界人士, 中外人士, 知名人士, 专业人士, 爱心人士; 据……人士介绍.',
   collo:['各界人士','中外人士','知名人士','专业人士'],
   ex_zh:'这本书是在中外人士的共同努力下完成的。',ex_py:'Zhè běn shū shì zài Zhōng-wài rénshì de gòngtóng nǔlì xià wánchéng de.',ex_vn:'Cuốn sách này được hoàn thành nhờ sự nỗ lực chung của các nhân sĩ trong và ngoài nước.',
   exList:[
     {zh:'这本书是在中外人士的共同努力下完成的。',py:'Zhè běn shū shì zài Zhōng-wài rénshì de gòngtóng nǔlì xià wánchéng de.',vn:'Cuốn sách này được hoàn thành nhờ sự nỗ lực chung của các nhân sĩ trong và ngoài nước.'},
     {zh:'晚会邀请了社会各界人士参加。',py:'Wǎnhuì yāoqǐngle shèhuì gè jiè rénshì cānjiā.',vn:'Buổi dạ hội đã mời nhân sĩ các giới trong xã hội tham dự.'},
     {zh:'据业内人士介绍，今年的旅游市场特别火。',py:'Jù yènèi rénshì jièshào, jīnnián de lǚyóu shìchǎng tèbié huǒ.',vn:'Theo người trong ngành cho biết, thị trường du lịch năm nay đặc biệt sôi động.'}
   ],
   colloFull:[
     {zh:'各界人士',py:'gè jiè rénshì',vn:'nhân sĩ các giới'},
     {zh:'中外人士',py:'Zhōng-wài rénshì',vn:'nhân sĩ trong và ngoài nước'},
     {zh:'知名人士',py:'zhīmíng rénshì',vn:'nhân vật nổi tiếng'},
     {zh:'专业人士',py:'zhuānyè rénshì',vn:'người trong nghề, chuyên gia'},
     {zh:'业内人士',py:'yènèi rénshì',vn:'người trong ngành'}
   ],
   patterns:[
     {s:'định ngữ + 人士',m:'Nhân sĩ / người thuộc giới …'},
     {s:'据……人士介绍 / 透露，……',m:'Theo … cho biết / tiết lộ, …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nhờ sự giúp đỡ của các nhà hảo tâm, cô bé cuối cùng đã được đi học.',answer:'在爱心人士的帮助下，小女孩终于上学了。',answerPy:'Zài àixīn rénshì de bāngzhù xià, xiǎo nǚhái zhōngyú shàngxué le.',
      note:'在……的帮助下: nhờ sự giúp đỡ của ….',pair:'在……下'},
     {promptLang:'vi',prompt:'Vấn đề này tốt nhất nên hỏi người trong nghề, nhất định đừng tự ý quyết định bừa.',answer:'这个问题最好请教专业人士，千万别自己随便做决定。',answerPy:'Zhège wèntí zuìhǎo qǐngjiào zhuānyè rénshì, qiānwàn bié zìjǐ suíbiàn zuò juédìng.',
      note:'千万别 = nhất định đừng; 请教 = xin chỉ giáo.',pair:'千万'}
   ]},

  {n:26,zh:'版本',py:'bǎnběn',pos:'Danh từ',vn:'phiên bản',hv:'bản bản',em:'📖',lesson:1,
   explain:['Các bản khác nhau của cùng một cuốn sách, tác phẩm (khác ngôn ngữ, lần in, cách biên soạn…).','Nghĩa mở rộng: phiên bản phần mềm, phim, câu chuyện: 最新版本, 中文版本, 电影版本.'],
   usage:'中文 / 外文版本; 最新版本; 不同的版本; 这个故事有好几个版本.',
   collo:['中文版本','最新版本','不同版本','旧版本'],
   ex_zh:'中、外文版本同时发行，真正方便了读者。',ex_py:'Zhōng, wàiwén bǎnběn tóngshí fāxíng, zhēnzhèng fāngbiànle dúzhě.',ex_vn:'Bản tiếng Trung và bản tiếng nước ngoài được phát hành cùng lúc, thực sự tạo thuận lợi cho độc giả.',
   exList:[
     {zh:'中、外文版本同时发行，真正方便了读者。',py:'Zhōng, wàiwén bǎnběn tóngshí fāxíng, zhēnzhèng fāngbiànle dúzhě.',vn:'Bản tiếng Trung và bản tiếng nước ngoài được phát hành cùng lúc, thực sự tạo thuận lợi cho độc giả.'},
     {zh:'请把软件更新到最新版本。',py:'Qǐng bǎ ruǎnjiàn gēngxīn dào zuì xīn bǎnběn.',vn:'Hãy cập nhật phần mềm lên phiên bản mới nhất.'},
     {zh:'这个民间故事有好几个不同的版本。',py:'Zhège mínjiān gùshi yǒu hǎo jǐ ge bùtóng de bǎnběn.',vn:'Câu chuyện dân gian này có mấy dị bản khác nhau.'}
   ],
   colloFull:[
     {zh:'中文版本',py:'Zhōngwén bǎnběn',vn:'bản tiếng Trung'},
     {zh:'最新版本',py:'zuì xīn bǎnběn',vn:'phiên bản mới nhất'},
     {zh:'不同版本',py:'bùtóng bǎnběn',vn:'các phiên bản khác nhau'},
     {zh:'旧版本',py:'jiù bǎnběn',vn:'phiên bản cũ'},
     {zh:'电影版本',py:'diànyǐng bǎnběn',vn:'bản điện ảnh'}
   ],
   patterns:[
     {s:'……语 / 文 + 版本',m:'Bản tiếng …'},
     {s:'(把……) 更新到最新版本',m:'Cập nhật (…) lên phiên bản mới nhất'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'So với phiên bản cũ, phiên bản mới dễ dùng hơn nhiều.',answer:'和旧版本相比，新版本好用多了。',answerPy:'Hé jiù bǎnběn xiāngbǐ, xīn bǎnběn hǎoyòng duō le.',
      note:'和……相比 (ngữ pháp bài này) + Adj + 多了.',pair:'Adj + 多了'},
     {promptLang:'vi',prompt:'Cuốn tiểu thuyết này đã được dịch ra hơn mười thứ tiếng, bản tiếng Việt năm ngoái mới xuất bản.',answer:'这部小说被翻译成了十几种语言，越南语版本去年才出版。',answerPy:'Zhè bù xiǎoshuō bèi fānyì chéngle shí jǐ zhǒng yǔyán, Yuènányǔ bǎnběn qùnián cái chūbǎn.',
      note:'被 + V + 成 = được … thành …; 才 = mới (muộn).',pair:'V + 成 (bổ ngữ kết quả)'}
   ]},

  {n:27,zh:'发行',py:'fāxíng',pos:'Động từ',vn:'phát hành',hv:'phát hành',em:'📰',lesson:1,
   explain:['Đưa ra phát hành rộng rãi: sách báo, tạp chí, tem, tiền tệ, phim, album…','Hay gặp: 同时发行, 公开发行, 正式发行, 发行量 (số lượng phát hành).'],
   usage:'发行 + 书 / 杂志 / 邮票 / 唱片; 发行量; 正式发行; 同时发行.',
   collo:['同时发行','发行量','公开发行','正式发行'],
   ex_zh:'这本杂志每月发行一期。',ex_py:'Zhè běn zázhì měi yuè fāxíng yì qī.',ex_vn:'Tạp chí này mỗi tháng phát hành một số.',
   exList:[
     {zh:'中、外文版本同时发行，真正方便了读者。',py:'Zhōng, wàiwén bǎnběn tóngshí fāxíng, zhēnzhèng fāngbiànle dúzhě.',vn:'Bản tiếng Trung và bản tiếng nước ngoài được phát hành cùng lúc, thực sự tạo thuận lợi cho độc giả.'},
     {zh:'这本杂志每月发行一期。',py:'Zhè běn zázhì měi yuè fāxíng yì qī.',vn:'Tạp chí này mỗi tháng phát hành một số.'},
     {zh:'这张唱片发行第一周就卖出了十万张。',py:'Zhè zhāng chàngpiàn fāxíng dì-yī zhōu jiù màichūle shíwàn zhāng.',vn:'Album này tuần đầu phát hành đã bán được một trăm nghìn bản.'}
   ],
   colloFull:[
     {zh:'同时发行',py:'tóngshí fāxíng',vn:'phát hành cùng lúc'},
     {zh:'发行量',py:'fāxíngliàng',vn:'số lượng phát hành'},
     {zh:'公开发行',py:'gōngkāi fāxíng',vn:'phát hành công khai'},
     {zh:'正式发行',py:'zhèngshì fāxíng',vn:'chính thức phát hành'},
     {zh:'发行邮票',py:'fāxíng yóupiào',vn:'phát hành tem'}
   ],
   patterns:[
     {s:'发行 + 书 / 杂志 / 邮票 / 唱片',m:'Phát hành …'},
     {s:'……的发行量 + 很大 / 达到……',m:'Lượng phát hành của … rất lớn / đạt …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cuốn sách này vừa phát hành đã bán hết, nhà xuất bản đành phải in thêm.',answer:'这本书刚发行就卖光了，出版社只好加印。',answerPy:'Zhè běn shū gāng fāxíng jiù màiguāng le, chūbǎnshè zhǐhǎo jiāyìn.',
      note:'刚……就……: vừa … đã …; 只好 = đành phải.',pair:'只好'},
     {promptLang:'vi',prompt:'Để kỷ niệm ngày lễ này, bưu điện đã phát hành một bộ tem đặc biệt.',answer:'为了纪念这个节日，邮局发行了一套特别的邮票。',answerPy:'Wèile jìniàn zhège jiérì, yóujú fāxíngle yí tào tèbié de yóupiào.',
      note:'为了 + mục đích; lượng từ 套 = bộ.',pair:'为了……'}
   ]},

  {n:28,zh:'事业',py:'shìyè',pos:'Danh từ',vn:'sự nghiệp, công cuộc',hv:'sự nghiệp',em:'💼',lesson:1,
   explain:['Sự nghiệp của cá nhân (công việc, thành tựu cả đời).','Công cuộc, lĩnh vực hoạt động có quy mô, có ảnh hưởng xã hội: 外交事业, 教育事业, 公益事业.'],
   usage:'事业心, 事业有成; 教育 / 外交 / 公益 + 事业; 把一生献给……事业.',
   collo:['外交事业','教育事业','事业有成','事业心'],
   ex_zh:'改革开放前，旅游是中国外交事业的延伸和补充。',ex_py:'Gǎigé kāifàng qián, lǚyóu shì Zhōngguó wàijiāo shìyè de yánshēn hé bǔchōng.',ex_vn:'Trước cải cách mở cửa, du lịch là sự nối dài và bổ sung cho công cuộc ngoại giao của Trung Quốc.',
   exList:[
     {zh:'改革开放前，旅游是中国外交事业的延伸和补充。',py:'Gǎigé kāifàng qián, lǚyóu shì Zhōngguó wàijiāo shìyè de yánshēn hé bǔchōng.',vn:'Trước cải cách mở cửa, du lịch là sự nối dài và bổ sung cho công cuộc ngoại giao của Trung Quốc.'},
     {zh:'她把一生都献给了教育事业。',py:'Tā bǎ yìshēng dōu xiàn gěile jiàoyù shìyè.',vn:'Bà đã cống hiến cả đời cho sự nghiệp giáo dục.'},
     {zh:'他事业有成，却从来不炫耀。',py:'Tā shìyè yǒu chéng, què cónglái bú xuànyào.',vn:'Anh ấy thành đạt trong sự nghiệp nhưng chưa bao giờ khoe khoang.'}
   ],
   colloFull:[
     {zh:'外交事业',py:'wàijiāo shìyè',vn:'công cuộc ngoại giao'},
     {zh:'教育事业',py:'jiàoyù shìyè',vn:'sự nghiệp giáo dục'},
     {zh:'事业有成',py:'shìyè yǒu chéng',vn:'thành đạt trong sự nghiệp'},
     {zh:'事业心',py:'shìyèxīn',vn:'chí tiến thủ trong sự nghiệp'},
     {zh:'公益事业',py:'gōngyì shìyè',vn:'hoạt động công ích'}
   ],
   patterns:[
     {s:'把一生献给……事业',m:'Cống hiến cả đời cho sự nghiệp …'},
     {s:'事业 + 有成 / 顺利',m:'Sự nghiệp thành công / thuận lợi'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Muốn sự nghiệp thành công, chỉ dựa vào may mắn là không đủ.',answer:'要想事业成功，光靠运气是不够的。',answerPy:'Yào xiǎng shìyè chénggōng, guāng kào yùnqi shì bú gòu de.',
      note:'要想……: muốn … thì …; 光靠 = chỉ dựa vào; 是……的 nhấn mạnh nhận định.',pair:'光……'},
     {promptLang:'vi',prompt:'Vì sự nghiệp, anh ấy gần như không có thời gian ở bên gia đình.',answer:'他为了事业，几乎没有时间陪伴家人。',answerPy:'Tā wèile shìyè, jīhū méiyǒu shíjiān péibàn jiārén.',
      note:'为了 + mục đích đứng sau chủ ngữ; 几乎 = gần như.',pair:'几乎'}
   ]},

  {n:29,zh:'延伸',py:'yánshēn',pos:'Động từ',vn:'kéo dài, mở rộng',hv:'diên thân',em:'↔️',lesson:1,
   explain:['Kéo dài ra, vươn dài ra theo một hướng (con đường, dòng sông, dãy núi…).','Nghĩa bóng: mở rộng phạm vi; ……的延伸 = phần nối dài, sự mở rộng của cái gì.'],
   usage:'向 / 往 + phương hướng + 延伸; 延伸到……; ……的延伸和补充.',
   collo:['向远方延伸','延伸到','……的延伸','不断延伸'],
   ex_zh:'这条公路一直延伸到大山深处。',ex_py:'Zhè tiáo gōnglù yìzhí yánshēn dào dàshān shēnchù.',ex_vn:'Con đường này kéo dài mãi vào sâu trong núi.',
   exList:[
     {zh:'改革开放前，旅游是中国外交事业的延伸和补充。',py:'Gǎigé kāifàng qián, lǚyóu shì Zhōngguó wàijiāo shìyè de yánshēn hé bǔchōng.',vn:'Trước cải cách mở cửa, du lịch là sự nối dài và bổ sung cho công cuộc ngoại giao của Trung Quốc.'},
     {zh:'这条公路一直延伸到大山深处。',py:'Zhè tiáo gōnglù yìzhí yánshēn dào dàshān shēnchù.',vn:'Con đường này kéo dài mãi vào sâu trong núi.'},
     {zh:'课堂学习可以延伸到课外，比如参观博物馆。',py:'Kètáng xuéxí kěyǐ yánshēn dào kèwài, bǐrú cānguān bówùguǎn.',vn:'Việc học trên lớp có thể mở rộng ra ngoài giờ học, chẳng hạn đi tham quan bảo tàng.'}
   ],
   colloFull:[
     {zh:'向远方延伸',py:'xiàng yuǎnfāng yánshēn',vn:'kéo dài về phía xa'},
     {zh:'延伸到',py:'yánshēn dào',vn:'kéo dài đến'},
     {zh:'……的延伸',py:'…… de yánshēn',vn:'phần nối dài của …'},
     {zh:'不断延伸',py:'búduàn yánshēn',vn:'không ngừng mở rộng'},
     {zh:'延伸阅读',py:'yánshēn yuèdú',vn:'đọc mở rộng'}
   ],
   patterns:[
     {s:'A + 延伸到 + B',m:'A kéo dài / mở rộng đến B'},
     {s:'A 是 B 的延伸',m:'A là sự nối dài, mở rộng của B'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đứng trên đỉnh núi nhìn ra xa, Vạn Lý Trường Thành uốn lượn kéo dài tới tận chân trời.',answer:'站在山顶往远处看，长城弯弯曲曲地一直延伸到天边。',answerPy:'Zhàn zài shāndǐng wǎng yuǎnchù kàn, Chángchéng wānwān-qūqū de yìzhí yánshēn dào tiānbiān.',
      note:'往 + phương hướng + V; tính từ láy + 地 làm trạng ngữ.',pair:'Adj láy + 地'},
     {promptLang:'vi',prompt:'Tuyến tàu điện ngầm này năm sau sẽ kéo dài tới sân bay, lúc đó đi lại sẽ tiện hơn nhiều.',answer:'这条地铁线明年将延伸到机场，到时候出行会方便得多。',answerPy:'Zhè tiáo dìtiěxiàn míngnián jiāng yánshēn dào jīchǎng, dào shíhou chūxíng huì fāngbiàn de duō.',
      note:'将 = sẽ (văn viết); Adj + 得多 = … hơn nhiều.',pair:'Adj + 得多'}
   ]},

  {n:30,zh:'产业',py:'chǎnyè',pos:'Danh từ',vn:'sản nghiệp, ngành (công nghiệp, kinh tế)',hv:'sản nghiệp',em:'🏭',lesson:1,
   explain:['Ngành sản xuất, ngành kinh tế (nông nghiệp, công nghiệp, dịch vụ…): 旅游产业, 文化产业, 汽车产业.','Nghĩa cũ: tài sản, của cải (ruộng đất, nhà cửa) — nay ít dùng.'],
   usage:'旅游 / 文化 / 高新技术 + 产业; 发展产业; 支柱产业; 产业结构.',
   collo:['旅游产业','经济型产业','发展产业','支柱产业'],
   ex_zh:'改革开放以后，旅游真正作为经济型产业受到重视。',ex_py:'Gǎigé kāifàng yǐhòu, lǚyóu zhēnzhèng zuòwéi jīngjìxíng chǎnyè shòudào zhòngshì.',ex_vn:'Sau cải cách mở cửa, du lịch mới thực sự được coi trọng như một ngành kinh tế.',
   exList:[
     {zh:'改革开放以后，旅游真正作为经济型产业受到重视。',py:'Gǎigé kāifàng yǐhòu, lǚyóu zhēnzhèng zuòwéi jīngjìxíng chǎnyè shòudào zhòngshì.',vn:'Sau cải cách mở cửa, du lịch mới thực sự được coi trọng như một ngành kinh tế.'},
     {zh:'旅游业已经成为这个地区的支柱产业。',py:'Lǚyóuyè yǐjīng chéngwéi zhège dìqū de zhīzhù chǎnyè.',vn:'Du lịch đã trở thành ngành kinh tế mũi nhọn của khu vực này.'},
     {zh:'随着当地旅游产业的振兴，服务质量也有所提升。',py:'Suízhe dāngdì lǚyóu chǎnyè de zhènxīng, fúwù zhìliàng yě yǒu suǒ tíshēng.',vn:'Cùng với sự chấn hưng của ngành du lịch địa phương, chất lượng dịch vụ cũng được nâng lên phần nào.'}
   ],
   colloFull:[
     {zh:'旅游产业',py:'lǚyóu chǎnyè',vn:'ngành du lịch'},
     {zh:'经济型产业',py:'jīngjìxíng chǎnyè',vn:'ngành kinh tế'},
     {zh:'发展产业',py:'fāzhǎn chǎnyè',vn:'phát triển ngành'},
     {zh:'支柱产业',py:'zhīzhù chǎnyè',vn:'ngành mũi nhọn'},
     {zh:'文化产业',py:'wénhuà chǎnyè',vn:'công nghiệp văn hoá'}
   ],
   patterns:[
     {s:'作为……产业 + 受到重视',m:'Được coi trọng với tư cách là ngành …'},
     {s:'……成为……的支柱产业',m:'… trở thành ngành mũi nhọn của …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ngành du lịch không chỉ tạo ra nhiều việc làm mà còn thúc đẩy sự phát triển của các ngành khác.',answer:'旅游产业不仅创造了很多就业机会，还带动了其他行业的发展。',answerPy:'Lǚyóu chǎnyè bùjǐn chuàngzàole hěn duō jiùyè jīhuì, hái dàidòngle qítā hángyè de fāzhǎn.',
      note:'不仅……还……; 就业 ôn bài 7; 带动 = kéo theo, thúc đẩy.',pair:'不仅……还……'},
     {promptLang:'vi',prompt:'Nhờ phát triển công nghiệp văn hoá, thành phố nhỏ này ngày càng nổi tiếng.',answer:'由于发展了文化产业，这座小城越来越有名了。',answerPy:'Yóuyú fāzhǎnle wénhuà chǎnyè, zhè zuò xiǎochéng yuè lái yuè yǒumíng le.',
      note:'由于 + nguyên nhân; 越来越 + Adj + 了.',pair:'越来越……'}
   ]},

  {n:31,zh:'振兴',py:'zhènxīng',pos:'Động từ',vn:'làm hưng thịnh, chấn hưng',hv:'chấn hưng',em:'📈',lesson:1,
   explain:['Làm cho phát triển mạnh, hưng thịnh trở lại (kinh tế, ngành nghề, quê hương…).','Mang tân ngữ: 振兴经济, 振兴乡村; dùng như danh từ: ……的振兴.'],
   usage:'振兴 + 经济 / 产业 / 乡村 / 教育; 随着……的振兴.',
   collo:['振兴经济','振兴乡村','振兴旅游业','……的振兴'],
   ex_zh:'旅游指南也随着旅游业的振兴变得越来越丰富，越来越全面。',ex_py:'Lǚyóu zhǐnán yě suízhe lǚyóuyè de zhènxīng biàn de yuè lái yuè fēngfù, yuè lái yuè quánmiàn.',ex_vn:'Sách hướng dẫn du lịch cũng theo đà chấn hưng của ngành du lịch mà ngày càng phong phú, ngày càng toàn diện.',
   exList:[
     {zh:'旅游指南也随着旅游业的振兴变得越来越丰富，越来越全面。',py:'Lǚyóu zhǐnán yě suízhe lǚyóuyè de zhènxīng biàn de yuè lái yuè fēngfù, yuè lái yuè quánmiàn.',vn:'Sách hướng dẫn du lịch cũng theo đà chấn hưng của ngành du lịch mà ngày càng phong phú, ngày càng toàn diện.'},
     {zh:'为了振兴家乡的经济，他大学毕业后回到了农村。',py:'Wèile zhènxīng jiāxiāng de jīngjì, tā dàxué bìyè hòu huídàole nóngcūn.',vn:'Để chấn hưng kinh tế quê nhà, anh ấy tốt nghiệp đại học xong đã trở về nông thôn.'},
     {zh:'发展特色旅游是振兴乡村的好办法。',py:'Fāzhǎn tèsè lǚyóu shì zhènxīng xiāngcūn de hǎo bànfǎ.',vn:'Phát triển du lịch đặc sắc là cách hay để chấn hưng nông thôn.'}
   ],
   colloFull:[
     {zh:'振兴经济',py:'zhènxīng jīngjì',vn:'chấn hưng kinh tế'},
     {zh:'振兴乡村',py:'zhènxīng xiāngcūn',vn:'chấn hưng nông thôn'},
     {zh:'振兴旅游业',py:'zhènxīng lǚyóuyè',vn:'chấn hưng ngành du lịch'},
     {zh:'……的振兴',py:'…… de zhènxīng',vn:'sự chấn hưng của …'},
     {zh:'振兴家乡',py:'zhènxīng jiāxiāng',vn:'làm quê hương hưng thịnh'}
   ],
   patterns:[
     {s:'振兴 + 经济 / 产业 / 家乡',m:'Chấn hưng …'},
     {s:'随着……的振兴，……',m:'Cùng với sự chấn hưng của …, …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ có coi trọng giáo dục thì mới có thể thực sự chấn hưng một địa phương.',answer:'只有重视教育，才能真正振兴一个地方。',answerPy:'Zhǐyǒu zhòngshì jiàoyù, cái néng zhēnzhèng zhènxīng yí ge dìfang.',
      note:'只有……才……: chỉ có … mới ….',pair:'只有……才……'},
     {promptLang:'vi',prompt:'Cùng với sự chấn hưng của ngành du lịch, cuộc sống của dân làng ngày càng khấm khá.',answer:'随着旅游业的振兴，村民们的生活越来越富裕了。',answerPy:'Suízhe lǚyóuyè de zhènxīng, cūnmínmen de shēnghuó yuè lái yuè fùyù le.',
      note:'随着……，……: cùng với …, …; 富裕 = giàu có, khấm khá.',pair:'随着……'}
   ]},

  {n:32,zh:'主流',py:'zhǔliú',pos:'Danh từ',vn:'xu hướng chính, bộ phận chủ yếu; dòng chính',hv:'chủ lưu',em:'🌊',lesson:1,
   explain:['Nghĩa gốc: dòng chính của con sông (đối lập với 支流 — sông nhánh).','Nghĩa bóng: xu hướng chính, bộ phận chủ yếu, phổ biến nhất: 成为主流, 主流观点, 主流媒体.'],
   usage:'成为……的主流; 主流 + 观点 / 媒体 / 文化 / 市场.',
   collo:['成为主流','主流观点','主流媒体','主流文化'],
   ex_zh:'1999年以后，中国人逐渐成为游客中的主流。',ex_py:'Yī jiǔ jiǔ jiǔ nián yǐhòu, Zhōngguórén zhújiàn chéngwéi yóukè zhōng de zhǔliú.',ex_vn:'Sau năm 1999, người Trung Quốc dần trở thành bộ phận chủ yếu trong số du khách.',
   exList:[
     {zh:'1999年以后，中国人逐渐成为游客中的主流。',py:'Yī jiǔ jiǔ jiǔ nián yǐhòu, Zhōngguórén zhújiàn chéngwéi yóukè zhōng de zhǔliú.',vn:'Sau năm 1999, người Trung Quốc dần trở thành bộ phận chủ yếu trong số du khách.'},
     {zh:'如今，网上购物已经成为消费的主流。',py:'Rújīn, wǎng shang gòuwù yǐjīng chéngwéi xiāofèi de zhǔliú.',vn:'Ngày nay, mua sắm trực tuyến đã trở thành xu hướng tiêu dùng chính.'},
     {zh:'他的看法和主流观点不太一样。',py:'Tā de kànfǎ hé zhǔliú guāndiǎn bú tài yíyàng.',vn:'Cách nhìn của anh ấy không giống lắm với quan điểm chủ đạo.'}
   ],
   colloFull:[
     {zh:'成为主流',py:'chéngwéi zhǔliú',vn:'trở thành xu hướng chính'},
     {zh:'主流观点',py:'zhǔliú guāndiǎn',vn:'quan điểm chủ đạo'},
     {zh:'主流媒体',py:'zhǔliú méitǐ',vn:'truyền thông chính thống'},
     {zh:'主流文化',py:'zhǔliú wénhuà',vn:'văn hoá chủ đạo'},
     {zh:'游客中的主流',py:'yóukè zhōng de zhǔliú',vn:'bộ phận chính trong du khách'}
   ],
   patterns:[
     {s:'A 成为(了) B 的主流',m:'A trở thành xu hướng chính / bộ phận chủ yếu của B'},
     {s:'主流 + 观点 / 媒体 / 文化',m:'Quan điểm / truyền thông / văn hoá chủ đạo'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy du lịch tự túc đã thành xu hướng chính, nhưng vẫn có nhiều người cao tuổi thích đi theo đoàn.',answer:'虽然自助游已经成为主流，但是仍然有很多老年人喜欢跟团旅游。',answerPy:'Suīrán zìzhùyóu yǐjīng chéngwéi zhǔliú, dànshì réngrán yǒu hěn duō lǎoniánrén xǐhuan gēn tuán lǚyóu.',
      note:'虽然……但是……仍然……: tuy … nhưng vẫn ….',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Học trực tuyến sau này có trở thành xu hướng chính hay không, bây giờ vẫn còn khó nói.',answer:'网上学习将来会不会成为主流，现在还很难说。',answerPy:'Wǎng shang xuéxí jiānglái huì bu huì chéngwéi zhǔliú, xiànzài hái hěn nán shuō.',
      note:'Câu hỏi chính phản (会不会……) làm chủ ngữ; 很难说 = khó nói.',pair:'V不V làm thành phần câu'}
   ]},

  {n:33,zh:'犹如',py:'yóurú',pos:'Động từ',vn:'giống như, như là',hv:'do như',em:'🪞',lesson:1,
   explain:['Nghĩa là "好像, 如同" — giống như, tựa như; dùng để so sánh, ví von.','Dùng trong văn viết; hay đi với 般 / 一般 / 似的: 犹如……一般; khẩu ngữ dùng 像, 好像.'],
   usage:'A 犹如 B; 犹如……(一)般 + Adj; 变得犹如……; Adj + 得 + 犹如…….',
   collo:['犹如家常便饭','犹如一幅画','犹如……一般','犹如向导'],
   ex_zh:'国内旅游和出国旅游都变得犹如家常便饭。',ex_py:'Guónèi lǚyóu hé chūguó lǚyóu dōu biàn de yóurú jiāchángbiànfàn.',ex_vn:'Du lịch trong nước và du lịch nước ngoài đều đã trở nên như chuyện cơm bữa.',
   exList:[
     {zh:'国内旅游和出国旅游都变得犹如家常便饭。',py:'Guónèi lǚyóu hé chūguó lǚyóu dōu biàn de yóurú jiāchángbiànfàn.',vn:'Du lịch trong nước và du lịch nước ngoài đều đã trở nên như chuyện cơm bữa.'},
     {zh:'卫星导航系统的广泛应用，使得人们不管走到哪儿，都犹如有位随身的向导。',py:'Wèixīng dǎoháng xìtǒng de guǎngfàn yìngyòng, shǐde rénmen bùguǎn zǒudào nǎr, dōu yóurú yǒu wèi suíshēn de xiàngdǎo.',vn:'Hệ thống định vị vệ tinh được ứng dụng rộng rãi khiến người ta dù đi đến đâu cũng như có một người dẫn đường theo bên mình.'},
     {zh:'夕阳照耀下的古城，色彩犹如油画般厚重。',py:'Xīyáng zhàoyào xià de gǔchéng, sècǎi yóurú yóuhuà bān hòuzhòng.',vn:'Toà cổ thành dưới ánh hoàng hôn mang màu sắc đậm đà như một bức tranh sơn dầu.'}
   ],
   colloFull:[
     {zh:'犹如家常便饭',py:'yóurú jiāchángbiànfàn',vn:'như chuyện cơm bữa'},
     {zh:'犹如一幅画',py:'yóurú yì fú huà',vn:'như một bức tranh'},
     {zh:'犹如……一般',py:'yóurú…… yìbān',vn:'giống hệt như …'},
     {zh:'犹如向导',py:'yóurú xiàngdǎo',vn:'như người dẫn đường'},
     {zh:'犹如火山爆发',py:'yóurú huǒshān bàofā',vn:'như núi lửa phun trào'}
   ],
   patterns:[
     {s:'A 犹如 B',m:'A giống như B (văn viết)'},
     {s:'犹如 + N + 般 / 一般 + Adj',m:'… như … (so sánh mức độ)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Buổi sáng sớm, hồ Hoàn Kiếm yên tĩnh như một bức tranh thuỷ mặc.',answer:'清晨的还剑湖安静得犹如一幅水墨画。',answerPy:'Qīngchén de Huánjiàn Hú ānjìng de yóurú yì fú shuǐmòhuà.',
      note:'Adj + 得 + 犹如……: … đến mức như …; 清晨 ôn bài 3.',pair:'bổ ngữ trình độ 得'},
     {promptLang:'vi',prompt:'Có được sự ủng hộ của bạn bè, tôi như được tiếp thêm sức mạnh vô tận.',answer:'有了朋友们的支持，我犹如增添了无穷的力量。',answerPy:'Yǒule péngyoumen de zhīchí, wǒ yóurú zēngtiānle wúqióng de lìliang.',
      note:'有了…… = có được … rồi thì …; 增添 = thêm vào.',pair:'有了……'}
   ]},

  {n:34,zh:'宗旨',py:'zōngzhǐ',pos:'Danh từ',vn:'tôn chỉ, mục đích (chủ yếu)',hv:'tông chỉ',em:'🎯',lesson:1,
   explain:['Mục đích, ý đồ chủ yếu mà một tổ chức, một hoạt động luôn hướng tới.','Văn viết, trang trọng: 服务宗旨, 办学宗旨, 以……为宗旨.'],
   usage:'以……为宗旨; 服务 / 办学 / 公司 + 宗旨; 调整宗旨.',
   collo:['服务宗旨','以……为宗旨','办学宗旨','调整宗旨'],
   ex_zh:'我们公司一向以“顾客第一”为宗旨。',ex_py:'Wǒmen gōngsī yíxiàng yǐ "gùkè dì-yī" wéi zōngzhǐ.',ex_vn:'Công ty chúng tôi xưa nay luôn lấy "khách hàng là trên hết" làm tôn chỉ.',
   exList:[
     {zh:'旅游书籍也就扩大了服务对象，调整了服务宗旨。',py:'Lǚyóu shūjí yě jiù kuòdàle fúwù duìxiàng, tiáozhěngle fúwù zōngzhǐ.',vn:'Sách du lịch cũng theo đó mở rộng đối tượng phục vụ, điều chỉnh tôn chỉ phục vụ.'},
     {zh:'我们公司一向以“顾客第一”为宗旨。',py:'Wǒmen gōngsī yíxiàng yǐ "gùkè dì-yī" wéi zōngzhǐ.',vn:'Công ty chúng tôi xưa nay luôn lấy "khách hàng là trên hết" làm tôn chỉ.'},
     {zh:'这所学校的办学宗旨是让每个孩子都得到发展。',py:'Zhè suǒ xuéxiào de bànxué zōngzhǐ shì ràng měi ge háizi dōu dédào fāzhǎn.',vn:'Tôn chỉ giáo dục của trường này là để mỗi đứa trẻ đều được phát triển.'}
   ],
   colloFull:[
     {zh:'服务宗旨',py:'fúwù zōngzhǐ',vn:'tôn chỉ phục vụ'},
     {zh:'以……为宗旨',py:'yǐ…… wéi zōngzhǐ',vn:'lấy … làm tôn chỉ'},
     {zh:'办学宗旨',py:'bànxué zōngzhǐ',vn:'tôn chỉ giáo dục (của trường)'},
     {zh:'调整宗旨',py:'tiáozhěng zōngzhǐ',vn:'điều chỉnh tôn chỉ'},
     {zh:'活动宗旨',py:'huódòng zōngzhǐ',vn:'mục đích của hoạt động'}
   ],
   patterns:[
     {s:'以 + A + 为宗旨',m:'Lấy A làm tôn chỉ'},
     {s:'……的宗旨是……',m:'Tôn chỉ của … là …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Câu lạc bộ này lấy việc giúp học sinh yêu thích đọc sách làm tôn chỉ.',answer:'这个俱乐部以帮助学生爱上阅读为宗旨。',answerPy:'Zhège jùlèbù yǐ bāngzhù xuésheng àishàng yuèdú wéi zōngzhǐ.',
      note:'以 A 为 B: lấy A làm B (văn viết); 爱上 = đem lòng yêu thích.',pair:'以……为……'},
     {promptLang:'vi',prompt:'Dù gặp khó khăn gì, chúng tôi cũng sẽ không thay đổi tôn chỉ phục vụ của mình.',answer:'不管遇到什么困难，我们都不会改变自己的服务宗旨。',answerPy:'Bùguǎn yùdào shénme kùnnan, wǒmen dōu bú huì gǎibiàn zìjǐ de fúwù zōngzhǐ.',
      note:'不管……都……: dù … đều ….',pair:'不管……都……'}
   ]},

  {n:35,zh:'栏目',py:'lánmù',pos:'Danh từ',vn:'chuyên mục (báo, tạp chí, truyền hình…)',hv:'lan mục',em:'🗂️',lesson:1,
   explain:['Các mục, chuyên mục được chia theo nội dung trên báo, tạp chí, trang web, đài truyền hình.','Hay gặp: 增加 / 开设 + 栏目, 电视栏目, 相关栏目, 这个栏目很受欢迎.'],
   usage:'开设 / 增加 + 栏目; 电视 / 网站 + 栏目; 栏目主持人.',
   collo:['相关栏目','增加栏目','电视栏目','开设栏目'],
   ex_zh:'这家报纸新开设了一个旅游栏目。',ex_py:'Zhè jiā bàozhǐ xīn kāishèle yí ge lǚyóu lánmù.',ex_vn:'Tờ báo này mới mở một chuyên mục du lịch.',
   exList:[
     {zh:'旅游书籍增加了相关栏目，变得越来越接地气。',py:'Lǚyóu shūjí zēngjiāle xiāngguān lánmù, biàn de yuè lái yuè jiē dìqì.',vn:'Sách du lịch đã thêm các chuyên mục liên quan, trở nên ngày càng gần gũi đời thường.'},
     {zh:'这家报纸新开设了一个旅游栏目。',py:'Zhè jiā bàozhǐ xīn kāishèle yí ge lǚyóu lánmù.',vn:'Tờ báo này mới mở một chuyên mục du lịch.'},
     {zh:'这个电视栏目专门介绍各地的风土人情。',py:'Zhège diànshì lánmù zhuānmén jièshào gè dì de fēngtǔ rénqíng.',vn:'Chương trình truyền hình này chuyên giới thiệu phong thổ nhân tình của các vùng miền.'}
   ],
   colloFull:[
     {zh:'相关栏目',py:'xiāngguān lánmù',vn:'chuyên mục liên quan'},
     {zh:'增加栏目',py:'zēngjiā lánmù',vn:'thêm chuyên mục'},
     {zh:'电视栏目',py:'diànshì lánmù',vn:'chương trình / chuyên mục truyền hình'},
     {zh:'开设栏目',py:'kāishè lánmù',vn:'mở chuyên mục'},
     {zh:'栏目主持人',py:'lánmù zhǔchírén',vn:'người dẫn chương trình'}
   ],
   patterns:[
     {s:'开设 / 增加 + (一个) ……栏目',m:'Mở / thêm chuyên mục …'},
     {s:'这个栏目 + 专门 + V',m:'Chuyên mục này chuyên …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chuyên mục này sở dĩ được yêu thích là vì nội dung vừa thiết thực vừa thú vị.',answer:'这个栏目之所以受欢迎，是因为内容既实用又有趣。',answerPy:'Zhège lánmù zhīsuǒyǐ shòu huānyíng, shì yīnwèi nèiróng jì shíyòng yòu yǒuqù.',
      note:'之所以……是因为……: sở dĩ … là vì …; 既……又…….',pair:'之所以……是因为……'},
     {promptLang:'vi',prompt:'Tối nào bố tôi cũng xem chương trình thời sự đó đúng giờ.',answer:'我爸爸每天晚上都准时收看那个新闻栏目。',answerPy:'Wǒ bàba měi tiān wǎnshang dōu zhǔnshí shōukàn nàge xīnwén lánmù.',
      note:'每……都……: … nào cũng …; 收看 = xem (truyền hình).',pair:'每……都……'}
   ]},

  {n:36,zh:'人性',py:'rénxìng',pos:'Danh từ',vn:'nhân tính, bản chất con người',hv:'nhân tính',em:'🤝',lesson:1,
   explain:['Bản tính vốn có của con người; tình cảm, lý trí bình thường của con người.','人性化 = (thiết kế, dịch vụ) lấy con người làm gốc, chu đáo, hợp nhu cầu người dùng; 没有人性 = vô nhân tính.'],
   usage:'人性化 (的设计 / 服务); 变得人性化; 没有人性; 人性的弱点.',
   collo:['人性化','人性化的设计','没有人性','人性的弱点'],
   ex_zh:'这家酒店的服务非常人性化。',ex_py:'Zhè jiā jiǔdiàn de fúwù fēicháng rénxìnghuà.',ex_vn:'Dịch vụ của khách sạn này rất chu đáo, lấy khách hàng làm trung tâm.',
   exList:[
     {zh:'旅游书籍变得越来越接地气，越来越人性化了。',py:'Lǚyóu shūjí biàn de yuè lái yuè jiē dìqì, yuè lái yuè rénxìnghuà le.',vn:'Sách du lịch trở nên ngày càng gần gũi đời thường, ngày càng lấy con người làm gốc.'},
     {zh:'这家酒店的服务非常人性化。',py:'Zhè jiā jiǔdiàn de fúwù fēicháng rénxìnghuà.',vn:'Dịch vụ của khách sạn này rất chu đáo, lấy khách hàng làm trung tâm.'},
     {zh:'虐待动物是一种没有人性的行为。',py:'Nüèdài dòngwù shì yì zhǒng méiyǒu rénxìng de xíngwéi.',vn:'Ngược đãi động vật là một hành vi vô nhân tính.'}
   ],
   colloFull:[
     {zh:'人性化',py:'rénxìnghuà',vn:'lấy con người làm gốc, chu đáo'},
     {zh:'人性化的设计',py:'rénxìnghuà de shèjì',vn:'thiết kế thân thiện với người dùng'},
     {zh:'没有人性',py:'méiyǒu rénxìng',vn:'vô nhân tính'},
     {zh:'人性的弱点',py:'rénxìng de ruòdiǎn',vn:'điểm yếu của con người'},
     {zh:'人性的光辉',py:'rénxìng de guānghuī',vn:'ánh sáng của nhân tính'}
   ],
   patterns:[
     {s:'……(变得)越来越人性化',m:'… ngày càng chu đáo, lấy con người làm gốc'},
     {s:'没有人性的 + N',m:'… vô nhân tính'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Thiết kế của chiếc điện thoại này rất chu đáo, đến người già cũng dùng được dễ dàng.',answer:'这款手机的设计很人性化，连老人也能轻松使用。',answerPy:'Zhè kuǎn shǒujī de shèjì hěn rénxìnghuà, lián lǎorén yě néng qīngsōng shǐyòng.',
      note:'连……也……: đến … cũng ….',pair:'连……也……'},
     {promptLang:'vi',prompt:'Làm như vậy quả thực quá vô nhân tính, sao anh có thể tàn nhẫn đến thế?',answer:'这样做简直太没有人性了，你怎么能这么残忍？',answerPy:'Zhèyàng zuò jiǎnzhí tài méiyǒu rénxìng le, nǐ zěnme néng zhème cánrěn?',
      note:'简直 = quả thực; câu hỏi tu từ 怎么能……？; 残忍 ôn bài 4.',pair:'简直'}
   ]},

  {n:37,zh:'偏僻',py:'piānpì',pos:'Tính từ',vn:'xa xôi, hẻo lánh',hv:'thiên tích',em:'🏞️',lesson:1,
   explain:['(Nơi chốn) xa trung tâm, ít người qua lại, giao thông không thuận tiện.','Hay làm định ngữ: 偏僻的山村, 偏僻省份, 偏僻的地方; làm vị ngữ: 位置很偏僻.'],
   usage:'偏僻的 + 山村 / 小镇 / 地方; 地方 / 位置 + 很偏僻.',
   collo:['偏僻省份','偏僻的山村','偏僻的地方','位置偏僻'],
   ex_zh:'偏僻省份、沿海城市、秀美的乡镇，都成了游客感兴趣的地方。',ex_py:'Piānpì shěngfèn, yánhǎi chéngshì, xiùměi de xiāngzhèn, dōu chéngle yóukè gǎn xìngqù de dìfang.',ex_vn:'Những tỉnh xa xôi, thành phố ven biển, thị trấn xinh đẹp đều trở thành nơi du khách quan tâm.',
   exList:[
     {zh:'偏僻省份、沿海城市、秀美的乡镇，都成了游客感兴趣的地方。',py:'Piānpì shěngfèn, yánhǎi chéngshì, xiùměi de xiāngzhèn, dōu chéngle yóukè gǎn xìngqù de dìfang.',vn:'Những tỉnh xa xôi, thành phố ven biển, thị trấn xinh đẹp đều trở thành nơi du khách quan tâm.'},
     {zh:'他在一个偏僻的山村当了十年老师。',py:'Tā zài yí ge piānpì de shāncūn dāngle shí nián lǎoshī.',vn:'Anh ấy làm thầy giáo mười năm ở một bản làng hẻo lánh.'},
     {zh:'这家小饭馆虽然位置偏僻，但是客人很多。',py:'Zhè jiā xiǎo fànguǎn suīrán wèizhi piānpì, dànshì kèrén hěn duō.',vn:'Quán ăn nhỏ này tuy ở chỗ hẻo lánh nhưng rất đông khách.'}
   ],
   colloFull:[
     {zh:'偏僻省份',py:'piānpì shěngfèn',vn:'tỉnh xa xôi'},
     {zh:'偏僻的山村',py:'piānpì de shāncūn',vn:'bản làng hẻo lánh'},
     {zh:'偏僻的地方',py:'piānpì de dìfang',vn:'nơi hẻo lánh'},
     {zh:'位置偏僻',py:'wèizhi piānpì',vn:'vị trí hẻo lánh'},
     {zh:'偏僻的小镇',py:'piānpì de xiǎozhèn',vn:'thị trấn nhỏ hẻo lánh'}
   ],
   patterns:[
     {s:'偏僻的 + nơi chốn',m:'… xa xôi, hẻo lánh'},
     {s:'虽然位置偏僻，但是……',m:'Tuy ở chỗ hẻo lánh nhưng …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nơi đó hẻo lánh quá, đến sóng điện thoại cũng không có.',answer:'那个地方太偏僻了，连手机信号都没有。',answerPy:'Nàge dìfang tài piānpì le, lián shǒujī xìnhào dōu méiyǒu.',
      note:'连……都……: đến … cũng ….',pair:'连……都……'},
     {promptLang:'vi',prompt:'Ngôi làng này tuy hẻo lánh, nhưng phong cảnh đẹp đến mức khiến người ta không muốn rời đi.',answer:'这个村子虽然偏僻，但是风景美得让人不想离开。',answerPy:'Zhège cūnzi suīrán piānpì, dànshì fēngjǐng měi de ràng rén bù xiǎng líkāi.',
      note:'Adj + 得 + 让人……: … đến mức khiến người ta ….',pair:'Adj + 得 + 让人……'}
   ]},

  {n:38,zh:'沿海',py:'yánhǎi',pos:'Danh từ',vn:'vùng duyên hải, ven biển',hv:'duyên hải',em:'🏖️',lesson:1,
   explain:['Vùng đất dọc theo bờ biển.','Thường làm định ngữ: 沿海城市, 沿海地区, 沿海省份; đối lập với 内地, 内陆.'],
   usage:'沿海 + 城市 / 地区 / 省份; 东南沿海; 沿海一带.',
   collo:['沿海城市','沿海地区','东南沿海','沿海一带'],
   ex_zh:'越南有很多美丽的沿海城市。',ex_py:'Yuènán yǒu hěn duō měilì de yánhǎi chéngshì.',ex_vn:'Việt Nam có rất nhiều thành phố ven biển xinh đẹp.',
   exList:[
     {zh:'偏僻省份、沿海城市、秀美的乡镇，都成了游客感兴趣的地方。',py:'Piānpì shěngfèn, yánhǎi chéngshì, xiùměi de xiāngzhèn, dōu chéngle yóukè gǎn xìngqù de dìfang.',vn:'Những tỉnh xa xôi, thành phố ven biển, thị trấn xinh đẹp đều trở thành nơi du khách quan tâm.'},
     {zh:'越南有很多美丽的沿海城市。',py:'Yuènán yǒu hěn duō měilì de yánhǎi chéngshì.',vn:'Việt Nam có rất nhiều thành phố ven biển xinh đẹp.'},
     {zh:'夏天，沿海地区经常受到台风的影响。',py:'Xiàtiān, yánhǎi dìqū jīngcháng shòudào táifēng de yǐngxiǎng.',vn:'Mùa hè, vùng duyên hải thường chịu ảnh hưởng của bão.'}
   ],
   colloFull:[
     {zh:'沿海城市',py:'yánhǎi chéngshì',vn:'thành phố ven biển'},
     {zh:'沿海地区',py:'yánhǎi dìqū',vn:'vùng duyên hải'},
     {zh:'东南沿海',py:'dōngnán yánhǎi',vn:'vùng ven biển đông nam'},
     {zh:'沿海一带',py:'yánhǎi yídài',vn:'dải ven biển'},
     {zh:'沿海省份',py:'yánhǎi shěngfèn',vn:'các tỉnh ven biển'}
   ],
   patterns:[
     {s:'沿海 + 城市 / 地区 / 省份',m:'Thành phố / vùng / tỉnh ven biển'},
     {s:'沿海 ≠ 内地',m:'Ven biển đối lập với nội địa'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'So với nội địa, kinh tế vùng duyên hải phát triển sớm hơn.',answer:'和内地相比，沿海地区的经济发展得更早。',answerPy:'Hé nèidì xiāngbǐ, yánhǎi dìqū de jīngjì fāzhǎn de gèng zǎo.',
      note:'和……相比 + 更 …; bổ ngữ trình độ V + 得 + Adj.',pair:'bổ ngữ trình độ 得'},
     {promptLang:'vi',prompt:'Năm nào nghỉ hè, cả nhà tôi cũng đến một thành phố ven biển nghỉ mát.',answer:'每年暑假，我们全家都会去一个沿海城市度假。',answerPy:'Měi nián shǔjià, wǒmen quánjiā dōu huì qù yí ge yánhǎi chéngshì dùjià.',
      note:'每……都……: … nào cũng …; 度假 = đi nghỉ.',pair:'每……都……'}
   ]},

  {n:39,zh:'风土人情',py:'fēngtǔ rénqíng',pos:'Thành ngữ',vn:'môi trường tự nhiên và phong tục tập quán, lễ tiết của một địa phương',hv:'phong thổ nhân tình',em:'🎎',lesson:1,
   explain:['风土 = khí hậu, đất đai, sản vật; 人情 = phong tục, tập quán, lễ nghi — cả cụm chỉ đặc điểm tự nhiên và văn hoá riêng của một vùng.','Hay đi với: 当地的风土人情; 了解 / 介绍 / 体验 + 风土人情.'],
   usage:'了解 / 介绍 / 体验 + 风土人情; 独特的风土人情; 各地的风土人情.',
   collo:['当地的风土人情','了解风土人情','独特的风土人情','体验风土人情'],
   ex_zh:'旅行的意义在于了解各地不同的风土人情。',ex_py:'Lǚxíng de yìyì zàiyú liǎojiě gè dì bùtóng de fēngtǔ rénqíng.',ex_vn:'Ý nghĩa của du lịch nằm ở việc tìm hiểu phong thổ nhân tình khác nhau của từng vùng.',
   exList:[
     {zh:'旅游指南不仅介绍地理环境、风土人情、人文特色、著名风景，还会介绍当地饮食、宗教、考古新发现等。',py:'Lǚyóu zhǐnán bùjǐn jièshào dìlǐ huánjìng, fēngtǔ rénqíng, rénwén tèsè, zhùmíng fēngjǐng, hái huì jièshào dāngdì yǐnshí, zōngjiào, kǎogǔ xīn fāxiàn děng.',vn:'Sách hướng dẫn du lịch không chỉ giới thiệu môi trường địa lý, phong thổ nhân tình, đặc sắc văn hoá, danh thắng nổi tiếng, mà còn giới thiệu ẩm thực địa phương, tôn giáo, những phát hiện khảo cổ mới…'},
     {zh:'旅行的意义在于了解各地不同的风土人情。',py:'Lǚxíng de yìyì zàiyú liǎojiě gè dì bùtóng de fēngtǔ rénqíng.',vn:'Ý nghĩa của du lịch nằm ở việc tìm hiểu phong thổ nhân tình khác nhau của từng vùng.'},
     {zh:'那些地方独特的风土人情吸引了越来越多的游客。',py:'Nàxiē dìfang dútè de fēngtǔ rénqíng xīyǐnle yuè lái yuè duō de yóukè.',vn:'Phong thổ nhân tình độc đáo của những nơi đó đã thu hút ngày càng nhiều du khách.'}
   ],
   colloFull:[
     {zh:'当地的风土人情',py:'dāngdì de fēngtǔ rénqíng',vn:'phong thổ nhân tình địa phương'},
     {zh:'了解风土人情',py:'liǎojiě fēngtǔ rénqíng',vn:'tìm hiểu phong thổ nhân tình'},
     {zh:'独特的风土人情',py:'dútè de fēngtǔ rénqíng',vn:'phong thổ nhân tình độc đáo'},
     {zh:'体验风土人情',py:'tǐyàn fēngtǔ rénqíng',vn:'trải nghiệm phong tục địa phương'},
     {zh:'介绍风土人情',py:'jièshào fēngtǔ rénqíng',vn:'giới thiệu phong thổ nhân tình'}
   ],
   patterns:[
     {s:'了解 / 体验 + (当地的)风土人情',m:'Tìm hiểu / trải nghiệm phong thổ nhân tình (địa phương)'},
     {s:'……的意义在于……',m:'Ý nghĩa của … nằm ở …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Muốn thực sự hiểu phong thổ nhân tình của một nơi, tốt nhất nên sống ở đó một thời gian.',answer:'要想真正了解一个地方的风土人情，最好在那儿住上一段时间。',answerPy:'Yào xiǎng zhēnzhèng liǎojiě yí ge dìfang de fēngtǔ rénqíng, zuìhǎo zài nàr zhùshàng yí duàn shíjiān.',
      note:'要想……，最好……: muốn … thì tốt nhất …; V + 上 + thời lượng.',pair:'要想……'},
     {promptLang:'vi',prompt:'Đi du lịch không chỉ để ngắm cảnh, mà hơn thế là để trải nghiệm phong tục địa phương.',answer:'旅游不只是为了看风景，更是为了体验当地的风土人情。',answerPy:'Lǚyóu bù zhǐ shì wèile kàn fēngjǐng, gèng shì wèile tǐyàn dāngdì de fēngtǔ rénqíng.',
      note:'不只是……更是……: không chỉ … mà hơn thế là ….',pair:'不只是……更是……'}
   ]},

  {n:40,zh:'宗教',py:'zōngjiào',pos:'Danh từ',vn:'tôn giáo',hv:'tông giáo',em:'⛩️',lesson:1,
   explain:['Tôn giáo — hệ thống tín ngưỡng, giáo lý, nghi lễ (Phật giáo, Thiên Chúa giáo…).','Hay gặp: 宗教信仰, 宗教建筑, 宗教活动, 宗教文化.'],
   usage:'宗教 + 信仰 / 建筑 / 文化 / 活动 / 节日; 尊重……的宗教信仰.',
   collo:['宗教信仰','宗教建筑','宗教文化','宗教活动'],
   ex_zh:'到国外旅游，要尊重当地人的宗教信仰。',ex_py:'Dào guówài lǚyóu, yào zūnzhòng dāngdìrén de zōngjiào xìnyǎng.',ex_vn:'Đi du lịch nước ngoài, phải tôn trọng tín ngưỡng tôn giáo của người dân địa phương.',
   exList:[
     {zh:'旅游指南还会介绍当地饮食、宗教、考古新发现等。',py:'Lǚyóu zhǐnán hái huì jièshào dāngdì yǐnshí, zōngjiào, kǎogǔ xīn fāxiàn děng.',vn:'Sách hướng dẫn du lịch còn giới thiệu ẩm thực địa phương, tôn giáo, những phát hiện khảo cổ mới…'},
     {zh:'这座寺庙是当地最古老的宗教建筑。',py:'Zhè zuò sìmiào shì dāngdì zuì gǔlǎo de zōngjiào jiànzhù.',vn:'Ngôi chùa này là công trình tôn giáo cổ nhất ở địa phương.'},
     {zh:'到国外旅游，要尊重当地人的宗教信仰。',py:'Dào guówài lǚyóu, yào zūnzhòng dāngdìrén de zōngjiào xìnyǎng.',vn:'Đi du lịch nước ngoài, phải tôn trọng tín ngưỡng tôn giáo của người dân địa phương.'}
   ],
   colloFull:[
     {zh:'宗教信仰',py:'zōngjiào xìnyǎng',vn:'tín ngưỡng tôn giáo'},
     {zh:'宗教建筑',py:'zōngjiào jiànzhù',vn:'công trình tôn giáo'},
     {zh:'宗教文化',py:'zōngjiào wénhuà',vn:'văn hoá tôn giáo'},
     {zh:'宗教活动',py:'zōngjiào huódòng',vn:'hoạt động tôn giáo'},
     {zh:'宗教节日',py:'zōngjiào jiérì',vn:'ngày lễ tôn giáo'}
   ],
   patterns:[
     {s:'尊重 + ……的宗教信仰',m:'Tôn trọng tín ngưỡng tôn giáo của …'},
     {s:'宗教 + 建筑 / 文化 / 节日',m:'Công trình / văn hoá / ngày lễ tôn giáo'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Trước khi tham quan công trình tôn giáo, tốt nhất nên tìm hiểu trước những điều kiêng kỵ ở đó.',answer:'参观宗教建筑之前，最好先了解一下那里的禁忌。',answerPy:'Cānguān zōngjiào jiànzhù zhīqián, zuìhǎo xiān liǎojiě yíxià nàlǐ de jìnjì.',
      note:'……之前 = trước khi …; 最好先 + V.',pair:'……之前'},
     {promptLang:'vi',prompt:'Dù có tín ngưỡng tôn giáo hay không, chúng ta đều nên tôn trọng lẫn nhau.',answer:'无论有没有宗教信仰，我们都应该互相尊重。',answerPy:'Wúlùn yǒu méiyǒu zōngjiào xìnyǎng, wǒmen dōu yīnggāi hùxiāng zūnzhòng.',
      note:'无论 + (có … hay không) + 都……: dù … hay không đều ….',pair:'无论……都……'}
   ]},

  {n:41,zh:'考古',py:'kǎogǔ',pos:'Danh từ',vn:'khảo cổ học',hv:'khảo cổ',em:'🏺',lesson:1,
   explain:['Khảo cổ học — ngành nghiên cứu lịch sử cổ đại qua di vật, di chỉ.','Cũng dùng như động từ (nghiên cứu khảo cổ); hay gặp: 考古发现, 考古学家, 考古工作.'],
   usage:'考古 + 发现 / 学家 / 工作 / 队; 考古新发现; 考古发掘.',
   collo:['考古新发现','考古学家','考古工作','考古队'],
   ex_zh:'这次考古发现证明，两千年前这里就有人居住。',ex_py:'Zhè cì kǎogǔ fāxiàn zhèngmíng, liǎngqiān nián qián zhèlǐ jiù yǒu rén jūzhù.',ex_vn:'Phát hiện khảo cổ lần này chứng minh rằng hai nghìn năm trước nơi đây đã có người sinh sống.',
   exList:[
     {zh:'旅游指南还会介绍当地饮食、宗教、考古新发现等。',py:'Lǚyóu zhǐnán hái huì jièshào dāngdì yǐnshí, zōngjiào, kǎogǔ xīn fāxiàn děng.',vn:'Sách hướng dẫn du lịch còn giới thiệu ẩm thực địa phương, tôn giáo, những phát hiện khảo cổ mới…'},
     {zh:'这次考古发现证明，两千年前这里就有人居住。',py:'Zhè cì kǎogǔ fāxiàn zhèngmíng, liǎngqiān nián qián zhèlǐ jiù yǒu rén jūzhù.',vn:'Phát hiện khảo cổ lần này chứng minh rằng hai nghìn năm trước nơi đây đã có người sinh sống.'},
     {zh:'他从小就对考古感兴趣，长大后成了一名考古学家。',py:'Tā cóngxiǎo jiù duì kǎogǔ gǎn xìngqù, zhǎngdà hòu chéngle yì míng kǎogǔxuéjiā.',vn:'Từ nhỏ cậu ấy đã thích khảo cổ, lớn lên trở thành một nhà khảo cổ học.'}
   ],
   colloFull:[
     {zh:'考古新发现',py:'kǎogǔ xīn fāxiàn',vn:'phát hiện khảo cổ mới'},
     {zh:'考古学家',py:'kǎogǔxuéjiā',vn:'nhà khảo cổ học'},
     {zh:'考古工作',py:'kǎogǔ gōngzuò',vn:'công tác khảo cổ'},
     {zh:'考古队',py:'kǎogǔduì',vn:'đoàn khảo cổ'},
     {zh:'考古发掘',py:'kǎogǔ fājué',vn:'khai quật khảo cổ'}
   ],
   patterns:[
     {s:'考古 + 发现 / 学家 / 工作',m:'Phát hiện / nhà / công tác khảo cổ'},
     {s:'……考古发现证明，……',m:'Phát hiện khảo cổ … chứng minh rằng …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Công việc khảo cổ tuy vất vả, nhưng mỗi phát hiện mới đều khiến người ta vô cùng phấn khởi.',answer:'考古工作虽然辛苦，但每一个新发现都让人兴奋不已。',answerPy:'Kǎogǔ gōngzuò suīrán xīnkǔ, dàn měi yí ge xīn fāxiàn dōu ràng rén xīngfèn bùyǐ.',
      note:'虽然……但……; 不已 = không thôi, mãi không dứt.',pair:'虽然……但……'},
     {promptLang:'vi',prompt:'Nếu không có các nhà khảo cổ, chúng ta khó mà hiểu được cuộc sống của người xưa.',answer:'要不是有考古学家，我们很难了解古人的生活。',answerPy:'Yàobushì yǒu kǎogǔxuéjiā, wǒmen hěn nán liǎojiě gǔrén de shēnghuó.',
      note:'要不是…… = nếu không có / nếu không phải … thì ….',pair:'要不是……'}
   ]},

  {n:42,zh:'经费',py:'jīngfèi',pos:'Danh từ',vn:'kinh phí, tiền chi tiêu',hv:'kinh phí',em:'💰',lesson:1,
   explain:['Khoản tiền chi dùng cho một công việc, hoạt động, tổ chức.','Hay gặp: 经费不足, 申请经费, 活动经费; trong bài: 经费预算 = dự toán kinh phí.'],
   usage:'经费 + 不足 / 紧张 / 有限; 申请 / 筹集 + 经费; 活动 / 科研 / 旅行 + 经费.',
   collo:['经费预算','经费不足','活动经费','申请经费'],
   ex_zh:'由于经费不足，这个项目只好暂停。',ex_py:'Yóuyú jīngfèi bùzú, zhège xiàngmù zhǐhǎo zàntíng.',ex_vn:'Do thiếu kinh phí, dự án này đành phải tạm dừng.',
   exList:[
     {zh:'旅游指南甚至为游客提供经费预算方面的信息。',py:'Lǚyóu zhǐnán shènzhì wèi yóukè tígōng jīngfèi yùsuàn fāngmiàn de xìnxī.',vn:'Sách hướng dẫn du lịch thậm chí còn cung cấp cho du khách thông tin về dự toán kinh phí.'},
     {zh:'由于经费不足，这个项目只好暂停。',py:'Yóuyú jīngfèi bùzú, zhège xiàngmù zhǐhǎo zàntíng.',vn:'Do thiếu kinh phí, dự án này đành phải tạm dừng.'},
     {zh:'班长负责管理班级的活动经费。',py:'Bānzhǎng fùzé guǎnlǐ bānjí de huódòng jīngfèi.',vn:'Lớp trưởng phụ trách quản lý kinh phí hoạt động của lớp.'}
   ],
   colloFull:[
     {zh:'经费预算',py:'jīngfèi yùsuàn',vn:'dự toán kinh phí'},
     {zh:'经费不足',py:'jīngfèi bùzú',vn:'thiếu kinh phí'},
     {zh:'活动经费',py:'huódòng jīngfèi',vn:'kinh phí hoạt động'},
     {zh:'申请经费',py:'shēnqǐng jīngfèi',vn:'xin cấp kinh phí'},
     {zh:'筹集经费',py:'chóují jīngfèi',vn:'gây quỹ, quyên góp kinh phí'}
   ],
   patterns:[
     {s:'由于经费不足，……',m:'Do thiếu kinh phí, …'},
     {s:'申请 / 筹集 + ……经费',m:'Xin cấp / gây quỹ kinh phí …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Để gây quỹ cho chuyến đi, cả lớp đã tổ chức một buổi bán hàng gây quỹ.',answer:'为了筹集旅行经费，全班同学举办了一次义卖活动。',answerPy:'Wèile chóují lǚxíng jīngfèi, quán bān tóngxué jǔbànle yí cì yìmài huódòng.',
      note:'为了 + mục đích; 举办……活动 = tổ chức hoạt động ….',pair:'为了……'},
     {promptLang:'vi',prompt:'Kinh phí có hạn, vì vậy chúng ta phải tính toán kỹ từng khoản chi.',answer:'经费有限，所以我们必须仔细计算每一笔开支。',answerPy:'Jīngfèi yǒuxiàn, suǒyǐ wǒmen bìxū zǐxì jìsuàn měi yì bǐ kāizhī.',
      note:'Lượng từ 笔 dùng cho khoản tiền; 必须 = bắt buộc phải.',pair:'(因为)……所以……'}
   ]},

  {n:43,zh:'预算',py:'yùsuàn',pos:'Động từ / Danh từ',vn:'dự thảo ngân sách; ngân quỹ, dự toán',hv:'dự toán',em:'🧮',lesson:1,
   explain:['Động từ: tính trước các khoản thu chi (lập dự toán).','Danh từ: ngân sách, bản dự toán — 超出预算, 做预算, 旅游预算.'],
   usage:'做预算; 超出 / 超过 + 预算; 预算 + 有限 / 不够; 经费预算.',
   collo:['做预算','超出预算','经费预算','旅游预算'],
   ex_zh:'这次旅行的花费已经超出了预算。',ex_py:'Zhè cì lǚxíng de huāfèi yǐjīng chāochūle yùsuàn.',ex_vn:'Chi phí chuyến đi lần này đã vượt quá ngân sách.',
   exList:[
     {zh:'旅游指南甚至为游客提供经费预算方面的信息。',py:'Lǚyóu zhǐnán shènzhì wèi yóukè tígōng jīngfèi yùsuàn fāngmiàn de xìnxī.',vn:'Sách hướng dẫn du lịch thậm chí còn cung cấp cho du khách thông tin về dự toán kinh phí.'},
     {zh:'这次旅行的花费已经超出了预算。',py:'Zhè cì lǚxíng de huāfèi yǐjīng chāochūle yùsuàn.',vn:'Chi phí chuyến đi lần này đã vượt quá ngân sách.'},
     {zh:'出发之前，我们先做了一个详细的预算。',py:'Chūfā zhīqián, wǒmen xiān zuòle yí ge xiángxì de yùsuàn.',vn:'Trước khi xuất phát, chúng tôi đã lập một bản dự toán chi tiết.'}
   ],
   colloFull:[
     {zh:'做预算',py:'zuò yùsuàn',vn:'lập dự toán'},
     {zh:'超出预算',py:'chāochū yùsuàn',vn:'vượt ngân sách'},
     {zh:'经费预算',py:'jīngfèi yùsuàn',vn:'dự toán kinh phí'},
     {zh:'旅游预算',py:'lǚyóu yùsuàn',vn:'ngân sách du lịch'},
     {zh:'预算有限',py:'yùsuàn yǒuxiàn',vn:'ngân sách có hạn'}
   ],
   patterns:[
     {s:'做(一个)预算',m:'Lập dự toán, lên ngân sách'},
     {s:'花费 + 超出(了) + 预算',m:'Chi phí vượt quá ngân sách'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nếu không lập ngân sách trước, tiêu tiền rất dễ vượt quá mức.',answer:'如果不事先做好预算，花钱就很容易超支。',answerPy:'Rúguǒ bú shìxiān zuòhǎo yùsuàn, huā qián jiù hěn róngyì chāozhī.',
      note:'如果……就……; 事先 = trước; 超支 = chi vượt mức.',pair:'如果……就……'},
     {promptLang:'vi',prompt:'Ngân sách của chúng ta có hạn, thay vì ở khách sạn cao cấp thì chi bằng ở nhà nghỉ thanh niên.',answer:'我们的预算有限，与其住高级酒店，不如住青年旅社。',answerPy:'Wǒmen de yùsuàn yǒuxiàn, yǔqí zhù gāojí jiǔdiàn, bùrú zhù qīngnián lǚshè.',
      note:'与其 A 不如 B: thay vì A chi bằng B (chọn B).',pair:'与其……不如……'}
   ]},

  {n:44,zh:'参谋',py:'cānmóu',pos:'Danh từ / Động từ',vn:'người cố vấn; tư vấn, góp ý',hv:'tham mưu',em:'🗣️',lesson:1,
   explain:['Danh từ: người góp ý, cố vấn (nghĩa gốc: sĩ quan tham mưu trong quân đội).','Động từ: góp ý, bày cách, tư vấn — khẩu ngữ hay lặp: 帮我参谋参谋.'],
   usage:'……的好参谋; 当参谋; 帮 + ai + 参谋参谋 / 参谋一下.',
   collo:['好参谋','当参谋','帮我参谋参谋','参谋一下'],
   ex_zh:'旅游指南绝对是游客的好参谋。',ex_py:'Lǚyóu zhǐnán juéduì shì yóukè de hǎo cānmóu.',ex_vn:'Sách hướng dẫn du lịch tuyệt đối là người cố vấn đắc lực của du khách.',
   exList:[
     {zh:'旅游指南绝对是游客的好参谋。',py:'Lǚyóu zhǐnán juéduì shì yóukè de hǎo cānmóu.',vn:'Sách hướng dẫn du lịch tuyệt đối là người cố vấn đắc lực của du khách.'},
     {zh:'我想买台电脑，你帮我参谋参谋吧。',py:'Wǒ xiǎng mǎi tái diànnǎo, nǐ bāng wǒ cānmóu cānmóu ba.',vn:'Tớ muốn mua một chiếc máy tính, cậu tư vấn giúp tớ nhé.'},
     {zh:'选专业的时候，父母是我的好参谋。',py:'Xuǎn zhuānyè de shíhou, fùmǔ shì wǒ de hǎo cānmóu.',vn:'Khi chọn ngành, bố mẹ là người cố vấn tốt của tôi.'}
   ],
   colloFull:[
     {zh:'好参谋',py:'hǎo cānmóu',vn:'người cố vấn tốt'},
     {zh:'当参谋',py:'dāng cānmóu',vn:'làm cố vấn'},
     {zh:'帮我参谋参谋',py:'bāng wǒ cānmóu cānmóu',vn:'tư vấn giúp tôi'},
     {zh:'参谋一下',py:'cānmóu yíxià',vn:'góp ý một chút'},
     {zh:'购物参谋',py:'gòuwù cānmóu',vn:'người tư vấn mua sắm'}
   ],
   patterns:[
     {s:'A 是 B 的好参谋',m:'A là người cố vấn tốt của B'},
     {s:'帮 + ai + 参谋参谋 / 参谋一下',m:'Góp ý, tư vấn giúp ai'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chuyện này tớ vẫn chưa quyết được, cậu góp ý giúp tớ được không?',answer:'这件事我还拿不定主意，你能帮我参谋参谋吗？',answerPy:'Zhè jiàn shì wǒ hái ná bu dìng zhǔyi, nǐ néng bāng wǒ cānmóu cānmóu ma?',
      note:'拿不定主意 = không quyết được; động từ hai âm tiết lặp theo kiểu ABAB.',pair:'lặp động từ ABAB'},
     {promptLang:'vi',prompt:'Có "người cố vấn" là điện thoại thông minh, đi du lịch một mình cũng không còn khó khăn nữa.',answer:'有了智能手机这个“参谋”，一个人旅行也不再困难了。',answerPy:'Yǒule zhìnéng shǒujī zhège "cānmóu", yí ge rén lǚxíng yě bú zài kùnnan le.',
      note:'有了……: có được … rồi thì …; 不再……了 = không còn … nữa.',pair:'不再……了'}
   ]},

  {n:45,zh:'繁体字',py:'fántǐzì',pos:'Danh từ',vn:'chữ phồn thể',hv:'phồn thể tự',em:'🀄',lesson:1,
   explain:['Chữ Hán dạng phồn thể (nhiều nét), dùng ở Hồng Kông, Ma Cao, Đài Loan và trong thư tịch cổ.','Đối lập với 简体字 (chữ giản thể) dùng ở Trung Quốc đại lục, Singapore.'],
   usage:'繁体字 + 版本 / 网站; 认识 / 会写 + 繁体字; 把繁体字转换成简体字.',
   collo:['繁体字网站','繁体字版本','认识繁体字','繁体字和简体字'],
   ex_zh:'爷爷看的古书都是用繁体字印的。',ex_py:'Yéye kàn de gǔshū dōu shì yòng fántǐzì yìn de.',ex_vn:'Những cuốn sách cổ ông đọc đều in bằng chữ phồn thể.',
   exList:[
     {zh:'如今，繁体字、简体字旅游网站的开通，更大范围地方便了游客。',py:'Rújīn, fántǐzì, jiǎntǐzì lǚyóu wǎngzhàn de kāitōng, gèng dà fànwéi de fāngbiànle yóukè.',vn:'Ngày nay, việc mở các trang web du lịch chữ phồn thể, chữ giản thể đã tạo thuận lợi cho du khách trên phạm vi rộng hơn.'},
     {zh:'爷爷看的古书都是用繁体字印的。',py:'Yéye kàn de gǔshū dōu shì yòng fántǐzì yìn de.',vn:'Những cuốn sách cổ ông đọc đều in bằng chữ phồn thể.'},
     {zh:'学过繁体字的人，看简体字一般没有问题。',py:'Xuéguo fántǐzì de rén, kàn jiǎntǐzì yìbān méiyǒu wèntí.',vn:'Người đã học chữ phồn thể thì đọc chữ giản thể thường không có vấn đề gì.'}
   ],
   colloFull:[
     {zh:'繁体字网站',py:'fántǐzì wǎngzhàn',vn:'trang web chữ phồn thể'},
     {zh:'繁体字版本',py:'fántǐzì bǎnběn',vn:'bản chữ phồn thể'},
     {zh:'认识繁体字',py:'rènshi fántǐzì',vn:'biết đọc chữ phồn thể'},
     {zh:'繁体字和简体字',py:'fántǐzì hé jiǎntǐzì',vn:'chữ phồn thể và chữ giản thể'}
   ],
   patterns:[
     {s:'用繁体字 + V (写 / 印)',m:'Viết / in bằng chữ phồn thể'},
     {s:'把繁体字转换成简体字',m:'Chuyển chữ phồn thể thành chữ giản thể'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy tôi không biết viết chữ phồn thể, nhưng đọc thì hiểu được phần lớn.',answer:'虽然我不会写繁体字，但是大部分都看得懂。',answerPy:'Suīrán wǒ bú huì xiě fántǐzì, dànshì dà bùfen dōu kàn de dǒng.',
      note:'Bổ ngữ khả năng: 看得懂 = đọc hiểu được.',pair:'bổ ngữ khả năng V得 / 不C'},
     {promptLang:'vi',prompt:'Chữ phồn thể nhiều nét, viết chậm hơn chữ giản thể nhiều.',answer:'繁体字笔画多，写起来比简体字慢得多。',answerPy:'Fántǐzì bǐhuà duō, xiě qǐlái bǐ jiǎntǐzì màn de duō.',
      note:'V + 起来 = khi …; A 比 B + Adj + 得多.',pair:'V + 起来'}
   ]},

  {n:46,zh:'简体字',py:'jiǎntǐzì',pos:'Danh từ',vn:'chữ giản thể',hv:'giản thể tự',em:'✏️',lesson:1,
   explain:['Chữ Hán đã được giản hoá (ít nét hơn), dùng chính thức ở Trung Quốc đại lục, Singapore.','Tiếng Trung học ở trường phổ thông Việt Nam hiện nay dùng chữ giản thể.'],
   usage:'简体字 + 版本 / 网站; 用简体字写; 学简体字.',
   collo:['简体字网站','简体字版本','用简体字','学简体字'],
   ex_zh:'我们在学校学的汉字都是简体字。',ex_py:'Wǒmen zài xuéxiào xué de Hànzì dōu shì jiǎntǐzì.',ex_vn:'Chữ Hán chúng tôi học ở trường đều là chữ giản thể.',
   exList:[
     {zh:'如今，繁体字、简体字旅游网站的开通，更大范围地方便了游客。',py:'Rújīn, fántǐzì, jiǎntǐzì lǚyóu wǎngzhàn de kāitōng, gèng dà fànwéi de fāngbiànle yóukè.',vn:'Ngày nay, việc mở các trang web du lịch chữ phồn thể, chữ giản thể đã tạo thuận lợi cho du khách trên phạm vi rộng hơn.'},
     {zh:'我们在学校学的汉字都是简体字。',py:'Wǒmen zài xuéxiào xué de Hànzì dōu shì jiǎntǐzì.',vn:'Chữ Hán chúng tôi học ở trường đều là chữ giản thể.'},
     {zh:'这本小说的简体字版本刚刚问世。',py:'Zhè běn xiǎoshuō de jiǎntǐzì bǎnběn gānggāng wènshì.',vn:'Bản chữ giản thể của cuốn tiểu thuyết này vừa mới ra mắt.'}
   ],
   colloFull:[
     {zh:'简体字网站',py:'jiǎntǐzì wǎngzhàn',vn:'trang web chữ giản thể'},
     {zh:'简体字版本',py:'jiǎntǐzì bǎnběn',vn:'bản chữ giản thể'},
     {zh:'用简体字',py:'yòng jiǎntǐzì',vn:'dùng chữ giản thể'},
     {zh:'学简体字',py:'xué jiǎntǐzì',vn:'học chữ giản thể'}
   ],
   patterns:[
     {s:'用简体字 + 写 / 印',m:'Viết / in bằng chữ giản thể'},
     {s:'简体字 ↔ 繁体字',m:'Chữ giản thể ↔ chữ phồn thể'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'So với chữ phồn thể, chữ giản thể dễ viết hơn nhiều.',answer:'和繁体字相比，简体字好写多了。',answerPy:'Hé fántǐzì xiāngbǐ, jiǎntǐzì hǎoxiě duō le.',
      note:'和……相比 (ngữ pháp bài này) + Adj + 多了.',pair:'Adj + 多了'},
     {promptLang:'vi',prompt:'Không phải tất cả những người nói tiếng Hán đều dùng chữ giản thể, chẳng hạn người Hồng Kông quen dùng chữ phồn thể.',answer:'并不是所有说汉语的人都用简体字，比如香港人就习惯用繁体字。',answerPy:'Bìng bú shì suǒyǒu shuō Hànyǔ de rén dōu yòng jiǎntǐzì, bǐrú Xiānggǎngrén jiù xíguàn yòng fántǐzì.',
      note:'并不是所有……都……: không phải tất cả … đều … (phủ định bộ phận).',pair:'并不是所有……都……'}
   ]},

  {n:47,zh:'卫星',py:'wèixīng',pos:'Danh từ',vn:'vệ tinh',hv:'vệ tinh',em:'🛰️',lesson:1,
   explain:['Thiên thể quay quanh một hành tinh (Mặt Trăng là vệ tinh của Trái Đất).','Vệ tinh nhân tạo (人造卫星): 发射卫星, 卫星导航, 卫星电视; lượng từ 颗.'],
   usage:'发射卫星; 人造卫星; 卫星 + 导航 / 电视 / 地图 / 信号.',
   collo:['卫星导航','人造卫星','发射卫星','卫星地图'],
   ex_zh:'月亮是地球唯一的天然卫星。',ex_py:'Yuèliang shì dìqiú wéiyī de tiānrán wèixīng.',ex_vn:'Mặt Trăng là vệ tinh tự nhiên duy nhất của Trái Đất.',
   exList:[
     {zh:'卫星导航系统的广泛应用，使得人们不管走到哪儿，都犹如有位随身的向导。',py:'Wèixīng dǎoháng xìtǒng de guǎngfàn yìngyòng, shǐde rénmen bùguǎn zǒudào nǎr, dōu yóurú yǒu wèi suíshēn de xiàngdǎo.',vn:'Hệ thống định vị vệ tinh được ứng dụng rộng rãi khiến người ta dù đi đến đâu cũng như có một người dẫn đường theo bên mình.'},
     {zh:'月亮是地球唯一的天然卫星。',py:'Yuèliang shì dìqiú wéiyī de tiānrán wèixīng.',vn:'Mặt Trăng là vệ tinh tự nhiên duy nhất của Trái Đất.'},
     {zh:'越南已经成功发射了好几颗卫星。',py:'Yuènán yǐjīng chénggōng fāshèle hǎo jǐ kē wèixīng.',vn:'Việt Nam đã phóng thành công mấy vệ tinh.'}
   ],
   colloFull:[
     {zh:'卫星导航',py:'wèixīng dǎoháng',vn:'định vị vệ tinh'},
     {zh:'人造卫星',py:'rénzào wèixīng',vn:'vệ tinh nhân tạo'},
     {zh:'发射卫星',py:'fāshè wèixīng',vn:'phóng vệ tinh'},
     {zh:'卫星地图',py:'wèixīng dìtú',vn:'bản đồ vệ tinh'},
     {zh:'卫星电视',py:'wèixīng diànshì',vn:'truyền hình vệ tinh'}
   ],
   patterns:[
     {s:'发射 + (一颗) 卫星',m:'Phóng (một) vệ tinh — lượng từ 颗'},
     {s:'卫星 + 导航 / 地图 / 信号',m:'Định vị / bản đồ / tín hiệu vệ tinh'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nhờ có bản đồ vệ tinh, chúng tôi đã nhanh chóng tìm được ngôi làng nhỏ đó.',answer:'多亏了卫星地图，我们很快就找到了那个小村子。',answerPy:'Duōkuīle wèixīng dìtú, wǒmen hěn kuài jiù zhǎodàole nàge xiǎo cūnzi.',
      note:'多亏 = may nhờ có …; 很快就……了.',pair:'多亏……'},
     {promptLang:'vi',prompt:'Một khi tín hiệu vệ tinh bị gián đoạn, hệ thống định vị sẽ không dùng được nữa.',answer:'一旦卫星信号中断，导航系统就无法使用了。',answerPy:'Yídàn wèixīng xìnhào zhōngduàn, dǎoháng xìtǒng jiù wúfǎ shǐyòng le.',
      note:'一旦……就……: một khi … thì …; 无法 = không thể.',pair:'一旦……就……'}
   ]},

  {n:48,zh:'导航',py:'dǎoháng',pos:'Động từ',vn:'dẫn đường, định vị',hv:'đạo hàng',em:'📍',lesson:1,
   explain:['Dẫn đường cho tàu thuyền, máy bay, xe cộ bằng thiết bị (ra-đa, vệ tinh…).','Ngày nay chủ yếu chỉ việc định vị, chỉ đường bằng điện thoại / GPS: 用手机导航, 导航系统, 开导航.'],
   usage:'卫星导航; 导航 + 系统 / 软件; 用手机导航; 开导航.',
   collo:['卫星导航','导航系统','手机导航','开导航'],
   ex_zh:'开车去陌生的地方，最好开着导航。',ex_py:'Kāichē qù mòshēng de dìfang, zuìhǎo kāizhe dǎoháng.',ex_vn:'Lái xe đến nơi lạ, tốt nhất nên bật định vị.',
   exList:[
     {zh:'卫星导航系统的广泛应用，使得人们不管走到哪儿，都犹如有位随身的向导。',py:'Wèixīng dǎoháng xìtǒng de guǎngfàn yìngyòng, shǐde rénmen bùguǎn zǒudào nǎr, dōu yóurú yǒu wèi suíshēn de xiàngdǎo.',vn:'Hệ thống định vị vệ tinh được ứng dụng rộng rãi khiến người ta dù đi đến đâu cũng như có một người dẫn đường theo bên mình.'},
     {zh:'开车去陌生的地方，最好开着导航。',py:'Kāichē qù mòshēng de dìfang, zuìhǎo kāizhe dǎoháng.',vn:'Lái xe đến nơi lạ, tốt nhất nên bật định vị.'},
     {zh:'有了手机导航，我再也不怕迷路了。',py:'Yǒule shǒujī dǎoháng, wǒ zài yě bú pà mílù le.',vn:'Có định vị trên điện thoại rồi, tôi chẳng bao giờ sợ lạc đường nữa.'}
   ],
   colloFull:[
     {zh:'卫星导航',py:'wèixīng dǎoháng',vn:'định vị vệ tinh'},
     {zh:'导航系统',py:'dǎoháng xìtǒng',vn:'hệ thống định vị'},
     {zh:'手机导航',py:'shǒujī dǎoháng',vn:'định vị trên điện thoại'},
     {zh:'开导航',py:'kāi dǎoháng',vn:'bật định vị'},
     {zh:'导航软件',py:'dǎoháng ruǎnjiàn',vn:'phần mềm chỉ đường'}
   ],
   patterns:[
     {s:'用 / 开 + 导航',m:'Dùng / bật định vị'},
     {s:'卫星导航系统',m:'Hệ thống định vị vệ tinh'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Định vị chỉ sai đường, khiến chúng tôi phải đi vòng thêm nửa tiếng.',answer:'导航指错了路，害得我们多绕了半个小时。',answerPy:'Dǎoháng zhǐcuòle lù, hài de wǒmen duō ràole bàn ge xiǎoshí.',
      note:'害得 + ai + V: khiến ai phải chịu hậu quả xấu; 多 + V = V thêm.',pair:'害得……'},
     {promptLang:'vi',prompt:'Định vị có tiện đến mấy cũng không thể hoàn toàn dựa dẫm vào nó.',answer:'导航再方便，也不能完全依赖它。',answerPy:'Dǎoháng zài fāngbiàn, yě bù néng wánquán yīlài tā.',
      note:'再……也……: dù … đến mấy cũng ….',pair:'再……也……'}
   ]},

  {n:49,zh:'向导',py:'xiàngdǎo',pos:'Danh từ',vn:'người dẫn đường',hv:'hướng đạo',em:'🚶',lesson:1,
   explain:['Người thông thạo đường đi, dẫn người khác đi (vào núi, vào rừng, đến nơi lạ).','Nghĩa bóng: người chỉ lối. Khác với 导游 (hướng dẫn viên du lịch chuyên nghiệp).'],
   usage:'当向导; 请 / 找 + 向导; 随身的向导; 本地向导.',
   collo:['当向导','请向导','随身的向导','本地向导'],
   ex_zh:'进山之前，我们请了一位当地的向导。',ex_py:'Jìn shān zhīqián, wǒmen qǐngle yí wèi dāngdì de xiàngdǎo.',ex_vn:'Trước khi vào núi, chúng tôi đã thuê một người dẫn đường địa phương.',
   exList:[
     {zh:'卫星导航系统的广泛应用，使得人们不管走到哪儿，都犹如有位随身的向导。',py:'Wèixīng dǎoháng xìtǒng de guǎngfàn yìngyòng, shǐde rénmen bùguǎn zǒudào nǎr, dōu yóurú yǒu wèi suíshēn de xiàngdǎo.',vn:'Hệ thống định vị vệ tinh được ứng dụng rộng rãi khiến người ta dù đi đến đâu cũng như có một người dẫn đường theo bên mình.'},
     {zh:'进山之前，我们请了一位当地的向导。',py:'Jìn shān zhīqián, wǒmen qǐngle yí wèi dāngdì de xiàngdǎo.',vn:'Trước khi vào núi, chúng tôi đã thuê một người dẫn đường địa phương.'},
     {zh:'周末我给来河内玩儿的中国朋友当向导。',py:'Zhōumò wǒ gěi lái Hénèi wánr de Zhōngguó péngyou dāng xiàngdǎo.',vn:'Cuối tuần tôi làm người dẫn đường cho người bạn Trung Quốc đến Hà Nội chơi.'}
   ],
   colloFull:[
     {zh:'当向导',py:'dāng xiàngdǎo',vn:'làm người dẫn đường'},
     {zh:'请向导',py:'qǐng xiàngdǎo',vn:'thuê người dẫn đường'},
     {zh:'随身的向导',py:'suíshēn de xiàngdǎo',vn:'người dẫn đường theo bên mình'},
     {zh:'本地向导',py:'běndì xiàngdǎo',vn:'người dẫn đường địa phương'}
   ],
   patterns:[
     {s:'给 + ai + 当向导',m:'Làm người dẫn đường cho ai'},
     {s:'请 + (一位) + 向导',m:'Thuê một người dẫn đường'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nếu không có người dẫn đường, chúng tôi đã lạc trong rừng từ lâu rồi.',answer:'要不是有向导，我们早就在森林里迷路了。',answerPy:'Yàobushì yǒu xiàngdǎo, wǒmen zǎojiù zài sēnlín li mílù le.',
      note:'要不是……，早就……了: nếu không có … thì đã … từ lâu rồi.',pair:'早就……了'},
     {promptLang:'vi',prompt:'Người dẫn đường không những dẫn đường cho chúng tôi mà còn kể cho chúng tôi nghe nhiều truyền thuyết địa phương.',answer:'向导不但给我们带路，还给我们讲了很多当地的传说。',answerPy:'Xiàngdǎo búdàn gěi wǒmen dài lù, hái gěi wǒmen jiǎngle hěn duō dāngdì de chuánshuō.',
      note:'不但……还……: không những … mà còn …; 带路 = dẫn đường.',pair:'不但……还……'}
   ]},

  {n:50,zh:'租赁',py:'zūlìn',pos:'Động từ',vn:'thuê, cho thuê',hv:'tô nhẫm',em:'🔑',lesson:1,
   explain:['Thuê hoặc cho thuê (nhà, xe, thiết bị…) theo hợp đồng.','Văn viết, thương mại: 汽车租赁公司, 租赁合同, 设备租赁; khẩu ngữ dùng 租.'],
   usage:'……租赁公司; 租赁合同; 汽车 / 设备 / 房屋 + 租赁.',
   collo:['汽车租赁公司','租赁合同','租赁业务','房屋租赁'],
   ex_zh:'签租赁合同之前，一定要看清楚每一条内容。',ex_py:'Qiān zūlìn hétong zhīqián, yídìng yào kàn qīngchu měi yì tiáo nèiróng.',ex_vn:'Trước khi ký hợp đồng thuê, nhất định phải đọc kỹ từng điều khoản.',
   exList:[
     {zh:'说得夸张点儿，到汽车租赁公司租上辆汽车，带上顶帐篷，就算走到天边，你都不用发愁。',py:'Shuō de kuāzhāng diǎnr, dào qìchē zūlìn gōngsī zūshàng liàng qìchē, dàishàng dǐng zhàngpeng, jiùsuàn zǒudào tiānbiān, nǐ dōu bú yòng fāchóu.',vn:'Nói hơi quá một chút thì đến công ty cho thuê ô tô thuê một chiếc xe, mang theo một cái lều, dù có đi đến tận chân trời, bạn cũng chẳng phải lo.'},
     {zh:'签租赁合同之前，一定要看清楚每一条内容。',py:'Qiān zūlìn hétong zhīqián, yídìng yào kàn qīngchu měi yì tiáo nèiróng.',vn:'Trước khi ký hợp đồng thuê, nhất định phải đọc kỹ từng điều khoản.'},
     {zh:'这家公司主要从事设备租赁业务。',py:'Zhè jiā gōngsī zhǔyào cóngshì shèbèi zūlìn yèwù.',vn:'Công ty này chủ yếu kinh doanh dịch vụ cho thuê thiết bị.'}
   ],
   colloFull:[
     {zh:'汽车租赁公司',py:'qìchē zūlìn gōngsī',vn:'công ty cho thuê ô tô'},
     {zh:'租赁合同',py:'zūlìn hétong',vn:'hợp đồng thuê'},
     {zh:'租赁业务',py:'zūlìn yèwù',vn:'dịch vụ cho thuê'},
     {zh:'房屋租赁',py:'fángwū zūlìn',vn:'cho thuê nhà'},
     {zh:'设备租赁',py:'shèbèi zūlìn',vn:'cho thuê thiết bị'}
   ],
   patterns:[
     {s:'……租赁公司',m:'Công ty cho thuê …'},
     {s:'签(订)租赁合同',m:'Ký hợp đồng thuê'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Thuê xe qua công ty cho thuê tuy đắt hơn một chút, nhưng an toàn hơn.',answer:'通过租赁公司租车虽然贵一点儿，但是更安全。',answerPy:'Tōngguò zūlìn gōngsī zū chē suīrán guì yìdiǎnr, dànshì gèng ānquán.',
      note:'通过 + phương thức = thông qua …; Adj + 一点儿.',pair:'通过……'},
     {promptLang:'vi',prompt:'Nếu hợp đồng thuê hết hạn mà không ký tiếp, chủ nhà có quyền lấy lại nhà.',answer:'如果租赁合同到期后不续签，房东就有权把房子收回。',answerPy:'Rúguǒ zūlìn hétong dàoqī hòu bú xùqiān, fángdōng jiù yǒu quán bǎ fángzi shōuhuí.',
      note:'Câu chữ 把: 把 + tân ngữ + V + bổ ngữ (收回); 有权 = có quyền.',pair:'câu chữ 把'}
   ]},

  {n:51,zh:'帐篷',py:'zhàngpeng',pos:'Danh từ',vn:'lều',hv:'trướng bồng',em:'⛺',lesson:1,
   explain:['Lều bằng vải, nhựa… dựng tạm để ở ngoài trời.','Lượng từ 顶 (一顶帐篷 = một cái lều); động từ đi kèm: 搭 / 支 + 帐篷, 住帐篷.'],
   usage:'一顶帐篷; 搭 / 支 + 帐篷; 在帐篷里过夜; 带上帐篷.',
   collo:['一顶帐篷','搭帐篷','带上帐篷','在帐篷里'],
   ex_zh:'我们在湖边搭了一顶帐篷，在那里过了一夜。',ex_py:'Wǒmen zài hú biān dāle yì dǐng zhàngpeng, zài nàlǐ guòle yí yè.',ex_vn:'Chúng tôi dựng một cái lều bên hồ và qua đêm ở đó.',
   exList:[
     {zh:'到汽车租赁公司租上辆汽车，带上顶帐篷，就算走到天边，你都不用发愁。',py:'Dào qìchē zūlìn gōngsī zūshàng liàng qìchē, dàishàng dǐng zhàngpeng, jiùsuàn zǒudào tiānbiān, nǐ dōu bú yòng fāchóu.',vn:'Đến công ty cho thuê ô tô thuê một chiếc xe, mang theo một cái lều, dù có đi đến tận chân trời, bạn cũng chẳng phải lo.'},
     {zh:'我们在湖边搭了一顶帐篷，在那里过了一夜。',py:'Wǒmen zài hú biān dāle yì dǐng zhàngpeng, zài nàlǐ guòle yí yè.',vn:'Chúng tôi dựng một cái lều bên hồ và qua đêm ở đó.'},
     {zh:'第一次搭帐篷，我们花了一个多小时才搭好。',py:'Dì-yī cì dā zhàngpeng, wǒmen huāle yí ge duō xiǎoshí cái dāhǎo.',vn:'Lần đầu dựng lều, chúng tôi mất hơn một tiếng mới dựng xong.'}
   ],
   colloFull:[
     {zh:'一顶帐篷',py:'yì dǐng zhàngpeng',vn:'một cái lều'},
     {zh:'搭帐篷',py:'dā zhàngpeng',vn:'dựng lều'},
     {zh:'带上帐篷',py:'dàishàng zhàngpeng',vn:'mang theo lều'},
     {zh:'在帐篷里',py:'zài zhàngpeng li',vn:'trong lều'},
     {zh:'收帐篷',py:'shōu zhàngpeng',vn:'thu dọn lều'}
   ],
   patterns:[
     {s:'搭 / 支 + (一顶) 帐篷',m:'Dựng (một cái) lều — lượng từ 顶'},
     {s:'在帐篷里 + 过夜 / 睡觉',m:'Qua đêm / ngủ trong lều'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Trời bỗng đổ mưa to, may mà chúng tôi đã dựng lều xong từ trước.',answer:'天突然下起了大雨，幸亏我们提前把帐篷搭好了。',answerPy:'Tiān tūrán xiàqǐle dàyǔ, xìngkuī wǒmen tíqián bǎ zhàngpeng dāhǎo le.',
      note:'幸亏 = may mà; V + 起 (下起了大雨) = bắt đầu ….',pair:'幸亏……'},
     {promptLang:'vi',prompt:'Ngủ trong lều tuy không thoải mái bằng khách sạn, nhưng có thể ngắm cả bầu trời đầy sao.',answer:'睡在帐篷里虽然没有酒店舒服，但是能看到满天的星星。',answerPy:'Shuì zài zhàngpeng li suīrán méiyǒu jiǔdiàn shūfu, dànshì néng kàndào mǎn tiān de xīngxing.',
      note:'A 没有 B + Adj: A không … bằng B.',pair:'A 没有 B + Adj'}
   ]}
];

var dialogData = [
  {scene:'课文 · 从旅游指南看世事变迁',
   preQuiz:[
     {q:'最早的人类旅行，更准确地说应该叫什么？',opts:['游山玩水','迁徙','出国旅游'],ans:1},
     {q:'那时的人们为什么不得不远离居住地？',opts:['天气变化、食物短缺或者有敌人侵犯','为了游山玩水','为了寻找旅游指南'],ans:0},
     {q:'什么发明以后，中国有了海外旅行者？',opts:['汽车','卫星导航','指南针'],ans:2},
     {q:'中国最早的旅游指南是哪一年问世的？',opts:['1978年','1898年','1999年'],ans:1},
     {q:'中国最早的旅游指南是一本什么样的书？',opts:['很厚的精装书','只有外文版的书','携带方便的口袋书'],ans:2},
     {q:'作者在序言中说哪个城市“异常繁华”？',opts:['天津','北京','上海'],ans:0},
     {q:'《北平旅行指南》有什么特点？',opts:['趣味性强，实用价值高','只介绍名胜古迹','只有中文版本'],ans:0},
     {q:'改革开放前，旅游是什么的延伸和补充？',opts:['经济产业','教育事业','外交事业'],ans:2},
     {q:'开始，旅游类书籍的服务对象主要是谁？',opts:['中国学生','外国游客','商人'],ans:1},
     {q:'1999年以后，游客中的主流变成了谁？',opts:['中国人','外国人','背包客'],ans:0},
     {q:'现在最受欢迎的旅游方式是什么？',opts:['跟团游','商务旅行','自助游'],ans:2},
     {q:'和过去相比，游客关注的地方有什么变化？',opts:['只关注著名旅游城市','偏僻省份、沿海城市、乡镇也成了感兴趣的地方','不再需要旅游指南'],ans:1},
     {q:'卫星导航系统让人们感觉怎么样？',opts:['更容易迷路','犹如有位随身的向导','再也不需要旅行了'],ans:1}
   ],
   lines:[
    {sp:0,zh:'人类一向与旅游共存。从有了人类，就有了旅行。',
     py:'Rénlèi yíxiàng yǔ lǚyóu gòngcún. Cóng yǒule rénlèi, jiù yǒule lǚxíng.',
     vn:'Loài người xưa nay vẫn luôn gắn bó cùng du lịch. Từ khi có loài người là đã có những chuyến đi.'},
    {sp:0,zh:'起初，人类旅行更准确地说，应该叫迁徙。天气变化、食物短缺，或者有敌人侵犯，人们不得不远离居住地，寻找能够安居的地方，那时的旅行纯粹是生存和安全的需要。',
     py:'Qǐchū, rénlèi lǚxíng gèng zhǔnquè de shuō, yīnggāi jiào qiānxǐ. Tiānqì biànhuà, shíwù duǎnquē, huòzhě yǒu dírén qīnfàn, rénmen bùdébù yuǎnlí jūzhùdì, xúnzhǎo nénggòu ānjū de dìfang, nà shí de lǚxíng chúncuì shì shēngcún hé ānquán de xūyào.',
     vn:'Thuở ban đầu, việc đi lại của loài người nói chính xác hơn thì nên gọi là di cư. Thời tiết thay đổi, thức ăn khan hiếm, hoặc có kẻ thù xâm phạm, con người buộc phải rời xa nơi cư trú, đi tìm nơi có thể an cư; việc đi lại thời đó thuần tuý là nhu cầu sinh tồn và an toàn.'},
    {sp:0,zh:'后来，古人远离家乡，去游山玩水，也就有了真正意义上的旅游。指南针发明后，中国有了海外旅行者。若干年来，旅游在世界范围内都是一个热门话题。',
     py:'Hòulái, gǔrén yuǎnlí jiāxiāng, qù yóushān-wánshuǐ, yě jiù yǒule zhēnzhèng yìyì shang de lǚyóu. Zhǐnánzhēn fāmíng hòu, Zhōngguó yǒule hǎiwài lǚxíngzhě. Ruògān nián lái, lǚyóu zài shìjiè fànwéi nèi dōu shì yí ge rèmén huàtí.',
     vn:'Về sau, người xưa rời xa quê hương đi ngao du sơn thuỷ, thế là có du lịch theo đúng nghĩa. Sau khi la bàn được phát minh, Trung Quốc đã có những người du hành ra nước ngoài. Bao năm nay, trên phạm vi toàn thế giới, du lịch luôn là một đề tài nóng.'},
    {sp:0,zh:'一些足迹遍布世界的旅行者千方百计来到了中国，可开始，他们连一本旅游指南类的书籍都没有，可以说是困难重重。直到1898年，中国最早的旅游指南问世了。那是一本携带方便的口袋书，作者在序言中说“天津异常繁华”，为便于外地人出行，他搜集了当地文化习俗以及车船码头等信息，做了简要介绍。之后，一度引起轰动的旅游指南要算《北平旅行指南》了，它趣味性强，实用价值高。这本书是在中外人士的共同努力下完成的，中、外文版本同时发行，真正方便了读者。',
     py:'Yìxiē zújì biànbù shìjiè de lǚxíngzhě qiānfāng-bǎijì láidàole Zhōngguó, kě kāishǐ, tāmen lián yì běn lǚyóu zhǐnán lèi de shūjí dōu méiyǒu, kěyǐ shuō shì kùnnan chóngchóng. Zhídào yī bā jiǔ bā nián, Zhōngguó zuì zǎo de lǚyóu zhǐnán wènshì le. Nà shì yì běn xiédài fāngbiàn de kǒudàishū, zuòzhě zài xùyán zhōng shuō "Tiānjīn yìcháng fánhuá", wèi biànyú wàidìrén chūxíng, tā sōujíle dāngdì wénhuà xísú yǐjí chē chuán mǎtou děng xìnxī, zuòle jiǎnyào jièshào. Zhīhòu, yídù yǐnqǐ hōngdòng de lǚyóu zhǐnán yào suàn "Běipíng Lǚxíng Zhǐnán" le, tā qùwèixìng qiáng, shíyòng jiàzhí gāo. Zhè běn shū shì zài Zhōng-wài rénshì de gòngtóng nǔlì xià wánchéng de, Zhōng, wàiwén bǎnběn tóngshí fāxíng, zhēnzhèng fāngbiànle dúzhě.',
     vn:'Một số nhà du hành có dấu chân khắp thế giới đã tìm mọi cách đến được Trung Quốc, nhưng lúc đầu, đến một cuốn sách thuộc loại hướng dẫn du lịch họ cũng không có, có thể nói là khó khăn chồng chất. Mãi đến năm 1898, cuốn sách hướng dẫn du lịch sớm nhất của Trung Quốc mới ra đời. Đó là một cuốn sách bỏ túi tiện mang theo; trong lời tựa, tác giả viết "Thiên Tân vô cùng phồn hoa" (Thiên Tân: thành phố trực thuộc trung ương, trung tâm kinh tế và thành phố cảng quan trọng ở phía bắc Trung Quốc); để người nơi khác đi lại thuận tiện, ông đã thu thập thông tin về văn hoá, phong tục địa phương cùng xe, thuyền, bến bãi…, giới thiệu một cách ngắn gọn. Sau đó, cuốn sách hướng dẫn du lịch từng một thời gây chấn động phải kể đến "Sách hướng dẫn du lịch Bắc Bình" (Bắc Bình là tên cũ của Bắc Kinh); cuốn sách rất thú vị, giá trị thực dụng cao. Nó được hoàn thành nhờ sự nỗ lực chung của các nhân sĩ Trung Quốc và nước ngoài, bản tiếng Trung và bản tiếng nước ngoài được phát hành cùng lúc, thực sự tạo thuận lợi cho độc giả.'},
    {sp:0,zh:'改革开放前，旅游是中国外交事业的延伸和补充。改革开放以后，旅游真正作为经济型产业受到重视，旅游指南也随着旅游业的振兴变得越来越丰富，越来越全面。',
     py:'Gǎigé kāifàng qián, lǚyóu shì Zhōngguó wàijiāo shìyè de yánshēn hé bǔchōng. Gǎigé kāifàng yǐhòu, lǚyóu zhēnzhèng zuòwéi jīngjìxíng chǎnyè shòudào zhòngshì, lǚyóu zhǐnán yě suízhe lǚyóuyè de zhènxīng biàn de yuè lái yuè fēngfù, yuè lái yuè quánmiàn.',
     vn:'Trước cải cách mở cửa, du lịch là sự nối dài và bổ sung cho công cuộc ngoại giao của Trung Quốc. Sau cải cách mở cửa, du lịch mới thực sự được coi trọng như một ngành kinh tế; sách hướng dẫn du lịch cũng theo đà chấn hưng của ngành du lịch mà ngày càng phong phú, ngày càng toàn diện.'},
    {sp:0,zh:'开始，由于游客主要是外国人，旅游类书籍便把服务对象锁定为他们。1999年以后，中国人逐渐成为游客中的主流，国内旅游和出国旅游都变得犹如家常便饭，旅游书籍也就扩大了服务对象，调整了服务宗旨，增加了相关栏目，变得越来越接地气，越来越人性化了。',
     py:'Kāishǐ, yóuyú yóukè zhǔyào shì wàiguórén, lǚyóu lèi shūjí biàn bǎ fúwù duìxiàng suǒdìng wéi tāmen. Yī jiǔ jiǔ jiǔ nián yǐhòu, Zhōngguórén zhújiàn chéngwéi yóukè zhōng de zhǔliú, guónèi lǚyóu hé chūguó lǚyóu dōu biàn de yóurú jiāchángbiànfàn, lǚyóu shūjí yě jiù kuòdàle fúwù duìxiàng, tiáozhěngle fúwù zōngzhǐ, zēngjiāle xiāngguān lánmù, biàn de yuè lái yuè jiē dìqì, yuè lái yuè rénxìnghuà le.',
     vn:'Lúc đầu, vì du khách chủ yếu là người nước ngoài nên sách du lịch nhắm đối tượng phục vụ vào họ. Sau năm 1999, người Trung Quốc dần trở thành bộ phận chủ yếu trong số du khách, du lịch trong nước và du lịch nước ngoài đều trở nên như chuyện cơm bữa; sách du lịch cũng theo đó mở rộng đối tượng phục vụ, điều chỉnh tôn chỉ phục vụ, thêm các chuyên mục liên quan, trở nên ngày càng gần gũi đời thường, ngày càng lấy con người làm gốc.'},
    {sp:0,zh:'现在，最受欢迎的是自助游。背包客、自由行已成为中国人旅游最重要的方式之一。和过去相比，游客不再仅关注著名旅游城市，偏僻省份、沿海城市、秀美的乡镇，都成了游客感兴趣的地方。旅游指南不仅介绍地理环境、风土人情、人文特色、著名风景，还会介绍当地饮食、宗教、考古新发现等，青年旅社、经济型酒店、当地交通等内容更是必不可少。帮助读者选择最佳旅游时间，甚至为游客提供经费预算方面的信息，旅游指南绝对是游客的好参谋。',
     py:'Xiànzài, zuì shòu huānyíng de shì zìzhùyóu. Bēibāokè, zìyóuxíng yǐ chéngwéi Zhōngguórén lǚyóu zuì zhòngyào de fāngshì zhī yī. Hé guòqù xiāngbǐ, yóukè bú zài jǐn guānzhù zhùmíng lǚyóu chéngshì, piānpì shěngfèn, yánhǎi chéngshì, xiùměi de xiāngzhèn, dōu chéngle yóukè gǎn xìngqù de dìfang. Lǚyóu zhǐnán bùjǐn jièshào dìlǐ huánjìng, fēngtǔ rénqíng, rénwén tèsè, zhùmíng fēngjǐng, hái huì jièshào dāngdì yǐnshí, zōngjiào, kǎogǔ xīn fāxiàn děng, qīngnián lǚshè, jīngjìxíng jiǔdiàn, dāngdì jiāotōng děng nèiróng gèng shì bì bù kě shǎo. Bāngzhù dúzhě xuǎnzé zuì jiā lǚyóu shíjiān, shènzhì wèi yóukè tígōng jīngfèi yùsuàn fāngmiàn de xìnxī, lǚyóu zhǐnán juéduì shì yóukè de hǎo cānmóu.',
     vn:'Hiện nay, được ưa chuộng nhất là du lịch tự túc. Du lịch ba lô, du lịch tự do đã trở thành một trong những hình thức du lịch quan trọng nhất của người Trung Quốc. So với trước đây, du khách không còn chỉ quan tâm đến những thành phố du lịch nổi tiếng; những tỉnh xa xôi, thành phố ven biển, thị trấn xinh đẹp đều trở thành nơi du khách quan tâm. Sách hướng dẫn du lịch không chỉ giới thiệu môi trường địa lý, phong thổ nhân tình, đặc sắc văn hoá, danh thắng nổi tiếng, mà còn giới thiệu ẩm thực địa phương, tôn giáo, những phát hiện khảo cổ mới…; những nội dung như nhà nghỉ thanh niên, khách sạn bình dân, giao thông địa phương lại càng không thể thiếu. Giúp độc giả chọn thời điểm du lịch lý tưởng nhất, thậm chí cung cấp cho du khách thông tin về dự toán kinh phí — sách hướng dẫn du lịch tuyệt đối là người cố vấn đắc lực của du khách.'},
    {sp:0,zh:'如今，繁体字、简体字旅游网站的开通，更大范围地方便了游客。卫星导航系统的广泛应用，使得人们不管走到哪儿，都犹如有位随身的向导。说得夸张点儿，到汽车租赁公司租上辆汽车，带上顶帐篷，就算走到天边，你都不用发愁。',
     py:'Rújīn, fántǐzì, jiǎntǐzì lǚyóu wǎngzhàn de kāitōng, gèng dà fànwéi de fāngbiànle yóukè. Wèixīng dǎoháng xìtǒng de guǎngfàn yìngyòng, shǐde rénmen bùguǎn zǒudào nǎr, dōu yóurú yǒu wèi suíshēn de xiàngdǎo. Shuō de kuāzhāng diǎnr, dào qìchē zūlìn gōngsī zūshàng liàng qìchē, dàishàng dǐng zhàngpeng, jiùsuàn zǒudào tiānbiān, nǐ dōu bú yòng fāchóu.',
     vn:'Ngày nay, việc mở các trang web du lịch chữ phồn thể, chữ giản thể đã tạo thuận lợi cho du khách trên phạm vi rộng hơn. Hệ thống định vị vệ tinh được ứng dụng rộng rãi khiến người ta dù đi đến đâu cũng như có một người dẫn đường theo bên mình. Nói hơi quá một chút thì đến công ty cho thuê ô tô thuê một chiếc xe, mang theo một cái lều, dù có đi đến tận chân trời, bạn cũng chẳng phải lo.'}
   ]}
];

// ══════════════════════════════════════════
// PHÂN BIỆT TỪ GẦN NGHĨA 词语辨析
// Cặp 一向—一度 lấy từ sách (tr. 141, 做一做 theo đáp án sách); 起初—当初 (当初 ôn bài 6), 繁华—繁荣 tự thêm
// ══════════════════════════════════════════
var synonymData = [
  {pair:'一向 — 一度',
   same:'Khi làm phó từ, cả hai đều biểu thị phạm vi thời gian, nhưng thường KHÔNG thay thế cho nhau được.',
   sameEx:{zh:'他一向很健康，去年却一度病得很厉害。',vn:'Anh ấy xưa nay vẫn khoẻ mạnh, vậy mà năm ngoái có một dạo ốm rất nặng.'},
   items:[
     {word:'一向',points:[
       'Từ quá khứ đến hiện tại luôn như vậy (= 一直, 向来): 一向好客, 一向认真.',
       'Dùng khi hỏi thăm "từ lần gặp trước đến nay": 你一向好啊！/ 你一向可好？',
       'Không có cách dùng số lượng từ.'
     ],ex:[{zh:'我们家一向好客，来了客人总是热情招待。',vn:'Nhà chúng tôi xưa nay vốn hiếu khách, có khách đến là luôn tiếp đãi nhiệt tình.'},
          {zh:'你一向好啊！',vn:'Dạo này anh vẫn khỏe chứ!'}]},
     {word:'一度',points:[
       'Trong quá khứ có một khoảng thời gian đã xảy ra việc gì, đã từng có một lần (nay đã khác): 一度病得很厉害.',
       'Không dùng để hỏi thăm.',
       'Còn là số lượng từ: một lần, một đợt — 一年一度 (mỗi năm một lần).'
     ],ex:[{zh:'去年，老师一度病得很厉害，现在好多了。',vn:'Năm ngoái, thầy giáo có một dạo ốm rất nặng, bây giờ đã đỡ nhiều rồi.'},
          {zh:'一年一度的春节又到了。',vn:'Tết Nguyên đán mỗi năm một lần lại đến rồi.'}]}
   ],
   quiz:[
     {sentence:'妹妹＿＿喜欢安静，不爱去热闹的地方。',options:['一向','一度'],answer:0,why:'Tính cách từ trước đến nay không đổi → 一向.'},
     {sentence:'因为成绩不好，他＿＿想退学，幸亏老师及时鼓励了他。',options:['一向','一度'],answer:1,why:'Chuyện xảy ra trong một thời gian ở quá khứ, nay đã khác → 一度.'},
     {sentence:'一年＿＿的中秋节快到了。',options:['一向','一度'],answer:1,why:'Cụm cố định 一年一度 — 一度 làm số lượng từ.'},
     {sentence:'张老师，好久不见，您＿＿可好？',options:['一向','一度'],answer:0,why:'Lời hỏi thăm "từ lần gặp trước đến nay" → 一向.'}
   ],
   sgk:{
     chung:{t:'做副词时，都表示时间范围，但一般不能换用。',vn:'Khi làm phó từ, đều biểu thị phạm vi thời gian, nhưng thường không thay thế cho nhau được.',vd:'',vdVn:''},
     khac:[
       {a:{t:'表示从过去到现在，一直。',vn:'Biểu thị từ quá khứ đến hiện tại, luôn luôn.',vd:'我们家一向好客，来了客人总是热情招待。',vdVn:'Nhà chúng tôi xưa nay vốn hiếu khách, có khách đến là luôn tiếp đãi nhiệt tình.'},
        b:{t:'表示过去有段时间发生过，有过一次。',vn:'Biểu thị trong quá khứ có một khoảng thời gian đã xảy ra, đã từng có một lần.',vd:'去年，老师一度病得很厉害，现在好多了。',vdVn:'Năm ngoái, thầy giáo có một dạo ốm rất nặng, bây giờ đã đỡ nhiều rồi.'}},
       {a:{t:'表示从上次见面到现在。',vn:'Biểu thị khoảng thời gian từ lần gặp trước đến nay (dùng khi hỏi thăm).',vd:'你一向好啊！',vdVn:'Dạo này anh vẫn khỏe chứ!'},
        b:{t:'没有这个意思。',vn:'Không có nghĩa này.',vd:''}},
       {a:{t:'没有右边这个用法。',vn:'Không có cách dùng ở cột bên phải.',vd:''},
        b:{t:'还是数量词，表示一次、一阵。常说“一年一度”。',vn:'Còn là số lượng từ, biểu thị một lần, một đợt. Thường nói "一年一度" (mỗi năm một lần).',vd:'一年一度的春节又到了。',vdVn:'Tết Nguyên đán mỗi năm một lần lại đến rồi.'}}
     ],
     lamThu:[
       {s:'他的性格比较古怪，＿＿独来独往，不跟别人交流。',dap:[true,false],
        giai:'Tính cách, thói quen từ trước đến nay không đổi → 一向 (独来独往 = đi về một mình).'},
       {s:'一年＿＿春又到，柳树已经发芽，燕子也都飞回来了。',dap:[false,true],
        giai:'Cụm cố định 一年一度 — 一度 làm số lượng từ (mỗi năm một lần).'},
       {s:'老王，好久不见，你＿＿可好？',dap:[true,false],
        giai:'Lời hỏi thăm "từ lần gặp trước đến nay" → 一向.'},
       {s:'汉语太难了，我＿＿想放弃，但最后还是坚持下来了。',dap:[false,true],
        giai:'Chuyện xảy ra trong một thời gian ở quá khứ (có lúc muốn bỏ cuộc), nay đã khác → 一度.'}
     ]
   }},

  {pair:'起初 — 当初',
   same:'Đều là danh từ chỉ thời gian trong quá khứ ("lúc đầu, ban đầu"); đều hay đứng đầu câu và thường đối lập với hiện tại / về sau.',
   sameEx:{zh:'起初／当初我并不喜欢这个专业，后来才慢慢爱上了它。',vn:'Lúc đầu tôi hoàn toàn không thích chuyên ngành này, về sau mới dần dần yêu nó.'},
   items:[
     {word:'起初',points:[
       'Chỉ GIAI ĐOẠN ĐẦU của một quá trình, nhấn mạnh sự phát triển về sau: 起初……，后来…….',
       'Kể chuyện khách quan, trung tính; hay dùng trong văn trần thuật.',
       'Không làm định ngữ kiểu 起初的承诺; không dùng trong câu 早知今日，何必当初.'
     ],ex:[{zh:'起初，人类旅行更准确地说，应该叫迁徙。',vn:'Thuở ban đầu, việc đi lại của loài người nói chính xác hơn thì nên gọi là di cư.'},
          {zh:'起初大家都以为他在吹牛，没想到他真的做到了。',vn:'Lúc đầu mọi người đều tưởng cậu ấy nói khoác, không ngờ cậu ấy làm được thật.'}]},
     {word:'当初',points:[
       'Chỉ THỜI ĐIỂM đã xảy ra một việc cụ thể trong quá khứ ("hồi đó, lúc ấy"), thường so với hiện tại.',
       'Hay mang sắc thái tiếc nuối, trách móc: 当初你为什么不告诉我？/ 早知今日，何必当初.',
       'Làm được định ngữ: 当初的承诺, 当初的决定 (ôn bài 6).'
     ],ex:[{zh:'当初你要是听我的话，就不会这样了。',vn:'Hồi đó nếu cậu nghe lời tớ thì đã không đến nông nỗi này.'},
          {zh:'他忘了自己当初的承诺。',vn:'Anh ta đã quên lời hứa năm xưa của mình.'}]}
   ],
   quiz:[
     {sentence:'＿＿你为什么不早点儿告诉我？现在说什么都晚了。',options:['起初','当初'],answer:1,why:'Trách móc về việc cụ thể ở thời điểm đó → 当初.'},
     {sentence:'早知今日，何必＿＿？',options:['起初','当初'],answer:1,why:'Câu cố định 早知今日，何必当初 (biết thế này thì hồi đó đã chẳng làm).'},
     {sentence:'我们都不要忘记＿＿的承诺。',options:['起初','当初'],answer:1,why:'当初 làm định ngữ: 当初的承诺 = lời hứa năm xưa.'},
     {sentence:'＿＿，人们旅行纯粹是为了生存，后来才有了真正意义上的旅游。',options:['起初','当初'],answer:0,why:'Kể giai đoạn đầu của cả một quá trình phát triển, đối lập với 后来 → 起初 (câu bài khoá).'}
   ]},

  {pair:'繁华 — 繁荣',
   same:'Đều là tính từ, đều nói sự thịnh vượng, phát triển mạnh, đông vui.',
   sameEx:{zh:'这座城市越来越繁华／繁荣了。',vn:'Thành phố này ngày càng phồn hoa / thịnh vượng.'},
   items:[
     {word:'繁华',points:[
       'Nói về NƠI CHỐN cụ thể (thành phố, đường phố, khu phố): đông đúc, buôn bán sầm uất, náo nhiệt.',
       'Hay làm định ngữ: 繁华的街道, 繁华地段.',
       'Không mang tân ngữ.'
     ],ex:[{zh:'作者在序言中说“天津异常繁华”。',vn:'Tác giả viết trong lời tựa rằng "Thiên Tân vô cùng phồn hoa".'},
          {zh:'他在市中心最繁华的地段开了一家咖啡馆。',vn:'Anh ấy mở một quán cà phê ở khu sầm uất nhất trung tâm thành phố.'}]},
     {word:'繁荣',points:[
       'Nói về kinh tế, thị trường, văn hoá, đất nước… phát triển hưng thịnh (phạm vi rộng, trừu tượng).',
       'Làm được động từ mang tân ngữ: 繁荣经济, 繁荣市场 (làm cho … thịnh vượng).',
       'Kết hợp: 经济繁荣, 繁荣昌盛, 文化繁荣.'
     ],ex:[{zh:'改革开放以后，中国的经济越来越繁荣。',vn:'Sau cải cách mở cửa, kinh tế Trung Quốc ngày càng thịnh vượng.'},
          {zh:'发展旅游业可以繁荣当地经济。',vn:'Phát triển du lịch có thể làm cho kinh tế địa phương thịnh vượng.'}]}
   ],
   quiz:[
     {sentence:'南京路是上海最＿＿的商业街之一。',options:['繁华','繁荣'],answer:0,why:'Con phố cụ thể, đông đúc sầm uất → 繁华.'},
     {sentence:'政府采取了很多措施来＿＿农村经济。',options:['繁华','繁荣'],answer:1,why:'Động từ mang tân ngữ (làm cho kinh tế thịnh vượng) → 繁荣; 繁华 không mang tân ngữ.'},
     {sentence:'随着旅游业的振兴，当地的市场越来越＿＿。',options:['繁华','繁荣'],answer:1,why:'Chủ ngữ là thị trường (trừu tượng) → 繁荣.'},
     {sentence:'一到晚上，这条街就变得异常＿＿。',options:['繁华','繁荣'],answer:0,why:'Nói về con phố cụ thể náo nhiệt về đêm → 繁华.'}
   ]}
];

// ══════════════════════════════════════════
// BẮC CẦU HÁN–VIỆT
// ══════════════════════════════════════════
var hvBridgeData = {
  easy:[
    {zh:'变迁',hv:'biến thiên',vn:'đổi thay',note:'"Biến thiên của lịch sử" = 历史的变迁; 世事变迁 = thế sự đổi thay.'},
    {zh:'侵犯',hv:'xâm phạm',vn:'xâm phạm',note:'Trùng khít: 侵犯隐私 = xâm phạm quyền riêng tư.'},
    {zh:'居住',hv:'cư trú',vn:'cư trú, sinh sống',note:'Trùng khít, trang trọng như tiếng Việt.'},
    {zh:'纯粹',hv:'thuần tuý',vn:'thuần tuý, chỉ đơn thuần',note:'Trùng khít.'},
    {zh:'生存',hv:'sinh tồn',vn:'sinh tồn',note:'Trùng khít: "kỹ năng sinh tồn" = 生存技能.'},
    {zh:'繁华',hv:'phồn hoa',vn:'phồn hoa, sầm uất',note:'Trùng khít: "chốn phồn hoa đô hội".'},
    {zh:'发行',hv:'phát hành',vn:'phát hành',note:'Trùng khít.'},
    {zh:'事业',hv:'sự nghiệp',vn:'sự nghiệp',note:'Trùng khít.'},
    {zh:'振兴',hv:'chấn hưng',vn:'chấn hưng',note:'Trùng khít.'},
    {zh:'宗旨',hv:'tông chỉ',vn:'tôn chỉ',note:'Tiếng Việt đọc "tôn chỉ".'},
    {zh:'沿海',hv:'duyên hải',vn:'ven biển',note:'"Duyên hải miền Trung" — 沿 đọc duyên.'},
    {zh:'宗教',hv:'tông giáo',vn:'tôn giáo',note:'Tiếng Việt đọc "tôn giáo".'},
    {zh:'考古',hv:'khảo cổ',vn:'khảo cổ',note:'Trùng khít.'},
    {zh:'经费',hv:'kinh phí',vn:'kinh phí',note:'Trùng khít.'},
    {zh:'预算',hv:'dự toán',vn:'dự toán, ngân sách',note:'Trùng khít "dự toán".'},
    {zh:'卫星',hv:'vệ tinh',vn:'vệ tinh',note:'Trùng khít.'},
    {zh:'人士',hv:'nhân sĩ',vn:'nhân sĩ',note:'Trùng khít: 各界人士 = nhân sĩ các giới.'}
  ],
  idiom:[
    {zh:'千方百计',hv:'thiên phương bách kế',vn:'trăm phương nghìn kế',note:'Tiếng Việt đảo thành "trăm phương nghìn kế" — tìm đủ mọi cách.'},
    {zh:'风土人情',hv:'phong thổ nhân tình',vn:'phong tục, cảnh sắc của một vùng',note:'风土 = khí hậu, đất đai; 人情 = phong tục, lễ nghi.'},
    {zh:'游山玩水',hv:'du sơn ngoạn thuỷ',vn:'ngao du sơn thuỷ',note:'Tiếng Việt có "du sơn ngoạn thuỷ" — đi chơi ngắm cảnh.'},
    {zh:'家常便饭',hv:'gia thường tiện phạn',vn:'chuyện cơm bữa',note:'Bữa cơm thường ngày → việc xảy ra thường xuyên, bình thường.'}
  ],
  trap:[
    {zh:'趣味',hv:'thú vị',vn:'sự thú vị, hứng thú',
     warn:'BẪY: "thú vị" tiếng Việt là TÍNH TỪ (rất thú vị); 趣味 tiếng Trung là DANH TỪ. Muốn nói "rất thú vị" dùng 很有趣 / 很有意思 / 富有趣味 / 趣味性强, không nói 很趣味.'},
    {zh:'产业',hv:'sản nghiệp',vn:'ngành (kinh tế)',
     warn:'"Sản nghiệp" tiếng Việt thường là tài sản, cơ nghiệp của một người. 产业 ngày nay chủ yếu là NGÀNH kinh tế: 旅游产业 = ngành du lịch.'},
    {zh:'参谋',hv:'tham mưu',vn:'người cố vấn; góp ý',
     warn:'"Tham mưu" tiếng Việt gợi quân đội (sĩ quan tham mưu). Trong đời sống, 参谋 = người góp ý, cố vấn; 帮我参谋参谋 = góp ý giúp tôi.'},
    {zh:'向导',hv:'hướng đạo',vn:'người dẫn đường',
     warn:'"Hướng đạo" tiếng Việt gợi "hướng đạo sinh" (hướng đạo sinh tiếng Trung là 童子军). 向导 = người dẫn đường.'},
    {zh:'问世',hv:'vấn thế',vn:'ra đời, ra mắt',
     warn:'问 ở đây không phải "hỏi". 问世 = (sách, sản phẩm) ra đời, ra mắt công chúng; không mang tân ngữ.'},
    {zh:'人性',hv:'nhân tính',vn:'nhân tính; (人性化) chu đáo, lấy con người làm gốc',
     warn:'人性化 KHÔNG dịch "nhân tính hoá": 服务很人性化 = dịch vụ rất chu đáo, lấy khách hàng làm trung tâm.'}
  ]
};

// ══════════════════════════════════════════
// GHÉP TỪ — cụm trong bài khoá
// ══════════════════════════════════════════
var matchData = [
  {left:'引起',right:'轰动'},
  {left:'千方',right:'百计'},
  {left:'风土',right:'人情'},
  {left:'一顶',right:'帐篷'},
  {left:'一个偏僻的',right:'小山村'},
  {left:'遍布',right:'全国各地'},
  {left:'以服务读者为',right:'宗旨'},
  {left:'振兴',right:'当地经济'},
  {left:'尊重当地的',right:'习俗'},
  {left:'经费',right:'不足'}
];

// ══════════════════════════════════════════
// ĐIỀN TỪ — câu mới (không chép bài khoá / SGK), mỗi câu một tình huống; ôn xoáy ốc từ + ngữ pháp các bài trước
// ══════════════════════════════════════════
var fillData = [
  {pre:'看着这些老照片，爷爷不由得说起了家乡几十年来的',blank:'变迁',post:'。',hint:'(sự đổi thay)',ans:'变迁',exp:'变迁 = sự đổi thay qua một thời gian dài (của xã hội, quê hương), là danh từ: 几十年来的变迁. Ôn 不由得 (bài 2) = bất giác.'},
  {pre:'每年秋天，成千上万只鸟从北方',blank:'迁徙',post:'到南方过冬。',hint:'(di cư)',ans:'迁徙',exp:'迁徙 = di cư theo mùa (chim, thú) hoặc cả cộng đồng dời đến nơi khác; 搬家 chỉ là một gia đình chuyển nhà.'},
  {pre:'现在越来越多的老人选择',blank:'居住',post:'在环境安静的小镇上。',hint:'(cư trú, sinh sống)',ans:'居住',exp:'居住 + 在 + nơi chốn = cư trú, sinh sống — cách nói văn viết của 住.'},
  {pre:'他那么说',blank:'纯粹',post:'是开玩笑，并没有看不起你的意思。',hint:'(hoàn toàn chỉ là)',ans:'纯粹',exp:'纯粹是 + … = hoàn toàn chỉ là…, không có ý gì khác; gần nghĩa 无非 (bài 5) nhưng giọng khẳng định mạnh hơn.'},
  {pre:'在沙漠里，如果没有水，人连三天都很难',blank:'生存',post:'下去。',hint:'(sống sót, tồn tại)',ans:'生存',exp:'生存下去 = sống sót, tồn tại tiếp; 生活 là cuộc sống hằng ngày, không nhấn mạnh chuyện sống còn.'},
  {pre:'经过讨论，大家对这个计划提出了',blank:'若干',post:'条修改意见。',hint:'(một số)',ans:'若干',exp:'若干 = một số (văn viết, số lượng không nói rõ), đứng ngay trước lượng từ: 若干条 / 若干年.'},
  {pre:'世界上第一台电脑是哪一年',blank:'问世',post:'的？',hint:'(ra đời)',ans:'问世',exp:'问世 = (phát minh, sách, sản phẩm) ra đời lần đầu; chủ ngữ là vật. Người thì dùng 出生; đừng nhầm với 去世 (qua đời).'},
  {pre:'船八点开，我们七点半以前一定要赶到',blank:'码头',post:'。',hint:'(bến tàu)',ans:'码头',exp:'码头 = bến tàu, bến thuyền (nơi lên xuống thuyền); 车站 dành cho xe, 机场 dành cho máy bay.'},
  {pre:'这个问题比较复杂，我们最好听听专业',blank:'人士',post:'的意见。',hint:'(người trong nghề)',ans:'人士',exp:'人士 = người thuộc một giới / lĩnh vực (văn viết, lịch sự): 专业人士, 中外人士; không dùng để gọi một người cụ thể.'},
  {pre:'这位歌手的新唱片下个月一号正式',blank:'发行',post:'。',hint:'(phát hành)',ans:'发行',exp:'发行 = phát hành (đĩa nhạc, sách, tiền); 发表 dùng cho bài viết, ý kiến (发表文章).'},
  {pre:'这条地铁明年将',blank:'延伸',post:'到机场，到时候去机场就方便多了。',hint:'(kéo dài)',ans:'延伸',exp:'延伸 + 到 + nơi chốn = kéo dài tới…; dùng cho đường sá, phạm vi (không dùng cho thời gian như 延长).'},
  {pre:'现在在网上买东西已经成了',blank:'主流',post:'，很多年轻人很少去商店了。',hint:'(xu hướng chính)',ans:'主流',exp:'主流 = xu hướng chính, cái chiếm đa số: 成了 / 成为 + 主流.'},
  {pre:'',blank:'沿海',post:'城市经济比较发达，每年都吸引大量年轻人去工作。',hint:'(ven biển)',ans:'沿海',exp:'沿海 = ven biển, làm định ngữ trực tiếp không cần 的: 沿海城市 / 沿海地区.'},
  {pre:'我把常用的电话号码都写在本子的第一页，',blank:'便于',post:'随时查找。',hint:'(tiện cho)',ans:'便于',exp:'……，便于 + động từ = để tiện cho việc…: vế trước là cách làm, vế sau là mục đích. 便于 phải có động từ theo sau (便于查找), không nói 便于我.'},
  {pre:'雨后的空气',blank:'犹如',post:'刚被洗过一样，十分新鲜。',hint:'(giống như)',ans:'犹如',exp:'犹如 + B + 一样 / 一般 = giống hệt như B (văn viết, hay dùng khi miêu tả); bản thân 犹如 đã là động từ nên không thêm 是.'}
];

// ══════════════════════════════════════════
// SẮP XẾP CÂU — câu mới, chỉ một trật tự đúng
// ══════════════════════════════════════════
var sortData = [
  {words:['乘坐飞机时','不能','随身','携带','太多的','行李','。'],ans:'乘坐飞机时不能随身携带太多的行李。',audio:'乘坐飞机时不能随身携带太多的行李。'},
  {words:['这本书的','序言','写得','非常','动人','。'],ans:'这本书的序言写得非常动人。',audio:'这本书的序言写得非常动人。'},
  {words:['他','把','那本','旅游指南','放进了','背包里','。'],ans:'他把那本旅游指南放进了背包里。',audio:'他把那本旅游指南放进了背包里。'},
  {words:['这个','栏目的','宗旨','是','帮助','读者','解决问题','。'],ans:'这个栏目的宗旨是帮助读者解决问题。',audio:'这个栏目的宗旨是帮助读者解决问题。'},
  {words:['那家','汽车','租赁公司的','服务','特别','好','。'],ans:'那家汽车租赁公司的服务特别好。',audio:'那家汽车租赁公司的服务特别好。'},
  {words:['这座','城市','变得','越来越','繁华','了','。'],ans:'这座城市变得越来越繁华了。',audio:'这座城市变得越来越繁华了。'},
  {words:['我们','跟着','向导','走进了','那片','森林','。'],ans:'我们跟着向导走进了那片森林。',audio:'我们跟着向导走进了那片森林。'},
  {words:['他','把','这本指南','看得','犹如','宝贝','一般','。'],ans:'他把这本指南看得犹如宝贝一般。',audio:'他把这本指南看得犹如宝贝一般。'}
];

// ══════════════════════════════════════════
// CHỌN TỪ THÍCH HỢP
// ══════════════════════════════════════════
var errorFixMode = 'wordchoice';
var errorFixData = [
  {wrong:'我弟弟____很节约，今天怎么一下子买了这么贵的东西？',opts:['一向','一度','一旦','一时'],ans:0,exp:'Thói quen từ trước đến nay không đổi → 一向. 一度 là "có một dạo" (chuyện đã qua, nay khác); 一旦 là "một khi" (giả thiết); 一时 là "nhất thời".'},
  {wrong:'刚到国外时，因为听不懂当地人说话，她____想放弃留学，后来慢慢适应了。',opts:['一度','一向','一旦','从来'],ans:0,exp:'Chuyện xảy ra một thời gian trong quá khứ, nay đã khác (后来慢慢适应了) → 一度. 一向 là thói quen kéo dài đến nay; 一旦 là giả thiết; 从来 thường đi với phủ định (从来不 / 从来没).'},
  {wrong:'离下课只有五分钟了，请每个小组____地说一下讨论的结果。',opts:['简要','简直','主要','必要'],ans:0,exp:'简要地 + 说 / 介绍 = nói ngắn gọn, nêu ý chính. 简直 là "quả thực" (nhấn mạnh cảm xúc); 主要, 必要 không đứng trước 地 + động từ như vậy.'},
  {wrong:'李老师在农村教了三十年书，把一生都给了教育____。',opts:['事业','职业','作业','专业'],ans:0,exp:'教育事业 = sự nghiệp giáo dục (công việc lớn, có ý nghĩa với xã hội). 职业 là nghề để kiếm sống; 专业 là chuyên ngành học; 作业 là bài tập.'},
  {wrong:'这几年，旅游业已经成为我们省最重要的____之一。',opts:['产业','产品','企业','财产'],ans:0,exp:'Một ngành kinh tế → 产业 (旅游业 là một 产业). 产品 là sản phẩm; 企业 là một doanh nghiệp cụ thể; 财产 là tài sản.'},
  {wrong:'去别的国家旅行前，最好先了解一下当地的____文化，到了那儿才不会做出不礼貌的事。',opts:['宗教','宗旨','主流','人士'],ans:0,exp:'宗教文化 = văn hoá tôn giáo. 宗旨 (cùng âm Hán Việt "tông") là tôn chỉ, mục đích; 主流 là xu hướng chính; 人士 là nhân sĩ — không ghép với 文化 theo nghĩa này.'},
  {wrong:'由于____不够，这次考古工作只好推迟到明年。',opts:['经费','经验','消费','工资'],ans:0,exp:'Tiền dành cho một công việc, dự án → 经费. 经验 là kinh nghiệm; 消费 là tiêu dùng; 工资 là lương của một người.'},
  {wrong:'下周去面试，我不知道穿哪件衣服好，你给我____吧。',opts:['参谋参谋','参观参观','参加参加','参考参考'],ans:0,exp:'参谋 = góp ý, tư vấn cho ai: 给我参谋参谋. 参观 là tham quan; 参加 là tham gia; 参考 là tự mình tham khảo tài liệu, không "参考" giúp người khác.'},
  {wrong:'这条路我也没走过，咱们打开手机____看看吧。',opts:['导航','向导','导游','领导'],ans:0,exp:'Bật định vị trên điện thoại → 打开导航. 向导 (người dẫn đường), 导游 (hướng dẫn viên), 领导 (lãnh đạo) đều là người, không "打开" được.'},
  {wrong:'这本书很有____，我女儿一拿起来就放不下了。',opts:['趣味','兴趣','有趣','乐趣'],ans:0,exp:'很有趣味 = rất thú vị (nói về sách, trò chơi). 兴趣 là hứng thú của NGƯỜI (对……有兴趣) — lỗi hay gặp "这本书很有兴趣"; 有趣 đã là tính từ nên không nói 很有有趣; 乐趣 là niềm vui khi làm việc gì.'},
  {wrong:'奶奶年轻时学的是____，现在看简体字的书还有点儿不习惯。',opts:['繁体字','简体字','错字','生词'],ans:0,exp:'Quen chữ phồn thể nên đọc chữ giản thể chưa quen → 繁体字. 简体字 mâu thuẫn với vế sau; 错字 là chữ viết sai; 生词 là từ mới.'},
  {wrong:'从飞机上往下看，城市的灯光____满地的星星。',opts:['犹如','例如','如果','犹豫'],ans:0,exp:'犹如 = giống như (văn viết), làm vị ngữ: A 犹如 B. 例如 dùng để nêu ví dụ; 如果 là "nếu"; 犹豫 là do dự — giống mặt chữ và âm với 犹如 nên dễ nhầm.'},
  {wrong:'这本词典的字特别大，____老人阅读。',opts:['便于','随便','顺便','便宜'],ans:0,exp:'便于 + động từ = tiện cho việc…: 便于老人阅读. 随便 là tuỳ tiện; 顺便 là tiện thể; 便宜 (piányi) là rẻ — cùng chữ 便 nhưng nghĩa khác hẳn.'},
  {wrong:'和大城市____，小镇上的生活慢多了，也安静多了。',opts:['相比','相同','相似','相反'],ans:0,exp:'和 B 相比 = so với B, vế sau nêu kết quả so sánh (慢多了). 相同 / 相似 là giống nhau — mâu thuẫn với 慢多了; 相反 là ngược lại, không đi sau 和 + danh từ như vậy.'},
  {wrong:'和我刚来的时候相比，现在来这儿的游客____。',opts:['多了一倍','很多','非常多','真多'],ans:0,exp:'Sau 和……相比, vế sau phải thể hiện sự so sánh: 多了一倍 / 多得多 / 更多. 很多, 非常多, 真多 chỉ nói mức độ, không có ý so sánh — lỗi người Việt hay mắc (dịch "so với hồi tôi mới đến, bây giờ khách rất đông").'}
];

// ══════════════════════════════════════════
// DỊCH Việt → Trung — câu mới, dùng từ của bài + ôn ngữ pháp các bài trước
// ══════════════════════════════════════════
var translateData = [
  {vi:'Để tiện liên lạc, ngày nào lớp trưởng cũng thông báo ngắn gọn những tin quan trọng.',zh:'为了便于联系，班长每天都会简要地通知一下重要消息。',py:'Wèile biànyú liánxì, bānzhǎng měi tiān dōu huì jiǎnyào de tōngzhī yíxià zhòngyào xiāoxi.',goiY:['为了便于……','简要','通知'],giai:'为了便于 + V: để tiện cho việc …; 简要地 + V làm trạng ngữ (ngắn gọn). Không dịch "tiện" thành 便宜 (rẻ).'},
  {vi:'So với cấp hai, việc học ở cấp ba khô khan đến mức có một dạo tôi đã chán học.',zh:'和初中相比，高中的学习枯燥得让我一度厌倦了读书。',py:'Hé chūzhōng xiāngbǐ, gāozhōng de xuéxí kūzào de ràng wǒ yídù yànjuànle dúshū.',goiY:['和……相比','一度','枯燥','厌倦'],giai:'和……相比 đặt đầu câu nêu mốc so sánh; 一度 = có một dạo (quá khứ, nay đã khác) — không dùng 一向. 枯燥 ôn bài 7, 厌倦 ôn bài 4.'},
  {vi:'Anh trai tôi xưa nay không thích đọc sách du lịch, vậy mà năm nay lại mua liền ba cuốn.',zh:'我哥哥一向不爱看旅游类书籍，今年居然一连买了三本。',py:'Wǒ gēge yíxiàng bú ài kàn lǚyóu lèi shūjí, jīnnián jūrán yìlián mǎile sān běn.',goiY:['一向','书籍','居然'],giai:'一向 + 不 + V: xưa nay vốn không …; 居然 = vậy mà (bất ngờ) tạo tương phản với 一向 ở vế trước.'},
  {vi:'Tuy nhà bà nội tôi ở một thị trấn hẻo lánh, nhưng phong thổ nhân tình độc đáo ở đó năm nào cũng thu hút rất nhiều du khách.',zh:'虽然我奶奶家在一个偏僻的乡镇，但是那里独特的风土人情每年都吸引着大批游客。',py:'Suīrán wǒ nǎinai jiā zài yí ge piānpì de xiāngzhèn, dànshì nàlǐ dútè de fēngtǔ rénqíng měi nián dōu xīyǐnzhe dàpī yóukè.',goiY:['虽然……但是……','偏僻','风土人情','乡镇'],giai:'虽然……但是…… nối hai ý trái chiều (hẻo lánh ↔ thu hút du khách); 乡镇 ôn bài 3; "rất nhiều du khách" = 大批游客.'},
  {vi:'Lúc đầu tôi cứ tưởng sách hướng dẫn du lịch chỉ giới thiệu phong cảnh, không ngờ trong đó có cả dự toán kinh phí.',zh:'起初我以为旅游指南只介绍风景，不料里面连经费预算都有。',py:'Qǐchū wǒ yǐwéi lǚyóu zhǐnán zhǐ jièshào fēngjǐng, búliào lǐmiàn lián jīngfèi yùsuàn dōu yǒu.',goiY:['起初','不料','连……都……','经费预算'],giai:'起初 = lúc đầu (về sau thay đổi / nhận ra điều khác); 不料 (bài 4) = không ngờ, dẫn ra điều bất ngờ; "dự toán kinh phí" = 经费预算.'},
  {vi:'Rõ ràng là điện thoại của tôi, sao cậu không hỏi một tiếng đã tự ý xem? Làm vậy là xâm phạm quyền riêng tư của tôi.',zh:'明明是我的手机，你怎么不问一声就随便看呢？这样做是侵犯我的隐私。',py:'Míngmíng shì wǒ de shǒujī, nǐ zěnme bú wèn yì shēng jiù suíbiàn kàn ne? Zhèyàng zuò shì qīnfàn wǒ de yǐnsī.',goiY:['明明','不……就……','侵犯','隐私'],giai:'明明 (bài 6) = rõ ràng là (để phản bác); "không hỏi một tiếng đã…" = 不问一声就……; 侵犯 + 隐私 = xâm phạm quyền riêng tư.'}
];

// ══════════════════════════════════════════
// Dịch Trung → Việt — câu mới, không trùng chiều trên
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:'So với mười năm trước, ngôi làng nhỏ hẻo lánh này thay đổi quá nhiều: đường sá tốt hơn, khách du lịch cũng đông lên.',zh:'和十年前相比，这个偏僻的小山村变化太大了：路好走了，游客也多了。',py:'Hé shí nián qián xiāngbǐ, zhège piānpì de xiǎo shāncūn biànhuà tài dà le: lù hǎo zǒu le, yóukè yě duō le.',goiY:['和……相比 = so với…','偏僻 = hẻo lánh','山村 = làng trên núi'],giai:'和十年前相比 đặt đầu câu = "so với mười năm trước"; 路好走了 dịch tự nhiên là "đường sá tốt hơn / dễ đi hơn".'},
  {vi:'Trong khu rừng không có sóng điện thoại, một chiếc la bàn nho nhỏ đáng tin hơn bất cứ thứ gì.',zh:'在没有手机信号的森林里，一个小小的指南针比什么都可靠。',py:'Zài méiyǒu shǒujī xìnhào de sēnlín li, yí ge xiǎoxiǎo de zhǐnánzhēn bǐ shénme dōu kěkào.',goiY:['信号 = sóng, tín hiệu','指南针 = la bàn','比什么都…… = … hơn bất cứ thứ gì'],giai:'比什么都可靠 = đáng tin hơn bất cứ thứ gì (đại từ nghi vấn 什么 dùng phiếm chỉ).'},
  {vi:'Phát hiện khảo cổ mới này từng một thời làm chấn động cả nước, tiếc là về sau chẳng còn ai quan tâm nữa.',zh:'这个考古新发现一度轰动全国，可惜后来就没有人再关心了。',py:'Zhège kǎogǔ xīn fāxiàn yídù hōngdòng quán guó, kěxī hòulái jiù méiyǒu rén zài guānxīn le.',goiY:['考古 = khảo cổ','一度 = từng một thời','轰动 = làm chấn động'],giai:'一度 + V = từng có một thời (nay đã khác) — đối lập với 后来; 轰动全国 = làm cả nước xôn xao.'},
  {vi:'Trang web này có cả bản chữ phồn thể lẫn bản chữ giản thể, được thiết kế rất thân thiện với người dùng.',zh:'这个网站既有繁体字的版本，又有简体字的版本，设计得非常人性化。',py:'Zhège wǎngzhàn jì yǒu fántǐzì de bǎnběn, yòu yǒu jiǎntǐzì de bǎnběn, shèjì de fēicháng rénxìnghuà.',goiY:['繁体字 = chữ phồn thể','简体字 = chữ giản thể','人性化 = thân thiện, chu đáo với người dùng'],giai:'人性化 dịch "thân thiện với người dùng / chu đáo", không dịch "nhân tính hoá"; 既……又…… = vừa… vừa… / có cả… lẫn….'},
  {vi:'Xe của công ty cho thuê này đều được lắp định vị vệ tinh, cho dù là du khách lần đầu đến cũng không sợ lạc đường.',zh:'这家租赁公司的车都装了卫星导航，就算是第一次来的游客也不怕迷路。',py:'Zhè jiā zūlìn gōngsī de chē dōu zhuāngle wèixīng dǎoháng, jiùsuàn shì dì-yī cì lái de yóukè yě bú pà mílù.',goiY:['租赁公司 = công ty cho thuê','卫星导航 = định vị vệ tinh','就算……也…… = cho dù… cũng…'],giai:'装了卫星导航 câu chủ động trong tiếng Trung, tiếng Việt nói "được lắp"; 就算……也…… = cho dù… cũng….'}
];


// ══════════════════════════════════════════
// LUYỆN VIẾT — đề 运用 · 写一写 của sách (tr. 144)
// ══════════════════════════════════════════
var writingData = {
  kieu:'sgk', soChu:400,
  de:'这篇课文介绍了中国旅行指南发展的历程，同时告诉我们旅行指南一般包括哪些内容，有什么作用。你常旅游吗？你也经常用到旅行指南吗？请参照本文内容，以“我最喜欢的一本旅行指南”为题，介绍一本你最喜欢的旅行指南。说清楚这本指南包括的内容以及你喜欢它的原因。文章不少于400字。',
  prompt:'Bài khoá giới thiệu quá trình phát triển của sách hướng dẫn du lịch Trung Quốc, đồng thời cho chúng ta biết sách hướng dẫn du lịch thường gồm những nội dung gì, có tác dụng gì. Em có hay đi du lịch không? Em có thường dùng sách hướng dẫn du lịch không? Hãy tham khảo nội dung bài khoá, viết bài với nhan đề "Cuốn sách hướng dẫn du lịch em thích nhất", giới thiệu một cuốn sách hướng dẫn du lịch mà em thích nhất. Nói rõ cuốn sách gồm những nội dung gì và lý do em thích nó. Bài viết không ít hơn 400 chữ.',
  dan:[
    {hoi:'这是一本什么样的旅行指南？',goiY:'①书名、什么时候问世、是什么版本 ②你是怎么得到它的，起初你对它的印象怎么样'},
    {hoi:'这本指南包括哪些内容？',goiY:'①不仅介绍……（地理环境、名胜古迹、人文特色） ②还会介绍……（风土人情、特色饮食、宗教） ③……（住宿、交通路线、经费预算）更是必不可少'},
    {hoi:'你是怎么用这本指南的？它帮了你什么忙？',goiY:'①一次旅行的经历 ②它犹如……（随身的向导 / 好参谋）'},
    {hoi:'你为什么最喜欢这本指南？',goiY:'①趣味性…… ②实用价值…… ③便于…… ④和……相比，它更……'},
    {hoi:'结尾：旅行指南对你有什么意义？',goiY:'不管……，都……'}
  ],
  tuNen:['一向','起初','问世','风土人情','栏目','偏僻','简要','犹如','参谋','趣味','便于','和……相比'],
  cauTruc:[
    {ten:'我一向……，其中我最喜欢的是……', nhan:'Mở bài', vd:'我一向喜欢旅游，其中我最喜欢的是一本叫《背包游云南》的旅行指南。', khi:'Câu đầu: giới thiệu sở thích (一向) rồi nêu ngay tên cuốn sách — đi thẳng vào đề.'},
    {ten:'这本书是……年问世的，……是……版本', nhan:'问世 / 版本', vd:'这本书是2015年问世的，我手上的是最新版本。', khi:'Giới thiệu nguồn gốc cuốn sách, dùng từ của bài khoá.'},
    {ten:'起初……，后来我发现……', nhan:'起初 → 后来', vd:'起初，我只是随便翻翻，后来我发现，这本指南的内容非常全面。', khi:'Chuyển từ ấn tượng ban đầu sang phần nội dung.'},
    {ten:'不仅介绍……，还介绍……，……更是必不可少', nhan:'Liệt kê nội dung', vd:'它不仅介绍了地理环境和名胜古迹，还介绍了风土人情，交通路线等信息更是必不可少。', khi:'Đoạn nội dung — mượn khung câu của bài khoá (练习5 dòng 4).'},
    {ten:'拿着它，我们犹如……', nhan:'犹如 (so sánh)', vd:'拿着它，我们犹如有了一位随身的向导。', khi:'Kể một trải nghiệm cụ thể, dùng hình ảnh so sánh của bài.'},
    {ten:'原因有三个：第一，……；第二，……；第三，……', nhan:'Nêu lý do có thứ tự', vd:'第一，它趣味性强；第二，它实用价值高；第三，它便于携带。', khi:'Đoạn lý do — đề bài yêu cầu nói rõ vì sao thích.'},
    {ten:'和……相比，它更……', nhan:'和……相比', vd:'和网上那些零零散散的信息相比，它更系统，也更可靠。', khi:'Kết đoạn lý do bằng một phép so sánh (điểm ngữ pháp 3).'}
  ],
  checklist:[
    'Đã viết đủ ít nhất 400 chữ Hán chưa (không đếm dấu câu)?',
    'Có nói rõ cuốn sách GỒM NHỮNG NỘI DUNG GÌ không (không chỉ khen chung chung)?',
    'Có nêu ít nhất 2–3 LÝ DO em thích nó, có ví dụ cụ thể từ một chuyến đi không?',
    'Đã dùng ít nhất 6 từ / cấu trúc của bài (便于, 犹如, 和……相比, 风土人情, 参谋, 问世…) chưa?',
    'Bài có bố cục rõ: mở bài — nội dung sách — trải nghiệm — lý do — kết bài chưa?'
  ],
  model:{
    zh:'我一向喜欢旅游，家里摆着好几本旅游类书籍，其中我最喜欢的是一本叫《背包游云南》的旅行指南。这本书是2015年问世的，我手上的是最新版本，是去年过生日时爸爸送给我的。起初，我只是把它当成一本普通的书，随便翻翻。后来我发现，这本指南的内容非常全面。它不仅介绍了云南的地理环境、著名风景和人文特色，还介绍了各地的风土人情、特色饮食和宗教文化，青年旅社、经济型酒店、交通路线等信息更是必不可少。书的最后还有一个栏目，专门帮助读者选择最佳旅游时间，做好经费预算。去年夏天，我和父母去云南自助游，这本指南成了我们的好参谋。有一次，我们想去一个比较偏僻的小镇，书上简要介绍了怎么坐车、在哪儿可以租车，连当地人过节的日子都写得明明白白。拿着它，我们犹如有了一位随身的向导，一路上几乎没遇到什么麻烦。我喜欢这本指南，原因有三个：第一，它趣味性强，每一页都有照片和小故事，读起来一点儿也不枯燥；第二，它实用价值高，书里的信息都是作者亲自走过以后写的；第三，它又小又轻，便于携带，放在背包里一点儿也不占地方。和网上那些零零散散的信息相比，它更系统，也更可靠。我相信，不管以后走到哪儿，旅行指南都会是我最好的朋友。',
    py:'Wǒ yíxiàng xǐhuan lǚyóu, jiā li bǎizhe hǎo jǐ běn lǚyóu lèi shūjí, qízhōng wǒ zuì xǐhuan de shì yì běn jiào "Bēibāo Yóu Yúnnán" de lǚxíng zhǐnán. Zhè běn shū shì èr líng yī wǔ nián wènshì de, wǒ shǒu shang de shì zuì xīn bǎnběn, shì qùnián guò shēngrì shí bàba sòng gěi wǒ de. Qǐchū, wǒ zhǐshì bǎ tā dàngchéng yì běn pǔtōng de shū, suíbiàn fānfan. Hòulái wǒ fāxiàn, zhè běn zhǐnán de nèiróng fēicháng quánmiàn. Tā bùjǐn jièshàole Yúnnán de dìlǐ huánjìng, zhùmíng fēngjǐng hé rénwén tèsè, hái jièshàole gè dì de fēngtǔ rénqíng, tèsè yǐnshí hé zōngjiào wénhuà, qīngnián lǚshè, jīngjìxíng jiǔdiàn, jiāotōng lùxiàn děng xìnxī gèng shì bì bù kě shǎo. Shū de zuìhòu hái yǒu yí ge lánmù, zhuānmén bāngzhù dúzhě xuǎnzé zuì jiā lǚyóu shíjiān, zuòhǎo jīngfèi yùsuàn. Qùnián xiàtiān, wǒ hé fùmǔ qù Yúnnán zìzhùyóu, zhè běn zhǐnán chéngle wǒmen de hǎo cānmóu. Yǒu yí cì, wǒmen xiǎng qù yí ge bǐjiào piānpì de xiǎozhèn, shū shang jiǎnyào jièshàole zěnme zuò chē, zài nǎr kěyǐ zū chē, lián dāngdìrén guòjié de rìzi dōu xiě de míngmíngbáibái. Názhe tā, wǒmen yóurú yǒule yí wèi suíshēn de xiàngdǎo, yílù shang jīhū méi yùdào shénme máfan. Wǒ xǐhuan zhè běn zhǐnán, yuányīn yǒu sān ge: dì-yī, tā qùwèixìng qiáng, měi yí yè dōu yǒu zhàopiàn hé xiǎo gùshi, dú qǐlái yìdiǎnr yě bù kūzào; dì-èr, tā shíyòng jiàzhí gāo, shū li de xìnxī dōu shì zuòzhě qīnzì zǒuguo yǐhòu xiě de; dì-sān, tā yòu xiǎo yòu qīng, biànyú xiédài, fàng zài bēibāo li yìdiǎnr yě bú zhàn dìfang. Hé wǎng shang nàxiē línglíngsǎnsǎn de xìnxī xiāngbǐ, tā gèng xìtǒng, yě gèng kěkào. Wǒ xiāngxìn, bùguǎn yǐhòu zǒudào nǎr, lǚxíng zhǐnán dōu huì shì wǒ zuì hǎo de péngyou.',
    vn:'Em xưa nay vẫn thích đi du lịch, ở nhà có mấy cuốn sách du lịch, trong đó cuốn em thích nhất là cuốn sách hướng dẫn du lịch tên "Đeo ba lô đi Vân Nam". Cuốn sách ra đời năm 2015, cuốn em có là phiên bản mới nhất, bố tặng em nhân sinh nhật năm ngoái. Lúc đầu, em chỉ coi nó là một cuốn sách bình thường, thỉnh thoảng lật xem. Về sau em phát hiện nội dung cuốn sách này rất toàn diện. Nó không chỉ giới thiệu môi trường địa lý, phong cảnh nổi tiếng và đặc sắc văn hoá của Vân Nam, mà còn giới thiệu phong tục tập quán, món ăn đặc sắc và văn hoá tôn giáo của từng nơi; những thông tin như nhà nghỉ thanh niên, khách sạn bình dân, tuyến đường giao thông lại càng không thể thiếu. Cuối sách còn có một chuyên mục chuyên giúp người đọc chọn thời điểm du lịch lý tưởng nhất và lập dự toán kinh phí. Mùa hè năm ngoái, em cùng bố mẹ đi Vân Nam du lịch tự túc, cuốn sách trở thành "quân sư" đắc lực của cả nhà. Có lần, chúng em muốn đến một thị trấn nhỏ khá hẻo lánh, sách giới thiệu ngắn gọn cách đi xe, chỗ nào có thể thuê xe, đến cả ngày lễ hội của người dân địa phương cũng ghi rõ ràng. Cầm nó trong tay, chúng em như có một người dẫn đường đi theo bên mình, suốt chặng đường gần như không gặp rắc rối gì. Em thích cuốn sách này vì ba lý do: thứ nhất, nó rất thú vị, trang nào cũng có ảnh và những câu chuyện nhỏ, đọc không hề khô khan; thứ hai, nó có giá trị thực tế cao, thông tin trong sách đều do tác giả tự mình đi qua rồi mới viết; thứ ba, nó vừa nhỏ vừa nhẹ, tiện mang theo, bỏ vào ba lô chẳng chiếm chỗ chút nào. So với những thông tin rời rạc trên mạng, nó có hệ thống hơn và cũng đáng tin cậy hơn. Em tin rằng sau này dù đi đến đâu, sách hướng dẫn du lịch cũng sẽ là người bạn tốt nhất của em.'
  }
};

// ══════════════════════════════════════════
// LUYỆN NÓI — đúng bảng 练习5 của sách: 根据提示，简述课文主要内容 (tr. 143–144)
// ══════════════════════════════════════════
var speakingData = {
  intro: 'Đây là bảng bài tập 5 trong sách: <b>根据提示，简述课文主要内容</b>. Mỗi câu hỏi là một dòng của bảng, cột gợi ý giữ nguyên như sách (các ô nhỏ được đánh số ①②③). Bấm loa nghe câu hỏi, <b>tự ghi âm câu trả lời trước</b> rồi mới mở câu mẫu. Cố dùng đúng các từ trong gợi ý.',
  questions: [
    {q_zh:'从古到今，人类旅行的目的有什么变化？',q_vn:'Từ xưa đến nay, mục đích đi lại của loài người đã thay đổi thế nào?',hint:'①起初，天气……，食物……，敌人……，人们不得不…… ②后来，……，游山玩水，有了……',sample:'起初，人类旅行更准确地说应该叫迁徙。天气变化、食物短缺，或者有敌人侵犯，人们不得不远离居住地，寻找能够安居的地方，那时的旅行纯粹是为了生存和安全。后来，古人远离家乡，去游山玩水，才有了真正意义上的旅游。',sample_vn:'Thuở ban đầu, việc đi lại của loài người nói chính xác hơn phải gọi là di cư. Thời tiết thay đổi, thức ăn khan hiếm hoặc có kẻ thù xâm phạm, con người buộc phải rời xa nơi ở, đi tìm nơi có thể an cư; việc đi lại thời đó thuần tuý là vì sinh tồn và an toàn. Về sau, người xưa rời quê hương đi ngao du sơn thuỷ, lúc ấy mới có du lịch theo đúng nghĩa.',note:'Hai giai đoạn đối lập: 起初 (迁徙 — vì 生存) → 后来 (游山玩水 — du lịch thật sự). Dùng 纯粹是……的需要 và 不得不.'},
    {q_zh:'说一说中国旅游指南的发展历程。',q_vn:'Hãy kể về quá trình phát triển của sách hướng dẫn du lịch Trung Quốc.',hint:'①开始，连……都没有 ②1898年，……问世：为便于……；……搜集……等信息 ③之后，《北平旅行指南》：趣味性……，实用价值……；中、外文版本',sample:'开始，来中国的外国旅行者连一本旅游指南类的书籍都没有。直到1898年，中国最早的旅游指南才问世。为便于外地人出行，作者搜集了天津的文化习俗以及车船码头等信息，做了简要介绍。之后，《北平旅行指南》一度引起轰动，它趣味性强，实用价值高，中文版本和外文版本一起发行，真正方便了读者。',sample_vn:'Lúc đầu, những nhà du hành nước ngoài đến Trung Quốc đến một cuốn sách hướng dẫn du lịch cũng không có. Mãi đến năm 1898, cuốn sách hướng dẫn du lịch sớm nhất của Trung Quốc mới ra đời. Để người nơi khác đi lại thuận tiện, tác giả đã thu thập thông tin về văn hoá, phong tục cùng xe, thuyền, bến bãi của Thiên Tân và giới thiệu ngắn gọn. Sau đó, "Sách hướng dẫn du lịch Bắc Bình" từng một thời gây chấn động: rất thú vị, giá trị thực dụng cao, bản tiếng Trung và tiếng nước ngoài phát hành cùng lúc, thực sự thuận tiện cho người đọc.',note:'Kể theo mốc thời gian 开始 → 直到1898年 → 之后. Dùng 连……都没有, 为便于……, 一度引起轰动 (một điểm ngữ pháp + một từ trong bảng phân biệt 一向 / 一度 của bài).'},
    {q_zh:'改革开放前后，旅游指南有什么变化？',q_vn:'Trước và sau cải cách mở cửa, sách hướng dẫn du lịch có thay đổi gì?',hint:'①改革开放前：是……的延伸和补充；游客主要是……，服务对象…… ②改革开放后：……受到重视，……变得越来越……；1999年后，……成了主流，……扩大了……，调整了……，增加了……',sample:'改革开放前，旅游是中国外交事业的延伸和补充，游客主要是外国人，旅游书籍的服务对象也锁定为他们。改革开放以后，旅游作为经济型产业受到重视，旅游指南变得越来越丰富、全面。1999年以后，中国人成了游客中的主流，旅游书籍扩大了服务对象，调整了服务宗旨，增加了相关栏目，变得越来越人性化。',sample_vn:'Trước cải cách mở cửa, du lịch là sự nối dài và bổ sung cho công cuộc ngoại giao của Trung Quốc; du khách chủ yếu là người nước ngoài nên đối tượng phục vụ của sách du lịch cũng nhắm vào họ. Sau cải cách mở cửa, du lịch được coi trọng như một ngành kinh tế, sách hướng dẫn ngày càng phong phú, toàn diện. Sau năm 1999, người Trung Quốc thành bộ phận chủ yếu trong du khách; sách du lịch mở rộng đối tượng phục vụ, điều chỉnh tôn chỉ, thêm chuyên mục liên quan, ngày càng lấy con người làm gốc.',note:'Đối chiếu 前 / 后. Ba động từ song song 扩大了…… / 调整了…… / 增加了…… nói liền một hơi; chú ý kết hợp 扩大对象, 调整宗旨, 增加栏目.'},
    {q_zh:'说一说目前旅游指南的内容和发展情况。',q_vn:'Hãy nói về nội dung và tình hình phát triển của sách hướng dẫn du lịch hiện nay.',hint:'①内容：不仅介绍……，还会介绍……，……更是必不可少 ②发展：旅游网站……，卫星导航系统……，使人们……',sample:'现在的旅游指南不仅介绍地理环境、风土人情、人文特色和著名风景，还会介绍当地饮食、宗教和考古新发现，青年旅社、经济型酒店、当地交通等内容更是必不可少。如今，繁体字、简体字旅游网站的开通更大范围地方便了游客，卫星导航系统的广泛应用，使人们不管走到哪儿，都犹如有位随身的向导。',sample_vn:'Sách hướng dẫn du lịch bây giờ không chỉ giới thiệu môi trường địa lý, phong thổ nhân tình, đặc sắc văn hoá và danh thắng nổi tiếng, mà còn giới thiệu ẩm thực địa phương, tôn giáo và những phát hiện khảo cổ mới; các nội dung như nhà nghỉ thanh niên, khách sạn bình dân, giao thông địa phương lại càng không thể thiếu. Ngày nay, các trang web du lịch chữ phồn thể, giản thể được mở ra đã tạo thuận lợi cho du khách trên phạm vi rộng hơn; hệ thống định vị vệ tinh được ứng dụng rộng rãi khiến người ta dù đi đâu cũng như có một người dẫn đường bên mình.',note:'Khung 不仅……，还……，……更是必不可少 để liệt kê theo mức tăng dần; kết bằng 使人们不管……，都犹如…… (điểm ngữ pháp 犹如).'}
  ]
};

// ══════════════════════════════════════════
// 🎧 NGHE THEO DẠNG ĐỀ HSK 6 — câu tự soạn (sách HSK 6 không có sách bài tập nghe), mỗi câu một tình huống mới
// ══════════════════════════════════════════
var listenExamData = {
  intro: 'Đề HSK 6 phần nghe chỉ phát <b>một lượt</b>. Bấm nút loa nghe, trả lời ngay, rồi mới mở nguyên văn ra đối chiếu. Đừng mở nguyên văn trước — mở trước là mất tác dụng.',
  source: 'Tự soạn theo dạng đề HSK 6 · chủ đề bài 13',
  items: [
    {
      n: 1,
      lines: [
        {sp:'女',zh:'你出门怎么不带那本厚厚的旅游指南了？'},
        {sp:'男',zh:'我把它下载到手机上了，便于查找，比带着书方便多了。'}
      ],
      q: '男的为什么不带那本书了？',
      qvn: 'Vì sao người đàn ông không mang cuốn sách đó nữa?',
      opts: ['书丢了','书太旧了','不需要旅游指南了','手机上的更方便'],
      ans: 3,
      why: '下载到手机上了，便于查找，比带着书方便多了 → dùng bản trên điện thoại tiện hơn. Anh vẫn dùng sách hướng dẫn, chỉ không mang bản giấy nên phương án 3 sai.',
      words: ['便于']
    },
    {
      n: 2,
      lines: [
        {sp:'男',zh:'你老家那个小镇现在怎么样了？'},
        {sp:'女',zh:'跟以前完全不一样了，晚上到处都是灯光，热闹得犹如大城市一般。'}
      ],
      q: '女的的老家现在怎么样？',
      qvn: 'Quê của người phụ nữ bây giờ thế nào?',
      opts: ['变得很热闹','人越来越少','和以前一样','已经成了大城市'],
      ans: 0,
      why: '热闹得犹如大城市一般 = náo nhiệt như thành phố lớn — chỉ là so sánh, thị trấn chưa thật sự thành thành phố lớn (bẫy ở phương án 4).',
      words: ['犹如']
    },
    {
      n: 3,
      lines: [
        {sp:'女',zh:'你这次怎么选了自助游？'},
        {sp:'男',zh:'和跟着导游走相比，自助游时间更自由，想在哪儿多玩儿一会儿都行。'}
      ],
      q: '男的为什么选自助游？',
      qvn: 'Vì sao người đàn ông chọn du lịch tự túc?',
      opts: ['更便宜','更安全','更自由','能认识导游'],
      ans: 2,
      why: '和跟着导游走相比，自助游时间更自由 — vế sau của 和……相比 nêu ưu điểm: tự do hơn.',
      words: []
    },
    {
      n: 4,
      lines: [
        {sp:'男',zh:'小林一向不爱运动，怎么现在天天去跑步了？'},
        {sp:'女',zh:'他上个月一度胖到了九十公斤，现在正千方百计地减肥呢。'}
      ],
      q: '小林为什么开始跑步？',
      qvn: 'Vì sao Tiểu Lâm bắt đầu chạy bộ?',
      opts: ['他一向喜欢运动','想减肥','要参加比赛','朋友叫他去的'],
      ans: 1,
      why: '一度胖到了九十公斤 = có một dạo béo tới 90 cân; 千方百计地减肥 = tìm đủ mọi cách giảm cân. 一向不爱运动 = xưa nay không thích vận động → phương án 1 sai.',
      words: ['一向','一度','千方百计']
    },
    {
      n: 5,
      lines: [
        {sp:'女',zh:'去海边玩儿两天，住宾馆要花不少钱，我们的预算不够啊。'},
        {sp:'男',zh:'那就租两顶帐篷吧，睡在海边，又省钱又好玩儿。'}
      ],
      q: '他们晚上可能住在哪儿？',
      qvn: 'Buổi tối họ có thể ngủ ở đâu?',
      opts: ['宾馆','朋友家','帐篷里','车上'],
      ans: 2,
      why: '预算不够 nên không ở khách sạn; 租两顶帐篷，睡在海边 → ngủ trong lều.',
      words: ['预算','帐篷']
    },
    {
      n: 6,
      lines: [
        {sp:'男',zh:'你每天晚上都看这个电视节目吗？'},
        {sp:'女',zh:'是啊，我最喜欢里面的旅游栏目，每次简要介绍一个地方的风土人情，十分钟就看完了。'}
      ],
      q: '女的为什么喜欢那个栏目？',
      qvn: 'Vì sao người phụ nữ thích chuyên mục đó?',
      opts: ['内容短而有意思','主持人很有名','可以免费旅游','节目时间很长'],
      ans: 0,
      why: '简要介绍……风土人情，十分钟就看完了 → ngắn gọn mà hay. Phương án 4 ngược với "mười phút là xem xong".',
      words: ['栏目','简要','风土人情']
    },
    {
      n: 7,
      lines: [
        {sp:'女',zh:'到了那个国家，我应该注意些什么？'},
        {sp:'男',zh:'那里的人大多信宗教，有些习俗跟我们很不一样，你务必先了解一下。'}
      ],
      q: '男的提醒女的什么？',
      qvn: 'Người đàn ông nhắc người phụ nữ điều gì?',
      opts: ['多带点儿钱','先了解当地习俗','别信宗教','早点儿回来'],
      ans: 1,
      why: '有些习俗跟我们很不一样，你务必先了解一下 — 务必 (bài 12) = nhất định phải. Anh không khuyên "đừng theo tôn giáo".',
      words: ['宗教','习俗']
    }
  ]
};

// ══════════════════════════════════════════
// 💬 TÌNH HUỐNG — HOÀN THÀNH HỘI THOẠI (Cấp 2 · 半交际性练习)
// ══════════════════════════════════════════
var situationData = {
  intro: 'Mỗi tình huống cho sẵn lời của người kia. Em viết lời đáp của mình, <b>bắt buộc dùng đúng từ/cấu trúc ghi ở ô yêu cầu</b>. Viết xong mới mở câu mẫu — câu mẫu chỉ là MỘT cách nói, em nói khác mà đúng yêu cầu vẫn được.',
  items: [
    {scene:'Trước khi chuyển nhà, em ghi chữ lên từng túi đồ. Bạn thấy lạ nên hỏi.',a:{sp:'Bạn',zh:'搬个家而已，你干吗在每个包上都写字啊？',vn:'Chuyển nhà thôi mà, sao cậu lại viết chữ lên từng túi thế?'},need:['Dùng 便于','Nói rõ cách làm của mình'],sample:'我把每个包里装的是什么都写在外面了，便于到了新家以后查找，不用每个都打开看。',samplePy:'Wǒ bǎ měi ge bāo li zhuāng de shì shénme dōu xiě zài wàimiàn le, biànyú dàole xīn jiā yǐhòu cházhǎo, bú yòng měi ge dōu dǎkāi kàn.',sampleVn:'Tớ ghi ở ngoài mỗi túi xem bên trong đựng gì, để đến nhà mới tiện tìm, không phải mở từng cái ra xem.',tip:'……，便于 + V: vế sau nói mục đích. 而已 (bài 5) = … thôi mà.'},
    {scene:'Em vừa đi biển về, bạn hỏi phong cảnh ở đó ra sao.',a:{sp:'Bạn',zh:'听说你去海边了，那里的风景怎么样？',vn:'Nghe nói cậu đi biển à, phong cảnh ở đó thế nào?'},need:['Dùng 犹如','Tả một cảnh cụ thể'],sample:'美极了！傍晚的海面被太阳照得通红，犹如一幅画一样，我拍了好多照片。',samplePy:'Měi jí le! Bàngwǎn de hǎimiàn bèi tàiyáng zhào de tōnghóng, yóurú yì fú huà yíyàng, wǒ pāile hǎoduō zhàopiàn.',sampleVn:'Đẹp tuyệt! Mặt biển lúc chiều tà bị mặt trời chiếu đỏ rực, như một bức tranh vậy, tớ chụp bao nhiêu là ảnh.',tip:'犹如 + B + 一样 / 一般; 通红 (bài 9) = đỏ rực — tính từ trạng thái làm bổ ngữ sau 得.'},
    {scene:'Người bạn Trung Quốc hỏi quê em mấy năm nay thay đổi thế nào.',a:{sp:'Bạn Trung Quốc',zh:'你的家乡这几年变化大吗？',vn:'Quê cậu mấy năm nay thay đổi nhiều không?'},need:['Dùng 和……相比','Dùng 繁华 hoặc 振兴'],sample:'变化可大了！和我小时候相比，现在繁华多了，旅游业也振兴起来了。',samplePy:'Biànhuà kě dà le! Hé wǒ xiǎoshíhou xiāngbǐ, xiànzài fánhuá duō le, lǚyóuyè yě zhènxīng qǐlái le.',sampleVn:'Thay đổi nhiều lắm! So với hồi tớ còn nhỏ, bây giờ sầm uất hơn nhiều, ngành du lịch cũng khởi sắc rồi.',tip:'和 + mốc so sánh + 相比 đặt đầu câu, vế sau nói về A; Adj + 多了 = … hơn nhiều.'},
    {scene:'Người bạn Trung Quốc sắp sang Việt Nam du lịch lần đầu, nhờ em khuyên nên chuẩn bị gì.',a:{sp:'Bạn Trung Quốc',zh:'下个月我要去越南旅游，你帮我出出主意，该带些什么？',vn:'Tháng sau mình đi du lịch Việt Nam, cậu góp ý giúp mình xem nên mang những gì?'},need:['Dùng 携带 hoặc 务必','Gợi ý tìm hiểu phong tục (风土人情 / 习俗)'],sample:'越南这个季节很热，衣服带几件薄的就行，护照务必随身携带。到了那儿，你不妨买本当地的旅游指南，里面介绍的风土人情挺有意思的。',samplePy:'Yuènán zhège jìjié hěn rè, yīfu dài jǐ jiàn báo de jiù xíng, hùzhào wùbì suíshēn xiédài. Dàole nàr, nǐ bùfáng mǎi běn dāngdì de lǚyóu zhǐnán, lǐmiàn jièshào de fēngtǔ rénqíng tǐng yǒu yìsi de.',sampleVn:'Mùa này Việt Nam nóng lắm, quần áo mang vài bộ mỏng là được, hộ chiếu nhất định phải mang theo người. Đến nơi rồi, cậu thử mua một cuốn sách hướng dẫn du lịch địa phương xem, phong tục tập quán giới thiệu trong đó khá thú vị.',tip:'务必 (bài 12) = nhất định phải; 不妨 (bài 12) = cứ thử…; 随身携带 = mang theo người.'}
  ]
};

// ══════════════════════════════════════════
// 🎯 NÓI SAO CHO HAY — 得体 / 语体
// ══════════════════════════════════════════
var registerData = {
  intro: 'Ở đây <b>cả hai câu đều đúng ngữ pháp</b> — không có câu sai. Việc của em là chọn câu <b>PHÙ HỢP HƠN</b> với hoàn cảnh. HSK 6 đòi hỏi phân biệt rõ khẩu ngữ và văn viết, lời thân mật và lời trang trọng.',
  items: [
    {scene:'Em kể với bạn thân về chuyến đi vừa rồi.',a:'那地方远得要命，不过风景真是没得说！',b:'该地区地处偏僻，然而自然风光极为秀美。',better:'a',why:'Tán gẫu với bạn thân dùng khẩu ngữ (远得要命, 没得说); câu b giống lời thuyết minh du lịch (该, 地处, 然而, 极为).'},
    {scene:'Em viết lời giới thiệu sản phẩm in trên bao bì một chiếc lều cắm trại.',a:'这种帐篷重量轻，收起来很小，便于携带。',b:'这个帐篷轻着呢，一收就没多大了，带着多方便啊。',better:'a',why:'Lời giới thiệu sản phẩm là văn viết: 重量轻, 便于携带. Câu b (轻着呢 — ôn bài 3, 多方便啊) là khẩu ngữ khi kể với bạn.'},
    {scene:'Em gặp lại thầy giáo cũ sau nhiều năm.',a:'老王，好久不见，最近怎么样啊？',b:'王老师，好久不见，您一向可好？',better:'b',why:'Với thầy cô phải gọi 王老师, dùng 您; 一向可好 là lời hỏi thăm lịch sự "từ lần gặp trước đến nay" (cách dùng thứ hai của 一向). 老王 chỉ dùng với người ngang hàng, thân thiết.'},
    {scene:'Trong giờ ra chơi, em kể với bạn về chuyến leo núi cuối tuần.',a:'山顶上的云犹如大海一般，景色极为美丽。',b:'山顶上的云跟大海似的，太好看了！',better:'b',why:'Nói chuyện với bạn dùng khẩu ngữ: 跟……似的, 太好看了. 犹如……一般, 极为美丽 là văn viết, hợp với bài văn miêu tả hơn.'},
    {scene:'Em viết bài văn miêu tả quê hương nộp cho cô giáo.',a:'每年三四月，山上的花开得到处都是，好看得要命。',b:'每年三四月，满山的花都开了，犹如一片花的海洋。',better:'b',why:'Bài văn miêu tả cần hình ảnh, văn viết: 犹如一片花的海洋. 好看得要命 (bài 9) là khẩu ngữ, hợp khi nói chuyện hơn.'},
    {scene:'Em viết báo cáo tổng kết hoạt động của câu lạc bộ nộp cho nhà trường.',a:'与上学期相比，本学期参加活动的学生人数增加了一倍。',b:'这学期来参加活动的人比上学期多多了。',better:'a',why:'Báo cáo cần số liệu và văn viết: 与……相比, 本学期, 学生人数, 增加了一倍. Câu b là lời nói hằng ngày, không có số liệu cụ thể.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🗣️ KỂ LẠI BÀI ĐỌC — theo bảng 练习5 của sách
// ══════════════════════════════════════════════════════════════
var retellData = {
  intro: 'Đây là bài tập 5 trong sách: <b>根据提示，简述课文主要内容</b> — kể tóm tắt bài khoá bằng lời của em, ' +
         'KHÔNG đọc thuộc lòng. Nhìn câu hỏi và gợi ý từng dòng, bấm ghi âm rồi kể khoảng 2–3 phút.',
  outline: [
    {step:'从古到今，人类旅行的目的有什么变化？', cue:'①起初，天气……，食物……，敌人……，人们不得不…… ②后来，……，游山玩水，有了……', words:['一向','起初','迁徙','侵犯','居住','纯粹','生存']},
    {step:'说一说中国旅游指南的发展历程。', cue:'①开始，连……都没有 ②1898年，……问世：为便于……；……搜集……等信息 ③之后，《北平旅行指南》：趣味性……，实用价值……；中、外文版本', words:['遍布','千方百计','书籍','问世','携带','序言','繁华','便于','习俗','码头','简要','一度','轰动','趣味','人士','版本','发行']},
    {step:'改革开放前后，旅游指南有什么变化？', cue:'①改革开放前：是……的延伸和补充；游客主要是……，服务对象…… ②改革开放后：……受到重视，……变得越来越……；1999年后，……成了主流，……扩大了……，调整了……，增加了……', words:['事业','延伸','产业','振兴','主流','犹如','宗旨','栏目','人性']},
    {step:'说一说目前旅游指南的内容和发展情况。', cue:'①内容：不仅介绍……，还会介绍……，……更是必不可少 ②发展：旅游网站……，卫星导航系统……，使人们……', words:['偏僻','沿海','风土人情','宗教','考古','经费','预算','参谋','繁体字','简体字','卫星','导航','向导','租赁','帐篷']}
  ],
  checklist: [
    'Kể đủ 4 ý theo đúng thứ tự bảng chưa?',
    'Ý 1 có nói rõ hai giai đoạn 起初 (迁徙, vì sinh tồn) và 后来 (游山玩水) không?',
    'Ý 2 có đủ ba mốc: lúc đầu không có sách → 1898 → 《北平旅行指南》 không?',
    'Ý 3 có đối chiếu trước / sau cải cách mở cửa và nói được 扩大了……，调整了……，增加了…… không?',
    'Có dùng được 便于, 犹如, 和……相比 và kể bằng LỜI MÌNH (không đọc thuộc nguyên văn) không?'
  ]
};

// ══════════════════════════════════════════
// SGK · 练习 (Bài tập trong sách, tr. 142–146) — đáp án theo đáp án sách
// ══════════════════════════════════════════
var sgkData = [
  {kieu:'mr', de:'模仿例子，写出更多的词语', vn:'Bắt chước ví dụ, viết thêm các từ khác (có chữ được đánh dấu chấm)',
   vd:{tu:'犹如', chu:'如', ds:['比如','例如','譬如','一如既往']},
   cau:[
     {tu:'生存', chu:'存', dap:['幸存','保存','存在','存款'], them:['共存','并存','依存','存活','存亡','残存'],
      giai:'存 trong 生存 nghĩa là tồn tại, còn sống (共存 = cùng tồn tại — câu đầu bài khoá: 人类一向与旅游共存). Đáp án sách có cả 存 = cất giữ (保存, 存款).'},
     {tu:'简要', chu:'简', dap:['简单','简介','简明','简直'], them:['简短','简洁','简便','简化','简易','简称'],
      giai:'简 = giản, ngắn gọn, đơn giản (简短 = ngắn gọn, 简化 = đơn giản hoá). 简直 (quả thực) là từ đã mất nghĩa gốc.'},
     {tu:'趣味', chu:'趣', dap:['有趣','兴趣','乐趣','趣事'], them:['情趣','趣闻','风趣','童趣','无趣','志趣'],
      giai:'趣 = thú vị, hứng thú (风趣 = dí dỏm, 趣闻 = chuyện lạ thú vị, 童趣 = nét ngây thơ thú vị của trẻ con).'},
     {tu:'产业', chu:'业', dap:['农业','工业','业余','业务'], them:['商业','行业','企业','职业','就业','旅游业'],
      giai:'业 = ngành, nghề, sự nghiệp (旅游业 = ngành du lịch — bài khoá: 旅游业的振兴). 业余 = ngoài giờ làm việc.'}
   ]},

  {kieu:'gx', de:'用所给词语或结构完成句子', vn:'Dùng từ hoặc cấu trúc cho sẵn hoàn thành câu (sách không in đáp án — đây là câu gợi ý)',
   cau:[
     {s:'＿＿，后来我慢慢明白了父母的心。', tu:'起初', dap:'起初，我很不理解父母为什么对我要求那么严格，后来我慢慢明白了父母的心。',
      giai:'起初 đứng đầu câu, nói giai đoạn đầu; hô ứng với 后来 ở vế sau (起初……，后来……).'},
     {s:'＿＿，他几乎没生过病。', tu:'和……相比', dap:'和班上其他同学相比，他的身体一向很好，这几年他几乎没生过病。',
      giai:'和 + đối tượng + 相比 đặt đầu câu, vế sau miêu tả A (他); có thể lồng thêm 一向 (cặp 辨析 của bài).'},
     {s:'大学毕业以后，＿＿。', tu:'若干', dap:'大学毕业以后，他先后在若干家公司工作过，积累了丰富的经验。',
      giai:'若干 + lượng từ + danh từ = một số, một vài (văn viết): 若干家公司, 若干年.'},
     {s:'印度尼西亚被称为千岛之国，＿＿。', tu:'遍布', dap:'印度尼西亚被称为千岛之国，一万多个大大小小的岛屿遍布在辽阔的海面上。',
      giai:'Chủ thể (岛屿) + 遍布 + (在) nơi chốn: phân bố khắp. Cũng nói 足迹遍布世界 (bài khoá).'},
     {s:'虽然他现在很成功，但＿＿。', tu:'一度', dap:'虽然他现在很成功，但创业初期他一度穷得连房租都交不起。',
      giai:'一度 = có một dạo (trong quá khứ, nay đã khác) — hợp với ý "bây giờ thành công" ở vế trước.'},
     {s:'为了公司的发展，＿＿。', tu:'千方百计', dap:'为了公司的发展，老板千方百计地引进优秀人才。',
      giai:'千方百计(地) + V = tìm mọi cách để …; làm trạng ngữ đứng trước động từ.'}
   ]},

  {kieu:'kho', de:'选择合适的词语填空', vn:'Chọn từ thích hợp điền vào chỗ trống (đoạn 1)', tu:['人士','版本','问世','简要','序言'],
   cau:[
     {s:'他是一位深受广大读者喜爱的作家。最近，他的又一本新书＿＿了，在中外＿＿的共同努力下，该书的中、外文＿＿同时发行。作者在＿＿中＿＿介绍了这本书的内容，除此以外，还对家人和朋友的支持表示了感谢。',
      dap:['问世','人士','版本','序言','简要']}
   ]},
  {kieu:'kho', de:'选择合适的词语填空', vn:'Chọn từ thích hợp điền vào chỗ trống (đoạn 2)', tu:['振兴','偏僻','人性','产业','风土人情'],
   cau:[
     {s:'随着中国经济的发展，旅游逐渐成为人们生活中必不可少的一部分。人们不但关注那些著名的旅游城市，也把越来越多的目光投向了＿＿省份，那些地方独特的＿＿吸引了越来越多的游客。随着当地旅游＿＿的＿＿，服务质量也有所提升，变得越来越＿＿化了。',
      dap:['偏僻','风土人情','产业','振兴','人性']}
   ]},

  {kieu:'sx', de:'给下列两组复句重新排序', vn:'Sắp xếp lại thứ tự các vế của hai câu phức sau',
   cau:[
     {manh:[{k:'A',s:'因为我不但是北京人'},{k:'B',s:'看见过许多西方的名城'},{k:'C',s:'北京是美丽的，我知道'},{k:'D',s:'而且到过欧美'}],
      dap:['C','A','D','B'],
      giai:'Kết luận đứng trước (北京是美丽的，我知道), rồi giải thích lý do bằng 因为 (câu phức nhân quả đảo). Trong vế lý do: 不但……而且…… → A trước D; B (看见过……名城) là hệ quả của 到过欧美 nên đứng cuối.'},
     {manh:[{k:'A',s:'我们无论认识什么事物'},{k:'B',s:'不但要看到它的正面'},{k:'C',s:'都必须全面地去看'},{k:'D',s:'而且要看到它的反面'},{k:'E',s:'否则，就不能有比较完整和正确的认识'}],
      dap:['A','C','B','D','E'],
      giai:'无论……都…… → A rồi C; 全面地去看 được giải thích bằng 不但……而且…… → B, D; 否则 (nếu không thì) luôn đứng cuối, nêu hậu quả.'}
   ]},

  {kieu:'bc', de:'指出下列句子的错误，并提出修改建议', vn:'Chỉ ra lỗi sai của các câu sau và đề xuất cách sửa (病句类型：逻辑不通 — câu đúng ngữ pháp nhưng ý mâu thuẫn, trái logic)',
   cau:[
     {s:'年轻人缺乏的就是理论水平不高和工作经验不足。', sai:'理论水平不高和工作经验不足', loai:'逻辑混乱',
      dap:'年轻人缺乏的就是理论水平和工作经验。',
      giai:'"Thiếu" (缺乏) cái "không cao, không đủ" thì hoá ra là có trình độ cao, kinh nghiệm đủ — logic lộn xộn. Tân ngữ của 缺乏 chỉ cần là 理论水平 và 工作经验.'},
     {s:'晚会上表演了音乐、舞蹈、武术和很多文艺节目。', sai:'和很多文艺节目', loai:'概念并列不当',
      dap:'晚会上表演了音乐、舞蹈、武术和其他文艺节目。',
      giai:'音乐、舞蹈、武术 vốn đều thuộc 文艺节目 (khái niệm lớn), không thể đặt ngang hàng với nó — mâu thuẫn. Sửa thành 其他文艺节目 (các tiết mục văn nghệ khác).'},
     {s:'由北京人民艺术剧院复排的大型历史话剧《蔡文姬》定于5月1日在首都剧场上演，日前正在紧张的排练之中。', sai:'日前', loai:'时间矛盾',
      dap:'由北京人民艺术剧院复排的大型历史话剧《蔡文姬》定于5月1日在首都剧场上演，目前正在紧张的排练之中。',
      giai:'日前 = mấy hôm trước (quá khứ), mâu thuẫn với 正在 (đang). Phải dùng 目前 (hiện nay).'},
     {s:'在古代，这类音乐作品只有文字记载，没有乐谱资料，既无法演奏，也无法演唱。', sai:'在古代', loai:'逻辑不通',
      dap:'这类古代的音乐作品只有文字记载，没有乐谱资料，因此现在既无法演奏，也无法演唱。',
      giai:'Câu gốc nói "thời cổ đại không thể biểu diễn" — trái lẽ, vì chính thời đó tác phẩm vẫn được trình diễn. Ý đúng: tác phẩm CỔ ĐẠI, NGÀY NAY không biểu diễn được vì thiếu bản nhạc; thêm 因此现在.'},
     {s:'昨天是HSK考试报名截止日期的最后一天，还陆续有人前来报名。', sai:'截止日期的最后一天', loai:'语义重复矛盾',
      dap:'昨天是HSK考试报名的截止日期，还陆续有人前来报名。',
      giai:'截止日期 đã là một ngày (ngày cuối), không có "ngày cuối cùng của ngày hết hạn". Giữ một trong hai: 报名的截止日期 hoặc 报名的最后一天 (昨天是HSK考试报名的最后一天，……).'}
   ]},

  {kieu:'kho', de:'熟悉下列农业方面的词语并选择填空', vn:'Làm quen với các từ về nông nghiệp và chọn từ điền vào chỗ trống (扩展 · 词汇). 灌溉 = tưới tiêu, 化肥 = phân hoá học, 水利 = thuỷ lợi, 畜牧 = chăn nuôi, 杂交 = lai giống', tu:['灌溉','化肥','水利','畜牧','杂交'],
   cau:[
     {s:'这个地区大面积种植了＿＿水稻，为了方便＿＿，人们兴修＿＿。', dap:['杂交','灌溉','水利']},
     {s:'草原地区可以大力发展＿＿业。', dap:['畜牧']},
     {s:'使用＿＿可以提高农作物单位面积的产量。', dap:['化肥']}
   ]}
];
