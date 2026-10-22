// ══════════════════════════════════════════
// DATA — HSK5 Bài 11: 闹钟的危害 (Tác hại của đồng hồ báo thức)
// Unit 4 走近科学 · Nguồn: HSK标准教程5上, trang 100–108
// ══════════════════════════════════════════

var vocabData = [
  {n:1,zh:'闹钟',py:'nàozhōng',pos:'Danh từ',vn:'đồng hồ báo thức',hv:'náo chung',em:'⏰',lesson:11,
   explain:['Đồng hồ có chuông reo đúng giờ đã đặt để đánh thức người đang ngủ.'],
   usage:'Lượng từ 个: 一个闹钟. Động từ đi kèm: 定/设 + 闹钟 (đặt báo thức); 闹钟响了 (chuông reo); 被闹钟叫醒.',
   collo:['定闹钟','闹钟响了','关掉闹钟','闹钟的铃声'],
   ex_zh:'如果早上有课，为了不迟到，我晚上睡觉前都会定上闹钟。',ex_py:'Rúguǒ zǎoshang yǒu kè, wèile bù chídào, wǒ wǎnshang shuìjiào qián dōu huì dìngshang nàozhōng.',ex_vn:'Nếu sáng có tiết, để không đến muộn, tối nào trước khi ngủ tôi cũng đặt đồng hồ báo thức.',
   exList:[
     {zh:'如果早上有课，为了不迟到，我晚上睡觉前都会定上闹钟。',py:'Rúguǒ zǎoshang yǒu kè, wèile bù chídào, wǒ wǎnshang shuìjiào qián dōu huì dìngshang nàozhōng.',vn:'Nếu sáng có tiết, để không đến muộn, tối nào trước khi ngủ tôi cũng đặt đồng hồ báo thức.'},
     {zh:'闹钟响了三遍，他居然还没醒。',py:'Nàozhōng xiǎngle sān biàn, tā jūrán hái méi xǐng.',vn:'Chuông báo thức reo ba lần mà cậu ấy vẫn chưa tỉnh.'},
     {zh:'我把闹钟定在早上六点半。',py:'Wǒ bǎ nàozhōng dìng zài zǎoshang liù diǎn bàn.',vn:'Tôi đặt đồng hồ báo thức lúc sáu rưỡi sáng.'}
   ],
   colloFull:[
     {zh:'定闹钟',py:'dìng nàozhōng',vn:'đặt đồng hồ báo thức'},
     {zh:'闹钟响了',py:'nàozhōng xiǎng le',vn:'chuông báo thức reo'},
     {zh:'关掉闹钟',py:'guāndiào nàozhōng',vn:'tắt báo thức'},
     {zh:'闹钟的铃声',py:'nàozhōng de língshēng',vn:'tiếng chuông báo thức'},
     {zh:'被闹钟叫醒',py:'bèi nàozhōng jiàoxǐng',vn:'bị đồng hồ báo thức gọi dậy'}
   ],
   patterns:[
     {s:'定 / 设 + (一)个 + 闹钟',m:'Đặt đồng hồ báo thức'},
     {s:'被 + 闹钟 + 叫醒 / 吵醒',m:'Bị báo thức đánh thức'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Sáng nay sáu giờ tôi đã bị đồng hồ báo thức đánh thức.',answer:'今天早上六点我被闹钟叫醒了。',answerPy:'Jīntiān zǎoshang liù diǎn wǒ bèi nàozhōng jiàoxǐng le.',
      note:'Câu 被: người bị tác động + 被 + 闹钟 + động từ + bổ ngữ kết quả (叫醒).',pair:'被'},
     {promptLang:'vi',prompt:'Chỉ cần đặt báo thức xong là sáng mai bạn sẽ không dậy muộn.',answer:'只要定好闹钟，你明天早上就不会起晚了。',answerPy:'Zhǐyào dìnghǎo nàozhōng, nǐ míngtiān zǎoshang jiù bú huì qǐwǎn le.',
      note:'定好闹钟 = đặt xong báo thức; 就 đứng sau chủ ngữ của vế sau.',pair:'只要……就……'}
   ]},

  {n:2,zh:'危害',py:'wēihài',pos:'Động từ',vn:'gây nguy hại, làm hại; tác hại',hv:'nguy hại',em:'⚠️',lesson:11,
   explain:['Gây tổn hại nghiêm trọng đến sức khỏe, xã hội, an ninh, môi trường…','Cũng dùng như danh từ: 闹钟的危害 (tác hại của đồng hồ báo thức).'],
   usage:'危害 + 健康/社会/安全 (tân ngữ lớn, trừu tượng). Làm danh từ: 有危害, ……的危害. Mức độ nặng hơn 伤害.',
   collo:['危害健康','危害社会安全','闹钟的危害','有很大的危害'],
   ex_zh:'抽烟会危害健康。',ex_py:'Chōuyān huì wēihài jiànkāng.',ex_vn:'Hút thuốc sẽ gây hại cho sức khỏe.',
   exList:[
     {zh:'抽烟会危害健康。',py:'Chōuyān huì wēihài jiànkāng.',vn:'Hút thuốc sẽ gây hại cho sức khỏe.'},
     {zh:'他的行为已经严重危害到了社会安全。',py:'Tā de xíngwéi yǐjīng yánzhòng wēihài dàole shèhuì ānquán.',vn:'Hành vi của hắn đã gây nguy hại nghiêm trọng đến an ninh xã hội.'},
     {zh:'很多人不知道熬夜对身体有多大的危害。',py:'Hěn duō rén bù zhīdào áoyè duì shēntǐ yǒu duō dà de wēihài.',vn:'Nhiều người không biết thức khuya có hại cho cơ thể đến mức nào.'}
   ],
   colloFull:[
     {zh:'危害健康',py:'wēihài jiànkāng',vn:'gây hại cho sức khỏe'},
     {zh:'危害社会安全',py:'wēihài shèhuì ānquán',vn:'gây nguy hại cho an ninh xã hội'},
     {zh:'闹钟的危害',py:'nàozhōng de wēihài',vn:'tác hại của đồng hồ báo thức'},
     {zh:'有很大的危害',py:'yǒu hěn dà de wēihài',vn:'có tác hại rất lớn'},
     {zh:'对身体的危害',py:'duì shēntǐ de wēihài',vn:'tác hại đối với cơ thể'}
   ],
   patterns:[
     {s:'危害 + 健康 / 社会 / 安全',m:'Gây hại cho sức khỏe / xã hội / an ninh'},
     {s:'A + 对 + B + 有 + 危害',m:'A có hại cho B'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Thức khuya không những hại sức khỏe mà còn ảnh hưởng đến việc học.',answer:'熬夜不仅危害健康，而且影响学习。',answerPy:'Áoyè bùjǐn wēihài jiànkāng, érqiě yǐngxiǎng xuéxí.',
      note:'危害 mang tân ngữ trừu tượng 健康; hai vế cùng chủ ngữ 熬夜.',pair:'不仅……而且……'},
     {promptLang:'vi',prompt:'Ngày càng nhiều người biết đến tác hại của đồng hồ báo thức.',answer:'越来越多的人知道了闹钟的危害。',answerPy:'Yuèláiyuè duō de rén zhīdàole nàozhōng de wēihài.',
      note:'危害 dùng như danh từ: 闹钟的危害. 越来越多的 + N làm định ngữ.',pair:'越来越'}
   ]},

  {n:3,zh:'人类',py:'rénlèi',pos:'Danh từ',vn:'loài người, nhân loại',hv:'nhân loại',em:'🧑‍🤝‍🧑',lesson:11,
   explain:['Toàn thể con người nói chung (phân biệt với động vật, sinh vật khác).'],
   usage:'Không đi với lượng từ, KHÔNG nói 一个人类. Hay gặp: 人类社会, 人类的历史, 人类的发明.',
   collo:['人类社会','人类的历史','人类的发明','为人类服务'],
   ex_zh:'医学研究证明，人类睡眠有其特定的机制。',ex_py:'Yīxué yánjiū zhèngmíng, rénlèi shuìmián yǒu qí tèdìng de jīzhì.',ex_vn:'Nghiên cứu y học chứng minh giấc ngủ của con người có cơ chế riêng của nó.',
   exList:[
     {zh:'医学研究证明，人类睡眠有其特定的机制。',py:'Yīxué yánjiū zhèngmíng, rénlèi shuìmián yǒu qí tèdìng de jīzhì.',vn:'Nghiên cứu y học chứng minh giấc ngủ của con người có cơ chế riêng của nó.'},
     {zh:'有些国家，闹钟被评为他们最讨厌的人类发明之一。',py:'Yǒuxiē guójiā, nàozhōng bèi píngwéi tāmen zuì tǎoyàn de rénlèi fāmíng zhī yī.',vn:'Ở một số nước, đồng hồ báo thức bị bình chọn là một trong những phát minh của loài người mà họ ghét nhất.'},
     {zh:'保护地球就是保护人类自己。',py:'Bǎohù dìqiú jiù shì bǎohù rénlèi zìjǐ.',vn:'Bảo vệ trái đất chính là bảo vệ chính loài người.'}
   ],
   colloFull:[
     {zh:'人类社会',py:'rénlèi shèhuì',vn:'xã hội loài người'},
     {zh:'人类的历史',py:'rénlèi de lìshǐ',vn:'lịch sử loài người'},
     {zh:'人类的发明',py:'rénlèi de fāmíng',vn:'phát minh của loài người'},
     {zh:'为人类服务',py:'wèi rénlèi fúwù',vn:'phục vụ nhân loại'}
   ],
   patterns:[
     {s:'人类 + 的 + 历史 / 发明 / 健康',m:'… của loài người'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đồng hồ báo thức bị bình chọn là một trong những phát minh đáng ghét nhất của loài người.',answer:'闹钟被评为最讨厌的人类发明之一。',answerPy:'Nàozhōng bèi píngwéi zuì tǎoyàn de rénlèi fāmíng zhī yī.',
      note:'被评为 = được/bị bình chọn là; ……之一 = một trong những ….',pair:'被'},
     {promptLang:'vi',prompt:'Loài người chưa bao giờ ngừng nghiên cứu về giấc ngủ.',answer:'人类从来没有停止过对睡眠的研究。',answerPy:'Rénlèi cónglái méiyǒu tíngzhǐguo duì shuìmián de yánjiū.',
      note:'从来没有 + V + 过: nhấn mạnh chưa từng. 对……的研究 làm tân ngữ.',pair:'从来没……过'}
   ]},

  {n:4,zh:'机制',py:'jīzhì',pos:'Danh từ',vn:'cơ chế',hv:'cơ chế',em:'⚙️',lesson:11,
   explain:['Cách thức vận hành bên trong của một hệ thống (cơ thể, tổ chức, xã hội).'],
   usage:'Hay đi với 特定的 / 内部的 / 保护 + 机制; 建立 / 形成 + 机制. Văn viết: ……有其特定的机制.',
   collo:['睡眠机制','特定的机制','建立机制','身体的保护机制'],
   ex_zh:'人类睡眠有其特定的机制。',ex_py:'Rénlèi shuìmián yǒu qí tèdìng de jīzhì.',ex_vn:'Giấc ngủ của con người có cơ chế riêng của nó.',
   exList:[
     {zh:'人类睡眠有其特定的机制。',py:'Rénlèi shuìmián yǒu qí tèdìng de jīzhì.',vn:'Giấc ngủ của con người có cơ chế riêng của nó.'},
     {zh:'学校建立了新的奖励机制，鼓励学生多读书。',py:'Xuéxiào jiànlìle xīn de jiǎnglì jīzhì, gǔlì xuésheng duō dú shū.',vn:'Nhà trường xây dựng cơ chế khen thưởng mới, khuyến khích học sinh đọc nhiều sách.'},
     {zh:'出汗是身体的一种自我保护机制。',py:'Chūhàn shì shēntǐ de yì zhǒng zìwǒ bǎohù jīzhì.',vn:'Đổ mồ hôi là một cơ chế tự bảo vệ của cơ thể.'}
   ],
   colloFull:[
     {zh:'睡眠机制',py:'shuìmián jīzhì',vn:'cơ chế giấc ngủ'},
     {zh:'特定的机制',py:'tèdìng de jīzhì',vn:'cơ chế riêng, cơ chế đặc thù'},
     {zh:'建立机制',py:'jiànlì jīzhì',vn:'xây dựng cơ chế'},
     {zh:'身体的保护机制',py:'shēntǐ de bǎohù jīzhì',vn:'cơ chế bảo vệ của cơ thể'},
     {zh:'奖励机制',py:'jiǎnglì jīzhì',vn:'cơ chế khen thưởng'}
   ],
   patterns:[
     {s:'建立 / 形成 + ……机制',m:'Xây dựng / hình thành cơ chế …'},
     {s:'……有其特定的机制',m:'… có cơ chế riêng của nó (văn viết)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ khi hiểu cơ chế của giấc ngủ, chúng ta mới ngủ ngon được.',answer:'只有了解睡眠的机制，我们才能睡得好。',answerPy:'Zhǐyǒu liǎojiě shuìmián de jīzhì, wǒmen cái néng shuì de hǎo.',
      note:'只有 nêu điều kiện DUY NHẤT, vế sau bắt buộc dùng 才.',pair:'只有……才……'},
     {promptLang:'vi',prompt:'Chúng ta nên tìm hiểu rõ cơ chế này.',answer:'我们应该把这个机制弄清楚。',answerPy:'Wǒmen yīnggāi bǎ zhège jīzhì nòng qīngchu.',
      note:'Câu 把: 把 + 这个机制 + 弄清楚 (động từ + bổ ngữ kết quả).',pair:'把'}
   ]},

  {n:5,zh:'生物',py:'shēngwù',pos:'Danh từ',vn:'sinh vật; (môn) sinh học',hv:'sinh vật',em:'🌱',lesson:11,
   explain:['Mọi vật có sự sống: người, động vật, thực vật, vi sinh vật.','Còn là tên môn học: 生物课 (môn sinh).'],
   usage:'地球上的生物; 海洋生物; 生物课 / 生物老师; 生物学家.',
   collo:['地球上的生物','生物课','海洋生物','生物学家'],
   ex_zh:'地球上的生物都离不开水和阳光。',ex_py:'Dìqiú shang de shēngwù dōu lí bu kāi shuǐ hé yángguāng.',ex_vn:'Sinh vật trên trái đất đều không thể thiếu nước và ánh nắng.',
   exList:[
     {zh:'地球上的生物都离不开水和阳光。',py:'Dìqiú shang de shēngwù dōu lí bu kāi shuǐ hé yángguāng.',vn:'Sinh vật trên trái đất đều không thể thiếu nước và ánh nắng.'},
     {zh:'我最喜欢上生物课，因为可以做实验。',py:'Wǒ zuì xǐhuan shàng shēngwù kè, yīnwèi kěyǐ zuò shíyàn.',vn:'Tôi thích học môn sinh nhất, vì được làm thí nghiệm.'},
     {zh:'光线是人体内的生物闹钟。',py:'Guāngxiàn shì réntǐ nèi de shēngwù nàozhōng.',vn:'Ánh sáng là chiếc đồng hồ báo thức sinh học bên trong cơ thể người.'}
   ],
   colloFull:[
     {zh:'地球上的生物',py:'dìqiú shang de shēngwù',vn:'sinh vật trên trái đất'},
     {zh:'生物课',py:'shēngwù kè',vn:'môn sinh học'},
     {zh:'海洋生物',py:'hǎiyáng shēngwù',vn:'sinh vật biển'},
     {zh:'生物学家',py:'shēngwùxuéjiā',vn:'nhà sinh vật học'},
     {zh:'生物实验',py:'shēngwù shíyàn',vn:'thí nghiệm sinh học'}
   ],
   patterns:[
     {s:'……上的 + 生物',m:'Sinh vật ở … (地球上的生物)'},
     {s:'生物 + 课 / 老师 / 实验',m:'Môn sinh / giáo viên sinh / thí nghiệm sinh'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nếu không có ánh nắng thì sinh vật trên trái đất sẽ không sống nổi.',answer:'如果没有阳光，地球上的生物就活不下去了。',answerPy:'Rúguǒ méiyǒu yángguāng, dìqiú shang de shēngwù jiù huó bu xiàqù le.',
      note:'活不下去 là bổ ngữ khả năng: không thể sống tiếp.',pair:'如果……就……'},
     {promptLang:'vi',prompt:'Môn sinh học càng ngày càng thú vị.',answer:'生物课越来越有意思了。',answerPy:'Shēngwù kè yuèláiyuè yǒu yìsi le.',
      note:'越来越 + tính từ / cụm 有意思, cuối câu thêm 了 chỉ sự thay đổi.',pair:'越来越'}
   ]},

  {n:6,zh:'规律',py:'guīlǜ',pos:'Danh từ / Tính từ',vn:'quy luật; đều đặn, có nhịp điệu',hv:'quy luật',em:'📈',lesson:11,
   explain:['Danh từ: quy luật tất yếu của sự vật (自然规律, 生物钟规律).','Tính từ: đều đặn, có giờ giấc (生活很规律).'],
   usage:'符合 / 掌握 / 发现 + 规律; 有规律(的运动); 生活很规律.',
   collo:['符合规律','有规律','生活很规律','自然规律','掌握规律'],
   ex_zh:'自然醒是最符合人体生物钟规律的。',ex_py:'Zìrán xǐng shì zuì fúhé réntǐ shēngwùzhōng guīlǜ de.',ex_vn:'Tự nhiên tỉnh giấc là phù hợp nhất với quy luật đồng hồ sinh học của cơ thể.',
   exList:[
     {zh:'自然醒是最符合人体生物钟规律的。',py:'Zìrán xǐng shì zuì fúhé réntǐ shēngwùzhōng guīlǜ de.',vn:'Tự nhiên tỉnh giấc là phù hợp nhất với quy luật đồng hồ sinh học của cơ thể.'},
     {zh:'生命在于运动，有规律的运动对于身体健康大有好处。',py:'Shēngmìng zàiyú yùndòng, yǒu guīlǜ de yùndòng duìyú shēntǐ jiànkāng dà yǒu hǎochu.',vn:'Sống là phải vận động, vận động đều đặn rất có lợi cho sức khỏe.'},
     {zh:'放假以后，我的生活一点儿也不规律了。',py:'Fàngjià yǐhòu, wǒ de shēnghuó yìdiǎnr yě bù guīlǜ le.',vn:'Từ khi được nghỉ, sinh hoạt của tôi chẳng còn điều độ chút nào.'}
   ],
   colloFull:[
     {zh:'符合规律',py:'fúhé guīlǜ',vn:'phù hợp với quy luật'},
     {zh:'有规律',py:'yǒu guīlǜ',vn:'có quy luật, đều đặn'},
     {zh:'生活很规律',py:'shēnghuó hěn guīlǜ',vn:'sinh hoạt rất điều độ'},
     {zh:'自然规律',py:'zìrán guīlǜ',vn:'quy luật tự nhiên'},
     {zh:'掌握规律',py:'zhǎngwò guīlǜ',vn:'nắm được quy luật'}
   ],
   patterns:[
     {s:'符合 / 掌握 / 发现 + 规律',m:'Phù hợp / nắm / phát hiện quy luật'},
     {s:'(生活 / 作息) + 很规律',m:'(Sinh hoạt) rất điều độ — dùng như tính từ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần sinh hoạt điều độ thì sẽ không dễ bị ốm.',answer:'只要生活有规律，就不容易生病。',answerPy:'Zhǐyào shēnghuó yǒu guīlǜ, jiù bù róngyì shēngbìng.',
      note:'有规律 = điều độ; 只要 nêu điều kiện đủ, vế sau dùng 就.',pair:'只要……就……'},
     {promptLang:'vi',prompt:'Từ khi lên cấp ba, giờ giấc của tôi ngày càng không đều đặn.',answer:'上高中以后，我的作息越来越不规律了。',answerPy:'Shàng gāozhōng yǐhòu, wǒ de zuòxī yuèláiyuè bù guīlǜ le.',
      note:'规律 dùng như tính từ nên phủ định bằng 不: 不规律.',pair:'越来越'}
   ]},

  {n:7,zh:'光线',py:'guāngxiàn',pos:'Danh từ',vn:'ánh sáng, tia sáng',hv:'quang tuyến',em:'🔆',lesson:11,
   explain:['Ánh sáng chiếu vào một nơi (thường nói về độ sáng tối).'],
   usage:'光线 + 很强 / 很暗 / 明亮 / 昏暗; 太阳光线, 自然光线. 光线 nói chung mọi nguồn sáng, 阳光 chỉ ánh nắng mặt trời.',
   collo:['太阳光线','光线很暗','光线明亮','自然光线'],
   ex_zh:'光线是自然醒的必要条件，是人体内的生物闹钟。',ex_py:'Guāngxiàn shì zìrán xǐng de bìyào tiáojiàn, shì réntǐ nèi de shēngwù nàozhōng.',ex_vn:'Ánh sáng là điều kiện cần thiết để tự nhiên tỉnh giấc, là chiếc đồng hồ báo thức sinh học bên trong cơ thể.',
   exList:[
     {zh:'光线是自然醒的必要条件，是人体内的生物闹钟。',py:'Guāngxiàn shì zìrán xǐng de bìyào tiáojiàn, shì réntǐ nèi de shēngwù nàozhōng.',vn:'Ánh sáng là điều kiện cần thiết để tự nhiên tỉnh giấc, là chiếc đồng hồ báo thức sinh học bên trong cơ thể.'},
     {zh:'这里光线太暗了，看书对眼睛不好。',py:'Zhèli guāngxiàn tài àn le, kàn shū duì yǎnjing bù hǎo.',vn:'Ở đây ánh sáng tối quá, đọc sách không tốt cho mắt.'},
     {zh:'早晨，人体感受到逐渐变强的太阳光线。',py:'Zǎochen, réntǐ gǎnshòu dào zhújiàn biàn qiáng de tàiyáng guāngxiàn.',vn:'Buổi sáng, cơ thể cảm nhận được ánh nắng mặt trời mạnh dần lên.'}
   ],
   colloFull:[
     {zh:'太阳光线',py:'tàiyáng guāngxiàn',vn:'ánh nắng mặt trời'},
     {zh:'光线很暗',py:'guāngxiàn hěn àn',vn:'ánh sáng rất tối'},
     {zh:'光线明亮',py:'guāngxiàn míngliàng',vn:'ánh sáng sáng sủa'},
     {zh:'自然光线',py:'zìrán guāngxiàn',vn:'ánh sáng tự nhiên'},
     {zh:'光线昏暗',py:'guāngxiàn hūn\'àn',vn:'ánh sáng mờ tối'}
   ],
   patterns:[
     {s:'光线 + 明亮 / 昏暗 / 很强',m:'Ánh sáng sáng sủa / mờ tối / mạnh'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Phòng này ánh sáng tối quá, bạn kéo rèm cửa ra đi.',answer:'这个房间光线太暗了，你把窗帘拉开吧。',answerPy:'Zhège fángjiān guāngxiàn tài àn le, nǐ bǎ chuānglián lākāi ba.',
      note:'光线 làm chủ ngữ của tính từ 暗; vế sau là câu 把 + 拉开.',pair:'把'},
     {promptLang:'vi',prompt:'Ánh sáng càng mạnh thì người ta tỉnh dậy càng nhanh.',answer:'光线越强，人醒得越快。',answerPy:'Guāngxiàn yuè qiáng, rén xǐng de yuè kuài.',
      note:'越 A 越 B: B thay đổi theo A.',pair:'越……越……'}
   ]},

  {n:8,zh:'必要',py:'bìyào',pos:'Tính từ',vn:'cần thiết, thiết yếu',hv:'tất yếu',em:'✅',lesson:11,
   explain:['Không thể thiếu, cần phải có.','Là TÍNH TỪ — không đứng thẳng trước động từ như 必须 (không nói 必要去).'],
   usage:'必要的 + 条件 / 准备; (没)有必要 + V; 很有必要.',
   collo:['必要条件','必要的准备','有必要','没有必要'],
   ex_zh:'光线是自然醒的必要条件。',ex_py:'Guāngxiàn shì zìrán xǐng de bìyào tiáojiàn.',ex_vn:'Ánh sáng là điều kiện cần thiết để tự nhiên tỉnh giấc.',
   exList:[
     {zh:'光线是自然醒的必要条件。',py:'Guāngxiàn shì zìrán xǐng de bìyào tiáojiàn.',vn:'Ánh sáng là điều kiện cần thiết để tự nhiên tỉnh giấc.'},
     {zh:'在婚姻问题上，听听父母的意见还是很有必要的。',py:'Zài hūnyīn wèntí shang, tīngting fùmǔ de yìjiàn háishi hěn yǒu bìyào de.',vn:'Trong chuyện hôn nhân, nghe ý kiến của bố mẹ vẫn là rất cần thiết.'},
     {zh:'这点儿小事，没有必要告诉老师。',py:'Zhè diǎnr xiǎo shì, méiyǒu bìyào gàosu lǎoshī.',vn:'Chuyện nhỏ thế này thì không cần phải báo với thầy.'}
   ],
   colloFull:[
     {zh:'必要条件',py:'bìyào tiáojiàn',vn:'điều kiện cần thiết'},
     {zh:'必要的准备',py:'bìyào de zhǔnbèi',vn:'sự chuẩn bị cần thiết'},
     {zh:'有必要',py:'yǒu bìyào',vn:'cần thiết'},
     {zh:'没有必要',py:'méiyǒu bìyào',vn:'không cần thiết'},
     {zh:'很有必要',py:'hěn yǒu bìyào',vn:'rất cần thiết'}
   ],
   patterns:[
     {s:'(很)有必要 + V',m:'Cần thiết phải …'},
     {s:'没有必要 + V',m:'Không cần thiết phải …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy bài kiểm tra không khó nhưng sự chuẩn bị cần thiết vẫn phải làm.',answer:'虽然考试不难，但是必要的准备还是要做的。',answerPy:'Suīrán kǎoshì bù nán, dànshì bìyào de zhǔnbèi háishi yào zuò de.',
      note:'必要 làm định ngữ: 必要的准备. Không nói 必要准备 như động từ.',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Nghe ý kiến của bố mẹ là rất cần thiết.',answer:'听听父母的意见是很有必要的。',answerPy:'Tīngting fùmǔ de yìjiàn shì hěn yǒu bìyào de.',
      note:'是……的 nhấn mạnh nhận định; 很有必要 chứ không phải 很必要 trước động từ.',pair:'是……的'}
   ]},

  {n:9,zh:'过渡',py:'guòdù',pos:'Động từ',vn:'quá độ, chuyển tiếp',hv:'quá độ',em:'🔄',lesson:11,
   explain:['Chuyển DẦN DẦN từ giai đoạn / trạng thái này sang giai đoạn / trạng thái khác.'],
   usage:'从 A 过渡到 B; 过渡阶段, 过渡期. Nhấn mạnh quá trình chuyển từ từ, không đột ngột.',
   collo:['从……过渡到……','过渡阶段','自然地过渡','过渡期'],
   ex_zh:'人逐渐从熟睡过渡到浅睡，直到醒来。',ex_py:'Rén zhújiàn cóng shúshuì guòdù dào qiǎnshuì, zhídào xǐnglái.',ex_vn:'Con người dần dần chuyển từ ngủ say sang ngủ nông cho đến khi tỉnh dậy.',
   exList:[
     {zh:'人逐渐从熟睡过渡到浅睡，直到醒来。',py:'Rén zhújiàn cóng shúshuì guòdù dào qiǎnshuì, zhídào xǐnglái.',vn:'Con người dần dần chuyển từ ngủ say sang ngủ nông cho đến khi tỉnh dậy.'},
     {zh:'擦擦办公桌，整理一下文件，这些都可以让你从放松的休息状态自然过渡到工作状态。',py:'Cāca bàngōngzhuō, zhěnglǐ yíxià wénjiàn, zhèxiē dōu kěyǐ ràng nǐ cóng fàngsōng de xiūxi zhuàngtài zìrán guòdù dào gōngzuò zhuàngtài.',vn:'Lau bàn làm việc, sắp xếp lại giấy tờ — những việc này đều giúp bạn chuyển tự nhiên từ trạng thái nghỉ ngơi thư giãn sang trạng thái làm việc.'},
     {zh:'从初中到高中有一个过渡阶段，别着急。',py:'Cóng chūzhōng dào gāozhōng yǒu yí ge guòdù jiēduàn, bié zháojí.',vn:'Từ cấp hai lên cấp ba có một giai đoạn chuyển tiếp, đừng vội.'}
   ],
   colloFull:[
     {zh:'从……过渡到……',py:'cóng……guòdù dào……',vn:'chuyển từ … sang …'},
     {zh:'过渡阶段',py:'guòdù jiēduàn',vn:'giai đoạn chuyển tiếp'},
     {zh:'自然地过渡',py:'zìrán de guòdù',vn:'chuyển tiếp một cách tự nhiên'},
     {zh:'过渡期',py:'guòdùqī',vn:'thời kỳ quá độ'}
   ],
   patterns:[
     {s:'从 A + 过渡到 + B',m:'Chuyển dần từ A sang B'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Kỳ nghỉ hè vừa kết thúc là tôi phải chuyển sang trạng thái học tập.',answer:'暑假一结束，我就得过渡到学习状态。',answerPy:'Shǔjià yì jiéshù, wǒ jiù děi guòdù dào xuéxí zhuàngtài.',
      note:'过渡到 + trạng thái mới; 得 đọc děi (phải).',pair:'一……就……'},
     {promptLang:'vi',prompt:'Nếu không có giai đoạn chuyển tiếp thì học sinh sẽ không quen.',answer:'如果没有过渡阶段，学生就会不习惯。',answerPy:'Rúguǒ méiyǒu guòdù jiēduàn, xuésheng jiù huì bù xíguàn.',
      note:'过渡 làm định ngữ: 过渡阶段.',pair:'如果……就……'}
   ]},

  {n:10,zh:'浅',py:'qiǎn',pos:'Tính từ',vn:'nông, cạn; (ngủ) không sâu; (màu) nhạt',hv:'thiển',em:'🌊',lesson:11,
   explain:['Nông, cạn (nước, hố) — trái nghĩa với 深.','Mở rộng: ngủ không sâu (浅睡), màu nhạt (浅色), kiến thức nông.'],
   usage:'河水很浅; 浅睡 ↔ 熟睡 / 深度睡眠; 睡得很浅; 浅蓝色, 浅色的衣服.',
   collo:['水很浅','浅睡','浅蓝色','睡得很浅'],
   ex_zh:'这条河很浅，孩子们可以在里面玩儿。',ex_py:'Zhè tiáo hé hěn qiǎn, háizimen kěyǐ zài lǐmiàn wánr.',ex_vn:'Con sông này rất nông, bọn trẻ có thể chơi dưới đó.',
   exList:[
     {zh:'这条河很浅，孩子们可以在里面玩儿。',py:'Zhè tiáo hé hěn qiǎn, háizimen kěyǐ zài lǐmiàn wánr.',vn:'Con sông này rất nông, bọn trẻ có thể chơi dưới đó.'},
     {zh:'人逐渐从熟睡过渡到浅睡，直到醒来。',py:'Rén zhújiàn cóng shúshuì guòdù dào qiǎnshuì, zhídào xǐnglái.',vn:'Con người dần dần chuyển từ ngủ say sang ngủ nông cho đến khi tỉnh dậy.'},
     {zh:'我睡觉睡得很浅，一点儿声音都能把我吵醒。',py:'Wǒ shuìjiào shuì de hěn qiǎn, yìdiǎnr shēngyīn dōu néng bǎ wǒ chǎoxǐng.',vn:'Tôi ngủ rất nông, một chút tiếng động cũng làm tôi tỉnh giấc.'}
   ],
   colloFull:[
     {zh:'水很浅',py:'shuǐ hěn qiǎn',vn:'nước rất nông'},
     {zh:'浅睡',py:'qiǎnshuì',vn:'ngủ nông'},
     {zh:'浅蓝色',py:'qiǎnlánsè',vn:'màu xanh nhạt'},
     {zh:'睡得很浅',py:'shuì de hěn qiǎn',vn:'ngủ không sâu giấc'},
     {zh:'浅色的衣服',py:'qiǎnsè de yīfu',vn:'quần áo màu nhạt'}
   ],
   patterns:[
     {s:'浅 ↔ 深',m:'Nông ↔ sâu (nước, giấc ngủ, màu sắc)'},
     {s:'浅 + màu (浅蓝色 / 浅绿色)',m:'Màu nhạt'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi ngủ rất nông, ngay cả tiếng muỗi cũng có thể đánh thức tôi.',answer:'我睡得很浅，连蚊子的声音都能把我吵醒。',answerPy:'Wǒ shuì de hěn qiǎn, lián wénzi de shēngyīn dōu néng bǎ wǒ chǎoxǐng.',
      note:'睡得很浅: bổ ngữ trạng thái. 连……都…… nhấn mạnh trường hợp cực nhỏ.',pair:'连……都……'},
     {promptLang:'vi',prompt:'Nước ở đây tuy nông nhưng bạn vẫn phải cẩn thận.',answer:'这里的水虽然很浅，但是你也要小心。',answerPy:'Zhèli de shuǐ suīrán hěn qiǎn, dànshì nǐ yě yào xiǎoxīn.',
      note:'浅 là tính từ, làm vị ngữ sau 很.',pair:'虽然……但是……'}
   ]},

  {n:11,zh:'现代',py:'xiàndài',pos:'Danh từ / Tính từ',vn:'thời đại ngày nay; hiện đại',hv:'hiện đại',em:'🏙️',lesson:11,
   explain:['Danh từ: thời đại ngày nay (đối lập với 古代).','Tính từ: hiện đại, tân tiến (现代化).'],
   usage:'现代生活, 现代人, 现代社会, 现代科技; 很现代. Đối lập: 古代, 传统.',
   collo:['现代生活','现代人','现代社会','现代化'],
   ex_zh:'紧张的现代生活，使很多上班的人无法享受轻松舒适的睡眠。',ex_py:'Jǐnzhāng de xiàndài shēnghuó, shǐ hěn duō shàngbān de rén wúfǎ xiǎngshòu qīngsōng shūshì de shuìmián.',ex_vn:'Cuộc sống hiện đại căng thẳng khiến nhiều người đi làm không thể tận hưởng giấc ngủ thư thái, dễ chịu.',
   exList:[
     {zh:'紧张的现代生活，使很多上班的人无法享受轻松舒适的睡眠。',py:'Jǐnzhāng de xiàndài shēnghuó, shǐ hěn duō shàngbān de rén wúfǎ xiǎngshòu qīngsōng shūshì de shuìmián.',vn:'Cuộc sống hiện đại căng thẳng khiến nhiều người đi làm không thể tận hưởng giấc ngủ thư thái, dễ chịu.'},
     {zh:'生活紧张对现代人的生理和心理都产生了很大的危害。',py:'Shēnghuó jǐnzhāng duì xiàndàirén de shēnglǐ hé xīnlǐ dōu chǎnshēngle hěn dà de wēihài.',vn:'Cuộc sống căng thẳng gây hại rất lớn cho cả sinh lý lẫn tâm lý của người hiện đại.'},
     {zh:'这座城市越来越现代了。',py:'Zhè zuò chéngshì yuèláiyuè xiàndài le.',vn:'Thành phố này ngày càng hiện đại.'}
   ],
   colloFull:[
     {zh:'现代生活',py:'xiàndài shēnghuó',vn:'cuộc sống hiện đại'},
     {zh:'现代人',py:'xiàndàirén',vn:'người hiện đại'},
     {zh:'现代社会',py:'xiàndài shèhuì',vn:'xã hội hiện đại'},
     {zh:'现代化',py:'xiàndàihuà',vn:'hiện đại hóa'},
     {zh:'现代科技',py:'xiàndài kējì',vn:'khoa học kỹ thuật hiện đại'}
   ],
   patterns:[
     {s:'现代 + 生活 / 社会 / 科技',m:'Cuộc sống / xã hội / khoa học kỹ thuật hiện đại'},
     {s:'现代 ↔ 古代 / 传统',m:'Hiện đại ↔ cổ đại / truyền thống'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nhịp sống hiện đại ngày càng căng thẳng.',answer:'现代生活越来越紧张了。',answerPy:'Xiàndài shēnghuó yuèláiyuè jǐnzhāng le.',
      note:'现代 làm định ngữ trực tiếp, không cần 的: 现代生活.',pair:'越来越'},
     {promptLang:'vi',prompt:'Người hiện đại không những ngủ ít mà còn hay thức khuya.',answer:'现代人不仅睡得少，而且经常熬夜。',answerPy:'Xiàndàirén bùjǐn shuì de shǎo, érqiě jīngcháng áoyè.',
      note:'现代人 là một từ; hai vế cùng chủ ngữ nên 不仅 đứng sau chủ ngữ.',pair:'不仅……而且……'}
   ]},

  {n:12,zh:'享受',py:'xiǎngshòu',pos:'Động từ',vn:'hưởng thụ, tận hưởng',hv:'hưởng thụ',em:'😌',lesson:11,
   explain:['Được hưởng niềm vui, sự thoải mái về vật chất hay tinh thần.'],
   usage:'享受 + 自由 / 艺术 / 人生 / 美酒 / 幸福 / 快乐 (bảng 词语搭配 của sách). Cũng làm danh từ: 一种享受.',
   collo:['享受生活','享受自由','享受快乐','享受幸福','一种享受'],
   ex_zh:'很多上班的人无法享受轻松舒适的睡眠。',ex_py:'Hěn duō shàngbān de rén wúfǎ xiǎngshòu qīngsōng shūshì de shuìmián.',ex_vn:'Nhiều người đi làm không thể tận hưởng giấc ngủ thư thái, dễ chịu.',
   exList:[
     {zh:'很多上班的人无法享受轻松舒适的睡眠。',py:'Hěn duō shàngbān de rén wúfǎ xiǎngshòu qīngsōng shūshì de shuìmián.',vn:'Nhiều người đi làm không thể tận hưởng giấc ngủ thư thái, dễ chịu.'},
     {zh:'为了享受轻松的生活，夫妻俩决定把家搬到这个安静的小镇。',py:'Wèile xiǎngshòu qīngsōng de shēnghuó, fūqī liǎ juédìng bǎ jiā bāndào zhège ānjìng de xiǎozhèn.',vn:'Để tận hưởng cuộc sống thư thái, hai vợ chồng quyết định chuyển nhà đến thị trấn nhỏ yên tĩnh này.'},
     {zh:'周末睡到自然醒，对我来说是一种享受。',py:'Zhōumò shuìdào zìrán xǐng, duì wǒ lái shuō shì yì zhǒng xiǎngshòu.',vn:'Cuối tuần ngủ đến khi tự tỉnh, đối với tôi là một sự tận hưởng.'}
   ],
   colloFull:[
     {zh:'享受生活',py:'xiǎngshòu shēnghuó',vn:'tận hưởng cuộc sống'},
     {zh:'享受自由',py:'xiǎngshòu zìyóu',vn:'tận hưởng tự do'},
     {zh:'享受快乐',py:'xiǎngshòu kuàilè',vn:'tận hưởng niềm vui'},
     {zh:'享受幸福',py:'xiǎngshòu xìngfú',vn:'tận hưởng hạnh phúc'},
     {zh:'一种享受',py:'yì zhǒng xiǎngshòu',vn:'một sự tận hưởng'}
   ],
   patterns:[
     {s:'享受 + 自由 / 艺术 / 人生 / 幸福 / 快乐',m:'Tận hưởng …'},
     {s:'对 + ai + 来说是一种享受',m:'Đối với ai là một sự tận hưởng'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi làm xong bài tập rồi mới bắt đầu tận hưởng cuối tuần.',answer:'我把作业做完了，才开始享受周末。',answerPy:'Wǒ bǎ zuòyè zuòwán le, cái kāishǐ xiǎngshòu zhōumò.',
      note:'Vế đầu là câu 把 + 做完; 享受 + 周末 (tân ngữ là khoảng thời gian dễ chịu).',pair:'把'},
     {promptLang:'vi',prompt:'Kỳ nghỉ hè vừa đến là cậu ấy bắt đầu tận hưởng tự do.',answer:'暑假一到，他就开始享受自由了。',answerPy:'Shǔjià yí dào, tā jiù kāishǐ xiǎngshòu zìyóu le.',
      note:'享受自由 là cụm trong bảng 词语搭配 của bài.',pair:'一……就……'}
   ]},

  {n:13,zh:'用途',py:'yòngtú',pos:'Danh từ',vn:'công dụng',hv:'dụng đồ',em:'🔧',lesson:11,
   explain:['Tác dụng, chỗ dùng của một vật.'],
   usage:'……的用途 + 很广 / 很多; 有……用途; 主要用途.',
   collo:['用途很广','闹钟的用途','有很多用途','主要用途'],
   ex_zh:'闹钟的用途就显得格外重要了。',ex_py:'Nàozhōng de yòngtú jiù xiǎnde géwài zhòngyào le.',ex_vn:'Công dụng của đồng hồ báo thức vì thế càng trở nên đặc biệt quan trọng.',
   exList:[
     {zh:'闹钟的用途就显得格外重要了。',py:'Nàozhōng de yòngtú jiù xiǎnde géwài zhòngyào le.',vn:'Công dụng của đồng hồ báo thức vì thế càng trở nên đặc biệt quan trọng.'},
     {zh:'手机的用途越来越广，不只是打电话。',py:'Shǒujī de yòngtú yuèláiyuè guǎng, bù zhǐ shì dǎ diànhuà.',vn:'Công dụng của điện thoại ngày càng rộng, không chỉ để gọi điện.'},
     {zh:'这种竹子用途很多，可以做筷子，也可以做家具。',py:'Zhè zhǒng zhúzi yòngtú hěn duō, kěyǐ zuò kuàizi, yě kěyǐ zuò jiājù.',vn:'Loại tre này có nhiều công dụng, có thể làm đũa, cũng có thể làm đồ gỗ.'}
   ],
   colloFull:[
     {zh:'用途很广',py:'yòngtú hěn guǎng',vn:'công dụng rất rộng'},
     {zh:'闹钟的用途',py:'nàozhōng de yòngtú',vn:'công dụng của đồng hồ báo thức'},
     {zh:'有很多用途',py:'yǒu hěn duō yòngtú',vn:'có nhiều công dụng'},
     {zh:'主要用途',py:'zhǔyào yòngtú',vn:'công dụng chính'}
   ],
   patterns:[
     {s:'……的用途 + 很广 / 很多',m:'Công dụng của … rất rộng / rất nhiều'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Công dụng của điện thoại ngày càng nhiều.',answer:'手机的用途越来越多了。',answerPy:'Shǒujī de yòngtú yuèláiyuè duō le.',
      note:'用途 là danh từ, làm chủ ngữ của tính từ 多.',pair:'越来越'},
     {promptLang:'vi',prompt:'Thứ này tuy nhỏ nhưng có rất nhiều công dụng.',answer:'这个东西虽然很小，但是用途很多。',answerPy:'Zhège dōngxi suīrán hěn xiǎo, dànshì yòngtú hěn duō.',
      note:'Câu chủ–vị làm vị ngữ: 这个东西 + 用途很多.',pair:'虽然……但是……'}
   ]},

  {n:14,zh:'实验',py:'shíyàn',pos:'Động từ / Danh từ',vn:'làm thí nghiệm; thí nghiệm',hv:'thực nghiệm',em:'🧪',lesson:11,
   explain:['Tiến hành thử để kiểm chứng một giả thuyết; hoạt động thí nghiệm đó.'],
   usage:'做实验, 进行实验; 实验室; 实验(研究)证明…….',
   collo:['做实验','实验失败','实验研究','实验室'],
   ex_zh:'但实验研究证明，人们对这两种方式所产生的反应是很不相同的。',ex_py:'Dàn shíyàn yánjiū zhèngmíng, rénmen duì zhè liǎng zhǒng fāngshì suǒ chǎnshēng de fǎnyìng shì hěn bù xiāngtóng de.',ex_vn:'Nhưng nghiên cứu thực nghiệm chứng minh, phản ứng mà con người sinh ra với hai cách này là rất khác nhau.',
   exList:[
     {zh:'但实验研究证明，人们对这两种方式所产生的反应是很不相同的。',py:'Dàn shíyàn yánjiū zhèngmíng, rénmen duì zhè liǎng zhǒng fāngshì suǒ chǎnshēng de fǎnyìng shì hěn bù xiāngtóng de.',vn:'Nhưng nghiên cứu thực nghiệm chứng minh, phản ứng mà con người sinh ra với hai cách này là rất khác nhau.'},
     {zh:'实验失败了没关系，打起精神从头再来。',py:'Shíyàn shībàile méi guānxi, dǎqǐ jīngshen cóngtóu zài lái.',vn:'Thí nghiệm thất bại cũng không sao, lấy lại tinh thần làm lại từ đầu.'},
     {zh:'来自北京一所大学的学生做了关于这个问题的实验。',py:'Láizì Běijīng yì suǒ dàxué de xuésheng zuòle guānyú zhège wèntí de shíyàn.',vn:'Sinh viên của một trường đại học ở Bắc Kinh đã làm thí nghiệm về vấn đề này.'}
   ],
   colloFull:[
     {zh:'做实验',py:'zuò shíyàn',vn:'làm thí nghiệm'},
     {zh:'实验失败',py:'shíyàn shībài',vn:'thí nghiệm thất bại'},
     {zh:'实验研究',py:'shíyàn yánjiū',vn:'nghiên cứu thực nghiệm'},
     {zh:'实验室',py:'shíyànshì',vn:'phòng thí nghiệm'},
     {zh:'进行实验',py:'jìnxíng shíyàn',vn:'tiến hành thí nghiệm'}
   ],
   patterns:[
     {s:'做 / 进行 + 实验',m:'Làm / tiến hành thí nghiệm'},
     {s:'实验(研究)证明 + ……',m:'Thí nghiệm chứng minh rằng …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chúng tôi đã làm xong thí nghiệm rồi.',answer:'我们把实验做完了。',answerPy:'Wǒmen bǎ shíyàn zuòwán le.',
      note:'Câu 把: 把 + 实验 + 做完 (động từ + bổ ngữ kết quả).',pair:'把'},
     {promptLang:'vi',prompt:'Dù thí nghiệm thất bại, chúng ta cũng không nên bỏ cuộc.',answer:'即使实验失败了，我们也不应该放弃。',answerPy:'Jíshǐ shíyàn shībài le, wǒmen yě bù yīnggāi fàngqì.',
      note:'即使 nêu giả thiết, vế sau dùng 也.',pair:'即使……也……'}
   ]},

  {n:15,zh:'铃',py:'líng',pos:'Danh từ',vn:'cái chuông; tiếng chuông',hv:'linh',em:'🔔',lesson:11,
   explain:['Cái chuông nhỏ; cũng chỉ chuông báo: 门铃 (chuông cửa), 闹铃 (chuông báo thức), 上课铃.'],
   usage:'铃响了; 门铃, 闹铃, 上课铃, 下课铃; 铃声.',
   collo:['铃响了','门铃','闹铃','上课铃','铃声'],
   ex_zh:'上课铃一响，同学们就跑回了教室。',ex_py:'Shàngkè líng yì xiǎng, tóngxuémen jiù pǎohuíle jiàoshì.',ex_vn:'Chuông vào học vừa reo, các bạn đã chạy về lớp.',
   exList:[
     {zh:'上课铃一响，同学们就跑回了教室。',py:'Shàngkè líng yì xiǎng, tóngxuémen jiù pǎohuíle jiàoshì.',vn:'Chuông vào học vừa reo, các bạn đã chạy về lớp.'},
     {zh:'门铃响了，快去看看是谁。',py:'Ménlíng xiǎng le, kuài qù kànkan shì shéi.',vn:'Chuông cửa reo rồi, mau ra xem ai đấy.'},
     {zh:'闹铃的声音太吵了，我换了一个柔和一点儿的。',py:'Nàolíng de shēngyīn tài chǎo le, wǒ huànle yí ge róuhé yìdiǎnr de.',vn:'Tiếng chuông báo thức ồn quá, tôi đổi sang một tiếng dịu hơn.'}
   ],
   colloFull:[
     {zh:'铃响了',py:'líng xiǎng le',vn:'chuông reo rồi'},
     {zh:'门铃',py:'ménlíng',vn:'chuông cửa'},
     {zh:'闹铃',py:'nàolíng',vn:'chuông báo thức'},
     {zh:'上课铃',py:'shàngkè líng',vn:'chuông vào học'},
     {zh:'铃声',py:'língshēng',vn:'tiếng chuông'}
   ],
   patterns:[
     {s:'……铃 + 响了',m:'Chuông … reo rồi'},
     {s:'门铃 / 闹铃 / 上课铃 / 下课铃',m:'Chuông cửa / báo thức / vào học / tan học'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chuông tan học vừa reo là mọi người chạy ra ngoài.',answer:'下课铃一响，大家就跑出去了。',answerPy:'Xiàkè líng yì xiǎng, dàjiā jiù pǎo chūqù le.',
      note:'一 + V1, 就 + V2: hai việc nối tiếp ngay.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Tôi bị tiếng chuông cửa đánh thức.',answer:'我被门铃声吵醒了。',answerPy:'Wǒ bèi ménlíng shēng chǎoxǐng le.',
      note:'被 + tác nhân (门铃声) + 吵醒: bị làm ồn đến tỉnh.',pair:'被'}
   ]},

  {n:16,zh:'所',py:'suǒ',pos:'Trợ từ',vn:'(đứng trước động từ) cái mà, điều mà; lượng từ (trường, bệnh viện)',hv:'sở',em:'🏫',lesson:11,
   explain:['Trợ từ: đặt trước động từ trong cụm chủ–vị, chỉ đối tượng của hành động (我所知道的 = điều mà tôi biết). Thiên về văn viết.','Lượng từ: dùng cho trường học, bệnh viện, cơ quan: 一所大学.'],
   usage:'(A) + 所 + V + 的 (+ N); 有所 + V (有所提高); 无所不谈; 一所大学 / 医院 / 幼儿园.',
   collo:['我所知道的','所产生的反应','有所提高','一所大学','无所不谈'],
   ex_zh:'人们对自然醒与被闹钟铃声叫醒这两种方式所产生的反应是很不相同的。',ex_py:'Rénmen duì zìrán xǐng yǔ bèi nàozhōng língshēng jiàoxǐng zhè liǎng zhǒng fāngshì suǒ chǎnshēng de fǎnyìng shì hěn bù xiāngtóng de.',ex_vn:'Phản ứng mà con người sinh ra với hai cách — tự nhiên tỉnh dậy và bị tiếng chuông báo thức gọi dậy — là rất khác nhau.',
   exList:[
     {zh:'人们对自然醒与被闹钟铃声叫醒这两种方式所产生的反应是很不相同的。',py:'Rénmen duì zìrán xǐng yǔ bèi nàozhōng língshēng jiàoxǐng zhè liǎng zhǒng fāngshì suǒ chǎnshēng de fǎnyìng shì hěn bù xiāngtóng de.',vn:'Phản ứng mà con người sinh ra với hai cách — tự nhiên tỉnh dậy và bị tiếng chuông báo thức gọi dậy — là rất khác nhau.'},
     {zh:'正如你所估计的那样，李岩确实改变了主意。',py:'Zhèng rú nǐ suǒ gūjì de nàyàng, Lǐ Yán quèshí gǎibiànle zhǔyi.',vn:'Đúng như bạn dự đoán, Lý Nham quả thật đã đổi ý.'},
     {zh:'学校附近就有一所幼儿园，你可以把孩子送到那儿去。',py:'Xuéxiào fùjìn jiù yǒu yì suǒ yòu\'éryuán, nǐ kěyǐ bǎ háizi sòngdào nàr qù.',vn:'Gần trường có ngay một trường mẫu giáo, anh có thể gửi con ở đó.'}
   ],
   colloFull:[
     {zh:'我所知道的',py:'wǒ suǒ zhīdào de',vn:'điều mà tôi biết'},
     {zh:'所产生的反应',py:'suǒ chǎnshēng de fǎnyìng',vn:'phản ứng sinh ra'},
     {zh:'有所提高',py:'yǒu suǒ tígāo',vn:'có phần nâng cao'},
     {zh:'一所大学',py:'yì suǒ dàxué',vn:'một trường đại học'},
     {zh:'无所不谈',py:'wú suǒ bù tán',vn:'chuyện gì cũng nói với nhau'}
   ],
   patterns:[
     {s:'(Chủ ngữ) + 所 + V + 的 (+ N)',m:'Cái / điều mà … (văn viết)'},
     {s:'有 / 无 + 所 + V',m:'Có phần … / không … gì (有所提高, 无所不谈)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Điều mà thầy nói là đúng.',answer:'老师所说的是对的。',answerPy:'Lǎoshī suǒ shuō de shì duì de.',
      note:'所 đứng ngay trước động từ 说; cụm 老师所说的 làm chủ ngữ.',pair:'是……的'},
     {promptLang:'vi',prompt:'Thành tích của tôi tuy chưa cao nhưng đã có phần tiến bộ.',answer:'我的成绩虽然不算高，但是已经有所提高。',answerPy:'Wǒ de chéngjì suīrán bú suàn gāo, dànshì yǐjīng yǒu suǒ tígāo.',
      note:'有所 + động từ hai âm tiết: 有所提高 = có phần nâng cao.',pair:'虽然……但是……'}
   ]},

  {n:17,zh:'状态',py:'zhuàngtài',pos:'Danh từ',vn:'trạng thái, tình trạng',hv:'trạng thái',em:'🌡️',lesson:11,
   explain:['Tình trạng, dáng vẻ của người hay vật ở một thời điểm; cũng chỉ phong độ của một người.'],
   usage:'睡眠状态, 清醒状态, 工作状态, 正常状态; 状态很好 / 不好; 进入……状态.',
   collo:['睡眠状态','清醒状态','工作状态','状态很好','进入状态'],
   ex_zh:'这些能力最多为正常状态的65%。',ex_py:'Zhèxiē nénglì zuì duō wéi zhèngcháng zhuàngtài de bǎi fēn zhī liùshíwǔ.',ex_vn:'Những khả năng này nhiều nhất chỉ bằng 65% so với trạng thái bình thường.',
   exList:[
     {zh:'这些能力最多为正常状态的65%。',py:'Zhèxiē nénglì zuì duō wéi zhèngcháng zhuàngtài de bǎi fēn zhī liùshíwǔ.',vn:'Những khả năng này nhiều nhất chỉ bằng 65% so với trạng thái bình thường.'},
     {zh:'从睡眠状态过渡到清醒状态时，人的心跳会加快。',py:'Cóng shuìmián zhuàngtài guòdù dào qīngxǐng zhuàngtài shí, rén de xīntiào huì jiākuài.',vn:'Khi chuyển từ trạng thái ngủ sang trạng thái tỉnh táo, tim người ta sẽ đập nhanh hơn.'},
     {zh:'今天比赛，他的状态特别好。',py:'Jīntiān bǐsài, tā de zhuàngtài tèbié hǎo.',vn:'Hôm nay thi đấu, phong độ của anh ấy đặc biệt tốt.'}
   ],
   colloFull:[
     {zh:'睡眠状态',py:'shuìmián zhuàngtài',vn:'trạng thái ngủ'},
     {zh:'清醒状态',py:'qīngxǐng zhuàngtài',vn:'trạng thái tỉnh táo'},
     {zh:'工作状态',py:'gōngzuò zhuàngtài',vn:'trạng thái làm việc'},
     {zh:'状态很好',py:'zhuàngtài hěn hǎo',vn:'phong độ rất tốt'},
     {zh:'进入状态',py:'jìnrù zhuàngtài',vn:'vào guồng, nhập cuộc'}
   ],
   patterns:[
     {s:'从 A 状态 + 过渡到 + B 状态',m:'Chuyển từ trạng thái A sang trạng thái B'},
     {s:'(人) + 状态 + 很好 / 不好',m:'Phong độ, tinh thần tốt / không tốt'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vì tối qua ngủ không ngon nên hôm nay trạng thái của tôi không tốt.',answer:'因为昨晚没睡好，所以我今天状态不好。',answerPy:'Yīnwèi zuó wǎn méi shuìhǎo, suǒyǐ wǒ jīntiān zhuàngtài bù hǎo.',
      note:'状态不好 = phong độ / tinh thần không tốt.',pair:'因为……所以……'},
     {promptLang:'vi',prompt:'Kỳ nghỉ vừa kết thúc, cậu ấy đã vào ngay trạng thái học tập.',answer:'假期一结束，他就进入了学习状态。',answerPy:'Jiàqī yì jiéshù, tā jiù jìnrùle xuéxí zhuàngtài.',
      note:'进入 + ……状态: bắt đầu vào trạng thái ….',pair:'一……就……'}
   ]},

  {n:18,zh:'清醒',py:'qīngxǐng',pos:'Tính từ / Động từ',vn:'tỉnh táo; tỉnh lại',hv:'thanh tỉnh',em:'👁️',lesson:11,
   explain:['Tính từ: đầu óc tỉnh táo, sáng suốt.','Động từ: tỉnh lại sau khi ngủ, ngất, say (清醒过来).'],
   usage:'头脑很清醒; 保持清醒; 清醒过来 (bảng 词语搭配: 清醒 + 过来).',
   collo:['头脑清醒','保持清醒','清醒过来','清醒状态'],
   ex_zh:'我被一阵吵闹声突然惊醒，过了半天，脑子才清醒过来。',ex_py:'Wǒ bèi yí zhèn chǎonào shēng tūrán jīngxǐng, guòle bàntiān, nǎozi cái qīngxǐng guòlái.',ex_vn:'Tôi đột ngột bị một tràng tiếng ồn làm giật mình tỉnh giấc, mãi một lúc lâu đầu óc mới tỉnh táo lại.',
   exList:[
     {zh:'我被一阵吵闹声突然惊醒，过了半天，脑子才清醒过来。',py:'Wǒ bèi yí zhèn chǎonào shēng tūrán jīngxǐng, guòle bàntiān, nǎozi cái qīngxǐng guòlái.',vn:'Tôi đột ngột bị một tràng tiếng ồn làm giật mình tỉnh giấc, mãi một lúc lâu đầu óc mới tỉnh táo lại.'},
     {zh:'考试的时候一定要保持头脑清醒。',py:'Kǎoshì de shíhou yídìng yào bǎochí tóunǎo qīngxǐng.',vn:'Lúc thi nhất định phải giữ đầu óc tỉnh táo.'},
     {zh:'喝了一杯咖啡以后，我清醒多了。',py:'Hēle yì bēi kāfēi yǐhòu, wǒ qīngxǐng duō le.',vn:'Uống một cốc cà phê xong, tôi tỉnh táo hơn nhiều.'}
   ],
   colloFull:[
     {zh:'头脑清醒',py:'tóunǎo qīngxǐng',vn:'đầu óc tỉnh táo'},
     {zh:'保持清醒',py:'bǎochí qīngxǐng',vn:'giữ tỉnh táo'},
     {zh:'清醒过来',py:'qīngxǐng guòlái',vn:'tỉnh lại'},
     {zh:'清醒状态',py:'qīngxǐng zhuàngtài',vn:'trạng thái tỉnh táo'}
   ],
   patterns:[
     {s:'保持 + (头脑)清醒',m:'Giữ (đầu óc) tỉnh táo'},
     {s:'清醒 + 过来',m:'Tỉnh lại (trở về trạng thái bình thường)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi bị đồng hồ báo thức gọi dậy, mãi một lúc lâu mới tỉnh hẳn.',answer:'我被闹钟叫醒，过了好半天才清醒过来。',answerPy:'Wǒ bèi nàozhōng jiàoxǐng, guòle hǎo bàntiān cái qīngxǐng guòlái.',
      note:'清醒过来: 过来 chỉ trở lại trạng thái bình thường (điểm ngữ pháp 1).',pair:'被'},
     {promptLang:'vi',prompt:'Dù mệt đến đâu, lúc lái xe cũng phải giữ tỉnh táo.',answer:'不管多累，开车的时候都要保持清醒。',answerPy:'Bùguǎn duō lèi, kāichē de shíhou dōu yào bǎochí qīngxǐng.',
      note:'不管 + 多 + tính từ, vế sau có 都.',pair:'不管……都……'}
   ]},

  {n:19,zh:'呼吸',py:'hūxī',pos:'Động từ',vn:'hít thở, hô hấp',hv:'hô hấp',em:'🌬️',lesson:11,
   explain:['Hít vào và thở ra.'],
   usage:'呼吸新鲜空气; 深呼吸; 呼吸困难; 呼吸 + 加快 / 变慢.',
   collo:['呼吸新鲜空气','深呼吸','呼吸困难','呼吸加快'],
   ex_zh:'周末我们去郊区呼吸新鲜空气吧。',ex_py:'Zhōumò wǒmen qù jiāoqū hūxī xīnxiān kōngqì ba.',ex_vn:'Cuối tuần chúng mình ra ngoại ô hít thở không khí trong lành đi.',
   exList:[
     {zh:'周末我们去郊区呼吸新鲜空气吧。',py:'Zhōumò wǒmen qù jiāoqū hūxī xīnxiān kōngqì ba.',vn:'Cuối tuần chúng mình ra ngoại ô hít thở không khí trong lành đi.'},
     {zh:'紧张的时候，先做几次深呼吸。',py:'Jǐnzhāng de shíhou, xiān zuò jǐ cì shēn hūxī.',vn:'Khi căng thẳng, hãy hít thở sâu vài lần trước đã.'},
     {zh:'醒来时，人的呼吸会从每分钟16次提高到24次。',py:'Xǐnglái shí, rén de hūxī huì cóng měi fēnzhōng shíliù cì tígāo dào èrshísì cì.',vn:'Khi tỉnh dậy, nhịp thở của con người sẽ tăng từ 16 lần lên 24 lần mỗi phút.'}
   ],
   colloFull:[
     {zh:'呼吸新鲜空气',py:'hūxī xīnxiān kōngqì',vn:'hít thở không khí trong lành'},
     {zh:'深呼吸',py:'shēn hūxī',vn:'hít thở sâu'},
     {zh:'呼吸困难',py:'hūxī kùnnan',vn:'khó thở'},
     {zh:'呼吸加快',py:'hūxī jiākuài',vn:'nhịp thở nhanh lên'}
   ],
   patterns:[
     {s:'呼吸 + 新鲜空气',m:'Hít thở không khí trong lành'},
     {s:'做 + 几次 + 深呼吸',m:'Hít thở sâu vài lần'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Hễ căng thẳng là tôi hít thở sâu vài lần.',answer:'我一紧张就做几次深呼吸。',answerPy:'Wǒ yì jǐnzhāng jiù zuò jǐ cì shēn hūxī.',
      note:'深呼吸 dùng như danh từ sau 做 + số lần.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Không khí ở đây ngày càng tệ, ngay cả hít thở cũng khó khăn.',answer:'这里的空气越来越差，连呼吸都困难了。',answerPy:'Zhèli de kōngqì yuèláiyuè chà, lián hūxī dōu kùnnan le.',
      note:'连 + 呼吸 + 都: nhấn mạnh việc đơn giản nhất cũng khó.',pair:'连……都……'}
   ]},

  {n:20,zh:'心理',py:'xīnlǐ',pos:'Danh từ',vn:'tâm lý',hv:'tâm lý',em:'🧠',lesson:11,
   explain:['Hoạt động tinh thần, suy nghĩ và cảm xúc bên trong con người.'],
   usage:'在心理上; 心理健康; 心理压力; 心理学. Hay đi cặp: 生理和心理.',
   collo:['在心理上','心理健康','心理压力','心理问题'],
   ex_zh:'如果突然被闹钟叫醒，将在心理上使人产生心慌、情绪低落、感觉没睡醒等不适。',ex_py:'Rúguǒ tūrán bèi nàozhōng jiàoxǐng, jiāng zài xīnlǐ shang shǐ rén chǎnshēng xīnhuāng, qíngxù dīluò, gǎnjué méi shuìxǐng děng búshì.',ex_vn:'Nếu đột ngột bị báo thức gọi dậy, về mặt tâm lý sẽ khiến người ta khó chịu: hồi hộp, tâm trạng sa sút, cảm thấy ngủ chưa đủ.',
   exList:[
     {zh:'如果突然被闹钟叫醒，将在心理上使人产生心慌、情绪低落、感觉没睡醒等不适。',py:'Rúguǒ tūrán bèi nàozhōng jiàoxǐng, jiāng zài xīnlǐ shang shǐ rén chǎnshēng xīnhuāng, qíngxù dīluò, gǎnjué méi shuìxǐng děng búshì.',vn:'Nếu đột ngột bị báo thức gọi dậy, về mặt tâm lý sẽ khiến người ta khó chịu: hồi hộp, tâm trạng sa sút, cảm thấy ngủ chưa đủ.'},
     {zh:'考试前很多学生都有很大的心理压力。',py:'Kǎoshì qián hěn duō xuésheng dōu yǒu hěn dà de xīnlǐ yālì.',vn:'Trước kỳ thi, nhiều học sinh đều chịu áp lực tâm lý rất lớn.'},
     {zh:'学校应该重视学生的心理健康。',py:'Xuéxiào yīnggāi zhòngshì xuésheng de xīnlǐ jiànkāng.',vn:'Nhà trường nên coi trọng sức khỏe tâm lý của học sinh.'}
   ],
   colloFull:[
     {zh:'在心理上',py:'zài xīnlǐ shang',vn:'về mặt tâm lý'},
     {zh:'心理健康',py:'xīnlǐ jiànkāng',vn:'sức khỏe tâm lý'},
     {zh:'心理压力',py:'xīnlǐ yālì',vn:'áp lực tâm lý'},
     {zh:'心理问题',py:'xīnlǐ wèntí',vn:'vấn đề tâm lý'}
   ],
   patterns:[
     {s:'在心理上 + 使人 + ……',m:'Về mặt tâm lý khiến người ta …'},
     {s:'心理 + 健康 / 压力 / 问题',m:'Sức khỏe / áp lực / vấn đề tâm lý'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Càng gần đến kỳ thi, áp lực tâm lý của tôi càng lớn.',answer:'离考试越近，我的心理压力越大。',answerPy:'Lí kǎoshì yuè jìn, wǒ de xīnlǐ yālì yuè dà.',
      note:'离 + mốc + 越近: càng gần …; 心理压力 là cụm cố định.',pair:'越……越……'},
     {promptLang:'vi',prompt:'Không chỉ sức khỏe thể chất, sức khỏe tâm lý cũng rất quan trọng.',answer:'不仅身体健康很重要，心理健康也很重要。',answerPy:'Bùjǐn shēntǐ jiànkāng hěn zhòngyào, xīnlǐ jiànkāng yě hěn zhòngyào.',
      note:'Hai vế khác chủ ngữ nên 不仅 đứng đầu câu; vế sau dùng 也.',pair:'不仅……也……'}
   ]},

  {n:21,zh:'慌张',py:'huāngzhāng',pos:'Tính từ',vn:'luống cuống, bối rối, hoảng hốt',hv:'hoảng trương',em:'😰',lesson:11,
   explain:['Hoảng hốt, luống cuống, không bình tĩnh.','Sách ghi 慌（张）: dùng 慌 một mình cũng được — 心慌 (hồi hộp, tim đập loạn), 别慌!'],
   usage:'很慌张; 慌慌张张 (lặp AABB); 慌张地 + V; 心慌; 别慌. Trái nghĩa: 冷静.',
   collo:['很慌张','慌慌张张','心慌','别慌'],
   ex_zh:'听到自己的名字，他慌张地站了起来。',ex_py:'Tīngdào zìjǐ de míngzi, tā huāngzhāng de zhànle qǐlái.',ex_vn:'Nghe thấy tên mình, cậu ấy luống cuống đứng bật dậy.',
   exList:[
     {zh:'听到自己的名字，他慌张地站了起来。',py:'Tīngdào zìjǐ de míngzi, tā huāngzhāng de zhànle qǐlái.',vn:'Nghe thấy tên mình, cậu ấy luống cuống đứng bật dậy.'},
     {zh:'别慌，慢慢说，到底发生了什么事？',py:'Bié huāng, mànmàn shuō, dàodǐ fāshēngle shénme shì?',vn:'Đừng hoảng, nói từ từ thôi, rốt cuộc đã xảy ra chuyện gì?'},
     {zh:'突然被闹钟叫醒，人会感到心慌。',py:'Tūrán bèi nàozhōng jiàoxǐng, rén huì gǎndào xīnhuāng.',vn:'Đột ngột bị báo thức gọi dậy, người ta sẽ thấy hồi hộp, tim đập loạn.'}
   ],
   colloFull:[
     {zh:'很慌张',py:'hěn huāngzhāng',vn:'rất luống cuống'},
     {zh:'慌慌张张',py:'huānghuangzhāngzhāng',vn:'hấp ta hấp tấp, cuống quýt'},
     {zh:'心慌',py:'xīnhuāng',vn:'hồi hộp, tim đập loạn'},
     {zh:'别慌',py:'bié huāng',vn:'đừng hoảng'},
     {zh:'慌张地跑出去',py:'huāngzhāng de pǎo chūqù',vn:'cuống cuồng chạy ra ngoài'}
   ],
   patterns:[
     {s:'慌张 + 地 + V',m:'Làm gì đó một cách luống cuống'},
     {s:'别慌 / 心慌',m:'Đừng hoảng / hồi hộp (dùng 慌 một mình)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Hễ bị thầy gọi tên là tôi lại luống cuống.',answer:'我一被老师叫到名字就很慌张。',answerPy:'Wǒ yí bèi lǎoshī jiàodào míngzi jiù hěn huāngzhāng.',
      note:'一 đứng trước cả cụm bị động 被老师叫到名字.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Dù gặp chuyện gì cũng đừng luống cuống.',answer:'不管遇到什么事，都不要慌张。',answerPy:'Bùguǎn yùdào shénme shì, dōu búyào huāngzhāng.',
      note:'不管 + đại từ nghi vấn (什么), vế sau có 都.',pair:'不管……都……'}
   ]},

  {n:22,zh:'情绪',py:'qíngxù',pos:'Danh từ',vn:'tâm trạng, cảm xúc',hv:'tình tự',em:'🎭',lesson:11,
   explain:['Trạng thái tình cảm, cảm xúc (vui, buồn, giận…) trong một thời gian.'],
   usage:'情绪 + 很好 / 低落 / 稳定; 稳定的 / 不满的 / 紧张的 + 情绪 (bảng 词语搭配); 控制情绪.',
   collo:['情绪低落','稳定的情绪','紧张的情绪','控制情绪','不满的情绪'],
   ex_zh:'人偶尔情绪低落是很正常的。',ex_py:'Rén ǒu\'ěr qíngxù dīluò shì hěn zhèngcháng de.',ex_vn:'Con người thỉnh thoảng tâm trạng sa sút là chuyện rất bình thường.',
   exList:[
     {zh:'人偶尔情绪低落是很正常的。',py:'Rén ǒu\'ěr qíngxù dīluò shì hěn zhèngcháng de.',vn:'Con người thỉnh thoảng tâm trạng sa sút là chuyện rất bình thường.'},
     {zh:'考试前要保持稳定的情绪。',py:'Kǎoshì qián yào bǎochí wěndìng de qíngxù.',vn:'Trước kỳ thi phải giữ tâm trạng ổn định.'},
     {zh:'他很会控制自己的情绪，从来不乱发脾气。',py:'Tā hěn huì kòngzhì zìjǐ de qíngxù, cónglái bú luàn fā píqi.',vn:'Cậu ấy rất biết kiểm soát cảm xúc của mình, chưa bao giờ nổi nóng bừa bãi.'}
   ],
   colloFull:[
     {zh:'情绪低落',py:'qíngxù dīluò',vn:'tâm trạng sa sút'},
     {zh:'稳定的情绪',py:'wěndìng de qíngxù',vn:'tâm trạng ổn định'},
     {zh:'紧张的情绪',py:'jǐnzhāng de qíngxù',vn:'tâm trạng căng thẳng'},
     {zh:'控制情绪',py:'kòngzhì qíngxù',vn:'kiểm soát cảm xúc'},
     {zh:'不满的情绪',py:'bùmǎn de qíngxù',vn:'tâm trạng bất mãn'}
   ],
   patterns:[
     {s:'稳定的 / 不满的 / 紧张的 + 情绪',m:'Tâm trạng ổn định / bất mãn / căng thẳng'},
     {s:'情绪 + 低落 / 稳定 / 很好',m:'Tâm trạng sa sút / ổn định / tốt'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cho dù gặp khó khăn, chúng ta cũng phải giữ tâm trạng ổn định.',answer:'即使遇到困难，我们也要保持稳定的情绪。',answerPy:'Jíshǐ yùdào kùnnan, wǒmen yě yào bǎochí wěndìng de qíngxù.',
      note:'保持 + 稳定的情绪: cụm trong bảng 词语搭配.',pair:'即使……也……'},
     {promptLang:'vi',prompt:'Tâm trạng của cậu ấy bị kết quả thi làm ảnh hưởng.',answer:'他的情绪被考试成绩影响了。',answerPy:'Tā de qíngxù bèi kǎoshì chéngjì yǐngxiǎng le.',
      note:'情绪 làm chủ ngữ bị động; 被 + tác nhân + 影响了.',pair:'被'}
   ]},

  {n:23,zh:'低落',py:'dīluò',pos:'Tính từ',vn:'sa sút, ủ rũ',hv:'đê lạc',em:'😞',lesson:11,
   explain:['(Tâm trạng, tinh thần, sĩ khí) đi xuống, sa sút.'],
   usage:'Chủ ngữ thường là 情绪 / 心情 / 士气: 情绪低落. Không dùng cho thành tích hay nhiệt độ (成绩下降, 温度降低).',
   collo:['情绪低落','心情低落','有点儿低落','低落的情绪'],
   ex_zh:'比赛输了以后，队员们的情绪都很低落。',ex_py:'Bǐsài shūle yǐhòu, duìyuánmen de qíngxù dōu hěn dīluò.',ex_vn:'Thua trận xong, các cầu thủ ai cũng ủ rũ.',
   exList:[
     {zh:'比赛输了以后，队员们的情绪都很低落。',py:'Bǐsài shūle yǐhòu, duìyuánmen de qíngxù dōu hěn dīluò.',vn:'Thua trận xong, các cầu thủ ai cũng ủ rũ.'},
     {zh:'这几天她心情有点儿低落，我们去陪陪她吧。',py:'Zhè jǐ tiān tā xīnqíng yǒudiǎnr dīluò, wǒmen qù péipei tā ba.',vn:'Mấy hôm nay cô ấy hơi buồn, chúng mình đến ở bên cô ấy chút đi.'},
     {zh:'如果突然被闹钟叫醒，人会情绪低落，感觉没睡醒。',py:'Rúguǒ tūrán bèi nàozhōng jiàoxǐng, rén huì qíngxù dīluò, gǎnjué méi shuìxǐng.',vn:'Nếu đột ngột bị báo thức gọi dậy, người ta sẽ ủ rũ, cảm thấy ngủ chưa đủ.'}
   ],
   colloFull:[
     {zh:'情绪低落',py:'qíngxù dīluò',vn:'tâm trạng sa sút'},
     {zh:'心情低落',py:'xīnqíng dīluò',vn:'lòng buồn bã'},
     {zh:'有点儿低落',py:'yǒudiǎnr dīluò',vn:'hơi ủ rũ'},
     {zh:'低落的情绪',py:'dīluò de qíngxù',vn:'tâm trạng ủ rũ'}
   ],
   patterns:[
     {s:'情绪 / 心情 + (很 / 有点儿) + 低落',m:'Tâm trạng sa sút'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần thi không tốt là tâm trạng tôi lại rất sa sút.',answer:'只要考得不好，我的情绪就会很低落。',answerPy:'Zhǐyào kǎo de bù hǎo, wǒ de qíngxù jiù huì hěn dīluò.',
      note:'低落 là tính từ, chủ ngữ là 情绪 chứ không phải 我.',pair:'只要……就……'},
     {promptLang:'vi',prompt:'Tuy tâm trạng hơi sa sút nhưng cậu ấy vẫn kiên trì đến lớp.',answer:'虽然情绪有点儿低落，但是他还是坚持来上课。',answerPy:'Suīrán qíngxù yǒudiǎnr dīluò, dànshì tā háishi jiānchí lái shàngkè.',
      note:'有点儿 + tính từ mang nghĩa tiêu cực: 有点儿低落.',pair:'虽然……但是……'}
   ]},

  {n:24,zh:'记忆',py:'jìyì',pos:'Động từ / Danh từ',vn:'nhớ; ký ức, trí nhớ',hv:'ký ức',em:'💭',lesson:11,
   explain:['Danh từ: ký ức, trí nhớ (童年的记忆, 记忆能力).','Động từ: ghi nhớ (văn viết).'],
   usage:'(关于)家的 / 童年的 / 难忘的 + 记忆 (bảng 词语搭配); 短期记忆; 记忆力 (trí nhớ).',
   collo:['童年的记忆','难忘的记忆','短期记忆','记忆力','关于家的记忆'],
   ex_zh:'如果是从深度睡眠中被突然叫醒，那么，人的短期记忆能力、计算技能都会受到影响。',ex_py:'Rúguǒ shì cóng shēndù shuìmián zhōng bèi tūrán jiàoxǐng, nàme, rén de duǎnqī jìyì nénglì, jìsuàn jìnéng dōu huì shòudào yǐngxiǎng.',ex_vn:'Nếu bị gọi dậy đột ngột khi đang ngủ sâu thì khả năng ghi nhớ ngắn hạn và kỹ năng tính toán đều sẽ bị ảnh hưởng.',
   exList:[
     {zh:'如果是从深度睡眠中被突然叫醒，那么，人的短期记忆能力、计算技能都会受到影响。',py:'Rúguǒ shì cóng shēndù shuìmián zhōng bèi tūrán jiàoxǐng, nàme, rén de duǎnqī jìyì nénglì, jìsuàn jìnéng dōu huì shòudào yǐngxiǎng.',vn:'Nếu bị gọi dậy đột ngột khi đang ngủ sâu thì khả năng ghi nhớ ngắn hạn và kỹ năng tính toán đều sẽ bị ảnh hưởng.'},
     {zh:'那个夏天是我童年最难忘的记忆。',py:'Nàge xiàtiān shì wǒ tóngnián zuì nánwàng de jìyì.',vn:'Mùa hè năm ấy là ký ức khó quên nhất thời thơ ấu của tôi.'},
     {zh:'奶奶年纪大了，记忆力越来越差。',py:'Nǎinai niánjì dà le, jìyìlì yuèláiyuè chà.',vn:'Bà đã có tuổi, trí nhớ ngày càng kém.'}
   ],
   colloFull:[
     {zh:'童年的记忆',py:'tóngnián de jìyì',vn:'ký ức tuổi thơ'},
     {zh:'难忘的记忆',py:'nánwàng de jìyì',vn:'ký ức khó quên'},
     {zh:'短期记忆',py:'duǎnqī jìyì',vn:'trí nhớ ngắn hạn'},
     {zh:'记忆力',py:'jìyìlì',vn:'trí nhớ'},
     {zh:'关于家的记忆',py:'guānyú jiā de jìyì',vn:'ký ức về gia đình'}
   ],
   patterns:[
     {s:'(关于)家的 / 童年的 / 难忘的 + 记忆',m:'Ký ức về nhà / tuổi thơ / khó quên'},
     {s:'记忆力 + 好 / 差',m:'Trí nhớ tốt / kém'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ngủ không đủ thì trí nhớ sẽ ngày càng kém.',answer:'睡眠不足，记忆力会越来越差。',answerPy:'Shuìmián bùzú, jìyìlì huì yuèláiyuè chà.',
      note:'记忆力 = trí nhớ (khả năng nhớ); 记忆 = ký ức.',pair:'越来越'},
     {promptLang:'vi',prompt:'Ngay cả ký ức tuổi thơ bà cũng quên mất rồi.',answer:'奶奶连童年的记忆都忘了。',answerPy:'Nǎinai lián tóngnián de jìyì dōu wàng le.',
      note:'连 + tân ngữ đưa lên trước + 都 + động từ.',pair:'连……都……'}
   ]},

  {n:25,zh:'计算',py:'jìsuàn',pos:'Động từ',vn:'tính toán',hv:'kế toán',em:'🧮',lesson:11,
   explain:['Dùng phép toán để tìm ra con số.'],
   usage:'计算 + 出 / 出来 (bảng 词语搭配); 计算能力 / 技能; 计算一下. KHÔNG nhầm với nghề kế toán (会计 kuàijì).',
   collo:['计算出来','计算能力','计算技能','仔细计算'],
   ex_zh:'人的短期记忆能力、计算技能都会受到影响。',ex_py:'Rén de duǎnqī jìyì nénglì, jìsuàn jìnéng dōu huì shòudào yǐngxiǎng.',ex_vn:'Khả năng ghi nhớ ngắn hạn và kỹ năng tính toán của con người đều sẽ bị ảnh hưởng.',
   exList:[
     {zh:'人的短期记忆能力、计算技能都会受到影响。',py:'Rén de duǎnqī jìyì nénglì, jìsuàn jìnéng dōu huì shòudào yǐngxiǎng.',vn:'Khả năng ghi nhớ ngắn hạn và kỹ năng tính toán của con người đều sẽ bị ảnh hưởng.'},
     {zh:'你能计算出这个房间有多大吗？',py:'Nǐ néng jìsuàn chū zhège fángjiān yǒu duō dà ma?',vn:'Bạn có tính ra được căn phòng này rộng bao nhiêu không?'},
     {zh:'他用了半个小时才把结果计算出来。',py:'Tā yòngle bàn ge xiǎoshí cái bǎ jiéguǒ jìsuàn chūlái.',vn:'Cậu ấy mất nửa tiếng mới tính ra kết quả.'}
   ],
   colloFull:[
     {zh:'计算出来',py:'jìsuàn chūlái',vn:'tính ra được'},
     {zh:'计算能力',py:'jìsuàn nénglì',vn:'khả năng tính toán'},
     {zh:'计算技能',py:'jìsuàn jìnéng',vn:'kỹ năng tính toán'},
     {zh:'仔细计算',py:'zǐxì jìsuàn',vn:'tính toán kỹ'}
   ],
   patterns:[
     {s:'计算 + 出 / 出来',m:'Tính ra (kết quả)'},
     {s:'把 + kết quả + 计算出来',m:'Tính ra kết quả'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nhờ bạn tính giúp tôi tổng cộng hết bao nhiêu tiền.',answer:'请你帮我把一共多少钱计算出来。',answerPy:'Qǐng nǐ bāng wǒ bǎ yígòng duōshao qián jìsuàn chūlái.',
      note:'Câu 把 + 计算出来: bổ ngữ xu hướng 出来 chỉ kết quả lộ ra.',pair:'把'},
     {promptLang:'vi',prompt:'Kết quả này là do máy tính tính ra.',answer:'这个结果是电脑计算出来的。',answerPy:'Zhège jiéguǒ shì diànnǎo jìsuàn chūlái de.',
      note:'是……的 nhấn mạnh người / vật thực hiện hành động.',pair:'是……的'}
   ]},

  {n:26,zh:'相当',py:'xiāngdāng',pos:'Động từ / Phó từ',vn:'tương đương, ngang nhau; khá, tương đối',hv:'tương đương',em:'⚖️',lesson:11,
   explain:['Động từ: hai bên (số lượng, điều kiện, tình hình) xấp xỉ nhau.','Phó từ: mức độ khá cao (相当满意 = khá hài lòng).'],
   usage:'与 / 跟 A 相当; 相当于 + N; 相当 + tính từ (phó từ); 相当一部分人.',
   collo:['与……相当','相当于','相当满意','相当一部分'],
   ex_zh:'这些能力最多为正常状态的65%，与醉酒者相当。',ex_py:'Zhèxiē nénglì zuì duō wéi zhèngcháng zhuàngtài de bǎi fēn zhī liùshíwǔ, yǔ zuìjiǔzhě xiāngdāng.',ex_vn:'Những khả năng này nhiều nhất chỉ bằng 65% so với trạng thái bình thường, tương đương với người say rượu.',
   exList:[
     {zh:'这些能力最多为正常状态的65%，与醉酒者相当。',py:'Zhèxiē nénglì zuì duō wéi zhèngcháng zhuàngtài de bǎi fēn zhī liùshíwǔ, yǔ zuìjiǔzhě xiāngdāng.',vn:'Những khả năng này nhiều nhất chỉ bằng 65% so với trạng thái bình thường, tương đương với người say rượu.'},
     {zh:'这种鸟一天所食的害虫相当于自己的体重。',py:'Zhè zhǒng niǎo yì tiān suǒ shí de hàichóng xiāngdāng yú zìjǐ de tǐzhòng.',vn:'Lượng sâu bọ mà loài chim này ăn trong một ngày tương đương với trọng lượng cơ thể nó.'},
     {zh:'菜的味道好极了，服务也挺周到，我相当满意。',py:'Cài de wèidào hǎo jí le, fúwù yě tǐng zhōudào, wǒ xiāngdāng mǎnyì.',vn:'Món ăn ngon tuyệt, phục vụ cũng rất chu đáo, tôi khá hài lòng.'}
   ],
   colloFull:[
     {zh:'与……相当',py:'yǔ……xiāngdāng',vn:'ngang với …'},
     {zh:'相当于',py:'xiāngdāng yú',vn:'tương đương với'},
     {zh:'相当满意',py:'xiāngdāng mǎnyì',vn:'khá hài lòng'},
     {zh:'相当一部分',py:'xiāngdāng yí bùfen',vn:'một phần khá lớn'}
   ],
   patterns:[
     {s:'A + 与 / 跟 + B + 相当',m:'A ngang với B'},
     {s:'相当 + tính từ',m:'Khá … (phó từ chỉ mức độ)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bài khóa này tuy ngắn nhưng khá khó.',answer:'这篇课文虽然很短，但是相当难。',answerPy:'Zhè piān kèwén suīrán hěn duǎn, dànshì xiāngdāng nán.',
      note:'相当 là phó từ chỉ mức độ, không dùng thêm 很: không nói 相当很难.',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Nếu ngủ không đủ, trí nhớ của bạn chỉ ngang với người say rượu.',answer:'如果睡眠不足，你的记忆能力就只跟醉酒的人相当。',answerPy:'Rúguǒ shuìmián bùzú, nǐ de jìyì nénglì jiù zhǐ gēn zuìjiǔ de rén xiāngdāng.',
      note:'跟 + B + 相当: 相当 là động từ, B đứng TRƯỚC 相当.',pair:'如果……就……'}
   ]},

  {n:27,zh:'持续',py:'chíxù',pos:'Động từ',vn:'kéo dài, duy trì liên tục',hv:'trì tục',em:'⏳',lesson:11,
   explain:['Kéo dài liên tục, không gián đoạn.','Mang được bổ ngữ thời lượng (持续三天) và làm định ngữ (持续的高温) — khác 继续.'],
   usage:'持续 + thời lượng (数天 / 两个小时); 持续 + V (持续下降 / 增长); 持续的 + N.',
   collo:['持续数天','持续下降','持续的高温','持续发展'],
   ex_zh:'这种状态如果持续数天、数周、数月，将导致高血压、失眠和一些精神问题等。',ex_py:'Zhè zhǒng zhuàngtài rúguǒ chíxù shù tiān, shù zhōu, shù yuè, jiāng dǎozhì gāo xuèyā, shīmián hé yìxiē jīngshén wèntí děng.',ex_vn:'Trạng thái này nếu kéo dài vài ngày, vài tuần, vài tháng sẽ dẫn đến cao huyết áp, mất ngủ và một số vấn đề về tinh thần.',
   exList:[
     {zh:'这种状态如果持续数天、数周、数月，将导致高血压、失眠和一些精神问题等。',py:'Zhè zhǒng zhuàngtài rúguǒ chíxù shù tiān, shù zhōu, shù yuè, jiāng dǎozhì gāo xuèyā, shīmián hé yìxiē jīngshén wèntí děng.',vn:'Trạng thái này nếu kéo dài vài ngày, vài tuần, vài tháng sẽ dẫn đến cao huyết áp, mất ngủ và một số vấn đề về tinh thần.'},
     {zh:'雷阵雨持续的时间一般都较短。',py:'Léizhènyǔ chíxù de shíjiān yìbān dōu jiào duǎn.',vn:'Mưa rào kèm sấm thường kéo dài không lâu.'},
     {zh:'这场雨持续下了两个多小时。',py:'Zhè chǎng yǔ chíxù xiàle liǎng ge duō xiǎoshí.',vn:'Cơn mưa này rơi liên tục hơn hai tiếng.'}
   ],
   colloFull:[
     {zh:'持续数天',py:'chíxù shù tiān',vn:'kéo dài vài ngày'},
     {zh:'持续下降',py:'chíxù xiàjiàng',vn:'giảm liên tục'},
     {zh:'持续的高温',py:'chíxù de gāowēn',vn:'nắng nóng kéo dài'},
     {zh:'持续发展',py:'chíxù fāzhǎn',vn:'phát triển liên tục, bền vững'}
   ],
   patterns:[
     {s:'持续 + thời lượng',m:'Kéo dài bao lâu (持续三天)'},
     {s:'持续 + 的 + N',m:'… kéo dài (làm định ngữ)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vì mưa lớn kéo dài một tuần nên trận đấu bị hoãn.',answer:'因为大雨持续了一个星期，所以比赛被推迟了。',answerPy:'Yīnwèi dàyǔ chíxùle yí ge xīngqī, suǒyǐ bǐsài bèi tuīchí le.',
      note:'持续 + 了 + thời lượng: 继续 không dùng được ở đây.',pair:'因为……所以……'},
     {promptLang:'vi',prompt:'Nhiệt độ liên tục tăng, trời càng ngày càng nóng.',answer:'气温持续升高，天气越来越热了。',answerPy:'Qìwēn chíxù shēnggāo, tiānqì yuèláiyuè rè le.',
      note:'持续 + động từ: 持续升高 = tăng liên tục.',pair:'越来越'}
   ]},

  {n:28,zh:'数',py:'shù',pos:'Số từ',vn:'vài, mấy (văn viết)',hv:'số',em:'🔢',lesson:11,
   explain:['Số từ, nghĩa là "vài, mấy" (= 几), dùng trong văn viết: 数天, 数年, 数百人.','Cùng chữ với động từ 数 shǔ (đếm) — xem điểm ngữ pháp 4.'],
   usage:'数 + lượng từ / danh từ chỉ thời gian: 数天、数周、数月、数年、数小时; 数十 / 数百 / 数千.',
   collo:['数天','数小时','数年之后','数百人'],
   ex_zh:'这里夏季的雷阵雨一般可持续数小时或者更久的时间。',ex_py:'Zhèli xiàjì de léizhènyǔ yìbān kě chíxù shù xiǎoshí huòzhě gèng jiǔ de shíjiān.',ex_vn:'Mưa rào kèm sấm mùa hè ở đây thường có thể kéo dài vài giờ hoặc lâu hơn.',
   exList:[
     {zh:'这里夏季的雷阵雨一般可持续数小时或者更久的时间。',py:'Zhèli xiàjì de léizhènyǔ yìbān kě chíxù shù xiǎoshí huòzhě gèng jiǔ de shíjiān.',vn:'Mưa rào kèm sấm mùa hè ở đây thường có thể kéo dài vài giờ hoặc lâu hơn.'},
     {zh:'每晚抽出点儿时间来阅读、学习，坚持数年之后，成功就会向你招手。',py:'Měi wǎn chōuchū diǎnr shíjiān lái yuèdú, xuéxí, jiānchí shù nián zhīhòu, chénggōng jiù huì xiàng nǐ zhāoshǒu.',vn:'Mỗi tối dành chút thời gian đọc sách, học tập, kiên trì vài năm thì thành công sẽ vẫy gọi bạn.'},
     {zh:'数百名学生参加了这次比赛。',py:'Shù bǎi míng xuésheng cānjiāle zhè cì bǐsài.',vn:'Vài trăm học sinh đã tham gia cuộc thi lần này.'}
   ],
   colloFull:[
     {zh:'数天',py:'shù tiān',vn:'vài ngày'},
     {zh:'数小时',py:'shù xiǎoshí',vn:'vài giờ'},
     {zh:'数年之后',py:'shù nián zhīhòu',vn:'vài năm sau'},
     {zh:'数百人',py:'shù bǎi rén',vn:'vài trăm người'}
   ],
   patterns:[
     {s:'数 + 天 / 周 / 月 / 年 / 小时',m:'Vài ngày / tuần / tháng / năm / giờ (văn viết)'},
     {s:'数 + 十 / 百 / 千',m:'Vài chục / vài trăm / vài nghìn'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Mưa lớn kéo dài mấy ngày, ngay cả đường cái cũng bị ngập.',answer:'大雨持续了数天，连马路都被淹了。',answerPy:'Dàyǔ chíxùle shù tiān, lián mǎlù dōu bèi yān le.',
      note:'数天 = vài ngày (văn viết), đứng ngay sau động từ làm bổ ngữ thời lượng.',pair:'连……都……'},
     {promptLang:'vi',prompt:'Chỉ cần kiên trì vài năm, bạn nhất định sẽ thành công.',answer:'只要坚持数年，你就一定会成功。',answerPy:'Zhǐyào jiānchí shù nián, nǐ jiù yídìng huì chénggōng.',
      note:'数年 = mấy năm; không nói 数年多.',pair:'只要……就……'}
   ]},

  {n:29,zh:'导致',py:'dǎozhì',pos:'Động từ',vn:'dẫn đến, gây ra',hv:'đạo trí',em:'➡️',lesson:11,
   explain:['Dẫn đến một kết quả — thường là kết quả XẤU.'],
   usage:'导致 + 错误 / 失败 / 失眠 / 危险 (bảng 词语搭配); A 导致 B; 由于……，导致…….',
   collo:['导致失眠','导致失败','导致错误','导致危险'],
   ex_zh:'由于近一个月来没有降水，导致河水水位持续下降。',ex_py:'Yóuyú jìn yí ge yuè lái méiyǒu jiàngshuǐ, dǎozhì héshuǐ shuǐwèi chíxù xiàjiàng.',ex_vn:'Do gần một tháng nay không có mưa nên mực nước sông liên tục hạ thấp.',
   exList:[
     {zh:'由于近一个月来没有降水，导致河水水位持续下降。',py:'Yóuyú jìn yí ge yuè lái méiyǒu jiàngshuǐ, dǎozhì héshuǐ shuǐwèi chíxù xiàjiàng.',vn:'Do gần một tháng nay không có mưa nên mực nước sông liên tục hạ thấp.'},
     {zh:'长期熬夜会导致失眠。',py:'Chángqī áoyè huì dǎozhì shīmián.',vn:'Thức khuya lâu ngày sẽ dẫn đến mất ngủ.'},
     {zh:'一个小小的错误，导致了整个实验的失败。',py:'Yí ge xiǎoxiǎo de cuòwù, dǎozhìle zhěnggè shíyàn de shībài.',vn:'Một sai sót nho nhỏ đã khiến cả cuộc thí nghiệm thất bại.'}
   ],
   colloFull:[
     {zh:'导致失眠',py:'dǎozhì shīmián',vn:'dẫn đến mất ngủ'},
     {zh:'导致失败',py:'dǎozhì shībài',vn:'dẫn đến thất bại'},
     {zh:'导致错误',py:'dǎozhì cuòwù',vn:'dẫn đến sai sót'},
     {zh:'导致危险',py:'dǎozhì wēixiǎn',vn:'gây ra nguy hiểm'}
   ],
   patterns:[
     {s:'A + 导致 + B (kết quả xấu)',m:'A dẫn đến B'},
     {s:'由于……，导致……',m:'Do … nên dẫn đến …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vì chơi điện thoại quá khuya nên dẫn đến mất ngủ.',answer:'因为玩手机玩得太晚，所以导致了失眠。',answerPy:'Yīnwèi wán shǒujī wán de tài wǎn, suǒyǐ dǎozhìle shīmián.',
      note:'导致 + kết quả xấu (失眠). Động từ có tân ngữ + bổ ngữ trạng thái phải lặp động từ: 玩手机玩得…….',pair:'因为……所以……'},
     {promptLang:'vi',prompt:'Thiếu ngủ không những dẫn đến béo phì mà còn ảnh hưởng đến việc học.',answer:'缺觉不仅会导致肥胖，而且会影响学习。',answerPy:'Quējiào bùjǐn huì dǎozhì féipàng, érqiě huì yǐngxiǎng xuéxí.',
      note:'Hai hậu quả nối bằng 不仅……而且…….',pair:'不仅……而且……'}
   ]},

  {n:30,zh:'失眠',py:'shīmián',pos:'Động từ',vn:'mất ngủ',hv:'thất miên',em:'😵',lesson:11,
   explain:['Không ngủ được hoặc ngủ không yên vào ban đêm.'],
   usage:'Nội động từ, KHÔNG mang tân ngữ: 我失眠了; 经常失眠; 导致失眠; 紧张得失眠了.',
   collo:['经常失眠','导致失眠','失眠的原因','治疗失眠'],
   ex_zh:'这两天又失眠了。',ex_py:'Zhè liǎng tiān yòu shīmián le.',ex_vn:'Mấy hôm nay lại mất ngủ rồi.',
   exList:[
     {zh:'这两天又失眠了。',py:'Zhè liǎng tiān yòu shīmián le.',vn:'Mấy hôm nay lại mất ngủ rồi.'},
     {zh:'考试前我紧张得失眠了。',py:'Kǎoshì qián wǒ jǐnzhāng de shīmián le.',vn:'Trước kỳ thi tôi căng thẳng đến mất ngủ.'},
     {zh:'睡前喝杯牛奶可以改善睡眠，减少失眠。',py:'Shuì qián hē bēi niúnǎi kěyǐ gǎishàn shuìmián, jiǎnshǎo shīmián.',vn:'Uống một cốc sữa trước khi ngủ có thể cải thiện giấc ngủ, bớt mất ngủ.'}
   ],
   colloFull:[
     {zh:'经常失眠',py:'jīngcháng shīmián',vn:'thường xuyên mất ngủ'},
     {zh:'导致失眠',py:'dǎozhì shīmián',vn:'dẫn đến mất ngủ'},
     {zh:'失眠的原因',py:'shīmián de yuányīn',vn:'nguyên nhân mất ngủ'},
     {zh:'治疗失眠',py:'zhìliáo shīmián',vn:'chữa mất ngủ'},
     {zh:'又失眠了',py:'yòu shīmián le',vn:'lại mất ngủ rồi'}
   ],
   patterns:[
     {s:'(紧张 / 担心) + 得 + 失眠了',m:'(Căng thẳng / lo lắng) đến mất ngủ'},
     {s:'导致 / 治疗 + 失眠',m:'Gây ra / chữa mất ngủ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Từ trước đến nay tôi chưa từng bị mất ngủ.',answer:'我从来没失眠过。',answerPy:'Wǒ cónglái méi shīmiánguo.',
      note:'过 đặt sau cả từ 失眠 (không phải từ li hợp).',pair:'从来没……过'},
     {promptLang:'vi',prompt:'Mẹ tôi hễ có chuyện phiền lòng là mất ngủ.',answer:'妈妈一有烦心事就失眠。',answerPy:'Māma yì yǒu fánxīn shì jiù shīmián.',
      note:'失眠 là nội động từ, đứng cuối câu không cần tân ngữ.',pair:'一……就……'}
   ]},

  {n:31,zh:'精神',py:'jīngshén',pos:'Danh từ / Tính từ',vn:'tinh thần; tươi tỉnh, phấn chấn',hv:'tinh thần',em:'💪',lesson:11,
   explain:['Danh từ: tinh thần, ý chí (精神问题, 精神压力).','Tính từ (thường đọc jīngshen): khỏe khoắn, phấn chấn (看起来很精神; 打起精神).'],
   usage:'精神 + 愉快 / 放松 / 饱满 (bảng 词语搭配); 打起精神; 没有精神; 精神问题; 很精神.',
   collo:['精神愉快','精神饱满','打起精神','精神问题','很精神'],
   ex_zh:'这种状态如果持续数月，将导致一些精神问题。',ex_py:'Zhè zhǒng zhuàngtài rúguǒ chíxù shù yuè, jiāng dǎozhì yìxiē jīngshén wèntí.',ex_vn:'Trạng thái này nếu kéo dài vài tháng sẽ dẫn đến một số vấn đề về tinh thần.',
   exList:[
     {zh:'这种状态如果持续数月，将导致一些精神问题。',py:'Zhè zhǒng zhuàngtài rúguǒ chíxù shù yuè, jiāng dǎozhì yìxiē jīngshén wèntí.',vn:'Trạng thái này nếu kéo dài vài tháng sẽ dẫn đến một số vấn đề về tinh thần.'},
     {zh:'失败了没关系，打起精神从头再来。',py:'Shībàile méi guānxi, dǎqǐ jīngshen cóngtóu zài lái.',vn:'Thất bại cũng không sao, lấy lại tinh thần làm lại từ đầu.'},
     {zh:'睡了一个好觉，今天他看起来特别精神。',py:'Shuìle yí ge hǎo jiào, jīntiān tā kàn qǐlái tèbié jīngshen.',vn:'Ngủ được một giấc ngon, hôm nay trông anh ấy đặc biệt tươi tỉnh.'}
   ],
   colloFull:[
     {zh:'精神愉快',py:'jīngshén yúkuài',vn:'tinh thần thoải mái'},
     {zh:'精神饱满',py:'jīngshén bǎomǎn',vn:'tinh thần phấn chấn'},
     {zh:'打起精神',py:'dǎqǐ jīngshen',vn:'lấy lại tinh thần'},
     {zh:'精神问题',py:'jīngshén wèntí',vn:'vấn đề tinh thần'},
     {zh:'很精神',py:'hěn jīngshen',vn:'rất tươi tỉnh'}
   ],
   patterns:[
     {s:'精神 + 愉快 / 放松 / 饱满',m:'Tinh thần thoải mái / thư thái / phấn chấn'},
     {s:'打起精神 + (来)',m:'Lấy lại tinh thần'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Dù thất bại, bạn cũng phải lấy lại tinh thần.',answer:'即使失败了，你也要打起精神来。',answerPy:'Jíshǐ shībài le, nǐ yě yào dǎqǐ jīngshen lái.',
      note:'打起精神(来) là cụm cố định.',pair:'即使……也……'},
     {promptLang:'vi',prompt:'Chỉ cần ngủ ngon thì tinh thần sẽ rất phấn chấn.',answer:'只要睡得好，精神就会很饱满。',answerPy:'Zhǐyào shuì de hǎo, jīngshén jiù huì hěn bǎomǎn.',
      note:'精神饱满 là cụm trong bảng 词语搭配 (chủ ngữ + vị ngữ).',pair:'只要……就……'}
   ]},

  {n:32,zh:'专家',py:'zhuānjiā',pos:'Danh từ',vn:'chuyên gia',hv:'chuyên gia',em:'👨‍🔬',lesson:11,
   explain:['Người có hiểu biết sâu, trình độ cao về một lĩnh vực.'],
   usage:'……方面的专家; 医学专家; 专家 + 认为 / 建议 / 解释说.',
   collo:['医学专家','……方面的专家','专家解释说','专家建议'],
   ex_zh:'对此，专家解释说，人在睡眠时，身体会发生一些变化。',ex_py:'Duì cǐ, zhuānjiā jiěshì shuō, rén zài shuìmián shí, shēntǐ huì fāshēng yìxiē biànhuà.',ex_vn:'Về điều này, chuyên gia giải thích rằng khi con người ngủ, cơ thể sẽ có một số thay đổi.',
   exList:[
     {zh:'对此，专家解释说，人在睡眠时，身体会发生一些变化。',py:'Duì cǐ, zhuānjiā jiěshì shuō, rén zài shuìmián shí, shēntǐ huì fāshēng yìxiē biànhuà.',vn:'Về điều này, chuyên gia giải thích rằng khi con người ngủ, cơ thể sẽ có một số thay đổi.'},
     {zh:'他是汽车方面的专家，买车可以请他帮忙参谋参谋。',py:'Tā shì qìchē fāngmiàn de zhuānjiā, mǎi chē kěyǐ qǐng tā bāngmáng cānmou cānmou.',vn:'Anh ấy là chuyên gia về ô tô, mua xe có thể nhờ anh ấy tư vấn cho.'},
     {zh:'专家建议，中学生每天应该睡够八个小时。',py:'Zhuānjiā jiànyì, zhōngxuéshēng měi tiān yīnggāi shuìgòu bā ge xiǎoshí.',vn:'Chuyên gia khuyên học sinh trung học mỗi ngày nên ngủ đủ tám tiếng.'}
   ],
   colloFull:[
     {zh:'医学专家',py:'yīxué zhuānjiā',vn:'chuyên gia y học'},
     {zh:'……方面的专家',py:'……fāngmiàn de zhuānjiā',vn:'chuyên gia về lĩnh vực …'},
     {zh:'专家解释说',py:'zhuānjiā jiěshì shuō',vn:'chuyên gia giải thích rằng'},
     {zh:'专家建议',py:'zhuānjiā jiànyì',vn:'chuyên gia khuyên'}
   ],
   patterns:[
     {s:'……方面的 + 专家',m:'Chuyên gia về lĩnh vực …'},
     {s:'专家 + 认为 / 建议 / 解释说',m:'Chuyên gia cho rằng / khuyên / giải thích'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ý kiến của chuyên gia đã được mọi người chấp nhận.',answer:'专家的意见被大家接受了。',answerPy:'Zhuānjiā de yìjiàn bèi dàjiā jiēshòu le.',
      note:'被 + 大家 + 接受了: câu bị động có tác nhân.',pair:'被'},
     {promptLang:'vi',prompt:'Ngay cả chuyên gia cũng không giải thích được vấn đề này.',answer:'连专家都解释不了这个问题。',answerPy:'Lián zhuānjiā dōu jiěshì bu liǎo zhège wèntí.',
      note:'连 + chủ ngữ + 都: nhấn mạnh người giỏi nhất cũng không làm được.',pair:'连……都……'}
   ]},

  {n:33,zh:'采用',py:'cǎiyòng',pos:'Động từ',vn:'chọn dùng, áp dụng',hv:'thái dụng',em:'🛠️',lesson:11,
   explain:['Chọn lấy (phương pháp, kỹ thuật, ý kiến, âm thanh…) để sử dụng.'],
   usage:'采用 + 方法 / 技术 / 建议 / ……的声音. Khác 采取: 采取 đi với 措施 / 行动 / 态度.',
   collo:['采用新技术','采用……的方法','采用他的建议','采用柔和的声音'],
   ex_zh:'如果你必须定个闹钟，应采用柔和的声音或音乐。',ex_py:'Rúguǒ nǐ bìxū dìng ge nàozhōng, yīng cǎiyòng róuhé de shēngyīn huò yīnyuè.',ex_vn:'Nếu bạn buộc phải đặt báo thức thì nên chọn âm thanh hoặc bản nhạc êm dịu.',
   exList:[
     {zh:'如果你必须定个闹钟，应采用柔和的声音或音乐。',py:'Rúguǒ nǐ bìxū dìng ge nàozhōng, yīng cǎiyòng róuhé de shēngyīn huò yīnyuè.',vn:'Nếu bạn buộc phải đặt báo thức thì nên chọn âm thanh hoặc bản nhạc êm dịu.'},
     {zh:'学校采用了新的教学方法，学生们的成绩有所提高。',py:'Xuéxiào cǎiyòngle xīn de jiàoxué fāngfǎ, xuéshengmen de chéngjì yǒu suǒ tígāo.',vn:'Nhà trường áp dụng phương pháp dạy học mới, thành tích của học sinh đã có phần nâng cao.'},
     {zh:'经理最后采用了小王的建议。',py:'Jīnglǐ zuìhòu cǎiyòngle Xiǎo Wáng de jiànyì.',vn:'Cuối cùng giám đốc đã chọn dùng đề xuất của Tiểu Vương.'}
   ],
   colloFull:[
     {zh:'采用新技术',py:'cǎiyòng xīn jìshù',vn:'áp dụng kỹ thuật mới'},
     {zh:'采用……的方法',py:'cǎiyòng……de fāngfǎ',vn:'áp dụng phương pháp …'},
     {zh:'采用他的建议',py:'cǎiyòng tā de jiànyì',vn:'chọn dùng đề xuất của anh ấy'},
     {zh:'采用柔和的声音',py:'cǎiyòng róuhé de shēngyīn',vn:'chọn âm thanh êm dịu'}
   ],
   patterns:[
     {s:'采用 + 方法 / 技术 / 建议',m:'Áp dụng phương pháp / kỹ thuật; chọn dùng đề xuất'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đề xuất của cậu ấy đã được công ty áp dụng.',answer:'他的建议被公司采用了。',answerPy:'Tā de jiànyì bèi gōngsī cǎiyòng le.',
      note:'建议 làm chủ ngữ bị động; 采用 đi được với 建议.',pair:'被'},
     {promptLang:'vi',prompt:'Chỉ cần áp dụng phương pháp đúng thì học tiếng Trung sẽ không khó.',answer:'只要采用正确的方法，学汉语就不难。',answerPy:'Zhǐyào cǎiyòng zhèngquè de fāngfǎ, xué Hànyǔ jiù bù nán.',
      note:'采用 + 方法 là kết hợp quen thuộc.',pair:'只要……就……'}
   ]},

  {n:34,zh:'柔和',py:'róuhé',pos:'Tính từ',vn:'êm dịu, dịu nhẹ',hv:'nhu hòa',em:'🎶',lesson:11,
   explain:['(Âm thanh, ánh sáng, màu sắc, giọng nói) dịu, không gắt, dễ chịu.'],
   usage:'柔和的 + 声音 / 光线 / 音乐 / 颜色; 声音很柔和. Trái nghĩa: 刺耳 (chói tai), 刺眼 (chói mắt).',
   collo:['柔和的声音','柔和的光线','柔和的音乐','颜色很柔和'],
   ex_zh:'台灯的光线很柔和，看书眼睛不累。',ex_py:'Táidēng de guāngxiàn hěn róuhé, kàn shū yǎnjing bú lèi.',ex_vn:'Ánh sáng đèn bàn rất dịu, đọc sách không mỏi mắt.',
   exList:[
     {zh:'台灯的光线很柔和，看书眼睛不累。',py:'Táidēng de guāngxiàn hěn róuhé, kàn shū yǎnjing bú lèi.',vn:'Ánh sáng đèn bàn rất dịu, đọc sách không mỏi mắt.'},
     {zh:'她说话的声音总是那么柔和。',py:'Tā shuōhuà de shēngyīn zǒngshì nàme róuhé.',vn:'Giọng nói của cô ấy lúc nào cũng dịu dàng như thế.'},
     {zh:'我把闹铃换成了一首柔和的音乐。',py:'Wǒ bǎ nàolíng huànchéngle yì shǒu róuhé de yīnyuè.',vn:'Tôi đã đổi chuông báo thức thành một bản nhạc êm dịu.'}
   ],
   colloFull:[
     {zh:'柔和的声音',py:'róuhé de shēngyīn',vn:'âm thanh êm dịu'},
     {zh:'柔和的光线',py:'róuhé de guāngxiàn',vn:'ánh sáng dịu'},
     {zh:'柔和的音乐',py:'róuhé de yīnyuè',vn:'bản nhạc êm dịu'},
     {zh:'颜色很柔和',py:'yánsè hěn róuhé',vn:'màu sắc rất dịu'}
   ],
   patterns:[
     {s:'柔和的 + 声音 / 光线 / 音乐 / 颜色',m:'Âm thanh / ánh sáng / nhạc / màu sắc dịu nhẹ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi đổi chuông báo thức thành một bản nhạc êm dịu.',answer:'我把闹铃换成了一首柔和的音乐。',answerPy:'Wǒ bǎ nàolíng huànchéngle yì shǒu róuhé de yīnyuè.',
      note:'把 + A + 换成 + B: đổi A thành B.',pair:'把'},
     {promptLang:'vi',prompt:'Ánh sáng càng dịu thì mắt càng dễ chịu.',answer:'光线越柔和，眼睛越舒服。',answerPy:'Guāngxiàn yuè róuhé, yǎnjing yuè shūfu.',
      note:'柔和 là tính từ, đi thẳng sau 越.',pair:'越……越……'}
   ]},

  {n:35,zh:'愿望',py:'yuànwàng',pos:'Danh từ',vn:'ước muốn, nguyện vọng',hv:'nguyện vọng',em:'🌟',lesson:11,
   explain:['Điều mong muốn đạt được.','Chỉ là DANH TỪ — khác 希望 (vừa là động từ vừa là danh từ).'],
   usage:'实现愿望; 满足……的愿望; 符合……的愿望; 生日愿望; 有一个愿望.',
   collo:['实现愿望','满足愿望','符合愿望','生日愿望'],
   ex_zh:'各种醒来方式中，当然是自然醒最符合我们的愿望。',ex_py:'Gè zhǒng xǐnglái fāngshì zhōng, dāngrán shì zìrán xǐng zuì fúhé wǒmen de yuànwàng.',ex_vn:'Trong các cách tỉnh dậy, đương nhiên tự nhiên tỉnh giấc là hợp với mong muốn của chúng ta nhất.',
   exList:[
     {zh:'各种醒来方式中，当然是自然醒最符合我们的愿望。',py:'Gè zhǒng xǐnglái fāngshì zhōng, dāngrán shì zìrán xǐng zuì fúhé wǒmen de yuànwàng.',vn:'Trong các cách tỉnh dậy, đương nhiên tự nhiên tỉnh giấc là hợp với mong muốn của chúng ta nhất.'},
     {zh:'他从小的愿望是当一名医生，现在终于实现了。',py:'Tā cóngxiǎo de yuànwàng shì dāng yì míng yīshēng, xiànzài zhōngyú shíxiàn le.',vn:'Ước mơ từ nhỏ của anh ấy là làm bác sĩ, giờ cuối cùng đã thành hiện thực.'},
     {zh:'父母总是想办法满足孩子的愿望。',py:'Fùmǔ zǒngshì xiǎng bànfǎ mǎnzú háizi de yuànwàng.',vn:'Bố mẹ lúc nào cũng tìm cách đáp ứng mong muốn của con.'}
   ],
   colloFull:[
     {zh:'实现愿望',py:'shíxiàn yuànwàng',vn:'thực hiện ước muốn'},
     {zh:'满足愿望',py:'mǎnzú yuànwàng',vn:'đáp ứng nguyện vọng'},
     {zh:'符合愿望',py:'fúhé yuànwàng',vn:'hợp với mong muốn'},
     {zh:'生日愿望',py:'shēngrì yuànwàng',vn:'điều ước sinh nhật'}
   ],
   patterns:[
     {s:'实现 / 满足 / 符合 + (……的)愿望',m:'Thực hiện / đáp ứng / hợp với nguyện vọng'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nguyện vọng của cô ấy đã được bố mẹ đáp ứng.',answer:'她的愿望被父母满足了。',answerPy:'Tā de yuànwàng bèi fùmǔ mǎnzú le.',
      note:'愿望 là danh từ, làm chủ ngữ của câu 被.',pair:'被'},
     {promptLang:'vi',prompt:'Chỉ cần nỗ lực thì ước mơ nhất định sẽ thành hiện thực.',answer:'只要努力，愿望就一定能实现。',answerPy:'Zhǐyào nǔlì, yuànwàng jiù yídìng néng shíxiàn.',
      note:'愿望 + 实现: ước muốn thành hiện thực.',pair:'只要……就……'}
   ]},

  {n:36,zh:'窗帘',py:'chuānglián',pos:'Danh từ',vn:'rèm cửa sổ',hv:'song liêm',em:'🪟',lesson:11,
   explain:['Tấm vải hoặc mành treo ở cửa sổ để che ánh sáng.'],
   usage:'拉开 / 拉上 + 窗帘; 一块窗帘. Hay dùng trong câu 把: 把窗帘拉开.',
   collo:['拉开窗帘','拉上窗帘','换窗帘','一块窗帘'],
   ex_zh:'可谁能替你拉开窗帘让阳光照进来呢？',ex_py:'Kě shéi néng tì nǐ lākāi chuānglián ràng yángguāng zhào jìnlái ne?',ex_vn:'Nhưng ai có thể kéo rèm giúp bạn để ánh nắng chiếu vào đây?',
   exList:[
     {zh:'可谁能替你拉开窗帘让阳光照进来呢？',py:'Kě shéi néng tì nǐ lākāi chuānglián ràng yángguāng zhào jìnlái ne?',vn:'Nhưng ai có thể kéo rèm giúp bạn để ánh nắng chiếu vào đây?'},
     {zh:'天黑了，把窗帘拉上吧。',py:'Tiān hēi le, bǎ chuānglián lāshang ba.',vn:'Trời tối rồi, kéo rèm lại đi.'},
     {zh:'妈妈给我的房间换了一块浅蓝色的窗帘。',py:'Māma gěi wǒ de fángjiān huànle yí kuài qiǎnlánsè de chuānglián.',vn:'Mẹ thay cho phòng tôi một tấm rèm màu xanh nhạt.'}
   ],
   colloFull:[
     {zh:'拉开窗帘',py:'lākāi chuānglián',vn:'kéo rèm ra'},
     {zh:'拉上窗帘',py:'lāshang chuānglián',vn:'kéo rèm lại'},
     {zh:'换窗帘',py:'huàn chuānglián',vn:'thay rèm'},
     {zh:'一块窗帘',py:'yí kuài chuānglián',vn:'một tấm rèm'}
   ],
   patterns:[
     {s:'把窗帘 + 拉开 / 拉上',m:'Kéo rèm ra / kéo rèm lại'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Sáng nào mẹ cũng kéo rèm ra để ánh nắng chiếu vào.',answer:'每天早上妈妈都把窗帘拉开，让阳光照进来。',answerPy:'Měi tiān zǎoshang māma dōu bǎ chuānglián lākāi, ràng yángguāng zhào jìnlái.',
      note:'把 + 窗帘 + 拉开; vế sau 让 + 阳光 + 照进来.',pair:'把'},
     {promptLang:'vi',prompt:'Rèm vừa kéo ra là tôi tỉnh ngay.',answer:'窗帘一拉开，我就醒了。',answerPy:'Chuānglián yì lākāi, wǒ jiù xǐng le.',
      note:'Hai vế khác chủ ngữ: 窗帘一……，我就…….',pair:'一……就……'}
   ]},

  {n:37,zh:'市场',py:'shìchǎng',pos:'Danh từ',vn:'thị trường, chợ',hv:'thị trường',em:'🏪',lesson:11,
   explain:['Chợ, nơi mua bán; thị trường (nghĩa trừu tượng) của hàng hóa.'],
   usage:'去市场买菜; 市场上出现了……; 进入……市场; 很有市场 (được ưa chuộng).',
   collo:['市场上','去市场买菜','进入市场','很有市场'],
   ex_zh:'近年来，市场上出现了一种新的电子产品，名为“光闹钟”。',ex_py:'Jìnnián lái, shìchǎng shang chūxiànle yì zhǒng xīn de diànzǐ chǎnpǐn, míng wéi “guāng nàozhōng”.',ex_vn:'Những năm gần đây, trên thị trường xuất hiện một loại sản phẩm điện tử mới, có tên là "đồng hồ báo thức ánh sáng".',
   exList:[
     {zh:'近年来，市场上出现了一种新的电子产品，名为“光闹钟”。',py:'Jìnnián lái, shìchǎng shang chūxiànle yì zhǒng xīn de diànzǐ chǎnpǐn, míng wéi “guāng nàozhōng”.',vn:'Những năm gần đây, trên thị trường xuất hiện một loại sản phẩm điện tử mới, có tên là "đồng hồ báo thức ánh sáng".'},
     {zh:'奶奶每天早上都去市场买菜。',py:'Nǎinai měi tiān zǎoshang dōu qù shìchǎng mǎi cài.',vn:'Sáng nào bà cũng đi chợ mua thức ăn.'},
     {zh:'这种手机刚进入越南市场，就很受年轻人欢迎。',py:'Zhè zhǒng shǒujī gāng jìnrù Yuènán shìchǎng, jiù hěn shòu niánqīngrén huānyíng.',vn:'Loại điện thoại này vừa vào thị trường Việt Nam đã được giới trẻ rất ưa chuộng.'}
   ],
   colloFull:[
     {zh:'市场上',py:'shìchǎng shang',vn:'trên thị trường'},
     {zh:'去市场买菜',py:'qù shìchǎng mǎi cài',vn:'đi chợ mua thức ăn'},
     {zh:'进入市场',py:'jìnrù shìchǎng',vn:'vào thị trường'},
     {zh:'很有市场',py:'hěn yǒu shìchǎng',vn:'được thị trường ưa chuộng'}
   ],
   patterns:[
     {s:'市场上 + 出现了 + ……',m:'Trên thị trường xuất hiện …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Sản phẩm này vừa vào thị trường đã rất được ưa chuộng.',answer:'这种产品一进入市场，就很受欢迎。',answerPy:'Zhè zhǒng chǎnpǐn yí jìnrù shìchǎng, jiù hěn shòu huānyíng.',
      note:'进入市场 = tung ra thị trường; 受欢迎 = được ưa chuộng.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Trên thị trường các loại đồng hồ báo thức ngày càng nhiều.',answer:'市场上的闹钟越来越多了。',answerPy:'Shìchǎng shang de nàozhōng yuèláiyuè duō le.',
      note:'市场上的 + N làm chủ ngữ.',pair:'越来越'}
   ]},

  {n:38,zh:'产品',py:'chǎnpǐn',pos:'Danh từ',vn:'sản phẩm',hv:'sản phẩm',em:'📦',lesson:11,
   explain:['Vật được sản xuất ra.'],
   usage:'电子产品, 新产品, 产品质量; 生产 / 推出 / 购买 + 产品.',
   collo:['电子产品','新产品','产品质量','推出产品'],
   ex_zh:'这家公司的产品质量很好，价格也不贵。',ex_py:'Zhè jiā gōngsī de chǎnpǐn zhìliàng hěn hǎo, jiàgé yě bú guì.',ex_vn:'Sản phẩm của công ty này chất lượng rất tốt, giá cũng không đắt.',
   exList:[
     {zh:'这家公司的产品质量很好，价格也不贵。',py:'Zhè jiā gōngsī de chǎnpǐn zhìliàng hěn hǎo, jiàgé yě bú guì.',vn:'Sản phẩm của công ty này chất lượng rất tốt, giá cũng không đắt.'},
     {zh:'市场上出现了一种新的电子产品。',py:'Shìchǎng shang chūxiànle yì zhǒng xīn de diànzǐ chǎnpǐn.',vn:'Trên thị trường xuất hiện một loại sản phẩm điện tử mới.'},
     {zh:'中学生不应该花太多时间玩电子产品。',py:'Zhōngxuéshēng bù yīnggāi huā tài duō shíjiān wán diànzǐ chǎnpǐn.',vn:'Học sinh trung học không nên dành quá nhiều thời gian chơi thiết bị điện tử.'}
   ],
   colloFull:[
     {zh:'电子产品',py:'diànzǐ chǎnpǐn',vn:'sản phẩm điện tử'},
     {zh:'新产品',py:'xīn chǎnpǐn',vn:'sản phẩm mới'},
     {zh:'产品质量',py:'chǎnpǐn zhìliàng',vn:'chất lượng sản phẩm'},
     {zh:'推出产品',py:'tuīchū chǎnpǐn',vn:'tung ra sản phẩm'}
   ],
   patterns:[
     {s:'电子 / 新 + 产品',m:'Sản phẩm điện tử / sản phẩm mới'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Sản phẩm này không những đẹp mà chất lượng cũng rất tốt.',answer:'这种产品不仅好看，而且质量也很好。',answerPy:'Zhè zhǒng chǎnpǐn bùjǐn hǎokàn, érqiě zhìliàng yě hěn hǎo.',
      note:'Lượng từ của 产品 thường dùng 种 / 个 / 件.',pair:'不仅……而且……'},
     {promptLang:'vi',prompt:'Sản phẩm mới đã bị khách hàng mua hết rồi.',answer:'新产品被顾客买光了。',answerPy:'Xīn chǎnpǐn bèi gùkè mǎiguāng le.',
      note:'买光 = mua sạch; câu 被 kể kết quả.',pair:'被'}
   ]},

  {n:39,zh:'模仿',py:'mófǎng',pos:'Động từ',vn:'mô phỏng, bắt chước',hv:'mô phỏng',em:'🦜',lesson:11,
   explain:['Làm theo, bắt chước y như cái có sẵn.'],
   usage:'模仿 + người / giọng / động tác / sự thay đổi; 准确地 / 成功地 / 专门 / 故意 + 模仿 (bảng 词语搭配).',
   collo:['模仿声音','模仿大人','准确地模仿','故意模仿'],
   ex_zh:'它能在室内模仿早晨自然光线的变化。',ex_py:'Tā néng zài shìnèi mófǎng zǎochen zìrán guāngxiàn de biànhuà.',ex_vn:'Nó có thể mô phỏng sự thay đổi của ánh sáng tự nhiên buổi sáng ngay trong phòng.',
   exList:[
     {zh:'它能在室内模仿早晨自然光线的变化。',py:'Tā néng zài shìnèi mófǎng zǎochen zìrán guāngxiàn de biànhuà.',vn:'Nó có thể mô phỏng sự thay đổi của ánh sáng tự nhiên buổi sáng ngay trong phòng.'},
     {zh:'小孩子喜欢模仿大人说话。',py:'Xiǎo háizi xǐhuan mófǎng dàrén shuōhuà.',vn:'Trẻ con thích bắt chước người lớn nói chuyện.'},
     {zh:'他能准确地模仿各种鸟的叫声。',py:'Tā néng zhǔnquè de mófǎng gè zhǒng niǎo de jiàoshēng.',vn:'Cậu ấy có thể bắt chước chính xác tiếng kêu của đủ loài chim.'}
   ],
   colloFull:[
     {zh:'模仿声音',py:'mófǎng shēngyīn',vn:'bắt chước giọng / âm thanh'},
     {zh:'模仿大人',py:'mófǎng dàrén',vn:'bắt chước người lớn'},
     {zh:'准确地模仿',py:'zhǔnquè de mófǎng',vn:'bắt chước chính xác'},
     {zh:'故意模仿',py:'gùyì mófǎng',vn:'cố ý bắt chước'},
     {zh:'成功地模仿',py:'chénggōng de mófǎng',vn:'mô phỏng thành công'}
   ],
   patterns:[
     {s:'准确地 / 成功地 / 专门 / 故意 + 模仿',m:'Bắt chước chính xác / thành công / chuyên / cố ý'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cậu ấy bắt chước giọng thầy giống đến mức ngay cả thầy cũng giật mình.',answer:'他模仿老师的声音模仿得太像了，连老师都吃了一惊。',answerPy:'Tā mófǎng lǎoshī de shēngyīn mófǎng de tài xiàng le, lián lǎoshī dōu chīle yì jīng.',
      note:'Động từ có tân ngữ + bổ ngữ trạng thái phải lặp động từ: 模仿……模仿得…….',pair:'连……都……'},
     {promptLang:'vi',prompt:'Trẻ con càng lớn càng thích bắt chước người lớn.',answer:'孩子越大越喜欢模仿大人。',answerPy:'Háizi yuè dà yuè xǐhuan mófǎng dàrén.',
      note:'模仿 mang tân ngữ chỉ người: 模仿大人.',pair:'越……越……'}
   ]},

  {n:40,zh:'避免',py:'bìmiǎn',pos:'Động từ',vn:'tránh, ngăn ngừa',hv:'tị miễn',em:'🛡️',lesson:11,
   explain:['Tìm cách để điều không hay KHÔNG xảy ra.'],
   usage:'避免 + 错误 / 危险 / 伤害 / 迟到; 努力 / 尽量 / 主动 / 故意 / 完全 / 永远 + 避免 (bảng 词语搭配). Bản thân 避免 đã mang nghĩa phủ định — không nói 避免不迟到.',
   collo:['避免错误','避免伤害','尽量避免','完全避免'],
   ex_zh:'光闹钟可避免传统闹钟突然惊醒对人体健康的伤害。',ex_py:'Guāng nàozhōng kě bìmiǎn chuántǒng nàozhōng tūrán jīngxǐng duì réntǐ jiànkāng de shānghài.',ex_vn:'Đồng hồ báo thức ánh sáng có thể tránh được tác hại với sức khỏe khi đồng hồ báo thức truyền thống làm người ta giật mình tỉnh giấc.',
   exList:[
     {zh:'光闹钟可避免传统闹钟突然惊醒对人体健康的伤害。',py:'Guāng nàozhōng kě bìmiǎn chuántǒng nàozhōng tūrán jīngxǐng duì réntǐ jiànkāng de shānghài.',vn:'Đồng hồ báo thức ánh sáng có thể tránh được tác hại với sức khỏe khi đồng hồ báo thức truyền thống làm người ta giật mình tỉnh giấc.'},
     {zh:'考试时要认真检查，尽量避免粗心的错误。',py:'Kǎoshì shí yào rènzhēn jiǎnchá, jǐnliàng bìmiǎn cūxīn de cuòwù.',vn:'Khi thi phải kiểm tra kỹ, cố hết sức tránh những lỗi cẩu thả.'},
     {zh:'为了避免迟到，我提前半个小时出门。',py:'Wèile bìmiǎn chídào, wǒ tíqián bàn ge xiǎoshí chūmén.',vn:'Để tránh đến muộn, tôi ra khỏi nhà sớm nửa tiếng.'}
   ],
   colloFull:[
     {zh:'避免错误',py:'bìmiǎn cuòwù',vn:'tránh sai sót'},
     {zh:'避免伤害',py:'bìmiǎn shānghài',vn:'tránh tổn hại'},
     {zh:'尽量避免',py:'jǐnliàng bìmiǎn',vn:'cố hết sức tránh'},
     {zh:'完全避免',py:'wánquán bìmiǎn',vn:'tránh hoàn toàn'},
     {zh:'努力避免',py:'nǔlì bìmiǎn',vn:'cố gắng tránh'}
   ],
   patterns:[
     {s:'努力 / 尽量 / 完全 + 避免 + ……',m:'Cố gắng / hết sức / hoàn toàn tránh …'},
     {s:'为了避免 + ……，……',m:'Để tránh …, (làm gì)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần làm cẩn thận là có thể tránh được sai sót.',answer:'只要认真做，就能避免错误。',answerPy:'Zhǐyào rènzhēn zuò, jiù néng bìmiǎn cuòwù.',
      note:'避免 + điều xấu (错误).',pair:'只要……就……'},
     {promptLang:'vi',prompt:'Việc này tuy khó tránh, nhưng chúng ta có thể giảm bớt tác hại của nó.',answer:'这件事虽然很难避免，但是我们可以减少它的危害。',answerPy:'Zhè jiàn shì suīrán hěn nán bìmiǎn, dànshì wǒmen kěyǐ jiǎnshǎo tā de wēihài.',
      note:'很难避免 = khó tránh; 危害 dùng như danh từ.',pair:'虽然……但是……'}
   ]},

  {n:41,zh:'传统',py:'chuántǒng',pos:'Danh từ / Tính từ',vn:'truyền thống; (thuộc) truyền thống, cổ điển',hv:'truyền thống',em:'🏮',lesson:11,
   explain:['Danh từ: phong tục, tư tưởng được truyền lại từ đời trước (传统节日).','Tính từ: theo lối cũ (传统闹钟 ↔ 光闹钟; 想法很传统).'],
   usage:'传统节日 / 文化; 传统的 + N; 想法很传统; 保持 / 重视 + 传统.',
   collo:['传统闹钟','传统节日','传统文化','很传统'],
   ex_zh:'春节是中国最重要的传统节日。',ex_py:'Chūnjié shì Zhōngguó zuì zhòngyào de chuántǒng jiérì.',ex_vn:'Tết Nguyên đán là ngày lễ truyền thống quan trọng nhất của Trung Quốc.',
   exList:[
     {zh:'春节是中国最重要的传统节日。',py:'Chūnjié shì Zhōngguó zuì zhòngyào de chuántǒng jiérì.',vn:'Tết Nguyên đán là ngày lễ truyền thống quan trọng nhất của Trung Quốc.'},
     {zh:'我爷爷的想法很传统，不喜欢用智能手机。',py:'Wǒ yéye de xiǎngfǎ hěn chuántǒng, bù xǐhuan yòng zhìnéng shǒujī.',vn:'Suy nghĩ của ông tôi rất truyền thống, ông không thích dùng điện thoại thông minh.'},
     {zh:'和传统闹钟相比，光闹钟对身体的伤害小得多。',py:'Hé chuántǒng nàozhōng xiāngbǐ, guāng nàozhōng duì shēntǐ de shānghài xiǎo de duō.',vn:'So với đồng hồ báo thức truyền thống, đồng hồ báo thức ánh sáng ít hại cho cơ thể hơn nhiều.'}
   ],
   colloFull:[
     {zh:'传统闹钟',py:'chuántǒng nàozhōng',vn:'đồng hồ báo thức truyền thống'},
     {zh:'传统节日',py:'chuántǒng jiérì',vn:'ngày lễ truyền thống'},
     {zh:'传统文化',py:'chuántǒng wénhuà',vn:'văn hóa truyền thống'},
     {zh:'很传统',py:'hěn chuántǒng',vn:'rất truyền thống'},
     {zh:'重视传统',py:'zhòngshì chuántǒng',vn:'coi trọng truyền thống'}
   ],
   patterns:[
     {s:'传统 + 节日 / 文化 / 闹钟',m:'Ngày lễ / văn hóa / đồng hồ báo thức truyền thống'},
     {s:'(想法 / 观念) + 很传统',m:'(Suy nghĩ) rất truyền thống — dùng như tính từ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Suy nghĩ của ông tuy rất truyền thống nhưng ông cũng rất thích học cái mới.',answer:'爷爷的想法虽然很传统，但是他也很喜欢学习新东西。',answerPy:'Yéye de xiǎngfǎ suīrán hěn chuántǒng, dànshì tā yě hěn xǐhuan xuéxí xīn dōngxi.',
      note:'传统 dùng như tính từ nên đi được với 很.',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Ngày càng nhiều bạn trẻ thích văn hóa truyền thống.',answer:'越来越多的年轻人喜欢传统文化。',answerPy:'Yuèláiyuè duō de niánqīngrén xǐhuan chuántǒng wénhuà.',
      note:'传统文化: 传统 làm định ngữ trực tiếp, không cần 的.',pair:'越来越'}
   ]},

  {n:42,zh:'生物钟',py:'shēngwùzhōng',pos:'Danh từ (khoa học)',vn:'đồng hồ sinh học',hv:'sinh vật chung',em:'🕰️',lesson:11,
   explain:['Nhịp sinh học bên trong cơ thể, quyết định giờ ngủ, giờ thức… (科学名词 của bài).'],
   usage:'人体生物钟; 符合生物钟规律; 打乱生物钟 (làm rối); 调整生物钟 (điều chỉnh).',
   collo:['人体生物钟','打乱生物钟','调整生物钟','生物钟规律'],
   ex_zh:'经常熬夜会打乱人的生物钟。',ex_py:'Jīngcháng áoyè huì dǎluàn rén de shēngwùzhōng.',ex_vn:'Thường xuyên thức khuya sẽ làm rối loạn đồng hồ sinh học.',
   exList:[
     {zh:'经常熬夜会打乱人的生物钟。',py:'Jīngcháng áoyè huì dǎluàn rén de shēngwùzhōng.',vn:'Thường xuyên thức khuya sẽ làm rối loạn đồng hồ sinh học.'},
     {zh:'自然醒是最符合人体生物钟规律的。',py:'Zìrán xǐng shì zuì fúhé réntǐ shēngwùzhōng guīlǜ de.',vn:'Tự nhiên tỉnh giấc là phù hợp nhất với quy luật đồng hồ sinh học của cơ thể.'},
     {zh:'刚到国外的时候，我花了一个星期才调整好生物钟。',py:'Gāng dào guówài de shíhou, wǒ huāle yí ge xīngqī cái tiáozhěng hǎo shēngwùzhōng.',vn:'Lúc mới ra nước ngoài, tôi mất một tuần mới điều chỉnh lại được đồng hồ sinh học.'}
   ],
   colloFull:[
     {zh:'人体生物钟',py:'réntǐ shēngwùzhōng',vn:'đồng hồ sinh học của cơ thể'},
     {zh:'打乱生物钟',py:'dǎluàn shēngwùzhōng',vn:'làm rối đồng hồ sinh học'},
     {zh:'调整生物钟',py:'tiáozhěng shēngwùzhōng',vn:'điều chỉnh đồng hồ sinh học'},
     {zh:'生物钟规律',py:'shēngwùzhōng guīlǜ',vn:'quy luật đồng hồ sinh học'}
   ],
   patterns:[
     {s:'打乱 / 调整 + 生物钟',m:'Làm rối / điều chỉnh đồng hồ sinh học'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đồng hồ sinh học của tôi bị kỳ nghỉ hè làm rối loạn.',answer:'我的生物钟被暑假打乱了。',answerPy:'Wǒ de shēngwùzhōng bèi shǔjià dǎluàn le.',
      note:'打乱 = động từ + bổ ngữ kết quả, hợp với câu 被.',pair:'被'},
     {promptLang:'vi',prompt:'Chỉ cần ngủ dậy đúng giờ thì đồng hồ sinh học sẽ rất đều đặn.',answer:'只要按时睡觉、按时起床，生物钟就会很有规律。',answerPy:'Zhǐyào ànshí shuìjiào, ànshí qǐchuáng, shēngwùzhōng jiù huì hěn yǒu guīlǜ.',
      note:'生物钟 + 有规律: ôn lại từ 规律 của bài.',pair:'只要……就……'}
   ]},

  {n:43,zh:'新陈代谢',py:'xīnchén dàixiè',pos:'Danh từ (khoa học)',vn:'sự trao đổi chất',hv:'tân trần đại tạ',em:'🔁',lesson:11,
   explain:['Quá trình cơ thể hấp thụ chất mới, thải chất cũ — trao đổi chất (科学名词 của bài).','Nghĩa bóng: cái mới thay thế cái cũ.'],
   usage:'新陈代谢 + 加快 / 变慢; 促进新陈代谢.',
   collo:['新陈代谢加快','新陈代谢变慢','促进新陈代谢'],
   ex_zh:'早晨，人体感受到逐渐变强的太阳光线，新陈代谢随之加快。',ex_py:'Zǎochen, réntǐ gǎnshòu dào zhújiàn biàn qiáng de tàiyáng guāngxiàn, xīnchén dàixiè suí zhī jiākuài.',ex_vn:'Buổi sáng, cơ thể cảm nhận được ánh nắng mạnh dần lên, quá trình trao đổi chất theo đó tăng nhanh.',
   exList:[
     {zh:'早晨，人体感受到逐渐变强的太阳光线，新陈代谢随之加快。',py:'Zǎochen, réntǐ gǎnshòu dào zhújiàn biàn qiáng de tàiyáng guāngxiàn, xīnchén dàixiè suí zhī jiākuài.',vn:'Buổi sáng, cơ thể cảm nhận được ánh nắng mạnh dần lên, quá trình trao đổi chất theo đó tăng nhanh.'},
     {zh:'年纪越大，新陈代谢越慢。',py:'Niánjì yuè dà, xīnchén dàixiè yuè màn.',vn:'Tuổi càng cao, trao đổi chất càng chậm.'},
     {zh:'多运动可以促进新陈代谢。',py:'Duō yùndòng kěyǐ cùjìn xīnchén dàixiè.',vn:'Vận động nhiều có thể thúc đẩy quá trình trao đổi chất.'}
   ],
   colloFull:[
     {zh:'新陈代谢加快',py:'xīnchén dàixiè jiākuài',vn:'trao đổi chất tăng nhanh'},
     {zh:'新陈代谢变慢',py:'xīnchén dàixiè biàn màn',vn:'trao đổi chất chậm lại'},
     {zh:'促进新陈代谢',py:'cùjìn xīnchén dàixiè',vn:'thúc đẩy trao đổi chất'},
     {zh:'人体的新陈代谢',py:'réntǐ de xīnchén dàixiè',vn:'sự trao đổi chất của cơ thể'}
   ],
   patterns:[
     {s:'新陈代谢 + 加快 / 变慢',m:'Trao đổi chất tăng nhanh / chậm lại'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Người ta càng lớn tuổi thì trao đổi chất càng chậm.',answer:'人年纪越大，新陈代谢越慢。',answerPy:'Rén niánjì yuè dà, xīnchén dàixiè yuè màn.',
      note:'Hai vế khác chủ ngữ (年纪 / 新陈代谢) vẫn dùng được 越……越…….',pair:'越……越……'},
     {promptLang:'vi',prompt:'Ánh nắng vừa chiếu vào là quá trình trao đổi chất của cơ thể tăng nhanh.',answer:'阳光一照进来，人体的新陈代谢就加快了。',answerPy:'Yángguāng yí zhào jìnlái, réntǐ de xīnchén dàixiè jiù jiākuài le.',
      note:'新陈代谢 + 加快: kết hợp dùng trong bài khóa.',pair:'一……就……'}
   ]},

  {n:44,zh:'肾上腺素',py:'shènshàngxiànsù',pos:'Danh từ (khoa học)',vn:'a-đrê-na-lin (adrenaline)',hv:'thận thượng tuyến tố',em:'💉',lesson:11,
   explain:['Hoóc-môn do tuyến thượng thận tiết ra khi căng thẳng, sợ hãi — làm tim đập nhanh, huyết áp tăng (科学名词 của bài).'],
   usage:'提高 / 分泌 + 肾上腺素; 肾上腺素水平 (mức adrenaline).',
   collo:['肾上腺素水平','提高肾上腺素','分泌肾上腺素'],
   ex_zh:'出于自我保护，被闹钟叫醒时我们的身体会提高体内的肾上腺素水平。',ex_py:'Chūyú zìwǒ bǎohù, bèi nàozhōng jiàoxǐng shí wǒmen de shēntǐ huì tígāo tǐnèi de shènshàngxiànsù shuǐpíng.',ex_vn:'Để tự bảo vệ, khi bị báo thức gọi dậy cơ thể chúng ta sẽ tăng mức adrenaline trong người.',
   exList:[
     {zh:'出于自我保护，被闹钟叫醒时我们的身体会提高体内的肾上腺素水平。',py:'Chūyú zìwǒ bǎohù, bèi nàozhōng jiàoxǐng shí wǒmen de shēntǐ huì tígāo tǐnèi de shènshàngxiànsù shuǐpíng.',vn:'Để tự bảo vệ, khi bị báo thức gọi dậy cơ thể chúng ta sẽ tăng mức adrenaline trong người.'},
     {zh:'人在害怕的时候，身体会分泌大量的肾上腺素。',py:'Rén zài hàipà de shíhou, shēntǐ huì fēnmì dàliàng de shènshàngxiànsù.',vn:'Khi sợ hãi, cơ thể con người sẽ tiết ra rất nhiều adrenaline.'},
     {zh:'肾上腺素一增加，心跳就会加快。',py:'Shènshàngxiànsù yì zēngjiā, xīntiào jiù huì jiākuài.',vn:'Adrenaline vừa tăng là tim sẽ đập nhanh hơn.'}
   ],
   colloFull:[
     {zh:'肾上腺素水平',py:'shènshàngxiànsù shuǐpíng',vn:'mức adrenaline'},
     {zh:'提高肾上腺素',py:'tígāo shènshàngxiànsù',vn:'tăng adrenaline'},
     {zh:'分泌肾上腺素',py:'fēnmì shènshàngxiànsù',vn:'tiết adrenaline'}
   ],
   patterns:[
     {s:'提高 / 分泌 + 肾上腺素',m:'Tăng / tiết adrenaline'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Con người hễ căng thẳng là cơ thể tiết ra adrenaline.',answer:'人一紧张，身体就会分泌肾上腺素。',answerPy:'Rén yì jǐnzhāng, shēntǐ jiù huì fēnmì shènshàngxiànsù.',
      note:'分泌 = tiết ra; 肾上腺素 đọc liền shènshàngxiànsù.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Adrenaline càng cao thì tim đập càng nhanh.',answer:'肾上腺素越高，心跳越快。',answerPy:'Shènshàngxiànsù yuè gāo, xīntiào yuè kuài.',
      note:'Hai vế song song: A 越高, B 越快.',pair:'越……越……'}
   ]},

  {n:45,zh:'血压',py:'xuèyā',pos:'Danh từ (khoa học)',vn:'huyết áp',hv:'huyết áp',em:'🩺',lesson:11,
   explain:['Áp lực của máu lên thành mạch (科学名词 của bài).'],
   usage:'量血压 (đo huyết áp); 血压高 / 低 / 正常; 高血压 (bệnh cao huyết áp). 血 trong 血压 đọc xuè.',
   collo:['量血压','血压很高','高血压','血压正常'],
   ex_zh:'突然被闹铃惊醒的人比自然醒的人血压更高、心跳更快。',ex_py:'Tūrán bèi nàolíng jīngxǐng de rén bǐ zìrán xǐng de rén xuèyā gèng gāo, xīntiào gèng kuài.',ex_vn:'Người đột ngột bị chuông báo thức làm giật mình tỉnh giấc có huyết áp cao hơn, tim đập nhanh hơn người tự nhiên tỉnh dậy.',
   exList:[
     {zh:'突然被闹铃惊醒的人比自然醒的人血压更高、心跳更快。',py:'Tūrán bèi nàolíng jīngxǐng de rén bǐ zìrán xǐng de rén xuèyā gèng gāo, xīntiào gèng kuài.',vn:'Người đột ngột bị chuông báo thức làm giật mình tỉnh giấc có huyết áp cao hơn, tim đập nhanh hơn người tự nhiên tỉnh dậy.'},
     {zh:'爷爷每天早上都要量血压。',py:'Yéye měi tiān zǎoshang dōu yào liáng xuèyā.',vn:'Sáng nào ông cũng phải đo huyết áp.'},
     {zh:'这种状态如果持续数月，将导致高血压。',py:'Zhè zhǒng zhuàngtài rúguǒ chíxù shù yuè, jiāng dǎozhì gāo xuèyā.',vn:'Trạng thái này nếu kéo dài vài tháng sẽ dẫn đến cao huyết áp.'}
   ],
   colloFull:[
     {zh:'量血压',py:'liáng xuèyā',vn:'đo huyết áp'},
     {zh:'血压很高',py:'xuèyā hěn gāo',vn:'huyết áp rất cao'},
     {zh:'高血压',py:'gāo xuèyā',vn:'bệnh cao huyết áp'},
     {zh:'血压正常',py:'xuèyā zhèngcháng',vn:'huyết áp bình thường'}
   ],
   patterns:[
     {s:'量 + 血压',m:'Đo huyết áp'},
     {s:'血压 + 高 / 低 / 正常',m:'Huyết áp cao / thấp / bình thường'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Huyết áp của ông đã được bác sĩ đo rồi.',answer:'爷爷的血压已经被医生量过了。',answerPy:'Yéye de xuèyā yǐjīng bèi yīshēng liángguo le.',
      note:'量 đọc liáng (đo); câu 被 + 过 + 了.',pair:'被'},
     {promptLang:'vi',prompt:'Bà tuy đã có tuổi nhưng huyết áp vẫn luôn bình thường.',answer:'奶奶虽然年纪大了，但是血压一直很正常。',answerPy:'Nǎinai suīrán niánjì dà le, dànshì xuèyā yìzhí hěn zhèngcháng.',
      note:'血压 + 正常: tính từ làm vị ngữ.',pair:'虽然……但是……'}
   ]}
];

