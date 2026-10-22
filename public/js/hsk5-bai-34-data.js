// ══════════════════════════════════════════
// DATA — HSK5 Bài 34: 鸟儿的护肤术 (Cách loài chim bảo vệ da)
// Unit 12 亲近自然 · Nguồn: HSK标准教程5下 (tr. 140–147) + 练习册 bài 34
// ══════════════════════════════════════════

var vocabData = [
  {n:1,zh:'接触',py:'jiēchù',pos:'Động từ',vn:'tiếp xúc, tiếp cận; gần gũi',hv:'tiếp xúc',em:'🤝',lesson:1,
   explain:['Chạm vào, gặp gỡ, có quan hệ qua lại với người hoặc vật: 接触动物, 接触病人.','Tiếp cận, làm quen với một lĩnh vực, sự vật mới: 接触社会, 接触新信息, 接触这方面的业务.'],
   usage:'Bảng 词语搭配 của sách: 接触 + 动物 / 孩子 / 病人 / 大自然 / 社会 / 新信息. Hay đi với 过 và 从来没……过: 从来没接触过. Còn làm danh từ: 有接触 / 没有接触. Liên lạc qua điện thoại, tin nhắn thì dùng 联系, không dùng 接触.',
   collo:['接触动物','接触大自然','接触社会','接触新信息'],
   ex_zh:'大家都接触过鸟儿吧？',ex_py:'Dàjiā dōu jiēchùguo niǎor ba?',ex_vn:'Chắc ai cũng từng tiếp xúc với chim rồi nhỉ?',
   exList:[
     {zh:'大家都接触过鸟儿吧？',py:'Dàjiā dōu jiēchùguo niǎor ba?',vn:'Chắc ai cũng từng tiếp xúc với chim rồi nhỉ?'},
     {zh:'我从来没接触过这方面的业务。',py:'Wǒ cónglái méi jiēchùguo zhè fāngmiàn de yèwù.',vn:'Tôi chưa bao giờ tiếp xúc với nghiệp vụ mảng này.'},
     {zh:'周末多带孩子去郊外接触接触大自然吧。',py:'Zhōumò duō dài háizi qù jiāowài jiēchù jiēchù dà zìrán ba.',vn:'Cuối tuần hãy đưa con ra ngoại ô gần gũi thiên nhiên nhiều hơn.'}
   ],
   colloFull:[
     {zh:'接触动物',py:'jiēchù dòngwù',vn:'tiếp xúc với động vật'},
     {zh:'接触病人',py:'jiēchù bìngrén',vn:'tiếp xúc với người bệnh'},
     {zh:'接触大自然',py:'jiēchù dà zìrán',vn:'gần gũi thiên nhiên'},
     {zh:'接触社会',py:'jiēchù shèhuì',vn:'va chạm xã hội'},
     {zh:'接触新信息',py:'jiēchù xīn xìnxī',vn:'tiếp cận thông tin mới'}
   ],
   patterns:[
     {s:'接触 + 动物 / 大自然 / 社会 / 新信息',m:'Tiếp xúc với động vật / thiên nhiên / xã hội / thông tin mới'},
     {s:'从来没(有) + 接触过 + N',m:'Chưa từng tiếp xúc với …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Trước khi vào đại học, tôi chưa từng tiếp xúc với máy tính.',answer:'上大学以前，我从来没接触过电脑。',answerPy:'Shàng dàxué yǐqián, wǒ cónglái méi jiēchùguo diànnǎo.',
      note:'从来没 + V + 过: chưa từng bao giờ. 过 đứng ngay sau 接触.',pair:'从来没……过'},
     {promptLang:'vi',prompt:'Trẻ con ở thành phố có ngày càng ít cơ hội gần gũi thiên nhiên.',answer:'城市里的孩子接触大自然的机会越来越少。',answerPy:'Chéngshì li de háizi jiēchù dà zìrán de jīhuì yuè lái yuè shǎo.',
      note:'越来越 + Adj: ngày càng …; 接触大自然 là cụm trong bảng 词语搭配.',pair:'越来越'}
   ]},

  {n:2,zh:'特征',py:'tèzhēng',pos:'Danh từ',vn:'điểm đặc trưng, nét đặc biệt',hv:'đặc trưng',em:'🔍',lesson:1,
   explain:['Dấu hiệu, đặc điểm nổi bật dùng để phân biệt người / vật này với người / vật khác.','Mang màu sắc văn viết hơn 特点; hay dùng trong văn khoa học: 主要特征, 明显的特征.'],
   usage:'Bảng 词语搭配: 明显 / 突出 / 唯一 (的) + 特征. Động từ đi kèm: 有……特征, 具有……特征. Mẫu trong bài: 区分 A 和 B 的特征就是…….',
   collo:['明显的特征','突出的特征','唯一的特征'],
   ex_zh:'那你知道鸟儿最重要的特征是什么吗？',ex_py:'Nà nǐ zhīdào niǎor zuì zhòngyào de tèzhēng shì shénme ma?',ex_vn:'Vậy bạn có biết đặc điểm quan trọng nhất của loài chim là gì không?',
   exList:[
     {zh:'那你知道鸟儿最重要的特征是什么吗？',py:'Nà nǐ zhīdào niǎor zuì zhòngyào de tèzhēng shì shénme ma?',vn:'Vậy bạn có biết đặc điểm quan trọng nhất của loài chim là gì không?'},
     {zh:'区分鸟儿和其他动物的唯一特征就是羽毛。',py:'Qūfēn niǎor hé qítā dòngwù de wéiyī tèzhēng jiù shì yǔmáo.',vn:'Đặc điểm duy nhất để phân biệt chim với các động vật khác chính là lông vũ.'},
     {zh:'这种花最明显的特征是颜色会随着温度变化。',py:'Zhè zhǒng huā zuì míngxiǎn de tèzhēng shì yánsè huì suízhe wēndù biànhuà.',vn:'Đặc điểm dễ thấy nhất của loài hoa này là màu sắc thay đổi theo nhiệt độ.'}
   ],
   colloFull:[
     {zh:'明显的特征',py:'míngxiǎn de tèzhēng',vn:'đặc điểm rõ ràng'},
     {zh:'突出的特征',py:'tūchū de tèzhēng',vn:'đặc điểm nổi bật'},
     {zh:'唯一的特征',py:'wéiyī de tèzhēng',vn:'đặc điểm duy nhất'},
     {zh:'主要特征',py:'zhǔyào tèzhēng',vn:'đặc trưng chủ yếu'}
   ],
   patterns:[
     {s:'明显 / 突出 / 唯一 (的) + 特征',m:'Đặc điểm rõ / nổi bật / duy nhất'},
     {s:'A 的特征是 / 就是……',m:'Đặc điểm của A là …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy hai loài chim này trông rất giống nhau, nhưng đặc điểm của chúng không giống nhau.',answer:'虽然这两种鸟看起来很像，但是它们的特征不一样。',answerPy:'Suīrán zhè liǎng zhǒng niǎo kàn qilai hěn xiàng, dànshì tāmen de tèzhēng bù yíyàng.',
      note:'虽然……但是……: tuy … nhưng …. 特征 là danh từ, làm chủ ngữ của 不一样.',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Em hãy viết ra những đặc điểm chủ yếu của loài côn trùng này.',answer:'请把这种昆虫的主要特征写下来。',answerPy:'Qǐng bǎ zhè zhǒng kūnchóng de zhǔyào tèzhēng xiě xialai.',
      note:'把 + tân ngữ + 写下来: ghi lại, viết ra.',pair:'把'}
   ]},

  {n:3,zh:'翅膀',py:'chìbǎng',pos:'Danh từ',vn:'cánh (côn trùng, chim)',hv:'sí bảng',em:'🕊️',lesson:1,
   explain:['Bộ phận dùng để bay của chim, côn trùng; cũng dùng cho máy bay (飞机的翅膀).','Nghĩa bóng: 翅膀硬了 = "cánh đã cứng", chỉ con cái lớn rồi muốn tự lập, không nghe lời.'],
   usage:'Lượng từ theo bảng 词语搭配: 一只 / 一双 / 一对 + 翅膀 (一只 cho một bên cánh, 一双 / 一对 cho cả đôi). Động từ: 张开翅膀, 拍翅膀. Trong bài còn có cách nói văn viết 双翅 (= 一双翅膀).',
   collo:['一只翅膀','一双翅膀','一对翅膀','张开翅膀'],
   ex_zh:'是有翅膀会飞？还是吃昆虫？',ex_py:'Shì yǒu chìbǎng huì fēi? Háishi chī kūnchóng?',ex_vn:'Là có cánh biết bay? Hay là ăn côn trùng?',
   exList:[
     {zh:'是有翅膀会飞？还是吃昆虫？',py:'Shì yǒu chìbǎng huì fēi? Háishi chī kūnchóng?',vn:'Là có cánh biết bay? Hay là ăn côn trùng?'},
     {zh:'小鸟受伤了，一只翅膀抬不起来了。',py:'Xiǎo niǎo shòushāng le, yì zhī chìbǎng tái bu qǐlái le.',vn:'Chú chim nhỏ bị thương, một bên cánh không nhấc lên được nữa.'},
     {zh:'要是我有一双翅膀，我就能飞回家看妈妈了。',py:'Yàoshi wǒ yǒu yì shuāng chìbǎng, wǒ jiù néng fēi huí jiā kàn māma le.',vn:'Giá mà tôi có một đôi cánh, tôi đã có thể bay về nhà thăm mẹ.'}
   ],
   colloFull:[
     {zh:'一只翅膀',py:'yì zhī chìbǎng',vn:'một bên cánh'},
     {zh:'一双翅膀',py:'yì shuāng chìbǎng',vn:'một đôi cánh'},
     {zh:'一对翅膀',py:'yí duì chìbǎng',vn:'một đôi cánh'},
     {zh:'张开翅膀',py:'zhāngkāi chìbǎng',vn:'dang rộng cánh'},
     {zh:'拍翅膀',py:'pāi chìbǎng',vn:'vỗ cánh'}
   ],
   patterns:[
     {s:'一只 / 一双 / 一对 + 翅膀',m:'Một bên cánh / một đôi cánh'},
     {s:'张开 / 拍 + 翅膀',m:'Dang / vỗ cánh'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Con chim nhỏ vừa dang cánh là bay đi mất.',answer:'小鸟一张开翅膀就飞走了。',answerPy:'Xiǎo niǎo yì zhāngkāi chìbǎng jiù fēizǒu le.',
      note:'一……就……: vừa … liền …. 张开 = V + 开 (điểm ngữ pháp 3 của bài).',pair:'一……就……'},
     {promptLang:'vi',prompt:'Không chỉ chim có cánh, nhiều loài côn trùng cũng có cánh.',answer:'不仅鸟儿有翅膀，很多昆虫也有翅膀。',answerPy:'Bùjǐn niǎor yǒu chìbǎng, hěn duō kūnchóng yě yǒu chìbǎng.',
      note:'不仅……也……: không chỉ … mà … cũng ….',pair:'不仅……也……'}
   ]},

  {n:4,zh:'昆虫',py:'kūnchóng',pos:'Danh từ',vn:'côn trùng, sâu bọ',hv:'côn trùng',em:'🐞',lesson:1,
   explain:['Tên gọi chung các loài động vật nhỏ có sáu chân, cơ thể chia ba phần, thường có cánh: ong, bướm, kiến, muỗi….','Dùng trong văn viết, văn khoa học; khẩu ngữ hay nói 虫子.'],
   usage:'Lượng từ: 一只昆虫 (bài tập 3 của sách). Kết hợp: 吃昆虫, 研究昆虫, 各种各样的昆虫, 昆虫学家.',
   collo:['一只昆虫','吃昆虫','各种昆虫','研究昆虫'],
   ex_zh:'有些昆虫和鸟类一样有翅膀。',ex_py:'Yǒuxiē kūnchóng hé niǎolèi yíyàng yǒu chìbǎng.',ex_vn:'Một số côn trùng cũng có cánh giống như loài chim.',
   exList:[
     {zh:'有些昆虫和鸟类一样有翅膀。',py:'Yǒuxiē kūnchóng hé niǎolèi yíyàng yǒu chìbǎng.',vn:'Một số côn trùng cũng có cánh giống như loài chim.'},
     {zh:'是有翅膀会飞？还是吃昆虫？',py:'Shì yǒu chìbǎng huì fēi? Háishi chī kūnchóng?',vn:'Là có cánh biết bay? Hay là ăn côn trùng?'},
     {zh:'夏天的晚上，草地里有各种各样的昆虫在叫。',py:'Xiàtiān de wǎnshang, cǎodì li yǒu gè zhǒng gè yàng de kūnchóng zài jiào.',vn:'Tối mùa hè, trong bãi cỏ có đủ loại côn trùng đang kêu.'}
   ],
   colloFull:[
     {zh:'一只昆虫',py:'yì zhī kūnchóng',vn:'một con côn trùng'},
     {zh:'吃昆虫',py:'chī kūnchóng',vn:'ăn côn trùng'},
     {zh:'各种昆虫',py:'gè zhǒng kūnchóng',vn:'các loại côn trùng'},
     {zh:'研究昆虫',py:'yánjiū kūnchóng',vn:'nghiên cứu côn trùng'},
     {zh:'昆虫学家',py:'kūnchóng xuéjiā',vn:'nhà côn trùng học'}
   ],
   patterns:[
     {s:'一只 + 昆虫',m:'Một con côn trùng'},
     {s:'各种各样的 + 昆虫',m:'Đủ loại côn trùng'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Con côn trùng này bị chim ăn mất rồi.',answer:'这只昆虫被鸟儿吃掉了。',answerPy:'Zhè zhī kūnchóng bèi niǎor chīdiào le.',
      note:'Câu 被: chủ ngữ (昆虫) là bên chịu tác động; V + 掉 = mất đi.',pair:'被'},
     {promptLang:'vi',prompt:'Em trai tôi thích côn trùng nhất, ngay cả con sâu to nhất cũng không sợ.',answer:'我弟弟最喜欢昆虫了，连最大的虫子都不怕。',answerPy:'Wǒ dìdi zuì xǐhuan kūnchóng le, lián zuì dà de chóngzi dōu bú pà.',
      note:'连……都……: ngay cả … cũng …. 昆虫 văn viết, 虫子 khẩu ngữ.',pair:'连……都……'}
   ]},

  {n:5,zh:'天空',py:'tiānkōng',pos:'Danh từ',vn:'bầu trời',hv:'thiên không',em:'🌤️',lesson:1,
   explain:['Khoảng không gian phía trên mặt đất; văn viết hơn 天.','Phần 扩展 của sách xếp 天空 vào nhóm từ 地理环境 (môi trường địa lý) cùng 陆地, 池塘, 岛屿….'],
   usage:'Hay đi với phương vị từ: 天空中 / 天空里. Kết hợp: 蓝色的天空, 晴朗的天空, 飞向天空. Trong bài: 天空中飞的 đối với 陆地上走的 (đi trên cạn).',
   collo:['蓝色的天空','天空中','飞向天空','晴朗的天空'],
   ex_zh:'作为一只鸟儿，不管是天空中飞的，陆地上走的，或者能入水的，都必须拥有羽毛。',ex_py:'Zuòwéi yì zhī niǎor, bùguǎn shì tiānkōng zhōng fēi de, lùdì shang zǒu de, huòzhě néng rù shuǐ de, dōu bìxū yōngyǒu yǔmáo.',ex_vn:'Là một con chim, dù là loài bay trên trời, đi trên cạn hay có thể xuống nước, đều phải có lông vũ.',
   exList:[
     {zh:'作为一只鸟儿，不管是天空中飞的，陆地上走的，或者能入水的，都必须拥有羽毛。',py:'Zuòwéi yì zhī niǎor, bùguǎn shì tiānkōng zhōng fēi de, lùdì shang zǒu de, huòzhě néng rù shuǐ de, dōu bìxū yōngyǒu yǔmáo.',vn:'Là một con chim, dù là loài bay trên trời, đi trên cạn hay có thể xuống nước, đều phải có lông vũ.'},
     {zh:'雨停了，天空中出现了一道彩虹。',py:'Yǔ tíng le, tiānkōng zhōng chūxiànle yí dào cǎihóng.',vn:'Mưa tạnh, trên bầu trời xuất hiện một cầu vồng.'},
     {zh:'小时候我常常躺在草地上看蓝色的天空。',py:'Xiǎoshíhou wǒ chángcháng tǎng zài cǎodì shang kàn lánsè de tiānkōng.',vn:'Hồi nhỏ tôi hay nằm trên bãi cỏ ngắm bầu trời xanh.'}
   ],
   colloFull:[
     {zh:'蓝色的天空',py:'lánsè de tiānkōng',vn:'bầu trời xanh'},
     {zh:'天空中',py:'tiānkōng zhōng',vn:'trên bầu trời'},
     {zh:'飞向天空',py:'fēi xiàng tiānkōng',vn:'bay lên trời'},
     {zh:'晴朗的天空',py:'qínglǎng de tiānkōng',vn:'bầu trời quang đãng'}
   ],
   patterns:[
     {s:'天空中 + 出现了 / 飞着……',m:'Trên bầu trời xuất hiện / bay …'},
     {s:'不管是天空中……，还是陆地上……，都……',m:'Dù là trên trời hay dưới đất đều …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ô nhiễm không khí ngày càng nghiêm trọng, bầu trời không còn xanh như trước.',answer:'空气污染越来越严重，天空没有以前那么蓝了。',answerPy:'Kōngqì wūrǎn yuè lái yuè yánzhòng, tiānkōng méiyǒu yǐqián nàme lán le.',
      note:'越来越 + Adj; A 没有 B 那么 + Adj: A không … bằng B.',pair:'越来越'},
     {promptLang:'vi',prompt:'Trời vừa tối, trên bầu trời đã xuất hiện rất nhiều sao.',answer:'天一黑，天空中就出现了很多星星。',answerPy:'Tiān yì hēi, tiānkōng zhōng jiù chūxiànle hěn duō xīngxing.',
      note:'一……就……; 天空中 + 出现 (câu tồn hiện).',pair:'一……就……'}
   ]},

  {n:6,zh:'区分',py:'qūfēn',pos:'Động từ',vn:'phân biệt',hv:'khu phân',em:'⚖️',lesson:1,
   explain:['Dựa vào đặc điểm để nhận ra, tách bạch sự khác nhau giữa hai hay nhiều sự vật.','Gần nghĩa 区别 (động từ), 分辨; 区分 thường đi với tiêu chí, đặc điểm rõ ràng.'],
   usage:'Mẫu: 区分 A 和 B / 把 A 和 B 区分开(来). Hay đi với 很难 / 无法 / 能: 很难区分. Kết hợp: 区分好坏, 区分真假, 区分种类.',
   collo:['区分好坏','区分开来','很难区分','区分真假'],
   ex_zh:'区分鸟儿和其他动物的唯一特征就是羽毛，而不是会不会飞！',ex_py:'Qūfēn niǎor hé qítā dòngwù de wéiyī tèzhēng jiù shì yǔmáo, ér bú shì huì bu huì fēi!',ex_vn:'Đặc điểm duy nhất để phân biệt chim với các loài vật khác chính là lông vũ, chứ không phải có biết bay hay không!',
   exList:[
     {zh:'区分鸟儿和其他动物的唯一特征就是羽毛，而不是会不会飞！',py:'Qūfēn niǎor hé qítā dòngwù de wéiyī tèzhēng jiù shì yǔmáo, ér bú shì huì bu huì fēi!',vn:'Đặc điểm duy nhất để phân biệt chim với các loài vật khác chính là lông vũ, chứ không phải có biết bay hay không!'},
     {zh:'这对双胞胎长得太像了，我很难区分她们。',py:'Zhè duì shuāngbāotāi zhǎng de tài xiàng le, wǒ hěn nán qūfēn tāmen.',vn:'Cặp song sinh này giống nhau quá, tôi rất khó phân biệt hai chị em.'},
     {zh:'小孩子还不能区分好坏，大人要多教教他们。',py:'Xiǎo háizi hái bù néng qūfēn hǎo huài, dàrén yào duō jiāojiao tāmen.',vn:'Trẻ nhỏ chưa biết phân biệt tốt xấu, người lớn phải dạy bảo nhiều.'}
   ],
   colloFull:[
     {zh:'区分好坏',py:'qūfēn hǎo huài',vn:'phân biệt tốt xấu'},
     {zh:'区分开来',py:'qūfēn kāilai',vn:'tách bạch ra'},
     {zh:'很难区分',py:'hěn nán qūfēn',vn:'rất khó phân biệt'},
     {zh:'区分真假',py:'qūfēn zhēn jiǎ',vn:'phân biệt thật giả'},
     {zh:'区分种类',py:'qūfēn zhǒnglèi',vn:'phân chia chủng loại'}
   ],
   patterns:[
     {s:'区分 + A 和 B',m:'Phân biệt A với B'},
     {s:'把 A 和 B 区分开(来)',m:'Tách bạch A với B'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Hãy tách riêng rác tái chế được với các loại rác khác.',answer:'请把可回收的垃圾和其他垃圾区分开。',answerPy:'Qǐng bǎ kě huíshōu de lājī hé qítā lājī qūfēn kāi.',
      note:'把 A 和 B 区分开: V + 开 chỉ sự tách rời.',pair:'把'},
     {promptLang:'vi',prompt:'Chỉ cần nhìn màu lông là có thể phân biệt hai loài chim này.',answer:'只要看羽毛的颜色，就能区分这两种鸟。',answerPy:'Zhǐyào kàn yǔmáo de yánsè, jiù néng qūfēn zhè liǎng zhǒng niǎo.',
      note:'只要……就……: chỉ cần … là ….',pair:'只要……就……'}
   ]},

  {n:7,zh:'唯一',py:'wéiyī',pos:'Tính từ',vn:'duy nhất, độc nhất',hv:'duy nhất',em:'☝️',lesson:1,
   explain:['Chỉ có một, không có cái thứ hai.','Là tính từ phi vị ngữ: chủ yếu làm định ngữ (唯一的办法), không nói 很唯一, không đứng một mình làm vị ngữ.'],
   usage:'Bảng 词语搭配: 唯一 (的) + 特征 / 办法 / 选择 / 结果 / 爱 / 角色. Hay đi với 是: ……是唯一的……. Có thể nói 唯一一个 + N.',
   collo:['唯一的特征','唯一的办法','唯一的选择','唯一的爱'],
   ex_zh:'那件事将是我一生中唯一的遗憾。',ex_py:'Nà jiàn shì jiāng shì wǒ yìshēng zhōng wéiyī de yíhàn.',ex_vn:'Chuyện đó sẽ là điều tiếc nuối duy nhất trong đời tôi.',
   exList:[
     {zh:'那件事将是我一生中唯一的遗憾。',py:'Nà jiàn shì jiāng shì wǒ yìshēng zhōng wéiyī de yíhàn.',vn:'Chuyện đó sẽ là điều tiếc nuối duy nhất trong đời tôi.'},
     {zh:'区分鸟儿和其他动物的唯一特征就是羽毛。',py:'Qūfēn niǎor hé qítā dòngwù de wéiyī tèzhēng jiù shì yǔmáo.',vn:'Đặc điểm duy nhất để phân biệt chim với các động vật khác chính là lông vũ.'},
     {zh:'现在唯一的办法就是马上去医院。',py:'Xiànzài wéiyī de bànfǎ jiù shì mǎshàng qù yīyuàn.',vn:'Bây giờ cách duy nhất là lập tức đến bệnh viện.'}
   ],
   colloFull:[
     {zh:'唯一的特征',py:'wéiyī de tèzhēng',vn:'đặc điểm duy nhất'},
     {zh:'唯一的办法',py:'wéiyī de bànfǎ',vn:'cách duy nhất'},
     {zh:'唯一的选择',py:'wéiyī de xuǎnzé',vn:'lựa chọn duy nhất'},
     {zh:'唯一的爱',py:'wéiyī de ài',vn:'tình yêu duy nhất'},
     {zh:'唯一的角色',py:'wéiyī de juésè',vn:'vai trò duy nhất'}
   ],
   patterns:[
     {s:'唯一 (的) + 办法 / 选择 / 特征',m:'Cách / lựa chọn / đặc điểm duy nhất'},
     {s:'……是唯一的……',m:'… là … duy nhất'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cậu ấy là người duy nhất trong lớp chưa từng đi học muộn.',answer:'他是班里唯一一个从来没迟到过的人。',answerPy:'Tā shì bān li wéiyī yí ge cónglái méi chídàoguo de rén.',
      note:'唯一 + 一个 + định ngữ + 的 + 人; 从来没 + V + 过.',pair:'从来没……过'},
     {promptLang:'vi',prompt:'Món quà đó là do người bạn duy nhất của tôi tặng.',answer:'那个礼物是我唯一的朋友送的。',answerPy:'Nàge lǐwù shì wǒ wéiyī de péngyou sòng de.',
      note:'是……的 nhấn mạnh người thực hiện; 唯一 làm định ngữ.',pair:'是……的'}
   ]},

  {n:8,zh:'斑',py:'bān',pos:'Danh từ',vn:'đốm, vết lốm đốm',hv:'ban',em:'🐆',lesson:1,
   explain:['Vết, đốm có màu khác với màu nền trên bề mặt vật: 斑点, 雀斑 (tàn nhang).','Trong bài: 羽毛上的颜色和斑 = màu sắc và các đốm hoa văn trên lông, có thể làm màu nguỵ trang (保护色).'],
   usage:'Hay gặp trong từ ghép: 斑点 (đốm), 雀斑 (tàn nhang), 斑马 (ngựa vằn). Đứng một mình: 身上有斑, 羽毛上的斑, 几块黑色的斑.',
   collo:['羽毛上的斑','黑色的斑','斑点','斑马'],
   ex_zh:'羽毛上的颜色和斑还能充当保护色。',ex_py:'Yǔmáo shang de yánsè hé bān hái néng chōngdāng bǎohùsè.',ex_vn:'Màu sắc và các đốm trên lông còn có thể làm màu bảo vệ (nguỵ trang).',
   exList:[
     {zh:'羽毛上的颜色和斑还能充当保护色。',py:'Yǔmáo shang de yánsè hé bān hái néng chōngdāng bǎohùsè.',vn:'Màu sắc và các đốm trên lông còn có thể làm màu bảo vệ (nguỵ trang).'},
     {zh:'这只小猫全身是白的，只有背上有几块黑色的斑。',py:'Zhè zhī xiǎo māo quánshēn shì bái de, zhǐ yǒu bèi shang yǒu jǐ kuài hēisè de bān.',vn:'Con mèo con này toàn thân trắng, chỉ trên lưng có mấy đốm đen.'},
     {zh:'斑马身上的黑白条纹是它最明显的特征。',py:'Bānmǎ shēnshang de hēi bái tiáowén shì tā zuì míngxiǎn de tèzhēng.',vn:'Những sọc đen trắng trên mình ngựa vằn là đặc điểm dễ thấy nhất của nó.'}
   ],
   colloFull:[
     {zh:'羽毛上的斑',py:'yǔmáo shang de bān',vn:'đốm trên lông'},
     {zh:'黑色的斑',py:'hēisè de bān',vn:'đốm đen'},
     {zh:'斑点',py:'bāndiǎn',vn:'đốm, chấm'},
     {zh:'斑马',py:'bānmǎ',vn:'ngựa vằn'},
     {zh:'雀斑',py:'quèbān',vn:'tàn nhang'}
   ],
   patterns:[
     {s:'N + 上 + 有 + (几块) + 斑',m:'Trên … có (mấy) đốm'},
     {s:'斑点 / 雀斑 / 斑马',m:'Đốm / tàn nhang / ngựa vằn'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy trên mặt cô ấy có mấy nốt tàn nhang, nhưng trông rất đáng yêu.',answer:'虽然她脸上有几个雀斑，但是看起来很可爱。',answerPy:'Suīrán tā liǎn shang yǒu jǐ ge quèbān, dànshì kàn qilai hěn kě\'ài.',
      note:'虽然……但是……; 雀斑 = 雀 (chim sẻ) + 斑 (đốm): đốm nhỏ như trứng chim sẻ.',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Những đốm trên lông khiến kẻ thù rất khó phát hiện ra chim.',answer:'羽毛上的斑让敌人很难发现鸟儿。',answerPy:'Yǔmáo shang de bān ràng dírén hěn nán fāxiàn niǎor.',
      note:'Câu kiêm ngữ 让 + người + V: khiến ai làm gì.',pair:'让 (kiêm ngữ)'}
   ]},

  {n:9,zh:'充当',py:'chōngdāng',pos:'Động từ',vn:'làm, đảm nhiệm (vai trò)',hv:'sung đương',em:'🎭',lesson:1,
   explain:['Đảm nhận một vai trò, một chức năng nào đó (thường là tạm thời hoặc theo nghĩa bóng).','Tân ngữ thường là vai trò / chức năng: 充当翻译, 充当……的角色, 充当保护色.'],
   usage:'Mẫu quan trọng: 在……中充当着……的角色 (đóng vai trò … trong …). Hay đi với 着. Khác 担任 (đảm nhiệm chức vụ chính thức: 担任经理).',
   collo:['充当保护色','充当翻译','充当……的角色','充当向导'],
   ex_zh:'总之，在鸟儿的生活中，羽毛充当着十分重要的角色。',ex_py:'Zǒngzhī, zài niǎor de shēnghuó zhōng, yǔmáo chōngdāngzhe shífēn zhòngyào de juésè.',ex_vn:'Tóm lại, trong cuộc sống của loài chim, lông vũ đóng vai trò vô cùng quan trọng.',
   exList:[
     {zh:'总之，在鸟儿的生活中，羽毛充当着十分重要的角色。',py:'Zǒngzhī, zài niǎor de shēnghuó zhōng, yǔmáo chōngdāngzhe shífēn zhòngyào de juésè.',vn:'Tóm lại, trong cuộc sống của loài chim, lông vũ đóng vai trò vô cùng quan trọng.'},
     {zh:'羽毛上的颜色和斑还能充当保护色。',py:'Yǔmáo shang de yánsè hé bān hái néng chōngdāng bǎohùsè.',vn:'Màu sắc và các đốm trên lông còn có thể làm màu bảo vệ.'},
     {zh:'去中国旅游时，我的中国朋友充当了我们的翻译和向导。',py:'Qù Zhōngguó lǚyóu shí, wǒ de Zhōngguó péngyou chōngdāngle wǒmen de fānyì hé xiàngdǎo.',vn:'Khi đi du lịch Trung Quốc, người bạn Trung Quốc của tôi đã làm phiên dịch kiêm người dẫn đường cho chúng tôi.'}
   ],
   colloFull:[
     {zh:'充当保护色',py:'chōngdāng bǎohùsè',vn:'làm màu bảo vệ (nguỵ trang)'},
     {zh:'充当翻译',py:'chōngdāng fānyì',vn:'làm phiên dịch'},
     {zh:'充当……的角色',py:'chōngdāng……de juésè',vn:'đóng vai trò …'},
     {zh:'充当向导',py:'chōngdāng xiàngdǎo',vn:'làm người dẫn đường'}
   ],
   patterns:[
     {s:'在……中 + 充当着 + ……的角色',m:'Đóng vai trò … trong …'},
     {s:'充当 + 翻译 / 向导 / 保护色',m:'Làm phiên dịch / người dẫn đường / màu bảo vệ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ở nhà tôi, mẹ vừa làm đầu bếp vừa làm cô giáo.',answer:'在我家，妈妈既充当厨师，又充当老师。',answerPy:'Zài wǒ jiā, māma jì chōngdāng chúshī, yòu chōngdāng lǎoshī.',
      note:'既……又……: vừa … vừa … (bài khoá: 既可以保暖，又可以保护皮肤).',pair:'既……又……'},
     {promptLang:'vi',prompt:'Trong hoạt động lần này, cậu ấy được chọn làm người dẫn chương trình.',answer:'这次活动中，他被选出来充当主持人。',answerPy:'Zhè cì huódòng zhōng, tā bèi xuǎn chulai chōngdāng zhǔchírén.',
      note:'Câu 被 không có tác nhân: 被 + 选出来 + 充当…….',pair:'被'}
   ]},

  {n:10,zh:'总之',py:'zǒngzhī',pos:'Liên từ',vn:'nói chung, tóm lại',hv:'tổng chi',em:'📝',lesson:1,
   explain:['Liên từ, dùng để khái quát, tổng kết nội dung phía trước (= 总的来说).','Còn dùng sau khi liệt kê nhiều khả năng mà chưa nói rõ hết, để rút ra kết luận chung: 总之，想去南方几个城市转转.'],
   usage:'Đứng đầu câu hoặc đầu vế sau, thường có dấu phẩy: ……，总之，……. Gần nghĩa 总而言之 (văn viết), 总的来说. Thường chỉ dùng MỘT lần, ở phần kết.',
   collo:['总之，……','总而言之','总的来说'],
   ex_zh:'总之，在鸟儿的生活中，羽毛充当着十分重要的角色。',ex_py:'Zǒngzhī, zài niǎor de shēnghuó zhōng, yǔmáo chōngdāngzhe shífēn zhòngyào de juésè.',ex_vn:'Tóm lại, trong cuộc sống của loài chim, lông vũ đóng vai trò vô cùng quan trọng.',
   exList:[
     {zh:'总之，在鸟儿的生活中，羽毛充当着十分重要的角色。',py:'Zǒngzhī, zài niǎor de shēnghuó zhōng, yǔmáo chōngdāngzhe shífēn zhòngyào de juésè.',vn:'Tóm lại, trong cuộc sống của loài chim, lông vũ đóng vai trò vô cùng quan trọng.'},
     {zh:'暑假我可能去上海、南京，还有杭州，总之，想去南方几个城市转转。',py:'Shǔjià wǒ kěnéng qù Shànghǎi, Nánjīng, hái yǒu Hángzhōu, zǒngzhī, xiǎng qù nánfāng jǐ ge chéngshì zhuànzhuan.',vn:'Kỳ nghỉ hè có thể tôi sẽ đi Thượng Hải, Nam Kinh, còn cả Hàng Châu nữa, nói chung là muốn đi dạo một vòng mấy thành phố phía nam.'},
     {zh:'总之，网络的确带给我们以前无法想象的方便，但同时它也带来了一定的危害。',py:'Zǒngzhī, wǎngluò díquè dài gěi wǒmen yǐqián wúfǎ xiǎngxiàng de fāngbiàn, dàn tóngshí tā yě dàiláile yídìng de wēihài.',vn:'Tóm lại, mạng internet quả thật đem lại cho chúng ta sự tiện lợi mà trước kia không thể tưởng tượng nổi, nhưng đồng thời nó cũng mang đến những tác hại nhất định.'}
   ],
   colloFull:[
     {zh:'总之，……',py:'zǒngzhī, ……',vn:'tóm lại, …'},
     {zh:'总而言之',py:'zǒng ér yán zhī',vn:'nói tóm lại'},
     {zh:'总的来说',py:'zǒng de lái shuō',vn:'nói chung'},
     {zh:'总之一句话',py:'zǒngzhī yí jù huà',vn:'tóm lại một câu'}
   ],
   patterns:[
     {s:'(liệt kê A, B, C)，总之，+ kết luận',m:'…, tóm lại, …'},
     {s:'不管……，总之……',m:'Dù … thì tóm lại …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Dù cậu có đi hay không, tóm lại tớ nhất định phải đi.',answer:'不管你去不去，总之我一定要去。',answerPy:'Bùguǎn nǐ qù bu qù, zǒngzhī wǒ yídìng yào qù.',
      note:'Bài 练一练 (1) của sách: 不管 + dạng khẳng định–phủ định (去不去)，总之 + kết luận không đổi.',pair:'不管……'},
     {promptLang:'vi',prompt:'Món Trung Quốc có thể xào, có thể hấp, còn có thể nấu canh, tóm lại là có rất nhiều cách làm.',answer:'中国菜可以炒，可以蒸，还可以做汤，总之，有很多做法。',answerPy:'Zhōngguó cài kěyǐ chǎo, kěyǐ zhēng, hái kěyǐ zuò tāng, zǒngzhī, yǒu hěn duō zuòfǎ.',
      note:'Liệt kê bằng 可以……，可以……，还可以……, rồi dùng 总之 để khái quát (bài 练一练 (3)).',pair:'……，还……'}
   ]},

  {n:11,zh:'角色',py:'juésè',pos:'Danh từ',vn:'vai, vai trò',hv:'giác sắc',em:'🎬',lesson:1,
   explain:['Nhân vật mà diễn viên đóng trong phim, kịch: 演一个角色.','Nghĩa bóng: vai trò, vị trí của người / vật trong một hoàn cảnh: 充当重要的角色.'],
   usage:'Chú ý đọc juésè (không đọc jiǎosè). Kết hợp: 扮演 / 充当 + ……的角色, 主要角色, 重要的角色, 唯一的角色 (bảng 词语搭配).',
   collo:['重要的角色','扮演角色','主要角色','充当……的角色'],
   ex_zh:'在这部电影里，她扮演了一个很难演的角色。',ex_py:'Zài zhè bù diànyǐng li, tā bànyǎnle yí ge hěn nán yǎn de juésè.',ex_vn:'Trong bộ phim này, cô ấy đóng một vai rất khó diễn.',
   exList:[
     {zh:'在这部电影里，她扮演了一个很难演的角色。',py:'Zài zhè bù diànyǐng li, tā bànyǎnle yí ge hěn nán yǎn de juésè.',vn:'Trong bộ phim này, cô ấy đóng một vai rất khó diễn.'},
     {zh:'总之，在鸟儿的生活中，羽毛充当着十分重要的角色。',py:'Zǒngzhī, zài niǎor de shēnghuó zhōng, yǔmáo chōngdāngzhe shífēn zhòngyào de juésè.',vn:'Tóm lại, trong cuộc sống của loài chim, lông vũ đóng vai trò vô cùng quan trọng.'},
     {zh:'在家里，爸爸常常扮演“好朋友”的角色。',py:'Zài jiā li, bàba chángcháng bànyǎn "hǎo péngyou" de juésè.',vn:'Ở nhà, bố thường đóng vai "người bạn tốt".'}
   ],
   colloFull:[
     {zh:'重要的角色',py:'zhòngyào de juésè',vn:'vai trò quan trọng'},
     {zh:'扮演角色',py:'bànyǎn juésè',vn:'đóng vai'},
     {zh:'主要角色',py:'zhǔyào juésè',vn:'vai chính'},
     {zh:'充当……的角色',py:'chōngdāng……de juésè',vn:'đóng vai trò …'},
     {zh:'唯一的角色',py:'wéiyī de juésè',vn:'vai trò duy nhất'}
   ],
   patterns:[
     {s:'扮演 / 充当 + ……的角色',m:'Đóng vai …'},
     {s:'在……中 + 充当着 + 重要的角色',m:'Giữ vai trò quan trọng trong …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vai này là do một diễn viên trẻ đóng.',answer:'这个角色是一位年轻演员演的。',answerPy:'Zhège juésè shì yí wèi niánqīng yǎnyuán yǎn de.',
      note:'是……的 nhấn mạnh người thực hiện hành động.',pair:'是……的'},
     {promptLang:'vi',prompt:'Thầy cô không chỉ là người dạy kiến thức, mà cũng đóng vai trò người bạn.',answer:'老师不仅是教知识的人，也充当着朋友的角色。',answerPy:'Lǎoshī bùjǐn shì jiāo zhīshi de rén, yě chōngdāngzhe péngyou de juésè.',
      note:'不仅……也……; 充当着……的角色.',pair:'不仅……也……'}
   ]},

  {n:12,zh:'爱惜',py:'àixī',pos:'Động từ',vn:'yêu quý, quý trọng',hv:'ái tích',em:'💝',lesson:1,
   explain:['Quý trọng, giữ gìn cẩn thận, không để hư hỏng, không lãng phí.','Tân ngữ thường là đồ vật, thời gian, sức khoẻ, sinh mạng: 爱惜粮食, 爱惜身体, 爱惜时间. Nghĩa bóng: 爱惜羽毛 = giữ gìn thanh danh.'],
   usage:'Bảng 词语搭配: 爱惜 + 羽毛 / 身体 / 生命 / 粮食; bài tập 3: 爱惜 + 财物. Khác 爱护: 爱护 nhấn mạnh bảo vệ, che chở, hay dùng cho người và động vật (爱护动物, 爱护孩子, 爱护公物).',
   collo:['爱惜羽毛','爱惜身体','爱惜生命','爱惜粮食','爱惜财物'],
   ex_zh:'所以，鸟儿非常爱惜羽毛，每天都会花很长时间来保养自己的“羽衣”。',ex_py:'Suǒyǐ, niǎor fēicháng àixī yǔmáo, měi tiān dōu huì huā hěn cháng shíjiān lái bǎoyǎng zìjǐ de "yǔyī".',ex_vn:'Vì vậy, loài chim rất quý bộ lông, ngày nào cũng dành nhiều thời gian để chăm sóc "chiếc áo lông" của mình.',
   exList:[
     {zh:'所以，鸟儿非常爱惜羽毛，每天都会花很长时间来保养自己的“羽衣”。',py:'Suǒyǐ, niǎor fēicháng àixī yǔmáo, měi tiān dōu huì huā hěn cháng shíjiān lái bǎoyǎng zìjǐ de "yǔyī".',vn:'Vì vậy, loài chim rất quý bộ lông, ngày nào cũng dành nhiều thời gian để chăm sóc "chiếc áo lông" của mình.'},
     {zh:'我们要爱惜粮食，不要浪费。',py:'Wǒmen yào àixī liángshi, bú yào làngfèi.',vn:'Chúng ta phải quý trọng lương thực, không được lãng phí.'},
     {zh:'你得爱惜身体，别老是加班到半夜。',py:'Nǐ děi àixī shēntǐ, bié lǎoshì jiābān dào bànyè.',vn:'Con phải biết giữ gìn sức khoẻ, đừng lúc nào cũng tăng ca đến nửa đêm.'}
   ],
   colloFull:[
     {zh:'爱惜羽毛',py:'àixī yǔmáo',vn:'quý bộ lông; giữ gìn thanh danh'},
     {zh:'爱惜身体',py:'àixī shēntǐ',vn:'giữ gìn sức khoẻ'},
     {zh:'爱惜生命',py:'àixī shēngmìng',vn:'quý trọng sinh mạng'},
     {zh:'爱惜粮食',py:'àixī liángshi',vn:'quý trọng lương thực'},
     {zh:'爱惜财物',py:'àixī cáiwù',vn:'giữ gìn của cải'}
   ],
   patterns:[
     {s:'爱惜 + 身体 / 生命 / 粮食 / 时间',m:'Quý trọng sức khoẻ / sinh mạng / lương thực / thời gian'},
     {s:'爱惜羽毛 (nghĩa bóng)',m:'Giữ gìn danh tiếng'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cuốn sách này là ông nội tặng tôi, tôi luôn rất quý nó.',answer:'这本书是爷爷送给我的，我一直很爱惜它。',answerPy:'Zhè běn shū shì yéye sòng gěi wǒ de, wǒ yìzhí hěn àixī tā.',
      note:'是……的 nhấn mạnh người tặng; 爱惜 + đồ vật (quý, giữ gìn cẩn thận).',pair:'是……的'},
     {promptLang:'vi',prompt:'Nếu không biết giữ gìn sức khoẻ, thì có nhiều tiền đến mấy cũng vô ích.',answer:'如果不爱惜身体，钱再多也没用。',answerPy:'Rúguǒ bú àixī shēntǐ, qián zài duō yě méi yòng.',
      note:'再 + Adj + 也……: dù … đến mấy cũng ….',pair:'再……也……'}
   ]},

  {n:13,zh:'保养',py:'bǎoyǎng',pos:'Động từ',vn:'chăm sóc, giữ gìn, bảo dưỡng',hv:'bảo dưỡng',em:'🧴',lesson:1,
   explain:['Chăm sóc để giữ gìn sức khoẻ, sắc đẹp: 保养身体, 保养皮肤; 她保养得很好 = cô ấy giữ gìn nhan sắc rất tốt.','Bảo dưỡng máy móc, xe cộ để dùng được bền: 保养汽车, 定期保养.'],
   usage:'Kết hợp: 保养身体 / 皮肤 / 汽车 / 羽毛; 定期保养; V + 得很好: 保养得很好. Trong bài còn dùng như danh từ: 保养的基本功, 保养方式, 保养项目.',
   collo:['保养身体','保养皮肤','保养汽车','定期保养','保养方式'],
   ex_zh:'整理羽毛是保养的基本功。',ex_py:'Zhěnglǐ yǔmáo shì bǎoyǎng de jīběngōng.',ex_vn:'Chải chuốt lông là "kỹ năng cơ bản" của việc chăm sóc.',
   exList:[
     {zh:'整理羽毛是保养的基本功。',py:'Zhěnglǐ yǔmáo shì bǎoyǎng de jīběngōng.',vn:'Chải chuốt lông là "kỹ năng cơ bản" của việc chăm sóc.'},
     {zh:'我奶奶七十多岁了，可是保养得很好，看起来只有五十多岁。',py:'Wǒ nǎinai qīshí duō suì le, kěshì bǎoyǎng de hěn hǎo, kàn qilai zhǐ yǒu wǔshí duō suì.',vn:'Bà tôi hơn bảy mươi tuổi rồi, nhưng giữ gìn rất tốt, trông chỉ như ngoài năm mươi.'},
     {zh:'汽车要定期保养，才能开得久。',py:'Qìchē yào dìngqī bǎoyǎng, cái néng kāi de jiǔ.',vn:'Ô tô phải bảo dưỡng định kỳ thì mới chạy được lâu.'}
   ],
   colloFull:[
     {zh:'保养身体',py:'bǎoyǎng shēntǐ',vn:'giữ gìn sức khoẻ'},
     {zh:'保养皮肤',py:'bǎoyǎng pífū',vn:'chăm sóc da'},
     {zh:'保养汽车',py:'bǎoyǎng qìchē',vn:'bảo dưỡng ô tô'},
     {zh:'定期保养',py:'dìngqī bǎoyǎng',vn:'bảo dưỡng định kỳ'},
     {zh:'保养方式',py:'bǎoyǎng fāngshì',vn:'cách chăm sóc'}
   ],
   patterns:[
     {s:'保养 + 身体 / 皮肤 / 汽车',m:'Giữ gìn sức khoẻ / chăm sóc da / bảo dưỡng xe'},
     {s:'(S) + 保养得 + 很好',m:'… được giữ gìn rất tốt'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chiếc xe đạp này được bố tôi bảo dưỡng rất tốt.',answer:'这辆自行车被爸爸保养得很好。',answerPy:'Zhè liàng zìxíngchē bèi bàba bǎoyǎng de hěn hǎo.',
      note:'Câu 被 + bổ ngữ trạng thái: 被 + người + V + 得 + 很好.',pair:'被'},
     {promptLang:'vi',prompt:'Chỉ cần thường xuyên bảo dưỡng, máy tính có thể dùng thêm được mấy năm.',answer:'只要经常保养，电脑就能多用几年。',answerPy:'Zhǐyào jīngcháng bǎoyǎng, diànnǎo jiù néng duō yòng jǐ nián.',
      note:'只要……就……; 多 + V + thời gian: dùng thêm được bao lâu.',pair:'只要……就……'}
   ]},

  {n:14,zh:'反复',py:'fǎnfù',pos:'Phó từ / Động từ / Danh từ',vn:'nhiều lần, lặp đi lặp lại; tái diễn',hv:'phản phục',em:'🔁',lesson:1,
   explain:['Phó từ (nghĩa trong bảng 生词): một lần rồi lại một lần, lặp đi lặp lại: 反复地啄着羽毛, 反复强调, 反复练习.','Động từ: tình trạng bất lợi lặp lại, tái phát (这种病容易反复). Danh từ: sự lặp lại không tốt (病情出现了反复).'],
   usage:'Làm trạng ngữ, có thể thêm 地: 反复(地) + V. Kết hợp: 反复强调 / 反复练习 / 反复思考 / 反复实验. Khác 重复 (động từ: làm lại / xuất hiện lại cùng một thứ — 重复一遍) — xem phần 词语辨析.',
   collo:['反复强调','反复练习','反复实验','反复思考'],
   ex_zh:'……它们只要有时间，就会情不自禁地背过头去，反复地啄着羽毛。',ex_py:'……Tāmen zhǐyào yǒu shíjiān, jiù huì qíngbúzìjīn de bèiguo tóu qu, fǎnfù de zhuózhe yǔmáo.',ex_vn:'…Hễ có thời gian là chúng lại bất giác ngoảnh đầu ra sau, rỉa lông hết lần này đến lần khác.',
   exList:[
     {zh:'……它们只要有时间，就会情不自禁地背过头去，反复地啄着羽毛。',py:'……Tāmen zhǐyào yǒu shíjiān, jiù huì qíngbúzìjīn de bèiguo tóu qu, fǎnfù de zhuózhe yǔmáo.',vn:'…Hễ có thời gian là chúng lại bất giác ngoảnh đầu ra sau, rỉa lông hết lần này đến lần khác.'},
     {zh:'老板反复强调过很多次了。',py:'Lǎobǎn fǎnfù qiángdiàoguo hěn duō cì le.',vn:'Sếp đã nhấn mạnh đi nhấn mạnh lại rất nhiều lần rồi.'},
     {zh:'经过反复实验，他们终于成功了。',py:'Jīngguò fǎnfù shíyàn, tāmen zhōngyú chénggōng le.',vn:'Qua nhiều lần thí nghiệm, cuối cùng họ đã thành công.'}
   ],
   colloFull:[
     {zh:'反复强调',py:'fǎnfù qiángdiào',vn:'nhấn mạnh nhiều lần'},
     {zh:'反复练习',py:'fǎnfù liànxí',vn:'luyện đi luyện lại'},
     {zh:'反复实验',py:'fǎnfù shíyàn',vn:'thí nghiệm nhiều lần'},
     {zh:'反复思考',py:'fǎnfù sīkǎo',vn:'suy đi nghĩ lại'},
     {zh:'病情反复',py:'bìngqíng fǎnfù',vn:'bệnh tình tái đi tái lại'}
   ],
   patterns:[
     {s:'反复(地) + V',m:'… đi … lại, nhiều lần'},
     {s:'病情 / 情况 + 出现了反复',m:'Bệnh tình / tình hình tái diễn'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bài khoá này tôi đã đọc đi đọc lại nhiều lần mà vẫn không thuộc.',answer:'这篇课文我反复读了很多遍，可还是背不下来。',answerPy:'Zhè piān kèwén wǒ fǎnfù dúle hěn duō biàn, kě háishi bèi bu xiàlái.',
      note:'反复 + V + 了 + 很多遍; 背不下来 là bổ ngữ khả năng (không thuộc nổi).',pair:'V不下来 (bổ ngữ khả năng)'},
     {promptLang:'vi',prompt:'Mẹ đã nói đi nói lại câu "đi đường cẩn thận" mấy lần liền.',answer:'妈妈把“路上小心”反复说了好几遍。',answerPy:'Māma bǎ "lùshang xiǎoxīn" fǎnfù shuōle hǎo jǐ biàn.',
      note:'把 + câu nói + 反复说了好几遍: phó từ 反复 đứng sau 把-cụm, trước động từ.',pair:'把'}
   ]},

  {n:15,zh:'啄',py:'zhuó',pos:'Động từ',vn:'mổ, rỉa',hv:'trác',em:'🐔',lesson:1,
   explain:['Chim dùng mỏ mổ thức ăn hoặc mổ vào vật: 啄米, 啄树.','Trong bài: 啄着羽毛 = rỉa lông, dùng mỏ chải chuốt bộ lông. 啄木鸟 = chim gõ kiến.'],
   usage:'Chủ ngữ gần như luôn là chim, gà: 鸡啄米, 啄木鸟啄树. Kết hợp: 啄着羽毛, 啄了一下, 被……啄了一下.',
   collo:['啄米','啄羽毛','啄木鸟','啄了一下'],
   ex_zh:'院子里的几只鸡正在低头啄米。',ex_py:'Yuànzi li de jǐ zhī jī zhèngzài dī tóu zhuó mǐ.',ex_vn:'Mấy con gà trong sân đang cúi đầu mổ thóc.',
   exList:[
     {zh:'院子里的几只鸡正在低头啄米。',py:'Yuànzi li de jǐ zhī jī zhèngzài dī tóu zhuó mǐ.',vn:'Mấy con gà trong sân đang cúi đầu mổ thóc.'},
     {zh:'它们只要有时间，就会情不自禁地背过头去，反复地啄着羽毛。',py:'Tāmen zhǐyào yǒu shíjiān, jiù huì qíngbúzìjīn de bèiguo tóu qu, fǎnfù de zhuózhe yǔmáo.',vn:'Hễ có thời gian là chúng lại bất giác ngoảnh đầu ra sau, rỉa lông hết lần này đến lần khác.'},
     {zh:'我伸手去摸小鸟，被它啄了一下。',py:'Wǒ shēn shǒu qù mō xiǎo niǎo, bèi tā zhuóle yí xià.',vn:'Tôi đưa tay ra sờ chú chim nhỏ, bị nó mổ cho một cái.'}
   ],
   colloFull:[
     {zh:'啄米',py:'zhuó mǐ',vn:'mổ thóc'},
     {zh:'啄羽毛',py:'zhuó yǔmáo',vn:'rỉa lông'},
     {zh:'啄木鸟',py:'zhuómùniǎo',vn:'chim gõ kiến'},
     {zh:'啄了一下',py:'zhuóle yí xià',vn:'mổ một cái'}
   ],
   patterns:[
     {s:'(chim, gà) + 啄 + N',m:'(Chim, gà) mổ …'},
     {s:'被 + (chim) + 啄了一下',m:'Bị (chim) mổ một cái'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tay em gái tôi bị con gà mổ một cái.',answer:'妹妹的手被鸡啄了一下。',answerPy:'Mèimei de shǒu bèi jī zhuóle yí xià.',
      note:'Câu 被: 被 + tác nhân (鸡) + V + 了 + 一下.',pair:'被'},
     {promptLang:'vi',prompt:'Con chim gõ kiến vừa đậu lên cây là bắt đầu mổ vào thân cây.',answer:'啄木鸟一落到树上，就开始啄树干。',answerPy:'Zhuómùniǎo yí luòdào shù shang, jiù kāishǐ zhuó shùgàn.',
      note:'一……就……: vừa … liền ….',pair:'一……就……'}
   ]},

  {n:16,zh:'随身',py:'suíshēn',pos:'Tính từ',vn:'mang bên mình, theo bên người',hv:'tuỳ thân',em:'🎒',lesson:1,
   explain:['Mang theo người, để bên cạnh mình: 随身带着, 随身物品 (đồ tuỳ thân).','Thường làm trạng ngữ trước 带 / 携带, hoặc làm định ngữ: 随身行李, 随身物品.'],
   usage:'Mẫu: 随身 + 带(着) / 携带 + N. Khác 随手 (tiện tay làm luôn một việc: 随手关门, 随手关灯) — bài tập 2 của sách.',
   collo:['随身带着','随身物品','随身行李','随身携带'],
   ex_zh:'……就像随身带了一把梳子梳头发一样。',ex_py:'……Jiù xiàng suíshēn dàile yì bǎ shūzi shū tóufa yíyàng.',ex_vn:'…Giống như mang theo bên mình một chiếc lược để chải tóc vậy.',
   exList:[
     {zh:'……就像随身带了一把梳子梳头发一样。',py:'……Jiù xiàng suíshēn dàile yì bǎ shūzi shū tóufa yíyàng.',vn:'…Giống như mang theo bên mình một chiếc lược để chải tóc vậy.'},
     {zh:'她总是随身带着伞，说“不怕一万，就怕万一”。',py:'Tā zǒngshì suíshēn dàizhe sǎn, shuō "bú pà yíwàn, jiù pà wànyī".',vn:'Cô ấy lúc nào cũng mang ô theo người, bảo rằng "không sợ vạn lần, chỉ sợ lỡ một lần".'},
     {zh:'下车时请带好您的随身物品。',py:'Xià chē shí qǐng dàihǎo nín de suíshēn wùpǐn.',vn:'Khi xuống xe xin quý khách mang theo đầy đủ đồ dùng cá nhân.'}
   ],
   colloFull:[
     {zh:'随身带着',py:'suíshēn dàizhe',vn:'mang theo người'},
     {zh:'随身物品',py:'suíshēn wùpǐn',vn:'đồ tuỳ thân'},
     {zh:'随身行李',py:'suíshēn xíngli',vn:'hành lý xách tay'},
     {zh:'随身携带',py:'suíshēn xiédài',vn:'mang theo bên mình'}
   ],
   patterns:[
     {s:'随身 + 带(着) / 携带 + N',m:'Mang … theo người'},
     {s:'随身 + 物品 / 行李',m:'Đồ / hành lý tuỳ thân'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Hộ chiếu nhất định phải mang theo người, đừng để trong hành lý.',answer:'护照一定要随身带着，别放在行李里。',answerPy:'Hùzhào yídìng yào suíshēn dàizhe, bié fàng zài xíngli li.',
      note:'Tân ngữ (护照) đưa lên đầu câu làm chủ đề; 随身 + 带着.',pair:'V + 着'},
     {promptLang:'vi',prompt:'Túi của tôi bị người ta lấy mất, đồ tuỳ thân mất hết cả rồi.',answer:'我的包被人拿走了，随身物品都丢了。',answerPy:'Wǒ de bāo bèi rén názǒu le, suíshēn wùpǐn dōu diū le.',
      note:'Câu 被: 被 + 人 + 拿走了.',pair:'被'}
   ]},

  {n:17,zh:'梳子',py:'shūzi',pos:'Danh từ',vn:'(cái) lược',hv:'sơ tử',em:'💇',lesson:1,
   explain:['Dụng cụ có răng dùng để chải tóc.','梳 cũng là động từ: 梳头发 (chải tóc), 梳来梳去 (chải tới chải lui).'],
   usage:'Lượng từ theo bảng 词语搭配: 一把梳子. Kết hợp: 用梳子梳头, 木头梳子, 随身带着梳子.',
   collo:['一把梳子','用梳子梳头','木头梳子','随身带着梳子'],
   ex_zh:'一个大男人，天天随身带着把梳子，碰到镜子就梳来梳去的，我看不惯。',ex_py:'Yí ge dà nánrén, tiāntiān suíshēn dàizhe bǎ shūzi, pèngdào jìngzi jiù shū lái shū qù de, wǒ kàn bu guàn.',ex_vn:'Một người đàn ông to xác mà ngày nào cũng mang theo cái lược, thấy gương là chải tới chải lui, tôi nhìn không quen mắt.',
   exList:[
     {zh:'一个大男人，天天随身带着把梳子，碰到镜子就梳来梳去的，我看不惯。',py:'Yí ge dà nánrén, tiāntiān suíshēn dàizhe bǎ shūzi, pèngdào jìngzi jiù shū lái shū qù de, wǒ kàn bu guàn.',vn:'Một người đàn ông to xác mà ngày nào cũng mang theo cái lược, thấy gương là chải tới chải lui, tôi nhìn không quen mắt.'},
     {zh:'……就像随身带了一把梳子梳头发一样。',py:'……Jiù xiàng suíshēn dàile yì bǎ shūzi shū tóufa yíyàng.',vn:'…Giống như mang theo bên mình một chiếc lược để chải tóc vậy.'},
     {zh:'我的梳子找不到了，你看见了吗？',py:'Wǒ de shūzi zhǎo bu dào le, nǐ kànjiàn le ma?',vn:'Tôi không tìm thấy cái lược đâu cả, bạn có thấy không?'}
   ],
   colloFull:[
     {zh:'一把梳子',py:'yì bǎ shūzi',vn:'một cái lược'},
     {zh:'用梳子梳头',py:'yòng shūzi shū tóu',vn:'dùng lược chải đầu'},
     {zh:'木头梳子',py:'mùtou shūzi',vn:'lược gỗ'},
     {zh:'随身带着梳子',py:'suíshēn dàizhe shūzi',vn:'mang lược theo người'}
   ],
   patterns:[
     {s:'一把 + 梳子',m:'Một cái lược'},
     {s:'用梳子 + 梳头(发)',m:'Dùng lược chải tóc'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chiếc lược gỗ này là bà ngoại mua cho tôi ở Hàng Châu.',answer:'这把木头梳子是外婆在杭州给我买的。',answerPy:'Zhè bǎ mùtou shūzi shì wàipó zài Hángzhōu gěi wǒ mǎi de.',
      note:'是……的 nhấn mạnh người mua và nơi mua; lượng từ 把.',pair:'是……的'},
     {promptLang:'vi',prompt:'Hãy cất cái lược vào ngăn kéo.',answer:'请把梳子放进抽屉里。',answerPy:'Qǐng bǎ shūzi fàngjìn chōuti li.',
      note:'把 + N + 放进 + nơi chốn.',pair:'把'}
   ]},

  {n:18,zh:'光滑',py:'guānghuá',pos:'Tính từ',vn:'trơn, mượt, bóng loáng',hv:'quang hoạt',em:'✨',lesson:1,
   explain:['Bề mặt bằng phẳng, nhẵn nhụi, không thô ráp: 光滑的皮肤, 表面很光滑.','Trong bài: 上上油，让羽毛更光滑 = bôi chút dầu cho lông mượt hơn.'],
   usage:'Bảng 词语搭配: 光滑的 + 表面 / 皮肤 / 羽毛. Làm vị ngữ: 皮肤很光滑; bổ ngữ: 变得更加光滑. Trái nghĩa: 粗糙 (cūcāo, thô ráp).',
   collo:['光滑的表面','光滑的皮肤','光滑的羽毛'],
   ex_zh:'……顺便上上油，让羽毛更光滑。',ex_py:'……Shùnbiàn shàngshang yóu, ràng yǔmáo gèng guānghuá.',ex_vn:'…Tiện thể bôi chút dầu, cho lông mượt hơn.',
   exList:[
     {zh:'……顺便上上油，让羽毛更光滑。',py:'……Shùnbiàn shàngshang yóu, ràng yǔmáo gèng guānghuá.',vn:'…Tiện thể bôi chút dầu, cho lông mượt hơn.'},
     {zh:'经常使用我们的肥皂，您的皮肤将变得更加光滑。',py:'Jīngcháng shǐyòng wǒmen de féizào, nín de pífū jiāng biàn de gèngjiā guānghuá.',vn:'Thường xuyên dùng xà phòng của chúng tôi, làn da của bạn sẽ trở nên mịn màng hơn.'},
     {zh:'下过雨以后石头表面很光滑，走路要小心。',py:'Xiàguo yǔ yǐhòu shítou biǎomiàn hěn guānghuá, zǒulù yào xiǎoxīn.',vn:'Sau mưa mặt đá rất trơn, đi đường phải cẩn thận.'}
   ],
   colloFull:[
     {zh:'光滑的表面',py:'guānghuá de biǎomiàn',vn:'bề mặt nhẵn'},
     {zh:'光滑的皮肤',py:'guānghuá de pífū',vn:'làn da mịn màng'},
     {zh:'光滑的羽毛',py:'guānghuá de yǔmáo',vn:'bộ lông mượt'},
     {zh:'变得光滑',py:'biàn de guānghuá',vn:'trở nên nhẵn mịn'}
   ],
   patterns:[
     {s:'光滑的 + 表面 / 皮肤 / 羽毛',m:'Bề mặt nhẵn / da mịn / lông mượt'},
     {s:'让 / 使 + N + 更光滑',m:'Làm cho … mượt / nhẵn hơn'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Mặt bàn này nhẵn đến mức có thể soi gương được.',answer:'这张桌子的表面光滑得能照镜子。',answerPy:'Zhè zhāng zhuōzi de biǎomiàn guānghuá de néng zhào jìngzi.',
      note:'Adj + 得 + bổ ngữ mức độ: nhẵn đến mức ….',pair:'Adj + 得 + bổ ngữ'},
     {promptLang:'vi',prompt:'Da của em bé ngày càng mịn màng.',answer:'宝宝的皮肤越来越光滑了。',answerPy:'Bǎobao de pífū yuè lái yuè guānghuá le.',
      note:'越来越 + Adj + 了.',pair:'越来越'}
   ]},

  {n:19,zh:'抓',py:'zhuā',pos:'Động từ',vn:'bắt, tóm, nắm',hv:'trảo',em:'✊',lesson:1,
   explain:['Dùng tay (móng, mỏ) nắm lấy, bắt lấy: 抓住绳子, 抓小偷, 抓出寄生虫.','Nghĩa bóng: nắm bắt, chú trọng: 抓住机会, 抓紧时间.'],
   usage:'Hay đi với bổ ngữ kết quả / xu hướng: 抓住, 抓到, 抓出(来), 抓起来. Bài tập 3: 抓住 + 机会. Bài tập 2: 警察把小偷抓住了 (bắt người thì dùng 抓, không dùng 拿).',
   collo:['抓住机会','抓小偷','抓紧时间','抓出寄生虫'],
   ex_zh:'另外，鸟儿在理毛的时候，还会抓出一点儿寄生虫。',ex_py:'Lìngwài, niǎor zài lǐ máo de shíhou, hái huì zhuāchū yìdiǎnr jìshēngchóng.',ex_vn:'Ngoài ra, khi rỉa lông, chim còn bắt ra được một ít ký sinh trùng.',
   exList:[
     {zh:'另外，鸟儿在理毛的时候，还会抓出一点儿寄生虫。',py:'Lìngwài, niǎor zài lǐ máo de shíhou, hái huì zhuāchū yìdiǎnr jìshēngchóng.',vn:'Ngoài ra, khi rỉa lông, chim còn bắt ra được một ít ký sinh trùng.'},
     {zh:'警察一把把小偷给抓住了。',py:'Jǐngchá yì bǎ bǎ xiǎotōu gěi zhuāzhù le.',vn:'Cảnh sát chộp một cái là tóm gọn tên trộm.'},
     {zh:'机会来了就要抓住，不能犹豫。',py:'Jīhuì láile jiù yào zhuāzhù, bù néng yóuyù.',vn:'Cơ hội đến thì phải nắm lấy, không được do dự.'}
   ],
   colloFull:[
     {zh:'抓住机会',py:'zhuāzhù jīhuì',vn:'nắm bắt cơ hội'},
     {zh:'抓小偷',py:'zhuā xiǎotōu',vn:'bắt trộm'},
     {zh:'抓紧时间',py:'zhuājǐn shíjiān',vn:'tranh thủ thời gian'},
     {zh:'抓出寄生虫',py:'zhuāchū jìshēngchóng',vn:'bắt ký sinh trùng ra'}
   ],
   patterns:[
     {s:'抓住 + 机会 / 绳子',m:'Nắm lấy cơ hội / sợi dây'},
     {s:'把 + N + 抓住 / 抓起来',m:'Tóm được …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tên trộm đã bị cảnh sát bắt được rồi.',answer:'小偷已经被警察抓住了。',answerPy:'Xiǎotōu yǐjīng bèi jǐngchá zhuāzhù le.',
      note:'Câu 被: 被 + 警察 + 抓住了 (bổ ngữ kết quả 住).',pair:'被'},
     {promptLang:'vi',prompt:'Chỉ cần nắm lấy cơ hội lần này, bạn nhất định sẽ thành công.',answer:'只要抓住这次机会，你就一定能成功。',answerPy:'Zhǐyào zhuāzhù zhè cì jīhuì, nǐ jiù yídìng néng chénggōng.',
      note:'只要……就……; 抓住机会 (bài tập 3 của sách).',pair:'只要……就……'}
   ]},

  {n:20,zh:'寄生',py:'jìshēng',pos:'Động từ',vn:'ký sinh, ăn bám',hv:'ký sinh',em:'🦠',lesson:1,
   explain:['Sinh vật sống bám trên hoặc trong cơ thể sinh vật khác và hút chất dinh dưỡng của nó: 寄生虫 (ký sinh trùng).','Nghĩa bóng: sống dựa dẫm, ăn bám người khác, không tự lao động: 过着寄生的生活.'],
   usage:'Mẫu: 寄生在 + nơi chốn: 寄生在鸟的羽毛里. Từ hay gặp: 寄生虫, 寄生植物. Chú ý: 寄 jì (gửi), đừng viết nhầm thành 奇.',
   collo:['寄生虫','寄生在……上','寄生植物','寄生的生活'],
   ex_zh:'有些小虫子寄生在鸟儿的羽毛里。',ex_py:'Yǒuxiē xiǎo chóngzi jìshēng zài niǎor de yǔmáo li.',ex_vn:'Có một số loài sâu bọ nhỏ ký sinh trong lông chim.',
   exList:[
     {zh:'有些小虫子寄生在鸟儿的羽毛里。',py:'Yǒuxiē xiǎo chóngzi jìshēng zài niǎor de yǔmáo li.',vn:'Có một số loài sâu bọ nhỏ ký sinh trong lông chim.'},
     {zh:'另外，鸟儿在理毛的时候，还会抓出一点儿寄生虫。',py:'Lìngwài, niǎor zài lǐ máo de shíhou, hái huì zhuāchū yìdiǎnr jìshēngchóng.',vn:'Ngoài ra, khi rỉa lông, chim còn bắt ra được một ít ký sinh trùng.'},
     {zh:'他三十岁了还不工作，过着寄生的生活，全靠父母养。',py:'Tā sānshí suì le hái bù gōngzuò, guòzhe jìshēng de shēnghuó, quán kào fùmǔ yǎng.',vn:'Anh ta ba mươi tuổi rồi mà vẫn không đi làm, sống kiểu ăn bám, hoàn toàn dựa vào bố mẹ nuôi.'}
   ],
   colloFull:[
     {zh:'寄生虫',py:'jìshēngchóng',vn:'ký sinh trùng'},
     {zh:'寄生在……上',py:'jìshēng zài……shang',vn:'ký sinh trên …'},
     {zh:'寄生植物',py:'jìshēng zhíwù',vn:'thực vật ký sinh'},
     {zh:'寄生的生活',py:'jìshēng de shēnghuó',vn:'cuộc sống ăn bám'}
   ],
   patterns:[
     {s:'寄生在 + nơi chốn (上 / 里)',m:'Ký sinh trên / trong …'},
     {s:'寄生虫 / 寄生植物',m:'Ký sinh trùng / thực vật ký sinh'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vì trong cá sống có thể có ký sinh trùng, nên tốt nhất đừng ăn.',answer:'因为生鱼里可能有寄生虫，所以最好别吃。',answerPy:'Yīnwèi shēng yú li kěnéng yǒu jìshēngchóng, suǒyǐ zuìhǎo bié chī.',
      note:'因为……所以……; 最好 + 别 + V: tốt nhất đừng ….',pair:'因为……所以……'},
     {promptLang:'vi',prompt:'Những con ký sinh trùng này đều bị chim bắt ra hết rồi.',answer:'这些寄生虫都被鸟儿抓出来了。',answerPy:'Zhèxiē jìshēngchóng dōu bèi niǎor zhuā chulai le.',
      note:'Câu 被 + bổ ngữ xu hướng 出来.',pair:'被'}
   ]},

  {n:21,zh:'肥皂',py:'féizào',pos:'Danh từ',vn:'xà phòng',hv:'phì tạo',em:'🧼',lesson:1,
   explain:['Chất tẩy rửa dạng bánh dùng để tắm giặt.','香皂 = xà phòng thơm (tắm rửa), 洗衣皂 = xà phòng giặt.'],
   usage:'Lượng từ: 一块肥皂 (bài tập 3 của sách). Kết hợp: 用肥皂洗手, 肥皂泡 (bong bóng xà phòng), 洗衣服的肥皂.',
   collo:['一块肥皂','用肥皂洗手','肥皂泡'],
   ex_zh:'不过，鸟儿洗澡用不着肥皂。',ex_py:'Búguò, niǎor xǐzǎo yòng bu zháo féizào.',ex_vn:'Có điều, chim tắm không cần dùng đến xà phòng.',
   exList:[
     {zh:'不过，鸟儿洗澡用不着肥皂。',py:'Búguò, niǎor xǐzǎo yòng bu zháo féizào.',vn:'Có điều, chim tắm không cần dùng đến xà phòng.'},
     {zh:'她昨天说去超市，我请她帮我带块肥皂回来。',py:'Tā zuótiān shuō qù chāoshì, wǒ qǐng tā bāng wǒ dài kuài féizào huílai.',vn:'Hôm qua cô ấy bảo đi siêu thị, tôi nhờ cô ấy mua giúp một bánh xà phòng về.'},
     {zh:'吃饭前要用肥皂洗手。',py:'Chī fàn qián yào yòng féizào xǐ shǒu.',vn:'Trước khi ăn phải rửa tay bằng xà phòng.'}
   ],
   colloFull:[
     {zh:'一块肥皂',py:'yí kuài féizào',vn:'một bánh xà phòng'},
     {zh:'用肥皂洗手',py:'yòng féizào xǐ shǒu',vn:'rửa tay bằng xà phòng'},
     {zh:'肥皂泡',py:'féizàopào',vn:'bong bóng xà phòng'},
     {zh:'洗衣服的肥皂',py:'xǐ yīfu de féizào',vn:'xà phòng giặt'}
   ],
   patterns:[
     {s:'一块 + 肥皂',m:'Một bánh xà phòng'},
     {s:'用肥皂 + 洗……',m:'Dùng xà phòng rửa / giặt …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Con đã dùng xà phòng rửa sạch tay chưa?',answer:'你用肥皂把手洗干净了吗？',answerPy:'Nǐ yòng féizào bǎ shǒu xǐ gānjìng le ma?',
      note:'用 + công cụ + 把 + N + V + bổ ngữ kết quả (洗干净).',pair:'把'},
     {promptLang:'vi',prompt:'Bánh xà phòng này là mẹ tôi tự làm.',answer:'这块肥皂是我妈妈自己做的。',answerPy:'Zhè kuài féizào shì wǒ māma zìjǐ zuò de.',
      note:'是……的 nhấn mạnh người làm.',pair:'是……的'}
   ]},

  {n:22,zh:'种类',py:'zhǒnglèi',pos:'Danh từ',vn:'chủng loại, loại',hv:'chủng loại',em:'🗂️',lesson:1,
   explain:['Các loại, các kiểu được phân chia theo tính chất, đặc điểm của sự vật.','Là danh từ tập hợp: nói 种类很多 / 种类齐全, không nói 一个种类.'],
   usage:'Kết hợp: 种类多 / 齐全, 不同种类的……, 动植物的种类. Khác 类型 (kiểu, loại hình — nhấn mạnh những đặc điểm chung: 性格类型, 这种类型的电影) — bài tập 2 của sách.',
   collo:['种类很多','不同种类','种类齐全','动植物的种类'],
   ex_zh:'……而且不同种类的鸟儿选择的“澡堂”也不一样。',ex_py:'……Érqiě bù tóng zhǒnglèi de niǎor xuǎnzé de "zǎotáng" yě bù yíyàng.',ex_vn:'…Hơn nữa, các loài chim khác nhau chọn "nhà tắm" cũng khác nhau.',
   exList:[
     {zh:'……而且不同种类的鸟儿选择的“澡堂”也不一样。',py:'……Érqiě bù tóng zhǒnglèi de niǎor xuǎnzé de "zǎotáng" yě bù yíyàng.',vn:'…Hơn nữa, các loài chim khác nhau chọn "nhà tắm" cũng khác nhau.'},
     {zh:'这个地区的动植物种类多，数量大。',py:'Zhège dìqū de dòng-zhíwù zhǒnglèi duō, shùliàng dà.',vn:'Động thực vật ở vùng này nhiều chủng loại, số lượng lớn.'},
     {zh:'这家超市的水果种类很齐全。',py:'Zhè jiā chāoshì de shuǐguǒ zhǒnglèi hěn qíquán.',vn:'Hoa quả ở siêu thị này có đủ loại.'}
   ],
   colloFull:[
     {zh:'种类很多',py:'zhǒnglèi hěn duō',vn:'rất nhiều loại'},
     {zh:'不同种类',py:'bù tóng zhǒnglèi',vn:'các loại khác nhau'},
     {zh:'种类齐全',py:'zhǒnglèi qíquán',vn:'đủ loại'},
     {zh:'动植物的种类',py:'dòng-zhíwù de zhǒnglèi',vn:'chủng loại động thực vật'}
   ],
   patterns:[
     {s:'N + 的种类 + 很多 / 齐全',m:'… có nhiều loại / đủ loại'},
     {s:'不同种类的 + N',m:'Các loại … khác nhau'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Em hãy khái quát một chút các loại hí kịch hôm nay đã học.',answer:'请你概括一下今天学的戏剧的种类。',answerPy:'Qǐng nǐ gàikuò yíxià jīntiān xué de xìjù de zhǒnglèi.',
      note:'V + 一下 làm nhẹ lời đề nghị (câu 30 sách bài tập).',pair:'V + 一下'},
     {promptLang:'vi',prompt:'Sách ở thư viện trường tôi không những nhiều loại, mà còn rất mới.',answer:'我们学校图书馆的书不仅种类多，而且很新。',answerPy:'Wǒmen xuéxiào túshūguǎn de shū bùjǐn zhǒnglèi duō, érqiě hěn xīn.',
      note:'不仅……而且……; 种类多 làm vị ngữ chủ–vị.',pair:'不仅……而且……'}
   ]},

  {n:23,zh:'概括',py:'gàikuò',pos:'Tính từ / Động từ',vn:'khái quát; tóm tắt',hv:'khái quát',em:'📋',lesson:1,
   explain:['Động từ: rút ra những điểm chung, chủ yếu của sự vật để nói gọn lại: 概括课文内容, 概括为三点.','Tính từ: ngắn gọn, khái quát: 说得很概括. Cụm hay dùng: 概括来说 / 概括地说 = nói một cách khái quát.'],
   usage:'Mẫu: 把……概括为 / 成…… (khái quát thành …), 概括一下, 概括来说. Làm trạng ngữ: 概括地介绍.',
   collo:['概括来说','概括为三点','概括一下','概括地说'],
   ex_zh:'……概括来说，就是以方便为原则。',ex_py:'……Gàikuò lái shuō, jiù shì yǐ fāngbiàn wéi yuánzé.',ex_vn:'…Nói khái quát thì là lấy sự tiện lợi làm nguyên tắc.',
   exList:[
     {zh:'……概括来说，就是以方便为原则。',py:'……Gàikuò lái shuō, jiù shì yǐ fāngbiàn wéi yuánzé.',vn:'…Nói khái quát thì là lấy sự tiện lợi làm nguyên tắc.'},
     {zh:'这次会议的精神可以概括为三点。',py:'Zhè cì huìyì de jīngshén kěyǐ gàikuò wéi sān diǎn.',vn:'Tinh thần của hội nghị lần này có thể khái quát thành ba điểm.'},
     {zh:'请你用一句话概括一下这篇文章的主要内容。',py:'Qǐng nǐ yòng yí jù huà gàikuò yíxià zhè piān wénzhāng de zhǔyào nèiróng.',vn:'Em hãy dùng một câu để tóm tắt nội dung chính của bài văn này.'}
   ],
   colloFull:[
     {zh:'概括来说',py:'gàikuò lái shuō',vn:'nói khái quát'},
     {zh:'概括为三点',py:'gàikuò wéi sān diǎn',vn:'khái quát thành ba điểm'},
     {zh:'概括一下',py:'gàikuò yíxià',vn:'tóm tắt một chút'},
     {zh:'概括地说',py:'gàikuò de shuō',vn:'nói một cách khái quát'},
     {zh:'概括内容',py:'gàikuò nèiróng',vn:'tóm tắt nội dung'}
   ],
   patterns:[
     {s:'把 + N + 概括为 / 成 + ……',m:'Khái quát … thành …'},
     {s:'概括来说，……',m:'Nói khái quát, …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Thầy giáo khái quát nội dung bài khoá thành ba điểm.',answer:'老师把课文的内容概括成了三点。',answerPy:'Lǎoshī bǎ kèwén de nèiróng gàikuò chéngle sān diǎn.',
      note:'把 + N + 概括成 + kết quả.',pair:'把'},
     {promptLang:'vi',prompt:'Bài văn này tuy rất dài, nhưng có thể tóm tắt bằng một câu.',answer:'这篇文章虽然很长，但是可以用一句话概括。',answerPy:'Zhè piān wénzhāng suīrán hěn cháng, dànshì kěyǐ yòng yí jù huà gàikuò.',
      note:'虽然 đứng sau chủ ngữ cũng được; 用 + 一句话 + 概括.',pair:'虽然……但是……'}
   ]},

  {n:24,zh:'岛屿',py:'dǎoyǔ',pos:'Danh từ',vn:'(hòn) đảo',hv:'đảo tự',em:'🏝️',lesson:1,
   explain:['Tên gọi chung các đảo lớn nhỏ trên biển, sông, hồ.','Văn viết, mang nghĩa tập hợp; khẩu ngữ nói 岛 (一个岛, 小岛).'],
   usage:'Kết hợp: 岛屿上, 大大小小的岛屿, 海上的岛屿. Phần 扩展 xếp 岛屿 vào nhóm 地理环境 cùng 岸 (bờ), 沙滩 (bãi cát).',
   collo:['岛屿上','大大小小的岛屿','海上的岛屿'],
   ex_zh:'比如，海鸟在岛屿上生活，就会选择海水。',ex_py:'Bǐrú, hǎiniǎo zài dǎoyǔ shang shēnghuó, jiù huì xuǎnzé hǎishuǐ.',ex_vn:'Ví dụ, chim biển sống trên đảo thì sẽ chọn nước biển.',
   exList:[
     {zh:'比如，海鸟在岛屿上生活，就会选择海水。',py:'Bǐrú, hǎiniǎo zài dǎoyǔ shang shēnghuó, jiù huì xuǎnzé hǎishuǐ.',vn:'Ví dụ, chim biển sống trên đảo thì sẽ chọn nước biển.'},
     {zh:'越南的海上有大大小小几千个岛屿。',py:'Yuènán de hǎi shang yǒu dàdà xiǎoxiǎo jǐ qiān ge dǎoyǔ.',vn:'Trên biển Việt Nam có vài nghìn hòn đảo lớn nhỏ.'},
     {zh:'下龙湾有很多美丽的岛屿，吸引了大量游客。',py:'Xiàlóng Wān yǒu hěn duō měilì de dǎoyǔ, xīyǐnle dàliàng yóukè.',vn:'Vịnh Hạ Long có rất nhiều hòn đảo đẹp, thu hút rất đông du khách.'}
   ],
   colloFull:[
     {zh:'岛屿上',py:'dǎoyǔ shang',vn:'trên đảo'},
     {zh:'大大小小的岛屿',py:'dàdà xiǎoxiǎo de dǎoyǔ',vn:'các hòn đảo lớn nhỏ'},
     {zh:'海上的岛屿',py:'hǎi shang de dǎoyǔ',vn:'các đảo trên biển'},
     {zh:'美丽的岛屿',py:'měilì de dǎoyǔ',vn:'những hòn đảo đẹp'}
   ],
   patterns:[
     {s:'在岛屿上 + V',m:'… trên đảo'},
     {s:'大大小小的 + 岛屿',m:'Các hòn đảo lớn nhỏ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Trên hòn đảo đó không những có rất nhiều chim, mà còn có rất nhiều côn trùng.',answer:'那个岛屿上不仅有很多鸟，而且有很多昆虫。',answerPy:'Nàge dǎoyǔ shang bùjǐn yǒu hěn duō niǎo, érqiě yǒu hěn duō kūnchóng.',
      note:'不仅……而且……; nơi chốn + 有 + N (câu tồn tại).',pair:'不仅……而且……'},
     {promptLang:'vi',prompt:'Tôi chưa từng đến những hòn đảo ở Vịnh Hạ Long.',answer:'我从来没去过下龙湾的岛屿。',answerPy:'Wǒ cónglái méi qùguo Xiàlóng Wān de dǎoyǔ.',
      note:'从来没 + V + 过.',pair:'从来没……过'}
   ]},

  {n:25,zh:'知更鸟',py:'zhīgēngniǎo',pos:'Danh từ',vn:'chim cổ đỏ',hv:'tri canh điểu',em:'🐦',lesson:1,
   explain:['Loài chim nhỏ, lông ngực màu đỏ cam, hót hay, thường gặp ở châu Âu và Bắc Mỹ (robin).','Trong bài: 知更鸟喜欢路旁的浅水坑 = chim cổ đỏ thích tắm ở vũng nước nông ven đường.'],
   usage:'Lượng từ: 一只知更鸟. Tên gọi: 知更 = "biết canh giờ", vì chim hót rất sớm lúc trời vừa sáng.',
   collo:['一只知更鸟','知更鸟的歌声','知更鸟洗澡'],
   ex_zh:'知更鸟喜欢路旁的浅水坑。',ex_py:'Zhīgēngniǎo xǐhuan lù páng de qiǎn shuǐkēng.',ex_vn:'Chim cổ đỏ thích những vũng nước nông ven đường.',
   exList:[
     {zh:'知更鸟喜欢路旁的浅水坑。',py:'Zhīgēngniǎo xǐhuan lù páng de qiǎn shuǐkēng.',vn:'Chim cổ đỏ thích những vũng nước nông ven đường.'},
     {zh:'每天早上，窗外的知更鸟都会准时叫醒我。',py:'Měi tiān zǎoshang, chuāng wài de zhīgēngniǎo dōu huì zhǔnshí jiàoxǐng wǒ.',vn:'Mỗi sáng, chú chim cổ đỏ ngoài cửa sổ đều đánh thức tôi đúng giờ.'},
     {zh:'知更鸟个子不大，胸前的羽毛是红色的。',py:'Zhīgēngniǎo gèzi bú dà, xiōng qián de yǔmáo shì hóngsè de.',vn:'Chim cổ đỏ vóc dáng nhỏ, lông trước ngực màu đỏ.'}
   ],
   colloFull:[
     {zh:'一只知更鸟',py:'yì zhī zhīgēngniǎo',vn:'một con chim cổ đỏ'},
     {zh:'知更鸟的歌声',py:'zhīgēngniǎo de gēshēng',vn:'tiếng hót của chim cổ đỏ'},
     {zh:'知更鸟洗澡',py:'zhīgēngniǎo xǐzǎo',vn:'chim cổ đỏ tắm'},
     {zh:'红胸知更鸟',py:'hóngxiōng zhīgēngniǎo',vn:'chim cổ đỏ ngực đỏ'}
   ],
   patterns:[
     {s:'一只 + 知更鸟',m:'Một con chim cổ đỏ'},
     {s:'知更鸟 + 喜欢……',m:'Chim cổ đỏ thích …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chim cổ đỏ vừa thấy vũng nước là bay xuống tắm.',answer:'知更鸟一看到水坑，就飞下来洗澡。',answerPy:'Zhīgēngniǎo yí kàndào shuǐkēng, jiù fēi xialai xǐzǎo.',
      note:'一……就……; 飞下来 là bổ ngữ xu hướng kép.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Con chim cổ đỏ này là em gái tôi phát hiện ra trong vườn.',answer:'这只知更鸟是妹妹在花园里发现的。',answerPy:'Zhè zhī zhīgēngniǎo shì mèimei zài huāyuán li fāxiàn de.',
      note:'是……的 nhấn mạnh người và nơi phát hiện.',pair:'是……的'}
   ]},

  {n:26,zh:'坑',py:'kēng',pos:'Danh từ',vn:'hố, vũng',hv:'khanh',em:'🕳️',lesson:1,
   explain:['Chỗ trũng, lõm xuống trên mặt đất: 水坑 (vũng nước), 挖坑 (đào hố).','Khẩu ngữ hiện đại còn dùng làm động từ: 坑人 = lừa, gài bẫy người khác.'],
   usage:'Kết hợp: 水坑, 浅水坑, 挖一个坑, 路上有个坑, 掉进坑里. Lượng từ: 一个坑. Phần 扩展 có từ gần nghĩa 洞 (cái lỗ, cái hang): 裤子破了一个洞.',
   collo:['浅水坑','挖坑','掉进坑里'],
   ex_zh:'路上有个大坑，你骑车小心点儿。',ex_py:'Lù shang yǒu ge dà kēng, nǐ qí chē xiǎoxīn diǎnr.',ex_vn:'Trên đường có một cái hố to, cậu đi xe đạp cẩn thận chút.',
   exList:[
     {zh:'路上有个大坑，你骑车小心点儿。',py:'Lù shang yǒu ge dà kēng, nǐ qí chē xiǎoxīn diǎnr.',vn:'Trên đường có một cái hố to, cậu đi xe đạp cẩn thận chút.'},
     {zh:'知更鸟喜欢路旁的浅水坑。',py:'Zhīgēngniǎo xǐhuan lù páng de qiǎn shuǐkēng.',vn:'Chim cổ đỏ thích những vũng nước nông ven đường.'},
     {zh:'爷爷在院子里挖了一个坑，种了一棵苹果树。',py:'Yéye zài yuànzi li wāle yí ge kēng, zhòngle yì kē píngguǒ shù.',vn:'Ông nội đào một cái hố trong sân, trồng một cây táo.'}
   ],
   colloFull:[
     {zh:'浅水坑',py:'qiǎn shuǐkēng',vn:'vũng nước nông'},
     {zh:'挖坑',py:'wā kēng',vn:'đào hố'},
     {zh:'掉进坑里',py:'diàojìn kēng li',vn:'rơi xuống hố'},
     {zh:'一个大坑',py:'yí ge dà kēng',vn:'một cái hố to'}
   ],
   patterns:[
     {s:'挖 + (一个) + 坑',m:'Đào (một cái) hố'},
     {s:'掉进 + (水)坑里',m:'Rơi xuống hố / vũng nước'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cậu bé không cẩn thận rơi xuống vũng nước.',answer:'小男孩不小心掉进了水坑里。',answerPy:'Xiǎo nánhái bù xiǎoxīn diàojìnle shuǐkēng li.',
      note:'V + 进 + nơi chốn (bổ ngữ xu hướng); 了 đứng sau 掉进.',pair:'bổ ngữ xu hướng'},
     {promptLang:'vi',prompt:'Hãy lấp cái hố này lại đi.',answer:'请把这个坑填上吧。',answerPy:'Qǐng bǎ zhège kēng tiánshang ba.',
      note:'把 + N + 填上: 上 là bổ ngữ kết quả (lấp kín).',pair:'把'}
   ]},

  {n:27,zh:'池塘',py:'chítáng',pos:'Danh từ',vn:'ao, đầm',hv:'trì đường',em:'🪷',lesson:1,
   explain:['Chỗ trũng chứa nước, nhỏ hơn hồ: ao cá, ao sen.','Phần 扩展 xếp 池塘 vào nhóm từ 地理环境 (môi trường địa lý) cùng 天空, 陆地, 沙漠, 岛屿….'],
   usage:'Kết hợp: 池塘里, 池塘边, 一个池塘, 江河池塘 (sông ngòi ao hồ). Phân biệt độ lớn: 池塘 (ao) < 湖 (hồ) < 海 (biển).',
   collo:['池塘边','池塘里的鱼','江河池塘','一个池塘'],
   ex_zh:'寒带的鸟呢，因为江河池塘不好找，只好以雪代水。',ex_py:'Hándài de niǎo ne, yīnwèi jiānghé chítáng bù hǎo zhǎo, zhǐhǎo yǐ xuě dài shuǐ.',ex_vn:'Còn chim ở vùng hàn đới, vì khó tìm được sông ngòi ao hồ, nên đành lấy tuyết thay nước.',
   exList:[
     {zh:'寒带的鸟呢，因为江河池塘不好找，只好以雪代水。',py:'Hándài de niǎo ne, yīnwèi jiānghé chítáng bù hǎo zhǎo, zhǐhǎo yǐ xuě dài shuǐ.',vn:'Còn chim ở vùng hàn đới, vì khó tìm được sông ngòi ao hồ, nên đành lấy tuyết thay nước.'},
     {zh:'小时候，我常常和小伙伴们在池塘边抓鱼。',py:'Xiǎoshíhou, wǒ chángcháng hé xiǎo huǒbànmen zài chítáng biān zhuā yú.',vn:'Hồi nhỏ, tôi hay cùng lũ bạn bắt cá bên bờ ao.'},
     {zh:'夏天，池塘里开满了荷花。',py:'Xiàtiān, chítáng li kāimǎnle héhuā.',vn:'Mùa hè, sen nở kín mặt ao.'}
   ],
   colloFull:[
     {zh:'池塘边',py:'chítáng biān',vn:'bên bờ ao'},
     {zh:'池塘里的鱼',py:'chítáng li de yú',vn:'cá trong ao'},
     {zh:'江河池塘',py:'jiānghé chítáng',vn:'sông ngòi ao hồ'},
     {zh:'一个池塘',py:'yí ge chítáng',vn:'một cái ao'}
   ],
   patterns:[
     {s:'池塘边 / 池塘里 + V',m:'… bên bờ ao / trong ao'},
     {s:'江河池塘',m:'Sông ngòi ao hồ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Hồi nhỏ tôi chưa từng bơi ở ao.',answer:'小时候我从来没在池塘里游过泳。',answerPy:'Xiǎoshíhou wǒ cónglái méi zài chítáng li yóuguo yǒng.',
      note:'游泳 là động từ ly hợp: 过 chen vào giữa → 游过泳.',pair:'从来没……过'},
     {promptLang:'vi',prompt:'Cá trong ao ngày càng nhiều.',answer:'池塘里的鱼越来越多了。',answerPy:'Chítáng li de yú yuè lái yuè duō le.',
      note:'越来越 + Adj + 了.',pair:'越来越'}
   ]},

  {n:28,zh:'老鹰',py:'lǎoyīng',pos:'Danh từ',vn:'diều hâu',hv:'lão ưng',em:'🦅',lesson:1,
   explain:['Loài chim săn mồi lớn, mỏ quặp, móng sắc, bay cao, mắt rất tinh.','老 ở đây không có nghĩa "già", chỉ là tiền tố như trong 老虎, 老鼠.'],
   usage:'Lượng từ: 一只老鹰. Kết hợp: 老鹰抓小鸡 (trò chơi "diều hâu bắt gà con"), 像老鹰一样, 老鹰的眼睛.',
   collo:['一只老鹰','老鹰抓小鸡','像老鹰一样'],
   ex_zh:'而老鹰的洗澡方式更是直接，它们会在雨中张开双翅痛快地迎接洗礼！',ex_py:'Ér lǎoyīng de xǐzǎo fāngshì gèng shì zhíjiē, tāmen huì zài yǔ zhōng zhāngkāi shuāng chì tòngkuài de yíngjiē xǐlǐ!',ex_vn:'Còn cách tắm của diều hâu thì càng trực tiếp hơn, chúng dang rộng đôi cánh trong mưa, sảng khoái đón nhận "lễ tẩy rửa"!',
   exList:[
     {zh:'而老鹰的洗澡方式更是直接，它们会在雨中张开双翅痛快地迎接洗礼！',py:'Ér lǎoyīng de xǐzǎo fāngshì gèng shì zhíjiē, tāmen huì zài yǔ zhōng zhāngkāi shuāng chì tòngkuài de yíngjiē xǐlǐ!',vn:'Còn cách tắm của diều hâu thì càng trực tiếp hơn, chúng dang rộng đôi cánh trong mưa, sảng khoái đón nhận "lễ tẩy rửa"!'},
     {zh:'一只老鹰在天空中飞来飞去，好像在找吃的。',py:'Yì zhī lǎoyīng zài tiānkōng zhōng fēi lái fēi qù, hǎoxiàng zài zhǎo chī de.',vn:'Một con diều hâu bay lượn trên bầu trời, dường như đang tìm thức ăn.'},
     {zh:'课间，同学们在操场上玩“老鹰抓小鸡”。',py:'Kèjiān, tóngxuémen zài cāochǎng shang wán "lǎoyīng zhuā xiǎo jī".',vn:'Giờ ra chơi, các bạn chơi trò "diều hâu bắt gà con" ngoài sân.'}
   ],
   colloFull:[
     {zh:'一只老鹰',py:'yì zhī lǎoyīng',vn:'một con diều hâu'},
     {zh:'老鹰抓小鸡',py:'lǎoyīng zhuā xiǎo jī',vn:'diều hâu bắt gà con'},
     {zh:'像老鹰一样',py:'xiàng lǎoyīng yíyàng',vn:'giống như diều hâu'},
     {zh:'老鹰的眼睛',py:'lǎoyīng de yǎnjing',vn:'mắt diều hâu'}
   ],
   patterns:[
     {s:'一只 + 老鹰',m:'Một con diều hâu'},
     {s:'像老鹰一样 + Adj / V',m:'… như diều hâu'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Con gà con bị diều hâu bắt đi mất rồi.',answer:'小鸡被老鹰抓走了。',answerPy:'Xiǎo jī bèi lǎoyīng zhuāzǒu le.',
      note:'Câu 被 + bổ ngữ kết quả 走.',pair:'被'},
     {promptLang:'vi',prompt:'Mắt anh ấy tinh như mắt diều hâu, cái gì cũng nhìn thấy.',answer:'他的眼睛像老鹰一样，什么都看得见。',answerPy:'Tā de yǎnjing xiàng lǎoyīng yíyàng, shénme dōu kàn de jiàn.',
      note:'像……一样: giống như …; 看得见 là bổ ngữ khả năng.',pair:'像……一样'}
   ]},

  {n:29,zh:'痛快',py:'tòngkuài',pos:'Tính từ',vn:'vui sướng, thích thú, đã, sướng',hv:'thống khoái',em:'😆',lesson:1,
   explain:['Vui vẻ, sảng khoái, thoả mãn trong lòng: 玩得很痛快, 心里很痛快.','Thoả thích, hết mức: 痛快地哭一场, 喝个痛快. Còn có nghĩa thẳng thắn, dứt khoát (办事很痛快).'],
   usage:'Bảng 词语搭配: 痛快地 + 哭 / 笑 / 吃 / 喝 / 骂. Mẫu khẩu ngữ: V + 个 + 痛快 (喝个痛快, 玩个痛快). Lặp lại: 痛痛快快地 + V. Không dùng để chúc (✗ 祝你痛快 → 祝你愉快).',
   collo:['痛快地哭','痛快地笑','喝个痛快','玩得很痛快'],
   ex_zh:'你好容易来一趟，我们今晚一定要喝个痛快！',ex_py:'Nǐ hǎoróngyì lái yí tàng, wǒmen jīnwǎn yídìng yào hē ge tòngkuài!',ex_vn:'Khó khăn lắm cậu mới đến một chuyến, tối nay bọn mình nhất định phải uống cho đã!',
   exList:[
     {zh:'你好容易来一趟，我们今晚一定要喝个痛快！',py:'Nǐ hǎoróngyì lái yí tàng, wǒmen jīnwǎn yídìng yào hē ge tòngkuài!',vn:'Khó khăn lắm cậu mới đến một chuyến, tối nay bọn mình nhất định phải uống cho đã!'},
     {zh:'它们会在雨中张开双翅痛快地迎接洗礼！',py:'Tāmen huì zài yǔ zhōng zhāngkāi shuāng chì tòngkuài de yíngjiē xǐlǐ!',vn:'Chúng dang rộng đôi cánh trong mưa, sảng khoái đón nhận "lễ tẩy rửa"!'},
     {zh:'考完试，我们去海边痛痛快快地玩了三天。',py:'Kǎowán shì, wǒmen qù hǎibiān tòngtòngkuàikuài de wánle sān tiān.',vn:'Thi xong, bọn tôi ra biển chơi thoả thích ba ngày.'}
   ],
   colloFull:[
     {zh:'痛快地哭',py:'tòngkuài de kū',vn:'khóc cho thoả'},
     {zh:'痛快地笑',py:'tòngkuài de xiào',vn:'cười sảng khoái'},
     {zh:'喝个痛快',py:'hē ge tòngkuài',vn:'uống cho đã'},
     {zh:'玩得很痛快',py:'wán de hěn tòngkuài',vn:'chơi rất đã'},
     {zh:'痛快地吃',py:'tòngkuài de chī',vn:'ăn thoả thích'}
   ],
   patterns:[
     {s:'痛快地 + 哭 / 笑 / 吃 / 喝',m:'Khóc / cười / ăn / uống thoả thích'},
     {s:'V + 个 + 痛快',m:'… cho đã'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Hôm qua chúng tôi chơi ở công viên rất đã.',answer:'昨天我们在公园玩得很痛快。',answerPy:'Zuótiān wǒmen zài gōngyuán wán de hěn tòngkuài.',
      note:'V + 得 + 很痛快: bổ ngữ trạng thái.',pair:'V + 得 + bổ ngữ trạng thái'},
     {promptLang:'vi',prompt:'Vừa nghe tin đó, cô ấy liền khóc một trận cho thoả.',answer:'一听到那个消息，她就痛痛快快地哭了一场。',answerPy:'Yì tīngdào nàge xiāoxi, tā jiù tòngtòngkuàikuài de kūle yì chǎng.',
      note:'一……就……; 痛快 lặp AABB + 地 làm trạng ngữ.',pair:'一……就……'}
   ]},

  {n:30,zh:'迎接',py:'yíngjiē',pos:'Động từ',vn:'nghênh đón, chào đón, đón nhận',hv:'nghênh tiếp',em:'🙌',lesson:1,
   explain:['Ra đón người đến: 迎接客人, 到机场迎接.','Nghĩa rộng: đón nhận một sự kiện, thời kỳ, thử thách: 迎接新年, 迎接挑战, 迎接洗礼.'],
   usage:'Bảng 词语搭配: 热情地 + 迎接; bài tập 3: 迎接 + 挑战. Kết hợp: 迎接客人 / 新年 / 新学期 / 挑战. Khác 接 (đón cụ thể, khẩu ngữ: 去机场接人).',
   collo:['热情地迎接','迎接挑战','迎接新年','迎接客人'],
   ex_zh:'回家时，妈妈张开双臂迎接我。',ex_py:'Huí jiā shí, māma zhāngkāi shuāngbì yíngjiē wǒ.',ex_vn:'Khi tôi về nhà, mẹ dang rộng hai tay đón tôi.',
   exList:[
     {zh:'回家时，妈妈张开双臂迎接我。',py:'Huí jiā shí, māma zhāngkāi shuāngbì yíngjiē wǒ.',vn:'Khi tôi về nhà, mẹ dang rộng hai tay đón tôi.'},
     {zh:'而老鹰的洗澡方式更是直接，它们会在雨中张开双翅痛快地迎接洗礼！',py:'Ér lǎoyīng de xǐzǎo fāngshì gèng shì zhíjiē, tāmen huì zài yǔ zhōng zhāngkāi shuāng chì tòngkuài de yíngjiē xǐlǐ!',vn:'Còn cách tắm của diều hâu thì càng trực tiếp hơn, chúng dang rộng đôi cánh trong mưa, sảng khoái đón nhận "lễ tẩy rửa"!'},
     {zh:'全校师生都在门口热情地迎接外国客人。',py:'Quán xiào shīshēng dōu zài ménkǒu rèqíng de yíngjiē wàiguó kèrén.',vn:'Toàn thể thầy trò trong trường đều ra cổng nhiệt tình đón khách nước ngoài.'}
   ],
   colloFull:[
     {zh:'热情地迎接',py:'rèqíng de yíngjiē',vn:'nhiệt tình đón tiếp'},
     {zh:'迎接挑战',py:'yíngjiē tiǎozhàn',vn:'đón nhận thử thách'},
     {zh:'迎接新年',py:'yíngjiē xīnnián',vn:'đón năm mới'},
     {zh:'迎接客人',py:'yíngjiē kèrén',vn:'đón khách'}
   ],
   patterns:[
     {s:'热情地 + 迎接 + N',m:'Nhiệt tình đón …'},
     {s:'迎接 + 挑战 / 新年 / 新学期',m:'Đón nhận thử thách / năm mới / học kỳ mới'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Để đón năm mới, cả nhà đã dọn dẹp nhà cửa sạch sẽ.',answer:'为了迎接新年，全家人把房间打扫得干干净净。',answerPy:'Wèile yíngjiē xīnnián, quán jiā rén bǎ fángjiān dǎsǎo de gāngānjìngjìng.',
      note:'为了 + mục đích; 把 + N + V + 得 + bổ ngữ.',pair:'把'},
     {promptLang:'vi',prompt:'Chỉ cần chuẩn bị tốt, chúng ta không sợ đón nhận bất kỳ thử thách nào.',answer:'只要准备好了，我们就不怕迎接任何挑战。',answerPy:'Zhǐyào zhǔnbèi hǎo le, wǒmen jiù bú pà yíngjiē rènhé tiǎozhàn.',
      note:'只要……就……; 迎接挑战 (bài tập 3 của sách).',pair:'只要……就……'}
   ]},

  {n:31,zh:'洗礼',py:'xǐlǐ',pos:'Danh từ',vn:'lễ rửa tội; sự tôi luyện',hv:'tẩy lễ',em:'🌧️',lesson:1,
   explain:['Nghi lễ tôn giáo (Cơ Đốc giáo) rẩy nước lên người để nhập đạo — lễ rửa tội.','Nghĩa bóng: sự tôi luyện, thử thách lớn: 经过战争的洗礼. Trong bài, 迎接洗礼 là cách nói hình ảnh: diều hâu tắm mưa như được "gột rửa".'],
   usage:'Kết hợp: 接受洗礼, 迎接洗礼, 经过……的洗礼 (trải qua sự tôi luyện của …), 风雨的洗礼. Mang màu sắc văn viết.',
   collo:['迎接洗礼','接受洗礼','经过……的洗礼','风雨的洗礼'],
   ex_zh:'经过风雨的洗礼，这些小树长得更结实了。',ex_py:'Jīngguò fēngyǔ de xǐlǐ, zhèxiē xiǎo shù zhǎng de gèng jiēshi le.',ex_vn:'Trải qua mưa gió tôi luyện, những cây non này đã mọc cứng cáp hơn.',
   exList:[
     {zh:'经过风雨的洗礼，这些小树长得更结实了。',py:'Jīngguò fēngyǔ de xǐlǐ, zhèxiē xiǎo shù zhǎng de gèng jiēshi le.',vn:'Trải qua mưa gió tôi luyện, những cây non này đã mọc cứng cáp hơn.'},
     {zh:'它们会在雨中张开双翅痛快地迎接洗礼！',py:'Tāmen huì zài yǔ zhōng zhāngkāi shuāng chì tòngkuài de yíngjiē xǐlǐ!',vn:'Chúng dang rộng đôi cánh trong mưa, sảng khoái đón nhận "lễ tẩy rửa"!'},
     {zh:'经过这次比赛的洗礼，队员们成熟了很多。',py:'Jīngguò zhè cì bǐsài de xǐlǐ, duìyuánmen chéngshúle hěn duō.',vn:'Trải qua sự tôi luyện của trận đấu này, các cầu thủ đã trưởng thành hơn nhiều.'}
   ],
   colloFull:[
     {zh:'迎接洗礼',py:'yíngjiē xǐlǐ',vn:'đón nhận lễ tẩy rửa / sự tôi luyện'},
     {zh:'接受洗礼',py:'jiēshòu xǐlǐ',vn:'chịu lễ rửa tội'},
     {zh:'经过……的洗礼',py:'jīngguò……de xǐlǐ',vn:'trải qua sự tôi luyện của …'},
     {zh:'风雨的洗礼',py:'fēngyǔ de xǐlǐ',vn:'sự tôi luyện của mưa gió'}
   ],
   patterns:[
     {s:'经过 + ……的洗礼',m:'Trải qua sự tôi luyện của …'},
     {s:'迎接 / 接受 + 洗礼',m:'Đón nhận / chịu lễ tẩy rửa'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Trải qua sự tôi luyện của kỳ thi đại học, cậu ấy ngày càng tự tin.',answer:'经过高考的洗礼，他越来越自信了。',answerPy:'Jīngguò gāokǎo de xǐlǐ, tā yuè lái yuè zìxìn le.',
      note:'经过……的洗礼 (nghĩa bóng); 越来越 + Adj + 了.',pair:'越来越'},
     {promptLang:'vi',prompt:'Tuy đã trải qua trăm năm mưa gió, cây cầu cũ này vẫn rất chắc chắn.',answer:'虽然经过了一百年风雨的洗礼，但是这座老桥还是很结实。',answerPy:'Suīrán jīngguòle yìbǎi nián fēngyǔ de xǐlǐ, dànshì zhè zuò lǎo qiáo háishi hěn jiēshi.',
      note:'虽然……但是……还是……: tuy … nhưng vẫn ….',pair:'虽然……但是……'}
   ]},

  {n:32,zh:'沙子',py:'shāzi',pos:'Danh từ',vn:'hạt cát, cát',hv:'sa tử',em:'🏖️',lesson:1,
   explain:['Những hạt đá rất nhỏ, vụn: cát ở bãi biển, sa mạc.','Từ liên quan (phần 扩展): 沙漠 (sa mạc), 沙滩 (bãi cát); trong bài: 沙浴 = tắm cát.'],
   usage:'Kết hợp: 一粒沙子, 一堆沙子, 用沙子洗澡, 眼睛里进了沙子. Chú ý 沙子 đọc nhẹ zi.',
   collo:['用沙子洗澡','一粒沙子','一堆沙子','进了沙子'],
   ex_zh:'所谓沙浴，就是用沙子洗澡。',ex_py:'Suǒwèi shāyù, jiù shì yòng shāzi xǐzǎo.',ex_vn:'Cái gọi là tắm cát, chính là dùng cát để tắm.',
   exList:[
     {zh:'所谓沙浴，就是用沙子洗澡。',py:'Suǒwèi shāyù, jiù shì yòng shāzi xǐzǎo.',vn:'Cái gọi là tắm cát, chính là dùng cát để tắm.'},
     {zh:'风太大了，我的眼睛里进了沙子。',py:'Fēng tài dà le, wǒ de yǎnjing li jìnle shāzi.',vn:'Gió to quá, cát bay vào mắt tôi.'},
     {zh:'孩子们在海边用沙子堆了一座城堡。',py:'Háizimen zài hǎibiān yòng shāzi duīle yí zuò chéngbǎo.',vn:'Bọn trẻ dùng cát đắp một toà lâu đài bên bờ biển.'}
   ],
   colloFull:[
     {zh:'用沙子洗澡',py:'yòng shāzi xǐzǎo',vn:'tắm bằng cát'},
     {zh:'一粒沙子',py:'yí lì shāzi',vn:'một hạt cát'},
     {zh:'一堆沙子',py:'yì duī shāzi',vn:'một đống cát'},
     {zh:'进了沙子',py:'jìnle shāzi',vn:'bị cát lọt vào'}
   ],
   patterns:[
     {s:'用沙子 + V',m:'Dùng cát để …'},
     {s:'(眼睛 / 鞋) 里 + 进了沙子',m:'Cát lọt vào (mắt / giày)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Trong giày tôi toàn là cát, đi lại rất khó chịu.',answer:'我的鞋里全是沙子，走起路来很难受。',answerPy:'Wǒ de xié li quán shì shāzi, zǒu qǐ lù lai hěn nánshòu.',
      note:'V + 起 + tân ngữ + 来: khi làm việc gì thì thấy … (走起路来).',pair:'V起来'},
     {promptLang:'vi',prompt:'Mẹ đã đổ hết cát trong giày ra.',answer:'妈妈把鞋里的沙子都倒出来了。',answerPy:'Māma bǎ xié li de shāzi dōu dào chulai le.',
      note:'把 + N + 都 + V + 出来.',pair:'把'}
   ]},

  {n:33,zh:'干燥',py:'gānzào',pos:'Tính từ',vn:'khô, khô ráo, hanh khô',hv:'can táo',em:'🏜️',lesson:1,
   explain:['Không có hoặc có rất ít nước, độ ẩm thấp: 气候干燥, 皮肤干燥.','Trái nghĩa: 潮湿 (cháoshī, ẩm ướt). Khẩu ngữ hay nói 干.'],
   usage:'Bảng 词语搭配: 干燥的 + 表面 / 皮肤 / 环境 / 空气 / 气候. Làm vị ngữ: 空气很干燥. Hay đi với 放在……的地方: 放在干燥的地方.',
   collo:['干燥的环境','干燥的空气','干燥的气候','干燥的皮肤'],
   ex_zh:'它们大多生活在沙漠等干燥的环境，爱在地面上活动。',ex_py:'Tāmen dàduō shēnghuó zài shāmò děng gānzào de huánjìng, ài zài dìmiàn shang huódòng.',ex_vn:'Phần lớn chúng sống ở những môi trường khô hạn như sa mạc, thích hoạt động trên mặt đất.',
   exList:[
     {zh:'它们大多生活在沙漠等干燥的环境，爱在地面上活动。',py:'Tāmen dàduō shēnghuó zài shāmò děng gānzào de huánjìng, ài zài dìmiàn shang huódòng.',vn:'Phần lớn chúng sống ở những môi trường khô hạn như sa mạc, thích hoạt động trên mặt đất.'},
     {zh:'北京的冬天空气很干燥，要多喝水。',py:'Běijīng de dōngtiān kōngqì hěn gānzào, yào duō hē shuǐ.',vn:'Mùa đông ở Bắc Kinh không khí rất khô, phải uống nhiều nước.'},
     {zh:'这种药要放在干燥的地方。',py:'Zhè zhǒng yào yào fàng zài gānzào de dìfang.',vn:'Loại thuốc này phải để ở nơi khô ráo.'}
   ],
   colloFull:[
     {zh:'干燥的环境',py:'gānzào de huánjìng',vn:'môi trường khô hạn'},
     {zh:'干燥的空气',py:'gānzào de kōngqì',vn:'không khí khô'},
     {zh:'干燥的气候',py:'gānzào de qìhòu',vn:'khí hậu khô'},
     {zh:'干燥的皮肤',py:'gānzào de pífū',vn:'làn da khô'},
     {zh:'干燥的表面',py:'gānzào de biǎomiàn',vn:'bề mặt khô'}
   ],
   patterns:[
     {s:'干燥的 + 环境 / 空气 / 气候 / 皮肤',m:'Môi trường / không khí / khí hậu / da khô'},
     {s:'放在干燥的地方',m:'Để ở nơi khô ráo'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vì khí hậu ở đây rất khô, nên da tôi cũng bị khô.',answer:'因为这里的气候很干燥，所以我的皮肤也变干了。',answerPy:'Yīnwèi zhèlǐ de qìhòu hěn gānzào, suǒyǐ wǒ de pífū yě biàn gān le.',
      note:'因为……所以……; 变 + Adj + 了: trở nên ….',pair:'因为……所以……'},
     {promptLang:'vi',prompt:'Không khí ở miền Bắc Trung Quốc khô hơn miền Nam nhiều.',answer:'中国北方的空气比南方干燥得多。',answerPy:'Zhōngguó běifāng de kōngqì bǐ nánfāng gānzào de duō.',
      note:'A 比 B + Adj + 得多: A … hơn B nhiều.',pair:'比'}
   ]},

  {n:34,zh:'秘密',py:'mìmì',pos:'Tính từ / Danh từ',vn:'bí mật; điều bí mật',hv:'bí mật',em:'🤫',lesson:1,
   explain:['Tính từ: kín đáo, không để người khác biết: 秘密的地方, 秘密行动.','Danh từ: điều bí mật: 保守秘密 (giữ bí mật), 这是我们俩的秘密.'],
   usage:'Tính từ làm định ngữ (秘密的地方), vị ngữ (行动是秘密的), trạng ngữ (秘密地进行). Danh từ: 保守 / 告诉 / 发现 + 秘密; 公开的秘密 (bí mật ai cũng biết).',
   collo:['秘密的地方','保守秘密','公开的秘密','秘密行动'],
   ex_zh:'……那是因为它们通常会寻找一处秘密的地方休息。',ex_py:'……Nà shì yīnwèi tāmen tōngcháng huì xúnzhǎo yí chù mìmì de dìfang xiūxi.',ex_vn:'…Đó là vì chúng thường tìm một nơi kín đáo để nghỉ ngơi.',
   exList:[
     {zh:'……那是因为它们通常会寻找一处秘密的地方休息。',py:'……Nà shì yīnwèi tāmen tōngcháng huì xúnzhǎo yí chù mìmì de dìfang xiūxi.',vn:'…Đó là vì chúng thường tìm một nơi kín đáo để nghỉ ngơi.'},
     {zh:'李将军这次去北京的行动是秘密的。',py:'Lǐ jiāngjūn zhè cì qù Běijīng de xíngdòng shì mìmì de.',vn:'Chuyến đi Bắc Kinh lần này của tướng Lý là bí mật.'},
     {zh:'这是我们俩的秘密，你千万别告诉别人。',py:'Zhè shì wǒmen liǎ de mìmì, nǐ qiānwàn bié gàosu biéren.',vn:'Đây là bí mật của hai đứa mình, cậu tuyệt đối đừng nói với ai.'}
   ],
   colloFull:[
     {zh:'秘密的地方',py:'mìmì de dìfang',vn:'nơi bí mật, kín đáo'},
     {zh:'保守秘密',py:'bǎoshǒu mìmì',vn:'giữ bí mật'},
     {zh:'公开的秘密',py:'gōngkāi de mìmì',vn:'bí mật ai cũng biết'},
     {zh:'秘密行动',py:'mìmì xíngdòng',vn:'hành động bí mật'}
   ],
   patterns:[
     {s:'秘密的 + 地方 / 行动 (tính từ)',m:'Nơi / hành động bí mật'},
     {s:'保守 / 告诉 + 秘密 (danh từ)',m:'Giữ / kể bí mật'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bí mật này bị em trai tôi kể cho mẹ rồi.',answer:'这个秘密被弟弟告诉妈妈了。',answerPy:'Zhège mìmì bèi dìdi gàosu māma le.',
      note:'Câu 被 với động từ hai tân ngữ: 被 + người + 告诉 + người nghe.',pair:'被'},
     {promptLang:'vi',prompt:'Bí mật này ngay cả người bạn thân nhất anh ấy cũng không kể.',answer:'这个秘密他连最好的朋友都没告诉。',answerPy:'Zhège mìmì tā lián zuì hǎo de péngyou dōu méi gàosu.',
      note:'连……都 + 没 + V: ngay cả … cũng không ….',pair:'连……都……'}
   ]}
];

