// ══════════════════════════════════════════
// DATA — HSK6 Bài 6: 当好职场插班生 (Làm tốt vai "học sinh chuyển lớp" nơi công sở)
// 第二单元 不甘平庸 · Nguồn: HSK标准教程6上 (tr. 65–73) + đáp án sách
// Bài khoá: 当好职场插班生 (785字) · 46 từ mới
// ══════════════════════════════════════════

var vocabData = [
  {n:1,zh:'上任',py:'shàng rèn',pos:'Động từ',vn:'nhậm chức, nhận chức',hv:'thượng nhậm',em:'🧑‍💼',lesson:1,
   explain:['Chính thức bắt đầu đảm nhận một chức vụ hay một vị trí mới (thường là vị trí quản lý).','Không mang tân ngữ chỉ chức vụ: không nói 上任经理; nói 担任经理 hoặc 刚上任.'],
   usage:'Hay gặp: 刚上任, 上任第一天, 新上任的……, 走马上任. Nơi nhận chức đặt trước: 到这家公司上任.',
   collo:['刚上任','上任第一天','新上任','走马上任'],
   ex_zh:'这天是我到这家公司上任的第一天。',ex_py:'Zhè tiān shì wǒ dào zhè jiā gōngsī shàngrèn de dì-yī tiān.',ex_vn:'Hôm ấy là ngày đầu tiên tôi nhận chức ở công ty này.',
   exList:[
     {zh:'这天是我到这家公司上任的第一天，我的职位是咨询师。',py:'Zhè tiān shì wǒ dào zhè jiā gōngsī shàngrèn de dì-yī tiān, wǒ de zhíwèi shì zīxúnshī.',vn:'Hôm ấy là ngày đầu tiên tôi nhận chức ở công ty này, vị trí của tôi là chuyên viên tư vấn.'},
     {zh:'新经理刚上任，就提出了好几项改革措施。',py:'Xīn jīnglǐ gāng shàngrèn, jiù tíchūle hǎo jǐ xiàng gǎigé cuòshī.',vn:'Giám đốc mới vừa nhậm chức đã đưa ra mấy biện pháp cải cách.'},
     {zh:'她上任以后，班里的风气越来越好了。',py:'Tā shàngrèn yǐhòu, bān li de fēngqì yuè lái yuè hǎo le.',vn:'Từ khi cô ấy nhận chức lớp trưởng, nếp sống trong lớp ngày càng tốt hơn.'}
   ],
   colloFull:[
     {zh:'刚上任',py:'gāng shàngrèn',vn:'vừa nhậm chức'},
     {zh:'上任第一天',py:'shàngrèn dì-yī tiān',vn:'ngày đầu nhận chức'},
     {zh:'新上任',py:'xīn shàngrèn',vn:'mới nhậm chức'},
     {zh:'走马上任',py:'zǒumǎ shàngrèn',vn:'lên đường nhận chức'},
     {zh:'新官上任三把火',py:'xīn guān shàngrèn sān bǎ huǒ',vn:'quan mới nhậm chức hăng hái đổi mới'}
   ],
   patterns:[
     {s:'到 + nơi + 上任',m:'Đến đâu nhận chức (到这家公司上任)'},
     {s:'刚上任 + 就……',m:'Vừa nhậm chức đã …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Anh ấy vừa nhận chức đã phải xử lý một việc rất khó.',answer:'他一上任就要处理一件很难的事。',answerPy:'Tā yí shàngrèn jiù yào chǔlǐ yí jiàn hěn nán de shì.',
      note:'一……就……: vừa … đã …; 上任 là động từ không mang tân ngữ.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Từ khi thầy Vương nhậm chức hiệu trưởng đến nay, hoạt động của trường ngày càng nhiều.',answer:'自从王校长上任以来，学校的活动越来越多了。',answerPy:'Zìcóng Wáng xiàozhǎng shàngrèn yǐlái, xuéxiào de huódòng yuè lái yuè duō le.',
      note:'自从……以来: kể từ khi … đến nay; chức vụ đặt trước tên (王校长), không nói 上任校长.',pair:'自从……以来'}
   ]},

  {n:2,zh:'职位',py:'zhíwèi',pos:'Danh từ',vn:'chức vụ, vị trí công việc',hv:'chức vị',em:'🪪',lesson:1,
   explain:['Vị trí công việc mà một người đảm nhận trong cơ quan, tổ chức, đi kèm quyền hạn và trách nhiệm.','Gần nghĩa 岗位 (vị trí làm việc cụ thể), nhưng 职位 nhấn mạnh cấp bậc, chức danh.'],
   usage:'Lượng từ 个. Hay gặp: 职位高/低, 申请……职位, 应聘……职位, 空缺职位.',
   collo:['申请职位','职位很高','重要职位','空缺职位'],
   ex_zh:'我的职位是咨询师。',ex_py:'Wǒ de zhíwèi shì zīxúnshī.',ex_vn:'Vị trí của tôi là chuyên viên tư vấn.',
   exList:[
     {zh:'我的职位是咨询师。',py:'Wǒ de zhíwèi shì zīxúnshī.',vn:'Vị trí của tôi là chuyên viên tư vấn.'},
     {zh:'他在公司的职位不高，但大家都很尊重他。',py:'Tā zài gōngsī de zhíwèi bù gāo, dàn dàjiā dōu hěn zūnzhòng tā.',vn:'Chức vụ của anh ấy ở công ty không cao, nhưng mọi người đều rất tôn trọng anh.'},
     {zh:'我想申请贵公司的这个职位。',py:'Wǒ xiǎng shēnqǐng guì gōngsī de zhège zhíwèi.',vn:'Tôi muốn ứng tuyển vị trí này của quý công ty.'}
   ],
   colloFull:[
     {zh:'申请职位',py:'shēnqǐng zhíwèi',vn:'ứng tuyển vị trí'},
     {zh:'职位很高',py:'zhíwèi hěn gāo',vn:'chức vụ rất cao'},
     {zh:'重要职位',py:'zhòngyào zhíwèi',vn:'chức vụ quan trọng'},
     {zh:'空缺职位',py:'kòngquē zhíwèi',vn:'vị trí còn trống'},
     {zh:'职位变动',py:'zhíwèi biàndòng',vn:'thay đổi chức vụ'}
   ],
   patterns:[
     {s:'……的职位是……',m:'Chức vụ của … là …'},
     {s:'申请 / 应聘 + ……职位',m:'Ứng tuyển vị trí …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy chức vụ không cao nhưng cô ấy làm việc rất tận tâm.',answer:'虽然职位不高，但是她工作非常用心。',answerPy:'Suīrán zhíwèi bù gāo, dànshì tā gōngzuò fēicháng yòngxīn.',
      note:'虽然……但是…… nối hai ý trái ngược; 用心 = dốc lòng (HSK 5).',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Vị trí này đến cả người có mười năm kinh nghiệm cũng chưa chắc làm tốt.',answer:'这个职位连有十年经验的人都不一定能做好。',answerPy:'Zhège zhíwèi lián yǒu shí nián jīngyàn de rén dōu bù yídìng néng zuòhǎo.',
      note:'连……都…… nhấn mạnh "đến cả"; 不一定 = chưa chắc.',pair:'连……都……'}
   ]},

  {n:3,zh:'资深',py:'zīshēn',pos:'Tính từ',vn:'thâm niên, lâu năm, dày dạn',hv:'tư thâm',em:'🎖️',lesson:1,
   explain:['Có thâm niên và nhiều kinh nghiệm trong một nghề, một lĩnh vực.','Thường làm định ngữ, đứng ngay trước danh từ chỉ người theo nghề: 资深员工, 资深记者.'],
   usage:'资深 + danh từ nghề nghiệp: 资深员工, 资深教授, 资深记者, 资深前辈. Trái nghĩa với 新手.',
   collo:['资深员工','资深记者','资深教练','资深专家'],
   ex_zh:'领导分配业务时，总是让资深员工先挑。',ex_py:'Lǐngdǎo fēnpèi yèwù shí, zǒngshì ràng zīshēn yuángōng xiān tiāo.',ex_vn:'Khi phân công công việc, lãnh đạo luôn để nhân viên thâm niên chọn trước.',
   exList:[
     {zh:'领导分配业务时，总是让资深员工先挑。',py:'Lǐngdǎo fēnpèi yèwù shí, zǒngshì ràng zīshēn yuángōng xiān tiāo.',vn:'Khi phân công công việc, lãnh đạo luôn để nhân viên thâm niên chọn trước.'},
     {zh:'当初对我们不友好的资深前辈们也变得热情起来。',py:'Dāngchū duì wǒmen bù yǒuhǎo de zīshēn qiánbèimen yě biàn de rèqíng qǐlái.',vn:'Những tiền bối thâm niên lúc đầu không thân thiện với chúng tôi cũng trở nên nhiệt tình.'},
     {zh:'这位资深记者采访过许多名人。',py:'Zhè wèi zīshēn jìzhě cǎifǎngguo xǔduō míngrén.',vn:'Vị phóng viên lão luyện này đã phỏng vấn rất nhiều người nổi tiếng.'}
   ],
   colloFull:[
     {zh:'资深员工',py:'zīshēn yuángōng',vn:'nhân viên thâm niên'},
     {zh:'资深记者',py:'zīshēn jìzhě',vn:'phóng viên lão luyện'},
     {zh:'资深教练',py:'zīshēn jiàoliàn',vn:'huấn luyện viên lâu năm'},
     {zh:'资深专家',py:'zīshēn zhuānjiā',vn:'chuyên gia đầu ngành'},
     {zh:'资深前辈',py:'zīshēn qiánbèi',vn:'tiền bối thâm niên'}
   ],
   patterns:[
     {s:'资深 + danh từ chỉ nghề',m:'Người lâu năm, dày dạn trong nghề'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nhờ sự giúp đỡ của mấy tiền bối thâm niên, tôi nhanh chóng quen với công việc mới.',answer:'在几位资深前辈的帮助下，我很快就适应了新工作。',answerPy:'Zài jǐ wèi zīshēn qiánbèi de bāngzhù xià, wǒ hěn kuài jiù shìyìngle xīn gōngzuò.',
      note:'在……的帮助下: nhờ sự giúp đỡ của …; 适应 + 新工作.',pair:'在……下'},
     {promptLang:'vi',prompt:'Cho dù là huấn luyện viên lâu năm cũng hiếm khi gặp tình huống này.',answer:'即使是资深教练，也很少遇到这种情况。',answerPy:'Jíshǐ shì zīshēn jiàoliàn, yě hěn shǎo yùdào zhè zhǒng qíngkuàng.',
      note:'即使……也……: cho dù … cũng …; vế sau kết quả không đổi.',pair:'即使……也……'}
   ]},

  {n:4,zh:'创立',py:'chuànglì',pos:'Động từ',vn:'sáng lập, thành lập',hv:'sáng lập',em:'🏗️',lesson:1,
   explain:['Lần đầu tạo dựng nên, thành lập: tổ chức, công ty, chính đảng, quốc gia, học thuyết, lý luận.','Nhấn mạnh "khai sáng, thành lập"; khác 创办 (lập ra rồi điều hành: trường học, nhà máy, tờ báo) — xem phần Phân biệt từ.'],
   usage:'创立 + 组织 / 公司 / 学说 / 理论 / 体系; ……创立于 + năm; ……创立之初.',
   collo:['创立公司','创立之初','创立学说','创立于'],
   ex_zh:'这个组织创立于1942年。',ex_py:'Zhège zǔzhī chuànglì yú yī jiǔ sì èr nián.',ex_vn:'Tổ chức này được thành lập vào năm 1942.',
   exList:[
     {zh:'不少资深员工在公司创立之初就开始在这里工作了。',py:'Bùshǎo zīshēn yuángōng zài gōngsī chuànglì zhī chū jiù kāishǐ zài zhèlǐ gōngzuò le.',vn:'Không ít nhân viên thâm niên đã làm việc ở đây ngay từ buổi đầu công ty mới thành lập.'},
     {zh:'这个组织创立于1942年。',py:'Zhège zǔzhī chuànglì yú yī jiǔ sì èr nián.',vn:'Tổ chức này được thành lập vào năm 1942.'},
     {zh:'创立一个新的学术体系是个复杂的过程。',py:'Chuànglì yí ge xīn de xuéshù tǐxì shì ge fùzá de guòchéng.',vn:'Xây dựng một hệ thống học thuật mới là một quá trình phức tạp.'}
   ],
   colloFull:[
     {zh:'创立公司',py:'chuànglì gōngsī',vn:'thành lập công ty'},
     {zh:'创立之初',py:'chuànglì zhī chū',vn:'buổi đầu thành lập'},
     {zh:'创立学说',py:'chuànglì xuéshuō',vn:'sáng lập học thuyết'},
     {zh:'创立于',py:'chuànglì yú',vn:'được thành lập vào'},
     {zh:'创立理论',py:'chuànglì lǐlùn',vn:'xây dựng lý luận'}
   ],
   patterns:[
     {s:'……创立于 + thời gian',m:'… được thành lập vào … (văn viết)'},
     {s:'……创立之初',m:'Vào buổi đầu thành lập …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Công ty này mới thành lập ba năm mà đã rất có tiếng.',answer:'这家公司创立才三年，就已经很有名了。',answerPy:'Zhè jiā gōngsī chuànglì cái sān nián, jiù yǐjīng hěn yǒumíng le.',
      note:'才 + thời lượng (mới chỉ …), 就 nhấn mạnh sự việc đến sớm, nhanh.',pair:'才……就……'},
     {promptLang:'vi',prompt:'Buổi đầu thành lập câu lạc bộ, chúng tôi gặp rất nhiều khó khăn.',answer:'俱乐部创立之初，我们遇到了很多困难。',answerPy:'Jùlèbù chuànglì zhī chū, wǒmen yùdàole hěn duō kùnnan.',
      note:'……之初 = lúc bắt đầu (văn viết), làm trạng ngữ thời gian đầu câu.',pair:'……之初'}
   ]},

  {n:5,zh:'沏',py:'qī',pos:'Động từ',vn:'pha (trà, cà phê…)',hv:'thế',em:'🍵',lesson:1,
   explain:['Rót nước sôi vào để pha: 沏茶, 沏咖啡.','Gần nghĩa 泡 (泡茶); 沏 hay dùng ở miền Bắc Trung Quốc và trong văn viết. Sách đánh dấu * (từ vượt đề cương).'],
   usage:'沏 + 茶 / 咖啡; 沏一壶茶, 沏好茶, 给某人沏茶.',
   collo:['沏茶','沏咖啡','沏一壶茶','给客人沏茶'],
   ex_zh:'赵姐工作的第一件事是忙着沏茶和咖啡。',ex_py:'Zhào jiě gōngzuò de dì-yī jiàn shì shì mángzhe qī chá hé kāfēi.',ex_vn:'Việc đầu tiên chị Triệu làm là tất bật pha trà và cà phê.',
   exList:[
     {zh:'没想到赵姐工作的第一件事是忙着沏茶和咖啡。',py:'Méi xiǎngdào Zhào jiě gōngzuò de dì-yī jiàn shì shì mángzhe qī chá hé kāfēi.',vn:'Không ngờ việc đầu tiên chị Triệu làm là tất bật pha trà và cà phê.'},
     {zh:'客人来了，妈妈赶紧沏了一壶好茶。',py:'Kèrén lái le, māma gǎnjǐn qīle yì hú hǎo chá.',vn:'Khách đến, mẹ vội pha một ấm trà ngon.'},
     {zh:'爷爷每天起床后的第一件事就是给自己沏杯茶。',py:'Yéye měi tiān qǐchuáng hòu de dì-yī jiàn shì jiù shì gěi zìjǐ qī bēi chá.',vn:'Việc đầu tiên mỗi sáng ông dậy là tự pha cho mình một cốc trà.'}
   ],
   colloFull:[
     {zh:'沏茶',py:'qī chá',vn:'pha trà'},
     {zh:'沏咖啡',py:'qī kāfēi',vn:'pha cà phê'},
     {zh:'沏一壶茶',py:'qī yì hú chá',vn:'pha một ấm trà'},
     {zh:'给客人沏茶',py:'gěi kèrén qī chá',vn:'pha trà mời khách'},
     {zh:'沏好',py:'qīhǎo',vn:'pha xong'}
   ],
   patterns:[
     {s:'给 + người + 沏 + 茶 / 咖啡',m:'Pha trà / cà phê cho ai'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Khách vừa ngồi xuống, cô ấy đã pha trà xong rồi.',answer:'客人刚坐下，她就把茶沏好了。',answerPy:'Kèrén gāng zuòxià, tā jiù bǎ chá qīhǎo le.',
      note:'Câu 把: 把 + 茶 + 沏好 (động từ + bổ ngữ kết quả).',pair:'把'},
     {promptLang:'vi',prompt:'Loại trà này phải pha bằng nước sôi thì mới thơm.',answer:'这种茶只有用开水沏才香。',answerPy:'Zhè zhǒng chá zhǐyǒu yòng kāishuǐ qī cái xiāng.',
      note:'只有……才……: điều kiện duy nhất; 用开水 làm trạng ngữ cách thức.',pair:'只有……才……'}
   ]},

  {n:6,zh:'风气',py:'fēngqì',pos:'Danh từ',vn:'nếp sống, bầu không khí chung',hv:'phong khí',em:'🌬️',lesson:1,
   explain:['Thói quen, nếp sinh hoạt, phong cách chung đang phổ biến trong một tập thể hay xã hội.','Có thể tốt hoặc xấu: 风气很好, 不良风气.'],
   usage:'……的风气 + 好 / 坏 / 正; 社会风气, 学习风气, 形成……的风气, 改变风气.',
   collo:['社会风气','学习风气','风气很好','不良风气'],
   ex_zh:'我想这单位风气真好。',ex_py:'Wǒ xiǎng zhè dānwèi fēngqì zhēn hǎo.',ex_vn:'Tôi nghĩ nếp sống ở cơ quan này thật tốt.',
   exList:[
     {zh:'我想这单位风气真好，明天这事我来做。',py:'Wǒ xiǎng zhè dānwèi fēngqì zhēn hǎo, míngtiān zhè shì wǒ lái zuò.',vn:'Tôi nghĩ nếp sống ở cơ quan này thật tốt, ngày mai việc này để tôi làm.'},
     {zh:'我们班学习风气很浓，大家都很用功。',py:'Wǒmen bān xuéxí fēngqì hěn nóng, dàjiā dōu hěn yònggōng.',vn:'Lớp chúng tôi không khí học tập rất sôi nổi, ai cũng chăm chỉ.'},
     {zh:'这种不良风气必须尽快改变。',py:'Zhè zhǒng bùliáng fēngqì bìxū jǐnkuài gǎibiàn.',vn:'Thói xấu này phải nhanh chóng thay đổi.'}
   ],
   colloFull:[
     {zh:'社会风气',py:'shèhuì fēngqì',vn:'nếp sống xã hội'},
     {zh:'学习风气',py:'xuéxí fēngqì',vn:'không khí học tập'},
     {zh:'风气很好',py:'fēngqì hěn hǎo',vn:'nếp sống rất tốt'},
     {zh:'不良风气',py:'bùliáng fēngqì',vn:'thói xấu, nếp xấu'},
     {zh:'形成风气',py:'xíngchéng fēngqì',vn:'hình thành nếp'}
   ],
   patterns:[
     {s:'N + 的风气 + 很好 / 很正',m:'Nếp sống của … rất tốt'},
     {s:'形成……的风气',m:'Hình thành nếp …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần mọi người cùng cố gắng, nếp sống của lớp sẽ ngày càng tốt.',answer:'只要大家一起努力，班里的风气就会越来越好。',answerPy:'Zhǐyào dàjiā yìqǐ nǔlì, bān li de fēngqì jiù huì yuè lái yuè hǎo.',
      note:'只要……就……: chỉ cần … thì …; 越来越 + tính từ.',pair:'只要……就……'},
     {promptLang:'vi',prompt:'Nếp sống ở đội bóng này tốt đến mức ai đến rồi cũng không muốn đi.',answer:'这个球队的风气好得谁来了都不想走。',answerPy:'Zhège qiúduì de fēngqì hǎo de shéi lái le dōu bù xiǎng zǒu.',
      note:'Tính từ + 得 + bổ ngữ mức độ; 谁……都…… = ai cũng ….',pair:'Adj + 得 + bổ ngữ'}
   ]},

  {n:7,zh:'唯独',py:'wéidú',pos:'Phó từ',vn:'chỉ có, duy chỉ, chỉ riêng',hv:'duy độc',em:'☝️',lesson:1,
   explain:['Chỉ riêng, duy chỉ (= 只是、单单). Câu trước thường nêu tình hình chung, 唯独 tách riêng một trường hợp ngoại lệ, đối lập.','Là điểm ngữ pháp 1 của bài — xem phần Ngữ pháp.'],
   usage:'……都……，唯独 + danh từ / đại từ / mệnh đề + …… Sắc thái văn viết hơn 只有.',
   collo:['唯独你','唯独剩下','唯独这件事','唯独他没来'],
   ex_zh:'那次旅行大家都去了，唯独你没有去成。',ex_py:'Nà cì lǚxíng dàjiā dōu qù le, wéidú nǐ méiyǒu qùchéng.',ex_vn:'Chuyến du lịch lần đó mọi người đều đi, chỉ có cậu là không đi được.',
   exList:[
     {zh:'那次旅行大家都去了，唯独你没有去成。',py:'Nà cì lǚxíng dàjiā dōu qù le, wéidú nǐ méiyǒu qùchéng.',vn:'Chuyến du lịch lần đó mọi người đều đi, chỉ có cậu là không đi được.'},
     {zh:'正想着，赵姐已经坐在那儿开始自己享受，唯独剩下我和我的搭档。',py:'Zhèng xiǎngzhe, Zhào jiě yǐjīng zuò zài nàr kāishǐ zìjǐ xiǎngshòu, wéidú shèngxià wǒ hé wǒ de dādàng.',vn:'Đang nghĩ thì chị Triệu đã ngồi đó tự thưởng thức, chỉ còn lại tôi và cộng sự của tôi.'},
     {zh:'中国的传统节日都是喜气洋洋的，唯独清明节，庄严而伤感。',py:'Zhōngguó de chuántǒng jiérì dōu shì xǐqì yángyáng de, wéidú Qīngmíng Jié, zhuāngyán ér shānggǎn.',vn:'Các ngày lễ truyền thống của Trung Quốc đều rộn ràng vui tươi, chỉ riêng Tết Thanh minh là trang nghiêm và buồn thương.'}
   ],
   colloFull:[
     {zh:'唯独你',py:'wéidú nǐ',vn:'chỉ có cậu'},
     {zh:'唯独剩下',py:'wéidú shèngxià',vn:'chỉ còn lại'},
     {zh:'唯独这件事',py:'wéidú zhè jiàn shì',vn:'chỉ riêng việc này'},
     {zh:'唯独他没来',py:'wéidú tā méi lái',vn:'chỉ có anh ấy không đến'},
     {zh:'唯独……不……',py:'wéidú……bù……',vn:'chỉ riêng … là không …'}
   ],
   patterns:[
     {s:'……都……，唯独 + A + ……',m:'Tất cả đều …, chỉ riêng A là … (đối lập)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Môn nào tôi học cũng khá, chỉ riêng môn toán là mãi không tiến bộ.',answer:'哪门课我都学得不错，唯独数学一直没有进步。',answerPy:'Nǎ mén kè wǒ dōu xué de búcuò, wéidú shùxué yìzhí méiyǒu jìnbù.',
      note:'Đại từ nghi vấn + 都 (哪门课……都) = môn nào cũng; 唯独 tách riêng ngoại lệ.',pair:'哪……都……'},
     {promptLang:'vi',prompt:'Cả nhà đều đồng ý, chỉ có bố phản đối, điều này khiến tôi rất khó xử.',answer:'全家人都同意了，唯独爸爸反对，这让我很为难。',answerPy:'Quán jiā rén dōu tóngyì le, wéidú bàba fǎnduì, zhè ràng wǒ hěn wéinán.',
      note:'让 + người + tính từ: khiến ai …; 为难 = khó xử.',pair:'让 (khiến)'}
   ]},

  {n:8,zh:'搭档',py:'dādàng',pos:'Danh từ',vn:'cộng sự, người cộng tác',hv:'đáp đương',em:'🤝',lesson:1,
   explain:['Người cùng hợp tác làm một việc; cộng sự, bạn diễn, đồng đội ăn ý.','Cũng làm động từ: cùng hợp tác (我们俩搭档了三年).'],
   usage:'老搭档, 好搭档, 工作搭档, 最佳搭档; 和……搭档 (động từ). Lượng từ 个 / 位 / 对.',
   collo:['老搭档','好搭档','工作搭档','和……搭档'],
   ex_zh:'唯独剩下我和我的搭档——与我同一天就职的小林。',ex_py:'Wéidú shèngxià wǒ hé wǒ de dādàng — yǔ wǒ tóng yì tiān jiùzhí de Xiǎo Lín.',ex_vn:'Chỉ còn lại tôi và cộng sự của tôi — Tiểu Lâm, người nhận việc cùng ngày với tôi.',
   exList:[
     {zh:'唯独剩下我和我的搭档——与我同一天就职的小林。',py:'Wéidú shèngxià wǒ hé wǒ de dādàng — yǔ wǒ tóng yì tiān jiùzhí de Xiǎo Lín.',vn:'Chỉ còn lại tôi và cộng sự của tôi — Tiểu Lâm, người nhận việc cùng ngày với tôi.'},
     {zh:'他们俩是多年的老搭档，配合得非常默契。',py:'Tāmen liǎ shì duō nián de lǎo dādàng, pèihé de fēicháng mòqì.',vn:'Hai người họ là cộng sự lâu năm, phối hợp vô cùng ăn ý.'},
     {zh:'这次比赛我想和你搭档，你愿意吗？',py:'Zhè cì bǐsài wǒ xiǎng hé nǐ dādàng, nǐ yuànyì ma?',vn:'Cuộc thi lần này tớ muốn cặp với cậu, cậu có đồng ý không?'}
   ],
   colloFull:[
     {zh:'老搭档',py:'lǎo dādàng',vn:'cộng sự lâu năm'},
     {zh:'好搭档',py:'hǎo dādàng',vn:'cộng sự ăn ý'},
     {zh:'工作搭档',py:'gōngzuò dādàng',vn:'cộng sự trong công việc'},
     {zh:'和……搭档',py:'hé……dādàng',vn:'cặp, cộng tác với …'},
     {zh:'最佳搭档',py:'zuìjiā dādàng',vn:'cặp đôi ăn ý nhất'}
   ],
   patterns:[
     {s:'A 是 B 的(老)搭档',m:'A là cộng sự (lâu năm) của B'},
     {s:'A 和 B 搭档 + V',m:'A cặp với B làm gì (động từ)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Một khi đã có cộng sự tốt, công việc sẽ nhẹ nhàng hơn nhiều.',answer:'一旦有了好搭档，工作就会轻松很多。',answerPy:'Yídàn yǒule hǎo dādàng, gōngzuò jiù huì qīngsōng hěn duō.',
      note:'一旦……就……: một khi … thì …; tính từ + 很多 chỉ mức độ so sánh.',pair:'一旦……就……'},
     {promptLang:'vi',prompt:'Chúng tôi làm cộng sự ba năm rồi, chưa từng cãi nhau lần nào.',answer:'我们搭档三年了，从来没吵过架。',answerPy:'Wǒmen dādàng sān nián le, cónglái méi chǎoguo jià.',
      note:'搭档 làm động từ + thời lượng + 了; 从来没 + V + 过 = chưa từng bao giờ.',pair:'从来没……过'}
   ]},

  {n:9,zh:'就职',py:'jiù zhí',pos:'Động từ',vn:'nhận chức, nhận việc',hv:'tựu chức',em:'📋',lesson:1,
   explain:['Chính thức nhận một chức vụ hoặc bắt đầu làm việc ở một cơ quan (sắc thái trang trọng).','Không mang tân ngữ trực tiếp: 在……就职 / 就职于…….'],
   usage:'就职于 + cơ quan (văn viết), 就职典礼, 就职演说, 同一天就职.',
   collo:['就职于','就职典礼','就职演说','同一天就职'],
   ex_zh:'他大学毕业后就职于一家外贸公司。',ex_py:'Tā dàxué bìyè hòu jiùzhí yú yì jiā wàimào gōngsī.',ex_vn:'Sau khi tốt nghiệp đại học, anh ấy làm việc ở một công ty ngoại thương.',
   exList:[
     {zh:'我的搭档是与我同一天就职的小林。',py:'Wǒ de dādàng shì yǔ wǒ tóng yì tiān jiùzhí de Xiǎo Lín.',vn:'Cộng sự của tôi là Tiểu Lâm, người nhận việc cùng ngày với tôi.'},
     {zh:'他大学毕业后就职于一家外贸公司。',py:'Tā dàxué bìyè hòu jiùzhí yú yì jiā wàimào gōngsī.',vn:'Sau khi tốt nghiệp đại học, anh ấy làm việc ở một công ty ngoại thương.'},
     {zh:'新校长的就职演说很短，却很感人。',py:'Xīn xiàozhǎng de jiùzhí yǎnshuō hěn duǎn, què hěn gǎnrén.',vn:'Bài phát biểu nhậm chức của hiệu trưởng mới rất ngắn nhưng rất cảm động.'}
   ],
   colloFull:[
     {zh:'就职于',py:'jiùzhí yú',vn:'làm việc tại'},
     {zh:'就职典礼',py:'jiùzhí diǎnlǐ',vn:'lễ nhậm chức'},
     {zh:'就职演说',py:'jiùzhí yǎnshuō',vn:'bài phát biểu nhậm chức'},
     {zh:'同一天就职',py:'tóng yì tiān jiùzhí',vn:'nhận việc cùng ngày'},
     {zh:'正式就职',py:'zhèngshì jiùzhí',vn:'chính thức nhận chức'}
   ],
   patterns:[
     {s:'就职于 + cơ quan',m:'Làm việc tại … (văn viết)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Từ ngày nhận việc, cô ấy chưa đi muộn lần nào.',answer:'从就职那天起，她一次也没有迟到过。',answerPy:'Cóng jiùzhí nà tiān qǐ, tā yí cì yě méiyǒu chídàoguo.',
      note:'从……起: kể từ …; 一次也没(有) + V + 过: chưa … lần nào.',pair:'一……也没……'},
     {promptLang:'vi',prompt:'Anh ấy lần lượt làm việc ở hai công ty lớn, kinh nghiệm rất phong phú.',answer:'他先后就职于两家大公司，经验非常丰富。',answerPy:'Tā xiānhòu jiùzhí yú liǎng jiā dà gōngsī, jīngyàn fēicháng fēngfù.',
      note:'先后 = lần lượt (trước sau); 就职于 + nơi làm việc.',pair:'先后'}
   ]},

  {n:10,zh:'边缘',py:'biānyuán',pos:'Danh từ',vn:'rìa, vùng ven, bên lề',hv:'biên duyên',em:'🗺️',lesson:1,
   explain:['Phần sát mép ngoài cùng của một vật, một khu vực: 城市边缘, 桌子边缘.','Nghĩa bóng: vị trí bên lề, không được coi trọng; 边缘化 = bị gạt ra rìa.'],
   usage:'在……的边缘; 处于……的边缘 (bên bờ …); 被边缘化; 边缘地带.',
   collo:['城市边缘','悬崖边缘','被边缘化','处于边缘'],
   ex_zh:'我也有被边缘化的感觉。',ex_py:'Wǒ yě yǒu bèi biānyuánhuà de gǎnjué.',ex_vn:'Tôi cũng có cảm giác bị gạt ra rìa.',
   exList:[
     {zh:'顿时小林的脸色变了，我也有被边缘化的感觉。',py:'Dùnshí Xiǎo Lín de liǎnsè biàn le, wǒ yě yǒu bèi biānyuánhuà de gǎnjué.',vn:'Mặt Tiểu Lâm lập tức biến sắc, tôi cũng có cảm giác bị gạt ra rìa.'},
     {zh:'我们家住在城市的边缘，离市中心很远。',py:'Wǒmen jiā zhù zài chéngshì de biānyuán, lí shì zhōngxīn hěn yuǎn.',vn:'Nhà chúng tôi ở rìa thành phố, cách trung tâm rất xa.'},
     {zh:'杯子放在桌子边缘太危险了，快拿进来。',py:'Bēizi fàng zài zhuōzi biānyuán tài wēixiǎn le, kuài ná jìnlái.',vn:'Để cốc ở mép bàn nguy hiểm quá, mau đẩy vào trong.'}
   ],
   colloFull:[
     {zh:'城市边缘',py:'chéngshì biānyuán',vn:'rìa thành phố'},
     {zh:'悬崖边缘',py:'xuányá biānyuán',vn:'mép vực'},
     {zh:'被边缘化',py:'bèi biānyuánhuà',vn:'bị gạt ra rìa'},
     {zh:'处于边缘',py:'chǔyú biānyuán',vn:'ở bên lề'},
     {zh:'边缘地带',py:'biānyuán dìdài',vn:'vùng ven'}
   ],
   patterns:[
     {s:'在 / 处于 + ……的边缘',m:'Ở rìa / bên bờ …'},
     {s:'被边缘化',m:'Bị gạt ra rìa, không được coi trọng'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Là học sinh mới chuyển đến, lúc đầu cậu ấy cảm thấy mình bị gạt ra rìa.',answer:'作为新转来的学生，他一开始觉得自己被边缘化了。',answerPy:'Zuòwéi xīn zhuǎnlái de xuésheng, tā yì kāishǐ juéde zìjǐ bèi biānyuánhuà le.',
      note:'作为 + thân phận: với tư cách là …; 被边缘化 là cấu trúc bị động.',pair:'作为'},
     {promptLang:'vi',prompt:'Công ty này từng bên bờ phá sản, may mà sau đó gặp được cơ hội tốt.',answer:'这家公司曾经处于破产的边缘，幸亏后来遇到了好机会。',answerPy:'Zhè jiā gōngsī céngjīng chǔyú pòchǎn de biānyuán, xìngkuī hòulái yùdàole hǎo jīhuì.',
      note:'处于……的边缘 = bên bờ …; 幸亏 = may mà (HSK 5).',pair:'幸亏'}
   ]},

  {n:11,zh:'眼色',py:'yǎnsè',pos:'Danh từ',vn:'cái nháy mắt ra hiệu, ánh mắt đầy ngụ ý',hv:'nhãn sắc',em:'😉',lesson:1,
   explain:['Ánh mắt dùng để ra hiệu, ngầm báo cho người khác: 使眼色, 递眼色.','Còn chỉ việc "nhìn sắc mặt" người khác mà hành xử: 看眼色, 没眼色 (không biết ý).'],
   usage:'向 / 给 + người + 使(个)眼色; 看……的眼色行事.',
   collo:['使眼色','递眼色','看眼色','没眼色'],
   ex_zh:'不过我还是向小林使了个眼色。',ex_py:'Búguò wǒ háishi xiàng Xiǎo Lín shǐle ge yǎnsè.',ex_vn:'Nhưng tôi vẫn đưa mắt ra hiệu cho Tiểu Lâm.',
   exList:[
     {zh:'不过我还是向小林使了个眼色。',py:'Búguò wǒ háishi xiàng Xiǎo Lín shǐle ge yǎnsè.',vn:'Nhưng tôi vẫn đưa mắt ra hiệu cho Tiểu Lâm.'},
     {zh:'妈妈给我使了个眼色，让我别再说下去了。',py:'Māma gěi wǒ shǐle ge yǎnsè, ràng wǒ bié zài shuō xiàqu le.',vn:'Mẹ nháy mắt ra hiệu, bảo tôi đừng nói tiếp nữa.'},
     {zh:'他做事总要看老板的眼色，一点儿主见也没有。',py:'Tā zuòshì zǒng yào kàn lǎobǎn de yǎnsè, yìdiǎnr zhǔjiàn yě méiyǒu.',vn:'Anh ta làm gì cũng phải nhìn sắc mặt ông chủ, chẳng có chút chính kiến nào.'}
   ],
   colloFull:[
     {zh:'使眼色',py:'shǐ yǎnsè',vn:'nháy mắt ra hiệu'},
     {zh:'递眼色',py:'dì yǎnsè',vn:'đưa mắt ra hiệu'},
     {zh:'看眼色',py:'kàn yǎnsè',vn:'nhìn sắc mặt'},
     {zh:'没眼色',py:'méi yǎnsè',vn:'không biết ý'},
     {zh:'一个眼色',py:'yí ge yǎnsè',vn:'một cái liếc mắt'}
   ],
   patterns:[
     {s:'向 / 给 + người + 使(了)个眼色',m:'Nháy mắt ra hiệu cho ai'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Thấy tôi nháy mắt ra hiệu, cậu ấy lập tức không nói nữa.',answer:'看到我使的眼色，他马上不说话了。',answerPy:'Kàndào wǒ shǐ de yǎnsè, tā mǎshàng bù shuōhuà le.',
      note:'我使的眼色: cụm "chủ–vị + 的" làm định ngữ; 不……了 báo sự thay đổi.',pair:'不……了'},
     {promptLang:'vi',prompt:'Cô ấy nháy mắt với tôi mấy lần mà tôi vẫn không hiểu ý.',answer:'她向我使了好几次眼色，我却还是没明白她的意思。',answerPy:'Tā xiàng wǒ shǐle hǎo jǐ cì yǎnsè, wǒ què háishi méi míngbai tā de yìsi.',
      note:'却 đứng sau chủ ngữ, nối ý trái ngược; động lượng 好几次 chen giữa 使 và 眼色.',pair:'却'}
   ]},

  {n:12,zh:'指标',py:'zhǐbiāo',pos:'Danh từ',vn:'chỉ tiêu',hv:'chỉ tiêu',em:'📊',lesson:1,
   explain:['Mục tiêu (thường là con số) được đặt ra phải đạt được trong kế hoạch, công việc.','Cũng chỉ các chỉ số đo lường: 健康指标, 质量指标.'],
   usage:'完成 / 达到 / 超过 + 指标; 完不成指标; 销售指标, 质量指标.',
   collo:['完成指标','完不成指标','超过指标','质量指标'],
   ex_zh:'有时候还完不成指标。',ex_py:'Yǒu shíhou hái wán bu chéng zhǐbiāo.',ex_vn:'Có lúc còn không hoàn thành chỉ tiêu.',
   exList:[
     {zh:'我和小林的业务很难做，有时候还完不成指标。',py:'Wǒ hé Xiǎo Lín de yèwù hěn nán zuò, yǒu shíhou hái wán bu chéng zhǐbiāo.',vn:'Công việc của tôi và Tiểu Lâm rất khó làm, có lúc còn không hoàn thành chỉ tiêu.'},
     {zh:'这个月的销售指标我们提前完成了。',py:'Zhège yuè de xiāoshòu zhǐbiāo wǒmen tíqián wánchéng le.',vn:'Chỉ tiêu doanh số tháng này chúng tôi đã hoàn thành trước thời hạn.'},
     {zh:'体检报告显示，他的各项指标都很正常。',py:'Tǐjiǎn bàogào xiǎnshì, tā de gè xiàng zhǐbiāo dōu hěn zhèngcháng.',vn:'Kết quả khám sức khoẻ cho thấy các chỉ số của anh ấy đều bình thường.'}
   ],
   colloFull:[
     {zh:'完成指标',py:'wánchéng zhǐbiāo',vn:'hoàn thành chỉ tiêu'},
     {zh:'完不成指标',py:'wán bu chéng zhǐbiāo',vn:'không hoàn thành được chỉ tiêu'},
     {zh:'超过指标',py:'chāoguò zhǐbiāo',vn:'vượt chỉ tiêu'},
     {zh:'质量指标',py:'zhìliàng zhǐbiāo',vn:'chỉ tiêu chất lượng'},
     {zh:'销售指标',py:'xiāoshòu zhǐbiāo',vn:'chỉ tiêu doanh số'}
   ],
   patterns:[
     {s:'完成 / 完不成 + 指标',m:'Hoàn thành / không hoàn thành chỉ tiêu'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nếu tháng này không hoàn thành chỉ tiêu, cả phòng sẽ bị trừ tiền thưởng.',answer:'如果这个月完不成指标，整个部门都要被扣奖金。',answerPy:'Rúguǒ zhège yuè wán bu chéng zhǐbiāo, zhěnggè bùmén dōu yào bèi kòu jiǎngjīn.',
      note:'完不成 = bổ ngữ khả năng phủ định; 被 + V: câu bị động (không cần nêu người làm).',pair:'被'},
     {promptLang:'vi',prompt:'Để hoàn thành chỉ tiêu, cả nhóm đã tăng ca liền một tuần.',answer:'为了完成指标，全组连续加了一个星期的班。',answerPy:'Wèile wánchéng zhǐbiāo, quán zǔ liánxù jiāle yí ge xīngqī de bān.',
      note:'为了 + mục đích đặt đầu câu; 加班 là động từ li hợp → 加了一个星期的班.',pair:'为了'}
   ]},

  {n:13,zh:'成天',py:'chéngtiān',pos:'Phó từ',vn:'suốt ngày, cả ngày',hv:'thành thiên',em:'📆',lesson:1,
   explain:['Cả ngày, suốt ngày (= 整天), thường mang ý chê: làm mãi một việc không nên làm.','Khẩu ngữ; đứng trước động từ, thường đi với 都 / 就知道.'],
   usage:'成天 + (都 / 就知道) + V: 成天玩游戏, 成天吹牛, 成天忙.',
   collo:['成天聊天儿','成天玩游戏','成天忙','成天待在家里'],
   ex_zh:'别人几乎成天聊天儿、上网、吹牛。',ex_py:'Biérén jīhū chéngtiān liáotiānr, shàngwǎng, chuīniú.',ex_vn:'Người khác gần như suốt ngày tán gẫu, lên mạng, khoác lác.',
   exList:[
     {zh:'别人的工作很快就完了，几乎成天聊天儿、上网、吹牛。',py:'Biérén de gōngzuò hěn kuài jiù wán le, jīhū chéngtiān liáotiānr, shàngwǎng, chuīniú.',vn:'Công việc của người khác xong rất nhanh, gần như suốt ngày tán gẫu, lên mạng, khoác lác.'},
     {zh:'你成天就知道玩游戏，作业什么时候写？',py:'Nǐ chéngtiān jiù zhīdào wán yóuxì, zuòyè shénme shíhou xiě?',vn:'Con suốt ngày chỉ biết chơi game, bao giờ mới làm bài tập?'},
     {zh:'爸爸成天忙着工作，从来没有闲下来的时候。',py:'Bàba chéngtiān mángzhe gōngzuò, cónglái méiyǒu xián xiàlái de shíhou.',vn:'Bố suốt ngày bận làm việc, chưa bao giờ được rảnh rỗi.'}
   ],
   colloFull:[
     {zh:'成天聊天儿',py:'chéngtiān liáotiānr',vn:'suốt ngày tán gẫu'},
     {zh:'成天玩游戏',py:'chéngtiān wán yóuxì',vn:'suốt ngày chơi game'},
     {zh:'成天忙',py:'chéngtiān máng',vn:'bận cả ngày'},
     {zh:'成天待在家里',py:'chéngtiān dāi zài jiā li',vn:'suốt ngày ru rú ở nhà'},
     {zh:'成天就知道……',py:'chéngtiān jiù zhīdào……',vn:'suốt ngày chỉ biết …'}
   ],
   patterns:[
     {s:'成天 + (就知道) + V',m:'Suốt ngày (chỉ biết) làm gì — thường mang ý chê'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nó suốt ngày chỉ biết lướt điện thoại, chẳng trách thành tích càng ngày càng kém.',answer:'他成天就知道玩手机，难怪成绩越来越差。',answerPy:'Tā chéngtiān jiù zhīdào wán shǒujī, nánguài chéngjì yuè lái yuè chà.',
      note:'难怪 = chẳng trách, đứng đầu vế nêu kết quả đã hiểu ra nguyên nhân.',pair:'难怪'},
     {promptLang:'vi',prompt:'Thay vì suốt ngày than phiền, chi bằng nghĩ cách thay đổi hiện trạng.',answer:'与其成天抱怨，不如想办法改变现状。',answerPy:'Yǔqí chéngtiān bàoyuàn, bùrú xiǎng bànfǎ gǎibiàn xiànzhuàng.',
      note:'与其 A，不如 B: thay vì A chi bằng B (chọn B).',pair:'与其……不如……'}
   ]},

  {n:14,zh:'吹牛',py:'chuī niú',pos:'Động từ',vn:'ba hoa, khoác lác, nói phét',hv:'xuy ngưu',em:'🎈',lesson:1,
   explain:['Nói khoác, phóng đại khả năng của mình hoặc sự việc (khẩu ngữ, mang ý chê).','Động từ li hợp: 吹什么牛, 吹了半天牛; cũng nói 吹牛皮.'],
   usage:'爱吹牛, 别吹牛了, 跟人吹牛, 吹牛皮. Không mang tân ngữ sau 牛.',
   collo:['爱吹牛','别吹牛','吹牛皮','聊天吹牛'],
   ex_zh:'他们几乎成天聊天儿、上网、吹牛。',ex_py:'Tāmen jīhū chéngtiān liáotiānr, shàngwǎng, chuīniú.',ex_vn:'Họ gần như suốt ngày tán gẫu, lên mạng, khoác lác.',
   exList:[
     {zh:'他们几乎成天聊天儿、上网、吹牛。',py:'Tāmen jīhū chéngtiān liáotiānr, shàngwǎng, chuīniú.',vn:'Họ gần như suốt ngày tán gẫu, lên mạng, khoác lác.'},
     {zh:'别吹牛了，你连游泳都不会，还说要横渡长江？',py:'Bié chuīniú le, nǐ lián yóuyǒng dōu bú huì, hái shuō yào héngdù Cháng Jiāng?',vn:'Đừng khoác lác nữa, cậu đến bơi còn không biết mà đòi bơi qua sông Trường Giang à?'},
     {zh:'他这个人爱吹牛，说的话你别全信。',py:'Tā zhège rén ài chuīniú, shuō de huà nǐ bié quán xìn.',vn:'Anh ta hay nói phét, lời anh ta nói cậu đừng tin hết.'}
   ],
   colloFull:[
     {zh:'爱吹牛',py:'ài chuīniú',vn:'hay khoác lác'},
     {zh:'别吹牛',py:'bié chuīniú',vn:'đừng nói phét'},
     {zh:'吹牛皮',py:'chuī niúpí',vn:'nói khoác (khẩu ngữ)'},
     {zh:'聊天吹牛',py:'liáotiān chuīniú',vn:'tán gẫu khoác lác'},
     {zh:'吹了半天牛',py:'chuīle bàntiān niú',vn:'khoác lác cả buổi'}
   ],
   patterns:[
     {s:'别吹牛了，……',m:'Đừng khoác lác nữa, … (vạch ra sự thật)'},
     {s:'吹 + 了 / 什么 + 牛',m:'Động từ li hợp, thành phần chen giữa'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cậu ta khoác lác cả buổi, kết quả đến bài đơn giản nhất cũng làm sai.',answer:'他吹了半天牛，结果连最简单的题都做错了。',answerPy:'Tā chuīle bàntiān niú, jiéguǒ lián zuì jiǎndān de tí dōu zuòcuò le.',
      note:'吹牛 li hợp: 吹了半天牛; 结果 dẫn ra kết cục; 连……都…….',pair:'连……都……'},
     {promptLang:'vi',prompt:'Anh ta chẳng những không làm được mà còn đi khoác lác khắp nơi.',answer:'他不但做不到，而且还到处吹牛。',answerPy:'Tā búdàn zuò bu dào, érqiě hái dàochù chuīniú.',
      note:'不但……而且…… tăng tiến; 到处 + V = đi khắp nơi làm gì.',pair:'不但……而且……'}
   ]},

  {n:15,zh:'溜',py:'liū',pos:'Động từ',vn:'chuồn, lẻn (đi)',hv:'lưu',em:'🏃',lesson:1,
   explain:['Lén lút bỏ đi hoặc đi vào mà không để người khác biết: 溜出去, 溜走, 溜进来.','Còn nghĩa "trượt, lướt" (溜冰), nhưng trong bài là "chuồn".'],
   usage:'溜 + 出去 / 进来 / 走 / 回家; 偷偷地溜…….',
   collo:['溜出去','溜走','偷偷溜进','溜回家'],
   ex_zh:'还有人溜出去逛街。',ex_py:'Hái yǒu rén liū chūqu guàngjiē.',ex_vn:'Còn có người chuồn ra ngoài đi dạo phố.',
   exList:[
     {zh:'几乎成天聊天儿、上网、吹牛，还有人溜出去逛街。',py:'Jīhū chéngtiān liáotiānr, shàngwǎng, chuīniú, hái yǒu rén liū chūqu guàngjiē.',vn:'Gần như suốt ngày tán gẫu, lên mạng, khoác lác, còn có người chuồn ra ngoài đi dạo phố.'},
     {zh:'会还没开完，他就偷偷地溜走了。',py:'Huì hái méi kāiwán, tā jiù tōutōu de liūzǒu le.',vn:'Cuộc họp chưa xong, anh ta đã lén chuồn mất.'},
     {zh:'小猫趁我不注意，溜进了厨房。',py:'Xiǎo māo chèn wǒ bú zhùyì, liūjìnle chúfáng.',vn:'Con mèo con nhân lúc tôi không để ý đã lẻn vào bếp.'}
   ],
   colloFull:[
     {zh:'溜出去',py:'liū chūqu',vn:'chuồn ra ngoài'},
     {zh:'溜走',py:'liūzǒu',vn:'chuồn mất'},
     {zh:'偷偷溜进',py:'tōutōu liūjìn',vn:'lén lẻn vào'},
     {zh:'溜回家',py:'liū huí jiā',vn:'chuồn về nhà'},
     {zh:'溜冰',py:'liūbīng',vn:'trượt băng'}
   ],
   patterns:[
     {s:'(偷偷地) + 溜 + 出去 / 进来 / 走',m:'Lén chuồn ra / lẻn vào / chuồn mất'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nhân lúc thầy giáo quay người viết bảng, cậu ấy lẻn ra khỏi lớp.',answer:'趁老师转身写黑板的时候，他溜出了教室。',answerPy:'Chèn lǎoshī zhuǎnshēn xiě hēibǎn de shíhou, tā liūchūle jiàoshì.',
      note:'趁 + thời cơ: nhân lúc …; 溜 + 出 + nơi chốn.',pair:'趁'},
     {promptLang:'vi',prompt:'Nếu cậu dám chuồn đi lần nữa, tớ sẽ nói với lớp trưởng.',answer:'要是你再敢溜走，我就告诉班长。',answerPy:'Yàoshi nǐ zài gǎn liūzǒu, wǒ jiù gàosu bānzhǎng.',
      note:'要是……就……: nếu … thì …; 再 + 敢 + V: còn dám … lần nữa.',pair:'要是……就……'}
   ]},

  {n:16,zh:'等级',py:'děngjí',pos:'Danh từ',vn:'đẳng cấp, cấp bậc',hv:'đẳng cấp',em:'🪜',lesson:1,
   explain:['Mức độ, thứ bậc được chia theo chất lượng, trình độ, độ khó…: 考试等级, 等级很高.','不是一个等级 = hoàn toàn không cùng đẳng cấp, chênh lệch rất xa.'],
   usage:'分等级, 等级高 / 低, 不是一个等级, ……的等级.',
   collo:['分等级','等级很高','不是一个等级','考试等级'],
   ex_zh:'我们的工作从难度上讲，和他们根本就不是一个等级。',ex_py:'Wǒmen de gōngzuò cóng nándù shang jiǎng, hé tāmen gēnběn jiù bú shì yí ge děngjí.',ex_vn:'Xét về độ khó, công việc của chúng tôi và của họ hoàn toàn không cùng một đẳng cấp.',
   exList:[
     {zh:'我们的工作从难度上讲，和他们根本就不是一个等级。',py:'Wǒmen de gōngzuò cóng nándù shang jiǎng, hé tāmen gēnběn jiù bú shì yí ge děngjí.',vn:'Xét về độ khó, công việc của chúng tôi và của họ hoàn toàn không cùng một đẳng cấp.'},
     {zh:'HSK考试一共分为六个等级。',py:'HSK kǎoshì yígòng fēn wéi liù ge děngjí.',vn:'Kỳ thi HSK chia làm sáu cấp.'},
     {zh:'这家酒店的等级很高，服务也非常周到。',py:'Zhè jiā jiǔdiàn de děngjí hěn gāo, fúwù yě fēicháng zhōudào.',vn:'Khách sạn này đẳng cấp rất cao, phục vụ cũng rất chu đáo.'}
   ],
   colloFull:[
     {zh:'分等级',py:'fēn děngjí',vn:'phân cấp'},
     {zh:'等级很高',py:'děngjí hěn gāo',vn:'đẳng cấp rất cao'},
     {zh:'不是一个等级',py:'bú shì yí ge děngjí',vn:'không cùng đẳng cấp'},
     {zh:'考试等级',py:'kǎoshì děngjí',vn:'cấp độ thi'},
     {zh:'等级制度',py:'děngjí zhìdù',vn:'chế độ đẳng cấp'}
   ],
   patterns:[
     {s:'A 和 B (根本)不是一个等级',m:'A và B hoàn toàn không cùng đẳng cấp'},
     {s:'从 + phương diện + 上讲，……',m:'Xét về mặt …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Xét về kỹ thuật, hai đội này căn bản không cùng một đẳng cấp.',answer:'从技术上讲，这两个队根本不是一个等级。',answerPy:'Cóng jìshù shang jiǎng, zhè liǎng ge duì gēnběn bú shì yí ge děngjí.',
      note:'从……上讲/来说: xét về mặt …; 根本 + phủ định = hoàn toàn không.',pair:'从……上讲'},
     {promptLang:'vi',prompt:'Tuy là cùng một cấp độ thi, nhưng đề năm nay khó hơn năm ngoái nhiều.',answer:'虽然是同一个考试等级，但今年的题比去年难多了。',answerPy:'Suīrán shì tóng yí ge kǎoshì děngjí, dàn jīnnián de tí bǐ qùnián nán duō le.',
      note:'Câu so sánh 比: A 比 B + tính từ + 多了.',pair:'比……多了'}
   ]},

  {n:17,zh:'公道',py:'gōngdao',pos:'Danh từ',vn:'sự công bằng, lẽ phải',hv:'công đạo',em:'⚖️',lesson:1,
   explain:['Lẽ công bằng, lẽ phải: 讨公道 = đi đòi lẽ công bằng, đòi lại sự công bằng.','Làm tính từ = công bằng, hợp lý: 价格公道, 说句公道话.'],
   usage:'讨公道, 主持公道, 说句公道话, 价钱公道. Sách phiên âm gōngdao.',
   collo:['讨公道','主持公道','公道话','价格公道'],
   ex_zh:'小林要去找领导讨公道。',ex_py:'Xiǎo Lín yào qù zhǎo lǐngdǎo tǎo gōngdao.',ex_vn:'Tiểu Lâm định đi tìm lãnh đạo đòi lẽ công bằng.',
   exList:[
     {zh:'小林要去找领导讨公道。',py:'Xiǎo Lín yào qù zhǎo lǐngdǎo tǎo gōngdao.',vn:'Tiểu Lâm định đi tìm lãnh đạo đòi lẽ công bằng.'},
     {zh:'这件事明明是他不对，你得给我们主持公道啊！',py:'Zhè jiàn shì míngmíng shì tā bú duì, nǐ děi gěi wǒmen zhǔchí gōngdao a!',vn:'Chuyện này rõ ràng là anh ta sai, ông phải đứng ra phân xử công bằng cho chúng tôi chứ!'},
     {zh:'这家小店的东西价格公道，所以回头客很多。',py:'Zhè jiā xiǎo diàn de dōngxi jiàgé gōngdao, suǒyǐ huítóukè hěn duō.',vn:'Đồ ở cửa hàng nhỏ này giá cả phải chăng nên khách quay lại rất đông.'}
   ],
   colloFull:[
     {zh:'讨公道',py:'tǎo gōngdao',vn:'đòi lẽ công bằng'},
     {zh:'主持公道',py:'zhǔchí gōngdao',vn:'đứng ra phân xử công bằng'},
     {zh:'公道话',py:'gōngdao huà',vn:'lời nói công bằng'},
     {zh:'价格公道',py:'jiàgé gōngdao',vn:'giá cả phải chăng'},
     {zh:'说句公道话',py:'shuō jù gōngdao huà',vn:'nói một câu công bằng'}
   ],
   patterns:[
     {s:'找 + người + 讨公道',m:'Tìm ai đó để đòi lẽ công bằng'},
     {s:'说句公道话，……',m:'Nói cho công bằng thì …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nói cho công bằng thì chuyện này cả hai bên đều có trách nhiệm.',answer:'说句公道话，这件事双方都有责任。',answerPy:'Shuō jù gōngdao huà, zhè jiàn shì shuāngfāng dōu yǒu zérèn.',
      note:'说句公道话 đứng đầu câu như một lời dẫn; 双方都…… = cả hai bên đều ….',pair:'都'},
     {promptLang:'vi',prompt:'Bị bắt nạt thì phải đi đòi lẽ công bằng, không thể cứ nhịn mãi.',answer:'被人欺负了就要去讨公道，不能一直忍着。',answerPy:'Bèi rén qīfu le jiù yào qù tǎo gōngdao, bù néng yìzhí rěnzhe.',
      note:'被 + người + V; V + 着 diễn tả trạng thái kéo dài (一直忍着).',pair:'被'}
   ]},

  {n:18,zh:'哼',py:'hng',pos:'Thán từ',vn:'hừ, hừm (bực bội hoặc không tin)',hv:'hanh',em:'😤',lesson:1,
   explain:['Thán từ, biểu thị sự bực bội, bất mãn, khinh thường hoặc không tin; đứng đầu câu.','Đọc hng (âm mũi). Làm động từ đọc hēng = ngân nga, rên (哼歌).'],
   usage:'哼，……！ đứng đầu câu. Chỉ dùng trong khẩu ngữ, với người thân quen; nói với người lớn nghe thiếu lễ độ.',
   collo:['哼，太不像话了','哼，我才不信','哼了一声','冷哼'],
   ex_zh:'哼，太不像话了，明明是在欺负人。',ex_py:'Hng, tài búxiànghuà le, míngmíng shì zài qīfu rén.',ex_vn:'Hừ, quá lắm rồi, rõ ràng là đang bắt nạt người ta.',
   exList:[
     {zh:'哼，太不像话了，明明是在欺负人。',py:'Hng, tài búxiànghuà le, míngmíng shì zài qīfu rén.',vn:'Hừ, quá lắm rồi, rõ ràng là đang bắt nạt người ta.'},
     {zh:'哼，你说得好听，我才不信呢！',py:'Hng, nǐ shuō de hǎotīng, wǒ cái bú xìn ne!',vn:'Hừ, cậu nói nghe hay lắm, tớ chẳng tin đâu!'},
     {zh:'他哼了一声，转身就走了。',py:'Tā hēngle yì shēng, zhuǎnshēn jiù zǒu le.',vn:'Anh ta hừ một tiếng rồi quay người đi luôn.'}
   ],
   colloFull:[
     {zh:'哼，太不像话了',py:'hng, tài búxiànghuà le',vn:'hừ, quá đáng thật'},
     {zh:'哼，我才不信',py:'hng, wǒ cái bú xìn',vn:'hừ, tôi chẳng tin'},
     {zh:'哼了一声',py:'hēngle yì shēng',vn:'hừ một tiếng'},
     {zh:'冷哼',py:'lěng hēng',vn:'hừ lạnh'},
     {zh:'哼歌',py:'hēng gē',vn:'ngân nga hát'}
   ],
   patterns:[
     {s:'哼，……！',m:'Hừ, … (bực bội, không tin)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Hừ, cậu ta mà giúp người khác à? Tớ chẳng tin đâu.',answer:'哼，他会帮助别人？我才不信呢。',answerPy:'Hng, tā huì bāngzhù biérén? Wǒ cái bú xìn ne.',
      note:'才 + phủ định + 呢: nhấn mạnh thái độ phủ nhận dứt khoát.',pair:'才……呢'},
     {promptLang:'vi',prompt:'Nghe xong lời giải thích của tôi, cô ấy chỉ hừ một tiếng, chẳng nói gì cả.',answer:'听完我的解释，她只哼了一声，什么也没说。',answerPy:'Tīngwán wǒ de jiěshì, tā zhǐ hēngle yì shēng, shénme yě méi shuō.',
      note:'Động lượng 一声 sau động từ; 什么也没 + V: không … gì cả.',pair:'什么也没……'}
   ]},

  {n:19,zh:'不像话',py:'búxiànghuà',pos:'Tính từ',vn:'vô lý, kỳ cục, quá đáng',hv:'bất tượng thoại',em:'😠',lesson:1,
   explain:['(Lời nói, việc làm) vô lý, không ra thể thống gì, quá đáng — dùng để phê phán.','Hay đi với 太……了, 真……: 太不像话了, 真不像话.'],
   usage:'太不像话了! / 真不像话! / 越来越不像话. Làm vị ngữ hoặc câu cảm thán độc lập.',
   collo:['太不像话了','真不像话','越来越不像话','不像话的事'],
   ex_zh:'明明是你把书弄丢了，还说不知道，真不像话！',ex_py:'Míngmíng shì nǐ bǎ shū nòngdiū le, hái shuō bù zhīdào, zhēn búxiànghuà!',ex_vn:'Rõ ràng là cậu làm mất sách, còn bảo không biết, thật quá đáng!',
   exList:[
     {zh:'哼，太不像话了，明明是在欺负人，大不了辞职。',py:'Hng, tài búxiànghuà le, míngmíng shì zài qīfu rén, dàbuliǎo cízhí.',vn:'Hừ, quá lắm rồi, rõ ràng là đang bắt nạt người ta, cùng lắm thì nghỉ việc.'},
     {zh:'明明是你把书弄丢了，还说不知道，真不像话！',py:'Míngmíng shì nǐ bǎ shū nòngdiū le, hái shuō bù zhīdào, zhēn búxiànghuà!',vn:'Rõ ràng là cậu làm mất sách, còn bảo không biết, thật quá đáng!'},
     {zh:'他上课总迟到，越来越不像话了。',py:'Tā shàngkè zǒng chídào, yuè lái yuè búxiànghuà le.',vn:'Cậu ta đi học toàn muộn, càng ngày càng quá đáng.'}
   ],
   colloFull:[
     {zh:'太不像话了',py:'tài búxiànghuà le',vn:'quá đáng lắm rồi'},
     {zh:'真不像话',py:'zhēn búxiànghuà',vn:'thật chẳng ra sao'},
     {zh:'越来越不像话',py:'yuè lái yuè búxiànghuà',vn:'càng ngày càng quá quắt'},
     {zh:'不像话的事',py:'búxiànghuà de shì',vn:'chuyện vô lý'},
     {zh:'简直不像话',py:'jiǎnzhí búxiànghuà',vn:'thật là vô lý hết sức'}
   ],
   patterns:[
     {s:'太 / 真 / 简直 + 不像话(了)',m:'Phê phán: quá đáng, vô lý'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Anh ta vay tiền không trả, lại còn nói xấu người ta, thật là quá đáng!',answer:'他借钱不还，还说别人的坏话，真是太不像话了！',answerPy:'Tā jiè qián bù huán, hái shuō biérén de huàihuà, zhēn shì tài búxiànghuà le!',
      note:'还 = lại còn (thêm một việc đáng chê); 太……了 cảm thán.',pair:'太……了'},
     {promptLang:'vi',prompt:'Dù cậu có bận đến mấy cũng không nên quên sinh nhật mẹ, như vậy quá vô lý.',answer:'不管你多忙，也不应该忘了妈妈的生日，这太不像话了。',answerPy:'Bùguǎn nǐ duō máng, yě bù yīnggāi wàngle māma de shēngrì, zhè tài búxiànghuà le.',
      note:'不管 + 多 + tính từ, 也/都……: dù … đến đâu cũng ….',pair:'不管……也……'}
   ]},

  {n:20,zh:'明明',py:'míngmíng',pos:'Phó từ',vn:'rõ ràng, rõ là',hv:'minh minh',em:'🔍',lesson:1,
   explain:['Biểu thị sự việc hiển nhiên, rõ ràng là như vậy. Trước hoặc sau vế có 明明 thường là câu hỏi ngược hoặc vế chuyển ý (却, 还, 怎么……).','Dùng nhiều trong khẩu ngữ — điểm ngữ pháp 2 của bài.'],
   usage:'明明 + (是) + sự thật, 却 / 还 / 怎么 / 为什么…… Phó từ đứng sau chủ ngữ, trước động từ (或 trước 是).',
   collo:['明明是','明明知道','明明看见了','明明说好了'],
   ex_zh:'你唱的明明是流行歌曲，哪里是京剧啊？',ex_py:'Nǐ chàng de míngmíng shì liúxíng gēqǔ, nǎlǐ shì jīngjù a?',ex_vn:'Cái cậu hát rõ ràng là nhạc pop, đâu phải kinh kịch?',
   exList:[
     {zh:'你唱的明明是流行歌曲，哪里是京剧啊？',py:'Nǐ chàng de míngmíng shì liúxíng gēqǔ, nǎlǐ shì jīngjù a?',vn:'Cái cậu hát rõ ràng là nhạc pop, đâu phải kinh kịch?'},
     {zh:'哼，太不像话了，明明是在欺负人。',py:'Hng, tài búxiànghuà le, míngmíng shì zài qīfu rén.',vn:'Hừ, quá lắm rồi, rõ ràng là đang bắt nạt người ta.'},
     {zh:'你明明知道他不喜欢吃辣的，为什么还点这个菜？',py:'Nǐ míngmíng zhīdào tā bù xǐhuan chī là de, wèi shénme hái diǎn zhège cài?',vn:'Cậu rõ ràng biết anh ấy không thích ăn cay, sao còn gọi món này?'}
   ],
   colloFull:[
     {zh:'明明是',py:'míngmíng shì',vn:'rõ ràng là'},
     {zh:'明明知道',py:'míngmíng zhīdào',vn:'rõ ràng biết'},
     {zh:'明明看见了',py:'míngmíng kànjiàn le',vn:'rõ ràng đã nhìn thấy'},
     {zh:'明明说好了',py:'míngmíng shuōhǎo le',vn:'rõ ràng đã hẹn rồi'},
     {zh:'明明……却……',py:'míngmíng……què……',vn:'rõ ràng … vậy mà …'}
   ],
   patterns:[
     {s:'明明 + sự thật，却 / 还 / 怎么……？',m:'Rõ ràng là …, vậy mà … (trách, phản bác)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Rõ ràng đã hẹn bảy giờ, sao đến giờ cậu ấy vẫn chưa tới?',answer:'明明说好了七点，他怎么到现在还没来？',answerPy:'Míngmíng shuōhǎole qī diǎn, tā zěnme dào xiànzài hái méi lái?',
      note:'Vế 明明 nêu sự thật, vế sau là câu hỏi 怎么 thể hiện sự bất mãn.',pair:'怎么……还没……'},
     {promptLang:'vi',prompt:'Cậu rõ ràng đã nhìn thấy tớ, vậy mà lại giả vờ không quen.',answer:'你明明看见我了，却假装不认识我。',answerPy:'Nǐ míngmíng kànjiàn wǒ le, què jiǎzhuāng bú rènshi wǒ.',
      note:'明明……却……: rõ ràng … vậy mà …; 假装 = giả vờ.',pair:'却'}
   ]},

  {n:21,zh:'欺负',py:'qīfu',pos:'Động từ',vn:'ăn hiếp, bắt nạt',hv:'khi phụ',em:'😣',lesson:1,
   explain:['Dùng sức mạnh, quyền thế… để chèn ép, làm nhục, đối xử bất công với người khác.','Hay dùng dạng bị động: 被(人)欺负.'],
   usage:'欺负 + người; 被……欺负; 欺负新人, 欺负弱小, 受欺负.',
   collo:['欺负人','被欺负','欺负新人','受欺负'],
   ex_zh:'明明是在欺负人。',ex_py:'Míngmíng shì zài qīfu rén.',ex_vn:'Rõ ràng là đang bắt nạt người ta.',
   exList:[
     {zh:'哼，太不像话了，明明是在欺负人。',py:'Hng, tài búxiànghuà le, míngmíng shì zài qīfu rén.',vn:'Hừ, quá lắm rồi, rõ ràng là đang bắt nạt người ta.'},
     {zh:'大孩子不应该欺负小孩子。',py:'Dà háizi bù yīnggāi qīfu xiǎo háizi.',vn:'Trẻ lớn không nên bắt nạt trẻ nhỏ.'},
     {zh:'他刚来的时候常被人欺负，现在大家都很尊重他。',py:'Tā gāng lái de shíhou cháng bèi rén qīfu, xiànzài dàjiā dōu hěn zūnzhòng tā.',vn:'Lúc mới đến cậu ấy hay bị bắt nạt, giờ thì ai cũng rất tôn trọng cậu.'}
   ],
   colloFull:[
     {zh:'欺负人',py:'qīfu rén',vn:'bắt nạt người'},
     {zh:'被欺负',py:'bèi qīfu',vn:'bị bắt nạt'},
     {zh:'欺负新人',py:'qīfu xīnrén',vn:'bắt nạt người mới'},
     {zh:'受欺负',py:'shòu qīfu',vn:'bị ức hiếp'},
     {zh:'欺负弱小',py:'qīfu ruòxiǎo',vn:'ức hiếp kẻ yếu'}
   ],
   patterns:[
     {s:'A 欺负 B / B 被 A 欺负',m:'A bắt nạt B / B bị A bắt nạt'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nếu ở trường bị bắt nạt, con nhất định phải nói với thầy cô.',answer:'如果在学校被人欺负，你一定要告诉老师。',answerPy:'Rúguǒ zài xuéxiào bèi rén qīfu, nǐ yídìng yào gàosu lǎoshī.',
      note:'Câu bị động 被 + 人 + 欺负; 一定要 = nhất định phải.',pair:'被'},
     {promptLang:'vi',prompt:'Đừng tưởng người mới dễ bắt nạt, thật ra họ rất có năng lực.',answer:'别以为新人好欺负，其实他们很有能力。',answerPy:'Bié yǐwéi xīnrén hǎo qīfu, qíshí tāmen hěn yǒu nénglì.',
      note:'以为 = tưởng (mà sai); 好 + V = dễ bị …; 其实 lật lại sự thật.',pair:'以为……其实……'}
   ]},

  {n:22,zh:'大不了',py:'dàbuliǎo',pos:'Phó từ',vn:'cùng lắm (thì), trường hợp xấu nhất',hv:'đại bất liễu',em:'🤷',lesson:1,
   explain:['Phó từ: "cùng lắm cũng chỉ là …" (= 最坏也不过). Tuy có khó khăn nhưng cuối cùng vẫn giải quyết được — dùng để trấn an hoặc tỏ thái độ bất cần. Khẩu ngữ.','Làm tính từ (thường dạng phủ định): 没什么大不了的 = chẳng có gì to tát.'],
   usage:'……，大不了 + phương án xấu nhất (再买一件 / 从头再来 / 辞职). 没什么大不了的.',
   collo:['大不了辞职','大不了从头再来','大不了再买一件','没什么大不了的'],
   ex_zh:'失败了不要紧，大不了从头再来。',ex_py:'Shībàile bú yàojǐn, dàbuliǎo cóngtóu zài lái.',ex_vn:'Thất bại cũng không sao, cùng lắm thì làm lại từ đầu.',
   exList:[
     {zh:'失败了不要紧，大不了从头再来。',py:'Shībàile bú yàojǐn, dàbuliǎo cóngtóu zài lái.',vn:'Thất bại cũng không sao, cùng lắm thì làm lại từ đầu.'},
     {zh:'别难过了，不就是衣服丢了吗，大不了再买一件。',py:'Bié nánguò le, bú jiù shì yīfu diū le ma, dàbuliǎo zài mǎi yí jiàn.',vn:'Đừng buồn nữa, chẳng qua là mất cái áo thôi mà, cùng lắm thì mua cái khác.'},
     {zh:'小林说：“明明是在欺负人，大不了辞职。”',py:'Xiǎo Lín shuō: "Míngmíng shì zài qīfu rén, dàbuliǎo cízhí."',vn:'Tiểu Lâm nói: "Rõ ràng là đang bắt nạt người ta, cùng lắm thì nghỉ việc."'}
   ],
   colloFull:[
     {zh:'大不了辞职',py:'dàbuliǎo cízhí',vn:'cùng lắm thì nghỉ việc'},
     {zh:'大不了从头再来',py:'dàbuliǎo cóngtóu zài lái',vn:'cùng lắm thì làm lại từ đầu'},
     {zh:'大不了再买一件',py:'dàbuliǎo zài mǎi yí jiàn',vn:'cùng lắm thì mua cái khác'},
     {zh:'没什么大不了的',py:'méi shénme dàbuliǎo de',vn:'chẳng có gì to tát'},
     {zh:'大不了重考',py:'dàbuliǎo chóngkǎo',vn:'cùng lắm thì thi lại'}
   ],
   patterns:[
     {s:'……(不要紧 / 没关系)，大不了 + phương án xấu nhất',m:'…, cùng lắm thì … (trấn an)'},
     {s:'没什么大不了的',m:'Chẳng có gì to tát'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Lỡ chuyến tàu cũng không sao, cùng lắm thì đi chuyến sau.',answer:'没赶上火车也没关系，大不了坐下一趟。',answerPy:'Méi gǎnshàng huǒchē yě méi guānxi, dàbuliǎo zuò xià yí tàng.',
      note:'大不了 đứng đầu vế sau, nêu phương án xấu nhất mà vẫn chấp nhận được.',pair:'也没关系'},
     {promptLang:'vi',prompt:'Dù lần này thi không đỗ cũng chẳng có gì to tát, cùng lắm sang năm thi lại.',answer:'即使这次没考上，也没什么大不了的，大不了明年再考。',answerPy:'Jíshǐ zhè cì méi kǎoshàng, yě méi shénme dàbuliǎo de, dàbuliǎo míngnián zài kǎo.',
      note:'即使……也……; 没什么大不了的 (tính từ) và 大不了 + V (phó từ) trong cùng câu.',pair:'即使……也……'}
   ]},

  {n:23,zh:'展示',py:'zhǎnshì',pos:'Động từ',vn:'thể hiện, trưng bày, phô diễn',hv:'triển thị',em:'🖼️',lesson:1,
   explain:['Bày ra cho người khác thấy rõ; thể hiện rõ ra: 展示才干, 展示魅力, 展示作品.','Tân ngữ thường là năng lực, phẩm chất, thành quả, sản phẩm.'],
   usage:'展示 + 才干 / 能力 / 魅力 / 风采 / 作品 / 成果; 向……展示…….',
   collo:['展示才干','展示魅力','展示作品','展示成果'],
   ex_zh:'这反而是我们可以展示自己才干的好机会。',ex_py:'Zhè fǎn\'ér shì wǒmen kěyǐ zhǎnshì zìjǐ cáigàn de hǎo jīhuì.',ex_vn:'Đây ngược lại là cơ hội tốt để chúng tôi thể hiện tài năng của mình.',
   exList:[
     {zh:'应该说这反而是我们可以展示自己才干的好机会。',py:'Yīnggāi shuō zhè fǎn\'ér shì wǒmen kěyǐ zhǎnshì zìjǐ cáigàn de hǎo jīhuì.',vn:'Phải nói rằng đây ngược lại là cơ hội tốt để chúng tôi thể hiện tài năng của mình.'},
     {zh:'这个过程，正是展示你人格魅力的时候。',py:'Zhège guòchéng, zhèng shì zhǎnshì nǐ réngé mèilì de shíhou.',vn:'Quá trình này chính là lúc thể hiện sức hút nhân cách của bạn.'},
     {zh:'学校门口展示着同学们的书法作品。',py:'Xuéxiào ménkǒu zhǎnshìzhe tóngxuémen de shūfǎ zuòpǐn.',vn:'Trước cổng trường trưng bày tác phẩm thư pháp của các bạn học sinh.'}
   ],
   colloFull:[
     {zh:'展示才干',py:'zhǎnshì cáigàn',vn:'thể hiện tài năng'},
     {zh:'展示魅力',py:'zhǎnshì mèilì',vn:'thể hiện sức hút'},
     {zh:'展示作品',py:'zhǎnshì zuòpǐn',vn:'trưng bày tác phẩm'},
     {zh:'展示成果',py:'zhǎnshì chéngguǒ',vn:'giới thiệu thành quả'},
     {zh:'向大家展示',py:'xiàng dàjiā zhǎnshì',vn:'thể hiện cho mọi người thấy'}
   ],
   patterns:[
     {s:'向 + người + 展示 + N',m:'Thể hiện / trưng bày … cho ai xem'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cuộc thi này là cơ hội tốt để các em thể hiện bản thân.',answer:'这次比赛是你们展示自己的好机会。',answerPy:'Zhè cì bǐsài shì nǐmen zhǎnshì zìjǐ de hǎo jīhuì.',
      note:'Cụm "主–谓–宾 + 的" làm định ngữ cho 机会.',pair:'……的好机会'},
     {promptLang:'vi',prompt:'Cô ấy không những thể hiện được năng lực mà còn thể hiện được sự tự tin.',answer:'她不仅展示了自己的能力，而且展示了自信。',answerPy:'Tā bùjǐn zhǎnshìle zìjǐ de nénglì, érqiě zhǎnshìle zìxìn.',
      note:'不仅……而且…… (= 不但……而且……, văn viết hơn).',pair:'不仅……而且……'}
   ]},

  {n:24,zh:'才干',py:'cáigàn',pos:'Danh từ',vn:'tài năng, năng lực (làm việc)',hv:'tài cán',em:'💡',lesson:1,
   explain:['Năng lực làm việc, khả năng xử lý công việc thực tế.','Thiên về năng lực làm việc, khác 才华 (tài hoa văn chương, nghệ thuật).'],
   usage:'有才干, 展示 / 施展 + 才干, 增长才干, 很有才干.',
   collo:['有才干','展示才干','施展才干','增长才干'],
   ex_zh:'这反而是我们可以展示自己才干的好机会。',ex_py:'Zhè fǎn\'ér shì wǒmen kěyǐ zhǎnshì zìjǐ cáigàn de hǎo jīhuì.',ex_vn:'Đây ngược lại là cơ hội tốt để chúng tôi thể hiện tài năng của mình.',
   exList:[
     {zh:'这反而是我们可以展示自己才干的好机会。',py:'Zhè fǎn\'ér shì wǒmen kěyǐ zhǎnshì zìjǐ cáigàn de hǎo jīhuì.',vn:'Đây ngược lại là cơ hội tốt để chúng tôi thể hiện tài năng của mình.'},
     {zh:'他虽然年轻，却很有才干。',py:'Tā suīrán niánqīng, què hěn yǒu cáigàn.',vn:'Anh ấy tuy còn trẻ nhưng rất có năng lực.'},
     {zh:'在实践中，年轻人的才干得到了增长。',py:'Zài shíjiàn zhōng, niánqīngrén de cáigàn dédàole zēngzhǎng.',vn:'Trong thực tiễn, năng lực của người trẻ đã được nâng lên.'}
   ],
   colloFull:[
     {zh:'有才干',py:'yǒu cáigàn',vn:'có năng lực'},
     {zh:'展示才干',py:'zhǎnshì cáigàn',vn:'thể hiện năng lực'},
     {zh:'施展才干',py:'shīzhǎn cáigàn',vn:'phát huy năng lực'},
     {zh:'增长才干',py:'zēngzhǎng cáigàn',vn:'nâng cao năng lực'},
     {zh:'才干出众',py:'cáigàn chūzhòng',vn:'tài năng xuất chúng'}
   ],
   patterns:[
     {s:'(很)有才干',m:'Có năng lực làm việc'},
     {s:'展示 / 施展 + (自己的)才干',m:'Thể hiện / phát huy năng lực'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ có thực sự bắt tay vào làm việc mới thể hiện được năng lực của một người.',answer:'只有真正开始工作，才能展示出一个人的才干。',answerPy:'Zhǐyǒu zhēnzhèng kāishǐ gōngzuò, cái néng zhǎnshì chū yí ge rén de cáigàn.',
      note:'只有……才……: điều kiện duy nhất; 展示出 = thể hiện ra.',pair:'只有……才……'},
     {promptLang:'vi',prompt:'Tuy anh ấy rất có năng lực nhưng chưa bao giờ khoe khoang.',answer:'尽管他很有才干，但是从来不吹牛。',answerPy:'Jǐnguǎn tā hěn yǒu cáigàn, dànshì cónglái bù chuīniú.',
      note:'尽管……但是……: mặc dù … nhưng …; ôn 吹牛 của bài.',pair:'尽管……但是……'}
   ]},

  {n:25,zh:'计较',py:'jìjiào',pos:'Động từ',vn:'tính toán, so đo, chấp nhặt',hv:'kế giảo',em:'🧮',lesson:1,
   explain:['So đo, tính toán thiệt hơn (thường về lợi ích nhỏ): 计较得失.','和 / 跟 + người + 计较 = chấp nhặt, tranh cãi với ai; thường dùng phủ định: 不计较, 别计较.'],
   usage:'不和 / 跟……计较; 计较个人得失; 斤斤计较 (chi li từng tí).',
   collo:['不计较','和他计较','计较得失','斤斤计较'],
   ex_zh:'我和小林决定不和他们计较。',ex_py:'Wǒ hé Xiǎo Lín juédìng bù hé tāmen jìjiào.',ex_vn:'Tôi và Tiểu Lâm quyết định không so đo với họ.',
   exList:[
     {zh:'我和小林决定不和他们计较，全力以赴投入工作。',py:'Wǒ hé Xiǎo Lín juédìng bù hé tāmen jìjiào, quánlì-yǐfù tóurù gōngzuò.',vn:'Tôi và Tiểu Lâm quyết định không so đo với họ, dốc toàn lực lao vào công việc.'},
     {zh:'他是个孩子，你别跟他计较了。',py:'Tā shì ge háizi, nǐ bié gēn tā jìjiào le.',vn:'Nó là trẻ con, anh đừng chấp nó nữa.'},
     {zh:'她做事从不计较个人得失。',py:'Tā zuòshì cóng bù jìjiào gèrén déshī.',vn:'Cô ấy làm việc chưa bao giờ tính toán thiệt hơn cho bản thân.'}
   ],
   colloFull:[
     {zh:'不计较',py:'bú jìjiào',vn:'không so đo'},
     {zh:'和他计较',py:'hé tā jìjiào',vn:'chấp nhặt với anh ta'},
     {zh:'计较得失',py:'jìjiào déshī',vn:'tính toán được mất'},
     {zh:'斤斤计较',py:'jīnjīn jìjiào',vn:'chi li từng tí'},
     {zh:'计较小事',py:'jìjiào xiǎoshì',vn:'so đo chuyện nhỏ'}
   ],
   patterns:[
     {s:'(不)和 / 跟 + người + 计较',m:'(Không) chấp nhặt với ai'},
     {s:'计较 + 得失 / 小事',m:'So đo điều gì'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bạn bè với nhau thì cần gì so đo chuyện nhỏ như vậy?',answer:'朋友之间，何必计较这样的小事呢？',answerPy:'Péngyou zhījiān, hébì jìjiào zhèyàng de xiǎoshì ne?',
      note:'何必……呢 = cần gì phải … (câu hỏi tu từ, ý khuyên).',pair:'何必……呢'},
     {promptLang:'vi',prompt:'Cậu ấy nhận việc khó nhất mà chẳng hề so đo, khiến mọi người rất cảm động.',answer:'他接了最难的工作，却一点儿也不计较，让大家很感动。',answerPy:'Tā jiēle zuì nán de gōngzuò, què yìdiǎnr yě bú jìjiào, ràng dàjiā hěn gǎndòng.',
      note:'一点儿也不 + V: chẳng … chút nào; 让 + người + cảm xúc.',pair:'一点儿也不……'}
   ]},

  {n:26,zh:'全力以赴',py:'quánlìyǐfù',pos:'Thành ngữ',vn:'dốc toàn lực, không tiếc công sức',hv:'toàn lực dĩ phó',em:'💪',lesson:1,
   explain:['Dồn hết sức lực vào làm một việc (以 = dùng, 赴 = đi tới, lao vào).','Làm trạng ngữ (全力以赴(地)+V) hoặc vị ngữ (我们一定全力以赴).'],
   usage:'全力以赴 + 投入 / 做好 / 准备; 对……全力以赴. Không thêm 很 phía trước.',
   collo:['全力以赴投入工作','全力以赴地准备','一定全力以赴','全力以赴完成'],
   ex_zh:'我和小林全力以赴投入工作。',ex_py:'Wǒ hé Xiǎo Lín quánlì-yǐfù tóurù gōngzuò.',ex_vn:'Tôi và Tiểu Lâm dốc toàn lực lao vào công việc.',
   exList:[
     {zh:'我和小林决定不和他们计较，全力以赴投入工作。',py:'Wǒ hé Xiǎo Lín juédìng bù hé tāmen jìjiào, quánlì-yǐfù tóurù gōngzuò.',vn:'Tôi và Tiểu Lâm quyết định không so đo với họ, dốc toàn lực lao vào công việc.'},
     {zh:'离高考只有一个月了，我们要全力以赴。',py:'Lí gāokǎo zhǐ yǒu yí ge yuè le, wǒmen yào quánlì-yǐfù.',vn:'Chỉ còn một tháng nữa là thi đại học, chúng ta phải dốc hết sức.'},
     {zh:'请您放心，这件事我们一定全力以赴。',py:'Qǐng nín fàngxīn, zhè jiàn shì wǒmen yídìng quánlì-yǐfù.',vn:'Xin ngài yên tâm, việc này chúng tôi nhất định dốc toàn lực.'}
   ],
   colloFull:[
     {zh:'全力以赴投入工作',py:'quánlì-yǐfù tóurù gōngzuò',vn:'dốc sức lao vào công việc'},
     {zh:'全力以赴地准备',py:'quánlì-yǐfù de zhǔnbèi',vn:'dốc sức chuẩn bị'},
     {zh:'一定全力以赴',py:'yídìng quánlì-yǐfù',vn:'nhất định dốc toàn lực'},
     {zh:'全力以赴完成',py:'quánlì-yǐfù wánchéng',vn:'dốc sức hoàn thành'},
     {zh:'全力以赴地比赛',py:'quánlì-yǐfù de bǐsài',vn:'thi đấu hết mình'}
   ],
   patterns:[
     {s:'全力以赴(地) + V',m:'Dốc toàn lực làm gì'},
     {s:'主语 + (一定 / 会) + 全力以赴',m:'Làm vị ngữ: sẽ dốc hết sức'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần chúng ta dốc toàn lực thì dù thua cũng không hối tiếc.',answer:'只要我们全力以赴，即使输了也不后悔。',answerPy:'Zhǐyào wǒmen quánlì-yǐfù, jíshǐ shūle yě bú hòuhuǐ.',
      note:'只要……(就)……; lồng 即使……也…… vào vế sau.',pair:'只要……即使……也……'},
     {promptLang:'vi',prompt:'Tuy thời gian rất gấp nhưng mọi người vẫn dốc sức hoàn thành nhiệm vụ.',answer:'虽然时间很紧，但大家仍然全力以赴地完成了任务。',answerPy:'Suīrán shíjiān hěn jǐn, dàn dàjiā réngrán quánlì-yǐfù de wánchéngle rènwu.',
      note:'Thành ngữ làm trạng ngữ + 地 + V; 仍然 = vẫn.',pair:'虽然……但……仍然'}
   ]},

  {n:27,zh:'怠慢',py:'dàimàn',pos:'Động từ',vn:'lạnh nhạt, thờ ơ (với người)',hv:'đãi mạn',em:'🥶',lesson:1,
   explain:['Đối xử lạnh nhạt, thiếu chu đáo, không nhiệt tình với người khác (khách, người đến nhờ việc).','Còn là lời khách sáo của chủ nhà: 怠慢了 = tiếp đón chưa chu đáo.'],
   usage:'怠慢 + 客人 / 客户; 不敢怠慢; 招待不周，怠慢了.',
   collo:['怠慢客人','不敢怠慢','怠慢了','被怠慢'],
   ex_zh:'我们不怠慢、不敷衍每一位客户。',ex_py:'Wǒmen bú dàimàn, bù fūyǎn měi yí wèi kèhù.',ex_vn:'Chúng tôi không lạnh nhạt, không qua loa với bất kỳ khách hàng nào.',
   exList:[
     {zh:'我们不怠慢、不敷衍每一位客户。',py:'Wǒmen bú dàimàn, bù fūyǎn měi yí wèi kèhù.',vn:'Chúng tôi không lạnh nhạt, không qua loa với bất kỳ khách hàng nào.'},
     {zh:'经理亲自来了，服务员一点儿也不敢怠慢。',py:'Jīnglǐ qīnzì lái le, fúwùyuán yìdiǎnr yě bù gǎn dàimàn.',vn:'Giám đốc đích thân đến, nhân viên phục vụ chẳng dám lơ là chút nào.'},
     {zh:'今天家里太乱了，怠慢了，请多包涵。',py:'Jīntiān jiā li tài luàn le, dàimàn le, qǐng duō bāohan.',vn:'Hôm nay nhà bừa quá, tiếp đón không chu đáo, mong anh bỏ qua cho.'}
   ],
   colloFull:[
     {zh:'怠慢客人',py:'dàimàn kèrén',vn:'lạnh nhạt với khách'},
     {zh:'不敢怠慢',py:'bù gǎn dàimàn',vn:'không dám lơ là'},
     {zh:'怠慢了',py:'dàimàn le',vn:'tiếp đón không chu đáo'},
     {zh:'被怠慢',py:'bèi dàimàn',vn:'bị đối xử lạnh nhạt'},
     {zh:'怠慢客户',py:'dàimàn kèhù',vn:'thờ ơ với khách hàng'}
   ],
   patterns:[
     {s:'(不敢 / 不能) + 怠慢 + người',m:'(Không dám) đối xử lạnh nhạt với ai'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Dù khách hàng mua ít hay nhiều, chúng ta đều không được lạnh nhạt với họ.',answer:'无论客户买得多还是少，我们都不能怠慢他们。',answerPy:'Wúlùn kèhù mǎi de duō háishi shǎo, wǒmen dōu bù néng dàimàn tāmen.',
      note:'无论 + A 还是 B, 都……: dù A hay B đều ….',pair:'无论……都……'},
     {promptLang:'vi',prompt:'Anh ấy cảm thấy mình bị lạnh nhạt nên không bao giờ đến cửa hàng đó nữa.',answer:'他觉得自己被怠慢了，所以再也不去那家店了。',answerPy:'Tā juéde zìjǐ bèi dàimàn le, suǒyǐ zài yě bú qù nà jiā diàn le.',
      note:'再也不 + V + 了: không bao giờ … nữa.',pair:'再也不……了'}
   ]},

  {n:28,zh:'敷衍',py:'fūyǎn',pos:'Động từ',vn:'làm lấy lệ, qua loa, hời hợt',hv:'phu diễn',em:'🙄',lesson:1,
   explain:['Làm việc hoặc đối xử với người một cách qua loa, không thật lòng, chỉ để đối phó cho xong.','Tân ngữ có thể là người (敷衍客户) hoặc việc (敷衍了事).'],
   usage:'敷衍 + 人; 敷衍了事 (làm cho xong chuyện); 别敷衍我; 敷衍的态度.',
   collo:['敷衍客户','敷衍了事','别敷衍我','敷衍的态度'],
   ex_zh:'我们不怠慢、不敷衍每一位客户。',ex_py:'Wǒmen bú dàimàn, bù fūyǎn měi yí wèi kèhù.',ex_vn:'Chúng tôi không lạnh nhạt, không qua loa với bất kỳ khách hàng nào.',
   exList:[
     {zh:'我们不怠慢、不敷衍每一位客户，想方设法做好每一单业务。',py:'Wǒmen bú dàimàn, bù fūyǎn měi yí wèi kèhù, xiǎngfāng-shèfǎ zuòhǎo měi yí dān yèwù.',vn:'Chúng tôi không lạnh nhạt, không qua loa với bất kỳ khách hàng nào, nghĩ đủ mọi cách làm tốt từng đơn.'},
     {zh:'你别用“随便”来敷衍我，到底想吃什么？',py:'Nǐ bié yòng "suíbiàn" lái fūyǎn wǒ, dàodǐ xiǎng chī shénme?',vn:'Cậu đừng lấy câu "tuỳ" để đối phó với tớ, rốt cuộc muốn ăn gì?'},
     {zh:'他写作业总是敷衍了事，错误特别多。',py:'Tā xiě zuòyè zǒngshì fūyǎn liǎoshì, cuòwù tèbié duō.',vn:'Cậu ấy làm bài tập lúc nào cũng làm cho xong chuyện, sai rất nhiều.'}
   ],
   colloFull:[
     {zh:'敷衍客户',py:'fūyǎn kèhù',vn:'đối phó qua loa với khách'},
     {zh:'敷衍了事',py:'fūyǎn liǎoshì',vn:'làm cho xong chuyện'},
     {zh:'别敷衍我',py:'bié fūyǎn wǒ',vn:'đừng đối phó với tôi'},
     {zh:'敷衍的态度',py:'fūyǎn de tàidu',vn:'thái độ hời hợt'},
     {zh:'敷衍几句',py:'fūyǎn jǐ jù',vn:'nói vài câu cho qua'}
   ],
   patterns:[
     {s:'用 + ……来敷衍 + người',m:'Lấy … để đối phó qua loa với ai'},
     {s:'敷衍了事',m:'Làm qua loa cho xong chuyện'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cô giáo liếc qua là biết bài văn này cậu ấy viết qua loa cho xong.',answer:'老师一看就知道这篇作文是他敷衍了事写的。',answerPy:'Lǎoshī yí kàn jiù zhīdào zhè piān zuòwén shì tā fūyǎn liǎoshì xiě de.',
      note:'一……就……; 是……的 nhấn mạnh cách thức đã xảy ra.',pair:'是……的'},
     {promptLang:'vi',prompt:'Thà nói thẳng là không biết, còn hơn nói vài câu cho qua với khách hàng.',answer:'宁可直接说不知道，也不要敷衍客户几句。',answerPy:'Nìngkě zhíjiē shuō bù zhīdào, yě bú yào fūyǎn kèhù jǐ jù.',
      note:'宁可 A，也不 B: thà A chứ không B.',pair:'宁可……也不……'}
   ]},

  {n:29,zh:'想方设法',py:'xiǎngfāng-shèfǎ',pos:'Thành ngữ',vn:'nghĩ đủ mọi cách, tìm mọi cách',hv:'tưởng phương thiết pháp',em:'🧠',lesson:1,
   explain:['Nghĩ mọi cách, tìm đủ mọi biện pháp để làm được việc gì.','Làm trạng ngữ đứng trước động từ: 想方设法 + V.'],
   usage:'想方设法 + (地) + 做好 / 解决 / 帮助 / 满足…….',
   collo:['想方设法做好','想方设法解决','想方设法帮助','想方设法地'],
   ex_zh:'我们想方设法做好每一单业务。',ex_py:'Wǒmen xiǎngfāng-shèfǎ zuòhǎo měi yí dān yèwù.',ex_vn:'Chúng tôi nghĩ đủ mọi cách làm tốt từng đơn nghiệp vụ.',
   exList:[
     {zh:'我们想方设法做好每一单业务，多忙都不凑合。',py:'Wǒmen xiǎngfāng-shèfǎ zuòhǎo měi yí dān yèwù, duō máng dōu bú còuhe.',vn:'Chúng tôi nghĩ đủ mọi cách làm tốt từng đơn, bận mấy cũng không làm cho có.'},
     {zh:'每当我遇到困难时，他总是想方设法帮助我。',py:'Měi dāng wǒ yùdào kùnnan shí, tā zǒngshì xiǎngfāng-shèfǎ bāngzhù wǒ.',vn:'Mỗi khi tôi gặp khó khăn, anh ấy luôn tìm mọi cách giúp tôi.'},
     {zh:'妈妈想方设法让挑食的弟弟多吃蔬菜。',py:'Māma xiǎngfāng-shèfǎ ràng tiāoshí de dìdi duō chī shūcài.',vn:'Mẹ tìm đủ mọi cách để cậu em kén ăn ăn nhiều rau.'}
   ],
   colloFull:[
     {zh:'想方设法做好',py:'xiǎngfāng-shèfǎ zuòhǎo',vn:'tìm mọi cách làm tốt'},
     {zh:'想方设法解决',py:'xiǎngfāng-shèfǎ jiějué',vn:'tìm mọi cách giải quyết'},
     {zh:'想方设法帮助',py:'xiǎngfāng-shèfǎ bāngzhù',vn:'tìm mọi cách giúp đỡ'},
     {zh:'想方设法地',py:'xiǎngfāng-shèfǎ de',vn:'bằng mọi cách'},
     {zh:'想方设法赚钱',py:'xiǎngfāng-shèfǎ zhuànqián',vn:'tìm đủ cách kiếm tiền'}
   ],
   patterns:[
     {s:'想方设法 + V',m:'Tìm mọi cách làm gì'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Để giúp tôi theo kịp các bạn, cô giáo đã tìm đủ mọi cách.',answer:'为了帮我赶上同学们，老师想方设法。',answerPy:'Wèile bāng wǒ gǎnshàng tóngxuémen, lǎoshī xiǎngfāng-shèfǎ.',
      note:'为了 + mục đích đứng đầu câu; 想方设法 có thể làm vị ngữ.',pair:'为了'},
     {promptLang:'vi',prompt:'Dù gặp khó khăn gì, cậu ấy cũng đều tìm mọi cách giải quyết.',answer:'不管遇到什么困难，他都会想方设法解决。',answerPy:'Bùguǎn yùdào shénme kùnnan, tā dōu huì xiǎngfāng-shèfǎ jiějué.',
      note:'不管 + đại từ nghi vấn, 都……: dù … gì cũng ….',pair:'不管……都……'}
   ]},

  {n:30,zh:'凑合',py:'còuhe',pos:'Động từ',vn:'tạm bợ, làm cho có, làm miễn cưỡng',hv:'thấu hợp',em:'🩹',lesson:1,
   explain:['Làm tạm, dùng tạm cho qua, không đòi hỏi cao: 凑合着用, 凑合一晚.','Trong bài: làm cho có, làm không thật lòng (多忙都不凑合). Còn làm tính từ: tàm tạm, cũng được (还凑合).'],
   usage:'凑合着 + V (用 / 吃 / 住); 凑合一下; 还凑合; 不凑合. Khẩu ngữ.',
   collo:['凑合着用','凑合一晚','还凑合','不凑合'],
   ex_zh:'我们多忙都不凑合。',ex_py:'Wǒmen duō máng dōu bú còuhe.',ex_vn:'Chúng tôi bận mấy cũng không làm qua loa cho có.',
   exList:[
     {zh:'我们想方设法做好每一单业务，多忙都不凑合。',py:'Wǒmen xiǎngfāng-shèfǎ zuòhǎo měi yí dān yèwù, duō máng dōu bú còuhe.',vn:'Chúng tôi nghĩ đủ mọi cách làm tốt từng đơn, bận mấy cũng không làm cho có.'},
     {zh:'没有床，只有一张沙发，你就凑合一晚吧。',py:'Méiyǒu chuáng, zhǐ yǒu yì zhāng shāfā, nǐ jiù còuhe yì wǎn ba.',vn:'Không có giường, chỉ có một cái sofa, cậu ngủ tạm một đêm nhé.'},
     {zh:'这台电脑虽然旧了，但还能凑合着用。',py:'Zhè tái diànnǎo suīrán jiù le, dàn hái néng còuhezhe yòng.',vn:'Cái máy tính này tuy cũ rồi nhưng vẫn dùng tạm được.'}
   ],
   colloFull:[
     {zh:'凑合着用',py:'còuhezhe yòng',vn:'dùng tạm'},
     {zh:'凑合一晚',py:'còuhe yì wǎn',vn:'ngủ tạm một đêm'},
     {zh:'还凑合',py:'hái còuhe',vn:'cũng tàm tạm'},
     {zh:'不凑合',py:'bú còuhe',vn:'không làm cho có'},
     {zh:'凑合着吃',py:'còuhezhe chī',vn:'ăn tạm'}
   ],
   patterns:[
     {s:'凑合着 + V',m:'Làm gì đó tạm cho qua'},
     {s:'……还凑合',m:'… cũng tàm tạm'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tủ lạnh chỉ còn ít mì, chúng ta ăn tạm một bữa vậy.',answer:'冰箱里只剩下一点儿面条，我们就凑合着吃一顿吧。',answerPy:'Bīngxiāng li zhǐ shèngxià yìdiǎnr miàntiáo, wǒmen jiù còuhezhe chī yí dùn ba.',
      note:'凑合着 + V (V着 + V: cách thức); 吧 cuối câu = đề nghị.',pair:'V着 + V'},
     {promptLang:'vi',prompt:'Việc quan trọng thế này thì không thể làm qua loa cho có được.',answer:'这么重要的事，千万不能凑合。',answerPy:'Zhème zhòngyào de shì, qiānwàn bù néng còuhe.',
      note:'千万 + 不能 / 别: nhất thiết không được.',pair:'千万'}
   ]},

  {n:31,zh:'忙碌',py:'mánglù',pos:'Tính từ',vn:'bận rộn, tất bật',hv:'mang lục',em:'⏳',lesson:1,
   explain:['Bận rộn, luôn tay không nghỉ (sắc thái văn viết hơn 忙).','Có thể làm định ngữ (忙碌的生活), vị ngữ (很忙碌), trạng ngữ (忙碌地工作) hoặc danh từ hoá (忙碌中).'],
   usage:'忙碌的一天, 忙碌中, 忙碌地工作, 忙忙碌碌.',
   collo:['忙碌的一天','忙碌中','忙碌地工作','忙忙碌碌'],
   ex_zh:'忙碌中，时光过得飞快。',ex_py:'Mánglù zhōng, shíguāng guò de fēikuài.',ex_vn:'Trong bận rộn, thời gian trôi qua thật nhanh.',
   exList:[
     {zh:'忙碌中，时光过得飞快。',py:'Mánglù zhōng, shíguāng guò de fēikuài.',vn:'Trong bận rộn, thời gian trôi qua thật nhanh.'},
     {zh:'虽然很忙碌，却享受到了工作的快乐。',py:'Suīrán hěn mánglù, què xiǎngshòu dàole gōngzuò de kuàilè.',vn:'Tuy rất bận rộn nhưng lại tận hưởng được niềm vui trong công việc.'},
     {zh:'忙碌了一天，回到家只想好好睡一觉。',py:'Mánglùle yì tiān, huídào jiā zhǐ xiǎng hǎohāo shuì yí jiào.',vn:'Bận rộn cả ngày, về đến nhà chỉ muốn ngủ một giấc thật ngon.'}
   ],
   colloFull:[
     {zh:'忙碌的一天',py:'mánglù de yì tiān',vn:'một ngày bận rộn'},
     {zh:'忙碌中',py:'mánglù zhōng',vn:'trong lúc bận rộn'},
     {zh:'忙碌地工作',py:'mánglù de gōngzuò',vn:'làm việc tất bật'},
     {zh:'忙忙碌碌',py:'mángmáng-lùlù',vn:'tất ba tất bật'},
     {zh:'忙碌的生活',py:'mánglù de shēnghuó',vn:'cuộc sống bận rộn'}
   ],
   patterns:[
     {s:'忙碌中，……',m:'Trong bận rộn, …'},
     {s:'忙碌了 + thời lượng',m:'Bận rộn suốt …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cuộc sống dù bận rộn đến đâu cũng nên dành thời gian cho gia đình.',answer:'生活再忙碌，也应该留些时间陪家人。',answerPy:'Shēnghuó zài mánglù, yě yīnggāi liú xiē shíjiān péi jiārén.',
      note:'再 + tính từ, 也……: dù … đến mấy cũng ….',pair:'再……也……'},
     {promptLang:'vi',prompt:'Tất bật cả tuần, cuối cùng chúng tôi cũng hoàn thành chỉ tiêu.',answer:'忙碌了一个星期，我们终于完成了指标。',answerPy:'Mánglùle yí ge xīngqī, wǒmen zhōngyú wánchéngle zhǐbiāo.',
      note:'Động từ/tính từ + 了 + thời lượng; 终于 = cuối cùng.',pair:'终于'}
   ]},

  {n:32,zh:'时光',py:'shíguāng',pos:'Danh từ',vn:'thời gian, quãng thời gian',hv:'thời quang',em:'⌛',lesson:1,
   explain:['Thời gian, năm tháng (sắc thái văn chương, thường gắn với cảm xúc).','Hay dùng: 时光飞逝, 美好的时光, 时光过得飞快, 中学时光.'],
   usage:'时光 + 过得飞快 / 飞逝; 美好 / 快乐 / 中学 + 时光. Không dùng cho giờ giấc cụ thể (không nói 时光是三点).',
   collo:['时光飞逝','美好时光','中学时光','时光过得飞快'],
   ex_zh:'忙碌中，时光过得飞快。',ex_py:'Mánglù zhōng, shíguāng guò de fēikuài.',ex_vn:'Trong bận rộn, thời gian trôi qua thật nhanh.',
   exList:[
     {zh:'忙碌中，时光过得飞快，我们的业务能力得到了飞跃式的提高。',py:'Mánglù zhōng, shíguāng guò de fēikuài, wǒmen de yèwù nénglì dédàole fēiyuè shì de tígāo.',vn:'Trong bận rộn, thời gian trôi thật nhanh, năng lực nghiệp vụ của chúng tôi được nâng cao vượt bậc.'},
     {zh:'我永远忘不了和你们在一起的美好时光。',py:'Wǒ yǒngyuǎn wàng bu liǎo hé nǐmen zài yìqǐ de měihǎo shíguāng.',vn:'Tớ mãi mãi không quên được quãng thời gian tươi đẹp bên các cậu.'},
     {zh:'中学时光一去不复返，我们要好好珍惜。',py:'Zhōngxué shíguāng yí qù bú fù fǎn, wǒmen yào hǎohāo zhēnxī.',vn:'Thời trung học qua rồi không trở lại, chúng ta phải trân trọng.'}
   ],
   colloFull:[
     {zh:'时光飞逝',py:'shíguāng fēishì',vn:'thời gian trôi nhanh'},
     {zh:'美好时光',py:'měihǎo shíguāng',vn:'quãng thời gian tươi đẹp'},
     {zh:'中学时光',py:'zhōngxué shíguāng',vn:'thời trung học'},
     {zh:'时光过得飞快',py:'shíguāng guò de fēikuài',vn:'thời gian trôi rất nhanh'},
     {zh:'珍惜时光',py:'zhēnxī shíguāng',vn:'trân trọng thời gian'}
   ],
   patterns:[
     {s:'时光 + 过得 + 飞快 / 真快',m:'Thời gian trôi nhanh'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Thời gian trôi nhanh quá, chớp mắt chúng ta đã sắp tốt nghiệp rồi.',answer:'时光过得真快，一转眼我们就要毕业了。',answerPy:'Shíguāng guò de zhēn kuài, yì zhuǎnyǎn wǒmen jiù yào bìyè le.',
      note:'就要……了: sắp … rồi; 一转眼 = chớp mắt.',pair:'就要……了'},
     {promptLang:'vi',prompt:'Chính vì thời gian không quay lại nên chúng ta càng phải trân trọng hiện tại.',answer:'正因为时光不会倒流，我们才更要珍惜现在。',answerPy:'Zhèng yīnwèi shíguāng bú huì dàoliú, wǒmen cái gèng yào zhēnxī xiànzài.',
      note:'正因为……才……: chính vì … nên mới ….',pair:'正因为……才……'}
   ]},

  {n:33,zh:'飞跃',py:'fēiyuè',pos:'Động từ',vn:'vượt bậc, nhảy vọt',hv:'phi dược',em:'🚀',lesson:1,
   explain:['Bay vọt lên; nghĩa bóng: phát triển, tiến bộ vượt bậc trong thời gian ngắn.','Hay làm danh từ / định ngữ: 飞跃式的提高, 实现了飞跃, 巨大的飞跃.'],
   usage:'飞跃式的 + 提高 / 发展; 实现 / 有了 + 飞跃; 飞跃发展.',
   collo:['飞跃式的提高','实现飞跃','巨大的飞跃','飞跃发展'],
   ex_zh:'我们的业务能力得到了飞跃式的提高。',ex_py:'Wǒmen de yèwù nénglì dédàole fēiyuè shì de tígāo.',ex_vn:'Năng lực nghiệp vụ của chúng tôi được nâng cao vượt bậc.',
   exList:[
     {zh:'我们的业务能力得到了飞跃式的提高，点名找我们的客户越来越多。',py:'Wǒmen de yèwù nénglì dédàole fēiyuè shì de tígāo, diǎnmíng zhǎo wǒmen de kèhù yuè lái yuè duō.',vn:'Năng lực nghiệp vụ của chúng tôi được nâng cao vượt bậc, khách chỉ đích danh tìm chúng tôi ngày càng nhiều.'},
     {zh:'这几年，家乡的经济有了飞跃发展。',py:'Zhè jǐ nián, jiāxiāng de jīngjì yǒule fēiyuè fāzhǎn.',vn:'Mấy năm nay kinh tế quê tôi phát triển vượt bậc.'},
     {zh:'从不会说到能流利交流，他的汉语实现了一次飞跃。',py:'Cóng bú huì shuō dào néng liúlì jiāoliú, tā de Hànyǔ shíxiànle yí cì fēiyuè.',vn:'Từ chỗ không biết nói đến giao tiếp lưu loát, tiếng Trung của cậu ấy đã có bước nhảy vọt.'}
   ],
   colloFull:[
     {zh:'飞跃式的提高',py:'fēiyuè shì de tígāo',vn:'sự nâng cao vượt bậc'},
     {zh:'实现飞跃',py:'shíxiàn fēiyuè',vn:'tạo bước nhảy vọt'},
     {zh:'巨大的飞跃',py:'jùdà de fēiyuè',vn:'bước nhảy vọt lớn'},
     {zh:'飞跃发展',py:'fēiyuè fāzhǎn',vn:'phát triển vượt bậc'},
     {zh:'质的飞跃',py:'zhì de fēiyuè',vn:'bước nhảy về chất'}
   ],
   patterns:[
     {s:'……得到了飞跃式的提高',m:'… được nâng cao vượt bậc'},
     {s:'从 A 到 B，实现了飞跃',m:'Từ A đến B, tạo được bước nhảy vọt'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nhờ luyện nghe mỗi ngày, trình độ nghe của tôi được nâng lên vượt bậc.',answer:'由于每天练习听力，我的听力水平得到了飞跃式的提高。',answerPy:'Yóuyú měi tiān liànxí tīnglì, wǒ de tīnglì shuǐpíng dédàole fēiyuè shì de tígāo.',
      note:'由于 + nguyên nhân (văn viết); 得到 + 提高 (danh từ hoá động từ).',pair:'由于'},
     {promptLang:'vi',prompt:'Chỉ khi tích luỹ đủ thì mới có thể tạo ra bước nhảy vọt.',answer:'只有积累足够了，才能实现飞跃。',answerPy:'Zhǐyǒu jīlěi zúgòu le, cái néng shíxiàn fēiyuè.',
      note:'只有……才……: điều kiện cần duy nhất.',pair:'只有……才……'}
   ]},

  {n:34,zh:'投诉',py:'tóusù',pos:'Động từ',vn:'khiếu nại, phàn nàn (với cơ quan có trách nhiệm)',hv:'đầu tố',em:'📢',lesson:1,
   explain:['(Khách hàng, người dân) phản ánh, khiếu nại với cơ quan hoặc người có trách nhiệm về dịch vụ, sản phẩm, nhân viên.','Cũng làm danh từ: 接到投诉, 处理投诉.'],
   usage:'投诉 + người / 公司; 向……投诉; 接到 / 处理 + 投诉; 投诉电话.',
   collo:['投诉赵姐','向经理投诉','处理投诉','接到投诉'],
   ex_zh:'客户投诉赵姐了，你们处理一下吧。',ex_py:'Kèhù tóusù Zhào jiě le, nǐmen chǔlǐ yíxià ba.',ex_vn:'Khách hàng khiếu nại chị Triệu rồi, các cậu xử lý một chút nhé.',
   exList:[
     {zh:'客户投诉赵姐了，你们处理一下吧。',py:'Kèhù tóusù Zhào jiě le, nǐmen chǔlǐ yíxià ba.',vn:'Khách hàng khiếu nại chị Triệu rồi, các cậu xử lý một chút nhé.'},
     {zh:'快递三天还没到，我打电话向公司投诉了。',py:'Kuàidì sān tiān hái méi dào, wǒ dǎ diànhuà xiàng gōngsī tóusù le.',vn:'Hàng chuyển phát ba ngày chưa tới, tôi đã gọi điện khiếu nại với công ty.'},
     {zh:'这个月我们没有接到一个投诉。',py:'Zhège yuè wǒmen méiyǒu jiēdào yí ge tóusù.',vn:'Tháng này chúng tôi không nhận được một khiếu nại nào.'}
   ],
   colloFull:[
     {zh:'投诉赵姐',py:'tóusù Zhào jiě',vn:'khiếu nại chị Triệu'},
     {zh:'向经理投诉',py:'xiàng jīnglǐ tóusù',vn:'khiếu nại với giám đốc'},
     {zh:'处理投诉',py:'chǔlǐ tóusù',vn:'xử lý khiếu nại'},
     {zh:'接到投诉',py:'jiēdào tóusù',vn:'nhận được khiếu nại'},
     {zh:'投诉电话',py:'tóusù diànhuà',vn:'đường dây khiếu nại'}
   ],
   patterns:[
     {s:'向 + nơi/người + 投诉 (+ 问题)',m:'Khiếu nại với ai'},
     {s:'A 投诉 B',m:'A khiếu nại (về) B'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nếu phục vụ không tốt, khách hàng có thể khiếu nại với giám đốc.',answer:'要是服务不好，客户可以向经理投诉。',answerPy:'Yàoshi fúwù bù hǎo, kèhù kěyǐ xiàng jīnglǐ tóusù.',
      note:'向 + người + 投诉: giới từ 向 chỉ đối tượng tiếp nhận.',pair:'向'},
     {promptLang:'vi',prompt:'Anh ta bị khách khiếu nại mấy lần, cuối cùng bị công ty cho nghỉ việc.',answer:'他被客户投诉了好几次，最后被公司辞退了。',answerPy:'Tā bèi kèhù tóusùle hǎo jǐ cì, zuìhòu bèi gōngsī cítuì le.',
      note:'Hai lần bị động 被; 辞退 = cho thôi việc.',pair:'被'}
   ]},

  {n:35,zh:'激情',py:'jīqíng',pos:'Danh từ',vn:'nhiệt huyết, cảm xúc mãnh liệt',hv:'kích tình',em:'🔥',lesson:1,
   explain:['Tình cảm mạnh mẽ, sôi nổi, đầy nhiệt huyết.','Hay dùng: 充满激情, 工作激情, 激情地 + V.'],
   usage:'充满激情, 富有激情, 失去激情, 对……充满激情; 充满激情地 + V.',
   collo:['充满激情','工作激情','失去激情','富有激情'],
   ex_zh:'我们每天都充满激情地工作。',ex_py:'Wǒmen měi tiān dōu chōngmǎn jīqíng de gōngzuò.',ex_vn:'Ngày nào chúng tôi cũng làm việc tràn đầy nhiệt huyết.',
   exList:[
     {zh:'我们每天都充满激情地工作，享受着工作的快乐。',py:'Wǒmen měi tiān dōu chōngmǎn jīqíng de gōngzuò, xiǎngshòuzhe gōngzuò de kuàilè.',vn:'Ngày nào chúng tôi cũng làm việc tràn đầy nhiệt huyết, tận hưởng niềm vui công việc.'},
     {zh:'同事小张对待工作充满激情。',py:'Tóngshì Xiǎo Zhāng duìdài gōngzuò chōngmǎn jīqíng.',vn:'Đồng nghiệp Tiểu Trương làm việc đầy nhiệt huyết.'},
     {zh:'做同样的工作久了，很多人会慢慢失去激情。',py:'Zuò tóngyàng de gōngzuò jiǔ le, hěn duō rén huì mànmàn shīqù jīqíng.',vn:'Làm một việc lâu ngày, nhiều người sẽ dần mất nhiệt huyết.'}
   ],
   colloFull:[
     {zh:'充满激情',py:'chōngmǎn jīqíng',vn:'tràn đầy nhiệt huyết'},
     {zh:'工作激情',py:'gōngzuò jīqíng',vn:'nhiệt huyết công việc'},
     {zh:'失去激情',py:'shīqù jīqíng',vn:'mất nhiệt huyết'},
     {zh:'富有激情',py:'fùyǒu jīqíng',vn:'giàu nhiệt huyết'},
     {zh:'激情四射',py:'jīqíng sìshè',vn:'bùng nổ nhiệt huyết'}
   ],
   patterns:[
     {s:'充满激情地 + V',m:'Làm gì với đầy nhiệt huyết'},
     {s:'对 + N + 充满激情',m:'Đầy nhiệt huyết với …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ khi yêu công việc thì mới có thể luôn giữ được nhiệt huyết.',answer:'只有热爱工作，才能一直保持激情。',answerPy:'Zhǐyǒu rè\'ài gōngzuò, cái néng yìzhí bǎochí jīqíng.',
      note:'只有……才……; 保持激情 = giữ nhiệt huyết.',pair:'只有……才……'},
     {promptLang:'vi',prompt:'Thầy ấy đã dạy ba mươi năm mà vẫn tràn đầy nhiệt huyết với nghề.',answer:'他教了三十年书，对教学仍然充满激情。',answerPy:'Tā jiāole sānshí nián shū, duì jiàoxué réngrán chōngmǎn jīqíng.',
      note:'Động từ li hợp 教书: 教了三十年书; 仍然 = vẫn.',pair:'对……'}
   ]},

  {n:36,zh:'年度',py:'niándù',pos:'Danh từ',vn:'năm (tính theo kỳ công tác), hằng năm',hv:'niên độ',em:'🗓️',lesson:1,
   explain:['Một năm tính theo kỳ làm việc, kế toán, học tập (có thể không trùng năm dương lịch).','Hay làm định ngữ: 年度考核, 年度总结, 年度计划, 年度人物.'],
   usage:'年度 + 考核 / 总结 / 计划 / 预算 / 最佳员工; 本年度, 上一年度.',
   collo:['年度考核','年度总结','年度计划','本年度'],
   ex_zh:'年度考核，我和小林的敬业精神受到了表扬。',ex_py:'Niándù kǎohé, wǒ hé Xiǎo Lín de jìngyè jīngshén shòudàole biǎoyáng.',ex_vn:'Trong đợt đánh giá cuối năm, tinh thần tận tuỵ của tôi và Tiểu Lâm được khen ngợi.',
   exList:[
     {zh:'年度考核，我和小林的敬业精神受到了表扬。',py:'Niándù kǎohé, wǒ hé Xiǎo Lín de jìngyè jīngshén shòudàole biǎoyáng.',vn:'Trong đợt đánh giá cuối năm, tinh thần tận tuỵ của tôi và Tiểu Lâm được khen ngợi.'},
     {zh:'每到年底，各部门都要写年度总结。',py:'Měi dào niándǐ, gè bùmén dōu yào xiě niándù zǒngjié.',vn:'Cứ đến cuối năm, các phòng ban đều phải viết tổng kết năm.'},
     {zh:'她被评为本年度最佳员工。',py:'Tā bèi píngwéi běn niándù zuìjiā yuángōng.',vn:'Cô ấy được bình chọn là nhân viên xuất sắc nhất năm nay.'}
   ],
   colloFull:[
     {zh:'年度考核',py:'niándù kǎohé',vn:'đánh giá hằng năm'},
     {zh:'年度总结',py:'niándù zǒngjié',vn:'tổng kết năm'},
     {zh:'年度计划',py:'niándù jìhuà',vn:'kế hoạch năm'},
     {zh:'本年度',py:'běn niándù',vn:'năm nay (năm công tác này)'},
     {zh:'年度最佳',py:'niándù zuìjiā',vn:'xuất sắc nhất năm'}
   ],
   patterns:[
     {s:'年度 + 考核 / 总结 / 计划',m:'Đánh giá / tổng kết / kế hoạch năm'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Kế hoạch năm của công ty đã được chốt, tháng sau bắt đầu thực hiện.',answer:'公司的年度计划已经确定了，下个月开始执行。',answerPy:'Gōngsī de niándù jìhuà yǐjīng quèdìng le, xià ge yuè kāishǐ zhíxíng.',
      note:'确定 (HSK 5) = chốt, xác định; 执行 = thực hiện (ôn bài 5).',pair:'已经……了'},
     {promptLang:'vi',prompt:'Nhờ có thành tích xuất sắc, cậu ấy được bình chọn là học sinh tiêu biểu của năm.',answer:'由于成绩优秀，他被评为年度优秀学生。',answerPy:'Yóuyú chéngjì yōuxiù, tā bèi píngwéi niándù yōuxiù xuésheng.',
      note:'被评为 = được bình chọn là; 由于 nêu nguyên nhân.',pair:'被评为'}
   ]},

  {n:37,zh:'考核',py:'kǎohé',pos:'Động từ',vn:'kiểm tra, đánh giá (năng lực, thành tích)',hv:'khảo hạch',em:'📝',lesson:1,
   explain:['Kiểm tra, đánh giá năng lực, thành tích làm việc của nhân viên, học viên theo tiêu chuẩn nhất định.','Cũng làm danh từ: 年度考核, 通过考核.'],
   usage:'考核 + 员工 / 成绩; 通过 / 参加 + 考核; 考核标准, 考核结果.',
   collo:['年度考核','通过考核','考核标准','考核员工'],
   ex_zh:'年度考核，我和小林的工作态度受到了表扬。',ex_py:'Niándù kǎohé, wǒ hé Xiǎo Lín de gōngzuò tàidu shòudàole biǎoyáng.',ex_vn:'Trong đợt đánh giá cuối năm, thái độ làm việc của tôi và Tiểu Lâm được khen ngợi.',
   exList:[
     {zh:'年度考核，我和小林兢兢业业的工作态度受到了表扬。',py:'Niándù kǎohé, wǒ hé Xiǎo Lín jīngjīng-yèyè de gōngzuò tàidu shòudàole biǎoyáng.',vn:'Trong đợt đánh giá cuối năm, thái độ làm việc cẩn trọng chăm chỉ của tôi và Tiểu Lâm được khen ngợi.'},
     {zh:'新员工要通过三个月的考核才能转正。',py:'Xīn yuángōng yào tōngguò sān ge yuè de kǎohé cái néng zhuǎnzhèng.',vn:'Nhân viên mới phải qua ba tháng đánh giá mới được vào biên chế chính thức.'},
     {zh:'公司的考核标准很严格，不能凑合。',py:'Gōngsī de kǎohé biāozhǔn hěn yángé, bù néng còuhe.',vn:'Tiêu chuẩn đánh giá của công ty rất nghiêm, không thể làm qua loa.'}
   ],
   colloFull:[
     {zh:'年度考核',py:'niándù kǎohé',vn:'đánh giá hằng năm'},
     {zh:'通过考核',py:'tōngguò kǎohé',vn:'qua được kỳ đánh giá'},
     {zh:'考核标准',py:'kǎohé biāozhǔn',vn:'tiêu chuẩn đánh giá'},
     {zh:'考核员工',py:'kǎohé yuángōng',vn:'đánh giá nhân viên'},
     {zh:'考核结果',py:'kǎohé jiéguǒ',vn:'kết quả đánh giá'}
   ],
   patterns:[
     {s:'通过 + ……的考核',m:'Qua được đợt đánh giá …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ khi vượt qua đợt đánh giá thì bạn mới được lên chức.',answer:'只有通过考核，你才能升职。',answerPy:'Zhǐyǒu tōngguò kǎohé, nǐ cái néng shēngzhí.',
      note:'只有……才……; 升职 = thăng chức.',pair:'只有……才……'},
     {promptLang:'vi',prompt:'Kết quả đánh giá chưa ra, cậu đừng lo hão nữa.',answer:'考核结果还没出来，你就别瞎担心了。',answerPy:'Kǎohé jiéguǒ hái méi chūlái, nǐ jiù bié xiā dānxīn le.',
      note:'瞎 + động từ = làm vô ích (ôn HSK 5 bài 7).',pair:'瞎 + V'}
   ]},

  {n:38,zh:'敬业',py:'jìngyè',pos:'Động từ',vn:'yêu nghề, tận tuỵ với công việc',hv:'kính nghiệp',em:'🏅',lesson:1,
   explain:['Tôn trọng và hết lòng với công việc, nghề nghiệp của mình.','Thường làm vị ngữ (他很敬业) hoặc định ngữ (敬业精神).'],
   usage:'很敬业, 敬业精神, 爱岗敬业, 非常敬业. Có thể đi với 很 (dùng như tính từ).',
   collo:['很敬业','敬业精神','爱岗敬业','敬业的员工'],
   ex_zh:'同事小张非常敬业。',ex_py:'Tóngshì Xiǎo Zhāng fēicháng jìngyè.',ex_vn:'Đồng nghiệp Tiểu Trương rất tận tuỵ với công việc.',
   exList:[
     {zh:'年度考核，我和小林的敬业精神受到了表扬。',py:'Niándù kǎohé, wǒ hé Xiǎo Lín de jìngyè jīngshén shòudàole biǎoyáng.',vn:'Trong đợt đánh giá cuối năm, tinh thần tận tuỵ của tôi và Tiểu Lâm được khen ngợi.'},
     {zh:'同事小张非常敬业，他对待工作充满激情。',py:'Tóngshì Xiǎo Zhāng fēicháng jìngyè, tā duìdài gōngzuò chōngmǎn jīqíng.',vn:'Đồng nghiệp Tiểu Trương rất tận tuỵ, anh ấy làm việc tràn đầy nhiệt huyết.'},
     {zh:'王老师生病了还坚持来上课，真是太敬业了。',py:'Wáng lǎoshī shēngbìng le hái jiānchí lái shàngkè, zhēn shì tài jìngyè le.',vn:'Thầy Vương ốm mà vẫn cố đến lên lớp, thật quá tận tuỵ.'}
   ],
   colloFull:[
     {zh:'很敬业',py:'hěn jìngyè',vn:'rất tận tuỵ'},
     {zh:'敬业精神',py:'jìngyè jīngshén',vn:'tinh thần tận tuỵ'},
     {zh:'爱岗敬业',py:'ài gǎng jìngyè',vn:'yêu nghề, tận tâm với công việc'},
     {zh:'敬业的员工',py:'jìngyè de yuángōng',vn:'nhân viên tận tuỵ'},
     {zh:'缺乏敬业精神',py:'quēfá jìngyè jīngshén',vn:'thiếu tinh thần trách nhiệm'}
   ],
   patterns:[
     {s:'主语 + 很 / 非常 + 敬业',m:'Ai đó rất tận tuỵ'},
     {s:'……的敬业精神',m:'Tinh thần tận tuỵ của …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Anh ấy không những giỏi chuyên môn mà còn rất tận tuỵ.',answer:'他不但业务能力强，而且非常敬业。',answerPy:'Tā búdàn yèwù nénglì qiáng, érqiě fēicháng jìngyè.',
      note:'不但……而且…… nối hai ưu điểm tăng tiến.',pair:'不但……而且……'},
     {promptLang:'vi',prompt:'Sở dĩ khách hàng tin cô ấy là vì cô ấy rất tận tâm với công việc.',answer:'客户之所以信任她，是因为她非常敬业。',answerPy:'Kèhù zhīsuǒyǐ xìnrèn tā, shì yīnwèi tā fēicháng jìngyè.',
      note:'之所以 + kết quả，是因为 + nguyên nhân.',pair:'之所以……是因为……'}
   ]},

  {n:39,zh:'兢兢业业',py:'jīngjīngyèyè',pos:'Tính từ',vn:'thận trọng tỉ mỉ, cần mẫn chu đáo',hv:'căng căng nghiệp nghiệp',em:'🐜',lesson:1,
   explain:['Làm việc cẩn thận, chăm chỉ, chu đáo, có trách nhiệm (thành ngữ dạng AABB).','Làm định ngữ (兢兢业业的工作态度), trạng ngữ (兢兢业业地工作) hoặc vị ngữ.'],
   usage:'兢兢业业地 + 工作 / 干; 兢兢业业的态度. Không thêm 很 phía trước.',
   collo:['兢兢业业地工作','兢兢业业的态度','兢兢业业几十年','一向兢兢业业'],
   ex_zh:'我和小林兢兢业业的工作态度受到了表扬。',ex_py:'Wǒ hé Xiǎo Lín jīngjīng-yèyè de gōngzuò tàidu shòudàole biǎoyáng.',ex_vn:'Thái độ làm việc cần mẫn chu đáo của tôi và Tiểu Lâm được khen ngợi.',
   exList:[
     {zh:'我和小林的敬业精神、兢兢业业的工作态度受到了表扬。',py:'Wǒ hé Xiǎo Lín de jìngyè jīngshén, jīngjīng-yèyè de gōngzuò tàidu shòudàole biǎoyáng.',vn:'Tinh thần tận tuỵ và thái độ làm việc cần mẫn chu đáo của tôi và Tiểu Lâm được khen ngợi.'},
     {zh:'爷爷在工厂里兢兢业业地干了四十年。',py:'Yéye zài gōngchǎng li jīngjīng-yèyè de gànle sìshí nián.',vn:'Ông tôi làm việc cần mẫn trong nhà máy suốt bốn mươi năm.'},
     {zh:'她做事一向兢兢业业，从不马虎。',py:'Tā zuòshì yíxiàng jīngjīng-yèyè, cóng bù mǎhu.',vn:'Cô ấy làm việc trước giờ luôn cẩn trọng chu đáo, chưa bao giờ cẩu thả.'}
   ],
   colloFull:[
     {zh:'兢兢业业地工作',py:'jīngjīng-yèyè de gōngzuò',vn:'làm việc cần mẫn'},
     {zh:'兢兢业业的态度',py:'jīngjīng-yèyè de tàidu',vn:'thái độ cẩn trọng chu đáo'},
     {zh:'兢兢业业几十年',py:'jīngjīng-yèyè jǐ shí nián',vn:'cần mẫn mấy chục năm'},
     {zh:'一向兢兢业业',py:'yíxiàng jīngjīng-yèyè',vn:'trước nay luôn cần mẫn'},
     {zh:'兢兢业业地干',py:'jīngjīng-yèyè de gàn',vn:'làm cần cù cẩn thận'}
   ],
   patterns:[
     {s:'兢兢业业地 + V',m:'Làm gì một cách cẩn trọng, cần mẫn'},
     {s:'兢兢业业的 + 态度 / 精神',m:'Thái độ / tinh thần cần mẫn'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Dù chỉ là một nhân viên bình thường, bà ấy vẫn làm việc cần mẫn chu đáo suốt ba mươi năm.',answer:'虽然只是一名普通员工，她却兢兢业业地工作了三十年。',answerPy:'Suīrán zhǐ shì yì míng pǔtōng yuángōng, tā què jīngjīng-yèyè de gōngzuòle sānshí nián.',
      note:'虽然……却……; 地 + động từ + 了 + thời lượng.',pair:'虽然……却……'},
     {promptLang:'vi',prompt:'Chính nhờ thái độ cần mẫn ấy mà anh ấy nhận được sự tin tưởng của lãnh đạo.',answer:'正是因为这种兢兢业业的态度，他得到了领导的信任。',answerPy:'Zhèng shì yīnwèi zhè zhǒng jīngjīng-yèyè de tàidu, tā dédàole lǐngdǎo de xìnrèn.',
      note:'正是因为…… nhấn mạnh nguyên nhân; 得到 + 信任.',pair:'正是因为'}
   ]},

  {n:40,zh:'回报',py:'huíbào',pos:'Động từ',vn:'đền đáp, báo đáp',hv:'hồi báo',em:'🎁',lesson:1,
   explain:['Đền đáp lại công ơn, sự giúp đỡ; cũng chỉ thành quả, lợi ích thu về tương xứng với công sức bỏ ra.','Làm danh từ: 得到回报, 丰厚的回报.'],
   usage:'回报 + 父母 / 社会; 得到……的回报; 丰厚的回报; 不求回报.',
   collo:['得到回报','丰厚的回报','回报父母','不求回报'],
   ex_zh:'经济上也得到了丰厚的回报。',ex_py:'Jīngjì shang yě dédàole fēnghòu de huíbào.',ex_vn:'Về mặt kinh tế cũng nhận được sự đền đáp hậu hĩnh.',
   exList:[
     {zh:'年度考核，我们受到了表扬，经济上也得到了丰厚的回报。',py:'Niándù kǎohé, wǒmen shòudàole biǎoyáng, jīngjì shang yě dédàole fēnghòu de huíbào.',vn:'Trong đợt đánh giá cuối năm, chúng tôi được khen ngợi, về kinh tế cũng nhận được sự đền đáp hậu hĩnh.'},
     {zh:'我努力学习，就是为了将来回报父母。',py:'Wǒ nǔlì xuéxí, jiù shì wèile jiānglái huíbào fùmǔ.',vn:'Tôi cố gắng học tập chính là để sau này báo đáp cha mẹ.'},
     {zh:'她帮助别人从来不求回报。',py:'Tā bāngzhù biérén cónglái bù qiú huíbào.',vn:'Cô ấy giúp người khác chưa bao giờ mong được đền đáp.'}
   ],
   colloFull:[
     {zh:'得到回报',py:'dédào huíbào',vn:'được đền đáp'},
     {zh:'丰厚的回报',py:'fēnghòu de huíbào',vn:'sự đền đáp hậu hĩnh'},
     {zh:'回报父母',py:'huíbào fùmǔ',vn:'báo đáp cha mẹ'},
     {zh:'不求回报',py:'bù qiú huíbào',vn:'không mong đền đáp'},
     {zh:'回报社会',py:'huíbào shèhuì',vn:'đền đáp xã hội'}
   ],
   patterns:[
     {s:'付出……，得到……的回报',m:'Bỏ công sức … thì nhận được sự đền đáp …'},
     {s:'回报 + người / 社会',m:'Báo đáp ai'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần bạn thật lòng bỏ công sức, sớm muộn gì cũng sẽ được đền đáp.',answer:'只要你真心付出，早晚会得到回报的。',answerPy:'Zhǐyào nǐ zhēnxīn fùchū, zǎowǎn huì dédào huíbào de.',
      note:'会……的: khẳng định chắc chắn sẽ xảy ra.',pair:'会……的'},
     {promptLang:'vi',prompt:'Để báo đáp thầy cô, cậu ấy sau khi tốt nghiệp đã về trường cũ dạy học.',answer:'为了回报老师，他毕业以后回到母校当了老师。',answerPy:'Wèile huíbào lǎoshī, tā bìyè yǐhòu huídào mǔxiào dāngle lǎoshī.',
      note:'为了 + mục đích; 母校 = trường cũ.',pair:'为了'}
   ]},

  {n:41,zh:'当初',py:'dāngchū',pos:'Danh từ',vn:'lúc đầu, trước đây, hồi đó',hv:'đương sơ',em:'⏮️',lesson:1,
   explain:['Lúc ban đầu, hồi trước (khi sự việc mới xảy ra), thường để so sánh với hiện tại.','Hay gặp: 当初……，现在……; 早知今日，何必当初 (biết thế này thì hồi đó đã …).'],
   usage:'当初 làm trạng ngữ thời gian đầu câu / sau chủ ngữ, hoặc định ngữ (当初的想法).',
   collo:['当初的想法','想当初','早知今日，何必当初','当初不该'],
   ex_zh:'当初对我们不友好的资深前辈们也变得热情起来。',ex_py:'Dāngchū duì wǒmen bù yǒuhǎo de zīshēn qiánbèimen yě biàn de rèqíng qǐlái.',ex_vn:'Những tiền bối thâm niên lúc đầu không thân thiện với chúng tôi cũng trở nên nhiệt tình.',
   exList:[
     {zh:'当初对我们不友好的资深前辈们也变得热情起来。',py:'Dāngchū duì wǒmen bù yǒuhǎo de zīshēn qiánbèimen yě biàn de rèqíng qǐlái.',vn:'Những tiền bối thâm niên lúc đầu không thân thiện với chúng tôi cũng trở nên nhiệt tình.'},
     {zh:'当初你要是听我的，就不会这样了。',py:'Dāngchū nǐ yàoshi tīng wǒ de, jiù bú huì zhèyàng le.',vn:'Hồi đó nếu cậu nghe tớ thì đã không đến nông nỗi này.'},
     {zh:'想当初，我们俩连一句汉语都不会说。',py:'Xiǎng dāngchū, wǒmen liǎ lián yí jù Hànyǔ dōu bú huì shuō.',vn:'Nhớ hồi đầu, hai đứa mình đến một câu tiếng Trung cũng không biết nói.'}
   ],
   colloFull:[
     {zh:'当初的想法',py:'dāngchū de xiǎngfǎ',vn:'suy nghĩ ban đầu'},
     {zh:'想当初',py:'xiǎng dāngchū',vn:'nhớ hồi đầu'},
     {zh:'早知今日，何必当初',py:'zǎo zhī jīnrì, hébì dāngchū',vn:'biết thế này thì hồi đó đã chẳng …'},
     {zh:'当初不该',py:'dāngchū bù gāi',vn:'hồi đó không nên'},
     {zh:'当初选择',py:'dāngchū xuǎnzé',vn:'lựa chọn lúc đầu'}
   ],
   patterns:[
     {s:'当初……，现在……',m:'Hồi đầu …, bây giờ … (so sánh)'},
     {s:'当初要是……，就……',m:'Hồi đó nếu … thì đã … (tiếc nuối)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Hồi đầu tôi cứ tưởng ngành này rất nhẹ nhàng, không ngờ lại vất vả thế.',answer:'当初我以为这个专业很轻松，没想到这么辛苦。',answerPy:'Dāngchū wǒ yǐwéi zhège zhuānyè hěn qīngsōng, méi xiǎngdào zhème xīnkǔ.',
      note:'以为 (tưởng — sai), 没想到 (không ngờ) — cấu trúc 练习4 của bài.',pair:'以为……没想到……'},
     {promptLang:'vi',prompt:'Nếu hồi đó không kiên trì thì bây giờ tôi đã không có thành tích này.',answer:'要是当初没有坚持下来，我现在就不会有这样的成绩。',answerPy:'Yàoshi dāngchū méiyǒu jiānchí xiàlái, wǒ xiànzài jiù bú huì yǒu zhèyàng de chéngjì.',
      note:'Câu giả định ngược quá khứ: 要是当初……，现在就不会…….',pair:'要是……就……'}
   ]},

  {n:42,zh:'技巧',py:'jìqiǎo',pos:'Danh từ',vn:'kỹ năng, kỹ xảo, mẹo',hv:'kỹ xảo',em:'🛠️',lesson:1,
   explain:['Kỹ năng khéo léo, phương pháp thành thạo trong làm việc, nghệ thuật, thể thao.','Hay đi với 掌握, 传授, 学习, 讲究.'],
   usage:'掌握 / 传授 / 学习 + 技巧; 沟通技巧, 考试技巧, 写作技巧, 很有技巧.',
   collo:['掌握技巧','传授技巧','沟通技巧','考试技巧'],
   ex_zh:'我把工作经验和技巧传授给他们。',ex_py:'Wǒ bǎ gōngzuò jīngyàn hé jìqiǎo chuánshòu gěi tāmen.',ex_vn:'Tôi truyền lại kinh nghiệm và kỹ năng làm việc cho họ.',
   exList:[
     {zh:'我把工作经验和技巧传授给他们，毫无保留。',py:'Wǒ bǎ gōngzuò jīngyàn hé jìqiǎo chuánshòu gěi tāmen, háowú bǎoliú.',vn:'Tôi truyền lại kinh nghiệm và kỹ năng làm việc cho họ, không giữ lại chút nào.'},
     {zh:'和客户沟通也需要一定的技巧。',py:'Hé kèhù gōutōng yě xūyào yídìng de jìqiǎo.',vn:'Giao tiếp với khách hàng cũng cần có kỹ năng nhất định.'},
     {zh:'掌握了考试技巧，做题的速度快多了。',py:'Zhǎngwòle kǎoshì jìqiǎo, zuò tí de sùdù kuài duō le.',vn:'Nắm được mẹo làm bài thi, tốc độ làm bài nhanh hơn nhiều.'}
   ],
   colloFull:[
     {zh:'掌握技巧',py:'zhǎngwò jìqiǎo',vn:'nắm vững kỹ năng'},
     {zh:'传授技巧',py:'chuánshòu jìqiǎo',vn:'truyền dạy kỹ năng'},
     {zh:'沟通技巧',py:'gōutōng jìqiǎo',vn:'kỹ năng giao tiếp'},
     {zh:'考试技巧',py:'kǎoshì jìqiǎo',vn:'mẹo làm bài thi'},
     {zh:'写作技巧',py:'xiězuò jìqiǎo',vn:'kỹ năng viết'}
   ],
   patterns:[
     {s:'掌握 / 传授 + ……技巧',m:'Nắm vững / truyền dạy kỹ năng …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ nắm được mẹo thôi thì chưa đủ, còn phải luyện tập nhiều.',answer:'光掌握技巧是不够的，还得多练习。',answerPy:'Guāng zhǎngwò jìqiǎo shì bú gòu de, hái děi duō liànxí.',
      note:'光 = chỉ (khẩu ngữ, = 只); 得 (děi) = phải.',pair:'光……还得……'},
     {promptLang:'vi',prompt:'Vừa có kinh nghiệm vừa có kỹ năng, chẳng trách anh ấy làm gì cũng nhanh thế.',answer:'他既有经验又有技巧，难怪做什么都这么快。',answerPy:'Tā jì yǒu jīngyàn yòu yǒu jìqiǎo, nánguài zuò shénme dōu zhème kuài.',
      note:'既……又……: vừa … vừa …; 难怪 = chẳng trách.',pair:'既……又……'}
   ]},

  {n:43,zh:'传授',py:'chuánshòu',pos:'Động từ',vn:'truyền dạy, truyền đạt',hv:'truyền thụ',em:'👨‍🏫',lesson:1,
   explain:['Dạy, truyền lại kiến thức, kỹ năng, kinh nghiệm cho người khác.','Thường dùng: 把 + kiến thức + 传授给 + người.'],
   usage:'传授 + 知识 / 经验 / 技术 / 技巧; 把……传授给…….',
   collo:['传授经验','传授知识','传授技术','传授给'],
   ex_zh:'我把工作经验和技巧传授给他们，毫无保留。',ex_py:'Wǒ bǎ gōngzuò jīngyàn hé jìqiǎo chuánshòu gěi tāmen, háowú bǎoliú.',ex_vn:'Tôi truyền lại kinh nghiệm và kỹ năng làm việc cho họ, không giữ lại chút nào.',
   exList:[
     {zh:'我把工作经验和技巧传授给他们，毫无保留。',py:'Wǒ bǎ gōngzuò jīngyàn hé jìqiǎo chuánshòu gěi tāmen, háowú bǎoliú.',vn:'Tôi truyền lại kinh nghiệm và kỹ năng làm việc cho họ, không giữ lại chút nào.'},
     {zh:'老师不仅传授知识，还教我们怎么做人。',py:'Lǎoshī bùjǐn chuánshòu zhīshi, hái jiāo wǒmen zěnme zuòrén.',vn:'Thầy cô không chỉ truyền đạt kiến thức mà còn dạy chúng ta cách làm người.'},
     {zh:'老师傅把做菜的秘诀传授给了徒弟。',py:'Lǎo shīfu bǎ zuò cài de mìjué chuánshòu gěile túdì.',vn:'Người thầy già đã truyền bí quyết nấu ăn cho học trò.'}
   ],
   colloFull:[
     {zh:'传授经验',py:'chuánshòu jīngyàn',vn:'truyền lại kinh nghiệm'},
     {zh:'传授知识',py:'chuánshòu zhīshi',vn:'truyền đạt kiến thức'},
     {zh:'传授技术',py:'chuánshòu jìshù',vn:'truyền dạy kỹ thuật'},
     {zh:'传授给',py:'chuánshòu gěi',vn:'truyền cho'},
     {zh:'毫无保留地传授',py:'háowú bǎoliú de chuánshòu',vn:'truyền dạy không giấu nghề'}
   ],
   patterns:[
     {s:'把 + kiến thức / kỹ năng + 传授给 + người',m:'Truyền … cho ai'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ông tôi đã truyền hết tay nghề của mình cho bố tôi.',answer:'爷爷把自己的手艺全部传授给了爸爸。',answerPy:'Yéye bǎ zìjǐ de shǒuyì quánbù chuánshòu gěile bàba.',
      note:'Câu 把: 把 + tân ngữ + 传授给 + người; 了 đặt sau 给.',pair:'把……V给……'},
     {promptLang:'vi',prompt:'Kinh nghiệm được truyền dạy từ tiền bối giúp tôi bớt đi rất nhiều đường vòng.',answer:'前辈传授的经验让我少走了很多弯路。',answerPy:'Qiánbèi chuánshòu de jīngyàn ràng wǒ shǎo zǒule hěn duō wānlù.',
      note:'Cụm chủ–vị + 的 làm định ngữ; 少走弯路 = bớt đi đường vòng.',pair:'让'}
   ]},

  {n:44,zh:'人格',py:'réngé',pos:'Danh từ',vn:'nhân cách, tính cách',hv:'nhân cách',em:'🌟',lesson:1,
   explain:['Phẩm chất, tư cách đạo đức và tính cách của một người.','Hay gặp: 人格魅力 (sức hút nhân cách), 尊重人格, 人格高尚.'],
   usage:'人格魅力, 尊重……的人格, 人格高尚, 侮辱人格.',
   collo:['人格魅力','尊重人格','人格高尚','独立人格'],
   ex_zh:'这个过程，正是展示你人格魅力的时候。',ex_py:'Zhège guòchéng, zhèng shì zhǎnshì nǐ réngé mèilì de shíhou.',ex_vn:'Quá trình này chính là lúc thể hiện sức hút nhân cách của bạn.',
   exList:[
     {zh:'这个过程，正是展示你人格魅力的时候。',py:'Zhège guòchéng, zhèng shì zhǎnshì nǐ réngé mèilì de shíhou.',vn:'Quá trình này chính là lúc thể hiện sức hút nhân cách của bạn.'},
     {zh:'批评孩子的时候，也要尊重他的人格。',py:'Pīpíng háizi de shíhou, yě yào zūnzhòng tā de réngé.',vn:'Khi phê bình trẻ cũng phải tôn trọng nhân cách của trẻ.'},
     {zh:'她不仅有才干，人格也非常高尚。',py:'Tā bùjǐn yǒu cáigàn, réngé yě fēicháng gāoshàng.',vn:'Cô ấy không chỉ có năng lực, nhân cách cũng vô cùng cao thượng.'}
   ],
   colloFull:[
     {zh:'人格魅力',py:'réngé mèilì',vn:'sức hút nhân cách'},
     {zh:'尊重人格',py:'zūnzhòng réngé',vn:'tôn trọng nhân cách'},
     {zh:'人格高尚',py:'réngé gāoshàng',vn:'nhân cách cao thượng'},
     {zh:'独立人格',py:'dúlì réngé',vn:'nhân cách độc lập'},
     {zh:'侮辱人格',py:'wǔrǔ réngé',vn:'xúc phạm nhân cách'}
   ],
   patterns:[
     {s:'展示 / 散发 + 人格魅力',m:'Thể hiện sức hút nhân cách'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Người thực sự khiến người khác khâm phục không phải là địa vị mà là nhân cách.',answer:'真正让人佩服的不是地位，而是人格。',answerPy:'Zhēnzhèng ràng rén pèifu de bú shì dìwèi, ér shì réngé.',
      note:'不是 A，而是 B: không phải A mà là B.',pair:'不是……而是……'},
     {promptLang:'vi',prompt:'Dù bất đồng ý kiến thế nào, chúng ta cũng phải tôn trọng nhân cách của người khác.',answer:'不管意见多么不同，我们都要尊重别人的人格。',answerPy:'Bùguǎn yìjiàn duōme bù tóng, wǒmen dōu yào zūnzhòng biérén de réngé.',
      note:'不管 + 多么 + tính từ, 都……',pair:'不管……都……'}
   ]},

  {n:45,zh:'施展',py:'shīzhǎn',pos:'Động từ',vn:'phát huy, thi thố (tài năng)',hv:'thi triển',em:'🎯',lesson:1,
   explain:['Phát huy, bộc lộ hết khả năng, tài năng, bản lĩnh của mình.','Tân ngữ gần như luôn là 才能 / 才干 / 本领 / 抱负; khác 展示 (bày ra cho người khác thấy).'],
   usage:'施展 + 才能 / 才干 / 本领 / 抱负; 施展不开 (không có đất dụng võ).',
   collo:['施展才能','施展本领','施展抱负','施展不开'],
   ex_zh:'遇到困难，也是你施展才能的时机。',ex_py:'Yùdào kùnnan, yě shì nǐ shīzhǎn cáinéng de shíjī.',ex_vn:'Gặp khó khăn cũng là thời cơ để bạn phát huy tài năng.',
   exList:[
     {zh:'遇到困难，也是你施展才能的时机。',py:'Yùdào kùnnan, yě shì nǐ shīzhǎn cáinéng de shíjī.',vn:'Gặp khó khăn cũng là thời cơ để bạn phát huy tài năng.'},
     {zh:'在这个小公司里，他觉得自己的本领施展不开。',py:'Zài zhège xiǎo gōngsī li, tā juéde zìjǐ de běnlǐng shīzhǎn bu kāi.',vn:'Ở công ty nhỏ này, anh ấy thấy mình không có đất dụng võ.'},
     {zh:'这次比赛给了年轻人一个施展才华的舞台。',py:'Zhè cì bǐsài gěile niánqīngrén yí ge shīzhǎn cáihuá de wǔtái.',vn:'Cuộc thi lần này mang đến cho người trẻ một sân khấu để thi thố tài hoa.'}
   ],
   colloFull:[
     {zh:'施展才能',py:'shīzhǎn cáinéng',vn:'phát huy tài năng'},
     {zh:'施展本领',py:'shīzhǎn běnlǐng',vn:'thi thố bản lĩnh'},
     {zh:'施展抱负',py:'shīzhǎn bàofù',vn:'thực hiện hoài bão'},
     {zh:'施展不开',py:'shīzhǎn bu kāi',vn:'không có đất dụng võ'},
     {zh:'施展才干',py:'shīzhǎn cáigàn',vn:'phát huy năng lực'}
   ],
   patterns:[
     {s:'施展 + 才能 / 本领',m:'Phát huy tài năng / bản lĩnh'},
     {s:'施展不开',m:'Không phát huy được (bị bó buộc)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Công ty mới cho cô ấy nhiều cơ hội hơn để phát huy tài năng.',answer:'新公司给了她更多施展才能的机会。',answerPy:'Xīn gōngsī gěile tā gèng duō shīzhǎn cáinéng de jīhuì.',
      note:'给 + người + tân ngữ (song tân ngữ); cụm động từ + 的 làm định ngữ.',pair:'给 + người + vật'},
     {promptLang:'vi',prompt:'Một khi có sân khấu phù hợp, anh ấy nhất định sẽ phát huy được bản lĩnh của mình.',answer:'一旦有了合适的舞台，他一定能施展自己的本领。',answerPy:'Yídàn yǒule héshì de wǔtái, tā yídìng néng shīzhǎn zìjǐ de běnlǐng.',
      note:'一旦……就/一定……: một khi … thì ….',pair:'一旦……'}
   ]},

  {n:46,zh:'时机',py:'shíjī',pos:'Danh từ',vn:'thời cơ, cơ hội (đúng lúc)',hv:'thời cơ',em:'⏰',lesson:1,
   explain:['Thời điểm thích hợp, có lợi để làm một việc gì.','Nhấn mạnh yếu tố thời gian (đúng lúc); 机会 là cơ hội nói chung.'],
   usage:'抓住 / 错过 / 等待 + 时机; 时机成熟, 时机不对, 最佳时机.',
   collo:['抓住时机','错过时机','时机成熟','最佳时机'],
   ex_zh:'遇到困难，也是你施展才能的时机。',ex_py:'Yùdào kùnnan, yě shì nǐ shīzhǎn cáinéng de shíjī.',ex_vn:'Gặp khó khăn cũng là thời cơ để bạn phát huy tài năng.',
   exList:[
     {zh:'遇到困难，也是你施展才能的时机。',py:'Yùdào kùnnan, yě shì nǐ shīzhǎn cáinéng de shíjī.',vn:'Gặp khó khăn cũng là thời cơ để bạn phát huy tài năng.'},
     {zh:'现在时机还不成熟，我们再等等吧。',py:'Xiànzài shíjī hái bù chéngshú, wǒmen zài děngdeng ba.',vn:'Bây giờ thời cơ còn chưa chín muồi, chúng ta đợi thêm chút nữa.'},
     {zh:'做生意一定要抓住时机，错过了就没有了。',py:'Zuò shēngyi yídìng yào zhuāzhù shíjī, cuòguòle jiù méiyǒu le.',vn:'Làm ăn nhất định phải nắm bắt thời cơ, lỡ mất là không còn nữa.'}
   ],
   colloFull:[
     {zh:'抓住时机',py:'zhuāzhù shíjī',vn:'nắm bắt thời cơ'},
     {zh:'错过时机',py:'cuòguò shíjī',vn:'bỏ lỡ thời cơ'},
     {zh:'时机成熟',py:'shíjī chéngshú',vn:'thời cơ chín muồi'},
     {zh:'最佳时机',py:'zuìjiā shíjī',vn:'thời điểm tốt nhất'},
     {zh:'等待时机',py:'děngdài shíjī',vn:'chờ thời cơ'}
   ],
   patterns:[
     {s:'……是 + V + 的(最佳)时机',m:'… là thời cơ (tốt nhất) để …'},
     {s:'抓住 / 错过 + 时机',m:'Nắm bắt / bỏ lỡ thời cơ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nếu bỏ lỡ thời cơ này, e là phải đợi thêm mấy năm nữa.',answer:'如果错过了这个时机，恐怕还要再等好几年。',answerPy:'Rúguǒ cuòguòle zhège shíjī, kǒngpà hái yào zài děng hǎo jǐ nián.',
      note:'恐怕 = e là, sợ rằng (phỏng đoán điều không mong muốn).',pair:'恐怕'},
     {promptLang:'vi',prompt:'Đợi thời cơ chín muồi rồi hẵng nói chuyện này với bố mẹ.',answer:'等时机成熟了，再跟父母说这件事吧。',answerPy:'Děng shíjī chéngshú le, zài gēn fùmǔ shuō zhè jiàn shì ba.',
      note:'等……了，再……: đợi … rồi mới ….',pair:'等……再……'}
   ]}
];

