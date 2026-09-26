// ══════════════════════════════════════════
// DATA — HSK5 Bài 2: 留串钥匙给父母 (Để lại cho bố mẹ một chùm chìa khoá)
// Unit 1 了解生活 · Nguồn: HSK标准教程5上 + slide giáo viên + giáo án từ vựng của thầy/cô
// ══════════════════════════════════════════

var vocabData = [
  {n:1,zh:'串',py:'chuàn',pos:'Lượng từ',vn:'chuỗi, xâu, chùm',hv:'xuyến',em:'🔑',lesson:1,
   explain:['Đếm những vật xâu lại thành dãy, hoặc những thứ nối tiếp nhau thành chuỗi.'],
   usage:'一串 + danh từ. Dùng được cả cho vật cụ thể (chìa khoá, nho) lẫn trừu tượng (tiếng cười, con số).',
   collo:['一串钥匙','一串葡萄','一串笑声','一串脚印'],
   ex_zh:'门口传来一串笑声。',ex_py:'Ménkǒu chuánlái yí chuàn xiàoshēng.',ex_vn:'Ngoài cửa vọng vào một tràng tiếng cười.',
   exList:[
     {zh:'门口传来一串笑声。',py:'Ménkǒu chuánlái yí chuàn xiàoshēng.',vn:'Ngoài cửa vọng vào một tràng tiếng cười.'},
     {zh:'地上留下了一串脚印。',py:'Dì shang liúxiàle yí chuàn jiǎoyìn.',vn:'Trên mặt đất để lại một dãy dấu chân.'},
     {zh:'他说了一串我听不懂的数字。',py:'Tā shuōle yí chuàn wǒ tīng bu dǒng de shùzì.',vn:'Anh ấy đọc một tràng con số mà tôi không hiểu.'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Trên bàn có một chùm chìa khoá.',answer:'桌子上有一串钥匙。',answerPy:'Zhuōzi shang yǒu yí chuàn yàoshi.',
      note:'串 là lượng từ chuyên dùng cho chìa khoá.'}
   ]},

  {n:2,zh:'一辈子',py:'yíbèizi',pos:'Danh từ',vn:'suốt đời, cả đời',hv:'nhất bối tử',em:'⏳',lesson:1,
   explain:['Toàn bộ quãng đời của một người.'],
   usage:'Làm trạng ngữ (一辈子住在……) hoặc định ngữ (一辈子的朋友).',
   collo:['一辈子住在','一辈子忘不了','一辈子的朋友','一辈子的梦想'],
   ex_zh:'这件事我一辈子不会忘记。',ex_py:'Zhè jiàn shì wǒ yíbèizi bú huì wàngjì.',ex_vn:'Chuyện này cả đời tôi không quên.',
   exList:[
     {zh:'这件事我一辈子不会忘记。',py:'Zhè jiàn shì wǒ yíbèizi bú huì wàngjì.',vn:'Chuyện này cả đời tôi không quên.'},
     {zh:'父母一辈子为孩子付出。',py:'Fùmǔ yíbèizi wèi háizi fùchū.',vn:'Cha mẹ cả đời hy sinh vì con.'},
     {zh:'父母一辈子住在农村老家。',py:'Fùmǔ yíbèizi zhù zài nóngcūn lǎojiā.',vn:'Bố mẹ cả đời sống ở quê.'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi sẽ nhớ lời thầy cả đời.',answer:'老师的话我一辈子都记得。',answerPy:'Lǎoshī de huà wǒ yíbèizi dōu jìde.',
      note:'一辈子 đứng trước động từ, hay đi với 都.'}
   ]},

  {n:3,zh:'农村',py:'nóngcūn',pos:'Danh từ',vn:'nông thôn',hv:'nông thôn',em:'🌾',lesson:1,
   explain:['Vùng quê, nơi người dân chủ yếu làm nông.'],
   usage:'Làm định ngữ: 农村生活, 农村孩子. Trái nghĩa: 城市.',
   collo:['农村生活','农村地区','农村家庭','农村孩子'],
   ex_zh:'很多农村孩子去城市读书。',ex_py:'Hěn duō nóngcūn háizi qù chéngshì dúshū.',ex_vn:'Nhiều trẻ em nông thôn lên thành phố học.',
   exList:[
     {zh:'很多农村孩子去城市读书。',py:'Hěn duō nóngcūn háizi qù chéngshì dúshū.',vn:'Nhiều trẻ em nông thôn lên thành phố học.'},
     {zh:'农村生活比较安静。',py:'Nóngcūn shēnghuó bǐjiào ānjìng.',vn:'Cuộc sống nông thôn khá yên tĩnh.'},
     {zh:'他出生于农村。',py:'Tā chūshēng yú nóngcūn.',vn:'Anh ấy sinh ra ở nông thôn.'}
   ]},

  {n:4,zh:'屋子',py:'wūzi',pos:'Danh từ',vn:'căn phòng, gian nhà',hv:'ốc tử',em:'🏠',lesson:1,
   explain:['Gian phòng trong nhà. Khẩu ngữ, gần nghĩa với 房间.'],
   usage:'打扫屋子, 收拾屋子. 老屋 = ngôi nhà cũ (xuất hiện trong bài đọc).',
   collo:['打扫屋子','收拾屋子','屋子很亮','老屋'],
   ex_zh:'这间屋子很亮。',ex_py:'Zhè jiān wūzi hěn liàng.',ex_vn:'Căn phòng này rất sáng.',
   exList:[
     {zh:'这间屋子很亮。',py:'Zhè jiān wūzi hěn liàng.',vn:'Căn phòng này rất sáng.'},
     {zh:'妈妈正在打扫屋子。',py:'Māma zhèngzài dǎsǎo wūzi.',vn:'Mẹ đang quét dọn nhà.'}
   ]},

  {n:5,zh:'断',py:'duàn',pos:'Động từ',vn:'đứt, cắt, ngắt',hv:'đoạn',em:'✂️',lesson:1,
   explain:['Gãy làm đôi, hoặc ngắt quãng không còn tiếp tục.'],
   usage:'断电 (mất điện), 断水, 电话断了. Nghĩa mở rộng: 断绝关系 (cắt đứt quan hệ). Trong bài: 没断奶的孩子 = đứa trẻ chưa cai sữa.',
   collo:['绳子断了','断电','断水','断绝关系'],
   ex_zh:'突然断电了。',ex_py:'Tūrán duàndiàn le.',ex_vn:'Đột nhiên mất điện.',
   exList:[
     {zh:'突然断电了。',py:'Tūrán duàndiàn le.',vn:'Đột nhiên mất điện.'},
     {zh:'电话突然断了。',py:'Diànhuà tūrán duàn le.',vn:'Điện thoại đột nhiên bị ngắt.'},
     {zh:'他们已经断绝关系了。',py:'Tāmen yǐjīng duànjué guānxi le.',vn:'Họ đã cắt đứt quan hệ.'}
   ]},

  {n:6,zh:'以来',py:'yǐlái',pos:'Danh từ',vn:'từ… đến nay',hv:'dĩ lai',em:'📅',lesson:1,
   explain:['Chỉ khoảng thời gian tính từ một mốc trong quá khứ cho tới hiện tại. Đây là điểm ngữ pháp thứ nhất của bài.'],
   usage:'Đứng SAU cụm thời gian hoặc động từ: 自从毕业以来, 来到中国以来, 长年以来. Vế sau thường có 一直.',
   collo:['自从……以来','来到中国以来','去年以来','长年以来'],
   ex_zh:'毕业以来，他一直在北京工作。',ex_py:'Bìyè yǐlái, tā yìzhí zài Běijīng gōngzuò.',ex_vn:'Từ khi tốt nghiệp đến nay, anh ấy luôn làm việc ở Bắc Kinh.',
   exList:[
     {zh:'毕业以来，他一直在北京工作。',py:'Bìyè yǐlái, tā yìzhí zài Běijīng gōngzuò.',vn:'Từ khi tốt nghiệp đến nay, anh ấy luôn làm việc ở Bắc Kinh.'},
     {zh:'来到中国以来，我认识了很多朋友。',py:'Láidào Zhōngguó yǐlái, wǒ rènshile hěn duō péngyou.',vn:'Từ khi đến Trung Quốc, tôi đã quen nhiều bạn.'},
     {zh:'长年以来，父母很少离开老屋。',py:'Chángnián yǐlái, fùmǔ hěn shǎo líkāi lǎowū.',vn:'Bao năm nay, bố mẹ rất ít khi rời ngôi nhà cũ.'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Từ năm ngoái đến nay tôi rất bận.',answer:'去年以来，我一直很忙。',answerPy:'Qùnián yǐlái, wǒ yìzhí hěn máng.',
      note:'以来 đứng SAU mốc thời gian, không đứng trước.'}
   ]},

  {n:7,zh:'姥姥',py:'lǎolao',pos:'Danh từ',vn:'bà ngoại',hv:'lão lão',em:'👵',lesson:1,
   explain:['Mẹ của mẹ. Cách gọi phổ biến ở miền Bắc Trung Quốc; miền Nam hay nói 外婆.'],
   usage:'姥姥家, 看望姥姥. Chồng của bà ngoại là 姥爷.',
   collo:['姥姥家','看望姥姥','姥姥做饭'],
   ex_zh:'我常常去姥姥家。',ex_py:'Wǒ chángcháng qù lǎolao jiā.',ex_vn:'Tôi thường về nhà bà ngoại.',
   exList:[
     {zh:'我常常去姥姥家。',py:'Wǒ chángcháng qù lǎolao jiā.',vn:'Tôi thường về nhà bà ngoại.'},
     {zh:'姥姥做的菜很好吃。',py:'Lǎolao zuò de cài hěn hǎochī.',vn:'Món bà ngoại nấu rất ngon.'}
   ]},

  {n:8,zh:'舅舅',py:'jiùjiu',pos:'Danh từ',vn:'cậu (anh/em trai của mẹ)',hv:'cữu cữu',em:'👨',lesson:1,
   explain:['Anh hoặc em trai của mẹ. Vợ của cậu gọi là 舅妈.'],
   usage:'舅舅家, 看望舅舅.',
   collo:['舅舅家','看望舅舅','舅妈'],
   ex_zh:'我舅舅在北京工作。',ex_py:'Wǒ jiùjiu zài Běijīng gōngzuò.',ex_vn:'Cậu tôi làm việc ở Bắc Kinh.',
   exList:[
     {zh:'我舅舅在北京工作。',py:'Wǒ jiùjiu zài Běijīng gōngzuò.',vn:'Cậu tôi làm việc ở Bắc Kinh.'},
     {zh:'舅舅给我买了礼物。',py:'Jiùjiu gěi wǒ mǎile lǐwù.',vn:'Cậu mua quà cho tôi.'}
   ]},

  {n:9,zh:'姑姑',py:'gūgu',pos:'Danh từ',vn:'cô (chị/em gái của bố)',hv:'cô cô',em:'👩',lesson:1,
   explain:['Chị hoặc em gái của bố. Chồng của cô gọi là 姑父.'],
   usage:'姑姑家, 看望姑姑.',
   collo:['姑姑家','看望姑姑','姑父'],
   ex_zh:'我姑姑住在上海。',ex_py:'Wǒ gūgu zhù zài Shànghǎi.',ex_vn:'Cô tôi sống ở Thượng Hải.',
   exList:[
     {zh:'我姑姑住在上海。',py:'Wǒ gūgu zhù zài Shànghǎi.',vn:'Cô tôi sống ở Thượng Hải.'},
     {zh:'小时候我常去姑姑家玩儿。',py:'Xiǎo shíhou wǒ cháng qù gūgu jiā wánr.',vn:'Hồi nhỏ tôi thường đến nhà cô chơi.'}
   ]},

  {n:10,zh:'坚决',py:'jiānjué',pos:'Tính từ',vn:'kiên quyết, dứt khoát',hv:'kiên quyết',em:'✊',lesson:1,
   explain:['Thái độ rõ ràng, không lay chuyển.'],
   usage:'Làm trạng ngữ đứng trước động từ: 坚决反对, 坚决不同意. Cũng làm vị ngữ: 态度坚决.',
   collo:['坚决反对','坚决不同意','态度坚决','坚决支持'],
   ex_zh:'他坚决不同意这个计划。',ex_py:'Tā jiānjué bù tóngyì zhège jìhuà.',ex_vn:'Anh ấy kiên quyết không đồng ý kế hoạch này.',
   exList:[
     {zh:'他坚决不同意这个计划。',py:'Tā jiānjué bù tóngyì zhège jìhuà.',vn:'Anh ấy kiên quyết không đồng ý kế hoạch này.'},
     {zh:'父母也坚决不在城里住。',py:'Fùmǔ yě jiānjué bú zài chéng li zhù.',vn:'Bố mẹ cũng kiên quyết không ở lại thành phố.'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Anh ấy kiên quyết phản đối quyết định này.',answer:'他坚决反对这个决定。',answerPy:'Tā jiānjué fǎnduì zhège juédìng.',
      note:'坚决 đứng TRƯỚC động từ, không đứng sau.'}
   ]},

  {n:11,zh:'打工',py:'dǎgōng',pos:'Động từ',vn:'làm thuê, đi làm kiếm tiền',hv:'đả công',em:'👷',lesson:1,
   explain:['Làm công ăn lương cho người khác, thường là việc tạm thời hoặc xa nhà.'],
   usage:'LY HỢP TỪ: 打过工, 打了几年工. Hay gặp: 外出打工, 到城市打工.',
   collo:['外出打工','到城市打工','打工挣钱','打工族'],
   ex_zh:'现在有很多人离开农村去大城市打工。',ex_py:'Xiànzài yǒu hěn duō rén líkāi nóngcūn qù dà chéngshì dǎgōng.',ex_vn:'Bây giờ nhiều người rời nông thôn lên thành phố lớn làm thuê.',
   exList:[
     {zh:'现在有很多人离开农村去大城市打工。',py:'Xiànzài yǒu hěn duō rén líkāi nóngcūn qù dà chéngshì dǎgōng.',vn:'Bây giờ nhiều người rời nông thôn lên thành phố lớn làm thuê.'},
     {zh:'他打了很多年工才买到房子。',py:'Tā dǎle hěn duō nián gōng cái mǎidào fángzi.',vn:'Anh ấy làm thuê nhiều năm mới mua được nhà.'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Anh ấy đi Quảng Châu làm thuê.',answer:'他去广州打工了。',answerPy:'Tā qù Guǎngzhōu dǎgōng le.',
      note:'打工 là ly hợp từ, khi thêm thành phần thì chen vào giữa: 打了三年工.'}
   ]},

  {n:12,zh:'挣',py:'zhèng',pos:'Động từ',vn:'kiếm (tiền)',hv:'tránh',em:'💰',lesson:1,
   explain:['Dùng sức lao động của mình mà có được tiền.'],
   usage:'挣钱 là cụm hay gặp nhất. Khác 赚 (zhuàn) thiên về lời lãi buôn bán.',
   collo:['挣钱养家','努力挣钱','挣钱不容易'],
   ex_zh:'夫妻俩在上海打工，挣了一些钱。',ex_py:'Fūqī liǎ zài Shànghǎi dǎgōng, zhèngle yìxiē qián.',ex_vn:'Hai vợ chồng làm thuê ở Thượng Hải, kiếm được ít tiền.',
   exList:[
     {zh:'夫妻俩在上海打工，挣了一些钱。',py:'Fūqī liǎ zài Shànghǎi dǎgōng, zhèngle yìxiē qián.',vn:'Hai vợ chồng làm thuê ở Thượng Hải, kiếm được ít tiền.'},
     {zh:'父母努力挣钱养家。',py:'Fùmǔ nǔlì zhèngqián yǎngjiā.',vn:'Bố mẹ cố gắng kiếm tiền nuôi gia đình.'}
   ]},

  {n:13,zh:'县',py:'xiàn',pos:'Danh từ',vn:'huyện',hv:'huyện',em:'🏙️',lesson:1,
   explain:['Đơn vị hành chính dưới tỉnh — giống "huyện" của Việt Nam. Thứ tự: 省 → 市 → 县 → 乡/镇.'],
   usage:'县城 (thị trấn huyện lỵ), 县政府, 县医院.',
   collo:['县城','县政府','县医院'],
   ex_zh:'这是我们县最古老的房子。',ex_py:'Zhè shì wǒmen xiàn zuì gǔlǎo de fángzi.',ex_vn:'Đây là ngôi nhà cổ nhất huyện chúng tôi.',
   exList:[
     {zh:'这是我们县最古老的房子。',py:'Zhè shì wǒmen xiàn zuì gǔlǎo de fángzi.',vn:'Đây là ngôi nhà cổ nhất huyện chúng tôi.'},
     {zh:'他在县城买了一套房子。',py:'Tā zài xiànchéng mǎile yí tào fángzi.',vn:'Anh ấy mua một căn nhà ở thị trấn huyện.'}
   ]},

  {n:14,zh:'套',py:'tào',pos:'Lượng từ',vn:'bộ, căn (nhà)',hv:'sáo',em:'🛋️',lesson:1,
   explain:['Đếm những thứ đi thành bộ: nhà, bàn ghế, quần áo, thiết bị.'],
   usage:'一套房子, 一套家具, 一套衣服.',
   collo:['一套房子','一套家具','一套衣服','一套设备'],
   ex_zh:'他们在县里买了一套房子。',ex_py:'Tāmen zài xiàn li mǎile yí tào fángzi.',ex_vn:'Họ mua một căn nhà ở huyện.',
   exList:[
     {zh:'他们在县里买了一套房子。',py:'Tāmen zài xiàn li mǎile yí tào fángzi.',vn:'Họ mua một căn nhà ở huyện.'},
     {zh:'这套家具很贵。',py:'Zhè tào jiājù hěn guì.',vn:'Bộ bàn ghế này rất đắt.'}
   ]},

  {n:15,zh:'装修',py:'zhuāngxiū',pos:'Động từ',vn:'sửa sang, trang trí (nhà)',hv:'trang tu',em:'🔨',lesson:1,
   explain:['Hoàn thiện và trang trí nhà cửa sau khi xây xong.'],
   usage:'装修房子, 装修风格. Bổ ngữ trạng thái: 装修得很漂亮.',
   collo:['装修房子','装修新房','装修风格'],
   ex_zh:'房子装修好了，过两个月就可以搬进去住了。',ex_py:'Fángzi zhuāngxiū hǎo le, guò liǎng ge yuè jiù kěyǐ bān jìnqù zhù le.',ex_vn:'Nhà sửa xong rồi, hai tháng nữa là dọn vào ở được.',
   exList:[
     {zh:'房子装修好了，过两个月就可以搬进去住了。',py:'Fángzi zhuāngxiū hǎo le, guò liǎng ge yuè jiù kěyǐ bān jìnqù zhù le.',vn:'Nhà sửa xong rồi, hai tháng nữa là dọn vào ở được.'},
     {zh:'房子装修得很漂亮。',py:'Fángzi zhuāngxiū de hěn piàoliang.',vn:'Nhà được sửa sang rất đẹp.'}
   ]},

  {n:16,zh:'不得了',py:'bùdéliǎo',pos:'Tính từ',vn:'vô cùng, ghê gớm',hv:'bất đắc liễu',em:'😆',lesson:1,
   explain:['Nhấn mạnh mức độ cực cao. Luôn đứng SAU 得, làm bổ ngữ trình độ.'],
   usage:'Tính từ/động từ + 得不得了: 高兴得不得了, 累得不得了. KHÔNG nói 很不得了.',
   collo:['高兴得不得了','累得不得了','忙得不得了'],
   ex_zh:'哥哥买了一套新房子，父母高兴得不得了。',ex_py:'Gēge mǎile yí tào xīn fángzi, fùmǔ gāoxìng de bùdéliǎo.',ex_vn:'Anh trai mua được căn nhà mới, bố mẹ mừng không để đâu cho hết.',
   exList:[
     {zh:'哥哥买了一套新房子，父母高兴得不得了。',py:'Gēge mǎile yí tào xīn fángzi, fùmǔ gāoxìng de bùdéliǎo.',vn:'Anh trai mua được căn nhà mới, bố mẹ mừng không để đâu cho hết.'},
     {zh:'今天忙得不得了。',py:'Jīntiān máng de bùdéliǎo.',vn:'Hôm nay bận kinh khủng.'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Hôm qua tôi mệt kinh khủng.',answer:'昨天我累得不得了。',answerPy:'Zuótiān wǒ lèi de bùdéliǎo.',
      note:'Phải có 得 ở giữa: 累得不得了, không nói 很不得了累.'}
   ]},

  {n:17,zh:'醉',py:'zuì',pos:'Động từ',vn:'say (rượu)',hv:'tuý',em:'🍶',lesson:1,
   explain:['Uống rượu quá nhiều nên mất tỉnh táo.'],
   usage:'喝醉 (uống say) là dạng hay dùng nhất. Nghĩa mở rộng: 陶醉 = say mê.',
   collo:['喝醉','醉酒','喝得很醉'],
   ex_zh:'他昨天喝醉了。',ex_py:'Tā zuótiān hēzuì le.',ex_vn:'Hôm qua anh ấy uống say rồi.',
   exList:[
     {zh:'他昨天喝醉了。',py:'Tā zuótiān hēzuì le.',vn:'Hôm qua anh ấy uống say rồi.'},
     {zh:'我从来没喝醉过。',py:'Wǒ cónglái méi hēzuìguo.',vn:'Tôi chưa bao giờ uống say.'}
   ]},

  {n:18,zh:'强烈',py:'qiángliè',pos:'Tính từ',vn:'mạnh mẽ, mãnh liệt',hv:'cường liệt',em:'🔥',lesson:1,
   explain:['Mức độ rất mạnh — dùng cho thái độ, yêu cầu, ánh sáng, cảm xúc.'],
   usage:'Làm trạng ngữ: 强烈反对, 强烈建议. Cũng tả ánh nắng: 阳光很强烈.',
   collo:['强烈反对','强烈要求','强烈建议','阳光强烈'],
   ex_zh:'大家强烈反对这个计划。',ex_py:'Dàjiā qiángliè fǎnduì zhège jìhuà.',ex_vn:'Mọi người phản đối mạnh mẽ kế hoạch này.',
   exList:[
     {zh:'大家强烈反对这个计划。',py:'Dàjiā qiángliè fǎnduì zhège jìhuà.',vn:'Mọi người phản đối mạnh mẽ kế hoạch này.'},
     {zh:'我们强烈留父母在新房住一夜。',py:'Wǒmen qiángliè liú fùmǔ zài xīnfáng zhù yí yè.',vn:'Chúng tôi hết sức giữ bố mẹ ở lại nhà mới một đêm.'}
   ]},

  {n:19,zh:'夜',py:'yè',pos:'Danh từ',vn:'đêm',hv:'dạ',em:'🌙',lesson:1,
   explain:['Khoảng thời gian tối, đối lập với 日/白天. Thiên về văn viết hơn 晚上.'],
   usage:'夜里, 深夜, 夜晚. Làm lượng từ: 住一夜 (ở lại một đêm).',
   collo:['夜里','深夜','夜晚','住一夜'],
   ex_zh:'深夜街上很安静。',ex_py:'Shēnyè jiē shang hěn ānjìng.',ex_vn:'Đêm khuya ngoài phố rất yên tĩnh.',
   exList:[
     {zh:'深夜街上很安静。',py:'Shēnyè jiē shang hěn ānjìng.',vn:'Đêm khuya ngoài phố rất yên tĩnh.'},
     {zh:'我们回家时是一个深冬的夜里。',py:'Wǒmen huíjiā shí shì yí ge shēndōng de yè li.',vn:'Lúc chúng tôi về nhà là một đêm giữa mùa đông.'}
   ]},

  {n:20,zh:'锁',py:'suǒ',pos:'Danh từ / Động từ',vn:'ổ khoá; khoá lại',hv:'toả',em:'🔒',lesson:1,
   explain:['Danh từ: cái khoá. Động từ: khoá lại.'],
   usage:'锁门 (khoá cửa), 上锁 (khoá vào), 门锁 (ổ khoá cửa).',
   collo:['锁门','上锁','门锁','密码锁'],
   ex_zh:'请记得锁门。',ex_py:'Qǐng jìde suǒ mén.',ex_vn:'Nhớ khoá cửa nhé.',
   exList:[
     {zh:'请记得锁门。',py:'Qǐng jìde suǒ mén.',vn:'Nhớ khoá cửa nhé.'},
     {zh:'新房只能上锁空着。',py:'Xīnfáng zhǐ néng shàngsuǒ kōngzhe.',vn:'Nhà mới đành khoá lại để trống.'}
   ]},

  {n:21,zh:'临',py:'lín',pos:'Giới từ',vn:'ngay trước khi, sắp',hv:'lâm',em:'⏱️',lesson:1,
   explain:['Chỉ thời điểm ngay sát trước một việc sắp xảy ra. Đây là điểm ngữ pháp thứ hai của bài.'],
   usage:'临 + động từ (một âm tiết là chính): 临走, 临睡前, 临出发. Thường đi với 的时候 hoặc 前.',
   collo:['临走','临睡前','临出发','临时决定'],
   ex_zh:'临走的时候，他给我打了电话。',ex_py:'Lín zǒu de shíhou, tā gěi wǒ dǎle diànhuà.',ex_vn:'Ngay trước lúc đi, anh ấy gọi điện cho tôi.',
   exList:[
     {zh:'临走的时候，他给我打了电话。',py:'Lín zǒu de shíhou, tā gěi wǒ dǎle diànhuà.',vn:'Ngay trước lúc đi, anh ấy gọi điện cho tôi.'},
     {zh:'临考试前，他每天学习到很晚。',py:'Lín kǎoshì qián, tā měi tiān xuéxí dào hěn wǎn.',vn:'Ngay trước kỳ thi, ngày nào anh ấy cũng học đến khuya.'},
     {zh:'临走那天，父亲从老家赶来送我们。',py:'Lín zǒu nà tiān, fùqīn cóng lǎojiā gǎnlái sòng wǒmen.',vn:'Hôm sắp đi, bố từ quê vội lên tiễn chúng tôi.'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Trước khi ngủ không nên xem điện thoại.',answer:'临睡前不应该看手机。',answerPy:'Lín shuì qián bù yīnggāi kàn shǒujī.',
      note:'临 + động từ MỘT âm tiết, rồi mới đến 前.'}
   ]},

  {n:22,zh:'悄悄',py:'qiāoqiāo',pos:'Phó từ',vn:'lặng lẽ, khẽ khàng',hv:'tiễu tiễu',em:'🤫',lesson:1,
   explain:['Làm việc gì đó nhẹ nhàng, không gây tiếng động — cốt để KHÔNG LÀM PHIỀN người khác.'],
   usage:'悄悄(地) + động từ. Hay nhầm với 偷偷 — xem kỹ thẻ "Phân biệt từ".',
   collo:['悄悄地走','悄悄离开','悄悄打开门'],
   ex_zh:'父亲悄悄把我拉到一边说话。',ex_py:'Fùqīn qiāoqiāo bǎ wǒ lādào yìbiān shuōhuà.',ex_vn:'Bố khẽ kéo tôi ra một bên nói chuyện.',
   exList:[
     {zh:'父亲悄悄把我拉到一边说话。',py:'Fùqīn qiāoqiāo bǎ wǒ lādào yìbiān shuōhuà.',vn:'Bố khẽ kéo tôi ra một bên nói chuyện.'},
     {zh:'孩子悄悄走进房间，不想吵醒妈妈。',py:'Háizi qiāoqiāo zǒujìn fángjiān, bù xiǎng chǎoxǐng māma.',vn:'Đứa bé rón rén vào phòng, không muốn đánh thức mẹ.'}
   ]},

  {n:23,zh:'晒',py:'shài',pos:'Động từ',vn:'phơi; phơi nắng',hv:'sái',em:'☀️',lesson:1,
   explain:['Để dưới ánh nắng cho khô hoặc cho ấm.'],
   usage:'晒太阳 (phơi nắng), 晒被子, 晒衣服. Nghĩa mới trong mạng xã hội: 晒照片 = khoe ảnh.',
   collo:['晒太阳','晒被子','晒衣服','晒照片'],
   ex_zh:'妈妈在院子里晒被子。',ex_py:'Māma zài yuànzi li shài bèizi.',ex_vn:'Mẹ đang phơi chăn ngoài sân.',
   exList:[
     {zh:'妈妈在院子里晒被子。',py:'Māma zài yuànzi li shài bèizi.',vn:'Mẹ đang phơi chăn ngoài sân.'},
     {zh:'老人喜欢晒太阳。',py:'Lǎorén xǐhuan shài tàiyáng.',vn:'Người già thích phơi nắng.'}
   ]},

  {n:24,zh:'被子',py:'bèizi',pos:'Danh từ',vn:'cái chăn',hv:'bị tử',em:'🛏️',lesson:1,
   explain:['Vật dùng đắp khi ngủ.'],
   usage:'Lượng từ 床: 一床被子. Động từ đi kèm: 盖被子 (đắp chăn), 铺被子 (trải chăn), 叠被子 (gấp chăn).',
   collo:['盖被子','铺被子','叠被子','厚被子'],
   ex_zh:'卧室床上的被子已铺好。',ex_py:'Wòshì chuáng shang de bèizi yǐ pūhǎo.',ex_vn:'Chăn trên giường phòng ngủ đã trải sẵn.',
   exList:[
     {zh:'卧室床上的被子已铺好。',py:'Wòshì chuáng shang de bèizi yǐ pūhǎo.',vn:'Chăn trên giường phòng ngủ đã trải sẵn.'},
     {zh:'冬天需要厚被子。',py:'Dōngtiān xūyào hòu bèizi.',vn:'Mùa đông cần chăn dày.'}
   ]},

  {n:25,zh:'长途',py:'chángtú',pos:'Tính từ',vn:'đường dài, đường xa',hv:'trường đồ',em:'🚌',lesson:1,
   explain:['Quãng đường xa. Làm định ngữ, không làm vị ngữ (không nói 路很长途).'],
   usage:'长途汽车, 长途电话, 长途旅行.',
   collo:['长途汽车','长途电话','长途旅行'],
   ex_zh:'下了长途车，儿子被冻得大哭。',ex_py:'Xiàle chángtú chē, érzi bèi dòng de dà kū.',ex_vn:'Xuống xe khách đường dài, con trai rét đến phát khóc.',
   exList:[
     {zh:'下了长途车，儿子被冻得大哭。',py:'Xiàle chángtú chē, érzi bèi dòng de dà kū.',vn:'Xuống xe khách đường dài, con trai rét đến phát khóc.'},
     {zh:'我们坐长途汽车回家。',py:'Wǒmen zuò chángtú qìchē huí jiā.',vn:'Chúng tôi đi xe khách đường dài về nhà.'}
   ]},

  {n:26,zh:'冻',py:'dòng',pos:'Động từ',vn:'đóng băng; rét cóng',hv:'đống',em:'🧊',lesson:1,
   explain:['Nước gặp lạnh thành băng; người gặp lạnh thì cóng.'],
   usage:'冻住, 冻坏. Câu bị động hay gặp: 被冻得……',
   collo:['冻住','冻坏','冻得发抖'],
   ex_zh:'天气太冷，手都冻了。',ex_py:'Tiānqì tài lěng, shǒu dōu dòng le.',ex_vn:'Trời lạnh quá, tay cóng cả rồi.',
   exList:[
     {zh:'天气太冷，手都冻了。',py:'Tiānqì tài lěng, shǒu dōu dòng le.',vn:'Trời lạnh quá, tay cóng cả rồi.'},
     {zh:'水冻住了。',py:'Shuǐ dòngzhù le.',vn:'Nước đóng băng rồi.'}
   ]},

  {n:27,zh:'想象',py:'xiǎngxiàng',pos:'Động từ',vn:'tưởng tượng',hv:'tưởng tượng',em:'💭',lesson:1,
   explain:['Hình dung trong đầu những gì chưa nhìn thấy.'],
   usage:'想象一下, 无法想象, 超出想象. Cũng làm danh từ: 我们的想象.',
   collo:['想象一下','无法想象','超出想象'],
   ex_zh:'我和妻子想象着打开家门满是灰尘的景象。',ex_py:'Wǒ hé qīzi xiǎngxiàngzhe dǎkāi jiā mén mǎn shì huīchén de jǐngxiàng.',ex_vn:'Tôi và vợ hình dung cảnh mở cửa nhà ra là đầy bụi.',
   exList:[
     {zh:'我和妻子想象着打开家门满是灰尘的景象。',py:'Wǒ hé qīzi xiǎngxiàngzhe dǎkāi jiā mén mǎn shì huīchén de jǐngxiàng.',vn:'Tôi và vợ hình dung cảnh mở cửa nhà ra là đầy bụi.'},
     {zh:'事情的发展超出了我们的想象。',py:'Shìqing de fāzhǎn chāochūle wǒmen de xiǎngxiàng.',vn:'Sự việc diễn biến vượt ngoài tưởng tượng của chúng tôi.'}
   ]},

  {n:28,zh:'灰尘',py:'huīchén',pos:'Danh từ',vn:'bụi',hv:'hôi trần',em:'🌫️',lesson:1,
   explain:['Những hạt đất nhỏ bám trên đồ vật.'],
   usage:'满是灰尘 (đầy bụi), 打扫灰尘.',
   collo:['很多灰尘','满是灰尘','打扫灰尘'],
   ex_zh:'房间里满是灰尘。',ex_py:'Fángjiān li mǎn shì huīchén.',ex_vn:'Trong phòng đầy bụi.',
   exList:[
     {zh:'房间里满是灰尘。',py:'Fángjiān li mǎn shì huīchén.',vn:'Trong phòng đầy bụi.'},
     {zh:'桌子上满是灰尘。',py:'Zhuōzi shang mǎn shì huīchén.',vn:'Trên bàn đầy bụi.'}
   ]},

  {n:29,zh:'亮',py:'liàng',pos:'Tính từ / Động từ',vn:'sáng; bật sáng',hv:'lượng',em:'💡',lesson:1,
   explain:['Tính từ: sáng. Động từ: (đèn) sáng lên.'],
   usage:'房间很亮, 灯亮了, 天亮了.',
   collo:['灯很亮','房间很亮','天亮了','亮着灯光'],
   ex_zh:'抬头一看，却发现自家亮着灯光。',ex_py:'Táitóu yí kàn, què fāxiàn zìjiā liàngzhe dēngguāng.',ex_vn:'Ngẩng đầu lên nhìn, lại thấy nhà mình đang sáng đèn.',
   exList:[
     {zh:'抬头一看，却发现自家亮着灯光。',py:'Táitóu yí kàn, què fāxiàn zìjiā liàngzhe dēngguāng.',vn:'Ngẩng đầu lên nhìn, lại thấy nhà mình đang sáng đèn.'},
     {zh:'天已经亮了。',py:'Tiān yǐjīng liàng le.',vn:'Trời đã sáng rồi.'}
   ]},

  {n:30,zh:'微笑',py:'wēixiào',pos:'Động từ / Danh từ',vn:'mỉm cười; nụ cười',hv:'vi tiếu',em:'🙂',lesson:1,
   explain:['Cười nhẹ, không thành tiếng.'],
   usage:'微笑着 + động từ (vừa cười vừa làm). Danh từ: 脸上带着微笑.',
   collo:['微笑着说','露出微笑','脸上带着微笑'],
   ex_zh:'开门的竟是微笑着的父母。',ex_py:'Kāimén de jìng shì wēixiàozhe de fùmǔ.',ex_vn:'Người ra mở cửa lại chính là bố mẹ đang mỉm cười.',
   exList:[
     {zh:'开门的竟是微笑着的父母。',py:'Kāimén de jìng shì wēixiàozhe de fùmǔ.',vn:'Người ra mở cửa lại chính là bố mẹ đang mỉm cười.'},
     {zh:'她微笑着看着我。',py:'Tā wēixiàozhe kànzhe wǒ.',vn:'Cô ấy mỉm cười nhìn tôi.'}
   ]},

  {n:31,zh:'温暖',py:'wēnnuǎn',pos:'Tính từ',vn:'ấm áp',hv:'ôn noãn',em:'🤗',lesson:1,
   explain:['Ấm — dùng cả cho nhiệt độ lẫn tình cảm. Đây là từ khoá của cả bài đọc.'],
   usage:'温暖的家, 感到温暖. Khác 暖和 ở chỗ 温暖 dùng được cho tình cảm.',
   collo:['温暖的家','温暖的笑容','感到温暖'],
   ex_zh:'能立刻感受到家的温暖。',ex_py:'Néng lìkè gǎnshòu dào jiā de wēnnuǎn.',ex_vn:'Có thể cảm nhận ngay hơi ấm của gia đình.',
   exList:[
     {zh:'能立刻感受到家的温暖。',py:'Néng lìkè gǎnshòu dào jiā de wēnnuǎn.',vn:'Có thể cảm nhận ngay hơi ấm của gia đình.'},
     {zh:'家是最温暖的地方。',py:'Jiā shì zuì wēnnuǎn de dìfang.',vn:'Nhà là nơi ấm áp nhất.'}
   ]},

  {n:32,zh:'立刻',py:'lìkè',pos:'Phó từ',vn:'lập tức, ngay',hv:'lập khắc',em:'⚡',lesson:1,
   explain:['Ngay sau đó, không chậm trễ. Đây là điểm ngữ pháp thứ ba của bài.'],
   usage:'Đứng TRƯỚC động từ, SAU chủ ngữ. Gần nghĩa 马上 nhưng trang trọng hơn một chút.',
   collo:['立刻回答','立刻行动','立刻出发'],
   ex_zh:'温暖的气息立刻扑面而来。',ex_py:'Wēnnuǎn de qìxī lìkè pū miàn ér lái.',ex_vn:'Hơi ấm lập tức ùa vào mặt.',
   exList:[
     {zh:'温暖的气息立刻扑面而来。',py:'Wēnnuǎn de qìxī lìkè pū miàn ér lái.',vn:'Hơi ấm lập tức ùa vào mặt.'},
     {zh:'老师一进教室，学生们立刻安静下来。',py:'Lǎoshī yí jìn jiàoshì, xuéshengmen lìkè ānjìng xiàlái.',vn:'Thầy vừa vào lớp, học sinh lập tức im lặng.'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi lập tức trả lời tin nhắn.',answer:'我立刻回复了消息。',answerPy:'Wǒ lìkè huífùle xiāoxi.',
      note:'立刻 đứng sau chủ ngữ, trước động từ.'}
   ]},

  {n:33,zh:'扑',py:'pū',pos:'Động từ',vn:'lao vào, ùa tới',hv:'phốc',em:'🏃',lesson:1,
   explain:['Lao mạnh về phía trước, hoặc (mùi, hơi) ùa tới.'],
   usage:'扑到……怀里, 扑过来. Thành ngữ trong bài: 扑面而来 (ùa vào mặt).',
   collo:['扑过来','扑到怀里','扑面而来'],
   ex_zh:'一阵香味扑面而来。',ex_py:'Yí zhèn xiāngwèi pū miàn ér lái.',ex_vn:'Một mùi thơm ùa vào mặt.',
   exList:[
     {zh:'一阵香味扑面而来。',py:'Yí zhèn xiāngwèi pū miàn ér lái.',vn:'Một mùi thơm ùa vào mặt.'},
     {zh:'孩子扑到妈妈怀里。',py:'Háizi pūdào māma huái li.',vn:'Đứa bé lao vào lòng mẹ.'}
   ]},

  {n:34,zh:'卧室',py:'wòshì',pos:'Danh từ',vn:'phòng ngủ',hv:'ngoạ thất',em:'🛌',lesson:1,
   explain:['Phòng để ngủ. 卧 = nằm, 室 = phòng.'],
   usage:'打扫卧室, 卧室很安静.',
   collo:['打扫卧室','卧室很大','卧室很安静'],
   ex_zh:'卧室床上的被子已铺好。',ex_py:'Wòshì chuáng shang de bèizi yǐ pūhǎo.',ex_vn:'Chăn trên giường phòng ngủ đã trải sẵn.',
   exList:[
     {zh:'卧室床上的被子已铺好。',py:'Wòshì chuáng shang de bèizi yǐ pūhǎo.',vn:'Chăn trên giường phòng ngủ đã trải sẵn.'}
   ]},

  {n:35,zh:'铺',py:'pū',pos:'Động từ',vn:'trải ra',hv:'phô',em:'🧺',lesson:1,
   explain:['Trải một vật phẳng ra bề mặt. Đồng âm với 扑 nhưng khác nghĩa hẳn.'],
   usage:'铺床, 铺被子, 铺地毯.',
   collo:['铺床','铺被子','铺地毯'],
   ex_zh:'妈妈在铺床。',ex_py:'Māma zài pū chuáng.',ex_vn:'Mẹ đang trải giường.',
   exList:[
     {zh:'妈妈在铺床。',py:'Māma zài pū chuáng.',vn:'Mẹ đang trải giường.'},
     {zh:'她把地毯铺在地上。',py:'Tā bǎ dìtǎn pū zài dì shang.',vn:'Cô ấy trải thảm ra sàn.'}
   ]},

  {n:36,zh:'飘',py:'piāo',pos:'Động từ',vn:'bay lượn, thoảng',hv:'phiêu',em:'🍃',lesson:1,
   explain:['Nhẹ nhàng bay trong không khí — mùi hương, tuyết, lá.'],
   usage:'飘来 (thoảng tới), 雪花飘.',
   collo:['飘来','飘香','雪花飘'],
   ex_zh:'厨房里飘来阵阵饭菜香。',ex_py:'Chúfáng li piāolái zhènzhèn fàncài xiāng.',ex_vn:'Từ bếp thoảng ra từng đợt mùi cơm canh.',
   exList:[
     {zh:'厨房里飘来阵阵饭菜香。',py:'Chúfáng li piāolái zhènzhèn fàncài xiāng.',vn:'Từ bếp thoảng ra từng đợt mùi cơm canh.'},
     {zh:'雪花慢慢地飘下来。',py:'Xuěhuā mànmàn de piāo xiàlái.',vn:'Bông tuyết chầm chậm bay xuống.'}
   ]},

  {n:37,zh:'阵',py:'zhèn',pos:'Lượng từ',vn:'cơn, trận, đợt',hv:'trận',em:'💨',lesson:1,
   explain:['Đếm sự việc kéo dài một quãng ngắn rồi dứt: cơn gió, trận cười, đợt mùi thơm.'],
   usage:'一阵 + danh từ. Dạng lặp 阵阵 nghĩa là từng đợt liên tiếp.',
   collo:['一阵风','一阵笑声','一阵香味','阵阵'],
   ex_zh:'门外传来一阵笑声。',ex_py:'Mén wài chuánlái yí zhèn xiàoshēng.',ex_vn:'Ngoài cửa vọng vào một trận cười.',
   exList:[
     {zh:'门外传来一阵笑声。',py:'Mén wài chuánlái yí zhèn xiàoshēng.',vn:'Ngoài cửa vọng vào một trận cười.'},
     {zh:'一阵风吹过。',py:'Yí zhèn fēng chuīguò.',vn:'Một cơn gió thổi qua.'}
   ]},

  {n:38,zh:'感受',py:'gǎnshòu',pos:'Động từ / Danh từ',vn:'cảm nhận; cảm nghĩ',hv:'cảm thụ',em:'❤️',lesson:1,
   explain:['Động từ: cảm nhận được. Danh từ: điều cảm nhận được.'],
   usage:'感受到 + danh từ. Danh từ: 对……的感受.',
   collo:['感受到温暖','感受生活','深刻的感受'],
   ex_zh:'我感受到家的温暖。',ex_py:'Wǒ gǎnshòu dào jiā de wēnnuǎn.',ex_vn:'Tôi cảm nhận được hơi ấm của gia đình.',
   exList:[
     {zh:'我感受到家的温暖。',py:'Wǒ gǎnshòu dào jiā de wēnnuǎn.',vn:'Tôi cảm nhận được hơi ấm của gia đình.'},
     {zh:'旅游帮我感受到不同的文化。',py:'Lǚyóu bāng wǒ gǎnshòu dào bùtóng de wénhuà.',vn:'Du lịch giúp tôi cảm nhận những nền văn hoá khác nhau.'}
   ]}
];