// ══════════════════════════════════════════
// BÀI KHOÁ 课文 — 鸟儿的护肤术 (661字), tr. 140–142
// 改编自《科学松鼠会》，作者：临渊
// ══════════════════════════════════════════
var dialogData = [{
  scene:'课文 · 鸟儿的护肤术',
  preQuiz:[
    {q:'区分鸟儿和其他动物的唯一特征是什么？',opts:['羽毛','翅膀','会飞'],ans:0},
    {q:'下面哪一项不是文中提到的羽毛的作用？',opts:['保暖','帮助鸟儿找食物','保护皮肤'],ans:1},
    {q:'羽毛上的颜色和斑有什么作用？',opts:['吸引别的鸟','让鸟儿飞得更快','充当保护色'],ans:2},
    {q:'为什么鸟儿每天都花很长时间保养羽毛？',opts:['因为羽毛在鸟儿的生活中非常重要','因为羽毛很容易掉','因为它们没有别的事可做'],ans:0},
    {q:'保养羽毛的基本功是什么？',opts:['洗澡','整理羽毛','睡觉'],ans:1},
    {q:'鸟儿在理毛的时候，还会做什么？',opts:['吃昆虫','寻找秘密的地方','抓出一点儿寄生虫'],ans:2},
    {q:'鸟儿选择“澡堂”的原则是什么？',opts:['以方便为原则','以干净为原则','以安全为原则'],ans:0},
    {q:'海鸟洗澡会选择什么？',opts:['路旁的浅水坑','海水','雪'],ans:1},
    {q:'寒带的鸟为什么以雪代水？',opts:['因为雪更干净','因为它们喜欢冷','因为江河池塘不好找'],ans:2},
    {q:'老鹰是怎么洗澡的？',opts:['在雨中张开双翅洗澡','在沙子里洗澡','在路旁的水坑里洗澡'],ans:0},
    {q:'喜欢沙浴的鸟儿大多生活在什么样的环境里？',opts:['潮湿的森林里','沙漠等干燥的环境','寒冷的地方'],ans:1},
    {q:'为什么我们很少看到睡眠中的鸟儿？',opts:['因为鸟儿从来不睡觉','因为它们只在白天睡觉','因为它们会寻找秘密的地方休息'],ans:2},
    {q:'关于鸟儿的睡眠，下面哪一项正确？',opts:['有些鸟儿几乎不用睡觉','所有的鸟儿都睡8小时','鸟儿每天都要睡一整天'],ans:0}
  ],
  lines:[
    {sp:0,zh:'大家都接触过鸟儿吧？那你知道鸟儿最重要的特征是什么吗？是有翅膀会飞？还是吃昆虫？',
     py:'Dàjiā dōu jiēchùguo niǎor ba? Nà nǐ zhīdào niǎor zuì zhòngyào de tèzhēng shì shénme ma? Shì yǒu chìbǎng huì fēi? Háishi chī kūnchóng?',
     vn:'Chắc ai cũng từng tiếp xúc với chim rồi nhỉ? Vậy bạn có biết đặc điểm quan trọng nhất của loài chim là gì không? Là có cánh biết bay? Hay là ăn côn trùng?'},
    {sp:0,zh:'作为一只鸟儿，不管是天空中飞的，陆地上走的，或者能入水的，都必须拥有羽毛。没错儿，区分鸟儿和其他动物的唯一特征就是羽毛，而不是会不会飞！羽毛的作用很多，既可以保暖，又可以保护皮肤；羽毛上的颜色和斑还能充当保护色；当然，更关键的是，羽毛有助于飞行；甚至还有一些鸟儿的部分羽毛有“触觉”。总之，在鸟儿的生活中，羽毛充当着十分重要的角色。所以，鸟儿非常爱惜羽毛，每天都会花很长时间来保养自己的“羽衣”。',
     py:'Zuòwéi yì zhī niǎor, bùguǎn shì tiānkōng zhōng fēi de, lùdì shang zǒu de, huòzhě néng rù shuǐ de, dōu bìxū yōngyǒu yǔmáo. Méi cuòr, qūfēn niǎor hé qítā dòngwù de wéiyī tèzhēng jiù shì yǔmáo, ér bú shì huì bu huì fēi! Yǔmáo de zuòyòng hěn duō, jì kěyǐ bǎonuǎn, yòu kěyǐ bǎohù pífū; yǔmáo shang de yánsè hé bān hái néng chōngdāng bǎohùsè; dāngrán, gèng guānjiàn de shì, yǔmáo yǒu zhù yú fēixíng; shènzhì hái yǒu yìxiē niǎor de bùfen yǔmáo yǒu "chùjué". Zǒngzhī, zài niǎor de shēnghuó zhōng, yǔmáo chōngdāngzhe shífēn zhòngyào de juésè. Suǒyǐ, niǎor fēicháng àixī yǔmáo, měi tiān dōu huì huā hěn cháng shíjiān lái bǎoyǎng zìjǐ de "yǔyī".',
     vn:'Là một con chim, dù là loài bay trên trời, đi trên cạn hay có thể xuống nước, đều phải có lông vũ. Đúng vậy, đặc điểm duy nhất để phân biệt chim với các loài động vật khác chính là lông vũ, chứ không phải có biết bay hay không! Lông vũ có rất nhiều tác dụng: vừa có thể giữ ấm, lại vừa có thể bảo vệ da; màu sắc và các đốm trên lông còn có thể làm màu nguỵ trang; đương nhiên, quan trọng hơn cả là lông vũ giúp ích cho việc bay; thậm chí còn có một số loài chim mà một phần bộ lông có "xúc giác". Tóm lại, trong cuộc sống của loài chim, lông vũ đóng vai trò vô cùng quan trọng. Vì vậy, chim rất quý bộ lông, ngày nào cũng dành nhiều thời gian để chăm sóc "chiếc áo lông" của mình.'},
    {sp:0,zh:'整理羽毛是保养的基本功，它们只要有时间，就会情不自禁地背过头去，反复地啄着羽毛，就像随身带了一把梳子梳头发一样，顺便上上油，让羽毛更光滑。另外，鸟儿在理毛的时候，还会抓出一点儿寄生虫。',
     py:'Zhěnglǐ yǔmáo shì bǎoyǎng de jīběngōng, tāmen zhǐyào yǒu shíjiān, jiù huì qíngbúzìjīn de bèiguo tóu qu, fǎnfù de zhuózhe yǔmáo, jiù xiàng suíshēn dàile yì bǎ shūzi shū tóufa yíyàng, shùnbiàn shàngshang yóu, ràng yǔmáo gèng guānghuá. Lìngwài, niǎor zài lǐ máo de shíhou, hái huì zhuāchū yìdiǎnr jìshēngchóng.',
     vn:'Chải chuốt lông là "kỹ năng cơ bản" của việc chăm sóc; hễ có thời gian là chúng lại bất giác ngoảnh đầu ra sau, rỉa lông hết lần này đến lần khác, giống như mang theo bên mình một chiếc lược để chải tóc vậy, tiện thể bôi chút dầu cho lông mượt hơn. Ngoài ra, khi rỉa lông, chim còn bắt ra được một ít ký sinh trùng.'},
    {sp:0,zh:'毫无疑问，洗澡也是保养的一大基本项目。不过，鸟儿洗澡用不着肥皂，而且不同种类的鸟儿选择的“澡堂”也不一样，概括来说，就是以方便为原则。比如，海鸟在岛屿上生活，就会选择海水；知更鸟喜欢路旁的浅水坑；寒带的鸟呢，因为江河池塘不好找，只好以雪代水；而老鹰的洗澡方式更是直接，它们会在雨中张开双翅痛快地迎接洗礼！沙浴也是一些鸟儿喜欢的保养方式。所谓沙浴，就是用沙子洗澡，它们之所以放弃了用水洗澡，在很大程度上和它们的生活环境有关，它们大多生活在沙漠等干燥的环境，爱在地面上活动。',
     py:'Háo wú yíwèn, xǐzǎo yě shì bǎoyǎng de yí dà jīběn xiàngmù. Búguò, niǎor xǐzǎo yòng bu zháo féizào, érqiě bù tóng zhǒnglèi de niǎor xuǎnzé de "zǎotáng" yě bù yíyàng, gàikuò lái shuō, jiù shì yǐ fāngbiàn wéi yuánzé. Bǐrú, hǎiniǎo zài dǎoyǔ shang shēnghuó, jiù huì xuǎnzé hǎishuǐ; zhīgēngniǎo xǐhuan lù páng de qiǎn shuǐkēng; hándài de niǎo ne, yīnwèi jiānghé chítáng bù hǎo zhǎo, zhǐhǎo yǐ xuě dài shuǐ; ér lǎoyīng de xǐzǎo fāngshì gèng shì zhíjiē, tāmen huì zài yǔ zhōng zhāngkāi shuāng chì tòngkuài de yíngjiē xǐlǐ! Shāyù yě shì yìxiē niǎor xǐhuan de bǎoyǎng fāngshì. Suǒwèi shāyù, jiù shì yòng shāzi xǐzǎo, tāmen zhīsuǒyǐ fàngqìle yòng shuǐ xǐzǎo, zài hěn dà chéngdù shang hé tāmen de shēnghuó huánjìng yǒuguān, tāmen dàduō shēnghuó zài shāmò děng gānzào de huánjìng, ài zài dìmiàn shang huódòng.',
     vn:'Không còn nghi ngờ gì nữa, tắm cũng là một hạng mục cơ bản quan trọng của việc chăm sóc. Có điều, chim tắm không cần dùng đến xà phòng, hơn nữa các loài chim khác nhau chọn "nhà tắm" cũng khác nhau; nói khái quát thì là lấy sự tiện lợi làm nguyên tắc. Ví dụ, chim biển sống trên đảo thì sẽ chọn nước biển; chim cổ đỏ thích vũng nước nông ven đường; còn chim ở vùng hàn đới, vì khó tìm được sông ngòi ao hồ, nên đành lấy tuyết thay nước; còn cách tắm của diều hâu thì càng trực tiếp hơn, chúng dang rộng đôi cánh trong mưa, sảng khoái đón nhận "lễ tẩy rửa"! Tắm cát cũng là một cách chăm sóc mà một số loài chim ưa thích. Cái gọi là tắm cát, chính là dùng cát để tắm; sở dĩ chúng bỏ cách tắm bằng nước, phần lớn là có liên quan đến môi trường sống: đa số chúng sống ở những môi trường khô hạn như sa mạc, thích hoạt động trên mặt đất.'},
    {sp:0,zh:'另外，睡眠是鸟儿们最佳的保养方式，虽然我们很少看到睡眠中的鸟儿，那是因为它们通常会寻找一处秘密的地方休息。大多数鸟儿1天大约睡8小时，有些鸟儿差不多要睡1天，而另一些鸟儿几乎一点儿觉也不用睡。',
     py:'Lìngwài, shuìmián shì niǎormen zuì jiā de bǎoyǎng fāngshì, suīrán wǒmen hěn shǎo kàndào shuìmián zhōng de niǎor, nà shì yīnwèi tāmen tōngcháng huì xúnzhǎo yí chù mìmì de dìfang xiūxi. Dàduōshù niǎor yì tiān dàyuē shuì bā xiǎoshí, yǒuxiē niǎor chàbuduō yào shuì yì tiān, ér lìng yìxiē niǎor jīhū yìdiǎnr jiào yě bú yòng shuì.',
     vn:'Ngoài ra, giấc ngủ là cách chăm sóc tốt nhất của loài chim; tuy chúng ta rất ít khi thấy chim đang ngủ, đó là vì chúng thường tìm một nơi kín đáo để nghỉ ngơi. Đa số chim mỗi ngày ngủ khoảng 8 tiếng, có loài ngủ gần như trọn một ngày, còn một số loài khác thì hầu như chẳng cần ngủ chút nào.'}
  ]
}];