// ══════════════════════════════════════════
// BÀI ĐỌC — một bài liền, 5 đoạn đúng như giáo trình (673 chữ)
// ══════════════════════════════════════════
var dialogData = [
  {scene:'课文 · 闹钟的危害',
   preQuiz:[
     {q:'根据医学研究，哪种醒来方式最符合人体生物钟规律？',opts:['自然醒','被闹钟叫醒','被家人叫醒'],ans:0},
     {q:'自然醒的必要条件是什么？',opts:['声音','光线','温度'],ans:1},
     {q:'阴雨天人们为什么往往喜欢睡懒觉？',opts:['因为天气太冷','因为心情不好','因为太阳光线弱，新陈代谢慢'],ans:2},
     {q:'为什么闹钟的用途显得格外重要？',opts:['闹钟越来越便宜','现代生活紧张，很多人无法自然地醒来','人们越来越喜欢早起'],ans:1},
     {q:'从睡眠状态过渡到清醒状态时，人的呼吸会怎样？',opts:['变慢','没有变化','从每分钟16次提高到24次'],ans:2},
     {q:'突然被闹钟叫醒，在心理上会使人产生什么不适？',opts:['心慌、情绪低落','特别想吃东西','特别兴奋'],ans:0},
     {q:'从深度睡眠中被突然叫醒，人的短期记忆能力最多为正常状态的多少？',opts:['85%','65%','24%'],ans:1},
     {q:'课文说，这时人的能力和谁相当？',opts:['运动员','小孩子','醉酒者'],ans:2},
     {q:'被闹钟叫醒的状态如果持续数天、数周、数月，将导致什么？',opts:['高血压、失眠和一些精神问题','记忆力提高','身体更健康'],ans:0},
     {q:'专家认为，人们为什么在早上醒来时更容易发病？',opts:['因为早上空气不好','因为人在睡眠时身体会发生一些变化','因为早上吃得太少'],ans:1},
     {q:'如果必须定闹钟，课文建议怎么做？',opts:['把声音调到最大','多定几个闹钟','采用柔和的声音或音乐'],ans:2},
     {q:'“光闹钟”是怎样叫醒人的？',opts:['模仿早晨自然光线的变化','发出很响的铃声','让家人拉开窗帘'],ans:0}
   ],
   lines:[
    {sp:0,zh:'医学研究证明，人类睡眠有其特定的机制，自然醒是最符合人体生物钟规律的。光线是自然醒的必要条件，是人体内的生物闹钟。',
     py:'Yīxué yánjiū zhèngmíng, rénlèi shuìmián yǒu qí tèdìng de jīzhì, zìrán xǐng shì zuì fúhé réntǐ shēngwùzhōng guīlǜ de. Guāngxiàn shì zìrán xǐng de bìyào tiáojiàn, shì réntǐ nèi de shēngwù nàozhōng.',
     vn:'Nghiên cứu y học chứng minh rằng giấc ngủ của con người có cơ chế riêng của nó, tự nhiên tỉnh giấc là phù hợp nhất với quy luật đồng hồ sinh học của cơ thể. Ánh sáng là điều kiện cần thiết để tự nhiên tỉnh giấc, là chiếc đồng hồ báo thức sinh học bên trong cơ thể người.'},
    {sp:0,zh:'早晨，人体感受到逐渐变强的太阳光线，新陈代谢随之加快，人逐渐从熟睡过渡到浅睡，直到醒来。这就是阴雨天人们往往喜欢睡懒觉的原因。',
     py:'Zǎochen, réntǐ gǎnshòu dào zhújiàn biàn qiáng de tàiyáng guāngxiàn, xīnchén dàixiè suí zhī jiākuài, rén zhújiàn cóng shúshuì guòdù dào qiǎnshuì, zhídào xǐnglái. Zhè jiù shì yīnyǔ tiān rénmen wǎngwǎng xǐhuan shuì lǎnjiào de yuányīn.',
     vn:'Buổi sáng, cơ thể cảm nhận được ánh nắng mặt trời mạnh dần lên, quá trình trao đổi chất theo đó tăng nhanh, con người dần dần chuyển từ ngủ say sang ngủ nông cho đến khi tỉnh dậy. Đó chính là lý do vì sao vào những ngày mưa âm u người ta thường thích ngủ nướng.'},
    {sp:0,zh:'紧张的现代生活，使很多上班的人无法享受轻松舒适的睡眠、自然地醒来，闹钟的用途就显得格外重要了。但实验研究证明，人们对自然醒与被闹钟铃声叫醒这两种方式所产生的反应是很不相同的。从睡眠状态过渡到清醒状态时，人的呼吸会从16次/分钟提高到24次/分钟，心跳每分钟加快10次。如果突然被闹钟叫醒，将在心理上使人产生心慌、情绪低落、感觉没睡醒等不适。如果是从深度睡眠中被突然叫醒，那么，人的短期记忆能力、计算技能都会受到影响，这些能力最多为正常状态的65%，与醉酒者相当。',
     py:'Jǐnzhāng de xiàndài shēnghuó, shǐ hěn duō shàngbān de rén wúfǎ xiǎngshòu qīngsōng shūshì de shuìmián, zìrán de xǐnglái, nàozhōng de yòngtú jiù xiǎnde géwài zhòngyào le. Dàn shíyàn yánjiū zhèngmíng, rénmen duì zìrán xǐng yǔ bèi nàozhōng língshēng jiàoxǐng zhè liǎng zhǒng fāngshì suǒ chǎnshēng de fǎnyìng shì hěn bù xiāngtóng de. Cóng shuìmián zhuàngtài guòdù dào qīngxǐng zhuàngtài shí, rén de hūxī huì cóng shíliù cì/fēnzhōng tígāo dào èrshísì cì/fēnzhōng, xīntiào měi fēnzhōng jiākuài shí cì. Rúguǒ tūrán bèi nàozhōng jiàoxǐng, jiāng zài xīnlǐ shang shǐ rén chǎnshēng xīnhuāng, qíngxù dīluò, gǎnjué méi shuìxǐng děng búshì. Rúguǒ shì cóng shēndù shuìmián zhōng bèi tūrán jiàoxǐng, nàme, rén de duǎnqī jìyì nénglì, jìsuàn jìnéng dōu huì shòudào yǐngxiǎng, zhèxiē nénglì zuì duō wéi zhèngcháng zhuàngtài de bǎi fēn zhī liùshíwǔ, yǔ zuìjiǔzhě xiāngdāng.',
     vn:'Cuộc sống hiện đại căng thẳng khiến nhiều người đi làm không thể tận hưởng giấc ngủ thư thái, dễ chịu và tỉnh dậy một cách tự nhiên, vì thế công dụng của đồng hồ báo thức càng trở nên đặc biệt quan trọng. Nhưng nghiên cứu thực nghiệm chứng minh, phản ứng mà con người sinh ra với hai cách — tự nhiên tỉnh giấc và bị tiếng chuông báo thức gọi dậy — là rất khác nhau. Khi chuyển từ trạng thái ngủ sang trạng thái tỉnh táo, nhịp thở của con người sẽ tăng từ 16 lần/phút lên 24 lần/phút, nhịp tim mỗi phút tăng thêm 10 lần. Nếu đột ngột bị đồng hồ báo thức gọi dậy, về mặt tâm lý sẽ khiến người ta khó chịu: hồi hộp, tâm trạng sa sút, cảm thấy ngủ chưa đủ… Nếu bị gọi dậy đột ngột khi đang ngủ sâu thì khả năng ghi nhớ ngắn hạn và kỹ năng tính toán đều sẽ bị ảnh hưởng, những khả năng này nhiều nhất chỉ bằng 65% so với trạng thái bình thường, tương đương với người say rượu.'},
    {sp:0,zh:'出于自我保护，被闹钟叫醒时我们的身体会提高体内的肾上腺素水平。这种状态如果持续数天、数周、数月，将导致高血压、失眠和一些精神问题等。研究发现，突然被闹铃惊醒的人比自然醒的人血压更高、心跳更快。对此，专家解释说，人在睡眠时，身体会发生一些变化，因此人们在早上醒来时更容易发病，而闹铃则会使发病的可能性变得更大。如果你必须定个闹钟，应采用柔和的声音或音乐。',
     py:'Chūyú zìwǒ bǎohù, bèi nàozhōng jiàoxǐng shí wǒmen de shēntǐ huì tígāo tǐnèi de shènshàngxiànsù shuǐpíng. Zhè zhǒng zhuàngtài rúguǒ chíxù shù tiān, shù zhōu, shù yuè, jiāng dǎozhì gāo xuèyā, shīmián hé yìxiē jīngshén wèntí děng. Yánjiū fāxiàn, tūrán bèi nàolíng jīngxǐng de rén bǐ zìrán xǐng de rén xuèyā gèng gāo, xīntiào gèng kuài. Duì cǐ, zhuānjiā jiěshì shuō, rén zài shuìmián shí, shēntǐ huì fāshēng yìxiē biànhuà, yīncǐ rénmen zài zǎoshang xǐnglái shí gèng róngyì fābìng, ér nàolíng zé huì shǐ fābìng de kěnéngxìng biàn de gèng dà. Rúguǒ nǐ bìxū dìng ge nàozhōng, yīng cǎiyòng róuhé de shēngyīn huò yīnyuè.',
     vn:'Để tự bảo vệ, khi bị đồng hồ báo thức gọi dậy, cơ thể chúng ta sẽ tăng mức adrenaline trong người. Trạng thái này nếu kéo dài vài ngày, vài tuần, vài tháng sẽ dẫn đến cao huyết áp, mất ngủ và một số vấn đề về tinh thần. Nghiên cứu phát hiện, người đột ngột bị chuông báo thức làm giật mình tỉnh giấc có huyết áp cao hơn, tim đập nhanh hơn người tự nhiên tỉnh dậy. Về điều này, chuyên gia giải thích rằng khi con người ngủ, cơ thể sẽ có một số thay đổi, vì vậy buổi sáng lúc thức dậy người ta dễ phát bệnh hơn, còn chuông báo thức thì khiến khả năng phát bệnh càng lớn. Nếu bạn buộc phải đặt báo thức, nên chọn âm thanh hoặc bản nhạc êm dịu.'},
    {sp:0,zh:'各种醒来方式中，当然是自然醒最符合我们的愿望。可谁能替你拉开窗帘让阳光照进来呢？近年来，市场上出现了一种新的电子产品，名为“光闹钟”。它能在室内模仿早晨自然光线的变化，通过光线的作用使人在设定的时间里自然地醒来，可避免传统闹钟突然惊醒对人体健康的伤害。希望这样能向真正的“自然醒”走近一点，再走近一点。',
     py:'Gè zhǒng xǐnglái fāngshì zhōng, dāngrán shì zìrán xǐng zuì fúhé wǒmen de yuànwàng. Kě shéi néng tì nǐ lākāi chuānglián ràng yángguāng zhào jìnlái ne? Jìnnián lái, shìchǎng shang chūxiànle yì zhǒng xīn de diànzǐ chǎnpǐn, míng wéi “guāng nàozhōng”. Tā néng zài shìnèi mófǎng zǎochen zìrán guāngxiàn de biànhuà, tōngguò guāngxiàn de zuòyòng shǐ rén zài shèdìng de shíjiān li zìrán de xǐnglái, kě bìmiǎn chuántǒng nàozhōng tūrán jīngxǐng duì réntǐ jiànkāng de shānghài. Xīwàng zhèyàng néng xiàng zhēnzhèng de “zìrán xǐng” zǒujìn yìdiǎn, zài zǒujìn yìdiǎn.',
     vn:'Trong các cách tỉnh dậy, đương nhiên tự nhiên tỉnh giấc là hợp với mong muốn của chúng ta nhất. Nhưng ai có thể kéo rèm giúp bạn để ánh nắng chiếu vào đây? Những năm gần đây, trên thị trường xuất hiện một loại sản phẩm điện tử mới, có tên là "đồng hồ báo thức ánh sáng". Nó có thể mô phỏng sự thay đổi của ánh sáng tự nhiên buổi sáng ngay trong phòng, nhờ tác dụng của ánh sáng khiến con người tự nhiên tỉnh dậy vào thời gian đã cài đặt, tránh được tác hại với sức khỏe khi đồng hồ báo thức truyền thống làm người ta giật mình tỉnh giấc. Hy vọng như vậy có thể tiến gần thêm một chút, rồi gần thêm chút nữa, tới sự "tự nhiên tỉnh giấc" thật sự.'}
   ]}
];

