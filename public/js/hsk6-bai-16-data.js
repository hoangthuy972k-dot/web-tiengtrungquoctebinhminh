// ══════════════════════════════════════════
// DATA — HSK6 Bài 16: 徐健和他的野生动物摄影师们 (Từ Kiện và các nhà nhiếp ảnh động vật hoang dã)
// 第四单元 走遍天下 · Nguồn: HSK标准教程6上 (tr. 167–176) + đáp án sách
// Bài khoá: 徐健和他的野生动物摄影师们 (898字) · 45 từ mới
// ══════════════════════════════════════════

var vocabData = [
  {n:1,zh:'野生',py:'yěshēng',pos:'Tính từ',vn:'hoang dã, hoang dại',hv:'dã sinh',em:'🐆',lesson:1,
   explain:['Sống, mọc tự nhiên ngoài thiên nhiên, không do con người nuôi trồng.','Thường làm định ngữ: 野生动物, 野生植物, 野生物种; trái nghĩa với 人工饲养 / 家养.'],
   usage:'野生 + 动物 / 植物 / 物种 / 资源; 野生的 + N. Hầu như không làm vị ngữ độc lập (không nói 这只老虎很野生).',
   collo:['野生动物','野生植物','野生物种','保护野生动物'],
   ex_zh:'这些摄影师致力于保护野生物种。',ex_py:'Zhèxiē shèyǐngshī zhìlì yú bǎohù yěshēng wùzhǒng.',ex_vn:'Những nhiếp ảnh gia này dốc sức bảo vệ các loài hoang dã.',
   exList:[
     {zh:'这些摄影师致力于保护野生物种，记录中国生物的多样性。',py:'Zhèxiē shèyǐngshī zhìlì yú bǎohù yěshēng wùzhǒng, jìlù Zhōngguó shēngwù de duōyàngxìng.',vn:'Những nhiếp ảnh gia này dốc sức bảo vệ các loài hoang dã, ghi lại sự đa dạng sinh học của Trung Quốc.'},
     {zh:'野生动物不是宠物，我们不应该随意饲养。',py:'Yěshēng dòngwù bú shì chǒngwù, wǒmen bù yīnggāi suíyì sìyǎng.',vn:'Động vật hoang dã không phải thú cưng, chúng ta không nên tuỳ tiện nuôi.'},
     {zh:'云南的森林里生长着很多珍贵的野生植物。',py:'Yúnnán de sēnlín li shēngzhǎngzhe hěn duō zhēnguì de yěshēng zhíwù.',vn:'Trong rừng ở Vân Nam mọc rất nhiều loài thực vật hoang dã quý hiếm.'}
   ],
   colloFull:[
     {zh:'野生动物',py:'yěshēng dòngwù',vn:'động vật hoang dã'},
     {zh:'野生植物',py:'yěshēng zhíwù',vn:'thực vật hoang dã'},
     {zh:'野生物种',py:'yěshēng wùzhǒng',vn:'loài hoang dã'},
     {zh:'保护野生动物',py:'bǎohù yěshēng dòngwù',vn:'bảo vệ động vật hoang dã'},
     {zh:'野生资源',py:'yěshēng zīyuán',vn:'tài nguyên hoang dã'}
   ],
   patterns:[
     {s:'野生 + 动物 / 植物 / 物种',m:'… hoang dã (làm định ngữ)'},
     {s:'致力于保护 + 野生……',m:'Dốc sức bảo vệ … hoang dã'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chúng ta không những không nên săn bắt động vật hoang dã, mà còn phải bảo vệ môi trường sống của chúng.',answer:'我们不但不应该捕杀野生动物，而且还要保护它们的生存环境。',answerPy:'Wǒmen búdàn bù yīnggāi bǔshā yěshēng dòngwù, érqiě hái yào bǎohù tāmen de shēngcún huánjìng.',
      note:'不但不……而且还……: không những không … mà còn … (tăng tiến).',pair:'不但……而且……'},
     {promptLang:'vi',prompt:'Những loài động vật hoang dã này sở dĩ ngày càng ít là vì con người đã phá huỷ môi trường sống của chúng.',answer:'这些野生动物之所以越来越少，是因为人类破坏了它们的生存环境。',answerPy:'Zhèxiē yěshēng dòngwù zhīsuǒyǐ yuè lái yuè shǎo, shì yīnwèi rénlèi pòhuàile tāmen de shēngcún huánjìng.',
      note:'之所以……是因为……: sở dĩ … là vì … (nêu kết quả trước, nguyên nhân sau).',pair:'之所以……是因为……'}
   ]},

  {n:2,zh:'压抑',py:'yāyì',pos:'Động từ',vn:'kìm nén, đè nén; (tâm trạng) nặng nề',hv:'áp ức',em:'😤',lesson:1,
   explain:['Kìm nén tình cảm, sức lực… không cho bộc lộ ra ngoài.','Còn làm tính từ: (bầu không khí, tâm trạng) nặng nề, ngột ngạt — 心情很压抑, 气氛压抑.'],
   usage:'压抑 + 感情 / 兴奋 / 怒火; 压抑住 / 压抑不住 + N; làm tính từ: 心里很压抑, 压抑的气氛.',
   collo:['压抑住兴奋','压抑感情','心情压抑','压抑的气氛'],
   ex_zh:'摄影师们压抑住兴奋，全力拍摄雪豹。',ex_py:'Shèyǐngshīmen yāyì zhù xīngfèn, quánlì pāishè xuěbào.',ex_vn:'Các nhiếp ảnh gia kìm nén sự phấn khích, dốc toàn lực chụp báo tuyết.',
   exList:[
     {zh:'野生动植物摄影师们压抑住兴奋，憋住气，全力拍摄雪豹。',py:'Yěshēng dòng-zhíwù shèyǐngshīmen yāyì zhù xīngfèn, biēzhù qì, quánlì pāishè xuěbào.',vn:'Các nhiếp ảnh gia động thực vật hoang dã kìm nén sự phấn khích, nín thở, dốc toàn lực chụp báo tuyết.'},
     {zh:'听到这个好消息，她压抑不住内心的喜悦，高兴得跳了起来。',py:'Tīngdào zhège hǎo xiāoxi, tā yāyì bú zhù nèixīn de xǐyuè, gāoxìng de tiàole qǐlái.',vn:'Nghe tin vui này, cô ấy không kìm được niềm vui trong lòng, sướng đến nhảy cẫng lên.'},
     {zh:'考试前的教室里气氛有些压抑，谁也不说话。',py:'Kǎoshì qián de jiàoshì li qìfēn yǒuxiē yāyì, shéi yě bù shuōhuà.',vn:'Trước giờ thi, bầu không khí trong lớp hơi ngột ngạt, chẳng ai nói câu nào.'}
   ],
   colloFull:[
     {zh:'压抑住兴奋',py:'yāyì zhù xīngfèn',vn:'kìm nén sự phấn khích'},
     {zh:'压抑感情',py:'yāyì gǎnqíng',vn:'kìm nén tình cảm'},
     {zh:'心情压抑',py:'xīnqíng yāyì',vn:'tâm trạng nặng nề'},
     {zh:'压抑的气氛',py:'yāyì de qìfēn',vn:'bầu không khí ngột ngạt'},
     {zh:'压抑不住',py:'yāyì bú zhù',vn:'không kìm nén nổi'}
   ],
   patterns:[
     {s:'压抑住 / 压抑不住 + 感情 / 兴奋 / 怒火',m:'Kìm nén được / không kìm nén nổi …'},
     {s:'心情 / 气氛 + 很压抑',m:'Tâm trạng / bầu không khí nặng nề, ngột ngạt'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đừng lúc nào cũng kìm nén cảm xúc của mình, có chuyện gì thì cứ nói ra.',answer:'别总是压抑自己的感情，有什么事就说出来吧。',answerPy:'Bié zǒngshì yāyì zìjǐ de gǎnqíng, yǒu shénme shì jiù shuō chūlái ba.',
      note:'有什么……就……: có gì thì cứ … (khuyên nhủ).',pair:'有什么……就……'},
     {promptLang:'vi',prompt:'Biết tin mình đỗ đại học, cậu ấy không kìm được niềm vui, nước mắt lưng tròng.',answer:'得知自己考上了大学，他压抑不住内心的喜悦，热泪盈眶。',answerPy:'Dézhī zìjǐ kǎoshàngle dàxué, tā yāyì bú zhù nèixīn de xǐyuè, rèlèi yíngkuàng.',
      note:'V + 不住: bổ ngữ khả năng (không giữ nổi); 热泪盈眶 ôn bài 2, 喜悦 ôn bài 3.',pair:'V + 不住'}
   ]},

  {n:3,zh:'完毕',py:'wánbì',pos:'Động từ',vn:'hoàn tất, xong',hv:'hoàn tất',em:'✅',lesson:1,
   explain:['Xong, kết thúc (một việc) — sắc thái văn viết, trang trọng hơn 完 / 结束.','Thường đứng sau động từ hai âm tiết: 拍摄完毕, 处理完毕, 准备完毕; hoặc làm vị ngữ: 工作已经完毕.'],
   usage:'V (hai âm tiết) + 完毕; ……已(经)完毕; 完毕后 / 完毕以后. Không mang tân ngữ.',
   collo:['拍摄完毕','处理完毕','准备完毕','检查完毕'],
   ex_zh:'拍摄完毕，一回头，发现两只雪豹正注视着自己。',ex_py:'Pāishè wánbì, yì huítóu, fāxiàn liǎng zhī xuěbào zhèng zhùshìzhe zìjǐ.',ex_vn:'Chụp xong, vừa quay đầu lại thì thấy hai con báo tuyết đang nhìn chằm chằm vào mình.',
   exList:[
     {zh:'拍摄完毕，一回头，发现两只藏在山头的雪豹正瞪着眼睛注视着自己。',py:'Pāishè wánbì, yì huítóu, fāxiàn liǎng zhī cáng zài shāntóu de xuěbào zhèng dèngzhe yǎnjing zhùshìzhe zìjǐ.',vn:'Chụp xong, vừa quay đầu lại thì phát hiện hai con báo tuyết nấp trên đỉnh núi đang trố mắt nhìn chằm chằm vào mình.'},
     {zh:'一天的工作处理完毕，她终于可以休息一下了。',py:'Yì tiān de gōngzuò chǔlǐ wánbì, tā zhōngyú kěyǐ xiūxi yíxià le.',vn:'Công việc cả ngày đã xử lý xong, cuối cùng cô ấy cũng được nghỉ ngơi một chút.'},
     {zh:'各位旅客请注意，行李检查完毕后请到三号口登机。',py:'Gèwèi lǚkè qǐng zhùyì, xíngli jiǎnchá wánbì hòu qǐng dào sān hào kǒu dēngjī.',vn:'Quý khách chú ý, sau khi kiểm tra hành lý xong xin mời đến cửa số 3 lên máy bay.'}
   ],
   colloFull:[
     {zh:'拍摄完毕',py:'pāishè wánbì',vn:'chụp xong'},
     {zh:'处理完毕',py:'chǔlǐ wánbì',vn:'xử lý xong'},
     {zh:'准备完毕',py:'zhǔnbèi wánbì',vn:'chuẩn bị xong xuôi'},
     {zh:'检查完毕',py:'jiǎnchá wánbì',vn:'kiểm tra xong'},
     {zh:'完毕以后',py:'wánbì yǐhòu',vn:'sau khi xong'}
   ],
   patterns:[
     {s:'V (hai âm tiết) + 完毕',m:'Làm xong … (văn viết)'},
     {s:'……完毕后，(再)……',m:'Sau khi … xong thì …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Sau khi mọi công tác chuẩn bị xong xuôi, chúng ta mới có thể xuất phát.',answer:'所有准备工作完毕以后，我们才能出发。',answerPy:'Suǒyǒu zhǔnbèi gōngzuò wánbì yǐhòu, wǒmen cái néng chūfā.',
      note:'……以后，才……: sau khi … mới … (điều kiện thời gian).',pair:'……以后，才……'},
     {promptLang:'vi',prompt:'Làm bài xong thì phải kiểm tra lại một lượt, kẻo mất điểm oan.',answer:'答题完毕以后要再检查一遍，免得白白丢分。',answerPy:'Dátí wánbì yǐhòu yào zài jiǎnchá yí biàn, miǎnde báibái diū fēn.',
      note:'免得 = kẻo, để khỏi (vế sau nêu điều không mong muốn).',pair:'免得'}
   ]},

  {n:4,zh:'瞪',py:'dèng',pos:'Động từ',vn:'trợn mắt, trừng mắt, trố mắt',hv:'trừng',em:'😳',lesson:1,
   explain:['Mở to mắt nhìn, trố mắt (vì ngạc nhiên, chăm chú).','Còn nghĩa trừng mắt, lườm để tỏ ý không hài lòng, tức giận: 瞪了他一眼.'],
   usage:'瞪 + 眼睛 / 大眼睛; 瞪着眼睛 + V; 瞪 + người + 一眼 (lườm); 眼睛瞪得 + 大大的 / 圆圆的.',
   collo:['瞪着眼睛','瞪大眼睛','瞪了他一眼','瞪得圆圆的'],
   ex_zh:'两只雪豹正瞪着眼睛注视着自己。',ex_py:'Liǎng zhī xuěbào zhèng dèngzhe yǎnjing zhùshìzhe zìjǐ.',ex_vn:'Hai con báo tuyết đang trố mắt nhìn chằm chằm vào mình.',
   exList:[
     {zh:'他们发现两只雪豹正瞪着眼睛注视着自己，大家相视而笑。',py:'Tāmen fāxiàn liǎng zhī xuěbào zhèng dèngzhe yǎnjing zhùshìzhe zìjǐ, dàjiā xiāngshì ér xiào.',vn:'Họ phát hiện hai con báo tuyết đang trố mắt nhìn chằm chằm vào mình, mọi người nhìn nhau cười.'},
     {zh:'他说话太不像话了，妈妈狠狠地瞪了他一眼。',py:'Tā shuōhuà tài bú xiànghuà le, māma hěnhěn de dèngle tā yì yǎn.',vn:'Cậu ta ăn nói chẳng ra làm sao, mẹ lườm cho một cái thật dữ.'},
     {zh:'听说老师要带大家去看大熊猫，孩子们都瞪大了眼睛。',py:'Tīngshuō lǎoshī yào dài dàjiā qù kàn dàxióngmāo, háizimen dōu dèngdàle yǎnjing.',vn:'Nghe nói cô giáo sẽ dẫn cả lớp đi xem gấu trúc, lũ trẻ đều tròn xoe mắt.'}
   ],
   colloFull:[
     {zh:'瞪着眼睛',py:'dèngzhe yǎnjing',vn:'trố mắt (nhìn)'},
     {zh:'瞪大眼睛',py:'dèngdà yǎnjing',vn:'mở to mắt'},
     {zh:'瞪了他一眼',py:'dèngle tā yì yǎn',vn:'lườm anh ta một cái'},
     {zh:'瞪得圆圆的',py:'dèng de yuányuán de',vn:'trợn tròn (mắt)'},
     {zh:'干瞪眼',py:'gān dèngyǎn',vn:'đứng trơ mắt nhìn (bất lực)'}
   ],
   patterns:[
     {s:'瞪着眼睛 + V',m:'Trố mắt mà … (nhìn, hỏi…)'},
     {s:'瞪 + người + 一眼',m:'Lườm ai một cái'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cậu ấy vừa mở miệng nói bậy là mẹ lườm ngay một cái.',answer:'他一开口乱说，妈妈就瞪了他一眼。',answerPy:'Tā yì kāikǒu luàn shuō, māma jiù dèngle tā yì yǎn.',
      note:'一……就……: vừa … là … (hai hành động nối tiếp ngay).',pair:'一……就……'},
     {promptLang:'vi',prompt:'Nhìn thấy báo tuyết, lũ trẻ mắt trợn tròn, mãi không nói được câu nào.',answer:'看到雪豹，孩子们眼睛瞪得圆圆的，半天说不出一句话来。',answerPy:'Kàndào xuěbào, háizimen yǎnjing dèng de yuányuán de, bàntiān shuō bu chū yí jù huà lái.',
      note:'V + 不出 + O + 来: không … ra được; 半天 = mãi, hồi lâu.',pair:'V + 不出 + O + 来'}
   ]},

  {n:5,zh:'注视',py:'zhùshì',pos:'Động từ',vn:'nhìn chăm chú, nhìn chằm chằm; theo dõi',hv:'chú thị',em:'👀',lesson:1,
   explain:['Tập trung ánh mắt nhìn chăm chú vào ai / cái gì.','Nghĩa rộng: quan tâm theo dõi (sự việc) — 全世界都在注视着这次会议. Hay đi với 着.'],
   usage:'注视着 + N; 默默 / 密切 + 注视; khác 凝视 (bài 11: nhìn rất lâu, bất động, sâu lắng).',
   collo:['注视着自己','默默注视','密切注视','注视着远方'],
   ex_zh:'两只雪豹正瞪着眼睛注视着自己。',ex_py:'Liǎng zhī xuěbào zhèng dèngzhe yǎnjing zhùshìzhe zìjǐ.',ex_vn:'Hai con báo tuyết đang trố mắt nhìn chằm chằm vào mình.',
   exList:[
     {zh:'两只藏在山头的雪豹正瞪着眼睛注视着摄影师们。',py:'Liǎng zhī cáng zài shāntóu de xuěbào zhèng dèngzhe yǎnjing zhùshìzhe shèyǐngshīmen.',vn:'Hai con báo tuyết nấp trên đỉnh núi đang trố mắt nhìn chằm chằm các nhiếp ảnh gia.'},
     {zh:'妈妈站在门口，默默地注视着儿子远去的背影。',py:'Māma zhàn zài ménkǒu, mòmò de zhùshìzhe érzi yuǎnqù de bèiyǐng.',vn:'Mẹ đứng ở cửa, lặng lẽ dõi theo bóng lưng con trai xa dần.'},
     {zh:'全世界都在密切注视着这次气候大会的进展。',py:'Quán shìjiè dōu zài mìqiè zhùshìzhe zhè cì qìhòu dàhuì de jìnzhǎn.',vn:'Cả thế giới đều đang theo dõi sát sao tiến triển của hội nghị khí hậu lần này.'}
   ],
   colloFull:[
     {zh:'注视着自己',py:'zhùshìzhe zìjǐ',vn:'đang nhìn chằm chằm vào mình'},
     {zh:'默默注视',py:'mòmò zhùshì',vn:'lặng lẽ dõi theo'},
     {zh:'密切注视',py:'mìqiè zhùshì',vn:'theo dõi sát sao'},
     {zh:'注视着远方',py:'zhùshìzhe yuǎnfāng',vn:'nhìn chăm chú về phía xa'},
     {zh:'引起注视',py:'yǐnqǐ zhùshì',vn:'thu hút ánh nhìn, sự chú ý'}
   ],
   patterns:[
     {s:'(正 / 在) + 注视着 + người / vật',m:'Đang nhìn chăm chú …'},
     {s:'密切注视 + sự việc',m:'Theo dõi sát sao …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Trên sân khấu, cô ấy cảm thấy mấy trăm đôi mắt đang nhìn mình, căng thẳng đến mức quên lời.',answer:'在舞台上，她感到几百双眼睛正注视着自己，紧张得忘了词。',answerPy:'Zài wǔtái shang, tā gǎndào jǐ bǎi shuāng yǎnjing zhèng zhùshìzhe zìjǐ, jǐnzhāng de wàngle cí.',
      note:'Adj + 得 + kết quả: căng thẳng đến mức …; 正 + V + 着: đang ….',pair:'Adj + 得 + kết quả'},
     {promptLang:'vi',prompt:'Người dân cả nước đang theo dõi sát sao diễn biến của cơn bão này.',answer:'全国人民都在密切注视着这场台风的动态。',answerPy:'Quánguó rénmín dōu zài mìqiè zhùshìzhe zhè cháng táifēng de dòngtài.',
      note:'在 + V + 着: đang (tiếp diễn); 动态 = diễn biến, động thái (ôn bài 11).',pair:'在 + V + 着'}
   ]},

  {n:6,zh:'斑',py:'bān',pos:'Danh từ',vn:'đốm, vằn, vết lốm đốm',hv:'ban',em:'🐾',lesson:1,
   explain:['Chấm, vệt có màu khác trên nền màu chính (trên da, lông, vật thể).','Hay gặp trong từ ghép: 花斑, 斑点, 雀斑 (tàn nhang), 老年斑 (đồi mồi), 斑马 (ngựa vằn).'],
   usage:'带着 / 有 + ……斑; 花斑, 斑点, 雀斑; làm yếu tố tạo từ: 斑马, 斑纹, 斑斓.',
   collo:['美丽花斑','斑点','雀斑','斑马'],
   ex_zh:'雪豹皮毛上带着美丽的花斑。',ex_py:'Xuěbào pímáo shang dàizhe měilì de huābān.',ex_vn:'Bộ lông báo tuyết điểm những đốm hoa tuyệt đẹp.',
   exList:[
     {zh:'雪豹，这种皮毛上带着美丽花斑的大型猫科动物正濒临消亡。',py:'Xuěbào, zhè zhǒng pímáo shang dàizhe měilì huābān de dàxíng māokē dòngwù zhèng bīnlín xiāowáng.',vn:'Báo tuyết — loài thú lớn họ mèo có bộ lông điểm đốm hoa tuyệt đẹp này — đang đứng trước nguy cơ biến mất.'},
     {zh:'她脸上有几个小雀斑，笑起来特别可爱。',py:'Tā liǎn shang yǒu jǐ ge xiǎo quèbān, xiào qǐlái tèbié kě\'ài.',vn:'Trên mặt cô ấy có mấy nốt tàn nhang nhỏ, cười lên trông rất đáng yêu.'},
     {zh:'斑马身上的黑白条纹，每一匹都不一样。',py:'Bānmǎ shēn shang de hēibái tiáowén, měi yì pǐ dōu bù yíyàng.',vn:'Vằn đen trắng trên mình ngựa vằn, mỗi con một kiểu, chẳng con nào giống con nào.'}
   ],
   colloFull:[
     {zh:'美丽花斑',py:'měilì huābān',vn:'đốm hoa đẹp'},
     {zh:'斑点',py:'bāndiǎn',vn:'chấm, đốm'},
     {zh:'雀斑',py:'quèbān',vn:'tàn nhang'},
     {zh:'斑马',py:'bānmǎ',vn:'ngựa vằn'},
     {zh:'老年斑',py:'lǎoniánbān',vn:'đồi mồi (đốm da người già)'}
   ],
   patterns:[
     {s:'(身上 / 皮毛上) + 带着 / 有 + ……斑',m:'Trên … có đốm, vằn …'},
     {s:'斑 + 点 / 纹 / 马',m:'Từ ghép chỉ đốm, vằn'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Loài báo này trên mình có đốm, rất dễ nhận ra.',answer:'这种豹子身上有斑点，很容易辨认。',answerPy:'Zhè zhǒng bàozi shēn shang yǒu bāndiǎn, hěn róngyì biànrèn.',
      note:'很容易 + V: rất dễ …; 辨认 = nhận ra (từ của bài).',pair:'很容易 + V'},
     {promptLang:'vi',prompt:'Ngựa vằn sở dĩ có vằn đen trắng là để tự bảo vệ mình.',answer:'斑马之所以有黑白条纹，是为了保护自己。',answerPy:'Bānmǎ zhīsuǒyǐ yǒu hēibái tiáowén, shì wèile bǎohù zìjǐ.',
      note:'之所以……是为了……: sở dĩ … là để … (nêu mục đích).',pair:'之所以……是为了……'}
   ]},

  {n:7,zh:'濒临',py:'bīnlín',pos:'Động từ',vn:'sát bên, kề bên; đứng trước (nguy cơ)',hv:'tần lâm',em:'⚠️',lesson:1,
   explain:['Nghĩa gốc: kề sát, giáp (biển, sông): 濒临大海.','Nghĩa thường gặp: sắp rơi vào, đứng trước (tình trạng xấu): 濒临灭绝, 濒临破产, 濒临崩溃. Sắc thái văn viết.'],
   usage:'濒临 + 灭绝 / 消亡 / 死亡 / 破产 / 崩溃; 濒临 + 大海 / 湖泊 (địa lý); 濒临灭绝的动物 = động vật có nguy cơ tuyệt chủng.',
   collo:['濒临消亡','濒临灭绝','濒临破产','濒临崩溃'],
   ex_zh:'这种大型猫科动物正濒临消亡。',ex_py:'Zhè zhǒng dàxíng māokē dòngwù zhèng bīnlín xiāowáng.',ex_vn:'Loài thú lớn họ mèo này đang đứng trước nguy cơ biến mất.',
   exList:[
     {zh:'雪豹正濒临消亡，换句话说，将来我们很可能再也见不到这种动物。',py:'Xuěbào zhèng bīnlín xiāowáng, huànjùhuàshuō, jiānglái wǒmen hěn kěnéng zài yě jiàn bu dào zhè zhǒng dòngwù.',vn:'Báo tuyết đang đứng trước nguy cơ biến mất, nói cách khác, sau này rất có thể chúng ta sẽ không bao giờ còn thấy loài vật này nữa.'},
     {zh:'由于经营不善，这家工厂已经濒临破产。',py:'Yóuyú jīngyíng bú shàn, zhè jiā gōngchǎng yǐjīng bīnlín pòchǎn.',vn:'Do làm ăn kém, nhà máy này đã đứng bên bờ phá sản.'},
     {zh:'这座小城东面濒临大海，风景十分迷人。',py:'Zhè zuò xiǎochéng dōngmiàn bīnlín dàhǎi, fēngjǐng shífēn mírén.',vn:'Thị trấn nhỏ này phía đông giáp biển, phong cảnh vô cùng quyến rũ.'}
   ],
   colloFull:[
     {zh:'濒临消亡',py:'bīnlín xiāowáng',vn:'đứng trước nguy cơ biến mất'},
     {zh:'濒临灭绝',py:'bīnlín mièjué',vn:'có nguy cơ tuyệt chủng'},
     {zh:'濒临破产',py:'bīnlín pòchǎn',vn:'bên bờ phá sản'},
     {zh:'濒临崩溃',py:'bīnlín bēngkuì',vn:'sắp sụp đổ, suy sụp'},
     {zh:'濒临大海',py:'bīnlín dàhǎi',vn:'giáp biển'}
   ],
   patterns:[
     {s:'正 / 已经 + 濒临 + 灭绝 / 破产 / 崩溃',m:'Đang / đã đứng trước nguy cơ …'},
     {s:'濒临灭绝的 + 动物 / 物种',m:'… có nguy cơ tuyệt chủng'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nếu con người không kịp thời bảo vệ, rất nhiều loài động vật hoang dã sẽ đứng trước nguy cơ tuyệt chủng.',answer:'如果人类不及时保护，很多野生动物就会濒临灭绝。',answerPy:'Rúguǒ rénlèi bù jíshí bǎohù, hěn duō yěshēng dòngwù jiù huì bīnlín mièjué.',
      note:'如果……就……: nếu … thì … (giả thiết – kết quả).',pair:'如果……就……'},
     {promptLang:'vi',prompt:'Công ty ấy từng bên bờ phá sản, nhưng nhờ một quyết sách sáng suốt đã vượt qua khủng hoảng.',answer:'那家公司曾经濒临破产，但靠着一个英明的决策度过了危机。',answerPy:'Nà jiā gōngsī céngjīng bīnlín pòchǎn, dàn kàozhe yí ge yīngmíng de juécè dùguòle wēijī.',
      note:'靠着…… = nhờ vào …; 英明, 决策, 危机 ôn bài 7.',pair:'靠(着)……'}
   ]},

  {n:8,zh:'致力',py:'zhìlì',pos:'Động từ',vn:'dốc sức, tận tuỵ (với)',hv:'trí lực',em:'💪',lesson:1,
   explain:['Dồn hết sức lực, tâm huyết vào một sự nghiệp, một việc lớn.','Hầu như luôn dùng dạng 致力于 + việc / lĩnh vực; sắc thái văn viết, trang trọng.'],
   usage:'致力于 + N / V (保护环境, 教育事业, 研究……); ……是致力于……的 + người / tổ chức; 一直 / 长期 + 致力于…….',
   collo:['致力于保护','致力于教育事业','致力于研究','一直致力于'],
   ex_zh:'这些摄影师们是致力于保护野生物种的“博物学家”。',ex_py:'Zhèxiē shèyǐngshīmen shì zhìlì yú bǎohù yěshēng wùzhǒng de "bówùxuéjiā".',ex_vn:'Những nhiếp ảnh gia này là các "nhà vạn vật học" dốc sức bảo vệ các loài hoang dã.',
   exList:[
     {zh:'这些摄影师们是致力于保护野生物种，记录和展示中国生物多样性的“博物学家”。',py:'Zhèxiē shèyǐngshīmen shì zhìlì yú bǎohù yěshēng wùzhǒng, jìlù hé zhǎnshì Zhōngguó shēngwù duōyàngxìng de "bówùxuéjiā".',vn:'Những nhiếp ảnh gia này là các "nhà vạn vật học" dốc sức bảo vệ các loài hoang dã, ghi lại và giới thiệu sự đa dạng sinh học của Trung Quốc.'},
     {zh:'他从小就爱好写作，几十年来一直致力于儿童文学的创作。',py:'Tā cóngxiǎo jiù àihào xiězuò, jǐ shí nián lái yìzhí zhìlì yú értóng wénxué de chuàngzuò.',vn:'Ông ấy từ nhỏ đã yêu viết lách, mấy chục năm nay luôn dốc sức sáng tác văn học thiếu nhi.'},
     {zh:'这个组织多年来致力于帮助山区的孩子上学。',py:'Zhège zǔzhī duō nián lái zhìlì yú bāngzhù shānqū de háizi shàngxué.',vn:'Tổ chức này nhiều năm nay dốc sức giúp trẻ em vùng núi được đến trường.'}
   ],
   colloFull:[
     {zh:'致力于保护',py:'zhìlì yú bǎohù',vn:'dốc sức bảo vệ'},
     {zh:'致力于教育事业',py:'zhìlì yú jiàoyù shìyè',vn:'tận tuỵ với sự nghiệp giáo dục'},
     {zh:'致力于研究',py:'zhìlì yú yánjiū',vn:'dốc sức nghiên cứu'},
     {zh:'一直致力于',py:'yìzhí zhìlì yú',vn:'luôn dốc sức vào'},
     {zh:'致力于环保',py:'zhìlì yú huánbǎo',vn:'dốc sức cho bảo vệ môi trường'}
   ],
   patterns:[
     {s:'(一直 / 长期) + 致力于 + N / V',m:'(Luôn) dốc sức vào …'},
     {s:'……是致力于……的 + người / tổ chức',m:'… là người / tổ chức dốc sức cho …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tốt nghiệp xong, chị ấy về quê, dốc sức cho sự nghiệp giáo dục vùng núi.',answer:'毕业以后，她回到家乡，致力于山区的教育事业。',answerPy:'Bìyè yǐhòu, tā huídào jiāxiāng, zhìlì yú shānqū de jiàoyù shìyè.',
      note:'致力于 + sự nghiệp; ……以后 nêu mốc thời gian.',pair:'致力于……'},
     {promptLang:'vi',prompt:'Nhà khoa học này cả đời dốc sức nghiên cứu, không những không thấy khổ mà ngược lại còn thấy vô cùng vui.',answer:'这位科学家一生致力于研究，不但不觉得苦，反而感到无比快乐。',answerPy:'Zhè wèi kēxuéjiā yìshēng zhìlì yú yánjiū, búdàn bù juéde kǔ, fǎn\'ér gǎndào wúbǐ kuàilè.',
      note:'不但不……反而……: không những không … mà ngược lại … (trái với dự đoán); 无比 ôn bài 2.',pair:'不但不……反而……'}
   ]},

  {n:9,zh:'领袖',py:'lǐngxiù',pos:'Danh từ',vn:'lãnh tụ, người dẫn đầu',hv:'lãnh tụ',em:'🧭',lesson:1,
   explain:['Người lãnh đạo cao nhất của quốc gia, chính đảng, tổ chức quần chúng.','Nghĩa rộng: người đứng đầu, nhân vật dẫn dắt trong một lĩnh vực — 领袖人物, 意见领袖.'],
   usage:'……中的领袖人物; 国家 / 精神 / 意见 + 领袖; 领袖 + 风范 / 气质.',
   collo:['领袖人物','国家领袖','精神领袖','意见领袖'],
   ex_zh:'徐健是摄影师中的领袖人物。',ex_py:'Xú Jiàn shì shèyǐngshī zhōng de lǐngxiù rénwù.',ex_vn:'Từ Kiện là nhân vật dẫn đầu trong giới nhiếp ảnh gia.',
   exList:[
     {zh:'徐健是摄影师中的领袖人物，IBE的创始人。',py:'Xú Jiàn shì shèyǐngshī zhōng de lǐngxiù rénwù, IBE de chuàngshǐrén.',vn:'Từ Kiện là nhân vật dẫn đầu trong giới nhiếp ảnh gia, người sáng lập IBE.'},
     {zh:'各国领袖聚在一起，讨论气候变化问题。',py:'Gè guó lǐngxiù jù zài yìqǐ, tǎolùn qìhòu biànhuà wèntí.',vn:'Lãnh đạo các nước tụ họp lại, thảo luận vấn đề biến đổi khí hậu.'},
     {zh:'他虽然年轻，却很有领袖风范，大家都愿意听他的。',py:'Tā suīrán niánqīng, què hěn yǒu lǐngxiù fēngfàn, dàjiā dōu yuànyì tīng tā de.',vn:'Anh ấy tuy trẻ nhưng rất có phong thái của người lãnh đạo, ai cũng sẵn lòng nghe theo.'}
   ],
   colloFull:[
     {zh:'领袖人物',py:'lǐngxiù rénwù',vn:'nhân vật dẫn đầu'},
     {zh:'国家领袖',py:'guójiā lǐngxiù',vn:'lãnh tụ quốc gia'},
     {zh:'精神领袖',py:'jīngshén lǐngxiù',vn:'lãnh tụ tinh thần'},
     {zh:'意见领袖',py:'yìjiàn lǐngxiù',vn:'người có ảnh hưởng dư luận'},
     {zh:'领袖风范',py:'lǐngxiù fēngfàn',vn:'phong thái người lãnh đạo'}
   ],
   patterns:[
     {s:'……中的领袖人物',m:'Nhân vật dẫn đầu trong …'},
     {s:'很有领袖风范 / 气质',m:'Có phong thái, khí chất lãnh đạo'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ông ấy là nhân vật dẫn đầu trong giới khoa học, đồng thời cũng là người sáng lập công ty này.',answer:'他是科学界的领袖人物，同时也是这家公司的创始人。',answerPy:'Tā shì kēxuéjiè de lǐngxiù rénwù, tóngshí yě shì zhè jiā gōngsī de chuàngshǐrén.',
      note:'同时也……: đồng thời cũng … (bổ sung thân phận thứ hai).',pair:'同时也……'},
     {promptLang:'vi',prompt:'Tuy chỉ là học sinh lớp 11 nhưng cậu ấy rất có phong thái lãnh đạo, cả lớp đều phục.',answer:'虽然只是高二学生，他却很有领袖风范，全班同学都服他。',answerPy:'Suīrán zhǐ shì gāo\'èr xuésheng, tā què hěn yǒu lǐngxiù fēngfàn, quán bān tóngxué dōu fú tā.',
      note:'虽然……却……: 却 đứng sau chủ ngữ của vế sau.',pair:'虽然……却……'}
   ]},

  {n:10,zh:'辨认',py:'biànrèn',pos:'Động từ',vn:'nhận ra, nhận biết',hv:'biện nhận',em:'🔍',lesson:1,
   explain:['Dựa vào đặc điểm để phân biệt và nhận ra người / vật / chữ viết.','Hay đi với bổ ngữ khả năng: 辨认得出 / 辨认不出; 难以辨认 = khó nhận ra.'],
   usage:'辨认 + 字迹 / 方向 / 照片 / 动物; 辨认不出(来); 难以辨认; 仔细辨认.',
   collo:['辨认不出','难以辨认','辨认方向','仔细辨认'],
   ex_zh:'另外4种动物我辨认不出。',ex_py:'Lìngwài sì zhǒng dòngwù wǒ biànrèn bù chū.',ex_vn:'Bốn loài còn lại tôi không nhận ra được.',
   exList:[
     {zh:'我认识大熊猫、金丝猴、牦牛和雪豹，另外4种辨认不出。',py:'Wǒ rènshi dàxióngmāo, jīnsīhóu, máoniú hé xuěbào, lìngwài sì zhǒng biànrèn bù chū.',vn:'Tôi biết gấu trúc, khỉ lông vàng, bò Tây Tạng và báo tuyết, bốn loài còn lại thì không nhận ra.'},
     {zh:'信上的字迹太模糊了，很难辨认。',py:'Xìn shang de zìjì tài móhu le, hěn nán biànrèn.',vn:'Nét chữ trên thư nhoè quá, rất khó đọc ra.'},
     {zh:'在森林里迷路时，可以根据树木来辨认方向。',py:'Zài sēnlín li mílù shí, kěyǐ gēnjù shùmù lái biànrèn fāngxiàng.',vn:'Khi lạc trong rừng, có thể dựa vào cây cối để nhận biết phương hướng.'}
   ],
   colloFull:[
     {zh:'辨认不出',py:'biànrèn bù chū',vn:'không nhận ra được'},
     {zh:'难以辨认',py:'nányǐ biànrèn',vn:'khó nhận ra'},
     {zh:'辨认方向',py:'biànrèn fāngxiàng',vn:'nhận biết phương hướng'},
     {zh:'仔细辨认',py:'zǐxì biànrèn',vn:'nhìn kỹ để nhận ra'},
     {zh:'辨认字迹',py:'biànrèn zìjì',vn:'nhận ra nét chữ'}
   ],
   patterns:[
     {s:'辨认得出 / 辨认不出 + (来)',m:'Nhận ra được / không nhận ra được'},
     {s:'根据…… + (来)辨认……',m:'Dựa vào … để nhận ra …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Hai mươi năm không gặp, cô ấy thay đổi nhiều đến nỗi tôi hầu như không nhận ra.',answer:'二十年没见，她变化大得我几乎辨认不出来了。',answerPy:'Èrshí nián méi jiàn, tā biànhuà dà de wǒ jīhū biànrèn bù chūlái le.',
      note:'Adj + 得 + cả một mệnh đề chỉ mức độ; 辨认不出来 = không nhận ra được.',pair:'Adj + 得 + mệnh đề'},
     {promptLang:'vi',prompt:'Bức ảnh này mờ quá, cậu nhìn kỹ xem có nhận ra là ai không?',answer:'这张照片太模糊了，你仔细看看，能不能辨认出是谁？',answerPy:'Zhè zhāng zhàopiàn tài móhu le, nǐ zǐxì kànkan, néng bu néng biànrèn chū shì shéi?',
      note:'Câu hỏi chính phản 能不能 + V; V lặp lại (看看) = thử xem.',pair:'能不能 + V'}
   ]},

  {n:11,zh:'现状',py:'xiànzhuàng',pos:'Danh từ',vn:'tình trạng hiện nay, hiện trạng',hv:'hiện trạng',em:'📊',lesson:1,
   explain:['Tình hình, trạng thái hiện tại của sự việc.','Hay đi với 改变 / 满足于 / 安于 / 了解: 改变现状, 满足于现状, 安于现状.'],
   usage:'……的现状是……; 改变 / 了解 / 维持 + 现状; 满足于 / 安于 + 现状.',
   collo:['改变现状','满足于现状','了解现状','安于现状'],
   ex_zh:'我们的现状是，人们能识别长颈鹿，却不认识藏羚羊。',ex_py:'Wǒmen de xiànzhuàng shì, rénmen néng shíbié chángjǐnglù, què bú rènshi zànglíngyáng.',ex_vn:'Thực trạng của chúng ta là: người ta nhận ra được hươu cao cổ nhưng lại không biết linh dương Tây Tạng.',
   exList:[
     {zh:'徐健说：“我们的现状是，人们能识别长颈鹿、大猩猩、河马，却不认识藏羚羊。”',py:'Xú Jiàn shuō: "Wǒmen de xiànzhuàng shì, rénmen néng shíbié chángjǐnglù, dàxīngxing, hémǎ, què bú rènshi zànglíngyáng."',vn:'Từ Kiện nói: "Thực trạng của chúng ta là người ta nhận ra hươu cao cổ, khỉ đột, hà mã, nhưng lại không biết linh dương Tây Tạng."'},
     {zh:'年轻人不要满足于现状，应该勇于挑战自己。',py:'Niánqīngrén búyào mǎnzú yú xiànzhuàng, yīnggāi yǒngyú tiǎozhàn zìjǐ.',vn:'Người trẻ đừng bằng lòng với hiện tại, nên dám thử thách bản thân.'},
     {zh:'要想改变现状，光抱怨是没用的。',py:'Yào xiǎng gǎibiàn xiànzhuàng, guāng bàoyuàn shì méi yòng de.',vn:'Muốn thay đổi hiện trạng thì chỉ than phiền là vô ích.'}
   ],
   colloFull:[
     {zh:'改变现状',py:'gǎibiàn xiànzhuàng',vn:'thay đổi hiện trạng'},
     {zh:'满足于现状',py:'mǎnzú yú xiànzhuàng',vn:'bằng lòng với hiện tại'},
     {zh:'了解现状',py:'liǎojiě xiànzhuàng',vn:'nắm tình hình hiện nay'},
     {zh:'安于现状',py:'ānyú xiànzhuàng',vn:'an phận với hiện tại'},
     {zh:'发展现状',py:'fāzhǎn xiànzhuàng',vn:'thực trạng phát triển'}
   ],
   patterns:[
     {s:'……的现状是……',m:'Thực trạng của … là …'},
     {s:'改变 / 满足于 / 安于 + 现状',m:'Thay đổi / bằng lòng / an phận với hiện trạng'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Muốn thay đổi hiện trạng thì phải bắt tay vào làm ngay từ bây giờ.',answer:'要想改变现状，就得从现在开始着手。',answerPy:'Yào xiǎng gǎibiàn xiànzhuàng, jiù děi cóng xiànzài kāishǐ zhuóshǒu.',
      note:'要想……就得……: muốn … thì phải …; 着手 ôn bài 9.',pair:'要想……就得……'},
     {promptLang:'vi',prompt:'Anh ấy không cam lòng an phận với hiện tại, quyết định ra nước ngoài du học.',answer:'他不甘心安于现状，决定出国留学。',answerPy:'Tā bù gānxīn ānyú xiànzhuàng, juédìng chūguó liúxué.',
      note:'不甘心 + V: không cam lòng …; 安于现状 = an phận.',pair:'不甘心 + V'}
   ]},

  {n:12,zh:'识别',py:'shíbié',pos:'Động từ',vn:'phân biệt, nhận ra, nhận dạng',hv:'thức biệt',em:'🆔',lesson:1,
   explain:['Phân biệt, nhận ra (đúng sai, thật giả, thuộc loại gì) dựa trên đặc điểm.','Hay dùng trong khoa học, công nghệ: 人脸识别 (nhận diện khuôn mặt), 语音识别, 识别真假.'],
   usage:'识别 + 真假 / 动物 / 身份 / 文字; 人脸 / 语音 + 识别; 识别能力; 能 / 难以 + 识别.',
   collo:['识别真假','人脸识别','识别能力','语音识别'],
   ex_zh:'人们能识别长颈鹿、大猩猩、河马。',ex_py:'Rénmen néng shíbié chángjǐnglù, dàxīngxing, hémǎ.',ex_vn:'Người ta nhận ra được hươu cao cổ, khỉ đột, hà mã.',
   exList:[
     {zh:'人们能识别长颈鹿、大猩猩、河马，知道它们的来历，却不认识藏羚羊。',py:'Rénmen néng shíbié chángjǐnglù, dàxīngxing, hémǎ, zhīdào tāmen de láilì, què bú rènshi zànglíngyáng.',vn:'Người ta nhận ra hươu cao cổ, khỉ đột, hà mã, biết cả lai lịch của chúng, nhưng lại không biết linh dương Tây Tạng.'},
     {zh:'现在很多手机都有人脸识别功能，一看就能解锁。',py:'Xiànzài hěn duō shǒujī dōu yǒu rénliǎn shíbié gōngnéng, yí kàn jiù néng jiěsuǒ.',vn:'Bây giờ nhiều điện thoại có chức năng nhận diện khuôn mặt, nhìn một cái là mở khoá được.'},
     {zh:'网上的信息真真假假，我们要提高识别能力。',py:'Wǎngshang de xìnxī zhēnzhēnjiǎjiǎ, wǒmen yào tígāo shíbié nénglì.',vn:'Thông tin trên mạng thật thật giả giả, chúng ta phải nâng cao khả năng phân biệt.'}
   ],
   colloFull:[
     {zh:'识别真假',py:'shíbié zhēnjiǎ',vn:'phân biệt thật giả'},
     {zh:'人脸识别',py:'rénliǎn shíbié',vn:'nhận diện khuôn mặt'},
     {zh:'识别能力',py:'shíbié nénglì',vn:'khả năng nhận biết'},
     {zh:'语音识别',py:'yǔyīn shíbié',vn:'nhận dạng giọng nói'},
     {zh:'识别身份',py:'shíbié shēnfèn',vn:'xác định danh tính'}
   ],
   patterns:[
     {s:'识别 + 真假 / 身份 / 物种',m:'Phân biệt, nhận dạng …'},
     {s:'人脸 / 语音 + 识别',m:'Nhận diện … (công nghệ)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Thông tin trên mạng có thật có giả, chúng ta phải học cách phân biệt thật giả.',answer:'网上的信息有真有假，我们要学会识别真假。',answerPy:'Wǎngshang de xìnxī yǒu zhēn yǒu jiǎ, wǒmen yào xuéhuì shíbié zhēnjiǎ.',
      note:'有 A 有 B: có A có B (hai mặt đối lập cùng tồn tại).',pair:'有……有……'},
     {promptLang:'vi',prompt:'Chỉ cần nhìn vào camera một cái là hệ thống nhận diện được danh tính của bạn.',answer:'只要看一眼摄像头，系统就能识别你的身份。',answerPy:'Zhǐyào kàn yì yǎn shèxiàngtóu, xìtǒng jiù néng shíbié nǐ de shēnfèn.',
      note:'只要……就……: chỉ cần … là …; 摄像头 ôn bài 11.',pair:'只要……就……'}
   ]},

  {n:13,zh:'来历',py:'láilì',pos:'Danh từ',vn:'lai lịch, nguồn gốc',hv:'lai lịch',em:'📜',lesson:1,
   explain:['Nguồn gốc, xuất xứ, quá trình hình thành của người hoặc vật.','Hay gặp: 有来历 (có lai lịch, không đơn giản), 来历不明 (không rõ lai lịch), 知道 / 查清 + 来历.'],
   usage:'……的来历; 知道 / 了解 / 查清 + 来历; 来历不明; 大有来历 = có lai lịch lớn.',
   collo:['知道来历','来历不明','名字的来历','大有来历'],
   ex_zh:'人们知道长颈鹿的来历，却不认识藏羚羊。',ex_py:'Rénmen zhīdào chángjǐnglù de láilì, què bú rènshi zànglíngyáng.',ex_vn:'Người ta biết lai lịch của hươu cao cổ, nhưng lại không biết linh dương Tây Tạng.',
   exList:[
     {zh:'人们能识别长颈鹿、大猩猩、河马，知道它们的来历。',py:'Rénmen néng shíbié chángjǐnglù, dàxīngxing, hémǎ, zhīdào tāmen de láilì.',vn:'Người ta nhận ra hươu cao cổ, khỉ đột, hà mã, biết cả nguồn gốc của chúng.'},
     {zh:'你知道“月饼”这个名字的来历吗？',py:'Nǐ zhīdào "yuèbing" zhège míngzi de láilì ma?',vn:'Bạn có biết nguồn gốc của cái tên "bánh trung thu" không?'},
     {zh:'不要随便点击来历不明的链接。',py:'Búyào suíbiàn diǎnjī láilì bù míng de liànjiē.',vn:'Đừng tuỳ tiện bấm vào những đường link không rõ nguồn gốc.'}
   ],
   colloFull:[
     {zh:'知道来历',py:'zhīdào láilì',vn:'biết nguồn gốc'},
     {zh:'来历不明',py:'láilì bù míng',vn:'không rõ lai lịch'},
     {zh:'名字的来历',py:'míngzi de láilì',vn:'nguồn gốc cái tên'},
     {zh:'大有来历',py:'dà yǒu láilì',vn:'có lai lịch lớn, không tầm thường'},
     {zh:'查清来历',py:'cháqīng láilì',vn:'tra rõ lai lịch'}
   ],
   patterns:[
     {s:'……的来历',m:'Nguồn gốc, lai lịch của …'},
     {s:'来历不明的 + N',m:'… không rõ nguồn gốc'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chiếc bình cổ này nhìn thì bình thường, nhưng thật ra có lai lịch rất lớn.',answer:'这个古瓶看起来很普通，其实大有来历。',answerPy:'Zhège gǔpíng kàn qǐlái hěn pǔtōng, qíshí dà yǒu láilì.',
      note:'看起来……，其实……: trông thì … nhưng thực ra ….',pair:'看起来……其实……'},
     {promptLang:'vi',prompt:'Cảnh sát đang điều tra nguồn gốc của số tiền không rõ lai lịch này.',answer:'警察正在调查这笔来历不明的钱。',answerPy:'Jǐngchá zhèngzài diàochá zhè bǐ láilì bù míng de qián.',
      note:'正在 + V: đang …; lượng từ 笔 cho khoản tiền.',pair:'正在 + V'}
   ]},

  {n:14,zh:'苦涩',py:'kǔsè',pos:'Tính từ',vn:'đắng chát; đau khổ, cay đắng',hv:'khổ sáp',em:'😣',lesson:1,
   explain:['Nghĩa gốc: (vị) vừa đắng vừa chát.','Nghĩa bóng: (tâm trạng, nụ cười, ký ức) đau khổ, cay đắng, xót xa — 苦涩的笑, 面带苦涩.'],
   usage:'味道苦涩; 苦涩的 + 笑 / 回忆 / 泪水; 面带苦涩 / 苦涩地 + V.',
   collo:['面带苦涩','苦涩的笑','苦涩的回忆','味道苦涩'],
   ex_zh:'徐健面带苦涩地说出了自己的担心。',ex_py:'Xú Jiàn miàn dài kǔsè de shuōchūle zìjǐ de dānxīn.',ex_vn:'Từ Kiện với vẻ mặt đầy cay đắng nói ra nỗi lo của mình.',
   exList:[
     {zh:'徐健面带苦涩地说：“许多动植物，连一张清楚的照片都没有。”',py:'Xú Jiàn miàn dài kǔsè de shuō: "Xǔduō dòng-zhíwù, lián yì zhāng qīngchu de zhàopiàn dōu méiyǒu."',vn:'Từ Kiện cay đắng nói: "Rất nhiều loài động thực vật, đến một tấm ảnh rõ nét cũng không có."'},
     {zh:'这种野果味道苦涩，一般人吃不惯。',py:'Zhè zhǒng yěguǒ wèidao kǔsè, yìbān rén chī bu guàn.',vn:'Loại quả dại này vị đắng chát, người bình thường ăn không quen.'},
     {zh:'听到落榜的消息，他苦涩地笑了笑，什么也没说。',py:'Tīngdào luòbǎng de xiāoxi, tā kǔsè de xiàole xiào, shénme yě méi shuō.',vn:'Nghe tin thi trượt, cậu ấy cười cay đắng, chẳng nói gì.'}
   ],
   colloFull:[
     {zh:'面带苦涩',py:'miàn dài kǔsè',vn:'vẻ mặt cay đắng'},
     {zh:'苦涩的笑',py:'kǔsè de xiào',vn:'nụ cười cay đắng'},
     {zh:'苦涩的回忆',py:'kǔsè de huíyì',vn:'ký ức đau buồn'},
     {zh:'味道苦涩',py:'wèidao kǔsè',vn:'vị đắng chát'},
     {zh:'苦涩的泪水',py:'kǔsè de lèishuǐ',vn:'giọt nước mắt cay đắng'}
   ],
   patterns:[
     {s:'面带苦涩地 + 说 / 笑',m:'Nói / cười với vẻ cay đắng'},
     {s:'苦涩的 + 回忆 / 笑容 / 泪水',m:'… cay đắng, xót xa'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nhắc đến những năm tháng khó khăn ấy, ông nội luôn nở một nụ cười cay đắng.',answer:'一提起那段艰难的岁月，爷爷总是露出苦涩的笑容。',answerPy:'Yì tíqǐ nà duàn jiānnán de suìyuè, yéye zǒngshì lùchū kǔsè de xiàoróng.',
      note:'一提起……，总是……: hễ nhắc đến … là luôn ….',pair:'一……就 / 总是……'},
     {promptLang:'vi',prompt:'Tuy trà này vị hơi đắng chát, nhưng uống xong thấy ngọt hậu.',answer:'这种茶虽然味道有点儿苦涩，但喝完以后有回甜。',answerPy:'Zhè zhǒng chá suīrán wèidao yǒudiǎnr kǔsè, dàn hēwán yǐhòu yǒu huítián.',
      note:'虽然……但……: tuy … nhưng …; 有点儿 + Adj (ý không hài lòng nhẹ).',pair:'虽然……但……'}
   ]},

  {n:15,zh:'指望',py:'zhǐwàng',pos:'Động từ',vn:'trông chờ, mong đợi, trông cậy',hv:'chỉ vọng',em:'🙏',lesson:1,
   explain:['Trông mong, trông cậy vào ai / điều gì sẽ xảy ra (một cách tuyệt đối).','Hay dùng trong câu phủ định, câu hỏi tu từ: 别指望……, 怎么指望……? Còn làm danh từ: 没指望了 = hết hy vọng.'],
   usage:'指望 + người / việc; 指望 + người + V; 别 / 不能 + 指望……; 怎么指望……? (hỏi tu từ); 有 / 没(有) + 指望.',
   collo:['指望别人','别指望','怎么指望','没指望了'],
   ex_zh:'大家不认识，怎么指望保护？',ex_py:'Dàjiā bú rènshi, zěnme zhǐwàng bǎohù?',ex_vn:'Mọi người còn không biết đến chúng thì trông mong gì việc bảo vệ?',
   exList:[
     {zh:'许多动植物，连一张清楚的照片都没有，大家不认识，怎么指望保护？',py:'Xǔduō dòng-zhíwù, lián yì zhāng qīngchu de zhàopiàn dōu méiyǒu, dàjiā bú rènshi, zěnme zhǐwàng bǎohù?',vn:'Rất nhiều loài động thực vật đến một tấm ảnh rõ nét cũng không có, mọi người không biết đến chúng thì làm sao trông mong bảo vệ được?'},
     {zh:'孩子长大后都忙于自己的工作，父母不能总指望他们陪在身边。',py:'Háizi zhǎngdà hòu dōu mángyú zìjǐ de gōngzuò, fùmǔ bù néng zǒng zhǐwàng tāmen péi zài shēnbiān.',vn:'Con cái lớn lên đều bận việc riêng, cha mẹ không thể lúc nào cũng trông chờ chúng ở bên.'},
     {zh:'这件事你得自己想办法，别指望别人帮你。',py:'Zhè jiàn shì nǐ děi zìjǐ xiǎng bànfǎ, bié zhǐwàng biérén bāng nǐ.',vn:'Việc này cậu phải tự nghĩ cách, đừng trông chờ người khác giúp.'}
   ],
   colloFull:[
     {zh:'指望别人',py:'zhǐwàng biérén',vn:'trông cậy người khác'},
     {zh:'别指望',py:'bié zhǐwàng',vn:'đừng trông mong'},
     {zh:'怎么指望',py:'zěnme zhǐwàng',vn:'sao mà trông mong được'},
     {zh:'没指望了',py:'méi zhǐwàng le',vn:'hết hy vọng rồi'},
     {zh:'全指望你了',py:'quán zhǐwàng nǐ le',vn:'trông cả vào bạn đấy'}
   ],
   patterns:[
     {s:'别 / 不能 + 指望 + người + V',m:'Đừng / không thể trông chờ ai làm gì'},
     {s:'……，怎么指望……？',m:'…, thì sao trông mong … được? (hỏi tu từ)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bản thân cậu còn không cố gắng thì sao trông mong người khác giúp cậu được?',answer:'你自己都不努力，怎么指望别人帮你呢？',answerPy:'Nǐ zìjǐ dōu bù nǔlì, zěnme zhǐwàng biérén bāng nǐ ne?',
      note:'Câu hỏi tu từ 怎么……呢? = không thể; 都 ở đây = còn, ngay cả.',pair:'câu hỏi tu từ 怎么……呢'},
     {promptLang:'vi',prompt:'Việc này trông cả vào cậu đấy, ngoài cậu ra không ai làm được.',answer:'这件事全指望你了，除了你以外，谁也做不了。',answerPy:'Zhè jiàn shì quán zhǐwàng nǐ le, chúle nǐ yǐwài, shéi yě zuò bu liǎo.',
      note:'除了……以外，谁也……: ngoài … ra, không ai …; V + 不了 = không làm nổi.',pair:'除了……以外'}
   ]},

  {n:16,zh:'严峻',py:'yánjùn',pos:'Tính từ',vn:'nghiêm trọng, gay gắt, khắc nghiệt',hv:'nghiêm tuấn',em:'🧊',lesson:1,
   explain:['(Tình hình, thử thách) rất nghiêm trọng, gay go, đáng lo ngại.','Còn chỉ nét mặt, thái độ nghiêm nghị: 表情严峻. Hay đi với 形势 / 考验 / 挑战 / 问题.'],
   usage:'形势 / 情况 / 问题 + 严峻; 严峻的 + 考验 / 挑战 / 形势; 更严峻的是…… (điều nghiêm trọng hơn là …).',
   collo:['形势严峻','严峻的考验','严峻的挑战','更严峻的是'],
   ex_zh:'更严峻的是自然保护区的影像空白。',ex_py:'Gèng yánjùn de shì zìrán bǎohùqū de yǐngxiàng kòngbái.',ex_vn:'Nghiêm trọng hơn là khoảng trống về hình ảnh ở các khu bảo tồn thiên nhiên.',
   exList:[
     {zh:'更严峻的是自然保护区的影像空白，很多特有物种还没来得及为我们所了解，就消失了。',py:'Gèng yánjùn de shì zìrán bǎohùqū de yǐngxiàng kòngbái, hěn duō tèyǒu wùzhǒng hái méi láidejí wéi wǒmen suǒ liǎojiě, jiù xiāoshī le.',vn:'Nghiêm trọng hơn là khoảng trống hình ảnh ở các khu bảo tồn, nhiều loài đặc hữu còn chưa kịp được chúng ta biết đến thì đã biến mất.'},
     {zh:'面对严峻的就业形势，大学生们要及早做好准备。',py:'Miànduì yánjùn de jiùyè xíngshì, dàxuéshēngmen yào jízǎo zuòhǎo zhǔnbèi.',vn:'Đối mặt với tình hình việc làm khắc nghiệt, sinh viên cần sớm chuẩn bị sẵn sàng.'},
     {zh:'这场大雪对山里的牧民来说是一次严峻的考验。',py:'Zhè cháng dàxuě duì shān li de mùmín lái shuō shì yí cì yánjùn de kǎoyàn.',vn:'Trận tuyết lớn này là một thử thách khắc nghiệt đối với người chăn nuôi du mục trên núi.'}
   ],
   colloFull:[
     {zh:'形势严峻',py:'xíngshì yánjùn',vn:'tình hình nghiêm trọng'},
     {zh:'严峻的考验',py:'yánjùn de kǎoyàn',vn:'thử thách khắc nghiệt'},
     {zh:'严峻的挑战',py:'yánjùn de tiǎozhàn',vn:'thách thức gay gắt'},
     {zh:'更严峻的是',py:'gèng yánjùn de shì',vn:'nghiêm trọng hơn là'},
     {zh:'表情严峻',py:'biǎoqíng yánjùn',vn:'nét mặt nghiêm nghị'}
   ],
   patterns:[
     {s:'……，更严峻的是……',m:'…, nghiêm trọng hơn nữa là … (tăng tiến)'},
     {s:'面对 / 经受 + 严峻的 + 考验 / 挑战',m:'Đối mặt / trải qua thử thách khắc nghiệt'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ô nhiễm nguồn nước rất nghiêm trọng, nghiêm trọng hơn là nhiều người vẫn chưa ý thức được điều đó.',answer:'水污染问题很严重，更严峻的是很多人还没有意识到这一点。',answerPy:'Shuǐ wūrǎn wèntí hěn yánzhòng, gèng yánjùn de shì hěn duō rén hái méiyǒu yìshí dào zhè yì diǎn.',
      note:'……，更严峻的是……: tăng tiến mức độ; 意识到 ôn bài 1.',pair:'更……的是……'},
     {promptLang:'vi',prompt:'Bất kể đối mặt thử thách khắc nghiệt thế nào, chúng ta cũng không được bỏ cuộc.',answer:'不管面对多么严峻的挑战，我们都不能放弃。',answerPy:'Bùguǎn miànduì duōme yánjùn de tiǎozhàn, wǒmen dōu bù néng fàngqì.',
      note:'不管……都……: bất kể … đều …; 多么 + Adj trong vế 不管.',pair:'不管……都……'}
   ]},

  {n:17,zh:'空白',py:'kòngbái',pos:'Danh từ',vn:'chỗ trống, khoảng trống',hv:'không bạch',em:'⬜',lesson:1,
   explain:['Phần để trống, chưa viết, chưa vẽ (trên giấy, trang sách).','Nghĩa bóng: lĩnh vực, phương diện còn trống, chưa ai làm — 填补空白 (lấp khoảng trống), 影像空白, 大脑一片空白 (đầu óc trống rỗng).'],
   usage:'填补 + 空白; ……方面 / 领域 + 的空白; 一片空白; 影像 / 研究 + 空白. Chú ý đọc kòngbái (không đọc kōng).',
   collo:['影像空白','填补空白','一片空白','留下空白'],
   ex_zh:'自然保护区存在着大量影像空白。',ex_py:'Zìrán bǎohùqū cúnzàizhe dàliàng yǐngxiàng kòngbái.',ex_vn:'Các khu bảo tồn thiên nhiên còn rất nhiều khoảng trống về hình ảnh.',
   exList:[
     {zh:'更严峻的是自然保护区的影像空白。',py:'Gèng yánjùn de shì zìrán bǎohùqū de yǐngxiàng kòngbái.',vn:'Nghiêm trọng hơn là khoảng trống hình ảnh ở các khu bảo tồn thiên nhiên.'},
     {zh:'这项研究填补了国内这一领域的空白。',py:'Zhè xiàng yánjiū tiánbǔle guónèi zhè yí lǐngyù de kòngbái.',vn:'Công trình nghiên cứu này đã lấp đầy khoảng trống của lĩnh vực này trong nước.'},
     {zh:'一上台，我紧张得大脑一片空白。',py:'Yí shàng tái, wǒ jǐnzhāng de dànǎo yí piàn kòngbái.',vn:'Vừa lên sân khấu, tôi căng thẳng đến mức đầu óc trống rỗng.'}
   ],
   colloFull:[
     {zh:'影像空白',py:'yǐngxiàng kòngbái',vn:'khoảng trống về hình ảnh'},
     {zh:'填补空白',py:'tiánbǔ kòngbái',vn:'lấp khoảng trống'},
     {zh:'一片空白',py:'yí piàn kòngbái',vn:'trống trơn, trống rỗng'},
     {zh:'留下空白',py:'liúxià kòngbái',vn:'để lại khoảng trống'},
     {zh:'空白处',py:'kòngbái chù',vn:'chỗ trống (trên giấy)'}
   ],
   patterns:[
     {s:'填补 + ……(领域)的空白',m:'Lấp khoảng trống của (lĩnh vực) …'},
     {s:'大脑 / 脑子 + 一片空白',m:'Đầu óc trống rỗng'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nhờ những nhiếp ảnh gia này, khoảng trống hình ảnh về các loài hoang dã cuối cùng đã được lấp đầy.',answer:'多亏了这些摄影师，野生物种的影像空白终于被填补了。',answerPy:'Duōkuīle zhèxiē shèyǐngshī, yěshēng wùzhǒng de yǐngxiàng kòngbái zhōngyú bèi tiánbǔ le.',
      note:'多亏(了)…… = may nhờ …; câu 被 + 填补.',pair:'多亏……'},
     {promptLang:'vi',prompt:'Nhìn thấy đề thi, đầu óc tôi trống rỗng, một câu cũng không nhớ ra.',answer:'一看到考题，我的大脑就一片空白，一道题也想不起来。',answerPy:'Yí kàndào kǎotí, wǒ de dànǎo jiù yí piàn kòngbái, yí dào tí yě xiǎng bu qǐlái.',
      note:'一……就……; 一 + lượng từ + N + 也 + 不/没……: nhấn mạnh phủ định hoàn toàn.',pair:'一……也不……'}
   ]},

  {n:18,zh:'琢磨',py:'zuómo',pos:'Động từ',vn:'suy nghĩ, cân nhắc, nghiền ngẫm',hv:'trác ma',em:'🤔',lesson:1,
   explain:['Suy nghĩ đi suy nghĩ lại, nghiền ngẫm kỹ một vấn đề (khẩu ngữ, đọc zuómo).','Phân biệt: đọc zhuómó thì nghĩa là mài giũa (ngọc), trau chuốt (văn chương).'],
   usage:'琢磨 + 问题 / 事 / 怎样……; 苦苦琢磨; 琢磨来琢磨去; 琢磨琢磨 (thử nghĩ xem); 琢磨不透 = không đoán nổi.',
   collo:['苦苦琢磨','琢磨琢磨','琢磨来琢磨去','琢磨不透'],
   ex_zh:'徐健和他的朋友曾苦苦琢磨，怎样为野生动物保护尽一份责任。',ex_py:'Xú Jiàn hé tā de péngyou céng kǔkǔ zuómo, zěnyàng wèi yěshēng dòngwù bǎohù jìn yí fèn zérèn.',ex_vn:'Từ Kiện và bạn bè từng trăn trở nghĩ mãi xem làm sao góp một phần trách nhiệm vào việc bảo vệ động vật hoang dã.',
   exList:[
     {zh:'徐健和他的朋友曾苦苦琢磨，怎样为野生动物保护尽一份责任。',py:'Xú Jiàn hé tā de péngyou céng kǔkǔ zuómo, zěnyàng wèi yěshēng dòngwù bǎohù jìn yí fèn zérèn.',vn:'Từ Kiện và bạn bè từng trăn trở nghĩ mãi xem làm sao góp một phần trách nhiệm vào việc bảo vệ động vật hoang dã.'},
     {zh:'这道数学题我琢磨了一个晚上，终于做出来了。',py:'Zhè dào shùxué tí wǒ zuómole yí ge wǎnshang, zhōngyú zuò chūlái le.',vn:'Bài toán này tôi nghiền ngẫm cả buổi tối, cuối cùng cũng giải ra.'},
     {zh:'他的心思谁也琢磨不透。',py:'Tā de xīnsi shéi yě zuómo bú tòu.',vn:'Tâm tư của anh ta chẳng ai đoán thấu được.'}
   ],
   colloFull:[
     {zh:'苦苦琢磨',py:'kǔkǔ zuómo',vn:'trăn trở nghĩ mãi'},
     {zh:'琢磨琢磨',py:'zuómo zuómo',vn:'thử nghĩ xem'},
     {zh:'琢磨来琢磨去',py:'zuómo lái zuómo qù',vn:'nghĩ tới nghĩ lui'},
     {zh:'琢磨不透',py:'zuómo bú tòu',vn:'không đoán thấu'},
     {zh:'琢磨一下',py:'zuómo yíxià',vn:'suy nghĩ một chút'}
   ],
   patterns:[
     {s:'苦苦琢磨 + 怎样 / 如何 + V',m:'Trăn trở suy nghĩ làm thế nào để …'},
     {s:'琢磨来琢磨去，(最后)……',m:'Nghĩ tới nghĩ lui, (cuối cùng) …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nghĩ tới nghĩ lui, cuối cùng cô ấy quyết định chọn chuyên ngành bảo vệ môi trường.',answer:'琢磨来琢磨去，她最后决定选环保专业。',answerPy:'Zuómo lái zuómo qù, tā zuìhòu juédìng xuǎn huánbǎo zhuānyè.',
      note:'V来V去: làm đi làm lại (lặp nhiều lần); 最后 nêu kết quả.',pair:'V来V去'},
     {promptLang:'vi',prompt:'Việc này cậu thử nghĩ kỹ xem, đừng vội quyết định.',answer:'这件事你再琢磨琢磨，别急着做决定。',answerPy:'Zhè jiàn shì nǐ zài zuómo zuómo, bié jízhe zuò juédìng.',
      note:'Lặp động từ hai âm tiết ABAB (琢磨琢磨) = thử làm một chút; 急着 + V = vội ….',pair:'lặp động từ ABAB'}
   ]},

  {n:19,zh:'昼夜',py:'zhòuyè',pos:'Danh từ',vn:'ngày đêm',hv:'trú dạ',em:'🌗',lesson:1,
   explain:['Ban ngày và ban đêm; một ngày một đêm (24 giờ) — sắc thái văn viết.','Hay gặp: 不分昼夜 (bất kể ngày đêm), 昼夜不停, 昼夜温差 (chênh lệch nhiệt độ ngày đêm).'],
   usage:'不分昼夜 + 地 + V; 昼夜不停 / 昼夜兼程; 昼夜温差; 一个昼夜 = một ngày đêm.',
   collo:['不分昼夜','昼夜不停','昼夜温差','一个昼夜'],
   ex_zh:'他们不分昼夜地奔波。',ex_py:'Tāmen bù fēn zhòuyè de bēnbō.',ex_vn:'Họ bôn ba bất kể ngày đêm.',
   exList:[
     {zh:'他们不分昼夜地奔波，渴望拍出足以使人疯狂的照片。',py:'Tāmen bù fēn zhòuyè de bēnbō, kěwàng pāichū zúyǐ shǐ rén fēngkuáng de zhàopiàn.',vn:'Họ bôn ba bất kể ngày đêm, khao khát chụp được những bức ảnh đủ khiến người ta phát cuồng.'},
     {zh:'新疆的昼夜温差很大，所以那里的水果特别甜。',py:'Xīnjiāng de zhòuyè wēnchā hěn dà, suǒyǐ nàli de shuǐguǒ tèbié tián.',vn:'Tân Cương chênh lệch nhiệt độ ngày đêm rất lớn, nên hoa quả ở đó đặc biệt ngọt.'},
     {zh:'为了救出被困的矿工，救援队伍昼夜不停地工作。',py:'Wèile jiùchū bèi kùn de kuànggōng, jiùyuán duìwu zhòuyè bù tíng de gōngzuò.',vn:'Để cứu những thợ mỏ bị mắc kẹt, đội cứu hộ làm việc không ngừng ngày đêm.'}
   ],
   colloFull:[
     {zh:'不分昼夜',py:'bù fēn zhòuyè',vn:'bất kể ngày đêm'},
     {zh:'昼夜不停',py:'zhòuyè bù tíng',vn:'ngày đêm không nghỉ'},
     {zh:'昼夜温差',py:'zhòuyè wēnchā',vn:'chênh lệch nhiệt độ ngày đêm'},
     {zh:'一个昼夜',py:'yí ge zhòuyè',vn:'một ngày một đêm'},
     {zh:'昼夜兼程',py:'zhòuyè jiānchéng',vn:'đi suốt ngày đêm'}
   ],
   patterns:[
     {s:'不分昼夜地 + V',m:'Làm gì bất kể ngày đêm'},
     {s:'昼夜不停地 + V',m:'Làm gì ngày đêm không ngừng'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Để kịp hoàn thành dự án, cả nhóm làm việc bất kể ngày đêm suốt một tuần.',answer:'为了按时完成项目，整个小组不分昼夜地干了一个星期。',answerPy:'Wèile ànshí wánchéng xiàngmù, zhěnggè xiǎozǔ bù fēn zhòuyè de gànle yí ge xīngqī.',
      note:'为了……: để … (mục đích đặt đầu câu); V + 了 + thời lượng.',pair:'为了……'},
     {promptLang:'vi',prompt:'Sa mạc ban ngày nóng như lò lửa, ban đêm lại lạnh buốt, chênh lệch nhiệt độ ngày đêm cực lớn.',answer:'沙漠白天热得像火炉，晚上却冷得要命，昼夜温差极大。',answerPy:'Shāmò báitiān rè de xiàng huǒlú, wǎnshang què lěng de yàomìng, zhòuyè wēnchā jí dà.',
      note:'Adj + 得 + 像…… / 要命 (bổ ngữ mức độ); 要命 ôn bài 9.',pair:'Adj + 得 + 要命'}
   ]},

  {n:20,zh:'奔波',py:'bēnbō',pos:'Động từ',vn:'bôn ba, bôn tẩu',hv:'bôn ba',em:'🏃',lesson:1,
   explain:['Vất vả chạy đi chạy lại khắp nơi (vì công việc, cuộc sống).','Không mang tân ngữ trực tiếp; hay dùng: 为……奔波, 四处奔波, 奔波于 + nơi chốn.'],
   usage:'为 + việc + 奔波; 四处 / 来回 + 奔波; 奔波于 A 和 B 之间; 不分昼夜地奔波.',
   collo:['四处奔波','为生活奔波','来回奔波','奔波劳累'],
   ex_zh:'他们不分昼夜地奔波。',ex_py:'Tāmen bù fēn zhòuyè de bēnbō.',ex_vn:'Họ bôn ba bất kể ngày đêm.',
   exList:[
     {zh:'他们不分昼夜地奔波，渴望拍出足以使人疯狂的照片。',py:'Tāmen bù fēn zhòuyè de bēnbō, kěwàng pāichū zúyǐ shǐ rén fēngkuáng de zhàopiàn.',vn:'Họ bôn ba bất kể ngày đêm, khao khát chụp được những bức ảnh đủ khiến người ta phát cuồng.'},
     {zh:'为了给孩子治病，父母四处奔波，到处借钱。',py:'Wèile gěi háizi zhìbìng, fùmǔ sìchù bēnbō, dàochù jièqián.',vn:'Để chữa bệnh cho con, cha mẹ bôn ba khắp nơi, đi vay tiền mọi chỗ.'},
     {zh:'她每天奔波于公司和医院之间，累得连饭都顾不上吃。',py:'Tā měi tiān bēnbō yú gōngsī hé yīyuàn zhījiān, lèi de lián fàn dōu gù bu shàng chī.',vn:'Ngày nào cô ấy cũng chạy đi chạy lại giữa công ty và bệnh viện, mệt đến nỗi cơm cũng chẳng kịp ăn.'}
   ],
   colloFull:[
     {zh:'四处奔波',py:'sìchù bēnbō',vn:'bôn ba khắp nơi'},
     {zh:'为生活奔波',py:'wèi shēnghuó bēnbō',vn:'bôn ba vì cuộc sống'},
     {zh:'来回奔波',py:'láihuí bēnbō',vn:'chạy đi chạy lại'},
     {zh:'奔波劳累',py:'bēnbō láolèi',vn:'bôn ba vất vả'},
     {zh:'奔波于……之间',py:'bēnbō yú……zhījiān',vn:'chạy đi chạy lại giữa …'}
   ],
   patterns:[
     {s:'为 + mục đích + (四处)奔波',m:'Bôn ba (khắp nơi) vì …'},
     {s:'奔波于 A 和 B 之间',m:'Chạy đi chạy lại giữa A và B'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bố tôi quanh năm bôn ba bên ngoài vì gia đình, rất ít khi có thời gian ở nhà.',answer:'我爸爸为了这个家常年在外奔波，很少有时间待在家里。',answerPy:'Wǒ bàba wèile zhège jiā chángnián zài wài bēnbō, hěn shǎo yǒu shíjiān dāi zài jiā li.',
      note:'为了 + mục đích + V; 常年 = quanh năm.',pair:'为了……'},
     {promptLang:'vi',prompt:'Tuy ngày nào cũng bôn ba vất vả, nhưng nghĩ đến con là anh ấy thấy mọi thứ đều đáng.',answer:'虽然每天奔波劳累，但一想到孩子，他就觉得一切都值得。',answerPy:'Suīrán měi tiān bēnbō láolèi, dàn yì xiǎngdào háizi, tā jiù juéde yíqiè dōu zhíde.',
      note:'虽然……但……lồng 一……就……: tuy … nhưng hễ … là ….',pair:'虽然……但……'}
   ]},

  {n:21,zh:'渴望',py:'kěwàng',pos:'Động từ',vn:'khát khao, ao ước',hv:'khát vọng',em:'✨',lesson:1,
   explain:['Mong muốn rất tha thiết, rất mạnh mẽ (như khát nước mong được uống).','Mang tân ngữ là danh từ hoặc cụm động từ: 渴望成功, 渴望自由, 渴望拥有……; còn làm danh từ: 对……的渴望.'],
   usage:'渴望 + N / V (成功, 自由, 得到, 拥有); 非常 / 十分 + 渴望; 对……的渴望 (danh từ).',
   collo:['渴望成功','渴望自由','非常渴望','对知识的渴望'],
   ex_zh:'他们渴望拍出足以使人疯狂的照片。',ex_py:'Tāmen kěwàng pāichū zúyǐ shǐ rén fēngkuáng de zhàopiàn.',ex_vn:'Họ khát khao chụp được những bức ảnh đủ khiến người ta phát cuồng.',
   exList:[
     {zh:'他们渴望拍出足以使人疯狂的照片，吸引大家心甘情愿地去购买。',py:'Tāmen kěwàng pāichū zúyǐ shǐ rén fēngkuáng de zhàopiàn, xīyǐn dàjiā xīngān-qíngyuàn de qù gòumǎi.',vn:'Họ khát khao chụp được những bức ảnh đủ khiến người ta phát cuồng, thu hút mọi người cam tâm tình nguyện mua.'},
     {zh:'在忙碌之外，她非常渴望拥有一段属于自己的时间。',py:'Zài mánglù zhīwài, tā fēicháng kěwàng yōngyǒu yí duàn shǔyú zìjǐ de shíjiān.',vn:'Ngoài những bận rộn, cô ấy rất khao khát có được một khoảng thời gian của riêng mình.'},
     {zh:'山区孩子对知识的渴望深深地打动了我。',py:'Shānqū háizi duì zhīshi de kěwàng shēnshēn de dǎdòngle wǒ.',vn:'Khát khao tri thức của trẻ em vùng núi đã làm tôi vô cùng xúc động.'}
   ],
   colloFull:[
     {zh:'渴望成功',py:'kěwàng chénggōng',vn:'khao khát thành công'},
     {zh:'渴望自由',py:'kěwàng zìyóu',vn:'khao khát tự do'},
     {zh:'非常渴望',py:'fēicháng kěwàng',vn:'vô cùng khao khát'},
     {zh:'对知识的渴望',py:'duì zhīshi de kěwàng',vn:'khát khao tri thức'},
     {zh:'渴望得到',py:'kěwàng dédào',vn:'khao khát có được'}
   ],
   patterns:[
     {s:'(非常) 渴望 + V / N',m:'Khao khát được …'},
     {s:'对…… + 的渴望',m:'Niềm khát khao đối với … (danh từ)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Rất nhiều bạn trẻ khao khát được ra ngoài xem thế giới, mở rộng tầm nhìn.',answer:'很多年轻人都渴望到外面去看看世界，开阔视野。',answerPy:'Hěn duō niánqīngrén dōu kěwàng dào wàimiàn qù kànkan shìjiè, kāikuò shìyě.',
      note:'渴望 + cụm động từ; 开阔视野 ôn bài 10.',pair:'渴望 + V'},
     {promptLang:'vi',prompt:'Càng bị bố mẹ quản chặt, cậu ấy lại càng khao khát tự do.',answer:'父母管得越严，他就越渴望自由。',answerPy:'Fùmǔ guǎn de yuè yán, tā jiù yuè kěwàng zìyóu.',
      note:'越……越……: càng … càng …; 就 đứng trước 越 thứ hai.',pair:'越……越……'}
   ]},

  {n:22,zh:'足以',py:'zúyǐ',pos:'Động từ',vn:'đủ để',hv:'túc dĩ',em:'💯',lesson:1,
   explain:['Hoàn toàn có thể, hoàn toàn đủ để (dẫn đến một kết quả) — sắc thái văn viết.','Phía sau là cụm động từ: 足以说明问题, 足以使人……; phủ định: 不足以 + V (không đủ để …).'],
   usage:'足以 + V (说明 / 证明 / 使…… / 满足……); 不足以 + V; ……足以 + V (chủ ngữ là sự việc, con số, chứng cứ).',
   collo:['足以说明','足以证明','足以使人','不足以'],
   ex_zh:'他们渴望拍出足以使人疯狂的照片。',ex_py:'Tāmen kěwàng pāichū zúyǐ shǐ rén fēngkuáng de zhàopiàn.',ex_vn:'Họ khát khao chụp được những bức ảnh đủ khiến người ta phát cuồng.',
   exList:[
     {zh:'他们不分昼夜地奔波，渴望拍出足以使人疯狂的照片。',py:'Tāmen bù fēn zhòuyè de bēnbō, kěwàng pāichū zúyǐ shǐ rén fēngkuáng de zhàopiàn.',vn:'Họ bôn ba bất kể ngày đêm, khao khát chụp được những bức ảnh đủ khiến người ta phát cuồng.'},
     {zh:'这些材料足以说明问题了。',py:'Zhèxiē cáiliào zúyǐ shuōmíng wèntí le.',vn:'Những tài liệu này đủ để nói rõ vấn đề rồi.'},
     {zh:'对这样的坏人不严惩就不足以平民愤。',py:'Duì zhèyàng de huàirén bù yánchéng jiù bù zúyǐ píng mínfèn.',vn:'Không trừng trị nghiêm kẻ xấu như vậy thì không đủ để xoa dịu cơn phẫn nộ của dân chúng.'}
   ],
   colloFull:[
     {zh:'足以说明',py:'zúyǐ shuōmíng',vn:'đủ để chứng tỏ, nói rõ'},
     {zh:'足以证明',py:'zúyǐ zhèngmíng',vn:'đủ để chứng minh'},
     {zh:'足以使人',py:'zúyǐ shǐ rén',vn:'đủ khiến người ta'},
     {zh:'不足以',py:'bù zúyǐ',vn:'không đủ để'},
     {zh:'足以满足',py:'zúyǐ mǎnzú',vn:'đủ để đáp ứng'}
   ],
   patterns:[
     {s:'……足以 + 说明 / 证明 / 使……',m:'… đủ để chứng tỏ / chứng minh / khiến …'},
     {s:'不足以 + V',m:'Không đủ để …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nghe nói số lương thực chúng ta lãng phí mỗi năm đủ cho 500 nghìn người ăn một ngày.',answer:'听说我们一年浪费掉的粮食足以让50万人吃一天。',answerPy:'Tīngshuō wǒmen yì nián làngfèi diào de liángshi zúyǐ ràng wǔshí wàn rén chī yì tiān.',
      note:'足以 + 让 / 使 + người + V: đủ để khiến ai …(练一练 (1) của sách).',pair:'足以 + 让……'},
     {promptLang:'vi',prompt:'Chỉ dựa vào một lần thi thì không đủ để đánh giá năng lực của một học sinh.',answer:'只靠一次考试，不足以评估一个学生的能力。',answerPy:'Zhǐ kào yí cì kǎoshì, bù zúyǐ pínggū yí ge xuésheng de nénglì.',
      note:'不足以 + V: không đủ để …; 评估 = đánh giá (từ của bài).',pair:'不足以 + V'}
   ]},

  {n:23,zh:'心甘情愿',py:'xīngān-qíngyuàn',pos:'Thành ngữ',vn:'cam tâm tình nguyện, cam lòng',hv:'tâm cam tình nguyện',em:'💝',lesson:1,
   explain:['Hoàn toàn tự nguyện, vui lòng làm một việc (dù việc đó vất vả hoặc thiệt thòi), không ai ép buộc.','Làm trạng ngữ (心甘情愿地 + V) hoặc vị ngữ (……是心甘情愿的).'],
   usage:'心甘情愿地 + V; ……是心甘情愿的; 让 / 使 + người + 心甘情愿地 + V.',
   collo:['心甘情愿地去做','心甘情愿地付出','是心甘情愿的','让人心甘情愿'],
   ex_zh:'吸引大家心甘情愿地去购买。',ex_py:'Xīyǐn dàjiā xīngān-qíngyuàn de qù gòumǎi.',ex_vn:'Thu hút mọi người cam tâm tình nguyện đi mua.',
   exList:[
     {zh:'他们渴望拍出足以使人疯狂的照片，吸引大家心甘情愿地去购买。',py:'Tāmen kěwàng pāichū zúyǐ shǐ rén fēngkuáng de zhàopiàn, xīyǐn dàjiā xīngān-qíngyuàn de qù gòumǎi.',vn:'Họ khát khao chụp được những bức ảnh đủ khiến người ta phát cuồng, thu hút mọi người cam tâm tình nguyện mua.'},
     {zh:'他所有的辛劳都是心甘情愿的，换句话说，没有人强迫他。',py:'Tā suǒyǒu de xīnláo dōu shì xīngān-qíngyuàn de, huànjùhuàshuō, méiyǒu rén qiǎngpò tā.',vn:'Mọi vất vả của anh ấy đều là cam tâm tình nguyện, nói cách khác, chẳng ai ép buộc anh ấy.'},
     {zh:'每当他的新书出版，书迷们都会心甘情愿起大早排队去购买。',py:'Měi dāng tā de xīn shū chūbǎn, shūmímen dōu huì xīngān-qíngyuàn qǐ dà zǎo páiduì qù gòumǎi.',vn:'Mỗi khi sách mới của anh ấy ra mắt, người hâm mộ đều cam lòng dậy thật sớm xếp hàng đi mua.'}
   ],
   colloFull:[
     {zh:'心甘情愿地去做',py:'xīngān-qíngyuàn de qù zuò',vn:'cam lòng đi làm'},
     {zh:'心甘情愿地付出',py:'xīngān-qíngyuàn de fùchū',vn:'tự nguyện hy sinh, cống hiến'},
     {zh:'是心甘情愿的',py:'shì xīngān-qíngyuàn de',vn:'là hoàn toàn tự nguyện'},
     {zh:'让人心甘情愿',py:'ràng rén xīngān-qíngyuàn',vn:'khiến người ta cam lòng'},
     {zh:'心甘情愿地等',py:'xīngān-qíngyuàn de děng',vn:'cam lòng chờ đợi'}
   ],
   patterns:[
     {s:'心甘情愿地 + V',m:'Cam tâm tình nguyện làm …'},
     {s:'……(都)是心甘情愿的',m:'… (đều) là hoàn toàn tự nguyện'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vì con cái, cha mẹ cam tâm tình nguyện hy sinh tất cả.',answer:'为了孩子，父母心甘情愿地付出一切。',answerPy:'Wèile háizi, fùmǔ xīngān-qíngyuàn de fùchū yíqiè.',
      note:'心甘情愿地 + V (trạng ngữ, có 地).',pair:'心甘情愿地 + V'},
     {promptLang:'vi',prompt:'Không ai ép tôi cả, việc làm tình nguyện viên là tôi hoàn toàn tự nguyện.',answer:'没有人强迫我，当志愿者是我心甘情愿的。',answerPy:'Méiyǒu rén qiǎngpò wǒ, dāng zhìyuànzhě shì wǒ xīngān-qíngyuàn de.',
      note:'……是……的 nhấn mạnh thái độ; 强迫 ôn bài 4.',pair:'是……的'}
   ]},

  {n:24,zh:'以便',py:'yǐbiàn',pos:'Liên từ',vn:'để, nhằm (để cho dễ)',hv:'dĩ tiện',em:'🎯',lesson:1,
   explain:['Liên từ, đứng ĐẦU VẾ SAU, nêu mục đích: làm việc ở vế trước để việc ở vế sau dễ thực hiện.','Không đứng ở vế trước, không đi cùng 为了 (không nói 为了以便). Sắc thái văn viết. Xem phân biệt 以便 — 便于.'],
   usage:'Vế 1 (hành động)，以便 + vế 2 (mục đích); chủ ngữ vế 2 có thể khác vế 1: ……，以便我们统计人数.',
   collo:['以便联系','以便统计','以便支撑','以便查找'],
   ex_zh:'请在信封上写清地址，以便联系。',ex_py:'Qǐng zài xìnfēng shang xiěqīng dìzhǐ, yǐbiàn liánxì.',ex_vn:'Xin ghi rõ địa chỉ trên phong bì để tiện liên lạc.',
   exList:[
     {zh:'他们渴望拍出畅销的照片，以便支撑他们深入野外的巨大开支。',py:'Tāmen kěwàng pāichū chàngxiāo de zhàopiàn, yǐbiàn zhīchēng tāmen shēnrù yěwài de jùdà kāizhī.',vn:'Họ khao khát chụp được những bức ảnh bán chạy để có tiền trang trải khoản chi phí khổng lồ cho những chuyến đi sâu vào vùng hoang dã.'},
     {zh:'请参加此次活动的人员报一下名，以便我们统计人数。',py:'Qǐng cānjiā cǐ cì huódòng de rényuán bào yíxià míng, yǐbiàn wǒmen tǒngjì rénshù.',vn:'Mời những ai tham gia hoạt động lần này đăng ký tên, để chúng tôi thống kê số người.'},
     {zh:'你先把材料准备好，以便小组开会研究。',py:'Nǐ xiān bǎ cáiliào zhǔnbèi hǎo, yǐbiàn xiǎozǔ kāihuì yánjiū.',vn:'Cậu chuẩn bị sẵn tài liệu trước, để nhóm họp bàn nghiên cứu.'}
   ],
   colloFull:[
     {zh:'以便联系',py:'yǐbiàn liánxì',vn:'để tiện liên lạc'},
     {zh:'以便统计',py:'yǐbiàn tǒngjì',vn:'để thống kê'},
     {zh:'以便支撑',py:'yǐbiàn zhīchēng',vn:'để trang trải, chống đỡ'},
     {zh:'以便查找',py:'yǐbiàn cházhǎo',vn:'để tiện tra tìm'},
     {zh:'以便及时处理',py:'yǐbiàn jíshí chǔlǐ',vn:'để kịp thời xử lý'}
   ],
   patterns:[
     {s:'Hành động，以便 + mục đích',m:'Làm … để (dễ) …'},
     {s:'请……，以便 + 我们 / 大家 + V',m:'Đề nghị …, để chúng tôi / mọi người …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi lưu hết tài liệu ôn tập vào điện thoại, để lúc nào cũng xem được.',answer:'我把复习资料统统存在手机里，以便随时查看。',answerPy:'Wǒ bǎ fùxí zīliào tǒngtǒng cún zài shǒujī li, yǐbiàn suíshí chákàn.',
      note:'以便 đứng đầu vế sau; 把……统统…… ôn bài 11.',pair:'把……统统……'},
     {promptLang:'vi',prompt:'Mời các bạn điền số điện thoại vào bảng, để giáo viên kịp thời liên lạc.',answer:'请同学们在表上填好电话号码，以便老师及时联系。',answerPy:'Qǐng tóngxuémen zài biǎo shang tiánhǎo diànhuà hàomǎ, yǐbiàn lǎoshī jíshí liánxì.',
      note:'Chủ ngữ vế 以便 (老师) khác chủ ngữ vế trước (同学们) — vẫn đúng.',pair:'请……，以便……'}
   ]},

  {n:25,zh:'支撑',py:'zhīchēng',pos:'Động từ',vn:'chống đỡ, gánh vác; chu cấp, trang trải',hv:'chi sanh',em:'🏗️',lesson:1,
   explain:['Nghĩa gốc: chống, đỡ cho vật khỏi đổ: 用木头支撑房顶.','Nghĩa bóng: gắng gượng duy trì; gánh vác, trang trải (chi phí, gia đình, tinh thần): 支撑开支, 支撑一个家.'],
   usage:'支撑 + 房顶 / 身体 / 家庭 / 开支; 靠……支撑; 支撑不住 / 支撑下去; 精神支撑 (chỗ dựa tinh thần).',
   collo:['支撑开支','支撑一个家','支撑不住','精神支撑'],
   ex_zh:'他们想卖照片来支撑深入野外的巨大开支。',ex_py:'Tāmen xiǎng mài zhàopiàn lái zhīchēng shēnrù yěwài de jùdà kāizhī.',ex_vn:'Họ muốn bán ảnh để trang trải khoản chi phí khổng lồ cho những chuyến đi sâu vào vùng hoang dã.',
   exList:[
     {zh:'他们希望靠卖照片支撑深入野外的巨大开支。',py:'Tāmen xīwàng kào mài zhàopiàn zhīchēng shēnrù yěwài de jùdà kāizhī.',vn:'Họ mong dựa vào việc bán ảnh để trang trải khoản chi phí khổng lồ khi đi sâu vào vùng hoang dã.'},
     {zh:'父亲去世后，是母亲一个人支撑起了这个家。',py:'Fùqin qùshì hòu, shì mǔqin yí ge rén zhīchēng qǐle zhège jiā.',vn:'Sau khi cha mất, chính mẹ một mình gánh vác cả gia đình này.'},
     {zh:'他发着高烧坚持工作，最后还是支撑不住倒下了。',py:'Tā fāzhe gāoshāo jiānchí gōngzuò, zuìhòu háishi zhīchēng bú zhù dǎoxià le.',vn:'Anh ấy sốt cao vẫn cố làm việc, cuối cùng không gượng nổi nữa mà gục xuống.'}
   ],
   colloFull:[
     {zh:'支撑开支',py:'zhīchēng kāizhī',vn:'trang trải chi phí'},
     {zh:'支撑一个家',py:'zhīchēng yí ge jiā',vn:'gánh vác một gia đình'},
     {zh:'支撑不住',py:'zhīchēng bú zhù',vn:'không gượng nổi'},
     {zh:'精神支撑',py:'jīngshén zhīchēng',vn:'chỗ dựa tinh thần'},
     {zh:'支撑下去',py:'zhīchēng xiàqù',vn:'gắng gượng duy trì tiếp'}
   ],
   patterns:[
     {s:'靠 + nguồn + 支撑 + 开支 / 家庭',m:'Dựa vào … để trang trải / gánh vác …'},
     {s:'支撑不住 / 支撑下去',m:'Không gượng nổi / gắng gượng tiếp'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ dựa vào đồng lương ít ỏi ấy thì làm sao trang trải nổi chi phí của cả gia đình?',answer:'光靠那一点儿工资，怎么支撑得起全家的开支？',answerPy:'Guāng kào nà yìdiǎnr gōngzī, zěnme zhīchēng de qǐ quán jiā de kāizhī?',
      note:'光靠…… = chỉ dựa vào …; V + 得起 / 不起 (khả năng về tài chính).',pair:'V + 得起'},
     {promptLang:'vi',prompt:'Chính niềm tin ấy đã giúp cô ấy gắng gượng vượt qua quãng thời gian khó khăn nhất.',answer:'正是这个信念，支撑着她度过了最艰难的那段日子。',answerPy:'Zhèng shì zhège xìnniàn, zhīchēngzhe tā dùguòle zuì jiānnán de nà duàn rìzi.',
      note:'正是…… = chính là … (nhấn mạnh chủ ngữ).',pair:'正是……'}
   ]},

  {n:26,zh:'畅销',py:'chàngxiāo',pos:'Động từ',vn:'bán chạy, tiêu thụ mạnh',hv:'sướng tiêu',em:'📈',lesson:1,
   explain:['(Hàng hoá, sách) bán rất chạy, tiêu thụ nhanh.','Hay làm định ngữ: 畅销书, 畅销产品; hoặc vị ngữ: 这本书很畅销, 畅销全国 / 畅销海外. Trái nghĩa: 滞销.'],
   usage:'畅销书 / 畅销产品 / 畅销作家; ……很畅销; 畅销 + 全国 / 海外 / 世界各地.',
   collo:['畅销书','畅销产品','畅销全国','十分畅销'],
   ex_zh:'摄影作品不是畅销书，摄影师报酬很低。',ex_py:'Shèyǐng zuòpǐn bú shì chàngxiāoshū, shèyǐngshī bàochou hěn dī.',ex_vn:'Tác phẩm nhiếp ảnh đâu phải sách bán chạy, thù lao của nhiếp ảnh gia rất thấp.',
   exList:[
     {zh:'但摄影作品不是畅销书，摄影师报酬很低，这样的想法，几近童话。',py:'Dàn shèyǐng zuòpǐn bú shì chàngxiāoshū, shèyǐngshī bàochou hěn dī, zhèyàng de xiǎngfǎ, jījìn tónghuà.',vn:'Nhưng tác phẩm nhiếp ảnh không phải sách bán chạy, thù lao của nhiếp ảnh gia rất thấp, ý tưởng như vậy gần như là chuyện cổ tích.'},
     {zh:'我的朋友是个作家，他写的书很畅销。',py:'Wǒ de péngyou shì ge zuòjiā, tā xiě de shū hěn chàngxiāo.',vn:'Bạn tôi là nhà văn, sách anh ấy viết bán rất chạy.'},
     {zh:'这种国产手机价格合理，已经畅销海外。',py:'Zhè zhǒng guóchǎn shǒujī jiàgé hélǐ, yǐjīng chàngxiāo hǎiwài.',vn:'Loại điện thoại sản xuất trong nước này giá cả hợp lý, đã bán chạy ở nước ngoài.'}
   ],
   colloFull:[
     {zh:'畅销书',py:'chàngxiāoshū',vn:'sách bán chạy'},
     {zh:'畅销产品',py:'chàngxiāo chǎnpǐn',vn:'sản phẩm bán chạy'},
     {zh:'畅销全国',py:'chàngxiāo quánguó',vn:'bán chạy khắp cả nước'},
     {zh:'十分畅销',py:'shífēn chàngxiāo',vn:'bán rất chạy'},
     {zh:'畅销作家',py:'chàngxiāo zuòjiā',vn:'nhà văn có sách bán chạy'}
   ],
   patterns:[
     {s:'畅销 + 书 / 产品 / 作家',m:'… bán chạy (làm định ngữ)'},
     {s:'畅销 + 全国 / 海外 / 世界各地',m:'Bán chạy khắp …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cuốn tiểu thuyết này sở dĩ bán chạy như vậy là vì câu chuyện chạm đến trái tim của rất nhiều người trẻ.',answer:'这本小说之所以这么畅销，是因为它的故事打动了很多年轻人的心。',answerPy:'Zhè běn xiǎoshuō zhīsuǒyǐ zhème chàngxiāo, shì yīnwèi tā de gùshi dǎdòngle hěn duō niánqīngrén de xīn.',
      note:'之所以……是因为……: sở dĩ … là vì ….',pair:'之所以……是因为……'},
     {promptLang:'vi',prompt:'Không những bán chạy khắp cả nước, sản phẩm này còn được xuất khẩu ra nước ngoài.',answer:'这种产品不仅畅销全国，还出口到了国外。',answerPy:'Zhè zhǒng chǎnpǐn bùjǐn chàngxiāo quánguó, hái chūkǒu dàole guówài.',
      note:'不仅……还……: không những … mà còn ….',pair:'不仅……还……'}
   ]},

  {n:27,zh:'报酬',py:'bàochou',pos:'Danh từ',vn:'thù lao, tiền công',hv:'báo thù',em:'💰',lesson:1,
   explain:['Tiền hoặc vật trả cho người đã bỏ công sức, lao động (thù lao).','Hay đi với 高 / 低 / 丰厚 / 得到 / 付给: 报酬很低, 丰厚的报酬. Chú ý: 酬 đọc nhẹ chou trong 报酬.'],
   usage:'报酬 + 很高 / 很低; 得到 / 获得 / 付给 + 报酬; 丰厚的报酬; 不计报酬 = không tính toán thù lao.',
   collo:['报酬很低','丰厚的报酬','得到报酬','不计报酬'],
   ex_zh:'摄影师报酬很低。',ex_py:'Shèyǐngshī bàochou hěn dī.',ex_vn:'Thù lao của nhiếp ảnh gia rất thấp.',
   exList:[
     {zh:'摄影作品不是畅销书，摄影师报酬很低。',py:'Shèyǐng zuòpǐn bú shì chàngxiāoshū, shèyǐngshī bàochou hěn dī.',vn:'Tác phẩm nhiếp ảnh không phải sách bán chạy, thù lao của nhiếp ảnh gia rất thấp.'},
     {zh:'他写的书很畅销，自然他得到的报酬也不少。',py:'Tā xiě de shū hěn chàngxiāo, zìrán tā dédào de bàochou yě bù shǎo.',vn:'Sách anh ấy viết bán rất chạy, đương nhiên thù lao anh ấy nhận được cũng không ít.'},
     {zh:'这些志愿者不计报酬，每个周末都来帮忙。',py:'Zhèxiē zhìyuànzhě bú jì bàochou, měi ge zhōumò dōu lái bāngmáng.',vn:'Những tình nguyện viên này không tính toán thù lao, cuối tuần nào cũng đến giúp.'}
   ],
   colloFull:[
     {zh:'报酬很低',py:'bàochou hěn dī',vn:'thù lao rất thấp'},
     {zh:'丰厚的报酬',py:'fēnghòu de bàochou',vn:'thù lao hậu hĩnh'},
     {zh:'得到报酬',py:'dédào bàochou',vn:'nhận được thù lao'},
     {zh:'不计报酬',py:'bú jì bàochou',vn:'không tính toán thù lao'},
     {zh:'付给报酬',py:'fùgěi bàochou',vn:'trả thù lao'}
   ],
   patterns:[
     {s:'报酬 + 很高 / 很低 / 不少',m:'Thù lao cao / thấp / không ít'},
     {s:'不计报酬地 + V',m:'Làm … không tính toán thù lao'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Công việc này tuy thù lao không cao, nhưng có thể học được rất nhiều thứ.',answer:'这份工作虽然报酬不高，但是能学到很多东西。',answerPy:'Zhè fèn gōngzuò suīrán bàochou bù gāo, dànshì néng xuédào hěn duō dōngxi.',
      note:'虽然……但是……: tuy … nhưng ….',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Bất kể thù lao nhiều hay ít, anh ấy đều làm việc hết sức nghiêm túc.',answer:'不管报酬多少，他都工作得非常认真。',answerPy:'Bùguǎn bàochou duōshao, tā dōu gōngzuò de fēicháng rènzhēn.',
      note:'不管 + 多少 / Adj không Adj……都……: bất kể … đều ….',pair:'不管……都……'}
   ]},

  {n:28,zh:'童话',py:'tónghuà',pos:'Danh từ',vn:'truyện cổ tích, đồng thoại',hv:'đồng thoại',em:'🧚',lesson:1,
   explain:['Thể loại truyện viết cho trẻ em, giàu tưởng tượng, thường có yếu tố thần kỳ.','Nghĩa bóng: điều đẹp đẽ nhưng không thực tế, khó thành hiện thực — 几近童话 (gần như chuyện cổ tích).'],
   usage:'童话故事 / 童话世界 / 童话书; 童话式的 + N (kiểu cổ tích); 几近 / 简直是 + 童话.',
   collo:['童话故事','童话世界','童话式的爱情','几近童话'],
   ex_zh:'这样的想法，几近童话。',ex_py:'Zhèyàng de xiǎngfǎ, jījìn tónghuà.',ex_vn:'Ý tưởng như vậy gần như chuyện cổ tích.',
   exList:[
     {zh:'摄影师报酬很低，靠卖照片支撑开支，这样的想法，几近童话。',py:'Shèyǐngshī bàochou hěn dī, kào mài zhàopiàn zhīchēng kāizhī, zhèyàng de xiǎngfǎ, jījìn tónghuà.',vn:'Thù lao nhiếp ảnh gia rất thấp, dựa vào bán ảnh để trang trải chi phí — ý tưởng như vậy gần như chuyện cổ tích.'},
     {zh:'年轻女孩子喜欢他写的童话式的爱情故事。',py:'Niánqīng nǚháizi xǐhuan tā xiě de tónghuà shì de àiqíng gùshi.',vn:'Các cô gái trẻ thích những câu chuyện tình yêu kiểu cổ tích anh ấy viết.'},
     {zh:'小时候，妈妈每天晚上都给我讲一个童话故事。',py:'Xiǎoshíhou, māma měi tiān wǎnshang dōu gěi wǒ jiǎng yí ge tónghuà gùshi.',vn:'Hồi nhỏ, tối nào mẹ cũng kể cho tôi một câu chuyện cổ tích.'}
   ],
   colloFull:[
     {zh:'童话故事',py:'tónghuà gùshi',vn:'truyện cổ tích'},
     {zh:'童话世界',py:'tónghuà shìjiè',vn:'thế giới cổ tích'},
     {zh:'童话式的爱情',py:'tónghuà shì de àiqíng',vn:'tình yêu kiểu cổ tích'},
     {zh:'几近童话',py:'jījìn tónghuà',vn:'gần như chuyện cổ tích'},
     {zh:'安徒生童话',py:'Āntúshēng tónghuà',vn:'truyện cổ Andersen'}
   ],
   patterns:[
     {s:'童话式的 + N',m:'… kiểu cổ tích (đẹp mà không thực)'},
     {s:'这样的想法 + 几近 / 简直是 + 童话',m:'Ý tưởng ấy gần như / đúng là chuyện cổ tích'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuyết rơi xong, cả thị trấn nhỏ đẹp như thế giới cổ tích.',answer:'下完雪，整个小镇美得像童话世界一样。',answerPy:'Xiàwán xuě, zhěnggè xiǎozhèn měi de xiàng tónghuà shìjiè yíyàng.',
      note:'Adj + 得 + 像……一样: … như ….',pair:'像……一样'},
     {promptLang:'vi',prompt:'Không cố gắng mà muốn đỗ trường đại học danh tiếng thì đúng là chuyện cổ tích.',answer:'不努力就想考上名牌大学，简直是童话。',answerPy:'Bù nǔlì jiù xiǎng kǎoshàng míngpái dàxué, jiǎnzhí shì tónghuà.',
      note:'简直 = quả thực, đúng là (nói quá để nhấn mạnh).',pair:'简直……'}
   ]},

  {n:29,zh:'课题',py:'kètí',pos:'Danh từ',vn:'đề tài, đầu đề (nghiên cứu); vấn đề cần giải quyết',hv:'khoá đề',em:'📋',lesson:1,
   explain:['Đề tài nghiên cứu, thảo luận; nhiệm vụ lớn cần giải quyết.','Hay đi với 研究 / 承担 / 完成 / 重要: 研究课题, 承担课题, 一项重要课题.'],
   usage:'研究 + 课题 / 课题 + 研究; 承担 / 完成 / 申请 + 课题; 各类 / 一项 + 课题; 为……课题提供服务.',
   collo:['研究课题','各类课题','承担课题','一项重要课题'],
   ex_zh:'IBE为保护区、政府等各类课题提供服务。',ex_py:'IBE wèi bǎohùqū, zhèngfǔ děng gè lèi kètí tígōng fúwù.',ex_vn:'IBE cung cấp dịch vụ cho các loại đề tài của khu bảo tồn, chính phủ v.v.',
   exList:[
     {zh:'于是徐健成立了社会企业IBE，为保护区、政府等各类课题提供服务。',py:'Yúshì Xú Jiàn chénglìle shèhuì qǐyè IBE, wèi bǎohùqū, zhèngfǔ děng gè lèi kètí tígōng fúwù.',vn:'Thế là Từ Kiện thành lập doanh nghiệp xã hội IBE, cung cấp dịch vụ cho các loại đề tài của khu bảo tồn, chính phủ v.v.'},
     {zh:'王教授正在带领学生研究一个关于湿地保护的课题。',py:'Wáng jiàoshòu zhèngzài dàilǐng xuésheng yánjiū yí ge guānyú shīdì bǎohù de kètí.',vn:'Giáo sư Vương đang dẫn dắt sinh viên nghiên cứu một đề tài về bảo tồn đất ngập nước.'},
     {zh:'如何保护濒临灭绝的动物，是全人类面临的一项重要课题。',py:'Rúhé bǎohù bīnlín mièjué de dòngwù, shì quán rénlèi miànlín de yí xiàng zhòngyào kètí.',vn:'Làm thế nào bảo vệ các loài động vật có nguy cơ tuyệt chủng là một vấn đề quan trọng mà cả nhân loại đang đối mặt.'}
   ],
   colloFull:[
     {zh:'研究课题',py:'yánjiū kètí',vn:'đề tài nghiên cứu'},
     {zh:'各类课题',py:'gè lèi kètí',vn:'các loại đề tài'},
     {zh:'承担课题',py:'chéngdān kètí',vn:'đảm nhận đề tài'},
     {zh:'一项重要课题',py:'yí xiàng zhòngyào kètí',vn:'một vấn đề quan trọng'},
     {zh:'课题组',py:'kètízǔ',vn:'nhóm đề tài'}
   ],
   patterns:[
     {s:'研究 / 承担 + 一个关于……的课题',m:'Nghiên cứu / đảm nhận một đề tài về …'},
     {s:'……是……面临的一项重要课题',m:'… là vấn đề quan trọng mà … đối mặt'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nhóm chúng tôi chọn một đề tài về ô nhiễm nhựa, dự định hoàn thành trong vòng ba tháng.',answer:'我们小组选了一个关于塑料污染的课题，打算在三个月内完成。',answerPy:'Wǒmen xiǎozǔ xuǎnle yí ge guānyú sùliào wūrǎn de kètí, dǎsuan zài sān ge yuè nèi wánchéng.',
      note:'关于……的 + N: … về …; 在……内: trong vòng ….',pair:'关于……的……'},
     {promptLang:'vi',prompt:'Làm thế nào để học sinh vừa học giỏi vừa khoẻ mạnh là vấn đề mà nhà trường luôn nghiên cứu.',answer:'如何让学生既学得好又身体健康，是学校一直在研究的课题。',answerPy:'Rúhé ràng xuésheng jì xué de hǎo yòu shēntǐ jiànkāng, shì xuéxiào yìzhí zài yánjiū de kètí.',
      note:'既……又……: vừa … vừa …; cụm 如何…… làm chủ ngữ.',pair:'既……又……'}
   ]},

  {n:30,zh:'立体',py:'lìtǐ',pos:'Tính từ',vn:'lập thể, (nhìn) nổi, ba chiều; đa chiều',hv:'lập thể',em:'🧊',lesson:1,
   explain:['Có chiều dài, rộng, cao (ba chiều); có cảm giác nổi khối: 立体电影 (phim 3D), 立体感.','Nghĩa bóng: nhiều mặt, nhiều tầng, toàn diện: 立体还原, 立体交通 (giao thông nhiều tầng).'],
   usage:'立体 + 电影 / 声 / 图形 / 交通; 立体感 (cảm giác nổi); 立体地 / 立体 + V (还原, 展示) = một cách toàn diện, đa chiều.',
   collo:['立体还原','立体电影','立体感','立体交通'],
   ex_zh:'他们要立体还原一个地区的生态多样性。',ex_py:'Tāmen yào lìtǐ huányuán yí ge dìqū de shēngtài duōyàngxìng.',ex_vn:'Họ muốn tái hiện một cách đa chiều sự đa dạng sinh thái của một vùng.',
   exList:[
     {zh:'他们的工作是建立野生动植物影像库，立体还原一个地区的生态多样性。',py:'Tāmen de gōngzuò shì jiànlì yěshēng dòng-zhíwù yǐngxiàngkù, lìtǐ huányuán yí ge dìqū de shēngtài duōyàngxìng.',vn:'Công việc của họ là xây dựng kho hình ảnh động thực vật hoang dã, tái hiện một cách đa chiều sự đa dạng sinh thái của một vùng.'},
     {zh:'这幅画的立体感很强，好像人物要从画里走出来。',py:'Zhè fú huà de lìtǐgǎn hěn qiáng, hǎoxiàng rénwù yào cóng huà li zǒu chūlái.',vn:'Bức tranh này cảm giác nổi khối rất mạnh, như thể nhân vật sắp bước ra khỏi tranh.'},
     {zh:'周末我们去电影院看了一部立体电影。',py:'Zhōumò wǒmen qù diànyǐngyuàn kànle yí bù lìtǐ diànyǐng.',vn:'Cuối tuần chúng tôi đến rạp xem một bộ phim 3D.'}
   ],
   colloFull:[
     {zh:'立体还原',py:'lìtǐ huányuán',vn:'tái hiện đa chiều'},
     {zh:'立体电影',py:'lìtǐ diànyǐng',vn:'phim 3D, phim nổi'},
     {zh:'立体感',py:'lìtǐgǎn',vn:'cảm giác nổi khối'},
     {zh:'立体交通',py:'lìtǐ jiāotōng',vn:'giao thông nhiều tầng'},
     {zh:'立体声',py:'lìtǐshēng',vn:'âm thanh nổi (stereo)'}
   ],
   patterns:[
     {s:'立体 + 还原 / 展示 + N',m:'Tái hiện / giới thiệu … một cách đa chiều'},
     {s:'……的立体感 + 很强',m:'… có cảm giác nổi khối rõ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nhờ công nghệ 3D, bảo tàng tái hiện một cách sinh động cuộc sống của người xưa.',answer:'借助三维技术，博物馆立体地还原了古人的生活。',answerPy:'Jièzhù sānwéi jìshù, bówùguǎn lìtǐ de huányuánle gǔrén de shēnghuó.',
      note:'借助…… = nhờ vào (công cụ, phương tiện) — ôn bài 5.',pair:'借助……'},
     {promptLang:'vi',prompt:'Bức ảnh này chụp rất có chiều sâu, như thể ngọn núi ở ngay trước mắt.',answer:'这张照片拍得很有立体感，好像那座山就在眼前。',answerPy:'Zhè zhāng zhàopiàn pāi de hěn yǒu lìtǐgǎn, hǎoxiàng nà zuò shān jiù zài yǎnqián.',
      note:'V + 得 + 很有……; 好像…… = như thể ….',pair:'好像……'}
   ]},

  {n:31,zh:'还原',py:'huán yuán',pos:'Động từ',vn:'khôi phục, hồi phục lại trạng thái hoặc hình dạng ban đầu; tái hiện',hv:'hoàn nguyên',em:'🔄',lesson:1,
   explain:['Làm cho sự vật trở lại trạng thái, hình dạng ban đầu.','Nghĩa rộng: tái hiện chân thực (sự việc, cảnh vật đã qua): 还原历史, 还原真相. Chú ý 还 đọc huán.'],
   usage:'还原 + 历史 / 真相 / 现场 / 生态; 把……还原成……; 立体 / 真实地 + 还原.',
   collo:['还原真相','还原历史','还原现场','立体还原'],
   ex_zh:'立体还原一个地区的生态多样性。',ex_py:'Lìtǐ huányuán yí ge dìqū de shēngtài duōyàngxìng.',ex_vn:'Tái hiện đa chiều sự đa dạng sinh thái của một vùng.',
   exList:[
     {zh:'他们的工作是建立影像库，立体还原一个地区的生态多样性。',py:'Tāmen de gōngzuò shì jiànlì yǐngxiàngkù, lìtǐ huányuán yí ge dìqū de shēngtài duōyàngxìng.',vn:'Công việc của họ là xây dựng kho hình ảnh, tái hiện đa chiều sự đa dạng sinh thái của một vùng.'},
     {zh:'警察通过监控录像还原了事故现场。',py:'Jǐngchá tōngguò jiānkòng lùxiàng huányuánle shìgù xiànchǎng.',vn:'Cảnh sát dựa vào video giám sát để dựng lại hiện trường vụ tai nạn.'},
     {zh:'这部电影真实地还原了那段历史。',py:'Zhè bù diànyǐng zhēnshí de huányuánle nà duàn lìshǐ.',vn:'Bộ phim này đã tái hiện chân thực giai đoạn lịch sử ấy.'}
   ],
   colloFull:[
     {zh:'还原真相',py:'huányuán zhēnxiàng',vn:'làm sáng tỏ sự thật'},
     {zh:'还原历史',py:'huányuán lìshǐ',vn:'tái hiện lịch sử'},
     {zh:'还原现场',py:'huányuán xiànchǎng',vn:'dựng lại hiện trường'},
     {zh:'立体还原',py:'lìtǐ huányuán',vn:'tái hiện đa chiều'},
     {zh:'还原成原样',py:'huányuán chéng yuányàng',vn:'khôi phục như cũ'}
   ],
   patterns:[
     {s:'(真实地 / 立体) + 还原 + 历史 / 真相 / 现场',m:'Tái hiện (chân thực / đa chiều) …'},
     {s:'把 + N + 还原成 + 原样',m:'Khôi phục … về như cũ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ có tìm hiểu tường tận mọi chi tiết thì mới có thể làm sáng tỏ sự thật.',answer:'只有把每个细节都了解清楚，才能还原事情的真相。',answerPy:'Zhǐyǒu bǎ měi ge xìjié dōu liǎojiě qīngchu, cái néng huányuán shìqing de zhēnxiàng.',
      note:'只有……才……: chỉ có … mới … (điều kiện duy nhất).',pair:'只有……才……'},
     {promptLang:'vi',prompt:'Các nhà khảo cổ dựa vào những mảnh vỡ này để khôi phục chiếc bình cổ về như cũ.',answer:'考古学家根据这些碎片，把古瓶还原成了原来的样子。',answerPy:'Kǎogǔxuéjiā gēnjù zhèxiē suìpiàn, bǎ gǔpíng huányuán chéngle yuánlái de yàngzi.',
      note:'把 + O + 还原成 + kết quả; 根据…… = dựa vào ….',pair:'把……V成……'}
   ]},

  {n:32,zh:'名副其实',py:'míngfùqíshí',pos:'Thành ngữ',vn:'danh xứng với thực, xứng danh',hv:'danh phó kỳ thực',em:'🏅',lesson:1,
   explain:['Danh tiếng, tên gọi phù hợp với thực tế; đúng là, xứng đáng là (名 = tên, 副 = phù hợp, 实 = thực).','Hay làm định ngữ: 名副其实的 + N (博物学家, 冠军); trái nghĩa: 名不副实 (hữu danh vô thực).'],
   usage:'名副其实的 + N; ……真是名副其实; 是 + 名副其实的 + N.',
   collo:['名副其实的博物学家','名副其实的冠军','真是名副其实','名不副实'],
   ex_zh:'IBE的摄影师个个是名副其实的博物学家。',ex_py:'IBE de shèyǐngshī gègè shì míngfùqíshí de bówùxuéjiā.',ex_vn:'Nhiếp ảnh gia của IBE ai cũng là nhà vạn vật học đúng nghĩa.',
   exList:[
     {zh:'IBE的摄影师个个是名副其实的博物学家，不但有高超的摄影技术，还有非同一般的专业素质。',py:'IBE de shèyǐngshī gègè shì míngfùqíshí de bówùxuéjiā, búdàn yǒu gāochāo de shèyǐng jìshù, hái yǒu fēitóng-yìbān de zhuānyè sùzhì.',vn:'Nhiếp ảnh gia của IBE ai cũng là nhà vạn vật học đúng nghĩa, không những có kỹ thuật chụp ảnh tuyệt vời mà còn có tố chất chuyên môn khác thường.'},
     {zh:'他对中国非常了解，是个名副其实的中国通。',py:'Tā duì Zhōngguó fēicháng liǎojiě, shì ge míngfùqíshí de Zhōngguótōng.',vn:'Anh ấy rất am hiểu Trung Quốc, đúng là một "người thông thạo Trung Quốc" thực thụ.'},
     {zh:'这座城市四季都开满鲜花，“花城”这个名字真是名副其实。',py:'Zhè zuò chéngshì sìjì dōu kāimǎn xiānhuā, "Huāchéng" zhège míngzi zhēn shì míngfùqíshí.',vn:'Thành phố này bốn mùa hoa nở khắp nơi, cái tên "Thành phố hoa" quả là danh xứng với thực.'}
   ],
   colloFull:[
     {zh:'名副其实的博物学家',py:'míngfùqíshí de bówùxuéjiā',vn:'nhà vạn vật học đúng nghĩa'},
     {zh:'名副其实的冠军',py:'míngfùqíshí de guànjūn',vn:'nhà vô địch xứng đáng'},
     {zh:'真是名副其实',py:'zhēn shì míngfùqíshí',vn:'quả là danh xứng với thực'},
     {zh:'名不副实',py:'míng bú fù shí',vn:'hữu danh vô thực'},
     {zh:'名副其实的中国通',py:'míngfùqíshí de Zhōngguótōng',vn:'người am hiểu Trung Quốc thực thụ'}
   ],
   patterns:[
     {s:'是 + 名副其实的 + N',m:'Là … đúng nghĩa, thực thụ'},
     {s:'“……”这个名字 / 称号 + 真是名副其实',m:'Cái tên / danh hiệu … quả là xứng đáng'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cậu ấy vừa học giỏi vừa hay giúp người, đúng là một lớp trưởng xứng danh.',answer:'他既学习好又乐于助人，真是一个名副其实的班长。',answerPy:'Tā jì xuéxí hǎo yòu lèyú zhùrén, zhēn shì yí ge míngfùqíshí de bānzhǎng.',
      note:'既……又……: vừa … vừa …; 名副其实的 + N.',pair:'既……又……'},
     {promptLang:'vi',prompt:'Nhà hàng này tiếng tăm rất lớn, nhưng món ăn lại rất bình thường, có thể nói là hữu danh vô thực.',answer:'这家饭馆名气很大，菜却很一般，可以说是名不副实。',answerPy:'Zhè jiā fànguǎn míngqi hěn dà, cài què hěn yìbān, kěyǐ shuō shì míng bú fù shí.',
      note:'……，却……: chuyển ý bất ngờ; 可以说是…… = có thể nói là ….',pair:'却……'}
   ]},

  {n:33,zh:'高超',py:'gāochāo',pos:'Tính từ',vn:'cao siêu, tuyệt vời, điêu luyện',hv:'cao siêu',em:'🎖️',lesson:1,
   explain:['(Kỹ thuật, tay nghề, trình độ) giỏi vượt bậc, hơn hẳn người thường.','Hay đi với 技术 / 技艺 / 医术 / 水平 / 本领; ít dùng cho người trực tiếp (không nói 他很高超).'],
   usage:'技术 / 技艺 / 医术 / 水平 + 高超; 高超的 + 技术 / 本领 / 演技.',
   collo:['技术高超','高超的摄影技术','医术高超','高超的演技'],
   ex_zh:'他们不但有高超的摄影技术，还有非同一般的专业素质。',ex_py:'Tāmen búdàn yǒu gāochāo de shèyǐng jìshù, hái yǒu fēitóng-yìbān de zhuānyè sùzhì.',ex_vn:'Họ không những có kỹ thuật chụp ảnh tuyệt vời, mà còn có tố chất chuyên môn khác thường.',
   exList:[
     {zh:'IBE的摄影师不但有高超的摄影技术，还有非同一般的专业素质。',py:'IBE de shèyǐngshī búdàn yǒu gāochāo de shèyǐng jìshù, hái yǒu fēitóng-yìbān de zhuānyè sùzhì.',vn:'Nhiếp ảnh gia của IBE không những có kỹ thuật chụp ảnh tuyệt vời, mà còn có tố chất chuyên môn khác thường.'},
     {zh:'她对摄影有浓厚的兴趣，而且拍摄技术高超。',py:'Tā duì shèyǐng yǒu nónghòu de xìngqù, érqiě pāishè jìshù gāochāo.',vn:'Cô ấy rất đam mê nhiếp ảnh, hơn nữa kỹ thuật chụp rất điêu luyện.'},
     {zh:'这位老中医医术高超，治好了很多疑难病。',py:'Zhè wèi lǎo zhōngyī yīshù gāochāo, zhìhǎole hěn duō yínánbìng.',vn:'Vị lương y già này y thuật cao siêu, đã chữa khỏi rất nhiều bệnh nan y.'}
   ],
   colloFull:[
     {zh:'技术高超',py:'jìshù gāochāo',vn:'kỹ thuật điêu luyện'},
     {zh:'高超的摄影技术',py:'gāochāo de shèyǐng jìshù',vn:'kỹ thuật nhiếp ảnh tuyệt vời'},
     {zh:'医术高超',py:'yīshù gāochāo',vn:'y thuật cao siêu'},
     {zh:'高超的演技',py:'gāochāo de yǎnjì',vn:'diễn xuất xuất sắc'},
     {zh:'技艺高超',py:'jìyì gāochāo',vn:'tay nghề điêu luyện'}
   ],
   patterns:[
     {s:'技术 / 医术 / 技艺 + 高超',m:'Tay nghề … điêu luyện'},
     {s:'高超的 + 技术 / 本领 / 演技',m:'… xuất sắc, cao siêu'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chính nhờ tay nghề điêu luyện của bác sĩ Vương mà ca phẫu thuật mới thành công.',answer:'正是因为王医生医术高超，手术才取得了成功。',answerPy:'Zhèng shì yīnwèi Wáng yīshēng yīshù gāochāo, shǒushù cái qǔdéle chénggōng.',
      note:'正是因为……才……: chính vì … mới ….',pair:'正是因为……才……'},
     {promptLang:'vi',prompt:'Diễn viên này tuy trẻ nhưng diễn xuất xuất sắc, khán giả ai cũng bị cuốn hút.',answer:'这位演员虽然年轻，但演技高超，观众都被他吸引住了。',answerPy:'Zhè wèi yǎnyuán suīrán niánqīng, dàn yǎnjì gāochāo, guānzhòng dōu bèi tā xīyǐn zhù le.',
      note:'Câu 被 + V + 住 (bổ ngữ kết quả: giữ chặt).',pair:'被……V住'}
   ]},

  {n:34,zh:'素质',py:'sùzhì',pos:'Danh từ',vn:'tố chất, năng lực, phẩm chất',hv:'tố chất',em:'🧠',lesson:1,
   explain:['Phẩm chất, năng lực vốn có hoặc được rèn luyện của một người (sức khoẻ, đạo đức, chuyên môn…).','Hay gặp: 专业素质, 身体素质, 心理素质, 综合素质; 素质高 / 低, 提高素质.'],
   usage:'专业 / 身体 / 心理 / 综合 + 素质; 素质 + 高 / 低; 提高 + 素质; 有素质 / 没素质 (khẩu ngữ: có văn hoá / vô văn hoá).',
   collo:['专业素质','身体素质','心理素质','提高素质'],
   ex_zh:'他们还有非同一般的专业素质。',ex_py:'Tāmen hái yǒu fēitóng-yìbān de zhuānyè sùzhì.',ex_vn:'Họ còn có tố chất chuyên môn khác thường.',
   exList:[
     {zh:'他们不但有高超的摄影技术，还有非同一般的专业素质。',py:'Tāmen búdàn yǒu gāochāo de shèyǐng jìshù, hái yǒu fēitóng-yìbān de zhuānyè sùzhì.',vn:'Họ không những có kỹ thuật chụp ảnh tuyệt vời, mà còn có tố chất chuyên môn khác thường.'},
     {zh:'考试时心理素质很重要，太紧张就容易出错。',py:'Kǎoshì shí xīnlǐ sùzhì hěn zhòngyào, tài jǐnzhāng jiù róngyì chūcuò.',vn:'Khi thi, bản lĩnh tâm lý rất quan trọng, căng thẳng quá thì dễ mắc lỗi.'},
     {zh:'经常锻炼可以提高身体素质。',py:'Jīngcháng duànliàn kěyǐ tígāo shēntǐ sùzhì.',vn:'Thường xuyên tập luyện có thể nâng cao thể chất.'}
   ],
   colloFull:[
     {zh:'专业素质',py:'zhuānyè sùzhì',vn:'tố chất chuyên môn'},
     {zh:'身体素质',py:'shēntǐ sùzhì',vn:'thể chất'},
     {zh:'心理素质',py:'xīnlǐ sùzhì',vn:'bản lĩnh tâm lý'},
     {zh:'提高素质',py:'tígāo sùzhì',vn:'nâng cao tố chất'},
     {zh:'综合素质',py:'zōnghé sùzhì',vn:'tố chất tổng hợp'}
   ],
   patterns:[
     {s:'专业 / 身体 / 心理 + 素质 + 高 / 好',m:'Tố chất chuyên môn / thể chất / tâm lý tốt'},
     {s:'提高 + ……素质',m:'Nâng cao tố chất …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Một vận động viên giỏi không những phải có thể chất tốt mà còn phải có bản lĩnh tâm lý vững vàng.',answer:'一个优秀的运动员不仅要有很好的身体素质，还要有过硬的心理素质。',answerPy:'Yí ge yōuxiù de yùndòngyuán bùjǐn yào yǒu hěn hǎo de shēntǐ sùzhì, hái yào yǒu guòyìng de xīnlǐ sùzhì.',
      note:'不仅……还……: không những … mà còn …; 过硬 = vững vàng.',pair:'不仅……还……'},
     {promptLang:'vi',prompt:'Nhà trường không chỉ coi trọng điểm số, mà còn chú trọng nâng cao tố chất tổng hợp của học sinh.',answer:'学校不只看重分数，更注重提高学生的综合素质。',answerPy:'Xuéxiào bù zhǐ kànzhòng fēnshù, gèng zhùzhòng tígāo xuésheng de zōnghé sùzhì.',
      note:'不只……，更……: không chỉ …, mà càng … (tăng tiến).',pair:'不只……更……'}
   ]},

  {n:35,zh:'号召',py:'hàozhào',pos:'Động từ',vn:'hiệu triệu, kêu gọi',hv:'hiệu triệu',em:'📣',lesson:1,
   explain:['(Chính phủ, tổ chức, người có uy tín) kêu gọi mọi người cùng làm một việc chung.','Còn làm danh từ: 发出号召 (phát lời kêu gọi), 响应号召 (hưởng ứng lời kêu gọi).'],
   usage:'号召 + người + V (号召大家节约用水); 发出 / 响应 + 号召; 在……的号召下.',
   collo:['发出号召','响应号召','号召大家','在……的号召下'],
   ex_zh:'徐健一发出号召，大家立刻聚在一起。',ex_py:'Xú Jiàn yì fāchū hàozhào, dàjiā lìkè jù zài yìqǐ.',ex_vn:'Từ Kiện vừa phát lời kêu gọi, mọi người lập tức tụ họp lại.',
   exList:[
     {zh:'他们分散在全国各地，徐健一发出号召，大家立刻聚在一起。',py:'Tāmen fēnsàn zài quánguó gèdì, Xú Jiàn yì fāchū hàozhào, dàjiā lìkè jù zài yìqǐ.',vn:'Họ phân tán khắp cả nước, Từ Kiện vừa phát lời kêu gọi là mọi người lập tức tụ họp lại.'},
     {zh:'学校号召全体同学节约用水、用电。',py:'Xuéxiào hàozhào quántǐ tóngxué jiéyuē yòng shuǐ, yòng diàn.',vn:'Nhà trường kêu gọi toàn thể học sinh tiết kiệm nước, tiết kiệm điện.'},
     {zh:'在政府的号召下，很多年轻人回到家乡创业。',py:'Zài zhèngfǔ de hàozhào xià, hěn duō niánqīngrén huídào jiāxiāng chuàngyè.',vn:'Hưởng ứng lời kêu gọi của chính phủ, nhiều người trẻ đã về quê khởi nghiệp.'}
   ],
   colloFull:[
     {zh:'发出号召',py:'fāchū hàozhào',vn:'phát lời kêu gọi'},
     {zh:'响应号召',py:'xiǎngyìng hàozhào',vn:'hưởng ứng lời kêu gọi'},
     {zh:'号召大家',py:'hàozhào dàjiā',vn:'kêu gọi mọi người'},
     {zh:'在……的号召下',py:'zài……de hàozhào xià',vn:'dưới lời kêu gọi của …'},
     {zh:'号召力',py:'hàozhàolì',vn:'sức hiệu triệu'}
   ],
   patterns:[
     {s:'号召 + người + V',m:'Kêu gọi ai làm gì'},
     {s:'在 + ……的号召下，……',m:'Hưởng ứng lời kêu gọi của …, …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Hưởng ứng lời kêu gọi của nhà trường, lớp chúng tôi mỗi tuần đều đi nhặt rác ở công viên.',answer:'响应学校的号召，我们班每个星期都去公园捡垃圾。',answerPy:'Xiǎngyìng xuéxiào de hàozhào, wǒmen bān měi ge xīngqī dōu qù gōngyuán jiǎn lājī.',
      note:'响应号召 = hưởng ứng lời kêu gọi; 每……都…….',pair:'每……都……'},
     {promptLang:'vi',prompt:'Lớp trưởng vừa kêu gọi, cả lớp liền tích cực quyên góp sách cho trẻ em vùng núi.',answer:'班长一号召，全班同学就积极地为山区孩子捐书。',answerPy:'Bānzhǎng yí hàozhào, quán bān tóngxué jiù jījí de wèi shānqū háizi juān shū.',
      note:'一……就……; 为 + người + V: làm gì cho ai.',pair:'一……就……'}
   ]},

  {n:36,zh:'证实',py:'zhèngshí',pos:'Động từ',vn:'chứng thực, xác nhận',hv:'chứng thực',em:'✔️',lesson:1,
   explain:['Chứng minh, xác nhận một điều là đúng sự thật (thường nhờ thực tế, số liệu, điều tra).','Hay gặp: 实践证实 (thực tiễn chứng minh), 已经证实, 得到证实 (được xác nhận).'],
   usage:'实践 / 事实 / 研究 + 证实 + 了……; ……已经得到证实; 有待证实 = còn chờ xác nhận.',
   collo:['实践证实','得到证实','已经证实','有待证实'],
   ex_zh:'实践证实，这种集合式工作成效显著。',ex_py:'Shíjiàn zhèngshí, zhè zhǒng jíhé shì gōngzuò chéngxiào xiǎnzhù.',ex_vn:'Thực tiễn chứng minh cách làm việc tập hợp này mang lại hiệu quả rõ rệt.',
   exList:[
     {zh:'实践证实，这种集合式工作成效显著，用户也很喜欢他们的作品。',py:'Shíjiàn zhèngshí, zhè zhǒng jíhé shì gōngzuò chéngxiào xiǎnzhù, yònghù yě hěn xǐhuan tāmen de zuòpǐn.',vn:'Thực tiễn chứng minh cách làm việc tập hợp này hiệu quả rõ rệt, người dùng cũng rất thích tác phẩm của họ.'},
     {zh:'这个消息已经得到了官方的证实。',py:'Zhège xiāoxi yǐjīng dédàole guānfāng de zhèngshí.',vn:'Tin này đã được phía chính thức xác nhận.'},
     {zh:'网上的说法有待证实，大家先别急着转发。',py:'Wǎngshang de shuōfǎ yǒudài zhèngshí, dàjiā xiān bié jízhe zhuǎnfā.',vn:'Thông tin trên mạng còn chờ xác nhận, mọi người đừng vội chia sẻ.'}
   ],
   colloFull:[
     {zh:'实践证实',py:'shíjiàn zhèngshí',vn:'thực tiễn chứng minh'},
     {zh:'得到证实',py:'dédào zhèngshí',vn:'được xác nhận'},
     {zh:'已经证实',py:'yǐjīng zhèngshí',vn:'đã được chứng thực'},
     {zh:'有待证实',py:'yǒudài zhèngshí',vn:'còn chờ xác nhận'},
     {zh:'证实了猜测',py:'zhèngshíle cāicè',vn:'xác nhận phỏng đoán'}
   ],
   patterns:[
     {s:'实践 / 研究 / 事实 + 证实，……',m:'Thực tiễn / nghiên cứu / sự thật chứng minh rằng …'},
     {s:'……(已经)得到(了)证实',m:'… đã được xác nhận'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nghiên cứu chứng minh rằng, ngủ không đủ giấc sẽ ảnh hưởng đến hiệu quả học tập.',answer:'研究证实，睡眠不足会影响学习效率。',answerPy:'Yánjiū zhèngshí, shuìmián bùzú huì yǐngxiǎng xuéxí xiàolǜ.',
      note:'研究证实，+ mệnh đề: cách mở đầu câu nghị luận.',pair:'研究证实……'},
     {promptLang:'vi',prompt:'Tin đồn ấy sau này được chứng thực là hoàn toàn bịa đặt.',answer:'那个传言后来被证实是完全编造的。',answerPy:'Nà ge chuányán hòulái bèi zhèngshí shì wánquán biānzào de.',
      note:'被证实 + 是……: bị / được chứng thực là ….',pair:'被 + V'}
   ]},

  {n:37,zh:'成效',py:'chéngxiào',pos:'Danh từ',vn:'hiệu quả, công hiệu, thành quả',hv:'thành hiệu',em:'📊',lesson:1,
   explain:['Hiệu quả, kết quả đạt được sau khi làm việc gì (thường là kết quả tốt).','Hay đi với 显著 / 明显 / 取得 / 初见: 成效显著, 取得成效, 初见成效 (bước đầu có hiệu quả).'],
   usage:'成效 + 显著 / 明显; 取得 + 成效; 初见成效; 很有成效; 成效不大.',
   collo:['成效显著','取得成效','初见成效','很有成效'],
   ex_zh:'这种集合式工作成效显著。',ex_py:'Zhè zhǒng jíhé shì gōngzuò chéngxiào xiǎnzhù.',ex_vn:'Cách làm việc tập hợp này có hiệu quả rõ rệt.',
   exList:[
     {zh:'实践证实，这种集合式工作成效显著。',py:'Shíjiàn zhèngshí, zhè zhǒng jíhé shì gōngzuò chéngxiào xiǎnzhù.',vn:'Thực tiễn chứng minh cách làm việc tập hợp này có hiệu quả rõ rệt.'},
     {zh:'经过一年的治理，这条河的污染问题已经初见成效。',py:'Jīngguò yì nián de zhìlǐ, zhè tiáo hé de wūrǎn wèntí yǐjīng chū jiàn chéngxiào.',vn:'Sau một năm xử lý, vấn đề ô nhiễm của con sông này đã bước đầu có hiệu quả.'},
     {zh:'他换了几种学习方法，可是成效都不大。',py:'Tā huànle jǐ zhǒng xuéxí fāngfǎ, kěshì chéngxiào dōu bú dà.',vn:'Cậu ấy đổi mấy cách học rồi, nhưng hiệu quả đều không lớn.'}
   ],
   colloFull:[
     {zh:'成效显著',py:'chéngxiào xiǎnzhù',vn:'hiệu quả rõ rệt'},
     {zh:'取得成效',py:'qǔdé chéngxiào',vn:'đạt hiệu quả'},
     {zh:'初见成效',py:'chū jiàn chéngxiào',vn:'bước đầu có hiệu quả'},
     {zh:'很有成效',py:'hěn yǒu chéngxiào',vn:'rất có hiệu quả'},
     {zh:'成效不大',py:'chéngxiào bú dà',vn:'hiệu quả không lớn'}
   ],
   patterns:[
     {s:'……(工作 / 方法) + 成效显著',m:'… có hiệu quả rõ rệt'},
     {s:'经过……，……已经初见成效',m:'Sau …, … đã bước đầu có hiệu quả'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Sau ba tháng kiên trì, phương pháp học từ vựng mới của cậu ấy đã bước đầu có hiệu quả.',answer:'经过三个月的坚持，他背单词的新方法已经初见成效。',answerPy:'Jīngguò sān ge yuè de jiānchí, tā bèi dāncí de xīn fāngfǎ yǐjīng chū jiàn chéngxiào.',
      note:'经过……，…… = sau (một quá trình) …; 初见成效.',pair:'经过……'},
     {promptLang:'vi',prompt:'Chỉ khi tìm đúng phương pháp thì làm việc mới có thể đạt hiệu quả rõ rệt.',answer:'只有找对了方法，工作才能取得显著的成效。',answerPy:'Zhǐyǒu zhǎoduìle fāngfǎ, gōngzuò cái néng qǔdé xiǎnzhù de chéngxiào.',
      note:'只有……才……: chỉ khi … mới ….',pair:'只有……才……'}
   ]},

  {n:38,zh:'显著',py:'xiǎnzhù',pos:'Tính từ',vn:'rõ rệt, nổi bật',hv:'hiển trứ',em:'🔆',lesson:1,
   explain:['Rất rõ ràng, dễ thấy, nổi bật (thường nói về hiệu quả, thay đổi, thành tích).','Trang trọng hơn 明显; hay đi với 成效 / 效果 / 变化 / 提高 / 成绩: 成效显著, 显著的变化, 显著提高.'],
   usage:'成效 / 效果 / 变化 + 显著; 显著的 + 变化 / 成绩; 显著 + 提高 / 增加 / 改善 (làm trạng ngữ).',
   collo:['成效显著','显著的变化','显著提高','效果显著'],
   ex_zh:'这种集合式工作成效显著。',ex_py:'Zhè zhǒng jíhé shì gōngzuò chéngxiào xiǎnzhù.',ex_vn:'Cách làm việc tập hợp này có hiệu quả rõ rệt.',
   exList:[
     {zh:'实践证实，这种集合式工作成效显著，用户也很喜欢他们的作品。',py:'Shíjiàn zhèngshí, zhè zhǒng jíhé shì gōngzuò chéngxiào xiǎnzhù, yònghù yě hěn xǐhuan tāmen de zuòpǐn.',vn:'Thực tiễn chứng minh cách làm việc tập hợp này có hiệu quả rõ rệt, người dùng cũng rất thích tác phẩm của họ.'},
     {zh:'这几年，家乡的面貌发生了显著的变化。',py:'Zhè jǐ nián, jiāxiāng de miànmào fāshēngle xiǎnzhù de biànhuà.',vn:'Mấy năm nay, diện mạo quê hương đã có những thay đổi rõ rệt.'},
     {zh:'自从换了学习方法，他的成绩显著提高了。',py:'Zìcóng huànle xuéxí fāngfǎ, tā de chéngjì xiǎnzhù tígāo le.',vn:'Từ khi đổi phương pháp học, thành tích của cậu ấy đã nâng lên rõ rệt.'}
   ],
   colloFull:[
     {zh:'成效显著',py:'chéngxiào xiǎnzhù',vn:'hiệu quả rõ rệt'},
     {zh:'显著的变化',py:'xiǎnzhù de biànhuà',vn:'thay đổi rõ rệt'},
     {zh:'显著提高',py:'xiǎnzhù tígāo',vn:'nâng cao rõ rệt'},
     {zh:'效果显著',py:'xiàoguǒ xiǎnzhù',vn:'hiệu quả rõ ràng'},
     {zh:'显著的特点',py:'xiǎnzhù de tèdiǎn',vn:'đặc điểm nổi bật'}
   ],
   patterns:[
     {s:'成效 / 效果 / 变化 + 显著',m:'… rõ rệt (làm vị ngữ)'},
     {s:'显著 + 提高 / 增加 / 改善',m:'Tăng / cải thiện rõ rệt (làm trạng ngữ)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Từ khi thành phố cấm xe máy cũ, chất lượng không khí đã cải thiện rõ rệt.',answer:'自从城市禁止旧摩托车上路，空气质量显著改善了。',answerPy:'Zìcóng chéngshì jìnzhǐ jiù mótuōchē shànglù, kōngqì zhìliàng xiǎnzhù gǎishàn le.',
      note:'自从……: kể từ khi …; 显著 + động từ làm trạng ngữ.',pair:'自从……'},
     {promptLang:'vi',prompt:'Thuốc này hiệu quả tuy rõ rệt, nhưng tác dụng phụ cũng không nhỏ.',answer:'这种药效果虽然显著，但副作用也不小。',answerPy:'Zhè zhǒng yào xiàoguǒ suīrán xiǎnzhù, dàn fùzuòyòng yě bù xiǎo.',
      note:'虽然 đứng sau chủ ngữ cũng được: 效果虽然……，但…….',pair:'虽然……但……'}
   ]},

  {n:39,zh:'用户',py:'yònghù',pos:'Danh từ',vn:'người dùng, khách hàng sử dụng',hv:'dụng hộ',em:'👥',lesson:1,
   explain:['Người hoặc đơn vị sử dụng một sản phẩm, dịch vụ (điện, nước, điện thoại, mạng, phần mềm…).','Hay gặp: 手机用户, 网络用户, 用户体验, 用户数量, 广大用户.'],
   usage:'手机 / 网络 / 企业 + 用户; 用户 + 体验 / 数量 / 需求 / 反馈; 受到用户欢迎.',
   collo:['广大用户','用户体验','手机用户','用户需求'],
   ex_zh:'用户也很喜欢他们的作品。',ex_py:'Yònghù yě hěn xǐhuan tāmen de zuòpǐn.',ex_vn:'Người dùng cũng rất thích tác phẩm của họ.',
   exList:[
     {zh:'这种集合式工作成效显著，用户也很喜欢他们的作品。',py:'Zhè zhǒng jíhé shì gōngzuò chéngxiào xiǎnzhù, yònghù yě hěn xǐhuan tāmen de zuòpǐn.',vn:'Cách làm việc tập hợp này hiệu quả rõ rệt, người dùng cũng rất thích tác phẩm của họ.'},
     {zh:'这款软件的用户已经超过了一千万。',py:'Zhè kuǎn ruǎnjiàn de yònghù yǐjīng chāoguòle yìqiān wàn.',vn:'Số người dùng phần mềm này đã vượt quá mười triệu.'},
     {zh:'公司根据用户的反馈，对产品进行了改进。',py:'Gōngsī gēnjù yònghù de fǎnkuì, duì chǎnpǐn jìnxíngle gǎijìn.',vn:'Công ty dựa vào phản hồi của người dùng để cải tiến sản phẩm.'}
   ],
   colloFull:[
     {zh:'广大用户',py:'guǎngdà yònghù',vn:'đông đảo người dùng'},
     {zh:'用户体验',py:'yònghù tǐyàn',vn:'trải nghiệm người dùng'},
     {zh:'手机用户',py:'shǒujī yònghù',vn:'người dùng điện thoại'},
     {zh:'用户需求',py:'yònghù xūqiú',vn:'nhu cầu người dùng'},
     {zh:'用户反馈',py:'yònghù fǎnkuì',vn:'phản hồi của người dùng'}
   ],
   patterns:[
     {s:'受到 + (广大)用户 + 的欢迎',m:'Được (đông đảo) người dùng ưa chuộng'},
     {s:'根据用户的 + 需求 / 反馈 + V',m:'Dựa vào nhu cầu / phản hồi của người dùng để …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ứng dụng này sở dĩ được người dùng ưa chuộng là vì thao tác rất đơn giản.',answer:'这个应用之所以受到用户欢迎，是因为它的操作非常简单。',answerPy:'Zhège yìngyòng zhīsuǒyǐ shòudào yònghù huānyíng, shì yīnwèi tā de cāozuò fēicháng jiǎndān.',
      note:'之所以……是因为……; 操作 ôn bài 11.',pair:'之所以……是因为……'},
     {promptLang:'vi',prompt:'Chỉ cần là nhu cầu hợp lý của người dùng, chúng tôi đều sẽ cố gắng đáp ứng.',answer:'只要是用户的合理需求，我们都会尽量满足。',answerPy:'Zhǐyào shì yònghù de hélǐ xūqiú, wǒmen dōu huì jǐnliàng mǎnzú.',
      note:'只要……都……: hễ là … đều …; 尽量 = cố hết mức.',pair:'只要……都……'}
   ]},

  {n:40,zh:'浓厚',py:'nónghòu',pos:'Tính từ',vn:'sâu đậm, nồng hậu, rõ rệt; dày đặc',hv:'nùng hậu',em:'🎨',lesson:1,
   explain:['(Mây, khói, sương) dày đặc; (màu sắc, không khí, ý vị) đậm đà, rõ nét.','(Hứng thú) rất lớn, sâu sắc: 浓厚的兴趣. Hay gặp: 浓厚的兴趣 / 色彩 / 气氛, 带有浓厚的……性质.'],
   usage:'对……有浓厚的兴趣; 带有浓厚的 + 色彩 / 性质 / 气息; 气氛 / 兴趣 + 浓厚.',
   collo:['浓厚的兴趣','浓厚的色彩','气氛浓厚','带有浓厚的科考性质'],
   ex_zh:'IBE的作品带有浓厚的科考性质。',ex_py:'IBE de zuòpǐn dàiyǒu nónghòu de kēkǎo xìngzhì.',ex_vn:'Tác phẩm của IBE mang đậm tính chất khảo sát khoa học.',
   exList:[
     {zh:'IBE的作品带有浓厚的科考性质，每张照片都有详细的数据可供使用。',py:'IBE de zuòpǐn dàiyǒu nónghòu de kēkǎo xìngzhì, měi zhāng zhàopiàn dōu yǒu xiángxì de shùjù kě gōng shǐyòng.',vn:'Tác phẩm của IBE mang đậm tính chất khảo sát khoa học, mỗi bức ảnh đều có số liệu chi tiết để sử dụng.'},
     {zh:'她对摄影有浓厚的兴趣，一有空就去野外拍照片。',py:'Tā duì shèyǐng yǒu nónghòu de xìngqù, yì yǒu kòng jiù qù yěwài pāi zhàopiàn.',vn:'Cô ấy rất say mê nhiếp ảnh, hễ rảnh là ra ngoài trời chụp ảnh.'},
     {zh:'春节快到了，街上的节日气氛越来越浓厚。',py:'Chūnjié kuài dào le, jiē shang de jiérì qìfēn yuè lái yuè nónghòu.',vn:'Tết sắp đến, không khí ngày lễ trên phố ngày càng rộn ràng.'}
   ],
   colloFull:[
     {zh:'浓厚的兴趣',py:'nónghòu de xìngqù',vn:'hứng thú sâu sắc'},
     {zh:'浓厚的色彩',py:'nónghòu de sècǎi',vn:'màu sắc đậm nét'},
     {zh:'气氛浓厚',py:'qìfēn nónghòu',vn:'bầu không khí đậm đà, sôi nổi'},
     {zh:'带有浓厚的科考性质',py:'dàiyǒu nónghòu de kēkǎo xìngzhì',vn:'mang đậm tính khảo sát khoa học'},
     {zh:'浓厚的乡土气息',py:'nónghòu de xiāngtǔ qìxī',vn:'hơi thở quê hương đậm đà'}
   ],
   patterns:[
     {s:'对 + N + 有 / 产生 + 浓厚的兴趣',m:'Rất hứng thú, say mê với …'},
     {s:'带有浓厚的 + ……色彩 / 性质',m:'Mang đậm màu sắc / tính chất …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Từ khi xem bộ phim tài liệu ấy, em trai tôi bắt đầu say mê động vật hoang dã.',answer:'自从看了那部纪录片，弟弟就对野生动物产生了浓厚的兴趣。',answerPy:'Zìcóng kànle nà bù jìlùpiàn, dìdi jiù duì yěshēng dòngwù chǎnshēngle nónghòu de xìngqù.',
      note:'对……产生浓厚的兴趣 = nảy sinh hứng thú sâu sắc với ….',pair:'对……产生兴趣'},
     {promptLang:'vi',prompt:'Những ngôi nhà ở làng cổ này mang đậm màu sắc địa phương, khiến du khách lưu luyến không muốn về.',answer:'这个古村的房子带有浓厚的地方色彩，让游客流连忘返。',answerPy:'Zhège gǔcūn de fángzi dàiyǒu nónghòu de dìfāng sècǎi, ràng yóukè liúlián-wàngfǎn.',
      note:'带有…… = mang (tính chất, màu sắc); 让 + người + V.',pair:'让 + người + V'}
   ]},

  {n:41,zh:'统计',py:'tǒngjì',pos:'Động từ',vn:'thống kê',hv:'thống kê',em:'🧮',lesson:1,
   explain:['Thu thập, cộng gộp và phân tích số liệu để biết tình hình tổng thể.','Làm động từ (统计人数) và danh từ (据统计 = theo thống kê, 统计数据).'],
   usage:'统计 + 人数 / 数量 / 数据; 精确统计; 据统计，……(mở đầu câu nêu số liệu); 统计出 + kết quả.',
   collo:['统计人数','精确统计','据统计','统计数据'],
   ex_zh:'摄影师统计出1500只的精确数据。',ex_py:'Shèyǐngshī tǒngjì chū yìqiān wǔbǎi zhī de jīngquè shùjù.',ex_vn:'Nhiếp ảnh gia thống kê ra con số chính xác là 1500 con.',
   exList:[
     {zh:'摄影师在Photoshop上一个一个地数，统计出1500只的精确数据。',py:'Shèyǐngshī zài Photoshop shang yí ge yí ge de shǔ, tǒngjì chū yìqiān wǔbǎi zhī de jīngquè shùjù.',vn:'Nhiếp ảnh gia đếm từng con một trên Photoshop, thống kê ra con số chính xác là 1500 con.'},
     {zh:'请参加此次活动的人员报一下名，以便我们统计人数。',py:'Qǐng cānjiā cǐ cì huódòng de rényuán bào yíxià míng, yǐbiàn wǒmen tǒngjì rénshù.',vn:'Mời những ai tham gia hoạt động lần này đăng ký tên, để chúng tôi thống kê số người.'},
     {zh:'据统计，现在世界上每小时就有五千个孩子出生。',py:'Jù tǒngjì, xiànzài shìjiè shang měi xiǎoshí jiù yǒu wǔqiān ge háizi chūshēng.',vn:'Theo thống kê, hiện nay mỗi giờ trên thế giới có năm nghìn đứa trẻ ra đời.'}
   ],
   colloFull:[
     {zh:'统计人数',py:'tǒngjì rénshù',vn:'thống kê số người'},
     {zh:'精确统计',py:'jīngquè tǒngjì',vn:'thống kê chính xác'},
     {zh:'据统计',py:'jù tǒngjì',vn:'theo thống kê'},
     {zh:'统计数据',py:'tǒngjì shùjù',vn:'số liệu thống kê'},
     {zh:'统计结果',py:'tǒngjì jiéguǒ',vn:'kết quả thống kê'}
   ],
   patterns:[
     {s:'据统计，+ số liệu',m:'Theo thống kê, …'},
     {s:'统计出 + kết quả (số liệu)',m:'Thống kê ra …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Theo thống kê, số người dùng điện thoại thông minh ở Việt Nam đã vượt quá 70 triệu.',answer:'据统计，越南的智能手机用户已经超过了七千万。',answerPy:'Jù tǒngjì, Yuènán de zhìnéng shǒujī yònghù yǐjīng chāoguòle qīqiān wàn.',
      note:'据统计 mở đầu câu; 智能 ôn bài 9; 七千万 = 70 triệu.',pair:'据统计……'},
     {promptLang:'vi',prompt:'Lớp trưởng thống kê xong số người đi dã ngoại thì gửi ngay cho cô giáo.',answer:'班长统计完去郊游的人数，就马上发给了老师。',answerPy:'Bānzhǎng tǒngjì wán qù jiāoyóu de rénshù, jiù mǎshàng fāgěile lǎoshī.',
      note:'V + 完 + O，就……: làm xong … thì ….',pair:'V完……就……'}
   ]},

  {n:42,zh:'权威',py:'quánwēi',pos:'Tính từ',vn:'có uy tín, có uy quyền; người có thẩm quyền',hv:'quyền uy',em:'🎓',lesson:1,
   explain:['Tính từ: có uy tín, có sức thuyết phục cao nhất trong một lĩnh vực: 权威专家, 权威机构, 权威数据.','Danh từ: người / tổ chức có uy tín nhất: 他是这方面的权威 (anh ấy là chuyên gia hàng đầu về mặt này).'],
   usage:'权威 + 专家 / 机构 / 人士 / 数据 / 媒体; 是……方面的权威; 具有权威性.',
   collo:['权威专家','权威机构','权威数据','……方面的权威'],
   ex_zh:'之后权威专家表示，这是近30年此地区最大规模的鹦鹉越冬群。',ex_py:'Zhīhòu quánwēi zhuānjiā biǎoshì, zhè shì jìn sānshí nián cǐ dìqū zuì dà guīmó de yīngwǔ yuèdōng qún.',ex_vn:'Sau đó các chuyên gia đầu ngành cho biết, đây là đàn vẹt trú đông quy mô lớn nhất ở vùng này gần 30 năm.',
   exList:[
     {zh:'之后权威专家表示，这是有记录以来，近30年此地区出现的最大规模鹦鹉越冬群。',py:'Zhīhòu quánwēi zhuānjiā biǎoshì, zhè shì yǒu jìlù yǐlái, jìn sānshí nián cǐ dìqū chūxiàn de zuì dà guīmó yīngwǔ yuèdōng qún.',vn:'Sau đó các chuyên gia đầu ngành cho biết, đây là đàn vẹt trú đông quy mô lớn nhất xuất hiện ở vùng này trong gần 30 năm kể từ khi có ghi chép.'},
     {zh:'这份报告是由权威机构发布的，数据比较可靠。',py:'Zhè fèn bàogào shì yóu quánwēi jīgòu fābù de, shùjù bǐjiào kěkào.',vn:'Bản báo cáo này do cơ quan có thẩm quyền công bố, số liệu khá đáng tin.'},
     {zh:'李教授是研究鸟类的权威，很多人都来向他请教。',py:'Lǐ jiàoshòu shì yánjiū niǎolèi de quánwēi, hěn duō rén dōu lái xiàng tā qǐngjiào.',vn:'Giáo sư Lý là chuyên gia hàng đầu về nghiên cứu chim, rất nhiều người đến thỉnh giáo ông.'}
   ],
   colloFull:[
     {zh:'权威专家',py:'quánwēi zhuānjiā',vn:'chuyên gia đầu ngành'},
     {zh:'权威机构',py:'quánwēi jīgòu',vn:'cơ quan có thẩm quyền'},
     {zh:'权威数据',py:'quánwēi shùjù',vn:'số liệu chính thống'},
     {zh:'……方面的权威',py:'……fāngmiàn de quánwēi',vn:'chuyên gia hàng đầu về …'},
     {zh:'权威性',py:'quánwēixìng',vn:'tính uy tín, tính chính thống'}
   ],
   patterns:[
     {s:'权威 + 专家 / 机构 / 数据',m:'… có uy tín, chính thống'},
     {s:'是 + ……方面 / 领域 + 的权威',m:'Là người có uy tín nhất về …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Thông tin trên mạng không nhất định là thật, tốt nhất nên tra cứu nguồn tin chính thống.',answer:'网上的信息不一定是真的，最好查一查权威的消息来源。',answerPy:'Wǎngshang de xìnxī bù yídìng shì zhēn de, zuìhǎo chá yi chá quánwēi de xiāoxi láiyuán.',
      note:'不一定 = không nhất định; 最好 + V = tốt nhất nên ….',pair:'最好……'},
     {promptLang:'vi',prompt:'Ông ấy là chuyên gia hàng đầu về bảo vệ động vật hoang dã, ý kiến của ông rất có trọng lượng.',answer:'他是野生动物保护方面的权威，他的意见很有分量。',answerPy:'Tā shì yěshēng dòngwù bǎohù fāngmiàn de quánwēi, tā de yìjiàn hěn yǒu fènliang.',
      note:'……方面的权威 (danh từ); 有分量 = có trọng lượng.',pair:'……方面的……'}
   ]},

  {n:43,zh:'鉴别',py:'jiànbié',pos:'Động từ',vn:'phân biệt, giám định',hv:'giám biệt',em:'🔬',lesson:1,
   explain:['Xem xét kỹ để phân biệt thật giả, tốt xấu, chủng loại — thường cần kiến thức chuyên môn.','Hay đi với 真伪 / 物种 / 古董 / 能力: 鉴别真伪, 物种鉴别, 鉴别能力. Trang trọng, chuyên môn hơn 识别.'],
   usage:'鉴别 + 真假 / 真伪 / 物种 / 文物; 物种鉴别; 鉴别能力; 经过鉴别, …….',
   collo:['物种鉴别','鉴别真伪','鉴别能力','经过鉴别'],
   ex_zh:'拍摄同时，他们还进行物种鉴别。',ex_py:'Pāishè tóngshí, tāmen hái jìnxíng wùzhǒng jiànbié.',ex_vn:'Đồng thời với việc chụp ảnh, họ còn tiến hành giám định loài.',
   exList:[
     {zh:'拍摄同时，他们还进行物种鉴别、动物行为分析等。',py:'Pāishè tóngshí, tāmen hái jìnxíng wùzhǒng jiànbié, dòngwù xíngwéi fēnxī děng.',vn:'Đồng thời với việc chụp ảnh, họ còn tiến hành giám định loài, phân tích hành vi động vật v.v.'},
     {zh:'经过专家鉴别，这幅画是真迹。',py:'Jīngguò zhuānjiā jiànbié, zhè fú huà shì zhēnjì.',vn:'Qua giám định của chuyên gia, bức tranh này là bút tích thật.'},
     {zh:'面对各种各样的广告，我们要有一定的鉴别能力。',py:'Miànduì gèzhǒng-gèyàng de guǎnggào, wǒmen yào yǒu yídìng de jiànbié nénglì.',vn:'Trước đủ loại quảng cáo, chúng ta cần có khả năng phân biệt nhất định.'}
   ],
   colloFull:[
     {zh:'物种鉴别',py:'wùzhǒng jiànbié',vn:'giám định loài'},
     {zh:'鉴别真伪',py:'jiànbié zhēnwěi',vn:'giám định thật giả'},
     {zh:'鉴别能力',py:'jiànbié nénglì',vn:'khả năng phân biệt'},
     {zh:'经过鉴别',py:'jīngguò jiànbié',vn:'qua giám định'},
     {zh:'鉴别文物',py:'jiànbié wénwù',vn:'giám định cổ vật'}
   ],
   patterns:[
     {s:'经过 + (专家)鉴别，……',m:'Qua giám định (của chuyên gia), …'},
     {s:'进行 + 物种鉴别 / 行为分析',m:'Tiến hành giám định loài / phân tích hành vi'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Qua giám định của chuyên gia, chiếc bình cổ mà ông nội cất giữ nhiều năm hoá ra là đồ giả.',answer:'经过专家鉴别，爷爷收藏多年的古瓶原来是假的。',answerPy:'Jīngguò zhuānjiā jiànbié, yéye shōucáng duō nián de gǔpíng yuánlái shì jiǎ de.',
      note:'原来 = hoá ra (phát hiện sự thật).',pair:'原来……'},
     {promptLang:'vi',prompt:'Muốn giám định đúng loài của con chim này thì không những phải xem ảnh mà còn phải phân tích tiếng kêu của nó.',answer:'要想准确鉴别这只鸟的物种，不但要看照片，还要分析它的叫声。',answerPy:'Yào xiǎng zhǔnquè jiànbié zhè zhī niǎo de wùzhǒng, búdàn yào kàn zhàopiàn, hái yào fēnxī tā de jiàoshēng.',
      note:'要想……，不但……还……: muốn … thì không những … mà còn ….',pair:'不但……还……'}
   ]},

  {n:44,zh:'评估',py:'pínggū',pos:'Động từ',vn:'đánh giá, thẩm định',hv:'bình cổ',em:'📝',lesson:1,
   explain:['Xem xét, ước lượng rồi đưa ra nhận định về chất lượng, giá trị, mức độ… (thường có tiêu chuẩn, quy trình).','Làm động từ và danh từ: 评估风险, 环境评估, 进行评估, 评估报告.'],
   usage:'评估 + 风险 / 效果 / 价值 / 能力; 环境 / 安全 + 评估; 对……进行评估; 评估报告.',
   collo:['环境评估','评估报告','评估风险','进行评估'],
   ex_zh:'他们还会向当地保护区提交一份环境评估调查报告。',ex_py:'Tāmen hái huì xiàng dāngdì bǎohùqū tíjiāo yí fèn huánjìng pínggū diàochá bàogào.',ex_vn:'Họ còn nộp cho khu bảo tồn địa phương một bản báo cáo điều tra đánh giá môi trường.',
   exList:[
     {zh:'项目结束后，他们还会向当地保护区提交一份环境评估调查报告。',py:'Xiàngmù jiéshù hòu, tāmen hái huì xiàng dāngdì bǎohùqū tíjiāo yí fèn huánjìng pínggū diàochá bàogào.',vn:'Sau khi dự án kết thúc, họ còn nộp cho khu bảo tồn địa phương một bản báo cáo điều tra đánh giá môi trường.'},
     {zh:'投资之前，一定要认真评估风险。',py:'Tóuzī zhīqián, yídìng yào rènzhēn pínggū fēngxiǎn.',vn:'Trước khi đầu tư nhất định phải đánh giá rủi ro cẩn thận.'},
     {zh:'学校每学期都会对老师的教学质量进行评估。',py:'Xuéxiào měi xuéqī dōu huì duì lǎoshī de jiàoxué zhìliàng jìnxíng pínggū.',vn:'Học kỳ nào nhà trường cũng đánh giá chất lượng giảng dạy của giáo viên.'}
   ],
   colloFull:[
     {zh:'环境评估',py:'huánjìng pínggū',vn:'đánh giá môi trường'},
     {zh:'评估报告',py:'pínggū bàogào',vn:'báo cáo đánh giá'},
     {zh:'评估风险',py:'pínggū fēngxiǎn',vn:'đánh giá rủi ro'},
     {zh:'进行评估',py:'jìnxíng pínggū',vn:'tiến hành đánh giá'},
     {zh:'综合评估',py:'zōnghé pínggū',vn:'đánh giá tổng hợp'}
   ],
   patterns:[
     {s:'对 + N + 进行评估',m:'Tiến hành đánh giá … (văn viết)'},
     {s:'评估 + 风险 / 效果 / 价值',m:'Đánh giá rủi ro / hiệu quả / giá trị'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Trước khi xây nhà máy, phải đánh giá kỹ ảnh hưởng của nó đối với môi trường xung quanh.',answer:'建工厂之前，必须对它给周围环境带来的影响进行认真评估。',answerPy:'Jiàn gōngchǎng zhīqián, bìxū duì tā gěi zhōuwéi huánjìng dàilái de yǐngxiǎng jìnxíng rènzhēn pínggū.',
      note:'对……进行 + V (hai âm tiết): cấu trúc văn viết; ……之前 = trước khi ….',pair:'对……进行……'},
     {promptLang:'vi',prompt:'Không thể chỉ dựa vào điểm thi để đánh giá một học sinh có ưu tú hay không.',answer:'不能只凭考试成绩来评估一个学生是否优秀。',answerPy:'Bù néng zhǐ píng kǎoshì chéngjì lái pínggū yí ge xuésheng shìfǒu yōuxiù.',
      note:'凭……来 + V: dựa vào … để …; 是否 = có … hay không.',pair:'凭……来……'}
   ]},

  {n:45,zh:'队伍',py:'duìwu',pos:'Danh từ',vn:'đội ngũ, hàng ngũ; đoàn, đội',hv:'đội ngũ',em:'🚶',lesson:1,
   explain:['Hàng người xếp có trật tự; đoàn, đội (quân đội, đội cứu hộ, đoàn diễu hành).','Nghĩa rộng: tập thể người cùng làm một nghề, một việc: 教师队伍, 科研队伍. Chú ý 伍 đọc nhẹ wu.'],
   usage:'排着 / 长长的 + 队伍; 救援 / 科研 / 教师 + 队伍; 加入 / 壮大 + 队伍; ……和他的队伍.',
   collo:['救援队伍','教师队伍','长长的队伍','加入队伍'],
   ex_zh:'如今，徐健和他的队伍天天在路上忙碌着。',ex_py:'Rújīn, Xú Jiàn hé tā de duìwu tiāntiān zài lù shang mánglùzhe.',ex_vn:'Giờ đây, Từ Kiện và đội ngũ của anh ngày ngày bận rộn trên đường.',
   exList:[
     {zh:'如今，徐健和他的队伍天天在路上忙碌着。',py:'Rújīn, Xú Jiàn hé tā de duìwu tiāntiān zài lù shang mánglùzhe.',vn:'Giờ đây, Từ Kiện và đội ngũ của anh ngày ngày bận rộn trên đường.'},
     {zh:'连日大雪，救助牧民的队伍已经出发了。',py:'Liánrì dàxuě, jiùzhù mùmín de duìwu yǐjīng chūfā le.',vn:'Tuyết rơi dày nhiều ngày liền, đội cứu trợ người chăn nuôi đã lên đường.'},
     {zh:'新手机上市那天，商店门口排起了长长的队伍。',py:'Xīn shǒujī shàngshì nà tiān, shāngdiàn ménkǒu páiqǐle chángcháng de duìwu.',vn:'Hôm điện thoại mới ra mắt, trước cửa hàng xếp một hàng dài dằng dặc.'}
   ],
   colloFull:[
     {zh:'救援队伍',py:'jiùyuán duìwu',vn:'đội cứu hộ'},
     {zh:'教师队伍',py:'jiàoshī duìwu',vn:'đội ngũ giáo viên'},
     {zh:'长长的队伍',py:'chángcháng de duìwu',vn:'hàng dài dằng dặc'},
     {zh:'加入队伍',py:'jiārù duìwu',vn:'gia nhập đội ngũ'},
     {zh:'壮大队伍',py:'zhuàngdà duìwu',vn:'lớn mạnh đội ngũ'}
   ],
   patterns:[
     {s:'……和他(们)的队伍',m:'… và đội ngũ của mình'},
     {s:'排起了 + 长长的队伍',m:'Xếp thành hàng dài'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ngày càng nhiều người trẻ gia nhập đội ngũ bảo vệ động vật hoang dã.',answer:'越来越多的年轻人加入了保护野生动物的队伍。',answerPy:'Yuè lái yuè duō de niánqīngrén jiārùle bǎohù yěshēng dòngwù de duìwu.',
      note:'越来越多的 + N: ngày càng nhiều …; định ngữ dài + 的队伍.',pair:'越来越……'},
     {promptLang:'vi',prompt:'Chỉ khi xây dựng được một đội ngũ giáo viên giỏi thì chất lượng giáo dục mới có thể nâng cao.',answer:'只有建设一支优秀的教师队伍，教育质量才能提高。',answerPy:'Zhǐyǒu jiànshè yì zhī yōuxiù de jiàoshī duìwu, jiàoyù zhìliàng cái néng tígāo.',
      note:'只有……才……; lượng từ 支 cho 队伍.',pair:'只有……才……'}
   ]}
];