// ══════════════════════════════════════════
// BÀI KHOÁ 课文 — chép nguyên văn sách (tr. 66–67), mỗi đoạn văn một dòng
// ══════════════════════════════════════════
var dialogData = [
  {scene:'课文 · 当好职场插班生',
   preQuiz:[
     {q:'“我”在这家公司的职位是什么？',opts:['咨询师','经理','秘书'],ans:0},
     {q:'这家公司的员工有什么特点？',opts:['新手多、老手少','老手多、新手少','都是刚毕业的学生'],ans:1},
     {q:'上班第一天，赵姐工作的第一件事是什么？',opts:['给大家开会','忙着沏茶和咖啡','给客户打电话'],ans:1},
     {q:'赵姐的茶和咖啡送给了谁？',opts:['只给了“我”和小林','给了老员工，唯独没有“我”和小林','给了办公室所有的人'],ans:1},
     {q:'小林和“我”是什么关系？',opts:['同一天就职的搭档','大学同学','夫妻'],ans:0},
     {q:'看到这种情况，“我”是怎么做的？',opts:['马上去找领导','向小林使了个眼色','生气地离开了'],ans:1},
     {q:'“我”和小林的业务为什么那么难做？',opts:['他们俩能力不够','资深员工先挑，挑剩下的才给他们','领导不喜欢他们俩'],ans:1},
     {q:'小林本来打算怎么做？',opts:['找领导讨公道，大不了辞职','跟老员工吵一架','偷偷溜出去逛街'],ans:0},
     {q:'静下来以后，“我”是怎么看这件事的？',opts:['觉得应该马上辞职','觉得这反而是展示才干的好机会','觉得无所谓，随便做做就行'],ans:1},
     {q:'后来，“我”和小林是怎样对待工作的？',opts:['和老员工计较','敷衍客户','全力以赴，多忙都不凑合'],ans:2},
     {q:'年度考核的结果怎么样？',opts:['两人受到了表扬，还得到了丰厚的回报','两人没有完成指标','两人被客户投诉了'],ans:0},
     {q:'公司来了新人以后，“我”是怎么做的？',opts:['不理他们','把经验和技巧毫无保留地传授给他们','让他们先挑业务'],ans:1},
     {q:'作者认为，进入新单位后遇到困难意味着什么？',opts:['是辞职的理由','是施展才能的时机','是被边缘化的开始'],ans:1}
   ],
   lines:[
    {sp:0,zh:'这天是我到这家公司上任的第一天，我的职位是咨询师。早就听说这里老手多、新手少，不少资深员工在公司创立之初就开始在这里工作了。',
     py:'Zhè tiān shì wǒ dào zhè jiā gōngsī shàngrèn de dì-yī tiān, wǒ de zhíwèi shì zīxúnshī. Zǎo jiù tīngshuō zhèlǐ lǎoshǒu duō, xīnshǒu shǎo, bùshǎo zīshēn yuángōng zài gōngsī chuànglì zhī chū jiù kāishǐ zài zhèlǐ gōngzuò le.',
     vn:'Hôm ấy là ngày đầu tiên tôi nhận chức ở công ty này, vị trí của tôi là chuyên viên tư vấn. Từ lâu tôi đã nghe nói ở đây nhiều người lão luyện, ít người mới, không ít nhân viên thâm niên đã làm việc ở đây ngay từ buổi đầu công ty mới thành lập.'},
    {sp:0,zh:'清早上班，和新同事一一认识后，我以为一天的工作就此开始，没想到赵姐工作的第一件事是忙着沏茶和咖啡，给张哥端一碗，给孙姐送一杯……我想这单位风气真好，明天这事我来做。正想着，赵姐已经坐在那儿开始自己享受，唯独剩下我和我的搭档——与我同一天就职的小林。顿时小林的脸色变了，我也有被边缘化的感觉，不过我还是向小林使了个眼色。屋子里鸦雀无声，第一天就这样开始了。',
     py:'Qīngzǎo shàngbān, hé xīn tóngshì yīyī rènshi hòu, wǒ yǐwéi yì tiān de gōngzuò jiù cǐ kāishǐ, méi xiǎngdào Zhào jiě gōngzuò de dì-yī jiàn shì shì mángzhe qī chá hé kāfēi, gěi Zhāng gē duān yì wǎn, gěi Sūn jiě sòng yì bēi…… Wǒ xiǎng zhè dānwèi fēngqì zhēn hǎo, míngtiān zhè shì wǒ lái zuò. Zhèng xiǎngzhe, Zhào jiě yǐjīng zuò zài nàr kāishǐ zìjǐ xiǎngshòu, wéidú shèngxià wǒ hé wǒ de dādàng — yǔ wǒ tóng yì tiān jiùzhí de Xiǎo Lín. Dùnshí Xiǎo Lín de liǎnsè biàn le, wǒ yě yǒu bèi biānyuánhuà de gǎnjué, búguò wǒ háishi xiàng Xiǎo Lín shǐle ge yǎnsè. Wūzi li yāquè-wúshēng, dì-yī tiān jiù zhèyàng kāishǐ le.',
     vn:'Sáng sớm đi làm, sau khi lần lượt làm quen với từng đồng nghiệp mới, tôi cứ tưởng một ngày làm việc bắt đầu từ đây, không ngờ việc đầu tiên chị Triệu làm là tất bật pha trà và cà phê, bưng cho anh Trương một bát, mang cho chị Tôn một cốc… Tôi nghĩ nếp sống ở cơ quan này thật tốt, ngày mai việc này để tôi làm. Đang nghĩ thế thì chị Triệu đã ngồi đó bắt đầu tự thưởng thức, chỉ còn lại tôi và cộng sự của tôi — Tiểu Lâm, người nhận việc cùng ngày với tôi. Mặt Tiểu Lâm lập tức biến sắc, tôi cũng có cảm giác bị gạt ra rìa, nhưng tôi vẫn đưa mắt ra hiệu cho Tiểu Lâm. Trong phòng im phăng phắc, ngày đầu tiên cứ thế bắt đầu.'},
    {sp:0,zh:'我和小林的业务很难做，件件都让人头痛，有时候还完不成指标，可别人的工作很快就完了，几乎成天聊天儿、上网、吹牛，还有人溜出去逛街。我和小林虽然是新来的，可我们之前在别的公司也是好手呀。',
     py:'Wǒ hé Xiǎo Lín de yèwù hěn nán zuò, jiànjiàn dōu ràng rén tóutòng, yǒu shíhou hái wán bu chéng zhǐbiāo, kě biérén de gōngzuò hěn kuài jiù wán le, jīhū chéngtiān liáotiānr, shàngwǎng, chuīniú, hái yǒu rén liū chūqu guàngjiē. Wǒ hé Xiǎo Lín suīrán shì xīn lái de, kě wǒmen zhīqián zài bié de gōngsī yě shì hǎoshǒu ya.',
     vn:'Công việc của tôi và Tiểu Lâm rất khó làm, vụ nào cũng khiến người ta đau đầu, có lúc còn không hoàn thành được chỉ tiêu, còn việc của người khác thì xong rất nhanh, họ gần như suốt ngày tán gẫu, lên mạng, khoác lác, còn có người chuồn ra ngoài dạo phố. Tôi và Tiểu Lâm tuy là người mới đến, nhưng trước đây ở công ty khác chúng tôi cũng là tay cừ đấy chứ.'},
    {sp:0,zh:'后来我发现，领导分配业务时，总是让资深员工先挑，他们挑剩下的才是我和小林的。我们的工作从难度上讲，和他们根本就不是一个等级。小林要去找领导讨公道：“哼，太不像话了，明明是在欺负人，大不了辞职。”我也觉得不像话，可静下来，也觉得没什么不好，应该说这反而是我们可以展示自己才干的好机会。',
     py:'Hòulái wǒ fāxiàn, lǐngdǎo fēnpèi yèwù shí, zǒngshì ràng zīshēn yuángōng xiān tiāo, tāmen tiāo shèngxià de cái shì wǒ hé Xiǎo Lín de. Wǒmen de gōngzuò cóng nándù shang jiǎng, hé tāmen gēnběn jiù bú shì yí ge děngjí. Xiǎo Lín yào qù zhǎo lǐngdǎo tǎo gōngdao: "Hng, tài búxiànghuà le, míngmíng shì zài qīfu rén, dàbuliǎo cízhí." Wǒ yě juéde búxiànghuà, kě jìng xiàlái, yě juéde méi shénme bù hǎo, yīnggāi shuō zhè fǎn\'ér shì wǒmen kěyǐ zhǎnshì zìjǐ cáigàn de hǎo jīhuì.',
     vn:'Về sau tôi phát hiện, khi phân công công việc, lãnh đạo luôn để nhân viên thâm niên chọn trước, những việc họ chọn còn thừa lại mới là của tôi và Tiểu Lâm. Xét về độ khó, công việc của chúng tôi với của họ hoàn toàn không cùng một đẳng cấp. Tiểu Lâm định đi tìm lãnh đạo đòi lẽ công bằng: "Hừ, quá lắm rồi, rõ ràng là đang bắt nạt người ta, cùng lắm thì nghỉ việc." Tôi cũng thấy thật quá đáng, nhưng bình tĩnh lại thì thấy cũng chẳng có gì không tốt, phải nói rằng đây ngược lại là cơ hội tốt để chúng tôi thể hiện tài năng của mình.'},
    {sp:0,zh:'我和小林决定不和他们计较，全力以赴投入工作，不怠慢、不敷衍每一位客户，想方设法做好每一单业务，多忙都不凑合。',
     py:'Wǒ hé Xiǎo Lín juédìng bù hé tāmen jìjiào, quánlì-yǐfù tóurù gōngzuò, bú dàimàn, bù fūyǎn měi yí wèi kèhù, xiǎngfāng-shèfǎ zuòhǎo měi yí dān yèwù, duō máng dōu bú còuhe.',
     vn:'Tôi và Tiểu Lâm quyết định không so đo với họ, dốc toàn lực lao vào công việc, không lạnh nhạt, không qua loa với bất kỳ khách hàng nào, nghĩ đủ mọi cách làm tốt từng đơn nghiệp vụ, bận mấy cũng không làm cho có.'},
    {sp:0,zh:'忙碌中，时光过得飞快，我们的业务能力得到了飞跃式的提高，点名找我们的客户越来越多。有时领导会说，服务对象对张哥不满意，活儿你们接手吧；客户投诉赵姐了，你们处理一下吧。我们每天都充满激情地工作，享受着工作的快乐。年度考核，我和小林的敬业精神、兢兢业业的工作态度受到了表扬，经济上也得到了丰厚的回报。当初对我们不友好的资深前辈们也变得热情起来。再后来，公司来了新人，领导让我带他们，我把工作经验和技巧传授给他们，毫无保留。',
     py:'Mánglù zhōng, shíguāng guò de fēikuài, wǒmen de yèwù nénglì dédàole fēiyuè shì de tígāo, diǎnmíng zhǎo wǒmen de kèhù yuè lái yuè duō. Yǒushí lǐngdǎo huì shuō, fúwù duìxiàng duì Zhāng gē bù mǎnyì, huór nǐmen jiēshǒu ba; kèhù tóusù Zhào jiě le, nǐmen chǔlǐ yíxià ba. Wǒmen měi tiān dōu chōngmǎn jīqíng de gōngzuò, xiǎngshòuzhe gōngzuò de kuàilè. Niándù kǎohé, wǒ hé Xiǎo Lín de jìngyè jīngshén, jīngjīng-yèyè de gōngzuò tàidu shòudàole biǎoyáng, jīngjì shang yě dédàole fēnghòu de huíbào. Dāngchū duì wǒmen bù yǒuhǎo de zīshēn qiánbèimen yě biàn de rèqíng qǐlái. Zài hòulái, gōngsī láile xīn rén, lǐngdǎo ràng wǒ dài tāmen, wǒ bǎ gōngzuò jīngyàn hé jìqiǎo chuánshòu gěi tāmen, háowú bǎoliú.',
     vn:'Trong bận rộn, thời gian trôi qua thật nhanh, năng lực nghiệp vụ của chúng tôi được nâng cao vượt bậc, khách hàng chỉ đích danh tìm chúng tôi ngày càng nhiều. Có lúc lãnh đạo nói: khách hàng không hài lòng với anh Trương, việc này các cậu nhận lấy đi; khách hàng khiếu nại chị Triệu rồi, các cậu xử lý giúp nhé. Ngày nào chúng tôi cũng làm việc tràn đầy nhiệt huyết, tận hưởng niềm vui của công việc. Trong đợt đánh giá cuối năm, tinh thần tận tuỵ và thái độ làm việc cần mẫn chu đáo của tôi và Tiểu Lâm được khen ngợi, về kinh tế cũng nhận được sự đền đáp hậu hĩnh. Những tiền bối thâm niên lúc đầu không thân thiện với chúng tôi cũng trở nên nhiệt tình. Sau này nữa, công ty có người mới đến, lãnh đạo bảo tôi kèm họ, tôi truyền lại kinh nghiệm và kỹ năng làm việc cho họ, không giấu giếm chút nào.'},
    {sp:0,zh:'其实，进入新单位，作为一个职场插班生，这个过程，正是展示你人格魅力的时候，遇到困难，也是你施展才能的时机。',
     py:'Qíshí, jìnrù xīn dānwèi, zuòwéi yí ge zhíchǎng chābānshēng, zhège guòchéng, zhèng shì zhǎnshì nǐ réngé mèilì de shíhou, yùdào kùnnan, yě shì nǐ shīzhǎn cáinéng de shíjī.',
     vn:'Thật ra, khi bước vào một đơn vị mới, với tư cách một "học sinh chuyển lớp" nơi công sở, quá trình này chính là lúc thể hiện sức hút nhân cách của bạn; gặp khó khăn cũng là thời cơ để bạn phát huy tài năng.'}
   ]}
];