// ══════════════════════════════════════════
// PHÂN BIỆT TỪ GẦN NGHĨA 词语辨析 — 反复/重复 lấy từ sách (tr. 144–145)
// + 爱惜/爱护, 随身/随手 (bài tập 2 của sách, tr. 145)
// ══════════════════════════════════════════
var synonymData = [
  {pair:'反复 — 重复',
   same:'Đều có nghĩa "không chỉ một lần", làm hoặc xảy ra nhiều lần.',
   sameEx:{zh:'这件事情你已经反复／重复说过好几遍了。',vn:'Chuyện này cậu đã nói đi nói lại mấy lần rồi.'},
   items:[
     {word:'反复',points:[
       'PHÓ TỪ: hết lần này đến lần khác, làm trạng ngữ trước động từ (反复地啄着羽毛, 反复强调).',
       'ĐỘNG TỪ: tình trạng BẤT LỢI xuất hiện trở lại, tái phát (这种病容易反复).',
       'DANH TỪ: sự lặp lại không tốt (他思想上可能还有反复, 病情出现了反复).'
     ],ex:[{zh:'它们只要一有时间，就会情不自禁地背过头去，反复地啄着羽毛。',vn:'Hễ có thời gian là chúng lại bất giác ngoảnh đầu ra sau, rỉa lông hết lần này đến lần khác.'},
          {zh:'这种病容易反复。',vn:'Loại bệnh này dễ tái phát.'}]},
     {word:'重复',points:[
       'ĐỘNG TỪ: làm lại cùng một việc thêm một lần nữa (请你再重复一遍).',
       'ĐỘNG TỪ: cùng một thứ xuất hiện lại lần nữa, không mang nghĩa xấu (这两个练习题重复了).',
       'KHÔNG làm danh từ chỉ "sự tái diễn xấu": không nói 病情出现了重复.'
     ],ex:[{zh:'我没听清，请你再重复一遍。',vn:'Tôi nghe không rõ, bạn nhắc lại lần nữa nhé.'},
          {zh:'这两个练习题重复了。',vn:'Hai bài tập này bị trùng nhau rồi.'}]}
   ],
   quiz:[
     {sentence:'我已经＿＿讲了多少次，你竟然还是忘了！',options:['反复','重复'],answer:0,both:true,
      why:'Câu mẫu có dấu ✓ ở cả hai cột của sách — nghĩa chung "nói nhiều lần", 反复 và 重复 đều được.'},
     {sentence:'这个实验我已经＿＿过两次了。',options:['反复','重复'],answer:1,
      why:'Làm lại cùng một thí nghiệm, sau có 过 + số lần → động từ 重复. 反复 làm động từ chỉ dùng cho tình trạng xấu tái diễn.'},
     {sentence:'经过＿＿实验，他们终于成功了。',options:['反复','重复'],answer:0,
      why:'Thí nghiệm đi thí nghiệm lại, hết lần này đến lần khác → 反复实验.'},
     {sentence:'他的病情出现了＿＿，情况不太乐观。',options:['反复','重复'],answer:0,
      why:'Danh từ chỉ tình trạng xấu tái diễn → 出现了反复. 重复 không có cách dùng này.'}
   ],
   sgk:{
     chung:{t:'都有不止一次的意思。',vn:'Đều có nghĩa không chỉ một lần.',vd:'这件事情你已经反复／重复说过好几遍了。',vdVn:'Chuyện này cậu đã nói đi nói lại mấy lần rồi.'},
     khac:[
       {a:{t:'副词，一遍一遍地。',vn:'Phó từ, hết lần này đến lần khác.',vd:'它们只要一有时间，就会情不自禁地背过头去，反复地啄着羽毛。',vdVn:'Hễ có thời gian là chúng lại bất giác ngoảnh đầu ra sau, rỉa lông hết lần này đến lần khác.'},
        b:{t:'动词，指又一次做同样的事情。',vn:'Động từ, chỉ làm lại cùng một việc thêm lần nữa.',vd:'我没听清，请你再重复一遍。',vdVn:'Tôi nghe không rõ, bạn nhắc lại lần nữa nhé.'}},
       {a:{t:'动词，不利的情况重新出现。',vn:'Động từ, tình trạng bất lợi xuất hiện trở lại.',vd:'这种病容易反复。',vdVn:'Loại bệnh này dễ tái phát.'},
        b:{t:'动词，同样的东西再次出现。',vn:'Động từ, cùng một thứ xuất hiện lại lần nữa.',vd:'这两个练习题重复了。',vdVn:'Hai bài tập này bị trùng nhau rồi.'}},
       {a:{t:'名词，重复出现的不好的情况。',vn:'Danh từ, tình trạng không tốt xuất hiện lặp lại.',vd:'对这个问题，他思想上可能还有反复。',vdVn:'Về vấn đề này, suy nghĩ của anh ấy có thể vẫn còn dao động.'},
        b:{t:'没有这个用法。',vn:'Không có cách dùng này.'}}
     ],
     lamThu:[
       {s:'我已经＿＿讲了多少次，你竟然还是忘了！',dap:[true,true],mau:true,
        giai:'Câu mẫu của sách: nghĩa chung "nhiều lần" — cả hai đều được.'},
       {s:'这个实验我已经＿＿过两次了。',dap:[false,true],
        giai:'Làm lại cùng một việc, sau có 过 + 两次 → động từ 重复.'},
       {s:'经过＿＿实验，他们终于成功了。',dap:[true,false],
        giai:'Thí nghiệm hết lần này đến lần khác (一遍一遍地) → 反复实验.'},
       {s:'他的病情出现了＿＿，情况不太乐观。',dap:[true,false],
        giai:'Danh từ chỉ tình trạng xấu lặp lại → 出现了反复; 重复 không làm danh từ kiểu này.'}
     ]
   }},

  {pair:'爱惜 — 爱护',
   same:'Đều là ĐỘNG TỪ, đều có nghĩa yêu quý và giữ gìn một đối tượng.',
   sameEx:{zh:'我们要爱惜／爱护公共财物。',vn:'Chúng ta phải giữ gìn của công.'},
   items:[
     {word:'爱惜',points:[
       'Nhấn mạnh QUÝ TRỌNG, không lãng phí, không để hư hao.',
       'Tân ngữ thường là đồ vật, thời gian, sức khoẻ, sinh mạng: 爱惜粮食 / 时间 / 身体 / 生命.',
       'Nghĩa bóng: 爱惜羽毛 = giữ gìn thanh danh.'
     ],ex:[{zh:'我们要爱惜粮食，不要浪费。',vn:'Chúng ta phải quý trọng lương thực, không được lãng phí.'},
          {zh:'鸟儿非常爱惜羽毛。',vn:'Loài chim rất quý bộ lông của mình.'}]},
     {word:'爱护',points:[
       'Nhấn mạnh BẢO VỆ, che chở cho khỏi bị tổn hại.',
       'Tân ngữ thường là người, động vật, cây cỏ, môi trường: 爱护孩子 / 动物 / 花草 / 环境.',
       'Hay gặp trong khẩu hiệu: 爱护公物, 爱护环境.'
     ],ex:[{zh:'我们要爱护小动物，不要伤害它们。',vn:'Chúng ta phải yêu thương, bảo vệ các con vật nhỏ, đừng làm hại chúng.'},
          {zh:'老师像妈妈一样爱护我们。',vn:'Cô giáo yêu thương, che chở chúng em như mẹ.'}]}
   ],
   quiz:[
     {sentence:'我们要＿＿粮食，不要浪费。',options:['爱惜','爱护'],answer:0,
      why:'Không lãng phí → quý trọng → 爱惜粮食 (bài tập 2 của sách).'},
     {sentence:'老师像妈妈一样＿＿我们。',options:['爱惜','爱护'],answer:1,
      why:'Tân ngữ là người, nghĩa che chở, bảo vệ → 爱护.'},
     {sentence:'你得＿＿身体，别老是熬夜。',options:['爱惜','爱护'],answer:0,both:true,
      why:'爱惜身体 (bảng 词语搭配) là cách nói hay dùng nhất; 爱护身体 cũng nói được. Cả hai đều chấp nhận.'},
     {sentence:'我们要＿＿小动物，不要伤害它们。',options:['爱惜','爱护'],answer:1,
      why:'Bảo vệ động vật khỏi bị hại → 爱护动物.'}
   ]},

  {pair:'随身 — 随手',
   same:'Đều bắt đầu bằng 随 (theo, thuận theo), đều hay làm TRẠNG NGỮ trước động từ.',
   sameEx:{zh:'她随身带着一个小本子，有什么想法就随手记下来。',vn:'Cô ấy luôn mang theo một cuốn sổ nhỏ, có ý tưởng gì là tiện tay ghi lại ngay.'},
   items:[
     {word:'随身',points:[
       'Mang THEO NGƯỜI, để bên mình.',
       'Thường đi với 带 / 携带: 随身带着伞.',
       'Làm định ngữ: 随身物品, 随身行李.'
     ],ex:[{zh:'她总是随身带着伞。',vn:'Cô ấy lúc nào cũng mang ô theo người.'},
          {zh:'下车时请带好您的随身物品。',vn:'Khi xuống xe xin quý khách mang theo đầy đủ đồ tuỳ thân.'}]},
     {word:'随手',points:[
       'TIỆN TAY làm luôn một việc nhỏ khi đang làm việc khác.',
       'Đi với động từ hành động bằng tay: 随手关门, 随手关灯, 随手扔.',
       'Không làm định ngữ chỉ đồ vật (không nói 随手物品).'
     ],ex:[{zh:'出门时请随手关灯。',vn:'Khi ra ngoài xin tiện tay tắt đèn.'},
          {zh:'不要随手扔垃圾。',vn:'Đừng tiện tay vứt rác bừa bãi.'}]}
   ],
   quiz:[
     {sentence:'她总是＿＿带着伞，说“不怕一万，就怕万一”。',options:['随身','随手'],answer:0,
      why:'Mang theo người → 随身带着 (bài tập 2 của sách).'},
     {sentence:'离开教室时请＿＿关灯。',options:['随身','随手'],answer:1,
      why:'Tiện tay tắt đèn → 随手关灯.'},
     {sentence:'下飞机时请带好您的＿＿物品。',options:['随身','随手'],answer:0,
      why:'Đồ tuỳ thân → 随身物品; 随手 không làm định ngữ kiểu này.'},
     {sentence:'他看完报纸，＿＿就扔在了沙发上。',options:['随身','随手'],answer:1,
      why:'Tiện tay vứt → 随手扔.'}
   ]}
];