// ══════════════════════════════════════════
// BÀI KHOÁ — chép nguyên văn sách (tr. 168–170), mỗi đoạn một dòng
// ══════════════════════════════════════════
var dialogData = [
  {scene:'课文 · 徐健和他的野生动物摄影师们',
   preQuiz:[
     {q:'摄影师们在青海的山上拍到了什么动物？',opts:['雪豹','大熊猫','藏羚羊'],ans:0},
     {q:'拍摄完毕，摄影师们一回头发现了什么？',opts:['雪豹都跑走了','一群鹦鹉飞了过来','两只雪豹正注视着他们'],ans:2},
     {q:'课文说，雪豹现在的情况怎么样？',opts:['数量越来越多','正濒临消亡','已经完全消失了'],ans:1},
     {q:'长期风餐露宿在山野，摄影师们有什么感受？',opts:['不但不觉得苦，反而感到无比快乐','觉得很苦，想放弃','觉得又苦又累'],ans:0},
     {q:'徐健在IBE中是什么身份？',opts:['普通摄影师','权威专家','创始人'],ans:2},
     {q:'8张照片中，“我”辨认不出几种动物？',opts:['2种','4种','8种'],ans:1},
     {q:'徐健认为，人们的“现状”是什么？',opts:['对所有动物都很熟悉','只认识大熊猫','对非洲动物比对自己国家的动物更熟悉'],ans:2},
     {q:'徐健说，更严峻的问题是什么？',opts:['自然保护区的影像空白','摄影师的报酬很低','动物照片太多了'],ans:0},
     {q:'徐健他们本来希望靠什么支撑深入野外的巨大开支？',opts:['政府的帮助','卖出吸引人的照片','写畅销书'],ans:1},
     {q:'为什么说那样的想法“几近童话”？',opts:['照片拍得不够好','大家都不喜欢动物','摄影作品不是畅销书，摄影师报酬很低'],ans:2},
     {q:'IBE的摄影师平时怎样工作？',opts:['分散在各地，一有号召就聚在一起','每天都在一起工作','只在网上工作'],ans:0},
     {q:'在梅里雪山，摄影师统计出了多少只大紫胸鹦鹉？',opts:['150只','1500只','15000只'],ans:1},
     {q:'项目结束后，IBE还会向当地保护区提交什么？',opts:['一本摄影集','一部纪录片','一份环境评估调查报告'],ans:2}
   ],
   lines:[
    {sp:0,zh:'中国青海，海拔4500米的山上，3头雪豹正在玩耍。野生动植物摄影师们压抑住兴奋，憋住气，全力拍摄雪豹。拍摄完毕，一回头，发现两只藏在山头的雪豹正瞪着眼睛注视着自己，大家相视而笑。',
     py:'Zhōngguó Qīnghǎi, hǎibá sìqiān wǔbǎi mǐ de shān shang, sān tóu xuěbào zhèngzài wánshuǎ. Yěshēng dòng-zhíwù shèyǐngshīmen yāyì zhù xīngfèn, biēzhù qì, quánlì pāishè xuěbào. Pāishè wánbì, yì huítóu, fāxiàn liǎng zhī cáng zài shāntóu de xuěbào zhèng dèngzhe yǎnjing zhùshìzhe zìjǐ, dàjiā xiāngshì ér xiào.',
     vn:'Ở Thanh Hải, Trung Quốc, trên ngọn núi cao 4.500 mét so với mực nước biển, ba con báo tuyết đang nô đùa. Các nhiếp ảnh gia động thực vật hoang dã kìm nén sự phấn khích, nín thở, dốc toàn lực chụp báo tuyết. Chụp xong, vừa quay đầu lại, họ phát hiện hai con báo tuyết nấp trên đỉnh núi đang trố mắt nhìn chằm chằm vào mình, mọi người nhìn nhau bật cười.'},
    {sp:0,zh:'雪豹，这种皮毛上带着美丽花斑的大型猫科动物正濒临消亡，换句话说，在不久的将来我们很可能再也见不到这种动物。而这些摄影师们是致力于保护野生物种，记录和展示中国生物多样性的“博物学家”。长期风餐露宿在山野，他们不但不觉得苦，反而感到无比的快乐。',
     py:'Xuěbào, zhè zhǒng pímáo shang dàizhe měilì huābān de dàxíng māokē dòngwù zhèng bīnlín xiāowáng, huàn jù huà shuō, zài bùjiǔ de jiānglái wǒmen hěn kěnéng zài yě jiàn bu dào zhè zhǒng dòngwù. Ér zhèxiē shèyǐngshīmen shì zhìlì yú bǎohù yěshēng wùzhǒng, jìlù hé zhǎnshì Zhōngguó shēngwù duōyàngxìng de "bówùxuéjiā". Chángqī fēngcān-lùsù zài shānyě, tāmen búdàn bù juéde kǔ, fǎn\'ér gǎndào wúbǐ de kuàilè.',
     vn:'Báo tuyết — loài họ mèo cỡ lớn có bộ lông điểm những đốm hoa tuyệt đẹp này — đang đứng bên bờ diệt vong; nói cách khác, trong tương lai không xa rất có thể chúng ta sẽ không bao giờ còn được thấy loài vật này nữa. Còn những nhiếp ảnh gia này chính là những "nhà vạn vật học" dốc sức bảo vệ các loài hoang dã, ghi lại và giới thiệu sự đa dạng sinh học của Trung Quốc. Quanh năm dãi gió dầm sương nơi núi rừng, họ không những không thấy khổ, mà ngược lại còn cảm thấy vô cùng vui sướng.'},
    {sp:0,zh:'徐健是摄影师中的领袖人物，IBE的创始人，他拿出8张照片，我认识大熊猫、金丝猴、牦牛和雪豹，另外4种辨认不出，据说，它们是藏狐、赤斑羚、藏羚羊和喜马拉雅旱獭。徐健说：“我们的现状是，人们能识别长颈鹿、大猩猩、河马，知道它们的来历，却不认识藏羚羊，大家对非洲的动物好像比对我们自己国家的动物更为熟悉。”徐健面带苦涩地说：“许多动植物，连一张清楚的照片都没有，大家不认识，怎么指望保护？更严峻的是自然保护区的影像空白，很多特有物种，还没来得及为我们所了解，就消失了。”徐健和他的朋友曾苦苦琢磨，怎样为野生动物保护尽一份责任。他们不分昼夜地奔波，渴望拍出足以使人疯狂的照片，吸引大家心甘情愿地去购买，以便支撑他们深入野外的巨大开支，但摄影作品不是畅销书，摄影师报酬很低，这样的想法，几近童话。',
     py:'Xú Jiàn shì shèyǐngshī zhōng de lǐngxiù rénwù, IBE de chuàngshǐrén, tā náchū bā zhāng zhàopiàn, wǒ rènshi dàxióngmāo, jīnsīhóu, máoniú hé xuěbào, lìngwài sì zhǒng biànrèn bu chū, jùshuō, tāmen shì zànghú, chìbānlíng, zànglíngyáng hé Xǐmǎlāyǎ hàntǎ. Xú Jiàn shuō: "Wǒmen de xiànzhuàng shì, rénmen néng shíbié chángjǐnglù, dàxīngxing, hémǎ, zhīdào tāmen de láilì, què bú rènshi zànglíngyáng, dàjiā duì Fēizhōu de dòngwù hǎoxiàng bǐ duì wǒmen zìjǐ guójiā de dòngwù gèng wéi shúxī." Xú Jiàn miàn dài kǔsè de shuō: "Xǔduō dòng-zhíwù, lián yì zhāng qīngchu de zhàopiàn dōu méiyǒu, dàjiā bú rènshi, zěnme zhǐwàng bǎohù? Gèng yánjùn de shì zìrán bǎohùqū de yǐngxiàng kòngbái, hěn duō tèyǒu wùzhǒng, hái méi láidejí wéi wǒmen suǒ liǎojiě, jiù xiāoshī le." Xú Jiàn hé tā de péngyou céng kǔkǔ zuómo, zěnyàng wèi yěshēng dòngwù bǎohù jìn yí fèn zérèn. Tāmen bù fēn zhòuyè de bēnbō, kěwàng pāichū zúyǐ shǐ rén fēngkuáng de zhàopiàn, xīyǐn dàjiā xīngān-qíngyuàn de qù gòumǎi, yǐbiàn zhīchēng tāmen shēnrù yěwài de jùdà kāizhī, dàn shèyǐng zuòpǐn bú shì chàngxiāoshū, shèyǐngshī bàochou hěn dī, zhèyàng de xiǎngfǎ, jījìn tónghuà.',
     vn:'Từ Kiện là nhân vật đầu đàn trong giới nhiếp ảnh gia này, là người sáng lập IBE. Anh lấy ra 8 tấm ảnh: tôi nhận ra gấu trúc, khỉ lông vàng, bò Tây Tạng và báo tuyết, còn 4 loài kia thì chịu không nhận ra; nghe nói đó là cáo Tây Tạng, sơn dương đỏ, linh dương Tây Tạng và macmot Himalaya. Từ Kiện nói: "Thực trạng của chúng ta là, người ta nhận ra hươu cao cổ, khỉ đột, hà mã, biết cả nguồn gốc của chúng, nhưng lại không biết linh dương Tây Tạng; mọi người dường như quen thuộc với động vật châu Phi hơn cả động vật của chính nước mình." Từ Kiện nói với vẻ mặt cay đắng: "Rất nhiều loài động thực vật đến một tấm ảnh rõ nét cũng không có, mọi người không biết chúng thì làm sao trông mong bảo vệ được? Nghiêm trọng hơn là các khu bảo tồn thiên nhiên còn trống trơn về hình ảnh, rất nhiều loài đặc hữu còn chưa kịp được chúng ta biết đến thì đã biến mất rồi." Từ Kiện và bạn bè từng trăn trở rất lâu: làm thế nào để góp một phần trách nhiệm cho việc bảo vệ động vật hoang dã. Họ bôn ba không kể ngày đêm, khao khát chụp được những bức ảnh đủ sức khiến người ta phát cuồng, thu hút mọi người cam tâm tình nguyện bỏ tiền ra mua, để trang trải khoản chi phí khổng lồ cho những chuyến đi sâu vào vùng hoang dã; nhưng tác phẩm nhiếp ảnh đâu phải sách bán chạy, thù lao của nhiếp ảnh gia rất thấp, ý tưởng như vậy gần như chuyện cổ tích.'},
    {sp:0,zh:'于是徐健成立了社会企业IBE，为保护区、政府等各类课题提供服务，他们的工作是建立野生动植物影像库，立体还原一个地区的生态多样性。',
     py:'Yúshì Xú Jiàn chénglìle shèhuì qǐyè IBE, wèi bǎohùqū, zhèngfǔ děng gè lèi kètí tígōng fúwù, tāmen de gōngzuò shì jiànlì yěshēng dòng-zhíwù yǐngxiàngkù, lìtǐ huányuán yí ge dìqū de shēngtài duōyàngxìng.',
     vn:'Thế là Từ Kiện thành lập doanh nghiệp xã hội IBE, cung cấp dịch vụ cho các loại đề tài của khu bảo tồn, chính phủ…; công việc của họ là xây dựng kho hình ảnh động thực vật hoang dã, tái hiện một cách đa chiều sự đa dạng sinh thái của một vùng.'},
    {sp:0,zh:'IBE的摄影师个个是名副其实的博物学家，不但有高超的摄影技术，还有非同一般的专业素质。他们分散在全国各地，徐健一发出号召，大家立刻聚在一起。实践证实，这种集合式工作成效显著，用户也很喜欢他们的作品。',
     py:'IBE de shèyǐngshī gègè shì míngfùqíshí de bówùxuéjiā, búdàn yǒu gāochāo de shèyǐng jìshù, hái yǒu fēitóng-yìbān de zhuānyè sùzhì. Tāmen fēnsàn zài quánguó gèdì, Xú Jiàn yì fāchū hàozhào, dàjiā lìkè jù zài yìqǐ. Shíjiàn zhèngshí, zhè zhǒng jíhé shì gōngzuò chéngxiào xiǎnzhù, yònghù yě hěn xǐhuan tāmen de zuòpǐn.',
     vn:'Các nhiếp ảnh gia của IBE ai cũng là nhà vạn vật học đúng nghĩa, không những có kỹ thuật chụp ảnh điêu luyện mà còn có tố chất chuyên môn khác thường. Họ phân tán khắp cả nước, Từ Kiện vừa phát lời kêu gọi là mọi người lập tức tập hợp lại. Thực tiễn chứng minh, cách làm việc kiểu tập hợp này hiệu quả rõ rệt, người dùng cũng rất thích tác phẩm của họ.'},
    {sp:0,zh:'IBE的作品带有浓厚的科考性质，每张照片都有详细的数据可供使用，比如精确统计的动物数量。一次在梅里雪山遇见大紫胸鹦鹉群，摄影师在Photoshop上一个一个地数，统计出1500只的精确数据，之后权威专家表示，这是有记录以来，近30年此地区出现的最大规模鹦鹉越冬群。拍摄同时，他们还进行物种鉴别、动物行为分析等。项目结束后，他们还会向当地保护区提交一份环境评估调查报告。',
     py:'IBE de zuòpǐn dàiyǒu nónghòu de kēkǎo xìngzhì, měi zhāng zhàopiàn dōu yǒu xiángxì de shùjù kě gōng shǐyòng, bǐrú jīngquè tǒngjì de dòngwù shùliàng. Yí cì zài Méilǐ Xuěshān yùjiàn dàzǐxiōng yīngwǔ qún, shèyǐngshī zài Photoshop shang yí ge yí ge de shǔ, tǒngjì chū yìqiān wǔbǎi zhī de jīngquè shùjù, zhīhòu quánwēi zhuānjiā biǎoshì, zhè shì yǒu jìlù yǐlái, jìn sānshí nián cǐ dìqū chūxiàn de zuì dà guīmó yīngwǔ yuèdōng qún. Pāishè tóngshí, tāmen hái jìnxíng wùzhǒng jiànbié, dòngwù xíngwéi fēnxī děng. Xiàngmù jiéshù hòu, tāmen hái huì xiàng dāngdì bǎohùqū tíjiāo yí fèn huánjìng pínggū diàochá bàogào.',
     vn:'Tác phẩm của IBE mang đậm tính chất khảo sát khoa học, mỗi bức ảnh đều có số liệu chi tiết để sử dụng, chẳng hạn số lượng động vật được thống kê chính xác. Có lần ở núi tuyết Mai Lý, họ gặp một đàn vẹt ngực tím lớn; nhiếp ảnh gia đếm từng con một trên Photoshop, thống kê ra con số chính xác là 1.500 con; sau đó chuyên gia có uy tín cho biết, đây là đàn vẹt trú đông quy mô lớn nhất xuất hiện ở vùng này trong gần 30 năm kể từ khi có ghi chép. Song song với việc chụp ảnh, họ còn tiến hành giám định loài, phân tích hành vi động vật… Sau khi dự án kết thúc, họ còn nộp cho khu bảo tồn địa phương một bản báo cáo điều tra đánh giá môi trường.'},
    {sp:0,zh:'如今，徐健和他的队伍天天在路上忙碌着。',
     py:'Rújīn, Xú Jiàn hé tā de duìwu tiāntiān zài lù shang mánglùzhe.',
     vn:'Giờ đây, Từ Kiện và đội ngũ của anh ngày ngày vẫn tất bật trên đường.'}
   ]}
];

