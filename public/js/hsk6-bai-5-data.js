// ══════════════════════════════════════════
// DATA — HSK6 Bài 5: 学一门外语需要理由吗？ (Học ngoại ngữ cần lý do ư?)
// 第二单元 不甘平庸 · Nguồn: HSK标准教程6上 (tr. 54–64)
// Bài khoá: 学一门外语需要理由吗 (832 chữ) — 改编自《北京青年报》同名文章，作者：孙小宁
// ══════════════════════════════════════════

var vocabData = [
  {n:1,zh:'迫不及待',py:'pòbùjídài',pos:'Thành ngữ',vn:'nóng lòng, không chờ được nữa',hv:'bách bất cập đãi',em:'⏩',lesson:1,
   explain:['Gấp đến mức không thể chờ thêm: 迫 = gấp, 不及 = không kịp, 待 = chờ.','Thường làm trạng ngữ: 迫不及待地 + V; cũng làm vị ngữ: 他有点儿迫不及待了.'],
   usage:'迫不及待地 + động từ (打开 / 想 / 跑去…). Thành ngữ đã đủ nghĩa, không nói 很迫不及待.',
   collo:['迫不及待地打开','迫不及待地想','有点儿迫不及待'],
   ex_zh:'我想学一门外语，迫不及待地想不再依靠翻译，独自阅读原文。',ex_py:'Wǒ xiǎng xué yì mén wàiyǔ, pòbùjídài de xiǎng bú zài yīkào fānyì, dúzì yuèdú yuánwén.',ex_vn:'Tôi muốn học một ngoại ngữ, nóng lòng muốn không phải dựa vào bản dịch nữa mà tự mình đọc nguyên văn.',
   exList:[
     {zh:'我想学一门外语，迫不及待地想不再依靠翻译，独自阅读原文。',py:'Wǒ xiǎng xué yì mén wàiyǔ, pòbùjídài de xiǎng bú zài yīkào fānyì, dúzì yuèdú yuánwén.',vn:'Tôi muốn học một ngoại ngữ, nóng lòng muốn không phải dựa vào bản dịch nữa mà tự mình đọc nguyên văn.'},
     {zh:'成绩一出来，他就迫不及待地打开手机查分数。',py:'Chéngjì yì chūlái, tā jiù pòbùjídài de dǎkāi shǒujī chá fēnshù.',vn:'Điểm vừa có, cậu ấy đã nóng lòng mở điện thoại ra tra.'},
     {zh:'收到礼物以后，弟弟迫不及待地拆开了包装。',py:'Shōudào lǐwù yǐhòu, dìdi pòbùjídài de chāikāile bāozhuāng.',vn:'Nhận được quà xong, em trai nóng lòng xé ngay lớp giấy gói.'}
   ],
   colloFull:[
     {zh:'迫不及待地打开',py:'pòbùjídài de dǎkāi',vn:'nóng lòng mở ra'},
     {zh:'迫不及待地想',py:'pòbùjídài de xiǎng',vn:'nóng lòng muốn'},
     {zh:'有点儿迫不及待',py:'yǒudiǎnr pòbùjídài',vn:'hơi sốt ruột'},
     {zh:'迫不及待地跑过去',py:'pòbùjídài de pǎo guòqu',vn:'vội chạy ngay tới'}
   ],
   patterns:[
     {s:'迫不及待地 + V',m:'Nóng lòng làm gì ngay'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vừa tan học, cậu ấy đã nóng lòng chạy về nhà.',answer:'一放学，他就迫不及待地跑回家了。',answerPy:'Yí fàngxué, tā jiù pòbùjídài de pǎo huí jiā le.',
      note:'一……就…… nối hai việc xảy ra liền nhau; 迫不及待地 đứng ngay trước động từ.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Dù phải thức khuya, cô ấy cũng nóng lòng muốn đọc xong cuốn tiểu thuyết đó.',answer:'哪怕要熬夜，她也迫不及待地想看完那本小说。',answerPy:'Nǎpà yào áoyè, tā yě pòbùjídài de xiǎng kànwán nà běn xiǎoshuō.',
      note:'哪怕……也…… nêu giả thiết nhượng bộ; 看完 là động từ + bổ ngữ kết quả.',pair:'哪怕……也……'}
   ]},

  {n:2,zh:'依靠',py:'yīkào',pos:'Động từ',vn:'dựa vào, phụ thuộc vào; chỗ dựa',hv:'y kháo',em:'🤝',lesson:1,
   explain:['Dựa vào người / vật khác để đạt mục đích: 依靠翻译, 依靠父母.','Cũng là danh từ: chỗ dựa (他是全家的依靠).'],
   usage:'依靠 + người / vật; 靠 là dạng khẩu ngữ. Đối lập với 独立, 自己.',
   collo:['依靠翻译','依靠父母','依靠自己','失去依靠'],
   ex_zh:'学习一门外语，光依靠热情是远远不够的。',ex_py:'Xuéxí yì mén wàiyǔ, guāng yīkào rèqíng shì yuǎnyuǎn bú gòu de.',ex_vn:'Học một ngoại ngữ mà chỉ dựa vào nhiệt tình thì còn lâu mới đủ.',
   exList:[
     {zh:'学习一门外语，光依靠热情是远远不够的。',py:'Xuéxí yì mén wàiyǔ, guāng yīkào rèqíng shì yuǎnyuǎn bú gòu de.',vn:'Học một ngoại ngữ mà chỉ dựa vào nhiệt tình thì còn lâu mới đủ.'},
     {zh:'我想不再依靠翻译，独自阅读原文。',py:'Wǒ xiǎng bú zài yīkào fānyì, dúzì yuèdú yuánwén.',vn:'Tôi muốn không phải dựa vào bản dịch nữa, tự mình đọc nguyên văn.'},
     {zh:'上了大学以后，他不再依靠父母，自己打工挣学费。',py:'Shàngle dàxué yǐhòu, tā bú zài yīkào fùmǔ, zìjǐ dǎgōng zhèng xuéfèi.',vn:'Lên đại học, cậu ấy không dựa vào bố mẹ nữa mà tự đi làm thêm kiếm học phí.'}
   ],
   colloFull:[
     {zh:'依靠翻译',py:'yīkào fānyì',vn:'dựa vào bản dịch'},
     {zh:'依靠父母',py:'yīkào fùmǔ',vn:'dựa vào bố mẹ'},
     {zh:'依靠自己',py:'yīkào zìjǐ',vn:'dựa vào chính mình'},
     {zh:'失去依靠',py:'shīqù yīkào',vn:'mất chỗ dựa'},
     {zh:'生活的依靠',py:'shēnghuó de yīkào',vn:'chỗ dựa cuộc sống'}
   ],
   patterns:[
     {s:'依靠 + N + (来) + V',m:'Dựa vào… để làm…'},
     {s:'不再依靠……',m:'Không còn dựa vào… nữa'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Muốn thành công thì phải dựa vào chính mình, chứ không thể chỉ dựa vào bố mẹ.',answer:'要想成功，就得依靠自己，而不能只依靠父母。',answerPy:'Yào xiǎng chénggōng, jiù děi yīkào zìjǐ, ér bù néng zhǐ yīkào fùmǔ.',
      note:'要想……就得…… nêu điều kiện cần; 而 nối hai vế đối lập.',pair:'要想……就……'},
     {promptLang:'vi',prompt:'Chỉ khi hiểu được ngữ pháp, em mới có thể không phụ thuộc vào từ điển.',answer:'只有弄懂了语法，你才能不依靠字典。',answerPy:'Zhǐyǒu nòngdǒngle yǔfǎ, nǐ cái néng bù yīkào zìdiǎn.',
      note:'只有……才…… nêu điều kiện duy nhất; 才 đứng sau chủ ngữ vế sau.',pair:'只有……才……'}
   ]},

  {n:3,zh:'借助',py:'jièzhù',pos:'Động từ',vn:'nhờ vào, nhờ sự giúp đỡ của',hv:'tá trợ',em:'🔍',lesson:1,
   explain:['Nhờ sức của người khác hoặc của công cụ để làm việc gì: 借助字典, 借助网络.','Văn viết, thường có động từ thứ hai theo sau: 借助……（来）+ V.'],
   usage:'借助 + công cụ / phương tiện + V. Hay gặp: 借助字典, 借助工具, 借助别人的力量.',
   collo:['借助字典','借助网络','借助工具','借助别人的力量'],
   ex_zh:'我想独自阅读原文，哪怕是借助字典勉强查阅呢。',ex_py:'Wǒ xiǎng dúzì yuèdú yuánwén, nǎpà shì jièzhù zìdiǎn miǎnqiǎng cháyuè ne.',ex_vn:'Tôi muốn tự mình đọc nguyên văn, dù có phải nhờ từ điển mà tra cứu chật vật cũng được.',
   exList:[
     {zh:'我想独自阅读原文，哪怕是借助字典勉强查阅呢。',py:'Wǒ xiǎng dúzì yuèdú yuánwén, nǎpà shì jièzhù zìdiǎn miǎnqiǎng cháyuè ne.',vn:'Tôi muốn tự mình đọc nguyên văn, dù có phải nhờ từ điển mà tra cứu chật vật cũng được.'},
     {zh:'借助网络，我们可以随时随地学习外语。',py:'Jièzhù wǎngluò, wǒmen kěyǐ suíshí suídì xuéxí wàiyǔ.',vn:'Nhờ mạng internet, chúng ta có thể học ngoại ngữ mọi lúc mọi nơi.'},
     {zh:'他借助望远镜看清了远处的小鸟。',py:'Tā jièzhù wàngyuǎnjìng kànqīngle yuǎnchù de xiǎo niǎo.',vn:'Nhờ ống nhòm, cậu ấy nhìn rõ con chim nhỏ đằng xa.'}
   ],
   colloFull:[
     {zh:'借助字典',py:'jièzhù zìdiǎn',vn:'nhờ từ điển'},
     {zh:'借助网络',py:'jièzhù wǎngluò',vn:'nhờ mạng internet'},
     {zh:'借助工具',py:'jièzhù gōngjù',vn:'nhờ công cụ'},
     {zh:'借助别人的力量',py:'jièzhù biérén de lìliang',vn:'nhờ sức người khác'},
     {zh:'借助翻译软件',py:'jièzhù fānyì ruǎnjiàn',vn:'nhờ phần mềm dịch'}
   ],
   patterns:[
     {s:'借助 + công cụ + (来) + V',m:'Nhờ vào… để…'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy có thể nhờ phần mềm dịch, nhưng tôi vẫn muốn tự mình đọc hiểu bài khoá.',answer:'虽然可以借助翻译软件，但是我还是想自己看懂课文。',answerPy:'Suīrán kěyǐ jièzhù fānyì ruǎnjiàn, dànshì wǒ háishi xiǎng zìjǐ kàndǒng kèwén.',
      note:'虽然……但是…… nhượng bộ; 看懂 = động từ + bổ ngữ kết quả.',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Nhờ bản đồ trên điện thoại, chúng tôi rất nhanh đã tìm được khách sạn.',answer:'借助手机地图，我们很快就找到了酒店。',answerPy:'Jièzhù shǒujī dìtú, wǒmen hěn kuài jiù zhǎodàole jiǔdiàn.',
      note:'借助…… làm trạng ngữ đầu câu; 很快就 + V + 了 nhấn mạnh việc xảy ra sớm.',pair:'很快就……了'}
   ]},

  {n:4,zh:'勉强',py:'miǎnqiǎng',pos:'Tính từ',vn:'gắng gượng, cố gượng; miễn cưỡng',hv:'miễn cưỡng',em:'😣',lesson:1,
   explain:['Năng lực chưa đủ nhưng vẫn cố làm: 勉强查阅, 勉强及格.','Không tự nguyện, làm cho có: 他勉强答应了. Làm động từ: ép người khác (别勉强他).'],
   usage:'勉强 + V (勉强及格 / 勉强答应); 别勉强 + người; 有点儿勉强.',
   collo:['勉强查阅','勉强及格','勉强答应','别勉强自己'],
   ex_zh:'这次考试我只是勉强及格，还得继续努力。',ex_py:'Zhè cì kǎoshì wǒ zhǐshì miǎnqiǎng jígé, hái děi jìxù nǔlì.',ex_vn:'Kỳ thi này tôi chỉ vừa đủ điểm đỗ, còn phải tiếp tục cố gắng.',
   exList:[
     {zh:'这次考试我只是勉强及格，还得继续努力。',py:'Zhè cì kǎoshì wǒ zhǐshì miǎnqiǎng jígé, hái děi jìxù nǔlì.',vn:'Kỳ thi này tôi chỉ vừa đủ điểm đỗ, còn phải tiếp tục cố gắng.'},
     {zh:'我想独自阅读原文，哪怕是借助字典勉强查阅呢。',py:'Wǒ xiǎng dúzì yuèdú yuánwén, nǎpà shì jièzhù zìdiǎn miǎnqiǎng cháyuè ne.',vn:'Tôi muốn tự mình đọc nguyên văn, dù có phải nhờ từ điển mà tra cứu chật vật cũng được.'},
     {zh:'他不想去，就别勉强他了。',py:'Tā bù xiǎng qù, jiù bié miǎnqiǎng tā le.',vn:'Cậu ấy không muốn đi thì đừng ép cậu ấy nữa.'}
   ],
   colloFull:[
     {zh:'勉强查阅',py:'miǎnqiǎng cháyuè',vn:'cố gắng tra cứu'},
     {zh:'勉强及格',py:'miǎnqiǎng jígé',vn:'vừa đủ đỗ'},
     {zh:'勉强答应',py:'miǎnqiǎng dāying',vn:'miễn cưỡng đồng ý'},
     {zh:'别勉强自己',py:'bié miǎnqiǎng zìjǐ',vn:'đừng ép bản thân'},
     {zh:'勉强的笑容',py:'miǎnqiǎng de xiàoróng',vn:'nụ cười gượng'}
   ],
   patterns:[
     {s:'勉强 + V',m:'Gắng gượng / miễn cưỡng làm gì'},
     {s:'别勉强 + người',m:'Đừng ép ai'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nếu thật sự mệt thì đừng ép bản thân nữa, nghỉ một lát đi.',answer:'要是真的累了，就别勉强自己了，休息一会儿吧。',answerPy:'Yàoshi zhēn de lèi le, jiù bié miǎnqiǎng zìjǐ le, xiūxi yíhuìr ba.',
      note:'要是……就…… nêu giả thiết; 别……了 khuyên dừng lại.',pair:'要是……就……'},
     {promptLang:'vi',prompt:'Anh ấy tuy đã đồng ý, nhưng nhìn ra được là rất miễn cưỡng.',answer:'他虽然答应了，但看得出来很勉强。',answerPy:'Tā suīrán dāying le, dàn kàn de chūlái hěn miǎnqiǎng.',
      note:'看得出来 là bổ ngữ khả năng; 勉强 làm vị ngữ, đi với 很.',pair:'看得出来'}
   ]},

  {n:5,zh:'机构',py:'jīgòu',pos:'Danh từ',vn:'cơ quan, tổ chức, đơn vị',hv:'cơ cấu',em:'🏢',lesson:1,
   explain:['Đơn vị, tổ chức làm một việc nhất định: 语言学习机构, 教育机构, 政府机构.','Bẫy Hán–Việt: "cơ cấu" tiếng Việt thường là cấu trúc (结构); 机构 tiếng Trung chủ yếu là cơ quan, tổ chức, trung tâm.'],
   usage:'Lượng từ 家 / 个. Hay gặp: 语言学习机构, 培训机构, 研究机构, 政府机构.',
   collo:['学习机构','培训机构','研究机构','一家机构'],
   ex_zh:'我很快找到了一家语言学习机构。',ex_py:'Wǒ hěn kuài zhǎodàole yì jiā yǔyán xuéxí jīgòu.',ex_vn:'Tôi nhanh chóng tìm được một trung tâm học ngoại ngữ.',
   exList:[
     {zh:'我很快找到了一家语言学习机构。',py:'Wǒ hěn kuài zhǎodàole yì jiā yǔyán xuéxí jīgòu.',vn:'Tôi nhanh chóng tìm được một trung tâm học ngoại ngữ.'},
     {zh:'暑假里，很多家长给孩子报了培训机构的课。',py:'Shǔjià li, hěn duō jiāzhǎng gěi háizi bàole péixùn jīgòu de kè.',vn:'Nghỉ hè, nhiều phụ huynh đăng ký cho con học ở các trung tâm đào tạo.'},
     {zh:'这家研究机构专门研究环境保护问题。',py:'Zhè jiā yánjiū jīgòu zhuānmén yánjiū huánjìng bǎohù wèntí.',vn:'Viện nghiên cứu này chuyên nghiên cứu vấn đề bảo vệ môi trường.'}
   ],
   colloFull:[
     {zh:'学习机构',py:'xuéxí jīgòu',vn:'trung tâm học tập'},
     {zh:'培训机构',py:'péixùn jīgòu',vn:'trung tâm đào tạo'},
     {zh:'研究机构',py:'yánjiū jīgòu',vn:'cơ quan nghiên cứu'},
     {zh:'一家机构',py:'yì jiā jīgòu',vn:'một tổ chức'},
     {zh:'政府机构',py:'zhèngfǔ jīgòu',vn:'cơ quan nhà nước'}
   ],
   patterns:[
     {s:'一家 + ……机构',m:'Một trung tâm / tổ chức…'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Trung tâm này không những học phí rẻ mà giáo viên cũng rất có trách nhiệm.',answer:'这家机构不但学费便宜，而且老师也很负责。',answerPy:'Zhè jiā jīgòu búdàn xuéfèi piányi, érqiě lǎoshī yě hěn fùzé.',
      note:'不但……而且…… tăng tiến; cùng một chủ ngữ thì 不但 đứng sau chủ ngữ.',pair:'不但……而且……'},
     {promptLang:'vi',prompt:'Trước khi chọn trung tâm đào tạo, tốt nhất nên đi học thử một buổi.',answer:'选择培训机构以前，最好先去试听一次课。',answerPy:'Xuǎnzé péixùn jīgòu yǐqián, zuìhǎo xiān qù shìtīng yí cì kè.',
      note:'……以前 làm trạng ngữ thời gian; 最好 + V = tốt nhất nên.',pair:'最好'}
   ]},

  {n:6,zh:'栋',py:'dòng',pos:'Lượng từ',vn:'tòa, căn (nhà)',hv:'đống',em:'🏬',lesson:1,
   explain:['Lượng từ cho nhà cửa, tòa nhà: 一栋楼, 一栋房子, 一栋别墅.','Gần nghĩa với 座 / 幢; 栋 hay dùng cho nhà nhiều tầng.'],
   usage:'Số từ + 栋 + 楼 / 房子 / 别墅. Không dùng cho núi, cầu (dùng 座).',
   collo:['一栋楼','一栋办公楼','一栋房子','这栋楼'],
   ex_zh:'它在离我家不远的一栋办公楼上。',ex_py:'Tā zài lí wǒ jiā bù yuǎn de yí dòng bàngōnglóu shang.',ex_vn:'Nó nằm trong một tòa nhà văn phòng cách nhà tôi không xa.',
   exList:[
     {zh:'它在离我家不远的一栋办公楼上。',py:'Tā zài lí wǒ jiā bù yuǎn de yí dòng bàngōnglóu shang.',vn:'Nó nằm trong một tòa nhà văn phòng cách nhà tôi không xa.'},
     {zh:'我们学校新建了一栋图书馆大楼。',py:'Wǒmen xuéxiào xīn jiànle yí dòng túshūguǎn dàlóu.',vn:'Trường chúng tôi mới xây một tòa nhà thư viện.'},
     {zh:'这栋楼一共有三十层，我家住在十八层。',py:'Zhè dòng lóu yígòng yǒu sānshí céng, wǒ jiā zhù zài shíbā céng.',vn:'Tòa nhà này có tổng cộng ba mươi tầng, nhà tôi ở tầng mười tám.'}
   ],
   colloFull:[
     {zh:'一栋楼',py:'yí dòng lóu',vn:'một tòa nhà'},
     {zh:'一栋办公楼',py:'yí dòng bàngōnglóu',vn:'một tòa nhà văn phòng'},
     {zh:'一栋房子',py:'yí dòng fángzi',vn:'một căn nhà'},
     {zh:'这栋楼',py:'zhè dòng lóu',vn:'tòa nhà này'},
     {zh:'两栋别墅',py:'liǎng dòng biéshù',vn:'hai căn biệt thự'}
   ],
   patterns:[
     {s:'Số từ + 栋 + 楼 / 房子',m:'Đếm tòa nhà, căn nhà'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Căn nhà ông nội để lại, cả nhà tôi đến giờ vẫn không nỡ bán.',answer:'爷爷留下的那栋房子，我们全家到现在都舍不得卖。',answerPy:'Yéye liúxià de nà dòng fángzi, wǒmen quánjiā dào xiànzài dōu shěbude mài.',
      note:'Tân ngữ đưa lên đầu câu làm chủ đề; 舍不得 + V = không nỡ.',pair:'舍不得'},
     {promptLang:'vi',prompt:'Từ cửa sổ có thể nhìn thấy tòa nhà văn phòng bên kia đường.',answer:'从窗户可以看到马路对面的那栋办公楼。',answerPy:'Cóng chuānghu kěyǐ kàndào mǎlù duìmiàn de nà dòng bàngōnglóu.',
      note:'从 + nơi chốn chỉ điểm xuất phát; 看到 = động từ + bổ ngữ kết quả.',pair:'从……'}
   ]},

  {n:7,zh:'兴致勃勃',py:'xìngzhì bóbó',pos:'Thành ngữ',vn:'vô cùng hào hứng',hv:'hứng trí bột bột',em:'🤩',lesson:1,
   explain:['兴致 = hứng thú, 勃勃 = dồi dào, bừng bừng → hứng khởi dâng trào.','Thường làm trạng ngữ (兴致勃勃地 + V) hoặc vị ngữ (大家都兴致勃勃的).'],
   usage:'兴致勃勃地 + 前去 / 参加 / 讨论 / 聊. Không thêm 很 phía trước.',
   collo:['兴致勃勃地前去','兴致勃勃地参加','兴致勃勃地讨论'],
   ex_zh:'这天我兴致勃勃地专程前去咨询。',ex_py:'Zhè tiān wǒ xìngzhì bóbó de zhuānchéng qiánqù zīxún.',ex_vn:'Hôm ấy tôi hào hứng cất công đến tận nơi để hỏi thông tin.',
   exList:[
     {zh:'这天我兴致勃勃地专程前去咨询。',py:'Zhè tiān wǒ xìngzhì bóbó de zhuānchéng qiánqù zīxún.',vn:'Hôm ấy tôi hào hứng cất công đến tận nơi để hỏi thông tin.'},
     {zh:'同学们兴致勃勃地讨论着周末去哪儿玩儿。',py:'Tóngxuémen xìngzhì bóbó de tǎolùnzhe zhōumò qù nǎr wánr.',vn:'Các bạn đang hào hứng bàn nhau cuối tuần đi đâu chơi.'},
     {zh:'爷爷兴致勃勃地给我们讲起了年轻时的故事。',py:'Yéye xìngzhì bóbó de gěi wǒmen jiǎngqǐle niánqīng shí de gùshi.',vn:'Ông hào hứng kể cho chúng tôi nghe chuyện hồi trẻ.'}
   ],
   colloFull:[
     {zh:'兴致勃勃地前去',py:'xìngzhì bóbó de qiánqù',vn:'hào hứng tìm đến'},
     {zh:'兴致勃勃地参加',py:'xìngzhì bóbó de cānjiā',vn:'hào hứng tham gia'},
     {zh:'兴致勃勃地讨论',py:'xìngzhì bóbó de tǎolùn',vn:'hào hứng bàn luận'},
     {zh:'兴致勃勃的样子',py:'xìngzhì bóbó de yàngzi',vn:'vẻ hào hứng'}
   ],
   patterns:[
     {s:'兴致勃勃地 + V',m:'Hào hứng làm gì'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vừa nghe nói được đi dã ngoại, bọn trẻ liền hào hứng chuẩn bị ngay.',answer:'一听说要去野餐，孩子们就兴致勃勃地准备起来了。',answerPy:'Yì tīngshuō yào qù yěcān, háizimen jiù xìngzhì bóbó de zhǔnbèi qǐlái le.',
      note:'V + 起来 = bắt đầu làm; 一……就…… nối hai việc liền nhau.',pair:'……起来'},
     {promptLang:'vi',prompt:'Anh ấy hào hứng đi phỏng vấn, không ngờ lại bị từ chối.',answer:'他兴致勃勃地去面试，没想到却被拒绝了。',answerPy:'Tā xìngzhì bóbó de qù miànshì, méi xiǎngdào què bèi jùjué le.',
      note:'没想到 + kết quả bất ngờ; 却 đứng trước động từ; câu bị động với 被.',pair:'没想到……却……'}
   ]},

  {n:8,zh:'专程',py:'zhuānchéng',pos:'Phó từ',vn:'đặc biệt đi (cất công một chuyến)',hv:'chuyên trình',em:'🚗',lesson:1,
   explain:['Đi một chuyến riêng CHỈ vì một việc: 专程来看你, 专程前去咨询.','Chỉ dùng cho hành động phải đi một quãng đường (来 / 去 / 赶 / 飞…), nhấn mạnh thái độ trịnh trọng, nghiêm túc.'],
   usage:'专程 + 来 / 去 / 赶到 / 前往 + mục đích. Khác 专门: 专门 dùng rộng hơn (xem phần 词语辨析).',
   collo:['专程前去','专程来看你','专程赶来','专程送你'],
   ex_zh:'他专程来机场送你。',ex_py:'Tā zhuānchéng lái jīchǎng sòng nǐ.',ex_vn:'Anh ấy cất công đến sân bay để tiễn bạn.',
   exList:[
     {zh:'他专程来机场送你。',py:'Tā zhuānchéng lái jīchǎng sòng nǐ.',vn:'Anh ấy cất công đến sân bay để tiễn bạn.'},
     {zh:'这天我兴致勃勃地专程前去咨询。',py:'Zhè tiān wǒ xìngzhì bóbó de zhuānchéng qiánqù zīxún.',vn:'Hôm ấy tôi hào hứng cất công đến tận nơi để hỏi thông tin.'},
     {zh:'听说奶奶病了，姑姑专程从上海赶了回来。',py:'Tīngshuō nǎinai bìng le, gūgu zhuānchéng cóng Shànghǎi gǎnle huílái.',vn:'Nghe tin bà ốm, cô tôi cất công từ Thượng Hải vội về.'}
   ],
   colloFull:[
     {zh:'专程前去',py:'zhuānchéng qiánqù',vn:'cất công đến'},
     {zh:'专程来看你',py:'zhuānchéng lái kàn nǐ',vn:'cất công đến thăm bạn'},
     {zh:'专程赶来',py:'zhuānchéng gǎnlái',vn:'cất công vội đến'},
     {zh:'专程送你',py:'zhuānchéng sòng nǐ',vn:'cất công đi tiễn bạn'},
     {zh:'专程拜访',py:'zhuānchéng bàifǎng',vn:'cất công đến thăm hỏi'}
   ],
   patterns:[
     {s:'专程 + 来 / 去 / 赶 + (nơi) + V',m:'Cất công đi một chuyến để…'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Lần này đến Hà Nội, tôi cất công đến để thăm thầy.',answer:'这次来河内，我是专程来看望老师的。',answerPy:'Zhè cì lái Hénèi, wǒ shì zhuānchéng lái kànwàng lǎoshī de.',
      note:'是……的 nhấn mạnh mục đích của việc đã xảy ra; 专程 đứng trước 来.',pair:'是……的'},
     {promptLang:'vi',prompt:'Anh ấy không những cất công đến đón tôi, mà còn giúp tôi xách hành lý.',answer:'他不仅专程来接我，还帮我拿行李。',answerPy:'Tā bùjǐn zhuānchéng lái jiē wǒ, hái bāng wǒ ná xíngli.',
      note:'不仅……还…… tăng tiến, vế sau thêm một việc nữa.',pair:'不仅……还……'}
   ]},

  {n:9,zh:'修养',py:'xiūyǎng',pos:'Danh từ',vn:'sự tu dưỡng, giáo dưỡng; trình độ (văn học, nghệ thuật)',hv:'tu dưỡng',em:'🎩',lesson:1,
   explain:['Thái độ cư xử đúng mực, lịch sự có được nhờ rèn luyện: 很有修养, 没有修养.','Trình độ về tri thức, nghệ thuật…: 文学修养, 艺术修养.'],
   usage:'很有修养 / 缺乏修养 / 提高修养 / 艺术修养. Là danh từ, đi với 有 / 没有.',
   collo:['很有修养','艺术修养','提高修养','缺乏修养'],
   ex_zh:'进了门，一位很有修养的女士迎上来。',ex_py:'Jìnle mén, yí wèi hěn yǒu xiūyǎng de nǚshì yíng shànglái.',ex_vn:'Vào cửa, một quý cô rất lịch thiệp ra đón.',
   exList:[
     {zh:'进了门，一位很有修养的女士迎上来。',py:'Jìnle mén, yí wèi hěn yǒu xiūyǎng de nǚshì yíng shànglái.',vn:'Vào cửa, một quý cô rất lịch thiệp ra đón.'},
     {zh:'一个人有没有修养，从他说话的态度就能看出来。',py:'Yí ge rén yǒu méiyǒu xiūyǎng, cóng tā shuōhuà de tàidu jiù néng kàn chūlái.',vn:'Một người có giáo dưỡng hay không, nhìn thái độ khi nói chuyện là thấy ngay.'},
     {zh:'多读好书可以提高一个人的文学修养。',py:'Duō dú hǎo shū kěyǐ tígāo yí ge rén de wénxué xiūyǎng.',vn:'Đọc nhiều sách hay có thể nâng cao trình độ văn học của một người.'}
   ],
   colloFull:[
     {zh:'很有修养',py:'hěn yǒu xiūyǎng',vn:'rất có giáo dưỡng'},
     {zh:'艺术修养',py:'yìshù xiūyǎng',vn:'trình độ nghệ thuật'},
     {zh:'提高修养',py:'tígāo xiūyǎng',vn:'nâng cao tu dưỡng'},
     {zh:'缺乏修养',py:'quēfá xiūyǎng',vn:'thiếu giáo dưỡng'},
     {zh:'文学修养',py:'wénxué xiūyǎng',vn:'trình độ văn học'}
   ],
   patterns:[
     {s:'很有 / 没有 + 修养',m:'Có / không có giáo dưỡng'},
     {s:'……的 + 文学 / 艺术修养',m:'Trình độ văn học / nghệ thuật của…'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Người có giáo dưỡng cho dù tức giận cũng sẽ không nói tục.',answer:'有修养的人即使生气了，也不会说脏话。',answerPy:'Yǒu xiūyǎng de rén jíshǐ shēngqì le, yě bú huì shuō zānghuà.',
      note:'即使……也…… giả thiết nhượng bộ: dù có… thì vẫn…',pair:'即使……也……'},
     {promptLang:'vi',prompt:'Sách đọc càng nhiều, trình độ văn học của em càng cao.',answer:'书读得越多，你的文学修养就越高。',answerPy:'Shū dú de yuè duō, nǐ de wénxué xiūyǎng jiù yuè gāo.',
      note:'越……越…… hai vế cùng tăng; vế sau có thể thêm 就.',pair:'越……越……'}
   ]},

  {n:10,zh:'接连',py:'jiēlián',pos:'Phó từ',vn:'liên tiếp, liên tục',hv:'tiếp liên',em:'🔗',lesson:1,
   explain:['Hết cái này đến cái khác, nối tiếp không ngừng: 接连不断, 接连下了三天雨.','Đứng trước động từ; hay đi với số lượng hoặc 不断.'],
   usage:'接连 + V + số lượng (接连问了三个问题); 接连不断 = liên miên không dứt.',
   collo:['接连不断','接连发生','接连下雨','接连几天'],
   ex_zh:'不料首先面对的是她接连不断的发问。',ex_py:'Búliào shǒuxiān miànduì de shì tā jiēlián búduàn de fāwèn.',ex_vn:'Không ngờ thứ đầu tiên phải đối mặt lại là những câu hỏi dồn dập không ngớt của cô ấy.',
   exList:[
     {zh:'不料首先面对的是她接连不断的发问。',py:'Búliào shǒuxiān miànduì de shì tā jiēlián búduàn de fāwèn.',vn:'Không ngờ thứ đầu tiên phải đối mặt lại là những câu hỏi dồn dập không ngớt của cô ấy.'},
     {zh:'晚会上惊喜接连不断，大家都很开心。',py:'Wǎnhuì shang jīngxǐ jiēlián búduàn, dàjiā dōu hěn kāixīn.',vn:'Trong buổi tiệc bất ngờ nối tiếp bất ngờ, ai cũng rất vui.'},
     {zh:'这个月他接连迟到了三次，被老师批评了。',py:'Zhège yuè tā jiēlián chídàole sān cì, bèi lǎoshī pīpíng le.',vn:'Tháng này cậu ấy liên tiếp đi muộn ba lần, bị thầy phê bình.'}
   ],
   colloFull:[
     {zh:'接连不断',py:'jiēlián búduàn',vn:'liên miên không dứt'},
     {zh:'接连发生',py:'jiēlián fāshēng',vn:'liên tiếp xảy ra'},
     {zh:'接连下雨',py:'jiēlián xià yǔ',vn:'mưa liên tục'},
     {zh:'接连几天',py:'jiēlián jǐ tiān',vn:'liền mấy ngày'},
     {zh:'接连问了三个问题',py:'jiēlián wènle sān ge wèntí',vn:'hỏi liền ba câu'}
   ],
   patterns:[
     {s:'接连 + V + số lượng',m:'Liên tiếp làm… bao nhiêu lần'},
     {s:'接连不断',m:'Liên miên không dứt'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cậu ấy liên tiếp thi hai lần đều không đỗ, nhưng vẫn không bỏ cuộc.',answer:'他接连考了两次都没考上，可是仍然没有放弃。',answerPy:'Tā jiēlián kǎole liǎng cì dōu méi kǎoshàng, kěshì réngrán méiyǒu fàngqì.',
      note:'仍然 = vẫn (như cũ); 考上 là bổ ngữ kết quả (đỗ).',pair:'仍然'},
     {promptLang:'vi',prompt:'Mấy hôm nay mưa liên tục, đến quần áo cũng phơi không khô.',answer:'这几天接连下雨，连衣服都晒不干。',answerPy:'Zhè jǐ tiān jiēlián xià yǔ, lián yīfu dōu shài bu gān.',
      note:'连……都…… nhấn mạnh "đến cả"; 晒不干 là bổ ngữ khả năng phủ định.',pair:'连……都……'}
   ]},

  {n:11,zh:'涉及',py:'shèjí',pos:'Động từ',vn:'liên quan đến, đề cập đến, đụng chạm đến',hv:'thiệp cập',em:'📎',lesson:1,
   explain:['Chạm tới, dính dáng đến một phạm vi / vấn đề nào đó: 涉及隐私, 涉及很多方面.','Văn viết; tân ngữ thường là danh từ trừu tượng (问题 / 方面 / 领域 / 隐私 / 利益).'],
   usage:'涉及 + 问题 / 方面 / 领域 / 隐私 / 利益. 涉及面很广 = phạm vi liên quan rộng.',
   collo:['涉及隐私','涉及很多方面','涉及利益','涉及面广'],
   ex_zh:'她的问题涉及了我的隐私，我很反感。',ex_py:'Tā de wèntí shèjíle wǒ de yǐnsī, wǒ hěn fǎngǎn.',ex_vn:'Câu hỏi của cô ấy đụng đến chuyện riêng tư của tôi, tôi rất khó chịu.',
   exList:[
     {zh:'她的问题涉及了我的隐私，我很反感。',py:'Tā de wèntí shèjíle wǒ de yǐnsī, wǒ hěn fǎngǎn.',vn:'Câu hỏi của cô ấy đụng đến chuyện riêng tư của tôi, tôi rất khó chịu.'},
     {zh:'这次改革涉及每一个学生的利益。',py:'Zhè cì gǎigé shèjí měi yí ge xuésheng de lìyì.',vn:'Lần cải cách này liên quan đến quyền lợi của từng học sinh.'},
     {zh:'这本书涉及的内容很广，从历史到科学都有。',py:'Zhè běn shū shèjí de nèiróng hěn guǎng, cóng lìshǐ dào kēxué dōu yǒu.',vn:'Cuốn sách này đề cập đến nội dung rất rộng, từ lịch sử đến khoa học đều có.'}
   ],
   colloFull:[
     {zh:'涉及隐私',py:'shèjí yǐnsī',vn:'đụng đến đời tư'},
     {zh:'涉及很多方面',py:'shèjí hěn duō fāngmiàn',vn:'liên quan nhiều mặt'},
     {zh:'涉及利益',py:'shèjí lìyì',vn:'liên quan đến lợi ích'},
     {zh:'涉及面广',py:'shèjímiàn guǎng',vn:'phạm vi liên quan rộng'},
     {zh:'涉及的问题',py:'shèjí de wèntí',vn:'vấn đề có liên quan'}
   ],
   patterns:[
     {s:'A + 涉及 + (到) + B',m:'A liên quan / đụng chạm đến B'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vấn đề này liên quan đến bí mật của công ty, vì vậy tôi không thể nói cho cậu.',answer:'这个问题涉及公司的秘密，所以我不能告诉你。',answerPy:'Zhège wèntí shèjí gōngsī de mìmì, suǒyǐ wǒ bù néng gàosu nǐ.',
      note:'所以 nêu kết quả; 涉及 + danh từ trừu tượng (秘密).',pair:'所以'},
     {promptLang:'vi',prompt:'Chỉ cần không đụng đến chuyện riêng tư, em hỏi gì cũng được.',answer:'只要不涉及隐私，你问什么都可以。',answerPy:'Zhǐyào bú shèjí yǐnsī, nǐ wèn shénme dōu kěyǐ.',
      note:'只要…… nêu điều kiện đủ; 什么都 = bất cứ điều gì.',pair:'只要……就……'}
   ]},

  {n:12,zh:'隐私',py:'yǐnsī',pos:'Danh từ',vn:'sự riêng tư, đời tư',hv:'ẩn tư',em:'🔒',lesson:1,
   explain:['Chuyện riêng không muốn người khác biết: 个人隐私, 保护隐私.','Hỏi tuổi, lương, chuyện gia đình… với người không thân thường bị coi là 涉及隐私.'],
   usage:'保护 / 尊重 / 侵犯 / 涉及 + 隐私; 个人隐私.',
   collo:['个人隐私','保护隐私','尊重隐私','涉及隐私'],
   ex_zh:'每个人都有自己的隐私，我们应该尊重别人。',ex_py:'Měi ge rén dōu yǒu zìjǐ de yǐnsī, wǒmen yīnggāi zūnzhòng biérén.',ex_vn:'Ai cũng có chuyện riêng tư của mình, chúng ta nên tôn trọng người khác.',
   exList:[
     {zh:'每个人都有自己的隐私，我们应该尊重别人。',py:'Měi ge rén dōu yǒu zìjǐ de yǐnsī, wǒmen yīnggāi zūnzhòng biérén.',vn:'Ai cũng có chuyện riêng tư của mình, chúng ta nên tôn trọng người khác.'},
     {zh:'说实在的，她的问题涉及了我的隐私。',py:'Shuō shízài de, tā de wèntí shèjíle wǒ de yǐnsī.',vn:'Nói thật, câu hỏi của cô ấy đụng chạm đến đời tư của tôi.'},
     {zh:'在网上不要随便透露自己的个人隐私。',py:'Zài wǎng shang búyào suíbiàn tòulù zìjǐ de gèrén yǐnsī.',vn:'Trên mạng đừng tùy tiện để lộ thông tin riêng tư của mình.'}
   ],
   colloFull:[
     {zh:'个人隐私',py:'gèrén yǐnsī',vn:'đời tư cá nhân'},
     {zh:'保护隐私',py:'bǎohù yǐnsī',vn:'bảo vệ quyền riêng tư'},
     {zh:'尊重隐私',py:'zūnzhòng yǐnsī',vn:'tôn trọng đời tư'},
     {zh:'涉及隐私',py:'shèjí yǐnsī',vn:'đụng đến đời tư'},
     {zh:'侵犯隐私',py:'qīnfàn yǐnsī',vn:'xâm phạm đời tư'}
   ],
   patterns:[
     {s:'保护 / 尊重 / 侵犯 + (别人的) 隐私',m:'Bảo vệ / tôn trọng / xâm phạm đời tư'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đừng xem trộm điện thoại của người khác, đó là xâm phạm đời tư.',answer:'别偷看别人的手机，那是侵犯隐私。',answerPy:'Bié tōukàn biérén de shǒujī, nà shì qīnfàn yǐnsī.',
      note:'别 + V khuyên ngăn; 那是…… nêu nhận định.',pair:'别……'},
     {promptLang:'vi',prompt:'Dù là bạn thân, cũng nên tôn trọng chuyện riêng tư của nhau.',answer:'哪怕是好朋友，也应该尊重对方的隐私。',answerPy:'Nǎpà shì hǎo péngyou, yě yīnggāi zūnzhòng duìfāng de yǐnsī.',
      note:'哪怕……也…… = dù… cũng…; 对方 = phía bên kia, người kia.',pair:'哪怕……也……'}
   ]},

  {n:13,zh:'反感',py:'fǎngǎn',pos:'Tính từ',vn:'có ác cảm, bực mình, khó chịu',hv:'phản cảm',em:'😤',lesson:1,
   explain:['Không thích, bực bội với một người / việc: 我很反感, 对……反感. Cũng dùng làm danh từ: 引起反感 (gây ác cảm).','Bẫy Hán–Việt: "phản cảm" tiếng Việt thường tả thứ gây khó chịu (bức ảnh phản cảm); 反感 tiếng Trung chủ yếu là CẢM XÚC của người: 我对……很反感.'],
   usage:'对 + người / việc + (很) 反感; 引起 + (别人的) 反感; 让人反感.',
   collo:['很反感','对……反感','引起反感','让人反感'],
   ex_zh:'她的问题涉及了我的隐私，我很反感。',ex_py:'Tā de wèntí shèjíle wǒ de yǐnsī, wǒ hěn fǎngǎn.',ex_vn:'Câu hỏi của cô ấy đụng đến chuyện riêng tư của tôi, tôi rất khó chịu.',
   exList:[
     {zh:'她的问题涉及了我的隐私，我很反感。',py:'Tā de wèntí shèjíle wǒ de yǐnsī, wǒ hěn fǎngǎn.',vn:'Câu hỏi của cô ấy đụng đến chuyện riêng tư của tôi, tôi rất khó chịu.'},
     {zh:'他说话总是很不客气，同学们都对他有点儿反感。',py:'Tā shuōhuà zǒngshì hěn bú kèqi, tóngxuémen dōu duì tā yǒudiǎnr fǎngǎn.',vn:'Cậu ta nói năng lúc nào cũng rất khó nghe, các bạn đều hơi có ác cảm với cậu ta.'},
     {zh:'广告太多了，反而会引起观众的反感。',py:'Guǎnggào tài duō le, fǎn\'ér huì yǐnqǐ guānzhòng de fǎngǎn.',vn:'Quảng cáo nhiều quá, ngược lại sẽ khiến khán giả khó chịu.'}
   ],
   colloFull:[
     {zh:'很反感',py:'hěn fǎngǎn',vn:'rất khó chịu'},
     {zh:'对……反感',py:'duì……fǎngǎn',vn:'có ác cảm với…'},
     {zh:'引起反感',py:'yǐnqǐ fǎngǎn',vn:'gây ác cảm'},
     {zh:'让人反感',py:'ràng rén fǎngǎn',vn:'khiến người ta khó chịu'},
     {zh:'反感的情绪',py:'fǎngǎn de qíngxù',vn:'tâm trạng bực bội'}
   ],
   patterns:[
     {s:'对 + N + (很) 反感',m:'Có ác cảm với…'},
     {s:'引起 + (某人的) 反感',m:'Gây ác cảm cho ai'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bố mẹ càng cằn nhằn, con cái càng thấy khó chịu.',answer:'父母越唠叨，孩子就越反感。',answerPy:'Fùmǔ yuè láodao, háizi jiù yuè fǎngǎn.',
      note:'越 A 越 B có thể nối hai chủ ngữ khác nhau; 唠叨 = cằn nhằn, lải nhải.',pair:'越……越……'},
     {promptLang:'vi',prompt:'Tôi không phải có ác cảm với cậu ấy, mà là không thích cách cậu ấy nói chuyện.',answer:'我不是对他反感，而是不喜欢他说话的方式。',answerPy:'Wǒ bú shì duì tā fǎngǎn, ér shì bù xǐhuan tā shuōhuà de fāngshì.',
      note:'不是……而是…… phủ định vế trước, khẳng định vế sau.',pair:'不是……而是……'}
   ]},

  {n:14,zh:'火药',py:'huǒyào',pos:'Danh từ',vn:'thuốc súng, thuốc nổ',hv:'hỏa dược',em:'🧨',lesson:1,
   explain:['Chất nổ; một trong bốn phát minh lớn của Trung Quốc cổ đại (四大发明).','火药味 (mùi thuốc súng) nghĩa bóng: lời nói / bầu không khí gay gắt như sắp cãi nhau: 话也变得火药味十足.'],
   usage:'火药味 + 十足 / 很浓 — nghĩa bóng hay gặp nhất; 发明火药.',
   collo:['火药味十足','火药味很浓','发明火药','充满火药味'],
   ex_zh:'我很反感，话也变得火药味十足。',ex_py:'Wǒ hěn fǎngǎn, huà yě biàn de huǒyàowèi shízú.',ex_vn:'Tôi rất bực, lời nói cũng trở nên đầy mùi thuốc súng.',
   exList:[
     {zh:'我很反感，话也变得火药味十足。',py:'Wǒ hěn fǎngǎn, huà yě biàn de huǒyàowèi shízú.',vn:'Tôi rất bực, lời nói cũng trở nên đầy mùi thuốc súng.'},
     {zh:'火药是中国古代的四大发明之一。',py:'Huǒyào shì Zhōngguó gǔdài de sì dà fāmíng zhī yī.',vn:'Thuốc súng là một trong bốn phát minh lớn của Trung Quốc cổ đại.'},
     {zh:'两个队的比赛还没开始，场上就已经充满了火药味。',py:'Liǎng ge duì de bǐsài hái méi kāishǐ, chǎng shang jiù yǐjīng chōngmǎnle huǒyàowèi.',vn:'Trận đấu giữa hai đội còn chưa bắt đầu mà trên sân đã nồng nặc mùi thuốc súng.'}
   ],
   colloFull:[
     {zh:'火药味十足',py:'huǒyàowèi shízú',vn:'đầy mùi thuốc súng'},
     {zh:'火药味很浓',py:'huǒyàowèi hěn nóng',vn:'không khí rất căng thẳng'},
     {zh:'发明火药',py:'fāmíng huǒyào',vn:'phát minh thuốc súng'},
     {zh:'充满火药味',py:'chōngmǎn huǒyàowèi',vn:'đầy mùi thuốc súng'},
     {zh:'一包火药',py:'yì bāo huǒyào',vn:'một gói thuốc nổ'}
   ],
   patterns:[
     {s:'(话 / 气氛) + 火药味十足',m:'Lời nói / không khí căng thẳng, gay gắt'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Hai người vừa nói được vài câu, lời lẽ đã đầy mùi thuốc súng.',answer:'两个人刚说了几句，话就变得火药味十足。',answerPy:'Liǎng ge rén gāng shuōle jǐ jù, huà jiù biàn de huǒyàowèi shízú.',
      note:'刚……就…… hai việc nối nhau rất nhanh; 变得 + trạng thái.',pair:'刚……就……'},
     {promptLang:'vi',prompt:'Thuốc súng không những được dùng làm pháo hoa, mà còn thay đổi cả lịch sử chiến tranh.',answer:'火药不但可以用来做烟花，而且改变了战争的历史。',answerPy:'Huǒyào búdàn kěyǐ yònglái zuò yānhuā, érqiě gǎibiànle zhànzhēng de lìshǐ.',
      note:'用来 + V = dùng để; 不但……而且…… tăng tiến.',pair:'不但……而且……'}
   ]},

  {n:15,zh:'忍耐',py:'rěnnài',pos:'Động từ',vn:'nhẫn nại, kiềm chế, chịu đựng',hv:'nhẫn nại',em:'😬',lesson:1,
   explain:['Cố nén cảm xúc (giận, đau, khó chịu), không để lộ ra: 极力忍耐着.','Nhấn mạnh việc KÌM NÉN; 耐心 thiên về tính kiên nhẫn (tính từ / danh từ).'],
   usage:'极力 / 尽量 + 忍耐; 忍耐 + 一下 / 着; 忍耐不住. Hay dùng với cảm xúc tiêu cực.',
   collo:['极力忍耐','忍耐一下','忍耐不住','学会忍耐'],
   ex_zh:'她极力忍耐着，“是这样，我必须了解学员。”',ex_py:'Tā jílì rěnnàizhe, “Shì zhèyàng, wǒ bìxū liǎojiě xuéyuán.”',ex_vn:'Cô ấy cố hết sức kiềm chế: "Là thế này, tôi phải hiểu học viên."',
   exList:[
     {zh:'她极力忍耐着，“是这样，我必须了解学员。”',py:'Tā jílì rěnnàizhe, “Shì zhèyàng, wǒ bìxū liǎojiě xuéyuán.”',vn:'Cô ấy cố hết sức kiềm chế: "Là thế này, tôi phải hiểu học viên."'},
     {zh:'再忍耐一下，马上就到了。',py:'Zài rěnnài yíxià, mǎshàng jiù dào le.',vn:'Chịu khó thêm chút nữa, sắp tới nơi rồi.'},
     {zh:'他实在忍耐不住了，大声地说出了自己的不满。',py:'Tā shízài rěnnài bu zhù le, dàshēng de shuōchūle zìjǐ de bùmǎn.',vn:'Anh ấy thật sự không nhịn nổi nữa, lớn tiếng nói ra sự bất mãn của mình.'}
   ],
   colloFull:[
     {zh:'极力忍耐',py:'jílì rěnnài',vn:'cố hết sức kiềm chế'},
     {zh:'忍耐一下',py:'rěnnài yíxià',vn:'chịu đựng một chút'},
     {zh:'忍耐不住',py:'rěnnài bu zhù',vn:'không nhịn nổi'},
     {zh:'学会忍耐',py:'xuéhuì rěnnài',vn:'học cách nhẫn nại'},
     {zh:'忍耐的限度',py:'rěnnài de xiàndù',vn:'giới hạn chịu đựng'}
   ],
   patterns:[
     {s:'极力 / 尽量 + 忍耐(着)',m:'Cố kiềm chế'},
     {s:'忍耐不住',m:'Không nhịn được nữa'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy trong lòng rất tức, nhưng cô ấy vẫn cố hết sức kiềm chế.',answer:'虽然心里很生气，但她还是极力忍耐着。',answerPy:'Suīrán xīnli hěn shēngqì, dàn tā háishi jílì rěnnàizhe.',
      note:'虽然……但…… nhượng bộ; 还是 = vẫn; V + 着 chỉ trạng thái kéo dài.',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Có lúc biết nhẫn nại một chút, sự việc ngược lại càng dễ giải quyết.',answer:'有时候学会忍耐一下，事情反而更容易解决。',answerPy:'Yǒu shíhou xuéhuì rěnnài yíxià, shìqing fǎn\'ér gèng róngyì jiějué.',
      note:'反而 = ngược lại (kết quả trái với điều người ta thường nghĩ).',pair:'反而'}
   ]},

  {n:16,zh:'着想',py:'zhuóxiǎng',pos:'Động từ',vn:'nghĩ cho, lo cho (lợi ích của ai)',hv:'trước tưởng',em:'💭',lesson:1,
   explain:['Suy nghĩ vì lợi ích của ai đó: 为学员着想, 为别人着想.','Luôn đi thành khung 为 + người / việc + 着想; không mang tân ngữ trực tiếp (không nói 着想别人). Chú ý: 着 ở đây đọc zhuó.'],
   usage:'为 + N + 着想; 处处为别人着想; 替……着想 (khẩu ngữ).',
   collo:['为学员着想','为别人着想','为孩子着想','处处为他人着想'],
   ex_zh:'我必须了解学员，为学员着想，帮他策划学习方案。',ex_py:'Wǒ bìxū liǎojiě xuéyuán, wèi xuéyuán zhuóxiǎng, bāng tā cèhuà xuéxí fāng\'àn.',ex_vn:'Tôi phải hiểu học viên, nghĩ cho học viên, giúp họ lên phương án học tập.',
   exList:[
     {zh:'我必须了解学员，为学员着想，帮他策划学习方案。',py:'Wǒ bìxū liǎojiě xuéyuán, wèi xuéyuán zhuóxiǎng, bāng tā cèhuà xuéxí fāng\'àn.',vn:'Tôi phải hiểu học viên, nghĩ cho học viên, giúp họ lên phương án học tập.'},
     {zh:'为孩子的未来着想，家长应该培养孩子独立的能力。',py:'Wèi háizi de wèilái zhuóxiǎng, jiāzhǎng yīnggāi péiyǎng háizi dúlì de nénglì.',vn:'Nghĩ cho tương lai của con, phụ huynh nên rèn cho con khả năng tự lập.'},
     {zh:'她总是处处为别人着想，所以大家都喜欢她。',py:'Tā zǒngshì chùchù wèi biérén zhuóxiǎng, suǒyǐ dàjiā dōu xǐhuan tā.',vn:'Cô ấy lúc nào cũng nghĩ cho người khác, nên ai cũng quý cô ấy.'}
   ],
   colloFull:[
     {zh:'为学员着想',py:'wèi xuéyuán zhuóxiǎng',vn:'nghĩ cho học viên'},
     {zh:'为别人着想',py:'wèi biérén zhuóxiǎng',vn:'nghĩ cho người khác'},
     {zh:'为孩子着想',py:'wèi háizi zhuóxiǎng',vn:'nghĩ cho con cái'},
     {zh:'处处为他人着想',py:'chùchù wèi tārén zhuóxiǎng',vn:'việc gì cũng nghĩ cho người khác'},
     {zh:'为自己的健康着想',py:'wèi zìjǐ de jiànkāng zhuóxiǎng',vn:'nghĩ cho sức khỏe của mình'}
   ],
   patterns:[
     {s:'为 + N + 着想',m:'Nghĩ cho, vì lợi ích của…'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vì sức khỏe của mình, cậu tốt nhất đừng thức khuya nữa.',answer:'为自己的健康着想，你最好别再熬夜了。',answerPy:'Wèi zìjǐ de jiànkāng zhuóxiǎng, nǐ zuìhǎo bié zài áoyè le.',
      note:'为……着想 làm trạng ngữ đầu câu; 别再……了 = đừng… nữa.',pair:'别再……了'},
     {promptLang:'vi',prompt:'Bố mẹ sở dĩ nghiêm khắc với em là vì nghĩ cho tương lai của em.',answer:'父母之所以对你严厉，是因为为你的将来着想。',answerPy:'Fùmǔ zhīsuǒyǐ duì nǐ yánlì, shì yīnwèi wèi nǐ de jiānglái zhuóxiǎng.',
      note:'之所以 + kết quả, 是因为 + nguyên nhân; 严厉 là từ bài 1 HSK 6.',pair:'之所以……是因为……'}
   ]},

  {n:17,zh:'策划',py:'cèhuà',pos:'Động từ',vn:'lập kế hoạch, lên phương án, trù tính',hv:'sách hoạch',em:'📋',lesson:1,
   explain:['Tính toán, lên kế hoạch chi tiết cho một việc: 策划学习方案, 策划活动.','Cũng là danh từ chỉ việc / người lên kế hoạch: 活动策划.'],
   usage:'策划 + 方案 / 活动 / 晚会 / 节目. Trang trọng hơn 计划 / 安排.',
   collo:['策划方案','策划活动','精心策划','策划晚会'],
   ex_zh:'帮他策划学习方案，以达成他的目标。',ex_py:'Bāng tā cèhuà xuéxí fāng\'àn, yǐ dáchéng tā de mùbiāo.',ex_vn:'Giúp họ lên phương án học tập để đạt được mục tiêu của họ.',
   exList:[
     {zh:'帮他策划学习方案，以达成他的目标。',py:'Bāng tā cèhuà xuéxí fāng\'àn, yǐ dáchéng tā de mùbiāo.',vn:'Giúp họ lên phương án học tập để đạt được mục tiêu của họ.'},
     {zh:'这次毕业晚会是我们班同学自己策划的。',py:'Zhè cì bìyè wǎnhuì shì wǒmen bān tóngxué zìjǐ cèhuà de.',vn:'Buổi tiệc tốt nghiệp lần này là do các bạn lớp tôi tự lên kế hoạch.'},
     {zh:'经过一个月的精心策划，活动终于成功举办了。',py:'Jīngguò yí ge yuè de jīngxīn cèhuà, huódòng zhōngyú chénggōng jǔbàn le.',vn:'Sau một tháng dày công chuẩn bị, sự kiện cuối cùng đã được tổ chức thành công.'}
   ],
   colloFull:[
     {zh:'策划方案',py:'cèhuà fāng\'àn',vn:'lên phương án'},
     {zh:'策划活动',py:'cèhuà huódòng',vn:'lên kế hoạch hoạt động'},
     {zh:'精心策划',py:'jīngxīn cèhuà',vn:'dày công trù tính'},
     {zh:'策划晚会',py:'cèhuà wǎnhuì',vn:'lên kế hoạch buổi tiệc'},
     {zh:'活动策划',py:'huódòng cèhuà',vn:'người lên kế hoạch sự kiện'}
   ],
   patterns:[
     {s:'策划 + 方案 / 活动 / 晚会',m:'Lên kế hoạch cho…'},
     {s:'精心策划',m:'Dày công trù tính'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Hoạt động này tuy được lên kế hoạch rất kỹ, nhưng hôm đó mưa to nên đành phải hủy.',answer:'这个活动虽然策划得很仔细，但是那天下大雨，只好取消了。',answerPy:'Zhège huódòng suīrán cèhuà de hěn zǐxì, dànshì nà tiān xià dà yǔ, zhǐhǎo qǔxiāo le.',
      note:'策划得很仔细 là bổ ngữ trạng thái; 只好 = đành phải.',pair:'只好'},
     {promptLang:'vi',prompt:'Lớp trưởng bảo tôi lên kế hoạch cho hoạt động cuối tuần.',answer:'班长让我策划周末的活动。',answerPy:'Bānzhǎng ràng wǒ cèhuà zhōumò de huódòng.',
      note:'让 + người + V = bảo / nhờ ai làm (câu kiêm ngữ).',pair:'让 + người + V'}
   ]},

  {n:18,zh:'达成',py:'dáchéng',pos:'Động từ',vn:'đạt được (mục tiêu, thỏa thuận)',hv:'đạt thành',em:'🎯',lesson:1,
   explain:['Đạt tới, thực hiện được: 达成目标, 达成协议, 达成共识.','Văn viết, tân ngữ là danh từ trừu tượng; khẩu ngữ hay dùng 实现目标.'],
   usage:'达成 + 目标 / 协议 / 共识 / 一致. Không dùng với 成绩 (dùng 取得成绩).',
   collo:['达成目标','达成协议','达成共识','达成一致'],
   ex_zh:'帮他策划学习方案，以达成他的目标。',ex_py:'Bāng tā cèhuà xuéxí fāng\'àn, yǐ dáchéng tā de mùbiāo.',ex_vn:'Giúp họ lên phương án học tập để đạt được mục tiêu của họ.',
   exList:[
     {zh:'帮他策划学习方案，以达成他的目标。',py:'Bāng tā cèhuà xuéxí fāng\'àn, yǐ dáchéng tā de mùbiāo.',vn:'Giúp họ lên phương án học tập để đạt được mục tiêu của họ.'},
     {zh:'经过几轮谈判，双方终于达成了协议。',py:'Jīngguò jǐ lún tánpàn, shuāngfāng zhōngyú dáchéngle xiéyì.',vn:'Sau mấy vòng đàm phán, hai bên cuối cùng đã đạt được thỏa thuận.'},
     {zh:'只要每天坚持，你一定能达成自己的目标。',py:'Zhǐyào měi tiān jiānchí, nǐ yídìng néng dáchéng zìjǐ de mùbiāo.',vn:'Chỉ cần kiên trì mỗi ngày, bạn nhất định sẽ đạt được mục tiêu của mình.'}
   ],
   colloFull:[
     {zh:'达成目标',py:'dáchéng mùbiāo',vn:'đạt được mục tiêu'},
     {zh:'达成协议',py:'dáchéng xiéyì',vn:'đạt được thỏa thuận'},
     {zh:'达成共识',py:'dáchéng gòngshí',vn:'đạt được đồng thuận'},
     {zh:'达成一致',py:'dáchéng yízhì',vn:'đạt được nhất trí'},
     {zh:'难以达成',py:'nányǐ dáchéng',vn:'khó đạt được'}
   ],
   patterns:[
     {s:'达成 + 目标 / 协议 / 共识',m:'Đạt được…'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cả lớp bàn suốt một buổi chiều mới đạt được nhất trí.',answer:'全班讨论了一个下午，才达成了一致。',answerPy:'Quán bān tǎolùnle yí ge xiàwǔ, cái dáchéngle yízhì.',
      note:'才 nhấn mạnh việc xảy ra muộn, khó khăn.',pair:'才'},
     {promptLang:'vi',prompt:'Để đạt được mục tiêu, ngày nào cậu ấy cũng dậy từ năm giờ.',answer:'为了达成目标，他每天五点就起床了。',answerPy:'Wèile dáchéng mùbiāo, tā měi tiān wǔ diǎn jiù qǐchuáng le.',
      note:'为了 nêu mục đích; 就 nhấn mạnh sớm.',pair:'为了'}
   ]},

  {n:19,zh:'口气',py:'kǒuqì',pos:'Danh từ',vn:'giọng điệu, khẩu khí',hv:'khẩu khí',em:'🗣️',lesson:1,
   explain:['Cách nói thể hiện thái độ, cảm xúc của người nói: 口气缓和, 口气很硬, 用命令的口气.','Còn có nghĩa "hơi thở" (松了一口气 – thở phào) — nghĩa khác, chú ý lượng từ 口.'],
   usage:'口气 + 缓和 / 很硬 / 很冲 / 很客气; 用……的口气 + 说.',
   collo:['口气缓和','口气很硬','用命令的口气','说话的口气'],
   ex_zh:'我努力使自己的口气缓和下来。',ex_py:'Wǒ nǔlì shǐ zìjǐ de kǒuqì huǎnhé xiàlái.',ex_vn:'Tôi cố làm cho giọng mình dịu xuống.',
   exList:[
     {zh:'我努力使自己的口气缓和下来。',py:'Wǒ nǔlì shǐ zìjǐ de kǒuqì huǎnhé xiàlái.',vn:'Tôi cố làm cho giọng mình dịu xuống.'},
     {zh:'他用命令的口气跟我说话，让我很不舒服。',py:'Tā yòng mìnglìng de kǒuqì gēn wǒ shuōhuà, ràng wǒ hěn bù shūfu.',vn:'Anh ta nói với tôi bằng giọng ra lệnh, làm tôi rất khó chịu.'},
     {zh:'听他的口气，这件事好像还有希望。',py:'Tīng tā de kǒuqì, zhè jiàn shì hǎoxiàng hái yǒu xīwàng.',vn:'Nghe giọng anh ấy thì chuyện này hình như vẫn còn hy vọng.'}
   ],
   colloFull:[
     {zh:'口气缓和',py:'kǒuqì huǎnhé',vn:'giọng dịu lại'},
     {zh:'口气很硬',py:'kǒuqì hěn yìng',vn:'giọng cứng rắn'},
     {zh:'用命令的口气',py:'yòng mìnglìng de kǒuqì',vn:'bằng giọng ra lệnh'},
     {zh:'说话的口气',py:'shuōhuà de kǒuqì',vn:'giọng điệu khi nói'},
     {zh:'听他的口气',py:'tīng tā de kǒuqì',vn:'nghe giọng anh ta'}
   ],
   patterns:[
     {s:'用 + ……的口气 + 说',m:'Nói bằng giọng…'},
     {s:'使 + 口气 + 缓和下来',m:'Làm cho giọng dịu xuống'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nói chuyện với người lớn tuổi, giọng điệu nên khách sáo hơn một chút.',answer:'跟长辈说话，口气应该客气一点儿。',answerPy:'Gēn zhǎngbèi shuōhuà, kǒuqì yīnggāi kèqi yìdiǎnr.',
      note:'Tính từ + 一点儿 = …hơn một chút (so sánh ngầm).',pair:'……一点儿'},
     {promptLang:'vi',prompt:'Vừa nghe giọng của mẹ, tôi biết ngay mẹ đang giận.',answer:'一听妈妈的口气，我就知道她生气了。',answerPy:'Yì tīng māma de kǒuqì, wǒ jiù zhīdào tā shēngqì le.',
      note:'一……就…… = vừa… là…',pair:'一……就……'}
   ]},

  {n:20,zh:'缓和',py:'huǎnhé',pos:'Tính từ',vn:'dịu đi, hòa hoãn',hv:'hoãn hòa',em:'🌤️',lesson:1,
   explain:['Tình hình, bầu không khí, giọng điệu trở nên nhẹ nhàng, bớt căng thẳng: 口气缓和下来, 气氛缓和了.','Cũng là động từ: làm dịu (缓和气氛, 缓和矛盾).'],
   usage:'缓和 + 下来; 缓和气氛 / 矛盾 / 关系. Đối lập: 紧张, 激烈.',
   collo:['缓和下来','缓和气氛','缓和矛盾','关系缓和'],
   ex_zh:'他讲了个笑话，紧张的气氛一下子缓和了。',ex_py:'Tā jiǎngle ge xiàohua, jǐnzhāng de qìfēn yíxiàzi huǎnhé le.',ex_vn:'Anh ấy kể một câu chuyện cười, bầu không khí căng thẳng lập tức dịu đi.',
   exList:[
     {zh:'他讲了个笑话，紧张的气氛一下子缓和了。',py:'Tā jiǎngle ge xiàohua, jǐnzhāng de qìfēn yíxiàzi huǎnhé le.',vn:'Anh ấy kể một câu chuyện cười, bầu không khí căng thẳng lập tức dịu đi.'},
     {zh:'我努力使自己的口气缓和下来。',py:'Wǒ nǔlì shǐ zìjǐ de kǒuqì huǎnhé xiàlái.',vn:'Tôi cố làm cho giọng mình dịu xuống.'},
     {zh:'经过一次长谈，他们母子俩的关系缓和了很多。',py:'Jīngguò yí cì cháng tán, tāmen mǔzǐ liǎ de guānxi huǎnhéle hěn duō.',vn:'Sau một lần nói chuyện dài, quan hệ hai mẹ con họ đã dịu đi nhiều.'}
   ],
   colloFull:[
     {zh:'缓和下来',py:'huǎnhé xiàlái',vn:'dịu xuống'},
     {zh:'缓和气氛',py:'huǎnhé qìfēn',vn:'làm dịu không khí'},
     {zh:'缓和矛盾',py:'huǎnhé máodùn',vn:'làm dịu mâu thuẫn'},
     {zh:'关系缓和',py:'guānxi huǎnhé',vn:'quan hệ dịu đi'},
     {zh:'口气缓和',py:'kǒuqì huǎnhé',vn:'giọng dịu lại'}
   ],
   patterns:[
     {s:'使 + N + 缓和下来',m:'Làm cho… dịu xuống'},
     {s:'缓和 + 气氛 / 矛盾',m:'Làm dịu…'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Để làm dịu không khí, cô giáo chủ động hát một bài.',answer:'为了缓和气氛，老师主动唱了一首歌。',answerPy:'Wèile huǎnhé qìfēn, lǎoshī zhǔdòng chàngle yì shǒu gē.',
      note:'为了 nêu mục đích; 主动 = chủ động.',pair:'为了'},
     {promptLang:'vi',prompt:'Sau khi xin lỗi, giọng anh ấy mới dịu xuống.',answer:'道歉以后，他的口气才缓和下来。',answerPy:'Dàoqiàn yǐhòu, tā de kǒuqì cái huǎnhé xiàlái.',
      note:'V / Adj + 下来 chỉ trạng thái từ mạnh chuyển sang nhẹ, dịu.',pair:'……下来'}
   ]},

  {n:21,zh:'随意',py:'suíyì',pos:'Tính từ',vn:'tùy ý, tùy thích; tùy tiện',hv:'tùy ý',em:'🎈',lesson:1,
   explain:['Theo ý mình, không bị gò bó: 随意学学, 请随意.','Có khi mang nghĩa hơi tiêu cực: tùy tiện, không nghiêm túc (说话太随意).'],
   usage:'随意 + V (随意学学 / 随意看看); 请随意 (xin cứ tự nhiên); 太随意 (quá tùy tiện).',
   collo:['随意学学','请随意','随意选择','穿得很随意'],
   ex_zh:'就是找一个班插班听课，随意学学而已。',ex_py:'Jiùshì zhǎo yí ge bān chābān tīng kè, suíyì xuéxue éryǐ.',ex_vn:'Chỉ là tìm một lớp để học xen vào, học tùy thích mà thôi.',
   exList:[
     {zh:'就是找一个班插班听课，随意学学而已。',py:'Jiùshì zhǎo yí ge bān chābān tīng kè, suíyì xuéxue éryǐ.',vn:'Chỉ là tìm một lớp để học xen vào, học tùy thích mà thôi.'},
     {zh:'桌上的水果大家请随意，别客气。',py:'Zhuō shang de shuǐguǒ dàjiā qǐng suíyì, bié kèqi.',vn:'Hoa quả trên bàn mọi người cứ tự nhiên, đừng khách sáo.'},
     {zh:'面试的时候穿得太随意，会给人留下不好的印象。',py:'Miànshì de shíhou chuān de tài suíyì, huì gěi rén liúxià bù hǎo de yìnxiàng.',vn:'Đi phỏng vấn mà ăn mặc quá tùy tiện sẽ để lại ấn tượng không tốt.'}
   ],
   colloFull:[
     {zh:'随意学学',py:'suíyì xuéxue',vn:'học tùy thích'},
     {zh:'请随意',py:'qǐng suíyì',vn:'xin cứ tự nhiên'},
     {zh:'随意选择',py:'suíyì xuǎnzé',vn:'tùy ý lựa chọn'},
     {zh:'穿得很随意',py:'chuān de hěn suíyì',vn:'ăn mặc thoải mái'},
     {zh:'说话太随意',py:'shuōhuà tài suíyì',vn:'nói năng quá tùy tiện'}
   ],
   patterns:[
     {s:'随意 + VV',m:'Làm tùy thích'},
     {s:'请随意',m:'Xin cứ tự nhiên'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Không phải tôi không muốn học nghiêm túc, mà là không có thời gian, chỉ có thể học tùy thích thôi.',answer:'我不是不想认真学，而是没有时间，只能随意学学。',answerPy:'Wǒ bú shì bù xiǎng rènzhēn xué, ér shì méiyǒu shíjiān, zhǐ néng suíyì xuéxue.',
      note:'不是……而是…… phủ định vế trước, khẳng định vế sau.',pair:'不是……而是……'},
     {promptLang:'vi',prompt:'Đây là kỳ thi rất quan trọng, đừng tùy tiện như vậy.',answer:'这是很重要的考试，别这么随意。',answerPy:'Zhè shì hěn zhòngyào de kǎoshì, bié zhème suíyì.',
      note:'别这么 + tính từ = đừng… như thế.',pair:'别这么……'}
   ]},

  {n:22,zh:'而已',py:'éryǐ',pos:'Trợ từ',vn:'mà thôi, chỉ… thôi',hv:'nhi dĩ',em:'🤏',lesson:1,
   explain:['Đặt CUỐI câu trần thuật, làm nhẹ sự việc: chỉ có vậy, không có gì hơn.','Hay đi với 不过 / 只 / 只是 / 仅 / 仅仅 phía trước; khẩu ngữ dùng 罢了 hoặc 就是了.'],
   usage:'只是 / 不过 / 仅仅 + …… + 而已。 Không dùng trong câu hỏi, câu cầu khiến.',
   collo:['……而已','只是……而已','不过……而已','仅仅……而已'],
   ex_zh:'我没什么具体目标，就是随意学学而已。',ex_py:'Wǒ méi shénme jùtǐ mùbiāo, jiùshì suíyì xuéxue éryǐ.',ex_vn:'Tôi chẳng có mục tiêu cụ thể gì, chỉ là học tùy thích mà thôi.',
   exList:[
     {zh:'我没什么具体目标，就是随意学学而已。',py:'Wǒ méi shénme jùtǐ mùbiāo, jiùshì suíyì xuéxue éryǐ.',vn:'Tôi chẳng có mục tiêu cụ thể gì, chỉ là học tùy thích mà thôi.'},
     {zh:'你怎么做的，谁心里都明白，大家不过嘴上说说而已。',py:'Nǐ zěnme zuò de, shéi xīnli dōu míngbai, dàjiā búguò zuǐ shang shuōshuo éryǐ.',vn:'Cậu làm thế nào thì ai trong lòng cũng rõ, mọi người chỉ nói ngoài miệng mà thôi.'},
     {zh:'他的工作是警察，写小说仅仅是他的业余爱好而已。',py:'Tā de gōngzuò shì jǐngchá, xiě xiǎoshuō jǐnjǐn shì tā de yèyú àihào éryǐ.',vn:'Công việc của anh ấy là cảnh sát, viết tiểu thuyết chỉ là sở thích lúc rảnh mà thôi.'}
   ],
   colloFull:[
     {zh:'……而已',py:'……éryǐ',vn:'…mà thôi'},
     {zh:'只是……而已',py:'zhǐshì……éryǐ',vn:'chỉ là… mà thôi'},
     {zh:'不过……而已',py:'búguò……éryǐ',vn:'chẳng qua… mà thôi'},
     {zh:'仅仅……而已',py:'jǐnjǐn……éryǐ',vn:'chỉ vỏn vẹn… mà thôi'},
     {zh:'开个玩笑而已',py:'kāi ge wánxiào éryǐ',vn:'chỉ đùa chút thôi'}
   ],
   patterns:[
     {s:'只是 / 不过 / 仅仅 + …… + 而已',m:'Chỉ… mà thôi (làm nhẹ sự việc)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đừng giận, tôi chỉ đùa chút thôi mà.',answer:'别生气，我只是开个玩笑而已。',answerPy:'Bié shēngqì, wǒ zhǐshì kāi ge wánxiào éryǐ.',
      note:'只是……而已 làm nhẹ sự việc; 开个玩笑 lược bỏ 一.',pair:'只是……而已'},
     {promptLang:'vi',prompt:'Tôi chỉ đi xem thử thôi, còn chưa quyết định có mua hay không.',answer:'我不过是去看看而已，还没决定买不买。',answerPy:'Wǒ búguò shì qù kànkan éryǐ, hái méi juédìng mǎi bu mǎi.',
      note:'不过……而已; 买不买 là câu hỏi chính phản làm tân ngữ của 决定.',pair:'不过……而已'}
   ]},

  {n:23,zh:'设置',py:'shèzhì',pos:'Động từ',vn:'thiết lập, sắp đặt, mở (lớp, môn); cài đặt',hv:'thiết trí',em:'⚙️',lesson:1,
   explain:['Lập ra, đặt ra (tổ chức, lớp học, chương trình, mục tiêu): 设置课程, 根据……设置.','Cũng là cài đặt (thiết bị): 设置密码, 手机设置.'],
   usage:'设置 + 课程 / 班级 / 目标 / 密码 / 障碍; 根据……设置…….',
   collo:['设置课程','设置目标','设置密码','根据……设置'],
   ex_zh:'我们的班都是根据学员的具体情况设置的。',ex_py:'Wǒmen de bān dōu shì gēnjù xuéyuán de jùtǐ qíngkuàng shèzhì de.',ex_vn:'Các lớp của chúng tôi đều được mở dựa trên tình hình cụ thể của học viên.',
   exList:[
     {zh:'我们的班都是根据学员的具体情况设置的。',py:'Wǒmen de bān dōu shì gēnjù xuéyuán de jùtǐ qíngkuàng shèzhì de.',vn:'Các lớp của chúng tôi đều được mở dựa trên tình hình cụ thể của học viên.'},
     {zh:'我们还应该根据自身的情况设置短期和长期的学习目标。',py:'Wǒmen hái yīnggāi gēnjù zìshēn de qíngkuàng shèzhì duǎnqī hé chángqī de xuéxí mùbiāo.',vn:'Chúng ta còn nên dựa vào tình hình bản thân để đặt ra mục tiêu học tập ngắn hạn và dài hạn.'},
     {zh:'为了安全，最好给手机设置一个密码。',py:'Wèile ānquán, zuìhǎo gěi shǒujī shèzhì yí ge mìmǎ.',vn:'Để an toàn, tốt nhất nên cài mật khẩu cho điện thoại.'}
   ],
   colloFull:[
     {zh:'设置课程',py:'shèzhì kèchéng',vn:'mở môn học'},
     {zh:'设置目标',py:'shèzhì mùbiāo',vn:'đặt mục tiêu'},
     {zh:'设置密码',py:'shèzhì mìmǎ',vn:'cài mật khẩu'},
     {zh:'根据……设置',py:'gēnjù……shèzhì',vn:'thiết lập dựa trên…'},
     {zh:'设置障碍',py:'shèzhì zhàng\'ài',vn:'đặt chướng ngại'}
   ],
   patterns:[
     {s:'根据 + N + 设置 + ……',m:'Thiết lập… dựa trên…'},
     {s:'给 + N + 设置 + ……',m:'Cài đặt… cho…'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Trường chúng tôi không những mở môn tiếng Anh, mà còn mở môn tiếng Trung.',answer:'我们学校不但设置了英语课，而且设置了汉语课。',answerPy:'Wǒmen xuéxiào búdàn shèzhìle Yīngyǔ kè, érqiě shèzhìle Hànyǔ kè.',
      note:'不但……而且…… tăng tiến; cùng chủ ngữ 我们学校.',pair:'不但……而且……'},
     {promptLang:'vi',prompt:'Mục tiêu đặt quá cao, ngược lại sẽ khiến người ta mất động lực.',answer:'目标设置得太高，反而会让人失去动力。',answerPy:'Mùbiāo shèzhì de tài gāo, fǎn\'ér huì ràng rén shīqù dònglì.',
      note:'设置得太高 là bổ ngữ trạng thái; 反而 = ngược lại.',pair:'反而'}
   ]},

  {n:24,zh:'动力',py:'dònglì',pos:'Danh từ',vn:'động lực',hv:'động lực',em:'🚀',lesson:1,
   explain:['Sức đẩy làm máy móc chuyển động (nghĩa gốc).','Nghĩa bóng: điều thúc đẩy con người hành động: 学习的动力, 缺乏动力.'],
   usage:'有 / 没有 / 缺乏 / 失去 + 动力; 学习的动力; 把压力变成动力.',
   collo:['缺乏动力','学习的动力','失去动力','变成动力'],
   ex_zh:'没有目标就缺乏动力，这道理我固然懂。',ex_py:'Méiyǒu mùbiāo jiù quēfá dònglì, zhè dàolǐ wǒ gùrán dǒng.',ex_vn:'Không có mục tiêu thì thiếu động lực, đạo lý này tất nhiên tôi hiểu.',
   exList:[
     {zh:'没有目标就缺乏动力，这道理我固然懂。',py:'Méiyǒu mùbiāo jiù quēfá dònglì, zhè dàolǐ wǒ gùrán dǒng.',vn:'Không có mục tiêu thì thiếu động lực, đạo lý này tất nhiên tôi hiểu.'},
     {zh:'有了目标就有了学习的动力。',py:'Yǒule mùbiāo jiù yǒule xuéxí de dònglì.',vn:'Có mục tiêu rồi thì có động lực học tập.'},
     {zh:'父母的期望是我努力学习的最大动力。',py:'Fùmǔ de qīwàng shì wǒ nǔlì xuéxí de zuì dà dònglì.',vn:'Kỳ vọng của bố mẹ là động lực lớn nhất để tôi học hành chăm chỉ.'}
   ],
   colloFull:[
     {zh:'缺乏动力',py:'quēfá dònglì',vn:'thiếu động lực'},
     {zh:'学习的动力',py:'xuéxí de dònglì',vn:'động lực học tập'},
     {zh:'失去动力',py:'shīqù dònglì',vn:'mất động lực'},
     {zh:'变成动力',py:'biànchéng dònglì',vn:'biến thành động lực'},
     {zh:'最大的动力',py:'zuì dà de dònglì',vn:'động lực lớn nhất'}
   ],
   patterns:[
     {s:'……是 + 某人 + ……的动力',m:'… là động lực của ai'},
     {s:'把压力变成动力',m:'Biến áp lực thành động lực'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chúng ta nên biến áp lực thành động lực.',answer:'我们应该把压力变成动力。',answerPy:'Wǒmen yīnggāi bǎ yālì biànchéng dònglì.',
      note:'把 + N + 变成 + N: câu 把 với bổ ngữ 成.',pair:'把……变成……'},
     {promptLang:'vi',prompt:'Một khi mất động lực, việc học sẽ trở nên rất nhàm chán.',answer:'一旦失去了动力，学习就会变得很无聊。',answerPy:'Yídàn shīqùle dònglì, xuéxí jiù huì biàn de hěn wúliáo.',
      note:'一旦……就…… = một khi… thì…',pair:'一旦……就……'}
   ]},

  {n:25,zh:'固然',py:'gùrán',pos:'Liên từ',vn:'tất nhiên, dĩ nhiên, tuy',hv:'cố nhiên',em:'⚖️',lesson:1,
   explain:['Thừa nhận một sự thật ở vế TRƯỚC, rồi vế sau chuyển ý (可是 / 但是 / 却 / 然而) nêu điều ngược lại.','Hoặc vế sau thừa nhận thêm một sự thật khác (hay dùng 也), chuyển ý nhẹ.'],
   usage:'A 固然……，可是 / 但是 B……; A 固然……，B 也……. Đứng sau chủ ngữ của vế trước.',
   collo:['固然……可是……','固然……但是……','固然……也……','好固然是好'],
   ex_zh:'没有目标就缺乏动力，这道理我固然懂，可是，我的确说不出她所说的目标。',ex_py:'Méiyǒu mùbiāo jiù quēfá dònglì, zhè dàolǐ wǒ gùrán dǒng, kěshì, wǒ díquè shuō bu chū tā suǒ shuō de mùbiāo.',ex_vn:'Không có mục tiêu thì thiếu động lực, đạo lý này tất nhiên tôi hiểu, nhưng quả thật tôi không nói ra được cái mục tiêu mà cô ấy nói.',
   exList:[
     {zh:'没有目标就缺乏动力，这道理我固然懂，可是，我的确说不出她所说的目标。',py:'Méiyǒu mùbiāo jiù quēfá dònglì, zhè dàolǐ wǒ gùrán dǒng, kěshì, wǒ díquè shuō bu chū tā suǒ shuō de mùbiāo.',vn:'Không có mục tiêu thì thiếu động lực, đạo lý này tất nhiên tôi hiểu, nhưng quả thật tôi không nói ra được cái mục tiêu mà cô ấy nói.'},
     {zh:'考上大学固然好，没考上大学也不是就没有出路了。',py:'Kǎoshàng dàxué gùrán hǎo, méi kǎoshàng dàxué yě bú shì jiù méiyǒu chūlù le.',vn:'Đỗ đại học tất nhiên là tốt, không đỗ đại học cũng không phải là hết đường.'},
     {zh:'这么做，好固然是好，可是又费时间，成本又高，肯定不行。',py:'Zhème zuò, hǎo gùrán shì hǎo, kěshì yòu fèi shíjiān, chéngběn yòu gāo, kěndìng bù xíng.',vn:'Làm như vậy tốt thì tất nhiên là tốt, nhưng vừa tốn thời gian, chi phí lại cao, chắc chắn không được.'}
   ],
   colloFull:[
     {zh:'固然……可是……',py:'gùrán……kěshì……',vn:'tất nhiên… nhưng…'},
     {zh:'固然……但是……',py:'gùrán……dànshì……',vn:'tuy… nhưng…'},
     {zh:'固然……也……',py:'gùrán……yě……',vn:'tất nhiên… (mà)… cũng…'},
     {zh:'好固然是好',py:'hǎo gùrán shì hǎo',vn:'tốt thì tốt thật'},
     {zh:'固然重要',py:'gùrán zhòngyào',vn:'tất nhiên quan trọng'}
   ],
   patterns:[
     {s:'A 固然……，可是 / 但是 B……',m:'A tất nhiên…, nhưng B…'},
     {s:'A 固然……，B 也……',m:'A tất nhiên…, B cũng…'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Điểm thi tất nhiên quan trọng, nhưng sức khỏe còn quan trọng hơn.',answer:'考试成绩固然重要，但是身体健康更重要。',answerPy:'Kǎoshì chéngjì gùrán zhòngyào, dànshì shēntǐ jiànkāng gèng zhòngyào.',
      note:'固然……但是…… thừa nhận rồi chuyển ý; 更 so sánh tăng tiến.',pair:'固然……但是……'},
     {promptLang:'vi',prompt:'Du học tất nhiên tốt, học ở trong nước cũng có thể học giỏi tiếng Trung.',answer:'出国留学固然好，在国内学习也能学好汉语。',answerPy:'Chūguó liúxué gùrán hǎo, zài guónèi xuéxí yě néng xuéhǎo Hànyǔ.',
      note:'固然……也…… chuyển ý nhẹ, nhấn vào vế sau.',pair:'固然……也……'}
   ]},

  {n:26,zh:'恳切',py:'kěnqiè',pos:'Tính từ',vn:'tha thiết, ân cần, thành khẩn',hv:'khẩn thiết',em:'🙏',lesson:1,
   explain:['Thành tâm, tha thiết (thái độ, lời nói): 真诚恳切, 语气恳切.','Bẫy Hán–Việt: "khẩn thiết" tiếng Việt hay hiểu là gấp gáp (紧急 / 迫切); 恳切 tiếng Trung là THÀNH KHẨN, tha thiết.'],
   usage:'态度 / 语气 / 言辞 + 恳切; 恳切地 + 请求 / 希望 / 说.',
   collo:['真诚恳切','态度恳切','恳切地请求','语气恳切'],
   ex_zh:'他态度和蔼，真诚恳切，我被打动了。',ex_py:'Tā tàidu hé\'ǎi, zhēnchéng kěnqiè, wǒ bèi dǎdòng le.',ex_vn:'Anh ấy thái độ hòa nhã, chân thành tha thiết, tôi bị lay động.',
   exList:[
     {zh:'他态度和蔼，真诚恳切，我被打动了。',py:'Tā tàidu hé\'ǎi, zhēnchéng kěnqiè, wǒ bèi dǎdòng le.',vn:'Anh ấy thái độ hòa nhã, chân thành tha thiết, tôi bị lay động.'},
     {zh:'老师恳切地希望我们能好好珍惜时间。',py:'Lǎoshī kěnqiè de xīwàng wǒmen néng hǎohǎo zhēnxī shíjiān.',vn:'Thầy tha thiết mong chúng tôi biết trân trọng thời gian.'},
     {zh:'他的道歉非常恳切，我最终原谅了他。',py:'Tā de dàoqiàn fēicháng kěnqiè, wǒ zuìzhōng yuánliàngle tā.',vn:'Lời xin lỗi của anh ấy rất thành khẩn, cuối cùng tôi đã tha thứ cho anh ấy.'}
   ],
   colloFull:[
     {zh:'真诚恳切',py:'zhēnchéng kěnqiè',vn:'chân thành tha thiết'},
     {zh:'态度恳切',py:'tàidu kěnqiè',vn:'thái độ thành khẩn'},
     {zh:'恳切地请求',py:'kěnqiè de qǐngqiú',vn:'tha thiết thỉnh cầu'},
     {zh:'语气恳切',py:'yǔqì kěnqiè',vn:'giọng tha thiết'},
     {zh:'言辞恳切',py:'yáncí kěnqiè',vn:'lời lẽ thành khẩn'}
   ],
   patterns:[
     {s:'态度 / 语气 + 恳切',m:'Thái độ / giọng thành khẩn'},
     {s:'恳切地 + V',m:'Tha thiết (làm gì)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Thấy anh ấy thái độ thành khẩn như vậy, tôi ngại không từ chối nữa.',answer:'看他态度这么恳切，我不好意思再拒绝了。',answerPy:'Kàn tā tàidu zhème kěnqiè, wǒ bù hǎoyìsi zài jùjué le.',
      note:'不好意思 + V = ngại (làm gì); 再……了 = … nữa.',pair:'不好意思……'},
     {promptLang:'vi',prompt:'Tuy lời lẽ của cô ấy rất thành khẩn, nhưng giám đốc vẫn không đồng ý.',answer:'虽然她的言辞很恳切，但是经理还是没有同意。',answerPy:'Suīrán tā de yáncí hěn kěnqiè, dànshì jīnglǐ háishi méiyǒu tóngyì.',
      note:'虽然……但是…… + 还是 = vẫn.',pair:'虽然……但是……'}
   ]},

  {n:27,zh:'无非',py:'wúfēi',pos:'Phó từ',vn:'chẳng qua, chỉ là',hv:'vô phi',em:'🤷',lesson:1,
   explain:['Không vượt ra khỏi một phạm vi nào đó, nghĩa là 只, 不过 — làm nhẹ sự việc.','Hay đi với 是: 无非是……; khác 而已 ở VỊ TRÍ: 无非 đứng trước, 而已 đứng cuối câu (có thể dùng cùng nhau).'],
   usage:'无非（是）+ N / V; 无非是……罢了 / 而已.',
   collo:['无非是','无非是为了','无非想','无非是……而已'],
   ex_zh:'学习语言无非是为了看原文电影、读文学作品。',ex_py:'Xuéxí yǔyán wúfēi shì wèile kàn yuánwén diànyǐng, dú wénxué zuòpǐn.',ex_vn:'Học ngôn ngữ chẳng qua là để xem phim nguyên bản, đọc tác phẩm văn học.',
   exList:[
     {zh:'学习语言无非是为了看原文电影、读文学作品。',py:'Xuéxí yǔyán wúfēi shì wèile kàn yuánwén diànyǐng, dú wénxué zuòpǐn.',vn:'Học ngôn ngữ chẳng qua là để xem phim nguyên bản, đọc tác phẩm văn học.'},
     {zh:'他这么努力地工作，无非想多挣些钱，让妻子、孩子生活得更舒适。',py:'Tā zhème nǔlì de gōngzuò, wúfēi xiǎng duō zhèng xiē qián, ràng qīzi, háizi shēnghuó de gèng shūshì.',vn:'Anh ấy làm việc chăm chỉ như vậy chẳng qua là muốn kiếm thêm ít tiền để vợ con sống thoải mái hơn.'},
     {zh:'周末我无非是在家看看书、打打球。',py:'Zhōumò wǒ wúfēi shì zài jiā kànkan shū, dǎda qiú.',vn:'Cuối tuần tôi chẳng qua là ở nhà đọc sách, chơi bóng thôi.'}
   ],
   colloFull:[
     {zh:'无非是',py:'wúfēi shì',vn:'chẳng qua là'},
     {zh:'无非是为了',py:'wúfēi shì wèile',vn:'chẳng qua là để'},
     {zh:'无非想',py:'wúfēi xiǎng',vn:'chẳng qua muốn'},
     {zh:'无非是……而已',py:'wúfēi shì……éryǐ',vn:'chẳng qua chỉ là… mà thôi'},
     {zh:'无非是……罢了',py:'wúfēi shì……bàle',vn:'chẳng qua là… thôi'}
   ],
   patterns:[
     {s:'无非（是）+ ……',m:'Chẳng qua là…'},
     {s:'无非是……而已 / 罢了',m:'Chẳng qua chỉ là… mà thôi'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cậu ấy đối tốt với cậu như vậy, chẳng qua là muốn cậu giúp cậu ấy làm bài tập.',answer:'他对你这么好，无非是想让你帮他写作业。',answerPy:'Tā duì nǐ zhème hǎo, wúfēi shì xiǎng ràng nǐ bāng tā xiě zuòyè.',
      note:'无非是 + V; 让 + người + V (câu kiêm ngữ).',pair:'让 + người + V'},
     {promptLang:'vi',prompt:'Bố mẹ cằn nhằn nhiều như vậy, chẳng qua là lo cho con thôi, con đừng giận nữa.',answer:'父母唠叨这么多，无非是担心你而已，你就别生气了。',answerPy:'Fùmǔ láodao zhème duō, wúfēi shì dānxīn nǐ éryǐ, nǐ jiù bié shēngqì le.',
      note:'无非是……而已 hai từ hô ứng; 就别……了 khuyên nhủ nhẹ nhàng.',pair:'别……了'}
   ]},

  {n:28,zh:'知音',py:'zhīyīn',pos:'Danh từ',vn:'tri âm, bạn tri kỷ',hv:'tri âm',em:'🎼',lesson:1,
   explain:['Người hiểu mình, hợp ý mình. Gốc từ chuyện Bá Nha – Chung Tử Kỳ (伯牙和钟子期): chỉ Chung Tử Kỳ hiểu được tiếng đàn của Bá Nha.','Hay gặp: 碰上 / 遇到知音, 知音难觅 (tri âm khó tìm).'],
   usage:'碰上 / 遇到 / 找到 + 知音; 是……的知音.',
   collo:['碰上知音','遇到知音','难得的知音','知音难觅'],
   ex_zh:'“对！”我欢天喜地，终于碰上了知音。',ex_py:'“Duì!” Wǒ huāntiān-xǐdì, zhōngyú pèngshàngle zhīyīn.',ex_vn:'"Đúng!" Tôi mừng rỡ, cuối cùng cũng gặp được tri âm.',
   exList:[
     {zh:'“对！”我欢天喜地，终于碰上了知音。',py:'“Duì!” Wǒ huāntiān-xǐdì, zhōngyú pèngshàngle zhīyīn.',vn:'"Đúng!" Tôi mừng rỡ, cuối cùng cũng gặp được tri âm.'},
     {zh:'人生难得遇到一个真正的知音。',py:'Rénshēng nándé yùdào yí ge zhēnzhèng de zhīyīn.',vn:'Đời người hiếm khi gặp được một người tri âm thật sự.'},
     {zh:'我们俩爱好相同，聊得特别投机，真是难得的知音。',py:'Wǒmen liǎ àihào xiāngtóng, liáo de tèbié tóujī, zhēn shì nándé de zhīyīn.',vn:'Hai chúng tôi cùng sở thích, nói chuyện rất hợp, đúng là tri âm hiếm có.'}
   ],
   colloFull:[
     {zh:'碰上知音',py:'pèngshàng zhīyīn',vn:'gặp được tri âm'},
     {zh:'遇到知音',py:'yùdào zhīyīn',vn:'gặp tri âm'},
     {zh:'难得的知音',py:'nándé de zhīyīn',vn:'tri âm hiếm có'},
     {zh:'知音难觅',py:'zhīyīn nán mì',vn:'tri âm khó tìm'},
     {zh:'人生知音',py:'rénshēng zhīyīn',vn:'tri âm của đời người'}
   ],
   patterns:[
     {s:'碰上 / 遇到 + 知音',m:'Gặp được tri âm'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Không ngờ ở một nơi xa lạ, tôi lại gặp được tri âm.',answer:'没想到在陌生的地方，我居然遇到了知音。',answerPy:'Méi xiǎngdào zài mòshēng de dìfang, wǒ jūrán yùdàole zhīyīn.',
      note:'居然 = vậy mà (điều bất ngờ); đặt trước động từ.',pair:'居然'},
     {promptLang:'vi',prompt:'Tri âm khó tìm, vì vậy chúng ta nên trân trọng tình bạn này.',answer:'知音难觅，因此我们应该珍惜这份友谊。',answerPy:'Zhīyīn nán mì, yīncǐ wǒmen yīnggāi zhēnxī zhè fèn yǒuyì.',
      note:'因此 = vì vậy (văn viết); lượng từ 份 dùng cho tình cảm.',pair:'因此'}
   ]},

  {n:29,zh:'客户',py:'kèhù',pos:'Danh từ',vn:'khách hàng',hv:'khách hộ',em:'💼',lesson:1,
   explain:['Người / đơn vị có quan hệ mua bán, dùng dịch vụ lâu dài với công ty: 老客户, 大客户.','Khác 顾客 (khách mua hàng ở cửa hàng) — 客户 thiên về khách hàng của công ty, dịch vụ.'],
   usage:'接待 / 联系 / 拜访 / 服务 + 客户; 老客户, 大客户.',
   collo:['老客户','大客户','联系客户','拜访客户'],
   ex_zh:'我碰到过您这样的客户。',ex_py:'Wǒ pèngdàoguo nín zhèyàng de kèhù.',ex_vn:'Tôi từng gặp những khách hàng như chị rồi.',
   exList:[
     {zh:'我碰到过您这样的客户。',py:'Wǒ pèngdàoguo nín zhèyàng de kèhù.',vn:'Tôi từng gặp những khách hàng như chị rồi.'},
     {zh:'我们要为客户提供更好的服务。',py:'Wǒmen yào wèi kèhù tígōng gèng hǎo de fúwù.',vn:'Chúng ta phải cung cấp dịch vụ tốt hơn cho khách hàng.'},
     {zh:'爸爸明天要去上海拜访一位重要的客户。',py:'Bàba míngtiān yào qù Shànghǎi bàifǎng yí wèi zhòngyào de kèhù.',vn:'Ngày mai bố phải đi Thượng Hải gặp một khách hàng quan trọng.'}
   ],
   colloFull:[
     {zh:'老客户',py:'lǎo kèhù',vn:'khách quen'},
     {zh:'大客户',py:'dà kèhù',vn:'khách hàng lớn'},
     {zh:'联系客户',py:'liánxì kèhù',vn:'liên hệ khách hàng'},
     {zh:'拜访客户',py:'bàifǎng kèhù',vn:'đến gặp khách hàng'},
     {zh:'客户满意',py:'kèhù mǎnyì',vn:'khách hàng hài lòng'}
   ],
   patterns:[
     {s:'为客户 + 提供 + 服务',m:'Cung cấp dịch vụ cho khách hàng'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần khách hàng hài lòng, chúng tôi vất vả mấy cũng thấy đáng.',answer:'只要客户满意，我们再辛苦也值得。',answerPy:'Zhǐyào kèhù mǎnyì, wǒmen zài xīnkǔ yě zhíde.',
      note:'只要……; 再 + tính từ + 也 = dù… mấy cũng.',pair:'再……也……'},
     {promptLang:'vi',prompt:'Anh ấy đối với khách hàng nào cũng rất nhiệt tình, vì vậy khách quen ngày càng nhiều.',answer:'他对每位客户都很热情，所以老客户越来越多。',answerPy:'Tā duì měi wèi kèhù dōu hěn rèqíng, suǒyǐ lǎo kèhù yuè lái yuè duō.',
      note:'越来越 + tính từ = ngày càng…',pair:'越来越'}
   ]},

  {n:30,zh:'持久',py:'chíjiǔ',pos:'Tính từ',vn:'lâu dài, bền lâu',hv:'trì cửu',em:'⏳',lesson:1,
   explain:['Giữ được lâu, không nhanh chóng mất đi: 难以持久, 持久的兴趣.','Thường đi với 难以 / 能够 / 保持.'],
   usage:'难以持久; 持久的 + 兴趣 / 动力 / 和平; 效果持久.',
   collo:['难以持久','持久的兴趣','持久战','持久的动力'],
   ex_zh:'可是，光凭兴趣，恐怕难以持久。',ex_py:'Kěshì, guāng píng xìngqù, kǒngpà nányǐ chíjiǔ.',ex_vn:'Nhưng chỉ dựa vào hứng thú thì e là khó bền lâu.',
   exList:[
     {zh:'可是，光凭兴趣，恐怕难以持久。',py:'Kěshì, guāng píng xìngqù, kǒngpà nányǐ chíjiǔ.',vn:'Nhưng chỉ dựa vào hứng thú thì e là khó bền lâu.'},
     {zh:'学习一门外语，光依靠热情是远远不够的，那样的话，恐怕难以持久。',py:'Xuéxí yì mén wàiyǔ, guāng yīkào rèqíng shì yuǎnyuǎn bú gòu de, nàyàng dehuà, kǒngpà nányǐ chíjiǔ.',vn:'Học một ngoại ngữ, chỉ dựa vào nhiệt tình thì còn lâu mới đủ, như vậy e là khó bền lâu.'},
     {zh:'减肥是一场持久战，不能急于求成。',py:'Jiǎnféi shì yì chǎng chíjiǔzhàn, bù néng jíyú qiú chéng.',vn:'Giảm cân là một cuộc chiến lâu dài, không thể nóng vội.'}
   ],
   colloFull:[
     {zh:'难以持久',py:'nányǐ chíjiǔ',vn:'khó bền lâu'},
     {zh:'持久的兴趣',py:'chíjiǔ de xìngqù',vn:'hứng thú lâu dài'},
     {zh:'持久战',py:'chíjiǔzhàn',vn:'cuộc chiến lâu dài'},
     {zh:'持久的动力',py:'chíjiǔ de dònglì',vn:'động lực bền bỉ'},
     {zh:'效果持久',py:'xiàoguǒ chíjiǔ',vn:'hiệu quả lâu dài'}
   ],
   patterns:[
     {s:'(恐怕) 难以持久',m:'(E là) khó bền lâu'},
     {s:'持久的 + N',m:'… lâu dài'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Hứng thú tất nhiên quan trọng, nhưng chỉ có kiên trì mới có thể lâu dài.',answer:'兴趣固然重要，可是只有坚持才能持久。',answerPy:'Xìngqù gùrán zhòngyào, kěshì zhǐyǒu jiānchí cái néng chíjiǔ.',
      note:'只有……才…… điều kiện duy nhất; kết hợp với 固然……可是…….',pair:'只有……才……'},
     {promptLang:'vi',prompt:'Nếu chỉ dựa vào hứng thú, e là khó bền lâu.',answer:'如果只凭兴趣，恐怕难以持久。',answerPy:'Rúguǒ zhǐ píng xìngqù, kǒngpà nányǐ chíjiǔ.',
      note:'恐怕 = e rằng; 难以 + V = khó mà.',pair:'恐怕'}
   ]},

  {n:31,zh:'崩溃',py:'bēngkuì',pos:'Động từ',vn:'sụp đổ, suy sụp',hv:'băng hội',em:'🤯',lesson:1,
   explain:['Nghĩa gốc: sụp đổ hoàn toàn (kinh tế, hệ thống): 经济崩溃, 系统崩溃.','Khẩu ngữ hiện đại: suy sụp tinh thần, "phát điên" vì bực bội / thất vọng: 我顿时崩溃了.'],
   usage:'(精神 / 情绪) + 崩溃; 让人崩溃; 快要崩溃了; máy tính: 系统崩溃.',
   collo:['顿时崩溃','精神崩溃','让人崩溃','系统崩溃'],
   ex_zh:'我顿时崩溃了，怎么说着说着又绕回来了。',ex_py:'Wǒ dùnshí bēngkuì le, zěnme shuōzhe shuōzhe yòu rào huílái le.',ex_vn:'Tôi lập tức suy sụp: sao nói mãi nói mãi lại vòng về chỗ cũ.',
   exList:[
     {zh:'我顿时崩溃了，怎么说着说着又绕回来了。',py:'Wǒ dùnshí bēngkuì le, zěnme shuōzhe shuōzhe yòu rào huílái le.',vn:'Tôi lập tức suy sụp: sao nói mãi nói mãi lại vòng về chỗ cũ.'},
     {zh:'作业写了一晚上，电脑突然死机，我真的要崩溃了。',py:'Zuòyè xiěle yì wǎnshang, diànnǎo tūrán sǐjī, wǒ zhēn de yào bēngkuì le.',vn:'Làm bài tập cả buổi tối, máy tính đột nhiên bị treo, tôi thật sự sắp phát điên rồi.'},
     {zh:'连续几个晚上睡不好，她的精神几乎崩溃了。',py:'Liánxù jǐ ge wǎnshang shuì bu hǎo, tā de jīngshén jīhū bēngkuì le.',vn:'Mấy đêm liền ngủ không ngon, tinh thần cô ấy gần như suy sụp.'}
   ],
   colloFull:[
     {zh:'顿时崩溃',py:'dùnshí bēngkuì',vn:'lập tức suy sụp'},
     {zh:'精神崩溃',py:'jīngshén bēngkuì',vn:'suy sụp tinh thần'},
     {zh:'让人崩溃',py:'ràng rén bēngkuì',vn:'khiến người ta phát điên'},
     {zh:'系统崩溃',py:'xìtǒng bēngkuì',vn:'hệ thống bị sập'},
     {zh:'快要崩溃了',py:'kuàiyào bēngkuì le',vn:'sắp suy sụp rồi'}
   ],
   patterns:[
     {s:'(某人) + 顿时 / 快要 + 崩溃了',m:'Suy sụp, phát điên (khẩu ngữ)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đề thi khó đến mức làm người ta phát điên.',answer:'考试题难得让人崩溃。',answerPy:'Kǎoshì tí nán de ràng rén bēngkuì.',
      note:'Tính từ + 得 + 让人 + V: bổ ngữ chỉ mức độ.',pair:'Adj + 得 + ……'},
     {promptLang:'vi',prompt:'Vừa nghe nói phải thi lại, cậu ấy lập tức suy sụp.',answer:'一听说要重新考试，他顿时崩溃了。',answerPy:'Yì tīngshuō yào chóngxīn kǎoshì, tā dùnshí bēngkuì le.',
      note:'顿时 (bài 2 HSK 6) = ngay lập tức; đã có 顿时 thì vế sau không cần 就.',pair:'一……（就）……'}
   ]},

  {n:32,zh:'果断',py:'guǒduàn',pos:'Tính từ',vn:'quả quyết, dứt khoát',hv:'quả đoán',em:'✊',lesson:1,
   explain:['Quyết định nhanh, dứt khoát, không do dự: 果断地站起来, 做事果断.','Nghĩa tốt (khen). Đối lập: 犹豫.'],
   usage:'果断地 + V; 做事 / 处理 + 果断; 果断的决定.',
   collo:['果断地决定','做事果断','果断地站起来','果断处理'],
   ex_zh:'我果断地站起来，斩钉截铁地表明要走。',ex_py:'Wǒ guǒduàn de zhàn qǐlái, zhǎndīng-jiétiě de biǎomíng yào zǒu.',ex_vn:'Tôi dứt khoát đứng dậy, quả quyết nói rõ là mình muốn đi.',
   exList:[
     {zh:'我果断地站起来，斩钉截铁地表明要走。',py:'Wǒ guǒduàn de zhàn qǐlái, zhǎndīng-jiétiě de biǎomíng yào zǒu.',vn:'Tôi dứt khoát đứng dậy, quả quyết nói rõ là mình muốn đi.'},
     {zh:'他做事一向很果断，从不犹豫。',py:'Tā zuò shì yíxiàng hěn guǒduàn, cóng bù yóuyù.',vn:'Anh ấy làm việc xưa nay rất quyết đoán, chưa bao giờ do dự.'},
     {zh:'发现方向错了，队长果断地决定往回走。',py:'Fāxiàn fāngxiàng cuò le, duìzhǎng guǒduàn de juédìng wǎng huí zǒu.',vn:'Phát hiện đi sai hướng, đội trưởng dứt khoát quyết định quay lại.'}
   ],
   colloFull:[
     {zh:'果断地决定',py:'guǒduàn de juédìng',vn:'dứt khoát quyết định'},
     {zh:'做事果断',py:'zuò shì guǒduàn',vn:'làm việc quyết đoán'},
     {zh:'果断地站起来',py:'guǒduàn de zhàn qǐlái',vn:'dứt khoát đứng dậy'},
     {zh:'果断处理',py:'guǒduàn chǔlǐ',vn:'xử lý dứt khoát'},
     {zh:'果断的决定',py:'guǒduàn de juédìng',vn:'quyết định dứt khoát'}
   ],
   patterns:[
     {s:'果断地 + V',m:'Dứt khoát làm gì'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Gặp tình huống khẩn cấp, chỉ có xử lý dứt khoát mới có thể giảm tổn thất.',answer:'遇到紧急情况，只有果断处理，才能减少损失。',answerPy:'Yùdào jǐnjí qíngkuàng, zhǐyǒu guǒduàn chǔlǐ, cái néng jiǎnshǎo sǔnshī.',
      note:'只有……才…… điều kiện duy nhất.',pair:'只有……才……'},
     {promptLang:'vi',prompt:'Thay vì để cậu ấy cứ chờ mãi, chi bằng dứt khoát từ chối cậu ấy.',answer:'与其让他一直等下去，不如果断地拒绝他。',answerPy:'Yǔqí ràng tā yìzhí děng xiàqù, bùrú guǒduàn de jùjué tā.',
      note:'与其 A，不如 B = thay vì A chi bằng B (chọn B).',pair:'与其……不如……'}
   ]},

  {n:33,zh:'斩钉截铁',py:'zhǎndīng-jiétiě',pos:'Thành ngữ',vn:'như đinh đóng cột, cương quyết',hv:'trảm đinh tiệt thiết',em:'🔨',lesson:1,
   explain:['Chặt đinh, cắt sắt → nói năng, hành động dứt khoát, kiên quyết, không chút do dự.','Thường làm trạng ngữ: 斩钉截铁地说 / 表明 / 拒绝.'],
   usage:'斩钉截铁地 + 说 / 回答 / 拒绝 / 表明. Gần nghĩa 果断 nhưng mạnh hơn, thường nói về lời nói.',
   collo:['斩钉截铁地说','斩钉截铁地拒绝','斩钉截铁地表明','斩钉截铁地回答'],
   ex_zh:'面对对方的邀请，他斩钉截铁地拒绝了。',ex_py:'Miànduì duìfāng de yāoqǐng, tā zhǎndīng-jiétiě de jùjué le.',ex_vn:'Trước lời mời của đối phương, anh ấy dứt khoát từ chối.',
   exList:[
     {zh:'面对对方的邀请，他斩钉截铁地拒绝了。',py:'Miànduì duìfāng de yāoqǐng, tā zhǎndīng-jiétiě de jùjué le.',vn:'Trước lời mời của đối phương, anh ấy dứt khoát từ chối.'},
     {zh:'我果断地站起来，斩钉截铁地表明要走。',py:'Wǒ guǒduàn de zhàn qǐlái, zhǎndīng-jiétiě de biǎomíng yào zǒu.',vn:'Tôi dứt khoát đứng dậy, quả quyết nói rõ là mình muốn đi.'},
     {zh:'“我一定要考上北京大学！”她斩钉截铁地说。',py:'“Wǒ yídìng yào kǎoshàng Běijīng Dàxué!” Tā zhǎndīng-jiétiě de shuō.',vn:'"Mình nhất định phải đỗ Đại học Bắc Kinh!" Cô ấy nói chắc như đinh đóng cột.'}
   ],
   colloFull:[
     {zh:'斩钉截铁地说',py:'zhǎndīng-jiétiě de shuō',vn:'nói chắc như đinh đóng cột'},
     {zh:'斩钉截铁地拒绝',py:'zhǎndīng-jiétiě de jùjué',vn:'dứt khoát từ chối'},
     {zh:'斩钉截铁地表明',py:'zhǎndīng-jiétiě de biǎomíng',vn:'dứt khoát tỏ rõ'},
     {zh:'斩钉截铁地回答',py:'zhǎndīng-jiétiě de huídá',vn:'trả lời dứt khoát'}
   ],
   patterns:[
     {s:'斩钉截铁地 + 说 / 拒绝 / 表明',m:'Nói / từ chối / tỏ rõ một cách dứt khoát'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bất kể người khác khuyên thế nào, anh ấy đều dứt khoát trả lời: "Không đi!"',answer:'不管别人怎么劝，他都斩钉截铁地回答：“不去！”',answerPy:'Bùguǎn biérén zěnme quàn, tā dōu zhǎndīng-jiétiě de huídá: “Bú qù!”',
      note:'不管……都…… = bất kể… đều…',pair:'不管……都……'},
     {promptLang:'vi',prompt:'Bố nói chắc như đinh đóng cột rằng sang năm nhất định sẽ đưa cả nhà đi Bắc Kinh.',answer:'爸爸斩钉截铁地说，明年一定带全家去北京。',answerPy:'Bàba zhǎndīng-jiétiě de shuō, míngnián yídìng dài quánjiā qù Běijīng.',
      note:'斩钉截铁地 + 说 + nội dung; 一定 = nhất định.',pair:'一定'}
   ]},

  {n:34,zh:'思维',py:'sīwéi',pos:'Danh từ',vn:'tư duy, cách suy nghĩ',hv:'tư duy',em:'🧠',lesson:1,
   explain:['Quá trình và cách thức suy nghĩ của con người: 思维方式, 逻辑思维.','Văn viết cũng dùng làm động từ: suy nghĩ.'],
   usage:'思维方式, 逻辑思维, 创新思维, 思维能力; 和……的思维很搭 (hợp cách nghĩ).',
   collo:['思维方式','逻辑思维','思维能力','创新思维'],
   ex_zh:'每个句子的语法都详细讲解，不留死角，和我的思维很搭。',ex_py:'Měi ge jùzi de yǔfǎ dōu xiángxì jiǎngjiě, bù liú sǐjiǎo, hé wǒ de sīwéi hěn dā.',ex_vn:'Ngữ pháp của từng câu đều được giảng giải chi tiết, không bỏ sót chỗ nào, rất hợp với cách tư duy của tôi.',
   exList:[
     {zh:'每个句子的语法都详细讲解，不留死角，和我的思维很搭。',py:'Měi ge jùzi de yǔfǎ dōu xiángxì jiǎngjiě, bù liú sǐjiǎo, hé wǒ de sīwéi hěn dā.',vn:'Ngữ pháp của từng câu đều được giảng giải chi tiết, không bỏ sót chỗ nào, rất hợp với cách tư duy của tôi.'},
     {zh:'学外语能帮助我们了解不同的思维方式。',py:'Xué wàiyǔ néng bāngzhù wǒmen liǎojiě bù tóng de sīwéi fāngshì.',vn:'Học ngoại ngữ có thể giúp chúng ta hiểu những lối tư duy khác nhau.'},
     {zh:'下棋可以锻炼孩子的逻辑思维能力。',py:'Xià qí kěyǐ duànliàn háizi de luójí sīwéi nénglì.',vn:'Chơi cờ có thể rèn luyện khả năng tư duy logic cho trẻ.'}
   ],
   colloFull:[
     {zh:'思维方式',py:'sīwéi fāngshì',vn:'lối tư duy'},
     {zh:'逻辑思维',py:'luójí sīwéi',vn:'tư duy logic'},
     {zh:'思维能力',py:'sīwéi nénglì',vn:'năng lực tư duy'},
     {zh:'创新思维',py:'chuàngxīn sīwéi',vn:'tư duy đổi mới'},
     {zh:'和我的思维很搭',py:'hé wǒ de sīwéi hěn dā',vn:'hợp cách nghĩ của tôi'}
   ],
   patterns:[
     {s:'……的思维方式',m:'Lối tư duy của…'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Người phương Đông và người phương Tây có lối tư duy khác nhau, vì vậy đôi khi dễ nảy sinh hiểu lầm.',answer:'东方人和西方人的思维方式不同，因此有时候容易产生误会。',answerPy:'Dōngfāngrén hé xīfāngrén de sīwéi fāngshì bù tóng, yīncǐ yǒu shíhou róngyì chǎnshēng wùhuì.',
      note:'因此 = vì vậy (văn viết), nêu kết quả.',pair:'因此'},
     {promptLang:'vi',prompt:'Học toán không chỉ để thi, mà hơn thế là để rèn luyện tư duy.',answer:'学数学不仅是为了考试，更是为了锻炼思维。',answerPy:'Xué shùxué bùjǐn shì wèile kǎoshì, gèng shì wèile duànliàn sīwéi.',
      note:'不仅……更…… tăng tiến, vế sau quan trọng hơn.',pair:'不仅……更……'}
   ]},

  {n:35,zh:'搭',py:'dā',pos:'Động từ',vn:'ăn khớp, phù hợp; dựng; đi nhờ',hv:'đáp',em:'🧩',lesson:1,
   explain:['Khẩu ngữ: hợp nhau, ăn khớp: 和我的思维很搭, 这两种颜色很搭.','Các nghĩa khác: dựng (搭帐篷), đi nhờ / đi (搭车, 搭飞机).'],
   usage:'A 和 B (很) 搭; 搭配 (phối hợp); 搭车, 搭飞机, 搭帐篷.',
   collo:['很搭','搭帐篷','搭车','搭配'],
   ex_zh:'这件白衬衫和你的牛仔裤很搭。',ex_py:'Zhè jiàn bái chènshān hé nǐ de niúzǎikù hěn dā.',ex_vn:'Chiếc sơ mi trắng này rất hợp với quần bò của bạn.',
   exList:[
     {zh:'这件白衬衫和你的牛仔裤很搭。',py:'Zhè jiàn bái chènshān hé nǐ de niúzǎikù hěn dā.',vn:'Chiếc sơ mi trắng này rất hợp với quần bò của bạn.'},
     {zh:'这家网站从基础教起，和我的思维很搭。',py:'Zhè jiā wǎngzhàn cóng jīchǔ jiāo qǐ, hé wǒ de sīwéi hěn dā.',vn:'Trang web này dạy từ cơ bản, rất hợp với cách nghĩ của tôi.'},
     {zh:'我们在湖边搭了一个帐篷，在那儿住了一晚。',py:'Wǒmen zài hú biān dāle yí ge zhàngpeng, zài nàr zhùle yì wǎn.',vn:'Chúng tôi dựng một cái lều bên hồ, ở đó một đêm.'}
   ],
   colloFull:[
     {zh:'很搭',py:'hěn dā',vn:'rất hợp'},
     {zh:'搭帐篷',py:'dā zhàngpeng',vn:'dựng lều'},
     {zh:'搭车',py:'dā chē',vn:'đi nhờ xe'},
     {zh:'搭配',py:'dāpèi',vn:'phối hợp'},
     {zh:'搭飞机',py:'dā fēijī',vn:'đi máy bay'}
   ],
   patterns:[
     {s:'A 和 B (很) 搭',m:'A và B rất hợp nhau (khẩu ngữ)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tính cách hai người họ rất hợp, thảo nào lại thành bạn thân.',answer:'他们俩的性格很搭，难怪成了好朋友。',answerPy:'Tāmen liǎ de xìnggé hěn dā, nánguài chéngle hǎo péngyou.',
      note:'难怪 = thảo nào, khó trách (đã hiểu ra nguyên nhân).',pair:'难怪'},
     {promptLang:'vi',prompt:'Nếu màu sắc không hợp, thì quần áo đắt mấy cũng không đẹp.',answer:'如果颜色不搭，衣服再贵也不好看。',answerPy:'Rúguǒ yánsè bù dā, yīfu zài guì yě bù hǎokàn.',
      note:'再 + tính từ + 也 = dù… mấy cũng.',pair:'再……也……'}
   ]},

  {n:36,zh:'执行',py:'zhíxíng',pos:'Động từ',vn:'chấp hành, thực hiện',hv:'chấp hành',em:'✅',lesson:1,
   explain:['Thực hiện (kế hoạch, mệnh lệnh, quy định, nhiệm vụ) đã đặt ra: 执行学习计划, 执行任务.','Trang trọng; tân ngữ thường là 计划 / 命令 / 规定 / 政策 / 任务.'],
   usage:'执行 + 计划 / 任务 / 命令 / 规定; 严格执行; 执行得很好.',
   collo:['执行计划','执行任务','严格执行','执行规定'],
   ex_zh:'没有人硬逼着我执行学习计划。',ex_py:'Méiyǒu rén yìng bīzhe wǒ zhíxíng xuéxí jìhuà.',ex_vn:'Không có ai ép buộc tôi thực hiện kế hoạch học tập.',
   exList:[
     {zh:'没有人硬逼着我执行学习计划。',py:'Méiyǒu rén yìng bīzhe wǒ zhíxíng xuéxí jìhuà.',vn:'Không có ai ép buộc tôi thực hiện kế hoạch học tập.'},
     {zh:'最后，严格执行学习计划也是非常重要的。',py:'Zuìhòu, yángé zhíxíng xuéxí jìhuà yě shì fēicháng zhòngyào de.',vn:'Cuối cùng, thực hiện nghiêm túc kế hoạch học tập cũng rất quan trọng.'},
     {zh:'计划制订得再好，不执行也没有用。',py:'Jìhuà zhìdìng de zài hǎo, bù zhíxíng yě méiyǒu yòng.',vn:'Kế hoạch lập ra có tốt mấy mà không thực hiện thì cũng vô dụng.'}
   ],
   colloFull:[
     {zh:'执行计划',py:'zhíxíng jìhuà',vn:'thực hiện kế hoạch'},
     {zh:'执行任务',py:'zhíxíng rènwu',vn:'thực hiện nhiệm vụ'},
     {zh:'严格执行',py:'yángé zhíxíng',vn:'thực hiện nghiêm túc'},
     {zh:'执行规定',py:'zhíxíng guīdìng',vn:'chấp hành quy định'},
     {zh:'执行命令',py:'zhíxíng mìnglìng',vn:'chấp hành mệnh lệnh'}
   ],
   patterns:[
     {s:'严格 + 执行 + 计划 / 规定',m:'Nghiêm túc thực hiện…'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Dù có ai giám sát hay không, cậu ấy đều thực hiện kế hoạch học tập rất nghiêm túc.',answer:'不管有没有人监督，他都严格执行学习计划。',answerPy:'Bùguǎn yǒu méiyǒu rén jiāndū, tā dōu yángé zhíxíng xuéxí jìhuà.',
      note:'不管 + câu hỏi chính phản (有没有), 都 + kết quả không đổi.',pair:'不管……都……'},
     {promptLang:'vi',prompt:'Kế hoạch đã định rồi thì phải thực hiện đến cùng.',answer:'既然计划已经定了，就要执行到底。',answerPy:'Jìrán jìhuà yǐjīng dìng le, jiù yào zhíxíng dàodǐ.',
      note:'既然 + sự thật đã có, 就 + kết luận; V + 到底 = làm đến cùng.',pair:'既然……就……'}
   ]},

  {n:37,zh:'啥',py:'shá',pos:'Đại từ',vn:'gì, cái gì, nào (khẩu ngữ)',hv:'xá',em:'❓',lesson:1,
   explain:['Khẩu ngữ (phương ngữ phía Bắc), = 什么: 为啥 = 为什么, 干啥 = 干什么.','Chỉ dùng trong khẩu ngữ thân mật; văn viết trang trọng dùng 什么.'],
   usage:'为啥, 干啥, 啥事, 啥东西, 没啥. Không dùng trong văn bản trang trọng.',
   collo:['为啥','干啥','啥东西','没啥'],
   ex_zh:'也没人问我为啥要学它。',ex_py:'Yě méi rén wèn wǒ wèi shá yào xué tā.',ex_vn:'Cũng không ai hỏi tôi tại sao lại học nó.',
   exList:[
     {zh:'也没人问我为啥要学它。',py:'Yě méi rén wèn wǒ wèi shá yào xué tā.',vn:'Cũng không ai hỏi tôi tại sao lại học nó.'},
     {zh:'我很想知道里边是啥东西。',py:'Wǒ hěn xiǎng zhīdào lǐbian shì shá dōngxi.',vn:'Tôi rất muốn biết bên trong là cái gì.'},
     {zh:'你站在门口干啥呢？快进来吧！',py:'Nǐ zhàn zài ménkǒu gàn shá ne? Kuài jìnlái ba!',vn:'Cậu đứng ở cửa làm gì thế? Mau vào đi!'}
   ],
   colloFull:[
     {zh:'为啥',py:'wèi shá',vn:'tại sao'},
     {zh:'干啥',py:'gàn shá',vn:'làm gì'},
     {zh:'啥东西',py:'shá dōngxi',vn:'cái gì'},
     {zh:'没啥',py:'méi shá',vn:'không có gì'},
     {zh:'啥事',py:'shá shì',vn:'việc gì'}
   ],
   patterns:[
     {s:'为啥 / 干啥 / 啥 + N',m:'= 为什么 / 干什么 / 什么 + N (khẩu ngữ)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cậu có chuyện gì thì cứ nói thẳng, đừng khách sáo.',answer:'你有啥事就直说，别客气。',answerPy:'Nǐ yǒu shá shì jiù zhí shuō, bié kèqi.',
      note:'有……就…… = có… thì cứ…; 直说 = nói thẳng.',pair:'有……就……'},
     {promptLang:'vi',prompt:'Bất kể cậu nói gì, mẹ cũng sẽ không đồng ý đâu.',answer:'不管你说啥，妈妈都不会同意的。',answerPy:'Bùguǎn nǐ shuō shá, māma dōu bú huì tóngyì de.',
      note:'不管 + đại từ nghi vấn (啥), 都 + kết quả; 不会……的 khẳng định chắc chắn.',pair:'不管……都……'}
   ]},

  {n:38,zh:'薪水',py:'xīnshui',pos:'Danh từ',vn:'tiền lương',hv:'tân thủy',em:'💰',lesson:1,
   explain:['Tiền lương trả cho người làm việc; 薪 = củi, 水 = nước → xưa là tiền mua củi nước sinh hoạt.','Gần nghĩa: 工资 (phổ biến hơn).'],
   usage:'薪水 + 高 / 低; 发薪水, 拿薪水, 涨薪水. Hỏi lương người khác thường bị coi là 涉及隐私.',
   collo:['薪水很高','发薪水','涨薪水','拿薪水'],
   ex_zh:'也没人问我的单位、身份，包括薪水。',ex_py:'Yě méi rén wèn wǒ de dānwèi, shēnfen, bāokuò xīnshui.',ex_vn:'Cũng không ai hỏi cơ quan, thân phận của tôi, kể cả tiền lương.',
   exList:[
     {zh:'也没人问我的单位、身份，包括薪水。',py:'Yě méi rén wèn wǒ de dānwèi, shēnfen, bāokuò xīnshui.',vn:'Cũng không ai hỏi cơ quan, thân phận của tôi, kể cả tiền lương.'},
     {zh:'这份工作薪水不高，可是我很喜欢。',py:'Zhè fèn gōngzuò xīnshui bù gāo, kěshì wǒ hěn xǐhuan.',vn:'Công việc này lương không cao nhưng tôi rất thích.'},
     {zh:'每个月一发薪水，她就先给父母寄一部分。',py:'Měi ge yuè yì fā xīnshui, tā jiù xiān gěi fùmǔ jì yí bùfen.',vn:'Mỗi tháng vừa nhận lương là cô ấy gửi trước một phần cho bố mẹ.'}
   ],
   colloFull:[
     {zh:'薪水很高',py:'xīnshui hěn gāo',vn:'lương cao'},
     {zh:'发薪水',py:'fā xīnshui',vn:'phát lương'},
     {zh:'涨薪水',py:'zhǎng xīnshui',vn:'tăng lương'},
     {zh:'拿薪水',py:'ná xīnshui',vn:'nhận lương'},
     {zh:'一份薪水',py:'yí fèn xīnshui',vn:'một khoản lương'}
   ],
   patterns:[
     {s:'薪水 + 高 / 低',m:'Lương cao / thấp'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chọn công việc không thể chỉ nhìn tiền lương, mà còn phải xem mình có thích hay không.',answer:'选择工作不能只看薪水，还要看自己喜不喜欢。',answerPy:'Xuǎnzé gōngzuò bù néng zhǐ kàn xīnshui, hái yào kàn zìjǐ xǐ bu xǐhuan.',
      note:'不能只……还要…… = không thể chỉ… mà còn phải…',pair:'不能只……还要……'},
     {promptLang:'vi',prompt:'Tuy lương thấp hơn trước, nhưng anh ấy làm việc vui hơn.',answer:'虽然薪水比以前低，但是他干得更开心了。',answerPy:'Suīrán xīnshui bǐ yǐqián dī, dànshì tā gàn de gèng kāixīn le.',
      note:'A 比 B + tính từ (câu so sánh); 干得更开心 là bổ ngữ trạng thái.',pair:'A 比 B + Adj'}
   ]},

  {n:39,zh:'弊端',py:'bìduān',pos:'Danh từ',vn:'mặt hạn chế, cái hại',hv:'tệ đoan',em:'⚠️',lesson:1,
   explain:['Chỗ có hại, mặt tiêu cực của một cách làm, một chế độ: 弊端也不少, 存在弊端.','Đối lập: 好处 / 优点 / 利. Bẫy Hán–Việt: "tệ đoan" tiếng Việt chỉ tệ nạn xã hội; 弊端 rộng hơn: mặt hạn chế của bất kỳ cách làm nào.'],
   usage:'存在 / 有 + 弊端; 弊端在于……; 利与弊.',
   collo:['弊端也不少','存在弊端','弊端在于','消除弊端'],
   ex_zh:'我的学习方式绝对对学习效果有利，当然弊端也不少。',ex_py:'Wǒ de xuéxí fāngshì juéduì duì xuéxí xiàoguǒ yǒulì, dāngrán bìduān yě bù shǎo.',ex_vn:'Cách học của tôi chắc chắn có lợi cho hiệu quả học tập, tất nhiên nhược điểm cũng không ít.',
   exList:[
     {zh:'我的学习方式绝对对学习效果有利，当然弊端也不少。',py:'Wǒ de xuéxí fāngshì juéduì duì xuéxí xiàoguǒ yǒulì, dāngrán bìduān yě bù shǎo.',vn:'Cách học của tôi chắc chắn có lợi cho hiệu quả học tập, tất nhiên nhược điểm cũng không ít.'},
     {zh:'弊端在于高兴了拼命学一阵子，不高兴了就搁在一边。',py:'Bìduān zàiyú gāoxìng le pīnmìng xué yízhènzi, bù gāoxìng le jiù gē zài yìbiān.',vn:'Nhược điểm nằm ở chỗ: vui thì ra sức học một thời gian, không vui thì gác sang một bên.'},
     {zh:'网上购物虽然方便，但是也存在一些弊端。',py:'Wǎng shang gòuwù suīrán fāngbiàn, dànshì yě cúnzài yìxiē bìduān.',vn:'Mua sắm trên mạng tuy tiện lợi nhưng cũng có một số mặt hạn chế.'}
   ],
   colloFull:[
     {zh:'弊端也不少',py:'bìduān yě bù shǎo',vn:'nhược điểm cũng không ít'},
     {zh:'存在弊端',py:'cúnzài bìduān',vn:'tồn tại mặt hạn chế'},
     {zh:'弊端在于',py:'bìduān zàiyú',vn:'nhược điểm nằm ở'},
     {zh:'消除弊端',py:'xiāochú bìduān',vn:'loại bỏ cái hại'},
     {zh:'很多弊端',py:'hěn duō bìduān',vn:'nhiều mặt hạn chế'}
   ],
   patterns:[
     {s:'弊端在于 + ……',m:'Nhược điểm nằm ở chỗ…'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Dùng điện thoại học tiếng Trung tất nhiên tiện lợi, nhưng nhược điểm là dễ bị phân tâm.',answer:'用手机学汉语固然方便，但是弊端在于容易分心。',answerPy:'Yòng shǒujī xué Hànyǔ gùrán fāngbiàn, dànshì bìduān zàiyú róngyì fēnxīn.',
      note:'固然……但是…… thừa nhận mặt lợi rồi chuyển sang mặt hại.',pair:'固然……但是……'},
     {promptLang:'vi',prompt:'Phương pháp nào cũng đều có nhược điểm, then chốt là xem lợi nhiều hay hại nhiều.',answer:'任何方法都有弊端，关键是看利多还是弊多。',answerPy:'Rènhé fāngfǎ dōu yǒu bìduān, guānjiàn shì kàn lì duō háishi bì duō.',
      note:'任何……都…… = bất kỳ… đều…; 还是 dùng trong câu hỏi lựa chọn.',pair:'任何……都……'}
   ]},

  {n:40,zh:'拼命',py:'pīnmìng',pos:'Phó từ',vn:'dốc sức, ra sức, liều mạng',hv:'bính mệnh',em:'🏃',lesson:1,
   explain:['Làm hết sức, dốc toàn lực như liều cả mạng: 拼命学, 拼命工作, 拼命跑.','Cũng là động từ: liều mạng (跟他拼命). Làm trạng ngữ có thể có hoặc không có 地.'],
   usage:'拼命 + V (拼命学 / 拼命工作 / 拼命跑); 拼命地 + V.',
   collo:['拼命学习','拼命工作','拼命跑','拼命地喊'],
   ex_zh:'高兴了拼命学一阵子，不高兴了就搁在一边。',ex_py:'Gāoxìng le pīnmìng xué yízhènzi, bù gāoxìng le jiù gē zài yìbiān.',ex_vn:'Lúc vui thì ra sức học một thời gian, lúc không vui thì gác sang một bên.',
   exList:[
     {zh:'高兴了拼命学一阵子，不高兴了就搁在一边。',py:'Gāoxìng le pīnmìng xué yízhènzi, bù gāoxìng le jiù gē zài yìbiān.',vn:'Lúc vui thì ra sức học một thời gian, lúc không vui thì gác sang một bên.'},
     {zh:'为了考上理想的大学，他每天都在拼命学习。',py:'Wèile kǎoshàng lǐxiǎng de dàxué, tā měi tiān dōu zài pīnmìng xuéxí.',vn:'Để đỗ vào trường đại học mơ ước, ngày nào cậu ấy cũng học hành cật lực.'},
     {zh:'眼看车就要开了，我拼命地往车站跑。',py:'Yǎnkàn chē jiù yào kāi le, wǒ pīnmìng de wǎng chēzhàn pǎo.',vn:'Thấy xe sắp chạy, tôi cắm đầu chạy về phía bến xe.'}
   ],
   colloFull:[
     {zh:'拼命学习',py:'pīnmìng xuéxí',vn:'học cật lực'},
     {zh:'拼命工作',py:'pīnmìng gōngzuò',vn:'làm việc cật lực'},
     {zh:'拼命跑',py:'pīnmìng pǎo',vn:'chạy hết sức'},
     {zh:'拼命地喊',py:'pīnmìng de hǎn',vn:'gào hết sức'},
     {zh:'拼命挣钱',py:'pīnmìng zhèng qián',vn:'kiếm tiền cật lực'}
   ],
   patterns:[
     {s:'拼命 + V',m:'Dốc sức làm…'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Anh ấy làm việc cật lực như vậy, chẳng qua là muốn cho con cái cuộc sống tốt hơn.',answer:'他这么拼命工作，无非是想让孩子过上更好的生活。',answerPy:'Tā zhème pīnmìng gōngzuò, wúfēi shì xiǎng ràng háizi guòshàng gèng hǎo de shēnghuó.',
      note:'无非是 + V; 让 + người + V; 过上 = sống được (cuộc sống…).',pair:'让 + người + V'},
     {promptLang:'vi',prompt:'Đừng đợi đến trước kỳ thi mới học cật lực, việc học hằng ngày mới là quan trọng nhất.',answer:'别到考试前才拼命学习，平时的学习才是最重要的。',answerPy:'Bié dào kǎoshì qián cái pīnmìng xuéxí, píngshí de xuéxí cái shì zuì zhòngyào de.',
      note:'到……才…… = mãi đến… mới…; 才是 nhấn mạnh.',pair:'才'}
   ]},

  {n:41,zh:'搁',py:'gē',pos:'Động từ',vn:'để, đặt; gác lại',hv:'các',em:'📦',lesson:1,
   explain:['Khẩu ngữ: đặt, để (= 放): 把书搁在桌子上.','Gác lại, tạm bỏ không làm: 搁在一边, 这件事先搁一搁.'],
   usage:'搁 + 在 + nơi; 把……搁在一边 (gác sang một bên); 先搁一搁.',
   collo:['搁在一边','搁在桌子上','先搁一搁','搁下'],
   ex_zh:'他把作业搁在一边，先玩起了游戏。',ex_py:'Tā bǎ zuòyè gē zài yìbiān, xiān wánqǐle yóuxì.',ex_vn:'Cậu ta gác bài tập sang một bên, chơi game trước đã.',
   exList:[
     {zh:'他把作业搁在一边，先玩起了游戏。',py:'Tā bǎ zuòyè gē zài yìbiān, xiān wánqǐle yóuxì.',vn:'Cậu ta gác bài tập sang một bên, chơi game trước đã.'},
     {zh:'弊端在于高兴了拼命学一阵子，不高兴了就搁在一边。',py:'Bìduān zàiyú gāoxìng le pīnmìng xué yízhènzi, bù gāoxìng le jiù gē zài yìbiān.',vn:'Nhược điểm nằm ở chỗ: vui thì ra sức học một thời gian, không vui thì gác sang một bên.'},
     {zh:'你把钥匙搁哪儿了？我怎么找不到？',py:'Nǐ bǎ yàoshi gē nǎr le? Wǒ zěnme zhǎo bu dào?',vn:'Cậu để chìa khóa đâu rồi? Sao tớ tìm không thấy?'}
   ],
   colloFull:[
     {zh:'搁在一边',py:'gē zài yìbiān',vn:'gác sang một bên'},
     {zh:'搁在桌子上',py:'gē zài zhuōzi shang',vn:'để trên bàn'},
     {zh:'先搁一搁',py:'xiān gē yi gē',vn:'tạm gác lại'},
     {zh:'搁下',py:'gēxià',vn:'đặt xuống'},
     {zh:'搁哪儿',py:'gē nǎr',vn:'để đâu'}
   ],
   patterns:[
     {s:'把 + N + 搁在 + nơi',m:'Để… ở…'},
     {s:'把 + N + 搁在一边',m:'Gác… sang một bên'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Việc này tạm gác lại đã, đợi thi xong rồi tính.',answer:'这件事先搁一搁，等考完试再说。',answerPy:'Zhè jiàn shì xiān gē yi gē, děng kǎowán shì zài shuō.',
      note:'等……再…… = đợi… rồi mới…; động từ lặp 搁一搁 = tạm gác.',pair:'等……再……'},
     {promptLang:'vi',prompt:'Cậu ấy gác việc học sang một bên, suốt ngày chơi game, thảo nào điểm tụt nhiều như vậy.',answer:'他把学习搁在一边，整天打游戏，难怪成绩下降了这么多。',answerPy:'Tā bǎ xuéxí gē zài yìbiān, zhěngtiān dǎ yóuxì, nánguài chéngjì xiàjiàngle zhème duō.',
      note:'难怪 = thảo nào (đã rõ nguyên nhân ở vế trước).',pair:'难怪'}
   ]},

  {n:42,zh:'颠倒',py:'diāndǎo',pos:'Động từ',vn:'đảo ngược, lộn ngược',hv:'điên đảo',em:'🔄',lesson:1,
   explain:['Trên dưới, trước sau đổi chỗ cho nhau: 前后颠倒, 顺序颠倒, 把画挂颠倒了.','Nghĩa bóng: đảo lộn (日夜颠倒 – ngày đêm đảo lộn; 黑白颠倒 – đổi trắng thay đen).'],
   usage:'前后颠倒; 顺序颠倒了; 把……（写 / 挂）颠倒了; 日夜颠倒.',
   collo:['前后颠倒','顺序颠倒','日夜颠倒','挂颠倒了'],
   ex_zh:'有时还前后颠倒，因为后面那课的话题太诱惑我了。',ex_py:'Yǒushí hái qiánhòu diāndǎo, yīnwèi hòumiàn nà kè de huàtí tài yòuhuò wǒ le.',ex_vn:'Có khi còn học lộn ngược trước sau, vì chủ đề của bài phía sau quá hấp dẫn tôi.',
   exList:[
     {zh:'有时还前后颠倒，因为后面那课的话题太诱惑我了。',py:'Yǒushí hái qiánhòu diāndǎo, yīnwèi hòumiàn nà kè de huàtí tài yòuhuò wǒ le.',vn:'Có khi còn học lộn ngược trước sau, vì chủ đề của bài phía sau quá hấp dẫn tôi.'},
     {zh:'放假以后，他天天熬夜，日夜颠倒。',py:'Fàngjià yǐhòu, tā tiāntiān áoyè, rìyè diāndǎo.',vn:'Từ khi được nghỉ, ngày nào cậu ấy cũng thức khuya, ngày đêm đảo lộn.'},
     {zh:'你把这两个字的顺序写颠倒了。',py:'Nǐ bǎ zhè liǎng ge zì de shùnxù xiě diāndǎo le.',vn:'Cậu viết đảo ngược thứ tự hai chữ này rồi.'}
   ],
   colloFull:[
     {zh:'前后颠倒',py:'qiánhòu diāndǎo',vn:'đảo lộn trước sau'},
     {zh:'顺序颠倒',py:'shùnxù diāndǎo',vn:'thứ tự đảo ngược'},
     {zh:'日夜颠倒',py:'rìyè diāndǎo',vn:'ngày đêm đảo lộn'},
     {zh:'挂颠倒了',py:'guà diāndǎo le',vn:'treo ngược rồi'},
     {zh:'黑白颠倒',py:'hēibái diāndǎo',vn:'đổi trắng thay đen'}
   ],
   patterns:[
     {s:'把 + N + V + 颠倒了',m:'Làm… ngược mất rồi'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cậu treo ngược bức tranh rồi, mau đổi lại đi.',answer:'你把画儿挂颠倒了，快换过来吧。',answerPy:'Nǐ bǎ huàr guà diāndǎo le, kuài huàn guòlái ba.',
      note:'Câu 把: 把 + tân ngữ + V + bổ ngữ kết quả 颠倒; 换过来 = đổi lại.',pair:'把 + N + V + bổ ngữ'},
     {promptLang:'vi',prompt:'Nếu cứ ngày đêm đảo lộn, sức khỏe sớm muộn cũng sẽ có vấn đề.',answer:'如果日夜颠倒，身体早晚会出问题的。',answerPy:'Rúguǒ rìyè diāndǎo, shēntǐ zǎowǎn huì chū wèntí de.',
      note:'早晚 = sớm muộn; 会……的 khẳng định khả năng chắc chắn.',pair:'如果……'}
   ]},

  {n:43,zh:'权衡',py:'quánhéng',pos:'Động từ',vn:'cân nhắc, so đo, suy tính',hv:'quyền hành',em:'⚖️',lesson:1,
   explain:['Cân nhắc được mất, lợi hại để quyết định: 权衡利弊, 权衡再三.','权 = quả cân, 衡 = cán cân → đặt lên cân so đo. Bẫy Hán–Việt: không phải "quyền hành" (quyền lực).'],
   usage:'权衡 + 利弊 / 得失 / 轻重; 利弊权衡; 权衡再三.',
   collo:['权衡利弊','利弊权衡','权衡得失','权衡再三'],
   ex_zh:'但是，利弊权衡，利还是大于弊。',ex_py:'Dànshì, lìbì quánhéng, lì háishi dàyú bì.',ex_vn:'Nhưng cân nhắc lợi hại thì lợi vẫn lớn hơn hại.',
   exList:[
     {zh:'但是，利弊权衡，利还是大于弊。',py:'Dànshì, lìbì quánhéng, lì háishi dàyú bì.',vn:'Nhưng cân nhắc lợi hại thì lợi vẫn lớn hơn hại.'},
     {zh:'权衡再三，他还是决定出国留学。',py:'Quánhéng zàisān, tā háishi juédìng chūguó liúxué.',vn:'Cân nhắc đi cân nhắc lại, cậu ấy vẫn quyết định đi du học.'},
     {zh:'做重要决定之前，要先权衡一下得失。',py:'Zuò zhòngyào juédìng zhīqián, yào xiān quánhéng yíxià déshī.',vn:'Trước khi đưa ra quyết định quan trọng, phải cân nhắc được mất trước đã.'}
   ],
   colloFull:[
     {zh:'权衡利弊',py:'quánhéng lìbì',vn:'cân nhắc lợi hại'},
     {zh:'利弊权衡',py:'lìbì quánhéng',vn:'cân nhắc lợi hại'},
     {zh:'权衡得失',py:'quánhéng déshī',vn:'cân nhắc được mất'},
     {zh:'权衡再三',py:'quánhéng zàisān',vn:'cân nhắc nhiều lần'},
     {zh:'权衡轻重',py:'quánhéng qīngzhòng',vn:'cân nhắc nặng nhẹ'}
   ],
   patterns:[
     {s:'权衡 + 利弊 / 得失 / 轻重',m:'Cân nhắc lợi hại / được mất / nặng nhẹ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Sau khi cân nhắc lợi hại, cô ấy vẫn chọn ở lại quê làm việc.',answer:'权衡利弊以后，她还是选择留在家乡工作。',answerPy:'Quánhéng lìbì yǐhòu, tā háishi xuǎnzé liú zài jiāxiāng gōngzuò.',
      note:'……以后 làm trạng ngữ thời gian; 还是 = vẫn (sau khi cân nhắc).',pair:'……以后'},
     {promptLang:'vi',prompt:'Chỉ có cân nhắc kỹ được mất, mới có thể đưa ra lựa chọn đúng.',answer:'只有认真权衡得失，才能做出正确的选择。',answerPy:'Zhǐyǒu rènzhēn quánhéng déshī, cái néng zuòchū zhèngquè de xuǎnzé.',
      note:'只有……才…… điều kiện duy nhất.',pair:'只有……才……'}
   ]},

  {n:44,zh:'津津有味',py:'jīnjīn yǒu wèi',pos:'Thành ngữ',vn:'say sưa, thích thú; ngon lành',hv:'tân tân hữu vị',em:'😋',lesson:1,
   explain:['Ăn thấy ngon lành, hoặc làm gì (nghe, xem, đọc, học) thấy rất hứng thú, say mê.','Làm trạng ngữ (津津有味地 + V) hoặc bổ ngữ trạng thái (吃得 / 听得津津有味).'],
   usage:'津津有味地 + V; 吃得津津有味, 听得津津有味.',
   collo:['津津有味地吃','听得津津有味','津津有味地看','津津有味地享受'],
   ex_zh:'因为我总能在忘我的快乐中，津津有味地享受学习。',ex_py:'Yīnwèi wǒ zǒng néng zài wàngwǒ de kuàilè zhōng, jīnjīn yǒu wèi de xiǎngshòu xuéxí.',ex_vn:'Bởi tôi luôn có thể say sưa tận hưởng việc học trong niềm vui quên cả bản thân.',
   exList:[
     {zh:'因为我总能在忘我的快乐中，津津有味地享受学习。',py:'Yīnwèi wǒ zǒng néng zài wàngwǒ de kuàilè zhōng, jīnjīn yǒu wèi de xiǎngshòu xuéxí.',vn:'Bởi tôi luôn có thể say sưa tận hưởng việc học trong niềm vui quên cả bản thân.'},
     {zh:'爷爷讲的故事，孩子们听得津津有味。',py:'Yéye jiǎng de gùshi, háizimen tīng de jīnjīn yǒu wèi.',vn:'Câu chuyện ông kể, bọn trẻ nghe say sưa.'},
     {zh:'他饿坏了，一碗面条吃得津津有味。',py:'Tā è huài le, yì wǎn miàntiáo chī de jīnjīn yǒu wèi.',vn:'Cậu ấy đói lả, ăn bát mì ngon lành.'}
   ],
   colloFull:[
     {zh:'津津有味地吃',py:'jīnjīn yǒu wèi de chī',vn:'ăn ngon lành'},
     {zh:'听得津津有味',py:'tīng de jīnjīn yǒu wèi',vn:'nghe say sưa'},
     {zh:'津津有味地看',py:'jīnjīn yǒu wèi de kàn',vn:'xem say sưa'},
     {zh:'津津有味地享受',py:'jīnjīn yǒu wèi de xiǎngshòu',vn:'say sưa tận hưởng'}
   ],
   patterns:[
     {s:'V + 得 + 津津有味',m:'Làm gì say sưa (bổ ngữ trạng thái)'},
     {s:'津津有味地 + V',m:'Say sưa làm gì'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cuốn tiểu thuyết này hay quá, tôi say sưa đọc suốt một buổi tối.',answer:'这本小说太精彩了，我津津有味地看了一个晚上。',answerPy:'Zhè běn xiǎoshuō tài jīngcǎi le, wǒ jīnjīn yǒu wèi de kànle yí ge wǎnshang.',
      note:'V + 了 + thời lượng (看了一个晚上).',pair:'V + 了 + thời lượng'},
     {promptLang:'vi',prompt:'Tuy món ăn rất đơn giản, nhưng cả nhà đều ăn ngon lành.',answer:'虽然菜很简单，但是全家人都吃得津津有味。',answerPy:'Suīrán cài hěn jiǎndān, dànshì quánjiā rén dōu chī de jīnjīn yǒu wèi.',
      note:'虽然……但是……; 吃得津津有味 là bổ ngữ trạng thái.',pair:'虽然……但是……'}
   ]}
];

