// ══════════════════════════════════════════
// DATA — HSK5 Bài 13: 锯掉生活的“筐底” (Cưa bỏ "đáy giỏ" của cuộc sống)
// Unit 5 放眼世界 · Nguồn: HSK标准教程5上 (tr. 118–125) + 练习册 bài 13
// ══════════════════════════════════════════

var vocabData = [
  {n:1,zh:'锯',py:'jù',pos:'Động từ / Danh từ',vn:'cưa; cái cưa (锯子)',hv:'cứ',em:'🪚',lesson:1,
   explain:['Động từ: dùng cưa cắt gỗ, kim loại… — 锯木头, 锯掉.','Danh từ: 锯子 = cái cưa, lượng từ 把: 一把锯子.'],
   usage:'Hay đi với bổ ngữ kết quả: 锯掉 / 锯断 / 锯开. Khi là danh từ thường nói 锯子.',
   collo:['锯掉','锯木头','一把锯子','锯断'],
   ex_zh:'一位球员连忙找来一把锯子把篮筐的底锯掉。',ex_py:'Yí wèi qiúyuán liánmáng zhǎolái yì bǎ jùzi bǎ lánkuāng de dǐ jùdiào.',ex_vn:'Một cầu thủ vội vàng tìm một cái cưa, cưa bỏ đáy giỏ.',
   exList:[
     {zh:'一位球员连忙找来一把锯子把篮筐的底锯掉。',py:'Yí wèi qiúyuán liánmáng zhǎolái yì bǎ jùzi bǎ lánkuāng de dǐ jùdiào.',vn:'Một cầu thủ vội vàng tìm một cái cưa, cưa bỏ đáy giỏ.'},
     {zh:'爷爷用锯子把这块木头锯成了两半。',py:'Yéye yòng jùzi bǎ zhè kuài mùtou jùchéngle liǎng bàn.',vn:'Ông dùng cưa cưa khúc gỗ này thành hai nửa.'},
     {zh:'我们需要一把锯子，来锯掉那些阻碍我们的“筐底”。',py:'Wǒmen xūyào yì bǎ jùzi, lái jùdiào nàxiē zǔ\'ài wǒmen de "kuāngdǐ".',vn:'Chúng ta cần một cái cưa để cưa bỏ những "đáy giỏ" đang cản trở mình.'}
   ],
   colloFull:[
     {zh:'锯掉',py:'jùdiào',vn:'cưa bỏ'},
     {zh:'锯木头',py:'jù mùtou',vn:'cưa gỗ'},
     {zh:'一把锯子',py:'yì bǎ jùzi',vn:'một cái cưa'},
     {zh:'锯断',py:'jùduàn',vn:'cưa đứt'},
     {zh:'锯开',py:'jùkāi',vn:'cưa ra'}
   ],
   patterns:[
     {s:'把 + N + 锯掉 / 锯断 / 锯成……',m:'Cưa bỏ / cưa đứt / cưa thành … (câu 把)'},
     {s:'一把 + 锯子',m:'Lượng từ của 锯子 là 把'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Anh ấy đã cưa bỏ cái cành cây khô đó rồi.',answer:'他把那根干树枝锯掉了。',answerPy:'Tā bǎ nà gēn gān shùzhī jùdiào le.',
      note:'锯掉 là động từ + bổ ngữ kết quả, rất hợp với câu 把: 把 + tân ngữ + 锯掉 + 了.',pair:'把'},
     {promptLang:'vi',prompt:'Chỉ cần có một cái cưa là có thể giải quyết vấn đề này.',answer:'只要有一把锯子，就能解决这个问题。',answerPy:'Zhǐyào yǒu yì bǎ jùzi, jiù néng jiějué zhège wèntí.',
      note:'Danh từ nói 锯子, lượng từ 把. 只要 ở vế trước, 就 đứng trước động từ vế sau.',pair:'只要……就……'}
   ]},

  {n:2,zh:'筐',py:'kuāng',pos:'Danh từ',vn:'giỏ, sọt',hv:'khuông',em:'🧺',lesson:1,
   explain:['Đồ đựng đan bằng tre, mây, nhựa…. 篮筐 là cái giỏ (rổ) trong môn bóng rổ.'],
   usage:'Làm danh từ: 一个筐; cũng làm lượng từ: 一筐桃子 (một sọt đào). Ghép: 篮筐, 筐底, 竹筐.',
   collo:['一筐桃子','篮筐','筐底','竹筐'],
   ex_zh:'由于栏杆上固定的是真正的筐，球投进去就出不来了。',ex_py:'Yóuyú lángān shang gùdìng de shì zhēnzhèng de kuāng, qiú tóu jìnqu jiù chū bu lái le.',ex_vn:'Vì thứ gắn trên lan can là một chiếc giỏ thật nên bóng ném vào là không ra được.',
   exList:[
     {zh:'由于栏杆上固定的是真正的筐，球投进去就出不来了。',py:'Yóuyú lángān shang gùdìng de shì zhēnzhèng de kuāng, qiú tóu jìnqu jiù chū bu lái le.',vn:'Vì thứ gắn trên lan can là một chiếc giỏ thật nên bóng ném vào là không ra được.'},
     {zh:'当地人喜欢玩把球扔进桃子筐的游戏。',py:'Dāngdì rén xǐhuan wán bǎ qiú rēngjìn táozi kuāng de yóuxì.',vn:'Người dân địa phương thích chơi trò ném bóng vào giỏ đào.'},
     {zh:'妈妈从市场买回来一筐苹果。',py:'Māma cóng shìchǎng mǎi huílai yì kuāng píngguǒ.',vn:'Mẹ mua ở chợ về một giỏ táo.'}
   ],
   colloFull:[
     {zh:'一筐桃子',py:'yì kuāng táozi',vn:'một sọt đào'},
     {zh:'篮筐',py:'lánkuāng',vn:'giỏ (rổ) bóng rổ'},
     {zh:'筐底',py:'kuāngdǐ',vn:'đáy giỏ'},
     {zh:'竹筐',py:'zhúkuāng',vn:'giỏ tre'},
     {zh:'装满一筐',py:'zhuāngmǎn yì kuāng',vn:'đựng đầy một giỏ'}
   ],
   patterns:[
     {s:'一 + 筐 + N',m:'筐 làm lượng từ: một giỏ / một sọt …'},
     {s:'把 + N + 扔进 / 放进 + 筐里',m:'Ném / bỏ … vào giỏ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cậu bé ném quả bóng vào giỏ đào.',answer:'小男孩把球扔进了桃子筐。',answerPy:'Xiǎo nánhái bǎ qiú rēngjìnle táozi kuāng.',
      note:'把 + 球 + 扔进 + nơi chốn: kết quả là bóng nằm trong giỏ.',pair:'把'},
     {promptLang:'vi',prompt:'Bà cứ đi chợ là mua về một giỏ rau.',answer:'奶奶一去市场就买回来一筐菜。',answerPy:'Nǎinai yí qù shìchǎng jiù mǎi huílai yì kuāng cài.',
      note:'筐 làm lượng từ: 一筐菜. 一 + V + 就: hễ … là ….',pair:'一……就……'}
   ]},

  {n:3,zh:'训练',py:'xùnliàn',pos:'Động từ',vn:'huấn luyện, tập luyện',hv:'huấn luyện',em:'🏋️',lesson:1,
   explain:['Luyện tập có kế hoạch để có một kỹ năng — dùng cho vận động viên, bộ đội…','Cũng làm danh từ: 参加训练, 接受训练.'],
   usage:'Bảng 词语搭配 của sách: 认真地 / 紧张地 / 艰苦地 / 严格地 + 训练. Làm định ngữ: 训练学校.',
   collo:['认真地训练','艰苦地训练','严格地训练','训练学校'],
   ex_zh:'奈史密斯所在的训练学校缺乏在室内进行的球类比赛项目。',ex_py:'Nàishǐmìsī suǒ zài de xùnliàn xuéxiào quēfá zài shìnèi jìnxíng de qiúlèi bǐsài xiàngmù.',ex_vn:'Trường huấn luyện nơi Naismith làm việc thiếu các môn thi đấu bóng chơi trong nhà.',
   exList:[
     {zh:'奈史密斯所在的训练学校缺乏在室内进行的球类比赛项目。',py:'Nàishǐmìsī suǒ zài de xùnliàn xuéxiào quēfá zài shìnèi jìnxíng de qiúlèi bǐsài xiàngmù.',vn:'Trường huấn luyện nơi Naismith làm việc thiếu các môn thi đấu bóng chơi trong nhà.'},
     {zh:'运动员们每天都在认真地训练。',py:'Yùndòngyuánmen měi tiān dōu zài rènzhēn de xùnliàn.',vn:'Các vận động viên ngày nào cũng tập luyện nghiêm túc.'},
     {zh:'比赛前缺乏训练，所以我们队输了。',py:'Bǐsài qián quēfá xùnliàn, suǒyǐ wǒmen duì shū le.',vn:'Trước trận đấu thiếu tập luyện nên đội chúng tôi thua.'}
   ],
   colloFull:[
     {zh:'认真地训练',py:'rènzhēn de xùnliàn',vn:'tập luyện nghiêm túc'},
     {zh:'艰苦地训练',py:'jiānkǔ de xùnliàn',vn:'tập luyện gian khổ'},
     {zh:'严格地训练',py:'yángé de xùnliàn',vn:'tập luyện nghiêm ngặt'},
     {zh:'训练学校',py:'xùnliàn xuéxiào',vn:'trường huấn luyện'},
     {zh:'接受训练',py:'jiēshòu xùnliàn',vn:'được huấn luyện'}
   ],
   patterns:[
     {s:'认真地 / 紧张地 / 艰苦地 / 严格地 + 训练',m:'Tập luyện nghiêm túc / khẩn trương / gian khổ / nghiêm ngặt'},
     {s:'参加 / 接受 + 训练',m:'训练 làm danh từ: tham gia / được huấn luyện'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vận động viên này tập luyện càng ngày càng chăm chỉ.',answer:'这个运动员训练得越来越努力了。',answerPy:'Zhège yùndòngyuán xùnliàn de yuè lái yuè nǔlì le.',
      note:'Động từ + 得 + 越来越 + tính từ: mức độ tăng dần theo thời gian.',pair:'越来越……'},
     {promptLang:'vi',prompt:'Tuy tập luyện rất vất vả nhưng anh ấy chưa bao giờ than phiền.',answer:'虽然训练很辛苦，但是他从来不抱怨。',answerPy:'Suīrán xùnliàn hěn xīnkǔ, dànshì tā cónglái bú bàoyuàn.',
      note:'训练 làm chủ ngữ (danh từ hoá). Ôn 抱怨 của bài 1.',pair:'虽然……但是……'}
   ]},

  {n:4,zh:'缺乏',py:'quēfá',pos:'Động từ',vn:'thiếu, không đủ',hv:'khuyết phạp',em:'🪫',lesson:1,
   explain:['Không có hoặc không đủ thứ cần thiết. Tân ngữ thường TRỪU TƯỢNG hoặc mang tính khái quát: 人才, 知识, 勇气, 信心.'],
   usage:'Trang trọng hơn 缺少. Bảng 词语搭配: 缺乏 + 人才/教师/材料/知识/工具/勇气/信心. Vật cụ thể có số lượng thì không dùng 缺乏: ✗ 缺乏一本书.',
   collo:['缺乏人才','缺乏知识','缺乏勇气','缺乏信心'],
   ex_zh:'主要是队员们参赛前缺乏训练。',ex_py:'Zhǔyào shì duìyuánmen cānsài qián quēfá xùnliàn.',ex_vn:'Chủ yếu là các đội viên thiếu tập luyện trước khi thi đấu.',
   exList:[
     {zh:'主要是队员们参赛前缺乏训练。',py:'Zhǔyào shì duìyuánmen cānsài qián quēfá xùnliàn.',vn:'Chủ yếu là các đội viên thiếu tập luyện trước khi thi đấu.'},
     {zh:'在食物缺乏的季节，动物为了活下去就只能多睡觉。',py:'Zài shíwù quēfá de jìjié, dòngwù wèile huó xiàqu jiù zhǐ néng duō shuìjiào.',vn:'Vào mùa thiếu thức ăn, động vật chỉ có thể ngủ nhiều để sống sót.'},
     {zh:'我们的训练学校缺乏在室内进行的运动项目。',py:'Wǒmen de xùnliàn xuéxiào quēfá zài shìnèi jìnxíng de yùndòng xiàngmù.',vn:'Trường huấn luyện của chúng tôi thiếu các môn thể thao chơi trong nhà.'}
   ],
   colloFull:[
     {zh:'缺乏人才',py:'quēfá réncái',vn:'thiếu nhân tài'},
     {zh:'缺乏知识',py:'quēfá zhīshi',vn:'thiếu kiến thức'},
     {zh:'缺乏勇气',py:'quēfá yǒngqì',vn:'thiếu dũng khí'},
     {zh:'缺乏信心',py:'quēfá xìnxīn',vn:'thiếu tự tin'},
     {zh:'缺乏工具',py:'quēfá gōngjù',vn:'thiếu công cụ'}
   ],
   patterns:[
     {s:'缺乏 + N trừu tượng (人才 / 知识 / 勇气 / 信心)',m:'Thiếu …'},
     {s:'✗ 缺乏一本书 → ✓ 少一本书 / 缺少一本书',m:'Vật cụ thể có số lượng không dùng 缺乏'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần không thiếu tự tin thì em nhất định làm được.',answer:'只要不缺乏信心，你就一定能做到。',answerPy:'Zhǐyào bù quēfá xìnxīn, nǐ jiù yídìng néng zuòdào.',
      note:'缺乏信心 là cụm cố định trong bảng 词语搭配.',pair:'只要……就……'},
     {promptLang:'vi',prompt:'Nơi này ngay cả những công cụ cơ bản nhất cũng thiếu.',answer:'这个地方连最基本的工具都缺乏。',answerPy:'Zhège dìfang lián zuì jīběn de gōngjù dōu quēfá.',
      note:'Tân ngữ 工具 được đưa lên trước bằng 连……都 để nhấn mạnh.',pair:'连……都……'}
   ]},

  {n:5,zh:'项目',py:'xiàngmù',pos:'Danh từ',vn:'hạng mục; môn (thi đấu); dự án',hv:'hạng mục',em:'📋',lesson:1,
   explain:['Từng mục, từng loại trong một việc lớn: môn thi đấu (比赛项目), dự án (工程项目).'],
   usage:'体育项目 / 比赛项目 / 运动项目. Lượng từ 个 / 项. Động từ đi kèm: 参加 / 负责 / 完成 + 项目.',
   collo:['比赛项目','体育项目','负责项目','完成项目'],
   ex_zh:'网球是欧美最受欢迎的体育项目之一。',ex_py:'Wǎngqiú shì Ōu-Měi zuì shòu huānyíng de tǐyù xiàngmù zhī yī.',ex_vn:'Quần vợt là một trong những môn thể thao được yêu thích nhất ở Âu – Mỹ.',
   exList:[
     {zh:'网球是欧美最受欢迎的体育项目之一。',py:'Wǎngqiú shì Ōu-Měi zuì shòu huānyíng de tǐyù xiàngmù zhī yī.',vn:'Quần vợt là một trong những môn thể thao được yêu thích nhất ở Âu – Mỹ.'},
     {zh:'太极拳是中国传统的体育项目。',py:'Tàijíquán shì Zhōngguó chuántǒng de tǐyù xiàngmù.',vn:'Thái cực quyền là môn thể thao truyền thống của Trung Quốc.'},
     {zh:'这个项目由我负责，下个月必须完成。',py:'Zhège xiàngmù yóu wǒ fùzé, xià ge yuè bìxū wánchéng.',vn:'Dự án này do tôi phụ trách, tháng sau phải hoàn thành.'}
   ],
   colloFull:[
     {zh:'比赛项目',py:'bǐsài xiàngmù',vn:'môn thi đấu'},
     {zh:'体育项目',py:'tǐyù xiàngmù',vn:'môn thể thao'},
     {zh:'负责项目',py:'fùzé xiàngmù',vn:'phụ trách dự án'},
     {zh:'完成项目',py:'wánchéng xiàngmù',vn:'hoàn thành dự án'},
     {zh:'运动项目',py:'yùndòng xiàngmù',vn:'môn vận động'}
   ],
   patterns:[
     {s:'体育 / 比赛 / 运动 + 项目',m:'Môn thể thao / môn thi đấu'},
     {s:'负责 / 完成 / 参加 + 项目',m:'Phụ trách / hoàn thành / tham gia dự án'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Môn thể thao này tôi chưa từng tham gia.',answer:'这个运动项目我从来没参加过。',answerPy:'Zhège yùndòng xiàngmù wǒ cónglái méi cānjiāguo.',
      note:'Tân ngữ 运动项目 đưa lên đầu câu làm chủ đề.',pair:'从来没……过'},
     {promptLang:'vi',prompt:'Dự án này là do anh ấy phụ trách.',answer:'这个项目是由他负责的。',answerPy:'Zhège xiàngmù shì yóu tā fùzé de.',
      note:'由 + người + V: do ai làm; 是……的 nhấn mạnh người làm.',pair:'是……的'}
   ]},

  {n:6,zh:'桃',py:'táo',pos:'Danh từ',vn:'(quả) đào',hv:'đào',em:'🍑',lesson:1,
   explain:['Cây đào, quả đào. Khi nói quả thường dùng 桃子; 桃 hay đứng trong từ ghép: 桃树, 桃花.'],
   usage:'桃子 (quả đào), 桃树 (cây đào), 桃花 (hoa đào). Lượng từ: 一个桃子, 一筐桃子.',
   collo:['桃子','桃树','桃花','一筐桃子'],
   ex_zh:'当地产桃子，各家各户都备有装桃子的专用篮筐。',ex_py:'Dāngdì chǎn táozi, gè jiā gè hù dōu bèi yǒu zhuāng táozi de zhuānyòng lánkuāng.',ex_vn:'Vùng này trồng đào, nhà nào cũng có sẵn giỏ chuyên để đựng đào.',
   exList:[
     {zh:'当地产桃子，各家各户都备有装桃子的专用篮筐。',py:'Dāngdì chǎn táozi, gè jiā gè hù dōu bèi yǒu zhuāng táozi de zhuānyòng lánkuāng.',vn:'Vùng này trồng đào, nhà nào cũng có sẵn giỏ chuyên để đựng đào.'},
     {zh:'春天到了，公园里的桃花都开了。',py:'Chūntiān dào le, gōngyuán li de táohuā dōu kāi le.',vn:'Mùa xuân đến rồi, hoa đào trong công viên đều nở cả.'},
     {zh:'越南人过春节喜欢在家里放一枝桃花。',py:'Yuènán rén guò Chūnjié xǐhuan zài jiāli fàng yì zhī táohuā.',vn:'Người Việt đón Tết thích cắm một cành hoa đào trong nhà.'}
   ],
   colloFull:[
     {zh:'桃子',py:'táozi',vn:'quả đào'},
     {zh:'桃树',py:'táoshù',vn:'cây đào'},
     {zh:'桃花',py:'táohuā',vn:'hoa đào'},
     {zh:'一筐桃子',py:'yì kuāng táozi',vn:'một giỏ đào'},
     {zh:'摘桃子',py:'zhāi táozi',vn:'hái đào'}
   ],
   patterns:[
     {s:'桃 + 子 / 树 / 花',m:'Quả đào / cây đào / hoa đào'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Hoa đào ở miền Bắc Việt Nam cứ đến Tết là nở.',answer:'越南北方的桃花一到春节就开了。',answerPy:'Yuènán běifāng de táohuā yí dào Chūnjié jiù kāi le.',
      note:'一到 + thời điểm + 就: hễ đến … là ….',pair:'一……就……'},
     {promptLang:'vi',prompt:'Những quả đào này là ông tôi tự trồng.',answer:'这些桃子是我爷爷自己种的。',answerPy:'Zhèxiē táozi shì wǒ yéye zìjǐ zhòng de.',
      note:'Khi nói quả dùng 桃子. 是……的 nhấn mạnh người làm.',pair:'是……的'}
   ]},

  {n:7,zh:'装',py:'zhuāng',pos:'Động từ',vn:'đựng, chứa; cho vào',hv:'trang',em:'📦',lesson:1,
   explain:['Bỏ đồ vào trong một vật chứa: 装桃子, 装进箱子.','Ngoài ra còn nghĩa "lắp" (装空调) và "giả vờ" (装睡).'],
   usage:'Hay đi với bổ ngữ: 装进 / 装满 / 装得下 / 装不下. Câu 把: 把书装进书包里.',
   collo:['装桃子','装满','装不下','装进箱子'],
   ex_zh:'要整理的东西太多了，你看，这个箱子根本装不下。',ex_py:'Yào zhěnglǐ de dōngxi tài duō le, nǐ kàn, zhège xiāngzi gēnběn zhuāng bu xià.',ex_vn:'Đồ cần dọn nhiều quá, bạn xem, cái thùng này hoàn toàn không đựng hết.',
   exList:[
     {zh:'要整理的东西太多了，你看，这个箱子根本装不下。',py:'Yào zhěnglǐ de dōngxi tài duō le, nǐ kàn, zhège xiāngzi gēnběn zhuāng bu xià.',vn:'Đồ cần dọn nhiều quá, bạn xem, cái thùng này hoàn toàn không đựng hết.'},
     {zh:'各家各户都备有装桃子的专用篮筐。',py:'Gè jiā gè hù dōu bèi yǒu zhuāng táozi de zhuānyòng lánkuāng.',vn:'Nhà nào cũng có sẵn giỏ chuyên để đựng đào.'},
     {zh:'她把书和本子都装进了书包。',py:'Tā bǎ shū hé běnzi dōu zhuāngjìnle shūbāo.',vn:'Cô ấy cho hết sách vở vào cặp.'}
   ],
   colloFull:[
     {zh:'装桃子',py:'zhuāng táozi',vn:'đựng đào'},
     {zh:'装满',py:'zhuāngmǎn',vn:'đựng đầy'},
     {zh:'装不下',py:'zhuāng bu xià',vn:'không đựng hết'},
     {zh:'装进箱子',py:'zhuāngjìn xiāngzi',vn:'cho vào thùng'},
     {zh:'装水',py:'zhuāng shuǐ',vn:'đựng nước'}
   ],
   patterns:[
     {s:'把 + N + 装进 + vật chứa',m:'Cho … vào …'},
     {s:'装得下 / 装不下',m:'Đựng vừa / không đựng hết (bổ ngữ khả năng)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bạn giúp tôi cho quần áo vào vali nhé.',answer:'你帮我把衣服装进箱子里吧。',answerPy:'Nǐ bāng wǒ bǎ yīfu zhuāngjìn xiāngzi li ba.',
      note:'把 + 衣服 + 装进 + 箱子里: đồ được cho vào trong vật chứa.',pair:'把'},
     {promptLang:'vi',prompt:'Cái túi này nhỏ quá, ngay cả một quyển sách cũng không đựng vừa.',answer:'这个包太小了，连一本书都装不下。',answerPy:'Zhège bāo tài xiǎo le, lián yì běn shū dōu zhuāng bu xià.',
      note:'装不下 là bổ ngữ khả năng dạng phủ định.',pair:'连……都……'}
   ]},

  {n:8,zh:'启发',py:'qǐfā',pos:'Động từ / Danh từ',vn:'gợi ý, gợi mở, khơi gợi',hv:'khải phát',em:'💡',lesson:1,
   explain:['Dùng một việc cụ thể hoặc lời nói để giúp người khác tự nghĩ ra, hiểu ra.','Làm danh từ: 得到启发, 受……的启发.'],
   usage:'从……中得到启发 / 受到……的启发 / 给……很大的启发 / 启发 + người + V.',
   collo:['得到启发','受到启发','很大的启发','启发学生'],
   ex_zh:'他从当地人把球扔进桃子筐的游戏中得到了启发。',ex_py:'Tā cóng dāngdì rén bǎ qiú rēngjìn táozi kuāng de yóuxì zhōng dédàole qǐfā.',ex_vn:'Ông được gợi ý từ trò chơi ném bóng vào giỏ đào của người dân địa phương.',
   exList:[
     {zh:'他从当地人把球扔进桃子筐的游戏中得到了启发。',py:'Tā cóng dāngdì rén bǎ qiú rēngjìn táozi kuāng de yóuxì zhōng dédàole qǐfā.',vn:'Ông được gợi ý từ trò chơi ném bóng vào giỏ đào của người dân địa phương.'},
     {zh:'这次的宣传推广活动是受他们公司的启发。',py:'Zhè cì de xuānchuán tuīguǎng huódòng shì shòu tāmen gōngsī de qǐfā.',vn:'Hoạt động quảng bá lần này là lấy ý tưởng từ công ty họ.'},
     {zh:'老师没有直接告诉我们答案，而是启发我们自己思考。',py:'Lǎoshī méiyǒu zhíjiē gàosu wǒmen dá\'àn, ér shì qǐfā wǒmen zìjǐ sīkǎo.',vn:'Thầy không nói thẳng đáp án mà gợi mở để chúng tôi tự suy nghĩ.'}
   ],
   colloFull:[
     {zh:'得到启发',py:'dédào qǐfā',vn:'được gợi mở'},
     {zh:'受到启发',py:'shòudào qǐfā',vn:'được gợi ý'},
     {zh:'很大的启发',py:'hěn dà de qǐfā',vn:'sự gợi mở lớn'},
     {zh:'启发学生',py:'qǐfā xuésheng',vn:'gợi mở cho học sinh'},
     {zh:'从……中得到启发',py:'cóng…… zhōng dédào qǐfā',vn:'rút ra gợi ý từ …'}
   ],
   patterns:[
     {s:'从 + ……中 + 得到启发',m:'Rút được gợi ý từ …'},
     {s:'…… + 给了 + người + 很大的启发',m:'… gợi mở cho ai rất nhiều'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Câu chuyện này không chỉ thú vị mà còn gợi mở cho tôi rất nhiều.',answer:'这个故事不仅很有意思，也给了我很大的启发。',answerPy:'Zhège gùshi bùjǐn hěn yǒu yìsi, yě gěile wǒ hěn dà de qǐfā.',
      note:'启发 làm danh từ: 给 + người + 很大的启发.',pair:'不仅……也……'},
     {promptLang:'vi',prompt:'Tôi được gợi ý sau khi xem một bộ phim.',answer:'我是看了一部电影以后受到启发的。',answerPy:'Wǒ shì kànle yí bù diànyǐng yǐhòu shòudào qǐfā de.',
      note:'是……的 nhấn mạnh thời điểm / cách thức của việc đã xảy ra.',pair:'是……的'}
   ]},

  {n:9,zh:'安装',py:'ānzhuāng',pos:'Động từ',vn:'lắp đặt, gắn',hv:'an trang',em:'🔧',lesson:1,
   explain:['Lắp máy móc, thiết bị, phần mềm vào đúng chỗ để dùng được.'],
   usage:'Tân ngữ: 空调, 软件, 机器, 篮筐. 把 + N + 安装在 + nơi chốn. Khác 装 (đựng vật vào trong vật chứa).',
   collo:['安装空调','安装软件','安装在……上','安装好'],
   ex_zh:'他将两只篮筐分别安装在体育馆两边看台的栏杆上。',ex_py:'Tā jiāng liǎng zhī lánkuāng fēnbié ānzhuāng zài tǐyùguǎn liǎng biān kàntái de lángān shang.',ex_vn:'Ông gắn hai chiếc giỏ lần lượt lên lan can khán đài hai bên nhà thi đấu.',
   exList:[
     {zh:'他将两只篮筐分别安装在体育馆两边看台的栏杆上。',py:'Tā jiāng liǎng zhī lánkuāng fēnbié ānzhuāng zài tǐyùguǎn liǎng biān kàntái de lángān shang.',vn:'Ông gắn hai chiếc giỏ lần lượt lên lan can khán đài hai bên nhà thi đấu.'},
     {zh:'天气太热了，我们教室下个星期要安装空调。',py:'Tiānqì tài rè le, wǒmen jiàoshì xià ge xīngqī yào ānzhuāng kōngtiáo.',vn:'Trời nóng quá, tuần sau lớp chúng tôi sẽ lắp điều hoà.'},
     {zh:'你帮我在电脑上安装一个学中文的软件吧。',py:'Nǐ bāng wǒ zài diànnǎo shang ānzhuāng yí ge xué Zhōngwén de ruǎnjiàn ba.',vn:'Bạn cài giúp tôi một phần mềm học tiếng Trung vào máy tính nhé.'}
   ],
   colloFull:[
     {zh:'安装空调',py:'ānzhuāng kōngtiáo',vn:'lắp điều hoà'},
     {zh:'安装软件',py:'ānzhuāng ruǎnjiàn',vn:'cài phần mềm'},
     {zh:'安装在……上',py:'ānzhuāng zài…… shang',vn:'lắp lên …'},
     {zh:'安装好',py:'ānzhuāng hǎo',vn:'lắp xong'},
     {zh:'安装机器',py:'ānzhuāng jīqì',vn:'lắp máy'}
   ],
   patterns:[
     {s:'把 / 将 + N + 安装在 + nơi chốn + 上',m:'Lắp … lên … (将 là dạng văn viết của 把)'},
     {s:'安装 + 空调 / 软件 / 机器',m:'Lắp thiết bị, cài phần mềm'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bố đã lắp chiếc điều hoà mới lên tường rồi.',answer:'爸爸把新空调安装在墙上了。',answerPy:'Bàba bǎ xīn kōngtiáo ānzhuāng zài qiáng shang le.',
      note:'把 + N + 安装在 + nơi chốn + 上: vị trí đặt sau động từ.',pair:'把'},
     {promptLang:'vi',prompt:'Phần mềm này vừa cài xong là máy tính chạy chậm hẳn.',answer:'这个软件一安装好，电脑就变慢了。',answerPy:'Zhège ruǎnjiàn yì ānzhuāng hǎo, diànnǎo jiù biàn màn le.',
      note:'Phần mềm dùng 安装, không dùng 装 trong văn viết trang trọng.',pair:'一……就……'}
   ]},

  {n:10,zh:'栏杆',py:'lángān',pos:'Danh từ',vn:'lan can',hv:'lan can',em:'🚧',lesson:1,
   explain:['Hàng rào thấp ở cầu, ban công, khán đài… để che chắn hoặc tựa vào.'],
   usage:'Hay đi với 上: 栏杆上. Động từ: 扶着栏杆, 靠着栏杆 (ôn 靠 của bài 1).',
   collo:['看台的栏杆','扶着栏杆','靠着栏杆','栏杆上'],
   ex_zh:'由于栏杆上固定的是真正的筐，每当球投进时，就得有一个人踩着梯子上去把球取出来。',ex_py:'Yóuyú lángān shang gùdìng de shì zhēnzhèng de kuāng, měi dāng qiú tóujìn shí, jiù děi yǒu yí ge rén cǎizhe tīzi shàngqu bǎ qiú qǔ chūlai.',ex_vn:'Vì thứ gắn cố định trên lan can là chiếc giỏ thật, mỗi khi bóng vào, phải có một người trèo thang lên lấy bóng ra.',
   exList:[
     {zh:'由于栏杆上固定的是真正的筐，每当球投进时，就得有一个人踩着梯子上去把球取出来。',py:'Yóuyú lángān shang gùdìng de shì zhēnzhèng de kuāng, měi dāng qiú tóujìn shí, jiù děi yǒu yí ge rén cǎizhe tīzi shàngqu bǎ qiú qǔ chūlai.',vn:'Vì thứ gắn cố định trên lan can là chiếc giỏ thật, mỗi khi bóng vào, phải có một người trèo thang lên lấy bóng ra.'},
     {zh:'下楼梯的时候请扶着栏杆。',py:'Xià lóutī de shíhou qǐng fúzhe lángān.',vn:'Khi xuống cầu thang xin hãy vịn lan can.'},
     {zh:'他靠着桥上的栏杆看远处的风景。',py:'Tā kàozhe qiáo shang de lángān kàn yuǎnchù de fēngjǐng.',vn:'Anh ấy tựa lan can trên cầu ngắm cảnh xa xa.'}
   ],
   colloFull:[
     {zh:'看台的栏杆',py:'kàntái de lángān',vn:'lan can khán đài'},
     {zh:'扶着栏杆',py:'fúzhe lángān',vn:'vịn lan can'},
     {zh:'靠着栏杆',py:'kàozhe lángān',vn:'tựa lan can'},
     {zh:'栏杆上',py:'lángān shang',vn:'trên lan can'},
     {zh:'阳台的栏杆',py:'yángtái de lángān',vn:'lan can ban công'}
   ],
   patterns:[
     {s:'扶着 / 靠着 + 栏杆',m:'Vịn / tựa lan can'},
     {s:'N + 安装在 + 栏杆上',m:'Gắn … lên lan can'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cái lan can này bị gió to thổi hỏng rồi.',answer:'这个栏杆被大风吹坏了。',answerPy:'Zhège lángān bèi dàfēng chuīhuài le.',
      note:'Câu 被: chủ ngữ chịu tác động + 被 + tác nhân + V + bổ ngữ.',pair:'被'},
     {promptLang:'vi',prompt:'Ông vừa ra ban công là tựa vào lan can ngắm người qua lại trên phố.',answer:'爷爷一到阳台就靠着栏杆看街上的人。',answerPy:'Yéye yí dào yángtái jiù kàozhe lángān kàn jiē shang de rén.',
      note:'靠着栏杆 (ôn 靠 bài 1): V + 着 chỉ tư thế khi làm việc khác.',pair:'一……就……'}
   ]},

  {n:11,zh:'甲',py:'jiǎ',pos:'Danh từ',vn:'Giáp — người / đội thứ nhất',hv:'giáp',em:'🅰️',lesson:1,
   explain:['Chữ đầu tiên của Thiên can (甲乙丙丁…), dùng để đánh thứ tự: 甲 = thứ nhất, giống "A".'],
   usage:'Hay đi đôi với 乙: 甲乙两队, 甲方 / 乙方 (bên A / bên B trong hợp đồng), 甲级 (hạng A).',
   collo:['甲乙两队','甲队','甲方','甲级'],
   ex_zh:'学生分为甲乙两队，以足球为比赛工具向篮内投。',ex_py:'Xuésheng fēnwéi jiǎ yǐ liǎng duì, yǐ zúqiú wéi bǐsài gōngjù xiàng lán nèi tóu.',ex_vn:'Học sinh chia làm hai đội Giáp và Ất, lấy quả bóng đá làm dụng cụ thi đấu, ném vào trong giỏ.',
   exList:[
     {zh:'学生分为甲乙两队，以足球为比赛工具向篮内投。',py:'Xuésheng fēnwéi jiǎ yǐ liǎng duì, yǐ zúqiú wéi bǐsài gōngjù xiàng lán nèi tóu.',vn:'Học sinh chia làm hai đội Giáp và Ất, lấy quả bóng đá làm dụng cụ thi đấu, ném vào trong giỏ.'},
     {zh:'这场比赛甲队以二比一赢了乙队。',py:'Zhè chǎng bǐsài jiǎ duì yǐ èr bǐ yī yíngle yǐ duì.',vn:'Trận này đội A thắng đội B với tỉ số 2–1.'},
     {zh:'合同上写着：甲方要按时付款。',py:'Hétong shang xiězhe: jiǎfāng yào ànshí fùkuǎn.',vn:'Hợp đồng ghi: bên A phải thanh toán đúng hạn.'}
   ],
   colloFull:[
     {zh:'甲乙两队',py:'jiǎ yǐ liǎng duì',vn:'hai đội Giáp, Ất'},
     {zh:'甲队',py:'jiǎ duì',vn:'đội A'},
     {zh:'甲方',py:'jiǎfāng',vn:'bên A'},
     {zh:'甲级',py:'jiǎjí',vn:'hạng A'},
     {zh:'甲等',py:'jiǎděng',vn:'hạng nhất'}
   ],
   patterns:[
     {s:'甲 → 乙 → 丙 → 丁',m:'Thứ tự 1 – 2 – 3 – 4, như A – B – C – D'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đội A bị đội B đánh bại rồi.',answer:'甲队被乙队打败了。',answerPy:'Jiǎ duì bèi yǐ duì dǎbài le.',
      note:'打败 = đánh bại; câu 被 nêu bên chịu thua làm chủ ngữ.',pair:'被'},
     {promptLang:'vi',prompt:'Trận này là đội A thắng.',answer:'这场比赛是甲队赢的。',answerPy:'Zhè chǎng bǐsài shì jiǎ duì yíng de.',
      note:'是……的 nhấn mạnh ai là người thắng.',pair:'是……的'}
   ]},

  {n:12,zh:'乙',py:'yǐ',pos:'Danh từ',vn:'Ất — người / đội thứ hai',hv:'ất',em:'🅱️',lesson:1,
   explain:['Chữ thứ hai của Thiên can, dùng đánh thứ tự: 乙 = thứ hai, giống "B".'],
   usage:'乙队 / 乙方 / 乙级; đi đôi với 甲: 甲乙两方.',
   collo:['乙队','乙方','甲乙两方','乙级'],
   ex_zh:'乙队虽然输了，但是打得很精彩。',ex_py:'Yǐ duì suīrán shū le, dànshì dǎ de hěn jīngcǎi.',ex_vn:'Đội B tuy thua nhưng chơi rất hay.',
   exList:[
     {zh:'乙队虽然输了，但是打得很精彩。',py:'Yǐ duì suīrán shū le, dànshì dǎ de hěn jīngcǎi.',vn:'Đội B tuy thua nhưng chơi rất hay.'},
     {zh:'甲乙两方都同意了这个办法。',py:'Jiǎ yǐ liǎng fāng dōu tóngyìle zhège bànfǎ.',vn:'Cả hai bên A và B đều đồng ý cách này.'},
     {zh:'这次足球比赛，乙队连一个球都没进。',py:'Zhè cì zúqiú bǐsài, yǐ duì lián yí ge qiú dōu méi jìn.',vn:'Trận bóng lần này, đội B ngay cả một bàn cũng không ghi được.'}
   ],
   colloFull:[
     {zh:'乙队',py:'yǐ duì',vn:'đội B'},
     {zh:'乙方',py:'yǐfāng',vn:'bên B'},
     {zh:'甲乙两方',py:'jiǎ yǐ liǎng fāng',vn:'hai bên A, B'},
     {zh:'乙级',py:'yǐjí',vn:'hạng B'},
     {zh:'乙等',py:'yǐděng',vn:'hạng hai'}
   ],
   patterns:[
     {s:'甲队 + 比 + 乙队 + Adj',m:'Đội A … hơn đội B (ôn câu 比)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đội B ngay cả một quả bóng cũng không ném vào được.',answer:'乙队连一个球都没投进。',answerPy:'Yǐ duì lián yí ge qiú dōu méi tóujìn.',
      note:'连 + 一 + lượng từ + N + 都 + 没: nhấn mạnh "không một chút nào".',pair:'连……都……'},
     {promptLang:'vi',prompt:'Tuy đội B thua nhưng các cổ động viên vẫn rất hài lòng.',answer:'虽然乙队输了，但是球迷们还是很满意。',answerPy:'Suīrán yǐ duì shū le, dànshì qiúmímen háishi hěn mǎnyì.',
      note:'球迷 cũng là từ mới của bài.',pair:'虽然……但是……'}
   ]},

  {n:13,zh:'工具',py:'gōngjù',pos:'Danh từ',vn:'công cụ, dụng cụ',hv:'công cụ',em:'🧰',lesson:1,
   explain:['Đồ dùng để làm việc (búa, cưa…); nghĩa rộng: phương tiện để đạt mục đích (交通工具, 学习工具).'],
   usage:'交通工具 / 学习工具 / 比赛工具; 以……为工具 (lấy … làm công cụ — văn viết). Lượng từ: 件, 种.',
   collo:['交通工具','比赛工具','学习工具','缺乏工具'],
   ex_zh:'学生们以足球为比赛工具向篮内投。',ex_py:'Xuéshengmen yǐ zúqiú wéi bǐsài gōngjù xiàng lán nèi tóu.',ex_vn:'Học sinh lấy quả bóng đá làm dụng cụ thi đấu, ném vào trong giỏ.',
   exList:[
     {zh:'学生们以足球为比赛工具向篮内投。',py:'Xuéshengmen yǐ zúqiú wéi bǐsài gōngjù xiàng lán nèi tóu.',vn:'Học sinh lấy quả bóng đá làm dụng cụ thi đấu, ném vào trong giỏ.'},
     {zh:'自行车是很多越南学生上学的交通工具。',py:'Zìxíngchē shì hěn duō Yuènán xuésheng shàngxué de jiāotōng gōngjù.',vn:'Xe đạp là phương tiện đi học của nhiều học sinh Việt Nam.'},
     {zh:'手机不仅是聊天的工具，也是学习的工具。',py:'Shǒujī bùjǐn shì liáotiān de gōngjù, yě shì xuéxí de gōngjù.',vn:'Điện thoại không chỉ là công cụ trò chuyện mà cũng là công cụ học tập.'}
   ],
   colloFull:[
     {zh:'交通工具',py:'jiāotōng gōngjù',vn:'phương tiện giao thông'},
     {zh:'比赛工具',py:'bǐsài gōngjù',vn:'dụng cụ thi đấu'},
     {zh:'学习工具',py:'xuéxí gōngjù',vn:'công cụ học tập'},
     {zh:'缺乏工具',py:'quēfá gōngjù',vn:'thiếu công cụ'},
     {zh:'以……为工具',py:'yǐ…… wéi gōngjù',vn:'lấy … làm công cụ'}
   ],
   patterns:[
     {s:'以 + N + 为 + 工具',m:'Lấy … làm công cụ (văn viết)'},
     {s:'交通 / 学习 / 比赛 + 工具',m:'Phương tiện giao thông / công cụ học tập / dụng cụ thi đấu'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần có công cụ tốt thì việc này làm được rất nhanh.',answer:'只要有好的工具，这件事就能做得很快。',answerPy:'Zhǐyào yǒu hǎo de gōngjù, zhè jiàn shì jiù néng zuò de hěn kuài.',
      note:'就 đứng sau chủ ngữ 这件事, trước động từ năng nguyện 能.',pair:'只要……就……'},
     {promptLang:'vi',prompt:'Từ điển không chỉ là công cụ học tập mà cũng là người bạn tốt của tôi.',answer:'词典不仅是学习的工具，也是我的好朋友。',answerPy:'Cídiǎn bùjǐn shì xuéxí de gōngjù, yě shì wǒ de hǎo péngyou.',
      note:'学习的工具 = 学习工具; thêm 的 cho nhịp câu cân đối.',pair:'不仅……也……'}
   ]},

  {n:14,zh:'投篮',py:'tóu lán',pos:'Động từ (li hợp)',vn:'ném rổ, ném bóng vào rổ',hv:'đầu lam',em:'🏀',lesson:1,
   explain:['Ném bóng vào rổ trong môn bóng rổ. Là động từ li hợp: 投了三次篮.'],
   usage:'投篮很准 (ném rất chuẩn), 练习投篮. Không mang thêm tân ngữ: ✗ 投篮球. Muốn nói "ném có chuẩn không" phải lặp động từ: 投篮投得很准.',
   collo:['练习投篮','投篮很准','跳起来投篮','投了一次篮'],
   ex_zh:'他跳起来投篮，球进了！',ex_py:'Tā tiào qǐlai tóu lán, qiú jìn le!',ex_vn:'Cậu ấy bật lên ném rổ, bóng vào rồi!',
   exList:[
     {zh:'他跳起来投篮，球进了！',py:'Tā tiào qǐlai tóu lán, qiú jìn le!',vn:'Cậu ấy bật lên ném rổ, bóng vào rồi!'},
     {zh:'哥哥每天放学以后都去操场练习投篮。',py:'Gēge měi tiān fàngxué yǐhòu dōu qù cāochǎng liànxí tóu lán.',vn:'Ngày nào tan học anh trai cũng ra sân tập ném rổ.'},
     {zh:'他投篮投得越来越准了。',py:'Tā tóu lán tóu de yuè lái yuè zhǔn le.',vn:'Cậu ấy ném rổ càng ngày càng chuẩn.'}
   ],
   colloFull:[
     {zh:'练习投篮',py:'liànxí tóu lán',vn:'tập ném rổ'},
     {zh:'投篮很准',py:'tóu lán hěn zhǔn',vn:'ném rổ rất chuẩn'},
     {zh:'跳起来投篮',py:'tiào qǐlai tóu lán',vn:'bật lên ném rổ'},
     {zh:'投了一次篮',py:'tóule yí cì lán',vn:'ném rổ một lần'},
     {zh:'投篮得分',py:'tóu lán défēn',vn:'ném rổ ghi điểm'}
   ],
   patterns:[
     {s:'投篮 + 投得 + 很准',m:'Động từ li hợp + 得: phải lặp lại động từ 投'},
     {s:'投了 + số lần + 篮',m:'Số lần chen vào giữa 投 và 篮'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Kỹ thuật ném rổ của anh ấy càng ngày càng tốt.',answer:'他投篮的技术越来越好了。',answerPy:'Tā tóu lán de jìshù yuè lái yuè hǎo le.',
      note:'投篮 làm định ngữ cho 技术.',pair:'越来越……'},
     {promptLang:'vi',prompt:'Chiều nay tôi ném rổ hai mươi lần mà ngay cả một quả cũng không vào.',answer:'今天下午我投了二十次篮，连一个都没投进。',answerPy:'Jīntiān xiàwǔ wǒ tóule èrshí cì lán, lián yí ge dōu méi tóujìn.',
      note:'Động từ li hợp: 投 + 了 + 二十次 + 篮.',pair:'连……都……'}
   ]},

  {n:15,zh:'踩',py:'cǎi',pos:'Động từ',vn:'giẫm, đạp',hv:'thải',em:'🦶',lesson:1,
   explain:['Đặt chân lên trên vật gì: 踩着梯子 (đứng / trèo lên thang), 踩到脚 (giẫm phải chân).'],
   usage:'Bảng 词语搭配: 踩 + 破 / 伤 / 断 / 碎 (bổ ngữ kết quả). Bị động: 被人踩了一脚.',
   collo:['踩着梯子','踩破','踩断','踩碎','踩伤'],
   ex_zh:'每当球投进时，就得有一个人踩着梯子上去把球取出来。',ex_py:'Měi dāng qiú tóujìn shí, jiù děi yǒu yí ge rén cǎizhe tīzi shàngqu bǎ qiú qǔ chūlai.',ex_vn:'Mỗi khi bóng vào, phải có một người trèo thang lên lấy bóng ra.',
   exList:[
     {zh:'每当球投进时，就得有一个人踩着梯子上去把球取出来。',py:'Měi dāng qiú tóujìn shí, jiù děi yǒu yí ge rén cǎizhe tīzi shàngqu bǎ qiú qǔ chūlai.',vn:'Mỗi khi bóng vào, phải có một người trèo thang lên lấy bóng ra.'},
     {zh:'公共汽车上人太多，我的脚被人踩了好几次。',py:'Gōnggòng qìchē shang rén tài duō, wǒ de jiǎo bèi rén cǎile hǎo jǐ cì.',vn:'Xe buýt đông quá, chân tôi bị người ta giẫm mấy lần.'},
     {zh:'小心，别把地上的鸡蛋踩碎了！',py:'Xiǎoxīn, bié bǎ dì shang de jīdàn cǎisuì le!',vn:'Cẩn thận, đừng giẫm vỡ trứng dưới đất!'}
   ],
   colloFull:[
     {zh:'踩着梯子',py:'cǎizhe tīzi',vn:'đứng trên thang, trèo thang'},
     {zh:'踩破',py:'cǎipò',vn:'giẫm rách, giẫm thủng'},
     {zh:'踩断',py:'cǎiduàn',vn:'giẫm gãy'},
     {zh:'踩碎',py:'cǎisuì',vn:'giẫm vỡ'},
     {zh:'踩伤',py:'cǎishāng',vn:'giẫm bị thương'}
   ],
   patterns:[
     {s:'踩 + 破 / 伤 / 断 / 碎',m:'Giẫm rách / bị thương / gãy / vỡ (bổ ngữ kết quả)'},
     {s:'被 + người + 踩了一脚',m:'Bị ai giẫm phải một cái'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Trên xe buýt, tôi bị người ta giẫm vào chân một cái.',answer:'在公共汽车上，我被人踩了一脚。',answerPy:'Zài gōnggòng qìchē shang, wǒ bèi rén cǎile yì jiǎo.',
      note:'一脚 là động lượng từ (một cú giẫm).',pair:'被'},
     {promptLang:'vi',prompt:'Em trai giẫm vỡ kính của bố rồi.',answer:'弟弟把爸爸的眼镜踩碎了。',answerPy:'Dìdi bǎ bàba de yǎnjìng cǎisuì le.',
      note:'踩碎 = V + bổ ngữ kết quả, dùng trong câu 把.',pair:'把'}
   ]},

  {n:16,zh:'一再',py:'yízài',pos:'Phó từ',vn:'nhiều lần, hết lần này đến lần khác',hv:'nhất tái',em:'🔁',lesson:1,
   explain:['Làm đi làm lại nhiều lần — thường nhấn mạnh đã nói / đã làm nhiều lần, hoặc việc không mong muốn cứ lặp lại.'],
   usage:'Đứng trước động từ: 一再 + 重复 / 强调 / 提醒 / 要求 / 推迟. Có thể thêm 地: 一再地重复.',
   collo:['一再重复','一再强调','一再提醒','一再推迟'],
   ex_zh:'这样的行为必须一再地重复。',ex_py:'Zhèyàng de xíngwéi bìxū yízài de chóngfù.',ex_vn:'Hành động như vậy buộc phải lặp đi lặp lại nhiều lần.',
   exList:[
     {zh:'这样的行为必须一再地重复。',py:'Zhèyàng de xíngwéi bìxū yízài de chóngfù.',vn:'Hành động như vậy buộc phải lặp đi lặp lại nhiều lần.'},
     {zh:'老师一再提醒我们考试时要注意细节。',py:'Lǎoshī yízài tíxǐng wǒmen kǎoshì shí yào zhùyì xìjié.',vn:'Thầy nhắc đi nhắc lại rằng khi thi chúng tôi phải chú ý chi tiết.'},
     {zh:'一再重复的暂停行为影响了比赛的气氛。',py:'Yízài chóngfù de zàntíng xíngwéi yǐngxiǎngle bǐsài de qìfēn.',vn:'Việc tạm dừng cứ lặp đi lặp lại đã ảnh hưởng đến không khí trận đấu.'}
   ],
   colloFull:[
     {zh:'一再重复',py:'yízài chóngfù',vn:'lặp đi lặp lại'},
     {zh:'一再强调',py:'yízài qiángdiào',vn:'nhiều lần nhấn mạnh'},
     {zh:'一再提醒',py:'yízài tíxǐng',vn:'nhắc đi nhắc lại'},
     {zh:'一再推迟',py:'yízài tuīchí',vn:'hoãn hết lần này đến lần khác'},
     {zh:'一再要求',py:'yízài yāoqiú',vn:'nhiều lần yêu cầu'}
   ],
   patterns:[
     {s:'一再 (+ 地) + V',m:'Nhiều lần làm gì (phó từ đứng trước động từ)'},
     {s:'N + 一再 + 被 + V',m:'Nhiều lần bị … (一再 đứng trước 被)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy mẹ nhắc đi nhắc lại nhưng em trai vẫn quên mang chìa khoá.',answer:'虽然妈妈一再提醒，但是弟弟还是忘了带钥匙。',answerPy:'Suīrán māma yízài tíxǐng, dànshì dìdi háishi wàngle dài yàoshi.',
      note:'一再 đứng ngay trước động từ 提醒.',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Cuộc họp bị hoãn hết lần này đến lần khác.',answer:'会议一再被推迟。',answerPy:'Huìyì yízài bèi tuīchí.',
      note:'Phó từ 一再 đứng TRƯỚC 被, không nói 被一再推迟 trong câu này.',pair:'被'}
   ]},

  {n:17,zh:'重复',py:'chóngfù',pos:'Động từ',vn:'lặp lại, trùng lặp',hv:'trùng phục',em:'🔂',lesson:1,
   explain:['Làm lại, nói lại cùng một việc; hoặc (nội dung) trùng nhau. Chú ý đọc chóng, không đọc zhòng.'],
   usage:'Bảng 词语搭配: 简单地 / 完全 / 准确地 + 重复. 重复一遍, 一再重复.',
   collo:['简单地重复','完全重复','准确地重复','重复一遍'],
   ex_zh:'请你把刚才的话再重复一遍。',ex_py:'Qǐng nǐ bǎ gāngcái de huà zài chóngfù yí biàn.',ex_vn:'Mời bạn nhắc lại lời vừa nói một lần nữa.',
   exList:[
     {zh:'请你把刚才的话再重复一遍。',py:'Qǐng nǐ bǎ gāngcái de huà zài chóngfù yí biàn.',vn:'Mời bạn nhắc lại lời vừa nói một lần nữa.'},
     {zh:'心理学家指出，一个人的动作或想法，如果重复二十一天就会形成习惯。',py:'Xīnlǐxuéjiā zhǐchū, yí ge rén de dòngzuò huò xiǎngfǎ, rúguǒ chóngfù èrshíyī tiān jiù huì xíngchéng xíguàn.',vn:'Các nhà tâm lý học chỉ ra rằng một hành động hay suy nghĩ nếu lặp lại hai mươi mốt ngày sẽ thành thói quen.'},
     {zh:'学习不是简单地重复，而是要思考。',py:'Xuéxí bú shì jiǎndān de chóngfù, ér shì yào sīkǎo.',vn:'Học không phải là lặp lại đơn giản mà phải suy nghĩ.'}
   ],
   colloFull:[
     {zh:'简单地重复',py:'jiǎndān de chóngfù',vn:'lặp lại đơn giản'},
     {zh:'完全重复',py:'wánquán chóngfù',vn:'trùng lặp hoàn toàn'},
     {zh:'准确地重复',py:'zhǔnquè de chóngfù',vn:'nhắc lại chính xác'},
     {zh:'重复一遍',py:'chóngfù yí biàn',vn:'nhắc lại một lần'},
     {zh:'一再重复',py:'yízài chóngfù',vn:'lặp đi lặp lại'}
   ],
   patterns:[
     {s:'把 + N + (再) 重复一遍',m:'Nhắc lại … một lần (câu 把)'},
     {s:'简单地 / 完全 / 准确地 + 重复',m:'Trạng ngữ + 重复'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Thầy giáo bảo tôi nhắc lại đáp án một lần nữa.',answer:'老师让我把答案再重复一遍。',answerPy:'Lǎoshī ràng wǒ bǎ dá\'àn zài chóngfù yí biàn.',
      note:'再 đứng trước động từ, 一遍 là bổ ngữ số lần.',pair:'把'},
     {promptLang:'vi',prompt:'Câu này tôi vừa nghe là có thể nhắc lại chính xác.',answer:'这句话我一听就能准确地重复出来。',answerPy:'Zhè jù huà wǒ yì tīng jiù néng zhǔnquè de chóngfù chūlai.',
      note:'准确地重复 là cụm trong bảng 词语搭配.',pair:'一……就……'}
   ]},

  {n:18,zh:'断断续续',py:'duànduàn xùxù',pos:'Tính từ',vn:'lúc có lúc không, đứt quãng',hv:'đoạn đoạn tục tục',em:'〰️',lesson:1,
   explain:['Lúc dừng lúc tiếp, không liền mạch. Là dạng lặp AABB của 断续 (đứt – nối).'],
   usage:'Làm trạng ngữ (thêm 地): 断断续续地进行 / 下雨 / 说; làm vị ngữ / định ngữ: 声音断断续续的.',
   collo:['断断续续地进行','断断续续地下雨','断断续续的声音'],
   ex_zh:'比赛不得不断断续续地进行。',ex_py:'Bǐsài bùdébù duànduàn xùxù de jìnxíng.',ex_vn:'Trận đấu đành phải diễn ra ngắt quãng.',
   exList:[
     {zh:'比赛不得不断断续续地进行。',py:'Bǐsài bùdébù duànduàn xùxù de jìnxíng.',vn:'Trận đấu đành phải diễn ra ngắt quãng.'},
     {zh:'雨断断续续地下了一整天。',py:'Yǔ duànduàn xùxù de xiàle yì zhěng tiān.',vn:'Mưa lúc tạnh lúc rơi suốt cả ngày.'},
     {zh:'电话里他的声音断断续续的，我听不清楚。',py:'Diànhuà li tā de shēngyīn duànduàn xùxù de, wǒ tīng bu qīngchu.',vn:'Giọng anh ấy trong điện thoại lúc được lúc mất, tôi nghe không rõ.'}
   ],
   colloFull:[
     {zh:'断断续续地进行',py:'duànduàn xùxù de jìnxíng',vn:'diễn ra ngắt quãng'},
     {zh:'断断续续地下雨',py:'duànduàn xùxù de xià yǔ',vn:'mưa lúc tạnh lúc rơi'},
     {zh:'断断续续的声音',py:'duànduàn xùxù de shēngyīn',vn:'âm thanh đứt quãng'},
     {zh:'断断续续地学',py:'duànduàn xùxù de xué',vn:'học lúc được lúc không'}
   ],
   patterns:[
     {s:'断断续续 + 地 + V',m:'Làm gì một cách đứt quãng'},
     {s:'N + 断断续续的',m:'… lúc có lúc không (làm vị ngữ)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy học đứt quãng nhưng cô ấy chưa bao giờ bỏ cuộc.',answer:'虽然学得断断续续，但是她从来没放弃过。',answerPy:'Suīrán xué de duànduàn xùxù, dànshì tā cónglái méi fàngqìguo.',
      note:'断断续续 làm bổ ngữ trạng thái sau 得.',pair:'从来没……过'},
     {promptLang:'vi',prompt:'Mạng yếu quá, ngay cả giọng của thầy cũng đứt quãng.',answer:'网络太差了，连老师的声音都断断续续的。',answerPy:'Wǎngluò tài chà le, lián lǎoshī de shēngyīn dōu duànduàn xùxù de.',
      note:'Tính từ lặp AABB làm vị ngữ thường có 的 ở cuối.',pair:'连……都……'}
   ]},

  {n:19,zh:'激烈',py:'jīliè',pos:'Tính từ',vn:'kịch liệt, gay cấn, gay gắt',hv:'kích liệt',em:'🔥',lesson:1,
   explain:['Mạnh mẽ và căng thẳng — thiên về SẮC BÉN, CĂNG THẲNG. Dùng cho lời lẽ, cảm xúc, thi đấu, tranh luận.'],
   usage:'Bảng 词语搭配: 激烈的 + 比赛 / 争吵 / 战争 / 运动. 竞争很激烈. Xem phân biệt với 强烈.',
   collo:['激烈的比赛','激烈的争吵','激烈的战争','激烈的运动'],
   ex_zh:'比赛缺少了激烈紧张的气氛。',ex_py:'Bǐsài quēshǎole jīliè jǐnzhāng de qìfēn.',ex_vn:'Trận đấu thiếu đi bầu không khí sôi nổi, căng thẳng.',
   exList:[
     {zh:'比赛缺少了激烈紧张的气氛。',py:'Bǐsài quēshǎole jīliè jǐnzhāng de qìfēn.',vn:'Trận đấu thiếu đi bầu không khí sôi nổi, căng thẳng.'},
     {zh:'人在激烈运动时，会出很多汗。',py:'Rén zài jīliè yùndòng shí, huì chū hěn duō hàn.',vn:'Khi vận động mạnh, con người ra rất nhiều mồ hôi.'},
     {zh:'明天我去一家公司面试，听说竞争很激烈。',py:'Míngtiān wǒ qù yì jiā gōngsī miànshì, tīngshuō jìngzhēng hěn jīliè.',vn:'Ngày mai tôi đi phỏng vấn ở một công ty, nghe nói cạnh tranh rất gay gắt.'}
   ],
   colloFull:[
     {zh:'激烈的比赛',py:'jīliè de bǐsài',vn:'trận đấu gay cấn'},
     {zh:'激烈的争吵',py:'jīliè de zhēngchǎo',vn:'cuộc cãi vã gay gắt'},
     {zh:'激烈的战争',py:'jīliè de zhànzhēng',vn:'cuộc chiến ác liệt'},
     {zh:'激烈的运动',py:'jīliè de yùndòng',vn:'vận động mạnh'},
     {zh:'竞争很激烈',py:'jìngzhēng hěn jīliè',vn:'cạnh tranh gay gắt'}
   ],
   patterns:[
     {s:'激烈的 + 比赛 / 争吵 / 战争 / 运动',m:'… gay cấn / gay gắt / ác liệt / mạnh'},
     {s:'竞争 / 比赛 + 很激烈',m:'激烈 làm vị ngữ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cạnh tranh càng ngày càng gay gắt.',answer:'竞争越来越激烈了。',answerPy:'Jìngzhēng yuè lái yuè jīliè le.',
      note:'竞争 đi với 激烈, không đi với 强烈.',pair:'越来越……'},
     {promptLang:'vi',prompt:'Trận đấu này tuy rất gay cấn nhưng cuối cùng đội A thắng.',answer:'这场比赛虽然很激烈，但是最后甲队赢了。',answerPy:'Zhè chǎng bǐsài suīrán hěn jīliè, dànshì zuìhòu jiǎ duì yíng le.',
      note:'Thi đấu, tranh luận → 激烈.',pair:'虽然……但是……'}
   ]},

  {n:20,zh:'气氛',py:'qìfēn',pos:'Danh từ',vn:'bầu không khí',hv:'khí phân',em:'🎉',lesson:1,
   explain:['Cảm giác chung, không khí tinh thần của một nơi, một sự kiện. Không phải không khí để thở — cái đó là 空气.'],
   usage:'Bảng 词语搭配: 家庭的 / 政治 / 节日 / 学习的 / 谈话的 + 气氛. Vị ngữ: 气氛很热烈 / 紧张 / 轻松.',
   collo:['节日气氛','学习的气氛','家庭的气氛','气氛很紧张'],
   ex_zh:'今天的晚会你们组织得相当好，气氛搞得轻松愉快。',ex_py:'Jīntiān de wǎnhuì nǐmen zǔzhī de xiāngdāng hǎo, qìfēn gǎo de qīngsōng yúkuài.',ex_vn:'Buổi dạ hội hôm nay các bạn tổ chức khá tốt, không khí thoải mái vui vẻ.',
   exList:[
     {zh:'今天的晚会你们组织得相当好，气氛搞得轻松愉快。',py:'Jīntiān de wǎnhuì nǐmen zǔzhī de xiāngdāng hǎo, qìfēn gǎo de qīngsōng yúkuài.',vn:'Buổi dạ hội hôm nay các bạn tổ chức khá tốt, không khí thoải mái vui vẻ.'},
     {zh:'春节快到了，街上到处都是节日气氛。',py:'Chūnjié kuài dào le, jiē shang dàochù dōu shì jiérì qìfēn.',vn:'Sắp Tết rồi, ngoài phố đâu đâu cũng rộn ràng không khí ngày lễ.'},
     {zh:'刘总跟小李谈话的时候，气氛好像有点儿紧张。',py:'Liú zǒng gēn Xiǎo Lǐ tánhuà de shíhou, qìfēn hǎoxiàng yǒudiǎnr jǐnzhāng.',vn:'Lúc giám đốc Lưu nói chuyện với Tiểu Lý, không khí có vẻ hơi căng thẳng.'}
   ],
   colloFull:[
     {zh:'节日气氛',py:'jiérì qìfēn',vn:'không khí ngày lễ'},
     {zh:'学习的气氛',py:'xuéxí de qìfēn',vn:'không khí học tập'},
     {zh:'家庭的气氛',py:'jiātíng de qìfēn',vn:'không khí gia đình'},
     {zh:'气氛很紧张',py:'qìfēn hěn jǐnzhāng',vn:'không khí rất căng thẳng'},
     {zh:'谈话的气氛',py:'tánhuà de qìfēn',vn:'không khí cuộc trò chuyện'}
   ],
   patterns:[
     {s:'N + (的) + 气氛',m:'Không khí của …'},
     {s:'气氛 + 很 + 轻松 / 紧张 / 热烈',m:'Không khí thoải mái / căng thẳng / sôi nổi'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Không khí học tập của lớp chúng tôi càng ngày càng tốt.',answer:'我们班的学习气氛越来越好了。',answerPy:'Wǒmen bān de xuéxí qìfēn yuè lái yuè hǎo le.',
      note:'学习气氛 = không khí học tập.',pair:'越来越……'},
     {promptLang:'vi',prompt:'Anh ấy vừa kể chuyện cười là không khí thoải mái hẳn.',answer:'他一讲笑话，气氛就轻松了。',answerPy:'Tā yì jiǎng xiàohua, qìfēn jiù qīngsōng le.',
      note:'Hai vế khác chủ ngữ: 就 đứng sau chủ ngữ vế sau (气氛就…).',pair:'一……就……'}
   ]},

  {n:21,zh:'何况',py:'hékuàng',pos:'Liên từ',vn:'huống hồ, huống chi',hv:'hà huống',em:'➕',lesson:1,
   explain:['Dùng giọng phản vấn để tiến thêm một bước: vế trước nêu trường hợp A, vế sau "huống chi" B — kết luận là hiển nhiên, có ý "khỏi phải nói".','Còn dùng để BỔ SUNG thêm một lý do: (又)何况 = hơn nữa.'],
   usage:'连 A 都……，(更)何况 B (呢)？ · A 都……，何况 B？ · Bổ sung lý do: ……，(又)何况…….',
   collo:['更何况','又何况','何况……呢','连……都……，何况……'],
   ex_zh:'连运动员都不满意，更何况看比赛的球迷呢？',ex_py:'Lián yùndòngyuán dōu bù mǎnyì, gèng hékuàng kàn bǐsài de qiúmí ne?',ex_vn:'Ngay cả vận động viên còn không hài lòng, huống chi là người hâm mộ xem trận đấu?',
   exList:[
     {zh:'连运动员都不满意，更何况看比赛的球迷呢？',py:'Lián yùndòngyuán dōu bù mǎnyì, gèng hékuàng kàn bǐsài de qiúmí ne?',vn:'Ngay cả vận động viên còn không hài lòng, huống chi là người hâm mộ xem trận đấu?'},
     {zh:'北京的发展变化太快，我这个土生土长的老北京还常迷路呢，何况你一个外地人。',py:'Běijīng de fāzhǎn biànhuà tài kuài, wǒ zhège tǔ shēng tǔ zhǎng de lǎo Běijīng hái cháng mílù ne, hékuàng nǐ yí ge wàidì rén.',vn:'Bắc Kinh thay đổi nhanh quá, dân Bắc Kinh gốc như tôi còn hay lạc đường, huống chi bạn là người nơi khác.'},
     {zh:'他现在应该在上课，看不了短信；何况现在我们都用微信联系。',py:'Tā xiànzài yīnggāi zài shàngkè, kàn bu liǎo duǎnxìn; hékuàng xiànzài wǒmen dōu yòng Wēixìn liánxì.',vn:'Giờ này chắc thầy đang dạy, không xem tin nhắn được; hơn nữa bây giờ chúng ta đều liên lạc bằng WeChat.'}
   ],
   colloFull:[
     {zh:'更何况',py:'gèng hékuàng',vn:'huống chi là'},
     {zh:'又何况',py:'yòu hékuàng',vn:'huống hồ, hơn nữa'},
     {zh:'何况……呢',py:'hékuàng…… ne',vn:'huống hồ … nữa'},
     {zh:'连……都……，何况……',py:'lián…… dōu……, hékuàng……',vn:'ngay cả … còn …, huống chi …'}
   ],
   patterns:[
     {s:'连 A 都……，(更)何况 B 呢？',m:'Ngay cả A còn …, huống chi B'},
     {s:'……，(又)何况……',m:'Bổ sung thêm lý do: hơn nữa …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bài này ngay cả thầy giáo cũng thấy khó, huống chi là chúng ta?',answer:'这道题连老师都觉得难，何况我们呢？',answerPy:'Zhè dào tí lián lǎoshī dōu juéde nán, hékuàng wǒmen ne?',
      note:'连 A 都…… nêu trường hợp "khó xảy ra", 何况 B suy ra kết luận hiển nhiên.',pair:'连……都……'},
     {promptLang:'vi',prompt:'Căn phòng này tuy rẻ nhưng quá xa trường, hơn nữa lại không có điều hoà.',answer:'这个房间虽然便宜，但是离学校太远了，何况还没有空调。',answerPy:'Zhège fángjiān suīrán piányi, dànshì lí xuéxiào tài yuǎn le, hékuàng hái méiyǒu kōngtiáo.',
      note:'Cách dùng thứ hai: 何况 bổ sung thêm một lý do.',pair:'虽然……但是……'}
   ]},

  {n:22,zh:'球迷',py:'qiúmí',pos:'Danh từ',vn:'người hâm mộ bóng (cổ động viên)',hv:'cầu mê',em:'📣',lesson:1,
   explain:['Người rất mê xem hoặc chơi một môn bóng. 迷 = mê: 歌迷 (người hâm mộ ca sĩ), 影迷 (người mê phim).'],
   usage:'足球迷, 篮球迷, 老球迷; 球迷们 + 为……加油.',
   collo:['足球迷','篮球迷','看比赛的球迷','老球迷'],
   ex_zh:'我爸爸是个老球迷，每场比赛都不错过。',ex_py:'Wǒ bàba shì ge lǎo qiúmí, měi chǎng bǐsài dōu bú cuòguò.',ex_vn:'Bố tôi là một fan bóng đá lâu năm, trận nào cũng không bỏ lỡ.',
   exList:[
     {zh:'我爸爸是个老球迷，每场比赛都不错过。',py:'Wǒ bàba shì ge lǎo qiúmí, měi chǎng bǐsài dōu bú cuòguò.',vn:'Bố tôi là một fan bóng đá lâu năm, trận nào cũng không bỏ lỡ.'},
     {zh:'连运动员都不满意，更何况看比赛的球迷呢？',py:'Lián yùndòngyuán dōu bù mǎnyì, gèng hékuàng kàn bǐsài de qiúmí ne?',vn:'Ngay cả vận động viên còn không hài lòng, huống chi là người hâm mộ xem trận đấu?'},
     {zh:'越南队赢了，球迷们都跑到街上庆祝。',py:'Yuènán duì yíng le, qiúmímen dōu pǎodào jiē shang qìngzhù.',vn:'Đội Việt Nam thắng rồi, cổ động viên đều đổ ra đường ăn mừng.'}
   ],
   colloFull:[
     {zh:'足球迷',py:'zúqiúmí',vn:'fan bóng đá'},
     {zh:'篮球迷',py:'lánqiúmí',vn:'fan bóng rổ'},
     {zh:'看比赛的球迷',py:'kàn bǐsài de qiúmí',vn:'người hâm mộ đến xem trận'},
     {zh:'老球迷',py:'lǎo qiúmí',vn:'fan lâu năm'},
     {zh:'球迷们',py:'qiúmímen',vn:'các cổ động viên'}
   ],
   patterns:[
     {s:'足球 / 篮球 + 迷',m:'迷 = người mê: 球迷, 歌迷, 影迷'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đội Việt Nam vừa thắng là cổ động viên liền đổ ra đường ăn mừng.',answer:'越南队一赢，球迷们就跑到街上庆祝。',answerPy:'Yuènán duì yì yíng, qiúmímen jiù pǎodào jiē shang qìngzhù.',
      note:'Hai chủ ngữ khác nhau: 越南队一……，球迷们就…….',pair:'一……就……'},
     {promptLang:'vi',prompt:'Anh ấy không chỉ là fan bóng đá mà cũng rất thích bóng rổ.',answer:'他不仅是足球迷，也很喜欢篮球。',answerPy:'Tā bùjǐn shì zúqiúmí, yě hěn xǐhuan lánqiú.',
      note:'足球迷 = fan bóng đá.',pair:'不仅……也……'}
   ]},

  {n:23,zh:'工程师',py:'gōngchéngshī',pos:'Danh từ',vn:'kỹ sư',hv:'công trình sư',em:'👷',lesson:1,
   explain:['Người có chuyên môn kỹ thuật, thiết kế và chế tạo công trình, máy móc.'],
   usage:'Lượng từ 位 / 个: 一位工程师. Ghép: 软件工程师, 电脑工程师, 总工程师.',
   collo:['一位工程师','软件工程师','当工程师','总工程师'],
   ex_zh:'有一位工程师甚至专门制造出一种机器。',ex_py:'Yǒu yí wèi gōngchéngshī shènzhì zhuānmén zhìzào chū yì zhǒng jīqì.',ex_vn:'Có một kỹ sư thậm chí còn chế tạo riêng một loại máy.',
   exList:[
     {zh:'有一位工程师甚至专门制造出一种机器。',py:'Yǒu yí wèi gōngchéngshī shènzhì zhuānmén zhìzào chū yì zhǒng jīqì.',vn:'Có một kỹ sư thậm chí còn chế tạo riêng một loại máy.'},
     {zh:'我哥哥大学毕业以后当了软件工程师。',py:'Wǒ gēge dàxué bìyè yǐhòu dāngle ruǎnjiàn gōngchéngshī.',vn:'Anh trai tôi tốt nghiệp đại học xong thì làm kỹ sư phần mềm.'},
     {zh:'这座桥是由一位年轻的工程师设计的。',py:'Zhè zuò qiáo shì yóu yí wèi niánqīng de gōngchéngshī shèjì de.',vn:'Cây cầu này do một kỹ sư trẻ thiết kế.'}
   ],
   colloFull:[
     {zh:'一位工程师',py:'yí wèi gōngchéngshī',vn:'một vị kỹ sư'},
     {zh:'软件工程师',py:'ruǎnjiàn gōngchéngshī',vn:'kỹ sư phần mềm'},
     {zh:'当工程师',py:'dāng gōngchéngshī',vn:'làm kỹ sư'},
     {zh:'总工程师',py:'zǒng gōngchéngshī',vn:'kỹ sư trưởng'},
     {zh:'电脑工程师',py:'diànnǎo gōngchéngshī',vn:'kỹ sư máy tính'}
   ],
   patterns:[
     {s:'当 / 成为 + 工程师',m:'Làm / trở thành kỹ sư'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chiếc máy này là do kỹ sư của công ty chúng tôi chế tạo.',answer:'这台机器是我们公司的工程师制造的。',answerPy:'Zhè tái jīqì shì wǒmen gōngsī de gōngchéngshī zhìzào de.',
      note:'Lượng từ của 机器 là 台. 是……的 nhấn mạnh người làm.',pair:'是……的'},
     {promptLang:'vi',prompt:'Chỉ cần chăm chỉ học, sau này em sẽ làm được kỹ sư.',answer:'只要努力学习，你以后就能当上工程师。',answerPy:'Zhǐyào nǔlì xuéxí, nǐ yǐhòu jiù néng dāngshang gōngchéngshī.',
      note:'当上 = làm được, đạt được vị trí.',pair:'只要……就……'}
   ]},

  {n:24,zh:'机器',py:'jīqì',pos:'Danh từ',vn:'máy móc, cái máy',hv:'cơ khí',em:'⚙️',lesson:1,
   explain:['Thiết bị có bộ phận chuyển động để làm việc thay người. Âm Hán–Việt là "cơ khí" nhưng nghĩa là CÁI MÁY.'],
   usage:'Lượng từ 台 / 种: 一台机器. Động từ: 制造 / 造 / 安装 / 修 + 机器; 机器坏了.',
   collo:['一台机器','制造机器','造机器','机器坏了'],
   ex_zh:'他专门制造出一种机器，在下面一拉篮筐就能把球弹出来。',ex_py:'Tā zhuānmén zhìzào chū yì zhǒng jīqì, zài xiàmiàn yì lā lánkuāng jiù néng bǎ qiú tán chūlai.',ex_vn:'Ông chế tạo riêng một loại máy, chỉ cần kéo ở bên dưới là giỏ bật được bóng ra.',
   exList:[
     {zh:'他专门制造出一种机器，在下面一拉篮筐就能把球弹出来。',py:'Tā zhuānmén zhìzào chū yì zhǒng jīqì, zài xiàmiàn yì lā lánkuāng jiù néng bǎ qiú tán chūlai.',vn:'Ông chế tạo riêng một loại máy, chỉ cần kéo ở bên dưới là giỏ bật được bóng ra.'},
     {zh:'工厂里的机器坏了，工人们只好停下来。',py:'Gōngchǎng li de jīqì huài le, gōngrénmen zhǐhǎo tíng xiàlai.',vn:'Máy trong xưởng hỏng, công nhân đành phải dừng lại.'},
     {zh:'现在很多工作都可以由机器来做。',py:'Xiànzài hěn duō gōngzuò dōu kěyǐ yóu jīqì lái zuò.',vn:'Bây giờ nhiều công việc có thể để máy làm.'}
   ],
   colloFull:[
     {zh:'一台机器',py:'yì tái jīqì',vn:'một cỗ máy'},
     {zh:'制造机器',py:'zhìzào jīqì',vn:'chế tạo máy'},
     {zh:'造机器',py:'zào jīqì',vn:'làm máy'},
     {zh:'机器坏了',py:'jīqì huài le',vn:'máy hỏng rồi'},
     {zh:'安装机器',py:'ānzhuāng jīqì',vn:'lắp máy'}
   ],
   patterns:[
     {s:'一台 / 一种 + 机器',m:'Lượng từ của 机器'},
     {s:'由 + 机器 + 来 + V',m:'Để máy làm'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chiếc máy này bị em trai làm hỏng rồi.',answer:'这台机器被弟弟弄坏了。',answerPy:'Zhè tái jīqì bèi dìdi nònghuài le.',
      note:'弄坏 = làm hỏng (V + bổ ngữ kết quả).',pair:'被'},
     {promptLang:'vi',prompt:'Máy vừa hỏng là cả xưởng phải dừng lại.',answer:'机器一坏，整个工厂就得停下来。',answerPy:'Jīqì yí huài, zhěnggè gōngchǎng jiù děi tíng xiàlai.',
      note:'得 đọc děi = phải.',pair:'一……就……'}
   ]},

  {n:25,zh:'顺畅',py:'shùnchàng',pos:'Tính từ',vn:'trôi chảy, thông suốt',hv:'thuận sướng',em:'🌊',lesson:1,
   explain:['Diễn ra suôn sẻ, không bị vướng, không bị ngắt quãng.'],
   usage:'Chủ ngữ: 交通 / 比赛 / 呼吸 / 说话 / 工作 + 顺畅. 让……顺畅起来. 很顺畅 / 不太顺畅.',
   collo:['比赛顺畅','交通顺畅','顺畅起来','说得很顺畅'],
   ex_zh:'可是，这些办法都没能让比赛顺畅起来。',ex_py:'Kěshì, zhèxiē bànfǎ dōu méi néng ràng bǐsài shùnchàng qǐlai.',ex_vn:'Thế nhưng những cách này đều không làm trận đấu trôi chảy lên được.',
   exList:[
     {zh:'可是，这些办法都没能让比赛顺畅起来。',py:'Kěshì, zhèxiē bànfǎ dōu méi néng ràng bǐsài shùnchàng qǐlai.',vn:'Thế nhưng những cách này đều không làm trận đấu trôi chảy lên được.'},
     {zh:'修了新路以后，这里的交通顺畅多了。',py:'Xiūle xīn lù yǐhòu, zhèlǐ de jiāotōng shùnchàng duō le.',vn:'Làm đường mới xong, giao thông ở đây thông suốt hơn nhiều.'},
     {zh:'练习了一个月，她说汉语说得越来越顺畅了。',py:'Liànxíle yí ge yuè, tā shuō Hànyǔ shuō de yuè lái yuè shùnchàng le.',vn:'Luyện một tháng, cô ấy nói tiếng Trung càng ngày càng trôi chảy.'}
   ],
   colloFull:[
     {zh:'比赛顺畅',py:'bǐsài shùnchàng',vn:'trận đấu trôi chảy'},
     {zh:'交通顺畅',py:'jiāotōng shùnchàng',vn:'giao thông thông suốt'},
     {zh:'顺畅起来',py:'shùnchàng qǐlai',vn:'trở nên trôi chảy'},
     {zh:'说得很顺畅',py:'shuō de hěn shùnchàng',vn:'nói rất trôi chảy'},
     {zh:'呼吸顺畅',py:'hūxī shùnchàng',vn:'thở dễ dàng'}
   ],
   patterns:[
     {s:'让 + N + 顺畅起来',m:'Làm cho … trôi chảy lên'},
     {s:'V + 得 + 很顺畅',m:'Làm gì rất trôi chảy'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cậu ấy đọc bài khoá càng ngày càng trôi chảy.',answer:'他读课文读得越来越顺畅了。',answerPy:'Tā dú kèwén dú de yuè lái yuè shùnchàng le.',
      note:'Có tân ngữ thì lặp động từ: 读课文读得…….',pair:'越来越……'},
     {promptLang:'vi',prompt:'Có đường mới rồi, ngay cả giờ tan tầm giao thông cũng thông suốt.',answer:'有了新路以后，连上下班的时候交通都很顺畅。',answerPy:'Yǒule xīn lù yǐhòu, lián shàng-xiàbān de shíhou jiāotōng dōu hěn shùnchàng.',
      note:'交通顺畅 là cụm hay gặp.',pair:'连……都……'}
   ]},

  {n:26,zh:'幼儿园',py:'yòu\'éryuán',pos:'Danh từ',vn:'nhà trẻ, trường mầm non',hv:'ấu nhi viên',em:'🧸',lesson:1,
   explain:['Trường cho trẻ khoảng 3–6 tuổi trước khi vào tiểu học.'],
   usage:'上幼儿园 (đi học mẫu giáo), 幼儿园老师, 送孩子去幼儿园.',
   collo:['上幼儿园','幼儿园老师','送孩子去幼儿园'],
   ex_zh:'一个上幼儿园的小男孩跟着父亲从一群正在进行篮球比赛的人旁边经过。',ex_py:'Yí ge shàng yòu\'éryuán de xiǎo nánhái gēnzhe fùqīn cóng yì qún zhèngzài jìnxíng lánqiú bǐsài de rén pángbiān jīngguò.',ex_vn:'Một cậu bé học mẫu giáo theo bố đi ngang qua một nhóm người đang thi đấu bóng rổ.',
   exList:[
     {zh:'一个上幼儿园的小男孩跟着父亲从一群正在进行篮球比赛的人旁边经过。',py:'Yí ge shàng yòu\'éryuán de xiǎo nánhái gēnzhe fùqīn cóng yì qún zhèngzài jìnxíng lánqiú bǐsài de rén pángbiān jīngguò.',vn:'Một cậu bé học mẫu giáo theo bố đi ngang qua một nhóm người đang thi đấu bóng rổ.'},
     {zh:'我妹妹今年四岁，已经上幼儿园了。',py:'Wǒ mèimei jīnnián sì suì, yǐjīng shàng yòu\'éryuán le.',vn:'Em gái tôi năm nay bốn tuổi, đã đi mẫu giáo rồi.'},
     {zh:'妈妈每天早上先送弟弟去幼儿园，然后再去上班。',py:'Māma měi tiān zǎoshang xiān sòng dìdi qù yòu\'éryuán, ránhòu zài qù shàngbān.',vn:'Sáng nào mẹ cũng đưa em trai đến nhà trẻ trước rồi mới đi làm.'}
   ],
   colloFull:[
     {zh:'上幼儿园',py:'shàng yòu\'éryuán',vn:'đi học mẫu giáo'},
     {zh:'幼儿园老师',py:'yòu\'éryuán lǎoshī',vn:'cô giáo mầm non'},
     {zh:'送孩子去幼儿园',py:'sòng háizi qù yòu\'éryuán',vn:'đưa con đến nhà trẻ'},
     {zh:'幼儿园的小朋友',py:'yòu\'éryuán de xiǎopéngyou',vn:'các bé mẫu giáo'}
   ],
   patterns:[
     {s:'上 + 幼儿园 / 小学 / 中学 / 大学',m:'Đi học ở cấp …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Em trai tôi là ba tuổi bắt đầu đi mẫu giáo.',answer:'我弟弟是三岁开始上幼儿园的。',answerPy:'Wǒ dìdi shì sān suì kāishǐ shàng yòu\'éryuán de.',
      note:'是……的 nhấn mạnh thời điểm.',pair:'是……的'},
     {promptLang:'vi',prompt:'Thằng bé vừa đến nhà trẻ là khóc.',answer:'孩子一到幼儿园就哭。',answerPy:'Háizi yí dào yòu\'éryuán jiù kū.',
      note:'一 + 到 + nơi chốn + 就 + V.',pair:'一……就……'}
   ]},

  {n:27,zh:'好奇',py:'hàoqí',pos:'Tính từ',vn:'hiếu kỳ, tò mò',hv:'hiếu kỳ',em:'🧐',lesson:1,
   explain:['Muốn biết những điều mới lạ, chưa hiểu. Chú ý đọc hào (thanh 4), không đọc hǎo.'],
   usage:'好奇地 + 问 / 看; 对……很好奇 (tò mò về …); 好奇心 (tính tò mò).',
   collo:['好奇地问','对……很好奇','好奇心','感到好奇'],
   ex_zh:'小男孩好奇地问父亲：“何必这么麻烦呢？”',ex_py:'Xiǎo nánhái hàoqí de wèn fùqīn: "Hébì zhème máfan ne?"',ex_vn:'Cậu bé tò mò hỏi bố: "Sao phải phiền phức thế ạ?"',
   exList:[
     {zh:'小男孩好奇地问父亲：“何必这么麻烦呢？”',py:'Xiǎo nánhái hàoqí de wèn fùqīn: "Hébì zhème máfan ne?"',vn:'Cậu bé tò mò hỏi bố: "Sao phải phiền phức thế ạ?"'},
     {zh:'孩子们对什么都很好奇。',py:'Háizimen duì shénme dōu hěn hàoqí.',vn:'Trẻ con cái gì cũng tò mò.'},
     {zh:'好奇心能让人不断地学习新东西。',py:'Hàoqíxīn néng ràng rén búduàn de xuéxí xīn dōngxi.',vn:'Tính tò mò giúp con người không ngừng học điều mới.'}
   ],
   colloFull:[
     {zh:'好奇地问',py:'hàoqí de wèn',vn:'tò mò hỏi'},
     {zh:'对……很好奇',py:'duì…… hěn hàoqí',vn:'rất tò mò về …'},
     {zh:'好奇心',py:'hàoqíxīn',vn:'tính tò mò'},
     {zh:'感到好奇',py:'gǎndào hàoqí',vn:'cảm thấy tò mò'},
     {zh:'好奇地看',py:'hàoqí de kàn',vn:'tò mò nhìn'}
   ],
   patterns:[
     {s:'对 + N + 很好奇',m:'Tò mò về …'},
     {s:'好奇 + 地 + V',m:'Tò mò làm gì (trạng ngữ)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Em gái cái gì cũng tò mò, ngay cả một con kiến cũng phải nhìn cả buổi.',answer:'妹妹对什么都很好奇，连一只蚂蚁都要看半天。',answerPy:'Mèimei duì shénme dōu hěn hàoqí, lián yì zhī mǎyǐ dōu yào kàn bàntiān.',
      note:'对……很好奇: 好奇 không mang tân ngữ trực tiếp.',pair:'连……都……'},
     {promptLang:'vi',prompt:'Anh ấy tuy rất tò mò nhưng không hỏi.',answer:'他虽然很好奇，但是没有问。',answerPy:'Tā suīrán hěn hàoqí, dànshì méiyǒu wèn.',
      note:'好奇 là tính từ, đi sau 很.',pair:'虽然……但是……'}
   ]},

  {n:28,zh:'何必',py:'hébì',pos:'Phó từ',vn:'(chỉ sự không cần) hà tất, cần gì',hv:'hà tất',em:'🤷',lesson:1,
   explain:['Dùng giọng phản vấn để nói "không cần phải …" (= 不必). Cuối câu thường có 呢.'],
   usage:'何必 + V / cụm V + 呢？ · 何必 + 这么 / 那么 + Adj + 呢？ Hay kèm vế sau: ……不就行了吗？',
   collo:['何必这么麻烦呢','何必呢','何必……呢','何必亲自去'],
   ex_zh:'何必这么麻烦呢？把篮筐的底去掉不就行了吗？',ex_py:'Hébì zhème máfan ne? Bǎ lánkuāng de dǐ qùdiào bú jiù xíng le ma?',ex_vn:'Sao phải phiền phức thế? Bỏ đáy giỏ đi chẳng phải là xong sao?',
   exList:[
     {zh:'何必这么麻烦呢？把篮筐的底去掉不就行了吗？',py:'Hébì zhème máfan ne? Bǎ lánkuāng de dǐ qùdiào bú jiù xíng le ma?',vn:'Sao phải phiền phức thế? Bỏ đáy giỏ đi chẳng phải là xong sao?'},
     {zh:'食堂楼下就有个小超市，何必去学校外边呢？',py:'Shítáng lóu xià jiù yǒu ge xiǎo chāoshì, hébì qù xuéxiào wàibian ne?',vn:'Ngay dưới nhà ăn có siêu thị nhỏ, cần gì phải ra ngoài trường?'},
     {zh:'你何必亲自送一趟呢？叫个快递不就行了？',py:'Nǐ hébì qīnzì sòng yí tàng ne? Jiào ge kuàidì bú jiù xíng le?',vn:'Bạn cần gì phải tự mang đi một chuyến? Gọi chuyển phát nhanh chẳng phải là xong sao?'}
   ],
   colloFull:[
     {zh:'何必这么麻烦呢',py:'hébì zhème máfan ne',vn:'cần gì phiền phức thế'},
     {zh:'何必呢',py:'hébì ne',vn:'cần gì chứ'},
     {zh:'何必……呢',py:'hébì…… ne',vn:'hà tất phải …'},
     {zh:'何必亲自去',py:'hébì qīnzì qù',vn:'cần gì phải tự đi'},
     {zh:'何必生气',py:'hébì shēngqì',vn:'cần gì phải giận'}
   ],
   patterns:[
     {s:'何必 + V + 呢？',m:'Hà tất phải … (= 不必)'},
     {s:'何必……呢？……不就行了吗？',m:'Cần gì phải …? … chẳng phải là xong sao?'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cậu nói chuyện này với anh ấy chẳng phải là xong sao, cần gì tự mình sốt ruột?',answer:'你把这件事告诉他不就行了，何必自己着急呢？',answerPy:'Nǐ bǎ zhè jiàn shì gàosu tā bú jiù xíng le, hébì zìjǐ zháojí ne?',
      note:'何必……呢 luôn mang giọng phản vấn.',pair:'把'},
     {promptLang:'vi',prompt:'Chỉ cần gọi điện là được, hà tất phải đích thân đi một chuyến?',answer:'只要打个电话就行了，何必亲自跑一趟呢？',answerPy:'Zhǐyào dǎ ge diànhuà jiù xíng le, hébì qīnzì pǎo yí tàng ne?',
      note:'亲自 = đích thân; 跑一趟 = đi một chuyến.',pair:'只要……就……'}
   ]},

  {n:29,zh:'多亏',py:'duōkuī',pos:'Động từ',vn:'may mà (có), nhờ có',hv:'đa khuy',em:'🙏',lesson:1,
   explain:['Nhờ sự giúp đỡ của người khác hoặc một yếu tố thuận lợi mà tránh được điều không may hoặc được lợi. Mang ý biết ơn, may mắn.'],
   usage:'多亏 (了) + người / việc，…… · Vế sau hay có 要不 / 不然 (nếu không thì …). Chỉ dùng cho kết quả TỐT.',
   collo:['多亏了你','多亏你提醒','多亏……，要不……','多亏有你在'],
   ex_zh:'多亏了他这句话，人们如梦初醒。',ex_py:'Duōkuīle tā zhè jù huà, rénmen rú mèng chū xǐng.',ex_vn:'Nhờ câu nói ấy của cậu bé, mọi người như bừng tỉnh.',
   exList:[
     {zh:'多亏了他这句话，人们如梦初醒。',py:'Duōkuīle tā zhè jù huà, rénmen rú mèng chū xǐng.',vn:'Nhờ câu nói ấy của cậu bé, mọi người như bừng tỉnh.'},
     {zh:'赵老师，谢谢您，多亏您给我那瓶药，很管用。',py:'Zhào lǎoshī, xièxie nín, duōkuī nín gěi wǒ nà píng yào, hěn guǎnyòng.',vn:'Cô Triệu, cảm ơn cô, may mà cô cho em lọ thuốc ấy, rất hiệu nghiệm.'},
     {zh:'今天搬家多亏有你在，你可帮我大忙了。',py:'Jīntiān bānjiā duōkuī yǒu nǐ zài, nǐ kě bāng wǒ dà máng le.',vn:'Hôm nay chuyển nhà may mà có bạn, bạn giúp tôi nhiều lắm.'}
   ],
   colloFull:[
     {zh:'多亏了你',py:'duōkuīle nǐ',vn:'may mà có bạn'},
     {zh:'多亏你提醒',py:'duōkuī nǐ tíxǐng',vn:'may nhờ bạn nhắc'},
     {zh:'多亏……，要不……',py:'duōkuī……, yàobù……',vn:'may mà …, nếu không thì …'},
     {zh:'多亏有你在',py:'duōkuī yǒu nǐ zài',vn:'may có bạn ở đây'},
     {zh:'多亏医生',py:'duōkuī yīshēng',vn:'nhờ có bác sĩ'}
   ],
   patterns:[
     {s:'多亏 (了) + người / việc，……',m:'Nhờ có … mà …'},
     {s:'多亏……，要不 / 不然……',m:'May mà …, nếu không thì …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'May mà bạn giúp tôi, nếu không thì ngay cả đề bài tôi cũng không hiểu.',answer:'多亏你帮我，要不我连题目都看不懂。',answerPy:'Duōkuī nǐ bāng wǒ, yàobù wǒ lián tímù dōu kàn bu dǒng.',
      note:'多亏 đứng đầu câu, vế sau 要不 nêu hậu quả nếu không có sự giúp đỡ.',pair:'连……都……'},
     {promptLang:'vi',prompt:'May mà anh ấy được người đi đường kịp thời đưa đến bệnh viện.',answer:'多亏他被路人及时送到了医院。',answerPy:'Duōkuī tā bèi lùrén jíshí sòngdàole yīyuàn.',
      note:'多亏 + cả một mệnh đề (ở đây là câu 被).',pair:'被'}
   ]},

  {n:30,zh:'连忙',py:'liánmáng',pos:'Phó từ',vn:'vội vàng, ngay lập tức',hv:'liên mang',em:'🏃',lesson:1,
   explain:['Làm ngay, vội vã vì tình huống thúc đẩy. Chỉ dùng để KỂ việc đã xảy ra, không dùng trong câu cầu khiến.'],
   usage:'连忙 + V: 连忙站起来, 连忙找来, 连忙说. ✗ 你连忙来吧 → ✓ 你赶快来吧.',
   collo:['连忙找来','连忙站起来','连忙打车','连忙说'],
   ex_zh:'一位球员连忙找来一把锯子把篮筐的底锯掉。',ex_py:'Yí wèi qiúyuán liánmáng zhǎolái yì bǎ jùzi bǎ lánkuāng de dǐ jùdiào.',ex_vn:'Một cầu thủ vội vàng tìm một cái cưa, cưa bỏ đáy giỏ.',
   exList:[
     {zh:'一位球员连忙找来一把锯子把篮筐的底锯掉。',py:'Yí wèi qiúyuán liánmáng zhǎolái yì bǎ jùzi bǎ lánkuāng de dǐ jùdiào.',vn:'Một cầu thủ vội vàng tìm một cái cưa, cưa bỏ đáy giỏ.'},
     {zh:'一觉醒来发现已经8点多了，李阳连忙穿好衣服往公司赶。',py:'Yí jiào xǐnglái fāxiàn yǐjīng bā diǎn duō le, Lǐ Yáng liánmáng chuānhǎo yīfu wǎng gōngsī gǎn.',vn:'Ngủ dậy thấy đã hơn 8 giờ, Lý Dương vội mặc quần áo chạy đến công ty.'},
     {zh:'一接到你的电话，我就连忙打车过来了。',py:'Yì jiēdào nǐ de diànhuà, wǒ jiù liánmáng dǎchē guòlai le.',vn:'Vừa nhận điện thoại của em là anh vội bắt taxi đến ngay.'}
   ],
   colloFull:[
     {zh:'连忙找来',py:'liánmáng zhǎolái',vn:'vội tìm đến'},
     {zh:'连忙站起来',py:'liánmáng zhàn qǐlai',vn:'vội đứng dậy'},
     {zh:'连忙打车',py:'liánmáng dǎchē',vn:'vội bắt taxi'},
     {zh:'连忙说',py:'liánmáng shuō',vn:'vội nói'},
     {zh:'连忙跑过去',py:'liánmáng pǎo guòqu',vn:'vội chạy tới'}
   ],
   patterns:[
     {s:'(一……就) + 连忙 + V',m:'Vừa … là vội làm gì (kể việc đã xảy ra)'},
     {s:'✗ 你连忙……吧 → ✓ 你赶快……吧',m:'连忙 không dùng trong câu mệnh lệnh'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cô giáo vừa bước vào, học sinh liền vội vàng đứng dậy.',answer:'老师一进来，学生们就连忙站了起来。',answerPy:'Lǎoshī yí jìnlái, xuéshengmen jiù liánmáng zhànle qǐlai.',
      note:'连忙 đứng sau 就, trước động từ.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Anh ấy vội nhặt chiếc ví rơi dưới đất lên.',answer:'他连忙把掉在地上的钱包捡了起来。',answerPy:'Tā liánmáng bǎ diào zài dì shang de qiánbāo jiǎnle qǐlai.',
      note:'Phó từ 连忙 đứng TRƯỚC 把.',pair:'把'}
   ]},

  {n:31,zh:'瞧',py:'qiáo',pos:'Động từ',vn:'nhìn, xem (khẩu ngữ)',hv:'tiều',em:'👀',lesson:1,
   explain:['Nghĩa như 看 nhưng là KHẨU NGỮ, hay dùng để gây chú ý: 你瞧！(Bạn xem kìa!)'],
   usage:'Bảng 词语搭配: 瞧 + 见 / 得起 / 不起 / 得上 / 不上. 瞧不起 = coi thường. Các cụm cố định như 看书, 看电视 không thay bằng 瞧.',
   collo:['你瞧','瞧见','瞧不起','瞧得上'],
   ex_zh:'你瞧，困扰人们很长时间的取球问题就这样被一个小孩子解决了。',ex_py:'Nǐ qiáo, kùnrǎo rénmen hěn cháng shíjiān de qǔ qiú wèntí jiù zhèyàng bèi yí ge xiǎo háizi jiějué le.',ex_vn:'Bạn xem, vấn đề lấy bóng làm khổ người ta bấy lâu cứ thế được một đứa trẻ giải quyết.',
   exList:[
     {zh:'你瞧，困扰人们很长时间的取球问题就这样被一个小孩子解决了。',py:'Nǐ qiáo, kùnrǎo rénmen hěn cháng shíjiān de qǔ qiú wèntí jiù zhèyàng bèi yí ge xiǎo háizi jiějué le.',vn:'Bạn xem, vấn đề lấy bóng làm khổ người ta bấy lâu cứ thế được một đứa trẻ giải quyết.'},
     {zh:'别瞧不起别人，每个人都有自己的长处。',py:'Bié qiáobuqǐ biérén, měi ge rén dōu yǒu zìjǐ de chángchu.',vn:'Đừng coi thường người khác, ai cũng có điểm mạnh của mình.'},
     {zh:'我刚才瞧见你哥哥在操场上投篮。',py:'Wǒ gāngcái qiáojiàn nǐ gēge zài cāochǎng shang tóu lán.',vn:'Vừa nãy tôi thấy anh cậu đang ném rổ trên sân.'}
   ],
   colloFull:[
     {zh:'你瞧',py:'nǐ qiáo',vn:'bạn xem kìa'},
     {zh:'瞧见',py:'qiáojiàn',vn:'nhìn thấy'},
     {zh:'瞧不起',py:'qiáobuqǐ',vn:'coi thường'},
     {zh:'瞧得起',py:'qiáodeqǐ',vn:'coi trọng'},
     {zh:'瞧得上',py:'qiáodeshàng',vn:'vừa mắt, ưng'}
   ],
   patterns:[
     {s:'瞧 + 见 / 得起 / 不起 / 得上 / 不上',m:'Nhìn thấy / coi trọng / coi thường / vừa mắt / không vừa mắt'},
     {s:'你瞧，……',m:'Bạn xem kìa — gây chú ý (khẩu ngữ)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cậu ấy tuy không cao nhưng bạn đừng có coi thường cậu ấy.',answer:'虽然他个子不高，但是你可别瞧不起他。',answerPy:'Suīrán tā gèzi bù gāo, dànshì nǐ kě bié qiáobuqǐ tā.',
      note:'瞧不起 + người = coi thường ai.',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Loại máy này tôi chưa từng thấy bao giờ.',answer:'这种机器我从来没瞧见过。',answerPy:'Zhè zhǒng jīqì wǒ cónglái méi qiáojiànguo.',
      note:'瞧见 = 看见 (khẩu ngữ).',pair:'从来没……过'}
   ]},

  {n:32,zh:'困扰',py:'kùnrǎo',pos:'Động từ',vn:'làm phiền, gây rối, làm khổ',hv:'khốn nhiễu',em:'😣',lesson:1,
   explain:['Làm cho người ta khó xử, phiền não trong một thời gian dài. Cũng làm danh từ: 带来困扰.'],
   usage:'困扰 + người: 困扰人们, 困扰了我很久; 被……困扰; 给……带来困扰.',
   collo:['困扰人们','被……困扰','带来困扰','困扰了很久'],
   ex_zh:'困扰人们很长时间的取球问题就这样被一个小孩子解决了。',ex_py:'Kùnrǎo rénmen hěn cháng shíjiān de qǔ qiú wèntí jiù zhèyàng bèi yí ge xiǎo háizi jiějué le.',ex_vn:'Vấn đề lấy bóng làm khổ người ta rất lâu cứ thế được một đứa trẻ giải quyết.',
   exList:[
     {zh:'困扰人们很长时间的取球问题就这样被一个小孩子解决了。',py:'Kùnrǎo rénmen hěn cháng shíjiān de qǔ qiú wèntí jiù zhèyàng bèi yí ge xiǎo háizi jiějué le.',vn:'Vấn đề lấy bóng làm khổ người ta rất lâu cứ thế được một đứa trẻ giải quyết.'},
     {zh:'失眠的问题困扰了他好几年。',py:'Shīmián de wèntí kùnrǎole tā hǎo jǐ nián.',vn:'Chứng mất ngủ làm anh ấy khổ sở mấy năm trời.'},
     {zh:'我不想给你带来困扰，所以一直没说。',py:'Wǒ bù xiǎng gěi nǐ dàilái kùnrǎo, suǒyǐ yìzhí méi shuō.',vn:'Tôi không muốn gây phiền cho bạn nên vẫn chưa nói.'}
   ],
   colloFull:[
     {zh:'困扰人们',py:'kùnrǎo rénmen',vn:'làm khổ mọi người'},
     {zh:'被……困扰',py:'bèi…… kùnrǎo',vn:'bị … làm phiền não'},
     {zh:'带来困扰',py:'dàilái kùnrǎo',vn:'gây phiền toái'},
     {zh:'困扰了很久',py:'kùnrǎole hěn jiǔ',vn:'làm khổ rất lâu'},
     {zh:'困扰我的问题',py:'kùnrǎo wǒ de wèntí',vn:'vấn đề khiến tôi khổ sở'}
   ],
   patterns:[
     {s:'N + 困扰了 + người + thời gian',m:'… làm ai khổ sở bao lâu'},
     {s:'被 + N + 困扰',m:'Bị … làm phiền não'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi bị vấn đề này làm khổ suốt một học kỳ.',answer:'我被这个问题困扰了一个学期。',answerPy:'Wǒ bèi zhège wèntí kùnrǎole yí ge xuéqī.',
      note:'Thời gian đặt sau động từ + 了.',pair:'被'},
     {promptLang:'vi',prompt:'Vấn đề làm khổ tôi bấy lâu, thầy vừa giải thích là tôi hiểu ngay.',answer:'困扰我很久的问题，老师一解释我就明白了。',answerPy:'Kùnrǎo wǒ hěn jiǔ de wèntí, lǎoshī yì jiěshì wǒ jiù míngbai le.',
      note:'困扰我很久的 làm định ngữ cho 问题.',pair:'一……就……'}
   ]},

  {n:33,zh:'思维',py:'sīwéi',pos:'Danh từ / Động từ',vn:'tư duy, suy nghĩ',hv:'tư duy',em:'🧠',lesson:1,
   explain:['Quá trình và cách con người suy nghĩ. Trùng khít với "tư duy" tiếng Việt.'],
   usage:'思维方式 (cách tư duy), 思维能力, 改变思维, 思维很活跃.',
   collo:['思维方式','思维能力','改变思维','思维很活跃'],
   ex_zh:'说白了，因为我们的思维像篮球一样被篮筐的底挡在了半空中。',ex_py:'Shuōbái le, yīnwèi wǒmen de sīwéi xiàng lánqiú yíyàng bèi lánkuāng de dǐ dǎng zàile bànkōng zhōng.',ex_vn:'Nói trắng ra, là vì tư duy của chúng ta cũng như quả bóng rổ, bị đáy giỏ chặn lại giữa không trung.',
   exList:[
     {zh:'说白了，因为我们的思维像篮球一样被篮筐的底挡在了半空中。',py:'Shuōbái le, yīnwèi wǒmen de sīwéi xiàng lánqiú yíyàng bèi lánkuāng de dǐ dǎng zàile bànkōng zhōng.',vn:'Nói trắng ra, là vì tư duy của chúng ta cũng như quả bóng rổ, bị đáy giỏ chặn lại giữa không trung.'},
     {zh:'学外语能帮助我们了解不同的思维方式。',py:'Xué wàiyǔ néng bāngzhù wǒmen liǎojiě bùtóng de sīwéi fāngshì.',vn:'Học ngoại ngữ giúp ta hiểu những cách tư duy khác nhau.'},
     {zh:'下棋能锻炼孩子的思维能力。',py:'Xià qí néng duànliàn háizi de sīwéi nénglì.',vn:'Chơi cờ rèn luyện năng lực tư duy cho trẻ.'}
   ],
   colloFull:[
     {zh:'思维方式',py:'sīwéi fāngshì',vn:'cách tư duy'},
     {zh:'思维能力',py:'sīwéi nénglì',vn:'năng lực tư duy'},
     {zh:'改变思维',py:'gǎibiàn sīwéi',vn:'thay đổi tư duy'},
     {zh:'思维很活跃',py:'sīwéi hěn huóyuè',vn:'tư duy rất nhạy bén'},
     {zh:'锻炼思维',py:'duànliàn sīwéi',vn:'rèn luyện tư duy'}
   ],
   patterns:[
     {s:'思维 + 方式 / 能力',m:'Cách tư duy / năng lực tư duy'},
     {s:'N 的思维 + 被 + …… + 挡住',m:'Tư duy bị … chặn lại (hình ảnh ẩn dụ của bài)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần thay đổi cách tư duy thì vấn đề sẽ trở nên đơn giản.',answer:'只要改变思维方式，问题就会变得简单。',answerPy:'Zhǐyào gǎibiàn sīwéi fāngshì, wèntí jiù huì biàn de jiǎndān.',
      note:'改变 + 思维方式.',pair:'只要……就……'},
     {promptLang:'vi',prompt:'Tư duy của chúng ta bị thói quen chặn lại rồi.',answer:'我们的思维被习惯挡住了。',answerPy:'Wǒmen de sīwéi bèi xíguàn dǎngzhù le.',
      note:'Ý chính của bài: thói quen là "đáy giỏ" chặn tư duy.',pair:'被'}
   ]},

  {n:34,zh:'呆',py:'dāi',pos:'Tính từ / Động từ',vn:'đần, ngây ra; nán lại, ở lại',hv:'ngai',em:'😶',lesson:1,
   explain:['Tính từ: ngây ra, đờ đẫn, không linh hoạt — 呆呆地 (ngây ra, máy móc).','Động từ (= 待): ở lại, nán lại một chỗ — 在家呆了一天.'],
   usage:'呆呆地 + V; 吓呆了 (sợ đờ người); (在) + nơi chốn + 呆 + thời gian; 发呆 (ngẩn người).',
   collo:['呆呆地','吓呆了','呆在家里','呆了一会儿'],
   ex_zh:'于是，我们呆呆地去搬梯子、造机器……',ex_py:'Yúshì, wǒmen dāidāi de qù bān tīzi, zào jīqì……',ex_vn:'Thế là chúng ta cứ ngây ra đi khiêng thang, chế máy…',
   exList:[
     {zh:'于是，我们呆呆地去搬梯子、造机器……',py:'Yúshì, wǒmen dāidāi de qù bān tīzi, zào jīqì……',vn:'Thế là chúng ta cứ ngây ra đi khiêng thang, chế máy…'},
     {zh:'听到这个消息，他一下子就呆了。',py:'Tīngdào zhège xiāoxi, tā yíxiàzi jiù dāi le.',vn:'Nghe tin này, anh ấy ngây người ra ngay.'},
     {zh:'周末我哪儿也没去，在家里呆了两天。',py:'Zhōumò wǒ nǎr yě méi qù, zài jiāli dāile liǎng tiān.',vn:'Cuối tuần tôi chẳng đi đâu, ở nhà suốt hai ngày.'}
   ],
   colloFull:[
     {zh:'呆呆地',py:'dāidāi de',vn:'ngây ra, máy móc'},
     {zh:'吓呆了',py:'xiàdāi le',vn:'sợ đờ người'},
     {zh:'呆在家里',py:'dāi zài jiāli',vn:'ở lì trong nhà'},
     {zh:'呆了一会儿',py:'dāile yíhuìr',vn:'nán lại một lúc'},
     {zh:'发呆',py:'fādāi',vn:'ngẩn người'}
   ],
   patterns:[
     {s:'呆呆地 + V',m:'Làm gì một cách ngây ngô, máy móc'},
     {s:'(在) + nơi chốn + 呆 + thời gian',m:'Ở lại đâu bao lâu'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Anh ấy vừa nghe tin đó là ngây người ra.',answer:'他一听到那个消息就呆了。',answerPy:'Tā yì tīngdào nàge xiāoxi jiù dāi le.',
      note:'呆 là tính từ, + 了 chỉ trạng thái mới xuất hiện.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Cậu bé bị con chó to doạ sợ đờ người.',answer:'小男孩被大狗吓呆了。',answerPy:'Xiǎo nánhái bèi dà gǒu xiàdāi le.',
      note:'吓呆 = doạ + kết quả "đờ ra".',pair:'被'}
   ]},

  {n:35,zh:'造成',py:'zàochéng',pos:'Động từ',vn:'tạo thành, gây ra',hv:'tạo thành',em:'💥',lesson:1,
   explain:['Gây ra một kết quả — thường là kết quả XẤU (khó khăn, lãng phí, tổn hại).'],
   usage:'Bảng 词语搭配: 造成 + 困难 / 印象 / 影响 / 浪费 / 危害 / 失眠 / 紧张. 给 / 对 + N + 造成 + 伤害. Khác 形成 (hình thành, trung tính: 形成习惯).',
   collo:['造成困难','造成浪费','造成影响','造成伤害'],
   ex_zh:'其实，世界上本来就没有太复杂的事，复杂都是我们自己造成的。',ex_py:'Qíshí, shìjiè shang běnlái jiù méiyǒu tài fùzá de shì, fùzá dōu shì wǒmen zìjǐ zàochéng de.',ex_vn:'Thật ra trên đời vốn chẳng có việc gì quá phức tạp, sự phức tạp đều do chính chúng ta tạo ra.',
   exList:[
     {zh:'其实，世界上本来就没有太复杂的事，复杂都是我们自己造成的。',py:'Qíshí, shìjiè shang běnlái jiù méiyǒu tài fùzá de shì, fùzá dōu shì wǒmen zìjǐ zàochéng de.',vn:'Thật ra trên đời vốn chẳng có việc gì quá phức tạp, sự phức tạp đều do chính chúng ta tạo ra.'},
     {zh:'每天大量饮酒确实给我的身体健康造成了很大的伤害。',py:'Měi tiān dàliàng yǐn jiǔ quèshí gěi wǒ de shēntǐ jiànkāng zàochéngle hěn dà de shānghài.',vn:'Ngày nào cũng uống nhiều rượu thật sự đã gây tổn hại lớn cho sức khoẻ của tôi.'},
     {zh:'情绪紧张容易造成失眠。',py:'Qíngxù jǐnzhāng róngyì zàochéng shīmián.',vn:'Tâm trạng căng thẳng dễ gây mất ngủ.'}
   ],
   colloFull:[
     {zh:'造成困难',py:'zàochéng kùnnan',vn:'gây khó khăn'},
     {zh:'造成浪费',py:'zàochéng làngfèi',vn:'gây lãng phí'},
     {zh:'造成影响',py:'zàochéng yǐngxiǎng',vn:'gây ảnh hưởng'},
     {zh:'造成伤害',py:'zàochéng shānghài',vn:'gây tổn hại'},
     {zh:'造成失眠',py:'zàochéng shīmián',vn:'gây mất ngủ'}
   ],
   patterns:[
     {s:'给 / 对 + N + 造成 + 伤害 / 影响',m:'Gây tổn hại / ảnh hưởng cho …'},
     {s:'…… + 是 + người + 造成的',m:'… là do ai gây ra (ôn 是……的)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chuyện này là do chính tôi gây ra.',answer:'这件事是我自己造成的。',answerPy:'Zhè jiàn shì shì wǒ zìjǐ zàochéng de.',
      note:'是 + người + 造成的: nhấn mạnh ai gây ra.',pair:'是……的'},
     {promptLang:'vi',prompt:'Chơi điện thoại quá lâu không chỉ gây mất ngủ mà cũng ảnh hưởng đến việc học.',answer:'玩手机太久不仅会造成失眠，也会影响学习。',answerPy:'Wán shǒujī tài jiǔ bùjǐn huì zàochéng shīmián, yě huì yǐngxiǎng xuéxí.',
      note:'造成失眠 là cụm trong bảng 词语搭配.',pair:'不仅……也……'}
   ]},

  {n:36,zh:'仿佛',py:'fǎngfú',pos:'Phó từ / Động từ',vn:'dường như; giống như',hv:'phảng phất',em:'🌫️',lesson:1,
   explain:['Phó từ: dường như, hình như (văn viết) — 仿佛 + V / cụm, hay đi với 似的 / 一样.','Động từ: giống như — 生活仿佛篮筐.'],
   usage:'仿佛……似的 / 仿佛……一样. Đứng sau chủ ngữ. Văn viết hơn 好像.',
   collo:['仿佛……似的','仿佛……一样','仿佛一夜之间'],
   ex_zh:'生活仿佛篮筐，许多时候，我们需要的只不过是一把锯子。',ex_py:'Shēnghuó fǎngfú lánkuāng, xǔduō shíhou, wǒmen xūyào de zhǐ búguò shì yì bǎ jùzi.',ex_vn:'Cuộc sống giống như chiếc giỏ, nhiều khi thứ ta cần chỉ là một cái cưa.',
   exList:[
     {zh:'生活仿佛篮筐，许多时候，我们需要的只不过是一把锯子。',py:'Shēnghuó fǎngfú lánkuāng, xǔduō shíhou, wǒmen xūyào de zhǐ búguò shì yì bǎ jùzi.',vn:'Cuộc sống giống như chiếc giỏ, nhiều khi thứ ta cần chỉ là một cái cưa.'},
     {zh:'他一边听，一边在本子上记着什么，仿佛对我的发言挺感兴趣似的。',py:'Tā yìbiān tīng, yìbiān zài běnzi shang jìzhe shénme, fǎngfú duì wǒ de fāyán tǐng gǎn xìngqù shìde.',vn:'Anh ấy vừa nghe vừa ghi gì đó vào sổ, dường như khá hứng thú với bài phát biểu của tôi.'},
     {zh:'经历了那件事后，我仿佛一夜之间长大成人了。',py:'Jīnglìle nà jiàn shì hòu, wǒ fǎngfú yí yè zhī jiān zhǎngdà chéngrén le.',vn:'Trải qua chuyện đó, tôi dường như trưởng thành chỉ sau một đêm.'}
   ],
   colloFull:[
     {zh:'仿佛……似的',py:'fǎngfú…… shìde',vn:'dường như … vậy'},
     {zh:'仿佛……一样',py:'fǎngfú…… yíyàng',vn:'giống như …'},
     {zh:'仿佛一夜之间',py:'fǎngfú yí yè zhī jiān',vn:'như chỉ sau một đêm'},
     {zh:'仿佛在做梦',py:'fǎngfú zài zuòmèng',vn:'như đang nằm mơ'}
   ],
   patterns:[
     {s:'Chủ ngữ + 仿佛 + V / cụm + 似的',m:'Dường như … vậy'},
     {s:'A + 仿佛 + B',m:'A giống như B (động từ)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Anh ấy vừa về quê là như được trở lại thời thơ ấu.',answer:'他一回到老家，就仿佛回到了小时候。',answerPy:'Tā yì huídào lǎojiā, jiù fǎngfú huídàole xiǎo shíhou.',
      note:'仿佛 đứng sau 就, trước động từ.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Tuy mới gặp lần đầu nhưng họ như là bạn cũ vậy.',answer:'虽然是第一次见面，但是他们仿佛是老朋友似的。',answerPy:'Suīrán shì dì-yī cì jiànmiàn, dànshì tāmen fǎngfú shì lǎo péngyou shìde.',
      note:'仿佛……似的 là cặp hay đi cùng nhau.',pair:'虽然……但是……'}
   ]},

  {n:37,zh:'阻碍',py:'zǔ\'ài',pos:'Động từ',vn:'ngăn cản, cản trở',hv:'trở ngại',em:'🚫',lesson:1,
   explain:['Làm cho sự việc không thể tiến lên thuận lợi. Cũng làm danh từ: 遇到阻碍.'],
   usage:'阻碍 + 发展 / 进步 / 交通 / 我们; 遇到阻碍. Trang trọng hơn 挡.',
   collo:['阻碍发展','阻碍交通','阻碍我们','遇到阻碍'],
   ex_zh:'我们需要的只不过是一把锯子，来锯掉那些阻碍我们的“筐底”。',ex_py:'Wǒmen xūyào de zhǐ búguò shì yì bǎ jùzi, lái jùdiào nàxiē zǔ\'ài wǒmen de "kuāngdǐ".',ex_vn:'Thứ chúng ta cần chỉ là một cái cưa để cưa bỏ những "đáy giỏ" đang cản trở mình.',
   exList:[
     {zh:'我们需要的只不过是一把锯子，来锯掉那些阻碍我们的“筐底”。',py:'Wǒmen xūyào de zhǐ búguò shì yì bǎ jùzi, lái jùdiào nàxiē zǔ\'ài wǒmen de "kuāngdǐ".',vn:'Thứ chúng ta cần chỉ là một cái cưa để cưa bỏ những "đáy giỏ" đang cản trở mình.'},
     {zh:'害怕犯错会阻碍我们学好外语。',py:'Hàipà fàn cuò huì zǔ\'ài wǒmen xuéhǎo wàiyǔ.',vn:'Sợ mắc lỗi sẽ cản trở chúng ta học giỏi ngoại ngữ.'},
     {zh:'路上停了很多车，阻碍了交通。',py:'Lù shang tíngle hěn duō chē, zǔ\'àile jiāotōng.',vn:'Trên đường đỗ nhiều xe, cản trở giao thông.'}
   ],
   colloFull:[
     {zh:'阻碍发展',py:'zǔ\'ài fāzhǎn',vn:'cản trở phát triển'},
     {zh:'阻碍交通',py:'zǔ\'ài jiāotōng',vn:'cản trở giao thông'},
     {zh:'阻碍我们',py:'zǔ\'ài wǒmen',vn:'cản trở chúng ta'},
     {zh:'遇到阻碍',py:'yùdào zǔ\'ài',vn:'gặp trở ngại'},
     {zh:'阻碍进步',py:'zǔ\'ài jìnbù',vn:'cản trở tiến bộ'}
   ],
   patterns:[
     {s:'N + 阻碍 + 发展 / 进步 / 交通',m:'… cản trở phát triển / tiến bộ / giao thông'},
     {s:'阻碍 + người + V',m:'Cản trở ai làm gì'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Giao thông bị trận mưa lớn cản trở rồi.',answer:'交通被大雨阻碍了。',answerPy:'Jiāotōng bèi dàyǔ zǔ\'ài le.',
      note:'阻碍交通 → bị động: 交通被……阻碍了.',pair:'被'},
     {promptLang:'vi',prompt:'Chỉ cần không sợ mắc lỗi thì không gì cản trở được bạn.',answer:'只要不怕犯错，就没有什么能阻碍你。',answerPy:'Zhǐyào bú pà fàn cuò, jiù méiyǒu shénme néng zǔ\'ài nǐ.',
      note:'没有什么能 + V = không gì có thể ….',pair:'只要……就……'}
   ]},

  {n:38,zh:'马萨诸塞州',py:'Mǎsàzhūsài Zhōu',pos:'Danh từ riêng',vn:'bang Massachusetts (Hoa Kỳ)',hv:'Mã Tát Chư Tắc châu',em:'🗺️',lesson:1,
   explain:['Một bang ở miền đông bắc nước Mỹ, nơi môn bóng rổ ra đời năm 1891.'],
   usage:'州 = bang (của Mỹ): 加州 (California), 纽约州. Nói từ lớn đến nhỏ: 美国马萨诸塞州.',
   collo:['美国马萨诸塞州','马萨诸塞州的学校'],
   ex_zh:'篮球运动是1891年由美国马萨诸塞州的体育教师詹姆士·奈史密斯博士发明的。',ex_py:'Lánqiú yùndòng shì yī bā jiǔ yī nián yóu Měiguó Mǎsàzhūsài Zhōu de tǐyù jiàoshī Zhānmǔshì·Nàishǐmìsī bóshì fāmíng de.',ex_vn:'Môn bóng rổ do tiến sĩ James Naismith, giáo viên thể dục ở bang Massachusetts nước Mỹ, phát minh năm 1891.',
   exList:[
     {zh:'篮球运动是1891年由美国马萨诸塞州的体育教师詹姆士·奈史密斯博士发明的。',py:'Lánqiú yùndòng shì yī bā jiǔ yī nián yóu Měiguó Mǎsàzhūsài Zhōu de tǐyù jiàoshī Zhānmǔshì·Nàishǐmìsī bóshì fāmíng de.',vn:'Môn bóng rổ do tiến sĩ James Naismith, giáo viên thể dục ở bang Massachusetts nước Mỹ, phát minh năm 1891.'},
     {zh:'哈佛大学就在马萨诸塞州。',py:'Hāfó Dàxué jiù zài Mǎsàzhūsài Zhōu.',vn:'Đại học Harvard nằm ở bang Massachusetts.'},
     {zh:'马萨诸塞州的冬天特别冷。',py:'Mǎsàzhūsài Zhōu de dōngtiān tèbié lěng.',vn:'Mùa đông ở Massachusetts đặc biệt lạnh.'}
   ],
   colloFull:[
     {zh:'美国马萨诸塞州',py:'Měiguó Mǎsàzhūsài Zhōu',vn:'bang Massachusetts nước Mỹ'},
     {zh:'马萨诸塞州的学校',py:'Mǎsàzhūsài Zhōu de xuéxiào',vn:'trường học ở Massachusetts'},
     {zh:'在马萨诸塞州',py:'zài Mǎsàzhūsài Zhōu',vn:'ở Massachusetts'},
     {zh:'马萨诸塞州的冬天',py:'Mǎsàzhūsài Zhōu de dōngtiān',vn:'mùa đông ở Massachusetts'}
   ],
   patterns:[
     {s:'Nước + 州 / 省 + thành phố',m:'Tiếng Trung nói địa danh từ lớn đến nhỏ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bóng rổ ra đời ở bang Massachusetts.',answer:'篮球是在马萨诸塞州产生的。',answerPy:'Lánqiú shì zài Mǎsàzhūsài Zhōu chǎnshēng de.',
      note:'是……的 nhấn mạnh nơi chốn của việc đã xảy ra.',pair:'是……的'},
     {promptLang:'vi',prompt:'Ở Massachusetts cứ đến mùa đông là rất lạnh.',answer:'马萨诸塞州一到冬天就特别冷。',answerPy:'Mǎsàzhūsài Zhōu yí dào dōngtiān jiù tèbié lěng.',
      note:'Tên riêng làm chủ ngữ, không cần 在.',pair:'一……就……'}
   ]},

  {n:39,zh:'詹姆士·奈史密斯',py:'Zhānmǔshì·Nàishǐmìsī',pos:'Danh từ riêng',vn:'James Naismith (người phát minh bóng rổ)',hv:'Chiêm Mỗ Sĩ · Nại Sử Mật Tư',em:'👨‍🏫',lesson:1,
   explain:['Tiến sĩ, giáo viên thể dục ở Mỹ, năm 1891 nghĩ ra môn bóng rổ. Tên người phương Tây viết TÊN trước, HỌ sau, giữa có dấu chấm giữa (·).'],
   usage:'Trong bài thường gọi tắt bằng họ: 奈史密斯. Chức danh đứng sau tên: 奈史密斯博士.',
   collo:['奈史密斯博士','詹姆士·奈史密斯发明了篮球'],
   ex_zh:'詹姆士·奈史密斯是一位体育教师，他发明了篮球运动。',ex_py:'Zhānmǔshì·Nàishǐmìsī shì yí wèi tǐyù jiàoshī, tā fāmíngle lánqiú yùndòng.',ex_vn:'James Naismith là một giáo viên thể dục, ông đã phát minh ra môn bóng rổ.',
   exList:[
     {zh:'詹姆士·奈史密斯是一位体育教师，他发明了篮球运动。',py:'Zhānmǔshì·Nàishǐmìsī shì yí wèi tǐyù jiàoshī, tā fāmíngle lánqiú yùndòng.',vn:'James Naismith là một giáo viên thể dục, ông đã phát minh ra môn bóng rổ.'},
     {zh:'那年的冬天特别冷，奈史密斯想出了一个在室内进行的比赛项目。',py:'Nà nián de dōngtiān tèbié lěng, Nàishǐmìsī xiǎngchūle yí ge zài shìnèi jìnxíng de bǐsài xiàngmù.',vn:'Mùa đông năm ấy rất lạnh, Naismith nghĩ ra một môn thi đấu chơi trong nhà.'},
     {zh:'奈史密斯博士从桃子筐的游戏中得到了启发。',py:'Nàishǐmìsī bóshì cóng táozi kuāng de yóuxì zhōng dédàole qǐfā.',vn:'Tiến sĩ Naismith được gợi ý từ trò chơi giỏ đào.'}
   ],
   colloFull:[
     {zh:'奈史密斯博士',py:'Nàishǐmìsī bóshì',vn:'tiến sĩ Naismith'},
     {zh:'詹姆士·奈史密斯发明了篮球',py:'Zhānmǔshì·Nàishǐmìsī fāmíngle lánqiú',vn:'James Naismith phát minh ra bóng rổ'},
     {zh:'体育教师詹姆士·奈史密斯',py:'tǐyù jiàoshī Zhānmǔshì·Nàishǐmìsī',vn:'thầy thể dục James Naismith'},
     {zh:'奈史密斯所在的学校',py:'Nàishǐmìsī suǒ zài de xuéxiào',vn:'ngôi trường nơi Naismith làm việc'}
   ],
   patterns:[
     {s:'Tên · Họ (+ chức danh)',m:'Cách viết tên người phương Tây: 詹姆士·奈史密斯博士'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bóng rổ là do James Naismith phát minh.',answer:'篮球是詹姆士·奈史密斯发明的。',answerPy:'Lánqiú shì Zhānmǔshì·Nàishǐmìsī fāmíng de.',
      note:'是 + người + V + 的: nhấn mạnh người làm.',pair:'是……的'},
     {promptLang:'vi',prompt:'Naismith đã được trò chơi của người dân địa phương gợi ý.',answer:'奈史密斯被当地人的游戏启发了。',answerPy:'Nàishǐmìsī bèi dāngdì rén de yóuxì qǐfā le.',
      note:'启发 làm động từ trong câu 被.',pair:'被'}
   ]}
];