// ══════════════════════════════════════════
// PHÂN BIỆT TỪ GẦN NGHĨA 词语辨析
// Cặp 以便—便于 lấy từ sách (tr. 173, 做一做 判断正误 theo đáp án sách); 严峻—严重, 证实—证明 tự thêm (严峻, 证实 là từ của bài)
// ══════════════════════════════════════════
var synonymData = [
  {pair:'以便 — 便于',
   same:'Đều có nghĩa làm cho mục đích nói ở phía sau dễ đạt được (để, nhằm, để cho dễ).',
   sameEx:{zh:'大家现在要努力掌握各种相关知识，以便／便于将来更好地工作。',vn:'Bây giờ mọi người phải cố gắng nắm vững các kiến thức liên quan, để sau này làm việc tốt hơn.'},
   items:[
     {word:'以便',points:[
       'Là LIÊN TỪ: chỉ đứng ĐẦU phân câu sau, nêu mục đích của việc làm ở phân câu trước.',
       'Không đứng trong phân câu trước, không đi sau 为了 (không nói 为了以便……).',
       'Chủ ngữ của phân câu sau có thể khác phân câu trước: ……，以便我们统计人数.'
     ],ex:[{zh:'你先把材料准备好，以便小组开会研究。',vn:'Cậu chuẩn bị tài liệu trước đi, để nhóm họp bàn nghiên cứu.'},
          {zh:'他们渴望拍出好照片，以便支撑深入野外的巨大开支。',vn:'Họ khao khát chụp được ảnh đẹp, để trang trải khoản chi phí khổng lồ khi đi sâu vào vùng hoang dã.'}]},
     {word:'便于',points:[
       'Là ĐỘNG TỪ: 便于 + V (dễ cho việc …); dùng được ở phân câu TRƯỚC: 为了便于管理，…….',
       'Còn biểu thị "nhờ bản thân có điều kiện nào đó mà đạt được kết quả phía sau": 体积小，便于携带.',
       'Thường đi với động từ hai âm tiết: 便于管理 / 携带 / 制作 / 理解.'
     ],ex:[{zh:'为了便于管理，我们制定了一些规章制度。',vn:'Để tiện cho việc quản lý, chúng tôi đã đặt ra một số quy chế.'},
          {zh:'这种新型电脑体积小，便于大家携带。',vn:'Loại máy tính kiểu mới này kích thước nhỏ, tiện cho mọi người mang theo.'}]}
   ],
   quiz:[
     {sentence:'为了＿＿联系，老师把大家的电话制成了一张表。',options:['以便','便于'],answer:1,why:'Sau 为了, ở phân câu trước → chỉ động từ 便于. 以便 là liên từ, chỉ đứng đầu phân câu sau (做一做 ①).'},
     {sentence:'这种手机很薄，＿＿放在口袋里。',options:['以便','便于'],answer:1,why:'Nhờ đặc điểm của bản thân (薄) mà dễ làm gì → 便于. 以便 không có nghĩa này.'},
     {sentence:'请大家写清楚手机号码，＿＿我们及时通知。',options:['以便','便于'],answer:0,why:'Đầu phân câu sau, chủ ngữ mới (我们) nêu mục đích → 以便.'},
     {sentence:'出发前要查好路线，＿＿节省时间。',options:['以便','便于'],answer:0,both:true,why:'Đầu phân câu sau nêu mục đích, phía sau là cụm động từ → cả hai đều được (điểm chung); 以便 tự nhiên hơn.'}
   ],
   sgk:{
     chung:{t:'都有使后边说的目的容易实现的意思。',vn:'Đều có nghĩa làm cho mục đích nói ở phía sau dễ thực hiện.',vd:'大家现在要努力掌握各种相关知识，以便／便于将来更好地工作。',vdVn:'Bây giờ mọi người phải cố gắng nắm vững các kiến thức liên quan, để sau này làm việc tốt hơn.'},
     khac:[
       {a:{t:'连词，只能用于后一小句开头。',vn:'Là liên từ, chỉ có thể dùng ở đầu phân câu sau.',vd:'你先把材料准备好，以便小组开会研究。',vdVn:'Cậu chuẩn bị tài liệu trước đi, để nhóm họp bàn nghiên cứu.'},
        b:{t:'动词，可以用于前一小句中。',vn:'Là động từ, có thể dùng trong phân câu trước.',vd:'为了便于管理，我们制定了一些规章制度。',vdVn:'Để tiện cho việc quản lý, chúng tôi đã đặt ra một số quy chế.'}},
       {a:{t:'没有右边这个意思。',vn:'Không có nghĩa như bên phải.',vd:''},
        b:{t:'可以表示“因为自身具备某种条件而达成后边的某种结果或效果”。',vn:'Có thể biểu thị "nhờ bản thân có điều kiện nào đó mà đạt được kết quả hoặc hiệu quả ở phía sau".',vd:'这种新型电脑体积小，便于大家携带。',vdVn:'Loại máy tính kiểu mới này kích thước nhỏ, tiện cho mọi người mang theo.'}}
     ],
     deLam:'判断正误 — Tích vào cột đúng (√) hay sai (×) cho từng câu',
     cot:['√ đúng','× sai'],
     lamThu:[
       {s:'为了以便联系，老师把所有学生的电话制成了一张表。',dap:[false,true],
        giai:'SAI. 以便 là liên từ, chỉ đứng đầu phân câu sau, không đi sau 为了. Sửa: 为了便于联系，老师把所有学生的电话制成了一张表。'},
       {s:'你把需要用到的各种食材都准备好，这样便于制作。',dap:[true,false],
        giai:'ĐÚNG. 便于 là động từ: 这样便于制作 = như vậy thì dễ chế biến.'},
       {s:'请参加此次活动的人员报一下名，以便我们统计人数。',dap:[true,false],
        giai:'ĐÚNG. 以便 đứng đầu phân câu sau nêu mục đích (để chúng tôi thống kê số người); chủ ngữ phân câu sau (我们) khác phân câu trước — vẫn được.'},
       {s:'场地很大，以便大家开展活动。',dap:[false,true],
        giai:'SAI. "Sân rộng nên dễ tổ chức hoạt động" là nhờ điều kiện sẵn có của bản thân mà đạt kết quả → phải dùng 便于: 场地很大，便于大家开展活动。以便 không có nghĩa này.'}
     ]
   }},

  {pair:'严峻 — 严重',
   same:'Đều là tính từ, đều chỉ tình hình nghiêm trọng, đáng lo ngại.',
   sameEx:{zh:'今年的就业形势十分严峻／严重。',vn:'Tình hình việc làm năm nay hết sức nghiêm trọng.'},
   items:[
     {word:'严峻',points:[
       'Văn viết; nhấn sự KHẮC NGHIỆT, gay gắt, đòi hỏi con người phải đối mặt, vượt qua.',
       'Hay đi với: 形势, 考验, 挑战, 局面, 现实 — 严峻的考验, 形势严峻.',
       'Còn tả nét mặt nghiêm khắc, lạnh lùng: 表情严峻. Không đi với 病, 错误, 污染 (không nói 病得很严峻).'
     ],ex:[{zh:'更严峻的是自然保护区的影像空白。',vn:'Nghiêm trọng hơn là các khu bảo tồn thiên nhiên còn trống trơn về hình ảnh.'},
          {zh:'这场大雪对牧民来说是一次严峻的考验。',vn:'Trận tuyết lớn này là một thử thách khắc nghiệt đối với dân du mục.'}]},
     {word:'严重',points:[
       'Dùng rộng, cả khẩu ngữ lẫn văn viết; nhấn MỨC ĐỘ nặng, hậu quả xấu.',
       'Hay đi với: 病, 问题, 错误, 污染, 后果, 损失 — 病得很严重, 严重的后果.',
       'Làm trạng ngữ được: 严重影响, 严重破坏 (严峻 không có cách dùng này).'
     ],ex:[{zh:'这条河的污染非常严重。',vn:'Con sông này bị ô nhiễm rất nặng.'},
          {zh:'熬夜严重影响了他的健康。',vn:'Thức khuya đã ảnh hưởng nghiêm trọng đến sức khoẻ của anh ấy.'}]}
   ],
   quiz:[
     {sentence:'他的病很＿＿，需要马上做手术。',options:['严峻','严重'],answer:1,why:'Bệnh nặng → 严重. 严峻 không đi với 病.'},
     {sentence:'面对＿＿的考验，队员们没有一个人退缩。',options:['严峻','严重'],answer:0,why:'严峻的考验 = thử thách khắc nghiệt (cụm cố định).'},
     {sentence:'玩手机＿＿影响了他的学习成绩。',options:['严峻','严重'],answer:1,why:'Làm trạng ngữ trước động từ 影响 → chỉ 严重.'},
     {sentence:'很多野生动物濒临消亡，保护形势十分＿＿。',options:['严峻','严重'],answer:0,both:true,why:'形势 đi được với cả hai; văn viết trang trọng hay dùng 形势严峻.'}
   ]},

  {pair:'证实 — 证明',
   same:'Đều là động từ, đều có nghĩa dùng chứng cứ, sự thật để cho thấy điều gì là đúng.',
   sameEx:{zh:'实践证实／证明，这种方法成效显著。',vn:'Thực tiễn chứng minh phương pháp này hiệu quả rõ rệt.'},
   items:[
     {word:'证实',points:[
       'Nhấn XÁC NHẬN một điều vốn đã có (tin đồn, suy đoán, giả thiết) là có thật.',
       'Hay gặp: 得到证实, 有待证实, 被证实, 消息已经证实.',
       'Chỉ là động từ; không làm danh từ chỉ giấy tờ.'
     ],ex:[{zh:'这个消息已经得到了官方的证实。',vn:'Tin này đã được phía chính thức xác nhận.'},
          {zh:'网上的说法还有待证实。',vn:'Những lời đồn trên mạng còn phải chờ xác nhận.'}]},
     {word:'证明',points:[
       'Nghĩa rộng hơn: dùng lý lẽ, chứng cứ để chỉ ra, chứng minh (cả trong toán học, lập luận).',
       'Còn là DANH TỪ: giấy chứng nhận — 开证明, 身份证明, 在职证明.',
       'Hay gặp: 证明自己, 事实证明, 足以证明.'
     ],ex:[{zh:'他用实际行动证明了自己的能力。',vn:'Anh ấy dùng hành động thực tế để chứng minh năng lực của mình.'},
          {zh:'办签证需要学校开一份在读证明。',vn:'Làm thị thực cần nhà trường cấp một giấy xác nhận đang theo học.'}]}
   ],
   quiz:[
     {sentence:'请学校给我开一份学习＿＿。',options:['证实','证明'],answer:1,why:'Danh từ "giấy xác nhận" → chỉ 证明.'},
     {sentence:'这个传言后来得到了＿＿，原来是真的。',options:['证实','证明'],answer:0,why:'Xác nhận tin đồn là thật → 得到证实 (cụm cố định).'},
     {sentence:'你能＿＿这道数学题的结论吗？',options:['证实','证明'],answer:1,why:'Chứng minh bằng suy luận (toán học) → 证明.'},
     {sentence:'他要用成绩＿＿自己不比别人差。',options:['证实','证明'],answer:1,why:'证明自己 = chứng tỏ bản thân (cụm cố định).'}
   ]}
];