// ══════════════════════════════════════════
// BÀI KHOÁ — chép nguyên văn sách (tr. 55–57), mỗi đoạn văn một dòng
// ══════════════════════════════════════════
var dialogData = [
  {scene:'课文 · 学一门外语需要理由吗',
   preQuiz:[
     {q:'“我”为什么想学一门外语？',opts:['想不再依靠翻译，独自阅读原文','公司要求学外语','要出国留学'],ans:0},
     {q:'那家语言学习机构在哪儿？',opts:['在“我”家旁边的学校里','在离“我”家不远的一栋办公楼上','在网上'],ans:1},
     {q:'进门以后，“我”首先面对的是什么？',opts:['交学费','一位女士接连不断的发问','一次入学考试'],ans:1},
     {q:'“我”为什么很反感？',opts:['女士的态度很不好','学费太贵了','她的问题涉及了“我”的隐私'],ans:2},
     {q:'女士为什么要问这些问题？',opts:['为了了解学员，帮他策划学习方案','为了跟“我”交朋友','为了多收学费'],ans:0},
     {q:'“我”告诉女士自己的学习目标是什么？',opts:['考HSK六级','没什么具体目标，随意学学而已','找一份好工作'],ans:1},
     {q:'女士认为没有具体目标会怎么样？',opts:['学得更轻松','学不好一种语言','可以插班听课'],ans:1},
     {q:'那位男士的态度怎么样？',opts:['很不耐烦','和蔼、真诚恳切','非常严厉'],ans:1},
     {q:'“我”说学语言无非是为了什么？',opts:['看原文电影、读文学作品','找工作','出国旅行'],ans:0},
     {q:'听到“光凭兴趣，恐怕难以持久”，“我”为什么崩溃了？',opts:['因为男士批评了“我”','因为说着说着又绕回到目标问题上了','因为学费太高'],ans:1},
     {q:'最后“我”选择了什么学习方式？',opts:['在那家机构插班听课','请家教','在网上在线学习'],ans:2},
     {q:'“我”的学习方式有什么弊端？',opts:['没有人讲解语法','高兴了拼命学，不高兴了就搁在一边','学费太贵'],ans:1},
     {q:'“我”认为自己的学习方式怎么样？',opts:['利弊权衡，利还是大于弊','弊大于利','没有任何弊端'],ans:0}
   ],
   lines:[
    {sp:0,zh:'我想学一门外语，迫不及待地想不再依靠翻译，独自阅读原文，哪怕是借助字典勉强查阅呢。我很快找到了一家语言学习机构，它在离我家不远的一栋办公楼上。这天我兴致勃勃地专程前去咨询。',
     py:'Wǒ xiǎng xué yì mén wàiyǔ, pòbùjídài de xiǎng bú zài yīkào fānyì, dúzì yuèdú yuánwén, nǎpà shì jièzhù zìdiǎn miǎnqiǎng cháyuè ne. Wǒ hěn kuài zhǎodàole yì jiā yǔyán xuéxí jīgòu, tā zài lí wǒ jiā bù yuǎn de yí dòng bàngōnglóu shang. Zhè tiān wǒ xìngzhì bóbó de zhuānchéng qiánqù zīxún.',
     vn:'Tôi muốn học một ngoại ngữ, nóng lòng muốn không phải dựa vào bản dịch nữa mà tự mình đọc nguyên văn, dù có phải nhờ từ điển mà tra cứu chật vật cũng được. Tôi nhanh chóng tìm được một trung tâm dạy ngoại ngữ, nó nằm trong một tòa nhà văn phòng cách nhà tôi không xa. Hôm ấy tôi hào hứng cất công đến tận nơi để hỏi thông tin.'},
    {sp:0,zh:'进了门，一位很有修养的女士迎上来，我以为交了学费就能开始快乐而美好的学习了，不料首先面对的是她接连不断的发问：“为什么要学外语？最近有出国计划吗？职业是什么？”',
     py:'Jìnle mén, yí wèi hěn yǒu xiūyǎng de nǚshì yíng shànglái, wǒ yǐwéi jiāole xuéfèi jiù néng kāishǐ kuàilè ér měihǎo de xuéxí le, búliào shǒuxiān miànduì de shì tā jiēlián búduàn de fāwèn: “Wèi shénme yào xué wàiyǔ? Zuìjìn yǒu chūguó jìhuà ma? Zhíyè shì shénme?”',
     vn:'Vừa vào cửa, một quý cô rất lịch thiệp ra đón. Tôi cứ tưởng nộp học phí xong là có thể bắt đầu những ngày học vui vẻ và tốt đẹp, không ngờ thứ đầu tiên phải đối mặt lại là một tràng câu hỏi dồn dập của cô ấy: "Vì sao muốn học ngoại ngữ? Gần đây có kế hoạch ra nước ngoài không? Nghề nghiệp là gì?"'},
    {sp:0,zh:'“这很重要吗？”说实在的，她的问题涉及了我的隐私，我很反感，话也变得火药味十足。',
     py:'“Zhè hěn zhòngyào ma?” Shuō shízài de, tā de wèntí shèjíle wǒ de yǐnsī, wǒ hěn fǎngǎn, huà yě biàn de huǒyàowèi shízú.',
     vn:'"Chuyện đó quan trọng lắm sao?" Nói thật, câu hỏi của cô ấy đụng đến chuyện riêng tư của tôi, tôi rất khó chịu, lời nói cũng trở nên đầy mùi thuốc súng.'},
    {sp:0,zh:'她极力忍耐着，“是这样，我必须了解学员，为学员着想，帮他策划学习方案，以达成他的目标。”',
     py:'Tā jílì rěnnàizhe, “Shì zhèyàng, wǒ bìxū liǎojiě xuéyuán, wèi xuéyuán zhuóxiǎng, bāng tā cèhuà xuéxí fāng\'àn, yǐ dáchéng tā de mùbiāo.”',
     vn:'Cô ấy cố hết sức kiềm chế: "Là thế này, tôi phải hiểu học viên, nghĩ cho học viên, giúp họ lên phương án học tập để đạt được mục tiêu của họ."'},
    {sp:0,zh:'我努力使自己的口气缓和下来：“我没什么具体目标。就是找一个班插班听课，随意学学而已。”',
     py:'Wǒ nǔlì shǐ zìjǐ de kǒuqì huǎnhé xiàlái: “Wǒ méi shénme jùtǐ mùbiāo. Jiùshì zhǎo yí ge bān chābān tīng kè, suíyì xuéxue éryǐ.”',
     vn:'Tôi cố làm cho giọng mình dịu xuống: "Tôi chẳng có mục tiêu cụ thể gì. Chỉ là tìm một lớp để học xen vào, học tùy thích mà thôi."'},
    {sp:0,zh:'“可是，我们的班都是根据学员的具体情况设置的，如果您没有具体目标，是学不好一种语言的。”',
     py:'“Kěshì, wǒmen de bān dōu shì gēnjù xuéyuán de jùtǐ qíngkuàng shèzhì de, rúguǒ nín méiyǒu jùtǐ mùbiāo, shì xué bu hǎo yì zhǒng yǔyán de.”',
     vn:'"Nhưng các lớp của chúng tôi đều được mở dựa trên tình hình cụ thể của học viên, nếu chị không có mục tiêu cụ thể thì không học tốt một ngôn ngữ được đâu."'},
    {sp:0,zh:'没有目标就缺乏动力，这道理我固然懂，可是，我的确说不出她所说的目标。我说我回去想想。',
     py:'Méiyǒu mùbiāo jiù quēfá dònglì, zhè dàolǐ wǒ gùrán dǒng, kěshì, wǒ díquè shuō bu chū tā suǒ shuō de mùbiāo. Wǒ shuō wǒ huíqu xiǎngxiang.',
     vn:'Không có mục tiêu thì thiếu động lực, đạo lý này tất nhiên tôi hiểu, nhưng quả thật tôi không nói ra được cái mục tiêu mà cô ấy nói. Tôi bảo tôi về nghĩ thêm đã.'},
    {sp:0,zh:'“您等一下。”她迅速出门，瞬间换来了一位男士。“您学这门语言是为了……”他态度和蔼，真诚恳切，我被打动了，跟他滔滔不绝起来：“我喜欢这个国家的文化，学习语言无非是为了看原文电影、读文学作品……”',
     py:'“Nín děng yíxià.” Tā xùnsù chū mén, shùnjiān huàn láile yí wèi nánshì. “Nín xué zhè mén yǔyán shì wèile……” Tā tàidu hé\'ǎi, zhēnchéng kěnqiè, wǒ bèi dǎdòng le, gēn tā tāotāo bù jué qǐlái: “Wǒ xǐhuan zhège guójiā de wénhuà, xuéxí yǔyán wúfēi shì wèile kàn yuánwén diànyǐng, dú wénxué zuòpǐn……”',
     vn:'"Chị đợi một lát." Cô ấy nhanh chóng ra ngoài, chỉ trong chớp mắt đã đổi sang một người đàn ông. "Chị học ngôn ngữ này là để…" Anh ta thái độ hòa nhã, chân thành tha thiết, tôi bị lay động, bắt đầu nói với anh ta không ngớt: "Tôi thích văn hóa của đất nước này, học ngôn ngữ chẳng qua là để xem phim nguyên bản, đọc tác phẩm văn học…"'},
    {sp:0,zh:'“明白了。不想通过翻译，直接进入原文的世界？”',
     py:'“Míngbai le. Bù xiǎng tōngguò fānyì, zhíjiē jìnrù yuánwén de shìjiè?”',
     vn:'"Tôi hiểu rồi. Chị không muốn thông qua bản dịch, mà muốn bước thẳng vào thế giới của nguyên tác?"'},
    {sp:0,zh:'“对！”我欢天喜地，终于碰上了知音。',
     py:'“Duì!” Wǒ huāntiān-xǐdì, zhōngyú pèngshàngle zhīyīn.',
     vn:'"Đúng thế!" Tôi mừng rỡ vô cùng, cuối cùng cũng gặp được tri âm.'},
    {sp:0,zh:'“我碰到过您这样的客户，可是，光凭兴趣，恐怕难以持久。”我顿时崩溃了，怎么说着说着又绕回来了。',
     py:'“Wǒ pèngdàoguo nín zhèyàng de kèhù, kěshì, guāng píng xìngqù, kǒngpà nányǐ chíjiǔ.” Wǒ dùnshí bēngkuì le, zěnme shuōzhe shuōzhe yòu rào huílái le.',
     vn:'"Tôi từng gặp những khách hàng như chị rồi, nhưng chỉ dựa vào hứng thú thì e là khó bền lâu." Tôi lập tức suy sụp: sao nói mãi nói mãi lại vòng về chỗ cũ rồi.'},
    {sp:0,zh:'我果断地站起来，斩钉截铁地表明要走。',
     py:'Wǒ guǒduàn de zhàn qǐlái, zhǎndīng-jiétiě de biǎomíng yào zǒu.',
     vn:'Tôi dứt khoát đứng dậy, nói rõ như đinh đóng cột rằng tôi muốn về.'},
    {sp:0,zh:'回家后，我不死心，开始在网上找在线学习。后来发现有一家，还真不错，从基础教起，每个句子的语法都详细讲解，不留死角，和我的思维很搭。更重要的是心里舒服——没有人硬逼着我执行学习计划，也没人问我为啥要学它，以及我的单位、身份，包括薪水——我就是个语言学习者，你管我这些干吗？',
     py:'Huí jiā hòu, wǒ bù sǐxīn, kāishǐ zài wǎng shang zhǎo zàixiàn xuéxí. Hòulái fāxiàn yǒu yì jiā, hái zhēn búcuò, cóng jīchǔ jiāo qǐ, měi ge jùzi de yǔfǎ dōu xiángxì jiǎngjiě, bù liú sǐjiǎo, hé wǒ de sīwéi hěn dā. Gèng zhòngyào de shì xīnli shūfu——méiyǒu rén yìng bīzhe wǒ zhíxíng xuéxí jìhuà, yě méi rén wèn wǒ wèi shá yào xué tā, yǐjí wǒ de dānwèi, shēnfen, bāokuò xīnshui——wǒ jiù shì ge yǔyán xuéxízhě, nǐ guǎn wǒ zhèxiē gànmá?',
     vn:'Về nhà, tôi vẫn chưa bỏ cuộc, bắt đầu lên mạng tìm khóa học trực tuyến. Sau đó tìm được một trang, quả thật khá tốt: dạy từ cơ bản, ngữ pháp của từng câu đều được giảng giải chi tiết, không bỏ sót chỗ nào, rất hợp với cách tư duy của tôi. Quan trọng hơn là trong lòng thấy thoải mái — không ai ép buộc tôi thực hiện kế hoạch học tập, cũng không ai hỏi tôi vì sao lại học nó, rồi cơ quan, thân phận của tôi, kể cả tiền lương — tôi chỉ là một người học ngôn ngữ, anh quản mấy chuyện đó của tôi làm gì?'},
    {sp:0,zh:'我的学习方式绝对对学习效果有利，当然弊端也不少：有利的方面如上所说，弊端在于高兴了拼命学一阵子，不高兴了就搁在一边。有时还前后颠倒，因为后面那课的话题太诱惑我了。但是，利弊权衡，利还是大于弊。因为我总能在忘我的快乐中，津津有味地享受学习。',
     py:'Wǒ de xuéxí fāngshì juéduì duì xuéxí xiàoguǒ yǒulì, dāngrán bìduān yě bù shǎo: yǒulì de fāngmiàn rú shàng suǒ shuō, bìduān zàiyú gāoxìng le pīnmìng xué yízhènzi, bù gāoxìng le jiù gē zài yìbiān. Yǒushí hái qiánhòu diāndǎo, yīnwèi hòumiàn nà kè de huàtí tài yòuhuò wǒ le. Dànshì, lìbì quánhéng, lì háishi dàyú bì. Yīnwèi wǒ zǒng néng zài wàngwǒ de kuàilè zhōng, jīnjīn yǒu wèi de xiǎngshòu xuéxí.',
     vn:'Cách học của tôi chắc chắn có lợi cho hiệu quả học tập, tất nhiên nhược điểm cũng không ít: mặt có lợi thì như đã nói ở trên, còn nhược điểm nằm ở chỗ lúc vui thì ra sức học một thời gian, lúc không vui thì gác sang một bên. Có khi còn học đảo lộn trước sau, vì chủ đề của bài phía sau hấp dẫn tôi quá. Nhưng cân nhắc lợi hại thì lợi vẫn lớn hơn hại. Bởi tôi luôn có thể say sưa tận hưởng việc học trong niềm vui quên cả bản thân.'}
   ]}
];

