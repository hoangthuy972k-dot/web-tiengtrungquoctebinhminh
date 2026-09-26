// ══════════════════════════════════════════
// DATA — HSK5 Bài 3: 人生有选择，一切可改变 (Đời người có lựa chọn, mọi thứ có thể đổi thay)
// Unit 1 了解生活 · Nguồn: HSK标准教程5上 (tr. 28–36) + 练习册 bài 3
// ══════════════════════════════════════════

var vocabData = [
  {n:1,zh:'人生',py:'rénshēng',pos:'Danh từ',vn:'đời người, cuộc đời',hv:'nhân sinh',em:'🛤️',lesson:3,
   explain:['Cả cuộc đời của một con người — hay nói đến lựa chọn, con đường, ý nghĩa sống.'],
   usage:'Hay đi với 道路/目标/意义/经历: 人生道路, 人生的意义. Trang trọng hơn 一辈子 (bài 2).',
   collo:['人生道路','人生的意义','人生目标','美好的人生'],
   ex_zh:'人生有选择，一切可改变。',ex_py:'Rénshēng yǒu xuǎnzé, yíqiè kě gǎibiàn.',ex_vn:'Đời người có lựa chọn, mọi thứ đều có thể đổi thay.',
   exList:[
     {zh:'人生有选择，一切可改变。',py:'Rénshēng yǒu xuǎnzé, yíqiè kě gǎibiàn.',vn:'Đời người có lựa chọn, mọi thứ đều có thể đổi thay.'},
     {zh:'航海就是他人生道路上一段长长的台阶。',py:'Hánghǎi jiù shì tā rénshēng dàolù shang yí duàn chángcháng de táijiē.',vn:'Đi biển chính là một đoạn bậc thềm dài trên đường đời của anh ấy.'},
     {zh:'考上大学只是人生的一个开始。',py:'Kǎoshàng dàxué zhǐ shì rénshēng de yí ge kāishǐ.',vn:'Đỗ đại học chỉ là một khởi đầu của cuộc đời.'}
   ],
   colloFull:[
     {zh:'人生道路',py:'rénshēng dàolù',vn:'đường đời'},
     {zh:'人生的意义',py:'rénshēng de yìyì',vn:'ý nghĩa cuộc đời'},
     {zh:'人生目标',py:'rénshēng mùbiāo',vn:'mục tiêu cuộc đời'},
     {zh:'美好的人生',py:'měihǎo de rénshēng',vn:'cuộc đời tươi đẹp'},
     {zh:'人生经历',py:'rénshēng jīnglì',vn:'trải nghiệm cuộc đời'}
   ],
   patterns:[
     {s:'人生 + 道路 / 目标 / 意义',m:'Đường đời / mục tiêu / ý nghĩa cuộc đời'},
     {s:'人生有 + N',m:'Đời người có … (人生有选择)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ai cũng có mục tiêu cuộc đời của riêng mình, chỉ cần cố gắng là thực hiện được.',answer:'每个人都有自己的人生目标，只要努力，就能实现。',answerPy:'Měi ge rén dōu yǒu zìjǐ de rénshēng mùbiāo, zhǐyào nǔlì, jiù néng shíxiàn.',
      note:'人生目标 = mục tiêu cuộc đời; 只要 ở vế trước, 就 đứng trước động từ vế sau.',pair:'只要……就……'},
     {promptLang:'vi',prompt:'Chuyến đi ấy khiến tôi càng ngày càng hiểu ý nghĩa của cuộc đời.',answer:'那次旅行让我越来越明白人生的意义。',answerPy:'Nà cì lǚxíng ràng wǒ yuè lái yuè míngbai rénshēng de yìyì.',
      note:'人生的意义 là cụm danh từ cố định; 越来越 + động từ tâm lý (明白).',pair:'越来越……'}
   ]},

  {n:2,zh:'工人',py:'gōngrén',pos:'Danh từ',vn:'công nhân',hv:'công nhân',em:'👷',lesson:3,
   explain:['Người lao động làm việc ở nhà máy, đường sắt, công trường…'],
   usage:'Trước thường có ngành nghề: 铁路工人, 工厂工人, 技术工人. Lượng từ 个/名/位.',
   collo:['铁路工人','技术工人','工厂的工人','一名工人'],
   ex_zh:'翟峰和妻子都是铁路工人。',ex_py:'Zhái Fēng hé qīzi dōu shì tiělù gōngrén.',ex_vn:'Trác Phong và vợ đều là công nhân đường sắt.',
   exList:[
     {zh:'翟峰和妻子都是铁路工人。',py:'Zhái Fēng hé qīzi dōu shì tiělù gōngrén.',vn:'Trác Phong và vợ đều là công nhân đường sắt.'},
     {zh:'让许多工厂老板发愁的是有经验的技术工人很难找。',py:'Ràng xǔduō gōngchǎng lǎobǎn fāchóu de shì yǒu jīngyàn de jìshù gōngrén hěn nán zhǎo.',vn:'Điều khiến nhiều ông chủ nhà máy lo lắng là công nhân kỹ thuật có kinh nghiệm rất khó tìm.'},
     {zh:'我爸爸是一名工人，每天早上六点就出门了。',py:'Wǒ bàba shì yì míng gōngrén, měi tiān zǎoshang liù diǎn jiù chūmén le.',vn:'Bố tôi là công nhân, sáng nào sáu giờ đã ra khỏi nhà.'}
   ],
   colloFull:[
     {zh:'铁路工人',py:'tiělù gōngrén',vn:'công nhân đường sắt'},
     {zh:'技术工人',py:'jìshù gōngrén',vn:'công nhân kỹ thuật'},
     {zh:'工厂的工人',py:'gōngchǎng de gōngrén',vn:'công nhân nhà máy'},
     {zh:'一名工人',py:'yì míng gōngrén',vn:'một người công nhân'},
     {zh:'工人们',py:'gōngrénmen',vn:'các công nhân'}
   ],
   patterns:[
     {s:'ngành + 工人 (铁路工人, 技术工人)',m:'Công nhân ngành …'},
     {s:'一名 / 一位 + 工人',m:'Lượng từ trang trọng của 工人'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Các công nhân không những làm việc vất vả mà thu nhập cũng không cao.',answer:'工人们不仅工作很辛苦，收入也不高。',answerPy:'Gōngrénmen bùjǐn gōngzuò hěn xīnkǔ, shōurù yě bù gāo.',
      note:'工人们: thêm 们 để chỉ số nhiều; 不仅 đứng sau chủ ngữ khi hai vế cùng chủ ngữ.',pair:'不仅……也……'},
     {promptLang:'vi',prompt:'Cây cầu này là do các công nhân mất ba năm xây xong.',answer:'这座桥是工人们用三年时间建成的。',answerPy:'Zhè zuò qiáo shì gōngrénmen yòng sān nián shíjiān jiànchéng de.',
      note:'Nhấn mạnh AI làm và làm THẾ NÀO với việc đã xong → 是……的.',pair:'是……的'}
   ]},

  {n:3,zh:'稳定',py:'wěndìng',pos:'Tính từ',vn:'ổn định',hv:'ổn định',em:'⚖️',lesson:3,
   explain:['Vững vàng, không thay đổi lớn — dùng cho công việc, thu nhập, tình cảm, thời tiết, thành tích.'],
   usage:'Làm vị ngữ: 工作稳定; làm định ngữ: 稳定的收入. Cũng dùng như động từ: 稳定情绪 (giữ cho cảm xúc ổn định).',
   collo:['工作稳定','稳定的收入','稳定的关系','成绩很稳定'],
   ex_zh:'他们工作稳定、待遇不错。',ex_py:'Tāmen gōngzuò wěndìng, dàiyù búcuò.',ex_vn:'Công việc của họ ổn định, đãi ngộ khá tốt.',
   exList:[
     {zh:'他们工作稳定、待遇不错。',py:'Tāmen gōngzuò wěndìng, dàiyù búcuò.',vn:'Công việc của họ ổn định, đãi ngộ khá tốt.'},
     {zh:'张老师认为王力的成绩一直都很稳定。',py:'Zhāng lǎoshī rènwéi Wáng Lì de chéngjì yìzhí dōu hěn wěndìng.',vn:'Thầy Trương cho rằng thành tích của Vương Lực luôn rất ổn định.'},
     {zh:'最近天气不太稳定，出门最好带把伞。',py:'Zuìjìn tiānqì bú tài wěndìng, chūmén zuìhǎo dài bǎ sǎn.',vn:'Dạo này thời tiết thất thường, ra ngoài tốt nhất nên mang ô.'}
   ],
   colloFull:[
     {zh:'工作稳定',py:'gōngzuò wěndìng',vn:'công việc ổn định'},
     {zh:'稳定的收入',py:'wěndìng de shōurù',vn:'thu nhập ổn định'},
     {zh:'稳定的关系',py:'wěndìng de guānxi',vn:'mối quan hệ ổn định'},
     {zh:'成绩很稳定',py:'chéngjì hěn wěndìng',vn:'thành tích rất ổn định'},
     {zh:'稳定的生活',py:'wěndìng de shēnghuó',vn:'cuộc sống ổn định'}
   ],
   patterns:[
     {s:'N + 很 / 比较 + 稳定',m:'… rất / khá ổn định'},
     {s:'稳定的 + 工作 / 生活 / 关系 / 收入',m:'… ổn định (bảng 词语搭配 của sách)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy công việc này rất ổn định nhưng anh ấy vẫn muốn nghỉ việc.',answer:'虽然这份工作很稳定，但是他还是想辞职。',answerPy:'Suīrán zhè fèn gōngzuò hěn wěndìng, dànshì tā háishi xiǎng cízhí.',
      note:'Lượng từ của 工作 là 份; 稳定 làm vị ngữ sau 很.',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Lên lớp 11, thành tích của em gái càng ngày càng ổn định.',answer:'上了高二以后，妹妹的成绩越来越稳定了。',answerPy:'Shàngle gāo\'èr yǐhòu, mèimei de chéngjì yuè lái yuè wěndìng le.',
      note:'越来越 + tính từ, cuối câu thêm 了 chỉ sự thay đổi.',pair:'越来越……'}
   ]},

  {n:4,zh:'待遇',py:'dàiyù',pos:'Danh từ',vn:'sự đãi ngộ (lương, phúc lợi)',hv:'đãi ngộ',em:'💰',lesson:3,
   explain:['Lương bổng, phúc lợi, điều kiện mà nơi làm việc dành cho người lao động.'],
   usage:'待遇 + 好/不错/高/低; 提高待遇; 在待遇上 (về mặt đãi ngộ). Khi đi phỏng vấn hay hỏi: 待遇怎么样？',
   collo:['待遇不错','待遇很高','提高待遇','个人待遇'],
   ex_zh:'由于在个人待遇上没谈好，他最后拒绝了这家公司的邀请。',ex_py:'Yóuyú zài gèrén dàiyù shang méi tánhǎo, tā zuìhòu jùjuéle zhè jiā gōngsī de yāoqǐng.',ex_vn:'Vì không thoả thuận được về đãi ngộ cá nhân, cuối cùng anh ấy từ chối lời mời của công ty này.',
   exList:[
     {zh:'由于在个人待遇上没谈好，他最后拒绝了这家公司的邀请。',py:'Yóuyú zài gèrén dàiyù shang méi tánhǎo, tā zuìhòu jùjuéle zhè jiā gōngsī de yāoqǐng.',vn:'Vì không thoả thuận được về đãi ngộ cá nhân, cuối cùng anh ấy từ chối lời mời của công ty này.'},
     {zh:'我对新工作的要求就是待遇稳定。',py:'Wǒ duì xīn gōngzuò de yāoqiú jiù shì dàiyù wěndìng.',vn:'Yêu cầu của tôi với công việc mới chính là đãi ngộ ổn định.'},
     {zh:'这家公司待遇很高，可是工作特别累。',py:'Zhè jiā gōngsī dàiyù hěn gāo, kěshì gōngzuò tèbié lèi.',vn:'Công ty này đãi ngộ rất cao, nhưng công việc cực kỳ mệt.'}
   ],
   colloFull:[
     {zh:'待遇不错',py:'dàiyù búcuò',vn:'đãi ngộ khá tốt'},
     {zh:'待遇很高',py:'dàiyù hěn gāo',vn:'đãi ngộ rất cao'},
     {zh:'提高待遇',py:'tígāo dàiyù',vn:'nâng cao đãi ngộ'},
     {zh:'个人待遇',py:'gèrén dàiyù',vn:'đãi ngộ cá nhân'},
     {zh:'工资待遇',py:'gōngzī dàiyù',vn:'lương bổng, đãi ngộ'}
   ],
   patterns:[
     {s:'待遇 + 好 / 不错 / 高 / 低',m:'Đãi ngộ tốt / cao / thấp'},
     {s:'在 + 待遇 + 上',m:'Về mặt đãi ngộ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi chọn công ty này là vì đãi ngộ tốt.',answer:'我是因为待遇好才选择这家公司的。',answerPy:'Wǒ shì yīnwèi dàiyù hǎo cái xuǎnzé zhè jiā gōngsī de.',
      note:'Nhấn mạnh LÝ DO của việc đã làm → 是 + 因为…… + 才 + V + 的.',pair:'是……的'},
     {promptLang:'vi',prompt:'Nếu không nâng đãi ngộ thì nhiều công nhân sẽ nghỉ việc.',answer:'如果不提高待遇，很多工人就会辞职。',answerPy:'Rúguǒ bù tígāo dàiyù, hěn duō gōngrén jiù huì cízhí.',
      note:'提高待遇 là cụm động–tân cố định; 就 đứng sau chủ ngữ vế sau.',pair:'如果……就……'}
   ]},

  {n:5,zh:'发愁',py:'fā chóu',pos:'Động từ',vn:'lo âu, buồn rầu',hv:'phát sầu',em:'😟',lesson:3,
   explain:['Lo lắng, phiền muộn vì một việc khó giải quyết.'],
   usage:'Động từ ly hợp, không mang tân ngữ. Cấu trúc hay gặp: 为 + việc + 发愁 (lo vì …). Có thể tách: 发过愁, 发什么愁.',
   collo:['为生活发愁','为工作发愁','为考试发愁','让人发愁'],
   ex_zh:'他们有房有车，从不用为生活发愁。',ex_py:'Tāmen yǒu fáng yǒu chē, cóng bú yòng wèi shēnghuó fāchóu.',ex_vn:'Họ có nhà có xe, chưa bao giờ phải lo chuyện sinh sống.',
   exList:[
     {zh:'他们有房有车，从不用为生活发愁。',py:'Tāmen yǒu fáng yǒu chē, cóng bú yòng wèi shēnghuó fāchóu.',vn:'Họ có nhà có xe, chưa bao giờ phải lo chuyện sinh sống.'},
     {zh:'她正在为儿子上学的事发愁。',py:'Tā zhèngzài wèi érzi shàngxué de shì fāchóu.',vn:'Cô ấy đang lo về chuyện đi học của con trai.'},
     {zh:'快考试了，我正为数学发愁呢。',py:'Kuài kǎoshì le, wǒ zhèng wèi shùxué fāchóu ne.',vn:'Sắp thi rồi, tôi đang lo môn Toán đây.'}
   ],
   colloFull:[
     {zh:'为生活发愁',py:'wèi shēnghuó fāchóu',vn:'lo chuyện sinh sống'},
     {zh:'为工作发愁',py:'wèi gōngzuò fāchóu',vn:'lo chuyện công việc'},
     {zh:'为考试发愁',py:'wèi kǎoshì fāchóu',vn:'lo chuyện thi cử'},
     {zh:'让人发愁',py:'ràng rén fāchóu',vn:'khiến người ta lo'},
     {zh:'发什么愁',py:'fā shénme chóu',vn:'lo gì chứ'}
   ],
   patterns:[
     {s:'为 + việc + 发愁',m:'Lo lắng vì … (bảng 词语搭配 của sách)'},
     {s:'✗ 发愁考试 → ✓ 为考试发愁',m:''}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Hễ nhắc đến chuyện tìm việc là anh ấy lại lo.',answer:'一提到找工作的事，他就发愁。',answerPy:'Yì tídào zhǎo gōngzuò de shì, tā jiù fāchóu.',
      note:'发愁 không mang tân ngữ, nên đặt việc gây lo ở vế trước.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Anh ấy chưa bao giờ phải lo vì tiền.',answer:'他从来没为钱发过愁。',answerPy:'Tā cónglái méi wèi qián fāguo chóu.',
      note:'Động từ ly hợp: 过 chen vào giữa → 发过愁.',pair:'从来没……过'}
   ]},

  {n:6,zh:'平静',py:'píngjìng',pos:'Tính từ',vn:'yên ổn, yên ả, lặng',hv:'bình tĩnh',em:'🌊',lesson:3,
   explain:['Yên lặng, không xao động — tả mặt nước, cuộc sống, tâm trạng.'],
   usage:'Chủ ngữ hay gặp: 海面/心情/生活 + 平静. Định ngữ: 平静的生活. Với tâm trạng hay nói 心情久久不能平静 (mãi không lắng xuống).',
   collo:['平静的海面','平静的心情','平静的生活','心情久久不能平静'],
   ex_zh:'可翟峰却不想一辈子过这样平静的生活。',ex_py:'Kě Zhái Fēng què bù xiǎng yíbèizi guò zhèyàng píngjìng de shēnghuó.',ex_vn:'Nhưng Trác Phong lại không muốn cả đời sống cuộc sống yên ả như vậy.',
   exList:[
     {zh:'可翟峰却不想一辈子过这样平静的生活。',py:'Kě Zhái Fēng què bù xiǎng yíbèizi guò zhèyàng píngjìng de shēnghuó.',vn:'Nhưng Trác Phong lại không muốn cả đời sống cuộc sống yên ả như vậy.'},
     {zh:'下午海面平静时，翟峰会和妻子下海游泳或者钓鱼。',py:'Xiàwǔ hǎimiàn píngjìng shí, Zhái Fēng huì hé qīzi xià hǎi yóuyǒng huòzhě diào yú.',vn:'Buổi chiều khi mặt biển lặng, Trác Phong cùng vợ xuống biển bơi hoặc câu cá.'},
     {zh:'听到这个好消息后，我激动的心情久久不能平静。',py:'Tīngdào zhège hǎo xiāoxi hòu, wǒ jīdòng de xīnqíng jiǔjiǔ bù néng píngjìng.',vn:'Nghe tin vui này, lòng tôi xúc động mãi không lắng xuống được.'}
   ],
   colloFull:[
     {zh:'平静的海面',py:'píngjìng de hǎimiàn',vn:'mặt biển lặng'},
     {zh:'平静的心情',py:'píngjìng de xīnqíng',vn:'tâm trạng bình yên'},
     {zh:'平静的生活',py:'píngjìng de shēnghuó',vn:'cuộc sống yên ả'},
     {zh:'心情久久不能平静',py:'xīnqíng jiǔjiǔ bù néng píngjìng',vn:'lòng mãi không lắng xuống'},
     {zh:'平静下来',py:'píngjìng xiàlái',vn:'lắng xuống, dịu lại'}
   ],
   patterns:[
     {s:'平静的 + 海面 / 心情 / 生活',m:'(bảng 词语搭配 của sách)'},
     {s:'心情 + 平静下来 / 久久不能平静',m:'Lòng dịu lại / mãi không lắng xuống'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cuộc sống yên ả của họ bị một cuộc điện thoại phá vỡ.',answer:'他们平静的生活被一个电话打破了。',answerPy:'Tāmen píngjìng de shēnghuó bèi yí ge diànhuà dǎpò le.',
      note:'平静的生活 làm chủ ngữ bị động; 被 + tác nhân + 打破了.',pair:'被'},
     {promptLang:'vi',prompt:'Tuy mọi người đều rất sốt ruột nhưng anh ấy vẫn rất bình thản.',answer:'虽然大家都很着急，但是他还是很平静。',answerPy:'Suīrán dàjiā dōu hěn zháojí, dànshì tā háishi hěn píngjìng.',
      note:'平静 tả trạng thái lòng không xao động, trái với 着急.',pair:'虽然……但是……'}
   ]},

  {n:7,zh:'帆船',py:'fānchuán',pos:'Danh từ',vn:'thuyền buồm',hv:'phàm thuyền',em:'⛵',lesson:3,
   explain:['Thuyền chạy bằng sức gió nhờ cánh buồm (帆 = cánh buồm).'],
   usage:'Lượng từ 艘/条: 一艘帆船. Động từ đi kèm: 驾驶/买/坐 + 帆船; 帆船运动 (môn thuyền buồm).',
   collo:['一艘帆船','驾驶帆船','迷上帆船','帆船运动'],
   ex_zh:'通过电视，翟峰迷上了帆船。',ex_py:'Tōngguò diànshì, Zhái Fēng míshàngle fānchuán.',ex_vn:'Qua tivi, Trác Phong mê thuyền buồm.',
   exList:[
     {zh:'通过电视，翟峰迷上了帆船。',py:'Tōngguò diànshì, Zhái Fēng míshàngle fānchuán.',vn:'Qua tivi, Trác Phong mê thuyền buồm.'},
     {zh:'他们第一次驾驶帆船出海了。',py:'Tāmen dì-yī cì jiàshǐ fānchuán chūhǎi le.',vn:'Lần đầu tiên họ lái thuyền buồm ra biển.'},
     {zh:'在中国，帆船运动现在还不是很普及。',py:'Zài Zhōngguó, fānchuán yùndòng xiànzài hái bú shì hěn pǔjí.',vn:'Ở Trung Quốc, môn thuyền buồm hiện nay còn chưa phổ biến lắm.'}
   ],
   colloFull:[
     {zh:'一艘帆船',py:'yì sōu fānchuán',vn:'một chiếc thuyền buồm'},
     {zh:'驾驶帆船',py:'jiàshǐ fānchuán',vn:'lái thuyền buồm'},
     {zh:'迷上帆船',py:'míshàng fānchuán',vn:'mê thuyền buồm'},
     {zh:'帆船运动',py:'fānchuán yùndòng',vn:'môn thuyền buồm'},
     {zh:'坐帆船出海',py:'zuò fānchuán chūhǎi',vn:'đi thuyền buồm ra biển'}
   ],
   patterns:[
     {s:'一艘 + 帆船',m:'Lượng từ của thuyền: 艘'},
     {s:'驾驶 + 帆船 + 出海',m:'Lái thuyền buồm ra biển'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Để mua chiếc thuyền buồm này, anh ấy đã bán cả nhà lẫn xe.',answer:'为了买这艘帆船，他把房子和车都卖了。',answerPy:'Wèile mǎi zhè sōu fānchuán, tā bǎ fángzi hé chē dōu mài le.',
      note:'这艘帆船: chỉ từ + lượng từ 艘 + danh từ; câu 把 xử lý tân ngữ 房子和车.',pair:'把'},
     {promptLang:'vi',prompt:'Tôi chưa từng đi thuyền buồm.',answer:'我从来没坐过帆船。',answerPy:'Wǒ cónglái méi zuòguo fānchuán.',
      note:'"Đi thuyền" dùng 坐; 过 đứng ngay sau động từ.',pair:'从来没……过'}
   ]},

  {n:8,zh:'撞',py:'zhuàng',pos:'Động từ',vn:'đụng, đâm vào',hv:'chàng',em:'💥',lesson:3,
   explain:['Va mạnh vào người hay vật. Trong bài dùng nghĩa bóng: 撞开“世界之门” (phá tung cánh cửa thế giới).'],
   usage:'Hay có bổ ngữ kết quả: 撞倒/撞伤/撞断/撞开 (bảng 词语搭配). Câu bị động rất hay gặp: 被车撞了.',
   collo:['撞倒','撞伤','撞断','撞开','被车撞了'],
   ex_zh:'他觉得帆船能带他撞开“世界之门”。',ex_py:'Tā juéde fānchuán néng dài tā zhuàngkāi "shìjiè zhī mén".',ex_vn:'Anh ấy thấy thuyền buồm có thể đưa mình phá tung "cánh cửa thế giới".',
   exList:[
     {zh:'他觉得帆船能带他撞开“世界之门”。',py:'Tā juéde fānchuán néng dài tā zhuàngkāi "shìjiè zhī mén".',vn:'Anh ấy thấy thuyền buồm có thể đưa mình phá tung "cánh cửa thế giới".'},
     {zh:'听说你母亲被车撞了？',py:'Tīngshuō nǐ mǔqīn bèi chē zhuàng le?',vn:'Nghe nói mẹ anh bị xe đâm à?'},
     {zh:'他走路时一直看手机，一下子撞到了树上。',py:'Tā zǒulù shí yìzhí kàn shǒujī, yíxiàzi zhuàngdàole shù shang.',vn:'Cậu ấy vừa đi vừa nhìn điện thoại, thế là đâm sầm vào cây.'}
   ],
   colloFull:[
     {zh:'撞倒',py:'zhuàngdǎo',vn:'đâm đổ, đâm ngã'},
     {zh:'撞伤',py:'zhuàngshāng',vn:'đâm bị thương'},
     {zh:'撞断',py:'zhuàngduàn',vn:'đâm gãy'},
     {zh:'撞开',py:'zhuàngkāi',vn:'đâm bật ra, phá tung'},
     {zh:'被车撞了',py:'bèi chē zhuàng le',vn:'bị xe đâm'}
   ],
   patterns:[
     {s:'撞 + 倒 / 伤 / 断 / 开',m:'Đâm đổ / đâm bị thương / đâm gãy / đâm bật ra (bảng 词语搭配)'},
     {s:'Sub + 被 + 车 + 撞 + 了',m:'Ai đó bị xe đâm'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Hôm qua ông tôi bị một chiếc xe đạp đâm ngã.',answer:'昨天我爷爷被一辆自行车撞倒了。',answerPy:'Zuótiān wǒ yéye bèi yí liàng zìxíngchē zhuàngdǎo le.',
      note:'被 + tác nhân + 撞 + bổ ngữ kết quả 倒 + 了.',pair:'被'},
     {promptLang:'vi',prompt:'Cậu bé chạy nhanh quá, đâm đổ cả cái ghế.',answer:'小男孩跑得太快，把椅子撞倒了。',answerPy:'Xiǎo nánhái pǎo de tài kuài, bǎ yǐzi zhuàngdǎo le.',
      note:'Câu 把 bắt buộc có thành phần khác sau động từ: 撞倒了.',pair:'把'}
   ]},

  {n:9,zh:'艘',py:'sōu',pos:'Lượng từ',vn:'chiếc, con (dùng cho tàu, thuyền)',hv:'tao',em:'🚢',lesson:3,
   explain:['Lượng từ dùng cho tàu thuyền.'],
   usage:'一艘船 / 一艘帆船 / 几艘客船. Thiên về văn viết; khẩu ngữ cũng nói 条船. Không dùng 个.',
   collo:['一艘船','一艘帆船','一艘二手船','几艘客船'],
   ex_zh:'只要有一艘船，就能航行在无边无际的海上。',ex_py:'Zhǐyào yǒu yì sōu chuán, jiù néng hángxíng zài wú biān wú jì de hǎi shang.',ex_vn:'Chỉ cần có một chiếc thuyền là có thể giong buồm trên biển cả mênh mông.',
   exList:[
     {zh:'只要有一艘船，就能航行在无边无际的海上。',py:'Zhǐyào yǒu yì sōu chuán, jiù néng hángxíng zài wú biān wú jì de hǎi shang.',vn:'Chỉ cần có một chiếc thuyền là có thể giong buồm trên biển cả mênh mông.'},
     {zh:'他们买下了一艘二手船。',py:'Tāmen mǎixiàle yì sōu èrshǒu chuán.',vn:'Họ mua một chiếc thuyền cũ.'},
     {zh:'这艘客船就像高级宾馆一样。',py:'Zhè sōu kèchuán jiù xiàng gāojí bīnguǎn yíyàng.',vn:'Chiếc tàu khách này giống hệt một khách sạn cao cấp.'}
   ],
   colloFull:[
     {zh:'一艘船',py:'yì sōu chuán',vn:'một chiếc thuyền'},
     {zh:'一艘帆船',py:'yì sōu fānchuán',vn:'một chiếc thuyền buồm'},
     {zh:'一艘二手船',py:'yì sōu èrshǒu chuán',vn:'một chiếc thuyền cũ'},
     {zh:'几艘客船',py:'jǐ sōu kèchuán',vn:'vài chiếc tàu khách'},
     {zh:'这艘船',py:'zhè sōu chuán',vn:'chiếc thuyền này'}
   ],
   patterns:[
     {s:'Số + 艘 + 船',m:'Số + chiếc + thuyền'},
     {s:'✗ 一个船 → ✓ 一艘船 / 一条船',m:''}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần có một chiếc thuyền là có thể đi bất cứ đâu.',answer:'只要有一艘船，就能去任何地方。',answerPy:'Zhǐyào yǒu yì sōu chuán, jiù néng qù rènhé dìfang.',
      note:'Thuyền đếm bằng 艘, không dùng 个.',pair:'只要……就……'},
     {promptLang:'vi',prompt:'Chiếc tàu khách này năm ngoái mới mua.',answer:'这艘客船是去年才买的。',answerPy:'Zhè sōu kèchuán shì qùnián cái mǎi de.',
      note:'Nhấn mạnh THỜI GIAN của việc đã xảy ra → 是……的.',pair:'是……的'}
   ]},

  {n:10,zh:'航行',py:'hángxíng',pos:'Động từ',vn:'đi tàu thuỷ, đi thuyền buồm, giong thuyền',hv:'hàng hành',em:'🧭',lesson:3,
   explain:['Tàu thuyền đi trên mặt nước (máy bay bay trên trời cũng dùng được).'],
   usage:'航行在 + nơi chốn (航行在海上); 航行了 + quãng đường / thời gian (航行了4000多海里).',
   collo:['航行在海上','航行了4000多海里','在海上航行','安全航行'],
   ex_zh:'在经历了八个月、航行了4000多海里之后，翟峰一家终于回到了家。',ex_py:'Zài jīnglìle bā ge yuè, hángxíngle sìqiān duō hǎilǐ zhīhòu, Zhái Fēng yì jiā zhōngyú huídàole jiā.',ex_vn:'Sau tám tháng, đi hơn 4000 hải lý, cả nhà Trác Phong cuối cùng đã về đến nhà.',
   exList:[
     {zh:'在经历了八个月、航行了4000多海里之后，翟峰一家终于回到了家。',py:'Zài jīnglìle bā ge yuè, hángxíngle sìqiān duō hǎilǐ zhīhòu, Zhái Fēng yì jiā zhōngyú huídàole jiā.',vn:'Sau tám tháng, đi hơn 4000 hải lý, cả nhà Trác Phong cuối cùng đã về đến nhà.'},
     {zh:'只要有一艘船，就能航行在无边无际的海上。',py:'Zhǐyào yǒu yì sōu chuán, jiù néng hángxíng zài wú biān wú jì de hǎi shang.',vn:'Chỉ cần có một chiếc thuyền là có thể giong buồm trên biển cả mênh mông.'},
     {zh:'这艘船已经在海上航行了三个月。',py:'Zhè sōu chuán yǐjīng zài hǎi shang hángxíngle sān ge yuè.',vn:'Con thuyền này đã đi trên biển ba tháng rồi.'}
   ],
   colloFull:[
     {zh:'航行在海上',py:'hángxíng zài hǎi shang',vn:'đi trên biển'},
     {zh:'航行了4000多海里',py:'hángxíngle sìqiān duō hǎilǐ',vn:'đã đi hơn 4000 hải lý'},
     {zh:'在海上航行',py:'zài hǎi shang hángxíng',vn:'đi thuyền trên biển'},
     {zh:'安全航行',py:'ānquán hángxíng',vn:'đi an toàn'},
     {zh:'航行时间',py:'hángxíng shíjiān',vn:'thời gian hành trình'}
   ],
   patterns:[
     {s:'航行在 + nơi chốn / 在 + nơi chốn + 航行',m:'Đi (tàu thuyền) trên …'},
     {s:'航行了 + quãng đường / thời gian',m:'Đã đi được …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Thuyền vừa rời bến thì trời đổ mưa to.',answer:'船一开始航行，天就下起了大雨。',answerPy:'Chuán yì kāishǐ hángxíng, tiān jiù xiàqǐle dàyǔ.',
      note:'一 + V, 就 + V: hai việc nối tiếp nhau ngay.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Họ không những đi thuyền trên biển tám tháng mà cũng trải qua nhiều phen nguy hiểm.',answer:'他们不仅在海上航行了八个月，也经历了很多险情。',answerPy:'Tāmen bùjǐn zài hǎi shang hángxíngle bā ge yuè, yě jīnglìle hěn duō xiǎnqíng.',
      note:'航行了 + thời gian: thời lượng đứng sau động từ.',pair:'不仅……也……'}
   ]},

  {n:11,zh:'积蓄',py:'jīxù',pos:'Danh từ / Động từ',vn:'tiền để dành; dành dụm',hv:'tích súc',em:'🐷',lesson:3,
   explain:['Danh từ: số tiền dành dụm được.','Động từ: tích góp dần dần (tiền, sức lực).'],
   usage:'Danh từ: 有/没有积蓄, 一笔积蓄, 花光积蓄. Động từ: 积蓄力量 (tích góp sức lực).',
   collo:['没有积蓄','一笔积蓄','花光积蓄','积蓄力量'],
   ex_zh:'由于翟峰和妻子没有积蓄，于是卖房卖车。',ex_py:'Yóuyú Zhái Fēng hé qīzi méiyǒu jīxù, yúshì mài fáng mài chē.',ex_vn:'Vì Trác Phong và vợ không có tiền để dành nên họ bán nhà bán xe.',
   exList:[
     {zh:'由于翟峰和妻子没有积蓄，于是卖房卖车。',py:'Yóuyú Zhái Fēng hé qīzi méiyǒu jīxù, yúshì mài fáng mài chē.',vn:'Vì Trác Phong và vợ không có tiền để dành nên họ bán nhà bán xe.'},
     {zh:'爷爷用一辈子的积蓄帮我付了学费。',py:'Yéye yòng yíbèizi de jīxù bāng wǒ fùle xuéfèi.',vn:'Ông dùng tiền dành dụm cả đời để đóng học phí cho tôi.'},
     {zh:'我每个月都积蓄一点儿钱，准备暑假去旅行。',py:'Wǒ měi ge yuè dōu jīxù yìdiǎnr qián, zhǔnbèi shǔjià qù lǚxíng.',vn:'Tháng nào tôi cũng dành dụm một ít tiền, chuẩn bị nghỉ hè đi du lịch.'}
   ],
   colloFull:[
     {zh:'没有积蓄',py:'méiyǒu jīxù',vn:'không có tiền để dành'},
     {zh:'一笔积蓄',py:'yì bǐ jīxù',vn:'một khoản tiền để dành'},
     {zh:'花光积蓄',py:'huāguāng jīxù',vn:'tiêu sạch tiền dành dụm'},
     {zh:'积蓄力量',py:'jīxù lìliang',vn:'tích góp sức lực'},
     {zh:'一辈子的积蓄',py:'yíbèizi de jīxù',vn:'tiền dành dụm cả đời'}
   ],
   patterns:[
     {s:'有 / 没有 + 积蓄',m:'Có / không có tiền để dành'},
     {s:'把 + 积蓄 + 花光了',m:'Tiêu sạch tiền để dành'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Để đi du lịch, anh ấy đã tiêu sạch tiền dành dụm.',answer:'为了去旅行，他把积蓄都花光了。',answerPy:'Wèile qù lǚxíng, tā bǎ jīxù dōu huāguāng le.',
      note:'积蓄 là danh từ làm tân ngữ của 把; 花光 = tiêu sạch.',pair:'把'},
     {promptLang:'vi',prompt:'Vì không có tiền để dành nên họ đành bán nhà.',answer:'因为没有积蓄，所以他们只好把房子卖了。',answerPy:'Yīnwèi méiyǒu jīxù, suǒyǐ tāmen zhǐhǎo bǎ fángzi mài le.',
      note:'没有积蓄 = không có tiền để dành; 只好 = đành phải.',pair:'因为……所以……'}
   ]},

  {n:12,zh:'二手',py:'èrshǒu',pos:'Tính từ',vn:'đã qua sử dụng, (đồ) cũ',hv:'nhị thủ',em:'♻️',lesson:3,
   explain:['Đồ đã có người dùng rồi mới bán lại ("qua tay thứ hai").'],
   usage:'Chỉ làm định ngữ, đứng thẳng trước danh từ, không cần 的: 二手车, 二手船, 二手书. Không nói 很二手.',
   collo:['二手车','二手船','二手书','二手市场'],
   ex_zh:'他们买下了一艘二手船，翟峰叫它“彩虹号”。',ex_py:'Tāmen mǎixiàle yì sōu èrshǒu chuán, Zhái Fēng jiào tā "Cǎihóng Hào".',ex_vn:'Họ mua một chiếc thuyền cũ, Trác Phong gọi nó là "tàu Cầu Vồng".',
   exList:[
     {zh:'他们买下了一艘二手船，翟峰叫它“彩虹号”。',py:'Tāmen mǎixiàle yì sōu èrshǒu chuán, Zhái Fēng jiào tā "Cǎihóng Hào".',vn:'Họ mua một chiếc thuyền cũ, Trác Phong gọi nó là "tàu Cầu Vồng".'},
     {zh:'哥哥在网上买了一辆二手自行车。',py:'Gēge zài wǎng shang mǎile yí liàng èrshǒu zìxíngchē.',vn:'Anh trai mua một chiếc xe đạp cũ trên mạng.'},
     {zh:'二手书虽然旧，但是便宜多了。',py:'Èrshǒu shū suīrán jiù, dànshì piányi duō le.',vn:'Sách cũ tuy cũ nhưng rẻ hơn nhiều.'}
   ],
   colloFull:[
     {zh:'二手车',py:'èrshǒuchē',vn:'xe cũ'},
     {zh:'二手船',py:'èrshǒu chuán',vn:'thuyền cũ'},
     {zh:'二手书',py:'èrshǒu shū',vn:'sách cũ'},
     {zh:'二手市场',py:'èrshǒu shìchǎng',vn:'chợ đồ cũ'},
     {zh:'二手手机',py:'èrshǒu shǒujī',vn:'điện thoại cũ'}
   ],
   patterns:[
     {s:'二手 + N (không cần 的)',m:'N đã qua sử dụng'},
     {s:'✗ 这辆车很二手 → ✓ 这是一辆二手车',m:''}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chiếc điện thoại cũ này tuy rẻ nhưng dùng rất tốt.',answer:'这个二手手机虽然便宜，但是很好用。',answerPy:'Zhège èrshǒu shǒujī suīrán piányi, dànshì hěn hǎoyòng.',
      note:'二手 đứng thẳng trước danh từ: 二手手机.',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Mấy cuốn sách cũ này là tôi mua ở chợ đồ cũ.',answer:'这些二手书是我在二手市场买的。',answerPy:'Zhèxiē èrshǒu shū shì wǒ zài èrshǒu shìchǎng mǎi de.',
      note:'Nhấn mạnh NƠI mua (việc đã xảy ra) → 是……的.',pair:'是……的'}
   ]},

  {n:13,zh:'彩虹',py:'cǎihóng',pos:'Danh từ',vn:'cầu vồng',hv:'thái hồng',em:'🌈',lesson:3,
   explain:['Vòng cung nhiều màu xuất hiện trên trời sau cơn mưa.'],
   usage:'Lượng từ 道/条: 一道彩虹. Hay nói 雨后彩虹, 出现彩虹.',
   collo:['一道彩虹','雨后彩虹','出现彩虹','彩虹号'],
   ex_zh:'雨后的彩虹让他感受到一种平静。',ex_py:'Yǔ hòu de cǎihóng ràng tā gǎnshòu dào yì zhǒng píngjìng.',ex_vn:'Cầu vồng sau mưa khiến anh ấy cảm nhận được một sự bình yên.',
   exList:[
     {zh:'雨后的彩虹让他感受到一种平静。',py:'Yǔ hòu de cǎihóng ràng tā gǎnshòu dào yì zhǒng píngjìng.',vn:'Cầu vồng sau mưa khiến anh ấy cảm nhận được một sự bình yên.'},
     {zh:'翟峰把自己的船叫作“彩虹号”。',py:'Zhái Fēng bǎ zìjǐ de chuán jiàozuò "Cǎihóng Hào".',vn:'Trác Phong gọi con thuyền của mình là "tàu Cầu Vồng".'},
     {zh:'雨停了，天上出现了一道美丽的彩虹。',py:'Yǔ tíng le, tiān shang chūxiànle yí dào měilì de cǎihóng.',vn:'Mưa tạnh, trên trời xuất hiện một chiếc cầu vồng tuyệt đẹp.'}
   ],
   colloFull:[
     {zh:'一道彩虹',py:'yí dào cǎihóng',vn:'một chiếc cầu vồng'},
     {zh:'雨后彩虹',py:'yǔ hòu cǎihóng',vn:'cầu vồng sau mưa'},
     {zh:'出现彩虹',py:'chūxiàn cǎihóng',vn:'xuất hiện cầu vồng'},
     {zh:'彩虹号',py:'Cǎihóng Hào',vn:'tàu Cầu Vồng'},
     {zh:'美丽的彩虹',py:'měilì de cǎihóng',vn:'cầu vồng đẹp'}
   ],
   patterns:[
     {s:'一道 + 彩虹',m:'Lượng từ của cầu vồng: 道'},
     {s:'天上 + 出现了 + 彩虹',m:'Trên trời xuất hiện cầu vồng'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Mưa vừa tạnh là trên trời xuất hiện một chiếc cầu vồng.',answer:'雨一停，天上就出现了一道彩虹。',answerPy:'Yǔ yì tíng, tiān shang jiù chūxiànle yí dào cǎihóng.',
      note:'Lượng từ 道; câu tồn hiện: nơi chốn + 出现了 + sự vật.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Cầu vồng đẹp quá, đến bà cũng ra xem.',answer:'彩虹太美了，连奶奶都出来看了。',answerPy:'Cǎihóng tài měi le, lián nǎinai dōu chūlái kàn le.',
      note:'连 + người + 都: nhấn mạnh đến cả người ít ngờ tới nhất.',pair:'连……都……'}
   ]},

  {n:14,zh:'包括',py:'bāokuò',pos:'Động từ',vn:'bao gồm, kể cả',hv:'bao quát',em:'📦',lesson:3,
   explain:['Bao gồm các bộ phận bên trong: A 包括 B、C、D.','Nhấn mạnh một phần trong số đông, có tác dụng nêu ví dụ, bổ sung: 包括……（在内），所有人都…….'],
   usage:'A + 包括 + B 和 C; 包括 X (在内)，所有人都……. Chỉ nói số lượng thì dùng 有, không dùng 包括.',
   collo:['包括……在内','包括四个方面','包括父母','不包括'],
   ex_zh:'然而，包括翟峰的父母，所有人都觉得，翟峰“疯了”。',ex_py:'Rán\'ér, bāokuò Zhái Fēng de fùmǔ, suǒyǒu rén dōu juéde, Zhái Fēng "fēng le".',ex_vn:'Thế nhưng mọi người, kể cả bố mẹ Trác Phong, đều cho rằng Trác Phong "điên rồi".',
   exList:[
     {zh:'然而，包括翟峰的父母，所有人都觉得，翟峰“疯了”。',py:'Rán\'ér, bāokuò Zhái Fēng de fùmǔ, suǒyǒu rén dōu juéde, Zhái Fēng "fēng le".',vn:'Thế nhưng mọi người, kể cả bố mẹ Trác Phong, đều cho rằng Trác Phong "điên rồi".'},
     {zh:'汉语技能教学包括听、说、读、写四个方面。',py:'Hànyǔ jìnéng jiàoxué bāokuò tīng, shuō, dú, xiě sì ge fāngmiàn.',vn:'Dạy kỹ năng tiếng Hán bao gồm bốn mặt: nghe, nói, đọc, viết.'},
     {zh:'我们班所有人，包括最不爱运动的刘方，也都参加了这次运动会。',py:'Wǒmen bān suǒyǒu rén, bāokuò zuì bú ài yùndòng de Liú Fāng, yě dōu cānjiāle zhè cì yùndònghuì.',vn:'Cả lớp chúng tôi, kể cả Lưu Phương — người lười vận động nhất — cũng đều tham gia hội thao lần này.'}
   ],
   colloFull:[
     {zh:'包括……在内',py:'bāokuò …… zài nèi',vn:'kể cả …'},
     {zh:'包括四个方面',py:'bāokuò sì ge fāngmiàn',vn:'bao gồm bốn mặt'},
     {zh:'包括父母',py:'bāokuò fùmǔ',vn:'kể cả bố mẹ'},
     {zh:'不包括',py:'bù bāokuò',vn:'không bao gồm'},
     {zh:'包括早饭',py:'bāokuò zǎofàn',vn:'bao gồm bữa sáng'}
   ],
   patterns:[
     {s:'A + 包括 + B、C、D',m:'A bao gồm B, C, D'},
     {s:'包括 + X (在内)，所有人都……',m:'Kể cả X, mọi người đều …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chuyến du lịch này không những bao gồm vé máy bay mà cũng bao gồm khách sạn.',answer:'这次旅行不仅包括机票，也包括酒店。',answerPy:'Zhè cì lǚxíng bùjǐn bāokuò jīpiào, yě bāokuò jiǔdiàn.',
      note:'包括 + các bộ phận: dùng khi liệt kê những gì nằm bên trong.',pair:'不仅……也……'},
     {promptLang:'vi',prompt:'Kể cả cô giáo, không ai ngờ cậu ấy lại thi được hạng nhất.',answer:'包括老师在内，谁都没想到他居然考了第一名。',answerPy:'Bāokuò lǎoshī zài nèi, shéi dōu méi xiǎngdào tā jūrán kǎole dì-yī míng.',
      note:'包括……在内 (không phải 以内); 居然 ôn lại từ bài 1.',pair:'居然 (bài 1)'}
   ]},

  {n:15,zh:'疯',py:'fēng',pos:'Động từ',vn:'phát điên, hoá điên',hv:'phong',em:'🤪',lesson:3,
   explain:['Mất trí; trong khẩu ngữ hay dùng để nói ai đó làm chuyện quá khác thường: 你疯了吗？'],
   usage:'Thường có 了: 疯了. Còn làm bổ ngữ chỉ mức độ: 急疯了, 高兴疯了, 玩疯了.',
   collo:['疯了','你疯了吗','急疯了','玩疯了'],
   ex_zh:'包括翟峰的父母，所有人都觉得，翟峰“疯了”。',ex_py:'Bāokuò Zhái Fēng de fùmǔ, suǒyǒu rén dōu juéde, Zhái Fēng "fēng le".',ex_vn:'Kể cả bố mẹ Trác Phong, ai cũng cho rằng Trác Phong "điên rồi".',
   exList:[
     {zh:'包括翟峰的父母，所有人都觉得，翟峰“疯了”。',py:'Bāokuò Zhái Fēng de fùmǔ, suǒyǒu rén dōu juéde, Zhái Fēng "fēng le".',vn:'Kể cả bố mẹ Trác Phong, ai cũng cho rằng Trác Phong "điên rồi".'},
     {zh:'你疯了吗？为什么突然要辞职？',py:'Nǐ fēng le ma? Wèi shénme tūrán yào cízhí?',vn:'Anh điên à? Sao tự nhiên lại muốn nghỉ việc?'},
     {zh:'孩子找不到了，妈妈都快急疯了。',py:'Háizi zhǎo bú dào le, māma dōu kuài jífēng le.',vn:'Không tìm thấy con đâu, người mẹ lo đến phát điên.'}
   ],
   colloFull:[
     {zh:'疯了',py:'fēng le',vn:'điên rồi'},
     {zh:'你疯了吗',py:'nǐ fēng le ma',vn:'bạn điên à'},
     {zh:'急疯了',py:'jífēng le',vn:'lo đến phát điên'},
     {zh:'玩疯了',py:'wánfēng le',vn:'chơi quên trời đất'},
     {zh:'高兴疯了',py:'gāoxìng fēng le',vn:'mừng phát điên'}
   ],
   patterns:[
     {s:'Sub + 疯了',m:'Ai đó phát điên (thường là nói quá)'},
     {s:'V / Adj + 疯了 (急疯了, 玩疯了)',m:'… đến phát điên'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Mọi người đều thấy anh ấy điên rồi, đến bố mẹ anh ấy cũng nghĩ vậy.',answer:'大家都觉得他疯了，连他的父母都这么想。',answerPy:'Dàjiā dōu juéde tā fēng le, lián tā de fùmǔ dōu zhème xiǎng.',
      note:'疯了 nói về việc làm khác thường; 连……都 nhấn mạnh người thân cũng nghĩ thế.',pair:'连……都……'},
     {promptLang:'vi',prompt:'Vừa nghỉ hè là bọn trẻ chơi quên trời đất.',answer:'一放暑假，孩子们就玩疯了。',answerPy:'Yí fàng shǔjià, háizimen jiù wánfēng le.',
      note:'玩疯了: 疯 làm bổ ngữ chỉ mức độ.',pair:'一……就……'}
   ]},

  {n:16,zh:'辞职',py:'cí zhí',pos:'Động từ',vn:'từ chức, nghỉ việc',hv:'từ chức',em:'📤',lesson:3,
   explain:['Tự xin thôi công việc đang làm.'],
   usage:'Động từ ly hợp: 辞了职, 辞过职. Không mang tân ngữ: ✗ 辞职公司 → ✓ 从公司辞职 / 辞去工作.',
   collo:['辞职请求','辞了职','突然辞职','提出辞职'],
   ex_zh:'2012年11月24日，辞了职的翟峰和妻子带着休学的女儿，第一次驾驶帆船出海了。',ex_py:'Èr líng yī èr nián shíyī yuè èrshísì rì, cíle zhí de Zhái Fēng hé qīzi dàizhe xiūxué de nǚ\'ér, dì-yī cì jiàshǐ fānchuán chūhǎi le.',ex_vn:'Ngày 24 tháng 11 năm 2012, Trác Phong đã nghỉ việc cùng vợ đưa con gái đang tạm nghỉ học, lần đầu tiên lái thuyền buồm ra biển.',
   exList:[
     {zh:'2012年11月24日，辞了职的翟峰和妻子带着休学的女儿，第一次驾驶帆船出海了。',py:'Èr líng yī èr nián shíyī yuè èrshísì rì, cíle zhí de Zhái Fēng hé qīzi dàizhe xiūxué de nǚ\'ér, dì-yī cì jiàshǐ fānchuán chūhǎi le.',vn:'Ngày 24 tháng 11 năm 2012, Trác Phong đã nghỉ việc cùng vợ đưa con gái đang tạm nghỉ học, lần đầu tiên lái thuyền buồm ra biển.'},
     {zh:'公司已经接受了他的辞职请求。',py:'Gōngsī yǐjīng jiēshòule tā de cízhí qǐngqiú.',vn:'Công ty đã chấp nhận đơn xin nghỉ việc của anh ấy.'},
     {zh:'他工作了十年，上个月突然辞职了。',py:'Tā gōngzuòle shí nián, shàng ge yuè tūrán cízhí le.',vn:'Anh ấy làm mười năm, tháng trước đột nhiên nghỉ việc.'}
   ],
   colloFull:[
     {zh:'辞职请求',py:'cízhí qǐngqiú',vn:'yêu cầu xin nghỉ việc'},
     {zh:'辞了职',py:'cíle zhí',vn:'đã nghỉ việc'},
     {zh:'突然辞职',py:'tūrán cízhí',vn:'đột nhiên nghỉ việc'},
     {zh:'提出辞职',py:'tíchū cízhí',vn:'đề xuất nghỉ việc'},
     {zh:'辞职报告',py:'cízhí bàogào',vn:'đơn xin thôi việc'}
   ],
   patterns:[
     {s:'辞了职 / 辞过职 (ly hợp)',m:'Đã nghỉ việc / từng nghỉ việc'},
     {s:'✗ 辞职公司 → ✓ 从公司辞职 / 辞去工作',m:''}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Anh ấy chưa từng nghỉ việc, đã làm ở công ty này hai mươi năm.',answer:'他从来没辞过职，在这家公司已经工作二十年了。',answerPy:'Tā cónglái méi cíguo zhí, zài zhè jiā gōngsī yǐjīng gōngzuò èrshí nián le.',
      note:'Ly hợp: 辞 + 过 + 职.',pair:'从来没……过'},
     {promptLang:'vi',prompt:'Anh ấy nghỉ việc là để đi ngắm thế giới.',answer:'他是为了去看看世界才辞职的。',answerPy:'Tā shì wèile qù kànkan shìjiè cái cízhí de.',
      note:'Nhấn mạnh MỤC ĐÍCH của việc đã làm → 是 + 为了…… + 才 + V + 的.',pair:'是……的'}
   ]},

  {n:17,zh:'驾驶',py:'jiàshǐ',pos:'Động từ',vn:'điều khiển, lái (xe, tàu, máy bay)',hv:'giá sử',em:'🚗',lesson:3,
   explain:['Điều khiển xe cộ, tàu thuyền, máy bay — trang trọng hơn 开.'],
   usage:'驾驶 + 汽车/帆船/飞机; 驾驶员 (người lái), 驾驶证 (bằng lái). Khẩu ngữ: 开车 = 驾驶汽车; trong bài rút gọn thành 驾船.',
   collo:['驾驶帆船','驾驶汽车','驾驶飞机','安全驾驶'],
   ex_zh:'他们第一次驾驶帆船出海了。',ex_py:'Tāmen dì-yī cì jiàshǐ fānchuán chūhǎi le.',ex_vn:'Lần đầu tiên họ lái thuyền buồm ra biển.',
   exList:[
     {zh:'他们第一次驾驶帆船出海了。',py:'Tāmen dì-yī cì jiàshǐ fānchuán chūhǎi le.',vn:'Lần đầu tiên họ lái thuyền buồm ra biển.'},
     {zh:'喝了酒千万不能驾驶汽车。',py:'Hēle jiǔ qiānwàn bù néng jiàshǐ qìchē.',vn:'Đã uống rượu thì tuyệt đối không được lái xe.'},
     {zh:'这位飞行员已经安全驾驶飞机二十年了。',py:'Zhè wèi fēixíngyuán yǐjīng ānquán jiàshǐ fēijī èrshí nián le.',vn:'Vị phi công này đã lái máy bay an toàn hai mươi năm.'}
   ],
   colloFull:[
     {zh:'驾驶帆船',py:'jiàshǐ fānchuán',vn:'lái thuyền buồm'},
     {zh:'驾驶汽车',py:'jiàshǐ qìchē',vn:'lái ô tô'},
     {zh:'驾驶飞机',py:'jiàshǐ fēijī',vn:'lái máy bay'},
     {zh:'安全驾驶',py:'ānquán jiàshǐ',vn:'lái an toàn'},
     {zh:'驾驶证',py:'jiàshǐzhèng',vn:'bằng lái'}
   ],
   patterns:[
     {s:'驾驶 + phương tiện',m:'Lái (xe, tàu, máy bay)'},
     {s:'驾驶 (văn viết) ≈ 开 (khẩu ngữ)',m:'开车 = 驾驶汽车'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần có bằng lái là bạn có thể lái chiếc xe này.',answer:'只要有驾驶证，你就可以驾驶这辆车。',answerPy:'Zhǐyào yǒu jiàshǐzhèng, nǐ jiù kěyǐ jiàshǐ zhè liàng chē.',
      note:'驾驶证 = bằng lái; 驾驶 + 这辆车.',pair:'只要……就……'},
     {promptLang:'vi',prompt:'Tuy chưa từng lái thuyền buồm nhưng anh ấy đã tự học kiến thức hàng hải.',answer:'虽然他没驾驶过帆船，但是自学了航海知识。',answerPy:'Suīrán tā méi jiàshǐguo fānchuán, dànshì zìxuéle hánghǎi zhīshi.',
      note:'没 + V + 过: chưa từng; 自学 = tự học.',pair:'虽然……但是……'}
   ]},

  {n:18,zh:'轮流',py:'lúnliú',pos:'Động từ',vn:'luân phiên, thay phiên nhau',hv:'luân lưu',em:'🔄',lesson:3,
   explain:['Lần lượt từng người làm, hết người này đến người kia (gần với 轮 "đến lượt" ở bài 1).'],
   usage:'Thường đứng trước động từ: 轮流 + V (轮流驾船, 轮流做家务). Chủ ngữ phải từ hai người trở lên.',
   collo:['轮流驾船','轮流休息','轮流照看','轮流做家务'],
   ex_zh:'白天，翟峰和妻子轮流驾船。',ex_py:'Báitiān, Zhái Fēng hé qīzi lúnliú jià chuán.',ex_vn:'Ban ngày, Trác Phong và vợ thay phiên nhau lái thuyền.',
   exList:[
     {zh:'白天，翟峰和妻子轮流驾船。',py:'Báitiān, Zhái Fēng hé qīzi lúnliú jià chuán.',vn:'Ban ngày, Trác Phong và vợ thay phiên nhau lái thuyền.'},
     {zh:'我们都认为不能因为工作影响生活，比如我们会轮流做家务。',py:'Wǒmen dōu rènwéi bù néng yīnwèi gōngzuò yǐngxiǎng shēnghuó, bǐrú wǒmen huì lúnliú zuò jiāwù.',vn:'Chúng tôi đều cho rằng không thể vì công việc mà ảnh hưởng cuộc sống, chẳng hạn chúng tôi thay phiên nhau làm việc nhà.'},
     {zh:'爷爷住院的时候，爸爸和叔叔轮流照看他。',py:'Yéye zhùyuàn de shíhou, bàba hé shūshu lúnliú zhàokàn tā.',vn:'Khi ông nằm viện, bố và chú thay phiên nhau trông ông.'}
   ],
   colloFull:[
     {zh:'轮流驾船',py:'lúnliú jià chuán',vn:'thay phiên lái thuyền'},
     {zh:'轮流休息',py:'lúnliú xiūxi',vn:'thay phiên nghỉ ngơi'},
     {zh:'轮流照看',py:'lúnliú zhàokàn',vn:'thay phiên trông nom'},
     {zh:'轮流做家务',py:'lúnliú zuò jiāwù',vn:'thay phiên làm việc nhà'},
     {zh:'轮流值日',py:'lúnliú zhírì',vn:'trực nhật luân phiên'}
   ],
   patterns:[
     {s:'A 和 B + 轮流 + V',m:'A và B thay phiên nhau … (bảng 词语搭配)'},
     {s:'✗ 我轮流打扫 → ✓ 我们轮流打扫',m:'Chủ ngữ phải là số nhiều'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chúng tôi thay phiên nhau dọn phòng sạch sẽ.',answer:'我们轮流把房间打扫干净。',answerPy:'Wǒmen lúnliú bǎ fángjiān dǎsǎo gānjìng.',
      note:'轮流 đứng trước cả cụm 把 + tân ngữ + động từ.',pair:'把'},
     {promptLang:'vi',prompt:'Bố mẹ không những thay nhau nấu cơm mà cũng thay nhau rửa bát.',answer:'爸爸妈妈不仅轮流做饭，也轮流洗碗。',answerPy:'Bàba māma bùjǐn lúnliú zuòfàn, yě lúnliú xǐ wǎn.',
      note:'Chủ ngữ hai người → dùng được 轮流.',pair:'不仅……也……'}
   ]},

  {n:19,zh:'钓',py:'diào',pos:'Động từ',vn:'câu (cá)',hv:'điếu',em:'🎣',lesson:3,
   explain:['Dùng cần câu bắt cá.'],
   usage:'钓鱼 (câu cá); 钓到 / 钓上来 / 钓回来 + số lượng + 鱼. Lượng từ của cá: 条.',
   collo:['钓鱼','去钓鱼','钓到一条鱼','钓回来好几条鱼'],
   ex_zh:'下午海面平静时，翟峰会和妻子下海游泳或者钓鱼。',ex_py:'Xiàwǔ hǎimiàn píngjìng shí, Zhái Fēng huì hé qīzi xià hǎi yóuyǒng huòzhě diào yú.',ex_vn:'Buổi chiều khi mặt biển lặng, Trác Phong cùng vợ xuống biển bơi hoặc câu cá.',
   exList:[
     {zh:'下午海面平静时，翟峰会和妻子下海游泳或者钓鱼。',py:'Xiàwǔ hǎimiàn píngjìng shí, Zhái Fēng huì hé qīzi xià hǎi yóuyǒng huòzhě diào yú.',vn:'Buổi chiều khi mặt biển lặng, Trác Phong cùng vợ xuống biển bơi hoặc câu cá.'},
     {zh:'你今天下午不是钓回来好几条鱼吗？',py:'Nǐ jīntiān xiàwǔ bú shì diào huílái hǎo jǐ tiáo yú ma?',vn:'Chiều nay anh chẳng câu về được mấy con cá đó sao?'},
     {zh:'爷爷周末常去湖边钓鱼。',py:'Yéye zhōumò cháng qù hú biān diàoyú.',vn:'Cuối tuần ông thường ra hồ câu cá.'}
   ],
   colloFull:[
     {zh:'钓鱼',py:'diàoyú',vn:'câu cá'},
     {zh:'去钓鱼',py:'qù diàoyú',vn:'đi câu cá'},
     {zh:'钓到一条鱼',py:'diàodào yì tiáo yú',vn:'câu được một con cá'},
     {zh:'钓回来好几条鱼',py:'diào huílái hǎo jǐ tiáo yú',vn:'câu về được mấy con cá'},
     {zh:'钓上来',py:'diào shànglái',vn:'câu lên được'}
   ],
   patterns:[
     {s:'钓 + 鱼',m:'Câu cá'},
     {s:'钓到 / 钓回来 + số lượng + 鱼',m:'Câu được … con cá'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cứ đến cuối tuần là ông đi câu cá.',answer:'爷爷一到周末就去钓鱼。',answerPy:'Yéye yí dào zhōumò jiù qù diàoyú.',
      note:'Chủ ngữ đứng trước 一; 就 đứng trước động từ vế sau.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Cả buổi chiều, đến một con cá anh ấy cũng không câu được.',answer:'一个下午，他连一条鱼都没钓到。',answerPy:'Yí ge xiàwǔ, tā lián yì tiáo yú dōu méi diàodào.',
      note:'连 + 一 + lượng từ + danh từ + 都 + 没: nhấn mạnh "không một … nào".',pair:'连……都……'}
   ]},

  {n:20,zh:'顿',py:'dùn',pos:'Lượng từ',vn:'bữa (ăn); trận (mắng, đánh)',hv:'đốn',em:'🍽️',lesson:3,
   explain:['Lượng từ cho bữa ăn; cũng dùng cho một lần mắng, phê bình, khuyên bảo.'],
   usage:'一顿饭, 一顿海鲜, 一日三顿; V + 了 + (người) + 一顿: 骂了他一顿, 说了我一顿.',
   collo:['一顿饭','一顿海鲜','一日三顿','骂了他一顿'],
   ex_zh:'该吃饭时，妻子会给全家人做一顿美味的海鲜。',ex_py:'Gāi chīfàn shí, qīzi huì gěi quán jiā rén zuò yí dùn měiwèi de hǎixiān.',ex_vn:'Đến bữa, người vợ nấu cho cả nhà một bữa hải sản ngon lành.',
   exList:[
     {zh:'该吃饭时，妻子会给全家人做一顿美味的海鲜。',py:'Gāi chīfàn shí, qīzi huì gěi quán jiā rén zuò yí dùn měiwèi de hǎixiān.',vn:'Đến bữa, người vợ nấu cho cả nhà một bữa hải sản ngon lành.'},
     {zh:'为了庆祝我考上大学，爸爸请全家吃了一顿饭。',py:'Wèile qìngzhù wǒ kǎoshàng dàxué, bàba qǐng quán jiā chīle yí dùn fàn.',vn:'Để mừng tôi đỗ đại học, bố mời cả nhà một bữa cơm.'},
     {zh:'我回家太晚，被妈妈说了一顿。',py:'Wǒ huí jiā tài wǎn, bèi māma shuōle yí dùn.',vn:'Tôi về nhà muộn quá, bị mẹ mắng cho một trận.'}
   ],
   colloFull:[
     {zh:'一顿饭',py:'yí dùn fàn',vn:'một bữa cơm'},
     {zh:'一顿海鲜',py:'yí dùn hǎixiān',vn:'một bữa hải sản'},
     {zh:'一日三顿',py:'yí rì sān dùn',vn:'một ngày ba bữa'},
     {zh:'骂了他一顿',py:'màle tā yí dùn',vn:'mắng anh ta một trận'},
     {zh:'吃了一顿好的',py:'chīle yí dùn hǎo de',vn:'ăn một bữa ngon'}
   ],
   patterns:[
     {s:'一顿 + 饭 / 海鲜',m:'Một bữa … (bảng 词语搭配)'},
     {s:'V + 了 + (người) + 一顿',m:'Mắng / phê bình ai một trận'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vì về nhà quá muộn, tôi bị bố mắng một trận.',answer:'因为回家太晚，我被爸爸骂了一顿。',answerPy:'Yīnwèi huí jiā tài wǎn, wǒ bèi bàba màle yí dùn.',
      note:'Số lượng 一顿 đứng sau động từ + 了.',pair:'被'},
     {promptLang:'vi',prompt:'Bữa hải sản này là mẹ tự tay nấu.',answer:'这顿海鲜是妈妈亲手做的。',answerPy:'Zhè dùn hǎixiān shì māma qīnshǒu zuò de.',
      note:'这 + 顿 + danh từ; nhấn mạnh AI làm → 是……的.',pair:'是……的'}
   ]},

  {n:21,zh:'海鲜',py:'hǎixiān',pos:'Danh từ',vn:'hải sản',hv:'hải tiên',em:'🦐',lesson:3,
   explain:['Cá, tôm, cua, mực… tươi từ biển dùng làm món ăn.'],
   usage:'吃/做 + 海鲜; 海鲜餐厅; lượng từ bữa: 一顿海鲜. 对海鲜过敏 = dị ứng hải sản.',
   collo:['吃海鲜','一顿海鲜','新鲜的海鲜','海鲜餐厅'],
   ex_zh:'妻子会给全家人做一顿美味的海鲜。',ex_py:'Qīzi huì gěi quán jiā rén zuò yí dùn měiwèi de hǎixiān.',ex_vn:'Người vợ nấu cho cả nhà một bữa hải sản ngon lành.',
   exList:[
     {zh:'妻子会给全家人做一顿美味的海鲜。',py:'Qīzi huì gěi quán jiā rén zuò yí dùn měiwèi de hǎixiān.',vn:'Người vợ nấu cho cả nhà một bữa hải sản ngon lành.'},
     {zh:'这家海鲜餐厅的菜又新鲜又便宜。',py:'Zhè jiā hǎixiān cāntīng de cài yòu xīnxiān yòu piányi.',vn:'Món ăn ở nhà hàng hải sản này vừa tươi vừa rẻ.'},
     {zh:'我对海鲜过敏，一吃就难受。',py:'Wǒ duì hǎixiān guòmǐn, yì chī jiù nánshòu.',vn:'Tôi dị ứng hải sản, cứ ăn vào là khó chịu.'}
   ],
   colloFull:[
     {zh:'吃海鲜',py:'chī hǎixiān',vn:'ăn hải sản'},
     {zh:'一顿海鲜',py:'yí dùn hǎixiān',vn:'một bữa hải sản'},
     {zh:'新鲜的海鲜',py:'xīnxiān de hǎixiān',vn:'hải sản tươi'},
     {zh:'海鲜餐厅',py:'hǎixiān cāntīng',vn:'nhà hàng hải sản'},
     {zh:'做海鲜',py:'zuò hǎixiān',vn:'nấu hải sản'}
   ],
   patterns:[
     {s:'吃 / 做 + 海鲜',m:'Ăn / nấu hải sản'},
     {s:'对 + 海鲜 + 过敏',m:'Dị ứng hải sản'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Người thích ăn hải sản càng ngày càng nhiều.',answer:'喜欢吃海鲜的人越来越多了。',answerPy:'Xǐhuan chī hǎixiān de rén yuè lái yuè duō le.',
      note:'Cụm 喜欢吃海鲜 làm định ngữ cho 人.',pair:'越来越……'},
     {promptLang:'vi',prompt:'Em trai tôi hễ ăn hải sản là bị dị ứng.',answer:'我弟弟一吃海鲜就过敏。',answerPy:'Wǒ dìdi yì chī hǎixiān jiù guòmǐn.',
      note:'一 + V + tân ngữ, 就 + kết quả.',pair:'一……就……'}
   ]},

  {n:22,zh:'傍晚',py:'bàngwǎn',pos:'Danh từ',vn:'hoàng hôn, lúc chạng vạng',hv:'bạng vãn',em:'🌇',lesson:3,
   explain:['Khoảng thời gian gần tối, lúc mặt trời sắp lặn.'],
   usage:'Làm trạng ngữ thời gian ở đầu câu hoặc sau chủ ngữ: 傍晚的时候, 每天傍晚, 到了傍晚.',
   collo:['傍晚的时候','每天傍晚','傍晚时分','到了傍晚'],
   ex_zh:'傍晚是一家人最舒适的时候。',ex_py:'Bàngwǎn shì yì jiā rén zuì shūshì de shíhou.',ex_vn:'Chạng vạng là lúc cả nhà thoải mái nhất.',
   exList:[
     {zh:'傍晚是一家人最舒适的时候。',py:'Bàngwǎn shì yì jiā rén zuì shūshì de shíhou.',vn:'Chạng vạng là lúc cả nhà thoải mái nhất.'},
     {zh:'每天傍晚，爷爷奶奶都会去公园散步。',py:'Měi tiān bàngwǎn, yéye nǎinai dōu huì qù gōngyuán sànbù.',vn:'Chiều tối nào ông bà cũng đi dạo công viên.'},
     {zh:'到了傍晚，雨终于停了。',py:'Dàole bàngwǎn, yǔ zhōngyú tíng le.',vn:'Đến chạng vạng, mưa cuối cùng cũng tạnh.'}
   ],
   colloFull:[
     {zh:'傍晚的时候',py:'bàngwǎn de shíhou',vn:'lúc chạng vạng'},
     {zh:'每天傍晚',py:'měi tiān bàngwǎn',vn:'chiều tối hằng ngày'},
     {zh:'傍晚时分',py:'bàngwǎn shífēn',vn:'lúc hoàng hôn'},
     {zh:'到了傍晚',py:'dàole bàngwǎn',vn:'đến chạng vạng'},
     {zh:'傍晚的海边',py:'bàngwǎn de hǎi biān',vn:'bờ biển lúc hoàng hôn'}
   ],
   patterns:[
     {s:'傍晚 + 是 + ……的时候',m:'Chạng vạng là lúc …'},
     {s:'每天傍晚，Sub + V',m:'Chiều tối nào cũng …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chiều tối hôm qua tôi bị mưa làm ướt hết.',answer:'昨天傍晚我被雨淋湿了。',answerPy:'Zuótiān bàngwǎn wǒ bèi yǔ línshī le.',
      note:'Thời gian 昨天傍晚 đứng đầu câu, trước chủ ngữ.',pair:'被'},
     {promptLang:'vi',prompt:'Cứ đến chạng vạng là bờ biển đông người hẳn lên.',answer:'一到傍晚，海边的人就多了起来。',answerPy:'Yí dào bàngwǎn, hǎi biān de rén jiù duōle qǐlái.',
      note:'一到 + thời gian, 就……: hễ đến lúc … là ….',pair:'一……就……'}
   ]},

  {n:23,zh:'舒适',py:'shūshì',pos:'Tính từ',vn:'dễ chịu, thoải mái',hv:'thư thích',em:'🛋️',lesson:3,
   explain:['Dễ chịu, thoải mái — thiên về VĂN VIẾT, tả cảm giác chung mà môi trường mang lại.'],
   usage:'Hay đi với 环境/房间/座位/生活: 舒适的环境. Rất ít khi lặp lại. Khác 舒服 (khẩu ngữ, cảm giác cụ thể của cơ thể) — xem phần 词语辨析.',
   collo:['舒适的环境','舒适的座位','舒适的房间','乘坐舒适'],
   ex_zh:'傍晚是一家人最舒适的时候。',ex_py:'Bàngwǎn shì yì jiā rén zuì shūshì de shíhou.',ex_vn:'Chạng vạng là lúc cả nhà thoải mái nhất.',
   exList:[
     {zh:'傍晚是一家人最舒适的时候。',py:'Bàngwǎn shì yì jiā rén zuì shūshì de shíhou.',vn:'Chạng vạng là lúc cả nhà thoải mái nhất.'},
     {zh:'我们都需要一个轻松舒适的生活环境。',py:'Wǒmen dōu xūyào yí ge qīngsōng shūshì de shēnghuó huánjìng.',vn:'Chúng ta đều cần một môi trường sống thoải mái dễ chịu.'},
     {zh:'这款车内部空间宽大，乘坐舒适。',py:'Zhè kuǎn chē nèibù kōngjiān kuāndà, chéngzuò shūshì.',vn:'Mẫu xe này không gian bên trong rộng rãi, ngồi rất êm.'}
   ],
   colloFull:[
     {zh:'舒适的环境',py:'shūshì de huánjìng',vn:'môi trường dễ chịu'},
     {zh:'舒适的座位',py:'shūshì de zuòwèi',vn:'chỗ ngồi thoải mái'},
     {zh:'舒适的房间',py:'shūshì de fángjiān',vn:'căn phòng dễ chịu'},
     {zh:'乘坐舒适',py:'chéngzuò shūshì',vn:'ngồi (xe) êm ái'},
     {zh:'舒适的生活',py:'shūshì de shēnghuó',vn:'cuộc sống thoải mái'}
   ],
   patterns:[
     {s:'舒适的 + 环境 / 房间 / 座位',m:'… thoải mái, dễ chịu'},
     {s:'环境 / 房间 + 舒适',m:'Môi trường / phòng dễ chịu'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Khách sạn này không những rẻ mà phòng cũng rất dễ chịu.',answer:'这家宾馆不仅便宜，房间也很舒适。',answerPy:'Zhè jiā bīnguǎn bùjǐn piányi, fángjiān yě hěn shūshì.',
      note:'Tả CĂN PHÒNG (môi trường) → 舒适 hợp văn giới thiệu.',pair:'不仅……也……'},
     {promptLang:'vi',prompt:'Tuy nhà không rộng nhưng mẹ đã bày biện rất thoải mái.',answer:'虽然家里不大，但是妈妈把它布置得很舒适。',answerPy:'Suīrán jiā li bú dà, dànshì māma bǎ tā bùzhì de hěn shūshì.',
      note:'把 + tân ngữ + V + 得 + 很舒适: bổ ngữ trạng thái.',pair:'虽然……但是……'}
   ]},

  {n:24,zh:'干活儿',py:'gàn huór',pos:'Động từ',vn:'làm việc (chân tay, việc nhà)',hv:'cán hoạt nhi',em:'🧹',lesson:3,
   explain:['Làm việc, thường là việc chân tay, việc nhà (khẩu ngữ).'],
   usage:'Động từ ly hợp: 干完活儿, 干了一天活儿. Khẩu ngữ — viết trang trọng thì dùng 工作.',
   collo:['干完活儿','开始干活儿','干了一天活儿','帮忙干活儿'],
   ex_zh:'干完活儿，一家人坐在一起，用电脑看看电影，或者聊聊天儿。',ex_py:'Gànwán huór, yì jiā rén zuò zài yìqǐ, yòng diànnǎo kànkan diànyǐng, huòzhě liáoliao tiānr.',ex_vn:'Làm xong việc, cả nhà ngồi quây quần, xem phim trên máy tính hoặc trò chuyện.',
   exList:[
     {zh:'干完活儿，一家人坐在一起，用电脑看看电影，或者聊聊天儿。',py:'Gànwán huór, yì jiā rén zuò zài yìqǐ, yòng diànnǎo kànkan diànyǐng, huòzhě liáoliao tiānr.',vn:'Làm xong việc, cả nhà ngồi quây quần, xem phim trên máy tính hoặc trò chuyện.'},
     {zh:'我随时可以开始干活儿。',py:'Wǒ suíshí kěyǐ kāishǐ gànhuór.',vn:'Tôi có thể bắt đầu làm việc bất cứ lúc nào.'},
     {zh:'周末我常帮奶奶在院子里干活儿。',py:'Zhōumò wǒ cháng bāng nǎinai zài yuànzi li gànhuór.',vn:'Cuối tuần tôi hay giúp bà làm việc ngoài sân.'}
   ],
   colloFull:[
     {zh:'干完活儿',py:'gànwán huór',vn:'làm xong việc'},
     {zh:'开始干活儿',py:'kāishǐ gànhuór',vn:'bắt đầu làm việc'},
     {zh:'干了一天活儿',py:'gànle yì tiān huór',vn:'làm việc cả ngày'},
     {zh:'帮忙干活儿',py:'bāngmáng gànhuór',vn:'giúp làm việc'},
     {zh:'干农活儿',py:'gàn nónghuór',vn:'làm việc đồng áng'}
   ],
   patterns:[
     {s:'干 + 完 / 了一天 + 活儿 (ly hợp)',m:'Làm xong việc / làm cả ngày'},
     {s:'干活儿 (khẩu ngữ) ≈ 工作 / 劳动',m:''}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Anh ấy vừa làm xong việc là lăn ra ngủ.',answer:'他一干完活儿就睡着了。',answerPy:'Tā yí gànwán huór jiù shuìzháo le.',
      note:'Ly hợp: bổ ngữ 完 chen giữa 干 và 活儿.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Ông tôi làm lụng cả đời, chưa bao giờ kêu mệt.',answer:'爷爷干了一辈子活儿，从来没说过累。',answerPy:'Yéye gànle yíbèizi huór, cónglái méi shuōguo lèi.',
      note:'Thời lượng 一辈子 chen giữa 干了 và 活儿; 一辈子 ôn từ bài 2.',pair:'从来没……过'}
   ]},

  {n:25,zh:'盼望',py:'pànwàng',pos:'Động từ',vn:'trông mong, mong mỏi',hv:'phán vọng',em:'🙏',lesson:3,
   explain:['Mong mỏi tha thiết điều gì đó xảy ra — mức độ mạnh hơn 希望.'],
   usage:'盼望 + việc/sự kiện: 盼望过年, 盼望好消息; 盼望着 + câu; ……是 + Sub + 盼望已久的. Không làm danh từ (khác 希望).',
   collo:['盼望好消息','盼望过年','盼望成功','盼望已久'],
   ex_zh:'这样的生活，是翟峰盼望已久的。',ex_py:'Zhèyàng de shēnghuó, shì Zhái Fēng pànwàng yǐ jiǔ de.',ex_vn:'Cuộc sống như thế là điều Trác Phong mong mỏi từ lâu.',
   exList:[
     {zh:'这样的生活，是翟峰盼望已久的。',py:'Zhèyàng de shēnghuó, shì Zhái Fēng pànwàng yǐ jiǔ de.',vn:'Cuộc sống như thế là điều Trác Phong mong mỏi từ lâu.'},
     {zh:'现在，父母、妻子和孩子都盼望着他早日学成回国。',py:'Xiànzài, fùmǔ, qīzi hé háizi dōu pànwàngzhe tā zǎorì xuéchéng huí guó.',vn:'Giờ đây, bố mẹ, vợ và con đều mong anh ấy sớm học xong về nước.'},
     {zh:'小时候，我天天盼望过年。',py:'Xiǎo shíhou, wǒ tiāntiān pànwàng guònián.',vn:'Hồi nhỏ, ngày nào tôi cũng mong đến Tết.'}
   ],
   colloFull:[
     {zh:'盼望好消息',py:'pànwàng hǎo xiāoxi',vn:'mong tin vui'},
     {zh:'盼望过年',py:'pànwàng guònián',vn:'mong đến Tết'},
     {zh:'盼望成功',py:'pànwàng chénggōng',vn:'mong thành công'},
     {zh:'盼望已久',py:'pànwàng yǐ jiǔ',vn:'mong mỏi đã lâu'},
     {zh:'盼望着',py:'pànwàngzhe',vn:'đang mong'}
   ],
   patterns:[
     {s:'盼望 + (好)消息 / 过年 / 成功',m:'(bảng 词语搭配 của sách)'},
     {s:'……是 + Sub + 盼望已久的',m:'… là điều ai đó mong đợi đã lâu'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Kỳ nghỉ hè là điều bọn trẻ mong mỏi đã lâu.',answer:'暑假是孩子们盼望已久的。',answerPy:'Shǔjià shì háizimen pànwàng yǐ jiǔ de.',
      note:'Mẫu câu của bài: ……是 + Sub + 盼望已久的.',pair:'是……的'},
     {promptLang:'vi',prompt:'Kỳ nghỉ càng ngày càng gần, cả nhà đều mong được đi biển.',answer:'假期越来越近了，全家人都盼望着去海边。',answerPy:'Jiàqī yuè lái yuè jìn le, quán jiā rén dōu pànwàngzhe qù hǎi biān.',
      note:'盼望着 + cụm động từ: đang mong được làm gì.',pair:'越来越……'}
   ]},

  {n:26,zh:'陆地',py:'lùdì',pos:'Danh từ',vn:'đất liền',hv:'lục địa',em:'🏝️',lesson:3,
   explain:['Phần mặt đất không bị biển che phủ, đối lập với biển.'],
   usage:'陆地上 (trên đất liền), 回到陆地; đối lập với 海上/海洋. Âm Hán–Việt "lục địa" nhưng nghĩa rộng — chỉ đất liền nói chung.',
   collo:['陆地上','回到陆地','陆地和海洋','陆地交通'],
   ex_zh:'以前陆地上的夜晚，他们在各自的房间，一家人没有更多的交流。',ex_py:'Yǐqián lùdì shang de yèwǎn, tāmen zài gèzì de fángjiān, yì jiā rén méiyǒu gèng duō de jiāoliú.',ex_vn:'Trước đây, những buổi tối trên đất liền, họ ở trong phòng riêng của mình, cả nhà không trò chuyện gì nhiều.',
   exList:[
     {zh:'以前陆地上的夜晚，他们在各自的房间，一家人没有更多的交流。',py:'Yǐqián lùdì shang de yèwǎn, tāmen zài gèzì de fángjiān, yì jiā rén méiyǒu gèng duō de jiāoliú.',vn:'Trước đây, những buổi tối trên đất liền, họ ở trong phòng riêng của mình, cả nhà không trò chuyện gì nhiều.'},
     {zh:'在海上航行了八个月，他们终于回到了陆地。',py:'Zài hǎi shang hángxíngle bā ge yuè, tāmen zhōngyú huídàole lùdì.',vn:'Đi trên biển tám tháng, cuối cùng họ đã trở về đất liền.'},
     {zh:'地球上海洋的面积比陆地大得多。',py:'Dìqiú shang hǎiyáng de miànjī bǐ lùdì dà de duō.',vn:'Trên Trái Đất, diện tích đại dương lớn hơn đất liền nhiều.'}
   ],
   colloFull:[
     {zh:'陆地上',py:'lùdì shang',vn:'trên đất liền'},
     {zh:'回到陆地',py:'huídào lùdì',vn:'trở về đất liền'},
     {zh:'陆地和海洋',py:'lùdì hé hǎiyáng',vn:'đất liền và đại dương'},
     {zh:'陆地交通',py:'lùdì jiāotōng',vn:'giao thông đường bộ'},
     {zh:'陆地动物',py:'lùdì dòngwù',vn:'động vật trên cạn'}
   ],
   patterns:[
     {s:'陆地上的 + N',m:'… trên đất liền'},
     {s:'陆地 ↔ 海上 / 海洋',m:'Đất liền đối lập với biển'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Trên biển họ vui hơn trên đất liền nhiều.',answer:'他们在海上比在陆地上快乐多了。',answerPy:'Tāmen zài hǎi shang bǐ zài lùdì shang kuàilè duō le.',
      note:'So sánh hai nơi chốn: 在A + 比 + 在B + tính từ + 多了.',pair:'比……多了'},
     {promptLang:'vi',prompt:'Vừa về đến đất liền, con gái liền gọi điện cho ông bà.',answer:'一回到陆地，女儿就给爷爷奶奶打了电话。',answerPy:'Yì huídào lùdì, nǚ\'ér jiù gěi yéye nǎinai dǎle diànhuà.',
      note:'回到陆地 = trở về đất liền.',pair:'一……就……'}
   ]},

  {n:27,zh:'各自',py:'gèzì',pos:'Đại từ',vn:'từng người, riêng mình, mỗi (bên)',hv:'các tự',em:'👥',lesson:3,
   explain:['Mỗi người tự mình, hoặc mỗi bên trong nhiều bên. Thường đi cùng đối tượng mà nó chỉ, làm chủ ngữ hoặc định ngữ.'],
   usage:'Sau chủ ngữ số nhiều: 同学们各自回家; làm định ngữ: 各自的房间. Chủ ngữ số ít thì không dùng được.',
   collo:['各自的房间','各自回家','各自的想法','各自提交的计划'],
   ex_zh:'中场休息时间到了，比赛双方队员各自回场外休息。',ex_py:'Zhōngchǎng xiūxi shíjiān dào le, bǐsài shuāngfāng duìyuán gèzì huí chǎng wài xiūxi.',ex_vn:'Đến giờ nghỉ giữa hiệp, cầu thủ hai đội ai về chỗ nghỉ của đội nấy ngoài sân.',
   exList:[
     {zh:'中场休息时间到了，比赛双方队员各自回场外休息。',py:'Zhōngchǎng xiūxi shíjiān dào le, bǐsài shuāngfāng duìyuán gèzì huí chǎng wài xiūxi.',vn:'Đến giờ nghỉ giữa hiệp, cầu thủ hai đội ai về chỗ nghỉ của đội nấy ngoài sân.'},
     {zh:'刘经理认真看了三家广告公司各自提交的计划。',py:'Liú jīnglǐ rènzhēn kànle sān jiā guǎnggào gōngsī gèzì tíjiāo de jìhuà.',vn:'Giám đốc Lưu đã xem kỹ kế hoạch mà ba công ty quảng cáo mỗi bên nộp lên.'},
     {zh:'以前陆地上的夜晚，他们在各自的房间。',py:'Yǐqián lùdì shang de yèwǎn, tāmen zài gèzì de fángjiān.',vn:'Trước đây, những buổi tối trên đất liền, họ ai ở phòng nấy.'}
   ],
   colloFull:[
     {zh:'各自的房间',py:'gèzì de fángjiān',vn:'phòng riêng của mỗi người'},
     {zh:'各自回家',py:'gèzì huí jiā',vn:'ai về nhà nấy'},
     {zh:'各自的想法',py:'gèzì de xiǎngfǎ',vn:'suy nghĩ riêng của mỗi người'},
     {zh:'各自提交的计划',py:'gèzì tíjiāo de jìhuà',vn:'kế hoạch mỗi bên nộp'},
     {zh:'各自的特点',py:'gèzì de tèdiǎn',vn:'đặc điểm riêng của mỗi bên'}
   ],
   patterns:[
     {s:'Sub (số nhiều) + 各自 + V',m:'Mỗi người tự …'},
     {s:'各自的 + N',m:'… riêng của mỗi người'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vừa tan học là các bạn ai về nhà nấy.',answer:'一放学，同学们就各自回家了。',answerPy:'Yí fàngxué, tóngxuémen jiù gèzì huí jiā le.',
      note:'各自 đứng sau chủ ngữ số nhiều (同学们), trước động từ.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Tuy mỗi người có suy nghĩ riêng nhưng cuối cùng vẫn đưa ra được quyết định.',answer:'虽然大家都有各自的想法，但是最后还是做出了决定。',answerPy:'Suīrán dàjiā dōu yǒu gèzì de xiǎngfǎ, dànshì zuìhòu háishi zuòchūle juédìng.',
      note:'各自的 + danh từ làm định ngữ.',pair:'虽然……但是……'}
   ]},

  {n:28,zh:'勿',py:'wù',pos:'Phó từ',vn:'chớ, đừng (dùng trong câu mệnh lệnh)',hv:'vật',em:'🚫',lesson:3,
   explain:['Biểu thị cấm đoán hoặc khuyên can; văn viết, tương đương 不要.'],
   usage:'Hay gặp trên biển báo, thông báo: 请勿吸烟, 请勿入内, 切勿…. Đứng trước động từ, thường có 请 / 切 đi trước. Nói chuyện hằng ngày dùng 别 / 不要.',
   collo:['请勿吸烟','请勿入内','切勿','请勿打扰'],
   ex_zh:'中国有句老话，可上山，勿下海。',ex_py:'Zhōngguó yǒu jù lǎohuà, kě shàng shān, wù xià hǎi.',ex_vn:'Trung Quốc có câu nói xưa: lên núi thì được, chớ xuống biển.',
   exList:[
     {zh:'中国有句老话，可上山，勿下海。',py:'Zhōngguó yǒu jù lǎohuà, kě shàng shān, wù xià hǎi.',vn:'Trung Quốc có câu nói xưa: lên núi thì được, chớ xuống biển.'},
     {zh:'非工作人员，请勿入内。',py:'Fēi gōngzuò rényuán, qǐng wù rù nèi.',vn:'Không phải nhân viên, xin đừng vào.'},
     {zh:'网上购票者须注意网站的安全性，切勿上当受骗。',py:'Wǎng shang gòu piào zhě xū zhùyì wǎngzhàn de ānquánxìng, qiè wù shàngdàng shòupiàn.',vn:'Người mua vé trên mạng phải chú ý độ an toàn của trang web, tuyệt đối chớ để bị lừa.'}
   ],
   colloFull:[
     {zh:'请勿吸烟',py:'qǐng wù xīyān',vn:'xin đừng hút thuốc'},
     {zh:'请勿入内',py:'qǐng wù rù nèi',vn:'xin đừng vào'},
     {zh:'切勿',py:'qiè wù',vn:'tuyệt đối chớ'},
     {zh:'请勿打扰',py:'qǐng wù dǎrǎo',vn:'xin đừng làm phiền'},
     {zh:'请勿拍照',py:'qǐng wù pāizhào',vn:'xin đừng chụp ảnh'}
   ],
   patterns:[
     {s:'请勿 + V',m:'Xin đừng … (biển báo, thông báo)'},
     {s:'切勿 + V',m:'Tuyệt đối chớ …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Trên cửa phòng khách sạn treo tấm biển "Xin đừng làm phiền".',answer:'宾馆房间的门上挂着“请勿打扰”的牌子。',answerPy:'Bīnguǎn fángjiān de mén shang guàzhe "qǐng wù dǎrǎo" de páizi.',
      note:'Câu tồn tại: nơi chốn + V + 着 + sự vật; 请勿打扰 là lời trên biển.',pair:'V + 着 (câu tồn tại)'},
     {promptLang:'vi',prompt:'Vì sức khoẻ người khác, xin đừng hút thuốc ở nơi công cộng.',answer:'为了他人的健康，请勿在公共场所吸烟。',answerPy:'Wèile tārén de jiànkāng, qǐng wù zài gōnggòng chǎngsuǒ xīyān.',
      note:'请勿 đứng trước cả cụm giới từ 在……: 请勿 + 在 + nơi + V.',pair:'为了……'}
   ]},

  {n:29,zh:'时刻',py:'shíkè',pos:'Danh từ / Phó từ',vn:'thời khắc; luôn luôn',hv:'thời khắc',em:'⏰',lesson:3,
   explain:['Danh từ: một thời điểm hoặc khoảng thời gian (thường là quan trọng).','Phó từ: lúc nào cũng, luôn luôn; có thể lặp lại thành 时时刻刻.'],
   usage:'Danh từ: 最后时刻, 美好的时刻, 关键时刻. Phó từ: 时刻 + V (时刻准备着), 时时刻刻 + V. Khác 时代 (cả một giai đoạn dài).',
   collo:['最后时刻','美好的时刻','关键时刻','时时刻刻'],
   ex_zh:'美好的时刻过去后是一个个紧张的夜晚。',ex_py:'Měihǎo de shíkè guòqù hòu shì yí gègè jǐnzhāng de yèwǎn.',ex_vn:'Qua những khoảnh khắc tươi đẹp là từng đêm căng thẳng.',
   exList:[
     {zh:'美好的时刻过去后是一个个紧张的夜晚。',py:'Měihǎo de shíkè guòqù hòu shì yí gègè jǐnzhāng de yèwǎn.',vn:'Qua những khoảnh khắc tươi đẹp là từng đêm căng thẳng.'},
     {zh:'在最后时刻，他为本队踢进了赢得比赛的关键一球。',py:'Zài zuìhòu shíkè, tā wèi běn duì tījìnle yíngdé bǐsài de guānjiàn yì qiú.',vn:'Ở thời khắc cuối cùng, anh ấy đã ghi bàn thắng quyết định cho đội nhà.'},
     {zh:'工作中，他时时刻刻提醒自己：乘客的安全是最重要的。',py:'Gōngzuò zhōng, tā shíshíkèkè tíxǐng zìjǐ: chéngkè de ānquán shì zuì zhòngyào de.',vn:'Khi làm việc, anh ấy luôn luôn tự nhắc mình: an toàn của hành khách là quan trọng nhất.'}
   ],
   colloFull:[
     {zh:'最后时刻',py:'zuìhòu shíkè',vn:'thời khắc cuối cùng'},
     {zh:'美好的时刻',py:'měihǎo de shíkè',vn:'khoảnh khắc tươi đẹp'},
     {zh:'关键时刻',py:'guānjiàn shíkè',vn:'thời khắc then chốt'},
     {zh:'时时刻刻',py:'shíshíkèkè',vn:'lúc nào cũng, luôn luôn'},
     {zh:'雷电交加的时刻',py:'léidiàn jiāojiā de shíkè',vn:'lúc sấm chớp đan xen'}
   ],
   patterns:[
     {s:'最后 / 关键 / 美好的 + 时刻',m:'Thời khắc cuối cùng / then chốt / tươi đẹp'},
     {s:'时刻 / 时时刻刻 + V',m:'Luôn luôn … (phó từ)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần bạn cần, tôi luôn sẵn sàng giúp bạn.',answer:'只要你需要，我就时刻准备着帮助你。',answerPy:'Zhǐyào nǐ xūyào, wǒ jiù shíkè zhǔnbèizhe bāngzhù nǐ.',
      note:'时刻 làm phó từ, đứng trước động từ 准备.',pair:'只要……就……'},
     {promptLang:'vi',prompt:'Ở thời khắc cuối cùng, cậu ấy lại ghi được một bàn.',answer:'在最后时刻，他居然踢进了一个球。',answerPy:'Zài zuìhòu shíkè, tā jūrán tījìnle yí ge qiú.',
      note:'最后时刻 làm trạng ngữ thời gian; 居然 ôn từ bài 1.',pair:'居然 (bài 1)'}
   ]},

  {n:30,zh:'着火',py:'zháo huǒ',pos:'Động từ',vn:'bốc cháy, cháy',hv:'trước hoả',em:'🔥',lesson:3,
   explain:['Bắt lửa, bốc cháy (nhà, xe, thuyền…).'],
   usage:'Động từ ly hợp, không mang tân ngữ: 房子着火了, 船身着火. Chú ý 着 ở đây đọc zháo.',
   collo:['着火了','船身着火','容易着火','着了火'],
   ex_zh:'一路上，翟峰一家经历了船身着火、漏水等大大小小十多次险情。',ex_py:'Yí lù shang, Zhái Fēng yì jiā jīnglìle chuánshēn zháohuǒ, lòu shuǐ děng dàdà xiǎoxiǎo shí duō cì xiǎnqíng.',ex_vn:'Suốt dọc đường, cả nhà Trác Phong đã trải qua hơn mười lần gặp nạn lớn nhỏ như thân thuyền bốc cháy, rò nước.',
   exList:[
     {zh:'一路上，翟峰一家经历了船身着火、漏水等大大小小十多次险情。',py:'Yí lù shang, Zhái Fēng yì jiā jīnglìle chuánshēn zháohuǒ, lòu shuǐ děng dàdà xiǎoxiǎo shí duō cì xiǎnqíng.',vn:'Suốt dọc đường, cả nhà Trác Phong đã trải qua hơn mười lần gặp nạn lớn nhỏ như thân thuyền bốc cháy, rò nước.'},
     {zh:'最近天气干燥，很容易着火，千万别再抽了！',py:'Zuìjìn tiānqì gānzào, hěn róngyì zháohuǒ, qiānwàn bié zài chōu le!',vn:'Dạo này trời hanh khô, rất dễ cháy, tuyệt đối đừng hút nữa!'},
     {zh:'楼下的饭馆着火了，大家赶快跑了出来。',py:'Lóu xià de fànguǎn zháohuǒ le, dàjiā gǎnkuài pǎole chūlái.',vn:'Quán ăn dưới tầng bị cháy, mọi người vội vàng chạy ra ngoài.'}
   ],
   colloFull:[
     {zh:'着火了',py:'zháohuǒ le',vn:'cháy rồi'},
     {zh:'船身着火',py:'chuánshēn zháohuǒ',vn:'thân thuyền bốc cháy'},
     {zh:'容易着火',py:'róngyì zháohuǒ',vn:'dễ cháy'},
     {zh:'着了火',py:'zháole huǒ',vn:'đã bắt lửa'},
     {zh:'厨房着火',py:'chúfáng zháohuǒ',vn:'bếp bị cháy'}
   ],
   patterns:[
     {s:'N (nơi chốn / vật) + 着火了',m:'… bị cháy'},
     {s:'✗ 着火房子 → ✓ 房子着火了',m:''}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tối qua nhà hàng xóm tuy bị cháy nhưng không ai bị thương.',answer:'昨晚邻居家虽然着火了，但是没有人受伤。',answerPy:'Zuó wǎn línjū jiā suīrán zháohuǒ le, dànshì méiyǒu rén shòushāng.',
      note:'着火 không mang tân ngữ; chủ ngữ là nơi bị cháy.',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Trời hanh khô, hơi sơ ý một chút là cháy ngay.',answer:'天气干燥，一不小心就会着火。',answerPy:'Tiānqì gānzào, yí bù xiǎoxīn jiù huì zháohuǒ.',
      note:'一不小心就…… = hễ sơ ý là ….',pair:'一……就……'}
   ]},

  {n:31,zh:'漏',py:'lòu',pos:'Động từ',vn:'chảy, rỉ, dột; bỏ sót',hv:'lậu',em:'💧',lesson:3,
   explain:['Nước, khí… lọt ra ngoài qua lỗ hở: 漏水, 漏气.','Nghĩa mở rộng: bỏ sót: 漏了一道题.'],
   usage:'Bổ ngữ hay gặp: 漏光 / 漏掉 / 漏出来 (bảng 词语搭配). Chủ ngữ là vật chứa hoặc chất lỏng: 船漏水了, 酸奶漏了.',
   collo:['漏水','漏光','漏掉','漏出来'],
   ex_zh:'丽丽到家才发现刚买的酸奶中有一袋是漏的。',ex_py:'Lìli dào jiā cái fāxiàn gāng mǎi de suānnǎi zhōng yǒu yí dài shì lòu de.',ex_vn:'Về đến nhà Lệ Lệ mới phát hiện trong số sữa chua vừa mua có một túi bị rỉ.',
   exList:[
     {zh:'丽丽到家才发现刚买的酸奶中有一袋是漏的。',py:'Lìli dào jiā cái fāxiàn gāng mǎi de suānnǎi zhōng yǒu yí dài shì lòu de.',vn:'Về đến nhà Lệ Lệ mới phát hiện trong số sữa chua vừa mua có một túi bị rỉ.'},
     {zh:'船身漏水了，大家赶快把水往外舀。',py:'Chuánshēn lòu shuǐ le, dàjiā gǎnkuài bǎ shuǐ wǎng wài yǎo.',vn:'Thân thuyền rò nước, mọi người vội tát nước ra ngoài.'},
     {zh:'考试的时候他太紧张，漏掉了一道题。',py:'Kǎoshì de shíhou tā tài jǐnzhāng, lòudiàole yí dào tí.',vn:'Lúc thi cậu ấy căng thẳng quá, bỏ sót mất một câu.'}
   ],
   colloFull:[
     {zh:'漏水',py:'lòu shuǐ',vn:'rò nước'},
     {zh:'漏光',py:'lòuguāng',vn:'chảy hết sạch'},
     {zh:'漏掉',py:'lòudiào',vn:'bỏ sót; chảy mất'},
     {zh:'漏出来',py:'lòu chūlái',vn:'rỉ ra ngoài'},
     {zh:'房顶漏雨',py:'fángdǐng lòu yǔ',vn:'mái nhà dột'}
   ],
   patterns:[
     {s:'漏 + 光 / 掉 / 出来',m:'Chảy hết / chảy mất / rỉ ra (bảng 词语搭配)'},
     {s:'N + 漏水 / 漏雨',m:'… rò nước / dột'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi sơ ý làm sót mất một câu hỏi.',answer:'我不小心把一道题漏掉了。',answerPy:'Wǒ bù xiǎoxīn bǎ yí dào tí lòudiào le.',
      note:'漏掉 = bỏ sót; câu 把 cần bổ ngữ 掉 sau động từ.',pair:'把'},
     {promptLang:'vi',prompt:'Mái nhà cũ quá, cứ mưa là dột.',answer:'房顶太旧了，一下雨就漏。',answerPy:'Fángdǐng tài jiù le, yí xià yǔ jiù lòu.',
      note:'漏 dùng một mình = dột, rỉ.',pair:'一……就……'}
   ]},

  {n:32,zh:'雷',py:'léi',pos:'Danh từ',vn:'sấm',hv:'lôi',em:'🌩️',lesson:3,
   explain:['Tiếng nổ lớn trên trời khi có dông.'],
   usage:'打雷 (có sấm), 雷声 (tiếng sấm), 雷阵雨 (mưa dông — 阵 ôn bài 2), 雷电交加 (sấm chớp đan xen).',
   collo:['打雷','雷声','雷阵雨','雷电交加'],
   ex_zh:'他们最怕雷电交加的时刻。',ex_py:'Tāmen zuì pà léidiàn jiāojiā de shíkè.',ex_vn:'Họ sợ nhất những lúc sấm chớp đan xen.',
   exList:[
     {zh:'他们最怕雷电交加的时刻。',py:'Tāmen zuì pà léidiàn jiāojiā de shíkè.',vn:'Họ sợ nhất những lúc sấm chớp đan xen.'},
     {zh:'外面又打雷又闪电的，咱们等会儿再走吧。',py:'Wàimiàn yòu dǎléi yòu shǎndiàn de, zánmen děng huìr zài zǒu ba.',vn:'Bên ngoài vừa sấm vừa chớp, chúng ta đợi lát nữa hãy đi.'},
     {zh:'我妹妹最怕打雷，一听到雷声就哭。',py:'Wǒ mèimei zuì pà dǎléi, yì tīngdào léishēng jiù kū.',vn:'Em gái tôi sợ sấm nhất, hễ nghe tiếng sấm là khóc.'}
   ],
   colloFull:[
     {zh:'打雷',py:'dǎléi',vn:'có sấm, sấm nổ'},
     {zh:'雷声',py:'léishēng',vn:'tiếng sấm'},
     {zh:'雷阵雨',py:'léizhènyǔ',vn:'mưa dông'},
     {zh:'雷电交加',py:'léidiàn jiāojiā',vn:'sấm chớp đan xen'},
     {zh:'一声雷',py:'yì shēng léi',vn:'một tiếng sấm'}
   ],
   patterns:[
     {s:'打雷 / 打了一个雷',m:'Có sấm'},
     {s:'雷电交加',m:'Sấm chớp đan xen'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Em gái tôi hễ nghe tiếng sấm là khóc.',answer:'我妹妹一听到雷声就哭。',answerPy:'Wǒ mèimei yì tīngdào léishēng jiù kū.',
      note:'雷声 = tiếng sấm (danh từ); 打雷 = có sấm (động từ).',pair:'一……就……'},
     {promptLang:'vi',prompt:'Bên ngoài vừa có sấm vừa có chớp, chúng ta đợi lát nữa hãy đi.',answer:'外面又打雷又闪电的，咱们等会儿再走吧。',answerPy:'Wàimiàn yòu dǎléi yòu shǎndiàn de, zánmen děng huìr zài zǒu ba.',
      note:'又……又……: hai hiện tượng xảy ra cùng lúc.',pair:'又……又……'}
   ]},

  {n:33,zh:'随时',py:'suíshí',pos:'Phó từ',vn:'bất cứ lúc nào',hv:'tuỳ thời',em:'🕐',lesson:3,
   explain:['Lúc nào cũng được, bất cứ khi nào cần — hoặc bất cứ lúc nào cũng có thể xảy ra.'],
   usage:'Đứng trước động từ: 随时 + V; hay đi với 可以 / 有可能 / 都: 随时可以来, 随时有可能…….',
   collo:['随时可以','随时有可能','随时联系','随时欢迎'],
   ex_zh:'小船随时有可能被下一道闪电击到。',ex_py:'Xiǎo chuán suíshí yǒu kěnéng bèi xià yí dào shǎndiàn jīdào.',ex_vn:'Con thuyền nhỏ bất cứ lúc nào cũng có thể bị tia chớp tiếp theo đánh trúng.',
   exList:[
     {zh:'小船随时有可能被下一道闪电击到。',py:'Xiǎo chuán suíshí yǒu kěnéng bèi xià yí dào shǎndiàn jīdào.',vn:'Con thuyền nhỏ bất cứ lúc nào cũng có thể bị tia chớp tiếp theo đánh trúng.'},
     {zh:'好的，您决定了以后，随时都可以给我们打电话。',py:'Hǎo de, nín juédìngle yǐhòu, suíshí dōu kěyǐ gěi wǒmen dǎ diànhuà.',vn:'Vâng, khi nào quyết định xong, ông/bà có thể gọi cho chúng tôi bất cứ lúc nào.'},
     {zh:'我随时可以开始干活儿。',py:'Wǒ suíshí kěyǐ kāishǐ gànhuór.',vn:'Tôi có thể bắt đầu làm việc bất cứ lúc nào.'}
   ],
   colloFull:[
     {zh:'随时可以',py:'suíshí kěyǐ',vn:'lúc nào cũng có thể'},
     {zh:'随时有可能',py:'suíshí yǒu kěnéng',vn:'bất cứ lúc nào cũng có thể (xảy ra)'},
     {zh:'随时联系',py:'suíshí liánxì',vn:'liên lạc bất cứ lúc nào'},
     {zh:'随时欢迎',py:'suíshí huānyíng',vn:'lúc nào cũng hoan nghênh'},
     {zh:'随时准备',py:'suíshí zhǔnbèi',vn:'luôn sẵn sàng'}
   ],
   patterns:[
     {s:'随时 + (都) + 可以 + V',m:'Lúc nào cũng có thể …'},
     {s:'随时有可能 + V',m:'Bất cứ lúc nào cũng có thể xảy ra …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần có câu hỏi là bạn có thể hỏi tôi bất cứ lúc nào.',answer:'只要你有问题，就随时可以问我。',answerPy:'Zhǐyào nǐ yǒu wèntí, jiù suíshí kěyǐ wèn wǒ.',
      note:'随时 đứng trước 可以 + động từ.',pair:'只要……就……'},
     {promptLang:'vi',prompt:'Con thuyền nhỏ bất cứ lúc nào cũng có thể bị sét đánh trúng.',answer:'小船随时有可能被闪电击到。',answerPy:'Xiǎo chuán suíshí yǒu kěnéng bèi shǎndiàn jīdào.',
      note:'随时有可能 + câu bị động 被……击到.',pair:'被'}
   ]},

  {n:34,zh:'闪电',py:'shǎndiàn',pos:'Danh từ',vn:'chớp, tia chớp',hv:'thiểm điện',em:'⚡',lesson:3,
   explain:['Tia sáng loé lên trên trời khi có dông. Khẩu ngữ còn dùng như động từ: 又打雷又闪电.'],
   usage:'Lượng từ 道: 一道闪电 (bảng 词语搭配). 被闪电击到 / 击中 = bị sét đánh trúng.',
   collo:['一道闪电','被闪电击到','又打雷又闪电','闪电快快过去'],
   ex_zh:'一家三口只能紧紧拥抱在一起，希望闪电快快过去。',ex_py:'Yì jiā sān kǒu zhǐ néng jǐnjǐn yōngbào zài yìqǐ, xīwàng shǎndiàn kuàikuài guòqù.',ex_vn:'Cả nhà ba người chỉ biết ôm chặt lấy nhau, mong chớp giật mau qua.',
   exList:[
     {zh:'一家三口只能紧紧拥抱在一起，希望闪电快快过去。',py:'Yì jiā sān kǒu zhǐ néng jǐnjǐn yōngbào zài yìqǐ, xīwàng shǎndiàn kuàikuài guòqù.',vn:'Cả nhà ba người chỉ biết ôm chặt lấy nhau, mong chớp giật mau qua.'},
     {zh:'天上突然出现了一道闪电。',py:'Tiān shang tūrán chūxiànle yí dào shǎndiàn.',vn:'Trên trời bỗng loé lên một tia chớp.'},
     {zh:'那棵大树被闪电击中了。',py:'Nà kē dà shù bèi shǎndiàn jīzhòng le.',vn:'Cái cây to ấy bị sét đánh trúng.'}
   ],
   colloFull:[
     {zh:'一道闪电',py:'yí dào shǎndiàn',vn:'một tia chớp'},
     {zh:'被闪电击到',py:'bèi shǎndiàn jīdào',vn:'bị sét đánh trúng'},
     {zh:'又打雷又闪电',py:'yòu dǎléi yòu shǎndiàn',vn:'vừa sấm vừa chớp'},
     {zh:'闪电快快过去',py:'shǎndiàn kuàikuài guòqù',vn:'chớp giật mau qua'},
     {zh:'闪电般的速度',py:'shǎndiàn bān de sùdù',vn:'tốc độ chớp nhoáng'}
   ],
   patterns:[
     {s:'一道 + 闪电',m:'Một tia chớp (bảng 词语搭配)'},
     {s:'被 + 闪电 + 击到 / 击中',m:'Bị sét đánh trúng'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cái cây to ấy bị sét đánh gãy rồi.',answer:'那棵大树被闪电击断了。',answerPy:'Nà kē dà shù bèi shǎndiàn jīduàn le.',
      note:'被 + 闪电 + 击 + bổ ngữ kết quả 断.',pair:'被'},
     {promptLang:'vi',prompt:'Tia chớp càng ngày càng gần, chúng tôi vội chạy vào nhà.',answer:'闪电越来越近，我们赶紧跑进了屋子。',answerPy:'Shǎndiàn yuè lái yuè jìn, wǒmen gǎnjǐn pǎojìnle wūzi.',
      note:'屋子 ôn từ bài 2; 跑进 + nơi chốn.',pair:'越来越……'}
   ]},

  {n:35,zh:'击',py:'jī',pos:'Động từ',vn:'đánh, đập',hv:'kích',em:'👊',lesson:3,
   explain:['Đánh, đập, va mạnh vào (văn viết). Trong bài: 被闪电击到 = bị sét đánh trúng.'],
   usage:'Thường có bổ ngữ: 击到 / 击中 / 击倒 / 击败. Ít khi đứng một mình trong khẩu ngữ (khẩu ngữ dùng 打).',
   collo:['被闪电击到','击中','击败对手','击倒'],
   ex_zh:'小船随时有可能被下一道闪电击到。',ex_py:'Xiǎo chuán suíshí yǒu kěnéng bèi xià yí dào shǎndiàn jīdào.',ex_vn:'Con thuyền nhỏ bất cứ lúc nào cũng có thể bị tia chớp tiếp theo đánh trúng.',
   exList:[
     {zh:'小船随时有可能被下一道闪电击到。',py:'Xiǎo chuán suíshí yǒu kěnéng bèi xià yí dào shǎndiàn jīdào.',vn:'Con thuyền nhỏ bất cứ lúc nào cũng có thể bị tia chớp tiếp theo đánh trúng.'},
     {zh:'他在比赛中击败了所有对手。',py:'Tā zài bǐsài zhōng jībàile suǒyǒu duìshǒu.',vn:'Anh ấy đánh bại tất cả đối thủ trong cuộc thi.'},
     {zh:'球击中了窗户，玻璃碎了一地。',py:'Qiú jīzhòngle chuānghu, bōli suìle yí dì.',vn:'Quả bóng đập trúng cửa sổ, kính vỡ đầy đất.'}
   ],
   colloFull:[
     {zh:'被闪电击到',py:'bèi shǎndiàn jīdào',vn:'bị sét đánh trúng'},
     {zh:'击中',py:'jīzhòng',vn:'đánh trúng'},
     {zh:'击败对手',py:'jībài duìshǒu',vn:'đánh bại đối thủ'},
     {zh:'击倒',py:'jīdǎo',vn:'đánh ngã'},
     {zh:'击中目标',py:'jīzhòng mùbiāo',vn:'trúng mục tiêu'}
   ],
   patterns:[
     {s:'击 + 到 / 中 / 倒 / 败',m:'Đánh trúng / đánh ngã / đánh bại'},
     {s:'被 + N + 击到',m:'Bị … đánh trúng'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đội chúng tôi đánh bại tất cả đối thủ, đến đội vô địch năm ngoái cũng thua.',answer:'我们队击败了所有对手，连去年的冠军都输了。',answerPy:'Wǒmen duì jībàile suǒyǒu duìshǒu, lián qùnián de guànjūn dōu shū le.',
      note:'击败 = đánh bại, mang tân ngữ 对手.',pair:'连……都……'},
     {promptLang:'vi',prompt:'Con thuyền nhỏ bị sét đánh trúng, may mà không ai bị thương.',answer:'小船被闪电击到了，好在没有人受伤。',answerPy:'Xiǎo chuán bèi shǎndiàn jīdào le, hǎozài méiyǒu rén shòushāng.',
      note:'击 phải có bổ ngữ (击到), không nói 被闪电击了.',pair:'被'}
   ]},

  {n:36,zh:'拥抱',py:'yōngbào',pos:'Động từ',vn:'ôm, ôm chặt',hv:'ủng bão',em:'🤗',lesson:3,
   explain:['Ôm lấy nhau để bày tỏ tình cảm hoặc để che chở nhau.'],
   usage:'Trạng ngữ hay gặp: 紧紧(地) / 热情(地) + 拥抱 (bảng 词语搭配); 拥抱在一起. Cũng là danh từ: 给他一个拥抱.',
   collo:['紧紧地拥抱','热情地拥抱','拥抱在一起','给他一个拥抱'],
   ex_zh:'一家三口只能紧紧拥抱在一起。',ex_py:'Yì jiā sān kǒu zhǐ néng jǐnjǐn yōngbào zài yìqǐ.',ex_vn:'Cả nhà ba người chỉ biết ôm chặt lấy nhau.',
   exList:[
     {zh:'一家三口只能紧紧拥抱在一起。',py:'Yì jiā sān kǒu zhǐ néng jǐnjǐn yōngbào zài yìqǐ.',vn:'Cả nhà ba người chỉ biết ôm chặt lấy nhau.'},
     {zh:'一下飞机，妈妈就热情地拥抱了我。',py:'Yí xià fēijī, māma jiù rèqíng de yōngbàole wǒ.',vn:'Vừa xuống máy bay, mẹ đã ôm chầm lấy tôi.'},
     {zh:'比赛赢了，队员们高兴地拥抱在一起。',py:'Bǐsài yíng le, duìyuánmen gāoxìng de yōngbào zài yìqǐ.',vn:'Thắng trận, các cầu thủ vui mừng ôm lấy nhau.'}
   ],
   colloFull:[
     {zh:'紧紧地拥抱',py:'jǐnjǐn de yōngbào',vn:'ôm chặt'},
     {zh:'热情地拥抱',py:'rèqíng de yōngbào',vn:'ôm nồng nhiệt'},
     {zh:'拥抱在一起',py:'yōngbào zài yìqǐ',vn:'ôm lấy nhau'},
     {zh:'给他一个拥抱',py:'gěi tā yí ge yōngbào',vn:'ôm anh ấy một cái'},
     {zh:'拥抱大自然',py:'yōngbào dà zìrán',vn:'hoà mình vào thiên nhiên'}
   ],
   patterns:[
     {s:'紧紧(地) / 热情(地) + 拥抱',m:'Ôm chặt / ôm nồng nhiệt (bảng 词语搭配)'},
     {s:'A 和 B + 拥抱在一起',m:'A và B ôm lấy nhau'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi vừa xuống máy bay là mẹ ôm chặt lấy tôi.',answer:'我一下飞机，妈妈就紧紧地拥抱了我。',answerPy:'Wǒ yí xià fēijī, māma jiù jǐnjǐn de yōngbàole wǒ.',
      note:'Hai vế khác chủ ngữ: 我一……，妈妈就…….',pair:'一……就……'},
     {promptLang:'vi',prompt:'Tôi chưa từng ôm bố như thế.',answer:'我从来没这样拥抱过爸爸。',answerPy:'Wǒ cónglái méi zhèyàng yōngbàoguo bàba.',
      note:'Trạng ngữ 这样 đứng trước động từ; 过 ngay sau 拥抱.',pair:'从来没……过'}
   ]},

  {n:37,zh:'海里',py:'hǎilǐ',pos:'Lượng từ',vn:'hải lý',hv:'hải lý',em:'📏',lesson:3,
   explain:['Đơn vị đo khoảng cách trên biển; 1 hải lý ≈ 1852 mét.'],
   usage:'Số + 海里: 4000多海里. Chú ý: 海里 hǎilǐ (hải lý) khác 海里 hǎi li (trong biển) — dựa vào thanh điệu và ngữ cảnh có con số.',
   collo:['4000多海里','航行了……海里','一海里','几百海里'],
   ex_zh:'在经历了八个月、航行了4000多海里之后，翟峰一家终于回到了家。',ex_py:'Zài jīnglìle bā ge yuè, hángxíngle sìqiān duō hǎilǐ zhīhòu, Zhái Fēng yì jiā zhōngyú huídàole jiā.',ex_vn:'Sau tám tháng, đi hơn 4000 hải lý, cả nhà Trác Phong cuối cùng đã về đến nhà.',
   exList:[
     {zh:'在经历了八个月、航行了4000多海里之后，翟峰一家终于回到了家。',py:'Zài jīnglìle bā ge yuè, hángxíngle sìqiān duō hǎilǐ zhīhòu, Zhái Fēng yì jiā zhōngyú huídàole jiā.',vn:'Sau tám tháng, đi hơn 4000 hải lý, cả nhà Trác Phong cuối cùng đã về đến nhà.'},
     {zh:'一海里大约是1852米。',py:'Yì hǎilǐ dàyuē shì yìqiān bābǎi wǔshí\'èr mǐ.',vn:'Một hải lý khoảng 1852 mét.'},
     {zh:'这艘船一天能航行两百多海里。',py:'Zhè sōu chuán yì tiān néng hángxíng liǎngbǎi duō hǎilǐ.',vn:'Con thuyền này một ngày đi được hơn hai trăm hải lý.'}
   ],
   colloFull:[
     {zh:'4000多海里',py:'sìqiān duō hǎilǐ',vn:'hơn 4000 hải lý'},
     {zh:'航行了……海里',py:'hángxíngle …… hǎilǐ',vn:'đã đi … hải lý'},
     {zh:'一海里',py:'yì hǎilǐ',vn:'một hải lý'},
     {zh:'几百海里',py:'jǐ bǎi hǎilǐ',vn:'vài trăm hải lý'},
     {zh:'离岸十海里',py:'lí àn shí hǎilǐ',vn:'cách bờ mười hải lý'}
   ],
   patterns:[
     {s:'Số + 海里',m:'… hải lý'},
     {s:'航行了 + số + 海里',m:'Đã đi được … hải lý'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Hôm nay thuyền đi được nhiều hơn hôm qua năm mươi hải lý.',answer:'今天船比昨天多航行了五十海里。',answerPy:'Jīntiān chuán bǐ zuótiān duō hángxíngle wǔshí hǎilǐ.',
      note:'So sánh số lượng: A 比 B + 多 + V + 了 + số lượng.',pair:'比'},
     {promptLang:'vi',prompt:'Họ đi hơn bốn nghìn hải lý mới về đến nhà.',answer:'他们航行了四千多海里才回到家。',answerPy:'Tāmen hángxíngle sìqiān duō hǎilǐ cái huídào jiā.',
      note:'才 nhấn mạnh việc xảy ra muộn / khó khăn.',pair:'……才……'}
   ]},

  {n:38,zh:'台阶',py:'táijiē',pos:'Danh từ',vn:'bậc thềm, bậc thang',hv:'đài giai',em:'🪜',lesson:3,
   explain:['Bậc thềm bằng đá, gạch trước cửa nhà hoặc dọc lối dốc.','Nghĩa bóng: một nấc, một bước tiến; 给……台阶下 = gỡ thể diện cho ai.'],
   usage:'Lượng từ 级: 二十多级台阶; 上 / 下台阶. Trong bài: 人生道路上一段长长的台阶 (nghĩa bóng).',
   collo:['上台阶','下台阶','一级台阶','一段长长的台阶'],
   ex_zh:'航海就是他人生道路上一段长长的台阶，通向他想要的未来。',ex_py:'Hánghǎi jiù shì tā rénshēng dàolù shang yí duàn chángcháng de táijiē, tōngxiàng tā xiǎng yào de wèilái.',ex_vn:'Đi biển chính là một đoạn bậc thềm dài trên đường đời của anh, dẫn tới tương lai anh mong muốn.',
   exList:[
     {zh:'航海就是他人生道路上一段长长的台阶，通向他想要的未来。',py:'Hánghǎi jiù shì tā rénshēng dàolù shang yí duàn chángcháng de táijiē, tōngxiàng tā xiǎng yào de wèilái.',vn:'Đi biển chính là một đoạn bậc thềm dài trên đường đời của anh, dẫn tới tương lai anh mong muốn.'},
     {zh:'奶奶腿不好，上台阶的时候要慢一点儿。',py:'Nǎinai tuǐ bù hǎo, shàng táijiē de shíhou yào màn yìdiǎnr.',vn:'Chân bà không khoẻ, lúc lên bậc thềm phải đi chậm thôi.'},
     {zh:'学校门口有二十多级台阶。',py:'Xuéxiào ménkǒu yǒu èrshí duō jí táijiē.',vn:'Trước cổng trường có hơn hai mươi bậc thềm.'}
   ],
   colloFull:[
     {zh:'上台阶',py:'shàng táijiē',vn:'lên bậc thềm'},
     {zh:'下台阶',py:'xià táijiē',vn:'xuống bậc thềm'},
     {zh:'一级台阶',py:'yì jí táijiē',vn:'một bậc thềm'},
     {zh:'一段长长的台阶',py:'yí duàn chángcháng de táijiē',vn:'một đoạn bậc thềm dài'},
     {zh:'给他一个台阶下',py:'gěi tā yí ge táijiē xià',vn:'gỡ thể diện cho anh ấy'}
   ],
   patterns:[
     {s:'上 / 下 + 台阶',m:'Lên / xuống bậc thềm'},
     {s:'Số + 级 + 台阶',m:'… bậc thềm (lượng từ 级)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ông tôi hễ lên bậc thềm là đau chân.',answer:'爷爷一上台阶，腿就疼。',answerPy:'Yéye yí shàng táijiē, tuǐ jiù téng.',
      note:'上台阶 = lên bậc thềm; vế sau đổi chủ ngữ (腿).',pair:'一……就……'},
     {promptLang:'vi',prompt:'Mỗi kỳ thi là một nấc thang, chỉ cần từng bước đi lên là sẽ tới đích.',answer:'每次考试都是一级台阶，只要一步一步往上走，就能到达目标。',answerPy:'Měi cì kǎoshì dōu shì yì jí táijiē, zhǐyào yí bù yí bù wǎng shàng zǒu, jiù néng dàodá mùbiāo.',
      note:'台阶 dùng nghĩa bóng: một nấc trên con đường.',pair:'只要……就……'}
   ]},

  {n:39,zh:'未来',py:'wèilái',pos:'Danh từ',vn:'tương lai',hv:'vị lai',em:'🔭',lesson:3,
   explain:['Khoảng thời gian sắp tới, từ nay về sau — trang trọng hơn 将来.'],
   usage:'Làm định ngữ: 未来的生活; tân ngữ: 通向未来, 为未来努力; 未来几年 = mấy năm tới.',
   collo:['美好的未来','未来的生活','未来几年','想要的未来'],
   ex_zh:'我们要为美好的未来努力学习。',ex_py:'Wǒmen yào wèi měihǎo de wèilái nǔlì xuéxí.',ex_vn:'Chúng ta phải học tập chăm chỉ vì một tương lai tươi đẹp.',
   exList:[
     {zh:'我们要为美好的未来努力学习。',py:'Wǒmen yào wèi měihǎo de wèilái nǔlì xuéxí.',vn:'Chúng ta phải học tập chăm chỉ vì một tương lai tươi đẹp.'},
     {zh:'航海就像一段长长的台阶，通向他想要的未来。',py:'Hánghǎi jiù xiàng yí duàn chángcháng de táijiē, tōngxiàng tā xiǎng yào de wèilái.',vn:'Đi biển giống như một đoạn bậc thềm dài, dẫn tới tương lai anh mong muốn.'},
     {zh:'你想象过自己未来的生活是什么样子吗？',py:'Nǐ xiǎngxiàngguo zìjǐ wèilái de shēnghuó shì shénme yàngzi ma?',vn:'Bạn đã từng tưởng tượng cuộc sống tương lai của mình sẽ ra sao chưa?'}
   ],
   colloFull:[
     {zh:'美好的未来',py:'měihǎo de wèilái',vn:'tương lai tươi đẹp'},
     {zh:'未来的生活',py:'wèilái de shēnghuó',vn:'cuộc sống tương lai'},
     {zh:'未来几年',py:'wèilái jǐ nián',vn:'mấy năm tới'},
     {zh:'想要的未来',py:'xiǎng yào de wèilái',vn:'tương lai mong muốn'},
     {zh:'通向未来',py:'tōngxiàng wèilái',vn:'dẫn tới tương lai'}
   ],
   patterns:[
     {s:'未来的 + N',m:'… trong tương lai'},
     {s:'为 + (美好的) 未来 + V',m:'Vì tương lai (tươi đẹp) mà …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần bây giờ cố gắng thì tương lai nhất định sẽ tươi đẹp.',answer:'只要现在努力，未来就一定会很美好。',answerPy:'Zhǐyào xiànzài nǔlì, wèilái jiù yídìng huì hěn měihǎo.',
      note:'未来 làm chủ ngữ vế sau, 就 đứng sau nó.',pair:'只要……就……'},
     {promptLang:'vi',prompt:'Không chỉ tôi mà các bạn cùng lớp cũng rất mong chờ tương lai.',answer:'不仅我，我的同学们也都很期待未来。',answerPy:'Bùjǐn wǒ, wǒ de tóngxuémen yě dōu hěn qīdài wèilái.',
      note:'Hai vế khác chủ ngữ → 不仅 đứng trước chủ ngữ thứ nhất.',pair:'不仅……也……'}
   ]},

  {n:40,zh:'太太',py:'tàitai',pos:'Danh từ',vn:'vợ; bà (gọi phụ nữ đã có chồng)',hv:'thái thái',em:'👩',lesson:3,
   explain:['Vợ — cách người chồng giới thiệu vợ mình với người khác, lịch sự.','Bà — gọi phụ nữ đã có chồng, kèm họ chồng: 王太太.'],
   usage:'Lịch sự hơn 老婆 (bài 1), thân mật hơn 妻子. 我太太 = vợ tôi; 张太太 = bà Trương.',
   collo:['我太太','王太太','他太太','太太和孩子'],
   ex_zh:'我和太太想要看看这个时代、这个世界到底是什么样子。',ex_py:'Wǒ hé tàitai xiǎng yào kànkan zhège shídài, zhège shìjiè dàodǐ shì shénme yàngzi.',ex_vn:'Tôi và vợ muốn xem thời đại này, thế giới này rốt cuộc trông như thế nào.',
   exList:[
     {zh:'我和太太想要看看这个时代、这个世界到底是什么样子。',py:'Wǒ hé tàitai xiǎng yào kànkan zhège shídài, zhège shìjiè dàodǐ shì shénme yàngzi.',vn:'Tôi và vợ muốn xem thời đại này, thế giới này rốt cuộc trông như thế nào.'},
     {zh:'这位是我太太，她是一名医生。',py:'Zhè wèi shì wǒ tàitai, tā shì yì míng yīshēng.',vn:'Đây là vợ tôi, cô ấy là bác sĩ.'},
     {zh:'王太太每天早上都在公园里跳舞。',py:'Wáng tàitai měi tiān zǎoshang dōu zài gōngyuán li tiàowǔ.',vn:'Sáng nào bà Vương cũng nhảy múa trong công viên.'}
   ],
   colloFull:[
     {zh:'我太太',py:'wǒ tàitai',vn:'vợ tôi'},
     {zh:'王太太',py:'Wáng tàitai',vn:'bà Vương'},
     {zh:'他太太',py:'tā tàitai',vn:'vợ anh ấy'},
     {zh:'太太和孩子',py:'tàitai hé háizi',vn:'vợ và con'},
     {zh:'老太太',py:'lǎotàitai',vn:'bà cụ'}
   ],
   patterns:[
     {s:'我太太 (giới thiệu vợ, lịch sự)',m:'Vợ tôi'},
     {s:'Họ chồng + 太太',m:'Bà … (王太太)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vợ tôi không những biết nấu ăn mà cũng biết lái thuyền buồm.',answer:'我太太不仅会做饭，也会驾驶帆船。',answerPy:'Wǒ tàitai bùjǐn huì zuòfàn, yě huì jiàshǐ fānchuán.',
      note:'我太太: không cần 的 trước danh từ chỉ quan hệ thân thuộc.',pair:'不仅……也……'},
     {promptLang:'vi',prompt:'Món quà này là tôi mua cho vợ.',answer:'这个礼物是我给太太买的。',answerPy:'Zhège lǐwù shì wǒ gěi tàitai mǎi de.',
      note:'Nhấn mạnh người mua và người nhận → 是……的.',pair:'是……的'}
   ]},

  {n:41,zh:'时代',py:'shídài',pos:'Danh từ',vn:'thời đại; thời (một giai đoạn đời người)',hv:'thời đại',em:'🌐',lesson:3,
   explain:['Một giai đoạn lịch sử dài có đặc điểm riêng; cũng chỉ một thời kỳ trong đời người (学生时代).'],
   usage:'信息时代, 互联网时代, 新时代; 学生时代 = thời học sinh; 跟上时代 = theo kịp thời đại. Khác 时刻 (một thời điểm ngắn).',
   collo:['信息时代','互联网时代','学生时代','这个时代'],
   ex_zh:'21世纪是一个信息时代、互联网的时代。',ex_py:'Èrshíyī shìjì shì yí ge xìnxī shídài, hùliánwǎng de shídài.',ex_vn:'Thế kỷ 21 là thời đại thông tin, thời đại của Internet.',
   exList:[
     {zh:'21世纪是一个信息时代、互联网的时代。',py:'Èrshíyī shìjì shì yí ge xìnxī shídài, hùliánwǎng de shídài.',vn:'Thế kỷ 21 là thời đại thông tin, thời đại của Internet.'},
     {zh:'我就是想去看看，这个时代、这个世界到底是什么样子。',py:'Wǒ jiù shì xiǎng qù kànkan, zhège shídài, zhège shìjiè dàodǐ shì shénme yàngzi.',vn:'Tôi chỉ muốn đi xem thời đại này, thế giới này rốt cuộc ra sao.'},
     {zh:'我最怀念的是学生时代的朋友。',py:'Wǒ zuì huáiniàn de shì xuésheng shídài de péngyou.',vn:'Điều tôi nhớ nhất là những người bạn thời đi học.'}
   ],
   colloFull:[
     {zh:'信息时代',py:'xìnxī shídài',vn:'thời đại thông tin'},
     {zh:'互联网时代',py:'hùliánwǎng shídài',vn:'thời đại Internet'},
     {zh:'学生时代',py:'xuésheng shídài',vn:'thời học sinh'},
     {zh:'这个时代',py:'zhège shídài',vn:'thời đại này'},
     {zh:'跟上时代',py:'gēnshang shídài',vn:'theo kịp thời đại'}
   ],
   patterns:[
     {s:'N + 时代 (信息时代, 学生时代)',m:'Thời đại … / thời …'},
     {s:'跟得上 / 跟不上 + 时代',m:'Theo kịp / không theo kịp thời đại'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Thời đại thay đổi càng ngày càng nhanh.',answer:'时代变化得越来越快。',answerPy:'Shídài biànhuà de yuè lái yuè kuài.',
      note:'Bổ ngữ trạng thái: V + 得 + 越来越 + tính từ.',pair:'越来越……'},
     {promptLang:'vi',prompt:'Nếu không học công nghệ mới thì sẽ không theo kịp thời đại.',answer:'如果不学习新技术，就会跟不上时代。',answerPy:'Rúguǒ bù xuéxí xīn jìshù, jiù huì gēn bu shàng shídài.',
      note:'跟不上时代: bổ ngữ khả năng dạng phủ định.',pair:'如果……就……'}
   ]},

  {n:42,zh:'翟峰',py:'Zhái Fēng',pos:'Danh từ riêng',vn:'Trác Phong (tên người)',hv:'Trạch Phong',em:'🧔',lesson:3,
   explain:['Nhân vật chính của bài: công nhân đường sắt bỏ cuộc sống ổn định, cùng vợ con đi thuyền buồm (sách dịch tên là "Trác Phong").'],
   usage:'Họ 翟 đọc là Zhái (không đọc dí). 翟峰一家 = cả nhà Trác Phong.',
   collo:['翟峰一家','翟峰和妻子','翟峰的父母'],
   ex_zh:'翟峰相信，一切只是开始。',ex_py:'Zhái Fēng xiāngxìn, yíqiè zhǐ shì kāishǐ.',ex_vn:'Trác Phong tin rằng mọi thứ chỉ mới là bắt đầu.',
   exList:[
     {zh:'翟峰相信，一切只是开始。',py:'Zhái Fēng xiāngxìn, yíqiè zhǐ shì kāishǐ.',vn:'Trác Phong tin rằng mọi thứ chỉ mới là bắt đầu.'},
     {zh:'翟峰和妻子都是铁路工人。',py:'Zhái Fēng hé qīzi dōu shì tiělù gōngrén.',vn:'Trác Phong và vợ đều là công nhân đường sắt.'},
     {zh:'翟峰一家终于回到了家。',py:'Zhái Fēng yì jiā zhōngyú huídàole jiā.',vn:'Cả nhà Trác Phong cuối cùng đã về đến nhà.'}
   ],
   colloFull:[
     {zh:'翟峰一家',py:'Zhái Fēng yì jiā',vn:'cả nhà Trác Phong'},
     {zh:'翟峰和妻子',py:'Zhái Fēng hé qīzi',vn:'Trác Phong và vợ'},
     {zh:'翟峰的父母',py:'Zhái Fēng de fùmǔ',vn:'bố mẹ Trác Phong'},
     {zh:'翟峰的女儿',py:'Zhái Fēng de nǚ\'ér',vn:'con gái Trác Phong'}
   ],
   patterns:[
     {s:'翟峰 + 一家',m:'Cả nhà Trác Phong'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đến bố mẹ Trác Phong cũng cho rằng anh ấy điên rồi.',answer:'连翟峰的父母都觉得他疯了。',answerPy:'Lián Zhái Fēng de fùmǔ dōu juéde tā fēng le.',
      note:'Cách nói khác của câu trong bài (包括翟峰的父母，所有人都觉得……).',pair:'连……都……'},
     {promptLang:'vi',prompt:'Trác Phong tuy không có tiền để dành nhưng vẫn mua được một chiếc thuyền.',answer:'翟峰虽然没有积蓄，但是还是买下了一艘船。',answerPy:'Zhái Fēng suīrán méiyǒu jīxù, dànshì háishi mǎixiàle yì sōu chuán.',
      note:'Hai vế cùng chủ ngữ: chủ ngữ đứng trước 虽然.',pair:'虽然……但是……'}
   ]},

  {n:43,zh:'澳洲',py:'Àozhōu',pos:'Danh từ riêng',vn:'Úc, châu Úc',hv:'Úc châu',em:'🦘',lesson:3,
   explain:['Nước Úc / châu Úc. Tên chính thức của nước Úc là 澳大利亚.'],
   usage:'去澳洲, 在澳洲留学; hay nhắc cùng 新西兰.',
   collo:['去澳洲','澳洲和新西兰','在澳洲留学'],
   ex_zh:'下一站，他们想去澳洲和新西兰。',ex_py:'Xià yí zhàn, tāmen xiǎng qù Àozhōu hé Xīnxīlán.',ex_vn:'Chặng tiếp theo, họ muốn đến Úc và New Zealand.',
   exList:[
     {zh:'下一站，他们想去澳洲和新西兰。',py:'Xià yí zhàn, tāmen xiǎng qù Àozhōu hé Xīnxīlán.',vn:'Chặng tiếp theo, họ muốn đến Úc và New Zealand.'},
     {zh:'我表哥在澳洲留学，已经三年了。',py:'Wǒ biǎogē zài Àozhōu liúxué, yǐjīng sān nián le.',vn:'Anh họ tôi du học ở Úc đã ba năm rồi.'},
     {zh:'澳洲的袋鼠很有名。',py:'Àozhōu de dàishǔ hěn yǒumíng.',vn:'Chuột túi ở Úc rất nổi tiếng.'}
   ],
   colloFull:[
     {zh:'去澳洲',py:'qù Àozhōu',vn:'đi Úc'},
     {zh:'澳洲和新西兰',py:'Àozhōu hé Xīnxīlán',vn:'Úc và New Zealand'},
     {zh:'在澳洲留学',py:'zài Àozhōu liúxué',vn:'du học ở Úc'},
     {zh:'澳洲的袋鼠',py:'Àozhōu de dàishǔ',vn:'chuột túi nước Úc'}
   ],
   patterns:[
     {s:'去 / 在 + 澳洲',m:'Đi / ở Úc'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi chưa từng đi Úc.',answer:'我从来没去过澳洲。',answerPy:'Wǒ cónglái méi qùguo Àozhōu.',
      note:'Tên nước làm tân ngữ trực tiếp của 去.',pair:'从来没……过'},
     {promptLang:'vi',prompt:'Anh họ tôi là năm ngoái sang Úc du học.',answer:'我表哥是去年去澳洲留学的。',answerPy:'Wǒ biǎogē shì qùnián qù Àozhōu liúxué de.',
      note:'Nhấn mạnh THỜI GIAN → 是……的.',pair:'是……的'}
   ]},

  {n:44,zh:'新西兰',py:'Xīnxīlán',pos:'Danh từ riêng',vn:'New Zealand, Tân Tây Lan',hv:'Tân Tây Lan',em:'🥝',lesson:3,
   explain:['Đảo quốc ở Nam Thái Bình Dương, phía đông nam nước Úc.'],
   usage:'去新西兰, 新西兰人; thường nhắc cùng 澳洲.',
   collo:['去新西兰','澳洲和新西兰','新西兰的风景'],
   ex_zh:'新西兰的风景特别美。',ex_py:'Xīnxīlán de fēngjǐng tèbié měi.',ex_vn:'Phong cảnh New Zealand đẹp vô cùng.',
   exList:[
     {zh:'新西兰的风景特别美。',py:'Xīnxīlán de fēngjǐng tèbié měi.',vn:'Phong cảnh New Zealand đẹp vô cùng.'},
     {zh:'下一站，他们想去澳洲和新西兰。',py:'Xià yí zhàn, tāmen xiǎng qù Àozhōu hé Xīnxīlán.',vn:'Chặng tiếp theo, họ muốn đến Úc và New Zealand.'},
     {zh:'从澳洲坐船去新西兰要好几天。',py:'Cóng Àozhōu zuò chuán qù Xīnxīlán yào hǎo jǐ tiān.',vn:'Từ Úc đi thuyền sang New Zealand mất mấy ngày liền.'}
   ],
   colloFull:[
     {zh:'去新西兰',py:'qù Xīnxīlán',vn:'đi New Zealand'},
     {zh:'澳洲和新西兰',py:'Àozhōu hé Xīnxīlán',vn:'Úc và New Zealand'},
     {zh:'新西兰的风景',py:'Xīnxīlán de fēngjǐng',vn:'phong cảnh New Zealand'},
     {zh:'新西兰人',py:'Xīnxīlán rén',vn:'người New Zealand'}
   ],
   patterns:[
     {s:'去 / 在 + 新西兰',m:'Đi / ở New Zealand'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần có một chiếc thuyền là có thể đi đến New Zealand.',answer:'只要有一艘船，就能去新西兰。',answerPy:'Zhǐyào yǒu yì sōu chuán, jiù néng qù Xīnxīlán.',
      note:'Lượng từ 艘 của bài; 只要 nêu điều kiện đủ.',pair:'只要……就……'},
     {promptLang:'vi',prompt:'Phong cảnh New Zealand thu hút càng ngày càng nhiều du khách.',answer:'新西兰的风景吸引了越来越多的游客。',answerPy:'Xīnxīlán de fēngjǐng xīyǐnle yuè lái yuè duō de yóukè.',
      note:'越来越多的 + danh từ làm tân ngữ.',pair:'越来越……'}
   ]}
];

