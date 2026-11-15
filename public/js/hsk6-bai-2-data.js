// ══════════════════════════════════════════
// DATA — HSK6 Bài 2: 父母之爱 (Tình yêu của cha mẹ)
// 第一单元 生活点滴 · Nguồn: HSK标准教程6上 (tr. 24–32) + đáp án sách
// 课文: 父母之爱 (701字) — 改编自《北京青年报》文章《假装没那么担心你》，作者：猪小浅
// ══════════════════════════════════════════

var vocabData = [
  {n:1,zh:'和蔼',py:'hé\'ǎi',pos:'Tính từ',vn:'hòa nhã, ôn hòa',hv:'hòa ái',em:'😊',lesson:1,
   explain:['Thái độ, nét mặt, lời nói dịu dàng, dễ gần — thường dùng cho người lớn tuổi, người bề trên (cha mẹ, thầy cô, ông bà) đối với người dưới.'],
   usage:'Hay gặp: 态度和蔼, 和蔼可亲, 和蔼地笑. Không dùng tả đồ vật hay thời tiết.',
   collo:['态度和蔼','和蔼可亲','和蔼地笑','和蔼的老人'],
   ex_zh:'他们对我态度和蔼，说话和气。',ex_py:'Tāmen duì wǒ tàidu hé\'ǎi, shuōhuà héqi.',ex_vn:'Bố mẹ đối với tôi luôn hiền hòa, ăn nói ôn tồn.',
   exList:[
     {zh:'他们对我态度和蔼，说话和气。',py:'Tāmen duì wǒ tàidu hé\'ǎi, shuōhuà héqi.',vn:'Bố mẹ đối với tôi luôn hiền hòa, ăn nói ôn tồn.'},
     {zh:'我们的校长和蔼可亲，同学们都喜欢跟他聊天。',py:'Wǒmen de xiàozhǎng hé\'ǎi kěqīn, tóngxuémen dōu xǐhuan gēn tā liáotiān.',vn:'Thầy hiệu trưởng hiền hòa dễ gần, học sinh ai cũng thích trò chuyện với thầy.'},
     {zh:'老奶奶和蔼地笑了笑，让我别着急。',py:'Lǎo nǎinai hé\'ǎi de xiào le xiào, ràng wǒ bié zháojí.',vn:'Bà cụ hiền hòa mỉm cười, bảo tôi đừng vội.'}
   ],
   colloFull:[
     {zh:'态度和蔼',py:'tàidu hé\'ǎi',vn:'thái độ hòa nhã'},
     {zh:'和蔼可亲',py:'hé\'ǎi kěqīn',vn:'hiền hòa dễ gần'},
     {zh:'和蔼地笑',py:'hé\'ǎi de xiào',vn:'cười hiền hòa'},
     {zh:'和蔼的老人',py:'hé\'ǎi de lǎorén',vn:'cụ già hiền hòa'},
     {zh:'面容和蔼',py:'miànróng hé\'ǎi',vn:'nét mặt hiền hòa'}
   ],
   patterns:[
     {s:'对 + người + 态度和蔼',m:'Đối xử hòa nhã với ai'},
     {s:'和蔼可亲',m:'Hiền hòa dễ gần (cụm hay đi kèm)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy cô giáo rất nghiêm khắc nhưng thái độ với học sinh lúc nào cũng hòa nhã.',answer:'虽然老师很严厉，但是对学生的态度一直很和蔼。',answerPy:'Suīrán lǎoshī hěn yánlì, dànshì duì xuésheng de tàidu yìzhí hěn hé\'ǎi.',
      note:'严厉 (bài 1) và 和蔼 không mâu thuẫn: nghiêm về yêu cầu, hiền về thái độ. 虽然……但是…… nối hai ý tương phản.',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Ông tôi càng già càng hiền hòa.',answer:'我爷爷越老越和蔼了。',answerPy:'Wǒ yéye yuè lǎo yuè hé\'ǎi le.',
      note:'越 A 越 B: B thay đổi theo A; cuối câu có 了 báo sự thay đổi.',pair:'越……越……'}
   ]},

  {n:2,zh:'和气',py:'héqi',pos:'Tính từ',vn:'ôn tồn, nhã nhặn, hòa thuận',hv:'hòa khí',em:'🕊️',lesson:1,
   explain:['Tính từ: lời nói, thái độ ôn tồn, nhã nhặn (说话和气, 对人和气).','Cũng chỉ quan hệ hòa thuận (一家人和和气气); làm danh từ: 伤了和气 = làm mất hòa khí.'],
   usage:'说话和气, 对人和气, 和和气气, 伤和气. 和气 thiên về lời nói, cách cư xử; 和蔼 thiên về vẻ mặt, thái độ hiền từ của người lớn với người dưới.',
   collo:['说话和气','对人和气','和和气气','伤了和气'],
   ex_zh:'那家店的老板对人很和气，所以生意特别好。',ex_py:'Nà jiā diàn de lǎobǎn duì rén hěn héqi, suǒyǐ shēngyi tèbié hǎo.',ex_vn:'Ông chủ cửa hàng đó đối xử với mọi người rất nhã nhặn nên buôn bán rất đắt.',
   exList:[
     {zh:'那家店的老板对人很和气，所以生意特别好。',py:'Nà jiā diàn de lǎobǎn duì rén hěn héqi, suǒyǐ shēngyi tèbié hǎo.',vn:'Ông chủ cửa hàng đó đối xử với mọi người rất nhã nhặn nên buôn bán rất đắt.'},
     {zh:'他们对我态度和蔼，说话和气。',py:'Tāmen duì wǒ tàidu hé\'ǎi, shuōhuà héqi.',vn:'Bố mẹ đối với tôi luôn hiền hòa, ăn nói ôn tồn.'},
     {zh:'一家人和和气气地过日子，比什么都重要。',py:'Yì jiā rén héhéqìqì de guò rìzi, bǐ shénme dōu zhòngyào.',vn:'Cả nhà sống với nhau hòa thuận êm ấm là quan trọng hơn tất cả.'}
   ],
   colloFull:[
     {zh:'说话和气',py:'shuōhuà héqi',vn:'ăn nói ôn tồn'},
     {zh:'对人和气',py:'duì rén héqi',vn:'nhã nhặn với mọi người'},
     {zh:'和和气气',py:'héhéqìqì',vn:'hòa thuận êm ấm'},
     {zh:'伤了和气',py:'shāngle héqi',vn:'làm mất hòa khí'},
     {zh:'和气生财',py:'héqi shēngcái',vn:'hòa khí sinh tài'}
   ],
   patterns:[
     {s:'对 + người + 很和气',m:'Cư xử ôn tồn, nhã nhặn với ai'},
     {s:'为了…… + 伤了和气',m:'Vì … mà làm mất hòa khí'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đừng vì chút chuyện nhỏ mà làm mất hòa khí giữa bạn bè.',answer:'别为了一点儿小事伤了朋友之间的和气。',answerPy:'Bié wèile yìdiǎnr xiǎoshì shāngle péngyou zhījiān de héqi.',
      note:'为了 + nguyên nhân/mục đích đứng trước động từ; 和气 ở đây là danh từ (hòa khí).',pair:'为了'},
     {promptLang:'vi',prompt:'Chỉ cần cậu ăn nói ôn tồn thì người khác sẽ sẵn lòng giúp cậu.',answer:'只要你说话和气，别人就愿意帮助你。',answerPy:'Zhǐyào nǐ shuōhuà héqi, biérén jiù yuànyì bāngzhù nǐ.',
      note:'只要 + điều kiện, 就 + kết quả; 就 đứng sau chủ ngữ 别人.',pair:'只要……就……'}
   ]},

  {n:3,zh:'目光',py:'mùguāng',pos:'Danh từ',vn:'ánh mắt; tầm nhìn',hv:'mục quang',em:'👀',lesson:1,
   explain:['Ánh mắt, cái nhìn (目光温柔, 目光中充满……).','Nghĩa bóng: tầm nhìn, tầm hiểu biết (目光长远 = nhìn xa trông rộng).'],
   usage:'目光中充满着……, 吸引……的目光, 目光长远/短浅. Văn viết hơn 眼神.',
   collo:['目光中充满','不舍的目光','目光长远','吸引目光'],
   ex_zh:'他们的目光中都充满着慈祥。',ex_py:'Tāmen de mùguāng zhōng dōu chōngmǎnzhe cíxiáng.',ex_vn:'Trong ánh mắt họ luôn tràn đầy vẻ hiền từ.',
   exList:[
     {zh:'他们的目光中都充满着慈祥。',py:'Tāmen de mùguāng zhōng dōu chōngmǎnzhe cíxiáng.',vn:'Trong ánh mắt họ luôn tràn đầy vẻ hiền từ.'},
     {zh:'看到灯光下父母不舍的目光，我顿时什么都明白了。',py:'Kàndào dēngguāng xià fùmǔ bù shě de mùguāng, wǒ dùnshí shénme dōu míngbai le.',vn:'Nhìn thấy ánh mắt lưu luyến của bố mẹ dưới ánh đèn, tôi bỗng chốc hiểu ra tất cả.'},
     {zh:'做生意要目光长远，不能只看眼前的利益。',py:'Zuò shēngyi yào mùguāng chángyuǎn, bù néng zhǐ kàn yǎnqián de lìyì.',vn:'Làm ăn phải nhìn xa trông rộng, không thể chỉ thấy cái lợi trước mắt.'}
   ],
   colloFull:[
     {zh:'目光中充满',py:'mùguāng zhōng chōngmǎn',vn:'trong ánh mắt đầy …'},
     {zh:'不舍的目光',py:'bù shě de mùguāng',vn:'ánh mắt lưu luyến'},
     {zh:'目光长远',py:'mùguāng chángyuǎn',vn:'nhìn xa trông rộng'},
     {zh:'吸引目光',py:'xīyǐn mùguāng',vn:'thu hút ánh nhìn'},
     {zh:'温柔的目光',py:'wēnróu de mùguāng',vn:'ánh mắt dịu dàng'}
   ],
   patterns:[
     {s:'目光中充满（着）+ cảm xúc',m:'Ánh mắt tràn đầy …'},
     {s:'吸引 + người + 的目光',m:'Thu hút ánh nhìn của ai'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chiếc váy đỏ của cô ấy vừa xuất hiện đã thu hút ánh mắt của mọi người.',answer:'她的红裙子一出现就吸引了大家的目光。',answerPy:'Tā de hóng qúnzi yì chūxiàn jiù xīyǐnle dàjiā de mùguāng.',
      note:'一 + V1 就 + V2: vừa … đã …; 吸引 + 的目光.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Ánh mắt mẹ nhìn tôi lúc nào cũng đầy yêu thương.',answer:'妈妈看我的目光里总是充满了爱。',answerPy:'Māma kàn wǒ de mùguāng li zǒngshì chōngmǎnle ài.',
      note:'Định ngữ là cả một cụm chủ–vị (妈妈看我) + 的 + 目光; 总是 đứng trước động từ.',pair:'định ngữ + 的'}
   ]},

  {n:4,zh:'慈祥',py:'cíxiáng',pos:'Tính từ',vn:'hiền từ, hiền hậu',hv:'từ tường',em:'👵',lesson:1,
   explain:['Hiền từ, phúc hậu — thường tả nét mặt, ánh mắt, nụ cười của người lớn tuổi (ông bà, cha mẹ).','Không dùng cho người trẻ hay bạn bè cùng trang lứa.'],
   usage:'慈祥的笑容, 慈祥的目光, 面容慈祥, 慈祥地看着. 和蔼 dùng cả với thầy cô, cấp trên; 慈祥 gắn với tuổi già và tình thương.',
   collo:['慈祥的笑容','慈祥的目光','慈祥的老人','面容慈祥'],
   ex_zh:'爷爷慈祥地看着我们，脸上满是笑容。',ex_py:'Yéye cíxiáng de kànzhe wǒmen, liǎn shang mǎn shì xiàoróng.',ex_vn:'Ông hiền từ nhìn chúng tôi, mặt rạng rỡ nụ cười.',
   exList:[
     {zh:'爷爷慈祥地看着我们，脸上满是笑容。',py:'Yéye cíxiáng de kànzhe wǒmen, liǎn shang mǎn shì xiàoróng.',vn:'Ông hiền từ nhìn chúng tôi, mặt rạng rỡ nụ cười.'},
     {zh:'他们对我态度和蔼，说话和气，目光中都充满着慈祥。',py:'Tāmen duì wǒ tàidu hé\'ǎi, shuōhuà héqi, mùguāng zhōng dōu chōngmǎnzhe cíxiáng.',vn:'Bố mẹ đối với tôi luôn hiền hòa, ăn nói ôn tồn, ánh mắt tràn đầy vẻ hiền từ.'},
     {zh:'每次想起外婆慈祥的笑容，我心里就暖暖的。',py:'Měi cì xiǎngqǐ wàipó cíxiáng de xiàoróng, wǒ xīn li jiù nuǎnnuǎn de.',vn:'Mỗi lần nhớ đến nụ cười hiền hậu của bà ngoại, lòng tôi lại thấy ấm áp.'}
   ],
   colloFull:[
     {zh:'慈祥的笑容',py:'cíxiáng de xiàoróng',vn:'nụ cười hiền hậu'},
     {zh:'慈祥的目光',py:'cíxiáng de mùguāng',vn:'ánh mắt hiền từ'},
     {zh:'慈祥的老人',py:'cíxiáng de lǎorén',vn:'cụ già hiền từ'},
     {zh:'面容慈祥',py:'miànróng cíxiáng',vn:'gương mặt hiền hậu'},
     {zh:'慈祥地看着',py:'cíxiáng de kànzhe',vn:'hiền từ nhìn'}
   ],
   patterns:[
     {s:'慈祥地 + V',m:'(Người già) hiền từ làm gì'},
     {s:'……充满（着）慈祥',m:'Tràn đầy vẻ hiền từ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Mỗi khi nhớ tới nụ cười hiền từ của bà, tôi lại muốn về nhà.',answer:'每当想起奶奶慈祥的笑容，我就想回家。',answerPy:'Měi dāng xiǎngqǐ nǎinai cíxiáng de xiàoróng, wǒ jiù xiǎng huí jiā.',
      note:'每当……（的时候），就……: mỗi khi … thì …',pair:'每当……就……'},
     {promptLang:'vi',prompt:'Cụ già ấy không những hiền hậu mà còn rất hài hước.',answer:'那位老人不但很慈祥，而且很幽默。',answerPy:'Nà wèi lǎorén búdàn hěn cíxiáng, érqiě hěn yōumò.',
      note:'不但……而且…… nối hai đặc điểm, ý sau tăng tiến.',pair:'不但……而且……'}
   ]},

  {n:5,zh:'跨',py:'kuà',pos:'Động từ',vn:'bước (qua), vượt',hv:'khóa',em:'🚶',lesson:1,
   explain:['Bước dài chân qua: 跨过小河, 跨进大门.','Nghĩa bóng: bước sang một giai đoạn mới (跨进大学校门); vượt qua giới hạn (跨国, 跨年).'],
   usage:'跨进 / 跨入 / 跨过 + nơi chốn; 跨出第一步. Trang trọng, giàu hình ảnh hơn 走进.',
   collo:['跨进大学校门','跨过小河','跨出第一步','跨国公司'],
   ex_zh:'在跨进大学校门之前，我从没有离开过家。',ex_py:'Zài kuàjìn dàxué xiàomén zhīqián, wǒ cóng méiyǒu líkāiguo jiā.',ex_vn:'Trước khi bước vào cổng trường đại học, tôi chưa từng xa nhà.',
   exList:[
     {zh:'在跨进大学校门之前，我从没有离开过家。',py:'Zài kuàjìn dàxué xiàomén zhīqián, wǒ cóng méiyǒu líkāiguo jiā.',vn:'Trước khi bước vào cổng trường đại học, tôi chưa từng xa nhà.'},
     {zh:'他一步就跨过了那条小河。',py:'Tā yí bù jiù kuàguòle nà tiáo xiǎohé.',vn:'Cậu ấy bước một bước đã qua con suối nhỏ.'},
     {zh:'勇敢地跨出第一步，你会发现事情没有想象的那么难。',py:'Yǒnggǎn de kuàchū dì-yī bù, nǐ huì fāxiàn shìqing méiyǒu xiǎngxiàng de nàme nán.',vn:'Hãy dũng cảm bước bước đầu tiên, bạn sẽ thấy mọi việc không khó như tưởng tượng.'}
   ],
   colloFull:[
     {zh:'跨进大学校门',py:'kuàjìn dàxué xiàomén',vn:'bước vào cổng trường đại học'},
     {zh:'跨过小河',py:'kuàguò xiǎohé',vn:'bước qua con suối'},
     {zh:'跨出第一步',py:'kuàchū dì-yī bù',vn:'bước bước đầu tiên'},
     {zh:'跨国公司',py:'kuàguó gōngsī',vn:'công ty đa quốc gia'},
     {zh:'跨年',py:'kuànián',vn:'đón giao thừa (bước sang năm mới)'}
   ],
   patterns:[
     {s:'跨 + 进 / 过 / 出 + nơi chốn',m:'Bước vào / qua / ra …'},
     {s:'在跨进……之前',m:'Trước khi bước vào (giai đoạn) …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Trước khi bước vào cổng trường đại học, tôi chưa từng tự giặt quần áo.',answer:'在跨进大学校门之前，我从来没有自己洗过衣服。',answerPy:'Zài kuàjìn dàxué xiàomén zhīqián, wǒ cónglái méiyǒu zìjǐ xǐguo yīfu.',
      note:'在……之前 làm trạng ngữ thời gian; 从来没有 + V + 过 = chưa từng.',pair:'从来没有……过'},
     {promptLang:'vi',prompt:'Chỉ cần dám bước bước đầu tiên, bạn sẽ thấy mọi chuyện không khó như tưởng tượng.',answer:'只要敢跨出第一步，就会发现事情没有想象的那么难。',answerPy:'Zhǐyào gǎn kuàchū dì-yī bù, jiù huì fāxiàn shìqing méiyǒu xiǎngxiàng de nàme nán.',
      note:'A 没有 B 那么 + Adj: A không … bằng B.',pair:'没有……那么……'}
   ]},

  {n:6,zh:'自主',py:'zìzhǔ',pos:'Động từ',vn:'tự chủ, tự quyết',hv:'tự chủ',em:'🧭',lesson:1,
   explain:['Tự mình làm chủ, tự quyết định, không dựa vào hay chịu sự chi phối của người khác.','Hay đi thành cụm 独立自主 (độc lập tự chủ).'],
   usage:'独立自主, 自主学习, 自主选择, 自主决定. Thường làm trạng ngữ trước động từ hoặc định ngữ (自主能力).',
   collo:['独立自主','自主学习','自主选择','自主能力'],
   ex_zh:'独立自主的能力就更甭提了。',ex_py:'Dúlì zìzhǔ de nénglì jiù gèng béng tí le.',ex_vn:'Khả năng tự lập tự chủ thì càng khỏi phải nói.',
   exList:[
     {zh:'独立自主的能力就更甭提了。',py:'Dúlì zìzhǔ de nénglì jiù gèng béng tí le.',vn:'Khả năng tự lập tự chủ thì càng khỏi phải nói.'},
     {zh:'现在很多大学生可以自主选择自己喜欢的课程。',py:'Xiànzài hěn duō dàxuéshēng kěyǐ zìzhǔ xuǎnzé zìjǐ xǐhuan de kèchéng.',vn:'Bây giờ nhiều sinh viên được tự chọn những môn học mình thích.'},
     {zh:'老师希望我们学会自主学习，而不是什么都等着老师督促。',py:'Lǎoshī xīwàng wǒmen xuéhuì zìzhǔ xuéxí, ér bú shì shénme dōu děngzhe lǎoshī dūcù.',vn:'Thầy mong chúng tôi biết tự học, chứ không phải việc gì cũng chờ thầy thúc giục.'}
   ],
   colloFull:[
     {zh:'独立自主',py:'dúlì zìzhǔ',vn:'độc lập tự chủ'},
     {zh:'自主学习',py:'zìzhǔ xuéxí',vn:'tự học'},
     {zh:'自主选择',py:'zìzhǔ xuǎnzé',vn:'tự lựa chọn'},
     {zh:'自主能力',py:'zìzhǔ nénglì',vn:'khả năng tự chủ'},
     {zh:'自主决定',py:'zìzhǔ juédìng',vn:'tự quyết định'}
   ],
   patterns:[
     {s:'自主 + V (学习 / 选择 / 决定)',m:'Tự mình làm gì'},
     {s:'独立自主的能力',m:'Khả năng độc lập tự chủ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bố mẹ nên để con cái tự quyết định chuyện của mình.',answer:'父母应该让孩子自主决定自己的事情。',answerPy:'Fùmǔ yīnggāi ràng háizi zìzhǔ juédìng zìjǐ de shìqing.',
      note:'Câu kiêm ngữ: 让 + người + V; 自主 làm trạng ngữ trước 决定.',pair:'让 (câu kiêm ngữ)'},
     {promptLang:'vi',prompt:'Tự học không phải là không cần thầy cô, mà là phải biết tự lập kế hoạch cho mình.',answer:'自主学习不是不需要老师，而是要学会自己制订计划。',answerPy:'Zìzhǔ xuéxí bú shì bù xūyào lǎoshī, ér shì yào xuéhuì zìjǐ zhìdìng jìhuà.',
      note:'不是 A，而是 B: phủ định A, khẳng định B.',pair:'不是……而是……'}
   ]},

  {n:7,zh:'甭',py:'béng',pos:'Phó từ',vn:'khỏi, không cần',hv:'bằng',em:'🙅',lesson:1,
   explain:['Phó từ khẩu ngữ phương Bắc, do 不用 đọc dính lại mà thành (不 + 用 → 甭): không cần, khỏi phải, đừng.','更甭提…… = lại càng khỏi phải nói.'],
   usage:'甭 + V: 甭去了, 甭担心, 甭客气. Chỉ dùng trong khẩu ngữ, không dùng trong văn bản trang trọng.',
   collo:['甭回来了','甭担心','甭客气','更甭提'],
   ex_zh:'要没什么事，就甭回来了。',ex_py:'Yào méi shénme shì, jiù béng huílai le.',ex_vn:'Nếu không có việc gì thì khỏi về.',
   exList:[
     {zh:'要没什么事，就甭回来了。',py:'Yào méi shénme shì, jiù béng huílai le.',vn:'Nếu không có việc gì thì khỏi về.'},
     {zh:'独立自主的能力就更甭提了。',py:'Dúlì zìzhǔ de nénglì jiù gèng béng tí le.',vn:'Khả năng tự lập tự chủ thì càng khỏi phải nói.'},
     {zh:'这点儿小事你甭管了，我自己能处理。',py:'Zhè diǎnr xiǎoshì nǐ béng guǎn le, wǒ zìjǐ néng chǔlǐ.',vn:'Chuyện cỏn con này cậu khỏi lo, tớ tự xử lý được.'}
   ],
   colloFull:[
     {zh:'甭回来了',py:'béng huílai le',vn:'khỏi về'},
     {zh:'甭担心',py:'béng dānxīn',vn:'khỏi lo'},
     {zh:'甭客气',py:'béng kèqi',vn:'khỏi khách sáo'},
     {zh:'更甭提',py:'gèng béng tí',vn:'càng khỏi phải nói'},
     {zh:'甭管',py:'béng guǎn',vn:'khỏi bận tâm'}
   ],
   patterns:[
     {s:'甭 + V（了）',m:'Khỏi phải / không cần làm gì (= 不用)'},
     {s:'A 都……，更甭提 B 了',m:'A còn …, B lại càng khỏi phải nói'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đến cơm tôi còn chẳng biết nấu, càng khỏi phải nói đến món sở trường.',answer:'我连饭都不会做，更甭提拿手菜了。',answerPy:'Wǒ lián fàn dōu bú huì zuò, gèng béng tí náshǒucài le.',
      note:'连……都…… nêu trường hợp dễ nhất cũng không làm được, 更甭提 đẩy lên trường hợp khó hơn (拿手 — bài 1).',pair:'连……都……'},
     {promptLang:'vi',prompt:'Nếu trời mưa thì cậu khỏi đến, chúng ta nói qua điện thoại.',answer:'要是下雨，你就甭来了，我们打电话说吧。',answerPy:'Yàoshi xià yǔ, nǐ jiù béng lái le, wǒmen dǎ diànhuà shuō ba.',
      note:'要是……就……: nếu … thì …; 甭来了 = 不用来了 (khẩu ngữ).',pair:'要是……就……'}
   ]},

  {n:8,zh:'脱离',py:'tuōlí',pos:'Động từ',vn:'thoát khỏi, rời khỏi',hv:'thoát ly',em:'🪂',lesson:1,
   explain:['Rời khỏi, tách hẳn khỏi một môi trường, một mối quan hệ hay một tình trạng.','Hay gặp: 脱离父母 (sống tách khỏi bố mẹ), 脱离危险 (qua cơn nguy hiểm), 脱离实际 (xa rời thực tế).'],
   usage:'脱离 + 父母 / 危险 / 实际 / 关系. 脱离 trang trọng, nhấn mạnh sự tách rời hẳn; 离开 dùng rộng hơn, cả rời đi tạm thời.',
   collo:['脱离父母','脱离危险','脱离实际','脱离困境'],
   ex_zh:'脱离父母，独立生活对我具有巨大的诱惑。',ex_py:'Tuōlí fùmǔ, dúlì shēnghuó duì wǒ jùyǒu jùdà de yòuhuò.',ex_vn:'Rời xa bố mẹ, sống độc lập là một sức cám dỗ rất lớn với tôi.',
   exList:[
     {zh:'脱离父母，独立生活对我具有巨大的诱惑。',py:'Tuōlí fùmǔ, dúlì shēnghuó duì wǒ jùyǒu jùdà de yòuhuò.',vn:'Rời xa bố mẹ, sống độc lập là một sức cám dỗ rất lớn với tôi.'},
     {zh:'经过医生一夜的抢救，病人终于脱离了危险。',py:'Jīngguò yīshēng yí yè de qiǎngjiù, bìngrén zhōngyú tuōlíle wēixiǎn.',vn:'Sau một đêm bác sĩ cấp cứu, bệnh nhân cuối cùng đã qua cơn nguy hiểm.'},
     {zh:'你的计划太脱离实际了，根本不可能完成。',py:'Nǐ de jìhuà tài tuōlí shíjì le, gēnběn bù kěnéng wánchéng.',vn:'Kế hoạch của cậu quá xa rời thực tế, căn bản không thể hoàn thành.'}
   ],
   colloFull:[
     {zh:'脱离父母',py:'tuōlí fùmǔ',vn:'rời xa bố mẹ'},
     {zh:'脱离危险',py:'tuōlí wēixiǎn',vn:'qua cơn nguy hiểm'},
     {zh:'脱离实际',py:'tuōlí shíjì',vn:'xa rời thực tế'},
     {zh:'脱离困境',py:'tuōlí kùnjìng',vn:'thoát khỏi cảnh khốn khó'}
   ],
   patterns:[
     {s:'脱离 + 危险 / 父母 / 实际',m:'Thoát khỏi / tách khỏi …'},
     {s:'太脱离实际了',m:'Quá xa rời thực tế'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vì được đưa đến bệnh viện kịp thời nên ông cụ đã qua cơn nguy hiểm.',answer:'由于送医院送得及时，老人已经脱离了危险。',answerPy:'Yóuyú sòng yīyuàn sòng de jíshí, lǎorén yǐjīng tuōlíle wēixiǎn.',
      note:'由于 nêu nguyên nhân (văn viết); động từ có tân ngữ + bổ ngữ trạng thái phải lặp động từ: 送医院送得及时.',pair:'由于 · V + O + V + 得'},
     {promptLang:'vi',prompt:'Tuy sống xa bố mẹ rất vất vả nhưng tôi đã học được cách tự lập.',answer:'虽然脱离父母生活很辛苦，但我学会了独立。',answerPy:'Suīrán tuōlí fùmǔ shēnghuó hěn xīnkǔ, dàn wǒ xuéhuìle dúlì.',
      note:'Cụm động từ 脱离父母生活 làm chủ ngữ cho 很辛苦.',pair:'虽然……但……'}
   ]},

  {n:9,zh:'诱惑',py:'yòuhuò',pos:'Động từ',vn:'mê hoặc, cám dỗ, hấp dẫn',hv:'dụ hoặc',em:'🍭',lesson:1,
   explain:['Động từ: dụ dỗ, lôi kéo người khác (thường làm điều không tốt).','Danh từ: sức cám dỗ, sức hấp dẫn khó cưỡng (对……具有诱惑, 经不起诱惑).'],
   usage:'对 + người + 具有 / 有 + (巨大的) 诱惑; 经不起诱惑 = không cưỡng lại được cám dỗ; 抵抗诱惑.',
   collo:['巨大的诱惑','经不起诱惑','抵抗诱惑','金钱的诱惑'],
   ex_zh:'脱离父母，独立生活对我具有巨大的诱惑，让我无比向往。',ex_py:'Tuōlí fùmǔ, dúlì shēnghuó duì wǒ jùyǒu jùdà de yòuhuò, ràng wǒ wúbǐ xiàngwǎng.',ex_vn:'Rời xa bố mẹ, sống độc lập là một sức cám dỗ lớn với tôi, khiến tôi vô cùng khao khát.',
   exList:[
     {zh:'脱离父母，独立生活对我具有巨大的诱惑，让我无比向往。',py:'Tuōlí fùmǔ, dúlì shēnghuó duì wǒ jùyǒu jùdà de yòuhuò, ràng wǒ wúbǐ xiàngwǎng.',vn:'Rời xa bố mẹ, sống độc lập là một sức cám dỗ lớn với tôi, khiến tôi vô cùng khao khát.'},
     {zh:'减肥的时候，蛋糕对我来说是最大的诱惑。',py:'Jiǎnféi de shíhou, dàngāo duì wǒ lái shuō shì zuì dà de yòuhuò.',vn:'Lúc giảm cân, bánh ngọt là thứ cám dỗ lớn nhất với tôi.'},
     {zh:'他经不起金钱的诱惑，最后犯了错误。',py:'Tā jīng bu qǐ jīnqián de yòuhuò, zuìhòu fànle cuòwù.',vn:'Anh ta không cưỡng nổi cám dỗ của đồng tiền, cuối cùng đã phạm sai lầm.'}
   ],
   colloFull:[
     {zh:'巨大的诱惑',py:'jùdà de yòuhuò',vn:'sức cám dỗ to lớn'},
     {zh:'经不起诱惑',py:'jīng bu qǐ yòuhuò',vn:'không cưỡng nổi cám dỗ'},
     {zh:'抵抗诱惑',py:'dǐkàng yòuhuò',vn:'chống lại cám dỗ'},
     {zh:'金钱的诱惑',py:'jīnqián de yòuhuò',vn:'cám dỗ của đồng tiền'},
     {zh:'充满诱惑',py:'chōngmǎn yòuhuò',vn:'đầy sức cám dỗ'}
   ],
   patterns:[
     {s:'A 对 B 具有 / 有 + 诱惑',m:'A có sức cám dỗ đối với B'},
     {s:'经不起 + ……的诱惑',m:'Không cưỡng nổi cám dỗ của …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đối với học sinh, điện thoại có sức cám dỗ rất lớn.',answer:'对学生来说，手机具有很大的诱惑。',answerPy:'Duì xuésheng lái shuō, shǒujī jùyǒu hěn dà de yòuhuò.',
      note:'对……来说 nêu góc nhìn của một đối tượng, đứng đầu câu.',pair:'对……来说'},
     {promptLang:'vi',prompt:'Dù cám dỗ lớn đến đâu, cậu cũng phải giữ vững mục tiêu của mình.',answer:'不管诱惑有多大，你都要坚持自己的目标。',answerPy:'Bùguǎn yòuhuò yǒu duō dà, nǐ dōu yào jiānchí zìjǐ de mùbiāo.',
      note:'不管 + 多 + Adj，都……: dù … đến đâu cũng ….',pair:'不管……都……'}
   ]},

  {n:10,zh:'无比',py:'wúbǐ',pos:'Động từ',vn:'vô cùng, không gì sánh bằng',hv:'vô tỉ',em:'💯',lesson:1,
   explain:['Không gì so sánh được — thường đứng TRƯỚC tính từ / động từ tâm lý hai âm tiết để nhấn mạnh mức độ rất cao (无比向往, 无比幸福).','Chủ yếu dùng cho điều tốt đẹp, sắc thái văn viết, mạnh hơn 非常.'],
   usage:'无比 + Adj / động từ tâm lý: 无比高兴, 无比激动, 无比骄傲. Không thêm 很 phía trước. Cũng có thể đứng sau: 快乐无比.',
   collo:['无比向往','无比幸福','无比激动','快乐无比'],
   ex_zh:'独立生活对我具有巨大的诱惑，让我无比向往。',ex_py:'Dúlì shēnghuó duì wǒ jùyǒu jùdà de yòuhuò, ràng wǒ wúbǐ xiàngwǎng.',ex_vn:'Cuộc sống độc lập có sức cám dỗ lớn với tôi, khiến tôi vô cùng khao khát.',
   exList:[
     {zh:'独立生活对我具有巨大的诱惑，让我无比向往。',py:'Dúlì shēnghuó duì wǒ jùyǒu jùdà de yòuhuò, ràng wǒ wúbǐ xiàngwǎng.',vn:'Cuộc sống độc lập có sức cám dỗ lớn với tôi, khiến tôi vô cùng khao khát.'},
     {zh:'中秋节，全家团圆在一起，妈妈无比高兴。',py:'Zhōngqiū Jié, quán jiā tuányuán zài yìqǐ, māma wúbǐ gāoxìng.',vn:'Tết Trung thu cả nhà sum họp, mẹ vui vô cùng.'},
     {zh:'听到女儿考上大学的消息，父母感到无比骄傲。',py:'Tīngdào nǚ\'ér kǎoshàng dàxué de xiāoxi, fùmǔ gǎndào wúbǐ jiāo\'ào.',vn:'Nghe tin con gái đỗ đại học, bố mẹ vô cùng tự hào.'}
   ],
   colloFull:[
     {zh:'无比向往',py:'wúbǐ xiàngwǎng',vn:'vô cùng khao khát'},
     {zh:'无比幸福',py:'wúbǐ xìngfú',vn:'hạnh phúc vô cùng'},
     {zh:'无比激动',py:'wúbǐ jīdòng',vn:'vô cùng xúc động'},
     {zh:'快乐无比',py:'kuàilè wúbǐ',vn:'vui sướng vô cùng'},
     {zh:'无比骄傲',py:'wúbǐ jiāo\'ào',vn:'vô cùng tự hào'}
   ],
   patterns:[
     {s:'无比 + Adj / ĐT tâm lý',m:'Vô cùng …'},
     {s:'Adj + 无比',m:'… vô cùng (đảo ra sau, văn viết)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Thấy các con sống với nhau rất hòa hợp, bố mẹ cảm thấy vô cùng hạnh phúc.',answer:'看到孩子们相处得很融洽，父母感到无比幸福。',answerPy:'Kàndào háizimen xiāngchǔ de hěn róngqià, fùmǔ gǎndào wúbǐ xìngfú.',
      note:'V + 得 + bổ ngữ trạng thái (相处得很融洽 — 融洽 bài 1); 感到 + 无比 + Adj.',pair:'V + 得 + bổ ngữ trạng thái'},
     {promptLang:'vi',prompt:'Lần đầu đứng trên sân khấu, tôi vừa vô cùng hồi hộp vừa vô cùng phấn khởi.',answer:'第一次站在舞台上，我既无比紧张，又无比兴奋。',answerPy:'Dì-yī cì zhàn zài wǔtái shang, wǒ jì wúbǐ jǐnzhāng, yòu wúbǐ xīngfèn.',
      note:'既……又……: vừa … vừa … (hai trạng thái cùng tồn tại).',pair:'既……又……'}
   ]},

  {n:11,zh:'向往',py:'xiàngwǎng',pos:'Động từ',vn:'mong mỏi, khao khát',hv:'hướng vãng',em:'🌈',lesson:1,
   explain:['Say mê, mong mỏi hướng tới một nơi, một cuộc sống, một điều tốt đẹp mà mình chưa có.','Tân ngữ thường là danh từ trừu tượng hoặc nơi chốn (向往自由, 向往大城市); cũng làm danh từ: 对……的向往.'],
   usage:'向往 + N; 对……充满向往; 令人向往. Có thể thêm 很 / 非常 / 无比 phía trước.',
   collo:['向往自由','无比向往','令人向往','对未来的向往'],
   ex_zh:'我从小就向往大海，梦想当一名海员。',ex_py:'Wǒ cóngxiǎo jiù xiàngwǎng dàhǎi, mèngxiǎng dāng yì míng hǎiyuán.',ex_vn:'Từ nhỏ tôi đã khao khát biển cả, mơ ước làm một thủy thủ.',
   exList:[
     {zh:'我从小就向往大海，梦想当一名海员。',py:'Wǒ cóngxiǎo jiù xiàngwǎng dàhǎi, mèngxiǎng dāng yì míng hǎiyuán.',vn:'Từ nhỏ tôi đã khao khát biển cả, mơ ước làm một thủy thủ.'},
     {zh:'独立生活对我具有巨大的诱惑，让我无比向往。',py:'Dúlì shēnghuó duì wǒ jùyǒu jùdà de yòuhuò, ràng wǒ wúbǐ xiàngwǎng.',vn:'Cuộc sống độc lập có sức cám dỗ lớn với tôi, khiến tôi vô cùng khao khát.'},
     {zh:'那是一个令人向往的地方，山清水秀，空气清新。',py:'Nà shì yí ge lìng rén xiàngwǎng de dìfang, shān qīng shuǐ xiù, kōngqì qīngxīn.',vn:'Đó là một nơi khiến người ta mơ ước: non xanh nước biếc, không khí trong lành.'}
   ],
   colloFull:[
     {zh:'向往自由',py:'xiàngwǎng zìyóu',vn:'khao khát tự do'},
     {zh:'无比向往',py:'wúbǐ xiàngwǎng',vn:'vô cùng khao khát'},
     {zh:'令人向往',py:'lìng rén xiàngwǎng',vn:'khiến người ta mơ ước'},
     {zh:'对未来的向往',py:'duì wèilái de xiàngwǎng',vn:'niềm mơ ước về tương lai'},
     {zh:'向往大城市',py:'xiàngwǎng dà chéngshì',vn:'khao khát thành phố lớn'}
   ],
   patterns:[
     {s:'向往 + N',m:'Khao khát, mong mỏi …'},
     {s:'令人向往的 + N',m:'… khiến người ta mơ ước'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Hồi nhỏ tôi luôn khao khát cuộc sống thành phố lớn, bây giờ ngược lại càng nhớ quê hơn.',answer:'小时候我一直向往大城市的生活，现在反而更想念家乡了。',answerPy:'Xiǎoshíhou wǒ yìzhí xiàngwǎng dà chéngshì de shēnghuó, xiànzài fǎn\'ér gèng xiǎngniàn jiāxiāng le.',
      note:'反而: kết quả trái với điều mình nghĩ/điều bình thường.',pair:'反而'},
     {promptLang:'vi',prompt:'Dù cuộc sống du học rất vất vả, nhiều bạn trẻ vẫn rất khao khát.',answer:'尽管留学生活很辛苦，很多年轻人还是很向往。',answerPy:'Jǐnguǎn liúxué shēnghuó hěn xīnkǔ, hěn duō niánqīngrén háishi hěn xiàngwǎng.',
      note:'尽管……还是……: mặc dù … vẫn ….',pair:'尽管……还是……'}
   ]},

  {n:12,zh:'孤独',py:'gūdú',pos:'Tính từ',vn:'cô độc, cô đơn',hv:'cô độc',em:'🌙',lesson:1,
   explain:['Một mình, không có ai bên cạnh, cảm thấy lẻ loi.','Hay đi với 感: 孤独感 (cảm giác cô đơn).'],
   usage:'感到孤独, 孤独感, 孤独的老人. 孤独 thiên về trạng thái lẻ loi (cả lâu dài); 寂寞 thiên về buồn vì không có ai bầu bạn.',
   collo:['感到孤独','孤独感','孤独的老人','害怕孤独'],
   ex_zh:'第一次离开家，心里的孤独感一下子跑了出来。',ex_py:'Dì-yī cì líkāi jiā, xīn li de gūdúgǎn yíxiàzi pǎole chūlai.',ex_vn:'Lần đầu xa nhà, nỗi cô đơn trong lòng bỗng chốc trào ra.',
   exList:[
     {zh:'第一次离开家，心里的孤独感一下子跑了出来。',py:'Dì-yī cì líkāi jiā, xīn li de gūdúgǎn yíxiàzi pǎole chūlai.',vn:'Lần đầu xa nhà, nỗi cô đơn trong lòng bỗng chốc trào ra.'},
     {zh:'刚到国外的时候，我常常感到孤独。',py:'Gāng dào guówài de shíhou, wǒ chángcháng gǎndào gūdú.',vn:'Hồi mới ra nước ngoài, tôi thường thấy cô đơn.'},
     {zh:'周末我们去看看那些孤独的老人吧。',py:'Zhōumò wǒmen qù kànkan nàxiē gūdú de lǎorén ba.',vn:'Cuối tuần chúng mình đi thăm các cụ già neo đơn nhé.'}
   ],
   colloFull:[
     {zh:'感到孤独',py:'gǎndào gūdú',vn:'cảm thấy cô đơn'},
     {zh:'孤独感',py:'gūdúgǎn',vn:'cảm giác cô đơn'},
     {zh:'孤独的老人',py:'gūdú de lǎorén',vn:'cụ già neo đơn'},
     {zh:'害怕孤独',py:'hàipà gūdú',vn:'sợ cô đơn'},
     {zh:'孤独地生活',py:'gūdú de shēnghuó',vn:'sống cô độc'}
   ],
   patterns:[
     {s:'感到 / 觉得 + 孤独',m:'Cảm thấy cô đơn'},
     {s:'……的孤独感',m:'Nỗi cô đơn …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Từ khi có mấy người bạn thân, cậu ấy không còn thấy cô đơn nữa.',answer:'自从有了几个好朋友，他就不再感到孤独了。',answerPy:'Zìcóng yǒule jǐ ge hǎo péngyou, tā jiù bú zài gǎndào gūdú le.',
      note:'自从……（以后），就……: từ khi … thì …; 不再……了 = không còn … nữa.',pair:'自从……就……'},
     {promptLang:'vi',prompt:'Ở một mình càng lâu thì càng dễ thấy cô đơn.',answer:'一个人待得越久，越容易感到孤独。',answerPy:'Yí ge rén dāi de yuè jiǔ, yuè róngyì gǎndào gūdú.',
      note:'越 A，越 B: B tăng theo A.',pair:'越……越……'}
   ]},

  {n:13,zh:'哭鼻子',py:'kū bízi',pos:'Cụm động từ (khẩu ngữ)',vn:'khóc nhè, mếu máo',hv:'khốc tị tử',em:'😢',lesson:1,
   explain:['Cách nói khẩu ngữ, hơi đùa vui: khóc (thường chỉ trẻ con hoặc người khóc vì chuyện nhỏ).','Là cụm động từ – tân ngữ, có thể tách: 哭起鼻子来.'],
   usage:'一……就哭鼻子, 动不动就哭鼻子, 别哭鼻子了. Mang ý trêu nhẹ, không dùng cho chuyện đau buồn nghiêm trọng.',
   collo:['一……就哭鼻子','动不动就哭鼻子','别哭鼻子了','哭起鼻子来'],
   ex_zh:'宿舍里的同学一给家里打电话就哭鼻子。',ex_py:'Sùshè li de tóngxué yì gěi jiā li dǎ diànhuà jiù kū bízi.',ex_vn:'Bạn cùng phòng hễ gọi điện về nhà là khóc nhè.',
   exList:[
     {zh:'宿舍里的同学一给家里打电话就哭鼻子。',py:'Sùshè li de tóngxué yì gěi jiā li dǎ diànhuà jiù kū bízi.',vn:'Bạn cùng phòng hễ gọi điện về nhà là khóc nhè.'},
     {zh:'都上高中了，还动不动就哭鼻子，羞不羞？',py:'Dōu shàng gāozhōng le, hái dòngbudòng jiù kū bízi, xiū bu xiū?',vn:'Lên cấp ba rồi mà vẫn hơi tí là khóc nhè, không biết xấu hổ à?'},
     {zh:'输了一场比赛就哭起鼻子来，以后怎么办？',py:'Shūle yì chǎng bǐsài jiù kūqǐ bízi lai, yǐhòu zěnme bàn?',vn:'Thua một trận đã mếu máo, sau này thì tính sao?'}
   ],
   colloFull:[
     {zh:'一……就哭鼻子',py:'yī……jiù kū bízi',vn:'hễ … là khóc nhè'},
     {zh:'动不动就哭鼻子',py:'dòngbudòng jiù kū bízi',vn:'hơi tí là khóc nhè'},
     {zh:'别哭鼻子了',py:'bié kū bízi le',vn:'đừng khóc nhè nữa'},
     {zh:'哭起鼻子来',py:'kūqǐ bízi lai',vn:'mếu máo khóc'}
   ],
   patterns:[
     {s:'一 + V，就哭鼻子',m:'Hễ … là khóc nhè'},
     {s:'哭起鼻子来',m:'Bắt đầu mếu máo'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Em gái tôi hễ bị mẹ phê bình là khóc nhè.',answer:'我妹妹一被妈妈批评就哭鼻子。',answerPy:'Wǒ mèimei yí bèi māma pīpíng jiù kū bízi.',
      note:'一 + 被 + người + V，就……: câu bị động lồng trong 一……就…….',pair:'一……就……'},
     {promptLang:'vi',prompt:'Đã là học sinh cấp ba rồi mà còn khóc nhè vì chuyện nhỏ như vậy à?',answer:'都是高中生了，还为这么点儿小事哭鼻子？',answerPy:'Dōu shì gāozhōngshēng le, hái wèi zhème diǎnr xiǎoshì kū bízi?',
      note:'都……了，还……: đã … rồi mà còn … (trách nhẹ).',pair:'都……了，还……'}
   ]},

  {n:14,zh:'片刻',py:'piànkè',pos:'Danh từ',vn:'phút chốc, giây lát',hv:'phiến khắc',em:'⏱️',lesson:1,
   explain:['Một khoảng thời gian rất ngắn (văn viết, = 一会儿).','片刻不停 = không ngừng một giây nào.'],
   usage:'休息片刻, 稍等片刻, 沉默片刻, 片刻不停地 + V. Đứng sau động từ làm bổ ngữ thời lượng hoặc làm trạng ngữ.',
   collo:['片刻不停','休息片刻','稍等片刻','沉默片刻'],
   ex_zh:'每到节假日，大家更是片刻不停地往家赶。',ex_py:'Měi dào jiéjiàrì, dàjiā gèng shì piànkè bù tíng de wǎng jiā gǎn.',ex_vn:'Cứ đến ngày lễ, ngày nghỉ, mọi người lại càng không ngừng một phút nào mà hối hả về nhà.',
   exList:[
     {zh:'每到节假日，大家更是片刻不停地往家赶。',py:'Měi dào jiéjiàrì, dàjiā gèng shì piànkè bù tíng de wǎng jiā gǎn.',vn:'Cứ đến ngày lễ, ngày nghỉ, mọi người lại càng không ngừng một phút nào mà hối hả về nhà.'},
     {zh:'请大家稍等片刻，会议马上开始。',py:'Qǐng dàjiā shāo děng piànkè, huìyì mǎshàng kāishǐ.',vn:'Xin mọi người đợi giây lát, cuộc họp sẽ bắt đầu ngay.'},
     {zh:'他沉默了片刻，然后说出了自己的想法。',py:'Tā chénmòle piànkè, ránhòu shuōchūle zìjǐ de xiǎngfǎ.',vn:'Anh ấy im lặng giây lát rồi nói ra suy nghĩ của mình.'}
   ],
   colloFull:[
     {zh:'片刻不停',py:'piànkè bù tíng',vn:'không ngừng một giây'},
     {zh:'休息片刻',py:'xiūxi piànkè',vn:'nghỉ một lát'},
     {zh:'稍等片刻',py:'shāo děng piànkè',vn:'đợi giây lát'},
     {zh:'沉默片刻',py:'chénmò piànkè',vn:'im lặng giây lát'},
     {zh:'片刻之后',py:'piànkè zhīhòu',vn:'giây lát sau'}
   ],
   patterns:[
     {s:'V + 片刻',m:'Làm gì trong chốc lát'},
     {s:'片刻不停地 + V',m:'Không ngừng nghỉ một giây'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Anh ấy ngẫm nghĩ giây lát rồi sảng khoái nhận lời.',answer:'他想了片刻，然后爽快地答应了。',answerPy:'Tā xiǎngle piànkè, ránhòu shuǎngkuai de dāying le.',
      note:'V + 了 + thời lượng (想了片刻); 爽快 — bài 1.',pair:'V + 了 + thời lượng'},
     {promptLang:'vi',prompt:'Cả ngày chị ấy làm việc không ngừng, đến cơm cũng chưa kịp ăn.',answer:'她一整天片刻不停地工作，连饭都没顾上吃。',answerPy:'Tā yì zhěng tiān piànkè bù tíng de gōngzuò, lián fàn dōu méi gùshang chī.',
      note:'连……都…… nhấn mạnh việc tối thiểu cũng không làm được; 顾不上 / 没顾上 = không kịp lo đến.',pair:'连……都……'}
   ]},

  {n:15,zh:'步伐',py:'bùfá',pos:'Danh từ',vn:'bước đi, nhịp bước',hv:'bộ phạt',em:'👣',lesson:1,
   explain:['Nhịp bước chân (khi đi, khi hành quân): 步伐整齐.','Nghĩa bóng: nhịp độ, tiến trình (发展的步伐, 加快……的步伐).'],
   usage:'加快步伐, 步伐整齐, 回家的步伐, 跟上……的步伐. Văn viết; khẩu ngữ hay nói 脚步.',
   collo:['加快步伐','步伐整齐','回家的步伐','跟上步伐'],
   ex_zh:'这也阻挡不了大家回家的步伐。',ex_py:'Zhè yě zǔdǎng bù liǎo dàjiā huí jiā de bùfá.',ex_vn:'Điều đó cũng không cản được bước chân về nhà của mọi người.',
   exList:[
     {zh:'这也阻挡不了大家回家的步伐。',py:'Zhè yě zǔdǎng bù liǎo dàjiā huí jiā de bùfá.',vn:'Điều đó cũng không cản được bước chân về nhà của mọi người.'},
     {zh:'天快黑了，我们不由得加快了步伐。',py:'Tiān kuài hēi le, wǒmen bùyóude jiākuàile bùfá.',vn:'Trời sắp tối, chúng tôi bất giác rảo bước nhanh hơn.'},
     {zh:'城市发展的步伐越来越快，人们的生活也越来越方便。',py:'Chéngshì fāzhǎn de bùfá yuèláiyuè kuài, rénmen de shēnghuó yě yuèláiyuè fāngbiàn.',vn:'Nhịp phát triển của thành phố ngày càng nhanh, cuộc sống người dân cũng ngày càng tiện lợi.'}
   ],
   colloFull:[
     {zh:'加快步伐',py:'jiākuài bùfá',vn:'rảo bước, đẩy nhanh nhịp độ'},
     {zh:'步伐整齐',py:'bùfá zhěngqí',vn:'bước chân đều tăm tắp'},
     {zh:'回家的步伐',py:'huí jiā de bùfá',vn:'bước chân về nhà'},
     {zh:'跟上步伐',py:'gēnshang bùfá',vn:'theo kịp nhịp bước'},
     {zh:'发展的步伐',py:'fāzhǎn de bùfá',vn:'nhịp độ phát triển'}
   ],
   patterns:[
     {s:'加快 / 放慢 + 步伐',m:'Bước nhanh / chậm lại'},
     {s:'阻挡不了……的步伐',m:'Không cản được bước chân …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Dù đường xa đến đâu cũng không cản được bước chân về nhà của chúng tôi.',answer:'无论路有多远，都阻挡不了我们回家的步伐。',answerPy:'Wúlùn lù yǒu duō yuǎn, dōu zǔdǎng bù liǎo wǒmen huí jiā de bùfá.',
      note:'无论 + 多 + Adj，都……; V + 不了 = không thể ….',pair:'无论……都……'},
     {promptLang:'vi',prompt:'Để theo kịp các bạn, tôi đành phải rảo bước.',answer:'为了跟上同学们，我不得不加快步伐。',answerPy:'Wèile gēnshang tóngxuémen, wǒ bùdébù jiākuài bùfá.',
      note:'不得不 + V = buộc phải, đành phải.',pair:'不得不'}
   ]},

  {n:16,zh:'包围',py:'bāowéi',pos:'Động từ',vn:'bao quanh, vây quanh',hv:'bao vi',em:'🫂',lesson:1,
   explain:['Vây kín bốn phía: 被记者包围.','Nghĩa bóng: được bao bọc bởi một cảm xúc, bầu không khí (被亲情包围, 被幸福包围).'],
   usage:'被 + N + 包围; N + 包围着 + N. Hay dùng trong câu bị động.',
   collo:['被亲情包围','被……包围','包围着','四面包围'],
   ex_zh:'回家的快乐和被亲情包围的幸福感染了我。',ex_py:'Huí jiā de kuàilè hé bèi qīnqíng bāowéi de xìngfú gǎnrǎnle wǒ.',ex_vn:'Niềm vui được về nhà và hạnh phúc được tình thân bao bọc đã lây sang tôi.',
   exList:[
     {zh:'回家的快乐和被亲情包围的幸福感染了我。',py:'Huí jiā de kuàilè hé bèi qīnqíng bāowéi de xìngfú gǎnrǎnle wǒ.',vn:'Niềm vui được về nhà và hạnh phúc được tình thân bao bọc đã lây sang tôi.'},
     {zh:'这座小村子被青山绿水包围着，风景特别美。',py:'Zhè zuò xiǎo cūnzi bèi qīngshān lǜshuǐ bāowéizhe, fēngjǐng tèbié měi.',vn:'Ngôi làng nhỏ này được non xanh nước biếc bao quanh, phong cảnh rất đẹp.'},
     {zh:'明星一出来，就被记者们包围了。',py:'Míngxīng yì chūlai, jiù bèi jìzhěmen bāowéi le.',vn:'Ngôi sao vừa bước ra đã bị cánh phóng viên vây kín.'}
   ],
   colloFull:[
     {zh:'被亲情包围',py:'bèi qīnqíng bāowéi',vn:'được tình thân bao bọc'},
     {zh:'被……包围',py:'bèi……bāowéi',vn:'bị/được … vây quanh'},
     {zh:'包围着',py:'bāowéizhe',vn:'đang bao quanh'},
     {zh:'四面包围',py:'sìmiàn bāowéi',vn:'vây bốn phía'},
     {zh:'被记者包围',py:'bèi jìzhě bāowéi',vn:'bị phóng viên vây kín'}
   ],
   patterns:[
     {s:'被 + N + 包围（着）',m:'Được / bị … bao quanh'},
     {s:'N + 包围着 + N',m:'… bao quanh …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Về đến nhà, được tình thân bao bọc, mọi mệt mỏi đều tan biến.',answer:'一回到家，被亲情包围着，所有的疲劳都消失了。',answerPy:'Yì huídào jiā, bèi qīnqíng bāowéizhe, suǒyǒu de píláo dōu xiāoshī le.',
      note:'Câu bị động 被 + tác nhân + V + 着 diễn tả trạng thái kéo dài.',pair:'câu bị động 被'},
     {promptLang:'vi',prompt:'Vì ngôi nhà được cây xanh bao quanh nên mùa hè rất mát.',answer:'因为房子被绿树包围着，所以夏天特别凉快。',answerPy:'Yīnwèi fángzi bèi lǜ shù bāowéizhe, suǒyǐ xiàtiān tèbié liángkuai.',
      note:'因为……所以…… nối nguyên nhân – kết quả.',pair:'因为……所以……'}
   ]},

  {n:17,zh:'感染',py:'gǎnrǎn',pos:'Động từ',vn:'lây, lan truyền (cảm xúc); nhiễm (bệnh)',hv:'cảm nhiễm',em:'✨',lesson:1,
   explain:['Nghĩa gốc: bị nhiễm (vi khuẩn, virus): 伤口感染了.','Nghĩa bóng: cảm xúc, không khí lan sang người khác, khiến người khác cũng thấy như vậy: 他的快乐感染了我.'],
   usage:'A 感染了 B / B 被 A 感染; 受到感染; 感染力 (sức lay động). Trong bài dùng nghĩa bóng.',
   collo:['感染了我','被……感染','伤口感染','很有感染力'],
   ex_zh:'回家的快乐和被亲情包围的幸福感染了我。',ex_py:'Huí jiā de kuàilè hé bèi qīnqíng bāowéi de xìngfú gǎnrǎnle wǒ.',ex_vn:'Niềm vui được về nhà và hạnh phúc được tình thân bao bọc đã lây sang tôi.',
   exList:[
     {zh:'回家的快乐和被亲情包围的幸福感染了我。',py:'Huí jiā de kuàilè hé bèi qīnqíng bāowéi de xìngfú gǎnrǎnle wǒ.',vn:'Niềm vui được về nhà và hạnh phúc được tình thân bao bọc đã lây sang tôi.'},
     {zh:'她的笑声很有感染力，大家都跟着笑了起来。',py:'Tā de xiàoshēng hěn yǒu gǎnrǎnlì, dàjiā dōu gēnzhe xiàole qǐlai.',vn:'Tiếng cười của cô ấy rất dễ lây, mọi người đều cười theo.'},
     {zh:'伤口要保持干净，不然很容易感染。',py:'Shāngkǒu yào bǎochí gānjìng, bùrán hěn róngyì gǎnrǎn.',vn:'Vết thương phải giữ sạch, nếu không rất dễ nhiễm trùng.'}
   ],
   colloFull:[
     {zh:'感染了我',py:'gǎnrǎnle wǒ',vn:'lây sang tôi'},
     {zh:'被……感染',py:'bèi……gǎnrǎn',vn:'bị … lây sang, bị … làm xúc động'},
     {zh:'伤口感染',py:'shāngkǒu gǎnrǎn',vn:'vết thương nhiễm trùng'},
     {zh:'很有感染力',py:'hěn yǒu gǎnrǎnlì',vn:'rất có sức lan tỏa'},
     {zh:'受到感染',py:'shòudào gǎnrǎn',vn:'bị lây, bị ảnh hưởng'}
   ],
   patterns:[
     {s:'A + 感染了 + B',m:'(Cảm xúc của) A lan sang B'},
     {s:'B + 被 + A + 感染',m:'B bị A làm cho xúc động / lây theo'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Sự nhiệt tình của thầy đã lan sang cả lớp, ai cũng muốn thử một chút.',answer:'老师的热情感染了全班同学，大家都想试一试。',answerPy:'Lǎoshī de rèqíng gǎnrǎnle quán bān tóngxué, dàjiā dōu xiǎng shì yi shì.',
      note:'Lặp động từ đơn âm V一V (试一试) = thử một chút.',pair:'V一V'},
     {promptLang:'vi',prompt:'Nếu vết thương không được xử lý kịp thời thì có thể bị nhiễm trùng.',answer:'如果伤口不及时处理，就可能感染。',answerPy:'Rúguǒ shāngkǒu bù jíshí chǔlǐ, jiù kěnéng gǎnrǎn.',
      note:'如果……就……: nếu … thì ….',pair:'如果……就……'}
   ]},

  {n:18,zh:'恨不得',py:'hènbude',pos:'Động từ',vn:'nóng lòng muốn, chỉ mong',hv:'hận bất đắc',em:'🏃',lesson:1,
   explain:['Mong muốn rất gấp, rất mãnh liệt được làm ngay điều gì — thường là điều THỰC TẾ KHÔNG LÀM ĐƯỢC (bay về ngay, một người làm việc của hai người).','Sau 恨不得 luôn là cụm động từ; hay đi với 马上, 立刻, 一下子.'],
   usage:'恨不得 + V (马上飞到……). So với 巴不得 (bài 1): 巴不得 là mong điều CÓ THỂ xảy ra; 恨不得 nhấn mạnh sự nóng ruột, thường là điều không làm được.',
   collo:['恨不得马上','恨不得飞回家','恨不得一口吃完','恨不得找个地缝钻进去'],
   ex_zh:'我也恨不得马上飞到父母跟前，与他们团圆。',ex_py:'Wǒ yě hènbude mǎshàng fēidào fùmǔ gēnqián, yǔ tāmen tuányuán.',ex_vn:'Tôi cũng nóng lòng muốn bay ngay về bên bố mẹ, đoàn tụ với họ.',
   exList:[
     {zh:'我也恨不得马上飞到父母跟前，与他们团圆。',py:'Wǒ yě hènbude mǎshàng fēidào fùmǔ gēnqián, yǔ tāmen tuányuán.',vn:'Tôi cũng nóng lòng muốn bay ngay về bên bố mẹ, đoàn tụ với họ.'},
     {zh:'工作忙的时候，她恨不得一个人干两个人的活儿。',py:'Gōngzuò máng de shíhou, tā hènbude yí ge rén gàn liǎng ge rén de huór.',vn:'Lúc bận, chị ấy chỉ mong một mình làm được việc của hai người.'},
     {zh:'他累坏了，恨不得一下子倒在床上，睡上三天三夜。',py:'Tā lèihuài le, hènbude yíxiàzi dǎo zài chuáng shang, shuìshang sān tiān sān yè.',vn:'Anh ấy mệt rã rời, chỉ muốn đổ ngay xuống giường ngủ ba ngày ba đêm.'}
   ],
   colloFull:[
     {zh:'恨不得马上',py:'hènbude mǎshàng',vn:'nóng lòng muốn ngay'},
     {zh:'恨不得飞回家',py:'hènbude fēi huí jiā',vn:'chỉ muốn bay về nhà'},
     {zh:'恨不得一口吃完',py:'hènbude yì kǒu chīwán',vn:'chỉ muốn ăn một miếng cho hết'},
     {zh:'恨不得找个地缝钻进去',py:'hènbude zhǎo ge dìfèng zuān jinqu',vn:'xấu hổ chỉ muốn độn thổ'}
   ],
   patterns:[
     {s:'恨不得 + 马上 / 立刻 + V',m:'Nóng lòng muốn ngay lập tức …'},
     {s:'……得不得了，恨不得……',m:'… quá, chỉ muốn …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nghe tin này cậu ấy buồn vô cùng, chỉ muốn lập tức bay về nhà.',answer:'听到这个消息，他难受得不得了，恨不得马上飞回家。',answerPy:'Tīngdào zhège xiāoxi, tā nánshòu de bùdéliǎo, hènbude mǎshàng fēi huí jiā.',
      note:'Adj + 得不得了 = … vô cùng; 恨不得 + 马上 + V.',pair:'Adj + 得不得了'},
     {promptLang:'vi',prompt:'Tôi đói đến mức chỉ muốn ăn một miếng hết cả bát cơm to.',answer:'我饿得恨不得一口吃完一大碗饭。',answerPy:'Wǒ è de hènbude yì kǒu chīwán yí dà wǎn fàn.',
      note:'V/Adj + 得 + bổ ngữ mức độ: 饿得恨不得…….',pair:'Adj + 得 + bổ ngữ'}
   ]},

  {n:19,zh:'跟前',py:'gēnqián',pos:'Danh từ',vn:'bên cạnh, trước mặt',hv:'cân tiền',em:'🧍',lesson:1,
   explain:['Chỗ gần sát bên cạnh, ngay trước mặt ai / cái gì (khẩu ngữ).','Cũng chỉ "ở bên cạnh" theo nghĩa sống gần: 孩子不在跟前 (con không ở bên).'],
   usage:'V + 到 + người + 跟前; 在 + người + 跟前. Tương đương 面前 nhưng khẩu ngữ hơn.',
   collo:['飞到父母跟前','走到跟前','在……跟前','跑到跟前'],
   ex_zh:'我也恨不得马上飞到父母跟前，与他们团圆。',ex_py:'Wǒ yě hènbude mǎshàng fēidào fùmǔ gēnqián, yǔ tāmen tuányuán.',ex_vn:'Tôi cũng nóng lòng muốn bay ngay về bên bố mẹ, đoàn tụ với họ.',
   exList:[
     {zh:'我也恨不得马上飞到父母跟前，与他们团圆。',py:'Wǒ yě hènbude mǎshàng fēidào fùmǔ gēnqián, yǔ tāmen tuányuán.',vn:'Tôi cũng nóng lòng muốn bay ngay về bên bố mẹ, đoàn tụ với họ.'},
     {zh:'我郑重地走到她们跟前，严肃地说了几句。',py:'Wǒ zhèngzhòng de zǒudào tāmen gēnqián, yánsù de shuōle jǐ jù.',vn:'Tôi nghiêm trang bước đến trước mặt hai đứa, nghiêm giọng nói mấy câu.'},
     {zh:'老人的孩子都在外地工作，跟前没有人照顾。',py:'Lǎorén de háizi dōu zài wàidì gōngzuò, gēnqián méiyǒu rén zhàogù.',vn:'Con cái của cụ đều làm ăn ở xa, bên cạnh chẳng có ai chăm sóc.'}
   ],
   colloFull:[
     {zh:'飞到父母跟前',py:'fēidào fùmǔ gēnqián',vn:'bay về bên bố mẹ'},
     {zh:'走到跟前',py:'zǒudào gēnqián',vn:'bước đến trước mặt'},
     {zh:'在……跟前',py:'zài……gēnqián',vn:'ở bên cạnh …'},
     {zh:'跑到跟前',py:'pǎodào gēnqián',vn:'chạy đến trước mặt'}
   ],
   patterns:[
     {s:'V + 到 + người + 跟前',m:'(Đi / chạy / bay) đến trước mặt ai'},
     {s:'在 + người + 跟前',m:'Ở bên cạnh ai'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Các con đều đi làm ở xa rồi, bên cạnh ông bà chẳng có ai chăm sóc.',answer:'孩子们都去外地工作了，爷爷奶奶跟前没有人照顾。',answerPy:'Háizimen dōu qù wàidì gōngzuò le, yéye nǎinai gēnqián méiyǒu rén zhàogù.',
      note:'Câu tồn hiện: nơi chốn (爷爷奶奶跟前) + 没有 + người + V.',pair:'câu tồn hiện (有 / 没有)'},
     {promptLang:'vi',prompt:'Thằng bé vừa thấy mẹ đã chạy đến trước mặt mẹ.',answer:'孩子一看见妈妈就跑到她跟前。',answerPy:'Háizi yí kànjiàn māma jiù pǎodào tā gēnqián.',
      note:'一……就……; V + 到 + nơi chốn (bổ ngữ kết quả 到).',pair:'一……就……'}
   ]},

  {n:20,zh:'团圆',py:'tuányuán',pos:'Động từ',vn:'đoàn tụ, sum họp',hv:'đoàn viên',em:'🥮',lesson:1,
   explain:['Người thân (vợ chồng, cha mẹ con cái) xa cách nay tụ họp lại với nhau.','Gắn với các dịp lễ Tết: 中秋团圆, 团圆饭 (bữa cơm đoàn viên đêm Giao thừa).'],
   usage:'和 / 与 + người + 团圆; 全家团圆; 团圆饭. Không mang tân ngữ trực tiếp: không nói 团圆父母.',
   collo:['与……团圆','全家团圆','团圆饭','中秋团圆'],
   ex_zh:'中秋节，全家团圆在一起，妈妈无比高兴。',ex_py:'Zhōngqiū Jié, quán jiā tuányuán zài yìqǐ, māma wúbǐ gāoxìng.',ex_vn:'Tết Trung thu cả nhà sum họp, mẹ vui vô cùng.',
   exList:[
     {zh:'我恨不得马上飞到父母跟前，与他们团圆。',py:'Wǒ hènbude mǎshàng fēidào fùmǔ gēnqián, yǔ tāmen tuányuán.',vn:'Tôi nóng lòng muốn bay ngay về bên bố mẹ, đoàn tụ với họ.'},
     {zh:'中秋节，全家团圆在一起，妈妈无比高兴。',py:'Zhōngqiū Jié, quán jiā tuányuán zài yìqǐ, māma wúbǐ gāoxìng.',vn:'Tết Trung thu cả nhà sum họp, mẹ vui vô cùng.'},
     {zh:'除夕晚上，一家人围在一起吃团圆饭。',py:'Chúxī wǎnshang, yì jiā rén wéi zài yìqǐ chī tuányuánfàn.',vn:'Đêm Giao thừa, cả nhà quây quần ăn bữa cơm đoàn viên.'}
   ],
   colloFull:[
     {zh:'与……团圆',py:'yǔ……tuányuán',vn:'đoàn tụ với …'},
     {zh:'全家团圆',py:'quán jiā tuányuán',vn:'cả nhà sum họp'},
     {zh:'团圆饭',py:'tuányuánfàn',vn:'bữa cơm đoàn viên'},
     {zh:'中秋团圆',py:'Zhōngqiū tuányuán',vn:'đoàn viên dịp Trung thu'}
   ],
   patterns:[
     {s:'和 / 与 + người + 团圆',m:'Đoàn tụ với ai'},
     {s:'一家人 / 全家 + 团圆',m:'Cả nhà đoàn tụ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Dù bận đến mấy, đêm Giao thừa anh ấy cũng về nhà đoàn tụ với bố mẹ.',answer:'不管多忙，除夕他都会回家跟父母团圆。',answerPy:'Bùguǎn duō máng, chúxī tā dōu huì huí jiā gēn fùmǔ tuányuán.',
      note:'不管 + 多 + Adj，都……; 跟 + người + 团圆.',pair:'不管……都……'},
     {promptLang:'vi',prompt:'Sở dĩ Trung thu còn gọi là "Tết đoàn viên" là vì hôm ấy cả nhà phải sum họp.',answer:'中秋节之所以又叫“团圆节”，是因为这一天全家人要团圆。',answerPy:'Zhōngqiū Jié zhīsuǒyǐ yòu jiào "Tuányuán Jié", shì yīnwèi zhè yì tiān quán jiā rén yào tuányuán.',
      note:'之所以 + kết quả，是因为 + nguyên nhân.',pair:'之所以……是因为……'}
   ]},

  {n:21,zh:'近来',py:'jìnlái',pos:'Danh từ',vn:'dạo này, gần đây',hv:'cận lai',em:'📅',lesson:1,
   explain:['Khoảng thời gian từ không lâu trước đến hiện tại (= 最近, nhưng văn viết hơn).','Chỉ dùng cho quá khứ gần kéo dài đến nay; KHÔNG dùng cho tương lai (最近 thì được: 最近我要去北京).'],
   usage:'Đứng đầu câu hoặc sau chủ ngữ: 近来他们比较忙 / 他们近来比较忙.',
   collo:['近来比较忙','近来身体好吗','近来怎么样','近来的情况'],
   ex_zh:'近来他们比较忙，要没什么事，就甭回来了。',ex_py:'Jìnlái tāmen bǐjiào máng, yào méi shénme shì, jiù béng huílai le.',ex_vn:'Dạo này bố mẹ khá bận, nếu không có việc gì thì khỏi về.',
   exList:[
     {zh:'近来他们比较忙，要没什么事，就甭回来了。',py:'Jìnlái tāmen bǐjiào máng, yào méi shénme shì, jiù béng huílai le.',vn:'Dạo này bố mẹ khá bận, nếu không có việc gì thì khỏi về.'},
     {zh:'老师，您近来身体好吗？',py:'Lǎoshī, nín jìnlái shēntǐ hǎo ma?',vn:'Thưa thầy, dạo này thầy có khỏe không ạ?'},
     {zh:'近来天气变化很大，大家要注意身体。',py:'Jìnlái tiānqì biànhuà hěn dà, dàjiā yào zhùyì shēntǐ.',vn:'Dạo này thời tiết thay đổi thất thường, mọi người nhớ giữ gìn sức khỏe.'}
   ],
   colloFull:[
     {zh:'近来比较忙',py:'jìnlái bǐjiào máng',vn:'dạo này khá bận'},
     {zh:'近来身体好吗',py:'jìnlái shēntǐ hǎo ma',vn:'dạo này có khỏe không'},
     {zh:'近来怎么样',py:'jìnlái zěnmeyàng',vn:'dạo này thế nào'},
     {zh:'近来的情况',py:'jìnlái de qíngkuàng',vn:'tình hình gần đây'}
   ],
   patterns:[
     {s:'近来 + chủ ngữ + vị ngữ',m:'Dạo này, …'},
     {s:'Chủ ngữ + 近来 + vị ngữ',m:'… dạo này …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Dạo này công ty nhiều việc, đến cuối tuần tôi cũng phải tăng ca.',answer:'近来公司的事情比较多，连周末我都得加班。',answerPy:'Jìnlái gōngsī de shìqing bǐjiào duō, lián zhōumò wǒ dōu děi jiābān.',
      note:'连 + thời gian + 都: nhấn mạnh (cả cuối tuần cũng …).',pair:'连……都……'},
     {promptLang:'vi',prompt:'Dạo này cậu ấy hơi khác thường, chẳng lẽ gặp chuyện gì phiền phức rồi?',answer:'他近来有些反常，难道遇到什么麻烦了？',answerPy:'Tā jìnlái yǒuxiē fǎncháng, nándào yùdào shénme máfan le?',
      note:'难道……？ câu hỏi phỏng đoán / tu từ: chẳng lẽ …?',pair:'难道'}
   ]},

  {n:22,zh:'酝酿',py:'yùnniàng',pos:'Động từ',vn:'ấp ủ, chuẩn bị',hv:'uấn nhưỡng',em:'🍶',lesson:1,
   explain:['Nghĩa gốc: ủ rượu.','Nghĩa bóng: ấp ủ, nung nấu dần một cảm xúc, một kế hoạch; hoặc bàn bạc, chuẩn bị trước (酝酿已久, 酝酿感情).'],
   usage:'酝酿 + 计划 / 感情 / 情绪; 酝酿已久的 + N (ấp ủ đã lâu). Văn viết.',
   collo:['酝酿已久','酝酿感情','酝酿计划','正在酝酿'],
   ex_zh:'母亲的话使我酝酿已久的恋家情绪刹那间就没有了。',ex_py:'Mǔqīn de huà shǐ wǒ yùnniàng yǐ jiǔ de liànjiā qíngxù chànà jiān jiù méiyǒu le.',ex_vn:'Lời mẹ khiến nỗi nhớ nhà tôi ấp ủ bấy lâu tan biến trong khoảnh khắc.',
   exList:[
     {zh:'母亲的话使我酝酿已久的恋家情绪刹那间就没有了。',py:'Mǔqīn de huà shǐ wǒ yùnniàng yǐ jiǔ de liànjiā qíngxù chànà jiān jiù méiyǒu le.',vn:'Lời mẹ khiến nỗi nhớ nhà tôi ấp ủ bấy lâu tan biến trong khoảnh khắc.'},
     {zh:'近来公司的事情比较多，我酝酿已久的旅行也只能放弃了。',py:'Jìnlái gōngsī de shìqing bǐjiào duō, wǒ yùnniàng yǐ jiǔ de lǚxíng yě zhǐ néng fàngqì le.',vn:'Dạo này công ty nhiều việc, chuyến du lịch tôi ấp ủ bấy lâu cũng đành bỏ.'},
     {zh:'唱歌之前，她先闭上眼睛酝酿了一下感情。',py:'Chàng gē zhīqián, tā xiān bìshang yǎnjing yùnniàngle yíxià gǎnqíng.',vn:'Trước khi hát, cô ấy nhắm mắt lấy cảm xúc một chút.'}
   ],
   colloFull:[
     {zh:'酝酿已久',py:'yùnniàng yǐ jiǔ',vn:'ấp ủ đã lâu'},
     {zh:'酝酿感情',py:'yùnniàng gǎnqíng',vn:'lấy cảm xúc'},
     {zh:'酝酿计划',py:'yùnniàng jìhuà',vn:'ấp ủ kế hoạch'},
     {zh:'正在酝酿',py:'zhèngzài yùnniàng',vn:'đang được ấp ủ, chuẩn bị'}
   ],
   patterns:[
     {s:'酝酿已久的 + N',m:'… ấp ủ đã lâu'},
     {s:'酝酿（一下）+ 感情 / 情绪',m:'Lấy cảm xúc, chuẩn bị tâm trạng'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Kế hoạch ấp ủ đã lâu cuối cùng cũng được thực hiện.',answer:'酝酿已久的计划终于实行了。',answerPy:'Yùnniàng yǐ jiǔ de jìhuà zhōngyú shíxíng le.',
      note:'Bị động ý nghĩa (không cần 被); 实行 — bài 1; 终于 + V + 了.',pair:'终于……了'},
     {promptLang:'vi',prompt:'Trước khi đọc thơ, bạn tốt nhất nên lấy cảm xúc một chút đã.',answer:'朗读诗歌之前，你最好先酝酿一下感情。',answerPy:'Lǎngdú shīgē zhīqián, nǐ zuìhǎo xiān yùnniàng yíxià gǎnqíng.',
      note:'……之前 + 最好先 + V: lời khuyên nên làm gì trước.',pair:'……之前 · 最好'}
   ]},

  {n:23,zh:'刹那',py:'chànà',pos:'Danh từ',vn:'giây lát, khoảnh khắc',hv:'sát na',em:'⚡',lesson:1,
   explain:['Từ gốc Phạn (kṣaṇa) — khoảnh khắc cực ngắn.','Hay dùng 刹那间 = trong nháy mắt, ngay tức khắc.'],
   usage:'刹那间 (đầu câu hoặc trước động từ), 那一刹那, 一刹那. Văn viết, sắc thái mạnh hơn 一下子. Chú ý: 刹 ở đây đọc chà, không đọc shā.',
   collo:['刹那间','那一刹那','一刹那','在……的一刹那'],
   ex_zh:'母亲的话使我酝酿已久的恋家情绪刹那间就没有了。',ex_py:'Mǔqīn de huà shǐ wǒ yùnniàng yǐ jiǔ de liànjiā qíngxù chànà jiān jiù méiyǒu le.',ex_vn:'Lời mẹ khiến nỗi nhớ nhà tôi ấp ủ bấy lâu tan biến trong khoảnh khắc.',
   exList:[
     {zh:'母亲的话使我酝酿已久的恋家情绪刹那间就没有了。',py:'Mǔqīn de huà shǐ wǒ yùnniàng yǐ jiǔ de liànjiā qíngxù chànà jiān jiù méiyǒu le.',vn:'Lời mẹ khiến nỗi nhớ nhà tôi ấp ủ bấy lâu tan biến trong khoảnh khắc.'},
     {zh:'在看到妈妈的那一刹那，我的眼泪就流了下来。',py:'Zài kàndào māma de nà yí chànà, wǒ de yǎnlèi jiù liúle xiàlai.',vn:'Khoảnh khắc nhìn thấy mẹ, nước mắt tôi đã trào ra.'},
     {zh:'灯一关，刹那间，整个房间都黑了。',py:'Dēng yì guān, chànà jiān, zhěnggè fángjiān dōu hēi le.',vn:'Đèn vừa tắt, trong nháy mắt cả căn phòng tối om.'}
   ],
   colloFull:[
     {zh:'刹那间',py:'chànà jiān',vn:'trong nháy mắt'},
     {zh:'那一刹那',py:'nà yí chànà',vn:'khoảnh khắc ấy'},
     {zh:'一刹那',py:'yí chànà',vn:'một thoáng'},
     {zh:'在……的一刹那',py:'zài……de yí chànà',vn:'đúng khoảnh khắc …'}
   ],
   patterns:[
     {s:'刹那间，……',m:'Trong khoảnh khắc, …'},
     {s:'在 + V + 的那一刹那',m:'Đúng khoảnh khắc …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đúng khoảnh khắc cánh cửa mở ra, cả lớp đều đứng dậy.',answer:'在门打开的那一刹那，全班同学都站了起来。',answerPy:'Zài mén dǎkāi de nà yí chànà, quán bān tóngxué dōu zhànle qǐlai.',
      note:'V + 起来 (bổ ngữ xu hướng): từ thấp lên cao — 站起来.',pair:'V + 起来'},
     {promptLang:'vi',prompt:'Nghe thầy nói vậy, trong nháy mắt tôi hiểu ra tất cả.',answer:'听老师这么一说，刹那间我什么都明白了。',answerPy:'Tīng lǎoshī zhème yì shuō, chànà jiān wǒ shénme dōu míngbai le.',
      note:'Đại từ nghi vấn + 都 = tất cả (什么都明白了).',pair:'什么都……'}
   ]},

  {n:24,zh:'反常',py:'fǎncháng',pos:'Tính từ',vn:'khác thường, lạ',hv:'phản thường',em:'🤔',lesson:1,
   explain:['Khác hẳn với bình thường, trái với quy luật thông thường (thời tiết, thái độ, hành vi).'],
   usage:'有些 / 有点儿反常, 反常的表现, 天气反常. Làm vị ngữ, định ngữ, hoặc danh từ hoá: 父母的反常 (sự khác thường của bố mẹ).',
   collo:['有些反常','天气反常','反常的表现','父母的反常'],
   ex_zh:'我无法理解父母的反常，心中暗暗埋怨父母不体谅我。',ex_py:'Wǒ wúfǎ lǐjiě fùmǔ de fǎncháng, xīn zhōng àn\'àn mányuàn fùmǔ bù tǐliàng wǒ.',ex_vn:'Tôi không sao hiểu nổi sự khác thường của bố mẹ, trong lòng thầm trách bố mẹ không thông cảm cho mình.',
   exList:[
     {zh:'我无法理解父母的反常，心中暗暗埋怨父母不体谅我。',py:'Wǒ wúfǎ lǐjiě fùmǔ de fǎncháng, xīn zhōng àn\'àn mányuàn fùmǔ bù tǐliàng wǒ.',vn:'Tôi không sao hiểu nổi sự khác thường của bố mẹ, trong lòng thầm trách bố mẹ không thông cảm cho mình.'},
     {zh:'最近我的朋友小李有些反常，每天都无精打采的。',py:'Zuìjìn wǒ de péngyou Xiǎo Lǐ yǒuxiē fǎncháng, měi tiān dōu wújīng-dǎcǎi de.',vn:'Dạo này cậu bạn Tiểu Lý của tôi hơi khác thường, ngày nào cũng ủ rũ.'},
     {zh:'今年冬天天气很反常，一点儿也不冷。',py:'Jīnnián dōngtiān tiānqì hěn fǎncháng, yìdiǎnr yě bù lěng.',vn:'Mùa đông năm nay thời tiết thật lạ, chẳng lạnh chút nào.'}
   ],
   colloFull:[
     {zh:'有些反常',py:'yǒuxiē fǎncháng',vn:'hơi khác thường'},
     {zh:'天气反常',py:'tiānqì fǎncháng',vn:'thời tiết bất thường'},
     {zh:'反常的表现',py:'fǎncháng de biǎoxiàn',vn:'biểu hiện khác thường'},
     {zh:'父母的反常',py:'fùmǔ de fǎncháng',vn:'sự khác thường của bố mẹ'},
     {zh:'一反常态',py:'yì fǎn chángtài',vn:'khác hẳn thường ngày'}
   ],
   patterns:[
     {s:'……有些 / 有点儿反常',m:'… hơi khác thường'},
     {s:'……的反常',m:'Sự khác thường của …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bình thường cậu ấy nói luôn miệng, hôm nay lại chẳng nói câu nào, thật khác thường.',answer:'他平时总是滔滔不绝，今天却一句话也不说，真反常。',answerPy:'Tā píngshí zǒngshì tāotāo bù jué, jīntiān què yí jù huà yě bù shuō, zhēn fǎncháng.',
      note:'一 + lượng từ + N + 也不 + V: phủ định tuyệt đối; 滔滔不绝 — bài 1.',pair:'一……也不……'},
     {promptLang:'vi',prompt:'Nếu con có biểu hiện khác thường, bố mẹ nên kịp thời nói chuyện với con.',answer:'如果孩子有反常的表现，父母应该及时跟他沟通。',answerPy:'Rúguǒ háizi yǒu fǎncháng de biǎoxiàn, fùmǔ yīnggāi jíshí gēn tā gōutōng.',
      note:'如果 + giả thiết, vế sau đưa lời khuyên với 应该.',pair:'如果……（就）……'}
   ]},

  {n:25,zh:'埋怨',py:'mányuàn',pos:'Động từ',vn:'oán trách, trách móc',hv:'mai oán',em:'😤',lesson:1,
   explain:['Vì không vừa ý mà trách người khác (hoặc hoàn cảnh) — thường là trách người gây ra chuyện không hay cho mình.','Chú ý: 埋 ở đây đọc mán (không đọc mái).'],
   usage:'埋怨 + người (+ 不 / 没 + V); 互相埋怨; 暗暗埋怨. So với 抱怨: 埋怨 nhấn vào đổ lỗi cho người cụ thể; 抱怨 là than phiền nói chung (抱怨天气, 抱怨工作).',
   collo:['暗暗埋怨','互相埋怨','埋怨父母','别埋怨了'],
   ex_zh:'我心中暗暗埋怨父母不体谅我。',ex_py:'Wǒ xīn zhōng àn\'àn mányuàn fùmǔ bù tǐliàng wǒ.',ex_vn:'Trong lòng tôi thầm trách bố mẹ không thông cảm cho mình.',
   exList:[
     {zh:'我心中暗暗埋怨父母不体谅我。',py:'Wǒ xīn zhōng àn\'àn mányuàn fùmǔ bù tǐliàng wǒ.',vn:'Trong lòng tôi thầm trách bố mẹ không thông cảm cho mình.'},
     {zh:'那家饭馆的环境很不好，顾客们都埋怨服务员不打扫卫生。',py:'Nà jiā fànguǎn de huánjìng hěn bù hǎo, gùkèmen dōu mányuàn fúwùyuán bù dǎsǎo wèishēng.',vn:'Quán ăn đó rất bẩn, khách ai cũng trách nhân viên không dọn dẹp.'},
     {zh:'事情已经发生了，互相埋怨也没有用。',py:'Shìqing yǐjīng fāshēng le, hùxiāng mányuàn yě méiyǒu yòng.',vn:'Chuyện đã xảy ra rồi, đổ lỗi cho nhau cũng vô ích.'}
   ],
   colloFull:[
     {zh:'暗暗埋怨',py:'àn\'àn mányuàn',vn:'thầm trách'},
     {zh:'互相埋怨',py:'hùxiāng mányuàn',vn:'trách móc lẫn nhau'},
     {zh:'埋怨父母',py:'mányuàn fùmǔ',vn:'trách bố mẹ'},
     {zh:'别埋怨了',py:'bié mányuàn le',vn:'đừng trách nữa'},
     {zh:'埋怨自己',py:'mányuàn zìjǐ',vn:'tự trách mình'}
   ],
   patterns:[
     {s:'埋怨 + người + 不 / 没 + V',m:'Trách ai không làm gì'},
     {s:'互相埋怨',m:'Đổ lỗi cho nhau'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Thay vì trách người khác, chi bằng tự tìm nguyên nhân ở bản thân.',answer:'与其埋怨别人，不如从自己身上找原因。',answerPy:'Yǔqí mányuàn biérén, bùrú cóng zìjǐ shēnshang zhǎo yuányīn.',
      note:'与其 A，不如 B: thay vì A thì chi bằng B (chọn B).',pair:'与其……不如……'},
     {promptLang:'vi',prompt:'Cô ấy trách chồng đã quên mất sinh nhật mình.',answer:'她埋怨老公把她的生日忘了。',answerPy:'Tā mányuàn lǎogōng bǎ tā de shēngrì wàng le.',
      note:'Câu 把: 把 + tân ngữ + V + 了; 老公 — bài 1.',pair:'câu 把'}
   ]},

  {n:26,zh:'体谅',py:'tǐliàng',pos:'Động từ',vn:'thông cảm, thấu hiểu',hv:'thể lượng',em:'🤝',lesson:1,
   explain:['Đặt mình vào hoàn cảnh người khác mà nghĩ cho họ, thông cảm và thấu hiểu họ (设身处地为人着想).','Trước có thể thêm phó từ mức độ (很 / 非常体谅); có thể lặp lại: 体谅体谅.'],
   usage:'体谅 + người; 互相体谅; 体谅……的难处. Khác 原谅 (tha thứ lỗi lầm) — xem phần phân biệt.',
   collo:['体谅别人','互相体谅','很体谅','体谅体谅'],
   ex_zh:'我心中暗暗埋怨父母不体谅我。',ex_py:'Wǒ xīn zhōng àn\'àn mányuàn fùmǔ bù tǐliàng wǒ.',ex_vn:'Trong lòng tôi thầm trách bố mẹ không thông cảm cho mình.',
   exList:[
     {zh:'我心中暗暗埋怨父母不体谅我。',py:'Wǒ xīn zhōng àn\'àn mányuàn fùmǔ bù tǐliàng wǒ.',vn:'Trong lòng tôi thầm trách bố mẹ không thông cảm cho mình.'},
     {zh:'我的家离公司很远，孩子又小，老板很体谅我，允许我晚半个小时上班。',py:'Wǒ de jiā lí gōngsī hěn yuǎn, háizi yòu xiǎo, lǎobǎn hěn tǐliàng wǒ, yǔnxǔ wǒ wǎn bàn ge xiǎoshí shàngbān.',vn:'Nhà tôi xa công ty, con lại nhỏ, sếp rất thông cảm, cho phép tôi đi làm muộn nửa tiếng.'},
     {zh:'他家确实有特殊情况，你就体谅体谅他吧。',py:'Tā jiā quèshí yǒu tèshū qíngkuàng, nǐ jiù tǐliàng tǐliàng tā ba.',vn:'Nhà cậu ấy đúng là có hoàn cảnh đặc biệt, cậu thông cảm cho cậu ấy chút đi.'}
   ],
   colloFull:[
     {zh:'体谅别人',py:'tǐliàng biérén',vn:'thông cảm cho người khác'},
     {zh:'互相体谅',py:'hùxiāng tǐliàng',vn:'thông cảm cho nhau'},
     {zh:'很体谅',py:'hěn tǐliàng',vn:'rất thông cảm'},
     {zh:'体谅体谅',py:'tǐliàng tǐliàng',vn:'thông cảm chút đi'},
     {zh:'体谅……的难处',py:'tǐliàng……de nánchu',vn:'thông cảm cho nỗi khó của …'}
   ],
   patterns:[
     {s:'体谅 + người (+ 的难处)',m:'Thông cảm cho ai / nỗi khó của ai'},
     {s:'互相体谅',m:'Thông cảm cho nhau'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vợ chồng chỉ có biết thông cảm cho nhau thì mới sống hòa thuận được.',answer:'夫妻只有互相体谅，才能和睦相处。',answerPy:'Fūqī zhǐyǒu hùxiāng tǐliàng, cái néng hémù xiāngchǔ.',
      note:'只有 + điều kiện duy nhất，才 + kết quả; 和睦 — bài 1.',pair:'只有……才……'},
     {promptLang:'vi',prompt:'Bố mẹ vất vả như vậy, chúng ta nên thông cảm cho họ nhiều hơn.',answer:'父母那么辛苦，我们应该多体谅他们。',answerPy:'Fùmǔ nàme xīnkǔ, wǒmen yīnggāi duō tǐliàng tāmen.',
      note:'多 + V = làm nhiều hơn (đặt trước động từ, không đặt sau).',pair:'多 + V'}
   ]},

  {n:27,zh:'无精打采',py:'wújīng-dǎcǎi',pos:'Thành ngữ',vn:'buồn bã, phờ phạc, thẫn thờ',hv:'vô tinh đả thải',em:'😩',lesson:1,
   explain:['Không có tinh thần, uể oải, ủ rũ — vì buồn, thất vọng hoặc mệt.','Làm vị ngữ (……无精打采的), trạng ngữ (无精打采地 + V), thậm chí mang 了 như động từ: 无精打采了几天.'],
   usage:'无精打采的样子, 无精打采地走, 显得无精打采. Trái nghĩa: 精神饱满, 神采奕奕.',
   collo:['无精打采的样子','无精打采地','显得无精打采','每天都无精打采的'],
   ex_zh:'无精打采了几天之后，我不得不开始规划怎样熬过漫长的假期。',ex_py:'Wújīng-dǎcǎile jǐ tiān zhīhòu, wǒ bùdébù kāishǐ guīhuà zěnyàng áoguò màncháng de jiàqī.',ex_vn:'Ủ rũ mấy ngày, tôi đành phải bắt đầu lên kế hoạch làm sao cho qua kỳ nghỉ dài đằng đẵng.',
   exList:[
     {zh:'无精打采了几天之后，我不得不开始规划怎样熬过漫长的假期。',py:'Wújīng-dǎcǎile jǐ tiān zhīhòu, wǒ bùdébù kāishǐ guīhuà zěnyàng áoguò màncháng de jiàqī.',vn:'Ủ rũ mấy ngày, tôi đành phải bắt đầu lên kế hoạch làm sao cho qua kỳ nghỉ dài đằng đẵng.'},
     {zh:'最近我的朋友小李有些反常，每天都无精打采的。',py:'Zuìjìn wǒ de péngyou Xiǎo Lǐ yǒuxiē fǎncháng, měi tiān dōu wújīng-dǎcǎi de.',vn:'Dạo này cậu bạn Tiểu Lý của tôi hơi khác thường, ngày nào cũng ủ rũ.'},
     {zh:'他考试没考好，无精打采地走出了教室。',py:'Tā kǎoshì méi kǎohǎo, wújīng-dǎcǎi de zǒuchūle jiàoshì.',vn:'Thi không tốt, cậu ấy thẫn thờ bước ra khỏi lớp.'}
   ],
   colloFull:[
     {zh:'无精打采的样子',py:'wújīng-dǎcǎi de yàngzi',vn:'dáng vẻ ủ rũ'},
     {zh:'无精打采地',py:'wújīng-dǎcǎi de',vn:'(làm gì) một cách uể oải'},
     {zh:'显得无精打采',py:'xiǎnde wújīng-dǎcǎi',vn:'trông phờ phạc'},
     {zh:'每天都无精打采的',py:'měi tiān dōu wújīng-dǎcǎi de',vn:'ngày nào cũng ủ rũ'}
   ],
   patterns:[
     {s:'Chủ ngữ + (显得) + 无精打采（的）',m:'Trông uể oải, ủ rũ'},
     {s:'无精打采地 + V',m:'Uể oải làm gì'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vì tối qua thức khuya nên cả ngày hôm nay tôi đều uể oải.',answer:'因为昨天晚上熬夜了，所以我今天一整天都无精打采的。',answerPy:'Yīnwèi zuótiān wǎnshang áoyè le, suǒyǐ wǒ jīntiān yì zhěng tiān dōu wújīng-dǎcǎi de.',
      note:'因为……所以……; thành ngữ làm vị ngữ, thêm 的 cuối câu cho tự nhiên.',pair:'因为……所以……'},
     {promptLang:'vi',prompt:'Cậu ấy càng thức khuya càng uể oải, học hành ngày càng sa sút.',answer:'他越熬夜越无精打采，学习也越来越差了。',answerPy:'Tā yuè áoyè yuè wújīng-dǎcǎi, xuéxí yě yuèláiyuè chà le.',
      note:'越 A 越 B (hai vế có quan hệ tỉ lệ) khác 越来越 (thay đổi theo thời gian).',pair:'越……越……'}
   ]},

  {n:28,zh:'规划',py:'guīhuà',pos:'Động từ',vn:'lập kế hoạch, quy hoạch',hv:'quy hoạch',em:'🗓️',lesson:1,
   explain:['Động từ: lên kế hoạch toàn diện, lâu dài: 规划未来, 规划假期.','Danh từ: bản quy hoạch, kế hoạch dài hạn: 城市规划, 职业规划.'],
   usage:'规划 + 未来 / 人生 / 时间; 做好规划; 城市规划. 规划 mang tính dài hạn, tổng thể hơn 计划.',
   collo:['规划未来','规划假期','城市规划','职业规划'],
   ex_zh:'我不得不开始规划怎样熬过漫长的假期。',ex_py:'Wǒ bùdébù kāishǐ guīhuà zěnyàng áoguò màncháng de jiàqī.',ex_vn:'Tôi đành phải bắt đầu lên kế hoạch làm sao cho qua kỳ nghỉ dài đằng đẵng.',
   exList:[
     {zh:'我不得不开始规划怎样熬过漫长的假期。',py:'Wǒ bùdébù kāishǐ guīhuà zěnyàng áoguò màncháng de jiàqī.',vn:'Tôi đành phải bắt đầu lên kế hoạch làm sao cho qua kỳ nghỉ dài đằng đẵng.'},
     {zh:'上大学以后，要早点儿规划自己的未来。',py:'Shàng dàxué yǐhòu, yào zǎo diǎnr guīhuà zìjǐ de wèilái.',vn:'Vào đại học rồi thì nên sớm vạch kế hoạch cho tương lai của mình.'},
     {zh:'这座城市的规划很合理，交通非常方便。',py:'Zhè zuò chéngshì de guīhuà hěn hélǐ, jiāotōng fēicháng fāngbiàn.',vn:'Quy hoạch của thành phố này rất hợp lý, giao thông vô cùng thuận tiện.'}
   ],
   colloFull:[
     {zh:'规划未来',py:'guīhuà wèilái',vn:'vạch kế hoạch tương lai'},
     {zh:'规划假期',py:'guīhuà jiàqī',vn:'lên kế hoạch kỳ nghỉ'},
     {zh:'城市规划',py:'chéngshì guīhuà',vn:'quy hoạch đô thị'},
     {zh:'职业规划',py:'zhíyè guīhuà',vn:'định hướng nghề nghiệp'},
     {zh:'做好规划',py:'zuòhǎo guīhuà',vn:'lập kế hoạch chu đáo'}
   ],
   patterns:[
     {s:'规划 + 怎样 / 如何 + V',m:'Lên kế hoạch làm thế nào …'},
     {s:'做好 + ……的规划',m:'Làm tốt kế hoạch …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Trước khi đi du lịch, tốt nhất nên lên kế hoạch lộ trình trước.',answer:'去旅行之前，最好先规划好路线。',answerPy:'Qù lǚxíng zhīqián, zuìhǎo xiān guīhuà hǎo lùxiàn.',
      note:'V + 好 (bổ ngữ kết quả: làm xong, làm tốt).',pair:'……之前 · V + 好'},
     {promptLang:'vi',prompt:'Chỉ khi sắp xếp thời gian hợp lý thì mới có thể vừa học tốt vừa chơi vui.',answer:'只有合理规划时间，才能既学好又玩好。',answerPy:'Zhǐyǒu hélǐ guīhuà shíjiān, cái néng jì xuéhǎo yòu wánhǎo.',
      note:'只有……才……; 既……又…….',pair:'只有……才……'}
   ]},

  {n:29,zh:'熬',py:'áo',pos:'Động từ',vn:'chịu đựng, cố vượt qua',hv:'ngao',em:'🕯️',lesson:1,
   explain:['Chịu đựng, gắng gượng vượt qua một khoảng thời gian khó khăn, buồn chán (熬过漫长的假期, 熬过困难的日子).','熬夜 = thức khuya (HSK 5). 熬 còn nghĩa nấu, ninh lâu: 熬粥, 熬药.'],
   usage:'熬过 + thời gian / khó khăn; 熬夜; 熬不住 (không chịu nổi). Đọc áo.',
   collo:['熬过假期','熬夜','熬不住','熬过困难'],
   ex_zh:'我不得不开始规划怎样熬过漫长的假期。',ex_py:'Wǒ bùdébù kāishǐ guīhuà zěnyàng áoguò màncháng de jiàqī.',ex_vn:'Tôi đành phải bắt đầu lên kế hoạch làm sao cho qua kỳ nghỉ dài đằng đẵng.',
   exList:[
     {zh:'我不得不开始规划怎样熬过漫长的假期。',py:'Wǒ bùdébù kāishǐ guīhuà zěnyàng áoguò màncháng de jiàqī.',vn:'Tôi đành phải bắt đầu lên kế hoạch làm sao cho qua kỳ nghỉ dài đằng đẵng.'},
     {zh:'最难的日子已经熬过去了，以后会越来越好的。',py:'Zuì nán de rìzi yǐjīng áo guòqu le, yǐhòu huì yuèláiyuè hǎo de.',vn:'Những ngày khó khăn nhất đã qua rồi, sau này sẽ ngày càng tốt hơn.'},
     {zh:'为了准备考试，他连续熬了三个晚上。',py:'Wèile zhǔnbèi kǎoshì, tā liánxù áole sān ge wǎnshang.',vn:'Để chuẩn bị thi, cậu ấy thức trắng liền ba đêm.'}
   ],
   colloFull:[
     {zh:'熬过假期',py:'áoguò jiàqī',vn:'cố cho qua kỳ nghỉ'},
     {zh:'熬夜',py:'áoyè',vn:'thức khuya'},
     {zh:'熬不住',py:'áo bu zhù',vn:'không chịu nổi'},
     {zh:'熬过困难',py:'áoguò kùnnan',vn:'vượt qua khó khăn'},
     {zh:'熬粥',py:'áo zhōu',vn:'nấu cháo'}
   ],
   patterns:[
     {s:'熬过 + khoảng thời gian khó khăn',m:'Gắng vượt qua …'},
     {s:'熬不住 / 熬得住',m:'Không chịu nổi / chịu nổi'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần gắng qua được giai đoạn khó khăn nhất này thì mọi chuyện sẽ ổn thôi.',answer:'只要熬过这段最困难的日子，就会好起来的。',answerPy:'Zhǐyào áoguò zhè duàn zuì kùnnan de rìzi, jiù huì hǎo qǐlai de.',
      note:'只要……就……; Adj + 起来 = bắt đầu trở nên ….',pair:'只要……就……'},
     {promptLang:'vi',prompt:'Thức khuya liền mấy đêm, cuối cùng anh ấy không chịu nổi nữa.',answer:'连续熬了几个晚上，他终于熬不住了。',answerPy:'Liánxù áole jǐ ge wǎnshang, tā zhōngyú áo bu zhù le.',
      note:'V + 不住: bổ ngữ khả năng phủ định (không giữ/chịu được).',pair:'bổ ngữ khả năng V + 不住'}
   ]},

  {n:30,zh:'漫长',py:'màncháng',pos:'Tính từ',vn:'dài đằng đẵng',hv:'mạn trường',em:'🛤️',lesson:1,
   explain:['(Thời gian, con đường) rất dài, như không bao giờ hết.','Thường mang cảm giác chủ quan: chờ đợi, buồn chán nên thấy dài.'],
   usage:'漫长的 + 假期 / 岁月 / 冬天 / 道路 / 等待. Chủ yếu làm định ngữ.',
   collo:['漫长的假期','漫长的等待','漫长的岁月','漫长的冬天'],
   ex_zh:'我不得不开始规划怎样熬过漫长的假期。',ex_py:'Wǒ bùdébù kāishǐ guīhuà zěnyàng áoguò màncháng de jiàqī.',ex_vn:'Tôi đành phải bắt đầu lên kế hoạch làm sao cho qua kỳ nghỉ dài đằng đẵng.',
   exList:[
     {zh:'我不得不开始规划怎样熬过漫长的假期。',py:'Wǒ bùdébù kāishǐ guīhuà zěnyàng áoguò màncháng de jiàqī.',vn:'Tôi đành phải bắt đầu lên kế hoạch làm sao cho qua kỳ nghỉ dài đằng đẵng.'},
     {zh:'经过漫长的等待，他终于收到了录取通知书。',py:'Jīngguò màncháng de děngdài, tā zhōngyú shōudàole lùqǔ tōngzhīshū.',vn:'Sau thời gian chờ đợi dài đằng đẵng, cuối cùng cậu ấy cũng nhận được giấy báo trúng tuyển.'},
     {zh:'人生的道路是漫长的，一次失败算不了什么。',py:'Rénshēng de dàolù shì màncháng de, yí cì shībài suàn bu liǎo shénme.',vn:'Đường đời còn dài, một lần thất bại chẳng đáng là gì.'}
   ],
   colloFull:[
     {zh:'漫长的假期',py:'màncháng de jiàqī',vn:'kỳ nghỉ dài đằng đẵng'},
     {zh:'漫长的等待',py:'màncháng de děngdài',vn:'sự chờ đợi dài dằng dặc'},
     {zh:'漫长的岁月',py:'màncháng de suìyuè',vn:'năm tháng dài lâu'},
     {zh:'漫长的冬天',py:'màncháng de dōngtiān',vn:'mùa đông dài'},
     {zh:'漫长的道路',py:'màncháng de dàolù',vn:'con đường dài'}
   ],
   patterns:[
     {s:'漫长的 + N (thời gian / con đường)',m:'… dài đằng đẵng'},
     {s:'经过漫长的……，终于……',m:'Trải qua … dài đằng đẵng, cuối cùng …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Trải qua bao năm tháng chờ đợi, cuối cùng cả nhà cũng được đoàn tụ.',answer:'经过漫长的等待，一家人终于团圆了。',answerPy:'Jīngguò màncháng de děngdài, yì jiā rén zhōngyú tuányuán le.',
      note:'经过 + quá trình，终于 + kết quả.',pair:'经过……终于……'},
     {promptLang:'vi',prompt:'Một mình ở nước ngoài, tôi thấy mùa đông dài đặc biệt.',answer:'一个人在国外，我觉得冬天特别漫长。',answerPy:'Yí ge rén zài guówài, wǒ juéde dōngtiān tèbié màncháng.',
      note:'漫长 làm vị ngữ sau phó từ mức độ 特别.',pair:'phó từ mức độ + Adj'}
   ]},

  {n:31,zh:'寂静',py:'jìjìng',pos:'Tính từ',vn:'vắng vẻ, yên tĩnh',hv:'tịch tĩnh',em:'🤫',lesson:1,
   explain:['Yên lặng hoàn toàn, không một tiếng động (văn viết, thường tả môi trường, cảnh vật).','Mức độ mạnh hơn 安静; còn gợi cảm giác vắng người.'],
   usage:'寂静的夜晚, 寂静得很, 在寂静中, 打破寂静. Không dùng tả tính người: không nói 他很寂静 (dùng 安静 / 文静).',
   collo:['寂静的夜晚','寂静得很','在寂静中','打破寂静'],
   ex_zh:'假期的校园寂静得很，我在图书馆看书。',ex_py:'Jiàqī de xiàoyuán jìjìng de hěn, wǒ zài túshūguǎn kàn shū.',ex_vn:'Sân trường ngày nghỉ vắng lặng vô cùng, tôi đọc sách ở thư viện.',
   exList:[
     {zh:'假期的校园寂静得很，我在图书馆看书。',py:'Jiàqī de xiàoyuán jìjìng de hěn, wǒ zài túshūguǎn kàn shū.',vn:'Sân trường ngày nghỉ vắng lặng vô cùng, tôi đọc sách ở thư viện.'},
     {zh:'我发现在难得的寂静中工作是那么美好。',py:'Wǒ fāxiàn zài nándé de jìjìng zhōng gōngzuò shì nàme měihǎo.',vn:'Tôi nhận ra làm việc trong sự yên tĩnh hiếm có thật tuyệt vời biết bao.'},
     {zh:'一阵电话铃声打破了夜晚的寂静。',py:'Yí zhèn diànhuà língshēng dǎpòle yèwǎn de jìjìng.',vn:'Một hồi chuông điện thoại phá tan sự tĩnh mịch của đêm khuya.'}
   ],
   colloFull:[
     {zh:'寂静的夜晚',py:'jìjìng de yèwǎn',vn:'đêm tĩnh mịch'},
     {zh:'寂静得很',py:'jìjìng de hěn',vn:'vắng lặng lắm'},
     {zh:'在寂静中',py:'zài jìjìng zhōng',vn:'trong sự tĩnh lặng'},
     {zh:'打破寂静',py:'dǎpò jìjìng',vn:'phá tan sự yên tĩnh'}
   ],
   patterns:[
     {s:'Adj + 得很',m:'… lắm (寂静得很 = vắng lặng lắm)'},
     {s:'打破 + ……的寂静',m:'Phá tan sự tĩnh lặng của …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đêm khuya, cả khu ký túc xá vắng lặng đến mức không có lấy một tiếng động.',answer:'深夜，整个宿舍楼寂静得一点儿声音也没有。',answerPy:'Shēnyè, zhěnggè sùshèlóu jìjìng de yìdiǎnr shēngyīn yě méiyǒu.',
      note:'Adj + 得 + bổ ngữ; 一点儿 + N + 也没有 = không có chút nào.',pair:'一点儿……也没有'},
     {promptLang:'vi',prompt:'Tiếng khóc của đứa bé bỗng phá tan sự yên tĩnh của buổi sáng.',answer:'孩子的哭声忽然打破了早晨的寂静。',answerPy:'Háizi de kūshēng hūrán dǎpòle zǎochen de jìjìng.',
      note:'忽然 đứng trước động từ; 打破 + 的寂静.',pair:'忽然'}
   ]},

  {n:32,zh:'稿件',py:'gǎojiàn',pos:'Danh từ',vn:'bài viết, bản thảo',hv:'cảo kiện',em:'📝',lesson:1,
   explain:['Bài viết, bản thảo gửi đến tòa soạn báo, tạp chí, nhà xuất bản (gọi chung).'],
   usage:'写稿件, 修改稿件, 一篇稿件, 给杂志社写稿件. Lượng từ: 篇, 份. "Gửi bài" thường nói 投稿.',
   collo:['写稿件','一篇稿件','修改稿件','给杂志社写稿件'],
   ex_zh:'我在图书馆看书，给杂志社写稿件。',ex_py:'Wǒ zài túshūguǎn kàn shū, gěi zázhìshè xiě gǎojiàn.',ex_vn:'Tôi đọc sách ở thư viện, viết bài cho tòa soạn tạp chí.',
   exList:[
     {zh:'我在图书馆看书，给杂志社写稿件。',py:'Wǒ zài túshūguǎn kàn shū, gěi zázhìshè xiě gǎojiàn.',vn:'Tôi đọc sách ở thư viện, viết bài cho tòa soạn tạp chí.'},
     {zh:'编辑说我的稿件写得不错，只需要改几个地方。',py:'Biānjí shuō wǒ de gǎojiàn xiě de búcuò, zhǐ xūyào gǎi jǐ ge dìfang.',vn:'Biên tập viên nói bài của tôi viết khá tốt, chỉ cần sửa vài chỗ.'},
     {zh:'这篇稿件明天就要交，今晚我得熬夜修改。',py:'Zhè piān gǎojiàn míngtiān jiù yào jiāo, jīnwǎn wǒ děi áoyè xiūgǎi.',vn:'Bài này mai phải nộp rồi, tối nay tôi phải thức khuya sửa.'}
   ],
   colloFull:[
     {zh:'写稿件',py:'xiě gǎojiàn',vn:'viết bài'},
     {zh:'一篇稿件',py:'yì piān gǎojiàn',vn:'một bài viết'},
     {zh:'修改稿件',py:'xiūgǎi gǎojiàn',vn:'sửa bản thảo'},
     {zh:'给杂志社写稿件',py:'gěi zázhìshè xiě gǎojiàn',vn:'viết bài cho tạp chí'}
   ],
   patterns:[
     {s:'给 + 报社 / 杂志社 + 写稿件',m:'Viết bài cho báo / tạp chí'},
     {s:'一篇 / 一份 + 稿件',m:'Một bài viết'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bài viết này tuy đã sửa ba lần nhưng biên tập vẫn chưa hài lòng.',answer:'这篇稿件虽然已经改了三遍，但是编辑还是不满意。',answerPy:'Zhè piān gǎojiàn suīrán yǐjīng gǎile sān biàn, dànshì biānjí háishi bù mǎnyì.',
      note:'虽然 có thể đứng sau chủ ngữ; 遍 là lượng từ động tác (từ đầu đến cuối).',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Tôi viết bài cho tạp chí không chỉ để kiếm tiền mà còn để rèn luyện bản thân.',answer:'我给杂志社写稿件，不仅是为了赚钱，更是为了锻炼自己。',answerPy:'Wǒ gěi zázhìshè xiě gǎojiàn, bùjǐn shì wèile zhuàn qián, gèng shì wèile duànliàn zìjǐ.',
      note:'不仅……更…… nhấn mạnh vế sau quan trọng hơn.',pair:'不仅……更……'}
   ]},

  {n:33,zh:'难得',py:'nándé',pos:'Tính từ',vn:'hiếm có, khó có được',hv:'nan đắc',em:'💎',lesson:1,
   explain:['Khó mà có được, quý hiếm (难得的机会, 人才难得).','Làm phó từ: hiếm khi, ít khi xảy ra (他难得回一次家).'],
   usage:'难得的 + N; 难得 + V (hiếm khi); 真难得! Chú ý: 难得 là "hiếm, quý", không phải "khó đạt được" theo nghĩa khó khăn.',
   collo:['难得的机会','难得的寂静','难得见面','十分难得'],
   ex_zh:'我发现在难得的寂静中工作是那么美好。',ex_py:'Wǒ fāxiàn zài nándé de jìjìng zhōng gōngzuò shì nàme měihǎo.',ex_vn:'Tôi nhận ra làm việc trong sự yên tĩnh hiếm có thật tuyệt vời biết bao.',
   exList:[
     {zh:'我发现在难得的寂静中工作是那么美好。',py:'Wǒ fāxiàn zài nándé de jìjìng zhōng gōngzuò shì nàme měihǎo.',vn:'Tôi nhận ra làm việc trong sự yên tĩnh hiếm có thật tuyệt vời biết bao.'},
     {zh:'这是一个难得的机会，你一定要好好把握。',py:'Zhè shì yí ge nándé de jīhuì, nǐ yídìng yào hǎohāo bǎwò.',vn:'Đây là cơ hội hiếm có, cậu nhất định phải nắm cho chắc.'},
     {zh:'他工作太忙了，一年难得回一次家。',py:'Tā gōngzuò tài máng le, yì nián nándé huí yí cì jiā.',vn:'Anh ấy bận quá, một năm hiếm khi về nhà được một lần.'}
   ],
   colloFull:[
     {zh:'难得的机会',py:'nándé de jīhuì',vn:'cơ hội hiếm có'},
     {zh:'难得的寂静',py:'nándé de jìjìng',vn:'sự yên tĩnh hiếm có'},
     {zh:'难得见面',py:'nándé jiànmiàn',vn:'hiếm khi gặp mặt'},
     {zh:'十分难得',py:'shífēn nándé',vn:'vô cùng quý hiếm'}
   ],
   patterns:[
     {s:'难得的 + N',m:'… hiếm có'},
     {s:'Chủ ngữ + 难得 + V (一次)',m:'Hiếm khi làm gì'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Anh ấy bận thế mà vẫn đến dự sinh nhật tôi, thật là hiếm có.',answer:'他那么忙还来参加我的生日会，真是太难得了。',answerPy:'Tā nàme máng hái lái cānjiā wǒ de shēngrìhuì, zhēn shì tài nándé le.',
      note:'还 = vậy mà vẫn; 太……了 cảm thán.',pair:'太……了'},
     {promptLang:'vi',prompt:'Cơ hội hiếm có như vậy, dù khó đến mấy cũng phải thử một lần.',answer:'机会这么难得，再难也要试一试。',answerPy:'Jīhuì zhème nándé, zài nán yě yào shì yi shì.',
      note:'再 + Adj + 也……: dù … đến mấy cũng ….',pair:'再……也……'}
   ]},

  {n:34,zh:'心疼',py:'xīnténg',pos:'Động từ',vn:'đau lòng, thương xót; tiếc',hv:'tâm đông',em:'💔',lesson:1,
   explain:['Thương xót, xót xa (thường với người mình yêu thương: con cái, bố mẹ): 看到孩子瘦了，妈妈很心疼.','Tiếc (của, tiền): 心疼钱.'],
   usage:'心疼 + người / của; 满是心疼, 让人心疼. Có thể thêm 很 / 非常.',
   collo:['满是心疼','心疼孩子','心疼钱','让人心疼'],
   ex_zh:'母亲第一眼看到我时，脸上满是心疼。',ex_py:'Mǔqīn dì-yī yǎn kàndào wǒ shí, liǎn shang mǎn shì xīnténg.',ex_vn:'Lúc mẹ vừa nhìn thấy tôi, gương mặt bà đầy vẻ xót xa.',
   exList:[
     {zh:'母亲第一眼看到我时，脸上满是心疼。',py:'Mǔqīn dì-yī yǎn kàndào wǒ shí, liǎn shang mǎn shì xīnténg.',vn:'Lúc mẹ vừa nhìn thấy tôi, gương mặt bà đầy vẻ xót xa.'},
     {zh:'看到孩子累成这样，妈妈心疼得说不出话来。',py:'Kàndào háizi lèi chéng zhèyàng, māma xīnténg de shuō bu chū huà lai.',vn:'Thấy con mệt đến thế, mẹ xót xa đến nghẹn lời.'},
     {zh:'手机摔坏了，他心疼了好几天。',py:'Shǒujī shuāihuài le, tā xīnténgle hǎo jǐ tiān.',vn:'Điện thoại bị rơi hỏng, cậu ấy tiếc mấy ngày liền.'}
   ],
   colloFull:[
     {zh:'满是心疼',py:'mǎn shì xīnténg',vn:'đầy vẻ xót xa'},
     {zh:'心疼孩子',py:'xīnténg háizi',vn:'thương con'},
     {zh:'心疼钱',py:'xīnténg qián',vn:'tiếc tiền'},
     {zh:'让人心疼',py:'ràng rén xīnténg',vn:'khiến người ta xót xa'}
   ],
   patterns:[
     {s:'心疼 + người',m:'Thương xót ai'},
     {s:'……，让人心疼',m:'… khiến người ta xót xa'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bố mẹ thương con cũng không nên việc gì cũng làm thay con.',answer:'父母心疼孩子，也不应该什么事都替孩子做。',answerPy:'Fùmǔ xīnténg háizi, yě bù yīnggāi shénme shì dōu tì háizi zuò.',
      note:'什么 + N + 都 = mọi …; 替 + người + V = làm thay ai.',pair:'什么……都……'},
     {promptLang:'vi',prompt:'Nhìn nếp nhăn trên mặt bố, tôi xót xa đến mức không nói nên lời.',answer:'看到爸爸脸上的皱纹，我心疼得说不出话来。',answerPy:'Kàndào bàba liǎn shang de zhòuwén, wǒ xīnténg de shuō bu chū huà lai.',
      note:'V + 得 + bổ ngữ khả năng (说不出话来) chỉ mức độ.',pair:'V + 得 + bổ ngữ'}
   ]},

  {n:35,zh:'掩饰',py:'yǎnshì',pos:'Động từ',vn:'che đậy, che giấu (khuyết điểm, cảm xúc)',hv:'yểm sức',em:'🎭',lesson:1,
   explain:['Dùng cách nào đó để che đi, không cho người khác thấy (cảm xúc thật, khuyết điểm, sai lầm).','Tân ngữ thường là 情绪, 感情, 错误, 缺点, 紧张.'],
   usage:'掩饰 + 情绪 / 错误 / 缺点; 掩饰不住 (không giấu nổi); 被……掩饰起来. So với 隐瞒: 掩饰 che đi bề ngoài (nét mặt, cảm xúc, khuyết điểm); 隐瞒 giấu kín sự thật, không cho người khác biết.',
   collo:['掩饰情绪','掩饰错误','掩饰不住','掩饰起来'],
   ex_zh:'但瞬间那情绪就被她掩饰起来。',ex_py:'Dàn shùnjiān nà qíngxù jiù bèi tā yǎnshì qǐlai.',ex_vn:'Nhưng chỉ trong nháy mắt cảm xúc ấy đã bị bà che giấu đi.',
   exList:[
     {zh:'但瞬间那情绪就被她掩饰起来。',py:'Dàn shùnjiān nà qíngxù jiù bèi tā yǎnshì qǐlai.',vn:'Nhưng chỉ trong nháy mắt cảm xúc ấy đã bị bà che giấu đi.'},
     {zh:'他想用笑容掩饰心里的紧张。',py:'Tā xiǎng yòng xiàoróng yǎnshì xīn li de jǐnzhāng.',vn:'Cậu ấy muốn dùng nụ cười để che giấu sự căng thẳng trong lòng.'},
     {zh:'听到获奖的消息，她掩饰不住内心的兴奋。',py:'Tīngdào huò jiǎng de xiāoxi, tā yǎnshì bu zhù nèixīn de xīngfèn.',vn:'Nghe tin mình đoạt giải, cô ấy không giấu nổi niềm phấn khởi.'}
   ],
   colloFull:[
     {zh:'掩饰情绪',py:'yǎnshì qíngxù',vn:'che giấu cảm xúc'},
     {zh:'掩饰错误',py:'yǎnshì cuòwù',vn:'che đậy sai lầm'},
     {zh:'掩饰不住',py:'yǎnshì bu zhù',vn:'không giấu nổi'},
     {zh:'掩饰起来',py:'yǎnshì qǐlai',vn:'che giấu đi'}
   ],
   patterns:[
     {s:'用……掩饰……',m:'Dùng … để che giấu …'},
     {s:'掩饰不住 + 内心的 + cảm xúc',m:'Không giấu nổi …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Biết sai thì sửa, đừng che giấu lỗi lầm của mình.',answer:'知道错了就改，不要掩饰自己的错误。',answerPy:'Zhīdào cuò le jiù gǎi, búyào yǎnshì zìjǐ de cuòwù.',
      note:'Câu điều kiện rút gọn: (如果) 知道错了，就改.',pair:'……就……'},
     {promptLang:'vi',prompt:'Dù có che giấu thế nào, đôi mắt vẫn để lộ nỗi buồn của cô ấy.',answer:'无论怎么掩饰，她的眼睛还是出卖了她的难过。',answerPy:'Wúlùn zěnme yǎnshì, tā de yǎnjing háishi chūmàile tā de nánguò.',
      note:'无论 + 怎么 + V，还是……: dù … thế nào vẫn ….',pair:'无论……还是……'}
   ]},

  {n:36,zh:'隐瞒',py:'yǐnmán',pos:'Động từ',vn:'giấu giếm, giấu kín',hv:'ẩn man',em:'🙊',lesson:1,
   explain:['Giấu kín sự thật, không để người khác biết (thường với người lẽ ra phải được biết).'],
   usage:'隐瞒 + 真相 / 事实 / 病情; 对 / 向 + người + 隐瞒; 毫不隐瞒. Tân ngữ là sự việc, sự thật.',
   collo:['隐瞒真相','隐瞒病情','对……隐瞒','千万别隐瞒'],
   ex_zh:'他们在隐瞒什么呢？',ex_py:'Tāmen zài yǐnmán shénme ne?',ex_vn:'Họ đang giấu điều gì vậy?',
   exList:[
     {zh:'他们在隐瞒什么呢？',py:'Tāmen zài yǐnmán shénme ne?',vn:'Họ đang giấu điều gì vậy?'},
     {zh:'他丢了工作，但怕妈妈担心，所以一直隐瞒着这件事。',py:'Tā diūle gōngzuò, dàn pà māma dānxīn, suǒyǐ yìzhí yǐnmánzhe zhè jiàn shì.',vn:'Anh ấy mất việc nhưng sợ mẹ lo nên vẫn luôn giấu chuyện này.'},
     {zh:'如果你遇到了什么困难，千万别隐瞒，告诉我，我们一起想办法。',py:'Rúguǒ nǐ yùdàole shénme kùnnan, qiānwàn bié yǐnmán, gàosu wǒ, wǒmen yìqǐ xiǎng bànfǎ.',vn:'Nếu cậu gặp khó khăn gì thì đừng giấu, nói cho tớ biết, chúng ta cùng nghĩ cách.'}
   ],
   colloFull:[
     {zh:'隐瞒真相',py:'yǐnmán zhēnxiàng',vn:'che giấu sự thật'},
     {zh:'隐瞒病情',py:'yǐnmán bìngqíng',vn:'giấu bệnh tình'},
     {zh:'对……隐瞒',py:'duì……yǐnmán',vn:'giấu ai'},
     {zh:'千万别隐瞒',py:'qiānwàn bié yǐnmán',vn:'đừng giấu giếm'},
     {zh:'毫不隐瞒',py:'háo bù yǐnmán',vn:'không hề giấu giếm'}
   ],
   patterns:[
     {s:'对 / 向 + người + 隐瞒 + sự việc',m:'Giấu ai chuyện gì'},
     {s:'一直隐瞒着……',m:'Vẫn luôn giấu …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Sở dĩ bố mẹ giấu tôi bệnh tình là vì sợ tôi lo lắng.',answer:'父母之所以对我隐瞒病情，是因为怕我担心。',answerPy:'Fùmǔ zhīsuǒyǐ duì wǒ yǐnmán bìngqíng, shì yīnwèi pà wǒ dānxīn.',
      note:'之所以 + kết quả，是因为 + nguyên nhân.',pair:'之所以……是因为……'},
     {promptLang:'vi',prompt:'Dù sự thật có khiến người ta buồn, tôi cũng mong cậu đừng giấu tôi.',answer:'即使真相让人难过，我也希望你别对我隐瞒。',answerPy:'Jíshǐ zhēnxiàng ràng rén nánguò, wǒ yě xīwàng nǐ bié duì wǒ yǐnmán.',
      note:'即使 + giả thiết，也 + kết quả không đổi.',pair:'即使……也……'}
   ]},

  {n:37,zh:'唠叨',py:'láodao',pos:'Động từ',vn:'lải nhải, nói dông dài',hv:'lao thao',em:'🗣️',lesson:1,
   explain:['Nói đi nói lại mãi một chuyện, nói nhiều không dứt (thường chỉ bố mẹ, người lớn tuổi).','Trong bài: mẹ rầu rĩ thủ thỉ với bố về con — sắc thái thân mật, không hẳn chê.'],
   usage:'跟 + người + 唠叨; 唠叨个没完; 爱唠叨; 别唠叨了. Thường mang ý hơi phàn nàn.',
   collo:['跟……唠叨','唠叨个没完','爱唠叨','别唠叨了'],
   ex_zh:'半夜听到母亲还在跟父亲唠叨。',ex_py:'Bànyè tīngdào mǔqīn hái zài gēn fùqīn láodao.',ex_vn:'Nửa đêm tôi nghe mẹ vẫn còn thủ thỉ với bố.',
   exList:[
     {zh:'半夜听到母亲还在跟父亲唠叨。',py:'Bànyè tīngdào mǔqīn hái zài gēn fùqīn láodao.',vn:'Nửa đêm tôi nghe mẹ vẫn còn thủ thỉ với bố.'},
     {zh:'我妈妈特别爱唠叨，一件小事能说上半天。',py:'Wǒ māma tèbié ài láodao, yí jiàn xiǎoshì néng shuōshang bàntiān.',vn:'Mẹ tôi rất hay lải nhải, một chuyện nhỏ có thể nói cả buổi.'},
     {zh:'你别唠叨了，我已经知道错了。',py:'Nǐ bié láodao le, wǒ yǐjīng zhīdào cuò le.',vn:'Mẹ đừng nói nữa, con biết sai rồi mà.'}
   ],
   colloFull:[
     {zh:'跟……唠叨',py:'gēn……láodao',vn:'lải nhải với …'},
     {zh:'唠叨个没完',py:'láodao ge méi wán',vn:'nói mãi không dứt'},
     {zh:'爱唠叨',py:'ài láodao',vn:'hay lải nhải'},
     {zh:'别唠叨了',py:'bié láodao le',vn:'đừng lải nhải nữa'}
   ],
   patterns:[
     {s:'跟 + người + 唠叨',m:'Lải nhải với ai'},
     {s:'唠叨个没完',m:'Nói mãi không dứt'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Hồi nhỏ tôi rất ghét mẹ lải nhải, bây giờ ngược lại lại rất muốn nghe mẹ nói.',answer:'小时候我很讨厌妈妈唠叨，现在反而很想听她唠叨。',answerPy:'Xiǎoshíhou wǒ hěn tǎoyàn māma láodao, xiànzài fǎn\'ér hěn xiǎng tīng tā láodao.',
      note:'反而: kết quả ngược với điều trước đó.',pair:'反而'},
     {promptLang:'vi',prompt:'Mẹ tôi hễ thấy tôi chơi điện thoại là nói mãi không thôi.',answer:'妈妈一看见我玩手机就唠叨个没完。',answerPy:'Māma yí kànjiàn wǒ wán shǒujī jiù láodao ge méi wán.',
      note:'一……就……; V + 个没完 = làm mãi không dứt.',pair:'一……就……'}
   ]},

  {n:38,zh:'吃苦',py:'chī kǔ',pos:'Động từ',vn:'chịu khổ, chịu cực',hv:'ngật khổ',em:'💪',lesson:1,
   explain:['Chịu đựng gian khổ, vất vả. Là động từ ly hợp: 吃了很多苦, 吃过苦.','能吃苦 = chịu được khổ, chịu khó — lời khen trong công việc.'],
   usage:'吃苦 / 吃了不少苦 / 能吃苦 / 吃苦耐劳 (chịu thương chịu khó). Không mang tân ngữ phía sau: không nói 吃苦工作.',
   collo:['能吃苦','吃了不少苦','吃苦耐劳','怕吃苦'],
   ex_zh:'孩子比在家时瘦多了，肯定是吃苦了。',ex_py:'Háizi bǐ zài jiā shí shòu duō le, kěndìng shì chī kǔ le.',ex_vn:'Con gầy hơn hồi ở nhà nhiều quá, chắc chắn là đã chịu khổ rồi.',
   exList:[
     {zh:'孩子比在家时瘦多了，肯定是吃苦了。',py:'Háizi bǐ zài jiā shí shòu duō le, kěndìng shì chī kǔ le.',vn:'Con gầy hơn hồi ở nhà nhiều quá, chắc chắn là đã chịu khổ rồi.'},
     {zh:'总有一天她会明白的，不吃苦，怎么长本事？',py:'Zǒng yǒu yì tiān tā huì míngbai de, bù chī kǔ, zěnme zhǎng běnshi?',vn:'Rồi sẽ có ngày con hiểu thôi, không chịu khổ thì làm sao có bản lĩnh?'},
     {zh:'他小时候家里很穷，吃了不少苦。',py:'Tā xiǎoshíhou jiā li hěn qióng, chīle bù shǎo kǔ.',vn:'Hồi nhỏ nhà anh ấy rất nghèo, anh ấy đã chịu nhiều khổ cực.'}
   ],
   colloFull:[
     {zh:'能吃苦',py:'néng chī kǔ',vn:'chịu được khổ'},
     {zh:'吃了不少苦',py:'chīle bù shǎo kǔ',vn:'chịu nhiều khổ cực'},
     {zh:'吃苦耐劳',py:'chīkǔ-nàiláo',vn:'chịu thương chịu khó'},
     {zh:'怕吃苦',py:'pà chī kǔ',vn:'sợ khổ'}
   ],
   patterns:[
     {s:'吃 + 了 / 过 + (不少) + 苦',m:'Đã chịu nhiều khổ cực (động từ ly hợp)'},
     {s:'不吃苦，怎么……？',m:'Không chịu khổ thì làm sao …? (câu hỏi tu từ)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Người trẻ không nên sợ khổ, bởi vì chịu khổ cũng là một cách học.',answer:'年轻人不应该怕吃苦，因为吃苦也是一种学习。',answerPy:'Niánqīngrén bù yīnggāi pà chī kǔ, yīnwèi chī kǔ yě shì yì zhǒng xuéxí.',
      note:'Vế sau có 因为 giải thích nguyên nhân (đặt sau kết luận).',pair:'……，因为……'},
     {promptLang:'vi',prompt:'Ông bà tôi đã chịu biết bao khổ cực mới nuôi lớn được năm người con.',answer:'爷爷奶奶吃了很多苦，才把五个孩子养大。',answerPy:'Yéye nǎinai chīle hěn duō kǔ, cái bǎ wǔ ge háizi yǎngdà.',
      note:'……才……: phải trải qua điều kiện khó mới đạt được; câu 把 + V + bổ ngữ kết quả.',pair:'……才…… · câu 把'}
   ]},

  {n:39,zh:'欣慰',py:'xīnwèi',pos:'Tính từ',vn:'vui mừng và yên tâm',hv:'hân úy',em:'😌',lesson:1,
   explain:['Vui mừng và được an ủi, thấy yên lòng (thường là bậc cha mẹ, thầy cô khi thấy con / trò tiến bộ).'],
   usage:'感到欣慰, 让 / 令人欣慰, 欣慰地笑了. Sắc thái trang trọng, sâu lắng hơn 高兴.',
   collo:['感到欣慰','让人欣慰','欣慰地笑了','很欣慰'],
   ex_zh:'可她的变化还是挺让咱们欣慰的。',ex_py:'Kě tā de biànhuà háishi tǐng ràng zánmen xīnwèi de.',ex_vn:'Nhưng sự thay đổi của con vẫn khiến vợ chồng mình thấy an lòng.',
   exList:[
     {zh:'可她的变化还是挺让咱们欣慰的。',py:'Kě tā de biànhuà háishi tǐng ràng zánmen xīnwèi de.',vn:'Nhưng sự thay đổi của con vẫn khiến vợ chồng mình thấy an lòng.'},
     {zh:'看到学生们一天天进步，老师感到十分欣慰。',py:'Kàndào xuéshengmen yì tiāntiān jìnbù, lǎoshī gǎndào shífēn xīnwèi.',vn:'Thấy học trò tiến bộ từng ngày, thầy giáo vô cùng vui lòng.'},
     {zh:'听到儿子找到了工作，妈妈欣慰地笑了。',py:'Tīngdào érzi zhǎodàole gōngzuò, māma xīnwèi de xiào le.',vn:'Nghe tin con trai tìm được việc, mẹ mỉm cười mãn nguyện.'}
   ],
   colloFull:[
     {zh:'感到欣慰',py:'gǎndào xīnwèi',vn:'cảm thấy an lòng'},
     {zh:'让人欣慰',py:'ràng rén xīnwèi',vn:'khiến người ta vui lòng'},
     {zh:'欣慰地笑了',py:'xīnwèi de xiào le',vn:'mỉm cười mãn nguyện'},
     {zh:'很欣慰',py:'hěn xīnwèi',vn:'rất vui lòng'}
   ],
   patterns:[
     {s:'A 让 / 令 B + (很) 欣慰',m:'A làm B vui mừng, yên lòng'},
     {s:'感到 + 欣慰',m:'Cảm thấy vui mừng, an lòng'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Điều khiến bố mẹ yên lòng nhất là con đã học được cách tự lập.',answer:'最让父母欣慰的是，孩子学会了独立。',answerPy:'Zuì ràng fùmǔ xīnwèi de shì, háizi xuéhuìle dúlì.',
      note:'最……的是……: điều … nhất là ….',pair:'最……的是……'},
     {promptLang:'vi',prompt:'Tuy con không đỗ trường tốt nhất, nhưng thấy con cố gắng như vậy, bố mẹ vẫn rất vui lòng.',answer:'虽然孩子没考上最好的学校，但是看到他这么努力，父母还是很欣慰。',answerPy:'Suīrán háizi méi kǎoshàng zuì hǎo de xuéxiào, dànshì kàndào tā zhème nǔlì, fùmǔ háishi hěn xīnwèi.',
      note:'虽然……但是……还是……: tuy … nhưng vẫn ….',pair:'虽然……但是……'}
   ]},

  {n:40,zh:'本事',py:'běnshi',pos:'Danh từ',vn:'bản lĩnh, khả năng',hv:'bản sự',em:'🏆',lesson:1,
   explain:['Năng lực, tài cán, bản lĩnh làm được việc (khẩu ngữ, = 本领).','长本事 = có thêm bản lĩnh; 有本事 = giỏi, có tài (cũng dùng để thách thức: 有本事你来试试!).'],
   usage:'有本事, 没本事, 长本事, 本事大. 本事 khẩu ngữ hơn 本领.',
   collo:['长本事','有本事','没本事','本事大'],
   ex_zh:'不吃苦，怎么长本事？',ex_py:'Bù chī kǔ, zěnme zhǎng běnshi?',ex_vn:'Không chịu khổ thì làm sao có bản lĩnh?',
   exList:[
     {zh:'不吃苦，怎么长本事？',py:'Bù chī kǔ, zěnme zhǎng běnshi?',vn:'Không chịu khổ thì làm sao có bản lĩnh?'},
     {zh:'他很有本事，什么东西坏了都能修好。',py:'Tā hěn yǒu běnshi, shénme dōngxi huài le dōu néng xiūhǎo.',vn:'Anh ấy rất giỏi, đồ gì hỏng cũng sửa được.'},
     {zh:'有本事你自己做，别总让别人帮你。',py:'Yǒu běnshi nǐ zìjǐ zuò, bié zǒng ràng biérén bāng nǐ.',vn:'Giỏi thì tự làm đi, đừng lúc nào cũng nhờ người khác.'}
   ],
   colloFull:[
     {zh:'长本事',py:'zhǎng běnshi',vn:'tăng thêm bản lĩnh'},
     {zh:'有本事',py:'yǒu běnshi',vn:'có tài, giỏi'},
     {zh:'没本事',py:'méi běnshi',vn:'bất tài'},
     {zh:'本事大',py:'běnshi dà',vn:'bản lĩnh lớn'}
   ],
   patterns:[
     {s:'有本事 + (你) + V',m:'Giỏi thì … đi (thách thức)'},
     {s:'长本事',m:'Tăng thêm bản lĩnh'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Anh ấy bản lĩnh thật, việc khó đến mấy cũng giải quyết được.',answer:'他的本事真大，再难的事他都能解决。',answerPy:'Tā de běnshi zhēn dà, zài nán de shì tā dōu néng jiějué.',
      note:'再 + Adj + 的 + N + 都……: … đến mấy cũng ….',pair:'再……都……'},
     {promptLang:'vi',prompt:'Người thực sự có bản lĩnh thì không cần khoe khoang.',answer:'真正有本事的人是不需要炫耀的。',answerPy:'Zhēnzhèng yǒu běnshi de rén shì bù xūyào xuànyào de.',
      note:'是……的 nhấn mạnh ngữ khí khẳng định của cả câu.',pair:'是……的'}
   ]},

  {n:41,zh:'皱纹',py:'zhòuwén',pos:'Danh từ',vn:'nếp nhăn',hv:'trứu văn',em:'👴',lesson:1,
   explain:['Nếp nhăn trên da (mặt, tay) hoặc trên vải, giấy — dấu vết của tuổi tác, vất vả.'],
   usage:'长皱纹, 一道道皱纹, 眼角的皱纹, 满脸皱纹. Lượng từ: 道, 条.',
   collo:['眼角的皱纹','长皱纹','满脸皱纹','一道道皱纹'],
   ex_zh:'我看到了父母头上新增的白发和眼角越来越深的皱纹。',ex_py:'Wǒ kàndàole fùmǔ tóu shang xīn zēng de báifà hé yǎnjiǎo yuèláiyuè shēn de zhòuwén.',ex_vn:'Tôi nhìn thấy những sợi tóc bạc mới thêm trên đầu bố mẹ và nếp nhăn nơi khóe mắt ngày một sâu hơn.',
   exList:[
     {zh:'我看到了父母头上新增的白发和眼角越来越深的皱纹。',py:'Wǒ kàndàole fùmǔ tóu shang xīn zēng de báifà hé yǎnjiǎo yuèláiyuè shēn de zhòuwén.',vn:'Tôi nhìn thấy những sợi tóc bạc mới thêm trên đầu bố mẹ và nếp nhăn nơi khóe mắt ngày một sâu hơn.'},
     {zh:'奶奶脸上的皱纹越来越多了，可她的笑容还是那么慈祥。',py:'Nǎinai liǎn shang de zhòuwén yuèláiyuè duō le, kě tā de xiàoróng háishi nàme cíxiáng.',vn:'Nếp nhăn trên mặt bà ngày càng nhiều, nhưng nụ cười của bà vẫn hiền hậu như xưa.'},
     {zh:'每一道皱纹里都藏着父母为我们付出的辛苦。',py:'Měi yí dào zhòuwén li dōu cángzhe fùmǔ wèi wǒmen fùchū de xīnkǔ.',vn:'Trong mỗi nếp nhăn đều ẩn chứa bao vất vả bố mẹ đã hy sinh vì chúng ta.'}
   ],
   colloFull:[
     {zh:'眼角的皱纹',py:'yǎnjiǎo de zhòuwén',vn:'nếp nhăn nơi khóe mắt'},
     {zh:'长皱纹',py:'zhǎng zhòuwén',vn:'có nếp nhăn'},
     {zh:'满脸皱纹',py:'mǎn liǎn zhòuwén',vn:'mặt đầy nếp nhăn'},
     {zh:'一道道皱纹',py:'yí dàodào zhòuwén',vn:'từng nếp nhăn'}
   ],
   patterns:[
     {s:'……的皱纹越来越深 / 多',m:'Nếp nhăn … ngày càng sâu / nhiều'},
     {s:'一道道 + 皱纹',m:'Từng nếp nhăn'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ông càng lớn tuổi thì nếp nhăn trên mặt càng nhiều.',answer:'爷爷年纪越大，脸上的皱纹就越多。',answerPy:'Yéye niánjì yuè dà, liǎn shang de zhòuwén jiù yuè duō.',
      note:'Hai chủ ngữ khác nhau: A 越……，B 就越…….',pair:'越……越……'},
     {promptLang:'vi',prompt:'Mỗi lần nhìn nếp nhăn nơi khóe mắt mẹ, tôi đều thấy xót xa.',answer:'每次看到妈妈眼角的皱纹，我都很心疼。',answerPy:'Měi cì kàndào māma yǎnjiǎo de zhòuwén, wǒ dōu hěn xīnténg.',
      note:'每次……都……: lần nào … cũng ….',pair:'每次……都……'}
   ]},

  {n:42,zh:'顿时',py:'dùnshí',pos:'Phó từ',vn:'ngay tức khắc, lập tức',hv:'đốn thời',em:'💡',lesson:1,
   explain:['Biểu thị hành động, sự thay đổi xảy ra NGAY khi một tình huống xuất hiện hoặc liền sau một việc.','Chỉ dùng kể việc ĐÃ xảy ra, văn viết; không dùng cho mệnh lệnh hay tương lai (không nói 你顿时来).'],
   usage:'Vế trước: nguyên nhân / tình huống; vế sau: 顿时 + sự thay đổi. Có thể đứng trước chủ ngữ: 顿时，他的心里……. 立刻, 马上 thì dùng được cho mệnh lệnh, tương lai.',
   collo:['顿时明白了','顿时安静下来','顿时消失了','顿时急哭了'],
   ex_zh:'看到父母不舍的目光，我顿时什么都明白了。',ex_py:'Kàndào fùmǔ bù shě de mùguāng, wǒ dùnshí shénme dōu míngbai le.',ex_vn:'Nhìn thấy ánh mắt lưu luyến của bố mẹ, tôi bỗng chốc hiểu ra tất cả.',
   exList:[
     {zh:'看到父母不舍的目光，我顿时什么都明白了。',py:'Kàndào fùmǔ bù shě de mùguāng, wǒ dùnshí shénme dōu míngbai le.',vn:'Nhìn thấy ánh mắt lưu luyến của bố mẹ, tôi bỗng chốc hiểu ra tất cả.'},
     {zh:'于是，那些不满的情绪顿时消失了。',py:'Yúshì, nàxiē bùmǎn de qíngxù dùnshí xiāoshī le.',vn:'Thế là những bực bội ấy lập tức tan biến.'},
     {zh:'听了医生的话，顿时，他的心里又燃起了希望。',py:'Tīngle yīshēng de huà, dùnshí, tā de xīn li yòu ránqǐle xīwàng.',vn:'Nghe bác sĩ nói, ngay lập tức, trong lòng anh ấy lại nhen nhóm hy vọng.'}
   ],
   colloFull:[
     {zh:'顿时明白了',py:'dùnshí míngbai le',vn:'bỗng chốc hiểu ra'},
     {zh:'顿时安静下来',py:'dùnshí ānjìng xiàlai',vn:'lập tức im lặng'},
     {zh:'顿时消失了',py:'dùnshí xiāoshī le',vn:'lập tức tan biến'},
     {zh:'顿时急哭了',py:'dùnshí jí kū le',vn:'lập tức cuống quá bật khóc'}
   ],
   patterns:[
     {s:'(Tình huống)，顿时 + sự thay đổi',m:'…, ngay tức khắc …'},
     {s:'顿时，chủ ngữ + V',m:'Tức thì, … (đứng đầu vế)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Thầy giáo vừa bước vào, lớp học lập tức im phăng phắc.',answer:'老师一走进来，教室里顿时鸦雀无声。',answerPy:'Lǎoshī yì zǒu jìnlai, jiàoshì li dùnshí yāquè-wúshēng.',
      note:'一……，顿时……: vừa … thì lập tức …; 鸦雀无声 — bài 1.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Nghe cậu nói vậy, trong lòng tôi lập tức nhẹ nhõm hơn nhiều.',answer:'听你这么一说，我心里顿时轻松多了。',answerPy:'Tīng nǐ zhème yì shuō, wǒ xīn li dùnshí qīngsōng duō le.',
      note:'Adj + 多了: … hơn nhiều (so sánh với trước đó).',pair:'Adj + 多了'}
   ]},

  {n:43,zh:'不由得',py:'bùyóude',pos:'Phó từ',vn:'không kìm được, bất giác',hv:'bất do đắc',em:'🥹',lesson:1,
   explain:['Không tự chủ được, bất giác, không nhịn được mà … — ngữ cảnh thường có nguyên nhân khiến mình không kìm được.','Cấu trúc: 不由得 + cụm động từ / cụm chủ–vị.'],
   usage:'Vế trước nêu nguyên nhân (看到 / 听到 / 想到……), vế sau 不由得 + V. So với 不得不: 不由得 = bất giác (cảm xúc tự trào ra); 不得不 = buộc phải (không có lựa chọn).',
   collo:['不由得笑了','不由得担心','不由得热泪盈眶','不由得想起'],
   ex_zh:'我顿时什么都明白了，不由得热泪盈眶。',ex_py:'Wǒ dùnshí shénme dōu míngbai le, bùyóude rèlèi yíng kuàng.',ex_vn:'Tôi bỗng chốc hiểu ra tất cả, không kìm được nước mắt lưng tròng.',
   exList:[
     {zh:'我顿时什么都明白了，不由得热泪盈眶。',py:'Wǒ dùnshí shénme dōu míngbai le, bùyóude rèlèi yíng kuàng.',vn:'Tôi bỗng chốc hiểu ra tất cả, không kìm được nước mắt lưng tròng.'},
     {zh:'李朋带病上场参加比赛了，我不由得有些担心。',py:'Lǐ Péng dài bìng shàngchǎng cānjiā bǐsài le, wǒ bùyóude yǒuxiē dānxīn.',vn:'Lý Bằng mang bệnh ra sân thi đấu, tôi không khỏi có chút lo lắng.'},
     {zh:'看到这么精彩的表演，大家不由得鼓起掌来。',py:'Kàndào zhème jīngcǎi de biǎoyǎn, dàjiā bùyóude gǔqǐ zhǎng lai.',vn:'Xem màn biểu diễn đặc sắc như vậy, mọi người bất giác vỗ tay rào rào.'}
   ],
   colloFull:[
     {zh:'不由得笑了',py:'bùyóude xiào le',vn:'bất giác bật cười'},
     {zh:'不由得担心',py:'bùyóude dānxīn',vn:'không khỏi lo lắng'},
     {zh:'不由得热泪盈眶',py:'bùyóude rèlèi yíng kuàng',vn:'không kìm được rưng rưng nước mắt'},
     {zh:'不由得想起',py:'bùyóude xiǎngqǐ',vn:'bất giác nhớ lại'}
   ],
   patterns:[
     {s:'看到 / 听到 / 想到……，不由得 + V',m:'Thấy / nghe / nghĩ đến … bất giác …'},
     {s:'不由得 + cụm chủ–vị',m:'Bất giác (ai đó) …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nghe bài hát này, tôi bất giác nhớ lại quãng thời gian cấp ba.',answer:'听到这首歌，我不由得想起了高中的时光。',answerPy:'Tīngdào zhè shǒu gē, wǒ bùyóude xiǎngqǐle gāozhōng de shíguāng.',
      note:'想起 = V + 起 (bổ ngữ xu hướng: nhớ ra, gợi lại).',pair:'V + 起'},
     {promptLang:'vi',prompt:'Thấy dáng em gái mếu máo, tôi không nhịn được bật cười.',answer:'看到妹妹哭鼻子的样子，我不由得笑了起来。',answerPy:'Kàndào mèimei kū bízi de yàngzi, wǒ bùyóude xiàole qǐlai.',
      note:'V + 起来 = bắt đầu (và tiếp diễn) một hành động.',pair:'V + 起来'}
   ]},

  {n:44,zh:'热泪盈眶',py:'rèlèi yíng kuàng',pos:'Thành ngữ',vn:'rơm rớm nước mắt, nước mắt lưng tròng',hv:'nhiệt lệ doanh khuông',em:'🥲',lesson:1,
   explain:['Nước mắt nóng tràn đầy khóe mắt — vì quá xúc động, cảm động hoặc vui mừng (ít khi dùng cho đau buồn).','Làm vị ngữ; hay đi sau 感动得, 激动得, 不由得.'],
   usage:'感动得热泪盈眶, 激动得热泪盈眶, 不由得热泪盈眶, 让人热泪盈眶. Không mang tân ngữ.',
   collo:['感动得热泪盈眶','激动得热泪盈眶','不由得热泪盈眶','让人热泪盈眶'],
   ex_zh:'听了我的话，小李感动得热泪盈眶。',ex_py:'Tīngle wǒ de huà, Xiǎo Lǐ gǎndòng de rèlèi yíng kuàng.',ex_vn:'Nghe tôi nói, Tiểu Lý cảm động đến rưng rưng nước mắt.',
   exList:[
     {zh:'听了我的话，小李感动得热泪盈眶。',py:'Tīngle wǒ de huà, Xiǎo Lǐ gǎndòng de rèlèi yíng kuàng.',vn:'Nghe tôi nói, Tiểu Lý cảm động đến rưng rưng nước mắt.'},
     {zh:'我顿时什么都明白了，不由得热泪盈眶。',py:'Wǒ dùnshí shénme dōu míngbai le, bùyóude rèlèi yíng kuàng.',vn:'Tôi bỗng chốc hiểu ra tất cả, không kìm được nước mắt lưng tròng.'},
     {zh:'听到自己的名字时，她激动得热泪盈眶。',py:'Tīngdào zìjǐ de míngzi shí, tā jīdòng de rèlèi yíng kuàng.',vn:'Khi nghe gọi tên mình, cô ấy xúc động đến rơm rớm nước mắt.'}
   ],
   colloFull:[
     {zh:'感动得热泪盈眶',py:'gǎndòng de rèlèi yíng kuàng',vn:'cảm động rưng rưng nước mắt'},
     {zh:'激动得热泪盈眶',py:'jīdòng de rèlèi yíng kuàng',vn:'xúc động rơm rớm nước mắt'},
     {zh:'不由得热泪盈眶',py:'bùyóude rèlèi yíng kuàng',vn:'không kìm được nước mắt'},
     {zh:'让人热泪盈眶',py:'ràng rén rèlèi yíng kuàng',vn:'khiến người ta rưng rưng'}
   ],
   patterns:[
     {s:'感动 / 激动 + 得 + 热泪盈眶',m:'Xúc động đến rơm rớm nước mắt'},
     {s:'……让人热泪盈眶',m:'… khiến người ta rưng rưng'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bộ phim này cảm động quá, nhiều khán giả xem mà rưng rưng nước mắt.',answer:'这部电影太感人了，很多观众看得热泪盈眶。',answerPy:'Zhè bù diànyǐng tài gǎnrén le, hěn duō guānzhòng kàn de rèlèi yíng kuàng.',
      note:'V + 得 + thành ngữ làm bổ ngữ trạng thái.',pair:'V + 得 + bổ ngữ'},
     {promptLang:'vi',prompt:'Khi con gái lần đầu gọi "mẹ", cô ấy xúc động đến rơm rớm nước mắt.',answer:'女儿第一次叫“妈妈”的时候，她激动得热泪盈眶。',answerPy:'Nǚ\'ér dì-yī cì jiào "māma" de shíhou, tā jīdòng de rèlèi yíng kuàng.',
      note:'……的时候 làm trạng ngữ thời gian đứng đầu câu.',pair:'……的时候'}
   ]}
];