// ══════════════════════════════════════════
// PHÂN BIỆT TỪ GẦN NGHĨA 词语辨析 — cặp 1 đúng như sách (持续—继续),
// thêm 2 cặp dễ nhầm lấy từ bài tập 选择正确答案 của sách (愿望—希望, 危害—伤害)
// ══════════════════════════════════════════
var synonymData = [
  {pair:'持续 — 继续',
   same:'Đều là động từ, đều mang nghĩa kéo dài không ngừng — nhưng nghĩa khác nhau khá xa, KHÔNG thay thế cho nhau được.',
   sameEx:{zh:'这场雨持续下了两个多小时。／对不起！打扰了，你们继续学习吧。',vn:'Cơn mưa này rơi liên tục hơn hai tiếng. / Xin lỗi, làm phiền rồi, các em học tiếp đi.'},
   items:[
     {word:'持续',points:[
       'Hành động diễn ra LIÊN TỤC, ở giữa không có gián đoạn.',
       'Làm được ĐỊNH NGỮ: 持续的高温.',
       'Mang được BỔ NGỮ THỜI LƯỢNG: 持续三天.'
     ],ex:[{zh:'这场雨持续下了两个多小时。',vn:'Cơn mưa này rơi liên tục hơn hai tiếng.'},
          {zh:'持续的高温让许多老人感到不适。',vn:'Nắng nóng kéo dài khiến nhiều người già thấy khó chịu.'},
          {zh:'小明发烧持续三天了，家里人都很着急。',vn:'Tiểu Minh sốt kéo dài ba ngày rồi, cả nhà đều rất sốt ruột.'}]},
     {word:'继续',points:[
       'Hành động ở giữa CÓ THỂ gián đoạn — dừng rồi làm TIẾP.',
       'Không làm định ngữ.',
       'Thường không mang bổ ngữ thời lượng; hay gặp 继续 + V, 继续下去.'
     ],ex:[{zh:'对不起！打扰了，你们继续学习吧。',vn:'Xin lỗi! Làm phiền rồi, các em học tiếp đi.'},
          {zh:'不管你是快乐还是难过，生活总要继续下去。',vn:'Dù vui hay buồn, cuộc sống vẫn phải tiếp diễn.'}]}
   ],
   quiz:[
     {sentence:'这场雨已经＿＿了三天，河水越来越高了。',options:['持续','继续'],answer:0,
      why:'Có bổ ngữ thời lượng (三天) và mưa không ngớt → 持续. 继续 thường không mang bổ ngữ thời lượng.'},
     {sentence:'休息十分钟，我们再＿＿上课。',options:['持续','继续'],answer:1,
      why:'Nghỉ giữa chừng rồi học TIẾP → 继续.'},
     {sentence:'＿＿的高温让很多人睡不好觉。',options:['持续','继续'],answer:0,
      why:'Làm định ngữ trước danh từ 高温 → chỉ 持续 làm được.'},
     {sentence:'虽然失败了，但他没有放弃，还在＿＿努力。',options:['持续','继续'],answer:1,
      why:'Thất bại là một lần gián đoạn, sau đó vẫn cố gắng tiếp → 继续.'}
   ],
   sgk:{
     chung:{t:'都是动词，都有延续不断的意思，但语义相差较大，不能替换。',vn:'Đều là động từ, đều mang nghĩa kéo dài không ngừng, nhưng nghĩa khác nhau khá xa, không thay thế cho nhau được.'},
     khac:[
       {a:{t:'表示动作连续不断，中间没有停顿。',vn:'Hành động liên tục không ngừng, ở giữa không có gián đoạn.',vd:'这场雨持续下了两个多小时。',vdVn:'Cơn mưa này rơi liên tục hơn hai tiếng.'},
        b:{t:'动作中间可以有停顿。',vn:'Hành động ở giữa có thể có gián đoạn.',vd:'对不起！打扰了，你们继续学习吧。',vdVn:'Xin lỗi! Làm phiền rồi, các em học tiếp đi.'}},
       {a:{t:'能做定语。',vn:'Làm được định ngữ.',vd:'持续的高温让许多老人感到不适。',vdVn:'Nắng nóng kéo dài khiến nhiều người già thấy khó chịu.'},
        b:{t:'不能做定语。',vn:'Không làm được định ngữ.'}},
       {a:{t:'能带时量补语。',vn:'Mang được bổ ngữ thời lượng.',vd:'小明发烧持续三天了，家里人都很着急。',vdVn:'Tiểu Minh sốt kéo dài ba ngày rồi, cả nhà đều rất sốt ruột.'},
        b:{t:'一般不能带时量补语。',vn:'Thường không mang bổ ngữ thời lượng.'}}
     ],
     lamThu:[
       {s:'真希望刘老师能＿＿给我们上课。',dap:[false,true],mau:true,
        giai:'Thầy Lưu dạy TIẾP cho lớp (việc dạy có lúc dừng rồi làm tiếp) → 继续.'},
       {s:'这次的宣传活动将＿＿到9月底。',dap:[true,false],
        giai:'Hoạt động kéo dài LIÊN TỤC đến cuối tháng 9 — chỉ một khoảng thời gian không gián đoạn → 持续.'},
       {s:'不管你是快乐还是难过，生活总要＿＿下去。',dap:[false,true],
        giai:'继续下去 = tiếp tục đi tiếp; cuộc sống có vui có buồn (có "gián đoạn") nhưng vẫn phải đi tiếp → 继续.'},
       {s:'朋友是在你失败时，鼓励你＿＿前进的人。',dap:[false,true],
        giai:'Thất bại là lúc dừng lại, bạn bè khích lệ mình đi TIẾP → 继续 + V (前进).'}
     ]
   }},

  {pair:'愿望 — 希望',
   same:'Đều nói về điều mong muốn; khi làm DANH TỪ, ở một số câu có thể thay nhau.',
   sameEx:{zh:'我的愿望／希望是当一名医生。',vn:'Mong ước của tôi là trở thành bác sĩ.'},
   items:[
     {word:'愿望',points:[
       'CHỈ là danh từ, không làm động từ.',
       'Hay đi với 实现 / 满足 / 符合 + 愿望.',
       'Thiên về điều mong ước cụ thể của bản thân.'
     ],ex:[{zh:'各种醒来方式中，当然是自然醒最符合我们的愿望。',vn:'Trong các cách tỉnh dậy, đương nhiên tự nhiên tỉnh giấc hợp với mong muốn của chúng ta nhất.'},
          {zh:'他从小的愿望终于实现了。',vn:'Ước mơ từ nhỏ của anh ấy cuối cùng đã thành hiện thực.'}]},
     {word:'希望',points:[
       'Vừa là ĐỘNG TỪ (希望 + mệnh đề) vừa là danh từ.',
       'Làm danh từ còn có nghĩa "niềm hy vọng": 孩子是父母的希望.',
       'Đi được với 很 / 非常: 我很希望…….'
     ],ex:[{zh:'作为孩子的父母，我们当然希望他能成为一个有用的人才。',vn:'Là cha mẹ, đương nhiên chúng tôi mong con trở thành người có ích.'},
          {zh:'孩子是父母的希望。',vn:'Con cái là niềm hy vọng của cha mẹ.'}]}
   ],
   quiz:[
     {sentence:'作为孩子的父母，我们当然＿＿他能成为一个有用的人才。',options:['愿望','希望'],answer:1,
      why:'Chỗ trống cần ĐỘNG TỪ mang mệnh đề làm tân ngữ (他能成为……) → 希望. 愿望 chỉ là danh từ.'},
     {sentence:'妈妈满足了我的生日＿＿，给我买了一只小狗。',options:['愿望','希望'],answer:0,
      why:'满足 + 愿望, 生日愿望 là kết hợp cố định → 愿望.'},
     {sentence:'我很＿＿明天不下雨。',options:['愿望','希望'],answer:1,
      why:'Có 很 đứng trước và mệnh đề theo sau → động từ 希望.'},
     {sentence:'经过十年的努力，他终于实现了自己的＿＿。',options:['愿望','希望'],answer:0,both:true,
      why:'实现愿望 là cụm quen thuộc nhất; 实现希望 cũng gặp nhưng kém tự nhiên hơn.'}
   ]},

  {pair:'危害 — 伤害',
   same:'Đều là động từ, đều mang nghĩa "làm tổn hại"; đều dùng được như danh từ.',
   sameEx:{zh:'抽烟会危害／伤害身体健康。',vn:'Hút thuốc sẽ gây hại cho sức khỏe.'},
   items:[
     {word:'危害',points:[
       'Mức độ NẶNG, phạm vi LỚN.',
       'Tân ngữ thường trừu tượng, rộng: 社会, 安全, 健康, 国家.',
       'Hay làm danh từ: ……的危害 (tác hại).'
     ],ex:[{zh:'他的行为已经严重危害到了社会安全。',vn:'Hành vi của hắn đã gây nguy hại nghiêm trọng đến an ninh xã hội.'},
          {zh:'很多人不知道闹钟的危害。',vn:'Nhiều người không biết tác hại của đồng hồ báo thức.'}]},
     {word:'伤害',points:[
       'Làm tổn thương CƠ THỂ hoặc TÌNH CẢM, lòng tự trọng.',
       'Tân ngữ có thể là người / con vật cụ thể: 伤害别人, 伤害小动物.',
       'Hay đi với 感情, 自尊心: 伤害感情.'
     ],ex:[{zh:'你这样说会伤害她的感情。',vn:'Cậu nói như vậy sẽ làm tổn thương tình cảm của cô ấy.'},
          {zh:'光闹钟可避免传统闹钟对人体健康的伤害。',vn:'Đồng hồ báo thức ánh sáng tránh được tổn hại cho sức khỏe mà đồng hồ báo thức truyền thống gây ra.'}]}
   ],
   quiz:[
     {sentence:'他的行为已经严重＿＿到了社会安全。',options:['危害','伤害'],answer:0,
      why:'Tân ngữ lớn, trừu tượng (社会安全), mức độ nghiêm trọng → 危害.'},
     {sentence:'你这样说会＿＿她的自尊心。',options:['危害','伤害'],answer:1,
      why:'Làm tổn thương TÌNH CẢM, lòng tự trọng của một người → 伤害.'},
     {sentence:'空气污染严重＿＿着人们的健康。',options:['危害','伤害'],answer:0,both:true,
      why:'Phạm vi rộng (sức khỏe của mọi người), mức độ nghiêm trọng → 危害 tự nhiên hơn; 伤害健康 cũng nói được.'},
     {sentence:'小朋友，不要＿＿小动物。',options:['危害','伤害'],answer:1,
      why:'Đối tượng cụ thể (con vật nhỏ), làm đau nó → 伤害.'}
   ]}
];

