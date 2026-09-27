// ══════════════════════════════════════════
// DATA — HSK6 Bài 3: 一盒月饼 (Một hộp bánh Trung thu)
// 第一单元 生活点滴 · Nguồn: HSK标准教程6上 (tr. 33–43) + đáp án sách
// Bài khoá: 一盒月饼 (713字) · 44 từ mới
// ══════════════════════════════════════════

var vocabData = [
  {n:1,zh:'月饼',py:'yuèbing',pos:'Danh từ',vn:'bánh Trung thu',hv:'nguyệt bính',em:'🥮',lesson:1,
   explain:['Bánh truyền thống ăn vào Tết Trung thu (rằm tháng Tám âm lịch), hình tròn tượng trưng cho trăng rằm và sự đoàn viên.','Lượng từ: 一块月饼 (một cái), 一盒月饼 (một hộp). Sách ghi yuèbing (饼 đọc nhẹ).'],
   usage:'一块/一盒月饼, 吃月饼, 寄月饼, 送月饼; 什么馅儿的月饼 (bánh nhân gì).',
   collo:['一盒月饼','吃月饼','寄月饼','送月饼'],
   ex_zh:'中秋节快到了，女儿要给他寄盒月饼。',ex_py:'Zhōngqiū Jié kuài dào le, nǚ\'ér yào gěi tā jì hé yuèbing.',ex_vn:'Tết Trung thu sắp đến, con gái muốn gửi cho ông một hộp bánh Trung thu.',
   exList:[
     {zh:'中秋节快到了，女儿要给他寄盒月饼。',py:'Zhōngqiū Jié kuài dào le, nǚ\'ér yào gěi tā jì hé yuèbing.',vn:'Tết Trung thu sắp đến, con gái muốn gửi cho ông một hộp bánh Trung thu.'},
     {zh:'我说家里什么馅儿的月饼都有，还是赶快给女儿打电话吧。',py:'Wǒ shuō jiā li shénme xiànr de yuèbing dōu yǒu, háishi gǎnkuài gěi nǚ\'ér dǎ diànhuà ba.',vn:'Tôi nói ở nhà bánh Trung thu nhân gì cũng có, bác mau gọi điện cho con gái đi.'},
     {zh:'每到中秋节，一家人团圆在一起，一边赏月一边吃月饼，别提多开心了。',py:'Měi dào Zhōngqiū Jié, yì jiā rén tuányuán zài yìqǐ, yìbiān shǎng yuè yìbiān chī yuèbing, biétí duō kāixīn le.',vn:'Mỗi dịp Trung thu, cả nhà sum họp, vừa ngắm trăng vừa ăn bánh Trung thu, vui không kể xiết.'}
   ],
   colloFull:[
     {zh:'一盒月饼',py:'yì hé yuèbing',vn:'một hộp bánh Trung thu'},
     {zh:'吃月饼',py:'chī yuèbing',vn:'ăn bánh Trung thu'},
     {zh:'寄月饼',py:'jì yuèbing',vn:'gửi bánh Trung thu (qua bưu điện)'},
     {zh:'送月饼',py:'sòng yuèbing',vn:'biếu, tặng bánh Trung thu'},
     {zh:'五仁月饼',py:'wǔrén yuèbing',vn:'bánh Trung thu nhân thập cẩm'}
   ],
   patterns:[
     {s:'给 + người + 寄/送 + (一)盒月饼',m:'Gửi / tặng ai một hộp bánh Trung thu'},
     {s:'什么馅儿的月饼都……',m:'Bánh nhân gì cũng … (什么……都…… chỉ không trừ cái nào)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Trung thu sắp đến rồi, tôi định gửi cho bố mẹ một hộp bánh Trung thu.',answer:'中秋节快到了，我打算给父母寄一盒月饼。',answerPy:'Zhōngqiū Jié kuài dào le, wǒ dǎsuàn gěi fùmǔ jì yì hé yuèbing.',
      note:'快……了 báo việc sắp xảy ra; 给 + người + 寄 + vật.',pair:'快……了'},
     {promptLang:'vi',prompt:'Bánh Trung thu tuy ngon nhưng ăn nhiều quá thì không tốt cho sức khoẻ.',answer:'月饼虽然好吃，但是吃得太多对身体不好。',answerPy:'Yuèbing suīrán hǎochī, dànshì chī de tài duō duì shēntǐ bù hǎo.',
      note:'虽然……但是…… nối hai ý trái ngược; V + 得 + 太多 là bổ ngữ trạng thái.',pair:'虽然……但是……'}
   ]},

  {n:2,zh:'清晨',py:'qīngchén',pos:'Danh từ',vn:'sáng sớm',hv:'thanh thần',em:'🌅',lesson:1,
   explain:['Khoảng thời gian sáng sớm, lúc trời vừa sáng (sớm hơn 早上 một chút), sắc thái văn viết.'],
   usage:'Làm trạng ngữ thời gian ở đầu câu hoặc sau chủ ngữ: 清晨上班……; 每天清晨, 清晨的空气.',
   collo:['每天清晨','清晨的阳光','清晨出发','一个清晨'],
   ex_zh:'清晨上班，走到公司楼下，迎面站着一位农民工模样的男人。',ex_py:'Qīngchén shàngbān, zǒu dào gōngsī lóu xià, yíngmiàn zhànzhe yí wèi nóngmíngōng múyàng de nánrén.',ex_vn:'Sáng sớm đi làm, vừa tới dưới toà nhà công ty đã thấy ngay trước mặt một người đàn ông trông như công nhân từ quê lên.',
   exList:[
     {zh:'清晨上班，走到公司楼下，迎面站着一位农民工模样的男人。',py:'Qīngchén shàngbān, zǒu dào gōngsī lóu xià, yíngmiàn zhànzhe yí wèi nóngmíngōng múyàng de nánrén.',vn:'Sáng sớm đi làm, vừa tới dưới toà nhà công ty đã thấy ngay trước mặt một người đàn ông trông như công nhân từ quê lên.'},
     {zh:'爷爷每天清晨都去公园散步，身体好得很。',py:'Yéye měi tiān qīngchén dōu qù gōngyuán sànbù, shēntǐ hǎo de hěn.',vn:'Sáng sớm nào ông cũng ra công viên đi dạo, sức khoẻ tốt lắm.'},
     {zh:'清晨的空气异常清新，我巴不得每天都早起跑步。',py:'Qīngchén de kōngqì yìcháng qīngxīn, wǒ bābudé měi tiān dōu zǎo qǐ pǎobù.',vn:'Không khí sáng sớm trong lành lạ thường, tôi chỉ mong ngày nào cũng dậy sớm chạy bộ.'}
   ],
   colloFull:[
     {zh:'每天清晨',py:'měi tiān qīngchén',vn:'sáng sớm mỗi ngày'},
     {zh:'清晨的阳光',py:'qīngchén de yángguāng',vn:'nắng sớm'},
     {zh:'清晨出发',py:'qīngchén chūfā',vn:'lên đường lúc sáng sớm'},
     {zh:'一个清晨',py:'yí ge qīngchén',vn:'một buổi sáng sớm'},
     {zh:'清晨五点',py:'qīngchén wǔ diǎn',vn:'năm giờ sáng'}
   ],
   patterns:[
     {s:'清晨 + (chủ ngữ) + V……',m:'Trạng ngữ thời gian đặt đầu câu, kể chuyện theo trình tự'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Sáng sớm nào bà cũng dậy tập thái cực quyền ở công viên.',answer:'奶奶每天清晨都在公园打太极拳。',answerPy:'Nǎinai měi tiān qīngchén dōu zài gōngyuán dǎ tàijíquán.',
      note:'每天 + thời điểm + 都 + V: thói quen lặp lại; 在 + nơi chốn đứng trước động từ.',pair:'每……都……'},
     {promptLang:'vi',prompt:'Nếu lên đường từ sáng sớm thì có thể tránh tắc đường.',answer:'清晨出发的话，就可以避免堵车。',answerPy:'Qīngchén chūfā dehuà, jiù kěyǐ bìmiǎn dǔchē.',
      note:'……的话，就…… = nếu … thì ….',pair:'……的话，就……'}
   ]},

  {n:3,zh:'迎面',py:'yíngmiàn',pos:'Phó từ',vn:'trước mặt, đối diện',hv:'nghênh diện',em:'🚶',lesson:1,
   explain:['Ngay phía trước mặt, hướng thẳng về phía mình: 迎面走来 (đi ngược chiều tới), 迎面吹来 (thổi thốc vào mặt).','Thường đi với động từ chuyển động hoặc tồn tại: 走来, 吹来, 站着 — tạo câu tồn hiện.'],
   usage:'(Nơi chốn +) 迎面 + 走来/吹来/扑来/站着 + ai/cái gì.',
   collo:['迎面走来','迎面吹来','迎面站着','迎面而来'],
   ex_zh:'走到公司楼下，迎面站着一位农民工模样的男人。',ex_py:'Zǒu dào gōngsī lóu xià, yíngmiàn zhànzhe yí wèi nóngmíngōng múyàng de nánrén.',ex_vn:'Vừa tới dưới toà nhà công ty, ngay trước mặt có một người đàn ông trông như công nhân từ quê lên đang đứng.',
   exList:[
     {zh:'走到公司楼下，迎面站着一位农民工模样的男人。',py:'Zǒu dào gōngsī lóu xià, yíngmiàn zhànzhe yí wèi nóngmíngōng múyàng de nánrén.',vn:'Vừa tới dưới toà nhà công ty, ngay trước mặt có một người đàn ông trông như công nhân từ quê lên đang đứng.'},
     {zh:'一出门，一阵冷风迎面吹来，我不由得打了个寒战。',py:'Yì chū mén, yí zhèn lěngfēng yíngmiàn chuī lái, wǒ bùyóude dǎle ge hánzhàn.',vn:'Vừa ra khỏi cửa, một cơn gió lạnh thổi thốc vào mặt, tôi bất giác rùng mình.'},
     {zh:'我在校门口迎面碰上了班主任，只好爽快地承认自己迟到了。',py:'Wǒ zài xiào ménkǒu yíngmiàn pèngshangle bānzhǔrèn, zhǐhǎo shuǎngkuai de chéngrèn zìjǐ chídào le.',vn:'Tôi đụng mặt cô chủ nhiệm ngay cổng trường, đành thẳng thắn nhận mình đến muộn.'}
   ],
   colloFull:[
     {zh:'迎面走来',py:'yíngmiàn zǒu lái',vn:'đi ngược chiều tới'},
     {zh:'迎面吹来',py:'yíngmiàn chuī lái',vn:'thổi thốc vào mặt'},
     {zh:'迎面站着',py:'yíngmiàn zhànzhe',vn:'đứng ngay trước mặt'},
     {zh:'迎面而来',py:'yíngmiàn ér lái',vn:'ập tới trước mặt'},
     {zh:'迎面碰上',py:'yíngmiàn pèngshang',vn:'đụng mặt, chạm trán'}
   ],
   patterns:[
     {s:'Nơi chốn + 迎面 + V着 / V来 + người/vật',m:'Câu tồn hiện: ai/cái gì xuất hiện ngay trước mặt'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi vừa bước ra khỏi thang máy thì giám đốc đi ngược chiều tới.',answer:'我刚走出电梯，经理就迎面走了过来。',answerPy:'Wǒ gāng zǒuchū diàntī, jīnglǐ jiù yíngmiàn zǒule guòlái.',
      note:'刚……就…… nối hai việc xảy ra sát nhau.',pair:'刚……就……'},
     {promptLang:'vi',prompt:'Vừa mở cửa sổ, hương hoa đã ùa vào mặt.',answer:'一打开窗户，花香就迎面扑来。',answerPy:'Yì dǎkāi chuānghu, huāxiāng jiù yíngmiàn pū lái.',
      note:'一……就…… = vừa … là ….',pair:'一……就……'}
   ]},

  {n:4,zh:'模样',py:'múyàng',pos:'Danh từ',vn:'vẻ bề ngoài, diện mạo',hv:'mô dạng',em:'🧑',lesson:1,
   explain:['Dáng vẻ, hình dáng bên ngoài của người (mặt mũi, cách ăn mặc) hoặc của vật.','N + 模样的 + người = người trông giống như N (农民工模样的男人). Chú ý: 模 ở đây đọc mú, không đọc mó.'],
   usage:'……模样的人; 长什么模样; 一副……的模样.',
   collo:['学生模样','长什么模样','一副可怜的模样','模样可爱'],
   ex_zh:'迎面站着一位农民工模样的男人。',ex_py:'Yíngmiàn zhànzhe yí wèi nóngmíngōng múyàng de nánrén.',ex_vn:'Ngay trước mặt có một người đàn ông trông như công nhân từ quê lên đang đứng.',
   exList:[
     {zh:'迎面站着一位农民工模样的男人。',py:'Yíngmiàn zhànzhe yí wèi nóngmíngōng múyàng de nánrén.',vn:'Ngay trước mặt có một người đàn ông trông như công nhân từ quê lên đang đứng.'},
     {zh:'十年没见，她的模样一点儿也没变。',py:'Shí nián méi jiàn, tā de múyàng yìdiǎnr yě méi biàn.',vn:'Mười năm không gặp mà dáng vẻ cô ấy chẳng thay đổi chút nào.'},
     {zh:'看他那副着急的模样，我恨不得马上帮他把问题解决了。',py:'Kàn tā nà fù zháojí de múyàng, wǒ hènbude mǎshàng bāng tā bǎ wèntí jiějué le.',vn:'Nhìn bộ dạng cuống cuồng của cậu ấy, tôi chỉ muốn giải quyết ngay vấn đề giúp cậu.'}
   ],
   colloFull:[
     {zh:'学生模样',py:'xuésheng múyàng',vn:'dáng vẻ học sinh'},
     {zh:'长什么模样',py:'zhǎng shénme múyàng',vn:'trông như thế nào'},
     {zh:'一副可怜的模样',py:'yí fù kělián de múyàng',vn:'bộ dạng tội nghiệp'},
     {zh:'模样可爱',py:'múyàng kě\'ài',vn:'dáng vẻ đáng yêu'},
     {zh:'老师模样的人',py:'lǎoshī múyàng de rén',vn:'người trông như giáo viên'}
   ],
   patterns:[
     {s:'N + 模样的 + người',m:'Người trông giống như … (nhận xét qua vẻ ngoài)'},
     {s:'一副 + A + 的模样',m:'Mang bộ dạng …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ngoài cửa có một người trông như học sinh đang đợi cậu.',answer:'门口有一个学生模样的人在等你。',answerPy:'Ménkǒu yǒu yí ge xuésheng múyàng de rén zài děng nǐ.',
      note:'Câu tồn hiện: nơi chốn + 有 + người; 在 + V chỉ hành động đang diễn ra.',pair:'Câu tồn hiện với 有'},
     {promptLang:'vi',prompt:'Con gái anh ấy càng lớn trông càng giống mẹ.',answer:'他女儿的模样越长越像妈妈。',answerPy:'Tā nǚ\'ér de múyàng yuè zhǎng yuè xiàng māma.',
      note:'越……越…… = càng … càng ….',pair:'越……越……'}
   ]},

  {n:5,zh:'打量',py:'dǎliang',pos:'Động từ',vn:'quan sát (quần áo, diện mạo)',hv:'đả lượng',em:'👀',lesson:1,
   explain:['Nhìn kỹ để quan sát dáng vẻ, quần áo của một người, thường nhìn từ trên xuống dưới.','Hay đi với 番 / 一下 / 上下: 打量了我一番, 上下打量.'],
   usage:'打量 + người + 一番/一下; 上下打量; 把 + người + 从上到下打量了一番.',
   collo:['打量一番','上下打量','仔细打量','打量对方'],
   ex_zh:'他打量了我一番，到嘴边的话又不说了。',ex_py:'Tā dǎliangle wǒ yì fān, dào zuǐ biān de huà yòu bù shuō le.',ex_vn:'Ông ấy nhìn tôi một lượt, lời đã ra tới miệng lại thôi không nói.',
   exList:[
     {zh:'他打量了我一番，到嘴边的话又不说了。',py:'Tā dǎliangle wǒ yì fān, dào zuǐ biān de huà yòu bù shuō le.',vn:'Ông ấy nhìn tôi một lượt, lời đã ra tới miệng lại thôi không nói.'},
     {zh:'“您说吧，只要能帮的，我一定帮。”这回轮到我打量他了。',py:'"Nín shuō ba, zhǐyào néng bāng de, wǒ yídìng bāng." Zhè huí lún dào wǒ dǎliang tā le.',vn:'"Bác cứ nói đi, chỉ cần giúp được là tôi nhất định giúp." Lần này đến lượt tôi quan sát ông ấy.'},
     {zh:'新同学一进教室，大家都好奇地上下打量着他。',py:'Xīn tóngxué yí jìn jiàoshì, dàjiā dōu hàoqí de shàngxià dǎliangzhe tā.',vn:'Bạn mới vừa bước vào lớp, mọi người đều tò mò nhìn cậu từ đầu đến chân.'}
   ],
   colloFull:[
     {zh:'打量一番',py:'dǎliang yì fān',vn:'quan sát một lượt'},
     {zh:'上下打量',py:'shàngxià dǎliang',vn:'nhìn từ đầu đến chân'},
     {zh:'仔细打量',py:'zǐxì dǎliang',vn:'quan sát kỹ'},
     {zh:'打量对方',py:'dǎliang duìfāng',vn:'quan sát đối phương'},
     {zh:'好奇地打量',py:'hàoqí de dǎliang',vn:'tò mò nhìn ngắm'}
   ],
   patterns:[
     {s:'把 + người + 打量了一番',m:'Nhìn kỹ ai một lượt (câu 把)'},
     {s:'轮到 + người + V + 了',m:'Đến lượt ai làm gì'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cô ấy nhìn tôi từ đầu đến chân một lượt rồi mới mời tôi vào.',answer:'她把我上下打量了一番，才请我进去。',answerPy:'Tā bǎ wǒ shàngxià dǎliangle yì fān, cái qǐng wǒ jìnqu.',
      note:'Câu 把: 把 + tân ngữ + V + 了 + 一番; 才 = rồi mới.',pair:'Câu chữ 把'},
     {promptLang:'vi',prompt:'Đừng nhìn người ta chằm chằm như thế, rất bất lịch sự.',answer:'别这么打量别人，很不礼貌。',answerPy:'Bié zhème dǎliang biérén, hěn bù lǐmào.',
      note:'别 + V = đừng …; 这么 + V = (làm) như thế này.',pair:'别……'}
   ]},

  {n:6,zh:'番',py:'fān',pos:'Lượng từ',vn:'lượt, hồi, lần',hv:'phiên',em:'🔁',lesson:1,
   explain:['Lượng từ cho hành động tốn nhiều thời gian, công sức, diễn ra khá lâu (= 遍, 回): 打量了一番, 研究了一番.','Dùng cho tâm tư, lời nói, quá trình — số từ chỉ là 一 hoặc 几: 一番心意, 一番期望, 几番风雨.','Sau động từ 翻: 翻一番 = tăng gấp đôi.'],
   usage:'V + 了 + 一番; 一番 + 心意/话/期望/努力; 翻(了)一番.',
   collo:['打量一番','一番心意','一番期望','翻一番'],
   ex_zh:'他打量了我一番，到嘴边的话又不说了。',ex_py:'Tā dǎliangle wǒ yì fān, dào zuǐ biān de huà yòu bù shuō le.',ex_vn:'Ông ấy nhìn tôi một lượt, lời đã ra tới miệng lại thôi không nói.',
   exList:[
     {zh:'他打量了我一番，到嘴边的话又不说了。',py:'Tā dǎliangle wǒ yì fān, dào zuǐ biān de huà yòu bù shuō le.',vn:'Ông ấy nhìn tôi một lượt, lời đã ra tới miệng lại thôi không nói.'},
     {zh:'父母的话常常在他耳边回响，他总在提醒自己不要辜负了父母的一番期望。',py:'Fùmǔ de huà chángcháng zài tā ěr biān huíxiǎng, tā zǒng zài tíxǐng zìjǐ búyào gūfùle fùmǔ de yì fān qīwàng.',vn:'Lời cha mẹ thường vang bên tai, anh luôn tự nhắc mình đừng phụ tấm lòng kỳ vọng của cha mẹ.'},
     {zh:'和五年前比，多数人的工资已经翻番了。',py:'Hé wǔ nián qián bǐ, duōshù rén de gōngzī yǐjīng fānfān le.',vn:'So với năm năm trước, lương của đa số người đã tăng gấp đôi.'}
   ],
   colloFull:[
     {zh:'打量一番',py:'dǎliang yì fān',vn:'quan sát một lượt'},
     {zh:'一番心意',py:'yì fān xīnyì',vn:'một tấm lòng'},
     {zh:'一番期望',py:'yì fān qīwàng',vn:'một niềm kỳ vọng'},
     {zh:'翻一番',py:'fān yì fān',vn:'tăng gấp đôi'},
     {zh:'研究了一番',py:'yánjiūle yì fān',vn:'nghiên cứu một lượt'}
   ],
   patterns:[
     {s:'V + 了 + 一番',m:'Làm gì một lượt (tốn thời gian, công sức)'},
     {s:'一 / 几 + 番 + 心意 / 期望 / 风雨',m:'Tâm tư, lời nói, quá trình'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi mất ba ngày, nghiên cứu bài văn đó từ đầu đến cuối một lượt.',answer:'我花了三天时间，把那篇文章从头到尾研究了一番。',answerPy:'Wǒ huāle sān tiān shíjiān, bǎ nà piān wénzhāng cóng tóu dào wěi yánjiūle yì fān.',
      note:'Câu 把 + V + 了 + 一番 (bài tập 2 của sách).',pair:'Câu chữ 把'},
     {promptLang:'vi',prompt:'Đây là tấm lòng của mẹ, dù thế nào con cũng phải nhận.',answer:'这是妈妈的一番心意，无论如何你都得收下。',answerPy:'Zhè shì māma de yì fān xīnyì, wúlùn rúhé nǐ dōu děi shōuxià.',
      note:'无论如何 + 都 = dù thế nào cũng ….',pair:'无论……都……'}
   ]},

  {n:7,zh:'搓',py:'cuō',pos:'Động từ',vn:'xoa, vò',hv:'tha',em:'🤲',lesson:1,
   explain:['Hai bàn tay cọ qua cọ lại vào nhau, hoặc vò một vật giữa hai tay.','搓着手 hay tả vẻ ngại ngùng, lúng túng (hoặc vì lạnh).'],
   usage:'搓手, 搓着手, 搓衣服 (vò quần áo), 搓一搓.',
   collo:['搓手','搓着手','搓衣服','搓一搓'],
   ex_zh:'他搓着手，迟疑地说：“有件事想拜托你。”',ex_py:'Tā cuōzhe shǒu, chíyí de shuō: "Yǒu jiàn shì xiǎng bàituō nǐ."',ex_vn:'Ông ấy xoa xoa tay, ngập ngừng nói: "Có việc này muốn nhờ cô."',
   exList:[
     {zh:'他搓着手，迟疑地说：“有件事想拜托你。”',py:'Tā cuōzhe shǒu, chíyí de shuō: "Yǒu jiàn shì xiǎng bàituō nǐ."',vn:'Ông ấy xoa xoa tay, ngập ngừng nói: "Có việc này muốn nhờ cô."'},
     {zh:'天太冷了，他一边搓手一边跺脚。',py:'Tiān tài lěng le, tā yìbiān cuō shǒu yìbiān duò jiǎo.',vn:'Trời lạnh quá, anh ấy vừa xoa tay vừa giậm chân.'},
     {zh:'衣领太脏了，得用手多搓几下才能洗干净。',py:'Yīlǐng tài zāng le, děi yòng shǒu duō cuō jǐ xià cái néng xǐ gānjìng.',vn:'Cổ áo bẩn quá, phải lấy tay vò thêm mấy cái mới giặt sạch được.'}
   ],
   colloFull:[
     {zh:'搓手',py:'cuō shǒu',vn:'xoa tay'},
     {zh:'搓着手',py:'cuōzhe shǒu',vn:'xoa xoa tay'},
     {zh:'搓衣服',py:'cuō yīfu',vn:'vò quần áo'},
     {zh:'搓一搓',py:'cuō yi cuō',vn:'xoa một chút'},
     {zh:'搓几下',py:'cuō jǐ xià',vn:'vò mấy cái'}
   ],
   patterns:[
     {s:'搓着手 + V……',m:'Vừa xoa tay vừa … (tả dáng ngại ngùng)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cậu ấy vừa xoa tay vừa nói với tôi là có việc muốn nhờ.',answer:'他一边搓着手，一边跟我说有件事想拜托我。',answerPy:'Tā yìbiān cuōzhe shǒu, yìbiān gēn wǒ shuō yǒu jiàn shì xiǎng bàituō wǒ.',
      note:'一边……一边…… hai hành động diễn ra cùng lúc.',pair:'一边……一边……'},
     {promptLang:'vi',prompt:'Tay lạnh thì xoa xoa một chút sẽ ấm lên.',answer:'手冷的话，搓一搓就会暖和起来。',answerPy:'Shǒu lěng dehuà, cuō yi cuō jiù huì nuǎnhuo qǐlái.',
      note:'Tính từ + 起来: trạng thái bắt đầu thay đổi.',pair:'A + 起来'}
   ]},

  {n:8,zh:'迟疑',py:'chíyí',pos:'Tính từ',vn:'chần chừ, ngập ngừng',hv:'trì nghi',em:'🤔',lesson:1,
   explain:['Do dự, chưa quyết, ngập ngừng chưa dám nói hay làm ngay.'],
   usage:'迟疑地说/问; 迟疑了一下; 毫不迟疑 (không chút do dự).',
   collo:['迟疑地说','迟疑了一下','毫不迟疑','有些迟疑'],
   ex_zh:'他搓着手，迟疑地说：“有件事想拜托你。”',ex_py:'Tā cuōzhe shǒu, chíyí de shuō: "Yǒu jiàn shì xiǎng bàituō nǐ."',ex_vn:'Ông ấy xoa xoa tay, ngập ngừng nói: "Có việc này muốn nhờ cô."',
   exList:[
     {zh:'他搓着手，迟疑地说：“有件事想拜托你。”',py:'Tā cuōzhe shǒu, chíyí de shuō: "Yǒu jiàn shì xiǎng bàituō nǐ."',vn:'Ông ấy xoa xoa tay, ngập ngừng nói: "Có việc này muốn nhờ cô."'},
     {zh:'听到老师的问题，他迟疑了一下，才举起手来。',py:'Tīngdào lǎoshī de wèntí, tā chíyíle yíxià, cái jǔqǐ shǒu lái.',vn:'Nghe câu hỏi của thầy, cậu ấy ngập ngừng một chút rồi mới giơ tay.'},
     {zh:'朋友一开口，他就毫不迟疑地答应了下来。',py:'Péngyou yì kāikǒu, tā jiù háo bù chíyí de dāyingle xiàlái.',vn:'Bạn vừa mở lời, anh ấy đã không chút do dự nhận lời ngay.'}
   ],
   colloFull:[
     {zh:'迟疑地说',py:'chíyí de shuō',vn:'ngập ngừng nói'},
     {zh:'迟疑了一下',py:'chíyíle yíxià',vn:'chần chừ một chút'},
     {zh:'毫不迟疑',py:'háo bù chíyí',vn:'không chút do dự'},
     {zh:'有些迟疑',py:'yǒuxiē chíyí',vn:'hơi chần chừ'},
     {zh:'迟疑不决',py:'chíyí bù jué',vn:'do dự không quyết'}
   ],
   patterns:[
     {s:'迟疑地 + V',m:'Ngập ngừng làm gì'},
     {s:'毫不迟疑地 + V',m:'Không chút do dự mà …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cô ấy ngập ngừng một lúc rồi mới nói ra sự thật.',answer:'她迟疑了一会儿，才把真相说了出来。',answerPy:'Tā chíyíle yíhuìr, cái bǎ zhēnxiàng shuōle chūlái.',
      note:'才 = mãi rồi mới; 把 + tân ngữ + 说出来.',pair:'才'},
     {promptLang:'vi',prompt:'Đã quyết định rồi thì đừng chần chừ nữa.',answer:'既然已经决定了，就别再迟疑了。',answerPy:'Jìrán yǐjīng juédìng le, jiù bié zài chíyí le.',
      note:'既然……就…… = đã … thì ….',pair:'既然……就……'}
   ]},

  {n:9,zh:'拜托',py:'bàituō',pos:'Động từ',vn:'xin nhờ',hv:'bái thác',em:'🙏',lesson:1,
   explain:['Lời nhờ vả lịch sự: nhờ ai làm giúp việc gì.','Khẩu ngữ còn dùng 拜托了 (nhờ cả vào bạn đấy), 拜托你…… (làm ơn …).'],
   usage:'拜托 + người + (làm) việc gì; 有件事想拜托你; ……就拜托你了.',
   collo:['拜托你','拜托了','有件事想拜托你','拜托同事'],
   ex_zh:'他搓着手，迟疑地说：“有件事想拜托你。”',ex_py:'Tā cuōzhe shǒu, chíyí de shuō: "Yǒu jiàn shì xiǎng bàituō nǐ."',ex_vn:'Ông ấy xoa xoa tay, ngập ngừng nói: "Có việc này muốn nhờ cô."',
   exList:[
     {zh:'他搓着手，迟疑地说：“有件事想拜托你。”',py:'Tā cuōzhe shǒu, chíyí de shuō: "Yǒu jiàn shì xiǎng bàituō nǐ."',vn:'Ông ấy xoa xoa tay, ngập ngừng nói: "Có việc này muốn nhờ cô."'},
     {zh:'我下个月出差，家里的小猫就拜托你照看几天了。',py:'Wǒ xià ge yuè chūchāi, jiā li de xiǎo māo jiù bàituō nǐ zhàokàn jǐ tiān le.',vn:'Tháng sau tôi đi công tác, con mèo ở nhà nhờ bạn trông giúp mấy hôm nhé.'},
     {zh:'拜托你小声点儿，大家都在复习呢。',py:'Bàituō nǐ xiǎo shēng diǎnr, dàjiā dōu zài fùxí ne.',vn:'Làm ơn nói nhỏ chút, mọi người đang ôn bài mà.'}
   ],
   colloFull:[
     {zh:'拜托你',py:'bàituō nǐ',vn:'nhờ bạn / làm ơn'},
     {zh:'拜托了',py:'bàituō le',vn:'nhờ cả vào bạn đấy'},
     {zh:'有件事想拜托你',py:'yǒu jiàn shì xiǎng bàituō nǐ',vn:'có việc muốn nhờ bạn'},
     {zh:'拜托同事',py:'bàituō tóngshì',vn:'nhờ đồng nghiệp'},
     {zh:'受人拜托',py:'shòu rén bàituō',vn:'được người khác nhờ'}
   ],
   patterns:[
     {s:'拜托 + người + V……',m:'Nhờ ai làm gì'},
     {s:'……就拜托你了',m:'Việc … nhờ cả vào bạn'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Việc này rất quan trọng, nhờ cả vào bạn đấy.',answer:'这件事很重要，就拜托你了。',answerPy:'Zhè jiàn shì hěn zhòngyào, jiù bàituō nǐ le.',
      note:'就……了 mang ý giao phó, nhấn mạnh.',pair:'就……了'},
     {promptLang:'vi',prompt:'Tôi đã nhờ đồng nghiệp nhận hộ gói hàng rồi.',answer:'我已经拜托同事帮我代收包裹了。',answerPy:'Wǒ yǐjīng bàituō tóngshì bāng wǒ dàishōu bāoguǒ le.',
      note:'已经……了: việc đã hoàn thành; 帮 + người + V.',pair:'已经……了'}
   ]},

  {n:10,zh:'饱经沧桑',py:'bǎojīng-cāngsāng',pos:'Thành ngữ',vn:'nếm đủ mùi đời, từng trải',hv:'bão kinh thương tang',em:'🌾',lesson:1,
   explain:['Trải qua rất nhiều biến đổi, gian khổ của cuộc đời. 沧桑 rút từ 沧海桑田 (biển xanh hoá ruộng dâu).','Thường làm định ngữ: 饱经沧桑的脸 / 老人 / 城市.'],
   usage:'饱经沧桑的 + 脸/老人/手/城市; (N +) 饱经沧桑.',
   collo:['饱经沧桑的脸','饱经沧桑的老人','饱经沧桑的城市','一生饱经沧桑'],
   ex_zh:'饱经沧桑的脸上流露出朴实。',ex_py:'Bǎojīng-cāngsāng de liǎn shang liúlù chū pǔshí.',ex_vn:'Trên gương mặt dãi dầu sương gió toát lên vẻ chất phác.',
   exList:[
     {zh:'饱经沧桑的脸上流露出朴实。',py:'Bǎojīng-cāngsāng de liǎn shang liúlù chū pǔshí.',vn:'Trên gương mặt dãi dầu sương gió toát lên vẻ chất phác.'},
     {zh:'这座古城饱经沧桑，却依然美丽。',py:'Zhè zuò gǔchéng bǎojīng-cāngsāng, què yīrán měilì.',vn:'Toà cổ thành này trải qua bao thăng trầm mà vẫn đẹp.'},
     {zh:'看着爷爷那张饱经沧桑的脸，我忍不住想听他讲过去的故事。',py:'Kànzhe yéye nà zhāng bǎojīng-cāngsāng de liǎn, wǒ rěnbuzhù xiǎng tīng tā jiǎng guòqù de gùshi.',vn:'Nhìn gương mặt dãi dầu của ông, tôi không kìm được muốn nghe ông kể chuyện ngày xưa.'}
   ],
   colloFull:[
     {zh:'饱经沧桑的脸',py:'bǎojīng-cāngsāng de liǎn',vn:'gương mặt dãi dầu'},
     {zh:'饱经沧桑的老人',py:'bǎojīng-cāngsāng de lǎorén',vn:'ông cụ từng trải'},
     {zh:'饱经沧桑的城市',py:'bǎojīng-cāngsāng de chéngshì',vn:'thành phố trải bao thăng trầm'},
     {zh:'一生饱经沧桑',py:'yìshēng bǎojīng-cāngsāng',vn:'cả đời nếm trải gian truân'}
   ],
   patterns:[
     {s:'饱经沧桑的 + N',m:'N từng trải, dãi dầu (làm định ngữ)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy cả đời nếm đủ mùi đời, ông cụ vẫn rất lạc quan.',answer:'虽然一生饱经沧桑，老人却依然很乐观。',answerPy:'Suīrán yìshēng bǎojīng-cāngsāng, lǎorén què yīrán hěn lèguān.',
      note:'虽然……却……: 却 đứng SAU chủ ngữ của vế sau.',pair:'虽然……却……'},
     {promptLang:'vi',prompt:'Chính đôi bàn tay dãi dầu ấy đã nuôi lớn ba đứa con.',answer:'正是那双饱经沧桑的手，把三个孩子养大了。',answerPy:'Zhèng shì nà shuāng bǎojīng-cāngsāng de shǒu, bǎ sān ge háizi yǎng dà le.',
      note:'正是…… nhấn mạnh; 把 + tân ngữ + 养大 (bổ ngữ kết quả).',pair:'Câu chữ 把'}
   ]},

  {n:11,zh:'流露',py:'liúlù',pos:'Động từ',vn:'bộc lộ, để lộ ra',hv:'lưu lộ',em:'😊',lesson:1,
   explain:['(Tình cảm, ý nghĩ) tự nhiên để lộ ra qua nét mặt, ánh mắt, lời nói.'],
   usage:'脸上/眼里/话里 + 流露出 + tình cảm; 真情流露; 没流露出来.',
   collo:['流露出朴实','流露出喜悦','真情流露','流露出不满'],
   ex_zh:'饱经沧桑的脸上流露出朴实。',ex_py:'Bǎojīng-cāngsāng de liǎn shang liúlù chū pǔshí.',ex_vn:'Trên gương mặt dãi dầu sương gió toát lên vẻ chất phác.',
   exList:[
     {zh:'饱经沧桑的脸上流露出朴实。',py:'Bǎojīng-cāngsāng de liǎn shang liúlù chū pǔshí.',vn:'Trên gương mặt dãi dầu sương gió toát lên vẻ chất phác.'},
     {zh:'说起女儿，他的眼里流露出无比的骄傲。',py:'Shuōqǐ nǚ\'ér, tā de yǎn li liúlù chū wúbǐ de jiāo\'ào.',vn:'Nhắc đến con gái, ánh mắt ông ánh lên niềm tự hào khôn tả.'},
     {zh:'她心里很难过，但脸上一点儿也没流露出来。',py:'Tā xīn li hěn nánguò, dàn liǎn shang yìdiǎnr yě méi liúlù chūlái.',vn:'Trong lòng cô rất buồn nhưng trên mặt không để lộ ra chút nào.'}
   ],
   colloFull:[
     {zh:'流露出朴实',py:'liúlù chū pǔshí',vn:'toát lên vẻ chất phác'},
     {zh:'流露出喜悦',py:'liúlù chū xǐyuè',vn:'lộ vẻ vui mừng'},
     {zh:'真情流露',py:'zhēnqíng liúlù',vn:'bộc lộ tình cảm thật'},
     {zh:'流露出不满',py:'liúlù chū bùmǎn',vn:'lộ vẻ bất mãn'},
     {zh:'自然流露',py:'zìrán liúlù',vn:'tự nhiên bộc lộ'}
   ],
   patterns:[
     {s:'脸上 / 眼里 + 流露出 + tình cảm',m:'Nét mặt, ánh mắt lộ ra tình cảm'},
     {s:'没(有)流露出来',m:'Không để lộ ra'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nghe tin này, trên mặt mẹ lộ rõ vẻ vui mừng.',answer:'听到这个消息，妈妈的脸上流露出了喜悦。',answerPy:'Tīngdào zhège xiāoxi, māma de liǎn shang liúlù chūle xǐyuè.',
      note:'V + 出 (bổ ngữ xu hướng) + tân ngữ.',pair:'V + 出'},
     {promptLang:'vi',prompt:'Dù rất ghen tị nhưng cậu ấy không để lộ ra.',answer:'尽管很嫉妒，他却没有流露出来。',answerPy:'Jǐnguǎn hěn jídù, tā què méiyǒu liúlù chūlái.',
      note:'尽管……却…… = mặc dù … nhưng … (ôn 嫉妒 bài 1).',pair:'尽管……却……'}
   ]},

  {n:12,zh:'朴实',py:'pǔshí',pos:'Tính từ',vn:'thật thà, chất phác',hv:'phác thực',em:'🌱',lesson:1,
   explain:['(Người) chân thật, giản dị, không khoe khoang; (lời văn, cách ăn mặc) mộc mạc, không cầu kỳ.'],
   usage:'为人朴实, 朴实的农民, 朴实的语言, 穿着朴实; (脸上)流露出朴实.',
   collo:['朴实的农民','为人朴实','朴实的语言','穿着朴实'],
   ex_zh:'他为人朴实，从来不说大话。',ex_py:'Tā wéirén pǔshí, cónglái bù shuō dàhuà.',ex_vn:'Anh ấy sống chân chất, xưa nay không nói khoác.',
   exList:[
     {zh:'他为人朴实，从来不说大话。',py:'Tā wéirén pǔshí, cónglái bù shuō dàhuà.',vn:'Anh ấy sống chân chất, xưa nay không nói khoác.'},
     {zh:'饱经沧桑的脸上流露出朴实。',py:'Bǎojīng-cāngsāng de liǎn shang liúlù chū pǔshí.',vn:'Trên gương mặt dãi dầu sương gió toát lên vẻ chất phác.'},
     {zh:'这篇作文语言朴实，却异常感人。',py:'Zhè piān zuòwén yǔyán pǔshí, què yìcháng gǎnrén.',vn:'Bài văn này lời lẽ mộc mạc mà cảm động lạ thường.'}
   ],
   colloFull:[
     {zh:'朴实的农民',py:'pǔshí de nóngmín',vn:'người nông dân chất phác'},
     {zh:'为人朴实',py:'wéirén pǔshí',vn:'sống chân chất'},
     {zh:'朴实的语言',py:'pǔshí de yǔyán',vn:'lời lẽ mộc mạc'},
     {zh:'穿着朴实',py:'chuānzhuó pǔshí',vn:'ăn mặc giản dị'},
     {zh:'朴实无华',py:'pǔshí wú huá',vn:'mộc mạc, không hoa mỹ'}
   ],
   patterns:[
     {s:'为人 + 朴实',m:'Tính người chân chất'},
     {s:'朴实的 + N',m:'N mộc mạc, chất phác'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Người dân ở đây không những chất phác mà còn rất hiếu khách.',answer:'这里的人不但朴实，而且非常热情好客。',answerPy:'Zhèli de rén búdàn pǔshí, érqiě fēicháng rèqíng hàokè.',
      note:'不但……而且…… tăng tiến; hai vế cùng chủ ngữ thì 不但 đứng sau chủ ngữ.',pair:'不但……而且……'},
     {promptLang:'vi',prompt:'Anh ấy trông rất chất phác, không giống người biết nói dối.',answer:'他看起来很朴实，不像会说谎的人。',answerPy:'Tā kàn qǐlái hěn pǔshí, bú xiàng huì shuōhuǎng de rén.',
      note:'看起来 + tính từ = trông có vẻ; 不像 = không giống.',pair:'看起来'}
   ]},

  {n:13,zh:'过于',py:'guòyú',pos:'Phó từ',vn:'quá',hv:'quá ư',em:'⚖️',lesson:1,
   explain:['Quá mức, vượt quá giới hạn thích hợp — mang ý chê, không hài lòng; văn viết hơn 太.','过于 + tính từ/động từ (thường hai âm tiết): 过于操劳, 过于紧张. Cuối câu KHÔNG cần 了 như 太……了.'],
   usage:'过于 + A/V: 过于匆忙, 过于自信, 过于看重; 不要/别 + 过于…….',
   collo:['过于操劳','过于紧张','过于担心','过于自信'],
   ex_zh:'这回轮到我打量他了：一双过于操劳的大手；胡须起码一个星期没刮了。',ex_py:'Zhè huí lún dào wǒ dǎliang tā le: yì shuāng guòyú cāoláo de dà shǒu; húxū qǐmǎ yí ge xīngqī méi guā le.',ex_vn:'Lần này đến lượt tôi quan sát ông: đôi bàn tay to thô vì lao lực quá nhiều; râu ít nhất một tuần chưa cạo.',
   exList:[
     {zh:'这回轮到我打量他了：一双过于操劳的大手；胡须起码一个星期没刮了。',py:'Zhè huí lún dào wǒ dǎliang tā le: yì shuāng guòyú cāoláo de dà shǒu; húxū qǐmǎ yí ge xīngqī méi guā le.',vn:'Lần này đến lượt tôi quan sát ông: đôi bàn tay to thô vì lao lực quá nhiều; râu ít nhất một tuần chưa cạo.'},
     {zh:'他出来得过于匆忙，居然忘了带手机。',py:'Tā chūlái de guòyú cōngmáng, jūrán wàngle dài shǒujī.',vn:'Anh ấy ra khỏi nhà vội vàng quá, thế mà quên mang điện thoại.'},
     {zh:'考试前别过于紧张，只要正常发挥就行。',py:'Kǎoshì qián bié guòyú jǐnzhāng, zhǐyào zhèngcháng fāhuī jiù xíng.',vn:'Trước khi thi đừng căng thẳng quá, chỉ cần làm bài bình thường là được.'}
   ],
   colloFull:[
     {zh:'过于操劳',py:'guòyú cāoláo',vn:'lao lực quá độ'},
     {zh:'过于紧张',py:'guòyú jǐnzhāng',vn:'quá căng thẳng'},
     {zh:'过于担心',py:'guòyú dānxīn',vn:'quá lo lắng'},
     {zh:'过于自信',py:'guòyú zìxìn',vn:'quá tự tin'},
     {zh:'过于匆忙',py:'guòyú cōngmáng',vn:'quá vội vàng'}
   ],
   patterns:[
     {s:'过于 + A / V',m:'Quá … (vượt mức, hàm ý chê)'},
     {s:'不要 / 别 + 过于 + A',m:'Đừng quá …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Có những người mê leo núi gặp nạn là vì quá tự tin.',answer:'有的登山爱好者遇险，是因为过于自信。',answerPy:'Yǒude dēngshān àihàozhě yùxiǎn, shì yīnwèi guòyú zìxìn.',
      note:'……，是因为…… nêu kết quả trước, giải thích nguyên nhân sau (练一练 của sách).',pair:'……是因为……'},
     {promptLang:'vi',prompt:'Đừng quá coi trọng tiền bạc, trên đời có nhiều thứ quý hơn tiền.',answer:'不要过于看重金钱，世间有很多东西比金钱更宝贵。',answerPy:'Búyào guòyú kànzhòng jīnqián, shìjiān yǒu hěn duō dōngxi bǐ jīnqián gèng bǎoguì.',
      note:'A 比 B 更 + tính từ: so sánh hơn (không dùng 很 sau 比).',pair:'A 比 B 更……'}
   ]},

  {n:14,zh:'操劳',py:'cāoláo',pos:'Động từ',vn:'làm việc vất vả',hv:'thao lao',em:'💪',lesson:1,
   explain:['Làm lụng vất vả, lo toan nhiều việc (thường nói về cha mẹ lo cho gia đình).'],
   usage:'为 + ai/việc gì + 操劳; 操劳了一辈子/半辈子; 过于操劳; 日夜操劳.',
   collo:['过于操劳','日夜操劳','为家操劳','操劳了半辈子'],
   ex_zh:'父母为我们操劳了半辈子，现在也该享享福了。',ex_py:'Fùmǔ wèi wǒmen cāoláole bàn bèizi, xiànzài yě gāi xiǎngxiang fú le.',ex_vn:'Bố mẹ vất vả vì chúng tôi nửa đời người, giờ cũng nên hưởng phúc rồi.',
   exList:[
     {zh:'父母为我们操劳了半辈子，现在也该享享福了。',py:'Fùmǔ wèi wǒmen cāoláole bàn bèizi, xiànzài yě gāi xiǎngxiang fú le.',vn:'Bố mẹ vất vả vì chúng tôi nửa đời người, giờ cũng nên hưởng phúc rồi.'},
     {zh:'饱经沧桑的脸上流露出朴实；一双过于操劳的大手。',py:'Bǎojīng-cāngsāng de liǎn shang liúlù chū pǔshí; yì shuāng guòyú cāoláo de dà shǒu.',vn:'Gương mặt dãi dầu toát lên vẻ chất phác; đôi bàn tay to thô vì làm lụng quá vất vả.'},
     {zh:'妈妈日夜操劳，我恨不得马上长大，替她分担一些。',py:'Māma rìyè cāoláo, wǒ hènbude mǎshàng zhǎngdà, tì tā fēndān yìxiē.',vn:'Mẹ ngày đêm lam lũ, tôi chỉ mong mau lớn để đỡ đần mẹ phần nào.'}
   ],
   colloFull:[
     {zh:'过于操劳',py:'guòyú cāoláo',vn:'lao lực quá độ'},
     {zh:'日夜操劳',py:'rìyè cāoláo',vn:'ngày đêm vất vả'},
     {zh:'为家操劳',py:'wèi jiā cāoláo',vn:'lo toan cho gia đình'},
     {zh:'操劳了半辈子',py:'cāoláole bàn bèizi',vn:'vất vả nửa đời người'},
     {zh:'操劳过度',py:'cāoláo guòdù',vn:'làm lụng quá sức'}
   ],
   patterns:[
     {s:'为 + ai + 操劳',m:'Vất vả vì ai'},
     {s:'操劳 + 了 + thời lượng',m:'Vất vả suốt bao lâu'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vì bố mẹ đã vất vả cả đời nên chúng ta phải hiếu thảo với họ.',answer:'因为父母操劳了一辈子，所以我们要孝顺他们。',answerPy:'Yīnwèi fùmǔ cāoláole yíbèizi, suǒyǐ wǒmen yào xiàoshùn tāmen.',
      note:'因为……所以…… nối nguyên nhân – kết quả.',pair:'因为……所以……'},
     {promptLang:'vi',prompt:'Bác sĩ bảo bà không được làm lụng quá sức nữa.',answer:'医生说奶奶不能再过于操劳了。',answerPy:'Yīshēng shuō nǎinai bù néng zài guòyú cāoláo le.',
      note:'不能再……了 = không được … nữa.',pair:'不能再……了'}
   ]},

  {n:15,zh:'胡须',py:'húxū',pos:'Danh từ',vn:'râu',hv:'hồ tu',em:'🧔',lesson:1,
   explain:['Râu mọc quanh miệng, cằm, má của đàn ông (văn viết; khẩu ngữ hay nói 胡子).'],
   usage:'刮胡须 (cạo râu), 留胡须 (để râu), 胡须花白, 长长的胡须.',
   collo:['刮胡须','留胡须','胡须花白','长长的胡须'],
   ex_zh:'胡须起码一个星期没刮了。',ex_py:'Húxū qǐmǎ yí ge xīngqī méi guā le.',ex_vn:'Râu ít nhất một tuần chưa cạo.',
   exList:[
     {zh:'胡须起码一个星期没刮了。',py:'Húxū qǐmǎ yí ge xīngqī méi guā le.',vn:'Râu ít nhất một tuần chưa cạo.'},
     {zh:'爷爷留着长长的胡须，看起来非常慈祥。',py:'Yéye liúzhe chángcháng de húxū, kàn qǐlái fēicháng cíxiáng.',vn:'Ông nội để bộ râu dài, trông vô cùng hiền từ.'},
     {zh:'爸爸每天清晨都要刮胡须，从来不偷懒。',py:'Bàba měi tiān qīngchén dōu yào guā húxū, cónglái bù tōulǎn.',vn:'Sáng sớm nào bố cũng cạo râu, chưa bao giờ lười.'}
   ],
   colloFull:[
     {zh:'刮胡须',py:'guā húxū',vn:'cạo râu'},
     {zh:'留胡须',py:'liú húxū',vn:'để râu'},
     {zh:'胡须花白',py:'húxū huābái',vn:'râu hoa râm'},
     {zh:'长长的胡须',py:'chángcháng de húxū',vn:'bộ râu dài'},
     {zh:'满脸胡须',py:'mǎn liǎn húxū',vn:'râu ria đầy mặt'}
   ],
   patterns:[
     {s:'胡须 + thời gian + 没刮了',m:'Râu bao lâu chưa cạo (tả vẻ bận rộn, lôi thôi)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Anh ấy bận đến nỗi mấy ngày liền không cạo râu.',answer:'他忙得好几天都没刮胡须。',answerPy:'Tā máng de hǎo jǐ tiān dōu méi guā húxū.',
      note:'A + 得 + kết quả: bận đến mức ….',pair:'A + 得 + bổ ngữ trạng thái'},
     {promptLang:'vi',prompt:'Ông cụ râu đã hoa râm kia chính là hiệu trưởng trường tôi.',answer:'那位胡须花白的老人就是我们学校的校长。',answerPy:'Nà wèi húxū huābái de lǎorén jiù shì wǒmen xuéxiào de xiàozhǎng.',
      note:'Cụm chủ–vị làm định ngữ + 的 + danh từ; 就是 nhấn mạnh.',pair:'Định ngữ + 的'}
   ]},

  {n:16,zh:'起码',py:'qǐmǎ',pos:'Tính từ',vn:'ít nhất, tối thiểu',hv:'khởi mã',em:'📏',lesson:1,
   explain:['Mức thấp nhất, tối thiểu. Là TÍNH TỪ: làm định ngữ (起码的要求) và làm trạng ngữ trước động từ/số lượng (起码要一个星期).','Có thể thêm 最 phía trước: 最起码 (khác 至少 — xem phần Phân biệt từ).'],
   usage:'起码 + (V) + số lượng; 最起码; 起码的 + 要求/条件/常识.',
   collo:['起码的要求','最起码','起码一个星期','起码的常识'],
   ex_zh:'胡须起码一个星期没刮了。',ex_py:'Húxū qǐmǎ yí ge xīngqī méi guā le.',ex_vn:'Râu ít nhất một tuần chưa cạo.',
   exList:[
     {zh:'胡须起码一个星期没刮了。',py:'Húxū qǐmǎ yí ge xīngqī méi guā le.',vn:'Râu ít nhất một tuần chưa cạo.'},
     {zh:'按时上课，这是对学生起码的要求。',py:'Ànshí shàngkè, zhè shì duì xuésheng qǐmǎ de yāoqiú.',vn:'Đi học đúng giờ là yêu cầu tối thiểu đối với học sinh.'},
     {zh:'人家帮了这么多忙，你最起码要说声谢谢吧？',py:'Rénjia bāngle zhème duō máng, nǐ zuì qǐmǎ yào shuō shēng xièxie ba?',vn:'Người ta giúp nhiều thế, ít ra cậu cũng phải nói tiếng cảm ơn chứ?'}
   ],
   colloFull:[
     {zh:'起码的要求',py:'qǐmǎ de yāoqiú',vn:'yêu cầu tối thiểu'},
     {zh:'最起码',py:'zuì qǐmǎ',vn:'ít ra, tối thiểu'},
     {zh:'起码一个星期',py:'qǐmǎ yí ge xīngqī',vn:'ít nhất một tuần'},
     {zh:'起码的常识',py:'qǐmǎ de chángshí',vn:'hiểu biết tối thiểu'},
     {zh:'起码的礼貌',py:'qǐmǎ de lǐmào',vn:'phép lịch sự tối thiểu'}
   ],
   patterns:[
     {s:'起码 + (要 / 有) + số lượng',m:'Ít nhất là …'},
     {s:'(最)起码的 + N',m:'N tối thiểu (làm định ngữ)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Muốn thi đỗ HSK 6 thì mỗi ngày ít nhất phải học hai tiếng.',answer:'要想通过HSK六级，每天起码要学两个小时。',answerPy:'Yào xiǎng tōngguò HSK liù jí, měi tiān qǐmǎ yào xué liǎng ge xiǎoshí.',
      note:'要想…… nêu mục đích; 起码 đặt trước 要 + số lượng.',pair:'要想……'},
     {promptLang:'vi',prompt:'Dù bận đến mấy, ít ra cũng phải gọi điện về nhà một cuộc chứ.',answer:'不管多忙，最起码也要给家里打个电话吧。',answerPy:'Bùguǎn duō máng, zuì qǐmǎ yě yào gěi jiā li dǎ ge diànhuà ba.',
      note:'不管 + 多 + A，也/都…… = dù … đến mấy cũng ….',pair:'不管……也……'}
   ]},

  {n:17,zh:'口音',py:'kǒuyīn',pos:'Danh từ',vn:'giọng (địa phương)',hv:'khẩu âm',em:'🗣️',lesson:1,
   explain:['Giọng nói mang đặc điểm của một vùng, một nước: 南方口音 (giọng miền Nam), 北京口音.'],
   usage:'有口音; 带着 + nơi + 口音; 口音很重 (giọng rất nặng); 听口音…….',
   collo:['南方口音','口音很重','带着口音','听口音'],
   ex_zh:'听口音，他应该是广东人。',ex_py:'Tīng kǒuyīn, tā yīnggāi shì Guǎngdōng rén.',ex_vn:'Nghe giọng thì anh ấy chắc là người Quảng Đông.',
   exList:[
     {zh:'听口音，他应该是广东人。',py:'Tīng kǒuyīn, tā yīnggāi shì Guǎngdōng rén.',vn:'Nghe giọng thì anh ấy chắc là người Quảng Đông.'},
     {zh:'胡须起码一个星期没刮了；南方口音。',py:'Húxū qǐmǎ yí ge xīngqī méi guā le; nánfāng kǒuyīn.',vn:'Râu ít nhất một tuần chưa cạo; giọng miền Nam.'},
     {zh:'虽然他的汉语带着一点儿口音，但是大家都听得懂。',py:'Suīrán tā de Hànyǔ dàizhe yìdiǎnr kǒuyīn, dànshì dàjiā dōu tīng de dǒng.',vn:'Tuy tiếng Trung của cậu ấy hơi pha giọng địa phương nhưng mọi người đều nghe hiểu.'}
   ],
   colloFull:[
     {zh:'南方口音',py:'nánfāng kǒuyīn',vn:'giọng miền Nam'},
     {zh:'口音很重',py:'kǒuyīn hěn zhòng',vn:'giọng rất nặng'},
     {zh:'带着口音',py:'dàizhe kǒuyīn',vn:'pha giọng vùng miền'},
     {zh:'听口音',py:'tīng kǒuyīn',vn:'nghe giọng'},
     {zh:'北京口音',py:'Běijīng kǒuyīn',vn:'giọng Bắc Kinh'}
   ],
   patterns:[
     {s:'听口音，(chủ ngữ) + 是……',m:'Nghe giọng thì đoán là người …'},
     {s:'带着 + nơi + 口音',m:'Mang giọng vùng nào'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ông ấy xa quê hai mươi năm rồi mà giọng chẳng đổi chút nào.',answer:'他离开家乡二十年了，口音却一点儿也没变。',answerPy:'Tā líkāi jiāxiāng èrshí nián le, kǒuyīn què yìdiǎnr yě méi biàn.',
      note:'一点儿也没 + V = không … chút nào.',pair:'一点儿也没……'},
     {promptLang:'vi',prompt:'Nghe giọng thì cô ấy hẳn không phải người miền Bắc.',answer:'听口音，她应该不是北方人。',answerPy:'Tīng kǒuyīn, tā yīnggāi bú shì běifāng rén.',
      note:'应该 = hẳn là (suy đoán).',pair:'应该 (suy đoán)'}
   ]},

  {n:18,zh:'乡镇',py:'xiāngzhèn',pos:'Danh từ',vn:'thị trấn nhỏ',hv:'hương trấn',em:'🏘️',lesson:1,
   explain:['Chỉ chung xã (乡) và thị trấn (镇) — đơn vị hành chính ở nông thôn Trung Quốc; cũng chỉ các thị trấn nhỏ.'],
   usage:'来自……的一个乡镇; 乡镇企业 (doanh nghiệp hương trấn); 乡镇医院; 城市和乡镇.',
   collo:['一个乡镇','乡镇企业','乡镇医院','偏远的乡镇'],
   ex_zh:'果然，他来自南方的一个乡镇，原先是裁缝。',ex_py:'Guǒrán, tā láizì nánfāng de yí ge xiāngzhèn, yuánxiān shì cáifeng.',ex_vn:'Quả nhiên, ông đến từ một thị trấn nhỏ ở miền Nam, trước kia là thợ may.',
   exList:[
     {zh:'果然，他来自南方的一个乡镇，原先是裁缝。',py:'Guǒrán, tā láizì nánfāng de yí ge xiāngzhèn, yuánxiān shì cáifeng.',vn:'Quả nhiên, ông đến từ một thị trấn nhỏ ở miền Nam, trước kia là thợ may.'},
     {zh:'近来，很多年轻人回到家乡的乡镇创业。',py:'Jìnlái, hěn duō niánqīngrén huídào jiāxiāng de xiāngzhèn chuàngyè.',vn:'Gần đây, nhiều người trẻ trở về thị trấn quê nhà khởi nghiệp.'},
     {zh:'这个乡镇虽然不大，但是交通很方便。',py:'Zhège xiāngzhèn suīrán bú dà, dànshì jiāotōng hěn fāngbiàn.',vn:'Thị trấn này tuy không lớn nhưng giao thông rất thuận tiện.'}
   ],
   colloFull:[
     {zh:'一个乡镇',py:'yí ge xiāngzhèn',vn:'một thị trấn nhỏ'},
     {zh:'乡镇企业',py:'xiāngzhèn qǐyè',vn:'doanh nghiệp hương trấn'},
     {zh:'乡镇医院',py:'xiāngzhèn yīyuàn',vn:'bệnh viện tuyến xã'},
     {zh:'偏远的乡镇',py:'piānyuǎn de xiāngzhèn',vn:'thị trấn hẻo lánh'},
     {zh:'来自乡镇',py:'láizì xiāngzhèn',vn:'đến từ thị trấn nhỏ'}
   ],
   patterns:[
     {s:'来自 + nơi + 的一个乡镇',m:'Đến từ một thị trấn nhỏ ở …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cô ấy đến từ một thị trấn nhỏ ở miền Bắc, giờ đang học đại học ở Thượng Hải.',answer:'她来自北方的一个乡镇，现在在上海读大学。',answerPy:'Tā láizì běifāng de yí ge xiāngzhèn, xiànzài zài Shànghǎi dú dàxué.',
      note:'来自 + nơi chốn = cách nói văn viết của 从……来.',pair:'来自'},
     {promptLang:'vi',prompt:'So với thành phố, cuộc sống ở thị trấn nhỏ yên tĩnh hơn nhiều.',answer:'跟城市比起来，乡镇的生活安静多了。',answerPy:'Gēn chéngshì bǐ qǐlái, xiāngzhèn de shēnghuó ānjìng duō le.',
      note:'跟……比起来，…… + A + 多了: so với … thì … hơn nhiều.',pair:'跟……比起来'}
   ]},

  {n:19,zh:'原先',py:'yuánxiān',pos:'Danh từ',vn:'ban đầu, trước kia',hv:'nguyên tiên',em:'⏪',lesson:1,
   explain:['Lúc đầu, trước đây (đối lập với hiện nay). Làm trạng ngữ hoặc định ngữ: 原先的计划.','Gần với 原来 nhưng KHÔNG có nghĩa "hoá ra" (phát hiện điều trước đó chưa biết) — xem phần Phân biệt từ.'],
   usage:'原先 + 是/在/V……，现在……; 原先的 + N.',
   collo:['原先的计划','原先的样子','原先是裁缝','比原先好'],
   ex_zh:'他来自南方的一个乡镇，原先是裁缝，现在在我们旁边的港口干活。',ex_py:'Tā láizì nánfāng de yí ge xiāngzhèn, yuánxiān shì cáifeng, xiànzài zài wǒmen pángbiān de gǎngkǒu gàn huó.',ex_vn:'Ông đến từ một thị trấn nhỏ ở miền Nam, trước kia là thợ may, giờ làm việc ở bến cảng cạnh chỗ chúng tôi.',
   exList:[
     {zh:'他来自南方的一个乡镇，原先是裁缝，现在在我们旁边的港口干活。',py:'Tā láizì nánfāng de yí ge xiāngzhèn, yuánxiān shì cáifeng, xiànzài zài wǒmen pángbiān de gǎngkǒu gàn huó.',vn:'Ông đến từ một thị trấn nhỏ ở miền Nam, trước kia là thợ may, giờ làm việc ở bến cảng cạnh chỗ chúng tôi.'},
     {zh:'天气不好，我们只好改变原先的计划。',py:'Tiānqì bù hǎo, wǒmen zhǐhǎo gǎibiàn yuánxiān de jìhuà.',vn:'Thời tiết xấu, chúng tôi đành thay đổi kế hoạch ban đầu.'},
     {zh:'他原先脾气很别扭，现在跟同学们相处得很融洽。',py:'Tā yuánxiān píqi hěn bièniu, xiànzài gēn tóngxuémen xiāngchǔ de hěn róngqià.',vn:'Trước kia tính cậu ấy khó gần, giờ hoà thuận với các bạn lắm.'}
   ],
   colloFull:[
     {zh:'原先的计划',py:'yuánxiān de jìhuà',vn:'kế hoạch ban đầu'},
     {zh:'原先的样子',py:'yuánxiān de yàngzi',vn:'dáng vẻ trước kia'},
     {zh:'原先是裁缝',py:'yuánxiān shì cáifeng',vn:'trước kia là thợ may'},
     {zh:'比原先好',py:'bǐ yuánxiān hǎo',vn:'tốt hơn trước'},
     {zh:'原先住在农村',py:'yuánxiān zhù zài nóngcūn',vn:'trước kia sống ở nông thôn'}
   ],
   patterns:[
     {s:'原先……，现在……',m:'Trước kia …, bây giờ … (so sánh trước – sau)'},
     {s:'原先的 + N',m:'N ban đầu'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Trước kia ông ấy là thợ may, bây giờ làm việc ở bến cảng.',answer:'他原先是裁缝，现在在港口工作。',answerPy:'Tā yuánxiān shì cáifeng, xiànzài zài gǎngkǒu gōngzuò.',
      note:'原先……，现在…… đối chiếu quá khứ – hiện tại.',pair:'原先……，现在……'},
     {promptLang:'vi',prompt:'Căn phòng này rộng hơn trước nhiều.',answer:'这个房间比原先大多了。',answerPy:'Zhège fángjiān bǐ yuánxiān dà duō le.',
      note:'A 比 B + tính từ + 多了.',pair:'比……多了'}
   ]},

  {n:20,zh:'裁缝',py:'cáifeng',pos:'Danh từ',vn:'thợ may',hv:'tài phùng',em:'✂️',lesson:1,
   explain:['Người làm nghề cắt may quần áo. 缝 đọc nhẹ (cáifeng); khi là động từ "cắt may" thì đọc cáiféng.'],
   usage:'当裁缝, 做裁缝, 老裁缝, 找裁缝做衣服.',
   collo:['当裁缝','老裁缝','裁缝店','找裁缝做衣服'],
   ex_zh:'奶奶年轻时当过裁缝，全家人的衣服都是她做的。',ex_py:'Nǎinai niánqīng shí dāngguo cáifeng, quánjiā rén de yīfu dōu shì tā zuò de.',ex_vn:'Bà nội hồi trẻ từng làm thợ may, quần áo cả nhà đều do bà may.',
   exList:[
     {zh:'奶奶年轻时当过裁缝，全家人的衣服都是她做的。',py:'Nǎinai niánqīng shí dāngguo cáifeng, quánjiā rén de yīfu dōu shì tā zuò de.',vn:'Bà nội hồi trẻ từng làm thợ may, quần áo cả nhà đều do bà may.'},
     {zh:'果然，他来自南方的一个乡镇，原先是裁缝。',py:'Guǒrán, tā láizì nánfāng de yí ge xiāngzhèn, yuánxiān shì cáifeng.',vn:'Quả nhiên, ông đến từ một thị trấn nhỏ ở miền Nam, trước kia là thợ may.'},
     {zh:'这件旗袍是我请一位老裁缝专门做的。',py:'Zhè jiàn qípáo shì wǒ qǐng yí wèi lǎo cáifeng zhuānmén zuò de.',vn:'Chiếc sườn xám này tôi nhờ một bác thợ may lâu năm may riêng.'}
   ],
   colloFull:[
     {zh:'当裁缝',py:'dāng cáifeng',vn:'làm thợ may'},
     {zh:'老裁缝',py:'lǎo cáifeng',vn:'thợ may lâu năm'},
     {zh:'裁缝店',py:'cáifengdiàn',vn:'tiệm may'},
     {zh:'找裁缝做衣服',py:'zhǎo cáifeng zuò yīfu',vn:'tìm thợ may may đồ'}
   ],
   patterns:[
     {s:'当 / 做 + 裁缝',m:'Làm nghề thợ may'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chiếc áo này là thợ may may, không phải mua ở cửa hàng.',answer:'这件衣服是裁缝做的，不是在商店买的。',answerPy:'Zhè jiàn yīfu shì cáifeng zuò de, bú shì zài shāngdiàn mǎi de.',
      note:'是……的 nhấn mạnh người làm / nơi chốn của việc đã xảy ra.',pair:'是……的'},
     {promptLang:'vi',prompt:'Ông ấy làm thợ may hơn hai mươi năm, tay nghề rất giỏi.',answer:'他当了二十多年裁缝，手艺特别好。',answerPy:'Tā dāngle èrshí duō nián cáifeng, shǒuyì tèbié hǎo.',
      note:'V + 了 + thời lượng + tân ngữ.',pair:'V了 + thời lượng'}
   ]},

  {n:21,zh:'港口',py:'gǎngkǒu',pos:'Danh từ',vn:'bến cảng',hv:'cảng khẩu',em:'⚓',lesson:1,
   explain:['Nơi tàu thuyền neo đậu, bốc dỡ hàng hoá và đón trả khách.'],
   usage:'在港口干活/工作; 港口城市; 大型港口.',
   collo:['港口城市','在港口干活','大型港口','港口工人'],
   ex_zh:'他现在在我们旁边的港口干活。',ex_py:'Tā xiànzài zài wǒmen pángbiān de gǎngkǒu gàn huó.',ex_vn:'Bây giờ ông làm việc ở bến cảng bên cạnh chỗ chúng tôi.',
   exList:[
     {zh:'他现在在我们旁边的港口干活。',py:'Tā xiànzài zài wǒmen pángbiān de gǎngkǒu gàn huó.',vn:'Bây giờ ông làm việc ở bến cảng bên cạnh chỗ chúng tôi.'},
     {zh:'上海是中国最大的港口城市之一。',py:'Shànghǎi shì Zhōngguó zuì dà de gǎngkǒu chéngshì zhī yī.',vn:'Thượng Hải là một trong những thành phố cảng lớn nhất Trung Quốc.'},
     {zh:'港口的工人们异常勤劳，天不亮就开始工作了。',py:'Gǎngkǒu de gōngrénmen yìcháng qínláo, tiān bú liàng jiù kāishǐ gōngzuò le.',vn:'Công nhân bến cảng cần cù lạ thường, trời chưa sáng đã bắt đầu làm việc.'}
   ],
   colloFull:[
     {zh:'港口城市',py:'gǎngkǒu chéngshì',vn:'thành phố cảng'},
     {zh:'在港口干活',py:'zài gǎngkǒu gàn huó',vn:'làm việc ở bến cảng'},
     {zh:'大型港口',py:'dàxíng gǎngkǒu',vn:'cảng lớn'},
     {zh:'港口工人',py:'gǎngkǒu gōngrén',vn:'công nhân bến cảng'}
   ],
   patterns:[
     {s:'……是……之一',m:'… là một trong những …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Hải Phòng là một trong những thành phố cảng quan trọng nhất của Việt Nam.',answer:'海防是越南最重要的港口城市之一。',answerPy:'Hǎifáng shì Yuènán zuì zhòngyào de gǎngkǒu chéngshì zhī yī.',
      note:'是……之一 = là một trong những ….',pair:'……之一'},
     {promptLang:'vi',prompt:'Làm việc ở bến cảng tuy rất vất vả nhưng thu nhập cũng khá.',answer:'在港口干活虽然很辛苦，但是收入还不错。',answerPy:'Zài gǎngkǒu gàn huó suīrán hěn xīnkǔ, dànshì shōurù hái búcuò.',
      note:'Cụm động từ làm chủ ngữ + 虽然……但是…….',pair:'虽然……但是……'}
   ]},

  {n:22,zh:'斯文',py:'sīwen',pos:'Tính từ',vn:'lịch sự, nhã nhặn',hv:'tư văn',em:'👓',lesson:1,
   explain:['Nho nhã, lịch sự, có dáng vẻ người có học. Lặp lại kiểu AABB: 斯斯文文 (khẩu ngữ, nhấn mạnh).'],
   usage:'斯斯文文的; 看起来很斯文; 说话斯文.',
   collo:['斯斯文文','很斯文','说话斯文','斯文的样子'],
   ex_zh:'你和我女儿一样，斯斯文文的，一看就读过书。',ex_py:'Nǐ hé wǒ nǚ\'ér yíyàng, sīsīwénwén de, yí kàn jiù dúguo shū.',ex_vn:'Cô cũng giống con gái tôi, nho nhã lịch sự, nhìn là biết người có học.',
   exList:[
     {zh:'你和我女儿一样，斯斯文文的，一看就读过书。',py:'Nǐ hé wǒ nǚ\'ér yíyàng, sīsīwénwén de, yí kàn jiù dúguo shū.',vn:'Cô cũng giống con gái tôi, nho nhã lịch sự, nhìn là biết người có học.'},
     {zh:'他看起来斯斯文文的，没想到打起篮球来那么厉害。',py:'Tā kàn qǐlái sīsīwénwén de, méi xiǎngdào dǎ qǐ lánqiú lái nàme lìhai.',vn:'Cậu ấy trông nho nhã thế, không ngờ chơi bóng rổ lại giỏi vậy.'},
     {zh:'她说话很斯文，从来不大声嚷。',py:'Tā shuōhuà hěn sīwen, cónglái bú dàshēng rǎng.',vn:'Cô ấy nói năng nhã nhặn, chưa bao giờ to tiếng la hét.'}
   ],
   colloFull:[
     {zh:'斯斯文文',py:'sīsīwénwén',vn:'nho nhã, lịch sự'},
     {zh:'很斯文',py:'hěn sīwen',vn:'rất nhã nhặn'},
     {zh:'说话斯文',py:'shuōhuà sīwen',vn:'nói năng nhã nhặn'},
     {zh:'斯文的样子',py:'sīwen de yàngzi',vn:'dáng vẻ nho nhã'}
   ],
   patterns:[
     {s:'看起来 + 斯斯文文的',m:'Trông nho nhã, lịch sự'},
     {s:'一看就 + V',m:'Nhìn là biết …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Anh ấy trông rất nho nhã, nhìn là biết người có học.',answer:'他看起来很斯文，一看就读过书。',answerPy:'Tā kàn qǐlái hěn sīwen, yí kàn jiù dúguo shū.',
      note:'一看就…… = nhìn qua là biết ngay.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Không ngờ một người nho nhã như vậy cũng nổi nóng.',answer:'没想到这么斯文的人也会发脾气。',answerPy:'Méi xiǎngdào zhème sīwen de rén yě huì fā píqi.',
      note:'没想到…… = không ngờ ….',pair:'没想到'}
   ]},

  {n:23,zh:'心眼儿',py:'xīnyǎnr',pos:'Danh từ',vn:'bụng dạ, lòng',hv:'tâm nhãn',em:'💗',lesson:1,
   explain:['Tấm lòng, bụng dạ: 心眼儿好 (tốt bụng), 心眼儿坏 (bụng dạ xấu).','Còn chỉ sự lanh lợi, đề phòng (多个心眼儿 = cảnh giác hơn) hoặc độ lượng (心眼儿小 = hẹp hòi).'],
   usage:'心眼儿好/坏; 心眼儿小; 多个心眼儿; 实心眼儿.',
   collo:['心眼儿好','心眼儿小','多个心眼儿','实心眼儿'],
   ex_zh:'你一看就读过书，心眼儿好，守信誉，怎么会欺骗我呢？',ex_py:'Nǐ yí kàn jiù dúguo shū, xīnyǎnr hǎo, shǒu xìnyù, zěnme huì qīpiàn wǒ ne?',ex_vn:'Nhìn là biết cô là người có học, tốt bụng, giữ chữ tín, sao lại lừa tôi được?',
   exList:[
     {zh:'你一看就读过书，心眼儿好，守信誉，怎么会欺骗我呢？',py:'Nǐ yí kàn jiù dúguo shū, xīnyǎnr hǎo, shǒu xìnyù, zěnme huì qīpiàn wǒ ne?',vn:'Nhìn là biết cô là người có học, tốt bụng, giữ chữ tín, sao lại lừa tôi được?'},
     {zh:'她心眼儿好，谁有困难她都爽快地帮忙。',py:'Tā xīnyǎnr hǎo, shéi yǒu kùnnan tā dōu shuǎngkuai de bāngmáng.',vn:'Cô ấy tốt bụng, ai gặp khó khăn cô cũng sẵn lòng giúp ngay.'},
     {zh:'在网上买东西要多个心眼儿，别轻易相信陌生人。',py:'Zài wǎng shang mǎi dōngxi yào duō ge xīnyǎnr, bié qīngyì xiāngxìn mòshēngrén.',vn:'Mua hàng trên mạng phải cảnh giác một chút, đừng dễ dàng tin người lạ.'}
   ],
   colloFull:[
     {zh:'心眼儿好',py:'xīnyǎnr hǎo',vn:'tốt bụng'},
     {zh:'心眼儿小',py:'xīnyǎnr xiǎo',vn:'hẹp hòi'},
     {zh:'多个心眼儿',py:'duō ge xīnyǎnr',vn:'cảnh giác hơn'},
     {zh:'实心眼儿',py:'shíxīnyǎnr',vn:'thật thà (đến mức cả tin)'},
     {zh:'没心眼儿',py:'méi xīnyǎnr',vn:'vô tư, không để bụng'}
   ],
   patterns:[
     {s:'(Người) + 心眼儿 + 好 / 坏 / 小',m:'Nhận xét tấm lòng, bụng dạ'},
     {s:'多个心眼儿',m:'Cảnh giác, đề phòng hơn'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cậu ấy ít nói nhưng lại rất tốt bụng.',answer:'他话不多，心眼儿却特别好。',answerPy:'Tā huà bù duō, xīnyǎnr què tèbié hǎo.',
      note:'却 đứng sau chủ ngữ của vế sau (心眼儿), trước vị ngữ.',pair:'却'},
     {promptLang:'vi',prompt:'Đừng hẹp hòi như vậy, người ta cũng đâu có cố ý.',answer:'别这么小心眼儿，人家也不是故意的。',answerPy:'Bié zhème xiǎo xīnyǎnr, rénjia yě bú shì gùyì de.',
      note:'小心眼儿 = hẹp hòi; 人家 = người ta; 不是……的 phủ định nhấn mạnh.',pair:'不是……的'}
   ]},

  {n:24,zh:'信誉',py:'xìnyù',pos:'Danh từ',vn:'uy tín, danh dự',hv:'tín dự',em:'🤝',lesson:1,
   explain:['Sự tín nhiệm và danh tiếng có được nhờ giữ lời hứa: 守信誉 (giữ chữ tín), 讲信誉.','Hay dùng cho người làm ăn, công ty, cửa hàng: 信誉好的公司.'],
   usage:'守/讲信誉; 信誉好/差; 失去信誉; 信誉第一.',
   collo:['守信誉','讲信誉','信誉很好','失去信誉'],
   ex_zh:'这家网店信誉很好，我在那儿买过好几次东西。',ex_py:'Zhè jiā wǎngdiàn xìnyù hěn hǎo, wǒ zài nàr mǎiguo hǎo jǐ cì dōngxi.',ex_vn:'Cửa hàng online này uy tín lắm, tôi mua ở đó mấy lần rồi.',
   exList:[
     {zh:'这家网店信誉很好，我在那儿买过好几次东西。',py:'Zhè jiā wǎngdiàn xìnyù hěn hǎo, wǒ zài nàr mǎiguo hǎo jǐ cì dōngxi.',vn:'Cửa hàng online này uy tín lắm, tôi mua ở đó mấy lần rồi.'},
     {zh:'你心眼儿好，守信誉，怎么会欺骗我呢？',py:'Nǐ xīnyǎnr hǎo, shǒu xìnyù, zěnme huì qīpiàn wǒ ne?',vn:'Cô tốt bụng, giữ chữ tín, sao lại lừa tôi được?'},
     {zh:'做生意一旦失去了信誉，就很难再让顾客相信你了。',py:'Zuò shēngyi yídàn shīqùle xìnyù, jiù hěn nán zài ràng gùkè xiāngxìn nǐ le.',vn:'Làm ăn mà một khi đã mất uy tín thì rất khó khiến khách hàng tin mình lần nữa.'}
   ],
   colloFull:[
     {zh:'守信誉',py:'shǒu xìnyù',vn:'giữ chữ tín'},
     {zh:'讲信誉',py:'jiǎng xìnyù',vn:'coi trọng chữ tín'},
     {zh:'信誉很好',py:'xìnyù hěn hǎo',vn:'uy tín rất tốt'},
     {zh:'失去信誉',py:'shīqù xìnyù',vn:'mất uy tín'},
     {zh:'信誉第一',py:'xìnyù dì-yī',vn:'uy tín là trên hết'}
   ],
   patterns:[
     {s:'守 / 讲 + 信誉',m:'Giữ, coi trọng chữ tín'},
     {s:'一旦失去信誉，就……',m:'Một khi mất uy tín thì …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Công ty chúng tôi luôn coi trọng chữ tín, chưa bao giờ lừa khách hàng.',answer:'我们公司一向讲信誉，从来没有欺骗过顾客。',answerPy:'Wǒmen gōngsī yíxiàng jiǎng xìnyù, cónglái méiyǒu qīpiànguo gùkè.',
      note:'从来没(有) + V + 过 = chưa bao giờ ….',pair:'从来没……过'},
     {promptLang:'vi',prompt:'Chỉ có giữ chữ tín thì người khác mới tin bạn.',answer:'只有守信誉，别人才会相信你。',answerPy:'Zhǐyǒu shǒu xìnyù, biérén cái huì xiāngxìn nǐ.',
      note:'只有……才…… nêu điều kiện duy nhất; 才 đứng sau chủ ngữ vế sau.',pair:'只有……才……'}
   ]},

  {n:25,zh:'欺骗',py:'qīpiàn',pos:'Động từ',vn:'lừa gạt',hv:'khi biển',em:'🎭',lesson:1,
   explain:['Dùng lời nói, việc làm dối trá khiến người khác tin điều sai (nghĩa nặng và trang trọng hơn 骗).'],
   usage:'欺骗 + người; 被……欺骗; 欺骗顾客/感情; 受到欺骗.',
   collo:['欺骗别人','被人欺骗','欺骗顾客','受到欺骗'],
   ex_zh:'一看就读过书，心眼儿好，守信誉，怎么会欺骗我呢？',ex_py:'Yí kàn jiù dúguo shū, xīnyǎnr hǎo, shǒu xìnyù, zěnme huì qīpiàn wǒ ne?',ex_vn:'Nhìn là biết người có học, tốt bụng, giữ chữ tín, sao lại lừa tôi được?',
   exList:[
     {zh:'一看就读过书，心眼儿好，守信誉，怎么会欺骗我呢？',py:'Yí kàn jiù dúguo shū, xīnyǎnr hǎo, shǒu xìnyù, zěnme huì qīpiàn wǒ ne?',vn:'Nhìn là biết người có học, tốt bụng, giữ chữ tín, sao lại lừa tôi được?'},
     {zh:'他被网上的假广告欺骗了，白白花了一千块钱。',py:'Tā bèi wǎng shang de jiǎ guǎnggào qīpiàn le, báibái huāle yìqiān kuài qián.',vn:'Cậu ta bị quảng cáo giả trên mạng lừa, mất toi một nghìn tệ.'},
     {zh:'无论遇到什么情况，都不应该欺骗父母。',py:'Wúlùn yùdào shénme qíngkuàng, dōu bù yīnggāi qīpiàn fùmǔ.',vn:'Dù gặp chuyện gì cũng không nên lừa dối bố mẹ.'}
   ],
   colloFull:[
     {zh:'欺骗别人',py:'qīpiàn biérén',vn:'lừa người khác'},
     {zh:'被人欺骗',py:'bèi rén qīpiàn',vn:'bị người ta lừa'},
     {zh:'欺骗顾客',py:'qīpiàn gùkè',vn:'lừa khách hàng'},
     {zh:'受到欺骗',py:'shòudào qīpiàn',vn:'bị lừa gạt'},
     {zh:'欺骗感情',py:'qīpiàn gǎnqíng',vn:'lừa dối tình cảm'}
   ],
   patterns:[
     {s:'怎么会 + 欺骗……呢？',m:'Câu hỏi tu từ: sao lại lừa … được (= không thể)'},
     {s:'被 + ai + 欺骗了',m:'Bị ai lừa'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cô ấy tốt như vậy, sao lại lừa chúng ta được?',answer:'她那么好，怎么会欺骗我们呢？',answerPy:'Tā nàme hǎo, zěnme huì qīpiàn wǒmen ne?',
      note:'怎么会……呢？ là câu hỏi tu từ, mang nghĩa phủ định.',pair:'怎么会……呢？'},
     {promptLang:'vi',prompt:'Nhiều người già bị các cuộc gọi lừa đảo lừa gạt.',answer:'很多老人被诈骗电话欺骗了。',answerPy:'Hěn duō lǎorén bèi zhàpiàn diànhuà qīpiàn le.',
      note:'Câu bị động: 被 + tác nhân + V + 了.',pair:'Câu chữ 被'}
   ]},

  {n:26,zh:'学位',py:'xuéwèi',pos:'Danh từ',vn:'học vị',hv:'học vị',em:'🎓',lesson:1,
   explain:['Danh hiệu cấp cho người hoàn thành một bậc học: 学士 (cử nhân), 硕士 (thạc sĩ), 博士 (tiến sĩ).'],
   usage:'有学位; 获得/拿到 + 学位; 硕士/博士学位; 学位证书.',
   collo:['硕士学位','博士学位','获得学位','学位证书'],
   ex_zh:'他说女儿念了硕士，有学位，在一家一流的公司上班。',ex_py:'Tā shuō nǚ\'ér niànle shuòshì, yǒu xuéwèi, zài yì jiā yīliú de gōngsī shàngbān.',ex_vn:'Ông kể con gái học thạc sĩ, có học vị, làm việc ở một công ty hàng đầu.',
   exList:[
     {zh:'他说女儿念了硕士，有学位，在一家一流的公司上班。',py:'Tā shuō nǚ\'ér niànle shuòshì, yǒu xuéwèi, zài yì jiā yīliú de gōngsī shàngbān.',vn:'Ông kể con gái học thạc sĩ, có học vị, làm việc ở một công ty hàng đầu.'},
     {zh:'姐姐去年在北京大学拿到了博士学位。',py:'Jiějie qùnián zài Běijīng Dàxué nádàole bóshì xuéwèi.',vn:'Năm ngoái chị gái tôi nhận bằng tiến sĩ ở Đại học Bắc Kinh.'},
     {zh:'学位固然重要，但是能力更重要。',py:'Xuéwèi gùrán zhòngyào, dànshì nénglì gèng zhòngyào.',vn:'Học vị đương nhiên quan trọng, nhưng năng lực còn quan trọng hơn.'}
   ],
   colloFull:[
     {zh:'硕士学位',py:'shuòshì xuéwèi',vn:'học vị thạc sĩ'},
     {zh:'博士学位',py:'bóshì xuéwèi',vn:'học vị tiến sĩ'},
     {zh:'获得学位',py:'huòdé xuéwèi',vn:'nhận học vị'},
     {zh:'学位证书',py:'xuéwèi zhèngshū',vn:'bằng (chứng nhận học vị)'},
     {zh:'有学位',py:'yǒu xuéwèi',vn:'có học vị'}
   ],
   patterns:[
     {s:'获得 / 拿到 + 硕士/博士学位',m:'Nhận bằng thạc sĩ / tiến sĩ'},
     {s:'……固然……，但是……',m:'… đương nhiên …, nhưng …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Anh trai tôi đang học ở Trung Quốc, chuẩn bị lấy bằng thạc sĩ.',answer:'我哥哥正在中国读书，准备拿硕士学位。',answerPy:'Wǒ gēge zhèngzài Zhōngguó dúshū, zhǔnbèi ná shuòshì xuéwèi.',
      note:'正在 + V: đang làm; 准备 + V: chuẩn bị, dự định.',pair:'正在……'},
     {promptLang:'vi',prompt:'Cô ấy không những có học vị tiến sĩ mà còn nhiều kinh nghiệm làm việc.',answer:'她不仅有博士学位，而且有丰富的工作经验。',answerPy:'Tā bùjǐn yǒu bóshì xuéwèi, érqiě yǒu fēngfù de gōngzuò jīngyàn.',
      note:'不仅……而且…… tăng tiến.',pair:'不仅……而且……'}
   ]},

  {n:27,zh:'一流',py:'yīliú',pos:'Tính từ',vn:'hạng nhất',hv:'nhất lưu',em:'🥇',lesson:1,
   explain:['Thuộc hạng tốt nhất, đẳng cấp cao nhất. 流 ở đây = hạng, đẳng cấp. Làm định ngữ (一流的公司) hoặc vị ngữ (服务一流).','Sách ghi yīliú (一 chỉ thứ hạng nên giữ thanh 1).'],
   usage:'一流的 + 公司/大学/水平/服务; ……是一流的.',
   collo:['一流的公司','一流大学','一流水平','服务一流'],
   ex_zh:'女儿在一家一流的公司上班，是个主管。',ex_py:'Nǚ\'ér zài yì jiā yīliú de gōngsī shàngbān, shì ge zhǔguǎn.',ex_vn:'Con gái làm ở một công ty hàng đầu, là một quản lý.',
   exList:[
     {zh:'女儿在一家一流的公司上班，是个主管。',py:'Nǚ\'ér zài yì jiā yīliú de gōngsī shàngbān, shì ge zhǔguǎn.',vn:'Con gái làm ở một công ty hàng đầu, là một quản lý.'},
     {zh:'这家酒店的服务是一流的，难怪客人那么多。',py:'Zhè jiā jiǔdiàn de fúwù shì yīliú de, nánguài kèrén nàme duō.',vn:'Dịch vụ của khách sạn này thuộc hạng nhất, thảo nào khách đông thế.'},
     {zh:'他的厨艺是一流的，红烧肉是他的拿手菜。',py:'Tā de chúyì shì yīliú de, hóngshāoròu shì tā de náshǒu cài.',vn:'Tài nấu nướng của anh ấy thuộc hàng đỉnh, thịt kho tàu là món ruột của anh.'}
   ],
   colloFull:[
     {zh:'一流的公司',py:'yīliú de gōngsī',vn:'công ty hàng đầu'},
     {zh:'一流大学',py:'yīliú dàxué',vn:'đại học hàng đầu'},
     {zh:'一流水平',py:'yīliú shuǐpíng',vn:'trình độ hạng nhất'},
     {zh:'服务一流',py:'fúwù yīliú',vn:'dịch vụ hạng nhất'},
     {zh:'世界一流',py:'shìjiè yīliú',vn:'hàng đầu thế giới'}
   ],
   patterns:[
     {s:'一流的 + N',m:'N hạng nhất, hàng đầu'},
     {s:'N + 是一流的',m:'N thuộc hạng nhất'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ước mơ của em là thi đỗ một trường đại học hàng đầu.',answer:'我的梦想是考上一所一流的大学。',answerPy:'Wǒ de mèngxiǎng shì kǎoshang yì suǒ yīliú de dàxué.',
      note:'考上 = thi đỗ; lượng từ của 大学 là 所.',pair:'V + 上 (đạt mục tiêu)'},
     {promptLang:'vi',prompt:'Món ăn ở nhà hàng này thuộc hạng nhất, thảo nào lúc nào cũng đông khách.',answer:'这家饭馆的菜是一流的，难怪总是有很多客人。',answerPy:'Zhè jiā fànguǎn de cài shì yīliú de, nánguài zǒngshì yǒu hěn duō kèrén.',
      note:'难怪 = thảo nào (hiểu ra nguyên nhân).',pair:'难怪'}
   ]},

  {n:28,zh:'主管',py:'zhǔguǎn',pos:'Danh từ',vn:'người quản lý',hv:'chủ quản',em:'👩‍💼',lesson:1,
   explain:['Người phụ trách, quản lý một bộ phận. Cũng làm động từ: phụ trách chính (主管人事).'],
   usage:'是个主管; 部门主管; 当上主管; 主管 + lĩnh vực (động từ).',
   collo:['部门主管','当上主管','销售主管','是个主管'],
   ex_zh:'女儿在一家一流的公司上班，是个主管，还有助手。',ex_py:'Nǚ\'ér zài yì jiā yīliú de gōngsī shàngbān, shì ge zhǔguǎn, hái yǒu zhùshǒu.',ex_vn:'Con gái làm ở một công ty hàng đầu, là quản lý, còn có cả trợ lý.',
   exList:[
     {zh:'女儿在一家一流的公司上班，是个主管，还有助手。',py:'Nǚ\'ér zài yì jiā yīliú de gōngsī shàngbān, shì ge zhǔguǎn, hái yǒu zhùshǒu.',vn:'Con gái làm ở một công ty hàng đầu, là quản lý, còn có cả trợ lý.'},
     {zh:'我们部门的主管对人非常和蔼，大家都喜欢她。',py:'Wǒmen bùmén de zhǔguǎn duì rén fēicháng hé\'ǎi, dàjiā dōu xǐhuan tā.',vn:'Chị quản lý bộ phận chúng tôi rất hoà nhã với mọi người, ai cũng quý chị.'},
     {zh:'他工作才三年就当上了销售主管。',py:'Tā gōngzuò cái sān nián jiù dāngshangle xiāoshòu zhǔguǎn.',vn:'Anh ấy mới đi làm ba năm đã lên chức quản lý bán hàng.'}
   ],
   colloFull:[
     {zh:'部门主管',py:'bùmén zhǔguǎn',vn:'quản lý bộ phận'},
     {zh:'当上主管',py:'dāngshang zhǔguǎn',vn:'lên làm quản lý'},
     {zh:'销售主管',py:'xiāoshòu zhǔguǎn',vn:'quản lý bán hàng'},
     {zh:'是个主管',py:'shì ge zhǔguǎn',vn:'là một quản lý'},
     {zh:'主管人事',py:'zhǔguǎn rénshì',vn:'phụ trách nhân sự'}
   ],
   patterns:[
     {s:'才 + thời lượng + 就 + 当上了主管',m:'Mới … đã lên làm quản lý'},
     {s:'部门 / 销售 + 主管',m:'Quản lý bộ phận / bán hàng'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cô ấy mới vào công ty hai năm đã lên làm quản lý.',answer:'她才进公司两年就当上了主管。',answerPy:'Tā cái jìn gōngsī liǎng nián jiù dāngshangle zhǔguǎn.',
      note:'才 + thời lượng + 就…… = mới … đã … (nhanh hơn dự kiến).',pair:'才……就……'},
     {promptLang:'vi',prompt:'Có vấn đề gì thì bạn có thể tìm thẳng quản lý bộ phận.',answer:'有什么问题，你可以直接找部门主管。',answerPy:'Yǒu shénme wèntí, nǐ kěyǐ zhíjiē zhǎo bùmén zhǔguǎn.',
      note:'什么 dùng phiếm chỉ (bất cứ … gì).',pair:'什么 phiếm chỉ'}
   ]},

  {n:29,zh:'助手',py:'zhùshǒu',pos:'Danh từ',vn:'trợ lý',hv:'trợ thủ',em:'🧑‍💻',lesson:1,
   explain:['Người giúp việc, hỗ trợ ai làm việc: 经理的助手, 得力助手 (trợ thủ đắc lực).'],
   usage:'当助手; 有助手; 得力助手; 给……当助手.',
   collo:['得力助手','当助手','经理的助手','好助手'],
   ex_zh:'小王工作认真，是经理的得力助手。',ex_py:'Xiǎo Wáng gōngzuò rènzhēn, shì jīnglǐ de délì zhùshǒu.',ex_vn:'Tiểu Vương làm việc chăm chỉ, là trợ thủ đắc lực của giám đốc.',
   exList:[
     {zh:'小王工作认真，是经理的得力助手。',py:'Xiǎo Wáng gōngzuò rènzhēn, shì jīnglǐ de délì zhùshǒu.',vn:'Tiểu Vương làm việc chăm chỉ, là trợ thủ đắc lực của giám đốc.'},
     {zh:'是个主管，还有助手，怎么也算得上是公司的骨干。',py:'Shì ge zhǔguǎn, hái yǒu zhùshǒu, zěnme yě suàndeshàng shì gōngsī de gǔgàn.',vn:'Là quản lý, còn có trợ lý, dù sao cũng được coi là trụ cột của công ty.'},
     {zh:'放假时，我在家给妈妈当助手，帮她做饭、打扫房间。',py:'Fàngjià shí, wǒ zài jiā gěi māma dāng zhùshǒu, bāng tā zuò fàn, dǎsǎo fángjiān.',vn:'Nghỉ lễ tôi ở nhà làm trợ thủ cho mẹ, giúp mẹ nấu cơm, dọn phòng.'}
   ],
   colloFull:[
     {zh:'得力助手',py:'délì zhùshǒu',vn:'trợ thủ đắc lực'},
     {zh:'当助手',py:'dāng zhùshǒu',vn:'làm trợ lý'},
     {zh:'经理的助手',py:'jīnglǐ de zhùshǒu',vn:'trợ lý giám đốc'},
     {zh:'好助手',py:'hǎo zhùshǒu',vn:'trợ thủ tốt'},
     {zh:'给妈妈当助手',py:'gěi māma dāng zhùshǒu',vn:'làm trợ thủ cho mẹ'}
   ],
   patterns:[
     {s:'给 + ai + 当助手',m:'Làm trợ thủ cho ai'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Em gái tôi rất thích làm trợ thủ cho mẹ trong bếp.',answer:'我妹妹特别喜欢在厨房给妈妈当助手。',answerPy:'Wǒ mèimei tèbié xǐhuan zài chúfáng gěi māma dāng zhùshǒu.',
      note:'Trật tự trạng ngữ: 在 + nơi chốn → 给 + người → động từ.',pair:'Trật tự trạng ngữ'},
     {promptLang:'vi',prompt:'Nếu không có trợ lý giúp, anh ấy không thể làm xong nhiều việc như vậy.',answer:'要是没有助手帮忙，他不可能做完这么多工作。',answerPy:'Yàoshi méiyǒu zhùshǒu bāngmáng, tā bù kěnéng zuòwán zhème duō gōngzuò.',
      note:'要是…… = nếu …; 不可能 + V = không thể nào ….',pair:'要是……'}
   ]},

  {n:30,zh:'骨干',py:'gǔgàn',pos:'Danh từ',vn:'trụ cột, rường cột',hv:'cốt cán',em:'🏗️',lesson:1,
   explain:['Người (hoặc bộ phận) giữ vai trò chủ chốt, quan trọng nhất trong một tập thể — tiếng Việt có từ "cốt cán".'],
   usage:'……的骨干; 骨干力量; 业务骨干; 算得上/成为骨干.',
   collo:['公司的骨干','业务骨干','骨干力量','成为骨干'],
   ex_zh:'他说女儿是个主管，还有助手，怎么也算得上是公司的骨干。',ex_py:'Tā shuō nǚ\'ér shì ge zhǔguǎn, hái yǒu zhùshǒu, zěnme yě suàndeshàng shì gōngsī de gǔgàn.',ex_vn:'Ông kể con gái là quản lý, còn có trợ lý, dù sao cũng được coi là trụ cột của công ty.',
   exList:[
     {zh:'他说女儿是个主管，还有助手，怎么也算得上是公司的骨干。',py:'Tā shuō nǚ\'ér shì ge zhǔguǎn, hái yǒu zhùshǒu, zěnme yě suàndeshàng shì gōngsī de gǔgàn.',vn:'Ông kể con gái là quản lý, còn có trợ lý, dù sao cũng được coi là trụ cột của công ty.'},
     {zh:'大学毕业后，我到了一家贸易公司，现在也算得上是公司的骨干了。',py:'Dàxué bìyè hòu, wǒ dàole yì jiā màoyì gōngsī, xiànzài yě suàndeshàng shì gōngsī de gǔgàn le.',vn:'Tốt nghiệp đại học, tôi vào một công ty thương mại, giờ cũng được xem là trụ cột của công ty rồi.'},
     {zh:'年轻人是国家发展的骨干力量。',py:'Niánqīngrén shì guójiā fāzhǎn de gǔgàn lìliang.',vn:'Người trẻ là lực lượng nòng cốt cho sự phát triển của đất nước.'}
   ],
   colloFull:[
     {zh:'公司的骨干',py:'gōngsī de gǔgàn',vn:'trụ cột của công ty'},
     {zh:'业务骨干',py:'yèwù gǔgàn',vn:'nhân viên nghiệp vụ chủ chốt'},
     {zh:'骨干力量',py:'gǔgàn lìliang',vn:'lực lượng nòng cốt'},
     {zh:'成为骨干',py:'chéngwéi gǔgàn',vn:'trở thành trụ cột'},
     {zh:'骨干教师',py:'gǔgàn jiàoshī',vn:'giáo viên cốt cán'}
   ],
   patterns:[
     {s:'算得上是 + ……的骨干',m:'Được xem là trụ cột của …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Qua mấy năm nỗ lực, anh ấy đã trở thành trụ cột của đội bóng.',answer:'经过几年的努力，他已经成为球队的骨干了。',answerPy:'Jīngguò jǐ nián de nǔlì, tā yǐjīng chéngwéi qiúduì de gǔgàn le.',
      note:'经过 + quá trình, (chủ ngữ) + kết quả.',pair:'经过……'},
     {promptLang:'vi',prompt:'Cô ấy không chỉ là giáo viên cốt cán mà còn là chủ nhiệm lớp chúng tôi.',answer:'她不仅是骨干教师，还是我们的班主任。',answerPy:'Tā bùjǐn shì gǔgàn jiàoshī, hái shì wǒmen de bānzhǔrèn.',
      note:'不仅……还…… tăng tiến.',pair:'不仅……还……'}
   ]},

  {n:31,zh:'小心翼翼',py:'xiǎoxīn-yìyì',pos:'Thành ngữ',vn:'thận trọng, dè dặt',hv:'tiểu tâm dực dực',em:'🫳',lesson:1,
   explain:['Hết sức cẩn thận, nâng niu, không dám sơ suất (翼翼 = dáng cung kính, thận trọng).','Thường làm trạng ngữ: 小心翼翼地 + V.'],
   usage:'小心翼翼地 + 收起来/拿/走/问.',
   collo:['小心翼翼地收起来','小心翼翼地拿着','小心翼翼地走','小心翼翼的样子'],
   ex_zh:'他小心翼翼地收起来，满怀喜悦地走了。',ex_py:'Tā xiǎoxīn-yìyì de shōu qǐlái, mǎnhuái xǐyuè de zǒu le.',ex_vn:'Ông cẩn thận cất đi, rồi lòng đầy vui sướng ra về.',
   exList:[
     {zh:'他小心翼翼地收起来，满怀喜悦地走了。',py:'Tā xiǎoxīn-yìyì de shōu qǐlái, mǎnhuái xǐyuè de zǒu le.',vn:'Ông cẩn thận cất đi, rồi lòng đầy vui sướng ra về.'},
     {zh:'妹妹小心翼翼地捧着刚买的蛋糕，生怕把它碰坏了。',py:'Mèimei xiǎoxīn-yìyì de pěngzhe gāng mǎi de dàngāo, shēngpà bǎ tā pèng huài le.',vn:'Em gái nâng niu ôm chiếc bánh kem vừa mua, chỉ sợ làm hỏng.'},
     {zh:'路上都是冰，大家只好小心翼翼地往前走。',py:'Lù shang dōu shì bīng, dàjiā zhǐhǎo xiǎoxīn-yìyì de wǎng qián zǒu.',vn:'Đường toàn băng, mọi người đành dè dặt bước tới.'}
   ],
   colloFull:[
     {zh:'小心翼翼地收起来',py:'xiǎoxīn-yìyì de shōu qǐlái',vn:'cẩn thận cất đi'},
     {zh:'小心翼翼地拿着',py:'xiǎoxīn-yìyì de názhe',vn:'cầm hết sức cẩn thận'},
     {zh:'小心翼翼地走',py:'xiǎoxīn-yìyì de zǒu',vn:'dè dặt bước đi'},
     {zh:'小心翼翼的样子',py:'xiǎoxīn-yìyì de yàngzi',vn:'dáng vẻ rụt rè, thận trọng'}
   ],
   patterns:[
     {s:'小心翼翼地 + V',m:'Hết sức cẩn thận làm gì'},
     {s:'……，生怕……',m:'…, chỉ sợ … (lo điều xấu xảy ra)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cô ấy cẩn thận cất tấm danh thiếp vào ví.',answer:'她小心翼翼地把名片放进了钱包里。',answerPy:'Tā xiǎoxīn-yìyì de bǎ míngpiàn fàng jìnle qiánbāo li.',
      note:'Trạng ngữ (……地) đứng trước 把; 把 + tân ngữ + 放进 + nơi chốn.',pair:'Câu chữ 把'},
     {promptLang:'vi',prompt:'Tôi dè dặt hỏi thầy, chỉ sợ làm thầy không vui.',answer:'我小心翼翼地问老师，生怕让他不高兴。',answerPy:'Wǒ xiǎoxīn-yìyì de wèn lǎoshī, shēngpà ràng tā bù gāoxìng.',
      note:'生怕 = chỉ sợ; 让 + người + tính từ (câu kiêm ngữ).',pair:'让 (câu kiêm ngữ)'}
   ]},

  {n:32,zh:'喜悦',py:'xǐyuè',pos:'Tính từ',vn:'vui sướng',hv:'hỉ duyệt',em:'😄',lesson:1,
   explain:['Vui mừng, hân hoan (văn viết). Hay dùng như danh từ: 满怀喜悦, 成功的喜悦, 流露出喜悦.'],
   usage:'满怀喜悦; 喜悦的心情; 丰收/成功的喜悦; 分享喜悦.',
   collo:['满怀喜悦','喜悦的心情','成功的喜悦','分享喜悦'],
   ex_zh:'他小心翼翼地收起来，满怀喜悦地走了。',ex_py:'Tā xiǎoxīn-yìyì de shōu qǐlái, mǎnhuái xǐyuè de zǒu le.',ex_vn:'Ông cẩn thận cất đi, rồi lòng đầy vui sướng ra về.',
   exList:[
     {zh:'他小心翼翼地收起来，满怀喜悦地走了。',py:'Tā xiǎoxīn-yìyì de shōu qǐlái, mǎnhuái xǐyuè de zǒu le.',vn:'Ông cẩn thận cất đi, rồi lòng đầy vui sướng ra về.'},
     {zh:'考上大学的那天，我怀着喜悦的心情给爷爷打了电话。',py:'Kǎoshang dàxué de nà tiān, wǒ huáizhe xǐyuè de xīnqíng gěi yéye dǎle diànhuà.',vn:'Ngày thi đỗ đại học, tôi mang tâm trạng hân hoan gọi điện cho ông.'},
     {zh:'看着金黄的稻田，农民们脸上露出了丰收的喜悦。',py:'Kànzhe jīnhuáng de dàotián, nóngmínmen liǎn shang lùchūle fēngshōu de xǐyuè.',vn:'Nhìn đồng lúa vàng óng, trên mặt người nông dân rạng niềm vui được mùa.'}
   ],
   colloFull:[
     {zh:'满怀喜悦',py:'mǎnhuái xǐyuè',vn:'lòng tràn đầy vui sướng'},
     {zh:'喜悦的心情',py:'xǐyuè de xīnqíng',vn:'tâm trạng vui sướng'},
     {zh:'成功的喜悦',py:'chénggōng de xǐyuè',vn:'niềm vui thành công'},
     {zh:'分享喜悦',py:'fēnxiǎng xǐyuè',vn:'chia sẻ niềm vui'},
     {zh:'丰收的喜悦',py:'fēngshōu de xǐyuè',vn:'niềm vui được mùa'}
   ],
   patterns:[
     {s:'满怀喜悦地 + V',m:'Lòng đầy vui sướng mà …'},
     {s:'……的喜悦',m:'Niềm vui của …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi muốn chia sẻ niềm vui thành công với gia đình.',answer:'我想和家人分享成功的喜悦。',answerPy:'Wǒ xiǎng hé jiārén fēnxiǎng chénggōng de xǐyuè.',
      note:'和 + người + 分享 + điều gì.',pair:'和……分享……'},
     {promptLang:'vi',prompt:'Vừa nhận được giấy báo trúng tuyển, trên mặt cậu ấy đã rạng rỡ niềm vui.',answer:'一收到录取通知书，他的脸上就流露出了喜悦。',answerPy:'Yì shōudào lùqǔ tōngzhīshū, tā de liǎn shang jiù liúlù chūle xǐyuè.',
      note:'一……就…… = vừa … là ….',pair:'一……就……'}
   ]},

  {n:33,zh:'拨',py:'bō',pos:'Động từ',vn:'gọi (điện thoại)',hv:'bát',em:'📞',lesson:1,
   explain:['Dùng ngón tay bấm/quay số điện thoại: 拨电话, 拨打, 拨号.','Nghĩa gốc: gẩy, đẩy nhẹ bằng ngón tay (拨开, 拨动琴弦).'],
   usage:'拨 + 电话/号码; 拨打 + 电话; 拨通 (gọi được); 拨错 (bấm nhầm).',
   collo:['拨打电话','拨号码','拨通','拨错'],
   ex_zh:'我马上拨打张师傅的电话，却无人接听。',ex_py:'Wǒ mǎshàng bōdǎ Zhāng shīfu de diànhuà, què wú rén jiētīng.',ex_vn:'Tôi lập tức gọi cho bác Trương nhưng không ai nghe máy.',
   exList:[
     {zh:'我马上拨打张师傅的电话，却无人接听。',py:'Wǒ mǎshàng bōdǎ Zhāng shīfu de diànhuà, què wú rén jiētīng.',vn:'Tôi lập tức gọi cho bác Trương nhưng không ai nghe máy.'},
     {zh:'遇到火灾，要立刻拨打119。',py:'Yùdào huǒzāi, yào lìkè bōdǎ yāo-yāo-jiǔ.',vn:'Gặp hoả hoạn phải lập tức gọi 119.'},
     {zh:'我拨了好几次都没拨通，他的手机可能没电了。',py:'Wǒ bōle hǎo jǐ cì dōu méi bōtōng, tā de shǒujī kěnéng méi diàn le.',vn:'Tôi gọi mấy lần đều không được, chắc điện thoại anh ấy hết pin rồi.'}
   ],
   colloFull:[
     {zh:'拨打电话',py:'bōdǎ diànhuà',vn:'gọi điện thoại'},
     {zh:'拨号码',py:'bō hàomǎ',vn:'bấm số'},
     {zh:'拨通',py:'bōtōng',vn:'gọi được, thông máy'},
     {zh:'拨错',py:'bōcuò',vn:'bấm nhầm số'},
     {zh:'拨打119',py:'bōdǎ yāo-yāo-jiǔ',vn:'gọi 119 (cứu hoả)'}
   ],
   patterns:[
     {s:'拨(打) + 电话 / 号码',m:'Gọi điện, bấm số'},
     {s:'拨 + 通 / 错',m:'Gọi được / bấm nhầm (động từ + bổ ngữ kết quả)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Xin lỗi, tôi bấm nhầm số.',answer:'对不起，我拨错号码了。',answerPy:'Duìbuqǐ, wǒ bōcuò hàomǎ le.',
      note:'V + 错 = làm sai, nhầm (bổ ngữ kết quả).',pair:'V + 错'},
     {promptLang:'vi',prompt:'Tôi gọi điện cho anh ấy nhưng không ai nghe, nhắn tin anh ấy cũng không trả lời.',answer:'我拨打他的电话，却无人接听，给他发短信，他也不回。',answerPy:'Wǒ bōdǎ tā de diànhuà, què wú rén jiētīng, gěi tā fā duǎnxìn, tā yě bù huí.',
      note:'却 nêu kết quả trái mong đợi; 也 nối hai việc tương tự (bài tập 4 của sách).',pair:'却 / 也'}
   ]},

  {n:34,zh:'仍旧',py:'réngjiù',pos:'Phó từ',vn:'vẫn',hv:'nhưng cựu',em:'🔄',lesson:1,
   explain:['Vẫn như cũ, vẫn còn (tình trạng không thay đổi) — gần nghĩa 仍然, 依旧; văn viết hơn 还.'],
   usage:'仍旧 + V/A; 直到……，仍旧……; 虽然/尽管……，仍旧…….',
   collo:['仍旧没有音信','仍旧不变','仍旧很忙','仍旧坚持'],
   ex_zh:'我给他发短信，他也不回，直到下班，仍旧没有音信。',ex_py:'Wǒ gěi tā fā duǎnxìn, tā yě bù huí, zhídào xiàbān, réngjiù méiyǒu yīnxìn.',ex_vn:'Tôi nhắn tin, ông cũng không trả lời, mãi đến lúc tan làm vẫn bặt vô âm tín.',
   exList:[
     {zh:'我给他发短信，他也不回，直到下班，仍旧没有音信。',py:'Wǒ gěi tā fā duǎnxìn, tā yě bù huí, zhídào xiàbān, réngjiù méiyǒu yīnxìn.',vn:'Tôi nhắn tin, ông cũng không trả lời, mãi đến lúc tan làm vẫn bặt vô âm tín.'},
     {zh:'十年过去了，这里的一切仍旧是老样子。',py:'Shí nián guòqu le, zhèli de yíqiè réngjiù shì lǎo yàngzi.',vn:'Mười năm trôi qua, mọi thứ ở đây vẫn y như cũ.'},
     {zh:'虽然考试失败了，他仍旧每天坚持早起学习。',py:'Suīrán kǎoshì shībài le, tā réngjiù měi tiān jiānchí zǎo qǐ xuéxí.',vn:'Dù thi trượt, cậu ấy vẫn ngày ngày kiên trì dậy sớm học bài.'}
   ],
   colloFull:[
     {zh:'仍旧没有音信',py:'réngjiù méiyǒu yīnxìn',vn:'vẫn bặt tin'},
     {zh:'仍旧不变',py:'réngjiù bú biàn',vn:'vẫn không đổi'},
     {zh:'仍旧很忙',py:'réngjiù hěn máng',vn:'vẫn rất bận'},
     {zh:'仍旧坚持',py:'réngjiù jiānchí',vn:'vẫn kiên trì'},
     {zh:'仍旧是老样子',py:'réngjiù shì lǎo yàngzi',vn:'vẫn như cũ'}
   ],
   patterns:[
     {s:'直到……，仍旧……',m:'Mãi đến … vẫn …'},
     {s:'虽然……，(chủ ngữ) + 仍旧……',m:'Tuy … nhưng vẫn …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Mãi đến 12 giờ đêm, cậu ấy vẫn chưa về nhà.',answer:'直到夜里十二点，他仍旧没有回家。',answerPy:'Zhídào yèli shí\'èr diǎn, tā réngjiù méiyǒu huí jiā.',
      note:'直到 + thời điểm, (chủ ngữ) + 仍旧 + 没有…….',pair:'直到……'},
     {promptLang:'vi',prompt:'Dù bác sĩ đã khuyên nhiều lần, ông ấy vẫn hút thuốc.',answer:'尽管医生劝了很多次，他仍旧抽烟。',answerPy:'Jǐnguǎn yīshēng quànle hěn duō cì, tā réngjiù chōuyān.',
      note:'尽管……，(chủ ngữ) + 仍旧…… = mặc dù … vẫn ….',pair:'尽管……'}
   ]},

  {n:35,zh:'隐约',py:'yǐnyuē',pos:'Tính từ',vn:'lờ mờ, mang máng, mập mờ',hv:'ẩn ước',em:'🌫️',lesson:1,
   explain:['Không rõ ràng, lờ mờ (nhìn, nghe, cảm thấy chưa rõ).','Hay làm trạng ngữ: 隐约有些不安, 隐约听到, 隐约看见; lặp lại: 隐隐约约.'],
   usage:'隐约 + 感到/听到/看见/记得; 隐约有……; 隐隐约约.',
   collo:['隐约有些不安','隐约听到','隐约看见','隐隐约约'],
   ex_zh:'我心里隐约有些不安，抱着包裹就往工地跑。',ex_py:'Wǒ xīn li yǐnyuē yǒuxiē bù\'ān, bàozhe bāoguǒ jiù wǎng gōngdì pǎo.',ex_vn:'Trong lòng tôi mơ hồ thấy bất an, ôm gói hàng chạy ngay ra công trường.',
   exList:[
     {zh:'我心里隐约有些不安，抱着包裹就往工地跑。',py:'Wǒ xīn li yǐnyuē yǒuxiē bù\'ān, bàozhe bāoguǒ jiù wǎng gōngdì pǎo.',vn:'Trong lòng tôi mơ hồ thấy bất an, ôm gói hàng chạy ngay ra công trường.'},
     {zh:'远处隐约传来一阵歌声。',py:'Yuǎnchù yǐnyuē chuán lái yí zhèn gēshēng.',vn:'Từ xa vọng lại tiếng hát loáng thoáng.'},
     {zh:'雾太大了，只能隐隐约约看见对面的楼。',py:'Wù tài dà le, zhǐ néng yǐnyǐnyuēyuē kànjiàn duìmiàn de lóu.',vn:'Sương mù dày quá, chỉ nhìn thấy lờ mờ toà nhà đối diện.'}
   ],
   colloFull:[
     {zh:'隐约有些不安',py:'yǐnyuē yǒuxiē bù\'ān',vn:'mơ hồ thấy bất an'},
     {zh:'隐约听到',py:'yǐnyuē tīngdào',vn:'nghe loáng thoáng'},
     {zh:'隐约看见',py:'yǐnyuē kànjiàn',vn:'nhìn thấy lờ mờ'},
     {zh:'隐隐约约',py:'yǐnyǐnyuēyuē',vn:'lờ mờ, thấp thoáng'},
     {zh:'隐约记得',py:'yǐnyuē jìde',vn:'nhớ mang máng'}
   ],
   patterns:[
     {s:'隐约 + 感到 / 听到 / 看见 / 记得',m:'Cảm thấy / nghe / thấy / nhớ một cách lờ mờ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi nhớ mang máng hình như đã gặp anh ấy ở đâu rồi.',answer:'我隐约记得好像在哪儿见过他。',answerPy:'Wǒ yǐnyuē jìde hǎoxiàng zài nǎr jiànguo tā.',
      note:'哪儿 dùng phiếm chỉ (ở đâu đó); V + 过 chỉ trải nghiệm.',pair:'V + 过'},
     {promptLang:'vi',prompt:'Nửa đêm, tôi nghe loáng thoáng có người gõ cửa.',answer:'半夜里，我隐约听到有人在敲门。',answerPy:'Bànyè li, wǒ yǐnyuē tīngdào yǒu rén zài qiāo mén.',
      note:'有人 + 在 + V: có ai đó đang ….',pair:'有人……'}
   ]},

  {n:36,zh:'浑身',py:'húnshēn',pos:'Danh từ',vn:'toàn thân, khắp người',hv:'hồn thân',em:'🏃',lesson:1,
   explain:['Toàn thân, khắp người (khẩu ngữ, = 全身). Hay đi với 都: 浑身都是汗, 浑身没劲儿.'],
   usage:'浑身 + (都) + 是 + N; 浑身 + A/V (浑身发抖, 浑身无力); 浑身汗水的 + người.',
   collo:['浑身汗水','浑身是泥','浑身发抖','浑身没劲儿'],
   ex_zh:'一会儿，浑身汗水的张师傅来了。',ex_py:'Yíhuìr, húnshēn hànshuǐ de Zhāng shīfu lái le.',ex_vn:'Một lúc sau, bác Trương mồ hôi nhễ nhại chạy tới.',
   exList:[
     {zh:'一会儿，浑身汗水的张师傅来了。',py:'Yíhuìr, húnshēn hànshuǐ de Zhāng shīfu lái le.',vn:'Một lúc sau, bác Trương mồ hôi nhễ nhại chạy tới.'},
     {zh:'踢完足球回来，弟弟浑身都是泥。',py:'Tī wán zúqiú huílái, dìdi húnshēn dōu shì ní.',vn:'Đá bóng xong về, em trai lấm bùn khắp người.'},
     {zh:'我发烧了，浑身没劲儿，恨不得在床上躺一整天。',py:'Wǒ fāshāo le, húnshēn méi jìnr, hènbude zài chuáng shang tǎng yì zhěng tiān.',vn:'Tôi bị sốt, người rã rời, chỉ muốn nằm trên giường cả ngày.'}
   ],
   colloFull:[
     {zh:'浑身汗水',py:'húnshēn hànshuǐ',vn:'mồ hôi đầm đìa'},
     {zh:'浑身是泥',py:'húnshēn shì ní',vn:'lấm bùn khắp người'},
     {zh:'浑身发抖',py:'húnshēn fādǒu',vn:'run khắp người'},
     {zh:'浑身没劲儿',py:'húnshēn méi jìnr',vn:'người rã rời'},
     {zh:'浑身湿透',py:'húnshēn shītòu',vn:'ướt sũng cả người'}
   ],
   patterns:[
     {s:'浑身 + 都是 + N',m:'Khắp người toàn là …'},
     {s:'浑身 + A / V',m:'Cả người … (发抖, 没劲儿)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Mưa to quá, lúc về đến nhà tôi ướt sũng cả người.',answer:'雨下得太大了，我回到家的时候浑身都湿透了。',answerPy:'Yǔ xià de tài dà le, wǒ huídào jiā de shíhou húnshēn dōu shītòu le.',
      note:'V + 得 + 太 + A + 了; ……的时候 làm trạng ngữ thời gian.',pair:'V + 得 + bổ ngữ trạng thái'},
     {promptLang:'vi',prompt:'Vừa nghe tin đó, cả người cô ấy run lên.',answer:'一听到那个消息，她就浑身发抖。',answerPy:'Yì tīngdào nàge xiāoxi, tā jiù húnshēn fādǒu.',
      note:'一……就…… = vừa … là ….',pair:'一……就……'}
   ]},

  {n:37,zh:'馅儿',py:'xiànr',pos:'Danh từ',vn:'nhân (bánh)',hv:'hãm',em:'🥟',lesson:1,
   explain:['Phần nhân bên trong bánh bao, sủi cảo, bánh Trung thu…: 肉馅儿, 豆沙馅儿; hỏi: 什么馅儿的?'],
   usage:'什么馅儿的 + 月饼/饺子; 肉馅儿; 豆沙馅儿; 馅儿多皮薄.',
   collo:['什么馅儿','肉馅儿','豆沙馅儿','五仁馅儿'],
   ex_zh:'我说家里什么馅儿的月饼都有，还是赶快给女儿打电话吧。',ex_py:'Wǒ shuō jiā li shénme xiànr de yuèbing dōu yǒu, háishi gǎnkuài gěi nǚ\'ér dǎ diànhuà ba.',ex_vn:'Tôi nói ở nhà bánh Trung thu nhân gì cũng có, bác mau gọi điện cho con gái đi.',
   exList:[
     {zh:'我说家里什么馅儿的月饼都有，还是赶快给女儿打电话吧。',py:'Wǒ shuō jiā li shénme xiànr de yuèbing dōu yǒu, háishi gǎnkuài gěi nǚ\'ér dǎ diànhuà ba.',vn:'Tôi nói ở nhà bánh Trung thu nhân gì cũng có, bác mau gọi điện cho con gái đi.'},
     {zh:'你喜欢吃什么馅儿的饺子？猪肉白菜的还是韭菜鸡蛋的？',py:'Nǐ xǐhuan chī shénme xiànr de jiǎozi? Zhūròu báicài de háishi jiǔcài jīdàn de?',vn:'Bạn thích ăn sủi cảo nhân gì? Thịt heo cải thảo hay hẹ trứng?'},
     {zh:'奶奶包的包子馅儿多皮薄，是她的拿手绝活。',py:'Nǎinai bāo de bāozi xiànr duō pí báo, shì tā de náshǒu juéhuó.',vn:'Bánh bao bà gói nhân nhiều vỏ mỏng, là tuyệt chiêu của bà.'}
   ],
   colloFull:[
     {zh:'什么馅儿',py:'shénme xiànr',vn:'nhân gì'},
     {zh:'肉馅儿',py:'ròuxiànr',vn:'nhân thịt'},
     {zh:'豆沙馅儿',py:'dòushā xiànr',vn:'nhân đậu đỏ'},
     {zh:'五仁馅儿',py:'wǔrén xiànr',vn:'nhân thập cẩm'},
     {zh:'馅儿多皮薄',py:'xiànr duō pí báo',vn:'nhân nhiều vỏ mỏng'}
   ],
   patterns:[
     {s:'什么馅儿的 + N',m:'N nhân gì'},
     {s:'……馅儿的 + N',m:'N nhân …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bánh Trung thu nhân gì tôi cũng thích, chỉ có điều không thích nhân thập cẩm.',answer:'什么馅儿的月饼我都喜欢，只是不喜欢五仁的。',answerPy:'Shénme xiànr de yuèbing wǒ dōu xǐhuan, zhǐshì bù xǐhuan wǔrén de.',
      note:'什么……都…… = … gì cũng …; 只是 = chỉ có điều.',pair:'什么……都……'},
     {promptLang:'vi',prompt:'Sủi cảo nhân thịt mẹ gói ngon hơn ngoài hàng nhiều.',answer:'妈妈包的肉馅儿饺子比饭馆的好吃多了。',answerPy:'Māma bāo de ròuxiànr jiǎozi bǐ fànguǎn de hǎochī duō le.',
      note:'A 比 B + tính từ + 多了.',pair:'比……多了'}
   ]},

  {n:38,zh:'灿烂',py:'cànlàn',pos:'Tính từ',vn:'rực rỡ, rạng rỡ',hv:'xán lạn',em:'🌞',lesson:1,
   explain:['Sáng rực, chói lọi (ánh nắng, hoa, nụ cười…); nghĩa bóng: tươi sáng (前途灿烂) — tiếng Việt có "xán lạn".'],
   usage:'阳光灿烂; 笑得(很)灿烂; 灿烂的笑容; 灿烂的文化.',
   collo:['阳光灿烂','笑得灿烂','灿烂的笑容','灿烂的文化'],
   ex_zh:'电话通了，张师傅满脸慈爱，笑得别提多灿烂了。',ex_py:'Diànhuà tōng le, Zhāng shīfu mǎn liǎn cí\'ài, xiào de biétí duō cànlàn le.',ex_vn:'Điện thoại thông, bác Trương mặt đầy trìu mến, cười rạng rỡ không sao tả xiết.',
   exList:[
     {zh:'电话通了，张师傅满脸慈爱，笑得别提多灿烂了。',py:'Diànhuà tōng le, Zhāng shīfu mǎn liǎn cí\'ài, xiào de biétí duō cànlàn le.',vn:'Điện thoại thông, bác Trương mặt đầy trìu mến, cười rạng rỡ không sao tả xiết.'},
     {zh:'今天阳光灿烂，我们去公园野餐吧。',py:'Jīntiān yángguāng cànlàn, wǒmen qù gōngyuán yěcān ba.',vn:'Hôm nay nắng đẹp rực rỡ, chúng mình đi công viên picnic đi.'},
     {zh:'中国有五千年灿烂的文化。',py:'Zhōngguó yǒu wǔqiān nián cànlàn de wénhuà.',vn:'Trung Quốc có nền văn hoá rực rỡ năm nghìn năm.'}
   ],
   colloFull:[
     {zh:'阳光灿烂',py:'yángguāng cànlàn',vn:'nắng rực rỡ'},
     {zh:'笑得灿烂',py:'xiào de cànlàn',vn:'cười rạng rỡ'},
     {zh:'灿烂的笑容',py:'cànlàn de xiàoróng',vn:'nụ cười rạng rỡ'},
     {zh:'灿烂的文化',py:'cànlàn de wénhuà',vn:'nền văn hoá rực rỡ'},
     {zh:'前途灿烂',py:'qiántú cànlàn',vn:'tương lai xán lạn'}
   ],
   patterns:[
     {s:'笑得 + 别提多灿烂了',m:'Cười rạng rỡ không tả xiết (ôn 别提多……了 bài 1)'},
     {s:'灿烂的 + 笑容 / 阳光 / 文化',m:'… rực rỡ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nghe nói sắp được đi du lịch, em gái cười rạng rỡ không tả xiết.',answer:'听说要去旅游，妹妹笑得别提多灿烂了。',answerPy:'Tīngshuō yào qù lǚyóu, mèimei xiào de biétí duō cànlàn le.',
      note:'别提多 + A + 了 = … không tả xiết (ngữ pháp bài 1).',pair:'别提多……了'},
     {promptLang:'vi',prompt:'Chúc các bạn tương lai xán lạn!',answer:'祝你们前途灿烂！',answerPy:'Zhù nǐmen qiántú cànlàn!',
      note:'祝 + người + lời chúc.',pair:'祝……'}
   ]},

  {n:39,zh:'惦记',py:'diànjì',pos:'Động từ',vn:'nhớ đến, lo lắng',hv:'điếm ký',em:'💭',lesson:1,
   explain:['Luôn nghĩ tới, nhớ nhung, lo lắng cho người/việc gì (thường là người thân) — khẩu ngữ.'],
   usage:'惦记 + người/việc; 别惦记; 一直惦记着; 心里惦记着…….',
   collo:['惦记家人','别惦记','一直惦记着','惦记着孩子'],
   ex_zh:'我身体好着呢，别惦记，好好工作。',ex_py:'Wǒ shēntǐ hǎozhe ne, bié diànjì, hǎohǎo gōngzuò.',ex_vn:'Bố khoẻ lắm, đừng lo, con cứ làm việc cho tốt.',
   exList:[
     {zh:'我身体好着呢，别惦记，好好工作。',py:'Wǒ shēntǐ hǎozhe ne, bié diànjì, hǎohǎo gōngzuò.',vn:'Bố khoẻ lắm, đừng lo, con cứ làm việc cho tốt.'},
     {zh:'出国留学以后，妈妈天天惦记着我吃得好不好。',py:'Chūguó liúxué yǐhòu, māma tiāntiān diànjìzhe wǒ chī de hǎo bu hǎo.',vn:'Từ khi tôi đi du học, ngày nào mẹ cũng lo con ăn uống có tốt không.'},
     {zh:'他虽然人在外地，心里却一直惦记着家乡的父母。',py:'Tā suīrán rén zài wàidì, xīn li què yìzhí diànjìzhe jiāxiāng de fùmǔ.',vn:'Anh tuy ở xa nhưng trong lòng luôn nhớ thương bố mẹ ở quê.'}
   ],
   colloFull:[
     {zh:'惦记家人',py:'diànjì jiārén',vn:'nhớ thương gia đình'},
     {zh:'别惦记',py:'bié diànjì',vn:'đừng lo lắng'},
     {zh:'一直惦记着',py:'yìzhí diànjìzhe',vn:'luôn nhớ đến'},
     {zh:'惦记着孩子',py:'diànjìzhe háizi',vn:'lo cho con'},
     {zh:'让人惦记',py:'ràng rén diànjì',vn:'khiến người ta lo'}
   ],
   patterns:[
     {s:'惦记着 + người / việc',m:'Luôn nhớ, lo cho …'},
     {s:'别惦记(我)',m:'Đừng lo cho (tôi)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Con ở trường mọi thứ đều ổn, bố mẹ đừng lo.',answer:'我在学校一切都好，爸爸妈妈别惦记。',answerPy:'Wǒ zài xuéxiào yíqiè dōu hǎo, bàba māma bié diànjì.',
      note:'一切都 + A = mọi thứ đều …; 别 + V khuyên nhủ.',pair:'别……'},
     {promptLang:'vi',prompt:'Ông tuy đã nghỉ hưu nhưng vẫn luôn nhớ đến học trò cũ.',answer:'爷爷虽然退休了，可是仍旧惦记着以前的学生。',answerPy:'Yéye suīrán tuìxiū le, kěshì réngjiù diànjìzhe yǐqián de xuésheng.',
      note:'虽然……可是…… + 仍旧: tuy … nhưng vẫn ….',pair:'虽然……可是……'}
   ]},

  {n:40,zh:'丢人',py:'diū rén',pos:'Động từ',vn:'mất mặt, mất thể diện',hv:'đâu nhân',em:'😳',lesson:1,
   explain:['Làm xấu mặt, mất thể diện (= 丢脸). Là động từ li hợp: không mang tân ngữ trực tiếp, nói 给 + ai + 丢人.'],
   usage:'给 + ai + 丢人; 真丢人; 怕丢人; 有什么丢人的?',
   collo:['给爸爸丢人','真丢人','怕丢人','丢人现眼'],
   ex_zh:'好好工作，别给爸爸丢人啊……',ex_py:'Hǎohǎo gōngzuò, bié gěi bàba diū rén a……',ex_vn:'Con làm việc cho tốt, đừng làm bố mất mặt nhé…',
   exList:[
     {zh:'好好工作，别给爸爸丢人啊……',py:'Hǎohǎo gōngzuò, bié gěi bàba diū rén a……',vn:'Con làm việc cho tốt, đừng làm bố mất mặt nhé…'},
     {zh:'我在台上把台词忘了，真丢人！',py:'Wǒ zài tái shang bǎ táicí wàng le, zhēn diū rén!',vn:'Tôi quên lời thoại ngay trên sân khấu, xấu hổ thật!'},
     {zh:'不会就问，这有什么丢人的？',py:'Bú huì jiù wèn, zhè yǒu shénme diū rén de?',vn:'Không biết thì hỏi, cái đó có gì mà mất mặt?'}
   ],
   colloFull:[
     {zh:'给爸爸丢人',py:'gěi bàba diū rén',vn:'làm bố mất mặt'},
     {zh:'真丢人',py:'zhēn diū rén',vn:'thật mất mặt'},
     {zh:'怕丢人',py:'pà diū rén',vn:'sợ mất mặt'},
     {zh:'丢人现眼',py:'diū rén xiàn yǎn',vn:'bêu xấu, làm trò cười'}
   ],
   patterns:[
     {s:'别给 + ai + 丢人',m:'Đừng làm ai mất mặt'},
     {s:'这有什么丢人的？',m:'Có gì mà mất mặt? (câu hỏi tu từ)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Thi hỏng một lần có gì mà mất mặt, lần sau cố gắng là được.',answer:'考砸一次有什么丢人的，下次努力就行了。',answerPy:'Kǎozá yí cì yǒu shénme diū rén de, xià cì nǔlì jiù xíng le.',
      note:'有什么……的 là câu hỏi tu từ = chẳng có gì ….',pair:'有什么……的'},
     {promptLang:'vi',prompt:'Ra ngoài nhớ giữ lịch sự, đừng làm trường mình mất mặt.',answer:'出去要注意礼貌，别给学校丢人。',answerPy:'Chūqu yào zhùyì lǐmào, bié gěi xuéxiào diū rén.',
      note:'给 + đối tượng + 丢人 (động từ li hợp, không nói 丢人学校).',pair:'Động từ li hợp'}
   ]},

  {n:41,zh:'炫耀',py:'xuànyào',pos:'Động từ',vn:'khoe khoang',hv:'huyễn diệu',em:'🦚',lesson:1,
   explain:['Cố ý phô ra cho người khác thấy cái hay của mình (thường hàm ý chê); cũng dùng khi người già khoe con cháu với niềm tự hào.'],
   usage:'向 + ai + 炫耀 + điều gì; 炫耀自己; 爱炫耀; 到处炫耀.',
   collo:['向我炫耀','炫耀自己','爱炫耀','炫耀成绩'],
   ex_zh:'讲完电话，张师傅还没忘了向我炫耀他的女儿。',ex_py:'Jiǎng wán diànhuà, Zhāng shīfu hái méi wàngle xiàng wǒ xuànyào tā de nǚ\'ér.',ex_vn:'Nói chuyện điện thoại xong, bác Trương vẫn không quên khoe con gái với tôi.',
   exList:[
     {zh:'讲完电话，张师傅还没忘了向我炫耀他的女儿。',py:'Jiǎng wán diànhuà, Zhāng shīfu hái méi wàngle xiàng wǒ xuànyào tā de nǚ\'ér.',vn:'Nói chuyện điện thoại xong, bác Trương vẫn không quên khoe con gái với tôi.'},
     {zh:'他一买了新手机就到处炫耀，大家都有点儿烦了。',py:'Tā yì mǎile xīn shǒujī jiù dàochù xuànyào, dàjiā dōu yǒudiǎnr fán le.',vn:'Cậu ta vừa mua điện thoại mới là đi khoe khắp nơi, mọi người hơi phát ngán.'},
     {zh:'真正有本事的人往往不爱炫耀自己。',py:'Zhēnzhèng yǒu běnshi de rén wǎngwǎng bú ài xuànyào zìjǐ.',vn:'Người thực sự có bản lĩnh thường không thích khoe khoang bản thân.'}
   ],
   colloFull:[
     {zh:'向我炫耀',py:'xiàng wǒ xuànyào',vn:'khoe với tôi'},
     {zh:'炫耀自己',py:'xuànyào zìjǐ',vn:'khoe bản thân'},
     {zh:'爱炫耀',py:'ài xuànyào',vn:'thích khoe khoang'},
     {zh:'炫耀成绩',py:'xuànyào chéngjì',vn:'khoe thành tích'},
     {zh:'到处炫耀',py:'dàochù xuànyào',vn:'khoe khắp nơi'}
   ],
   patterns:[
     {s:'向 + ai + 炫耀 + điều gì',m:'Khoe cái gì với ai'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cậu ấy thích khoe điểm với các bạn, nên mọi người không ưa cậu ấy lắm.',answer:'他喜欢向同学们炫耀自己的成绩，所以大家都不太喜欢他。',answerPy:'Tā xǐhuan xiàng tóngxuémen xuànyào zìjǐ de chéngjì, suǒyǐ dàjiā dōu bú tài xǐhuan tā.',
      note:'向 + đối tượng đứng trước động từ 炫耀.',pair:'向……'},
     {promptLang:'vi',prompt:'Bà không bao giờ khoe khoang, dù con cháu đều rất giỏi.',answer:'奶奶从来不炫耀，即使孩子们都很优秀。',answerPy:'Nǎinai cónglái bú xuànyào, jíshǐ háizimen dōu hěn yōuxiù.',
      note:'即使…… nêu giả thiết/nhượng bộ, có thể đặt ở vế sau để bổ sung.',pair:'即使……'}
   ]},

  {n:42,zh:'面子',py:'miànzi',pos:'Danh từ',vn:'thể diện, sĩ diện',hv:'diện tử',em:'😌',lesson:1,
   explain:['Thể diện, danh dự trước người khác: 要面子 (giữ thể diện), 给面子 (nể mặt), 丢面子 (mất mặt).','Trong bài, (女儿)要面子着呢 = con gái rất có chí, rất biết giữ thể diện (lời khen).'],
   usage:'要面子; 给 + ai + 面子; 丢面子; 爱面子; 看在……的面子上.',
   collo:['要面子','给面子','丢面子','爱面子'],
   ex_zh:'“要面子着呢，从来没有辜负过我的期望。”',ex_py:'"Yào miànzi zhe ne, cónglái méiyǒu gūfùguo wǒ de qīwàng."',ex_vn:'"Nó biết giữ thể diện lắm, chưa bao giờ phụ lòng kỳ vọng của tôi."',
   exList:[
     {zh:'“要面子着呢，从来没有辜负过我的期望。”',py:'"Yào miànzi zhe ne, cónglái méiyǒu gūfùguo wǒ de qīwàng."',vn:'"Nó biết giữ thể diện lắm, chưa bao giờ phụ lòng kỳ vọng của tôi."'},
     {zh:'他太爱面子了，明明不懂也不肯问别人。',py:'Tā tài ài miànzi le, míngmíng bù dǒng yě bù kěn wèn biérén.',vn:'Anh ta sĩ diện quá, rõ ràng không hiểu cũng không chịu hỏi người khác.'},
     {zh:'大家都来了，你不来就是不给我面子。',py:'Dàjiā dōu lái le, nǐ bù lái jiù shì bù gěi wǒ miànzi.',vn:'Mọi người đều đến cả rồi, cậu không đến là không nể mặt tớ.'}
   ],
   colloFull:[
     {zh:'要面子',py:'yào miànzi',vn:'giữ thể diện, sĩ diện'},
     {zh:'给面子',py:'gěi miànzi',vn:'nể mặt'},
     {zh:'丢面子',py:'diū miànzi',vn:'mất mặt'},
     {zh:'爱面子',py:'ài miànzi',vn:'sĩ diện'},
     {zh:'看在老师的面子上',py:'kàn zài lǎoshī de miànzi shang',vn:'nể mặt thầy giáo'}
   ],
   patterns:[
     {s:'给 + ai + 面子',m:'Nể mặt ai'},
     {s:'看在……的面子上',m:'Nể mặt …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nể mặt thầy giáo, lần này tôi bỏ qua cho cậu.',answer:'看在老师的面子上，这次我原谅你。',answerPy:'Kàn zài lǎoshī de miànzi shang, zhè cì wǒ yuánliàng nǐ.',
      note:'看在……的面子上 = nể mặt ….',pair:'看在……的面子上'},
     {promptLang:'vi',prompt:'Vì sĩ diện, cậu ấy không dám thừa nhận mình sai.',answer:'因为爱面子，他不敢承认自己错了。',answerPy:'Yīnwèi ài miànzi, tā bù gǎn chéngrèn zìjǐ cuò le.',
      note:'不敢 + V = không dám ….',pair:'不敢……'}
   ]},

  {n:43,zh:'辜负',py:'gūfù',pos:'Động từ',vn:'phụ lòng',hv:'cô phụ',em:'💔',lesson:1,
   explain:['Làm trái với lòng tốt, sự kỳ vọng, tin tưởng của người khác: 辜负期望, 辜负好意. Hay dùng ở dạng phủ định: 不辜负, 没有辜负过.'],
   usage:'辜负 + 期望/好意/信任/一番心意; 不能辜负; 从来没有辜负过.',
   collo:['辜负期望','辜负好意','辜负信任','不辜负'],
   ex_zh:'我努力工作就是为了不辜负父母对我的期望。',ex_py:'Wǒ nǔlì gōngzuò jiù shì wèile bù gūfù fùmǔ duì wǒ de qīwàng.',ex_vn:'Tôi chăm chỉ làm việc chính là để không phụ kỳ vọng của bố mẹ.',
   exList:[
     {zh:'我努力工作就是为了不辜负父母对我的期望。',py:'Wǒ nǔlì gōngzuò jiù shì wèile bù gūfù fùmǔ duì wǒ de qīwàng.',vn:'Tôi chăm chỉ làm việc chính là để không phụ kỳ vọng của bố mẹ.'},
     {zh:'要面子着呢，从来没有辜负过我的期望。',py:'Yào miànzi zhe ne, cónglái méiyǒu gūfùguo wǒ de qīwàng.',vn:'Nó biết giữ thể diện lắm, chưa bao giờ phụ lòng kỳ vọng của tôi.'},
     {zh:'老师这么信任你，你可别辜负了她的一番好意。',py:'Lǎoshī zhème xìnrèn nǐ, nǐ kě bié gūfùle tā de yì fān hǎoyì.',vn:'Cô tin cậu như vậy, cậu đừng phụ tấm lòng tốt của cô nhé.'}
   ],
   colloFull:[
     {zh:'辜负期望',py:'gūfù qīwàng',vn:'phụ kỳ vọng'},
     {zh:'辜负好意',py:'gūfù hǎoyì',vn:'phụ lòng tốt'},
     {zh:'辜负信任',py:'gūfù xìnrèn',vn:'phụ lòng tin'},
     {zh:'不辜负',py:'bù gūfù',vn:'không phụ lòng'},
     {zh:'辜负了一番心意',py:'gūfùle yì fān xīnyì',vn:'phụ một tấm lòng'}
   ],
   patterns:[
     {s:'(不)辜负 + ai + 的 + 期望 / 好意',m:'(Không) phụ kỳ vọng / lòng tốt của ai'},
     {s:'为了不辜负……',m:'Để không phụ …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Để không phụ kỳ vọng của thầy cô, ngày nào em cũng ôn bài đến khuya.',answer:'为了不辜负老师的期望，我每天都复习到很晚。',answerPy:'Wèile bù gūfù lǎoshī de qīwàng, wǒ měi tiān dōu fùxí dào hěn wǎn.',
      note:'为了 + mục đích đặt đầu câu; V + 到 + thời điểm.',pair:'为了……'},
     {promptLang:'vi',prompt:'Cậu ấy chưa bao giờ phụ lòng tin của mọi người.',answer:'他从来没有辜负过大家的信任。',answerPy:'Tā cónglái méiyǒu gūfùguo dàjiā de xìnrèn.',
      note:'从来没有 + V + 过 = chưa bao giờ ….',pair:'从来没……过'}
   ]},

  {n:44,zh:'期望',py:'qīwàng',pos:'Động từ',vn:'kỳ vọng, mong đợi',hv:'kỳ vọng',em:'🌟',lesson:1,
   explain:['Mong đợi, đặt hy vọng vào tương lai của ai/điều gì (thường người trên với người dưới). Hay dùng như danh từ: 父母的期望, 对……的期望.','Trang trọng hơn 希望 (xem phần Phân biệt từ).'],
   usage:'对 + ai + 的期望; 期望很高; 辜负/达到 + 期望; 期望 + ai + (能) + V.',
   collo:['父母的期望','期望很高','辜负期望','达到期望'],
   ex_zh:'父母对孩子的期望太高，有时会给孩子带来很大压力。',ex_py:'Fùmǔ duì háizi de qīwàng tài gāo, yǒushí huì gěi háizi dài lái hěn dà yālì.',ex_vn:'Bố mẹ kỳ vọng vào con quá cao, đôi khi sẽ tạo áp lực lớn cho con.',
   exList:[
     {zh:'父母对孩子的期望太高，有时会给孩子带来很大压力。',py:'Fùmǔ duì háizi de qīwàng tài gāo, yǒushí huì gěi háizi dài lái hěn dà yālì.',vn:'Bố mẹ kỳ vọng vào con quá cao, đôi khi sẽ tạo áp lực lớn cho con.'},
     {zh:'讲完电话，张师傅说女儿从来没有辜负过他的期望。',py:'Jiǎng wán diànhuà, Zhāng shīfu shuō nǚ\'ér cónglái méiyǒu gūfùguo tā de qīwàng.',vn:'Nói chuyện điện thoại xong, bác Trương bảo con gái chưa bao giờ phụ kỳ vọng của bác.'},
     {zh:'老师期望我们都能考上理想的大学。',py:'Lǎoshī qīwàng wǒmen dōu néng kǎoshang lǐxiǎng de dàxué.',vn:'Thầy cô mong tất cả chúng tôi đều thi đỗ trường đại học mơ ước.'}
   ],
   colloFull:[
     {zh:'父母的期望',py:'fùmǔ de qīwàng',vn:'kỳ vọng của bố mẹ'},
     {zh:'期望很高',py:'qīwàng hěn gāo',vn:'kỳ vọng rất cao'},
     {zh:'辜负期望',py:'gūfù qīwàng',vn:'phụ kỳ vọng'},
     {zh:'达到期望',py:'dádào qīwàng',vn:'đạt được kỳ vọng'},
     {zh:'对孩子的期望',py:'duì háizi de qīwàng',vn:'kỳ vọng vào con cái'}
   ],
   patterns:[
     {s:'对 + ai + 的期望',m:'Kỳ vọng vào ai'},
     {s:'期望 + ai + (能) + V',m:'Mong ai (có thể) làm gì'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bố mẹ kỳ vọng ở tôi không cao, chỉ mong tôi khoẻ mạnh vui vẻ.',answer:'父母对我的期望并不高，只希望我健康快乐。',answerPy:'Fùmǔ duì wǒ de qīwàng bìng bù gāo, zhǐ xīwàng wǒ jiànkāng kuàilè.',
      note:'并不 + A: nhấn mạnh phủ định (trái với điều người ta nghĩ).',pair:'并不……'},
     {promptLang:'vi',prompt:'Kết quả lần này còn tốt hơn chúng tôi mong đợi.',answer:'这次的结果比我们期望的还要好。',answerPy:'Zhè cì de jiéguǒ bǐ wǒmen qīwàng de hái yào hǎo.',
      note:'A 比 B 还要 + tính từ = còn … hơn.',pair:'比……还要……'}
   ]}
];

