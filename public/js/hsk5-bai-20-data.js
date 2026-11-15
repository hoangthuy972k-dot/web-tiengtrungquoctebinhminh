// ══════════════════════════════════════════
// DATA — HSK5 Bài 20: 小人书摊 (Quầy truyện tranh)
// Unit 7 交流文化 · Nguồn: HSK标准教程5下 (tr. 22–29) + 练习册 第20课
// ══════════════════════════════════════════

var vocabData = [
  {n:1,zh:'摊',py:'tān',pos:'Danh từ',vn:'quầy, sạp (hàng)',hv:'than',em:'🏪',lesson:1,
   explain:['Quầy hàng, sạp bày bán dựng tạm ở vỉa hè, đầu phố, trong chợ — không phải cửa hàng có mặt bằng cố định. Hay ghép: 书摊, 水果摊, 小吃摊; 摊主 = chủ sạp.'],
   usage:'Lượng từ: 个/家: 一个书摊. Ghép: 摆摊 (bày sạp bán hàng), 摊主. Trong bài: 小人书摊, 旧书摊.',
   collo:['小人书摊','摆摊','摊主'],
   ex_zh:'记得小时候，我家附近就有个小人书摊。',ex_py:'Jìde xiǎo shíhou, wǒ jiā fùjìn jiù yǒu ge xiǎorénshū tān.',ex_vn:'Nhớ hồi nhỏ, gần nhà tôi có một sạp truyện tranh.',
   exList:[
     {zh:'记得小时候，我家附近就有个小人书摊。',py:'Jìde xiǎo shíhou, wǒ jiā fùjìn jiù yǒu ge xiǎorénshū tān.',vn:'Nhớ hồi nhỏ, gần nhà tôi có một sạp truyện tranh.'},
     {zh:'学校门口有个水果摊，放学后同学们常去买水果。',py:'Xuéxiào ménkǒu yǒu ge shuǐguǒ tān, fàngxué hòu tóngxuémen cháng qù mǎi shuǐguǒ.',vn:'Trước cổng trường có một sạp hoa quả, tan học các bạn thường ra đó mua.'},
     {zh:'周末我们在夜市摆摊，卖自己做的手工。',py:'Zhōumò wǒmen zài yèshì bǎi tān, mài zìjǐ zuò de shǒugōng.',vn:'Cuối tuần chúng tôi bày sạp ở chợ đêm, bán đồ thủ công tự làm.'}
   ],
   colloFull:[{zh:'小人书摊',py:'xiǎorénshū tān',vn:'sạp truyện tranh'},{zh:'摆摊',py:'bǎi tān',vn:'bày sạp bán hàng'},{zh:'摊主',py:'tānzhǔ',vn:'chủ sạp'},{zh:'旧书摊',py:'jiù shūtān',vn:'sạp sách cũ'}],
   patterns:[{s:'N + 摊 (书摊 / 水果摊 / 小吃摊)',m:'Sạp bán …'},{s:'在 + nơi chốn + 摆摊',m:'Bày sạp bán hàng ở …'}],
   checkList:[
     {promptLang:'vi',prompt:'Hồi nhỏ, hễ tan học là tôi chạy ngay đến sạp truyện tranh.',answer:'小时候，我一放学就跑到小人书摊去。',answerPy:'Xiǎo shíhou, wǒ yí fàngxué jiù pǎodào xiǎorénshū tān qù.',note:'小人书摊 là nơi chốn, đứng sau 跑到.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Sạp sách cũ này là do một cụ già ngoài bảy mươi bày.',answer:'这个旧书摊是一位七十多岁的老人摆的。',answerPy:'Zhège jiù shūtān shì yí wèi qīshí duō suì de lǎorén bǎi de.',note:'摆 + 摊: bày sạp; nhấn mạnh người làm bằng 是……的.',pair:'是……的'}
   ]},

  {n:2,zh:'出版',py:'chūbǎn',pos:'Động từ',vn:'xuất bản',hv:'xuất bản',em:'📚',lesson:1,
   explain:['In và phát hành sách, báo, tạp chí… ra công chúng.'],
   usage:'出版 + 书/杂志/小说; 由 + 出版社 + 出版; 出版社 = nhà xuất bản. Làm định ngữ: 以……的形式出版的 + N.',
   collo:['出版小说','出版社','正式出版'],
   ex_zh:'小人书，是一种以书的形式出版的连环画。',ex_py:'Xiǎorénshū, shì yì zhǒng yǐ shū de xíngshì chūbǎn de liánhuánhuà.',ex_vn:'"Tiểu nhân thư" là một loại tranh liên hoàn được xuất bản dưới dạng sách.',
   exList:[
     {zh:'小人书，是一种以书的形式出版的连环画。',py:'Xiǎorénshū, shì yì zhǒng yǐ shū de xíngshì chūbǎn de liánhuánhuà.',vn:'"Tiểu nhân thư" là một loại tranh liên hoàn được xuất bản dưới dạng sách.'},
     {zh:'这本小说是去年由北京的一家出版社出版的。',py:'Zhè běn xiǎoshuō shì qùnián yóu Běijīng de yì jiā chūbǎnshè chūbǎn de.',vn:'Cuốn tiểu thuyết này do một nhà xuất bản ở Bắc Kinh phát hành năm ngoái.'},
     {zh:'她的第一本书出版以后，很快就卖完了。',py:'Tā de dì-yī běn shū chūbǎn yǐhòu, hěn kuài jiù màiwán le.',vn:'Cuốn sách đầu tay của cô ấy vừa xuất bản đã nhanh chóng bán hết.'}
   ],
   colloFull:[{zh:'出版小说',py:'chūbǎn xiǎoshuō',vn:'xuất bản tiểu thuyết'},{zh:'出版社',py:'chūbǎnshè',vn:'nhà xuất bản'},{zh:'正式出版',py:'zhèngshì chūbǎn',vn:'chính thức xuất bản'},{zh:'出版了一本书',py:'chūbǎnle yì běn shū',vn:'đã xuất bản một cuốn sách'}],
   patterns:[{s:'由 + 出版社 + 出版',m:'Do nhà xuất bản … phát hành'},{s:'以……的形式出版',m:'Xuất bản dưới hình thức …'}],
   checkList:[
     {promptLang:'vi',prompt:'Cuốn truyện tranh này xuất bản năm 1960.',answer:'这本小人书是一九六〇年出版的。',answerPy:'Zhè běn xiǎorénshū shì yī jiǔ liù líng nián chūbǎn de.',note:'Nhấn mạnh thời gian xuất bản: 是 + thời gian + 出版 + 的.',pair:'是……的'},
     {promptLang:'vi',prompt:'Nhà xuất bản đã in thành sách toàn bộ nhật ký của ông ấy.',answer:'出版社把他的日记全部出版了。',answerPy:'Chūbǎnshè bǎ tā de rìjì quánbù chūbǎn le.',note:'出版 là động từ mang tân ngữ; tân ngữ đưa lên trước bằng 把.',pair:'把'}
   ]},

  {n:3,zh:'连环画',py:'liánhuánhuà',pos:'Danh từ',vn:'sách tranh liên hoàn, truyện tranh',hv:'liên hoàn hoạ',em:'🖼️',lesson:1,
   explain:['Truyện kể bằng nhiều bức tranh nối tiếp nhau, mỗi trang thường một bức tranh kèm vài dòng chữ. Ở Trung Quốc còn gọi thân mật là 小人书 (tiểu nhân thư).'],
   usage:'Lượng từ: 本/套: 一本连环画, 一套连环画. Khác 漫画 (truyện tranh kiểu manga, tranh biếm hoạ).',
   collo:['一套连环画','看连环画','连环画作品'],
   ex_zh:'小人书，是一种以书的形式出版的连环画。',ex_py:'Xiǎorénshū, shì yì zhǒng yǐ shū de xíngshì chūbǎn de liánhuánhuà.',ex_vn:'"Tiểu nhân thư" là một loại tranh liên hoàn được xuất bản dưới dạng sách.',
   exList:[
     {zh:'小人书，是一种以书的形式出版的连环画。',py:'Xiǎorénshū, shì yì zhǒng yǐ shū de xíngshì chūbǎn de liánhuánhuà.',vn:'"Tiểu nhân thư" là một loại tranh liên hoàn được xuất bản dưới dạng sách.'},
     {zh:'爷爷小时候最爱看《西游记》连环画。',py:'Yéye xiǎo shíhou zuì ài kàn 《Xīyóujì》 liánhuánhuà.',vn:'Hồi nhỏ ông nội mê nhất truyện tranh Tây Du Ký.'},
     {zh:'这套连环画一共有十本，每本讲一个故事。',py:'Zhè tào liánhuánhuà yígòng yǒu shí běn, měi běn jiǎng yí ge gùshi.',vn:'Bộ truyện tranh này có tất cả mười cuốn, mỗi cuốn kể một câu chuyện.'}
   ],
   colloFull:[{zh:'一套连环画',py:'yí tào liánhuánhuà',vn:'một bộ truyện tranh'},{zh:'看连环画',py:'kàn liánhuánhuà',vn:'đọc truyện tranh'},{zh:'连环画作品',py:'liánhuánhuà zuòpǐn',vn:'tác phẩm tranh liên hoàn'},{zh:'《三国演义》连环画',py:'《Sānguó Yǎnyì》 liánhuánhuà',vn:'truyện tranh Tam Quốc diễn nghĩa'}],
   patterns:[{s:'一本 / 一套 + 连环画',m:'Một cuốn / một bộ truyện tranh'},{s:'《tên truyện》 + 连环画',m:'Truyện tranh chuyển thể từ …'}],
   checkList:[
     {promptLang:'vi',prompt:'Bộ truyện tranh này không chỉ trẻ con thích mà người lớn cũng thích.',answer:'这套连环画不仅孩子喜欢，大人也喜欢。',answerPy:'Zhè tào liánhuánhuà bùjǐn háizi xǐhuan, dàrén yě xǐhuan.',note:'Lượng từ của 连环画 là 套 (bộ) hoặc 本 (cuốn).',pair:'不仅……也……'},
     {promptLang:'vi',prompt:'Tôi chưa từng đọc truyện tranh Tây Du Ký.',answer:'我从来没看过《西游记》连环画。',answerPy:'Wǒ cónglái méi kànguo 《Xīyóujì》 liánhuánhuà.',note:'Tên truyện + 连环画: truyện tranh chuyển thể.',pair:'从来没……过'}
   ]},

  {n:4,zh:'年代',py:'niándài',pos:'Danh từ',vn:'thập kỷ, thập niên; thời kỳ',hv:'niên đại',em:'📅',lesson:1,
   explain:['Thập niên — mỗi mười năm của một thế kỷ (二十世纪八十年代 = thập niên 80 của thế kỷ 20); cũng chỉ một thời kỳ nói chung (那个年代).'],
   usage:'(世纪) + số + 年代: 五六十年代 = thập niên 50–60. Khác 时代 (thời đại, giai đoạn lịch sử lớn: 信息时代, 学生时代) — không nói 八十时代.',
   collo:['二十世纪五六十年代','八十年代','那个年代'],
   ex_zh:'在二十世纪五六十年代，那时候生活很单调。',ex_py:'Zài èrshí shìjì wǔ liùshí niándài, nà shíhou shēnghuó hěn dāndiào.',ex_vn:'Vào những năm 50–60 của thế kỷ 20, cuộc sống thời ấy rất đơn điệu.',
   exList:[
     {zh:'在二十世纪五六十年代，那时候生活很单调。',py:'Zài èrshí shìjì wǔ liùshí niándài, nà shíhou shēnghuó hěn dāndiào.',vn:'Vào những năm 50–60 của thế kỷ 20, cuộc sống thời ấy rất đơn điệu.'},
     {zh:'这可以说是20世纪80年代最流行的歌曲。',py:'Zhè kěyǐ shuō shì èrshí shìjì bāshí niándài zuì liúxíng de gēqǔ.',vn:'Có thể nói đây là bài hát thịnh hành nhất thập niên 80 thế kỷ 20.'},
     {zh:'在爸爸妈妈那个年代，家里有电视的人很少。',py:'Zài bàba māma nàge niándài, jiā li yǒu diànshì de rén hěn shǎo.',vn:'Vào thời của bố mẹ, rất ít nhà có tivi.'}
   ],
   colloFull:[{zh:'二十世纪五六十年代',py:'èrshí shìjì wǔ liùshí niándài',vn:'thập niên 50–60 thế kỷ 20'},{zh:'八十年代',py:'bāshí niándài',vn:'thập niên 80'},{zh:'那个年代',py:'nàge niándài',vn:'thời ấy'},{zh:'年代久远',py:'niándài jiǔyuǎn',vn:'lâu đời'}],
   patterns:[{s:'(……世纪) + số + 年代',m:'Thập niên … (của thế kỷ …)'},{s:'在……那个年代',m:'Vào cái thời …'}],
   checkList:[
     {promptLang:'vi',prompt:'Vào thời của ông bà nội, ngay cả xe đạp cũng là thứ quý.',answer:'在爷爷奶奶那个年代，连自行车都是很贵重的东西。',answerPy:'Zài yéye nǎinai nàge niándài, lián zìxíngchē dōu shì hěn guìzhòng de dōngxi.',note:'那个年代 = thời ấy (một thời kỳ nói chung).',pair:'连……都……'},
     {promptLang:'vi',prompt:'Bài hát này tuy là bài của thập niên 80 nhưng bây giờ vẫn có nhiều người thích.',answer:'这首歌虽然是八十年代的歌，但是现在还有很多人喜欢。',answerPy:'Zhè shǒu gē suīrán shì bāshí niándài de gē, dànshì xiànzài hái yǒu hěn duō rén xǐhuan.',note:'Số + 年代: 八十年代 — không nói 八十时代.',pair:'虽然……但是……'}
   ]},

  {n:5,zh:'单调',py:'dāndiào',pos:'Tính từ',vn:'đơn điệu, nhàm chán',hv:'đơn điệu',em:'😑',lesson:1,
   explain:['Đơn điệu, lặp đi lặp lại, ít thay đổi nên dễ chán (cuộc sống, màu sắc, âm thanh, hình thức…).'],
   usage:'Bảng 搭配 của sách: 生活 / 色彩 / 形式 + 单调. Trái nghĩa: 丰富, 多彩.',
   collo:['生活单调','色彩单调','形式单调'],
   ex_zh:'那时候生活很单调，没有网络，没有动画片。',ex_py:'Nà shíhou shēnghuó hěn dāndiào, méiyǒu wǎngluò, méiyǒu dònghuàpiàn.',ex_vn:'Thời ấy cuộc sống rất đơn điệu, không có Internet, không có phim hoạt hình.',
   exList:[
     {zh:'那时候生活很单调，没有网络，没有动画片。',py:'Nà shíhou shēnghuó hěn dāndiào, méiyǒu wǎngluò, méiyǒu dònghuàpiàn.',vn:'Thời ấy cuộc sống rất đơn điệu, không có Internet, không có phim hoạt hình.'},
     {zh:'他觉得在中国的生活很单调，我却觉得很丰富。',py:'Tā juéde zài Zhōngguó de shēnghuó hěn dāndiào, wǒ què juéde hěn fēngfù.',vn:'Anh ấy thấy cuộc sống ở Trung Quốc rất đơn điệu, còn tôi lại thấy rất phong phú.'},
     {zh:'这个房间的色彩太单调了，挂几幅画吧。',py:'Zhège fángjiān de sècǎi tài dāndiào le, guà jǐ fú huà ba.',vn:'Màu sắc căn phòng này đơn điệu quá, treo mấy bức tranh đi.'}
   ],
   colloFull:[{zh:'生活单调',py:'shēnghuó dāndiào',vn:'cuộc sống đơn điệu'},{zh:'色彩单调',py:'sècǎi dāndiào',vn:'màu sắc đơn điệu'},{zh:'形式单调',py:'xíngshì dāndiào',vn:'hình thức đơn điệu'},{zh:'单调的工作',py:'dāndiào de gōngzuò',vn:'công việc nhàm chán'}],
   patterns:[{s:'生活 / 色彩 / 形式 + (很) 单调',m:'(Cuộc sống / màu sắc / hình thức) đơn điệu'},{s:'单调 ↔ 丰富',m:'Đơn điệu ↔ phong phú'}],
   checkList:[
     {promptLang:'vi',prompt:'Cuộc sống ở ký túc xá tuy hơi đơn điệu nhưng rất nền nếp.',answer:'住校的生活虽然有点儿单调，但是很有规律。',answerPy:'Zhùxiào de shēnghuó suīrán yǒudiǎnr dāndiào, dànshì hěn yǒu guīlǜ.',note:'有点儿 + 单调: hơi đơn điệu (ý chê nhẹ).',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Có Internet rồi, cuộc sống của người trẻ ngày càng phong phú, không còn đơn điệu như trước.',answer:'有了网络以后，年轻人的生活越来越丰富，不像以前那么单调了。',answerPy:'Yǒule wǎngluò yǐhòu, niánqīng rén de shēnghuó yuè lái yuè fēngfù, bú xiàng yǐqián nàme dāndiào le.',note:'单调 đối lập với 丰富.',pair:'越来越……'}
   ]},

  {n:6,zh:'网络',py:'wǎngluò',pos:'Danh từ',vn:'mạng (Internet); mạng lưới',hv:'võng lạc',em:'🌐',lesson:1,
   explain:['Mạng Internet; cũng chỉ mạng lưới nói chung (交通网络 = mạng lưới giao thông).'],
   usage:'网络 + 游戏 / 购物 / 新闻; 在网络上 = 在网上. Lên mạng: 上网.',
   collo:['网络游戏','网络上','没有网络'],
   ex_zh:'那时候生活很单调，没有网络，没有动画片。',ex_py:'Nà shíhou shēnghuó hěn dāndiào, méiyǒu wǎngluò, méiyǒu dònghuàpiàn.',ex_vn:'Thời ấy cuộc sống rất đơn điệu, không có Internet, không có phim hoạt hình.',
   exList:[
     {zh:'那时候生活很单调，没有网络，没有动画片。',py:'Nà shíhou shēnghuó hěn dāndiào, méiyǒu wǎngluò, méiyǒu dònghuàpiàn.',vn:'Thời ấy cuộc sống rất đơn điệu, không có Internet, không có phim hoạt hình.'},
     {zh:'现在的青少年离不开网络。',py:'Xiànzài de qīngshàonián lí bu kāi wǎngluò.',vn:'Thanh thiếu niên bây giờ không rời được mạng Internet.'},
     {zh:'宿舍的网络太慢了，我连一个视频都看不了。',py:'Sùshè de wǎngluò tài màn le, wǒ lián yí ge shìpín dōu kàn bu liǎo.',vn:'Mạng ở ký túc xá chậm quá, tôi đến một video cũng không xem nổi.'}
   ],
   colloFull:[{zh:'网络游戏',py:'wǎngluò yóuxì',vn:'game online'},{zh:'网络上',py:'wǎngluò shang',vn:'trên mạng'},{zh:'没有网络',py:'méiyǒu wǎngluò',vn:'không có mạng'},{zh:'网络购物',py:'wǎngluò gòuwù',vn:'mua sắm trực tuyến'}],
   patterns:[{s:'网络 + 游戏 / 购物 / 新闻',m:'Game / mua sắm / tin tức trên mạng'},{s:'在网络上 + V',m:'Làm gì trên mạng'}],
   checkList:[
     {promptLang:'vi',prompt:'Ở quê ông nội đến mạng cũng không có.',answer:'爷爷的老家连网络都没有。',answerPy:'Yéye de lǎojiā lián wǎngluò dōu méiyǒu.',note:'没有网络 = không có mạng.',pair:'连……都……'},
     {promptLang:'vi',prompt:'Chỉ cần có mạng là cậu ấy ngồi được cả ngày.',answer:'只要有网络，他就能坐一整天。',answerPy:'Zhǐyào yǒu wǎngluò, tā jiù néng zuò yì zhěng tiān.',note:'有网络 = có mạng (có Internet).',pair:'只要……就……'}
   ]},

  {n:7,zh:'动画片',py:'dònghuàpiàn',pos:'Danh từ',vn:'phim hoạt hình',hv:'động hoạ phiến',em:'🎬',lesson:1,
   explain:['Phim hoạt hình (vẽ tay hoặc làm bằng máy tính).'],
   usage:'Lượng từ: 部/个: 一部动画片. Động từ: 看 / 放 / 做 + 动画片.',
   collo:['看动画片','一部动画片','国产动画片'],
   ex_zh:'没有网络，没有动画片，读小人书是儿童最主要的娱乐之一。',ex_py:'Méiyǒu wǎngluò, méiyǒu dònghuàpiàn, dú xiǎorénshū shì értóng zuì zhǔyào de yúlè zhīyī.',ex_vn:'Không có Internet, không có phim hoạt hình, đọc truyện tranh là một trong những thú giải trí chính của trẻ em.',
   exList:[
     {zh:'没有网络，没有动画片，读小人书是儿童最主要的娱乐之一。',py:'Méiyǒu wǎngluò, méiyǒu dònghuàpiàn, dú xiǎorénshū shì értóng zuì zhǔyào de yúlè zhīyī.',vn:'Không có Internet, không có phim hoạt hình, đọc truyện tranh là một trong những thú giải trí chính của trẻ em.'},
     {zh:'弟弟每天吃完晚饭都要看半个小时动画片。',py:'Dìdi měi tiān chīwán wǎnfàn dōu yào kàn bàn ge xiǎoshí dònghuàpiàn.',vn:'Ngày nào ăn tối xong em trai cũng đòi xem nửa tiếng phim hoạt hình.'},
     {zh:'这部动画片不仅孩子爱看，大人也爱看。',py:'Zhè bù dònghuàpiàn bùjǐn háizi ài kàn, dàrén yě ài kàn.',vn:'Bộ phim hoạt hình này không chỉ trẻ con mà người lớn cũng thích xem.'}
   ],
   colloFull:[{zh:'看动画片',py:'kàn dònghuàpiàn',vn:'xem phim hoạt hình'},{zh:'一部动画片',py:'yí bù dònghuàpiàn',vn:'một bộ phim hoạt hình'},{zh:'国产动画片',py:'guóchǎn dònghuàpiàn',vn:'phim hoạt hình sản xuất trong nước'},{zh:'动画片里的人物',py:'dònghuàpiàn li de rénwù',vn:'nhân vật trong phim hoạt hình'}],
   patterns:[{s:'一部 + 动画片',m:'Một bộ phim hoạt hình'},{s:'看 / 放 / 做 + 动画片',m:'Xem / chiếu / làm phim hoạt hình'}],
   checkList:[
     {promptLang:'vi',prompt:'Em trai vừa về đến nhà là bật tivi xem phim hoạt hình.',answer:'弟弟一回家就打开电视看动画片。',answerPy:'Dìdi yì huí jiā jiù dǎkāi diànshì kàn dònghuàpiàn.',note:'看动画片 = xem phim hoạt hình.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Bộ phim hoạt hình này là do một công ty Việt Nam sản xuất.',answer:'这部动画片是一家越南公司制作的。',answerPy:'Zhè bù dònghuàpiàn shì yì jiā Yuènán gōngsī zhìzuò de.',note:'Lượng từ 部 cho phim; 制作 = sản xuất (phim).',pair:'是……的'}
   ]},

  {n:8,zh:'娱乐',py:'yúlè',pos:'Danh từ / Động từ',vn:'thú tiêu khiển; giải trí',hv:'ngu lạc',em:'🎮',lesson:1,
   explain:['Danh từ: hoạt động vui chơi, giải trí. Động từ: vui chơi, giải trí cho thoải mái. 娱 = vui (không phải "ngu" là dốt).'],
   usage:'娱乐活动, 娱乐节目, 娱乐场所; ……是……的娱乐之一 = … là một trong những thú giải trí của …; 娱乐一下.',
   collo:['娱乐活动','娱乐节目','娱乐之一'],
   ex_zh:'读小人书是儿童最主要的娱乐之一。',ex_py:'Dú xiǎorénshū shì értóng zuì zhǔyào de yúlè zhīyī.',ex_vn:'Đọc truyện tranh là một trong những thú giải trí chủ yếu nhất của trẻ em.',
   exList:[
     {zh:'读小人书是儿童最主要的娱乐之一。',py:'Dú xiǎorénshū shì értóng zuì zhǔyào de yúlè zhīyī.',vn:'Đọc truyện tranh là một trong những thú giải trí chủ yếu nhất của trẻ em.'},
     {zh:'周末的时候，你一般有什么娱乐活动？',py:'Zhōumò de shíhou, nǐ yìbān yǒu shénme yúlè huódòng?',vn:'Cuối tuần bạn thường có hoạt động giải trí gì?'},
     {zh:'学习累了，偶尔娱乐一下也是必要的。',py:'Xuéxí lèi le, ǒu\'ěr yúlè yíxià yě shì bìyào de.',vn:'Học mệt rồi thì thỉnh thoảng giải trí một chút cũng là cần thiết.'}
   ],
   colloFull:[{zh:'娱乐活动',py:'yúlè huódòng',vn:'hoạt động giải trí'},{zh:'娱乐节目',py:'yúlè jiémù',vn:'chương trình giải trí'},{zh:'娱乐之一',py:'yúlè zhīyī',vn:'một trong những thú giải trí'},{zh:'娱乐一下',py:'yúlè yíxià',vn:'giải trí một chút'}],
   patterns:[{s:'……是……的娱乐之一',m:'… là một trong những thú giải trí của …'},{s:'娱乐 + 活动 / 节目 / 场所',m:'Hoạt động / chương trình / nơi giải trí'}],
   checkList:[
     {promptLang:'vi',prompt:'Hồi nhỏ hoạt động giải trí của chúng tôi tuy không nhiều nhưng rất vui.',answer:'小时候我们的娱乐活动虽然不多，但是很快乐。',answerPy:'Xiǎo shíhou wǒmen de yúlè huódòng suīrán bù duō, dànshì hěn kuàilè.',note:'娱乐活动 = hoạt động giải trí.',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Ông nội chưa bao giờ xem chương trình giải trí.',answer:'爷爷从来没看过娱乐节目。',answerPy:'Yéye cónglái méi kànguo yúlè jiémù.',note:'娱乐节目 = chương trình giải trí (TV).',pair:'从来没……过'}
   ]},

  {n:9,zh:'无数',py:'wúshù',pos:'Tính từ',vn:'vô số, không đếm xuể',hv:'vô số',em:'✨',lesson:1,
   explain:['Nhiều đến mức không đếm được.'],
   usage:'Thường làm định ngữ: 无数(的) + N (无数的青少年); 无数次 = không biết bao nhiêu lần. Không đi với 很 (✗ 很无数).',
   collo:['无数的人','无数次','无数的困难'],
   ex_zh:'不仅小孩子爱看，还有无数的青少年和大人也爱看。',ex_py:'Bùjǐn xiǎo háizi ài kàn, hái yǒu wúshù de qīngshàonián hé dàrén yě ài kàn.',ex_vn:'Không chỉ trẻ nhỏ thích đọc, mà vô số thanh thiếu niên và người lớn cũng mê.',
   exList:[
     {zh:'不仅小孩子爱看，还有无数的青少年和大人也爱看。',py:'Bùjǐn xiǎo háizi ài kàn, hái yǒu wúshù de qīngshàonián hé dàrén yě ài kàn.',vn:'Không chỉ trẻ nhỏ thích đọc, mà vô số thanh thiếu niên và người lớn cũng mê.'},
     {zh:'我的经验来自于无数错误的判断。',py:'Wǒ de jīngyàn láizì yú wúshù cuòwù de pànduàn.',vn:'Kinh nghiệm của tôi đến từ vô số lần phán đoán sai.'},
     {zh:'为了这次比赛，他练习了无数次。',py:'Wèile zhè cì bǐsài, tā liànxíle wúshù cì.',vn:'Để chuẩn bị cho cuộc thi này, cậu ấy đã luyện tập không biết bao nhiêu lần.'}
   ],
   colloFull:[{zh:'无数的人',py:'wúshù de rén',vn:'vô số người'},{zh:'无数次',py:'wúshù cì',vn:'vô số lần'},{zh:'无数的困难',py:'wúshù de kùnnan',vn:'vô vàn khó khăn'},{zh:'无数的青少年',py:'wúshù de qīngshàonián',vn:'vô số thanh thiếu niên'}],
   patterns:[{s:'无数(的) + N',m:'Vô số …'},{s:'V + 了 + 无数次',m:'Làm … không biết bao nhiêu lần'}],
   checkList:[
     {promptLang:'vi',prompt:'Anh ấy đã thất bại vô số lần nhưng chưa bao giờ bỏ cuộc.',answer:'他失败了无数次，但是从来没放弃过。',answerPy:'Tā shībàile wúshù cì, dànshì cónglái méi fàngqìguo.',note:'无数次 đứng sau động từ làm bổ ngữ số lần.',pair:'从来没……过'},
     {promptLang:'vi',prompt:'Vô số người đã bị câu chuyện này làm cảm động.',answer:'无数的人被这个故事感动了。',answerPy:'Wúshù de rén bèi zhège gùshi gǎndòng le.',note:'无数的 + N làm chủ ngữ.',pair:'被'}
   ]},

  {n:10,zh:'青少年',py:'qīngshàonián',pos:'Danh từ',vn:'thanh thiếu niên',hv:'thanh thiếu niên',em:'🧑‍🎓',lesson:1,
   explain:['Lứa tuổi mới lớn, khoảng từ 13 đến 18–20 tuổi (học sinh cấp 2, cấp 3). Chú ý 少 ở đây đọc thanh 4: shào.'],
   usage:'Danh từ tập hợp: 青少年 + 时期 / 读物 / 教育; 广大青少年. Thường không nói 一个青少年.',
   collo:['青少年时期','广大青少年','青少年读物'],
   ex_zh:'还有无数的青少年和大人也爱看。',ex_py:'Hái yǒu wúshù de qīngshàonián hé dàrén yě ài kàn.',ex_vn:'Còn có vô số thanh thiếu niên và người lớn cũng mê đọc.',
   exList:[
     {zh:'还有无数的青少年和大人也爱看。',py:'Hái yǒu wúshù de qīngshàonián hé dàrén yě ài kàn.',vn:'Còn có vô số thanh thiếu niên và người lớn cũng mê đọc.'},
     {zh:'这本书很适合青少年阅读。',py:'Zhè běn shū hěn shìhé qīngshàonián yuèdú.',vn:'Cuốn sách này rất hợp cho thanh thiếu niên đọc.'},
     {zh:'越来越多的青少年喜欢在网上看小说。',py:'Yuè lái yuè duō de qīngshàonián xǐhuan zài wǎng shang kàn xiǎoshuō.',vn:'Ngày càng nhiều thanh thiếu niên thích đọc tiểu thuyết trên mạng.'}
   ],
   colloFull:[{zh:'青少年时期',py:'qīngshàonián shíqī',vn:'thời thanh thiếu niên'},{zh:'广大青少年',py:'guǎngdà qīngshàonián',vn:'đông đảo thanh thiếu niên'},{zh:'青少年读物',py:'qīngshàonián dúwù',vn:'sách cho tuổi mới lớn'},{zh:'青少年的健康',py:'qīngshàonián de jiànkāng',vn:'sức khoẻ thanh thiếu niên'}],
   patterns:[{s:'青少年 + 时期 / 读物 / 教育',m:'Thời / sách / giáo dục tuổi thanh thiếu niên'},{s:'适合青少年 + V',m:'Hợp để thanh thiếu niên …'}],
   checkList:[
     {promptLang:'vi',prompt:'Thanh thiếu niên bị cận thị ngày càng nhiều.',answer:'近视的青少年越来越多了。',answerPy:'Jìnshì de qīngshàonián yuè lái yuè duō le.',note:'青少年 là danh từ tập hợp, không cần 们.',pair:'越来越……'},
     {promptLang:'vi',prompt:'Không chỉ thanh thiếu niên thích đọc cuốn sách này, người lớn cũng thích.',answer:'不仅青少年喜欢看这本书，大人也喜欢看。',answerPy:'Bùjǐn qīngshàonián xǐhuan kàn zhè běn shū, dàrén yě xǐhuan kàn.',note:'Hai chủ ngữ khác nhau → 不仅 đứng trước chủ ngữ thứ nhất.',pair:'不仅……也……'}
   ]},

  {n:11,zh:'从事',py:'cóngshì',pos:'Động từ',vn:'làm, theo (nghề, công việc)',hv:'tòng sự',em:'💼',lesson:1,
   explain:['Làm, theo đuổi một nghề, một công việc, một lĩnh vực — trang trọng hơn 做 / 干.'],
   usage:'Bảng 搭配: 从事 + (……的) 工作 / 业务 / 职业. Tân ngữ là danh từ trừu tượng, không nói ✗ 从事作业 / ✗ 从事饭.',
   collo:['从事教育工作','从事租书业务','从事这个职业'],
   ex_zh:'随着小人书的流行，出现了从事租书业务的小人书摊。',ex_py:'Suízhe xiǎorénshū de liúxíng, chūxiànle cóngshì zūshū yèwù de xiǎorénshū tān.',ex_vn:'Cùng với sự thịnh hành của truyện tranh, xuất hiện những sạp truyện tranh làm dịch vụ cho thuê sách.',
   exList:[
     {zh:'随着小人书的流行，出现了从事租书业务的小人书摊。',py:'Suízhe xiǎorénshū de liúxíng, chūxiànle cóngshì zūshū yèwù de xiǎorénshū tān.',vn:'Cùng với sự thịnh hành của truyện tranh, xuất hiện những sạp truyện tranh làm dịch vụ cho thuê sách.'},
     {zh:'我想从事有挑战性的工作，因为那样可以更好地成长。',py:'Wǒ xiǎng cóngshì yǒu tiǎozhànxìng de gōngzuò, yīnwèi nàyàng kěyǐ gèng hǎo de chéngzhǎng.',vn:'Tôi muốn làm công việc có tính thử thách, vì như vậy có thể trưởng thành tốt hơn.'},
     {zh:'周先生从事文艺创作已经很多年了。',py:'Zhōu xiānsheng cóngshì wényì chuàngzuò yǐjīng hěn duō nián le.',vn:'Ông Chu làm công việc sáng tác văn nghệ đã nhiều năm rồi.'}
   ],
   colloFull:[{zh:'从事教育工作',py:'cóngshì jiàoyù gōngzuò',vn:'làm công tác giáo dục'},{zh:'从事租书业务',py:'cóngshì zūshū yèwù',vn:'làm dịch vụ cho thuê sách'},{zh:'从事这个职业',py:'cóngshì zhège zhíyè',vn:'làm nghề này'},{zh:'从事文艺创作',py:'cóngshì wényì chuàngzuò',vn:'làm sáng tác văn nghệ'}],
   patterns:[{s:'从事 + (……的) 工作 / 业务 / 职业',m:'Làm công việc / nghiệp vụ / nghề …'},{s:'从事……已经……年了',m:'Làm nghề … đã … năm'}],
   checkList:[
     {promptLang:'vi',prompt:'Tuy làm nghề này rất vất vả nhưng anh ấy chưa bao giờ phàn nàn.',answer:'虽然从事这个职业很辛苦，但是他从来没抱怨过。',answerPy:'Suīrán cóngshì zhège zhíyè hěn xīnkǔ, dànshì tā cónglái méi bàoyuànguo.',note:'从事 + 职业: tân ngữ trừu tượng; 抱怨 là từ bài 1.',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Từ khi làm công tác giáo dục, cô ấy ngày càng kiên nhẫn với trẻ con.',answer:'从事教育工作以后，她对孩子越来越有耐心了。',answerPy:'Cóngshì jiàoyù gōngzuò yǐhòu, tā duì háizi yuè lái yuè yǒu nàixīn le.',note:'从事 + 教育工作: cách nói trang trọng của 当老师.',pair:'越来越……'}
   ]},

  {n:12,zh:'毫无',py:'háowú',pos:'Động từ',vn:'không chút, hoàn toàn không có',hv:'hào vô',em:'🚫',lesson:1,
   explain:['Không có một chút nào (毫 = sợi lông nhỏ → đến một sợi lông cũng không có). Văn viết, mạnh hơn 没有.'],
   usage:'毫无 + danh từ / động từ hai âm tiết: 毫无疑问, 毫无办法, 毫无意义, 毫无道理. Đã mang nghĩa phủ định, không thêm 不/没 (✗ 毫无没有).',
   collo:['毫无疑问','毫无办法','毫无道理'],
   ex_zh:'只用很少的钱就能看一本，毫无疑问是件大好事。',ex_py:'Zhǐ yòng hěn shǎo de qián jiù néng kàn yì běn, háowú yíwèn shì jiàn dà hǎoshì.',ex_vn:'Chỉ tốn rất ít tiền là đọc được một cuốn — chắc chắn đó là một điều cực kỳ tốt.',
   exList:[
     {zh:'只用很少的钱就能看一本，毫无疑问是件大好事。',py:'Zhǐ yòng hěn shǎo de qián jiù néng kàn yì běn, háowú yíwèn shì jiàn dà hǎoshì.',vn:'Chỉ tốn rất ít tiền là đọc được một cuốn — chắc chắn đó là một điều cực kỳ tốt.'},
     {zh:'对这个调皮的孩子，老师也毫无办法。',py:'Duì zhège tiáopí de háizi, lǎoshī yě háowú bànfǎ.',vn:'Với đứa trẻ nghịch ngợm này, đến thầy giáo cũng hoàn toàn bó tay.'},
     {zh:'他说的话毫无道理，大家都不同意。',py:'Tā shuō de huà háowú dàolǐ, dàjiā dōu bù tóngyì.',vn:'Lời anh ta nói chẳng có chút lý lẽ nào, mọi người đều không đồng ý.'}
   ],
   colloFull:[{zh:'毫无疑问',py:'háowú yíwèn',vn:'không chút nghi ngờ'},{zh:'毫无办法',py:'háowú bànfǎ',vn:'hoàn toàn bó tay'},{zh:'毫无道理',py:'háowú dàolǐ',vn:'chẳng có lý lẽ gì'},{zh:'毫无意义',py:'háowú yìyì',vn:'hoàn toàn vô nghĩa'}],
   patterns:[{s:'毫无 + 疑问 / 办法 / 意义 / 道理',m:'Hoàn toàn không có …'},{s:'毫无疑问，……',m:'Không nghi ngờ gì nữa, …'}],
   checkList:[
     {promptLang:'vi',prompt:'Tuy đã thử rất nhiều cách nhưng bác sĩ vẫn hoàn toàn bó tay.',answer:'虽然试了很多方法，但是医生还是毫无办法。',answerPy:'Suīrán shìle hěn duō fāngfǎ, dànshì yīshēng háishi háowú bànfǎ.',note:'毫无办法 = 一点儿办法也没有.',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Lời anh ta nói chẳng có lý chút nào, đến bạn thân của anh ta cũng không đồng ý.',answer:'他的话毫无道理，连他的好朋友都不同意。',answerPy:'Tā de huà háowú dàolǐ, lián tā de hǎo péngyou dōu bù tóngyì.',note:'毫无 + 道理: không thêm 不/没.',pair:'连……都……'}
   ]},

  {n:13,zh:'疑问',py:'yíwèn',pos:'Danh từ',vn:'điều nghi ngờ, thắc mắc',hv:'nghi vấn',em:'❓',lesson:1,
   explain:['Điều còn nghi ngờ, còn thắc mắc, chưa hiểu cần hỏi lại.'],
   usage:'有 / 没有 / 提出 / 解答 + 疑问; 毫无疑问. Là DANH TỪ — khác 怀疑 (động từ: nghi ngờ ai / việc gì).',
   collo:['有疑问','提出疑问','毫无疑问'],
   ex_zh:'今天的课就到这儿，大家有什么疑问吗？',ex_py:'Jīntiān de kè jiù dào zhèr, dàjiā yǒu shénme yíwèn ma?',ex_vn:'Hôm nay học đến đây thôi, các em có thắc mắc gì không?',
   exList:[
     {zh:'今天的课就到这儿，大家有什么疑问吗？',py:'Jīntiān de kè jiù dào zhèr, dàjiā yǒu shénme yíwèn ma?',vn:'Hôm nay học đến đây thôi, các em có thắc mắc gì không?'},
     {zh:'史学家对这个问题提出了不少疑问。',py:'Shǐxuéjiā duì zhège wèntí tíchūle bù shǎo yíwèn.',vn:'Các nhà sử học đã đặt ra không ít nghi vấn về vấn đề này.'},
     {zh:'这对于那些买不起书的人来说，毫无疑问是件大好事。',py:'Zhè duìyú nàxiē mǎi bu qǐ shū de rén lái shuō, háowú yíwèn shì jiàn dà hǎoshì.',vn:'Với những người không đủ tiền mua sách, đây chắc chắn là một điều cực kỳ tốt.'}
   ],
   colloFull:[{zh:'有疑问',py:'yǒu yíwèn',vn:'có thắc mắc'},{zh:'提出疑问',py:'tíchū yíwèn',vn:'đặt ra nghi vấn'},{zh:'毫无疑问',py:'háowú yíwèn',vn:'không chút nghi ngờ'},{zh:'解答疑问',py:'jiědá yíwèn',vn:'giải đáp thắc mắc'}],
   patterns:[{s:'对 + N + 提出疑问',m:'Đặt ra nghi vấn về …'},{s:'有 / 没有 + 疑问',m:'Có / không có thắc mắc'}],
   checkList:[
     {promptLang:'vi',prompt:'Hễ có thắc mắc là cậu ấy đi hỏi thầy giáo ngay.',answer:'他一有疑问就去问老师。',answerPy:'Tā yì yǒu yíwèn jiù qù wèn lǎoshī.',note:'有疑问: 疑问 là danh từ, đi sau 有.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Chỉ cần có thắc mắc thì cứ đến hỏi tôi.',answer:'只要有疑问，就可以来问我。',answerPy:'Zhǐyào yǒu yíwèn, jiù kěyǐ lái wèn wǒ.',note:'Không nói ✗ 我疑问 — 疑问 không làm động từ.',pair:'只要……就……'}
   ]},

  {n:14,zh:'棚子',py:'péngzi',pos:'Danh từ',vn:'lều, lán, chòi',hv:'bằng tử',em:'⛺',lesson:1,
   explain:['Cái lều, lán, chòi dựng tạm bằng gỗ, tre, bạt… để che mưa nắng hoặc bày hàng.'],
   usage:'Lượng từ: 个 / 间: 一个小棚子. Động từ đi kèm: 搭棚子 (dựng lều). 棚子里 = trong lều.',
   collo:['一个小棚子','搭棚子','棚子里'],
   ex_zh:'就是一进街口靠墙的一个小棚子。',ex_py:'Jiù shì yí jìn jiēkǒu kào qiáng de yí ge xiǎo péngzi.',ex_vn:'Đó là một cái lều nhỏ dựa vào tường ngay đầu phố.',
   exList:[
     {zh:'就是一进街口靠墙的一个小棚子。',py:'Jiù shì yí jìn jiēkǒu kào qiáng de yí ge xiǎo péngzi.',vn:'Đó là một cái lều nhỏ dựa vào tường ngay đầu phố.'},
     {zh:'棚子里有一张床板摆着各种题材的小人书。',py:'Péngzi li yǒu yì zhāng chuángbǎn bǎizhe gè zhǒng tícái de xiǎorénshū.',vn:'Trong lều có một tấm ván giường bày đủ loại truyện tranh với đủ đề tài.'},
     {zh:'下雨了，我们赶紧跑到路边的棚子里躲雨。',py:'Xià yǔ le, wǒmen gǎnjǐn pǎodào lù biān de péngzi li duǒ yǔ.',vn:'Trời mưa, chúng tôi vội chạy vào cái lán bên đường trú mưa.'}
   ],
   colloFull:[{zh:'一个小棚子',py:'yí ge xiǎo péngzi',vn:'một cái lều nhỏ'},{zh:'搭棚子',py:'dā péngzi',vn:'dựng lều'},{zh:'棚子里',py:'péngzi li',vn:'trong lều'},{zh:'路边的棚子',py:'lù biān de péngzi',vn:'cái lán bên đường'}],
   patterns:[{s:'搭 + (一个) 棚子',m:'Dựng một cái lều'},{s:'棚子里 + 有 / 摆着 + N',m:'Trong lều có / bày …'}],
   checkList:[
     {promptLang:'vi',prompt:'Cái lều nhỏ này là ông nội dựng năm ngoái.',answer:'这个小棚子是爷爷去年搭的。',answerPy:'Zhège xiǎo péngzi shì yéye qùnián dā de.',note:'搭 + 棚子: dựng lều.',pair:'是……的'},
     {promptLang:'vi',prompt:'Mái lều bị gió to thổi bay mất.',answer:'棚子的顶被大风刮走了。',answerPy:'Péngzi de dǐng bèi dà fēng guāzǒu le.',note:'棚子的顶 = mái lều.',pair:'被'}
   ]},

  {n:15,zh:'砖头',py:'zhuāntóu',pos:'Danh từ',vn:'gạch, viên gạch',hv:'chuyên đầu',em:'🧱',lesson:1,
   explain:['Viên gạch (hoặc mảnh gạch vỡ) dùng để xây, kê. 头 là hậu tố; sách ghi zhuāntóu, khẩu ngữ hay đọc nhẹ zhuāntou.'],
   usage:'Lượng từ: 块: 一块砖头, 几块砖头. Hay đi với: 用砖头 + 支 / 垫 / 盖.',
   collo:['几块砖头','用砖头支着','一块砖头'],
   ex_zh:'里面用几块砖头支着粗糙的木头板子供人们坐着看书。',ex_py:'Lǐmiàn yòng jǐ kuài zhuāntóu zhīzhe cūcāo de mùtou bǎnzi gōng rénmen zuòzhe kàn shū.',ex_vn:'Bên trong kê mấy viên gạch đỡ những tấm ván gỗ thô ráp cho mọi người ngồi đọc sách.',
   exList:[
     {zh:'里面用几块砖头支着粗糙的木头板子供人们坐着看书。',py:'Lǐmiàn yòng jǐ kuài zhuāntóu zhīzhe cūcāo de mùtou bǎnzi gōng rénmen zuòzhe kàn shū.',vn:'Bên trong kê mấy viên gạch đỡ những tấm ván gỗ thô ráp cho mọi người ngồi đọc sách.'},
     {zh:'桌子腿不一样长，他在下面放了一块砖头。',py:'Zhuōzi tuǐ bù yíyàng cháng, tā zài xiàmiàn fàngle yí kuài zhuāntóu.',vn:'Chân bàn dài ngắn không đều, anh ấy kê một viên gạch ở dưới.'},
     {zh:'这座老房子是用红砖头盖的。',py:'Zhè zuò lǎo fángzi shì yòng hóng zhuāntóu gài de.',vn:'Ngôi nhà cũ này được xây bằng gạch đỏ.'}
   ],
   colloFull:[{zh:'几块砖头',py:'jǐ kuài zhuāntóu',vn:'mấy viên gạch'},{zh:'用砖头支着',py:'yòng zhuāntóu zhīzhe',vn:'kê bằng gạch'},{zh:'一块砖头',py:'yí kuài zhuāntóu',vn:'một viên gạch'},{zh:'搬砖头',py:'bān zhuāntóu',vn:'khuân gạch'}],
   patterns:[{s:'一块 / 几块 + 砖头',m:'Một / mấy viên gạch'},{s:'用砖头 + 支 / 垫 / 盖',m:'Dùng gạch để kê / chèn / xây'}],
   checkList:[
     {promptLang:'vi',prompt:'Ngôi nhà này là cụ cố xây bằng gạch đỏ.',answer:'这座房子是太爷爷用红砖头盖的。',answerPy:'Zhè zuò fángzi shì tàiyéye yòng hóng zhuāntóu gài de.',note:'用 + 砖头 + 盖: xây bằng gạch.',pair:'是……的'},
     {promptLang:'vi',prompt:'Anh ấy đặt một viên gạch dưới chân bàn.',answer:'他把一块砖头放在桌子腿下面。',answerPy:'Tā bǎ yí kuài zhuāntóu fàng zài zhuōzi tuǐ xiàmiàn.',note:'Lượng từ của 砖头 là 块.',pair:'把'}
   ]},

  {n:16,zh:'支',py:'zhī',pos:'Động từ / Lượng từ',vn:'chống, đỡ; (lượng từ) cây, bài, đội',hv:'chi',em:'✏️',lesson:1,
   explain:['Động từ: chống, đỡ — dùng vật gì đó đỡ cho vật khác khỏi rơi, đổ (支着脑袋, 用砖头支着木板).','Lượng từ: dùng cho tác phẩm âm nhạc (一支曲子), đội ngũ (一支军队), vật hình que dài (一支笔, 一支枪, 一支烟).'],
   usage:'支 + 着 + N; 用 A + 支(着) + B; 把 + N + 支起来. Lượng từ: 一支笔 / 一支歌 / 一支球队. Sách, vở dùng 本 / 册 — không dùng 支.',
   collo:['支着脑袋','一支笔','一支曲子','一支军队'],
   ex_zh:'里面用几块砖头支着粗糙的木头板子供人们坐着看书。',ex_py:'Lǐmiàn yòng jǐ kuài zhuāntóu zhīzhe cūcāo de mùtou bǎnzi gōng rénmen zuòzhe kàn shū.',ex_vn:'Bên trong kê mấy viên gạch đỡ những tấm ván gỗ thô ráp cho mọi người ngồi đọc sách.',
   exList:[
     {zh:'里面用几块砖头支着粗糙的木头板子供人们坐着看书。',py:'Lǐmiàn yòng jǐ kuài zhuāntóu zhīzhe cūcāo de mùtou bǎnzi gōng rénmen zuòzhe kàn shū.',vn:'Bên trong kê mấy viên gạch đỡ những tấm ván gỗ thô ráp cho mọi người ngồi đọc sách.'},
     {zh:'他的两只手放在桌上，支着脑袋，正在想事情。',py:'Tā de liǎng zhī shǒu fàng zài zhuō shang, zhīzhe nǎodai, zhèngzài xiǎng shìqing.',vn:'Anh ấy đặt hai tay lên bàn, chống đầu, đang nghĩ ngợi.'},
     {zh:'一般来说，一包香烟有二十支。',py:'Yìbān lái shuō, yì bāo xiāngyān yǒu èrshí zhī.',vn:'Thông thường, một bao thuốc lá có hai mươi điếu.'}
   ],
   colloFull:[{zh:'支着脑袋',py:'zhīzhe nǎodai',vn:'chống đầu'},{zh:'一支笔',py:'yì zhī bǐ',vn:'một cây bút'},{zh:'一支曲子',py:'yì zhī qǔzi',vn:'một bản nhạc'},{zh:'一支军队',py:'yì zhī jūnduì',vn:'một đội quân'},{zh:'用砖头支着',py:'yòng zhuāntóu zhīzhe',vn:'kê bằng gạch'}],
   patterns:[{s:'用 A + 支着 + B',m:'Dùng A chống / đỡ B'},{s:'一支 + 笔 / 曲子 / 军队',m:'Lượng từ: cây bút / bản nhạc / đội quân'}],
   checkList:[
     {promptLang:'vi',prompt:'Cái bàn này hỏng rồi, mau lấy mấy viên gạch chống nó lên.',answer:'这张桌子坏了，快拿几块砖头把它支起来。',answerPy:'Zhè zhāng zhuōzi huài le, kuài ná jǐ kuài zhuāntóu bǎ tā zhī qǐlái.',note:'支 (động từ) + 起来: chống lên.',pair:'把'},
     {promptLang:'vi',prompt:'Vừa nghe bản nhạc này là anh ấy nhớ đến quê nhà.',answer:'他一听到这支曲子就想起了家乡。',answerPy:'Tā yì tīngdào zhè zhī qǔzi jiù xiǎngqǐle jiāxiāng.',note:'支 (lượng từ) dùng cho bản nhạc, bài hát.',pair:'一……就……'}
   ]},

  {n:17,zh:'粗糙',py:'cūcāo',pos:'Tính từ',vn:'thô ráp, sần sùi; cẩu thả, sơ sài',hv:'thô tháo',em:'🪵',lesson:1,
   explain:['Nghĩa gốc: bề mặt không nhẵn, sờ vào thấy ráp (da, mặt đất, tấm ván…).','Nghĩa rộng: làm ẩu, không tinh xảo (công việc, hàng hoá, sự trang trí, chất lượng in…).'],
   usage:'Bảng 搭配 của sách: 粗糙的 + 皮肤 / 地面 / 木板. Làm vị ngữ: 做工 / 质量 / 装修 + (很 / 比较) 粗糙. Trái nghĩa: 光滑 (nhẵn), 精美 / 精致 (tinh xảo).',
   collo:['粗糙的皮肤','粗糙的地面','粗糙的木板','做工粗糙'],
   ex_zh:'里面用几块砖头支着粗糙的木头板子供人们坐着看书。',ex_py:'Lǐmiàn yòng jǐ kuài zhuāntóu zhīzhe cūcāo de mùtou bǎnzi gōng rénmen zuòzhe kàn shū.',ex_vn:'Bên trong kê mấy viên gạch đỡ những tấm ván gỗ thô ráp cho mọi người ngồi đọc sách.',
   exList:[
     {zh:'里面用几块砖头支着粗糙的木头板子供人们坐着看书。',py:'Lǐmiàn yòng jǐ kuài zhuāntóu zhīzhe cūcāo de mùtou bǎnzi gōng rénmen zuòzhe kàn shū.',vn:'Bên trong kê mấy viên gạch đỡ những tấm ván gỗ thô ráp cho mọi người ngồi đọc sách.'},
     {zh:'这房子装修得太粗糙了！你看，地板都没铺平。',py:'Zhè fángzi zhuāngxiū de tài cūcāo le! Nǐ kàn, dìbǎn dōu méi pūpíng.',vn:'Nhà này sửa sang ẩu quá! Cậu xem, sàn nhà còn chưa lát phẳng.'},
     {zh:'这本书的印刷质量比较粗糙。',py:'Zhè běn shū de yìnshuā zhìliàng bǐjiào cūcāo.',vn:'Chất lượng in của cuốn sách này khá sơ sài.'}
   ],
   colloFull:[{zh:'粗糙的皮肤',py:'cūcāo de pífū',vn:'làn da thô ráp'},{zh:'粗糙的地面',py:'cūcāo de dìmiàn',vn:'mặt đất gồ ghề'},{zh:'粗糙的木板',py:'cūcāo de mùbǎn',vn:'tấm ván gỗ thô ráp'},{zh:'做工粗糙',py:'zuògōng cūcāo',vn:'làm ẩu, gia công thô'},{zh:'装修得很粗糙',py:'zhuāngxiū de hěn cūcāo',vn:'sửa sang rất ẩu'}],
   patterns:[{s:'粗糙的 + 皮肤 / 地面 / 木板',m:'(Da / mặt đất / tấm ván) thô ráp'},{s:'N + 做得 / 装修得 + 很粗糙',m:'Làm / sửa sang rất ẩu'}],
   checkList:[
     {promptLang:'vi',prompt:'Chiếc điện thoại này tuy rẻ nhưng làm rất ẩu.',answer:'这部手机虽然便宜，但是做工很粗糙。',answerPy:'Zhè bù shǒujī suīrán piányi, dànshì zuògōng hěn cūcāo.',note:'做工粗糙 = gia công thô, làm ẩu (câu trong bài nghe 练习册).',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Tay bà nội bị công việc đồng áng làm cho thô ráp.',answer:'奶奶的手被农活儿弄得很粗糙。',answerPy:'Nǎinai de shǒu bèi nónghuór nòng de hěn cūcāo.',note:'粗糙 tả bề mặt da, tay: sờ vào thấy ráp.',pair:'被'}
   ]},

  {n:18,zh:'木头',py:'mùtou',pos:'Danh từ',vn:'gỗ, khúc gỗ',hv:'mộc đầu',em:'🪵',lesson:1,
   explain:['Gỗ — vật liệu lấy từ thân cây, dùng làm bàn ghế, nhà cửa. 头 là hậu tố đọc nhẹ (tou).'],
   usage:'Lượng từ: 块 / 根: 一块木头, 一根木头. Làm định ngữ trực tiếp: 木头板子, 木头房子, 木头桌子. Ví người khô khan, đần: 他像块木头.',
   collo:['木头板子','一块木头','木头房子'],
   ex_zh:'里面用几块砖头支着粗糙的木头板子供人们坐着看书。',ex_py:'Lǐmiàn yòng jǐ kuài zhuāntóu zhīzhe cūcāo de mùtou bǎnzi gōng rénmen zuòzhe kàn shū.',ex_vn:'Bên trong kê mấy viên gạch đỡ những tấm ván gỗ thô ráp cho mọi người ngồi đọc sách.',
   exList:[
     {zh:'里面用几块砖头支着粗糙的木头板子供人们坐着看书。',py:'Lǐmiàn yòng jǐ kuài zhuāntóu zhīzhe cūcāo de mùtou bǎnzi gōng rénmen zuòzhe kàn shū.',vn:'Bên trong kê mấy viên gạch đỡ những tấm ván gỗ thô ráp cho mọi người ngồi đọc sách.'},
     {zh:'这张桌子是爷爷用一块旧木头做的。',py:'Zhè zhāng zhuōzi shì yéye yòng yí kuài jiù mùtou zuò de.',vn:'Cái bàn này ông nội làm từ một khúc gỗ cũ.'},
     {zh:'山里的人以前大多住在木头房子里。',py:'Shān li de rén yǐqián dàduō zhù zài mùtou fángzi li.',vn:'Người miền núi ngày trước phần lớn sống trong nhà gỗ.'}
   ],
   colloFull:[{zh:'木头板子',py:'mùtou bǎnzi',vn:'tấm ván gỗ'},{zh:'一块木头',py:'yí kuài mùtou',vn:'một khúc gỗ'},{zh:'木头房子',py:'mùtou fángzi',vn:'nhà gỗ'},{zh:'木头桌子',py:'mùtou zhuōzi',vn:'bàn gỗ'}],
   patterns:[{s:'木头 + N (板子 / 房子 / 桌子)',m:'… bằng gỗ'},{s:'用木头 + 做 / 盖',m:'Làm / dựng bằng gỗ'}],
   checkList:[
     {promptLang:'vi',prompt:'Ngôi nhà gỗ này là do ông cố tự tay dựng.',answer:'这座木头房子是太爷爷亲手盖的。',answerPy:'Zhè zuò mùtou fángzi shì tàiyéye qīnshǒu gài de.',note:'木头 làm định ngữ trực tiếp, không cần 的.',pair:'是……的'},
     {promptLang:'vi',prompt:'Anh ấy đem mấy khúc gỗ chuyển vào trong lều.',answer:'他把几块木头搬进了棚子里。',answerPy:'Tā bǎ jǐ kuài mùtou bānjìnle péngzi li.',note:'Lượng từ của 木头 là 块 / 根.',pair:'把'}
   ]},

  {n:19,zh:'题材',py:'tícái',pos:'Danh từ',vn:'đề tài, chủ đề',hv:'đề tài',em:'🗂️',lesson:1,
   explain:['Nội dung, chất liệu mà một tác phẩm (văn học, phim, tranh…) chọn để thể hiện: đề tài lịch sử, đề tài chiến tranh, đề tài học đường…'],
   usage:'各种题材的 + 作品 / 小人书; 以……为题材; 历史 / 战争 / 爱情 / 校园 + 题材. Khác 话题 (chủ đề nói chuyện) và 题目 (đầu bài, đề thi).',
   collo:['各种题材','历史题材','以……为题材'],
   ex_zh:'棚子里有一张床板摆着各种题材的小人书。',ex_py:'Péngzi li yǒu yì zhāng chuángbǎn bǎizhe gè zhǒng tícái de xiǎorénshū.',ex_vn:'Trong lều có một tấm ván giường bày đủ loại truyện tranh với đủ đề tài.',
   exList:[
     {zh:'棚子里有一张床板摆着各种题材的小人书。',py:'Péngzi li yǒu yì zhāng chuángbǎn bǎizhe gè zhǒng tícái de xiǎorénshū.',vn:'Trong lều có một tấm ván giường bày đủ loại truyện tranh với đủ đề tài.'},
     {zh:'这部电影以一个普通家庭的生活为题材。',py:'Zhè bù diànyǐng yǐ yí ge pǔtōng jiātíng de shēnghuó wéi tícái.',vn:'Bộ phim này lấy cuộc sống của một gia đình bình thường làm đề tài.'},
     {zh:'我最爱看历史题材的连环画，比如《三国演义》。',py:'Wǒ zuì ài kàn lìshǐ tícái de liánhuánhuà, bǐrú 《Sānguó Yǎnyì》.',vn:'Tôi thích nhất truyện tranh đề tài lịch sử, ví dụ như Tam Quốc diễn nghĩa.'}
   ],
   colloFull:[{zh:'各种题材',py:'gè zhǒng tícái',vn:'đủ loại đề tài'},{zh:'历史题材',py:'lìshǐ tícái',vn:'đề tài lịch sử'},{zh:'以……为题材',py:'yǐ…… wéi tícái',vn:'lấy … làm đề tài'},{zh:'校园题材',py:'xiàoyuán tícái',vn:'đề tài học đường'}],
   patterns:[{s:'以 + N + 为题材',m:'Lấy … làm đề tài'},{s:'……题材的 + 作品 / 电影 / 小说',m:'Tác phẩm / phim / tiểu thuyết đề tài …'}],
   checkList:[
     {promptLang:'vi',prompt:'Bộ phim đề tài học đường này không chỉ học sinh thích mà thầy cô cũng thích.',answer:'这部校园题材的电影不仅学生喜欢，老师也喜欢。',answerPy:'Zhè bù xiàoyuán tícái de diànyǐng bùjǐn xuésheng xǐhuan, lǎoshī yě xǐhuan.',note:'……题材的 + 作品: tác phẩm đề tài ….',pair:'不仅……也……'},
     {promptLang:'vi',prompt:'Truyện tranh đề tài lịch sử ngày càng được thanh thiếu niên yêu thích.',answer:'历史题材的连环画越来越受青少年欢迎。',answerPy:'Lìshǐ tícái de liánhuánhuà yuè lái yuè shòu qīngshàonián huānyíng.',note:'历史题材 = đề tài lịch sử.',pair:'越来越……'}
   ]},

  {n:20,zh:'翻',py:'fān',pos:'Động từ',vn:'lật, giở; lật đổ',hv:'phiên',em:'📖',lesson:1,
   explain:['Lật, giở (trang sách): 翻书, 翻开.','Làm đổ, lật nhào — hay làm BỔ NGỮ kết quả sau động từ: 打翻, 碰翻 (làm đổ); 闹翻 (cãi nhau đến mức cạch mặt).'],
   usage:'翻开 + 书 / 本子; 翻到第……页. Bảng 搭配: 打 / 碰 / 闹 + 翻. Còn: 翻译 (dịch), 翻身 (trở mình).',
   collo:['翻开','打翻','碰翻','闹翻'],
   ex_zh:'墙边还拉了几根绳子，一本本书翻开搭在上面。',ex_py:'Qiáng biān hái lāle jǐ gēn shéngzi, yì běnběn shū fānkāi dā zài shàngmian.',ex_vn:'Bên tường còn giăng mấy sợi dây, từng cuốn sách được mở ra vắt lên trên.',
   exList:[
     {zh:'墙边还拉了几根绳子，一本本书翻开搭在上面。',py:'Qiáng biān hái lāle jǐ gēn shéngzi, yì běnběn shū fānkāi dā zài shàngmian.',vn:'Bên tường còn giăng mấy sợi dây, từng cuốn sách được mở ra vắt lên trên.'},
     {zh:'今天早上是谁打翻了桌子上的牛奶？',py:'Jīntiān zǎoshang shì shéi dǎfānle zhuōzi shang de niúnǎi?',vn:'Sáng nay ai làm đổ cốc sữa trên bàn thế?'},
     {zh:'请大家把书翻到第二十二页。',py:'Qǐng dàjiā bǎ shū fāndào dì-èrshí\'èr yè.',vn:'Mời cả lớp giở sách đến trang 22.'}
   ],
   colloFull:[{zh:'翻开',py:'fānkāi',vn:'mở ra, lật ra'},{zh:'打翻',py:'dǎfān',vn:'làm đổ'},{zh:'碰翻',py:'pèngfān',vn:'va làm đổ'},{zh:'闹翻',py:'nàofān',vn:'cãi nhau đến mức cạch mặt'},{zh:'翻到第……页',py:'fāndào dì…… yè',vn:'giở đến trang …'}],
   patterns:[{s:'把 + 书 + 翻到第……页',m:'Giở sách đến trang …'},{s:'打 / 碰 / 闹 + 翻',m:'Làm đổ / va đổ / cãi nhau cạch mặt'}],
   checkList:[
     {promptLang:'vi',prompt:'Con mèo va làm đổ cốc nước trên bàn.',answer:'猫把桌子上的水杯碰翻了。',answerPy:'Māo bǎ zhuōzi shang de shuǐbēi pèngfān le.',note:'翻 làm bổ ngữ kết quả: 碰翻 = va làm đổ.',pair:'把'},
     {promptLang:'vi',prompt:'Hai người bạn ấy vì một chuyện nhỏ mà cãi nhau cạch mặt.',answer:'那两个好朋友是因为一件小事闹翻的。',answerPy:'Nà liǎng ge hǎo péngyou shì yīnwèi yí jiàn xiǎoshì nàofān de.',note:'闹翻 = cãi nhau tới mức không nhìn mặt nhau.',pair:'是……的'}
   ]},

  {n:21,zh:'搭',py:'dā',pos:'Động từ',vn:'vắt, mắc; dựng (lều); đi nhờ (xe)',hv:'đáp',em:'🧺',lesson:1,
   explain:['Vắt, mắc (quần áo, khăn, sách…) lên dây, lên sào: 搭在绳子上.','Dựng tạm: 搭棚子, 搭帐篷. Khẩu ngữ: đi nhờ, đi ké: 搭车.'],
   usage:'搭 + 在 + nơi chốn (搭在上面, 搭在椅子上); 搭 + 棚子 / 帐篷 / 桥; 搭 + 车 / 船.',
   collo:['搭在上面','搭棚子','搭车'],
   ex_zh:'墙边还拉了几根绳子，一本本书翻开搭在上面。',ex_py:'Qiáng biān hái lāle jǐ gēn shéngzi, yì běnběn shū fānkāi dā zài shàngmian.',ex_vn:'Bên tường còn giăng mấy sợi dây, từng cuốn sách được mở ra vắt lên trên.',
   exList:[
     {zh:'墙边还拉了几根绳子，一本本书翻开搭在上面。',py:'Qiáng biān hái lāle jǐ gēn shéngzi, yì běnběn shū fānkāi dā zài shàngmian.',vn:'Bên tường còn giăng mấy sợi dây, từng cuốn sách được mở ra vắt lên trên.'},
     {zh:'他一进门就把外套搭在椅子上了。',py:'Tā yí jìn mén jiù bǎ wàitào dā zài yǐzi shang le.',vn:'Anh ấy vừa vào cửa đã vắt áo khoác lên ghế.'},
     {zh:'我们在河边搭了个帐篷，准备在那儿过夜。',py:'Wǒmen zài hé biān dāle ge zhàngpeng, zhǔnbèi zài nàr guòyè.',vn:'Chúng tôi dựng một cái lều bên bờ sông, định qua đêm ở đó.'}
   ],
   colloFull:[{zh:'搭在上面',py:'dā zài shàngmian',vn:'vắt lên trên'},{zh:'搭棚子',py:'dā péngzi',vn:'dựng lều, dựng lán'},{zh:'搭车',py:'dā chē',vn:'đi nhờ xe'},{zh:'搭在椅子上',py:'dā zài yǐzi shang',vn:'vắt lên ghế'}],
   patterns:[{s:'把 + N + 搭在 + nơi chốn',m:'Vắt … lên …'},{s:'搭 + 棚子 / 帐篷',m:'Dựng lều, lán'}],
   checkList:[
     {promptLang:'vi',prompt:'Mẹ vắt quần áo đã giặt lên sợi dây ngoài ban công.',answer:'妈妈把洗好的衣服搭在阳台的绳子上。',answerPy:'Māma bǎ xǐhǎo de yīfu dā zài yángtái de shéngzi shang.',note:'搭在 + nơi chốn: vắt lên ….',pair:'把'},
     {promptLang:'vi',prompt:'Hễ trời mưa là ông lão dựng một cái lán nhỏ trước sạp.',answer:'一下雨，老人就在摊前搭一个小棚子。',answerPy:'Yí xià yǔ, lǎorén jiù zài tān qián dā yí ge xiǎo péngzi.',note:'搭 + 棚子: dựng lán (dựng tạm).',pair:'一……就……'}
   ]},

  {n:22,zh:'整齐',py:'zhěngqí',pos:'Tính từ',vn:'ngay ngắn, đều đặn, ngăn nắp',hv:'chỉnh tề',em:'📏',lesson:1,
   explain:['Có trật tự, ngay hàng thẳng lối, ngăn nắp (đồ đạc, phòng, hàng ngũ).','Đều nhau, khớp nhau (chữ viết, tiếng hát, bước chân).'],
   usage:'Bảng 搭配: 整齐的 + 房间 / 军队 / 声音. 摆得 / 写得 + 很整齐; 整整齐齐 (láy, nhấn mạnh). Trái nghĩa: 乱, 乱七八糟.',
   collo:['整齐的房间','整齐的军队','整齐的声音','摆得很整齐'],
   ex_zh:'整齐漂亮的毛笔字能充分地显示出书摊主人的文化水平。',ex_py:'Zhěngqí piàoliang de máobǐzì néng chōngfèn de xiǎnshì chū shūtān zhǔrén de wénhuà shuǐpíng.',ex_vn:'Nét chữ bút lông ngay ngắn, đẹp đẽ đủ cho thấy trình độ văn hoá của chủ sạp.',
   exList:[
     {zh:'整齐漂亮的毛笔字能充分地显示出书摊主人的文化水平。',py:'Zhěngqí piàoliang de máobǐzì néng chōngfèn de xiǎnshì chū shūtān zhǔrén de wénhuà shuǐpíng.',vn:'Nét chữ bút lông ngay ngắn, đẹp đẽ đủ cho thấy trình độ văn hoá của chủ sạp.'},
     {zh:'窗外响起了一阵整齐的歌声。',py:'Chuāng wài xiǎngqǐle yí zhèn zhěngqí de gēshēng.',vn:'Ngoài cửa sổ vang lên một tràng tiếng hát đều tăm tắp.'},
     {zh:'她的房间总是收拾得整整齐齐的。',py:'Tā de fángjiān zǒngshì shōushi de zhěngzhěngqíqí de.',vn:'Phòng cô ấy lúc nào cũng dọn dẹp ngăn nắp.'}
   ],
   colloFull:[{zh:'整齐的房间',py:'zhěngqí de fángjiān',vn:'căn phòng ngăn nắp'},{zh:'整齐的军队',py:'zhěngqí de jūnduì',vn:'đội quân chỉnh tề'},{zh:'整齐的声音',py:'zhěngqí de shēngyīn',vn:'âm thanh đều nhau'},{zh:'摆得很整齐',py:'bǎi de hěn zhěngqí',vn:'bày rất ngay ngắn'},{zh:'整整齐齐',py:'zhěngzhěngqíqí',vn:'ngay ngắn tề chỉnh'}],
   patterns:[{s:'整齐的 + 房间 / 军队 / 声音',m:'(Phòng / đội quân / âm thanh) chỉnh tề, đều đặn'},{s:'V + 得 + (很) 整齐',m:'Làm … rất ngay ngắn'}],
   checkList:[
     {promptLang:'vi',prompt:'Truyện tranh trên sạp được chủ sạp bày rất ngay ngắn.',answer:'摊上的小人书被摊主摆得很整齐。',answerPy:'Tān shang de xiǎorénshū bèi tānzhǔ bǎi de hěn zhěngqí.',note:'V + 得 + 很整齐: bổ ngữ trạng thái.',pair:'被'},
     {promptLang:'vi',prompt:'Chữ cậu ấy viết ngày càng ngay ngắn.',answer:'他写的字越来越整齐了。',answerPy:'Tā xiě de zì yuè lái yuè zhěngqí le.',note:'整齐 tả chữ viết: đều, ngay hàng.',pair:'越来越……'}
   ]},

  {n:23,zh:'年纪',py:'niánjì',pos:'Danh từ',vn:'tuổi, tuổi tác',hv:'niên kỷ',em:'👴',lesson:1,
   explain:['Tuổi của người — thường nói về người lớn tuổi, lịch sự hơn 岁数.'],
   usage:'上了年纪 = có tuổi; 年纪大 / 年纪轻 / 年纪小; 您多大年纪了？ (hỏi người già). Không nói 我的年纪是十六 — nói 我十六岁.',
   collo:['上了年纪','年纪大','多大年纪'],
   ex_zh:'摊主是位上了年纪、身材瘦小的老人。',ex_py:'Tānzhǔ shì wèi shàngle niánjì, shēncái shòuxiǎo de lǎorén.',ex_vn:'Chủ sạp là một cụ già đã có tuổi, người gầy nhỏ.',
   exList:[
     {zh:'摊主是位上了年纪、身材瘦小的老人。',py:'Tānzhǔ shì wèi shàngle niánjì, shēncái shòuxiǎo de lǎorén.',vn:'Chủ sạp là một cụ già đã có tuổi, người gầy nhỏ.'},
     {zh:'爷爷，您今年多大年纪了？',py:'Yéye, nín jīnnián duō dà niánjì le?',vn:'Ông ơi, năm nay ông bao nhiêu tuổi rồi ạ?'},
     {zh:'她年纪不大，却已经是一家公司的经理了。',py:'Tā niánjì bú dà, què yǐjīng shì yì jiā gōngsī de jīnglǐ le.',vn:'Cô ấy tuổi còn trẻ mà đã là giám đốc một công ty rồi.'}
   ],
   colloFull:[{zh:'上了年纪',py:'shàngle niánjì',vn:'đã có tuổi'},{zh:'年纪大',py:'niánjì dà',vn:'lớn tuổi'},{zh:'多大年纪',py:'duō dà niánjì',vn:'bao nhiêu tuổi'},{zh:'年纪轻轻',py:'niánjì qīngqīng',vn:'tuổi còn trẻ'}],
   patterns:[{s:'上了年纪的 + 人',m:'Người đã có tuổi'},{s:'您多大年纪了？',m:'Cụ / ông / bà bao nhiêu tuổi rồi ạ? (hỏi người già)'}],
   checkList:[
     {promptLang:'vi',prompt:'Ông nội tuy đã có tuổi nhưng sức khoẻ vẫn rất tốt.',answer:'爷爷虽然上了年纪，但是身体还很好。',answerPy:'Yéye suīrán shàngle niánjì, dànshì shēntǐ hái hěn hǎo.',note:'上了年纪 = đã có tuổi (lịch sự).',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Người lớn tuổi thì ngay cả điện thoại thông minh cũng dùng không quen.',answer:'年纪大的人连智能手机都用不习惯。',answerPy:'Niánjì dà de rén lián zhìnéng shǒujī dōu yòng bu xíguàn.',note:'年纪大 = lớn tuổi.',pair:'连……都……'}
   ]},

  {n:24,zh:'身材',py:'shēncái',pos:'Danh từ',vn:'vóc dáng, dáng người',hv:'thân tài',em:'🧍',lesson:1,
   explain:['Hình dáng bên ngoài của cơ thể: cao thấp, béo gầy. Khác 身体 (thân thể, sức khoẻ).'],
   usage:'Bảng 搭配: 身材 + 好 / 高大 / 矮小 / 苗条; 身材瘦小; 保持身材 (giữ dáng). Không nói ✗ 身材健康 — sức khoẻ là 身体.',
   collo:['身材好','身材高大','身材矮小','身材苗条'],
   ex_zh:'摊主是位上了年纪、身材瘦小的老人。',ex_py:'Tānzhǔ shì wèi shàngle niánjì, shēncái shòuxiǎo de lǎorén.',ex_vn:'Chủ sạp là một cụ già đã có tuổi, người gầy nhỏ.',
   exList:[
     {zh:'摊主是位上了年纪、身材瘦小的老人。',py:'Tānzhǔ shì wèi shàngle niánjì, shēncái shòuxiǎo de lǎorén.',vn:'Chủ sạp là một cụ già đã có tuổi, người gầy nhỏ.'},
     {zh:'他身材高大，动作灵活，很适合打篮球。',py:'Tā shēncái gāodà, dòngzuò línghuó, hěn shìhé dǎ lánqiú.',vn:'Cậu ấy dáng người cao lớn, động tác linh hoạt, rất hợp chơi bóng rổ.'},
     {zh:'你身材保持得这么好，天天去健身房吧？',py:'Nǐ shēncái bǎochí de zhème hǎo, tiāntiān qù jiànshēnfáng ba?',vn:'Cậu giữ dáng tốt thế, ngày nào cũng đi tập gym à?'}
   ],
   colloFull:[{zh:'身材好',py:'shēncái hǎo',vn:'dáng đẹp'},{zh:'身材高大',py:'shēncái gāodà',vn:'dáng người cao lớn'},{zh:'身材矮小',py:'shēncái ǎixiǎo',vn:'dáng người thấp bé'},{zh:'身材苗条',py:'shēncái miáotiao',vn:'dáng người thon thả'},{zh:'保持身材',py:'bǎochí shēncái',vn:'giữ dáng'}],
   patterns:[{s:'身材 + 好 / 高大 / 矮小 / 苗条',m:'Dáng người đẹp / cao lớn / thấp bé / thon thả'},{s:'身材 + tính từ + 的 + người',m:'Người có dáng …'}],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần kiên trì chạy bộ là có thể giữ được dáng.',answer:'只要坚持跑步，就能保持好身材。',answerPy:'Zhǐyào jiānchí pǎobù, jiù néng bǎochí hǎo shēncái.',note:'保持身材 = giữ dáng (không dùng 身体).',pair:'只要……就……'},
     {promptLang:'vi',prompt:'Cậu ấy tuy dáng người thấp bé nhưng chạy nhanh nhất lớp.',answer:'他虽然身材矮小，但是跑得最快。',answerPy:'Tā suīrán shēncái ǎixiǎo, dànshì pǎo de zuì kuài.',note:'身材矮小 — bảng 搭配 của sách.',pair:'虽然……但是……'}
   ]},

  {n:25,zh:'成人',py:'chéngrén',pos:'Danh từ',vn:'người lớn, người trưởng thành',hv:'thành nhân',em:'🧑',lesson:1,
   explain:['Người đã trưởng thành (thường từ 18 tuổi). Văn viết hơn 大人. Còn làm động từ: 长大成人 (lớn khôn nên người).'],
   usage:'成人 + 教育 / 用品 / 票; 成人和儿童; 长大成人. Đối lập: 儿童, 未成年人.',
   collo:['成人教育','成人票','长大成人'],
   ex_zh:'在这里看书的人大部分是附近住户的孩子，也有一些喜欢小人书的成人。',ex_py:'Zài zhèlǐ kàn shū de rén dà bùfen shì fùjìn zhùhù de háizi, yě yǒu yìxiē xǐhuan xiǎorénshū de chéngrén.',ex_vn:'Người đọc sách ở đây phần lớn là trẻ con các hộ gần đó, cũng có một số người lớn thích truyện tranh.',
   exList:[
     {zh:'在这里看书的人大部分是附近住户的孩子，也有一些喜欢小人书的成人。',py:'Zài zhèlǐ kàn shū de rén dà bùfen shì fùjìn zhùhù de háizi, yě yǒu yìxiē xǐhuan xiǎorénshū de chéngrén.',vn:'Người đọc sách ở đây phần lớn là trẻ con các hộ gần đó, cũng có một số người lớn thích truyện tranh.'},
     {zh:'公园门票成人五十元，儿童半价。',py:'Gōngyuán ménpiào chéngrén wǔshí yuán, értóng bànjià.',vn:'Vé vào công viên người lớn năm mươi tệ, trẻ em nửa giá.'},
     {zh:'父母辛辛苦苦把我们养大成人。',py:'Fùmǔ xīnxīnkǔkǔ bǎ wǒmen yǎng dà chéngrén.',vn:'Bố mẹ vất vả nuôi chúng ta khôn lớn nên người.'}
   ],
   colloFull:[{zh:'成人教育',py:'chéngrén jiàoyù',vn:'giáo dục người lớn'},{zh:'成人票',py:'chéngrén piào',vn:'vé người lớn'},{zh:'长大成人',py:'zhǎngdà chéngrén',vn:'lớn khôn nên người'},{zh:'成人和儿童',py:'chéngrén hé értóng',vn:'người lớn và trẻ em'}],
   patterns:[{s:'成人 + 票 / 教育',m:'Vé / giáo dục dành cho người lớn'},{s:'长大成人',m:'Lớn lên thành người trưởng thành'}],
   checkList:[
     {promptLang:'vi',prompt:'Cuốn truyện tranh này không chỉ trẻ em thích đọc mà người lớn cũng thích.',answer:'这本连环画不仅儿童爱看，成人也爱看。',answerPy:'Zhè běn liánhuánhuà bùjǐn értóng ài kàn, chéngrén yě ài kàn.',note:'成人 đối lập với 儿童.',pair:'不仅……也……'},
     {promptLang:'vi',prompt:'Tôi là do bà nội nuôi nấng khôn lớn.',answer:'我是奶奶养大成人的。',answerPy:'Wǒ shì nǎinai yǎng dà chéngrén de.',note:'长大成人 / 养大成人.',pair:'是……的'}
   ]},

  {n:26,zh:'册',py:'cè',pos:'Lượng từ',vn:'cuốn, quyển, tập',hv:'sách',em:'📘',lesson:1,
   explain:['Lượng từ cho sách, vở (= 本, văn viết hơn). Còn dùng chỉ tập, quyển trong bộ: 上册, 下册 (tập 1, tập 2).'],
   usage:'Bảng 搭配: 一册 + 书. 每册……钱; 上册 / 下册; 手册 (sổ tay). Không dùng cho vật hình que (bút là 支).',
   collo:['一册书','每册','上册','下册'],
   ex_zh:'在摊里看，每册1分钱。',ex_py:'Zài tān li kàn, měi cè yì fēn qián.',ex_vn:'Đọc tại sạp thì mỗi cuốn một xu.',
   exList:[
     {zh:'在摊里看，每册1分钱。',py:'Zài tān li kàn, měi cè yì fēn qián.',vn:'Đọc tại sạp thì mỗi cuốn một xu.'},
     {zh:'我们现在学的是《HSK标准教程5》的下册。',py:'Wǒmen xiànzài xué de shì 《HSK Biāozhǔn Jiàochéng 5》 de xiàcè.',vn:'Bây giờ chúng ta học tập 2 (下册) của Giáo trình chuẩn HSK 5.'},
     {zh:'这套小人书一共有六十册。',py:'Zhè tào xiǎorénshū yígòng yǒu liùshí cè.',vn:'Bộ truyện tranh này có tổng cộng sáu mươi cuốn.'}
   ],
   colloFull:[{zh:'一册书',py:'yí cè shū',vn:'một cuốn sách'},{zh:'每册',py:'měi cè',vn:'mỗi cuốn'},{zh:'上册',py:'shàngcè',vn:'tập 1 (quyển thượng)'},{zh:'下册',py:'xiàcè',vn:'tập 2 (quyển hạ)'}],
   patterns:[{s:'số + 册 + 书',m:'… cuốn sách'},{s:'上册 / 下册',m:'Quyển thượng / quyển hạ (tập 1 / tập 2)'}],
   checkList:[
     {promptLang:'vi',prompt:'Tôi đã đọc xong tập 1, tập 2 còn chưa mượn được.',answer:'我把上册看完了，下册还没借到。',answerPy:'Wǒ bǎ shàngcè kànwán le, xiàcè hái méi jièdào.',note:'上册 / 下册 = tập 1 / tập 2 của một bộ sách.',pair:'把'},
     {promptLang:'vi',prompt:'Hồi ấy chỉ cần một xu là có thể đọc được một cuốn truyện tranh.',answer:'那时候只要一分钱，就能看一册小人书。',answerPy:'Nà shíhou zhǐyào yì fēn qián, jiù néng kàn yí cè xiǎorénshū.',note:'一册 + 书 (sách) — văn viết của 一本.',pair:'只要……就……'}
   ]},

  {n:27,zh:'假如',py:'jiǎrú',pos:'Liên từ',vn:'nếu, giả sử',hv:'giả như',em:'🤔',lesson:1,
   explain:['Nếu, giả như — nêu một giả thiết (= 如果, văn viết hơn). Vế sau thường có 就 / 那么 / 则.'],
   usage:'假如……，(那么 / 就 / 则)……. Đứng đầu vế trước, trước hoặc sau chủ ngữ. Cũng nói 假如说.',
   collo:['假如……就……','假如……那么……','假如……则……'],
   ex_zh:'假如借走回家看，则每本每天2分钱。',ex_py:'Jiǎrú jièzǒu huí jiā kàn, zé měi běn měi tiān liǎng fēn qián.',ex_vn:'Nếu mượn mang về nhà đọc thì mỗi cuốn mỗi ngày hai xu.',
   exList:[
     {zh:'假如借走回家看，则每本每天2分钱。',py:'Jiǎrú jièzǒu huí jiā kàn, zé měi běn měi tiān liǎng fēn qián.',vn:'Nếu mượn mang về nhà đọc thì mỗi cuốn mỗi ngày hai xu.'},
     {zh:'假如你每天都能做好一件事，那么你每天都能得到一份快乐。',py:'Jiǎrú nǐ měi tiān dōu néng zuòhǎo yí jiàn shì, nàme nǐ měi tiān dōu néng dédào yí fèn kuàilè.',vn:'Nếu mỗi ngày bạn đều làm tốt được một việc, thì mỗi ngày bạn đều có được một niềm vui.'},
     {zh:'假如明天下雨，运动会就改到下周。',py:'Jiǎrú míngtiān xià yǔ, yùndònghuì jiù gǎidào xià zhōu.',vn:'Nếu mai trời mưa thì hội thao dời sang tuần sau.'}
   ],
   colloFull:[{zh:'假如……就……',py:'jiǎrú…… jiù……',vn:'nếu … thì …'},{zh:'假如……那么……',py:'jiǎrú…… nàme……',vn:'nếu … vậy thì …'},{zh:'假如……则……',py:'jiǎrú…… zé……',vn:'nếu … thì … (văn viết)'},{zh:'假如说',py:'jiǎrú shuō',vn:'giả sử nói'}],
   patterns:[{s:'假如 + giả thiết，(那么) + kết quả',m:'Nếu … thì …'},{s:'假如 A，则 B',m:'Nếu A thì B (văn viết, như bài khoá)'}],
   checkList:[
     {promptLang:'vi',prompt:'Nếu cậu gặp khó khăn thì cứ đến tìm tớ.',answer:'假如你遇到困难，就来找我。',answerPy:'Jiǎrú nǐ yùdào kùnnan, jiù lái zhǎo wǒ.',note:'假如 = 如果 (văn viết hơn), vế sau dùng 就.',pair:'如果……就……'},
     {promptLang:'vi',prompt:'Nếu hồi nhỏ có Internet, ông nội có lẽ đã chẳng bao giờ đọc truyện tranh.',answer:'假如小时候有网络，爷爷可能从来没看过小人书。',answerPy:'Jiǎrú xiǎo shíhou yǒu wǎngluò, yéye kěnéng cónglái méi kànguo xiǎorénshū.',note:'假如 nêu giả thiết trái với thực tế.',pair:'从来没……过'}
   ]},

  {n:28,zh:'登记',py:'dēngjì',pos:'Động từ',vn:'đăng ký, ghi vào sổ',hv:'đăng ký',em:'📝',lesson:1,
   explain:['Ghi tên, địa chỉ, thông tin… vào sổ sách, biểu mẫu để lưu lại hoặc làm thủ tục.'],
   usage:'把 + thông tin + 登记在 + 本子 / 表上; 登记 + 姓名 / 地址; bảng 搭配: 登记 + 清楚 / 好. 结婚登记, 登记处.',
   collo:['登记清楚','登记好','登记在本子上'],
   ex_zh:'摊主仔细地将租书人的姓名、地址和所借小人书的书名登记在本子上。',ex_py:'Tānzhǔ zǐxì de jiāng zūshūrén de xìngmíng, dìzhǐ hé suǒ jiè xiǎorénshū de shūmíng dēngjì zài běnzi shang.',ex_vn:'Chủ sạp cẩn thận ghi tên, địa chỉ của người thuê và tên cuốn truyện được mượn vào sổ.',
   exList:[
     {zh:'摊主仔细地将租书人的姓名、地址和所借小人书的书名登记在本子上。',py:'Tānzhǔ zǐxì de jiāng zūshūrén de xìngmíng, dìzhǐ hé suǒ jiè xiǎorénshū de shūmíng dēngjì zài běnzi shang.',vn:'Chủ sạp cẩn thận ghi tên, địa chỉ của người thuê và tên cuốn truyện được mượn vào sổ.'},
     {zh:'住酒店的时候，要先在前台登记。',py:'Zhù jiǔdiàn de shíhou, yào xiān zài qiántái dēngjì.',vn:'Khi ở khách sạn, phải đăng ký ở quầy lễ tân trước.'},
     {zh:'手续倒是挺简单，登记时才知道要交押金。',py:'Shǒuxù dàoshì tǐng jiǎndān, dēngjì shí cái zhīdào yào jiāo yājīn.',vn:'Thủ tục thì khá đơn giản, lúc đăng ký mới biết phải nộp tiền cọc.'}
   ],
   colloFull:[{zh:'登记清楚',py:'dēngjì qīngchu',vn:'ghi rõ ràng'},{zh:'登记好',py:'dēngjì hǎo',vn:'đăng ký xong'},{zh:'登记在本子上',py:'dēngjì zài běnzi shang',vn:'ghi vào sổ'},{zh:'在前台登记',py:'zài qiántái dēngjì',vn:'đăng ký ở quầy lễ tân'}],
   patterns:[{s:'把 / 将 + N + 登记在 + 本子上',m:'Ghi … vào sổ'},{s:'登记 + 清楚 / 好',m:'Ghi rõ / đăng ký xong (bảng 搭配)'}],
   checkList:[
     {promptLang:'vi',prompt:'Hãy ghi rõ tên và số điện thoại của em vào đây.',answer:'请把你的姓名和电话号码登记清楚。',answerPy:'Qǐng bǎ nǐ de xìngmíng hé diànhuà hàomǎ dēngjì qīngchu.',note:'登记清楚 — 清楚 làm bổ ngữ (bảng 搭配).',pair:'把'},
     {promptLang:'vi',prompt:'Vừa đến khách sạn là họ đến quầy lễ tân đăng ký.',answer:'他们一到酒店就去前台登记。',answerPy:'Tāmen yí dào jiǔdiàn jiù qù qiántái dēngjì.',note:'在前台登记 = đăng ký ở quầy lễ tân.',pair:'一……就……'}
   ]},

  {n:29,zh:'记录',py:'jìlù',pos:'Danh từ / Động từ',vn:'ghi chép; biên bản, bản ghi; người ghi biên bản',hv:'ký lục',em:'🗒️',lesson:1,
   explain:['Động từ: ghi lại lời nghe được hoặc việc xảy ra (记录下来).','Danh từ: tài liệu ghi lại (biên bản, bản ghi) hoặc người làm công việc ghi chép (做记录).','Khác 纪录 (kỷ lục: thành tích tốt nhất; 纪录片: phim tài liệu) — xem phần Phân biệt từ.'],
   usage:'记录 + 下来; 详细地记录; 会议记录; 做记录; 把记录画掉. Cùng âm jìlù với 纪录 — viết sai là lỗi rất hay gặp.',
   collo:['会议记录','记录下来','做记录'],
   ex_zh:'第二天还书时再把记录一个一个地画掉。',ex_py:'Dì-èr tiān huán shū shí zài bǎ jìlù yí ge yí ge de huàdiào.',ex_vn:'Hôm sau lúc trả sách thì gạch từng dòng ghi chép đi.',
   exList:[
     {zh:'第二天还书时再把记录一个一个地画掉。',py:'Dì-èr tiān huán shū shí zài bǎ jìlù yí ge yí ge de huàdiào.',vn:'Hôm sau lúc trả sách thì gạch từng dòng ghi chép đi.'},
     {zh:'我已经把这次会议的内容详细地记录下来了。',py:'Wǒ yǐjīng bǎ zhè cì huìyì de nèiróng xiángxì de jìlù xiàlai le.',vn:'Tôi đã ghi chép lại chi tiết nội dung cuộc họp lần này.'},
     {zh:'小刘，你来做这次会议的记录。',py:'Xiǎo Liú, nǐ lái zuò zhè cì huìyì de jìlù.',vn:'Tiểu Lưu, cậu làm biên bản cuộc họp lần này nhé.'}
   ],
   colloFull:[{zh:'会议记录',py:'huìyì jìlù',vn:'biên bản cuộc họp'},{zh:'记录下来',py:'jìlù xiàlai',vn:'ghi lại'},{zh:'做记录',py:'zuò jìlù',vn:'làm biên bản, ghi chép'},{zh:'详细地记录',py:'xiángxì de jìlù',vn:'ghi chép chi tiết'}],
   patterns:[{s:'把 + N + 记录下来',m:'Ghi … lại'},{s:'做 + (会议的) 记录',m:'Làm biên bản (cuộc họp)'}],
   checkList:[
     {promptLang:'vi',prompt:'Hễ có ý tưởng hay là anh ấy ghi lại ngay.',answer:'他一有好想法就马上记录下来。',answerPy:'Tā yì yǒu hǎo xiǎngfǎ jiù mǎshàng jìlù xiàlai.',note:'记录 (động từ) + 下来.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Biên bản cuộc họp lần này là Tiểu Trương làm.',answer:'这次会议的记录是小张做的。',answerPy:'Zhè cì huìyì de jìlù shì Xiǎo Zhāng zuò de.',note:'记录 (danh từ) = biên bản; không viết 纪录.',pair:'是……的'}
   ]},

  {n:30,zh:'手续',py:'shǒuxù',pos:'Danh từ',vn:'thủ tục',hv:'thủ tục',em:'📋',lesson:1,
   explain:['Các bước, giấy tờ phải làm theo quy định khi giải quyết một việc (mượn sách, nhập học, xuất cảnh…).'],
   usage:'办 / 办理 + 手续; 手续 + 简单 / 麻烦 / 齐全; 还书手续, 离校手续, 入学手续. Lượng từ: 项 / 道.',
   collo:['办理手续','还书手续','手续简单'],
   ex_zh:'第二天还书时再把记录一个一个地画掉，还书手续就算是办理好了。',ex_py:'Dì-èr tiān huán shū shí zài bǎ jìlù yí ge yí ge de huàdiào, huán shū shǒuxù jiù suàn shì bànlǐ hǎo le.',ex_vn:'Hôm sau lúc trả sách gạch từng dòng ghi chép đi là thủ tục trả sách coi như xong.',
   exList:[
     {zh:'第二天还书时再把记录一个一个地画掉，还书手续就算是办理好了。',py:'Dì-èr tiān huán shū shí zài bǎ jìlù yí ge yí ge de huàdiào, huán shū shǒuxù jiù suàn shì bànlǐ hǎo le.',vn:'Hôm sau lúc trả sách gạch từng dòng ghi chép đi là thủ tục trả sách coi như xong.'},
     {zh:'马上就要毕业了，没有学生证到时候怎么办手续呀？',py:'Mǎshàng jiù yào bìyè le, méiyǒu xuéshengzhèng dào shíhou zěnme bàn shǒuxù ya?',vn:'Sắp tốt nghiệp rồi, không có thẻ sinh viên thì đến lúc đó làm thủ tục kiểu gì?'},
     {zh:'现在在网上办签证，手续比以前简单多了。',py:'Xiànzài zài wǎng shang bàn qiānzhèng, shǒuxù bǐ yǐqián jiǎndān duō le.',vn:'Bây giờ làm visa trên mạng, thủ tục đơn giản hơn trước nhiều.'}
   ],
   colloFull:[{zh:'办理手续',py:'bànlǐ shǒuxù',vn:'làm thủ tục'},{zh:'还书手续',py:'huán shū shǒuxù',vn:'thủ tục trả sách'},{zh:'手续简单',py:'shǒuxù jiǎndān',vn:'thủ tục đơn giản'},{zh:'离校手续',py:'lí xiào shǒuxù',vn:'thủ tục rời trường'}],
   patterns:[{s:'办 / 办理 + ……手续',m:'Làm thủ tục …'},{s:'手续 + 简单 / 麻烦',m:'Thủ tục đơn giản / phiền phức'}],
   checkList:[
     {promptLang:'vi',prompt:'Thủ tục nhập học tuy hơi phiền phức nhưng một buổi sáng là làm xong.',answer:'入学手续虽然有点儿麻烦，但是一个上午就办好了。',answerPy:'Rùxué shǒuxù suīrán yǒudiǎnr máfan, dànshì yí ge shàngwǔ jiù bànhǎo le.',note:'办好手续 = làm xong thủ tục.',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Thủ tục làm thẻ thư viện ngày càng đơn giản.',answer:'办借书证的手续越来越简单了。',answerPy:'Bàn jièshūzhèng de shǒuxù yuè lái yuè jiǎndān le.',note:'手续 + 简单.',pair:'越来越……'}
   ]},

  {n:31,zh:'办理',py:'bànlǐ',pos:'Động từ',vn:'làm, giải quyết (thủ tục, nghiệp vụ)',hv:'biện lý',em:'🏦',lesson:1,
   explain:['Xử lý, làm (công việc có quy trình: thủ tục, nghiệp vụ ngân hàng, thẻ…). Văn viết, trang trọng hơn 办.'],
   usage:'Bảng 搭配: 办理 + 手续 / 业务 / 信用卡. 办理好 / 办理完. Tân ngữ là việc có thủ tục — không nói ✗ 办理作业, ✗ 办理生日.',
   collo:['办理手续','办理业务','办理信用卡'],
   ex_zh:'请96号顾客到2号窗口办理业务。',ex_py:'Qǐng jiǔshíliù hào gùkè dào èr hào chuāngkǒu bànlǐ yèwù.',ex_vn:'Mời khách hàng số 96 đến quầy số 2 làm giao dịch.',
   exList:[
     {zh:'请96号顾客到2号窗口办理业务。',py:'Qǐng jiǔshíliù hào gùkè dào èr hào chuāngkǒu bànlǐ yèwù.',vn:'Mời khách hàng số 96 đến quầy số 2 làm giao dịch.'},
     {zh:'按规定，办理离校手续时，如果交不出学生证，押金就不退还了。',py:'Àn guīdìng, bànlǐ lí xiào shǒuxù shí, rúguǒ jiāo bu chū xuéshengzhèng, yājīn jiù bú tuìhuán le.',vn:'Theo quy định, khi làm thủ tục rời trường, nếu không nộp được thẻ sinh viên thì tiền cọc sẽ không được hoàn lại.'},
     {zh:'我想在这家银行办理一张信用卡。',py:'Wǒ xiǎng zài zhè jiā yínháng bànlǐ yì zhāng xìnyòngkǎ.',vn:'Tôi muốn làm một thẻ tín dụng ở ngân hàng này.'}
   ],
   colloFull:[{zh:'办理手续',py:'bànlǐ shǒuxù',vn:'làm thủ tục'},{zh:'办理业务',py:'bànlǐ yèwù',vn:'làm nghiệp vụ, giao dịch'},{zh:'办理信用卡',py:'bànlǐ xìnyòngkǎ',vn:'làm thẻ tín dụng'},{zh:'办理好',py:'bànlǐ hǎo',vn:'làm xong'}],
   patterns:[{s:'办理 + 手续 / 业务 / 信用卡',m:'Làm thủ tục / nghiệp vụ / thẻ tín dụng'},{s:'到 + nơi chốn + 办理 + N',m:'Đến … để làm …'}],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần mang theo chứng minh thư là có thể làm thẻ ngân hàng.',answer:'只要带着身份证，就可以办理银行卡。',answerPy:'Zhǐyào dàizhe shēnfènzhèng, jiù kěyǐ bànlǐ yínhángkǎ.',note:'办理 + thẻ: làm thẻ (trang trọng).',pair:'只要……就……'},
     {promptLang:'vi',prompt:'Thủ tục xuất viện là do anh trai làm cho tôi.',answer:'出院手续是哥哥帮我办理的。',answerPy:'Chūyuàn shǒuxù shì gēge bāng wǒ bànlǐ de.',note:'办理 + 手续.',pair:'是……的'}
   ]},

  {n:32,zh:'押金',py:'yājīn',pos:'Danh từ',vn:'tiền đặt cọc, tiền thế chấp',hv:'áp kim',em:'💵',lesson:1,
   explain:['Khoản tiền nộp trước làm bảo đảm khi thuê, mượn đồ; trả đồ nguyên vẹn thì được nhận lại.'],
   usage:'交 / 付 + 押金; 退 (还) + 押金; bảng 搭配: 一笔 + 押金. Lượng từ 笔 dùng cho khoản tiền.',
   collo:['交押金','退押金','一笔押金'],
   ex_zh:'印象中似乎没有什么押金，全凭信用。',ex_py:'Yìnxiàng zhōng sìhū méiyǒu shénme yājīn, quán píng xìnyòng.',ex_vn:'Trong ấn tượng của tôi hình như chẳng có tiền đặt cọc gì cả, hoàn toàn dựa vào chữ tín.',
   exList:[
     {zh:'印象中似乎没有什么押金，全凭信用。',py:'Yìnxiàng zhōng sìhū méiyǒu shénme yājīn, quán píng xìnyòng.',vn:'Trong ấn tượng của tôi hình như chẳng có tiền đặt cọc gì cả, hoàn toàn dựa vào chữ tín.'},
     {zh:'登记时才知道要交押金，我没带那么多钱。',py:'Dēngjì shí cái zhīdào yào jiāo yājīn, wǒ méi dài nàme duō qián.',vn:'Lúc đăng ký mới biết phải nộp tiền cọc, tôi không mang nhiều tiền thế.'},
     {zh:'租这套房子要先付一笔押金。',py:'Zū zhè tào fángzi yào xiān fù yì bǐ yājīn.',vn:'Thuê căn hộ này phải trả trước một khoản tiền cọc.'}
   ],
   colloFull:[{zh:'交押金',py:'jiāo yājīn',vn:'nộp tiền cọc'},{zh:'退押金',py:'tuì yājīn',vn:'trả lại tiền cọc'},{zh:'一笔押金',py:'yì bǐ yājīn',vn:'một khoản tiền cọc'},{zh:'付押金',py:'fù yājīn',vn:'trả tiền cọc'}],
   patterns:[{s:'交 / 付 + 押金',m:'Nộp / trả tiền cọc'},{s:'把押金 + 退给 + người',m:'Trả lại tiền cọc cho …'}],
   checkList:[
     {promptLang:'vi',prompt:'Trả xe xong, chủ cửa hàng đã trả lại tiền cọc cho tôi.',answer:'还车以后，老板把押金退给我了。',answerPy:'Huán chē yǐhòu, lǎobǎn bǎ yājīn tuì gěi wǒ le.',note:'退押金 = trả lại tiền cọc.',pair:'把'},
     {promptLang:'vi',prompt:'Thuê xe đạp ở đây ngay cả tiền cọc cũng không cần nộp.',answer:'在这儿租自行车连押金都不用交。',answerPy:'Zài zhèr zū zìxíngchē lián yājīn dōu búyòng jiāo.',note:'交押金 = nộp tiền cọc.',pair:'连……都……'}
   ]},

  {n:33,zh:'凭',py:'píng',pos:'Động từ / Giới từ',vn:'dựa vào; căn cứ vào, bằng',hv:'bằng',em:'🎫',lesson:1,
   explain:['Động từ: dựa vào, nhờ vào (依靠): 全凭信用, 光凭经验.','Giới từ: căn cứ vào, bằng — cấu trúc 凭 + tân ngữ + động từ: 凭票进站 (vào ga bằng vé). 凭什么 = dựa vào đâu mà… (chất vấn).'],
   usage:'(全 / 光 / 就) 凭 + N; 凭 + N + V; 凭什么 + V? — xem điểm ngữ pháp 3.',
   collo:['全凭信用','凭票进站','凭什么','凭经验'],
   ex_zh:'印象中似乎没有什么押金，全凭信用。',ex_py:'Yìnxiàng zhōng sìhū méiyǒu shénme yājīn, quán píng xìnyòng.',ex_vn:'Trong ấn tượng của tôi hình như chẳng có tiền đặt cọc gì cả, hoàn toàn dựa vào chữ tín.',
   exList:[
     {zh:'印象中似乎没有什么押金，全凭信用。',py:'Yìnxiàng zhōng sìhū méiyǒu shénme yājīn, quán píng xìnyòng.',vn:'Trong ấn tượng của tôi hình như chẳng có tiền đặt cọc gì cả, hoàn toàn dựa vào chữ tín.'},
     {zh:'请旅客们准备好车票，凭票进站。',py:'Qǐng lǚkèmen zhǔnbèi hǎo chēpiào, píng piào jìn zhàn.',vn:'Mời hành khách chuẩn bị sẵn vé, vào ga bằng vé.'},
     {zh:'你凭什么怀疑我偷了东西？',py:'Nǐ píng shénme huáiyí wǒ tōule dōngxi?',vn:'Anh dựa vào đâu mà nghi tôi ăn trộm đồ?'}
   ],
   colloFull:[{zh:'全凭信用',py:'quán píng xìnyòng',vn:'hoàn toàn dựa vào chữ tín'},{zh:'凭票进站',py:'píng piào jìn zhàn',vn:'vào ga bằng vé'},{zh:'凭什么',py:'píng shénme',vn:'dựa vào đâu mà…'},{zh:'凭经验',py:'píng jīngyàn',vn:'dựa vào kinh nghiệm'}],
   patterns:[{s:'(全 / 光) 凭 + N',m:'Hoàn toàn / chỉ dựa vào …'},{s:'凭 + N + V',m:'Căn cứ vào … mà làm …'}],
   checkList:[
     {promptLang:'vi',prompt:'Làm việc không chỉ phải dựa vào kinh nghiệm mà còn phải có đổi mới.',answer:'干工作不仅要凭经验，还要有创新。',answerPy:'Gàn gōngzuò bùjǐn yào píng jīngyàn, hái yào yǒu chuàngxīn.',note:'凭 + N = dựa vào … (sách: 干工作不能光凭经验，还要有创新).',pair:'不仅……还……'},
     {promptLang:'vi',prompt:'Tuy chưa từng đến đó, nhưng dựa vào bản đồ tôi đã tìm được căn nhà ấy.',answer:'虽然我从来没去过那儿，但是凭着地图找到了那个房子。',answerPy:'Suīrán wǒ cónglái méi qùguo nàr, dànshì píngzhe dìtú zhǎodàole nàge fángzi.',note:'凭(着) + N + V: căn cứ vào … mà làm ….',pair:'从来没……过'}
   ]},

  {n:34,zh:'印刷',py:'yìnshuā',pos:'Động từ',vn:'in (sách, báo…)',hv:'ấn loát',em:'🖨️',lesson:1,
   explain:['In chữ, hình lên giấy bằng máy để làm thành sách báo. Làm định ngữ: 印刷质量, 印刷精美.'],
   usage:'印刷 + 书 / 报纸; 印刷精美 / 印刷质量; 印刷厂 (nhà in). Khác 打印 (in bằng máy in văn phòng: 打印作业).',
   collo:['印刷精美','印刷质量','印刷厂'],
   ex_zh:'一些印刷精美、有特色的作品则身价大涨，成了收藏品。',ex_py:'Yìxiē yìnshuā jīngměi, yǒu tèsè de zuòpǐn zé shēnjià dà zhǎng, chéngle shōucángpǐn.',ex_vn:'Một số tác phẩm in đẹp, có nét đặc sắc thì giá trị tăng vọt, trở thành đồ sưu tầm.',
   exList:[
     {zh:'一些印刷精美、有特色的作品则身价大涨，成了收藏品。',py:'Yìxiē yìnshuā jīngměi, yǒu tèsè de zuòpǐn zé shēnjià dà zhǎng, chéngle shōucángpǐn.',vn:'Một số tác phẩm in đẹp, có nét đặc sắc thì giá trị tăng vọt, trở thành đồ sưu tầm.'},
     {zh:'这本书的印刷质量比较粗糙。',py:'Zhè běn shū de yìnshuā zhìliàng bǐjiào cūcāo.',vn:'Chất lượng in của cuốn sách này khá sơ sài.'},
     {zh:'这套小人书是一九六三年印刷的。',py:'Zhè tào xiǎorénshū shì yī jiǔ liù sān nián yìnshuā de.',vn:'Bộ truyện tranh này được in năm 1963.'}
   ],
   colloFull:[{zh:'印刷精美',py:'yìnshuā jīngměi',vn:'in đẹp'},{zh:'印刷质量',py:'yìnshuā zhìliàng',vn:'chất lượng in'},{zh:'印刷厂',py:'yìnshuāchǎng',vn:'nhà in'},{zh:'印刷术',py:'yìnshuāshù',vn:'nghề in, kỹ thuật in'}],
   patterns:[{s:'印刷 + 精美 / 质量',m:'In đẹp / chất lượng in'},{s:'……是……年印刷的',m:'… được in năm …'}],
   checkList:[
     {promptLang:'vi',prompt:'Kỹ thuật in là do người Trung Quốc phát minh.',answer:'印刷术是中国人发明的。',answerPy:'Yìnshuāshù shì Zhōngguórén fāmíng de.',note:'印刷术 = kỹ thuật in (một trong tứ đại phát minh).',pair:'是……的'},
     {promptLang:'vi',prompt:'Cuốn sách này không chỉ nội dung hay mà in cũng rất đẹp.',answer:'这本书不仅内容好，印刷也很精美。',answerPy:'Zhè běn shū bùjǐn nèiróng hǎo, yìnshuā yě hěn jīngměi.',note:'印刷精美 = in đẹp, tinh xảo.',pair:'不仅……也……'}
   ]},

  {n:35,zh:'涨',py:'zhǎng',pos:'Động từ',vn:'lên, tăng (giá, mực nước)',hv:'trướng',em:'📈',lesson:1,
   explain:['(Giá cả, mực nước, lương…) lên, tăng lên. Trái nghĩa: 降, 跌. Chú ý: đọc zhǎng; đọc zhàng khi nói mặt đỏ lên, sưng lên (涨红了脸).'],
   usage:'物价 / 房价 / 工资 / 水 + 涨; 涨价; 涨得很厉害; 身价大涨 (giá trị tăng vọt); 涨了一倍.',
   collo:['涨价','物价上涨','身价大涨','涨得很厉害'],
   ex_zh:'最近几年，物价涨得很厉害。',ex_py:'Zuìjìn jǐ nián, wùjià zhǎng de hěn lìhai.',ex_vn:'Mấy năm gần đây vật giá tăng rất mạnh.',
   exList:[
     {zh:'最近几年，物价涨得很厉害。',py:'Zuìjìn jǐ nián, wùjià zhǎng de hěn lìhai.',vn:'Mấy năm gần đây vật giá tăng rất mạnh.'},
     {zh:'一些印刷精美、有特色的作品则身价大涨。',py:'Yìxiē yìnshuā jīngměi, yǒu tèsè de zuòpǐn zé shēnjià dà zhǎng.',vn:'Một số tác phẩm in đẹp, có nét đặc sắc thì giá trị tăng vọt.'},
     {zh:'听说那套书很有收藏价值，价钱都涨疯了。',py:'Tīngshuō nà tào shū hěn yǒu shōucáng jiàzhí, jiàqian dōu zhǎngfēng le.',vn:'Nghe nói bộ sách đó rất có giá trị sưu tầm, giá tăng điên cuồng luôn.'}
   ],
   colloFull:[{zh:'涨价',py:'zhǎng jià',vn:'tăng giá'},{zh:'物价上涨',py:'wùjià shàngzhǎng',vn:'vật giá leo thang'},{zh:'身价大涨',py:'shēnjià dà zhǎng',vn:'giá trị tăng vọt'},{zh:'涨得很厉害',py:'zhǎng de hěn lìhai',vn:'tăng rất mạnh'}],
   patterns:[{s:'N (物价 / 房价 / 工资) + 涨了',m:'… tăng rồi'},{s:'涨 + 得 + 很厉害 / 很快',m:'Tăng rất mạnh / rất nhanh'}],
   checkList:[
     {promptLang:'vi',prompt:'Giá nhà ở thành phố này ngày càng tăng, người trẻ không mua nổi.',answer:'这个城市的房价越涨越高，年轻人买不起。',answerPy:'Zhège chéngshì de fángjià yuè zhǎng yuè gāo, niánqīng rén mǎi bu qǐ.',note:'越涨越高 = càng tăng càng cao; 买不起 — điểm ngữ pháp 1.',pair:'越……越……'},
     {promptLang:'vi',prompt:'Rau vừa tăng giá là bà nội liền than thở.',answer:'菜一涨价，奶奶就抱怨。',answerPy:'Cài yì zhǎng jià, nǎinai jiù bàoyuàn.',note:'涨价 = tăng giá (ly hợp: 涨了价).',pair:'一……就……'}
   ]},

  {n:36,zh:'收藏',py:'shōucáng',pos:'Động từ',vn:'sưu tầm, sưu tập, cất giữ',hv:'thu tàng',em:'🏺',lesson:1,
   explain:['Thu thập và cất giữ cẩn thận đồ có giá trị (tem, tiền cổ, tranh, sách cũ…). Danh từ ghép: 收藏品 (đồ sưu tầm), 收藏家 (nhà sưu tầm), 收藏价值 (giá trị sưu tầm).'],
   usage:'收藏 + 邮票 / 古董 / 小人书; 收藏品, 收藏家; 有收藏价值. Trên mạng: 收藏 = lưu (bài viết, video) vào mục yêu thích.',
   collo:['收藏品','收藏价值','收藏邮票'],
   ex_zh:'一些印刷精美、有特色的作品则身价大涨，成了收藏品，甚至进了博物馆。',ex_py:'Yìxiē yìnshuā jīngměi, yǒu tèsè de zuòpǐn zé shēnjià dà zhǎng, chéngle shōucángpǐn, shènzhì jìnle bówùguǎn.',ex_vn:'Một số tác phẩm in đẹp, có nét đặc sắc thì giá trị tăng vọt, trở thành đồ sưu tầm, thậm chí vào cả viện bảo tàng.',
   exList:[
     {zh:'一些印刷精美、有特色的作品则身价大涨，成了收藏品，甚至进了博物馆。',py:'Yìxiē yìnshuā jīngměi, yǒu tèsè de zuòpǐn zé shēnjià dà zhǎng, chéngle shōucángpǐn, shènzhì jìnle bówùguǎn.',vn:'Một số tác phẩm in đẹp, có nét đặc sắc thì giá trị tăng vọt, trở thành đồ sưu tầm, thậm chí vào cả viện bảo tàng.'},
     {zh:'你可得保留好，别弄坏了，现在那都是收藏品了。',py:'Nǐ kě děi bǎoliú hǎo, bié nònghuài le, xiànzài nà dōu shì shōucángpǐn le.',vn:'Con phải giữ gìn cho cẩn thận, đừng làm hỏng, bây giờ đó đều là đồ sưu tầm cả rồi.'},
     {zh:'爷爷从年轻时就开始收藏邮票。',py:'Yéye cóng niánqīng shí jiù kāishǐ shōucáng yóupiào.',vn:'Ông nội bắt đầu sưu tầm tem từ hồi còn trẻ.'}
   ],
   colloFull:[{zh:'收藏品',py:'shōucángpǐn',vn:'đồ sưu tầm'},{zh:'收藏价值',py:'shōucáng jiàzhí',vn:'giá trị sưu tầm'},{zh:'收藏邮票',py:'shōucáng yóupiào',vn:'sưu tầm tem'},{zh:'收藏家',py:'shōucángjiā',vn:'nhà sưu tầm'}],
   patterns:[{s:'收藏 + N (邮票 / 古董 / 小人书)',m:'Sưu tầm …'},{s:'……很有收藏价值',m:'… rất có giá trị sưu tầm'}],
   checkList:[
     {promptLang:'vi',prompt:'Bộ truyện tranh ông nội sưu tầm bị em trai làm hỏng rồi.',answer:'爷爷收藏的小人书被弟弟弄坏了。',answerPy:'Yéye shōucáng de xiǎorénshū bèi dìdi nònghuài le.',note:'收藏 làm định ngữ: 爷爷收藏的 + N.',pair:'被'},
     {promptLang:'vi',prompt:'Bộ truyện này tuy cũ nhưng rất có giá trị sưu tầm.',answer:'这套书虽然很旧，但是很有收藏价值。',answerPy:'Zhè tào shū suīrán hěn jiù, dànshì hěn yǒu shōucáng jiàzhí.',note:'有收藏价值 = có giá trị sưu tầm (câu bài nghe 练习册).',pair:'虽然……但是……'}
   ]},

  {n:37,zh:'潘家园',py:'Pānjiāyuán',pos:'Danh từ riêng',vn:'Phan Gia Viên (khu chợ đồ cổ nổi tiếng ở Bắc Kinh)',hv:'Phan Gia Viên',em:'🏮',lesson:1,
   explain:['Khu chợ đồ cũ, đồ cổ nổi tiếng ở phía đông nam Bắc Kinh; cuối tuần rất đông người đến tìm sách cũ, tranh, đồ sưu tầm.'],
   usage:'潘家园 + 旧货市场; 在潘家园 + 淘 / 买 + N.',
   collo:['潘家园旧货市场','在潘家园','逛潘家园'],
   ex_zh:'这种影响了数代人的小人书，如今只能在北京的潘家园、护国寺等地的旧书摊上找到。',ex_py:'Zhè zhǒng yǐngxiǎngle shù dài rén de xiǎorénshū, rújīn zhǐ néng zài Běijīng de Pānjiāyuán, Hùguósì děng dì de jiù shūtān shang zhǎodào.',ex_vn:'Thứ truyện tranh từng ảnh hưởng đến mấy thế hệ này, ngày nay chỉ còn tìm thấy ở các sạp sách cũ ở Phan Gia Viên, Hộ Quốc Tự… của Bắc Kinh.',
   exList:[
     {zh:'这种影响了数代人的小人书，如今只能在北京的潘家园、护国寺等地的旧书摊上找到。',py:'Zhè zhǒng yǐngxiǎngle shù dài rén de xiǎorénshū, rújīn zhǐ néng zài Běijīng de Pānjiāyuán, Hùguósì děng dì de jiù shūtān shang zhǎodào.',vn:'Thứ truyện tranh từng ảnh hưởng đến mấy thế hệ này, ngày nay chỉ còn tìm thấy ở các sạp sách cũ ở Phan Gia Viên, Hộ Quốc Tự… của Bắc Kinh.'},
     {zh:'周末爸爸常去潘家园逛旧书摊。',py:'Zhōumò bàba cháng qù Pānjiāyuán guàng jiù shūtān.',vn:'Cuối tuần bố hay đến Phan Gia Viên dạo các sạp sách cũ.'}
   ],
   colloFull:[{zh:'潘家园旧货市场',py:'Pānjiāyuán jiùhuò shìchǎng',vn:'chợ đồ cũ Phan Gia Viên'},{zh:'在潘家园',py:'zài Pānjiāyuán',vn:'ở Phan Gia Viên'},{zh:'逛潘家园',py:'guàng Pānjiāyuán',vn:'dạo Phan Gia Viên'}],
   patterns:[{s:'在潘家园 + 买到 / 找到 + N',m:'Mua được / tìm được … ở Phan Gia Viên'}],
   checkList:[
     {promptLang:'vi',prompt:'Bộ truyện tranh này là bố mua ở Phan Gia Viên.',answer:'这套小人书是爸爸在潘家园买的。',answerPy:'Zhè tào xiǎorénshū shì bàba zài Pānjiāyuán mǎi de.',note:'是……的 nhấn mạnh nơi mua.',pair:'是……的'},
     {promptLang:'vi',prompt:'Vừa đến cuối tuần là ông nội đi dạo Phan Gia Viên.',answer:'一到周末，爷爷就去逛潘家园。',answerPy:'Yí dào zhōumò, yéye jiù qù guàng Pānjiāyuán.',note:'逛 + địa danh = đi dạo ….',pair:'一……就……'}
   ]},

  {n:38,zh:'护国寺',py:'Hùguósì',pos:'Danh từ riêng',vn:'Hộ Quốc Tự (tên một con phố thương mại ở Bắc Kinh)',hv:'Hộ Quốc Tự',em:'🏯',lesson:1,
   explain:['Tên một con phố buôn bán lâu đời ở Bắc Kinh (vốn là tên một ngôi chùa cổ), nổi tiếng với các món ăn vặt và sạp sách cũ.'],
   usage:'护国寺 + 街 / 小吃; 在护国寺.',
   collo:['护国寺街','护国寺小吃','在护国寺'],
   ex_zh:'如今只能在北京的潘家园、护国寺等地的旧书摊上找到。',ex_py:'Rújīn zhǐ néng zài Běijīng de Pānjiāyuán, Hùguósì děng dì de jiù shūtān shang zhǎodào.',ex_vn:'Ngày nay chỉ còn tìm thấy ở các sạp sách cũ ở Phan Gia Viên, Hộ Quốc Tự… của Bắc Kinh.',
   exList:[
     {zh:'如今只能在北京的潘家园、护国寺等地的旧书摊上找到。',py:'Rújīn zhǐ néng zài Běijīng de Pānjiāyuán, Hùguósì děng dì de jiù shūtān shang zhǎodào.',vn:'Ngày nay chỉ còn tìm thấy ở các sạp sách cũ ở Phan Gia Viên, Hộ Quốc Tự… của Bắc Kinh.'},
     {zh:'到了北京，一定要去护国寺尝尝老北京小吃。',py:'Dàole Běijīng, yídìng yào qù Hùguósì chángchang lǎo Běijīng xiǎochī.',vn:'Đến Bắc Kinh nhất định phải ghé Hộ Quốc Tự nếm thử món ăn vặt Bắc Kinh xưa.'}
   ],
   colloFull:[{zh:'护国寺街',py:'Hùguósì jiē',vn:'phố Hộ Quốc Tự'},{zh:'护国寺小吃',py:'Hùguósì xiǎochī',vn:'đồ ăn vặt Hộ Quốc Tự'},{zh:'在护国寺',py:'zài Hùguósì',vn:'ở Hộ Quốc Tự'}],
   patterns:[{s:'去护国寺 + V',m:'Đến Hộ Quốc Tự để …'}],
   checkList:[
     {promptLang:'vi',prompt:'Ở Hộ Quốc Tự không chỉ có sạp sách cũ mà còn có rất nhiều món ăn vặt.',answer:'护国寺不仅有旧书摊，还有很多小吃。',answerPy:'Hùguósì bùjǐn yǒu jiù shūtān, hái yǒu hěn duō xiǎochī.',note:'Địa danh làm chủ ngữ + 有.',pair:'不仅……还……'},
     {promptLang:'vi',prompt:'Tôi chưa từng đến Hộ Quốc Tự.',answer:'我从来没去过护国寺。',answerPy:'Wǒ cónglái méi qùguo Hùguósì.',note:'去过 + địa danh.',pair:'从来没……过'}
   ]}
];

// ══════════════════════════════════════════
// BÀI KHOÁ — 小人书摊 (664 chữ, tr. 22–24)
// ══════════════════════════════════════════
var dialogData = [
  {
    scene:'课文 · 小人书摊',
    preQuiz:[
      {q:'小人书是一种什么？',opts:['以书的形式出版的连环画','一种动画片','一种报纸'],ans:0},
      {q:'在二十世纪五六十年代，人们的生活怎么样？',opts:['很丰富','很单调','很忙'],ans:1},
      {q:'那时候，读小人书是谁最主要的娱乐之一？',opts:['老人','大学生','儿童'],ans:2},
      {q:'小人书摊对哪些人来说是件大好事？',opts:['想看又买不起书的人','喜欢收藏的人','卖书的人'],ans:0},
      {q:'作者家附近的小人书摊在什么地方？',opts:['学校门口','一进街口靠墙的小棚子里','公园里'],ans:1},
      {q:'棚子里的人们坐在什么上面看书？',opts:['椅子','床板','用砖头支着的木头板子'],ans:2},
      {q:'为了减少损坏程度，摊主给每本小人书做了什么？',opts:['用牛皮纸加了层封皮','放进盒子里','不让孩子借走'],ans:0},
      {q:'从什么能看出书摊主人的文化水平？',opts:['他说的话','封皮上整齐漂亮的毛笔字','他穿的长衫'],ans:1},
      {q:'在摊里看小人书，每册多少钱？',opts:['2分钱','5分钱','1分钱'],ans:2},
      {q:'借书回家看时，摊主会把什么登记在本子上？',opts:['租书人的姓名、地址和书名','租书人的年龄','租书人的学校'],ans:0},
      {q:'租小人书要交押金吗？',opts:['要交很多押金','似乎没有押金，全凭信用','要交一半的书钱'],ans:1},
      {q:'如今在哪里还能找到小人书？',opts:['每个书店','学校的图书馆','潘家园、护国寺等地的旧书摊'],ans:2},
      {q:'一些印刷精美、有特色的小人书现在怎么样了？',opts:['身价大涨，成了收藏品','没有人要了','全被扔掉了'],ans:0}
    ],
    lines:[
      {
        sp:0,
        zh:'小人书，是一种以书的形式出版的连环画。在二十世纪五六十年代，那时候生活很单调，没有网络，没有动画片，读小人书是儿童最主要的娱乐之一。不仅小孩子爱看，还有无数的青少年和大人也爱看。',
        py:'Xiǎorénshū, shì yì zhǒng yǐ shū de xíngshì chūbǎn de liánhuánhuà. Zài èrshí shìjì wǔ liùshí niándài, nà shíhou shēnghuó hěn dāndiào, méiyǒu wǎngluò, méiyǒu dònghuàpiàn, dú xiǎorénshū shì értóng zuì zhǔyào de yúlè zhīyī. Bùjǐn xiǎo háizi ài kàn, hái yǒu wúshù de qīngshàonián hé dàrén yě ài kàn.',
        vn:'“Tiểu nhân thư” là một loại tranh liên hoàn được xuất bản dưới dạng sách. Vào những năm 50–60 của thế kỷ 20, cuộc sống thời ấy rất đơn điệu, không có Internet, không có phim hoạt hình, đọc truyện tranh là một trong những thú giải trí chủ yếu nhất của trẻ em. Không chỉ trẻ nhỏ mê đọc, mà còn có vô số thanh thiếu niên và người lớn cũng mê.'
      },
      {
        sp:0,
        zh:'随着小人书的流行，出现了从事租书业务的小人书摊，这对于那些想看又买不起书的人来说，只用很少的钱就能看一本，毫无疑问是件大好事。',
        py:'Suízhe xiǎorénshū de liúxíng, chūxiànle cóngshì zūshū yèwù de xiǎorénshū tān, zhè duìyú nàxiē xiǎng kàn yòu mǎi bu qǐ shū de rén lái shuō, zhǐ yòng hěn shǎo de qián jiù néng kàn yì běn, háowú yíwèn shì jiàn dà hǎoshì.',
        vn:'Cùng với sự thịnh hành của truyện tranh, xuất hiện những sạp truyện tranh làm dịch vụ cho thuê sách. Với những người muốn đọc mà lại không đủ tiền mua sách, chỉ tốn rất ít tiền là đọc được một cuốn — không nghi ngờ gì, đó là một điều cực kỳ tốt.'
      },
      {
        sp:0,
        zh:'记得小时候，我家附近就有个小人书摊，就是一进街口靠墙的一个小棚子，里面用几块砖头支着粗糙的木头板子供人们坐着看书。棚子里有一张床板摆着各种题材的小人书，墙边还拉了几根绳子，一本本书翻开搭在上面，五颜六色的，很好看。为了减少损坏程度，每本小人书都用牛皮纸加了层封皮，封皮上用毛笔写上书名，整齐漂亮的毛笔字能充分地显示出书摊主人的文化水平。摊主是位上了年纪、身材瘦小的老人，总是穿着一件灰色长衫，静静地坐在一边，陪着看书的人们。',
        py:'Jìde xiǎo shíhou, wǒ jiā fùjìn jiù yǒu ge xiǎorénshū tān, jiù shì yí jìn jiēkǒu kào qiáng de yí ge xiǎo péngzi, lǐmiàn yòng jǐ kuài zhuāntóu zhīzhe cūcāo de mùtou bǎnzi gōng rénmen zuòzhe kàn shū. Péngzi li yǒu yì zhāng chuángbǎn bǎizhe gè zhǒng tícái de xiǎorénshū, qiáng biān hái lāle jǐ gēn shéngzi, yì běnběn shū fānkāi dā zài shàngmian, wǔyán-liùsè de, hěn hǎokàn. Wèile jiǎnshǎo sǔnhuài chéngdù, měi běn xiǎorénshū dōu yòng niúpízhǐ jiāle céng fēngpí, fēngpí shang yòng máobǐ xiěshang shūmíng, zhěngqí piàoliang de máobǐzì néng chōngfèn de xiǎnshì chū shūtān zhǔrén de wénhuà shuǐpíng. Tānzhǔ shì wèi shàngle niánjì, shēncái shòuxiǎo de lǎorén, zǒngshì chuānzhe yí jiàn huīsè chángshān, jìngjìng de zuò zài yìbiān, péizhe kàn shū de rénmen.',
        vn:'Nhớ hồi nhỏ, ngay gần nhà tôi có một sạp truyện tranh — đó là một cái lều nhỏ dựa vào tường, vừa vào đầu phố là thấy. Bên trong kê mấy viên gạch đỡ những tấm ván gỗ thô ráp cho mọi người ngồi đọc sách. Trong lều có một tấm ván giường bày truyện tranh đủ mọi đề tài, bên tường còn giăng mấy sợi dây, từng cuốn sách được mở ra vắt lên trên, sặc sỡ đủ màu, trông rất đẹp. Để sách đỡ bị hư hỏng, cuốn truyện nào cũng được bọc thêm một lớp bìa bằng giấy da bò, trên bìa viết tên sách bằng bút lông; nét chữ bút lông ngay ngắn, đẹp đẽ đủ cho thấy trình độ văn hoá của chủ sạp. Chủ sạp là một cụ già đã có tuổi, người gầy nhỏ, lúc nào cũng mặc một chiếc áo dài màu xám, lặng lẽ ngồi một bên, làm bạn với những người đang đọc sách.'
      },
      {
        sp:0,
        zh:'在这里看书的人大部分是附近住户的孩子，也有一些喜欢小人书的成人。租借小人书很便宜，在摊里看，每册1分钱，选好书坐下就看，看完连书带钱交给摊主；假如借走回家看，则每本每天2分钱，挑好书后交给摊主，摊主仔细地将租书人的姓名、地址和所借小人书的书名登记在本子上，收了租金就可以拿走了，第二天还书时再把记录一个一个地画掉，还书手续就算是办理好了。印象中似乎没有什么押金，全凭信用。我每天放学回家总要经过这家书摊，都要进去看看。',
        py:'Zài zhèlǐ kàn shū de rén dà bùfen shì fùjìn zhùhù de háizi, yě yǒu yìxiē xǐhuan xiǎorénshū de chéngrén. Zūjiè xiǎorénshū hěn piányi, zài tān li kàn, měi cè yì fēn qián, xuǎnhǎo shū zuòxia jiù kàn, kànwán lián shū dài qián jiāo gěi tānzhǔ; jiǎrú jièzǒu huí jiā kàn, zé měi běn měi tiān liǎng fēn qián, tiāohǎo shū hòu jiāo gěi tānzhǔ, tānzhǔ zǐxì de jiāng zūshūrén de xìngmíng, dìzhǐ hé suǒ jiè xiǎorénshū de shūmíng dēngjì zài běnzi shang, shōule zūjīn jiù kěyǐ ná zǒu le, dì-èr tiān huán shū shí zài bǎ jìlù yí ge yí ge de huàdiào, huán shū shǒuxù jiù suàn shì bànlǐ hǎo le. Yìnxiàng zhōng sìhū méiyǒu shénme yājīn, quán píng xìnyòng. Wǒ měi tiān fàngxué huí jiā zǒng yào jīngguò zhè jiā shūtān, dōu yào jìnqu kànkan.',
        vn:'Người đọc sách ở đây phần lớn là trẻ con các hộ gần đó, cũng có một số người lớn thích truyện tranh. Thuê truyện tranh rất rẻ: đọc tại sạp thì mỗi cuốn một xu, chọn xong sách là ngồi xuống đọc, đọc xong đưa cả sách lẫn tiền cho chủ sạp; nếu mượn mang về nhà đọc thì mỗi cuốn mỗi ngày hai xu, chọn sách xong đưa cho chủ sạp, chủ sạp cẩn thận ghi tên, địa chỉ của người thuê và tên cuốn truyện được mượn vào sổ, nhận tiền thuê rồi là có thể mang đi; hôm sau lúc trả sách thì gạch từng dòng ghi chép đi, thế là thủ tục trả sách coi như đã xong. Trong ấn tượng của tôi hình như chẳng có tiền đặt cọc gì cả, hoàn toàn dựa vào chữ tín. Ngày nào tan học về nhà tôi cũng đi qua sạp sách này, lần nào cũng phải ghé vào xem.'
      },
      {
        sp:0,
        zh:'然而，这种影响了数代人的小人书，如今只能在北京的潘家园、护国寺等地的旧书摊上找到，一些印刷精美、有特色的作品则身价大涨，成了收藏品，甚至进了博物馆。小人书和小人书摊已成为历史的记忆。',
        py:'Rán\'ér, zhè zhǒng yǐngxiǎngle shù dài rén de xiǎorénshū, rújīn zhǐ néng zài Běijīng de Pānjiāyuán, Hùguósì děng dì de jiù shūtān shang zhǎodào, yìxiē yìnshuā jīngměi, yǒu tèsè de zuòpǐn zé shēnjià dà zhǎng, chéngle shōucángpǐn, shènzhì jìnle bówùguǎn. Xiǎorénshū hé xiǎorénshū tān yǐ chéngwéi lìshǐ de jìyì.',
        vn:'Thế nhưng, thứ truyện tranh từng ảnh hưởng đến mấy thế hệ này, ngày nay chỉ còn tìm thấy ở các sạp sách cũ ở Phan Gia Viên, Hộ Quốc Tự… của Bắc Kinh; một số tác phẩm in đẹp, có nét đặc sắc thì giá trị tăng vọt, trở thành đồ sưu tầm, thậm chí vào cả viện bảo tàng. Truyện tranh và sạp truyện tranh đã trở thành ký ức của lịch sử.'
      }
    ]
  }
];

// ══════════════════════════════════════════
// PHÂN BIỆT TỪ — 记录/纪录 là cặp 词语辨析 của sách (tr. 26–27) + 2 cặp tự thêm
// ══════════════════════════════════════════
var synonymData = [
  {
    pair:'记录 — 纪录',
    same:'Cùng đọc jìlù, đều liên quan đến việc “ghi lại”, nên rất dễ viết nhầm. Nhưng nghĩa và cách dùng khác hẳn nhau, KHÔNG thay cho nhau được.',
    sameEx:{zh:'小刘做会议记录。／他打破了世界纪录。',vn:'Tiểu Lưu làm biên bản cuộc họp. / Anh ấy phá kỷ lục thế giới.'},
    items:[
      {
        word:'记录',
        points:[
          'ĐỘNG TỪ: ghi lại lời nghe được hoặc việc xảy ra — 记录下来, 详细地记录.',
          'DANH TỪ: tài liệu đã ghi (biên bản, bản ghi) hoặc người làm việc ghi chép — 会议记录, 做记录.',
          'Mẹo: 记 có bộ 言 (lời nói) → ghi lời người ta nói.'
        ],
        ex:[
          {zh:'我已经把这次会议的内容详细地记录下来了。',vn:'Tôi đã ghi chép lại chi tiết nội dung cuộc họp lần này.'},
          {zh:'小刘，你来做这次会议的记录。',vn:'Tiểu Lưu, cậu làm biên bản cuộc họp lần này nhé.'}
        ]
      },
      {
        word:'纪录',
        points:[
          'CHỈ là DANH TỪ: thành tích tốt nhất trong một thời kỳ, một phạm vi — kỷ lục: 世界纪录, 打破纪录, 创造纪录.',
          'Còn chỉ sự ghi chép lại sự kiện có giá trị thời sự → 纪录片 (phim tài liệu).',
          'Không làm động từ: không nói ✗ 纪录下来.'
        ],
        ex:[
          {zh:'他在本次比赛中打破了世界纪录。',vn:'Anh ấy đã phá kỷ lục thế giới trong cuộc thi lần này.'},
          {zh:'学校带孩子们看了一部有教育意义的纪录片。',vn:'Nhà trường đưa các em đi xem một bộ phim tài liệu có ý nghĩa giáo dục.'}
        ]
      }
    ],
    quiz:[
      {sentence:'他又创造了新的奥运会＿＿。',options:['记录','纪录'],answer:1,why:'Thành tích tốt nhất → kỷ lục Olympic → 纪录.'},
      {sentence:'小张呢？不是安排她来做会议＿＿吗？',options:['记录','纪录'],answer:0,why:'做会议记录 = làm biên bản cuộc họp → 记录 (danh từ: bản ghi / người ghi).'},
      {sentence:'我很喜欢看新闻＿＿片。',options:['记录','纪录'],answer:1,why:'纪录片 = phim tài liệu — ghi lại sự kiện có giá trị thời sự.'},
      {sentence:'甲骨文＿＿了3000多年以前的中国历史和社会生活。',options:['记录','纪录'],answer:0,why:'Làm ĐỘNG TỪ mang tân ngữ (ghi lại lịch sử) → chỉ 记录. 纪录 không làm động từ.'}
    ],
    sgk:{
      chung:{t:'读音相同，意思有关联，但词性和用法不同，不能换用。',vn:'Sách không liệt kê điểm giống; hai từ đồng âm (jìlù), nghĩa có liên quan nhưng từ loại và cách dùng khác nhau, không thay cho nhau được.'},
      khac:[
        {
          a:{t:'可做动词，指把听到的话或发生的事记下来。',vn:'Có thể làm động từ, chỉ việc ghi lại lời nghe được hoặc sự việc đã xảy ra.',vd:'我已经把这次会议的内容详细地记录下来了。',vdVn:'Tôi đã ghi chép lại chi tiết nội dung cuộc họp lần này.'},
          b:{t:'名词，指一定时期、一定范围内的最好成绩。',vn:'Danh từ, chỉ thành tích tốt nhất trong một thời kỳ, một phạm vi nhất định (kỷ lục).',vd:'他在本次比赛中打破了世界纪录。',vdVn:'Anh ấy đã phá kỷ lục thế giới trong cuộc thi lần này.'}
        },
        {
          a:{t:'也可做名词，指记下来的材料或做记录的人。',vn:'Cũng có thể làm danh từ, chỉ tài liệu đã ghi lại hoặc người làm công việc ghi chép.',vd:'第二天还书时再把记录一个一个地画掉。／小刘，你来做这次会议的记录。',vdVn:'Hôm sau lúc trả sách thì gạch từng dòng ghi chép đi. / Tiểu Lưu, cậu làm biên bản cuộc họp lần này nhé.'},
          b:{t:'名词，也可指对有新闻价值的事件的记载。',vn:'Danh từ, cũng có thể chỉ việc ghi chép lại những sự kiện có giá trị thời sự.',vd:'学校带孩子们看了一部有教育意义的纪录片。',vdVn:'Nhà trường đưa các em đi xem một bộ phim tài liệu có ý nghĩa giáo dục.'}
        }
      ],
      lamThu:[
        {s:'他又创造了新的奥运会＿＿。',dap:[false,true],mau:true,giai:'Thành tích tốt nhất — kỷ lục → chỉ 纪录.'},
        {s:'小张呢？不是安排她来做会议＿＿吗？',dap:[true,false],giai:'Làm biên bản, người ghi chép → 记录 (danh từ).'},
        {s:'我很喜欢看新闻＿＿片。',dap:[false,true],giai:'纪录片 = phim tài liệu, ghi lại sự kiện có giá trị thời sự.'},
        {s:'甲骨文＿＿了3000多年以前的中国历史和社会生活。',dap:[true,false],giai:'Động từ mang tân ngữ, có 了 → chỉ 记录.'}
      ]
    }
  },
  {
    pair:'年代 — 时代',
    same:'Đều là danh từ chỉ một khoảng thời gian trong lịch sử. Nói chung chung “thời ấy” thì đôi khi dùng được cả hai (那个年代／那个时代).',
    sameEx:{zh:'在那个年代／时代，很多人买不起书。',vn:'Vào thời ấy, rất nhiều người không mua nổi sách.'},
    items:[
      {
        word:'年代',
        points:[
          'Chủ yếu chỉ THẬP NIÊN: (世纪) + số chẵn chục + 年代 — 八十年代, 二十世纪五六十年代.',
          'Khoảng thời gian cụ thể, tính bằng mười năm.',
          'Còn nói 年代久远 (lâu đời).'
        ],
        ex:[
          {zh:'这可以说是20世纪80年代最流行的歌曲。',vn:'Có thể nói đây là bài hát thịnh hành nhất thập niên 80 thế kỷ 20.'},
          {zh:'在二十世纪五六十年代，那时候生活很单调。',vn:'Vào những năm 50–60 thế kỷ 20, cuộc sống thời ấy rất đơn điệu.'}
        ]
      },
      {
        word:'时代',
        points:[
          'Chỉ một THỜI ĐẠI, giai đoạn lịch sử lớn được phân theo đặc điểm kinh tế, chính trị, văn hoá: 信息时代, 网络时代, 新时代.',
          'Chỉ một giai đoạn trong đời người: 学生时代, 童年时代.',
          'Không đi với số thập niên: không nói ✗ 八十时代.'
        ],
        ex:[
          {zh:'现在是网络时代，年轻人离不开手机。',vn:'Bây giờ là thời đại Internet, người trẻ không rời được điện thoại.'},
          {zh:'每个人都有自己的童年时代。',vn:'Ai cũng có thời thơ ấu của riêng mình.'}
        ]
      }
    ],
    quiz:[
      {sentence:'这可以说是20世纪80＿＿最流行的歌曲。',options:['年代','时代'],answer:0,why:'Sau số chẵn chục (80) chỉ thập niên → 年代 (câu 练习 2 của sách).'},
      {sentence:'现在是信息＿＿，什么消息都传得很快。',options:['年代','时代'],answer:1,why:'信息时代 = thời đại thông tin — một thời đại lớn theo đặc điểm xã hội.'},
      {sentence:'每个人都有自己的童年＿＿。',options:['年代','时代'],answer:1,why:'Giai đoạn trong đời người: 童年时代, 学生时代 (phần 运用 của sách).'},
      {sentence:'在那个＿＿，很多人都买不起书。',options:['年代','时代'],answer:0,both:true,why:'Nói chung chung “thời ấy” thì cả 那个年代 lẫn 那个时代 đều được.'}
    ]
  },
  {
    pair:'疑问 — 怀疑',
    same:'Đều liên quan đến việc “chưa tin chắc, còn nghi”. Nhưng 疑问 là DANH TỪ (điều thắc mắc), 怀疑 chủ yếu là ĐỘNG TỪ (nghi ngờ ai / việc gì).',
    sameEx:{zh:'大家对这个说法有疑问。／大家怀疑这个说法。',vn:'Mọi người có thắc mắc về cách nói này. / Mọi người nghi ngờ cách nói này.'},
    items:[
      {
        word:'疑问',
        points:[
          'DANH TỪ: điều còn thắc mắc, còn nghi vấn cần hỏi lại.',
          'Đi sau 有 / 没有 / 提出 / 解答: 有什么疑问吗？',
          'Cụm cố định: 毫无疑问 (không chút nghi ngờ).'
        ],
        ex:[
          {zh:'今天的课就到这儿，大家有什么疑问吗？',vn:'Hôm nay học đến đây thôi, các em có thắc mắc gì không?'},
          {zh:'史学家对这个问题提出了不少疑问。',vn:'Các nhà sử học đã đặt ra không ít nghi vấn về vấn đề này.'}
        ]
      },
      {
        word:'怀疑',
        points:[
          'ĐỘNG TỪ: nghi ngờ, không tin — mang tân ngữ: 怀疑他, 怀疑这个消息.',
          'Còn có nghĩa “đoán là, ngờ rằng”: 我怀疑他生病了.',
          'Có thể làm danh từ trong 引起怀疑, nhưng KHÔNG nói ✗ 有什么怀疑吗 để hỏi học sinh có thắc mắc không.'
        ],
        ex:[
          {zh:'你凭什么怀疑我偷了东西？',vn:'Anh dựa vào đâu mà nghi tôi ăn trộm đồ?'},
          {zh:'他一直不接电话，我怀疑他手机没电了。',vn:'Anh ấy mãi không nghe máy, tôi ngờ là điện thoại hết pin.'}
        ]
      }
    ],
    quiz:[
      {sentence:'今天的课就到这儿，大家有什么＿＿吗？',options:['疑问','怀疑'],answer:0,why:'有 + danh từ: 有疑问 = có thắc mắc (câu 练习 2 của sách).'},
      {sentence:'你凭什么＿＿我偷了东西？',options:['疑问','怀疑'],answer:1,why:'Cần động từ mang tân ngữ (我偷了东西) → 怀疑.'},
      {sentence:'这对买不起书的人来说，毫无＿＿是件大好事。',options:['疑问','怀疑'],answer:0,why:'毫无疑问 là cụm cố định.'},
      {sentence:'他一直不接电话，我＿＿他手机没电了。',options:['疑问','怀疑'],answer:1,why:'怀疑 = đoán là, ngờ rằng; là động từ.'}
    ]
  }
];

// ══════════════════════════════════════════
// CẦU NỐI HÁN – VIỆT
// ══════════════════════════════════════════
var hvBridgeData = {
  easy:[
    {zh:'出版',hv:'xuất bản',vn:'xuất bản',note:'Trùng khít — nhớ một lần là xong.'},
    {zh:'单调',hv:'đơn điệu',vn:'đơn điệu',note:'Trùng khít.'},
    {zh:'青少年',hv:'thanh thiếu niên',vn:'thanh thiếu niên',note:'Trùng khít — chú ý 少 đọc shào.'},
    {zh:'无数',hv:'vô số',vn:'vô số',note:'Trùng khít.'},
    {zh:'疑问',hv:'nghi vấn',vn:'thắc mắc, nghi vấn',note:'Trùng khít; 疑问句 = câu nghi vấn.'},
    {zh:'题材',hv:'đề tài',vn:'đề tài',note:'Trùng khít.'},
    {zh:'整齐',hv:'chỉnh tề',vn:'ngay ngắn, chỉnh tề',note:'Tiếng Việt “chỉnh tề” hay nói quần áo; tiếng Trung dùng rộng hơn: phòng, chữ viết, tiếng hát.'},
    {zh:'登记',hv:'đăng ký',vn:'đăng ký, ghi sổ',note:'Trùng khít.'},
    {zh:'手续',hv:'thủ tục',vn:'thủ tục',note:'Trùng khít.'},
    {zh:'连环画',hv:'liên hoàn hoạ',vn:'tranh liên hoàn',note:'“Liên hoàn” = nối tiếp nhau, “hoạ” = tranh.'},
    {zh:'成人',hv:'thành nhân',vn:'người lớn',note:'“Thành” = trưởng thành, “nhân” = người.'},
    {zh:'印刷',hv:'ấn loát',vn:'in ấn',note:'“Ấn loát” là từ cũ của tiếng Việt chỉ nghề in; “ấn” như trong “in ấn”.'},
    {zh:'收藏',hv:'thu tàng',vn:'sưu tầm, cất giữ',note:'“Thu” = gom lại, “tàng” = cất (như “tàng trữ”, “bảo tàng” 博物馆 là “bác vật quán”).'}
  ],
  idiom:[
    {zh:'五颜六色',hv:'ngũ nhan lục sắc',vn:'sặc sỡ nhiều màu',note:'“Năm màu sáu sắc” → đủ màu sắc.'},
    {zh:'毫无疑问',hv:'hào vô nghi vấn',vn:'không chút nghi ngờ',note:'“Hào” = sợi lông nhỏ → đến một sợi lông nghi ngờ cũng không có.'},
    {zh:'身价大涨',hv:'thân giá đại trướng',vn:'giá trị tăng vọt',note:'“Thân giá” = giá trị của bản thân; “trướng” = dâng lên (nước dâng).'},
    {zh:'全凭信用',hv:'toàn bằng tín dụng',vn:'hoàn toàn dựa vào chữ tín',note:'“Bằng” = dựa vào (như “bằng chứng”); 信用 ở đây là CHỮ TÍN, không phải tín dụng ngân hàng.'}
  ],
  trap:[
    {zh:'年代',hv:'niên đại',vn:'thập niên',warn:'BẪY: tiếng Việt “niên đại” là thời điểm có niên hiệu (niên đại của cổ vật). 年代 tiếng Trung chủ yếu là THẬP NIÊN: 八十年代 = những năm 80.'},
    {zh:'娱乐',hv:'ngu lạc',vn:'giải trí',warn:'BẪY: 娱 (ngu) nghĩa là VUI, không phải “ngu” là dốt (愚). 娱乐节目 = chương trình giải trí.'},
    {zh:'记录',hv:'ký lục',vn:'ghi chép; biên bản',warn:'BẪY LỚN: “kỷ lục” tiếng Việt ứng với 纪录 (世界纪录), KHÔNG phải 记录. 记录 là ghi chép, biên bản.'},
    {zh:'信用',hv:'tín dụng',vn:'chữ tín, uy tín',warn:'BẪY: tiếng Việt “tín dụng” là vay mượn ngân hàng; 信用 tiếng Trung trước hết là CHỮ TÍN (讲信用 = giữ chữ tín). 信用卡 mới là thẻ tín dụng.'},
    {zh:'办理',hv:'biện lý',vn:'làm (thủ tục)',warn:'BẪY: tiếng Việt “biện lý” là chức danh công tố viên thời cũ. 办理 chỉ là “làm, giải quyết” thủ tục, nghiệp vụ.'},
    {zh:'从事',hv:'tòng sự',vn:'làm (nghề)',warn:'Tiếng Việt “tòng sự” là từ cổ (làm việc ở cơ quan). 从事 dùng thường xuyên, trang trọng: 从事教育工作 = làm nghề giáo dục.'},
    {zh:'押金',hv:'áp kim',vn:'tiền đặt cọc',warn:'Đọc Hán–Việt không gợi nghĩa: 押 = cầm cố, thế chấp (như 押韵 áp vận); 金 = tiền → tiền thế chấp.'},
    {zh:'摊',hv:'than',vn:'sạp hàng',warn:'BẪY: “than” không liên quan đến than củi hay than thở. 摊 = sạp bày bán: 书摊, 水果摊.'}
  ]
};

// ══════════════════════════════════════════
// GHÉP TỪ
// ══════════════════════════════════════════
// Ghép cụm — kết hợp từ của bài (bảng 词语搭配 giáo trình + cụm mới)
var matchData = [
  {left:'从事',right:'职业'},
  {left:'办理',right:'手续'},
  {left:'粗糙的',right:'皮肤'},
  {left:'整齐的',right:'军队'},
  {left:'一册',right:'书'},
  {left:'一笔',right:'押金'},
  {left:'生活',right:'单调'},
  {left:'毫无',right:'疑问'},
  {left:'印刷',right:'精美'},
  {left:'价格',right:'上涨'},
  {left:'网络',right:'游戏'},
  {left:'身材',right:'苗条'}
];

// ══════════════════════════════════════════
// ĐIỀN TỪ
// ══════════════════════════════════════════
var fillData = [
  {pre:'他下班以后在路边摆了个小',blank:'摊',post:'，卖自己做的点心。',hint:'(sạp, quầy hàng)',ans:'摊',exp:'摊 = sạp hàng bày ở ngoài đường; 摆摊 = bày sạp bán hàng, 书摊 = sạp sách.'},
  {pre:'弟弟每天晚上都要看半个小时',blank:'动画片',post:'，看完才去睡觉。',hint:'(phim hoạt hình)',ans:'动画片',exp:'动画片 = phim hoạt hình; 片 đọc piàn, đi với 看.'},
  {pre:'他',blank:'毫无',post:'准备地走上了台，结果紧张得一句话也说不出来。',hint:'(không hề có chút — văn viết)',ans:'毫无',exp:'毫无 + danh từ hai chữ (准备, 办法, 兴趣, 疑问) = hoàn toàn không có; 毫无准备地 + V = làm gì mà không hề chuẩn bị.'},
  {pre:'刮风的时候门老是开，他就搬了一块',blank:'砖头',post:'挡在门后面。',hint:'(viên gạch)',ans:'砖头',exp:'砖头 = viên gạch, lượng từ 块. Khác 石头 (hòn đá).'},
  {pre:'她常年在地里干活儿，一双手变得很',blank:'粗糙',post:'。',hint:'(thô ráp, sần sùi)',ans:'粗糙',exp:'粗糙 = thô ráp (da tay, mặt bàn); cũng chỉ đồ làm ẩu, không tinh: 这张桌子做得很粗糙.'},
  {pre:'这张桌子是用',blank:'木头',post:'做的，已经用了二十多年了，还很结实。',hint:'(gỗ)',ans:'木头',exp:'木头 = gỗ; 用木头做的 = làm bằng gỗ. 结实 (bài 4) = chắc chắn.'},
  {pre:'这位作家最喜欢写农村',blank:'题材',post:'的小说。',hint:'(đề tài)',ans:'题材',exp:'题材 = đề tài của tác phẩm (sách, phim, tranh): 农村题材, 历史题材.'},
  {pre:'他打完球，把毛巾',blank:'搭',post:'在肩膀上，一边走一边喝水。',hint:'(vắt (lên))',ans:'搭',exp:'搭 = vắt, mắc (khăn, áo) lên vật khác: 搭在肩膀上, 搭在椅子上; còn có nghĩa dựng (lều): 搭棚子.'},
  {pre:'奶奶虽然上了',blank:'年纪',post:'，可是每天还坚持去公园散步。',hint:'(tuổi tác)',ans:'年纪',exp:'上了年纪 = đã có tuổi (nói về người già, lịch sự). Không nói ✗上了年龄.'},
  {pre:'租这套房子，除了房租，还要先交一个月的',blank:'押金',post:'。',hint:'(tiền đặt cọc)',ans:'押金',exp:'押金 = tiền đặt cọc, trả lại khi trả nhà/trả đồ; lượng từ 笔: 一笔押金.'},
  {pre:'今年的房租又',blank:'涨',post:'了两百块，我只好搬到远一点儿的地方去住。',hint:'(tăng, lên (giá))',ans:'涨',exp:'涨 (zhǎng) = tăng (giá, mực nước): 房租涨了, 河水涨了.'},
  {pre:'他从十岁就开始',blank:'收藏',post:'各个国家的地图，现在已经有一千多张了。',hint:'(sưu tầm)',ans:'收藏',exp:'收藏 = sưu tầm và cất giữ (tem, bản đồ, tranh…); 收藏品 = đồ sưu tầm.'}
];

// ══════════════════════════════════════════
// SẮP XẾP CÂU
// ══════════════════════════════════════════
var sortData = [
  {words:['刚工作的','年轻人','哪儿','租得起','市中心的','房子','？'],ans:'刚工作的年轻人哪儿租得起市中心的房子？',audio:'刚工作的年轻人哪儿租得起市中心的房子？'},
  {words:['这么贵的','饭店','，','我们','学生','可','吃不起','。'],ans:'这么贵的饭店，我们学生可吃不起。',audio:'这么贵的饭店，我们学生可吃不起。'},
  {words:['这种考试','不能','光凭','聪明','，','还要靠','平时的','努力','。'],ans:'这种考试不能光凭聪明，还要靠平时的努力。',audio:'这种考试不能光凭聪明，还要靠平时的努力。'},
  {words:['他','用一根木头','把','窗户','支了','起来','。'],ans:'他用一根木头把窗户支了起来。',audio:'他用一根木头把窗户支了起来。'},
  {words:['这套书','一共','有','十二册','，','比较','适合','成人','阅读','。'],ans:'这套书一共有十二册，比较适合成人阅读。',audio:'这套书一共有十二册，比较适合成人阅读。'},
  {words:['医生','把','病人','每天的','变化','都','详细地','记录了下来','。'],ans:'医生把病人每天的变化都详细地记录了下来。',audio:'医生把病人每天的变化都详细地记录了下来。'},
  {words:['这种衣服','在','八十年代','特别','流行','，','我爸爸妈妈','都','穿过','。'],ans:'这种衣服在八十年代特别流行，我爸爸妈妈都穿过。',audio:'这种衣服在八十年代特别流行，我爸爸妈妈都穿过。'},
  {words:['假如','你','一年','不用','工作','，','你','最想','去哪儿','？'],ans:'假如你一年不用工作，你最想去哪儿？',audio:'假如你一年不用工作，你最想去哪儿？'}
];

// ══════════════════════════════════════════
// CHỌN TỪ THÍCH HỢP
// ══════════════════════════════════════════
var errorFixMode = 'wordchoice';
var errorFixData = [
  {wrong:'开会的时候请你帮忙做一下____，会后发给大家。',opts:['记录','纪录','记忆','手续'],ans:0,exp:'做记录 = ghi biên bản (记录 làm danh từ: bản ghi). 纪录 là kỷ lục; 记忆 là trí nhớ; 手续 là thủ tục.'},
  {wrong:'他跑出了九秒八的好成绩，打破了学校的____。',opts:['纪录','记录','成绩','题材'],ans:0,exp:'打破纪录 = phá kỷ lục → 纪录 (thành tích tốt nhất). 记录 là ghi chép/biên bản; 打破 không đi với 成绩 (phải là 取得成绩); 题材 là đề tài.'},
  {wrong:'我爸爸妈妈是在九十____认识的。',opts:['年代','时代','年纪','时期'],ans:0,exp:'Số chẵn chục + 年代 = thập niên (九十年代). 时代 là thời đại lớn, không đứng sau số; 年纪 là tuổi; 时期 không đi với 九十.'},
  {wrong:'现在是网络____，不会上网的老人生活很不方便。',opts:['时代','年代','年纪','身材'],ans:0,exp:'网络时代 = thời đại Internet — một thời kỳ lớn gắn với đặc điểm của nó → 时代. 年代 cần số (八十年代); 年纪, 身材 không hợp.'},
  {wrong:'钱包不见了，他____是邻居家的孩子拿的，可是又没有证据。',opts:['怀疑','疑问','询问','毫无'],ans:0,exp:'怀疑 là ĐỘNG TỪ, mang cả một mệnh đề phía sau (怀疑是邻居家的孩子拿的). 疑问 là danh từ (有疑问); 询问 là hỏi han; 毫无 cần danh từ theo sau.'},
  {wrong:'看完说明书，我对这台机器的使用方法已经没有什么____了。',opts:['疑问','怀疑','记录','印刷'],ans:0,exp:'Chỗ chưa hiểu, muốn hỏi → 疑问 (danh từ). 怀疑 là nghi ngờ đúng sai, thật giả — không dùng cho chuyện chưa hiểu cách dùng; 记录, 印刷 không hợp nghĩa.'},
  {wrong:'这辆车要三十万，我一个月才挣五千，哪儿买得____啊？',opts:['起','完','动','见'],ans:0,exp:'买得起 / 买不起 = có / không đủ tiền mua. 哪儿买得起啊？ là câu hỏi tu từ = mua sao nổi. 买得完, 买得动, 买得见 đều không có nghĩa này.'},
  {wrong:'这本书早就卖完了，现在想买也买____了。',opts:['不到','不起','不动','不完'],ans:0,exp:'Hết hàng nên không mua được → 买不到. 买不起 là không đủ TIỀN mua (sách vẫn còn); 买不动, 买不完 không có nghĩa này.'},
  {wrong:'我的笔找不到了，你能借我一____笔吗？',opts:['支','只','张','块'],ans:0,exp:'Bút là vật hình que dài → lượng từ 支 (cũng dùng cho 军队). 只 dùng cho con vật hoặc một chiếc trong một đôi; 张 cho vật mỏng phẳng (桌子, 地图); 块 cho miếng, cục.'},
  {wrong:'他用一本书____着手机，一边吃饭一边看电影。',opts:['支','翻','搭','涨'],ans:0,exp:'支 (động từ) = chống, đỡ cho vật đứng vững: 用书支着手机. 翻 là lật; 搭 là vắt lên; 涨 là tăng giá.'},
  {wrong:'你____什么说是我弄坏的？你又没看见。',opts:['凭','对','把','替'],ans:0,exp:'凭什么 + V？ = dựa vào đâu mà…, câu chất vấn không hài lòng. 对, 把, 替 không đi với 什么 theo nghĩa này.'},
  {wrong:'我今天下午要去银行____一张信用卡。',opts:['办理','从事','登记','出版'],ans:0,exp:'办理 + 手续/业务/信用卡 = làm (thủ tục, giấy tờ). 从事 + nghề nghiệp; 登记 là ghi tên vào sổ; 出版 là xuất bản sách.'}
];

// ══════════════════════════════════════════
// DỊCH
// ══════════════════════════════════════════
var translateData = [
  {vi:'Bộ truyện tranh này tuy in rất đẹp, nhưng từ khi tăng giá thì tôi thật sự không mua nổi nữa.',zh:'这套连环画虽然印刷得很精美，可是价格涨了以后我实在买不起了。',py:'Zhè tào liánhuánhuà suīrán yìnshuā de hěn jīngměi, kěshì jiàgé zhǎngle yǐhòu wǒ shízài mǎi bu qǐ le.',goiY:['虽然……可是……','印刷','涨','买不起'],giai:'买不起 = không đủ tiền mua (V + 不 + 起); 印刷得很精美 là bổ ngữ trạng thái sau 得; 套 là lượng từ cho bộ sách.'},
  {vi:'Nếu cậu không có bằng chứng thì không thể dựa vào cảm giác mà nói là tớ lấy sách của cậu.',zh:'假如你没有证据，就不能凭感觉说是我拿了你的书。',py:'Jiǎrú nǐ méiyǒu zhèngjù, jiù bù néng píng gǎnjué shuō shì wǒ ná le nǐ de shū.',goiY:['假如……就……','凭','证据'],giai:'假如 = 如果 (văn viết hơn), vế sau dùng 就; 凭 + N + V: 凭感觉说 = dựa vào cảm giác mà nói.'},
  {vi:'Ngày nay trên mạng có biết bao thú giải trí, thanh thiếu niên lại ngày càng không thích đọc sách, có người thậm chí cả năm không đọc hết nổi một cuốn.',zh:'如今网络上的娱乐那么多，青少年却越来越不爱看书了，有的人甚至一年连一本书都读不完。',py:'Rújīn wǎngluò shang de yúlè nàme duō, qīngshàonián què yuèláiyuè bú ài kàn shū le, yǒu de rén shènzhì yì nián lián yì běn shū dōu dú bu wán.',goiY:['如今','娱乐','青少年','连……都……'],giai:'如今 (bài 5) = ngày nay; 却 chuyển ý trái mong đợi; 连一本书都读不完 = đến một cuốn cũng đọc không hết.'},
  {vi:'Khi làm thủ tục mượn sách ở thư viện, nếu chưa đóng tiền cọc thì mỗi lần chỉ được mượn tối đa hai cuốn.',zh:'在图书馆办理借书手续时，如果没交押金，一次最多只能借两册。',py:'Zài túshūguǎn bànlǐ jiè shū shǒuxù shí, rúguǒ méi jiāo yājīn, yí cì zuì duō zhǐ néng jiè liǎng cè.',goiY:['办理手续','押金','最多','册'],giai:'办理 + 手续 là cụm cố định; 最多 + 只能 = tối đa chỉ được; 册 là lượng từ cho sách (văn viết).'},
  {vi:'Ông tôi tuổi đã cao nhưng vẫn thích sưu tầm ảnh cũ và truyện tranh cũ, ông bảo chúng ghi lại những kỷ niệm đẹp nhất của thời đại ông.',zh:'爷爷年纪大了，却依然喜欢收藏老照片和旧连环画，他说那些东西记录了他那个年代最美好的回忆。',py:'Yéye niánjì dà le, què yīrán xǐhuan shōucáng lǎo zhàopiàn hé jiù liánhuánhuà, tā shuō nàxiē dōngxi jìlùle tā nàge niándài zuì měihǎo de huíyì.',goiY:['年纪','依然','收藏','记录'],giai:'记录 ở đây là động từ (ghi lại) nên không viết 纪录; 那个年代 = thời ấy (年代 chỉ một quãng thời gian, ở đây không cần số).'},
  {vi:'Dù sau này công việc có bận đến đâu, tôi cũng muốn giống như cụ già bày sạp sách kia, hết sức giúp đỡ những đứa trẻ muốn đọc sách mà không mua nổi sách.',zh:'哪怕将来从事的工作再忙，我也要像那位摆书摊的老人一样，尽力帮助那些想读书又买不起书的孩子。',py:'Nǎpà jiānglái cóngshì de gōngzuò zài máng, wǒ yě yào xiàng nà wèi bǎi shūtān de lǎorén yíyàng, jìnlì bāngzhù nàxiē xiǎng dú shū yòu mǎi bu qǐ shū de háizi.',goiY:['哪怕……也……','从事','尽力','买不起'],giai:'哪怕 (bài 18) + 再 + Adj，也…… = dù có… đến đâu cũng…; 尽力 (bài 7) = hết sức.'}
];

// Chiều Trung → Việt — nội dung khác với chiều trên
var translateDataRev = [
  {vi:'Cái lán của sạp sách tuy chỉ dựng bằng gỗ, nhưng lúc nào cũng chật kín trẻ con đến đọc.',zh:'书摊的棚子虽然是用木头搭起来的，却总是坐满了看书的孩子。',py:'Shūtān de péngzi suīrán shì yòng mùtou dā qǐlai de, què zǒngshì zuòmǎnle kàn shū de háizi.',goiY:['棚子 = lều, lán','搭 = dựng','坐满 = ngồi chật kín'],giai:'是……的 nhấn mạnh chất liệu (用木头); 搭起来 = dựng lên; 坐满了 + người = ngồi kín chỗ.'},
  {vi:'Những cuốn truyện tranh ấy được xếp ngay ngắn, đề tài cũng rất phong phú, vừa có truyện lịch sử, lại có truyện ngụ ngôn và kiến thức khoa học.',zh:'那些小人书摆得十分整齐，题材也很丰富，既有历史故事，又有寓言和科学知识。',py:'Nàxiē xiǎorénshū bǎi de shífēn zhěngqí, tícái yě hěn fēngfù, jì yǒu lìshǐ gùshi, yòu yǒu yùyán hé kēxué zhīshi.',goiY:['整齐 = ngay ngắn','题材 = đề tài','既……又…… = vừa… vừa…'],giai:'摆得 + 十分整齐 là bổ ngữ trạng thái; 既……又…… nối hai đặc điểm cùng tồn tại.'},
  {vi:'Chủ sạp là một cụ già đã có tuổi, cụ không bắt đăng ký, cũng chẳng thu tiền cọc, hoàn toàn dựa vào chữ tín của mọi người.',zh:'摊主是位上了年纪的老人，他既不要求登记，也不收押金，全凭大家讲信用。',py:'Tānzhǔ shì wèi shàngle niánjì de lǎorén, tā jì bù yāoqiú dēngjì, yě bù shōu yājīn, quán píng dàjiā jiǎng xìnyòng.',goiY:['上了年纪 = có tuổi','押金 = tiền cọc','全凭 = hoàn toàn dựa vào'],giai:'全凭 + N = hoàn toàn dựa vào; 既不……也不…… = không… cũng không….'},
  {vi:'Nếu có ai chưa đọc xong đã phải về, cụ liền ghi lại vào sổ, để hôm sau người đó đến đọc tiếp.',zh:'假如有人没看完就得回家，老人便在本子上记录一下，让他第二天接着来看。',py:'Jiǎrú yǒu rén méi kànwán jiù děi huí jiā, lǎorén biàn zài běnzi shang jìlù yíxià, ràng tā dì-èr tiān jiēzhe lái kàn.',goiY:['假如 = nếu','便 = liền (văn viết của 就)','记录 = ghi lại'],giai:'便 (bài 7) = 就 trong văn viết; 记录一下 là động từ nên không thể là 纪录.'},
  {vi:'Từ khi có ti vi và mạng internet, truyện tranh dần biến mất khỏi đời sống của mọi người, còn những cuốn cũ in đẹp thì ngược lại giá trị tăng vọt, trở thành đồ sưu tầm.',zh:'有了电视和网络以后，小人书就逐渐离开了人们的生活，而那些印刷精美的老书反而身价大涨，成了很多人收藏的东西。',py:'Yǒule diànshì hé wǎngluò yǐhòu, xiǎorénshū jiù zhújiàn líkāile rénmen de shēnghuó, ér nàxiē yìnshuā jīngměi de lǎo shū fǎn\'ér shēnjià dà zhǎng, chéngle hěn duō rén shōucáng de dōngxi.',goiY:['逐渐 = dần dần','反而 = ngược lại','身价大涨 = giá trị tăng vọt'],giai:'反而 (bài 4) chỉ kết quả trái với dự đoán; 涨 đọc zhǎng; 很多人收藏的东西 = thứ nhiều người sưu tầm.'},
  {vi:'Ngày nay ở khu Phan Gia Viên, Hộ Quốc Tự vẫn còn tìm được những sạp bán truyện tranh cũ, có thể thấy lối giải trí xưa này vẫn chưa hề bị người ta hoàn toàn lãng quên.',zh:'如今在潘家园、护国寺一带，还能找到卖旧连环画的书摊，可见这种过去的娱乐方式并没有被人们完全忘记。',py:'Rújīn zài Pānjiāyuán, Hùguósì yídài, hái néng zhǎodào mài jiù liánhuánhuà de shūtān, kějiàn zhè zhǒng guòqù de yúlè fāngshì bìng méiyǒu bèi rénmen wánquán wàngjì.',goiY:['一带 = khu vực','可见 = có thể thấy','并没有 = hoàn toàn không'],giai:'可见 (bài 18) rút ra kết luận từ sự việc vừa nêu; 并 + 没有 nhấn mạnh phủ định, bác bỏ suy nghĩ ngược lại.'}
];

// ══════════════════════════════════════════
// LUYỆN VIẾT — 命题写作 “我的童年” (tr. 29)
// ══════════════════════════════════════════
var writingData = {
  words:['年代','单调','娱乐','收藏','假如'],
  prompt:'Dùng đủ 5 từ cho sẵn, viết một đoạn khoảng 80 chữ kể về tuổi thơ của em: em lớn lên ở đâu, hồi đó chơi gì, có món đồ / kỷ niệm nào em còn giữ, và em nghĩ gì khi so với bây giờ.',
  de:'请结合下列词语（要全部使用），写一篇80字左右的短文，题目是“我的童年”。',
  outline:[
    'Câu mở: tuổi thơ em trải qua ở đâu, thời ấy thế nào (dùng 年代, 单调).',
    'Thú vui của em hồi đó — một hoạt động CỤ THỂ (dùng 娱乐).',
    'Một món đồ / một người để lại ấn tượng sâu, đến giờ vẫn giữ (dùng 收藏).',
    'Kết: so sánh với bây giờ, nêu cảm nghĩ (dùng 假如).'
  ],
  model:{
    zh:'我的童年是在农村度过的。那个年代，生活比较单调，没有网络，也没有动画片，我们最主要的娱乐就是在河边玩儿和看小人书。爷爷收藏了很多小人书，我常常一看就是一下午。现在的孩子什么都有，可假如让我选择，我还是更喜欢那时候简单的快乐。',
    py:'Wǒ de tóngnián shì zài nóngcūn dùguò de. Nàge niándài, shēnghuó bǐjiào dāndiào, méiyǒu wǎngluò, yě méiyǒu dònghuàpiàn, wǒmen zuì zhǔyào de yúlè jiù shì zài hé biān wánr hé kàn xiǎorénshū. Yéye shōucángle hěn duō xiǎorénshū, wǒ chángcháng yí kàn jiù shì yí xiàwǔ. Xiànzài de háizi shénme dōu yǒu, kě jiǎrú ràng wǒ xuǎnzé, wǒ háishi gèng xǐhuan nà shíhou jiǎndān de kuàilè.',
    vn:'Tuổi thơ của tôi trải qua ở nông thôn. Thời ấy cuộc sống khá đơn điệu, không có Internet, cũng không có phim hoạt hình, thú vui chủ yếu nhất của chúng tôi là chơi bên bờ sông và đọc truyện tranh. Ông nội sưu tầm rất nhiều truyện tranh, tôi thường cứ đọc là hết cả buổi chiều. Trẻ con bây giờ cái gì cũng có, nhưng nếu được chọn, tôi vẫn thích niềm vui giản dị của thời ấy hơn.'
  },
  checklist:[
    'Đã dùng đủ cả 5 từ cho sẵn chưa?',
    'Đủ khoảng 80 chữ chưa (đếm ô vuông, không đếm dấu câu)?',
    'Có kể một kỷ niệm / một món đồ CỤ THỂ của em, hay chỉ nói chung chung “tuổi thơ rất vui”?',
    'Thập niên viết đúng dạng số + 年代 (八十年代, 那个年代) — không viết 八十时代?',
    'Mở đoạn lùi vào 2 ô, dấu câu chiếm một ô — đúng quy cách bài thi chưa?'
  ],
  tuDung:[
    {
      tu:'年代',
      loai:'danh từ',
      cach:'(世纪) + số chẵn chục + 年代 · 那个年代 · 在……年代',
      sai:[
        {re:'[一二三四五六七八九]十时代',sua:'……十年代',giai:'Thập niên dùng 年代: 八十年代. 时代 là thời đại lớn (网络时代), không đi với số.'},
        {re:'年代的时候',sua:'那个年代 / 在……年代',giai:'年代 đã là khoảng thời gian, thêm 的时候 bị thừa.',nhe:true}
      ]
    },
    {
      tu:'单调',
      loai:'tính từ',
      cach:'生活 / 色彩 / 形式 + (很 / 比较) 单调 · 单调的 + N',
      sai:[
        {re:'单调了?(我|我们|大家)的',sua:'让……变得单调',giai:'单调 là TÍNH TỪ, không mang tân ngữ. Muốn nói “làm cho … đơn điệu” dùng 让……变得单调.'},
        {re:'单调地(玩|过|生活)',sua:'过得很单调',giai:'Nói cuộc sống đơn điệu thì 单调 làm vị ngữ / bổ ngữ: 生活很单调, 过得很单调.',nhe:true}
      ]
    },
    {
      tu:'娱乐',
      loai:'danh từ / động từ',
      cach:'……是……的娱乐之一 · 娱乐活动 · 娱乐一下',
      sai:[
        {re:'玩儿?娱乐',sua:'娱乐 / 玩儿',giai:'娱乐 đã là “vui chơi”, không nói 玩娱乐. Dùng một trong hai: 娱乐一下 hoặc 玩儿.'},
        {re:'一个娱乐之一|一种娱乐之一',sua:'……娱乐之一',giai:'之一 đã có nghĩa “một trong những”, bỏ 一个 / 一种 đi.',nhe:true}
      ]
    },
    {
      tu:'收藏',
      loai:'động từ',
      cach:'收藏 + N (邮票 / 小人书) · 收藏品 · 有收藏价值',
      sai:[
        {re:'收藏了?(糖|零食|作业|考试卷)',sua:'藏起来 / 放好',giai:'收藏 dùng cho đồ có giá trị sưu tầm. Giấu đồ ăn, bài tập thì dùng 藏(起来).'},
        {re:'(很|非常|特别)收藏',sua:'很喜欢收藏',giai:'收藏 là động từ hành động, không đứng sau 很. Nói 很喜欢收藏…….',nhe:true}
      ]
    },
    {
      tu:'假如',
      loai:'liên từ',
      cach:'假如……，(就 / 那么)…… · 假如让我选择，我……',
      sai:[
        {re:'假如[^，。]*，(所以|但是)',sua:'假如……，就 / 那么……',giai:'假如 nêu giả thiết, vế sau đi với 就 / 那么, không đi với 所以 / 但是.'},
        {re:'如果假如|假如如果',sua:'假如 hoặc 如果',giai:'Hai liên từ cùng nghĩa, dùng một là đủ.',nhe:true}
      ]
    }
  ],
  cauTruc:[
    {ten:'……是在 + nơi chốn + 度过的',nhan:'是……的',vd:'我的童年是在农村度过的。',khi:'Câu MỞ: nhấn mạnh nơi em trải qua tuổi thơ (是……的, HSK 3).'},
    {ten:'那个年代，……',nhan:'年代',vd:'那个年代，生活比较单调。',khi:'Đưa người đọc về thời xưa.'},
    {ten:'没有……，也没有……',nhan:'也',vd:'没有网络，也没有动画片。',khi:'Liệt kê cái thiếu, làm nổi bật sự đơn điệu (giống câu bài khoá).'},
    {ten:'……最主要的娱乐就是……',nhan:'娱乐',vd:'我们最主要的娱乐就是看小人书。',khi:'Giới thiệu thú vui chính.'},
    {ten:'一 + V + 就是 + thời gian dài',nhan:'一……就是',vd:'我常常一看就是一下午。',khi:'Nói mê một việc đến quên thời gian.'},
    {ten:'V + 不起 / 得起',nhan:'起',vd:'那时候家里穷，买不起新书，只能去书摊租着看。',khi:'Kể hoàn cảnh khó khăn (điểm ngữ pháp 1 của bài).'},
    {ten:'假如……，我还是……',nhan:'假如',vd:'假如让我选择，我还是更喜欢那时候。',khi:'Câu KẾT: bày tỏ cảm nghĩ.'}
  ],
  sapXep:[
    {manh:['出版了','已经','她','三本','小说'],dap:'她已经出版了三本小说。',vn:'Cô ấy đã xuất bản ba cuốn tiểu thuyết.',giai:'Chủ ngữ 她 → 已经 → động từ 出版了 → tân ngữ (số lượng 三本 + danh từ 小说).'},
    {manh:['吸引了','这部动画片','无数的','小观众'],dap:'这部动画片吸引了无数的小观众。',vn:'Bộ phim hoạt hình này đã thu hút vô số khán giả nhỏ tuổi.',giai:'Chủ ngữ 这部动画片 → động từ 吸引了 → tân ngữ; 无数的 làm định ngữ đứng trước danh từ.'},
    {manh:['登记','请先','一下','您的姓名','在这里'],dap:'请先在这里登记一下您的姓名。',vn:'Xin hãy đăng ký tên của ngài ở đây trước.',giai:'请 + 先 + 在这里 (nơi chốn đứng trước động từ) + 登记一下 + tân ngữ.'},
    {manh:['题材','这本小说的','十分','新鲜'],dap:'这本小说的题材十分新鲜。',vn:'Đề tài của cuốn tiểu thuyết này rất mới mẻ.',giai:'Định ngữ 这本小说的 + chủ ngữ 题材 → phó từ 十分 → tính từ 新鲜.'},
    {manh:['这套连环画的','价格','翻了','一倍'],dap:'这套连环画的价格翻了一倍。',vn:'Giá của bộ truyện tranh này đã tăng gấp đôi.',giai:'翻了一倍 = tăng gấp đôi; chủ ngữ là 价格, định ngữ 这套连环画的 đứng trước.'},
    {manh:['摆得','桌子上的东西','非常整齐'],dap:'桌子上的东西摆得非常整齐。',vn:'Đồ đạc trên bàn được xếp rất ngay ngắn.',giai:'Chủ ngữ 桌子上的东西 → động từ 摆 + 得 + bổ ngữ trạng thái 非常整齐.'}
  ]
};

// ══════════════════════════════════════════
// LUYỆN NÓI — 话题讨论 (tr. 29)
// ══════════════════════════════════════════
var speakingData = {
  intro:'Ba câu đầu là <b>话题讨论</b> của sách (tr. 29: 童年的生活与记忆), câu 4 mở rộng. Bấm nút loa nghe câu hỏi, rồi <b>tự ghi âm câu trả lời của mình trước</b> — đừng đọc theo câu mẫu. Cố dùng từ mới: 年代 · 单调 · 娱乐 · 收藏 · 印象 · V不起.',
  questions:[
    {q_zh:'你小时候是在什么地方长大的？',q_vn:'Hồi nhỏ em lớn lên ở đâu?',hint:'Dùng 是……的, tả thêm nơi đó một hai câu',sample:'我是在一个小城市长大的。那时候家附近没有大商场，也没有什么好玩儿的地方，可是有一座小山，我们天天去山上跑来跑去。',sample_vn:'Tôi lớn lên ở một thành phố nhỏ. Hồi ấy gần nhà không có trung tâm thương mại, cũng chẳng có chỗ nào vui chơi, nhưng có một ngọn đồi nhỏ, ngày nào chúng tôi cũng lên đồi chạy nhảy.',note:'Câu hỏi 是在什么地方长大的 → trả lời bằng đúng khung 是在……长大的, rồi thêm chi tiết cho sinh động.'},
    {q_zh:'小时候，哪些人、哪些事或者哪些东西给你留下的印象最深刻？',q_vn:'Hồi nhỏ, người nào, việc gì hoặc đồ vật gì để lại ấn tượng sâu sắc nhất cho em?',hint:'Chọn MỘT người/vật, kể một chi tiết cụ thể',sample:'给我留下印象最深刻的是外公。他收藏了很多旧小人书，每次我去他家，他都让我随便翻，我一坐下就不想走了。',sample_vn:'Người để lại ấn tượng sâu sắc nhất cho tôi là ông ngoại. Ông sưu tầm rất nhiều truyện tranh cũ, mỗi lần tôi đến nhà ông, ông đều cho tôi tha hồ lật xem, tôi cứ ngồi xuống là không muốn về.',note:'Chỉ chọn một đối tượng để kể sâu, đừng liệt kê nhiều thứ.'},
    {q_zh:'为什么这些人、这些事、这些东西给你留下了深刻的印象？',q_vn:'Vì sao những người, việc, đồ vật ấy để lại ấn tượng sâu sắc cho em?',hint:'Nêu lý do bằng 因为……, dùng V + 不起',sample:'因为那个年代生活很单调，家里又穷，买不起新书，外公的小人书就是我最主要的娱乐。直到今天，我还觉得特别温暖。',sample_vn:'Vì thời ấy cuộc sống rất đơn điệu, nhà lại nghèo, không mua nổi sách mới, truyện tranh của ông ngoại chính là thú giải trí chủ yếu nhất của tôi. Đến tận hôm nay tôi vẫn thấy rất ấm áp.',note:'Kết thúc bằng cảm xúc hiện tại giúp câu trả lời có chiều sâu.'},
    {q_zh:'你觉得现在的孩子和以前的孩子比，谁更快乐？为什么？',q_vn:'Em thấy trẻ con bây giờ so với trẻ con ngày xưa, ai vui hơn? Vì sao?',hint:'Chọn một bên + lý do, dùng 假如',sample:'我觉得以前的孩子更快乐。现在的孩子虽然有网络、有动画片，但是作业太多，很少出去玩儿。假如能回到过去，我更愿意过以前那种简单的生活。',sample_vn:'Tôi thấy trẻ con ngày xưa vui hơn. Trẻ con bây giờ tuy có Internet, có phim hoạt hình, nhưng bài tập quá nhiều, rất ít khi ra ngoài chơi. Nếu được quay về quá khứ, tôi thích sống cuộc sống giản dị ngày xưa hơn.',note:'Nêu rõ quan điểm ngay câu đầu, sau đó mới giải thích.'}
  ]
};

// ══════════════════════════════════════════
// NGHE THEO ĐỀ — 练习册 bài 20, câu 1–8
// ══════════════════════════════════════════
var listenExamData = {
  intro:'Đề HSK 5 phần nghe chỉ phát <b>một lượt</b>. Vì vậy ở đây cũng vậy: bấm nút loa nghe, trả lời ngay, rồi mới mở nguyên văn ra đối chiếu. Đừng mở nguyên văn trước — mở trước là mất tác dụng.',
  source:'Nguyên văn: 《HSK标准教程5·练习册》第20课 听力',
  items:[
    {
      n:1,
      lines:[{sp:'女',zh:'爸爸，阳阳可爱看您的那些旧小人书了，特别是那套《西游记》。'},{sp:'男',zh:'你可得保留好，别弄坏了，现在那都是收藏品了。'}],
      q:'男的认为那些小人书怎么样？',
      qvn:'Người đàn ông cho rằng những cuốn truyện tranh đó thế nào?',
      opts:['很有收藏价值','已经被弄坏了','不适合孩子看','应该送给阳阳'],
      ans:0,
      why:'现在那都是收藏品了 = bây giờ đó đều là đồ sưu tầm → rất có giá trị sưu tầm. 别弄坏了 là lời dặn, chưa hỏng.',
      words:['收藏']
    },
    {
      n:2,
      lines:[{sp:'女',zh:'这次没能进决赛，是我太骄傲了，对对手估计不足，准备不够充分。'},{sp:'男',zh:'不要紧，回去好好总结经验，明年再来。'}],
      q:'男的最可能是谁？',
      qvn:'Người đàn ông nhiều khả năng là ai?',
      opts:['教练','对手','记者','裁判'],
      ans:0,
      why:'Người nữ tự kiểm điểm thua trận; người nam động viên “về tổng kết kinh nghiệm, sang năm thi lại” → huấn luyện viên.',
      words:[]
    },
    {
      n:3,
      lines:[{sp:'女',zh:'刘芳岁数不小了，也没个对象，你们学校有合适的吗？给她介绍一个。'},{sp:'男',zh:'教体育的行吗？我们那儿的赵老师曾经得过武术冠军呢。'}],
      q:'关于刘芳，下列哪项正确？',
      qvn:'Về Lưu Phương, câu nào đúng?',
      opts:['是体育老师','得过武术冠军','在学校工作','还没有对象'],
      ans:3,
      why:'也没个对象 = cũng chưa có người yêu. Thầy thể dục, vô địch võ thuật là thầy Triệu — bẫy đổi người.',
      words:[]
    },
    {
      n:4,
      lines:[{sp:'女',zh:'你怎么了？一直打喷嚏、流鼻涕的，感冒了吧？'},{sp:'男',zh:'一到春天，我这花粉过敏的老毛病就又来了。'}],
      q:'男的怎么了？',
      qvn:'Người đàn ông bị làm sao?',
      opts:['发烧了','感冒了','眼睛疼','花粉过敏了'],
      ans:3,
      why:'花粉过敏的老毛病又来了 = bệnh dị ứng phấn hoa cũ lại tái phát. 感冒了吧 chỉ là phỏng đoán của người nữ — bẫy.',
      words:[]
    },
    {
      n:5,
      lines:[{sp:'男',zh:'你们单位新来的小李怎么样？'},{sp:'女',zh:'他平时话不多，干起活儿来却很卖力，多累都不抱怨。'}],
      q:'关于小李的工作表现，可以知道什么？',
      qvn:'Về biểu hiện làm việc của Tiểu Lý, có thể biết điều gì?',
      opts:['话很多','常常抱怨','干活很卖力','经常迟到'],
      ans:2,
      why:'干起活儿来却很卖力 = làm việc rất hăng hái. 话不多, 不抱怨 ngược với phương án A, B.',
      words:[]
    },
    {
      n:6,
      lines:[{sp:'男',zh:'你怎么这么快就回来了？借书证办好了吗？'},{sp:'女',zh:'没有，手续倒是挺简单，登记时才知道要交押金，我没带那么多钱。'}],
      q:'女的为什么没办成借书证？',
      qvn:'Vì sao người phụ nữ không làm được thẻ mượn sách?',
      opts:['没带够押金','手续太复杂','忘带学生证','图书馆关门了'],
      ans:0,
      why:'要交押金，我没带那么多钱 → không mang đủ tiền đặt cọc. 手续倒是挺简单 — thủ tục đơn giản, loại B.',
      words:['手续','登记','押金']
    },
    {
      n:7,
      lines:[{sp:'男',zh:'最近找不到我的学生证了。'},{sp:'女',zh:'那你赶快补一个吧，马上就要毕业了，没有学生证到时候怎么办手续呀？'},{sp:'男',zh:'这个有什么关系吗？'},{sp:'女',zh:'按规定，办理离校手续时，如果交不出学生证，押金就不退还了。'}],
      q:'关于学生证，女的希望男的做什么？',
      qvn:'Về thẻ sinh viên, người phụ nữ mong người đàn ông làm gì?',
      opts:['赶快补办一个','去交押金','马上办离校手续','把押金要回来'],
      ans:0,
      why:'那你赶快补一个吧 = cậu mau làm lại một cái đi.',
      words:['手续','办理','押金']
    },
    {
      n:8,
      lines:[{sp:'男',zh:'你帮我拿个主意，这两部手机你觉得买哪个好？'},{sp:'女',zh:'我不太喜欢大屏的，大的这部显得有点儿笨，而且处理速度也没小的快。'},{sp:'男',zh:'大小我倒不在乎，但这部机身做工比较粗糙。'},{sp:'女',zh:'那还是买这部小的吧。'}],
      q:'男的为什么不买大屏的那部手机？',
      qvn:'Vì sao người đàn ông không mua chiếc điện thoại màn hình lớn?',
      opts:['屏幕太大','处理速度太慢','价格太贵','做工比较粗糙'],
      ans:3,
      why:'大小我倒不在乎 — anh không quan tâm to nhỏ; lý do của anh là 做工比较粗糙. Màn hình to, tốc độ chậm là lý do của người NỮ — bẫy đổi người nói.',
      words:['粗糙']
    }
  ]
};

// ══════════════════════════════════════════
// TÌNH HUỐNG
// ══════════════════════════════════════════
var situationData = {
  intro:'Mỗi tình huống cho sẵn lời của người kia. Em viết lời đáp của mình, <b>bắt buộc dùng đúng từ/cấu trúc ghi ở ô yêu cầu</b>. Viết xong mới mở câu mẫu — câu mẫu chỉ là MỘT cách nói, em nói khác mà đúng yêu cầu vẫn được.',
  items:[
    {scene:'Bạn rủ em mua chiếc đồng hồ hàng hiệu giá rất đắt.',a:{sp:'Bạn',zh:'这块手表真好看，咱们一人买一块吧！',vn:'Chiếc đồng hồ này đẹp quá, mỗi đứa mua một chiếc đi!'},need:['Dùng V + 不起','Gợi ý một cách khác'],sample:'太贵了，我可买不起。咱们去别的店看看吧，说不定有便宜点儿的。',samplePy:'Tài guì le, wǒ kě mǎi bu qǐ. Zánmen qù bié de diàn kànkan ba, shuōbudìng yǒu piányi diǎnr de.',sampleVn:'Đắt quá, tớ không mua nổi đâu. Mình sang cửa hàng khác xem đi, biết đâu có cái rẻ hơn.',tip:'买不起 = không đủ tiền mua (điểm ngữ pháp 1). Khác 买不到 = mua không được (hết hàng).'},
    {scene:'Nhân viên nhà ga hỏi em về vé khi vào ga.',a:{sp:'Nhân viên',zh:'请问，您的车票呢？',vn:'Xin hỏi, vé tàu của anh/chị đâu?'},need:['Dùng 凭','Hỏi lại cho chắc'],sample:'我买的是电子票，听说可以凭护照进站，对吗？',samplePy:'Wǒ mǎi de shì diànzǐ piào, tīngshuō kěyǐ píng hùzhào jìn zhàn, duì ma?',sampleVn:'Tôi mua vé điện tử, nghe nói có thể vào ga bằng hộ chiếu, đúng không ạ?',tip:'凭 + giấy tờ + V (凭护照进站) — cụm 凭…… luôn đứng TRƯỚC động từ chính.'},
    {scene:'Bạn cùng lớp định thuê xe đạp nhưng lo phải đặt cọc.',a:{sp:'Bạn',zh:'租自行车是不是要交很多钱啊？',vn:'Thuê xe đạp có phải đóng nhiều tiền không?'},need:['Dùng 押金, 手续','Giải thích ngắn gọn'],sample:'要先交一百块押金，车还回去以后，押金会全部还给你。手续很简单，登记一下就行。',samplePy:'Yào xiān jiāo yìbǎi kuài yājīn, chē huán huíqu yǐhòu, yājīn huì quánbù huán gěi nǐ. Shǒuxù hěn jiǎndān, dēngjì yíxià jiù xíng.',sampleVn:'Phải đóng trước một trăm tệ tiền cọc, trả xe xong thì tiền cọc sẽ được trả lại hết. Thủ tục đơn giản lắm, đăng ký một chút là được.',tip:'押金 khác 租金 (tiền thuê): tiền cọc sẽ được trả lại.'},
    {scene:'Bạn nước ngoài hỏi em hồi nhỏ trẻ con Việt Nam chơi gì.',a:{sp:'Bạn',zh:'你小时候都有什么娱乐活动？',vn:'Hồi nhỏ cậu có những trò giải trí gì?'},need:['Dùng 娱乐','Kể một hoạt động cụ thể'],sample:'我们最主要的娱乐是跟邻居家的孩子一起踢球，不仅好玩儿，还能交很多朋友。',samplePy:'Wǒmen zuì zhǔyào de yúlè shì gēn línjū jiā de háizi yìqǐ tī qiú, bùjǐn hǎowánr, hái néng jiāo hěn duō péngyou.',sampleVn:'Trò giải trí chủ yếu nhất của bọn tớ là đá bóng với trẻ con nhà hàng xóm, không chỉ vui mà còn kết được nhiều bạn.',tip:'Câu hỏi dùng 娱乐活动 thì trả lời cũng nên dùng lại 娱乐, rồi thêm chi tiết.'},
    {scene:'Ông nội muốn bán bộ truyện tranh cũ đi cho gọn nhà.',a:{sp:'Ông',zh:'这些旧小人书占地方，我想把它们卖了。',vn:'Đống truyện tranh cũ này chiếm chỗ quá, ông muốn bán chúng đi.'},need:['Dùng 收藏','Thuyết phục ông giữ lại'],sample:'爷爷，别卖！这些小人书现在很值钱，有的还被博物馆收藏了呢，您还是留着吧。',samplePy:'Yéye, bié mài! Zhèxiē xiǎorénshū xiànzài hěn zhíqián, yǒu de hái bèi bówùguǎn shōucáng le ne, nín háishi liúzhe ba.',sampleVn:'Ông ơi, đừng bán! Mấy cuốn truyện tranh này bây giờ đáng giá lắm, có cuốn còn được viện bảo tàng sưu tầm nữa đấy, ông cứ giữ lại đi ạ.',tip:'Nói với ông bà dùng 您 và giọng nhẹ nhàng (……吧).'}
  ]
};

// ══════════════════════════════════════════
// CHỌN VĂN PHONG
// ══════════════════════════════════════════
var registerData = {
  intro:'Ở đây <b>cả hai câu đều đúng ngữ pháp</b> — không có câu sai. Việc của em là chọn câu <b>PHÙ HỢP HƠN</b> với hoàn cảnh. Đây chính là chỗ HSK 5 khác hẳn HSK 3–4: không còn là đúng/sai, mà là hay/dở.',
  items:[
    {scene:'Loa phát thanh ở nhà ga thông báo cho hành khách.',a:'请各位准备好车票，凭票上车。',b:'大家把票拿出来，有票才能上去啊。',better:'a',why:'Thông báo công cộng cần trang trọng, gọn: 请各位, 凭票上车. Câu b là khẩu ngữ, như người quen nhắc nhau.'},
    {scene:'Em nhắn tin cho bạn thân sau khi xem giá chiếc điện thoại.',a:'这部手机的价格过高，以我目前的收入，暂时不考虑。',b:'这手机也太贵了，我一个月的工资都不够！',better:'b',why:'Nhắn tin bạn thân dùng khẩu ngữ, nói thẳng cảm xúc: 也太贵了！ Câu a như văn bản báo cáo (价格过高, 暂时不考虑), nghe rất lạ.'},
    {scene:'Bài giới thiệu hiện vật trong viện bảo tàng.',a:'这套连环画出版于二十世纪六十年代，印刷精美，十分少见。',b:'这套小人书是六十年代出的，画得挺好，现在可值钱了。',better:'a',why:'Văn giới thiệu bảo tàng dùng văn viết: 出版于, 印刷精美, 十分少见. Câu b là lời kể chuyện thường ngày.'},
    {scene:'Ngân hàng gửi tin nhắn cho khách hàng.',a:'您的信用卡已经办理成功，感谢您的支持。',b:'你的信用卡弄好了，记得去拿啊。',better:'a',why:'Tin nhắn của ngân hàng phải lịch sự, chuẩn mực: 您, 办理成功, 感谢您的支持. Câu b như bạn bè nhắn nhau.'},
    {scene:'Em kể với bạn về sạp truyện tranh gần nhà hồi nhỏ.',a:'我家附近有个小书摊，一分钱就能看一本，可便宜了！',b:'本人住所附近曾经有一个从事租书业务的书摊，每册只收一分钱。',better:'a',why:'Kể chuyện với bạn thì dùng khẩu ngữ (可便宜了！). Câu b dùng 本人, 住所, 从事……业务 — giọng hồ sơ, nghe cứng.'},
    {scene:'Thầy giáo trả lời phụ huynh hỏi về một học sinh đang gặp khó khăn.',a:'他家里穷，没钱，什么都买不起。',b:'这孩子家里经济条件不太好，我们会想办法帮助他。',better:'b',why:'Thầy giáo nói về học sinh cần tế nhị: 经济条件不太好 thay cho 穷, và nói thêm cách giúp đỡ. Câu a thẳng thừng, thiếu tôn trọng.'}
  ]
};

// ══════════════════════════════════════════
// KỂ LẠI BÀI KHOÁ — bài tập 4 (tr. 28)
// ══════════════════════════════════════════
var retellData = {
  intro:'Bài tập 4 của giáo trình (tr. 28): <b>根据下面的提示词复述课文内容</b> — kể lại bài đọc bằng lời của chính em, KHÔNG đọc thuộc lòng. Sách chia 4 ý (小人书摊为什么会流行 · 小人书摊的情况 · 租借的手续 · 小人书的现状); ở đây tách nhỏ thành 6 bước. Nhìn dàn ý và từ khoá, bấm ghi âm rồi kể một mạch khoảng 1–2 phút.',
  outline:[
    {step:'Truyện tranh là gì, vì sao thịnh hành',cue:'小人书是……出版的连环画…… 五六十年代，生活很单调，没有…… 最主要的娱乐之一',words:['出版','连环画','年代','单调','网络','动画片','娱乐','无数','青少年']},
    {step:'Sạp truyện tranh ra đời',cue:'出现了从事租书业务的小人书摊…… 对买不起书的人来说……',words:['从事','摊','毫无','疑问']},
    {step:'Cái sạp gần nhà tác giả',cue:'一个小棚子…… 用砖头支着木头板子…… 各种题材…… 翻开搭在绳子上',words:['棚子','砖头','支','粗糙','木头','题材','翻','搭']},
    {step:'Chủ sạp',cue:'封皮上整齐的毛笔字…… 上了年纪、身材瘦小的老人……',words:['整齐','年纪','身材']},
    {step:'Thủ tục thuê sách',cue:'孩子和成人…… 每册1分钱…… 假如借走…… 登记…… 画掉记录…… 没有押金，全凭信用',words:['成人','册','假如','登记','记录','手续','办理','押金','凭']},
    {step:'Truyện tranh ngày nay',cue:'只能在潘家园、护国寺找到…… 印刷精美的身价大涨…… 成了收藏品',words:['潘家园','护国寺','印刷','涨','收藏']}
  ],
  checklist:[
    'Kể đủ sáu ý trên chưa, có bỏ mất phần thủ tục thuê sách không?',
    'Có dùng được ít nhất 15 từ mới của bài không?',
    'Có dùng 买不起, 支, 凭 — ba điểm ngữ pháp của bài — đúng vị trí không?',
    'Nói liền mạch khoảng 1–2 phút, hay còn ngắt quãng nhiều?',
    'Có kể bằng LỜI MÌNH, hay đang đọc thuộc nguyên văn?'
  ]
};

// ══════════════════════════════════════════
// BÀI TẬP SÁCH GIÁO KHOA (tr. 27) — bài 1, 2, 3
// ══════════════════════════════════════════
var sgkData = [
  {
    kieu:'kho',
    de:'选择合适的词语填空',
    vn:'Chọn từ thích hợp điền vào chỗ trống',
    tu:['涨','办理','从事','粗糙','单调','整齐'],
    cau:[
      {s:'我想＿＿有挑战性的工作，因为那样可以更好地成长。',dap:['从事']},
      {s:'请96号顾客到2号窗口＿＿业务。',dap:['办理']},
      {s:'这房子装修得太＿＿了！你看，地板都没铺（pū，lót, san）平。',dap:['粗糙']},
      {s:'窗外响起了一阵＿＿的歌声。',dap:['整齐']},
      {s:'他觉得在中国的生活很＿＿，我却觉得很丰富。',dap:['单调']},
      {s:'最近几年，物价＿＿得很厉害。',dap:['涨']}
    ]
  },
  {
    kieu:'ab',
    de:'选择正确答案',
    vn:'Chọn đáp án đúng',
    cau:[
      {s:'一般来说，一包香烟有二十＿＿。',opts:['册','支'],ans:1,giai:'Thuốc lá là vật hình que → lượng từ 支. 册 dùng cho sách, vở.'},
      {s:'今天的课就到这儿，大家有什么＿＿吗？',opts:['疑问','怀疑'],ans:0,giai:'有 + danh từ → 有疑问 (có thắc mắc). 怀疑 chủ yếu là động từ (怀疑某人), không dùng trong câu hỏi này.'},
      {s:'他＿＿高大，动作灵活，很适合打篮球。',opts:['身体','身材'],ans:1,giai:'Tả vóc dáng cao lớn → 身材高大. 身体 nói sức khoẻ (身体健康).'},
      {s:'这可以说是20世纪80＿＿最流行的歌曲。',opts:['年代','时代'],ans:0,giai:'Số chẵn chục + 年代 = thập niên → 80年代. 时代 là thời đại lớn, không đi với số.'}
    ]
  },
  {
    kieu:'vitri',
    de:'给括号里的词选择适当的位置',
    vn:'Chọn vị trí thích hợp cho từ trong ngoặc',
    cau:[
      {s:'我的A经验B来自于C错误的D判断。',tu:'无数',ans:'C',giai:'无数 làm định ngữ đứng trước danh từ: 来自于无数错误的判断 = đến từ vô số lần phán đoán sai.'},
      {s:'今天早上是谁打A了B桌子上C的牛奶D？',tu:'翻',ans:'A',giai:'翻 làm bổ ngữ kết quả ngay sau động từ, trước 了: 打翻了 = làm đổ.'},
      {s:'A你每天都能B做好C一件事，D那么你每天都能得到一份快乐。',tu:'假如',ans:'A',giai:'Liên từ 假如 đứng đầu vế giả thiết, trước chủ ngữ 你; vế sau có 那么 hô ứng.'},
      {s:'你的这个A结论B全C经验和想象，我认为不D科学。',tu:'凭',ans:'C',giai:'全凭 + N = hoàn toàn dựa vào …: 全凭经验和想象 (giống 全凭信用 trong bài khoá).'}
    ]
  }
];