// ══════════════════════════════════════════
// BẮC CẦU HÁN–VIỆT
// ══════════════════════════════════════════
var hvBridgeData = {
  easy:[
    {zh:'接触',hv:'tiếp xúc',vn:'tiếp xúc',note:'Trùng khít — nhớ một lần là xong.'},
    {zh:'特征',hv:'đặc trưng',vn:'đặc trưng, đặc điểm',note:'Trùng khít — 主要特征 = đặc trưng chủ yếu.'},
    {zh:'昆虫',hv:'côn trùng',vn:'côn trùng',note:'Trùng khít.'},
    {zh:'唯一',hv:'duy nhất',vn:'duy nhất',note:'Trùng khít — 唯一的办法 = cách duy nhất.'},
    {zh:'种类',hv:'chủng loại',vn:'chủng loại',note:'Trùng khít.'},
    {zh:'概括',hv:'khái quát',vn:'khái quát',note:'Trùng khít — 概括课文内容 = khái quát nội dung bài.'},
    {zh:'寄生',hv:'ký sinh',vn:'ký sinh',note:'Trùng khít — 寄生虫 = ký sinh trùng.'},
    {zh:'秘密',hv:'bí mật',vn:'bí mật',note:'Trùng khít.'},
    {zh:'迎接',hv:'nghênh tiếp',vn:'nghênh đón, chào đón',note:'Như "nghênh tiếp", "nghênh đón" trong tiếng Việt.'},
    {zh:'随身',hv:'tuỳ thân',vn:'mang theo người',note:'Như "đồ tuỳ thân" — 随身物品.'},
    {zh:'老鹰',hv:'lão ưng',vn:'diều hâu, chim ưng',note:'鹰 = "ưng" (chim ưng); 老 chỉ là tiền tố, không có nghĩa "già".'}
  ],
  idiom:[
    {zh:'情不自禁',hv:'tình bất tự cấm',vn:'không kìm được lòng, bất giác',note:'Câu bài khoá: 情不自禁地背过头去 = bất giác ngoảnh đầu ra sau.'},
    {zh:'毫无疑问',hv:'hào vô nghi vấn',vn:'không còn nghi ngờ gì nữa',note:'Mở đầu đoạn 4: 毫无疑问，洗澡也是保养的一大基本项目.'},
    {zh:'以雪代水',hv:'dĩ tuyết đại thuỷ',vn:'lấy tuyết thay nước',note:'Mẫu 以 A 代 B = lấy A thay B; cùng kiểu với 以方便为原则 (lấy tiện lợi làm nguyên tắc).'},
    {zh:'千姿百态',hv:'thiên tư bách thái',vn:'muôn hình muôn vẻ',note:'Gặp trong bài nghe của sách bài tập: 动物睡眠方面千姿百态的特点.'},
    {zh:'旗鼓相当',hv:'kỳ cổ tương đương',vn:'ngang tài ngang sức',note:'Gặp trong bài nghe của sách bài tập (sư tử và chuột): 与自己旗鼓相当的对手.'}
  ],
  trap:[
    {zh:'角色',hv:'giác sắc',vn:'vai, vai trò',
     warn:'BẪY đọc: 角 ở đây đọc jué, không đọc jiǎo (góc, sừng). Âm Hán Việt "giác sắc" không gợi nghĩa — nhớ nghĩa là VAI (diễn), VAI TRÒ.'},
    {zh:'痛快',hv:'thống khoái',vn:'sảng khoái, đã',
     warn:'痛 là "đau" nhưng 痛快 KHÔNG liên quan đến đau: nghĩa là vui sướng, thoả thích (喝个痛快 = uống cho đã).'},
    {zh:'保养',hv:'bảo dưỡng',vn:'giữ gìn, chăm sóc',
     warn:'"Bảo dưỡng" tiếng Việt chỉ dùng cho máy móc; 保养 còn dùng cho người: 她保养得很好 = cô ấy giữ gìn nhan sắc tốt, KHÔNG dịch "được bảo dưỡng tốt".'},
    {zh:'反复',hv:'phản phục',vn:'nhiều lần, lặp đi lặp lại',
     warn:'Không phải "phản" (chống lại). Đừng nhầm với "phản phúc" (tráo trở) trong tiếng Việt. 反复强调 = nhấn mạnh đi nhấn mạnh lại.'},
    {zh:'光滑',hv:'quang hoạt',vn:'trơn, nhẵn, mượt',
     warn:'Không phải "quang" (ánh sáng) hay "hoạt động". 光 = trơn nhẵn, 滑 = trơn → bề mặt nhẵn bóng.'},
    {zh:'肥皂',hv:'phì tạo',vn:'xà phòng',
     warn:'肥 ở đây không phải "béo, mập". Nhớ cả cụm: 一块肥皂 = một bánh xà phòng.'},
    {zh:'洗礼',hv:'tẩy lễ',vn:'lễ rửa tội; sự tôi luyện',
     warn:'Không phải "lễ tắm rửa" thông thường. Nghĩa gốc là nghi lễ tôn giáo; nghĩa bóng là sự tôi luyện (经过风雨的洗礼).'},
    {zh:'区分',hv:'khu phân',vn:'phân biệt',
     warn:'"Khu" không phải khu vực ở đây; 区 = chia tách. 区分 dịch là "phân biệt", không dịch "khu phân".'}
  ]
};