// ══════════════════════════════════════════
// BÀI KHOÁ — chép nguyên văn sách (tr. 25–26), mỗi đoạn một dòng
// ══════════════════════════════════════════
var dialogData = [
  {scene:'课文 · 父母之爱',
   preQuiz:[
     {q:'“我”的父母感情怎么样？',opts:['经常吵架','很和睦，很少吵架','互相不说话'],ans:1},
     {q:'父母对“我”的态度怎么样？',opts:['很严厉','和蔼、和气','对“我”不闻不问'],ans:1},
     {q:'上大学以前，“我”独立自主的能力怎么样？',opts:['很强','比别的孩子强','很差，从没离开过家'],ans:2},
     {q:'上大学以前，“我”对独立生活有什么感觉？',opts:['很害怕','无比向往','无所谓'],ans:1},
     {q:'刚开学的时候，宿舍里的同学一给家里打电话就怎么样？',opts:['哭鼻子','哈哈大笑','跟父母吵架'],ans:0},
     {q:'每到节假日，同学们怎么样？',opts:['留在学校学习','片刻不停地往家赶','一起去旅行'],ans:1},
     {q:'假期快到了，母亲在电话里让“我”做什么？',opts:['马上回家','甭回来，在学校看书或找份兼职','去亲戚家住'],ans:1},
     {q:'听了母亲的话，“我”心里怎么样？',opts:['很高兴','暗暗埋怨父母不体谅“我”','一点儿也不在乎'],ans:1},
     {q:'假期里，“我”在学校做了什么？',opts:['每天睡觉','在图书馆看书、给杂志社写稿件','去饭馆打工'],ans:1},
     {q:'大学三年级回家时，母亲第一眼看到“我”，脸上是什么表情？',opts:['很生气','满是心疼','很冷淡'],ans:1},
     {q:'半夜，母亲跟父亲唠叨什么？',opts:['孩子瘦了，吃苦了，但变化让他们欣慰','孩子花钱太多','孩子不听话'],ans:0},
     {q:'父亲认为孩子为什么需要吃苦？',opts:['不吃苦，长不了本事','为了给家里省钱','因为家里很穷'],ans:0},
     {q:'最后“我”明白了什么？',opts:['父母不爱“我”了','父母让“我”别回家，是为了让“我”学会独立','父母工作太忙，没时间管“我”'],ans:1}
   ],
   lines:[
    {sp:0,zh:'我从小生活在一个有爱的家庭，父母感情和睦，很少吵架，他们对我态度和蔼，说话和气，目光中都充满着慈祥。他们和我身边所有父母一样，给我很多宠爱，我也和身边所有的孩子一样，在跨进大学校门之前，从没有离开过家，独立自主的能力就更甭提了。脱离父母，独立生活对我具有巨大的诱惑，让我无比向往。',
     py:'Wǒ cóngxiǎo shēnghuó zài yí ge yǒu ài de jiātíng, fùmǔ gǎnqíng hémù, hěn shǎo chǎojià, tāmen duì wǒ tàidu hé\'ǎi, shuōhuà héqi, mùguāng zhōng dōu chōngmǎnzhe cíxiáng. Tāmen hé wǒ shēnbiān suǒyǒu fùmǔ yíyàng, gěi wǒ hěn duō chǒng\'ài, wǒ yě hé shēnbiān suǒyǒu de háizi yíyàng, zài kuàjìn dàxué xiàomén zhīqián, cóng méiyǒu líkāiguo jiā, dúlì zìzhǔ de nénglì jiù gèng béng tí le. Tuōlí fùmǔ, dúlì shēnghuó duì wǒ jùyǒu jùdà de yòuhuò, ràng wǒ wúbǐ xiàngwǎng.',
     vn:'Tôi lớn lên trong một gia đình đầy yêu thương. Bố mẹ sống hòa thuận, hiếm khi cãi nhau; với tôi, họ luôn hiền hòa, ăn nói ôn tồn, ánh mắt lúc nào cũng tràn đầy vẻ hiền từ. Cũng như mọi bậc cha mẹ quanh tôi, họ dành cho tôi rất nhiều cưng chiều; còn tôi cũng như mọi đứa trẻ khác, trước khi bước chân vào cổng trường đại học chưa từng xa nhà, khả năng tự lập tự chủ thì càng khỏi phải nói. Rời xa bố mẹ, sống độc lập là một sức cám dỗ rất lớn với tôi, khiến tôi vô cùng khao khát.'},
    {sp:0,zh:'几年以后，我终于在别的城市上了大学。第一次离开家，心里的孤独感一下子跑了出来。记得刚开学的时候，宿舍里的同学一给家里打电话就哭鼻子，每到节假日，大家更是片刻不停地往家赶。有同学回趟家要坐一夜的火车，这也阻挡不了大家回家的步伐。回家的快乐和被亲情包围的幸福感染了我，我也恨不得马上飞到父母跟前，与他们团圆。',
     py:'Jǐ nián yǐhòu, wǒ zhōngyú zài bié de chéngshì shàngle dàxué. Dì-yī cì líkāi jiā, xīn li de gūdúgǎn yíxiàzi pǎole chūlai. Jìde gāng kāixué de shíhou, sùshè li de tóngxué yì gěi jiā li dǎ diànhuà jiù kū bízi, měi dào jiéjiàrì, dàjiā gèng shì piànkè bù tíng de wǎng jiā gǎn. Yǒu tóngxué huí tàng jiā yào zuò yí yè de huǒchē, zhè yě zǔdǎng bù liǎo dàjiā huí jiā de bùfá. Huí jiā de kuàilè hé bèi qīnqíng bāowéi de xìngfú gǎnrǎnle wǒ, wǒ yě hènbude mǎshàng fēidào fùmǔ gēnqián, yǔ tāmen tuányuán.',
     vn:'Mấy năm sau, cuối cùng tôi cũng vào đại học ở một thành phố khác. Lần đầu xa nhà, nỗi cô đơn trong lòng bỗng chốc trào ra. Tôi nhớ hồi mới nhập học, các bạn cùng phòng hễ gọi điện về nhà là khóc nhè; cứ đến ngày lễ, ngày nghỉ, mọi người lại càng không ngừng một phút nào mà hối hả về nhà. Có bạn về nhà một chuyến phải ngồi tàu suốt một đêm, nhưng điều đó cũng không cản được bước chân về nhà của mọi người. Niềm vui được về nhà và hạnh phúc được tình thân bao bọc đã lây sang tôi, tôi cũng nóng lòng muốn bay ngay về bên bố mẹ, đoàn tụ với họ.'},
    {sp:0,zh:'假期终于要到了，我给父母打电话，告诉他们我准备回家。母亲却说，近来他们比较忙，要没什么事，就甭回来了，在学校看看书，或找份兼职做做。母亲的话使我酝酿已久的恋家情绪刹那间就没有了，我无法理解父母的反常，心中暗暗埋怨父母不体谅我。无精打采了几天之后，我不得不开始规划怎样熬过漫长的假期。',
     py:'Jiàqī zhōngyú yào dào le, wǒ gěi fùmǔ dǎ diànhuà, gàosu tāmen wǒ zhǔnbèi huí jiā. Mǔqīn què shuō, jìnlái tāmen bǐjiào máng, yào méi shénme shì, jiù béng huílai le, zài xuéxiào kànkan shū, huò zhǎo fèn jiānzhí zuòzuo. Mǔqīn de huà shǐ wǒ yùnniàng yǐ jiǔ de liànjiā qíngxù chànà jiān jiù méiyǒu le, wǒ wúfǎ lǐjiě fùmǔ de fǎncháng, xīn zhōng àn\'àn mányuàn fùmǔ bù tǐliàng wǒ. Wújīng-dǎcǎile jǐ tiān zhīhòu, wǒ bùdébù kāishǐ guīhuà zěnyàng áoguò màncháng de jiàqī.',
     vn:'Cuối cùng kỳ nghỉ cũng sắp đến, tôi gọi điện cho bố mẹ, báo rằng tôi chuẩn bị về nhà. Vậy mà mẹ lại nói dạo này bố mẹ khá bận, nếu không có việc gì thì khỏi về, cứ ở trường đọc sách, hoặc tìm một việc làm thêm mà làm. Lời mẹ khiến nỗi nhớ nhà tôi ấp ủ bấy lâu tan biến trong khoảnh khắc. Tôi không sao hiểu nổi sự khác thường của bố mẹ, trong lòng thầm trách bố mẹ không thông cảm cho mình. Ủ rũ mấy ngày, tôi đành phải bắt đầu lên kế hoạch làm sao cho qua kỳ nghỉ dài đằng đẵng.'},
    {sp:0,zh:'假期的校园寂静得很，我在图书馆看书，给杂志社写稿件，发现在难得的寂静中工作是那么美好。',
     py:'Jiàqī de xiàoyuán jìjìng de hěn, wǒ zài túshūguǎn kàn shū, gěi zázhìshè xiě gǎojiàn, fāxiàn zài nándé de jìjìng zhōng gōngzuò shì nàme měihǎo.',
     vn:'Sân trường ngày nghỉ vắng lặng vô cùng. Tôi đọc sách ở thư viện, viết bài cho tòa soạn tạp chí, và nhận ra rằng làm việc trong sự yên tĩnh hiếm có ấy thật tuyệt vời biết bao.'},
    {sp:0,zh:'大学三年级，我回了趟家。母亲第一眼看到我时，脸上满是心疼，但瞬间那情绪就被她掩饰起来，我心中飞快地闪过一丝疑惑：他们在隐瞒什么呢？',
     py:'Dàxué sān niánjí, wǒ huíle tàng jiā. Mǔqīn dì-yī yǎn kàndào wǒ shí, liǎn shang mǎn shì xīnténg, dàn shùnjiān nà qíngxù jiù bèi tā yǎnshì qǐlai, wǒ xīn zhōng fēikuài de shǎnguò yì sī yíhuò: tāmen zài yǐnmán shénme ne?',
     vn:'Năm ba đại học, tôi về nhà một chuyến. Lúc mẹ vừa nhìn thấy tôi, gương mặt bà đầy vẻ xót xa, nhưng chỉ trong nháy mắt cảm xúc ấy đã bị bà giấu đi. Trong lòng tôi thoáng lướt qua một chút nghi ngờ: bố mẹ đang giấu điều gì vậy?'},
    {sp:0,zh:'那晚，我躺下怎么也睡不着，半夜听到母亲还在跟父亲唠叨：“孩子比在家时瘦多了，肯定是吃苦了，可她的变化还是挺让咱们欣慰的。”接着是父亲的声音：“总有一天她会明白的，不吃苦，怎么长本事？社会不需要只会享福的人。”',
     py:'Nà wǎn, wǒ tǎngxia zěnme yě shuì bu zháo, bànyè tīngdào mǔqīn hái zài gēn fùqīn láodao: "Háizi bǐ zài jiā shí shòu duō le, kěndìng shì chī kǔ le, kě tā de biànhuà háishi tǐng ràng zánmen xīnwèi de." Jiēzhe shì fùqīn de shēngyīn: "Zǒng yǒu yì tiān tā huì míngbai de, bù chī kǔ, zěnme zhǎng běnshi? Shèhuì bù xūyào zhǐ huì xiǎngfú de rén."',
     vn:'Đêm đó, tôi nằm mãi mà không sao ngủ được. Nửa đêm, tôi nghe mẹ vẫn đang thủ thỉ với bố: "Con gầy hơn hồi ở nhà nhiều quá, chắc chắn là chịu khổ rồi, nhưng sự thay đổi của nó vẫn khiến vợ chồng mình thấy an lòng." Tiếp đó là giọng của bố: "Rồi sẽ có ngày con hiểu thôi. Không chịu khổ thì làm sao có bản lĩnh? Xã hội không cần những người chỉ biết hưởng phúc."'},
    {sp:0,zh:'我悄悄走出卧室，看到灯光下父母不舍的目光、头上新增的白发和眼角越来越深的皱纹，顿时什么都明白了，不由得热泪盈眶。',
     py:'Wǒ qiāoqiāo zǒuchū wòshì, kàndào dēngguāng xià fùmǔ bù shě de mùguāng, tóu shang xīn zēng de báifà hé yǎnjiǎo yuèláiyuè shēn de zhòuwén, dùnshí shénme dōu míngbai le, bùyóude rèlèi yíng kuàng.',
     vn:'Tôi khẽ bước ra khỏi phòng ngủ, nhìn thấy dưới ánh đèn ánh mắt lưu luyến của bố mẹ, những sợi tóc bạc mới thêm trên đầu và nếp nhăn nơi khóe mắt ngày một sâu hơn. Tôi bỗng chốc hiểu ra tất cả, không kìm được nước mắt lưng tròng.'}
   ]}
];