// ══════════════════════════════════════════
// BẮC CẦU HÁN–VIỆT — tận dụng vốn từ Hán–Việt sẵn có
// ══════════════════════════════════════════
var hvBridgeData = {
  easy:[
    {zh:'人类',hv:'nhân loại',vn:'loài người',note:'Trùng khít — "nhân loại" tiếng Việt dùng y nguyên.'},
    {zh:'机制',hv:'cơ chế',vn:'cơ chế',note:'Trùng khít.'},
    {zh:'生物',hv:'sinh vật',vn:'sinh vật',note:'Trùng khít — còn là tên môn "sinh" (生物课).'},
    {zh:'规律',hv:'quy luật',vn:'quy luật; đều đặn',note:'Trùng khít ở nghĩa danh từ; riêng nghĩa "đều đặn" (生活很规律) phải nhớ thêm.'},
    {zh:'过渡',hv:'quá độ',vn:'chuyển tiếp',note:'"Thời kỳ quá độ" — nghe là đoán ra.'},
    {zh:'现代',hv:'hiện đại',vn:'hiện đại',note:'Trùng khít.'},
    {zh:'享受',hv:'hưởng thụ',vn:'tận hưởng',note:'Trùng khít — nhưng tiếng Trung dùng rộng hơn, không mang sắc thái chê.'},
    {zh:'状态',hv:'trạng thái',vn:'trạng thái',note:'Trùng khít.'},
    {zh:'呼吸',hv:'hô hấp',vn:'hít thở',note:'"Hô hấp" — hít thở.'},
    {zh:'心理',hv:'tâm lý',vn:'tâm lý',note:'Trùng khít.'},
    {zh:'专家',hv:'chuyên gia',vn:'chuyên gia',note:'Trùng khít.'},
    {zh:'模仿',hv:'mô phỏng',vn:'bắt chước',note:'"Mô phỏng" — làm theo mẫu có sẵn.'},
    {zh:'传统',hv:'truyền thống',vn:'truyền thống',note:'Trùng khít.'},
    {zh:'血压',hv:'huyết áp',vn:'huyết áp',note:'Trùng khít.'}
  ],
  idiom:[],
  trap:[
    {zh:'必要',hv:'tất yếu',vn:'cần thiết',
     warn:'BẪY: "tất yếu" tiếng Việt là CHẮC CHẮN xảy ra. 必要 là CẦN THIẾT (必要条件 = điều kiện cần). "Tất yếu" tiếng Trung lại là 必然.'},
    {zh:'计算',hv:'kế toán',vn:'tính toán',
     warn:'BẪY: không phải nghề kế toán (会计 kuàijì). 计算 là TÍNH TOÁN: 计算出来 = tính ra.'},
    {zh:'情绪',hv:'tình tự',vn:'tâm trạng, cảm xúc',
     warn:'BẪY: "tình tự" tiếng Việt là chuyện trò yêu đương. 情绪 là CẢM XÚC, tâm trạng: 情绪低落 = tâm trạng sa sút.'},
    {zh:'精神',hv:'tinh thần',vn:'tinh thần; tươi tỉnh',
     warn:'"Tinh thần" tiếng Việt chỉ là danh từ. 精神 tiếng Trung còn là TÍNH TỪ: 他很精神 = trông anh ấy rất tươi tỉnh, khỏe khoắn.'},
    {zh:'相当',hv:'tương đương',vn:'tương đương; khá',
     warn:'"Tương đương" chỉ là một nghĩa. 相当 còn là phó từ "KHÁ": 相当满意 = khá hài lòng, không phải "tương đương hài lòng".'},
    {zh:'用途',hv:'dụng đồ',vn:'công dụng',
     warn:'"Dụng đồ" nghe như "đồ dùng", nhưng 用途 là CÔNG DỤNG — chỗ dùng của một vật.'},
    {zh:'避免',hv:'tị miễn',vn:'tránh',
     warn:'Âm Hán–Việt không gợi nghĩa. Nhớ: 避 = tránh (避雨 = trú mưa), 免 = miễn → TRÁNH cho điều xấu không xảy ra.'}
  ]
};