// ══════════════════════════════════════════
// GHÉP TỪ — theo bảng 词语搭配 của sách (tr. 143–144) + bài tập 3
// ══════════════════════════════════════════
var matchData = [
  {left:'接触',right:'大自然'},
  {left:'爱惜',right:'粮食'},
  {left:'抓住',right:'机会'},
  {left:'一把',right:'梳子'},
  {left:'一块',right:'肥皂'},
  {left:'一双',right:'翅膀'},
  {left:'一只',right:'昆虫'},
  {left:'唯一的',right:'办法'},
  {left:'明显的',right:'特征'},
  {left:'光滑的',right:'羽毛'},
  {left:'干燥的',right:'气候'},
  {left:'痛快地',right:'哭一场'},
  {left:'热情地',right:'迎接'},
  {left:'保养',right:'汽车'},
  {left:'秘密',right:'行动'},
  {left:'区分',right:'真假'},
  {left:'概括为',right:'三点'},
  {left:'充当',right:'翻译'},
  {left:'扮演',right:'角色'},
  {left:'反复',right:'强调'},
  {left:'随身',right:'物品'}
];

// ══════════════════════════════════════════
// ĐIỀN TỪ
// ══════════════════════════════════════════
var fillData = [
  {pre:'我从来没',blank:'接触',post:'过这方面的业务。',hint:'(tiếp xúc)',ans:'接触'},
  {pre:'区分鸟儿和其他动物的唯一',blank:'特征',post:'就是羽毛。',hint:'(đặc điểm)',ans:'特征'},
  {pre:'要是我有一双',blank:'翅膀',post:'，我就能飞回家看妈妈了。',hint:'(cánh)',ans:'翅膀'},
  {pre:'有些',blank:'昆虫',post:'和鸟类一样有翅膀。',hint:'(côn trùng)',ans:'昆虫'},
  {pre:'雨停了，',blank:'天空',post:'中出现了一道彩虹。',hint:'(bầu trời)',ans:'天空'},
  {pre:'这对双胞胎长得太像了，我很难',blank:'区分',post:'她们。',hint:'(phân biệt)',ans:'区分'},
  {pre:'那件事将是我一生中',blank:'唯一',post:'的遗憾。',hint:'(duy nhất)',ans:'唯一'},
  {pre:'这只小猫全身是白的，只有背上有几块黑色的',blank:'斑',post:'。',hint:'(đốm)',ans:'斑'},
  {pre:'羽毛上的颜色和斑还能',blank:'充当',post:'保护色。',hint:'(làm, đảm nhiệm)',ans:'充当'},
  {pre:'暑假我可能去上海、南京，还有杭州，',blank:'总之',post:'，想去南方几个城市转转。',hint:'(tóm lại)',ans:'总之'},
  {pre:'在这部电影里，她扮演了一个很难演的',blank:'角色',post:'。',hint:'(vai)',ans:'角色'},
  {pre:'我们要',blank:'爱惜',post:'粮食，不要浪费。',hint:'(quý trọng)',ans:'爱惜'},
  {pre:'汽车要定期',blank:'保养',post:'，才能开得久。',hint:'(bảo dưỡng)',ans:'保养'},
  {pre:'老板',blank:'反复',post:'强调过很多次了。',hint:'(nhiều lần)',ans:'反复'},
  {pre:'院子里的几只鸡正在低头',blank:'啄',post:'米。',hint:'(mổ)',ans:'啄'},
  {pre:'她总是',blank:'随身',post:'带着伞，说“不怕一万，就怕万一”。',hint:'(theo người)',ans:'随身'},
  {pre:'他天天带着一把',blank:'梳子',post:'，碰到镜子就梳来梳去的。',hint:'(lược)',ans:'梳子'},
  {pre:'经常使用我们的肥皂，您的皮肤将变得更加',blank:'光滑',post:'。',hint:'(mịn màng)',ans:'光滑'},
  {pre:'警察一把把小偷给',blank:'抓',post:'住了。',hint:'(bắt, tóm)',ans:'抓'},
  {pre:'鸟儿在理毛的时候，还会抓出一点儿',blank:'寄生',post:'虫。',hint:'(ký sinh)',ans:'寄生'},
  {pre:'不过，鸟儿洗澡用不着',blank:'肥皂',post:'。',hint:'(xà phòng)',ans:'肥皂'},
  {pre:'这个地区的动植物',blank:'种类',post:'多，数量大。',hint:'(chủng loại)',ans:'种类'},
  {pre:'这次会议的精神可以',blank:'概括',post:'为三点。',hint:'(khái quát)',ans:'概括'},
  {pre:'海鸟在',blank:'岛屿',post:'上生活，就会选择海水。',hint:'(đảo)',ans:'岛屿'},
  {pre:'',blank:'知更鸟',post:'喜欢路旁的浅水坑。',hint:'(chim cổ đỏ)',ans:'知更鸟'},
  {pre:'爷爷在院子里挖了一个',blank:'坑',post:'，种了一棵苹果树。',hint:'(hố)',ans:'坑'},
  {pre:'小时候，我常常和小伙伴们在',blank:'池塘',post:'边抓鱼。',hint:'(ao)',ans:'池塘'},
  {pre:'一只',blank:'老鹰',post:'在天空中飞来飞去，好像在找吃的。',hint:'(diều hâu)',ans:'老鹰'},
  {pre:'你好容易来一趟，我们今晚一定要喝个',blank:'痛快',post:'！',hint:'(cho đã)',ans:'痛快'},
  {pre:'全校师生都在门口热情地',blank:'迎接',post:'外国客人。',hint:'(đón)',ans:'迎接'},
  {pre:'经过这次比赛的',blank:'洗礼',post:'，队员们成熟了很多。',hint:'(sự tôi luyện)',ans:'洗礼'},
  {pre:'风太大了，我的眼睛里进了',blank:'沙子',post:'。',hint:'(cát)',ans:'沙子'},
  {pre:'北京的冬天空气很',blank:'干燥',post:'，要多喝水。',hint:'(khô)',ans:'干燥'},
  {pre:'这是我们俩的',blank:'秘密',post:'，你千万别告诉别人。',hint:'(bí mật)',ans:'秘密'}
];