// ══════════════════════════════════════════
// PHÂN BIỆT TỪ GẦN NGHĨA 词语辨析
// Cặp 体谅—原谅 lấy từ sách (tr. 28–29, 做一做 theo đáp án sách);
// 不由得—不得不 (cả hai có trong bài khoá) và 顿时—立刻 (练一练 của 顿时 là đổi 立刻/马上 thành 顿时) do tự thêm
// ══════════════════════════════════════════
var synonymData = [
  {pair:'体谅 — 原谅',
   same:'Đều là động từ, đều có nghĩa "thông cảm, bỏ qua cho người khác", nhưng thường KHÔNG thay nhau được.',
   sameEx:{zh:'他那么忙，我们要多体谅他；他不是故意的，你就原谅他吧。',vn:'Anh ấy bận như vậy, chúng ta nên thông cảm cho anh ấy; cậu ấy không cố ý đâu, cậu tha thứ cho cậu ấy đi.'},
   items:[
     {word:'体谅',points:[
       'Đặt mình vào vị trí người khác để nghĩ cho họ, THẤU HIỂU hoàn cảnh, nỗi khó của họ.',
       'Trước có thể thêm phó từ mức độ: 很体谅, 非常体谅, 很能体谅.',
       'Lặp lại được: 体谅体谅.'
     ],ex:[{zh:'我的家离公司很远，孩子又小，老板很体谅我，允许我晚半个小时上班。',vn:'Nhà tôi xa công ty, con lại nhỏ, sếp rất thông cảm, cho phép tôi đi làm muộn nửa tiếng.'},
          {zh:'他家确实有特殊情况，你就体谅体谅他吧。',vn:'Nhà cậu ấy đúng là có hoàn cảnh đặc biệt, cậu thông cảm cho cậu ấy chút đi.'}]},
     {word:'原谅',points:[
       'Nghiêng về TỪ BỎ QUA sơ suất, lỗi lầm của người khác, không trách mắng hay trừng phạt.',
       'Trước thường KHÔNG thêm phó từ mức độ (không nói 很原谅).',
       'Thường không lặp lại.'
     ],ex:[{zh:'昨天我没写完作业，是因为我病了，所以老师原谅了我。',vn:'Hôm qua tôi không làm xong bài tập là vì bị ốm, nên cô giáo đã bỏ qua cho tôi.'},
          {zh:'妈妈，原谅我吧，我不是故意的。',vn:'Mẹ ơi, tha lỗi cho con, con không cố ý mà.'}]}
   ],
   quiz:[
     {sentence:'妈妈，＿＿我吧，我不是故意的，下次一定不这样了。',options:['体谅','原谅'],answer:1,why:'Xin bỏ qua LỖI mình đã gây ra (不是故意的, 下次不这样了) → 原谅.'},
     {sentence:'他太不＿＿我了，我又要工作又要做家务，他还批评我干得慢。',options:['体谅','原谅'],answer:0,why:'Trách người kia không hiểu cho HOÀN CẢNH vất vả của mình → 体谅; 不 + 体谅 là phủ định bình thường.'},
     {sentence:'小丽是个善良的女孩，很能＿＿别人。',options:['体谅','原谅'],answer:0,why:'很能 + V: phó từ mức độ đứng trước → chỉ 体谅; và ý là biết nghĩ cho người khác.'},
     {sentence:'虽然这次我＿＿了他，但他并没有就此改正自己的错误。',options:['体谅','原谅'],answer:1,why:'Vế sau có 错误 → việc bỏ qua lỗi lầm → 原谅.'}
   ],
   sgk:{
     chung:{t:'都是动词，都有给以谅解的意思，但一般不能换用。',vn:'Đều là động từ, đều có nghĩa thông cảm, bỏ qua cho người khác, nhưng thường không thay nhau được.'},
     khac:[
       {a:{t:'有“设身处地为人着想，给人谅解和理解”的意思。前边可以加副词，如“很、非常”等。',vn:'Có nghĩa "đặt mình vào hoàn cảnh người khác để nghĩ cho họ, thông cảm và thấu hiểu họ". Trước có thể thêm phó từ như 很, 非常.',vd:'我的家离公司很远，孩子又小，老板很体谅我，允许我晚半个小时上班。',vdVn:'Nhà tôi xa công ty, con lại nhỏ, sếp rất thông cảm, cho phép tôi đi làm muộn nửa tiếng.'},
        b:{t:'意思侧重于“对人的疏忽、过失或错误给以谅解，不加责备或惩罚”。前边一般不能加副词。',vn:'Nghĩa nghiêng về "bỏ qua sơ suất, lỗi lầm của người khác, không trách mắng hay trừng phạt". Trước thường không thêm phó từ.',vd:'昨天我没写完作业，是因为我病了，所以老师原谅了我。',vdVn:'Hôm qua tôi không làm xong bài tập là vì bị ốm, nên cô giáo đã bỏ qua cho tôi.'}},
       {a:{t:'可以重叠使用。',vn:'Có thể lặp lại.',vd:'他家确实有特殊情况，你就体谅体谅他吧。',vdVn:'Nhà cậu ấy đúng là có hoàn cảnh đặc biệt, cậu thông cảm cho cậu ấy chút đi.'},
        b:{t:'一般不重叠使用。',vn:'Thường không lặp lại.'}}
     ],
     lamThu:[
       {s:'妈妈，＿＿我吧，我不是故意的，下次一定不这样了。',dap:[false,true],
        giai:'Con xin mẹ bỏ qua lỗi lầm (不是故意的) → 原谅.'},
       {s:'他太不＿＿我了，我又要工作又要做家务，他还批评我干得慢。',dap:[true,false],
        giai:'Trách người kia không nghĩ cho hoàn cảnh vất vả của mình → 体谅.'},
       {s:'小丽是个善良的女孩，很能＿＿别人。',dap:[true,false],
        giai:'Có phó từ 很能 phía trước, nghĩa là biết nghĩ cho người khác → 体谅.'},
       {s:'虽然这次我＿＿了他，但他并没有就此改正自己的错误。',dap:[false,true],
        giai:'Nói về lỗi lầm (错误) được bỏ qua → 原谅.'}
     ]
   }},

  {pair:'不由得 — 不得不',
   same:'Đều có chữ 不, đều đứng trước động từ; tiếng Việt đôi khi đều dịch là "không thể không…", nhưng nghĩa khác hẳn. Cả hai đều xuất hiện trong bài khoá.',
   sameEx:{zh:'看到父母的白发，我不由得哭了；假期不能回家，我不得不留在学校。',vn:'Nhìn thấy tóc bạc của bố mẹ, tôi bất giác bật khóc; kỳ nghỉ không được về nhà, tôi đành phải ở lại trường.'},
   items:[
     {word:'不由得',points:[
       'Phó từ: BẤT GIÁC, không kìm được — cảm xúc, phản ứng tự trào ra.',
       'Hay đi sau 看到 / 听到 / 想到…… (có nguyên nhân gây xúc động).',
       'KHÔNG mang nghĩa bị ép buộc, không phải do mình quyết định.'
     ],ex:[{zh:'我顿时什么都明白了，不由得热泪盈眶。',vn:'Tôi bỗng chốc hiểu ra tất cả, không kìm được nước mắt lưng tròng.'},
          {zh:'看到这么精彩的表演，大家不由得鼓起掌来。',vn:'Xem màn biểu diễn đặc sắc như vậy, mọi người bất giác vỗ tay.'}]},
     {word:'不得不',points:[
       'BUỘC PHẢI, đành phải — vì hoàn cảnh, không có lựa chọn khác.',
       'Theo sau là hành động có chủ ý: 不得不放弃, 不得不加班, 不得不开始规划.',
       'Không dùng cho phản ứng cảm xúc tự nhiên (không nói 不得不热泪盈眶).'
     ],ex:[{zh:'无精打采了几天之后，我不得不开始规划怎样熬过漫长的假期。',vn:'Ủ rũ mấy ngày, tôi đành phải bắt đầu lên kế hoạch làm sao cho qua kỳ nghỉ dài.'},
          {zh:'下大雨了，比赛不得不推迟到明天。',vn:'Trời mưa to, trận đấu buộc phải hoãn sang ngày mai.'}]}
   ],
   quiz:[
     {sentence:'听到这个好消息，大家＿＿欢呼起来。',options:['不由得','不得不'],answer:0,why:'Niềm vui tự trào ra khi nghe tin tốt → 不由得 (bất giác).'},
     {sentence:'近来公司的事情太多，我＿＿放弃了酝酿已久的旅行。',options:['不由得','不得不'],answer:1,why:'Vì hoàn cảnh nên đành phải từ bỏ — hành động có chủ ý → 不得不.'},
     {sentence:'看到妈妈眼角的皱纹，我＿＿心疼起来。',options:['不由得','不得不'],answer:0,why:'Cảm xúc xót xa tự dâng lên → 不由得.'},
     {sentence:'下大雨了，比赛＿＿推迟到明天。',options:['不由得','不得不'],answer:1,why:'Buộc phải hoãn vì trời mưa, không có lựa chọn → 不得不.'}
   ]},

  {pair:'顿时 — 立刻',
   same:'Đều biểu thị sự việc xảy ra ngay sau một việc khác, rất nhanh. Khi kể lại một sự thay đổi đã xảy ra, nhiều khi thay nhau được.',
   sameEx:{zh:'老师一走进来，教室里顿时／立刻安静了下来。',vn:'Thầy giáo vừa bước vào, lớp học lập tức im lặng.'},
   items:[
     {word:'顿时',points:[
       'Chỉ dùng KỂ LẠI việc đã xảy ra; sắc thái văn viết.',
       'Thường tả sự THAY ĐỔI trạng thái, cảm xúc tự nhiên (顿时明白了, 顿时安静了, 顿时消失了).',
       'Không dùng trong câu mệnh lệnh, cầu khiến hay việc tương lai; có thể đứng đầu vế, trước chủ ngữ: 顿时，他的心里…….'
     ],ex:[{zh:'看到父母不舍的目光，我顿时什么都明白了。',vn:'Nhìn thấy ánh mắt lưu luyến của bố mẹ, tôi bỗng chốc hiểu ra tất cả.'},
          {zh:'听了医生的话，顿时，他的心里又燃起了希望。',vn:'Nghe bác sĩ nói, ngay lập tức, trong lòng anh ấy lại nhen nhóm hy vọng.'}]},
     {word:'立刻',points:[
       'Dùng được cho quá khứ, TƯƠNG LAI và câu MỆNH LỆNH: 你立刻回来！',
       'Thường đi với hành động có chủ ý (立刻出发, 立刻打电话).',
       'Dùng cả khẩu ngữ lẫn văn viết; thường đứng ngay trước động từ.'
     ],ex:[{zh:'你立刻给妈妈打个电话！',vn:'Con gọi điện ngay cho mẹ đi!'},
          {zh:'接到通知，我们立刻出发了。',vn:'Nhận được thông báo, chúng tôi lập tức lên đường.'}]}
   ],
   quiz:[
     {sentence:'你＿＿回家，妈妈在等你！',options:['顿时','立刻'],answer:1,why:'Câu mệnh lệnh → chỉ dùng 立刻; 顿时 chỉ kể lại việc đã xảy ra.'},
     {sentence:'老师一走进来，教室里＿＿鸦雀无声。',options:['顿时','立刻'],answer:0,both:true,why:'Kể lại một sự thay đổi trạng thái đã xảy ra → cả hai đều dùng được; 顿时 văn viết hơn.'},
     {sentence:'明天一下课，我们就＿＿出发。',options:['顿时','立刻'],answer:1,why:'Việc trong TƯƠNG LAI (明天) → chỉ 立刻.'},
     {sentence:'专题讲座就要开始了，老教授走上了讲台，＿＿，会场变得鸦雀无声。',options:['顿时','立刻'],answer:0,why:'Đứng một mình đầu vế, trước chủ ngữ 会场, tả sự thay đổi tự nhiên → 顿时 (练一练 của sách).'}
   ]}
];