// ══════════════════════════════════════════
// BÀI ĐỌC — một bài liền (file nghe 13-1 đọc liền cả bài), 4 đoạn như sách
// ══════════════════════════════════════════
var dialogData = [{
  scene:'课文 · 锯掉生活的“筐底”',
  preQuiz:[
    {q:'篮球运动是谁发明的？',opts:['一位体育教师','一位工程师','一个小男孩'],ans:0},
    {q:'奈史密斯为什么想发明一种新的比赛项目？',opts:['学生们不喜欢足球','冬天太冷，学校缺乏室内球类比赛项目','学校要举行运动会'],ans:1},
    {q:'他是从哪儿得到启发的？',opts:['工程师制造的机器','一场足球比赛','当地人把球扔进桃子筐的游戏'],ans:2},
    {q:'最早的篮球比赛用什么球？',opts:['足球','网球','桃子'],ans:0},
    {q:'最早的比赛怎么决定输赢？',opts:['看谁跑得快','按得分多少','由观众决定'],ans:1},
    {q:'每当球投进时，要怎么做？',opts:['换一个新的篮筐','比赛马上结束','有人踩着梯子上去把球取出来'],ans:2},
    {q:'比赛为什么不能顺畅地进行？',opts:['要一再取球，比赛断断续续','球迷太多了','运动员经常受伤'],ans:0},
    {q:'那位工程师做了什么？',opts:['锯掉了篮筐的底','制造了一种能把球弹出来的机器','发明了新的篮球'],ans:1},
    {q:'最后是谁想出了最简单的办法？',opts:['一位球员','那位工程师','一个上幼儿园的小男孩'],ans:2},
    {q:'小男孩的办法是什么？',opts:['把篮筐的底去掉','换一个大一点儿的篮筐','让人一直站在梯子上'],ans:0},
    {q:'作者认为，为什么那么多人都没想到这个办法？',opts:['这个办法太复杂了','我们的思维被“筐底”挡住了','大家都不相信小孩子'],ans:1},
    {q:'这篇课文想告诉我们什么？',opts:['篮球运动很难学','做事要多准备一些工具','很多事本来不复杂，是我们自己想复杂了'],ans:2}
  ],
  lines:[
    {sp:0,zh:'篮球运动是1891年由美国马萨诸塞州的体育教师詹姆士·奈史密斯博士发明的。那年的冬天特别冷，奈史密斯所在的训练学校缺乏在室内进行的球类比赛项目，他从当地人把球扔进桃子筐（当地产桃子，各家各户都备有装桃子的专用篮筐）的游戏中得到了启发，将两只篮筐分别安装在体育馆两边看台的栏杆上，学生分为甲乙两队，以足球为比赛工具向篮内投，按得分多少决定输赢。',
     py:'Lánqiú yùndòng shì yī bā jiǔ yī nián yóu Měiguó Mǎsàzhūsài Zhōu de tǐyù jiàoshī Zhānmǔshì·Nàishǐmìsī bóshì fāmíng de. Nà nián de dōngtiān tèbié lěng, Nàishǐmìsī suǒ zài de xùnliàn xuéxiào quēfá zài shìnèi jìnxíng de qiúlèi bǐsài xiàngmù, tā cóng dāngdì rén bǎ qiú rēngjìn táozi kuāng (dāngdì chǎn táozi, gè jiā gè hù dōu bèi yǒu zhuāng táozi de zhuānyòng lánkuāng) de yóuxì zhōng dédàole qǐfā, jiāng liǎng zhī lánkuāng fēnbié ānzhuāng zài tǐyùguǎn liǎng biān kàntái de lángān shang, xuésheng fēnwéi jiǎ yǐ liǎng duì, yǐ zúqiú wéi bǐsài gōngjù xiàng lán nèi tóu, àn défēn duōshao juédìng shūyíng.',
     vn:'Môn bóng rổ do tiến sĩ James Naismith, giáo viên thể dục ở bang Massachusetts nước Mỹ, phát minh năm 1891. Mùa đông năm ấy đặc biệt lạnh, ngôi trường huấn luyện nơi Naismith làm việc lại thiếu những môn thi đấu bóng chơi trong nhà. Ông nảy ra ý tưởng từ trò chơi ném bóng vào giỏ đào của người dân địa phương (vùng này trồng đào, nhà nào cũng có sẵn giỏ chuyên để đựng đào), bèn gắn hai chiếc giỏ lần lượt lên lan can khán đài ở hai bên nhà thi đấu. Học sinh chia thành hai đội Giáp và Ất, lấy quả bóng đá làm dụng cụ thi đấu, ném vào trong giỏ, căn cứ số điểm ghi được nhiều hay ít để phân thắng thua.'},
    {sp:0,zh:'这项运动很快流行起来。不过，由于栏杆上固定的是真正的筐，每当球投进时，就得有一个人踩着梯子上去把球取出来。这样的行为必须一再地重复，为此，比赛不得不断断续续地进行，缺少了激烈紧张的气氛，连运动员都不满意，更何况看比赛的球迷呢？为了解决这个问题，大家纷纷出主意，想出了很多取球的办法。有一位工程师甚至专门制造出一种机器，在下面一拉篮筐就能把球弹出来。可是，这些办法都没能让比赛顺畅起来。',
     py:'Zhè xiàng yùndòng hěn kuài liúxíng qǐlai. Búguò, yóuyú lángān shang gùdìng de shì zhēnzhèng de kuāng, měi dāng qiú tóujìn shí, jiù děi yǒu yí ge rén cǎizhe tīzi shàngqu bǎ qiú qǔ chūlai. Zhèyàng de xíngwéi bìxū yízài de chóngfù, wèi cǐ, bǐsài bùdébù duànduàn xùxù de jìnxíng, quēshǎole jīliè jǐnzhāng de qìfēn, lián yùndòngyuán dōu bù mǎnyì, gèng hékuàng kàn bǐsài de qiúmí ne? Wèile jiějué zhège wèntí, dàjiā fēnfēn chū zhǔyi, xiǎngchūle hěn duō qǔ qiú de bànfǎ. Yǒu yí wèi gōngchéngshī shènzhì zhuānmén zhìzào chū yì zhǒng jīqì, zài xiàmiàn yì lā lánkuāng jiù néng bǎ qiú tán chūlai. Kěshì, zhèxiē bànfǎ dōu méi néng ràng bǐsài shùnchàng qǐlai.',
     vn:'Môn thể thao này nhanh chóng trở nên thịnh hành. Có điều, vì thứ gắn cố định trên lan can là một chiếc giỏ thật, nên mỗi lần bóng vào, lại phải có một người trèo thang lên lấy bóng ra. Việc này cứ phải lặp đi lặp lại, vì thế trận đấu đành diễn ra ngắt quãng, thiếu hẳn bầu không khí sôi nổi căng thẳng; ngay cả vận động viên cũng không hài lòng, huống chi là những người hâm mộ đến xem? Để giải quyết vấn đề này, mọi người thi nhau góp ý, nghĩ ra rất nhiều cách lấy bóng. Có một kỹ sư thậm chí còn chế tạo riêng một loại máy, chỉ cần kéo ở bên dưới là giỏ bật được bóng ra. Thế nhưng, những cách ấy đều không làm cho trận đấu trôi chảy lên được.'},
    {sp:0,zh:'几年后的一天，一个上幼儿园的小男孩跟着父亲从一群正在进行篮球比赛的人旁边经过。看到大人们一次次辛苦地取球，小男孩好奇地问父亲：“何必这么麻烦呢？把篮筐的底去掉不就行了吗？”多亏了他这句话，人们如梦初醒，一位球员连忙找来一把锯子把篮筐的底锯掉。你瞧，困扰人们很长时间的取球问题就这样被一个小孩子解决了。',
     py:'Jǐ nián hòu de yì tiān, yí ge shàng yòu\'éryuán de xiǎo nánhái gēnzhe fùqīn cóng yì qún zhèngzài jìnxíng lánqiú bǐsài de rén pángbiān jīngguò. Kàndào dàrénmen yí cì cì xīnkǔ de qǔ qiú, xiǎo nánhái hàoqí de wèn fùqīn: "Hébì zhème máfan ne? Bǎ lánkuāng de dǐ qùdiào bú jiù xíng le ma?" Duōkuīle tā zhè jù huà, rénmen rú mèng chū xǐng, yí wèi qiúyuán liánmáng zhǎolái yì bǎ jùzi bǎ lánkuāng de dǐ jùdiào. Nǐ qiáo, kùnrǎo rénmen hěn cháng shíjiān de qǔ qiú wèntí jiù zhèyàng bèi yí ge xiǎo háizi jiějué le.',
     vn:'Vài năm sau, một hôm, một cậu bé đang học mẫu giáo theo bố đi ngang qua một nhóm người đang thi đấu bóng rổ. Thấy người lớn hết lần này đến lần khác vất vả lấy bóng, cậu bé tò mò hỏi bố: "Sao phải phiền phức thế ạ? Bỏ đáy giỏ đi chẳng phải là xong sao?" Nhờ câu nói ấy, mọi người như bừng tỉnh giấc mộng, một cầu thủ vội vàng tìm một cái cưa, cưa bỏ đáy giỏ. Bạn xem, vấn đề lấy bóng làm khổ mọi người bấy lâu cứ thế được một đứa trẻ giải quyết.'},
    {sp:0,zh:'去掉篮筐的底，本是一件简单的事，可为什么那么多人都没有想到呢？说白了，因为我们的思维像篮球一样被篮筐的底挡在了半空中。于是，我们呆呆地去搬梯子、造机器……其实，世界上本来就没有太复杂的事，复杂都是我们自己造成的。生活仿佛篮筐，许多时候，我们需要的只不过是一把锯子，来锯掉那些阻碍我们的“筐底”。',
     py:'Qùdiào lánkuāng de dǐ, běn shì yí jiàn jiǎndān de shì, kě wèi shénme nàme duō rén dōu méiyǒu xiǎngdào ne? Shuōbái le, yīnwèi wǒmen de sīwéi xiàng lánqiú yíyàng bèi lánkuāng de dǐ dǎng zàile bànkōng zhōng. Yúshì, wǒmen dāidāi de qù bān tīzi, zào jīqì…… Qíshí, shìjiè shang běnlái jiù méiyǒu tài fùzá de shì, fùzá dōu shì wǒmen zìjǐ zàochéng de. Shēnghuó fǎngfú lánkuāng, xǔduō shíhou, wǒmen xūyào de zhǐ búguò shì yì bǎ jùzi, lái jùdiào nàxiē zǔ\'ài wǒmen de "kuāngdǐ".',
     vn:'Bỏ đáy giỏ đi vốn là chuyện đơn giản, vậy mà sao bao nhiêu người đều không nghĩ ra? Nói trắng ra, là vì tư duy của chúng ta cũng giống quả bóng rổ, bị đáy giỏ chặn lại lơ lửng giữa không trung. Thế là chúng ta cứ ngây ra đi khiêng thang, chế máy… Thật ra trên đời vốn chẳng có việc gì quá phức tạp, sự phức tạp đều do chính chúng ta tạo ra. Cuộc sống giống như chiếc giỏ, nhiều khi thứ chúng ta cần chỉ là một cái cưa, để cưa bỏ những "đáy giỏ" đang cản trở mình.'}
  ]
}];