// ══════════════════════════════════════════
// SẮP XẾP CÂU — mỗi điểm ngữ pháp (总之 · 动词+过 · 动词+开) ít nhất 2 câu
// ══════════════════════════════════════════
var sortData = [
  {words:['总之','，','羽毛','充当着','十分重要的','角色','。'],ans:'总之，羽毛充当着十分重要的角色。',audio:'总之，羽毛充当着十分重要的角色。'},
  {words:['不管你去不去','，','总之','我','一定要去','。'],ans:'不管你去不去，总之我一定要去。',audio:'不管你去不去，总之我一定要去。'},
  {words:['他','转过身','，','一句话','也不说','。'],ans:'他转过身，一句话也不说。',audio:'他转过身，一句话也不说。'},
  {words:['你','回过头','就可以','看见我了','。'],ans:'你回过头就可以看见我了。',audio:'你回过头就可以看见我了。'},
  {words:['接过书的','那一刻','，','老王','突然','明白了','。'],ans:'接过书的那一刻，老王突然明白了。',audio:'接过书的那一刻，老王突然明白了。'},
  {words:['妈妈','张开','双臂','迎接我','。'],ans:'妈妈张开双臂迎接我。',audio:'妈妈张开双臂迎接我。'},
  {words:['那件事情','已经','传开了','，','大家都知道了','。'],ans:'那件事情已经传开了，大家都知道了。',audio:'那件事情已经传开了，大家都知道了。'},
  {words:['他','把纸','铺开','，','准备','练习书法','。'],ans:'他把纸铺开，准备练习书法。',audio:'他把纸铺开，准备练习书法。'},
  {words:['鸟儿','洗澡','用不着','肥皂','。'],ans:'鸟儿洗澡用不着肥皂。',audio:'鸟儿洗澡用不着肥皂。'},
  {words:['我','从来没','接触过','这方面的','业务','。'],ans:'我从来没接触过这方面的业务。',audio:'我从来没接触过这方面的业务。'},
  {words:['老板','反复','强调过','很多次了','。'],ans:'老板反复强调过很多次了。',audio:'老板反复强调过很多次了。'},
  {words:['请你','概括一下','今天学的','戏剧的种类','。'],ans:'请你概括一下今天学的戏剧的种类。',audio:'请你概括一下今天学的戏剧的种类。'},
  {words:['我们','要','爱惜','粮食','，','不要浪费','。'],ans:'我们要爱惜粮食，不要浪费。',audio:'我们要爱惜粮食，不要浪费。'}
];

// ══════════════════════════════════════════
// CHỌN TỪ THÍCH HỢP
// ══════════════════════════════════════════
var errorFixMode = 'wordchoice';
var errorFixData = [
  {wrong:'我已经____讲了多少次，你竟然还是忘了！',opts:['反复','区分','充当','概括'],ans:0,
   exp:'Nói đi nói lại nhiều lần → 反复讲 (câu mẫu phần 做一做; ở câu này 重复 cũng được).'},
  {wrong:'这个实验我已经____过两次了。',opts:['重复','反复','保养','接触'],ans:0,
   exp:'Làm lại cùng một việc, sau có 过 + 两次 → động từ 重复. 反复 làm động từ chỉ dùng cho tình trạng xấu tái diễn.'},
  {wrong:'他的病情出现了____，情况不太乐观。',opts:['反复','重复','秘密','特征'],ans:0,
   exp:'Danh từ chỉ tình trạng xấu lặp lại → 出现了反复. 重复 không làm danh từ kiểu này.'},
  {wrong:'我们要____粮食，不要浪费。',opts:['爱惜','爱护','保养','迎接'],ans:0,
   exp:'Không lãng phí → quý trọng → 爱惜粮食 (bài tập 2 của sách). 爱护 nhấn mạnh bảo vệ, che chở.'},
  {wrong:'我们要____小动物，不要伤害它们。',opts:['爱护','爱惜','保养','概括'],ans:0,
   exp:'Bảo vệ con vật khỏi bị hại → 爱护动物. 爱惜 dùng cho đồ vật, thời gian, sức khoẻ.'},
  {wrong:'她总是____带着伞，说“不怕一万，就怕万一”。',opts:['随身','随手','痛快','反复'],ans:0,
   exp:'Mang theo người → 随身带着 (bài tập 2 của sách). 随手 = tiện tay làm luôn.'},
  {wrong:'离开教室时请____关灯。',opts:['随手','随身','痛快','干燥'],ans:0,
   exp:'Tiện tay tắt đèn → 随手关灯. 随身 chỉ mang theo người.'},
  {wrong:'警察一把把小偷给____住了。',opts:['抓','拿','啄','梳'],ans:0,
   exp:'Bắt, tóm người → 抓住 (bài tập 2 của sách). 拿 là cầm đồ vật; 啄 là chim mổ.'},
  {wrong:'这个地区的动植物____多，数量大。',opts:['种类','类型','角色','特征'],ans:0,
   exp:'Nhiều loài, nhiều loại → 种类多 (bài tập 2 của sách). 类型 là kiểu, loại hình (性格类型).'},
  {wrong:'这是我们俩的____，你千万别告诉别人。',opts:['秘密','特征','角色','种类'],ans:0,
   exp:'Điều không được nói cho người khác → 秘密 (danh từ).'},
  {wrong:'区分鸟儿和其他动物的____特征就是羽毛。',opts:['唯一','光滑','干燥','痛快'],ans:0,
   exp:'Chỉ có một đặc điểm → 唯一特征 (bảng 词语搭配: 唯一的特征).'},
  {wrong:'在鸟儿的生活中，羽毛____着十分重要的角色。',opts:['充当','区分','接触','概括'],ans:0,
   exp:'充当着……的角色 = đóng vai trò …. Kết hợp cố định trong bài khoá.'},
  {wrong:'北京的冬天空气很____，要多喝水。',opts:['干燥','光滑','痛快','秘密'],ans:0,
   exp:'Không khí khô → 空气干燥 (bảng 词语搭配: 干燥的空气).'},
  {wrong:'你好容易来一趟，我们今晚一定要喝个____！',opts:['痛快','愉快','光滑','唯一'],ans:0,
   exp:'V + 个 + 痛快 = … cho đã (bài tập 1 của sách). 愉快 không dùng trong mẫu này.'},
  {wrong:'祝你旅途____！',opts:['愉快','痛快','光滑','干燥'],ans:0,
   exp:'Lời chúc dùng 愉快 (祝你旅途愉快). 痛快 là "đã, sướng" — không dùng để chúc.'},
  {wrong:'全校师生都在门口热情地____外国客人。',opts:['迎接','接触','抓住','充当'],ans:0,
   exp:'热情地迎接 + khách (bảng 词语搭配).'},
  {wrong:'暑假我可能去上海、南京，还有杭州，____，想去南方几个城市转转。',opts:['总之','比如','而且','另外'],ans:0,
   exp:'Liệt kê vài nơi rồi khái quát lại → 总之 (câu ví dụ của sách).'},
  {wrong:'海鸟在____上生活，就会选择海水。',opts:['岛屿','天空','池塘','翅膀'],ans:0,
   exp:'Chim biển sống trên đảo → 岛屿上. 池塘 là ao nước ngọt, không có nước biển.'},
  {wrong:'这次会议的精神可以____为三点。',opts:['概括','保养','反复','充当'],ans:0,
   exp:'把……概括为三点 = khái quát thành ba điểm (bài tập 1 của sách).'},
  {wrong:'你回____头就可以看见我了。',opts:['过','开','起','着'],ans:0,
   exp:'V + 过: qua động tác, người đổi hướng → 回过头 (điểm ngữ pháp 2).'},
  {wrong:'回家时，妈妈张____双臂迎接我。',opts:['开','过','起','着'],ans:0,
   exp:'V + 开: biểu thị sự dang rộng, mở ra → 张开双臂 (điểm ngữ pháp 3).'},
  {wrong:'那件事情已经传____了，大家都知道了。',opts:['开','过','起','着'],ans:0,
   exp:'传开 = lan rộng ra khắp nơi (V + 开). Vì vậy 大家都知道了.'}
];