// ══════════════════════════════════════════
// BẮC CẦU HÁN–VIỆT — tận dụng vốn từ Hán–Việt sẵn có
// ══════════════════════════════════════════
var hvBridgeData = {
  easy:[
    {zh:'孤独',hv:'cô độc',vn:'cô độc, cô đơn',note:'Trùng khít — nhớ một lần là xong.'},
    {zh:'团圆',hv:'đoàn viên',vn:'đoàn tụ, sum họp',note:'Như "Tết đoàn viên", "bữa cơm đoàn viên".'},
    {zh:'自主',hv:'tự chủ',vn:'tự chủ, tự quyết',note:'Trùng khít; 独立自主 = độc lập tự chủ.'},
    {zh:'规划',hv:'quy hoạch',vn:'lập kế hoạch, quy hoạch',note:'Tiếng Việt "quy hoạch" hay dùng cho đô thị; tiếng Trung còn dùng cho cá nhân: 规划未来, 规划假期.'},
    {zh:'脱离',hv:'thoát ly',vn:'thoát khỏi, rời khỏi',note:'Như "thoát ly gia đình"; 脱离危险 = qua cơn nguy hiểm.'},
    {zh:'诱惑',hv:'dụ hoặc',vn:'cám dỗ, mê hoặc',note:'"Dụ" như dụ dỗ, "hoặc" như mê hoặc.'},
    {zh:'反常',hv:'phản thường',vn:'khác thường, bất thường',note:'"Phản" = trái, "thường" = bình thường → trái với bình thường.'},
    {zh:'包围',hv:'bao vi',vn:'bao quanh, vây quanh',note:'Gần "bao vây" trong tiếng Việt.'},
    {zh:'感染',hv:'cảm nhiễm',vn:'lây nhiễm; lan truyền cảm xúc',note:'Gần "lây nhiễm"; nghĩa bóng: niềm vui "lây" sang người khác.'},
    {zh:'近来',hv:'cận lai',vn:'dạo này, gần đây',note:'"Cận" = gần (cận thị, lân cận).'},
    {zh:'刹那',hv:'sát na',vn:'khoảnh khắc',note:'Tiếng Việt có sẵn "sát na" (thuật ngữ nhà Phật) = khoảnh khắc cực ngắn.'},
    {zh:'欣慰',hv:'hân úy',vn:'vui mừng, an lòng',note:'"Hân" như hân hoan, "úy" như an ủi, úy lạo.'}
  ],
  idiom:[
    {zh:'无精打采',hv:'vô tinh đả thải',vn:'uể oải, ủ rũ',note:'"Vô tinh" = không có tinh thần; gần "mặt bí xị", "ủ rũ như gà rù".'},
    {zh:'热泪盈眶',hv:'nhiệt lệ doanh khuông',vn:'nước mắt lưng tròng',note:'"Nhiệt lệ" = nước mắt nóng, "doanh" = đầy, "khuông" = viền mắt → nước mắt đầy khóe mắt.'}
  ],
  trap:[
    {zh:'心疼',hv:'tâm đông',vn:'thương xót, xót xa; tiếc',
     warn:'BẪY: không phải "đau tim" (心脏病 / 心口疼). 心疼 là thương xót ai (心疼孩子) hoặc tiếc của (心疼钱).'},
    {zh:'本事',hv:'bản sự',vn:'bản lĩnh, khả năng',
     warn:'Không phải "việc gốc/việc chính". 本事 = tài cán, năng lực (khẩu ngữ, đọc běnshi nhẹ).'},
    {zh:'难得',hv:'nan đắc',vn:'hiếm có, quý',
     warn:'Đừng dịch "khó được" theo nghĩa "khó đạt". 难得的机会 = cơ hội hiếm có; 难得回家 = hiếm khi về nhà.'},
    {zh:'吃苦',hv:'ngật khổ',vn:'chịu khổ',
     warn:'Không phải "ăn đồ đắng". 吃 ở đây là "chịu, gánh" (như 吃亏 = chịu thiệt).'},
    {zh:'目光',hv:'mục quang',vn:'ánh mắt; tầm nhìn',
     warn:'"Quang" không phải ánh sáng thật: 目光 là cái nhìn, ánh mắt; 目光长远 = nhìn xa trông rộng.'},
    {zh:'体谅',hv:'thể lượng',vn:'thông cảm, thấu hiểu',
     warn:'"Lượng" như "lượng thứ" nhưng 体谅 KHÔNG phải tha thứ lỗi (đó là 原谅); 体谅 là đặt mình vào chỗ người khác mà hiểu cho họ.'}
  ]
};