// ══════════════════════════════════════════
// PHÂN BIỆT TỪ GẦN NGHĨA 词语辨析
// Cặp 创立—创办 lấy từ sách (tr. 69–70, 做一做 theo đáp án sách); 展示—施展, 敷衍—凑合 tự thêm (đều là từ của bài)
// ══════════════════════════════════════════
var synonymData = [
  {pair:'创立 — 创办',
   same:'Đều là động từ, đều có nghĩa lần đầu lập ra, bắt đầu làm một việc gì. Với trường học, công ty… thì thường thay nhau được.',
   sameEx:{zh:'这所女子职业学校于1985年创立／创办。',vn:'Ngôi trường dạy nghề nữ này được thành lập năm 1985.'},
   items:[
     {word:'创立',points:[
       'Nhấn mạnh nghĩa "khai sáng, thành lập" (开创、成立).',
       'Dùng được cho chính đảng, quốc gia, học thuyết, lý luận, hệ thống học thuật.',
       'Hay gặp dạng văn viết: ……创立于 + năm, 创立之初.'
     ],ex:[{zh:'这个组织创立于1942年。',vn:'Tổ chức này được thành lập vào năm 1942.'},
          {zh:'创立一个新的学术体系是个复杂的过程。',vn:'Xây dựng một hệ thống học thuật mới là một quá trình phức tạp.'}]},
     {word:'创办',points:[
       'Nhấn mạnh nghĩa "lập ra và điều hành, kinh doanh" (创设、经营).',
       'Tân ngữ: trường học, nhà máy, doanh nghiệp, tờ báo, tạp chí, trung tâm dịch vụ…',
       'KHÔNG dùng cho chính đảng, quốc gia, học thuyết, lý luận.'
     ],ex:[{zh:'他们几个人一起创办了一家民营企业。',vn:'Mấy người họ cùng nhau lập ra một doanh nghiệp tư nhân.'}]}
   ],
   quiz:[
     {sentence:'退休以后，他在家乡＿＿了一所小学。',options:['创立','创办'],answer:1,why:'Lập ra và điều hành một trường học → 创办 (nhấn mạnh việc mở ra, vận hành).'},
     {sentence:'爱因斯坦＿＿了相对论。',options:['创立','创办'],answer:0,why:'Lý thuyết, học thuyết → chỉ dùng 创立; 创办 không đi với 理论/学说.'},
     {sentence:'她大学一毕业就和同学一起＿＿了一家咨询公司。',options:['创立','创办'],answer:1,why:'Mở và kinh doanh một công ty → 创办 tự nhiên nhất.'},
     {sentence:'这门新学科是在二十世纪初＿＿的。',options:['创立','创办'],answer:0,why:'Một ngành khoa học, một hệ thống tri thức → 创立 (khai sáng).'}
   ],
   sgk:{
     chung:{t:'都是动词，都有初次、开始做的意思。',vn:'Đều là động từ, đều có nghĩa lần đầu, bắt đầu làm.',vd:'这所女子职业学校于1985年创立／创办。',vdVn:'Ngôi trường dạy nghề nữ này được thành lập năm 1985.'},
     khac:[
       {a:{t:'侧重于“开创、成立”的意思。',vn:'Nhấn mạnh nghĩa "khai sáng, thành lập".',vd:'这个组织创立于1942年。',vdVn:'Tổ chức này được thành lập vào năm 1942.'},
        b:{t:'侧重于“创设、经营”的意思。',vn:'Nhấn mạnh nghĩa "lập ra, kinh doanh điều hành".',vd:'他们几个人一起创办了一家民营企业。',vdVn:'Mấy người họ cùng nhau lập ra một doanh nghiệp tư nhân.'}},
       {a:{t:'可以用于政党、国家或学说、理论等。',vn:'Dùng được cho chính đảng, quốc gia hoặc học thuyết, lý luận…',vd:'① 这个政党刚创立时，参加人员并不多。② 创立一个新的学术体系是个复杂的过程。',vdVn:'① Đảng này khi mới thành lập, người tham gia không nhiều. ② Xây dựng một hệ thống học thuật mới là một quá trình phức tạp.'},
        b:{t:'不能用于政党、国家或学说、理论等。',vn:'Không dùng cho chính đảng, quốc gia hoặc học thuyết, lý luận…',vd:''}}
     ],
     lamThu:[
       {s:'他们夫妻俩一手＿＿起这家汽车修理厂。',dap:[false,true],
        giai:'Tự tay lập ra và gây dựng một xưởng sửa ô tô (kinh doanh) → 创办.'},
       {s:'这个学说＿＿于18世纪中期，开始时遭到许多质疑。',dap:[true,false],
        giai:'Học thuyết → chỉ dùng 创立 (创立于 + thời gian); 创办 không dùng cho 学说.'},
       {s:'近年来，一些地方相继＿＿了各种以营利为目的的服务中心。',dap:[false,true],
        giai:'Trung tâm dịch vụ hoạt động vì lợi nhuận — lập ra để kinh doanh → 创办.'},
       {s:'新理论＿＿初期，遇到很多困难和挑战。',dap:[true,false],
        giai:'Lý luận mới → 创立; 创办 không dùng cho 理论.'}
     ]
   }},

  {pair:'展示 — 施展',
   same:'Đều là động từ, đều liên quan đến việc bộc lộ khả năng; đều đi được với 才干 / 才华.',
   sameEx:{zh:'这次比赛是展示／施展才华的好机会。',vn:'Cuộc thi lần này là cơ hội tốt để thể hiện / phát huy tài hoa.'},
   items:[
     {word:'展示',points:[
       'Bày ra, thể hiện rõ cho NGƯỜI KHÁC thấy.',
       'Tân ngữ rộng: 作品, 产品, 成果, 魅力, 风采, 才干…',
       'Hay đi với 向……展示.'
     ],ex:[{zh:'这反而是我们可以展示自己才干的好机会。',vn:'Đây ngược lại là cơ hội tốt để chúng tôi thể hiện tài năng.'},
          {zh:'学校门口展示着同学们的书法作品。',vn:'Trước cổng trường trưng bày tác phẩm thư pháp của học sinh.'}]},
     {word:'施展',points:[
       'Phát huy, dùng hết khả năng của MÌNH vào việc gì.',
       'Tân ngữ hẹp: 才能, 才干, 本领, 抱负.',
       'Có dạng 施展不开 (không có đất dụng võ); không nói 施展作品 / 施展产品.'
     ],ex:[{zh:'遇到困难，也是你施展才能的时机。',vn:'Gặp khó khăn cũng là thời cơ để bạn phát huy tài năng.'},
          {zh:'在这个小公司里，他觉得自己的本领施展不开。',vn:'Ở công ty nhỏ này, anh ấy thấy mình không có đất dụng võ.'}]}
   ],
   quiz:[
     {sentence:'博物馆里＿＿着许多古代文物。',options:['展示','施展'],answer:0,why:'Trưng bày đồ vật cho người xem → 展示. 施展 không mang tân ngữ đồ vật.'},
     {sentence:'在这个小公司里，他的本领根本＿＿不开。',options:['展示','施展'],answer:1,why:'Cụm cố định 施展不开 = không phát huy được, không có đất dụng võ.'},
     {sentence:'请大家看大屏幕，我来＿＿一下我们的新产品。',options:['展示','施展'],answer:0,why:'Giới thiệu sản phẩm cho người khác xem → 展示.'},
     {sentence:'他终于有机会＿＿自己的抱负了。',options:['展示','施展'],answer:1,why:'施展抱负 = thực hiện hoài bão (phát huy hết khả năng của mình).'}
   ]},

  {pair:'敷衍 — 凑合',
   same:'Đều có thể chỉ việc làm không hết lòng, không nghiêm túc; đều hay dùng trong khẩu ngữ.',
   sameEx:{zh:'做事不能敷衍，也不能凑合。',vn:'Làm việc không được qua loa, cũng không được làm cho có.'},
   items:[
     {word:'敷衍',points:[
       'Đối phó qua loa, KHÔNG THẬT LÒNG với người hoặc việc — nghĩa chê trách.',
       'Mang tân ngữ chỉ NGƯỜI: 敷衍客户, 别敷衍我.',
       'Thành ngữ: 敷衍了事 (làm cho xong chuyện).'
     ],ex:[{zh:'我们不怠慢、不敷衍每一位客户。',vn:'Chúng tôi không lạnh nhạt, không qua loa với bất kỳ khách hàng nào.'},
          {zh:'你别用“随便”来敷衍我。',vn:'Cậu đừng lấy câu "tuỳ" ra để đối phó với tớ.'}]},
     {word:'凑合',points:[
       'Chấp nhận TẠM với điều kiện chưa tốt: 凑合着用 / 吃 / 住, 凑合一晚.',
       'Không mang tân ngữ chỉ người (không nói 凑合客户).',
       'Còn làm tính từ "tàm tạm, cũng được": 还凑合 — không nhất thiết mang nghĩa xấu.'
     ],ex:[{zh:'没有床，只有一张沙发，你就凑合一晚吧。',vn:'Không có giường, chỉ có cái sofa, cậu ngủ tạm một đêm nhé.'},
          {zh:'我们想方设法做好每一单业务，多忙都不凑合。',vn:'Chúng tôi tìm mọi cách làm tốt từng đơn, bận mấy cũng không làm cho có.'}]}
   ],
   quiz:[
     {sentence:'你别用这些话来＿＿我，我要听真话。',options:['敷衍','凑合'],answer:0,why:'Có tân ngữ chỉ người (我), nghĩa đối phó không thật lòng → 敷衍.'},
     {sentence:'旅馆都住满了，今晚只能在车里＿＿一晚了。',options:['敷衍','凑合'],answer:1,why:'Chấp nhận tạm điều kiện chưa tốt → 凑合一晚.'},
     {sentence:'——你最近身体怎么样？——还＿＿。',options:['敷衍','凑合'],answer:1,why:'还凑合 = cũng tàm tạm (tính từ). 敷衍 không có cách dùng này.'},
     {sentence:'他对客户的问题总是＿＿几句就挂电话。',options:['敷衍','凑合'],answer:0,why:'Nói vài câu cho qua với khách → 敷衍几句 (thái độ không thật lòng).'}
   ]}
];