// ══════════════════════════════════════════
// BÀI ĐỌC — một bài liền (file nghe 03-1 đọc liền cả bài), mỗi đoạn văn một dòng
// ══════════════════════════════════════════
var dialogData = [{
  scene:'课文 · 人生有选择，一切可改变',
  preQuiz:[
    {q:'翟峰和妻子以前是做什么工作的？',opts:['老师','铁路工人','医生'],ans:1},
    {q:'翟峰为什么不想继续以前的生活？',opts:['工作不稳定','待遇太低','不想一辈子过平静的生活'],ans:2},
    {q:'翟峰是通过什么迷上帆船的？',opts:['电视','朋友','报纸'],ans:0},
    {q:'他们买船的钱是从哪儿来的？',opts:['向父母借的','卖房卖车','多年的积蓄'],ans:1},
    {q:'翟峰的父母对他的决定有什么看法？',opts:['觉得他疯了','非常支持','没有意见'],ans:0},
    {q:'出海的时候，女儿怎么样了？',opts:['在国外留学','留在爷爷奶奶家','休学跟他们一起出海'],ans:2},
    {q:'白天谁来驾船？',opts:['翟峰一个人','翟峰和妻子轮流','女儿'],ans:1},
    {q:'一家人最舒适的时候是什么时候？',opts:['早上','中午','傍晚'],ans:2},
    {q:'以前在陆地上，一家人晚上是什么样的？',opts:['在各自的房间，交流不多','一起看电影','一起聊天儿'],ans:0},
    {q:'在海上，他们最怕什么？',opts:['钓不到鱼','雷电交加的时刻','没有海鲜吃'],ans:1},
    {q:'这次航海他们一共用了多长时间？',opts:['四个月','一年','八个月'],ans:2},
    {q:'翟峰认为航海是什么？',opts:['人生道路上的一段台阶','一次简单的旅行','一份新工作'],ans:0},
    {q:'他们打算什么时候再次出发？',opts:['明年春天','北风南下之时','女儿毕业以后'],ans:1}
  ],
  lines:[
    {sp:0,zh:'翟峰和妻子都是铁路工人，工作稳定、待遇不错。他们有房有车，从不用为生活发愁。可翟峰却不想一辈子过这样平静的生活。通过电视，翟峰迷上了帆船，他觉得帆船能带他撞开“世界之门”：只要有一艘船，就能航行在无边无际的海上，到任何自己想去的地方。',
     py:'Zhái Fēng hé qīzi dōu shì tiělù gōngrén, gōngzuò wěndìng, dàiyù búcuò. Tāmen yǒu fáng yǒu chē, cóng bú yòng wèi shēnghuó fāchóu. Kě Zhái Fēng què bù xiǎng yíbèizi guò zhèyàng píngjìng de shēnghuó. Tōngguò diànshì, Zhái Fēng míshàngle fānchuán, tā juéde fānchuán néng dài tā zhuàngkāi "shìjiè zhī mén": zhǐyào yǒu yì sōu chuán, jiù néng hángxíng zài wú biān wú jì de hǎi shang, dào rènhé zìjǐ xiǎng qù de dìfang.',
     vn:'Trác Phong và vợ đều là công nhân đường sắt, công việc ổn định, đãi ngộ khá tốt. Họ có nhà có xe, chưa bao giờ phải lo chuyện sinh sống. Nhưng Trác Phong lại không muốn cả đời sống cuộc sống yên ả như thế. Qua tivi, Trác Phong mê thuyền buồm, anh cảm thấy thuyền buồm có thể đưa anh phá tung "cánh cửa thế giới": chỉ cần có một chiếc thuyền là có thể giong buồm trên biển cả mênh mông, đến bất cứ nơi nào mình muốn.'},
    {sp:0,zh:'由于翟峰和妻子没有积蓄，于是卖房卖车，买下了一艘二手船，翟峰叫它“彩虹号”。出发前，翟峰自学了航海知识。然而，包括翟峰的父母，所有人都觉得，翟峰“疯了”。',
     py:'Yóuyú Zhái Fēng hé qīzi méiyǒu jīxù, yúshì mài fáng mài chē, mǎixiàle yì sōu èrshǒu chuán, Zhái Fēng jiào tā "Cǎihóng Hào". Chūfā qián, Zhái Fēng zìxuéle hánghǎi zhīshi. Rán\'ér, bāokuò Zhái Fēng de fùmǔ, suǒyǒu rén dōu juéde, Zhái Fēng "fēng le".',
     vn:'Vì Trác Phong và vợ không có tiền để dành nên họ bán nhà bán xe, mua một chiếc thuyền cũ, Trác Phong đặt tên cho nó là "tàu Cầu Vồng". Trước khi khởi hành, Trác Phong đã tự học kiến thức hàng hải. Thế nhưng mọi người, kể cả bố mẹ Trác Phong, đều cho rằng Trác Phong "điên rồi".'},
    {sp:0,zh:'2012年11月24日，辞了职的翟峰和妻子带着休学的女儿，第一次驾驶帆船出海了。白天，翟峰和妻子轮流驾船。女儿在船上看书、学习、画画儿。下午海面平静时，翟峰会和妻子下海游泳或者钓鱼。该吃饭时，妻子会给全家人做一顿美味的海鲜。',
     py:'Èr líng yī èr nián shíyī yuè èrshísì rì, cíle zhí de Zhái Fēng hé qīzi dàizhe xiūxué de nǚ\'ér, dì-yī cì jiàshǐ fānchuán chūhǎi le. Báitiān, Zhái Fēng hé qīzi lúnliú jià chuán. Nǚ\'ér zài chuán shang kàn shū, xuéxí, huà huàr. Xiàwǔ hǎimiàn píngjìng shí, Zhái Fēng huì hé qīzi xià hǎi yóuyǒng huòzhě diào yú. Gāi chīfàn shí, qīzi huì gěi quán jiā rén zuò yí dùn měiwèi de hǎixiān.',
     vn:'Ngày 24 tháng 11 năm 2012, Trác Phong — lúc này đã nghỉ việc — cùng vợ đưa cô con gái tạm nghỉ học, lần đầu tiên lái thuyền buồm ra khơi. Ban ngày, Trác Phong và vợ thay phiên nhau lái thuyền. Con gái ở trên thuyền đọc sách, học bài, vẽ tranh. Buổi chiều khi mặt biển lặng, Trác Phong cùng vợ xuống biển bơi hoặc câu cá. Đến bữa, người vợ nấu cho cả nhà một bữa hải sản ngon lành.'},
    {sp:0,zh:'傍晚是一家人最舒适的时候。干完活儿，一家人坐在一起，用电脑看看电影，或者聊聊天儿。这样的生活，是翟峰盼望已久的。以前陆地上的夜晚，他们在各自的房间，一家人没有更多的交流。',
     py:'Bàngwǎn shì yì jiā rén zuì shūshì de shíhou. Gànwán huór, yì jiā rén zuò zài yìqǐ, yòng diànnǎo kànkan diànyǐng, huòzhě liáoliao tiānr. Zhèyàng de shēnghuó, shì Zhái Fēng pànwàng yǐ jiǔ de. Yǐqián lùdì shang de yèwǎn, tāmen zài gèzì de fángjiān, yì jiā rén méiyǒu gèng duō de jiāoliú.',
     vn:'Chạng vạng là lúc cả nhà thoải mái nhất. Làm xong việc, cả nhà ngồi quây quần, xem phim trên máy tính hoặc trò chuyện. Cuộc sống như thế là điều Trác Phong mong mỏi đã lâu. Trước đây, những buổi tối trên đất liền, họ ai ở phòng nấy, cả nhà không trò chuyện gì nhiều.'},
    {sp:0,zh:'中国有句老话，可上山，勿下海。美好的时刻过去后是一个个紧张的夜晚。一路上，翟峰一家经历了船身着火、漏水等大大小小十多次险情。他们最怕雷电交加的时刻，因为小船随时有可能被下一道闪电击到，一家三口只能紧紧拥抱在一起，希望闪电快快过去。',
     py:'Zhōngguó yǒu jù lǎohuà, kě shàng shān, wù xià hǎi. Měihǎo de shíkè guòqù hòu shì yí gègè jǐnzhāng de yèwǎn. Yí lù shang, Zhái Fēng yì jiā jīnglìle chuánshēn zháohuǒ, lòu shuǐ děng dàdà xiǎoxiǎo shí duō cì xiǎnqíng. Tāmen zuì pà léidiàn jiāojiā de shíkè, yīnwèi xiǎo chuán suíshí yǒu kěnéng bèi xià yí dào shǎndiàn jīdào, yì jiā sān kǒu zhǐ néng jǐnjǐn yōngbào zài yìqǐ, xīwàng shǎndiàn kuàikuài guòqù.',
     vn:'Trung Quốc có câu nói xưa: lên núi thì được, chớ xuống biển. Qua những khoảnh khắc tươi đẹp là từng đêm căng thẳng. Suốt dọc đường, cả nhà Trác Phong đã trải qua hơn mười lần gặp nạn lớn nhỏ như thân thuyền bốc cháy, rò nước. Họ sợ nhất những lúc sấm chớp đan xen, vì con thuyền nhỏ bất cứ lúc nào cũng có thể bị tia chớp tiếp theo đánh trúng, cả nhà ba người chỉ biết ôm chặt lấy nhau, mong chớp giật mau qua.'},
    {sp:0,zh:'在经历了八个月、航行了4000多海里之后，翟峰一家终于回到了家。',
     py:'Zài jīnglìle bā ge yuè, hángxíngle sìqiān duō hǎilǐ zhīhòu, Zhái Fēng yì jiā zhōngyú huídàole jiā.',
     vn:'Sau tám tháng, đi hơn 4000 hải lý, cả nhà Trác Phong cuối cùng đã về đến nhà.'},
    {sp:0,zh:'翟峰相信，一切只是开始，航海就是他人生道路上一段长长的台阶，通向他想要的未来。“我和太太想要看看这个时代、这个世界到底是什么样子。人生有选择，一切可改变”。下一站，他们想去澳洲和新西兰。等待今年11月的北风，北风南下之时，他们将再次出发。',
     py:'Zhái Fēng xiāngxìn, yíqiè zhǐ shì kāishǐ, hánghǎi jiù shì tā rénshēng dàolù shang yí duàn chángcháng de táijiē, tōngxiàng tā xiǎng yào de wèilái. "Wǒ hé tàitai xiǎng yào kànkan zhège shídài, zhège shìjiè dàodǐ shì shénme yàngzi. Rénshēng yǒu xuǎnzé, yíqiè kě gǎibiàn". Xià yí zhàn, tāmen xiǎng qù Àozhōu hé Xīnxīlán. Děngdài jīnnián shíyī yuè de běifēng, běifēng nán xià zhī shí, tāmen jiāng zàicì chūfā.',
     vn:'Trác Phong tin rằng mọi thứ chỉ mới là bắt đầu, đi biển chính là một đoạn bậc thềm dài trên đường đời của anh, dẫn tới tương lai mà anh mong muốn. "Tôi và vợ muốn xem thời đại này, thế giới này rốt cuộc trông như thế nào. Đời người có lựa chọn, mọi thứ đều có thể đổi thay". Chặng tiếp theo, họ muốn đến Úc và New Zealand. Chờ gió bấc tháng 11 năm nay, khi gió bấc thổi về phương nam, họ sẽ lại lên đường.'}
  ]
}];