// ══════════════════════════════════════════
// BẮC CẦU HÁN–VIỆT
// ══════════════════════════════════════════
var hvBridgeData = {
  easy:[
    {zh:'领袖',hv:'lãnh tụ',vn:'lãnh tụ, người dẫn đầu',note:'Trùng khít; trong bài 领袖人物 = nhân vật đầu đàn (không nhất thiết là chính trị gia).'},
    {zh:'现状',hv:'hiện trạng',vn:'hiện trạng, tình hình hiện nay',note:'Trùng khít. 改变现状 = thay đổi hiện trạng.'},
    {zh:'来历',hv:'lai lịch',vn:'lai lịch, nguồn gốc',note:'Trùng khít; dùng cả cho đồ vật, tên gọi: 名字的来历.'},
    {zh:'空白',hv:'không bạch',vn:'khoảng trống',note:'"Không bạch" ít dùng, nhưng "khoảng trắng" gợi đúng nghĩa: 填补空白 = lấp khoảng trống.'},
    {zh:'渴望',hv:'khát vọng',vn:'khát khao, khát vọng',note:'Trùng khít — nhưng 渴望 thường là ĐỘNG TỪ: 渴望成功.'},
    {zh:'童话',hv:'đồng thoại',vn:'truyện cổ tích, truyện thiếu nhi',note:'"Đồng thoại" = truyện cho trẻ em; nghĩa bóng: chuyện viển vông.'},
    {zh:'立体',hv:'lập thể',vn:'lập thể, ba chiều, nổi',note:'Trùng khít; 立体电影 = phim 3D, 立体感 = cảm giác nổi khối.'},
    {zh:'还原',hv:'hoàn nguyên',vn:'khôi phục nguyên trạng, tái hiện',note:'Trùng khít (phản ứng hoàn nguyên trong hoá học); 还 đọc huán.'},
    {zh:'素质',hv:'tố chất',vn:'tố chất, phẩm chất, năng lực',note:'Trùng khít; 综合素质 = năng lực tổng hợp.'},
    {zh:'号召',hv:'hiệu triệu',vn:'kêu gọi',note:'Trùng khít — "lời hiệu triệu".'},
    {zh:'证实',hv:'chứng thực',vn:'xác nhận, chứng thực',note:'Trùng khít.'},
    {zh:'统计',hv:'thống kê',vn:'thống kê',note:'Trùng khít. 据统计 = theo thống kê.'},
    {zh:'权威',hv:'quyền uy',vn:'có uy tín, có thẩm quyền',note:'Tiếng Việt "quyền uy" nghe như "quyền lực"; 权威专家 = chuyên gia đầu ngành, có uy tín.'}
  ],
  idiom:[
    {zh:'名副其实',hv:'danh phó kỳ thực',vn:'danh xứng với thực',note:'名 (tên) 副 (khớp với) 其实 (thực chất) → trái nghĩa 名不副实.'},
    {zh:'心甘情愿',hv:'tâm cam tình nguyện',vn:'cam tâm tình nguyện',note:'Tiếng Việt đảo thành "cam tâm tình nguyện" — nghĩa như nhau.'},
    {zh:'风餐露宿',hv:'phong xan lộ túc',vn:'dãi gió dầm sương',note:'Ăn trong gió, ngủ ngoài sương — cuộc sống vất vả ngoài trời (bài khoá).'},
    {zh:'非同一般',hv:'phi đồng nhất ban',vn:'khác thường, không tầm thường',note:'非 = không, 同一般 = giống bình thường → khác người.'},
    {zh:'相视而笑',hv:'tương thị nhi tiếu',vn:'nhìn nhau mà cười',note:'Nghĩa trùng khít từng chữ.'}
  ],
  trap:[
    {zh:'报酬',hv:'báo thù',vn:'thù lao, tiền công',
     warn:'Hán Việt "báo thù" trùng âm với "trả thù" (报仇 bàochóu)! 酬 = đền đáp bằng tiền → 报酬 = thù lao. Đừng nhầm với 报仇.'},
    {zh:'琢磨',hv:'trác ma',vn:'suy nghĩ, nghiền ngẫm',
     warn:'"Trác ma" gốc là mài giũa ngọc (đọc zhuómó). Đọc zuómo thì nghĩa là "suy đi tính lại" — nghĩa trong bài.'},
    {zh:'课题',hv:'khoá đề',vn:'đề tài (nghiên cứu), vấn đề cần giải quyết',
     warn:'Không phải "bài tập về nhà" (作业) hay "chủ đề bài học". 课题 = đề tài nghiên cứu: 研究课题.'},
    {zh:'指望',hv:'chỉ vọng',vn:'trông mong, trông cậy',
     warn:'Không liên quan "chỉ" (ngón tay, chỉ dẫn). 指望 = trông cậy vào: 别指望别人.'},
    {zh:'用户',hv:'dụng hộ',vn:'người dùng',
     warn:'户 ở đây không phải "hộ gia đình" — 用户 = người dùng (sản phẩm, phần mềm), 客户 = khách hàng.'},
    {zh:'评估',hv:'bình cổ',vn:'đánh giá, thẩm định',
     warn:'估 (cổ) = ước lượng (估计). Nhầm dễ gặp: viết 评古 hoặc 平估.'},
    {zh:'濒临',hv:'tần lâm',vn:'kề bên, đứng trước (nguy cơ)',
     warn:'濒 (bộ 氵) đọc bīn, không đọc "pín"; 濒临 + điều xấu: 濒临灭绝 / 破产 / 消亡.'}
  ]
};