// ══════════════════════════════════════════
// PHÂN BIỆT TỪ GẦN NGHĨA 近义词辨析 — 激烈/强烈 lấy từ sách (tr. 122–123)
// ══════════════════════════════════════════
var synonymData = [
  {pair:'激烈 — 强烈',
   same:'Đều là tính từ, đều có nghĩa MẠNH MẼ, DỮ DỘI.',
   sameEx:{zh:'我不顾父母的激烈／强烈反对，偷偷地报考了表演专业。',vn:'Tôi bất chấp sự phản đối kịch liệt của bố mẹ, lén đăng ký thi ngành biểu diễn.'},
   items:[
     {word:'激烈',points:[
       'Nghĩa thiên về GAY GẮT, CĂNG THẲNG.',
       'Hay tả lời lẽ (tranh luận), cảm xúc, thi đấu, đấu tranh.',
       'Kết hợp: 激烈的比赛 / 争论 / 竞争, 激烈运动.'
     ],ex:[{zh:'人类最早什么时候开始用火，一直是学者激烈争论的问题。',vn:'Loài người bắt đầu dùng lửa từ bao giờ vẫn luôn là vấn đề giới học giả tranh luận gay gắt.'},
          {zh:'人在激烈运动时，会出很多汗。',vn:'Khi vận động mạnh, con người ra rất nhiều mồ hôi.'}]},
     {word:'强烈',points:[
       'Nghĩa thiên về MẠNH, CÓ SỨC.',
       'Hay tả ánh sáng, dòng điện, màu sắc, mùi vị, hoặc tình cảm, tư tưởng, yêu cầu của con người.',
       'Kết hợp: 强烈的阳光 / 反响 / 香味, 强烈要求 / 强烈反对.'
     ],ex:[{zh:'文章发表以后立刻引起了读者的强烈反响。',vn:'Bài viết vừa đăng liền gây tiếng vang mạnh mẽ trong độc giả.'},
          {zh:'这里夏天尽管阳光的照射很强烈，但白天气温很少超过35℃。',vn:'Ở đây mùa hè tuy nắng chiếu rất gắt nhưng nhiệt độ ban ngày hiếm khi vượt quá 35℃.'}]}
   ],
   quiz:[
     {sentence:'这种蔬菜有＿＿的香味，它既可以生吃，又可熟食。',options:['激烈','强烈'],answer:1,
      why:'Mùi vị (香味, 气味) mạnh → 强烈. 激烈 không tả mùi vị.'},
     {sentence:'明天我去一家公司面试，听说竞争很＿＿。',options:['激烈','强烈'],answer:0,
      why:'Cạnh tranh gay gắt, căng thẳng → 激烈.'},
     {sentence:'当晚的比赛紧张、＿＿，两队都打出了很高的水平。',options:['激烈','强烈'],answer:0,
      why:'Tả trận đấu (比赛), đi cùng 紧张 → 激烈.'},
     {sentence:'学生们＿＿要求重新安排考试。',options:['激烈','强烈'],answer:1,
      why:'Yêu cầu, mong muốn của con người mạnh mẽ → 强烈 (làm trạng ngữ: 强烈要求).'}
   ],
   sgk:{
     chung:{t:'都是形容词，都有势猛、厉害的意思。',vn:'Đều là tính từ, đều có nghĩa mạnh mẽ, dữ dội.',vd:'我不顾父母的激烈／强烈反对，偷偷地报考了表演专业。',vdVn:'Tôi bất chấp sự phản đối kịch liệt của bố mẹ, lén đăng ký thi ngành biểu diễn.'},
     khac:[
       {a:{t:'词义侧重尖锐紧张。',vn:'Nghĩa thiên về gay gắt, căng thẳng.',vd:'人类最早什么时候开始用火，一直是学者激烈争论的问题。',vdVn:'Loài người bắt đầu dùng lửa từ bao giờ vẫn luôn là vấn đề giới học giả tranh luận gay gắt.'},
        b:{t:'词义侧重强劲有力。',vn:'Nghĩa thiên về mạnh, có sức.',vd:'文章发表以后立刻引起了读者的强烈反响。',vdVn:'Bài viết vừa đăng liền gây tiếng vang mạnh mẽ trong độc giả.'}},
       {a:{t:'多用于形容言论、情绪或比赛、斗争等。',vn:'Hay dùng tả lời lẽ, cảm xúc hoặc thi đấu, đấu tranh.',vd:'人在激烈运动时，会出很多汗。',vdVn:'Khi vận động mạnh, con người ra rất nhiều mồ hôi.'},
        b:{t:'多用于形容光线、电流、色彩、气味或人的感情、思想、要求等。',vn:'Hay dùng tả ánh sáng, dòng điện, màu sắc, mùi vị hoặc tình cảm, tư tưởng, yêu cầu của con người.',vd:'这里夏天尽管阳光的照射很强烈，但白天气温很少超过35℃。',vdVn:'Ở đây mùa hè tuy nắng chiếu rất gắt nhưng nhiệt độ ban ngày hiếm khi vượt quá 35℃.'}}
     ],
     lamThu:[
       {s:'这种蔬菜有＿＿的香味，它既可以生吃，又可熟食。',dap:[false,true],mau:true,
        giai:'Mùi vị (气味) mạnh → chỉ 强烈 (câu mẫu của sách).'},
       {s:'明天我去一家公司面试，听说竞争很＿＿。',dap:[true,false],
        giai:'Cạnh tranh gay gắt, căng thẳng → 激烈.'},
       {s:'当晚的比赛紧张、＿＿，两队都打出了很高的水平。',dap:[true,false],
        giai:'Tả trận đấu → 激烈.'},
       {s:'学生们＿＿要求重新安排考试。',dap:[false,true],
        giai:'Yêu cầu của con người → 强烈要求.'}
     ]
   }},

  {pair:'何必 — 不必',
   same:'Đều có nghĩa "không cần phải".',
   sameEx:{zh:'你何必亲自去呢？／你不必亲自去。',vn:'Bạn cần gì phải tự đi? / Bạn không cần tự đi.'},
   items:[
     {word:'何必',points:[
       'Giọng PHẢN VẤN: cuối câu thường có 呢 và dấu hỏi.',
       'Mang sắc thái khuyên can, trách nhẹ.',
       'Không đứng một mình để trả lời.'
     ],ex:[{zh:'何必这么麻烦呢？',vn:'Cần gì phiền phức thế?'},
          {zh:'食堂楼下就有个小超市，何必去学校外边呢？',vn:'Ngay dưới nhà ăn có siêu thị nhỏ, cần gì phải ra ngoài trường?'}]},
     {word:'不必',points:[
       'Câu TRẦN THUẬT bình thường: "không cần".',
       'Đứng một mình trả lời được: 不必了。',
       'Là dạng phủ định của 必须.'
     ],ex:[{zh:'你不必亲自送，叫个快递就行了。',vn:'Bạn không cần tự mang đi, gọi chuyển phát nhanh là được.'},
          {zh:'——要我帮忙吗？——不必了，谢谢。',vn:'— Có cần tôi giúp không? — Không cần đâu, cảm ơn.'}]}
   ],
   quiz:[
     {sentence:'＿＿这么麻烦呢？把篮筐的底去掉不就行了吗？',options:['何必','不必'],answer:0,
      why:'Câu phản vấn, có 呢 và dấu hỏi → 何必.'},
     {sentence:'谢谢你，＿＿送了，我自己回去吧。',options:['何必','不必'],answer:1,
      why:'Câu trần thuật, từ chối lịch sự → 不必. 何必 phải đi với giọng hỏi ngược.'},
     {sentence:'只是一场小比赛，你＿＿那么紧张呢？',options:['何必','不必'],answer:0,
      why:'Có 呢 + dấu hỏi, ý "cần gì phải căng thẳng thế" → 何必.'},
     {sentence:'这次考试很简单，大家＿＿担心。',options:['何必','不必'],answer:1,
      why:'Câu khẳng định bình thường, kết thúc bằng dấu chấm → 不必.'}
   ]},

  {pair:'连忙 — 赶快',
   same:'Đều diễn tả làm việc gì một cách nhanh, vội.',
   sameEx:{zh:'看到老师进来，他连忙／赶快站了起来。',vn:'Thấy cô giáo bước vào, cậu ấy vội đứng dậy.'},
   items:[
     {word:'连忙',points:[
       'Chỉ dùng để KỂ việc đã xảy ra.',
       'KHÔNG dùng trong câu mệnh lệnh, thúc giục.'
     ],ex:[{zh:'一位球员连忙找来一把锯子。',vn:'Một cầu thủ vội tìm một cái cưa.'}]},
     {word:'赶快',points:[
       'Dùng được cho việc đã xảy ra và cả câu mệnh lệnh, thúc giục.',
       'Hay đi với 吧: 赶快走吧！'
     ],ex:[{zh:'快八点了，你赶快起床吧！',vn:'Sắp tám giờ rồi, con mau dậy đi!'}]}
   ],
   quiz:[
     {sentence:'要迟到了，你＿＿走吧！',options:['连忙','赶快'],answer:1,
      why:'Câu mệnh lệnh có 吧 → chỉ 赶快. 连忙 không dùng để giục người khác.'},
     {sentence:'一接到电话，他就＿＿打车过来了。',options:['连忙','赶快'],answer:0,both:true,
      why:'Kể việc đã xảy ra — cả hai đều được; 连忙 đúng giọng kể chuyện hơn.'},
     {sentence:'外面下雨了，＿＿把衣服收进来吧！',options:['连忙','赶快'],answer:1,
      why:'Câu cầu khiến → 赶快.'},
     {sentence:'看见奶奶上车，小明＿＿站起来让座。',options:['连忙','赶快'],answer:0,both:true,
      why:'Kể việc đã xảy ra — cả hai đều đúng, 连忙 tự nhiên hơn khi kể.'}
   ]}
];