// ══════════════════════════════════════════
// PHÂN BIỆT TỪ GẦN NGHĨA 词语辨析 — cặp của sách (舒适—舒服) + 2 cặp lấy từ 练习 2 của sách
// ══════════════════════════════════════════
var synonymData = [
  {pair:'舒适 — 舒服',
   same:'Đều là tính từ, đều biểu thị cảm giác nhẹ nhõm, dễ chịu.',
   sameEx:{zh:'饭店为入住的客人准备了舒适／舒服的房间。',vn:'Khách sạn chuẩn bị cho khách lưu trú những căn phòng dễ chịu.'},
   items:[
     {word:'舒适',points:[
       'Chủ yếu dùng trong VĂN VIẾT.',
       'Thiên về cảm giác CHUNG mà môi trường mang lại cho con người.',
       'Rất ít khi lặp lại.'
     ],ex:[{zh:'这款车内部空间宽大，乘坐舒适。',vn:'Mẫu xe này không gian bên trong rộng rãi, ngồi rất êm.'},
          {zh:'我们都需要一个轻松舒适的生活环境。',vn:'Chúng ta đều cần một môi trường sống thoải mái dễ chịu.'}]},
     {word:'舒服',points:[
       'Chủ yếu dùng trong KHẨU NGỮ.',
       'Thiên về cảm giác CỤ THỂ, chủ quan của cơ thể, tinh thần (不舒服 = khó chịu, mệt trong người).',
       'Lặp lại được dạng AABB (舒舒服服); còn dùng như động từ, lặp dạng ABAB (舒服舒服).'
     ],ex:[{zh:'他靠在沙发上舒舒服服地看电视。',vn:'Anh ấy tựa vào sofa thoải mái xem tivi.'},
          {zh:'听了他的话，我心里很不舒服。',vn:'Nghe anh ta nói, trong lòng tôi rất khó chịu.'},
          {zh:'踢完球了？洗个热水澡舒服舒服吧。',vn:'Đá bóng xong rồi à? Tắm nước nóng cho dễ chịu đi.'}]}
   ],
   quiz:[
     {sentence:'早晨收拾完房间后，妈妈喜欢＿＿地坐在那把躺椅上休息一下。',options:['舒适','舒服'],answer:1,
      why:'Cảm giác cụ thể của cơ thể khi ngồi nghỉ, làm trạng ngữ + 地 → 舒服 (舒舒服服地). 舒适 không dùng kiểu này.'},
     {sentence:'这家餐厅装修精美、环境＿＿。',options:['舒适','舒服'],answer:0,
      why:'Tả cảm giác chung của MÔI TRƯỜNG, câu văn viết (装修精美) → 舒适.'},
     {sentence:'我今天脖子有点儿不＿＿，左右转动时有点儿疼。',options:['舒适','舒服'],answer:1,
      why:'Cảm giác cụ thể của một bộ phận cơ thể, khẩu ngữ → 不舒服.'},
     {sentence:'这艘客船就像高级宾馆一样，除了有＿＿的客舱外，还有餐厅、电影院、商店、舞厅、游泳池等。',options:['舒适','舒服'],answer:0,
      why:'Giới thiệu khoang tàu (môi trường), giọng văn viết → 舒适的客舱.'}
   ],
   sgk:{
     chung:{t:'都是形容词，都表示轻松愉快。',vn:'Đều là tính từ, đều biểu thị cảm giác nhẹ nhõm, dễ chịu.',vd:'饭店为入住的客人准备了舒适／舒服的房间。',vdVn:'Khách sạn chuẩn bị cho khách lưu trú những căn phòng dễ chịu.'},
     khac:[
       {a:{t:'多用于书面语。',vn:'Chủ yếu dùng trong văn viết.',vd:'这款车内部空间宽大，乘坐舒适。',vdVn:'Mẫu xe này không gian bên trong rộng rãi, ngồi rất êm.'},
        b:{t:'多用于口语。',vn:'Chủ yếu dùng trong khẩu ngữ.',vd:'他靠在沙发上舒舒服服地看电视。',vdVn:'Anh ấy tựa vào sofa thoải mái xem tivi.'}},
       {a:{t:'侧重环境给人的整体感受。',vn:'Thiên về cảm giác chung mà môi trường mang lại cho con người.',vd:'我们都需要一个轻松舒适的生活环境。',vdVn:'Chúng ta đều cần một môi trường sống thoải mái dễ chịu.'},
        b:{t:'侧重人身体、精神上的主观的、具体的感受。',vn:'Thiên về cảm giác chủ quan, cụ thể của cơ thể, tinh thần con người.',vd:'听了他的话，我心里很不舒服。',vdVn:'Nghe anh ta nói, trong lòng tôi rất khó chịu.'}},
       {a:{t:'一般极少重叠使用。',vn:'Nói chung rất ít khi lặp lại.'},
        b:{t:'可重叠为AABB。还可活用作动词，重叠形式为ABAB。',vn:'Lặp lại được dạng AABB; còn dùng linh hoạt như động từ, lặp dạng ABAB.',vd:'踢完球了？洗个热水澡舒服舒服吧。',vdVn:'Đá bóng xong rồi à? Tắm nước nóng cho dễ chịu đi.'}}
     ],
     lamThu:[
       {s:'早晨收拾完房间后，妈妈喜欢＿＿地坐在那把躺椅上休息一下。',dap:[false,true],mau:true,
        giai:'Cảm giác cụ thể của cơ thể, làm trạng ngữ với 地 → chỉ 舒服.'},
       {s:'这家餐厅装修精美、环境＿＿。',dap:[true,false],
        giai:'Cảm giác chung về MÔI TRƯỜNG, câu văn viết → 舒适. (环境舒服 nghe khẩu ngữ, không hợp với 装修精美.)'},
       {s:'我今天脖子有点儿不＿＿，左右转动时有点儿疼。',dap:[false,true],
        giai:'Cảm giác cụ thể của cơ thể (cổ đau) → 不舒服. Không nói 不舒适 về bộ phận cơ thể.'},
       {s:'这艘客船就像高级宾馆一样，除了有＿＿的客舱外，还有餐厅、电影院、商店、舞厅、游泳池等。',dap:[true,false],
        giai:'Giới thiệu khoang tàu (môi trường), văn viết → 舒适的客舱.'}
     ]
   }},

  {pair:'盼望 — 希望',
   same:'Đều là động từ, đều biểu thị mong muốn một điều gì đó xảy ra.',
   sameEx:{zh:'我盼望／希望早日见到你。',vn:'Tôi mong sớm được gặp bạn.'},
   items:[
     {word:'盼望',points:[
       'Mức độ MẠNH: mong mỏi tha thiết, thường đã chờ đợi lâu.',
       'Hay dùng 盼望着, 盼望已久.',
       'Chỉ là động từ, không làm danh từ.'
     ],ex:[{zh:'这样的生活，是翟峰盼望已久的。',vn:'Cuộc sống như thế là điều Trác Phong mong mỏi đã lâu.'},
          {zh:'现在，父母、妻子和孩子都盼望着他早日学成回国。',vn:'Giờ đây, bố mẹ, vợ và con đều mong anh ấy sớm học xong về nước.'}]},
     {word:'希望',points:[
       'Mức độ nhẹ hơn, dùng rất rộng.',
       'Làm được DANH TỪ: 有希望, 我的希望.',
       'Dùng để nhắn nhủ, yêu cầu người khác: 希望你……'
     ],ex:[{zh:'希望你明天准时来。',vn:'Mong bạn ngày mai đến đúng giờ.'},
          {zh:'这场比赛我们还有希望。',vn:'Trận này chúng ta vẫn còn hy vọng.'}]}
   ],
   quiz:[
     {sentence:'孩子们天天＿＿着放暑假。',options:['盼望','希望'],answer:0,
      why:'Mong mỏi tha thiết, ngày ngày chờ đợi, có 着 → 盼望着.'},
     {sentence:'这场比赛我们还有＿＿。',options:['盼望','希望'],answer:1,
      why:'Cần DANH TỪ sau 有 → 希望. 盼望 không làm danh từ.'},
     {sentence:'＿＿大家准时参加明天的会议。',options:['盼望','希望'],answer:1,
      why:'Nhắn nhủ, yêu cầu người khác → 希望. 盼望 không dùng để dặn dò.'},
     {sentence:'现在，父母、妻子和孩子都＿＿着他早日学成回国。',options:['盼望','希望'],answer:0,
      why:'Cả nhà tha thiết chờ người thân trở về → 盼望着 (câu 练习 2 của sách).'}
   ]},

  {pair:'平静 — 冷静',
   same:'Đều là tính từ, đều có thể tả trạng thái tâm lý không bị kích động.',
   sameEx:{zh:'听到这个消息，他表现得很平静／冷静。',vn:'Nghe tin này, anh ấy tỏ ra rất bình thản.'},
   items:[
     {word:'平静',points:[
       'Tả trạng thái YÊN LẶNG, không xao động: mặt nước, cuộc sống, tâm trạng.',
       'Hay dùng: 平静的海面, 平静的生活, 心情久久不能平静.'
     ],ex:[{zh:'下午海面平静时，翟峰会和妻子下海游泳或者钓鱼。',vn:'Buổi chiều khi mặt biển lặng, Trác Phong cùng vợ xuống biển bơi hoặc câu cá.'},
          {zh:'听到这个好消息后，我激动的心情久久不能平静。',vn:'Nghe tin vui này, lòng tôi xúc động mãi không lắng xuống.'}]},
     {word:'冷静',points:[
       'Chỉ dùng cho NGƯỜI: đầu óc tỉnh táo, suy nghĩ sáng suốt, không nóng vội.',
       'Dùng được như động từ: 冷静一下, 你先冷静冷静.'
     ],ex:[{zh:'遇到危险时一定要冷静。',vn:'Khi gặp nguy hiểm nhất định phải bình tĩnh.'},
          {zh:'你先冷静一下，再做决定。',vn:'Bạn bình tĩnh lại đã rồi hãy quyết định.'}]}
   ],
   quiz:[
     {sentence:'听到这个好消息后，我激动的心情久久不能＿＿。',options:['平静','冷静'],answer:0,
      why:'Tâm trạng xúc động mãi không LẮNG XUỐNG → 平静 (câu 练习 2 của sách).'},
     {sentence:'遇到问题要＿＿地想一想，不要着急。',options:['平静','冷静'],answer:1,
      why:'Suy nghĩ tỉnh táo, sáng suốt → 冷静地想.'},
     {sentence:'今天一点儿风也没有，海面非常＿＿。',options:['平静','冷静'],answer:0,
      why:'Tả MẶT BIỂN — 冷静 chỉ dùng cho người.'},
     {sentence:'你先＿＿一下，别说气话。',options:['平静','冷静'],answer:1,
      why:'Dùng như động từ khuyên người khác bình tĩnh lại → 冷静一下.'}
   ]}
];

