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