// ══════════════════════════════════════════
// GHÉP TỪ — cụm trong bài khoá
// ══════════════════════════════════════════
var matchData = [
  {left:'态度',right:'和蔼'},
  {left:'慈祥的',right:'目光'},
  {left:'加快',right:'步伐'},
  {left:'隐瞒',right:'真相'},
  {left:'熬',right:'夜'},
  {left:'难得的',right:'机会'},
  {left:'酝酿',right:'已久'},
  {left:'眼角的',right:'皱纹'},
  {left:'跨过',right:'小河'}
];

// ══════════════════════════════════════════
// ĐIỀN TỪ — câu mới (không chép bài khoá / SGK), mỗi câu một tình huống; ôn xoáy ốc từ + ngữ pháp các bài trước
// ══════════════════════════════════════════
var fillData = [
  {pre:'新来的校长态度',blank:'和蔼',post:'，见了学生总是笑着打招呼。',hint:'(hoà nhã)',ans:'和蔼',exp:'和蔼 tả thái độ hiền hoà, dễ gần của người lớn tuổi / người trên với người dưới.'},
  {pre:'我从小就',blank:'向往',post:'大海，长大后终于搬到了海边的城市。',hint:'(khao khát, mong mỏi)',ans:'向往',exp:'向往 + nơi chốn / cuộc sống = khao khát được đến, được sống như thế.'},
  {pre:'刚出国留学时，我常常感到很',blank:'孤独',post:'，周末一个人在房间里不知道干什么。',hint:'(cô đơn)',ans:'孤独',exp:'孤独 = cô đơn, một mình không ai bên cạnh; đi với 感到 / 觉得.'},
  {pre:'他刚到家，',blank:'片刻',post:'也没休息，又去医院看望爷爷了。',hint:'(một chốc lát)',ans:'片刻',exp:'片刻也没 / 也不 + V = không nghỉ dù chỉ một chút (nhấn mạnh thời gian cực ngắn).'},
  {pre:'她的笑声',blank:'感染',post:'了在场的每一个人，大家都跟着笑了起来。',hint:'(lan sang, truyền sang)',ans:'感染',exp:'感染 + người = làm cảm xúc lan sang người khác (ngoài nghĩa "nhiễm bệnh").'},
  {pre:'',blank:'近来',post:'天气变化很大，出门记得多带一件衣服。',hint:'(dạo gần đây)',ans:'近来',exp:'近来 = dạo này, khoảng thời gian gần đây kéo dài đến hiện tại; đứng đầu câu hoặc sau chủ ngữ.'},
  {pre:'事情都已经这样了，你再',blank:'埋怨',post:'别人也没有用，不如想想怎么解决。',hint:'(trách móc)',ans:'埋怨',exp:'埋怨 + người = trách móc, đổ lỗi cho ai; 再……也没有用 = có… nữa cũng vô ích.'},
  {pre:'爸爸工作很辛苦，我们应该多',blank:'体谅',post:'他，别总让他陪我们出去玩儿。',hint:'(thông cảm, thấu hiểu)',ans:'体谅',exp:'体谅 + người = đặt mình vào chỗ người khác mà thông cảm; trái với 埋怨.'},
  {pre:'进了大学，你最好提前',blank:'规划',post:'一下自己的学习和生活。',hint:'(lên kế hoạch)',ans:'规划',exp:'规划 = lập kế hoạch dài hạn, có hệ thống (规划学习 / 规划未来).'},
  {pre:'现在的年轻人更喜欢',blank:'自主',post:'选择自己的工作。',hint:'(tự mình quyết định)',ans:'自主',exp:'自主 + V = tự mình quyết định làm gì, không để người khác sắp đặt.'},
  {pre:'奶奶把我叫到',blank:'跟前',post:'，给了我一个红包。',hint:'(bên cạnh, trước mặt)',ans:'跟前',exp:'叫到 / 走到 + người + 跟前 = đến sát bên cạnh ai.'},
  {pre:'中秋节是家人',blank:'团圆',post:'的日子。',hint:'(sum họp)',ans:'团圆',exp:'团圆 = cả nhà sum họp (thường vào dịp lễ Tết); 团圆的日子.'},
  {pre:'编辑说我的',blank:'稿件',post:'写得不错，下个月就能发表。',hint:'(bản thảo)',ans:'稿件',exp:'稿件 = bài viết gửi cho báo, tạp chí, nhà xuất bản.'},
  {pre:'看到孩子发烧到三十九度，妈妈',blank:'心疼',post:'得一夜没睡。',hint:'(xót xa, thương)',ans:'心疼',exp:'心疼 = xót, thương (người thân bị khổ); 心疼得 + kết quả.'},
  {pre:'奶奶年纪大了，一件事总要',blank:'唠叨',post:'好几遍。',hint:'(nói đi nói lại)',ans:'唠叨',exp:'唠叨 = nói đi nói lại, lải nhải (thường là người lớn tuổi, cha mẹ).'},
  {pre:'看到学生们一个个都考上了大学，老师感到非常',blank:'欣慰',post:'。',hint:'(vui mừng yên lòng)',ans:'欣慰',exp:'欣慰 = vui mừng và yên lòng khi thấy người mình lo lắng đã thành công.'}
];