// ══════════════════════════════════════════
// BẮC CẦU HÁN–VIỆT — tận dụng vốn từ Hán–Việt sẵn có
// ══════════════════════════════════════════
var hvBridgeData = {
  easy:[
    {zh:'人生',hv:'nhân sinh',vn:'đời người',note:'"Nhân sinh quan" — nghe là hiểu.'},
    {zh:'工人',hv:'công nhân',vn:'công nhân',note:'Trùng khít.'},
    {zh:'稳定',hv:'ổn định',vn:'ổn định',note:'Trùng khít — nhớ một lần là xong.'},
    {zh:'待遇',hv:'đãi ngộ',vn:'đãi ngộ',note:'Trùng khít: chế độ đãi ngộ.'},
    {zh:'辞职',hv:'từ chức',vn:'từ chức, nghỉ việc',note:'Tiếng Trung dùng cả cho nhân viên thường, không chỉ người có chức vụ.'},
    {zh:'时代',hv:'thời đại',vn:'thời đại',note:'Trùng khít.'},
    {zh:'时刻',hv:'thời khắc',vn:'thời khắc',note:'Trùng khít; còn làm phó từ "luôn luôn".'},
    {zh:'未来',hv:'vị lai',vn:'tương lai',note:'"Vị lai" = chưa đến → tương lai.'},
    {zh:'海里',hv:'hải lý',vn:'hải lý',note:'Trùng khít — đơn vị đo trên biển.'},
    {zh:'航行',hv:'hàng hành',vn:'đi tàu thuyền',note:'"Hàng" như trong hàng hải, hàng không.'},
    {zh:'积蓄',hv:'tích súc',vn:'tiền để dành',note:'"Tích" = tích góp (như tích luỹ).'}
  ],
  idiom:[
    {zh:'无边无际',hv:'vô biên vô tế',vn:'mênh mông không bờ bến',note:'Tiếng Việt cũng nói "vô biên".'},
    {zh:'雷电交加',hv:'lôi điện giao gia',vn:'sấm chớp đan xen',note:'"Giao gia" = cùng ập tới một lúc.'},
    {zh:'可上山，勿下海',hv:'khả thượng sơn, vật hạ hải',vn:'lên núi thì được, chớ xuống biển',note:'Câu nói xưa: biển cả nguy hiểm hơn núi rừng.'}
  ],
  trap:[
    {zh:'平静',hv:'bình tĩnh',vn:'yên ả, lặng',
     warn:'BẪY: "bình tĩnh" tiếng Việt chỉ thái độ của người. 平静 còn tả MẶT BIỂN, CUỘC SỐNG yên ả. Muốn nói "bình tĩnh xử lý" thì dùng 冷静.'},
    {zh:'发愁',hv:'phát sầu',vn:'lo lắng',
     warn:'Không phải "buồn sầu" chung chung — 发愁 là LO vì một việc khó giải quyết: 为生活发愁.'},
    {zh:'太太',hv:'thái thái',vn:'vợ; bà',
     warn:'Không phải "bà lớn" như truyện cổ. Ngày nay 我太太 = vợ tôi (lịch sự), 王太太 = bà Vương.'},
    {zh:'陆地',hv:'lục địa',vn:'đất liền',
     warn:'Tiếng Việt "lục địa" là châu lục. 陆地 chỉ là ĐẤT LIỀN nói chung, đối lập với biển.'},
    {zh:'着火',hv:'trước hoả',vn:'bốc cháy',
     warn:'着 ở đây đọc zháo (không đọc zhe/zhuó). Âm Hán–Việt không giúp gì — nhớ theo nghĩa "bắt lửa".'},
    {zh:'二手',hv:'nhị thủ',vn:'đồ cũ',
     warn:'"Tay thứ hai" = đã qua tay người khác → đồ cũ. Không liên quan đến "hai tay".'}
  ]
};