// ══════════════════════════════════════════
// BÀI ĐỌC — 5 đoạn theo cách chia của giáo trình
// ══════════════════════════════════════════
var dialogData = [
  {scene:'Đoạn 1 · Bố mẹ và ngôi nhà cũ',
   preQuiz:[
     {q:'父母对老屋的感情像什么？',opts:['像没断奶的孩子对母亲','像客人对旅馆','像农民对土地'],ans:0},
     {q:'姥姥、舅舅和姑姑住在哪儿？',opts:['城里','农村','国外'],ans:0}
   ],
   lines:[
    {sp:0,zh:'父母一辈子住在农村老家，对老屋的感情，就像没断奶的孩子对母亲一样。因此长年以来，父母很少离开老屋，尽管姥姥、舅舅和姑姑都在城里，父母也坚决不在城里住。',py:'Fùmǔ yíbèizi zhù zài nóngcūn lǎojiā, duì lǎowū de gǎnqíng, jiù xiàng méi duàn nǎi de háizi duì mǔqīn yíyàng. Yīncǐ chángnián yǐlái, fùmǔ hěn shǎo líkāi lǎowū, jǐnguǎn lǎolao, jiùjiu hé gūgu dōu zài chéng li, fùmǔ yě jiānjué bú zài chéng li zhù.',vn:'Bố mẹ cả đời sống ở quê, tình cảm với ngôi nhà cũ giống như đứa trẻ chưa cai sữa với mẹ vậy. Vì thế bao năm nay bố mẹ rất ít rời ngôi nhà cũ, dù bà ngoại, cậu và cô đều ở thành phố, bố mẹ vẫn kiên quyết không ở lại thành phố.'}
  ]},

  {scene:'Đoạn 2 · Căn nhà mới và chùm chìa khoá bị từ chối',
   preQuiz:[
     {q:'他们用什么钱买了新房？',opts:['打工挣的钱','借的钱','父母给的钱'],ans:0},
     {q:'妻子提出留一串钥匙给父母，父母的反应是什么？',opts:['拒绝了','很高兴地接受了','没说话'],ans:0}
   ],
   lines:[
    {sp:0,zh:'去年，在我和妻子的努力下，我们终于用打工挣的钱，在县里买了一套新房。新房装修完，父母第一次走进新房时，高兴得不得了。妻子提出留一串钥匙给父母，可他们拒绝了。',py:'Qùnián, zài wǒ hé qīzi de nǔlì xià, wǒmen zhōngyú yòng dǎgōng zhèng de qián, zài xiàn li mǎile yí tào xīnfáng. Xīnfáng zhuāngxiū wán, fùmǔ dì-yī cì zǒujìn xīnfáng shí, gāoxìng de bùdéliǎo. Qīzi tíchū liú yí chuàn yàoshi gěi fùmǔ, kě tāmen jùjué le.',vn:'Năm ngoái, nhờ nỗ lực của tôi và vợ, cuối cùng chúng tôi dùng tiền làm thuê kiếm được mua một căn nhà mới ở huyện. Sửa sang xong, lần đầu bước vào nhà mới bố mẹ mừng không để đâu cho hết. Vợ tôi đề nghị để lại cho bố mẹ một chùm chìa khoá, nhưng ông bà từ chối.'},
    {sp:0,zh:'那天，父亲喝醉了，等他醒时，天色已晚。我和妻子强烈留父母在新房住一夜，第二天再回，但他们仍坚持坐上了最后一趟回老家的车。',py:'Nà tiān, fùqīn hēzuì le, děng tā xǐng shí, tiānsè yǐ wǎn. Wǒ hé qīzi qiángliè liú fùmǔ zài xīnfáng zhù yí yè, dì-èr tiān zài huí, dàn tāmen réng jiānchí zuòshàngle zuìhòu yí tàng huí lǎojiā de chē.',vn:'Hôm ấy bố uống say, lúc tỉnh dậy thì trời đã tối. Tôi và vợ hết sức giữ bố mẹ ở lại nhà mới một đêm, hôm sau hãy về, nhưng ông bà vẫn nhất quyết lên chuyến xe cuối cùng về quê.'}
  ]},

  {scene:'Đoạn 3 · Lời dặn khẽ của người bố',
   preQuiz:[
     {q:'父亲是怎么跟“我”说这件事的？',opts:['悄悄把我拉到一边，轻声细语','大声在家里说','写信告诉我'],ans:0},
     {q:'父母想要钥匙的理由是什么？',opts:['想来住几天，顺便晒被子、打扫卫生','想把房子卖掉','想让亲戚来住'],ans:0}
   ],
   lines:[
    {sp:0,zh:'一段时间后，我和妻子又准备去外地打工，新房只能上锁空着。临走那天，父亲从老家赶来送我们。父亲悄悄把我拉到一边说：“你妈说了，你还是留一串新房的钥匙给我们，要是我和你妈什么时候想来了，就来住上几天，顺便给你们晒晒被子，打扫打扫卫生。”',py:'Yí duàn shíjiān hòu, wǒ hé qīzi yòu zhǔnbèi qù wàidì dǎgōng, xīnfáng zhǐ néng shàngsuǒ kōngzhe. Lín zǒu nà tiān, fùqīn cóng lǎojiā gǎnlái sòng wǒmen. Fùqīn qiāoqiāo bǎ wǒ lādào yìbiān shuō: "Nǐ mā shuō le, nǐ háishi liú yí chuàn xīnfáng de yàoshi gěi wǒmen, yàoshi wǒ hé nǐ mā shénme shíhou xiǎng lái le, jiù lái zhù shàng jǐ tiān, shùnbiàn gěi nǐmen shàishai bèizi, dǎsǎo dǎsǎo wèishēng."',vn:'Một thời gian sau, tôi và vợ lại chuẩn bị đi xa làm thuê, nhà mới đành khoá lại để trống. Hôm sắp đi, bố từ quê vội lên tiễn chúng tôi. Bố khẽ kéo tôi ra một bên nói: "Mẹ con bảo, con cứ để lại cho bố mẹ một chùm chìa khoá nhà mới, lỡ khi nào bố mẹ muốn lên thì lên ở vài hôm, tiện thể phơi chăn, quét dọn cho các con."'},
    {sp:0,zh:'父亲说这话时，轻声细语，还红着脸，像个害羞的孩子。',py:'Fùqīn shuō zhè huà shí, qīngshēng xìyǔ, hái hóngzhe liǎn, xiàng ge hàixiū de háizi.',vn:'Lúc nói câu ấy, bố nói rất khẽ, mặt còn đỏ lên, như một đứa trẻ ngượng ngùng.'}
  ]},

  {scene:'Đoạn 4 · Đêm mùa đông trở về',
   preQuiz:[
     {q:'“我”和妻子想象中的家是什么样子？',opts:['满是灰尘、冷冷清清','干干净净、很温暖','跟走的时候一样'],ans:0},
     {q:'他们到楼下抬头看见了什么？',opts:['自家亮着灯光','家里黑着','邻居在等他们'],ans:0}
   ],
   lines:[
    {sp:0,zh:'转眼又是半年，我们回家时是一个深冬的夜里。下了长途车，儿子被冻得大哭。我和妻子想象着打开家门满是灰尘、冷冷清清的景象，觉得心里发寒。',py:'Zhuǎnyǎn yòu shì bàn nián, wǒmen huíjiā shí shì yí ge shēndōng de yè li. Xiàle chángtú chē, érzi bèi dòng de dà kū. Wǒ hé qīzi xiǎngxiàngzhe dǎkāi jiā mén mǎn shì huīchén, lěnglěng qīngqīng de jǐngxiàng, juéde xīnli fā hán.',vn:'Thoáng cái lại nửa năm, chúng tôi về nhà vào một đêm giữa mùa đông. Xuống xe khách đường dài, con trai rét đến phát khóc. Tôi và vợ hình dung cảnh mở cửa nhà ra là đầy bụi, lạnh lẽo vắng vẻ, trong lòng thấy buốt.'},
    {sp:0,zh:'来到楼下，抬头一看，却发现自家亮着灯光。上了楼，开门的竟是微笑着的父母，温暖的气息立刻扑面而来：室内打扫得干干净净，暖气开着，水已温热，卧室床上的被子已铺好，厨房里飘来阵阵饭菜香……',py:'Láidào lóu xià, táitóu yí kàn, què fāxiàn zìjiā liàngzhe dēngguāng. Shàngle lóu, kāimén de jìng shì wēixiàozhe de fùmǔ, wēnnuǎn de qìxī lìkè pū miàn ér lái: shìnèi dǎsǎo de gāngān jìngjìng, nuǎnqì kāizhe, shuǐ yǐ wēnrè, wòshì chuáng shang de bèizi yǐ pūhǎo, chúfáng li piāolái zhènzhèn fàncài xiāng……',vn:'Đến dưới nhà, ngẩng lên nhìn, lại thấy nhà mình đang sáng đèn. Lên đến nơi, người ra mở cửa hoá ra là bố mẹ đang mỉm cười, hơi ấm lập tức ùa vào mặt: trong nhà dọn sạch bong, lò sưởi đang bật, nước đã ấm, chăn trên giường phòng ngủ đã trải sẵn, từ bếp thoảng ra từng đợt mùi cơm canh…'}
  ]},

  {scene:'Đoạn 5 · Lý do thật sự của chùm chìa khoá',
   preQuiz:[
     {q:'父母为什么今天来新房？',opts:['知道孩子今晚回来，来忙了一天','来拿东西','来住几天'],ans:0},
     {q:'父母要钥匙真正的原因是什么？',opts:['为了让孩子回来时能立刻感受到家的温暖','为了自己住得舒服','为了看房子'],ans:0}
   ],
   lines:[
    {sp:0,zh:'父亲说：“你妈昨天接到电话，知道你们今晚回来，今天来新房忙了一天了。”原来父母要我留下串钥匙，只是为了让我们回来时，能立刻感受到家的温暖！我鼻子一酸，流下了热泪……',py:'Fùqīn shuō: "Nǐ mā zuótiān jiēdào diànhuà, zhīdào nǐmen jīnwǎn huílái, jīntiān lái xīnfáng mángle yì tiān le." Yuánlái fùmǔ yào wǒ liúxià chuàn yàoshi, zhǐshì wèile ràng wǒmen huílái shí, néng lìkè gǎnshòu dào jiā de wēnnuǎn! Wǒ bízi yì suān, liúxiàle rèlèi……',vn:'Bố nói: "Hôm qua mẹ con nhận được điện thoại, biết tối nay các con về, hôm nay lên nhà mới bận rộn cả ngày rồi." Hoá ra bố mẹ xin chùm chìa khoá chỉ là để khi chúng tôi trở về, có thể lập tức cảm nhận được hơi ấm của gia đình! Sống mũi tôi cay xè, nước mắt nóng trào ra…'}
  ]}
];