// ══════════════════════════════════════════
// BẮC CẦU HÁN–VIỆT
// ══════════════════════════════════════════
var hvBridgeData = {
  easy:[
    {zh:'创立',hv:'sáng lập',vn:'sáng lập, thành lập',note:'Trùng khít.'},
    {zh:'指标',hv:'chỉ tiêu',vn:'chỉ tiêu',note:'Trùng khít — động từ đi kèm là 完成指标.'},
    {zh:'等级',hv:'đẳng cấp',vn:'đẳng cấp, cấp bậc',note:'Trùng khít.'},
    {zh:'技巧',hv:'kỹ xảo',vn:'kỹ năng, kỹ xảo',note:'Trùng khít; tiếng Việt hay nói "kỹ năng" hơn.'},
    {zh:'传授',hv:'truyền thụ',vn:'truyền dạy',note:'Trùng khít: "truyền thụ kiến thức" = 传授知识.'},
    {zh:'人格',hv:'nhân cách',vn:'nhân cách',note:'Trùng khít. 人格魅力 = sức hút nhân cách.'},
    {zh:'时机',hv:'thời cơ',vn:'thời cơ',note:'Trùng khít.'},
    {zh:'才干',hv:'tài cán',vn:'tài năng, năng lực',note:'Tiếng Việt có "tài cán" (chẳng tài cán gì) — cùng gốc.'},
    {zh:'年度',hv:'niên độ',vn:'năm (công tác, tài chính)',note:'Như "niên độ kế toán".'},
    {zh:'考核',hv:'khảo hạch',vn:'kiểm tra đánh giá',note:'Gần "sát hạch, khảo hạch".'},
    {zh:'资深',hv:'tư thâm',vn:'thâm niên',note:'Đảo ngược so với tiếng Việt "thâm niên" — nhớ chữ 深 (thâm) là giữ.'}
  ],
  idiom:[
    {zh:'全力以赴',hv:'toàn lực dĩ phó',vn:'dốc toàn lực',note:'"Toàn lực" ai cũng hiểu; 赴 = lao tới.'},
    {zh:'想方设法',hv:'tưởng phương thiết pháp',vn:'nghĩ trăm phương ngàn kế',note:'Tương đương "tìm mọi cách, trăm phương ngàn kế".'},
    {zh:'兢兢业业',hv:'căng căng nghiệp nghiệp',vn:'cần mẫn, cẩn trọng',note:'Như "cần cù chịu khó, tận tuỵ với việc".'},
    {zh:'鸦雀无声',hv:'nha tước vô thanh',vn:'im phăng phắc',note:'Quạ và sẻ cũng không kêu — lặng như tờ.'}
  ],
  trap:[
    {zh:'敷衍',hv:'phu diễn',vn:'qua loa, làm lấy lệ',
     warn:'BẪY: "phu diễn" trong tiếng Việt là trình bày, diễn giải rộng ra. 敷衍 tiếng Trung lại là đối phó cho qua, không thật lòng.'},
    {zh:'回报',hv:'hồi báo',vn:'đền đáp',
     warn:'Không phải "báo cáo lại". 回报 = báo đáp, đền đáp; sự đền đáp (丰厚的回报).'},
    {zh:'怠慢',hv:'đãi mạn',vn:'lạnh nhạt, thờ ơ với người',
     warn:'"Mạn" không phải "chậm" (慢 ở đây là coi thường). 怠慢客户 = đối xử lạnh nhạt với khách, không phải phục vụ chậm.'},
    {zh:'计较',hv:'kế giảo',vn:'so đo, chấp nhặt',
     warn:'Không liên quan "kế toán" hay "so sánh" (比较). 不计较 = không chấp nhặt.'},
    {zh:'公道',hv:'công đạo',vn:'lẽ công bằng',
     warn:'Không phải "con đường chung". 讨公道 = đòi lại công bằng; 价格公道 = giá phải chăng.'},
    {zh:'风气',hv:'phong khí',vn:'nếp sống, không khí chung',
     warn:'Không phải "khí trời, gió". 学习风气 = không khí học tập (thói quen chung của tập thể).'}
  ]
};