// ══════════════════════════════════════════
// PHÂN BIỆT TỪ GẦN NGHĨA 词语辨析
// Cặp 专程—专门 lấy từ sách (tr. 59–60, 做一做: 判断正误); 固然—虽然, 依靠—依赖 soạn thêm
// ══════════════════════════════════════════
var synonymData = [
  {pair:'专程 — 专门',
   same:'Đều là phó từ, đều biểu thị "đặc biệt, cất công" làm một việc gì đó. Khi hành động là ĐI một chuyến (来 / 去 / 赶) thì dùng cả hai được.',
   sameEx:{zh:'这次到上海来，我是专程／专门来看你的。',vn:'Lần này đến Thượng Hải, tôi cất công đến thăm bạn đấy.'},
   items:[
     {word:'专程',points:[
       'CHỈ là phó từ.',
       'Chỉ dùng cho hành động phải đi một quãng đường (来 / 去 / 赶 / 送 / 接…), nhấn mạnh thái độ trịnh trọng, nghiêm túc.',
       'Không dùng cho hành động không cần di chuyển (做饭, 研究, 举行…); không đứng trước danh từ.'
     ],ex:[{zh:'他专程来机场送你。',vn:'Anh ấy cất công đến sân bay để tiễn bạn.'}]},
     {word:'专门',points:[
       'Phó từ: ngoài hành động đi lại, còn dùng cho mọi hành động khác (专门给你买的).',
       'Phó từ: hành động chỉ giới hạn trong một phạm vi (专门讨论了……).',
       'Còn là TÍNH TỪ: chuyên làm một việc / chuyên nghiên cứu một lĩnh vực, đứng trước danh từ (专门人才).'
     ],ex:[{zh:'这个礼物是专门给你买的，不知道你喜欢不喜欢。',vn:'Món quà này mua riêng cho bạn đấy, không biết bạn có thích không.'},
          {zh:'这次会议专门讨论了公司的人事问题。',vn:'Cuộc họp lần này chỉ bàn riêng về vấn đề nhân sự của công ty.'},
          {zh:'他们都是电脑方面的专门人才。',vn:'Họ đều là nhân tài chuyên về máy tính.'}]}
   ],
   quiz:[
     {sentence:'听说奶奶病了，姑姑＿＿从上海赶了回来。',options:['专程','专门'],answer:0,both:true,
      why:'Hành động ĐI một chuyến (赶回来) — cả hai đều dùng được; 专程 nhấn mạnh sự trịnh trọng.'},
     {sentence:'这次会议＿＿讨论了学生的安全问题。',options:['专程','专门'],answer:1,
      why:'Giới hạn phạm vi (chỉ bàn riêng về…) → chỉ 专门.'},
     {sentence:'我们学校需要一位＿＿的心理老师。',options:['专程','专门'],answer:1,
      why:'Đứng trước danh từ làm định ngữ (tính từ) → chỉ 专门.'},
     {sentence:'为了给我过生日，妈妈＿＿做了一个大蛋糕。',options:['专程','专门'],answer:1,
      why:'做蛋糕 không phải hành động đi lại → chỉ 专门.'}
   ],
   sgk:{
     chung:{t:'都表示特地去做某事。',vn:'Đều biểu thị đặc biệt đi làm một việc gì đó.',vd:'这次到上海来，我是专程／专门来看你的。',vdVn:'Lần này đến Thượng Hải, tôi cất công đến thăm bạn đấy.'},
     khac:[
       {a:{t:'副词，只用于需要一段路程的行动，强调态度郑重认真。',vn:'Phó từ, chỉ dùng cho hành động cần đi một quãng đường, nhấn mạnh thái độ trịnh trọng, nghiêm túc.',vd:'他专程来机场送你。',vdVn:'Anh ấy cất công đến sân bay để tiễn bạn.'},
        b:{t:'副词，除了用于表示行程的动作外，还可以用于其他方面的行动。',vn:'Phó từ, ngoài hành động đi lại, còn dùng được cho các hành động khác.',vd:'这个礼物是专门给你买的，不知道你喜欢不喜欢。',vdVn:'Món quà này mua riêng cho bạn đấy, không biết bạn có thích không.'}},
       {a:{t:'没有右边这个意思。',vn:'Không có nghĩa như bên phải.'},
        b:{t:'副词，表示动作仅限于某个范围。',vn:'Phó từ, biểu thị hành động chỉ giới hạn trong một phạm vi nào đó.',vd:'这次会议专门讨论了公司的人事问题。',vdVn:'Cuộc họp lần này chỉ bàn riêng về vấn đề nhân sự của công ty.'}},
       {a:{t:'没有右边这个用法。',vn:'Không có cách dùng như bên phải.'},
        b:{t:'还有形容词用法，表示专从事某事或研究某学问，可用在名词前。',vn:'Còn có cách dùng tính từ, chỉ chuyên làm một việc hoặc chuyên nghiên cứu một ngành, có thể đứng trước danh từ.',vd:'他们都是电脑方面的专门人才。',vdVn:'Họ đều là nhân tài chuyên về máy tính.'}}
     ],
     deLam:'判断正误 — Tích vào cột đúng (√) hay sai (×) cho từng câu',
     cot:['√ đúng','× sai'],
     lamThu:[
       {s:'他专程研究中国文学，发表了一些这方面的论文。',dap:[false,true],
        giai:'研究 (nghiên cứu) không phải hành động đi một quãng đường → không dùng 专程; phải nói 他专门研究中国文学.'},
       {s:'他们为国家培养了很多相关学科的专门人才。',dap:[true,false],
        giai:'专门 là tính từ đứng trước danh từ: 专门人才 (nhân tài chuyên ngành) — đúng.'},
       {s:'今天是我的生日，妈妈专程做了我喜欢吃的饭菜。',dap:[false,true],
        giai:'做饭菜 không cần đi đâu cả → không dùng 专程; phải nói 妈妈专门做了我喜欢吃的饭菜.'},
       {s:'昨天同事们专门举行了一个晚会欢迎我。',dap:[true,false],
        giai:'专门 dùng được cho hành động không phải đi lại (举行晚会) — đúng.'}
     ]
   }},

  {pair:'固然 — 虽然',
   same:'Đều đứng ở vế TRƯỚC của câu ghép, thừa nhận một sự thật; vế sau thường có 但是 / 可是 chuyển ý.',
   sameEx:{zh:'这个方法固然／虽然好，可是实施起来太难了。',vn:'Cách này tuy hay, nhưng thực hiện thì khó quá.'},
   items:[
     {word:'固然',points:[
       'Nhấn mạnh việc THỪA NHẬN: "đúng là…, tất nhiên là…" rồi mới nêu mặt khác.',
       'Vế sau có thể dùng 也 (chuyển ý nhẹ, thừa nhận thêm một điều khác).',
       'Văn viết, thường đứng SAU chủ ngữ; có dạng lặp: 好固然是好.'
     ],ex:[{zh:'考上大学固然好，没考上大学也不是就没有出路了。',vn:'Đỗ đại học tất nhiên là tốt, không đỗ đại học cũng không phải là hết đường.'}]},
     {word:'虽然',points:[
       'Nhượng bộ đơn thuần: "tuy…"; vế sau bắt buộc chuyển ý (但是 / 可是 / 却 / 还是).',
       'Vế sau không dùng 也 theo kiểu thừa nhận thêm như 固然.',
       'Đứng trước hoặc sau chủ ngữ đều được; dùng cả khẩu ngữ lẫn văn viết.'
     ],ex:[{zh:'虽然下着大雨，可是他还是按时来了。',vn:'Tuy trời mưa to nhưng anh ấy vẫn đến đúng giờ.'}]}
   ],
   quiz:[
     {sentence:'出国留学＿＿好，在国内学习也能学好汉语。',options:['固然','虽然'],answer:0,
      why:'Vế sau dùng 也 để thừa nhận thêm một điều khác → chỉ 固然.'},
     {sentence:'＿＿他只学了半年汉语，可是说得非常流利。',options:['固然','虽然'],answer:1,
      why:'Nhượng bộ đơn thuần, đứng đầu câu trước chủ ngữ → 虽然. 固然 thường đứng sau chủ ngữ và mang ý "thừa nhận điều hiển nhiên".'},
     {sentence:'这个方法好＿＿是好，可是太费时间了。',options:['固然','虽然'],answer:0,
      why:'Dạng lặp "tính từ + 固然是 + tính từ" chỉ có với 固然.'},
     {sentence:'＿＿天气不好，比赛还是按时开始了。',options:['固然','虽然'],answer:1,
      why:'Nhượng bộ đơn thuần (thời tiết xấu nhưng vẫn thi đấu) → 虽然. 固然 dùng để thừa nhận một điều đúng / tốt rồi nêu mặt khác.'}
   ]},

  {pair:'依靠 — 依赖',
   same:'Đều nghĩa là dựa vào người / vật khác, đều làm được động từ và danh từ.',
   sameEx:{zh:'孩子小的时候，生活上只能依靠／依赖父母。',vn:'Khi con còn nhỏ, trong sinh hoạt chỉ có thể dựa vào bố mẹ.'},
   items:[
     {word:'依靠',points:[
       'Trung tính / tích cực: dựa vào để đạt mục đích (依靠自己, 依靠科学).',
       'Làm danh từ = chỗ dựa (他是全家的依靠).'
     ],ex:[{zh:'要想成功，就得依靠自己的努力。',vn:'Muốn thành công thì phải dựa vào nỗ lực của bản thân.'}]},
     {word:'依赖',points:[
       'Thường TIÊU CỰC: phụ thuộc, không tự lập được (依赖性强, 过分依赖).',
       'Hay đi với 对……产生依赖, 过于 / 过分依赖; tân ngữ có thể là thói quen xấu (依赖手机).'
     ],ex:[{zh:'他对手机的依赖越来越严重了。',vn:'Sự phụ thuộc của cậu ấy vào điện thoại ngày càng nghiêm trọng.'}]}
   ],
   quiz:[
     {sentence:'现在很多年轻人对手机产生了很强的＿＿。',options:['依靠','依赖'],answer:1,why:'Nghĩa tiêu cực "phụ thuộc, nghiện" + 产生……依赖 → 依赖.'},
     {sentence:'老人的儿女都在国外，他身边没有一个可以＿＿的人。',options:['依靠','依赖'],answer:0,why:'Chỗ dựa tin cậy (nghĩa tích cực) → 依靠.'},
     {sentence:'学外语不能过分＿＿翻译软件，要自己多思考。',options:['依靠','依赖'],answer:1,why:'过分 + 依赖 = phụ thuộc quá mức (tiêu cực).'},
     {sentence:'他完全＿＿自己的努力，考上了理想的大学。',options:['依靠','依赖'],answer:0,why:'Dựa vào nỗ lực bản thân để đạt kết quả tốt → 依靠.'}
   ]}
];