// ══════════════════════════════════════════
// GHÉP TỪ — lấy từ bảng 词语搭配 và bài tập 画线连接 của giáo trình
// ══════════════════════════════════════════
var matchData = [
  {left:'享受',right:'自由'},
  {left:'导致',right:'失眠'},
  {left:'危害',right:'社会'},
  {left:'避免',right:'麻烦'},
  {left:'满足',right:'愿望'},
  {left:'稳定',right:'情绪'},
  {left:'集中',right:'精神'},
  {left:'重视',right:'传统'},
  {left:'难忘的',right:'记忆'},
  {left:'准确地',right:'模仿'},
  {left:'计算',right:'出来'},
  {left:'清醒',right:'过来'},
  {left:'光线',right:'昏暗'},
  {left:'拉开',right:'窗帘'},
  {left:'呼吸',right:'新鲜空气'},
  {left:'量',right:'血压'},
  {left:'采用',right:'新技术'},
  {left:'电子',right:'产品'},
  {left:'打乱',right:'生物钟'},
  {left:'做',right:'实验'}
];

// ══════════════════════════════════════════
// ĐIỀN TỪ
// ══════════════════════════════════════════
var fillData = [
  {pre:'如果早上有课，为了不迟到，我晚上睡觉前都会定上',blank:'闹钟',post:'。',hint:'(đồng hồ báo thức)',ans:'闹钟'},
  {pre:'保护地球就是保护',blank:'人类',post:'自己。',hint:'(loài người)',ans:'人类'},
  {pre:'出汗是身体的一种自我保护',blank:'机制',post:'。',hint:'(cơ chế)',ans:'机制'},
  {pre:'地球上的',blank:'生物',post:'都离不开水和阳光。',hint:'(sinh vật)',ans:'生物'},
  {pre:'生命在于运动，有',blank:'规律',post:'的运动对于身体健康大有好处。',hint:'(đều đặn, có quy luật)',ans:'规律'},
  {pre:'这里',blank:'光线',post:'太暗了，看书对眼睛不好。',hint:'(ánh sáng)',ans:'光线'},
  {pre:'在婚姻问题上，听听父母的意见还是很有',blank:'必要',post:'的。',hint:'(cần thiết)',ans:'必要'},
  {pre:'擦擦办公桌，整理一下文件，可以让你从休息状态自然',blank:'过渡',post:'到工作状态。',hint:'(chuyển tiếp)',ans:'过渡'},
  {pre:'我睡得很',blank:'浅',post:'，连蚊子的声音都能把我吵醒。',hint:'(nông, không sâu)',ans:'浅'},
  {pre:'紧张的',blank:'现代',post:'生活，使很多上班的人无法享受轻松舒适的睡眠。',hint:'(hiện đại)',ans:'现代'},
  {pre:'为了',blank:'享受',post:'轻松的生活，夫妻俩决定把家搬到这个安静的小镇。',hint:'(tận hưởng)',ans:'享受'},
  {pre:'手机的',blank:'用途',post:'越来越广，不只是打电话。',hint:'(công dụng)',ans:'用途'},
  {pre:'我最喜欢上生物课，因为可以做',blank:'实验',post:'。',hint:'(thí nghiệm)',ans:'实验'},
  {pre:'上课',blank:'铃',post:'一响，同学们就跑回了教室。',hint:'(chuông)',ans:'铃'},
  {pre:'正如你',blank:'所',post:'估计的那样，李岩确实改变了主意。',hint:'(trợ từ đứng trước động từ)',ans:'所'},
  {pre:'今天比赛，他的',blank:'状态',post:'特别好，跑了第一名。',hint:'(trạng thái, phong độ)',ans:'状态'},
  {pre:'考试的时候一定要保持头脑',blank:'清醒',post:'。',hint:'(tỉnh táo)',ans:'清醒'},
  {pre:'周末我们去郊区',blank:'呼吸',post:'新鲜空气吧。',hint:'(hít thở)',ans:'呼吸'},
  {pre:'考试前很多学生都有很大的',blank:'心理',post:'压力。',hint:'(tâm lý)',ans:'心理'},
  {pre:'他很会控制自己的',blank:'情绪',post:'，从来不乱发脾气。',hint:'(cảm xúc, tâm trạng)',ans:'情绪'},
  {pre:'比赛输了以后，队员们的情绪都很',blank:'低落',post:'。',hint:'(sa sút, ủ rũ)',ans:'低落'},
  {pre:'那个夏天是我童年最难忘的',blank:'记忆',post:'。',hint:'(ký ức)',ans:'记忆'},
  {pre:'他用了半个小时才把结果',blank:'计算',post:'出来。',hint:'(tính toán)',ans:'计算'},
  {pre:'这些能力最多为正常状态的65%，与醉酒者',blank:'相当',post:'。',hint:'(tương đương)',ans:'相当'},
  {pre:'这场雨',blank:'持续',post:'下了两个多小时。',hint:'(kéo dài liên tục)',ans:'持续'},
  {pre:'每晚坚持学习半小时，坚持',blank:'数',post:'年之后，成功就会向你招手。',hint:'(vài, mấy — văn viết)',ans:'数'},
  {pre:'长期熬夜会',blank:'导致',post:'失眠。',hint:'(dẫn đến)',ans:'导致'},
  {pre:'考试前我紧张得',blank:'失眠',post:'了，一晚上都没睡着。',hint:'(mất ngủ)',ans:'失眠'},
  {pre:'医学',blank:'专家',post:'建议，中学生每天应该睡够八个小时。',hint:'(chuyên gia)',ans:'专家'},
  {pre:'天黑了，把',blank:'窗帘',post:'拉上吧。',hint:'(rèm cửa sổ)',ans:'窗帘'},
  {pre:'台灯的光线很',blank:'柔和',post:'，看书眼睛不累。',hint:'(êm dịu)',ans:'柔和'},
  {pre:'小孩子喜欢',blank:'模仿',post:'大人说话。',hint:'(bắt chước)',ans:'模仿'},
  {pre:'为了',blank:'避免',post:'迟到，我提前半个小时出门。',hint:'(tránh)',ans:'避免'},
  {pre:'经常熬夜会打乱人的',blank:'生物钟',post:'。',hint:'(đồng hồ sinh học)',ans:'生物钟'}
];