// ══════════════════════════════════════════
// BẮC CẦU HÁN–VIỆT
// ══════════════════════════════════════════
var hvBridgeData = {
  easy:[
    {zh:'训练',hv:'huấn luyện',vn:'huấn luyện, tập luyện',note:'Trùng khít — nhớ một lần là xong.'},
    {zh:'工具',hv:'công cụ',vn:'công cụ, dụng cụ',note:'Trùng khít.'},
    {zh:'思维',hv:'tư duy',vn:'tư duy',note:'Trùng khít.'},
    {zh:'项目',hv:'hạng mục',vn:'hạng mục; môn thi đấu; dự án',note:'Tiếng Việt cũng nói "hạng mục công trình".'},
    {zh:'栏杆',hv:'lan can',vn:'lan can',note:'Trùng khít.'},
    {zh:'好奇',hv:'hiếu kỳ',vn:'tò mò',note:'"Hiếu kỳ" tiếng Việt cũng là tò mò. Chú ý 好 đọc hào.'},
    {zh:'阻碍',hv:'trở ngại',vn:'cản trở',note:'Tiếng Việt "trở ngại" là danh từ; tiếng Trung 阻碍 chủ yếu là động từ.'},
    {zh:'缺乏',hv:'khuyết phạp',vn:'thiếu',note:'"Khuyết" như trong "khuyết điểm", "thiếu khuyết" → thiếu.'},
    {zh:'启发',hv:'khải phát',vn:'gợi mở',note:'"Khải" như "khải thị" (mở ra cho thấy) → gợi mở.'},
    {zh:'重复',hv:'trùng phục',vn:'lặp lại',note:'"Trùng" như "trùng lặp". Chú ý 重 đọc chóng.'}
  ],
  idiom:[
    {zh:'断断续续',hv:'đoạn đoạn tục tục',vn:'đứt quãng',note:'"Đoạn" = đứt, "tục" = nối (liên tục) → lúc đứt lúc nối.'},
    {zh:'如梦初醒',hv:'như mộng sơ tỉnh',vn:'như bừng tỉnh giấc mộng',note:'Thành ngữ trong bài khoá — chợt hiểu ra điều trước giờ không nghĩ tới.'},
    {zh:'何必',hv:'hà tất',vn:'cần gì phải',note:'Tiếng Việt dùng y nguyên: "Hà tất phải thế?"'},
    {zh:'何况',hv:'hà huống',vn:'huống hồ, huống chi',note:'"Huống" chính là chữ 况 trong "huống hồ".'}
  ],
  trap:[
    {zh:'机器',hv:'cơ khí',vn:'cái máy',
     warn:'BẪY: "cơ khí" tiếng Việt là ngành kỹ thuật máy. 机器 tiếng Trung chỉ là CÁI MÁY: 一台机器.'},
    {zh:'工程师',hv:'công trình sư',vn:'kỹ sư',
     warn:'Đừng dịch "công trình sư". 工程师 = kỹ sư, gồm cả kỹ sư phần mềm (软件工程师).'},
    {zh:'仿佛',hv:'phảng phất',vn:'dường như',
     warn:'BẪY: "phảng phất" tiếng Việt là thoang thoảng (mùi hương). 仿佛 tiếng Trung = dường như, giống như.'},
    {zh:'气氛',hv:'khí phân',vn:'bầu không khí',
     warn:'Không phải không khí để thở (空气). 气氛 là không khí TINH THẦN: 节日气氛.'},
    {zh:'多亏',hv:'đa khuy',vn:'may mà, nhờ có',
     warn:'Âm Hán–Việt dễ hiểu nhầm thành "thiệt nhiều". 多亏 nghĩa là "may nhờ có" — mang ý biết ơn.'},
    {zh:'呆',hv:'ngai',vn:'ngây ra; ở lại',
     warn:'Âm Hán–Việt không gợi nghĩa. Nhớ hai nghĩa: 呆呆地 (ngây ra) và 呆在家里 (ở lì trong nhà).'}
  ]
};