// ══════════════════════════════════════════
// SẮP XẾP CÂU — câu mới, chỉ một trật tự đúng
// ══════════════════════════════════════════
var sortData = [
  {words:['他','困得','恨不得','马上','躺下','睡觉','。'],ans:'他困得恨不得马上躺下睡觉。',audio:'他困得恨不得马上躺下睡觉。'},
  {words:['我们','都','被她的热情','感染了','。'],ans:'我们都被她的热情感染了。',audio:'我们都被她的热情感染了。'},
  {words:['爸爸妈妈的','脸上','多了','不少','皱纹','。'],ans:'爸爸妈妈的脸上多了不少皱纹。',audio:'爸爸妈妈的脸上多了不少皱纹。'},
  {words:['她','把自己的不安','掩饰得','很好','。'],ans:'她把自己的不安掩饰得很好。',audio:'她把自己的不安掩饰得很好。'},
  {words:['他','无精打采地','坐在','教室里','。'],ans:'他无精打采地坐在教室里。',audio:'他无精打采地坐在教室里。'},
  {words:['我们','终于','熬过了','最困难的','那几年','。'],ans:'我们终于熬过了最困难的那几年。',audio:'我们终于熬过了最困难的那几年。'},
  {words:['他','是','一个','很有本事的','年轻人','。'],ans:'他是一个很有本事的年轻人。',audio:'他是一个很有本事的年轻人。'}
];