// ══════════════════════════════════════════
// SẮP XẾP CÂU — mỗi điểm ngữ pháp ít nhất 2 câu
// ══════════════════════════════════════════
var sortData = [
  {words:['早晨','醒来','，','我','发现','窗外','正下着','大雪','。'],ans:'早晨醒来，我发现窗外正下着大雪。',audio:'早晨醒来，我发现窗外正下着大雪。'},
  {words:['天上的星星','那么多','，','谁','数得','过来','呀','？'],ans:'天上的星星那么多，谁数得过来呀？',audio:'天上的星星那么多，谁数得过来呀？'},
  {words:['过了半天','，','他','才','清醒','过来','。'],ans:'过了半天，他才清醒过来。',audio:'过了半天，他才清醒过来。'},
  {words:['这','就是','我','所','知道的','情况','。'],ans:'这就是我所知道的情况。',audio:'这就是我所知道的情况。'},
  {words:['调查显示','，','女性的','职场幸福感','有所','提高','。'],ans:'调查显示，女性的职场幸福感有所提高。',audio:'调查显示，女性的职场幸福感有所提高。'},
  {words:['我和李阳','是','无所不谈的','好朋友','。'],ans:'我和李阳是无所不谈的好朋友。',audio:'我和李阳是无所不谈的好朋友。'},
  {words:['这些能力','与','醉酒者','相当','。'],ans:'这些能力与醉酒者相当。',audio:'这些能力与醉酒者相当。'},
  {words:['我','对','这里的服务','相当','满意','。'],ans:'我对这里的服务相当满意。',audio:'我对这里的服务相当满意。'},
  {words:['我觉得','北京最美的公园','要','数','颐和园了','。'],ans:'我觉得北京最美的公园要数颐和园了。',audio:'我觉得北京最美的公园要数颐和园了。'},
  {words:['他','努力了','数年','，','终于','拿到了','博士学位','。'],ans:'他努力了数年，终于拿到了博士学位。',audio:'他努力了数年，终于拿到了博士学位。'},
  {words:['我','大概','数了一下','，','车上','有','32个学生','。'],ans:'我大概数了一下，车上有32个学生。',audio:'我大概数了一下，车上有32个学生。'},
  {words:['自然醒','是','最符合','人体生物钟','规律的','。'],ans:'自然醒是最符合人体生物钟规律的。',audio:'自然醒是最符合人体生物钟规律的。'},
  {words:['人','逐渐','从熟睡','过渡到','浅睡','。'],ans:'人逐渐从熟睡过渡到浅睡。',audio:'人逐渐从熟睡过渡到浅睡。'},
  {words:['这场雨','持续','下了','两个多小时','。'],ans:'这场雨持续下了两个多小时。',audio:'这场雨持续下了两个多小时。'},
  {words:['光闹钟','可以','避免','传统闹钟','对人体的','伤害','。'],ans:'光闹钟可以避免传统闹钟对人体的伤害。',audio:'光闹钟可以避免传统闹钟对人体的伤害。'}
];