// ══════════════════════════════════════════
// GHÉP TỪ — lấy bảng 词语搭配 + bài 3 (练习) của sách
// ══════════════════════════════════════════
var matchData = [
  {left:'轮流',right:'驾船'},
  {left:'盼望',right:'好消息'},
  {left:'稳定的',right:'收入'},
  {left:'平静的',right:'海面'},
  {left:'为生活',right:'发愁'},
  {left:'紧紧地',right:'拥抱'},
  {left:'一顿',right:'海鲜'},
  {left:'一道',right:'闪电'},
  {left:'一艘',right:'帆船'},
  {left:'驾驶',right:'汽车'},
  {left:'等待',right:'机会'},
  {left:'舒适的',right:'座位'},
  {left:'轻松的',right:'时刻'},
  {left:'被车',right:'撞倒'},
  {left:'船身',right:'漏水'},
  {left:'请勿',right:'吸烟'},
  {left:'美好的',right:'未来'},
  {left:'雨后',right:'彩虹'},
  {left:'信息',right:'时代'},
  {left:'各自的',right:'房间'},
  {left:'航行了',right:'4000多海里'}
];

// ══════════════════════════════════════════
// ĐIỀN TỪ
// ══════════════════════════════════════════
var fillData = [
  {pre:'考上大学只是',blank:'人生',post:'的一个开始，以后的路还很长。',hint:'(đời người)',ans:'人生'},
  {pre:'他爸爸是一名铁路',blank:'工人',post:'，工作虽然辛苦，但是很稳定。',hint:'(công nhân)',ans:'工人'},
  {pre:'这份工作收入',blank:'稳定',post:'，所以很多人都想来。',hint:'(ổn định)',ans:'稳定'},
  {pre:'这家公司',blank:'待遇',post:'不错，每年还有两次旅行。',hint:'(đãi ngộ)',ans:'待遇'},
  {pre:'通过电视，翟峰迷上了',blank:'帆船',post:'。',hint:'(thuyền buồm)',ans:'帆船'},
  {pre:'这艘船已经在海上',blank:'航行',post:'了三个月。',hint:'(đi thuyền, giong thuyền)',ans:'航行'},
  {pre:'爷爷用一辈子的',blank:'积蓄',post:'帮我付了大学的学费。',hint:'(tiền để dành)',ans:'积蓄'},
  {pre:'哥哥在网上买了一辆',blank:'二手',post:'自行车，又便宜又好骑。',hint:'(đã qua sử dụng)',ans:'二手'},
  {pre:'雨停了，天上出现了一道美丽的',blank:'彩虹',post:'。',hint:'(cầu vồng)',ans:'彩虹'},
  {pre:'你',blank:'疯',post:'了吗？为什么突然要把房子卖了？',hint:'(phát điên)',ans:'疯'},
  {pre:'他工作了十年，上个月突然',blank:'辞职',post:'了，想去看看世界。',hint:'(nghỉ việc, từ chức)',ans:'辞职'},
  {pre:'喝了酒千万不能',blank:'驾驶',post:'汽车。',hint:'(lái, điều khiển)',ans:'驾驶'},
  {pre:'爷爷周末常去湖边',blank:'钓',post:'鱼。',hint:'(câu)',ans:'钓'},
  {pre:'这家餐厅的',blank:'海鲜',post:'又新鲜又便宜，所以客人特别多。',hint:'(hải sản)',ans:'海鲜'},
  {pre:'每天',blank:'傍晚',post:'，爷爷奶奶都会去公园散步。',hint:'(lúc chạng vạng)',ans:'傍晚'},
  {pre:'周末我常帮奶奶在院子里',blank:'干活儿',post:'。',hint:'(làm việc chân tay)',ans:'干活儿'},
  {pre:'在海上航行了八个月，他们终于回到了',blank:'陆地',post:'。',hint:'(đất liền)',ans:'陆地'},
  {pre:'外面又打',blank:'雷',post:'又闪电的，咱们等会儿再走吧。',hint:'(sấm)',ans:'雷'},
  {pre:'天上突然出现了一道',blank:'闪电',post:'，接着就下起了大雨。',hint:'(tia chớp)',ans:'闪电'},
  {pre:'比赛赢了，队员们高兴地',blank:'拥抱',post:'在一起。',hint:'(ôm)',ans:'拥抱'},
  {pre:'一',blank:'海里',post:'大约是1852米。',hint:'(hải lý)',ans:'海里'},
  {pre:'奶奶腿不好，上',blank:'台阶',post:'的时候要慢一点儿。',hint:'(bậc thềm)',ans:'台阶'},
  {pre:'我们要为美好的',blank:'未来',post:'努力学习。',hint:'(tương lai)',ans:'未来'},
  {pre:'',blank:'翟峰',post:'和妻子都是铁路工人，工作稳定、待遇不错。',hint:'(tên nhân vật chính — Trác Phong)',ans:'翟峰'},
  {pre:'下一站，他们想去',blank:'澳洲',post:'和新西兰。',hint:'(nước Úc)',ans:'澳洲'},
  {pre:'从澳洲坐船去',blank:'新西兰',post:'要好几天。',hint:'(New Zealand)',ans:'新西兰'},
  {pre:'她正在为儿子上学的事',blank:'发愁',post:'。',hint:'(lo âu)',ans:'发愁'},
  {pre:'有问题的话，你',blank:'随时',post:'可以来办公室找我。',hint:'(bất cứ lúc nào)',ans:'随时'},
  {pre:'下午海面',blank:'平静',post:'时，翟峰会和妻子下海游泳或者钓鱼。',hint:'(lặng, yên ả)',ans:'平静'},
  {pre:'汉语技能教学',blank:'包括',post:'听、说、读、写四个方面。',hint:'(bao gồm)',ans:'包括'}
];