// ══════════════════════════════════════════
// GHÉP TỪ — lấy theo bảng 词语搭配 của sách (tr. 122) + cụm trong bài
// ══════════════════════════════════════════
var matchData = [
  {left:'缺乏',right:'信心'},
  {left:'造成',right:'浪费'},
  {left:'激烈的',right:'争吵'},
  {left:'节日',right:'气氛'},
  {left:'艰苦地',right:'训练'},
  {left:'准确地',right:'重复'},
  {left:'不小心踩',right:'碎了'},
  {left:'别瞧',right:'不起别人'},
  {left:'安装',right:'空调'},
  {left:'得到',right:'启发'},
  {left:'一再',right:'强调'},
  {left:'断断续续地',right:'进行'},
  {left:'好奇地',right:'问父亲'},
  {left:'连忙',right:'打车过来'},
  {left:'阻碍',right:'发展'},
  {left:'思维',right:'方式'},
  {left:'一把',right:'锯子'},
  {left:'一筐',right:'桃子'},
  {left:'看台的',right:'栏杆'},
  {left:'甲乙',right:'两队'}
];

// ══════════════════════════════════════════
// ĐIỀN TỪ
// ══════════════════════════════════════════
var fillData = [
  {pre:'一位球员连忙找来一把锯子把篮筐的底',blank:'锯',post:'掉。',hint:'(cưa)',ans:'锯'},
  {pre:'当地人喜欢玩把球扔进桃子',blank:'筐',post:'的游戏。',hint:'(giỏ, sọt)',ans:'筐'},
  {pre:'比赛前队员们缺乏',blank:'训练',post:'，所以最后输了。',hint:'(tập luyện)',ans:'训练'},
  {pre:'在食物',blank:'缺乏',post:'的季节，动物为了活下去就只能多睡觉。',hint:'(thiếu)',ans:'缺乏'},
  {pre:'太极拳是中国传统的体育',blank:'项目',post:'。',hint:'(môn, hạng mục)',ans:'项目'},
  {pre:'越南人过春节喜欢在家里放一枝',blank:'桃',post:'花。',hint:'(đào)',ans:'桃'},
  {pre:'要整理的东西太多了，这个箱子根本',blank:'装',post:'不下。',hint:'(đựng)',ans:'装'},
  {pre:'老师的这句话给了我很大的',blank:'启发',post:'。',hint:'(gợi mở)',ans:'启发'},
  {pre:'天气太热了，我们教室下个星期要',blank:'安装',post:'空调。',hint:'(lắp đặt)',ans:'安装'},
  {pre:'下楼梯的时候请扶着',blank:'栏杆',post:'。',hint:'(lan can)',ans:'栏杆'},
  {pre:'学生分为',blank:'甲',post:'乙两队，以足球为比赛工具。',hint:'(Giáp — đội thứ nhất)',ans:'甲'},
  {pre:'这场比赛甲队以二比一赢了',blank:'乙',post:'队。',hint:'(Ất — đội thứ hai)',ans:'乙'},
  {pre:'以足球为比赛',blank:'工具',post:'向篮内投。',hint:'(công cụ, dụng cụ)',ans:'工具'},
  {pre:'哥哥每天放学以后都去操场练习',blank:'投篮',post:'。',hint:'(ném rổ)',ans:'投篮'},
  {pre:'老师',blank:'一再',post:'提醒我们考试时要注意细节。',hint:'(nhiều lần)',ans:'一再'},
  {pre:'雨',blank:'断断续续',post:'地下了一整天。',hint:'(lúc tạnh lúc rơi)',ans:'断断续续'},
  {pre:'今天的晚会组织得相当好，',blank:'气氛',post:'轻松愉快。',hint:'(bầu không khí)',ans:'气氛'},
  {pre:'连运动员都不满意，更',blank:'何况',post:'看比赛的球迷呢？',hint:'(huống chi)',ans:'何况'},
  {pre:'越南队赢了，',blank:'球迷',post:'们都跑到街上庆祝。',hint:'(cổ động viên)',ans:'球迷'},
  {pre:'我妹妹今年四岁，已经上',blank:'幼儿园',post:'了。',hint:'(nhà trẻ, mẫu giáo)',ans:'幼儿园'},
  {pre:'孩子们对什么都很',blank:'好奇',post:'。',hint:'(tò mò)',ans:'好奇'},
  {pre:'食堂楼下就有个小超市，',blank:'何必',post:'去学校外边呢？',hint:'(cần gì phải)',ans:'何必'},
  {pre:'',blank:'多亏',post:'了他这句话，人们如梦初醒。',hint:'(nhờ có, may mà)',ans:'多亏'},
  {pre:'学外语能帮助我们了解不同的',blank:'思维',post:'方式。',hint:'(tư duy)',ans:'思维'},
  {pre:'经历了那件事后，我',blank:'仿佛',post:'一夜之间长大成人了。',hint:'(dường như)',ans:'仿佛'},
  {pre:'害怕犯错会',blank:'阻碍',post:'我们学好外语。',hint:'(cản trở)',ans:'阻碍'},
  {pre:'篮球运动是1891年在美国',blank:'马萨诸塞州',post:'产生的。',hint:'(bang Massachusetts)',ans:'马萨诸塞州'},
  {pre:'篮球运动是由体育教师',blank:'詹姆士·奈史密斯',post:'博士发明的。',hint:'(James Naismith)',ans:'詹姆士·奈史密斯'},
  {pre:'这些办法都没能让比赛',blank:'顺畅',post:'起来。',hint:'(trôi chảy)',ans:'顺畅'},
  {pre:'失眠的问题',blank:'困扰',post:'了他好几年。',hint:'(làm khổ, làm phiền)',ans:'困扰'},
  {pre:'我哥哥大学毕业以后当了软件',blank:'工程师',post:'。',hint:'(kỹ sư)',ans:'工程师'}
];