// ══════════════════════════════════════════
// PHÂN BIỆT TỪ GẦN NGHĨA 近义词辨析
// ══════════════════════════════════════════
var synonymData = [
  {pair:'悄悄 — 偷偷',
   same:'Đều là phó từ, đều tả việc làm nhẹ nhàng, không để người khác biết. Nhiều câu thay cho nhau được.',
   sameEx:{zh:'他悄悄／偷偷地走了出去。',vn:'Anh ấy lặng lẽ đi ra ngoài.'},
   items:[
     {word:'悄悄',points:[
       'Nhấn vào KHÔNG GÂY TIẾNG ĐỘNG.',
       'Mục đích thường là KHÔNG LÀM PHIỀN người khác.',
       'Không mang nghĩa giấu giếm, không xấu.'
     ],ex:[{zh:'孩子睡着了，爸爸在妈妈耳边悄悄说了几句话。',vn:'Con ngủ rồi, bố ghé tai mẹ nói khẽ mấy câu.'},
          {zh:'父亲悄悄把我拉到一边说话。',vn:'Bố khẽ kéo tôi ra một bên nói chuyện.'}]},
     {word:'偷偷',points:[
       'Nhấn vào GIẤU KHÔNG CHO AI BIẾT.',
       'Mục đích là để người khác không phát hiện.',
       'Thường có chút ý lén lút.'
     ],ex:[{zh:'他谁也没告诉，偷偷去旅行了。',vn:'Anh ấy không nói với ai, lén đi du lịch.'},
          {zh:'别人都不知道，她只是偷偷地把这件事告诉了我。',vn:'Không ai biết cả, cô ấy chỉ lén kể chuyện này cho tôi.'}]}
   ],
   quiz:[
     {sentence:'晚饭前姑姑就一个人＿＿地走了。',options:['悄悄','偷偷'],answer:0,both:true,
      why:'Chỉ là đi nhẹ không làm phiền ai → 悄悄. Nếu cô cố ý giấu mọi người thì mới dùng 偷偷.'},
     {sentence:'考试已经开始了，他才＿＿走进来。',options:['悄悄','偷偷'],answer:0,both:true,
      why:'Vào muộn nên đi khẽ để không ảnh hưởng người khác → 悄悄.'},
     {sentence:'孩子睡着了，爸爸在妈妈耳边＿＿说了几句话。',options:['悄悄','偷偷'],answer:0,
      why:'Sợ đánh thức con nên nói khẽ — không giấu ai cả → 悄悄.'},
     {sentence:'别人都不知道，她只是＿＿地把这件事告诉了我。',options:['悄悄','偷偷'],answer:1,
      why:'Cố ý không cho người khác biết → 偷偷.'}
   ]},

  {pair:'立刻 — 马上',
   same:'Đều là phó từ chỉ việc xảy ra ngay sau đó.',
   sameEx:{zh:'他立刻／马上就来。',vn:'Anh ấy đến ngay.'},
   items:[
     {word:'立刻',points:[
       'Trang trọng hơn, thiên về văn viết.',
       'Nhấn vào KHÔNG có khoảng cách thời gian.',
       'Hay dùng trong thông báo, mệnh lệnh.'
     ],ex:[{zh:'温暖的气息立刻扑面而来。',vn:'Hơi ấm lập tức ùa vào mặt.'}]},
     {word:'马上',points:[
       'Khẩu ngữ hằng ngày.',
       'Có thể chỉ việc sắp xảy ra trong tương lai gần.',
       'Dùng được một mình để trả lời: 马上！'
     ],ex:[{zh:'马上就要下雨了。',vn:'Sắp mưa rồi.'},
          {zh:'——你什么时候来？——马上！',vn:'— Khi nào cậu đến? — Ngay đây!'}]}
   ],
   quiz:[
     {sentence:'天阴了，＿＿就要下雨了。',options:['立刻','马上'],answer:1,why:'Nói việc SẮP xảy ra → 马上. 立刻 không dùng cho tương lai gần kiểu này.'},
     {sentence:'听到这个消息，他＿＿站了起来。',options:['立刻','马上'],answer:0,both:true,why:'Phản ứng tức thì sau một việc → 立刻 tự nhiên hơn trong văn viết.'}
   ]},

  {pair:'一辈子 — 一生',
   same:'Đều chỉ toàn bộ quãng đời một người.',
   sameEx:{zh:'他一辈子／一生都在教书。',vn:'Cả đời ông ấy đều đi dạy học.'},
   items:[
     {word:'一辈子',points:[
       'KHẨU NGỮ, thân mật, gần gũi.',
       'Hay dùng khi nói chuyện đời thường, gia đình.',
       'Làm định ngữ được: 一辈子的朋友.'
     ],ex:[{zh:'父母一辈子住在农村老家。',vn:'Bố mẹ cả đời sống ở quê.'}]},
     {word:'一生',points:[
       'VĂN VIẾT, trang trọng.',
       'Hay dùng khi viết về cuộc đời một nhân vật.',
       'Thường đi với 的: 他的一生.'
     ],ex:[{zh:'他的一生充满了奋斗。',vn:'Cuộc đời ông đầy những phấn đấu.'}]}
   ],
   quiz:[
     {sentence:'我妈＿＿都在为我们操心。',options:['一辈子','一生'],answer:0,why:'Nói chuyện gia đình, khẩu ngữ → 一辈子.'},
     {sentence:'这本书记录了鲁迅的＿＿。',options:['一辈子','一生'],answer:1,why:'Văn viết, viết về cuộc đời nhân vật → 一生.'}
   ]}
];