// ══════════════════════════════════════════
// DỊCH
// ══════════════════════════════════════════
var translateData = [
  {vi:'Vì chưa từng tiếp xúc với lập trình nên phần tư duy logic thầy giảng tớ phải nghiền ngẫm đi nghiền ngẫm lại mấy lần mới hiểu.',zh:'由于从来没接触过编程，老师讲的逻辑我得反复琢磨好几遍才弄明白。',py:'Yóuyú cónglái méi jiēchùguo biānchéng, lǎoshī jiǎng de luójí wǒ děi fǎnfù zuómo hǎo jǐ biàn cái nòng míngbai.',goiY:['由于','接触过','反复','逻辑'],giai:'由于 nêu nguyên nhân ở vế đầu (vế sau có thể không cần 所以); 接触 + 过 = "đã từng tiếp xúc", phủ định dùng 没 (没接触过), không dùng 不.'},
  {vi:'Cuốn từ điển này là món quà duy nhất ông để lại cho tớ trước khi mất, vì vậy tớ luôn rất nâng niu nó.',zh:'这本词典是爷爷去世前留给我的唯一礼物，所以我一直非常爱惜它。',py:'Zhè běn cídiǎn shì yéye qùshì qián liú gěi wǒ de wéiyī lǐwù, suǒyǐ wǒ yìzhí fēicháng àixī tā.',goiY:['唯一','去世','所以','爱惜'],giai:'唯一 làm định ngữ đứng trước danh từ (唯一的 / 唯一礼物); 爱惜 = quý trọng, giữ gìn đồ vật / thời gian / sức khoẻ — với người thân thì dùng 疼爱.'},
  {vi:'Dù tra bằng điện thoại hay lật sách giáo khoa, tóm lại cậu phải phân biệt rõ hai từ này trước đã.',zh:'不管用手机查还是翻课本，总之，你得先把这两个词区分开。',py:'Bùguǎn yòng shǒujī chá háishi fān kèběn, zǒngzhī, nǐ děi xiān bǎ zhè liǎng ge cí qūfēn kāi.',goiY:['不管……还是……','总之','把……区分开'],giai:'不管 A 还是 B，总之 + điều không đổi: sau khi nêu các khả năng, 总之 chốt lại ý chắc chắn; V + 开 (区分开) = tách rời ra.'},
  {vi:'Tớ vừa bước ra khỏi phòng thi, mẹ đã dang rộng hai tay đón tớ, rồi dẫn tớ đi ăn một bữa thật đã.',zh:'我一走出考场，妈妈就张开双臂迎接我，然后带我去痛快地吃了一顿大餐。',py:'Wǒ yì zǒuchū kǎochǎng, māma jiù zhāngkāi shuāng bì yíngjiē wǒ, ránhòu dài wǒ qù tòngkuài de chīle yí dùn dàcān.',goiY:['一……就……','张开','迎接','然后'],giai:'张开 = V + 开 (dang ra, mở ra); 一……就…… nối hai việc liền nhau, 然后 tiếp nối hành động sau — "thật đã" dịch bằng 痛快地.'},
  {vi:'Bạn cùng bàn nhận tờ giấy tớ đưa, đọc xong liền kẹp ngay vào cuốn sổ luôn mang theo bên mình, đủ thấy cậu ấy không muốn ai phát hiện ra bí mật của chúng tớ.',zh:'同桌接过我递来的纸条，看完后立刻把它夹进随身带的笔记本里，可见他不想让别人发现我们的秘密。',py:'Tóngzhuō jiēguo wǒ dì lái de zhǐtiáo, kànwán hòu lìkè bǎ tā jiājìn suíshēn dài de bǐjìběn li, kějiàn tā bù xiǎng ràng biérén fāxiàn wǒmen de mìmì.',goiY:['接过','随身','可见','秘密'],giai:'接过 = V + 过 (vật chuyển từ tay người này sang tay mình); 可见 dẫn ra kết luận rút từ sự việc vừa kể — dịch "đủ thấy, có thể thấy".'},
  {vi:'Mùa đông miền Bắc rất hanh khô, thay vì đợi da nứt nẻ rồi mới đi khám, chi bằng mỗi ngày dành vài phút chăm sóc da cẩn thận.',zh:'北方的冬天特别干燥，与其等皮肤变得粗糙了再去看医生，不如每天花几分钟好好保养。',py:'Běifāng de dōngtiān tèbié gānzào, yǔqí děng pífū biàn de cūcāo le zài qù kàn yīshēng, bùrú měi tiān huā jǐ fēnzhōng hǎohǎo bǎoyǎng.',goiY:['干燥','与其……不如……','粗糙','保养'],giai:'与其 A 不如 B: bỏ cách A, chọn cách B; 等……再…… = "đợi… rồi mới…"; 保养 dùng cho da, cơ thể, máy móc.'},
  {vi:'Hai loài bướm này trông rất giống nhau, chỉ có quan sát kỹ những đốm trên cánh mới phát hiện được đặc điểm khác nhau của chúng.',zh:'这两种蝴蝶长得非常像，只有仔细观察翅膀上的斑点，才能发现它们不同的特征。',py:'Zhè liǎng zhǒng húdié zhǎng de fēicháng xiàng, zhǐyǒu zǐxì guānchá chìbǎng shang de bāndiǎn, cái néng fāxiàn tāmen bùtóng de tèzhēng.',goiY:['只有……才……','翅膀','斑点','特征'],giai:'只有……才…… nêu điều kiện duy nhất; 特征 là danh từ "nét đặc trưng", không dùng như tính từ (✗ 很特征).'},
  {vi:'Ảnh một khi đã lan truyền trên mạng thì không bao giờ xoá sạch được nữa, vì vậy cách duy nhất là kiểm tra kỹ nhiều lần trước khi đăng lên trang cá nhân.',zh:'照片一旦在网上传开，就再也删不干净了，所以唯一的办法就是发朋友圈之前反复检查。',py:'Zhàopiàn yídàn zài wǎng shang chuánkāi, jiù zài yě shān bu gānjìng le, suǒyǐ wéiyī de bànfǎ jiù shì fā péngyouquān zhīqián fǎnfù jiǎnchá.',goiY:['一旦……就……','传开','唯一','反复'],giai:'传开 = V + 开 (lan rộng ra); 一旦……就…… nêu hậu quả một khi xảy ra, 再也 + phủ định = "không bao giờ… nữa".'},
  {vi:'Thầy bảo chúng tớ dùng một câu để khái quát bài văn này, có bạn nói là tình bạn, có bạn nói là sự trưởng thành, tóm lại mỗi người hiểu một kiểu.',zh:'老师让我们用一句话概括这篇文章，有的说是友谊，有的说是成长，总之，大家的理解各不相同。',py:'Lǎoshī ràng wǒmen yòng yí jù huà gàikuò zhè piān wénzhāng, yǒude shuō shì yǒuyì, yǒude shuō shì chéngzhǎng, zǒngzhī, dàjiā de lǐjiě gè bù xiāngtóng.',goiY:['概括','有的……有的……','总之','成长'],giai:'有的……有的…… liệt kê các ý, rồi 总之 khái quát lại ở phần kết (总之 không dùng để mở đầu); 概括 = tóm tắt ý chính.'},
  {vi:'Khi làm bài tập nhóm, tớ không chỉ phải tìm tài liệu mà còn phải đảm nhận vai trò người dẫn dắt; tuy áp lực rất lớn nhưng trải nghiệm này lại khiến tớ tự tin hơn.',zh:'做小组作业时，我不仅要查资料，而且要充当主持人的角色；虽然压力很大，这段经历却让我更自信了。',py:'Zuò xiǎozǔ zuòyè shí, wǒ bùjǐn yào chá zīliào, érqiě yào chōngdāng zhǔchírén de juésè; suīrán yālì hěn dà, zhè duàn jīnglì què ràng wǒ gèng zìxìn le.',goiY:['不仅……而且……','充当……角色','虽然……却……'],giai:'充当 + 角色 = "đảm nhận vai trò"; 却 là phó từ, đứng sau chủ ngữ (这段经历却……), không đặt ở đầu vế như 但是.'}
];

// Chiều Trung → Việt — câu của bài khoá
var translateDataRev = [
  {vi:'Đặc điểm duy nhất để phân biệt chim với các loài động vật khác là bộ lông, chứ không phải có biết bay hay không.',zh:'区分鸟儿和其他动物的唯一特征是羽毛，而不是会不会飞。',py:'Qūfēn niǎor hé qítā dòngwù de wéiyī tèzhēng shì yǔmáo, ér bú shì huì bu huì fēi.',goiY:['区分 = phân biệt','唯一特征 = đặc điểm duy nhất','而不是 = chứ không phải'],giai:'A 是 B，而不是 C = "là B chứ không phải C" (khẳng định trước, phủ định sau); 会不会飞 là câu hỏi chính phản làm tân ngữ — dịch "có biết bay hay không".'},
  {vi:'Màu sắc và những đốm trên lông chim không chỉ đẹp mà còn có thể làm màu ngụy trang bảo vệ.',zh:'羽毛上的颜色和斑点不但很漂亮，而且还能充当保护色。',py:'Yǔmáo shang de yánsè hé bāndiǎn búdàn hěn piàoliang, érqiě hái néng chōngdāng bǎohùsè.',goiY:['斑点 = đốm','不但……而且…… = không những… mà còn…','充当 = đóng vai, làm'],giai:'不但……而且…… nối hai tác dụng tăng tiến; 充当 + N = "đảm nhận vai / làm…", 保护色 dịch "màu ngụy trang (bảo vệ)".'},
  {vi:'Sở dĩ chim rất quý bộ lông là vì lông đóng vai trò quan trọng trong cuộc sống của chúng.',zh:'鸟儿之所以非常爱惜羽毛，是因为羽毛在它们的生活中充当着重要的角色。',py:'Niǎor zhīsuǒyǐ fēicháng àixī yǔmáo, shì yīnwèi yǔmáo zài tāmen de shēnghuó zhōng chōngdāngzhe zhòngyào de juésè.',goiY:['之所以……是因为…… = sở dĩ… là vì…','爱惜 = quý trọng','充当……角色 = đóng vai trò'],giai:'之所以 (kết quả) …… 是因为 (nguyên nhân): kết quả nói trước; 充当着……角色 dịch gọn là "đóng vai trò…".'},
  {vi:'Chỉ cần rảnh là chim lại ngoảnh đầu ra sau, mổ rỉa bộ lông hết lần này đến lần khác, giống như lúc nào cũng mang theo một chiếc lược bên mình.',zh:'鸟儿只要有空，就会背过头去反复地啄羽毛，就像随身带着一把梳子一样。',py:'Niǎor zhǐyào yǒu kòng, jiù huì bèiguo tóu qu fǎnfù de zhuó yǔmáo, jiù xiàng suíshēn dàizhe yì bǎ shūzi yíyàng.',goiY:['只要……就…… = chỉ cần… là…','背过头去 = ngoảnh đầu ra sau','随身 = mang theo bên mình','梳子 = cái lược'],giai:'背过头去 = V + 过 + 头 + 去: đổi hướng đầu ra phía sau (tân ngữ 头 đứng giữa 过 và 去); 就像……一样 là so sánh "giống như…".'},
  {vi:'Khi chim chải chuốt lông, một mặt có thể làm lông mượt hơn, mặt khác còn bắt ra được một số ký sinh trùng.',zh:'鸟儿整理羽毛的时候，一方面能让羽毛更光滑，另一方面还能抓出一些寄生虫。',py:'Niǎor zhěnglǐ yǔmáo de shíhou, yì fāngmiàn néng ràng yǔmáo gèng guānghuá, lìng yì fāngmiàn hái néng zhuāchū yìxiē jìshēngchóng.',goiY:['一方面……另一方面…… = một mặt… mặt khác…','光滑 = trơn mượt','抓 = bắt','寄生虫 = ký sinh trùng'],giai:'一方面……另一方面…… nêu hai tác dụng song song của cùng một việc; 抓出 = bắt ra (bổ ngữ xu hướng 出).'},
  {vi:'Chim tắm tuy không cần đến xà phòng, nhưng mỗi loài chim lại chọn "nhà tắm" khác nhau; nói khái quát thì nguyên tắc là miễn sao tiện.',zh:'鸟儿洗澡虽然用不着肥皂，不同种类的鸟选择的“澡堂”却各不相同，概括来说就是以方便为原则。',py:'Niǎor xǐzǎo suīrán yòng bu zháo féizào, bùtóng zhǒnglèi de niǎo xuǎnzé de “zǎotáng” què gè bù xiāngtóng, gàikuò lái shuō jiù shì yǐ fāngbiàn wéi yuánzé.',goiY:['虽然……却…… = tuy… nhưng lại…','肥皂 = xà phòng','种类 = chủng loại','概括来说 = nói khái quát'],giai:'虽然……却……: 却 đứng sau chủ ngữ vế sau; 以 A 为原则 = "lấy A làm nguyên tắc" — dịch thoáng "miễn sao tiện".'},
  {vi:'Chim biển sống trên đảo thì tắm bằng nước biển; còn chim vùng hàn đới vì khó tìm được ao hồ nên đành lấy tuyết thay nước.',zh:'海鸟住在岛屿上，就用海水洗澡；寒带的鸟因为很难找到池塘，只好以雪代水。',py:'Hǎiniǎo zhù zài dǎoyǔ shang, jiù yòng hǎishuǐ xǐzǎo; hándài de niǎo yīnwèi hěn nán zhǎodào chítáng, zhǐhǎo yǐ xuě dài shuǐ.',goiY:['岛屿 = đảo','池塘 = ao, đầm','因为……只好…… = vì… đành phải…','以雪代水 = lấy tuyết thay nước'],giai:'Dấu ； tách hai trường hợp đối chiếu; 只好 = "đành phải" (không còn lựa chọn khác), 以 A 代 B = lấy A thay B.'},
  {vi:'Khi trời mưa, diều hâu chẳng những không trốn đi mà ngược lại còn dang rộng đôi cánh, khoan khoái đón nhận sự gột rửa của thiên nhiên.',zh:'下雨的时候，老鹰不但不躲起来，反而张开双翅，痛快地迎接大自然的洗礼。',py:'Xià yǔ de shíhou, lǎoyīng búdàn bù duǒ qǐlai, fǎn\'ér zhāngkāi shuāng chì, tòngkuài de yíngjiē dàzìrán de xǐlǐ.',goiY:['不但不……反而…… = chẳng những không… ngược lại còn…','张开 = dang ra','迎接 = đón nhận','洗礼 = sự gột rửa'],giai:'不但不……反而…… là mẫu "không những không… mà ngược lại…", khác 不但……而且…… (tăng tiến cùng chiều); 张开 = V + 开.'},
  {vi:'Một số loài chim sống ở những môi trường khô hạn như sa mạc, rất khó tìm được nguồn nước, vì vậy chúng từ bỏ việc tắm bằng nước mà chọn "tắm" bằng cát.',zh:'有些鸟儿生活在沙漠等干燥的环境里，很难找到水源，因此它们放弃了用水洗澡，而选择用沙子“洗澡”。',py:'Yǒuxiē niǎor shēnghuó zài shāmò děng gānzào de huánjìng li, hěn nán zhǎodào shuǐyuán, yīncǐ tāmen fàngqìle yòng shuǐ xǐzǎo, ér xuǎnzé yòng shāzi “xǐzǎo”.',goiY:['沙漠 = sa mạc','干燥 = khô hạn','因此 = vì vậy','沙子 = cát'],giai:'因此 dẫn ra kết quả từ nguyên nhân đã nêu; 放弃 A，而选择 B = "bỏ A mà chọn B" — 而 nối hai hành động trái ngược.'},
  {vi:'Chim chải lông, tắm nước, tắm cát… tóm lại có rất nhiều cách giữ gìn bộ lông; chúng ta hiếm khi thấy chim đang ngủ là vì chúng thường nấp ở những chỗ kín đáo để nghỉ ngơi.',zh:'鸟儿理毛、洗澡、沙浴，总之，保养方式多种多样；我们很少看到睡觉的鸟儿，那是因为它们常躲在秘密的地方休息。',py:'Niǎor lǐ máo, xǐzǎo, shāyù, zǒngzhī, bǎoyǎng fāngshì duōzhǒng-duōyàng; wǒmen hěn shǎo kàndào shuìjiào de niǎor, nà shì yīnwèi tāmen cháng duǒ zài mìmì de dìfang xiūxi.',goiY:['总之 = tóm lại','保养 = chăm sóc, giữ gìn','那是因为 = đó là vì','秘密 = bí mật, kín đáo'],giai:'总之 đặt sau phần liệt kê để khái quát; 那是因为…… giải thích nguyên nhân cho hiện tượng vừa nói — 秘密的地方 dịch "chỗ kín đáo".'}
];

// ══════════════════════════════════════════
// VIẾT ĐOẠN 80 CHỮ — dạng đề thi HSK 5 phần viết (theo 命题写作 của sách: 我与/看宠物)
// ══════════════════════════════════════════
var writingData = {
  words:['接触','爱惜','反复','痛快','总之'],
  prompt:'Dùng 5 từ cho sẵn, viết một đoạn khoảng 80 chữ với chủ đề "Tôi và thú cưng", kể một kỷ niệm với con vật em nuôi (hoặc muốn nuôi) và nói nó có ý nghĩa gì với em.',
  outline:[
    'Câu mở: em bắt đầu tiếp xúc / nuôi con vật từ khi nào (dùng 接触).',
    'Thân 1: em đối xử với nó thế nào (dùng 爱惜).',
    'Thân 2: một kỷ niệm cụ thể — dạy nó, chơi với nó (dùng 反复, 痛快).',
    'Kết: khái quát ý nghĩa của thú cưng với em (dùng 总之).'
  ],
  model:{
    zh:'小时候我很少接触动物，直到十岁那年，爸爸送给我一只小狗。我非常爱惜和它在一起的时间，每天放学回家都要陪它玩儿，还教它握手。开始它总是学不会，我只好反复地教。有一天它终于学会了，我高兴得跟它在院子里痛快地跑了好几圈。总之，它不只是我的宠物，更是我最好的朋友。',
    py:'Xiǎoshíhou wǒ hěn shǎo jiēchù dòngwù, zhídào shí suì nà nián, bàba sòng gěi wǒ yì zhī xiǎo gǒu. Wǒ fēicháng àixī hé tā zài yìqǐ de shíjiān, měi tiān fàngxué huí jiā dōu yào péi tā wánr, hái jiāo tā wòshǒu. Kāishǐ tā zǒngshì xué bu huì, wǒ zhǐhǎo fǎnfù de jiāo. Yǒu yì tiān tā zhōngyú xuéhuì le, wǒ gāoxìng de gēn tā zài yuànzi li tòngkuài de pǎole hǎo jǐ quān. Zǒngzhī, tā bù zhǐ shì wǒ de chǒngwù, gèng shì wǒ zuì hǎo de péngyou.',
    vn:'Hồi nhỏ tôi rất ít tiếp xúc với động vật, mãi đến năm mười tuổi, bố tặng tôi một chú chó con. Tôi rất quý những lúc được ở bên nó, ngày nào đi học về cũng chơi với nó, còn dạy nó bắt tay. Lúc đầu nó mãi không học được, tôi đành dạy đi dạy lại. Một hôm cuối cùng nó cũng học được, tôi mừng đến mức cùng nó chạy thoả thích mấy vòng trong sân. Tóm lại, nó không chỉ là thú cưng của tôi, mà còn là người bạn thân nhất của tôi.'
  },
  checklist:[
    'Đã dùng đủ cả 5 từ cho sẵn chưa?',
    'Đủ khoảng 80 chữ chưa (đếm ô vuông, không đếm dấu câu)?',
    '爱惜 có đi với đồ vật / thời gian / sức khoẻ không (yêu thương con vật thì dùng 爱护 / 疼爱)?',
    '总之 có đặt ở câu KẾT để khái quát, và chỉ dùng một lần không?',
    'Mở đoạn lùi vào 2 ô, dấu câu chiếm một ô — đúng quy cách bài thi chưa?'
  ],

  // Đề đúng như câu 99 của đề thi (gửi kèm khi nhờ AI chấm)
  de:'请结合下列词语（要全部使用），写一篇80字左右的短文，以“我与宠物”为题，谈谈你和宠物的故事或你对养宠物的看法。',

  // Cách dùng đúng của 5 từ cho sẵn — máy soát lỗi dựa vào đây
  // (re: mẫu câu SAI hay gặp; viết dạng chuỗi RegExp)
  tuDung:[
    {tu:'接触', loai:'động từ', cach:'接触 + 动物 / 大自然 / 社会 · 很少 / 经常 + 接触 · 从来没接触过',
     sai:[{re:'接触(到)?[^，。]{0,4}(电话|短信|邮件|微信)', sua:'联系', giai:'Liên lạc qua điện thoại / tin nhắn dùng 联系 (跟他联系). 接触 là gặp gỡ, tiếp xúc trực tiếp hoặc làm quen với lĩnh vực mới.'},
          {re:'很接触', sua:'经常接触 / 很少接触', giai:'接触 là động từ hành động, không đặt 很 ngay trước. Dùng 经常 / 很少 + 接触.'}]},
    {tu:'爱惜', loai:'động từ', cach:'爱惜 + 身体 / 时间 / 粮食 / 东西 · 非常爱惜……',
     sai:[{re:'爱惜(小动物|动物|小狗|小猫|宠物|孩子|它们)', sua:'爱护 / 疼爱', giai:'爱惜 dùng cho đồ vật, thời gian, sức khoẻ (爱惜粮食, 爱惜身体). Yêu thương, che chở con vật, trẻ em dùng 爱护 / 疼爱.'},
          {re:'爱惜地', sua:'爱惜 + tân ngữ', giai:'爱惜 là động từ cần tân ngữ phía sau, không thêm 地 làm trạng ngữ.', nhe:true}]},
    {tu:'反复', loai:'phó từ', cach:'反复(地) + V · 反复练习 / 强调 / 教',
     sai:[{re:'反复一(遍|次|下)', sua:'重复一遍 / 再说一遍', giai:'Làm lại MỘT lần nữa dùng 重复一遍. 反复 là "nhiều lần, hết lần này đến lần khác".'},
          {re:'反复的(教|说|练|问|看|读|学)', sua:'反复地 + V', giai:'反复 làm trạng ngữ trước động từ thì viết 地, không viết 的.', nhe:true}]},
    {tu:'痛快', loai:'tính từ', cach:'痛快地 + 玩 / 跑 / 哭 / 笑 · 玩得很痛快 · V + 个痛快',
     sai:[{re:'祝[^，。！]{0,6}痛快', sua:'祝……愉快', giai:'Lời chúc dùng 愉快 (祝你周末愉快). 痛快 là "đã, sướng", không dùng để chúc.'},
          {re:'痛快的(跑|玩|吃|喝|哭|笑|跳)', sua:'痛快地 + V', giai:'痛快 làm trạng ngữ trước động từ phải dùng 地.', nhe:true}]},
    {tu:'总之', loai:'liên từ', cach:'(liệt kê / kể)……。总之，+ kết luận',
     sai:[{re:'^\\s*总之', sua:'đưa 总之 xuống câu kết', giai:'总之 tóm tắt những gì đã nói TRƯỚC đó, không dùng để mở đầu đoạn văn.'},
          {re:'总之[^。]*。[^。]*总之', sua:'chỉ dùng 总之 một lần ở câu kết', giai:'总之 dùng để khái quát ở PHẦN KẾT; dùng nhiều lần làm đoạn văn rời rạc.', nhe:true}]}
  ],

  // Cấu trúc của bài + cấu trúc HSK 4 nên dùng lại — gợi ý khi sửa bài
  cauTruc:[
    {ten:'V + 过 + 头 / 身 (+ 来 / 去)', nhan:'动词+过', vd:'它一听见我的声音，就转过身跑了过来。', khi:'Tả động tác quay người, quay đầu của con vật / người.'},
    {ten:'张开 / 打开 / 铺开 (V + 开)', nhan:'动词+开', vd:'小鸟张开翅膀飞走了。', khi:'Tả động tác dang ra, mở ra.'},
    {ten:'……。总之，……', nhan:'总之', vd:'总之，它不只是我的宠物，更是我最好的朋友。', khi:'Câu KẾT — khái quát cả đoạn.'},
    {ten:'既……，又……', nhan:'既……又……', vd:'养宠物既能让人快乐，又能培养责任心。', khi:'Nêu hai tác dụng / hai đặc điểm (câu bài khoá, ôn HSK 4).'},
    {ten:'就像……一样', nhan:'就像', vd:'它每天都跟着我，就像我的影子一样。', khi:'So sánh cho sinh động (câu bài khoá: 就像随身带了一把梳子……一样).'},
    {ten:'之所以……，是因为……', nhan:'之所以', vd:'我之所以喜欢小狗，是因为它对主人特别好。', khi:'Giải thích lý do (bài khoá: 它们之所以放弃了用水洗澡……).'},
    {ten:'只要……就……', nhan:'只要', vd:'只要我一回家，它就跑过来迎接我。', khi:'Nêu điều kiện — thói quen của thú cưng (ôn HSK 4).'}
  ],

  // 书写 第一部分 · 完成句子 — xếp các mảnh thành câu (câu 29–31 của sách bài tập + câu bài khoá)
  sapXep:[
    {manh:['这方面的业务','我从来没','接触过'],
     dap:'我从来没接触过这方面的业务。',
     vn:'Tôi chưa bao giờ tiếp xúc với nghiệp vụ mảng này.',
     giai:'从来没 + V + 过 + tân ngữ. Câu 29 sách bài tập.'},
    {manh:['戏剧的种类','请你','概括一下','今天学的'],
     dap:'请你概括一下今天学的戏剧的种类。',
     vn:'Em hãy khái quát một chút các loại hí kịch hôm nay đã học.',
     giai:'请你 + V一下 + tân ngữ dài (今天学的戏剧的种类). Câu 30 sách bài tập.'},
    {manh:['强调过','老板','很多次了','反复'],
     dap:'老板反复强调过很多次了。',
     vn:'Sếp đã nhấn mạnh đi nhấn mạnh lại rất nhiều lần rồi.',
     giai:'Phó từ 反复 đứng trước động từ; 强调过 + 很多次了. Câu 31 sách bài tập.'},
    {manh:['充当着','在鸟儿的生活中，','十分重要的角色','羽毛'],
     dap:'在鸟儿的生活中，羽毛充当着十分重要的角色。',
     chap:['羽毛在鸟儿的生活中充当着十分重要的角色。'],
     vn:'Trong cuộc sống của loài chim, lông vũ đóng vai trò vô cùng quan trọng.',
     giai:'在……中 (trạng ngữ nơi chốn / phạm vi) + chủ ngữ + 充当着 + ……的角色. Trạng ngữ có thể đứng sau chủ ngữ.'},
    {manh:['会在雨中','张开双翅','老鹰','迎接洗礼'],
     dap:'老鹰会在雨中张开双翅迎接洗礼。',
     vn:'Diều hâu dang rộng đôi cánh trong mưa để đón nhận "lễ tẩy rửa".',
     giai:'Chủ ngữ + 会 + 在 + nơi chốn + V1 (张开双翅) + V2 (迎接洗礼): liên động, động tác trước là cách thức.'},
    {manh:['转过身','他','也不说','一句话，'],
     dap:'他转过身，一句话也不说。',
     vn:'Anh ấy quay người lại, không nói một lời nào.',
     giai:'V + 过 + 身: đổi hướng; 一 + lượng từ + N + 也不 + V: nhấn mạnh phủ định hoàn toàn.'}
  ]
};