// ══════════════════════════════════════════
// SẮP XẾP CÂU — mỗi điểm ngữ pháp (各自 / 勿 / 包括 / 时刻) ít nhất 2 câu
// ══════════════════════════════════════════
var sortData = [
  {words:['下课后','，','同学们','各自','回','家','了','。'],ans:'下课后，同学们各自回家了。',audio:'下课后，同学们各自回家了。'},
  {words:['他们','在','各自的','房间里','看书','。'],ans:'他们在各自的房间里看书。',audio:'他们在各自的房间里看书。'},
  {words:['门上','挂着','一块','“请勿打扰”的','牌子','。'],ans:'门上挂着一块“请勿打扰”的牌子。',audio:'门上挂着一块“请勿打扰”的牌子。'},
  {words:['为了','他人的健康','，','请勿','在公共场所','吸烟','。'],ans:'为了他人的健康，请勿在公共场所吸烟。',audio:'为了他人的健康，请勿在公共场所吸烟。'},
  {words:['这次旅行的','费用','包括','机票和酒店','。'],ans:'这次旅行的费用包括机票和酒店。',audio:'这次旅行的费用包括机票和酒店。'},
  {words:['汉语技能教学','包括','听、说、读、写','四个方面','。'],ans:'汉语技能教学包括听、说、读、写四个方面。',audio:'汉语技能教学包括听、说、读、写四个方面。'},
  {words:['美好的','时刻','过去后','是','一个个','紧张的夜晚','。'],ans:'美好的时刻过去后是一个个紧张的夜晚。',audio:'美好的时刻过去后是一个个紧张的夜晚。'},
  {words:['他','时时刻刻','提醒','自己','要注意安全','。'],ans:'他时时刻刻提醒自己要注意安全。',audio:'他时时刻刻提醒自己要注意安全。'},
  {words:['白天','，','翟峰和妻子','轮流','驾','船','。'],ans:'白天，翟峰和妻子轮流驾船。',audio:'白天，翟峰和妻子轮流驾船。'},
  {words:['他们','从不用','为','生活','发愁','。'],ans:'他们从不用为生活发愁。',audio:'他们从不用为生活发愁。'},
  {words:['小船','随时','有可能','被','闪电','击到','。'],ans:'小船随时有可能被闪电击到。',audio:'小船随时有可能被闪电击到。'},
  {words:['这样的生活','是','翟峰','盼望已久','的','。'],ans:'这样的生活是翟峰盼望已久的。',audio:'这样的生活是翟峰盼望已久的。'},
  {words:['一家三口','紧紧地','拥抱','在一起','。'],ans:'一家三口紧紧地拥抱在一起。',audio:'一家三口紧紧地拥抱在一起。'},
  {words:['他们','卖房卖车','，','买下了','一艘','二手船','。'],ans:'他们卖房卖车，买下了一艘二手船。',audio:'他们卖房卖车，买下了一艘二手船。'}
];