// ══════════════════════════════════════════
// BẮC CẦU HÁN–VIỆT
// ══════════════════════════════════════════
var hvBridgeData = {
  easy:[
    {zh:'农村',hv:'nông thôn',vn:'nông thôn',note:'Trùng khít — nhớ một lần là xong.'},
    {zh:'坚决',hv:'kiên quyết',vn:'kiên quyết',note:'Trùng khít.'},
    {zh:'想象',hv:'tưởng tượng',vn:'tưởng tượng',note:'Trùng khít.'},
    {zh:'强烈',hv:'cường liệt',vn:'mạnh mẽ, mãnh liệt',note:'“Cường” = mạnh, “liệt” = dữ dội → rất mạnh.'},
    {zh:'温暖',hv:'ôn noãn',vn:'ấm áp',note:'“Ôn” như trong “ôn hoà, ôn đới” = ấm.'},
    {zh:'立刻',hv:'lập khắc',vn:'lập tức',note:'“Lập” = dựng lên ngay, “khắc” = khoảnh khắc → ngay khoảnh khắc đó.'},
    {zh:'装修',hv:'trang tu',vn:'sửa sang, trang trí',note:'“Trang” = trang trí, “tu” = sửa → sửa sang trang trí.'},
    {zh:'感受',hv:'cảm thụ',vn:'cảm nhận',note:'“Cảm thụ” tiếng Việt cũng là cảm nhận.'},
    {zh:'微笑',hv:'vi tiếu',vn:'mỉm cười',note:'“Vi” = nhỏ, nhẹ → cười nhẹ.'},
    {zh:'长途',hv:'trường đồ',vn:'đường dài',note:'“Trường” = dài, “đồ” = đường (như “lộ trình”).'}
  ],
  idiom:[
    {zh:'扑面而来',hv:'phốc diện nhi lai',vn:'ùa vào mặt',note:'Tả mùi hương hoặc hơi ấm tràn tới rất mạnh.'},
    {zh:'轻声细语',hv:'khinh thanh tế ngữ',vn:'nói nhẹ nói khẽ',note:'“Khinh” = nhẹ, “tế” = nhỏ mảnh.'}
  ],
  trap:[
    {zh:'挣',hv:'tránh',vn:'kiếm (tiền)',
     warn:'BẪY: âm Hán–Việt “tránh” chẳng liên quan gì đến nghĩa. Nhớ theo cụm 挣钱 = kiếm tiền.'},
    {zh:'不得了',hv:'bất đắc liễu',vn:'vô cùng, ghê gớm',
     warn:'BẪY: đọc âm Hán–Việt ra “không được xong” — vô nghĩa. Phải nhớ đây là bổ ngữ trình độ: 得 + 不得了.'},
    {zh:'姥姥',hv:'lão lão',vn:'bà ngoại',
     warn:'BẪY: “lão lão” không gợi được nghĩa “bà ngoại”. Ghi nhớ cặp: 姥姥 bà ngoại — 姥爷 ông ngoại.'},
    {zh:'套',hv:'sáo',vn:'bộ, căn (nhà)',
     warn:'BẪY: “sáo” tiếng Việt là ống sáo hoặc sáo rỗng. Ở đây là LƯỢNG TỪ đếm bộ, căn.'},
    {zh:'醉',hv:'tuý',vn:'say rượu',
     warn:'“Tuý” có trong “tuý luý, mê tuý” — đoán được, nhưng đừng nhầm với 睡 shuì (ngủ), hai chữ dễ lẫn.'},
    {zh:'扑 / 铺',hv:'phốc / phô',vn:'lao vào / trải ra',
     warn:'BẪY ĐỒNG ÂM: cả hai đều đọc pū. 扑 (bộ 扌 + 卜) là lao tới; 铺 (bộ 钅) là trải ra. Bài này có cả hai!'}
  ]
};

// ══════════════════════════════════════════
// GHÉP CỤM — bảng 词语搭配 của bài
// ══════════════════════════════════════════
var matchData = [
  {left:'一串',right:'钥匙'},
  {left:'坚决',right:'反对'},
  {left:'打工',right:'挣钱'},
  {left:'装修',right:'房子'},
  {left:'高兴得',right:'不得了'},
  {left:'晒',right:'被子'},
  {left:'长途',right:'汽车'},
  {left:'满是',right:'灰尘'},
  {left:'感受到',right:'温暖'},
  {left:'一阵',right:'笑声'},
  {left:'悄悄地',right:'离开'},
  {left:'临走',right:'的时候'}
];

// ══════════════════════════════════════════
// ĐIỀN TỪ
// ══════════════════════════════════════════
var fillData = [
  {pre:'桌子上有一',blank:'串',post:'钥匙。',hint:'(chuỗi, chùm)',ans:'串'},
  {pre:'父母',blank:'一辈子',post:'住在农村老家。',hint:'(cả đời)',ans:'一辈子'},
  {pre:'长年',blank:'以来',post:'，父母很少离开老屋。',hint:'(từ… đến nay)',ans:'以来'},
  {pre:'父母也',blank:'坚决',post:'不在城里住。',hint:'(kiên quyết)',ans:'坚决'},
  {pre:'我们用',blank:'打工',post:'挣的钱买了一套新房。',hint:'(làm thuê)',ans:'打工'},
  {pre:'父母第一次走进新房时，高兴得',blank:'不得了',post:'。',hint:'(vô cùng)',ans:'不得了'},
  {pre:'',blank:'临',post:'走那天，父亲从老家赶来送我们。',hint:'(ngay trước khi)',ans:'临'},
  {pre:'父亲',blank:'悄悄',post:'把我拉到一边说话。',hint:'(khẽ khàng)',ans:'悄悄'},
  {pre:'温暖的气息',blank:'立刻',post:'扑面而来。',hint:'(lập tức)',ans:'立刻'},
  {pre:'厨房里飘来',blank:'阵阵',post:'饭菜香。',hint:'(từng đợt)',ans:'阵阵'}
];

// ══════════════════════════════════════════
// SẮP XẾP CÂU
// ══════════════════════════════════════════
var sortData = [
  {words:['父母','一辈子','住在','农村','老家','。'],ans:'父母一辈子住在农村老家。',audio:'父母一辈子住在农村老家。'},
  {words:['他','坚决','不','同意','这个','计划','。'],ans:'他坚决不同意这个计划。',audio:'他坚决不同意这个计划。'},
  {words:['父母','高兴','得','不得了','。'],ans:'父母高兴得不得了。',audio:'父母高兴得不得了。'},
  {words:['临走','的时候','，','他','给','我','打','了','电话','。'],ans:'临走的时候，他给我打了电话。',audio:'临走的时候，他给我打了电话。'},
  {words:['温暖','的','气息','立刻','扑面而来','。'],ans:'温暖的气息立刻扑面而来。',audio:'温暖的气息立刻扑面而来。'},
  {words:['毕业','以来','，','他','一直','在','北京','工作','。'],ans:'毕业以来，他一直在北京工作。',audio:'毕业以来，他一直在北京工作。'},
  {words:['门外','传来','一阵','笑声','。'],ans:'门外传来一阵笑声。',audio:'门外传来一阵笑声。'}
];

// ══════════════════════════════════════════
// CHỌN TỪ PHÙ HỢP
// ══════════════════════════════════════════
var errorFixMode = 'wordchoice';
var errorFixData = [
  {wrong:'别人都不知道，她只是____地把这件事告诉了我。',opts:['偷偷','悄悄','立刻','坚决'],ans:0,
   exp:'Cố ý giấu không cho người khác biết → 偷偷. 悄悄 chỉ nhấn vào việc không gây tiếng động.'},
  {wrong:'孩子睡着了，爸爸在妈妈耳边____说了几句话。',opts:['悄悄','偷偷','强烈','立刻'],ans:0,
   exp:'Sợ đánh thức con nên nói khẽ, không giấu ai → 悄悄.'},
  {wrong:'天阴了，____就要下雨了。',opts:['马上','立刻','临','以来'],ans:0,
   exp:'Nói việc SẮP xảy ra → 马上. 立刻 dùng cho phản ứng tức thì sau một việc đã xảy ra.'},
  {wrong:'毕业____，他一直在北京工作。',opts:['以来','以前','以后','的时候'],ans:0,
   exp:'Tính từ mốc quá khứ đến hiện tại, vế sau có 一直 → 以来.'},
  {wrong:'____睡前不应该看手机。',opts:['临','以来','立刻','坚决'],ans:0,
   exp:'临 + động từ một âm tiết + 前 = ngay trước khi.'},
  {wrong:'父母第一次走进新房时，高兴____不得了。',opts:['得','的','地','了'],ans:0,
   exp:'不得了 làm BỔ NGỮ TRÌNH ĐỘ nên phải dùng 得. Đây là lỗi học sinh Việt mắc nhiều nhất ở cấu trúc này.'},
  {wrong:'妈妈在院子里____被子。',opts:['晒','铺','扑','锁'],ans:0,
   exp:'Đem ra nắng cho khô → 晒. 铺 là trải ra, 扑 là lao tới.'},
  {wrong:'卧室床上的被子已____好。',opts:['铺','扑','晒','冻'],ans:0,
   exp:'Trải chăn lên giường → 铺 (bộ 钅). Đừng nhầm với 扑 cùng đọc pū.'}
];

// ══════════════════════════════════════════
// DỊCH
// ══════════════════════════════════════════
var translateData = [
  {vi:'Trên bàn có một chùm chìa khoá.',zh:'桌子上有一串钥匙。',py:'Zhuōzi shang yǒu yí chuàn yàoshi.'},
  {vi:'Tôi sẽ nhớ lời thầy cả đời.',zh:'老师的话我一辈子都记得。',py:'Lǎoshī de huà wǒ yíbèizi dōu jìde.'},
  {vi:'Từ năm ngoái đến nay tôi rất bận.',zh:'去年以来，我一直很忙。',py:'Qùnián yǐlái, wǒ yìzhí hěn máng.'},
  {vi:'Anh ấy kiên quyết phản đối quyết định này.',zh:'他坚决反对这个决定。',py:'Tā jiānjué fǎnduì zhège juédìng.'},
  {vi:'Hôm qua tôi mệt kinh khủng.',zh:'昨天我累得不得了。',py:'Zuótiān wǒ lèi de bùdéliǎo.'},
  {vi:'Trước khi ngủ không nên xem điện thoại.',zh:'临睡前不应该看手机。',py:'Lín shuì qián bù yīnggāi kàn shǒujī.'},
  {vi:'Mẹ đang phơi quần áo.',zh:'妈妈在晒衣服。',py:'Māma zài shài yīfu.'},
  {vi:'Tôi cảm nhận được hơi ấm của gia đình.',zh:'我感受到了家的温暖。',py:'Wǒ gǎnshòu dàole jiā de wēnnuǎn.'}
];