// ══════════════════════════════════════════
// BÀI KHOÁ — chép nguyên văn sách (tr. 34–35), mỗi đoạn một dòng
// (Đoạn 4: sách in thừa một dấu ” sau 骨干。 — đã bỏ dấu thừa này)
// ══════════════════════════════════════════
var dialogData = [
  {scene:'课文 · 一盒月饼',
   preQuiz:[
     {q:'“我”在哪儿遇到那个男人？',opts:['公司楼下','港口','工地'],ans:0},
     {q:'那个男人刚见到“我”时怎么样？',opts:['马上说出了自己的要求','打量了“我”一番，话到嘴边又没说','生气地走了'],ans:1},
     {q:'那个男人原先是做什么的？',opts:['主管','裁缝','助手'],ans:1},
     {q:'他现在在哪儿干活？',opts:['上海的一家公司','“我们”旁边的港口','南方的乡镇'],ans:1},
     {q:'他为什么请“我”帮忙代收月饼？',opts:['他不喜欢吃月饼','他白天在工地，地址没法写','他女儿不知道他的电话'],ans:1},
     {q:'他为什么相信“我”？',opts:['因为“我”是他的老乡','因为“我”斯斯文文的，心眼儿好，守信誉','因为“我”是他女儿的同事'],ans:1},
     {q:'他的女儿工作怎么样？',opts:['在一流的公司当主管，是公司的骨干','在港口当工人','在乡镇当老师'],ans:0},
     {q:'“我”收到包裹后给张师傅打电话，结果怎么样？',opts:['他马上就接了','无人接听，发短信他也不回','他让“我”自己把月饼吃了'],ans:1},
     {q:'张师傅为什么一直没有音信？',opts:['他不想要月饼了','他今天特别忙，手机没电了都不知道','他回老家了'],ans:1},
     {q:'张师傅见了“我”以后做了什么？',opts:['又是道歉又是感谢，非要请“我”吃月饼不可','马上把月饼送给了工人','跟“我”吵了起来'],ans:0},
     {q:'给女儿打电话时，张师傅的表情怎么样？',opts:['很着急','满脸慈爱，笑得别提多灿烂了','有点儿生气'],ans:1},
     {q:'这篇课文主要想告诉我们什么？',opts:['月饼的馅儿有很多种','女儿是张师傅的幸福和骄傲','在港口工作很辛苦'],ans:1}
   ],
   lines:[
    {sp:0,zh:'清晨上班，走到公司楼下，迎面站着一位农民工模样的男人，他打量了我一番，到嘴边的话又不说了。我停住脚步，疑惑地问：“您有事吗？”他搓着手，迟疑地说：“有件事想拜托你。”',
     py:'Qīngchén shàngbān, zǒu dào gōngsī lóu xià, yíngmiàn zhànzhe yí wèi nóngmíngōng múyàng de nánrén, tā dǎliangle wǒ yì fān, dào zuǐ biān de huà yòu bù shuō le. Wǒ tíngzhù jiǎobù, yíhuò de wèn: "Nín yǒu shì ma?" Tā cuōzhe shǒu, chíyí de shuō: "Yǒu jiàn shì xiǎng bàituō nǐ."',
     vn:'Sáng sớm đi làm, vừa tới dưới toà nhà công ty, tôi thấy ngay trước mặt một người đàn ông trông như công nhân từ quê lên. Ông nhìn tôi một lượt, lời đã ra tới miệng lại thôi không nói. Tôi dừng bước, ngạc nhiên hỏi: "Bác có việc gì ạ?" Ông xoa xoa tay, ngập ngừng nói: "Có việc này muốn nhờ cô."'},
    {sp:0,zh:'“您说吧，只要能帮的，我一定帮。”这回轮到我打量他了：饱经沧桑的脸上流露出朴实；一双过于操劳的大手；胡须起码一个星期没刮了；南方口音。',
     py:'"Nín shuō ba, zhǐyào néng bāng de, wǒ yídìng bāng." Zhè huí lún dào wǒ dǎliang tā le: bǎojīng-cāngsāng de liǎn shang liúlù chū pǔshí; yì shuāng guòyú cāoláo de dà shǒu; húxū qǐmǎ yí ge xīngqī méi guā le; nánfāng kǒuyīn.',
     vn:'"Bác cứ nói đi, chỉ cần giúp được là cháu nhất định giúp." Lần này đến lượt tôi quan sát ông: gương mặt dãi dầu sương gió toát lên vẻ chất phác; đôi bàn tay to thô vì lao lực quá nhiều; râu ít nhất một tuần chưa cạo; giọng miền Nam.'},
    {sp:0,zh:'果然，他来自南方的一个乡镇，原先是裁缝，现在在我们旁边的港口干活。他女儿在上海，中秋节快到了，要给他寄盒月饼，可他白天在工地，地址没法写，想请我帮他代收一下。',
     py:'Guǒrán, tā láizì nánfāng de yí ge xiāngzhèn, yuánxiān shì cáifeng, xiànzài zài wǒmen pángbiān de gǎngkǒu gàn huó. Tā nǚ\'ér zài Shànghǎi, Zhōngqiū Jié kuài dào le, yào gěi tā jì hé yuèbing, kě tā báitiān zài gōngdì, dìzhǐ méi fǎ xiě, xiǎng qǐng wǒ bāng tā dàishōu yíxià.',
     vn:'Quả nhiên, ông đến từ một thị trấn nhỏ ở miền Nam, trước kia làm thợ may, giờ làm việc ở bến cảng gần chỗ chúng tôi. Con gái ông ở Thượng Hải, Tết Trung thu sắp đến, cô muốn gửi cho bố một hộp bánh Trung thu, nhưng ban ngày ông ở công trường, không biết ghi địa chỉ nào, nên muốn nhờ tôi nhận hộ.'},
    {sp:0,zh:'“这个忙好帮，您不怕我把收到的月饼给吃了？”我半开玩笑地说。他笑着说：“不会，你和我女儿一样，斯斯文文的，一看就读过书，心眼儿好，守信誉，怎么会欺骗我呢？”他说女儿念了硕士，有学位，在一家一流的公司上班，是个主管，还有助手，怎么也算得上是公司的骨干。说起女儿，他满脸的骄傲。',
     py:'"Zhège máng hǎo bāng, nín bú pà wǒ bǎ shōudào de yuèbing gěi chī le?" Wǒ bàn kāi wánxiào de shuō. Tā xiàozhe shuō: "Bú huì, nǐ hé wǒ nǚ\'ér yíyàng, sīsīwénwén de, yí kàn jiù dúguo shū, xīnyǎnr hǎo, shǒu xìnyù, zěnme huì qīpiàn wǒ ne?" Tā shuō nǚ\'ér niànle shuòshì, yǒu xuéwèi, zài yì jiā yīliú de gōngsī shàngbān, shì ge zhǔguǎn, hái yǒu zhùshǒu, zěnme yě suàndeshàng shì gōngsī de gǔgàn. Shuōqǐ nǚ\'ér, tā mǎn liǎn de jiāo\'ào.',
     vn:'"Việc này dễ thôi, bác không sợ cháu ăn mất hộp bánh nhận được à?" Tôi nửa đùa nửa thật. Ông cười bảo: "Không đâu, cô cũng giống con gái tôi, nho nhã lịch sự, nhìn là biết người có học, tốt bụng, giữ chữ tín, sao lại lừa tôi được?" Ông kể con gái học thạc sĩ, có học vị, làm ở một công ty hàng đầu, là quản lý, còn có cả trợ lý, dù sao cũng được coi là trụ cột của công ty. Nhắc đến con gái, mặt ông rạng rỡ niềm tự hào.'},
    {sp:0,zh:'我记下了他的电话，给了他一张我的名片。他小心翼翼地收起来，满怀喜悦地走了。',
     py:'Wǒ jìxiàle tā de diànhuà, gěile tā yì zhāng wǒ de míngpiàn. Tā xiǎoxīn-yìyì de shōu qǐlái, mǎnhuái xǐyuè de zǒu le.',
     vn:'Tôi ghi lại số điện thoại của ông, đưa ông một tấm danh thiếp của mình. Ông cẩn thận cất đi, rồi lòng đầy vui sướng ra về.'},
    {sp:0,zh:'第三天中午，我收到了一个重重的包裹，发件人叫“张心悦”。我马上拨打张师傅的电话，却无人接听，给他发短信，他也不回，直到下班，仍旧没有音信。',
     py:'Dì-sān tiān zhōngwǔ, wǒ shōudàole yí ge zhòngzhòng de bāoguǒ, fājiànrén jiào "Zhāng Xīnyuè". Wǒ mǎshàng bōdǎ Zhāng shīfu de diànhuà, què wú rén jiētīng, gěi tā fā duǎnxìn, tā yě bù huí, zhídào xiàbān, réngjiù méiyǒu yīnxìn.',
     vn:'Trưa ngày thứ ba, tôi nhận được một gói hàng nặng trịch, người gửi tên là "Trương Tâm Duyệt". Tôi lập tức gọi cho bác Trương nhưng không ai nghe máy, nhắn tin bác cũng không trả lời, mãi đến lúc tan làm vẫn bặt vô âm tín.'},
    {sp:0,zh:'我心里隐约有些不安，抱着包裹就往工地跑，找了一位工人，请他帮忙找张师傅。一会儿，浑身汗水的张师傅来了。他见了我又是道歉又是感谢，说今天特别忙，手机没电了都不知道。说着就要拆包裹，非要请我吃月饼不可。我说家里什么馅儿的月饼都有，还是赶快给女儿打电话吧。',
     py:'Wǒ xīn li yǐnyuē yǒuxiē bù\'ān, bàozhe bāoguǒ jiù wǎng gōngdì pǎo, zhǎole yí wèi gōngrén, qǐng tā bāngmáng zhǎo Zhāng shīfu. Yíhuìr, húnshēn hànshuǐ de Zhāng shīfu lái le. Tā jiànle wǒ yòu shì dàoqiàn yòu shì gǎnxiè, shuō jīntiān tèbié máng, shǒujī méi diàn le dōu bù zhīdào. Shuōzhe jiù yào chāi bāoguǒ, fēi yào qǐng wǒ chī yuèbing bùkě. Wǒ shuō jiā li shénme xiànr de yuèbing dōu yǒu, háishi gǎnkuài gěi nǚ\'ér dǎ diànhuà ba.',
     vn:'Trong lòng tôi mơ hồ thấy bất an, ôm gói hàng chạy ngay ra công trường, tìm một anh công nhân nhờ gọi giúp bác Trương. Một lúc sau, bác Trương mồ hôi nhễ nhại chạy tới. Gặp tôi, bác vừa xin lỗi vừa cảm ơn rối rít, nói hôm nay bận quá, điện thoại hết pin cũng không biết. Nói rồi bác định bóc gói hàng, nhất định mời tôi ăn bánh Trung thu cho bằng được. Tôi bảo ở nhà bánh nhân gì cũng có, bác mau gọi điện cho con gái đi.'},
    {sp:0,zh:'电话通了，张师傅满脸慈爱，笑得别提多灿烂了：“心心，月饼爸爸收到了，……我身体好着呢，别惦记，好好工作，别给爸爸丢人啊……”讲完电话，张师傅还没忘了向我炫耀他的女儿，“要面子着呢，从来没有辜负过我的期望。”',
     py:'Diànhuà tōng le, Zhāng shīfu mǎn liǎn cí\'ài, xiào de biétí duō cànlàn le: "Xīnxīn, yuèbing bàba shōudào le, …… wǒ shēntǐ hǎozhe ne, bié diànjì, hǎohǎo gōngzuò, bié gěi bàba diū rén a……" Jiǎng wán diànhuà, Zhāng shīfu hái méi wàngle xiàng wǒ xuànyào tā de nǚ\'ér, "Yào miànzi zhe ne, cónglái méiyǒu gūfùguo wǒ de qīwàng."',
     vn:'Điện thoại thông, bác Trương mặt đầy trìu mến, cười rạng rỡ không sao tả xiết: "Tâm Tâm à, bánh Trung thu bố nhận được rồi… Bố khoẻ lắm, đừng lo cho bố, con làm việc cho tốt, đừng để bố mất mặt nhé…" Nói chuyện xong, bác Trương vẫn không quên khoe con gái với tôi: "Nó biết giữ thể diện lắm, chưa bao giờ phụ lòng kỳ vọng của tôi."'},
    {sp:0,zh:'看得出，女儿是他的幸福。',
     py:'Kàn de chū, nǚ\'ér shì tā de xìngfú.',
     vn:'Có thể thấy, con gái chính là hạnh phúc của bác.'}
   ]}
];