// ══════════════════════════════════════════
// SẮP XẾP CÂU — mỗi điểm ngữ pháp (何况 · 何必 · 多亏) ít nhất 2 câu
// ══════════════════════════════════════════
var sortData = [
  {words:['连运动员','都','不满意','，','何况','球迷','呢','？'],ans:'连运动员都不满意，何况球迷呢？',audio:'连运动员都不满意，何况球迷呢？'},
  {words:['这道题','连老师','都','觉得难','，','何况','我们','呢','？'],ans:'这道题连老师都觉得难，何况我们呢？',audio:'这道题连老师都觉得难，何况我们呢？'},
  {words:['你','何必','这么','着急','呢','？'],ans:'你何必这么着急呢？',audio:'你何必这么着急呢？'},
  {words:['楼下','就有超市','，','何必','去','学校外边','呢','？'],ans:'楼下就有超市，何必去学校外边呢？',audio:'楼下就有超市，何必去学校外边呢？'},
  {words:['多亏','你','提醒','，','要不','我','就','忘了','。'],ans:'多亏你提醒，要不我就忘了。',audio:'多亏你提醒，要不我就忘了。'},
  {words:['多亏了','他','这句话','，','人们','如梦初醒','。'],ans:'多亏了他这句话，人们如梦初醒。',audio:'多亏了他这句话，人们如梦初醒。'},
  {words:['比赛','不得不','断断续续地','进行','。'],ans:'比赛不得不断断续续地进行。',audio:'比赛不得不断断续续地进行。'},
  {words:['他','从','这个游戏中','得到了','启发','。'],ans:'他从这个游戏中得到了启发。',audio:'他从这个游戏中得到了启发。'},
  {words:['我们的','思维','被','篮筐的底','挡在了','半空中','。'],ans:'我们的思维被篮筐的底挡在了半空中。',audio:'我们的思维被篮筐的底挡在了半空中。'},
  {words:['一位球员','连忙','找来','一把锯子','。'],ans:'一位球员连忙找来一把锯子。',audio:'一位球员连忙找来一把锯子。'},
  {words:['复杂','都是','我们','自己','造成的','。'],ans:'复杂都是我们自己造成的。',audio:'复杂都是我们自己造成的。'},
  {words:['他','把','两只篮筐','安装在','栏杆上','。'],ans:'他把两只篮筐安装在栏杆上。',audio:'他把两只篮筐安装在栏杆上。'},
  {words:['这个箱子','根本','装不下','这么多','东西','。'],ans:'这个箱子根本装不下这么多东西。',audio:'这个箱子根本装不下这么多东西。'}
];