// ══════════════════════════════════════════
// CHỌN TỪ THÍCH HỢP
// ══════════════════════════════════════════
var errorFixMode = 'wordchoice';
var errorFixData = [
  {wrong:'听到这个好消息后，我激动的心情久久不能____。',opts:['冷静','平静','安静','稳定'],ans:1,
   exp:'Tâm trạng xúc động mãi không LẮNG XUỐNG → 平静. 冷静 là "tỉnh táo, sáng suốt" khi suy nghĩ; 安静 là không ồn ào (nơi chốn); 稳定 là ổn định lâu dài, không đi với 激动的心情.'},
  {wrong:'现在，父母、妻子和孩子都____着他早日学成回国。',opts:['希望','盼望','愿意','打算'],ans:1,
   exp:'Cả nhà tha thiết chờ người thân trở về, có 着 → 盼望着. 希望 mức độ nhẹ và hiếm khi đi với 着; 愿意 là "bằng lòng", 打算 là "dự định" — đều không hợp nghĩa.'},
  {wrong:'这款车内部空间宽大，乘坐____。',opts:['舒服','舒适','平静','冷静'],ans:1,
   exp:'Câu văn viết giới thiệu sản phẩm, tả cảm giác chung → 舒适. 舒服 thiên về khẩu ngữ; 平静, 冷静 không tả cảm giác ngồi xe.'},
  {wrong:'我今天脖子有点儿不____，左右转动时有点儿疼。',opts:['舒适','平静','舒服','稳定'],ans:2,
   exp:'Cảm giác cụ thể của một bộ phận cơ thể → 不舒服. 舒适 tả môi trường; 平静, 稳定 không nói về cơ thể.'},
  {wrong:'21世纪是一个信息____。',opts:['时刻','时代','时候','时间'],ans:1,
   exp:'Một giai đoạn lịch sử dài → 时代 (信息时代). 时刻 là một thời điểm ngắn; 时候, 时间 không đi với 信息 thành cụm này.'},
  {wrong:'在最后____，他为本队踢进了赢得比赛的关键一球。',opts:['时代','时期','时刻','年代'],ans:2,
   exp:'Một thời điểm then chốt, ngắn → 最后时刻. 时代, 时期, 年代 đều chỉ một giai đoạn dài.'},
  {wrong:'他们买下了一____二手船，翟峰叫它“彩虹号”。',opts:['艘','辆','架','顿'],ans:0,
   exp:'Lượng từ của tàu thuyền là 艘. 辆 dùng cho xe; 架 dùng cho máy bay; 顿 dùng cho bữa ăn.'},
  {wrong:'该吃饭时，妻子会给全家人做一____美味的海鲜。',opts:['张','顿','艘','项'],ans:1,
   exp:'Lượng từ cho bữa ăn là 顿 (一顿海鲜). 张 cho vật phẳng; 艘 cho thuyền; 项 cho hạng mục, nhiệm vụ (bài 1).'},
  {wrong:'中场休息时间到了，比赛双方队员____回场外休息。',opts:['互相','自从','相互','各自'],ans:3,
   exp:'Mỗi đội tự về chỗ của mình → 各自. 互相 / 相互 là "lẫn nhau" (phải có hành động qua lại); 自从 là giới từ "từ khi".'},
  {wrong:'非工作人员，请____入内。',opts:['没','勿','非','未'],ans:1,
   exp:'Biển báo cấm đoán, văn viết → 请勿. 没 / 未 phủ định việc đã xảy ra; 非 là "không phải", không dùng để cấm.'},
  {wrong:'我们班所有人，____最不爱运动的刘方，也都参加了这次运动会。',opts:['包括','包含','关于','对于'],ans:0,
   exp:'Nhấn mạnh một người nằm trong số đông, "kể cả …" → 包括. 包含 thiên về chứa đựng bên trong (ý nghĩa, thành phần), không dùng để kể người; 关于, 对于 là giới từ "về, đối với".'},
  {wrong:'小船____有可能被下一道闪电击到。',opts:['随便','随时','按时','准时'],ans:1,
   exp:'Bất cứ lúc nào cũng có thể xảy ra → 随时有可能. 随便 là "tuỳ tiện"; 按时, 准时 là "đúng giờ".'},
  {wrong:'白天，翟峰和妻子____驾船。',opts:['轮流','轮到','流行','交流'],ans:0,
   exp:'Hai người thay phiên nhau làm → 轮流 + V. 轮到 là "đến lượt" (轮到我了, bài 1); 流行 là "thịnh hành"; 交流 là "trao đổi".'},
  {wrong:'他走路时一直看手机，一下子____到了树上。',opts:['撞','击','拥','钓'],ans:0,
   exp:'Người va mạnh vào vật → 撞到. 击 thiên về đánh, đập (văn viết: 被闪电击到); 拥 là ôm; 钓 là câu cá.'},
  {wrong:'房顶太旧了，一下雨就____。',opts:['着火','漏','撞','击'],ans:1,
   exp:'Nước mưa lọt qua mái → 漏 (dột). 着火 là bốc cháy; 撞, 击 là va, đánh — đều không hợp với mưa.'},
  {wrong:'最近天气干燥，很容易____，千万别在这儿抽烟！',opts:['着急','着火','着凉','火车'],ans:1,
   exp:'Trời hanh khô + hút thuốc → dễ bốc cháy → 着火. 着急 là sốt ruột; 着凉 là bị cảm lạnh; 火车 là tàu hoả.'},
  {wrong:'一道闪电____中了那棵大树。',opts:['撞','漏','击','钓'],ans:2,
   exp:'Sét đánh trúng → 击中 (văn viết). 撞 là va chạm của vật đang chuyển động (xe, người); 漏, 钓 không hợp nghĩa.'},
  {wrong:'这位是我____，她是一名医生。',opts:['女士','太太','老公','丈夫'],ans:1,
   exp:'Giới thiệu vợ mình một cách lịch sự → 我太太. 女士 là cách gọi phụ nữ nói chung, không nói 我女士; 老公, 丈夫 là chồng — sai vai.'},
  {wrong:'他们有房有车，从不用为生活____。',opts:['发愁','发现','发展','发生'],ans:0,
   exp:'为 + việc + 发愁: lo lắng vì …. 发现 (phát hiện), 发展 (phát triển), 发生 (xảy ra) không đi với 为生活.'}
];

// ══════════════════════════════════════════
// DỊCH
// ══════════════════════════════════════════
var translateData = [
  {vi:'Tôi có thể bắt đầu làm việc bất cứ lúc nào.',zh:'我随时可以开始干活儿。',py:'Wǒ suíshí kěyǐ kāishǐ gànhuór.'},
  {vi:'Yêu cầu của tôi với công việc mới chính là đãi ngộ ổn định.',zh:'我对新工作的要求就是待遇稳定。',py:'Wǒ duì xīn gōngzuò de yāoqiú jiù shì dàiyù wěndìng.'},
  {vi:'Cầu vồng sau mưa khiến anh ấy cảm nhận được một sự bình yên.',zh:'雨后的彩虹让他感受到一种平静。',py:'Yǔ hòu de cǎihóng ràng tā gǎnshòu dào yì zhǒng píngjìng.'},
  {vi:'Ban ngày, hai vợ chồng thay phiên nhau lái thuyền.',zh:'白天，夫妻俩轮流驾船。',py:'Báitiān, fūqī liǎ lúnliú jià chuán.'},
  {vi:'Tan học rồi, các bạn ai về nhà nấy.',zh:'放学了，同学们各自回家了。',py:'Fàngxué le, tóngxuémen gèzì huí jiā le.'},
  {vi:'Xin đừng hút thuốc ở nơi công cộng.',zh:'请勿在公共场所吸烟。',py:'Qǐng wù zài gōnggòng chǎngsuǒ xīyān.'},
  {vi:'Cả nhà tôi, kể cả ông tôi, đều thích xem bóng đá.',zh:'我们全家，包括我爷爷，都喜欢看足球。',py:'Wǒmen quán jiā, bāokuò wǒ yéye, dōu xǐhuan kàn zúqiú.'},
  {vi:'Ở thời khắc cuối cùng, cậu ấy đã ghi bàn thắng quyết định.',zh:'在最后时刻，他踢进了关键的一球。',py:'Zài zuìhòu shíkè, tā tījìnle guānjiàn de yì qiú.'}
];

// Chiều Trung → Việt — nội dung khác với chiều trên
var translateDataRev = [
  {vi:'Trác Phong và vợ đều là công nhân đường sắt, công việc ổn định, đãi ngộ khá tốt.',zh:'翟峰和妻子都是铁路工人，工作稳定、待遇不错。',py:'Zhái Fēng hé qīzi dōu shì tiělù gōngrén, gōngzuò wěndìng, dàiyù búcuò.'},
  {vi:'Họ có nhà có xe, chưa bao giờ phải lo chuyện sinh sống.',zh:'他们有房有车，从不用为生活发愁。',py:'Tāmen yǒu fáng yǒu chē, cóng bú yòng wèi shēnghuó fāchóu.'},
  {vi:'Vì không có tiền để dành, họ bán nhà bán xe, mua một chiếc thuyền cũ.',zh:'由于没有积蓄，他们卖房卖车，买下了一艘二手船。',py:'Yóuyú méiyǒu jīxù, tāmen mài fáng mài chē, mǎixiàle yì sōu èrshǒu chuán.'},
  {vi:'Kể cả bố mẹ Trác Phong, ai cũng cho rằng anh ấy điên rồi.',zh:'包括翟峰的父母，所有人都觉得他疯了。',py:'Bāokuò Zhái Fēng de fùmǔ, suǒyǒu rén dōu juéde tā fēng le.'},
  {vi:'Chạng vạng là lúc cả nhà thoải mái nhất.',zh:'傍晚是一家人最舒适的时候。',py:'Bàngwǎn shì yì jiā rén zuì shūshì de shíhou.'},
  {vi:'Cuộc sống như thế là điều Trác Phong mong mỏi đã lâu.',zh:'这样的生活，是翟峰盼望已久的。',py:'Zhèyàng de shēnghuó, shì Zhái Fēng pànwàng yǐ jiǔ de.'},
  {vi:'Họ sợ nhất những lúc sấm chớp đan xen.',zh:'他们最怕雷电交加的时刻。',py:'Tāmen zuì pà léidiàn jiāojiā de shíkè.'},
  {vi:'Đời người có lựa chọn, mọi thứ đều có thể đổi thay.',zh:'人生有选择，一切可改变。',py:'Rénshēng yǒu xuǎnzé, yíqiè kě gǎibiàn.'}
];