// ══════════════════════════════════════════
// PHÂN BIỆT TỪ GẦN NGHĨA 词语辨析
// Cặp 起码—至少 lấy từ sách (tr. 38, 做一做 dạng đúng/sai); 原先—原来, 期望—希望 bổ sung
// ══════════════════════════════════════════
var synonymData = [
  {pair:'起码 — 至少',
   same:'Đều biểu thị MỨC THẤP NHẤT, tối thiểu. Đứng trước động từ hoặc số lượng thì thay nhau được.',
   sameEx:{zh:'小孩子每天起码／至少要睡九个小时。',vn:'Trẻ nhỏ mỗi ngày ít nhất phải ngủ chín tiếng.'},
   items:[
     {word:'起码',points:[
       'Là TÍNH TỪ.',
       'Làm ĐỊNH NGỮ trước danh từ: 起码的要求, 起码的常识.',
       'Thêm được 最 phía trước để nhấn mạnh: 最起码.'
     ],ex:[{zh:'按时上课，这是对学生起码的要求。',vn:'Đi học đúng giờ, đó là yêu cầu tối thiểu đối với học sinh.'},
          {zh:'我一个月的电话费最起码也要100块钱。',vn:'Tiền điện thoại một tháng của tôi ít nhất cũng phải 100 tệ.'}]},
     {word:'至少',points:[
       'Là PHÓ TỪ — chỉ đứng trước động từ, số lượng hoặc cả mệnh đề.',
       'KHÔNG làm định ngữ: không nói 至少的要求.',
       'KHÔNG thêm 最 phía trước: không nói 最至少.'
     ],ex:[{zh:'这次考试至少有一半的人不及格。',vn:'Kỳ thi này ít nhất một nửa số người không đạt.'},
          {zh:'你不想去也没关系，至少应该告诉我一声。',vn:'Cậu không muốn đi cũng không sao, ít ra cũng phải báo tớ một tiếng.'}]}
   ],
   quiz:[
     {sentence:'小孩子每天＿＿要睡九个小时。',options:['起码','至少'],answer:0,both:true,
      why:'Đứng trước động từ 要 + số lượng — cả hai đều dùng được.'},
     {sentence:'遵守时间是做人最＿＿的礼貌。',options:['起码','至少'],answer:0,
      why:'Có 最 phía trước và làm định ngữ (……的礼貌) — chỉ 起码.'},
     {sentence:'这是对学生＿＿的要求。',options:['起码','至少'],answer:0,
      why:'Làm định ngữ trước 的要求 — 至少 là phó từ nên không dùng được.'},
     {sentence:'从这儿到机场＿＿要一个小时。',options:['起码','至少'],answer:0,both:true,
      why:'Trước 要 + số lượng thời gian — cả hai đều được.'}
   ],
   sgk:{
     chung:{t:'都表示最低限度。',vn:'Đều biểu thị mức thấp nhất, tối thiểu.',vd:'小孩子每天起码／至少要睡九个小时。',vdVn:'Trẻ nhỏ mỗi ngày ít nhất phải ngủ chín tiếng.'},
     khac:[
       {a:{t:'形容词，可作为定语出现在名词前。',vn:'Là tính từ, có thể làm định ngữ đứng trước danh từ.',vd:'按时上课，这是对学生起码的要求。',vdVn:'Đi học đúng giờ, đó là yêu cầu tối thiểu đối với học sinh.'},
        b:{t:'副词，不能在名词前做定语。',vn:'Là phó từ, không làm định ngữ trước danh từ.',vd:'*这是至少的要求。（×）',vdVn:'Câu sai: không nói 至少的要求.'}},
       {a:{t:'前边可以加“最”强调最少、最低的要求。',vn:'Phía trước thêm được 最 để nhấn mạnh mức thấp nhất.',vd:'我一个月的电话费最起码也要100块钱。',vdVn:'Tiền điện thoại một tháng của tôi ít nhất cũng phải 100 tệ.'},
        b:{t:'前边不能加“最”这类词强调。',vn:'Phía trước không thêm được những từ như 最.',vd:'*最至少要100元。（×）',vdVn:'Câu sai: không nói 最至少.'}}
     ],
     cot:['√ đúng','× sai'],
     lamThu:[
       {s:'我们一个星期起码要上16个小时的课。',dap:[true,false],
        giai:'起码 đứng trước động từ 要 + số lượng — câu đúng.'},
       {s:'记住每天学过的生词，这是对学生至少的要求。',dap:[false,true],
        giai:'至少 là phó từ, không làm định ngữ trước 的要求 → sửa: 这是对学生起码的要求.'},
       {s:'人家帮了这么多忙，你最起码要说声谢谢吧？',dap:[true,false],
        giai:'起码 thêm 最 phía trước được (最起码) — câu đúng.'},
       {s:'我看那箱苹果最至少也有十公斤。',dap:[false,true],
        giai:'至少 không thêm 最 → sửa: 最起码也有十公斤 hoặc 至少也有十公斤.'}
     ]
   }},

  {pair:'原先 — 原来',
   same:'Đều chỉ thời gian TRƯỚC ĐÂY, lúc đầu (khác với bây giờ); đều làm trạng ngữ và định ngữ được.',
   sameEx:{zh:'他原先／原来是裁缝，现在在港口干活。',vn:'Trước kia ông ấy là thợ may, giờ làm việc ở bến cảng.'},
   items:[
     {word:'原先',points:[
       'Chỉ mang nghĩa THỜI GIAN: trước kia, ban đầu.',
       'Làm trạng ngữ (原先是……) hoặc định ngữ (原先的计划).',
       'KHÔNG mang nghĩa "hoá ra".'
     ],ex:[{zh:'天气不好，我们只好改变原先的计划。',vn:'Thời tiết xấu, chúng tôi đành thay đổi kế hoạch ban đầu.'}]},
     {word:'原来',points:[
       'Cũng mang nghĩa thời gian: trước kia, vốn là (= 原先).',
       'Còn là PHÓ TỪ "hoá ra": phát hiện ra sự thật mà trước đó chưa biết — 原先 không có nghĩa này.',
       'Nghĩa "hoá ra" thường đứng đầu câu hoặc trước chủ ngữ: 原来是你！'
     ],ex:[{zh:'原来是你啊！我还以为是谁呢。',vn:'Hoá ra là cậu à! Tớ còn tưởng ai.'},
          {zh:'我说怎么这么冷，原来是窗户没关。',vn:'Tớ bảo sao lạnh thế, hoá ra là chưa đóng cửa sổ.'}]}
   ],
   quiz:[
     {sentence:'他＿＿是裁缝，现在在港口干活。',options:['原先','原来'],answer:0,both:true,
      why:'Nghĩa thời gian "trước kia", đối chiếu với 现在 — cả hai đều được.'},
     {sentence:'我说怎么这么冷，＿＿是窗户没关。',options:['原先','原来'],answer:1,
      why:'Phát hiện ra nguyên nhân (hoá ra) — chỉ 原来.'},
     {sentence:'天气不好，我们只好改变＿＿的计划。',options:['原先','原来'],answer:0,both:true,
      why:'Làm định ngữ, nghĩa "ban đầu" — cả hai đều được.'},
     {sentence:'＿＿你就是张心悦啊，你爸爸常常说起你。',options:['原先','原来'],answer:1,
      why:'Vỡ lẽ, nhận ra điều trước đó chưa biết — chỉ 原来.'}
   ]},

  {pair:'期望 — 希望',
   same:'Đều là mong muốn điều tốt đẹp sẽ xảy ra; đều làm được động từ và danh từ.',
   sameEx:{zh:'老师期望／希望我们都能考上理想的大学。',vn:'Thầy cô mong tất cả chúng tôi đều thi đỗ trường đại học mơ ước.'},
   items:[
     {word:'期望',points:[
       'Trang trọng, văn viết; thường là người trên đặt KỲ VỌNG vào người dưới hoặc vào tương lai.',
       'Hay làm danh từ: 父母的期望, 对……的期望, 辜负/达到期望, 期望很高.',
       'Ít dùng cho mong muốn nhỏ nhặt hằng ngày của chính mình.'
     ],ex:[{zh:'（我女儿）从来没有辜负过我的期望。',vn:'(Con gái tôi) chưa bao giờ phụ kỳ vọng của tôi.'},
          {zh:'父母对他的期望很高，他的压力很大。',vn:'Bố mẹ kỳ vọng vào cậu ấy rất cao, cậu ấy chịu áp lực lớn.'}]},
     {word:'希望',points:[
       'Dùng rộng rãi, cả khẩu ngữ lẫn văn viết; mong muốn của chính mình cũng dùng được: 我希望明天不下雨.',
       'Danh từ 希望 = hy vọng, khả năng thành công: 有希望, 没希望, 充满希望 — 期望 không dùng như vậy.',
       'Có thể nói 很希望, 真希望.'
     ],ex:[{zh:'我真希望明天别下雨。',vn:'Tôi thật mong mai đừng mưa.'},
          {zh:'只要不放弃，就还有希望。',vn:'Chỉ cần không bỏ cuộc thì vẫn còn hy vọng.'}]}
   ],
   quiz:[
     {sentence:'我真＿＿明天别下雨，我们还要去爬山呢。',options:['期望','希望'],answer:1,
      why:'Mong muốn nhỏ hằng ngày của bản thân, có 真 phía trước — dùng 希望.'},
     {sentence:'父母对他的＿＿很高，他的压力很大。',options:['期望','希望'],answer:0,
      why:'Kỳ vọng người trên đặt vào người dưới, đi với 很高 — 期望.'},
     {sentence:'只要不放弃，就还有＿＿。',options:['期望','希望'],answer:1,
      why:'有希望 = còn hy vọng, còn khả năng — chỉ 希望.'},
     {sentence:'老师＿＿我们都能考上理想的大学。',options:['期望','希望'],answer:0,both:true,
      why:'Động từ, người trên mong người dưới — cả hai đều được (期望 trang trọng hơn).'}
   ]}
];