// ══════════════════════════════════════════
// CHỌN TỪ THÍCH HỢP
// ══════════════════════════════════════════
var errorFixMode = 'wordchoice';
var errorFixData = [
  {wrong:'他的行为已经严重____到了社会安全。',opts:['危害','保护','享受','避免'],ans:0,
   exp:'Hành vi xấu gây hại nghiêm trọng cho an ninh xã hội → 危害. 保护 (bảo vệ), 享受 (tận hưởng) ngược nghĩa; 避免 (tránh) không đi với 到了 + đối tượng bị hại.'},
  {wrong:'听到老师叫自己的名字，他____地站了起来。',opts:['慌张','柔和','传统','必要'],ans:0,
   exp:'Tả thái độ luống cuống khi bất ngờ bị gọi → 慌张地 + V. 柔和 dùng cho âm thanh, ánh sáng; 传统, 必要 không tả được dáng vẻ của người.'},
  {wrong:'实验失败了没关系，打起____从头再来。',opts:['精神','情绪','心理','状态'],ans:0,
   exp:'打起精神 = lấy lại tinh thần, là cụm cố định. Không nói 打起情绪 / 打起心理 / 打起状态.'},
  {wrong:'如果你必须定个闹钟，应____柔和的声音或音乐。',opts:['采用','采取','享受','模仿'],ans:0,
   exp:'Chọn dùng một thứ cụ thể (âm thanh, phương pháp, kỹ thuật) → 采用. 采取 đi với 措施 / 行动 / 态度; 享受 là tận hưởng; 模仿 là bắt chước.'},
  {wrong:'妈妈满足了我的生日____，给我买了一只小狗。',opts:['愿望','愿意','失望','盼望'],ans:0,
   exp:'满足 + 愿望, 生日愿望 là kết hợp cố định; 愿望 là danh từ. 愿意, 盼望 là động từ; 失望 là tính từ "thất vọng".'},
  {wrong:'近年来，____上出现了一种新的电子产品，名为“光闹钟”。',opts:['市场','产品','用途','机制'],ans:0,
   exp:'Nơi hàng hóa xuất hiện, được mua bán → 市场上. 产品 là chính món hàng; 用途 (công dụng), 机制 (cơ chế) không đi với 上 chỉ nơi chốn.'},
  {wrong:'这家公司的____质量很好，价格也不贵。',opts:['产品','市场','生物','人类'],ans:0,
   exp:'Thứ có chất lượng và giá cả do công ty làm ra → 产品. 市场 là thị trường; 生物, 人类 không phải hàng hóa.'},
  {wrong:'春节是中国最重要的____节日。',opts:['传统','现代','必要','柔和'],ans:0,
   exp:'传统节日 = ngày lễ truyền thống, kết hợp cố định. 现代节日 không dùng cho Tết; 必要, 柔和 không đi với 节日.'},
  {wrong:'多运动可以促进____，让身体更健康。',opts:['新陈代谢','肾上腺素','生物钟','血压'],ans:0,
   exp:'促进新陈代谢 = thúc đẩy trao đổi chất. Không nói 促进血压 (làm tăng huyết áp không phải điều tốt), 促进生物钟 hay 促进肾上腺素.'},
  {wrong:'人在害怕的时候，身体会分泌大量的____。',opts:['肾上腺素','新陈代谢','生物钟','光线'],ans:0,
   exp:'Thứ cơ thể TIẾT RA (分泌) khi sợ hãi là hoóc-môn → 肾上腺素. Trao đổi chất, đồng hồ sinh học, ánh sáng không "tiết ra" được.'},
  {wrong:'爷爷每天早上都要量____。',opts:['血压','呼吸','心理','情绪'],ans:0,
   exp:'量血压 = đo huyết áp. 量 (đo) không đi với 心理, 情绪; hơi thở thì nói 数呼吸 hoặc 测呼吸, không phải 量呼吸.'},
  {wrong:'我被一阵吵闹声突然惊醒，过了半天，脑子才清醒____。',opts:['过来','过去','起来','下来'],ans:0,
   exp:'过来 sau động từ chỉ TRỞ LẠI trạng thái bình thường (tỉnh táo lại). 过去 thì ngược lại — MẤT trạng thái bình thường (昏过去 = ngất đi).'},
  {wrong:'最近手头的工作太多了，我都忙不____了。',opts:['过来','起来','下去','出来'],ans:0,
   exp:'V + 不 + 过来 = không đủ sức làm xuể (vì quá nhiều). 忙不过来 là cách nói cố định.'},
  {wrong:'山水画____表现的是人与自然的关系。',opts:['所','的','被','把'],ans:0,
   exp:'所 đứng trước động từ trong cụm "(A) 所 V 的", chỉ đối tượng của hành động: 山水画所表现的 = cái mà tranh sơn thủy thể hiện.'},
  {wrong:'菜的味道好极了，服务也挺周到，我____满意。',opts:['相当','相同','相比','相似'],ans:0,
   exp:'相当 làm phó từ chỉ mức độ khá cao: 相当满意 = khá hài lòng. 相同, 相似 là tính từ "giống nhau"; 相比 là "so với", không đứng trước 满意.'},
  {wrong:'要说我们班跑得最快的，那就____李阳了。',opts:['数','让','比','把'],ans:0,
   exp:'"(最)……的 (要 / 就) 数……" = kể ra thì … là nhất. 数 ở đây đọc shǔ.'},
  {wrong:'休息十分钟，我们再____上课。',opts:['继续','持续','连续','陆续'],ans:0,
   exp:'Dừng giữa chừng rồi làm TIẾP → 继续. 持续 chỉ liên tục không gián đoạn; 连续 là "liền nhau" (连续三天); 陆续 là "lần lượt".'},
  {wrong:'小明发烧已经____三天了，家里人都很着急。',opts:['持续','继续','坚持','保持'],ans:0,
   exp:'Sốt kéo dài liên tục, có bổ ngữ thời lượng (三天) → 持续. 继续 thường không mang bổ ngữ thời lượng; 坚持, 保持 không hợp với 发烧.'}
];

// ══════════════════════════════════════════
// DỊCH
// ══════════════════════════════════════════
var translateData = [
  {vi:'Vì dạo này bài tập nhiều đến mức làm không xuể nên tinh thần em khá tệ.',zh:'因为最近作业多得做不过来，所以我的精神状态相当差。',py:'Yīnwèi zuìjìn zuòyè duō de zuò bu guòlái, suǒyǐ wǒ de jīngshén zhuàngtài xiāngdāng chà.',goiY:['因为……所以……','做不过来','相当','精神状态'],giai:'V + 不过来 = làm không xuể (việc quá nhiều); 相当 + tính từ = khá, tương đối — ở đây không dịch là “tương đương”.'},
  {vi:'Trong lớp em, người sinh hoạt điều độ nhất phải kể đến Tiểu Lâm, thảo nào lúc nào bạn ấy cũng tươi tỉnh như thế.',zh:'我们班作息最有规律的要数小林，难怪她的精神总是那么好。',py:'Wǒmen bān zuòxī zuì yǒu guīlǜ de yào shǔ Xiǎo Lín, nánguài tā de jīngshen zǒngshì nàme hǎo.',goiY:['要数','规律','难怪'],giai:'最……的 + 要数 + người = … nhất phải kể đến…; 数 ở đây đọc shǔ (đếm, kể đến); 难怪 = thảo nào.'},
  {vi:'Thức khuya chơi điện thoại lâu ngày không những gây mất ngủ mà còn khiến ban ngày người uể oải, thiếu sức sống.',zh:'长期熬夜玩手机不但会导致失眠，而且会让人白天没有精神。',py:'Chángqī áoyè wán shǒujī búdàn huì dǎozhì shīmián, érqiě huì ràng rén báitiān méiyǒu jīngshen.',goiY:['不但……而且……','导致','失眠'],giai:'导致 + kết quả xấu = dẫn đến, gây ra (thường là hậu quả tiêu cực); 没有精神 = uể oải, không tỉnh táo.'},
  {vi:'Lần nào vừa bước vào phòng thi em cũng cuống lên, thở gấp, thậm chí đến những từ mới học thuộc cũng không nhớ ra nổi.',zh:'每次一进考场我就特别慌张，呼吸加快，甚至连刚背过的单词都想不起来了。',py:'Měi cì yí jìn kǎochǎng wǒ jiù tèbié huāngzhāng, hūxī jiākuài, shènzhì lián gāng bèi guo de dāncí dōu xiǎng bu qǐlái le.',goiY:['一……就……','慌张','呼吸','甚至连……都……'],giai:'一……就…… = hễ/vừa… là…; 甚至连……都…… nhấn mạnh mức độ cao nhất; 想不起来 = không nhớ ra được.'},
  {vi:'Cái “ngủ sớm” mà em nói không phải là chín giờ đã lên giường, mà là để giờ giấc sinh hoạt của mình có quy luật.',zh:'我所说的“早睡”并不是指九点就上床，而是要让自己的作息有规律。',py:'Wǒ suǒ shuō de “zǎo shuì” bìng bú shì zhǐ jiǔ diǎn jiù shàng chuáng, ér shì yào ràng zìjǐ de zuòxī yǒu guīlǜ.',goiY:['所说的','不是……而是……','规律'],giai:'所 + V + 的 = cái mà… (所说的 = điều mình nói), sắc thái văn viết; 并不是 A 而是 B = hoàn toàn không phải A mà là B.'},
  {vi:'Trường em là một trường nội trú, chuông báo thức mỗi sáng chẳng khác gì một chiếc đồng hồ báo thức khổng lồ, muốn ngủ thêm năm phút cũng không được.',zh:'我们学校是一所寄宿学校，每天早上的起床铃相当于一个巨大的闹钟，哪怕想多睡五分钟也不可能。',py:'Wǒmen xuéxiào shì yì suǒ jìsù xuéxiào, měi tiān zǎoshang de qǐchuáng líng xiāngdāngyú yí ge jùdà de nàozhōng, nǎpà xiǎng duō shuì wǔ fēnzhōng yě bù kěnéng.',goiY:['一所','相当于','哪怕……也……','闹钟'],giai:'所 còn là lượng từ cho trường học, bệnh viện (一所学校); A 相当于 B = A tương đương, chẳng khác gì B; 哪怕……也…… = dù chỉ… cũng không….'},
  {vi:'Chuyên gia khuyên rằng thay vì dùng đồng hồ báo thức kêu thật to để đánh thức mình, chi bằng trước khi ngủ kéo hé rèm cửa, để ánh sáng ấm áp dịu nhẹ gọi bạn dậy.',zh:'专家建议，与其用声音很大的闹钟把自己吵醒，不如睡前把窗帘拉开一点儿，让温暖柔和的光线把你叫醒。',py:'Zhuānjiā jiànyì, yǔqí yòng shēngyīn hěn dà de nàozhōng bǎ zìjǐ chǎo xǐng, bùrú shuì qián bǎ chuānglián lā kāi yìdiǎnr, ràng wēnnuǎn róuhé de guāngxiàn bǎ nǐ jiào xǐng.',goiY:['与其……不如……','闹钟','窗帘','光线'],giai:'与其 A，不如 B = thay vì A, chi bằng B; 吵醒 = làm ồn khiến tỉnh dậy, 叫醒 = gọi dậy — bổ ngữ kết quả 醒 đứng ngay sau động từ.'},
  {vi:'Khi thi không tốt, tâm trạng sa sút là chuyện bình thường, nhưng chỉ cần nó không kéo dài quá lâu thì không cần phải cả ngày rầu rĩ.',zh:'考试没考好的时候，情绪低落是正常的，但只要持续的时间不太长，就没有必要整天发愁。',py:'Kǎoshì méi kǎo hǎo de shíhou, qíngxù dīluò shì zhèngcháng de, dàn zhǐyào chíxù de shíjiān bú tài cháng, jiù méiyǒu bìyào zhěngtiān fāchóu.',goiY:['情绪低落','只要……就……','持续','没有必要'],giai:'只要……就…… nêu điều kiện đủ; 没有必要 + V = không cần thiết phải…; 持续 = kéo dài liên tục (dùng cho trạng thái, thời gian).'},
  {vi:'Nửa đêm qua em mơ thấy mình đi thi muộn, giật mình tỉnh dậy, hít thở sâu mấy lần mới tỉnh táo lại, hóa ra chỉ là một giấc mơ.',zh:'昨天半夜我梦见自己考试迟到了，吓得一下子醒了过来，深呼吸了好几次才清醒过来，原来只是一场梦。',py:'Zuótiān bànyè wǒ mèngjiàn zìjǐ kǎoshì chídào le, xià de yíxiàzi xǐng le guòlái, shēn hūxī le hǎo jǐ cì cái qīngxǐng guòlái, yuánlái zhǐ shì yì chǎng mèng.',goiY:['醒了过来','清醒过来','呼吸','原来'],giai:'醒过来 = tỉnh dậy, 清醒过来 = tỉnh táo trở lại (V + 过来: trở về trạng thái bình thường); 原来 = hóa ra (phát hiện sự thật).'},
  {vi:'Áp lực mà học sinh lớp 12 phải gánh chịu khá lớn, ngày nào cũng dựa vào đồng hồ báo thức để dậy; một khi tình trạng này kéo dài vài tháng thì có thể gây mất ngủ, giảm trí nhớ và nhiều vấn đề khác.',zh:'高三学生所承受的压力相当大，每天靠闹钟起床，一旦这种状态持续数月，就可能导致失眠、记忆力下降等问题。',py:'Gāosān xuésheng suǒ chéngshòu de yālì xiāngdāng dà, měi tiān kào nàozhōng qǐchuáng, yídàn zhè zhǒng zhuàngtài chíxù shù yuè, jiù kěnéng dǎozhì shīmián, jìyìlì xiàjiàng děng wèntí.',goiY:['所承受的','一旦……就……','持续数月','导致'],giai:'所 + V + 的 bổ nghĩa cho danh từ (所承受的压力 = áp lực phải gánh chịu); 数月 = vài tháng (数 đọc shù); 一旦……就…… = một khi… thì….'}
];

// Chiều Trung → Việt — nội dung khác với chiều trên
var translateDataRev = [
  {vi:'Giấc ngủ của con người có cơ chế riêng của nó, vì vậy tốt nhất đừng tùy tiện dùng đồng hồ báo thức làm rối loạn nó.',zh:'人类的睡眠有自己的机制，所以最好不要随便用闹钟打乱它。',py:'Rénlèi de shuìmián yǒu zìjǐ de jīzhì, suǒyǐ zuìhǎo bú yào suíbiàn yòng nàozhōng dǎluàn tā.',goiY:['所以 = vì vậy','机制 = cơ chế','打乱 = làm rối loạn'],giai:'所以 nêu kết quả/lời khuyên rút ra; 人类 = loài người, nói về giấc ngủ thì dịch “con người” cho tự nhiên.'},
  {vi:'Nhiều người đi làm không được tận hưởng việc tự nhiên tỉnh giấc, đành ngày nào cũng dựa vào đồng hồ báo thức để dậy.',zh:'很多上班族无法享受自然醒，只好每天依靠闹钟起床。',py:'Hěn duō shàngbānzú wúfǎ xiǎngshòu zìrán xǐng, zhǐhǎo měi tiān yīkào nàozhōng qǐchuáng.',goiY:['只好 = đành phải','享受 = tận hưởng','无法 = không thể'],giai:'只好 chỉ lựa chọn bất đắc dĩ; 上班族 = giới đi làm, dịch tự nhiên “người đi làm”.'},
  {vi:'Giấc ngủ gồm ngủ sâu và ngủ nông, hơn nữa hai giai đoạn này luôn luân phiên nhau theo một quy luật nhất định.',zh:'睡眠是由深睡和浅睡组成的，而且它们总是按一定的规律交替出现。',py:'Shuìmián shì yóu shēn shuì hé qiǎn shuì zǔchéng de, érqiě tāmen zǒngshì àn yídìng de guīlǜ jiāotì chūxiàn.',goiY:['由……组成 = gồm, do… tạo thành','而且 = hơn nữa','浅 = nông'],giai:'由 A 和 B 组成 = gồm A và B; 浅睡 = ngủ nông (không sâu), 浅 vốn nghĩa là cạn/nông.'},
  {vi:'Ánh sáng là điều kiện cần thiết để tỉnh giấc tự nhiên; chỉ khi ánh sáng mạnh dần lên, con người mới từ từ chuyển từ trạng thái ngủ sang trạng thái tỉnh táo.',zh:'光线是自然醒的必要条件，只有光线逐渐变强，人才会慢慢从睡眠状态过渡到清醒状态。',py:'Guāngxiàn shì zìrán xǐng de bìyào tiáojiàn, zhǐyǒu guāngxiàn zhújiàn biàn qiáng, rén cái huì mànmàn cóng shuìmián zhuàngtài guòdù dào qīngxǐng zhuàngtài.',goiY:['只有……才…… = chỉ khi… mới…','必要条件 = điều kiện cần thiết','过渡到 = chuyển sang'],giai:'只有 + điều kiện duy nhất, 才 + kết quả; 从 A 过渡到 B = chuyển dần từ A sang B (quá trình từ từ, không đột ngột).'},
  {vi:'Các nhà khoa học từng làm thí nghiệm thế này: nếu người đang ngủ sâu mà đột ngột bị chuông báo thức đánh thức thì nhịp tim và huyết áp sẽ tăng lên ngay.',zh:'科学家做过这样的实验：如果人在深睡时突然被闹铃叫醒，心跳和血压就会立刻升高。',py:'Kēxuéjiā zuò guo zhèyàng de shíyàn: rúguǒ rén zài shēn shuì shí tūrán bèi nàolíng jiào xǐng, xīntiào hé xuèyā jiù huì lìkè shēnggāo.',goiY:['如果……就…… = nếu… thì…','实验 = thí nghiệm','血压 = huyết áp'],giai:'如果……就…… nêu giả thiết – kết quả; 被闹铃叫醒 là câu bị động → “bị chuông báo thức đánh thức”.'},
  {vi:'Sau khi bị đồng hồ báo thức làm thức giấc, cơ thể tiết ra nhiều adrenaline, vì thế con người thấy bồn chồn, luống cuống, tâm trạng cũng có vẻ khá sa sút.',zh:'被闹钟吵醒后，人体会分泌大量肾上腺素，因此人会感到慌张，情绪也显得相当低落。',py:'Bèi nàozhōng chǎo xǐng hòu, réntǐ huì fēnmì dàliàng shènshàngxiànsù, yīncǐ rén huì gǎndào huāngzhāng, qíngxù yě xiǎnde xiāngdāng dīluò.',goiY:['因此 = vì thế','分泌 = tiết ra','相当 = khá'],giai:'因此 nối nguyên nhân sinh lý với kết quả tâm lý; 相当 + tính từ = khá, tương đối (相当低落 = khá sa sút).'},
  {vi:'Không chỉ vậy, trí nhớ và khả năng tính toán của con người cũng bị ảnh hưởng, tình trạng này có thể kéo dài suốt cả buổi sáng.',zh:'不仅如此，人的记忆和计算能力也会受到影响，这种状态可能会持续整个上午。',py:'Bùjǐn rúcǐ, rén de jìyì hé jìsuàn nénglì yě huì shòudào yǐngxiǎng, zhè zhǒng zhuàngtài kěnéng huì chíxù zhěnggè shàngwǔ.',goiY:['不仅如此 = không chỉ vậy','持续 = kéo dài','记忆 = trí nhớ'],giai:'不仅如此 nối tiếp ý trước theo kiểu tăng tiến (“không chỉ thế”); 受到影响 = bị ảnh hưởng.'},
  {vi:'Chuyên gia cho rằng tác hại của đồng hồ báo thức với cơ thể khá lớn; nếu tình trạng này kéo dài vài tháng, thậm chí có thể dẫn đến cao huyết áp.',zh:'专家认为，闹钟对人体的危害相当大，如果这种情况持续数月，甚至会导致高血压。',py:'Zhuānjiā rènwéi, nàozhōng duì réntǐ de wēihài xiāngdāng dà, rúguǒ zhè zhǒng qíngkuàng chíxù shù yuè, shènzhì huì dǎozhì gāo xuèyā.',goiY:['如果……甚至…… = nếu… thậm chí…','数月 = vài tháng','危害 = tác hại'],giai:'数 đọc shù khi đứng trước lượng từ/thời gian = vài (数月 = vài tháng, văn viết); 甚至 đẩy hậu quả lên mức nghiêm trọng hơn.'},
  {vi:'Vì vậy chuyên gia khuyên, nếu buộc phải dùng đồng hồ báo thức thì nên chọn loại có âm thanh êm dịu, để tránh bị giật mình tỉnh giấc.',zh:'所以专家建议，如果非用闹钟不可，就应该采用声音柔和的闹钟，以免被突然吓醒。',py:'Suǒyǐ zhuānjiā jiànyì, rúguǒ fēi yòng nàozhōng bùkě, jiù yīnggāi cǎiyòng shēngyīn róuhé de nàozhōng, yǐmiǎn bèi tūrán xià xǐng.',goiY:['非……不可 = buộc phải','采用 = chọn dùng','以免 = để tránh'],giai:'非……不可 = không… không được, buộc phải; 以免 + điều không mong muốn = để khỏi, để tránh — đặt ở vế cuối.'},
  {vi:'Trên thị trường có một sản phẩm mới gọi là đồng hồ báo thức ánh sáng; nó mô phỏng sự thay đổi của ánh sáng tự nhiên buổi sớm, giúp người ta tỉnh dậy từ từ, nhờ đó tránh được tác hại do báo thức gây ra.',zh:'市场上有一种新产品叫光闹钟，它能模仿早晨自然光线的变化，让人慢慢醒来，从而避免闹钟带来的危害。',py:'Shìchǎng shang yǒu yì zhǒng xīn chǎnpǐn jiào guāng nàozhōng, tā néng mófǎng zǎochen zìrán guāngxiàn de biànhuà, ràng rén mànmàn xǐnglái, cóng\'ér bìmiǎn nàozhōng dàilái de wēihài.',goiY:['模仿 = mô phỏng','醒来 = tỉnh dậy','从而 = nhờ đó','避免 = tránh'],giai:'从而 nêu kết quả đạt được nhờ cách làm ở vế trước (văn viết) → “nhờ đó”; 醒来 = tỉnh dậy (来 chỉ trở về trạng thái tỉnh).'}
];