var translateDataRev = [
  {vi:'Bố mẹ cả đời sống ở quê.',zh:'父母一辈子住在农村老家。',py:'Fùmǔ yíbèizi zhù zài nóngcūn lǎojiā.'},
  {vi:'Bố khẽ kéo tôi ra một bên nói chuyện.',zh:'父亲悄悄把我拉到一边说话。',py:'Fùqīn qiāoqiāo bǎ wǒ lādào yìbiān shuōhuà.'},
  {vi:'Hơi ấm lập tức ùa vào mặt.',zh:'温暖的气息立刻扑面而来。',py:'Wēnnuǎn de qìxī lìkè pū miàn ér lái.'},
  {vi:'Từ bếp thoảng ra từng đợt mùi cơm canh.',zh:'厨房里飘来阵阵饭菜香。',py:'Chúfáng li piāolái zhènzhèn fàncài xiāng.'},
  {vi:'Xuống xe khách đường dài, con trai rét đến phát khóc.',zh:'下了长途车，儿子被冻得大哭。',py:'Xiàle chángtú chē, érzi bèi dòng de dà kū.'},
  {vi:'Nhà sửa sang xong rồi, hai tháng nữa là dọn vào ở được.',zh:'房子装修好了，过两个月就可以搬进去住了。',py:'Fángzi zhuāngxiū hǎo le, guò liǎng ge yuè jiù kěyǐ bān jìnqù zhù le.'},
  {vi:'Hoá ra bố mẹ xin chùm chìa khoá chỉ là để chúng tôi về được ấm nhà.',zh:'原来父母要钥匙，只是为了让我们回来时感受到家的温暖。',py:'Yuánlái fùmǔ yào yàoshi, zhǐshì wèile ràng wǒmen huílái shí gǎnshòu dào jiā de wēnnuǎn.'}
];

// ══════════════════════════════════════════
// VIẾT ĐOẠN — đề của chính giáo trình
// ══════════════════════════════════════════
var writingData = {
  words:['一辈子','打工','不得了','悄悄','温暖'],
  prompt:'Đề của giáo trình: viết một đoạn với nhan đề 《最深的爱》 (Tình yêu sâu đậm nhất), dùng càng nhiều từ mới của bài càng tốt, không dưới 100 chữ.',
  outline:[
    'Câu mở: người em muốn kể là ai, quan hệ thế nào với em.',
    'Thân: người đó đã làm gì cho em — kể một VIỆC CỤ THỂ, không nói chung chung.',
    'Chi tiết nhỏ khiến em nhớ mãi (dùng 悄悄 hoặc 不得了).',
    'Kết: cảm nhận của em (dùng 温暖 hoặc 感受到).'
  ],
  model:{
    zh:'我最想说的是我的妈妈。为了让我上大学，她一辈子都在辛苦工作，前几年还去外地打工，很少回家。每次打电话，她从不说自己累，只问我钱够不够用。去年冬天我回家，一进门就看见屋子打扫得干干净净，床上的被子也铺好了，厨房里飘来阵阵饭菜香。我心里温暖得不得了。妈妈悄悄地为我做了这么多，却从来不说。这就是最深的爱。',
    py:'Wǒ zuì xiǎng shuō de shì wǒ de māma. Wèile ràng wǒ shàng dàxué, tā yíbèizi dōu zài xīnkǔ gōngzuò, qián jǐ nián hái qù wàidì dǎgōng, hěn shǎo huí jiā. Měi cì dǎ diànhuà, tā cóng bù shuō zìjǐ lèi, zhǐ wèn wǒ qián gòu bu gòu yòng. Qùnián dōngtiān wǒ huí jiā, yí jìn mén jiù kànjiàn wūzi dǎsǎo de gāngān jìngjìng, chuáng shang de bèizi yě pūhǎo le, chúfáng li piāolái zhènzhèn fàncài xiāng. Wǒ xīnli wēnnuǎn de bùdéliǎo. Māma qiāoqiāo de wèi wǒ zuòle zhème duō, què cónglái bù shuō. Zhè jiùshì zuì shēn de ài.',
    vn:'Người tôi muốn kể nhất là mẹ tôi. Để tôi được học đại học, mẹ cả đời làm lụng vất vả, mấy năm trước còn đi xa làm thuê, rất ít khi về nhà. Mỗi lần gọi điện, mẹ không bao giờ nói mình mệt, chỉ hỏi tôi có đủ tiền tiêu không. Mùa đông năm ngoái tôi về nhà, vừa vào cửa đã thấy phòng dọn sạch bong, chăn trên giường cũng trải sẵn, từ bếp thoảng ra từng đợt mùi cơm canh. Trong lòng tôi ấm không để đâu cho hết. Mẹ lặng lẽ làm cho tôi nhiều đến thế, mà chẳng bao giờ nói ra. Đó chính là tình yêu sâu đậm nhất.'
  },
  checklist:[
    'Đã dùng đủ cả 5 từ cho sẵn chưa?',
    'Đủ 100 chữ chưa (đề của giáo trình yêu cầu không dưới 100)?',
    'Đã kể một VIỆC CỤ THỂ chưa, hay mới chỉ nói chung chung "mẹ rất tốt"?',
    'Có dùng bổ ngữ trình độ (……得不得了 / ……得干干净净) chưa?',
    'Mở đoạn lùi vào 2 ô, dấu câu chiếm một ô — đúng quy cách bài thi chưa?'
  ]
};

// ══════════════════════════════════════════
// LUYỆN NÓI
// ══════════════════════════════════════════
var speakingData = {
  intro:'Bốn câu hỏi mở về chủ đề gia đình. Bấm nút loa nghe câu hỏi, rồi <b>tự ghi âm câu trả lời của mình trước</b> — đừng đọc theo câu mẫu. Cố gắng dùng từ mới của bài: 一辈子 · 打工 · 坚决 · 悄悄 · 温暖 · 感受到.',
  questions:[
    {q_zh:'你的父母是做什么工作的？他们辛苦吗？',
     q_vn:'Bố mẹ em làm nghề gì? Có vất vả không?',
     hint:'Dùng 一辈子 hoặc 打工',
     sample:'我爸爸是农民，一辈子都在农村种地，很辛苦。妈妈前几年去城里打工，挣钱供我上学。',
     sample_vn:'Bố tôi là nông dân, cả đời làm ruộng ở quê, rất vất vả. Mẹ tôi mấy năm trước lên thành phố làm thuê, kiếm tiền cho tôi ăn học.',
     note:'Nói nghề nghiệp phải cụ thể, đừng chỉ nói 他们很忙.'},
    {q_zh:'父母为你做过的哪件小事让你印象最深？',
     q_vn:'Việc nhỏ nào bố mẹ làm cho em khiến em nhớ nhất?',
     hint:'Kể một VIỆC CỤ THỂ, dùng 悄悄',
     sample:'有一次我生病了，妈妈悄悄地在我床边坐了一夜，第二天我才知道。',
     sample_vn:'Có lần tôi ốm, mẹ lặng lẽ ngồi bên giường tôi cả đêm, hôm sau tôi mới biết.',
     note:'Đề thi nói HSKK hay hỏi dạng này — kể một việc cụ thể luôn được điểm cao hơn.'},
    {q_zh:'课文里父母为什么要那串钥匙？你怎么看？',
     q_vn:'Trong bài đọc, vì sao bố mẹ muốn chùm chìa khoá ấy? Em nghĩ sao?',
     hint:'Nêu lý do + cảm nghĩ, dùng 温暖',
     sample:'他们要钥匙不是为了自己住，而是为了让孩子回来时能立刻感受到家的温暖。我觉得这就是父母的爱。',
     sample_vn:'Họ xin chìa khoá không phải để mình ở, mà để khi con về có thể lập tức cảm nhận hơi ấm của gia đình. Tôi thấy đó chính là tình yêu của cha mẹ.',
     note:'Dùng cấu trúc 不是……而是…… sẽ ghi điểm.'},
    {q_zh:'你觉得年轻人应该跟父母住在一起吗？为什么？',
     q_vn:'Em cho rằng người trẻ có nên sống chung với bố mẹ không? Vì sao?',
     hint:'Chọn hẳn một bên, dùng 坚决 hoặc 我认为',
     sample:'我认为应该。虽然生活习惯不一样，但是住在一起能互相照顾，父母年纪大了更需要我们。',
     sample_vn:'Tôi cho là nên. Tuy thói quen sinh hoạt khác nhau, nhưng ở cùng thì chăm sóc được nhau, bố mẹ già rồi càng cần chúng ta.',
     note:'Dạng câu hỏi ý kiến — phải chọn hẳn một bên rồi bảo vệ, đừng nói “tuỳ người”.'}
  ]
};