// ══════════════════════════════════════════
// BẮC CẦU HÁN–VIỆT
// ══════════════════════════════════════════
var hvBridgeData = {
  easy:[
    {zh:'忍耐',hv:'nhẫn nại',vn:'nhẫn nại, kiềm chế',note:'Trùng khít — nhưng 忍耐 nhấn vào việc NÉN cảm xúc.'},
    {zh:'动力',hv:'động lực',vn:'động lực',note:'Trùng khít.'},
    {zh:'随意',hv:'tùy ý',vn:'tùy ý, tùy thích',note:'Trùng khít.'},
    {zh:'知音',hv:'tri âm',vn:'bạn tri âm',note:'Trùng khít, cùng điển tích Bá Nha – Tử Kỳ.'},
    {zh:'思维',hv:'tư duy',vn:'tư duy',note:'Trùng khít.'},
    {zh:'修养',hv:'tu dưỡng',vn:'giáo dưỡng, trình độ',note:'Gần khớp: tiếng Việt "có tu dưỡng" = 很有修养.'},
    {zh:'执行',hv:'chấp hành',vn:'thực hiện, chấp hành',note:'Trùng khít; tiếng Việt hay dịch "thực hiện kế hoạch".'},
    {zh:'颠倒',hv:'điên đảo',vn:'đảo lộn, lộn ngược',note:'"Điên đảo" = đảo lộn — đúng nghĩa gốc.'},
    {zh:'果断',hv:'quả đoán',vn:'quả quyết, dứt khoát',note:'Trùng khít.'},
    {zh:'勉强',hv:'miễn cưỡng',vn:'miễn cưỡng; gắng gượng',note:'Gần khớp; tiếng Trung còn nghĩa "gắng gượng, vừa đủ" (勉强及格).'},
    {zh:'固然',hv:'cố nhiên',vn:'tất nhiên, dĩ nhiên',note:'"Cố nhiên" tiếng Việt cũng là "tất nhiên".'},
    {zh:'隐私',hv:'ẩn tư',vn:'đời tư, chuyện riêng',note:'"Ẩn" = giấu, "tư" = riêng → chuyện riêng giấu kín.'}
  ],
  idiom:[
    {zh:'迫不及待',hv:'bách bất cập đãi',vn:'nóng lòng, không chờ được',note:'"Bách" = gấp (như cấp bách), "bất cập đãi" = không kịp chờ.'},
    {zh:'兴致勃勃',hv:'hứng trí bột bột',vn:'vô cùng hào hứng',note:'"Hứng trí" = hứng thú; "bột bột" = bừng bừng (như "bột phát").'},
    {zh:'斩钉截铁',hv:'trảm đinh tiệt thiết',vn:'như đinh đóng cột',note:'Chặt đinh cắt sắt → nói năng dứt khoát; tiếng Việt có sẵn "chắc như đinh đóng cột".'},
    {zh:'津津有味',hv:'tân tân hữu vị',vn:'say sưa, ngon lành',note:'"Hữu vị" = có mùi vị → ăn / nghe / đọc thấy ngon, thấy thú vị.'}
  ],
  trap:[
    {zh:'机构',hv:'cơ cấu',vn:'cơ quan, tổ chức, trung tâm',
     warn:'BẪY: "cơ cấu" tiếng Việt là cấu trúc (cơ cấu kinh tế = 经济结构). 机构 tiếng Trung là cơ quan, tổ chức: 语言学习机构 = trung tâm ngoại ngữ.'},
    {zh:'反感',hv:'phản cảm',vn:'có ác cảm, bực mình',
     warn:'"Phản cảm" tiếng Việt hay dùng cho SỰ VẬT gây khó chịu (hình ảnh phản cảm). 反感 tiếng Trung là cảm xúc của NGƯỜI: 我对他很反感 = tôi có ác cảm với anh ta.'},
    {zh:'恳切',hv:'khẩn thiết',vn:'thành khẩn, tha thiết',
     warn:'"Khẩn thiết" tiếng Việt dễ hiểu thành gấp gáp. 恳 là thành khẩn → 恳切 = tha thiết, chân thành, không có nghĩa khẩn cấp (紧急 / 迫切).'},
    {zh:'权衡',hv:'quyền hành',vn:'cân nhắc',
     warn:'Không phải "quyền hành" (quyền lực)! 权 = quả cân, 衡 = cán cân → đặt lên cân so đo: 权衡利弊 = cân nhắc lợi hại.'},
    {zh:'弊端',hv:'tệ đoan',vn:'mặt hạn chế, cái hại',
     warn:'"Tệ đoan" tiếng Việt thường chỉ tệ nạn xã hội. 弊端 rộng hơn: mặt hạn chế của bất kỳ cách làm nào (在线学习的弊端).'},
    {zh:'口气',hv:'khẩu khí',vn:'giọng điệu',
     warn:'"Khẩu khí" tiếng Việt thường là cách nói lộ ra chí khí, tham vọng (khẩu khí anh hùng). 口气 tiếng Trung chủ yếu là GIỌNG ĐIỆU: 口气缓和 = giọng dịu lại.'},
    {zh:'客户',hv:'khách hộ',vn:'khách hàng',
     warn:'户 không phải "hộ gia đình" ở đây; 客户 là khách hàng (của công ty, dịch vụ).'}
  ]
};