// ══════════════════════════════════════════
// GHÉP TỪ — cụm trong bài khoá và phần 练习
// ══════════════════════════════════════════
var matchData = [
  {left:'完成',right:'指标'},
  {left:'使了个',right:'眼色'},
  {left:'讨',right:'公道'},
  {left:'展示',right:'才干'},
  {left:'施展',right:'才能'},
  {left:'沏',right:'茶'},
  {left:'传授',right:'技巧'},
  {left:'年度',right:'考核'},
  {left:'敬业',right:'精神'},
  {left:'丰厚的',right:'回报'},
  {left:'人格',right:'魅力'},
  {left:'抓住',right:'时机'},
  {left:'充满',right:'激情'},
  {left:'飞跃式的',right:'提高'},
  {left:'资深',right:'员工'},
  {left:'被',right:'边缘化'},
  {left:'计较',right:'得失'},
  {left:'学习',right:'风气'},
  {left:'老',right:'搭档'},
  {left:'敷衍',right:'了事'}
];

// ══════════════════════════════════════════
// ĐIỀN TỪ
// ══════════════════════════════════════════
var fillData = [
  {pre:'新校长',blank:'上任',post:'的第一天，就到每个班去听课。',hint:'(nhậm chức)',ans:'上任'},
  {pre:'他应聘的',blank:'职位',post:'是销售经理。',hint:'(chức vụ, vị trí)',ans:'职位'},
  {pre:'客人来了，奶奶赶紧去',blank:'沏',post:'茶。',hint:'(pha)',ans:'沏'},
  {pre:'我们班的学习',blank:'风气',post:'特别好，大家互相帮助。',hint:'(nếp, không khí chung)',ans:'风气'},
  {pre:'他们俩合作了十年，配合得非常默契，是一对老',blank:'搭档',post:'。',hint:'(cộng sự)',ans:'搭档'},
  {pre:'毕业以后，她',blank:'就职',post:'于一家外贸公司。',hint:'(nhận việc, làm việc tại)',ans:'就职'},
  {pre:'刚转学的时候，我总觉得自己被',blank:'边缘',post:'化了。',hint:'(rìa, bên lề)',ans:'边缘'},
  {pre:'妈妈向我使了个',blank:'眼色',post:'，让我别再说下去了。',hint:'(ánh mắt ra hiệu)',ans:'眼色'},
  {pre:'这个月的销售',blank:'指标',post:'我们提前完成了。',hint:'(chỉ tiêu)',ans:'指标'},
  {pre:'你',blank:'成天',post:'玩手机，眼睛还要不要了？',hint:'(suốt ngày)',ans:'成天'},
  {pre:'从技术上讲，这两个队根本不是一个',blank:'等级',post:'。',hint:'(đẳng cấp)',ans:'等级'},
  {pre:'他觉得不公平，要去找经理讨',blank:'公道',post:'。',hint:'(lẽ công bằng)',ans:'公道'},
  {pre:'明明是你的错，还怪别人，真',blank:'不像话',post:'！',hint:'(quá đáng, vô lý)',ans:'不像话'},
  {pre:'大孩子不应该',blank:'欺负',post:'小孩子。',hint:'(bắt nạt)',ans:'欺负'},
  {pre:'这个项目让他充分展示了自己的',blank:'才干',post:'。',hint:'(năng lực, tài năng)',ans:'才干'},
  {pre:'离高考只有一个月了，我们必须',blank:'全力以赴',post:'。',hint:'(dốc toàn lực)',ans:'全力以赴'},
  {pre:'每当我遇到困难时，他总是',blank:'想方设法',post:'帮助我。',hint:'(tìm mọi cách)',ans:'想方设法'},
  {pre:'',blank:'忙碌',post:'了一天，他回到家倒头就睡。',hint:'(bận rộn)',ans:'忙碌'},
  {pre:'我永远不会忘记和你们在一起的美好',blank:'时光',post:'。',hint:'(quãng thời gian)',ans:'时光'},
  {pre:'经过一年的努力，他的汉语水平有了',blank:'飞跃',post:'式的提高。',hint:'(vượt bậc)',ans:'飞跃'},
  {pre:'快递三天还没到，我打电话向公司',blank:'投诉',post:'了。',hint:'(khiếu nại)',ans:'投诉'},
  {pre:'同事小张对待工作总是充满',blank:'激情',post:'。',hint:'(nhiệt huyết)',ans:'激情'},
  {pre:'每到年底，各部门都要写',blank:'年度',post:'总结。',hint:'(năm công tác)',ans:'年度'},
  {pre:'新员工要通过三个月的',blank:'考核',post:'才能转正。',hint:'(đánh giá)',ans:'考核'},
  {pre:'王老师生病了还坚持来上课，真是太',blank:'敬业',post:'了。',hint:'(tận tuỵ với nghề)',ans:'敬业'},
  {pre:'爷爷在工厂里',blank:'兢兢业业',post:'地干了四十年。',hint:'(cần mẫn, cẩn trọng)',ans:'兢兢业业'},
  {pre:'只要真心付出，早晚会得到',blank:'回报',post:'的。',hint:'(sự đền đáp)',ans:'回报'},
  {pre:'和客户沟通也需要一定的',blank:'技巧',post:'。',hint:'(kỹ năng)',ans:'技巧'},
  {pre:'老师傅把自己的经验毫无保留地',blank:'传授',post:'给了徒弟。',hint:'(truyền dạy)',ans:'传授'},
  {pre:'批评孩子的时候，也要尊重他的',blank:'人格',post:'。',hint:'(nhân cách)',ans:'人格'}
];