// ══════════════════════════════════════════
// CHỌN TỪ THÍCH HỢP
// ══════════════════════════════════════════
var errorFixMode = 'wordchoice';
var errorFixData = [
  {wrong:'工作太多了，她忙得____长出三只手来。',opts:['恨不得','舍不得','怪不得','来不及'],ans:0,exp:'Ước điều không thể xảy ra (mọc thêm tay) → 恨不得. 舍不得 là không nỡ; 怪不得 là thảo nào; 来不及 là không kịp.'},
  {wrong:'听完医生的话，他心里____轻松了很多。',opts:['顿时','及时','按时','同时'],ans:0,exp:'Thay đổi xảy ra ngay sau một sự việc → 顿时. 及时 là kịp thời; 按时 là đúng giờ; 同时 là cùng lúc — đều có chữ 时 nhưng nghĩa khác.'},
  {wrong:'看到孩子们这么认真，老师____笑了起来。',opts:['不由得','不得不','不见得','不在乎'],ans:0,exp:'Phản ứng tự nhiên, không kìm được → 不由得 + V. 不得不 là buộc phải; 不见得 là chưa chắc; 不在乎 là không để tâm.'},
  {wrong:'这点小事你就____管了，我来处理。',opts:['甭','没','无','非'],ans:0,exp:'甭 = 不用 (khẩu ngữ): khỏi phải. 没 không đi với 了 trong lời khuyên; 无 / 非 không đứng trước động từ như vậy.'},
  {wrong:'车门打开的那一____，孩子们都冲了出去。',opts:['刹那','片刻','近来','时候'],ans:0,exp:'那一刹那 = đúng khoảnh khắc ấy. 片刻 chỉ một lúc ngắn (片刻也不停), không đi sau 那一; 近来 là dạo này; 时候 không dùng với 那一.'},
  {wrong:'这次比赛输了是大家的责任，不要只____队长一个人。',opts:['埋怨','体谅','心疼','欣慰'],ans:0,exp:'Đổ lỗi, trách móc → 埋怨 + người. 体谅 là thông cảm; 心疼 là xót thương; 欣慰 là yên lòng — đều trái ý "không nên…".'},
  {wrong:'他努力____着心里的紧张，可声音还是有点儿发抖。',opts:['掩饰','隐瞒','包围','脱离'],ans:0,exp:'Che giấu cảm xúc của mình → 掩饰. 隐瞒 là giấu sự thật không cho người khác biết; 包围 là bao vây; 脱离 là thoát khỏi.'},
  {wrong:'他把考试成绩____了一个学期，最后还是被父母发现了。',opts:['隐瞒','掩饰','酝酿','规划'],ans:0,exp:'Giấu một sự thật (điểm thi) không cho người khác biết → 隐瞒. 掩饰 thường che cảm xúc, khuyết điểm; 酝酿 là ấp ủ; 规划 là lên kế hoạch.'},
  {wrong:'这个计划他已经____了半年，现在终于可以开始实行了。',opts:['酝酿','包围','感染','埋怨'],ans:0,exp:'Ấp ủ, chuẩn bị từ lâu → 酝酿 (ôn 实行 bài 1). Các từ còn lại không đi với 计划.'},
  {wrong:'平时最爱说话的小林今天一句话也不说，真有点儿____。',opts:['反常','正常','寂静','和气'],ans:0,exp:'Khác hẳn mọi khi → 反常. 正常 trái nghĩa; 寂静 tả nơi chốn yên ắng; 和气 là ôn tồn.'},
  {wrong:'夜深了，山村里一片____，只能听到几声狗叫。',opts:['寂静','孤独','漫长','和蔼'],ans:0,exp:'一片寂静 tả không gian vắng lặng. 孤独 tả cảm giác của người; 漫长 tả thời gian; 和蔼 tả thái độ.'},
  {wrong:'看到自己的作品得了奖，他感到____自豪。',opts:['无比','难得','片刻','近来'],ans:0,exp:'无比 + tính từ = vô cùng (văn viết). 难得 là hiếm có; 片刻 / 近来 là từ chỉ thời gian, không bổ nghĩa cho 自豪.'},
  {wrong:'年轻时多____不是坏事，能让人更快地成长。',opts:['吃苦','心疼','哭鼻子','欣慰'],ans:0,exp:'Chịu khổ, chịu cực → 吃苦. 心疼 là xót; 哭鼻子 là khóc nhè; 欣慰 là yên lòng.'},
  {wrong:'毕业晚会上，孩子在台上感谢父母，台下很多家长都____。',opts:['热泪盈眶','哭鼻子','无精打采','滔滔不绝'],ans:0,exp:'Xúc động rưng rưng nước mắt (trang trọng) → 热泪盈眶. 哭鼻子 là cách nói đùa về trẻ con khóc nhè; 无精打采 là uể oải; 滔滔不绝 (bài 1) là nói không dứt.'},
  {wrong:'面对网络游戏的____，很多孩子管不住自己。',opts:['诱惑','寂静','步伐','目光'],ans:0,exp:'Sức hấp dẫn khó cưỡng (theo nghĩa xấu) → 诱惑. 寂静 là yên ắng; 步伐 là bước đi; 目光 là ánh mắt — không đi với 面对……的 ở đây.'}
];

// ══════════════════════════════════════════
// DỊCH Việt → Trung — câu mới, dùng từ của bài + ôn ngữ pháp các bài trước
// ══════════════════════════════════════════
var translateData = [
  {vi:'Mẹ tuy hay lải nhải, nhưng mỗi câu nhắc nhở, thúc giục của mẹ đều là vì thương tôi.',zh:'妈妈虽然总爱唠叨，但她的每一句督促都是因为心疼我。',py:'Māma suīrán zǒng ài láodao, dàn tā de měi yí jù dūcù dōu shì yīnwèi xīnténg wǒ.',goiY:['虽然……但……','唠叨','督促','心疼'],giai:'虽然 có thể đứng sau chủ ngữ 妈妈; "thương tôi" theo nghĩa xót, lo cho con → 心疼我. 督促 (bài 1) = thúc giục, nhắc nhở.'},
  {vi:'Kỳ nghỉ tuy dài, nhưng chỉ cần lên kế hoạch từ trước và biết tự giữ kỷ luật thì sẽ không thấy khó trôi qua.',zh:'假期虽然漫长，但只要提前规划好、约束好自己，就不会觉得难熬。',py:'Jiàqī suīrán màncháng, dàn zhǐyào tíqián guīhuà hǎo, yuēshù hǎo zìjǐ, jiù bú huì juéde nán áo.',goiY:['只要……就……','漫长','规划','约束'],giai:'只要……就…… lồng trong vế 但; 难熬 = khó mà gắng cho qua (熬 = chịu đựng vượt qua). 约束 (bài 1) = kiềm chế, tự giữ kỷ luật.'},
  {vi:'Huấn luyện viên tuy rất nghiêm khắc với chúng tôi, nhưng thầy thường nói: không chịu khổ thì chẳng thể có bản lĩnh.',zh:'教练对我们虽然很严厉，但是他常说，不吃苦就长不了本事。',py:'Jiàoliàn duì wǒmen suīrán hěn yánlì, dànshì tā cháng shuō, bù chī kǔ jiù zhǎng bu liǎo běnshi.',goiY:['虽然……但是……','严厉','吃苦','本事'],giai:'长不了本事 = V + 不了 (bổ ngữ khả năng): không thể tăng bản lĩnh; "có bản lĩnh" dùng động từ 长, không dùng 有 ở đây. 严厉 (bài 1) = nghiêm khắc.'},
  {vi:'Trước khi lên bục tôi còn hồi hộp vô cùng, nhưng khi nghe cô giáo khen bài văn của mình, nỗi hồi hộp ấy lập tức biến thành niềm tự hào khôn tả.',zh:'上台前我还紧张得不得了，可是听到老师表扬我的作文时，那份紧张顿时变成了无比的骄傲。',py:'Shàng tái qián wǒ hái jǐnzhāng de bùdéliǎo, kěshì tīngdào lǎoshī biǎoyáng wǒ de zuòwén shí, nà fèn jǐnzhāng dùnshí biànchéngle wúbǐ de jiāo\'ào.',goiY:['可是','顿时','无比'],giai:'可是 chuyển ý; 顿时 tả sự thay đổi xảy ra ngay lập tức trong chuyện kể (đã xảy ra) — không dùng cho mệnh lệnh; 无比的 + N = … vô cùng, khôn tả.'},
  {vi:'Hồi mới ở nội trú, cứ nhớ nhà là tôi lại khóc nhè, nhưng từ khi có mấy người bạn thân, cảm giác cô đơn ấy dần dần biến mất.',zh:'刚住校时我一想家就哭鼻子，不过自从交了几个亲密的朋友，那种孤独感就慢慢消失了。',py:'Gāng zhùxiào shí wǒ yì xiǎng jiā jiù kū bízi, búguò zìcóng jiāole jǐ ge qīnmì de péngyou, nà zhǒng gūdúgǎn jiù mànmàn xiāoshī le.',goiY:['一……就……','自从……就……','哭鼻子','孤独'],giai:'自从 + mốc thời điểm, 就 + thay đổi từ đó về sau; "cảm giác cô đơn" = 孤独感. "Bạn thân" dùng 亲密的朋友 (亲密 — bài 1).'}
];

// ══════════════════════════════════════════
// Dịch Trung → Việt — câu mới, không trùng chiều trên
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:'Vừa nghe kết quả cuộc thi, anh ấy vui đến mức chỉ muốn báo tin này cho tất cả mọi người.',zh:'刚听到比赛结果时，他高兴得恨不得把这个消息告诉所有人。',py:'Gāng tīngdào bǐsài jiéguǒ shí, tā gāoxìng de hènbude bǎ zhège xiāoxi gàosu suǒyǒu rén.',goiY:['恨不得 = chỉ muốn, nóng lòng muốn','高兴得 = vui đến mức'],giai:'Adj + 得 + 恨不得…… = … đến mức chỉ muốn…'},
  {vi:'Vừa nghĩ đến chuyện ngày mai được gặp người bạn cũ nhiều năm không gặp, cô ấy lập tức thấy chẳng mệt chút nào nữa.',zh:'一想到明天就能见到多年不见的老朋友，她顿时觉得一点儿也不累了。',py:'Yì xiǎngdào míngtiān jiù néng jiàndào duō nián bú jiàn de lǎo péngyou, tā dùnshí juéde yìdiǎnr yě bú lèi le.',goiY:['一……就…… = vừa… là…','顿时 = lập tức, ngay tức khắc'],giai:'顿时 + thay đổi trạng thái (觉得不累了) xảy ra ngay sau sự việc trước; dịch "lập tức / bỗng chốc".'},
  {vi:'Nhìn tóc bạc trên đầu bố ngày càng nhiều, lòng tôi bất giác thấy xót xa.',zh:'看到父亲头上的白发越来越多，我心里不由得一阵心疼。',py:'Kàndào fùqin tóu shang de báifà yuè lái yuè duō, wǒ xīnli bùyóude yí zhèn xīnténg.',goiY:['不由得 = bất giác, không kìm được','一阵 = một cơn, một hồi','心疼 = xót xa'],giai:'不由得 + cảm xúc tự nhiên trỗi dậy; 一阵心疼 dịch "thấy xót xa", không dịch "một trận đau lòng".'},
  {vi:'Thay vì trách bố mẹ không hiểu mình, chi bằng tìm lúc nói chuyện nghiêm túc với họ.',zh:'与其埋怨父母不理解你，不如找个时间和他们认真地谈一谈。',py:'Yǔqí mányuàn fùmǔ bù lǐjiě nǐ, bùrú zhǎo ge shíjiān hé tāmen rènzhēn de tán yi tán.',goiY:['与其……不如…… = thay vì… chi bằng…','埋怨 = trách móc'],giai:'与其 A，不如 B: người nói chọn B; 找个时间 = tìm lúc (không dịch "tìm một thời gian").'}
];

// ══════════════════════════════════════════
// LUYỆN VIẾT — đề 运用 · 写一写 của sách (tr. 31)
// ══════════════════════════════════════════
var writingData = {
  kieu:'sgk',
  soChu:300,
  de:'学完了这篇课文，请想一想，父母对孩子的爱只是简单的爱吗？有时候父母的做法可能孩子不理解，但其实都是对孩子的爱。你跟父母之间有这样的故事吗？请以“父母给我的爱”为题，写一篇不少于300字的文章。文章中请写清楚事情发生的前因后果，以及怎样通过这件事情感受到了父母之爱。',
  prompt:'Học xong bài khoá, em hãy nghĩ xem: tình yêu của cha mẹ dành cho con cái chỉ là một tình yêu đơn giản thôi sao? Có khi con cái không hiểu cách làm của cha mẹ, nhưng thật ra đó đều là tình yêu dành cho con. Giữa em và bố mẹ có câu chuyện như vậy không? Hãy viết một bài văn KHÔNG ÍT HƠN 300 chữ với nhan đề "父母给我的爱" (Tình yêu bố mẹ dành cho tôi). Trong bài phải viết rõ nguyên nhân – diễn biến – kết quả của sự việc, và em đã cảm nhận được tình yêu của bố mẹ qua việc đó như thế nào.',
  dan:[
    {hoi:'开头：以前我觉得父母的爱是什么样的？',goiY:'①我的父母对我…… ②从小到大…… ③以前我觉得，父母的爱就是……'},
    {hoi:'前因：发生了什么事？父母是怎么做的？',goiY:'①那一次（时间、地点）…… ②本以为父母会……，没想到他们却…… ③父母这么反常，我……'},
    {hoi:'经过：我当时是怎么想、怎么做的？',goiY:'①我心里暗暗埋怨他们不体谅我 ②……得恨不得…… ③慢慢地，我……'},
    {hoi:'结果：后来我知道了什么？',goiY:'①有一天，我听到 / 看到…… ②我顿时明白了：原来父母不是……，而是…… ③我不由得……'},
    {hoi:'感受：我怎样感受到了父母之爱？',goiY:'①从此我懂得了，父母的爱不只是……，还有…… ②我想对父母说……'}
  ],
  tuNen:['恨不得','顿时','不由得','体谅','埋怨','心疼','热泪盈眶','吃苦','欣慰','反常'],
  cauTruc:[
    {ten:'以前我觉得……', nhan:'以前', vd:'以前我觉得，父母的爱就是宠爱。', khi:'MỞ BÀI: nêu suy nghĩ ban đầu để phần kết lật lại.'},
    {ten:'本以为……，没想到……却……', nhan:'没想到', vd:'本以为妈妈会爽快地答应，没想到她却要我自己去打工。', khi:'NGUYÊN NHÂN (前因): cách làm "khác thường" của bố mẹ.'},
    {ten:'心里暗暗埋怨……不体谅我', nhan:'埋怨', vd:'我心里暗暗埋怨他们一点儿也不体谅我。', khi:'Tâm trạng lúc chưa hiểu bố mẹ.'},
    {ten:'……得恨不得……', nhan:'恨不得', vd:'第一天回到家，我累得直哭，恨不得马上辞职。', khi:'DIỄN BIẾN (经过): tả cảm xúc mãnh liệt, khó khăn.'},
    {ten:'我顿时明白了：原来……不是……，而是……', nhan:'顿时', vd:'我顿时明白了：原来父母不是不爱我，而是在用另一种方式爱我。', khi:'KẾT QUẢ (后果): cao trào — phát hiện sự thật.'},
    {ten:'不由得 + 热泪盈眶 / V', nhan:'不由得', vd:'我不由得热泪盈眶。', khi:'Cảm xúc bột phát ngay sau khi hiểu ra.'},
    {ten:'从此，我懂得了……', nhan:'从此', vd:'从此我懂得了，父母的爱不只是宠爱。', khi:'KẾT BÀI: cảm nhận về tình yêu của cha mẹ (đúng yêu cầu thứ hai của đề).'}
  ],
  checklist:[
    'Bài đã có nhan đề 父母给我的爱 và đủ ít nhất 300 chữ Hán chưa (không đếm dấu câu)?',
    'Đã kể MỘT chuyện cụ thể, rõ nguyên nhân – diễn biến – kết quả (前因后果) chưa?',
    'Đoạn kết đã nói rõ qua chuyện đó em cảm nhận tình yêu của bố mẹ thế nào chưa?',
    'Đã dùng ít nhất 5 từ / cấu trúc của bài (恨不得, 顿时, 不由得, 体谅, 埋怨, 心疼…) chưa?',
    'Có câu chuyển ý như 本以为……没想到……, 不是……而是…… chưa; đầu mỗi đoạn lùi 2 ô chưa?'
  ],
  model:{
    zh:'我的父母对我一直很和蔼，从小到大，几乎什么事都替我做好。以前我觉得，父母的爱就是宠爱。十五岁那年放假时，我想参加学校组织的旅行，本以为妈妈会爽快地答应，没想到她却要我自己去超市工作一个月，挣够旅行的费用。父母这么反常，我怎么也想不明白，心里暗暗埋怨他们一点儿也不体谅我。打工的日子很辛苦，每天要站八个小时。第一天回到家，我累得直哭，恨不得马上辞职。可是爸爸只说了一句：“不吃苦，怎么长本事？”我只好坚持了下来。慢慢地，我学会了和顾客打交道，也知道了挣钱有多不容易。一个月后，我用自己挣的钱交了旅行的费用。那天晚上，我听见妈妈对爸爸说：“孩子每天那么累，我真心疼，可看到她长大了，又觉得很欣慰。”我顿时明白了：原来父母不是不爱我，而是在用另一种方式爱我。我不由得热泪盈眶。从此我懂得了，父母的爱不只是宠爱，还有放手让孩子去吃苦、去成长的勇气。',
    py:'Wǒ de fùmǔ duì wǒ yìzhí hěn hé\'ǎi, cóng xiǎo dào dà, jīhū shénme shì dōu tì wǒ zuòhǎo. Yǐqián wǒ juéde, fùmǔ de ài jiù shì chǒng\'ài. Shíwǔ suì nà nián fàngjià shí, wǒ xiǎng cānjiā xuéxiào zǔzhī de lǚxíng, běn yǐwéi māma huì shuǎngkuai de dāying, méi xiǎngdào tā què yào wǒ zìjǐ qù chāoshì gōngzuò yí ge yuè, zhènggòu lǚxíng de fèiyong. Fùmǔ zhème fǎncháng, wǒ zěnme yě xiǎng bu míngbai, xīn li àn\'àn mányuàn tāmen yìdiǎnr yě bù tǐliàng wǒ. Dǎgōng de rìzi hěn xīnkǔ, měi tiān yào zhàn bā ge xiǎoshí. Dì-yī tiān huídào jiā, wǒ lèi de zhí kū, hènbude mǎshàng cízhí. Kěshì bàba zhǐ shuōle yí jù: "Bù chī kǔ, zěnme zhǎng běnshi?" Wǒ zhǐhǎo jiānchíle xiàlai. Mànmàn de, wǒ xuéhuìle hé gùkè dǎ jiāodao, yě zhīdàole zhèng qián yǒu duō bù róngyì. Yí ge yuè hòu, wǒ yòng zìjǐ zhèng de qián jiāole lǚxíng de fèiyong. Nà tiān wǎnshang, wǒ tīngjiàn māma duì bàba shuō: "Háizi měi tiān nàme lèi, wǒ zhēn xīnténg, kě kàndào tā zhǎngdà le, yòu juéde hěn xīnwèi." Wǒ dùnshí míngbai le: yuánlái fùmǔ bú shì bú ài wǒ, ér shì zài yòng lìng yì zhǒng fāngshì ài wǒ. Wǒ bùyóude rèlèi yíng kuàng. Cóngcǐ wǒ dǒngde le, fùmǔ de ài bù zhǐ shì chǒng\'ài, hái yǒu fàngshǒu ràng háizi qù chī kǔ, qù chéngzhǎng de yǒngqì.',
    vn:'Bố mẹ tôi luôn hiền hòa với tôi, từ nhỏ đến lớn hầu như việc gì cũng làm sẵn cho tôi. Trước đây tôi nghĩ tình yêu của bố mẹ chính là sự cưng chiều. Năm mười lăm tuổi, vào kỳ nghỉ, tôi muốn tham gia chuyến du lịch do trường tổ chức, cứ tưởng mẹ sẽ đồng ý ngay, không ngờ mẹ lại bắt tôi tự đi làm thêm ở siêu thị một tháng để kiếm đủ chi phí chuyến đi. Bố mẹ khác thường như vậy, tôi nghĩ mãi không hiểu, trong lòng thầm trách họ chẳng thông cảm cho tôi chút nào. Những ngày làm thêm rất vất vả, mỗi ngày phải đứng tám tiếng. Ngày đầu tiên về đến nhà, tôi mệt đến bật khóc, chỉ muốn nghỉ việc ngay. Nhưng bố chỉ nói một câu: "Không chịu khổ thì làm sao có bản lĩnh?" Tôi đành cố gắng tiếp. Dần dần, tôi học được cách giao tiếp với khách hàng, cũng hiểu kiếm tiền khó khăn biết bao. Một tháng sau, tôi dùng chính tiền mình kiếm được để đóng chi phí chuyến đi. Tối hôm đó, tôi nghe mẹ nói với bố: "Con ngày nào cũng mệt như thế, em xót lắm, nhưng thấy con trưởng thành rồi, em lại thấy an lòng." Tôi bỗng chốc hiểu ra: hóa ra bố mẹ không phải không thương tôi, mà là đang thương tôi theo một cách khác. Tôi không kìm được nước mắt lưng tròng. Từ đó tôi hiểu rằng, tình yêu của bố mẹ không chỉ là cưng chiều, mà còn là dũng khí dám buông tay để con đi chịu khổ, đi trưởng thành.'
  }
};