// ══════════════════════════════════════════
// CHỌN TỪ THÍCH HỢP
// ══════════════════════════════════════════
var errorFixMode = 'wordchoice';
var errorFixData = [
  {wrong:'公共汽车上人太多，我的脚被人____了好几次。',opts:['踩','投','装','锯'],ans:0,
   exp:'Chân bị người khác đặt chân lên → 踩 (giẫm). 投 là ném, 装 là đựng, 锯 là cưa — đều không hợp với 脚.'},
  {wrong:'请你把刚才的话再____一遍。',opts:['重复','一再','造成','安装'],ans:0,
   exp:'Nói lại một lần → 重复一遍. 一再 là phó từ, không làm động từ chính; 造成 (gây ra), 安装 (lắp đặt) không hợp nghĩa.'},
  {wrong:'明天我去一家公司面试，听说竞争很____。',opts:['激烈','强烈','顺畅','好奇'],ans:0,
   exp:'Cạnh tranh gay gắt → 激烈. 强烈 dùng cho ánh sáng, mùi vị, tình cảm, yêu cầu; 顺畅 (trôi chảy), 好奇 (tò mò) sai nghĩa.'},
  {wrong:'学生们____要求重新安排考试。',opts:['强烈','激烈','顺畅','好奇'],ans:0,
   exp:'Yêu cầu mạnh mẽ của con người → 强烈要求. 激烈 tả thi đấu, tranh luận, không làm trạng ngữ cho 要求.'},
  {wrong:'工厂里的____坏了，工人们只好停下来。',opts:['机器','思维','项目','气氛'],ans:0,
   exp:'Thứ bị "hỏng" (坏了) làm công nhân phải dừng việc → 机器 (máy). 思维, 项目, 气氛 là danh từ trừu tượng, không "hỏng" được.'},
  {wrong:'一觉醒来发现已经8点多了，李阳____穿好衣服往公司赶。',opts:['连忙','何必','仿佛','一再'],ans:0,
   exp:'Kể một việc làm vội ngay sau khi phát hiện muộn → 连忙. 何必 là "cần gì", 仿佛 là "dường như", 一再 là "nhiều lần" — đều không hợp.'},
  {wrong:'要迟到了，你____走吧！',opts:['赶快','连忙','多亏','何况'],ans:0,
   exp:'Câu mệnh lệnh có 吧 → 赶快. 连忙 chỉ dùng để kể việc đã xảy ra, không dùng giục người khác.'},
  {wrong:'别____不起别人，每个人都有自己的长处。',opts:['瞧','听','踩','呆'],ans:0,
   exp:'瞧不起 = coi thường (khẩu ngữ, như 看不起). Không có cụm 听不起, 踩不起, 呆不起 với nghĩa này.'},
  {wrong:'听到这个消息，他一下子就____了，半天说不出话来。',opts:['呆','瞧','好奇','困扰'],ans:0,
   exp:'Sững sờ, ngây người ra → 呆. 瞧 là "nhìn", 好奇 là "tò mò", 困扰 cần tân ngữ chỉ người.'},
  {wrong:'每天大量饮酒给身体健康____了很大的伤害。',opts:['造成','形成','安装','启发'],ans:0,
   exp:'Gây ra kết quả xấu (伤害) → 造成. 形成 là "hình thành" (形成习惯), trung tính, không đi với 伤害.'},
  {wrong:'你们知道这个风俗是怎么____的吗？',opts:['形成','造成','安装','装'],ans:0,
   exp:'Phong tục dần dần hình thành → 形成. 造成 thường đi với kết quả xấu và cần tân ngữ; 安装, 装 sai nghĩa.'},
  {wrong:'我书包里____了一本书，不知道放哪儿了。',opts:['少','缺乏','阻碍','困扰'],ans:0,
   exp:'Vật cụ thể có số lượng (一本书) → 少 (hoặc 缺少). 缺乏 dùng cho thứ trừu tượng, khái quát: 缺乏信心, 缺乏经验.'},
  {wrong:'这个箱子太小了，____不下这么多衣服。',opts:['装','安装','踩','投'],ans:0,
   exp:'Cho đồ vào vật chứa → 装; 装不下 = không đựng hết. 安装 là lắp thiết bị, không nói 安装不下衣服.'},
  {wrong:'年轻人都受不了，____一个有病的老人呢？',opts:['何况','何必','多亏','仿佛'],ans:0,
   exp:'Vế trước nêu trường hợp A, vế sau "huống chi" B → 何况……呢？ 何必 là "cần gì phải", không hợp logic.'},
  {wrong:'你____亲自送一趟呢？叫个快递不就行了？',opts:['何必','何况','多亏','连忙'],ans:0,
   exp:'"Cần gì phải đích thân đi" → 何必……呢？ 何况 nối hai vế tăng tiến, không đứng trước động từ như thế này.'},
  {wrong:'今天搬家____有你在，你可帮我大忙了。',opts:['多亏','何必','何况','仿佛'],ans:0,
   exp:'Nhờ có bạn nên mọi việc thuận lợi, có ý biết ơn → 多亏.'},
  {wrong:'他一边听一边记，____对我的发言挺感兴趣似的。',opts:['仿佛','何必','连忙','一再'],ans:0,
   exp:'Đi với 似的 ở cuối → 仿佛……似的 (dường như … vậy).'},
  {wrong:'修了新路以后，这里的交通____多了。',opts:['顺畅','激烈','好奇','强烈'],ans:0,
   exp:'Giao thông thông suốt → 交通顺畅. 激烈, 强烈 tả sự mạnh mẽ; 好奇 là tò mò.'},
  {wrong:'一再重复的暂停行为影响了比赛的____。',opts:['气氛','空气','思维','项目'],ans:0,
   exp:'Không khí TINH THẦN của trận đấu → 气氛. 空气 là không khí để thở — bẫy của người Việt.'},
  {wrong:'我们的训练学校____在室内进行的运动项目。',opts:['缺乏','阻碍','造成','困扰'],ans:0,
   exp:'Không có đủ (các môn thể thao) → 缺乏. 阻碍 (cản trở), 造成 (gây ra), 困扰 (làm khổ) sai nghĩa.'}
];

// ══════════════════════════════════════════
// DỊCH
// ══════════════════════════════════════════
var translateData = [
  {vi:'Ngay cả vận động viên còn không hài lòng, huống chi là người hâm mộ?',zh:'连运动员都不满意，何况球迷呢？',py:'Lián yùndòngyuán dōu bù mǎnyì, hékuàng qiúmí ne?'},
  {vi:'Chuyện nhỏ thế này, cần gì phải giận?',zh:'这么小的事，何必生气呢？',py:'Zhème xiǎo de shì, hébì shēngqì ne?'},
  {vi:'May mà bạn nhắc, nếu không tôi quên mất rồi.',zh:'多亏你提醒，要不我就忘了。',py:'Duōkuī nǐ tíxǐng, yàobù wǒ jiù wàng le.'},
  {vi:'Trước trận đấu các đội viên thiếu tập luyện.',zh:'比赛前队员们缺乏训练。',py:'Bǐsài qián duìyuánmen quēfá xùnliàn.'},
  {vi:'Tâm trạng căng thẳng dễ gây mất ngủ.',zh:'情绪紧张容易造成失眠。',py:'Qíngxù jǐnzhāng róngyì zàochéng shīmián.'},
  {vi:'Vừa nhận được điện thoại của bạn là tôi vội bắt taxi đến ngay.',zh:'一接到你的电话，我就连忙打车过来了。',py:'Yì jiēdào nǐ de diànhuà, wǒ jiù liánmáng dǎchē guòlai le.'},
  {vi:'Bài dễ thế này mà cậu lại làm sai, cậu phải chú ý chi tiết chứ.',zh:'这么简单的题你居然做错了，你得注意细节啊。',py:'Zhème jiǎndān de tí nǐ jūrán zuòcuò le, nǐ děi zhùyì xìjié a.'},
  {vi:'Cạnh tranh càng ngày càng gay gắt.',zh:'竞争越来越激烈了。',py:'Jìngzhēng yuè lái yuè jīliè le.'}
];

// Chiều Trung → Việt — nội dung khác với chiều trên
var translateDataRev = [
  {vi:'Môn bóng rổ do tiến sĩ James Naismith phát minh năm 1891.',zh:'篮球运动是1891年由詹姆士·奈史密斯博士发明的。',py:'Lánqiú yùndòng shì yī bā jiǔ yī nián yóu Zhānmǔshì·Nàishǐmìsī bóshì fāmíng de.'},
  {vi:'Ông được gợi ý từ trò chơi ném bóng vào giỏ đào.',zh:'他从把球扔进桃子筐的游戏中得到了启发。',py:'Tā cóng bǎ qiú rēngjìn táozi kuāng de yóuxì zhōng dédàole qǐfā.'},
  {vi:'Trận đấu đành phải diễn ra ngắt quãng.',zh:'比赛不得不断断续续地进行。',py:'Bǐsài bùdébù duànduàn xùxù de jìnxíng.'},
  {vi:'Cậu bé tò mò hỏi bố: "Sao phải phiền phức thế ạ?"',zh:'小男孩好奇地问父亲：“何必这么麻烦呢？”',py:'Xiǎo nánhái hàoqí de wèn fùqīn: "Hébì zhème máfan ne?"'},
  {vi:'Một cầu thủ vội vàng tìm một cái cưa, cưa bỏ đáy giỏ.',zh:'一位球员连忙找来一把锯子把篮筐的底锯掉。',py:'Yí wèi qiúyuán liánmáng zhǎolái yì bǎ jùzi bǎ lánkuāng de dǐ jùdiào.'},
  {vi:'Sự phức tạp đều do chính chúng ta tạo ra.',zh:'复杂都是我们自己造成的。',py:'Fùzá dōu shì wǒmen zìjǐ zàochéng de.'},
  {vi:'Cuộc sống giống như chiếc giỏ.',zh:'生活仿佛篮筐。',py:'Shēnghuó fǎngfú lánkuāng.'},
  {vi:'Đừng coi thường người khác, ai cũng có điểm mạnh của mình.',zh:'别瞧不起别人，每个人都有自己的长处。',py:'Bié qiáobuqǐ biérén, měi ge rén dōu yǒu zìjǐ de chángchu.'}
];

// ══════════════════════════════════════════
// VIẾT ĐOẠN 80 CHỮ — dạng đề thi HSK 5 phần viết
// ══════════════════════════════════════════
var writingData = {
  words:['训练','缺乏','激烈','何况','多亏'],
  prompt:'Dùng 5 từ cho sẵn, viết một đoạn khoảng 80 chữ kể về một môn thể thao em thích.',
  outline:[
    'Câu mở: giới thiệu môn thể thao em thích nhất.',
    'Thân 1: lúc mới bắt đầu gặp khó khăn gì (dùng 缺乏), nhờ ai giúp (dùng 多亏 + 训练).',
    'Thân 2: kể một trận đấu / một lần tập đáng nhớ (dùng 激烈, 何况).',
    'Kết: môn thể thao ấy mang lại cho em điều gì.'
  ],
  model:{
    zh:'我最喜欢的运动是篮球。刚开始打的时候，我缺乏经验，投篮总是投不进。多亏了体育老师每天陪我们认真训练，我进步得很快。上个月的学校比赛非常激烈，连我们自己都很紧张，何况第一次来看比赛的同学呢？只要坚持下去，就一定能越打越好。',
    py:'Wǒ zuì xǐhuan de yùndòng shì lánqiú. Gāng kāishǐ dǎ de shíhou, wǒ quēfá jīngyàn, tóu lán zǒngshì tóu bu jìn. Duōkuīle tǐyù lǎoshī měi tiān péi wǒmen rènzhēn xùnliàn, wǒ jìnbù de hěn kuài. Shàng ge yuè de xuéxiào bǐsài fēicháng jīliè, lián wǒmen zìjǐ dōu hěn jǐnzhāng, hékuàng dì-yī cì lái kàn bǐsài de tóngxué ne? Zhǐyào jiānchí xiàqu, jiù yídìng néng yuè dǎ yuè hǎo.',
    vn:'Môn thể thao tôi thích nhất là bóng rổ. Lúc mới bắt đầu chơi, tôi thiếu kinh nghiệm, ném rổ mãi không vào. May mà có thầy thể dục ngày nào cũng cùng chúng tôi tập luyện nghiêm túc, tôi tiến bộ rất nhanh. Giải đấu của trường tháng trước vô cùng gay cấn, ngay cả chúng tôi cũng căng thẳng, huống chi là các bạn lần đầu đến xem? Chỉ cần kiên trì thì nhất định sẽ chơi càng ngày càng giỏi.'
  },
  checklist:[
    'Đã dùng đủ cả 5 từ cho sẵn chưa?',
    'Đủ khoảng 80 chữ chưa (đếm ô vuông, không đếm dấu câu)?',
    'Câu có 何况 đã nối với vế trước (连……都……) và kết thúc bằng 呢？ chưa?',
    '多亏 có dùng cho một kết quả TỐT không (đừng dùng cho chuyện xấu)?',
    'Mở đoạn lùi vào 2 ô, dấu câu chiếm một ô — đúng quy cách bài thi chưa?'
  ],

  // Đề đúng như câu 99 của đề thi (gửi kèm khi nhờ AI chấm)
  de:'请结合下列词语（要全部使用），写一篇80字左右的短文，谈谈你喜欢的一项运动。',

  // Cách dùng đúng của 5 từ cho sẵn — máy soát lỗi dựa vào đây
  // (re: mẫu câu SAI hay gặp; viết dạng chuỗi RegExp)
  tuDung:[
    {tu:'训练', loai:'động từ', cach:'认真地训练 · 艰苦地训练 · 参加训练',
     sai:[{re:'(很|非常|十分|特别)训练', sua:'认真地训练 / 训练得很认真', giai:'训练 là ĐỘNG TỪ, không đứng sau 很/非常. Muốn nói tập luyện chăm: 认真地训练 hoặc 训练得很认真.'}]},
    {tu:'缺乏', loai:'động từ', cach:'缺乏经验 · 缺乏信心 · 缺乏训练',
     sai:[{re:'缺乏(一|两|三|几)(本|个|支|张|件|台|双)', sua:'少一本… / 缺少…', giai:'缺乏 đi với thứ TRỪU TƯỢNG, khái quát (经验, 信心, 人才). Vật cụ thể có số lượng dùng 少 hoặc 缺少.'},
          {re:'(很|非常|十分)缺乏(?!经验|信心|勇气|知识|人才|训练)', sua:'缺乏 + danh từ', giai:'缺乏 cần tân ngữ đi sau: 很缺乏经验. Đừng để 缺乏 đứng trơ trọi.', nhe:true}]},
    {tu:'激烈', loai:'tính từ', cach:'激烈的比赛 · 比赛很激烈 · 竞争激烈',
     sai:[{re:'激烈的?(阳光|光线|颜色|味道|香味|愿望)', sua:'强烈的……', giai:'Ánh sáng, màu sắc, mùi vị, mong muốn → 强烈. 激烈 dùng cho thi đấu, tranh luận, cạnh tranh.'},
          {re:'激烈地?要求', sua:'强烈要求', giai:'Yêu cầu mạnh mẽ nói 强烈要求, không nói 激烈要求.'}]},
    {tu:'何况', loai:'liên từ', cach:'连 A 都……，(更)何况 B 呢？',
     sai:[{re:'(^|。)何况', sua:'……，何况……', giai:'何况 nối vế sau với vế trước trong CÙNG một câu, không mở đầu câu độc lập.'},
          {re:'何况[^，。？！]*。', sua:'……，何况……呢？', giai:'Câu có 何况 thường mang giọng phản vấn, kết thúc bằng 呢？ sẽ tự nhiên hơn.', nhe:true}]},
    {tu:'多亏', loai:'động từ', cach:'多亏 (了) + người / việc，…… · 多亏……，要不……',
     sai:[{re:'(很|非常|十分)多亏', sua:'多亏……', giai:'多亏 không đi sau 很/非常. Muốn nhấn mạnh: 真是多亏了你.'},
          {re:'多亏[^，。]*(失败|输了|迟到|生病|受伤)', sua:'因为 / 由于……', giai:'多亏 chỉ dùng cho kết quả TỐT (may mà nhờ…). Kết quả xấu dùng 因为 / 由于.'}]}
  ],

  // Cấu trúc của bài + cấu trúc HSK 4 nên dùng lại — gợi ý khi sửa bài
  cauTruc:[
    {ten:'连 A 都……，(更)何况 B 呢？', nhan:'何况', vd:'比赛非常激烈，连我们自己都很紧张，何况来看比赛的同学呢？', khi:'Nhấn mạnh mức độ: A còn thế, huống chi B.'},
    {ten:'多亏……，要不……', nhan:'多亏', vd:'多亏了体育老师，要不我到现在还投不进篮。', khi:'Nói lời cảm ơn, kể người giúp mình.'},
    {ten:'何必……呢？……不就行了吗？', nhan:'何必', vd:'何必花那么多钱去健身房呢？每天跑跑步不就行了吗？', khi:'Khuyên ai đó chọn cách đơn giản hơn.'},
    {ten:'缺乏 + N trừu tượng', nhan:'缺乏', vd:'刚开始的时候，我缺乏经验，也缺乏信心。', khi:'Kể khó khăn lúc mới bắt đầu.'},
    {ten:'虽然……，但是……', nhan:'虽然', vd:'虽然训练很辛苦，但是我从来不想放弃。', khi:'Nêu khó khăn rồi lật lại — thân đoạn.'},
    {ten:'只要……，就……', nhan:'只要', vd:'只要坚持下去，就一定能越打越好。', khi:'Câu KẾT — rút ra bài học.'},
    {ten:'越 V 越 Adj', nhan:'越', vd:'我越打越喜欢篮球了。', khi:'Diễn tả sự thay đổi dần theo thời gian.'}
  ],

  // 书写 第一部分 · 完成句子 — xếp các mảnh thành câu (đáp án đúng như đề thi)
  sapXep:[
    {manh:['缺乏','这所学校','室内运动项目','冬天'],
     dap:'这所学校冬天缺乏室内运动项目。', chap:['冬天这所学校缺乏室内运动项目。'],
     vn:'Mùa đông trường này thiếu các môn thể thao trong nhà.',
     giai:'Chủ ngữ 这所学校 → thời gian 冬天 → động từ 缺乏 → tân ngữ. Thời gian đứng TRƯỚC động từ (có thể lên đầu câu), không đặt cuối câu như tiếng Việt.'},
    {manh:['一再','这样的行为','必须','重复'],
     dap:'这样的行为必须一再重复。',
     vn:'Hành động như vậy buộc phải lặp đi lặp lại.',
     giai:'Động từ năng nguyện 必须 đứng trước phó từ 一再, rồi mới đến động từ 重复.'},
    {manh:['更何况','连运动员都','球迷呢','不满意，'],
     dap:'连运动员都不满意，更何况球迷呢？',
     vn:'Ngay cả vận động viên còn không hài lòng, huống chi là người hâm mộ?',
     giai:'连……都…… ở vế trước (ôn HSK 4), 更何况……呢？ ở vế sau.'},
    {manh:['多亏了','如梦初醒','人们','他这句话，'],
     dap:'多亏了他这句话，人们如梦初醒。',
     vn:'Nhờ câu nói ấy của cậu bé, mọi người như bừng tỉnh.',
     giai:'多亏了 + nguyên nhân tốt đứng ĐẦU câu; vế sau nêu kết quả.'},
    {manh:['很长时间','那个问题','困扰了','人们'],
     dap:'那个问题困扰了人们很长时间。',
     vn:'Vấn đề đó làm khổ mọi người rất lâu.',
     giai:'Chủ ngữ + 困扰了 + người + khoảng thời gian (bổ ngữ thời lượng đứng sau tân ngữ chỉ người).'},
    {manh:['激烈的','这是','一场','比赛','非常'],
     dap:'这是一场非常激烈的比赛。',
     vn:'Đây là một trận đấu vô cùng gay cấn.',
     giai:'Số lượng 一场 → phó từ 非常 + tính từ 激烈 + 的 → danh từ 比赛.'}
  ]
};