// ══════════════════════════════════════════
// GHÉP TỪ — cụm từ trong bài khoá
// ══════════════════════════════════════════
var matchData = [
  {left:'依靠',right:'翻译'},
  {left:'借助',right:'字典'},
  {left:'勉强',right:'查阅'},
  {left:'一栋',right:'办公楼'},
  {left:'专程',right:'前去咨询'},
  {left:'接连',right:'不断'},
  {left:'涉及',right:'隐私'},
  {left:'火药味',right:'十足'},
  {left:'极力',right:'忍耐'},
  {left:'为学员',right:'着想'},
  {left:'策划',right:'学习方案'},
  {left:'达成',right:'协议'},
  {left:'口气',right:'缓和下来'},
  {left:'随意',right:'学学'},
  {left:'缺乏',right:'动力'},
  {left:'真诚',right:'恳切'},
  {left:'碰上',right:'知音'},
  {left:'难以',right:'持久'},
  {left:'斩钉截铁地',right:'表明'},
  {left:'严格',right:'执行'},
  {left:'权衡',right:'利弊'},
  {left:'前后',right:'颠倒'}
];

// ══════════════════════════════════════════
// ĐIỀN TỪ
// ══════════════════════════════════════════
var fillData = [
  {pre:'成绩一出来，他就',blank:'迫不及待',post:'地打开手机查分数。',hint:'(nóng lòng)',ans:'迫不及待'},
  {pre:'学习一门外语，光',blank:'依靠',post:'热情是远远不够的。',hint:'(dựa vào)',ans:'依靠'},
  {pre:'我想独自阅读原文，哪怕是',blank:'借助',post:'字典勉强查阅呢。',hint:'(nhờ vào)',ans:'借助'},
  {pre:'我很快找到了一家语言学习',blank:'机构',post:'。',hint:'(trung tâm, tổ chức)',ans:'机构'},
  {pre:'它在离我家不远的一',blank:'栋',post:'办公楼上。',hint:'(lượng từ: tòa)',ans:'栋'},
  {pre:'听说奶奶病了，姑姑',blank:'专程',post:'从上海赶了回来。',hint:'(cất công đi một chuyến)',ans:'专程'},
  {pre:'进了门，一位很有',blank:'修养',post:'的女士迎上来。',hint:'(giáo dưỡng, lịch thiệp)',ans:'修养'},
  {pre:'不料首先面对的是她',blank:'接连',post:'不断的发问。',hint:'(liên tiếp)',ans:'接连'},
  {pre:'她的问题',blank:'涉及',post:'了我的隐私，我很反感。',hint:'(đụng chạm đến)',ans:'涉及'},
  {pre:'在网上不要随便透露自己的个人',blank:'隐私',post:'。',hint:'(đời tư)',ans:'隐私'},
  {pre:'我很反感，话也变得',blank:'火药',post:'味十足。',hint:'(thuốc súng)',ans:'火药'},
  {pre:'她极力',blank:'忍耐',post:'着，“是这样，我必须了解学员。”',hint:'(kiềm chế)',ans:'忍耐'},
  {pre:'我必须了解学员，为学员',blank:'着想',post:'，帮他策划学习方案。',hint:'(nghĩ cho)',ans:'着想'},
  {pre:'我努力使自己的',blank:'口气',post:'缓和下来。',hint:'(giọng điệu)',ans:'口气'},
  {pre:'就是找一个班插班听课，',blank:'随意',post:'学学而已。',hint:'(tùy thích)',ans:'随意'},
  {pre:'他的工作是警察，写小说仅仅是他的业余爱好',blank:'而已',post:'。',hint:'(mà thôi)',ans:'而已'},
  {pre:'我们的班都是根据学员的具体情况',blank:'设置',post:'的。',hint:'(thiết lập, mở lớp)',ans:'设置'},
  {pre:'没有目标就缺乏',blank:'动力',post:'，这道理我固然懂。',hint:'(động lực)',ans:'动力'},
  {pre:'考上大学',blank:'固然',post:'好，没考上大学也不是就没有出路了。',hint:'(tất nhiên)',ans:'固然'},
  {pre:'学习语言',blank:'无非',post:'是为了看原文电影、读文学作品。',hint:'(chẳng qua)',ans:'无非'},
  {pre:'“对！”我欢天喜地，终于碰上了',blank:'知音',post:'。',hint:'(tri âm)',ans:'知音'},
  {pre:'爸爸明天要去上海拜访一位重要的',blank:'客户',post:'。',hint:'(khách hàng)',ans:'客户'},
  {pre:'光凭兴趣，恐怕难以',blank:'持久',post:'。',hint:'(bền lâu)',ans:'持久'},
  {pre:'我顿时',blank:'崩溃',post:'了，怎么说着说着又绕回来了。',hint:'(suy sụp)',ans:'崩溃'},
  {pre:'我',blank:'果断',post:'地站起来，斩钉截铁地表明要走。',hint:'(dứt khoát)',ans:'果断'},
  {pre:'面对对方的邀请，他',blank:'斩钉截铁',post:'地拒绝了。',hint:'(như đinh đóng cột)',ans:'斩钉截铁'},
  {pre:'学外语能帮助我们了解不同的',blank:'思维',post:'方式。',hint:'(tư duy)',ans:'思维'},
  {pre:'最后，严格',blank:'执行',post:'学习计划也是非常重要的。',hint:'(thực hiện)',ans:'执行'},
  {pre:'这份工作',blank:'薪水',post:'不高，可是我很喜欢。',hint:'(tiền lương)',ans:'薪水'},
  {pre:'网上购物虽然方便，但是也存在一些',blank:'弊端',post:'。',hint:'(mặt hạn chế)',ans:'弊端'},
  {pre:'为了考上理想的大学，他每天都在',blank:'拼命',post:'学习。',hint:'(dốc sức)',ans:'拼命'},
  {pre:'放假以后，他天天熬夜，日夜',blank:'颠倒',post:'。',hint:'(đảo lộn)',ans:'颠倒'},
  {pre:'但是，利弊',blank:'权衡',post:'，利还是大于弊。',hint:'(cân nhắc)',ans:'权衡'},
  {pre:'爷爷讲的故事，孩子们听得',blank:'津津有味',post:'。',hint:'(say sưa)',ans:'津津有味'}
];