// ══════════════════════════════════════════
// BẮC CẦU HÁN–VIỆT
// ══════════════════════════════════════════
var hvBridgeData = {
  easy:[
    {zh:'学位',hv:'học vị',vn:'học vị',note:'Trùng khít cả âm lẫn nghĩa.'},
    {zh:'期望',hv:'kỳ vọng',vn:'kỳ vọng, mong đợi',note:'Trùng khít — 辜负期望 = phụ kỳ vọng.'},
    {zh:'骨干',hv:'cốt cán',vn:'trụ cột, nòng cốt',note:'Tiếng Việt có "cán bộ cốt cán" — đúng nghĩa này.'},
    {zh:'灿烂',hv:'xán lạn',vn:'rực rỡ, rạng rỡ',note:'"Tương lai xán lạn" = 前途灿烂.'},
    {zh:'助手',hv:'trợ thủ',vn:'trợ lý',note:'"Trợ thủ đắc lực" = 得力助手.'},
    {zh:'主管',hv:'chủ quản',vn:'người quản lý',note:'Tiếng Việt dùng "chủ quản" cho cơ quan; tiếng Trung chủ yếu chỉ NGƯỜI quản lý một bộ phận.'},
    {zh:'港口',hv:'cảng khẩu',vn:'bến cảng',note:'Chữ 港 = "cảng" quen thuộc.'},
    {zh:'迟疑',hv:'trì nghi',vn:'chần chừ, ngập ngừng',note:'"Trì" = chậm (trì hoãn), "nghi" = ngờ → chậm vì còn ngờ vực.'}
  ],
  idiom:[
    {zh:'饱经沧桑',hv:'bão kinh thương tang',vn:'nếm đủ mùi đời, trải bao bể dâu',note:'沧桑 = 沧海桑田 "thương hải tang điền" — tiếng Việt: "bể dâu" (Truyện Kiều: "Trải qua một cuộc bể dâu").'},
    {zh:'小心翼翼',hv:'tiểu tâm dực dực',vn:'cẩn thận từng li từng tí',note:'"Tiểu tâm" = cẩn thận (không phải "lòng nhỏ"); 翼翼 = dáng thận trọng.'}
  ],
  trap:[
    {zh:'面子',hv:'diện tử',vn:'thể diện, sĩ diện',
     warn:'子 chỉ là hậu tố, không phải "tử" (con). Tiếng Việt nói "thể diện"/"sĩ diện", không nói "diện tử".'},
    {zh:'心眼儿',hv:'tâm nhãn',vn:'bụng dạ, tấm lòng',
     warn:'Không hiểu theo nghĩa đen "con mắt của tim". 心眼儿好 = tốt bụng; 心眼儿小 = hẹp hòi; 多个心眼儿 = cảnh giác.'},
    {zh:'打量',hv:'đả lượng',vn:'quan sát, nhìn kỹ',
     warn:'打 không phải "đánh", 量 không phải "đo lường". 打量 là nhìn ai từ đầu đến chân. Đọc dǎliang (量 thanh nhẹ).'},
    {zh:'模样',hv:'mô dạng',vn:'dáng vẻ bề ngoài',
     warn:'Đọc múyàng (khác 模 mó trong 模特, 模仿). Nghĩa là vẻ ngoài của người, không phải "mô hình".'},
    {zh:'丢人',hv:'đâu nhân',vn:'mất mặt',
     warn:'Không phải "làm mất người" hay "bỏ rơi ai". 丢人 = xấu mặt, mất thể diện (= 丢脸).'},
    {zh:'操劳',hv:'thao lao',vn:'làm lụng vất vả',
     warn:'"Thao" ở đây không liên quan thể thao (体操); 操劳 là lo toan, vất vả vì gia đình, công việc.'}
  ]
};