// ══════════════════════════════════════════
// SẮP XẾP CÂU — mỗi điểm ngữ pháp (唯独 · 明明 · 大不了) ít nhất 2 câu
// ══════════════════════════════════════════
var sortData = [
  {words:['大家','都','去了','，','唯独','你','没有','去成','。'],ans:'大家都去了，唯独你没有去成。',audio:'大家都去了，唯独你没有去成。'},
  {words:['别的菜','我都爱吃','，','唯独','不喜欢','苦瓜','。'],ans:'别的菜我都爱吃，唯独不喜欢苦瓜。',audio:'别的菜我都爱吃，唯独不喜欢苦瓜。'},
  {words:['你','明明','知道','，','为什么','不告诉我','？'],ans:'你明明知道，为什么不告诉我？',audio:'你明明知道，为什么不告诉我？'},
  {words:['哼','，','太不像话了','，','明明','是在','欺负人','。'],ans:'哼，太不像话了，明明是在欺负人。',audio:'哼，太不像话了，明明是在欺负人。'},
  {words:['失败了','不要紧','，','大不了','从头','再来','。'],ans:'失败了不要紧，大不了从头再来。',audio:'失败了不要紧，大不了从头再来。'},
  {words:['衣服丢了','就丢了','，','大不了','再买','一件','。'],ans:'衣服丢了就丢了，大不了再买一件。',audio:'衣服丢了就丢了，大不了再买一件。'},
  {words:['我和小林','决定','不和','他们','计较','。'],ans:'我和小林决定不和他们计较。',audio:'我和小林决定不和他们计较。'},
  {words:['我','把','工作经验','传授','给','新人','。'],ans:'我把工作经验传授给新人。',audio:'我把工作经验传授给新人。'},
  {words:['点名','找我们的','客户','越来越多','。'],ans:'点名找我们的客户越来越多。',audio:'点名找我们的客户越来越多。'},
  {words:['我们','每天','都','充满激情地','工作','。'],ans:'我们每天都充满激情地工作。',audio:'我们每天都充满激情地工作。'},
  {words:['我','还是','向小林','使了','个','眼色','。'],ans:'我还是向小林使了个眼色。',audio:'我还是向小林使了个眼色。'},
  {words:['赵姐','忙着','沏','茶','和','咖啡','。'],ans:'赵姐忙着沏茶和咖啡。',audio:'赵姐忙着沏茶和咖啡。'}
];