// ══════════════════════════════════════════
// LUYỆN NÓI — theo 话题讨论 của sách: 运动与健康
// ══════════════════════════════════════════
var speakingData = {
  intro:'Bốn câu hỏi mở về chủ đề của bài (运动与健康). Bấm nút loa nghe câu hỏi, rồi <b>tự ghi âm câu trả lời của mình trước</b> — đừng đọc theo câu mẫu. Cố gắng dùng được từ mới của bài: 训练 · 缺乏 · 激烈 · 何况 · 何必 · 多亏 · 思维.',
  questions:[
    {q_zh:'你喜欢的运动是什么？你是怎么接触到并喜欢上它的？',
     q_vn:'Môn thể thao em thích là gì? Em biết đến và thích nó như thế nào?',
     hint:'Kể thời điểm + người giúp, dùng 多亏',
     sample:'我喜欢打羽毛球。上初中的时候，我缺乏锻炼，身体不太好。多亏了一个同学每天拉我去打球，我才慢慢喜欢上了这项运动。',
     sample_vn:'Tôi thích đánh cầu lông. Hồi cấp hai tôi ít vận động, sức khoẻ không tốt lắm. May có một bạn ngày nào cũng kéo tôi đi đánh cầu, tôi mới dần thích môn này.',
     note:'Câu hỏi 你是怎么…… phải trả lời bằng một câu chuyện có thời gian, người, việc — đừng chỉ nói "我很喜欢".'},
    {q_zh:'进行这项运动有什么要求或条件？它的好处是什么？',
     q_vn:'Chơi môn này cần yêu cầu, điều kiện gì? Nó có lợi ích gì?',
     hint:'Nêu 2 điều kiện + 2 lợi ích, dùng 不仅……也……',
     sample:'打羽毛球不需要很多工具，有两个球拍就行了。它不仅能锻炼身体，也能让人反应更快。',
     sample_vn:'Đánh cầu lông không cần nhiều dụng cụ, có hai cây vợt là được. Nó không chỉ rèn luyện sức khoẻ mà còn giúp phản xạ nhanh hơn.',
     note:'Chia ý rõ ràng: 条件 trước, 好处 sau. Người chấm HSKK đánh giá cao câu trả lời có bố cục.'},
    {q_zh:'有人说“生命在于运动”，也有人觉得饭后应该休息。你怎么看？',
     q_vn:'Có người nói "sống là phải vận động", cũng có người thấy ăn xong nên nghỉ. Em nghĩ sao?',
     hint:'Chọn một bên + lý do, có thể dùng 何必',
     sample:'我觉得运动很重要，但是不用做太激烈的运动。饭后散散步就很好，何必一吃完饭就去跑步呢？',
     sample_vn:'Tôi thấy vận động rất quan trọng nhưng không cần vận động quá mạnh. Ăn xong đi dạo một chút là tốt rồi, cần gì vừa ăn xong đã đi chạy?',
     note:'Lấy ý từ phần 背景分析 của sách: vận động phải tuỳ người, tuỳ lúc.'},
    {q_zh:'课文说“复杂都是我们自己造成的”，你同意吗？请举一个例子。',
     q_vn:'Bài khoá nói "sự phức tạp đều do chính chúng ta tạo ra", em có đồng ý không? Hãy nêu một ví dụ.',
     hint:'Đồng ý / không + một ví dụ trong học tập, dùng 思维',
     sample:'我同意。以前我背单词总是一遍一遍地抄，后来老师让我换一种思维方式，用句子来记，结果又快又好。',
     sample_vn:'Tôi đồng ý. Trước đây tôi học từ toàn chép đi chép lại, sau đó thầy bảo tôi đổi cách tư duy, học từ qua câu, kết quả vừa nhanh vừa tốt.',
     note:'Ví dụ càng GẦN đời sống của em càng thuyết phục.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🎧 NGHE THEO DẠNG ĐỀ HSK 5 — 听力 第一/第二部分
// Nguyên văn hội thoại lấy từ sách bài tập 《HSK标准教程5上·练习册》bài 13.
// Bốn lựa chọn do soạn lại cho khớp nguyên văn (sách chỉ in chữ cái đáp án).
// ══════════════════════════════════════════════════════════════
var listenExamData = {
  intro: 'Đề HSK 5 phần nghe chỉ phát <b>một lượt</b>. Vì vậy ở đây cũng vậy: bấm nút loa nghe, ' +
         'trả lời ngay, rồi mới mở nguyên văn ra đối chiếu. Đừng mở nguyên văn trước — mở trước là mất tác dụng.',
  source: 'Nguyên văn: 《HSK标准教程5·练习册》第13课 听力',
  items: [
    {n:1,
     lines:[{sp:'女',zh:'何必这么费劲儿呢？我来帮你做不就行了？'},
            {sp:'男',zh:'那太麻烦你了，我还是自己来吧。'}],
     q:'男的是什么意思？',qvn:'Ý người đàn ông là gì?',
     opts:['想让女的帮忙','觉得这件事很简单','想自己做','不想做了'],ans:2,
     why:'我还是自己来吧 = tôi vẫn nên tự làm thì hơn. Anh từ chối lời đề nghị giúp của người phụ nữ vì ngại làm phiền (太麻烦你了).',
     words:['何必']},

    {n:2,
     lines:[{sp:'男',zh:'你给王老师发个短信告诉他一声吧。'},
            {sp:'女',zh:'他现在应该在上课，看不了短信；何况现在我们都用微信联系，谁还发短信啊？'}],
     q:'对男的的要求，女的是什么态度？',qvn:'Người phụ nữ có thái độ thế nào với yêu cầu của người đàn ông?',
     opts:['觉得没必要发短信','马上就发短信','让男的自己发','觉得应该打电话'],ans:0,
     why:'Cô đưa ra hai lý do: thầy đang dạy không xem được, 何况 (hơn nữa) giờ ai cũng dùng WeChat. Câu 谁还发短信啊？ là phản vấn = không ai nhắn SMS nữa → không cần gửi.',
     words:['何况']},

    {n:3,
     lines:[{sp:'女',zh:'你的腿怎么了？摔伤了吗？'},
            {sp:'男',zh:'昨天在健身房锻炼的时候用力过大，把肌肉拉伤了。'}],
     q:'男的是怎么受的伤？',qvn:'Người đàn ông bị thương như thế nào?',
     opts:['打篮球时摔倒了','锻炼时用力过大','走路时不小心','被别人撞伤了'],ans:1,
     why:'用力过大，把肌肉拉伤了 — dùng lực quá mạnh làm căng cơ. Bẫy: người phụ nữ ĐOÁN là 摔伤 (ngã), nhưng anh không xác nhận.',
     words:[]},

    {n:4,
     lines:[{sp:'男',zh:'张教练，您能分析一下本次比赛失利的原因吗？'},
            {sp:'女',zh:'主要是队员们参赛前缺乏训练。'}],
     q:'张教练他们队最后的比赛结果怎么样？',qvn:'Kết quả trận đấu của đội huấn luyện viên Trương thế nào?',
     opts:['赢了','输了','没参加','还没比完'],ans:1,
     why:'失利 = thất bại, thua trận. Lý do là 缺乏训练 (thiếu tập luyện) — đúng từ mới của bài.',
     words:['缺乏','训练']},

    {n:5,
     lines:[{sp:'女',zh:'我觉得你太不重视我的事了。'},
            {sp:'男',zh:'一接到你的电话，我就连忙打车过来了，还不重视啊？'}],
     q:'男的是什么意思？',qvn:'Ý người đàn ông là gì?',
     opts:['他最近很忙','他没接到电话','他很重视女的的事','他不想过来'],ans:2,
     why:'还不重视啊？ là câu phản vấn = như thế mà còn bảo không coi trọng à? → anh RẤT coi trọng. Bằng chứng: 一接到电话就连忙打车过来.',
     words:['连忙']},

    {n:6,
     lines:[{sp:'男',zh:'高秘书，刘总还在跟小李谈话吗？'},
            {sp:'女',zh:'对，气氛好像有点儿紧张，……'}],
     q:'女的接下来最可能说什么？',qvn:'Người phụ nữ nhiều khả năng sẽ nói tiếp điều gì?',
     opts:['他们聊得很开心','您最好等一会儿再进去','刘总已经走了','小李正在开会'],ans:1,
     why:'Không khí đang căng thẳng (气氛有点儿紧张) → lời khuyên hợp lý là chờ một lát hãy vào. "聊得很开心" trái với 紧张; hai phương án còn lại mâu thuẫn với chữ 对.',
     words:['气氛']},

    {n:7,
     lines:[{sp:'女',zh:'没想到最后是一个小孩子想出了办法。'},
            {sp:'男',zh:'是啊，去掉篮筐的底，这么简单的事，我们怎么都没想到呢？'},
            {sp:'女',zh:'有时候，我们把一些事情想得太复杂了。'},
            {sp:'男',zh:'说白了，我们的思维，都像篮球一样被篮筐的底挡在了半空中。'}],
     q:'他们在讨论什么话题？',qvn:'Họ đang thảo luận về chủ đề gì?',
     opts:['篮球比赛的规则','怎样教育孩子','体育运动的历史','人们的思维方式'],ans:3,
     why:'Hai người bàn vì sao người lớn không nghĩ ra cách đơn giản: 把事情想得太复杂, 我们的思维……被挡住. Chủ đề là CÁCH TƯ DUY, không phải bóng rổ.',
     words:['筐','思维']},

    {n:8,
     lines:[{sp:'男',zh:'昨天的球赛你看了吗？'},
            {sp:'女',zh:'看了，平安队又赢了。别看他们水平一般，还老赢。'},
            {sp:'男',zh:'是啊，论技术他们真不比对手强，就是运气好。'},
            {sp:'女',zh:'也不完全是运气，队员们的情绪很稳定。'}],
     q:'男的认为平安队为什么能赢？',qvn:'Người đàn ông cho rằng vì sao đội Bình An thắng?',
     opts:['技术比对手好','运气好','训练很认真','球迷多'],ans:1,
     why:'Người đàn ông nói 就是运气好. Ý 情绪很稳定 là của NGƯỜI PHỤ NỮ — câu hỏi hỏi ý của người nam, phải nghe rõ ai nói gì.',
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
    {scene:'Bạn cùng lớp định chép tay lại cả quyển sách để ôn thi.',
     a:{sp:'Bạn',zh:'我打算把这本书全部抄一遍。',vn:'Tớ định chép lại toàn bộ quyển sách này.'},
     need:['Dùng 何必……呢？','Gợi ý một cách đơn giản hơn'],
     sample:'何必这么麻烦呢？把重点记下来不就行了吗？',
     samplePy:'Hébì zhème máfan ne? Bǎ zhòngdiǎn jì xiàlai bú jiù xíng le ma?',
     sampleVn:'Cần gì phiền phức thế? Ghi lại những điểm chính chẳng phải là được sao?',
     tip:'何必 luôn đi với giọng phản vấn và 呢？ ở cuối. Đừng viết 何必这么麻烦。 — nghe cụt và sai giọng.'},

    {scene:'Bạn rủ em vào đội bóng rổ của trường, nhưng em thấp và mới tập.',
     a:{sp:'Bạn',zh:'你怎么不参加学校的篮球队？',vn:'Sao cậu không vào đội bóng rổ của trường?'},
     need:['Dùng 何况','Nêu ít nhất HAI lý do'],
     sample:'我个子不高，何况才开始学，投篮总是投不进。',
     samplePy:'Wǒ gèzi bù gāo, hékuàng cái kāishǐ xué, tóu lán zǒngshì tóu bu jìn.',
     sampleVn:'Tớ không cao, huống hồ mới bắt đầu học, ném rổ toàn trượt.',
     tip:'Đây là cách dùng thứ hai của 何况: BỔ SUNG thêm lý do. Lý do sau thường mạnh hơn lý do trước.'},

    {scene:'Hôm qua em quên mang tài liệu, bạn thân đã mang giúp đến lớp.',
     a:{sp:'Bạn',zh:'昨天的材料你拿到了吗？',vn:'Tài liệu hôm qua cậu nhận được chưa?'},
     need:['Dùng 多亏','Thể hiện sự biết ơn'],
     sample:'拿到了，多亏你帮我带来了，要不我就麻烦了。',
     samplePy:'Ná dào le, duōkuī nǐ bāng wǒ dài lái le, yàobù wǒ jiù máfan le.',
     sampleVn:'Nhận được rồi, may mà cậu mang giúp, không thì tớ gặp rắc rối rồi.',
     tip:'多亏……，要不…… là cặp rất tự nhiên khi cảm ơn. 多亏 chỉ dùng cho kết quả TỐT.'},

    {scene:'Cô giáo hỏi vì sao bài kiểm tra lần này em làm không tốt.',
     a:{sp:'Cô',zh:'这次考试怎么没考好？',vn:'Sao lần này em thi không tốt?'},
     need:['Dùng 缺乏','Nhận trách nhiệm, không đổ lỗi'],
     sample:'主要是我考前缺乏复习，时间也没安排好，下次一定注意。',
     samplePy:'Zhǔyào shì wǒ kǎo qián quēfá fùxí, shíjiān yě méi ānpái hǎo, xià cì yídìng zhùyì.',
     sampleVn:'Chủ yếu là em thiếu ôn tập trước khi thi, thời gian cũng sắp xếp chưa hợp lý, lần sau em nhất định chú ý.',
     tip:'Với thầy cô, giọng phải lễ phép và có hứa hẹn sửa đổi. 缺乏 + danh từ/động từ trừu tượng (复习, 训练, 经验).'},

    {scene:'Bạn vừa đọc xong chuyện bóng rổ bỏ đáy giỏ và hỏi ý em.',
     a:{sp:'Bạn',zh:'一个小孩子都能想到，大人们怎么都没想到呢？',vn:'Một đứa trẻ còn nghĩ ra được, sao người lớn lại không nghĩ ra nhỉ?'},
     need:['Dùng 思维','Nêu rõ ý kiến của mình'],
     sample:'我觉得大人们的思维被习惯挡住了，小孩子反而想得简单。',
     samplePy:'Wǒ juéde dàrénmen de sīwéi bèi xíguàn dǎngzhù le, xiǎo háizi fǎn\'ér xiǎng de jiǎndān.',
     sampleVn:'Tôi thấy tư duy của người lớn bị thói quen chặn lại, trẻ con ngược lại nghĩ đơn giản hơn.',
     tip:'Câu 被 (ôn HSK 3–4) rất hợp để diễn đạt ý của bài: 思维被……挡住了.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🎯 NÓI SAO CHO HAY — 得体 / 语体
// ══════════════════════════════════════════════════════════════
var registerData = {
  intro: 'Ở đây <b>cả hai câu đều đúng ngữ pháp</b> — không có câu sai. Việc của em là chọn câu <b>PHÙ HỢP HƠN</b> với hoàn cảnh. ' +
         'Đây chính là chỗ HSK 5 khác hẳn HSK 3–4: không còn là đúng/sai, mà là hay/dở.',
  items: [
    {scene:'Em đang xem bóng rổ cùng bạn thân.',
     a:'你瞧，他又投进了！',b:'请您观察，他又一次投篮成功了。',better:'a',
     why:'瞧 là khẩu ngữ, rất hợp khi nói chuyện với bạn. Câu b đúng nhưng trang trọng như bình luận viên, nghe khách sáo.'},

    {scene:'Em viết báo cáo tổng kết giải đấu gửi nhà trường.',
     a:'比赛老停，大家都不高兴。',b:'由于比赛断断续续地进行，运动员和观众都不太满意。',better:'b',
     why:'Văn bản gửi nhà trường cần giọng VĂN VIẾT: 由于, 断断续续地进行, 满意. Câu a là khẩu ngữ (老停, 不高兴).'},

    {scene:'Em viết đoạn kết cho bài văn nghị luận nộp cô giáo.',
     a:'生活就像个筐子，咱得有把锯。',b:'生活仿佛篮筐，我们需要的只不过是一把锯子。',better:'b',
     why:'仿佛 là từ văn viết, hợp với bài văn. Câu a dùng 咱, 得 — khẩu ngữ, không hợp bài viết.'},

    {scene:'Em thay mặt lớp cảm ơn thầy hiệu trưởng trong buổi lễ.',
     a:'多亏您的帮助，我们才能顺利完成这个项目。',b:'多亏你了，要不这事儿就黄了。',better:'a',
     why:'Với thầy hiệu trưởng trong buổi lễ phải dùng 您 và lời lẽ trang trọng. 这事儿就黄了 là tiếng lóng (hỏng việc).'},

    {scene:'Bạn thân định đi taxi chỉ để đến quán cách hai trăm mét.',
     a:'我认为您没有必要乘坐出租车。',b:'何必打车呢？走过去不就行了？',better:'b',
     why:'Với bạn thân, 何必……呢？……不就行了？ tự nhiên, gần gũi. Câu a dùng 您, 乘坐 — quá trang trọng, nghe như đang mỉa mai.'},

    {scene:'Thông báo của nhà trường dán trên bảng tin.',
     a:'篮球场这几天不能用，别去了啊！',b:'篮球场正在安装新设备，本周暂停使用。',better:'b',
     why:'Thông báo chính thức dùng giọng văn viết, ngắn gọn: 安装, 暂停使用, 本周. Câu a như nhắn tin cho bạn.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🗣️ KỂ LẠI BÀI ĐỌC 复述 — theo đúng bài tập 4 của sách (tr. 124)
// ══════════════════════════════════════════════════════════════
var retellData = {
  intro: 'Đây là bài tập 4 trong giáo trình: <b>根据下面的提示词复述课文内容</b> — kể lại bài đọc bằng lời của chính em, ' +
         'KHÔNG đọc thuộc lòng. Nhìn dàn ý và các từ khoá bên dưới, bấm ghi âm rồi kể một mạch khoảng 1–2 phút.',
  outline: [
    {step:'Mở', cue:'篮球运动是1891年由……发明的', words:['马萨诸塞州','詹姆士·奈史密斯']},
    {step:'Ra đời', cue:'那年冬天学校缺乏……，他从……中得到了启发', words:['训练','缺乏','项目','桃','筐','启发']},
    {step:'Luật chơi', cue:'他把篮筐安装在……，学生分为……', words:['安装','栏杆','甲','乙','工具']},
    {step:'Phiền toái', cue:'每当球投进时……，比赛……', words:['踩','一再','重复','断断续续','激烈','气氛','何况','球迷']},
    {step:'Tìm cách', cue:'大家想了很多办法，有一位工程师……', words:['工程师','机器','顺畅']},
    {step:'Giải quyết', cue:'一个上幼儿园的小男孩问父亲……', words:['幼儿园','好奇','何必','多亏','连忙','锯','瞧','困扰']},
    {step:'Bài học', cue:'为什么大家都没想到？因为我们的……', words:['思维','呆','造成','仿佛','阻碍']}
  ],
  checklist: [
    'Kể đủ ba phần của sách chưa: bóng rổ ra đời → phiền toái lấy bóng → cậu bé giải quyết?',
    'Có dùng được ít nhất 12 từ mới của bài không?',
    'Có dùng đúng 何必……呢？ khi kể lời cậu bé và 多亏 khi kể kết quả không?',
    'Có nói được bài học ở cuối (思维, 造成) không, hay chỉ kể chuyện?',
    'Có kể bằng LỜI MÌNH, hay đang đọc thuộc nguyên văn?'
  ]
};

// ══════════════════════════════════════════
// SGK · 练习 (Bài tập trong sách, trang 123–124) — trò "Bài tập SGK" ở bước Luyện tập
// ══════════════════════════════════════════
var sgkData = [
  {kieu:'kho', de:'选择合适的词语填空', vn:'Chọn từ thích hợp điền vào chỗ trống', tu:['重复','造成','气氛','缺乏','仿佛','连忙'],
   cau:[
     {s:'今天的晚会你们组织得相当好，＿＿搞得轻松愉快。', dap:['气氛']},
     {s:'一觉醒来发现已经8点多了，李阳＿＿穿好衣服往公司赶。', dap:['连忙']},
     {s:'他一边听，一边在本子上记着什么，＿＿对我的发言挺感兴趣似的。', dap:['仿佛']},
     {s:'心理学家指出，一个人的动作或想法，如果＿＿二十一天就会形成习惯。', dap:['重复']},
     {s:'每天大量饮酒确实给我的身体健康＿＿了很大的伤害。', dap:['造成']},
     {s:'在食物＿＿的季节，动物为了活下去就只能多睡觉。', dap:['缺乏']}
   ]},
  {kieu:'ab', de:'选择正确答案', vn:'Chọn đáp án đúng',
   cau:[
     {s:'要整理的东西太多了，你看，这个箱子根本＿＿不下。', opts:['装','安装'], ans:0, giai:'Cho đồ vào thùng → 装; 装不下 = không đựng hết. 安装 là lắp đặt thiết bị.'},
     {s:'昨晚我失眠了，睡不着就躺着＿＿书，结果不知不觉天就亮了。', opts:['瞧','看'], ans:1, giai:'看书 là cụm cố định. 瞧 là khẩu ngữ "nhìn, xem kìa", không kết hợp với 书 theo nghĩa đọc sách.'},
     {s:'即使在现代社会里，故事仍然是人们生活中不可＿＿的一部分。', opts:['缺少','缺乏'], ans:0, giai:'不可缺少 = không thể thiếu, là cụm cố định. 缺乏 không đi sau 不可.'},
     {s:'你们知道中国人除夕夜守岁、放鞭炮的风俗是怎么＿＿的吗？', opts:['形成','造成'], ans:0, giai:'Phong tục dần hình thành → 形成 (trung tính). 造成 thường đi với kết quả xấu và cần tân ngữ.'}
   ]},
  {kieu:'vitri', de:'给括号里的词选择适当的位置', vn:'Chọn vị trí thích hợp cho từ trong ngoặc',
   cau:[
     {s:'您A多画点儿画儿多好，B把时间C浪费在这些人的身上D？', tu:'何必', ans:'B', giai:'何必 đứng trước cụm động từ được cho là không cần thiết: 何必把时间浪费在这些人的身上？'},
     {s:'A年轻人B恐怕都受不了，C一个D有病的老人呢？', tu:'何况', ans:'C', giai:'何况 mở đầu vế sau, trước B: ……，何况一个有病的老人呢？'},
     {s:'A你提醒，B要不C我肯定忘了D下午还要开会。', tu:'多亏', ans:'A', giai:'多亏 + người + việc đứng đầu câu: 多亏你提醒，要不……'},
     {s:'A经历了那件事后，B我C一夜之间长大D成人了。', tu:'仿佛', ans:'C', giai:'仿佛 là phó từ, đứng sau chủ ngữ 我, trước cụm 一夜之间长大成人.'}
   ]}
];