// ══════════════════════════════════════════
// TỪ VỰNG — phần bổ sung theo format HSK 4 (bảng kết hợp từ, cấu trúc câu, luyện dịch)
// ══════════════════════════════════════════
var vocabExtra = {
  '串': {
    colloFull: [
      {zh:'一串钥匙', py:'yí chuàn yàoshi', vn:'một chùm chìa khoá'},
      {zh:'一串葡萄', py:'yí chuàn pútao', vn:'một chùm nho'},
      {zh:'一串笑声', py:'yí chuàn xiàoshēng', vn:'một tràng tiếng cười'},
      {zh:'一串脚印', py:'yí chuàn jiǎoyìn', vn:'một dãy dấu chân'},
      {zh:'一串数字', py:'yí chuàn shùzì', vn:'một dãy số'}
    ],
    patterns: [
      {s:'一 + 串 + N', m:'Một chùm / chuỗi / tràng … (vật xâu lại hoặc nối tiếp nhau)'},
      {s:'留(下)一串钥匙 + 给 + người', m:'Để lại một chùm chìa khoá cho ai (câu trong bài)'}
    ],
    checkList: [
      {promptLang:'vi', prompt:'Chùm chìa khoá đó bị em trai tôi làm mất rồi.', answer:'那串钥匙被弟弟弄丢了。', answerPy:'Nà chuàn yàoshi bèi dìdi nòngdiū le.',
       note:'那 + 串 + 钥匙: chỉ thị từ + lượng từ + danh từ.', pair:'被'}
    ]
  },
  '一辈子': {
    colloFull: [
      {zh:'一辈子住在', py:'yíbèizi zhù zài', vn:'cả đời sống ở'},
      {zh:'一辈子忘不了', py:'yíbèizi wàng bu liǎo', vn:'cả đời không quên được'},
      {zh:'一辈子的朋友', py:'yíbèizi de péngyou', vn:'người bạn cả đời'},
      {zh:'一辈子的梦想', py:'yíbèizi de mèngxiǎng', vn:'ước mơ cả đời'},
      {zh:'辛苦了一辈子', py:'xīnkǔle yíbèizi', vn:'vất vả cả đời'}
    ],
    patterns: [
      {s:'Sub + 一辈子(都) + V', m:'Cả đời ai đó (đều) làm gì'},
      {s:'一辈子的 + N', m:'… của cả đời (người bạn, ước mơ…)'}
    ],
    checkList: [
      {promptLang:'vi', prompt:'Bà ngoại cả đời sống ở nông thôn, chưa bao giờ đến thành phố lớn.', answer:'姥姥一辈子都住在农村，从来没去过大城市。', answerPy:'Lǎolao yíbèizi dōu zhù zài nóngcūn, cónglái méi qùguo dà chéngshì.',
       note:'一辈子 làm trạng ngữ, đứng trước động từ và hay đi với 都.', pair:'从来没……过'}
    ]
  },
  '农村': {
    colloFull: [
      {zh:'农村生活', py:'nóngcūn shēnghuó', vn:'cuộc sống nông thôn'},
      {zh:'农村地区', py:'nóngcūn dìqū', vn:'vùng nông thôn'},
      {zh:'农村家庭', py:'nóngcūn jiātíng', vn:'gia đình nông thôn'},
      {zh:'农村孩子', py:'nóngcūn háizi', vn:'trẻ em nông thôn'},
      {zh:'住在农村', py:'zhù zài nóngcūn', vn:'sống ở nông thôn'}
    ],
    patterns: [
      {s:'农村 + N', m:'… ở nông thôn (làm định ngữ, không cần 的)'},
      {s:'住在 / 来自 + 农村', m:'Sống ở / đến từ nông thôn (trái nghĩa: 城市)'}
    ],
    checkList: [
      {promptLang:'vi', prompt:'Tuy cuộc sống nông thôn không tiện bằng thành phố, nhưng không khí rất trong lành.', answer:'虽然农村生活没有城市方便，但是空气很新鲜。', answerPy:'Suīrán nóngcūn shēnghuó méiyǒu chéngshì fāngbiàn, dànshì kōngqì hěn xīnxiān.',
       note:'农村 đứng trực tiếp trước danh từ làm định ngữ: 农村生活.', pair:'虽然……但是……'},
      {promptLang:'vi', prompt:'Ngày càng nhiều thanh niên nông thôn lên thành phố làm thuê.', answer:'越来越多的农村年轻人去城市打工。', answerPy:'Yuè lái yuè duō de nóngcūn niánqīngrén qù chéngshì dǎgōng.',
       note:'农村 đối lập với 城市.', pair:'越来越'}
    ]
  },
  '屋子': {
    colloFull: [
      {zh:'打扫屋子', py:'dǎsǎo wūzi', vn:'quét dọn phòng'},
      {zh:'收拾屋子', py:'shōushi wūzi', vn:'dọn dẹp phòng'},
      {zh:'屋子很亮', py:'wūzi hěn liàng', vn:'căn phòng rất sáng'},
      {zh:'老屋', py:'lǎowū', vn:'ngôi nhà cũ'},
      {zh:'一间屋子', py:'yì jiān wūzi', vn:'một gian phòng'}
    ],
    patterns: [
      {s:'一间 + 屋子', m:'Lượng từ của 屋子 là 间'},
      {s:'把屋子 + 打扫 / 收拾 + 得 + Adj', m:'Dọn phòng đến mức …'}
    ],
    checkList: [
      {promptLang:'vi', prompt:'Mẹ đã dọn phòng sạch sẽ tinh tươm.', answer:'妈妈把屋子打扫得干干净净。', answerPy:'Māma bǎ wūzi dǎsǎo de gāngānjìngjìng.',
       note:'屋子 là khẩu ngữ, gần nghĩa với 房间.', pair:'把'},
      {promptLang:'vi', prompt:'Căn phòng này vừa sáng vừa yên tĩnh.', answer:'这间屋子既亮又安静。', answerPy:'Zhè jiān wūzi jì liàng yòu ānjìng.',
       note:'Lượng từ thường dùng của 屋子 là 间.', pair:'既……又……'}
    ]
  },
  '断': {
    colloFull: [
      {zh:'绳子断了', py:'shéngzi duàn le', vn:'sợi dây đứt rồi'},
      {zh:'断电', py:'duàndiàn', vn:'mất điện'},
      {zh:'断水', py:'duànshuǐ', vn:'mất nước'},
      {zh:'断绝关系', py:'duànjué guānxi', vn:'cắt đứt quan hệ'},
      {zh:'电话断了', py:'diànhuà duàn le', vn:'điện thoại bị ngắt'}
    ],
    patterns: [
      {s:'N + 断了', m:'Cái gì đó bị đứt / bị ngắt'},
      {s:'V + 断 (拉断 / 剪断)', m:'断 làm bổ ngữ kết quả: làm cho đứt'}
    ],
    checkList: [
      {promptLang:'vi', prompt:'Tôi vừa bật máy tính thì mất điện.', answer:'我一打开电脑就断电了。', answerPy:'Wǒ yì dǎkāi diànnǎo jiù duàndiàn le.',
       note:'断电 = mất điện, cuối câu thường có 了.', pair:'一……就……'},
      {promptLang:'vi', prompt:'Sợi dây bị em trai kéo đứt rồi.', answer:'绳子被弟弟拉断了。', answerPy:'Shéngzi bèi dìdi lāduàn le.',
       note:'拉断: 断 làm bổ ngữ kết quả sau động từ.', pair:'被'}
    ]
  },
  '以来': {
    colloFull: [
      {zh:'自从……以来', py:'zìcóng……yǐlái', vn:'từ khi … đến nay'},
      {zh:'来到中国以来', py:'láidào Zhōngguó yǐlái', vn:'từ khi đến Trung Quốc'},
      {zh:'去年以来', py:'qùnián yǐlái', vn:'từ năm ngoái đến nay'},
      {zh:'长年以来', py:'chángnián yǐlái', vn:'bao năm nay'},
      {zh:'上高中以来', py:'shàng gāozhōng yǐlái', vn:'từ khi lên cấp ba'}
    ],
    patterns: [
      {s:'(自从) + mốc thời gian / V + 以来，Sub + 一直 + V', m:'Từ … đến nay, ai đó luôn …'},
      {s:'✗ 以来毕业 → ✓ 毕业以来', m:''}
    ],
    checkList: [
      {promptLang:'vi', prompt:'Từ khi lên cấp ba đến nay, tôi ngày càng thích giờ tiếng Trung.', answer:'上高中以来，我越来越喜欢汉语课了。', answerPy:'Shàng gāozhōng yǐlái, wǒ yuè lái yuè xǐhuan Hànyǔ kè le.',
       note:'以来 đứng SAU cụm động từ chỉ mốc thời gian.', pair:'越来越'}
    ]
  },
  '姥姥': {
    colloFull: [
      {zh:'姥姥家', py:'lǎolao jiā', vn:'nhà bà ngoại'},
      {zh:'看望姥姥', py:'kànwàng lǎolao', vn:'thăm bà ngoại'},
      {zh:'姥姥做饭', py:'lǎolao zuò fàn', vn:'bà ngoại nấu cơm'},
      {zh:'姥姥和姥爷', py:'lǎolao hé lǎoye', vn:'bà ngoại và ông ngoại'}
    ],
    patterns: [
      {s:'去 / 回 + 姥姥家', m:'Đến / về nhà bà ngoại'},
      {s:'姥姥 (miền Bắc) = 外婆 (miền Nam)', m:'Hai cách gọi bà ngoại'}
    ],
    checkList: [
      {promptLang:'vi', prompt:'Chỉ cần đến nhà bà ngoại là tôi được ăn món ngon.', answer:'只要去姥姥家，我就能吃到好吃的菜。', answerPy:'Zhǐyào qù lǎolao jiā, wǒ jiù néng chīdào hǎochī de cài.',
       note:'姥姥家 = nhà bà ngoại, giữa hai từ không cần 的.', pair:'只要……就……'},
      {promptLang:'vi', prompt:'Bà ngoại tuy đã 80 tuổi nhưng sức khoẻ vẫn rất tốt.', answer:'姥姥虽然八十岁了，但是身体还很好。', answerPy:'Lǎolao suīrán bāshí suì le, dànshì shēntǐ hái hěn hǎo.',
       note:'姥姥 là mẹ của mẹ.', pair:'虽然……但是……'}
    ]
  },
  '舅舅': {
    colloFull: [
      {zh:'舅舅家', py:'jiùjiu jiā', vn:'nhà cậu'},
      {zh:'看望舅舅', py:'kànwàng jiùjiu', vn:'thăm cậu'},
      {zh:'舅妈', py:'jiùmā', vn:'mợ (vợ của cậu)'},
      {zh:'舅舅和舅妈', py:'jiùjiu hé jiùmā', vn:'cậu và mợ'}
    ],
    patterns: [
      {s:'舅舅 (anh/em trai của mẹ) — 舅妈 (vợ của cậu)', m:'Cặp xưng hô bên ngoại'},
      {s:'Sub + 去 + 舅舅家 + V', m:'Đến nhà cậu làm gì'}
    ],
    checkList: [
      {promptLang:'vi', prompt:'Món quà này là cậu mua cho tôi.', answer:'这个礼物是舅舅给我买的。', answerPy:'Zhège lǐwù shì jiùjiu gěi wǒ mǎi de.',
       note:'舅舅 chỉ anh/em trai của MẸ; anh/em trai của bố là 叔叔 / 伯伯.', pair:'是……的'},
      {promptLang:'vi', prompt:'Cậu tôi không những biết nấu ăn mà còn nấu rất ngon.', answer:'我舅舅不仅会做饭，而且做得很好吃。', answerPy:'Wǒ jiùjiu bùjǐn huì zuò fàn, érqiě zuò de hěn hǎochī.',
       note:'我舅舅: trước danh từ chỉ người thân không cần 的.', pair:'不仅……而且……'}
    ]
  },
  '姑姑': {
    colloFull: [
      {zh:'姑姑家', py:'gūgu jiā', vn:'nhà cô'},
      {zh:'看望姑姑', py:'kànwàng gūgu', vn:'thăm cô'},
      {zh:'姑父', py:'gūfu', vn:'dượng (chồng của cô)'},
      {zh:'姑姑和姑父', py:'gūgu hé gūfu', vn:'cô và dượng'}
    ],
    patterns: [
      {s:'姑姑 (chị/em gái của bố) — 姑父 (chồng của cô)', m:'Cặp xưng hô bên nội'},
      {s:'✗ 姑姑 = chị/em gái của mẹ → ✓ chị/em gái của mẹ là 阿姨 / 姨', m:''}
    ],
    checkList: [
      {promptLang:'vi', prompt:'Hễ được nghỉ hè là tôi đến nhà cô chơi.', answer:'一放暑假，我就去姑姑家玩儿。', answerPy:'Yí fàng shǔjià, wǒ jiù qù gūgu jiā wánr.',
       note:'姑姑家 = nhà cô (chị/em gái của bố).', pair:'一……就……'},
      {promptLang:'vi', prompt:'Cô đã gửi ảnh cho tôi rồi.', answer:'姑姑把照片发给我了。', answerPy:'Gūgu bǎ zhàopiàn fā gěi wǒ le.',
       note:'姑姑 là chị/em gái của bố.', pair:'把'}
    ]
  },
  '坚决': {
    colloFull: [
      {zh:'坚决反对', py:'jiānjué fǎnduì', vn:'kiên quyết phản đối'},
      {zh:'坚决不同意', py:'jiānjué bù tóngyì', vn:'kiên quyết không đồng ý'},
      {zh:'态度坚决', py:'tàidu jiānjué', vn:'thái độ kiên quyết'},
      {zh:'坚决支持', py:'jiānjué zhīchí', vn:'kiên quyết ủng hộ'},
      {zh:'坚决要求', py:'jiānjué yāoqiú', vn:'kiên quyết yêu cầu'}
    ],
    patterns: [
      {s:'Sub + 坚决 + (不) + V', m:'Kiên quyết (không) làm gì'},
      {s:'✗ 反对坚决 → ✓ 坚决反对', m:''}
    ],
    checkList: [
      {promptLang:'vi', prompt:'Tuy các con đã nói rất nhiều, nhưng bố mẹ vẫn kiên quyết không ở lại thành phố.', answer:'虽然孩子们说了很多，但是父母还是坚决不在城里住。', answerPy:'Suīrán háizimen shuōle hěn duō, dànshì fùmǔ háishi jiānjué bú zài chéng li zhù.',
       note:'坚决 + 不 + V: kiên quyết không làm gì.', pair:'虽然……但是……'}
    ]
  },
  '打工': {
    colloFull: [
      {zh:'外出打工', py:'wàichū dǎgōng', vn:'đi xa làm thuê'},
      {zh:'到城市打工', py:'dào chéngshì dǎgōng', vn:'lên thành phố làm thuê'},
      {zh:'打工挣钱', py:'dǎgōng zhèngqián', vn:'làm thuê kiếm tiền'},
      {zh:'打工族', py:'dǎgōngzú', vn:'dân làm thuê'},
      {zh:'打了三年工', py:'dǎle sān nián gōng', vn:'làm thuê ba năm'}
    ],
    patterns: [
      {s:'去 / 到 + nơi chốn + 打工', m:'Đi đâu đó làm thuê'},
      {s:'打 + 了 / 过 + (thời lượng) + 工', m:'Ly hợp từ: thành phần chen vào giữa'}
    ],
    checkList: [
      {promptLang:'vi', prompt:'Tiền mua điện thoại là tôi tự đi làm thêm kiếm được.', answer:'买手机的钱是我自己打工挣的。', answerPy:'Mǎi shǒujī de qián shì wǒ zìjǐ dǎgōng zhèng de.',
       note:'打工 cũng dùng cho học sinh, sinh viên đi làm thêm.', pair:'是……的'}
    ]
  },
  '挣': {
    colloFull: [
      {zh:'挣钱养家', py:'zhèngqián yǎngjiā', vn:'kiếm tiền nuôi gia đình'},
      {zh:'努力挣钱', py:'nǔlì zhèngqián', vn:'cố gắng kiếm tiền'},
      {zh:'挣钱不容易', py:'zhèngqián bù róngyì', vn:'kiếm tiền không dễ'},
      {zh:'挣了一些钱', py:'zhèngle yìxiē qián', vn:'kiếm được ít tiền'}
    ],
    patterns: [
      {s:'Sub + 挣 + (了 + số lượng) + 钱', m:'Kiếm được (bao nhiêu) tiền bằng sức lao động'},
      {s:'挣钱 ≠ 赚钱', m:'挣 nhấn vào sức lao động; 赚 thiên về lời lãi buôn bán'}
    ],
    checkList: [
      {promptLang:'vi', prompt:'Vì bố mẹ kiếm tiền không dễ nên tôi không bao giờ tiêu tiền lung tung.', answer:'因为父母挣钱不容易，所以我从不乱花钱。', answerPy:'Yīnwèi fùmǔ zhèngqián bù róngyì, suǒyǐ wǒ cóng bú luàn huā qián.',
       note:'挣钱 = kiếm tiền bằng sức lao động của mình.', pair:'因为……所以……'},
      {promptLang:'vi', prompt:'Anh trai làm thuê ở thành phố, tiền kiếm được ngày càng nhiều.', answer:'哥哥在城里打工，挣的钱越来越多。', answerPy:'Gēge zài chéng li dǎgōng, zhèng de qián yuè lái yuè duō.',
       note:'挣的钱 = tiền kiếm được (挣 + 的 làm định ngữ).', pair:'越来越'}
    ]
  },
  '县': {
    colloFull: [
      {zh:'县城', py:'xiànchéng', vn:'thị trấn huyện lỵ'},
      {zh:'县政府', py:'xiàn zhèngfǔ', vn:'uỷ ban huyện'},
      {zh:'县医院', py:'xiàn yīyuàn', vn:'bệnh viện huyện'},
      {zh:'在县里', py:'zài xiàn li', vn:'ở huyện'}
    ],
    patterns: [
      {s:'省 → 市 → 县 → 乡 / 镇', m:'Thứ tự đơn vị hành chính từ lớn đến nhỏ'},
      {s:'在 + 县里 / 县城 + V', m:'Làm gì ở huyện'}
    ],
    checkList: [
      {promptLang:'vi', prompt:'Căn nhà mới là năm ngoái hai vợ chồng họ mua ở huyện.', answer:'新房是他们俩去年在县里买的。', answerPy:'Xīnfáng shì tāmen liǎ qùnián zài xiàn li mǎi de.',
       note:'县 là đơn vị hành chính dưới tỉnh, giống "huyện" của Việt Nam.', pair:'是……的'},
      {promptLang:'vi', prompt:'Bố vừa đến huyện lỵ là gọi điện cho tôi ngay.', answer:'爸爸一到县城就给我打了电话。', answerPy:'Bàba yí dào xiànchéng jiù gěi wǒ dǎle diànhuà.',
       note:'县城 = thị trấn huyện lỵ.', pair:'一……就……'}
    ]
  },
  '套': {
    colloFull: [
      {zh:'一套房子', py:'yí tào fángzi', vn:'một căn nhà'},
      {zh:'一套家具', py:'yí tào jiājù', vn:'một bộ đồ nội thất'},
      {zh:'一套衣服', py:'yí tào yīfu', vn:'một bộ quần áo'},
      {zh:'一套设备', py:'yí tào shèbèi', vn:'một bộ thiết bị'},
      {zh:'一套新房', py:'yí tào xīnfáng', vn:'một căn nhà mới'}
    ],
    patterns: [
      {s:'一 + 套 + N', m:'Một bộ / một căn …'},
      {s:'买 / 租 + 一套 + 房子', m:'Mua / thuê một căn nhà'}
    ],
    checkList: [
      {promptLang:'vi', prompt:'Họ đã sửa sang căn nhà đó rất đẹp.', answer:'他们把那套房子装修得很漂亮。', answerPy:'Tāmen bǎ nà tào fángzi zhuāngxiū de hěn piàoliang.',
       note:'套 đếm nhà theo căn (trọn một bộ phòng).', pair:'把'},
      {promptLang:'vi', prompt:'Bộ quần áo này vừa rẻ vừa đẹp.', answer:'这套衣服既便宜又好看。', answerPy:'Zhè tào yīfu jì piányi yòu hǎokàn.',
       note:'一套衣服 = một bộ quần áo (cả áo lẫn quần).', pair:'既……又……'}
    ]
  },
  '装修': {
    colloFull: [
      {zh:'装修房子', py:'zhuāngxiū fángzi', vn:'sửa sang nhà'},
      {zh:'装修新房', py:'zhuāngxiū xīnfáng', vn:'sửa sang nhà mới'},
      {zh:'装修风格', py:'zhuāngxiū fēnggé', vn:'phong cách trang trí'},
      {zh:'装修好了', py:'zhuāngxiū hǎo le', vn:'sửa xong rồi'},
      {zh:'重新装修', py:'chóngxīn zhuāngxiū', vn:'sửa sang lại'}
    ],
    patterns: [
      {s:'Sub + 把 + 房子 + 装修 + 得 + Adj', m:'Sửa sang nhà đến mức …'},
      {s:'N + 装修好了', m:'Cái gì đó đã sửa sang xong'}
    ],
    checkList: [
      {promptLang:'vi', prompt:'Nhà vừa sửa xong là bố mẹ dọn vào ở.', answer:'房子一装修好，父母就搬进去住了。', answerPy:'Fángzi yì zhuāngxiū hǎo, fùmǔ jiù bān jìnqù zhù le.',
       note:'装修好 = sửa xong (好 là bổ ngữ kết quả).', pair:'一……就……'},
      {promptLang:'vi', prompt:'Phòng học của chúng tôi đã được nhà trường sửa sang lại.', answer:'我们的教室被学校重新装修了。', answerPy:'Wǒmen de jiàoshì bèi xuéxiào chóngxīn zhuāngxiū le.',
       note:'重新装修 = sửa sang lại.', pair:'被'}
    ]
  },
  '不得了': {
    colloFull: [
      {zh:'高兴得不得了', py:'gāoxìng de bùdéliǎo', vn:'vui vô cùng'},
      {zh:'累得不得了', py:'lèi de bùdéliǎo', vn:'mệt kinh khủng'},
      {zh:'忙得不得了', py:'máng de bùdéliǎo', vn:'bận kinh khủng'},
      {zh:'热得不得了', py:'rè de bùdéliǎo', vn:'nóng kinh khủng'},
      {zh:'好得不得了', py:'hǎo de bùdéliǎo', vn:'tốt vô cùng'}
    ],
    patterns: [
      {s:'Adj / V + 得 + 不得了', m:'… vô cùng, … kinh khủng (bổ ngữ trình độ)'},
      {s:'✗ 很不得了 → ✓ 高兴得不得了', m:''}
    ],
    checkList: [
      {promptLang:'vi', prompt:'Vừa nghe tin tôi đỗ đại học, cả nhà vui mừng khôn xiết.', answer:'全家人一听说我考上了大学，就高兴得不得了。', answerPy:'Quán jiā rén yì tīngshuō wǒ kǎoshàngle dàxué, jiù gāoxìng de bùdéliǎo.',
       note:'不得了 luôn đứng sau 得, làm bổ ngữ trình độ.', pair:'一……就……'}
    ]
  },
  '醉': {
    colloFull: [
      {zh:'喝醉', py:'hēzuì', vn:'uống say'},
      {zh:'醉酒', py:'zuìjiǔ', vn:'say rượu'},
      {zh:'喝得很醉', py:'hē de hěn zuì', vn:'uống say khướt'},
      {zh:'喝醉了', py:'hēzuì le', vn:'say rồi'}
    ],
    patterns: [
      {s:'Sub + 喝醉了', m:'Ai đó uống say rồi (醉 là bổ ngữ kết quả)'},
      {s:'醉 zuì ≠ 睡 shuì', m:'醉 = say, 睡 = ngủ — hai chữ dễ nhầm'}
    ],
    checkList: [
      {promptLang:'vi', prompt:'Bố tôi chưa bao giờ uống say.', answer:'我爸爸从来没喝醉过。', answerPy:'Wǒ bàba cónglái méi hēzuìguo.',
       note:'喝醉 là động từ + bổ ngữ kết quả, 过 đặt sau cả cụm.', pair:'从来没……过'},
      {promptLang:'vi', prompt:'Vì hôm đó bố uống say nên không về quê.', answer:'因为那天爸爸喝醉了，所以没回老家。', answerPy:'Yīnwèi nà tiān bàba hēzuì le, suǒyǐ méi huí lǎojiā.',
       note:'喝醉了: 了 báo trạng thái đã thay đổi.', pair:'因为……所以……'}
    ]
  },
  '强烈': {
    colloFull: [
      {zh:'强烈反对', py:'qiángliè fǎnduì', vn:'phản đối mạnh mẽ'},
      {zh:'强烈要求', py:'qiángliè yāoqiú', vn:'yêu cầu mạnh mẽ'},
      {zh:'强烈建议', py:'qiángliè jiànyì', vn:'đề nghị mạnh mẽ'},
      {zh:'阳光强烈', py:'yángguāng qiángliè', vn:'ánh nắng gay gắt'},
      {zh:'强烈的愿望', py:'qiángliè de yuànwàng', vn:'mong muốn mãnh liệt'}
    ],
    patterns: [
      {s:'Sub + 强烈 + V (反对 / 要求 / 建议)', m:'Phản đối / yêu cầu / đề nghị mạnh mẽ'},
      {s:'N + 很强烈', m:'Cái gì đó rất mạnh (ánh nắng, cảm xúc)'}
    ],
    checkList: [
      {promptLang:'vi', prompt:'Không chỉ học sinh phản đối, phụ huynh cũng phản đối mạnh mẽ quy định này.', answer:'不仅学生反对，家长也强烈反对这个规定。', answerPy:'Bùjǐn xuésheng fǎnduì, jiāzhǎng yě qiángliè fǎnduì zhège guīdìng.',
       note:'强烈 làm trạng ngữ, đứng trước động từ.', pair:'不仅……也……'},
      {promptLang:'vi', prompt:'Ánh nắng buổi trưa ngày càng gay gắt.', answer:'中午的阳光越来越强烈了。', answerPy:'Zhōngwǔ de yángguāng yuè lái yuè qiángliè le.',
       note:'强烈 cũng dùng tả ánh sáng mạnh.', pair:'越来越'}
    ]
  },
  '夜': {
    colloFull: [
      {zh:'夜里', py:'yè li', vn:'ban đêm'},
      {zh:'深夜', py:'shēnyè', vn:'đêm khuya'},
      {zh:'夜晚', py:'yèwǎn', vn:'buổi đêm'},
      {zh:'住一夜', py:'zhù yí yè', vn:'ở lại một đêm'},
      {zh:'一夜没睡', py:'yí yè méi shuì', vn:'cả đêm không ngủ'}
    ],
    patterns: [
      {s:'住 / 待 + 一夜', m:'Ở lại một đêm (夜 làm lượng từ thời lượng)'},
      {s:'夜里 / 深夜 + V', m:'Làm gì vào ban đêm / đêm khuya'}
    ],
    checkList: [
      {promptLang:'vi', prompt:'Vì mai thi nên đêm qua tôi cả đêm ngủ không ngon.', answer:'因为明天考试，所以我昨天一夜没睡好。', answerPy:'Yīnwèi míngtiān kǎoshì, suǒyǐ wǒ zuótiān yí yè méi shuìhǎo.',
       note:'一夜 = suốt một đêm.', pair:'因为……所以……'},
      {promptLang:'vi', prompt:'Chúng tôi giữ bố mẹ ở lại nhà mới một đêm.', answer:'我们把父母留在新房住了一夜。', answerPy:'Wǒmen bǎ fùmǔ liú zài xīnfáng zhùle yí yè.',
       note:'住一夜: 夜 làm lượng từ chỉ thời lượng, đứng sau động từ.', pair:'把'}
    ]
  },
  '锁': {
    colloFull: [
      {zh:'锁门', py:'suǒ mén', vn:'khoá cửa'},
      {zh:'上锁', py:'shàngsuǒ', vn:'khoá lại'},
      {zh:'门锁', py:'ménsuǒ', vn:'ổ khoá cửa'},
      {zh:'密码锁', py:'mìmǎsuǒ', vn:'khoá mật mã'},
      {zh:'锁好门', py:'suǒhǎo mén', vn:'khoá cửa cẩn thận'}
    ],
    patterns: [
      {s:'把 + 门 / 箱子 + 锁上 / 锁好', m:'Khoá cửa / vali lại (động từ)'},
      {s:'一把锁 / 门锁', m:'Cái khoá (danh từ), lượng từ là 把'}
    ],
    checkList: [
      {promptLang:'vi', prompt:'Trước khi ra khỏi nhà nhớ khoá cửa cẩn thận.', answer:'出门前，别忘了把门锁好。', answerPy:'Chūmén qián, bié wàngle bǎ mén suǒhǎo.',
       note:'锁 làm động từ: 锁门, 锁好.', pair:'把'},
      {promptLang:'vi', prompt:'Cửa bị bố khoá lại rồi, tôi không vào được.', answer:'门被爸爸锁上了，我进不去。', answerPy:'Mén bèi bàba suǒshàng le, wǒ jìn bu qù.',
       note:'锁上 = khoá lại (上 là bổ ngữ).', pair:'被'}
    ]
  },
  '临': {
    colloFull: [
      {zh:'临走', py:'lín zǒu', vn:'lúc sắp đi'},
      {zh:'临睡前', py:'lín shuì qián', vn:'ngay trước khi ngủ'},
      {zh:'临出发', py:'lín chūfā', vn:'lúc sắp xuất phát'},
      {zh:'临时决定', py:'línshí juédìng', vn:'quyết định vào phút chót'},
      {zh:'临考试前', py:'lín kǎoshì qián', vn:'ngay trước kỳ thi'}
    ],
    patterns: [
      {s:'临 + V + 的时候 / 前', m:'Ngay trước khi làm gì'},
      {s:'临 + V1，Sub + V2', m:'Sắp làm V1 thì ai đó làm V2'}
    ],
    checkList: [
      {promptLang:'vi', prompt:'Ngay trước lúc đi, mẹ đưa chìa khoá nhà cho tôi.', answer:'临走的时候，妈妈把家里的钥匙交给了我。', answerPy:'Lín zǒu de shíhou, māma bǎ jiā li de yàoshi jiāo gěile wǒ.',
       note:'临走的时候 = ngay lúc sắp đi.', pair:'把'}
    ]
  },
  '悄悄': {
    colloFull: [
      {zh:'悄悄地走', py:'qiāoqiāo de zǒu', vn:'lặng lẽ đi'},
      {zh:'悄悄离开', py:'qiāoqiāo líkāi', vn:'lặng lẽ rời đi'},
      {zh:'悄悄打开门', py:'qiāoqiāo dǎkāi mén', vn:'khẽ mở cửa'},
      {zh:'悄悄地说', py:'qiāoqiāo de shuō', vn:'nói khẽ'},
      {zh:'悄悄走进', py:'qiāoqiāo zǒujìn', vn:'rón rén đi vào'}
    ],
    patterns: [
      {s:'Sub + 悄悄(地) + V', m:'Lặng lẽ, khẽ khàng làm gì'},
      {s:'悄悄 (không gây tiếng động) ≠ 偷偷 (giấu giếm)', m:'Phân biệt với 偷偷'}
    ],
    checkList: [
      {promptLang:'vi', prompt:'Em gái ngủ rồi, mẹ khẽ tắt đèn.', answer:'妹妹睡着了，妈妈悄悄地把灯关了。', answerPy:'Mèimei shuìzháo le, māma qiāoqiāo de bǎ dēng guān le.',
       note:'悄悄 đứng trước 把.', pair:'把'},
      {promptLang:'vi', prompt:'Vì không muốn đánh thức bố mẹ nên tôi lặng lẽ ra khỏi nhà.', answer:'因为不想吵醒父母，所以我悄悄地出了门。', answerPy:'Yīnwèi bù xiǎng chǎoxǐng fùmǔ, suǒyǐ wǒ qiāoqiāo de chūle mén.',
       note:'悄悄 nhấn vào việc không gây tiếng động để khỏi làm phiền người khác.', pair:'因为……所以……'}
    ]
  },
  '晒': {
    colloFull: [
      {zh:'晒太阳', py:'shài tàiyáng', vn:'phơi nắng'},
      {zh:'晒被子', py:'shài bèizi', vn:'phơi chăn'},
      {zh:'晒衣服', py:'shài yīfu', vn:'phơi quần áo'},
      {zh:'晒照片', py:'shài zhàopiàn', vn:'khoe ảnh (trên mạng)'},
      {zh:'晒干', py:'shàigān', vn:'phơi khô'}
    ],
    patterns: [
      {s:'晒 + N (被子 / 衣服)', m:'Phơi cái gì'},
      {s:'把 + N + 拿出去晒(晒)', m:'Mang cái gì ra ngoài phơi'}
    ],
    checkList: [
      {promptLang:'vi', prompt:'Trời đẹp, mẹ mang chăn ra ngoài phơi.', answer:'天气很好，妈妈把被子拿出去晒了。', answerPy:'Tiānqì hěn hǎo, māma bǎ bèizi ná chūqù shài le.',
       note:'晒被子 = phơi chăn.', pair:'把'},
      {promptLang:'vi', prompt:'Bà ngoại ăn cơm xong là ra sân phơi nắng.', answer:'姥姥一吃完饭就去院子里晒太阳。', answerPy:'Lǎolao yì chīwán fàn jiù qù yuànzi li shài tàiyáng.',
       note:'晒太阳 = (người) phơi nắng.', pair:'一……就……'}
    ]
  },
  '被子': {
    colloFull: [
      {zh:'盖被子', py:'gài bèizi', vn:'đắp chăn'},
      {zh:'铺被子', py:'pū bèizi', vn:'trải chăn'},
      {zh:'叠被子', py:'dié bèizi', vn:'gấp chăn'},
      {zh:'厚被子', py:'hòu bèizi', vn:'chăn dày'},
      {zh:'一床被子', py:'yì chuáng bèizi', vn:'một cái chăn'}
    ],
    patterns: [
      {s:'盖 / 铺 / 叠 / 晒 + 被子', m:'Đắp / trải / gấp / phơi chăn'},
      {s:'一床 + 被子', m:'Lượng từ của 被子 là 床'}
    ],
    checkList: [
      {promptLang:'vi', prompt:'Ngày nào dậy xong tôi cũng gấp chăn gọn gàng.', answer:'我每天起床以后都把被子叠好。', answerPy:'Wǒ měi tiān qǐchuáng yǐhòu dōu bǎ bèizi diéhǎo.',
       note:'叠被子 = gấp chăn.', pair:'把'},
      {promptLang:'vi', prompt:'Trời ngày càng lạnh, đi ngủ phải đắp chăn dày.', answer:'天气越来越冷了，睡觉要盖厚被子。', answerPy:'Tiānqì yuè lái yuè lěng le, shuìjiào yào gài hòu bèizi.',
       note:'Đắp chăn dùng 盖, không dùng 穿.', pair:'越来越'}
    ]
  },
  '长途': {
    colloFull: [
      {zh:'长途汽车', py:'chángtú qìchē', vn:'xe khách đường dài'},
      {zh:'长途电话', py:'chángtú diànhuà', vn:'điện thoại đường dài'},
      {zh:'长途旅行', py:'chángtú lǚxíng', vn:'chuyến đi xa'},
      {zh:'坐长途车', py:'zuò chángtú chē', vn:'đi xe đường dài'}
    ],
    patterns: [
      {s:'长途 + N', m:'… đường dài (chỉ làm định ngữ)'},
      {s:'✗ 路很长途 → ✓ 路很长', m:''}
    ],
    checkList: [
      {promptLang:'vi', prompt:'Tôi chưa bao giờ đi xe khách đường dài.', answer:'我从来没坐过长途汽车。', answerPy:'Wǒ cónglái méi zuòguo chángtú qìchē.',
       note:'长途 chỉ đứng trước danh từ, không làm vị ngữ.', pair:'从来没……过'},
      {promptLang:'vi', prompt:'Đi xe đường dài vừa mệt vừa chán.', answer:'坐长途车既累又无聊。', answerPy:'Zuò chángtú chē jì lèi yòu wúliáo.',
       note:'长途车 là cách nói tắt của 长途汽车.', pair:'既……又……'}
    ]
  },
  '冻': {
    colloFull: [
      {zh:'冻住', py:'dòngzhù', vn:'đóng băng'},
      {zh:'冻坏', py:'dònghuài', vn:'rét làm hỏng'},
      {zh:'冻得发抖', py:'dòng de fādǒu', vn:'rét run cầm cập'},
      {zh:'被冻得大哭', py:'bèi dòng de dà kū', vn:'rét đến phát khóc'}
    ],
    patterns: [
      {s:'Sub + 被冻得 + V / Adj', m:'Bị rét đến mức …'},
      {s:'冻 + 住 / 坏', m:'Đóng băng / bị rét làm hỏng'}
    ],
    checkList: [
      {promptLang:'vi', prompt:'Trời lạnh quá, tay tôi rét đến đỏ cả lên.', answer:'天太冷了，我的手被冻得很红。', answerPy:'Tiān tài lěng le, wǒ de shǒu bèi dòng de hěn hóng.',
       note:'被冻得 + kết quả: bị rét đến mức nào.', pair:'被'},
      {promptLang:'vi', prompt:'Trời lạnh đến nỗi ngay cả nước trong chai cũng đóng băng.', answer:'天冷得连瓶子里的水都冻住了。', answerPy:'Tiān lěng de lián píngzi li de shuǐ dōu dòngzhù le.',
       note:'冻住 = đóng băng (住 là bổ ngữ kết quả).', pair:'连……都……'}
    ]
  },
  '想象': {
    colloFull: [
      {zh:'想象一下', py:'xiǎngxiàng yíxià', vn:'tưởng tượng thử'},
      {zh:'无法想象', py:'wúfǎ xiǎngxiàng', vn:'không thể tưởng tượng'},
      {zh:'超出想象', py:'chāochū xiǎngxiàng', vn:'vượt ngoài tưởng tượng'},
      {zh:'想象不到', py:'xiǎngxiàng bu dào', vn:'không tưởng tượng nổi'},
      {zh:'想象力', py:'xiǎngxiànglì', vn:'sức tưởng tượng'}
    ],
    patterns: [
      {s:'Sub + 想象 + (着 / 不到) + O', m:'(Đang / không) tưởng tượng điều gì'},
      {s:'比 + Sub + 想象的 + Adj', m:'… hơn ai đó tưởng tượng'}
    ],
    checkList: [
      {promptLang:'vi', prompt:'Tuy chưa từng đến Bắc Kinh, nhưng tôi có thể tưởng tượng ra dáng vẻ nơi đó.', answer:'虽然我没去过北京，但是我能想象那里的样子。', answerPy:'Suīrán wǒ méi qùguo Běijīng, dànshì wǒ néng xiǎngxiàng nàli de yàngzi.',
       note:'想象 + tân ngữ: hình dung điều chưa thấy.', pair:'虽然……但是……'},
      {promptLang:'vi', prompt:'Ngay cả bố mẹ cũng không tưởng tượng nổi tôi thay đổi nhiều như vậy.', answer:'连父母都想象不到我的变化这么大。', answerPy:'Lián fùmǔ dōu xiǎngxiàng bu dào wǒ de biànhuà zhème dà.',
       note:'想象不到 = không tưởng tượng nổi.', pair:'连……都……'}
    ]
  },
  '灰尘': {
    colloFull: [
      {zh:'很多灰尘', py:'hěn duō huīchén', vn:'nhiều bụi'},
      {zh:'满是灰尘', py:'mǎn shì huīchén', vn:'đầy bụi'},
      {zh:'打扫灰尘', py:'dǎsǎo huīchén', vn:'quét bụi'},
      {zh:'一层灰尘', py:'yì céng huīchén', vn:'một lớp bụi'}
    ],
    patterns: [
      {s:'Nơi chốn + 满是灰尘', m:'Chỗ nào đó đầy bụi'},
      {s:'N + 上有一层灰尘', m:'Trên … có một lớp bụi'}
    ],
    checkList: [
      {promptLang:'vi', prompt:'Vì lâu lắm không có người ở nên trong phòng đầy bụi.', answer:'因为很久没人住，所以屋子里满是灰尘。', answerPy:'Yīnwèi hěn jiǔ méi rén zhù, suǒyǐ wūzi li mǎn shì huīchén.',
       note:'满是灰尘 = đầy bụi.', pair:'因为……所以……'},
      {promptLang:'vi', prompt:'Mẹ lau sạch bụi trên bàn rồi.', answer:'妈妈把桌子上的灰尘擦干净了。', answerPy:'Māma bǎ zhuōzi shang de huīchén cā gānjìng le.',
       note:'擦 / 打扫 + 灰尘: lau / quét bụi.', pair:'把'}
    ]
  },
  '亮': {
    colloFull: [
      {zh:'灯很亮', py:'dēng hěn liàng', vn:'đèn rất sáng'},
      {zh:'房间很亮', py:'fángjiān hěn liàng', vn:'căn phòng rất sáng'},
      {zh:'天亮了', py:'tiān liàng le', vn:'trời sáng rồi'},
      {zh:'亮着灯光', py:'liàngzhe dēngguāng', vn:'đang sáng đèn'},
      {zh:'灯亮了', py:'dēng liàng le', vn:'đèn bật sáng'}
    ],
    patterns: [
      {s:'N + 很亮', m:'Cái gì rất sáng (tính từ)'},
      {s:'N + 亮了 / 亮着', m:'(Đèn, trời) sáng lên / đang sáng (động từ)'}
    ],
    checkList: [
      {promptLang:'vi', prompt:'Trời vừa sáng bà ngoại đã dậy.', answer:'天一亮，姥姥就起床了。', answerPy:'Tiān yí liàng, lǎolao jiù qǐchuáng le.',
       note:'天亮 = trời sáng (亮 làm động từ).', pair:'一……就……'},
      {promptLang:'vi', prompt:'Phòng học mới vừa sáng vừa rộng.', answer:'新教室既亮又大。', answerPy:'Xīn jiàoshì jì liàng yòu dà.',
       note:'亮 làm tính từ: sáng sủa.', pair:'既……又……'}
    ]
  },
  '微笑': {
    colloFull: [
      {zh:'微笑着说', py:'wēixiàozhe shuō', vn:'mỉm cười nói'},
      {zh:'露出微笑', py:'lùchū wēixiào', vn:'nở nụ cười'},
      {zh:'脸上带着微笑', py:'liǎn shang dàizhe wēixiào', vn:'trên mặt nở nụ cười'},
      {zh:'微笑着点头', py:'wēixiàozhe diǎntóu', vn:'mỉm cười gật đầu'}
    ],
    patterns: [
      {s:'Sub + 微笑着 + V', m:'Vừa mỉm cười vừa làm gì'},
      {s:'脸上带着 / 露出 + 微笑', m:'Nở nụ cười (微笑 làm danh từ)'}
    ],
    checkList: [
      {promptLang:'vi', prompt:'Bà ngoại vừa thấy tôi là trên mặt nở ngay nụ cười.', answer:'姥姥一看见我，脸上就露出了微笑。', answerPy:'Lǎolao yí kànjiàn wǒ, liǎn shang jiù lùchūle wēixiào.',
       note:'露出微笑 = nở nụ cười.', pair:'一……就……'},
      {promptLang:'vi', prompt:'Tuy rất mệt, nhưng mẹ vẫn mỉm cười nói "không sao".', answer:'虽然很累，但是妈妈还是微笑着说“没关系”。', answerPy:'Suīrán hěn lèi, dànshì māma háishi wēixiàozhe shuō "méi guānxi".',
       note:'微笑着 + động từ: vừa cười vừa làm.', pair:'虽然……但是……'}
    ]
  },
  '温暖': {
    colloFull: [
      {zh:'温暖的家', py:'wēnnuǎn de jiā', vn:'mái nhà ấm áp'},
      {zh:'温暖的笑容', py:'wēnnuǎn de xiàoróng', vn:'nụ cười ấm áp'},
      {zh:'感到温暖', py:'gǎndào wēnnuǎn', vn:'cảm thấy ấm áp'},
      {zh:'家的温暖', py:'jiā de wēnnuǎn', vn:'hơi ấm gia đình'}
    ],
    patterns: [
      {s:'Sub + 感到 / 感受到 + 温暖', m:'Cảm thấy / cảm nhận được sự ấm áp'},
      {s:'温暖 ≠ 暖和', m:'温暖 dùng được cho tình cảm; 暖和 chủ yếu nói nhiệt độ'}
    ],
    checkList: [
      {promptLang:'vi', prompt:'Chỉ cần về đến nhà là tôi thấy rất ấm áp.', answer:'只要回到家，我就觉得很温暖。', answerPy:'Zhǐyào huídào jiā, wǒ jiù juéde hěn wēnnuǎn.',
       note:'温暖 ở đây nói về cảm xúc, không phải nhiệt độ.', pair:'只要……就……'},
      {promptLang:'vi', prompt:'Lời của bạn không chỉ giúp tôi mà còn khiến tôi thấy rất ấm lòng.', answer:'你的话不仅帮助了我，而且让我感到很温暖。', answerPy:'Nǐ de huà bùjǐn bāngzhùle wǒ, érqiě ràng wǒ gǎndào hěn wēnnuǎn.',
       note:'感到温暖 = thấy ấm lòng.', pair:'不仅……而且……'}
    ]
  },
  '立刻': {
    colloFull: [
      {zh:'立刻回答', py:'lìkè huídá', vn:'trả lời ngay'},
      {zh:'立刻行动', py:'lìkè xíngdòng', vn:'hành động ngay'},
      {zh:'立刻出发', py:'lìkè chūfā', vn:'xuất phát ngay'},
      {zh:'立刻安静下来', py:'lìkè ānjìng xiàlái', vn:'lập tức im lặng'}
    ],
    patterns: [
      {s:'Sub + 立刻 + V', m:'Ai đó lập tức làm gì'},
      {s:'立刻 ≠ 马上', m:'立刻 = phản ứng tức thì; 马上 còn chỉ việc sắp xảy ra'}
    ],
    checkList: [
      {promptLang:'vi', prompt:'Vừa nghe tin mẹ ốm, anh ấy lập tức về quê.', answer:'他一听说妈妈病了，就立刻回老家了。', answerPy:'Tā yì tīngshuō māma bìng le, jiù lìkè huí lǎojiā le.',
       note:'立刻 đứng sau 就, trước động từ.', pair:'一……就……'}
    ]
  },
  '扑': {
    colloFull: [
      {zh:'扑过来', py:'pū guòlái', vn:'lao tới'},
      {zh:'扑到怀里', py:'pūdào huái li', vn:'lao vào lòng'},
      {zh:'扑面而来', py:'pū miàn ér lái', vn:'ùa vào mặt'},
      {zh:'扑到妈妈怀里', py:'pūdào māma huái li', vn:'lao vào lòng mẹ'}
    ],
    patterns: [
      {s:'Sub + 扑到 + người + 怀里', m:'Ai đó lao vào lòng ai'},
      {s:'(mùi / hơi) + 扑面而来', m:'Mùi hương, hơi ấm ùa vào mặt'}
    ],
    checkList: [
      {promptLang:'vi', prompt:'Đứa bé vừa thấy mẹ là lao ngay vào lòng mẹ.', answer:'孩子一看见妈妈，就扑到了妈妈怀里。', answerPy:'Háizi yí kànjiàn māma, jiù pūdàole māma huái li.',
       note:'扑到……怀里 = lao vào lòng ai.', pair:'一……就……'},
      {promptLang:'vi', prompt:'Con chó con vui vẻ lao tới, làm bẩn quần áo của tôi.', answer:'小狗高兴地扑过来，把我的衣服弄脏了。', answerPy:'Xiǎo gǒu gāoxìng de pū guòlái, bǎ wǒ de yīfu nòngzāng le.',
       note:'扑过来 = lao về phía người nói; 扑 (bộ 扌) khác 铺 (bộ 钅).', pair:'把'}
    ]
  },
  '卧室': {
    colloFull: [
      {zh:'打扫卧室', py:'dǎsǎo wòshì', vn:'dọn phòng ngủ'},
      {zh:'卧室很大', py:'wòshì hěn dà', vn:'phòng ngủ rất rộng'},
      {zh:'卧室很安静', py:'wòshì hěn ānjìng', vn:'phòng ngủ rất yên tĩnh'},
      {zh:'两间卧室', py:'liǎng jiān wòshì', vn:'hai phòng ngủ'}
    ],
    patterns: [
      {s:'Sub + 在卧室里 + V', m:'Làm gì trong phòng ngủ'},
      {s:'(Nhà) + 有 + số + 间卧室', m:'Nhà có mấy phòng ngủ (lượng từ 间)'}
    ],
    checkList: [
      {promptLang:'vi', prompt:'Căn nhà mới này có ba phòng ngủ, vừa sáng vừa yên tĩnh.', answer:'这套新房有三间卧室，既亮又安静。', answerPy:'Zhè tào xīnfáng yǒu sān jiān wòshì, jì liàng yòu ānjìng.',
       note:'Lượng từ của 卧室 là 间.', pair:'既……又……'},
      {promptLang:'vi', prompt:'Tôi đã dọn phòng ngủ của mình sạch sẽ.', answer:'我把自己的卧室打扫干净了。', answerPy:'Wǒ bǎ zìjǐ de wòshì dǎsǎo gānjìng le.',
       note:'卧室 = phòng ngủ (卧 = nằm, 室 = phòng).', pair:'把'}
    ]
  },
  '铺': {
    colloFull: [
      {zh:'铺床', py:'pū chuáng', vn:'trải giường'},
      {zh:'铺被子', py:'pū bèizi', vn:'trải chăn'},
      {zh:'铺地毯', py:'pū dìtǎn', vn:'trải thảm'},
      {zh:'铺好', py:'pūhǎo', vn:'trải xong'},
      {zh:'铺在地上', py:'pū zài dì shang', vn:'trải ra sàn'}
    ],
    patterns: [
      {s:'把 + N + 铺在 + nơi chốn', m:'Trải cái gì lên đâu'},
      {s:'N + 已(经)铺好', m:'Cái gì đã được trải sẵn'}
    ],
    checkList: [
      {promptLang:'vi', prompt:'Mẹ đã trải sẵn chăn trên giường rồi.', answer:'妈妈已经把床上的被子铺好了。', answerPy:'Māma yǐjīng bǎ chuáng shang de bèizi pūhǎo le.',
       note:'铺 (bộ 钅) = trải ra; đừng nhầm với 扑 cùng đọc pū.', pair:'把'},
      {promptLang:'vi', prompt:'Giường đã được mẹ trải sẵn rồi.', answer:'床已经被妈妈铺好了。', answerPy:'Chuáng yǐjīng bèi māma pūhǎo le.',
       note:'铺床 = trải giường.', pair:'被'}
    ]
  },
  '飘': {
    colloFull: [
      {zh:'飘来', py:'piāolái', vn:'thoảng tới'},
      {zh:'飘香', py:'piāo xiāng', vn:'toả hương'},
      {zh:'雪花飘', py:'xuěhuā piāo', vn:'bông tuyết bay'},
      {zh:'飘下来', py:'piāo xiàlái', vn:'bay xuống'}
    ],
    patterns: [
      {s:'Nơi chốn + 飘来 + mùi / âm thanh', m:'Từ đâu thoảng tới …'},
      {s:'N + 飘 + 下来 / 过来', m:'Cái gì bay xuống / bay tới'}
    ],
    checkList: [
      {promptLang:'vi', prompt:'Tôi vừa về đến cổng là ngửi thấy mùi thơm từ bếp thoảng ra.', answer:'我一到门口，就闻到了厨房里飘来的香味。', answerPy:'Wǒ yí dào ménkǒu, jiù wéndàole chúfáng li piāolái de xiāngwèi.',
       note:'飘来 = (mùi) thoảng tới.', pair:'一……就……'},
      {promptLang:'vi', prompt:'Trời ngày càng lạnh, bông tuyết bắt đầu bay xuống.', answer:'天越来越冷，雪花开始飘下来了。', answerPy:'Tiān yuè lái yuè lěng, xuěhuā kāishǐ piāo xiàlái le.',
       note:'飘下来 = bay lả tả xuống.', pair:'越来越'}
    ]
  },
  '阵': {
    colloFull: [
      {zh:'一阵风', py:'yí zhèn fēng', vn:'một cơn gió'},
      {zh:'一阵笑声', py:'yí zhèn xiàoshēng', vn:'một tràng cười'},
      {zh:'一阵香味', py:'yí zhèn xiāngwèi', vn:'một đợt mùi thơm'},
      {zh:'阵阵', py:'zhènzhèn', vn:'từng đợt'},
      {zh:'一阵雨', py:'yí zhèn yǔ', vn:'một trận mưa'}
    ],
    patterns: [
      {s:'一 + 阵 + N', m:'Một cơn / trận / đợt …'},
      {s:'阵阵 + N', m:'Từng đợt … liên tiếp'}
    ],
    checkList: [
      {promptLang:'vi', prompt:'Cái cây bị một trận gió lớn thổi đổ.', answer:'树被一阵大风吹倒了。', answerPy:'Shù bèi yí zhèn dà fēng chuīdǎo le.',
       note:'一阵 + danh từ: sự việc kéo dài một lúc rồi dứt.', pair:'被'},
      {promptLang:'vi', prompt:'Thầy vừa nói xong, cả lớp vang lên một tràng cười.', answer:'老师一说完，教室里就响起了一阵笑声。', answerPy:'Lǎoshī yì shuōwán, jiàoshì li jiù xiǎngqǐle yí zhèn xiàoshēng.',
       note:'一阵笑声 = một tràng cười.', pair:'一……就……'}
    ]
  },
  '感受': {
    colloFull: [
      {zh:'感受到温暖', py:'gǎnshòu dào wēnnuǎn', vn:'cảm nhận được hơi ấm'},
      {zh:'感受生活', py:'gǎnshòu shēnghuó', vn:'cảm nhận cuộc sống'},
      {zh:'深刻的感受', py:'shēnkè de gǎnshòu', vn:'cảm nhận sâu sắc'},
      {zh:'说说感受', py:'shuōshuo gǎnshòu', vn:'nói cảm nghĩ'}
    ],
    patterns: [
      {s:'Sub + 感受到 + N', m:'Cảm nhận được điều gì (động từ)'},
      {s:'对 + N + 的感受', m:'Cảm nghĩ về điều gì (danh từ)'}
    ],
    checkList: [
      {promptLang:'vi', prompt:'Du lịch không những thú vị mà còn giúp ta cảm nhận được những nền văn hoá khác nhau.', answer:'旅游不仅很有意思，而且能让我们感受到不同的文化。', answerPy:'Lǚyóu bùjǐn hěn yǒu yìsi, érqiě néng ràng wǒmen gǎnshòu dào bùtóng de wénhuà.',
       note:'感受到 + danh từ: cảm nhận được điều gì.', pair:'不仅……而且……'},
      {promptLang:'vi', prompt:'Trước đây tôi chưa bao giờ cảm nhận tình yêu của bố mẹ sâu sắc đến thế.', answer:'以前我从来没这么深地感受过父母的爱。', answerPy:'Yǐqián wǒ cónglái méi zhème shēn de gǎnshòuguo fùmǔ de ài.',
       note:'感受 + 过: đã từng cảm nhận.', pair:'从来没……过'}
    ]
  }
};
vocabData.forEach(function (v) {
  var x = vocabExtra[v.zh];
  if (!x) return;
  if (x.colloFull) v.colloFull = x.colloFull;
  if (x.patterns) v.patterns = x.patterns;
  if (x.checkList) v.checkList = (v.checkList || []).concat(x.checkList).slice(0, 2);
});