// ══════════════════════════════════════════
// LUYỆN NÓI — theo 话题讨论 của sách: 养宠物
// ══════════════════════════════════════════
var speakingData = {
  intro:'Bốn câu hỏi mở về chủ đề của bài (养宠物 · loài chim chăm sóc bộ lông). Bấm nút loa nghe câu hỏi, rồi <b>tự ghi âm câu trả lời của mình trước</b> — đừng đọc theo câu mẫu. Cố gắng dùng được từ mới của bài: 接触 · 爱惜 · 反复 · 痛快 · 总之 · 概括 · 迎接 · 张开 / 转过身.',
  questions:[
    {q_zh:'你养过宠物吗？你对养宠物有什么看法？',
     q_vn:'Em đã từng nuôi thú cưng chưa? Em có suy nghĩ gì về việc nuôi thú cưng?',
     hint:'Trả lời có / không + quan điểm, dùng 接触 / 既……又……',
     sample:'我养过一只猫。我觉得养宠物既能让孩子多接触动物，又能培养责任心，不过也要花很多时间照顾它们。',
     sample_vn:'Em từng nuôi một con mèo. Em thấy nuôi thú cưng vừa giúp trẻ em được tiếp xúc nhiều với động vật, vừa rèn tinh thần trách nhiệm, nhưng cũng phải mất nhiều thời gian chăm sóc chúng.',
     note:'Câu hỏi 1 của sách. Nêu cả mặt tốt lẫn điều cần chú ý sẽ thuyết phục hơn.'},
    {q_zh:'如果你养过或正在养宠物，请说说你和宠物的故事。',
     q_vn:'Nếu em đã hoặc đang nuôi thú cưng, hãy kể câu chuyện giữa em và nó.',
     hint:'Kể một chuyện cụ thể, dùng V + 过 / V + 开 / 痛快',
     sample:'我家的小狗特别聪明。每次我回家，它一听到开门的声音，就转过身跑过来，张开两只前腿扑到我身上。周末我常带它去公园，让它痛痛快快地跑一跑。',
     sample_vn:'Chú chó nhà em rất thông minh. Mỗi lần em về nhà, vừa nghe tiếng mở cửa là nó quay người chạy đến, dang hai chân trước chồm lên người em. Cuối tuần em hay dẫn nó ra công viên cho nó chạy nhảy thoả thích.',
     note:'Câu hỏi 2 của sách. Dùng được 转过身 (V + 过) và 张开 (V + 开) là ăn điểm ngữ pháp của bài.'},
    {q_zh:'如果你对养宠物没有兴趣，请说明原因。',
     q_vn:'Nếu em không có hứng thú nuôi thú cưng, hãy nói rõ lý do.',
     hint:'Nêu 2–3 lý do (一是……二是……), kết bằng 总之',
     sample:'我对养宠物没什么兴趣。一是我学习太忙，没时间照顾它；二是我对猫毛过敏；三是宠物生病了也很麻烦。总之，现在我不适合养宠物。',
     sample_vn:'Em không có hứng thú nuôi thú cưng lắm. Một là em học quá bận, không có thời gian chăm sóc; hai là em bị dị ứng lông mèo; ba là thú cưng bị ốm cũng rất phiền. Tóm lại, bây giờ em không hợp nuôi thú cưng.',
     note:'Câu hỏi 3 của sách. Liệt kê 一是……二是……三是…… rồi chốt bằng 总之 — đúng cách dùng điểm ngữ pháp 1.'},
    {q_zh:'读了这篇课文，你能概括一下鸟儿是怎样保养羽毛的吗？',
     q_vn:'Đọc xong bài khoá, em có thể khái quát chim chăm sóc bộ lông như thế nào không?',
     hint:'Tóm tắt 3 cách: 整理羽毛, 洗澡, 睡眠; dùng 反复 / 概括来说',
     sample:'鸟儿保养羽毛的方法主要有三种：一是整理羽毛，它们会反复地啄着羽毛；二是洗澡，有的用水，有的用雪，有的用沙子；三是睡眠。概括来说，它们非常爱惜自己的“羽衣”。',
     sample_vn:'Chim chăm sóc bộ lông chủ yếu có ba cách: một là chải chuốt lông, chúng rỉa lông hết lần này đến lần khác; hai là tắm, có loài dùng nước, có loài dùng tuyết, có loài dùng cát; ba là ngủ. Nói khái quát, chúng rất quý "chiếc áo lông" của mình.',
     note:'Câu hỏi về bài khoá — luyện kỹ năng tóm tắt (概括), rất cần cho phần nói HSKK trung cấp.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🎧 NGHE THEO DẠNG ĐỀ HSK 5 — 听力 第一/第二部分
// Nguyên văn hội thoại lấy từ sách bài tập 《HSK标准教程5下·练习册》bài 34.
// Bốn lựa chọn do soạn lại cho khớp nguyên văn (sách chỉ in chữ cái đáp án).
// ══════════════════════════════════════════════════════════════
var listenExamData = {
  intro: 'Đề HSK 5 phần nghe chỉ phát <b>một lượt</b>. Vì vậy ở đây cũng vậy: bấm nút loa nghe, ' +
         'trả lời ngay, rồi mới mở nguyên văn ra đối chiếu. Đừng mở nguyên văn trước — mở trước là mất tác dụng.',
  source: 'Nguyên văn: 《HSK标准教程5·练习册》第34课 听力',
  items: [
    {n:1,
     lines:[{sp:'女',zh:'鸟儿最重要的特征是什么？是有翅膀会飞？还是吃昆虫？'},
            {sp:'男',zh:'区分鸟儿和其他动物的唯一特征就是羽毛。'}],
     q:'鸟儿最重要的特征是什么？',qvn:'Đặc điểm quan trọng nhất của loài chim là gì?',
     opts:['有翅膀','会飞','有羽毛','吃昆虫'],ans:2,
     why:'区分鸟儿和其他动物的唯一特征就是羽毛 — đặc điểm duy nhất là lông vũ. Cánh, biết bay, ăn côn trùng đều là bẫy lấy từ câu hỏi của người nữ.',
     words:['特征','翅膀','昆虫','区分','唯一']},

    {n:2,
     lines:[{sp:'男',zh:'妈，我今天晚上又得加班，估计11点以后才能到家。'},
            {sp:'女',zh:'哎呀，老这样下去怎么行啊……你得爱惜身体！'}],
     q:'女的是什么语气？',qvn:'Người phụ nữ nói với giọng điệu gì?',
     opts:['生气','关心','羡慕','骄傲'],ans:1,
     why:'你得爱惜身体 — mẹ lo lắng cho sức khoẻ của con. 哎呀……怎么行啊 nghe như trách, nhưng thực chất là quan tâm.',
     words:['爱惜']},

    {n:3,
     lines:[{sp:'女',zh:'年纪轻轻的，总这么把自己关在家里，不接触社会，怎么行？'},
            {sp:'男',zh:'可我就是不愿意出去工作，家里又不是没钱养我？'}],
     q:'关于男的，下列哪项正确？',qvn:'Về người đàn ông, điều nào sau đây đúng?',
     opts:['很喜欢工作','家里很穷','经常接触社会','不愿意出去工作'],ans:3,
     why:'可我就是不愿意出去工作 — nói thẳng. 家里又不是没钱 = nhà đâu phải không có tiền (không nghèo); 不接触社会 nên C sai.',
     words:['接触']},

    {n:4,
     lines:[{sp:'男',zh:'我觉得他挺好的，你怎么就不喜欢他呢？'},
            {sp:'女',zh:'一个大男人，天天随身带着把梳子，碰到镜子就梳来梳去的，我看不惯。'}],
     q:'女的为什么不喜欢那个人？',qvn:'Vì sao người phụ nữ không thích người đó?',
     opts:['他不爱干净','他个子太矮','他太爱打扮自己','他不喜欢照镜子'],ans:2,
     why:'随身带着梳子，碰到镜子就梳来梳去 → quá chú ý chải chuốt, làm đẹp. 看不惯 = nhìn không quen mắt, không ưa.',
     words:['随身','梳子']},

    {n:5,
     lines:[{sp:'女',zh:'电视电影里常常看到鲨鱼，都说它们是“海洋杀手”，是真的吗？'},
            {sp:'男',zh:'没那么可怕，地球上大约有370多种鲨鱼，大部分鲨鱼对人类无害，只有少数种类才会伤害人类。'}],
     q:'关于鲨鱼，下列哪项正确？',qvn:'Về cá mập, điều nào sau đây đúng?',
     opts:['都会伤害人类','只有370种','一般生活在河里','大部分对人类无害'],ans:3,
     why:'大部分鲨鱼对人类无害，只有少数种类才会伤害人类. "370多种" là hơn 370 loài — bẫy "只有370种".',
     words:['种类']},

    {n:6,
     lines:[{sp:'男',zh:'这个杯子真不错，是石头的还是金属的？'},
            {sp:'女',zh:'你看走眼了，这是木头的。'}],
     q:'这个杯子是什么材料做的？',qvn:'Cái cốc này làm bằng chất liệu gì?',
     opts:['木头','石头','金属','玻璃'],ans:0,
     why:'看走眼了 = nhìn nhầm; 这是木头的 — bằng gỗ. 石头, 金属 là phỏng đoán sai của người nam. (木头, 石头 là từ trong phần 扩展 của bài.)',
     words:[]},

    {n:7,
     lines:[{sp:'女',zh:'爸爸，鸟儿是不是不用睡觉？'},
            {sp:'男',zh:'睡啊！大多数鸟1天大约睡8小时，有些鸟差不多要睡20个小时，当然，也有一些鸟几乎一点儿觉也不用睡。'},
            {sp:'女',zh:'那为什么我们很少看到睡眠中的鸟呢？'},
            {sp:'男',zh:'因为它们通常会寻找一处秘密的地方休息。'}],
     q:'关于鸟儿的睡眠，下列哪项正确？',qvn:'Về giấc ngủ của chim, điều nào sau đây đúng?',
     opts:['鸟儿都不用睡觉','所有鸟每天睡8小时','鸟儿喜欢在树上睡觉','它们通常在秘密的地方休息'],ans:3,
     why:'它们通常会寻找一处秘密的地方休息 — khớp với đoạn cuối bài khoá. Người bố nói "大多数" chứ không phải "所有" — bẫy B.',
     words:['秘密']},

    {n:8,
     lines:[{sp:'男',zh:'今天学的鸟儿沙浴，就是鸟儿用沙子洗澡，很有意思。'},
            {sp:'女',zh:'真是很难想象，用沙子怎么能洗澡呢？'},
            {sp:'男',zh:'因为它们生活在沙漠等干燥的环境里。'},
            {sp:'女',zh:'我倒是听说过，在一些沙漠地区，有人用沙疗的办法来健身治病。'}],
     q:'沙疗有什么作用？',qvn:'Liệu pháp cát có tác dụng gì?',
     opts:['健身治病','洗澡','美容','让皮肤干燥'],ans:0,
     why:'有人用沙疗的办法来健身治病 — rèn luyện sức khoẻ và chữa bệnh. 用沙子洗澡 là chuyện của chim — bẫy B.',
     words:['沙子','干燥']}
  ]
};

// ══════════════════════════════════════════════════════════════
// 💬 TÌNH HUỐNG — HOÀN THÀNH HỘI THOẠI (Cấp 2 · 半交际性练习)
// ══════════════════════════════════════════════════════════════
var situationData = {
  intro: 'Mỗi tình huống cho sẵn lời của người kia. Em viết lời đáp của mình, <b>bắt buộc dùng đúng từ/cấu trúc ghi ở ô yêu cầu</b>. ' +
         'Viết xong mới mở câu mẫu — câu mẫu chỉ là MỘT cách nói, em nói khác mà đúng yêu cầu vẫn được.',
  items: [
    {scene:'Bạn cùng lớp hỏi kỳ nghỉ hè em định đi đâu. Em chưa quyết, nhưng đã có vài nơi muốn đến.',
     a:{sp:'Bạn',zh:'暑假你打算去哪儿玩？',vn:'Nghỉ hè cậu định đi đâu chơi?'},
     need:['Dùng 总之','Liệt kê vài nơi rồi khái quát'],
     sample:'可能去大理、丽江，也可能去西双版纳，总之，想去云南转转。',
     samplePy:'Kěnéng qù Dàlǐ, Lìjiāng, yě kěnéng qù Xīshuāngbǎnnà, zǒngzhī, xiǎng qù Yúnnán zhuànzhuan.',
     sampleVn:'Có thể đi Đại Lý, Lệ Giang, cũng có thể đi Tây Song Bản Nạp, nói chung là muốn đi dạo một vòng Vân Nam.',
     tip:'Liệt kê + 总之 + kết luận chung — giống câu ví dụ (1) của sách.'},

    {scene:'Bạn hỏi bí quyết học tiếng Trung của em.',
     a:{sp:'Bạn',zh:'你怎么能把汉语学得这么好？',vn:'Sao cậu học tiếng Trung giỏi thế?'},
     need:['Dùng 总之','Nêu 2–3 cách học'],
     sample:'我每天听中文歌、看中国电影，还常常和中国朋友聊天，总之，就是多听多说。',
     samplePy:'Wǒ měi tiān tīng Zhōngwén gē, kàn Zhōngguó diànyǐng, hái chángcháng hé Zhōngguó péngyou liáotiān, zǒngzhī, jiù shì duō tīng duō shuō.',
     sampleVn:'Ngày nào tớ cũng nghe nhạc Trung, xem phim Trung Quốc, còn hay tán gẫu với bạn Trung Quốc, tóm lại là nghe nhiều nói nhiều.',
     tip:'Bài 练一练 (2) của điểm ngữ pháp 总之.'},

    {scene:'Bạn gọi điện, nói đã đến quảng trường nhưng không thấy em đâu. Em đang đứng ngay phía sau bạn.',
     a:{sp:'Bạn',zh:'你在哪儿呢？我怎么看不见你？',vn:'Cậu ở đâu thế? Sao tớ không thấy cậu?'},
     need:['Dùng V + 过 (回过头 / 转过身)'],
     sample:'我就在你后面，你回过头来就能看见我了。',
     samplePy:'Wǒ jiù zài nǐ hòumiàn, nǐ huíguo tóu lai jiù néng kànjiàn wǒ le.',
     sampleVn:'Tớ ở ngay sau lưng cậu, cậu quay đầu lại là thấy tớ.',
     tip:'V + 过: qua động tác, người đổi hướng (giống bài 练一练 (1): 你回过头就可以看见我了).'},

    {scene:'Em gái thấy chú chim non đứng mãi trên cành, sốt ruột hỏi em.',
     a:{sp:'Em gái',zh:'小鸟怎么还不飞呢？',vn:'Sao chú chim non vẫn chưa bay nhỉ?'},
     need:['Dùng V + 开 (张开)','Dùng 翅膀'],
     sample:'别着急，等它张开翅膀，就能飞起来了。',
     samplePy:'Bié zháojí, děng tā zhāngkāi chìbǎng, jiù néng fēi qǐlái le.',
     sampleVn:'Đừng sốt ruột, đợi nó dang cánh ra là bay lên được thôi.',
     tip:'V + 开: biểu thị sự dang ra, mở ra (张开翅膀 / 张开双臂 / 张开双翅).'},

    {scene:'Bạn thân kể tuần này ngày nào cũng thức khuya học bài.',
     a:{sp:'Bạn',zh:'这个星期我每天都学到半夜两点。',vn:'Tuần này ngày nào tớ cũng học đến 2 giờ sáng.'},
     need:['Dùng 爱惜','Khuyên bạn'],
     sample:'学习重要，身体更重要，你得爱惜身体啊！',
     samplePy:'Xuéxí zhòngyào, shēntǐ gèng zhòngyào, nǐ děi àixī shēntǐ a!',
     sampleVn:'Học quan trọng, sức khoẻ còn quan trọng hơn, cậu phải giữ gìn sức khoẻ chứ!',
     tip:'爱惜身体 là cụm trong bảng 词语搭配 — giống lời người mẹ trong bài nghe số 2.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🎯 NÓI SAO CHO HAY — 得体 / 语体
// ══════════════════════════════════════════════════════════════
var registerData = {
  intro: 'Ở đây <b>cả hai câu đều đúng ngữ pháp</b> — không có câu sai. Việc của em là chọn câu <b>PHÙ HỢP HƠN</b> với hoàn cảnh. ' +
         'Đây chính là chỗ HSK 5 khác hẳn HSK 3–4: không còn là đúng/sai, mà là hay/dở.',
  items: [
    {scene:'Biển báo dựng trong công viên.',
     a:'请爱护花草，不要随手扔垃圾。',b:'别踩花草啊，垃圾也别乱扔！',better:'a',
     why:'Biển báo dùng văn viết, ngắn gọn, lịch sự: 请爱护花草, 随手. Câu b là khẩu ngữ, như bác bảo vệ nhắc miệng.'},

    {scene:'Em nhắc bạn thân mang ô khi đi dã ngoại.',
     a:'带把伞吧，天气预报说下午有雨。',b:'请您随身携带雨具，以防降雨。',better:'a',
     why:'Với bạn thân, câu a tự nhiên. Câu b giống thông báo của đài khí tượng (请您, 随身携带, 雨具, 以防降雨).'},

    {scene:'Loa thông báo trên tàu điện ngầm khi sắp đến ga.',
     a:'下车时请带好您的随身物品。',b:'下车了，东西别忘了拿啊！',better:'a',
     why:'Thông báo công cộng dùng 请 + 您 + 随身物品 — trang trọng, chuẩn mực. Câu b như mẹ dặn con.'},

    {scene:'Em thuyết trình khoa học về loài chim trước lớp.',
     a:'羽毛是区分鸟类和其他动物的唯一特征。',b:'鸟就是有毛的，别的动物都没有。',better:'a',
     why:'Thuyết trình khoa học cần từ chính xác: 区分, 鸟类, 唯一特征. Câu b là khẩu ngữ, lại không chính xác (thú cũng có lông).'},

    {scene:'Em rủ bạn thân tối nay đi ăn lẩu mừng thi xong.',
     a:'考完了！今晚咱们去吃火锅，吃个痛快！',b:'考试已经结束，建议今晚共进晚餐以示庆祝。',better:'a',
     why:'Với bạn thân, câu a vui vẻ, tự nhiên (咱们, 吃个痛快). Câu b như công văn (建议, 共进晚餐, 以示庆祝).'},

    {scene:'Câu kết trong bài văn nghị luận về việc nuôi thú cưng.',
     a:'总之，养宠物既能给人带来快乐，也需要主人付出很多责任。',b:'反正养宠物挺好玩儿的，就是有点儿麻烦。',better:'a',
     why:'Bài văn cần kết luận văn viết: 总之 + 既……也…… cân đối. Câu b dùng 反正, 挺好玩儿 — khẩu ngữ, thiếu trang trọng.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🗣️ KỂ LẠI BÀI ĐỌC 复述 — theo đúng bài tập 4 của sách (tr. 146)
// ══════════════════════════════════════════════════════════════
var retellData = {
  intro: 'Đây là bài tập 4 trong giáo trình: <b>根据下面的提示词复述课文内容</b> — kể lại bài đọc bằng lời của chính em, ' +
         'KHÔNG đọc thuộc lòng. Nhìn dàn ý và các từ khoá bên dưới, bấm ghi âm rồi kể một mạch khoảng 1–2 phút.',
  outline: [
    {step:'Đặc điểm của chim (鸟儿的特征)', cue:'大家都接触过鸟儿吧？……区分鸟儿和其他动物的唯一特征就是……', words:['接触','特征','翅膀','昆虫','天空','区分','唯一']},
    {step:'Tác dụng của lông vũ (羽毛的作用)', cue:'羽毛的作用很多，既……又……；还能……；更关键的是……；甚至……。总之……', words:['斑','充当','总之','角色','爱惜','保养']},
    {step:'Cách chăm sóc ①: chải chuốt lông (整理羽毛)', cue:'整理羽毛是保养的基本功，它们……背过头去，反复……，就像……一样', words:['反复','啄','随身','梳子','光滑','抓','寄生']},
    {step:'Cách chăm sóc ②: tắm (洗澡)', cue:'洗澡也是……。不过……用不着……，不同种类的鸟儿……，概括来说……。比如……', words:['肥皂','种类','概括','岛屿','知更鸟','坑','池塘']},
    {step:'Cách chăm sóc ③: tắm mưa, tắm cát (老鹰和沙浴)', cue:'而老鹰……张开双翅……；所谓沙浴，就是……，它们大多生活在……', words:['老鹰','痛快','迎接','洗礼','沙子','干燥']},
    {step:'Cách chăm sóc ④: ngủ (睡眠)', cue:'另外，睡眠是……最佳的保养方式……它们通常会寻找一处……的地方休息', words:['秘密']}
  ],
  checklist: [
    'Kể đủ ba phần của sách chưa: đặc điểm của chim → tác dụng của lông vũ → cách chăm sóc bộ lông?',
    'Có dùng được ít nhất 15 từ mới của bài không?',
    'Có dùng các từ khoá sách cho: 接触, 特征, 翅膀, 昆虫, 唯一, 总之, 反复, 随身, 抓, 种类, 概括, 干燥, 秘密 không?',
    'Có dùng đúng 既……又……, 背过头去 (V + 过) và 张开 (V + 开) không?',
    'Có kể bằng LỜI MÌNH, hay đang đọc thuộc nguyên văn?'
  ]
};

// ══════════════════════════════════════════
// SGK · 练习 (Bài tập trong sách, trang 145–146) — trò "Bài tập SGK" ở bước Luyện tập
// (Bài 3 画线连接 và bài 4 复述 không thuộc 3 dạng nên không đưa vào đây —
//  bài 3 đã có trong phần Ghép từ, bài 4 ở phần Kể lại.)
// ══════════════════════════════════════════
var sgkData = [
  {kieu:'kho', de:'选择合适的词语填空', vn:'Chọn từ thích hợp điền vào chỗ trống', tu:['昆虫','秘密','概括','光滑','痛快','唯一'],
   cau:[
     {s:'那件事将是我一生中＿＿的遗憾。', dap:['唯一']},
     {s:'李将军这次去北京的行动是＿＿的。', dap:['秘密']},
     {s:'你好容易来一趟，我们今晚一定要喝个＿＿！', dap:['痛快']},
     {s:'有些＿＿和鸟类一样有翅膀。', dap:['昆虫']},
     {s:'经常使用我们的肥皂，您的皮肤将变得更加＿＿。', dap:['光滑']},
     {s:'这次会议的精神可以＿＿为三点。', dap:['概括']}
   ]},
  {kieu:'ab', de:'选择正确答案', vn:'Chọn đáp án đúng',
   cau:[
     {s:'我们要＿＿粮食，不要浪费。', opts:['爱惜','爱护'], ans:0, giai:'Không lãng phí → quý trọng → 爱惜粮食 (bảng 词语搭配: 爱惜 + 粮食). 爱护 nhấn mạnh bảo vệ, che chở (爱护动物, 爱护公物).'},
     {s:'她总是＿＿带着伞，说“不怕一万，就怕万一”。', opts:['随手','随身'], ans:1, giai:'Mang theo người → 随身带着. 随手 là tiện tay làm luôn một việc nhỏ (随手关门).'},
     {s:'警察一把把小偷给＿＿住了。', opts:['拿','抓'], ans:1, giai:'Bắt, tóm người → 抓住. 拿 là cầm, lấy đồ vật; không nói 拿住小偷 với nghĩa bắt trộm.'},
     {s:'这个地区的动植物＿＿多，数量大。', opts:['种类','类型'], ans:0, giai:'Nhiều loài động thực vật → 种类多. 类型 là kiểu, loại hình có đặc điểm chung (性格类型), không đi với 动植物 để nói số loài.'}
   ]}
];