// ══════════════════════════════════════════
// SẮP XẾP CÂU — mỗi điểm ngữ pháp (而已 · 固然 · 无非) ít nhất 2 câu
// ══════════════════════════════════════════
var sortData = [
  {words:['我','只是','随意','学学','而已','。'],ans:'我只是随意学学而已。',audio:'我只是随意学学而已。'},
  {words:['他','不过是','开个玩笑','而已','，','你','别','生气','。'],ans:'他不过是开个玩笑而已，你别生气。',audio:'他不过是开个玩笑而已，你别生气。'},
  {words:['这个方法','好','固然','是','好','，','可是','太难了','。'],ans:'这个方法好固然是好，可是太难了。',audio:'这个方法好固然是好，可是太难了。'},
  {words:['考上大学','固然','好','，','没考上','也','有','出路','。'],ans:'考上大学固然好，没考上也有出路。',audio:'考上大学固然好，没考上也有出路。'},
  {words:['学习语言','无非','是为了','看','原文电影','。'],ans:'学习语言无非是为了看原文电影。',audio:'学习语言无非是为了看原文电影。'},
  {words:['父母','唠叨','无非是','担心','你','而已','。'],ans:'父母唠叨无非是担心你而已。',audio:'父母唠叨无非是担心你而已。'},
  {words:['我','努力','使','自己的口气','缓和','下来','。'],ans:'我努力使自己的口气缓和下来。',audio:'我努力使自己的口气缓和下来。'},
  {words:['我','必须','为','学员','着想','。'],ans:'我必须为学员着想。',audio:'我必须为学员着想。'},
  {words:['光凭','兴趣','，','恐怕','难以','持久','。'],ans:'光凭兴趣，恐怕难以持久。',audio:'光凭兴趣，恐怕难以持久。'},
  {words:['我','果断地','站起来','，','斩钉截铁地','表明','要走','。'],ans:'我果断地站起来，斩钉截铁地表明要走。',audio:'我果断地站起来，斩钉截铁地表明要走。'},
  {words:['利弊','权衡','，','利','还是','大于','弊','。'],ans:'利弊权衡，利还是大于弊。',audio:'利弊权衡，利还是大于弊。'},
  {words:['我','总能','津津有味地','享受','学习','。'],ans:'我总能津津有味地享受学习。',audio:'我总能津津有味地享受学习。'},
  {words:['她的问题','涉及了','我的','隐私','。'],ans:'她的问题涉及了我的隐私。',audio:'她的问题涉及了我的隐私。'}
];