// ══════════════════════════════════════════
// GHÉP TỪ — cụm trong bài khoá và phần 练习
// ══════════════════════════════════════════
var matchData = [
  {left:'压抑住',right:'兴奋'},
  {left:'瞪着眼睛',right:'注视'},
  {left:'濒临',right:'消亡'},
  {left:'致力于保护',right:'野生物种'},
  {left:'生物',right:'多样性'},
  {left:'风餐',right:'露宿'},
  {left:'领袖',right:'人物'},
  {left:'面带',right:'苦涩'},
  {left:'影像',right:'空白'},
  {left:'不分',right:'昼夜'},
  {left:'支撑',right:'开支'},
  {left:'建立',right:'影像库'},
  {left:'立体',right:'还原'},
  {left:'名副其实的',right:'博物学家'},
  {left:'专业',right:'素质'},
  {left:'发出',right:'号召'},
  {left:'成效',right:'显著'},
  {left:'浓厚的',right:'科考性质'},
  {left:'物种',right:'鉴别'},
  {left:'环境评估',right:'调查报告'},
  {left:'权威',right:'专家'}
];

// ══════════════════════════════════════════
// ĐIỀN TỪ
// ══════════════════════════════════════════
var fillData = [
  {pre:'保护',blank:'野生',post:'动物，就是保护人类自己。',hint:'(hoang dã)',ans:'野生'},
  {pre:'听到自己获奖的消息，她',blank:'压抑',post:'不住内心的激动，眼泪一下子流了下来。',hint:'(kìm nén)',ans:'压抑'},
  {pre:'检查',blank:'完毕',post:'后，请把试卷放在桌子上，安静地离开考场。',hint:'(xong, hoàn tất)',ans:'完毕'},
  {pre:'我刚想插嘴，妈妈就狠狠地',blank:'瞪',post:'了我一眼。',hint:'(lườm, trừng mắt)',ans:'瞪'},
  {pre:'台下几百双眼睛都在',blank:'注视',post:'着他，他紧张得手心直冒汗。',hint:'(nhìn chăm chú)',ans:'注视'},
  {pre:'这只小猫身上有黑色的花',blank:'斑',post:'，特别可爱。',hint:'(đốm, vằn)',ans:'斑'},
  {pre:'由于过度捕杀，这种动物已经',blank:'濒临',post:'灭绝。',hint:'(đứng bên bờ, kề sát)',ans:'濒临'},
  {pre:'毕业以后，她回到家乡，',blank:'致力',post:'于山区儿童的教育事业。',hint:'(dốc sức)',ans:'致力'},
  {pre:'他虽然只是个高中生，却很有',blank:'领袖',post:'风范，同学们都愿意听他的。',hint:'(lãnh tụ, thủ lĩnh)',ans:'领袖'},
  {pre:'二十年没见，老同学变化大得我几乎',blank:'辨认',post:'不出来了。',hint:'(nhận ra)',ans:'辨认'},
  {pre:'年轻人不应该满足于',blank:'现状',post:'，而应该勇于挑战自己。',hint:'(hiện trạng)',ans:'现状'},
  {pre:'这件古董看起来很普通，其实大有',blank:'来历',post:'。',hint:'(lai lịch)',ans:'来历'},
  {pre:'提起那段艰难的日子，爷爷脸上露出了',blank:'苦涩',post:'的笑容。',hint:'(cay đắng)',ans:'苦涩'},
  {pre:'一看到考题，我的大脑就一片',blank:'空白',post:'。',hint:'(trống rỗng)',ans:'空白'},
  {pre:'这道题我',blank:'琢磨',post:'了一个晚上，终于想出了解法。',hint:'(nghiền ngẫm)',ans:'琢磨'},
  {pre:'沙漠地区',blank:'昼夜',post:'温差很大，白天热得要命，晚上却很冷。',hint:'(ngày đêm)',ans:'昼夜'},
  {pre:'为了给孩子治病，父母四处',blank:'奔波',post:'，到处借钱。',hint:'(bôn ba)',ans:'奔波'},
  {pre:'没有人强迫我，当志愿者是我',blank:'心甘情愿',post:'的。',hint:'(cam tâm tình nguyện)',ans:'心甘情愿'},
  {pre:'父亲去世以后，是母亲一个人',blank:'支撑',post:'起了这个家。',hint:'(chống đỡ, gánh vác)',ans:'支撑'},
  {pre:'这本小说特别',blank:'畅销',post:'，上市一个月就卖出了十万册。',hint:'(bán chạy)',ans:'畅销'},
  {pre:'下了一夜大雪，整个校园美得像',blank:'童话',post:'世界一样。',hint:'(truyện cổ tích)',ans:'童话'},
  {pre:'我们小组选了一个关于塑料污染的研究',blank:'课题',post:'。',hint:'(đề tài)',ans:'课题'},
  {pre:'这幅画的',blank:'立体',post:'感很强，画里的人好像要走出来一样。',hint:'(lập thể, nổi khối)',ans:'立体'},
  {pre:'警察通过监控录像',blank:'还原',post:'了事故发生的经过。',hint:'(tái hiện, khôi phục)',ans:'还原'},
  {pre:'一个优秀的运动员，不仅要有好的身体素质，还要有过硬的心理',blank:'素质',post:'。',hint:'(tố chất)',ans:'素质'},
  {pre:'学校',blank:'号召',post:'全体同学节约用水、用电。',hint:'(kêu gọi)',ans:'号召'},
  {pre:'这款学习软件的',blank:'用户',post:'已经超过了一千万。',hint:'(người dùng)',ans:'用户'},
  {pre:'据',blank:'统计',post:'，全班有一半以上的同学每天用手机超过三个小时。',hint:'(thống kê)',ans:'统计'},
  {pre:'越来越多的年轻人加入了保护野生动物的',blank:'队伍',post:'。',hint:'(đội ngũ)',ans:'队伍'},
  {pre:'自从换了学习方法，他的成绩有了',blank:'显著',post:'的提高。',hint:'(rõ rệt)',ans:'显著'}
];