// ══════════════════════════════════════════
// VIẾT ĐOẠN 80 CHỮ — dạng đề thi HSK 5 phần viết (dựa trên 命题写作 của sách: 如果我是翟峰……)
// ══════════════════════════════════════════
var writingData = {
  words:['稳定','平静','盼望','包括','未来'],
  prompt:'Dùng 5 từ cho sẵn, viết một đoạn khoảng 80 chữ với đề "Nếu tôi là Trác Phong" — em có dám bỏ cuộc sống ổn định để đi thuyền khắp thế giới không?',
  outline:[
    'Câu mở: nêu lựa chọn của em — 会 hay 不会 làm như Trác Phong.',
    'Thân 1: cuộc sống hiện tại ổn định, yên ả ra sao (dùng 稳定, 平静).',
    'Thân 2: lý do — điều em mong mỏi và ý kiến của người xung quanh (dùng 盼望, 包括).',
    'Kết: điều em muốn cho tương lai của mình (dùng 未来).'
  ],
  model:{
    zh:'如果我是翟峰，我也会选择去航海。稳定的工作和平静的生活虽然很好，但是我不想一辈子都这样过。我从小就盼望能到世界各地去看看。当然，包括父母在内，很多人可能会觉得我疯了。可是我相信，人生有选择，一切可改变。只要努力，我一定能走向自己想要的未来。',
    py:'Rúguǒ wǒ shì Zhái Fēng, wǒ yě huì xuǎnzé qù hánghǎi. Wěndìng de gōngzuò hé píngjìng de shēnghuó suīrán hěn hǎo, dànshì wǒ bù xiǎng yíbèizi dōu zhèyàng guò. Wǒ cóng xiǎo jiù pànwàng néng dào shìjiè gè dì qù kànkan. Dāngrán, bāokuò fùmǔ zài nèi, hěn duō rén kěnéng huì juéde wǒ fēng le. Kěshì wǒ xiāngxìn, rénshēng yǒu xuǎnzé, yíqiè kě gǎibiàn. Zhǐyào nǔlì, wǒ yídìng néng zǒuxiàng zìjǐ xiǎng yào de wèilái.',
    vn:'Nếu tôi là Trác Phong, tôi cũng sẽ chọn đi biển. Công việc ổn định và cuộc sống yên ả tuy rất tốt, nhưng tôi không muốn cả đời cứ sống như vậy. Từ nhỏ tôi đã mong được đi khắp nơi trên thế giới. Tất nhiên, kể cả bố mẹ, nhiều người có thể sẽ nghĩ tôi điên rồi. Nhưng tôi tin rằng đời người có lựa chọn, mọi thứ đều có thể đổi thay. Chỉ cần cố gắng, tôi nhất định sẽ đi tới tương lai mà mình mong muốn.'
  },
  checklist:[
    'Đã dùng đủ cả 5 từ cho sẵn chưa?',
    'Đủ khoảng 80 chữ chưa (đếm ô vuông, không đếm dấu câu)?',
    'Có nêu rõ lựa chọn 会 / 不会 ngay câu đầu và có LÝ DO không?',
    'Có ít nhất một câu ghép (虽然…但是 / 只要…就 / 因为…所以) chưa?',
    'Mở đoạn lùi vào 2 ô, dấu câu chiếm một ô — đúng quy cách bài thi chưa?'
  ],

  // Đề đúng như câu 99 của đề thi (gửi kèm khi nhờ AI chấm)
  de:'请结合下列词语（要全部使用），写一篇80字左右的短文，题目是“如果我是翟峰”。',

  // Cách dùng đúng của 5 từ cho sẵn — máy soát lỗi dựa vào đây
  // (re: mẫu câu SAI hay gặp; viết dạng chuỗi RegExp)
  tuDung:[
    {tu:'稳定', loai:'tính từ', cach:'工作很稳定 · 一份稳定的工作 · 稳定的生活',
     sai:[{re:'一份工作(很)?稳定', sua:'一份稳定的工作', giai:'Lượng từ 份 phải đi liền cụm danh từ: 一份 + 稳定的 + 工作. Không nói 一份工作稳定.'},
          {re:'(很|非常|十分)稳定地', sua:'稳定地 + V / 很稳定', giai:'稳定 làm trạng ngữ thì không thêm 很 phía trước: 稳定地发展. Muốn khen thì để làm vị ngữ: 成绩很稳定.', nhe:true}]},
    {tu:'平静', loai:'tính từ', cach:'平静的生活 · 海面很平静 · 心情平静下来',
     sai:[{re:'平静地(处理|解决|思考|想|分析|判断)', sua:'冷静地……', giai:'Suy nghĩ, xử lý một cách tỉnh táo thì dùng 冷静; 平静 tả trạng thái YÊN Ả (mặt biển, cuộc sống, lòng người).'},
          {re:'平静一下', sua:'冷静一下', giai:'Khuyên ai "bình tĩnh lại" dùng 冷静一下; 平静 không dùng như động từ kiểu này.'}]},
    {tu:'盼望', loai:'động từ', cach:'盼望 + việc · 盼望着…… · ……是我盼望已久的',
     sai:[{re:'的盼望', sua:'的希望 / 的愿望', giai:'盼望 chủ yếu là ĐỘNG TỪ. Muốn dùng danh từ "niềm mong ước" thì dùng 希望 hoặc 愿望: 我的愿望.'},
          {re:'盼望(你|您|大家)(要|一定|必须)', sua:'希望你……', giai:'Dặn dò, yêu cầu người khác dùng 希望你……; 盼望 là mong mỏi điều mình chờ đợi.', nhe:true}]},
    {tu:'包括', loai:'động từ', cach:'A 包括 B 和 C · 包括……在内，大家都……',
     sai:[{re:'包括[^。，！？]*以内', sua:'包括……在内', giai:'Cụm cố định là 包括……在内 (kể cả …), không phải 以内.'},
          {re:'包括(一|两|二|三|四|五|六|七|八|九|十|\\d)+(个|口)?人(。|，|$)', sua:'有……人', giai:'Chỉ nói SỐ LƯỢNG thì dùng 有: 我家有四口人. 包括 dùng khi liệt kê các bộ phận.', nhe:true}]},
    {tu:'未来', loai:'danh từ', cach:'美好的未来 · 未来的生活 · 为未来努力',
     sai:[{re:'未来(?=我|你|他|她)', sua:'将来我……', giai:'Nói dự định của bản thân trong khẩu ngữ, người Trung hay dùng 将来 (将来我想当医生); 未来 thiên về văn viết, hay làm định ngữ: 未来的生活.', nhe:true},
          {re:'在未来里', sua:'在未来 / 将来', giai:'Không thêm 里 sau 未来: 在未来 hoặc 将来.'}]}
  ],

  // Cấu trúc của bài + cấu trúc HSK 4 nên dùng lại — gợi ý khi sửa bài
  cauTruc:[
    {ten:'如果……，我会 / 不会……', nhan:'如果', vd:'如果我是翟峰，我不会辞职。', khi:'Câu MỞ theo đúng đề bài giả định.'},
    {ten:'包括……在内，……都……', nhan:'包括', vd:'包括父母在内，很多人都觉得我疯了。', khi:'Nhấn mạnh một đối tượng nằm trong số đông.'},
    {ten:'为 + việc + 发愁', nhan:'发愁', vd:'有了稳定的工作，就不用为生活发愁了。', khi:'Nói về nỗi lo của ai đó.'},
    {ten:'……是 + Sub + 盼望已久的', nhan:'盼望已久', vd:'这样的生活是我盼望已久的。', khi:'Nhấn mạnh điều mong đợi từ lâu — câu cao trào.'},
    {ten:'虽然……，但是……', nhan:'虽然', vd:'稳定的生活虽然很好，但是我想试试别的。', khi:'Nêu mặt tốt rồi chuyển ý.'},
    {ten:'随时 + 可以 / 有可能 + V', nhan:'随时', vd:'在海上，危险随时有可能出现。', khi:'Nói về rủi ro hoặc sự sẵn sàng.'},
    {ten:'只要……，就……', nhan:'只要', vd:'只要努力，就能走向想要的未来。', khi:'Câu KẾT — nêu niềm tin.'}
  ],

  // 书写 第一部分 · 完成句子 — xếp các mảnh thành câu (3 câu đầu là câu 29–31 sách bài tập)
  sapXep:[
    {manh:['可以','我','开始干活儿','随时'],
     dap:'我随时可以开始干活儿。', chap:['我可以随时开始干活儿。'],
     vn:'Tôi có thể bắt đầu làm việc bất cứ lúc nào.',
     giai:'随时 là phó từ, đứng trước 可以 (hoặc ngay trước động từ: 可以随时开始). Chủ ngữ 我 đứng đầu.'},
    {manh:['待遇稳定','我对','就是','新工作的要求'],
     dap:'我对新工作的要求就是待遇稳定。',
     vn:'Yêu cầu của tôi với công việc mới chính là đãi ngộ ổn định.',
     giai:'对 + đối tượng + 的 + 要求 làm chủ ngữ; 就是 nối với vị ngữ 待遇稳定.'},
    {manh:['让他','一种平静','雨后的彩虹','感受到'],
     dap:'雨后的彩虹让他感受到一种平静。',
     vn:'Cầu vồng sau mưa khiến anh ấy cảm nhận được một sự bình yên.',
     giai:'Câu kiêm ngữ (HSK 3–4): A + 让 + B + V. 感受到 (bài 2) + tân ngữ 一种平静.'},
    {manh:['各自的','一家人','在','房间里','休息'],
     dap:'一家人在各自的房间里休息。',
     vn:'Cả nhà ai ở phòng nấy nghỉ ngơi.',
     giai:'Chủ ngữ + 在 + nơi chốn + V. 各自的 làm định ngữ cho 房间.'},
    {manh:['挂着','门上','一块','“请勿吸烟”的牌子'],
     dap:'门上挂着一块“请勿吸烟”的牌子。',
     vn:'Trên cửa treo một tấm biển "Xin đừng hút thuốc".',
     giai:'Câu tồn tại (HSK 3–4): nơi chốn + V + 着 + số lượng + sự vật.'},
    {manh:['轮流','夫妻俩','驾驶','白天','帆船'],
     dap:'白天夫妻俩轮流驾驶帆船。', chap:['夫妻俩白天轮流驾驶帆船。'],
     vn:'Ban ngày hai vợ chồng thay phiên nhau lái thuyền buồm.',
     giai:'Thời gian 白天 đứng đầu câu hoặc sau chủ ngữ; 轮流 đứng ngay trước động từ 驾驶.'}
  ]
};

// ══════════════════════════════════════════
// LUYỆN NÓI — theo 话题讨论 của sách: 爱好与工作、家庭、生活的关系
// ══════════════════════════════════════════
var speakingData = {
  intro:'Bốn câu hỏi mở về chủ đề của bài. Bấm nút loa nghe câu hỏi, rồi <b>tự ghi âm câu trả lời của mình trước</b> — đừng đọc theo câu mẫu. Cố gắng dùng được từ mới của bài: 稳定 · 平静 · 盼望 · 轮流 · 随时 · 包括 · 未来.',
  questions:[
    {q_zh:'你有什么爱好吗？它给你的生活带来了什么好处？',
     q_vn:'Em có sở thích gì không? Nó mang lại lợi ích gì cho cuộc sống của em?',
     hint:'Nêu sở thích + 1–2 lợi ích cụ thể',
     sample:'我的爱好是画画儿。每次画画儿的时候，我的心情都会变得很平静，学习的压力也小多了。',
     sample_vn:'Sở thích của tôi là vẽ tranh. Mỗi lần vẽ, lòng tôi trở nên rất bình yên, áp lực học tập cũng nhẹ đi nhiều.',
     note:'Câu hỏi này rất hay gặp ở phần thi nói HSKK — nên tập nói thành một đoạn 3–4 câu.'},
    {q_zh:'你觉得应该怎么处理爱好和学习、家庭、生活的关系？',
     q_vn:'Em thấy nên cân bằng sở thích với học tập, gia đình, cuộc sống như thế nào?',
     hint:'Nêu nguyên tắc + ví dụ, dùng 只要……就……',
     sample:'我觉得爱好不能影响学习。比如我每天先做完作业再打篮球，只要安排好时间，就不会有问题。',
     sample_vn:'Tôi thấy sở thích không được ảnh hưởng việc học. Ví dụ ngày nào tôi cũng làm xong bài tập rồi mới chơi bóng rổ, chỉ cần sắp xếp thời gian hợp lý thì sẽ không có vấn đề gì.',
     note:'Đề sách yêu cầu 举例说明 — phải có VÍ DỤ, nói chung chung là mất điểm.'},
    {q_zh:'如果你的爱好影响了你的正常生活，你会怎么办？',
     q_vn:'Nếu sở thích ảnh hưởng đến cuộc sống bình thường của em, em sẽ làm gì?',
     hint:'Dùng 如果……就…… + nêu cách giải quyết',
     sample:'如果我的爱好影响了学习，我就会先少玩一些，等放假的时候再好好儿玩。',
     sample_vn:'Nếu sở thích ảnh hưởng việc học, tôi sẽ tạm chơi ít đi, đợi đến kỳ nghỉ rồi chơi cho thoả.',
     note:'Câu giả định: vế sau nên có 就 / 会 để nói rõ hành động của mình.'},
    {q_zh:'你怎么看翟峰辞职去航海这件事？',
     q_vn:'Em nghĩ sao về việc Trác Phong nghỉ việc để đi biển?',
     hint:'Nêu ý kiến rõ ràng + lý do, dùng 虽然……但是……',
     sample:'我很佩服他。虽然航海随时有危险，但是他敢为自己盼望已久的生活做出选择。',
     sample_vn:'Tôi rất khâm phục anh ấy. Tuy đi biển lúc nào cũng có thể gặp nguy hiểm, nhưng anh ấy dám lựa chọn vì cuộc sống mình mong mỏi từ lâu.',
     note:'Câu hỏi 你怎么看 bắt buộc NÊU Ý KIẾN rồi bảo vệ — đừng trả lời "cũng được".'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🎧 NGHE THEO DẠNG ĐỀ HSK 5 — 听力 第一/第二部分
// Nguyên văn hội thoại lấy từ sách bài tập 《HSK标准教程5上·练习册》bài 3.
// Bốn lựa chọn do soạn lại cho khớp nguyên văn (sách chỉ in chữ cái đáp án).
// ══════════════════════════════════════════════════════════════
var listenExamData = {
  intro: 'Đề HSK 5 phần nghe chỉ phát <b>một lượt</b>. Vì vậy ở đây cũng vậy: bấm nút loa nghe, ' +
         'trả lời ngay, rồi mới mở nguyên văn ra đối chiếu. Đừng mở nguyên văn trước — mở trước là mất tác dụng.',
  source: 'Nguyên văn: 《HSK标准教程5·练习册》第3课 听力',
  items: [
    {n:1,
     lines:[{sp:'女',zh:'请问您还有再次出航的计划吗？'},
            {sp:'男',zh:'一切只是开始。等到北风南下之时，我们将再次出发。'}],
     q:'男的是什么意思？',qvn:'Ý người đàn ông là gì?',
     opts:['不想再出海了','要等到明年春天','还会再次出发','要换一艘新船'],ans:2,
     why:'一切只是开始 + 我们将再次出发 = họ sẽ còn lên đường lần nữa. Đây chính là câu kết của bài đọc. 北风南下之时 là thời điểm, không phải "mùa xuân năm sau".',
     words:[]},

    {n:2,
     lines:[{sp:'男',zh:'老婆，今晚在家吃饭还是出去吃？'},
            {sp:'女',zh:'你今天下午不是钓回来好几条鱼吗？晚饭就吃鱼吧。'}],
     q:'他们的鱼是怎么来的？',qvn:'Cá của họ có từ đâu?',
     opts:['在市场买的','男的钓的','朋友送的','饭店做的'],ans:1,
     why:'你……不是钓回来好几条鱼吗？ — câu hỏi phản vấn 不是……吗 để KHẲNG ĐỊNH: chính anh đã câu về mấy con cá.',
     words:['钓']},

    {n:3,
     lines:[{sp:'女',zh:'你今天不是要去出差吗？怎么还在这儿？'},
            {sp:'男',zh:'有大雾，航班取消了。'}],
     q:'今天是什么天气？',qvn:'Hôm nay thời tiết thế nào?',
     opts:['下大雨','打雷闪电','刮大风','有大雾'],ans:3,
     why:'有大雾 = có sương mù dày. 雾 (wù) là từ trong bảng 扩展 chủ đề 天气 của bài. Các phương án còn lại đều là thời tiết xấu nhưng không được nhắc đến.',
     words:[]},

    {n:4,
     lines:[{sp:'男',zh:'外面又打雷又闪电的，咱们等会儿再走吧。'},
            {sp:'女',zh:'行，正好我手头还有事没弄完，再加会儿班。'}],
     q:'男的为什么现在不走？',qvn:'Vì sao người đàn ông chưa đi?',
     opts:['外面打雷闪电','手头还有事','要等女的','没有带伞'],ans:0,
     why:'Người đàn ông nói rõ lý do: 又打雷又闪电. 手头还有事 là lý do của NGƯỜI PHỤ NỮ — bẫy đổi vai rất hay gặp.',
     words:['雷','闪电']},

    {n:5,
     lines:[{sp:'女',zh:'听说你母亲被车撞了？你怎么还能这么平静？'},
            {sp:'男',zh:'我已经给她打过电话了，只是被自行车蹭了一下，没受伤，不要紧。'}],
     q:'关于男的的母亲，下列哪项正确？',qvn:'Về mẹ của người đàn ông, câu nào đúng?',
     opts:['被汽车撞了','住院了','受了重伤','没受伤'],ans:3,
     why:'只是被自行车蹭了一下，没受伤 — chỉ bị xe đạp quẹt nhẹ, không bị thương. 被车撞了 chỉ là tin đồn người phụ nữ nghe được.',
     words:['撞','平静']},

    {n:6,
     lines:[{sp:'男',zh:'您和先生的事业都这么成功，工作应该都很忙，那你们平时怎么处理工作与生活的关系？'},
            {sp:'女',zh:'我们都认为不能因为工作影响生活，比如我们会轮流做家务。'}],
     q:'他们家怎么安排家务？',qvn:'Nhà họ sắp xếp việc nhà thế nào?',
     opts:['请人来做','妻子一个人做','夫妻轮流做','丈夫一个人做'],ans:2,
     why:'我们会轮流做家务 — hai vợ chồng thay phiên nhau. 轮流 là từ mới của bài.',
     words:['轮流']},

    {n:7,
     lines:[{sp:'女',zh:'你疯了吗？为什么突然要辞职？'},
            {sp:'男',zh:'不是突然，这个问题我已经考虑了很久了。'},
            {sp:'女',zh:'你工作不错，待遇稳定，有什么不满意的？'},
            {sp:'男',zh:'我就是想去看看，这个时代、这个世界到底是什么样子。'}],
     q:'对于男的辞职，女的是什么态度？',qvn:'Người phụ nữ có thái độ thế nào với việc người đàn ông nghỉ việc?',
     opts:['支持','不理解','无所谓','羡慕'],ans:1,
     why:'你疯了吗？ + 有什么不满意的？ — hai câu hỏi dồn dập cho thấy cô KHÔNG HIỂU vì sao anh lại nghỉ. Dạng hỏi 态度 phải nghe giọng điệu.',
     words:['疯','辞职','待遇','稳定','时代']},

    {n:8,
     lines:[{sp:'男',zh:'那天同学聚会你怎么没去？是没人通知你吗？'},
            {sp:'女',zh:'不是，我知道，但那天正好有事。'},
            {sp:'男',zh:'周末也有事？忙什么呢？'},
            {sp:'女',zh:'我要考英语专业八级，报了个辅导班，周末要上课。'}],
     q:'女的为什么没参加聚会？',qvn:'Vì sao người phụ nữ không đi họp lớp?',
     opts:['没人通知她','她不想去','她生病了','她要上辅导班'],ans:3,
     why:'报了个辅导班，周末要上课 — cô đăng ký lớp phụ đạo, cuối tuần phải đi học. 没人通知 đã bị phủ định bằng 不是.',
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
    {scene:'Bạn hỏi em sau này muốn làm công việc thế nào.',
     a:{sp:'Bạn',zh:'你以后想找什么样的工作？',vn:'Sau này cậu muốn tìm công việc thế nào?'},
     need:['Dùng 稳定 hoặc 待遇','Nêu rõ lý do'],
     sample:'我想先找一份稳定的工作，待遇好一点儿，这样父母就不用为我发愁了。',
     samplePy:'Wǒ xiǎng xiān zhǎo yí fèn wěndìng de gōngzuò, dàiyù hǎo yìdiǎnr, zhèyàng fùmǔ jiù búyòng wèi wǒ fāchóu le.',
     sampleVn:'Tôi muốn tìm một công việc ổn định trước, đãi ngộ tốt một chút, như vậy bố mẹ không phải lo cho tôi nữa.',
     tip:'Lượng từ của 工作 là 份: 一份稳定的工作. Đừng viết 一份工作稳定.'},

    {scene:'Bạn rủ em cuối tuần đi xem phim, nhưng em phải ôn thi.',
     a:{sp:'Bạn',zh:'周末一起去看电影吧？',vn:'Cuối tuần đi xem phim cùng nhé?'},
     need:['Từ chối khéo','Dùng 随时'],
     sample:'这个周末我要复习，考完试以后你随时可以找我。',
     samplePy:'Zhège zhōumò wǒ yào fùxí, kǎowán shì yǐhòu nǐ suíshí kěyǐ zhǎo wǒ.',
     sampleVn:'Cuối tuần này tớ phải ôn bài, thi xong cậu cứ tìm tớ lúc nào cũng được.',
     tip:'随时 đứng trước 可以 hoặc ngay trước động từ. Từ chối mà có hẹn lại thì bạn không phật lòng.'},

    {scene:'Mẹ hỏi cuối tuần ai dọn nhà.',
     a:{sp:'Mẹ',zh:'这个周末谁来打扫房间？',vn:'Cuối tuần này ai dọn phòng đây?'},
     need:['Dùng 轮流'],
     sample:'我和妹妹轮流打扫吧，这周我来，下周她来。',
     samplePy:'Wǒ hé mèimei lúnliú dǎsǎo ba, zhè zhōu wǒ lái, xià zhōu tā lái.',
     sampleVn:'Con với em thay phiên nhau dọn nhé, tuần này con, tuần sau em.',
     tip:'轮流 cần chủ ngữ từ HAI người trở lên. Không nói 我轮流打扫.'},

    {scene:'Bạn kể chuyện Trác Phong bán nhà mua thuyền đi biển.',
     a:{sp:'Bạn',zh:'翟峰卖房卖车去航海，你觉得他疯了吗？',vn:'Trác Phong bán nhà bán xe để đi biển, cậu thấy anh ấy có điên không?'},
     need:['Dùng 包括 hoặc 盼望','Nêu rõ ý kiến của mình'],
     sample:'我不觉得他疯了。包括我在内，很多人都盼望过这样的生活，只是没有勇气。',
     samplePy:'Wǒ bù juéde tā fēng le. Bāokuò wǒ zài nèi, hěn duō rén dōu pànwàngguo zhèyàng de shēnghuó, zhǐ shì méiyǒu yǒngqì.',
     sampleVn:'Tớ không thấy anh ấy điên. Kể cả tớ, nhiều người đều từng mong một cuộc sống như vậy, chỉ là không đủ can đảm.',
     tip:'包括……在内 (không phải 以内). Câu hỏi có/không vẫn phải kèm LÝ DO.'},

    {scene:'Ở thư viện, em thấy một người định châm thuốc ngay dưới biển cấm.',
     a:{sp:'Người lạ',zh:'我就抽一支，没关系吧？',vn:'Tôi hút một điếu thôi, không sao chứ?'},
     need:['Nhắc đến tấm biển có chữ 勿','Khuyên lịch sự, có lý do'],
     sample:'不好意思，这里挂着“请勿吸烟”的牌子。最近天气干燥，很容易着火，您还是别抽了吧。',
     samplePy:'Bù hǎoyìsi, zhèli guàzhe "qǐng wù xīyān" de páizi. Zuìjìn tiānqì gānzào, hěn róngyì zháohuǒ, nín háishi bié chōu le ba.',
     sampleVn:'Xin lỗi, ở đây có treo biển "Cấm hút thuốc". Dạo này trời hanh khô, rất dễ cháy, anh/chị đừng hút thì hơn.',
     tip:'勿 chỉ dùng trên biển báo. Khi nói trực tiếp với người khác thì dùng 别 / 不要 + 不好意思 cho lịch sự.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🎯 NÓI SAO CHO HAY — 得体 / 语体 (đặc trưng riêng của HSK 5)
// ══════════════════════════════════════════════════════════════
var registerData = {
  intro: 'Ở đây <b>cả hai câu đều đúng ngữ pháp</b> — không có câu sai. Việc của em là chọn câu <b>PHÙ HỢP HƠN</b> với hoàn cảnh. ' +
         'Đây chính là chỗ HSK 5 khác hẳn HSK 3–4: không còn là đúng/sai, mà là hay/dở.',
  items: [
    {scene:'Em viết thông báo dán ở cửa thư viện.',
     a:'馆内请勿大声喧哗。',b:'别在这儿大声说话啊！',better:'a',
     why:'Thông báo, biển báo là VĂN VIẾT: 请勿 ngắn gọn, trang trọng. Câu b là lời nói miệng, dán lên tường nghe rất suồng sã.'},

    {scene:'Em nhắc bạn cùng phòng ký túc xá.',
     a:'请勿在宿舍吸烟。',b:'别在宿舍抽烟了，对身体不好。',better:'b',
     why:'Nói trực tiếp với bạn thân mà dùng 请勿 thì như đang đọc biển báo, rất xa cách. Khẩu ngữ dùng 别, thêm lý do cho mềm mỏng.'},

    {scene:'Em viết bài giới thiệu khách sạn cho trang web du lịch.',
     a:'房间干净舒适，交通方便。',b:'房间挺舒服的，去哪儿都方便。',better:'a',
     why:'Văn bản giới thiệu là văn viết: 舒适 + câu bốn chữ gọn gàng. 挺舒服的 là giọng nói chuyện.'},

    {scene:'Tắm nước nóng xong, em nhắn tin cho mẹ.',
     a:'洗了个热水澡，真舒适！',b:'洗了个热水澡，真舒服！',better:'b',
     why:'Cảm giác CỤ THỂ của cơ thể, lại là tin nhắn thân mật → 舒服. 舒适 dùng ở đây nghe như văn quảng cáo.'},

    {scene:'Em giới thiệu vợ mình với khách hàng trong bữa tiệc.',
     a:'这是我太太。',b:'这是我老婆。',better:'a',
     why:'Trước khách hàng dùng 太太 (lịch sự). 老婆 là cách gọi thân mật trong nhà (bài 1) — không hợp hoàn cảnh này.'},

    {scene:'Em viết đơn xin nghỉ việc gửi công ty.',
     a:'我不想干了，明天不来了。',b:'因个人原因，我决定辞去现在的工作。',better:'b',
     why:'Đơn từ là văn bản chính thức: 因个人原因 + 辞去工作. Câu a đúng ngữ pháp nhưng cộc lốc, 干 là khẩu ngữ.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🗣️ KỂ LẠI BÀI ĐỌC 复述 (Cấp 3 · 交际性练习)
// Bài tập 4 của sách: 根据下面的提示词复述课文内容
// ══════════════════════════════════════════════════════════════
var retellData = {
  intro: 'Đây là bài tập 4 trong giáo trình: <b>根据下面的提示词复述课文内容</b> — kể lại bài đọc bằng lời của chính em, ' +
         'KHÔNG đọc thuộc lòng. Nhìn dàn ý và các từ khoá bên dưới, bấm ghi âm rồi kể một mạch khoảng 1–2 phút.',
  outline: [
    {step:'Mở', cue:'翟峰和妻子都是……，工作……', words:['翟峰','工人','稳定','待遇','发愁']},
    {step:'Sở thích', cue:'翟峰不想过……的生活，通过电视……', words:['人生','平静','帆船','撞','艘','航行']},
    {step:'Chuẩn bị', cue:'由于没有……，他们卖房卖车……', words:['积蓄','二手','彩虹','包括','疯']},
    {step:'Trên biển', cue:'白天…… 傍晚……', words:['辞职','驾驶','轮流','钓','顿','海鲜','傍晚','舒适','干活儿','盼望','陆地','各自']},
    {step:'Hiểm nguy', cue:'可上山，勿下海…… 他们最怕……', words:['勿','时刻','着火','漏','雷','随时','闪电','击','拥抱']},
    {step:'Kết', cue:'航行了4000多海里之后…… 下一站……', words:['海里','台阶','未来','太太','时代','澳洲','新西兰']}
  ],
  checklist: [
    'Kể đủ sáu ý trên chưa, hay bỏ mất phần chuẩn bị / hiểm nguy?',
    'Có dùng được ít nhất 12 từ mới của bài không?',
    'Có dùng 包括……所有人都…… và 是……盼望已久的 đúng chỗ không?',
    'Nói liền mạch khoảng 1–2 phút, hay còn ngắt quãng nhiều?',
    'Có kể bằng LỜI MÌNH, hay đang đọc thuộc nguyên văn?'
  ]
};

// ══════════════════════════════════════════
// SGK · 练习 (Bài tập trong sách, trang 34) — trò "Bài tập SGK" ở bước Luyện tập
// (Bài 3 画线连接 đã đưa vào phần Ghép từ; bài 4 复述 là phần Kể lại)
// ══════════════════════════════════════════
var sgkData = [
  {kieu:'kho', de:'选择合适的词语填空', vn:'Chọn từ thích hợp điền vào chỗ trống', tu:['漏','随时','辞职','待遇','稳定','发愁'],
   cau:[
     {s:'由于在个人＿＿上没谈好，他最后拒绝了这家公司的邀请。', dap:['待遇']},
     {s:'现在，让许多工厂老板＿＿的是有经验的技术工人很难找。', dap:['发愁']},
     {s:'丽丽到家才发现刚买的酸奶中有一袋是＿＿的。', dap:['漏']},
     {s:'好的，您决定了以后，＿＿都可以给我们打电话。', dap:['随时']},
     {s:'公司已经接受了他的＿＿请求。', dap:['辞职']},
     {s:'张老师认为王力的成绩一直都很＿＿，这次考试应该不会有什么问题。', dap:['稳定']}
   ]},
  {kieu:'ab', de:'选择正确答案', vn:'Chọn đáp án đúng',
   cau:[
     {s:'听到这个好消息后，我激动的心情久久不能＿＿。', opts:['冷静','平静'], ans:1, giai:'Tâm trạng xúc động mãi không LẮNG XUỐNG → 平静. 冷静 là "tỉnh táo" khi suy nghĩ, xử lý việc.'},
     {s:'王奶奶说她每天都会锻炼锻炼，身体好了，自己＿＿，也不给儿女添麻烦。', opts:['舒适','舒服'], ans:1, giai:'Cảm giác cụ thể của cơ thể, khẩu ngữ → 舒服. 舒适 tả cảm giác chung của môi trường.'},
     {s:'现在，父母、妻子和孩子都＿＿着他早日学成回国。', opts:['盼望','希望'], ans:0, giai:'Mong mỏi tha thiết, chờ đợi lâu, có 着 → 盼望着. 希望 mức độ nhẹ và hiếm khi đi với 着.'},
     {s:'21世纪是一个信息＿＿、互联网的＿＿。', opts:['时代','时刻'], ans:0, giai:'Cả hai chỗ trống đều là một giai đoạn lịch sử dài → 时代. 时刻 chỉ một thời điểm ngắn.'}
   ]}
];