// ══════════════════════════════════════════
// GHÉP TỪ — cụm từ trong bài khoá
// ══════════════════════════════════════════
var matchData = [
  {left:'打量了我',right:'一番'},
  {left:'流露出',right:'朴实'},
  {left:'一双过于',right:'操劳的大手'},
  {left:'胡须起码一个星期',right:'没刮了'},
  {left:'南方',right:'口音'},
  {left:'拨打',right:'电话'},
  {left:'守',right:'信誉'},
  {left:'辜负',right:'期望'},
  {left:'满怀',right:'喜悦'},
  {left:'浑身',right:'汗水'},
  {left:'小心翼翼地',right:'收起来'},
  {left:'一流的',right:'公司'},
  {left:'公司的',right:'骨干'},
  {left:'饱经沧桑的',right:'脸'},
  {left:'什么馅儿的',right:'月饼'},
  {left:'笑得别提多',right:'灿烂了'},
  {left:'要',right:'面子'},
  {left:'迎面',right:'站着'},
  {left:'搓着',right:'手'},
  {left:'有件事想',right:'拜托你'}
];

// ══════════════════════════════════════════
// ĐIỀN TỪ
// ══════════════════════════════════════════
var fillData = [
  {pre:'中秋节快到了，女儿要给他寄盒',blank:'月饼',post:'。',hint:'(bánh Trung thu)',ans:'月饼'},
  {pre:'',blank:'清晨',post:'的空气特别新鲜，爷爷每天都去公园散步。',hint:'(sáng sớm)',ans:'清晨'},
  {pre:'我一出校门，班主任就',blank:'迎面',post:'走了过来。',hint:'(ngay trước mặt, ngược chiều tới)',ans:'迎面'},
  {pre:'门口站着一位学生',blank:'模样',post:'的年轻人。',hint:'(dáng vẻ)',ans:'模样'},
  {pre:'新同学一进教室，大家都好奇地上下',blank:'打量',post:'着他。',hint:'(quan sát, nhìn kỹ)',ans:'打量'},
  {pre:'天太冷了，他一边',blank:'搓',post:'手一边跺脚。',hint:'(xoa)',ans:'搓'},
  {pre:'老人那张',blank:'饱经沧桑',post:'的脸上总是带着微笑。',hint:'(từng trải, dãi dầu)',ans:'饱经沧桑'},
  {pre:'这里的农民为人',blank:'朴实',post:'，对客人非常热情。',hint:'(chất phác)',ans:'朴实'},
  {pre:'父母为我们',blank:'操劳',post:'了半辈子，现在也该享享福了。',hint:'(làm lụng vất vả)',ans:'操劳'},
  {pre:'爷爷留着长长的',blank:'胡须',post:'，看起来非常慈祥。',hint:'(râu)',ans:'胡须'},
  {pre:'听',blank:'口音',post:'，他应该是南方人。',hint:'(giọng địa phương)',ans:'口音'},
  {pre:'奶奶年轻时当过',blank:'裁缝',post:'，全家人的衣服都是她做的。',hint:'(thợ may)',ans:'裁缝'},
  {pre:'上海是中国最大的',blank:'港口',post:'城市之一。',hint:'(bến cảng)',ans:'港口'},
  {pre:'她',blank:'心眼儿',post:'好，谁有困难她都愿意帮忙。',hint:'(bụng dạ, tấm lòng)',ans:'心眼儿'},
  {pre:'做生意一定要守',blank:'信誉',post:'，否则就留不住顾客了。',hint:'(chữ tín, uy tín)',ans:'信誉'},
  {pre:'姐姐去年在北京大学拿到了博士',blank:'学位',post:'。',hint:'(học vị)',ans:'学位'},
  {pre:'这家酒店的服务是',blank:'一流',post:'的，难怪客人那么多。',hint:'(hạng nhất)',ans:'一流'},
  {pre:'他工作才三年就当上了销售',blank:'主管',post:'。',hint:'(người quản lý)',ans:'主管'},
  {pre:'小王工作认真，是经理的得力',blank:'助手',post:'。',hint:'(trợ lý, trợ thủ)',ans:'助手'},
  {pre:'经过几年的努力，他已经成为公司的',blank:'骨干',post:'了。',hint:'(trụ cột)',ans:'骨干'},
  {pre:'他',blank:'小心翼翼',post:'地把名片收起来，满怀喜悦地走了。',hint:'(hết sức cẩn thận)',ans:'小心翼翼'},
  {pre:'考上大学的那天，我怀着',blank:'喜悦',post:'的心情给爷爷打了电话。',hint:'(vui sướng)',ans:'喜悦'},
  {pre:'踢完足球回来，弟弟',blank:'浑身',post:'都是泥。',hint:'(khắp người)',ans:'浑身'},
  {pre:'你喜欢吃什么',blank:'馅儿',post:'的饺子？',hint:'(nhân bánh)',ans:'馅儿'},
  {pre:'听说要去旅游，妹妹笑得别提多',blank:'灿烂',post:'了。',hint:'(rạng rỡ)',ans:'灿烂'},
  {pre:'他太爱',blank:'面子',post:'了，明明不懂也不肯问别人。',hint:'(thể diện, sĩ diện)',ans:'面子'},
  {pre:'我花了三天时间，把那篇文章从头到尾研究了一',blank:'番',post:'。',hint:'(lượng từ: lượt)',ans:'番'},
  {pre:'按时上课，这是对学生',blank:'起码',post:'的要求。',hint:'(tối thiểu — làm định ngữ)',ans:'起码'},
  {pre:'考试前别',blank:'过于',post:'紧张，只要正常发挥就行。',hint:'(quá — văn viết)',ans:'过于'},
  {pre:'父母对孩子的',blank:'期望',post:'太高，有时会给孩子带来很大压力。',hint:'(kỳ vọng)',ans:'期望'}
];