// ══════════════════════════════════════════
// SẮP XẾP CÂU — mỗi điểm ngữ pháp (换句话说 · 为……所…… · 足以) ít nhất 2 câu
// ══════════════════════════════════════════
var sortData = [
  {words:['雪豹','正濒临消亡','，','换句话说','，','我们','很可能','再也见不到','这种动物了','。'],ans:'雪豹正濒临消亡，换句话说，我们很可能再也见不到这种动物了。',audio:'雪豹正濒临消亡，换句话说，我们很可能再也见不到这种动物了。'},
  {words:['他所有的辛劳','都是心甘情愿的','，','换句话说','，','没有人','强迫他','。'],ans:'他所有的辛劳都是心甘情愿的，换句话说，没有人强迫他。',audio:'他所有的辛劳都是心甘情愿的，换句话说，没有人强迫他。'},
  {words:['他一个月的工资','是我的三倍','，','也就是说','，','相当于','我三个月的','。'],ans:'他一个月的工资是我的三倍，也就是说，相当于我三个月的。',audio:'他一个月的工资是我的三倍，也就是说，相当于我三个月的。'},
  {words:['很多特有物种','还没来得及','为我们所了解','，','就','消失了','。'],ans:'很多特有物种还没来得及为我们所了解，就消失了。',audio:'很多特有物种还没来得及为我们所了解，就消失了。'},
  {words:['京酱肉丝','这道菜','为','很多人','所','称道','。'],ans:'京酱肉丝这道菜为很多人所称道。',audio:'京酱肉丝这道菜为很多人所称道。'},
  {words:['他','是个','有原则的人','，','绝不会','为金钱','所惑','。'],ans:'他是个有原则的人，绝不会为金钱所惑。',audio:'他是个有原则的人，绝不会为金钱所惑。'},
  {words:['这些材料','足以','说明','问题了','。'],ans:'这些材料足以说明问题了。',audio:'这些材料足以说明问题了。'},
  {words:['他们','渴望','拍出','足以','使人疯狂的','照片','。'],ans:'他们渴望拍出足以使人疯狂的照片。',audio:'他们渴望拍出足以使人疯狂的照片。'},
  {words:['只靠','一次考试','，','不足以','评估','一个学生的能力','。'],ans:'只靠一次考试，不足以评估一个学生的能力。',audio:'只靠一次考试，不足以评估一个学生的能力。'},
  {words:['请','写清地址','，','以便','邮递员','及时送信','。'],ans:'请写清地址，以便邮递员及时送信。',audio:'请写清地址，以便邮递员及时送信。'},
  {words:['这种电脑','体积小','，','便于','大家','携带','。'],ans:'这种电脑体积小，便于大家携带。',audio:'这种电脑体积小，便于大家携带。'},
  {words:['实践证实','，','这种','集合式工作','成效显著','。'],ans:'实践证实，这种集合式工作成效显著。',audio:'实践证实，这种集合式工作成效显著。'}
];

