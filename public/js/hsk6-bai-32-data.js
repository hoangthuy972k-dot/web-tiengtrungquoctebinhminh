// ══════════════════════════════════════════
// DATA — HSK6 Bài 32: 有时，不妨悲伤 (Đôi lúc cũng nên buồn)
// 第八单元 人体探秘 · Nguồn: HSK标准教程6下 (tr. 122–131) + đáp án sách
// Bài khoá: 有时，不妨悲伤 (1264字, văn nghị luận 9 đoạn) · 52 từ mới
// ══════════════════════════════════════════

var vocabData = [
  {n:1,zh:'背叛',py:'bèipàn',pos:'Động từ',vn:'phản bội',hv:'bối bạn',em:'🗡️',lesson:1,
   explain:['Quay lưng, phản lại người / tổ chức / lý tưởng mà mình từng gắn bó, trung thành: 背叛朋友, 背叛祖国, 背叛信仰.','Sắc thái rất nặng, hơi trang trọng; đối tượng thường là bạn bè, người thân, tổ quốc, lời thề. Gần nghĩa 出卖 (bán đứng — xem 扩展), nhưng 出卖 nhấn "bán đứng để kiếm lợi".'],
   usage:'背叛 + 朋友 / 家庭 / 祖国 / 信仰 / 誓言; 被……背叛; 对……的背叛.',
   collo:['背叛朋友','背叛祖国','被朋友背叛','背叛誓言'],
   ex_zh:'男人要有责任心，为人正直、宽容、刚毅，不背叛朋友。',ex_py:'Nánrén yào yǒu zérènxīn, wéirén zhèngzhí, kuānróng, gāngyì, bú bèipàn péngyou.',ex_vn:'Đàn ông phải có tinh thần trách nhiệm, đối nhân xử thế ngay thẳng, bao dung, cương nghị, không phản bội bạn bè.',
   exList:[
     {zh:'他宁愿自己吃亏，也绝不会背叛曾经帮助过他的朋友。',py:'Tā nìngyuàn zìjǐ chīkuī, yě jué bú huì bèipàn céngjīng bāngzhùguo tā de péngyou.',vn:'Anh ấy thà mình chịu thiệt chứ tuyệt đối không phản bội người bạn đã từng giúp đỡ mình. (宁愿 — bài 18)'},
     {zh:'被最信任的人背叛以后，她很长一段时间都不敢再相信别人。',py:'Bèi zuì xìnrèn de rén bèipàn yǐhòu, tā hěn cháng yí duàn shíjiān dōu bù gǎn zài xiāngxìn biérén.',vn:'Sau khi bị người mình tin nhất phản bội, rất lâu sau cô ấy không dám tin ai nữa.'},
     {zh:'当年他发过誓，无论处境多么艰难，都不会背叛自己的祖国。',py:'Dāngnián tā fāguo shì, wúlùn chǔjìng duōme jiānnán, dōu bú huì bèipàn zìjǐ de zǔguó.',vn:'Năm ấy ông đã thề rằng dù hoàn cảnh gian nan đến đâu cũng không phản bội tổ quốc. (发誓 — bài 27)'}
   ],
   colloFull:[
     {zh:'背叛朋友',py:'bèipàn péngyou',vn:'phản bội bạn bè'},
     {zh:'背叛祖国',py:'bèipàn zǔguó',vn:'phản bội tổ quốc'},
     {zh:'被朋友背叛',py:'bèi péngyou bèipàn',vn:'bị bạn bè phản bội'},
     {zh:'背叛誓言',py:'bèipàn shìyán',vn:'phản bội lời thề'},
     {zh:'背叛信仰',py:'bèipàn xìnyǎng',vn:'phản bội niềm tin'}
   ],
   patterns:[
     {s:'绝不 + 背叛 + 朋友 / 祖国',m:'Tuyệt đối không phản bội …'},
     {s:'被 + 人 + 背叛',m:'Bị ai đó phản bội'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Dù gặp khó khăn lớn đến đâu, anh ấy cũng tuyệt đối không phản bội bạn bè.',answer:'无论遇到多大的困难，他都绝不会背叛朋友。',answerPy:'Wúlùn yùdào duō dà de kùnnan, tā dōu jué bú huì bèipàn péngyou.',
      note:'无论……都……: dù … cũng …; 绝不会 = tuyệt đối không.',pair:'无论……都……'},
     {promptLang:'vi',prompt:'Không ngờ người phản bội anh ấy lại chính là người bạn thân nhất.',answer:'没想到背叛他的竟然是他最好的朋友。',answerPy:'Méi xiǎngdào bèipàn tā de jìngrán shì tā zuì hǎo de péngyou.',
      note:'没想到……竟然……: không ngờ … vậy mà … (HSK 5).',pair:'没想到……竟然……'}
   ]},

  {n:2,zh:'上进',py:'shàngjìn',pos:'Động từ',vn:'cầu tiến, năng nổ',hv:'thượng tiến',em:'📈',lesson:1,
   explain:['Luôn muốn tiến lên, phấn đấu để giỏi hơn, tốt hơn: 他是个很上进的年轻人.','Hay đi với 积极上进, 要求上进, 上进心 (chí cầu tiến), 不求上进 (không chịu phấn đấu); có thể được 很 bổ nghĩa như tính từ. Ôn nhóm chữ 进 ở 热身: 进步, 进取, 促进.'],
   usage:'很 / 非常 + 上进; 积极上进; 要求上进; 有 / 没有 + 上进心; 上进的 + 人 / 青年.',
   collo:['积极上进','要求上进','上进心','上进的青年'],
   ex_zh:'男人要上进，有抱负，有魄力。',ex_py:'Nánrén yào shàngjìn, yǒu bàofù, yǒu pòlì.',ex_vn:'Đàn ông phải cầu tiến, có hoài bão, có sự quyết đoán.',
   exList:[
     {zh:'这孩子很上进，每天放学回家都主动复习功课，从来不用父母操心。',py:'Zhè háizi hěn shàngjìn, měi tiān fàngxué huí jiā dōu zhǔdòng fùxí gōngkè, cónglái bú yòng fùmǔ cāoxīn.',vn:'Đứa trẻ này rất cầu tiến, ngày nào tan học về cũng tự giác ôn bài, chưa bao giờ bố mẹ phải bận tâm.'},
     {zh:'一个人要是没有上进心，再好的机会摆在面前也会白白错过。',py:'Yí ge rén yàoshi méiyǒu shàngjìnxīn, zài hǎo de jīhuì bǎi zài miànqián yě huì báibái cuòguò.',vn:'Một người nếu không có chí cầu tiến thì cơ hội tốt đến mấy bày ra trước mắt cũng sẽ bỏ lỡ uổng phí.'},
     {zh:'公司愿意给积极上进的年轻人提供更多的培训机会。',py:'Gōngsī yuànyì gěi jījí shàngjìn de niánqīngrén tígōng gèng duō de péixùn jīhuì.',vn:'Công ty sẵn sàng tạo thêm cơ hội đào tạo cho những người trẻ năng nổ cầu tiến.'}
   ],
   colloFull:[
     {zh:'积极上进',py:'jījí shàngjìn',vn:'tích cực cầu tiến'},
     {zh:'要求上进',py:'yāoqiú shàngjìn',vn:'luôn đòi hỏi bản thân tiến bộ'},
     {zh:'上进心',py:'shàngjìnxīn',vn:'chí cầu tiến'},
     {zh:'上进的青年',py:'shàngjìn de qīngnián',vn:'thanh niên cầu tiến'},
     {zh:'不求上进',py:'bù qiú shàngjìn',vn:'không chịu phấn đấu'}
   ],
   patterns:[
     {s:'积极 / 很 + 上进',m:'Rất cầu tiến'},
     {s:'有 / 没有 + 上进心',m:'Có / không có chí cầu tiến'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần em tích cực cầu tiến thì nhất định sẽ tiến bộ.',answer:'只要你积极上进，就一定会有进步。',answerPy:'Zhǐyào nǐ jījí shàngjìn, jiù yídìng huì yǒu jìnbù.',
      note:'只要……就……: chỉ cần … thì ….',pair:'只要……就……'},
     {promptLang:'vi',prompt:'Anh ấy không những thông minh mà còn rất cầu tiến, nên được sếp coi trọng.',answer:'他不但聪明，而且很上进，所以受到了老板的重视。',answerPy:'Tā búdàn cōngming, érqiě hěn shàngjìn, suǒyǐ shòudàole lǎobǎn de zhòngshì.',
      note:'不但……而且……: không những … mà còn …; 受到重视 = được coi trọng.',pair:'不但……而且……'}
   ]},

  {n:3,zh:'抱负',py:'bàofù',pos:'Danh từ',vn:'hoài bão, khát vọng',hv:'bão phụ',em:'🌠',lesson:1,
   explain:['Chí hướng, mong muốn lớn lao muốn thực hiện trong đời: 有抱负, 远大的抱负, 实现抱负.','Nghĩa tích cực, trang trọng hơn 理想 / 愿望; hay đi với 远大, 宏大, 施展 (thi thố).'],
   usage:'有抱负; 远大的抱负; 实现 / 施展 + 抱负; 抱负 + 远大.',
   collo:['有抱负','远大的抱负','实现抱负','施展抱负'],
   ex_zh:'男人要上进，有抱负，有魄力。',ex_py:'Nánrén yào shàngjìn, yǒu bàofù, yǒu pòlì.',ex_vn:'Đàn ông phải cầu tiến, có hoài bão, có sự quyết đoán.',
   exList:[
     {zh:'他从小就有远大的抱负，立志将来做一名出色的医生。',py:'Tā cóngxiǎo jiù yǒu yuǎndà de bàofù, lìzhì jiānglái zuò yì míng chūsè de yīshēng.',vn:'Từ nhỏ anh ấy đã có hoài bão lớn, quyết chí sau này làm một bác sĩ xuất sắc.'},
     {zh:'在这家小公司里，他的才华和抱负都无法得以施展。',py:'Zài zhè jiā xiǎo gōngsī li, tā de cáihuá hé bàofù dōu wúfǎ déyǐ shīzhǎn.',vn:'Ở công ty nhỏ này, tài năng và hoài bão của anh ấy đều không thể thi thố được. (得以 — bài 19)'},
     {zh:'年轻人有抱负固然好，但也要脚踏实地，一步一步来。',py:'Niánqīngrén yǒu bàofù gùrán hǎo, dàn yě yào jiǎotà-shídì, yí bù yí bù lái.',vn:'Người trẻ có hoài bão tất nhiên là tốt, nhưng cũng phải chân đạp đất, đi từng bước một. (固然 — bài 5)'}
   ],
   colloFull:[
     {zh:'有抱负',py:'yǒu bàofù',vn:'có hoài bão'},
     {zh:'远大的抱负',py:'yuǎndà de bàofù',vn:'hoài bão lớn lao'},
     {zh:'实现抱负',py:'shíxiàn bàofù',vn:'thực hiện hoài bão'},
     {zh:'施展抱负',py:'shīzhǎn bàofù',vn:'thi thố hoài bão'},
     {zh:'政治抱负',py:'zhèngzhì bàofù',vn:'hoài bão chính trị'}
   ],
   patterns:[
     {s:'有 + 远大的 + 抱负',m:'Có hoài bão lớn'},
     {s:'实现 / 施展 + 抱负',m:'Thực hiện / thi thố hoài bão'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Để thực hiện hoài bão của mình, anh ấy một mình đến Thượng Hải lập nghiệp.',answer:'为了实现自己的抱负，他一个人到上海去创业。',answerPy:'Wèile shíxiàn zìjǐ de bàofù, tā yí ge rén dào Shànghǎi qù chuàngyè.',
      note:'为了……: để … (nêu mục đích ở đầu câu).',pair:'为了……'},
     {promptLang:'vi',prompt:'Người có hoài bão tuy nhiều, nhưng người thật sự thực hiện được lại rất ít.',answer:'有抱负的人虽然很多，但是真正实现的人却很少。',answerPy:'Yǒu bàofù de rén suīrán hěn duō, dànshì zhēnzhèng shíxiàn de rén què hěn shǎo.',
      note:'虽然……但是……却……: tuy … nhưng … lại ….',pair:'虽然……但是……'}
   ]},

  {n:4,zh:'魄力',py:'pòlì',pos:'Danh từ',vn:'sự quyết đoán, gan dạ và cương quyết',hv:'phách lực',em:'💥',lesson:1,
   explain:['Sự quyết đoán, gan dạ, dám nghĩ dám làm khi xử lý việc lớn: 有魄力, 很有魄力, 缺乏魄力.','Hay dùng để khen người lãnh đạo, người làm ăn. Khác 勇气 (dũng khí nói chung), 魄力 nhấn khả năng quyết định dứt khoát. Đừng nhầm với 气魄 (bài 28) = khí phách, khí thế (của người hoặc cảnh vật).'],
   usage:'有 / 很有 / 缺乏 + 魄力; 做事 + 有魄力; 改革 / 领导 + 的魄力.',
   collo:['很有魄力','缺乏魄力','做事有魄力','改革的魄力'],
   ex_zh:'男人要上进，有抱负，有魄力。',ex_py:'Nánrén yào shàngjìn, yǒu bàofù, yǒu pòlì.',ex_vn:'Đàn ông phải cầu tiến, có hoài bão, có sự quyết đoán.',
   exList:[
     {zh:'新来的经理很有魄力，上任不到一个月就把公司的问题统统解决了。',py:'Xīn lái de jīnglǐ hěn yǒu pòlì, shàngrèn bú dào yí ge yuè jiù bǎ gōngsī de wèntí tǒngtǒng jiějué le.',vn:'Vị giám đốc mới đến rất quyết đoán, nhậm chức chưa đầy một tháng đã giải quyết sạch các vấn đề của công ty. (统统 — bài 11)'},
     {zh:'他能力倒是有，就是缺乏魄力，遇到大事总是犹豫不决。',py:'Tā nénglì dàoshì yǒu, jiùshì quēfá pòlì, yùdào dàshì zǒngshì yóuyù bù jué.',vn:'Năng lực thì anh ta có, chỉ là thiếu quyết đoán, gặp việc lớn luôn do dự không quyết.'},
     {zh:'要改变这种局面，需要领导者有足够的魄力和勇气。',py:'Yào gǎibiàn zhè zhǒng júmiàn, xūyào lǐngdǎozhě yǒu zúgòu de pòlì hé yǒngqì.',vn:'Muốn thay đổi cục diện này, người lãnh đạo cần có đủ sự quyết đoán và dũng khí.'}
   ],
   colloFull:[
     {zh:'很有魄力',py:'hěn yǒu pòlì',vn:'rất quyết đoán'},
     {zh:'缺乏魄力',py:'quēfá pòlì',vn:'thiếu quyết đoán'},
     {zh:'做事有魄力',py:'zuòshì yǒu pòlì',vn:'làm việc dứt khoát, quyết đoán'},
     {zh:'改革的魄力',py:'gǎigé de pòlì',vn:'bản lĩnh cải cách'},
     {zh:'魄力和勇气',py:'pòlì hé yǒngqì',vn:'sự quyết đoán và dũng khí'}
   ],
   patterns:[
     {s:'很有 / 缺乏 + 魄力',m:'Rất quyết đoán / thiếu quyết đoán'},
     {s:'做事 + 有魄力',m:'Làm việc dứt khoát'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ông ấy làm việc vừa quyết đoán vừa có trách nhiệm, mọi người đều rất phục ông.',answer:'他做事既有魄力又有责任心，大家都很佩服他。',answerPy:'Tā zuòshì jì yǒu pòlì yòu yǒu zérènxīn, dàjiā dōu hěn pèifú tā.',
      note:'既……又……: vừa … vừa ….',pair:'既……又……'},
     {promptLang:'vi',prompt:'Nếu không phải chị ấy rất quyết đoán thì kế hoạch này căn bản không thực hiện nổi.',answer:'要不是她很有魄力，这个计划根本实行不了。',answerPy:'Yàobúshì tā hěn yǒu pòlì, zhège jìhuà gēnběn shíxíng bu liǎo.',
      note:'要不是……: nếu không phải … (giả thiết trái sự thật, HSK 5); V + 不了 = không … nổi.',pair:'要不是……'}
   ]},

  {n:5,zh:'开阔',py:'kāikuò',pos:'Tính từ',vn:'rộng rãi, khoáng đạt; mở rộng',hv:'khai khoát',em:'🌄',lesson:1,
   explain:['Rộng rãi, thoáng đãng (không gian): 开阔的草原, 地势开阔, 视野开阔.','Nghĩa bóng: tấm lòng / tư tưởng rộng mở, khoáng đạt: 心胸开阔. Còn làm động từ "mở rộng": 开阔眼界 / 开阔视野 / 开阔思路.'],
   usage:'心胸 / 视野 / 地势 + 开阔; 开阔 + 眼界 / 视野 / 思路 (động từ); 开阔的 + 广场 / 草原.',
   collo:['心胸开阔','视野开阔','开阔眼界','开阔的广场'],
   ex_zh:'男人要有修养，心胸开阔，处境艰难而不退缩，面对打击而不脆弱。',ex_py:'Nánrén yào yǒu xiūyǎng, xīnxiōng kāikuò, chǔjìng jiānnán ér bú tuìsuō, miànduì dǎjī ér bú cuìruò.',ex_vn:'Đàn ông phải có tu dưỡng, lòng dạ rộng mở, hoàn cảnh gian nan mà không lùi bước, đối mặt cú sốc mà không yếu đuối.',
   exList:[
     {zh:'多出去旅行可以开阔眼界，让人明白世界之大。',py:'Duō chūqù lǚxíng kěyǐ kāikuò yǎnjiè, ràng rén míngbai shìjiè zhī dà.',vn:'Đi du lịch nhiều có thể mở mang tầm mắt, giúp người ta hiểu thế giới rộng lớn biết bao.'},
     {zh:'他心胸开阔，别人说他几句，他从来不往心里去。',py:'Tā xīnxiōng kāikuò, biérén shuō tā jǐ jù, tā cónglái bù wǎng xīnli qù.',vn:'Anh ấy lòng dạ rộng rãi, người khác nói vài câu anh ấy chưa bao giờ để bụng.'},
     {zh:'站在山顶上，视野一下子开阔起来，整个城市尽收眼底。',py:'Zhàn zài shāndǐng shang, shìyě yíxiàzi kāikuò qǐlái, zhěnggè chéngshì jìn shōu yǎndǐ.',vn:'Đứng trên đỉnh núi, tầm nhìn bỗng rộng mở, cả thành phố thu trọn vào tầm mắt.'}
   ],
   colloFull:[
     {zh:'心胸开阔',py:'xīnxiōng kāikuò',vn:'lòng dạ rộng mở'},
     {zh:'视野开阔',py:'shìyě kāikuò',vn:'tầm nhìn rộng'},
     {zh:'开阔眼界',py:'kāikuò yǎnjiè',vn:'mở mang tầm mắt'},
     {zh:'开阔的广场',py:'kāikuò de guǎngchǎng',vn:'quảng trường rộng rãi'},
     {zh:'开阔思路',py:'kāikuò sīlù',vn:'mở rộng hướng suy nghĩ'}
   ],
   patterns:[
     {s:'心胸 / 视野 + 开阔',m:'Lòng dạ / tầm nhìn rộng mở'},
     {s:'开阔 + 眼界 / 视野',m:'Mở mang tầm mắt (động từ)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đọc nhiều sách không chỉ mở mang tầm mắt, mà còn khiến lòng người rộng mở hơn.',answer:'多读书不仅能开阔眼界，还能让人的心胸更开阔。',answerPy:'Duō dú shū bùjǐn néng kāikuò yǎnjiè, hái néng ràng rén de xīnxiōng gèng kāikuò.',
      note:'不仅……还……: không chỉ … mà còn …; 开阔 dùng cả động từ lẫn tính từ.',pair:'不仅……还……'},
     {promptLang:'vi',prompt:'Người lòng dạ rộng mở thường không tính toán chi li với người khác.',answer:'心胸开阔的人往往不会跟别人斤斤计较。',answerPy:'Xīnxiōng kāikuò de rén wǎngwǎng bú huì gēn biérén jīnjīn jìjiào.',
      note:'往往: thường (theo quy luật); 斤斤计较 = tính toán chi li.',pair:'往往'}
   ]},

  {n:6,zh:'处境',py:'chǔjìng',pos:'Danh từ',vn:'cảnh ngộ, hoàn cảnh',hv:'xứ cảnh',em:'🧗',lesson:1,
   explain:['Hoàn cảnh, tình thế mà một người (tổ chức) đang ở, thường là KHÔNG thuận lợi: 处境艰难, 处境危险, 处境尴尬.','处 đọc chǔ (không đọc chù). Khác 环境 (môi trường chung quanh), 处境 nhấn tình thế riêng của một người.'],
   usage:'处境 + 艰难 / 困难 / 危险 / 尴尬; 改善 + 处境; 站在……的处境上.',
   collo:['处境艰难','改善处境','处境危险','尴尬的处境'],
   ex_zh:'男人要有修养，心胸开阔，处境艰难而不退缩，面对打击而不脆弱。',ex_py:'Nánrén yào yǒu xiūyǎng, xīnxiōng kāikuò, chǔjìng jiānnán ér bú tuìsuō, miànduì dǎjī ér bú cuìruò.',ex_vn:'Đàn ông phải có tu dưỡng, lòng dạ rộng mở, hoàn cảnh gian nan mà không lùi bước, đối mặt cú sốc mà không yếu đuối.',
   exList:[
     {zh:'公司的处境越来越艰难，大家都担心会被裁员。',py:'Gōngsī de chǔjìng yuè lái yuè jiānnán, dàjiā dōu dānxīn huì bèi cáiyuán.',vn:'Tình cảnh công ty ngày càng khó khăn, mọi người đều lo bị cắt giảm nhân sự.'},
     {zh:'你要是站在他的处境上想一想，就能理解他为什么这么做了。',py:'Nǐ yàoshi zhàn zài tā de chǔjìng shang xiǎng yi xiǎng, jiù néng lǐjiě tā wèi shénme zhème zuò le.',vn:'Nếu em đặt mình vào hoàn cảnh của anh ấy mà nghĩ thử, em sẽ hiểu vì sao anh ấy làm vậy.'},
     {zh:'他当时的处境十分尴尬，说也不是，不说也不是。',py:'Tā dāngshí de chǔjìng shífēn gāngà, shuō yě bú shì, bù shuō yě bú shì.',vn:'Tình cảnh của anh ấy lúc đó vô cùng khó xử, nói cũng không được, không nói cũng không xong.'}
   ],
   colloFull:[
     {zh:'处境艰难',py:'chǔjìng jiānnán',vn:'cảnh ngộ gian nan'},
     {zh:'改善处境',py:'gǎishàn chǔjìng',vn:'cải thiện tình cảnh'},
     {zh:'处境危险',py:'chǔjìng wēixiǎn',vn:'tình thế nguy hiểm'},
     {zh:'尴尬的处境',py:'gāngà de chǔjìng',vn:'tình cảnh khó xử'},
     {zh:'同样的处境',py:'tóngyàng de chǔjìng',vn:'cảnh ngộ tương tự'}
   ],
   patterns:[
     {s:'……的处境 + 艰难 / 尴尬',m:'Cảnh ngộ của … gian nan / khó xử'},
     {s:'站在 + 人 + 的处境上想一想',m:'Đặt mình vào hoàn cảnh của ai mà nghĩ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Dù hoàn cảnh gian nan đến đâu, anh ấy cũng chưa bao giờ lùi bước.',answer:'不管处境多么艰难，他都从来没有退缩过。',answerPy:'Bùguǎn chǔjìng duōme jiānnán, tā dōu cónglái méiyǒu tuìsuōguo.',
      note:'不管……都……: bất kể … đều …; 从来没有 + V过 = chưa từng bao giờ.',pair:'不管……都……'},
     {promptLang:'vi',prompt:'Chúng ta phải nghĩ cách cải thiện tình cảnh của những đứa trẻ này.',answer:'我们得想办法改善这些孩子的处境。',answerPy:'Wǒmen děi xiǎng bànfǎ gǎishàn zhèxiē háizi de chǔjìng.',
      note:'得 (děi) = phải (khẩu ngữ); 想办法 + V = nghĩ cách ….',pair:'得（děi）'}
   ]},

  {n:7,zh:'打击',py:'dǎjī',pos:'Động từ',vn:'đánh, tấn công; làm tổn thương, cú sốc',hv:'đả kích',em:'🥊',lesson:1,
   explain:['Đánh, tấn công, trấn áp: 打击犯罪 (trấn áp tội phạm), 打击盗版.','Nghĩa thường gặp hơn: làm tổn thương tinh thần; làm danh từ = "cú sốc, đòn giáng": 受到打击, 沉重的打击, 遭受打击. Chú ý: "đả kích" tiếng Việt = châm biếm phê phán — khác nghĩa.'],
   usage:'受到 / 遭受 + 打击; 沉重的打击; 打击 + 积极性 / 自信心; 打击 + 犯罪 / 盗版.',
   collo:['遭受打击','沉重的打击','打击积极性','打击犯罪'],
   ex_zh:'哪怕遭受打击、面对失败、受尽委屈，也一定要坚强，这是什么时候都不能含糊的。',ex_py:'Nǎpà zāoshòu dǎjī, miànduì shībài, shòujìn wěiqu, yě yídìng yào jiānqiáng, zhè shì shénme shíhou dōu bù néng hánhu de.',ex_vn:'Dù gặp cú sốc, đối mặt thất bại, chịu đủ mọi uất ức cũng nhất định phải kiên cường — điều này lúc nào cũng không được qua loa.',
   exList:[
     {zh:'比赛输了以后，他受到了很大的打击，好几天都不想说话。',py:'Bǐsài shūle yǐhòu, tā shòudàole hěn dà de dǎjī, hǎo jǐ tiān dōu bù xiǎng shuōhuà.',vn:'Sau khi thua trận, cậu ấy bị sốc nặng, mấy ngày liền chẳng muốn nói gì.'},
     {zh:'父母总是批评孩子，很容易打击孩子的自信心。',py:'Fùmǔ zǒngshì pīpíng háizi, hěn róngyì dǎjī háizi de zìxìnxīn.',vn:'Bố mẹ lúc nào cũng phê bình con thì rất dễ làm con mất tự tin.'},
     {zh:'公安部门决定加大力度，严厉打击网络诈骗。',py:'Gōng\'ān bùmén juédìng jiādà lìdù, yánlì dǎjī wǎngluò zhàpiàn.',vn:'Ngành công an quyết định tăng cường, nghiêm trị lừa đảo qua mạng. (严厉 — bài 1)'}
   ],
   colloFull:[
     {zh:'遭受打击',py:'zāoshòu dǎjī',vn:'chịu cú sốc, bị đòn giáng'},
     {zh:'沉重的打击',py:'chénzhòng de dǎjī',vn:'đòn giáng nặng nề'},
     {zh:'打击积极性',py:'dǎjī jījíxìng',vn:'làm nhụt nhiệt tình'},
     {zh:'打击犯罪',py:'dǎjī fànzuì',vn:'trấn áp tội phạm'},
     {zh:'受到打击',py:'shòudào dǎjī',vn:'bị sốc, bị tổn thương'}
   ],
   patterns:[
     {s:'受到 / 遭受 + ……的打击',m:'Chịu cú sốc …'},
     {s:'打击 + 积极性 / 自信心',m:'Làm nhụt nhiệt tình / mất tự tin'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Việc bố mất là một cú sốc nặng nề đối với cả gia đình.',answer:'父亲的去世对全家人来说是一个沉重的打击。',answerPy:'Fùqin de qùshì duì quán jiā rén lái shuō shì yí ge chénzhòng de dǎjī.',
      note:'对……来说: đối với … mà nói.',pair:'对……来说'},
     {promptLang:'vi',prompt:'Một lần thất bại không thể làm nhụt nhiệt tình học tập của cậu ấy.',answer:'一次失败打击不了他学习的积极性。',answerPy:'Yí cì shībài dǎjī bu liǎo tā xuéxí de jījíxìng.',
      note:'V + 不了: không thể … (bổ ngữ khả năng).',pair:'V + 不了'}
   ]},

  {n:8,zh:'脆弱',py:'cuìruò',pos:'Tính từ',vn:'yếu đuối, mong manh',hv:'thuý nhược',em:'🥀',lesson:1,
   explain:['Mong manh, dễ vỡ, không chịu được tác động: 脆弱的生态, 身体脆弱.','Thường tả tinh thần, tình cảm: 感情脆弱, 心理脆弱, 脆弱的一面. Trái nghĩa 坚强.'],
   usage:'心理 / 感情 / 身体 + 脆弱; 脆弱的 + 心 / 生态 / 一面; 变得脆弱.',
   collo:['心理脆弱','脆弱的一面','生态脆弱','变得很脆弱'],
   ex_zh:'生病时身体很脆弱，也最忌讳过于劳累。',ex_py:'Shēngbìng shí shēntǐ hěn cuìruò, yě zuì jìhuì guòyú láolèi.',ex_vn:'Khi ốm cơ thể rất yếu, cũng kiêng kỵ nhất là làm việc quá sức. (练习3; 过于 — bài 3)',
   exList:[
     {zh:'再坚强的人也有脆弱的一面，只是不愿意让别人看到罢了。',py:'Zài jiānqiáng de rén yě yǒu cuìruò de yí miàn, zhǐshì bú yuànyì ràng biérén kàndào bàle.',vn:'Người kiên cường đến mấy cũng có mặt yếu đuối, chỉ là không muốn để người khác thấy mà thôi.'},
     {zh:'这个地区的生态环境十分脆弱，一旦破坏就很难恢复。',py:'Zhège dìqū de shēngtài huánjìng shífēn cuìruò, yídàn pòhuài jiù hěn nán huīfù.',vn:'Môi trường sinh thái của vùng này vô cùng mong manh, một khi bị phá hoại thì rất khó khôi phục.'},
     {zh:'她心理比较脆弱，听到一点儿批评就会哭。',py:'Tā xīnlǐ bǐjiào cuìruò, tīngdào yìdiǎnr pīpíng jiù huì kū.',vn:'Tâm lý cô ấy khá yếu, nghe một chút phê bình là khóc.'}
   ],
   colloFull:[
     {zh:'心理脆弱',py:'xīnlǐ cuìruò',vn:'tâm lý yếu đuối'},
     {zh:'脆弱的一面',py:'cuìruò de yí miàn',vn:'mặt yếu đuối'},
     {zh:'生态脆弱',py:'shēngtài cuìruò',vn:'sinh thái mong manh'},
     {zh:'变得很脆弱',py:'biàn de hěn cuìruò',vn:'trở nên rất yếu đuối'},
     {zh:'感情脆弱',py:'gǎnqíng cuìruò',vn:'tình cảm dễ tổn thương'}
   ],
   patterns:[
     {s:'再 + Adj + 的人也有脆弱的一面',m:'Người … đến mấy cũng có mặt yếu đuối'},
     {s:'心理 / 生态 + 脆弱',m:'Tâm lý / sinh thái mong manh'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Một khi bị bệnh, con người sẽ trở nên rất yếu đuối.',answer:'人一旦生了病，就会变得很脆弱。',answerPy:'Rén yídàn shēngle bìng, jiù huì biàn de hěn cuìruò.',
      note:'一旦……就……: một khi … thì ….',pair:'一旦……就……'},
     {promptLang:'vi',prompt:'Trông cô ấy rất mạnh mẽ, thật ra trong lòng vô cùng yếu đuối.',answer:'她看起来很坚强，其实内心非常脆弱。',answerPy:'Tā kàn qǐlái hěn jiānqiáng, qíshí nèixīn fēicháng cuìruò.',
      note:'看起来……其实……: trông thì … thật ra ….',pair:'看起来……其实……'}
   ]},

  {n:9,zh:'榜样',py:'bǎngyàng',pos:'Danh từ',vn:'tấm gương, gương tốt',hv:'bảng dạng',em:'🏅',lesson:1,
   explain:['Tấm gương tốt đáng học theo: 好榜样, 学习的榜样.','Hay đi với 以……为榜样, 给……做榜样, 树立榜样; câu quen thuộc: 榜样的力量是无穷的.'],
   usage:'以……为榜样; 给……做榜样; 树立榜样; ……的好榜样.',
   collo:['学习的榜样','做榜样','以他为榜样','榜样的力量'],
   ex_zh:'男人是生活中的榜样，家庭的靠山，社会的支柱。',ex_py:'Nánrén shì shēnghuó zhōng de bǎngyàng, jiātíng de kàoshān, shèhuì de zhīzhù.',ex_vn:'Đàn ông là tấm gương trong cuộc sống, chỗ dựa của gia đình, trụ cột của xã hội. (支柱 — bài 22)',
   exList:[
     {zh:'哥哥总是说，他要给弟弟妹妹做个好榜样。',py:'Gēge zǒngshì shuō, tā yào gěi dìdi mèimei zuò ge hǎo bǎngyàng.',vn:'Anh trai luôn nói anh ấy phải làm gương tốt cho các em.'},
     {zh:'我们应该以他为榜样，遇到困难决不退缩。',py:'Wǒmen yīnggāi yǐ tā wéi bǎngyàng, yùdào kùnnan jué bú tuìsuō.',vn:'Chúng ta nên lấy anh ấy làm gương, gặp khó khăn quyết không lùi bước. (以……为…… — bài 11)'},
     {zh:'榜样的力量是无穷的，孩子往往会模仿身边的大人。',py:'Bǎngyàng de lìliang shì wúqióng de, háizi wǎngwǎng huì mófǎng shēnbiān de dàrén.',vn:'Sức mạnh của tấm gương là vô tận, trẻ con thường bắt chước người lớn bên cạnh.'}
   ],
   colloFull:[
     {zh:'学习的榜样',py:'xuéxí de bǎngyàng',vn:'tấm gương để học tập'},
     {zh:'做榜样',py:'zuò bǎngyàng',vn:'làm gương'},
     {zh:'以他为榜样',py:'yǐ tā wéi bǎngyàng',vn:'lấy anh ấy làm gương'},
     {zh:'榜样的力量',py:'bǎngyàng de lìliang',vn:'sức mạnh của tấm gương'},
     {zh:'树立榜样',py:'shùlì bǎngyàng',vn:'nêu gương'}
   ],
   patterns:[
     {s:'以 + 人 + 为榜样',m:'Lấy ai làm gương'},
     {s:'给 + 人 + 做榜样',m:'Làm gương cho ai'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Là anh cả, con phải làm gương cho các em.',answer:'作为老大，你得给弟弟妹妹们做榜样。',answerPy:'Zuòwéi lǎodà, nǐ děi gěi dìdi mèimeimen zuò bǎngyàng.',
      note:'作为……: với tư cách là …; 给……做榜样 = làm gương cho ….',pair:'作为……'},
     {promptLang:'vi',prompt:'Bố luôn là tấm gương của tôi, từ trước đến nay tôi luôn lấy bố làm gương.',answer:'爸爸一直是我的榜样，我向来以他为榜样。',answerPy:'Bàba yìzhí shì wǒ de bǎngyàng, wǒ xiànglái yǐ tā wéi bǎngyàng.',
      note:'以……为……: lấy … làm … (bài 11); 向来 = xưa nay (bài 28).',pair:'以……为……'}
   ]},

  {n:10,zh:'光彩',py:'guāngcǎi',pos:'Danh từ',vn:'ánh sáng rực rỡ, vẻ lộng lẫy; vẻ vang',hv:'quang thái',em:'✨',lesson:1,
   explain:['Danh từ: màu sắc và ánh sáng rực rỡ, vẻ lộng lẫy: 光彩照人 (rạng rỡ lộng lẫy), 失去光彩, 焕发光彩.','Tính từ: vẻ vang, có thể diện; hay dùng dạng phủ định 不光彩 (chẳng vẻ vang gì): 这件事不光彩. Ôn chữ 光 ở 练习1: 光芒 (bài 26), 光亮, 月光.'],
   usage:'光彩照人; 失去 / 焕发 + 光彩; 不光彩的 + 事 / 历史; 脸上有光彩.',
   collo:['光彩照人','失去光彩','不光彩的事','焕发光彩'],
   ex_zh:'总之，男人要顶天立地，光彩照人，要有男人的气概。',ex_py:'Zǒngzhī, nánrén yào dǐngtiān-lìdì, guāngcǎi zhào rén, yào yǒu nánrén de qìgài.',ex_vn:'Tóm lại, đàn ông phải đội trời đạp đất, rạng rỡ hơn người, phải có khí khái đàn ông. (气概 — bài 28)',
   exList:[
     {zh:'婚礼那天，新娘打扮得光彩照人，大家都看呆了。',py:'Hūnlǐ nà tiān, xīnniáng dǎban de guāngcǎi zhào rén, dàjiā dōu kàndāi le.',vn:'Hôm cưới, cô dâu trang điểm rạng rỡ lộng lẫy, ai cũng nhìn đến ngây người.'},
     {zh:'作弊是一件很不光彩的事，哪怕只有一次也会影响你的名声。',py:'Zuòbì shì yí jiàn hěn bù guāngcǎi de shì, nǎpà zhǐyǒu yí cì yě huì yǐngxiǎng nǐ de míngshēng.',vn:'Gian lận thi cử là chuyện chẳng vẻ vang gì, dù chỉ một lần cũng ảnh hưởng đến danh tiếng của em.'},
     {zh:'经过修复，这座古老的建筑又重新焕发出了光彩。',py:'Jīngguò xiūfù, zhè zuò gǔlǎo de jiànzhù yòu chóngxīn huànfā chūle guāngcǎi.',vn:'Sau khi được tu sửa, toà kiến trúc cổ này lại toả sáng rực rỡ trở lại.'}
   ],
   colloFull:[
     {zh:'光彩照人',py:'guāngcǎi zhào rén',vn:'rạng rỡ lộng lẫy'},
     {zh:'失去光彩',py:'shīqù guāngcǎi',vn:'mất đi vẻ rực rỡ'},
     {zh:'不光彩的事',py:'bù guāngcǎi de shì',vn:'chuyện chẳng vẻ vang'},
     {zh:'焕发光彩',py:'huànfā guāngcǎi',vn:'toả sáng rực rỡ'},
     {zh:'脸上有光彩',py:'liǎn shang yǒu guāngcǎi',vn:'nở mày nở mặt'}
   ],
   patterns:[
     {s:'打扮得 + 光彩照人',m:'Ăn diện rạng rỡ'},
     {s:'是一件（很）不光彩的事',m:'Là một chuyện chẳng vẻ vang gì'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Con đỗ đại học, bố mẹ cũng thấy nở mày nở mặt.',answer:'孩子考上了大学，父母脸上也觉得很光彩。',answerPy:'Háizi kǎoshàngle dàxué, fùmǔ liǎn shang yě juéde hěn guāngcǎi.',
      note:'考上 = thi đỗ (V + 上 chỉ kết quả đạt được).',pair:'V + 上（kết quả）'},
     {promptLang:'vi',prompt:'Chuyện này chẳng vẻ vang gì, cậu nhất định đừng kể cho người khác.',answer:'这件事并不光彩，你千万别告诉别人。',answerPy:'Zhè jiàn shì bìng bù guāngcǎi, nǐ qiānwàn bié gàosu biérén.',
      note:'并不 nhấn phủ định; 千万别 = nhất định đừng.',pair:'千万别……'}
   ]},

  {n:11,zh:'理智',py:'lǐzhì',pos:'Tính từ',vn:'có lý trí, tỉnh táo',hv:'lý trí',em:'🧠',lesson:1,
   explain:['Tính từ: bình tĩnh, suy xét bằng lý trí, không để cảm xúc chi phối: 理智的人, 冷静理智.','Danh từ: lý trí: 失去理智 (mất lý trí), 保持理智. Trái nghĩa 冲动 / 感情用事.'],
   usage:'很 / 比较 + 理智; 理智地 + 处理 / 对待; 失去 / 保持 + 理智.',
   collo:['理智的男子汉','失去理智','保持理智','理智地处理'],
   ex_zh:'理智的男子汉再悲伤也不轻易哭泣。',ex_py:'Lǐzhì de nánzǐhàn zài bēishāng yě bù qīngyì kūqì.',ex_vn:'Nam tử hán có lý trí thì dù buồn đến mấy cũng không dễ dàng khóc lóc.',
   exList:[
     {zh:'吵架的时候，双方都要保持理智，千万别说伤人的话。',py:'Chǎojià de shíhou, shuāngfāng dōu yào bǎochí lǐzhì, qiānwàn bié shuō shāng rén de huà.',vn:'Khi cãi nhau, cả hai bên đều phải giữ lý trí, nhất định đừng nói lời làm tổn thương người khác.'},
     {zh:'他一时失去了理智，做出了让自己后悔一辈子的事。',py:'Tā yìshí shīqùle lǐzhì, zuòchūle ràng zìjǐ hòuhuǐ yíbèizi de shì.',vn:'Anh ấy nhất thời mất lý trí, làm ra chuyện khiến mình hối hận cả đời.'},
     {zh:'面对突发事件，她表现得非常冷静、理智。',py:'Miànduì tūfā shìjiàn, tā biǎoxiàn de fēicháng lěngjìng, lǐzhì.',vn:'Đối mặt với sự cố bất ngờ, cô ấy tỏ ra vô cùng bình tĩnh, tỉnh táo.'}
   ],
   colloFull:[
     {zh:'理智的男子汉',py:'lǐzhì de nánzǐhàn',vn:'nam tử hán có lý trí'},
     {zh:'失去理智',py:'shīqù lǐzhì',vn:'mất lý trí'},
     {zh:'保持理智',py:'bǎochí lǐzhì',vn:'giữ lý trí'},
     {zh:'理智地处理',py:'lǐzhì de chǔlǐ',vn:'xử lý bằng lý trí'},
     {zh:'冷静理智',py:'lěngjìng lǐzhì',vn:'bình tĩnh, tỉnh táo'}
   ],
   patterns:[
     {s:'保持 / 失去 + 理智',m:'Giữ / mất lý trí'},
     {s:'理智地 + 处理 / 对待',m:'Xử lý / đối xử một cách lý trí'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Dù tức giận đến đâu cũng phải giữ lý trí, không được động tay đánh người.',answer:'哪怕再生气，也要保持理智，不能动手打人。',answerPy:'Nǎpà zài shēngqì, yě yào bǎochí lǐzhì, bù néng dòngshǒu dǎ rén.',
      note:'哪怕……也……: dù … cũng … (điểm ngữ pháp 1 của bài).',pair:'哪怕……也……'},
     {promptLang:'vi',prompt:'Chuyện tình cảm nên xử lý bằng lý trí, không nên hành động theo cảm tính.',answer:'感情问题应该理智地处理，不应该感情用事。',answerPy:'Gǎnqíng wèntí yīnggāi lǐzhì de chǔlǐ, bù yīnggāi gǎnqíng yòngshì.',
      note:'理智地 + V làm trạng ngữ; 感情用事 = hành động theo cảm tính.',pair:'应该……，不应该……'}
   ]},

  {n:12,zh:'哭泣',py:'kūqì',pos:'Động từ',vn:'khóc thút thít, khóc',hv:'khốc khấp',em:'😢',lesson:1,
   explain:['Khóc (thường là khóc nhỏ, nghẹn ngào, có nước mắt): 低声哭泣, 伤心地哭泣, 独自哭泣.','Văn viết; khẩu ngữ dùng 哭. Không mang tân ngữ (không nói 哭泣妈妈).'],
   usage:'低声 / 伤心地 / 独自 + 哭泣; 哭泣 + 的 + 声音 / 孩子; 哭泣 + 时 / 后.',
   collo:['轻易哭泣','低声哭泣','独自哭泣','哭泣的声音'],
   ex_zh:'通常人们哭泣后，在情绪强度上会降低40%。',ex_py:'Tōngcháng rénmen kūqì hòu, zài qíngxù qiángdù shang huì jiàngdī bǎi fēn zhī sìshí.',ex_vn:'Thông thường sau khi khóc, cường độ cảm xúc của con người sẽ giảm 40%.',
   exList:[
     {zh:'半夜里，我听到隔壁传来一阵低声的哭泣。',py:'Bànyè li, wǒ tīngdào gébì chuánlái yí zhèn dīshēng de kūqì.',vn:'Nửa đêm, tôi nghe từ nhà bên vọng sang một tràng tiếng khóc khe khẽ.'},
     {zh:'她不想让父母担心，总是一个人躲在房间里独自哭泣。',py:'Tā bù xiǎng ràng fùmǔ dānxīn, zǒngshì yí ge rén duǒ zài fángjiān li dúzì kūqì.',vn:'Cô ấy không muốn bố mẹ lo nên lúc nào cũng trốn trong phòng khóc một mình.'},
     {zh:'哭泣时间不宜过长，否则反而对身体有害。',py:'Kūqì shíjiān bùyí guò cháng, fǒuzé fǎn\'ér duì shēntǐ yǒuhài.',vn:'Thời gian khóc không nên quá dài, nếu không ngược lại còn có hại cho cơ thể.'}
   ],
   colloFull:[
     {zh:'轻易哭泣',py:'qīngyì kūqì',vn:'dễ dàng khóc'},
     {zh:'低声哭泣',py:'dīshēng kūqì',vn:'khóc khe khẽ'},
     {zh:'独自哭泣',py:'dúzì kūqì',vn:'khóc một mình'},
     {zh:'哭泣的声音',py:'kūqì de shēngyīn',vn:'tiếng khóc'},
     {zh:'伤心地哭泣',py:'shāngxīn de kūqì',vn:'khóc đau lòng'}
   ],
   patterns:[
     {s:'独自 / 低声 + 哭泣',m:'Khóc một mình / khóc khẽ'},
     {s:'哭泣 + 后 / 时',m:'Sau khi / khi khóc'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Khóc không phải là biểu hiện yếu đuối, mà là một cách giải toả cảm xúc.',answer:'哭泣不是软弱的表现，而是一种释放情绪的方式。',answerPy:'Kūqì bú shì ruǎnruò de biǎoxiàn, ér shì yì zhǒng shìfàng qíngxù de fāngshì.',
      note:'不是……而是……: không phải … mà là ….',pair:'不是……而是……'},
     {promptLang:'vi',prompt:'Nghe tin ấy, cô ấy không kìm được mà bật khóc đau lòng.',answer:'听到这个消息，她不禁伤心地哭泣起来。',answerPy:'Tīngdào zhège xiāoxi, tā bùjīn shāngxīn de kūqì qǐlái.',
      note:'不禁 = không kìm được (bài 15); V + 起来 = bắt đầu ….',pair:'不禁'}
   ]},

  {n:13,zh:'否决',py:'fǒujué',pos:'Động từ',vn:'phủ quyết, bác bỏ',hv:'phủ quyết',em:'🚫',lesson:1,
   explain:['Bác bỏ (ý kiến, đề nghị, dự án…), thường qua biểu quyết hay quyết định chính thức: 否决提案, 否决权.','一票否决 = chỉ một phiếu chống là bị loại → trong bài dùng nghĩa bóng: chỉ vì "hay khóc" mà bị gạt bỏ hoàn toàn. Ôn chữ 否 ở 练习1: 否认, 否定, 是否, 可否.'],
   usage:'否决 + 提案 / 计划 / 方案 / 意见; 被……否决; 一票否决; 否决权.',
   collo:['一票否决','否决提案','被否决','否决权'],
   ex_zh:'爱哭的男人走到哪儿都会被一票否决。',ex_py:'Ài kū de nánrén zǒudào nǎr dōu huì bèi yí piào fǒujué.',ex_vn:'Đàn ông hay khóc đi đến đâu cũng sẽ bị gạt bỏ ngay lập tức.',
   exList:[
     {zh:'我提出的方案在会上被经理否决了，只好重新做。',py:'Wǒ tíchū de fāng\'àn zài huì shang bèi jīnglǐ fǒujué le, zhǐhǎo chóngxīn zuò.',vn:'Phương án tôi đưa ra bị giám đốc bác bỏ trong cuộc họp, đành phải làm lại.'},
     {zh:'这项提案因为反对票太多，最终被否决了。',py:'Zhè xiàng tí\'àn yīnwèi fǎnduì piào tài duō, zuìzhōng bèi fǒujué le.',vn:'Đề án này vì quá nhiều phiếu chống nên cuối cùng đã bị bác bỏ.'},
     {zh:'在我们公司，安全问题实行一票否决，出了事故谁也别想评优秀。',py:'Zài wǒmen gōngsī, ānquán wèntí shíxíng yí piào fǒujué, chūle shìgù shéi yě bié xiǎng píng yōuxiù.',vn:'Ở công ty chúng tôi, vấn đề an toàn áp dụng "một phiếu phủ quyết": để xảy ra sự cố thì ai cũng đừng mong được xét loại giỏi. (事故 — bài 22)'}
   ],
   colloFull:[
     {zh:'一票否决',py:'yí piào fǒujué',vn:'một phiếu phủ quyết; bị gạt bỏ ngay'},
     {zh:'否决提案',py:'fǒujué tí\'àn',vn:'bác bỏ đề án'},
     {zh:'被否决',py:'bèi fǒujué',vn:'bị bác bỏ'},
     {zh:'否决权',py:'fǒujuéquán',vn:'quyền phủ quyết'},
     {zh:'否决计划',py:'fǒujué jìhuà',vn:'bác bỏ kế hoạch'}
   ],
   patterns:[
     {s:'……被 + 人 + 否决了',m:'… bị ai bác bỏ'},
     {s:'实行一票否决',m:'Áp dụng cơ chế một phiếu phủ quyết'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Kế hoạch chúng tôi chuẩn bị ba tháng, vậy mà bị bác bỏ chỉ bằng một câu.',answer:'我们准备了三个月的计划，竟然被一句话否决了。',answerPy:'Wǒmen zhǔnbèile sān ge yuè de jìhuà, jìngrán bèi yí jù huà fǒujué le.',
      note:'竟然 = vậy mà (bất ngờ); câu bị động 被 + tác nhân + V.',pair:'竟然'},
     {promptLang:'vi',prompt:'Ý kiến của cậu ấy tuy bị bác bỏ, nhưng cậu ấy không hề nản lòng.',answer:'他的意见虽然被否决了，但是他一点儿也没泄气。',answerPy:'Tā de yìjiàn suīrán bèi fǒujué le, dànshì tā yìdiǎnr yě méi xièqì.',
      note:'一点儿也没 + V = không hề …; 泄气 = nản lòng (bài 26).',pair:'一点儿也不／没……'}
   ]},


  {n:14,zh:'出息',py:'chūxi',pos:'Danh từ',vn:'tiền đồ, tương lai rực rỡ; sự nên người',hv:'xuất tức',em:'🌟',lesson:1,
   explain:['Triển vọng, chí khí, sự nên người: 有出息 (có tương lai, nên người), 没出息 (vô dụng, chẳng nên trò trống gì).','Khẩu ngữ, hay dùng trong lời cha mẹ nói về con cái; 息 đọc nhẹ xi. Còn làm động từ "tiến bộ, thành đạt": 这孩子出息了.'],
   usage:'有出息 / 没出息; 没什么出息; 大出息; 人 + 出息了.',
   collo:['有出息','没出息','没什么出息','出息了'],
   ex_zh:'因为男人流泪就意味着软弱、没出息。',ex_py:'Yīnwèi nánrén liú lèi jiù yìwèizhe ruǎnruò, méi chūxi.',ex_vn:'Vì đàn ông rơi nước mắt đồng nghĩa với yếu đuối, chẳng nên trò trống gì.',
   exList:[
     {zh:'父母辛辛苦苦供他上大学，就是希望他将来有出息。',py:'Fùmǔ xīnxīnkǔkǔ gōng tā shàng dàxué, jiùshì xīwàng tā jiānglái yǒu chūxi.',vn:'Bố mẹ vất vả nuôi anh ấy học đại học, chính là mong sau này anh ấy nên người.'},
     {zh:'这么点儿小事就哭鼻子，真没出息！',py:'Zhème diǎnr xiǎoshì jiù kū bízi, zhēn méi chūxi!',vn:'Chuyện cỏn con thế mà đã khóc nhè, thật chẳng ra gì!'},
     {zh:'几年不见，你可真出息了，都当上总经理了。',py:'Jǐ nián bú jiàn, nǐ kě zhēn chūxi le, dōu dāngshàng zǒngjīnglǐ le.',vn:'Mấy năm không gặp, cậu thành đạt thật rồi, đã làm tổng giám đốc rồi cơ đấy.'}
   ],
   colloFull:[
     {zh:'有出息',py:'yǒu chūxi',vn:'có tương lai, nên người'},
     {zh:'没出息',py:'méi chūxi',vn:'chẳng nên trò trống gì'},
     {zh:'没什么出息',py:'méi shénme chūxi',vn:'chẳng có tiền đồ gì'},
     {zh:'出息了',py:'chūxi le',vn:'đã thành đạt, nên người rồi'},
     {zh:'大出息',py:'dà chūxi',vn:'thành tựu lớn'}
   ],
   patterns:[
     {s:'希望 + 人 + 将来有出息',m:'Mong ai sau này nên người'},
     {s:'真没出息！',m:'Thật chẳng ra gì! (lời chê)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ có người chịu được khổ thì sau này mới nên người.',answer:'只有肯吃苦的人，将来才会有出息。',answerPy:'Zhǐyǒu kěn chīkǔ de rén, jiānglái cái huì yǒu chūxi.',
      note:'只有……才……: chỉ có … mới ….',pair:'只有……才……'},
     {promptLang:'vi',prompt:'Ai bảo đàn ông khóc là chẳng ra gì? Tôi không đồng ý.',answer:'谁说男人哭就是没出息？我不同意。',answerPy:'Shéi shuō nánrén kū jiù shì méi chūxi? Wǒ bù tóngyì.',
      note:'谁说……？ là câu hỏi tu từ = ai bảo … (thật ra không phải vậy).',pair:'谁说……？（反问）'}
   ]},

  {n:15,zh:'娃娃',py:'wáwa',pos:'Danh từ',vn:'em bé, trẻ nhỏ; búp bê',hv:'oa oa',em:'👶',lesson:1,
   explain:['Em bé, trẻ nhỏ (khẩu ngữ, thân mật): 小娃娃, 胖娃娃; 从娃娃抓起 = bắt đầu (giáo dục) từ lúc còn nhỏ; 娃娃时代 = thời thơ ấu.','Còn nghĩa "búp bê": 洋娃娃, 布娃娃.'],
   usage:'从娃娃抓起; 娃娃时代; 洋娃娃 / 布娃娃; 胖娃娃.',
   collo:['娃娃时代','从娃娃抓起','洋娃娃','胖娃娃'],
   ex_zh:'这种教育是从娃娃时代就潜移默化地在起作用了。',ex_py:'Zhè zhǒng jiàoyù shì cóng wáwa shídài jiù qiányí-mòhuà de zài qǐ zuòyòng le.',ex_vn:'Kiểu giáo dục này đã âm thầm phát huy tác dụng từ thời còn bé tí.',
   exList:[
     {zh:'老一辈教育家强调：“教育要从娃娃抓起。”',py:'Lǎo yíbèi jiàoyùjiā qiángdiào: “Jiàoyù yào cóng wáwa zhuā qǐ.”',vn:'Các nhà giáo dục thế hệ trước nhấn mạnh: "Giáo dục phải bắt đầu từ khi còn nhỏ." (练习2)'},
     {zh:'女儿最喜欢的生日礼物是一个会说话的洋娃娃。',py:'Nǚ\'ér zuì xǐhuan de shēngrì lǐwù shì yí ge huì shuōhuà de yángwáwa.',vn:'Món quà sinh nhật con gái thích nhất là một con búp bê biết nói.'},
     {zh:'保护环境的意识要从娃娃抓起，让孩子从小养成好习惯。',py:'Bǎohù huánjìng de yìshi yào cóng wáwa zhuā qǐ, ràng háizi cóngxiǎo yǎngchéng hǎo xíguàn.',vn:'Ý thức bảo vệ môi trường phải được vun đắp từ bé, để trẻ hình thành thói quen tốt ngay từ nhỏ.'}
   ],
   colloFull:[
     {zh:'娃娃时代',py:'wáwa shídài',vn:'thời thơ ấu'},
     {zh:'从娃娃抓起',py:'cóng wáwa zhuā qǐ',vn:'bắt đầu từ khi còn nhỏ'},
     {zh:'洋娃娃',py:'yángwáwa',vn:'búp bê'},
     {zh:'胖娃娃',py:'pàng wáwa',vn:'em bé bụ bẫm'},
     {zh:'布娃娃',py:'bù wáwa',vn:'búp bê vải'}
   ],
   patterns:[
     {s:'……要从娃娃抓起',m:'… phải bắt đầu từ lúc còn nhỏ'},
     {s:'从娃娃时代（起）就……',m:'Ngay từ thời bé đã …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Thói quen đọc sách phải bồi dưỡng từ khi còn nhỏ, càng sớm càng tốt.',answer:'读书的习惯要从娃娃抓起，越早越好。',answerPy:'Dú shū de xíguàn yào cóng wáwa zhuā qǐ, yuè zǎo yuè hǎo.',
      note:'越……越……: càng … càng ….',pair:'越……越……'},
     {promptLang:'vi',prompt:'Con bé coi con búp bê ấy như người bạn thân nhất của mình.',answer:'她把那个洋娃娃当成自己最好的朋友。',answerPy:'Tā bǎ nàge yángwáwa dàngchéng zìjǐ zuì hǎo de péngyou.',
      note:'把 A 当成 B: coi A là B.',pair:'把……当成……'}
   ]},

  {n:16,zh:'潜移默化',py:'qiányí-mòhuà',pos:'Thành ngữ',vn:'biến đổi ngấm ngầm, thay đổi một cách vô tri vô giác, âm thầm',hv:'tiềm di mặc hoá',em:'🌊',lesson:1,
   explain:['Tư tưởng, tính cách, thói quen bị ảnh hưởng dần dần, âm thầm mà không tự nhận ra: 潜 = ngầm, 移 = dời đổi, 默 = lặng lẽ, 化 = biến hoá.','Hay dùng: 潜移默化地 + 影响 / 起作用; 潜移默化的影响 / 作用. Gần nghĩa 熏陶 (bài 26).'],
   usage:'潜移默化地 + 影响 / 改变 / 起作用; 潜移默化的 + 影响 / 作用 / 熏陶; 在潜移默化中.',
   collo:['潜移默化地影响','潜移默化的作用','潜移默化地起作用','潜移默化的熏陶'],
   ex_zh:'这种教育是从娃娃时代就潜移默化地在起作用了。',ex_py:'Zhè zhǒng jiàoyù shì cóng wáwa shídài jiù qiányí-mòhuà de zài qǐ zuòyòng le.',ex_vn:'Kiểu giáo dục này đã âm thầm phát huy tác dụng từ thời còn bé tí.',
   exList:[
     {zh:'父母的一言一行都会潜移默化地影响孩子。',py:'Fùmǔ de yì yán yì xíng dōu huì qiányí-mòhuà de yǐngxiǎng háizi.',vn:'Mỗi lời nói, việc làm của cha mẹ đều âm thầm ảnh hưởng đến con cái.'},
     {zh:'好的书籍对人的品格有着潜移默化的作用。',py:'Hǎo de shūjí duì rén de pǐngé yǒuzhe qiányí-mòhuà de zuòyòng.',vn:'Sách hay có tác dụng ngấm ngầm đối với phẩm cách con người.'},
     {zh:'在音乐世家长大，他受到了潜移默化的熏陶，从小就对旋律特别敏感。',py:'Zài yīnyuè shìjiā zhǎngdà, tā shòudàole qiányí-mòhuà de xūntáo, cóngxiǎo jiù duì xuánlǜ tèbié mǐngǎn.',vn:'Lớn lên trong gia đình âm nhạc, anh ấy được hun đúc một cách âm thầm, từ nhỏ đã rất nhạy với giai điệu. (熏陶 — bài 26, 旋律 — bài 28)'}
   ],
   colloFull:[
     {zh:'潜移默化地影响',py:'qiányí-mòhuà de yǐngxiǎng',vn:'âm thầm ảnh hưởng'},
     {zh:'潜移默化的作用',py:'qiányí-mòhuà de zuòyòng',vn:'tác dụng ngấm ngầm'},
     {zh:'潜移默化地起作用',py:'qiányí-mòhuà de qǐ zuòyòng',vn:'âm thầm phát huy tác dụng'},
     {zh:'潜移默化的熏陶',py:'qiányí-mòhuà de xūntáo',vn:'sự hun đúc âm thầm'},
     {zh:'在潜移默化中',py:'zài qiányí-mòhuà zhōng',vn:'trong lúc vô tri vô giác'}
   ],
   patterns:[
     {s:'潜移默化地 + 影响 + 人',m:'Âm thầm ảnh hưởng đến ai'},
     {s:'对……有 / 起到 + 潜移默化的作用',m:'Có tác dụng ngấm ngầm đối với …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Môi trường mà một người lớn lên sẽ âm thầm ảnh hưởng đến tính cách của người đó.',answer:'一个人成长的环境会潜移默化地影响他的性格。',answerPy:'Yí ge rén chéngzhǎng de huánjìng huì qiányí-mòhuà de yǐngxiǎng tā de xìnggé.',
      note:'潜移默化地 + V làm trạng ngữ; 会 = sẽ (dự đoán khả năng).',pair:'会 + V（khả năng）'},
     {promptLang:'vi',prompt:'Tuy thầy chưa bao giờ giảng đạo lý to tát, nhưng hành động của thầy đã âm thầm thay đổi chúng tôi.',answer:'虽然老师从来不讲大道理，但是他的行动潜移默化地改变了我们。',answerPy:'Suīrán lǎoshī cónglái bù jiǎng dà dàolǐ, dànshì tā de xíngdòng qiányí-mòhuà de gǎibiànle wǒmen.',
      note:'虽然……但是……; 大道理 = đạo lý to tát, lý thuyết suông.',pair:'虽然……但是……'}
   ]},

  {n:17,zh:'鞭策',py:'biāncè',pos:'Động từ',vn:'thúc giục, giục giã',hv:'tiên sách',em:'🏇',lesson:1,
   explain:['Nghĩa gốc: quất roi (鞭 = roi) thúc ngựa chạy; nghĩa bóng: thúc giục, động viên để người ta cố gắng tiến lên: 鞭策自己, 鼓励和鞭策.','Chủ thể thường là lời nói, tấm gương, thất bại, kỳ vọng…; hay dùng bị động 被……鞭策着 hoặc 对……是一种鞭策.'],
   usage:'鞭策 + 自己 / 人; 被……鞭策着; 对……是一种鞭策; 鼓励和鞭策.',
   collo:['鞭策自己','鼓励和鞭策','被古训鞭策着','一种鞭策'],
   ex_zh:'他们天天被这样的古训鞭策着。',ex_py:'Tāmen tiāntiān bèi zhèyàng de gǔxùn biāncèzhe.',ex_vn:'Ngày nào họ cũng bị những lời răn dạy cổ xưa như thế thúc giục.',
   exList:[
     {zh:'他常常用失败的教训来鞭策自己，不敢有一丝放松。',py:'Tā chángcháng yòng shībài de jiàoxùn lái biāncè zìjǐ, bù gǎn yǒu yì sī fàngsōng.',vn:'Anh ấy thường lấy bài học thất bại để tự thúc giục mình, không dám lơi lỏng chút nào.'},
     {zh:'老师的表扬对我来说既是鼓励，也是鞭策。',py:'Lǎoshī de biǎoyáng duì wǒ lái shuō jì shì gǔlì, yě shì biāncè.',vn:'Lời khen của thầy đối với tôi vừa là động viên, vừa là sự thúc đẩy.'},
     {zh:'父母的期望时时刻刻鞭策着他，使他不敢半途而废。',py:'Fùmǔ de qīwàng shíshíkèkè biāncèzhe tā, shǐ tā bù gǎn bàntú\'érfèi.',vn:'Kỳ vọng của bố mẹ lúc nào cũng thúc giục anh ấy, khiến anh không dám bỏ dở nửa chừng. (半途而废 — bài 31)'}
   ],
   colloFull:[
     {zh:'鞭策自己',py:'biāncè zìjǐ',vn:'tự thúc giục bản thân'},
     {zh:'鼓励和鞭策',py:'gǔlì hé biāncè',vn:'động viên và thúc đẩy'},
     {zh:'被古训鞭策着',py:'bèi gǔxùn biāncèzhe',vn:'bị lời răn xưa thúc giục'},
     {zh:'一种鞭策',py:'yì zhǒng biāncè',vn:'một sự thúc đẩy'},
     {zh:'鞭策后人',py:'biāncè hòurén',vn:'thúc giục người đời sau'}
   ],
   patterns:[
     {s:'用…… + 来鞭策自己',m:'Dùng … để tự thúc giục mình'},
     {s:'对…… + 是一种鞭策',m:'Là một sự thúc đẩy đối với …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Lời phê bình của mọi người, nói là đả kích thì chi bằng nói là một sự thúc đẩy.',answer:'大家的批评与其说是打击，不如说是一种鞭策。',answerPy:'Dàjiā de pīpíng yǔqí shuō shì dǎjī, bùrú shuō shì yì zhǒng biāncè.',
      note:'与其说……不如说……: nói là … chi bằng nói là … (HSK 5).',pair:'与其说……不如说……'},
     {promptLang:'vi',prompt:'Mỗi khi muốn bỏ cuộc, tôi lại dùng câu nói ấy để tự thúc giục mình.',answer:'每当我想放弃的时候，就用那句话来鞭策自己。',answerPy:'Měi dāng wǒ xiǎng fàngqì de shíhou, jiù yòng nà jù huà lái biāncè zìjǐ.',
      note:'每当……的时候，就……: mỗi khi … thì ….',pair:'每当……的时候，就……'}
   ]},

  {n:18,zh:'赋予',py:'fùyǔ',pos:'Động từ',vn:'trao cho, giao phó',hv:'phú dữ',em:'🎁',lesson:1,
   explain:['Trao cho (sứ mệnh, quyền lợi, ý nghĩa, hình tượng…) — thường là thứ trừu tượng, lớn lao: 赋予使命, 赋予权力, 赋予意义.','Văn viết, trang trọng; chủ thể thường là 时代, 历史, 法律, 文化…. Ôn chữ 予 ở 练习1: 给予, 赐予, 予以.'],
   usage:'赋予 + 人 + 使命 / 权力 / 责任 / 意义 / 形象; ……所赋予的……; 被赋予…….',
   collo:['赋予使命','赋予权力','赋予新的意义','被赋予'],
   ex_zh:'我们的文化赋予了男人高大、坚强的形象，他们在生活中必须扮演强者。',ex_py:'Wǒmen de wénhuà fùyǔle nánrén gāodà, jiānqiáng de xíngxiàng, tāmen zài shēnghuó zhōng bìxū bànyǎn qiángzhě.',ex_vn:'Văn hoá của chúng ta đã khoác cho đàn ông hình tượng to lớn, kiên cường; trong cuộc sống họ buộc phải đóng vai kẻ mạnh.',
   exList:[
     {zh:'法律赋予每个公民平等的权利，同时也要求每个人履行相应的义务。',py:'Fǎlǜ fùyǔ měi ge gōngmín píngděng de quánlì, tóngshí yě yāoqiú měi ge rén lǚxíng xiāngyìng de yìwù.',vn:'Pháp luật trao cho mỗi công dân quyền bình đẳng, đồng thời cũng yêu cầu mỗi người thực hiện nghĩa vụ tương ứng. (履行 — bài 27, 相应 — bài 21)'},
     {zh:'时代赋予了我们这一代年轻人新的使命。',py:'Shídài fùyǔle wǒmen zhè yí dài niánqīngrén xīn de shǐmìng.',vn:'Thời đại đã giao cho thế hệ trẻ chúng ta sứ mệnh mới.'},
     {zh:'设计师给这座老房子赋予了新的意义，使它变成了一个社区图书馆。',py:'Shèjìshī gěi zhè zuò lǎo fángzi fùyǔle xīn de yìyì, shǐ tā biànchéngle yí ge shèqū túshūguǎn.',vn:'Nhà thiết kế đã mang lại ý nghĩa mới cho ngôi nhà cũ này, biến nó thành một thư viện cộng đồng.'}
   ],
   colloFull:[
     {zh:'赋予使命',py:'fùyǔ shǐmìng',vn:'giao phó sứ mệnh'},
     {zh:'赋予权力',py:'fùyǔ quánlì',vn:'trao quyền'},
     {zh:'赋予新的意义',py:'fùyǔ xīn de yìyì',vn:'mang lại ý nghĩa mới'},
     {zh:'被赋予',py:'bèi fùyǔ',vn:'được trao cho'},
     {zh:'文化所赋予的形象',py:'wénhuà suǒ fùyǔ de xíngxiàng',vn:'hình tượng do văn hoá khoác cho'}
   ],
   patterns:[
     {s:'A + 赋予 + B + 使命 / 权利 / 意义',m:'A trao cho B sứ mệnh / quyền / ý nghĩa'},
     {s:'……是……赋予……的一种束缚',m:'… là một sự trói buộc mà … áp lên …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chính cha mẹ đã cho tôi sinh mệnh, cũng đã cho tôi dũng khí đối mặt với khó khăn.',answer:'是父母赋予了我生命，也赋予了我面对困难的勇气。',answerPy:'Shì fùmǔ fùyǔle wǒ shēngmìng, yě fùyǔle wǒ miànduì kùnnan de yǒngqì.',
      note:'是 + chủ ngữ + V…… nhấn mạnh "chính … đã …".',pair:'是……（nhấn mạnh）'},
     {promptLang:'vi',prompt:'Pháp luật trao cho mỗi người quyền được học hành, bất kể nghèo hay giàu.',answer:'法律赋予每个人受教育的权利，不论贫富。',answerPy:'Fǎlǜ fùyǔ měi ge rén shòu jiàoyù de quánlì, búlùn pín fù.',
      note:'不论 = bất kể (= 无论); 受教育 = được học hành.',pair:'不论……'}
   ]},

  {n:19,zh:'扮演',py:'bànyǎn',pos:'Động từ',vn:'sắm vai, đóng vai',hv:'phẫn diễn',em:'🎭',lesson:1,
   explain:['Đóng vai một nhân vật (trong phim, kịch): 扮演主角, 在剧中扮演一位老师.','Nghĩa bóng: giữ một vai trò trong cuộc sống, xã hội: 扮演强者, 扮演重要的角色, 扮演……的角色.'],
   usage:'扮演 + 角色 / 主角 / 人物; 在……中扮演……; 扮演 + 重要的角色.',
   collo:['扮演强者','扮演角色','扮演主角','扮演重要的角色'],
   ex_zh:'我们的文化赋予了男人高大、坚强的形象，他们在生活中必须扮演强者。',ex_py:'Wǒmen de wénhuà fùyǔle nánrén gāodà, jiānqiáng de xíngxiàng, tāmen zài shēnghuó zhōng bìxū bànyǎn qiángzhě.',ex_vn:'Văn hoá của chúng ta đã khoác cho đàn ông hình tượng to lớn, kiên cường; trong cuộc sống họ buộc phải đóng vai kẻ mạnh.',
   exList:[
     {zh:'在这部电影里，他扮演一位默默无闻的乡村教师。',py:'Zài zhè bù diànyǐng li, tā bànyǎn yí wèi mòmò wú wén de xiāngcūn jiàoshī.',vn:'Trong bộ phim này, anh ấy đóng vai một thầy giáo làng lặng lẽ vô danh. (默默 — bài 26)'},
     {zh:'互联网在我们的生活中扮演着越来越重要的角色。',py:'Hùliánwǎng zài wǒmen de shēnghuó zhōng bànyǎnzhe yuè lái yuè zhòngyào de juésè.',vn:'Internet ngày càng giữ vai trò quan trọng trong cuộc sống của chúng ta.'},
     {zh:'在家里，她既扮演母亲的角色，又扮演父亲的角色。',py:'Zài jiā li, tā jì bànyǎn mǔqin de juésè, yòu bànyǎn fùqin de juésè.',vn:'Ở nhà, chị ấy vừa đóng vai người mẹ, vừa đóng vai người cha.'}
   ],
   colloFull:[
     {zh:'扮演强者',py:'bànyǎn qiángzhě',vn:'đóng vai kẻ mạnh'},
     {zh:'扮演角色',py:'bànyǎn juésè',vn:'đóng vai, giữ vai trò'},
     {zh:'扮演主角',py:'bànyǎn zhǔjué',vn:'đóng vai chính'},
     {zh:'扮演重要的角色',py:'bànyǎn zhòngyào de juésè',vn:'giữ vai trò quan trọng'},
     {zh:'扮演者',py:'bànyǎnzhě',vn:'người đóng vai'}
   ],
   patterns:[
     {s:'在……中扮演 + ……的角色',m:'Giữ vai trò … trong …'},
     {s:'在剧中 / 片中扮演 + 人物',m:'Đóng vai … trong vở kịch / bộ phim'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Trong gia đình, người bố không nhất thiết lúc nào cũng phải đóng vai kẻ mạnh.',answer:'在家庭中，父亲不一定时时刻刻都要扮演强者。',answerPy:'Zài jiātíng zhōng, fùqin bù yídìng shíshíkèkè dōu yào bànyǎn qiángzhě.',
      note:'不一定 = không nhất thiết; 时时刻刻 = lúc nào cũng.',pair:'不一定'},
     {promptLang:'vi',prompt:'Diễn viên đóng vai chính trong bộ phim này chính là bạn học cấp ba của tôi.',answer:'在这部电影里扮演主角的演员，就是我的高中同学。',answerPy:'Zài zhè bù diànyǐng li bànyǎn zhǔjué de yǎnyuán, jiù shì wǒ de gāozhōng tóngxué.',
      note:'Định ngữ dài (在……扮演主角) + 的 + danh từ.',pair:'Định ngữ dài + 的'}
   ]},

  {n:20,zh:'鄙视',py:'bǐshì',pos:'Động từ',vn:'xem thường, khinh thường, khinh bỉ',hv:'bỉ thị',em:'😒',lesson:1,
   explain:['Coi thường, khinh bỉ (cho là thấp kém, đáng khinh): 鄙视这种行为, 被人鄙视.','Sắc thái mạnh hơn 看不起 / 瞧不起 (khẩu ngữ) và 轻视 (xem nhẹ); đối tượng thường là hành vi xấu, người có phẩm chất kém. Ôn nhóm chữ 视 ở 热身: 轻视, 蔑视, 藐视, 歧视.'],
   usage:'鄙视 + 人 / 行为; 被（人）鄙视; 对……的鄙视; 受到鄙视; 鄙视的眼光.',
   collo:['被人鄙视','鄙视这种行为','外界的鄙视','受到鄙视'],
   ex_zh:'男人们为了不被鄙视，不被讥笑，为了远离那些恶心、不体面的词汇，千百次暗暗叮嘱自己。',ex_py:'Nánrénmen wèile bú bèi bǐshì, bú bèi jīxiào, wèile yuǎnlí nàxiē ěxīn, bù tǐmiàn de cíhuì, qiān bǎi cì àn\'àn dīngzhǔ zìjǐ.',ex_vn:'Đàn ông, để không bị khinh thường, không bị chế giễu, để tránh xa những từ ngữ đáng ghê tởm, chẳng ra thể thống gì, đã hàng trăm hàng nghìn lần thầm dặn lòng mình. (叮嘱 — bài 25)',
   exList:[
     {zh:'他这种不劳而获的行为被大多数人鄙视。',py:'Tā zhè zhǒng bù láo ér huò de xíngwéi bèi dà duōshù rén bǐshì.',vn:'Hành vi không làm mà hưởng của hắn bị đa số mọi người khinh bỉ. (练习2)'},
     {zh:'我们可以不同意他的观点，但不应该鄙视他这个人。',py:'Wǒmen kěyǐ bù tóngyì tā de guāndiǎn, dàn bù yīnggāi bǐshì tā zhège rén.',vn:'Chúng ta có thể không đồng ý với quan điểm của anh ấy, nhưng không nên khinh thường con người anh ấy.'},
     {zh:'扔掉外界对男人流泪的鄙视，因为这种鄙视只是一种狭隘的偏见。',py:'Rēngdiào wàijiè duì nánrén liú lèi de bǐshì, yīnwèi zhè zhǒng bǐshì zhǐ shì yì zhǒng xiá\'ài de piānjiàn.',vn:'Hãy vứt bỏ sự coi thường của bên ngoài đối với việc đàn ông rơi lệ, vì sự coi thường ấy chỉ là một định kiến hẹp hòi.'}
   ],
   colloFull:[
     {zh:'被人鄙视',py:'bèi rén bǐshì',vn:'bị người ta khinh'},
     {zh:'鄙视这种行为',py:'bǐshì zhè zhǒng xíngwéi',vn:'khinh bỉ hành vi này'},
     {zh:'外界的鄙视',py:'wàijiè de bǐshì',vn:'sự coi thường của bên ngoài'},
     {zh:'受到鄙视',py:'shòudào bǐshì',vn:'bị khinh thường'},
     {zh:'鄙视的眼光',py:'bǐshì de yǎnguāng',vn:'ánh mắt khinh bỉ'}
   ],
   patterns:[
     {s:'……被（大多数人）鄙视',m:'… bị (đa số người) khinh bỉ'},
     {s:'对…… + 的鄙视',m:'Sự coi thường đối với …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ai cũng không muốn bị người khác coi thường, cho nên phải tôn trọng người khác trước.',answer:'谁都不愿意被别人鄙视，所以要先尊重别人。',answerPy:'Shéi dōu bú yuànyì bèi biérén bǐshì, suǒyǐ yào xiān zūnzhòng biérén.',
      note:'谁都…… = ai cũng … (đại từ nghi vấn dùng phiếm chỉ).',pair:'谁都……'},
     {promptLang:'vi',prompt:'Cô ấy nhìn tôi bằng ánh mắt khinh bỉ, như thể tôi đã làm sai điều gì.',answer:'她用鄙视的眼光看着我，好像我做错了什么事似的。',answerPy:'Tā yòng bǐshì de yǎnguāng kànzhe wǒ, hǎoxiàng wǒ zuòcuòle shénme shì shìde.',
      note:'好像……似的: dường như, như thể ….',pair:'好像……似的'}
   ]},

  {n:21,zh:'讥笑',py:'jīxiào',pos:'Động từ',vn:'chế nhạo, nhạo báng',hv:'cơ tiếu',em:'😏',lesson:1,
   explain:['Cười cợt, chế giễu, mỉa mai người khác (hàm ý khinh miệt): 讥笑别人, 被人讥笑.','Văn viết, nặng hơn 笑话 (khẩu ngữ), gần 嘲笑. Ôn chữ 笑 ở 练习1: 微笑, 笑话, 可笑, 笑口常开.'],
   usage:'讥笑 + 人 / 缺点; 被（人）讥笑; 受到讥笑; 讥笑的 + 口吻 / 话.',
   collo:['被人讥笑','讥笑别人','受到讥笑','讥笑的口吻'],
   ex_zh:'由于智力有问题，他从小就经常被村里的孩子们讥笑。',ex_py:'Yóuyú zhìlì yǒu wèntí, tā cóngxiǎo jiù jīngcháng bèi cūn li de háizimen jīxiào.',ex_vn:'Do trí tuệ có vấn đề, từ nhỏ cậu ấy đã thường bị bọn trẻ trong làng chế giễu. (练习2; 智力 — bài 31)',
   exList:[
     {zh:'别讥笑别人的缺点，每个人都有自己的弱点。',py:'Bié jīxiào biérén de quēdiǎn, měi ge rén dōu yǒu zìjǐ de ruòdiǎn.',vn:'Đừng chế giễu khuyết điểm của người khác, ai cũng có điểm yếu của mình. (弱点 — bài 31)'},
     {zh:'他刚开始学说汉语时总怕被人讥笑，所以不敢开口。',py:'Tā gāng kāishǐ xué shuō Hànyǔ shí zǒng pà bèi rén jīxiào, suǒyǐ bù gǎn kāikǒu.',vn:'Lúc mới bắt đầu học nói tiếng Trung, cậu ấy luôn sợ bị người khác cười nhạo nên không dám mở miệng.'},
     {zh:'她用讥笑的口吻说：“就你这水平，还想拿冠军？”',py:'Tā yòng jīxiào de kǒuwěn shuō: “Jiù nǐ zhè shuǐpíng, hái xiǎng ná guànjūn?”',vn:'Cô ta nói bằng giọng mỉa mai: "Trình độ cỡ cậu mà còn muốn giành chức vô địch à?"'}
   ],
   colloFull:[
     {zh:'被人讥笑',py:'bèi rén jīxiào',vn:'bị người ta chế giễu'},
     {zh:'讥笑别人',py:'jīxiào biérén',vn:'chế giễu người khác'},
     {zh:'受到讥笑',py:'shòudào jīxiào',vn:'bị nhạo báng'},
     {zh:'讥笑的口吻',py:'jīxiào de kǒuwěn',vn:'giọng chế giễu'},
     {zh:'讥笑声',py:'jīxiàoshēng',vn:'tiếng cười nhạo'}
   ],
   patterns:[
     {s:'被 + 人 + 讥笑',m:'Bị ai chế giễu'},
     {s:'用讥笑的口吻说',m:'Nói bằng giọng mỉa mai'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Dù bị người khác chế giễu, anh ấy vẫn luôn kiên trì với ước mơ của mình.',answer:'哪怕被别人讥笑，他也一直坚持自己的梦想。',answerPy:'Nǎpà bèi biérén jīxiào, tā yě yìzhí jiānchí zìjǐ de mèngxiǎng.',
      note:'哪怕……也……: dù … cũng … (điểm ngữ pháp 1).',pair:'哪怕……也……'},
     {promptLang:'vi',prompt:'Đừng chế giễu người khác, kẻo sau này người ta cũng chế giễu lại cậu.',answer:'不要讥笑别人，以免将来别人也讥笑你。',answerPy:'Bú yào jīxiào biérén, yǐmiǎn jiānglái biérén yě jīxiào nǐ.',
      note:'以免 = để tránh, kẻo (bài 21).',pair:'以免'}
   ]},

  {n:22,zh:'恶心',py:'ěxīn',pos:'Tính từ',vn:'buồn nôn; làm ghê tởm',hv:'ác tâm',em:'🤢',lesson:1,
   explain:['Nghĩa gốc: buồn nôn, lợm giọng: 我有点儿恶心, 恶心想吐.','Nghĩa bóng: đáng ghê tởm, khiến người ta khó chịu, chán ghét: 恶心的话, 真让人恶心. Chú ý: "ác tâm" tiếng Việt = lòng dạ độc ác — khác hẳn; 恶 ở đây đọc ě (khẩu ngữ thường đọc ěxin).'],
   usage:'感到 / 觉得 + 恶心; 恶心 + 想吐; 恶心的 + 话 / 词汇 / 行为; 让人恶心.',
   collo:['恶心想吐','感到恶心','让人恶心','恶心的词汇'],
   ex_zh:'男人们为了不被鄙视，不被讥笑，为了远离那些恶心、不体面的词汇，千百次暗暗叮嘱自己。',ex_py:'Nánrénmen wèile bú bèi bǐshì, bú bèi jīxiào, wèile yuǎnlí nàxiē ěxīn, bù tǐmiàn de cíhuì, qiān bǎi cì àn\'àn dīngzhǔ zìjǐ.',ex_vn:'Đàn ông, để không bị khinh thường, không bị chế giễu, để tránh xa những từ ngữ đáng ghê tởm, chẳng ra thể thống gì, đã hàng trăm hàng nghìn lần thầm dặn lòng mình.',
   exList:[
     {zh:'我晕车晕得厉害，一坐上汽车就恶心想吐。',py:'Wǒ yùnchē yùn de lìhai, yí zuòshàng qìchē jiù ěxīn xiǎng tù.',vn:'Tôi say xe nặng lắm, hễ lên ô tô là buồn nôn muốn ói.'},
     {zh:'一想到那只虫子，我就觉得恶心。',py:'Yì xiǎngdào nà zhī chóngzi, wǒ jiù juéde ěxīn.',vn:'Hễ nghĩ đến con sâu đó là tôi thấy ghê.'},
     {zh:'他当面一套、背后一套的做法，真让人恶心。',py:'Tā dāngmiàn yí tào, bèihòu yí tào de zuòfǎ, zhēn ràng rén ěxīn.',vn:'Cái kiểu trước mặt một đằng sau lưng một nẻo của hắn thật khiến người ta ghê tởm.'}
   ],
   colloFull:[
     {zh:'恶心想吐',py:'ěxīn xiǎng tù',vn:'buồn nôn muốn ói'},
     {zh:'感到恶心',py:'gǎndào ěxīn',vn:'thấy buồn nôn / ghê tởm'},
     {zh:'让人恶心',py:'ràng rén ěxīn',vn:'khiến người ta ghê tởm'},
     {zh:'恶心的词汇',py:'ěxīn de cíhuì',vn:'những từ ngữ đáng ghê tởm'},
     {zh:'有点儿恶心',py:'yǒudiǎnr ěxīn',vn:'hơi buồn nôn'}
   ],
   patterns:[
     {s:'一 + V……就恶心（想吐）',m:'Hễ … là buồn nôn'},
     {s:'……真让人恶心',m:'… thật khiến người ta ghê tởm'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Hễ ngửi thấy mùi khói thuốc là tôi thấy buồn nôn.',answer:'我一闻到烟味儿就觉得恶心。',answerPy:'Wǒ yì wéndào yānwèir jiù juéde ěxīn.',
      note:'一……就……: hễ … là ….',pair:'一……就……'},
     {promptLang:'vi',prompt:'Sáng nay tôi hơi buồn nôn, có lẽ là tối qua ăn phải đồ hỏng.',answer:'今天早上我有点儿恶心，可能是昨天晚上吃坏肚子了。',answerPy:'Jīntiān zǎoshang wǒ yǒudiǎnr ěxīn, kěnéng shì zuótiān wǎnshang chīhuài dùzi le.',
      note:'有点儿 + Adj (điều không như ý); 吃坏肚子 = ăn hỏng bụng.',pair:'有点儿 + Adj'}
   ]},

  {n:23,zh:'体面',py:'tǐmiàn',pos:'Tính từ',vn:'vẻ vang, đàng hoàng; chỉnh tề',hv:'thể diện',em:'🎩',lesson:1,
   explain:['Tính từ: đàng hoàng, có thể diện, vẻ vang: 体面的工作, 不体面 (mất mặt, chẳng ra thể thống gì).','Còn nghĩa: (ăn mặc, dáng vẻ) tươm tất, chỉnh tề: 穿得很体面. Làm danh từ = thể diện (≈ 面子): 顾全体面.'],
   usage:'体面的 + 工作 / 生活; 不体面; 穿得 + 体面; 顾全 / 失去 + 体面; 体体面面.',
   collo:['不体面','体面的工作','穿得很体面','顾全体面'],
   ex_zh:'男人们为了不被鄙视，不被讥笑，为了远离那些恶心、不体面的词汇，千百次暗暗叮嘱自己。',ex_py:'Nánrénmen wèile bú bèi bǐshì, bú bèi jīxiào, wèile yuǎnlí nàxiē ěxīn, bù tǐmiàn de cíhuì, qiān bǎi cì àn\'àn dīngzhǔ zìjǐ.',ex_vn:'Đàn ông, để không bị khinh thường, không bị chế giễu, để tránh xa những từ ngữ đáng ghê tởm, chẳng ra thể thống gì, đã hàng trăm hàng nghìn lần thầm dặn lòng mình.',
   exList:[
     {zh:'他大学毕业后找了一份体面的工作，父母很满意。',py:'Tā dàxué bìyè hòu zhǎole yí fèn tǐmiàn de gōngzuò, fùmǔ hěn mǎnyì.',vn:'Tốt nghiệp đại học xong anh ấy tìm được một công việc đàng hoàng, bố mẹ rất hài lòng.'},
     {zh:'去参加面试要穿得体面一点儿，给人留下好印象。',py:'Qù cānjiā miànshì yào chuān de tǐmiàn yìdiǎnr, gěi rén liúxià hǎo yìnxiàng.',vn:'Đi phỏng vấn phải ăn mặc chỉnh tề một chút để gây ấn tượng tốt.'},
     {zh:'为了顾全双方的体面，他没有当众指出对方的错误。',py:'Wèile gùquán shuāngfāng de tǐmiàn, tā méiyǒu dāngzhòng zhǐchū duìfāng de cuòwù.',vn:'Để giữ thể diện cho cả hai bên, anh ấy không chỉ ra lỗi của đối phương trước mặt mọi người.'}
   ],
   colloFull:[
     {zh:'不体面',py:'bù tǐmiàn',vn:'không đàng hoàng, mất mặt'},
     {zh:'体面的工作',py:'tǐmiàn de gōngzuò',vn:'công việc đàng hoàng'},
     {zh:'穿得很体面',py:'chuān de hěn tǐmiàn',vn:'ăn mặc chỉnh tề'},
     {zh:'顾全体面',py:'gùquán tǐmiàn',vn:'giữ thể diện'},
     {zh:'体面的生活',py:'tǐmiàn de shēnghuó',vn:'cuộc sống đàng hoàng'}
   ],
   patterns:[
     {s:'找一份体面的工作',m:'Tìm một công việc đàng hoàng'},
     {s:'穿得 + 体面（一点儿）',m:'Ăn mặc chỉnh tề (một chút)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Anh ấy thà vất vả một chút chứ không muốn làm chuyện chẳng đàng hoàng.',answer:'他宁可辛苦一点儿，也不愿意做不体面的事。',answerPy:'Tā nìngkě xīnkǔ yìdiǎnr, yě bú yuànyì zuò bù tǐmiàn de shì.',
      note:'宁可……也不……: thà … chứ không ….',pair:'宁可……也不……'},
     {promptLang:'vi',prompt:'Tuy nhà không giàu, nhưng mẹ lúc nào cũng cho chúng tôi ăn mặc tươm tất.',answer:'虽然家里不富裕，但是妈妈总是让我们穿得体体面面的。',answerPy:'Suīrán jiā li bú fùyù, dànshì māma zǒngshì ràng wǒmen chuān de tǐtǐmiànmiàn de.',
      note:'Dạng lặp AABB 体体面面 nhấn mức độ, sau thường có 的.',pair:'AABB（体体面面）'}
   ]},

  {n:24,zh:'含糊',py:'hánhu',pos:'Tính từ',vn:'mơ hồ, mập mờ; qua loa',hv:'hàm hồ',em:'🌫️',lesson:1,
   explain:['Không rõ ràng, mập mờ: 含糊其辞 (nói úp mở), 回答得很含糊, 含糊不清.','Không nghiêm túc, qua loa; hay dùng phủ định 不能含糊 = không được qua loa; khẩu ngữ 真不含糊 còn là lời khen "cừ, giỏi thật". Chú ý: "hàm hồ" tiếng Việt = nói bừa không căn cứ — khác nghĩa.'],
   usage:'回答 / 说得 + 很含糊; 含糊不清; 含糊其辞; 这件事不能含糊; 真不含糊 (khen).',
   collo:['不能含糊','含糊不清','回答得很含糊','真不含糊'],
   ex_zh:'哪怕遭受打击、面对失败、受尽委屈，也一定要坚强，这是什么时候都不能含糊的。',ex_py:'Nǎpà zāoshòu dǎjī, miànduì shībài, shòujìn wěiqu, yě yídìng yào jiānqiáng, zhè shì shénme shíhou dōu bù néng hánhu de.',ex_vn:'Dù gặp cú sốc, đối mặt thất bại, chịu đủ mọi uất ức cũng nhất định phải kiên cường — điều này lúc nào cũng không được qua loa.',
   exList:[
     {zh:'问他到底去不去，他回答得很含糊，谁也听不明白。',py:'Wèn tā dàodǐ qù bu qù, tā huídá de hěn hánhu, shéi yě tīng bu míngbai.',vn:'Hỏi anh ta rốt cuộc có đi không, anh ta trả lời rất mập mờ, chẳng ai hiểu nổi.'},
     {zh:'安全问题关系到每个人的生命，一点儿也不能含糊。',py:'Ānquán wèntí guānxì dào měi ge rén de shēngmìng, yìdiǎnr yě bù néng hánhu.',vn:'Vấn đề an toàn liên quan đến tính mạng của mỗi người, một chút cũng không được qua loa.'},
     {zh:'这小伙子干活儿真不含糊，一个人就把仓库整理得干干净净。',py:'Zhè xiǎohuǒzi gàn huór zhēn bù hánhu, yí ge rén jiù bǎ cāngkù zhěnglǐ de gāngānjìngjìng.',vn:'Cậu thanh niên này làm việc cừ thật, một mình dọn kho sạch sẽ tinh tươm. (仓库 — bài 21)'}
   ],
   colloFull:[
     {zh:'不能含糊',py:'bù néng hánhu',vn:'không được qua loa'},
     {zh:'含糊不清',py:'hánhu bù qīng',vn:'mập mờ không rõ'},
     {zh:'回答得很含糊',py:'huídá de hěn hánhu',vn:'trả lời rất mập mờ'},
     {zh:'真不含糊',py:'zhēn bù hánhu',vn:'cừ thật, giỏi thật'},
     {zh:'含糊其辞',py:'hánhu qí cí',vn:'nói úp mở'}
   ],
   patterns:[
     {s:'……（是）什么时候都不能含糊的',m:'… lúc nào cũng không được qua loa'},
     {s:'V + 得很含糊',m:'… rất mập mờ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Trong công việc, chuyện khác đều có thể bàn, riêng chất lượng thì một chút cũng không được qua loa.',answer:'工作中别的都可以商量，唯独质量一点儿也不能含糊。',answerPy:'Gōngzuò zhōng bié de dōu kěyǐ shāngliang, wéidú zhìliàng yìdiǎnr yě bù néng hánhu.',
      note:'唯独 = duy chỉ, riêng (bài 6).',pair:'唯独'},
     {promptLang:'vi',prompt:'Nếu anh không đồng ý thì cứ nói thẳng, đừng úp úp mở mở.',answer:'如果你不同意就直接说，别含含糊糊的。',answerPy:'Rúguǒ nǐ bù tóngyì jiù zhíjiē shuō, bié hánhanhūhū de.',
      note:'如果……就……; dạng lặp AABB 含含糊糊.',pair:'如果……就……'}
   ]},

  {n:25,zh:'束缚',py:'shùfù',pos:'Động từ',vn:'ràng buộc, trói buộc',hv:'thúc phược',em:'⛓️',lesson:1,
   explain:['Trói buộc, gò bó, hạn chế sự tự do phát triển: 束缚手脚, 束缚思想, 受……的束缚.','Làm danh từ = sự ràng buộc: 摆脱束缚, 一种束缚. Đối tượng thường trừu tượng (tư tưởng, quan niệm, truyền thống).'],
   usage:'束缚 + 思想 / 手脚 / 人; 受到……的束缚; 摆脱 / 打破 + 束缚; ……是一种束缚.',
   collo:['摆脱束缚','束缚思想','受到束缚','一种束缚'],
   ex_zh:'实际情况是，“男儿有泪不轻弹”是社会文化赋予男人的一种束缚。',ex_py:'Shíjì qíngkuàng shì, “nán\'ér yǒu lèi bù qīng tán” shì shèhuì wénhuà fùyǔ nánrén de yì zhǒng shùfù.',ex_vn:'Thực tế là, "nam nhi có lệ không dễ rơi" là một sự trói buộc mà văn hoá xã hội áp lên đàn ông.',
   exList:[
     {zh:'只有摆脱旧观念的束缚，才能真正解放思想。',py:'Zhǐyǒu bǎituō jiù guānniàn de shùfù, cái néng zhēnzhèng jiěfàng sīxiǎng.',vn:'Chỉ khi thoát khỏi sự trói buộc của quan niệm cũ mới thật sự giải phóng được tư tưởng.'},
     {zh:'太多的规定束缚了员工的手脚，大家都不敢创新。',py:'Tài duō de guīdìng shùfùle yuángōng de shǒujiǎo, dàjiā dōu bù gǎn chuàngxīn.',vn:'Quá nhiều quy định đã trói tay trói chân nhân viên, ai cũng không dám đổi mới.'},
     {zh:'他不愿意受家庭的束缚，十八岁就一个人出去闯荡了。',py:'Tā bú yuànyì shòu jiātíng de shùfù, shíbā suì jiù yí ge rén chūqù chuǎngdàng le.',vn:'Anh ấy không muốn bị gia đình ràng buộc, mười tám tuổi đã một mình ra ngoài lập nghiệp.'}
   ],
   colloFull:[
     {zh:'摆脱束缚',py:'bǎituō shùfù',vn:'thoát khỏi ràng buộc'},
     {zh:'束缚思想',py:'shùfù sīxiǎng',vn:'trói buộc tư tưởng'},
     {zh:'受到束缚',py:'shòudào shùfù',vn:'bị ràng buộc'},
     {zh:'一种束缚',py:'yì zhǒng shùfù',vn:'một sự trói buộc'},
     {zh:'束缚手脚',py:'shùfù shǒujiǎo',vn:'trói tay trói chân'}
   ],
   patterns:[
     {s:'摆脱 / 打破 + ……的束缚',m:'Thoát khỏi / phá vỡ sự trói buộc của …'},
     {s:'……是……的一种束缚',m:'… là một sự trói buộc đối với …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ khi thoát khỏi sự trói buộc của quan niệm truyền thống, đàn ông mới dám rơi nước mắt.',answer:'只有摆脱传统观念的束缚，男人才敢流泪。',answerPy:'Zhǐyǒu bǎituō chuántǒng guānniàn de shùfù, nánrén cái gǎn liú lèi.',
      note:'只有……才……: chỉ khi … mới ….',pair:'只有……才……'},
     {promptLang:'vi',prompt:'Đối với trẻ con, quá nhiều quy định ngược lại là một sự trói buộc.',answer:'对孩子来说，太多的规定反而是一种束缚。',answerPy:'Duì háizi lái shuō, tài duō de guīdìng fǎn\'ér shì yì zhǒng shùfù.',
      note:'反而 = ngược lại (kết quả trái mong đợi).',pair:'反而'}
   ]},

  {n:26,zh:'魔鬼',py:'móguǐ',pos:'Danh từ',vn:'ma quỷ, ác quỷ',hv:'ma quỷ',em:'👹',lesson:1,
   explain:['Ma quỷ trong tôn giáo, truyền thuyết; ví với kẻ độc ác, thế lực xấu xa: 他简直是个魔鬼.','Khẩu ngữ hiện đại: 魔鬼训练 (huấn luyện cực khắc nghiệt), 魔鬼身材 (thân hình cực chuẩn). Trong bài đối lập với 神仙: 男人不是魔鬼，也不是神仙 — không phải ác quỷ cũng chẳng phải thần tiên, mà là người bình thường.'],
   usage:'像魔鬼一样; ……简直是个魔鬼; 魔鬼训练; 魔鬼身材; 心中的魔鬼.',
   collo:['魔鬼训练','魔鬼身材','像魔鬼一样','心中的魔鬼'],
   ex_zh:'男人不是魔鬼，也不是神仙，他们也是有血有肉、有健全情感的人。',ex_py:'Nánrén bú shì móguǐ, yě bú shì shénxiān, tāmen yě shì yǒu xuè yǒu ròu, yǒu jiànquán qínggǎn de rén.',ex_vn:'Đàn ông không phải ác quỷ, cũng chẳng phải thần tiên, họ cũng là con người bằng xương bằng thịt, có tình cảm lành mạnh đầy đủ.',
   exList:[
     {zh:'经过三个月的魔鬼训练，队员们的体能都提高了一大截。',py:'Jīngguò sān ge yuè de móguǐ xùnliàn, duìyuánmen de tǐnéng dōu tígāole yí dà jié.',vn:'Sau ba tháng huấn luyện khắc nghiệt, thể lực của các đội viên đều tăng lên một bậc lớn.'},
     {zh:'在童话故事里，魔鬼最后总是被勇敢的王子打败。',py:'Zài tónghuà gùshi li, móguǐ zuìhòu zǒngshì bèi yǒnggǎn de wángzǐ dǎbài.',vn:'Trong truyện cổ tích, ác quỷ cuối cùng luôn bị chàng hoàng tử dũng cảm đánh bại.'},
     {zh:'每个人心中都有一个“懒惰”的魔鬼，要靠意志去战胜它。',py:'Měi ge rén xīnzhōng dōu yǒu yí ge “lǎnduò” de móguǐ, yào kào yìzhì qù zhànshèng tā.',vn:'Trong lòng mỗi người đều có một con quỷ "lười biếng", phải dựa vào ý chí để chiến thắng nó. (意志 — bài 7)'}
   ],
   colloFull:[
     {zh:'魔鬼训练',py:'móguǐ xùnliàn',vn:'huấn luyện cực khắc nghiệt'},
     {zh:'魔鬼身材',py:'móguǐ shēncái',vn:'thân hình bốc lửa'},
     {zh:'像魔鬼一样',py:'xiàng móguǐ yíyàng',vn:'như ma quỷ'},
     {zh:'心中的魔鬼',py:'xīnzhōng de móguǐ',vn:'con quỷ trong lòng'},
     {zh:'魔鬼般的',py:'móguǐ bān de',vn:'như ma quỷ, ghê gớm'}
   ],
   patterns:[
     {s:'A 不是魔鬼，也不是神仙',m:'A chẳng phải ác quỷ cũng chẳng phải thần tiên (chỉ là người thường)'},
     {s:'经过……的魔鬼训练',m:'Trải qua … huấn luyện khắc nghiệt'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Huấn luyện viên tuy nghiêm khắc như ác quỷ, nhưng thật ra rất quan tâm chúng tôi.',answer:'教练虽然严厉得像魔鬼一样，其实非常关心我们。',answerPy:'Jiàoliàn suīrán yánlì de xiàng móguǐ yíyàng, qíshí fēicháng guānxīn wǒmen.',
      note:'像……一样: giống như …; 严厉 (bài 1).',pair:'像……一样'},
     {promptLang:'vi',prompt:'Anh ta chẳng phải ác quỷ gì cả, chỉ là không biết cách bày tỏ tình cảm mà thôi.',answer:'他并不是什么魔鬼，只是不会表达感情罢了。',answerPy:'Tā bìng bú shì shénme móguǐ, zhǐshì bú huì biǎodá gǎnqíng bàle.',
      note:'只是……罢了: chỉ là … mà thôi.',pair:'只是……罢了'}
   ]},


  {n:27,zh:'神仙',py:'shénxiān',pos:'Danh từ',vn:'thần tiên',hv:'thần tiên',em:'🧚',lesson:1,
   explain:['Tiên, thần trong truyền thuyết, có phép thuật, trường sinh bất lão: 神仙故事.','Ví người sống sung sướng, không lo nghĩ (神仙般的生活) hoặc người biết trước mọi việc (我又不是神仙，怎么知道？). Ôn nhóm chữ 神 ở 热身: 神话, 神灵, 财神, 天神.'],
   usage:'神仙般的 + 生活 / 日子; 又不是神仙; 快活似神仙; 神仙故事.',
   collo:['神仙般的生活','又不是神仙','神仙故事','快活似神仙'],
   ex_zh:'男人不是魔鬼，也不是神仙，他们也是有血有肉、有健全情感的人。',ex_py:'Nánrén bú shì móguǐ, yě bú shì shénxiān, tāmen yě shì yǒu xuè yǒu ròu, yǒu jiànquán qínggǎn de rén.',ex_vn:'Đàn ông không phải ác quỷ, cũng chẳng phải thần tiên, họ cũng là con người bằng xương bằng thịt, có tình cảm lành mạnh đầy đủ.',
   exList:[
     {zh:'我又不是神仙，哪儿知道明天会不会下雨？',py:'Wǒ yòu bú shì shénxiān, nǎr zhīdào míngtiān huì bu huì xià yǔ?',vn:'Tôi có phải thần tiên đâu, làm sao biết mai có mưa hay không?'},
     {zh:'退休以后，爷爷每天钓钓鱼、养养花，过着神仙般的生活。',py:'Tuìxiū yǐhòu, yéye měi tiān diàodiao yú, yǎngyang huā, guòzhe shénxiān bān de shēnghuó.',vn:'Nghỉ hưu rồi, ông nội mỗi ngày câu cá, trồng hoa, sống cuộc sống như tiên.'},
     {zh:'小时候，奶奶常常给我讲神仙和魔鬼的故事。',py:'Xiǎoshíhou, nǎinai chángcháng gěi wǒ jiǎng shénxiān hé móguǐ de gùshi.',vn:'Hồi nhỏ, bà thường kể cho tôi nghe chuyện thần tiên và ma quỷ.'}
   ],
   colloFull:[
     {zh:'神仙般的生活',py:'shénxiān bān de shēnghuó',vn:'cuộc sống như tiên'},
     {zh:'又不是神仙',py:'yòu bú shì shénxiān',vn:'có phải thần tiên đâu'},
     {zh:'神仙故事',py:'shénxiān gùshi',vn:'truyện thần tiên'},
     {zh:'快活似神仙',py:'kuàihuo sì shénxiān',vn:'sung sướng như tiên'},
     {zh:'老神仙',py:'lǎo shénxiān',vn:'ông tiên già'}
   ],
   patterns:[
     {s:'我又不是神仙，怎么 / 哪儿知道……？',m:'Tôi có phải thần tiên đâu mà biết …?'},
     {s:'过着神仙般的生活',m:'Sống cuộc sống như tiên'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Thầy cô cũng không phải thần tiên, sao có thể không bao giờ mắc lỗi chứ?',answer:'老师也不是神仙，怎么可能从来不犯错误呢？',answerPy:'Lǎoshī yě bú shì shénxiān, zěnme kěnéng cónglái bú fàn cuòwù ne?',
      note:'怎么可能……呢？: câu hỏi tu từ = không thể nào ….',pair:'怎么可能……呢？'},
     {promptLang:'vi',prompt:'Sống ở nơi non xanh nước biếc này, quả thật còn sung sướng hơn cả thần tiên.',answer:'住在这个山清水秀的地方，简直比神仙还快活。',answerPy:'Zhù zài zhège shānqīng-shuǐxiù de dìfang, jiǎnzhí bǐ shénxiān hái kuàihuo.',
      note:'A 比 B 还 + Adj: A còn … hơn cả B; 简直 = quả thật.',pair:'A 比 B 还……'}
   ]},

  {n:28,zh:'健全',py:'jiànquán',pos:'Tính từ',vn:'khoẻ mạnh, hoàn thiện, hoàn hảo',hv:'kiện toàn',em:'💯',lesson:1,
   explain:['(Cơ thể, tinh thần) khoẻ mạnh, không khiếm khuyết: 身心健全, 四肢健全, 健全的人格, 健全的情感.','(Chế độ, tổ chức) hoàn chỉnh, không thiếu sót: 制度健全, 法律不健全; làm động từ: 健全法制. Chú ý: tiếng Việt "kiện toàn" chủ yếu là động từ (củng cố tổ chức), còn 健全 hay làm tính từ.'],
   usage:'身心 / 四肢 / 制度 + 健全; 健全的 + 人格 / 情感 / 制度; 健全 + 法制 / 机制 (động từ); 不健全.',
   collo:['健全的情感','身心健全','制度健全','健全法制'],
   ex_zh:'男人不是魔鬼，也不是神仙，他们也是有血有肉、有健全情感的人。',ex_py:'Nánrén bú shì móguǐ, yě bú shì shénxiān, tāmen yě shì yǒu xuè yǒu ròu, yǒu jiànquán qínggǎn de rén.',ex_vn:'Đàn ông không phải ác quỷ, cũng chẳng phải thần tiên, họ cũng là con người bằng xương bằng thịt, có tình cảm lành mạnh đầy đủ.',
   exList:[
     {zh:'学校教育的目的不只是传授知识，更是培养学生健全的人格。',py:'Xuéxiào jiàoyù de mùdì bù zhǐ shì chuánshòu zhīshi, gèng shì péiyǎng xuésheng jiànquán de réngé.',vn:'Mục đích của giáo dục nhà trường không chỉ là truyền thụ kiến thức, mà hơn thế là bồi dưỡng nhân cách lành mạnh cho học sinh.'},
     {zh:'这家公司管理制度不健全，所以经常出问题。',py:'Zhè jiā gōngsī guǎnlǐ zhìdù bú jiànquán, suǒyǐ jīngcháng chū wèntí.',vn:'Chế độ quản lý của công ty này chưa hoàn thiện nên thường xuyên xảy ra vấn đề.'},
     {zh:'他虽然四肢健全，却整天无所事事，还不如那些残疾人努力。',py:'Tā suīrán sìzhī jiànquán, què zhěngtiān wú suǒ shì shì, hái bùrú nàxiē cánjírén nǔlì.',vn:'Anh ta tuy chân tay lành lặn nhưng suốt ngày chẳng làm gì, còn không cố gắng bằng những người khuyết tật.'}
   ],
   colloFull:[
     {zh:'健全的情感',py:'jiànquán de qínggǎn',vn:'tình cảm lành mạnh đầy đủ'},
     {zh:'身心健全',py:'shēnxīn jiànquán',vn:'thân tâm khoẻ mạnh'},
     {zh:'制度健全',py:'zhìdù jiànquán',vn:'chế độ hoàn chỉnh'},
     {zh:'健全法制',py:'jiànquán fǎzhì',vn:'kiện toàn pháp chế'},
     {zh:'健全的人格',py:'jiànquán de réngé',vn:'nhân cách lành mạnh'}
   ],
   patterns:[
     {s:'培养 + 健全的人格',m:'Bồi dưỡng nhân cách lành mạnh'},
     {s:'制度 / 法律 + 不健全',m:'Chế độ / luật pháp chưa hoàn thiện'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Muốn con có nhân cách lành mạnh thì cha mẹ trước tiên phải làm gương tốt.',answer:'要想让孩子有健全的人格，父母首先要做好榜样。',answerPy:'Yào xiǎng ràng háizi yǒu jiànquán de réngé, fùmǔ shǒuxiān yào zuòhǎo bǎngyàng.',
      note:'要想……，首先要……: muốn … thì trước hết phải ….',pair:'要想……，首先……'},
     {promptLang:'vi',prompt:'Chính vì chế độ quản lý chưa hoàn thiện nên mới xảy ra sự cố lần này.',answer:'正是因为管理制度不健全，才发生了这次事故。',answerPy:'Zhèng shì yīnwèi guǎnlǐ zhìdù bú jiànquán, cái fāshēngle zhè cì shìgù.',
      note:'正是因为……才……: chính vì … nên mới ….',pair:'正是因为……才……'}
   ]},

  {n:29,zh:'塌',py:'tā',pos:'Động từ',vn:'đổ, sụp',hv:'tháp',em:'🏚️',lesson:1,
   explain:['(Nhà cửa, cầu, tường, núi…) đổ sập, sụp xuống: 房子塌了, 桥塌了, 倒塌.','Còn nghĩa lõm xuống, xẹp: 塌鼻子 (mũi tẹt); 天塌下来 (trời sập) ví chuyện cực lớn. Trong bài: 再有力的肩膀也有被压塌的时候 — bờ vai khoẻ đến mấy cũng có lúc bị đè sụp.'],
   usage:'房子 / 桥 / 墙 + 塌了; 被 + 压塌 / 冲塌; 倒塌; 天塌下来.',
   collo:['被压塌','房子塌了','倒塌','天塌下来'],
   ex_zh:'否则，再有力的肩膀也有被压塌的时候。',ex_py:'Fǒuzé, zài yǒulì de jiānbǎng yě yǒu bèi yātā de shíhou.',ex_vn:'Nếu không, bờ vai vững chắc đến mấy cũng có lúc bị đè sụp.',
   exList:[
     {zh:'这场大雨下了三天三夜，村里好几间老房子都塌了。',py:'Zhè cháng dàyǔ xiàle sān tiān sān yè, cūn li hǎo jǐ jiān lǎo fángzi dōu tā le.',vn:'Trận mưa lớn này kéo dài ba ngày ba đêm, mấy căn nhà cũ trong làng đều sập cả.'},
     {zh:'别担心，天塌下来有高个子顶着，你先把自己的事做好。',py:'Bié dānxīn, tiān tā xiàlái yǒu gāo gèzi dǐngzhe, nǐ xiān bǎ zìjǐ de shì zuòhǎo.',vn:'Đừng lo, trời sập đã có người cao chống đỡ, em cứ làm tốt việc của mình trước đã.'},
     {zh:'屋顶上的积雪太厚，把车棚压塌了。',py:'Wūdǐng shang de jīxuě tài hòu, bǎ chēpéng yātā le.',vn:'Tuyết đọng trên mái quá dày, đè sập cả mái che xe.'}
   ],
   colloFull:[
     {zh:'被压塌',py:'bèi yātā',vn:'bị đè sụp'},
     {zh:'房子塌了',py:'fángzi tā le',vn:'nhà sập rồi'},
     {zh:'倒塌',py:'dǎotā',vn:'đổ sập'},
     {zh:'天塌下来',py:'tiān tā xiàlái',vn:'trời sập'},
     {zh:'塌方',py:'tāfāng',vn:'sạt lở'}
   ],
   patterns:[
     {s:'……被 + 压 / 冲 + 塌了',m:'… bị đè / cuốn sập'},
     {s:'哪怕天塌下来，也……',m:'Dù trời có sập cũng … (nhấn quyết tâm)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Dù trời có sập xuống, hôm nay tôi cũng phải làm xong việc này.',answer:'哪怕天塌下来，我今天也要把这件事做完。',answerPy:'Nǎpà tiān tā xiàlái, wǒ jīntiān yě yào bǎ zhè jiàn shì zuòwán.',
      note:'哪怕……也……: dù … cũng … (điểm ngữ pháp 1).',pair:'哪怕……也……'},
     {promptLang:'vi',prompt:'Cây cầu cũ này đã bị lũ cuốn sập, chúng ta đành phải đi đường vòng.',answer:'这座旧桥被洪水冲塌了，我们只好绕路走。',answerPy:'Zhè zuò jiù qiáo bèi hóngshuǐ chōngtā le, wǒmen zhǐhǎo rào lù zǒu.',
      note:'被 + tác nhân + V塌; 只好 = đành phải.',pair:'只好'}
   ]},

  {n:30,zh:'反之',py:'fǎnzhī',pos:'Liên từ',vn:'trái lại, ngược lại',hv:'phản chi',em:'🔄',lesson:1,
   explain:['Liên từ văn viết = "nói từ mặt ngược lại" (从相反的方面说). Dùng giữa hai vế câu / hai đoạn, dẫn ra ý trái với phía trước; sau 反之 có ngắt (dấu phẩy). (Điểm ngữ pháp 2.)','Khung hay gặp: 如果 / 只要 A，就 B；反之，C. Khác 相反 (còn làm tính từ: 相反的意见), 反之 chỉ làm liên từ; 反之亦然 = ngược lại cũng thế.'],
   usage:'A，（就）B；反之，C; ……，反之亦然; 反之则…… (văn viết).',
   collo:['反之亦然','反之，就……','反之则……','反之，如果……'],
   ex_zh:'事实表明，长期的压抑、隐忍对健康只有坏处，没有好处，反之，以适当的方式将情绪释放一下，人的心绪才会变得平和。',ex_py:'Shìshí biǎomíng, chángqī de yāyì, yǐnrěn duì jiànkāng zhǐyǒu huàichù, méiyǒu hǎochù, fǎnzhī, yǐ shìdàng de fāngshì jiāng qíngxù shìfàng yíxià, rén de xīnxù cái huì biàn de pínghé.',ex_vn:'Thực tế cho thấy, dồn nén, nhẫn nhịn lâu dài chỉ có hại chứ không có lợi cho sức khoẻ; ngược lại, giải toả cảm xúc bằng cách thích hợp thì tâm trạng con người mới trở nên bình hoà.',
   exList:[
     {zh:'经济发展了，百姓的收入增加了，消费能力就强，反之，百姓的消费能力就差。',py:'Jīngjì fāzhǎn le, bǎixìng de shōurù zēngjiā le, xiāofèi nénglì jiù qiáng, fǎnzhī, bǎixìng de xiāofèi nénglì jiù chà.',vn:'Kinh tế phát triển, thu nhập của người dân tăng thì sức tiêu dùng sẽ mạnh; ngược lại, sức tiêu dùng của người dân sẽ kém.'},
     {zh:'有些东西，越是一心想要得到，越是不能如愿，反之，不去在意的时候倒会有意外来临。',py:'Yǒuxiē dōngxi, yuè shì yìxīn xiǎng yào dédào, yuè shì bù néng rúyuàn, fǎnzhī, bú qù zàiyì de shíhou dào huì yǒu yìwài láilín.',vn:'Có những thứ càng một lòng muốn có thì càng không được như ý; ngược lại, lúc không để tâm thì lại có bất ngờ ập đến.'},
     {zh:'父母尊重孩子，孩子就会尊重父母；反之亦然。',py:'Fùmǔ zūnzhòng háizi, háizi jiù huì zūnzhòng fùmǔ; fǎnzhī yì rán.',vn:'Cha mẹ tôn trọng con thì con sẽ tôn trọng cha mẹ; ngược lại cũng vậy. (亦 — bài 27)'}
   ],
   colloFull:[
     {zh:'反之亦然',py:'fǎnzhī yì rán',vn:'ngược lại cũng thế'},
     {zh:'反之，就……',py:'fǎnzhī, jiù……',vn:'ngược lại thì …'},
     {zh:'反之则……',py:'fǎnzhī zé……',vn:'ngược lại thì … (văn viết)'},
     {zh:'反之，如果……',py:'fǎnzhī, rúguǒ……',vn:'ngược lại, nếu …'}
   ],
   patterns:[
     {s:'如果 / 只要 A，就 B；反之，C',m:'Nếu A thì B; ngược lại thì C'},
     {s:'……，反之亦然',m:'…, ngược lại cũng vậy'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nếu chăm chỉ học thì thành tích sẽ tiến bộ; ngược lại, thành tích sẽ ngày càng kém.',answer:'如果努力学习，成绩就会进步；反之，成绩就会越来越差。',answerPy:'Rúguǒ nǔlì xuéxí, chéngjì jiù huì jìnbù; fǎnzhī, chéngjì jiù huì yuè lái yuè chà.',
      note:'如果……就……；反之，…… (điểm ngữ pháp 2).',pair:'如果……就……'},
     {promptLang:'vi',prompt:'Người lạc quan dễ thấy cơ hội trong khó khăn; ngược lại, người bi quan chỉ thấy khó khăn trong cơ hội.',answer:'乐观的人容易在困难中看到机会，反之，悲观的人只能在机会中看到困难。',answerPy:'Lèguān de rén róngyì zài kùnnan zhōng kàndào jīhuì, fǎnzhī, bēiguān de rén zhǐ néng zài jīhuì zhōng kàndào kùnnan.',
      note:'在……中 = trong …; hai vế đối xứng nối bằng 反之.',pair:'在……中'}
   ]},

  {n:31,zh:'激素',py:'jīsù',pos:'Danh từ',vn:'hormone, kích tố',hv:'kích tố',em:'🧪',lesson:1,
   explain:['Hóc-môn (hormone): chất do tuyến nội tiết tiết ra, điều tiết hoạt động của cơ thể: 生长激素, 激素水平.','Trong bài: 痛苦激素 = "hormone đau khổ" — chất tiết ra khi u uất, khiến người uể oải; nước mắt giúp thải nó ra ngoài. (Từ ngoài đề cương — đánh dấu * trong sách.)'],
   usage:'分泌 + 激素; 激素 + 水平; 生长 / 痛苦 + 激素; 激素类药物.',
   collo:['分泌激素','痛苦激素','激素水平','生长激素'],
   ex_zh:'人在情绪抑郁时会分泌一种被称为痛苦激素的物质，它会让人情绪低落、无精打采。',ex_py:'Rén zài qíngxù yìyù shí huì fēnmì yì zhǒng bèi chēngwéi tòngkǔ jīsù de wùzhì, tā huì ràng rén qíngxù dīluò, wú jīng dǎ cǎi.',ex_vn:'Khi cảm xúc u uất, con người tiết ra một chất gọi là "hormone đau khổ", nó khiến người ta tâm trạng sa sút, uể oải rã rời.',
   exList:[
     {zh:'青春期孩子的情绪变化大，和体内激素水平的变化有很大关系。',py:'Qīngchūnqī háizi de qíngxù biànhuà dà, hé tǐ nèi jīsù shuǐpíng de biànhuà yǒu hěn dà guānxì.',vn:'Cảm xúc của trẻ tuổi dậy thì thay đổi nhiều, có liên quan lớn đến sự thay đổi nồng độ hormone trong cơ thể.'},
     {zh:'充足的睡眠有利于生长激素的分泌，所以孩子一定要早睡。',py:'Chōngzú de shuìmián yǒulì yú shēngzhǎng jīsù de fēnmì, suǒyǐ háizi yídìng yào zǎo shuì.',vn:'Ngủ đủ giấc có lợi cho việc tiết hormone tăng trưởng, nên trẻ con nhất định phải ngủ sớm. (充足 — bài 25; chủ đề bài 30)'},
     {zh:'这种药含有激素，不能长期服用，否则会有副作用。',py:'Zhè zhǒng yào hányǒu jīsù, bù néng chángqī fúyòng, fǒuzé huì yǒu fùzuòyòng.',vn:'Thuốc này có chứa hormone, không được dùng lâu dài, nếu không sẽ có tác dụng phụ.'}
   ],
   colloFull:[
     {zh:'分泌激素',py:'fēnmì jīsù',vn:'tiết hormone'},
     {zh:'痛苦激素',py:'tòngkǔ jīsù',vn:'"hormone đau khổ"'},
     {zh:'激素水平',py:'jīsù shuǐpíng',vn:'nồng độ hormone'},
     {zh:'生长激素',py:'shēngzhǎng jīsù',vn:'hormone tăng trưởng'},
     {zh:'激素类药物',py:'jīsù lèi yàowù',vn:'thuốc có hormone'}
   ],
   patterns:[
     {s:'分泌 + 一种……激素',m:'Tiết ra một loại hormone …'},
     {s:'和激素水平的变化有关',m:'Liên quan đến sự thay đổi nồng độ hormone'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Khi căng thẳng, cơ thể con người sẽ tiết ra một số hormone khiến tim đập nhanh hơn.',answer:'人在紧张的时候，身体会分泌一些激素，使心跳加快。',answerPy:'Rén zài jǐnzhāng de shíhou, shēntǐ huì fēnmì yìxiē jīsù, shǐ xīntiào jiākuài.',
      note:'使 + O + V/Adj: khiến … (văn viết).',pair:'使 + O + V'},
     {promptLang:'vi',prompt:'Nghe nói khóc có thể thải "hormone đau khổ" ra ngoài cơ thể, vì vậy khóc xong sẽ thấy nhẹ nhõm hơn nhiều.',answer:'据说哭泣可以把痛苦激素排出体外，所以哭完了会觉得轻松很多。',answerPy:'Jùshuō kūqì kěyǐ bǎ tòngkǔ jīsù páichū tǐ wài, suǒyǐ kūwánle huì juéde qīngsōng hěn duō.',
      note:'据说 = nghe nói; 把……排出体外 = thải … ra khỏi cơ thể.',pair:'据说……'}
   ]},

  {n:32,zh:'转移',py:'zhuǎnyí',pos:'Động từ',vn:'chuyển, thay đổi, dời đi',hv:'chuyển di',em:'🔀',lesson:1,
   explain:['Dời, chuyển từ chỗ này sang chỗ khác: 转移财产, 转移到安全的地方.','Chuyển hướng, thay đổi (sự chú ý, đề tài, mục tiêu, áp lực…): 转移注意力, 转移话题, 把压力转移掉. Y học: (ung thư) di căn.'],
   usage:'转移 + 注意力 / 话题 / 目标 / 压力 / 财产; 把……转移到……; 转移掉.',
   collo:['转移注意力','转移话题','把压力转移掉','转移到安全的地方'],
   ex_zh:'如果不能利用眼泪把情绪压力转移掉，则会影响身体健康。',ex_py:'Rúguǒ bù néng lìyòng yǎnlèi bǎ qíngxù yālì zhuǎnyí diào, zé huì yǐngxiǎng shēntǐ jiànkāng.',ex_vn:'Nếu không thể dùng nước mắt để chuyển đi áp lực cảm xúc thì sẽ ảnh hưởng đến sức khoẻ.',
   exList:[
     {zh:'一问到考试成绩，他就赶紧转移话题。',py:'Yí wèndào kǎoshì chéngjì, tā jiù gǎnjǐn zhuǎnyí huàtí.',vn:'Hễ hỏi đến điểm thi là cậu ấy vội lảng sang chuyện khác.'},
     {zh:'心情不好的时候，不妨去运动运动，转移一下注意力。',py:'Xīnqíng bù hǎo de shíhou, bùfáng qù yùndòng yùndòng, zhuǎnyí yíxià zhùyìlì.',vn:'Lúc tâm trạng không tốt, cứ thử đi vận động một chút để chuyển hướng sự chú ý. (不妨 — bài 12)'},
     {zh:'洪水来临之前，村民们已经被转移到了安全的地方。',py:'Hóngshuǐ láilín zhīqián, cūnmínmen yǐjīng bèi zhuǎnyí dàole ānquán de dìfang.',vn:'Trước khi lũ đến, dân làng đã được di dời đến nơi an toàn.'}
   ],
   colloFull:[
     {zh:'转移注意力',py:'zhuǎnyí zhùyìlì',vn:'chuyển hướng sự chú ý'},
     {zh:'转移话题',py:'zhuǎnyí huàtí',vn:'lảng sang chuyện khác'},
     {zh:'把压力转移掉',py:'bǎ yālì zhuǎnyí diào',vn:'chuyển đi áp lực'},
     {zh:'转移到安全的地方',py:'zhuǎnyí dào ānquán de dìfang',vn:'di dời đến nơi an toàn'},
     {zh:'转移目标',py:'zhuǎnyí mùbiāo',vn:'chuyển mục tiêu'}
   ],
   patterns:[
     {s:'把 + O + 转移到…… / 转移掉',m:'Chuyển O đến … / chuyển O đi'},
     {s:'转移一下注意力',m:'Chuyển hướng sự chú ý một chút'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Lần nào mẹ hỏi đến điểm số, em trai cũng tìm cách lảng sang chuyện khác.',answer:'每次妈妈问起分数，弟弟都会想办法转移话题。',answerPy:'Měi cì māma wènqǐ fēnshù, dìdi dōu huì xiǎng bànfǎ zhuǎnyí huàtí.',
      note:'每次……都……: lần nào … cũng ….',pair:'每次……都……'},
     {promptLang:'vi',prompt:'Chuyển áp lực sang người khác hoàn toàn không phải cách giải quyết vấn đề.',answer:'把压力转移给别人，并不是解决问题的办法。',answerPy:'Bǎ yālì zhuǎnyí gěi biérén, bìng bú shì jiějué wèntí de bànfǎ.',
      note:'把 + O + V + 给 + người; 并不是 nhấn phủ định.',pair:'把……V给……'}
   ]},

  {n:33,zh:'喉咙',py:'hóulóng',pos:'Danh từ',vn:'cổ họng',hv:'hầu lung',em:'🗣️',lesson:1,
   explain:['Cổ họng, họng: 喉咙痛, 喉咙发炎, 喉咙干.','Hay đi với 痛 / 疼 / 哑 (khản) / 发炎 (viêm); 清清喉咙 = hắng giọng. Trong bài: 喉咙直接通肺 — theo Đông y, họng thông thẳng với phổi.'],
   usage:'喉咙 + 痛 / 疼 / 哑 / 干 / 发炎; 清清喉咙; 喉咙里 + 觉得…….',
   collo:['喉咙痛','喉咙发炎','喉咙哑了','清清喉咙'],
   ex_zh:'当人难过、想哭的时候，喉咙里会觉得不舒服。',ex_py:'Dāng rén nánguò, xiǎng kū de shíhou, hóulóng li huì juéde bù shūfu.',ex_vn:'Khi con người buồn, muốn khóc, trong cổ họng sẽ thấy khó chịu.',
   exList:[
     {zh:'最近我的身体不太舒服，喉咙痛，还打喷嚏，流鼻涕。',py:'Zuìjìn wǒ de shēntǐ bú tài shūfu, hóulóng tòng, hái dǎ pēntì, liú bítì.',vn:'Gần đây người tôi không được khoẻ, đau họng, lại hắt hơi, chảy nước mũi. (练习3)'},
     {zh:'昨晚唱了三个小时的歌，今天喉咙都哑了。',py:'Zuówǎn chàngle sān ge xiǎoshí de gē, jīntiān hóulóng dōu yǎ le.',vn:'Tối qua hát ba tiếng liền, hôm nay khản cả giọng.'},
     {zh:'他清了清喉咙，开始向大家汇报工作。',py:'Tā qīngle qīng hóulóng, kāishǐ xiàng dàjiā huìbào gōngzuò.',vn:'Anh ấy hắng giọng một cái rồi bắt đầu báo cáo công việc với mọi người. (汇报 — bài 25)'}
   ],
   colloFull:[
     {zh:'喉咙痛',py:'hóulóng tòng',vn:'đau họng'},
     {zh:'喉咙发炎',py:'hóulóng fāyán',vn:'viêm họng'},
     {zh:'喉咙哑了',py:'hóulóng yǎ le',vn:'khản giọng'},
     {zh:'清清喉咙',py:'qīngqing hóulóng',vn:'hắng giọng'},
     {zh:'喉咙干',py:'hóulóng gān',vn:'khô họng'}
   ],
   patterns:[
     {s:'喉咙 + 痛 / 哑 / 发炎',m:'Họng đau / khản / viêm'},
     {s:'清了清喉咙',m:'Hắng giọng một cái'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Họng tôi đau dữ dội, ngay cả nước cũng không nuốt nổi.',answer:'我的喉咙疼得厉害，连水都咽不下去。',answerPy:'Wǒ de hóulóng téng de lìhai, lián shuǐ dōu yàn bu xiàqù.',
      note:'连……都……: ngay cả … cũng …; 咽不下去 = không nuốt xuống nổi.',pair:'连……都……'},
     {promptLang:'vi',prompt:'Em bị viêm họng rồi, nên uống nhiều nước ấm, bớt nói chuyện.',answer:'你喉咙发炎了，应该多喝温水，少说话。',answerPy:'Nǐ hóulóng fāyán le, yīnggāi duō hē wēnshuǐ, shǎo shuōhuà.',
      note:'多 + V……，少 + V……: … nhiều, … ít.',pair:'多……，少……'}
   ]},

  {n:34,zh:'鼻涕',py:'bítì',pos:'Danh từ',vn:'nước mũi',hv:'tị thế',em:'🤧',lesson:1,
   explain:['Nước mũi: 流鼻涕 (chảy nước mũi), 擤鼻涕 (xì mũi).','Khẩu ngữ 一把鼻涕一把泪 = khóc nước mắt nước mũi tèm lem (khóc rất thảm thiết).'],
   usage:'流 / 擤 + 鼻涕; 一把鼻涕一把泪; 鼻涕 + 眼泪.',
   collo:['流鼻涕','擤鼻涕','一把鼻涕一把泪','鼻涕眼泪'],
   ex_zh:'人哭起来常常会一把鼻涕一把泪，之所以会流鼻涕，也是肺受了刺激。',ex_py:'Rén kū qǐlái chángcháng huì yì bǎ bítì yì bǎ lèi, zhī suǒyǐ huì liú bítì, yě shì fèi shòule cìjī.',ex_vn:'Người ta khóc thường nước mắt nước mũi tèm lem; sở dĩ chảy nước mũi cũng là vì phổi bị kích thích.',
   exList:[
     {zh:'天一冷，我就容易感冒，整天流鼻涕。',py:'Tiān yì lěng, wǒ jiù róngyì gǎnmào, zhěngtiān liú bítì.',vn:'Trời hễ lạnh là tôi dễ bị cảm, suốt ngày chảy nước mũi.'},
     {zh:'她一把鼻涕一把泪地讲述了自己的遭遇，听的人都很同情她。',py:'Tā yì bǎ bítì yì bǎ lèi de jiǎngshùle zìjǐ de zāoyù, tīng de rén dōu hěn tóngqíng tā.',vn:'Cô ấy vừa khóc nước mắt nước mũi tèm lem vừa kể lại cảnh ngộ của mình, người nghe ai cũng thương cảm.'},
     {zh:'妈妈拿出纸巾，让孩子把鼻涕擤干净。',py:'Māma náchū zhǐjīn, ràng háizi bǎ bítì xǐng gānjìng.',vn:'Mẹ lấy khăn giấy ra, bảo con xì mũi cho sạch.'}
   ],
   colloFull:[
     {zh:'流鼻涕',py:'liú bítì',vn:'chảy nước mũi'},
     {zh:'擤鼻涕',py:'xǐng bítì',vn:'xì mũi'},
     {zh:'一把鼻涕一把泪',py:'yì bǎ bítì yì bǎ lèi',vn:'nước mắt nước mũi tèm lem'},
     {zh:'鼻涕眼泪',py:'bítì yǎnlèi',vn:'nước mũi nước mắt'},
     {zh:'鼻涕直流',py:'bítì zhí liú',vn:'nước mũi chảy ròng ròng'}
   ],
   patterns:[
     {s:'……一把鼻涕一把泪地 + V',m:'Vừa khóc lóc thảm thiết vừa …'},
     {s:'流鼻涕 / 擤鼻涕',m:'Chảy nước mũi / xì mũi'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Sở dĩ em bị chảy nước mũi là vì em bị cảm rồi.',answer:'你之所以流鼻涕，是因为感冒了。',answerPy:'Nǐ zhī suǒyǐ liú bítì, shì yīnwèi gǎnmào le.',
      note:'之所以……是因为……: sở dĩ … là vì ….',pair:'之所以……是因为……'},
     {promptLang:'vi',prompt:'Đứa bé khóc nước mắt nước mũi tèm lem, dỗ thế nào cũng không nín.',answer:'孩子哭得一把鼻涕一把泪，怎么哄也哄不好。',answerPy:'Háizi kū de yì bǎ bítì yì bǎ lèi, zěnme hǒng yě hǒng bu hǎo.',
      note:'怎么 + V + 也 + V不…: … thế nào cũng không ….',pair:'怎么……也……'}
   ]},

  {n:35,zh:'之际',py:'zhījì',pos:'Danh từ',vn:'vào lúc, nhân dịp',hv:'chi tế',em:'⏳',lesson:1,
   explain:['Văn viết, = "……的时候" — lúc, dịp, thời điểm: 伤心难过之际, 新年到来之际, 危难之际.','Đứng sau động từ / cụm từ / danh từ: V/N + 之际; hay dùng trong lời chúc, thông báo trang trọng: 值此……之际 (nhân dịp …).'],
   usage:'V / N + 之际; 值此 + ……之际; 在……之际; 危难 / 离别 / 毕业 + 之际.',
   collo:['伤心难过之际','值此……之际','危难之际','离别之际'],
   ex_zh:'伤心难过之际，不妨痛哭。',ex_py:'Shāngxīn nánguò zhījì, bùfáng tòngkū.',ex_vn:'Những lúc đau lòng buồn bã, cứ việc khóc thật to. (不妨 — bài 12)',
   exList:[
     {zh:'值此新春佳节之际，我代表公司向全体员工表示衷心的感谢。',py:'Zhí cǐ xīnchūn jiājié zhījì, wǒ dàibiǎo gōngsī xiàng quántǐ yuángōng biǎoshì zhōngxīn de gǎnxiè.',vn:'Nhân dịp xuân mới, tôi thay mặt công ty gửi lời cảm ơn chân thành tới toàn thể nhân viên.'},
     {zh:'在公司最危难之际，是他站出来带领大家渡过了难关。',py:'Zài gōngsī zuì wēinàn zhījì, shì tā zhàn chūlái dàilǐng dàjiā dùguòle nánguān.',vn:'Vào lúc công ty nguy nan nhất, chính anh ấy đã đứng ra dẫn dắt mọi người vượt qua khó khăn.'},
     {zh:'毕业离别之际，同学们互相写下了祝福的话。',py:'Bìyè líbié zhījì, tóngxuémen hùxiāng xiěxiàle zhùfú de huà.',vn:'Lúc chia tay tốt nghiệp, các bạn cùng lớp viết cho nhau những lời chúc.'}
   ],
   colloFull:[
     {zh:'伤心难过之际',py:'shāngxīn nánguò zhījì',vn:'lúc đau lòng buồn bã'},
     {zh:'值此……之际',py:'zhí cǐ …… zhījì',vn:'nhân dịp …'},
     {zh:'危难之际',py:'wēinàn zhījì',vn:'lúc nguy nan'},
     {zh:'离别之际',py:'líbié zhījì',vn:'lúc chia tay'},
     {zh:'新年到来之际',py:'xīnnián dàolái zhījì',vn:'nhân dịp năm mới đến'}
   ],
   patterns:[
     {s:'值此 + 节日 + 之际，……',m:'Nhân dịp … (lời chúc trang trọng)'},
     {s:'在 + ……之际',m:'Vào lúc …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nhân dịp Tết Trung thu, chúc mọi người sức khoẻ, gia đình hạnh phúc.',answer:'值此中秋佳节之际，祝大家身体健康，家庭幸福。',answerPy:'Zhí cǐ Zhōngqiū jiājié zhījì, zhù dàjiā shēntǐ jiànkāng, jiātíng xìngfú.',
      note:'值此……之际: nhân dịp … (mở đầu lời chúc trang trọng).',pair:'值此……之际'},
     {promptLang:'vi',prompt:'Đúng lúc chúng tôi sắp bỏ cuộc, anh ấy đã giúp chúng tôi một tay.',answer:'就在我们快要放弃之际，他帮了我们一把。',answerPy:'Jiù zài wǒmen kuàiyào fàngqì zhījì, tā bāngle wǒmen yì bǎ.',
      note:'快要……: sắp …; 就在……之际 = đúng vào lúc ….',pair:'快要……'}
   ]},

  {n:36,zh:'修复',py:'xiūfù',pos:'Động từ',vn:'sửa chữa, phục hồi lại',hv:'tu phục',em:'🔧',lesson:1,
   explain:['Sửa lại cho hoàn chỉnh như cũ (công trình, văn vật, hệ thống…): 修复古建筑, 修复文物, 修复漏洞.','Nghĩa mở rộng: phục hồi (cơ thể, quan hệ, sinh thái): 自我修复, 修复关系, 修复生态.'],
   usage:'修复 + 文物 / 古建筑 / 关系 / 生态 / 漏洞; 得到修复; 自我修复.',
   collo:['自我修复','修复关系','得到了修复','修复文物'],
   ex_zh:'哭完了，一切都得到了修复。',ex_py:'Kūwán le, yíqiè dōu dédàole xiūfù.',ex_vn:'Khóc xong rồi, mọi thứ đều được phục hồi.',
   exList:[
     {zh:'生病时要好好休息，让身体进行自我修复。',py:'Shēngbìng shí yào hǎohǎo xiūxi, ràng shēntǐ jìnxíng zìwǒ xiūfù.',vn:'Khi ốm phải nghỉ ngơi cho tốt, để cơ thể tự phục hồi. (练习3)'},
     {zh:'专家们花了整整五年，才把这幅古画修复好。',py:'Zhuānjiāmen huāle zhěngzhěng wǔ nián, cái bǎ zhè fú gǔhuà xiūfù hǎo.',vn:'Các chuyên gia mất tròn năm năm mới phục chế xong bức tranh cổ này.'},
     {zh:'两国领导人的这次会面，有助于修复双方的关系。',py:'Liǎng guó lǐngdǎorén de zhè cì huìmiàn, yǒuzhù yú xiūfù shuāngfāng de guānxì.',vn:'Cuộc gặp lần này giữa lãnh đạo hai nước giúp hàn gắn quan hệ đôi bên.'}
   ],
   colloFull:[
     {zh:'自我修复',py:'zìwǒ xiūfù',vn:'tự phục hồi'},
     {zh:'修复关系',py:'xiūfù guānxì',vn:'hàn gắn quan hệ'},
     {zh:'得到了修复',py:'dédàole xiūfù',vn:'đã được phục hồi'},
     {zh:'修复文物',py:'xiūfù wénwù',vn:'tu bổ văn vật'},
     {zh:'修复古建筑',py:'xiūfù gǔjiànzhù',vn:'trùng tu kiến trúc cổ'}
   ],
   patterns:[
     {s:'让 + …… + 进行自我修复',m:'Để … tự phục hồi'},
     {s:'把 + O + 修复好',m:'Phục hồi O xong xuôi'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần ngủ đủ giấc, cơ thể sẽ tự phục hồi.',answer:'只要睡眠充足，身体就会自我修复。',answerPy:'Zhǐyào shuìmián chōngzú, shēntǐ jiù huì zìwǒ xiūfù.',
      note:'只要……就……: chỉ cần … thì ….',pair:'只要……就……'},
     {promptLang:'vi',prompt:'Quan hệ giữa hai người họ phải rất lâu sau mới hàn gắn lại được.',answer:'他们俩的关系过了很久才修复过来。',answerPy:'Tāmen liǎ de guānxì guòle hěn jiǔ cái xiūfù guòlái.',
      note:'……才……: mãi … mới … (muộn, khó); V + 过来 = trở lại trạng thái bình thường.',pair:'……才……'}
   ]},

  {n:37,zh:'宣泄',py:'xuānxiè',pos:'Động từ',vn:'thổ lộ, giải toả, trút ra',hv:'tuyên tiết',em:'🌋',lesson:1,
   explain:['Trút ra, giải toả (cảm xúc dồn nén: buồn bực, giận dữ, áp lực): 宣泄情绪, 宣泄不满, 需要宣泄.','Văn viết; gần nghĩa 发泄 (khẩu ngữ hơn, hay mang ý trút giận lên người khác) — xem 词语辨析. Trong bài: 宣泄归宣泄 (A归A — bài 18) = giải toả thì giải toả, nhưng …. (Từ ngoài đề cương — dấu *.)'],
   usage:'宣泄 + 情绪 / 不满 / 压力 / 感情; 得到宣泄; 宣泄的 + 方式 / 渠道.',
   collo:['宣泄情绪','宣泄不满','得到宣泄','宣泄的方式'],
   ex_zh:'不过，宣泄归宣泄，宣泄时忌讳哭泣时间过长，一般不要超过15分钟。',ex_py:'Búguò, xuānxiè guī xuānxiè, xuānxiè shí jìhuì kūqì shíjiān guò cháng, yìbān bú yào chāoguò shíwǔ fēnzhōng.',ex_vn:'Tuy nhiên, giải toả thì giải toả, khi giải toả kiêng khóc quá lâu, thường không nên quá 15 phút.',
   exList:[
     {zh:'因此，不发给男人宣泄情绪的许可证不是正道。',py:'Yīncǐ, bù fā gěi nánrén xuānxiè qíngxù de xǔkězhèng bú shì zhèngdào.',vn:'Vì vậy, không cấp cho đàn ông "giấy phép" giải toả cảm xúc là không đúng đắn.'},
     {zh:'唱歌、跑步、写日记，都是宣泄压力的好方式。',py:'Chàng gē, pǎobù, xiě rìjì, dōu shì xuānxiè yālì de hǎo fāngshì.',vn:'Hát, chạy bộ, viết nhật ký đều là những cách hay để giải toả áp lực.'},
     {zh:'球迷们在球场上大喊大叫，把心中的不满宣泄了出来。',py:'Qiúmímen zài qiúchǎng shang dà hǎn dà jiào, bǎ xīnzhōng de bùmǎn xuānxièle chūlái.',vn:'Các cổ động viên la hét ầm ĩ trên sân, trút hết sự bất mãn trong lòng ra.'}
   ],
   colloFull:[
     {zh:'宣泄情绪',py:'xuānxiè qíngxù',vn:'giải toả cảm xúc'},
     {zh:'宣泄不满',py:'xuānxiè bùmǎn',vn:'trút sự bất mãn'},
     {zh:'得到宣泄',py:'dédào xuānxiè',vn:'được giải toả'},
     {zh:'宣泄的方式',py:'xuānxiè de fāngshì',vn:'cách giải toả'},
     {zh:'宣泄压力',py:'xuānxiè yālì',vn:'giải toả áp lực'}
   ],
   patterns:[
     {s:'把 + 情绪 / 不满 + 宣泄出来',m:'Trút cảm xúc / bất mãn ra ngoài'},
     {s:'宣泄归宣泄，……',m:'Giải toả thì giải toả, nhưng … (A归A — bài 18)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Giải toả thì giải toả, nhưng không được trút giận lên người nhà.',answer:'宣泄归宣泄，可不能把气撒到家人身上。',answerPy:'Xuānxiè guī xuānxiè, kě bù néng bǎ qì sǎ dào jiārén shēnshang.',
      note:'A归A: … thì …, nhưng … (bài 18); 撒气 = trút giận.',pair:'A归A'},
     {promptLang:'vi',prompt:'Cảm xúc dồn nén lâu ngày nếu không được giải toả thì sẽ ảnh hưởng đến sức khoẻ.',answer:'长期压抑的情绪如果得不到宣泄，就会影响健康。',answerPy:'Chángqī yāyì de qíngxù rúguǒ dé bu dào xuānxiè, jiù huì yǐngxiǎng jiànkāng.',
      note:'如果……就……; 得不到 = không có được.',pair:'如果……就……'}
   ]},

  {n:38,zh:'许可',py:'xǔkě',pos:'Động từ',vn:'cho phép',hv:'hứa khả',em:'✅',lesson:1,
   explain:['Cho phép, chấp thuận (thường của cơ quan, người có thẩm quyền): 得到许可, 未经许可, 许可证.','KHÔNG mang tân ngữ (không nói 他许可我拍照), có thể bổ nghĩa cho danh từ (许可证) — xem 词语辨析 许可 — 允许.'],
   usage:'得到 / 获得 + 许可; 未经许可; 许可证; ……的许可.',
   collo:['得到许可','未经许可','许可证','经过许可'],
   ex_zh:'因此，不发给男人宣泄情绪的许可证不是正道，男人也有流泪的权利。',ex_py:'Yīncǐ, bù fā gěi nánrén xuānxiè qíngxù de xǔkězhèng bú shì zhèngdào, nánrén yě yǒu liú lèi de quánlì.',ex_vn:'Vì vậy, không cấp cho đàn ông "giấy phép" giải toả cảm xúc là không đúng đắn; đàn ông cũng có quyền rơi lệ.',
   exList:[
     {zh:'私人物品，未经许可，不得动用。',py:'Sīrén wùpǐn, wèi jīng xǔkě, bùdé dòngyòng.',vn:'Đồ dùng cá nhân, chưa được phép thì không được sử dụng. (做一做)'},
     {zh:'我在这儿拍照得到了他的许可。',py:'Wǒ zài zhèr pāizhào dédàole tā de xǔkě.',vn:'Tôi chụp ảnh ở đây đã được anh ấy cho phép.'},
     {zh:'开饭馆必须先办理卫生许可证。',py:'Kāi fànguǎn bìxū xiān bànlǐ wèishēng xǔkězhèng.',vn:'Mở quán ăn phải làm giấy phép vệ sinh trước.'}
   ],
   colloFull:[
     {zh:'得到许可',py:'dédào xǔkě',vn:'được cho phép'},
     {zh:'未经许可',py:'wèi jīng xǔkě',vn:'chưa được phép'},
     {zh:'许可证',py:'xǔkězhèng',vn:'giấy phép'},
     {zh:'经过许可',py:'jīngguò xǔkě',vn:'qua sự cho phép'},
     {zh:'营业许可证',py:'yíngyè xǔkězhèng',vn:'giấy phép kinh doanh'}
   ],
   patterns:[
     {s:'未经许可，不得……',m:'Chưa được phép thì không được …'},
     {s:'得到 + 人 + 的许可',m:'Được ai cho phép'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chưa được phép, bất kỳ ai cũng không được vào phòng thí nghiệm.',answer:'未经许可，任何人都不得进入实验室。',answerPy:'Wèi jīng xǔkě, rènhé rén dōu bùdé jìnrù shíyànshì.',
      note:'任何……都……: bất kỳ … nào cũng …; 不得 = không được (văn bản quy định).',pair:'任何……都……'},
     {promptLang:'vi',prompt:'Chỉ khi được bố mẹ cho phép, em mới có thể tham gia chuyến đi lần này.',answer:'只有得到了父母的许可，你才能参加这次旅行。',answerPy:'Zhǐyǒu dédàole fùmǔ de xǔkě, nǐ cái néng cānjiā zhè cì lǚxíng.',
      note:'只有……才……; 许可 làm tân ngữ của 得到.',pair:'只有……才……'}
   ]},

  {n:39,zh:'倡导',py:'chàngdǎo',pos:'Động từ',vn:'khởi xướng, chủ trương',hv:'xướng đạo',em:'📣',lesson:1,
   explain:['Khởi xướng, đề xướng và kêu gọi mọi người làm theo (một quan niệm, lối sống, phong trào): 倡导绿色生活, 倡导节约.','Văn viết, trang trọng; chủ thể thường là nhà nước, tổ chức, chuyên gia; 倡导者 = người khởi xướng. Gần nghĩa 提倡.'],
   usage:'倡导 + 新风尚 / 绿色出行 / 节约 / 理念; 倡导者; 在……的倡导下.',
   collo:['倡导绿色出行','倡导者','在……的倡导下','积极倡导'],
   ex_zh:'我们倡导要给男人释放情绪的空间，男人流泪本在情理之中。',ex_py:'Wǒmen chàngdǎo yào gěi nánrén shìfàng qíngxù de kōngjiān, nánrén liú lèi běn zài qínglǐ zhī zhōng.',ex_vn:'Chúng tôi chủ trương phải cho đàn ông không gian để giải toả cảm xúc; đàn ông rơi lệ vốn là điều hợp tình hợp lý.',
   exList:[
     {zh:'政府大力倡导绿色出行，鼓励市民多坐公交车、骑自行车。',py:'Zhèngfǔ dàlì chàngdǎo lǜsè chūxíng, gǔlì shìmín duō zuò gōngjiāochē, qí zìxíngchē.',vn:'Chính phủ ra sức khuyến khích đi lại xanh, động viên người dân đi xe buýt, đi xe đạp nhiều hơn.'},
     {zh:'在学校的倡导下，越来越多的学生参加了志愿者活动。',py:'Zài xuéxiào de chàngdǎo xià, yuè lái yuè duō de xuésheng cānjiāle zhìyuànzhě huódòng.',vn:'Dưới sự khởi xướng của nhà trường, ngày càng nhiều học sinh tham gia hoạt động tình nguyện.'},
     {zh:'他是这种教育理念最早的倡导者之一。',py:'Tā shì zhè zhǒng jiàoyù lǐniàn zuì zǎo de chàngdǎozhě zhī yī.',vn:'Ông ấy là một trong những người khởi xướng sớm nhất của triết lý giáo dục này.'}
   ],
   colloFull:[
     {zh:'倡导绿色出行',py:'chàngdǎo lǜsè chūxíng',vn:'khuyến khích đi lại xanh'},
     {zh:'倡导者',py:'chàngdǎozhě',vn:'người khởi xướng'},
     {zh:'在……的倡导下',py:'zài …… de chàngdǎo xià',vn:'dưới sự khởi xướng của …'},
     {zh:'积极倡导',py:'jījí chàngdǎo',vn:'tích cực đề xướng'},
     {zh:'倡导节约',py:'chàngdǎo jiéyuē',vn:'kêu gọi tiết kiệm'}
   ],
   patterns:[
     {s:'倡导 + 人们 + V……',m:'Kêu gọi mọi người …'},
     {s:'在……的倡导下，……',m:'Dưới sự khởi xướng của …, …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nhà trường kêu gọi học sinh bớt chơi điện thoại, đọc sách nhiều hơn.',answer:'学校倡导学生少玩手机，多读书。',answerPy:'Xuéxiào chàngdǎo xuésheng shǎo wán shǒujī, duō dú shū.',
      note:'少……，多……: bớt …, nhiều … hơn.',pair:'少……，多……'},
     {promptLang:'vi',prompt:'Dưới sự khởi xướng của anh ấy, cả văn phòng đều bắt đầu tập thể dục mỗi ngày.',answer:'在他的倡导下，全办公室的人都开始每天锻炼身体了。',answerPy:'Zài tā de chàngdǎo xià, quán bàngōngshì de rén dōu kāishǐ měi tiān duànliàn shēntǐ le.',
      note:'在……下: dưới (sự …) của ….',pair:'在……下'}
   ]},


  {n:40,zh:'情理',py:'qínglǐ',pos:'Danh từ',vn:'lý, lẽ phải, lẽ thường',hv:'tình lý',em:'⚖️',lesson:1,
   explain:['Lẽ thường của con người và đạo lý chung của sự việc (人的常情和事情的一般道理): 合乎情理, 不近情理.','Cụm cố định: 在情理之中 (hợp tình hợp lý, dễ hiểu), 出乎情理之外 (ngoài lẽ thường), 通情达理 (hiểu lẽ phải, biết điều).'],
   usage:'合乎 / 不合 + 情理; 在情理之中; 不近情理; 通情达理.',
   collo:['在情理之中','合乎情理','不近情理','通情达理'],
   ex_zh:'我们倡导要给男人释放情绪的空间，男人流泪本在情理之中。',ex_py:'Wǒmen chàngdǎo yào gěi nánrén shìfàng qíngxù de kōngjiān, nánrén liú lèi běn zài qínglǐ zhī zhōng.',ex_vn:'Chúng tôi chủ trương phải cho đàn ông không gian để giải toả cảm xúc; đàn ông rơi lệ vốn là điều hợp tình hợp lý.',
   exList:[
     {zh:'他这样做完全合乎情理，你就别再怪他了。',py:'Tā zhèyàng zuò wánquán héhū qínglǐ, nǐ jiù bié zài guài tā le.',vn:'Anh ấy làm vậy hoàn toàn hợp lẽ, em đừng trách anh ấy nữa.'},
     {zh:'孩子第一次离开家，想家也在情理之中。',py:'Háizi dì-yī cì líkāi jiā, xiǎng jiā yě zài qínglǐ zhī zhōng.',vn:'Con lần đầu xa nhà, nhớ nhà cũng là điều dễ hiểu.'},
     {zh:'让一个刚来的新人承担全部责任，未免太不近情理了。',py:'Ràng yí ge gāng lái de xīnrén chéngdān quánbù zérèn, wèimiǎn tài bú jìn qínglǐ le.',vn:'Bắt một người mới đến gánh toàn bộ trách nhiệm thì thật quá trái lẽ thường. (未免 — bài 4)'}
   ],
   colloFull:[
     {zh:'在情理之中',py:'zài qínglǐ zhī zhōng',vn:'hợp tình hợp lý, dễ hiểu'},
     {zh:'合乎情理',py:'héhū qínglǐ',vn:'hợp lẽ'},
     {zh:'不近情理',py:'bú jìn qínglǐ',vn:'trái lẽ thường'},
     {zh:'通情达理',py:'tōngqíng-dálǐ',vn:'hiểu lẽ phải, biết điều'},
     {zh:'不合情理',py:'bù hé qínglǐ',vn:'không hợp lẽ'}
   ],
   patterns:[
     {s:'……（本）在情理之中',m:'… (vốn) là điều hợp tình hợp lý'},
     {s:'……未免太不近情理了',m:'… thật quá trái lẽ thường'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Anh ấy tức giận cũng là điều dễ hiểu, dù sao cũng là lỗi của chúng ta.',answer:'他生气也在情理之中，毕竟是我们的错。',answerPy:'Tā shēngqì yě zài qínglǐ zhī zhōng, bìjìng shì wǒmen de cuò.',
      note:'毕竟 = dù sao, suy cho cùng (HSK 5).',pair:'毕竟'},
     {promptLang:'vi',prompt:'Bà nội là người rất hiểu lẽ phải, chưa bao giờ làm khó con cháu.',answer:'奶奶是个很通情达理的人，从来不为难儿女。',answerPy:'Nǎinai shì ge hěn tōngqíng-dálǐ de rén, cónglái bù wéinán érnǚ.',
      note:'从来不 + V: chưa bao giờ …; 为难 = làm khó (bài 25).',pair:'从来不……'}
   ]},

  {n:41,zh:'忌讳',py:'jìhuì',pos:'Động từ',vn:'kiêng kị, kiêng cữ',hv:'kỵ huý',em:'🙅',lesson:1,
   explain:['Kiêng kỵ (lời nói, hành động bị coi là không may theo phong tục): 忌讳说“死”字, 忌讳送钟.','Tránh, cần tránh (điều bất lợi): 最忌讳过于劳累, 学习最忌讳三天打鱼两天晒网. Làm danh từ: điều kiêng kỵ (犯忌讳).'],
   usage:'忌讳 + V / N; 最忌讳……; 犯忌讳; 没什么忌讳.',
   collo:['最忌讳','犯忌讳','忌讳说','没什么忌讳'],
   ex_zh:'不过，宣泄归宣泄，宣泄时忌讳哭泣时间过长，一般不要超过15分钟。',ex_py:'Búguò, xuānxiè guī xuānxiè, xuānxiè shí jìhuì kūqì shíjiān guò cháng, yìbān bú yào chāoguò shíwǔ fēnzhōng.',ex_vn:'Tuy nhiên, giải toả thì giải toả, khi giải toả kiêng khóc quá lâu, thường không nên quá 15 phút.',
   exList:[
     {zh:'在中国，送礼时一般忌讳送钟，因为“送钟”听起来像“送终”。',py:'Zài Zhōngguó, sònglǐ shí yìbān jìhuì sòng zhōng, yīnwèi “sòng zhōng” tīng qǐlái xiàng “sòngzhōng”.',vn:'Ở Trung Quốc, khi tặng quà thường kiêng tặng đồng hồ, vì "tặng đồng hồ" nghe giống "tiễn người lúc lâm chung".'},
     {zh:'学外语最忌讳三天打鱼，两天晒网。',py:'Xué wàiyǔ zuì jìhuì sān tiān dǎ yú, liǎng tiān shài wǎng.',vn:'Học ngoại ngữ kiêng nhất là "ba ngày đánh cá, hai ngày phơi lưới" (làm việc thất thường).'},
     {zh:'生病时身体很脆弱，也最忌讳过于劳累。',py:'Shēngbìng shí shēntǐ hěn cuìruò, yě zuì jìhuì guòyú láolèi.',vn:'Khi ốm cơ thể rất yếu, cũng kiêng kỵ nhất là làm việc quá sức. (练习3)'}
   ],
   colloFull:[
     {zh:'最忌讳',py:'zuì jìhuì',vn:'kiêng nhất, tối kỵ'},
     {zh:'犯忌讳',py:'fàn jìhuì',vn:'phạm điều kiêng kỵ'},
     {zh:'忌讳说',py:'jìhuì shuō',vn:'kiêng nói'},
     {zh:'没什么忌讳',py:'méi shénme jìhuì',vn:'chẳng kiêng kỵ gì'},
     {zh:'忌讳送钟',py:'jìhuì sòng zhōng',vn:'kiêng tặng đồng hồ'}
   ],
   patterns:[
     {s:'……最忌讳 + V……',m:'… kiêng nhất là …'},
     {s:'在……，忌讳 + V',m:'Ở …, kiêng …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Làm việc kiêng nhất là nóng vội, phải tiến dần từng bước.',answer:'做事最忌讳急于求成，要循序渐进。',answerPy:'Zuòshì zuì jìhuì jíyú qiú chéng, yào xúnxù-jiànjìn.',
      note:'Ôn 急于求成 / 循序渐进 (bài 31).',pair:'最忌讳……，要……'},
     {promptLang:'vi',prompt:'Ông bà tôi rất kiêng nói những lời không may vào dịp Tết.',answer:'我爷爷奶奶过年的时候特别忌讳说不吉利的话。',answerPy:'Wǒ yéye nǎinai guònián de shíhou tèbié jìhuì shuō bù jílì de huà.',
      note:'……的时候: khi …; 不吉利 = không may mắn.',pair:'……的时候'}
   ]},

  {n:42,zh:'外界',py:'wàijiè',pos:'Danh từ',vn:'thế giới bên ngoài, bên ngoài',hv:'ngoại giới',em:'🌐',lesson:1,
   explain:['Thế giới, môi trường bên ngoài (một vật, một người, một tập thể): 外界环境, 与外界隔绝.','Hay chỉ "người ngoài, dư luận": 外界的评价, 外界的看法, 外界的鄙视.'],
   usage:'外界 + 的 + 看法 / 评价 / 压力 / 干扰; 与外界 + 联系 / 隔绝; 受外界影响.',
   collo:['外界的看法','外界的压力','与外界隔绝','受外界影响'],
   ex_zh:'释放情绪除了哭泣，还应在想法上做调整：扔掉外界对男人流泪的鄙视。',ex_py:'Shìfàng qíngxù chúle kūqì, hái yīng zài xiǎngfǎ shang zuò tiáozhěng: rēngdiào wàijiè duì nánrén liú lèi de bǐshì.',ex_vn:'Giải toả cảm xúc, ngoài khóc ra còn nên điều chỉnh suy nghĩ: vứt bỏ sự coi thường của bên ngoài đối với việc đàn ông rơi lệ.',
   exList:[
     {zh:'做自己喜欢的事，不必太在意外界的看法。',py:'Zuò zìjǐ xǐhuan de shì, búbì tài zàiyì wàijiè de kànfǎ.',vn:'Làm việc mình thích, không cần quá để tâm đến cách nhìn của người ngoài.'},
     {zh:'那个小山村交通不便，几乎与外界隔绝。',py:'Nàge xiǎo shāncūn jiāotōng búbiàn, jīhū yǔ wàijiè géjué.',vn:'Ngôi làng nhỏ trên núi ấy giao thông bất tiện, gần như cách biệt với bên ngoài.'},
     {zh:'孩子的性格很容易受外界环境的影响。',py:'Háizi de xìnggé hěn róngyì shòu wàijiè huánjìng de yǐngxiǎng.',vn:'Tính cách trẻ con rất dễ chịu ảnh hưởng của môi trường bên ngoài.'}
   ],
   colloFull:[
     {zh:'外界的看法',py:'wàijiè de kànfǎ',vn:'cách nhìn của người ngoài'},
     {zh:'外界的压力',py:'wàijiè de yālì',vn:'áp lực bên ngoài'},
     {zh:'与外界隔绝',py:'yǔ wàijiè géjué',vn:'cách biệt với bên ngoài'},
     {zh:'受外界影响',py:'shòu wàijiè yǐngxiǎng',vn:'chịu ảnh hưởng bên ngoài'},
     {zh:'外界环境',py:'wàijiè huánjìng',vn:'môi trường bên ngoài'}
   ],
   patterns:[
     {s:'不必（太）在意外界的 + 看法 / 评价',m:'Không cần để tâm đến cách nhìn của người ngoài'},
     {s:'与外界 + 隔绝 / 联系',m:'Cách biệt / liên lạc với bên ngoài'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bất kể bên ngoài đánh giá thế nào, cô ấy vẫn kiên trì đi con đường của mình.',answer:'不管外界怎么评价，她都坚持走自己的路。',answerPy:'Bùguǎn wàijiè zěnme píngjià, tā dōu jiānchí zǒu zìjǐ de lù.',
      note:'不管……都……: bất kể … vẫn ….',pair:'不管……都……'},
     {promptLang:'vi',prompt:'Trong thời gian thi, cậu ấy tắt điện thoại, gần như cắt đứt liên lạc với bên ngoài.',answer:'考试期间，他关掉了手机，几乎断绝了与外界的联系。',answerPy:'Kǎoshì qījiān, tā guāndiàole shǒujī, jīhū duànjuéle yǔ wàijiè de liánxì.',
      note:'……期间: trong thời gian …; 与外界的联系 = liên lạc với bên ngoài.',pair:'……期间'}
   ]},

  {n:43,zh:'狭隘',py:'xiá\'ài',pos:'Tính từ',vn:'hẹp hòi, hạn hẹp',hv:'hiệp ải',em:'🔒',lesson:1,
   explain:['Nghĩa gốc: (đường, không gian) chật hẹp.','Nghĩa thường dùng: (lòng dạ, tầm nhìn, quan niệm) hẹp hòi, thiển cận: 心胸狭隘, 狭隘的观念, 狭隘的偏见. Trái nghĩa 开阔 / 宽广.'],
   usage:'心胸 / 眼光 / 观念 + 狭隘; 狭隘的 + 偏见 / 观念 / 看法.',
   collo:['狭隘的偏见','心胸狭隘','眼光狭隘','狭隘的观念'],
   ex_zh:'扔掉外界对男人流泪的鄙视，因为这种鄙视只是一种狭隘的偏见。',ex_py:'Rēngdiào wàijiè duì nánrén liú lèi de bǐshì, yīnwèi zhè zhǒng bǐshì zhǐ shì yì zhǒng xiá\'ài de piānjiàn.',ex_vn:'Hãy vứt bỏ sự coi thường của bên ngoài đối với việc đàn ông rơi lệ, vì sự coi thường ấy chỉ là một định kiến hẹp hòi.',
   exList:[
     {zh:'他心胸狭隘，别人比他强一点儿他就不高兴。',py:'Tā xīnxiōng xiá\'ài, biérén bǐ tā qiáng yìdiǎnr tā jiù bù gāoxìng.',vn:'Anh ta lòng dạ hẹp hòi, người khác hơn mình một chút là không vui.'},
     {zh:'只看眼前利益的做法，未免太狭隘了。',py:'Zhǐ kàn yǎnqián lìyì de zuòfǎ, wèimiǎn tài xiá\'ài le.',vn:'Cách làm chỉ nhìn lợi ích trước mắt thì thật quá thiển cận. (未免 — bài 4)'},
     {zh:'多读书、多旅行，可以让人摆脱狭隘的观念。',py:'Duō dú shū, duō lǚxíng, kěyǐ ràng rén bǎituō xiá\'ài de guānniàn.',vn:'Đọc nhiều sách, đi nhiều nơi giúp con người thoát khỏi những quan niệm hạn hẹp.'}
   ],
   colloFull:[
     {zh:'狭隘的偏见',py:'xiá\'ài de piānjiàn',vn:'định kiến hẹp hòi'},
     {zh:'心胸狭隘',py:'xīnxiōng xiá\'ài',vn:'lòng dạ hẹp hòi'},
     {zh:'眼光狭隘',py:'yǎnguāng xiá\'ài',vn:'tầm nhìn hạn hẹp'},
     {zh:'狭隘的观念',py:'xiá\'ài de guānniàn',vn:'quan niệm thiển cận'},
     {zh:'狭隘的小路',py:'xiá\'ài de xiǎolù',vn:'con đường chật hẹp'}
   ],
   patterns:[
     {s:'心胸 / 眼光 + 狭隘',m:'Lòng dạ / tầm nhìn hẹp hòi'},
     {s:'……只是一种狭隘的偏见',m:'… chỉ là một định kiến hẹp hòi'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Người lòng dạ hẹp hòi thường vì người khác thành công mà không vui.',answer:'心胸狭隘的人往往会因为别人的成功而不高兴。',answerPy:'Xīnxiōng xiá\'ài de rén wǎngwǎng huì yīnwèi biérén de chénggōng ér bù gāoxìng.',
      note:'因为……而……: vì … mà ….',pair:'因为……而……'},
     {promptLang:'vi',prompt:'Cho rằng con gái không học giỏi được môn Toán là một định kiến hẹp hòi.',answer:'认为女孩子学不好数学，是一种狭隘的偏见。',answerPy:'Rènwéi nǚháizi xué bu hǎo shùxué, shì yì zhǒng xiá\'ài de piānjiàn.',
      note:'V + 不好: không … tốt được (bổ ngữ khả năng).',pair:'V + 不好'}
   ]},

  {n:44,zh:'偏见',py:'piānjiàn',pos:'Danh từ',vn:'thành kiến, định kiến',hv:'thiên kiến',em:'🙈',lesson:1,
   explain:['Cách nhìn thiên lệch, không công bằng, có sẵn từ trước: 对……有偏见, 消除偏见.','Hay đi với 狭隘, 根深蒂固 (bài 21), 抱有, 消除, 放下, 打破.'],
   usage:'对……有 / 抱有 + 偏见; 消除 / 打破 / 放下 + 偏见; 狭隘的 / 根深蒂固的 + 偏见; 带着偏见 + V.',
   collo:['对……有偏见','消除偏见','狭隘的偏见','根深蒂固的偏见'],
   ex_zh:'扔掉外界对男人流泪的鄙视，因为这种鄙视只是一种狭隘的偏见。',ex_py:'Rēngdiào wàijiè duì nánrén liú lèi de bǐshì, yīnwèi zhè zhǒng bǐshì zhǐ shì yì zhǒng xiá\'ài de piānjiàn.',ex_vn:'Hãy vứt bỏ sự coi thường của bên ngoài đối với việc đàn ông rơi lệ, vì sự coi thường ấy chỉ là một định kiến hẹp hòi.',
   exList:[
     {zh:'你不能因为他穿得不好，就对他有偏见。',py:'Nǐ bù néng yīnwèi tā chuān de bù hǎo, jiù duì tā yǒu piānjiàn.',vn:'Em không thể vì anh ấy ăn mặc không đẹp mà có thành kiến với anh ấy.'},
     {zh:'要消除人们头脑中根深蒂固的偏见，并不是一件容易的事。',py:'Yào xiāochú rénmen tóunǎo zhōng gēnshēn-dìgù de piānjiàn, bìng bú shì yí jiàn róngyì de shì.',vn:'Muốn xoá bỏ những định kiến ăn sâu bén rễ trong đầu mọi người hoàn toàn không phải chuyện dễ. (根深蒂固 — bài 21)'},
     {zh:'只有放下偏见，才能真正了解一个人。',py:'Zhǐyǒu fàngxià piānjiàn, cái néng zhēnzhèng liǎojiě yí ge rén.',vn:'Chỉ khi gác bỏ thành kiến mới có thể thật sự hiểu một con người.'}
   ],
   colloFull:[
     {zh:'对……有偏见',py:'duì …… yǒu piānjiàn',vn:'có thành kiến với …'},
     {zh:'消除偏见',py:'xiāochú piānjiàn',vn:'xoá bỏ thành kiến'},
     {zh:'狭隘的偏见',py:'xiá\'ài de piānjiàn',vn:'định kiến hẹp hòi'},
     {zh:'根深蒂固的偏见',py:'gēnshēn-dìgù de piānjiàn',vn:'định kiến ăn sâu bén rễ'},
     {zh:'放下偏见',py:'fàngxià piānjiàn',vn:'gác bỏ thành kiến'}
   ],
   patterns:[
     {s:'对 + 人 / 事 + 有偏见',m:'Có thành kiến với …'},
     {s:'消除 / 放下 + 偏见',m:'Xoá bỏ / gác bỏ thành kiến'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy mọi người có thành kiến với anh ấy, nhưng anh ấy đã dùng hành động để chứng minh bản thân.',answer:'虽然大家对他有偏见，但他用行动证明了自己。',answerPy:'Suīrán dàjiā duì tā yǒu piānjiàn, dàn tā yòng xíngdòng zhèngmíngle zìjǐ.',
      note:'虽然……但……; 用行动证明 = dùng hành động chứng minh.',pair:'虽然……但……'},
     {promptLang:'vi',prompt:'Chúng ta không nên nhìn người bằng con mắt thành kiến.',answer:'我们不应该带着偏见看人。',answerPy:'Wǒmen bù yīnggāi dàizhe piānjiàn kàn rén.',
      note:'V1着 + V2: làm V2 trong trạng thái V1 (带着偏见看人).',pair:'V着 + V'}
   ]},

  {n:45,zh:'阻挠',py:'zǔnáo',pos:'Động từ',vn:'cản trở, ngăn cản',hv:'trở nạo',em:'🚧',lesson:1,
   explain:['Cố ý ngăn cản, gây khó dễ để việc gì không thực hiện được: 阻挠计划, 百般阻挠.','Sắc thái xấu, nhấn CHỦ Ý cố tình quấy phá; khác 阻碍 (bài 22 — cản trở, thường là khách quan) và 阻止 (ngăn không cho làm).'],
   usage:'阻挠 + 计划 / 合作 / 婚事 / 调查; 百般阻挠; 受到……的阻挠; 进行阻挠.',
   collo:['百般阻挠','进行阻挠','受到阻挠','阻挠调查'],
   ex_zh:'不要阻挠男人流泪，男人流泪不等于软弱无用，也并不丧失尊严。',ex_py:'Bú yào zǔnáo nánrén liú lèi, nánrén liú lèi bù děngyú ruǎnruò wúyòng, yě bìng bú sàngshī zūnyán.',ex_vn:'Đừng ngăn cản đàn ông rơi lệ; đàn ông rơi lệ không có nghĩa là yếu đuối vô dụng, cũng chẳng hề đánh mất phẩm giá.',
   exList:[
     {zh:'为了不让那两家公司成功合作，他想尽办法进行阻挠。',py:'Wèile bú ràng nà liǎng jiā gōngsī chénggōng hézuò, tā xiǎngjìn bànfǎ jìnxíng zǔnáo.',vn:'Để hai công ty kia không hợp tác thành công, hắn tìm mọi cách ngăn cản. (练习2)'},
     {zh:'尽管家里人百般阻挠，她还是坚持嫁给了自己爱的人。',py:'Jǐnguǎn jiā li rén bǎibān zǔnáo, tā háishi jiānchí jià gěile zìjǐ ài de rén.',vn:'Dù người nhà ra sức ngăn cản, cô ấy vẫn kiên quyết lấy người mình yêu.'},
     {zh:'任何人都不得阻挠警方的调查。',py:'Rènhé rén dōu bùdé zǔnáo jǐngfāng de diàochá.',vn:'Bất kỳ ai cũng không được cản trở cuộc điều tra của cảnh sát.'}
   ],
   colloFull:[
     {zh:'百般阻挠',py:'bǎibān zǔnáo',vn:'ra sức cản trở'},
     {zh:'进行阻挠',py:'jìnxíng zǔnáo',vn:'tiến hành ngăn cản'},
     {zh:'受到阻挠',py:'shòudào zǔnáo',vn:'bị cản trở'},
     {zh:'阻挠调查',py:'zǔnáo diàochá',vn:'cản trở điều tra'},
     {zh:'阻挠合作',py:'zǔnáo hézuò',vn:'ngăn cản hợp tác'}
   ],
   patterns:[
     {s:'想尽办法 + 进行阻挠',m:'Tìm mọi cách ngăn cản'},
     {s:'尽管……百般阻挠，……还是……',m:'Dù … ra sức cản trở, … vẫn …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Dù gặp đủ mọi sự cản trở, dự án này cuối cùng vẫn hoàn thành đúng hạn.',answer:'尽管受到了种种阻挠，这个项目最后还是按时完成了。',answerPy:'Jǐnguǎn shòudàole zhǒngzhǒng zǔnáo, zhège xiàngmù zuìhòu háishi ànshí wánchéng le.',
      note:'尽管……还是……: mặc dù … vẫn ….',pair:'尽管……还是……'},
     {promptLang:'vi',prompt:'Cha mẹ nên ủng hộ ước mơ của con, chứ không phải ra sức ngăn cản.',answer:'父母应该支持孩子的梦想，而不是百般阻挠。',answerPy:'Fùmǔ yīnggāi zhīchí háizi de mèngxiǎng, ér bú shì bǎibān zǔnáo.',
      note:'……，而不是……: …, chứ không phải ….',pair:'……，而不是……'}
   ]},

  {n:46,zh:'尊严',py:'zūnyán',pos:'Danh từ',vn:'danh dự, phẩm giá, sự uy nghiêm',hv:'tôn nghiêm',em:'👑',lesson:1,
   explain:['Nhân phẩm, danh dự không cho phép bị xúc phạm: 人的尊严, 维护尊严, 丧失尊严.','Còn nghĩa: uy nghiêm (của pháp luật, quốc gia): 法律的尊严. Chú ý: "tôn nghiêm" tiếng Việt thường tả không khí trang nghiêm (≈ 庄严 — bài 27), còn 尊严 chủ yếu là "phẩm giá".'],
   usage:'维护 / 保持 + 尊严; 丧失 / 失去 + 尊严; 伤害……的尊严; 有尊严地 + 活着.',
   collo:['丧失尊严','维护尊严','有尊严地活着','伤害尊严'],
   ex_zh:'不要阻挠男人流泪，男人流泪不等于软弱无用，也并不丧失尊严。',ex_py:'Bú yào zǔnáo nánrén liú lèi, nánrén liú lèi bù děngyú ruǎnruò wúyòng, yě bìng bú sàngshī zūnyán.',ex_vn:'Đừng ngăn cản đàn ông rơi lệ; đàn ông rơi lệ không có nghĩa là yếu đuối vô dụng, cũng chẳng hề đánh mất phẩm giá.',
   exList:[
     {zh:'批评孩子时要注意方式，不要伤害他的自尊心和尊严。',py:'Pīpíng háizi shí yào zhùyì fāngshì, bú yào shānghài tā de zìzūnxīn hé zūnyán.',vn:'Khi phê bình con phải chú ý cách thức, đừng làm tổn thương lòng tự trọng và phẩm giá của con.'},
     {zh:'他宁可饿着肚子，也不愿意为了钱失去做人的尊严。',py:'Tā nìngkě èzhe dùzi, yě bú yuànyì wèile qián shīqù zuòrén de zūnyán.',vn:'Anh ấy thà chịu đói chứ không muốn vì tiền mà đánh mất phẩm giá làm người.'},
     {zh:'每个人都希望能有尊严地生活。',py:'Měi ge rén dōu xīwàng néng yǒu zūnyán de shēnghuó.',vn:'Ai cũng mong được sống một cách có phẩm giá.'}
   ],
   colloFull:[
     {zh:'丧失尊严',py:'sàngshī zūnyán',vn:'đánh mất phẩm giá'},
     {zh:'维护尊严',py:'wéihù zūnyán',vn:'bảo vệ phẩm giá, danh dự'},
     {zh:'有尊严地活着',py:'yǒu zūnyán de huózhe',vn:'sống có phẩm giá'},
     {zh:'伤害尊严',py:'shānghài zūnyán',vn:'làm tổn thương danh dự'},
     {zh:'法律的尊严',py:'fǎlǜ de zūnyán',vn:'sự uy nghiêm của pháp luật'}
   ],
   patterns:[
     {s:'维护 / 丧失 + ……的尊严',m:'Bảo vệ / đánh mất phẩm giá của …'},
     {s:'有尊严地 + 生活 / 活着',m:'Sống có phẩm giá'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Rơi nước mắt hoàn toàn không có nghĩa là đánh mất phẩm giá, ngược lại còn cho thấy anh ấy rất chân thành.',answer:'流泪并不意味着丧失尊严，反而说明他很真诚。',answerPy:'Liú lèi bìng bú yìwèizhe sàngshī zūnyán, fǎn\'ér shuōmíng tā hěn zhēnchéng.',
      note:'并不……，反而……: hoàn toàn không …, ngược lại còn ….',pair:'并不……，反而……'},
     {promptLang:'vi',prompt:'Để bảo vệ danh dự của đội bóng, các cầu thủ đã chiến đấu đến phút cuối cùng.',answer:'为了维护球队的尊严，队员们一直拼搏到了最后一分钟。',answerPy:'Wèile wéihù qiúduì de zūnyán, duìyuánmen yìzhí pīnbó dàole zuìhòu yì fēnzhōng.',
      note:'为了……; 拼搏 = dốc sức chiến đấu (bài 24); 维护 (bài 23).',pair:'为了……'}
   ]},

  {n:47,zh:'理睬',py:'lǐcǎi',pos:'Động từ',vn:'để ý, quan tâm, đoái hoài',hv:'lý thải',em:'🙉',lesson:1,
   explain:['Để ý, đáp lại, quan tâm đến (lời nói, thái độ của người khác): 不理睬, 没人理睬.','Hầu như chỉ dùng ở dạng PHỦ ĐỊNH: 不必理睬, 不予理睬, 懒得理睬, 不理不睬 (phớt lờ). Khẩu ngữ tương đương: 理 / 搭理.'],
   usage:'不 / 没 + 理睬; 不必 / 懒得 / 不予 + 理睬; 对……不理不睬; 没人理睬.',
   collo:['不必理睬','不理不睬','没人理睬','懒得理睬'],
   ex_zh:'男人本身也不必理睬别人说三道四，谁都不能长久地淹没在忧伤、难过的情绪中。',ex_py:'Nánrén běnshēn yě búbì lǐcǎi biérén shuō sān dào sì, shéi dōu bù néng chángjiǔ de yānmò zài yōushāng, nánguò de qíngxù zhōng.',ex_vn:'Bản thân đàn ông cũng không cần để ý người khác nói ra nói vào; ai cũng không thể chìm đắm mãi trong nỗi u sầu, buồn bã.',
   exList:[
     {zh:'我跟他打招呼，他却一点儿也不理睬我，好像不认识我似的。',py:'Wǒ gēn tā dǎ zhāohu, tā què yìdiǎnr yě bù lǐcǎi wǒ, hǎoxiàng bú rènshi wǒ shìde.',vn:'Tôi chào anh ta, anh ta lại chẳng thèm để ý, như thể không quen biết tôi.'},
     {zh:'对于网上那些无聊的评论，你完全不必理睬。',py:'Duìyú wǎng shang nàxiē wúliáo de pínglùn, nǐ wánquán búbì lǐcǎi.',vn:'Với những bình luận nhảm nhí trên mạng, em hoàn toàn không cần để ý.'},
     {zh:'他在门口喊了半天，也没人理睬他。',py:'Tā zài ménkǒu hǎnle bàntiān, yě méi rén lǐcǎi tā.',vn:'Anh ấy gọi ở cửa cả buổi mà cũng chẳng ai đoái hoài.'}
   ],
   colloFull:[
     {zh:'不必理睬',py:'búbì lǐcǎi',vn:'không cần để ý'},
     {zh:'不理不睬',py:'bù lǐ bù cǎi',vn:'phớt lờ, làm ngơ'},
     {zh:'没人理睬',py:'méi rén lǐcǎi',vn:'chẳng ai đoái hoài'},
     {zh:'懒得理睬',py:'lǎnde lǐcǎi',vn:'chẳng buồn để ý'},
     {zh:'不予理睬',py:'bù yǔ lǐcǎi',vn:'không thèm để ý (văn viết)'}
   ],
   patterns:[
     {s:'对…… + 不必 / 不予 + 理睬',m:'Không cần / không thèm để ý đến …'},
     {s:'对 + 人 + 不理不睬',m:'Phớt lờ ai'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đối với những lời đồn không có căn cứ, tốt nhất là không cần để ý.',answer:'对于那些没有根据的谣言，最好不必理睬。',answerPy:'Duìyú nàxiē méiyǒu gēnjù de yáoyán, zuìhǎo búbì lǐcǎi.',
      note:'对于……: đối với …; 谣言 = tin đồn.',pair:'对于……'},
     {promptLang:'vi',prompt:'Cãi nhau xong, hai người phớt lờ nhau suốt cả tuần.',answer:'吵完架以后，两个人整整一个星期对对方不理不睬。',answerPy:'Chǎowán jià yǐhòu, liǎng ge rén zhěngzhěng yí ge xīngqī duì duìfāng bù lǐ bù cǎi.',
      note:'V完 + O + 以后: sau khi … xong; 整整 = tròn, suốt.',pair:'V完……以后'}
   ]},

  {n:48,zh:'淹没',py:'yānmò',pos:'Động từ',vn:'chìm ngập, nhấn chìm',hv:'yêm một',em:'💧',lesson:1,
   explain:['(Nước) dâng lên nhấn chìm, làm ngập: 洪水淹没了农田.','Nghĩa bóng: bị vùi lấp, chìm lẫn (trong đám đông, âm thanh, cảm xúc…): 淹没在人群中, 淹没在忧伤的情绪中, 掌声淹没了他的声音.'],
   usage:'洪水 + 淹没 + 村庄 / 农田; 淹没在 + 人群 / 情绪 + 中; 被……淹没.',
   collo:['淹没在情绪中','被洪水淹没','淹没在人群中','淹没了声音'],
   ex_zh:'男人本身也不必理睬别人说三道四，谁都不能长久地淹没在忧伤、难过的情绪中。',ex_py:'Nánrén běnshēn yě búbì lǐcǎi biérén shuō sān dào sì, shéi dōu bù néng chángjiǔ de yānmò zài yōushāng, nánguò de qíngxù zhōng.',ex_vn:'Bản thân đàn ông cũng không cần để ý người khác nói ra nói vào; ai cũng không thể chìm đắm mãi trong nỗi u sầu, buồn bã.',
   exList:[
     {zh:'一场特大暴雨过后，好几个村庄都被洪水淹没了。',py:'Yì cháng tèdà bàoyǔ guòhòu, hǎo jǐ ge cūnzhuāng dōu bèi hóngshuǐ yānmò le.',vn:'Sau một trận mưa cực lớn, mấy ngôi làng đều bị lũ nhấn chìm.'},
     {zh:'他的声音很快就被热烈的掌声淹没了。',py:'Tā de shēngyīn hěn kuài jiù bèi rèliè de zhǎngshēng yānmò le.',vn:'Tiếng anh ấy nhanh chóng bị tràng vỗ tay nồng nhiệt át mất.'},
     {zh:'一走出车站，他就淹没在了拥挤的人群中。',py:'Yì zǒuchū chēzhàn, tā jiù yānmò zàile yōngjǐ de rénqún zhōng.',vn:'Vừa bước ra khỏi nhà ga, anh ấy đã lẫn vào đám đông chen chúc.'}
   ],
   colloFull:[
     {zh:'淹没在情绪中',py:'yānmò zài qíngxù zhōng',vn:'chìm đắm trong cảm xúc'},
     {zh:'被洪水淹没',py:'bèi hóngshuǐ yānmò',vn:'bị lũ nhấn chìm'},
     {zh:'淹没在人群中',py:'yānmò zài rénqún zhōng',vn:'lẫn vào đám đông'},
     {zh:'淹没了声音',py:'yānmòle shēngyīn',vn:'át mất tiếng nói'},
     {zh:'淹没农田',py:'yānmò nóngtián',vn:'làm ngập ruộng đồng'}
   ],
   patterns:[
     {s:'淹没在 + ……（之）中',m:'Chìm đắm / lẫn vào trong …'},
     {s:'……被……淹没了',m:'… bị … nhấn chìm / át mất'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đừng để bản thân chìm đắm mãi trong nỗi buồn, cứ thử ra ngoài đi dạo xem.',answer:'别让自己一直淹没在悲伤之中，不妨出去走走。',answerPy:'Bié ràng zìjǐ yìzhí yānmò zài bēishāng zhī zhōng, bùfáng chūqù zǒuzou.',
      note:'不妨 = cứ thử, cũng chẳng sao (bài 12).',pair:'不妨'},
     {promptLang:'vi',prompt:'Mưa lớn liên tục khiến nhiều ruộng đồng bị ngập.',answer:'连续的大雨使很多农田被淹没了。',answerPy:'Liánxù de dàyǔ shǐ hěn duō nóngtián bèi yānmò le.',
      note:'使 + O + V: khiến ….',pair:'使……'}
   ]},

  {n:49,zh:'须知',py:'xūzhī',pos:'Động từ',vn:'nhất định phải biết, cần biết rằng',hv:'tu tri',em:'📌',lesson:1,
   explain:['Động từ, thường đứng đầu câu (văn viết): "cần biết rằng, phải biết rằng" — nhắc người nghe một đạo lý quan trọng: 须知，…….','Danh từ: bản hướng dẫn những điều cần biết: 考生须知, 乘客须知, 游客须知.'],
   usage:'须知，……（đầu câu）; 你须知……; 考生 / 乘客 / 游客 + 须知.',
   collo:['考生须知','乘客须知','须知，……','游客须知'],
   ex_zh:'须知，真正的个人成长往往来自于痛苦、磨难，而非快乐。',ex_py:'Xūzhī, zhēnzhèng de gèrén chéngzhǎng wǎngwǎng lái zì yú tòngkǔ, mónàn, ér fēi kuàilè.',ex_vn:'Phải biết rằng, sự trưởng thành thật sự của mỗi người thường đến từ đau khổ, gian nan chứ không phải từ niềm vui.',
   exList:[
     {zh:'考试前请仔细阅读考生须知。',py:'Kǎoshì qián qǐng zǐxì yuèdú kǎoshēng xūzhī.',vn:'Trước khi thi hãy đọc kỹ những điều thí sinh cần biết.'},
     {zh:'须知，罗马不是一天建成的，学习也要一步一步来。',py:'Xūzhī, Luómǎ bú shì yì tiān jiànchéng de, xuéxí yě yào yí bù yí bù lái.',vn:'Phải biết rằng, thành Rome không phải xây xong trong một ngày, học tập cũng phải từng bước một.'},
     {zh:'你须知，机会只留给有准备的人。',py:'Nǐ xūzhī, jīhuì zhǐ liú gěi yǒu zhǔnbèi de rén.',vn:'Em cần biết rằng, cơ hội chỉ dành cho người có chuẩn bị.'}
   ],
   colloFull:[
     {zh:'考生须知',py:'kǎoshēng xūzhī',vn:'những điều thí sinh cần biết'},
     {zh:'乘客须知',py:'chéngkè xūzhī',vn:'quy định dành cho hành khách'},
     {zh:'须知，……',py:'xūzhī, ……',vn:'phải biết rằng …'},
     {zh:'游客须知',py:'yóukè xūzhī',vn:'nội quy du khách'},
     {zh:'入学须知',py:'rùxué xūzhī',vn:'hướng dẫn nhập học'}
   ],
   patterns:[
     {s:'须知，……',m:'Phải biết rằng … (nhắc đạo lý, văn viết)'},
     {s:'……须知',m:'Những điều … cần biết (bảng hướng dẫn)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Phải biết rằng, không có kiên trì thì không có thành công.',answer:'须知，没有坚持，就没有成功。',answerPy:'Xūzhī, méiyǒu jiānchí, jiù méiyǒu chénggōng.',
      note:'没有……就没有……: không có … thì không có ….',pair:'没有……就没有……'},
     {promptLang:'vi',prompt:'Trước khi lên máy bay, hành khách nên đọc kỹ quy định dành cho hành khách.',answer:'登机以前，乘客应该仔细阅读乘客须知。',answerPy:'Dēngjī yǐqián, chéngkè yīnggāi zǐxì yuèdú chéngkè xūzhī.',
      note:'……以前: trước khi …; 须知 làm danh từ.',pair:'……以前'}
   ]},

  {n:50,zh:'抹杀',py:'mǒshā',pos:'Động từ',vn:'gạt bỏ, xoá bỏ, phủ nhận',hv:'mạt sát',em:'🧽',lesson:1,
   explain:['Gạt bỏ, phủ nhận hoàn toàn (thành tích, công lao, sự thật…): 抹杀成绩, 抹杀功劳, 抹杀事实; còn viết 抹煞.','Thường dùng phủ định: 不能 / 不要 + 抹杀; 一笔抹杀 = gạt phăng đi. Chú ý: "mạt sát" tiếng Việt = chửi bới, nhục mạ — khác hẳn.'],
   usage:'抹杀 + 成绩 / 功劳 / 贡献 / 事实; 不能 / 不要 + 抹杀; 抹杀掉; 一笔抹杀.',
   collo:['抹杀功劳','抹杀成绩','一笔抹杀','不能抹杀'],
   ex_zh:'不要抹杀掉痛苦在我们成长中的功劳。',ex_py:'Bú yào mǒshā diào tòngkǔ zài wǒmen chéngzhǎng zhōng de gōngláo.',ex_vn:'Đừng gạt bỏ công lao của nỗi đau trong quá trình trưởng thành của chúng ta. (功劳 — bài 23)',
   exList:[
     {zh:'他这次虽然犯了错，但不能因此抹杀他过去的成绩。',py:'Tā zhè cì suīrán fànle cuò, dàn bù néng yīncǐ mǒshā tā guòqù de chéngjì.',vn:'Lần này anh ấy tuy mắc lỗi, nhưng không thể vì thế mà phủ nhận thành tích trước đây của anh ấy.'},
     {zh:'历史事实是谁也抹杀不了的。',py:'Lìshǐ shìshí shì shéi yě mǒshā bu liǎo de.',vn:'Sự thật lịch sử là điều không ai xoá nhoà được.'},
     {zh:'不能因为一次失败，就把大家一年的努力一笔抹杀。',py:'Bù néng yīnwèi yí cì shībài, jiù bǎ dàjiā yì nián de nǔlì yì bǐ mǒshā.',vn:'Không thể vì một lần thất bại mà gạt phăng nỗ lực cả năm của mọi người.'}
   ],
   colloFull:[
     {zh:'抹杀功劳',py:'mǒshā gōngláo',vn:'gạt bỏ công lao'},
     {zh:'抹杀成绩',py:'mǒshā chéngjì',vn:'phủ nhận thành tích'},
     {zh:'一笔抹杀',py:'yì bǐ mǒshā',vn:'gạt phăng đi'},
     {zh:'不能抹杀',py:'bù néng mǒshā',vn:'không thể phủ nhận'},
     {zh:'抹杀事实',py:'mǒshā shìshí',vn:'xoá nhoà sự thật'}
   ],
   patterns:[
     {s:'不能因为……就抹杀……',m:'Không thể vì … mà gạt bỏ …'},
     {s:'……是谁也抹杀不了的',m:'… là điều không ai phủ nhận được'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Dù anh ấy có nhiều khuyết điểm, cũng không thể phủ nhận những đóng góp của anh ấy cho công ty.',answer:'哪怕他有很多缺点，也不能抹杀他对公司的贡献。',answerPy:'Nǎpà tā yǒu hěn duō quēdiǎn, yě bù néng mǒshā tā duì gōngsī de gòngxiàn.',
      note:'哪怕……也……: dù … cũng … (điểm ngữ pháp 1).',pair:'哪怕……也……'},
     {promptLang:'vi',prompt:'Công lao của cha mẹ, dù thế nào cũng không thể gạt bỏ.',answer:'父母的功劳，无论如何也抹杀不了。',answerPy:'Fùmǔ de gōngláo, wúlùn rúhé yě mǒshā bu liǎo.',
      note:'无论如何 = dù thế nào đi nữa; V + 不了 = không … được.',pair:'无论如何'}
   ]},

  {n:51,zh:'岁月',py:'suìyuè',pos:'Danh từ',vn:'năm tháng',hv:'tuế nguyệt',em:'⌛',lesson:1,
   explain:['Năm tháng, thời gian (thường là quãng dài, sắc thái văn chương): 艰苦的岁月, 青春岁月, 岁月流逝.','Hay đi với 流逝 (trôi qua), 留下痕迹 (để lại dấu vết), 人生岁月.'],
   usage:'……的岁月; 岁月 + 流逝 / 如梭; 岁月 + 留下 + 痕迹; 人生岁月; 在……的岁月里.',
   collo:['人生岁月','艰苦的岁月','岁月流逝','岁月的痕迹'],
   ex_zh:'毕竟，快乐往往是短暂的，人生岁月中更多地伴随着的是灰暗的情绪，而它却可以沉淀出智慧。',ex_py:'Bìjìng, kuàilè wǎngwǎng shì duǎnzàn de, rénshēng suìyuè zhōng gèng duō de bànsuízhe de shì huī\'àn de qíngxù, ér tā què kěyǐ chéndiàn chū zhìhuì.',ex_vn:'Suy cho cùng, niềm vui thường ngắn ngủi; theo ta suốt những năm tháng cuộc đời nhiều hơn lại là những cảm xúc u ám, nhưng chính chúng có thể lắng đọng thành trí tuệ.',
   exList:[
     {zh:'岁月流逝，当年的小姑娘已经成了两个孩子的妈妈。',py:'Suìyuè liúshì, dāngnián de xiǎo gūniang yǐjīng chéngle liǎng ge háizi de māma.',vn:'Năm tháng trôi qua, cô bé năm nào giờ đã là mẹ của hai đứa trẻ.'},
     {zh:'奶奶脸上的皱纹，记录着她走过的艰苦岁月。',py:'Nǎinai liǎn shang de zhòuwén, jìlùzhe tā zǒuguo de jiānkǔ suìyuè.',vn:'Những nếp nhăn trên mặt bà ghi lại những năm tháng gian khổ bà đã đi qua.'},
     {zh:'在那段艰难的岁月里，是朋友们的关怀让我坚持了下来。',py:'Zài nà duàn jiānnán de suìyuè li, shì péngyoumen de guānhuái ràng wǒ jiānchíle xiàlái.',vn:'Trong những năm tháng gian nan ấy, chính sự quan tâm của bạn bè đã giúp tôi trụ vững. (关怀 — bài 21)'}
   ],
   colloFull:[
     {zh:'人生岁月',py:'rénshēng suìyuè',vn:'năm tháng cuộc đời'},
     {zh:'艰苦的岁月',py:'jiānkǔ de suìyuè',vn:'những năm tháng gian khổ'},
     {zh:'岁月流逝',py:'suìyuè liúshì',vn:'năm tháng trôi qua'},
     {zh:'岁月的痕迹',py:'suìyuè de hénjì',vn:'dấu vết thời gian'},
     {zh:'青春岁月',py:'qīngchūn suìyuè',vn:'năm tháng tuổi trẻ'}
   ],
   patterns:[
     {s:'在……的岁月里，……',m:'Trong những năm tháng …, …'},
     {s:'岁月流逝，……',m:'Năm tháng trôi qua, …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Năm tháng trôi qua, nhưng tình bạn giữa chúng tôi không hề thay đổi chút nào.',answer:'岁月流逝，但我们之间的友谊一点儿也没变。',answerPy:'Suìyuè liúshì, dàn wǒmen zhījiān de yǒuyì yìdiǎnr yě méi biàn.',
      note:'……之间 = giữa …; 一点儿也没 + V = không hề ….',pair:'……之间'},
     {promptLang:'vi',prompt:'Những năm tháng tuổi trẻ ấy tuy vất vả, nhưng lại là quãng thời gian đẹp nhất của tôi.',answer:'那段青春岁月虽然辛苦，却是我最美好的时光。',answerPy:'Nà duàn qīngchūn suìyuè suīrán xīnkǔ, què shì wǒ zuì měihǎo de shíguāng.',
      note:'虽然……却……: tuy … nhưng lại ….',pair:'虽然……却……'}
   ]},

  {n:52,zh:'沉淀',py:'chéndiàn',pos:'Động từ',vn:'lắng đọng, kết tủa',hv:'trầm điến',em:'🏺',lesson:1,
   explain:['Nghĩa gốc: (chất rắn trong chất lỏng) lắng xuống đáy; danh từ: cặn lắng, chất kết tủa.','Nghĩa bóng: (kinh nghiệm, cảm xúc, văn hoá…) tích tụ, lắng đọng qua thời gian mà thành cái sâu sắc: 沉淀出智慧, 文化沉淀, 让心情沉淀一下.'],
   usage:'沉淀 + 出 + 智慧 / 经验; 让……沉淀（一下）; 文化 / 历史 + 沉淀; 沉淀下来.',
   collo:['沉淀出智慧','文化沉淀','让心情沉淀','沉淀下来'],
   ex_zh:'毕竟，快乐往往是短暂的，人生岁月中更多地伴随着的是灰暗的情绪，而它却可以沉淀出智慧。',ex_py:'Bìjìng, kuàilè wǎngwǎng shì duǎnzàn de, rénshēng suìyuè zhōng gèng duō de bànsuízhe de shì huī\'àn de qíngxù, ér tā què kěyǐ chéndiàn chū zhìhuì.',ex_vn:'Suy cho cùng, niềm vui thường ngắn ngủi; theo ta suốt những năm tháng cuộc đời nhiều hơn lại là những cảm xúc u ám, nhưng chính chúng có thể lắng đọng thành trí tuệ.',
   exList:[
     {zh:'把水静置一会儿，里面的泥沙就会慢慢沉淀下来。',py:'Bǎ shuǐ jìngzhì yíhuìr, lǐmiàn de níshā jiù huì mànmàn chéndiàn xiàlái.',vn:'Để nước yên một lúc, bùn cát bên trong sẽ từ từ lắng xuống.'},
     {zh:'这座古城有着深厚的历史文化沉淀。',py:'Zhè zuò gǔchéng yǒuzhe shēnhòu de lìshǐ wénhuà chéndiàn.',vn:'Toà cổ thành này có bề dày lịch sử văn hoá sâu sắc.'},
     {zh:'遇到烦心事时，先别急着做决定，让心情沉淀一下再说。',py:'Yùdào fánxīn shì shí, xiān bié jízhe zuò juédìng, ràng xīnqíng chéndiàn yíxià zài shuō.',vn:'Khi gặp chuyện phiền lòng, đừng vội quyết định, hãy để tâm trạng lắng xuống rồi hãy tính.'}
   ],
   colloFull:[
     {zh:'沉淀出智慧',py:'chéndiàn chū zhìhuì',vn:'lắng đọng thành trí tuệ'},
     {zh:'文化沉淀',py:'wénhuà chéndiàn',vn:'bề dày văn hoá'},
     {zh:'让心情沉淀',py:'ràng xīnqíng chéndiàn',vn:'để tâm trạng lắng xuống'},
     {zh:'沉淀下来',py:'chéndiàn xiàlái',vn:'lắng xuống'},
     {zh:'岁月的沉淀',py:'suìyuè de chéndiàn',vn:'sự lắng đọng của năm tháng'}
   ],
   patterns:[
     {s:'……可以沉淀出 + 智慧 / 经验',m:'… có thể lắng đọng thành trí tuệ / kinh nghiệm'},
     {s:'让 + 心情 / 自己 + 沉淀一下',m:'Để tâm trạng / bản thân lắng lại'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ khi trải qua sự lắng đọng của năm tháng, con người mới thật sự trưởng thành.',answer:'只有经过岁月的沉淀，人才能真正成熟起来。',answerPy:'Zhǐyǒu jīngguò suìyuè de chéndiàn, rén cái néng zhēnzhèng chéngshú qǐlái.',
      note:'只有……才……; Adj + 起来 = bắt đầu trở nên ….',pair:'只有……才……'},
     {promptLang:'vi',prompt:'Đừng vội đưa ra quyết định, để tâm trạng lắng xuống rồi hãy tính.',answer:'先别急着做决定，让心情沉淀一下再说。',answerPy:'Xiān bié jízhe zuò juédìng, ràng xīnqíng chéndiàn yíxià zài shuō.',
      note:'……再说: … rồi hãy tính; 急着 + V = vội ….',pair:'……再说'}
   ]}
];


var dialogData = [
  {scene:'课文 · 有时，不妨悲伤',
   preQuiz:[
     {q:'社会对好男人的标准怎么样？',opts:['越来越高','从没有改变过','已经完全改变了'],ans:1},
     {q:'“男儿有泪不轻弹”是什么意思？',opts:['理智的男子汉再悲伤也不轻易哭泣','男人哭的时候不能出声','男人只能在家里哭'],ans:0},
     {q:'为什么爱哭的男人会被“一票否决”？',opts:['因为哭泣对身体有害','因为哭会影响工作','因为男人流泪被看作软弱、没出息'],ans:2},
     {q:'男人们为什么千百次暗暗叮嘱自己要坚强？',opts:['为了不被鄙视、不被讥笑','为了得到更高的工资','为了给孩子做榜样'],ans:0},
     {q:'作者认为“男儿有泪不轻弹”是什么？',opts:['一种优秀的传统','社会文化赋予男人的一种束缚','医学上的一个结论'],ans:1},
     {q:'长期的压抑、隐忍对健康有什么影响？',opts:['有好处也有坏处','没有什么影响','只有坏处，没有好处'],ans:2},
     {q:'人在情绪抑郁时会分泌什么物质？',opts:['痛苦激素','快乐激素','生长激素'],ans:0},
     {q:'通常人们哭泣后，情绪强度会降低多少？',opts:['15%','40%','50%'],ans:1},
     {q:'中医认为，悲伤难过会影响哪个器官？',opts:['胃','心脏','肺'],ans:2},
     {q:'文章认为哭泣时间一般不要超过多长？',opts:['5分钟','15分钟','一个小时'],ans:1},
     {q:'哭泣时间过长为什么对身体有害？',opts:['会让喉咙发炎','会让人失去理智','会影响胃的运动和食欲'],ans:2},
     {q:'作者认为，真正的个人成长往往来自于什么？',opts:['痛苦和磨难','快乐和成功','别人的鼓励'],ans:0}
   ],
   lines:[
    {sp:0,zh:'到今天为止，我们的社会对好男人的标准从没有改变过：男人要有责任心，为人正直、宽容、刚毅，不背叛朋友；男人要上进，有抱负，有魄力；男人要谦虚，诚实，大方；男人要有修养，心胸开阔，处境艰难而不退缩，面对打击而不脆弱；男人是生活中的榜样，家庭的靠山，社会的支柱。总之，男人要顶天立地，光彩照人，要有男人的气概。',
     py:'Dào jīntiān wéizhǐ, wǒmen de shèhuì duì hǎo nánrén de biāozhǔn cóng méiyǒu gǎibiànguo: nánrén yào yǒu zérènxīn, wéirén zhèngzhí, kuānróng, gāngyì, bú bèipàn péngyou; nánrén yào shàngjìn, yǒu bàofù, yǒu pòlì; nánrén yào qiānxū, chéngshí, dàfang; nánrén yào yǒu xiūyǎng, xīnxiōng kāikuò, chǔjìng jiānnán ér bú tuìsuō, miànduì dǎjī ér bú cuìruò; nánrén shì shēnghuó zhōng de bǎngyàng, jiātíng de kàoshān, shèhuì de zhīzhù. Zǒngzhī, nánrén yào dǐngtiān-lìdì, guāngcǎi zhào rén, yào yǒu nánrén de qìgài.',
     vn:'Cho đến hôm nay, tiêu chuẩn của xã hội chúng ta về một người đàn ông tốt chưa từng thay đổi: đàn ông phải có tinh thần trách nhiệm, đối nhân xử thế ngay thẳng, bao dung, cương nghị, không phản bội bạn bè; đàn ông phải cầu tiến, có hoài bão, có sự quyết đoán; đàn ông phải khiêm tốn, thành thật, hào phóng; đàn ông phải có tu dưỡng, lòng dạ rộng mở, hoàn cảnh gian nan mà không lùi bước, đối mặt với cú sốc mà không yếu đuối; đàn ông là tấm gương trong cuộc sống, chỗ dựa của gia đình, trụ cột của xã hội. Tóm lại, đàn ông phải đội trời đạp đất, rạng rỡ hơn người, phải có khí khái đàn ông.'},
    {sp:0,zh:'不仅如此，男人们从小受到的教育就是“男儿有泪不轻弹”，意思是说，理智的男子汉再悲伤也不轻易哭泣，爱哭的男人走到哪儿都会被一票否决，因为男人流泪就意味着软弱、没出息，而这种教育是从娃娃时代就潜移默化地在起作用了，他们天天被这样的古训鞭策着。我们的文化赋予了男人高大、坚强的形象，他们在生活中必须扮演强者。',
     py:'Bùjǐn rúcǐ, nánrénmen cóngxiǎo shòudào de jiàoyù jiù shì “nán\'ér yǒu lèi bù qīng tán”, yìsi shì shuō, lǐzhì de nánzǐhàn zài bēishāng yě bù qīngyì kūqì, ài kū de nánrén zǒudào nǎr dōu huì bèi yí piào fǒujué, yīnwèi nánrén liú lèi jiù yìwèizhe ruǎnruò, méi chūxi, ér zhè zhǒng jiàoyù shì cóng wáwa shídài jiù qiányí-mòhuà de zài qǐ zuòyòng le, tāmen tiāntiān bèi zhèyàng de gǔxùn biāncèzhe. Wǒmen de wénhuà fùyǔle nánrén gāodà, jiānqiáng de xíngxiàng, tāmen zài shēnghuó zhōng bìxū bànyǎn qiángzhě.',
     vn:'Không chỉ vậy, điều mà đàn ông được dạy từ nhỏ chính là "nam nhi có lệ không dễ rơi", nghĩa là: nam tử hán có lý trí thì dù buồn đến mấy cũng không dễ dàng khóc lóc; đàn ông hay khóc thì đi đâu cũng bị gạt bỏ ngay, vì đàn ông rơi nước mắt đồng nghĩa với yếu đuối, chẳng nên trò trống gì. Kiểu giáo dục này đã âm thầm phát huy tác dụng từ thời còn bé tí, ngày nào họ cũng bị những lời răn dạy cổ xưa như thế thúc giục. Văn hoá của chúng ta đã khoác cho đàn ông hình tượng to lớn, kiên cường; trong cuộc sống họ buộc phải đóng vai kẻ mạnh.'},
    {sp:0,zh:'男人们为了不被鄙视，不被讥笑，为了远离那些恶心、不体面的词汇，千百次暗暗叮嘱自己：伤心是软弱的表现，哪怕遭受打击、面对失败、受尽委屈，也一定要坚强，这是什么时候都不能含糊的。',
     py:'Nánrénmen wèile bú bèi bǐshì, bú bèi jīxiào, wèile yuǎnlí nàxiē ěxīn, bù tǐmiàn de cíhuì, qiān bǎi cì àn\'àn dīngzhǔ zìjǐ: shāngxīn shì ruǎnruò de biǎoxiàn, nǎpà zāoshòu dǎjī, miànduì shībài, shòujìn wěiqu, yě yídìng yào jiānqiáng, zhè shì shénme shíhou dōu bù néng hánhu de.',
     vn:'Đàn ông, để không bị khinh thường, không bị chế giễu, để tránh xa những từ ngữ đáng ghê tởm, chẳng ra thể thống gì, đã hàng trăm hàng nghìn lần thầm dặn lòng mình: đau lòng là biểu hiện của yếu đuối; dù gặp cú sốc, đối mặt thất bại, chịu đủ mọi uất ức cũng nhất định phải kiên cường — điều này lúc nào cũng không được qua loa.'},
    {sp:0,zh:'实际情况是，“男儿有泪不轻弹”是社会文化赋予男人的一种束缚。男人不是魔鬼，也不是神仙，他们也是有血有肉、有健全情感的人。男人也有喜怒哀乐，也需要关怀，也需要温柔的抚慰，否则，再有力的肩膀也有被压塌的时候。事实表明，长期的压抑、隐忍对健康只有坏处，没有好处，反之，以适当的方式将情绪释放一下，人的心绪才会变得平和。',
     py:'Shíjì qíngkuàng shì, “nán\'ér yǒu lèi bù qīng tán” shì shèhuì wénhuà fùyǔ nánrén de yì zhǒng shùfù. Nánrén bú shì móguǐ, yě bú shì shénxiān, tāmen yě shì yǒu xuè yǒu ròu, yǒu jiànquán qínggǎn de rén. Nánrén yě yǒu xǐ-nù-āi-lè, yě xūyào guānhuái, yě xūyào wēnróu de fǔwèi, fǒuzé, zài yǒulì de jiānbǎng yě yǒu bèi yātā de shíhou. Shìshí biǎomíng, chángqī de yāyì, yǐnrěn duì jiànkāng zhǐyǒu huàichù, méiyǒu hǎochù, fǎnzhī, yǐ shìdàng de fāngshì jiāng qíngxù shìfàng yíxià, rén de xīnxù cái huì biàn de pínghé.',
     vn:'Thực tế là, "nam nhi có lệ không dễ rơi" là một sự trói buộc mà văn hoá xã hội áp lên đàn ông. Đàn ông không phải ác quỷ, cũng chẳng phải thần tiên, họ cũng là con người bằng xương bằng thịt, có tình cảm lành mạnh đầy đủ. Đàn ông cũng có hỉ nộ ái lạc, cũng cần được quan tâm, cũng cần sự vỗ về dịu dàng; nếu không, bờ vai vững chắc đến mấy cũng có lúc bị đè sụp. Thực tế cho thấy, dồn nén, nhẫn nhịn lâu dài chỉ có hại chứ không có lợi cho sức khoẻ; ngược lại, giải toả cảm xúc một chút bằng cách thích hợp thì tâm trạng con người mới trở nên bình hoà.'},
    {sp:0,zh:'其实，眼泪是情绪释放的一种形式，人在情绪抑郁时会分泌一种被称为痛苦激素的物质，它会让人情绪低落、无精打采，眼泪恰恰可以将它排出体外。通常人们哭泣后，在情绪强度上会降低40%，如果不能利用眼泪把情绪压力转移掉，则会影响身体健康。',
     py:'Qíshí, yǎnlèi shì qíngxù shìfàng de yì zhǒng xíngshì, rén zài qíngxù yìyù shí huì fēnmì yì zhǒng bèi chēngwéi tòngkǔ jīsù de wùzhì, tā huì ràng rén qíngxù dīluò, wú jīng dǎ cǎi, yǎnlèi qiàqià kěyǐ jiāng tā páichū tǐ wài. Tōngcháng rénmen kūqì hòu, zài qíngxù qiángdù shang huì jiàngdī bǎi fēn zhī sìshí, rúguǒ bù néng lìyòng yǎnlèi bǎ qíngxù yālì zhuǎnyí diào, zé huì yǐngxiǎng shēntǐ jiànkāng.',
     vn:'Thật ra, nước mắt là một hình thức giải toả cảm xúc. Khi cảm xúc u uất, con người tiết ra một chất gọi là "hormone đau khổ", nó khiến người ta tâm trạng sa sút, uể oải rã rời, mà nước mắt lại chính là thứ có thể thải nó ra khỏi cơ thể. Thông thường sau khi khóc, cường độ cảm xúc của con người giảm 40%; nếu không thể dùng nước mắt để chuyển đi áp lực cảm xúc thì sẽ ảnh hưởng đến sức khoẻ.'},
    {sp:0,zh:'中医认为，忧伤肺。当人难过、想哭的时候，喉咙里会觉得不舒服。喉咙直接通肺，喉咙不舒服，就是肺部受刺激了；人哭起来常常会一把鼻涕一把泪，之所以会流鼻涕，也是肺受了刺激。一旦悲伤难过没有了，也就不再流鼻涕了，喉咙也会舒适起来。这说明，悲伤难过对肺会有影响。伤心难过之际，不妨痛哭。哭完了，一切都得到了修复。因此，不发给男人宣泄情绪的许可证不是正道，男人也有流泪的权利。我们倡导要给男人释放情绪的空间，男人流泪本在情理之中。',
     py:'Zhōngyī rènwéi, yōu shāng fèi. Dāng rén nánguò, xiǎng kū de shíhou, hóulóng li huì juéde bù shūfu. Hóulóng zhíjiē tōng fèi, hóulóng bù shūfu, jiù shì fèibù shòu cìjī le; rén kū qǐlái chángcháng huì yì bǎ bítì yì bǎ lèi, zhī suǒyǐ huì liú bítì, yě shì fèi shòule cìjī. Yídàn bēishāng nánguò méiyǒu le, yě jiù bú zài liú bítì le, hóulóng yě huì shūshì qǐlái. Zhè shuōmíng, bēishāng nánguò duì fèi huì yǒu yǐngxiǎng. Shāngxīn nánguò zhījì, bùfáng tòngkū. Kūwán le, yíqiè dōu dédàole xiūfù. Yīncǐ, bù fā gěi nánrén xuānxiè qíngxù de xǔkězhèng bú shì zhèngdào, nánrén yě yǒu liú lèi de quánlì. Wǒmen chàngdǎo yào gěi nánrén shìfàng qíngxù de kōngjiān, nánrén liú lèi běn zài qínglǐ zhī zhōng.',
     vn:'Đông y cho rằng u sầu làm tổn thương phổi. Khi con người buồn, muốn khóc, trong cổ họng sẽ thấy khó chịu. Cổ họng thông thẳng với phổi, họng khó chịu tức là phổi bị kích thích; người ta khóc thường nước mắt nước mũi tèm lem, sở dĩ chảy nước mũi cũng là vì phổi bị kích thích. Một khi nỗi buồn không còn nữa thì cũng không chảy nước mũi nữa, cổ họng cũng dễ chịu trở lại. Điều này cho thấy buồn bã có ảnh hưởng đến phổi. Những lúc đau lòng buồn bã, cứ việc khóc thật to. Khóc xong rồi, mọi thứ đều được phục hồi. Vì vậy, không cấp cho đàn ông "giấy phép" giải toả cảm xúc là không đúng đắn; đàn ông cũng có quyền rơi lệ. Chúng tôi chủ trương phải cho đàn ông không gian để giải toả cảm xúc; đàn ông rơi lệ vốn là điều hợp tình hợp lý.'},
    {sp:0,zh:'不过，宣泄归宣泄，宣泄时忌讳哭泣时间过长，一般不要超过15分钟，压抑的心情得到发泄、缓解后就不要再哭，否则对身体反而有害。因为人的胃肠机能对情绪极为敏感，忧愁悲伤或哭泣时间过长，胃的运动会减慢，会影响食欲，甚至引起其他胃部疾病。',
     py:'Búguò, xuānxiè guī xuānxiè, xuānxiè shí jìhuì kūqì shíjiān guò cháng, yìbān bú yào chāoguò shíwǔ fēnzhōng, yāyì de xīnqíng dédào fāxiè, huǎnjiě hòu jiù bú yào zài kū, fǒuzé duì shēntǐ fǎn\'ér yǒuhài. Yīnwèi rén de wèicháng jīnéng duì qíngxù jíwéi mǐngǎn, yōuchóu bēishāng huò kūqì shíjiān guò cháng, wèi de yùndòng huì jiǎnmàn, huì yǐngxiǎng shíyù, shènzhì yǐnqǐ qítā wèibù jíbìng.',
     vn:'Tuy nhiên, giải toả thì giải toả, khi giải toả kiêng khóc quá lâu, thường không nên quá 15 phút; tâm trạng dồn nén đã được trút ra, dịu đi rồi thì đừng khóc nữa, nếu không ngược lại còn có hại cho cơ thể. Bởi vì chức năng dạ dày – ruột của con người cực kỳ nhạy cảm với cảm xúc; u sầu buồn bã hoặc khóc quá lâu, dạ dày sẽ co bóp chậm lại, ảnh hưởng đến cảm giác thèm ăn, thậm chí gây ra các bệnh dạ dày khác.'},
    {sp:0,zh:'释放情绪除了哭泣，还应在想法上做调整：扔掉外界对男人流泪的鄙视，因为这种鄙视只是一种狭隘的偏见。不要阻挠男人流泪，男人流泪不等于软弱无用，也并不丧失尊严。男人本身也不必理睬别人说三道四，谁都不能长久地淹没在忧伤、难过的情绪中。偶尔具有负面情绪不是什么坏事，它能让我们更了解自己，让我们成长，让我们更深刻地体悟到什么是快乐。',
     py:'Shìfàng qíngxù chúle kūqì, hái yīng zài xiǎngfǎ shang zuò tiáozhěng: rēngdiào wàijiè duì nánrén liú lèi de bǐshì, yīnwèi zhè zhǒng bǐshì zhǐ shì yì zhǒng xiá\'ài de piānjiàn. Bú yào zǔnáo nánrén liú lèi, nánrén liú lèi bù děngyú ruǎnruò wúyòng, yě bìng bú sàngshī zūnyán. Nánrén běnshēn yě búbì lǐcǎi biérén shuō sān dào sì, shéi dōu bù néng chángjiǔ de yānmò zài yōushāng, nánguò de qíngxù zhōng. Ǒu\'ěr jùyǒu fùmiàn qíngxù bú shì shénme huàishì, tā néng ràng wǒmen gèng liǎojiě zìjǐ, ràng wǒmen chéngzhǎng, ràng wǒmen gèng shēnkè de tǐwù dào shénme shì kuàilè.',
     vn:'Giải toả cảm xúc, ngoài khóc ra còn nên điều chỉnh suy nghĩ: vứt bỏ sự coi thường của bên ngoài đối với việc đàn ông rơi lệ, vì sự coi thường ấy chỉ là một định kiến hẹp hòi. Đừng ngăn cản đàn ông rơi lệ; đàn ông rơi lệ không có nghĩa là yếu đuối vô dụng, cũng chẳng hề đánh mất phẩm giá. Bản thân đàn ông cũng không cần để ý người khác nói ra nói vào; ai cũng không thể chìm đắm mãi trong nỗi u sầu, buồn bã. Thỉnh thoảng có cảm xúc tiêu cực chẳng phải chuyện gì xấu, nó giúp chúng ta hiểu bản thân hơn, giúp ta trưởng thành, giúp ta cảm nhận sâu sắc hơn thế nào là hạnh phúc.'},
    {sp:0,zh:'须知，真正的个人成长往往来自于痛苦、磨难，而非快乐，不要抹杀掉痛苦在我们成长中的功劳。既然悲伤无可避免，就应该好好面对悲伤，不要妄想生命中从不出现这样的过程和阶段。毕竟，快乐往往是短暂的，人生岁月中更多地伴随着的是灰暗的情绪，而它却可以沉淀出智慧。',
     py:'Xūzhī, zhēnzhèng de gèrén chéngzhǎng wǎngwǎng lái zì yú tòngkǔ, mónàn, ér fēi kuàilè, bú yào mǒshā diào tòngkǔ zài wǒmen chéngzhǎng zhōng de gōngláo. Jìrán bēishāng wú kě bìmiǎn, jiù yīnggāi hǎohǎo miànduì bēishāng, bú yào wàngxiǎng shēngmìng zhōng cóng bù chūxiàn zhèyàng de guòchéng hé jiēduàn. Bìjìng, kuàilè wǎngwǎng shì duǎnzàn de, rénshēng suìyuè zhōng gèng duō de bànsuízhe de shì huī\'àn de qíngxù, ér tā què kěyǐ chéndiàn chū zhìhuì.',
     vn:'Phải biết rằng, sự trưởng thành thật sự của mỗi người thường đến từ đau khổ, gian nan chứ không phải từ niềm vui; đừng gạt bỏ công lao của nỗi đau trong quá trình trưởng thành của chúng ta. Đã là nỗi buồn không thể tránh khỏi thì nên đối mặt với nó cho tốt, đừng vọng tưởng rằng trong cuộc đời sẽ không bao giờ xuất hiện những quá trình, giai đoạn như thế. Suy cho cùng, niềm vui thường ngắn ngủi; theo ta suốt những năm tháng cuộc đời nhiều hơn lại là những cảm xúc u ám, nhưng chính chúng có thể lắng đọng thành trí tuệ.'}
   ]}
];

// ══════════════════════════════════════════
// PHÂN BIỆT TỪ GẦN NGHĨA 词语辨析
// Cặp 许可—允许 lấy từ sách (tr. 127, 做一做 判断正误 — đáp án sách: √ × √ ×); 宣泄—发泄, 含糊—模糊 tự thêm (đều có trong bài khoá)
// ══════════════════════════════════════════
var synonymData = [
  {pair:'许可 — 允许',
   same:'Đều là động từ, đều có nghĩa "cho phép, chấp thuận" (准许、可以).',
   sameEx:{zh:'得到许可／允许，方可入内。',vn:'Được cho phép mới được vào.'},
   items:[
     {word:'许可',points:[
       'KHÔNG mang tân ngữ: không nói 他许可我在这儿拍照; phải nói 我在这儿拍照得到了他的许可.',
       'Có thể bổ nghĩa cho danh từ, tạo từ ghép: 许可证 (giấy phép), 营业许可证.',
       'Văn viết, trang trọng; hay dùng trong văn bản quy định: 未经许可，不得…….'
     ],ex:[{zh:'我在这儿拍照得到了他的许可。',vn:'Tôi chụp ảnh ở đây đã được anh ấy cho phép.'},
          {zh:'私人物品，未经许可，不得动用。',vn:'Đồ dùng cá nhân, chưa được phép thì không được sử dụng.'}]},
     {word:'允许',points:[
       'CÓ THỂ mang tân ngữ (thường là kiêm ngữ): 允许 + người + V — 他允许我在这儿拍照.',
       'Không bổ nghĩa cho danh từ: không nói 允许证.',
       'Dùng cả khẩu ngữ lẫn văn viết: 妈妈允许我……, 如果时间允许…….'
     ],ex:[{zh:'他允许我在这儿拍照。',vn:'Anh ấy cho phép tôi chụp ảnh ở đây.'},
          {zh:'如果时间允许，我们再去一趟博物馆。',vn:'Nếu thời gian cho phép, chúng ta đi bảo tàng thêm một chuyến.'}]}
   ],
   quiz:[
     {sentence:'老师不＿＿我们在考试的时候用手机。',options:['许可','允许'],answer:1,why:'Có tân ngữ kiêm ngữ (我们 + V) → chỉ 允许 mang được tân ngữ.'},
     {sentence:'开这家店需要先办理营业＿＿证。',options:['许可','允许'],answer:0,why:'Bổ nghĩa cho danh từ 证 → 许可证; không có 允许证.'},
     {sentence:'这件事必须得到领导的＿＿才能做。',options:['许可','允许'],answer:0,both:true,why:'Làm tân ngữ của 得到 → cả hai đều được; văn bản trang trọng hay dùng 许可.'},
     {sentence:'爸爸终于＿＿我一个人去旅行了。',options:['许可','允许'],answer:1,why:'允许 + 我 + V (mang tân ngữ kiêm ngữ) → chỉ 允许.'}
   ],
   sgk:{
     chung:{t:'动词，都有“准许、可以”的意思。',vn:'Đều là động từ, đều có nghĩa "cho phép, được phép".',vd:'得到许可／允许，方可入内。',vdVn:'Được cho phép mới được vào.'},
     khac:[
       {a:{t:'“许可”后边不能带宾语。',vn:'Sau 许可 không thể mang tân ngữ.',vd:'① 他许可我在这儿拍照。（×）　② 我在这儿拍照得到了他的许可。（√）',vdVn:'① "他许可我在这儿拍照" là sai.　② Tôi chụp ảnh ở đây đã được anh ấy cho phép. (đúng)'},
        b:{t:'“允许”后边可以带宾语。',vn:'Sau 允许 có thể mang tân ngữ.',vd:'他允许我在这儿拍照。（√）',vdVn:'Anh ấy cho phép tôi chụp ảnh ở đây. (đúng)'}},
       {a:{t:'可以修饰名词。',vn:'Có thể bổ nghĩa cho danh từ.',vd:'许可证（√）',vdVn:'"许可证" (giấy phép) — đúng.'},
        b:{t:'不能修饰名词。',vn:'Không thể bổ nghĩa cho danh từ.',vd:'允许证（×）',vdVn:'"允许证" — sai.'}}
     ],
     deLam:'判断正误 — Tích vào cột đúng (√) hay sai (×) cho từng câu',
     cot:['√ đúng','× sai'],
     lamThu:[
       {s:'私人物品，未经许可，不得动用。',dap:[true,false],
        giai:'ĐÚNG (đáp án sách √). 许可 đứng sau 未经 làm tân ngữ (未经许可 = chưa được phép), bản thân không mang tân ngữ → đúng.'},
       {s:'学校有明文规定：教室里不许可抽烟。',dap:[false,true],
        giai:'SAI (đáp án sách ×). 许可 không mang tân ngữ (抽烟); phải nói 教室里不允许抽烟 (hoặc 不许抽烟).'},
       {s:'妈妈允许我每天玩儿半个小时游戏。',dap:[true,false],
        giai:'ĐÚNG (đáp án sách √). 允许 + 我 + V: 允许 mang được tân ngữ kiêm ngữ.'},
       {s:'公司的经营允许证终于申请下来了。',dap:[false,true],
        giai:'SAI (đáp án sách ×). 允许 không bổ nghĩa cho danh từ; phải nói 经营许可证.'}
     ]
   }},

  {pair:'宣泄 — 发泄',
   same:'Đều là động từ, đều có nghĩa trút ra, giải toả cảm xúc dồn nén (情绪, 不满, 怒气…); bài khoá dùng cả hai: 宣泄情绪 / 压抑的心情得到发泄、缓解.',
   sameEx:{zh:'压抑的情绪需要宣泄／发泄出来。',vn:'Cảm xúc dồn nén cần được giải toả ra ngoài.'},
   items:[
     {word:'宣泄',points:[
       'Văn viết, trang nhã; nhấn việc GIẢI TOẢ cho nhẹ lòng, thường mang nghĩa lành mạnh, tích cực (哭泣、唱歌是宣泄情绪的方式).',
       'Ít khi đi với 拿 / 向 + người (không nhấn "trút lên ai").'
     ],ex:[{zh:'男人也需要宣泄情绪的空间。',vn:'Đàn ông cũng cần không gian để giải toả cảm xúc.'},
          {zh:'写日记是宣泄压力的好办法。',vn:'Viết nhật ký là cách hay để giải toả áp lực.'}]},
     {word:'发泄',points:[
       'Khẩu ngữ hơn, hay mang sắc thái tiêu cực: trút giận, trút bực lên người / vật khác: 发泄怒气, 拿别人发泄, 发泄在……身上.',
       'Hay đi với 怒气 / 不满 / 怨气.'
     ],ex:[{zh:'你心里不痛快，也不能拿孩子发泄。',vn:'Trong lòng cậu không vui cũng không được trút lên con.'},
          {zh:'他把所有的怒气都发泄在了同事身上。',vn:'Anh ta trút hết cơn giận lên đồng nghiệp.'}]}
   ],
   quiz:[
     {sentence:'你工作不顺，也不能拿家人＿＿啊！',options:['宣泄','发泄'],answer:1,why:'拿 + người + 发泄 = trút giận lên ai — sắc thái tiêu cực, chỉ dùng 发泄.'},
     {sentence:'心理专家认为，哭泣是一种健康的＿＿情绪的方式。',options:['宣泄','发泄'],answer:0,both:true,why:'Giải toả cảm xúc theo cách lành mạnh, văn phong trang trọng → 宣泄 hợp hơn; 发泄 cũng không sai.'},
     {sentence:'他把一肚子的怒气都＿＿在了服务员身上。',options:['宣泄','发泄'],answer:1,why:'把怒气发泄在 + người + 身上 = trút giận lên ai → 发泄.'},
     {sentence:'音乐让他压抑已久的感情得到了＿＿。',options:['宣泄','发泄'],answer:0,why:'Tình cảm được giải toả qua âm nhạc (tích cực, văn chương) → 宣泄.'}
   ]},

  {pair:'含糊 — 模糊',
   same:'Đều là tính từ, đều có nghĩa "không rõ ràng".',
   sameEx:{zh:'他给了一个很含糊／模糊的回答，谁也听不明白。',vn:'Anh ta đưa ra một câu trả lời rất mập mờ, chẳng ai hiểu nổi.'},
   items:[
     {word:'含糊',points:[
       'Chủ yếu tả LỜI NÓI, thái độ không rõ ràng (có khi cố ý úp mở): 含糊其辞, 说得很含糊.',
       'Còn nghĩa "qua loa, cẩu thả": 不能含糊, 真不含糊 (khen); có dạng lặp 含含糊糊.'
     ],ex:[{zh:'这是什么时候都不能含糊的。',vn:'Đây là điều lúc nào cũng không được qua loa.'},
          {zh:'问他去不去，他含含糊糊地说了句“再看吧”。',vn:'Hỏi anh ta có đi không, anh ta úp mở nói một câu "để xem đã".'}]},
     {word:'模糊',points:[
       'Chủ yếu tả HÌNH ẢNH, ký ức, nhận thức không rõ nét: 字迹模糊, 视线模糊, 记忆模糊, 模糊的印象.',
       'Còn làm động từ: 模糊了视线 (làm nhoà), 模糊界限; không có nghĩa "qua loa".'
     ],ex:[{zh:'泪水模糊了她的双眼。',vn:'Nước mắt làm nhoà đôi mắt cô ấy.'},
          {zh:'我对小时候的事只有一点儿模糊的印象。',vn:'Tôi chỉ có chút ấn tượng mờ nhạt về chuyện hồi nhỏ.'}]}
   ],
   quiz:[
     {sentence:'照片放了太久，上面的字迹都＿＿了。',options:['含糊','模糊'],answer:1,why:'Chữ viết, hình ảnh không rõ nét → 模糊.'},
     {sentence:'安全问题一点儿也不能＿＿。',options:['含糊','模糊'],answer:0,why:'不能含糊 = không được qua loa — nghĩa riêng của 含糊.'},
     {sentence:'泪水＿＿了他的视线。',options:['含糊','模糊'],answer:1,why:'Làm động từ mang tân ngữ (模糊了视线 = làm nhoà tầm nhìn) → chỉ 模糊.'},
     {sentence:'记者追问时，他总是＿＿其辞，不肯正面回答。',options:['含糊','模糊'],answer:0,why:'Thành ngữ 含糊其辞 = nói úp mở, tránh né.'}
   ]}
];

// ══════════════════════════════════════════
// BẮC CẦU HÁN–VIỆT
// ══════════════════════════════════════════
var hvBridgeData = {
  easy:[
    {zh:'理智',hv:'lý trí',vn:'có lý trí, tỉnh táo',note:'Trùng khít; 失去理智 = mất lý trí.'},
    {zh:'否决',hv:'phủ quyết',vn:'phủ quyết, bác bỏ',note:'Trùng khít; 否决权 = quyền phủ quyết.'},
    {zh:'魔鬼',hv:'ma quỷ',vn:'ma quỷ, ác quỷ',note:'Trùng khít.'},
    {zh:'神仙',hv:'thần tiên',vn:'thần tiên',note:'Trùng khít.'},
    {zh:'偏见',hv:'thiên kiến',vn:'thành kiến, định kiến',note:'Tiếng Việt "thiên kiến" = cách nhìn thiên lệch — trùng nghĩa.'},
    {zh:'岁月',hv:'tuế nguyệt',vn:'năm tháng',note:'Văn chương: "tuế nguyệt" = năm tháng.'},
    {zh:'激素',hv:'kích tố',vn:'hormone',note:'Tiếng Việt cũ gọi "kích thích tố" (hormone).'},
    {zh:'转移',hv:'chuyển di',vn:'chuyển, dời đi',note:'Gần "chuyển dời"; y học: 转移 = di căn.'},
    {zh:'修复',hv:'tu phục',vn:'phục hồi, tu bổ',note:'修 = tu (sửa), 复 = phục (khôi phục).'},
    {zh:'情理',hv:'tình lý',vn:'lẽ thường, lẽ phải',note:'在情理之中 = hợp tình hợp lý.'},
    {zh:'外界',hv:'ngoại giới',vn:'bên ngoài',note:'"Ngoại giới" = thế giới bên ngoài.'},
    {zh:'上进',hv:'thượng tiến',vn:'cầu tiến',note:'Tiếng Việt nói "cầu tiến" (求进).'},
    {zh:'倡导',hv:'xướng đạo',vn:'khởi xướng',note:'Gần "đề xướng" (提倡), "khởi xướng".'},
    {zh:'处境',hv:'xứ cảnh',vn:'cảnh ngộ, hoàn cảnh',note:'处 = xứ (chỗ ở), 境 = cảnh → tình cảnh mình đang ở.'},
    {zh:'背叛',hv:'bối bạn',vn:'phản bội',note:'Tiếng Việt đảo trật tự: "phản bội" (叛背).'},
    {zh:'抱负',hv:'bão phụ',vn:'hoài bão',note:'Gần "hoài bão" (怀抱) — ôm ấp chí lớn.'},
    {zh:'沉淀',hv:'trầm điến',vn:'lắng đọng',note:'Cùng họ với "trầm tích" (沉积); 淀 = lắng.'},
    {zh:'光彩',hv:'quang thái',vn:'rực rỡ, vẻ vang',note:'光 = quang (ánh sáng), 彩 = thái (màu sắc).'}
  ],
  idiom:[
    {zh:'潜移默化',hv:'tiềm di mặc hoá',vn:'âm thầm biến đổi, ngấm dần',note:'潜 = ngầm, 移 = dời, 默 = lặng lẽ, 化 = biến hoá.'},
    {zh:'顶天立地',hv:'đỉnh thiên lập địa',vn:'đội trời đạp đất',note:'Hình ảnh người đàn ông hiên ngang, khí phách.'},
    {zh:'喜怒哀乐',hv:'hỉ nộ ai lạc',vn:'vui giận buồn sướng',note:'Tiếng Việt quen nói "hỉ nộ ái ố" (喜怒爱恶) — gần nghĩa.'},
    {zh:'无精打采',hv:'vô tinh đả thái',vn:'uể oải, rã rời',note:'无精 = không có tinh thần → ỉu xìu.'},
    {zh:'说三道四',hv:'thuyết tam đạo tứ',vn:'nói ra nói vào',note:'Chỉ trỏ, bàn tán lung tung về người khác.'},
    {zh:'男儿有泪不轻弹',hv:'nam nhi hữu lệ bất khinh đàn',vn:'nam nhi có lệ không dễ rơi',note:'弹 = đàn (búng, gạt nước mắt); 轻 = khinh (dễ dàng).'}
  ],
  trap:[
    {zh:'打击',hv:'đả kích',vn:'cú sốc; đánh, trấn áp',
     warn:'"Đả kích" tiếng Việt = châm biếm, phê phán gay gắt. 打击 chủ yếu là CÚ SỐC tinh thần (受到打击 = bị sốc) hoặc trấn áp (打击犯罪).'},
    {zh:'体面',hv:'thể diện',vn:'đàng hoàng, vẻ vang; chỉnh tề',
     warn:'"Thể diện" tiếng Việt là danh từ (giữ thể diện ≈ 面子). 体面 hay làm TÍNH TỪ: 体面的工作 = việc làm đàng hoàng, 穿得很体面 = ăn mặc chỉnh tề.'},
    {zh:'含糊',hv:'hàm hồ',vn:'mập mờ; qua loa',
     warn:'"Hàm hồ" tiếng Việt = nói bừa, không căn cứ. 含糊 = mập mờ, không rõ; 不能含糊 = không được qua loa.'},
    {zh:'恶心',hv:'ác tâm',vn:'buồn nôn; ghê tởm',
     warn:'"Ác tâm" tiếng Việt = lòng độc ác. 恶心 (ě) = buồn nôn, hoặc đáng ghê tởm — không liên quan đến "độc ác".'},
    {zh:'抹杀',hv:'mạt sát',vn:'gạt bỏ, phủ nhận',
     warn:'"Mạt sát" tiếng Việt = chửi bới, nhục mạ. 抹杀 = gạt bỏ, xoá bỏ (成绩, 功劳): 不要抹杀痛苦的功劳.'},
    {zh:'健全',hv:'kiện toàn',vn:'khoẻ mạnh, hoàn thiện',
     warn:'"Kiện toàn" tiếng Việt thường là động từ (kiện toàn bộ máy). 健全 hay là TÍNH TỪ: 健全的情感 = tình cảm lành mạnh, 四肢健全 = chân tay lành lặn.'},
    {zh:'尊严',hv:'tôn nghiêm',vn:'phẩm giá, danh dự',
     warn:'"Tôn nghiêm" tiếng Việt tả không khí trang nghiêm (≈ 庄严). 尊严 chủ yếu là PHẨM GIÁ: 丧失尊严 = đánh mất phẩm giá.'},
    {zh:'出息',hv:'xuất tức',vn:'tiền đồ, sự nên người',
     warn:'Âm "xuất tức" không dùng trong tiếng Việt, đừng đoán theo "tức" (hơi thở / tin tức). 有出息 = nên người, 没出息 = chẳng ra gì.'},
    {zh:'宣泄',hv:'tuyên tiết',vn:'giải toả, trút ra',
     warn:'Không phải "tuyên bố" gì cả: 泄 = tiết ra, rò ra → 宣泄情绪 = trút / giải toả cảm xúc.'}
  ]
};

// ══════════════════════════════════════════
// GHÉP TỪ — cụm trong bài khoá
// ══════════════════════════════════════════
var matchData = [
  {left:'不背叛',right:'朋友'},
  {left:'心胸',right:'开阔'},
  {left:'处境艰难而不',right:'退缩'},
  {left:'面对打击而不',right:'脆弱'},
  {left:'生活中的',right:'榜样'},
  {left:'顶天立地，',right:'光彩照人'},
  {left:'被一票',right:'否决'},
  {left:'从娃娃时代就',right:'潜移默化'},
  {left:'被古训',right:'鞭策着'},
  {left:'在生活中扮演',right:'强者'},
  {left:'有血有肉、有健全',right:'情感'},
  {left:'再有力的肩膀也会被',right:'压塌'},
  {left:'分泌痛苦',right:'激素'},
  {left:'把情绪压力',right:'转移掉'},
  {left:'一把鼻涕一把',right:'泪'},
  {left:'伤心难过之际，不妨',right:'痛哭'},
  {left:'宣泄情绪的',right:'许可证'},
  {left:'男人流泪本在情理',right:'之中'},
  {left:'狭隘的',right:'偏见'},
  {left:'并不丧失',right:'尊严'},
  {left:'不必理睬别人',right:'说三道四'},
  {left:'沉淀出',right:'智慧'}
];

// ══════════════════════════════════════════
// ĐIỀN TỪ
// ══════════════════════════════════════════
var fillData = [
  {pre:'他从小就立志当一名科学家，是个很有',blank:'抱负',post:'的年轻人。',hint:'(hoài bão)',ans:'抱负'},
  {pre:'公司现在的',blank:'处境',post:'十分艰难，大家必须团结起来渡过难关。',hint:'(cảnh ngộ)',ans:'处境'},
  {pre:'哥哥学习刻苦，为人正直，一直是我学习的',blank:'榜样',post:'。',hint:'(tấm gương)',ans:'榜样'},
  {pre:'晚会上，她穿着一身红色的旗袍，显得',blank:'光彩',post:'照人。',hint:'(rạng rỡ)',ans:'光彩'},
  {pre:'电影结束时，很多观众都在低声',blank:'哭泣',post:'。',hint:'(khóc thút thít)',ans:'哭泣'},
  {pre:'由于大多数人反对，这个方案最终被',blank:'否决',post:'了。',hint:'(bác bỏ)',ans:'否决'},
  {pre:'爷爷常说：“只要肯吃苦，将来一定会有',blank:'出息',post:'的。”',hint:'(nên người)',ans:'出息'},
  {pre:'专家认为，良好的生活习惯要从',blank:'娃娃',post:'抓起。',hint:'(trẻ nhỏ)',ans:'娃娃'},
  {pre:'父母的言行会',blank:'潜移默化',post:'地影响孩子的性格。',hint:'(âm thầm, ngấm dần)',ans:'潜移默化'},
  {pre:'在这部话剧中，他',blank:'扮演',post:'一位严厉的父亲。',hint:'(đóng vai)',ans:'扮演'},
  {pre:'他发音不准，却从不怕被别人',blank:'讥笑',post:'，每天大声朗读课文。',hint:'(chế giễu)',ans:'讥笑'},
  {pre:'我晕船晕得厉害，一上船就',blank:'恶心',post:'想吐。',hint:'(buồn nôn)',ans:'恶心'},
  {pre:'毕业后他在银行找了一份',blank:'体面',post:'的工作，父母很满意。',hint:'(đàng hoàng)',ans:'体面'},
  {pre:'为了备战比赛，教练对队员们进行了三个月的',blank:'魔鬼',post:'训练。',hint:'("ma quỷ" — cực khắc nghiệt)',ans:'魔鬼'},
  {pre:'我又不是',blank:'神仙',post:'，怎么知道他什么时候回来？',hint:'(thần tiên)',ans:'神仙'},
  {pre:'地震中，这座老楼',blank:'塌',post:'了一半，幸好没有人受伤。',hint:'(sập)',ans:'塌'},
  {pre:'多运动身体就会越来越好，',blank:'反之',post:'，身体就会越来越差。',hint:'(ngược lại)',ans:'反之'},
  {pre:'青春期孩子情绪波动大，这与体内',blank:'激素',post:'的变化有关。',hint:'(hormone)',ans:'激素'},
  {pre:'他昨天感冒了，今天',blank:'喉咙',post:'疼得说不出话来。',hint:'(cổ họng)',ans:'喉咙'},
  {pre:'天一冷，弟弟就开始流',blank:'鼻涕',post:'、打喷嚏。',hint:'(nước mũi)',ans:'鼻涕'},
  {pre:'值此新年到来',blank:'之际',post:'，祝大家万事如意。',hint:'(nhân dịp)',ans:'之际'},
  {pre:'他第一次离开父母，想家也在',blank:'情理',post:'之中。',hint:'(lẽ thường)',ans:'情理'},
  {pre:'在很多地方，人们',blank:'忌讳',post:'在别人家里说不吉利的话。',hint:'(kiêng kỵ)',ans:'忌讳'},
  {pre:'他把自己关在房间里，不愿意与',blank:'外界',post:'接触。',hint:'(bên ngoài)',ans:'外界'},
  {pre:'心胸',blank:'狭隘',post:'的人很难真正和别人合作。',hint:'(hẹp hòi)',ans:'狭隘'},
  {pre:'我们不应该因为一个人的外表就对他产生',blank:'偏见',post:'。',hint:'(thành kiến)',ans:'偏见'},
  {pre:'即使再穷，他也不愿意放弃做人的',blank:'尊严',post:'。',hint:'(phẩm giá)',ans:'尊严'},
  {pre:'她跟我生气了，一整天都不',blank:'理睬',post:'我。',hint:'(để ý)',ans:'理睬'},
  {pre:'洪水',blank:'淹没',post:'了大片农田，村民们损失很大。',hint:'(nhấn chìm)',ans:'淹没'},
  {pre:'参观博物馆以前，请先阅读游客',blank:'须知',post:'。',hint:'(những điều cần biết)',ans:'须知'},
  {pre:'',blank:'岁月',post:'在奶奶的脸上留下了深深的痕迹。',hint:'(năm tháng)',ans:'岁月'},
  {pre:'经过多年的',blank:'沉淀',post:'，他的文章越来越有深度了。',hint:'(lắng đọng)',ans:'沉淀'}
];

// ══════════════════════════════════════════
// SẮP XẾP CÂU — mỗi điểm ngữ pháp (哪怕 · 反之) ít nhất 2 câu
// ══════════════════════════════════════════
var sortData = [
  {words:['哪怕','遭受打击','，','也','一定要','坚强','。'],ans:'哪怕遭受打击，也一定要坚强。',audio:'哪怕遭受打击，也一定要坚强。'},
  {words:['她真的老了','，','哪怕','两三天以前的事情','，','也会','记不清','。'],ans:'她真的老了，哪怕两三天以前的事情，也会记不清。',audio:'她真的老了，哪怕两三天以前的事情，也会记不清。'},
  {words:['我们','一定会','尽全力','抢救病人','，','哪怕','只有','一线希望','。'],ans:'我们一定会尽全力抢救病人，哪怕只有一线希望。',audio:'我们一定会尽全力抢救病人，哪怕只有一线希望。'},
  {words:['衣服','只要干净就行','，','哪怕','旧点儿','也','没关系','。'],ans:'衣服只要干净就行，哪怕旧点儿也没关系。',audio:'衣服只要干净就行，哪怕旧点儿也没关系。'},
  {words:['雨水多','，','气候就比较湿润','，','反之','，','气候就比较干燥','。'],ans:'雨水多，气候就比较湿润，反之，气候就比较干燥。',audio:'雨水多，气候就比较湿润，反之，气候就比较干燥。'},
  {words:['不断地积累','，','经验就会丰富起来','，','反之','，','永远不会有经验可谈','。'],ans:'不断地积累，经验就会丰富起来，反之，永远不会有经验可谈。',audio:'不断地积累，经验就会丰富起来，反之，永远不会有经验可谈。'},
  {words:['一切从实际出发','，','事业就能顺利发展','，','反之','，','就会遇到挫折','。'],ans:'一切从实际出发，事业就能顺利发展，反之，就会遇到挫折。',audio:'一切从实际出发，事业就能顺利发展，反之，就会遇到挫折。'},
  {words:['伤心难过','之际','，','不妨','痛哭','。'],ans:'伤心难过之际，不妨痛哭。',audio:'伤心难过之际，不妨痛哭。'},
  {words:['宣泄','归','宣泄','，','哭泣时间','不要','超过15分钟','。'],ans:'宣泄归宣泄，哭泣时间不要超过15分钟。',audio:'宣泄归宣泄，哭泣时间不要超过15分钟。'},
  {words:['男人流泪','不等于','软弱无用','，','也','并不','丧失尊严','。'],ans:'男人流泪不等于软弱无用，也并不丧失尊严。',audio:'男人流泪不等于软弱无用，也并不丧失尊严。'},
  {words:['快乐','往往是','短暂的','，','而','悲伤','却可以','沉淀出智慧','。'],ans:'快乐往往是短暂的，而悲伤却可以沉淀出智慧。',audio:'快乐往往是短暂的，而悲伤却可以沉淀出智慧。'},
  {words:['男人','不是魔鬼','，','也不是神仙','，','他们','也是','有血有肉的人','。'],ans:'男人不是魔鬼，也不是神仙，他们也是有血有肉的人。',audio:'男人不是魔鬼，也不是神仙，他们也是有血有肉的人。'}
];

// ══════════════════════════════════════════
// CHỌN TỪ THÍCH HỢP
// ══════════════════════════════════════════
var errorFixMode = 'wordchoice';
var errorFixData = [
  {wrong:'他为了钱____了最信任他的朋友。',opts:['背叛','违背','反对','放弃'],ans:0,
   exp:'背叛 + người = phản bội ai. 违背 (bài 29) + 原则 / 诺言 = làm trái; 反对 = phản đối (ý kiến); 放弃 = từ bỏ.'},
  {wrong:'这孩子很____，每天都主动学习到很晚。',opts:['上升','上进','前进','进步'],ans:1,
   exp:'很上进 = rất cầu tiến (tả chí hướng, tính cách). 上升 = tăng lên (nhiệt độ, giá cả); 前进 = tiến lên phía trước; 进步 = tiến bộ (chỉ kết quả, không tả chí hướng).'},
  {wrong:'新校长很有____，一上任就进行了大胆的改革。',opts:['魅力','能力','魄力','压力'],ans:2,
   exp:'有魄力 = quyết đoán, dám làm — hợp với 大胆的改革. 魅力 = sức hấp dẫn; 能力 = năng lực (không nhấn "dám quyết"); 压力 = áp lực.'},
  {wrong:'站在山顶上，视野一下子____起来。',opts:['开放','开展','打开','开阔'],ans:3,
   exp:'视野开阔 = tầm nhìn rộng mở. 开放 = mở cửa (chính sách, công viên); 开展 = triển khai (hoạt động); 打开 = mở (cửa, hộp).'},
  {wrong:'比赛失利对他是一个沉重的____，他好几天都没说话。',opts:['打击','打扰','攻击','冲击'],ans:0,
   exp:'沉重的打击 = cú sốc nặng nề. 打扰 = làm phiền; 攻击 = tấn công (quân sự, lời lẽ); 冲击 (bài 24) = tác động mạnh (冲击市场), không nói "một cú 冲击 khiến anh ấy im lặng".'},
  {wrong:'她的心理比较____，一听到批评就哭。',opts:['柔软','脆弱','虚弱','薄弱'],ans:1,
   exp:'心理脆弱 = tâm lý yếu, dễ tổn thương. 柔软 = mềm mại (vật chất); 虚弱 = (cơ thể) yếu ớt; 薄弱 = yếu, mỏng (环节 / 基础).'},
  {wrong:'遇到突发事件，一定要保持____，千万别慌。',opts:['理想','理由','理智','道理'],ans:2,
   exp:'保持理智 = giữ lý trí. 理想 = lý tưởng; 理由 = lý do; 道理 = đạo lý, lẽ.'},
  {wrong:'老师的批评对我来说是一种____，让我更加努力。',opts:['打击','压迫','批准','鞭策'],ans:3,
   exp:'是一种鞭策 = là sự thúc đẩy (khiến cố gắng hơn). 打击 = làm nản (trái với 更加努力); 压迫 (bài 27) = áp bức; 批准 = phê chuẩn.'},
  {wrong:'时代____了我们这一代人新的使命。',opts:['赋予','给予','授予','赠送'],ans:0,
   exp:'赋予 + người + 使命 / 权利 / 意义 = trao cho (điều lớn lao, trừu tượng). 给予 + 帮助 / 支持 (thường không mang hai tân ngữ); 授予 + 称号 / 学位 = trao danh hiệu; 赠送 = tặng quà.'},
  {wrong:'他这种不劳而获的行为被大家____。',opts:['重视','鄙视','忽视','注视'],ans:1,
   exp:'被……鄙视 = bị khinh bỉ (hành vi xấu 不劳而获 — 练习2). 重视 = coi trọng; 忽视 = xem nhẹ; 注视 = nhìn chăm chú.'},
  {wrong:'安全问题关系到每个人的生命，一点儿也不能____。',opts:['模糊','含蓄','含糊','含义'],ans:2,
   exp:'不能含糊 = không được qua loa (词语辨析 含糊—模糊). 模糊 = mờ, không rõ nét (字迹 / 记忆); 含蓄 = hàm súc, kín đáo; 含义 (bài 28) = hàm ý.'},
  {wrong:'我们要摆脱旧观念的____，大胆地去尝试新事物。',opts:['限度','拘束','结束','束缚'],ans:3,
   exp:'摆脱……的束缚 = thoát khỏi sự trói buộc (观念, 传统). 限度 = giới hạn; 拘束 = gò bó, rụt rè (别拘束); 结束 = kết thúc.'},
  {wrong:'这家公司的管理制度还不____，所以常常出问题。',opts:['健全','健康','安全','完全'],ans:0,
   exp:'制度健全 = chế độ hoàn chỉnh (không phải "kiện toàn" động từ). 健康 = khoẻ mạnh (người); 安全 = an toàn; 完全 = hoàn toàn (phó từ).'},
  {wrong:'一问到成绩，他就赶紧____话题。',opts:['转变','转移','转告','转达'],ans:1,
   exp:'转移话题 = lảng sang chuyện khác. 转变 = chuyển biến (观念, 态度); 转告 = nhắn lại cho ai; 转达 (bài 27) = chuyển lời.'},
  {wrong:'专家们花了三年时间，终于把这幅古画____好了。',opts:['修改','恢复','修复','修理'],ans:2,
   exp:'修复 + 文物 / 古画 = phục chế, tu bổ. 修改 = sửa (bài văn, kế hoạch); 恢复 = khôi phục (健康 / 秩序), không nói 把古画恢复好; 修理 = sửa (máy móc, xe).'},
  {wrong:'哭泣是____情绪的一种健康方式。',opts:['宣传','宣布','泄露','宣泄'],ans:3,
   exp:'宣泄情绪 = giải toả cảm xúc. 宣传 = tuyên truyền; 宣布 = tuyên bố; 泄露 (bài 27) = làm lộ (bí mật).'},
  {wrong:'开饭馆必须先申请卫生____证。',opts:['许可','允许','同意','批准'],ans:0,
   exp:'许可证 = giấy phép — 许可 bổ nghĩa được cho danh từ; không có 允许证 (词语辨析 许可—允许). 同意 = đồng ý; 批准 = phê chuẩn (không nói 批准证).'},
  {wrong:'政府大力____绿色出行，鼓励大家少开车。',opts:['指导','倡导','引导','领导'],ans:1,
   exp:'倡导 + 生活方式 / 风尚 = khởi xướng, kêu gọi. 指导 = chỉ đạo, hướng dẫn chuyên môn; 引导 (bài 22) = dẫn dắt (thường + người: 引导学生); 领导 = lãnh đạo.'},
  {wrong:'他们要结婚时，双方家长百般____，但两人最终还是走到了一起。',opts:['阻碍','组织','阻挠','阻力'],ans:2,
   exp:'百般阻挠 = ra sức ngăn cản (cố ý). 阻碍 (bài 22) = cản trở (thường do khách quan: 阻碍发展); 组织 = tổ chức; 阻力 = lực cản (danh từ).'},
  {wrong:'他这次虽然失败了，但不能因此____他以前的成绩。',opts:['删除','取消','消灭','抹杀'],ans:3,
   exp:'抹杀 + 成绩 / 功劳 = phủ nhận, gạt bỏ (không phải "mạt sát"). 删除 = xoá (văn bản, dữ liệu); 取消 = huỷ bỏ (hoạt động, tư cách); 消灭 (bài 23) = tiêu diệt.'}
];



// ══════════════════════════════════════════
// DỊCH — câu ghép, ôn từ HSK 6 bài 1–31 và HSK 4–5
// ══════════════════════════════════════════
var translateData = [
  {vi:'Dù gặp cú sốc lớn đến đâu, anh ấy cũng chưa bao giờ để lộ mặt yếu đuối trước người nhà, vì anh ấy là chỗ dựa của cả gia đình.',zh:'哪怕遭受再大的打击，他也从不在家人面前表现出脆弱的一面，因为他是全家的靠山。',py:'Nǎpà zāoshòu zài dà de dǎjī, tā yě cóng bú zài jiārén miànqián biǎoxiàn chū cuìruò de yí miàn, yīnwèi tā shì quán jiā de kàoshān.',goiY:['哪怕……也……','遭受打击','脆弱的一面','靠山'],giai:'哪怕 + 再 + Adj + 的 N，也…… = dù … đến đâu cũng … (điểm ngữ pháp 1); "cú sốc" = 打击 (không phải "đả kích"); "chỗ dựa" = 靠山 (bài khoá).'},
  {vi:'Thực tế cho thấy, dồn nén cảm xúc lâu dài chỉ có hại cho sức khoẻ; ngược lại, giải toả đúng mức sẽ khiến tâm trạng trở nên bình hoà hơn.',zh:'事实表明，长期压抑情绪对健康只有坏处；反之，适当地宣泄会让心情变得更平和。',py:'Shìshí biǎomíng, chángqī yāyì qíngxù duì jiànkāng zhǐyǒu huàichù; fǎnzhī, shìdàng de xuānxiè huì ràng xīnqíng biàn de gèng pínghé.',goiY:['事实表明','压抑','反之','宣泄'],giai:'反之 = ngược lại, nối hai vế đối lập, sau có dấu phẩy (điểm ngữ pháp 2); "giải toả" = 宣泄 (văn viết); 适当地 + V làm trạng ngữ.'},
  {vi:'Sở dĩ nhiều người đàn ông không dám khóc là vì họ sợ bị người khác coi thường và chế giễu.',zh:'很多男人之所以不敢哭，是因为他们怕被别人鄙视和讥笑。',py:'Hěn duō nánrén zhī suǒyǐ bù gǎn kū, shì yīnwèi tāmen pà bèi biérén bǐshì hé jīxiào.',goiY:['之所以……是因为……','鄙视','讥笑'],giai:'之所以……是因为…… = sở dĩ … là vì … (HSK 5); bị động 被 + 别人 + V; 鄙视 / 讥笑 đều là văn viết, mạnh hơn 看不起 / 笑话.'},
  {vi:'Thói quen của cha mẹ sẽ âm thầm ảnh hưởng đến con cái, vì vậy giáo dục phải bắt đầu từ khi trẻ còn nhỏ.',zh:'父母的习惯会潜移默化地影响孩子，所以教育要从娃娃抓起。',py:'Fùmǔ de xíguàn huì qiányí-mòhuà de yǐngxiǎng háizi, suǒyǐ jiàoyù yào cóng wáwa zhuā qǐ.',goiY:['潜移默化地','从娃娃抓起'],giai:'"âm thầm ảnh hưởng" = 潜移默化地影响 (thành ngữ + 地 làm trạng ngữ); 从娃娃抓起 = bắt đầu từ lúc còn bé (đáp án sách 练习2 (1)).'},
  {vi:'Giải toả thì giải toả, nhưng khóc tốt nhất không nên quá mười lăm phút, nếu không ngược lại còn hại dạ dày.',zh:'宣泄归宣泄，哭泣最好不要超过十五分钟，否则反而会伤害肠胃。',py:'Xuānxiè guī xuānxiè, kūqì zuìhǎo bú yào chāoguò shíwǔ fēnzhōng, fǒuzé fǎn\'ér huì shānghài chángwèi.',goiY:['A归A','哭泣','否则','反而'],giai:'A归A (bài 18) = … thì …, nhưng …; 否则 = nếu không; 反而 = ngược lại (kết quả trái mong đợi).'},
  {vi:'Muốn xoá bỏ định kiến hẹp hòi ấy thì trước tiên chúng ta phải vứt bỏ quan niệm truyền thống "nam nhi có lệ không dễ rơi".',zh:'要想消除这种狭隘的偏见，我们首先得扔掉“男儿有泪不轻弹”的传统观念。',py:'Yào xiǎng xiāochú zhè zhǒng xiá\'ài de piānjiàn, wǒmen shǒuxiān děi rēngdiào “nán\'ér yǒu lèi bù qīng tán” de chuántǒng guānniàn.',goiY:['要想……首先……','消除','狭隘','偏见'],giai:'"định kiến hẹp hòi" = 狭隘的偏见; "xoá bỏ" = 消除 (bài 23); 得 đọc děi = phải.'},
  {vi:'Ai cũng có lúc yếu đuối, nếu lúc nào cũng dồn nén bản thân thì người kiên cường đến mấy cũng có ngày bị áp lực đè sụp.',zh:'谁都有脆弱的时候，如果总是压抑自己，再坚强的人也有被压力压塌的一天。',py:'Shéi dōu yǒu cuìruò de shíhou, rúguǒ zǒngshì yāyì zìjǐ, zài jiānqiáng de rén yě yǒu bèi yālì yātā de yì tiān.',goiY:['谁都……','脆弱','再……也……','压塌'],giai:'谁都 = ai cũng; 再 + Adj + 的人也…… = người … đến mấy cũng …; 被压力压塌 = bị áp lực đè sụp (bài khoá: 再有力的肩膀也有被压塌的时候).'},
  {vi:'Nhân dịp tốt nghiệp, em muốn cảm ơn các thầy cô; chính sự động viên và thúc giục của thầy cô đã giúp em không bỏ dở nửa chừng.',zh:'值此毕业之际，我要感谢老师们，正是你们的鼓励和鞭策，才让我没有半途而废。',py:'Zhí cǐ bìyè zhījì, wǒ yào gǎnxiè lǎoshīmen, zhèng shì nǐmen de gǔlì hé biāncè, cái ràng wǒ méiyǒu bàntú\'érfèi.',goiY:['值此……之际','鞭策','正是……才……','半途而废'],giai:'值此……之际 = nhân dịp … (trang trọng); 鼓励和鞭策 là cụm quen dùng; 半途而废 (bài 31); 正是……才…… nhấn "chính … mới …".'},
  {vi:'Không cần để ý người khác nói ra nói vào, chỉ cần không làm chuyện chẳng đàng hoàng thì sẽ không đánh mất phẩm giá.',zh:'不必理睬别人说三道四，只要不做不体面的事，就不会丧失尊严。',py:'Búbì lǐcǎi biérén shuō sān dào sì, zhǐyào bú zuò bù tǐmiàn de shì, jiù bú huì sàngshī zūnyán.',goiY:['不必理睬','说三道四','只要……就……','体面','尊严'],giai:'理睬 hầu như dùng phủ định (不必理睬); 只要……就…… = chỉ cần … thì …; "phẩm giá" = 尊严 (không phải "tôn nghiêm" = trang nghiêm).'},
  {vi:'Đã là nỗi buồn không thể tránh khỏi thì hãy đối mặt với nó cho tốt, vì năm tháng sẽ khiến những nỗi đau ấy lắng đọng thành trí tuệ.',zh:'既然悲伤无法避免，就应该好好面对它，因为岁月会让这些痛苦沉淀成智慧。',py:'Jìrán bēishāng wúfǎ bìmiǎn, jiù yīnggāi hǎohǎo miànduì tā, yīnwèi suìyuè huì ràng zhèxiē tòngkǔ chéndiàn chéng zhìhuì.',goiY:['既然……就……','岁月','沉淀'],giai:'既然……就…… = đã … thì … (HSK 5); 沉淀成 / 沉淀出 + 智慧 = lắng đọng thành trí tuệ; 岁月 (văn chương) = năm tháng.'}
];

// Chiều Trung → Việt — bám ý bài khoá
var translateDataRev = [
  {vi:'Cho đến hôm nay, tiêu chuẩn của xã hội chúng ta về một người đàn ông tốt chưa từng thay đổi.',zh:'到今天为止，我们的社会对好男人的标准从没有改变过。',py:'Dào jīntiān wéizhǐ, wǒmen de shèhuì duì hǎo nánrén de biāozhǔn cóng méiyǒu gǎibiànguo.',goiY:['到……为止 = cho đến …','从没有……过 = chưa từng'],giai:'对……的标准 = tiêu chuẩn đối với … → dịch "tiêu chuẩn về …" cho tự nhiên.'},
  {vi:'Đàn ông phải có tu dưỡng, lòng dạ rộng mở, hoàn cảnh gian nan mà không lùi bước, đối mặt cú sốc mà không yếu đuối.',zh:'男人要有修养，心胸开阔，处境艰难而不退缩，面对打击而不脆弱。',py:'Nánrén yào yǒu xiūyǎng, xīnxiōng kāikuò, chǔjìng jiānnán ér bú tuìsuō, miànduì dǎjī ér bú cuìruò.',goiY:['心胸开阔 = lòng dạ rộng mở','处境 = cảnh ngộ','打击 = cú sốc','而不 = mà không'],giai:'A 而不 B = A mà không B (văn viết); 打击 ở đây là cú sốc tinh thần, không dịch "đả kích".'},
  {vi:'Nam tử hán có lý trí thì dù buồn đến mấy cũng không dễ dàng khóc lóc; đàn ông hay khóc thì đi đâu cũng bị gạt bỏ ngay.',zh:'理智的男子汉再悲伤也不轻易哭泣，爱哭的男人走到哪儿都会被一票否决。',py:'Lǐzhì de nánzǐhàn zài bēishāng yě bù qīngyì kūqì, ài kū de nánrén zǒudào nǎr dōu huì bèi yí piào fǒujué.',goiY:['再……也…… = dù … đến mấy cũng','一票否决 = bị gạt bỏ ngay'],giai:'一票否决 nghĩa đen "một phiếu phủ quyết", nghĩa bóng: chỉ vì một điểm mà bị loại hẳn — dịch thoát "bị gạt bỏ ngay".'},
  {vi:'Kiểu giáo dục này đã âm thầm phát huy tác dụng từ thời còn bé tí, ngày nào họ cũng bị những lời răn dạy cổ xưa như thế thúc giục.',zh:'这种教育是从娃娃时代就潜移默化地在起作用了，他们天天被这样的古训鞭策着。',py:'Zhè zhǒng jiàoyù shì cóng wáwa shídài jiù qiányí-mòhuà de zài qǐ zuòyòng le, tāmen tiāntiān bèi zhèyàng de gǔxùn biāncèzhe.',goiY:['娃娃时代 = thời bé tí','潜移默化 = âm thầm, ngấm dần','鞭策 = thúc giục'],giai:'被……鞭策着 = bị … thúc giục (trạng thái kéo dài); 古训 = lời răn dạy của người xưa.'},
  {vi:'Văn hoá của chúng ta đã khoác cho đàn ông hình tượng to lớn, kiên cường; trong cuộc sống họ buộc phải đóng vai kẻ mạnh.',zh:'我们的文化赋予了男人高大、坚强的形象，他们在生活中必须扮演强者。',py:'Wǒmen de wénhuà fùyǔle nánrén gāodà, jiānqiáng de xíngxiàng, tāmen zài shēnghuó zhōng bìxū bànyǎn qiángzhě.',goiY:['赋予 = trao cho, khoác cho','扮演 = đóng vai','强者 = kẻ mạnh'],giai:'赋予……形象 dịch "khoác cho … hình tượng" cho tự nhiên; 必须 = buộc phải.'},
  {vi:'Đàn ông không phải ác quỷ, cũng chẳng phải thần tiên, họ cũng là con người bằng xương bằng thịt, có tình cảm lành mạnh đầy đủ.',zh:'男人不是魔鬼，也不是神仙，他们也是有血有肉、有健全情感的人。',py:'Nánrén bú shì móguǐ, yě bú shì shénxiān, tāmen yě shì yǒu xuè yǒu ròu, yǒu jiànquán qínggǎn de rén.',goiY:['有血有肉 = bằng xương bằng thịt','健全 = lành mạnh, đầy đủ'],giai:'有血有肉 dịch bằng thành ngữ tương đương "bằng xương bằng thịt"; 健全 không dịch "kiện toàn".'},
  {vi:'Khi cảm xúc u uất, con người tiết ra một chất gọi là "hormone đau khổ", mà nước mắt lại chính là thứ có thể thải nó ra khỏi cơ thể.',zh:'人在情绪抑郁时会分泌一种被称为痛苦激素的物质，眼泪恰恰可以将它排出体外。',py:'Rén zài qíngxù yìyù shí huì fēnmì yì zhǒng bèi chēngwéi tòngkǔ jīsù de wùzhì, yǎnlèi qiàqià kěyǐ jiāng tā páichū tǐ wài.',goiY:['分泌 = tiết ra','激素 = hormone','恰恰 = chính là'],giai:'被称为 = được gọi là; 将 = 把 (văn viết); 恰恰 nhấn "đúng là, chính là".'},
  {vi:'Những lúc đau lòng buồn bã, cứ việc khóc thật to; khóc xong rồi, mọi thứ đều được phục hồi.',zh:'伤心难过之际，不妨痛哭，哭完了，一切都得到了修复。',py:'Shāngxīn nánguò zhījì, bùfáng tòngkū, kūwán le, yíqiè dōu dédàole xiūfù.',goiY:['之际 = lúc','不妨 = cứ việc','修复 = phục hồi'],giai:'不妨 (bài 12) = cứ … cũng chẳng sao; 得到了修复 dịch bị động "được phục hồi".'},
  {vi:'Đừng ngăn cản đàn ông rơi lệ; đàn ông rơi lệ không có nghĩa là yếu đuối vô dụng, cũng chẳng hề đánh mất phẩm giá.',zh:'不要阻挠男人流泪，男人流泪不等于软弱无用，也并不丧失尊严。',py:'Bú yào zǔnáo nánrén liú lèi, nánrén liú lèi bù děngyú ruǎnruò wúyòng, yě bìng bú sàngshī zūnyán.',goiY:['阻挠 = ngăn cản','不等于 = không có nghĩa là','尊严 = phẩm giá'],giai:'并不 nhấn phủ định → "chẳng hề"; 尊严 dịch "phẩm giá" (không dịch "tôn nghiêm").'},
  {vi:'Phải biết rằng, sự trưởng thành thật sự của mỗi người thường đến từ đau khổ, gian nan; đừng gạt bỏ công lao của nỗi đau trong quá trình trưởng thành của chúng ta.',zh:'须知，真正的个人成长往往来自于痛苦、磨难，不要抹杀掉痛苦在我们成长中的功劳。',py:'Xūzhī, zhēnzhèng de gèrén chéngzhǎng wǎngwǎng lái zì yú tòngkǔ, mónàn, bú yào mǒshā diào tòngkǔ zài wǒmen chéngzhǎng zhōng de gōngláo.',goiY:['须知 = phải biết rằng','抹杀 = gạt bỏ','功劳 = công lao'],giai:'抹杀 không dịch "mạt sát"; 来自于 = đến từ; 功劳 (bài 23).'}
];


// ══════════════════════════════════════════
// LUYỆN VIẾT — đề 运用 · 写一写 của sách (tr. 130): 缩写 bài khoá thành đoạn văn ~400 chữ, tham khảo 练习5
// ══════════════════════════════════════════
var writingData = {
  kieu:'sgk', soChu:400,
  de:'“男儿有泪不轻弹”是一种传统观念，教育男人无论多么悲伤都不要轻易哭泣，可其实这并不科学，男人的压力和情绪也需要宣泄，“哭”是情绪释放的一种方式，哭有益于健康，男人不妨一哭。请参考练习5，把课文缩写成400字左右的短文。',
  prompt:'"Nam nhi có lệ không dễ rơi" là một quan niệm truyền thống, dạy đàn ông dù buồn đến đâu cũng đừng dễ dàng khóc; nhưng thật ra điều đó không khoa học — áp lực và cảm xúc của đàn ông cũng cần được giải toả, "khóc" là một cách giải toả cảm xúc, khóc có lợi cho sức khoẻ, đàn ông cứ việc khóc. Hãy tham khảo bài tập 5, viết tóm tắt bài khoá thành đoạn văn khoảng 400 chữ.',
  dan:[
    {hoi:'社会对好男人的标准是什么？',goiY:'男人要……；要……；要……；要……；是……。总之……'},
    {hoi:'为什么“男儿有泪不轻弹”？',goiY:'理智的男子汉……，爱哭的男人……，男人流泪意味着……。这种教育……，……赋予男人……'},
    {hoi:'为了不被讥笑，男人经常怎么办？',goiY:'为了不被……，不被……，为了远离……，……叮嘱自己……'},
    {hoi:'“男儿有泪不轻弹”对不对？',goiY:'束缚，男人不是……，也有……，也需要……，否则……'},
    {hoi:'为什么说眼泪是情绪释放的一种形式？',goiY:'抑郁时分泌……，眼泪可以排出……，转移……'},
    {hoi:'哭有什么学问？',goiY:'忧伤肺，修复……，宣泄……，倡导……，忌讳……，过度哭泣，胃肠……'},
    {hoi:'除了哭泣以外，还应该如何释放情绪？',goiY:'调整想法：扔掉……，不必理睬……，更了解……，不要抹杀……，好好面对……'}
  ],
  tuNen:['哪怕……也……','反之','赋予','束缚','宣泄','潜移默化','鄙视','偏见','沉淀','不妨'],
  cauTruc:[
    {ten:'到今天为止，……从没有改变过', nhan:'Mở bài', vd:'到今天为止，社会对好男人的标准从没有改变过。', khi:'Câu mở bài giới thiệu quan niệm truyền thống — giữ cách mở của bài khoá.'},
    {ten:'不仅如此，……', nhan:'Nâng ý', vd:'不仅如此，男人从小受到的教育就是“男儿有泪不轻弹”。', khi:'Chuyển từ tiêu chuẩn chung sang kiểu giáo dục "không được khóc".'},
    {ten:'哪怕……，也……', nhan:'Điểm ngữ pháp 1', vd:'哪怕受尽委屈，也一定要坚强。', khi:'Kể lời đàn ông tự dặn mình — dùng đúng 哪怕 của bài.'},
    {ten:'实际情况是，……', nhan:'Chuyển ý phản bác', vd:'实际情况是，这是社会文化赋予男人的一种束缚。', khi:'Bắt đầu nửa sau: phản bác quan niệm cũ.'},
    {ten:'……，反之，……', nhan:'Điểm ngữ pháp 2', vd:'长期压抑对健康只有坏处，反之，适当释放情绪，心绪才会平和。', khi:'Đối lập hai cách xử lý cảm xúc: dồn nén ↔ giải toả.'},
    {ten:'不过，A归A，……', nhan:'Nhượng bộ – bổ sung (A归A — bài 18)', vd:'不过，宣泄归宣泄，哭泣最好不要超过15分钟。', khi:'Nêu giới hạn của việc khóc (không quá 15 phút, hại dạ dày).'},
    {ten:'既然……，就……', nhan:'Kết bài', vd:'既然悲伤无可避免，就应该好好面对。', khi:'Rút ra kết luận: đối mặt với nỗi buồn, vì nó lắng đọng thành trí tuệ.'}
  ],
  checklist:[
    'Đã tóm tắt đủ 7 ý theo đúng thứ tự bảng bài tập 5 chưa?',
    'Độ dài khoảng 400 chữ Hán (không đếm dấu câu) chưa?',
    'Có dùng 哪怕……也…… và 反之 (hai điểm ngữ pháp) ít nhất một lần chưa?',
    'Có giữ các chi tiết then chốt: "hormone đau khổ", giảm 40%, 忧伤肺, không quá 15 phút không?',
    'Có viết bằng lời của mình (rút gọn), không chép nguyên văn từng đoạn bài khoá chưa?'
  ],
  model:{
    zh:'到今天为止，社会对好男人的标准从没有改变过：男人要有责任心，不背叛朋友；要上进，有抱负，有魄力；要谦虚大方；要心胸开阔，面对打击而不脆弱；男人是家庭的靠山、社会的支柱。总之，男人要顶天立地。不仅如此，男人从小受到的教育就是“男儿有泪不轻弹”：理智的男子汉再悲伤也不轻易哭泣，爱哭的男人会被一票否决，因为流泪意味着软弱、没出息。这种教育从娃娃时代就潜移默化地起作用，我们的文化赋予了男人坚强的形象。为了不被鄙视、不被讥笑，男人常常暗暗叮嘱自己：哪怕受尽委屈，也一定要坚强。实际情况是，这是社会文化赋予男人的一种束缚。男人不是魔鬼，也不是神仙，也有喜怒哀乐，也需要关怀，否则再有力的肩膀也会被压塌。长期压抑对健康只有坏处，反之，适当释放情绪，心绪才会平和。其实，眼泪是情绪释放的一种形式。人抑郁时会分泌痛苦激素，眼泪可以把它排出体外，哭泣后情绪强度会降低40%。中医认为忧伤肺，伤心之际不妨痛哭，哭完了一切都能得到修复。因此我们倡导给男人宣泄情绪的空间。不过，宣泄归宣泄，哭泣最好不要超过15分钟，否则会影响胃肠。除了哭泣，还应调整想法：扔掉外界狭隘的偏见，不必理睬别人说三道四，也不要抹杀痛苦在成长中的功劳。既然悲伤无可避免，就应该好好面对，因为它可以沉淀出智慧。',
    py:'Dào jīntiān wéizhǐ, shèhuì duì hǎo nánrén de biāozhǔn cóng méiyǒu gǎibiànguo: nánrén yào yǒu zérènxīn, bú bèipàn péngyou; yào shàngjìn, yǒu bàofù, yǒu pòlì; yào qiānxū dàfang; yào xīnxiōng kāikuò, miànduì dǎjī ér bú cuìruò; nánrén shì jiātíng de kàoshān, shèhuì de zhīzhù. Zǒngzhī, nánrén yào dǐngtiān-lìdì. Bùjǐn rúcǐ, nánrén cóngxiǎo shòudào de jiàoyù jiù shì “nán\'ér yǒu lèi bù qīng tán”: lǐzhì de nánzǐhàn zài bēishāng yě bù qīngyì kūqì, ài kū de nánrén huì bèi yí piào fǒujué, yīnwèi liú lèi yìwèizhe ruǎnruò, méi chūxi. Zhè zhǒng jiàoyù cóng wáwa shídài jiù qiányí-mòhuà de qǐ zuòyòng, wǒmen de wénhuà fùyǔle nánrén jiānqiáng de xíngxiàng. Wèile bú bèi bǐshì, bú bèi jīxiào, nánrén chángcháng àn\'àn dīngzhǔ zìjǐ: nǎpà shòujìn wěiqu, yě yídìng yào jiānqiáng. Shíjì qíngkuàng shì, zhè shì shèhuì wénhuà fùyǔ nánrén de yì zhǒng shùfù. Nánrén bú shì móguǐ, yě bú shì shénxiān, yě yǒu xǐ-nù-āi-lè, yě xūyào guānhuái, fǒuzé zài yǒulì de jiānbǎng yě huì bèi yātā. Chángqī yāyì duì jiànkāng zhǐyǒu huàichù, fǎnzhī, shìdàng shìfàng qíngxù, xīnxù cái huì pínghé. Qíshí, yǎnlèi shì qíngxù shìfàng de yì zhǒng xíngshì. Rén yìyù shí huì fēnmì tòngkǔ jīsù, yǎnlèi kěyǐ bǎ tā páichū tǐ wài, kūqì hòu qíngxù qiángdù huì jiàngdī bǎi fēn zhī sìshí. Zhōngyī rènwéi yōu shāng fèi, shāngxīn zhījì bùfáng tòngkū, kūwánle yíqiè dōu néng dédào xiūfù. Yīncǐ wǒmen chàngdǎo gěi nánrén xuānxiè qíngxù de kōngjiān. Búguò, xuānxiè guī xuānxiè, kūqì zuìhǎo bú yào chāoguò shíwǔ fēnzhōng, fǒuzé huì yǐngxiǎng wèicháng. Chúle kūqì, hái yīng tiáozhěng xiǎngfǎ: rēngdiào wàijiè xiá\'ài de piānjiàn, búbì lǐcǎi biérén shuō sān dào sì, yě bú yào mǒshā tòngkǔ zài chéngzhǎng zhōng de gōngláo. Jìrán bēishāng wú kě bìmiǎn, jiù yīnggāi hǎohǎo miànduì, yīnwèi tā kěyǐ chéndiàn chū zhìhuì.',
    vn:'Cho đến hôm nay, tiêu chuẩn của xã hội về một người đàn ông tốt chưa từng thay đổi: đàn ông phải có trách nhiệm, không phản bội bạn bè; phải cầu tiến, có hoài bão, có quyết đoán; phải khiêm tốn, hào phóng; phải có lòng dạ rộng mở, đối mặt cú sốc mà không yếu đuối; đàn ông là chỗ dựa của gia đình, trụ cột của xã hội. Tóm lại, đàn ông phải đội trời đạp đất. Không chỉ vậy, điều đàn ông được dạy từ nhỏ là "nam nhi có lệ không dễ rơi": nam tử hán có lý trí dù buồn đến mấy cũng không dễ khóc, đàn ông hay khóc sẽ bị gạt bỏ ngay, vì rơi lệ đồng nghĩa với yếu đuối, chẳng ra gì. Kiểu giáo dục ấy âm thầm tác động từ thời bé tí, văn hoá của chúng ta đã khoác cho đàn ông hình tượng kiên cường. Để không bị khinh thường, không bị chế giễu, đàn ông thường thầm dặn mình: dù chịu đủ uất ức cũng nhất định phải kiên cường. Thực tế là, đó là một sự trói buộc mà văn hoá xã hội áp lên đàn ông. Đàn ông không phải ác quỷ, cũng chẳng phải thần tiên, họ cũng có hỉ nộ ái lạc, cũng cần được quan tâm; nếu không, bờ vai vững chắc đến mấy cũng sẽ bị đè sụp. Dồn nén lâu dài chỉ có hại cho sức khoẻ; ngược lại, giải toả cảm xúc đúng mức thì tâm trạng mới bình hoà. Thật ra, nước mắt là một hình thức giải toả cảm xúc. Khi u uất, con người tiết ra "hormone đau khổ", nước mắt có thể thải nó ra khỏi cơ thể; sau khi khóc, cường độ cảm xúc giảm 40%. Đông y cho rằng u sầu hại phổi; lúc đau lòng cứ việc khóc thật to, khóc xong mọi thứ đều được phục hồi. Vì vậy chúng tôi chủ trương cho đàn ông không gian để giải toả cảm xúc. Tuy nhiên, giải toả thì giải toả, khóc tốt nhất đừng quá 15 phút, nếu không sẽ ảnh hưởng đến dạ dày, đường ruột. Ngoài khóc ra, còn nên điều chỉnh suy nghĩ: vứt bỏ định kiến hẹp hòi của người ngoài, không cần để ý người khác nói ra nói vào, cũng đừng gạt bỏ công lao của nỗi đau trong quá trình trưởng thành. Đã là nỗi buồn không thể tránh khỏi thì hãy đối mặt với nó cho tốt, vì nó có thể lắng đọng thành trí tuệ.'
  }
};

// ══════════════════════════════════════════
// LUYỆN NÓI — đúng bảng 练习5 của sách: 根据提示，简述课文主要内容
// ══════════════════════════════════════════
var speakingData = {
  intro:'Đây là bảng bài tập 5 trong sách: <b>根据提示，简述课文主要内容</b> (dựa vào gợi ý, trình bày ngắn gọn nội dung chính của bài khoá). Mỗi câu hỏi là một dòng của bảng, cột gợi ý giữ nguyên như sách. Bấm loa nghe câu hỏi, <b>tự ghi âm câu trả lời trước</b> rồi mới mở câu mẫu. Cố dùng đúng các từ trong gợi ý.',
  questions:[
    {q_zh:'社会对好男人的标准是什么？',
     q_vn:'Tiêu chuẩn của xã hội về một người đàn ông tốt là gì?',
     hint:'男人要……；要……；要……；要……；是……。总之……',
     sample:'社会对好男人的标准从没有改变过：男人要有责任心，不背叛朋友；要上进，有抱负，有魄力；要谦虚，诚实，大方；要心胸开阔，面对打击而不脆弱。男人是生活中的榜样，家庭的靠山。总之，男人要顶天立地，要有男人的气概。',
     sample_vn:'Tiêu chuẩn của xã hội về người đàn ông tốt chưa từng thay đổi: đàn ông phải có trách nhiệm, không phản bội bạn bè; phải cầu tiến, có hoài bão, có quyết đoán; phải khiêm tốn, thành thật, hào phóng; phải có lòng dạ rộng mở, đối mặt cú sốc mà không yếu đuối. Đàn ông là tấm gương trong cuộc sống, chỗ dựa của gia đình. Tóm lại, đàn ông phải đội trời đạp đất, phải có khí khái đàn ông.',
     note:'Bốn chữ 要 = bốn nhóm phẩm chất (trách nhiệm · cầu tiến · khiêm tốn · tu dưỡng); câu 是…… nói vai trò; 总之 để chốt. Chuỗi câu song song chính là phép 排比 (篇章修辞).'},
    {q_zh:'为什么“男儿有泪不轻弹”？',
     q_vn:'Vì sao lại có câu "nam nhi có lệ không dễ rơi"?',
     hint:'理智的男子汉……，爱哭的男人……，男人流泪意味着……。这种教育……，……赋予男人……',
     sample:'因为人们认为，理智的男子汉再悲伤也不轻易哭泣，爱哭的男人走到哪儿都会被一票否决，男人流泪就意味着软弱、没出息。这种教育从娃娃时代就潜移默化地起作用了，我们的文化赋予了男人高大、坚强的形象。',
     sample_vn:'Vì người ta cho rằng nam tử hán có lý trí dù buồn đến mấy cũng không dễ khóc, đàn ông hay khóc đi đâu cũng bị gạt bỏ ngay, đàn ông rơi lệ đồng nghĩa với yếu đuối, chẳng ra gì. Kiểu giáo dục này đã âm thầm tác động từ thời bé tí, văn hoá của chúng ta đã khoác cho đàn ông hình tượng to lớn, kiên cường.',
     note:'Dùng 再……也…… cho ý 1; 意味着 = đồng nghĩa với; kết bằng 文化赋予了男人……的形象.'},
    {q_zh:'为了不被讥笑，男人经常怎么办？',
     q_vn:'Để không bị chế giễu, đàn ông thường làm thế nào?',
     hint:'为了不被……，不被……，为了远离……，……叮嘱自己……',
     sample:'为了不被鄙视，不被讥笑，为了远离那些恶心、不体面的词汇，男人们千百次暗暗叮嘱自己：伤心是软弱的表现，哪怕遭受打击、受尽委屈，也一定要坚强。',
     sample_vn:'Để không bị khinh thường, không bị chế giễu, để tránh xa những từ ngữ đáng ghê tởm, chẳng ra thể thống gì, đàn ông hàng trăm hàng nghìn lần thầm dặn mình: đau lòng là biểu hiện của yếu đuối, dù gặp cú sốc, chịu đủ uất ức cũng nhất định phải kiên cường.',
     note:'Chuỗi 为了不被…… lặp lại (phép 排比); lời tự dặn dùng 哪怕……也…… (điểm ngữ pháp 1).'},
    {q_zh:'“男儿有泪不轻弹”对不对？',
     q_vn:'Câu "nam nhi có lệ không dễ rơi" đúng hay không?',
     hint:'束缚，男人不是……，也有……，也需要……，否则……',
     sample:'我觉得不对。“男儿有泪不轻弹”其实是社会文化赋予男人的一种束缚。男人不是魔鬼，也不是神仙，他们也有喜怒哀乐，也需要关怀和温柔的抚慰，否则，再有力的肩膀也有被压塌的时候。',
     sample_vn:'Tôi thấy không đúng. "Nam nhi có lệ không dễ rơi" thật ra là một sự trói buộc mà văn hoá xã hội áp lên đàn ông. Đàn ông không phải ác quỷ, cũng chẳng phải thần tiên, họ cũng có hỉ nộ ái lạc, cũng cần được quan tâm và vỗ về dịu dàng; nếu không, bờ vai vững chắc đến mấy cũng có lúc bị đè sụp.',
     note:'Nêu quan điểm trước (我觉得不对), rồi giải thích bằng 不是……也不是……，也有……，也需要……，否则…….'},
    {q_zh:'为什么说眼泪是情绪释放的一种形式？',
     q_vn:'Vì sao nói nước mắt là một hình thức giải toả cảm xúc?',
     hint:'抑郁时分泌……，眼泪可以排出……，转移……',
     sample:'因为人在情绪抑郁时会分泌一种痛苦激素，让人情绪低落、无精打采，而眼泪恰恰可以把它排出体外。人哭过以后，情绪强度会降低40%；如果不能用眼泪把压力转移掉，就会影响健康。',
     sample_vn:'Vì khi cảm xúc u uất, con người tiết ra một loại "hormone đau khổ" khiến tâm trạng sa sút, uể oải, mà nước mắt lại chính là thứ có thể thải nó ra khỏi cơ thể. Sau khi khóc, cường độ cảm xúc giảm 40%; nếu không dùng nước mắt để chuyển đi áp lực thì sẽ ảnh hưởng sức khoẻ.',
     note:'Nhắc đúng con số 40%; 恰恰 = chính là; dùng 如果……就…… cho ý 转移.'},
    {q_zh:'哭有什么学问？',
     q_vn:'Việc khóc có những "học vấn" gì?',
     hint:'忧伤肺，修复……，宣泄……，倡导……，忌讳……，过度哭泣，胃肠……',
     sample:'中医认为忧伤肺，伤心难过之际不妨痛哭，哭完了一切都能得到修复。所以应该允许男人宣泄情绪，我们倡导给男人释放情绪的空间。不过，宣泄归宣泄，忌讳哭泣时间过长，一般不要超过15分钟，因为过度哭泣会影响胃肠，甚至引起胃病。',
     sample_vn:'Đông y cho rằng u sầu hại phổi, lúc đau lòng buồn bã cứ việc khóc thật to, khóc xong mọi thứ đều được phục hồi. Vì vậy nên cho phép đàn ông giải toả cảm xúc, chúng tôi chủ trương cho đàn ông không gian để giải toả. Tuy nhiên, giải toả thì giải toả, kiêng khóc quá lâu, thường không nên quá 15 phút, vì khóc quá mức sẽ ảnh hưởng dạ dày – ruột, thậm chí gây bệnh dạ dày.',
     note:'不过，宣泄归宣泄 (A归A — bài 18) để chuyển sang giới hạn của việc khóc; nhớ con số 15 phút.'},
    {q_zh:'除了哭泣以外，还应该如何释放情绪？',
     q_vn:'Ngoài khóc ra, còn nên giải toả cảm xúc như thế nào?',
     hint:'调整想法：扔掉……，不必理睬……，更了解……，不要抹杀……，好好面对……',
     sample:'还应该在想法上做调整：扔掉外界对男人流泪的鄙视，不必理睬别人说三道四。负面情绪能让我们更了解自己，所以不要抹杀痛苦在成长中的功劳。既然悲伤无可避免，就应该好好面对，它可以沉淀出智慧。',
     sample_vn:'Còn nên điều chỉnh suy nghĩ: vứt bỏ sự coi thường của bên ngoài đối với việc đàn ông rơi lệ, không cần để ý người khác nói ra nói vào. Cảm xúc tiêu cực giúp ta hiểu bản thân hơn, nên đừng gạt bỏ công lao của nỗi đau trong quá trình trưởng thành. Đã là nỗi buồn không thể tránh thì hãy đối mặt cho tốt, nó có thể lắng đọng thành trí tuệ.',
     note:'Liệt kê theo đúng thứ tự gợi ý; kết bằng 既然……就…… (HSK 5).'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🎧 NGHE THEO DẠNG ĐỀ HSK 6 — 听力 (sách HSK 6 không có sách bài tập nghe)
// ══════════════════════════════════════════════════════════════
var listenExamData = {
  intro: 'Đề HSK 6 phần nghe chỉ phát <b>một lượt</b>. Bấm nút loa nghe, trả lời ngay, rồi mới mở nguyên văn ra đối chiếu. ' +
         'Đừng mở nguyên văn trước — mở trước là mất tác dụng.',
  source: 'Soạn theo dạng đề HSK 6 · chủ đề bài 32',
  items: [
    {n:1,
     lines:[{sp:'女',zh:'你眼睛怎么红红的？是不是哭过了？'},
            {sp:'男',zh:'刚看了一部感人的电影，没忍住。以前我觉得男人哭很没出息，现在觉得偶尔哭一哭也没什么。'}],
     q:'男的现在对男人哭是什么看法？',qvn:'Bây giờ người đàn ông nghĩ gì về việc đàn ông khóc?',
     opts:['很没出息','会被人讥笑','偶尔哭一哭没什么','应该经常哭'],ans:2,
     why:'现在觉得偶尔哭一哭也没什么 → C. "很没出息" là suy nghĩ TRƯỚC ĐÂY (以前), bẫy thời gian.',
     words:['出息']},

    {n:2,
     lines:[{sp:'男',zh:'你怎么一个人在这儿哭啊？出什么事了？'},
            {sp:'女',zh:'我准备了半年的方案，在会上被经理一句话就否决了。'}],
     q:'女的为什么哭？',qvn:'Vì sao người phụ nữ khóc?',
     opts:['她的方案被否决了','她和经理吵架了','她丢了工作','她和同事闹矛盾了'],ans:0,
     why:'被经理一句话就否决了 → phương án bị bác bỏ; không nhắc đến cãi nhau hay mất việc.',
     words:['否决']},

    {n:3,
     lines:[{sp:'女',zh:'医生，我最近喉咙痛，还老流鼻涕，要不要吃点儿药？'},
            {sp:'男',zh:'就是普通感冒，不用吃药。多喝水，好好休息，让身体自我修复就行了。'}],
     q:'医生建议女的怎么做？',qvn:'Bác sĩ khuyên người phụ nữ làm gì?',
     opts:['马上吃药','去大医院检查','打一针','多喝水、好好休息'],ans:3,
     why:'不用吃药。多喝水，好好休息 → D; A trái với 不用吃药.',
     words:['喉咙','鼻涕','修复']},

    {n:4,
     lines:[{sp:'男',zh:'听说你们公司新来的经理很厉害？'},
            {sp:'女',zh:'是啊，他很有魄力，一上任就进行了改革。刚开始有人百般阻挠，可他一点儿也不含糊，现在大家都很佩服他。'}],
     q:'关于新经理，可以知道什么？',qvn:'Về giám đốc mới, có thể biết điều gì?',
     opts:['大家都不喜欢他','做事很有魄力','改革失败了','他很容易放弃'],ans:1,
     why:'他很有魄力……现在大家都很佩服他 → B; A, C, D đều trái với nội dung.',
     words:['魄力','阻挠','含糊']},

    {n:5,
     lines:[{sp:'女',zh:'孩子摔倒了就哭，我老公总说“男孩子不许哭”，你觉得对吗？'},
            {sp:'男',zh:'我觉得不对。哭是孩子释放情绪的方式，不应该阻挠。反之，总让孩子忍着，对他的心理健康反而不好。'}],
     q:'男的是什么意思？',qvn:'Ý của người đàn ông là gì?',
     opts:['不应该阻止孩子哭','男孩子不应该哭','孩子摔倒了要马上扶起来','应该让孩子学会忍耐'],ans:0,
     why:'哭是孩子释放情绪的方式，不应该阻挠 → A; B là ý của người chồng mà anh ấy phản đối; D trái với 总让孩子忍着……反而不好.',
     words:['阻挠','反之']},

    {n:6,
     lines:[{sp:'男',zh:'我这次比赛又输了，大家一定都在讥笑我。'},
            {sp:'女',zh:'别太在意外界的看法。哪怕输了，你也学到了很多。失败的经历会慢慢沉淀下来，成为你以后的财富。'}],
     q:'女的主要想告诉男的什么？',qvn:'Người phụ nữ chủ yếu muốn nói với người đàn ông điều gì?',
     opts:['大家都在讥笑他','下次一定能赢','不必在意别人的看法，失败也有收获','应该放弃比赛'],ans:2,
     why:'别太在意外界的看法。哪怕输了，你也学到了很多 → C; A chỉ là suy nghĩ của người đàn ông.',
     words:['讥笑','外界','沉淀']},

    {n:7,
     lines:[{sp:'男',zh:'研究发现，人在伤心的时候会分泌一种“痛苦激素”，让人情绪低落、没有精神。而流眼泪恰恰可以把这种激素排出体外，所以很多人哭完以后会觉得轻松很多。不过，哭的时间不宜太长，一般不要超过十五分钟，否则反而会影响肠胃的健康。'}],
     q:'根据这段话，下列哪项正确？',qvn:'Theo đoạn này, câu nào dưới đây đúng?',
     opts:['哭的时间越长越好','痛苦激素让人更有精神','哭泣会增加痛苦激素','哭完以后人会觉得轻松'],ans:3,
     why:'很多人哭完以后会觉得轻松很多 → D; A trái với 不宜太长; B trái với 让人……没有精神; C sai vì nước mắt THẢI hormone ra.',
     words:['激素']},

    {n:8,
     lines:[{sp:'女',zh:'很多人以为，坚强就是从来不流泪。其实，每个人都有脆弱的时候，真正的坚强不是没有眼泪，而是哭过以后还能继续往前走。所以，当你难过的时候，不妨给自己一点儿时间，让情绪宣泄出来，然后再好好面对生活。'}],
     q:'这段话主要想告诉我们什么？',qvn:'Đoạn này chủ yếu muốn nói với chúng ta điều gì?',
     opts:['坚强的人从来不哭','真正的坚强是哭过后还能继续前进','难过的时候应该一个人待着','流泪是脆弱的表现'],ans:1,
     why:'真正的坚强不是没有眼泪，而是哭过以后还能继续往前走 → B; A là quan niệm sai bị bác bỏ (很多人以为……其实).',
     words:['脆弱','宣泄']}
  ]
};

// ══════════════════════════════════════════════════════════════
// 💬 TÌNH HUỐNG — HOÀN THÀNH HỘI THOẠI
// ══════════════════════════════════════════════════════════════
var situationData = {
  intro: 'Mỗi tình huống cho sẵn lời của người kia. Em viết lời đáp của mình, <b>bắt buộc dùng đúng từ/cấu trúc ghi ở ô yêu cầu</b>. ' +
         'Viết xong mới mở câu mẫu — câu mẫu chỉ là MỘT cách nói, em nói khác mà đúng yêu cầu vẫn được.',
  items: [
    {scene:'Bạn thân khóc sau khi thi trượt, rồi ngượng ngùng nói con trai mà khóc thì mất mặt.',
     a:{sp:'Bạn',zh:'我一个大男人还哭，是不是特别没出息？',vn:'Tớ là con trai to đầu rồi mà còn khóc, có phải chẳng ra gì lắm không?'},
     need:['Dùng 哪怕……也……','Dùng 不妨'],
     sample:'谁说的？哪怕是男子汉，难过的时候也可以哭。你不妨好好哭一场，哭完了我们再想办法。',
     samplePy:'Shéi shuō de? Nǎpà shì nánzǐhàn, nánguò de shíhou yě kěyǐ kū. Nǐ bùfáng hǎohǎo kū yì cháng, kūwánle wǒmen zài xiǎng bànfǎ.',
     sampleVn:'Ai bảo thế? Dù là nam tử hán thì lúc buồn cũng có thể khóc. Cậu cứ khóc một trận cho đã, khóc xong mình cùng nghĩ cách.',
     tip:'哪怕 + danh từ / cụm từ + 也……; 不妨 + V = cứ … (bài 12).'},

    {scene:'Em gái định thức trắng đêm ôn thi.',
     a:{sp:'Em gái',zh:'明天就考试了，我想今晚不睡觉，把书全看一遍。',vn:'Mai thi rồi, em định tối nay không ngủ, đọc lại hết sách một lượt.'},
     need:['Dùng 反之'],
     sample:'睡好了，第二天头脑才清楚；反之，一夜不睡，考试的时候反而什么都想不起来。',
     samplePy:'Shuìhǎole, dì-èr tiān tóunǎo cái qīngchu; fǎnzhī, yí yè bú shuì, kǎoshì de shíhou fǎn\'ér shénme dōu xiǎng bu qǐlái.',
     sampleVn:'Ngủ ngon thì hôm sau đầu óc mới minh mẫn; ngược lại, thức trắng một đêm thì lúc thi lại chẳng nhớ ra gì cả.',
     tip:'反之 nối hai vế đối lập, sau có dấu phẩy (điểm ngữ pháp 2); ôn chủ đề giấc ngủ (bài 30).'},

    {scene:'Đồng nghiệp bực vì bị người khác nói xấu sau lưng.',
     a:{sp:'Đồng nghiệp',zh:'他们在背后说我是靠关系才进公司的，气死我了！',vn:'Họ nói sau lưng rằng tôi nhờ quan hệ mới vào được công ty, tức chết đi được!'},
     need:['Dùng 理睬','Dùng 偏见 hoặc 说三道四'],
     sample:'别理睬那些说三道四的人，那只是他们的偏见。你用成绩证明自己就行了。',
     samplePy:'Bié lǐcǎi nàxiē shuō sān dào sì de rén, nà zhǐ shì tāmen de piānjiàn. Nǐ yòng chéngjì zhèngmíng zìjǐ jiù xíng le.',
     sampleVn:'Đừng để ý những kẻ nói ra nói vào, đó chỉ là định kiến của họ. Anh cứ dùng thành tích chứng minh bản thân là được.',
     tip:'理睬 thường dùng dạng phủ định: 别 / 不必 + 理睬.'},

    {scene:'Bạn vừa chia tay, muốn khóc cả đêm.',
     a:{sp:'Bạn',zh:'我想大哭一场，哭一个晚上。',vn:'Tớ muốn khóc một trận thật to, khóc cả đêm.'},
     need:['Dùng A归A (哭归哭 / 宣泄归宣泄)','Dùng 忌讳'],
     sample:'哭归哭，可别哭太久。医生说哭泣最忌讳时间过长，哭完了咱们出去走走吧。',
     samplePy:'Kū guī kū, kě bié kū tài jiǔ. Yīshēng shuō kūqì zuì jìhuì shíjiān guò cháng, kūwánle zánmen chūqù zǒuzou ba.',
     sampleVn:'Khóc thì khóc, nhưng đừng khóc lâu quá. Bác sĩ bảo khóc kiêng nhất là kéo dài, khóc xong mình ra ngoài đi dạo nhé.',
     tip:'A归A (bài 18) nhượng bộ rồi chuyển ý; 最忌讳 + V = kiêng nhất là ….'},

    {scene:'Bố mắng em trai nhỏ vì khóc khi bị ngã.',
     a:{sp:'Bố',zh:'男孩子哭什么哭！男儿有泪不轻弹，懂不懂？',vn:'Con trai khóc cái gì mà khóc! Nam nhi có lệ không dễ rơi, hiểu chưa?'},
     need:['Dùng 束缚 hoặc 在情理之中','Giữ giọng lễ phép với bố (dùng 您)'],
     sample:'爸，弟弟还小，难过的时候哭一哭也在情理之中。“男儿有泪不轻弹”其实是一种束缚，您就让他哭一会儿吧。',
     samplePy:'Bà, dìdi hái xiǎo, nánguò de shíhou kū yi kū yě zài qínglǐ zhī zhōng. “Nán\'ér yǒu lèi bù qīng tán” qíshí shì yì zhǒng shùfù, nín jiù ràng tā kū yíhuìr ba.',
     sampleVn:'Bố ơi, em còn nhỏ, lúc buồn khóc một chút cũng là lẽ thường. "Nam nhi có lệ không dễ rơi" thật ra là một sự trói buộc, bố cứ để em khóc một lát đi.',
     tip:'Nói với người lớn dùng 您; 在情理之中 = hợp tình hợp lý.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🎯 NÓI SAO CHO HAY — 得体 / 语体
// ══════════════════════════════════════════════════════════════
var registerData = {
  intro: 'Ở đây <b>cả hai câu đều đúng ngữ pháp</b> — không có câu sai. Việc của em là chọn câu <b>PHÙ HỢP HƠN</b> với hoàn cảnh. ' +
         'HSK 6 đòi hỏi phân biệt rõ khẩu ngữ và văn viết, lời thân mật và lời trang trọng.',
  items: [
    {scene:'Bài báo khoa học về sức khoẻ cảm xúc.',
     a:'研究表明，适当哭泣有助于释放压力，缓解负面情绪。',b:'哭一哭挺好的，哭完就爽了。',better:'a',
     why:'Văn báo chí khoa học dùng 研究表明, 有助于, 缓解负面情绪. Câu b (挺好的, 爽了) là khẩu ngữ tán gẫu.'},

    {scene:'Nhắn tin an ủi bạn thân vừa thất tình.',
     a:'鉴于你目前情绪低落，建议你适当宣泄。',b:'想哭就哭吧，我陪着你。',better:'b',
     why:'An ủi bạn thân cần ấm áp, gần gũi: 想哭就哭吧，我陪着你. Câu a (鉴于 — bài 12, 建议你适当宣泄) nghe như lời khuyên của bác sĩ, lạnh lùng.'},

    {scene:'Mở đầu bài phát biểu của đại diện học sinh ở lễ tốt nghiệp.',
     a:'值此毕业典礼之际，我谨代表全体毕业生向老师们表示衷心的感谢。',b:'毕业啦，谢谢老师们哈！',better:'a',
     why:'Phát biểu trang trọng dùng 值此……之际, 谨代表, 表示衷心的感谢. Câu b (啦, 哈) chỉ hợp khi nhắn tin.'},

    {scene:'Biển báo dán ở cửa phòng thí nghiệm.',
     a:'未经许可，不得入内。',b:'你没问过我们就别进来啊。',better:'a',
     why:'Biển báo, nội quy dùng văn viết ngắn gọn: 未经许可，不得入内. Câu b là lời nói miệng.'},

    {scene:'Mẹ dỗ con nhỏ vừa ngã và oà khóc.',
     a:'请你停止哭泣，保持情绪稳定。',b:'宝贝不哭，摔疼了吧？妈妈给你吹吹。',better:'b',
     why:'Dỗ trẻ nhỏ cần lời âu yếm: 宝贝不哭, 妈妈给你吹吹. Câu a (停止哭泣, 保持情绪稳定) như mệnh lệnh hành chính.'},

    {scene:'Bài văn nghị luận về quan niệm "nam nhi có lệ không dễ rơi".',
     a:'“男儿有泪不轻弹”这一观念，实际上是社会文化赋予男人的一种束缚。',b:'男的不能哭？这不是瞎说嘛！',better:'a',
     why:'Văn nghị luận dùng 这一观念, 实际上, 赋予……束缚. Câu b (男的, 瞎说嘛) quá suồng sã.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🗣️ KỂ LẠI BÀI ĐỌC — theo bảng 练习5 của sách
// ══════════════════════════════════════════════════════════════
var retellData = {
  intro: 'Dựa vào bảng bài tập 5 trong sách (<b>根据提示，简述课文主要内容</b>), kể tóm tắt bài khoá bằng lời của em, ' +
         'KHÔNG đọc thuộc lòng. Nhìn câu hỏi và gợi ý từng dòng, bấm ghi âm rồi kể khoảng 2–3 phút.',
  outline: [
    {step:'社会对好男人的标准是什么？', cue:'男人要……；要……；要……；要……；是……。总之……', words:['背叛','上进','抱负','魄力','开阔','处境','打击','脆弱','榜样','光彩']},
    {step:'为什么“男儿有泪不轻弹”？', cue:'理智的男子汉……，爱哭的男人……，男人流泪意味着……。这种教育……，……赋予男人……', words:['理智','哭泣','否决','出息','娃娃','潜移默化','鞭策','赋予','扮演']},
    {step:'为了不被讥笑，男人经常怎么办？', cue:'为了不被……，不被……，为了远离……，……叮嘱自己……', words:['鄙视','讥笑','恶心','体面','含糊']},
    {step:'“男儿有泪不轻弹”对不对？', cue:'束缚，男人不是……，也有……，也需要……，否则……', words:['束缚','魔鬼','神仙','健全','塌','反之']},
    {step:'为什么说眼泪是情绪释放的一种形式？', cue:'抑郁时分泌……，眼泪可以排出……，转移……', words:['激素','哭泣','转移']},
    {step:'哭有什么学问？', cue:'忧伤肺，修复……，宣泄……，倡导……，忌讳……，过度哭泣，胃肠……', words:['喉咙','鼻涕','之际','修复','宣泄','许可','倡导','情理','忌讳']},
    {step:'除了哭泣以外，还应该如何释放情绪？', cue:'调整想法：扔掉……，不必理睬……，更了解……，不要抹杀……，好好面对……', words:['外界','狭隘','偏见','阻挠','尊严','理睬','淹没','须知','抹杀','岁月','沉淀']}
  ],
  checklist: [
    'Kể đủ 7 ý theo đúng thứ tự bảng chưa?',
    'Ý 1 có liệt kê được ít nhất 4 phẩm chất (责任心, 上进, 谦虚, 心胸开阔…) và kết bằng 总之 không?',
    'Ý 5–6 có nhắc đúng các con số: cường độ cảm xúc giảm 40%, khóc không quá 15 phút không?',
    'Ý 7 có nói đủ: vứt bỏ định kiến, không để ý lời bàn tán, đừng gạt bỏ công lao của nỗi đau, đối mặt với nỗi buồn không?',
    'Có dùng 哪怕……也…… và 反之 ít nhất một lần khi kể không?'
  ]
};



// ══════════════════════════════════════════
// SGK · Bài tập trong sách (tr. 126–131) — đáp án theo đáp án sách
// (注释1 练一练 用“哪怕”改写句子 → gx; 注释2 练一练 用“反之”完成句子 → gx;
//  篇章修辞 · 修辞(8) 排比 练一练 "指出下列哪句不是排比句" → ab;
//  练习4 của bài này là 连线 (请给下面的排比句连线组成一段话) → kho, khung = 4 vế A–D;
//  đáp án sách in 1-A 2-B 3-C 4-D (chỉ chép lại hai cột theo thứ tự trang) — không khớp nội dung → nối theo nội dung 1C 2D 3A 4B, có giải thích;
//  扩展 chỉ có 词汇 "熟悉下列词语搭配" (không có bài tập, không có 病句) → chuyển thành 2 phần kho điền từ vào câu ví dụ của sách;
//  热身 1 (thảo luận) và 热身 2 (nhóm từ 正/进/视/神, không có đáp án) không đưa vào; 练习5 đã thành luyện nói / kể lại / dàn ý viết)
// ══════════════════════════════════════════
var sgkData = [
  {kieu:'gx', dapSgk:true, de:'用“哪怕”改写句子（注释1 · 练一练）', vn:'Dùng 哪怕 viết lại câu (Chú thích 1 · Luyện tập) — đáp án theo sách',
   cau:[
     {s:'她这个人真奇怪，走路的时候听音乐，吃饭的时候听音乐，就是看书，也要听音乐。', tu:'哪怕', dap:'她这个人真奇怪，走路的时候听音乐，吃饭的时候听音乐，哪怕是看书，也要听音乐。',
      giai:'就是……也…… (= 即使……也……) → 哪怕是……也……: ngay cả lúc đọc sách cũng phải nghe nhạc. 哪怕 đứng trước tình huống cực đoan nhất, vế sau giữ 也.'},
     {s:'渴死了，就算有一口水也是好的。', tu:'哪怕', dap:'渴死了，哪怕有一口水也是好的。',
      giai:'就算 → 哪怕 (cùng là giả thiết nhượng bộ; 哪怕 khẩu ngữ, nhấn "dù chỉ một chút").'},
     {s:'说好了啊，即使晚点儿，你也一定要来。', tu:'哪怕', dap:'说好了啊，哪怕晚点儿，你也一定要来。',
      giai:'即使 → 哪怕; vế sau vẫn dùng 也: dù có muộn một chút, cậu cũng nhất định phải đến.'}
   ]},

  {kieu:'gx', dapSgk:true, de:'用“反之”完成句子（注释2 · 练一练）', vn:'Hoàn thành câu với 反之 (Chú thích 2 · Luyện tập) — đáp án theo sách',
   cau:[
     {s:'雨水多，气候就比较湿润，反之，＿＿。', tu:'反之', dap:'雨水多，气候就比较湿润，反之，气候就比较干燥。',
      giai:'Vế sau 反之 nói điều NGƯỢC LẠI với vế trước: mưa nhiều → ẩm ướt; ngược lại (mưa ít) → khô hanh (湿润 ↔ 干燥).'},
     {s:'有了充足的阳光、水分和空气，植物就能生长好，反之，＿＿。', tu:'反之', dap:'有了充足的阳光、水分和空气，植物就能生长好，反之，植物就没有生机。',
      giai:'Có đủ nắng, nước, không khí → cây lớn tốt; ngược lại → cây không có sức sống (没有生机).'},
     {s:'不断地积累，经验就会丰富起来，反之，＿＿。', tu:'反之', dap:'不断地积累，经验就会丰富起来，反之，永远不会有经验可谈。',
      giai:'Không ngừng tích luỹ → kinh nghiệm phong phú; ngược lại → mãi mãi chẳng có kinh nghiệm gì để nói (有……可谈).'}
   ]},

  {kieu:'ab', de:'指出下列哪句不是排比句（篇章修辞 · 修辞（8）排比 · 练一练）', vn:'Tu từ văn bản · Tu từ (8) Bài tỉ (排比 — xếp ba vế trở lên cùng cấu trúc, cùng ngữ khí để tăng khí thế) · Luyện tập: chỉ ra câu nào dưới đây KHÔNG phải câu bài tỉ — đáp án theo sách',
   cau:[
     {s:'下列哪句不是排比句？（＿＿）',
      opts:['（1）床前明月光，疑是地上霜，举头望明月，低头思故乡。','（2）拥有青春，就拥有了一份灿烂和辉煌；拥有知识，就拥有了无限的力量和财富；拥有友情，就拥有了一份理解和支持。','（3）处理问题必须瞻前顾后，不仅要看到眼前，还要看到以后；不仅要看到局部，还要看到全局；不仅要了解中国国情，还要了解世界局势；不仅要看到世界发展对中国的影响，还要看到中国发展对世界的影响。'], ans:0,
      giai:'(1) là bài thơ 《静夜思》 của Lý Bạch: bốn câu thơ không lặp lại cùng một khung cấu trúc, không có ba vế song song trở lên → KHÔNG phải 排比 (đáp án sách: (1)). (2) có ba vế cùng khung 拥有……，就拥有了……; (3) có bốn vế cùng khung 不仅要……，还要…… → đều là 排比. Đoạn đầu bài khoá (男人要……；男人要……；男人要……) cũng là một câu 排比.'}
   ]},

  {kieu:'mr', de:'模仿例子，写出更多的词语', vn:'Bắt chước ví dụ, viết thêm các từ khác (có chữ được đánh dấu chấm)',
   vd:{tu:'否决', chu:'否', ds:['否认','否定','是否','可否']},
   cau:[
     {tu:'光彩', chu:'光', dap:['光芒','光亮','月光','星光'], them:['阳光','灯光','光明','光辉','目光','光线'],
      giai:'光 trong 光彩 = ánh sáng (光芒 = tia sáng rực rỡ — bài 26, 光亮 = sáng sủa, 月光 / 星光 = ánh trăng / ánh sao).'},
     {tu:'赋予', chu:'予', dap:['给予','赐予','予以','生杀予夺'], them:['授予','免予','准予','赠予'],
      giai:'予 (yǔ) = cho, trao (给予 = dành cho, 赐予 = ban cho, 予以 = dành cho (văn viết), 生杀予夺 = quyền cho sống bắt chết, ban phát hay tước đoạt). 授予 = trao (danh hiệu), 免予 = miễn cho, 准予 = chuẩn cho.'},
     {tu:'讥笑', chu:'笑', dap:['微笑','笑话','可笑','笑口常开'], them:['嘲笑','取笑','笑容','笑声','开玩笑','哈哈大笑'],
      giai:'笑 = cười (微笑 = mỉm cười, 笑话 = chuyện cười / cười chê, 可笑 = buồn cười, 笑口常开 = miệng luôn tươi cười). 嘲笑 / 取笑 cùng nghĩa "cười chê" như 讥笑.'},
     {tu:'鄙视', chu:'视', dap:['藐视','电视','视觉','视线'], them:['轻视','蔑视','重视','忽视','歧视','视力'],
      giai:'视 = nhìn, coi (藐视 = coi khinh, 视觉 = thị giác, 视线 = tầm nhìn, 电视 = tivi). Nhóm 轻视 / 蔑视 / 歧视 / 重视 ở 热身 2 dùng nghĩa "coi (là thế nào)" giống 鄙视.'}
   ]},

  {kieu:'gx', dapSgk:true, de:'用所给词语改写句子', vn:'Dùng từ cho sẵn viết lại câu (bài tập 2) — đáp án theo sách',
   cau:[
     {s:'老一辈教育家强调：“教育要从小孩子抓起”。', tu:'娃娃', dap:'老一辈教育家强调：“教育要从娃娃抓起”。',
      giai:'小孩子 → 娃娃 (khẩu ngữ, thân mật); 从娃娃抓起 = bắt đầu (giáo dục) từ khi còn bé.'},
     {s:'他这种不劳而获的行为被大多数人瞧不起。', tu:'鄙视', dap:'他这种不劳而获的行为被大多数人鄙视。',
      giai:'瞧不起 (khẩu ngữ) → 鄙视 (văn viết, sắc thái mạnh hơn: khinh bỉ).'},
     {s:'由于智力有问题，他从小就经常被村里的孩子们笑话。', tu:'讥笑', dap:'由于智力问题，他从小就经常被村里的孩子们讥笑。',
      giai:'笑话 (khẩu ngữ) → 讥笑 (chế giễu, văn viết). Đáp án sách còn rút gọn 智力有问题 thành 智力问题.'},
     {s:'衣服只要干净就行，就算旧点儿也没关系。', tu:'哪怕', dap:'衣服只要干净就行，哪怕旧点儿也没关系。',
      giai:'就算……也…… → 哪怕……也…… (điểm ngữ pháp 1).'},
     {s:'一切从实际出发，我们的事业就能顺利发展，相反，就会遇到挫折。', tu:'反之', dap:'一切从实际出发，我们的事业就能顺利发展，反之，就会遇到挫折。',
      giai:'相反 → 反之 (liên từ văn viết, điểm ngữ pháp 2); sau 反之 có dấu phẩy.'},
     {s:'为了不让那两家公司成功合作，他想尽办法进行阻止。', tu:'阻挠', dap:'为了不让那两家公司成功合作，他想尽办法进行阻挠。',
      giai:'阻止 → 阻挠: nhấn cố ý gây cản trở, sắc thái xấu (进行阻挠 = tiến hành ngăn cản).'}
   ]},

  {kieu:'kho', de:'选择合适的词语填空', vn:'Chọn từ thích hợp điền vào chỗ trống (bài tập 3 · đoạn 1)', tu:['开阔','背叛','榜样','打击','上进'],
   cau:[
     {s:'爸爸一直是我的＿＿，他很坚强，面对＿＿从不退缩；他为人正直，从不＿＿朋友；他心胸＿＿，积极＿＿，是个顶天立地的男子汉。',
      dap:['榜样','打击','背叛','开阔','上进']}
   ]},
  {kieu:'kho', de:'选择合适的词语填空', vn:'Chọn từ thích hợp điền vào chỗ trống (bài tập 3 · đoạn 2)', tu:['脆弱','喉咙','忌讳','鼻涕','修复'],
   cau:[
     {s:'最近我的身体不太舒服，＿＿痛，还打喷嚏，流＿＿，可能是感冒了。生病时身体很＿＿，也最＿＿过于劳累，因此我打算减少工作量，去父母家住几天，好好休息，让身体进行自我＿＿。',
      dap:['喉咙','鼻涕','脆弱','忌讳','修复']}
   ]},

  {kieu:'kho', de:'请给下面的排比句连线组成一段话并朗读', vn:'Nối các vế của câu bài tỉ (排比) thành một đoạn văn rồi đọc to (bài tập 4) — chọn vế A–D điền sau mỗi câu. Lưu ý: bản đáp án sách chỉ in lại hai cột theo thứ tự trên trang (1—A, 2—B, 3—C, 4—D); ghép như vậy thì sai nghĩa (大理花多 lại đi với 娇得……). Ở đây nối theo NỘI DUNG: vế sau phải lặp lại đúng tính từ của vế trước (A得……) — 多 → C, 艳 → D, 娇 → A, 香 → B. Đọc liền cả đoạn: 大理花多，多得园艺家定不出名字来称呼；大理花艳，艳得美术家调不出颜色来点染；大理花娇，娇得文学家想不出词句来描绘；大理花香，香得外来人一到这苍山下，洱海边，顿觉飘飘然不酒而醉。',
   tu:['A. 娇得文学家想不出词句来描绘。','B. 香得外来人一到这苍山下，洱海边，顿觉飘飘然不酒而醉。','C. 多得园艺家定不出名字来称呼。','D. 艳得美术家调不出颜色来点染。'],
   cau:[
     {s:'① 大理花多，＿＿', dap:['C. 多得园艺家定不出名字来称呼。'], giai:'多 → 多得……: hoa nhiều đến mức nhà làm vườn không đặt nổi tên. (Đáp án sách in A — lệch cột.)'},
     {s:'② 大理花艳，＿＿', dap:['D. 艳得美术家调不出颜色来点染。'], giai:'艳 → 艳得……: hoa rực rỡ đến mức hoạ sĩ không pha nổi màu để vẽ. (Đáp án sách in B — lệch cột.)'},
     {s:'③ 大理花娇，＿＿', dap:['A. 娇得文学家想不出词句来描绘。'], giai:'娇 → 娇得……: hoa kiều diễm đến mức nhà văn không nghĩ ra lời để tả. (Đáp án sách in C — lệch cột.)'},
     {s:'④ 大理花香，＿＿', dap:['B. 香得外来人一到这苍山下，洱海边，顿觉飘飘然不酒而醉。'], giai:'香 → 香得……: hoa thơm đến mức người phương xa vừa đến chân núi Thương Sơn, bên hồ Nhĩ Hải đã thấy lâng lâng, không uống rượu mà say. (Đáp án sách in D — lệch cột.)'}
   ]},

  {kieu:'kho', de:'熟悉下列词语搭配（扩展 · 词汇）', vn:'Mở rộng · Từ vựng: làm quen các cụm từ cố định (phần 1/2). Sách chỉ cho bảng từ – cụm từ – câu ví dụ (không có bài tập, không có đáp án) — ở đây chuyển thành bài điền: điền từ vào câu ví dụ của sách.',
   tu:['出卖','煎','捎','秃','磨合','渣','染','壮烈'],
   cau:[
     {s:'他绝不会为了金钱、利益＿＿良心。（bán rẻ, bán đứng）', dap:['出卖']},
     {s:'不知从哪里飘来了＿＿牛排的香味。（rán, áp chảo）', dap:['煎']},
     {s:'麻烦您把这几样东西＿＿给我妹妹。（gửi nhờ, cầm hộ）', dap:['捎']},
     {s:'天气暖和了，光＿＿＿＿的树枝上冒出了新芽。（trơ trụi）', dap:['秃','秃']},
     {s:'经过一段时间的＿＿，他们俩的双打配合得别提多默契了。（làm quen, ăn khớp với nhau）', dap:['磨合']},
     {s:'这种再生纤维是用木材、竹子、甘蔗＿＿等天然物质制成的。（bã）', dap:['渣']},
     {s:'她家从来都是窗明几净，纤尘不＿＿。（vấy, nhiễm）', dap:['染']},
     {s:'他们的爱情注定是悲剧，是带有＿＿色彩的悲剧。（oanh liệt, bi tráng）', dap:['壮烈']}
   ]},
  {kieu:'kho', de:'熟悉下列词语搭配（扩展 · 词汇）', vn:'Mở rộng · Từ vựng: làm quen các cụm từ cố định (phần 2/2) — điền từ vào câu ví dụ của sách.',
   tu:['辩证','公关','纪要','清真','蒸发','片断','集团'],
   cau:[
     {s:'要注意培养学生的＿＿思维能力。（biện chứng）', dap:['辩证']},
     {s:'“＿＿”是“公共关系”的简称。（quan hệ công chúng）', dap:['公关']},
     {s:'这是一份完整的会议＿＿。（biên bản tóm tắt）', dap:['纪要']},
     {s:'我最喜欢这家＿＿饭馆了。（Hồi giáo, halal）', dap:['清真']},
     {s:'天气炎热，刚下过雨，路上的水马上就＿＿了。（bốc hơi）', dap:['蒸发']},
     {s:'我对这件事的记忆已经不完整了，只是一个个的＿＿。（mảnh vụn, đoạn rời）', dap:['片断']},
     {s:'几家报社联合起来，组建了一个大的报业＿＿。（tập đoàn）', dap:['集团']}
   ]}
];