// ══════════════════════════════════════════
// CHỌN TỪ THÍCH HỢP
// ══════════════════════════════════════════
var errorFixMode = 'wordchoice';
var errorFixData = [
  {wrong:'这次考试我只是____及格，还得继续努力。',opts:['勉强','随意','果断','拼命'],ans:0,
   exp:'Năng lực chưa đủ mà vẫn đạt được một cách chật vật → 勉强及格 (vừa đủ đỗ). 随意 là tùy thích; 果断 là dứt khoát; 拼命 là dốc sức — không hợp với "chỉ vừa đủ đỗ".'},
  {wrong:'同学们____地讨论着周末去哪儿玩儿。',opts:['兴致勃勃','斩钉截铁','火药味十足','难以持久'],ans:0,
   exp:'Bàn chuyện đi chơi một cách hào hứng → 兴致勃勃地讨论. 斩钉截铁 là dứt khoát (dùng khi tuyên bố, từ chối); 火药味十足 là gay gắt như sắp cãi nhau; 难以持久 là khó bền lâu, không làm trạng ngữ.'},
  {wrong:'他说话总是很不客气，同学们都对他有点儿____。',opts:['反感','反映','感动','好感'],ans:0,
   exp:'Nói năng khó nghe → mọi người có ác cảm: 对……反感. 反映 là phản ánh; 感动 là cảm động; 好感 là thiện cảm — trái nghĩa với vế trước.'},
  {wrong:'这次毕业晚会是我们班同学自己____的。',opts:['策划','达成','涉及','执行'],ans:0,
   exp:'Tự lên kế hoạch, tổ chức buổi tiệc → 策划晚会. 达成 đi với 目标 / 协议; 涉及 là liên quan đến; 执行 là thực hiện kế hoạch / mệnh lệnh đã có, không nói "晚会是……执行的".'},
  {wrong:'经过几轮谈判，双方终于____了协议。',opts:['达成','到达','策划','设置'],ans:0,
   exp:'达成协议 = đạt được thỏa thuận. 到达 là đến nơi (到达北京); 策划 là lên kế hoạch; 设置 là thiết lập — không đi với 协议.'},
  {wrong:'他讲了个笑话，紧张的气氛一下子____了。',opts:['缓和','缓慢','果断','颠倒'],ans:0,
   exp:'Không khí căng thẳng dịu đi → 气氛缓和了. 缓慢 là chậm chạp (tốc độ); 果断 là dứt khoát; 颠倒 là đảo lộn.'},
  {wrong:'他态度和蔼，真诚____，我被打动了。',opts:['恳切','迫切','随意','反感'],ans:0,
   exp:'Chân thành, thành khẩn → 真诚恳切. 迫切 là cấp bách, gấp gáp (bẫy "khẩn thiết"); 随意 là tùy tiện; 反感 là ác cảm — không thể khiến người ta cảm động.'},
  {wrong:'这件白衬衫和你的牛仔裤很____。',opts:['搭','搁','拼','靠'],ans:0,
   exp:'Hai thứ hợp nhau → A 和 B 很搭 (khẩu ngữ). 搁 là đặt, để; 拼 là ghép / liều; 靠 là dựa — không dùng với 很 theo nghĩa "hợp".'},
  {wrong:'我很想知道里边是____东西。',opts:['啥','咋','谁','哪'],ans:0,
   exp:'啥东西 = 什么东西 (cái gì, khẩu ngữ). 咋 = 怎么 (thế nào); 谁 hỏi người; 哪 cần lượng từ (哪个东西).'},
  {wrong:'他把作业____在一边，先玩起了游戏。',opts:['搁','搭','执行','放弃'],ans:0,
   exp:'Gác sang một bên → 把……搁在一边. 搭 là hợp / dựng; 执行 là thực hiện; 放弃 là từ bỏ, không đi với 在一边.'},
  {wrong:'他____来机场送你，你还不快去谢谢他！',opts:['专程','专心','随意','勉强'],ans:0,
   exp:'Cất công đi một chuyến đến sân bay → 专程来……. 专心 là chuyên tâm (专心学习); 随意 là tùy ý; 勉强 là miễn cưỡng — không hợp với lời cảm ơn.'},
  {wrong:'今天是我的生日，妈妈____做了我喜欢吃的饭菜。',opts:['专门','专程','接连','随意'],ans:0,
   exp:'做饭 không phải hành động đi lại → dùng 专门 (câu 做一做 ③ của sách). 专程 chỉ dùng cho việc phải đi một quãng đường; 接连 là liên tiếp; 随意 là tùy tiện.'},
  {wrong:'我只是开个玩笑____，你别生气。',opts:['而已','无非','固然','以及'],ans:0,
   exp:'只是……而已: 而已 đứng CUỐI vế câu. 无非 là phó từ, đứng trước động từ; 固然 là liên từ ở vế trước; 以及 là "và" nối danh từ.'},
  {wrong:'他这么努力地工作，____想多挣些钱，让孩子生活得更舒适。',opts:['无非','而已','固然','以及'],ans:0,
   exp:'Phó từ 无非 đứng trước động từ 想: chẳng qua là muốn…. 而已 phải đứng cuối câu; 固然 cần vế sau chuyển ý; 以及 không đứng trước động từ.'},
  {wrong:'这个方法好____是好，可是实施起来太难了。',opts:['固然','虽然','而已','无非'],ans:0,
   exp:'Dạng lặp "好固然是好，可是……" chỉ dùng với 固然. 虽然 không có dạng lặp này; 而已, 无非 không nối hai vế đối lập.'},
  {wrong:'现在很多年轻人对手机产生了很强的____。',opts:['依赖','依靠','借助','执行'],ans:0,
   exp:'Nghĩa tiêu cực "phụ thuộc" + 产生……依赖 → 依赖. 依靠 thiên về tích cực (chỗ dựa); 借助 là nhờ vào (động từ); 执行 là thực hiện.'},
  {wrong:'收到礼物以后，弟弟____地拆开了包装。',opts:['迫不及待','斩钉截铁','持久','颠倒'],ans:0,
   exp:'Nóng lòng mở quà ngay → 迫不及待地拆开. 斩钉截铁 dùng cho lời nói, thái độ kiên quyết; 持久, 颠倒 không làm trạng ngữ trước 地 + động từ.'},
  {wrong:'只要不____隐私，你问什么都可以。',opts:['涉及','设置','达成','策划'],ans:0,
   exp:'涉及隐私 = đụng chạm đến đời tư. 设置 là thiết lập; 达成 là đạt được; 策划 là lên kế hoạch — đều không đi với 隐私.'},
  {wrong:'计划制订得再好，不____也没有用。',opts:['执行','设置','策划','借助'],ans:0,
   exp:'Kế hoạch đã lập thì phải THỰC HIỆN → 执行计划. 设置, 策划 là khâu lập ra (đã có 制订); 借助 cần tân ngữ công cụ.'}
];

// ══════════════════════════════════════════
// DỊCH — câu ghép, dùng từ bài 5 + ôn từ HSK 6 bài 1–4 và HSK 4–5
// ══════════════════════════════════════════
var translateData = [
  {vi:'Tôi học tiếng Trung chẳng qua là học cho vui, chứ cũng không đặt ra mục tiêu cụ thể nào cả.',zh:'我学汉语无非是随意学学，并没有设置什么具体的目标。',py:'Wǒ xué Hànyǔ wúfēi shì suíyì xuéxue, bìng méiyǒu shèzhì shénme jùtǐ de mùbiāo.',goiY:['无非是','随意学学','设置','并没有'],giai:'无非是 = chẳng qua là (làm nhẹ sự việc); 并没有 nhấn mạnh phủ định "đâu có…". "Học cho vui" dịch 随意学学 (động từ lặp), không dịch từng chữ 为了高兴学.'},
  {vi:'Bạn ấy không phải có ác cảm với cậu, mà chỉ là không thích người khác hỏi chuyện riêng tư của mình thôi.',zh:'她不是对你反感，而是不喜欢别人问她的隐私而已。',py:'Tā bú shì duì nǐ fǎngǎn, ér shì bù xǐhuan biérén wèn tā de yǐnsī éryǐ.',goiY:['不是……而是……','反感','隐私','而已'],giai:'不是 A 而是 B phủ định A, khẳng định B; 而已 đặt cuối câu làm nhẹ ý "chỉ là… thôi". "Có ác cảm với ai" = 对……反感, giới từ 对 đứng trước.'},
  {vi:'Học tiếng Trung qua truyện tranh tất nhiên là thú vị, nhưng chỉ dựa vào hứng thú thì e là khó bền lâu.',zh:'看漫画学汉语固然有意思，可是光凭兴趣恐怕难以持久。',py:'Kàn mànhuà xué Hànyǔ gùrán yǒu yìsi, kěshì guāng píng xìngqù kǒngpà nányǐ chíjiǔ.',goiY:['固然……可是……','光凭','难以持久'],giai:'固然 thừa nhận mặt tốt ở vế trước, 可是 chuyển sang mặt hạn chế; "khó bền lâu" = 难以持久, không nói 不能长久地.'},
  {vi:'Tuy bố mẹ rất nghiêm khắc với tôi, thường xuyên đôn đốc tôi thực hiện kế hoạch học tập, nhưng tôi biết họ là nghĩ cho tôi.',zh:'虽然父母对我很严厉，常常督促我执行学习计划，但是我知道他们是为我着想。',py:'Suīrán fùmǔ duì wǒ hěn yánlì, chángcháng dūcù wǒ zhíxíng xuéxí jìhuà, dànshì wǒ zhīdào tāmen shì wèi wǒ zhuóxiǎng.',goiY:['虽然……但是……','严厉','督促','为……着想'],giai:'虽然……但是…… nhượng bộ – chuyển ý; "nghĩ cho ai" = 为 + người + 着想 (着 đọc zhuó), không nói 着想我. 严厉, 督促 ôn bài 1 HSK 6.'},
  {vi:'Chỉ cần đặt ra mục tiêu ngắn hạn phù hợp, em sẽ có động lực học tập, không đến nỗi gác sách sang một bên.',zh:'只要设置合适的短期目标，你就会有学习的动力，不至于把书搁在一边。',py:'Zhǐyào shèzhì héshì de duǎnqī mùbiāo, nǐ jiù huì yǒu xuéxí de dònglì, bú zhìyú bǎ shū gē zài yìbiān.',goiY:['只要……就……','设置','动力','不至于'],giai:'只要 + điều kiện đủ, 就 + kết quả; 不至于 = không đến mức (kết quả xấu). "Gác sang một bên" = 把……搁在一边.'},
  {vi:'Người khác đều đang ôn bài cật lực, cậu ấy lại say sưa đọc tiểu thuyết, thảo nào mẹ trách cậu ấy.',zh:'别人都在拼命复习，他却津津有味地看小说，难怪妈妈埋怨他。',py:'Biérén dōu zài pīnmìng fùxí, tā què jīnjīn yǒu wèi de kàn xiǎoshuō, nánguài māma mányuàn tā.',goiY:['却','津津有味地','难怪','埋怨'],giai:'却 đứng sau chủ ngữ, nối hai vế trái ngược; 难怪 = thảo nào (đã hiểu ra nguyên nhân). 埋怨 (bài 2 HSK 6) đọc mányuàn.'},
  {vi:'Một khi đã quyết định học ngoại ngữ thì phải thực hiện kế hoạch nghiêm túc, không thể lúc vui thì học cật lực, lúc không vui thì gác sang một bên.',zh:'一旦决定学外语，就要严格执行计划，不能高兴了就拼命学，不高兴了就搁在一边。',py:'Yídàn juédìng xué wàiyǔ, jiù yào yángé zhíxíng jìhuà, bù néng gāoxìng le jiù pīnmìng xué, bù gāoxìng le jiù gē zài yìbiān.',goiY:['一旦……就……','执行','拼命','搁在一边'],giai:'一旦 + điều kiện, 就 + yêu cầu; "lúc vui thì…, lúc không vui thì…" dịch bằng hai vế song song ……了就……，不……了就…… như bài khoá.'},
  {vi:'Cậu ấy mỗi ngày làm hai việc bán thời gian, chẳng qua là muốn giảm gánh nặng cho bố mẹ, huống hồ tiền lương cũng không đến nỗi thấp.',zh:'他每天打两份工，无非是想减轻父母的负担，何况薪水也不算低。',py:'Tā měi tiān dǎ liǎng fèn gōng, wúfēi shì xiǎng jiǎnqīng fùmǔ de fùdān, hékuàng xīnshui yě bú suàn dī.',goiY:['无非是','何况','薪水'],giai:'无非是 + mục đích = chẳng qua là muốn…; 何况 thêm một lý do nữa ở vế cuối ("huống hồ"). "Làm hai việc bán thời gian" = 打两份工.'},
  {vi:'Cân nhắc lợi hại xong, tôi thà lên mạng học theo ý mình, chứ không muốn bị người ta ép thực hiện kế hoạch của người khác.',zh:'权衡利弊以后，我宁可在网上随意地学，也不愿意被人硬逼着执行别人的计划。',py:'Quánhéng lìbì yǐhòu, wǒ nìngkě zài wǎng shang suíyì de xué, yě bú yuànyì bèi rén yìng bīzhe zhíxíng biérén de jìhuà.',goiY:['权衡利弊','宁可……也不……','随意','执行'],giai:'宁可 A 也不 B = thà A chứ không B (chọn A dù có thiệt); 被人硬逼着 + V = bị người ta ép phải….'},
  {vi:'Nếu cậu cứ hỏi tuổi và lương của người khác, thì dù thái độ có thành khẩn đến đâu cũng sẽ khiến người ta khó chịu, vì những câu hỏi đó đụng chạm đến đời tư.',zh:'如果你总问别人的年龄和薪水，那么即使态度再恳切，也会引起对方的反感，因为这些问题涉及隐私。',py:'Rúguǒ nǐ zǒng wèn biérén de niánlíng hé xīnshui, nàme jíshǐ tàidu zài kěnqiè, yě huì yǐnqǐ duìfāng de fǎngǎn, yīnwèi zhèxiē wèntí shèjí yǐnsī.',goiY:['即使……也……','恳切','反感','涉及'],giai:'Câu ba tầng: 如果……那么 (giả thiết) + 即使……也 (nhượng bộ: dù… mấy cũng…) + 因为 (giải thích). "Khiến ai khó chịu" = 引起……的反感.'}
];

// Chiều Trung → Việt — bám ý bài khoá, nội dung khác với chiều trên
var translateDataRev = [
  {vi:'Tôi muốn học ngoại ngữ chẳng qua là để không phải dựa vào bản dịch nữa, trực tiếp đọc nguyên văn mà thôi.',zh:'我想学外语无非是为了不再依靠翻译，直接阅读原文而已。',py:'Wǒ xiǎng xué wàiyǔ wúfēi shì wèile bú zài yīkào fānyì, zhíjiē yuèdú yuánwén éryǐ.',goiY:['无非是……而已 = chẳng qua chỉ là… mà thôi','依靠 = dựa vào'],giai:'无非 (đầu) và 而已 (cuối) hô ứng, cùng làm nhẹ sự việc → dịch "chẳng qua… mà thôi", không cần dịch hai lần "chỉ".'},
  {vi:'Trung tâm đó cách nhà tôi không xa, nên tôi hào hứng cất công đến tận nơi hỏi thông tin.',zh:'那家机构离我家不远，所以我兴致勃勃地专程前去咨询。',py:'Nà jiā jīgòu lí wǒ jiā bù yuǎn, suǒyǐ wǒ xìngzhì bóbó de zhuānchéng qiánqù zīxún.',goiY:['兴致勃勃 = hào hứng','专程 = cất công (đi một chuyến)','机构 = trung tâm, tổ chức'],giai:'机构 ở đây là "trung tâm ngoại ngữ", không dịch "cơ cấu"; 专程前去 = cất công đến tận nơi.'},
  {vi:'Tôi cứ tưởng nộp học phí xong là được vào học, không ngờ cô ấy liên tiếp hỏi rất nhiều câu đụng chạm đến đời tư.',zh:'我本以为交了学费就能上课，不料她接连问了很多涉及隐私的问题。',py:'Wǒ běn yǐwéi jiāole xuéfèi jiù néng shàngkè, búliào tā jiēlián wènle hěn duō shèjí yǐnsī de wèntí.',goiY:['本以为……不料…… = cứ tưởng… không ngờ…','接连 = liên tiếp','涉及 = đụng chạm đến'],giai:'以为 = tưởng (mà sai), 不料 = không ngờ → hai vế đối lập giữa suy nghĩ và thực tế; 涉及隐私的问题 là định ngữ dài, dịch "câu hỏi đụng chạm đến đời tư".'},
  {vi:'Tuy câu hỏi của cô ấy làm tôi rất khó chịu, nhưng cô ấy vẫn cố hết sức kiềm chế, kiên nhẫn giải thích vì sao phải hiểu học viên.',zh:'虽然她的问题让我很反感，但她还是极力忍耐着，耐心地解释为什么要了解学员。',py:'Suīrán tā de wèntí ràng wǒ hěn fǎngǎn, dàn tā háishi jílì rěnnàizhe, nàixīn de jiěshì wèi shénme yào liǎojiě xuéyuán.',goiY:['虽然……但…… = tuy… nhưng…','反感 = khó chịu, ác cảm','极力忍耐 = cố hết sức kiềm chế'],giai:'Chủ ngữ hai vế khác nhau (问题 / 她) — tiếng Việt vẫn giữ "tuy… nhưng…"; 让我很反感 dịch "làm tôi rất khó chịu", không dịch "phản cảm".'},
  {vi:'Không có mục tiêu thì thiếu động lực, đạo lý này tất nhiên tôi hiểu, nhưng quả thật tôi không nói ra được mục tiêu cụ thể nào.',zh:'没有目标就缺乏动力，这个道理我固然懂，可是我确实说不出什么具体目标。',py:'Méiyǒu mùbiāo jiù quēfá dònglì, zhège dàolǐ wǒ gùrán dǒng, kěshì wǒ quèshí shuō bu chū shénme jùtǐ mùbiāo.',goiY:['固然……可是…… = tất nhiên… nhưng…','缺乏动力 = thiếu động lực'],giai:'固然 thừa nhận ("tất nhiên tôi hiểu"), 可是 chuyển ý; 说不出 là bổ ngữ khả năng phủ định → "không nói ra được".'},
  {vi:'Người đàn ông ấy thái độ chân thành tha thiết, tôi còn tưởng cuối cùng đã gặp được tri âm, bất giác trò chuyện với anh ta.',zh:'那位男士态度真诚恳切，我还以为终于碰上了知音，不由得跟他聊了起来。',py:'Nà wèi nánshì tàidu zhēnchéng kěnqiè, wǒ hái yǐwéi zhōngyú pèngshàngle zhīyīn, bùyóude gēn tā liáole qǐlái.',goiY:['恳切 = thành khẩn, tha thiết','知音 = tri âm','不由得 = bất giác, không kìm được'],giai:'不由得 (bài 2 HSK 6) = bất giác, không kìm được; V + 起来 = bắt đầu (nói chuyện). 还以为 hàm ý "hóa ra không phải".'},
  {vi:'Anh ta nói chỉ dựa vào hứng thú thì e là khó bền lâu, tôi lập tức suy sụp, thế là dứt khoát đứng dậy nói rõ muốn về.',zh:'他说光凭兴趣恐怕难以持久，我顿时崩溃了，于是果断地站起来表明要走。',py:'Tā shuō guāng píng xìngqù kǒngpà nányǐ chíjiǔ, wǒ dùnshí bēngkuì le, yúshì guǒduàn de zhàn qǐlái biǎomíng yào zǒu.',goiY:['顿时 = ngay lập tức','于是 = thế là','果断 = dứt khoát'],giai:'顿时 (bài 2 HSK 6) chỉ sự thay đổi xảy ra ngay; 于是 nối hành động là hệ quả của vế trước. 崩溃 ở đây là khẩu ngữ "suy sụp, phát điên", không dịch "sụp đổ".'},
  {vi:'Trang web này tất nhiên không có ai đôn đốc tôi, nhưng câu nào cũng được giảng giải rất chi tiết, rất hợp với cách tư duy của tôi.',zh:'这家网站固然没有人督促我，但是每个句子都讲解得很详细，和我的思维很搭。',py:'Zhè jiā wǎngzhàn gùrán méiyǒu rén dūcù wǒ, dànshì měi ge jùzi dōu jiǎngjiě de hěn xiángxì, hé wǒ de sīwéi hěn dā.',goiY:['固然……但是…… = tất nhiên… nhưng…','督促 = đôn đốc','很搭 = rất hợp'],giai:'固然 thừa nhận một mặt hạn chế, 但是 chuyển sang mặt tốt; 搭 (khẩu ngữ) = hợp, ăn khớp — không dịch "dựng" hay "đáp".'},
  {vi:'Nhược điểm của việc học trực tuyến nằm ở chỗ không ai giám sát: vui thì học cật lực, không vui thì gác sang một bên, có khi thậm chí học đảo lộn trước sau.',zh:'在线学习的弊端在于没人监督，高兴了就拼命学，不高兴了就搁在一边，有时甚至前后颠倒。',py:'Zàixiàn xuéxí de bìduān zàiyú méi rén jiāndū, gāoxìng le jiù pīnmìng xué, bù gāoxìng le jiù gē zài yìbiān, yǒushí shènzhì qiánhòu diāndǎo.',goiY:['弊端在于 = nhược điểm nằm ở chỗ','甚至 = thậm chí','颠倒 = đảo lộn'],giai:'弊端在于 + nội dung → "nhược điểm nằm ở chỗ…"; 甚至 đưa ra mức độ cao hơn ở vế cuối.'},
  {vi:'Thay vì bị người khác ép thực hiện kế hoạch, chi bằng cứ học theo hứng thú của mình, bởi vì sau khi cân nhắc lợi hại, tôi thấy lợi vẫn lớn hơn hại.',zh:'与其被人硬逼着执行计划，不如按自己的兴趣随意学习，因为权衡利弊以后，我发现利还是大于弊。',py:'Yǔqí bèi rén yìng bīzhe zhíxíng jìhuà, bùrú àn zìjǐ de xìngqù suíyì xuéxí, yīnwèi quánhéng lìbì yǐhòu, wǒ fāxiàn lì háishi dàyú bì.',goiY:['与其……不如…… = thay vì… chi bằng…','权衡利弊 = cân nhắc lợi hại','大于 = lớn hơn'],giai:'与其 A 不如 B: người nói chọn B; 大于 (văn viết) = lớn hơn, dịch "lợi vẫn lớn hơn hại".'}
];

// ══════════════════════════════════════════
// LUYỆN VIẾT — đề 运用 · 写一写 của sách (tr. 62): báo cáo điều tra ≥ 300 chữ
// ══════════════════════════════════════════
var writingData = {
  kieu:'sgk',
  soChu:300,
  de:'请对3～4个不同年龄、不同国家、不同职业的对象进行调查，主题是调查“你为什么学习外语”，将调查内容填入表中，课上向同学汇报，同时将调查内容写成一篇不少于300字的调查报告。',
  prompt:'Hãy điều tra 3–4 người khác nhau về độ tuổi, quốc gia và nghề nghiệp với chủ đề "Vì sao bạn học ngoại ngữ?", điền nội dung điều tra vào bảng, báo cáo trước lớp, đồng thời viết nội dung điều tra thành một bản báo cáo điều tra không ít hơn 300 chữ.',
  dan:[
    {hoi:'调查对象：国家、年龄、职业',goiY:'①国家：来自……（越南、韩国、法国……） ②年龄：今年……岁 ③职业：学生／公司职员／退休老师……（3～4个人要各不相同）'},
    {hoi:'学习外语的原因',goiY:'①为了找工作…… ②为了在……旅行 ③对……感兴趣 ④有……朋友 ⑤大学的专业是……（参考热身1）'},
    {hoi:'现在的学习方式',goiY:'①在培训机构上课…… ②借助手机／网络在线学习…… ③跟朋友聊天、看原文电影……'},
    {hoi:'学习方式的利与弊',goiY:'①利：…… ②弊：弊端在于……（参考练习5“利弊”一行、练习4②）'}
  ],
  tuNen:['无非','而已','固然','迫不及待','借助','拼命','搁在一边','津津有味','权衡','持久'],
  cauTruc:[
    {ten:'为了了解……，我调查了……', nhan:'调查', vd:'为了了解人们学习外语的原因和方式，我调查了三个不同国家的人。', khi:'Câu MỞ ĐẦU: nêu mục đích và đối tượng điều tra.'},
    {ten:'第一位是来自……的……，今年……岁，是……', nhan:'第一位', vd:'第一位是来自韩国的金先生，今年三十五岁，是一家公司的职员。', khi:'Giới thiệu từng người: quốc gia – tuổi – nghề (đúng các cột của bảng).'},
    {ten:'……无非是为了……', nhan:'无非', vd:'他学汉语无非是为了工作。', khi:'Nêu LÝ DO học ngoại ngữ ngắn gọn (ngữ pháp bài 5).'},
    {ten:'……固然……，可是……', nhan:'固然', vd:'在线学习固然方便，可是没有人督促。', khi:'Nêu LỢI rồi chuyển sang HẠI của cách học.'},
    {ten:'好处是……，弊端在于……', nhan:'弊端在于', vd:'好处是有老师督促，弊端在于太累了。', khi:'Trình bày lợi – hại rõ ràng (bắt chước 练习4 ②).'},
    {ten:'通过这次调查，我发现……', nhan:'通过', vd:'通过这次调查，我发现大家学外语的理由各不相同。', khi:'Câu KẾT: tổng hợp kết quả điều tra.'},
    {ten:'权衡利弊以后，我认为……', nhan:'权衡', vd:'权衡利弊以后，我认为最重要的是要有持久的动力。', khi:'Câu KẾT: nêu ý kiến riêng của người viết.'}
  ],
  checklist:[
    'Đã điều tra đủ 3–4 người, khác nhau về quốc gia, tuổi và nghề nghiệp chưa?',
    'Mỗi người đã có đủ thông tin của bảng: 国家 · 年龄 · 职业 · 学习外语的原因 · 现在的学习方式（利与弊） chưa?',
    'Có đoạn mở đầu nêu mục đích điều tra và đoạn kết tổng hợp kết quả / ý kiến riêng chưa?',
    'Đã dùng được ít nhất 3 điểm ngữ pháp / từ của bài (而已, 固然, 无非, 弊端, 权衡…) chưa?',
    'Bài có ít nhất 300 chữ (không đếm dấu câu) chưa?'
  ],
  model:{
    zh:'为了了解人们学习外语的原因和方式，我调查了三个不同国家、不同年龄、不同职业的人。第一位是来自韩国的金先生，今年三十五岁，是一家贸易公司的职员。他学汉语无非是为了工作，因为公司的很多客户都是中国人。他每周在培训机构上两次课，好处是有老师督促，弊端在于下班以后还要上课，实在太累了。第二位是越南的高中生阿兰，今年十七岁。她对中国文化特别感兴趣，迫不及待地想看懂原文电影。她主要借助手机在线学习，这种方式固然方便、随意，可是她常常高兴了拼命学，不高兴了就搁在一边。第三位是法国的退休老师马丁，今年六十八岁。他说自己学中文只是为了旅行而已。他每天跟中国朋友聊天，学得津津有味，可惜进步比较慢。通过这次调查，我发现大家学外语的理由各不相同，学习方式也各有利弊。权衡利弊以后，我认为最重要的是要有持久的动力，并找到一种和自己的思维很搭的方法。',
    py:'Wèile liǎojiě rénmen xuéxí wàiyǔ de yuányīn hé fāngshì, wǒ diàochále sān ge bù tóng guójiā, bù tóng niánlíng, bù tóng zhíyè de rén. Dì yī wèi shì láizì Hánguó de Jīn xiānsheng, jīnnián sānshíwǔ suì, shì yì jiā màoyì gōngsī de zhíyuán. Tā xué Hànyǔ wúfēi shì wèile gōngzuò, yīnwèi gōngsī de hěn duō kèhù dōu shì Zhōngguórén. Tā měi zhōu zài péixùn jīgòu shàng liǎng cì kè, hǎochù shì yǒu lǎoshī dūcù, bìduān zàiyú xiàbān yǐhòu hái yào shàngkè, shízài tài lèi le. Dì èr wèi shì Yuènán de gāozhōngshēng Ālán, jīnnián shíqī suì. Tā duì Zhōngguó wénhuà tèbié gǎn xìngqù, pòbùjídài de xiǎng kàndǒng yuánwén diànyǐng. Tā zhǔyào jièzhù shǒujī zàixiàn xuéxí, zhè zhǒng fāngshì gùrán fāngbiàn, suíyì, kěshì tā chángcháng gāoxìng le pīnmìng xué, bù gāoxìng le jiù gē zài yìbiān. Dì sān wèi shì Fǎguó de tuìxiū lǎoshī Mǎdīng, jīnnián liùshíbā suì. Tā shuō zìjǐ xué Zhōngwén zhǐshì wèile lǚxíng éryǐ. Tā měi tiān gēn Zhōngguó péngyou liáotiān, xué de jīnjīn yǒu wèi, kěxī jìnbù bǐjiào màn. Tōngguò zhè cì diàochá, wǒ fāxiàn dàjiā xué wàiyǔ de lǐyóu gè bù xiāngtóng, xuéxí fāngshì yě gè yǒu lìbì. Quánhéng lìbì yǐhòu, wǒ rènwéi zuì zhòngyào de shì yào yǒu chíjiǔ de dònglì, bìng zhǎodào yì zhǒng hé zìjǐ de sīwéi hěn dā de fāngfǎ.',
    vn:'Để tìm hiểu lý do và cách học ngoại ngữ của mọi người, tôi đã điều tra ba người thuộc ba quốc gia, độ tuổi và nghề nghiệp khác nhau. Người thứ nhất là anh Kim đến từ Hàn Quốc, năm nay ba mươi lăm tuổi, là nhân viên một công ty thương mại. Anh học tiếng Trung chẳng qua là vì công việc, bởi nhiều khách hàng của công ty là người Trung Quốc. Mỗi tuần anh học hai buổi ở trung tâm đào tạo; cái lợi là có giáo viên đôn đốc, còn nhược điểm là tan làm rồi vẫn phải đi học, thật sự quá mệt. Người thứ hai là Lan, học sinh cấp ba người Việt Nam, năm nay mười bảy tuổi. Bạn ấy đặc biệt yêu thích văn hóa Trung Quốc, nóng lòng muốn xem hiểu phim nguyên bản. Bạn chủ yếu học trực tuyến nhờ điện thoại; cách này tất nhiên tiện lợi, thoải mái, nhưng bạn thường lúc vui thì học cật lực, lúc không vui thì gác sang một bên. Người thứ ba là thầy Martin, giáo viên đã nghỉ hưu người Pháp, năm nay sáu mươi tám tuổi. Thầy nói mình học tiếng Trung chỉ để đi du lịch mà thôi. Ngày nào thầy cũng trò chuyện với bạn bè người Trung Quốc, học rất say sưa, tiếc là tiến bộ hơi chậm. Qua cuộc điều tra này, tôi nhận thấy lý do học ngoại ngữ của mỗi người đều khác nhau, cách học cũng mỗi cách có lợi có hại. Sau khi cân nhắc lợi hại, tôi cho rằng quan trọng nhất là phải có động lực bền bỉ, đồng thời tìm được một phương pháp hợp với cách tư duy của mình.'
  }
};