// ══════════════════════════════════════════
// SẮP XẾP CÂU — mỗi điểm ngữ pháp (番 · 过于 · 着呢) ít nhất 2 câu
// ══════════════════════════════════════════
var sortData = [
  {words:['他','打量了','我','一番','。'],ans:'他打量了我一番。',audio:'他打量了我一番。'},
  {words:['我们','认真地','讨论了','一番','。'],ans:'我们认真地讨论了一番。',audio:'我们认真地讨论了一番。'},
  {words:['这是','妈妈的','一番','心意','。'],ans:'这是妈妈的一番心意。',audio:'这是妈妈的一番心意。'},
  {words:['他','出来得','过于','匆忙','，','忘了带手机','。'],ans:'他出来得过于匆忙，忘了带手机。',audio:'他出来得过于匆忙，忘了带手机。'},
  {words:['你','不要','过于','担心','。'],ans:'你不要过于担心。',audio:'你不要过于担心。'},
  {words:['我','身体','好','着呢','。'],ans:'我身体好着呢。',audio:'我身体好着呢。'},
  {words:['公共汽车上','挤','着呢','。'],ans:'公共汽车上挤着呢。',audio:'公共汽车上挤着呢。'},
  {words:['我女儿','要面子','着呢','。'],ans:'我女儿要面子着呢。',audio:'我女儿要面子着呢。'},
  {words:['他','搓着手','，','迟疑地','说','。'],ans:'他搓着手，迟疑地说。',audio:'他搓着手，迟疑地说。'},
  {words:['直到','下班','，','仍旧','没有','音信','。'],ans:'直到下班，仍旧没有音信。',audio:'直到下班，仍旧没有音信。'},
  {words:['我','心里','隐约','有些','不安','。'],ans:'我心里隐约有些不安。',audio:'我心里隐约有些不安。'},
  {words:['他','非要','请我','吃月饼','不可','。'],ans:'他非要请我吃月饼不可。',audio:'他非要请我吃月饼不可。'},
  {words:['他','见了我','又是','道歉','又是','感谢','。'],ans:'他见了我又是道歉又是感谢。',audio:'他见了我又是道歉又是感谢。'}
];