// ══════════════════════════════════════════
// VIẾT ĐOẠN 80 CHỮ — dạng đề thi HSK 5 phần viết
// (chủ đề lấy từ 命题写作 của sách: “你真的需要闹钟吗？”)
// ══════════════════════════════════════════
var writingData = {
  words:['闹钟','享受','导致','避免','精神'],
  prompt:'Dùng 5 từ cho sẵn, viết một đoạn khoảng 80 chữ trả lời câu hỏi “你真的需要闹钟吗？” — kể thói quen dậy buổi sáng của em và nêu quan điểm về đồng hồ báo thức.',
  outline:[
    'Câu mở: em có dùng đồng hồ báo thức không, từ khi nào (dùng 闹钟).',
    'Thân 1: cảm giác khi bị báo thức đánh thức đột ngột, tác hại của nó (dùng 精神, 导致).',
    'Thân 2: em đã thay đổi thế nào để tránh tác hại (dùng 避免).',
    'Kết: cảm nhận khi được tự nhiên tỉnh giấc (dùng 享受).'
  ],
  model:{
    zh:'我每天早上都被闹钟叫醒，醒来后总是心慌，一上午都没有精神。后来我才知道，经常被突然叫醒会导致情绪低落，甚至失眠。为了避免这些危害，我现在晚上十点半就睡觉，还把铃声换成了柔和的音乐。现在我常常自然地醒来，终于享受到了睡眠的快乐。',
    py:'Wǒ měi tiān zǎoshang dōu bèi nàozhōng jiàoxǐng, xǐnglái hòu zǒngshì xīnhuāng, yí shàngwǔ dōu méiyǒu jīngshen. Hòulái wǒ cái zhīdào, jīngcháng bèi tūrán jiàoxǐng huì dǎozhì qíngxù dīluò, shènzhì shīmián. Wèile bìmiǎn zhèxiē wēihài, wǒ xiànzài wǎnshang shí diǎn bàn jiù shuìjiào, hái bǎ língshēng huànchéngle róuhé de yīnyuè. Xiànzài wǒ chángcháng zìrán de xǐnglái, zhōngyú xiǎngshòu dàole shuìmián de kuàilè.',
    vn:'Sáng nào tôi cũng bị đồng hồ báo thức gọi dậy, tỉnh dậy rồi lúc nào cũng thấy hồi hộp, cả buổi sáng chẳng có chút tinh thần nào. Sau này tôi mới biết, thường xuyên bị gọi dậy đột ngột sẽ khiến tâm trạng sa sút, thậm chí mất ngủ. Để tránh những tác hại đó, giờ tôi mười giờ rưỡi tối là đi ngủ, lại còn đổi chuông báo thành một bản nhạc êm dịu. Bây giờ tôi thường tự nhiên tỉnh dậy, cuối cùng đã được tận hưởng niềm vui của giấc ngủ.'
  },
  checklist:[
    'Đã dùng đủ cả 5 từ cho sẵn chưa?',
    'Đủ khoảng 80 chữ chưa (đếm ô vuông, không đếm dấu câu)?',
    'Có nêu rõ quan điểm: cần hay không cần đồng hồ báo thức, vì sao?',
    'Có dùng ít nhất một câu 被 hoặc 把 (HSK 3–4) đúng chỗ chưa?',
    'Mở đoạn lùi vào 2 ô, dấu câu chiếm một ô — đúng quy cách bài thi chưa?'
  ],

  // Đề đúng như câu 99 của đề thi (gửi kèm khi nhờ AI chấm)
  de:'请结合下列词语（要全部使用），写一篇80字左右的短文，谈谈你真的需要闹钟吗。',

  // Cách dùng đúng của 5 từ cho sẵn — máy soát lỗi dựa vào đây
  // (re: mẫu câu SAI hay gặp; viết dạng chuỗi RegExp)
  tuDung:[
    {tu:'闹钟', loai:'danh từ', cach:'定闹钟 · 设闹钟 · 被闹钟叫醒 · 闹钟响了',
     sai:[{re:'(放|开|做)(一个|个|了)?闹钟', sua:'定(个)闹钟 / 设闹钟', giai:'"Đặt báo thức" tiếng Trung là 定闹钟 hoặc 设闹钟 — đừng dịch từng chữ thành 放闹钟 / 开闹钟.'},
          {re:'闹钟(叫|吵)醒了?(我|他|她|你)', sua:'我被闹钟叫醒了', giai:'Câu chủ động 闹钟叫醒我 không sai, nhưng kể chuyện mình bị đánh thức thì câu 被 (我被闹钟叫醒) tự nhiên hơn.', nhe:true}]},
    {tu:'享受', loai:'động từ', cach:'享受生活 · 享受自由 · 享受到了……的快乐',
     sai:[{re:'享受(很|非常|十分)', sua:'很享受 + danh từ', giai:'享受 là động từ, sau nó là DANH TỪ (享受生活). Không nói 享受很好; muốn nhấn mạnh thì 很享受 + N.'},
          {re:'享受(睡觉|玩|吃饭)', sua:'享受睡眠 / 享受……的快乐', giai:'Tân ngữ của 享受 thường là danh từ: 享受睡眠, 享受周末 — nghe tự nhiên hơn 享受睡觉.', nhe:true}]},
    {tu:'导致', loai:'động từ', cach:'A + 导致 + kết quả XẤU (失眠 / 失败 / 错误)',
     sai:[{re:'导致.{0,6}(成功|进步|健康|快乐|好成绩)', sua:'使 / 让 / 带来……', giai:'导致 dẫn đến kết quả XẤU. Kết quả tốt thì dùng 使 / 让 / 带来: 让我更健康.'}]},
    {tu:'避免', loai:'động từ', cach:'避免 + điều xấu (避免迟到 / 避免错误) · 为了避免……',
     sai:[{re:'避免(不|没)', sua:'避免 + điều xấu (bỏ 不)', giai:'避免 đã mang nghĩa "tránh cho KHÔNG xảy ra". Viết 避免不迟到 là thừa 不 — đúng là 避免迟到.'}]},
    {tu:'精神', loai:'danh từ / tính từ', cach:'没有精神 · 很精神 · 精神很好 · 打起精神',
     sai:[{re:'精神(很|非常|特别)?(累|困)', sua:'(我)很累 / 没有精神', giai:'精神 không đi với 累 / 困. Mệt thì nói 我很累, uể oải thì nói 没有精神.'},
          {re:'有精神问题', sua:'没有精神 / 精神不好', giai:'精神问题 là "vấn đề tâm thần" — nghĩa rất nặng. Muốn nói "uể oải, thiếu sức sống" thì dùng 没有精神 / 精神不好.', nhe:true}]}
  ],

  // Cấu trúc của bài + cấu trúc HSK 4 nên dùng lại — gợi ý khi sửa bài
  cauTruc:[
    {ten:'被 + 闹钟 + 叫醒', nhan:'被', vd:'我每天早上都被闹钟叫醒。', khi:'Kể việc mình bị đánh thức — ôn câu 被 (HSK 3–4).'},
    {ten:'A + 导致 + B', nhan:'导致', vd:'经常被突然叫醒会导致情绪低落。', khi:'Nêu TÁC HẠI, hậu quả xấu.'},
    {ten:'为了避免……，……', nhan:'为了避免', vd:'为了避免这些危害，我现在晚上十点半就睡觉。', khi:'Nêu cách khắc phục — thân đoạn.'},
    {ten:'V + 过来 / V + 得(不)过来', nhan:'过来', vd:'被闹钟叫醒后，我很久才清醒过来。', khi:'Tả việc trở lại trạng thái tỉnh táo, hoặc làm (không) xuể.'},
    {ten:'正如……所 + V + 的那样', nhan:'所', vd:'正如课文所说的那样，自然醒最符合生物钟规律。', khi:'Dẫn ý kiến, giọng văn viết — hợp câu mở hoặc câu kết.'},
    {ten:'不仅……，而且……', nhan:'不仅', vd:'自然醒不仅让人精神好，而且对身体也有好处。', khi:'Nối hai ý tăng tiến trong thân đoạn.'},
    {ten:'后来我才知道，……', nhan:'才知道', vd:'后来我才知道，闹钟对身体有很多危害。', khi:'Chuyển ý — từ trải nghiệm sang nhận thức.'}
  ],

  // 书写 第一部分 · 完成句子 — xếp các mảnh thành câu (3 câu đầu là câu 29–31 sách bài tập)
  sapXep:[
    {manh:['是为了','放慢脚步','享受生活'],
     dap:'放慢脚步是为了享受生活。',
     vn:'Chậm bước lại là để tận hưởng cuộc sống.',
     giai:'Chủ ngữ là cụm động từ 放慢脚步; 是为了 + mục đích (享受生活) làm vị ngữ.'},
    {manh:['是很正常的','人偶尔','情绪低落'],
     dap:'人偶尔情绪低落是很正常的。',
     vn:'Con người thỉnh thoảng tâm trạng sa sút là chuyện rất bình thường.',
     giai:'Cả cụm chủ–vị 人偶尔情绪低落 làm chủ ngữ; 是很正常的 (是……的) đặt cuối câu để nhận xét.'},
    {manh:['一般都较短','雷阵雨','持续的时间'],
     dap:'雷阵雨持续的时间一般都较短。',
     vn:'Mưa rào kèm sấm thường kéo dài không lâu.',
     giai:'持续 làm định ngữ cho 时间 (雷阵雨持续的时间); phó từ 一般都 đứng trước vị ngữ 较短.'},
    {manh:['导致','会','长期熬夜','失眠'],
     dap:'长期熬夜会导致失眠。',
     vn:'Thức khuya lâu ngày sẽ dẫn đến mất ngủ.',
     giai:'A (长期熬夜) + 会 + 导致 + kết quả xấu (失眠). Động từ năng nguyện 会 đứng trước 导致.'},
    {manh:['我们的愿望','自然醒','最符合'],
     dap:'自然醒最符合我们的愿望。',
     vn:'Tự nhiên tỉnh giấc hợp với mong muốn của chúng ta nhất.',
     giai:'符合 + 愿望 là kết hợp cố định; 最 đứng trước động từ 符合.'},
    {manh:['伤害','可以避免','光闹钟','对人体的'],
     dap:'光闹钟可以避免对人体的伤害。',
     vn:'Đồng hồ báo thức ánh sáng có thể tránh được tổn hại cho cơ thể.',
     giai:'避免 + tân ngữ (伤害); 对人体的 làm định ngữ đứng trước 伤害.'}
  ]
};

// ══════════════════════════════════════════
// LUYỆN NÓI — 3 câu đầu là 话题讨论 của sách, câu 4 lấy từ 命题写作
// ══════════════════════════════════════════
var speakingData = {
  intro:'Bốn câu hỏi mở về chủ đề giấc ngủ và đồng hồ báo thức. Bấm nút loa nghe câu hỏi, rồi <b>tự ghi âm câu trả lời của mình trước</b> — đừng đọc theo câu mẫu. Cố gắng dùng được từ mới của bài: 闹钟 · 失眠 · 导致 · 避免 · 精神 · 规律 · 享受.',
  questions:[
    {q_zh:'你是从什么时候开始使用闹钟的？为什么要用闹钟？',
     q_vn:'Em bắt đầu dùng đồng hồ báo thức từ khi nào? Vì sao phải dùng?',
     hint:'Kể mốc thời gian + lý do, dùng 从……开始 / 因为……所以……',
     sample:'我是从上初中开始用闹钟的。因为学校七点就上课，我怕迟到，所以每天晚上都定好闹钟。',
     sample_vn:'Tôi bắt đầu dùng đồng hồ báo thức từ khi lên cấp hai. Vì trường bảy giờ đã vào học, tôi sợ đến muộn nên tối nào cũng đặt sẵn báo thức.',
     note:'Câu hỏi 什么时候开始 nên trả lời bằng 是……的 để nhấn mạnh thời điểm.'},
    {q_zh:'本文的观点你认为哪些是有道理的？',
     q_vn:'Trong các quan điểm của bài, em thấy những điểm nào có lý?',
     hint:'Nêu 1–2 quan điểm của bài + kinh nghiệm của em chứng minh',
     sample:'我觉得“突然被闹钟叫醒会使人情绪低落”很有道理。我被闹钟吵醒的时候，一上午都没有精神。',
     sample_vn:'Tôi thấy ý "đột ngột bị báo thức gọi dậy khiến người ta tâm trạng sa sút" rất có lý. Những lúc bị báo thức đánh thức, cả buổi sáng tôi chẳng có tinh thần.',
     note:'Dẫn lại ý của bài rồi thêm trải nghiệm thật — cách trả lời ăn điểm ở HSKK.'},
    {q_zh:'你有没有关于实现“自然醒”的好的经验或做法？',
     q_vn:'Em có kinh nghiệm hay cách làm nào hay để được "tự nhiên tỉnh giấc" không?',
     hint:'Đưa ra 2–3 cách cụ thể, dùng 首先……其次…… hoặc 只要……就……',
     sample:'我的经验是生活要有规律。只要每天晚上十点半睡觉，早上六点左右我就能自然醒。另外，睡前别玩手机。',
     sample_vn:'Kinh nghiệm của tôi là sinh hoạt phải điều độ. Chỉ cần tối nào cũng ngủ lúc mười rưỡi thì khoảng sáu giờ sáng tôi sẽ tự tỉnh. Ngoài ra, trước khi ngủ đừng chơi điện thoại.',
     note:'Nêu cách làm CỤ THỂ (giờ giấc, việc làm) thuyết phục hơn nói chung chung "ngủ sớm".'},
    {q_zh:'你真的需要闹钟吗？为什么？',
     q_vn:'Em có thật sự cần đồng hồ báo thức không? Vì sao?',
     hint:'Chọn rõ một phía (cần / không cần) rồi đưa lý do, dùng 虽然……但是……',
     sample:'虽然闹钟对身体有一些危害，但是我现在还需要它。不过我会采用柔和的音乐，避免被突然惊醒。',
     sample_vn:'Tuy đồng hồ báo thức có hại cho cơ thể, nhưng hiện tại tôi vẫn cần nó. Có điều tôi sẽ dùng nhạc êm dịu để tránh bị giật mình tỉnh giấc.',
     note:'Câu hỏi 真的……吗 cần một câu trả lời dứt khoát trước, rồi mới giải thích.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🎧 NGHE THEO DẠNG ĐỀ HSK 5 — 听力 第一/第二部分
// Nguyên văn hội thoại lấy từ sách bài tập 《HSK标准教程5上·练习册》bài 11.
// Bốn lựa chọn do soạn lại cho khớp nguyên văn (sách chỉ in chữ cái đáp án:
// 1–6 ACBBCD, 7–8 BA).
// ══════════════════════════════════════════════════════════════
var listenExamData = {
  intro: 'Đề HSK 5 phần nghe chỉ phát <b>một lượt</b>. Vì vậy ở đây cũng vậy: bấm nút loa nghe, ' +
         'trả lời ngay, rồi mới mở nguyên văn ra đối chiếu. Đừng mở nguyên văn trước — mở trước là mất tác dụng.',
  source: 'Nguyên văn: 《HSK标准教程5·练习册》第11课 听力',
  items: [
    {n:1,
     lines:[{sp:'女',zh:'我不是催你，只是想告诉你一声，我已经到了。'},
            {sp:'男',zh:'啊？你都到啦！这才几点哪？'}],
     q:'从对话中可以知道什么？',qvn:'Qua đoạn hội thoại có thể biết điều gì?',
     opts:['女的到得很早','男的已经到了','女的在催男的','他们都迟到了'],ans:0,
     why:'Người đàn ông ngạc nhiên 你都到啦！这才几点哪？ — mới mấy giờ mà cô đã đến → cô ấy đến rất sớm. Bẫy: 我不是催你 nói rõ cô KHÔNG giục, nên đừng chọn "đang giục".',
     words:[]},

    {n:2,
     lines:[{sp:'女',zh:'你不是说今天有会要早点儿去单位吗？怎么还不走？'},
            {sp:'男',zh:'刘总昨天临时有事去上海了，会取消了。'}],
     q:'根据对话，男的怎么了？',qvn:'Theo đoạn hội thoại, người đàn ông làm sao?',
     opts:['要去上海出差','今天迟到了','不用去开会了','身体不舒服'],ans:2,
     why:'会取消了 — cuộc họp bị hủy, nên anh ấy không cần đi họp sớm nữa. Người đi Thượng Hải là 刘总, không phải người đàn ông.',
     words:[]},

    {n:3,
     lines:[{sp:'男',zh:'妈妈，你看天阴得多厉害，这雨肯定小不了，下午篮球训练还能进行吗？'},
            {sp:'女',zh:'现在都是雷阵雨，说不定一会儿就停了。'}],
     q:'妈妈觉得下午的训练最可能怎样？',qvn:'Mẹ cho rằng buổi tập chiều nay nhiều khả năng sẽ thế nào?',
     opts:['会被取消','会照常进行','推迟到明天','改在室内进行'],ans:1,
     why:'Mẹ nói 雷阵雨……说不定一会儿就停了 — mưa rào sẽ tạnh nhanh, nên buổi tập vẫn diễn ra bình thường. Liên hệ câu 31 sách bài tập: 雷阵雨持续的时间一般都较短.',
     words:['持续']},

    {n:4,
     lines:[{sp:'男',zh:'真佩服你丈夫。抽了20多年的烟，说戒就戒了。我也一直想，可到现在也没戒掉。'},
            {sp:'女',zh:'其实很简单，关键就看你有没有决心。'}],
     q:'关于戒烟，可以知道男的什么情况？',qvn:'Về chuyện cai thuốc, biết được gì về người đàn ông?',
     opts:['已经戒掉了','一直没戒掉','根本不想戒','刚开始抽烟'],ans:1,
     why:'我也一直想，可到现在也没戒掉 — muốn cai từ lâu mà đến giờ vẫn chưa cai được. Người "说戒就戒" là chồng của người phụ nữ.',
     words:[]},

    {n:5,
     lines:[{sp:'男',zh:'小区的中心广场安装了很多健身器，你没事也去锻炼锻炼吧。'},
            {sp:'女',zh:'等我把这集电视剧看完了再说。'}],
     q:'男的让女的做什么？',qvn:'Người đàn ông bảo người phụ nữ làm gì?',
     opts:['看电视剧','安装健身器','去锻炼身体','打扫广场'],ans:2,
     why:'你没事也去锻炼锻炼吧 — lời khuyên đi tập thể dục. Xem phim là việc người phụ nữ ĐANG làm, không phải điều được bảo.',
     words:[]},

    {n:6,
     lines:[{sp:'男',zh:'小刘，你帮我看看，这个复印机出什么问题了？印着印着就停了。'},
            {sp:'女',zh:'这个指示灯亮了，就说明没纸了，要重新装纸。'}],
     q:'关于复印机，下列哪项正确？',qvn:'Về chiếc máy photo, câu nào đúng?',
     opts:['已经坏了','指示灯不亮','需要请人修理','里面没纸了'],ans:3,
     why:'指示灯亮了，就说明没纸了 — đèn báo sáng nghĩa là hết giấy, chỉ cần nạp giấy lại. Máy không hỏng, đèn thì đang SÁNG.',
     words:[]},

    {n:7,
     lines:[{sp:'男',zh:'这两天又失眠了。你说，换个枕头会不会好点儿？'},
            {sp:'女',zh:'也许吧，睡前喝杯牛奶可以改善睡眠，你试试。'},
            {sp:'男',zh:'昨晚夜里三点多醒了，想起单位那些头疼的事，就再也没睡着。'},
            {sp:'女',zh:'你要学会放松，别老胡思乱想。'}],
     q:'男的为什么失眠？',qvn:'Vì sao người đàn ông mất ngủ?',
     opts:['枕头不舒服','想着单位的烦心事','睡前喝了牛奶','头疼得厉害'],ans:1,
     why:'想起单位那些头疼的事，就再也没睡着 — nghĩ đến những chuyện đau đầu ở cơ quan. 头疼的事 là "chuyện đau đầu" (phiền phức), không phải bị đau đầu thật — bẫy nghĩa đen.',
     words:['失眠']},

    {n:8,
     lines:[{sp:'女',zh:'你说，鸵鸟也有翅膀，可为什么不会飞呢？'},
            {sp:'男',zh:'我听说它们胸骨太平了，肌肉不够发达。'},
            {sp:'女',zh:'懂的还不少。关键是它们的羽毛太柔软，翅膀与身体相比过于短小，根本不适合飞行。'},
            {sp:'男',zh:'还是没你懂得多呀！'}],
     q:'根据对话，鸵鸟不会飞的关键因素是什么？',qvn:'Theo đoạn hội thoại, nguyên nhân then chốt khiến đà điểu không bay được là gì?',
     opts:['羽毛柔软，翅膀太短小','胸骨太平','肌肉不发达','身体太轻'],ans:0,
     why:'Từ khóa 关键是…… đi ngay trước đáp án: lông quá mềm, cánh quá ngắn so với thân. Lý do người đàn ông nêu (xương ức, cơ bắp) chỉ là phần phụ.',
     words:[]}
  ]
};

// ══════════════════════════════════════════════════════════════
// 💬 TÌNH HUỐNG — HOÀN THÀNH HỘI THOẠI (Cấp 2 · 半交际性练习)
// ══════════════════════════════════════════════════════════════
var situationData = {
  intro: 'Mỗi tình huống cho sẵn lời của người kia. Em viết lời đáp của mình, <b>bắt buộc dùng đúng từ/cấu trúc ghi ở ô yêu cầu</b>. ' +
         'Viết xong mới mở câu mẫu — câu mẫu chỉ là MỘT cách nói, em nói khác mà đúng yêu cầu vẫn được.',
  items: [
    {scene:'Bạn thân than rằng sáng nào cũng bị báo thức làm giật mình.',
     a:{sp:'Bạn',zh:'每天早上被闹钟吵醒，我都特别难受。',vn:'Sáng nào bị báo thức đánh thức tớ cũng khó chịu lắm.'},
     need:['Dùng 避免 hoặc 采用','Đưa ra một lời khuyên CỤ THỂ'],
     sample:'你可以把铃声换成柔和的音乐，这样就能避免被突然惊醒了。',
     samplePy:'Nǐ kěyǐ bǎ língshēng huànchéng róuhé de yīnyuè, zhèyàng jiù néng bìmiǎn bèi tūrán jīngxǐng le.',
     sampleVn:'Cậu có thể đổi chuông thành nhạc êm dịu, như vậy sẽ tránh được việc bị giật mình tỉnh giấc.',
     tip:'避免 + điều xấu: 避免被惊醒. Đừng viết 避免不被惊醒 — thừa 不.'},

    {scene:'Mẹ hỏi vì sao dạo này em trông uể oải.',
     a:{sp:'Mẹ',zh:'你最近怎么总是没精神？',vn:'Dạo này sao con cứ uể oải thế?'},
     need:['Dùng 失眠 hoặc 导致','Nêu nguyên nhân CỤ THỂ'],
     sample:'最近作业太多，我每天都睡得很晚，结果导致失眠了。',
     samplePy:'Zuìjìn zuòyè tài duō, wǒ měi tiān dōu shuì de hěn wǎn, jiéguǒ dǎozhì shīmián le.',
     sampleVn:'Dạo này bài tập nhiều quá, ngày nào con cũng ngủ muộn, kết quả là bị mất ngủ.',
     tip:'导致 đi với kết quả XẤU (失眠). 失眠 là nội động từ, không nói 失眠我.'},

    {scene:'Bạn hỏi em làm thế nào mà sáng nào cũng tự dậy được.',
     a:{sp:'Bạn',zh:'你是怎么做到每天自然醒的？',vn:'Cậu làm thế nào mà ngày nào cũng tự tỉnh vậy?'},
     need:['Dùng 规律','Dùng 只要……就……'],
     sample:'我的生活很有规律，只要晚上十点半睡觉，早上六点就自然醒了。',
     samplePy:'Wǒ de shēnghuó hěn yǒu guīlǜ, zhǐyào wǎnshang shí diǎn bàn shuìjiào, zǎoshang liù diǎn jiù zìrán xǐng le.',
     sampleVn:'Sinh hoạt của tớ rất điều độ, chỉ cần mười rưỡi tối đi ngủ là sáu giờ sáng tự tỉnh.',
     tip:'生活很有规律 = sinh hoạt điều độ. Đây là nghĩa tính từ của 规律 mà người Việt hay quên.'},

    {scene:'Cô giáo giao cho em — lớp trưởng — quá nhiều việc cùng lúc.',
     a:{sp:'Cô',zh:'这些工作你一个人能做完吗？',vn:'Chỗ việc này một mình em làm xong được không?'},
     need:['Dùng V + 不 + 过来','Giữ lễ phép với thầy cô'],
     sample:'老师，工作太多了，我一个人恐怕忙不过来，能不能再找一个同学帮忙？',
     samplePy:'Lǎoshī, gōngzuò tài duō le, wǒ yí ge rén kǒngpà máng bu guòlái, néng bu néng zài zhǎo yí ge tóngxué bāngmáng?',
     sampleVn:'Thưa cô, việc nhiều quá, một mình em e là làm không xuể, cô có thể tìm thêm một bạn giúp được không ạ?',
     tip:'忙不过来 / 做不过来: không chèn 了 vào giữa (không nói 忙不了过来).'},

    {scene:'Bạn hỏi em thấy quán ăn mới mở thế nào.',
     a:{sp:'Bạn',zh:'那家新开的饭馆怎么样？',vn:'Quán mới mở đó thế nào?'},
     need:['Dùng 相当 (phó từ "khá")','Nêu một chi tiết chứng minh'],
     sample:'相当不错！菜的味道好极了，服务也挺周到的，我下次还想去。',
     samplePy:'Xiāngdāng búcuò! Cài de wèidào hǎo jí le, fúwù yě tǐng zhōudào de, wǒ xià cì hái xiǎng qù.',
     sampleVn:'Khá ổn đấy! Món ăn ngon tuyệt, phục vụ cũng chu đáo, lần sau tớ còn muốn đi nữa.',
     tip:'相当 đã chỉ mức độ — không thêm 很: nói 相当不错, không nói 相当很不错.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🎯 NÓI SAO CHO HAY — 得体 / 语体 (đặc trưng riêng của HSK 5)
// Cả hai câu đều đúng ngữ pháp — chọn câu PHÙ HỢP HƠN với hoàn cảnh.
// ══════════════════════════════════════════════════════════════
var registerData = {
  intro: 'Ở đây <b>cả hai câu đều đúng ngữ pháp</b> — không có câu sai. Việc của em là chọn câu <b>PHÙ HỢP HƠN</b> với hoàn cảnh. ' +
         'Bài 11 là bài khoa học — rất hợp để luyện phân biệt giọng VĂN VIẾT khoa học với giọng NÓI hằng ngày.',
  items: [
    {scene:'Em viết báo cáo khoa học về giấc ngủ cho câu lạc bộ sinh học.',
     a:'这种状态如果持续数月，将导致失眠。',b:'要是这样过几个月，就会睡不着觉。',better:'a',
     why:'Báo cáo là VĂN VIẾT khoa học: 数月, 将, 导致 trang trọng, chính xác. Câu b đúng nhưng giọng nói chuyện.'},

    {scene:'Em nhắn tin cho bạn thân kể chuyện tối qua.',
     a:'昨晚我出现了失眠状况。',b:'昨晚我又睡不着了，烦死了！',better:'b',
     why:'Nhắn tin bạn thân mà viết 出现了失眠状况 nghe như bệnh án. Khẩu ngữ tự nhiên: 睡不着, 烦死了.'},

    {scene:'Sáng ra, em gọi em trai dậy.',
     a:'请将窗帘拉开，以便光线进入室内。',b:'把窗帘拉开，让太阳照进来吧。',better:'b',
     why:'Nói với em trong nhà thì dùng 把 + 让, câu ngắn. 将……以便…… là giọng văn bản hướng dẫn.'},

    {scene:'Chuyên gia y tế phát biểu trên chương trình truyền hình.',
     a:'被闹铃惊醒的人比自然醒的人血压更高。',b:'被闹钟吓醒的人，血压比睡到自然醒的人高多了。',better:'a',
     why:'Chuyên gia nói trên TV dùng từ chuẩn xác: 惊醒, 血压更高. 吓醒, 高多了 mang màu khẩu ngữ, kém trang trọng.'},

    {scene:'Trên xe buýt dã ngoại, thầy hỏi em đã đếm đủ người chưa.',
     a:'老师，我数了一下，车上有32个学生。',b:'老师，经统计，车上共有学生32名。',better:'a',
     why:'Trả lời miệng ngay trên xe thì 数了一下 tự nhiên. 经统计……共有……名 là giọng báo cáo giấy tờ.'},

    {scene:'Em viết thư cảm ơn cô giáo cũ nhân ngày Nhà giáo.',
     a:'是您在我失败时鼓励我继续前进。',b:'您在我失败的时候说：别灰心，接着干！',better:'a',
     why:'Thư cảm ơn là văn viết trang trọng: 在……时, 继续前进 hợp hơn 接着干 (khẩu ngữ, hơi suồng sã).'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🗣️ KỂ LẠI BÀI ĐỌC 复述 (Cấp 3 · 交际性练习)
// Bài tập 4 của giáo trình: 根据下面的提示词复述课文内容
// ══════════════════════════════════════════════════════════════
var retellData = {
  intro: 'Đây là bài tập 4 trong giáo trình: <b>根据下面的提示词复述课文内容</b> — kể lại bài đọc bằng lời của chính em, ' +
         'KHÔNG đọc thuộc lòng. Nhìn dàn ý và các từ khoá bên dưới, bấm ghi âm rồi kể một mạch khoảng 1–2 phút.',
  outline: [
    {step:'Mở', cue:'医学研究证明，人类睡眠有其特定的……', words:['人类','机制','规律','生物钟']},
    {step:'Tự nhiên tỉnh giấc', cue:'早晨，光线逐渐变强，新陈代谢……，人从熟睡……', words:['光线','必要','新陈代谢','过渡','浅']},
    {step:'Vì sao cần báo thức', cue:'紧张的现代生活，使很多人……', words:['现代','享受','用途']},
    {step:'Tác hại 1', cue:'如果突然被闹钟叫醒，在心理上……', words:['实验','呼吸','心理','情绪','低落','记忆','计算','相当']},
    {step:'Tác hại 2', cue:'这种状态如果持续数天、数周、数月……', words:['肾上腺素','持续','数','导致','失眠','精神','血压','专家']},
    {step:'Giải pháp', cue:'如果必须定闹钟……；市场上出现了“光闹钟”……', words:['采用','柔和','市场','产品','模仿','避免','传统']},
    {step:'Kết', cue:'自然醒最符合我们的……', words:['愿望','窗帘']}
  ],
  checklist: [
    'Kể đủ ba phần của sách chưa: quá trình tự nhiên tỉnh giấc — tác hại của báo thức — cải tiến của "光闹钟"?',
    'Có dùng được ít nhất 12 từ mới của bài không?',
    'Có nói đúng các con số (16 → 24 lần/phút, 65%) không?',
    'Nói liền mạch khoảng 1–2 phút, hay còn ngắt quãng nhiều?',
    'Có kể bằng LỜI MÌNH, hay đang đọc thuộc nguyên văn?'
  ]
};

// ══════════════════════════════════════════
// SGK · 练习 (Bài tập trong sách, trang 106–107) — trò "Bài tập SGK" ở bước Luyện tập
// Sách bài 11 không có dạng 给括号里的词选择适当的位置.
// ══════════════════════════════════════════
var sgkData = [
  {kieu:'kho', de:'选择合适的词语填空', vn:'Chọn từ thích hợp điền vào chỗ trống', tu:['所','享受','导致','过渡','必要','规律'],
   cau:[
     {s:'在婚姻问题上，听听父母的意见还是很有＿＿的。', dap:['必要']},
     {s:'由于近一个月来没有降水，＿＿河水水位持续下降。', dap:['导致']},
     {s:'正如你＿＿估计的那样，李岩确实改变了主意。', dap:['所']},
     {s:'擦擦办公桌，整理一下文件，这些都可以让你从放松的休息状态自然＿＿到工作状态。', dap:['过渡']},
     {s:'生命在于运动，有＿＿的运动对于身体健康大有好处。', dap:['规律']},
     {s:'为了＿＿轻松的生活，夫妻俩决定把家搬到这个安静的小镇。', dap:['享受']}
   ]},
  {kieu:'ab', de:'选择正确答案', vn:'Chọn đáp án đúng',
   cau:[
     {s:'实验失败了没关系，打起＿＿从头再来。', opts:['情绪','精神'], ans:1, giai:'打起精神 = lấy lại tinh thần, là cụm cố định. 情绪 là cảm xúc, tâm trạng — không đi với 打起.'},
     {s:'每晚抽出点儿时间来阅读、学习，坚持＿＿年之后，成功就会向你招手。', opts:['来','数'], ans:1, giai:'数 (shù) + 年 = vài năm (văn viết). "来" phải đứng SAU số từ (十来年), không đứng trước 年.'},
     {s:'作为孩子的父母，我们当然＿＿他能成为一个有用的人才。', opts:['愿望','希望'], ans:1, giai:'Cần động từ mang mệnh đề làm tân ngữ → 希望. 愿望 chỉ là danh từ.'},
     {s:'他的行为已经严重＿＿到了社会安全。', opts:['危害','伤害'], ans:0, giai:'Tân ngữ lớn, trừu tượng (社会安全), mức độ nghiêm trọng → 危害. 伤害 thiên về làm tổn thương người, tình cảm.'}
   ]}
];