// ══════════════════════════════════════════
// LUYỆN NÓI — đúng bảng 练习5 của sách: 根据提示，简述课文主要内容
// ══════════════════════════════════════════
var speakingData = {
  intro:'Đây là bài tập 5 trong sách: <b>根据提示，简述课文主要内容</b>. Mỗi câu hỏi là một dòng của bảng — bấm loa nghe câu hỏi, nhìn gợi ý bên phải, <b>tự ghi âm câu trả lời của mình trước</b> rồi mới mở câu mẫu. Cố dùng từ mới: 迫不及待 · 依靠 · 设置 · 动力 · 执行 · 弊端 · 权衡.',
  questions:[
    {q_zh:'“我”学习外语的原因是：',
     q_vn:'Lý do "tôi" học ngoại ngữ là gì?',
     hint:'①喜欢…… ②不依靠……，看……，阅读……',
     sample:'“我”学习外语的原因有两个：第一，“我”喜欢这个国家的文化；第二，“我”迫不及待地想不再依靠翻译，看原文电影，独自阅读原文。',
     sample_vn:'"Tôi" học ngoại ngữ vì hai lý do: thứ nhất, "tôi" thích văn hóa của đất nước đó; thứ hai, "tôi" nóng lòng muốn không phải dựa vào bản dịch nữa, xem phim nguyên bản, tự mình đọc nguyên văn.',
     note:'Dùng 第一……第二…… để liệt kê hai lý do cho mạch lạc; nhớ dùng 迫不及待 và 依靠.'},
    {q_zh:'那家机构认为学习外语必须有什么？',
     q_vn:'Trung tâm đó cho rằng học ngoại ngữ nhất định phải có gì?',
     hint:'具体目标，比如：出国、职业……',
     sample:'那家机构认为学习外语必须有具体目标，比如有没有出国计划、职业是什么。他们的班都是根据学员的具体情况设置的，没有目标就缺乏动力。',
     sample_vn:'Trung tâm đó cho rằng học ngoại ngữ nhất định phải có mục tiêu cụ thể, ví dụ có kế hoạch ra nước ngoài không, nghề nghiệp là gì. Các lớp của họ đều được mở dựa trên tình hình cụ thể của học viên, không có mục tiêu thì thiếu động lực.',
     note:'Dùng 比如…… để nêu ví dụ; 根据……设置 và 缺乏动力 là hai cụm "ăn điểm" của bài.'},
    {q_zh:'最后“我”选择了什么方式学习，为什么？',
     q_vn:'Cuối cùng "tôi" chọn cách học nào, vì sao?',
     hint:'①在线…… ②教学方法：…… ③没有人硬逼着我…… ④没有人问我……',
     sample:'最后“我”选择了在线学习。那家网站从基础教起，每个句子的语法都详细讲解，和“我”的思维很搭；而且没有人硬逼着“我”执行学习计划，也没有人问“我”为啥要学，以及“我”的单位、身份和薪水。',
     sample_vn:'Cuối cùng "tôi" chọn học trực tuyến. Trang web đó dạy từ cơ bản, ngữ pháp của từng câu đều được giảng chi tiết, rất hợp với cách tư duy của "tôi"; hơn nữa không ai ép "tôi" thực hiện kế hoạch học tập, cũng không ai hỏi "tôi" vì sao lại học, rồi cơ quan, thân phận và tiền lương của "tôi".',
     note:'Trả lời đủ HAI ý: chọn gì (在线学习) và vì sao (phương pháp dạy + không ai ép, không ai hỏi). Dùng 而且 nối các lý do.'},
    {q_zh:'“我”的学习方式的利弊是：',
     q_vn:'Cách học của "tôi" có lợi và hại gì?',
     hint:'①利：…… ②弊：……',
     sample:'利是心里舒服，能津津有味地享受学习；弊端在于高兴了拼命学一阵子，不高兴了就搁在一边，有时还前后颠倒。不过利弊权衡，利还是大于弊。',
     sample_vn:'Lợi là trong lòng thoải mái, có thể say sưa tận hưởng việc học; nhược điểm là lúc vui thì ra sức học một thời gian, lúc không vui thì gác sang một bên, có khi còn học đảo lộn trước sau. Nhưng cân nhắc lợi hại thì lợi vẫn lớn hơn hại.',
     note:'Khung 利是……；弊端在于…… + câu kết 利弊权衡，利还是大于弊 — nói đủ cả hai mặt rồi mới kết luận.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🎧 NGHE THEO DẠNG ĐỀ HSK 6 — 听力 (hội thoại ngắn + đoạn nói)
// Sách HSK 6 không có sách bài tập nghe: tự soạn theo chủ đề bài 5.
// ══════════════════════════════════════════════════════════════
var listenExamData = {
  intro: 'Đề HSK 6 phần nghe chỉ phát <b>một lượt</b>. Vì vậy ở đây cũng vậy: bấm nút loa nghe, ' +
         'trả lời ngay, rồi mới mở nguyên văn ra đối chiếu. Đừng mở nguyên văn trước — mở trước là mất tác dụng.',
  source: 'Soạn theo dạng đề HSK 6 · chủ đề bài 5',
  items: [
    {n:1,
     lines:[{sp:'女',zh:'你学日语多久了？怎么进步这么快？'},
            {sp:'男',zh:'也没什么秘诀，我无非是每天坚持看一集日本电视剧而已。'}],
     q:'男的是怎么学日语的？',qvn:'Người đàn ông học tiếng Nhật bằng cách nào?',
     opts:['上培训班','每天看日本电视剧','请了家教','去日本留学'],ans:1,
     why:'无非是……而已 = chẳng qua chỉ là…: anh ấy chỉ kiên trì mỗi ngày xem một tập phim Nhật. Các phương án khác không được nhắc tới.',
     words:['无非','而已']},

    {n:2,
     lines:[{sp:'男',zh:'你说的那家语言机构离你家远吗？'},
            {sp:'女',zh:'不远，就在我家对面那栋办公楼的十二层。'}],
     q:'那家语言机构在哪儿？',qvn:'Trung tâm ngoại ngữ đó ở đâu?',
     opts:['女的家里','学校旁边','女的家对面的办公楼里','十二路车站旁边'],ans:2,
     why:'对面那栋办公楼的十二层 = tầng 12 của tòa văn phòng đối diện nhà cô ấy. Nghe thấy 十二 dễ chọn nhầm "bến xe số 12".',
     words:['机构','栋']},

    {n:3,
     lines:[{sp:'女',zh:'刚才那个工作人员一直问你的收入和家庭情况，你怎么不高兴了？'},
            {sp:'男',zh:'这些都是我的隐私，跟学外语有什么关系？'}],
     q:'男的为什么不高兴？',qvn:'Vì sao người đàn ông không vui?',
     opts:['学费太贵了','对方问了他的隐私','工作人员迟到了','他不想学外语'],ans:1,
     why:'Anh ấy nói 这些都是我的隐私 — nhân viên hỏi thu nhập, gia đình là đụng đến đời tư, giống "tôi" trong bài khoá.',
     words:['隐私']},

    {n:4,
     lines:[{sp:'男',zh:'我觉得在线学习固然方便，可是没有人督促，我坚持不了多久。'},
            {sp:'女',zh:'那你还是报个班吧。'}],
     q:'男的觉得在线学习怎么样？',qvn:'Người đàn ông thấy học trực tuyến thế nào?',
     opts:['又贵又不方便','方便但难以坚持','比上课效果好','一点儿也不方便'],ans:1,
     why:'固然方便，可是……坚持不了多久 → tiện nhưng khó kiên trì. Nghe được cấu trúc 固然……可是…… là chọn đúng.',
     words:['固然']},

    {n:5,
     lines:[{sp:'女',zh:'你怎么又把汉语书搁在一边了？'},
            {sp:'男',zh:'最近工作太忙了，等忙完这阵子，我一定拼命学。'}],
     q:'关于男的，可以知道什么？',qvn:'Về người đàn ông, có thể biết điều gì?',
     opts:['最近很忙','已经不学汉语了','汉语书丢了','工作不太忙'],ans:0,
     why:'最近工作太忙了 → gần đây rất bận. Anh ấy chỉ tạm gác sách (搁在一边), sau này vẫn sẽ học cật lực, nên "đã bỏ học" là sai.',
     words:['搁','拼命']},

    {n:6,
     lines:[{sp:'男',zh:'听说你们俩第一次见面就聊了三个小时？'},
            {sp:'女',zh:'是啊，我们都喜欢古典音乐，她真是我的知音。'}],
     q:'她们为什么聊得那么久？',qvn:'Vì sao hai cô ấy nói chuyện lâu như vậy?',
     opts:['她们是老同学','她们有共同的爱好','她们在讨论工作','她们很久没见了'],ans:1,
     why:'我们都喜欢古典音乐 + 知音 (tri âm) → có chung sở thích. 第一次见面 cho thấy không phải bạn cũ, cũng không phải lâu ngày gặp lại.',
     words:['知音']},

    {n:7,
     lines:[{sp:'女',zh:'这份工作薪水那么高，你为什么不去？'},
            {sp:'男',zh:'我权衡了一下利弊。'},
            {sp:'女',zh:'有什么弊端？'},
            {sp:'男',zh:'每天要加班到很晚，而且离家太远，我觉得不值得。'}],
     q:'男的为什么不接受那份工作？',qvn:'Vì sao người đàn ông không nhận công việc đó?',
     opts:['薪水太低','要经常加班，离家也远','他不会做那份工作','公司不要他'],ans:1,
     why:'Anh ấy nêu 弊端: 每天要加班到很晚，而且离家太远. Lương lại rất CAO (薪水那么高) nên phương án "lương thấp" là bẫy.',
     words:['薪水','权衡','弊端']},

    {n:8,
     lines:[{sp:'男',zh:'学外语需要理由吗？我觉得需要，但理由不一定要很远大。有的人学外语是为了找工作，有的人无非是想看懂原文电影。不管是什么理由，光凭一时的热情恐怕难以持久。只有给自己设置清楚的目标，并且严格执行学习计划，才能一直保持学习的动力。'}],
     q:'说话人认为怎样才能一直保持学习的动力？',qvn:'Người nói cho rằng làm thế nào mới luôn giữ được động lực học tập?',
     opts:['只要有热情就行','要找到远大的理由','设置清楚的目标并严格执行计划','去语言机构学习'],ans:2,
     why:'Câu then chốt: 只有……设置清楚的目标，并且严格执行学习计划，才能…… Người nói còn nói rõ 光凭热情难以持久 và lý do 不一定要很远大, nên A, B sai.',
     words:['无非','持久','设置','执行','动力']}
  ]
};

// ══════════════════════════════════════════════════════════════
// 💬 TÌNH HUỐNG — HOÀN THÀNH HỘI THOẠI
// ══════════════════════════════════════════════════════════════
var situationData = {
  intro: 'Mỗi tình huống cho sẵn lời của người kia. Em viết lời đáp của mình, <b>bắt buộc dùng đúng từ/cấu trúc ghi ở ô yêu cầu</b>. ' +
         'Viết xong mới mở câu mẫu — câu mẫu chỉ là MỘT cách nói, em nói khác mà đúng yêu cầu vẫn được.',
  items: [
    {scene:'Bạn hỏi vì sao em học tiếng Trung.',
     a:{sp:'Bạn',zh:'你为什么学汉语啊？是为了以后找工作吗？',vn:'Sao cậu học tiếng Trung thế? Để sau này tìm việc à?'},
     need:['Dùng 无非 hoặc 而已','Nêu lý do thật của mình'],
     sample:'也不全是，我学汉语无非是喜欢看中国电视剧而已。',
     samplePy:'Yě bù quán shì, wǒ xué Hànyǔ wúfēi shì xǐhuan kàn Zhōngguó diànshìjù éryǐ.',
     sampleVn:'Cũng không hẳn, tớ học tiếng Trung chẳng qua là vì thích xem phim truyền hình Trung Quốc thôi.',
     tip:'无非 đứng trước động từ, 而已 đứng cuối câu; dùng cùng nhau càng làm nhẹ ý "chỉ vậy thôi".'},

    {scene:'Bạn khen cách học của em.',
     a:{sp:'Bạn',zh:'你每天用手机学汉语，这个方法真好！',vn:'Ngày nào cậu cũng học tiếng Trung bằng điện thoại, cách này hay thật!'},
     need:['Dùng 固然……可是……','Nói ra một nhược điểm của cách học này'],
     sample:'这个方法固然方便，可是我常常一边学一边玩儿，效果不太好。',
     samplePy:'Zhège fāngfǎ gùrán fāngbiàn, kěshì wǒ chángcháng yìbiān xué yìbiān wánr, xiàoguǒ bú tài hǎo.',
     sampleVn:'Cách này tất nhiên tiện, nhưng tớ hay vừa học vừa chơi, hiệu quả không tốt lắm.',
     tip:'固然 thừa nhận lời khen trước, rồi 可是 nói điều ngược lại — cách đáp khiêm tốn, tự nhiên.'},

    {scene:'Một người mới quen hỏi lương của anh trai em.',
     a:{sp:'Người mới quen',zh:'你哥哥在哪儿工作？一个月薪水多少？',vn:'Anh trai em làm ở đâu? Một tháng lương bao nhiêu?'},
     need:['Dùng 涉及 + 隐私','Từ chối khéo, lịch sự'],
     sample:'不好意思，这涉及他的隐私，我也不太清楚。',
     samplePy:'Bù hǎoyìsi, zhè shèjí tā de yǐnsī, wǒ yě bú tài qīngchu.',
     sampleVn:'Xin lỗi, chuyện này liên quan đến đời tư của anh ấy, em cũng không rõ lắm.',
     tip:'Từ chối bằng 不好意思 + lý do, đừng trả lời cộc lốc 不告诉你 — sẽ khiến lời nói "火药味十足".'},

    {scene:'Bạn muốn bỏ học đàn vì chán.',
     a:{sp:'Bạn',zh:'我学钢琴学烦了，想先搁在一边，以后再说。',vn:'Tớ học piano chán rồi, muốn tạm gác lại, sau này tính.'},
     need:['Dùng 持久 hoặc 动力','Khuyên bạn đặt một mục tiêu nhỏ'],
     sample:'光凭兴趣恐怕难以持久，你给自己设置一个小目标，就会有动力了。',
     samplePy:'Guāng píng xìngqù kǒngpà nányǐ chíjiǔ, nǐ gěi zìjǐ shèzhì yí ge xiǎo mùbiāo, jiù huì yǒu dònglì le.',
     sampleVn:'Chỉ dựa vào hứng thú thì e là khó bền lâu, cậu đặt cho mình một mục tiêu nhỏ là sẽ có động lực thôi.',
     tip:'Đây chính là lời khuyên của trung tâm ngoại ngữ trong bài: 没有目标就缺乏动力.'},

    {scene:'Cô giáo hỏi em thấy học ngoại ngữ ở trung tâm thế nào.',
     a:{sp:'Cô',zh:'你觉得在培训机构学外语怎么样？',vn:'Em thấy học ngoại ngữ ở trung tâm đào tạo thế nào?'},
     need:['Dùng 弊端在于','Nêu cả lợi và hại'],
     sample:'好处是有老师督促，弊端在于学费太贵，时间也不太自由。',
     samplePy:'Hǎochù shì yǒu lǎoshī dūcù, bìduān zàiyú xuéfèi tài guì, shíjiān yě bú tài zìyóu.',
     sampleVn:'Cái lợi là có giáo viên đôn đốc, nhược điểm là học phí đắt quá, thời gian cũng không được tự do lắm.',
     tip:'Khung 好处是……，弊端在于…… giúp câu trả lời cân đối — dùng lại được trong bài báo cáo điều tra.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🎯 NÓI SAO CHO HAY — 得体 / 语体
// ══════════════════════════════════════════════════════════════
var registerData = {
  intro: 'Ở đây <b>cả hai câu đều đúng ngữ pháp</b> — không có câu sai. Việc của em là chọn câu <b>PHÙ HỢP HƠN</b> với hoàn cảnh. ' +
         'Lên HSK 6, chọn đúng văn phong (khẩu ngữ hay văn viết, thân mật hay trang trọng) quan trọng không kém ngữ pháp.',
  items: [
    {scene:'Em viết báo cáo điều tra nộp cho cô giáo.',
     a:'调查对象学汉语的原因无非是工作和旅行。',b:'他们学汉语就是为了工作和旅行呗。',better:'a',
     why:'呗 và 就是 là khẩu ngữ; báo cáo viết cần văn phong trang trọng: 调查对象, 无非是.'},

    {scene:'Em hỏi bạn thân vì sao không đến buổi sinh nhật.',
     a:'你为啥没来啊？',b:'请问您因何缺席？',better:'a',
     why:'啥 là khẩu ngữ thân mật, hợp với bạn bè; 因何缺席 là văn viết rất trang trọng, nói với bạn thân nghe như văn bản hành chính.'},

    {scene:'Nhân viên trung tâm ngoại ngữ hỏi thông tin học viên mới.',
     a:'您好，为了帮您策划学习方案，能简单介绍一下您的学习目标吗？',b:'你为什么要学外语？职业是什么？',better:'a',
     why:'Nói rõ mục đích (为了帮您策划……) và hỏi mềm mỏng thì khách không thấy bị đụng chạm đời tư — khác hẳn tràng câu hỏi dồn dập trong bài khoá.'},

    {scene:'Thầy giáo mời em tham gia câu lạc bộ, em không đi được.',
     a:'老师，真不好意思，那天我有事，恐怕去不了。',b:'不去！',better:'a',
     why:'Từ chối kiểu 斩钉截铁 chỉ hợp khi cần tỏ rõ lập trường; với thầy cô nên từ chối khéo: 不好意思 + lý do + 恐怕…….'},

    {scene:'Em viết đoạn kết cho bài văn nghị luận.',
     a:'利弊权衡，这种学习方式利还是大于弊。',b:'好处坏处比一比，好处多一点儿。',better:'a',
     why:'Văn viết dùng 利弊权衡, 大于 cô đọng, trang trọng; câu b đúng nhưng là khẩu ngữ.'},

    {scene:'Máy tính bị treo khi em đang làm bài, em nhắn tin than với bạn.',
     a:'我真的要崩溃了！',b:'我的精神即将崩溃。',better:'a',
     why:'Than thở với bạn dùng khẩu ngữ 我真的要崩溃了 (phát điên mất). 即将 là văn viết, nghe như báo cáo bệnh án.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🗣️ KỂ LẠI BÀI ĐỌC — theo bảng 练习5 của sách (dòng 3 tách làm hai ý: 什么方式 / 为什么)
// ══════════════════════════════════════════════════════════════
var retellData = {
  intro: 'Dựa vào bảng bài tập 5 trong sách: <b>根据提示，简述课文主要内容</b> — kể lại bài khoá bằng lời của chính em, ' +
         'KHÔNG đọc thuộc lòng. Nhìn câu hỏi, gợi ý và các từ khoá bên dưới, bấm ghi âm rồi kể khoảng 1–2 phút.',
  outline: [
    {step:'“我”学习外语的原因是：', cue:'①喜欢…… ②不依靠……，看……，阅读……', words:['迫不及待','依靠','借助','勉强']},
    {step:'那家机构认为学习外语必须有什么？', cue:'具体目标，比如：出国、职业……', words:['机构','接连','涉及','隐私','反感','设置','动力','持久','崩溃','果断']},
    {step:'最后“我”选择了什么方式学习？', cue:'①在线…… ②教学方法：……', words:['思维','搭']},
    {step:'为什么？', cue:'③没有人硬逼着我…… ④没有人问我……', words:['执行','啥','薪水']},
    {step:'“我”的学习方式的利弊是：', cue:'①利：…… ②弊：……', words:['弊端','拼命','搁','颠倒','权衡','津津有味']}
  ],
  checklist: [
    'Đã nói đủ lý do "tôi" học ngoại ngữ (thích văn hóa, muốn tự đọc nguyên văn) chưa?',
    'Có kể được trung tâm đòi hỏi gì (mục tiêu cụ thể: ra nước ngoài, nghề nghiệp…) và vì sao "tôi" bỏ về không?',
    'Có nói rõ "tôi" chọn học trực tuyến và các lý do (dạy kỹ, không ai ép, không ai hỏi chuyện riêng) chưa?',
    'Có nêu được cả LỢI và HẠI của cách học, và kết luận 利还是大于弊 chưa?',
    'Có dùng được ít nhất 5 từ mới (迫不及待, 依靠, 隐私, 反感, 执行, 弊端, 权衡…) và kể bằng lời của mình chưa?'
  ]
};

// ══════════════════════════════════════════
// SGK · 练习 (Bài tập trong sách, tr. 60–64) — đáp án theo sách đáp án
// ══════════════════════════════════════════
var sgkData = [
  {kieu:'mr', de:'模仿例子，写出更多的词语', vn:'Bắt chước ví dụ, viết thêm các từ khác (có chữ được đánh dấu)',
   vd:{tu:'拼命', chu:'命', ds:['救命','生命','寿命','命运']},
   cau:[
     {tu:'忍耐', chu:'耐', dap:['耐心','耐热','耐寒','耐用'], them:['耐烦','耐性','耐久','耐磨','耐穿','耐力'],
      giai:'耐 ở đây nghĩa là chịu được, chịu đựng (lâu): 耐热 chịu nóng, 耐寒 chịu lạnh, 耐用 dùng bền.'},
     {tu:'缓和', chu:'缓', dap:['缓慢','缓解','缓冲','迟缓'], them:['减缓','延缓','暂缓','舒缓','缓缓','缓步'],
      giai:'缓 ở đây nghĩa là chậm, thong thả, nhẹ bớt: 缓解 làm dịu bớt, 迟缓 chậm chạp, 减缓 làm chậm lại.'},
     {tu:'客户', chu:'户', dap:['用户','窗户','户口','千家万户'], them:['住户','农户','商户','储户','账户','家家户户'],
      giai:'户 gốc là cánh cửa (窗户), mở rộng thành hộ, người có quan hệ (với một nơi / một dịch vụ): 用户 người dùng, 住户 hộ dân, 千家万户 muôn nhà.'},
     {tu:'思维', chu:'思', dap:['思考','思想','思念','思路'], them:['思索','反思','构思','深思','沉思'],
      giai:'思 = suy nghĩ, nghĩ tới: 思考 suy nghĩ, 思念 nhớ nhung, 思路 mạch suy nghĩ, 反思 tự suy xét lại.'}
   ]},
  {kieu:'gx', de:'用所给词语或结构改写句子', vn:'Dùng từ hoặc cấu trúc cho sẵn để viết lại câu',
   cau:[
     {s:'为孩子的未来考虑，家长应该培养孩子独立的能力。', tu:'为……着想', dap:'为孩子的未来着想，家长应该培养孩子独立的能力。',
      giai:'为 + N + 着想 = nghĩ cho, vì lợi ích của… — thay cho 为……考虑.'},
     {s:'商店增加了很多手推车，是为了便于顾客购物。', tu:'以', dap:'商店增加了很多手推车，以便于顾客购物。',
      giai:'以 (văn viết) đứng đầu vế sau chỉ mục đích = để, nhằm; thay cho 是为了.'},
     {s:'他只不过是不小心碰了你一下，你干吗生那么大的气啊？', tu:'无非', dap:'他无非是不小心碰了你一下，你干吗生那么大的气啊？',
      giai:'无非是 = 只不过是: chẳng qua là, làm nhẹ sự việc.'},
     {s:'他并不比别人聪明，只是比别人更努力一些。', tu:'而已', dap:'他并不比别人聪明，只是比别人更努力而已。',
      giai:'只是……而已: đặt 而已 ở cuối câu, bỏ 一些 cho câu gọn.'},
     {s:'这个方法好是好，可实施起来太难了。', tu:'固然', dap:'这个方法固然好，可实施起来太难了。',
      giai:'"A 是 A，可……" (tốt thì tốt thật nhưng…) = A 固然……，可…….'},
     {s:'周末去郊外玩儿，走了一段时间后，我发现自己迷路了。', tu:'……着……着', dap:'周末去郊外玩儿，走着走着，我发现自己迷路了。',
      giai:'V着V着 + 发现 / 突然……: đang làm mãi thì xảy ra việc khác (như 说着说着又绕回来了 trong bài).'}
   ]},
  {kieu:'kho', de:'选择合适的词语填空', vn:'Chọn từ thích hợp điền vào chỗ trống (đoạn ①)', tu:['兴致勃勃','迫不及待','啥','接连','栋'],
   cau:[
     {s:'朋友邀请我参加他们的新年晚会，他住在离我家不远的一＿＿居民楼上。我＿＿地前去参加。晚会上惊喜＿＿不断，不但有好吃的、好喝的，朋友还为每位客人准备了一份礼物。我很想知道里边是＿＿东西，就＿＿地打开包装，原来是我最喜欢吃的巧克力，晚会结束后，大家都高高兴兴地拿着礼物回家了。',
      dap:['栋','兴致勃勃','接连','啥','迫不及待']}
   ]},
  {kieu:'kho', de:'选择合适的词语填空', vn:'Chọn từ thích hợp điền vào chỗ trống (đoạn ②)', tu:['依靠','动力','设置','持久','执行'],
   cau:[
     {s:'学习一门外语，光＿＿热情是远远不够的，那样的话，恐怕难以＿＿。我们还应该根据自身的情况＿＿短期和长期的学习目标，制定详细的学习计划，有了目标就有了学习的＿＿。短期目标帮助我们一步一步逐渐提高，同时又不觉得太过吃力；长期目标给我们指明了方向。最后，严格＿＿学习计划也是非常重要的。',
      dap:['依靠','持久','设置','动力','执行']}
   ]},
  {kieu:'mp', de:'阅读语段，模仿造句', vn:'Đọc đoạn văn, bắt chước đặt câu (phần gạch chân trong sách để trong 【】)',
   cau:[
     {mau:'她极力忍耐着，“是这样，我【必须】了解学员，【为】学员【着想】，【帮】他策划学习方案，【以】达成他的目标。”',
      khung:'球队教练说：“我必须＿＿，为＿＿着想，帮＿＿，以＿＿。”',
      dap:['了解每一个队员','队员','他们制订训练计划','提高全队的水平'],
      giai:'Bắt chước chuỗi 必须 + V，为 + N + 着想，帮 + người + V，以 + mục đích: việc phải làm → vì ai → giúp gì → để đạt gì. 以 (văn viết) = để. Câu mẫu: 球队教练说：“我必须了解每一个队员，为队员着想，帮他们制订训练计划，以提高全队的水平。”'},
     {mau:'我的学习方式【绝对】对学习效果有利，【当然】弊端【也】不少：【有利的方面】如上所说，弊端【在于】高兴了拼命学一阵子，不高兴了就搁在一边。',
      khung:'那个人绝对是个很好的人，当然＿＿也不少，好的方面是＿＿，缺点在于＿＿。',
      dap:['缺点','热情大方，总是为别人着想','脾气有点儿急，说话不太注意方式'],
      giai:'Khung đánh giá hai mặt: 绝对……，当然……也不少：好的方面是……，缺点在于…… — khẳng định mặt tốt trước, thừa nhận mặt hạn chế sau. Câu mẫu: 那个人绝对是个很好的人，当然缺点也不少，好的方面是热情大方，总是为别人着想，缺点在于脾气有点儿急，说话不太注意方式。'}
   ]},
  {kieu:'bc', de:'指出下列句子的错误，并提出修改建议', vn:'Chỉ ra lỗi sai của các câu sau và đề xuất cách sửa (病句类型：成分残缺 — thiếu thành phần câu)',
   cau:[
     {s:'为了写好汉字，他每天抄写一篇短文，养成了书写规范、端正、整洁。', sai:'养成了书写规范、端正、整洁', loai:'宾语残缺',
      dap:'为了写好汉字，他每天抄写一篇短文，养成了书写规范、端正、整洁的习惯。',
      giai:'Thiếu tân ngữ: 养成 phải có tân ngữ 习惯; 规范、端正、整洁 chỉ là định ngữ → thêm 的习惯.'},
     {s:'他边走边想，非常投入，突然路旁的河里有人喊“救命！”', sai:'突然路旁的河里有人喊', loai:'谓语残缺',
      dap:'他边走边想，非常投入，突然听到路旁的河里有人喊“救命！”',
      giai:'Thiếu vị ngữ: chủ ngữ 他 cần động từ 听到 trước phần "có người kêu cứu" → 突然听到…….'},
     {s:'他的习惯是一边吃早饭，一边看报纸，对身体不好。', sai:'对身体不好', loai:'关联词语残缺',
      dap:'他的习惯是一边吃早饭，一边看报纸，但是这样对身体不好。',
      giai:'Thiếu từ nối: vế cuối là nhận xét trái ý với thói quen → thêm 但是这样 (但是 nối, 这样 làm chủ ngữ).'},
     {s:'经过专家组分析论证，排除了人为破坏因素导致事故发生的可能性。', sai:'经过专家组分析论证，排除了', loai:'主语残缺',
      dap:'经过专家组分析论证，他们排除了人为破坏因素导致事故发生的可能性。',
      giai:'Thiếu chủ ngữ: 经过…… chỉ là trạng ngữ, 排除了 không có chủ thể → thêm 他们 (hoặc bỏ 经过: 专家组经过分析论证，排除了……).'},
     {s:'我觉得她好棒啊，居然把一件旧牛仔裤改造了一个洋气又实用的背包。', sai:'改造了', loai:'补语残缺',
      dap:'我觉得她好棒啊，居然把一件旧牛仔裤改造成了一个洋气又实用的背包。',
      giai:'Thiếu bổ ngữ: "biến A thành B" phải là 把 A 改造成 B → thêm bổ ngữ 成: 改造成了.'}
   ]}
];