// ══════════════════════════════════════════
// CHỌN TỪ THÍCH HỢP
// ══════════════════════════════════════════
var errorFixMode = 'wordchoice';
var errorFixData = [
  {wrong:'现在很多手机都有人脸____功能，看一眼就能解锁。',opts:['识别','辨别','区别','告别'],ans:0,
   exp:'人脸识别 = nhận dạng khuôn mặt (thuật ngữ cố định). 辨别 = phân biệt (đúng/sai, phương hướng); 区别 = sự khác nhau; 告别 = từ biệt.'},
  {wrong:'你自己都不努力，怎么____别人帮你呢？',opts:['希望','失望','指望','盼望'],ans:2,
   exp:'指望 + người + V = trông cậy ai làm gì (hàm ý không nên trông cậy). 希望 / 盼望 là mong mỏi chung chung, không có nghĩa "trông cậy vào người khác"; 失望 = thất vọng.'},
  {wrong:'面对____的就业形势，大学生们要及早做好准备。',opts:['严格','严峻','严肃','严厉'],ans:1,
   exp:'形势严峻 = tình hình gay gắt. 严格 = nghiêm ngặt (yêu cầu, quy định); 严肃 = nghiêm túc (thái độ); 严厉 (bài 1) = nghiêm khắc (người).'},
  {wrong:'很多年轻人都____到外面去看看世界，开阔视野。',opts:['渴求','口渴','愿望','渴望'],ans:3,
   exp:'渴望 + V = khao khát làm gì. 愿望 là danh từ (nguyện vọng), không mang động từ phía sau; 渴求 văn viết, thường + danh từ (渴求知识); 口渴 = khát nước.'},
  {wrong:'这些事实____说明他是无辜的。',opts:['足够','充足','足以','满足'],ans:2,
   exp:'足以 + V = đủ để … (điểm ngữ pháp 3; 练习2 ④). 足够 hay đứng sau 有 / làm vị ngữ (时间足够); 充足 = đầy đủ (ánh sáng, nguồn cung); 满足 = thoả mãn.'},
  {wrong:'请在信封上写清地址，____邮递员及时把信送到。',opts:['以便','便于','为了','以免'],ans:0,
   exp:'Đầu phân câu sau, có chủ ngữ mới (邮递员) → liên từ 以便. 便于 là động từ, không đứng đầu phân câu mang chủ ngữ mới; 为了 thường đứng vế trước; 以免 = để tránh (ngược nghĩa).'},
  {wrong:'这种新型电脑体积小，____大家携带。',opts:['以便','方便','随便','便于'],ans:3,
   exp:'Nhờ điều kiện của bản thân (体积小) mà dễ làm gì → 便于 + V (bảng 词语辨析). 以便 không có nghĩa này; 方便大家携带 cũng hiểu được nhưng không phải cấu trúc của bài; 随便 = tuỳ tiện.'},
  {wrong:'这份工作虽然____不高，但是能学到很多东西。',opts:['报答','报酬','报告','报仇'],ans:1,
   exp:'报酬 = thù lao. 报答 = báo đáp (ân tình); 报告 = báo cáo; 报仇 = báo thù — cẩn thận đồng âm Hán Việt!'},
  {wrong:'他对中国非常了解，是个____的中国通。',opts:['名副其实','心甘情愿','莫名其妙','理所当然'],ans:0,
   exp:'名副其实的 + N = … đúng nghĩa (练习2 ②). 心甘情愿 = cam lòng; 莫名其妙 (bài 12) = khó hiểu; 理所当然 (bài 12) = đương nhiên.'},
  {wrong:'这位老中医医术____，治好了很多疑难病。',opts:['高级','高明','高超','高档'],ans:2,
   exp:'医术 / 技术 + 高超 = điêu luyện. 高级 = cao cấp; 高档 = hàng sang; 高明 cũng khen người giỏi (高明的医生) nhưng cụm quen với 技术/医术 là 高超.'},
  {wrong:'网上的这个说法还没有得到____，大家先别急着转发。',opts:['证件','证实','证书','保证'],ans:1,
   exp:'得到证实 = được xác nhận. 证件 = giấy tờ tuỳ thân; 证书 = chứng chỉ; 保证 = cam đoan.'},
  {wrong:'经过一年的治理，这条河的污染问题已经初见____。',opts:['成就','成果','成绩','成效'],ans:3,
   exp:'初见成效 = bước đầu có hiệu quả (cụm cố định). 成就 = thành tựu lớn; 成果 = thành quả; 成绩 = thành tích, điểm số.'},
  {wrong:'自从看了那部纪录片，弟弟就对野生动物产生了____的兴趣。',opts:['浓密','深厚','浓厚','厚重'],ans:2,
   exp:'浓厚的兴趣 = hứng thú sâu đậm (练习3 ①). 深厚 đi với 感情 / 友谊; 浓密 = rậm (tóc, cây); 厚重 = dày nặng.'},
  {wrong:'这份报告是由____机构发布的，数据比较可靠。',opts:['权威','威胁','威风','权利'],ans:0,
   exp:'权威机构 = cơ quan có uy tín. 威胁 = đe doạ; 威风 = oai phong; 权利 = quyền lợi.'},
  {wrong:'经过专家____，这幅画原来是假的。',opts:['区别','识别','告别','鉴别'],ans:3,
   exp:'鉴别 = giám định thật/giả (cần chuyên môn). 识别 = nhận ra, nhận dạng; 区别 = phân biệt / sự khác nhau; 告别 = từ biệt.'},
  {wrong:'不能只凭考试成绩来____一个学生是否优秀。',opts:['评论','评估','估计','批评'],ans:1,
   exp:'评估 = đánh giá, thẩm định (dựa trên tiêu chí). 评论 = bình luận; 估计 = ước đoán; 批评 = phê bình.'},
  {wrong:'雪豹正濒临消亡，____，将来我们很可能再也见不到它们了。',opts:['换句话说','总而言之','与此同时','不瞒你说'],ans:0,
   exp:'换句话说 = nói cách khác — giải thích lại vế trước bằng lời khác (điểm ngữ pháp 1). 总而言之 = tóm lại; 与此同时 = đồng thời; 不瞒你说 (bài 8) = nói thật với anh.'},
  {wrong:'很多特有物种还没来得及____我们所了解，就消失了。',opts:['被','让','为','给'],ans:2,
   exp:'Cấu trúc bị động văn viết 为 + N + 所 + V (điểm ngữ pháp 2). 被 / 让 / 给 không đi với 所.'}
];

// ══════════════════════════════════════════
// DỊCH — câu ghép, ôn từ HSK 6 bài 1–15 và HSK 4–5
// ══════════════════════════════════════════
var translateData = [
  {vi:'Báo tuyết đang đứng bên bờ diệt vong, nói cách khác, nếu không kịp thời bảo vệ, con cháu chúng ta có lẽ chỉ có thể thấy chúng trong ảnh.',zh:'雪豹正濒临消亡，换句话说，如果不及时保护，我们的后代也许只能在照片上见到它们了。',py:'Xuěbào zhèng bīnlín xiāowáng, huàn jù huà shuō, rúguǒ bù jíshí bǎohù, wǒmen de hòudài yěxǔ zhǐ néng zài zhàopiàn shang jiàndào tāmen le.',goiY:['濒临','换句话说','如果……','后代'],giai:'换句话说 đứng giữa hai vế, vế sau giải thích lại vế trước bằng hệ quả cụ thể; 濒临 + 消亡 / 灭绝; 后代 ôn bài 12.'},
  {vi:'Anh ấy là người có nguyên tắc, dù người khác đưa bao nhiêu tiền, anh ấy cũng tuyệt đối không bị đồng tiền mê hoặc.',zh:'他是个有原则的人，不管别人给多少钱，他都绝不会为金钱所惑。',py:'Tā shì ge yǒu yuánzé de rén, bùguǎn biérén gěi duōshao qián, tā dōu jué bú huì wéi jīnqián suǒ huò.',goiY:['不管……都……','为……所……','绝不'],giai:'为 + N + 所 + V: bị động văn viết, dạng phủ định đặt 不 trước 为 (不会为……所惑). 为 ở đây đọc wéi.'},
  {vi:'Những bức ảnh này đủ để chứng minh sự đa dạng sinh học ở đây, bởi vậy chúng tôi mong có thể xây dựng một kho hình ảnh để mọi người tiện tra cứu.',zh:'这些照片足以证明这里的生物多样性，因此我们希望建立一个影像库，以便大家查阅。',py:'Zhèxiē zhàopiàn zúyǐ zhèngmíng zhèli de shēngwù duōyàngxìng, yīncǐ wǒmen xīwàng jiànlì yí ge yǐngxiàngkù, yǐbiàn dàjiā cháyuè.',goiY:['足以','因此','以便','影像库'],giai:'Ba vế: 足以 + V (đủ để) → 因此 (kết quả) → 以便 đứng đầu vế cuối nêu mục đích, chủ ngữ mới 大家.'},
  {vi:'Họ bôn ba không kể ngày đêm chẳng qua là muốn chụp được những bức ảnh hay hơn, chứ không phải vì thù lao.',zh:'他们不分昼夜地奔波，无非是想拍出更好的照片，而并非为了报酬。',py:'Tāmen bù fēn zhòuyè de bēnbō, wúfēi shì xiǎng pāichū gèng hǎo de zhàopiàn, ér bìngfēi wèile bàochou.',goiY:['不分昼夜','奔波','无非','并非','报酬'],giai:'无非 (bài 5) = chẳng qua; 而并非 (bài 7) phủ định dứt khoát lý do bị hiểu nhầm; 不分昼夜地 làm trạng ngữ, nhớ 地.'},
  {vi:'Đợt quyên góp này hiệu quả rõ rệt; thực tiễn chứng minh, chỉ cần nhà trường vừa phát lời kêu gọi là các bạn học sinh đều sẵn lòng góp sức.',zh:'这次捐款活动成效显著，实践证实，只要学校一发出号召，同学们就都愿意出一份力。',py:'Zhè cì juānkuǎn huódòng chéngxiào xiǎnzhù, shíjiàn zhèngshí, zhǐyào xuéxiào yì fāchū hàozhào, tóngxuémen jiù dōu yuànyì chū yí fèn lì.',goiY:['成效显著','证实','只要……就……','一……就……','号召'],giai:'成效显著 là cụm chủ–vị cố định; 只要 + 一 + V……就……: chỉ cần vừa … là …; 出一份力 = góp một phần sức.'},
  {vi:'Tuy thù lao không cao, nhưng các nhiếp ảnh gia vẫn cam tâm tình nguyện dãi gió dầm sương nơi núi rừng, bởi họ khao khát lấp đầy khoảng trống hình ảnh của các khu bảo tồn.',zh:'虽然报酬不高，摄影师们却心甘情愿地在山野里风餐露宿，因为他们渴望填补保护区的影像空白。',py:'Suīrán bàochou bù gāo, shèyǐngshīmen què xīngān-qíngyuàn de zài shānyě li fēngcān-lùsù, yīnwèi tāmen kěwàng tiánbǔ bǎohùqū de yǐngxiàng kòngbái.',goiY:['虽然……却……','心甘情愿','渴望','空白'],giai:'虽然……却……: 却 đứng sau chủ ngữ vế sau; 心甘情愿地 + V; 填补空白 = lấp khoảng trống (cụm cố định).'},
  {vi:'Kỹ thuật chụp ảnh của cô ấy tuy điêu luyện, nhưng chỉ dựa vào một tấm ảnh thì chưa đủ để đánh giá tố chất chuyên môn của một nhiếp ảnh gia.',zh:'她的摄影技术固然高超，但是只凭一张照片，还不足以评估一个摄影师的专业素质。',py:'Tā de shèyǐng jìshù gùrán gāochāo, dànshì zhǐ píng yì zhāng zhàopiàn, hái bù zúyǐ pínggū yí ge shèyǐngshī de zhuānyè sùzhì.',goiY:['固然……但是……','高超','不足以','评估','素质'],giai:'固然 (bài 5) thừa nhận vế đầu rồi chuyển ý; phủ định của 足以 là 不足以 + V; 只凭 = chỉ dựa vào.'},
  {vi:'Đàn vẹt này bị trận tuyết lớn vây khốn; theo thống kê của các chuyên gia có uy tín, chỉ còn chưa đến một nửa số con sống sót.',zh:'这群鹦鹉为大雪所困，据权威专家统计，只有不到一半活了下来。',py:'Zhè qún yīngwǔ wéi dàxuě suǒ kùn, jù quánwēi zhuānjiā tǒngjì, zhǐyǒu bú dào yíbàn huóle xiàlái.',goiY:['为……所……','据……统计','权威'],giai:'为大雪所困 (练一练 ②) = bị tuyết vây khốn — văn viết; 据 + N + 统计 = theo thống kê của …; 活了下来 = sống sót.'},
  {vi:'Xét thấy nhiều người không biết lai lịch của các loài động vật đặc hữu, nhóm chúng tôi quyết định lấy việc bảo vệ động vật hoang dã làm đề tài nghiên cứu.',zh:'鉴于很多人不了解特有动物的来历，我们小组决定以保护野生动物为研究课题。',py:'Jiànyú hěn duō rén bù liǎojiě tèyǒu dòngwù de láilì, wǒmen xiǎozǔ juédìng yǐ bǎohù yěshēng dòngwù wéi yánjiū kètí.',goiY:['鉴于……，决定……','来历','以……为……','课题'],giai:'鉴于 (bài 12) nêu căn cứ ở vế trước; 以 A 为 B (bài 11) = lấy A làm B; 课题 = đề tài nghiên cứu.'},
  {vi:'Đừng trông mong người khác giúp em nhận ra các loài chim; em cứ thử tự mình nghiền ngẫm, nói cách khác, kiến thức phải tự mình tích luỹ.',zh:'别指望别人帮你辨认鸟类，你不妨自己琢磨琢磨，换句话说，知识要靠自己积累。',py:'Bié zhǐwàng biérén bāng nǐ biànrèn niǎolèi, nǐ bùfáng zìjǐ zuómo zuómo, huàn jù huà shuō, zhīshi yào kào zìjǐ jīlěi.',goiY:['指望','辨认','不妨','琢磨琢磨','换句话说'],giai:'别指望…… = đừng trông cậy; 不妨 (bài 12) + V lặp (琢磨琢磨); 换句话说 mở vế tổng kết lại ý bằng lời khác.'}
];

// Chiều Trung → Việt — bám ý bài khoá, nội dung khác chiều trên
var translateDataRev = [
  {vi:'Các nhiếp ảnh gia kìm nén sự phấn khích, nín thở, dốc toàn lực chụp báo tuyết; chụp xong, vừa quay đầu lại, họ thấy hai con báo tuyết đang trố mắt nhìn mình.',zh:'摄影师们压抑住兴奋，憋住气，全力拍摄雪豹；拍摄完毕，一回头，发现两只雪豹正瞪着眼睛注视着自己。',py:'Shèyǐngshīmen yāyì zhù xīngfèn, biēzhù qì, quánlì pāishè xuěbào; pāishè wánbì, yì huítóu, fāxiàn liǎng zhī xuěbào zhèng dèngzhe yǎnjing zhùshìzhe zìjǐ.',goiY:['压抑住 = kìm nén','憋住气 = nín thở','完毕 = xong','瞪着眼睛 = trố mắt'],giai:'Chuỗi động tác liên tiếp — tiếng Việt giữ nhịp ngắn; 一回头 = vừa quay đầu lại; 注视着自己 dịch "nhìn chằm chằm vào mình".'},
  {vi:'Báo tuyết đang đứng bên bờ diệt vong; nói cách khác, trong tương lai không xa, rất có thể chúng ta sẽ không bao giờ còn thấy loài vật này nữa.',zh:'雪豹正濒临消亡，换句话说，在不久的将来我们很可能再也见不到这种动物。',py:'Xuěbào zhèng bīnlín xiāowáng, huàn jù huà shuō, zài bùjiǔ de jiānglái wǒmen hěn kěnéng zài yě jiàn bu dào zhè zhǒng dòngwù.',goiY:['濒临消亡 = bên bờ diệt vong','换句话说 = nói cách khác','再也……不 = không bao giờ … nữa'],giai:'再也 + 不/没 = không bao giờ … nữa (nhấn mạnh); 换句话说 dịch "nói cách khác", giữ dấu phẩy hai bên.'},
  {vi:'Sống lâu năm dãi gió dầm sương nơi núi rừng, họ không những không thấy khổ, mà ngược lại còn cảm thấy vô cùng vui sướng.',zh:'长期风餐露宿在山野，他们不但不觉得苦，反而感到无比的快乐。',py:'Chángqī fēngcān-lùsù zài shānyě, tāmen búdàn bù juéde kǔ, fǎn\'ér gǎndào wúbǐ de kuàilè.',goiY:['风餐露宿 = dãi gió dầm sương','不但不……反而…… = không những không … mà ngược lại','无比 = vô cùng'],giai:'不但不……反而……: vế sau trái với dự đoán thông thường; 风餐露宿 dịch bằng thành ngữ Việt "dãi gió dầm sương".'},
  {vi:'Người ta nhận ra hươu cao cổ, khỉ đột, hà mã, biết cả nguồn gốc của chúng, nhưng lại không biết linh dương Tây Tạng của chính nước mình.',zh:'人们能识别长颈鹿、大猩猩、河马，知道它们的来历，却不认识我们自己国家的藏羚羊。',py:'Rénmen néng shíbié chángjǐnglù, dàxīngxing, hémǎ, zhīdào tāmen de láilì, què bú rènshi wǒmen zìjǐ guójiā de zànglíngyáng.',goiY:['识别 = nhận ra','来历 = nguồn gốc','却 = nhưng lại'],giai:'却 đặt trước động từ vế sau tạo đối lập bất ngờ — dịch "nhưng lại"; 自己国家的 dịch "của chính nước mình".'},
  {vi:'Nhiều loài động thực vật đến một tấm ảnh rõ nét cũng không có, mọi người không biết chúng thì làm sao trông mong bảo vệ được?',zh:'许多动植物连一张清楚的照片都没有，大家不认识，怎么指望保护？',py:'Xǔduō dòng-zhíwù lián yì zhāng qīngchu de zhàopiàn dōu méiyǒu, dàjiā bú rènshi, zěnme zhǐwàng bǎohù?',goiY:['连……都…… = đến … cũng','指望 = trông mong','怎么……？= làm sao … được (phản vấn)'],giai:'Câu phản vấn 怎么指望保护 = không thể trông mong bảo vệ; dịch thêm "được" cuối câu cho tự nhiên.'},
  {vi:'Nghiêm trọng hơn là rất nhiều loài đặc hữu còn chưa kịp được chúng ta biết đến thì đã biến mất rồi.',zh:'更严峻的是，很多特有物种还没来得及为我们所了解，就消失了。',py:'Gèng yánjùn de shì, hěn duō tèyǒu wùzhǒng hái méi láidejí wéi wǒmen suǒ liǎojiě, jiù xiāoshī le.',goiY:['严峻 = nghiêm trọng','来得及 = kịp','为……所…… = được / bị …'],giai:'为我们所了解 — bị động văn viết, dịch "được chúng ta biết đến"; 还没……就…… = chưa … thì đã ….'},
  {vi:'Họ khao khát chụp được những bức ảnh đủ sức khiến người ta phát cuồng, để trang trải khoản chi phí khổng lồ khi đi sâu vào vùng hoang dã.',zh:'他们渴望拍出足以使人疯狂的照片，以便支撑他们深入野外的巨大开支。',py:'Tāmen kěwàng pāichū zúyǐ shǐ rén fēngkuáng de zhàopiàn, yǐbiàn zhīchēng tāmen shēnrù yěwài de jùdà kāizhī.',goiY:['渴望 = khao khát','足以 = đủ để','以便 = để','支撑 = trang trải'],giai:'足以使人疯狂的 — định ngữ dài, dịch "đủ sức khiến người ta phát cuồng"; 支撑开支 dịch "trang trải chi phí", không dịch "chống đỡ".'},
  {vi:'Nhiếp ảnh gia của IBE ai cũng là nhà vạn vật học đúng nghĩa, không những có kỹ thuật điêu luyện mà còn có tố chất chuyên môn khác thường.',zh:'IBE的摄影师个个是名副其实的博物学家，不但有高超的摄影技术，还有非同一般的专业素质。',py:'IBE de shèyǐngshī gègè shì míngfùqíshí de bówùxuéjiā, búdàn yǒu gāochāo de shèyǐng jìshù, hái yǒu fēitóng-yìbān de zhuānyè sùzhì.',goiY:['个个 = ai cũng','名副其实 = đúng nghĩa','高超 = điêu luyện','非同一般 = khác thường'],giai:'名副其实的 + N dịch gọn "… đúng nghĩa"; 不但……还…… = không những … mà còn ….'},
  {vi:'Họ phân tán khắp cả nước, Từ Kiện vừa phát lời kêu gọi là mọi người lập tức tập hợp lại; thực tiễn chứng minh cách làm này hiệu quả rõ rệt.',zh:'他们分散在全国各地，徐健一发出号召，大家立刻聚在一起；实践证实，这种做法成效显著。',py:'Tāmen fēnsàn zài quánguó gèdì, Xú Jiàn yì fāchū hàozhào, dàjiā lìkè jù zài yìqǐ; shíjiàn zhèngshí, zhè zhǒng zuòfǎ chéngxiào xiǎnzhù.',goiY:['一……就/立刻…… = vừa … là …','号召 = kêu gọi','证实 = chứng minh','成效显著 = hiệu quả rõ rệt'],giai:'一 + V……，(主语) + 立刻……: hai hành động nối tiếp ngay; 实践证实 dịch "thực tiễn chứng minh".'},
  {vi:'Sau khi dự án kết thúc, họ còn nộp cho khu bảo tồn địa phương một bản báo cáo điều tra đánh giá môi trường, vì vậy tác phẩm của họ mang đậm tính chất khảo sát khoa học.',zh:'项目结束后，他们还会向当地保护区提交一份环境评估调查报告，所以他们的作品带有浓厚的科考性质。',py:'Xiàngmù jiéshù hòu, tāmen hái huì xiàng dāngdì bǎohùqū tíjiāo yí fèn huánjìng pínggū diàochá bàogào, suǒyǐ tāmen de zuòpǐn dàiyǒu nónghòu de kēkǎo xìngzhì.',goiY:['向……提交 = nộp cho','评估 = đánh giá','浓厚 = đậm','科考 = khảo sát khoa học'],giai:'向 + nơi nhận + 提交 + văn bản; 带有浓厚的……性质 dịch "mang đậm tính chất …".'}
];


// ══════════════════════════════════════════
// LUYỆN VIẾT — đề 运用 · 写一写 của sách (tr. 175): 缩写 bài khoá ~400 chữ, tham khảo bảng 练习5
// ══════════════════════════════════════════
var writingData = {
  kieu:'sgk', soChu:400,
  de:'为了保护和宣传野生动物，徐健成立了IBE，专门为野生动物拍照，他们的作品不但摄影技术高超，还带有浓厚的科考性质。请参考练习5，把课文缩写成400字左右的短文。',
  prompt:'Để bảo vệ và tuyên truyền về động vật hoang dã, Từ Kiện đã thành lập IBE, chuyên chụp ảnh động vật hoang dã; tác phẩm của họ không những có kỹ thuật chụp điêu luyện mà còn mang đậm tính chất khảo sát khoa học. Hãy tham khảo bài tập 5, viết tóm tắt bài khoá thành một đoạn văn khoảng 400 chữ.',
  dan:[
    {hoi:'徐健他们的工作是什么？',goiY:'①……摄影师 ②博物学家'},
    {hoi:'为什么大家对非洲生物的熟悉程度远远大于自己的国家？',goiY:'影像空白'},
    {hoi:'徐健他们以前希望自己为野生动物拍摄的照片可以怎样？结果呢？',goiY:'①吸引……购买 ②支撑……开支 ③但……，几近……'},
    {hoi:'IBE的工作内容和工作方式分别是什么？',goiY:'①为……提供服务，建……影像库，还原…… ②分散，号召，聚在一起，集合式工作'},
    {hoi:'为什么说IBE的作品带有浓厚的科考性质？',goiY:'每张照片都有……可供使用，精确统计……，物种鉴别，动物行为分析，提交……调查报告'}
  ],
  tuNen:['换句话说','为……所……','足以','濒临','致力于','名副其实','高超','号召','成效显著','浓厚'],
  cauTruc:[
    {ten:'……正濒临……，换句话说，……', nhan:'Mở bài · nêu vấn đề', vd:'雪豹等许多野生动物正濒临消亡，换句话说，将来我们很可能再也见不到它们了。', khi:'Mở đầu bằng tình trạng nguy cấp, dùng 换句话说 giải thích hệ quả — dẫn vào nhân vật.'},
    {ten:'……是一群致力于……的……，也是……', nhan:'Giới thiệu nhân vật', vd:'徐健和他的伙伴们是一群致力于保护野生物种的摄影师，也是博物学家。', khi:'Trả lời dòng 1 của bảng: họ là ai, làm gì.'},
    {ten:'……，这是因为……', nhan:'Giải thích nguyên nhân', vd:'人们对非洲动物更熟悉，这是因为自然保护区存在影像空白。', khi:'Trả lời dòng 2: nêu hiện tượng trước, nguyên nhân (影像空白) sau.'},
    {ten:'以前，……希望……，以便……。但……，……几近童话。', nhan:'Mong muốn → kết quả', vd:'以前，他们希望靠卖照片支撑开支，但摄影师报酬很低，这样的想法几近童话。', khi:'Trả lời dòng 3: 以便 nêu mục đích, 但 chuyển sang kết quả thất bại.'},
    {ten:'于是……成立了……，为……提供服务，……', nhan:'Bước ngoặt', vd:'于是徐健成立了IBE，为保护区、政府等各类课题提供服务。', khi:'Trả lời dòng 4 (nội dung công việc): 于是 nối với thất bại ở trên.'},
    {ten:'平时……，……一……，就……', nhan:'Cách làm việc', vd:'他们平时分散在全国各地，徐健一发出号召，大家就立刻聚在一起。', khi:'Trả lời dòng 4 (cách làm việc): cấu trúc 一……就…….'},
    {ten:'……带有浓厚的……性质：……；……；……', nhan:'Liệt kê bằng dấu ；', vd:'IBE的作品带有浓厚的科考性质：每张照片都有详细的数据；他们还进行物种鉴别……', khi:'Trả lời dòng 5: dấu hai chấm dẫn ý, các ý ngăn bằng dấu ；.'}
  ],
  checklist:[
    'Đủ khoảng 400 chữ Hán chưa (khoảng 360–460, không đếm dấu câu)?',
    'Có đủ 5 ý theo đúng thứ tự bảng bài tập 5 (họ là ai — vì sao người ta lạ động vật nước mình — mong muốn và kết quả — IBE làm gì, làm thế nào — vì sao mang tính khảo sát khoa học) chưa?',
    'Đã dùng ít nhất 2 trong 3 điểm ngữ pháp của bài (换句话说 / 为……所…… / 足以) và ít nhất 6 từ mới chưa?',
    'Có viết bằng lời của mình (tóm tắt, bỏ chi tiết phụ như tên 8 loài động vật) thay vì chép nguyên bài khoá không?',
    'Các con số, tên riêng (IBE, 1500只, 梅里雪山) có chính xác không, câu kết có nhắc tới hiện tại của đội ngũ không?'
  ],
  model:{
    zh:'雪豹、藏羚羊等许多野生动物正濒临消亡，换句话说，将来我们很可能再也见不到它们了。徐健和他的伙伴们就是一群致力于保护野生物种的摄影师，也是记录中国生物多样性的博物学家。他们长期在山野里风餐露宿，却感到无比快乐。可是，人们能识别长颈鹿、河马，对非洲动物的熟悉程度远远大于自己的国家。这是因为自然保护区存在影像空白，许多动植物连一张清楚的照片都没有，很多特有物种还没来得及为我们所了解，就消失了。以前，徐健他们希望拍出足以吸引大家心甘情愿购买的照片，以便支撑深入野外的巨大开支。但摄影作品不是畅销书，摄影师报酬很低，这样的想法几近童话。于是徐健成立了IBE，为保护区、政府等各类课题提供服务，建立野生动植物影像库，立体还原一个地区的生态多样性。IBE的摄影师个个都是名副其实的博物学家，技术高超，素质非同一般。他们平时分散在全国各地，徐健一发出号召，大家就立刻聚在一起。实践证实，这种集合式工作成效显著。IBE的作品带有浓厚的科考性质：每张照片都有详细的数据可供使用，比如精确统计的动物数量；拍摄的同时，他们还进行物种鉴别和动物行为分析；项目结束后，还会向当地保护区提交环境评估调查报告。如今，徐健和他的队伍仍然天天在路上忙碌着。',
    py:'Xuěbào, zànglíngyáng děng xǔduō yěshēng dòngwù zhèng bīnlín xiāowáng, huàn jù huà shuō, jiānglái wǒmen hěn kěnéng zài yě jiàn bu dào tāmen le. Xú Jiàn hé tā de huǒbànmen jiù shì yì qún zhìlì yú bǎohù yěshēng wùzhǒng de shèyǐngshī, yě shì jìlù Zhōngguó shēngwù duōyàngxìng de bówùxuéjiā. Tāmen chángqī zài shānyě li fēngcān-lùsù, què gǎndào wúbǐ kuàilè. Kěshì, rénmen néng shíbié chángjǐnglù, hémǎ, duì Fēizhōu dòngwù de shúxī chéngdù yuǎnyuǎn dàyú zìjǐ de guójiā. Zhè shì yīnwèi zìrán bǎohùqū cúnzài yǐngxiàng kòngbái, xǔduō dòng-zhíwù lián yì zhāng qīngchu de zhàopiàn dōu méiyǒu, hěn duō tèyǒu wùzhǒng hái méi láidejí wéi wǒmen suǒ liǎojiě, jiù xiāoshī le. Yǐqián, Xú Jiàn tāmen xīwàng pāichū zúyǐ xīyǐn dàjiā xīngān-qíngyuàn gòumǎi de zhàopiàn, yǐbiàn zhīchēng shēnrù yěwài de jùdà kāizhī. Dàn shèyǐng zuòpǐn bú shì chàngxiāoshū, shèyǐngshī bàochou hěn dī, zhèyàng de xiǎngfǎ jījìn tónghuà. Yúshì Xú Jiàn chénglìle IBE, wèi bǎohùqū, zhèngfǔ děng gè lèi kètí tígōng fúwù, jiànlì yěshēng dòng-zhíwù yǐngxiàngkù, lìtǐ huányuán yí ge dìqū de shēngtài duōyàngxìng. IBE de shèyǐngshī gègè dōu shì míngfùqíshí de bówùxuéjiā, jìshù gāochāo, sùzhì fēitóng-yìbān. Tāmen píngshí fēnsàn zài quánguó gèdì, Xú Jiàn yì fāchū hàozhào, dàjiā jiù lìkè jù zài yìqǐ. Shíjiàn zhèngshí, zhè zhǒng jíhé shì gōngzuò chéngxiào xiǎnzhù. IBE de zuòpǐn dàiyǒu nónghòu de kēkǎo xìngzhì: měi zhāng zhàopiàn dōu yǒu xiángxì de shùjù kě gōng shǐyòng, bǐrú jīngquè tǒngjì de dòngwù shùliàng; pāishè de tóngshí, tāmen hái jìnxíng wùzhǒng jiànbié hé dòngwù xíngwéi fēnxī; xiàngmù jiéshù hòu, hái huì xiàng dāngdì bǎohùqū tíjiāo huánjìng pínggū diàochá bàogào. Rújīn, Xú Jiàn hé tā de duìwu réngrán tiāntiān zài lù shang mánglùzhe.',
    vn:'Báo tuyết, linh dương Tây Tạng cùng nhiều loài động vật hoang dã khác đang đứng bên bờ diệt vong; nói cách khác, sau này rất có thể chúng ta sẽ không bao giờ còn thấy chúng nữa. Từ Kiện và các cộng sự chính là một nhóm nhiếp ảnh gia dốc sức bảo vệ các loài hoang dã, đồng thời là những nhà vạn vật học ghi lại sự đa dạng sinh học của Trung Quốc. Họ quanh năm dãi gió dầm sương nơi núi rừng mà vẫn thấy vô cùng vui sướng. Thế nhưng, người ta nhận ra hươu cao cổ, hà mã, mức độ quen thuộc với động vật châu Phi vượt xa động vật nước mình. Đó là vì các khu bảo tồn thiên nhiên còn trống trơn về hình ảnh, nhiều loài động thực vật đến một tấm ảnh rõ nét cũng không có, rất nhiều loài đặc hữu còn chưa kịp được chúng ta biết đến thì đã biến mất. Trước đây, nhóm Từ Kiện mong chụp được những bức ảnh đủ sức thu hút mọi người cam tâm tình nguyện bỏ tiền mua, để trang trải khoản chi phí khổng lồ khi đi sâu vào vùng hoang dã. Nhưng tác phẩm nhiếp ảnh đâu phải sách bán chạy, thù lao nhiếp ảnh gia rất thấp, ý tưởng ấy gần như chuyện cổ tích. Thế là Từ Kiện thành lập IBE, cung cấp dịch vụ cho các đề tài của khu bảo tồn, chính phủ…, xây dựng kho hình ảnh động thực vật hoang dã, tái hiện đa chiều sự đa dạng sinh thái của một vùng. Nhiếp ảnh gia của IBE ai cũng là nhà vạn vật học đúng nghĩa, kỹ thuật điêu luyện, tố chất khác thường. Bình thường họ phân tán khắp cả nước, Từ Kiện vừa phát lời kêu gọi là mọi người lập tức tập hợp lại. Thực tiễn chứng minh cách làm việc kiểu tập hợp này hiệu quả rõ rệt. Tác phẩm của IBE mang đậm tính chất khảo sát khoa học: mỗi bức ảnh đều có số liệu chi tiết để sử dụng, chẳng hạn số lượng động vật được thống kê chính xác; song song với việc chụp ảnh, họ còn giám định loài và phân tích hành vi động vật; khi dự án kết thúc, họ còn nộp cho khu bảo tồn địa phương báo cáo điều tra đánh giá môi trường. Giờ đây, Từ Kiện và đội ngũ của anh vẫn ngày ngày tất bật trên đường.'
  }
};