// ══════════════════════════════════════════
// LUYỆN NÓI — đúng bảng 练习5 của sách: 根据提示，简述课文主要内容 (tr. 31)
// ══════════════════════════════════════════
var speakingData = {
  intro:'Năm câu hỏi dưới đây chính là bảng <b>练习 5 — 根据提示，简述课文主要内容</b> của sách. Bấm loa nghe câu hỏi, nhìn gợi ý ①②③ rồi <b>tự ghi âm câu trả lời trước</b> — đừng đọc theo câu mẫu. Cố gắng dùng từ mới của bài: 和睦 · 和蔼 · 孤独 · 恨不得 · 甭 · 埋怨 · 体谅 · 心疼 · 顿时 · 不由得.',
  questions:[
    {q_zh:'“我”的家庭是什么样的家庭？',
     q_vn:'Gia đình của "tôi" là một gia đình như thế nào?',
     hint:'①父母感情…… ②父母对我的态度…… ③我的独立能力……',
     sample:'“我”生活在一个有爱的家庭。父母感情和睦，很少吵架，对“我”态度和蔼，说话和气。可是在跨进大学校门之前，“我”从没离开过家，独立自主的能力就更甭提了。',
     sample_vn:'"Tôi" sống trong một gia đình đầy yêu thương. Bố mẹ hòa thuận, hiếm khi cãi nhau, đối với "tôi" luôn hiền hòa, ăn nói ôn tồn. Nhưng trước khi vào đại học, "tôi" chưa từng xa nhà, khả năng tự lập tự chủ thì càng khỏi phải nói.',
     note:'Nói theo đúng thứ tự ①②③; dùng 和睦 cho bố mẹ với nhau, 和蔼 / 和气 cho thái độ với con, 更甭提 cho khả năng tự lập.'},
    {q_zh:'上大学后，“我”想家的感受是什么样的？',
     q_vn:'Sau khi vào đại học, cảm giác nhớ nhà của "tôi" như thế nào?',
     hint:'①心里的孤独感…… ②别的同学…… ③我也恨不得……',
     sample:'第一次离开家，“我”心里的孤独感一下子跑了出来。别的同学一给家里打电话就哭鼻子，每到节假日都片刻不停地往家赶。“我”也恨不得马上飞到父母跟前，与他们团圆。',
     sample_vn:'Lần đầu xa nhà, nỗi cô đơn trong lòng "tôi" bỗng chốc trào ra. Các bạn khác hễ gọi điện về nhà là khóc nhè, cứ đến ngày lễ ngày nghỉ là không ngừng một phút mà hối hả về nhà. "Tôi" cũng nóng lòng muốn bay ngay về bên bố mẹ, đoàn tụ với họ.',
     note:'一……就…… (hễ … là …) và 恨不得 + 马上 + V là hai cấu trúc "ăn điểm" của ý này.'},
    {q_zh:'假期到来时，父母给“我”什么建议？“我”能理解吗？',
     q_vn:'Khi kỳ nghỉ đến, bố mẹ khuyên "tôi" điều gì? "Tôi" có hiểu không?',
     hint:'①要没什么事，就……，在学校……，或找份…… ②我无法……，心中暗暗……',
     sample:'母亲说近来他们比较忙，要没什么事，就甭回来了，在学校看看书，或找份兼职做做。“我”无法理解父母的反常，心中暗暗埋怨他们不体谅“我”。',
     sample_vn:'Mẹ nói dạo này bố mẹ khá bận, nếu không có việc gì thì khỏi về, cứ ở trường đọc sách hoặc tìm việc làm thêm. "Tôi" không sao hiểu nổi sự khác thường của bố mẹ, trong lòng thầm trách họ không thông cảm cho mình.',
     note:'Thuật lại lời mẹ bằng câu gián tiếp (母亲说……); 甭 = 不用 (khẩu ngữ). Đừng nhầm 体谅 (thông cảm) với 原谅 (tha thứ).'},
    {q_zh:'“我”的假期是怎么度过的？',
     q_vn:'Kỳ nghỉ của "tôi" đã trôi qua như thế nào?',
     hint:'①在图书馆…… ②给杂志社……',
     sample:'无精打采了几天之后，“我”开始规划假期。“我”在图书馆看书，给杂志社写稿件，发现在难得的寂静中工作是那么美好。',
     sample_vn:'Sau mấy ngày ủ rũ, "tôi" bắt đầu lên kế hoạch cho kỳ nghỉ. "Tôi" đọc sách ở thư viện, viết bài cho tạp chí, và nhận ra làm việc trong sự yên tĩnh hiếm có thật tuyệt biết bao.',
     note:'Có thể mở đầu bằng 无精打采了几天之后 để nối mạch với ý 3 — kể chuyện có thứ tự thời gian sẽ tự nhiên hơn.'},
    {q_zh:'“我”回家后，知道了什么真相？',
     q_vn:'Sau khi về nhà, "tôi" đã biết được sự thật gì?',
     hint:'（Sách để trống ô gợi ý — tự trả lời. Gợi ý thêm: 母亲脸上满是心疼…… · 半夜听到父母…… · 不吃苦，怎么…… · 顿时…… · 不由得……）',
     sample:'大学三年级“我”回了趟家。半夜“我”听到父母的谈话，才知道他们不让“我”回家，是希望“我”多吃苦、长本事。看到父母的白发和皱纹，“我”顿时什么都明白了，不由得热泪盈眶。',
     sample_vn:'Năm ba đại học "tôi" về nhà một chuyến. Nửa đêm nghe bố mẹ nói chuyện, "tôi" mới biết họ không cho "tôi" về là mong "tôi" chịu khổ nhiều hơn để có bản lĩnh. Nhìn tóc bạc và nếp nhăn của bố mẹ, "tôi" bỗng chốc hiểu ra tất cả, không kìm được nước mắt lưng tròng.',
     note:'Đây là ý chính của cả bài — phải nói được SỰ THẬT (父母是为了让我……) rồi mới đến cảm xúc (顿时…… → 不由得……).'}
  ]
};

// ══════════════════════════════════════════
// 🎧 NGHE THEO DẠNG ĐỀ HSK 6 — câu tự soạn (sách HSK 6 không có sách bài tập nghe), mỗi câu một tình huống mới
// ══════════════════════════════════════════
var listenExamData = {
  intro: 'Đề HSK 6 phần nghe chỉ phát <b>một lượt</b>. Ở đây cũng vậy: bấm nút loa nghe, trả lời ngay, rồi mới mở nguyên văn ra đối chiếu. Đừng mở nguyên văn trước — mở trước là mất tác dụng.',
  source: 'Tự soạn theo dạng đề HSK 6 · chủ đề bài 2',
  items: [
    {
      n: 1,
      lines: [
        {sp:'男',zh:'你怎么一下课就往外跑？'},
        {sp:'女',zh:'我妈今天从老家来看我，我恨不得马上见到她。'}
      ],
      q: '女的为什么着急？',
      qvn: 'Vì sao người phụ nữ vội?',
      opts: ['要去上课','想快点儿见妈妈','要回老家','妈妈生病了'],
      ans: 1,
      why: '恨不得马上见到她 = nóng lòng muốn gặp mẹ ngay. Mẹ đến thăm, không phải cô ấy về quê.',
      words: ['恨不得']
    },
    {
      n: 2,
      lines: [
        {sp:'女',zh:'刚才大家还有说有笑的，怎么突然不说话了？'},
        {sp:'男',zh:'经理一进门，办公室里顿时就安静下来了。'}
      ],
      q: '办公室里为什么安静了？',
      qvn: 'Vì sao văn phòng im lặng?',
      opts: ['大家都下班了','经理批评了大家','经理进来了','大家在开会'],
      ans: 2,
      why: '经理一进门……顿时就安静下来了 → giám đốc vừa bước vào.',
      words: ['顿时']
    },
    {
      n: 3,
      lines: [
        {sp:'男',zh:'你看这张老照片，还记得吗？'},
        {sp:'女',zh:'这是我们大学毕业那年拍的！看着它，我不由得想起了很多以前的事。'}
      ],
      q: '女的看照片时怎么样？',
      qvn: 'Người phụ nữ xem ảnh thấy thế nào?',
      opts: ['想起了以前的事','觉得很好笑','不记得了','很生气'],
      ans: 0,
      why: '不由得想起了很多以前的事 = bất giác nhớ lại nhiều chuyện cũ.',
      words: ['不由得']
    },
    {
      n: 4,
      lines: [
        {sp:'女',zh:'你儿子在国外读书，你不担心吗？'},
        {sp:'男',zh:'担心啊。他每次打电话都说一切都好，就是有困难也从来不告诉我们。'}
      ],
      q: '关于儿子，可以知道什么？',
      qvn: 'Có thể biết gì về cậu con trai?',
      opts: ['经常埋怨父母','很少给家里打电话','想马上回国','不想让父母担心'],
      ans: 3,
      why: 'Có khó khăn cũng không nói, lúc nào cũng bảo mọi thứ ổn → không muốn bố mẹ lo.',
      words: []
    },
    {
      n: 5,
      lines: [
        {sp:'男',zh:'这个周末你回家吗？'},
        {sp:'女',zh:'甭提了，老板非要我周末加班，看来又回不去了。'}
      ],
      q: '女的周末要做什么？',
      qvn: 'Cuối tuần người phụ nữ phải làm gì?',
      opts: ['回家','加班','去旅行','休息'],
      ans: 1,
      why: '甭提了 = đừng nhắc nữa (than phiền); công ty bắt làm thêm nên không về được.',
      words: ['甭']
    },
    {
      n: 6,
      lines: [
        {sp:'女',zh:'你爸爸怎么瘦了这么多？'},
        {sp:'男',zh:'这几年为了让我上大学，他吃了不少苦，可他从来不说。'}
      ],
      q: '关于男的的爸爸，可以知道什么？',
      qvn: 'Có thể biết gì về bố của người đàn ông?',
      opts: ['身体不好','不爱说话','为孩子吃了很多苦','埋怨孩子'],
      ans: 2,
      why: '为了让我上大学，他吃了不少苦 → vì con mà chịu nhiều vất vả.',
      words: ['吃苦']
    }
  ]
};

// ══════════════════════════════════════════
// 💬 TÌNH HUỐNG — HOÀN THÀNH HỘI THOẠI (Cấp 2 · 半交际性练习)
// ══════════════════════════════════════════
var situationData = {
  intro: 'Mỗi tình huống cho sẵn lời của người kia. Em viết lời đáp của mình, <b>bắt buộc dùng đúng từ/cấu trúc ghi ở ô yêu cầu</b>. Viết xong mới mở câu mẫu — câu mẫu chỉ là MỘT cách nói, em nói khác mà đúng yêu cầu vẫn được.',
  items: [
    {scene:'Bạn cùng phòng ký túc lần đầu xa nhà, tối nào cũng buồn.',a:{sp:'Bạn',zh:'我好想家啊，一给妈妈打电话就想哭。',vn:'Tớ nhớ nhà quá, cứ gọi điện cho mẹ là muốn khóc.'},need:['Dùng 孤独 hoặc 哭鼻子','Đưa ra một lời an ủi hoặc rủ bạn làm gì đó'],sample:'刚离开家谁都会觉得孤独，别哭鼻子了，周末我们一起出去走走吧。',samplePy:'Gāng líkāi jiā shéi dōu huì juéde gūdú, bié kū bízi le, zhōumò wǒmen yìqǐ chūqu zǒuzou ba.',sampleVn:'Mới xa nhà ai cũng thấy cô đơn, đừng khóc nhè nữa, cuối tuần mình cùng ra ngoài đi dạo nhé.',tip:'哭鼻子 mang ý trêu nhẹ, rất hợp khi an ủi bạn thân; nói với người lớn thì tránh.'},
    {scene:'Mẹ gọi điện bảo kỳ nghỉ này đừng về nhà.',a:{sp:'Mẹ',zh:'这个假期我们都忙，你就留在学校看看书吧，甭往家跑了。',vn:'Kỳ nghỉ này bố mẹ đều bận, con cứ ở lại trường đọc sách đi, khỏi chạy về nhà.'},need:['Dùng 恨不得','Nói rõ mong muốn của mình một cách lễ phép'],sample:'妈，我好久没见你们了，真恨不得马上飞回家。要不我回去帮你们做点儿事吧？',samplePy:'Mā, wǒ hǎojiǔ méi jiàn nǐmen le, zhēn hènbude mǎshàng fēi huí jiā. Yàobù wǒ huíqu bāng nǐmen zuò diǎnr shì ba?',sampleVn:'Mẹ ơi, lâu lắm con chưa gặp bố mẹ, con chỉ muốn bay ngay về nhà. Hay con về phụ bố mẹ một tay nhé?',tip:'恨不得 + 马上 + V diễn tả nỗi nóng lòng; thêm 要不……吧 để đề nghị nhẹ nhàng, không cãi lại mẹ.'},
    {scene:'Bạn thân than phiền bố mẹ không cho đi du lịch một mình.',a:{sp:'Bạn',zh:'我爸妈不让我放假时一个人去旅行，真是太过分了！',vn:'Bố mẹ tớ không cho tớ đi du lịch một mình lúc nghỉ, thật quá đáng!'},need:['Dùng 体谅 (có thể lặp: 体谅体谅)','Giúp bạn nhìn từ phía bố mẹ'],sample:'你也体谅体谅他们吧，他们是担心你的安全，并不是不信任你。',samplePy:'Nǐ yě tǐliàng tǐliàng tāmen ba, tāmen shì dānxīn nǐ de ānquán, bìng bú shì bú xìnrèn nǐ.',sampleVn:'Cậu cũng thông cảm cho bố mẹ chút đi, họ lo cho sự an toàn của cậu, chứ đâu phải không tin cậu.',tip:'体谅 lặp được (体谅体谅), 原谅 thì không. 并不是…… phủ định mạnh một cách hiểu sai.'},
    {scene:'Cô giáo báo tin bài văn của em được đăng trên tạp chí.',a:{sp:'Cô',zh:'你的作文在杂志上发表了，祝贺你！',vn:'Bài văn của em được đăng trên tạp chí rồi, chúc mừng em!'},need:['Dùng 顿时 hoặc 不由得','Tả cảm xúc của mình lúc nghe tin'],sample:'太好了！一听到这个好消息，我不由得跳了起来，这几天的紧张顿时都没有了。',samplePy:'Tài hǎo le! Yì tīngdào zhège hǎo xiāoxi, wǒ bùyóude tiàole qǐlai, zhè jǐ tiān de jǐnzhāng dùnshí dōu méiyǒu le.',sampleVn:'Tuyệt quá! Vừa nghe tin vui này em bất giác nhảy cẫng lên, bao căng thẳng mấy hôm nay lập tức tan biến.',tip:'不由得 + V (phản ứng tự nhiên), 顿时 + thay đổi trạng thái — cả hai đều kể việc vừa xảy ra.'}
  ]
};

// ══════════════════════════════════════════
// 🎯 NÓI SAO CHO HAY — 得体 / 语体
// ══════════════════════════════════════════
var registerData = {
  intro: 'Ở đây <b>cả hai câu đều đúng ngữ pháp</b> — không có câu sai. Việc của em là chọn câu <b>PHÙ HỢP HƠN</b> với hoàn cảnh. Lên HSK 6, chọn đúng sắc thái (văn viết / khẩu ngữ, trang trọng / thân mật) quan trọng không kém chọn đúng nghĩa.',
  items: [
    {scene:'Em viết bài văn "父母给我的爱" nộp cô giáo, kể lúc hiểu ra tình thương của bố mẹ.',a:'看着妈妈头上的白发，我马上就懂了。',b:'看着妈妈头上的白发，我顿时明白了一切。',better:'b',why:'顿时 mang sắc thái VĂN VIẾT, rất hợp để tả cảm xúc bừng tỉnh trong bài văn; 马上就懂了 là khẩu ngữ, nghe nhạt.'},
    {scene:'Em trai lo lắng vì sắp thi, em trấn an nó.',a:'甭担心，有我呢！',b:'您不用担心，一切都会顺利的。',better:'a',why:'甭 là khẩu ngữ thân mật, hợp khi nói với em trai. Câu b dùng 您 và giọng trang trọng — nói với em ruột nghe xa cách, gượng gạo.'},
    {scene:'Em viết thiệp cảm ơn cô giáo chủ nhiệm cũ.',a:'老师，你人挺好的，谢啦！',b:'老师，谢谢您三年来的关心，您的鼓励我永远不会忘记。',better:'b',why:'Thiệp gửi thầy cô cần trang trọng, chân thành: dùng 您, 关心, 鼓励. Câu kia quá suồng sã (你, 谢啦).'},
    {scene:'Em đã cáu gắt với mẹ, giờ muốn làm lành.',a:'妈，对不起，我不该跟您发脾气，您原谅我吧。',b:'行了行了，别唠叨了。',better:'a',why:'Muốn làm lành thì nhận lỗi và xin mẹ 原谅. 别唠叨了 là câu gạt đi, càng làm mẹ buồn.'},
    {scene:'Bạn thân than bố mẹ không hiểu mình, em góp ý.',a:'你父母就是不讲道理，别听他们的。',b:'你别总埋怨父母，他们也有自己的难处。',better:'b',why:'Câu a giúp bạn nhìn từ phía bố mẹ (埋怨 → 体谅); câu b đổ thêm dầu vào lửa, không phải lời khuyên phù hợp.'},
    {scene:'Em phát biểu trong buổi lễ tri ân cha mẹ ở trường.',a:'父母的爱，常常让我们热泪盈眶。',b:'父母的爱，常常让我们哭鼻子。',better:'a',why:'热泪盈眶 trang trọng, cảm động — hợp với lễ tri ân. 哭鼻子 là cách nói đùa, trêu trẻ con, không hợp hoàn cảnh trang nghiêm.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🗣️ KỂ LẠI BÀI ĐỌC 复述 — theo bảng 练习5 của sách
// ══════════════════════════════════════════════════════════════
var retellData = {
  intro: 'Đây là bài tập 5 trong sách: <b>根据提示，简述课文主要内容</b> — kể lại bài khoá bằng lời của chính em, ' +
         'KHÔNG đọc thuộc lòng. Nhìn câu hỏi và gợi ý của từng dòng bảng, bấm ghi âm rồi kể khoảng 1–2 phút.',
  outline: [
    {step:'“我”的家庭是什么样的家庭？', cue:'①父母感情…… ②父母对我的态度…… ③我的独立能力……', words:['和蔼','和气','慈祥','跨','自主','甭','脱离','诱惑','无比','向往']},
    {step:'上大学后，“我”想家的感受是什么样的？', cue:'①心里的孤独感…… ②别的同学…… ③我也恨不得……', words:['孤独','哭鼻子','片刻','步伐','包围','感染','恨不得','跟前','团圆']},
    {step:'假期到来时，父母给“我”什么建议？“我”能理解吗？', cue:'①要没什么事，就……，在学校……，或找份…… ②我无法……，心中暗暗……', words:['近来','甭','酝酿','刹那','反常','埋怨','体谅','无精打采','规划','熬','漫长']},
    {step:'“我”的假期是怎么度过的？', cue:'①在图书馆…… ②给杂志社……', words:['寂静','稿件','难得']},
    {step:'“我”回家后，知道了什么真相？', cue:'（Sách để trống — tự kể: 母亲的心疼 → 半夜的谈话 → 父母的目光、白发、皱纹 → 顿时…… · 不由得……）', words:['心疼','掩饰','隐瞒','唠叨','吃苦','欣慰','本事','目光','皱纹','顿时','不由得','热泪盈眶']}
  ],
  checklist: [
    'Kể đủ cả 5 ý theo đúng thứ tự bảng 练习5 chưa?',
    'Ý 2 có dùng 孤独、哭鼻子、恨不得……跟前 không?',
    'Ý 3 có nói rõ lời khuyên của mẹ (甭回来了) và tâm trạng "tôi" (埋怨、不体谅) không?',
    'Ý 5 có nói được SỰ THẬT (bố mẹ muốn "tôi" chịu khổ để có bản lĩnh) và kết bằng 顿时…… / 不由得热泪盈眶 không?',
    'Có kể bằng LỜI MÌNH (ngôi thứ ba "她" hoặc "我" đều được), hay đang đọc thuộc nguyên văn?'
  ]
};

// ══════════════════════════════════════════
// SGK · 练习 (Bài tập trong sách, tr. 29–30) — đáp án theo đáp án sách
// 练习1 (模仿例子) · 练习2 (用所给词语完成句子 — sách không in đáp án, câu mẫu tự soạn)
// 练习3 (选词填空, 2 đoạn) · 练习4 (阅读语段，模仿造句)
// ══════════════════════════════════════════
var sgkData = [
  {kieu:'mr', de:'模仿例子，写出更多的词语', vn:'Bắt chước ví dụ, viết thêm các từ ngữ có chữ được đánh dấu',
   vd:{tu:'和蔼', chu:'和', ds:['和睦','和气','和平','心平气和']},
   cau:[
     {tu:'脱离', chu:'离', dap:['分离','离婚','离别','离开'], them:['远离','离家','离职','离校','隔离'], giai:'离 ở đây nghĩa là rời khỏi, tách ra, xa cách.'},
     {tu:'无比', chu:'无', dap:['无奈','无法','无论','无可厚非'], them:['无数','无聊','无限','无私','无知','无关'], giai:'无 = không có (phủ định sự tồn tại), tương đương 没有.'},
     {tu:'吃苦', chu:'苦', dap:['艰苦','辛苦','劳苦','苦心经营'], them:['痛苦','刻苦','困苦','受苦','苦难','苦恼'], giai:'苦 ở đây là vất vả, khổ cực (không phải vị đắng).'},
     {tu:'顿时', chu:'时', dap:['时间','时候','时差','暂时'], them:['及时','按时','同时','当时','时刻','时期'], giai:'时 = thời gian, lúc, khi.'}
   ]},
  {kieu:'gx', de:'用所给词语完成句子', vn:'Dùng từ ngữ cho sẵn hoàn thành câu (sách không in đáp án cố định — đây là câu mẫu)',
   cau:[
     {s:'我喜欢旅行，＿＿＿＿。', tu:'向往', dap:'我喜欢旅行，一直很向往去西藏看看。', giai:'Câu mẫu. 向往 + nơi chốn / cuộc sống: khao khát được đến, được có; trước 向往 thêm được 很 / 一直.'},
     {s:'那家饭馆的环境很不好，顾客们＿＿＿＿。', tu:'埋怨', dap:'那家饭馆的环境很不好，顾客们都埋怨服务员不打扫卫生。', giai:'Câu mẫu. 埋怨 + người + 不 + V: trách ai không làm gì.'},
     {s:'看到这么精彩的表演，大家＿＿＿＿。', tu:'不由得', dap:'看到这么精彩的表演，大家不由得鼓起掌来。', giai:'Câu mẫu. 不由得 + V: bất giác làm gì vì bị tác động (vế trước là nguyên nhân).'},
     {s:'中秋节，全家团圆在一起，妈妈＿＿＿＿。', tu:'无比', dap:'中秋节，全家团圆在一起，妈妈无比高兴。', giai:'Câu mẫu. 无比 + tính từ / động từ tâm lý hai âm tiết: 无比高兴, 无比幸福.'},
     {s:'一天没吃饭，我饿坏了，＿＿＿＿。', tu:'恨不得', dap:'一天没吃饭，我饿坏了，恨不得一口吃下一大碗面条。', giai:'Câu mẫu. 恨不得 + V: nóng lòng muốn làm ngay (thường là điều thực tế không làm được).'},
     {s:'他丢了工作，但怕妈妈担心，所以＿＿＿＿。', tu:'隐瞒', dap:'他丢了工作，但怕妈妈担心，所以一直对她隐瞒着这件事。', giai:'Câu mẫu. 对 + người + 隐瞒 + sự việc; 一直……着 = cứ giấu mãi.'}
   ]},
  {kieu:'kho', de:'选择合适的词语填空', vn:'Chọn từ thích hợp điền vào chỗ trống (đoạn ①)', tu:['无精打采','隐瞒','反常','热泪盈眶','不由得'],
   cau:[
     {s:'最近我的朋友小李有些＿＿，每天都＿＿的，他以前可是非常开朗的啊。我＿＿担心起他来。于是我找了个机会跟他说：“如果你遇到了什么困难，千万别＿＿，告诉我，我们一起想办法解决吧！”听了我的话，小李感动得＿＿。', dap:['反常','无精打采','不由得','隐瞒','热泪盈眶']}
   ]},
  {kieu:'kho', de:'选择合适的词语填空', vn:'Chọn từ thích hợp điền vào chỗ trống (đoạn ②)', tu:['酝酿','埋怨','近来','顿时','体谅'],
   cau:[
     {s:'＿＿公司的事情比较多，我＿＿已久的旅行也只能放弃了。心中暗暗＿＿老板太不＿＿员工了。但反过来一想，只有公司发展好了，我们才会有更好的未来。于是，那些不满的情绪＿＿消失了。', dap:['近来','酝酿','埋怨','体谅','顿时']}
   ]},
  {kieu:'mp', de:'阅读语段，模仿造句', vn:'Đọc đoạn văn, bắt chước đặt câu (sách không in đáp án cố định — đây là gợi ý)',
   cau:[
     {mau:'【记得】刚开学的时候，宿舍里的同学【一】给家里打电话【就】哭鼻子，【每到】节假日，大家【更是】片刻不停地往家赶。回家的快乐和被亲情包围的幸福感染了我，我也【恨不得】马上飞到父母跟前，与他们团圆。',
      khung:'记得＿＿的时候，我一＿＿就＿＿，每到＿＿，我更是＿＿。那些下班后急忙忙赶回家的人们感染了我，我也恨不得＿＿。',
      dap:['刚到北京工作','想起家乡的饭菜','忍不住给妈妈打电话','周末','一个人待在宿舍里，哪儿也不想去','马上坐上回家的火车，吃一顿妈妈做的饭'],
      giai:'记得……的时候 (nhớ hồi …) + 一……就…… (hễ … là …) + 每到……，更是…… (cứ đến … lại càng …) + 恨不得 + V (nóng lòng muốn …).'},
     {mau:'“孩子比在家时瘦多了，【肯定是】吃苦了，【可】她的变化还是挺让咱们欣慰的。”',
      khung:'他现在开着豪华汽车，全身上下都是名牌，肯定是＿＿，可＿＿。',
      dap:['这几年做生意赚了大钱','他还是跟以前一样说话和气，一点儿架子也没有'],
      giai:'肯定是 + suy đoán chắc chắn dựa trên điều thấy được, 可 + ý chuyển ngược lại (nhưng …).'}
   ]}
];