// ══════════════════════════════════════════
// CHỌN TỪ THÍCH HỢP
// ══════════════════════════════════════════
var errorFixMode = 'wordchoice';
var errorFixData = [
  {wrong:'同学们都交了作业，____小王没交。',opts:['唯独','单独','独自','孤独'],ans:0,
   exp:'Vế trước nêu tình hình chung (都交了), vế sau tách riêng ngoại lệ → phó từ 唯独. 单独 = riêng lẻ (单独谈话); 独自 = một mình (独自回家); 孤独 là tính từ "cô đơn".'},
  {wrong:'你____看见我了，为什么说没看见？',opts:['明明','明显','明白','光明'],ans:0,
   exp:'明明 + sự thật, vế sau là câu hỏi ngược (为什么……) → trách móc. 明显 là tính từ "rõ rệt" (很明显); 明白 = hiểu; 光明 = sáng sủa.'},
  {wrong:'这次没考好也没关系，____下次再考。',opts:['大不了','了不起','不得了','受不了'],ans:0,
   exp:'Nêu phương án xấu nhất vẫn chấp nhận được → 大不了 (cùng lắm thì). 了不起 = giỏi giang; 不得了 = ghê gớm, nghiêm trọng; 受不了 = chịu không nổi.'},
  {wrong:'他还是个孩子，你别跟他____了。',opts:['计较','比较','计算','较量'],ans:0,
   exp:'跟 + người + 计较 = chấp nhặt với ai. 比较 = so sánh (không dùng với 跟他 theo nghĩa chấp nhặt); 计算 = tính toán con số; 较量 = đọ sức.'},
  {wrong:'客人来了，我们可不能____了他们。',opts:['怠慢','缓慢','傲慢','散漫'],ans:0,
   exp:'怠慢 + người = đối xử lạnh nhạt với ai (động từ mang tân ngữ). 缓慢 = chậm chạp; 傲慢 = kiêu ngạo; 散漫 = lề mề, tản mạn — đều là tính từ, không mang tân ngữ 他们.'},
  {wrong:'你别用“随便”来____我，到底想去哪儿？',opts:['敷衍','凑合','马虎','糊涂'],ans:0,
   exp:'Đối phó qua loa với NGƯỜI → 敷衍 + 我. 凑合 không mang tân ngữ chỉ người; 马虎, 糊涂 là tính từ (cẩu thả, hồ đồ).'},
  {wrong:'没有床，只有一张沙发，你就____一晚吧。',opts:['凑合','敷衍','计较','怠慢'],ans:0,
   exp:'Chấp nhận ngủ tạm trong điều kiện chưa tốt → 凑合一晚 (câu 练习2 của sách). 敷衍, 怠慢 hướng tới người khác; 计较 = so đo.'},
  {wrong:'爱因斯坦____了相对论。',opts:['创立','创办','开办','举办'],ans:0,
   exp:'Lý thuyết, học thuyết → 创立. 创办, 开办 dùng cho trường học, công ty; 举办 = tổ chức (hoạt động, hội nghị).'},
  {wrong:'学校门口____着同学们的书法作品。',opts:['展示','施展','发挥','表演'],ans:0,
   exp:'Trưng bày đồ vật cho người xem → 展示. 施展, 发挥 đi với năng lực (才能, 作用); 表演 = biểu diễn, không mang tân ngữ 作品.'},
  {wrong:'在这个小公司里，他的本领根本____不开。',opts:['施展','展示','表现','发展'],ans:0,
   exp:'Cụm cố định 施展不开 = không có đất dụng võ. 展示, 表现, 发展 không kết hợp với 不开 như vậy.'},
  {wrong:'现在____还不成熟，我们再等等吧。',opts:['时机','时刻','时代','机器'],ans:0,
   exp:'时机成熟 = thời cơ chín muồi. 时刻 = khoảnh khắc; 时代 = thời đại; 机器 = máy móc — đều không đi với 成熟 ở nghĩa này.'},
  {wrong:'他是一位有二十年经验的____记者。',opts:['资深','深刻','深厚','资格'],ans:0,
   exp:'资深 + danh từ nghề = lâu năm, dày dạn. 深刻 = sâu sắc (印象深刻); 深厚 = sâu đậm (感情深厚); 资格 là danh từ "tư cách".'},
  {wrong:'别____了，你连自行车都不会骑，还说要参加比赛？',opts:['吹牛','吹风','牛气','吵架'],ans:0,
   exp:'Nói phóng đại khả năng của mình → 吹牛 (khoác lác). 吹风 = hóng gió; 牛气 = ngạo mạn; 吵架 = cãi nhau — không hợp với ý vạch trần lời khoác lác.'},
  {wrong:'会还没开完，他就偷偷地____走了。',opts:['溜','逛','追','搬'],ans:0,
   exp:'Lén bỏ đi → 偷偷地溜走. 逛 = dạo; 追 = đuổi theo; 搬 = chuyển — đều không hợp với "lén lút bỏ đi".'},
  {wrong:'“____，你说得好听，我才不信呢！”',opts:['哼','嗯','哈','哎'],ans:0,
   exp:'Thán từ tỏ ý không tin, khinh thường → 哼 (hng). 嗯 = ừ (đồng ý) — mâu thuẫn với 不信; 哈 = cười; 哎 = gọi hoặc ngạc nhiên.'},
  {wrong:'早知今日，何必____？',opts:['当初','当时','当年','以前'],ans:0,
   exp:'Câu cố định 早知今日，何必当初 = biết thế này thì hồi đó đã chẳng làm. Chỉ dùng 当初 (lúc ban đầu khởi sự).'},
  {wrong:'明明是你把书弄丢了，还说不知道，真____！',opts:['不像话','不要紧','不客气','了不起'],ans:0,
   exp:'Phê phán hành vi vô lý → 真不像话. 不要紧 = không sao; 不客气 = đừng khách sáo; 了不起 = giỏi — đều ngược ý chê trách.'},
  {wrong:'他刚来的时候常被人____，现在大家都很尊重他。',opts:['欺负','辜负','负责','负担'],ans:0,
   exp:'被人欺负 = bị bắt nạt. 辜负 (bài 3) = phụ lòng (辜负期望); 负责 = chịu trách nhiệm; 负担 = gánh nặng.'}
];

// ══════════════════════════════════════════
// DỊCH — câu ghép, ôn từ HSK 6 bài 1–5 và HSK 4–5
// ══════════════════════════════════════════
var translateData = [
  {vi:'Cả lớp đều hào hứng đăng ký, chỉ riêng cậu ấy suốt ngày ru rú trong ký túc xá không chịu ra ngoài.',zh:'全班同学都兴致勃勃地报了名，唯独他成天待在宿舍里不出来。',py:'Quán bān tóngxué dōu xìngzhì bóbó de bàole míng, wéidú tā chéngtiān dāi zài sùshè li bù chūlái.',goiY:['……都……，唯独……','成天','兴致勃勃'],giai:'Vế trước nêu tình hình chung (都), 唯独 tách riêng một ngoại lệ đối lập; 成天 (suốt ngày) đứng ngay trước động từ 待. 兴致勃勃 ôn bài 5.'},
  {vi:'Cậu rõ ràng đã hứa với tớ là sẽ đến đúng giờ, vậy mà lại muộn nửa tiếng, thật quá đáng!',zh:'你明明答应过我要准时来，却又迟到了半个小时，真不像话！',py:'Nǐ míngmíng dāying guo wǒ yào zhǔnshí lái, què yòu chídàole bàn ge xiǎoshí, zhēn búxiànghuà!',goiY:['明明……却……','不像话'],giai:'明明 + sự thật, 却 + việc trái ngược → câu trách móc; "thật quá đáng" = 真不像话, không dịch word-by-word thành 太过分的.'},
  {vi:'Lần thi này làm không tốt cũng chẳng sao, cùng lắm thì học kỳ sau dốc hết sức, làm lại từ đầu.',zh:'这次考试没考好也没什么，大不了下学期全力以赴，从头再来。',py:'Zhè cì kǎoshì méi kǎohǎo yě méi shénme, dàbuliǎo xià xuéqī quánlì-yǐfù, cóngtóu zài lái.',goiY:['大不了','全力以赴','从头再来'],giai:'大不了 (cùng lắm thì) đứng đầu vế sau, nêu phương án xấu nhất mà vẫn chấp nhận được; vế trước thường có 也没什么 / 不要紧 để trấn an.'},
  {vi:'Đã là mọi người bầu cậu làm lớp trưởng thì cậu đừng so đo với mấy bạn đó nữa, hãy tìm mọi cách làm cho nếp sinh hoạt của lớp tốt lên.',zh:'既然大家选你当班长，你就别和那几个同学计较了，还是想方设法把班里的风气搞好吧。',py:'Jìrán dàjiā xuǎn nǐ dāng bānzhǎng, nǐ jiù bié hé nà jǐ ge tóngxué jìjiào le, háishi xiǎngfāng-shèfǎ bǎ bān li de fēngqì gǎohǎo ba.',goiY:['既然……就……','计较','想方设法','风气'],giai:'既然 + sự thật đã có, 就 + lời khuyên; "so đo với ai" = 和 / 跟 + người + 计较 (giới từ đặt trước động từ).'},
  {vi:'Tuy mới chuyển trường cô ấy có cảm giác bị gạt ra rìa, nhưng cô ấy không hề oán trách, ngược lại còn chủ động thể hiện năng lực của mình với các bạn.',zh:'虽然刚转学时她有被边缘化的感觉，但她并没有埋怨，反而主动向同学们展示自己的才干。',py:'Suīrán gāng zhuǎnxué shí tā yǒu bèi biānyuánhuà de gǎnjué, dàn tā bìng méiyǒu mányuàn, fǎn\'ér zhǔdòng xiàng tóngxuémen zhǎnshì zìjǐ de cáigàn.',goiY:['虽然……但……','边缘化','反而','展示'],giai:'反而 = trái lại: kết quả ngược với điều người ta đoán (bị gạt ra rìa thì tưởng sẽ oán trách); 并没有 nhấn mạnh phủ định. 埋怨 ôn bài 2.'},
  {vi:'Chỉ cần cậu chịu truyền hết mẹo học cho cậu ấy, không giấu chút nào, thì thành tích của cậu ấy nhất định sẽ tiến bộ vượt bậc.',zh:'只要你肯把学习技巧毫无保留地传授给他，他的成绩就一定会有飞跃式的提高。',py:'Zhǐyào nǐ kěn bǎ xuéxí jìqiǎo háowú bǎoliú de chuánshòu gěi tā, tā de chéngjì jiù yídìng huì yǒu fēiyuè shì de tígāo.',goiY:['只要……就……','传授','毫无保留','飞跃式'],giai:'只要 + điều kiện, 就 + kết quả; câu 把: 把 + 技巧 + 传授给 + người. "Tiến bộ vượt bậc" = 有飞跃式的提高. 毫无 ôn bài 4.'},
  {vi:'Thay vì suốt ngày khoác lác với người ta trên mạng, chi bằng tĩnh tâm lại, cần mẫn làm cho tốt việc đang trong tay.',zh:'与其成天在网上跟别人吹牛，不如静下心来，兢兢业业地把手头的事做好。',py:'Yǔqí chéngtiān zài wǎng shang gēn biérén chuīniú, bùrú jìng xià xīn lái, jīngjīng-yèyè de bǎ shǒutóu de shì zuòhǎo.',goiY:['与其……不如……','吹牛','兢兢业业'],giai:'与其 A，不如 B: người nói chọn B; 兢兢业业 làm trạng ngữ phải có 地. 吹牛 là động từ li hợp, không mang tân ngữ phía sau.'},
  {vi:'Tuy hồi đầu bố mẹ không ủng hộ tôi chọn ngành này, nhưng tôi vẫn muốn dùng thành tích tốt để báo đáp họ, không phụ kỳ vọng của họ.',zh:'尽管父母当初并不支持我选这个专业，但我还是想用好成绩回报他们，不辜负他们的期望。',py:'Jǐnguǎn fùmǔ dāngchū bìng bù zhīchí wǒ xuǎn zhège zhuānyè, dàn wǒ háishi xiǎng yòng hǎo chéngjì huíbào tāmen, bù gūfù tāmen de qīwàng.',goiY:['尽管……但……还是……','当初','回报','辜负'],giai:'尽管 (sự thật đã xảy ra) + 但……还是……; không dùng 即使 vì việc bố mẹ không ủng hộ là có thật. 辜负、期望 ôn bài 3.'},
  {vi:'Rõ ràng là cậu ta bắt nạt người khác trước, vậy mà thầy lại chỉ phê bình tôi; tôi bất giác muốn đi tìm cô chủ nhiệm đòi lẽ công bằng, nhưng nghĩ lại thấy không đáng.',zh:'明明是他先欺负人，老师却只批评了我，我不由得想去找班主任讨个公道，可转念一想，又觉得不值得。',py:'Míngmíng shì tā xiān qīfu rén, lǎoshī què zhǐ pīpíngle wǒ, wǒ bùyóude xiǎng qù zhǎo bānzhǔrèn tǎo ge gōngdao, kě zhuǎnniàn yì xiǎng, yòu juéde bù zhíde.',goiY:['明明……却……','欺负','讨个公道','不由得'],giai:'明明……却…… nêu sự bất công; 不由得 (bài 2) = bất giác, không kìm được; 可转念一想 = nhưng nghĩ lại — ba vế nối bằng 却, 可.'},
  {vi:'Mọi người đều khuyên tôi bỏ cuộc tranh cử chủ tịch hội học sinh, chỉ riêng người cộng sự lâu năm luôn động viên tôi: "Chỉ cần cậu dốc hết sức, dù có thua cũng chẳng có gì to tát."',zh:'大家都劝我放弃竞选学生会主席，唯独我的老搭档一直鼓励我：“只要你全力以赴，就算输了也没什么大不了的。”',py:'Dàjiā dōu quàn wǒ fàngqì jìngxuǎn xuéshēnghuì zhǔxí, wéidú wǒ de lǎo dādàng yìzhí gǔlì wǒ: "Zhǐyào nǐ quánlì-yǐfù, jiùsuàn shūle yě méi shénme dàbuliǎo de."',goiY:['唯独','搭档','只要……就算……也……','没什么大不了的'],giai:'唯独 tách người cộng sự ra khỏi "mọi người"; trong lời thoại lồng 只要 (điều kiện) với 就算……也…… (giả thiết nhượng bộ); 没什么大不了的 = chẳng có gì to tát (大不了 dùng như tính từ).'}
];

// Chiều Trung → Việt — bám ý bài khoá, nội dung khác chiều trên
var translateDataRev = [
  {vi:'Ngày đầu nhận chức, "tôi" đã nghe nói không ít nhân viên thâm niên làm ở đây ngay từ buổi đầu công ty mới thành lập.',zh:'上任第一天，“我”就听说不少资深员工从公司创立之初就在这里工作了。',py:'Shàngrèn dì-yī tiān, "wǒ" jiù tīngshuō bùshǎo zīshēn yuángōng cóng gōngsī chuànglì zhī chū jiù zài zhèlǐ gōngzuò le.',goiY:['上任 = nhận chức','资深 = thâm niên, lâu năm','创立之初 = buổi đầu thành lập'],giai:'从……之初就…… = ngay từ buổi đầu … đã …; 资深员工 dịch "nhân viên thâm niên / lâu năm", không dịch âm "tư thâm".'},
  {vi:'Chị Triệu pha trà cho cả anh Trương và chị Tôn, chỉ riêng tôi và Tiểu Lâm là không có.',zh:'赵姐给张哥和孙姐都沏了茶，唯独没有给“我”和小林。',py:'Zhào jiě gěi Zhāng gē hé Sūn jiě dōu qīle chá, wéidú méiyǒu gěi "wǒ" hé Xiǎo Lín.',goiY:['沏 = pha (trà)','唯独 = chỉ riêng'],giai:'都……，唯独没有…… : dịch tự nhiên "chỉ riêng … là không (có)", không cần giữ trật tự chữ; 姐, 哥 sau họ dịch là "chị …, anh …".'},
  {vi:'Tiểu Lâm thấy mình bị gạt ra rìa, mặt lập tức biến sắc, "tôi" vội đưa mắt ra hiệu cho cậu ấy.',zh:'小林觉得自己被边缘化了，脸色顿时变了，“我”赶紧向他使了个眼色。',py:'Xiǎo Lín juéde zìjǐ bèi biānyuánhuà le, liǎnsè dùnshí biàn le, "wǒ" gǎnjǐn xiàng tā shǐle ge yǎnsè.',goiY:['边缘化 = bị gạt ra rìa','顿时 = lập tức','使了个眼色 = đưa mắt ra hiệu'],giai:'Ba vế nối tiếp theo thời gian, không cần từ nối; 脸色变了 dịch "biến sắc / sa sầm mặt", 顿时 (bài 2) = ngay lập tức.'},
  {vi:'Người khác suốt ngày tán gẫu, khoác lác, còn công việc của tôi và Tiểu Lâm thì vụ nào cũng đau đầu, có lúc còn không hoàn thành chỉ tiêu.',zh:'别人成天聊天儿、吹牛，而“我”和小林的业务却件件让人头痛，有时还完不成指标。',py:'Biérén chéngtiān liáotiānr, chuīniú, ér "wǒ" hé Xiǎo Lín de yèwù què jiànjiàn ràng rén tóutòng, yǒushí hái wán bu chéng zhǐbiāo.',goiY:['成天 = suốt ngày','而……却…… = còn … thì lại …','完不成指标 = không hoàn thành chỉ tiêu'],giai:'而 nối hai vế đối lập, 却 nhấn mạnh sự trái ngược; 件件 (lượng từ lặp) = vụ nào cũng; 完不成 là bổ ngữ khả năng phủ định.'},
  {vi:'Tiểu Lâm tức đến mức định đi đòi lẽ công bằng, nói lãnh đạo rõ ràng là đang bắt nạt người ta, cùng lắm thì nghỉ việc không làm nữa.',zh:'小林气得要去讨公道，说领导明明是在欺负人，大不了辞职不干了。',py:'Xiǎo Lín qì de yào qù tǎo gōngdao, shuō lǐngdǎo míngmíng shì zài qīfu rén, dàbuliǎo cízhí bú gàn le.',goiY:['讨公道 = đòi lẽ công bằng','明明 = rõ ràng','大不了 = cùng lắm thì'],giai:'气得 + V: tức đến mức …; 大不了 dịch "cùng lắm thì", mang giọng bất cần — không dịch "không to tát".'},
  {vi:'Tuy "tôi" cũng thấy thật quá đáng, nhưng bình tĩnh nghĩ lại thì đây ngược lại là cơ hội tốt để thể hiện năng lực của mình.',zh:'“我”虽然也觉得不像话，但静下来一想，这反而是展示自己才干的好机会。',py:'"Wǒ" suīrán yě juéde búxiànghuà, dàn jìng xiàlái yì xiǎng, zhè fǎn\'ér shì zhǎnshì zìjǐ cáigàn de hǎo jīhuì.',goiY:['虽然……但…… = tuy … nhưng …','反而 = ngược lại','展示 = thể hiện','才干 = năng lực'],giai:'反而 lật ngược đánh giá ở vế trước (tưởng là xấu, hoá ra tốt); 静下来一想 = bình tĩnh nghĩ lại.'},
  {vi:'Họ không những không so đo với người khác mà còn dốc toàn lực, không lạnh nhạt, không qua loa với bất kỳ khách hàng nào.',zh:'他们不但不和别人计较，而且全力以赴，不怠慢、不敷衍任何一位客户。',py:'Tāmen búdàn bù hé biérén jìjiào, érqiě quánlì-yǐfù, bú dàimàn, bù fūyǎn rènhé yí wèi kèhù.',goiY:['不但……而且…… = không những … mà còn …','计较 = so đo','怠慢 = lạnh nhạt','敷衍 = làm qua loa'],giai:'不但……而且…… tăng tiến; 不怠慢、不敷衍 hai động từ chung một tân ngữ 客户 — dịch gộp "không lạnh nhạt, không qua loa với …".'},
  {vi:'Vì họ tìm mọi cách làm tốt từng đơn, bận mấy cũng không làm cho có, nên khách hàng chỉ đích danh tìm họ ngày càng nhiều.',zh:'由于他们想方设法做好每一单业务，多忙都不凑合，所以点名找他们的客户越来越多。',py:'Yóuyú tāmen xiǎngfāng-shèfǎ zuòhǎo měi yí dān yèwù, duō máng dōu bú còuhe, suǒyǐ diǎnmíng zhǎo tāmen de kèhù yuè lái yuè duō.',goiY:['由于……所以…… = vì … nên …','想方设法 = tìm mọi cách','凑合 = làm cho có'],giai:'多 + tính từ + 都…… = dù … mấy cũng …; 点名找 = chỉ đích danh tìm (không dịch "điểm danh").'},
  {vi:'Trong đợt đánh giá cuối năm, thái độ làm việc cần mẫn của họ được khen ngợi, ngay cả những tiền bối lúc đầu không thân thiện cũng trở nên nhiệt tình.',zh:'年度考核时，他们兢兢业业的态度受到了表扬，连当初不友好的前辈们也变得热情起来。',py:'Niándù kǎohé shí, tāmen jīngjīng-yèyè de tàidu shòudàole biǎoyáng, lián dāngchū bù yǒuhǎo de qiánbèimen yě biàn de rèqíng qǐlái.',goiY:['年度考核 = đánh giá cuối năm','连……也…… = ngay cả … cũng …','当初 = lúc đầu'],giai:'连……也…… nhấn mạnh trường hợp khó xảy ra nhất; 热情起来 (bổ ngữ xu hướng 起来) = bắt đầu trở nên nhiệt tình.'},
  {vi:'Là một "học sinh chuyển lớp" nơi công sở, thay vì than phiền bất công, chi bằng coi khó khăn là thời cơ để phát huy tài năng, vì đây chính là lúc thể hiện sức hút nhân cách của bạn.',zh:'作为职场插班生，与其抱怨不公平，不如把困难当成施展才能的时机，因为这正是展示你人格魅力的时候。',py:'Zuòwéi zhíchǎng chābānshēng, yǔqí bàoyuàn bù gōngpíng, bùrú bǎ kùnnan dàngchéng shīzhǎn cáinéng de shíjī, yīnwèi zhè zhèng shì zhǎnshì nǐ réngé mèilì de shíhou.',goiY:['作为 = với tư cách là','与其……不如…… = thay vì … chi bằng …','施展 = phát huy','人格魅力 = sức hút nhân cách'],giai:'与其 A 不如 B nêu lựa chọn tốt hơn; 把 A 当成 B = coi A là B; 插班生 là cách ví von "học sinh vào học giữa chừng" — giữ ngoặc kép khi dịch.'}
];

// ══════════════════════════════════════════
// LUYỆN VIẾT — đề 运用 · 写一写 của sách (tr. 72)
// Đề không phải 缩写 mà là viết kể chuyện theo đề: dàn ý = các câu hỏi gợi ý của đề
// ══════════════════════════════════════════
var writingData = {
  kieu:'sgk', soChu:300,
  de:'这篇课文通过“我”进入职场初期的经历，告诉我们在刚进入职场时可能会遇到一些不公平的对待，可是如果我们不放弃，坚持努力，一定会得到大家的认可。你在进入一个新的团体时（比如：公司、球队、班级、乐队等），是否也遇到过类似的情况，你是怎样做的？最后的结果如何？参考课文以“初入……”为题，写一篇300字左右的短文。',
  prompt:'Bài khoá qua trải nghiệm những ngày đầu đi làm của "tôi" cho chúng ta biết: khi mới bước chân vào môi trường công sở, ta có thể gặp những đối xử không công bằng, nhưng nếu không bỏ cuộc, kiên trì cố gắng thì nhất định sẽ được mọi người công nhận. Khi bước vào một tập thể mới (ví dụ: công ty, đội bóng, lớp học, ban nhạc…), em đã từng gặp tình huống tương tự chưa, em đã làm thế nào? Kết quả cuối cùng ra sao? Hãy tham khảo bài khoá, lấy "初入……" (Những ngày đầu ở …) làm nhan đề, viết một bài văn ngắn khoảng 300 chữ.',
  dan:[
    {hoi:'你进入了一个什么样的新团体？刚去时是什么情况？',goiY:'①题目：初入…… ②刚进……的时候，我以为……，没想到…… ③大家都……，唯独我……'},
    {hoi:'你遇到过什么不公平的对待或困难？',goiY:'①明明……，却…… ②被边缘化的感觉 ③……根本不是一个等级'},
    {hoi:'当时你是怎么想的？',goiY:'①太不像话了 ②大不了…… ③可静下来一想，这反而是展示……的好机会'},
    {hoi:'你是怎样做的？',goiY:'不计较、全力以赴、想方设法、多……都不凑合'},
    {hoi:'最后的结果如何？你有什么收获？',goiY:'①……得到了飞跃式的提高 ②当初……的人也变得热情起来 ③正是施展才能的时机'}
  ],
  tuNen:['唯独','明明','大不了','边缘化','计较','全力以赴','想方设法','凑合','飞跃','施展'],
  cauTruc:[
    {ten:'初入 + tập thể (nhan đề)', nhan:'初入', vd:'初入篮球队', khi:'Đặt nhan đề đúng yêu cầu của đề: 初入 + công ty / đội bóng / lớp học.'},
    {ten:'刚……的时候，我以为……，没想到……', nhan:'以为 / 没想到', vd:'刚进球队的时候，我以为大家会很热情，没想到……', khi:'Mở bài: điều mình tưởng và thực tế trái ngược (bắt chước 练习4 ①).'},
    {ten:'……都……，唯独……', nhan:'唯独', vd:'队员们都有自己的搭档，唯独我一个人练习。', khi:'Tả cảm giác bị tách riêng, bị gạt ra rìa.'},
    {ten:'明明……，却……', nhan:'明明', vd:'我明明练得很认真，教练却总让我坐在场边。', khi:'Nêu sự bất công — thân bài.'},
    {ten:'大不了……！可静下来一想，这反而……', nhan:'大不了 / 反而', vd:'大不了退出球队！可静下来一想，这反而是展示自己的好机会。', khi:'Bước ngoặt tâm lý — phần quan trọng nhất của bài.'},
    {ten:'于是……，从此……', nhan:'于是 / 从此', vd:'于是我决定不和别人计较……从此，当初不理我的队员们也变得热情起来。', khi:'Kể hành động và sự thay đổi theo thời gian.'},
    {ten:'……让我明白，……正是……的时机', nhan:'正是', vd:'这段经历让我明白，遇到困难时，正是施展才能的时机。', khi:'Kết bài rút ra bài học (bắt chước 练习4 ②).'}
  ],
  checklist:[
    'Đã đặt nhan đề theo mẫu "初入……" chưa?',
    'Đủ khoảng 300 chữ Hán chưa (không đếm dấu câu)?',
    'Có kể đủ 4 ý: tình huống ban đầu — sự bất công / khó khăn — em đã làm gì — kết quả chưa?',
    'Đã dùng được ít nhất 6 từ / cấu trúc của bài (唯独, 明明, 大不了, 计较, 全力以赴, 想方设法…) chưa?',
    'Câu kết có rút ra được bài học như bài khoá (không bỏ cuộc, kiên trì thì sẽ được công nhận) chưa?'
  ],
  model:{
    zh:'（题目：初入篮球队）上学期，我转学到了一所新学校，并加入了学校篮球队。刚进球队的时候，我以为大家会很热情，没想到训练时，队员们都有自己的搭档，唯独我一个人在旁边练习投篮。比赛时，我明明练得很认真，教练却总让我坐在场边，我顿时有了被边缘化的感觉。我心想：太不像话了，大不了退出球队！可静下来一想，这反而是展示自己的好机会。于是我决定不和别人计较，全力以赴地训练。每天我都提前一个小时到球场，想方设法提高自己的技术，多累都不凑合。几个月后，我的球技得到了飞跃式的提高，教练终于让我上场了。在一场重要的比赛中，我投进了最后一个球。从此，当初不理我的队员们也变得热情起来，还主动向我请教投篮的技巧。这段经历让我明白，进入新集体遇到困难时，正是施展才能的时机。只要不放弃，坚持努力，就一定会得到大家的认可。',
    py:'(Tímù: Chū rù lánqiúduì) Shàng xuéqī, wǒ zhuǎnxué dàole yì suǒ xīn xuéxiào, bìng jiārùle xuéxiào lánqiúduì. Gāng jìn qiúduì de shíhou, wǒ yǐwéi dàjiā huì hěn rèqíng, méi xiǎngdào xùnliàn shí, duìyuánmen dōu yǒu zìjǐ de dādàng, wéidú wǒ yí ge rén zài pángbiān liànxí tóulán. Bǐsài shí, wǒ míngmíng liàn de hěn rènzhēn, jiàoliàn què zǒng ràng wǒ zuò zài chǎng biān, wǒ dùnshí yǒule bèi biānyuánhuà de gǎnjué. Wǒ xīn xiǎng: tài búxiànghuà le, dàbuliǎo tuìchū qiúduì! Kě jìng xiàlái yì xiǎng, zhè fǎn\'ér shì zhǎnshì zìjǐ de hǎo jīhuì. Yúshì wǒ juédìng bù hé biérén jìjiào, quánlì-yǐfù de xùnliàn. Měi tiān wǒ dōu tíqián yí ge xiǎoshí dào qiúchǎng, xiǎngfāng-shèfǎ tígāo zìjǐ de jìshù, duō lèi dōu bú còuhe. Jǐ ge yuè hòu, wǒ de qiújì dédàole fēiyuè shì de tígāo, jiàoliàn zhōngyú ràng wǒ shàngchǎng le. Zài yì chǎng zhòngyào de bǐsài zhōng, wǒ tóujìnle zuìhòu yí ge qiú. Cóngcǐ, dāngchū bù lǐ wǒ de duìyuánmen yě biàn de rèqíng qǐlái, hái zhǔdòng xiàng wǒ qǐngjiào tóulán de jìqiǎo. Zhè duàn jīnglì ràng wǒ míngbai, jìnrù xīn jítǐ yùdào kùnnan shí, zhèng shì shīzhǎn cáinéng de shíjī. Zhǐyào bú fàngqì, jiānchí nǔlì, jiù yídìng huì dédào dàjiā de rènkě.',
    vn:'(Nhan đề: Những ngày đầu ở đội bóng rổ) Học kỳ trước, tôi chuyển đến một trường mới và gia nhập đội bóng rổ của trường. Lúc mới vào đội, tôi cứ tưởng mọi người sẽ rất nhiệt tình, không ngờ khi tập luyện, ai cũng có bạn tập riêng, chỉ riêng tôi một mình tập ném rổ ở bên cạnh. Khi thi đấu, tôi rõ ràng tập rất chăm, vậy mà huấn luyện viên lúc nào cũng bắt tôi ngồi ngoài sân, tôi lập tức có cảm giác bị gạt ra rìa. Tôi nghĩ bụng: quá đáng thật, cùng lắm thì rời đội! Nhưng bình tĩnh nghĩ lại, đây ngược lại là cơ hội tốt để thể hiện bản thân. Thế là tôi quyết định không so đo với người khác, dốc toàn lực tập luyện. Ngày nào tôi cũng đến sân sớm một tiếng, tìm mọi cách nâng cao kỹ thuật, mệt mấy cũng không tập cho có. Vài tháng sau, kỹ thuật chơi bóng của tôi tiến bộ vượt bậc, cuối cùng huấn luyện viên cũng cho tôi ra sân. Trong một trận đấu quan trọng, tôi ghi được quả bóng cuối cùng. Từ đó, những đồng đội lúc đầu không để ý đến tôi cũng trở nên nhiệt tình, còn chủ động hỏi tôi mẹo ném rổ. Trải nghiệm này giúp tôi hiểu rằng khi bước vào tập thể mới mà gặp khó khăn, đó chính là thời cơ để phát huy tài năng. Chỉ cần không bỏ cuộc, kiên trì cố gắng thì nhất định sẽ được mọi người công nhận.'
  }
};