// ══════════════════════════════════════════
// LUYỆN TẬP — bổ sung cho bằng số câu của HSK 4 (điền 15 · sắp xếp 8 · chọn từ 10)
// ══════════════════════════════════════════
fillData.push(
  {pre:'他在城里打工，一个月能',blank:'挣',post:'五千多块钱。',hint:'(kiếm (tiền))',ans:'挣'},
  {pre:'房子',blank:'装修',post:'好以后，父母就搬进来住了。',hint:'(sửa sang, trang trí nhà)',ans:'装修'},
  {pre:'桌子上全是',blank:'灰尘',post:'，好久没人打扫了。',hint:'(bụi)',ans:'灰尘'},
  {pre:'外面太冷了，我的手都',blank:'冻',post:'红了。',hint:'(lạnh cóng)',ans:'冻'},
  {pre:'出门以前别忘了把门',blank:'锁',post:'好。',hint:'(khoá)',ans:'锁'}
);
sortData.push(
  {words:['妈妈','把','被子','拿到','外面','去','晒了','。'],ans:'妈妈把被子拿到外面去晒了。',audio:'妈妈把被子拿到外面去晒了。'}
);
errorFixData.push(
  {wrong:'我真不敢____，二十年前这里还是一片农村。',opts:['想象','感受','打算','记得'],ans:0,
   exp:'不敢想象 (không dám tưởng tượng) là cách nói quen dùng để bày tỏ sự ngạc nhiên. 感受 (cảm nhận) đi với cảm giác, không khí; 打算, 记得 không hợp nghĩa.'},
  {wrong:'很多居民对这个计划表示____反对。',opts:['强烈','温暖','悄悄','一辈子'],ans:0,
   exp:'强烈反对 (phản đối mạnh mẽ) là kết hợp cố định. 温暖 (ấm áp) không đi với 反对; 悄悄 (lặng lẽ) trái với "bày tỏ" công khai; 一辈子 chỉ thời gian cả đời, không hợp.'}
);