// ══════════════════════════════════════════
// CHỌN TỪ THÍCH HỢP
// ══════════════════════════════════════════
var errorFixMode = 'wordchoice';
var errorFixData = [
  {wrong:'他搓着手，____地说：“有件事想拜托你。”',opts:['迟疑','喜悦','灿烂','朴实'],ans:0,
   exp:'Xoa tay ngại ngùng khi nhờ vả → nói NGẬP NGỪNG: 迟疑地说. 喜悦 (vui sướng), 灿烂 (rạng rỡ) không hợp dáng vẻ ngại ngùng; 朴实 tả tính cách, không làm trạng ngữ cho 说.'},
  {wrong:'父母的话常常在他耳边回响，他总提醒自己不要辜负了父母的一____期望。',opts:['番','遍','次','趟'],ans:0,
   exp:'Lượng từ cho tâm tư, kỳ vọng, số từ 一 → 一番期望. 遍 là một lượt từ đầu đến cuối (看一遍), 次 đếm số lần, 趟 đếm chuyến đi — không đi với 期望.'},
  {wrong:'有的登山爱好者遇险，是因为____自信。',opts:['过于','超过','经过','过去'],ans:0,
   exp:'过于 + tính từ = quá mức (ý chê). 超过 (vượt qua) mang tân ngữ số lượng; 经过 (đi qua, trải qua); 过去 (quá khứ, đi qua) — không đứng trước tính từ 自信.'},
  {wrong:'人家帮了这么多忙，你最____要说声谢谢吧？',opts:['起码','至少','多少','最少'],ans:0,
   exp:'Phía trước đã có 最 → chỉ dùng 起码 (最起码). Sách: không nói 最至少. 多少 là "bao nhiêu"; 最少 đã có 最, thành 最最少 là sai.'},
  {wrong:'他____是裁缝，现在在港口干活。',opts:['原先','首先','事先','预先'],ans:0,
   exp:'原先……，现在…… đối chiếu trước kia – bây giờ. 首先 = trước hết (thứ tự các bước); 事先, 预先 = làm trước để chuẩn bị — không dùng so sánh với 现在.'},
  {wrong:'我给他发短信，他也不回，直到下班，____没有音信。',opts:['仍旧','终于','果然','依靠'],ans:0,
   exp:'Mãi đến … tình trạng vẫn không đổi → 仍旧 (vẫn). 终于 (cuối cùng đã) mâu thuẫn với 没有音信; 果然 = quả nhiên; 依靠 = dựa vào (động từ).'},
  {wrong:'我心里____有些不安，抱着包裹就往工地跑。',opts:['隐约','显然','明显','清楚'],ans:0,
   exp:'Cảm giác bất an mơ hồ, chưa rõ → 隐约. 显然, 明显, 清楚 đều là "rõ ràng" — trái nghĩa với cảm giác lờ mờ trong câu.'},
  {wrong:'父母对我的____很高，我压力很大。',opts:['期望','希望','盼望','愿望'],ans:0,
   exp:'Kỳ vọng người trên đặt vào người dưới, làm danh từ với 很高 → 期望很高. Danh từ 希望 thiên về "khả năng, hy vọng" (有希望); 盼望 là động từ "ngóng trông"; 愿望 là nguyện vọng của chính mình.'},
  {wrong:'要面子着呢，从来没有____过我的期望。',opts:['辜负','失望','放弃','违反'],ans:0,
   exp:'辜负 + 期望 là kết hợp cố định (phụ kỳ vọng). 失望 không mang tân ngữ 期望; 放弃 = từ bỏ; 违反 = vi phạm (quy định, luật lệ).'},
  {wrong:'讲完电话，张师傅还没忘了向我____他的女儿。',opts:['炫耀','骄傲','流露','惦记'],ans:0,
   exp:'向 + người + 炫耀 + điều gì = khoe với ai. 骄傲 là tính từ, không mang tân ngữ; 流露 dùng cho tình cảm (流露出喜悦); 惦记 = nhớ lo, không đi với 向我.'},
  {wrong:'好好工作，别给爸爸____啊。',opts:['丢人','丢失','失去','面子'],ans:0,
   exp:'给 + ai + 丢人 = làm ai mất mặt. 丢失, 失去 cần tân ngữ (丢失钱包, 失去机会); 面子 là danh từ, phải nói 别让爸爸丢面子.'},
  {wrong:'说起女儿，他的眼里____出无比的骄傲。',opts:['流露','发表','露面','表示'],ans:0,
   exp:'Tình cảm tự nhiên lộ ra qua ánh mắt → 流露出. 发表 dùng cho ý kiến, bài viết; 露面 (xuất hiện) không mang tân ngữ; 表示 là chủ động nói ra, không đi với 眼里……出.'},
  {wrong:'他被网上的假广告____了，白白花了一千块钱。',opts:['欺骗','欺负','拜托','炫耀'],ans:0,
   exp:'Quảng cáo giả làm người ta tin điều sai → bị lừa: 被……欺骗. 欺负 là bắt nạt (ỷ mạnh hiếp yếu); 拜托 là nhờ; 炫耀 là khoe.'},
  {wrong:'我身体好着呢，别____，好好工作。',opts:['惦记','记得','记住','忘记'],ans:0,
   exp:'Dặn người thân đừng lo cho mình → 别惦记. 别记得 sai ngữ pháp; 别记住 (đừng ghi nhớ) và 别忘记 (đừng quên) không hợp nghĩa "đừng lo".'},
  {wrong:'遇到火灾，要立刻____打119。',opts:['拨','播','泼','发'],ans:0,
   exp:'拨打 = bấm số gọi điện. 播 (bō, phát sóng: 广播), 泼 (pō, hắt nước) chỉ gần âm; 发 đi với 短信, 邮件 — không có 发打.'},
  {wrong:'我下个月出差，家里的小猫就____你照看几天了。',opts:['拜托','拜访','打扰','感谢'],ans:0,
   exp:'Nhờ ai làm giúp → 拜托 + người + V. 拜访 là đến thăm; 打扰 là làm phiền; 感谢 là cảm ơn — không mang cụm "你照看几天".'},
  {wrong:'果然，他来自南方的一个____，原先是裁缝。',opts:['乡镇','口音','模样','胡须'],ans:0,
   exp:'来自 + nơi chốn → 一个乡镇 (một thị trấn nhỏ). 口音 (giọng), 模样 (dáng vẻ), 胡须 (râu) không phải nơi chốn.'},
  {wrong:'她说话很____，从来不大声嚷。',opts:['斯文','粗鲁','吵闹','一流'],ans:0,
   exp:'Không bao giờ to tiếng → nói năng nhã nhặn: 斯文. 粗鲁 (thô lỗ), 吵闹 (ồn ào) trái nghĩa với vế sau; 一流 (hạng nhất) không dùng tả cách nói.'}
];

// ══════════════════════════════════════════
// DỊCH — câu ghép, ôn từ bài 1–2 HSK 6 và HSK 4–5
// ══════════════════════════════════════════
var translateData = [
  {vi:'Tuy trận này thua, nhưng huấn luyện viên vẫn đặt rất nhiều kỳ vọng vào chúng tôi.',zh:'虽然这次比赛输了，但是教练仍旧对我们充满期望。',py:'Suīrán zhè cì bǐsài shū le, dànshì jiàoliàn réngjiù duì wǒmen chōngmǎn qīwàng.',goiY:['虽然……但是……','仍旧','期望'],giai:'虽然……但是…… nối hai ý trái ngược; 仍旧 (vẫn) đứng sau chủ ngữ vế sau, trước động từ. "Đặt kỳ vọng vào ai" = 对 + ai + 充满期望, không dịch từng chữ "đặt".'},
  {vi:'Chỉ cần làm bài bình thường thì ít nhất em cũng được tám mươi điểm, nên đừng căng thẳng quá.',zh:'只要正常发挥，你起码能考八十分，所以别过于紧张。',py:'Zhǐyào zhèngcháng fāhuī, nǐ qǐmǎ néng kǎo bāshí fēn, suǒyǐ bié guòyú jǐnzhāng.',goiY:['只要','起码','过于'],giai:'只要 + điều kiện; 起码 đặt trước động từ năng nguyện 能 (ít nhất cũng …); lời khuyên "đừng … quá" = 别过于 + tính từ hai âm tiết.'},
  {vi:'Tôi gọi cho cậu ấy mấy lần mà mãi không ai nghe máy, trong lòng mơ hồ thấy bất an.',zh:'我拨了好几次他的电话，却一直无人接听，心里隐约有些不安。',py:'Wǒ bōle hǎo jǐ cì tā de diànhuà, què yìzhí wú rén jiētīng, xīn li yǐnyuē yǒuxiē bù\'ān.',goiY:['拨','却','隐约'],giai:'却 nêu kết quả trái mong đợi, đứng trước động từ; "mơ hồ thấy bất an" = 隐约有些不安, không dịch là 模糊 (mờ về hình ảnh).'},
  {vi:'Mẹ ơi, con ở trường ổn lắm, mẹ đừng lo, cũng đừng gửi bánh Trung thu cho con nữa.',zh:'妈妈，我在学校好着呢，您别惦记，也别再给我寄月饼了。',py:'Māma, wǒ zài xuéxiào hǎozhe ne, nín bié diànjì, yě bié zài gěi wǒ jì yuèbing le.',goiY:['着呢','惦记','别再……了'],giai:'A + 着呢 = … lắm (khẩu ngữ, đã nhấn mức độ nên không thêm 很); "đừng lo cho con" = 别惦记; 别再……了 = đừng … nữa.'},
  {vi:'Lớp trưởng nghiên cứu kỹ một lượt ý kiến của mọi người, sau đó mới dè dặt đề xuất với cô giáo.',zh:'班长认真地把大家的意见研究了一番，然后才小心翼翼地向老师提出了建议。',py:'Bānzhǎng rènzhēn de bǎ dàjiā de yìjiàn yánjiūle yì fān, ránhòu cái xiǎoxīn-yìyì de xiàng lǎoshī tíchūle jiànyì.',goiY:['番','然后才','小心翼翼'],giai:'把 + tân ngữ + V + 了一番 = làm kỹ một lượt (tốn công sức); 然后才 nhấn mạnh làm xong việc trước rồi MỚI làm việc sau.'},
  {vi:'Đã được bạn nhờ nhận hộ bưu kiện thì cậu phải giữ chữ tín, không thể vì bận mà quên được.',zh:'既然朋友拜托你代收包裹，你就得守信誉，不能因为忙就忘了。',py:'Jìrán péngyou bàituō nǐ dàishōu bāoguǒ, nǐ jiù děi shǒu xìnyù, bù néng yīnwèi máng jiù wàng le.',goiY:['既然……就……','拜托','信誉'],giai:'既然 + sự thật đã có, 就 + yêu cầu/kết luận; "giữ chữ tín" = 守信誉 (động từ 守, không dùng 保持).'},
  {vi:'Vừa nghỉ đông, anh trai vốn luôn nhớ nhà đã chỉ mong được về ngay đoàn tụ, còn bố mẹ thì cười rạng rỡ không tả xiết.',zh:'一放寒假，一直惦记着家人的哥哥就巴不得马上回家团圆，爸妈更是笑得别提多灿烂了。',py:'Yí fàng hánjià, yìzhí diànjìzhe jiārén de gēge jiù bābudé mǎshàng huí jiā tuányuán, bà mā gèng shì xiào de biétí duō cànlàn le.',goiY:['一……就……','巴不得','惦记','别提多……了'],giai:'一……就…… = vừa … là …; 巴不得 (bài 1) = chỉ mong; 别提多 + A + 了 (bài 1) diễn tả mức độ không tả xiết. 团圆 ôn từ bài 2.'},
  {vi:'Sở dĩ ngày nào cậu ấy cũng học đến khuya là vì không muốn phụ tấm lòng kỳ vọng của bố mẹ, chứ không phải vì sĩ diện.',zh:'他之所以每天学到深夜，是因为不想辜负父母的一番期望，而不是为了面子。',py:'Tā zhīsuǒyǐ měi tiān xué dào shēnyè, shì yīnwèi bù xiǎng gūfù fùmǔ de yì fān qīwàng, ér bú shì wèile miànzi.',goiY:['之所以……是因为……','辜负','番','而不是'],giai:'之所以 + kết quả, 是因为 + nguyên nhân; 一番 + 期望 (番 dùng cho tâm tư, số từ chỉ 一/几); "chứ không phải" = 而不是.'},
  {vi:'Cho dù em không hài lòng với điểm số của mình thì cũng đừng tự trách quá, ít ra em đã cố hết sức rồi.',zh:'即使你对自己的成绩不满意，也不要过于自责，起码你已经尽力了。',py:'Jíshǐ nǐ duì zìjǐ de chéngjì bù mǎnyì, yě búyào guòyú zìzé, qǐmǎ nǐ yǐjīng jìnlì le.',goiY:['即使……也……','过于','起码','尽力'],giai:'即使 + giả thiết/nhượng bộ, 也 + kết quả không đổi; 起码 đứng đầu vế cuối = "ít ra thì …" (an ủi). 尽力 ôn từ HSK 5.'},
  {vi:'Bánh Trung thu bà làm không những nhân gì cũng có mà còn ngon lắm, vì thế lần nào hàng xóm sang chơi bà cũng không nhịn được mà khoe một phen.',zh:'奶奶做的月饼不但什么馅儿的都有，而且好吃着呢，所以每次邻居来，她都忍不住要炫耀一番。',py:'Nǎinai zuò de yuèbing búdàn shénme xiànr de dōu yǒu, érqiě hǎochī zhe ne, suǒyǐ měi cì línjū lái, tā dōu rěnbuzhù yào xuànyào yì fān.',goiY:['不但……而且……','馅儿','着呢','炫耀一番'],giai:'不但……而且…… tăng tiến, cùng chủ ngữ 月饼 nên 不但 đứng sau chủ ngữ; 好吃着呢 = ngon lắm (không nói 很好吃着呢); 炫耀一番 = khoe một phen.'}
];

// Chiều Trung → Việt — bám ý bài khoá, diễn đạt bằng câu ghép
var translateDataRev = [
  {vi:'Sáng sớm đi làm, một người đàn ông trông như công nhân từ quê lên đi ngược chiều tới, nhìn tôi một lượt.',zh:'清晨上班时，一位农民工模样的男人迎面走来，打量了我一番。',py:'Qīngchén shàngbān shí, yí wèi nóngmíngōng múyàng de nánrén yíngmiàn zǒu lái, dǎliangle wǒ yì fān.',goiY:['模样 = dáng vẻ, trông như','迎面 = ngược chiều tới, ngay trước mặt','打量……一番 = nhìn kỹ … một lượt'],giai:'N + 模样的 + người → "trông như N"; 番 dùng cho hành động tốn thời gian → "một lượt", không dịch "một phiên".'},
  {vi:'Ông tuy nếm trải nhiều gian truân, nhưng trên gương mặt lại toát lên vẻ chất phác và hiền lành.',zh:'他虽然饱经沧桑，脸上却流露出朴实和善良。',py:'Tā suīrán bǎojīng-cāngsāng, liǎn shang què liúlù chū pǔshí hé shànliáng.',goiY:['虽然……却…… = tuy … nhưng (lại) …','饱经沧桑 = từng trải, dãi dầu','流露 = toát lên, bộc lộ'],giai:'虽然……却……: 却 đứng sau chủ ngữ vế sau (脸上); 流露出 + phẩm chất → "toát lên vẻ …", tự nhiên hơn "bộc lộ ra".'},
  {vi:'Vì ban ngày ông làm ở công trường, không ghi được địa chỉ, nên đành nhờ tôi nhận hộ bánh Trung thu.',zh:'因为他白天在工地干活，地址没法写，所以只好拜托我帮他代收月饼。',py:'Yīnwèi tā báitiān zài gōngdì gàn huó, dìzhǐ méi fǎ xiě, suǒyǐ zhǐhǎo bàituō wǒ bāng tā dàishōu yuèbing.',goiY:['因为……所以…… = vì … nên …','拜托 = nhờ','代收 = nhận hộ'],giai:'只好 = đành phải (không còn cách nào khác) — đừng bỏ sót sắc thái này khi dịch; 没法写 = không có cách nào ghi.'},
  {vi:'Sở dĩ ông tin tôi là vì tôi trông nho nhã lịch sự, tốt bụng, lại giữ chữ tín.',zh:'他之所以相信我，是因为我看起来斯斯文文的，心眼儿好，又守信誉。',py:'Tā zhīsuǒyǐ xiāngxìn wǒ, shì yīnwèi wǒ kàn qǐlái sīsīwénwén de, xīnyǎnr hǎo, yòu shǒu xìnyù.',goiY:['之所以……是因为…… = sở dĩ … là vì …','斯斯文文 = nho nhã','心眼儿好 = tốt bụng'],giai:'心眼儿好 dịch "tốt bụng", không dịch "mắt tim tốt"; 守信誉 = giữ chữ tín; 又 = lại còn (thêm một ưu điểm).'},
  {vi:'Con gái ông không chỉ học thạc sĩ, có học vị mà còn làm quản lý ở một công ty hàng đầu, được coi là trụ cột của công ty.',zh:'他的女儿不仅念了硕士，有学位，而且在一流的公司当主管，算得上是公司的骨干。',py:'Tā de nǚ\'ér bùjǐn niànle shuòshì, yǒu xuéwèi, érqiě zài yīliú de gōngsī dāng zhǔguǎn, suàndeshàng shì gōngsī de gǔgàn.',goiY:['不仅……而且…… = không chỉ … mà còn …','一流 = hàng đầu','算得上 = được coi là','骨干 = trụ cột'],giai:'算得上是 = đủ để được xem là (đánh giá khá cao), không dịch "tính được"; 一流的公司 = công ty hàng đầu.'},
  {vi:'Tôi lập tức gọi cho bác Trương nhưng không ai nghe máy, mãi đến lúc tan làm vẫn bặt tin.',zh:'我马上拨打张师傅的电话，却无人接听，直到下班仍旧没有音信。',py:'Wǒ mǎshàng bōdǎ Zhāng shīfu de diànhuà, què wú rén jiētīng, zhídào xiàbān réngjiù méiyǒu yīnxìn.',goiY:['却 = nhưng, lại (trái mong đợi)','直到 = mãi đến','仍旧 = vẫn'],giai:'直到……仍旧…… = mãi đến … vẫn …; 没有音信 = bặt vô âm tín, không có tin tức gì.'},
  {vi:'Bác Trương mồ hôi nhễ nhại vừa gặp tôi đã rối rít xin lỗi rồi cảm ơn, nhất định đòi mời tôi ăn bánh Trung thu cho bằng được.',zh:'浑身汗水的张师傅一见到我，就又是道歉又是感谢，非要请我吃月饼不可。',py:'Húnshēn hànshuǐ de Zhāng shīfu yí jiàndào wǒ, jiù yòu shì dàoqiàn yòu shì gǎnxiè, fēi yào qǐng wǒ chī yuèbing bùkě.',goiY:['一……就…… = vừa … là …','又是……又是…… = vừa … vừa … (dồn dập)','非……不可 = nhất định phải'],giai:'又是 A 又是 B tả hai hành động dồn dập, liên tục → "rối rít"; 非要……不可 = nhất quyết, khăng khăng → "nhất định … cho bằng được".'},
  {vi:'Điện thoại thông rồi, bác Trương cười rạng rỡ không tả xiết, vừa bảo mình khoẻ lắm, vừa dặn con gái đừng lo cho mình.',zh:'电话通了以后，张师傅笑得别提多灿烂了，一边说自己身体好着呢，一边叮嘱女儿别惦记他。',py:'Diànhuà tōngle yǐhòu, Zhāng shīfu xiào de biétí duō cànlàn le, yìbiān shuō zìjǐ shēntǐ hǎozhe ne, yìbiān dīngzhǔ nǚ\'ér bié diànjì tā.',goiY:['别提多……了 = … không tả xiết','一边……一边…… = vừa … vừa …','着呢 = … lắm','惦记 = lo, nhớ'],giai:'A + 着呢 nhấn mạnh mức độ (khẩu ngữ) → "khoẻ lắm"; 别提多 + A + 了 (bài 1) → "không tả xiết"; 叮嘱 = dặn dò.'},
  {vi:'Mặc dù bác Trương lao lực quá nhiều, cuộc sống cũng chẳng khá giả gì, nhưng hễ nhắc đến con gái là mặt bác rạng ngời tự hào, còn không nhịn được mà khoe với tôi một hồi.',zh:'尽管张师傅过于操劳，生活也不富裕，但是一说起女儿，他就满脸骄傲，还忍不住向我炫耀一番。',py:'Jǐnguǎn Zhāng shīfu guòyú cāoláo, shēnghuó yě bú fùyù, dànshì yì shuōqǐ nǚ\'ér, tā jiù mǎn liǎn jiāo\'ào, hái rěnbuzhù xiàng wǒ xuànyào yì fān.',goiY:['尽管……但是…… = mặc dù … nhưng …','过于操劳 = lao lực quá độ','炫耀一番 = khoe một hồi'],giai:'尽管 nêu sự thật đã có (khác 即使 là giả thiết); trong vế sau, 一……就…… = hễ … là …; 满脸骄傲 = mặt rạng ngời tự hào.'},
  {vi:'Bác Trương bảo con gái biết giữ thể diện lắm, chưa bao giờ phụ kỳ vọng của bác; có thể thấy, trong lòng người cha, con gái chính là toàn bộ hạnh phúc.',zh:'张师傅说女儿要面子着呢，从来没有辜负过他的期望；可见，在父亲心里，女儿就是他全部的幸福。',py:'Zhāng shīfu shuō nǚ\'ér yào miànzi zhe ne, cónglái méiyǒu gūfùguo tā de qīwàng; kějiàn, zài fùqin xīn li, nǚ\'ér jiù shì tā quánbù de xìngfú.',goiY:['着呢 = … lắm','辜负 = phụ (lòng)','可见 = có thể thấy'],giai:'要面子着呢 ở đây là lời khen "có chí, biết giữ thể diện", không dịch "sĩ diện" (nghĩa chê); 可见 rút ra kết luận từ vế trước.'}
];

// ══════════════════════════════════════════
// LUYỆN VIẾT — đề 运用 · 写一写 của sách (tr. 41): 缩写课文 ~300字
// ══════════════════════════════════════════
var writingData = {
  kieu:'sgk',
  soChu:300,
  de:'这篇课文讲述了发生在中秋节前的一个感人的故事，请参考练习5，把课文缩写成300字左右的短文。缩写时请注意写清楚时间，地点，人物（“我”、男人、女儿）的特点和性格，事情的发生、发展和结局。',
  prompt:'Bài khoá kể một câu chuyện cảm động xảy ra trước Tết Trung thu. Hãy tham khảo bài tập 5, viết tóm tắt bài khoá thành đoạn văn khoảng 300 chữ. Khi tóm tắt chú ý viết rõ thời gian, địa điểm, đặc điểm và tính cách của các nhân vật ("tôi", người đàn ông, con gái), cũng như sự việc bắt đầu, diễn biến và kết thúc ra sao.',
  dan:[
    {hoi:'“我”在公司楼下遇到的那个男人是什么样的？',goiY:'①……模样　②脸：　③手：　④胡须：　⑤口音：'},
    {hoi:'这个男人想拜托“我”做什么？',goiY:'①女儿在……工作，……节快到了，女儿想给……寄……　②可……白天在……，地址……　③……请我代收……'},
    {hoi:'他为什么找到“我”帮忙？',goiY:'斯斯文文、心眼儿、信誉'},
    {hoi:'他的女儿工作怎么样？',goiY:'硕士、学位、一流、主管、骨干'},
    {hoi:'“我”收到包裹后，做了什么？',goiY:'拨打、发短信、不安、往工地跑、找到'},
    {hoi:'他跟“我”见面后，做了什么？',goiY:'又是……又是……、非……不可、给女儿打电话'}
  ],
  tuNen:['模样','饱经沧桑','拜托','斯斯文文','一流','骨干','拨打','仍旧','又是……又是……','非……不可'],
  cauTruc:[
    {ten:'Thời gian + địa điểm + nhân vật', nhan:'中秋节前', vd:'中秋节前的一天清晨，我在公司楼下遇到了一位农民工模样的男人。', khi:'Câu MỞ: nêu đủ thời gian, địa điểm, nhân vật — đúng yêu cầu của đề.'},
    {ten:'原先……，现在……', nhan:'原先', vd:'他原先是裁缝，现在在旁边的港口干活。', khi:'Giới thiệu lai lịch nhân vật gọn trong một câu.'},
    {ten:'因为……，所以……', nhan:'所以', vd:'因为他白天在工地，地址没法写，所以想拜托我帮他代收。', khi:'Nêu NGUYÊN NHÂN khiến sự việc bắt đầu (起因).'},
    {ten:'……，却……，直到……，仍旧……', nhan:'却', vd:'我马上拨打他的电话，却无人接听，直到下班仍旧没有音信。', khi:'Phần DIỄN BIẾN — đẩy câu chuyện lên cao trào (bài tập 4).'},
    {ten:'于是……，终于……', nhan:'于是', vd:'我心里有些不安，于是抱着包裹往工地跑，终于找到了他。', khi:'Nối các bước hành động cho mạch lạc.'},
    {ten:'又是……又是……，非……不可', nhan:'又是', vd:'他见了我又是道歉又是感谢，非要请我吃月饼不可。', khi:'Tả hành động, qua đó cho thấy tính cách chất phác, biết ơn của nhân vật.'},
    {ten:'看得出，……', nhan:'看得出', vd:'看得出，女儿是他的幸福。', khi:'Câu KẾT: nêu kết cục và ý nghĩa câu chuyện (结局).'}
  ],
  checklist:[
    'Đã nêu rõ thời gian (trước Trung thu, sáng sớm, trưa ngày thứ ba) và địa điểm (dưới toà nhà công ty, công trường) chưa?',
    'Đã tả được đặc điểm, tính cách của cả ba nhân vật: "tôi", người đàn ông (bác Trương), cô con gái chưa?',
    'Có đủ ba phần bắt đầu → diễn biến → kết thúc, bám đúng 6 ý trong bảng bài tập 5 chưa?',
    'Độ dài khoảng 300 chữ (270–350 chữ Hán), viết bằng lời mình, không chép nguyên cả đoạn bài khoá chưa?',
    'Đã dùng ít nhất 5 từ/cấu trúc gợi ý (模样, 拜托, 一流, 仍旧, 又是……又是……, 非……不可…) chưa?'
  ],
  model:{
    zh:'中秋节前的一天清晨，我在公司楼下遇到了一位农民工模样的男人。他饱经沧桑的脸上流露出朴实，一双大手过于操劳，胡须起码一个星期没刮了，说话带着南方口音。他姓张，原先是裁缝，现在在旁边的港口干活。他女儿在上海工作，中秋节快到了，想给他寄一盒月饼，可他白天在工地，地址没法写，所以想拜托我帮他代收一下。他说我斯斯文文的，心眼儿好，守信誉，不会欺骗他。说起女儿，他满脸骄傲：女儿念了硕士，在一家一流的公司当主管，是公司的骨干。第三天中午，我收到了包裹，马上拨打张师傅的电话，却无人接听，发短信他也不回，直到下班仍旧没有音信。我心里有些不安，于是抱着包裹往工地跑，终于找到了他。他见了我又是道歉又是感谢，非要请我吃月饼不可。我劝他赶快给女儿打电话。电话通了，他笑得别提多灿烂了，还不停地向我炫耀女儿。看得出，女儿是他的幸福。',
    py:'Zhōngqiū Jié qián de yì tiān qīngchén, wǒ zài gōngsī lóu xià yùdàole yí wèi nóngmíngōng múyàng de nánrén. Tā bǎojīng-cāngsāng de liǎn shang liúlù chū pǔshí, yì shuāng dà shǒu guòyú cāoláo, húxū qǐmǎ yí ge xīngqī méi guā le, shuōhuà dàizhe nánfāng kǒuyīn. Tā xìng Zhāng, yuánxiān shì cáifeng, xiànzài zài pángbiān de gǎngkǒu gàn huó. Tā nǚ\'ér zài Shànghǎi gōngzuò, Zhōngqiū Jié kuài dào le, xiǎng gěi tā jì yì hé yuèbing, kě tā báitiān zài gōngdì, dìzhǐ méi fǎ xiě, suǒyǐ xiǎng bàituō wǒ bāng tā dàishōu yíxià. Tā shuō wǒ sīsīwénwén de, xīnyǎnr hǎo, shǒu xìnyù, bú huì qīpiàn tā. Shuōqǐ nǚ\'ér, tā mǎn liǎn jiāo\'ào: nǚ\'ér niànle shuòshì, zài yì jiā yīliú de gōngsī dāng zhǔguǎn, shì gōngsī de gǔgàn. Dì-sān tiān zhōngwǔ, wǒ shōudàole bāoguǒ, mǎshàng bōdǎ Zhāng shīfu de diànhuà, què wú rén jiētīng, fā duǎnxìn tā yě bù huí, zhídào xiàbān réngjiù méiyǒu yīnxìn. Wǒ xīn li yǒuxiē bù\'ān, yúshì bàozhe bāoguǒ wǎng gōngdì pǎo, zhōngyú zhǎodàole tā. Tā jiànle wǒ yòu shì dàoqiàn yòu shì gǎnxiè, fēi yào qǐng wǒ chī yuèbing bùkě. Wǒ quàn tā gǎnkuài gěi nǚ\'ér dǎ diànhuà. Diànhuà tōng le, tā xiào de biétí duō cànlàn le, hái bùtíng de xiàng wǒ xuànyào nǚ\'ér. Kàn de chū, nǚ\'ér shì tā de xìngfú.',
    vn:'Một buổi sáng sớm trước Tết Trung thu, dưới toà nhà công ty tôi gặp một người đàn ông trông như công nhân từ quê lên. Gương mặt dãi dầu của ông toát lên vẻ chất phác, đôi bàn tay to thô vì lao lực quá nhiều, râu ít nhất một tuần chưa cạo, nói giọng miền Nam. Ông họ Trương, trước kia là thợ may, giờ làm việc ở bến cảng gần đó. Con gái ông làm việc ở Thượng Hải, Trung thu sắp đến, cô muốn gửi cho bố một hộp bánh Trung thu, nhưng ban ngày ông ở công trường, không ghi được địa chỉ, nên muốn nhờ tôi nhận hộ. Ông bảo tôi trông nho nhã, tốt bụng, giữ chữ tín, sẽ không lừa ông. Nhắc đến con gái, mặt ông rạng ngời tự hào: con gái học thạc sĩ, làm quản lý ở một công ty hàng đầu, là trụ cột của công ty. Trưa ngày thứ ba, tôi nhận được gói hàng, lập tức gọi cho bác Trương nhưng không ai nghe máy, nhắn tin bác cũng không trả lời, mãi đến lúc tan làm vẫn bặt tin. Lòng tôi hơi bất an, thế là ôm gói hàng chạy ra công trường, cuối cùng cũng tìm được bác. Gặp tôi, bác rối rít vừa xin lỗi vừa cảm ơn, nhất định mời tôi ăn bánh Trung thu cho bằng được. Tôi khuyên bác mau gọi điện cho con gái. Điện thoại thông, bác cười rạng rỡ không tả xiết, còn luôn miệng khoe con gái với tôi. Có thể thấy, con gái chính là hạnh phúc của bác.'
  }
};