// ══════════════════════════════════════════
// LUYỆN NÓI — đúng bảng 练习5 của sách: 根据提示，简述课文主要内容
// ══════════════════════════════════════════
var speakingData = {
  intro:'Đây là bảng bài tập 5 trong sách: <b>根据提示，简述课文主要内容</b>. Mỗi câu hỏi là một dòng của bảng, cột gợi ý giữ nguyên như sách. Bấm loa nghe câu hỏi, <b>tự ghi âm câu trả lời trước</b> rồi mới mở câu mẫu. Cố dùng đúng các từ trong gợi ý.',
  questions:[
    {q_zh:'说说“我”在这家公司的职位以及公司的人员构成情况。',
     q_vn:'Hãy nói về chức vụ của "tôi" ở công ty này và thành phần nhân sự của công ty.',
     hint:'咨询师、老手、新手、资深员工',
     sample:'“我”在这家公司的职位是咨询师。这家公司老手多、新手少，不少资深员工在公司创立之初就在这里工作了。',
     sample_vn:'"Tôi" làm chuyên viên tư vấn ở công ty này. Công ty nhiều người lão luyện, ít người mới, không ít nhân viên thâm niên đã làm ở đây từ buổi đầu công ty mới thành lập.',
     note:'Nêu 2 ý: chức vụ (……的职位是……) và nhân sự (……多、……少). Có thể thêm 创立之初 cho câu văn đầy đặn.'},
    {q_zh:'上班第一天，其他老员工对“我”和小林的态度如何？',
     q_vn:'Ngày đầu đi làm, các nhân viên cũ đối xử với "tôi" và Tiểu Lâm thế nào?',
     hint:'①给……沏茶/咖啡 ②唯独剩下 ③边缘化',
     sample:'上班第一天，赵姐给张哥、孙姐沏茶和咖啡，唯独剩下“我”和小林。小林的脸色顿时变了，“我”也有被边缘化的感觉。',
     sample_vn:'Ngày đầu đi làm, chị Triệu pha trà, cà phê cho anh Trương, chị Tôn, chỉ còn lại "tôi" và Tiểu Lâm. Mặt Tiểu Lâm lập tức biến sắc, "tôi" cũng có cảm giác bị gạt ra rìa.',
     note:'唯独剩下 + người: chỉ còn lại … (bị bỏ sót). 边缘化 dùng ở dạng bị động 被边缘化.'},
    {q_zh:'“我”和小林在公司的工作与别人有何不同？为什么？',
     q_vn:'Công việc của "tôi" và Tiểu Lâm ở công ty khác người khác thế nào? Vì sao?',
     hint:'①“我”和小林的业务……，件件……，有时候…… ②别人的工作……，成天……，还有人…… ③我发现，领导分配业务时，……',
     sample:'“我”和小林的业务很难做，件件都让人头痛，有时候还完不成指标；别人的工作很快就完了，成天聊天儿、吹牛，还有人溜出去逛街。“我”发现，领导分配业务时，总是让资深员工先挑，他们挑剩下的才是我们的。',
     sample_vn:'Việc của "tôi" và Tiểu Lâm rất khó, vụ nào cũng đau đầu, có lúc còn không đạt chỉ tiêu; việc của người khác xong rất nhanh, họ suốt ngày tán gẫu, khoác lác, còn có người chuồn đi dạo phố. "Tôi" phát hiện khi phân việc, lãnh đạo luôn để nhân viên thâm niên chọn trước, phần họ chọn thừa mới đến lượt chúng tôi.',
     note:'Đối lập hai vế bằng dấu chấm phẩy hoặc 而; phần "vì sao" dùng 我发现…… + 才 (…… mới là của chúng tôi).'},
    {q_zh:'“我”和小林如何对待自己的工作？',
     q_vn:'"Tôi" và Tiểu Lâm đối xử với công việc của mình như thế nào?',
     hint:'不计较、全力以赴、不怠慢、不敷衍、想方设法、不凑合',
     sample:'我们决定不和他们计较，全力以赴投入工作，不怠慢、不敷衍每一位客户，想方设法做好每一单业务，多忙都不凑合。',
     sample_vn:'Chúng tôi quyết định không so đo với họ, dốc toàn lực lao vào công việc, không lạnh nhạt, không qua loa với khách hàng nào, tìm mọi cách làm tốt từng đơn, bận mấy cũng không làm cho có.',
     note:'Nói liền một hơi 6 cụm theo đúng thứ tự gợi ý; nhớ 和 + người + 计较 và 多忙都不…….'},
    {q_zh:'“我们”在公司的处境有了什么变化？',
     q_vn:'Hoàn cảnh của "chúng tôi" ở công ty đã thay đổi thế nào?',
     hint:'①业务能力…… ②客户…… ③接手…… ④年度考核…… ⑤……热情起来 ⑥新人……',
     sample:'我们的业务能力得到了飞跃式的提高，点名找我们的客户越来越多，领导还让我们接手别人的活儿。年度考核时，我们受到了表扬，也得到了丰厚的回报，当初不友好的前辈们也变得热情起来。后来公司来了新人，“我”把经验和技巧毫无保留地传授给了他们。',
     sample_vn:'Năng lực nghiệp vụ của chúng tôi tiến bộ vượt bậc, khách hàng chỉ đích danh tìm chúng tôi ngày càng nhiều, lãnh đạo còn giao cho chúng tôi tiếp nhận việc của người khác. Đánh giá cuối năm, chúng tôi được khen, cũng được đền đáp hậu hĩnh; những tiền bối lúc đầu không thân thiện cũng trở nên nhiệt tình. Về sau công ty có người mới, "tôi" truyền hết kinh nghiệm và kỹ năng cho họ, không giấu chút nào.',
     note:'Sáu gợi ý = sáu câu ngắn theo trình tự thời gian; dùng 后来 / 再后来 để chuyển ý.'},
    {q_zh:'通过“职场插班生”的经历，“我”有什么收获？',
     q_vn:'Qua trải nghiệm làm "học sinh chuyển lớp" nơi công sở, "tôi" thu hoạch được gì?',
     hint:'①展示……魅力 ②施展才能',
     sample:'“我”明白了，作为职场插班生，进入新单位的过程正是展示人格魅力的时候，遇到困难也是施展才能的时机。',
     sample_vn:'"Tôi" hiểu ra rằng, là người mới vào giữa chừng nơi công sở, quá trình bước vào đơn vị mới chính là lúc thể hiện sức hút nhân cách, gặp khó khăn cũng là thời cơ phát huy tài năng.',
     note:'Câu kết dùng 正是……的时候 và 也是……的时机 — hai vế song song như câu cuối bài khoá.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🎧 NGHE THEO DẠNG ĐỀ HSK 6 — 听力 (sách HSK 6 không có sách bài tập nghe)
// ══════════════════════════════════════════════════════════════
var listenExamData = {
  "intro": "Đề HSK 6 phần nghe chỉ phát <b>một lượt</b>. Bấm nút loa nghe, trả lời ngay, rồi mới mở nguyên văn ra đối chiếu. Đừng mở nguyên văn trước — mở trước là mất tác dụng.",
  "source": "Soạn theo dạng đề HSK 6 · chủ đề bài 6",
  "items": [
    {
      "n": 1,
      "lines": [
        {
          "sp": "女",
          "zh": "新来的小李怎么样？"
        },
        {
          "sp": "男",
          "zh": "别看他刚上任，业务能力可一点儿也不比那些资深员工差。"
        }
      ],
      "q": "男的认为小李怎么样？",
      "qvn": "Người đàn ông thấy Tiểu Lý thế nào?",
      "opts": [
        "态度不好",
        "经验丰富",
        "能力很强",
        "不太敬业"
      ],
      "ans": 2,
      "why": "别看……，……不比资深员工差 = đừng thấy mới nhận chức mà coi thường, năng lực không kém nhân viên thâm niên → năng lực rất mạnh. \"Kinh nghiệm phong phú\" sai vì cậu ấy mới đến.",
      "words": [
        "上任",
        "资深"
      ]
    },
    {
      "n": 2,
      "lines": [
        {
          "sp": "男",
          "zh": "今天办公室怎么这么安静？"
        },
        {
          "sp": "女",
          "zh": "经理刚才发了一通火，大家都不敢出声，屋子里鸦雀无声。"
        }
      ],
      "q": "办公室为什么很安静？",
      "qvn": "Vì sao văn phòng rất yên tĩnh?",
      "opts": [
        "经理发火了",
        "大家都下班了",
        "大家在开会",
        "大家在休息"
      ],
      "ans": 0,
      "why": "经理刚才发了一通火 (giám đốc vừa nổi giận) → mọi người không dám lên tiếng. 鸦雀无声 = im phăng phắc (thành ngữ trong bài khoá).",
      "words": []
    },
    {
      "n": 3,
      "lines": [
        {
          "sp": "女",
          "zh": "这个月的指标你完成了吗？"
        },
        {
          "sp": "男",
          "zh": "别提了，客户接连投诉，我忙了一个月，还差一大截呢。"
        }
      ],
      "q": "男的这个月情况怎么样？",
      "qvn": "Tháng này tình hình của người đàn ông thế nào?",
      "opts": [
        "提前完成了指标",
        "被公司辞退了",
        "受到了表扬",
        "没有完成指标"
      ],
      "ans": 3,
      "why": "还差一大截 = còn thiếu một khoảng lớn → chưa hoàn thành chỉ tiêu. 别提了 mở đầu là dấu hiệu tin không vui. 接连 ôn bài 5.",
      "words": [
        "指标",
        "投诉"
      ]
    },
    {
      "n": 4,
      "lines": [
        {
          "sp": "男",
          "zh": "王经理，您怎么又把最难的活儿交给新人了？"
        },
        {
          "sp": "女",
          "zh": "我这是在锻炼他们。能把这单业务做好，才能说明他们真有才干。"
        }
      ],
      "q": "女的为什么把最难的工作交给新人？",
      "qvn": "Vì sao người phụ nữ giao việc khó nhất cho người mới?",
      "opts": [
        "她在欺负新人",
        "她想锻炼新人",
        "她自己不想做",
        "新人主动要求的"
      ],
      "ans": 1,
      "why": "我这是在锻炼他们 — nói thẳng mục đích là rèn luyện. Phương án \"bắt nạt\" là cách Tiểu Lâm trong bài nghĩ, nhưng không phải ý của người nói.",
      "words": [
        "才干"
      ]
    },
    {
      "n": 5,
      "lines": [
        {
          "sp": "女",
          "zh": "他们这样欺负你，你就这么忍着？"
        },
        {
          "sp": "男",
          "zh": "不跟他们计较。大不了多干点儿活儿，我还能多学点儿东西呢。"
        }
      ],
      "q": "男的是什么态度？",
      "qvn": "Người đàn ông có thái độ gì?",
      "opts": [
        "非常愤怒",
        "不计较，看得开",
        "打算辞职",
        "要找领导讨公道"
      ],
      "ans": 1,
      "why": "不跟他们计较 + 大不了多干点儿 + 还能多学点儿 → bình thản, nhìn mặt tích cực. 愤怒 (bài 4) và 讨公道 là cách phản ứng ngược lại.",
      "words": [
        "欺负",
        "计较",
        "大不了"
      ]
    },
    {
      "n": 6,
      "lines": [
        {
          "sp": "男",
          "zh": "听说你们部门年度考核又拿了第一？"
        },
        {
          "sp": "女",
          "zh": "主要是大家都很敬业，不管多忙，谁都不凑合。"
        }
      ],
      "q": "女的认为部门成绩好的主要原因是什么？",
      "qvn": "Người phụ nữ cho rằng nguyên nhân chính khiến phòng đạt thành tích tốt là gì?",
      "opts": [
        "领导很严格",
        "工作很轻松",
        "客户很少",
        "大家很敬业"
      ],
      "ans": 3,
      "why": "主要是大家都很敬业 — câu trả lời nằm ngay sau 主要是. 不管多忙，谁都不凑合 bổ sung cho ý \"tận tuỵ\".",
      "words": [
        "年度",
        "考核",
        "敬业",
        "凑合"
      ]
    },
    {
      "n": 7,
      "lines": [
        {
          "sp": "男",
          "zh": "刚进入一个新集体时，很多人会觉得自己被边缘化了，这其实很正常。与其抱怨，不如想方设法展示自己的能力。时间长了，大家自然会认可你。"
        }
      ],
      "q": "说话人建议刚进入新集体的人怎么做？",
      "qvn": "Người nói khuyên người mới vào tập thể nên làm gì?",
      "opts": [
        "想办法展示自己的能力",
        "马上换一个集体",
        "向领导抱怨",
        "等别人来帮助自己"
      ],
      "ans": 0,
      "why": "与其抱怨，不如想方设法展示自己的能力 — 与其 C 不如 B: người nói chọn B. Nghe thấy 抱怨 trước dễ chọn nhầm phương án 1.",
      "words": [
        "边缘",
        "想方设法",
        "展示"
      ]
    },
    {
      "n": 8,
      "lines": [
        {
          "sp": "女",
          "zh": "你明明知道客户今天要来，怎么还溜出去逛街了？"
        },
        {
          "sp": "男",
          "zh": "我以为他下午才到，没想到上午就来了。"
        }
      ],
      "q": "男的为什么不在公司？",
      "qvn": "Vì sao người đàn ông không có mặt ở công ty?",
      "opts": [
        "他去见客户了",
        "他生病了",
        "他以为客户下午才来",
        "他忘了客户要来"
      ],
      "ans": 2,
      "why": "我以为他下午才到 — 以为 = tưởng (sai). Cô gái nói 你明明知道客户今天要来 nên phương án \"quên\" sai.",
      "words": [
        "明明",
        "溜"
      ]
    }
  ]
};

// ══════════════════════════════════════════════════════════════
// 💬 TÌNH HUỐNG — HOÀN THÀNH HỘI THOẠI
// ══════════════════════════════════════════════════════════════
var situationData = {
  intro: 'Mỗi tình huống cho sẵn lời của người kia. Em viết lời đáp của mình, <b>bắt buộc dùng đúng từ/cấu trúc ghi ở ô yêu cầu</b>. ' +
         'Viết xong mới mở câu mẫu — câu mẫu chỉ là MỘT cách nói, em nói khác mà đúng yêu cầu vẫn được.',
  items: [
    {scene:'Bạn mới chuyển lớp than với em là bị các bạn lạnh nhạt.',
     a:{sp:'Bạn',zh:'新班级的同学都不怎么理我，我真想转回原来的学校。',vn:'Các bạn ở lớp mới chẳng mấy ai để ý đến tớ, tớ thật muốn chuyển về trường cũ.'},
     need:['Dùng 没什么大不了的 hoặc 大不了','Khuyên bạn nhìn mặt tích cực (dùng 反而)'],
     sample:'这没什么大不了的，刚开始都这样。你反而可以趁这个机会好好展示一下自己。',
     samplePy:'Zhè méi shénme dàbuliǎo de, gāng kāishǐ dōu zhèyàng. Nǐ fǎn\'ér kěyǐ chèn zhège jīhuì hǎohāo zhǎnshì yíxià zìjǐ.',
     sampleVn:'Chuyện này chẳng có gì to tát, lúc đầu ai cũng thế. Cậu ngược lại có thể nhân cơ hội này thể hiện bản thân thật tốt.',
     tip:'没什么大不了的 (tính từ) dùng để trấn an; 反而 lật ngược cách nhìn tiêu cực của bạn.'},

    {scene:'Em trai chối không làm vỡ cốc, dù em đã tận mắt thấy.',
     a:{sp:'Em trai',zh:'杯子不是我打碎的，我根本没进过厨房。',vn:'Cái cốc không phải em làm vỡ, em còn chẳng vào bếp.'},
     need:['Dùng 明明','Nêu bằng chứng, kết bằng câu hỏi ngược'],
     sample:'你明明进过厨房，我刚才亲眼看见的，怎么还不承认呢？',
     samplePy:'Nǐ míngmíng jìnguo chúfáng, wǒ gāngcái qīnyǎn kànjiàn de, zěnme hái bù chéngrèn ne?',
     sampleVn:'Em rõ ràng đã vào bếp, chị vừa tận mắt nhìn thấy, sao còn không chịu nhận?',
     tip:'明明 + sự thật, rồi câu hỏi ngược 怎么还……呢 — đúng mẫu 练一练 của sách.'},

    {scene:'Nhóm trưởng hỏi tiến độ bài tập nhóm.',
     a:{sp:'Nhóm trưởng',zh:'这次小组作业，大家都把自己的部分交上来了吗？',vn:'Bài tập nhóm lần này, mọi người đã nộp phần của mình chưa?'},
     need:['Dùng 唯独','Nói rõ ai chưa nộp và đề xuất cách xử lý'],
     sample:'大家都交了，唯独小王还没交，我一会儿去提醒他一下。',
     samplePy:'Dàjiā dōu jiāo le, wéidú Xiǎo Wáng hái méi jiāo, wǒ yíhuìr qù tíxǐng tā yíxià.',
     sampleVn:'Mọi người đều nộp rồi, chỉ riêng Tiểu Vương chưa nộp, lát nữa tớ đi nhắc cậu ấy.',
     tip:'Vế trước có 都 (tình hình chung), vế sau 唯独 + người + ngoại lệ.'},

    {scene:'Đồng nghiệp muốn làm qua loa với một khách hàng khó tính.',
     a:{sp:'Đồng nghiệp',zh:'这个客户太难伺候了，随便应付一下算了。',vn:'Khách này khó chiều quá, qua loa cho xong đi.'},
     need:['Dùng 敷衍 hoặc 凑合','Thuyết phục làm cho tốt (dùng 想方设法)'],
     sample:'可不能敷衍客户，咱们还是想方设法把这单业务做好吧。',
     samplePy:'Kě bù néng fūyǎn kèhù, zánmen háishi xiǎngfāng-shèfǎ bǎ zhè dān yèwù zuòhǎo ba.',
     sampleVn:'Không thể làm qua loa với khách được, chúng ta cứ tìm mọi cách làm tốt đơn này đi.',
     tip:'敷衍 + người (khách hàng); 凑合 không mang tân ngữ người — nếu dùng 凑合 thì nói 这单业务可不能凑合.'},

    {scene:'Bạn cùng đội bóng bức xúc vì toàn phải ngồi dự bị.',
     a:{sp:'Bạn',zh:'教练总让我坐在场边，太不公平了！',vn:'Huấn luyện viên toàn bắt tớ ngồi ngoài sân, bất công quá!'},
     need:['Dùng 计较 hoặc 全力以赴','Động viên bạn kiên trì'],
     sample:'别跟他们计较，你全力以赴地练，教练总有一天会看到的。',
     samplePy:'Bié gēn tāmen jìjiào, nǐ quánlì-yǐfù de liàn, jiàoliàn zǒng yǒu yì tiān huì kàndào de.',
     sampleVn:'Đừng so đo với họ, cậu cứ dốc sức mà tập, sẽ có ngày huấn luyện viên nhìn thấy.',
     tip:'跟 + người + 计较; 全力以赴 làm trạng ngữ + 地 + V.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🎯 NÓI SAO CHO HAY — 得体 / 语体
// ══════════════════════════════════════════════════════════════
var registerData = {
  intro: 'Ở đây <b>cả hai câu đều đúng ngữ pháp</b> — không có câu sai. Việc của em là chọn câu <b>PHÙ HỢP HƠN</b> với hoàn cảnh. ' +
         'HSK 6 đòi hỏi phân biệt rõ khẩu ngữ và văn viết, lời thân mật và lời trang trọng.',
  items: [
    {scene:'Em viết thư xin nghỉ việc gửi phòng nhân sự.',
     a:'我不想干了，大不了换个工作。',b:'经过慎重考虑，我决定辞去目前的职位。',better:'b',
     why:'大不了 là khẩu ngữ mang giọng bất cần. Thư từ công việc cần trang trọng: 经过慎重考虑, 辞去……职位.'},

    {scene:'Em an ủi bạn thân vừa thi trượt.',
     a:'没考好就没考好，大不了下次再考！',b:'考试失利并不可怕，应当认真总结经验教训。',better:'a',
     why:'Với bạn thân, 大不了 nghe gần gũi, đúng lúc cần trấn an. Câu b đúng nhưng giống lời phát biểu tổng kết, nghe xa cách.'},

    {scene:'Em muốn góp ý với giám đốc về cách phân công công việc.',
     a:'哼，太不像话了，明明是在欺负人！',b:'经理，我觉得这次分配业务的方式可能不太公平，您能不能再考虑一下？',better:'b',
     why:'哼, 太不像话了, 欺负人 là lời bực bội, chỉ hợp khi nói với bạn bè (như Tiểu Lâm trong bài). Với cấp trên phải góp ý nhẹ nhàng, có 您.'},

    {scene:'Em viết bản tổng kết cuối năm về một đồng nghiệp.',
     a:'他工作兢兢业业，具有很强的敬业精神。',b:'他干活儿特别卖力，从来不偷懒。',better:'a',
     why:'Văn bản tổng kết dùng thành ngữ, từ trang trọng: 兢兢业业, 敬业精神. 干活儿, 卖力, 偷懒 là khẩu ngữ.'},

    {scene:'Tiễn khách hàng lớn tuổi sau bữa cơm ở nhà em.',
     a:'今天招待不周，怠慢了，请多包涵。',b:'今天没怎么招待你，你别生气啊。',better:'a',
     why:'怠慢了, 请多包涵 là lời khách sáo chuẩn mực của chủ nhà với khách. Câu b dùng 你 và 别生气 — hợp với bạn bè, không hợp với khách lớn tuổi.'},

    {scene:'Bạn cùng phòng đến chơi muộn, nhà hết giường.',
     a:'今晚你就在沙发上凑合一晚吧。',b:'今晚请您暂时在沙发上休息。',better:'a',
     why:'凑合一晚 là khẩu ngữ thân mật, rất tự nhiên giữa bạn bè. Câu b dùng 您 và 暂时 — trang trọng quá mức với bạn cùng phòng.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🗣️ KỂ LẠI BÀI ĐỌC — theo bảng 练习5 của sách
// ══════════════════════════════════════════════════════════════
var retellData = {
  intro: 'Đây là bài tập 5 trong sách: <b>根据提示，简述课文主要内容</b> — kể tóm tắt bài khoá bằng lời của em, ' +
         'KHÔNG đọc thuộc lòng. Nhìn câu hỏi và gợi ý từng dòng, bấm ghi âm rồi kể khoảng 2 phút.',
  outline: [
    {step:'说说“我”在这家公司的职位以及公司的人员构成情况。', cue:'咨询师、老手、新手、资深员工', words:['上任','职位','资深','创立']},
    {step:'上班第一天，其他老员工对“我”和小林的态度如何？', cue:'①给……沏茶/咖啡 ②唯独剩下 ③边缘化', words:['沏','唯独','搭档','边缘','眼色']},
    {step:'“我”和小林在公司的工作与别人有何不同？为什么？', cue:'①“我”和小林的业务……，件件……，有时候…… ②别人的工作……，成天……，还有人…… ③我发现，领导分配业务时，……', words:['指标','成天','吹牛','溜','资深','等级']},
    {step:'“我”和小林如何对待自己的工作？', cue:'不计较、全力以赴、不怠慢、不敷衍、想方设法、不凑合', words:['计较','全力以赴','怠慢','敷衍','想方设法','凑合']},
    {step:'“我们”在公司的处境有了什么变化？', cue:'①业务能力…… ②客户…… ③接手…… ④年度考核…… ⑤……热情起来 ⑥新人……', words:['飞跃','投诉','激情','年度','考核','敬业','兢兢业业','回报','当初','传授','技巧']},
    {step:'通过“职场插班生”的经历，“我”有什么收获？', cue:'①展示……魅力 ②施展才能', words:['展示','人格','施展','时机']}
  ],
  checklist: [
    'Kể đủ 6 ý theo đúng thứ tự bảng chưa?',
    'Ý 2 có dùng 唯独剩下 và 被边缘化 không?',
    'Ý 3 có nói được NGUYÊN NHÂN (领导分配业务时，总是让资深员工先挑) không?',
    'Ý 4 có nói liền được 6 cụm 不计较、全力以赴、不怠慢、不敷衍、想方设法、不凑合 không?',
    'Có kể bằng LỜI MÌNH (đổi "tôi" thành "作者 / 他"), hay đang đọc thuộc nguyên văn?'
  ]
};

// ══════════════════════════════════════════
// SGK · 练习 (Bài tập trong sách, tr. 70–71) — đáp án theo đáp án sách
// ══════════════════════════════════════════
var sgkData = [
  {kieu:'mr', de:'模仿例子，写出更多的词语', vn:'Bắt chước ví dụ, viết thêm các từ khác (có chữ được đánh dấu chấm)',
   vd:{tu:'就职', chu:'职', ds:['辞职','兼职','职业','职务']},
   cau:[
     {tu:'职位', chu:'位', dap:['岗位','座位','地位','位置'], them:['学位','方位','部位','空位','首位','席位'],
      giai:'位 ở đây nghĩa là vị trí, chỗ (chỗ đứng, chỗ ngồi, vị thế).'},
     {tu:'唯独', chu:'唯', dap:['唯一','唯心','唯美','唯利是图'], them:['唯有','唯恐','唯命是从','唯我独尊'],
      giai:'唯 = chỉ, duy nhất (= 只): 唯一 = duy nhất, 唯有 = chỉ có.'},
     {tu:'才干', chu:'才', dap:['才华','才力','才学','人才'], them:['天才','才能','才智','口才','多才多艺','英才'],
      giai:'才 ở đây là danh từ: tài năng, năng lực (không phải phó từ 才 "mới").'},
     {tu:'敬业', chu:'业', dap:['职业','工业','农业','业务'], them:['就业','失业','创业','专业','行业','事业','业余'],
      giai:'业 = nghề nghiệp, công việc, ngành nghề.'}
   ]},

  {kieu:'gx', de:'用所给词语完成句子', vn:'Dùng từ cho sẵn hoàn thành câu (sách không in đáp án — đây là câu gợi ý)',
   cau:[
     {s:'别的事还可以放一放，＿＿。', tu:'唯独', dap:'别的事还可以放一放，唯独这件事必须今天完成。',
      giai:'Vế trước nêu tình hình chung (việc khác có thể gác lại), 唯独 tách riêng một việc ngoại lệ.'},
     {s:'爸爸＿＿，从来没有闲下来的时候。', tu:'成天', dap:'爸爸成天忙着工作，从来没有闲下来的时候。',
      giai:'成天 + V (suốt ngày làm gì) — khớp với vế sau "chưa bao giờ rảnh".'},
     {s:'失业了也没什么，＿＿。', tu:'大不了', dap:'失业了也没什么，大不了再找一份工作。',
      giai:'Vế trước trấn an (也没什么), vế sau 大不了 + phương án xấu nhất vẫn chấp nhận được.'},
     {s:'我的笔＿＿，怎么一转眼不见了呢？', tu:'明明', dap:'我的笔明明刚才还放在桌子上，怎么一转眼不见了呢？',
      giai:'明明 + sự thật chắc chắn, vế sau là câu hỏi ngược thể hiện sự khó hiểu.'},
     {s:'没有床，只有一张沙发，你＿＿。', tu:'凑合', dap:'没有床，只有一张沙发，你就凑合一晚吧。',
      giai:'凑合 = tạm chấp nhận điều kiện chưa tốt; 就……吧 là lời đề nghị.'},
     {s:'每当我遇到困难时，他＿＿。', tu:'想方设法', dap:'每当我遇到困难时，他总是想方设法地帮助我。',
      giai:'想方设法 làm trạng ngữ trước động từ; 每当……时 đi với 总是.'}
   ]},

  {kieu:'kho', de:'选择合适的词语填空', vn:'Chọn từ thích hợp điền vào chỗ trống (đoạn 1)', tu:['计较','搭档','风气','资深','创立'],
   cau:[
     {s:'上个星期，我加入了学校篮球队，跟球队的＿＿们一一认识之后，我的训练生活就此开始。张教练在球队＿＿之初就在这儿了，他是一位富有经验的＿＿篮球教练。我们球队的＿＿非常好，大家互相帮助，训练刻苦认真，没人喊累，没人抱怨，训练中受点儿伤也都不＿＿，我很喜欢这个集体。',
      dap:['搭档','创立','资深','风气','计较']}
   ]},
  {kieu:'kho', de:'选择合适的词语填空', vn:'Chọn từ thích hợp điền vào chỗ trống (đoạn 2)', tu:['激情','全力以赴','想方设法','忙碌','凑合'],
   cau:[
     {s:'同事小张非常敬业，他对待工作充满＿＿，总是＿＿出色完成每一项任务，从来不＿＿。最近，他接到一个新任务，为一个新项目做前期准备。小张带领他们部门的员工＿＿投入工作，虽然很＿＿，却享受到了工作的快乐。',
      dap:['激情','想方设法','凑合','全力以赴','忙碌']}
   ]},

  {kieu:'mp', de:'阅读语段，模仿造句', vn:'Đọc đoạn văn, bắt chước đặt câu (phần gạch chân trong 【】)',
   cau:[
     {mau:'清早上班，和新同事一一认识后，我【以为】一天的工作就此开始，【没想到】赵姐工作的第一件事是忙着沏茶和咖啡，给张哥端一碗，给孙姐送一杯……【我想】这单位风气真好，明天这事我来做。',
      khung:'今天在办公室，我怎么也找不到自己的手机了，我以为＿＿，没想到＿＿，我想＿＿。',
      dap:['是同事拿错了','它竟然一直在我的外套口袋里','以后可得把东西放好了'],
      giai:'以为 (tưởng — điều hoá ra sai) → 没想到 (không ngờ — sự thật bất ngờ) → 我想 (suy nghĩ, quyết định của mình).'},
     {mau:'其实，【进入】新单位，【作为】一个职场插班生，这个过程，【正是】展示你人格魅力的时候，【遇到】困难，【也是】你施展才能的时机。',
      khung:'其实，进入＿＿，作为＿＿，这个过程，正是＿＿的时候，遇到＿＿，也是＿＿的时机。',
      dap:['新班级','一个插班生','让同学们认识你、了解你','不会的题','你向老师和同学虚心学习'],
      giai:'其实 mở ý; 进入 + nơi mới; 作为 + thân phận; 正是……的时候 và 也是……的时机 là hai vế song song để kết luận.'}
   ]}
];