// ══════════════════════════════════════════
// LUYỆN NÓI — đúng bảng 练习5 của sách: 根据课文内容回答问题
// ══════════════════════════════════════════
var speakingData = {
  intro:'Đây là bảng bài tập 5 trong sách: <b>根据课文内容回答问题</b> (trả lời câu hỏi theo nội dung bài khoá). Mỗi câu hỏi là một dòng của bảng, cột gợi ý giữ nguyên như sách. Bấm loa nghe câu hỏi, <b>tự ghi âm câu trả lời trước</b> rồi mới mở câu mẫu. Cố dùng đúng các từ trong gợi ý.',
  questions:[
    {q_zh:'徐健他们的工作是什么？',
     q_vn:'Công việc của nhóm Từ Kiện là gì?',
     hint:'①……摄影师 ②博物学家',
     sample:'徐健他们是野生动植物摄影师，专门为野生动物拍照。同时，他们也是致力于保护野生物种，记录和展示中国生物多样性的博物学家。',
     sample_vn:'Nhóm Từ Kiện là những nhiếp ảnh gia động thực vật hoang dã, chuyên chụp ảnh động vật hoang dã. Đồng thời, họ cũng là những nhà vạn vật học dốc sức bảo vệ các loài hoang dã, ghi lại và giới thiệu sự đa dạng sinh học của Trung Quốc.',
     note:'Hai ý nối bằng 同时……也……; định ngữ dài: 致力于……的博物学家.'},
    {q_zh:'为什么大家对非洲生物的熟悉程度远远大于自己的国家？',
     q_vn:'Vì sao mức độ quen thuộc của mọi người với sinh vật châu Phi vượt xa nước mình?',
     hint:'影像空白',
     sample:'因为自然保护区存在影像空白。许多动植物连一张清楚的照片都没有，大家不认识，更谈不上保护了。很多特有物种还没来得及为我们所了解，就消失了。',
     sample_vn:'Vì các khu bảo tồn thiên nhiên còn trống trơn về hình ảnh. Nhiều loài động thực vật đến một tấm ảnh rõ nét cũng không có, mọi người không biết chúng thì càng không nói gì đến bảo vệ. Rất nhiều loài đặc hữu còn chưa kịp được chúng ta biết đến thì đã biến mất.',
     note:'因为…… mở đầu câu trả lời; 连……都没有; dùng 为……所…… (điểm ngữ pháp 2).'},
    {q_zh:'徐健他们以前希望自己为野生动物拍摄的照片可以怎样？结果呢？',
     q_vn:'Trước đây nhóm Từ Kiện mong những bức ảnh động vật hoang dã mình chụp có thể thế nào? Kết quả ra sao?',
     hint:'①吸引……购买 ②支撑……开支 ③但……，几近……',
     sample:'他们希望拍出足以使人疯狂的照片，吸引大家心甘情愿地去购买，以便支撑他们深入野外的巨大开支。但摄影作品不是畅销书，摄影师报酬很低，所以这样的想法几近童话。',
     sample_vn:'Họ mong chụp được những bức ảnh đủ sức khiến người ta phát cuồng, thu hút mọi người cam tâm tình nguyện bỏ tiền mua, để trang trải khoản chi phí khổng lồ khi đi sâu vào vùng hoang dã. Nhưng tác phẩm nhiếp ảnh đâu phải sách bán chạy, thù lao nhiếp ảnh gia rất thấp, nên ý tưởng ấy gần như chuyện cổ tích.',
     note:'足以 + V; 以便 đứng đầu vế nêu mục đích; 但……，几近童话 = kết quả thất bại.'},
    {q_zh:'IBE的工作内容和工作方式分别是什么？',
     q_vn:'Nội dung công việc và cách làm việc của IBE lần lượt là gì?',
     hint:'①为……提供服务，建……影像库，还原…… ②分散，号召，聚在一起，集合式工作',
     sample:'IBE的工作内容是为保护区、政府等各类课题提供服务，建立野生动植物影像库，立体还原一个地区的生态多样性。工作方式是：摄影师们平时分散在全国各地，徐健一发出号召，大家就立刻聚在一起，这种集合式工作成效显著。',
     sample_vn:'Nội dung công việc của IBE là cung cấp dịch vụ cho các đề tài của khu bảo tồn, chính phủ…, xây dựng kho hình ảnh động thực vật hoang dã, tái hiện đa chiều sự đa dạng sinh thái của một vùng. Cách làm việc là: bình thường các nhiếp ảnh gia phân tán khắp cả nước, Từ Kiện vừa phát lời kêu gọi là mọi người lập tức tập hợp lại; cách làm việc kiểu tập hợp này hiệu quả rõ rệt.',
     note:'分别 → trả lời tách hai phần: 工作内容是…… / 工作方式是……; 一……就…….'},
    {q_zh:'为什么说IBE的作品带有浓厚的科考性质？',
     q_vn:'Vì sao nói tác phẩm của IBE mang đậm tính chất khảo sát khoa học?',
     hint:'每张照片都有……可供使用，精确统计……，物种鉴别，动物行为分析，提交……调查报告',
     sample:'因为IBE的每张照片都有详细的数据可供使用，比如精确统计的动物数量。拍摄的同时，他们还进行物种鉴别、动物行为分析等。项目结束后，他们还会向当地保护区提交一份环境评估调查报告。',
     sample_vn:'Vì mỗi bức ảnh của IBE đều có số liệu chi tiết để sử dụng, chẳng hạn số lượng động vật được thống kê chính xác. Song song với việc chụp ảnh, họ còn giám định loài, phân tích hành vi động vật… Sau khi dự án kết thúc, họ còn nộp cho khu bảo tồn địa phương một bản báo cáo điều tra đánh giá môi trường.',
     note:'Liệt kê ba bằng chứng theo trình tự thời gian: 拍摄时 → 拍摄同时 → 项目结束后; có thể kể thêm ví dụ 1500 con vẹt.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🎧 NGHE THEO DẠNG ĐỀ HSK 6 — 听力 (sách HSK 6 không có sách bài tập nghe)
// ══════════════════════════════════════════════════════════════
var listenExamData = {
  intro: 'Đề HSK 6 phần nghe chỉ phát <b>một lượt</b>. Bấm nút loa nghe, trả lời ngay, rồi mới mở nguyên văn ra đối chiếu. ' +
         'Đừng mở nguyên văn trước — mở trước là mất tác dụng.',
  source: 'Soạn theo dạng đề HSK 6 · chủ đề bài 16',
  items: [
    {n:1,
     lines:[{sp:'女',zh:'你这几张雪豹的照片拍得真好！在动物园拍的吧？'},
            {sp:'男',zh:'哪儿啊，是在青海海拔四千多米的山上拍的。为了等它们出来，我们在山里风餐露宿了整整一个星期。'}],
     q:'关于这些照片，可以知道什么？',qvn:'Về những bức ảnh này, có thể biết điều gì?',
     opts:['是在动物园拍的','是在野外拍的','拍了一个月','是别人拍的'],ans:1,
     why:'哪儿啊 phủ định "动物园"; 在青海……山上拍的 → chụp ngoài thiên nhiên. Họ chờ một tuần (一个星期), không phải một tháng.',
     words:['雪豹','风餐露宿']},

    {n:2,
     lines:[{sp:'男',zh:'听说你们社团要去山区拍鸟，报酬多少？'},
            {sp:'女',zh:'什么报酬啊，一分钱也没有，路费还得自己出。不过大家都是心甘情愿的，能拍到珍稀鸟类就够开心了。'}],
     q:'女的是什么意思？',qvn:'Ý người phụ nữ là gì?',
     opts:['报酬很高','大家不想去了','没有报酬，但大家愿意去','路费由社团出'],ans:2,
     why:'一分钱也没有 → không có thù lao; 大家都是心甘情愿的 → mọi người tự nguyện. Tiền đi đường phải tự trả (自己出).',
     words:['报酬','心甘情愿']},

    {n:3,
     lines:[{sp:'女',zh:'这张照片里的鸟，你能辨认出是什么鸟吗？'},
            {sp:'男',zh:'太模糊了，我辨认不出来。你最好找个研究鸟类的权威专家鉴别一下。'}],
     q:'男的建议女的怎么做？',qvn:'Người đàn ông khuyên người phụ nữ làm gì?',
     opts:['找专家鉴别','重新拍一张','上网查一查','把照片删掉'],ans:0,
     why:'找个……权威专家鉴别一下 → nhờ chuyên gia giám định. Anh ấy không nhắc chụp lại hay tra mạng.',
     words:['辨认','权威','鉴别']},

    {n:4,
     lines:[{sp:'男',zh:'这次湿地保护的宣传活动效果怎么样？'},
            {sp:'女',zh:'成效挺显著的。据统计，活动以后，来湿地乱扔垃圾的游客减少了一大半。'}],
     q:'活动以后，发生了什么变化？',qvn:'Sau hoạt động, đã có thay đổi gì?',
     opts:['游客增加了一大半','湿地变小了','没有什么变化','乱扔垃圾的游客少多了'],ans:3,
     why:'乱扔垃圾的游客减少了一大半 → giảm hơn một nửa. 成效显著 = hiệu quả rõ rệt.',
     words:['成效','显著','统计']},

    {n:5,
     lines:[{sp:'女',zh:'你怎么一张照片也不卖？靠这个不能生活吗？'},
            {sp:'男',zh:'野生动物的照片又不是畅销书，想靠卖照片支撑开支，几近童话。我现在主要给保护区的研究课题提供服务。'}],
     q:'男的现在主要靠什么工作？',qvn:'Người đàn ông hiện chủ yếu làm công việc gì?',
     opts:['卖照片','写畅销书','给保护区的研究课题提供服务','讲童话故事'],ans:2,
     why:'我现在主要给保护区的研究课题提供服务. Bán ảnh để trang trải chỉ là "chuyện cổ tích" (几近童话).',
     words:['畅销','支撑','童话','课题']},

    {n:6,
     lines:[{sp:'男',zh:'这部纪录片拍得怎么样？'},
            {sp:'女',zh:'非常棒！它用立体的画面，把几十年前这片森林的样子真实地还原了出来。换句话说，看完你就知道我们失去了什么。'}],
     q:'女的认为这部纪录片怎么样？',qvn:'Người phụ nữ thấy bộ phim tài liệu này thế nào?',
     opts:['真实地还原了过去的森林','画面不清楚','内容太简单','只讲了现在的森林'],ans:0,
     why:'把几十年前这片森林的样子真实地还原了出来 → tái hiện chân thực khu rừng mấy chục năm trước.',
     words:['立体','还原','换句话说']},

    {n:7,
     lines:[{sp:'女',zh:'藏羚羊曾经一度濒临灭绝。上世纪八九十年代，由于非法捕杀，它们的数量减少到不足七万只。后来，国家建立了自然保护区，许多志愿者也响应号召，加入了保护藏羚羊的队伍。如今，藏羚羊的数量已经恢复到了三十多万只。'}],
     q:'藏羚羊的数量为什么能恢复？',qvn:'Vì sao số lượng linh dương Tây Tạng có thể phục hồi?',
     opts:['它们搬到了别的地方','非法捕杀的人越来越多','它们不再生病了','人们建立保护区并积极保护'],ans:3,
     why:'建立了自然保护区 + 志愿者……加入了保护藏羚羊的队伍 → nhờ con người bảo vệ. 非法捕杀 là nguyên nhân làm giảm số lượng.',
     words:['濒临','号召','队伍']},

    {n:8,
     lines:[{sp:'男',zh:'很多人以为，野生动物摄影师只要有高超的摄影技术就够了，其实并非如此。一个名副其实的野生动物摄影师，还得了解动物的习性，能识别不同的物种，更要有长期在野外奔波的耐心和体力。换句话说，技术只是最基本的素质。'}],
     q:'说话人的主要观点是什么？',qvn:'Quan điểm chính của người nói là gì?',
     opts:['只要技术好就能当野生动物摄影师','野生动物摄影师需要多方面的素质','野生动物摄影师不需要体力','拍动物比拍人容易'],ans:1,
     why:'其实并非如此 bác bỏ ý "chỉ cần kỹ thuật"; 技术只是最基本的素质 → cần nhiều tố chất khác (hiểu tập tính, nhận dạng loài, kiên nhẫn, thể lực). (并非 ôn bài 7)',
     words:['高超','名副其实','识别','奔波','素质']}
  ]
};

// ══════════════════════════════════════════════════════════════
// 💬 TÌNH HUỐNG — HOÀN THÀNH HỘI THOẠI
// ══════════════════════════════════════════════════════════════
var situationData = {
  intro: 'Mỗi tình huống cho sẵn lời của người kia. Em viết lời đáp của mình, <b>bắt buộc dùng đúng từ/cấu trúc ghi ở ô yêu cầu</b>. ' +
         'Viết xong mới mở câu mẫu — câu mẫu chỉ là MỘT cách nói, em nói khác mà đúng yêu cầu vẫn được.',
  items: [
    {scene:'Bạn cùng lớp hỏi vì sao em muốn tham gia câu lạc bộ bảo vệ động vật hoang dã.',
     a:{sp:'Bạn cùng lớp',zh:'你为什么想参加野生动物保护社团？又累又没有报酬。',vn:'Sao cậu lại muốn vào câu lạc bộ bảo vệ động vật hoang dã? Vừa mệt lại chẳng có thù lao.'},
     need:['Dùng 心甘情愿','Dùng 濒临'],
     sample:'很多野生动物正濒临灭绝，能为保护它们出一份力，再累我也心甘情愿。',
     samplePy:'Hěn duō yěshēng dòngwù zhèng bīnlín mièjué, néng wèi bǎohù tāmen chū yí fèn lì, zài lèi wǒ yě xīngān-qíngyuàn.',
     sampleVn:'Nhiều loài động vật hoang dã đang đứng bên bờ tuyệt chủng, được góp một phần sức bảo vệ chúng thì mệt mấy tớ cũng cam lòng.',
     tip:'再 + tính từ + 也……: dù … mấy cũng …; 濒临 + 灭绝 / 消亡.'},

    {scene:'Cô giáo hỏi em hiểu câu "他是个名副其实的中国通" nghĩa là gì.',
     a:{sp:'Cô giáo',zh:'“他是个名副其实的中国通”，这句话是什么意思？',vn:'"Anh ấy là một người thông thạo Trung Quốc đúng nghĩa" — câu này nghĩa là gì?'},
     need:['Dùng 换句话说'],
     sample:'意思是他对中国非常了解，换句话说，他真的配得上“中国通”这个名字。',
     samplePy:'Yìsi shì tā duì Zhōngguó fēicháng liǎojiě, huàn jù huà shuō, tā zhēn de pèi de shàng "Zhōngguótōng" zhège míngzi.',
     sampleVn:'Nghĩa là anh ấy rất hiểu Trung Quốc, nói cách khác, anh ấy thật sự xứng với cái tên "người thông thạo Trung Quốc".',
     tip:'换句话说 dùng để giải thích lại bằng lời khác — rất hợp khi giải nghĩa một câu.'},

    {scene:'Em gái muốn bỏ học đàn vì thấy tập ba tháng mà chưa tiến bộ.',
     a:{sp:'Em gái',zh:'我练了三个月钢琴，还是弹得不好，我不想学了。',vn:'Em tập piano ba tháng rồi mà vẫn chơi dở, em không muốn học nữa.'},
     need:['Dùng 足以 hoặc 不足以','Dùng 成效'],
     sample:'三个月的时间还不足以看出成效，你再坚持一段时间，肯定会有进步的。',
     samplePy:'Sān ge yuè de shíjiān hái bù zúyǐ kànchū chéngxiào, nǐ zài jiānchí yí duàn shíjiān, kěndìng huì yǒu jìnbù de.',
     sampleVn:'Ba tháng thì chưa đủ để thấy hiệu quả đâu, em cố thêm một thời gian nữa, chắc chắn sẽ tiến bộ.',
     tip:'不足以 + V = chưa đủ để …; 看出成效 = thấy được hiệu quả.'},

    {scene:'Lớp trưởng nhờ em nhắc mọi người đăng ký đi dã ngoại.',
     a:{sp:'Lớp trưởng',zh:'周末去郊外观鸟，你帮我在群里通知一下吧。',vn:'Cuối tuần đi ngắm chim ở ngoại ô, cậu thông báo giúp tớ trong nhóm nhé.'},
     need:['Dùng 以便','Dùng 统计'],
     sample:'大家注意：想去观鸟的同学，请在周三以前报名，以便班长统计人数。',
     samplePy:'Dàjiā zhùyì: xiǎng qù guān niǎo de tóngxué, qǐng zài zhōusān yǐqián bàomíng, yǐbiàn bānzhǎng tǒngjì rénshù.',
     sampleVn:'Mọi người chú ý: bạn nào muốn đi ngắm chim thì đăng ký trước thứ Tư, để lớp trưởng thống kê số người.',
     tip:'以便 đứng đầu phân câu sau, chủ ngữ có thể đổi (班长) — giống 做一做 ③.'},

    {scene:'Bạn hỏi em nghĩ gì về bộ phim tài liệu về động vật hoang dã vừa xem.',
     a:{sp:'Bạn',zh:'你觉得那部野生动物纪录片怎么样？',vn:'Cậu thấy bộ phim tài liệu về động vật hoang dã đó thế nào?'},
     need:['Dùng 为……所……','Dùng 高超 hoặc 浓厚'],
     sample:'摄影技术非常高超，片中的每一个画面都深深地为观众所喜爱，我看完以后对野生动物产生了浓厚的兴趣。',
     samplePy:'Shèyǐng jìshù fēicháng gāochāo, piàn zhōng de měi yí ge huàmiàn dōu shēnshēn de wéi guānzhòng suǒ xǐ\'ài, wǒ kànwán yǐhòu duì yěshēng dòngwù chǎnshēngle nónghòu de xìngqù.',
     sampleVn:'Kỹ thuật quay phim cực kỳ điêu luyện, từng khung hình trong phim đều được khán giả vô cùng yêu thích; xem xong tớ nảy sinh hứng thú sâu sắc với động vật hoang dã.',
     tip:'为 + N + 所 + V (văn viết, 为 đọc wéi); 对……产生浓厚的兴趣.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🎯 NÓI SAO CHO HAY — 得体 / 语体
// ══════════════════════════════════════════════════════════════
var registerData = {
  intro: 'Ở đây <b>cả hai câu đều đúng ngữ pháp</b> — không có câu sai. Việc của em là chọn câu <b>PHÙ HỢP HƠN</b> với hoàn cảnh. ' +
         'HSK 6 đòi hỏi phân biệt rõ khẩu ngữ và văn viết, lời thân mật và lời trang trọng.',
  items: [
    {scene:'Báo cáo khoa học nộp cho khu bảo tồn.',
     a:'我们数了半天，那群鹦鹉差不多有一千五百只吧。',b:'经精确统计，该鹦鹉越冬群数量为1500只，系近30年此地区最大规模。',better:'b',
     why:'Báo cáo khoa học cần số liệu chính xác và văn viết: 经精确统计, 该, 系. Câu a (数了半天, 差不多……吧) là lời kể miệng, số liệu không chắc chắn.'},

    {scene:'Nhắn tin kể cho bạn thân về chuyến chụp ảnh.',
     a:'昨天在山上拍到雪豹了，太激动了，我憋着气都不敢动！',b:'昨日于山上成功拍摄雪豹，本人压抑住兴奋，全力完成拍摄。',better:'a',
     why:'Với bạn thân, lời kể sinh động, cảm xúc (太激动了, 不敢动) tự nhiên hơn. Câu b (昨日, 于, 本人) giống thông cáo báo chí.'},

    {scene:'Thông báo tuyển tình nguyện viên dán ở trường.',
     a:'谁想去拍鸟就来找我啊，不给钱的哦！',b:'本社团现号召全体同学加入野生动物保护志愿者队伍，本活动不提供报酬。',better:'b',
     why:'Thông báo chính thức: 号召, 全体同学, 不提供报酬. Câu a thân mật, hợp để nói miệng với bạn bè.'},

    {scene:'Ông nội hỏi cháu công việc của chú nhiếp ảnh gia là gì.',
     a:'爷爷，叔叔就是专门去山里给野生动物拍照片的，拍完还帮保护区做研究。',b:'该摄影师致力于野生物种的影像记录，并为保护区各类课题提供服务。',better:'a',
     why:'Nói với ông nên dùng lời giản dị, dễ hiểu. Câu b (该, 致力于, 课题) đúng nhưng như văn bản giới thiệu.'},

    {scene:'Bài phát biểu khai mạc triển lãm ảnh động vật hoang dã.',
     a:'这些照片足以说明，我国生物多样性极为丰富，保护工作任重而道远。',b:'你们看，这些照片多好看啊，咱们国家的动物可多了！',better:'a',
     why:'Phát biểu khai mạc cần trang trọng: 足以说明, 极为, 任重而道远. Câu b là lời cảm thán khi đi xem cùng bạn.'},

    {scene:'Hỏi mượn máy ảnh của anh họ.',
     a:'哥，你的相机周末借我用一下行吗？我想去公园拍鸟。',b:'鉴于本人周末拟赴公园拍摄鸟类，特申请借用阁下相机。',better:'a',
     why:'Với người thân, hỏi mượn bằng lời thân mật (哥, 借我用一下行吗). Câu b (鉴于, 拟赴, 阁下) quá khách sáo, nghe như đùa.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🗣️ KỂ LẠI BÀI ĐỌC — theo bảng 练习5 của sách
// ══════════════════════════════════════════════════════════════
var retellData = {
  intro: 'Dựa vào bảng bài tập 5 trong sách (<b>根据课文内容回答问题</b>), kể tóm tắt bài khoá bằng lời của em, ' +
         'KHÔNG đọc thuộc lòng. Nhìn câu hỏi và gợi ý từng dòng, bấm ghi âm rồi kể khoảng 2–3 phút.',
  outline: [
    {step:'徐健他们的工作是什么？', cue:'①……摄影师 ②博物学家', words:['野生','致力','压抑','完毕','瞪','注视','斑','濒临']},
    {step:'为什么大家对非洲生物的熟悉程度远远大于自己的国家？', cue:'影像空白', words:['领袖','辨认','现状','识别','来历','苦涩','指望','严峻','空白']},
    {step:'徐健他们以前希望自己为野生动物拍摄的照片可以怎样？结果呢？', cue:'①吸引……购买 ②支撑……开支 ③但……，几近……', words:['琢磨','昼夜','奔波','渴望','足以','心甘情愿','以便','支撑','畅销','报酬','童话']},
    {step:'IBE的工作内容和工作方式分别是什么？', cue:'①为……提供服务，建……影像库，还原…… ②分散，号召，聚在一起，集合式工作', words:['课题','立体','还原','名副其实','高超','素质','号召','证实','成效','显著','用户']},
    {step:'为什么说IBE的作品带有浓厚的科考性质？', cue:'每张照片都有……可供使用，精确统计……，物种鉴别，动物行为分析，提交……调查报告', words:['浓厚','统计','权威','鉴别','评估','队伍']}
  ],
  checklist: [
    'Kể đủ 5 ý theo đúng thứ tự bảng chưa?',
    'Ý 2 có nói rõ nguyên nhân là "khoảng trống hình ảnh" (影像空白) và dùng 为……所…… không?',
    'Ý 3 có đủ ba bước: mong muốn (吸引购买) — mục đích (支撑开支) — kết quả (几近童话) không?',
    'Ý 4 có tách rõ hai phần "nội dung công việc" và "cách làm việc" không?',
    'Ý 5 có nêu đủ các bằng chứng: số liệu, thống kê chính xác, giám định loài, phân tích hành vi, báo cáo đánh giá không?'
  ]
};


// ══════════════════════════════════════════
// SGK · Bài tập trong sách (tr. 171–176) — đáp án theo đáp án sách
// (练习2 và 练一练 của 为……所…… / 足以 không có trong đáp án sách → câu tham khảo;
//  扩展 bài này chỉ có bảng 词汇 近义词 để làm quen, không có bài tập, không có 病句)
// ══════════════════════════════════════════
var sgkData = [
  {kieu:'mr', de:'模仿例子，写出更多的词语', vn:'Bắt chước ví dụ, viết thêm các từ khác (có chữ được đánh dấu chấm)',
   vd:{tu:'来历', chu:'历', ds:['经历','历史','简历','学历']},
   cau:[
     {tu:'濒临', chu:'临', dap:['面临','降临','光临','临时'], them:['来临','临近','亲临','身临其境','居高临下'],
      giai:'临 = đến gần, sắp tới, đối diện (濒临 = kề sát; 面临 = đối mặt; 光临 = quang lâm, ghé thăm). 临时 (lâm thời) là nghĩa mở rộng "sắp đến lúc".'},
     {tu:'领袖', chu:'袖', dap:['短袖','袖子','袖口','袖手旁观'], them:['长袖','衣袖','无袖','半袖'],
      giai:'袖 = tay áo (领袖 gốc là "cổ áo và tay áo" — phần nổi bật nhất của áo → người đứng đầu). 袖手旁观 = khoanh tay đứng nhìn.'},
     {tu:'识别', chu:'识', dap:['认识','知识','见识','常识'], them:['识字','相识','学识','意识','辨识','赏识'],
      giai:'识 = biết, nhận biết; hiểu biết (识别 = nhận ra; 常识 = kiến thức thường thức; 见识 = hiểu biết, tầm nhìn).'},
     {tu:'报酬', chu:'酬', dap:['酬劳','酬谢','薪酬','应酬'], them:['稿酬','酬金','按劳取酬','同工同酬'],
      giai:'酬 = đền đáp, trả công (bằng tiền, quà): 薪酬 = lương thưởng; 酬谢 = đền đáp cảm ơn; 应酬 = xã giao, tiếp khách.'}
   ]},

  {kieu:'gx', de:'用所给词语完成句子', vn:'Dùng từ cho sẵn hoàn thành câu (sách không in đáp án — dưới đây là câu gợi ý, em viết khác mà đúng từ, đúng nghĩa vẫn được)',
   cau:[
     {s:'请在信封上写清地址，＿＿。', tu:'以便', dap:'请在信封上写清地址，以便邮递员及时把信送到。',
      giai:'以便 đứng đầu phân câu sau, nêu mục đích của việc "ghi rõ địa chỉ"; chủ ngữ mới (邮递员) được.'},
     {s:'他对中国非常了解，是个＿＿。', tu:'名副其实', dap:'他对中国非常了解，是个名副其实的中国通。',
      giai:'名副其实的 + N: … đúng nghĩa, xứng với tên gọi.'},
     {s:'很多年轻人都＿＿。', tu:'渴望', dap:'很多年轻人都渴望到外面的世界去闯一闯。',
      giai:'渴望 + V/cụm động từ = khao khát làm gì.'},
     {s:'这些事实＿＿。', tu:'足以', dap:'这些事实足以证明他是无辜的。',
      giai:'足以 + V (说明 / 证明): hoàn toàn đủ để ….'},
     {s:'他从小就爱好写作，几十年来他一直＿＿。', tu:'致力于', dap:'他从小就爱好写作，几十年来他一直致力于儿童文学的创作。',
      giai:'致力于 + N / V = dốc sức vào lĩnh vực nào đó (lâu dài).'},
     {s:'孩子长大后都忙于自己的工作，父母＿＿。', tu:'指望', dap:'孩子长大后都忙于自己的工作，父母不能总指望他们陪在身边。',
      giai:'(不能 / 别) 指望 + người + V = (đừng) trông cậy ai làm gì. 忙于 ôn bài 7 (于).'}
   ]},

  {kieu:'gx', de:'把下列句子中叙述同一事物的两个小句用“换句话说”连接起来，使其成为具有解释说明意义的长句（注释1 · 练一练）', vn:'Nối hai câu nói về cùng một sự việc bằng 换句话说 để thành câu dài có ý giải thích (Chú thích 1 · Luyện tập). Câu giải thích chọn trong: D. 武松什么武器都没用，就用拳头打死了老虎 / E. 婚前要多看看对方的短处，婚后要多想想对方的长处 / F. 每天地球上就要多出十二万人. Đáp án sách: A+E, B+D, C+F.', dapSgk:true,
   cau:[
     {s:'A. 有人这样说，结婚前要睁大眼睛仔细瞧，结婚后就要睁一只眼闭一只眼（＋ D / E / F?）', tu:'换句话说', dap:'有人这样说，结婚前要睁大眼睛仔细瞧，结婚后就要睁一只眼闭一只眼。换句话说，婚前要多看看对方的短处，婚后要多想想对方的长处。',
      giai:'A + E: E nói thẳng ý nghĩa của câu nói hình ảnh "trước cưới mở to mắt, sau cưới nhắm một mắt".'},
     {s:'B. 中国古典小说《水浒传》中的武松赤手空拳打死了老虎（＋ D / E / F?）', tu:'换句话说', dap:'中国古典小说《水浒传》中的武松赤手空拳打死了老虎。换句话说，武松什么武器都没用，就用拳头打死了老虎。',
      giai:'B + D: D giải thích thành ngữ 赤手空拳 (tay không) = không dùng vũ khí gì, chỉ dùng nắm đấm.'},
     {s:'C. 现在，世界上每小时就有五千个孩子出生（＋ D / E / F?）', tu:'换句话说', dap:'现在，世界上每小时就有五千个孩子出生。换句话说，每天地球上就要多出十二万人。',
      giai:'C + F: đổi cách tính từ "mỗi giờ 5.000" sang "mỗi ngày 120.000" (5.000 × 24) — cùng một sự việc.'}
   ]},

  {kieu:'gx', de:'参考提示词，用“为……所……”完成句子；用“足以”改写句子（注释2–3 · 练一练）', vn:'Dựa vào từ gợi ý, dùng 为……所…… hoàn thành câu; dùng 足以 viết lại câu (Chú thích 2–3 · Luyện tập). Sách không in đáp án — dưới đây là câu gợi ý.',
   cau:[
     {s:'京酱肉丝这道菜＿＿。（很多人，称道）', tu:'为……所……', dap:'京酱肉丝这道菜为很多人所称道。',
      giai:'为 + 很多人 + 所 + 称道: được nhiều người khen ngợi (bị động văn viết).'},
     {s:'连日大雪，部分牧民＿＿，日前，救助他们的队伍已经出发，会给他们带去食品和衣物。（大雪，困）', tu:'为……所……', dap:'连日大雪，部分牧民为大雪所困，日前，救助他们的队伍已经出发，会给他们带去食品和衣物。',
      giai:'为大雪所困 = bị tuyết lớn vây khốn; động từ đơn âm 困 đứng ngay sau 所.'},
     {s:'废气、废水有望真正变废为宝，＿＿。（人们，利用）', tu:'为……所……', dap:'废气、废水有望真正变废为宝，为人们所利用。',
      giai:'为人们所利用 = được con người tận dụng.'},
     {s:'听说我们一年浪费掉的粮食够50万人吃一天了。', tu:'足以', dap:'听说我们一年浪费掉的粮食足以让50万人吃一天。',
      giai:'够……吃 → 足以让…… + V: hoàn toàn đủ để ….'},
     {s:'这些材料完全能够说明问题了。', tu:'足以', dap:'这些材料足以说明问题了。',
      giai:'完全能够 + V → 足以 + V (足以 đã chứa nghĩa "hoàn toàn có thể").'},
     {s:'哪怕在知识或信息方面只领先或落后几个星期、几天，甚至几个小时，就完全能够使一个企业利润剧增或面临破产。', tu:'足以', dap:'哪怕在知识或信息方面只领先或落后几个星期、几天，甚至几个小时，就足以使一个企业利润剧增或面临破产。',
      giai:'完全能够使…… → 足以使……: đủ để khiến ….'}
   ]},

  {kieu:'kho', de:'选择合适的词语填空', vn:'Chọn từ thích hợp điền vào chỗ trống (đoạn 1)', tu:['渴望','高超','昼夜','完毕','浓厚'],
   cau:[
     {s:'一天的工作处理＿＿，她终于可以休息一下了。在不分＿＿的忙碌之外，她非常＿＿拥有一段属于自己的时间。安静地读点儿书，去旅行，或者做自己喜欢做的事情。她对摄影有＿＿的兴趣，而且拍摄技术＿＿，如果有时间，她很想约上几个朋友，一起去野外拍些照片。',
      dap:['完毕','昼夜','渴望','浓厚','高超']}
   ]},
  {kieu:'kho', de:'选择合适的词语填空', vn:'Chọn từ thích hợp điền vào chỗ trống (đoạn 2)', tu:['童话','畅销','足以','报酬','心甘情愿'],
   cau:[
     {s:'我的朋友是个作家，他写的书很＿＿，自然他得到的＿＿也不少。年轻女孩子喜欢他写的＿＿式的爱情故事，虽然不真实，但＿＿带给人幻想和安慰。所以，每当他的新书出版，他的书迷们都会＿＿起大早排队去购买。',
      dap:['畅销','报酬','童话','足以','心甘情愿']}
   ]},

  {kieu:'kho', de:'将下列句子及其解释连线，并体会插入语的用法', vn:'Nối mỗi câu với lời giải thích của nó (chọn lời giải thích điền vào chỗ trống), cảm nhận cách dùng thành phần chen 也就是说 / 换句话说 / 就是说. Đáp án sách: ① B ② C ③ D ④ A', tu:['到了月底，钱就都花光了','他一个月的工资相当于我三个月的','没有人强迫他','他只穿名牌，不是名牌不穿'],
   cau:[
     {s:'他一个月的工资是我的三倍，也就是说，＿＿。', dap:['他一个月的工资相当于我三个月的']},
     {s:'他所有的辛劳都是心甘情愿的，换句话说，＿＿。', dap:['没有人强迫他']},
     {s:'他非名牌不穿，就是说，＿＿。', dap:['他只穿名牌，不是名牌不穿']},
     {s:'现在很多年轻人都是“月光族”，也就是说，＿＿。', dap:['到了月底，钱就都花光了']}
   ]}
];