// ══════════════════════════════════════════
// LUYỆN NÓI — đúng bảng 练习5 「根据提示，简述课文主要内容」 (tr. 40)
// ══════════════════════════════════════════
var speakingData = {
  intro:'Sáu câu hỏi theo đúng bảng <b>练习5 「根据提示，简述课文主要内容」</b> của sách. Bấm loa nghe câu hỏi, nhìn gợi ý (cột phải của bảng) rồi <b>tự ghi âm câu trả lời của mình trước</b> — đừng đọc theo câu mẫu. Mỗi câu trả lời 2–4 câu, dùng đúng các từ trong gợi ý.',
  questions:[
    {q_zh:'“我”在公司楼下遇到的那个男人是什么样的？',
     q_vn:'Người đàn ông mà "tôi" gặp dưới toà nhà công ty trông như thế nào?',
     hint:'①……模样　②脸：　③手：　④胡须：　⑤口音：',
     sample:'他是一个农民工模样的男人。他饱经沧桑的脸上流露出朴实，一双大手过于操劳，胡须起码一个星期没刮了，说话带着南方口音。',
     sample_vn:'Đó là một người đàn ông trông như công nhân từ quê lên. Gương mặt dãi dầu toát lên vẻ chất phác, đôi tay to thô vì lao lực quá nhiều, râu ít nhất một tuần chưa cạo, nói giọng miền Nam.',
     note:'Tả người theo thứ tự từ tổng thể (模样) → chi tiết (脸, 手, 胡须, 口音). Dùng 过于 + động từ và 起码 + số lượng như trong bài.'},
    {q_zh:'这个男人想拜托“我”做什么？',
     q_vn:'Người đàn ông này muốn nhờ "tôi" làm gì?',
     hint:'①女儿在……工作，……节快到了，女儿想给……寄……　②可……白天在……，地址……　③……请我代收……',
     sample:'他女儿在上海工作，中秋节快到了，女儿想给他寄一盒月饼。可他白天在工地，地址没法写，所以想请我帮他代收一下。',
     sample_vn:'Con gái ông làm việc ở Thượng Hải, Trung thu sắp đến, cô muốn gửi cho bố một hộp bánh Trung thu. Nhưng ban ngày ông ở công trường, không ghi được địa chỉ, nên muốn nhờ tôi nhận hộ.',
     note:'Nói theo trình tự: hoàn cảnh → khó khăn (可……) → lời nhờ (想请我……). 代收 = nhận hộ.'},
    {q_zh:'他为什么找到“我”帮忙？',
     q_vn:'Vì sao ông ấy tìm đến "tôi" nhờ giúp?',
     hint:'斯斯文文、心眼儿、信誉',
     sample:'因为他觉得我和他女儿一样，斯斯文文的，一看就读过书，心眼儿好，守信誉，不会欺骗他。',
     sample_vn:'Vì ông thấy tôi cũng giống con gái ông, nho nhã lịch sự, nhìn là biết người có học, tốt bụng, giữ chữ tín, sẽ không lừa ông.',
     note:'Câu hỏi 为什么 → mở đầu bằng 因为……. 心眼儿好 = tốt bụng, 守信誉 = giữ chữ tín.'},
    {q_zh:'他的女儿工作怎么样？',
     q_vn:'Con gái ông ấy làm việc thế nào?',
     hint:'硕士、学位、一流、主管、骨干',
     sample:'他的女儿念了硕士，有学位，在一家一流的公司上班，是个主管，还有助手，怎么也算得上是公司的骨干。',
     sample_vn:'Con gái ông học thạc sĩ, có học vị, làm ở một công ty hàng đầu, là quản lý, còn có trợ lý, dù sao cũng được coi là trụ cột của công ty.',
     note:'算得上是…… = được coi là. Có thể thêm câu 说起女儿，他满脸的骄傲 để nói về tình cảm của người cha.'},
    {q_zh:'“我”收到包裹后，做了什么？',
     q_vn:'Sau khi nhận được gói hàng, "tôi" đã làm gì?',
     hint:'拨打、发短信、不安、往工地跑、找到',
     sample:'我马上拨打张师傅的电话，却无人接听，发短信他也不回，直到下班仍旧没有音信。我心里有些不安，就抱着包裹往工地跑，请一位工人帮忙，终于找到了他。',
     sample_vn:'Tôi lập tức gọi cho bác Trương nhưng không ai nghe, nhắn tin bác cũng không trả lời, mãi đến lúc tan làm vẫn bặt tin. Lòng tôi hơi bất an, bèn ôm gói hàng chạy ra công trường, nhờ một công nhân giúp, cuối cùng cũng tìm được bác.',
     note:'Dùng chuỗi 却……，也……，直到……仍旧…… (bài tập 4) để kể liền mạch các hành động.'},
    {q_zh:'他跟“我”见面后，做了什么？',
     q_vn:'Sau khi gặp "tôi", ông ấy đã làm gì?',
     hint:'又是……又是……、非……不可、给女儿打电话',
     sample:'他见了我又是道歉又是感谢，说着就要拆包裹，非要请我吃月饼不可。我让他赶快给女儿打电话，电话通了，他笑得别提多灿烂了。',
     sample_vn:'Gặp tôi, bác rối rít vừa xin lỗi vừa cảm ơn, nói rồi định bóc gói hàng, nhất định mời tôi ăn bánh Trung thu. Tôi bảo bác mau gọi cho con gái; điện thoại thông, bác cười rạng rỡ không tả xiết.',
     note:'又是 A 又是 B tả hai hành động dồn dập; 非要……不可 = nhất định phải. Có thể kết bằng: 看得出，女儿是他的幸福。'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🎧 NGHE THEO DẠNG ĐỀ HSK 6 — hội thoại ngắn / đoạn nói ngắn
// Sách HSK 6 không có sách bài tập nghe: tự soạn theo chủ đề bài 3
// ══════════════════════════════════════════════════════════════
var listenExamData = {
  intro: 'Đề HSK 6 phần nghe chỉ phát <b>một lượt</b>. Vì vậy ở đây cũng vậy: bấm nút loa nghe, ' +
         'trả lời ngay, rồi mới mở nguyên văn ra đối chiếu. Đừng mở nguyên văn trước — mở trước là mất tác dụng.',
  source: 'Soạn theo dạng đề HSK 6 · chủ đề bài 3',
  items: [
    {n:1,
     lines:[{sp:'女',zh:'你怎么浑身都是汗？外面下雨了？'},
            {sp:'男',zh:'别提了，电梯坏了，我是一口气走上十八楼的。'}],
     q:'男的为什么浑身是汗？',qvn:'Vì sao người đàn ông mồ hôi đầm đìa?',
     opts:['刚跑完步','电梯坏了，走楼梯上来的','被雨淋了','刚打完球'],ans:1,
     why:'Anh ấy nói 电梯坏了，我是一口气走上十八楼的 (thang máy hỏng, leo một mạch lên tầng 18). Mưa chỉ là câu đoán của cô gái.',
     words:['浑身']},

    {n:2,
     lines:[{sp:'男',zh:'这盒月饼是什么馅儿的？'},
            {sp:'女',zh:'豆沙的。我知道你不爱吃五仁的，特意挑了这种。'}],
     q:'女的为什么买这盒月饼？',qvn:'Vì sao người phụ nữ mua hộp bánh này?',
     opts:['因为最便宜','因为男的不喜欢五仁馅儿的','因为是自己做的','因为包装漂亮'],ans:1,
     why:'你不爱吃五仁的，特意挑了这种 — cô chọn nhân đậu đỏ vì biết anh không thích nhân thập cẩm.',
     words:['月饼','馅儿']},

    {n:3,
     lines:[{sp:'女',zh:'你还记得小李吗？他最近怎么样？'},
            {sp:'男',zh:'人家现在可是公司的骨干了，手下还有两个助手呢。'}],
     q:'关于小李，可以知道什么？',qvn:'Về Tiểu Lý, có thể biết được điều gì?',
     opts:['刚进公司','在公司很重要','想换工作','是男的的助手'],ans:1,
     why:'骨干 = trụ cột; 手下还有两个助手 = dưới quyền còn có hai trợ lý → Tiểu Lý rất quan trọng ở công ty.',
     words:['骨干','助手']},

    {n:4,
     lines:[{sp:'男',zh:'我给他拨了一下午电话，一直没人接，不会出什么事吧？'},
            {sp:'女',zh:'别瞎担心了，他下午在开会，手机可能调成静音了。'}],
     q:'女的是什么意思？',qvn:'Ý người phụ nữ là gì?',
     opts:['他可能出事了','男的应该马上去找他','男的不必过于担心','他换了手机号码'],ans:2,
     why:'别瞎担心了 (đừng lo hão — ôn 瞎 HSK 5) + lý do anh ta đang họp → không cần lo quá.',
     words:['拨']},

    {n:5,
     lines:[{sp:'女',zh:'这家网店的东西能买吗？我怕被骗。'},
            {sp:'男',zh:'放心吧，这家店信誉很好，我在那儿买过好几次了，从来没被欺骗过。'}],
     q:'男的觉得这家网店怎么样？',qvn:'Người đàn ông thấy cửa hàng online này thế nào?',
     opts:['东西太贵','可以相信','送货太慢','常常欺骗顾客'],ans:1,
     why:'信誉很好 + 从来没被欺骗过 → cửa hàng uy tín, tin được.',
     words:['信誉','欺骗']},

    {n:6,
     lines:[{sp:'男',zh:'听说你女儿考上一流大学了？真了不起！'},
            {sp:'女',zh:'哪里哪里，她就是运气好。不过这孩子要面子着呢，从来不让我们操心。'}],
     q:'女的觉得女儿怎么样？',qvn:'Người phụ nữ thấy con gái mình thế nào?',
     opts:['运气很差','常让父母操心','很懂事，不让父母操心','不爱面子'],ans:2,
     why:'要面子着呢 (rất có chí, biết giữ thể diện) + 从来不让我们操心 (chưa bao giờ để bố mẹ phải lo) → con rất hiểu chuyện. 哪里哪里 chỉ là lời khiêm tốn.',
     words:['一流','面子']},

    {n:7,
     lines:[{sp:'男',zh:'中秋节是中国的传统节日。这一天，在外地工作的人都盼着回家和家人团圆，一边吃月饼，一边赏月。即使不能回家，很多人也会给家里寄一盒月饼，表达自己的心意。'}],
     q:'根据这段话，不能回家的人常常会怎么做？',qvn:'Theo đoạn này, người không về nhà được thường sẽ làm gì?',
     opts:['给家里寄月饼','在外地赏月','给朋友打电话','去旅游'],ans:0,
     why:'即使不能回家，很多人也会给家里寄一盒月饼 — dù không về được cũng gửi bánh Trung thu về nhà.',
     words:['月饼']},

    {n:8,
     lines:[{sp:'女',zh:'老张，女儿给你打电话了？看你笑得多灿烂！'},
            {sp:'男',zh:'是啊，她说下个月回来看我。这孩子，从来没辜负过我的期望。'}],
     q:'老张为什么这么高兴？',qvn:'Vì sao ông Trương vui như vậy?',
     opts:['女儿升职了','女儿下个月回来看他','女儿给他寄了月饼','他找到了新工作'],ans:1,
     why:'她说下个月回来看我 — con gái nói tháng sau về thăm. Các phương án khác không được nhắc tới.',
     words:['灿烂','辜负','期望']}
  ]
};

// ══════════════════════════════════════════════════════════════
// 💬 TÌNH HUỐNG — HOÀN THÀNH HỘI THOẠI
// ══════════════════════════════════════════════════════════════
var situationData = {
  intro: 'Mỗi tình huống cho sẵn lời của người kia. Em viết lời đáp của mình, <b>bắt buộc dùng đúng từ/cấu trúc ghi ở ô yêu cầu</b>. ' +
         'Viết xong mới mở câu mẫu — câu mẫu chỉ là MỘT cách nói, em nói khác mà đúng yêu cầu vẫn được.',
  items: [
    {scene:'Bạn cùng phòng nhờ em nhận hộ bưu kiện.',
     a:{sp:'Bạn',zh:'我下午不在宿舍，有个快递，能帮我代收一下吗？',vn:'Chiều tớ không ở ký túc, có một bưu kiện, cậu nhận hộ tớ được không?'},
     need:['Nhận lời vui vẻ (这个忙好帮)','Dùng 只要……就……'],
     sample:'这个忙好帮，只要你告诉我快递几点到，我就在宿舍等着。',
     samplePy:'Zhège máng hǎo bāng, zhǐyào nǐ gàosu wǒ kuàidì jǐ diǎn dào, wǒ jiù zài sùshè děngzhe.',
     sampleVn:'Việc này dễ thôi, chỉ cần cậu bảo tớ mấy giờ hàng đến là tớ ở ký túc chờ.',
     tip:'这个忙好帮 (câu trong bài) = việc này dễ giúp; 好 + V = dễ V.'},

    {scene:'Mẹ gọi điện hỏi thăm khi em đi học xa nhà.',
     a:{sp:'Mẹ',zh:'你一个人在外面，身体怎么样？吃得好吗？',vn:'Con ở ngoài một mình, sức khoẻ thế nào? Ăn uống có tốt không?'},
     need:['Dùng A + 着呢','Dùng 别惦记'],
     sample:'妈，我身体好着呢，每天都吃得饱饱的，您别惦记。',
     samplePy:'Mā, wǒ shēntǐ hǎozhe ne, měi tiān dōu chī de bǎobǎo de, nín bié diànjì.',
     sampleVn:'Mẹ ơi, con khoẻ lắm, ngày nào cũng ăn no căng, mẹ đừng lo.',
     tip:'着呢 đã mang nghĩa mức độ cao — không thêm 很: nói 好着呢, không nói 很好着呢.'},

    {scene:'Bạn thân lo lắng trước kỳ thi.',
     a:{sp:'Bạn',zh:'明天就考试了，我紧张得睡不着。',vn:'Mai thi rồi, tớ căng thẳng đến mất ngủ.'},
     need:['Dùng 过于','Đưa ra một lời khuyên cụ thể'],
     sample:'别过于紧张，你复习得那么认真，早点儿睡吧，明天正常发挥就行了。',
     samplePy:'Bié guòyú jǐnzhāng, nǐ fùxí de nàme rènzhēn, zǎo diǎnr shuì ba, míngtiān zhèngcháng fāhuī jiù xíng le.',
     sampleVn:'Đừng căng thẳng quá, cậu ôn chăm thế cơ mà, ngủ sớm đi, mai làm bài bình thường là được.',
     tip:'过于 thường đi với tính từ/động từ hai âm tiết: 过于紧张, 过于担心.'},

    {scene:'Bạn hỏi em về cuốn sách tham khảo em vừa đọc.',
     a:{sp:'Bạn',zh:'那本书你看完了吗？写得怎么样？',vn:'Cuốn sách đó cậu đọc xong chưa? Viết thế nào?'},
     need:['Dùng V + 了 + 一番','Nêu nhận xét của mình'],
     sample:'看完了，我还把重要的地方认真研究了一番，写得真不错。',
     samplePy:'Kàn wán le, wǒ hái bǎ zhòngyào de dìfang rènzhēn yánjiūle yì fān, xiě de zhēn búcuò.',
     sampleVn:'Đọc xong rồi, tớ còn nghiên cứu kỹ một lượt những chỗ quan trọng, viết hay thật.',
     tip:'番 dùng cho hành động tốn thời gian, công sức; số từ thường là 一: 研究了一番, 打量了一番.'},

    {scene:'Một bạn cùng lớp liên tục khoe điểm cao.',
     a:{sp:'Bạn',zh:'你看，这次我又考了第一名！上次也是，上上次也是……',vn:'Cậu xem, lần này tớ lại đứng nhất! Lần trước cũng thế, lần trước nữa cũng thế…'},
     need:['Dùng 炫耀','Góp ý khéo léo'],
     sample:'恭喜你！不过别总是向大家炫耀，别人听了可能会不舒服。',
     samplePy:'Gōngxǐ nǐ! Búguò bié zǒngshì xiàng dàjiā xuànyào, biérén tīngle kěnéng huì bù shūfu.',
     sampleVn:'Chúc mừng cậu! Nhưng đừng lúc nào cũng khoe với mọi người, người khác nghe có thể thấy khó chịu.',
     tip:'向 + người + 炫耀; mở lời bằng 恭喜 rồi mới góp ý (不过……) cho khéo.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🎯 NÓI SAO CHO HAY — 得体 / 语体
// ══════════════════════════════════════════════════════════════
var registerData = {
  intro: 'Ở đây <b>cả hai câu đều đúng ngữ pháp</b> — không có câu sai. Việc của em là chọn câu <b>PHÙ HỢP HƠN</b> với hoàn cảnh. ' +
         'Lên HSK 6, chọn đúng sắc thái khẩu ngữ / văn viết quan trọng không kém dùng đúng ngữ pháp.',
  items: [
    {scene:'Em viết thư cảm ơn trang trọng gửi thầy hiệu trưởng.',
     a:'您的一番期望，我一定不会辜负。',b:'您放心，我肯定不给您丢人。',better:'a',
     why:'辜负 + 一番期望 là cách nói trang trọng, lễ phép. 丢人 là khẩu ngữ thân mật, hợp khi người nhà nói với nhau (như bác Trương dặn con gái).'},

    {scene:'Em nhắn tin cho mẹ khi đi học xa nhà.',
     a:'妈，我好着呢，别惦记。',b:'母亲大人，本人一切安好，请勿挂念。',better:'a',
     why:'Với mẹ dùng khẩu ngữ thân mật: 好着呢, 别惦记. Câu b trang trọng như thư từ ngày xưa, nhắn tin cho mẹ nghe xa cách và buồn cười.'},

    {scene:'Em viết báo cáo tổng kết hoạt động cho câu lạc bộ.',
     a:'由于准备时间过于匆忙，本次活动存在一些问题。',b:'准备时间太赶了，这次活动有点儿乱七八糟的。',better:'a',
     why:'Văn bản tổng kết dùng 由于, 过于 (văn viết), 存在问题. 太赶了, 乱七八糟 là khẩu ngữ, không hợp báo cáo.'},

    {scene:'Ở nhà ga, em muốn nhờ người bên cạnh (người lạ) trông hộ hành lý một lát.',
     a:'不好意思，拜托您帮我看一下行李，我马上回来。',b:'帮我看着行李。',better:'a',
     why:'Nhờ người lạ việc gì dùng 不好意思 + 拜托您 cho lịch sự. Câu b cụt lủn như ra lệnh.'},

    {scene:'Em kể với bạn thân về ông nội mình.',
     a:'我爷爷身体好着呢，每天都去公园跑步。',b:'我祖父身体状况良好，每日前往公园进行跑步锻炼。',better:'a',
     why:'Nói chuyện với bạn dùng khẩu ngữ: 爷爷, 好着呢. Câu b giống văn bản báo cáo, nói chuyện thường ngày nghe rất gượng.'},

    {scene:'Em viết bài văn miêu tả nhân vật nộp cô giáo.',
     a:'他饱经沧桑的脸上流露出朴实。',b:'他的脸看起来很老，人很老实。',better:'a',
     why:'Văn miêu tả cần từ ngữ gợi hình, văn viết: 饱经沧桑, 流露出朴实. Câu b đúng nhưng đơn giản, nhạt như văn nói.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🗣️ KỂ LẠI BÀI ĐỌC — theo bảng 练习5 của sách
// ══════════════════════════════════════════════════════════════
var retellData = {
  intro: 'Đây là bài tập 5 trong sách: <b>根据提示，简述课文主要内容</b> — kể lại câu chuyện bằng lời của chính em, ' +
         'KHÔNG đọc thuộc lòng. Nhìn dàn ý (câu hỏi + gợi ý của sách) và các từ khoá bên dưới, bấm ghi âm rồi kể khoảng 1–2 phút.',
  outline: [
    {step:'“我”在公司楼下遇到的那个男人是什么样的？', cue:'①……模样　②脸：　③手：　④胡须：　⑤口音：', words:['模样','饱经沧桑','流露','朴实','过于','操劳','胡须','起码','口音']},
    {step:'这个男人想拜托“我”做什么？', cue:'①女儿在……工作，……节快到了，女儿想给……寄……　②可……白天在……，地址……　③……请我代收……', words:['月饼','拜托','乡镇','原先','裁缝','港口']},
    {step:'他为什么找到“我”帮忙？', cue:'斯斯文文、心眼儿、信誉', words:['斯文','心眼儿','信誉','欺骗']},
    {step:'他的女儿工作怎么样？', cue:'硕士、学位、一流、主管、骨干', words:['学位','一流','主管','助手','骨干']},
    {step:'“我”收到包裹后，做了什么？', cue:'拨打、发短信、不安、往工地跑、找到', words:['拨','仍旧','隐约','浑身']},
    {step:'他跟“我”见面后，做了什么？', cue:'又是……又是……、非……不可、给女儿打电话', words:['馅儿','灿烂','惦记','丢人','炫耀','面子','辜负','期望']}
  ],
  checklist: [
    'Kể đủ cả 6 ý theo bảng bài tập 5 chưa, hay bỏ mất phần nào?',
    'Có nói rõ thời gian (trước Trung thu, sáng sớm, trưa ngày thứ ba) và địa điểm không?',
    'Có dùng các từ gợi ý của sách: 模样, 斯斯文文, 心眼儿, 信誉, 一流, 骨干, 拨打 không?',
    'Có dùng được hai cấu trúc 又是……又是…… và 非……不可 ở đoạn cuối không?',
    'Có kết bằng ý nghĩa câu chuyện (看得出，女儿是他的幸福) và kể bằng LỜI MÌNH không?'
  ]
};

// ══════════════════════════════════════════
// SGK · Bài tập trong sách (tr. 38–42) — đáp án theo đáp án sách
// ══════════════════════════════════════════
var sgkData = [
  {kieu:'mr', de:'模仿例子，写出更多的词语', vn:'Bắt chước ví dụ, viết thêm nhiều từ (chứa chữ có dấu chấm bên dưới)',
   vd:{tu:'口音', chu:'音', ds:['声音','录音','拼音','音乐']},
   cau:[
     {tu:'朴实', chu:'实', dap:['事实','充实','实际','实在'], them:['诚实','老实','真实','确实','现实','实话'],
      giai:'实 trong 朴实 nghĩa là thật, chân thật (không giả dối, không phô trương): 诚实, 老实, 真实.'},
     {tu:'过于', chu:'过', dap:['过分','过程','过错','经过'], them:['过度','过量','超过','过奖','过时','过期'],
      giai:'过 trong 过于 = vượt quá (mức độ): 过分, 过度, 超过. Đáp án sách còn liệt kê từ có 过 nghĩa "trải qua" (过程, 经过).'},
     {tu:'一流', chu:'流', dap:['水流','电流','河流','流利'], them:['二流','三流','上流','名流','主流'],
      giai:'流 trong 一流 = hạng, đẳng cấp (二流, 三流, 上流社会). Đáp án sách mở rộng theo chữ 流 nghĩa "dòng chảy" (水流, 河流) và "trôi chảy" (流利).'},
     {tu:'惦记', chu:'记', dap:['牢记','日记','记忆','记录'], them:['记得','记住','忘记','记性','笔记','铭记'],
      giai:'记 = nhớ, ghi nhớ (牢记, 记得, 忘记) hoặc ghi lại (日记, 记录, 笔记).'}
   ]},

  {kieu:'gx', de:'用所给词语或结构改写句子', vn:'Dùng từ hoặc cấu trúc cho sẵn viết lại câu',
   cau:[
     {s:'我花了三天时间，把那篇文章从头到尾研究了一遍。', tu:'番', dap:'我花了三天时间，把那篇文章从头到尾研究了一番。',
      giai:'Thay 遍 bằng 番: nhấn mạnh việc nghiên cứu tốn nhiều thời gian, công sức (V + 了 + 一番).'},
     {s:'那个好心人修好了我的自行车。', tu:'把……给……', dap:'那个好心人把我的自行车给修好了。',
      giai:'把 + tân ngữ + 给 + V + bổ ngữ: 给 (khẩu ngữ) đứng ngay trước động từ, nhấn mạnh tác động lên tân ngữ — giống 把收到的月饼给吃了 trong bài.'},
     {s:'他在北京居住了40多年，可以说是个地道的北京人了。', tu:'算得上', dap:'他在北京居住了40多年，算得上是个地道的北京人了。',
      giai:'算得上(是) = có thể coi là, đủ để được xem là (thay cho 可以说是).'},
     {s:'晚餐会上，有中餐，有西餐，丰盛极了。', tu:'又是……又是……', dap:'晚餐会上，又是中餐，又是西餐，丰盛极了。',
      giai:'又是 A 又是 B liệt kê nhiều thứ/việc, nhấn mạnh sự phong phú hoặc dồn dập.'},
     {s:'要学好汉语，一定得努力，除此以外，没有别的好方法。', tu:'非……不可', dap:'要学好汉语，非努力不可，除此以外，没有别的好方法。',
      giai:'非 + V + 不可 = nhất định phải, không có cách khác (thay cho 一定得).'},
     {s:'别烦我，我太忙了，让我安静一会儿吧。', tu:'着呢', dap:'别烦我，我忙着呢，让我安静一会儿吧。',
      giai:'A + 着呢 = … lắm (khẩu ngữ, nhấn mạnh mức độ); dùng 着呢 thì bỏ 太……了.'}
   ]},

  {kieu:'kho', de:'选择合适的词语填空', vn:'Chọn từ thích hợp điền vào chỗ trống (đoạn 1)', tu:['操劳','骨干','辜负','月饼','期望'],
   cau:[
     {s:'大学毕业后，我到了一家贸易公司，工作努力勤奋，现在也算得上是公司的＿＿了。中秋节快到了，我打算给父母送盒＿＿表达心意，因为父母为我们＿＿了半辈子，现在也该享享福了。我努力工作就是为了不＿＿父母对我的＿＿。',
      dap:['骨干','月饼','操劳','辜负','期望']}
   ]},

  {kieu:'kho', de:'选择合适的词语填空', vn:'Chọn từ thích hợp điền vào chỗ trống (đoạn 2)', tu:['拨','起码','隐约','仍旧','拜托'],
   cau:[
     {s:'昨天我＿＿打好朋友小王的电话，却一直无人接听，直到今天早上＿＿没有他的音信。我心中＿＿有种不安的感觉，便给小王单位打了个电话，想＿＿他的同事查看一下小王的情况，同事告诉我，小王的手机坏了，＿＿要一个星期才能修好，知道小王没事，我就放心了。',
      dap:['拨','仍旧','隐约','拜托','起码']}
   ]},

  {kieu:'mp', de:'阅读语段，模仿造句', vn:'Đọc đoạn văn, bắt chước đặt câu',
   cau:[
     {mau:'我马上拨打张师傅的电话，【却】无人接听，给他发短信，他【也】不回，【直到】下班，【仍旧】没有音信。',
      khung:'我＿＿，却＿＿，＿＿，他也＿＿，直到＿＿，仍旧＿＿。',
      dap:['昨天晚上给小李打了好几次电话','一直没人接','我在微信上给他留言','没回','今天中午','联系不上他'],
      giai:'Chuỗi 却 (kết quả trái mong đợi) → 也 (việc thứ hai cũng không được) → 直到……仍旧…… (mãi đến … vẫn …): kể một lần liên lạc mãi không được.'},
     {mau:'他见了我【又是】道歉【又是】感谢，说今天特别忙，手机没电了都不知道。说着就要拆包裹，【非】要请我吃月饼【不可】。',
      khung:'上个星期我帮了同学一个忙，他见了我又是＿＿又是＿＿，说如果没有我，他真不知道该怎么办好了。说着还递给我一个包装很漂亮的礼物，非＿＿不可。',
      dap:['感谢','夸奖','要我收下'],
      giai:'又是 A 又是 B tả hai hành động dồn dập; 非 + (要) + V + 不可 = nhất quyết phải ….'}
   ]},

  {kieu:'bc', de:'指出下列句子的错误，并提出修改建议', vn:'Chỉ ra lỗi sai của các câu sau và đề xuất cách sửa (病句类型：词语误用)',
   cau:[
     {s:'因为是冬天，没有什么人到山上来玩儿。我站在山顶上，空气很清凉。', sai:'清凉', loai:'实词误用',
      dap:'因为是冬天，没有什么人到山上来玩儿。我站在山顶上，空气很清新。',
      giai:'清凉 là mát mẻ dễ chịu (thường nói về mùa hè); mùa đông trên đỉnh núi, muốn nói không khí trong lành phải dùng 清新.'},
     {s:'我的腿受伤了，不能去滑雪，我很眼红我的朋友们。', sai:'眼红', loai:'语体词误用',
      dap:'我的腿受伤了，不能去滑雪，我很羡慕我的朋友们。',
      giai:'眼红 là khẩu ngữ, mang sắc thái ghen tức, đố kỵ; chỉ muốn nói "ước gì mình cũng được như bạn" thì dùng 羡慕.'},
     {s:'到北京来的时候，我带来一个好玩儿的U盘，偶然，我的同屋也带来一个。', sai:'偶然', loai:'关联词误用',
      dap:'到北京来的时候，我带来一个好玩儿的U盘，而且，我的同屋也带来一个。',
      giai:'偶然 là tính từ/phó từ "tình cờ", không làm từ nối giữa hai vế. Đáp án sách thay bằng 而且; cũng có thể nói 巧的是.'},
     {s:'有一天在书店，我看了一个小偷，偷了本书。', sai:'看了', loai:'实词误用',
      dap:'有一天在书店，我看到了一个小偷，偷了本书。',
      giai:'看 chỉ hành động nhìn; muốn nói "nhìn thấy, bắt gặp" phải dùng 看到 / 看见 (động từ + bổ ngữ kết quả).'},
     {s:'如果不修建这些水利工程，遇到严重的水旱灾害，其后果不可思议。', sai:'不可思议', loai:'成语误用',
      dap:'如果不修建这些水利工程，遇到严重的水旱灾害，其后果不堪设想。',
      giai:'不可思议 = khó tin, không thể hiểu nổi (thường về điều kỳ lạ); nói hậu quả xấu nghiêm trọng đến mức không dám nghĩ tới thì dùng 不堪设想.'}
   ]}
];