// ══════════════════════════════════════════
// LUYỆN TẬP — phủ đủ 38 từ và các điểm ngữ pháp của bài
// ══════════════════════════════════════════
fillData.push(
  {pre:'虽然他在城里住了十年，但是还是觉得',blank:'农村',post:'的生活更舒服。',hint:'(nông thôn)',ans:'农村'},
  {pre:'他把',blank:'屋子',post:'打扫得干干净净，等父母回来。',hint:'(căn phòng, gian nhà)',ans:'屋子'},
  {pre:'我小时候是跟着',blank:'姥姥',post:'长大的。',hint:'(bà ngoại)',ans:'姥姥'},
  {pre:'他们家不在北京，在河北的一个小',blank:'县',post:'里。',hint:'(huyện)',ans:'县'},
  {pre:'聚会上他喝',blank:'醉',post:'了，是朋友把他送回家的。',hint:'(say (rượu))',ans:'醉'},
  {pre:'我们在姥姥家住了一',blank:'夜',post:'，第二天就回来了。',hint:'(đêm)',ans:'夜'},
  {pre:'天越来越冷了，妈妈给我换了一床厚',blank:'被子',post:'。',hint:'(cái chăn)',ans:'被子'},
  {pre:'坐了十几个小时的',blank:'长途',post:'汽车，大家都累极了。',hint:'(đường dài)',ans:'长途'},
  {pre:'她总是',blank:'微笑',post:'着跟每个人打招呼。',hint:'(mỉm cười)',ans:'微笑'},
  {pre:'一回到家，我就感到特别',blank:'温暖',post:'。',hint:'(ấm áp)',ans:'温暖'},
  {pre:'这套房子有两间',blank:'卧室',post:'，一间给父母，一间给我。',hint:'(phòng ngủ)',ans:'卧室'},
  {pre:'窗外',blank:'飘',post:'着雪花，屋子里却很暖和。',hint:'(bay lượn, lả tả)',ans:'飘'},
  {pre:'第一次离开家，我才真正',blank:'感受',post:'到父母的不容易。',hint:'(cảm nhận)',ans:'感受'}
);
errorFixData.push(
  {wrong:'妈妈的哥哥是我的____，他每年春节都来我们家。',opts:['舅舅','叔叔','姑姑','姥姥'],ans:0,
   exp:'舅舅 là anh/em trai của MẸ → đúng. 叔叔 là em trai của bố; 姑姑 là chị/em gái của bố (nữ); 姥姥 là bà ngoại — đều không phải "anh trai của mẹ".'},
  {wrong:'爸爸的妹妹是我的____，她在医院当护士。',opts:['姑姑','阿姨','舅舅','奶奶'],ans:0,
   exp:'姑姑 là chị/em gái của BỐ → đúng. 阿姨 là dì (em gái của mẹ) hoặc cách gọi phụ nữ lớn tuổi nói chung; 舅舅 là cậu (nam, bên mẹ); 奶奶 là bà nội.'},
  {wrong:'哥哥为了参加面试，特意买了一____新衣服。',opts:['套','串','阵','条'],ans:0,
   exp:'套 là lượng từ cho một BỘ gồm nhiều món (一套衣服, 一套房子) → đúng. 串 dùng cho chùm/chuỗi (一串钥匙); 阵 cho cơn/trận (一阵风); 条 dùng cho quần, váy từng chiếc chứ không nói 一条衣服.'},
  {wrong:'下午突然刮起了一____大风，把晒着的被子都吹到了地上。',opts:['阵','套','串','片'],ans:0,
   exp:'阵 dùng cho hiện tượng xảy ra trong một khoảng ngắn: 一阵风, 一阵笑声 → đúng. 套 là bộ; 串 là chuỗi; 片 dùng cho mảnh, vùng (一片树叶), không dùng cho gió.'},
  {wrong:'小狗一看见主人回家，就____了过去。',opts:['扑','铺','飘','晒'],ans:0,
   exp:'扑 = lao tới, nhào tới (扑过去) → đúng. 铺 cùng đọc pū nhưng nghĩa là trải ra (铺被子); 飘 là bay lơ lửng, dùng cho vật nhẹ; 晒 là phơi nắng.'},
  {wrong:'已经晚上十点了，姥姥家的灯还____着。',opts:['亮','晒','飘','醉'],ans:0,
   exp:'灯亮着 = đèn vẫn đang sáng → 亮 đúng. 晒 là phơi; 飘 là bay lượn; 醉 là say rượu — không thể đi với 灯.'},
  {wrong:'绳子太细了，一拉就____了。',opts:['断','锁','铺','扑'],ans:0,
   exp:'绳子断了 = sợi dây bị đứt → 断 đúng. 锁 là khoá; 铺 là trải; 扑 là lao tới — không nói về sợi dây bị kéo.'}
);
sortData.push(
  {words:['姑姑','结婚','以来','，','一直','住在','县城','。'],ans:'姑姑结婚以来，一直住在县城。',audio:'姑姑结婚以来，一直住在县城。'},
  {words:['临','睡','前','别','在','卧室','里','玩','手机','。'],ans:'临睡前别在卧室里玩手机。',audio:'临睡前别在卧室里玩手机。'},
  {words:['姥姥','立刻','露出了','温暖的','微笑','。'],ans:'姥姥立刻露出了温暖的微笑。',audio:'姥姥立刻露出了温暖的微笑。'}
);
matchData.push(
  {left:'打扫',right:'屋子'},
  {left:'一套',right:'家具'},
  {left:'脸上带着',right:'微笑'},
  {left:'雪花',right:'飘下来'},
  {left:'绳子',right:'断了'},
  {left:'农村',right:'生活'}
);

// Cau sap xep co hai trat tu deu dung: chu ngu 他 dung truoc hoac sau 临走的时候
sortData.forEach(function (s) {
  if (s.ans === '临走的时候，他给我打了电话。') s.alt = ['他临走的时候，给我打了电话。'];
});

// ══════════════════════════════════════════
// BÀI KHOÁ HSK 5 là MỘT bài liền và file nghe của giáo trình đọc liền cả bài —
// gộp các đoạn soạn ở trên thành một bài (giữ nguyên từng đoạn văn bên trong).
// ══════════════════════════════════════════
dialogData = [{
  scene: '课文 · 留串钥匙给父母',
  preQuiz: dialogData.reduce(function (a, d) { return a.concat(d.preQuiz || []); }, []),
  lines: dialogData.reduce(function (a, d) { return a.concat(d.lines || []); }, [])
}];
